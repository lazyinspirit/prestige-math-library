---
id: ex-fundamental-groupoid
kind: example
title: "The fundamental groupoid of a topological space"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-category, def-isomorphism-groupoid-and-connected-category, def-homotopy-relative-and-path-homotopy, cor-homotopy-relative-and-path-homotopy-are-equivalence-relations, thm-composition-respects-homotopy, def-based-loops-and-fundamental-group, thm-fundamental-group-laws]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Example 1.1.6"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Example

For a topological space $X$, paths modulo endpoint-preserving homotopy form a
groupoid $\Pi_1(X)$ whose automorphism groups are the fundamental groups.

## Facts & Assumptions

**Given:** A topological space $X$.

[L1] Path homotopy relative to endpoints is an equivalence relation, and path concatenation respects its classes ([[def-homotopy-relative-and-path-homotopy]], [[cor-homotopy-relative-and-path-homotopy-are-equivalence-relations]], [[thm-composition-respects-homotopy]]).

[L2] Constant paths, concatenation, and reversal satisfy the fundamental-group laws on path-homotopy classes ([[def-based-loops-and-fundamental-group]], [[thm-fundamental-group-laws]]).

[L3] Categories and groupoids have identity, associative composition, and invertible arrows ([[def-category]], [[def-isomorphism-groupoid-and-connected-category]]).

## Verification

**Proof technique:** direct.

1.1 Take the points of $X$ as objects and define $\operatorname{Hom}(x,y)$ to be the endpoint-preserving homotopy classes of paths from $x$ to $y$. Define composition by concatenation and the identity at $x$ by the constant path at $x$. [L1, L2]

2.1 The operations in step 1.1 are well defined on classes by [L1]. Reparametrization homotopies give associativity and the two identity laws, as in the fundamental-group laws of [L2]. Hence they define a category. [step 1.1, L1, L2, L3]

2.2 Reversing a path gives a two-sided inverse class because a path followed by its reverse contracts relative to its endpoints. Thus every arrow is invertible. [step 1.1, L1, L2]

3.1 Therefore $\Pi_1(X)$ is a groupoid. Its automorphisms at $x$ are exactly based loops at $x$ modulo based homotopy, with concatenation, so $\operatorname{Aut}_{\Pi_1(X)}(x)=\pi_1(X,x)$. [step 2.1, step 2.2, L2, L3] ∎
