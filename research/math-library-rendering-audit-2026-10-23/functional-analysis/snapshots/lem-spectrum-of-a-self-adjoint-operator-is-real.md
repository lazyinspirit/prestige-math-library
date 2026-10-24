---
id: lem-spectrum-of-a-self-adjoint-operator-is-real
kind: lemma
title: Spectrum of a self adjoint operator is real
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-hilbert-adjoint-properties, lem-kernel-range-orthogonality-for-hilbert-adjoints, def-self-adjoint-positive-unitary-and-normal-operator, def-countable-choice, def-spectrum-and-resolvent-of-a-bounded-operator, def-hilbert-space, def-operator-norm, def-orthogonality-and-orthogonal-complement, def-complex-conjugate-real-imaginary-part-and-modulus]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, Lemma 5.49, printed pp.238–240"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem, §4, pp.10–13"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
verification:
  audited: 2026-09-22
---

## Statement

Assume Countable Choice. If $T$ is a bounded self-adjoint operator on a nonzero complex Hilbert space, then $\sigma(T)\subseteq\mathbb R$, and $\|(T-zI)x\|\ge|\operatorname{Im}z|\,\|x\|$ for every $z\notin\mathbb R$ and every $x\in H$.

## Facts & Assumptions

[A1] A scalar $\lambda$ lies in the resolvent set $\rho(T)$ exactly when $\lambda I-T$ is bijective with bounded inverse; $\sigma(T)$ is the complement of $\rho(T)$ ([[def-spectrum-and-resolvent-of-a-bounded-operator]]).

[A2] For a self-adjoint $T$ one has $\langle Tx,y\rangle=\langle x,Ty\rangle$ for all $x,y$, and consequently $\langle Tx,x\rangle$ is real; the adjoint is conjugate-linear, so $(T-zI)^*=T-\overline z I$ ([[def-self-adjoint-positive-unitary-and-normal-operator]], [[thm-hilbert-adjoint-properties]]).

[A3] A Hilbert space is complete for its induced norm ([[def-hilbert-space]]).

[A4] For $z\in\mathbb C$ the numbers $\operatorname{Re}z$ and $\operatorname{Im}z$ are real with $z=\operatorname{Re}z+i\operatorname{Im}z$, $\overline z=\operatorname{Re}z-i\operatorname{Im}z$, and $z\notin\mathbb R$ exactly when $\operatorname{Im}z\ne0$ ([[def-complex-conjugate-real-imaginary-part-and-modulus]]).

[A5] For every bounded $S$ one has $(\operatorname{ran}S)^\perp=\ker S^*$ and $\overline{\operatorname{ran}S}=(\ker S^*)^\perp$ ([[lem-kernel-range-orthogonality-for-hilbert-adjoints]]).

[A6] $S^\perp=\{v:\langle v,s\rangle=0\text{ for all }s\in S\}$ and $\{0\}^\perp=H$; a vector orthogonal to every vector of a set spanning a dense subspace is zero ([[def-orthogonality-and-orthogonal-complement]]).

[A7] Countable Choice is the hypothesis under which the adjoint, orthogonality and completeness suppliers are stated, and $\|S\|\le C$ means $\|Sx\|\le C\|x\|$ for every $x$ ([[def-countable-choice]], [[def-operator-norm]]).

## Proof

**Proof technique:** direct.

**Given:** A nonzero complex Hilbert space $H$ and a bounded self-adjoint $T\in\mathcal B(H)$, and a scalar $z=a+bi$ with $a=\operatorname{Re}z$, $b=\operatorname{Im}z$.

1.1 Since $T^*=T$, $zI$ is normal and $(T-zI)^*(T-zI)=(T-aI)^2+b^2I$, so for every $x$ the expansion of $\langle(T-zI)^*(T-zI)x,x\rangle$ gives $\|(T-zI)x\|^2=\|(T-aI)x\|^2+b^2\|x\|^2\ge b^2\|x\|^2$. [A2, A4, algebra]

1.2 If $b\ne0$ and $(T-\overline zI)x=0$ for some $x\ne0$, then testing against $x$ gives $\langle Tx,x\rangle=\overline z\|x\|^2$; the left side is real by self-adjointness while $\overline z\notin\mathbb R$ because $b\ne0$, so no such $x$ exists and $\ker(T-\overline zI)=\{0\}$. [A2, A4, algebra]

2.1 If $b\ne0$ then $\|(T-zI)x\|\ge|b|\,\|x\|$ for every $x$, so $T-zI$ is injective and its range is closed: from $(T-zI)x_n\to y$ the estimate makes $(x_n)$ Cauchy, hence convergent to some $x$ with $(T-zI)x=y$. [step 1.1, A3, A7, algebra]

3.1 If $b\ne0$ then $(\operatorname{ran}(T-zI))^\perp=\ker(T-zI)^*=\ker(T-\overline zI)=\{0\}$, and since the range is closed it equals its own closure, so $\operatorname{ran}(T-zI)=\overline{\operatorname{ran}(T-zI)}=H$. [step 2.1, step 1.2, A5, A6]

4.1 For $z\notin\mathbb R$ the operator $T-zI$ is therefore bijective, and for $y=(T-zI)x$ the lower bound gives $\|(T-zI)^{-1}y\|=\|x\|\le|b|^{-1}\|y\|$, so the inverse is bounded and $z\in\rho(T)$; hence $\sigma(T)\subseteq\mathbb R$. [step 2.1, step 3.1, A1] ∎
