---
id: lem-complete-normal-surface-regular-resolution-converts-to-normalized-point-blowups
kind: lemma
title: "A complete normal surface resolution converts to normalized point blowups"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 19
deps: [
          cor-complete-local-domain-finite-over-a-regular-power-series-ring, def-axiom-of-choice,
                    def-dependent-choice, lem-blowup-of-closed-point-of-regular-surface-is-regular,
                    lem-local-normal-surface-modification-dimension-and-projective-cohomology,
                    lem-local-normalized-point-blowup-sequences-spread-at-closed-points,
                    lem-normal-projective-surface-dualizing-module-over-regular-local-base,
                    lem-normalized-point-blowups-dominate-local-normal-surface-modifications,
                    lem-proper-source-to-separated-target-proper,
                    lem-rational-normal-surface-reduced-to-invertible-canonical-module,
                    lem-rational-surface-local-rings-propagate-by-point-sequence-spreading,
                    lem-regular-local-surface-is-rational-by-point-blowup-domination,
                    lem-surface-open-regular-locus, lem-surface-regular-fibres-preserve-normality,
                    thm-rational-gorenstein-normal-surface-singularity-resolved-by-point-blowups]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joseph Lipman, Rational singularities (1969), \u00a724, pp.264\u2013268, relations (5)/(5\u2032): full text read; omitted chart details proved locally"
      url: "https://www.math.purdue.edu/~jlipman/papers-older/%5b1969%5d%20Rational%20singularities%20with%20applications%20to%20algebraic%20surfaces%20and%20unique%20factorization.pdf"
    - title: "Joseph Lipman, Desingularization of two-dimensional schemes (1978), pp.171\u2013174, (1.29) and fixed-coordinate termination"
      url: "https://www.math.purdue.edu/~jlipman/papers-older/%5b1978%5d%20Desingularization%20of%20two-dimensional%20schemes.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC and DC. If a complete equicharacteristic normal local surface domain $A$ admits a proper birational regular model, then it admits a regular terminal model obtained by finitely many normalized point blowups. The centres can all be chosen singular; the normalizations are finite.

## Facts & Assumptions

**Given:** A complete equicharacteristic normal local surface domain $A$ admitting a proper birational regular model $Z\to\operatorname{Spec}A$.

[F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])

[F3] *cor-complete-local-domain-finite-over-a-regular-power-series-ring.* Assume the Axiom of Choice. Let $(A,\mathfrak m)$ be a complete equicharacteristic Noetherian local domain of dimension $d$. Then there exists a coefficient field $k \subseteq A$ and an injective local homomorphism $k\llbracket X_1,\ldots,X_d\rrbracket \hookrightarrow A$ whose image is a regular complete local subring over which $A$ is module-finite. ([[cor-complete-local-domain-finite-over-a-regular-power-series-ring]])

[F4] *lem-normalized-point-blowups-dominate-local-normal-surface-modifications.* Assume AC and DC. Let $A$ be a normal two-dimensional Noetherian local domain essentially of finite type over a field or a complete equicharacteristic Noetherian local ring. Let $S$ be a normal integral modification of $\operatorname{Spec}A$, and let $Y\to S$ be an integral modification with normal $Y$. ([[lem-normalized-point-blowups-dominate-local-normal-surface-modifications]])

[F5] *lem-local-normal-surface-modification-dimension-and-projective-cohomology.* Assume AC and DC. Let $(A,\mathfrak m)$ be a normal Noetherian local domain of dimension two and $f:X\to\operatorname{Spec}A$ an integral modification. Then $X$ has dimension two, all closed points have local dimension two, $f$ is an isomorphism off the closed point, $f_*\mathcal O_X=\mathcal O_{\operatorname{Spec}A}$, and its special fibre has dimension at most one. ([[lem-local-normal-surface-modification-dimension-and-projective-cohomology]])

[F6] *lem-surface-open-regular-locus.* Assume AC and DC. Every finite-type algebra over a field or a complete equicharacteristic Noetherian local ring has open regular locus. Thus the regular locus of any scheme locally of finite type over one of these bases is open. ([[lem-surface-open-regular-locus]])

[F7] *lem-proper-source-to-separated-target-proper.* Assume the Axiom of Choice. Let $f:X\to S$ be proper and let $g:Y\to S$ be separated. Then every $S$-morphism $h:X\to Y$ is proper. No Noetherian, reducedness or nonemptiness hypothesis is used, and the empty source is included. ([[lem-proper-source-to-separated-target-proper]])

[F8] *lem-regular-local-surface-is-rational-by-point-blowup-domination.* Assume AC and DC. A regular two-dimensional local domain in the permitted finite-type class defines a rational singularity. ([[lem-regular-local-surface-is-rational-by-point-blowup-domination]])

[F9] *lem-rational-surface-local-rings-propagate-by-point-sequence-spreading.* Assume AC and DC. If a permitted normal local surface domain $A$ is rational and $A\subset B$ is a normal two-dimensional local domain with the same fraction field, essentially of finite type over $A$, then $B$ is rational. ([[lem-rational-surface-local-rings-propagate-by-point-sequence-spreading]])

