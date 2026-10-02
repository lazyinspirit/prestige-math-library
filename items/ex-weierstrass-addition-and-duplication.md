---
id: ex-weierstrass-addition-and-duplication
kind: example
title: "Addition and duplication for $\\wp$"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-complex-lattice-and-complex-torus
  - def-weierstrass-elliptic-p-function
  - thm-weierstrass-p-normal-convergence-and-periodicity
  - lem-weierstrass-p-degree-two-and-half-periods
  - thm-weierstrass-p-differential-equation
  - thm-weierstrass-p-addition-formula
  - thm-identity-theorem-holomorphic-functions
  - thm-isolated-zeros-holomorphic-function
  - thm-zero-order-factorization-holomorphic-function
  - cor-complex-differentiability-implies-continuity
  - thm-algebra-of-complex-derivatives
  - thm-chain-rule-for-complex-derivatives
  - def-meromorphic-function-complex-domain
  - cor-meromorphic-functions-on-a-domain-form-a-field
  - thm-poles-meromorphic-function-are-discrete-and-countable
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Modular Functions and Modular Forms, Ch. 3, pp. 41-47"
      url: https://www.jmilne.org/math/CourseNotes/MF.pdf
      locator: "Ch. 3, the addition formula and the doubling specialization, printed pp. 45-46."
    - title: "C. T. McMullen, Advanced Complex Analysis, Math 213a course notes, Ch. 5 §5.1, pp. 79-90"
      url: https://people.math.harvard.edu/~ctm/home/text/class/harvard/213a/10/html/home/course/course.pdf
      locator: "Ch. 5 §5.1, the addition-law passage with the limiting duplication formula, printed pp. 89-90 (PDF pp. 90-91)."
    - title: "NIST Digital Library of Mathematical Functions, §23.2 and §23.3"
      url: https://dlmf.nist.gov/23.2
      locator: "§23.2(ii)-(iii): the differential equation and the derivative relations; the duplication case of the addition theorem."
verification:
  precheck: pass
---

## Example

