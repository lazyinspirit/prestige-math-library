---
id: fs-exactness-can-be-defined-without-first-producing-a-canonical-monomorphism
kind: false-statement
title: "FALSE: the subobject-side definition of exactness needs no canonical image monomorphism"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-exactness-at-a-node,
       def-image-and-coimage-in-a-category-with-kernels-and-cokernels,
       def-subobject-and-quotient-object]
justified_by: []
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Peter Freyd, Abelian Categories, Theorem 2.21"
      url: "https://www.tac.mta.ca/tac/reprints/articles/3/tr3abs.html"
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, VIII.4"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: frontier-23
---

## Statement

One may define exactness of
$$A \xrightarrow{f} B \xrightarrow{g} C$$
by treating $\operatorname{im}(f)$ merely as an object, without specifying its
canonical monomorphism into $B$, and writing the purported subobject equality
$$[\operatorname{im}(f)] = [\ker(g)]$$
anyway.

## Facts & Assumptions

**Given:** The claim of the statement.

[L1] Exactness at a node is stated as equality of the image subobject of $f$ with the kernel subobject of $g$ ([[def-exactness-at-a-node]]).

[L2] A subobject of $B$ is represented by a monomorphism into $B$
([[def-subobject-and-quotient-object]]), and the image of $f$ includes its
defining kernel arrow into $B$
([[def-image-and-coimage-in-a-category-with-kernels-and-cokernels]]).

## Refutation

**Proof technique:** direct.

1.1 By [L2], an object alone does not represent a subobject of $B$: the structure monomorphism into $B$ is essential data. Thus the proposed equality is not a typed equality of subobjects until the canonical image monomorphism has been specified. [L1, L2]

2.1 Therefore the statement is false. [step 1.1] ∎
