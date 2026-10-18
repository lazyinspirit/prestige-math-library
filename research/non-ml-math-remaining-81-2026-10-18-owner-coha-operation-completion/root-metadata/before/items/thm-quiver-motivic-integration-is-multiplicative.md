---
id: thm-quiver-motivic-integration-is-multiplicative
kind: theorem
title: "Quiver stack integration is multiplicative with the Euler twist"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-motivic-stack-function-groups-for-quiver-representations
  - def-motivic-hall-algebra-of-a-finite-quiver
  - lem-quiver-motivic-extension-stack-class
  - thm-quiver-motivic-hall-convolution-associative
  - def-quiver-motivic-quantum-torus
  - def-algebraic-stack-and-inertia
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Tom Bridgeland, An Introduction to Motivic Hall Algebras, arXiv:1002.4372v1, §5.2 and §§7.1–7.2"
      url: "https://arxiv.org/pdf/1002.4372v1"
    - title: "Dominic Joyce, Configurations in abelian categories. II. Ringel-Hall algebras, arXiv:math/0503029v2, §6.2, Theorem 6.4 and proof"
      url: "https://arxiv.org/pdf/math/0503029v4"
verification:
  precheck: pass
---

## Statement

For a finite quiver $Q$ over $k$, equip $T_Q$ with the multiplication in
[[def-quiver-motivic-quantum-torus]]. The product is associative and has
unit $x^{\mathbf0}$. Define
$$\mathcal I_Q:H_Q\to T_Q,\qquad \mathcal I_Q([X\to\mathfrak M_{\mathbf d}(Q)]) =[X]\,x^{\mathbf d}.$$
Then $\mathcal I_Q$ is a well-defined $R$-algebra homomorphism. The exact
twist is $\mathbb L^{-\chi_Q(\mathbf d,\mathbf e)}$ for the product of a
quotient of dimension $\mathbf d$ and a subrepresentation of dimension
$\mathbf e$. This result uses the stack of ordinary representations of $Q$
with no potential and no vanishing-cycle weight. It makes no claim about an
orientation-dependent 3-Calabi–Yau or Donaldson–Thomas integration map.

## Facts & Assumptions

**Given:** The motivic Hall algebra and the twisted dimension-vector
multiplication with the conventions stated in their Definitions.

[F1] The Hall product is pullback to the exact-sequence stack and pushforward
to the middle representation, with quotient first and subrepresentation
second ([[def-motivic-hall-algebra-of-a-finite-quiver]]).

[F2] For an extension family of quotient dimension $\mathbf d$ by
subrepresentation dimension $\mathbf e$, its relative class is
$\mathbb L^{-\chi_Q(\mathbf d,\mathbf e)}$
([[lem-quiver-motivic-extension-stack-class]]).

[F3] The target multiplication is
$x^{\mathbf d}x^{\mathbf e}
=\mathbb L^{-\chi_Q(\mathbf d,\mathbf e)}
x^{\mathbf d+\mathbf e}$
([[def-quiver-motivic-quantum-torus]]).

[F4] Pullback, pushforward and exterior product in the coefficient system
are defined by fiber product, composition and product over $k$
([[def-motivic-stack-function-groups-for-quiver-representations]]).

[F5] The source Hall convolution is an associative unital $R$-bilinear
product on $H_Q$, with the zero-representation stack as its unit
([[thm-quiver-motivic-hall-convolution-associative]]).

[A1] The Artin-stack convention inherits its represented-sheaf descent
dependence on AC from [[def-algebraic-stack-and-inertia]] and
[[def-axiom-of-choice]]. All class computations below use explicit
finite-dimensional presentations.

## Proof

**Proof technique:** direct.

1.1 By [F5], $H_Q$ with its Hall convolution is an associative unital $R$-algebra. Bilinearity of $\chi_Q$ gives $\chi_Q(\mathbf d,\mathbf e)+\chi_Q(\mathbf d+\mathbf e,\mathbf f) =\chi_Q(\mathbf e,\mathbf f)+\chi_Q(\mathbf d,\mathbf e+\mathbf f)$. Hence the two products of $x^{\mathbf d},x^{\mathbf e},x^{\mathbf f}$ have the same coefficient and degree; the zero vector gives the unit. Thus $T_Q$ is also an associative unital $R$-algebra. [F3, F5, given, algebra]

1.2 Let $\alpha=[X\to\mathfrak M_{\mathbf d}]$ and $\beta=[Y\to\mathfrak M_{\mathbf e}]$ be generators. Their Hall product is the class of the exact-sequence stack over $X\times Y$, pushed to the middle-object stack by [F1]. By [F2], its absolute motive is $\mathbb L^{-\chi_Q(\mathbf d,\mathbf e)}[X\times Y]$. Therefore $$ \mathcal I_Q(\alpha*\beta) =\mathbb L^{-\chi_Q(\mathbf d,\mathbf e)}[X][Y]\, x^{\mathbf d+\mathbf e} =\mathcal I_Q(\alpha)\mathcal I_Q(\beta) $$ by [F3]. The unit from [F5] is the class of $\mathfrak M_{\mathbf 0}(Q)=\operatorname{Spec}k$, whose image is $[\operatorname{Spec}k]x^{\mathbf 0}=x^{\mathbf 0}$, the target unit. [F1, F2, F3, F4, F5, A1, construct]

2.1 Isomorphisms, scissor decompositions, and vector-bundle-stack relations in each relative group map to the same relations in $R=\mathscr K(\operatorname{Spec}k)$ under $[X\to\mathfrak M_{\mathbf d}]\mapsto [X]x^{\mathbf d}$. Thus $\mathcal I_Q$ is well-defined and additive. For $r\in R$, the coefficient-system product gives $\mathcal I_Q(r\alpha)=r\mathcal I_Q(\alpha)$, so it is $R$-linear. Every element of $H_Q$ is a finite sum of homogeneous generators, so bilinearity and step 1.2 extend the multiplication identity to all elements. Together with the unit preservation in step 1.2 and the algebra structures in step 1.1, $\mathcal I_Q$ is the claimed algebra homomorphism. [F4, step 1.1, step 1.2, algebra] ∎


