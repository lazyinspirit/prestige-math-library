---
id: ex-gr-flrw-de-sitter-system-check
kind: example
title: "Direct check of the flat vacuum data with a cosmological parameter against the Friedmann-system equations"
status: published
origin: session
domain: mathematics
dependency_level: 4
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-flrw-friedmann-system, def-derivative, thm-algebra-of-derivatives, thm-chain-rule, def-real-exponential-function-and-e, cor-exponential-reciprocal-and-positivity, thm-derivative-of-exponential, def-real-power, thm-real-power-laws, lem-of-square-positive, def-real-order]
dependency_roles:
  def-gr-flrw-friedmann-system: mathematical-premise
  def-derivative: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
  cor-exponential-reciprocal-and-positivity: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  def-real-power: mathematical-premise
  thm-real-power-laws: mathematical-premise
  lem-of-square-positive: mathematical-premise
  def-real-order: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 8 (8.58): a flat vacuum-dominated universe requires Lambda > 0 and the scale factor is proportional to exp(+/- sqrt(Lambda/3) t), printed p. 227 (PDF p. 234)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, Cosmology (Cambridge Part III Mathematical Tripos, 2019 revision), section 1.3.3: the de Sitter universe as the vacuum-dominated solution, printed pp. 40-43 (PDF pp. 46-49)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/cosmo/cosmo.pdf"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 4.5.2 and section 4.6.2: the cosmological-constant term and the flat single-fluid solutions, printed pp. 182-183 and 201-203 (PDF pp. 189-190 and 208-210)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: pass
---

## Example

Fix real constants $c>0$, $G_N>0$, $A>0$, $t_0\in\mathbb R$ and
$\Lambda\in\mathbb R$. Then:

1. If $\Lambda>0$, put $H_\Lambda:=c\sqrt{\Lambda/3}$ and define
   $a:\mathbb R\to(0,\infty)$ by
   $a(t):=A\exp\bigl(H_\Lambda(t-t_0)\bigr)$, together with
   $\varepsilon:=0$ and $p:=0$ on $I:=\mathbb R$. Then the Friedmann-system
   datum $(c,G_N,\Lambda,I,0,a,\varepsilon,p)$ satisfies (F), (A), (C) and
   (S) of [[def-gr-flrw-friedmann-system]] on all of $I$.
2. If $\Lambda<0$, then for every nonempty open interval $I\subseteq\mathbb R$
   and every smooth $a:I\to(0,\infty)$ the datum
   $(c,G_N,\Lambda,I,0,a,0,0)$ fails the Friedmann equation (F) at every point
   of $I$; in particular no such flat vacuum datum satisfies the
   Friedmann-system equations.

## Facts & Assumptions

**Given:** The constants $c,G_N,A,t_0,\Lambda$ with $c>0$, $G_N>0$, $A>0$, the functions $a,\varepsilon,p$ of the example, and the equations (F), (A), (C), (S) of [[def-gr-flrw-friedmann-system]].

[L1] The real exponential is strictly positive on $\mathbb R$ ([[cor-exponential-reciprocal-and-positivity]]) and smooth with $\exp'=\exp$; consequently for real constants $\alpha,\beta$ the function $t\mapsto\beta\exp(\alpha(t-t_0))$ is smooth with derivative $\alpha\beta\exp(\alpha(t-t_0))$ and second derivative $\alpha^2\beta\exp(\alpha(t-t_0))$ ([[def-real-exponential-function-and-e]], [[thm-derivative-of-exponential]], [[thm-chain-rule]], [[thm-algebra-of-derivatives]]).

[L2] For $\Lambda>0$ the real power $\sqrt{\Lambda/3}=(\Lambda/3)^{1/2}$ is a strictly positive real number with $(\Lambda/3)^{1/2}\cdot(\Lambda/3)^{1/2}=(\Lambda/3)^{1}=\Lambda/3$, and real powers satisfy $(x^r)^s=x^{rs}$ and $(xy)^r=x^ry^r$ for $x,y>0$ ([[def-real-power]], [[thm-real-power-laws]]). Hence $H_\Lambda=c(\Lambda/3)^{1/2}$ satisfies $H_\Lambda>0$ and $H_\Lambda^2=c^2\Lambda/3$. For $\Lambda<0$ the number $\Lambda c^2/3$ is negative.

[L3] The equations of [[def-gr-flrw-friedmann-system]] with $k=0$ and $\varepsilon=p=0$ read

