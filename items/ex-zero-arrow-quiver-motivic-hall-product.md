---
id: ex-zero-arrow-quiver-motivic-hall-product
kind: example
title: "The motivic Hall product for a one-vertex zero-arrow quiver"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - def-motivic-hall-algebra-of-a-finite-quiver
  - lem-quiver-motivic-extension-stack-class
  - thm-quiver-motivic-integration-is-multiplicative
  - def-quiver-motivic-quantum-torus
  - def-finite-field-stack-groupoid-cardinality
  - lem-finite-field-stack-groupoid-cardinality-respects-motivic-relations
  - def-algebraic-stack-and-inertia
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Tom Bridgeland, An Introduction to Motivic Hall Algebras, arXiv:1002.4372v1, §§4.1–4.2 and 5.2"
      url: "https://arxiv.org/pdf/1002.4372v1"
    - title: "Olivier Schiffmann, Lectures on Hall Algebras, arXiv:math/0611617v2, §§1.1–1.3"
      url: "https://arxiv.org/pdf/math/0611617v2"
verification:
  precheck: pass
---

## Example

Let $Q$ have one vertex and no arrows.

~~~tikz
\begin{tikzpicture}
\node[circle,draw,inner sep=1.5pt,label=below:{1}] (v) at (0,0) {};
\end{tikzpicture}
~~~

The vertex label is $1$; the absence of edges means a representation is
only a finite-dimensional vector space. Let $S$ be its one-dimensional
representation and let $\delta_S=[B\operatorname{GL}_1\to
\mathfrak M_1(Q)]$ be the identity stack function. For every field $k$,
$$\mathcal I_Q(\delta_S*\delta_S) =\mathbb L^{-1}[B\operatorname{GL}_1]^2x^2.$$
On the finite-field groupoid-count specialization $k=\mathbb F_q$, this
coefficient is $q^{-1}(q-1)^{-2}$.

## Facts & Assumptions

**Given:** The one-vertex zero-arrow quiver, its representation stacks, and
the quotient-first motivic Hall product.

[F1] The Hall product is the stack of sequences
$0\to B\to E\to A\to0$ with quotient first and subrepresentation second
([[def-motivic-hall-algebra-of-a-finite-quiver]]).

[F2] Its extension-stack relative class is
$\mathbb L^{-\chi_Q(\mathbf d,\mathbf e)}$
([[lem-quiver-motivic-extension-stack-class]]).

[F3] The integration map sends a stack function $[X\to\mathfrak M_{\mathbf d}]$
to $[X]x^{\mathbf d}$ and the target twist is the stated Euler factor
([[thm-quiver-motivic-integration-is-multiplicative]]).

[F4] For a finite-field quotient stack in this construction, groupoid
cardinality is the sum of inverse automorphism orders and respects the
motivic stack relations ([[def-finite-field-stack-groupoid-cardinality]],
[[lem-finite-field-stack-groupoid-cardinality-respects-motivic-relations]]).

[A1] The algebraic-stack convention inherits its represented-sheaf descent
dependency on AC ([[def-algebraic-stack-and-inertia]],
[[def-axiom-of-choice]]); the calculation itself uses only finite-dimensional
vector spaces and finite groupoids after specialization.

## Verification

**Proof technique:** direct.

1.1 For this quiver, $\operatorname{Rep}_1(Q)$ is a point and $G_1=\operatorname{GL}_1$, so $\mathfrak M_1(Q)=B\operatorname{GL}_1$. For the two degree-one factors, $\mathbf d=\mathbf e=1$ and $\chi_Q(1,1)=1$. By [F2], the extension stack over the pair of endpoint stacks has relative class $\mathbb L^{-1}$. Pushing to the middle and then integrating therefore gives $\mathcal I_Q(\delta_S*\delta_S) =\mathbb L^{-1}[B\operatorname{GL}_1]^2x^2$. [F1, F2, F3, A1]

2.1 Over $\mathbb F_q$, the groupoid $B\operatorname{GL}_1(\mathbb F_q)$ has one isomorphism class with automorphism group of order $q-1$, hence groupoid cardinality $(q-1)^{-1}$. The extension fiber over the two fixed endpoints is $B\mathbb G_a(\mathbb F_q)$: the middle sequence splits, and its endpoint-fixing automorphisms are the linear maps $S\to S$, a group of order $q$. Its groupoid cardinality is $q^{-1}$ by [F4]. Multiplying these three factors gives $q^{-1}(q-1)^{-2}$, as stated. [F1, F2, F4, algebra] ∎

## Remarks

Here $\chi_Q(1,1)=1$ because there is one vertex and no arrows. This is
the untwisted Hall stack coefficient with its automorphism group retained;
it is not the finite subobject count $q+1$ used by the separate untwisted
Ringel product.


