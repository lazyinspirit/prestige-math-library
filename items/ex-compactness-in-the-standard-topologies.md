---
id: ex-compactness-in-the-standard-topologies
kind: example
title: "The discrete, indiscrete, cofinite, cocountable, particular-point and Sierpinski topologies placed in the compactness hierarchy"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-of-naturals-positive, def-compact-space, def-compactness-variants, def-standard-topologies, def-topological-space, lem-compactness-of-a-subspace-is-ambient, def-countable, thm-r-uncountable, def-hausdorff-space, thm-compact-subset-of-a-hausdorff-space-is-closed, def-subspace-topology-top, lem-subset-of-countable, def-natural-numbers, def-canonical-natural]
justified_by: []
aliases: []
landmark: true
short: "compactness of the standard topologies"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-sonnet-5
    verdict: certify
    date: 2026-08-05
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "Cofinite topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cofinite_topology"
    - title: "Particular point topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Particular_point_topology"
pipeline_run: null
---

## Example

Let $X$ be a set and let $\mathcal{T}_{\mathrm{disc}}$,
$\mathcal{T}_{\mathrm{ind}}$, $\mathcal{T}_{\mathrm{cof}}$,
$\mathcal{T}_{\mathrm{coc}}$, $\mathcal{T}_p$ and $\mathcal{T}_{\mathrm{Sier}}$
be the topologies of [[def-standard-topologies]]. Compactness is as in
[[def-compact-space]]. Then:

1. **Discrete.** $(X, \mathcal{T}_{\mathrm{disc}})$ is compact if and only if $X$
   is finite ([[def-countable]]).
2. **Indiscrete.** $(X, \mathcal{T}_{\mathrm{ind}})$ is compact, for every $X$.
3. **Cofinite.** $(X, \mathcal{T}_{\mathrm{cof}})$ is compact, for every $X$.
4. **Particular point.** For $p \in X$, the space $(X, \mathcal{T}_p)$ is compact
   if and only if $X$ is finite.
5. **Cocountable.** $(\mathbb{R}, \mathcal{T}_{\mathrm{coc}})$ is neither compact
   nor countably compact ([[def-compactness-variants]]).
6. **Sierpinski.** Sierpinski space $S = \{a,b\}$ is compact, being finite, and
   its subset $\{b\}$ is a compact subset that is not closed
   ([[thm-compact-subset-of-a-hausdorff-space-is-closed]]).

Claims 2 and 3 are the ones worth noticing: compactness on its own is a very weak
condition, and a space can be compact while separating no two of its points at
all.

## Facts & Assumptions

**Given:** A set $X$, a point $p \in X$ where the particular-point topology is in play, and the six topologies of [[def-standard-topologies]].

[L1] A space is compact when every family of open sets with union the space has a finite subfamily with union the space; a family is finite when it is empty or listable; every space listed as $\{x_0, \dots, x_n\}$ is compact ([[def-compact-space]], [[def-topological-space]]).

[L2] $\mathcal{T}_{\mathrm{disc}} = \mathcal{P}(X)$; $\mathcal{T}_{\mathrm{ind}} = \{\varnothing, X\}$; $\mathcal{T}_{\mathrm{cof}}$ consists of $\varnothing$ and the sets with finite complement; $\mathcal{T}_{\mathrm{coc}}$ of $\varnothing$ and the sets with at most countable complement; $\mathcal{T}_p$ of $\varnothing$ and the sets containing $p$; and $\mathcal{T}_{\mathrm{Sier}} = \{\varnothing, \{b\}, S\}$ on $S = \{a,b\}$ ([[def-standard-topologies]]).

[L3] A set is finite when it is equinumerous with a natural number, equivalently when it is listable as $\{x_0, \dots, x_n\}$ or empty; a subset of an at most countable set is at most countable; $\mathbb{R}$ is uncountable ([[def-countable]], [[lem-subset-of-countable]], [[thm-r-uncountable]]).

[L4] A subset $A$ is a compact subset when the subspace it carries is compact, and equivalently when every family of ambient open sets covering $A$ has finitely many members covering it ([[def-compact-space]], [[def-subspace-topology-top]], [[lem-compactness-of-a-subspace-is-ambient]]).

[L5] In a Hausdorff space every compact subset is closed ([[thm-compact-subset-of-a-hausdorff-space-is-closed]], claim 3; [[def-hausdorff-space]]).