$$H^2=\frac{\Lambda c^2}{3},\qquad \frac{\ddot a}{a}=\frac{\Lambda c^2}{3},\qquad \dot\varepsilon+3H(\varepsilon+p)=0,\qquad -\frac{2a\ddot a+\dot a^2}{c^2}+\Lambda a^2=0,$$

where the four displays are (F), (A), (C) and (S) at every point of $I$; the third holds identically for $\varepsilon=p=0$.

[L4] For every real number $x$ one has $x^2\ge0$: if $x=0$ this is clear, and if $x\ne0$ then $x^2>0$ ([[lem-of-square-positive]]). Since $c>0$ gives $c^2>0$, for $\Lambda<0$ the product $\Lambda c^2/3$ is negative ([[def-real-order]]).



## Verification
1.1 (The exponential datum is admissible.) The function $a(t)=A\exp(H_\Lambda(t-t_0))$ is smooth on $\mathbb R$ and strictly positive because $A>0$ and $\exp>0$; by [L1] its logarithmic derivative is $H(t)=\dot a/a=H_\Lambda$ and $\ddot a/a=H_\Lambda^2$. The zero functions $\varepsilon,p$ are smooth, and $(c,G_N,\Lambda,I,0,a,\varepsilon,p)$ with $I=\mathbb R$ is a Friedmann-system datum. [L1, given, algebra]

1.2 ($\Lambda<0$ obstruction.) Suppose $\Lambda<0$, let $I\subseteq\mathbb R$ be a nonempty open interval and let $a:I\to(0,\infty)$ be smooth, and suppose the datum $(c,G_N,\Lambda,I,0,a,0,0)$ satisfies (F). By [L3] the Friedmann equation reads $H(t)^2=\Lambda c^2/3$ at every $t\in I$; by [L4] the right-hand side is negative while $H(t)^2\ge0$ for the real number $H(t)$, a contradiction. Hence no such datum satisfies (F), proving claim 2. [L2, L3, L4, algebra]

2.1 (Friedmann equation for $\Lambda>0$.) By [L3] and step 1.1, (F) reads $H^2=\Lambda c^2/3$; the left-hand side is $H_\Lambda^2$ and $H_\Lambda^2=c^2\Lambda/3=\Lambda c^2/3$ by [L2]. Hence (F) holds on $I$. [L2, L3, step 1.1, algebra]

2.2 (Acceleration equation for $\Lambda>0$.) By [L3] and step 1.1, (A) reads $\ddot a/a=\Lambda c^2/3$, and $\ddot a/a=H_\Lambda^2=\Lambda c^2/3$ by [L2]. Hence (A) holds on $I$. [L2, L3, step 1.1, algebra]

2.3 (Continuity and spatial-component equations for $\Lambda>0$.) For $\varepsilon=p=0$ every term of (C) vanishes, so (C) holds identically. For (S), step 1.1 gives $2a\ddot a+\dot a^2=2a\cdot H_\Lambda^2a+(H_\Lambda a)^2=3H_\Lambda^2a^2$, hence $-(2a\ddot a+\dot a^2)/c^2+\Lambda a^2=-3H_\Lambda^2a^2/c^2+\Lambda a^2=-3(c^2\Lambda/3)a^2/c^2+\Lambda a^2=0$, which is (S) with zero pressure. This completes claim 1. [L2, L3, step 1.1, algebra]

3.1 (Conclusion.) Steps 2.1, 2.2 and 2.3 verify (F), (A), (C) and (S) for the exponential datum of claim 1 on all of $\mathbb R$, and step 1.2 proves the failure of (F) for every flat vacuum datum with $\Lambda<0$, which is claim 2. The verification used only differentiation of the exponential and the sign of a square; no field equation, no reference to the A page and no physical premise was used. [step 2.1, step 2.2, step 2.3, step 1.2] ∎



## Remarks
- **What is checked.** The example verifies the two sign regimes directly in the defining equations of [[def-gr-flrw-friedmann-system]]: for $\Lambda>0$ the exponential datum satisfies all four scalar equations, and for $\Lambda<0$ the Friedmann equation alone is already unsatisfiable because a square cannot equal a negative number. The physical reading of the datum as a vacuum solution of the field law belongs to the A page and is not asserted here.

- **What is not claimed.** No uniqueness of the solutions for $\Lambda>0$, no statement about the flat $\Lambda=0$ case, no numerical value of $\Lambda$ or $H_\Lambda$, and no physical claim about an expanding universe is made.
