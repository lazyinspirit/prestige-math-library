---
id: lem-normal-surface-modification-uniform-principal-torsion-bound
kind: lemma
title: "Uniform principal torsion bound for surface modification cohomology"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 8
deps: [
          def-axiom-of-choice, def-dependent-choice,
                    def-normal-surface-modification-and-normalized-point-blowup,
                    lem-normal-local-surface-radical-multiple-of-a-principal-divisor,
                    lem-normal-surface-modification-leray-short-exact-sequence,
                    lem-projective-normal-surface-modification-h1-injects-off-special-fibre,
                    lem-surface-finite-type-normalization-finite, thm-long-exact-sequence-sheaf-cohomology,
                    thm-proper-quasi-finite-is-finite]
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

Assume AC and DC. For a normal local surface domain $A$ in the permitted finite-type class and $0\ne a\in A$, the lengths of $H^1(X,\mathcal O_X)[a]$ are uniformly bounded over all normal projective modifications $X\to\operatorname{Spec}A$.

## Facts & Assumptions

**Given:** A normal local surface domain $A$ in the permitted finite-type class, $0\ne a\in A$, and a normal projective modification $X\to\operatorname{Spec}A$.

[F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])

[F3] *def-normal-surface-modification-and-normalized-point-blowup.* **Normal schemes.** A locally Noetherian scheme is *normal* if every local ring $\mathcal O_{X,x}$ is an integrally closed domain (def-normal-noetherian-ring). This is a local condition on the local rings and is checked on an affine open cover; it does not require the global section ring to be a domain. The empty scheme is normal vacuously. ([[def-normal-surface-modification-and-normalized-point-blowup]])

[F4] *lem-normal-local-surface-radical-multiple-of-a-principal-divisor.* Assume AC and DC. If $A$ is a normal two-dimensional Noetherian local domain and $0\ne a\in\mathfrak m$, there is $c\in\mathfrak m$ such that $A/cA$ is reduced and $a\mid c^n$ for some positive integer $n$. ([[lem-normal-local-surface-radical-multiple-of-a-principal-divisor]])

[F5] *lem-normal-surface-modification-leray-short-exact-sequence.* Assume AC and DC. Let $A$ be a normal local domain of dimension two in the field/complete-equicharacteristic finite-type class, and $X'\xrightarrow gX\to\operatorname{Spec}A$ normal integral modifications. Then $g_*\mathcal O_{X'}=\mathcal O_X$ and $H^1(X,\mathcal O_X)\to H^1(X',\mathcal O_{X'})$ is injective. ([[lem-normal-surface-modification-leray-short-exact-sequence]])

[F6] *lem-projective-normal-surface-modification-h1-injects-off-special-fibre.* Assume AC and DC. Let $A$ be a normal two-dimensional Noetherian local domain essentially of finite type over a field or complete equicharacteristic local base, and let $X\to\operatorname{Spec}A$ be a projective normal modification. If $U$ is the inverse image of the punctured spectrum, $H^1(X,\mathcal O_X)\to H^1(U,\mathcal O_U)$ is injective. ([[lem-projective-normal-surface-modification-h1-injects-off-special-fibre]])

[F7] *lem-surface-finite-type-normalization-finite.* Assume AC and DC. Every integral finite-type algebra over a field or a complete equicharacteristic Noetherian local base has finite normalization, and so do its localizations. Integral schemes of finite type over these bases consequently have finite scheme normalization. ([[lem-surface-finite-type-normalization-finite]])

[F8] *thm-long-exact-sequence-sheaf-cohomology.* Assume the Axiom of Choice. Let $0\to\mathcal F'\to\mathcal F\to\mathcal F''\to0$ be a short exact sequence of abelian sheaves on a topological space $X$, and let $H^q(X,-)$ be sheaf cohomology computed from the supplied functorial injective resolution datum $I$ on $\mathrm{Ab}(X)$ (def-sheaf-cohomology-derived-global-sections). ([[thm-long-exact-sequence-sheaf-cohomology]])

[F9] *thm-proper-quasi-finite-is-finite.* Assume the Axiom of Choice. Every proper quasi-finite morphism of schemes $f:X\to S$ is finite (def-proper-morphism, def-quasi-finite-morphism-schemes, def-finite-morphism-schemes). No Noetherian or nonemptiness hypothesis is imposed, and the assertion is local on the base. ([[thm-proper-quasi-finite-is-finite]])

## Proof

1.1 If $a$ is a unit there is no $a$-torsion; otherwise the radical-multiple lemma produces $c\in\mathfrak m$ with $A/cA$ reduced and $a\mid c^n$ for some $n$, and the kernels of successive multiplication by $c$ satisfy $\operatorname{length}(M[c^n])\le n\operatorname{length}(M[c])$, so it suffices to bound the $c$-torsion uniformly. [F4, given]

2.1 The normalization $T$ of the reduced one-dimensional ring $A/cA$ is finite, being the product of the finitely many normalizations of its components in the total quotient ring; the quotient $T/(A/cA)$ is a finite module supported at the maximal ideal and hence has finite length, uniformly determined by $A$ and $c$. [F7, step 1.1]

3.1 Let $Z$ be the Cartier divisor $c=0$ on $X$ and let $Z'$ be the schematic closure of its punctured part. Then $Z'$ is reduced and has no vertical components; each of its one-dimensional components dominates one component of $\operatorname{Spec}(A/cA)$, so no fibre over the closed point can be positive-dimensional. Hence $Z'$ is proper and quasi-finite, therefore finite, and its algebra embeds into $T$. [F9, step 2.1]

4.1 If a section $s$ of $\mathcal O_Z$ restricts to zero on $Z'$, then its image in $H^1(X,\mathcal O_X)$ restricts to zero on the punctured preimage; the H1 injection off the special fibre makes that boundary zero, so $s$ lifts from $A$, and its vanishing on $Z'$ forces the lift to vanish in $A/cA$ because the latter embeds in the algebra of $Z'$; hence $s=0$. Thus $H^0(Z,\mathcal O_Z)$ injects into $T$ compatibly with $A/cA$. [F5, F6, step 3.1]

5.1 The multiplication-by-$c$ long exact sequence identifies $H^1(X,\mathcal O_X)[c]$ with $H^0(Z,\mathcal O_Z)/(A/cA)$, whose length is bounded by $\operatorname{length}(T/(A/cA))$ uniformly in $X$; this gives the required uniform bound for $a$. The Axiom of Choice and the Axiom of Dependent Choice are inherited from the cited suppliers. [F1, F2, F3, F8, step 4.1] ∎

## Remarks

- The only X-dependent input is the H1 injection off the special fibre; the bound itself is a function of A and a alone.
- General proper modifications are reduced to projective ones by domination and the Leray injection.
