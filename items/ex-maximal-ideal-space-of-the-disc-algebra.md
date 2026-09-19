---
id: ex-maximal-ideal-space-of-the-disc-algebra
kind: example
title: Maximal ideal space of the disc algebra
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-characters-on-a-unital-banach-algebra-are-continuous, thm-taylor-expansion-holomorphic-function, thm-uniform-limit-continuous-complex-functions, thm-uniform-limit-interchanges-complex-line-integrals, thm-morera-triangle-theorem, thm-boundary-maximum-modulus-principle, thm-complex-power-series-converge-locally-uniformly, def-character-and-maximal-ideal-space, thm-compactness-under-continuous-maps]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — §5.5.1 and Chapter 4, printed pp. 258–267"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — §3.1, printed pp. 54–67"
      url: "https://arxiv.org/pdf/1211.3404"
---

## Example

Let $\mathbb D = \{z : |z| < 1\}$ and let the **disc algebra** be

$$A(\mathbb D) \;:=\; \{\,f \in C(\overline{\mathbb D},\mathbb C) : f \text{ is holomorphic on } \mathbb D\,\},$$

with pointwise operations and the supremum norm. Then $A(\mathbb D)$ is a
nonzero commutative unital complex Banach algebra, and its character space is

$$\Delta(A(\mathbb D)) \;=\; \{\,\mathrm{ev}_a : a \in \overline{\mathbb D}\,\}, \qquad \mathrm{ev}_a(f) := f(a),$$

so that $\Delta(A(\mathbb D))$ is homeomorphic to the **closed disc**
$\overline{\mathbb D}$; every character is evaluation at a point of the disc,
and the point is unique. The boundary restriction
$R : A(\mathbb D) \to C(\partial\mathbb D)$, $R(f) := f|_{\partial\mathbb D}$,
is isometric, but the character space is the disc and not merely its boundary
circle.

## Facts & Assumptions

**Given:** The closed unit disc $\overline{\mathbb D}$, its interior $\mathbb D$, and the disc algebra $A(\mathbb D)$ with the supremum norm.

[L1] Characters of a nonzero unital complex Banach algebra are unital and continuous with $|\chi(f)| \le \|f\|_\infty$ ([[thm-characters-on-a-unital-banach-algebra-are-continuous]]).

[L2] A holomorphic function on an open set has a Taylor expansion at every interior point, convergent on the largest centred disc inside the domain; the partial sums of a power series converge uniformly on compact subsets of the disc of convergence ([[thm-taylor-expansion-holomorphic-function]], [[thm-complex-power-series-converge-locally-uniformly]]).

[L3] Uniform limits of continuous complex functions are continuous, and uniform convergence interchanges with contour integrals ([[thm-uniform-limit-continuous-complex-functions]], [[thm-uniform-limit-interchanges-complex-line-integrals]]).

[L4] A continuous function on an open set is holomorphic if its integral around the boundary of every filled triangle in the open set vanishes ([[thm-morera-triangle-theorem]]).

[L5] For $f$ continuous on $\overline\Omega$ and holomorphic on a bounded domain $\Omega$, the maximum of $|f|$ is attained on $\partial\Omega$ ([[thm-boundary-maximum-modulus-principle]]).

[L6] The pointwise-evaluation topology on a character space is Hausdorff: two
distinct characters differ on some algebra element, and disjoint small discs
about the two values pull back to disjoint evaluation neighbourhoods
([[def-character-and-maximal-ideal-space]]). A continuous bijection from a
compact space to a Hausdorff space is a homeomorphism
([[thm-compactness-under-continuous-maps]]).

## Verification

**Proof technique:** direct.

1.1 $A(\mathbb D)$ is a complex vector space closed under pointwise multiplication, with unit the constant function $1$ of norm one, and the supremum norm is submultiplicative; the constant functions and the coordinate function $z$ show that it is nonzero. [algebra]

