---
id: lem-two-affine-double-cover-cohomology
kind: lemma
title: Cohomology of a two-chart double cover
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
- def-axiom-of-choice
- def-quasi-coherent-module-scheme
- thm-cech-computes-qc-cohomology-separated-scheme-affine-cover
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: The Stacks Project; elementary local prerequisite for the Step 5b citation
        repair
      url: https://stacks.math.columbia.edu/tag/01EW
---

## Statement

Assume the Axiom of Choice. Let $k$ be a field, let $g$ be a nonnegative integer, fix polynomials $f\in k[x]$ and $\psi\in k[t]$, and let $C$ be a separated $k$-scheme with an affine open cover $U,V$, where $\Gamma(U,\mathcal O_C)=k[x,y]/(y^2-f(x))$ and $\Gamma(V,\mathcal O_C)=k[t,w]/(w^2-\psi(t))$. Suppose that $U\cap V=D_U(x)=D_V(t)$ and the gluing sends $t=x^{-1}$ and $w=x^{-(g+1)}y$. Then $H^1(C,\mathcal O_C)$ has dimension $g$ over $k$, with basis given by the classes of $x^{-1}y,\ldots,x^{-g}y$ (an empty basis when $g=0$).

## Facts & Assumptions

**Given:** AC, the field $k$, integer $g\ge0$, separated scheme $C$, and the two affine charts and gluing in the Statement.

[F1] Under AC, for a quasi-compact separated scheme, finite affine-cover Čech cohomology of a quasi-coherent module agrees with sheaf cohomology. The structure sheaf is quasi-coherent. ([[thm-cech-computes-qc-cohomology-separated-scheme-affine-cover]], [[def-quasi-coherent-module-scheme]], [[def-axiom-of-choice]])

## Proof

1.1 The two affines make $C$ quasi-compact. Their intersection ring is $T=k[x,x^{-1},y]/(y^2-f(x))$, a free $k[x,x^{-1}]$-module with basis $1,y$, since the relation is monic in $y$. The ordered two-open Čech differential is $(a,b)\mapsto b-a$, so [F1] gives $H^1(C,\mathcal O_C)=T/(A+B)$ as a $k$-vector space, where $A$ and $B$ are the images of the two chart rings. [F1, given, algebra]

2.1 In $T$, $A=k[x]\oplus k[x]y$ and $B=k[x^{-1}]\oplus x^{-(g+1)}k[x^{-1}]y$. The constant-in-$y$ summand is exhausted by $k[x]+k[x^{-1}]$. In the $y$-summand, $A$ contains precisely the powers $x^m y$ with $m\ge0$, and $B$ precisely those with $m\le-g-1$. The remaining independent Laurent monomials are $x^{-1}y,\ldots,x^{-g}y$. Thus the quotient has the stated basis and dimension $g$, including $g=0$. AC enters only through [F1]. ∎ [F1, step 1.1, algebra]
