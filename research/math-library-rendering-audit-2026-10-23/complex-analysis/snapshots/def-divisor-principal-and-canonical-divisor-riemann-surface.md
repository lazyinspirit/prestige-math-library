---
id: def-divisor-principal-and-canonical-divisor-riemann-surface
kind: definition
title: Divisors, principal divisors and canonical divisors on a Riemann surface
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-riemann-surface-and-holomorphic-atlas
  - def-holomorphic-and-meromorphic-map-of-riemann-surfaces
  - thm-local-normal-form-holomorphic-map-riemann-surfaces
  - def-ramification-index-and-branch-value
  - thm-proper-holomorphic-map-riemann-surfaces-has-degree
  - def-meromorphic-differential-on-a-riemann-surface
  - def-meromorphic-function-complex-domain
  - def-isolated-singularity-types
  - thm-identity-theorem-holomorphic-functions
  - thm-compact-subset-of-a-hausdorff-space-is-closed
  - thm-closed-subspace-of-a-compact-space-is-compact
aliases: []
landmark: false
verification:
  audited: "2026-10-08"
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: Eduard Looijenga, Riemann Surfaces (2007 author lecture notes)
      url: https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf
      locator: "Ch. 4 §1, printed pp. 41–42: divisors, orders, principal and canonical divisors, linear equivalence and degree; Ch. 4 §2, printed pp. 43–44: multiplicities of maps"
    - title: Karl Otto Forster, Lectures on Riemann Surfaces (GTM 81, Springer 1981), translated by Bruce Gilligan
      url: http://ronan.terpereau.perso.math.cnrs.fr/Master_Class_2023_Dijon/FORSTER_Lectures%20on%20Riemann%20Surfaces.pdf
      locator: "§16.1–16.4, printed pp. 126–128: divisors, divisors of meromorphic functions and 1-forms, degree, and the sheaf O_D"
    - title: Curtis T. McMullen, Riemann Surfaces, Harvard Math 213b course notes (2026)
      url: https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf
      locator: "Ch. 9, printed pp. 83–86: divisors, linear equivalence and Riemann–Roch spaces; Ch. 6 Corollary 6.7, printed p. 57: the degree of a principal divisor on a compact surface is zero"
dependency_level: 0
---

## Definition

Let $X$ be a Riemann surface ([[def-riemann-surface-and-holomorphic-atlas]]). A **divisor** on $X$ is a function $D:X\to\mathbb Z$ whose support $\operatorname{supp}D:=\{p:D(p)\ne0\}$ is locally finite: every point has a neighbourhood meeting the support in only finitely many points. Write $D=\sum_{p\in X}D(p)[p]$. Divisors form the abelian group $\operatorname{Div}(X)$ under pointwise addition; $D$ is **effective**, written $D\ge0$, if every coefficient is nonnegative, and $D\ge D'$ means $D-D'\ge0$. If $X$ is compact, local finiteness and compactness imply that every divisor has finite support, and its **degree** is $\deg D:=\sum_pD(p)\in\mathbb Z$.

For a meromorphic function $f$ near $p$, define $\operatorname{ord}_p(f)=+\infty$ if its germ at $p$ is identically zero. Otherwise, in a coordinate $z$ with $z(p)=0$, write uniquely $f=z^m u$ with $m\in\mathbb Z$ and $u$ holomorphic and nonzero at $p$, and put $\operatorname{ord}_p(f):=m$. The value is independent of the coordinate, since a change of coordinate has the form $z'=zv(z)$ with $v(0)\ne0$. For a nonzero meromorphic function on connected $X$, no germ is identically zero: the set of points where it vanishes on a neighbourhood is open and closed, by the local identity theorem after clearing any pole, so connectedness makes that set either empty or all of $X$ ([[thm-identity-theorem-holomorphic-functions]]). Its zeros and poles are isolated, so
$$ (f):=\sum_{p\in X}\operatorname{ord}_p(f)[p] $$
is a divisor, called the **principal divisor** of $f$. At a zero of $f$ its order is the ramification index $e_p(f)$ of the map $f:X\to\widehat{\mathbb C}$ at $0$; at a pole it is $-e_p(f)$, using the target coordinate $1/w$ at $\infty$ ([[def-holomorphic-and-meromorphic-map-of-riemann-surfaces]], [[thm-local-normal-form-holomorphic-map-riemann-surfaces]], [[def-ramification-index-and-branch-value]], [[def-isolated-singularity-types]]). For nonzero meromorphic functions $f,g$, local orders add, so $(fg)=(f)+(g)$ and $(1/f)=-(f)$.

