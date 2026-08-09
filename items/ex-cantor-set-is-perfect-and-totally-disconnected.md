---
id: ex-cantor-set-is-perfect-and-totally-disconnected
kind: example
title: "The Cantor set contains no interval of positive length yet has no isolated point, so every connected subset of it is a single point"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-cantor-set-properties, def-perfect-set-r, def-cantor-set, def-connected-r, thm-connected-subsets-of-r-are-intervals, def-interval, def-limit-point-r, thm-cantor-set-ternary-description, def-open-and-closed-in-r, def-neighbourhood-r]
justified_by: []
aliases: []
landmark: false
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
    - title: "Cantor set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor_set"
    - title: "Perfect set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Perfect_set"
    - title: "Totally disconnected space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Totally_disconnected_space"
    - title: "University of Chicago MATH 395 notes"
      url: "https://math.uchicago.edu/~alephnil/notes/MATH-395-notes.pdf"
pipeline_run: null
---

## Example

The Cantor set $C$ ([[def-cantor-set]]) has two properties that sound
incompatible and are not:

1. it is **perfect** ([[def-perfect-set-r]]): closed, and every one of its points
   is a limit of other points of $C$;
2. it contains no interval with two distinct endpoints, and consequently every
   nonempty connected subset of $C$ ([[def-connected-r]]) is a single point.

Both are claims of [[thm-cantor-set-properties]]; this item spells out what they
say together and why they do not conflict. A set can be *clustered everywhere*
and *nowhere thick*: every neighbourhood of a point of $C$ contains other points
of $C$, and yet no two points of $C$ are joined by a segment lying in $C$.
(Not "on both sides": $C \subseteq [0,1]$ and both $0$ and $1$ lie in $C$, so the
endpoints have points of $C$ approaching them from one side only. Having no
isolated point is the claim, and it does not require approach from both sides.)

**On the phrase "totally disconnected".** That is the usual name for property 2,
and no definition of it exists at this point in the reading order; the phrase
appears here only as a gloss, never as the claim. What is asserted is exactly
property 2 as displayed, obtained from
[[thm-connected-subsets-of-r-are-intervals]].

## Facts & Assumptions

**Given:** The Cantor set $C$ of [[def-cantor-set]].

[A1] Nothing is assumed beyond the results cited; the item records a consequence of them.

[L1] $C$ is closed, perfect, contains no interval with two distinct endpoints, and every nonempty connected subset of $C$ is a single point ([[thm-cantor-set-properties]], claims 1, 3, 5, 6).

[L2] Perfect means closed with no isolated point, and $x$ is isolated in $A$ when some $N_\varepsilon(x)$ meets $A$ only in $x$ ([[def-perfect-set-r]], [[def-limit-point-r]], [[def-neighbourhood-r]], [[def-open-and-closed-in-r]]).

[L3] A subset of $\mathbb{R}$ is connected exactly when it is order-convex ([[thm-connected-subsets-of-r-are-intervals]], [[def-connected-r]], [[def-interval]]).

[L4] Every point of $C$ is $\Phi(a)$ for a unique $\{0,2\}$-valued sequence $a$, and changing one digit of $a$ produces another point of $C$ ([[thm-cantor-set-ternary-description]]).

## Verification

**Proof technique:** direct.

1.1 $C$ is perfect by claim 3 of [L1]: it is closed, and by [L2] no $x \in C$ admits a real $\varepsilon > 0$ with $N_\varepsilon(x) \cap C = \{x\}$. Concretely, the second point inside $N_\varepsilon(x)$ is obtained by changing one sufficiently late ternary digit of $x$, which moves the point by $2 \cdot 3^{-k-1}$ ([L4]). [A1, L1, L2, L4]

1.2 $C$ contains no interval $[u,v]$ with $u < v$, by claim 5 of [L1]; this is where the measure-zero property of $C$ is spent, a null set containing no such interval. [A1, L1]

2.1 Every nonempty connected $E \subseteq C$ is a single point: by [L3] such an $E$ is order-convex, so two distinct points $u < v$ of $E$ would give $[u,v] \subseteq E \subseteq C$, contradicting step 1.2; and $E$ is nonempty. This is claim 6 of [L1]. [step 1.2, L1, L3] ∎

## Remarks

- **The two properties pull in opposite directions and both hold.** Perfectness
  says $C$ is nowhere sparse *within itself*: every neighbourhood of a point of
  $C$ contains infinitely many points of $C$. Property 2 says $C$ is nowhere
  thick *in $\mathbb{R}$*: it contains no segment. The Cantor set is the standard
  demonstration that these are independent, and it is also why "perfect" cannot
  be paraphrased as "contains an interval".

- **Uncountability follows from the first property alone.** Every nonempty
  perfect subset of $\mathbb{R}$ is uncountable
  ([[thm-perfect-set-uncountable-r]]), so property 1 already forces $C$ to have
  more than countably many points, with no reference to digits. The digit route
  gives the same conclusion and more, an explicit bijection with
  $\{0,1\}^{\mathbb{N}}$ ([[thm-cantor-set-ternary-description]]).

- **The same pair of properties holds for the fat Cantor set**
  ([[thm-fat-cantor-set-has-positive-measure]]), which is also compact, perfect
  and nowhere dense. What differs there is only the measure, so neither property
  above has anything to do with total length.
