---
title: Vector bundles on singular surfaces and threefolds — defects
status: draft
---

9 confirmed findings and 1 potential finding in the original article.

## article-characteristic-p-input · confirmed

**Tags:** prerequisite omission

https://arxiv.org/abs/2610.22679v1; PDF p. 6, Proposition 2.6 proof, opening (PDF p. 6).

> The general case will appear in the work of Elmanto-Morrow.

Proposition 2.6 states all characteristics but proves only characteristic zero. The authors explicitly defer the positive-characteristic argument. Subsequent integral threefold comparisons use the unrestricted statement.

This qualification occurs in the authors’ own opening proof, rather than in a generated supplier.

**Correction:** Give a precise established characteristic-p input or supply that argument.

No counterexample to torsion-freeness is established.

## article-affine-picard-reduction · confirmed

**Tags:** prerequisite omission

https://arxiv.org/abs/2610.22679v1; PDF p. 13, Proposition 6.1 proof, Picard divisibility and Ful98 citation (PDF p. 13).

> The Picard group of a smooth affine curve over an algebraically closed

The affine Picard-divisibility use omits the completion-and-boundary reduction. For a smooth affine curve C, choose a smooth projective completion Cbar and a boundary k-point b. Subtracting $\deg(L)b$ makes any extending line bundle degree zero without changing its restriction.

The source moves directly from its Ful98 citation to affine Picard divisibility; the standard intervening reduction is not written.

**Correction:** State that $\operatorname{Pic}^0(\overline C)(k)$ surjects onto $\operatorname{Pic}(C)$; it is divisible by Jacobian multiplication, in every characteristic.

The claim is correct. This is not a defect audit of Fulton.

## article-cdh-truncation-input · confirmed

**Tags:** prerequisite omission; missing proof steps

https://arxiv.org/abs/2610.22679v1; PDF p. 6, Proposition 2.6 proof, passage from Artin vanishing to cdh localization (PDF p. 6).

> The
> associated cdh-sheaf also vanishes and therefore

The characteristic-zero proof omits the locality step needed to truncate before cdh localization. Artin vanishing on affine threefolds does not alone prove the displayed equivalence on the entire qcqs site, which has larger-dimensional objects.

The quoted sentence is the authors’ transition between affine vanishing and the cdh-localized comparison.

**Correction:** State and justify the needed dimension-bounded refinement/site comparison, or prove the equivalence only after evaluation on X.

This identifies an omitted justification; it does not refute the evaluated comparison or Proposition 2.6.

## article-qcqs-smooth-locus · confirmed

**Tags:** insufficient assumptions; missing proof steps

https://arxiv.org/abs/2610.22679v1; PDF p. 10, Lemma 5.2 proof, Picard restriction square (PDF p. 10).

> Let U ⊂X be the smooth locus.

The smooth-locus proofs of Lemmas 4.1, 5.1 and 5.2 exceed the stated qcqs scope. Normality alone does not ensure a dense k-smooth locus, global-function equality, or injective Picard restriction. The affine finite-type convention does not restrict all nonaffine qcqs schemes.

The source conventions on p. 3 and proofs on pp. 9–10 invoke these restrictions without local finite presentation.

**Correction:** Retain the qcqs conclusions using direct rank/determinant comparisons; use smooth-locus restriction only with suitable finite-type hypotheses.

The example refutes the proof premises, not the rank/determinant conclusions or affine classification theorems.

**Counterexample:** Let $k$ be algebraically closed and $X=\mathbf P^1_{k(t)}$, viewed over $k$. This nonaffine scheme is normal and qcqs, with empty $k$-smooth locus, $\Gamma(X,\mathcal O)=k(t)$ and $\operatorname{Pic}(X)=\mathbb Z$.

A nonempty $k$-smooth affine neighborhood would have a nonzero finitely generated $k$-algebra containing $k(t)$. A maximal residue field would give a $k$-algebra map $k(t)\to k$, impossible since $t-a$ is invertible for every $a\in k$. Hence $U=\varnothing$, $\Gamma(U,\mathcal O)=0$ and $\operatorname{Pic}(U)=0$. The nonaffine example respects the original affine finite-type convention.

## article-perfect-first-chern-input · confirmed

**Tags:** prerequisite omission; missing proof steps

https://arxiv.org/abs/2610.22679v1; PDF p. 8, Proposition 3.2 proof (PDF p. 8).

> Proof. This is true by definition if V is a line bundle.

Proposition 3.2’s proof checks bundles but states a factorization on perfect $K_0$. Splitting an actual bundle into line-bundle classes does not establish the asserted operation on every perfect class of an arbitrary qcqs scheme.

The authors’ proof starts with a bundle V; no extension to all perfect classes follows in the printed argument.

**Correction:** Supply the perfect-K Chern/determinant comparison and descent, retaining the qcqs statement.

