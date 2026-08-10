---
id: cex-s-three-has-trivial-center
kind: counterexample
title: "$S_3$ has trivial center, so the finite $p$-group hypothesis in the nontrivial-center theorem is necessary"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-nontrivial-center-of-a-finite-p-group, ex-class-equation-of-s-three, def-center-of-a-group]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "T. W. Judson, Abstract Algebra: Theory and Applications, 14.2"
      url: "https://judsonbooks.org/aata-files/aata-html/actions-section-class-equation.html"
pipeline_run: null
---

## Statement refuted

**False claim.** Every nontrivial finite group has nontrivial center.

## Facts & Assumptions

**Given:** The symmetric group $S_3$.

[L1] Every nontrivial finite $p$-group has nontrivial center ([[thm-nontrivial-center-of-a-finite-p-group]]).

[L2] The conjugacy classes of $S_3$ have sizes $1$, $2$, and $3$, with only the identity class a singleton ([[ex-class-equation-of-s-three]]).

[L3] A central element commutes with every group element ([[def-center-of-a-group]]).

## Counterexample

**Proof technique:** direct.

1.1 An element is central exactly when its conjugacy class is a singleton. By [L2], the only such element of $S_3$ is $e$, so $Z(S_3)=\{e\}$. [L2, L3]

2.1 The group $S_3$ is nontrivial and finite but has trivial center. Thus the false claim fails, and [L1] shows precisely why the $p$-group hypothesis cannot be omitted. [step 1.1, L1, L2] ∎
