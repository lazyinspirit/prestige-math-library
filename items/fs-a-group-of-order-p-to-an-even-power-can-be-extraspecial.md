---
id: fs-a-group-of-order-p-to-an-even-power-can-be-extraspecial
kind: false-statement
title: "FALSE: some extraspecial $p$-group has order $p^{2n}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-an-extraspecial-p-group-is-an-internal-central-product-of-subgroups-of-order-p-cubed, cor-the-order-of-an-extraspecial-p-group-is-p-to-one-plus-an-even-number, def-order-in-a-group]
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "D. A. Craven, The Theory of p-Groups (Hilary Term 2008), 48 pp."
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf"
    - title: "M. van Beek, Topics in Finite p-Groups, 62 pp."
      url: "https://martinvanbeek.github.io/uploads/LectureNotes.pdf"
    - title: "D. Kaur and A. Kulshrestha, Characters of real special 2-groups (arXiv:1510.06583v1)"
      url: "https://arxiv.org/pdf/1510.06583"
---
## Statement refuted

some extraspecial $p$-group has order $p^{2n}$.

## Facts & Assumptions

**Given:** The proposed claim together with the witness named in the Statement refuted.

[L1] Every extraspecial $p$-group is an internal central product of nonabelian subgroups of order $p^3$ pairwise intersecting in its centre ([[thm-an-extraspecial-p-group-is-an-internal-central-product-of-subgroups-of-order-p-cubed]]).

[L2] An extraspecial $p$-group has order $p^{1+2n}$ for some $n\ge1$ ([[cor-the-order-of-an-extraspecial-p-group-is-p-to-one-plus-an-even-number]]).

[L3] **The order of a finite group.** Let $G$ be a group whose underlying set is finite, so that $G \approx n$ for some $n \in \mathbb{N}$. ([[def-order-in-a-group]]).


## Refutation

**Proof technique:** contradiction.

1.1 The claim asserts that some extraspecial group has order $p^{2n}$. [L3, assume-contra]

2.1 The central-product decomposition forces the order to be $p$ times an even power of $p$, so the exponent of the order is odd. [L1, L2, step 1.1, discharge-contradiction] ∎
