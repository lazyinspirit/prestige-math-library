---
id: thm-when-a-category-is-tensored-every-limit-in-it-is-a-conical-enriched-limit
kind: theorem
title: "When a category is tensored, every limit in it is a conical enriched limit"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-cotensor-and-tensor, def-conical-limit-in-an-enriched-category]
aliases: []
landmark: false
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
    - title: "Emily Riehl, Categorical Homotopy Theory, Theorem 7.5.3"
      url: "https://emilyriehl.github.io/files/cathtpy.pdf"
---

## Statement

Assume $\mathcal V$ is symmetric monoidal right closed, locally small,
complete, and cocomplete, and let $\mathcal B$ be a tensored
$\mathcal V$-category. Then the ordinary limit of every small diagram in the
underlying category $\mathcal B_0$, when it exists, is a conical enriched
limit.

## Facts & Assumptions

**Given:** A base $\mathcal V$ as in the statement, a tensored
$\mathcal V$-category $\mathcal B$, a small ordinary diagram, and its limit
cone in $\mathcal B_0$.

[L1] Tensors represent enriched hom-objects against the base:
$\mathcal B(X\otimes C,B)\cong[X,\mathcal B(C,B)]$
([[def-cotensor-and-tensor]]).

[L2] Conical enriched limits are the constant-unit weighted enriched limits
([[def-conical-limit-in-an-enriched-category]]).

## Proof

**Proof technique:** direct.

1.1 Because $\mathcal B$ is tensored, [L1] identifies the enriched hom-object out of $X\otimes B$ with the hom-object $\mathcal B(B,-)$ tested against $X$. Thus each represented enriched hom-functor is a right adjoint in the underlying category and therefore preserves ordinary limits. [L1, given]

2.1 Apply step 1.1 to an ordinary limit object $L$ of the underlying diagram. For every test object $B$, the ordinary limit bijection for $\mathcal B_0(B,L)$ upgrades, through the tensor representation of [L1], to the enriched constant-weight bijection required by [L2]. [L1, L2, step 1.1]

3.1 Hence the ordinary limit is already a conical enriched limit. [step 2.1] ∎
