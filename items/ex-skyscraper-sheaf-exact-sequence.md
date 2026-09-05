---
id: ex-skyscraper-sheaf-exact-sequence
kind: example
title: "A short exact sequence of abelian groups gives a short exact sequence of skyscraper sheaves"
status: published
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-exact-sequence-sheaves, def-skyscraper-sheaf-abelian-group, thm-exactness-of-sheaves-stalkwise, def-stalk-of-presheaf]
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Definition 6.27.1 and Section 17.3"
      url: "https://stacks.math.columbia.edu/tag/0099"
    - title: "Ravi Vakil, The Rising Sea, Example 2.2.12 and Exercise 2.6.D"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGnov1817public.pdf"
---

## Example

Let
$$
0\to A'\to A\to A''\to 0
$$
be a short exact sequence of abelian groups, and let $x\in X$. Then applying
the skyscraper construction at $x$ gives a short exact sequence of sheaves
$$
0\to i_{x,*}A'\to i_{x,*}A\to i_{x,*}A''\to 0.
$$

## Facts & Assumptions

**Given:** A short exact sequence of abelian groups $0\to A'\to A\to A''\to0$ and a point $x\in X$.

[F1] A stalk is the colimit of sections over neighbourhoods of the point, and for the skyscraper sheaf those section groups are $A$ on neighbourhoods containing $x$ and $0$ on neighbourhoods omitting $x$ ([[def-stalk-of-presheaf]], [[def-skyscraper-sheaf-abelian-group]]).

[L1] Exactness of a sequence of abelian sheaves is equivalent to exactness on every stalk ([[thm-exactness-of-sheaves-stalkwise]]).

[L2] Short exactness of the displayed sheaf sequence is exactness in the sense of sheaves ([[def-exact-sequence-sheaves]]).

## Verification

**Proof technique:** direct.

1.1 Fix a point $y\in X$. If every neighbourhood of $y$ contains $x$, then [F1] shows that each stalk in the displayed skyscraper sequence is the original group at $y$, so the stalk sequence is exactly $$ 0\to A'\to A\to A''\to 0. $$ If some neighbourhood of $y$ omits $x$, then every smaller neighbourhood also omits $x$, so [F1] makes all three stalks equal to $0$ and the stalk sequence is $$ 0\to0\to0\to0. $$ In either case the stalk sequence is exact. [F1, given]

2.1 The stalk sequence is therefore exact at every point, so [L1] implies that the skyscraper sequence is exact as a sequence of sheaves. By [L2], this is exactly the claimed short exact sequence of skyscraper sheaves. [L1, L2, step 1.1] ∎
