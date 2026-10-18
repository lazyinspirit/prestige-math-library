---
id: lem-uniform-closure-of-a-real-function-algebra-is-a-lattice
kind: lemma
title: "The uniform closure of a unital real function algebra is closed under absolute value, maximum, and minimum"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-unital-separating-real-function-algebra, cor-weierstrass-approximation-on-a-closed-interval, thm-c-k-complete-in-the-sup-metric]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "The Stone--Weierstrass Theorem and its Applications"
      url: "https://math.uchicago.edu/~may/REU2016/REUPapers/Gaddy.pdf"
pipeline_run: null
---

## Statement

If $A\subseteq C(K,\mathbb R)$ is a unital real function algebra and $\overline A$ is its uniform closure, then $u\in\overline A$ implies $|u|\in\overline A$; consequently $u\vee v$ and $u\wedge v$ lie in $\overline A$ whenever $u,v$ do.

## Facts & Assumptions

**Given:** A unital real function algebra $A$ and $u,v\in\overline A$.

[L1] The algebra operations and constants are those in [[def-unital-separating-real-function-algebra]].

[L2] Polynomials uniformly approximate $|t|$ on every bounded closed interval ([[cor-weierstrass-approximation-on-a-closed-interval]]).

## Proof

**Proof technique:** direct.

1.1 Choose $a_n\in A$ converging uniformly to $u$. Their ranges, together with that of $u$, lie in one bounded interval. [given, choose]

1.2 By [L2], choose polynomials $p_j$ with $p_j(0)=0$ converging uniformly to $|t|$ on that interval. Then $p_j(a_n)\in A$ by [L1]. [L1, L2, choose]

2.1 A diagonal choice of $j,n$ makes $p_j(a_n)$ uniformly converge to $|u|$, so $|u|\in\overline A$. [step 1.1, step 1.2, algebra]

3.1 The identities $u\vee v=(u+v+|u-v|)/2$ and $u\wedge v=(u+v-|u-v|)/2$ and [L1] give the remaining closure. [step 2.1, L1, algebra] ∎
