---
id: def-qftx-lie-algebra-valued-form-bracket
kind: definition
title: Graded bracket of Lie-algebra-valued differential forms
status: "published"
origin: session
dependency_level: 0
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
axiom_base: "ZF; the construction uses only finite-dimensional linear algebra and no choice from a family."
deps:
  - def-finite-dimensional-lie-algebra
  - def-finite-dimensional-vector-valued-forms-and-their-exterior-derivative
  - def-wedge-product-of-differential-forms
  - prop-differential-forms-form-a-graded-commutative-algebra
  - thm-the-exterior-derivative-is-a-graded-derivation
dependency_roles:
  def-finite-dimensional-lie-algebra: mathematical-premise
  def-finite-dimensional-vector-valued-forms-and-their-exterior-derivative: mathematical-premise
  def-wedge-product-of-differential-forms: mathematical-premise
  prop-differential-forms-form-a-graded-commutative-algebra: mathematical-premise
  thm-the-exterior-derivative-is-a-graded-derivation: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Matthijs Vákár, Principal Bundles and Gauge Theories (full text)"
      url: "https://arxiv.org/html/2110.06334"
      locator: "§1.3.1, printed pp. 34–35: the graded bracket of Lie-algebra-valued forms and its graded Leibniz rule."
    - title: "Karl-Hermann Neeb, Differential Topology of Fiber Bundles (full lecture notes, 2024)"
      url: "https://www.math.fau.de/wp-content/uploads/2024/01/bundle-lect.pdf"
      locator: "Chapter 6 §6.1, printed pp. 100–101: bracket convention, Cartan curvature formula, and curvature equivariance."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Definition

Let $M$ be a smooth manifold and $\mathfrak g$ a finite-dimensional real Lie algebra. For homogeneous $\alpha\in\Omega^p(M,\mathfrak g)$ and $\beta\in\Omega^q(M,\mathfrak g)$, define their **graded bracket** by

$$[\alpha\wedge\beta](X_1,\ldots,X_{p+q}) := \frac{1}{p!q!}\sum_{\sigma\in S_{p+q}}\operatorname{sgn}(\sigma)[\alpha(X_{\sigma(1)},\ldots,X_{\sigma(p)}),\beta(X_{\sigma(p+1)},\ldots,X_{\sigma(p+q)})].$$

Here $\Omega^p(M,\mathfrak g)$ is the space of smooth alternating $p$-linear forms with values in $\mathfrak g$, the inner bracket is the Lie-algebra bracket, and the sum is over all permutations. This is a smooth $\mathfrak g$-valued $(p+q)$-form. It obeys graded skew-symmetry $[\alpha\wedge\beta]=-(-1)^{pq}[\beta\wedge\alpha]$, graded Jacobi

$$\left[\alpha\wedge\left[\beta\wedge\gamma\right]\right]=\left[\left[\alpha\wedge\beta\right]\wedge\gamma\right]+(-1)^{pq}\left[\beta\wedge\left[\alpha\wedge\gamma\right]\right],$$

and the exterior-derivative rule

$$d[\alpha\wedge\beta]=[d\alpha\wedge\beta]+(-1)^p[\alpha\wedge d\beta].$$

In particular, for $\mathfrak g$-valued 1-forms $A,B$, $[A\wedge B](X,Y)=[A(X),B(Y)]-[A(Y),B(X)]$, so $\tfrac12[A\wedge A](X,Y)=[A(X),A(Y)]$. This fixes the normalization used by the Cartan curvature formula.

## Definition references

