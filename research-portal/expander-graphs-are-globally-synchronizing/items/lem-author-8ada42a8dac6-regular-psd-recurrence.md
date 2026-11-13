---
id: lem-author-8ada42a8dac6-regular-psd-recurrence
title: Certified regular amplification excludes a PSD half-circle tail
kind: lemma
domain: mathematics
status: draft
origin: pipeline
deps:
  - lem-author-8ada42a8dac6-regular-psd-mass
  - lem-author-8ada42a8dac6-regular-psd-half-circle
  - lem-author-8ada42a8dac6-regular-psd-tail-growth
  - lem-author-2e2d9953c21a-regular-numerical-replay
  - def-expander-sync-two-sided-expander
  - prop-expander-prereq-ordered-angle-inequalities
  - math:thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
  - math:def-operator-norm-on-a-finite-dimensional-inner-product-space
  - math:thm-sine-cosine-signs-monotonicity-and-ranges
dependency_roles:
  lem-author-8ada42a8dac6-regular-psd-mass: mathematical-premise
  lem-author-8ada42a8dac6-regular-psd-half-circle: mathematical-premise
  lem-author-8ada42a8dac6-regular-psd-tail-growth: mathematical-premise
  lem-author-2e2d9953c21a-regular-numerical-replay: mathematical-premise
  def-expander-sync-two-sided-expander: mathematical-premise
  prop-expander-prereq-ordered-angle-inequalities: mathematical-premise
  math:thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
  math:def-operator-norm-on-a-finite-dimensional-inner-product-space: mathematical-premise
  math:thm-sine-cosine-signs-monotonicity-and-ranges: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 7
---

## Statement

Under the regular critical-PSD hypotheses of the mass lemma, suppose the graph is connected and put $C_\beta=\{x:|\theta_x|\ge\beta\}$. Then $C_{\pi/2}$ is empty. The proof uses the scalar certificate with exact rational parameters $a_0=0.0816$, $A_0=2.4093$, $q=2.1274$, $h=3.168$. Define $u=\arcsin(0.3272)$ as an exact real angle using the principal inverse sine: $c_i=A_0^i$ and $\beta_i=\pi/2-iu$ for $0\le i\le3$; $c_{3+k}=A_0^3q^k$ and $\beta_{i+1}=\beta_i-\arcsin(h/c_i)$ afterward. Rounded table entries never replace exact recurrence values.

## Facts & Assumptions

[F1] Use the graph, phase, algebraic and analytic interfaces of [[lem-author-8ada42a8dac6-regular-psd-mass]], [[lem-author-8ada42a8dac6-regular-psd-half-circle]], [[lem-author-8ada42a8dac6-regular-psd-tail-growth]], [[lem-author-2e2d9953c21a-regular-numerical-replay]], [[def-expander-sync-two-sided-expander]], [[prop-expander-prereq-ordered-angle-inequalities]]. Every configuration assumed here is a critical point with positive-semidefinite Hessian; local minimality is never inferred from that condition.

[F2] The norm is the induced operator norm on the finite-dimensional complex vertex space ([[math:def-operator-norm-on-a-finite-dimensional-inner-product-space]]). For $f\ne0$, applying its definition to $f/\|f\|$ gives $\|Tf\|\le\|T\|\|f\|$; this also holds for $f=0$. Cauchy–Schwarz ([[math:thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]) then gives $|f^*Tf|\le\|f\|\|Tf\|\le\|T\|\|f\|^2$. The theorem's linear-first convention has the same norm and absolute pairing as the vertex convention.

[F3] Sine is strictly increasing on $[-\pi/2,\pi/2]$ ([[math:thm-sine-cosine-signs-monotonicity-and-ranges]], with integer parameter $m=0$). Together with sine nonnegativity in [F1], this gives $\sin^2 r\le\sin^2 t$ for $0\le r\le t\le\pi/2$.

## Proof

**Given:** The hypotheses of the Statement.

**Goal:** Establish its conclusions directly for critical PSD phases.

1.1 Regularity gives $\Delta_L=-\Delta_A$. Applying [F2] to $T=\Delta_A$ yields $|f^*\Delta_A f|\le\|\Delta_A\|\|f\|^2\le a_0d\|f\|^2$ for every complex vertex vector $f$. Thus $-a_0dI\preceq\Delta_L\preceq a_0dI$ in the order defined in [F1], so the graph is an $(n,d,a_0,-a_0,a_0)$-expander. Suppose $m_0=|C_{\pi/2}|>0$. The scalar replay proves every listed angle is positive, all are above $0.1356$, $\beta_3\ge0.570$, and $c_i\to\infty$. It also proves $2(1+0.38)a_0/(1-a_0-0.23)<0.3272$, $1+0.23/(2a_0)>A_0$, and $0.38a_0>0.031$. Apply tail growth (a) with $\epsilon=0.23$, $u=0.38$, and each of the first three exact angle decrements. Inductively this gives $|C_{\beta_{i+1}}|\ge\min\{A_0|C_{\beta_i}|,0.031n\}$. All inverse-sine domains and angle ordering are supplied by the replay. [F1, F2, algebra]

2.1 A first-stage cap is impossible. Indeed $\beta_i\ge\beta_3\ge0.570$ for $i=1,2,3$, and the scalar certificate proves $0.031\sin^2(0.570)>5a_0^2/4=0.0083232>0.00832$. For these indices $0<0.570\le\beta_i<\pi/2$, so [F3] gives $\sin^2\beta_i\ge\sin^2(0.570)$. Thus $|C_{\beta_i}|\ge0.031n$ would imply $|C_{\beta_i}|\sin^2\beta_i>0.00832n$, contradicting the PSD mass lemma's tail bound. Hence the first three steps yield the uncapped induction $|C_{\beta_i}|\ge c_i m_0$. [F1, F3, step 1.1, algebra]

3.1 The scalar replay proves $2(1+2a_0)/(1-a_0-0.184)<h$ and $1+0.184/(2a_0)>q$. Whenever $|C_{\beta_i}|\ge c_i m_0$, the exact decrement has sine $h/c_i>2(1+2a_0)m_0/((1-a_0-0.184)|C_{\beta_i}|)$. Tail growth (b) with $\epsilon=0.184$ therefore yields $|C_{\beta_{i+1}}|\ge\min\{q|C_{\beta_i}|,n/2\}$. Each angle exceeds $0.1356>0.131$, while the scalar replay gives $\sin^2(0.131)>5a_0^2/2>2(0.00832)$. Since $0.131<\beta_{i+1}<\pi/2$, [F3] gives $\sin^2\beta_{i+1}\ge\sin^2(0.131)>2(0.00832)$. A cap $|C_{\beta_{i+1}}|\ge n/2$ would therefore imply $|C_{\beta_{i+1}}|\sin^2\beta_{i+1}>0.00832n$, again contradicting the PSD mass lemma. Hence induction gives $|C_{\beta_i}|\ge c_i m_0$ for every $i$. Since $c_i\to\infty$ and $m_0\ge1$, this eventually exceeds $n$, impossible. Consequently $C_{\pi/2}$ is empty. [F1, F3, step 1.1, step 2.1, algebra] ∎
