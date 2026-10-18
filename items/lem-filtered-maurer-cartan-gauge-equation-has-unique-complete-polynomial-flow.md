---
id: lem-filtered-maurer-cartan-gauge-equation-has-unique-complete-polynomial-flow
kind: lemma
title: "Existence and uniqueness of complete filtered Maurer–Cartan gauge flow"
status: published
dependency_level: 9
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-filtered-maurer-cartan-gauge-path
  - lem-filtered-l-infinity-taylor-map-extends-to-completed-coalgebra
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification: {}
sources:
  references:
    - title: "Dolgushev and Rogers, A Version of the Goldman–Millson Theorem for Filtered L-infinity-Algebras, section 2 and Appendix A"
      url: "https://arxiv.org/pdf/1407.6735v2"
    - title: "Manetti, Deformation theory via differential graded Lie algebras, section 5"
      url: "https://arxiv.org/pdf/math/0507284v1"
---

## Statement

In the setting of [[def-filtered-maurer-cartan-gauge-path]], for every $w_*\in\operatorname{MC}(P)$ and every $a\in P^{-1}[t]^{\wedge}$ there is a unique $w\in P^0[t]^{\wedge}$ with $w(0)=w_*$ and $w'=q_1^w(a)$. It satisfies $C(w)=0$, so it is an elementary gauge path. Modulo every $F^pW$ the construction stabilizes after finitely many polynomial Picard iterations; no globally bounded polynomial degree is asserted.

## Facts & Assumptions

**Given:** The filtered shifted L∞-algebra, $P=F^1W$, $w_*$ and $a$ of the statement.

[F1] [[def-filtered-maurer-cartan-gauge-path]] supplies complete polynomial coefficients, integration, $C$ and $q_1^w$.

[F2] [[lem-filtered-l-infinity-taylor-map-extends-to-completed-coalgebra]] supplies the total-weight completed coaugmented symmetric coalgebra, the continuous unshuffle coderivation $Q$, and the convergent group-like exponential $e^w$.

## Proof

1.1 Apply [F2] to the identity Taylor morphism of $W$. In its completed coalgebra, multiplication $M_w(x)=e^wx$ is a continuous coalgebra automorphism with inverse $M_{-w}$, because $\Delta(e^wx)=(e^w\otimes e^w)\Delta x$. Consequently $Q^w=M_{-w}QM_w$ is a coderivation and $(Q^w)^2=0$. It may have a constant term, since $M_w$ does not preserve coaugmentation. Expanding the unshuffle formula and choosing the inputs in the distinguished $q$-block gives $q_0^w=C(w)$ and $q_n^w(v_1,\ldots,v_n)=\sum_{j\ge0}q_{n+j}(w^j,v_1,\ldots,v_n)/j!$ for $n\ge1$: the indistinguishable degree-zero $w$ inputs give exactly $1/j!$. Every expression is finite modulo a fixed total weight, and hence converges. [given, F1, F2, construct]

1.2 If $x-y\in F^rP[t]^{\wedge}$ and $a\in F^1P^{-1}[t]^{\wedge}$, then $q_1^x(a)-q_1^y(a)\in F^{r+1}P[t]^{\wedge}$. The unary terms cancel; each term in the multilinear telescoping expansion of every remaining difference contains $x-y$ and $a$, giving filtration at least $r+1$. The other inputs have positive filtration. This calculation is finite modulo each $F^p$. [F1, algebra]

2.1 In particular $Q^w(1)=C(w)$ and $Q^w(a)=C(w)a+q_1^w(a)$. Applying $(Q^w)^2$ to $a$ and projecting to length one gives $(q_1^w)^2(a)+q_2^w(C(w),a)=0$: the length-two term $C(w)a$ contributes $q_2^w(C(w),a)$ and the length-one term contributes $(q_1^w)^2(a)$; other lengths do not survive projection. Applying the same operation to $1$ gives $q_1^w(C(w))=0$. These identities also hold over completed polynomial coefficients, quotient by quotient. [step 1.1, algebra]

2.2 Set $w_0(t)=w_*$ and $w_{j+1}(t)=w_*+\int_0^t q_1^{w_j(u)}(a(u))du$. The first difference lies in $F^1$; step 1.2 and induction give $w_{j+1}-w_j\in F^{j+1}$. Thus the sequence stabilizes in each quotient, where all iterates are genuine polynomials. Completeness defines $w\in P^0[t]^{\wedge}$. Reduction, integration and differentiation commute, so $w(0)=w_*$ and $w'=q_1^w(a)$. [F1, step 1.2, construct]

3.1 If two solutions have the same initial value, their difference obeys the difference of the integral equations. It first lies in $F^1$, and step 1.2 forces it successively into every $F^r$. Separation gives equality. [F1, step 1.2, step 2.2, algebra]

4.1 Termwise differentiation in each finite quotient gives $\frac{d}{dt}C(w)=q_1^w(w')$. Hence $E=C(w)$ satisfies $E'=-q_2^w(E,a)$ by step 2.1, and $E(0)=0$. Its integral equation is $E(t)=-\int_0^t q_2^{w(u)}(E(u),a(u))du$. Initially $E\in F^1$; if $E\in F^r$, the right side lies in $F^{r+1}$ because $a\in F^1$. Induction and separation give $E=0$, completing both existence on the Maurer–Cartan locus and uniqueness. [F1, step 2.1, step 2.2, step 3.1, algebra] ∎
