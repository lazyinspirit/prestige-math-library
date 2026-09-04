---
id: ex-bertrand-chord-paradox-is-a-model-specification-problem
kind: example
title: "Bertrand's chord paradox is a model-specification problem"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-probability-measure]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  references:
    - title: "Jean-Francois Le Gall, Integration, Probabilities and Stochastic Processes, Section 8.1.4"
      url: "https://www.imo.universite-paris-saclay.fr/~jean-francois.le-gall/IPPA2.pdf"
---

## Example

Consider a circle of radius $1$ and the event that a random chord is longer than
the side of the inscribed equilateral triangle. Three natural models give three
different probabilities.

1. If the chord is determined by a random central angle
   $\Theta\sim\mathrm{Unif}[0,\pi]$, then the event is $\{\Theta>2\pi/3\}$ and
   has probability $1/3$.
2. If the chord is determined by choosing its midpoint uniformly on a fixed
   radius, then the event is that the midpoint lies within distance $1/2$ of the
   center, and has probability $1/2$.
3. If the chord is determined by choosing its midpoint uniformly in the whole
   disk, then the same geometric condition gives probability $1/4$.

## Facts & Assumptions

**Given:** The three sample-space models stated in the Example.

[L1] A probability question is determined only after the sample space and its
probability measure have been fixed ([[def-probability-measure]]).

## Verification

**Proof technique:** direct.

1.1 A chord subtending central angle $\Theta$ has length $2\sin(\Theta/2)$. It is longer than $\sqrt 3$ exactly when $\sin(\Theta/2)>\sqrt3/2$, that is, when $\Theta>2\pi/3$. Under the uniform-angle model this has probability $$(\pi-2\pi/3)/\pi=1/3.$$ [L1, given, algebra]

2.1 A chord is longer than $\sqrt3$ exactly when its midpoint is within distance $1/2$ of the center. Along a fixed radius, the favorable segment has length $1/2$ inside the unit segment, so the midpoint-on-a-radius model gives probability $1/2$. Over the whole disk, the favorable region is the disk of radius $1/2$, so the midpoint-in-the-disk model gives area ratio $$(\pi(1/2)^2)/\pi=1/4.$$ [step 1.1, L1, algebra]

3.1 The three different answers $1/3$, $1/2$, and $1/4$ come from three different probability models for the same geometric question, exactly as [L1] predicts. [step 1.1, step 2.1, L1] ∎