1.2 $A(\mathbb D)$ is complete: if $(f_n) \subseteq A(\mathbb D)$ is Cauchy in the supremum norm, then it converges uniformly to a continuous $f$ by [L3]; each $f_n$ is holomorphic on $\mathbb D$, and for every filled triangle $\Delta \subseteq \mathbb D$ one has $\int_{\partial\Delta}f_n = 0$ (for monomials this is the vanishing of the integral of an exact derivative, and for each $f_n$ it follows by uniform convergence of its Taylor series on the compact triangle by [L2] and [L3]), so by [L3] $\int_{\partial\Delta}f = 0$, and [L4] makes $f$ holomorphic; hence $f \in A(\mathbb D)$ and $\|f_n - f\|_\infty \to 0$. [1.1, L2, L3, L4]

1.3 For every $a \in \overline{\mathbb D}$ the evaluation $\mathrm{ev}_a$ is a character: it is nonzero, complex-linear and multiplicative, and $\mathrm{ev}_a(1) = 1$. [algebra]

1.4 Let $\chi$ be a character of $A(\mathbb D)$ and put $a := \chi(z)$, where $z$ denotes the coordinate function. By [L1] $|a| \le \|z\|_\infty = 1$, so $a \in \overline{\mathbb D}$; and for every polynomial $p$ one has $\chi(p) = p(a)$ by linearity, multiplicativity and $\chi(1) = 1$. [1.2, L1, algebra]

1.5 Polynomials are uniformly dense in $A(\mathbb D)$: for $f \in A(\mathbb D)$ and $0 < r < 1$ the function $f_r(z) := f(rz)$ is holomorphic on the disc $|z| < 1/r$ and agrees with the sum of its Taylor series there, and the partial sums converge uniformly on the compact set $\overline{\mathbb D}$ by [L2]; moreover $f_r \to f$ uniformly on $\overline{\mathbb D}$ as $r \uparrow 1$ by uniform continuity of $f$ on the compact disc; hence $f$ is a uniform limit of polynomials. [1.2, L2, algebra]

2.1 Consequently $\chi(f) = f(a)$ for every $f \in A(\mathbb D)$: by [step 1.5] take polynomials $p_n \to f$ uniformly and use continuity of $\chi$ from [L1] together with $\chi(p_n) = p_n(a)$ from [step 1.4]; hence $\chi = \mathrm{ev}_a$ with $a = \chi(z) \in \overline{\mathbb D}$, so every character is an evaluation at a point of the disc, and the point is unique because $\mathrm{ev}_a = \mathrm{ev}_b$ forces $a = \mathrm{ev}_a(z) = \mathrm{ev}_b(z) = b$. [step 1.4, step 1.5, L1, algebra]

3.1 The map $a \mapsto \mathrm{ev}_a$ is continuous because every coordinate $a\mapsto\mathrm{ev}_a(f)=f(a)$ is continuous; it is a bijection by [step 2.1] and [step 1.3]. Its domain $\overline{\mathbb D}$ is compact and its target is Hausdorff by [L6], so [L6] makes it a homeomorphism. [step 1.3, step 2.1, L6]

4.1 The boundary restriction is isometric: by [L5] applied to the bounded domain $\mathbb D$ and the function $f$, continuous on the closure, one has $\sup_{\overline{\mathbb D}}|f| = \max_{\partial\mathbb D}|f|$, so $\|f\|_\infty = \|f|_{\partial\mathbb D}\|_\infty$ and $R$ preserves norms; and the character space is $\Delta(A(\mathbb D)) \cong \overline{\mathbb D}$, which contains points not on the boundary, so it is not the circle alone. [step 3.1, L5, algebra] ∎

## Remarks

- **The example shows that the character space of a uniform algebra need not be the boundary.** The restriction $R$ is isometric but not surjective onto $C(\partial\mathbb D)$; the character space nevertheless sees the interior points.
- **Nonunital disc-type algebras** are not treated here; the algebra above is unital, and the general nonunital representation theory is [[thm-nonunital-commutative-gelfand-naimark]].
