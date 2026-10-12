---
id: prop-gr-flrw-equation-equivalences
kind: proposition
title: "Equivalence of the Friedmann and acceleration systems, and the derivation of acceleration from Friedmann and continuity where the Hubble parameter does not vanish"
status: draft
origin: session
domain: mathematics
dependency_level: 4
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-flrw-friedmann-system, def-derivative, thm-algebra-of-derivatives, thm-chain-rule, def-interval]
dependency_roles:
  def-gr-flrw-friedmann-system: mathematical-premise
  def-derivative: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  def-interval: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 8 (8.33)-(8.36): the 00 and ij equations and the elimination of second derivatives leading to the Friedmann equations, printed pp. 222-223 (PDF pp. 229-230)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 4.6.2: the acceleration equation and the remark that it follows by differentiating the Friedmann equation and using conservation, printed p. 203 (PDF p. 210)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: pass
---

## Statement

Let $(c,G_N,\Lambda,I,k,a,\varepsilon,p)$ be a Friedmann-system datum, with the
equations (F), (A), (C), (S) as in
[[def-gr-flrw-friedmann-system]] and $H=\dot a/a$. Then:

**(a)** On the interval $I$, the pair of equations (F) and (S) holds if and
only if the pair of equations (F) and (A) holds.

**(b)** If (F) and (C) hold on $I$ and $t_0\in I$ satisfies
$H(t_0)\neq0$, then equation (A) holds at $t_0$. In particular, on any
subinterval on which $H$ has no zero, (F) and (C) imply (A).

The proof of (b) divides by $H(t_0)$; the proposition makes no claim about
points with $H(t_0)=0$, and no claim that (F) and (C) alone determine the
second derivative of $a$ there.

## Facts & Assumptions

**Given:** A Friedmann-system datum $(c,G_N,\Lambda,I,k,a,\varepsilon,p)$ with all its data smooth on the open interval $I$, the equations (F), (A), (C), (S) of [[def-gr-flrw-friedmann-system]], and the Hubble parameter $H=\dot a/a$.

[L1] The equations are the displays of [[def-gr-flrw-friedmann-system]]: (F) is $H^2+kc^2/a^2=\frac{8\pi G_N}{3c^2}\varepsilon+\frac{\Lambda c^2}{3}$, (S) is $-\frac{2a\ddot a+\dot a^2}{c^2}-k+\Lambda a^2=\frac{8\pi G_N}{c^4}pa^2$, (C) is $\dot\varepsilon+3H(\varepsilon+p)=0$, and (A) is $\frac{\ddot a}{a}=-\frac{4\pi G_N}{3c^2}(\varepsilon+3p)+\frac{\Lambda c^2}{3}$, each holding at every point of $I$.

[L2] Differentiable functions on an open interval satisfy the sum, product and quotient rules and the chain rule; in particular $\frac{d}{dt}\left(\frac{1}{a^2}\right)=-\frac{2\dot a}{a^3}$ and $\frac{d}{dt}(\dot a^2)=2\dot a\ddot a$ ([[thm-algebra-of-derivatives]], [[thm-chain-rule]], [[def-derivative]]).

[L3] $H=\dot a/a$ with $a>0$ on $I$, so $H\neq0$ exactly where $\dot a\neq0$; differentiating $H$ at a point of $I$ gives $\dot H=\frac{\ddot a}{a}-H^2$, equivalently $\frac{\ddot a}{a}=\dot H+H^2$ ([[def-gr-flrw-friedmann-system]], [[thm-algebra-of-derivatives]]).

## Proof

**Proof technique:** direct algebra for (a) and differentiation with the product and chain rules for (b).

