---
id: lem-surface-open-regular-locus
kind: lemma
title: Surface open regular locus
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 2
deps:
- def-axiom-of-choice
- def-dependent-choice
- lem-flat-local-ascent-of-regularity
- lem-generic-freeness-finite-type-algebra-module
- lem-surface-derivations-and-regular-hypersurfaces
- lem-surface-geometric-regularity-field-test-and-generic-spread
- lem-surface-non-pth-power-detected-by-derivation
- thm-generic-flatness-morphisms
- thm-quotient-and-lifting-regularity-across-a-regular-element
- thm-regular-local-rings-are-domains-and-cohen-macaulay
- lem-ag-standard-smooth-flatness
- lem-ag-standard-smooth-regular-geometric-fibres
- lem-surface-finite-completion-factors
- cor-complete-local-domain-finite-over-a-regular-power-series-ring
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: 'The Stacks Project: full proof imports for normal-surface resolution, lemma-complete-Noetherian-domain-J-0,
      lemma-J-2, lemma-J-0-goes-down, lemma-J-0-goes-up, lemma-intersection-regular-with-closed, proposition-ubiquity-J-2'
    url: https://stacks.math.columbia.edu/download/more-algebra.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC and DC. Every finite-type algebra over a field or a complete equicharacteristic Noetherian local ring has open regular locus. Thus the regular locus of any scheme locally of finite type over one of these bases is open.

## Facts & Assumptions

**Given:** A finite-type algebra over a field or over a complete equicharacteristic Noetherian local ring (and a scheme locally of finite type over such a base).

[F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])

[F3] *lem-flat-local-ascent-of-regularity.* Assume the Axiom of Choice. For a flat local map $(R,\mathfrak m)\to(S,\mathfrak n)$ of nonzero Noetherian local rings: if $R$ and $S/\mathfrak mS$ are regular, then $S$ is regular. Conversely, regularity of $S$ implies regularity of $R$. ([[lem-flat-local-ascent-of-regularity]])

[F4] *lem-generic-freeness-finite-type-algebra-module.* Assume the Axiom of Choice (AC). Let $A$ be a Noetherian domain, let $B$ be a finitely generated $A$-algebra, and let $M$ be a finitely generated $B$-module. Then there exists a nonzero $a\in A$ such that the principal localisation $M_a$ is a free $A_a$-module. ([[lem-generic-freeness-finite-type-algebra-module]])

[F5] *lem-surface-derivations-and-regular-hypersurfaces.* Assume AC. Derivations of Noetherian rings extend uniquely through localization and adic completion. If $T$ is regular Noetherian, $D:T\to T$ a derivation and $D(f)$ a unit, then $T[z]/(z^r-f)$ is regular for every $r\ge1$. ([[lem-surface-derivations-and-regular-hypersurfaces]])

[F6] *lem-surface-geometric-regularity-field-test-and-generic-spread.* Assume AC. For a Noetherian $k$-algebra $T$, call $T$ geometrically regular if $T\otimes_kE$ is regular for every finitely generated field extension $E/k$. It suffices to test finite purely inseparable $E/k$. Geometric regularity is stable under finitely generated field extension. ([[lem-surface-geometric-regularity-field-test-and-generic-spread]])

[F7] *lem-surface-non-pth-power-detected-by-derivation.* Assume AC. Let $B$ be a domain of characteristic $p>0$ finite type over a complete equicharacteristic Noetherian local ring, and let $f\in B$ not be a $p$th power in $\operatorname{Frac}B$. There is a derivation $D:B\to B$ with $D(f)\ne0$. ([[lem-surface-non-pth-power-detected-by-derivation]])

[F9] *thm-quotient-and-lifting-regularity-across-a-regular-element.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $(R,\mathfrak m)$ be nonzero Noetherian local. If $x\in\mathfrak m$ is a nonzerodivisor and $R/(x)$ is regular, then $R$ is regular and $x\notin\mathfrak m^2$. For every nonzerodivisor $x\in\mathfrak m$, $\dim(R/(x))=\dim R-1$. ([[thm-quotient-and-lifting-regularity-across-a-regular-element]])

