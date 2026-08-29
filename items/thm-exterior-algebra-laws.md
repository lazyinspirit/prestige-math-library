---
id: thm-exterior-algebra-laws
kind: theorem
title: "Exterior multiplication is well defined, graded, associative, unital, and graded-commutative"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-exterior-algebra-of-a-vector-space, prop-basic-wedge-is-multilinear-and-alternating]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Exterior Powers"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/extmod.pdf"
---

## Statement

The wedge product of [[def-exterior-algebra-of-a-vector-space]] is well defined and bilinear in each homogeneous pair of degrees. It is associative, has unit $1\in F=\Lambda^0V$, is graded in the sense that $\Lambda^kV\wedge\Lambda^\ell V\subseteq\Lambda^{k+\ell}V$, and is graded-commutative:

$$\alpha\wedge\beta=(-1)^{k\ell}\beta\wedge\alpha\qquad(\alpha\in\Lambda^kV,\ \beta\in\Lambda^\ell V).$$

All of this holds over every field, including characteristic two.

## Facts & Assumptions

**Given:** A vector space $V$ over a field $F$ and homogeneous elements of degrees $k,\ell$.

[L1] The exterior algebra is the graded sum of the exterior powers, with the wedge product defined by concatenation on decomposables and extended bilinearly; the definition checks that a repeated pair persists under concatenation, so the product is well defined ([[def-exterior-algebra-of-a-vector-space]]).

[L2] The basic wedge map is multilinear and alternating ([[prop-basic-wedge-is-multilinear-and-alternating]]).

## Proof

**Proof technique:** direct.


1.1 Well-definedness and bilinearity in each degree pair are recorded in [L1], and the graded containment is the degree count of the concatenation. [L1]

1.2 Unitality: for a decomposable $\alpha$, the convention $1\wedge\alpha=\alpha$ is the definition in [L1]; bilinearity extends it. [L1]

1.3 Associativity: on decomposables, $(\alpha\wedge\beta)\wedge\gamma$ and $\alpha\wedge(\beta\wedge\gamma)$ are both the concatenation of the three lists by [L1]; multilinearity of [L2] extends the equality to all elements. [L1, L2]

1.4 For vectors $v,w$, alternation of [L2] applied to $(v+w,v+w)$ gives $0=v\wedge w+w\wedge v$, so $v\wedge w=-w\wedge v$; no division by $2$ is used, so this holds in characteristic two as well, where it reads $v\wedge w=w\wedge v$. [L2, algebra]

2.1 Block swap: for decomposable $\alpha=v_1\wedge\cdots\wedge v_k$ and $\beta=w_1\wedge\cdots\wedge w_\ell$, move each of the $\ell$ factors $w_j$ leftward past all $k$ factors $v_i$ using step 1.4, collecting $\ell k$ factors of $-1$; associativity of step 1.3 makes the block move legitimate, giving $\alpha\wedge\beta=(-1)^{k\ell}\beta\wedge\alpha$, and multilinearity extends this to all homogeneous elements. [step 1.3, step 1.4, L2]

3.1 Steps 1.1 through 2.1 prove the five asserted laws in every characteristic, because the only sign rule used is the alternation identity of step 1.4. [step 1.1, step 1.2, step 1.3, step 1.4, step 2.1] ∎