Let $\Lambda$ be a full complex lattice with Weierstrass function $\wp$, and
let $z\in\mathbb C\setminus\Lambda$ satisfy $\wp'(z)\ne0$. Then
$$\wp(2z)=-2\wp(z)+\frac14\left(\frac{\wp''(z)}{\wp'(z)}\right)^{2}.$$
Moreover $\wp''=6\wp^{2}-\tfrac12g_2$ on $\mathbb C\setminus\Lambda$, so on the
same locus the duplication value is the rational expression
$$-2\wp(z)+\frac{(6\wp(z)^2-\frac12g_2)^2}{4\,\wp'(z)^2}$$
in $\wp(z)$ and $\wp'(z)$. The duplication formulas agree as meromorphic
functions on $\mathbb C$. At a nonzero half-period both sides have a genuine
double pole, since $2z\in\Lambda$; no finite value is asserted there.

## Facts & Assumptions

**Given:** A full complex lattice $\Lambda=\mathbb Z\omega_1+\mathbb Z\omega_2$ with oriented basis, its Weierstrass function $\wp$ and derivative $\wp'$, the invariants $g_2=60G_4$, $g_3=140G_6$, and a point $z\in\mathbb C\setminus\Lambda$.

[F1] $\wp$ is holomorphic on $\mathbb C\setminus\Lambda$, is even and $\Lambda$-periodic, and at each lattice point has a double pole with principal part $(z-\lambda)^{-2}$ and no other poles; $\wp'(z)=-2\sum_{\omega\in\Lambda}(z-\omega)^{-3}$ on $\mathbb C\setminus\Lambda$, this series being normally convergent there, and $\wp'$ is odd and $\Lambda$-periodic with a pole of order $3$ at each lattice point ([[thm-weierstrass-p-normal-convergence-and-periodicity]], [[def-weierstrass-elliptic-p-function]]).

[F2] $\wp(z)=\wp(w)$ if and only if $w\equiv z$ or $w\equiv-z$ modulo $\Lambda$; the zeros of $\wp'$ are exactly the $\Lambda$-translates of the three nonzero half-periods, and each of them is of order one; consequently, for $w\in\mathbb C\setminus\Lambda$, $\wp'(w)=0$ if and only if $2w\in\Lambda$ ([[lem-weierstrass-p-degree-two-and-half-periods]]).

[F3] $(\wp')^2=4\wp^3-g_2\wp-g_3$ on $\mathbb C\setminus\Lambda$ ([[thm-weierstrass-p-differential-equation]]).

[F4] The addition formula holds meromorphically in $(z,w)$: it holds as an equality of values wherever the displayed quotient is defined, and all apparent exceptional cases are interpreted by meromorphic continuation, without assigning a finite value at a genuine pole ([[thm-weierstrass-p-addition-formula]]).

[F5] A holomorphic function with a zero of order $m$ at $a$ factors near $a$ as $(z-a)^mg(z)$ with $g(a)\ne0$; a holomorphic function on a domain that is not identically zero has isolated zeros; and two holomorphic functions on a domain agreeing on a set with an accumulation point in the domain agree everywhere ([[thm-zero-order-factorization-holomorphic-function]], [[thm-isolated-zeros-holomorphic-function]], [[thm-identity-theorem-holomorphic-functions]]).

[F6] Complex derivatives are linear, satisfy the product rule and the chain rule, and a complex-differentiable function is continuous ([[thm-algebra-of-complex-derivatives]], [[thm-chain-rule-for-complex-derivatives]], [[cor-complex-differentiability-implies-continuity]]).

[F7] Meromorphic functions on a connected plane domain form a field: sums, products and quotients with nonzero denominator are meromorphic, and the pole set of a meromorphic function is discrete and closed; a meromorphic function on a domain that vanishes on a nonempty open subset is identically zero ([[def-meromorphic-function-complex-domain]], [[cor-meromorphic-functions-on-a-domain-form-a-field]], [[thm-poles-meromorphic-function-are-discrete-and-countable]]).

[F8] The complex plane is a connected plane domain ([[def-complex-lattice-and-complex-torus]]).

## Verification

1.1 (The second-derivative identity on $\mathbb C\setminus\Lambda$.) Differentiating [F3] with the rules of [F6] gives $2\wp'\wp''=(12\wp^2-g_2)\wp'$ on $\mathbb C\setminus\Lambda$; at every point with $\wp'\ne0$ this gives $\wp''=6\wp^2-\tfrac12g_2$. Let $h\notin\Lambda$ with $\wp'(h)=0$: by [F2] the zero of $\wp'$ at $h$ is of order one, so [F5] gives $\wp'(w)=(w-h)g(w)$ with $g(h)\ne0$, and hence $\wp'(w)\ne0$ for $0<|w-h|<\rho$ with some $\rho>0$; shrinking $\rho$ if necessary, the pole set of the meromorphic function $\wp$ is discrete by [F7], so the disc $D(h,\rho)$ contains no lattice point. Both $\wp''$ and $6\wp^2-\tfrac12g_2$ are holomorphic on $D(h,\rho)$ and agree on the punctured disc $D(h,\rho)\setminus\{h\}$, which is a nonempty connected open set, so [F5] makes them agree on all of $D(h,\rho)$, in particular at $h$. Every point of $\mathbb C\setminus\Lambda$ either has $\wp'\ne0$ or is such a zero $h$ by [F2], so $\wp''=6\wp^2-\tfrac12g_2$ on all of $\mathbb C\setminus\Lambda$. [F1, F2, F3, F5, F6, F7, algebra]

1.2 (The duplication identity where $\wp'(z)\ne0$.) Fix $z\in\mathbb C\setminus\Lambda$ with $\wp'(z)\ne0$; then $2z\notin\Lambda$ by [F2], and $\wp$ is holomorphic near $2z$. Choose $\rho>0$ so small that $D(z,\rho)$ avoids $\Lambda$, $(z+\Lambda)\setminus\{z\}$ and $-z+\Lambda$, and that $z+w\notin\Lambda$ for $w\in D(z,\rho)$. For $0<|w-z|<\rho$ the addition formula [F4] applies and gives $\wp(z+w)=-\wp(z)-\wp(w)+\tfrac14Q(w)^2$ with $Q(w)=(\wp'(z)-\wp'(w))/(\wp(z)-\wp(w))$. Both numerator and denominator vanish at $w=z$, and the denominator has a simple zero there because its derivative is $-\wp'(z)\ne0$; the numerator has a zero of at least order one. Thus $Q$ extends holomorphically with $Q(z)=\wp''(z)/\wp'(z)$, whether or not $\wp''(z)$ vanishes. Letting $w\to z$ gives $\wp(2z)=-2\wp(z)+\tfrac14(\wp''(z)/\wp'(z))^2$. [F1, F2, F4, F5, F6, F7, algebra]

2.1 (Rational expression in $\wp$ and $\wp'$.) Substituting the identity of step 1.1 into the duplication identity of step 1.2 gives, for every $z\in\mathbb C\setminus\Lambda$ with $\wp'(z)\ne0$, $$\wp(2z)=-2\wp(z)+\frac14\left(\frac{6\wp(z)^2-\frac12g_2}{\wp'(z)}\right)^{2}=-2\wp(z)+\frac{(6\wp(z)^2-\frac12g_2)^2}{4\,\wp'(z)^2},$$ a value of the rational function $R(x,y)=-2x+\dfrac{(6x^2-\frac12g_2)^2}{4y^2}$ of the two variables $x,y$ with coefficients in the field generated by $g_2$ over $\mathbb C$ (here the denominator $4y^2$ does not vanish because $\wp'(z)\ne0$). [step 1.1, step 1.2, algebra]

3.1 (Meromorphic extension and pole set.) The function $F(z):=\wp(2z)$ is meromorphic on $\mathbb C$: it is holomorphic off $\tfrac12\Lambda=\{z:2z\in\Lambda\}$, and if $z_0\in\tfrac12\Lambda$ with $\lambda:=2z_0\in\Lambda$, then [F1] gives that $\wp(w)-(w-\lambda)^{-2}$ is holomorphic near $\lambda$, so substituting $w=2z$ shows $F(z)-\tfrac14(z-z_0)^{-2}$ holomorphic near $z_0$: each $z_0\in\tfrac12\Lambda$ is a double pole of $F$, and there are no others. The right-hand side $R(\wp(z),\wp'(z))$ is meromorphic on $\mathbb C$ by the field property [F7], because $\wp$ and $\wp'$ are meromorphic and $\wp'$ is not the zero function by [F2]. By steps 1.2 and 2.1 the two meromorphic functions agree on $\{z\in\mathbb C\setminus\Lambda:\wp'(z)\ne0\}=\mathbb C\setminus\tfrac12\Lambda$, a nonempty open subset of the connected domain $\mathbb C$ [F8]; hence their difference vanishes on a nonempty open set and is identically zero by [F7]. Therefore the duplication identity is an identity of meromorphic functions on $\mathbb C$: it holds wherever both sides are finite, and at the points of $\tfrac12\Lambda$, where $F$ has a double pole and the right-hand side likewise has a pole (at half-periods because $\wp'$ has a zero of order one and $\wp''$ is nonzero there, and at lattice points by the equality of the two meromorphic functions), no finite value is asserted. [F1, F2, F7, F8, step 1.1, step 1.2, step 2.1, algebra]

4.1 (Assembly.) Step 1.1 gives the identity $\wp''=6\wp^2-\tfrac12g_2$ on $\mathbb C\setminus\Lambda$, extended holomorphically across the half-periods where the division by $\wp'$ was only apparently problematic; step 1.2 gives the duplication identity for $\wp'(z)\ne0$; step 2.1 exhibits it as the rational expression in $\wp(z)$ and $\wp'(z)$; and step 3.1 upgrades the duplication identity to an identity of meromorphic functions on $\mathbb C$, with the genuine poles retained. These are exactly the assertions of the example. ∎

## Remarks

The only point of substance is that the addition formula becomes $0/0$ when $w=z$: the secant through two coincident points has to be replaced by the tangent, and in the formula that means replacing the difference quotient by the derivative quotient $\wp''(z)/\wp'(z)$. The second identity is what makes the result algebraic: $(\wp')^2=4\wp^3-g_2\wp-g_3$ can be differentiated and solved for $\wp''$ wherever $\wp'\ne0$, and the apparent failure of that solution at the half-periods is repaired by the identity theorem, since $\wp''$ and $6\wp^2-\tfrac12g_2$ are holomorphic across them. Both formulas are used in [[thm-elliptic-cubic-chord-tangent-group-law]], where the tangent case of the chord-tangent law is exactly the limiting case $w\to z$ used here; note that the theorem derives its own copy of the differentiated differential equation locally, so this example carries no load for it.
