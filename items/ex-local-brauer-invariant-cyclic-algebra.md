---
id: ex-local-brauer-invariant-cyclic-algebra
kind: example
title: A cyclic algebra of invariant one half over a local field
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 10
deps:
- def-local-field-valuation-ring-uniformizer-and-residue-field
- lem-cyclic-group-cohomology-norm-and-inflation
- thm-local-brauer-invariant-for-finite-residue-local-field
- lem-finite-galois-obstruction-brauer-cohomology-comparison
- lem-local-unramified-degree-two-cohomology-and-inflation
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: J. S. Milne, Class Field Theory, version 4.03, Chapter IV, §§3–4
    url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
  - title: Romyar Sharifi, Algebraic Number Theory, Chapter 9, §9.1
    url: https://www.math.ucla.edu/~sharifi/algnum.pdf
verification: {}
---

## Example

Let $K=\mathbb F_3((t))$ with its $t$-adic valuation, let
$L=\mathbb F_9((t))=K(u)$ with $u^2+1=0$, and let $\sigma$ fix $t$ and send
$u$ to $-u$. Define the cyclic crossed-product algebra
$$A=L\oplus Lw,\qquad w\ell=\sigma(\ell)w\ (\ell\in L),\qquad w^2=t.$$
Equivalently, its normalized factor set on $\operatorname{Gal}(L/K)=C_2$ is
$\alpha(\sigma,\sigma)=t$ and is $1$ on the other pairs. Under the
cohomological Brauer convention, its class has local invariant
$$\operatorname{inv}_K[A]=\tfrac12+\mathbb Z\in\mathbb Q/\mathbb Z.$$

## Example references

[[lem-finite-galois-obstruction-brauer-cohomology-comparison]]

[[lem-local-unramified-degree-two-cohomology-and-inflation]]

[[lem-cyclic-group-cohomology-norm-and-inflation]]

[J. S. Milne, *Class Field Theory*, Chapter IV, §§3–4](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

[Romyar Sharifi, *Algebraic Number Theory*, Chapter 9, §9.1](https://www.math.ucla.edu/~sharifi/algnum.pdf)

## Facts & Assumptions

**Given:** $K$, $L$, $u$, $t$, $\sigma$, and $A$ exactly as specified in the Example.

[F1] A complete discretely valued field with finite residue field is a nonarchimedean local field. [[def-local-field-valuation-ring-uniformizer-and-residue-field]]

[F2] For $C_2$ acting on $L^\times$, normalized cochains compute $H^2(C_2,L^\times)=K^\times/N_{L/K}L^\times$, without a choice axiom. [[lem-cyclic-group-cohomology-norm-and-inflation]]

[F3] The normalized invariant of the algebraic Brauer group of a finite-residue local field is an isomorphism to $\mathbb Q/\mathbb Z$, at unqualified scope. [[thm-local-brauer-invariant-for-finite-residue-local-field]]

[F4] The finite comparison sends a crossed-product algebra with cocycle $c$ to $[c]$ and is injective on the relative algebraic Brauer group. In the unramified tower this class has the cohomological valuation/inverse-Bockstein/Frobenius normalization, and a finite valuation class $r\bmod n$ has invariant $r/n\bmod\mathbb Z$. These finite and unramified assertions are unqualified; no arbitrary-field absolute comparison is used. [[lem-finite-galois-obstruction-brauer-cohomology-comparison]] [[lem-local-unramified-degree-two-cohomology-and-inflation]]

## Proof

**Proof technique:** the finite cyclic norm quotient and the unramified invariant normalization.

**Given:** The data above.

1.1 The squares in $\mathbb F_3$ are $0,1$, so $X^2+1$ is irreducible over $\mathbb F_3$. A root in $K$ would be a unit whose residue is a square root of $-1$ in $\mathbb F_3$, impossible. Hence $[L:K]=2$ and its Galois group is $\{1,\sigma\}$. For either finite coefficient field $k$, a Cauchy sequence in $k((t))$ has a uniform lower bound on exponents, and each coefficient eventually stabilizes; those uniquely determined stable coefficients give its Laurent-series limit. Thus both fields are complete without any sequence of arbitrary selections. Their residue fields are $\mathbb F_3$ and $\mathbb F_9$, and their value groups are $\mathbb Z$, so [F1] applies and $L/K$ is unramified. [F1, given, algebra]

2.1 For $x=t^m v\in L^\times$ with $v\in\mathbb F_9\llbracket t\rrbracket^\times$, its norm is $t^{2m}N(v)$ with $N(v)$ a unit. Every norm has even valuation, whereas $t$ has valuation one, so $t$ is not a norm. Since $t^2=N(t)$, its class in [F2] has order exactly two. The displayed cocycle has carry value $t$, so [F4] identifies it with the class of the actual crossed product $A$ and preserves its order. All comparisons here take place at the single finite unramified degree-two level. [F2, F4, step 1.1, algebra]

3.1 By [F3], the nonzero order-two class has invariant the unique nonzero element of order two in $\mathbb Q/\mathbb Z$, namely $\tfrac12+\mathbb Z$. Equivalently [F4]'s cohomological normalization evaluates its valuation coordinate $1\bmod2$ to $1/2$. Thus the full Example, its specified factor set, and its cohomological sign convention hold without the former temporary AC/DC branch. [F3, F4, step 2.1, algebra] ∎
