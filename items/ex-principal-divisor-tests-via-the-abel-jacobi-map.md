---
id: ex-principal-divisor-tests-via-the-abel-jacobi-map
kind: example
title: Principal divisor tests via the Abel-Jacobi map
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 27
deps:
  - def-abel-jacobi-map
  - def-axiom-of-choice
  - def-complex-lattice-and-complex-torus
  - def-divisor-principal-and-canonical-divisor-riemann-surface
  - def-jacobian-of-a-compact-riemann-surface
  - def-genus-and-euler-characteristic-compact-riemann-surface
  - def-riemann-sphere-holomorphic-charts
  - def-weierstrass-elliptic-p-function
  - ex-periods-of-a-complex-torus
  - lem-abel-jacobi-map-is-well-defined-and-base-point-independent
  - lem-degree-one-holomorphic-map-of-compact-riemann-surfaces-is-an-isomorphism
  - lem-holomorphic-differentials-form-a-g-dimensional-space
  - thm-abels-theorem-for-divisors
  - thm-elliptic-function-divisor-laws
  - thm-meromorphic-functions-riemann-sphere-are-rational
  - thm-proper-holomorphic-map-riemann-surfaces-has-degree
  - thm-weierstrass-p-normal-convergence-and-periodicity
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Karl Otto Forster, Lectures on Riemann Surfaces, GTM 81, 4th corrected printing"
      url: "http://ronan.terpereau.perso.math.cnrs.fr/Master_Class_2023_Dijon/FORSTER_Lectures%20on%20Riemann%20Surfaces.pdf"
      locator: "Ch. 2, §20.8 (the Abel condition $\\sum a_k\\equiv\\sum b_k\\pmod{\\Gamma}$ for doubly periodic functions) and the discussion of Theorem 20.7, printed pp. 164-166."
    - title: "Curtis T. McMullen, Riemann Surfaces, Harvard Math 213b course notes (2026)"
      url: "https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf"
      locator: "Ch. 15, the meaning of $\\varphi(D)$ and the examples for the sphere, a torus and a general curve, printed pp. 128-130."
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]).

1. **Sphere.** For $X=\widehat{\mathbb C}$ one has $g=0$, $\Omega(X)=0$ and
$\operatorname{Jac}(X)=0$
([[def-riemann-sphere-holomorphic-charts]],
[[lem-holomorphic-differentials-form-a-g-dimensional-space]],
[[def-jacobian-of-a-compact-riemann-surface]]). Every degree-zero divisor $D=\sum_a n_a(a)$ on
$\widehat{\mathbb C}$ is principal: the rational function
$\prod_{a\in\mathbb C,\,n_a\ne0}(z-a)^{n_a}$ has divisor $D$, since its
order at infinity is $-\sum_{a\in\mathbb C}n_a=n_\infty$. Hence
the Abel-Jacobi criterion of [[thm-abels-theorem-for-divisors]] is satisfied by
all of them, and $u(D)=0$ for every
$D\in\operatorname{Div}^0(\widehat{\mathbb C})$. Explicitly,
$\bigl((a)-(b)\bigr)=\operatorname{div}\bigl(\tfrac{z-a}{z-b}\bigr)$ for
$a,b\in\mathbb C$.
2. **Torus, one point.** Let $X=\mathbb C/\Lambda$ be a complex torus and
$p,q\in X$ ([[ex-periods-of-a-complex-torus]]). Then
$u((q)-(p))=q-p$ in the identification $\operatorname{Jac}(X)=X=\mathbb C/\Lambda$;
hence $(q)-(p)$ is principal if and only if $q=p$, because a meromorphic
function on a torus with a single simple pole and zero would be a degree-one map
to the sphere, which is impossible for genus one
([[lem-degree-one-holomorphic-map-of-compact-riemann-surfaces-is-an-isomorphism]],
[[thm-proper-holomorphic-map-riemann-surfaces-has-degree]]).
3. **Torus, symmetric pairs.** For representatives $p,q\in\mathbb C$ of points of $X$, with
$2p,2q\notin\Lambda$ and $q\not\equiv\pm p\pmod\Lambda$, the function
$$F(z)=\frac{\wp(z)-\wp(q)}{\wp(z)-\wp(p)}$$
is a nonconstant meromorphic function on the torus with divisor
$(q)+(-q)-(p)-(-p)$
([[def-weierstrass-elliptic-p-function]],
[[thm-weierstrass-p-normal-convergence-and-periodicity]],
[[thm-elliptic-function-divisor-laws]]); correspondingly
$u\bigl((q)+(-q)-(p)-(-p)\bigr)=0$, since
$q+(-q)-p-(-p)=0$ in the group $\mathbb C/\Lambda$.
4. **Non-principal examples.** On a torus, any divisor of the form $(q)-(p)$
with distinct points $p,q\in X$ has $u\ne0$, so it is not principal. Equivalently,
any plane representatives $\tilde p,\tilde q\in\mathbb C$ satisfy
$\tilde q-\tilde p\notin\Lambda$. On a curve of
genus $g\ge2$ and for distinct points $p\ne q$ the divisor $(q)-(p)$ has
$u\ne0$: a vanishing class would make $(q)-(p)$ principal by the criterion,
hence produce a holomorphic map $X\to\widehat{\mathbb C}$ of degree one and an
isomorphism $X\cong\widehat{\mathbb C}$, contradicting genus $g\ge2$
([[lem-degree-one-holomorphic-map-of-compact-riemann-surfaces-is-an-isomorphism]]).

