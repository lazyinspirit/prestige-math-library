---
id: lem-normalization-defect-euler-and-lengths
kind: lemma
title: "The normalization defect is an Euler characteristic and a weighted sum of local lengths"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-normalization-defect-of-reduced-curve
  - thm-normalization-reduced-curve-exists-finite
  - lem-normalization-unchanged-under-finite-birational-curve-map
  - def-composition-series-and-length-of-a-module
  - cor-length-is-additive-in-short-exact-sequences
  - lem-euler-characteristic-additive-short-exact
  - def-euler-characteristic-coherent-sheaf
  - lem-affine-morphism-cohomology-pushforward
  - def-flasque-sheaf
  - def-skyscraper-sheaf-abelian-group
  - thm-flasque-sheaves-acyclic
  - thm-one-dimensional-regular-local-rings-are-dvrs
  - thm-valuation-ring-is-integrally-closed
  - def-normal-noetherian-ring
  - lem-curve-closed-subsets-finite
  - def-reduction-of-scheme
  - def-axiom-of-choice
justified_by: []
landmark: false
proof_strategy: "Apply Euler-characteristic additivity to the normalization sequence and compute H^0 from the finite local-length filtration"
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Algebraic Geometry v6.10"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
      locator: "Chapter 8 normalization and resolution of curve singularities, pp. 194-197"
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, June 27, 2011 draft (author-hosted 'Early (out-of-date) version of The Rising Sea')"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGjun2711publicnoindex.pdf"
      locator: "Exercises 19.4.C-D resolving A_n curve singularities, p. 391"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $k$ be a field, let $C$ be a reduced proper
curve over $k$ with normalization $\nu\colon\widetilde C\to C$ and defect
sheaf $\mathcal Q_C$. Then: (1) $H^q(C,\mathcal Q_C)=0$ for $q\ge1$, so
$\delta_k(C)=\chi_k(C,\mathcal Q_C)=\chi_k(\mathcal O_{\widetilde C})-\chi_k(\mathcal O_C)$
(using additivity of the Euler characteristic in the normalization sequence
$0\to\mathcal O_C\to\nu_*\mathcal O_{\widetilde C}\to\mathcal Q_C\to0$ and
$\chi(C,\nu_*\mathcal O)=\chi(\widetilde C,\mathcal O)$); (2)
$\delta_k(C)=\sum$ over closed points $p$ of $[\kappa(p):k]$ times the length
of $\mathcal Q_{C,p}$ over $\mathcal O_{C,p}$, a finite sum over the finite
non-normal locus; (3) $\delta_k(C)\ge0$, and $\delta_k(C)=0$ if and only if
$C$ is regular, in which case the irreducible components of $C$ are disjoint
and normal.

## Facts & Assumptions

**Given:** A field $k$, a reduced proper curve $C$ over $k$ (reduced in the sense of ([[def-reduction-of-scheme]]), pure dimension one), its finite normalization $\nu\colon\widetilde C\to C$ of ([[thm-normalization-reduced-curve-exists-finite]]), the defect sheaf $\mathcal Q_C=\operatorname{coker}(\mathcal O_C\to\nu_*\mathcal O_{\widetilde C})$ and the defect $\delta_k(C)=\dim_kH^0(C,\mathcal Q_C)$ of ([[def-normalization-defect-of-reduced-curve]]).

[F1] [[def-normalization-defect-of-reduced-curve]]: $\mathcal Q_C=\operatorname{coker}(\mathcal O_C\to\nu_*\mathcal O_{\widetilde C})$ is a coherent $\mathcal O_C$-module supported on the finite non-normal locus, $\delta_k(C)=\dim_kH^0(C,\mathcal Q_C)$, and $H^0(C,\mathcal Q_C)$ is the direct sum of the finitely many stalk contributions $\mathcal Q_{C,p}$ over the support.

[F2] [[thm-normalization-reduced-curve-exists-finite]]: $\nu\colon\widetilde C\to C$ is finite, $\widetilde C$ is regular of dimension one, on an affine chart $\nu$ corresponds to the inclusion of $A$ into its integral closure in the total ring of fractions, $\nu$ is unique up to a unique $C$-isomorphism, and $\nu_*\mathcal O_{\widetilde C}$ is coherent.

[F3] [[lem-euler-characteristic-additive-short-exact]]: For a short exact sequence $0\to\mathcal F'\to\mathcal F\to\mathcal F''\to0$ of coherent sheaves on a scheme proper over $k$, $\chi(X,\mathcal F)=\chi(X,\mathcal F')+\chi(X,\mathcal F'')$.

[F4] [[def-euler-characteristic-coherent-sheaf]]: For $X$ proper over $k$ and $\mathcal F$ coherent, $\chi(X,\mathcal F)=\sum_{q\ge0}(-1)^q\dim_kH^q(X,\mathcal F)$ is a finite alternating sum of finite $k$-dimensions.

[F5] [[lem-affine-morphism-cohomology-pushforward]]: For an affine morphism $f\colon X\to S$ and a quasi-coherent $\mathcal O_X$-module $\mathcal F$, the natural maps $H^q(S,f_*\mathcal F)\to H^q(X,\mathcal F)$ are isomorphisms for all $q\ge0$.

[F6] [[def-composition-series-and-length-of-a-module]]: A composition series of a module is a finite chain with simple successive factors; the length $\ell_R(M)$ is the number of factors, is independent of the series, and the zero module has length $0$.

