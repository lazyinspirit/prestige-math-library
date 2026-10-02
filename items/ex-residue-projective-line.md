---
id: ex-residue-projective-line
kind: example
title: "Residues on the projective line and the vanishing of their sum"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-h1-line-bundle-dual-sections
  - def-axiom-of-choice
  - def-canonical-line-bundle-curve
  - def-degree-divisor-proper-curve
  - def-formal-laurent-series-and-residue
  - def-perfect-field
  - def-relative-projective-space-standard-charts
  - def-residue-rational-differential-curve-point
  - lem-principal-parts-cech-h1-presentation
  - lem-projective-line-divisors-classified-by-degree
  - lem-residue-independent-uniformizer
  - rem-duality-trace-normalization
  - thm-global-residue-theorem-algebraic-curve
  - thm-local-ring-smooth-curve-dvr
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Tate, Residues of differentials on curves, Ann. Sci. E.N.S. (4) 1 (1968) 149-159"
      url: "http://www.numdam.org/article/ASENS_1968_4_1_1_149_0.pdf"
    - title: "MIT 18.725 Algebraic Geometry (Fall 2015) course notes, Lectures 24-25"
      url: "https://ocw.mit.edu/courses/18-725-algebraic-geometry-fall-2015/ec341c7a2524e5dba7c3e939f322613a_MIT18_725F15_notes.pdf"
verification:
  audited: 2026-10-02
  precheck: pass

---

## Example

Assume the Axiom of Choice as inherited from the cited cohomology and residue
suppliers ([[def-axiom-of-choice]]). Let $k$ be a perfect field and let
$C=\mathbb P^1_k$ have homogeneous coordinates $x_0,x_1$, affine coordinate
$t=x_1/x_0$ on $U_0=\operatorname{Spec}k[t]$, and point at infinity
$\infty=[0:1]$. Every rational differential is $f(t)\,dt$ with $f\in k(t)$.

