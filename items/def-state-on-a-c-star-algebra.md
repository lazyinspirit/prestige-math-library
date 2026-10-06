---
id: def-state-on-a-c-star-algebra
kind: definition
title: States and positive functionals on a C star algebra
deps:
  - def-c-star-algebra
  - def-self-adjoint-positive-unitary-and-normal-elements-of-a-c-star-algebra
  - lem-c-star-positive-calculus-and-order-estimates
  - lem-c-star-algebras-and-closed-ideals-have-positive-contractive-approximate-units
  - def-axiom-of-choice
dependency_level: 0
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1, 16 December 2019)"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 8, §8.A: the discussion of positive functionals and states on a C*-algebra"
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix C, §C.5 (positive type functions as positive functionals in the group case) and Appendix F, §F.4"
status: draft
origin: pipeline
---
## Definition

Let $A$ be a complex C\*-algebra ([[def-c-star-algebra]]) and recall that
positivity in $A$ is the algebraic condition $a=b^*b$, without spectral
hypotheses ([[def-self-adjoint-positive-unitary-and-normal-elements-of-a-c-star-algebra]]).
A linear functional $\omega:A\to\mathbb C$ is **positive** if
$$\omega(a^*a)\ge0\qquad\text{for every }a\in A,$$
and a **state** if in addition $\|\omega\|=1$, the norm being the operator
norm of the bounded linear functional on $A$.

## Remarks

- **The positive functionals form a convex cone.** If $\omega,\varphi$ are
  positive, $s,t\ge0$ and $a\in A$, then
  $(s\omega+t\varphi)(a^*a)=s\,\omega(a^*a)+t\,\varphi(a^*a)\ge0$. In
  particular the positive functionals of norm at most one form a convex set,
  since $\|s\omega+t\varphi\|\le s+t$ whenever $s,t\ge0$. Being bounded with
  norm one is part of the definition of a state, not a consequence claimed
  here.
- **Cauchy–Schwarz.** Every positive functional satisfies
  $$|\omega(b^*a)|^2\le\omega(a^*a)\,\omega(b^*b)\qquad(a,b\in A).$$
  Indeed, for all $z\in\mathbb C$ linearity gives
  $$\omega\bigl((a+zb)^*(a+zb)\bigr)=\omega(a^*a)+z\,\omega(a^*b)+\bar z\,\omega(b^*a)+|z|^2\omega(b^*b)\ge0.$$
  The left side is a nonnegative real number for every $z$. Taking $z=1$ and
  $z=i$ and using that both resulting values are real shows
  $\omega(a^*b)+\omega(b^*a)\in\mathbb R$ and
  $i\bigl(\omega(a^*b)-\omega(b^*a)\bigr)\in\mathbb R$; hence
  $\omega(b^*a)=\overline{\omega(a^*b)}$. Writing $p=\omega(a^*a)\ge0$,
  $q=\omega(b^*b)\ge0$ and $u=\omega(a^*b)$, the displayed inequality reads
  $p+2\operatorname{Re}(zu)+|z|^2q\ge0$ for all $z$. If $q>0$, insert
  $z=-\bar u/q$ to obtain $p-|u|^2/q\ge0$, that is $|u|^2\le pq$; if $q=0$,
  the same inequality forces $\operatorname{Re}(zu)\ge-p/2$ for all $z$, which
  is impossible unless $u=0$, and then $|u|^2=0\le pq$. Since
  $|\omega(b^*a)|=|\overline{\omega(a^*b)}|=|u|$, this is the stated
  inequality.
- **Continuity and the norm formula.** Assume AC for the calculus and approximate-unit suppliers
  ([[def-axiom-of-choice]], [[lem-c-star-positive-calculus-and-order-estimates]],
  [[lem-c-star-algebras-and-closed-ideals-have-positive-contractive-approximate-units]]).
  Write $A^+$ here for the positive cone, not the unitization, and put
  $M=\sup\{\omega(b):b\in A^+,\ \|b\|\le1\}$. This supremum is finite:
  otherwise choose positive contractions $b_n$ with $\omega(b_n)>n2^n$.
  The norm-convergent series $b=\sum_{n\ge1}2^{-n}b_n$ is positive, and
  $b-2^{-n}b_n$ is positive because the positive cone is closed. Positivity
  would give $\omega(b)\ge2^{-n}\omega(b_n)>n$ for every $n$, a contradiction.
  Every self-adjoint $h$ is $h_+-h_-$ with $h_\pm\ge0$ and
  $\|h_\pm\|\le\|h\|$ by the calculus. Thus $\omega(h)$ is real and
  $|\omega(h)|\le M\|h\|$. Decomposing $x=h+ik$, with
  $\|h\|,\|k\|\le\|x\|$, gives $|\omega(x)|\le2M\|x\|$, proving continuity.
  For a positive contractive approximate unit $u_\lambda$, Cauchy–Schwarz gives
  $|\omega(u_\lambda x)|^2\le\omega(x^*x)\omega(u_\lambda^2)
  \le M^2\|x\|^2$. Passing to $u_\lambda x\to x$ gives $\|\omega\|\le M$;
  the reverse inequality follows from the definition of the operator norm.
  Hence $\|\omega\|=M$. A nonzero positive functional therefore becomes a
  state upon division by its norm. The zero algebra has no state.
