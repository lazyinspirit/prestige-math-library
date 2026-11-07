---
dependency_level: 5
id: lem-rational-map-two-preperiodic-points-and-normalized-lift
kind: lemma
title: "Two preperiodic points and a normalized homogeneous lift"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-rational-map-on-projective-line-degree
  - def-algebraically-closed-field
  - def-isotrivial-rational-map-over-function-field
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Matthew Baker, A Finiteness Theorem for Canonical Heights Attached to Rational Maps over Function Fields, Lemmas 3.17\u20133.18 and \u00a74 normalization, with the two-point existence argument supplied"
      url: "https://arxiv.org/pdf/math/0601046v2"
verification: {}
---
## Statement

Let $L$ be any algebraically closed field, and let $\phi:\mathbb P^1_L\to\mathbb P^1_L$ be a rational map of degree $d\ge2$. There exist two distinct preperiodic points. For any two distinct preperiodic points $P,Q$, there are a Möbius map $M$ and a homogeneous lift $F'$ of $M^{-1}\phi M$ for which $M([1:0])=P$, $M([0:1])=Q$, and the vectors $(1,0),(0,1)$ themselves are preperiodic under $F'$. If the initial map is defined over a subfield $K\subset L$ and $L$ is algebraic over $K$, all these choices can be made over one finite extension of $K$. No separability or characteristic-zero hypothesis is used.

## Statement references

[[def-rational-map-on-projective-line-degree]]

[[def-algebraically-closed-field]]

[[def-isotrivial-rational-map-over-function-field]]

## Facts & Assumptions

**Given:** The algebraically closed field, rational map and degree in the statement; for the normalization conclusion, two distinct preperiodic points.

[F1] A degree-$d$ map is represented by coprime degree-$d$ homogeneous forms with no common projective zero. Möbius transformations are induced by invertible two-by-two matrices. ([[def-rational-map-on-projective-line-degree]], [[def-isotrivial-rational-map-over-function-field]])

[F2] Every nonconstant polynomial over $L$ has a root in $L$. ([[def-algebraically-closed-field]])

## Proof

1.1 For a lift $(A,B)$, the fixed-point equation is $YA-XB=0$. This is a nonzero homogeneous form of degree $d+1$: if it were zero, coprimality would force $A=cX$, $B=cY$ up to a common factor, contradicting $d\ge2$. Every nonzero positive-degree homogeneous binary form has a projective zero, by dehomogenization and [F2], or at $[1:0]$ if the dehomogenization is a nonzero constant. Thus choose a fixed point $P$. If $\phi^{-1}(P)$ contains $Q\ne P$, these are already two preperiodic points. Otherwise conjugate $P$ to infinity. The denominator form then vanishes only at infinity, so is a nonzero scalar times $Y^d$, by factoring its dehomogenization over $L$; the map is consequently a degree-$d$ polynomial $f(z)$. The degree-$d$ polynomial $f(z)-z$ has a root by [F2], giving a finite fixed point distinct from infinity. This proves existence in all cases. [F1, F2, algebra]

2.1 A projective preperiodic point $T$ has a nonzero lift $z$ with $F^{\circ n}(z)=cF^{\circ m}(z)$ for some $n>m\ge0$ and $c\ne0$. Choose $a\ne0$ solving $a^{d^n-d^m}=c^{-1}$ using [F2]. Homogeneity gives $F^{\circ n}(az)=F^{\circ m}(az)$, so $az$ is a preperiodic vector lifting $T$. [F1, F2, algebra]

2.2 Choose a matrix $M_0$ whose two columns represent $P,Q$; it is invertible because these points are distinct. Choose a lift $F_0$ of $M_0^{-1}\phi M_0$. By step 2.1 there are nonzero $s,t$ with $se_1,te_2$ preperiodic for $F_0$, where $e_1=(1,0)$ and $e_2=(0,1)$. Put $D=\operatorname{diag}(s,t)$, $M=M_0D$ and $F'=D^{-1}F_0D$. Then $(F')^{\circ j}(e_i)=D^{-1}F_0^{\circ j}(De_i)$, so both basis vectors are preperiodic, and $M$ has the required projective images. [F1, step 2.1, algebra]

3.1 If $L/K$ is algebraic, the points, matrices, lifts, and roots just selected use only finitely many elements of $L$. Each is algebraic over $K$, and adjoining finitely many algebraic elements gives a finite extension: successively powers below the degree of a polynomial relation span each simple extension, and multiplication of the resulting finite spanning sets spans the tower. This proves the final claim without separability. [step 1.1, step 2.2, algebra] ∎