## Facts & Assumptions

**Given:** Full AC, the Riemann sphere, a complex torus $X=\mathbb C/\Lambda$, and a curve of genus $g\ge2$; the Abel-Jacobi map $u$ in each case.

[F1] The Abel-Jacobi criterion: for $D\in\operatorname{Div}^0(X)$, $D$ is principal if and only if $u(D)=0$ ([[thm-abels-theorem-for-divisors]], [[def-divisor-principal-and-canonical-divisor-riemann-surface]]).

[F2] On the sphere $g=0$ and $\Omega(X)=0$, so $\Lambda=0$ and $\operatorname{Jac}(X)$ is a point; meromorphic functions on the sphere are rational, and the divisor of $z\mapsto\frac{z-a}{z-b}$ is $(a)-(b)$ ([[lem-holomorphic-differentials-form-a-g-dimensional-space]], [[def-jacobian-of-a-compact-riemann-surface]], [[thm-meromorphic-functions-riemann-sphere-are-rational]], [[def-riemann-sphere-holomorphic-charts]], [[def-divisor-principal-and-canonical-divisor-riemann-surface]]).

[F3] On a complex torus $X=\mathbb C/\Lambda$ the Abel-Jacobi map identifies $\operatorname{Jac}(X)$ with $X$ and sends $(q)-(p)$ to $q-p$ in $X$. This is zero exactly when $q=p$, equivalently when any plane representatives satisfy $\tilde q-\tilde p\in\Lambda$ ([[ex-periods-of-a-complex-torus]], [[def-abel-jacobi-map]], [[lem-abel-jacobi-map-is-well-defined-and-base-point-independent]]).

[F4] A principal divisor $(q)-(p)$ with $p\ne q$ is the divisor of a meromorphic function whose associated map $X\to\widehat{\mathbb C}$ has degree one; a degree-one holomorphic map between compact connected Riemann surfaces is a biholomorphism ([[def-divisor-principal-and-canonical-divisor-riemann-surface]], [[thm-proper-holomorphic-map-riemann-surfaces-has-degree]], [[lem-degree-one-holomorphic-map-of-compact-riemann-surfaces-is-an-isomorphism]]).

[F5] The Weierstrass $\wp$-function is meromorphic, $\Lambda$-periodic and even, with its only pole on the torus a double pole at $0$ ([[def-weierstrass-elliptic-p-function]], [[thm-weierstrass-p-normal-convergence-and-periodicity]]). Subtracting a finite constant preserves that pole, so the descended function has degree two and total zero order two by the weighted fibre formula ([[thm-proper-holomorphic-map-riemann-surfaces-has-degree]], [[def-divisor-principal-and-canonical-divisor-riemann-surface]]).

