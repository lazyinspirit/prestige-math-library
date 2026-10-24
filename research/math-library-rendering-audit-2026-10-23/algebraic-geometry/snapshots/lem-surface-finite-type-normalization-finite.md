---
id: lem-surface-finite-type-normalization-finite
kind: lemma
title: Surface finite type normalization finite
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 6
deps:
- def-axiom-of-choice
- def-dependent-choice
- lem-relative-spec-glues-affine-algebras
- lem-surface-complete-equicharacteristic-finite-integral-closure
- lem-surface-finite-type-formal-fibres
- lem-surface-open-regular-locus
- thm-finiteness-of-associated-primes
- thm-integral-closure-finite-finite-type-domain-over-field
- thm-integrality-commutes-with-localisation
- thm-depth-zero-associated-prime-criterion
- lem-normal-domain-implies-s-two
- cor-serre-normality-criterion-two-directions
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: 'The Stacks Project: full proof imports for normal-surface resolution, lemma-analytically-unramified-easy,
      lemma-characterize-N-1, lemma-openness-normal-locus'
    url: https://stacks.math.columbia.edu/download/algebra.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC and DC. Every integral finite-type algebra over a field or a complete equicharacteristic Noetherian local base has finite normalization, and so do its localizations. Integral schemes of finite type over these bases consequently have finite scheme normalization.

## Facts & Assumptions

**Given:** An integral finite-type algebra $B$ over a field or a complete equicharacteristic Noetherian local base, and an integral scheme of finite type over such a base.

[F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])

[F3] *lem-relative-spec-glues-affine-algebras.* Let $S$ be a scheme and let $\mathcal A$ be an affine-locally module-associated sheaf of commutative unital $\mathcal O_S$-algebras, as in def-affine-local-quasi-coherent-algebra. Put $B_U=\Gamma(U,\mathcal A)$ for each affine open $U\subseteq S$. ([[lem-relative-spec-glues-affine-algebras]])

[F4] *lem-surface-complete-equicharacteristic-finite-integral-closure.* Assume AC. The integral closure of a complete equicharacteristic Noetherian local domain in every finite extension of its fraction field is a finite module. ([[lem-surface-complete-equicharacteristic-finite-integral-closure]])

[F5] *lem-surface-finite-type-formal-fibres.* Assume AC and DC. Let $A$ be a field or a complete equicharacteristic Noetherian local ring and $B$ an essentially finite-type $A$-algebra. Every formal fibre of every local ring of $B$ is geometrically regular over its residue fraction field. ([[lem-surface-finite-type-formal-fibres]])

[F6] *lem-surface-open-regular-locus.* Assume AC and DC. Every finite-type algebra over a field or a complete equicharacteristic Noetherian local ring has open regular locus. Thus the regular locus of any scheme locally of finite type over one of these bases is open. ([[lem-surface-open-regular-locus]])

[F7] *thm-finiteness-of-associated-primes.* Assume the Axiom of Choice. Let $R$ be a Noetherian commutative ring and let $M$ be a finitely generated left $R$-module. Then $\operatorname{Ass}_R(M)$ is a finite set. ([[thm-finiteness-of-associated-primes]])

[F8] *thm-integral-closure-finite-finite-type-domain-over-field.* Let $k$ be a field and let $A$ be a finite-type integral domain over $k$. Then the integral closure of $A$ in $\operatorname{Frac}(A)$ is a finite $A$-module. The proof is a Noether-normalisation reduction to the polynomial theorem and uses no choice principle. ([[thm-integral-closure-finite-finite-type-domain-over-field]])

[F9] *thm-integrality-commutes-with-localisation.* Let $A \to B$ be a homomorphism of commutative rings, let $S \subseteq A$ be multiplicative, and let $b \in B$. 1. If $b$ is integral over $A$, then $b/1$ is integral over $S^{-1}A$ in $S^{-1}B$. 2. If $b/1$ is integral over $S^{-1}A$ in $S^{-1}B$, then some $s \in S$ makes $sb$ integral over $A$. ([[thm-integrality-commutes-with-localisation]])