**(1) Finite points.** Let $p=V(g)$ be a closed point of $U_0$ defined by a
monic irreducible $g\in k[t]$, and put $u=g(t)$. Since $k$ is perfect,
$g$ is separable, $g'(t)$ is a unit at $p$, and $u$ is a local parameter. If
the completed local expansion is $f(t)=\sum_{n\ge N}a_nu^n$ with
$a_n\in\kappa(p)$, then the coefficient-trace definition gives
$$\operatorname{res}_p(f(t)\,dt)=\operatorname{Tr}_{\kappa(p)/k}\!\left([u^{-1}]\frac{f(t)}{g'(t)}\right).$$
Here $1/g'(t)$ is expanded as a unit power series in $u$, since
$du=g'(t)\,dt$. For a simple pole $f=c/u+\text{regular}$ this is
$\operatorname{Tr}_{\kappa(p)/k}(c/g'(\bar t))$; for higher-order poles the
positive powers in the unit expansion can also contribute. When $k$ is
algebraically closed and $p=a$ is a rational point, this is the coefficient
of $(t-a)^{-1}$ in the Laurent expansion of $f$.

**(2) The point at infinity.** On $U_1=\operatorname{Spec}k[s]$ with
$s=x_0/x_1=1/t$, the local parameter is $s$ and
$$t=s^{-1},\qquad dt=-s^{-2}\,ds.$$
Thus $\operatorname{res}_\infty(f\,dt)$ is the coefficient of $s^{-1}$ in
$-f(1/s)s^{-2}\,ds$. In particular,
$$\operatorname{res}_\infty(t^n\,dt)=\begin{cases}-1,&n=-1,\\0,&n\ne-1.\end{cases}$$

**(3) Vanishing of the sum.** The monomials $t^n\,dt$ have possible poles
only at $0$ and $\infty$; their residues there cancel for $n=-1$ and are both
zero otherwise. For every rational differential on $\mathbb P^1_k$, the sum
of its residues at all closed points is zero by the global residue theorem
([[thm-global-residue-theorem-algebraic-curve]]). For example,
$$\frac{dt}{t(t-1)}=-\frac{dt}{t}+\frac{dt}{t-1}$$
has residues $-1$ at $0$, $+1$ at $1$, and $0$ at infinity.

**(4) The Laurent-tail class.** The principal part $t^{-1}\,dt$ at the origin
represents a class $[t^{-1}dt]\in H^1(\mathbb P^1_k,\omega)$, where
$\omega=\Omega^1_{\mathbb P^1_k/k}$. Its positive residue sum is $+1$, so
the class is nonzero. The space $H^1(\mathbb P^1_k,\omega)$ is one-dimensional.
Under the fixed Gysin trace of Serre duality, its value is $-1$, the negative
of the positive residue sum; in characteristic two these scalars coincide.

## Facts & Assumptions

**Given:** the Axiom of Choice, a perfect field $k$, $C=\mathbb P^1_k$ with
coordinate $t=x_1/x_0$, a monic irreducible $g\in k[t]$, and the finite-support
principal part $t^{-1}dt$ at the origin.

[F1] The Axiom of Choice is inherited from the cited cohomology, principal-parts,
global-residue, and duality suppliers; the computations here make no additional
choices. ([[def-axiom-of-choice]])

[F2] The standard charts are $U_0=\operatorname{Spec}k[t]$ and
$U_1=\operatorname{Spec}k[s]$, with $s=1/t$ on their overlap, and infinity has
local parameter $s$. Closed points in $U_0$ correspond to monic irreducible
polynomials $g$, with residue field $k[t]/(g)$. ([[def-relative-projective-space-standard-charts]], [[lem-projective-line-divisors-classified-by-degree]], [[def-degree-divisor-proper-curve]])

[F3] At $p=V(g)$, $u=g(t)$ is a uniformizer. Since $k$ is perfect, the
irreducible polynomial $g$ is separable, so $g'(t)$ is a unit modulo $(g)$;
the chain rule gives $du=g'(t)dt$. ([[thm-local-ring-smooth-curve-dvr]], [[def-perfect-field]])

[F4] At a closed point with finite separable residue field, residue is the
field trace of the coefficient of $u^{-1}du$ in a local parameter $u$; the
residue is independent of the chosen parameter. ([[def-residue-rational-differential-curve-point]], [[lem-residue-independent-uniformizer]])

[F5] Formal Laurent-series residue extracts the coefficient of exponent $-1$.
([[def-formal-laurent-series-and-residue]])

[F6] Over a perfect field, the sum of residues of a rational differential on
a smooth proper geometrically integral curve is zero. ([[thm-global-residue-theorem-algebraic-curve]])

[F7] The principal-parts presentation represents $H^1(C,\omega)$ by
finite-support local principal parts modulo rational principal parts. In
particular, a single local Laurent tail at the rational origin gives a class.
([[lem-principal-parts-cech-h1-presentation]], [[def-canonical-line-bundle-curve]])

[F8] For $\mathbb P^1_k$, $h^1(\omega)=h^0(\mathcal O)=1$. The fixed
normalized Gysin trace on $H^1(C,\omega)$ is the negative of the positive
residue-sum functional over a perfect field. ([[cor-h1-line-bundle-dual-sections]], [[rem-duality-trace-normalization]])

## Verification

**Proof technique:** compute local coefficients in the two standard charts;
use the global residue theorem for arbitrary rational differentials.

1.1 At $p=V(g)$, [F3] makes $u=g(t)$ a uniformizer and $g'(t)$ a unit. Since $du=g'(t)dt$, one has $f(t)dt=(f(t)/g'(t))du$; the coefficient-trace formula [F4] gives $\operatorname{res}_p(f(t)dt)=\operatorname{Tr}_{\kappa(p)/k}([u^{-1}](f(t)/g'(t)))$. For a simple pole $f=c/u+\text{regular}$ the coefficient is $c/g'(\bar t)$; higher-order poles use the full unit expansion. [F1, F3, F4, F5]

1.2 At $0$, $u=t$ and $\kappa(0)=k$, so [F4] gives $\operatorname{res}_0(t^n dt)=1$ for $n=-1$ and $0$ otherwise. At infinity, $t^n dt=-s^{-n-2}ds$, whose $s^{-1}$ coefficient is $-1$ exactly for $n=-1$ and $0$ otherwise. Thus the monomial residues sum to zero. [F1, F2, F4, F5, algebra]

2.1 The global residue theorem [F6] supplies the vanishing of the residue sum for every rational differential; the monomial calculation in step 1.2 is only the displayed special case. This does not require writing an arbitrary rational differential as a finite Laurent polynomial plus exact terms. [F1, F6, step 1.2]

2.2 For $\omega=dt/(t(t-1))$, $1/(t(t-1))=-1/t+1/(t-1)$ gives residues $-1$ and $+1$ at $0$ and $1$. At infinity, $-f(1/s)s^{-2}ds=-(1-s)^{-1}ds=-(1+s+s^2+\cdots)ds$, which has no $s^{-1}$ term. The sum is therefore zero. [F2, F5, step 1.2, algebra]

3.1 The single principal part at $0$ has positive residue sum $+1$ by step 1.2. By [F6], rational principal parts have total residue zero; regular local parts have zero residue, so this functional detects a nonzero cohomology class by [F7]. Since $h^1(\omega)=1$ by [F8], it generates the group. The fixed trace is $-1$ on this class by [F8], not $+1$ except in characteristic two. [F1, F6, F7, F8, step 1.2] ∎