When $X$ is compact, every nonconstant meromorphic function $f$ has degree-zero principal divisor. Indeed, $f:X\to\widehat{\mathbb C}$ is continuous and the target is Hausdorff because it is the Riemann sphere ([[def-holomorphic-and-meromorphic-map-of-riemann-surfaces]], [[def-riemann-surface-and-holomorphic-atlas]]); if $K\subseteq\widehat{\mathbb C}$ is compact, then $K$ is closed, so $f^{-1}(K)$ is closed in compact $X$ and hence compact. Thus $f$ is proper. The degree theorem for proper holomorphic maps says that the sum of local degrees over each fibre is the same integer $d$ ([[thm-compact-subset-of-a-hausdorff-space-is-closed]], [[thm-closed-subspace-of-a-compact-space-is-compact]], [[thm-proper-holomorphic-map-riemann-surfaces-has-degree]]). Applied to the fibres over $0$ and $\infty$, this gives $\sum_{f(p)=0}\operatorname{ord}_p(f)=d=\sum_{f(p)=\infty}-\operatorname{ord}_p(f)$, hence $\deg((f))=0$; a nonzero constant also has divisor $0$. Two divisors are **linearly equivalent**, written $D\sim D'$, when $D-D'$ is principal.

For a nonzero meromorphic differential $\omega$ on $X$, the order $\operatorname{ord}_p(\omega)$ is the order of its local meromorphic coefficient in a coordinate. This is coordinate-independent because the transition factor for a differential is the derivative of a coordinate change, a holomorphic unit. The **canonical divisor** of $\omega$ is $(\omega):=\sum_p\operatorname{ord}_p(\omega)[p]$. If $\omega_1,\omega_2$ are nonzero meromorphic differentials, the local quotients of their coefficients glue to a nonzero meromorphic function $f=\omega_1/\omega_2$, and $(\omega_1)=(f)+(\omega_2)$; therefore all canonical divisors are linearly equivalent ([[def-meromorphic-differential-on-a-riemann-surface]]).

For a divisor $D$, set
$$L(D):=\{0\}\cup\{f\in\mathcal M(X): f\ne0\text{ and }(f)+D\ge0\},$$
where $\mathcal M(X)$ is the field of meromorphic functions on $X$. Equivalently, a nonzero $f$ lies in $L(D)$ exactly when $\operatorname{ord}_p(f)\ge-D(p)$ for every $p$. These local lower bounds are preserved under addition and scalar multiplication, so $L(D)$ is a $\mathbb C$-vector space. Put $\ell(D):=\dim_{\mathbb C}L(D)\in\mathbb N_0\cup\{\infty\}$. If $D\sim D'$ and $g$ is a nonzero meromorphic function with $(g)=D'-D$, then multiplication by $1/g$ gives an isomorphism $L(D)\to L(D')$, because for $f\in L(D)$,
$$ (f/g)+D'=(f)-(g)+D'=(f)+D\ge0; $$
its inverse is multiplication by $g$. The meromorphic functions on $X$ form a field under the usual local sum, product and reciprocal operations ([[def-meromorphic-function-complex-domain]]). In particular, when $X$ is compact and $\deg D<0$, the space $L(D)$ is zero: a nonzero $f\in L(D)$ would make the effective divisor $(f)+D$ have degree $\deg((f))+\deg D=\deg D<0$, impossible.