[F10] Depth zero is equivalent to the maximal ideal being associated. ([[thm-depth-zero-associated-prime-criterion]])

[F11] Normal Noetherian domains satisfy $S_2$, and $R_1$ plus $S_2$ characterizes normality. ([[lem-normal-domain-implies-s-two]], [[cor-serre-normality-criterion-two-directions]])

## Proof

1.1 At every maximal ideal $\mathfrak m$ of $B$ the formal-fibre lemma makes the completion of $B_{\mathfrak m}$ reduced: flatness embeds the completion into its generic fibre, which is geometrically regular and hence reduced. [F5, given]

2.1 For the reduced complete equicharacteristic local ring $T$, let $\mathfrak p_i$ be its finitely many minimal primes. Each $T/\mathfrak p_i$ is a complete local domain with finite normalization. The injection $T\to\prod_iT/\mathfrak p_i$ identifies the total quotient ring with $\prod_i\operatorname{Frac}(T/\mathfrak p_i)$: prime avoidance isolates the finitely many components after inverting nonzerodivisors. The product of their normalizations is finite over $T$ and is integrally closed in this total quotient ring. It is integral over $T$, and any element integral over $T$ is integral over this product and hence lies in it. Thus it is the finite normalization of $T$. The ring $T$ itself need not be a product of domains. [F4, F7, step 1.1]

3.1 If $C$ is the normalization of $B_{\mathfrak m}$ and $T$ the completion, then $C\otimes_{B_{\mathfrak m}}T$ embeds into the total quotient ring of $T$, is integral over $T$ and hence a $T$-submodule of the finite normalization of step 2.1, so it is a finite $T$-module; faithful flatness of completion descends finitely many generators and makes $C$ finite over $B_{\mathfrak m}$. [F4, F9, step 2.1]

4.1 Choose $0\ne f\in B$ with $B_f$ regular by the open-regular-locus supplier. Any finite birational $B\subset B'\subset\operatorname{Frac}B$ has $B'_f=B_f$. Its nonnormal locus is closed: outside $V(f)$ it is regular; on $V(f)$ the height-one primes are among the finitely many minimal primes of $(f)$, and the $S_2$ obstructions are among the associated primes of $B'/fB'$ of height at least two. At such a prime the multiplication-by-$f$ exact sequence and residue-field Ext give depth one: the domain has depth at least one, and its quotient has depth zero by [F10]. The same sequence gives depth at least two exactly when that quotient has no depth-zero stalk. Conversely, absence of these associated primes under a given prime gives $S_2$ for every localization of its local ring, and regularity at the height-one primes gives $R_1$. The Serre criterion therefore identifies the nonnormal locus with the union of the closures of those finitely many bad primes. [F6, F7, F10, F11, step 3.1]

5.1 For each maximal ideal $\mathfrak m$ choose global integral elements whose localization generates the finite normalization of $B_{\mathfrak m}$. The finite algebra $B'$ they generate has normal localizations at every prime over $\mathfrak m$. Its closed nonnormal locus has closed image in $\operatorname{Spec}B$, since $B'$ is finite, and that image avoids $\mathfrak m$. On the complementary open, $B'$ equals the integral closure by normality and birationality. These opens cover all maximal ideals and hence all primes; quasi-compactness gives finitely many of them. The composite of their finite algebras is finite and equals the integral closure on every selected open, hence globally. Integral closure commutes with localization, and the affine constructions glue to finite normalization of schemes. AC and DC are inherited from the suppliers. [F1, F2, F3, F8, F9, step 4.1] ∎

## Remarks

- The reduction at every maximal ideal uses reducedness of the completion, which is where the formal-fibre lemma enters.
- The finite-type-over-a-field theorem is only quoted for the field case; the complete-base case is proved by the descent above.
