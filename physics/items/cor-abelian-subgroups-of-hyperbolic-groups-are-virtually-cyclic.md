---
id: cor-abelian-subgroups-of-hyperbolic-groups-are-virtually-cyclic
kind: corollary
title: "Abelian subgroups of hyperbolic groups are virtually cyclic"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-centralizer-of-an-infinite-order-element-is-virtually-cyclic, thm-hyperbolic-groups-have-bounded-orders-of-finite-subgroups]
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-01-receipts.jsonl (cor-abelian-subgroups-of-hyperbolic-groups-are-virtually-cyclic). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Clara Löh, Geometric Group Theory, Section 6.5.2"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
---

## Statement

Every abelian subgroup of a hyperbolic group contains a cyclic subgroup of
finite index.

## Facts & Assumptions

**Given:** An abelian subgroup $A$ of a hyperbolic group $G$.

[L2] The orders of finite subgroups of $G$ have a common finite bound $B$ ([[thm-hyperbolic-groups-have-bounded-orders-of-finite-subgroups]]).

[L1] Centralizers of infinite-order elements are virtually cyclic ([[thm-centralizer-of-an-infinite-order-element-is-virtually-cyclic]]).

## Proof

**Proof technique:** direct.

1.1 If $A$ contains an element $g$ of infinite order, then $A\subseteq C_G(g)$. By [L1], the cyclic subgroup $\langle g\rangle$ has finite index in $C_G(g)$. Thus $A\cap\langle g\rangle$ has finite index in $A$ and is cyclic as a subgroup of $\langle g\rangle$. Hence $A$ is virtually cyclic. [given, L1]

2.1 If every element of $A$ has finite order, each finitely generated subgroup of $A$ is finite: for generators of orders $n_1,\ldots,n_k$, commutativity makes it a quotient of the finite group $\prod_i\mathbb Z/n_i\mathbb Z$. By [L2] it has at most $B$ elements. Were $A$ to contain $B+1$ distinct elements, their finitely generated subgroup would contradict this bound. So $A$ is finite, hence virtually cyclic. The two cases prove the claim. [L2, step 1.1, given] ∎
