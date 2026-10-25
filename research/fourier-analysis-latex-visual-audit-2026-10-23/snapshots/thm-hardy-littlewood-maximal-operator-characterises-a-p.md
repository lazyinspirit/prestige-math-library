---
id: thm-hardy-littlewood-maximal-operator-characterises-a-p
kind: theorem
title: The Hardy-Littlewood maximal operator characterises A_p
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 8
deps: [def-muckenhoupt-a-p-and-a-one-weights, lem-a-p-dual-weight-and-nesting-properties, lem-a-p-weighted-average-comparison-and-density-to-mass, lem-a-p-weights-are-doubling, def-weighted-maximal-function-relative-to-a-doubling-weight, lem-weighted-maximal-function-is-weak-type-one-one, thm-marcinkiewicz-interpolation-for-weak-one-one-and-strong-infinity, thm-chebyshev-markov-inequality-for-the-integral, thm-monotone-convergence-for-the-integral, thm-holder-inequality-for-integrals, def-sublinear-operator-weak-and-strong-type-p-q, lem-ball-and-cube-maximal-functions-are-comparable, def-countable-choice, def-weight-and-weighted-lp-space, def-axis-parallel-cube-averages-and-cube-maximal-functions, lem-dyadic-cubes-all-generations-partition-and-nesting, thm-lebesgue-measure-of-a-box-of-every-kind]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed. (Springer GTM 249, 2014)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Theorem 7.1.9 (b) and its proof with (7.1.25)-(7.1.29), printed pp. 507-509, and the necessity computation (7.1.2)-(7.1.7), printed pp. 500-501"
    - title: "Juha Kinnunen, Harmonic Analysis (Aalto University lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/harmonic_analysis.pdf"
      locator: "Theorems 4.29 and 4.31 with §§4.3-4.4, printed pp. 81-85"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$1<p<\infty$ and let $w$ be a weight
([[def-weight-and-weighted-lp-space]]). Then the centred maximal operator $M$ is
bounded on $L^p(w)$ if and only if $w\in A_p$
([[def-muckenhoupt-a-p-and-a-one-weights]]); equivalently the uncentred and the
cube maximal operators are bounded on $L^p(w)$ exactly for $w\in A_p$. If
$w\in A_p$ then
$$\|Mf\|_{L^p(w)}\le C_{n,p}[w]_{A_p}^{1/(p-1)}\|f\|_{L^p(w)}\qquad(f\in L^p(w)),$$
and conversely if $M$ is of strong type $(p,p)$ with respect to $w\,d\lambda$
then $w\in A_p$.

## Facts & Assumptions

**Given:** Countable Choice, $1<p<\infty$, a weight $w$, and the exponent $p'=p/(p-1)$; for the sufficiency direction also $w\in A_p$ and the dual weight $\sigma:=w^{-1/(p-1)}$.

[F1] $A_p$ weights are doubling, $\sigma\in A_{p'}$ with $[\sigma]_{A_{p'}}=[w]_{A_p}^{1/(p-1)}$, and for every cube $Q$ $\langle w\rangle_Q\langle\sigma\rangle_Q^{p-1}\le[w]_{A_p}$ ([[lem-a-p-dual-weight-and-nesting-properties]], [[lem-a-p-weights-are-doubling]], [[def-muckenhoupt-a-p-and-a-one-weights]]).

[F2] Marcinkiewicz interpolation gives $\|Su\|_{L^q(\mu)}\le a_q\|u\|_{L^q(\mu)}$ for $q>1$ whenever $S$ is sublinear, weak $(1,1)$ with constant one and bounded on $L^\infty$ with constant one; here $a_q=2(q/(q-1))^{1/q}$ ([[thm-marcinkiewicz-interpolation-for-weak-one-one-and-strong-infinity]]).

[F3] Dyadic cubes partition each generation and are nested or disjoint; all face conventions have the same volume and null boundaries ([[lem-dyadic-cubes-all-generations-partition-and-nesting]], [[thm-lebesgue-measure-of-a-box-of-every-kind]]). The shifted grids used below have the same properties by the explicit boundary calculation in Proof 1.1.

[F4] Chebyshev's inequality and monotone convergence ([[thm-chebyshev-markov-inequality-for-the-integral]], [[thm-monotone-convergence-for-the-integral]]); the ball and cube maximal operators are pointwise comparable by a dimensional constant, as are their centred and uncentred versions ([[lem-ball-and-cube-maximal-functions-are-comparable]]).

## Proof

**Proof technique:** direct.