[F10] *lem-normal-projective-surface-dualizing-module-over-regular-local-base.* Assume AC and DC. Let $R$ be a regular Noetherian local ring of dimension two, let $A$ be a finite normal local $R$-domain of dimension two, with $R\hookrightarrow A$ local, and let $X$ be a normal integral scheme of dimension two projective over $R$, with a proper birational map $f:X\to\operatorname{Spec}A$. Put $\omega_A=\operatorname{Hom}_R(A,R)$. ([[lem-normal-projective-surface-dualizing-module-over-regular-local-base]])

[F11] *lem-rational-normal-surface-reduced-to-invertible-canonical-module.* Assume AC and DC. A rational normal local surface domain in the permitted regular-base dualizing setting admits a finite sequence of ordinary point blowups at singular closed points, with each model normal and projective, whose terminal canonical module is invertible. ([[lem-rational-normal-surface-reduced-to-invertible-canonical-module]])

[F12] *lem-surface-regular-fibres-preserve-normality.* Assume AC and DC. A flat map of Noetherian rings with regular fibres carries normality of the base to normality of the target. Consequently a normal essentially finite-type local ring over a field or complete equicharacteristic Noetherian local base has normal maximal-adic completion, which is a domain. ([[lem-surface-regular-fibres-preserve-normality]])

[F13] *thm-rational-gorenstein-normal-surface-singularity-resolved-by-point-blowups.* Assume AC and DC. A rational Gorenstein normal local surface domain in the permitted canonical-module setting with normal completion is resolved by finitely many ordinary blowups at singular closed points. Every model is normal, its closed local rings are rational, and its canonical module is invertible; the terminal model is regular and projective over the local base. ([[thm-rational-gorenstein-normal-surface-singularity-resolved-by-point-blowups]])

[F14] *lem-local-normalized-point-blowup-sequences-spread-at-closed-points.* Assume AC and DC. Let $X$ be a normal integral surface locally of finite type over a permitted base and $x\in X$ a closed point with two-dimensional local ring $B$. Any finite normalized point-blowup sequence over $\operatorname{Spec}B$ spreads to the same finite sequence of normalized blowups at closed points of $X$, unchanged off $x$. ([[lem-local-normalized-point-blowup-sequences-spread-at-closed-points]])

[F15] *lem-blowup-of-closed-point-of-regular-surface-is-regular.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $S$ be a **regular surface**: a locally Noetherian scheme of pure dimension two all of whose local rings are regular (def-embedding-dimension-and-regular-local-ring). ([[lem-blowup-of-closed-point-of-regular-surface-is-regular]])

## Proof

1.1 Choose a finite regular power-series subring $R\subseteq A$ over which $A$ is finite, let $Z\to\operatorname{Spec}A$ be a proper birational regular model, and apply the normalized-point-blowup domination helper to a normal modification dominating $Z$: this gives a finite sequence of proper normalized point blowups over $A$, projective over $A$ and over $R$, with finite normalizations, whose terminal model $W$ dominates $Z$. [F3, F4, given]

2.1 The model $W$ is normal, its regular locus is open and it is regular in codimension one, so its singular set is a finite set of closed points. [F5, F6, step 1.1]

3.1 Since $W$ is proper over $A$ and $Z$ is separated, $W\to Z$ is proper, so a closed singular point $w$ of $W$ maps to a closed point $z$ of $Z$; both local rings have dimension two, $\mathcal O_{Z,z}$ is regular and rational, and rationality propagates in the common fraction field, so $\mathcal O_{W,w}$ is rational as well; $W$ carries the regular-base projective canonical module of the permitted setting. [F7, F8, F9, F10, step 1.1, step 2.1]

4.1 The local canonical principalization reduces these finitely many rational points to points with invertible canonical module by ordinary singular-point blowups, their completions remain normal by the formal-fibre helper, and the rational-Gorenstein resolution theorem then resolves them by further ordinary singular-point blowups. [F11, F12, F13, step 3.1]

5.1 Spreading the finitely many resulting local sequences at the corresponding closed points produces a model that is regular over each original singular point and unchanged on the regular open subset, hence globally regular; composing its ordinary blowups with the initial normalized-point sequence gives the required normalized-point sequence over $A$, and the normalizations occurring in the composite are finite. [F14, step 4.1]

6.1 If an initial centre of that sequence was a regular point, its whole descendant region remains regular, because a point blowup of a regular surface at a closed point stays regular; deleting that step and every later centre lying over it, and gluing the retained point blowups with the identity on the deleted regular region, keeps a regular terminal model whose surviving centres are all singular. [F15, step 5.1]

7.1 The Axiom of Choice and the Axiom of Dependent Choice are inherited from the cited suppliers; no general alteration equivalence, mixed-characteristic theorem or formal-gluing theorem is used. [F1, F2, step 6.1] ∎

## Remarks

- The conversion keeps the terminal model regular while removing all regular centres.
- The composite is a normalized-point sequence because normalization of a normal model is the identity.
