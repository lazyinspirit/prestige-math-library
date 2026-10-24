---
id: ex-hilbert-series-plane-complete-intersection
kind: example
title: "A quadratic-cubic plane complete intersection has eventual Hilbert value six"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-complete-intersection-hilbert-series-two-plane-forms, lem-coprime-plane-forms-form-a-homogeneous-regular-sequence, def-hilbert-function-and-hilbert-series, def-formal-power-series-and-coefficient-extraction, def-monomials-multidegree-and-total-degree, def-graded-ring-and-graded-module, def-polynomial-ring-over-a-commutative-ring, def-homogeneous-polynomial-and-homogeneous-ideal, thm-projective-plane-complete-intersection-total-length, def-total-length-of-a-zero-dimensional-projective-scheme]
justified_by: []
aliases: []
landmark: false
short: "Hilbert function 1,3,5,6,6,..."
proof_strategy: direct
verification:
  audited: 2026-09-27
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  scraped: []
  references:
    - title: "A. Gathmann, Algebraic Geometry class notes (2002), Theorem 6.2.1, p. 96"
      url: "https://agag-gathmann.math.rptu.de/class/alggeom-2002/alggeom-2002.pdf"
pipeline_run: frontier-35-ten-categories
---

## Example

Let $k$ be a field and let $S=k[x_0,x_1,x_2]/(x_0^2,x_1^3)$ carry the standard
grading. Then
$$\operatorname{HS}_S(t)=\frac{(1+t)(1+t+t^2)}{1-t},$$
and the Hilbert function of $S$ is $1,3,5,6,6,6,\ldots$ in degrees
$0,1,2,3,4,5,\ldots$: it is constantly $6=2\cdot3$ from degree $3$ on. The
quotient $S$ is not a finite-dimensional $k$-algebra; only its graded pieces are
computed here.

## Facts & Assumptions

**Given:** A field $k$ and the standard graded quotient $S=k[x_0,x_1,x_2]/(x_0^2,x_1^3)$.

[L1] The Hilbert function of a graded module records $\dim_kM_n$, and its Hilbert series is the formal power series $\sum_n\dim_kM_nt^n$, whose coefficients are read off by coefficient extraction ([[def-hilbert-function-and-hilbert-series]], [[def-formal-power-series-and-coefficient-extraction]], [[def-graded-ring-and-graded-module]]).

[L2] For two plane forms $F,G$ with no common nonconstant factor, of positive degrees $d$ and $e$, the pair $(F,G)$ is a regular sequence and $\operatorname{HS}_{k[x_0,x_1,x_2]/(F,G)}(t)=(1+t+\cdots+t^{d-1})(1+t+\cdots+t^{e-1})/(1-t)$, with Hilbert function constantly $de$ in every degree $n\ge d+e-2$ ([[lem-coprime-plane-forms-form-a-homogeneous-regular-sequence]], [[lem-complete-intersection-hilbert-series-two-plane-forms]], [[def-homogeneous-polynomial-and-homogeneous-ideal]]).

[L3] The monomials of $k[x_0,x_1,x_2]$ form a $k$-basis and are graded by total degree ([[def-polynomial-ring-over-a-commutative-ring]], [[def-monomials-multidegree-and-total-degree]]).

[L4] Assuming the Axiom of Choice, for coprime plane forms of degrees $d,e$, the total length of $\operatorname{Proj}(k[x_0,x_1,x_2]/(F,G))$ equals $de$ ([[thm-projective-plane-complete-intersection-total-length]], [[def-total-length-of-a-zero-dimensional-projective-scheme]]).



## Verification

**Proof technique:** direct.

1.1 The two forms $x_0^2$ and $x_1^3$ are coprime in $k[x_0,x_1,x_2]$ because they involve distinct variables, and have degrees $2$ and $3$, so [L2] gives $\operatorname{HS}_S(t)=(1-t^2)(1-t^3)/(1-t)^3=(1+t)(1+t+t^2)/(1-t)$, using $(1-t^2)=(1-t)(1+t)$ and $(1-t^3)=(1-t)(1+t+t^2)$. [L2, algebra]

1.2 Equivalently, the monomials $x_0^ax_1^bx_2^c$ with $0\le a\le1$, $0\le b\le2$, $c\ge0$ form a $k$-basis of $S$ by [L3], and their generating function by total degree is $(1+t)(1+t+t^2)(1+t+t^2+\cdots)=(1+t)(1+t+t^2)/(1-t)$. [L3, algebra]

2.1 By step 1.2, $\dim_kS_n=\#\{(a,b):0\le a\le1,\ 0\le b\le2,\ a+b\le n\}$, which is $1,3,5,6,6,6,\ldots$ for $n=0,1,2,3,4,5,\ldots$; equivalently these are the partial sums of the coefficients $1,2,2,1$ of $(1+t)(1+t+t^2)$, in agreement with [L1]. [L1, step 1.2, algebra]

3.1 Since $S_n\ne0$ for every $n$ by step 2.1, the $k$-vector space $S$ is infinite-dimensional, so $S$ is not a finite-dimensional $k$-algebra; no Artinian claim is made. [step 2.1]

4.1 If the Axiom of Choice is assumed, then as a consistency check [L4] gives $\operatorname{len}_k(\operatorname{Proj}S)=2\cdot3=6$, which is exactly the eventual value of the Hilbert function computed in step 2.1. The Hilbert-series and Hilbert-function claims above hold over every field without this additional assumption. [L4, step 2.1] ∎
