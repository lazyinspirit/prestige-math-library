---
id: ex-a-member-chase-verifying-monicity
kind: example
title: "A member chase verifying monicity"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-chasing-rule-monicity-detected-by-members,
       thm-chasing-rule-monicity-by-member-cancellation,
       thm-abelian-groups-form-an-abelian-category]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, Theorem VIII.4.3"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: frontier-23
---

## Example

Consider the inclusion
$$i:2\mathbb Z \hookrightarrow \mathbb Z.$$
If $x:X \to 2\mathbb Z$ is a member with $i x \equiv 0$, then $i x = 0$ on a
common epic cover, so already $x \equiv 0$. This is the member-calculus proof
that $i$ is monic.

## Facts & Assumptions

**Given:** The inclusion $i:2\mathbb Z \hookrightarrow \mathbb Z$.

[L1] Monicity is detected by the implication $i x \equiv 0 \Rightarrow x \equiv 0$
([[thm-chasing-rule-monicity-detected-by-members]]).

[L2] Member cancellation is an equivalent reformulation
([[thm-chasing-rule-monicity-by-member-cancellation]]).

[L3] The category $\mathbf{Ab}$ is abelian
([[thm-abelian-groups-form-an-abelian-category]]).

## Verification

**Proof technique:** direct.

1.1 If $i x \equiv 0$, choose an epic cover $u:W \to X$ with $i x u = 0$. Since $i$ is the subgroup inclusion, $x u = 0$. Hence $x \equiv 0$. [L1, L3, algebra]

2.1 By [L1], this proves that $i$ is monic; by [L2], it is the same computation as cancellation of equal members after applying $i$. [L1, L2, step 1.1] ∎