1.1 Finite dyadic covering. For $a\in\{0,1/3,2/3\}^n$ use the grid $\mathcal D^a$ of half-open cubes $2^{-k}(m+(-1)^ka+(0,1]^n)$, $k\in\mathbb Z$, $m\in\mathbb Z^n$. The boundary offset of a parent, in child units, differs from the child offset by $-3(-1)^ka\in\mathbb Z^n$, so the grids are nested and partition each generation. Given an open cube $Q$ of side $\ell$, choose a scale $L=2^{-k}$ with $3\ell<L\le6\ell$. In each coordinate the boundary sets of the three offsets are separated by $L/3$, so an interval of length $\ell$ meets boundaries from at most one offset. Choose an offset avoiding its closure, coordinate by coordinate; then $Q$ is contained in one $R\in\mathcal D^a$ of side $L$, with $|R|\le6^n|Q|$. Consequently $M_c^*f\le6^n\max_aM_{\mathcal D^a}f$, where $M_{\mathcal D}f=\sup_{R\in\mathcal D,\,x\in R}|R|^{-1}\int_R|f|$. [F3, given, construct, algebra]

1.2 Uniform weighted dyadic bounds. For any locally finite measure $\mu=v\,d\lambda$ with $v$ a weight, set $M_{\mathcal D}^{\mu}u(x)=\sup_{R\in\mathcal D,\,x\in R}\mu(R)^{-1}\int_R|u|\,d\mu$. Restrict first to generations $-N\le k\le N$. The maximal bad cubes at height $t>0$ exist because ancestor chains are finite; they are countable and disjoint, and cover the restricted superlevel set, so its $\mu$-measure is at most $t^{-1}\int|u|\,d\mu$. Letting $N\to\infty$ gives weak $(1,1)$ with constant one. The operator is sublinear and bounded on $L^\infty(\mu)$ with constant one, so [F2] gives $\|M_{\mathcal D}^{\mu}u\|_{L^q(\mu)}\le a_q\|u\|_{L^q(\mu)}$, independently of $v$ and its doubling constant. Measurability follows from the countable grid. [F2, F3, given, algebra]

1.3 Sufficiency, pointwise estimate. Suppose $w\in A_p$, let $\sigma=w^{-1/(p-1)}$, and fix one grid. Set $u=|f|\sigma^{-1}$, $F=M_{\mathcal D}^{\sigma}u$ and $h=F^{p-1}w^{-1}$, with powers assigned arbitrarily on the common null set where $w$ or $\sigma$ is not positive finite. For every grid cube $R$ and almost every $y\in R$, $F(y)\ge\sigma(R)^{-1}\int_R|f|$. Thus $\langle|f|\rangle_R\le(\sigma(R)/|R|)F(y)$. Raise to $p-1$ and integrate with respect to Lebesgue measure over $R$ to get $(\langle|f|\rangle_R)^{p-1}\le(\sigma(R)/|R|)^{p-1}|R|^{-1}\int_RF^{p-1}\le[w]_{A_p}w(R)^{-1}\int_Rh\,w$. The $A_p$ bound holds also for half-open cubes because their boundaries are null. Taking suprema at $x$ yields $M_{\mathcal D}f(x)\le[w]_{A_p}^{1/(p-1)}(M_{\mathcal D}^{w}h(x))^{1/(p-1)}$. [F1, F3, given, algebra]

2.1 Sufficiency, norm estimate. We have $\|u\|_{L^p(\sigma)}=\|f\|_{L^p(w)}$ and $h^{p'}w=F^p\sigma$. Step 1.2 therefore ensures $F\in L^p(\sigma)$ and $h\in L^{p'}(w)$, and step 1.3 gives $\|M_{\mathcal D}f\|_{L^p(w)}\le[w]_{A_p}^{1/(p-1)}a_{p'}^{1/(p-1)}\|h\|_{L^{p'}(w)}^{1/(p-1)}\le[w]_{A_p}^{1/(p-1)}a_{p'}^{1/(p-1)}a_p\|f\|_{L^p(w)}$. By step 1.1, the maximum over the $3^n$ grids has norm at most $3^{n/p}$ times this bound. The ball/cube comparisons [F4] give the displayed estimate for all the stated maximal functions, with a constant depending only on $n,p$. [F4, step 1.1, step 1.2, step 1.3, given, algebra]

3.1 Necessity. Suppose $\|Mf\|_{L^p(w)}\le C\|f\|_{L^p(w)}$ for locally integrable inputs in $L^p(w)$. By [F4], $M_c^*$ has bound $C_0=C_nC$. For a cube $Q$ put $f_\varepsilon=\mathbf1_Q(w+\varepsilon)^{-1/(p-1)}$, setting it to zero on the null set of exceptional weight values. It is bounded, compactly supported, and belongs to $L^p(w)$. On $Q$, $M_c^*f_\varepsilon\ge\langle f_\varepsilon\rangle_Q$. Since $f_\varepsilon^pw\le f_\varepsilon$, the norm bound implies $w(Q)\langle f_\varepsilon\rangle_Q^p\le C_0^p\int_Qf_\varepsilon$, hence $\langle w\rangle_Q\langle f_\varepsilon\rangle_Q^{p-1}\le C_0^p$. Let $\varepsilon=1/j\downarrow0$ and use monotone convergence [F4] to obtain $\langle w\rangle_Q\langle w^{-1/(p-1)}\rangle_Q^{p-1}\le C_0^p$ for every cube. Thus $w\in A_p$, completing both directions. [F4, step 2.1, given, algebra] ∎
