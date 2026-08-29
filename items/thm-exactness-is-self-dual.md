---
id: thm-exactness-is-self-dual
kind: theorem
title: "Exactness is self-dual"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-exactness-at-a-node,
       thm-the-opposite-of-an-abelian-category-is-abelian,
       def-image-and-coimage-in-a-category-with-kernels-and-cokernels]
justified_by: []
landmark: true
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
    - title: "The Stacks Project, Section 12.5"
      url: "https://stacks.math.columbia.edu/tag/00ZX"
    - title: "David Mehrle, Category Theory, Part III, Chapter 7"
      url: "https://pi.math.cornell.edu/~dmehrle/notes/partiii/cattheory_partiii_notes.pdf"
pipeline_run: frontier-23
---

## Statement

A composable pair
$$A\xrightarrow{f}B\xrightarrow{g}C$$
is exact at $B$ in an abelian category $\mathcal A$ if and only if the opposite
pair
$$C\xrightarrow{g^{\mathrm{op}}}B\xrightarrow{f^{\mathrm{op}}}A$$
is exact at $B$ in $\mathcal A^{\mathrm{op}}$.

## Facts & Assumptions

**Given:** A composable pair $A \xrightarrow{f} B \xrightarrow{g} C$ in an
abelian category $\mathcal A$.

[L1] The opposite of an abelian category is abelian
([[thm-the-opposite-of-an-abelian-category-is-abelian]]).

[L2] Exactness at $B$ means either
$[\operatorname{im}(f)] = [\ker(g)]$ or, equivalently,
$[\operatorname{coker}(f)] = [\operatorname{coim}(g)]$
([[def-exactness-at-a-node]],
[[def-image-and-coimage-in-a-category-with-kernels-and-cokernels]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the opposite category $\mathcal A^{\mathrm{op}}$ is again abelian, so the definition [L2] applies there. Passing to the opposite exchanges kernels with cokernels and images with coimages. [L1, L2]

2.1 Therefore the equality $[\operatorname{im}(f)] = [\ker(g)]$ in $\mathcal A$ is exactly the equality $[\operatorname{im}(g^{\mathrm{op}})] = [\ker(f^{\mathrm{op}})]$ in $\mathcal A^{\mathrm{op}}$. By [L2], those are the two exactness assertions. [L2, step 1.1] ∎
