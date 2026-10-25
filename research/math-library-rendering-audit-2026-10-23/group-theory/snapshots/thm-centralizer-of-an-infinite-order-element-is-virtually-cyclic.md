---
id: thm-centralizer-of-an-infinite-order-element-is-virtually-cyclic
kind: theorem
title: "The centralizer of an infinite-order element in a hyperbolic group is virtually cyclic"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-centralizer-of-a-subgroup, lem-centralizers-and-normalizers-are-subgroups, thm-infinite-order-elements-of-hyperbolic-groups-are-undistorted, lem-axis-fellow-travelling-controls-the-centralizer]
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-23
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "Clara Löh, Geometric Group Theory, Section 6.5.2"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
---

## Statement

Let $G$ be a hyperbolic group and let $g \in G$ have infinite order. Then its
centralizer

$$ C_G(g)=\{h \in G : hg=gh\} $$

contains a cyclic subgroup of finite index.

## Facts & Assumptions

**Given:** A hyperbolic group $G$ and an infinite-order element $g \in G$.

[L1] Infinite-order elements are undistorted ([[thm-infinite-order-elements-of-hyperbolic-groups-are-undistorted]]).

[L2] In a finitely generated $\delta$-slim hyperbolic group, if an infinite-order element has a power orbit with quasi-isometry constants $\lambda,c$, then its centralizer contains its cyclic subgroup with finite index; each coset has a representative in a ball whose radius depends only on $\delta,\lambda,c$ ([[lem-axis-fellow-travelling-controls-the-centralizer]]).

## Proof

**Proof technique:** direct.

1.1 The standing hyperbolic-group convention supplies a finite generating set whose geodesic Cayley realization is $\delta$-slim. By [L1], the power orbit of $g$ is quasi-isometrically embedded; fix its constants $\lambda,c$. The hypotheses of [L2] are therefore met. [L1, given]

2.1 Apply [L2]. It gives finitely many cosets of $\langle g\rangle$ in $C_G(g)$, with a representative of each in one finite word ball. Thus $\langle g\rangle$ is a cyclic subgroup of finite index in the centralizer, as claimed. [L2, step 1.1] ∎
