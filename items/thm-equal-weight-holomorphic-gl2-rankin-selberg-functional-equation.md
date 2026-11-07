---
id: thm-equal-weight-holomorphic-gl2-rankin-selberg-functional-equation
kind: theorem
title: "Equal-Weight Holomorphic GL2 Rankin–Selberg Functional Equation"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-gl2-rankin-selberg-l-function
  - thm-completed-level-one-eisenstein-series-functional-equation
  - thm-hecke-adjoint-and-commuting-relations-congruence-forms
  - thm-hecke-preserves-cuspidality-on-congruence-subgroups
  - def-hecke-operator-on-congruence-forms
  - def-standard-l-function-of-a-gl2-eigenform
  - def-petersson-inner-product-on-congruence-forms
  - def-congruence-subgroup-of-sl2-z
  - def-congruence-modular-form-with-nebentypus
  - thm-q-expansion-principle-at-the-cusp
  - lem-full-level-holomorphic-cusp-form-coefficient-growth
  - thm-standard-fundamental-domain-for-the-modular-group
  - thm-bezout-identity
  - def-euler-gamma-function
  - thm-holomorphic-parameter-riemann-integral
  - thm-weierstrass-convergence-holomorphic-functions
  - thm-identity-theorem-holomorphic-functions
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Avi Zeff, The Rankin–Selberg Method, Columbia graduate notes"
      url: "https://www.math.columbia.edu/~avizeff/quals/Rankin-Selberg.pdf"
      locator: "Theorem 3 and the unfolding calculation, PDF pp. 5–7."
    - title: "S. D. Miller and W. Schmid, The Rankin–Selberg Method for Automorphic Distributions"
      url: "https://arxiv.org/pdf/math/0605783v1"
      locator: "§4, equations (4.35)–(4.45), printed pp. 23–25; the local classical specialization is proved here directly."
forward_refs: []
---

## Statement

Let $f,g$ be normalized full-level holomorphic Hecke cusp eigenforms of the
same even weight $k\ge2$, and let $L(s,f\times g)$ be their Rankin–Selberg
L-function in the coefficient normalization defined above. Put
$$\Gamma_{\mathbb C}(w):=2(2\pi)^{-w}\Gamma(w),\qquad
\Lambda(s,f\times g):=\Gamma_{\mathbb C}(s)
\Gamma_{\mathbb C}(s+k-1)L(s,f\times g),$$
where positive-real complex powers use the real logarithm. Then
$\Lambda(s,f\times g)$ extends meromorphically to $\mathbb C$, with no
possible poles except simple poles at $s=0$ and $s=1$, and it satisfies
$$\Lambda(s,f\times g)=\Lambda(1-s,f\times g).$$

## Statement references

[[def-gl2-rankin-selberg-l-function|the coefficient normalization of the Rankin–Selberg L-function]]

[[thm-completed-level-one-eisenstein-series-functional-equation|the completed level-one Eisenstein series]]

[[thm-hecke-adjoint-and-commuting-relations-congruence-forms|self-adjointness of the level-one Hecke operators]]

## Facts & Assumptions

**Given:** Normalized full-level holomorphic Hecke cusp eigenforms $f,g$ of
the same even weight $k\ge2$.

[F1] [[def-gl2-rankin-selberg-l-function]]: $L(s,f\times g)=\zeta(2s)\sum_{n\ge1}\lambda_f(n)\lambda_g(n)n^{-s}$ for $\operatorname{Re}s>2$, with $\lambda_h(n)=a_h(n)n^{-(k-1)/2}$.

[F2] [[thm-completed-level-one-eisenstein-series-functional-equation]]: $\mathcal E(z,s)$ is $SL_2(\mathbb Z)$-invariant, satisfies $\mathcal E(z,s)=\mathcal E(z,1-s)$, has at most simple poles at $0,1$ with residues independent of $z$, and after subtracting those residues has uniform polynomial growth on compact $s$-sets in the cusp.

[F3] [[def-congruence-modular-form-with-nebentypus]] and [[thm-q-expansion-principle-at-the-cusp]]: at level one and trivial character, $h(\gamma z)=(cz+d)^kh(z)$ for $\gamma=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in SL_2(\mathbb Z)$, and a cusp form has a Fourier expansion $h(z)=\sum_{n\ge1}a_h(n)e^{2\pi inz}$.

