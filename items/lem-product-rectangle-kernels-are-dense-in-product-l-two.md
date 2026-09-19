---
id: lem-product-rectangle-kernels-are-dense-in-product-l-two
kind: lemma
title: Product rectangle kernels are dense in product L two
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-finite-sigma-finite-and-semifinite-measures, def-measurable-rectangle, def-product-sigma-algebra-and-finite-product-sigma-algebras, def-algebra-of-subsets, thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique, def-completed-product-measure, thm-completion-of-a-measure-space, thm-continuity-from-below-for-measures, thm-finite-and-countable-subadditivity-of-measures, lem-finite-rectangle-unions-form-a-generating-algebra, lem-finite-measure-sets-are-approximable-by-a-generating-algebra, thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p, thm-completion-measurable-functions-have-base-measurable-representatives, def-l-p-space-as-a-quotient-by-null-functions, def-countable-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Sheldon Axler, Measure, Integration & Real Analysis — product measure and Lp approximation ingredients, §§7A, 10C, 10.70"
      url: "https://measure.axler.net/MIRA.pdf"
    - title: "John K. Hunter, Measure Theory — product measure and generating-algebra approximation"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$(X,\mathcal A,\mu)$ and $(Y,\mathcal B,\nu)$ be sigma-finite measure spaces