[F6] $X=\mathbb C/\Lambda$ is a compact connected Riemann surface of genus $1$, and a curve of genus $g\ge2$ is not isomorphic to the sphere ([[ex-periods-of-a-complex-torus]], [[def-genus-and-euler-characteristic-compact-riemann-surface]]).

[F7] Full AC is inherited from the Abel-Jacobi construction ([[def-axiom-of-choice]]).

## Verification

**Given:** The objects and conventions in the Statement.

1.1 By [F2], $g(\widehat{\mathbb C})=0$, $\Omega(\widehat{\mathbb C})=0$, $\Lambda=0$ and $\operatorname{Jac}(\widehat{\mathbb C})=0$, so $u$ is the zero map; for a degree-zero divisor $D=\sum_a n_a(a)$, set $f(z)=\prod_{a\in\mathbb C,\,n_a\ne0}(z-a)^{n_a}$. At each finite $a$ its order is $n_a$, and at infinity its order is $-\sum_{a\in\mathbb C}n_a=n_\infty$. Thus $(f)=D$, so every such divisor is principal and satisfies the criterion [F1]; explicitly $((a)-(b))=\operatorname{div}\frac{z-a}{z-b}$. This is claim 1. [F1, F2]

1.2 On a torus, [F3] gives $u((q)-(p))=q-p$, so the class vanishes exactly when $q=p$; if $q\ne p$ and $(q)-(p)$ were principal, then by [F4] there would be a degree-one map $X\to\widehat{\mathbb C}$, hence $X\cong\widehat{\mathbb C}$ of genus $0$, contradicting the genus-one statement [F6]. This is claim 2. [F3, F4, F6]

1.3 For claim 3, evenness in [F5] makes $\pm q$ zeros of $\wp(z)-\wp(q)$; they are distinct modulo $\Lambda$ because $2q\notin\Lambda$. The only pole is the double pole at $0$, so the zero count in [F5] is two and these zeros are simple, with no others. The same argument applies to $p$; both numerator and denominator are $\Lambda$-periodic, so the quotient $F$ descends to a meromorphic function on the torus with divisor $(q)+(-q)-(p)-(-p)$ (the double poles at $0$ cancel, while the simple zeros and poles at $\pm q,\pm p$ are disjoint because $q\not\equiv\pm p$ and none is $0$ modulo $\Lambda$). Hence this divisor is principal and $u$ of it vanishes by [F1]; its group sum $q+(-q)-p-(-p)=0$ is consistent with the torus identification [F3]. [F1, F3, F5]

1.4 For claim 4, on a torus the class of $(q)-(p)$ is $q-p$ in $X$ by [F3], nonzero exactly when $q\ne p$, equivalently $\tilde q-\tilde p\notin\Lambda$ for plane representatives. Such a divisor is not principal by [F1]. On a curve of genus $g\ge2$, if $p\ne q$ and $u((q)-(p))=0$, then [F1] makes $(q)-(p)$ principal, and [F4] yields a degree-one map $X\to\widehat{\mathbb C}$ and an isomorphism $X\cong\widehat{\mathbb C}$, contradicting $g\ge2$ by [F6]. This is claim 4. [F1, F3, F4, F6]

2.1 Claims 1-4 are steps 1.1-1.4, under the inherited AC of [F7]. [F7, step 1.1, step 1.2, step 1.3, step 1.4] ∎


## Source notes

Forster's §20.8 (*Lectures on Riemann Surfaces*, printed pp. 165-166) states the Abel condition for doubly periodic functions, $\sum a_k\equiv\sum b_k\pmod\Gamma$, and the sphere and torus cases; McMullen (printed pp. 128-130) gives the same examples through $\varphi$. The explicit divisor of $F$ in claim 3 is the standard $\wp$-computation, proved here through the zero/pole count of elliptic functions.