The doubled-plane obstruction below prevents silently identifying all perfect classes with bundle differences; it does not refute the factorization.

## article-perfect-bundle-reduction · confirmed

**Tags:** insufficient assumptions; missing proof steps

https://arxiv.org/abs/2610.22679v1; PDF p. 11, Lemma 5.3 proof, opening bundle-difference reduction (PDF p. 11).

> we may write α = [V1] −[W1] for some vector bundles

The proofs of Lemma 5.3 and Proposition 5.5 assume arbitrary perfect classes are bundle differences. Normal qcqs schemes need not have that property. Lemma 6.4 inherits the reduction.

The reduction is explicitly printed on p. 11, repeated in Proposition 5.5, and inherited on p. 14.

**Correction:** Use perfect-K Chern/Cartan operations and a compatible projection comparison; retain the qcqs conclusions.

This defeats a proof reduction under the original nonseparated qcqs hypotheses; it is not a counterexample to additivity, $p_2$=−$c_2$, or either affine classification.

**Counterexample:** Over algebraically closed $k$, glue two copies of $\mathbb A^2_k$ along $W=\mathbb A^2_k\setminus\{0\}$. The doubled plane $X$ is smooth, normal, finite type and qcqs. It has a nonzero rank-zero class in perfect $K_0$ that is not a bundle difference.

Quillen–Suslin trivializes bundles on each chart. Since $\Gamma(W,\mathcal O)=k[x,y]$, transition matrices and their inverses extend across the origin; every bundle on $X$ is trivial. Localization gives $K_1(W)/\operatorname{im}K_1(\mathbb A^2_k)=\mathbb Z$: the origin Koszul generator has Euler length one and zero ambient $K_0$ class. Thomason–Trobaugh Mayer–Vietoris injects this quotient into $K_0(X)$, giving a nonzero class $\delta$ vanishing on both charts. The same extension of units gives $\operatorname{Pic}(X)=0$. Weight zero identifies the rank kernel $F^1$, and the exact weight-one triangle with $H^{2,1}=\operatorname{Pic}(X)=0$ places $\delta$ in $F^2$. A rank-zero bundle difference is zero here.

## article-bundle-index-typo · confirmed

**Tags:** typos

https://arxiv.org/abs/2610.22679v1; PDF p. 17, Theorem B proof, surjectivity, final two bundle expressions (PDF p. 17).

> We can then compute the Chern classes

Theorem B’s surjectivity proof twice writes $E_1$ where $E_3$ was defined. The preceding line defines $E_2$ and $E_3$ and forms $E_3$ direct-sum $E_2$ direct-sum L. $E_1$ is undefined in the subsequent two bundle expressions.

Both mismatched subscripts are visible in the authors’ rendered page 17; the surrounding construction fixes the intended index.

**Correction:** Replace both occurrences of $E_1$ by $E_3$.

## article-bem-identifier · confirmed

**Tags:** typos

https://arxiv.org/abs/2610.22679v1; PDF p. 18, References, [BEM25] (PDF p. 18).

> arXiv:2508.0991, 2025

Reference [BEM25] has the incomplete arXiv identifier 2508.0991. The cited authors and title identify Bachmann–Elmanto–Morrow, arXiv:2508.09915v1.

The incorrect suffix is printed in the original bibliography, independently of generated source displays.

**Correction:** Use arXiv:2508.09915, retaining Corollary 7.20.

## article-support-indexing · confirmed

**Tags:** typos

https://arxiv.org/abs/2610.22679v1; PDF p. 6, Definition 2.7, supported-cohomology indexing (PDF p. 6).

> Definition 2.7. Let X be a qcqs scheme

Definition 2.7’s homotopy formula omits the weight shift. Definition 2.2 uses cohomological grading. Thus $\pi_i$ of the unshifted motivic complex is $H^{-i,j}$, whereas $H^{2j-i,j}$ requires its $[2j]$ shift.

The unshifted right-hand side is visible on p. 6; equation (2.1) on p. 4 displays the required $[2j]$ shift.

**Correction:** Insert $[2j]$ on the right, or explicitly declare a shifted spectrum convention.

**Clarify definitions:** Specify shifted versus unshifted spectrum realization.

## article-product-normality · potential

**Tags:** prerequisite omission; missing proof steps

https://arxiv.org/abs/2610.22679v1; PDF p. 10, Multiplication paragraph and equation (4.3) (PDF p. 10).

> Taking π0(−) and using Lemma 4.1,

Equation (4.3) suppresses the normality condition needed by its cited Lemma 4.1. The paragraph begins with any qcqs X, then invokes Lemma 4.1, whose image-to-stage identification is stated for normal X.

The original paragraph’s scope and its explicit invocation of Lemma 4.1 do not match as written.

**Correction:** State normality for this deduction, or supply a general degree-zero identification.

No counterexample to the square is established; a stronger comparison can repair the deduction without narrowing its conclusion.
