---
id: thm-parseval-equivalences-for-a-complete-orthonormal-family
kind: theorem
title: Parseval equivalences for an orthonormal family
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [lem-square-summable-orthogonal-families-have-norm-convergent-finite-sums, thm-bessel-inequality-for-an-arbitrary-orthonormal-family, thm-double-orthogonal-complement-is-closure, def-countable-choice, lem-finite-bessel-inequality, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-orthogonality-and-orthogonal-complement, def-linear-subspace, def-square-summable-family-on-an-arbitrary-index-set, thm-cauchy-schwarz-in-an-inner-product-space, thm-metric-closure-characterisation, lem-sup-epsilon, lem-reverse-triangle-inequality-in-a-normed-space]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §2.1, pp.50–51, Theorem 2.4"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis — Exercise 2.64, p.87"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$(e_i)_{i\in I}$ be an orthonormal family in a real or complex Hilbert space $H$
([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]), and
for $x\in H$ and finite $F\subseteq I$ put

$$P_Fx:=\sum_{i\in F}\langle x,e_i\rangle e_i .$$

Then the following four assertions are equivalent:

1. **(completeness)** the closed linear span of $(e_i)_{i\in I}$ is $H$;
2. **(zero complement)** the only vector orthogonal to every $e_i$ is $0$;
3. **(Parseval)** $\displaystyle\sum_{i\in I}|\langle x,e_i\rangle|^2=\|x\|^2$
   for every $x\in H$, the sum being the supremum of the finite subsums
   ([[def-square-summable-family-on-an-arbitrary-index-set]]);
4. **(net convergence)** the finite-subset net $(P_Fx)_{F\in\operatorname{Fin}(I)}$
   converges to $x$ for every $x\in H$.

Assertion 2 is the statement
$\operatorname{span}\{e_i : i\in I\}^\perp=\{0\}$
([[def-orthogonality-and-orthogonal-complement]]).

## Facts & Assumptions

[A1] If $(e_i)_{i\in I}$ is orthonormal and $a=(a_i)_{i\in I}\in\ell^2(I,\mathbb F)$, then the finite-subset net $\sum_{i\in F}a_ie_i$ converges to a limit $s$ with $\langle s,e_j\rangle=a_j$ for every $j$ and $\|s\|^2=\sum_{i\in I}|a_i|^2$ ([[lem-square-summable-orthogonal-families-have-norm-convergent-finite-sums]]).

[A2] The Bessel inequality holds: $\sum_{i\in I}|\langle x,e_i\rangle|^2\le\|x\|^2$, so the coefficient family lies in $\ell^2(I,\mathbb F)$ ([[thm-bessel-inequality-for-an-arbitrary-orthonormal-family]]).

[A3] For every finite $F$, $\|x-P_Fx\|^2=\|x\|^2-\sum_{i\in F}|\langle x,e_i\rangle|^2$ ([[lem-finite-bessel-inequality]]).

[A4] If $z\in H$ satisfies $\langle z,e_i\rangle=0$ for every $i$, then $\langle z,v\rangle=0$ for every $v$ in the closed linear span of the family: conjugate-linearity, and in particular additivity, in the second argument passes the vanishing to the algebraic span, while $|\langle z,w\rangle|\le\|z\|\|w\|$ passes it to norm limits ([[thm-cauchy-schwarz-in-an-inner-product-space]], [[def-orthogonality-and-orthogonal-complement]]).

[A5] $\overline{A}=\{x : d(x,A)=0\}$ for nonempty $A$, so $x\in\overline{A}$ exactly when vectors of $A$ come arbitrarily close to $x$ ([[thm-metric-closure-characterisation]]).

[A6] The partial sums $t_F:=\sum_{i\in F}|\langle x,e_i\rangle|^2$ are nondecreasing under inclusion with supremum $\sum_{i\in I}|\langle x,e_i\rangle|^2$, and a nondecreasing net of reals converges to its supremum. In particular if every real $\varepsilon>0$ satisfies $S-\varepsilon<t_F\le S$ for some finite $F$ then the net converges to $S$ ([[def-square-summable-family-on-an-arbitrary-index-set]], [[lem-sup-epsilon]]).

