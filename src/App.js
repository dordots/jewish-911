import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    direction: rtl;
    font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'SF Pro Display', system-ui, sans-serif;
    -webkit-font-smoothing: antialiased;
  }
`;

const EmergencyBackground = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, #ff000015, #00000008);
  z-index: -1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, transparent 0%, rgba(255, 0, 0, 0.05) 100%);
    animation: pulse-bg 4s ease-in-out infinite;
  }
`;

const HeroSection = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '🆘';
    position: absolute;
    font-size: 40rem;
    opacity: 0.03;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    animation: float 6s ease-in-out infinite;
  }
`;

const Title = styled(motion.h1)`
  font-size: 4.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: #1d1d1f;
  line-height: 1.1;
  letter-spacing: -0.015em;
  
  span {
    display: inline-block;
    color: #e74c3c;
    animation: emergency-text 2s ease-in-out infinite;
  }
`;

const Subtitle = styled(motion.h3)`
  font-size: 1.5rem;
  color: #86868b;
  margin-bottom: 3rem;
  font-weight: 400;
  max-width: 600px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const Button = styled(motion.button)`
  padding: 18px 35px;
  border: none;
  border-radius: 980px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  
  &.primary {
    background: #0071e3;
    color: white;
    
    &:hover {
      background: #0077ED;
    }
  }
  
  &.secondary {
    background: rgba(0, 113, 227, 0.1);
    color: #0071e3;
    
    &:hover {
      background: rgba(0, 113, 227, 0.15);
    }
  }
  
  &.emergency {
    background: #e74c3c;
    color: white;
    font-weight: 600;
    box-shadow: 0 0 30px rgba(231, 76, 60, 0.3);
    animation: emergency-button 2s ease-in-out infinite;
    
    &:hover {
      background: #c0392b;
      transform: scale(1.05);
    }
  }
`;

const Section = styled(motion.section)`
  min-height: 100vh;
  padding: 8rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #ffffff;
  position: relative;
  
  &:nth-child(even) {
    background: #f5f5f7;
  }
`;

const ProblemSection = styled(Section)`
  background: #fff;
  color: #1d1d1f;
`;

const SolutionSection = styled(Section)`
  background: #f5f5f7;
  color: #1d1d1f;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
  margin: 2rem 0;
`;

const Card = styled(motion.div)`
  background: #ffffff;
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
  
  h3 {
    font-size: 1.5rem;
    color: #1d1d1f;
    margin-bottom: 1.5rem;
    font-weight: 600;
  }
  
  p {
    color: #86868b;
    line-height: 1.6;
    font-size: 1.1rem;
  }
`;

const StepContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  background: #ffffff;
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  width: 100%;
  max-width: 600px;
  
  .step-number {
    background: #0071e3;
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 1.5rem;
    font-weight: 600;
  }
  
  p {
    color: #1d1d1f;
    font-size: 1.1rem;
    margin: 0;
  }
`;

const TechSection = styled(Section)`
  background: #fff;
  color: #1d1d1f;
`;

const ImpactSection = styled(Section)`
  background: #f5f5f7;
  color: #1d1d1f;
`;

const Layer2Section = styled(Section)`
  background: #fff;
  color: #1d1d1f;
`;

const TechBanner = styled(motion.div)`
  display: flex;
  gap: 2rem;
  margin: 2rem 0;
  flex-wrap: wrap;
  justify-content: center;
  
  .tech-item {
    background: #ffffff;
    padding: 1rem 2rem;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
    font-size: 1.1rem;
    color: #1d1d1f;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
    }
  }
`;

const ThreeColumnGrid = styled(Grid)`
  grid-template-columns: repeat(3, 1fr);
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const BenefitList = styled.ul`
  list-style: none;
  text-align: right;
  padding: 0;
  
  li {
    margin: 1rem 0;
    display: flex;
    align-items: center;
    gap: 1rem;
    color: #1d1d1f;
    font-size: 1.1rem;
    
    &::before {
      content: '✓';
      color: #0071e3;
      font-weight: bold;
    }
  }
`;

