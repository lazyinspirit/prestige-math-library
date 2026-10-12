---
id: ex-cm-burgers-riemann-checks
kind: example
title: "Riemann data $u_L=3$, $u_R=1$: shock speed and entropy coefficients, and
  a rarefaction check"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 2
deps:
  - thm-cm-burgers-riemann-shock-and-rarefaction
  - def-cm-scalar-conservation-law-weak-and-entropy-solution
  - def-ck-euclidean-maps-and-diffeomorphisms
  - def-derivative
  - thm-algebra-of-derivatives
  - def-countable-choice
dependency_roles:
  thm-cm-burgers-riemann-shock-and-rarefaction: mathematical-premise
  def-cm-scalar-conservation-law-weak-and-entropy-solution: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-derivative: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "W. Barsukow, Introduction to Conservation Laws: Theory and Numerics
        (lecture notes, TUM, Winter term 2021/22), Chapter 5 (worked scalar
        Riemann problems: shocks and rarefactions)"
      url: "https://user.math.uzh.ch/barsukow/exercises2122/conservationlaws.pdf"
    - title: "L. C. Evans, Entropy and Partial Differential Equations (lecture notes),
        Chapter V, Section B (Burgers examples and entropy admissibility tests)"
      url: "https://math.berkeley.edu/~evans/entropy.and.PDE.pdf"

  precheck: pass
proof_strategy: direct
---

## Example

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]) for the cited Lebesgue weak/entropy formulation.

Take $u_L=3>u_R=1$ in the shock of [[thm-cm-burgers-riemann-shock-and-rarefaction]]. The shock speed is $s=\frac{u_L+u_R}{2}=2$. For the entropy pair $(\eta_k,q_k)$:

- for $k=2$, which lies strictly between $u_R=1$ and $u_L=3$, the interface coefficient is $s[\eta_2]-[q_2]=1$;
- for $k=0$, which lies outside the interval $[1,3]$, the coefficient is $s[\eta_0]-[q_0]=0$;

both nonnegative, in accordance with the theorem's closed formula $s[\eta_k]-[q_k]=-(k-u_L)(k-u_R)$ in the interior case and $=0$ in the exterior case.

For the rarefaction with $u_L=1<u_R=3$, the fan $u=x/t$ satisfies $u_t+uu_x=0$ identically, and the entropy residuals vanish because the fan is continuous.

## Facts & Assumptions

**Given:** Countable choice. The Riemann data above and the theorem of [[thm-cm-burgers-riemann-shock-and-rarefaction]].

[L1] For the shock $u_L>u_R$: $u$ is a weak solution with $s=(u_L+u_R)/2$, and $s[\eta_k]-[q_k]=-(k-u_L)(k-u_R)$ when $u_R<k<u_L$, while $s[\eta_k]-[q_k]=0$ when $k\ge u_L$ or $k\le u_R$ ([[thm-cm-burgers-riemann-shock-and-rarefaction]], [[def-cm-scalar-conservation-law-weak-and-entropy-solution]]).

[L2] For the rarefaction $u_L<u_R$, the fan branch $u(t,x)=x/t$ has $u_t=-x/t^2$ and $u_x=1/t$ ([[thm-algebra-of-derivatives]], [[def-derivative]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-cm-scalar-conservation-law-weak-and-entropy-solution]]).

## Verification

**Proof technique:** direct; substitute the explicit data into the closed formulas.

1.1 For $k=2$: $[\eta_2]=|u_R-2|-|u_L-2|=1-1=0$, and $[q_2]=\operatorname{sign}(u_R-2)\frac{u_R^2-4}{2}-\operatorname{sign}(u_L-2)\frac{u_L^2-4}{2}=(-1)\frac{1-4}{2}-(1)\frac{9-4}{2}=\frac32-\frac52=-1$. Hence $s[\eta_2]-[q_2]=0-(-1)=1=-(2-3)(2-1)$, the interior formula. [given, L1, algebra]

1.2 For $k=0$: $[\eta_0]=1-3=-2$ and $[q_0]=\frac{1}{2}-\frac{9}{2}=-4$, so $s[\eta_0]-[q_0]=2(-2)-(-4)=0$, the exterior value; both computed coefficients are $\ge0$ as the theorem requires. [given, L1, algebra]

1.3 For the rarefaction at $t=1$ and $1<x<3$: $u=x$, and by [L2] with $t=1$, $u_t=-x$, $u_x=1$, so $u_t+uu_x=-x+x=0$. [given, L2, algebra]

2.1 The computations instantiate the theorem's weak-solution and entropy identities at explicit data: the interior entropy coefficient is positive, the exterior one vanishes, and the rarefaction branch satisfies the equation pointwise. [step 1.1, step 1.2, step 1.3, L1, L2, algebra] ∎

## Remarks

- This is a finite check of the closed formulas; it does not test the general weak formulation beyond the stated Riemann profiles, and the numerical values $3,1,2,0$ are chosen only to exhibit both the interior and the exterior case of the entropy coefficient.
