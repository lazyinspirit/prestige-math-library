---
id: ex-one-vertex-finite-quiver-hall-integration-is-quantum-dilogarithm
kind: example
title: "One vertex with no arrows gives the quantum dilogarithm"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps:
  - def-finite-acyclic-quiver-stability-data
  - lem-finite-acyclic-quiver-representations-are-finitary-hereditary-with-euler-form
  - lem-finite-field-quiver-semistable-stack-points-are-hall-groupoids
  - def-subobject-first-completed-finite-quiver-hall-algebra-and-tori
  - thm-finite-quiver-euler-and-skew-integration-is-multiplicative
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
sources:
  references:
    - title: "Tom Bridgeland, Hall algebras and Donaldson–Thomas invariants, §2.2"
      url: "https://arxiv.org/pdf/1611.03696"
    - title: "Olivier Schiffmann, Lectures on Hall Algebras, Example 3.14"
      url: "https://arxiv.org/pdf/math/0611617"
verification:
  precheck: pass
---

## Example

Let $Q$ consist of one vertex and no arrows:

```tikz
\begin{tikzpicture}
  \node[circle,draw,inner sep=2pt,label=below:{1}] at (0,0) {};
\end{tikzpicture}
```

The single vertex is labelled $1$ and there are no edges. Thus
$\mathcal A_Q$ is the category of finite-dimensional $\mathbb F_q$-vector
spaces. For any $z_1\in\mathbb H$, all nonzero objects are semistable of the
same phase. With $t=\sqrt q>0$, the skew integration of their all-object
series is
$$J(A_{\mathrm{all}})=E_{t^2}(x):= \sum_{n\ge0}\frac{t^n x^n}{\prod_{r=1}^{n}(t^{2r}-1)},$$
where the empty product for $n=0$ is $1$. This is a finite-field
Euler-normalized groupoid series, not by itself a physical BPS number.

## Facts & Assumptions

**Given:** A finite field $\mathbb F_q$, its positive square root
$t=\sqrt q$, and the one-vertex quiver displayed above.

[F1] Representations, dimension vectors and $Z$-semistability are as in
[[def-finite-acyclic-quiver-stability-data]].

[F2] $J(\delta_M)=t^{\chi_Q(\mathbf d(M),\mathbf d(M))}
/|\operatorname{Aut}(M)|\,x^{\mathbf d(M)}$
([[thm-finite-quiver-euler-and-skew-integration-is-multiplicative]]).

[F3] The groupoid mass of the semistable quotient stack is the sum of
inverse automorphism orders over semistable isomorphism classes
([[lem-finite-field-quiver-semistable-stack-points-are-hall-groupoids]]).

## Verification

**Given:** The objects and hypotheses in the statement.

1.1 A representation is determined up to isomorphism by its dimension $n$; its automorphism group is $\operatorname{GL}_n(\mathbb F_q)$. For $n>0$, $Z(n)=nz_1$ and every nonzero subspace has the same phase, so every object is semistable. The zero object supplies the degree-zero term. [F1, construct, algebra]

1.2 An ordered basis of $\mathbb F_q^n$ can be chosen in $$|\operatorname{GL}_n(\mathbb F_q)|= \prod_{j=0}^{n-1}(q^n-q^j)$$ ways: after $j$ independent vectors have been chosen, their span contains $q^j$ vectors to exclude. Factoring $q^j$ from the $j$th term and reversing the remaining index gives $$|\operatorname{GL}_n(\mathbb F_q)|= q^{n(n-1)/2}\prod_{r=1}^{n}(q^r-1).$$ For $n=0$ both sides equal $1$. [given, construct, algebra]

2.1 The Euler form is $\chi_Q(n,n)=n^2$. By [F2], the degree-$n$ term of $J(A_{\mathrm{all}})$ is $$\frac{t^{n^2}}{|\operatorname{GL}_n(\mathbb F_q)|}x^n =\frac{t^n}{\prod_{r=1}^{n}(t^{2r}-1)}x^n,$$ using [F1], step 1.2 and $q=t^2$. The formula also holds at $n=0$ by the empty-product convention. [F1, F2, step 1.2, algebra]

3.1 Summing the degreewise coefficients in step 2.1 gives the stated formal power series. By [F3] its unweighted coefficient is the finite groupoid cardinality of the semistable stack, and the factor $t^{n^2}$ is precisely the Euler normalization in [F2]. No physical state-counting identification is asserted. [F2, F3, step 2.1] ∎