[F7] [[cor-length-is-additive-in-short-exact-sequences]]: For a short exact sequence $0\to N\to M\to Q\to0$, $M$ has finite length if and only if $N$ and $Q$ do, and then $\ell_R(M)=\ell_R(N)+\ell_R(Q)$.

[F8] [[def-skyscraper-sheaf-abelian-group]], [[def-flasque-sheaf]] and [[thm-flasque-sheaves-acyclic]]: A skyscraper sheaf $i_{x,*}A$ on a topological space $X$ is flasque, because its restriction maps are either identities or zero maps; hence, under the Axiom of Choice inherited from that acyclicity theorem, $H^q(X,i_{x,*}A)=0$ for every $q>0$.

[F9] [[thm-one-dimensional-regular-local-rings-are-dvrs]]: A nonzero Noetherian local ring of dimension one is regular if and only if it is a discrete valuation ring; fields are excluded from the term DVR.

[F10] [[thm-valuation-ring-is-integrally-closed]]: Every valuation ring is an integrally closed domain; in particular every discrete valuation ring is an integrally closed domain.

[F11] [[def-normal-noetherian-ring]]: A commutative Noetherian ring is normal if every prime localization is an integrally closed domain.

## Proof

1.1 The normalization sequence $0\to\mathcal O_C\to\nu_*\mathcal O_{\widetilde C}\to\mathcal Q_C\to0$ is short exact: $\mathcal Q_C$ is the cokernel by definition [F1], and $\mathcal O_C\to\nu_*\mathcal O_{\widetilde C}$ is injective because on an affine chart it is the inclusion of $A$ into its integral closure in the total ring of fractions [F2]. All three terms are coherent ($\mathcal O_C$, $\nu_*\mathcal O_{\widetilde C}$ by [F2], and $\mathcal Q_C$ by [F1]), so the sequence satisfies the hypotheses of [F3]. [F1, F2, F3]

1.2 One has $\chi(C,\nu_*\mathcal O_{\widetilde C})=\chi(\widetilde C,\mathcal O_{\widetilde C})$: the finite morphism $\nu$ is affine by [F2] and its inverse image of an affine open is affine, so [F5] identifies $H^q(C,\nu_*\mathcal O_{\widetilde C})$ with $H^q(\widetilde C,\mathcal O_{\widetilde C})$ for every $q\ge0$, and the two alternating sums of [F4] agree. [F2, F4, F5]

1.3 The defect sheaf has no higher cohomology: since $\mathcal Q_C$ is supported on finitely many closed points and has finite length over the local ring at each of them, it admits a finite filtration by quasi-coherent subsheaves whose successive quotients are skyscraper sheaves at those points; by [F8] each quotient has vanishing cohomology in degrees $\ge1$, so the long exact cohomology sequences of the filtration give $H^q(C,\mathcal Q_C)=0$ for every $q\ge1$. [F1, F6, F8]

2.1 Consequently $\delta_k(C)=\dim_kH^0(C,\mathcal Q_C)=\chi(C,\mathcal Q_C)$ by [F4], and applying [F3] to the sequence of step 1.1 gives $\chi(C,\nu_*\mathcal O_{\widetilde C})=\chi(C,\mathcal O_C)+\chi(C,\mathcal Q_C)$, so the two identities combined with step 1.2 yield $\delta_k(C)=\chi(\widetilde C,\mathcal O_{\widetilde C})-\chi(C,\mathcal O_C)$; this proves (1). [F3, F4, step 1.2, step 1.3]

3.1 For the length formula of (2): by [F1], $H^0(C,\mathcal Q_C)$ is the direct sum of the stalks $\mathcal Q_{C,p}$ over the finite non-normal locus, and each $\mathcal Q_{C,p}$ has finite length over the Noetherian local ring $\mathcal O_{C,p}$; fixing a composition series [F6] with successive quotients $\kappa(p)$ and using additivity of $k$-dimension in short exact sequences together with [F7], one gets $\dim_k\mathcal Q_{C,p}=\ell_{\mathcal O_{C,p}}(\mathcal Q_{C,p})\cdot[\kappa(p):k]$. Summing gives $\delta_k(C)=\sum_p[\kappa(p):k]\,\ell_{\mathcal O_{C,p}}(\mathcal Q_{C,p})$ over the closed points of the finite non-normal locus. [F1, F6, F7, step 2.1]

4.1 For (3): the sum in step 3.1 has nonnegative terms, so $\delta_k(C)\ge0$; if $\delta_k(C)=0$ then every local length vanishes, hence $\mathcal Q_C=0$ and the injective map $\mathcal O_C\to\nu_*\mathcal O_{\widetilde C}$ of step 1.1 is an isomorphism, so the affine morphism $\nu$ is an isomorphism and $C\cong\widetilde C$ is regular of dimension one by [F2]. Conversely, if $C$ is regular, then each nonzero local ring $\mathcal O_{C,p}$ is a discrete valuation ring by [F9], hence an integrally closed domain by [F10], and the zero-dimensional stalks are fields, so $C$ is normal in the sense of [F11]; the identity $C\to C$ is then a finite morphism from a normal curve that is an isomorphism over the regular locus, so the uniqueness clause of [F2] makes the normalization isomorphic to the identity over $C$, whence $\mathcal Q_C=0$ and $\delta_k(C)=0$. Finally, in the regular case every local ring is a discrete valuation ring or a field, hence a domain, so each point of $C$ lies in a unique irreducible component and distinct components are disjoint; a component, having everywhere the local ring of $C$, is itself regular and hence normal. [F2, F9, F10, F11, step 3.1] ∎