[F4] [[thm-hecke-adjoint-and-commuting-relations-congruence-forms]] and [[def-petersson-inner-product-on-congruence-forms]]: at level one with trivial character, $T_n$ is self-adjoint for the positive-definite Petersson inner product, which is linear in its first argument.

[F5] [[thm-hecke-preserves-cuspidality-on-congruence-subgroups]]: at level one the coefficient of $q^1$ in $T_nh$ is $a_h(n)$.

[F6] [[def-standard-l-function-of-a-gl2-eigenform]]: a normalized eigenform has $a_h(1)=1$ and satisfies $T_nh=\mu_h(n)h$ for every $n\ge1$.

[F7] [[lem-full-level-holomorphic-cusp-form-coefficient-growth]]: $|a_h(n)|\le C_hn^{k/2}$ and $(\operatorname{Im}z)^{k/2}|h(z)|$ is bounded on $\mathbb H$.

[F8] [[thm-standard-fundamental-domain-for-the-modular-group]]: the region $D=\{z=x+iy:|x|\le1/2,\ |z|\ge1\}$ is a fundamental region up to its boundary, and $y\ge\sqrt3/2$ on $D$.

[F9] [[thm-bezout-identity]]: every primitive integer pair $(c,d)$ is the bottom row of a matrix in $SL_2(\mathbb Z)$.

[F10] [[def-euler-gamma-function]]: for $\operatorname{Re}w>0$, $\Gamma(w)=\int_0^\infty e^{-u}u^{w-1}\,du$.

[F11] [[thm-holomorphic-parameter-riemann-integral]]: a jointly continuous integrand on a compact real interval, holomorphic in a complex parameter, has a holomorphic parameter integral.

[F12] [[thm-weierstrass-convergence-holomorphic-functions]]: a locally uniform limit of holomorphic functions is holomorphic.

[F13] [[thm-identity-theorem-holomorphic-functions]]: holomorphic functions on a complex domain that agree on a set with an accumulation point in that domain agree throughout the domain.

## Proof

**Given:** The forms $f,g$ and facts [F1]–[F13].

1.1 For each $n\ge1$, write $T_nf=\mu_f(n)f$. By [F4] and linearity in the first argument,
$$\mu_f(n)\langle f,f\rangle=\langle T_nf,f\rangle=\langle f,T_nf\rangle=\overline{\mu_f(n)}\langle f,f\rangle.$$
Since $f\ne0$ and [F4] is positive definite, $\mu_f(n)$ is real. By [F6], $a_f(1)=1$, so [F5] gives $\mu_f(n)=a_f(n)$; hence all $a_f(n)$ and $\lambda_f(n)$ are real. The same argument applies to $g$. [given, F4, F5, F6, algebra]

2.1 Put $\phi(z):=f(z)\overline{g(z)}y^k$ and $d\mu:=dx\,dy/y^2$. The equal-weight transformation laws in [F3] show that $\phi$ is invariant under $SL_2(\mathbb Z)$, and [F4] makes $\int_D|\phi|\,d\mu$ finite. On $D$ as $y\to\infty$, [F3] gives $f(z),g(z)=O(e^{-2\pi y})$, so $|\phi(z)|=O(y^ke^{-4\pi y})$. For a compact parameter set, [F2] bounds the regularized Eisenstein factor by a fixed power of $1+y$; therefore its product with $\phi/y^2$ has an integrable uniform tail on $D$. Truncate $D$ at height $R$. The change of variables $y=\sqrt{1-x^2}+t(R-\sqrt{1-x^2})$, with $-1/2\le x\le1/2$ and $0\le t\le1$, expresses the truncated integral as iterated compact-interval parameter integrals; [F11] makes it holomorphic in $s$. The uniform tail makes the truncated integrals converge locally uniformly, so [F12] makes the integral of the regularized factor entire. Adding back its two scalar residue terms shows that
$$P(s):=\int_D\mathcal E(z,s)\phi(z)\,d\mu$$
is meromorphic with at most simple poles at $0$ and $1$. [F2, F3, F4, F7, F11, F12, given, algebra, construct]

