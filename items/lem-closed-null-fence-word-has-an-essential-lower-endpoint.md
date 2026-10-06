---
id: lem-closed-null-fence-word-has-an-essential-lower-endpoint
kind: lemma
title: A closed null fence word has an essential lower endpoint
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
- def-countable-choice-principle-for-foliation-pair
- lem-nullhomotopy-persists-under-a-compact-transverse-deformation
- lem-fixed-cap-transverse-product-glues-by-unique-transverse-flow-roots
- lem-fixed-transverse-fences-have-a-finite-crossing-word
- thm-compact-subset-of-a-hausdorff-space-is-closed
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 10
verification:
  precheck: pass
sources:
  scraped: []
  references:
  - title: S. P. Novikov, The Topology of Foliations (complete English translation)
    url: https://homepage.mi-ras.ru/~snovikov/23.pdf
    locator: §§7-8, printed pp. 19-28; finite local repairs and exact adapters supplied in this strategy
  - title: Mark Brittenham, Foliations and the Topology of 3-Manifolds, classes 11-20
    url: https://www.math.unl.edu/~mbrittenham2/papers/folnotes/lecs_11_to_20.pdf
    locator: Classes 12-13; finite cap subdivision and the endpoint criterion supplied explicitly
---

## Statement

Assume $\mathrm{AC}_\omega$. In a fixed-flow finite fence for a C² cooriented foliation, let cut paths $c_t,d_t$ be continuously defined for $a_0\le t\le r$, with product the prescribed closed loop at each parameter. Suppose both factors are closed and leafwise null at $r$. Extend their common closed/null interval downward maximally. Its lower endpoint $a$ has both factors closed. If the product at $a_0$ is essential, at least one factor at $a$ is essential; both are closed and null for $a<t\le r$.

## Facts & Assumptions

**Given:** The fixed-flow fence, cut paths and parameters in the statement; the product at $a_0$ is essential for the essential-endpoint conclusion.

[F1] Fixed-flow fences supply continuous endpoint tracks and a finite crossing word ([[lem-fixed-transverse-fences-have-a-finite-crossing-word]]). Null caps persist locally under compact transverse deformation ([[lem-nullhomotopy-persists-under-a-compact-transverse-deformation]]), with prescribed boundaries realized by unique transverse roots ([[lem-fixed-cap-transverse-product-glues-by-unique-transverse-flow-roots]]).

[F2] In the Hausdorff ambient manifold equality of continuous endpoint tracks is a closed condition: unequal limiting endpoints have disjoint neighborhoods. See also [[thm-compact-subset-of-a-hausdorff-space-is-closed]].

[F3] The choice hypothesis is [[def-countable-choice-principle-for-foliation-pair]].

## Proof

**Proof technique:** direct.

1.1 Let $U$ consist of parameters where both factors are closed and null. At such a parameter a fixed null cap makes each cut-loop holonomy the identity on a neighborhood. Its endpoints run along the same fixed-flow track; uniqueness of plaque continuation and transverse-flow roots therefore keeps the prescribed cut path closed nearby. F1 then transports its compact cap. Doing this for both factors shows that $U$ is relatively open and contains $r$. Nullity of the product alone would not suffice. [F1, given, construct]

2.1 Let $(a,r]$ be the component of $U$ below $r$, including the initial endpoint if it belongs to $U$. Continuity and F2 make both factors closed at $a$. If $a>a_0$ and both were null there, step 1.1 would extend their common interval below $a$, contradicting maximality. Thus one factor is essential at a proper lower endpoint. [F2, step 1.1]

3.1 If $a=a_0$ and the initial product is essential, both factors cannot be null there, since their product would then be null. At least one is essential in this case too. Both factors are closed and null for every $a<t\le r$, giving the selected essential endpoint its genuine one-sided null family. Only a fixed finite fence and one cap per factor are used. [F1, F3, step 1.1, step 2.1] ∎
