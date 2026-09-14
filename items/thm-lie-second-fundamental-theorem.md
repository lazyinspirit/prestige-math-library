---
id: thm-lie-second-fundamental-theorem
kind: theorem
title: Lie's second fundamental theorem
status: draft
origin: pipeline
pipeline_run: phase-2-next-18
deps: [thm-lie-subgroup-lie-subalgebra-correspondence, def-countable-choice, cor-connected-cover-of-a-simply-connected-space-is-trivial, def-simply-connected]
landmark: true
proof_strategy: graph
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Kirillov, An Introduction to Lie Groups and Lie Algebras, Theorem 3.38"
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: "§3.8, Theorem 3.38, printed p. 39"
---

## Statement

Assume countable choice. If $G$ is a connected simply connected real Lie
group, $H$ is a real Lie group, and
$\phi:\operatorname{Lie}(G)\to\operatorname{Lie}(H)$ is a Lie-algebra
homomorphism, then there is a unique smooth Lie-group homomorphism
$F:G\to H$ with $dF_e=\phi$.

## Facts & Assumptions

**Given:** Countable choice and the stated $G,H,\phi$.

[A1] Countable choice is [[def-countable-choice]].

[L1] Under [A1], a Lie subalgebra integrates to a unique connected immersed
Lie subgroup ([[thm-lie-subgroup-lie-subalgebra-correspondence]]).

[L2] The domain $G$ is simply connected in the sense of
[[def-simply-connected]].

[L3] A connected covering of a locally path-connected simply connected space
is one-sheeted ([[cor-connected-cover-of-a-simply-connected-space-is-trivial]]).

## Proof

**Proof technique:** integrate the graph.

1.1 The graph $\Gamma_\phi=\{(X,\phi X):X\in\operatorname{Lie}(G)\}$ is a Lie subalgebra of $\operatorname{Lie}(G\times H)$. By [L1] it integrates to a connected immersed subgroup $K\to G\times H$. Projection $p:K\to G$ has identity differential $(X,\phi X)\mapsto X$, an isomorphism, so it is a local diffeomorphism at the identity and therefore everywhere by translation. Its image is an open subgroup of connected $G$, hence all of $G$. [A1, L1, algebra]
2.1 A surjective local-diffeomorphism homomorphism is a covering: choose an identity neighborhood on which it is a diffeomorphism and shrink it so that distinct kernel translates are disjoint; translating gives evenly covered neighborhoods. The Lie group $G$ is locally path-connected, so [L3], connectedness of $K$, and simple connectedness [L2] make this covering one-sheeted; hence $p$ is a Lie-group isomorphism. Define $F$ as the second projection composed with $p^{-1}$. Its graph is $K$, and its identity differential is $\phi$. [L2, L3, step 1.1, algebra]
3.1 If $F_1,F_2:G\to H$ have differential $\phi$, their graphs are connected immersed subgroups of $G\times H$ with Lie algebra $\Gamma_\phi$. Uniqueness in [L1] makes the two immersed images equal; projection to $G$ then forces $F_1=F_2$. This also handles $G$ or $H$ zero-dimensional. Countable choice is used exactly through [L1]'s maximal-leaf construction; all other neighborhood selections are finite. [A1, L1, step 1.1, 2.1] ∎
