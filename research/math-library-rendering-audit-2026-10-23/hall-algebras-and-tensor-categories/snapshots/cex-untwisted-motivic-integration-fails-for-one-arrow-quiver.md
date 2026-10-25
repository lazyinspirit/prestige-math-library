---
id: cex-untwisted-motivic-integration-fails-for-one-arrow-quiver
kind: counterexample
title: "An untwisted monoid map fails for the one-arrow quiver"
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
    - title: "Tom Bridgeland, An Introduction to Motivic Hall Algebras, arXiv:1002.4372v1, §5.2"
      url: "https://arxiv.org/pdf/1002.4372v1"
    - title: "Olivier Schiffmann, Lectures on Hall Algebras, arXiv:math/0611617v2, §§1.1–1.3"
      url: "https://arxiv.org/pdf/math/0611617v2"
verification:
  precheck: pass
---

## Statement refuted

The claim that stack integration always maps quiver motivic Hall products
multiplicatively to the untwisted dimension-vector monoid algebra is false.
Here “untwisted” means the target rule
$x^{\mathbf d}x^{\mathbf e}=x^{\mathbf d+\mathbf e}$, while the source map
is $\mathcal I_Q([X\to\mathfrak M_{\mathbf d}])=[X]x^{\mathbf d}$.

Let $Q$ have vertices $1,2$ and one arrow $1\to2$.

~~~tikzcd
1 \arrow[r] & 2
~~~

For $k=\mathbb F_2$, let $S_1$ and $S_2$ be the representations supported
at vertices $1$ and $2$. Use $S_1$ as quotient and $S_2$ as subrepresentation.
There are two exact sequences with these fixed endpoints, distinguished by
the arrow map of the middle representation. The stack groupoid count of
$\delta_{S_1}*\delta_{S_2}$ is $2$, whereas the product of the two integrated
classes in the untwisted target has coefficient $1$.

## Facts & Assumptions

**Given:** The one-arrow quiver over $\mathbb F_2$, its simple
representations $S_1,S_2$, and the quotient-first Hall convention.

[F1] The extension stack with quotient dimension $\mathbf d$ and subobject
dimension $\mathbf e$ has relative class
$\mathbb L^{-\chi_Q(\mathbf d,\mathbf e)}$
([[lem-quiver-motivic-extension-stack-class]]).

[F2] The stack integration on a homogeneous class is its absolute stack class
times the corresponding monomial, and the Euler-twisted target uses
$\mathbb L^{-\chi_Q(\mathbf d,\mathbf e)}$
([[thm-quiver-motivic-integration-is-multiplicative]]).

[F3] An arrow of a quiver representation is a linear map from the space at its
source vertex to the space at its target vertex; for the short exact sequence
the off-diagonal arrow map belongs to
$\operatorname{Hom}(A_1,B_2)$
([[def-motivic-hall-algebra-of-a-finite-quiver]]).

[F4] Finite-field groupoid cardinality is the sum of inverse automorphism
orders and respects the stack relations
([[def-finite-field-stack-groupoid-cardinality]],
[[lem-finite-field-stack-groupoid-cardinality-respects-motivic-relations]]).

[A1] The algebraic-stack convention inherits its represented-sheaf descent
use of AC ([[def-algebraic-stack-and-inertia]],
[[def-axiom-of-choice]]). All vector-space and groupoid calculations in this
finite example are explicit.

## Counterexample

**Proof technique:** direct.

1.1 The quotient $S_1$ has dimension vector $\mathbf d=(1,0)$ and the subobject $S_2$ has dimension vector $\mathbf e=(0,1)$. At each vertex the middle space is the direct sum of the endpoint spaces. The only possibly nonzero off-diagonal arrow entry is a scalar $\xi\in\operatorname{Hom}_{\mathbb F_2}(\mathbb F_2,\mathbb F_2)$, so there are exactly two extensions, $\xi=0$ and $\xi=1$. Since $\operatorname{GL}_1(\mathbb F_2)$ is the trivial group, neither endpoint automorphisms nor their identifications identify these two sequences, and each sequence has trivial automorphism group fixing the endpoints. Thus the extension groupoid has cardinality $2$. The quotient-stack convention is the one in [A1]; the remaining calculation is a finite groupoid count. [A1, F1, F3, F4, given, algebra]

2.1 The Hall integration of this product therefore has coefficient $2$ at $x^{(1,1)}$ in its finite-field point-count realization. Each endpoint stack $B\operatorname{GL}_1(\mathbb F_2)$ has groupoid cardinality $1$, so their integrated product in the untwisted target has coefficient $1$. The two coefficients differ, refuting the claimed multiplicativity. [F1, F2, F4, step 1.1]

3.1 The Euler pairing is $\chi_Q(\mathbf d,\mathbf e)=0-(1)(1)=-1$, so the correct target twist is $\mathbb L^{-(-1)}=\mathbb L$. It specializes to $2$ over $\mathbb F_2$ and matches the source extension count from step 1.1. This also verifies the direction and sign of the twist. [F1, F2, F4, step 1.1, algebra] ∎


