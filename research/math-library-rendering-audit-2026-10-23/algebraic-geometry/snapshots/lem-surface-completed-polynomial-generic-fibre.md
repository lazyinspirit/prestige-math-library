---
id: lem-surface-completed-polynomial-generic-fibre
kind: lemma
title: Surface completed polynomial generic fibre
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 4
deps:
- def-axiom-of-choice
- def-dependent-choice
- cor-complete-local-domain-finite-over-a-regular-power-series-ring
- thm-completion-preserves-regular-local-rings
- lem-surface-geometric-regularity-field-test-and-generic-spread
- lem-surface-derivations-and-regular-hypersurfaces
- lem-surface-finite-completion-factors
- lem-surface-non-pth-power-detected-by-derivation
- lem-ag-standard-smooth-regular-geometric-fibres
- lem-flat-local-ascent-of-regularity
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: 'The Stacks Project: full proof imports for normal-surface resolution, lemma-another-helper-G-ring, lemma-lift-derivation-through-fs,
      proposition-fs-regular'
    url: https://stacks.math.columbia.edu/download/more-algebra.pdf
verification:
  precheck: pass
---

## Statement

Assume AC. Let $A$ be a complete equicharacteristic Noetherian local domain, let $\mathfrak q$ be maximal in $A[t]$ over its closed point, and let $0\ne\mathfrak r\subset\mathfrak q$ be a prime ideal with $\mathfrak r\cap A=0$. Then $\widehat{A[t]_{\mathfrak q}}\otimes_{A[t]}\kappa(\mathfrak r)$ is geometrically regular over $\kappa(\mathfrak r)$.

## Facts & Assumptions

**Given:** A complete equicharacteristic Noetherian local domain $A$, a maximal ideal $\mathfrak q\subset A[t]$ over the closed point, and a prime ideal $0\ne\mathfrak r\subset\mathfrak q$ with $\mathfrak r\cap A=0$.

[F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])

[F3] A complete equicharacteristic Noetherian local domain admits a finite injective local map from a regular power-series ring. The completion of a regular Noetherian local ring is regular. ([[cor-complete-local-domain-finite-over-a-regular-power-series-ring]], [[thm-completion-preserves-regular-local-rings]])

[F4] *lem-surface-derivations-and-regular-hypersurfaces.* Assume AC. Derivations of Noetherian rings extend uniquely through localization and adic completion. If $T$ is regular Noetherian, $D:T\to T$ a derivation and $D(f)$ a unit, then $T[z]/(z^r-f)$ is regular for every $r\ge1$. ([[lem-surface-derivations-and-regular-hypersurfaces]])

[F5] *lem-surface-finite-completion-factors.* Assume AC. For a finite map $R\to S$ of Noetherian rings and $\mathfrak p\in\operatorname{Spec}R$, $\widehat{R_{\mathfrak p}}\otimes_RS\cong\prod_{\mathfrak q\cap R=\mathfrak p}\widehat{S_{\mathfrak q}}$. The finitely many factors use their maximal-adic completions. Thus formal fibres for finite extensions are factors of residue-field base changes of the original formal fibres. ([[lem-surface-finite-completion-factors]])

[F6] *lem-surface-non-pth-power-detected-by-derivation.* Assume AC. Let $B$ be a domain of characteristic $p>0$ finite type over a complete equicharacteristic Noetherian local ring, and let $f\in B$ not be a $p$th power in $\operatorname{Frac}B$. There is a derivation $D:B\to B$ with $D(f)\ne0$. ([[lem-surface-non-pth-power-detected-by-derivation]])

[F7] Monogenic separable field extensions are standard smooth after inverting their derivative. Such base changes have regular geometric fibres, and flat-local regularity ascends from regular base and fibre. Geometric regularity of a Noetherian field algebra is tested by finite purely inseparable extensions. ([[lem-ag-standard-smooth-regular-geometric-fibres]], [[lem-flat-local-ascent-of-regularity]], [[lem-surface-geometric-regularity-field-test-and-generic-spread]])

## Proof

1.1 The field $\kappa(\mathfrak r)$ is finite over $K=\operatorname{Frac}(A)$; for every finite purely inseparable extension $L/\kappa(\mathfrak r)$ choose a finite $A\subseteq A'\subseteq L$ with $\operatorname{Frac}(A')=L$. Such an $A'$ is a complete local domain, and the finite-completion-factor lemma reduces the problem to the case $\kappa(\mathfrak r)=\operatorname{Frac}(A)$. [F1, F5, given]

2.1 In that case $\mathfrak rK[t]=(t-f)$ for some $f\in K$, and with $T=\widehat{A[t]_{\mathfrak q}}\otimes_AK$ one reduces first to a finite regular power-series subring $A_0\subseteq A$ and to factors of the finite base change of its completed polynomial local ring $B_0$; $B_0$ is regular because $A_0[t]_{\mathfrak q_0}$ is. [F3, F5, step 1.1]

3.1 Here is the needed regularity of $T$, including the finite-base reduction. Put $K_0=\operatorname{Frac}A_0$ and $T_0=\widehat{A_0[t]_{\mathfrak q_0}}\otimes_{A_0}K_0$, which is regular by localization and completion of regular rings. A finite separable extension of $K_0$ is monogenic with invertible polynomial derivative, so its tensor with $T_0$ is a standard smooth algebra with zero-dimensional regular fibres and is regular. Follow this by degree-$p$ purely inseparable steps. For a finite $A_0$-subalgebra $B$ of the preceding field $M$, completion factors express $T_0\otimes_{K_0}M$ as the product of the completed polynomial localizations of $B[t]$, localized to $M$. After multiplying the next defining element by a $p$th power from $K_0^\times$, choose $B$ to contain it; this clears denominators without changing the field extension. A derivation of $B$ detecting that non-$p$th-power element extends fixing $t$ and then through localization and completion. It preserves the product factors, since derivations kill idempotents, and its value on that element is a unit after localization to $M$. Each preceding factor is regular by induction, so the monogenic derivative-unit criterion makes its next field tensor regular. Every finite extension has a separable subextension followed by a purely inseparable one. The finite-factor formula of step 2.1 therefore makes $T$ regular. [F3, F4, F5, F6, F7, step 2.1]

4.1 In the reduced case of step 1.1, the fibre is $T/(t-f)$, with $f\in K$. The derivation $\partial/\partial t$ fixes $K$, extends through localization and completion, and takes the value $1$ on $t-f$. The general derivative-unit quotient criterion therefore makes this fibre regular. The same calculation after the finite reduction works for every finite purely inseparable extension of the original residue field, so the field test proves geometric regularity. In characteristic zero all finite extensions in the coefficient reduction are separable. AC is inherited from the suppliers. [F1, F2, F3, F4, F5, F7, step 1.1, step 3.1] ∎

## Remarks

- The only input beyond the power-series case is the coefficientwise extension of a detecting derivation to a polynomial ring and its completion.
- The element f is a uniformizer-type element whose equation is resolved by the hypersurface lemma.
