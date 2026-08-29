---
id: cex-the-kernel-row-of-a-morphism-of-short-exact-sequences-need-not-be-short-exact
kind: counterexample
title: "The kernel row of a morphism of short exact sequences need not be short exact"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-the-kernel-row-and-cokernel-row-of-a-morphism-of-short-exact-sequences-are-exact-at-two-nodes-each,
       thm-abelian-groups-form-an-abelian-category]
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
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, VIII.4"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: frontier-23
---

## Statement refuted

For every morphism of short exact sequences in an abelian category, the induced
kernel row is itself short exact.

## Diagram

```tikzcd
0 \arrow[r] & \mathbb Z \arrow[r, "\times 2"] \arrow[d, "\times 2"'] & \mathbb Z \arrow[r] \arrow[d, "\times 2"'] & \mathbb Z/2 \arrow[r] \arrow[d, "0"'] & 0 \\
0 \arrow[r] & \mathbb Z \arrow[r, "\times 2"'] & \mathbb Z \arrow[r] & \mathbb Z/2 \arrow[r] & 0.
```

## Facts & Assumptions

**Given:** In $\mathbf{Ab}$, the commutative diagram above.

[L1] The category $\mathbf{Ab}$ is abelian
([[thm-abelian-groups-form-an-abelian-category]]).

[L2] For such a diagram, the kernel row is exact at its first two nodes
([[thm-the-kernel-row-and-cokernel-row-of-a-morphism-of-short-exact-sequences-are-exact-at-two-nodes-each]]).

## Counterexample

**Proof technique:** direct.

1.1 Each row is short exact, and the vertical maps make a morphism of short exact sequences in the abelian category $\mathbf{Ab}$ by [L1]. [L1, given, algebra]

1.2 The kernels of the three vertical maps are
$$\ker(\times 2)=0,\qquad \ker(\times 2)=0,\qquad \ker(0)=\mathbb Z/2.$$
So the kernel row is
$$0 \to 0 \to 0 \to \mathbb Z/2.$$
By [L2], it is exact at the first two nodes. [L2, step 1.1, algebra]

2.1 The last map in that row is the zero map $0 \to \mathbb Z/2$, hence not epic. Therefore the kernel row is not short exact. [step 1.2, algebra]

3.1 This refutes the statement. [step 2.1] ∎
