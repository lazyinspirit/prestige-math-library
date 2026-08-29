---
id: ex-the-kernel-row-failure-for-multiplication-by-two-computed
kind: example
title: "The kernel row failure for multiplication by two computed"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cex-the-kernel-row-of-a-morphism-of-short-exact-sequences-need-not-be-short-exact,
       thm-abelian-groups-form-an-abelian-category]
justified_by: []
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
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, VIII.4"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: frontier-23
---

## Example

For the multiplication-by-two morphism of short exact sequences used in
[[cex-the-kernel-row-of-a-morphism-of-short-exact-sequences-need-not-be-short-exact]],
the kernel row is
$$0 \to 0 \to 0 \to \mathbb Z/2,$$
so its failure to be short exact is visible before one ever constructs the
snake connecting map.

## Facts & Assumptions

**Given:** The multiplication-by-two diagram of the cited counterexample.

[L1] That diagram lives in the abelian category $\mathbf{Ab}$
([[thm-abelian-groups-form-an-abelian-category]]).

[L2] The cited counterexample computes the kernel row and shows it is not short
exact
([[cex-the-kernel-row-of-a-morphism-of-short-exact-sequences-need-not-be-short-exact]]).

## Verification

**Proof technique:** direct.

1.1 The vertical kernels are $0$, $0$, and $\mathbb Z/2$, so the kernel row is exactly $0 \to 0 \to 0 \to \mathbb Z/2$. [L1, L2, algebra]

2.1 The last arrow is the zero map $0 \to \mathbb Z/2$, hence not epic. [L2, step 1.1, algebra]

3.1 So the row cannot be short exact. [step 2.1] ∎
