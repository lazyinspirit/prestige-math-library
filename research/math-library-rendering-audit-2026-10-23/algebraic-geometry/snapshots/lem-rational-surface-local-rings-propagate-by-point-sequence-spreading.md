---
id: lem-rational-surface-local-rings-propagate-by-point-sequence-spreading
kind: lemma
title: "Rationality propagates to birational local surface rings"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 9
deps: [
          def-axiom-of-choice, def-dependent-choice,
                    def-rational-normal-surface-singularity-and-bounded-modification-h1,
                    lem-finite-over-projective-noetherian-affine-base-is-projective,
                    lem-local-normal-surface-modification-dimension-and-projective-cohomology,
                    lem-local-normalized-point-blowup-sequences-spread-at-closed-points,
                    lem-normal-surface-modification-leray-short-exact-sequence,
                    lem-surface-finite-type-normalization-finite]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Resolution of Surfaces, Sections 54.8\u201354.9: complete source arguments with local prerequisite replacements"
      url: "https://stacks.math.columbia.edu/download/resolve.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC and DC. If a permitted normal local surface domain $A$ is rational and $A\subset B$ is a normal two-dimensional local domain with the same fraction field, essentially of finite type over $A$, then $B$ is rational. If modification H1 over $A$ is uniformly bounded, some finite normalized point-blowup sequence over $A$ has rational local rings at every closed point of its terminal surface.

## Facts & Assumptions

**Given:** A rational permitted normal local surface domain $A$, a normal two-dimensional local domain $A\subset B$ with the same fraction field essentially of finite type over $A$, and in the bounded part a uniform bound on modification H1 over $A$.

[F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])

[F3] *def-rational-normal-surface-singularity-and-bounded-modification-h1.* Assume AC and DC. A normal two-dimensional Noetherian local domain $A$ essentially of finite type over a field or complete equicharacteristic local base defines a rational singularity if $H^1(Y,\mathcal O_Y)=0$ for every normal integral proper modification $Y\to\operatorname{Spec}A$. Bounded modification H1 means these modules have uniformly bounded $A$-length. ([[def-rational-normal-surface-singularity-and-bounded-modification-h1]])

[F4] *lem-finite-over-projective-noetherian-affine-base-is-projective.* Assume AC. Let $R$ be Noetherian, let $X$ be projective over $R$, and let $Y\to X$ be finite. Then $Y\to X$ admits a closed immersion into one relative projective space over $X$, and $Y$ is projective over $R$. Finite compositions of projective morphisms between such schemes are projective. ([[lem-finite-over-projective-noetherian-affine-base-is-projective]])

[F5] *lem-local-normal-surface-modification-dimension-and-projective-cohomology.* Assume AC and DC. Let $(A,\mathfrak m)$ be a normal Noetherian local domain of dimension two and $f:X\to\operatorname{Spec}A$ an integral modification. Then $X$ has dimension two, all closed points have local dimension two, $f$ is an isomorphism off the closed point, $f_*\mathcal O_X=\mathcal O_{\operatorname{Spec}A}$, and its special fibre has dimension at most one. ([[lem-local-normal-surface-modification-dimension-and-projective-cohomology]])

[F6] *lem-local-normalized-point-blowup-sequences-spread-at-closed-points.* Assume AC and DC. Let $X$ be a normal integral surface locally of finite type over a permitted base and $x\in X$ a closed point with two-dimensional local ring $B$. Any finite normalized point-blowup sequence over $\operatorname{Spec}B$ spreads to the same finite sequence of normalized blowups at closed points of $X$, unchanged off $x$. ([[lem-local-normalized-point-blowup-sequences-spread-at-closed-points]])

[F7] *lem-normal-surface-modification-leray-short-exact-sequence.* Assume AC and DC. Let $A$ be a normal local domain of dimension two in the field/complete-equicharacteristic finite-type class, and $X'\xrightarrow gX\to\operatorname{Spec}A$ normal integral modifications. Then $g_*\mathcal O_{X'}=\mathcal O_X$ and $H^1(X,\mathcal O_X)\to H^1(X',\mathcal O_{X'})$ is injective. ([[lem-normal-surface-modification-leray-short-exact-sequence]])

[F8] *lem-surface-finite-type-normalization-finite.* Assume AC and DC. Every integral finite-type algebra over a field or a complete equicharacteristic Noetherian local base has finite normalization, and so do its localizations. Integral schemes of finite type over these bases consequently have finite scheme normalization. ([[lem-surface-finite-type-normalization-finite]])

## Proof

1.1 Write $B=C_{\mathfrak q}$ for a finite-type $A$-domain $C$ in the common function field, take its affine projective closure and finite normalization: the result is a normal projective modification $X$ of $\operatorname{Spec}A$ containing the same normal local ring $B$ at a point $x$, since normalization localizes to $B$ and has exactly one point above $\mathfrak q$ with unchanged local ring. [F3, F4, F8, given]

2.1 The integral modification has dimension two by the dimension helper, and local dimension two forces $x$ to be closed; to test rationality of $B$ it suffices by normalized-point domination to test its normalized point sequences, and the spreading helper extends each such sequence over $B$ to a sequence over $X$. [F5, F6, step 1.1]

3.1 Rationality of $A$ makes $H^1(X',\mathcal O)=0$ for the spread model $X'$; the Leray sequence identifies the relevant $R^1g_*\mathcal O$ stalk at $x$ with the tested $H^1$ over $B$ by localization, so that $H^1$ vanishes and $B$ is rational. [F7, F6, step 2.1]

4.1 For the bounded statement choose a normal projective modification maximizing the integer $H^1$-length, which exists because the set of values is a nonempty bounded set of natural numbers; dominating it by a normalized point sequence and using the Leray injection and maximality shows the terminal scheme still attains the maximum, and then every further normal projective modification of it has the same length, so the corresponding $R^1g_*\mathcal O$ vanishes. [F5, F7, step 2.1, step 3.1]

5.1 Spreading the point sequences at every closed local ring as in step 2.1 and using localization exhibits zero $H^1$ for all of them, so the point-sequence test proves those local rings rational; no general arbitrary-modification extension or limit theorem is imported. The Axiom of Choice and the Axiom of Dependent Choice are inherited from the cited suppliers. [F1, F2, F6, step 4.1] ∎

## Remarks

- The first half is the propagation of rationality along a birational local extension; the second is the analogous maximality argument for a uniform bound.
- The projective closure and finite normalization is what makes the local ring B appear as the local ring at a closed point of a projective modification.