[L6] The naturals embed in $\mathbb{R}$ by the canonical natural $\iota$ ([[def-canonical-natural]], [[def-natural-numbers]]); $\iota$ is injective, which is a lemma about ordered fields and not part of the definition ([[lem-of-naturals-positive]]), so $\{\iota(n) : n \in \mathbb{N}\}$ is a countably infinite subset of $\mathbb{R}$.

## Verification

**Proof technique:** direct.

1.1 Claim 1. If $X$ is finite it is compact by [L1], whatever its topology. If $X$ is compact in the discrete topology, the family of singletons $\{\, \{x\} : x \in X \,\}$ is an open cover by [L2], so finitely many singletons cover $X$ and $X$ is listable, hence finite by [L3]. [L1, L2, L3]

1.2 Claim 2. Let $\mathcal{U} \subseteq \mathcal{T}_{\mathrm{ind}}$ have union $X$. If $X = \varnothing$ the empty subfamily covers it; otherwise some member is nonempty, hence equals $X$ by [L2], and that single member is a finite subcover. [L1, L2]

1.3 Claim 4. If $X$ is finite it is compact by [L1]. If $X$ is compact in $\mathcal{T}_p$, then $\{\, \{p,x\} : x \in X \,\}$ is a family of open sets by [L2] with union $X$, so finitely many of its members cover $X$; their union is a listable set, so $X$ is finite by [L3]. [L1, L2, L3]

1.4 Claim 6. $S$ is finite, hence compact by [L1]; the subspace $\{b\}$ is a one-point space and so compact by [L1], making $\{b\}$ a compact subset by [L4]; and $\{b\}$ is not closed, its complement $\{a\}$ not lying in $\mathcal{T}_{\mathrm{Sier}}$ by [L2]. By [L5] this forces $S$ not to be Hausdorff, which it is not: the only open set containing $a$ is $S$. [L1, L2, L4, L5]

2.1 Claim 3. Let $\mathcal{U} \subseteq \mathcal{T}_{\mathrm{cof}}$ have union $X \ne \varnothing$, the empty case being as in step 1.2. Some $U_0 \in \mathcal{U}$ is nonempty, so $X \setminus U_0$ is finite by [L2], say $X \setminus U_0 = \{y_0, \dots, y_k\}$ or empty; in the second case $\{U_0\}$ covers $X$, and in the first each $y_j$ lies in some member of $\mathcal{U}$, and finitely many members named in this way together with $U_0$ cover $X$. [L1, L2, L3]

2.2 Claim 5. Put $a_n := \iota(n)$ for $n \in \mathbb{N}$ and $A_n := \{\, a_m : m > n \,\}$, an at most countable subset of $\mathbb{R}$ by [L6] and [L3], so that $U_n := \mathbb{R} \setminus A_n$ lies in $\mathcal{T}_{\mathrm{coc}}$ by [L2]. Every real lies in some $U_n$: a real that is no $a_m$ lies in $U_0$, and $a_m$ lies in $U_m$. So $\{\, U_n : n \in \mathbb{N} \,\}$ is an at most countable open cover of $\mathbb{R}$. [L2, L3, L6, step 1.1]

3.1 The sets $U_n$ increase with $n$, since the $A_n$ decrease, so the union of finitely many of them is a single $U_N$, and $a_{N+1} \in A_N$ lies outside it. Hence this at most countable open cover has no finite subcover and $(\mathbb{R}, \mathcal{T}_{\mathrm{coc}})$ is neither countably compact nor compact, which is claim 5. [L1, L3, step 2.2] ∎

## Remarks

**Compactness alone separates nothing.** The cofinite topology on an infinite set is compact and has the property that any two nonempty open sets meet, so it is as far from Hausdorff as a topology can be; the indiscrete topology is compact and has only two open sets. Every theorem on the companion page that concludes a *separation* property from compactness carries a Hausdorff hypothesis for exactly this reason. The purely covering conclusions there carry none: continuous images of compact spaces are compact, a continuous real function on a nonempty compact space attains its bounds, and products of compact spaces are compact, all without any separation hypothesis.

**The discrete and the cocountable cases fail for different reasons.** A discrete space fails compactness because its singletons already form a cover with nothing to thin; the cocountable topology on $\mathbb{R}$ fails it because countably many points can be shaved off one at a time and no finite stage removes them all. The second failure is at the countable level, which is why it kills countable compactness too.
