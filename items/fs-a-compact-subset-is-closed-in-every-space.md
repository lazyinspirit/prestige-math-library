---
id: fs-a-compact-subset-is-closed-in-every-space
kind: false-statement
title: "FALSE: a compact subset of a topological space is closed"
status: published
origin: session
deps: [def-compact-space, thm-compact-subset-of-a-hausdorff-space-is-closed, def-standard-topologies, def-topological-space, def-hausdorff-space, def-subspace-topology-top]
justified_by: []
aliases: []
landmark: false
short: "FALSE: compact implies closed"
proof_strategy: contradiction
verification:
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "Sierpiński space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sierpi%C5%84ski_space"
pipeline_run: null
---

## Statement

**False claim:** in every topological space $(X, \mathcal{T})$
([[def-topological-space]]), a compact subset ([[def-compact-space]]) is closed.

**Where the claim comes from, and what is actually true.** In a **Hausdorff**
space a compact subset is closed, and that is
[[thm-compact-subset-of-a-hausdorff-space-is-closed]], claim 3. The claim above
is that theorem with its hypothesis dropped. The refutation builds its own
witness: Sierpinski space, the two-point space with exactly one non-trivial open
set ([[def-standard-topologies]]).

## Facts & Assumptions

**Given:** The two-element set $S = \{a,b\}$ with $a \ne b$, and the family $\mathcal{T}_{\mathrm{Sier}} = \{\varnothing, \{b\}, S\}$.

[A1] The false claim: in every topological space a compact subset is closed.

[L1] $\mathcal{T}_{\mathrm{Sier}}$ is a topology on $S$, the particular-point topology with particular point $b$; a subset of $S$ is closed exactly when its complement lies in $\mathcal{T}_{\mathrm{Sier}}$ ([[def-standard-topologies]], [[def-topological-space]]).

[L2] A subset $A$ of a space is a compact subset when the subspace $(A, \mathcal{T}_A)$ is compact, and every space listed as $\{x_0, \dots, x_n\}$ is compact ([[def-compact-space]], [[def-subspace-topology-top]]).

[L3] A space is Hausdorff when distinct points lie in disjoint open sets ([[def-hausdorff-space]]).

## Refutation

**Proof technique:** contradiction.

1.1 Suppose the claim [A1] holds, so that in every topological space every compact subset is closed. [A1, assume-contra]

1.2 $(S, \mathcal{T}_{\mathrm{Sier}})$ is a topological space by [L1], and its closed sets are $S$, $\{a\}$ and $\varnothing$, the complements of $\varnothing$, $\{b\}$ and $S$. [L1]

2.1 $\{b\}$ is a compact subset of $S$: the subspace it carries is a one-point space, which is compact by [L2]. [L2, step 1.2]

2.2 $\{b\}$ is not closed in $S$, since its complement $\{a\}$ is not a member of $\mathcal{T}_{\mathrm{Sier}}$. [L1, step 1.2]

3.1 By [A1] applied to the space of step 1.2 and the compact subset of step 2.1, the set $\{b\}$ would be closed, which step 2.2 denies. So the claim [A1] is false. [A1, step 2.1, step 2.2, discharge-contradiction] ∎

## Remarks

**The witness is as small as a witness can be.** Sierpinski space has two points and three open sets, and it fails the Hausdorff condition for the only reason available: the only open set containing $a$ is $S$, which also contains $b$ ([[def-hausdorff-space]]). Since every finite space is compact, every subset of it is a compact subset, so the failure is not about compactness being hard to achieve; it is entirely about closedness.

**What survives without a separation hypothesis.** A compact subset of an arbitrary space is still compact in every space containing it as a subspace, that being the content of the intrinsic definition ([[def-compact-space]]), and a closed subset of a compact space is still compact ([[thm-closed-subspace-of-a-compact-space-is-compact]]). It is only the converse direction, from compact to closed, that needs the ambient space to separate points.
