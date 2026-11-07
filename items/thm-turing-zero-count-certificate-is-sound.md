---
id: thm-turing-zero-count-certificate-is-sound
kind: theorem
title: "A verified Turing certificate proves the stated zero count"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - alg-interval-arithmetic-for-l-function-zero-counts
  - alg-turing-method-for-rigorous-zero-counts
  - thm-cauchy-integral-formula-circle
  - thm-taylor-expansion-holomorphic-function
  - thm-cauchy-integral-formula-higher-derivatives
  - cor-ml-estimate-for-complex-line-integrals
  - thm-termwise-differentiation-of-complex-power-series
  - thm-simple-polygon-admits-a-triangulation
  - thm-goursat-triangle-theorem
  - thm-argument-principle-null-homologous-cycle
  - def-weighted-zero-and-pole-counts-on-cycle
  - def-admissible-cycle-for-residue-theorem
  - lem-trigonometric-identities-machin-and-range-reduction
  - thm-principal-inverse-tangent-calculus
  - thm-alternating-series-test
  - lem-geometric-sequence-null
proof_strategy: direct
sources:
  references:
    - title: "David J. Platt, Isolating some non-trivial zeros of zeta, §4"
      url: "https://community.ams.org/journals/mcom/2017-86-307/S0025-5718-2017-03198-7/S0025-5718-2017-03198-7.pdf"
    - title: "Nickolas Andersen, Analytic Number Theory, §11.2"
      url: "https://mathdept.byu.edu/~nick/ucla/205a/205a-notes.pdf"
---

## Statement

Let $D$ be a bounded rational Jordan polygon with positively oriented boundary $\Gamma$, let $\Omega$ be an open neighbourhood of $\overline D$, and let $F$ be holomorphic on $\Omega$. Assume $\Gamma$ is admissible for the residue theorem in $\Omega$. If a valid interval certificate for $F$ is accepted by the Turing zero-count algorithm's choice-free generic contour-count mode with output $n$, then the weighted zero count of $F$ about $\Gamma$, including multiplicities, equals $n$. This soundness implication is choice-free.


The weighted count is taken for $F$ restricted to the connected component of $\Omega$ containing $\overline D$.
## Statement references

