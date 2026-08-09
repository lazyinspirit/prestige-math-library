---
id: fs-cantor-set-countable
kind: false-statement
title: "FALSE: the Cantor set is countable because only countably many intervals were removed"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-cantor-set-properties, thm-cantor-set-ternary-description, def-cantor-set, def-countable, thm-cantor-powerset, lem-countable-iff-surjection-from-n, def-injection-surjection-bijection, def-equinumerous]
justified_by: []
forward_refs: [cex-cantor-point-that-is-not-an-endpoint]
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
    - title: "Cantor's theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor%27s_theorem"
    - title: "University of Chicago MATH 395 notes"
      url: "https://math.uchicago.edu/~alephnil/notes/MATH-395-notes.pdf"
pipeline_run: null
---

## Statement

**False claim:** the Cantor set $C$ ([[def-cantor-set]]) is at most countable
([[def-countable]]), because it is obtained from $[0,1]$ by removing at most
countably many intervals, and what survives such a removal is the at most
countable set of their endpoints.

The claim rests on two inferences and both fail. The count of removed intervals
itself is correct, and it is irrelevant: removing an at most countable family of intervals
from $[0,1]$ says nothing about the cardinality of the remainder. And the
endpoints do not exhaust $C$: the point $1/4$ belongs to $C$ and is the endpoint
of no removed interval, as the remarks below record.

## Facts & Assumptions

**Given:** The Cantor set $C$ of [[def-cantor-set]] and the set $\{0,1\}^{\mathbb{N}}$ of sequences with values in $\{0,1\}$.

[A1] The false claim: $C$ is at most countable.

[L1] $C$ is uncountable ([[thm-cantor-set-properties]], claim 4).

[L2] There is a bijection from $\{0,1\}^{\mathbb{N}}$ onto $C$ ([[thm-cantor-set-ternary-description]], claim 3, [[def-injection-surjection-bijection]]).

[L3] There is no surjection from a set $A$ onto its power set $\mathcal{P}(A)$ ([[thm-cantor-powerset]]).

[L4] A nonempty at most countable set admits a surjection from $\mathbb{N}$, and "uncountable" means "not at most countable" ([[lem-countable-iff-surjection-from-n]], [[def-countable]], [[def-equinumerous]]).

## Refutation

**Proof technique:** direct.

1.1 $C$ is uncountable by [L1], which is the direct negation of [A1]. [A1, L1, L4]

1.2 A second and independent refutation, which does not go through perfect sets: the map $b \mapsto \{\, k \in \mathbb{N} : b_k = 1 \,\}$ is a bijection from $\{0,1\}^{\mathbb{N}}$ onto $\mathcal{P}(\mathbb{N})$, its inverse sending a set to its indicator sequence, so composing with [L2] gives a bijection from $C$ onto $\mathcal{P}(\mathbb{N})$. If $C$ were at most countable it would be nonempty and admit a surjection $\mathbb{N} \to C$ by [L4], and composing with that bijection would give a surjection $\mathbb{N} \to \mathcal{P}(\mathbb{N})$, contradicting [L3]. [L2, L3, L4]

2.1 So the claim [A1] is false. The premise about the removed intervals is not what fails; it is the inference from it, and step 1.2 shows why no counting of removed intervals could have settled the question: the surviving set is in bijection with the power set of $\mathbb{N}$. [step 1.1, step 1.2, A1] ∎

## Remarks

- **The correct statement about the removed intervals.** The number removed at each stage doubles and there are countably many stages, so the removed family is at most countable and its endpoints form an at most countable set. That much of the claim survives. What is false is that the endpoints exhaust $C$: an endpoint has an eventually constant digit sequence, and [[cex-cantor-point-that-is-not-an-endpoint]] exhibits a point of $C$ whose digits alternate for ever.

- **Length and cardinality are independent here.** $C$ has measure zero ([[thm-cantor-set-properties]]) and is in bijection with $\{0,1\}^{\mathbb{N}}$ (claim 3 of [[thm-cantor-set-ternary-description]]), hence uncountable ([[thm-cantor-powerset]]), while the Smith-Volterra-Cantor set is uncountable and is not null ([[thm-fat-cantor-set-has-positive-measure]]). Nothing about cardinality follows from a length computation, in either direction.

- **The named witness** is [[cex-cantor-point-that-is-not-an-endpoint]].