2.2 For $\operatorname{Re}s>1$, decompose each nonzero lattice pair as $(m,n)=r(c,d)$, where $r=\gcd(|m|,|n|)\ge1$ and $(c,d)$ is primitive, with the pair identified with its negative because of the factor $1/2$. By [F9], primitive pairs modulo sign correspond exactly to cosets of the stabilizer $\Gamma_\infty$ of $\infty$ in $PSL_2(\mathbb Z)$; two matrices with the same bottom row modulo sign differ by left translation. Summing $r^{-2s}$ gives
$$\mathcal E(z,s)=\pi^{-s}\Gamma(s)\zeta(2s)\sum_{\gamma\in\Gamma_\infty\backslash PSL_2(\mathbb Z)}\operatorname{Im}(\gamma z)^s.$$
The positive-integer powers use the real logarithm. [F2, F9, given, algebra, construct]

3.1 Fix $\operatorname{Re}s>2$. The absolute value of the unfolded integrand on the strip $0\le x\le1$, $y>0$ is integrable: for $0<y\le1$, [F7] gives $|\phi(z)|\le C$ and $y^{\operatorname{Re}s-2}$ is integrable; for $y\ge1$, the cusp bound in step 2.1 gives exponential decay. Since [F8] says the translates of $D$ tile $\mathbb H$ up to their boundary and the cosets $\Gamma_\infty\backslash PSL_2(\mathbb Z)$ partition those translates into $\Gamma_\infty$-orbits, the regions $\gamma D$ for these cosets tile a fundamental region for $\Gamma_\infty$. This stabilizer consists of integer translations, so $0\le x<1$, $y>0$ is such a region. Absolute convergence now permits summing and changing variables on each translate; invariance of $\phi$ and of $d\mu$ gives
$$P(s)=\pi^{-s}\Gamma(s)\zeta(2s)\int_0^\infty\!\int_0^1 f(x+iy)\overline{g(x+iy)}y^{s+k}\,\frac{dx\,dy}{y^2}.$$
The small-$y$ bound follows from $y^{k/2}|f|,y^{k/2}|g|\le C$ in [F7], so $|\phi|\le C$; the large-$y$ bound was established in step 2.1. [F2, F7, F8, step 2.1, step 2.2, given, algebra]

3.2 For fixed $y>0$, the cusp expansions in [F3] converge absolutely and uniformly for $0\le x\le1$. Multiplying them and integrating in $x$ retains only equal indices, hence
$$\int_0^1 f(x+iy)\overline{g(x+iy)}\,dx=\sum_{n\ge1}a_f(n)a_g(n)e^{-4\pi ny},$$
where step 1.1 gives reality of the coefficients. The resulting $y$-integral may be interchanged with this series: by [F7], the sum of the absolute integrated terms is bounded by a constant times $\sum_{n\ge1}n^{1-\operatorname{Re}s}$, which converges for $\operatorname{Re}s>2$. The Euler Gamma integral [F10] therefore gives
$$P(s)=\pi^{-s}\Gamma(s)\Gamma(s+k-1)(4\pi)^{-(s+k-1)}\zeta(2s)\sum_{n\ge1}a_f(n)a_g(n)n^{-(s+k-1)}.$$
Since $a_h(n)=\lambda_h(n)n^{(k-1)/2}$, the last Dirichlet series is $\sum_{n\ge1}\lambda_f(n)\lambda_g(n)n^{-s}$. [F1, F3, F7, F10, step 1.1, step 3.1, given, algebra]

3.3 Direct simplification of powers of $2$ and $\pi$ gives
$$\pi^{-s}\Gamma(s)\Gamma(s+k-1)(4\pi)^{-(s+k-1)}
=2^{-k-1}\Gamma_{\mathbb C}(s)\Gamma_{\mathbb C}(s+k-1).$$
Thus [F1] and step 3.2 imply $P(s)=2^{-k-1}\Lambda(s,f\times g)$ on $\operatorname{Re}s>2$. The meromorphic continuation of $P$ from step 2.1 supplies that of $\Lambda$, with no possible poles beyond $0,1$. [F1, step 2.1, step 3.2, algebra]

4.1 By [F2], $\mathcal E(z,s)=\mathcal E(z,1-s)$. Integrating this identity over $D$ against the invariant factor $\phi(z)d\mu$ gives $P(s)=P(1-s)$ for every $s\notin\{0,1\}$. Since both sides have at most simple poles at $0,1$, the function $s(s-1)(P(s)-P(1-s))$ is entire and vanishes on the open set $\mathbb C\setminus\{0,1\}$; [F13] makes it identically zero. The constant relation in step 3.3 then gives $\Lambda(s,f\times g)=\Lambda(1-s,f\times g)$. [F2, F13, step 2.1, step 3.3, algebra] ∎
