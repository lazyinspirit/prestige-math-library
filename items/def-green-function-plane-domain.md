---
id: def-green-function-plane-domain
kind: definition
title: "The canonical Green kernel of a plane domain"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - lem-log-modulus-is-harmonic-off-its-centre
  - def-barrier-and-regular-boundary-point
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - def-complex-domain
  - def-laplace-fundamental-solution-with-positive-minus-laplacian-sign
  - def-plane-harmonic-function
sources:
  references:
    - title: "Mikhail Lyubich, Dynamics of Quadratic Polynomials, Vol. I, Appendix 1, Sections 10.1-10.9"
      url: https://www.math.stonybrook.edu/~mlyubich/book.pdf
      locator: "Section 10.9, printed pp. 171-172: Green function as least nonnegative harmonic function with a logarithmic pole"
    - title: "E. B. Saff, Logarithmic Potential Theory with Applications to Approximation Theory, Section 3"
      url: https://arxiv.org/pdf/1010.3760
      locator: "Section 3, printed pp. 183-186: Definition 3.4 and properties (a)-(c) for Green functions with a pole"
verification:
  precheck: n/a
  audited: 2026-09-30
---

## Definition

Let $\Omega\subset\mathbb C$ be a **proper plane domain**, that is, a nonempty
connected open set with $\Omega\ne\mathbb C$ ([[def-complex-domain]]), and let
$a\in\Omega$. Moduli are those of
[[def-complex-conjugate-real-imaginary-part-and-modulus]], and harmonicity is
that of [[def-plane-harmonic-function]].

**Logarithmic-pole candidates.** A function $u:\Omega\setminus\{a\}\to\mathbb R$
is a **logarithmic-pole candidate at $a$** when:

1. $u(z)\ge 0$ for every $z\in\Omega\setminus\{a\}$;
2. $u$ is harmonic on $\Omega\setminus\{a\}$;
3. $u+\log|z-a|$ **extends harmonically across $a$**: there is a harmonic
   function $h$ on $\Omega$ with
   $$h(z)=u(z)+\log|z-a|\qquad(z\in\Omega\setminus\{a\}).$$

The function $h$ in clause 3 is the **harmonic corrector** of $u$ at $a$; it is
unique when it exists, because two harmonic functions on the connected open set
$\Omega$ that agree on the nonempty open set $\Omega\setminus\{a\}$ agree on
$\Omega$.

**Order.** Candidates at $a$ are compared pointwise on $\Omega\setminus\{a\}$.

**Canonical Green function.** Suppose the family of candidates at $a$ is
nonempty. Its **canonical Green function** is its pointwise least member, when
such a member exists: a candidate $g$ with $g\le u$ pointwise on
$\Omega\setminus\{a\}$ for every candidate $u$. A pointwise least member is
unique, and it is written $z\mapsto g_\Omega(z,a)$. If the family is empty, or
if it is nonempty but has no pointwise least member, then $g_\Omega(\cdot,a)$ is
not defined by this definition. The domain $\Omega$ is called **Greenian** when
$g_\Omega(\cdot,a)$ exists for every $a\in\Omega$.

The coefficient of $\log|z-a|$ is fixed to equal exactly one, so for the
canonical kernel the corrector $h_a:=g_\Omega(\cdot,a)+\log|\cdot-a|$ is
harmonic on all of $\Omega$ and finite at $a$.

## Remarks

- **Leastness is a genuine restriction.** On the punctured disc
  $\Omega=\mathbb D\setminus\{0\}$ with $a\ne0$, if $g_\Omega(\cdot,a)$ exists
  then for every $t>0$ the function
  $z\mapsto g_\Omega(z,a)+t\log(1/|z|)$ is another logarithmic-pole
  candidate at $a$. The added term is nonnegative on $\Omega$ and harmonic
  there by [[lem-log-modulus-is-harmonic-off-its-centre]], so the corrector
  still extends harmonically across $a\ne0$. The new candidate is strictly
  larger on $\Omega$. Thus the candidate clauses alone do not designate a
  unique function on this domain; the pointwise least-member clause does.

- **Promised boundary behaviour.** On a bounded domain the canonical kernel
  has zero limit at every regular boundary point, in the sense of
  [[def-barrier-and-regular-boundary-point]], and no pointwise limit is required
  or asserted at an irregular boundary point. Both statements are proved later
  on this page together with the existence theorem; they are not part of the
  definition and are not assumed here.

- **Normalization relative to the PDE kernel.** The published kernel
  $\Phi(w)=-(2\pi)^{-1}\log|w|$ of
  [[def-laplace-fundamental-solution-with-positive-minus-laplacian-sign]]
  satisfies $2\pi\Phi(w)=-\log|w|$, so twice-$\pi$ times a Dirichlet Green
  function of that PDE page is a logarithmic-pole candidate with logarithmic
  coefficient one whenever the PDE correctors exist. The identification of the
  two normalizations, and the distributional identity
  $-\Delta_z\,g_\Omega(z,a)=2\pi\,\delta_a$, are **not** part of this
  definition: they are proved later on this page from that supplier.

- **Properness.** The setting is a proper domain, $\Omega\ne\mathbb C$; nothing
  below asserts the existence of a canonical kernel on the whole plane.