([[def-finite-sigma-finite-and-semifinite-measures]]), let $\mu\times\nu$ be the
product measure on the product sigma-algebra
$\mathcal A\otimes\mathcal B$
([[def-product-sigma-algebra-and-finite-product-sigma-algebras]],
[[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]), and
let $\overline{\mu\times\nu}$ be its completion
([[def-completed-product-measure]]). Write $\mathbf 1_A(x)\mathbf 1_B(y)$ for
the **rectangle kernel** of a measurable rectangle $A\times B$
([[def-measurable-rectangle]]) with $\mu(A)<+\infty$ and $\nu(B)<+\infty$. Then
the set of finite complex linear combinations of such rectangle kernels is
dense both

1. in $L^2(\mu\times\nu;\mathbb C)$, and
2. in $L^2(\overline{\mu\times\nu};\mathbb C)$
   ([[def-l-p-space-as-a-quotient-by-null-functions]]).

## Facts & Assumptions

**Given:** Countable Choice and two sigma-finite measure spaces $(X,\mathcal A,\mu)$ and $(Y,\mathcal B,\nu)$.

[F1] Sigma-finiteness provides a sequence $(X_k)$ in $\mathcal A$ with $\mu(X_k)<+\infty$ and $X=\bigcup_kX_k$, and likewise a sequence $(Y_l)$ for $\nu$; finite unions of sets of finite measure again have finite measure ([[def-finite-sigma-finite-and-semifinite-measures]], [[thm-finite-and-countable-subadditivity-of-measures]]).

[F2] The product measure is the unique measure on $\mathcal A\otimes\mathcal B$ with $(\mu\times\nu)(A\times B)=\mu(A)\nu(B)$; it is sigma-finite, and its completion $\overline{\mu\times\nu}$ extends it, agreeing with it on every $\mathcal A\otimes\mathcal B$-measurable set ([[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]], [[thm-completion-of-a-measure-space]]).

[F3] For an increasing sequence of measurable sets the measure of the union is the supremum of the measures, and measures are finitely and countably subadditive ([[thm-continuity-from-below-for-measures]], [[thm-finite-and-countable-subadditivity-of-measures]]).

[F4] Finite disjoint unions of measurable rectangles form an algebra of subsets of $X\times Y$ generating $\mathcal A\otimes\mathcal B$; in particular a finite union of measurable rectangles is a finite disjoint union of measurable rectangles ([[lem-finite-rectangle-unions-form-a-generating-algebra]], [[def-algebra-of-subsets]]).

[F5] If a finite measure space carries an algebra generating its sigma-algebra, then every measurable set is approximable in symmetric difference by an element of that algebra ([[lem-finite-measure-sets-are-approximable-by-a-generating-algebra]]).

[F6] Complex finite simple functions with finite-measure nonzero sets are dense in $L^p$ for every finite exponent $p$, on every measure space ([[thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p]]).

[F7] Under Countable Choice, a function measurable for a completion is almost everywhere equal to a function measurable for the original sigma-algebra, and the completion of a measure agrees with it on the original measurable sets ([[thm-completion-measurable-functions-have-base-measurable-representatives]], [[thm-completion-of-a-measure-space]]).

[F8] If a measurable set $E$ has $\rho(E)<+\infty$, then $\mathbf 1_E$ has an $L^2$ class and $\|\mathbf 1_E\|_2^2=\rho(E)$. More generally, if measurable $E,C$ satisfy $\rho(E\mathbin\triangle C)<+\infty$, then $\mathbf 1_E-\mathbf 1_C$ has an $L^2$ class with squared norm $\rho(E\mathbin\triangle C)$ ([[def-l-p-space-as-a-quotient-by-null-functions]]).

## Proof

**Proof technique:** direct.

**Given:** Countable Choice, sigma-finite $(X,\mathcal A,\mu)$ and $(Y,\mathcal B,\nu)$, and the increasing finite-measure exhaustions $X_n:=\bigcup_{k\le n}X_k$, $Y_n:=\bigcup_{l\le n}Y_l$, $Z_n:=X_n\times Y_n$ of [F1], with $\rho:=\mu\times\nu$.

1.1 Each $Z_n$ is a measurable rectangle of finite product measure, $Z_n\subseteq Z_{n+1}$, and $\bigcup_nZ_n=X\times Y$; moreover $\rho(E\cap Z_n)\uparrow\rho(E)$ for every $E\in\mathcal A\otimes\mathcal B$ by [F3], so for $\rho(E)<+\infty$ and real $\delta>0$ there is $n$ with $\rho(E\setminus Z_n)<\delta/2$. [F1, F2, F3]

1.2 **A local algebra on each exhausted rectangle.** Fix $n$ and let $\mathcal G_n:=\{F\subseteq Z_n : F=E\cap Z_n \text{ for some } E\in\mathcal A\otimes\mathcal B\}$ be the trace sigma-algebra, and let $\mathcal C_n$ be the family of finite unions of rectangles $A\times B$ with $A\in\mathcal A$, $A\subseteq X_n$, $B\in\mathcal B$, $B\subseteq Y_n$. Then $\mathcal C_n$ is an algebra of subsets of $Z_n$: it contains $\varnothing$, it is closed under finite unions by definition, and for $A\times B\subseteq Z_n$ the complement in $Z_n$ is $((X_n\setminus A)\times Y_n)\cup(A\times(Y_n\setminus B))$, a union of two rectangles inside $Z_n$, while complements of finite unions follow by De Morgan and the closure of products of intersections; every element of $\mathcal C_n$ is a finite disjoint union of rectangles by [F4]. Furthermore $\sigma(\mathcal C_n)=\mathcal G_n$: the inclusion $\subseteq$ is clear since each generator of $\mathcal C_n$ lies in $\mathcal G_n$, and conversely $\{E\in\mathcal A\otimes\mathcal B : E\cap Z_n\in\sigma(\mathcal C_n)\}$ is a sigma-algebra containing every measurable rectangle, because $(A\times B)\cap Z_n=(A\cap X_n)\times(B\cap Y_n)\in\mathcal C_n$, hence it contains $\mathcal A\otimes\mathcal B$ and therefore $\mathcal G_n$. Finally the trace measure $\rho_n(F):=\rho(F)$ on $\mathcal G_n$ is a finite measure because $\rho_n(Z_n)=\mu(X_n)\nu(Y_n)<+\infty$ by [F2]. [F1, F2, F4]

2.1 **Approximation of sets of finite product measure.** Let $E\in\mathcal A\otimes\mathcal B$ with $\rho(E)<+\infty$ and let $\delta>0$. Choose $n$ with $\rho(E\setminus Z_n)<\delta/2$ by [step 1.1]; then $E\cap Z_n\in\mathcal G_n$, so [F5] applied to the finite measure space $(Z_n,\mathcal G_n,\rho_n)$ and its generating algebra $\mathcal C_n$ of [step 1.2] gives $C\in\mathcal C_n$ with $\rho_n((E\cap Z_n)\mathbin\triangle C)<\delta/2$. Since $E\mathbin\triangle C\subseteq(E\setminus Z_n)\cup((E\cap Z_n)\mathbin\triangle C)$, [F3] gives $\rho(E\mathbin\triangle C)<\delta$, and $C$ is a finite union of rectangles with $\mu(A)<+\infty$, $\nu(B)<+\infty$ as a subset of $Z_n$. [step 1.1, step 1.2, F3, F5]

3.1 **Indicator approximation.** For $E$ and $C$ as in [step 2.1], $\mathbf 1_C$ is a finite sum of rectangle kernels by [F4] and [step 2.1], and by [F8] the difference of the classes of $\mathbf 1_E$ and $\mathbf 1_C$ has squared $L^2(\rho)$-norm $\rho(E\mathbin\triangle C)<\delta$. [step 2.1, F4, F8]

4.1 **Density in the product space.** Let $h$ be a class in $L^2(\rho;\mathbb C)$ and let $\varepsilon>0$. By [F6] with $p=2$ there is a complex finite simple function $s=\sum_{j<m}c_j\mathbf 1_{E_j}$ with finite-measure level sets and $\|h-s\|_2<\varepsilon/2$; if no $c_j$ is nonzero take the zero combination. Otherwise put $B:=\sum_{j<m}|c_j|$ and $\delta:=(\varepsilon/(2B))^2$, and for each of the finitely many $j$ apply [step 3.1] to $E_j$ and $\delta$, obtaining finite rectangle combinations $R_j$ with $\|\mathbf 1_{E_j}-\mathbf 1_{R_j}\|_2<\varepsilon/(2B)$; then $R:=\sum_jc_jR_j$ is a finite complex linear combination of rectangle kernels and the triangle inequality gives $\|h-R\|_2\le\|h-s\|_2+B\max_j\|\mathbf 1_{E_j}-\mathbf 1_{R_j}\|_2<\varepsilon$. [step 3.1, F6]

5.1 **Density in the completed space.** Let $h$ be a class in $L^2(\overline{\mu\times\nu};\mathbb C)$ and let $\varepsilon>0$. By [F6] applied in the completed measure space there is a complex finite simple function $s=\sum_{j<m}c_j\mathbf 1_{E_j}$ with $\overline{\mu\times\nu}$-measurable level sets of finite completed measure and $\|h-s\|_{\overline{\mu\times\nu}}<\varepsilon/2$; if every $c_j$ is zero take the zero rectangle combination, so assume some $c_j$ is nonzero. For each $j$, [F7] applied to the indicator of $E_j$ provides $A_j\in\mathcal A\otimes\mathcal B$ with $\overline{\mu\times\nu}(E_j\mathbin\triangle A_j)=0$, hence $\rho(A_j)=\overline{\mu\times\nu}(A_j)\le\overline{\mu\times\nu}(E_j)<+\infty$ by [F2]; [step 2.1] then gives a finite rectangle combination $R_j$ with $\rho(A_j\mathbin\triangle R_j)<\delta'$ where $\delta':=(\varepsilon/(2B))^2$ and $B:=\sum_{j<m}|c_j|$ as in [step 4.1], so the classes satisfy $\|\mathbf 1_{E_j}-\mathbf 1_{R_j}\|_{\overline{\mu\times\nu}}^2=\overline{\mu\times\nu}(E_j\mathbin\triangle R_j)\le\overline{\mu\times\nu}(E_j\mathbin\triangle A_j)+\rho(A_j\mathbin\triangle R_j)<\delta'$ by [F3] and [F8]; the triangle inequality in the completed space therefore gives $\|h-\sum_jc_jR_j\|_{\overline{\mu\times\nu}}<\varepsilon$, a finite complex linear combination of rectangle kernels. [step 2.1, F2, F3, F6, F7, F8]

6.1 Steps 4.1 and 5.1 give the two density assertions of the statement, for an arbitrary class and arbitrary positive tolerance in each of the two spaces; all approximations are finite complex linear combinations of rectangle kernels with $\mu(A)<+\infty$ and $\nu(B)<+\infty$. [step 4.1, step 5.1] ∎
