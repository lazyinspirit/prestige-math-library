---
id: cex-cm-nonuniqueness-without-state-lipschitz
kind: counterexample
title: "Continuity alone does not give uniqueness: $x'=\\sqrt{|x|}$ through the
  origin"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 1
deps:
  [
    def-first-order-ode-initial-value-problem-and-solution,
    def-continuity-real,
    lem-cm-continuous-dependence-on-initial-data,
    thm-algebra-of-continuous-functions,
    thm-composition-with-a-continuous-function,
    thm-continuous-inverse,
    def-abs-value,
    lem-derivative-of-a-power,
    thm-chain-rule,
    thm-algebra-of-derivatives,
    def-derivative
  ]
dependency_roles:
  def-first-order-ode-initial-value-problem-and-solution: mathematical-premise
  def-continuity-real: mathematical-premise
  lem-cm-continuous-dependence-on-initial-data: mathematical-premise
  thm-algebra-of-continuous-functions: mathematical-premise
  thm-composition-with-a-continuous-function: mathematical-premise
  thm-continuous-inverse: mathematical-premise
  def-abs-value: mathematical-premise
  lem-derivative-of-a-power: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-derivative: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems (AMS
        Graduate Studies in Mathematics 140, online edition), Section 2.2 (the
        Picard iteration and the role of the Lipschitz hypothesis; examples of
        nonunique solutions), printed pages 25-32"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
    - title: "J. Arino, MATH 8430 Fundamental Theory of Ordinary Differential
        Equations (University of Manitoba), Section 1.2 (existence and
        uniqueness statements and the necessity of a Lipschitz condition),
        printed pages 12-21"
      url: "https://julien-arino.github.io/assets/pdf/courses/math8430_lecture_notes.\
        pdf"
verification:
  precheck: pass
---

## Statement refuted

Let $F:\mathbb R\to\mathbb R$ be continuous. Then for every $x_0\in\mathbb R$ the initial value problem $x'=F(x)$, $x(0)=x_0$ has at most one solution on every interval containing $0$.

## Facts & Assumptions

**Given:** The field $F(x)=\sqrt{|x|}$ and the initial value problem $x'=F(x)$, $x(0)=0$.

[L1] A solution on an interval $I$ is a differentiable $x:I\to\mathbb R$ with $x'(t)=F(x(t))$ for every $t\in I$ and $x(0)=0$ ([[def-first-order-ode-initial-value-problem-and-solution]], [[def-derivative]]). [given]

[L2] $u\mapsto|u|$ and $u\mapsto\sqrt u$ (on $[0,\infty)$) are continuous, and sums, products and compositions of continuous functions are continuous; $\sqrt{\cdot}$ is the continuous inverse of squaring on $[0,\infty)$ ([[def-abs-value]], [[thm-continuous-inverse]], [[thm-algebra-of-continuous-functions]], [[thm-composition-with-a-continuous-function]], [[def-continuity-real]]). [given]

[L3] $(u^2)'=2u$ and $(\sqrt u)'=1/(2\sqrt u)$ for $u>0$, and the chain rule and algebra of derivatives differentiate compositions, products and sums ([[lem-derivative-of-a-power]], [[thm-chain-rule]], [[thm-algebra-of-derivatives]]). [given]

## Counterexample

**Proof technique:** direct; exhibit two distinct solutions through the same initial datum.

1.1 The map $F(x)=\sqrt{|x|}$ is continuous on $\mathbb R$ as the composition of $u\mapsto|u|$ with the square root, by [L2], so the hypothesis of the refuted statement holds. [given, L2]

1.2 The zero function $x_0\equiv0$ is a solution: it is differentiable with derivative $0=F(0)$ everywhere. [given, L1]

1.3 Define $x_1:\mathbb R\to\mathbb R$ by $x_1(t)=0$ for $t\le1$ and $x_1(t)=(t-1)^2/4$ for $t\ge1$. Then $x_1$ is continuous, and it is differentiable at $t=1$ with derivative $0$ from both sides: for $h>0$, $(h^2/4)/h=h/4\to0$, while the left difference quotient is $0$. For $t\ne1$ the derivative is $0$ (for $t<1$) or $(t-1)/2$ (for $t>1$) by [L3]. Hence $x_1$ is differentiable on $\mathbb R$ with $x_1(0)=0$. [given, L3, algebra]

2.1 For $t>1$, $x_1(t)^2=(t-1)^4/16$, so $\sqrt{|x_1(t)|}=|t-1|/2=(t-1)/2=x_1'(t)$; for $t\le1$, $x_1(t)=0$ and $x_1'(t)=0=\sqrt{|0|}$. Hence $x_1$ is a solution of $x'=F(x)$ through $(0,0)$ by [L1], and it differs from the zero solution on $(1,\infty)$: the initial value problem has two distinct solutions on every interval containing $[0,2]$, refuting the statement. [step 1.2, step 1.3, L1, algebra] ∎

## Remarks

- **Why the Lipschitz hypothesis matters.** The local uniqueness lemma [[lem-cm-continuous-dependence-on-initial-data]] assumes a state-Lipschitz constant; here $F$ fails that hypothesis at the equilibrium: $|F(x)-F(0)|/|x|=1/\sqrt{|x|}\to\infty$ as $x\to0$. The counterexample shows that continuity alone cannot replace it, so the Lipschitz hypothesis in the oscillator existence and uniqueness results is not redundant.
- **No physical claim.** This is a statement about an abstract scalar ODE; it makes no assertion about any mechanical model.
