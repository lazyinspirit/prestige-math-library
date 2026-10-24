---
id: fs-continuous-bijection-is-a-homeomorphism
kind: false-statement
title: "FALSE: every continuous bijection of topological spaces is a homeomorphism"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-homeomorphism-criteria, def-homeomorphism-and-open-maps, def-standard-topologies,
       def-continuous-map-top, thm-continuity-characterisations-top]
justified_by: []
forward_refs: [cex-continuous-bijection-not-a-homeomorphism, def-compact-space, def-hausdorff-space]
aliases: []
landmark: false
short: "continuous bijection $\\ne$ homeomorphism"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Homeomorphism (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Homeomorphism"
    - title: "Sierpinski space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sierpi%C5%84ski_space"
    - title: "J. Munkres, Topology, 2nd ed., §18"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

**False claim:** if $X$ and $Y$ are topological spaces and $f : X \to Y$ is a
continuous bijection ([[def-continuous-map-top]],
[[def-homeomorphism-and-open-maps]]), then $f$ is a homeomorphism.

Continuity of $f^{-1}$ is an independent demand, and
[[lem-homeomorphism-criteria]] says exactly what it amounts to: a continuous
bijection is a homeomorphism precisely when it is an open map, equivalently a
closed map. The claim above asserts that this is automatic, and it is not. The
witness below is the smallest possible one — a two-point set carrying two
different topologies — and it uses nothing beyond
[[def-standard-topologies]].

## Facts & Assumptions

**Given:** A two-point set $S = \{a,b\}$ with $a \ne b$, carrying on the one hand the discrete topology $\mathcal{P}(S) = \{\varnothing, \{a\}, \{b\}, S\}$ and on the other the Sierpinski topology $\mathcal{T}_{\mathrm{Sier}} = \{\varnothing, \{b\}, S\}$; and the identity function $\mathrm{id} : (S, \mathcal{P}(S)) \to (S, \mathcal{T}_{\mathrm{Sier}})$.

[A1] The discrete topology on $S$ is $\mathcal{P}(S)$, in which every subset is open; the Sierpinski topology on $\{a,b\}$ is $\{\varnothing, \{b\}, S\}$ ([[def-standard-topologies]]).

[A2] A map is continuous exactly when preimages of open sets are open ([[thm-continuity-characterisations-top]], clause (b)).

[L1] A homeomorphism is a continuous bijection with continuous inverse; an open map carries open sets to open sets ([[def-homeomorphism-and-open-maps]]).

[L2] A continuous bijection is a homeomorphism if and only if it is an open map ([[lem-homeomorphism-criteria]], claim 1).

## Refutation

**Proof technique:** direct.

1.1 $\mathrm{id}$ is a bijection of $S$ onto $S$, being the identity function of the set $S$. [given]

1.2 $\mathrm{id}$ is continuous: for every $V \in \mathcal{T}_{\mathrm{Sier}}$ the preimage $\mathrm{id}^{-1}[V] = V$ is a subset of $S$, hence open in the discrete topology. [given, A1, A2]

1.3 $\{a\}$ is open in the discrete topology on $S$, and $\{a\} \notin \mathcal{T}_{\mathrm{Sier}}$, the three members of $\mathcal{T}_{\mathrm{Sier}}$ being $\varnothing$, $\{b\}$ and $S$, none of which is $\{a\}$ because $a \ne b$. [given, A1]

2.1 $\mathrm{id}$ is not an open map: by step 1.3 the image $\mathrm{id}[\{a\}] = \{a\}$ of an open set is not open in the target. [step 1.3, L1]

3.1 By steps 1.1, 1.2 and 2.1, $\mathrm{id}$ is a continuous bijection that is not open, hence not a homeomorphism by [L2]; equivalently, its inverse — again the identity function of $S$, now read from $(S,\mathcal{T}_{\mathrm{Sier}})$ to $(S,\mathcal{P}(S))$ — is not continuous, because the preimage of the open set $\{a\}$ is $\{a\}$, which is not open in $\mathcal{T}_{\mathrm{Sier}}$. So the claim is false. [step 1.1, step 1.2, step 2.1, step 1.3, A2, L1, L2] ∎

## Remarks

- **The general shape of every witness.** Whenever a set carries two distinct comparable topologies $\mathcal{T}_1 \subsetneq \mathcal{T}_2$, the identity from $(X,\mathcal{T}_2)$ to $(X,\mathcal{T}_1)$ is a continuous bijection and is not open, since a member of $\mathcal{T}_2 \setminus \mathcal{T}_1$ is its own image. The two-point witness above is that construction with the smallest possible $X$; the same construction on $\mathbb{R}$, with the discrete and the usual topologies, is on the companion page ([[cex-continuous-bijection-not-a-homeomorphism]]).

- **What rescues the claim.** A continuous bijection from a compact space to a Hausdorff space is a homeomorphism, because it is then a closed map. Neither compactness nor the Hausdorff property is available at this point in the reading order. They are defined later in [[def-compact-space]] and [[def-hausdorff-space]], where [[thm-continuous-bijection-from-a-compact-space-has-continuous-inverse]] proves this repair.

- **Why "bijective and continuous" is the wrong notion of sameness.** Sameness of topological spaces is homeomorphy, and by [[lem-homeomorphism-criteria]] it is an equivalence relation; "there is a continuous bijection $X \to Y$" is not even symmetric, as the witness above shows, since no continuous bijection runs from Sierpinski space to the two-point discrete space.
