---
id: lem-rnp-is-separably-determined
kind: lemma
title: "RNP is separably determined"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, def-radon-nikodym-property, thm-rnp-dentability-characterization, lem-nondentability-produces-a-vector-measure-without-density, thm-bounded-linear-maps-commute-with-bochner-integration]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  scraped: []
  references:
    - title: "Gilles Pisier, Martingales in Banach Spaces"
      url: "https://webusers.imj-prg.fr/~gilles.pisier/ihp-pisier.pdf"
      locator: "Chapter 2, Corollary 2.8 and proof, printed p. 41"
pipeline_run: phase-2-next-18
---

## Statement

Assume the Axiom of Choice. A Banach space $X$ has RNP if and only if every
closed separable subspace of $X$ has RNP.

## Facts & Assumptions

[A1] The Axiom of Choice holds ([[def-axiom-of-choice]]).

[L1] RNP is the bounded-variation vector-measure density property
([[def-radon-nikodym-property]]).

[L2] Under AC, RNP is equivalent to dentability of every nonempty bounded
closed convex set ([[thm-rnp-dentability-characterization]]).

[L3] Under AC, nondentability supplies a density-free Lebesgue vector measure
whose range lies in a closed separable subspace
([[lem-nondentability-produces-a-vector-measure-without-density]]).

[L4] A bounded linear inclusion preserves Bochner integrability and commutes
with integration
([[thm-bounded-linear-maps-commute-with-bochner-integration]]).

## Proof

**Proof technique:** direct.

**Given:** A Banach space $X$ and AC.

1.1 Transfer dentability to a closed subspace. Assume $X$ has RNP and let $Y\subseteq X$ be a closed separable subspace. Any nonempty bounded closed convex $C\subseteq Y$ is also closed in $X$. By [L2] it has arbitrarily small slices determined by functionals in $X^*$. Restricting such a functional to $Y$ gives the same slice of $C$, including the zero-functional singleton case. Thus every such $C$ is dentable in $Y$. [given, A1, L2]

2.1 Conclude the forward implication. Apply the reverse direction of [L2] inside $Y$ to conclude that $Y$ has RNP. Hence RNP passes to every closed separable subspace. [A1, L2, step 1.1]

3.1 Obtain the separable-range witness for the converse. Now assume every closed separable subspace of $X$ has RNP. If $X$ failed RNP, [L2] would give a nondentable bounded closed convex set, and [L3] would yield an absolutely continuous bounded-variation vector measure $\nu$ on $[0,1]$ with no $X$-valued density and with range in a closed separable subspace $Y$. [A1, L1, L2, L3, step 2.1]

4.1 Use the subspace density to contradict the witness. Regarded as a $Y$-valued measure, $\nu$ has the same variation and absolute continuity. By the assumed RNP of $Y$ and [L1], it has a Bochner density $h:[0,1]\to Y$. The isometric inclusion $i:Y\hookrightarrow X$ is bounded; [L4] gives $\nu(E)=i(\int_Eh)=\int_E i\circ h$ in $X$, contradicting step 3.1. [L1, L4, step 3.1]

5.1 Combine both directions and record boundaries. [A1, step 2.1, step 4.1] Steps 2.1 and 4.1 prove the equivalence. The zero subspace is closed and separable and has its zero density; if $X=\{0\}$ both sides hold. The full-AC cost is precisely that inherited from [L2] and [L3]. [A1, step 2.1, step 4.1] ∎