1.1 (Part (a): equivalence of the two systems in the presence of (F).) Assume (F) holds on $I$, and multiply it by $3c^2$: $\frac{3(\dot a^2+kc^2)}{a^2}=\frac{8\pi G_N\varepsilon}{c^2}+\Lambda c^2$; equivalently $\frac{\dot a^2+kc^2}{c^2}=\frac{8\pi G_N a^2\varepsilon}{3c^4}+\frac{\Lambda a^2}{3}$. Substituting this into the left-hand side of (S) gives $-\frac{2a\ddot a}{c^2}-\frac{\dot a^2+kc^2}{c^2}+\Lambda a^2=-\frac{2a\ddot a}{c^2}-\frac{8\pi G_Na^2\varepsilon}{3c^4}-\frac{\Lambda a^2}{3}+\Lambda a^2=-\frac{2a\ddot a}{c^2}-\frac{8\pi G_Na^2\varepsilon}{3c^4}+\frac{2\Lambda a^2}{3}$. Hence, under (F), equation (S) is equivalent to $-\frac{2a\ddot a}{c^2}-\frac{8\pi G_Na^2\varepsilon}{3c^4}+\frac{2\Lambda a^2}{3}=\frac{8\pi G_Na^2p}{c^4}$; multiplying by $\frac{c^2}{a^2}$ and dividing by $2$ gives $-\frac{\ddot a}{a}=\frac{4\pi G_N}{c^2}\left(\frac{\varepsilon}{3}+p\right)-\frac{\Lambda c^2}{3}$, that is, $\frac{\ddot a}{a}=-\frac{4\pi G_N}{3c^2}(\varepsilon+3p)+\frac{\Lambda c^2}{3}$, which is (A). Each step is an equivalence (multiplication by the nonzero numbers $\frac{c^2}{a^2}$ and $2$, and rearrangement), so (F) and (S) hold exactly when (F) and (A) hold. [L1, algebra]

2.1 (Part (b): differentiation where $H\neq0$.) Assume (F) and (C) on $I$, fix $t_0\in I$ with $H(t_0)\neq0$. The functions on both sides of (F) are smooth on $I$, so differentiating the identity and using [L2] on the terms $\frac{kc^2}{a^2}$ and $H^2=\frac{\dot a^2}{a^2}$ gives $2H\dot H-\frac{2kc^2\dot a}{a^3}=\frac{8\pi G_N}{3c^2}\dot\varepsilon$ at every point of $I$; since $\frac{\dot a}{a}=H$ this is $2H\left(\dot H-\frac{kc^2}{a^2}\right)=\frac{8\pi G_N}{3c^2}\dot\varepsilon$. Substituting the continuity equation (C), $\dot\varepsilon=-3H(\varepsilon+p)$, and dividing by the nonzero number $2H(t_0)$ yields $\dot H-\frac{kc^2}{a^2}=-\frac{4\pi G_N}{c^2}(\varepsilon+p)$ at $t_0$. By [L3], $\frac{\ddot a}{a}=\dot H+H^2$ at $t_0$, so $\frac{\ddot a}{a}=\frac{kc^2}{a^2}+H^2-\frac{4\pi G_N}{c^2}(\varepsilon+p)$; substituting (F) for the sum $\frac{kc^2}{a^2}+H^2=\frac{8\pi G_N\varepsilon}{3c^2}+\frac{\Lambda c^2}{3}$ gives $\frac{\ddot a}{a}=\frac{8\pi G_N\varepsilon}{3c^2}-\frac{4\pi G_N}{c^2}(\varepsilon+p)+\frac{\Lambda c^2}{3}=-\frac{4\pi G_N}{3c^2}(\varepsilon+3p)+\frac{\Lambda c^2}{3}$, which is (A) at $t_0$. This proves part (b) at every point where $H$ does not vanish; the division by $H(t_0)$ is the only use of the hypothesis, and no conclusion is drawn at its zeros. [L1, L2, L3, step 1.1, algebra] ∎

## Remarks

- **Reading of part (a).** Part (a) is the exact sense in which the reduced
  field equations of the cosmological model can be presented either by the
  spatial-component equation (S) or by the acceleration equation (A): with the
  Friedmann equation (F) held fixed, the two presentations carry the same
  content. It is a statement about the four displayed equations and asserts
  nothing about the existence of solutions with given data.

- **The role of the acceleration equation.** Part (b) is the usual derivation
  of the acceleration equation from the Friedmann equation and the continuity
  equation; it proceeds by division by $H$ and therefore holds only where
  $H\neq0$. On regions where $H$ vanishes identically, the derivation gives no
  information and the acceleration equation is retained as an independent
  member of the system; this proposition makes no claim about that case.

- **No equation of state.** None of (F), (A), (C), (S) involves an equation of
  state; a model that adopts $p=P(\varepsilon)$ adds a relation among the data
  and is treated separately on this page.