[David J. Platt, *Isolating some non-trivial zeros of zeta*, §4](https://community.ams.org/journals/mcom/2017-86-307/S0025-5718-2017-03198-7/S0025-5718-2017-03198-7.pdf)

[Nickolas Andersen, *Analytic Number Theory*, §11.2](https://mathdept.byu.edu/~nick/ucla/205a/205a-notes.pdf)

## Facts & Assumptions

**Given:** A bounded rational Jordan polygon $D$ with positively oriented boundary $\Gamma$, an open neighbourhood $\Omega\supseteq\overline D$, a function $F$ holomorphic on $\Omega$, admissibility of $\Gamma$ in $\Omega$, and a valid interval certificate accepted in the generic contour-count mode with output $n$.

[F1] [[alg-interval-arithmetic-for-l-function-zero-counts]]: exact rational interval operations propagate the supplied Taylor coefficient rectangles and the Cauchy remainder bounds; its arctangent series rule returns a rational interval containing $\pi$.

[F2] [[alg-turing-method-for-rigorous-zero-counts]]: acceptance requires every boundary value enclosure to exclude $0$ and the normalized logarithmic-derivative integral enclosure to have a unique integer $n$ in its real interval and $0$ in its imaginary interval.

[F3] [[thm-cauchy-integral-formula-circle]]: for a holomorphic function on a disc, the Cauchy integral formula gives its Taylor coefficients by integrating over a contained positively oriented circle.

[F4] [[thm-argument-principle-null-homologous-cycle]]: for a meromorphic function not identically zero on any component and with no zeros on an admissible cycle, $\frac{1}{2\pi i}\int_\Gamma F'(z)/F(z)\,dz=Z(F,\Gamma)-P(F,\Gamma)$.

[F5] [[def-weighted-zero-and-pole-counts-on-cycle]]: $Z(F,\Gamma)$ and $P(F,\Gamma)$ count zeros and poles with their orders and winding indices.

[F6] [[def-admissible-cycle-for-residue-theorem]]: admissibility requires the cycle trace to avoid poles and the cycle to be null-homologous in $\Omega$.

[F7] [[lem-trigonometric-identities-machin-and-range-reduction]]: $\pi=16\arctan(1/5)-4\arctan(1/239)$.

[F8] [[thm-principal-inverse-tangent-calculus]]: for $|x|<1$, $\arctan x=\sum_{k=0}^{\infty}(-1)^kx^{2k+1}/(2k+1)$.

[F9] [[thm-alternating-series-test]]: if $b_k\ge0$ is nonincreasing and tends to $0$, the error after $n$ terms of $\sum_{k\ge0}(-1)^kb_k$ has magnitude at most $b_n$.

[F10] [[lem-geometric-sequence-null]]: if $0<x<1$, then $x^n\to0$.

[F11] [[thm-taylor-expansion-holomorphic-function]]: a holomorphic function equals its Taylor series throughout every contained centred disc.

[F12] [[thm-cauchy-integral-formula-higher-derivatives]]: the $k$th derivative has the stated Cauchy circle integral formula.

[F13] [[cor-ml-estimate-for-complex-line-integrals]]: a contour integral is bounded by the product of the contour length and an upper bound for the integrand.

[F14] [[thm-termwise-differentiation-of-complex-power-series]]: a complex power series may be differentiated term by term in its disc of convergence.

[F15] [[thm-simple-polygon-admits-a-triangulation]]: a simple polygon has a finite triangulation.

[F16] [[thm-goursat-triangle-theorem]]: a holomorphic function integrates to zero around a filled triangle contained in its domain.

## Proof

1.1 On each supplied Taylor disc $|z-c|\le R$, the holomorphic neighbourhood of the closed disc contains a slightly larger centred disc. By [F11] the Taylor series equals $F$ there; [F12] gives $a_k=F^{(k)}(c)/k!=\frac{1}{2\pi i}\int_{|\zeta-c|=R}F(\zeta)(\zeta-c)^{-k-1}\,d\zeta$. The certified bound $|F|\le M$ and the circle length $2\pi R$ give $|a_k|\le M/R^k$ by [F13]. For $\rho=r/R<1$, the two geometric sums are $$\sum_{k=n+1}^{\infty}\rho^k=\frac{\rho^{n+1}}{1-\rho},\qquad \sum_{k=n+1}^{\infty}k\rho^{k-1}=\rho^n\left(\frac{n+1}{1-\rho}+\frac{\rho}{(1-\rho)^2}\right).$$ Thus $|F-P_n|\le M\rho^{n+1}/(1-\rho)$ on the smaller disc; [F14] justifies differentiating the convergent series and gives the stated derivative radius $\frac{M}{R}\rho^n\bigl(\frac{n+1}{1-\rho}+\frac{\rho}{(1-\rho)^2}\bigr)$. Exact endpoint rules then enclose each polynomial value and derivative, so the returned rectangles contain $F$ and $F'$. [given, F1, F3, F11, F12, F13, F14, algebra]

1.2 Fix $x\in\{1/5,1/239\}$ and put $b_k=x^{2k+1}/(2k+1)$. Then $b_k>0$, $b_{k+1}/b_k=x^2(2k+1)/(2k+3)<1$, and $b_k\le x^{2k+1}\to0$ by [F10]. By [F8] the series defining $\arctan x$ is alternating with these decreasing terms, so [F9] bounds the error after its first $N+1$ terms by $b_{N+1}=x^{2N+3}/(2N+3)=e_N(x)$. The first omitted term has sign $(-1)^{N+1}$, hence the interval used in [F1] contains $\arctan x$. Combining the two such intervals with the exact identity [F7] by rational interval addition and scalar multiplication gives a rational interval containing $\pi$. [given, F1, F7, F8, F9, F10, algebra]

1.3 On each boundary cell the accepted value rectangle excludes $0$, so division is valid and [F1] encloses $g(t):=F'(\gamma(t))\gamma'(t)/F(\gamma(t))$ throughout that cell. If $G_j=[u,v]+i[w,x]$, then $u\le\operatorname{Re}g(t)\le v$ and $w\le\operatorname{Im}g(t)\le x$ at every point of the cell; integrating these four real inequalities shows that $\int_{t_{j-1}}^{t_j}g(t)\,dt\in(t_j-t_{j-1})G_j$. Summing these enclosures and using the interval for $\pi$ gives a rectangle containing $\frac{1}{2\pi i}\int_\Gamma F'(z)/F(z)\,dz$. [given, F1, F2]

2.1 The accepted boundary enclosures exclude $0$, so $F$ has no boundary zero. Let $\Omega_0$ be the connected component of $\Omega$ containing the connected set $\overline D$. It is open, contains $\Gamma$ and $\overline D$, and $F|_{\Omega_0}$ is not identically zero because it is nonzero on $\Gamma$. The restricted cycle remains null-homologous in $\Omega_0$: for any $w\notin\Omega_0$, the filled polygon $\overline D$ avoids $w$; triangulate it by [F15] and apply [F16] to $z\mapsto1/(z-w)$ on each triangle. Internal oriented edges cancel, so $\int_\Gamma dz/(z-w)=0$. The cycle is therefore admissible in $\Omega_0$ by [F6]. Apply [F4] to $F|_{\Omega_0}$; its pole count is zero, and [F5] identifies the resulting integer with the weighted zero count about $\Gamma$. Components outside $\Omega_0$ have index zero and contribute nothing; no nonvanishing assumption is imposed on $F$ there. The accepted real interval contains exactly one integer $n$ and its imaginary interval contains $0$, so the enclosed weighted zero count equals $n$. [given, F2, F4, F5, F6, F15, F16, step 1.3, construct, algebra] ∎