[F10] *thm-regular-local-rings-are-domains-and-cohen-macaulay.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). A regular local ring $R$ of dimension $d$ is a domain and Cohen–Macaulay. For every regular system $(x_1,\ldots,x_d)$, the tuple is $R$-regular and $R/(x_1,\ldots,x_c)$ is regular local of dimension $d-c$ for all $0\le c\le d$. ([[thm-regular-local-rings-are-domains-and-cohen-macaulay]])

[F11] Standard smooth maps are flat with regular geometric fibres. Regularity ascends from a regular base and descends along a flat local map. ([[lem-ag-standard-smooth-flatness]], [[lem-ag-standard-smooth-regular-geometric-fibres]], [[lem-flat-local-ascent-of-regularity]])

[F12] A complete equicharacteristic local domain is finite over a regular power-series subring; the finite-product completion formula makes a finite domain over a complete local ring local and complete. ([[cor-complete-local-domain-finite-over-a-regular-power-series-ring]], [[lem-surface-finite-completion-factors]])

## Proof

1.1 Every complete local domain has a nonempty regular open: it is finite over a regular power-series subring, and one inducts on the fraction-field degree. Separable steps become standard etale after choosing a separating primitive element and clearing the discriminant; degree-$p$ steps are $B[z]/(z^p-b)$ on a nonempty open, where a detecting derivation of $B$ has nonzero $D(b)$ and inverting $D(b)$ and the denominator identifies the algebra with that hypersurface, whose regularity is the hypersurface lemma. [F5, F6, F7, F10, F12, given]

2.1 For a finite purely inseparable extension of a residue fraction field of the complete base, choosing a finite subalgebra inside that field gives a complete local domain, which has a regular open by step 1.1. [F10, F12, step 1.1]

3.1 For a finitely generated field extension $K/k$ one enlarges $k$ and $K$ by finite purely inseparable extensions until $K/k$ is separably generated: choose a transcendence basis and adjoin $p$th roots of finitely many coefficients of the minimal polynomial of a degree-$p$ inseparable generator and of the basis variables, decreasing the inseparable degree at each step. [F6, step 2.1]

4.1 Let $S$ be a finite-type domain over the complete base. Apply step 3.1 to its generic field extension over the fraction field of the image of the base. The finite purely inseparable enlargement of that base field is the fraction field of a finite complete domain $R'$ over the image base, after scaling algebraic generators to make them integral. By step 1.1, $R'$ has a regular open. Scaling the finitely many generators of the enlarged source field gives a finite purely inseparable extension algebra of $S$. Over the regular open of $R'$, a separating transcendence basis and primitive element spread to a standard smooth open of this algebra by [F6]; it is regular by [F11]. Generic freeness applied to its finite module over $S$ makes this finite dominant extension flat after localizing $S$; it is then faithfully flat, since it is integral and surjective on spectra. Its closed complement of the chosen regular open has closed image under the finite map and misses the generic point. Removing that image leaves a nonempty open of $S$ with faithfully flat regular cover; flat-local descent makes this open regular. [F3, F4, F6, F11, F12, step 1.1, step 3.1]

5.1 For a prime $P$ at which the local ring is regular, choose generators of $P_P$ forming a regular sequence and spread both generation and regularity to an open; on $V(P)$ a nonempty regular open lifts to a regular open of the ambient ring by the regular-sequence quotient criterion, and spreading a regular sequence is justified by the successive multiplication kernels, which are finite modules vanishing at the chosen prime. [F9, F10, step 4.1]

6.1 Regularity is stable under generalization. For each irreducible closed subset $V(P)$, if its generic point is not regular in the ambient scheme then no specialization in $V(P)$ is regular. If that generic point is regular, step 5.1 gives a nonempty relatively open subset on which the ambient scheme is regular: spread a parameter sequence for $P_P$, use a regular open of the domain quotient by $P$, and lift regularity across that sequence. Noetherian induction on the remaining proper closed subsets therefore makes the regular locus constructible. A constructible generalization-stable subset of a Noetherian space is open: its complement is constructible and specialization-stable, and every point in its closure is a specialization of a generic point of one of its finitely many locally closed pieces, hence still belongs to that complement. Thus the regular locus is open. AC and DC are inherited from the suppliers. [F1, F2, step 5.1] ∎

## Remarks

- The first half constructs regular opens in finite extensions; the second half lifts them along the generic point of every irreducible closed subset and concludes openness by Noetherian induction.
- No smoothness over a field is asserted: regularity is the only conclusion.
