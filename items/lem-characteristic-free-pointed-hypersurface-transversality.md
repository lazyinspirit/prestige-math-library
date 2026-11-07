---
id: lem-characteristic-free-pointed-hypersurface-transversality
kind: lemma
title: "Pointed hypersurfaces transverse to smooth strata in any characteristic"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-axiom-of-choice
  - cor-dimension-of-image-plus-generic-fibre
justified_by: []
proof_strategy: direct
axiom_use: "AC is assumed for the dimension supplier and choice of a point in a nonempty open parameter set."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "SGA 4, Exposé XI, section 2, Theorem 2.1 and its incidence proof"
      url: "https://grothendiecksga.com/read/sga4/en/XI-2.html"
      locator: "The special jet-separating hypersurface system is reconstructed below."
verification: {}
---

## Statement

Assume AC. Let $k$ be algebraically closed, let $N\geq1$, and let $Z_1,\ldots,Z_a$ be finitely many smooth locally closed subschemes of $\mathbb P^N_k$, each pure-dimensional. Let $F$ be a finite set of $r$ distinct $k$-points of $\mathbb P^N_k$, none belonging to a zero-dimensional $Z_i$. For every integer $m\geq r+1$ there is a degree-$m$ hypersurface containing $F$ whose intersection with each $Z_i$ is either empty or smooth of pure codimension one in $Z_i$. No characteristic-zero hypothesis is used.

## Facts & Assumptions

**Given:** The algebraically closed field, smooth strata, finite point set and degree in the Statement.

[A1] The Axiom of Choice is assumed. [[def-axiom-of-choice]]

[F1] The dimension of the image of a finite-type morphism of classical varieties is at most the dimension of its source. [[cor-dimension-of-image-plus-generic-fibre]]

## Proof

**Proof technique:** impose the marked values and avoid the incidence of vanishing first jets.

1.1 Let $V$ be the vector space of homogeneous degree-$m$ forms vanishing on $F$. Fix a geometric point $y\notin F$. For each $p\in F$, choose a linear form vanishing at $p$ and nonzero at $y$; multiply these forms by enough further linear forms nonzero at $y$ to reach degree $m-1$. Multiplication by this product identifies the first jets at $y$ of ambient linear forms with first jets of elements of $V$. Since a projective embedding separates values and tangent vectors, restriction to any smooth $d$-dimensional stratum through $y$ maps $V$ surjectively onto its $(d+1)$-dimensional value-and-first-derivative space. [A1, given, choose, construct, algebra]

2.1 For a marked point $p\in F\cap Z_i$, multiply linear forms vanishing at the other marked points and nonzero at $p$ by suitable further forms nonzero at $p$ and by a final linear form vanishing at $p$. The possible derivatives of the final form span the cotangent space of $Z_i$ at $p$. Thus the derivative map from $V$ to that cotangent space is onto. Its target has positive dimension by the hypothesis on $F$, so zero derivative is a proper linear condition. [A1, step 1.1, choose, construct, algebra]

3.1 Fix a stratum $Z_i$ of dimension $d$. At each $y\in Z_i\setminus F$, forms with zero value and zero derivative have codimension $d+1$ in $V$ by step 1.1. The incidence variety of such pairs $(y,h)$ therefore has dimension at most $\dim V-1$. By [F1] its image has proper closed closure in $V$. At each of the finitely many marked points on $Z_i$, the zero-derivative locus is proper by step 2.1. These conclusions also cover $d=0$: the first condition simply avoids the point, and there are no marked points on the stratum. [F1, step 1.1, step 2.1, algebra]

4.1 There are finitely many strata and marked points, so the union of all these bad closed subsets is proper in the affine space $V$. Since $k$ is infinite, choose a $k$-point outside it. The resulting form vanishes at every marked point and has nonzero derivative at every point where it vanishes on any stratum. The Jacobian criterion makes each such zero locus smooth of codimension one; it may be empty. This proves the claim in arbitrary characteristic. [A1, step 3.1, choose, construct, algebra] ∎