[A7] For a linear subspace $M$ of the Hilbert space $H$, $M^{\perp\perp}=\overline M$ ([[thm-double-orthogonal-complement-is-closure]]), and $\{0\}^\perp=H$ ([[def-orthogonality-and-orthogonal-complement]]).

[A8] The span of $\{e_i:i\in I\}$ is a linear subspace and its closure is the closed linear span of the family ([[def-linear-subspace]], [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]).

[A9] The norm is continuous along convergent nets and the square of a convergent scalar net converges to the square of the limit ([[lem-reverse-triangle-inequality-in-a-normed-space]]).

## Proof

**Proof technique:** direct.

**Given:** Countable Choice, an orthonormal family $(e_i)_{i\in I}$ in the Hilbert space $H$, and the partial sums $P_Fx=\sum_{i\in F}\langle x,e_i\rangle e_i$.

1.1 **Completeness implies net convergence.** Assume the closed linear span of the family is $H$ and let $x\in H$. The coefficient family lies in $\ell^2(I,\mathbb F)$ by Bessel, so by [A1] the net $(P_Fx)$ converges to a limit $s$ with $\langle s,e_j\rangle=\langle x,e_j\rangle$ for every $j$; then $z:=x-s$ satisfies $\langle z,e_j\rangle=0$ for every $j$, so $\langle z,v\rangle=0$ for every $v$ in the closed linear span by [A4] and hence $\langle z,x\rangle=0$; therefore $\|z\|^2=\langle z,z\rangle=\langle z,x\rangle-\langle z,s\rangle=0$ and $z=0$, that is $s=x$. [A1, A2, A4, A8]

1.2 **Net convergence implies completeness.** Assume $(P_Fx)$ converges to $x$ for every $x\in H$ and fix $x$. Every $P_Fx$ lies in the span of the family, so for every real $\varepsilon>0$ some vector of that span is within distance $\varepsilon$ of $x$; hence $d(x,\operatorname{span}\{e_i\})=0$ and $x\in\overline{\operatorname{span}\{e_i\}}$, the closed linear span, by [A5] and [A8]. As $x$ was arbitrary, the closed linear span is $H$. [A5, A8]

1.3 **Net convergence implies Parseval.** Assume net convergence and fix $x$. Every finite $F$ satisfies $\|x-P_Fx\|^2=\|x\|^2-t_F$ with $t_F=\sum_{i\in F}|\langle x,e_i\rangle|^2$ by [A3]; since $P_Fx\to x$, continuity of the norm gives $\|x-P_Fx\|^2\to0$, so $t_F\to\|x\|^2$ as a net of reals. But $t_F$ is nondecreasing under inclusion with supremum $\sum_{i\in I}|\langle x,e_i\rangle|^2$, so it converges to that supremum by [A6] and the limit is unique; hence $\sum_{i\in I}|\langle x,e_i\rangle|^2=\|x\|^2$. [A3, A6, A9]

1.4 **Parseval implies zero complement.** Assume Parseval for every $x$ and let $y$ satisfy $\langle y,e_i\rangle=0$ for every $i$. Then all finite subsums $\sum_{i\in F}|\langle y,e_i\rangle|^2$ vanish, so the supremum $\sum_{i\in I}|\langle y,e_i\rangle|^2$ is $0$; Parseval applied to $y$ gives $\|y\|^2=0$, hence $y=0$ by definiteness of the inner product. [A6, A9]

1.5 **Zero complement implies completeness.** Assume no nonzero vector is orthogonal to every $e_i$, and let $M:=\operatorname{span}\{e_i:i\in I\}$, a linear subspace with $M^\perp=\{0\}$. Then $M^{\perp\perp}=\overline M$ by [A7], while $M^{\perp\perp}=(M^\perp)^\perp=\{0\}^\perp=H$ by [A7]; hence the closed linear span $\overline M$ of the family is $H$. [A7, A8]

2.1 The five implications of steps 1.1 to 1.5 form the cycle (completeness) $\Rightarrow$ (net convergence) $\Rightarrow$ (completeness), (net convergence) $\Rightarrow$ (Parseval) $\Rightarrow$ (zero complement) $\Rightarrow$ (completeness), so any one of the four assertions implies all the others and the four are equivalent. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5] ∎