[Vákár, §1.3.1, graded bracket on Lie-algebra-valued forms](https://arxiv.org/html/2110.06334)

[Neeb, Chapter 6 §6.1, curvature and bracket conventions](https://www.math.fau.de/wp-content/uploads/2024/01/bundle-lect.pdf)

[[def-finite-dimensional-lie-algebra|Finite-dimensional real Lie algebra]]

[[def-finite-dimensional-vector-valued-forms-and-their-exterior-derivative|Finite-dimensional vector-valued forms]]

[[def-wedge-product-of-differential-forms|Wedge product of differential forms]]

[[prop-differential-forms-form-a-graded-commutative-algebra|Graded-commutative algebra of forms]]

[[thm-the-exterior-derivative-is-a-graded-derivation|Graded derivation rule for the exterior derivative]]

## Facts & Assumptions

**Given:** A smooth manifold $M$, a finite-dimensional real Lie algebra $\mathfrak g$, and homogeneous forms $\alpha,\beta,\gamma$ of degrees $p,q,r$.

[F1] A finite-dimensional real Lie algebra has a bilinear alternating bracket satisfying Jacobi. [[def-finite-dimensional-lie-algebra]]

[F2] A smooth $\mathfrak g$-valued form has smooth scalar components in any finite basis, and its exterior derivative is taken componentwise. [[def-finite-dimensional-vector-valued-forms-and-their-exterior-derivative]]

[F3] The scalar exterior derivative is a graded derivation of the wedge product. [[thm-the-exterior-derivative-is-a-graded-derivation]]

[F4] Differential forms form an associative graded-commutative algebra. [[def-wedge-product-of-differential-forms]], [[prop-differential-forms-form-a-graded-commutative-algebra]]

## Proof

1.1 Choose a finite basis $(e_a)_{a=1}^n$ of $\mathfrak g$ with dual basis $(e^a)_{a=1}^n$, and write $\alpha=\sum_a e_a\alpha^a$, $\beta=\sum_b e_b\beta^b$, where $\alpha^a=e^a\circ\alpha$ and $\beta^b=e^b\circ\beta$ are smooth scalar forms. Expanding the alternating permutation sum gives $[\alpha\wedge\beta]=\sum_{a,b}[e_a,e_b]\,\alpha^a\wedge\beta^b$; this finite sum is smooth and alternating, hence is in $\Omega^{p+q}(M,\mathfrak g)$. [F1, F2, F4, construct]

2.1 Swapping the two blocks of $p$ and $q$ arguments in the defining permutation sum contributes the sign $(-1)^{pq}$; antisymmetry of the inner Lie bracket contributes the minus sign. Therefore $[\alpha\wedge\beta]=-(-1)^{pq}[\beta\wedge\alpha]$. [F1, F4, step 1.1, algebra]

2.2 In the finite basis expansion of step 1.1, apply the scalar graded derivation rule [F3] to each $\alpha^a\wedge\beta^b$ and retain the fixed coefficient $[e_a,e_b]$. Summing the resulting finite terms gives $d[\alpha\wedge\beta]=[d\alpha\wedge\beta]+(-1)^p[\alpha\wedge d\beta]$. [F2, F3, step 1.1]

2.3 For homogeneous $\alpha,\beta,\gamma$, the same basis expansion writes $\left[\alpha\wedge\left[\beta\wedge\gamma\right]\right]$ with coefficient $[e_a,[e_b,e_c]]$ and form factor $\alpha^a\wedge\beta^b\wedge\gamma^c$. The right-hand terms have coefficients $\left[\,\left[e_a,e_b\right],e_c\right]$ and, after commuting $\beta^b$ past $\alpha^a$ using [F4], $[e_b,[e_a,e_c]]$, with the same form factor. The equality of coefficients is exactly the Lie-algebra Jacobi identity in [F1], so the graded Jacobi formula follows. [F1, F4, step 1.1]

3.1 If $\mathfrak g=0$, all forms and brackets are zero; if $p=0$ or $q=0$, the same formulas use the empty wedge with sign $+1$. The finite basis in step 1.1 is one finite-dimensional coordinate calculation, not a choice from a family. The definition and identities hold on the empty manifold as well. [F1, F2, F3, F4, step 1.1, step 2.1, step 2.2, step 2.3] ∎