const EmergencyIcon = styled(motion.div)`
  font-size: 2rem;
  margin-right: 0.5rem;
  animation: rotate 3s linear infinite;
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <AnimatePresence>
        <HeroSection>
          <EmergencyBackground
            animate={{
              background: [
                "linear-gradient(45deg, #ff000015, #00000008)",
                "linear-gradient(45deg, #00000008, #ff000015)",
                "linear-gradient(45deg, #ff000015, #00000008)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          
          <Title
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              911
            </motion.span>{" "}
            של העם היהודי
          </Title>
          
          <Subtitle
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.span
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              🚨
            </motion.span>{" "}
            כי בזמן מצוקה, כל שנייה קובעת
          </Subtitle>
          
          <ButtonContainer>
            <Button
              className="emergency"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <EmergencyIcon>🆘</EmergencyIcon>
              אני צריך עזרה
            </Button>
            
            <Button
              className="secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Learn More
            </Button>
            
            <Button
              className="primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Donate Now
            </Button>
          </ButtonContainer>
        </HeroSection>

        <ProblemSection
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Title>למה אנחנו צריכים שינוי? 🤔</Title>
          <Grid>
            {[
              {
                emoji: "🔍",
                title: "ריבוי ארגונים",
                text: "איך אדע לאיזה ארגון לפנות?"
              },
              {
                emoji: "🌐",
                title: "אין פתרון מרכזי",
                text: "כל ארגון מפרסם את עצמו בנפרד"
              },
              {
                emoji: "💔",
                title: "אנשים נופלים בין הכיסאות",
                text: "רבים לא מקבלים את העזרה שהם צריכים"
              }
            ].map((item) => (
              <Card
                key={item.title}
                variant="dark"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <h3>{item.emoji} {item.title}</h3>
                <p>{item.text}</p>
              </Card>
            ))}
          </Grid>
        </ProblemSection>

        <SolutionSection
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Title>הפתרון שלנו 💡</Title>
          <Subtitle>פשוט. מהיר. אפקטיבי.</Subtitle>
          
          {[
            "התקשר או שלח הודעת WhatsApp",
            "AI מבין את הצורך ומוצא התאמה",
            "הבקשה נשלחת לארגון המתאים",
            "אם אף אחד לא עונה בזמן, אנחנו נכנסים לפעולה!"
          ].map((step, index) => (
            <StepContainer
              key={index}
              as={motion.div}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="step-number">{index + 1}</div>
              <p>{step}</p>
            </StepContainer>
          ))}
          
          <Button
            className="primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ marginTop: '2rem' }}
          >
            בקש עזרה עכשיו
          </Button>
        </SolutionSection>

        <TechSection
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Title>איך זה עובד? ⚡️</Title>
          
          <TechBanner>
            {[
              '�� התאמה מבוססת AI',
              '🔄 איזון עומסים',
              '📡 המרת דיבור לטקסט',
              '🔐 שקיפות בבלוקצ׳יין'
            ].map((tech, index) => (
              <motion.div
                className="tech-item"
                key={index}
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {tech}
              </motion.div>
            ))}
          </TechBanner>

          <Card variant="dark">
            <h3>תהליך פשוט לארגונים</h3>
            <BenefitList>
              <li>מלאו טופס פשוט עם השירותים שלכם</li>
              <li>ספקו נקודת קצה ל-API, ואתם באוויר!</li>
            </BenefitList>
          </Card>
        </TechSection>

        <ImpactSection
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Title>ההשפעה שלנו 🌟</Title>
          
          <ThreeColumnGrid>
            {[
              {
                title: "👤 עבור הציבור",
                benefits: [
                  "גישה מיידית לעזרה",
                  "עדכוני סטטוס בזמן אמת",
                  "מקום אחד פשוט לכל דבר"
                ]
              },
              {
                title: "🏢 עבור ארגונים",
                benefits: [
                  "בקשות רלוונטיות יותר",
                  "אין צורך במאמצי שיווק",
                  "אינטגרציה תוך פחות מ-30 דקות"
                ]
              },
              {
                title: "💙 עבור מתנדבים",
                benefits: [
                  "מערכת תגמול שקופה",
                  "מעורבות חברתית",
                  "מעורבות פשוטה ומשמעותית"
                ]
              }
            ].map((column, index) => (
              <Card
                key={index}
                variant="dark"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3>{column.title}</h3>
                <BenefitList>
                  {column.benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </BenefitList>
              </Card>
            ))}
          </ThreeColumnGrid>
        </ImpactSection>

        <Layer2Section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Title>רשת הביטחון 🛡️</Title>
          <Subtitle>אם אף אחד אחר לא יכול לעזור, אנחנו נעזור</Subtitle>

          <Card variant="dark">
            <BenefitList>
              <li>נכנסים לפעולה כשארגונים לא יכולים להגיב</li>
              <li>מספקים שירותים באזורים לא מכוסים</li>
              <li>מגשרים על הפערים ומבטיחים שאף אחד לא נשאר מאחור</li>
            </BenefitList>
          </Card>

          <ButtonContainer style={{ marginTop: '2rem' }}>
            <Button
              className="primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              קבל עזרה
            </Button>
            
            <Button
              className="secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              שתף את הארגון שלך
            </Button>
            
            <Button
              className="primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              תרום עכשיו
            </Button>
          </ButtonContainer>
        </Layer2Section>
      </AnimatePresence>
    </div>
  );
}

export default App;
