---
id: thm-a-cartesian-square-induces-an-isomorphism-on-the-kernels-of-its-parallel-legs
kind: theorem
title: "A cartesian square induces an isomorphism on the kernels of its parallel legs"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-a-square-is-cartesian-exactly-when-a-short-sequence-is-exact,
       thm-in-a-pullback-square-the-induced-morphism-on-the-kernels-of-the-parallel-legs-is-an-isomorphism]
justified_by: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.5, Lemma 12.5.12"
      url: "https://stacks.math.columbia.edu/tag/00ZX"
pipeline_run: frontier-23
---

## Statement

In a cartesian square in an abelian category

```tikzcd
P \arrow[r, "\beta"] \arrow[d, "\alpha"'] & Y \arrow[d, "g"] \\
X \arrow[r, "f"'] & Z,
```

the induced morphism
$$\ker(\beta)\longrightarrow\ker(f)$$
is an isomorphism.

## Facts & Assumptions

**Given:** The displayed cartesian square.

[L1] The square is a pullback
([[thm-a-square-is-cartesian-exactly-when-a-short-sequence-is-exact]]).

[L2] In a pullback square, the induced map on the kernels of the parallel legs
is an isomorphism
([[thm-in-a-pullback-square-the-induced-morphism-on-the-kernels-of-the-parallel-legs-is-an-isomorphism]]).

## Proof

**Proof technique:** direct.

1.1 Since the square is cartesian, [L1] identifies it as a pullback square. [L1]

2.1 Applying [L2] to that pullback gives the claimed isomorphism $\ker(\beta) \cong \ker(f)$. [L2, step 1.1] ∎
