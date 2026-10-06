---
id: lem-surface-generic-power-series-formal-fibres
kind: lemma
title: Surface generic power series formal fibres
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 2
deps:
- def-axiom-of-choice
- def-dependent-choice
- lem-surface-derivations-and-regular-hypersurfaces
- lem-surface-finite-completion-factors
- lem-surface-geometric-regularity-field-test-and-generic-spread
- lem-surface-non-pth-power-detected-by-derivation
- thm-completion-preserves-regular-local-rings
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: 'The Stacks Project: full proof imports for normal-surface resolution, lemma-helper-G-ring'
    url: https://stacks.math.columbia.edu/download/more-algebra.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC. For $A=k[\![X_1,\ldots,X_n]\!][Y_1,\ldots,Y_m]$ and $K=\operatorname{Frac}A$, every completed local generic fibre $\widehat{A_{\mathfrak p}}\otimes_AK$ is geometrically regular over $K$.

## Facts & Assumptions

**Given:** The ring $A=k[\![X_1,\ldots,X_n]\!][Y_1,\ldots,Y_m]$ with fraction field $K$ and a prime $\mathfrak p\in\operatorname{Spec}A$.

[F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])

[F3] *lem-surface-derivations-and-regular-hypersurfaces.* Assume AC. Derivations of Noetherian rings extend uniquely through localization and adic completion. If $T$ is regular Noetherian, $D:T\to T$ a derivation and $D(f)$ a unit, then $T[z]/(z^r-f)$ is regular for every $r\ge1$. ([[lem-surface-derivations-and-regular-hypersurfaces]])

[F4] *lem-surface-finite-completion-factors.* Assume AC. For a finite map $R\to S$ of Noetherian rings and $\mathfrak p\in\operatorname{Spec}R$, $\widehat{R_{\mathfrak p}}\otimes_RS\cong\prod_{\mathfrak q\cap R=\mathfrak p}\widehat{S_{\mathfrak q}}$. The finitely many factors use their maximal-adic completions. Thus formal fibres for finite extensions are factors of residue-field base changes of the original formal fibres. ([[lem-surface-finite-completion-factors]])

[F5] *lem-surface-geometric-regularity-field-test-and-generic-spread.* Assume AC. For a Noetherian $k$-algebra $T$, call $T$ geometrically regular if $T\otimes_kE$ is regular for every finitely generated field extension $E/k$. It suffices to test finite purely inseparable $E/k$. Geometric regularity is stable under finitely generated field extension. ([[lem-surface-geometric-regularity-field-test-and-generic-spread]])

[F6] *lem-surface-non-pth-power-detected-by-derivation.* Assume AC. Let $B$ be a domain of characteristic $p>0$ finite type over a complete equicharacteristic Noetherian local ring, and let $f\in B$ not be a $p$th power in $\operatorname{Frac}B$. There is a derivation $D:B\to B$ with $D(f)\ne0$. ([[lem-surface-non-pth-power-detected-by-derivation]])

[F7] *thm-completion-preserves-regular-local-rings.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). A nonzero Noetherian local ring $R$ is regular if and only if its maximal-adic completion $\widehat R$ is regular. ([[thm-completion-preserves-regular-local-rings]])

## Proof

1.1 The ring $A$ is regular, and regularity survives localization and completion, so the completed local ring $\widehat{A_{\mathfrak p}}$ is regular and its base change to $K$ is regular before any purely inseparable extension; in characteristic zero finite field extensions are separable and standard-etale after clearing discriminants, so they preserve regularity. [F5, F7, given]

2.1 In characteristic $p$ it suffices by the geometric-regularity field test to check finite purely inseparable extensions, and these are filtered by degree-$p$ towers $M\subset M[z]/(z^p-f)$; choosing a finite $A$-subalgebra $B\subset M$ with $f\in B$ after clearing denominators by $p$th powers reduces the check to such a tower. [F5, given, step 1.1]

3.1 The finite-completion-factor lemma identifies $\widehat{A_{\mathfrak p}}\otimes_AM$ with the product of the completed localizations $\widehat{B_{\mathfrak r}}\otimes_BM$ over the finitely many primes $\mathfrak r$ above $\mathfrak p$; since $B$ and $B[z]/(z^p-f)$ have a unique prime over a purely inseparable extension, the induction reduces to a single monogenic degree-$p$ step. [F4, step 2.1]

4.1 The detecting-derivation lemma produces $D\colon B\to B$ with $D(f)\ne0$; the derivation extends through localization, completion and localization, and its value on $f$ becomes a unit because it is nonzero in the field $M$. [F3, F6, step 3.1]

5.1 Put $T=\widehat{B_{\mathfrak r}}\otimes_BM=\widehat{A_{\mathfrak p}}\otimes_AM$. By induction on $[M:K]$, $T$ is regular. The extended derivation takes a unit value on $f$, so the hypersurface supplier makes $T[z]/(z^p-f)=\widehat{A_{\mathfrak p}}\otimes_AL$ regular. Here the finite-completion factorization and unique primes identify the displayed algebra; no regularity of $B[z]/(z^p-f)$ before localizing is asserted. The degree-$p$ induction and the finite purely inseparable test prove geometric regularity. [F1, F2, F3, F4, F5, step 1.1, step 4.1] ∎

## Remarks

- The whole argument is a descent of regularity through degree-p inseparable extensions, using the derivation detector to enter the hypersurface case.
- Only the finite purely inseparable test is needed for geometric regularity, which is why the tower argument suffices.
