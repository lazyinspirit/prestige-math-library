---
id: thm-meromorphic-continuation-and-intertwining-identity-for-a-nu
kind: theorem
title: Meromorphic continuation and intertwining identity for A(nu)
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 6
deps:
  - def-standard-intertwining-operator-for-sl2-r
  - def-normalized-principal-series-i-epsilon-nu
  - thm-compact-picture-of-the-sl2-principal-series
  - lem-k-type-decomposition-of-the-sl2-principal-series
  - lem-sl2-raising-and-lowering-formulas-in-the-compact-picture
  - lem-k-type-eigenvalue-recurrence-for-the-sl2-intertwiner
  - def-axiom-of-choice
  - lem-ac-supplies-countable-and-dependent-choice-for-banach-integration
  - thm-iwasawa-decomposition-for-sl2-r
  - def-iwasawa-and-minimal-parabolic-data-for-sl2-r
  - thm-algebra-of-derivatives
  - thm-chain-rule
  - lem-complex-integration-by-parts-on-intervals-and-decaying-lines
  - thm-weierstrass-m-test-for-complex-function-series
  - thm-uniform-derivative-limit-on-a-closed-interval
  - thm-p-series-rational
  - thm-cauchy-integral-formula-and-cauchy-estimates-for-banach-valued-holomorphic-functions
  - rem-real-and-complex-normed-space-convention
  - lem-complex-conjugation-and-modulus-laws
  - def-complex-metric-convergence-and-continuity
  - def-the-one-dimensional-torus-and-normalized-haar-integral
  - thm-extreme-value-metric
  - cor-complex-differentiability-implies-continuity
  - thm-complex-plane-is-complete
  - def-banach-space
  - thm-identity-theorem-holomorphic-functions
  - cor-zero-derivative-implies-constant
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pavel Etingof, Representations of Lie Groups (MIT 18.757 lecture notes, Fall 2023)"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
      locator: "§9.1–9.2, printed pp. 48–50: algebraic equivalence P±(s) ≅ P±(−s) off the reducibility lattice and the smooth circle model"
    - title: "Matt Kerr, Notes on the Representation Theory of SL2(R) (CBMS workshop writeup)"
      url: "https://www.math.wustl.edu/~matkerr/sl2notes.pdf"
      locator: "§2, Exercise 2.8(i)–(iii), printed p. 12: the integral intertwines the G action and is nonzero off the reducibility lattice; the exercise does not prove meromorphic continuation"
    - title: "Emmanuel Kowalski, An Introduction to the Representation Theory of Groups (AMS GSM 155; author's PDF)"
      url: "https://people.math.ethz.ch/~kowalski/representation-theory.pdf"
      locator: "§7.4, Proposition 7.4.3(3) (statement p. 294, discussion pp. 301–302) and Exercise 7.4.12 (p. 302): unitary-character equivalence, with construction of the inverse-character intertwiner left as an exercise"
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $\varepsilon\in\{0,1\}$, and let $A(\nu)$ and its eigenvalues $c_n(\nu)$ be as in [[def-standard-intertwining-operator-for-sl2-r]] and [[lem-k-type-eigenvalue-recurrence-for-the-sl2-intertwiner]].

- **(Meromorphic continuation.)** Each eigenvalue $c_n(\nu)$ extends to a meromorphic function on $\mathbb C$, with no zeros outside the exceptional lattice $\mathcal W_\varepsilon$; the family $A(\nu)$ has a unique meromorphic continuation in $\nu$ as a family of continuous $K$-diagonal maps on the smooth compact-picture spaces.

- **(Intertwining identity.)** For every $\nu$ at which the continuation is regular, $A(\nu)\Pi_\nu(g)=\Pi_{-\nu}(g)A(\nu)$ on smooth compact-picture vectors (and therefore on the algebraic $K$-finite core where its derived action is defined). If $\nu\notin\mathcal W_\varepsilon$ and both $A(\nu)$ and $A(-\nu)$ are regular, then $A(-\nu)A(\nu)$ is the scalar $c_{n_0}(\nu)c_{n_0}(-\nu)$ on every $K$-type of parity $\varepsilon$, where $n_0=0$ for $\varepsilon=0$ and $n_0=1$ for $\varepsilon=1$. At these parameters, $\widehat A(\nu):=A(\nu)/c_{n_0}(\nu)$ satisfies $\widehat A(-\nu)\widehat A(\nu)=\mathrm{id}$ and $\widehat c_n(-\nu)\widehat c_n(\nu)=1$, where $\widehat c_n(\nu)=c_n(\nu)/c_{n_0}(\nu)$.

## Facts & Assumptions

**Given:** AC, $\varepsilon\in\{0,1\}$, the normalized smooth principal-series models, and the standard integral $A(\nu)$ on its initial half-plane $\operatorname{Re}\nu>0$.

[F1] For $\operatorname{Re}\nu>0$, $A(\nu)$ is the absolutely convergent integral over $N$ of [[def-standard-intertwining-operator-for-sl2-r]]; its right-translation action is the smooth compact-picture action [[def-normalized-principal-series-i-epsilon-nu]], [[thm-compact-picture-of-the-sl2-principal-series]]. The full-family continuation left open in the Definition is not assumed here; it is proved below.

[F2] For every $r\equiv\varepsilon\pmod2$, the eigenvalue has the meromorphic Gamma expression, cross-multiplied recurrence, and symmetry $c_{-r}(\nu)=(-1)^r c_r(\nu)$ in [[lem-k-type-eigenvalue-recurrence-for-the-sl2-intertwiner]]. Gamma has simple poles at the nonpositive integers, no zeros, and reciprocal Gamma is entire with simple zeros exactly at those poles, as used in that supplier.

[F3] The compact picture identifies smooth vectors with $C^\infty_\varepsilon(K)$, whose K-types are $f_r(k_\theta)=e^{ir\theta}$ for $r\equiv\varepsilon\pmod2$; in this angle coordinate normalized Haar measure is $dk=d\theta/(2\pi)$ ([[thm-compact-picture-of-the-sl2-principal-series]], [[lem-k-type-decomposition-of-the-sl2-principal-series]], [[def-iwasawa-and-minimal-parabolic-data-for-sl2-r]], [[def-the-one-dimensional-torus-and-normalized-haar-integral]]).

[F4] AC supplies countable choice, which is the countable-choice premise of complex integration by parts and the Cauchy integral estimates ([[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]], [[def-axiom-of-choice]]).

[F5] The usual modulus makes $\mathbb C$ a complex normed space ([[rem-real-and-complex-normed-space-convention]], [[lem-complex-conjugation-and-modulus-laws]]); its norm metric is $d(z,w)=|z-w|$ ([[def-complex-metric-convergence-and-continuity]]), which is complete ([[thm-complex-plane-is-complete]]), so $\mathbb C$ is a complex Banach space by [[def-banach-space]]. The Banach-valued Cauchy theorem therefore gives Taylor expansions and coefficient estimates for scalar holomorphic functions on discs ([[thm-cauchy-integral-formula-and-cauchy-estimates-for-banach-valued-holomorphic-functions]]).

[F6] Complex integration by parts on a period interval gives rapid decay of Fourier coefficients of a smooth periodic function ([[lem-complex-integration-by-parts-on-intervals-and-decaying-lines]]). The Weierstrass M-test, uniform derivative-limit theorem, and convergence of $\sum_{m\ge1}m^{-2}$ justify uniform convergence and termwise angular differentiation ([[thm-weierstrass-m-test-for-complex-function-series]], [[thm-uniform-derivative-limit-on-a-closed-interval]], [[thm-p-series-rational]]).

[F7] The smooth compact-picture action is differentiable in the real Lie-algebra directions with the displayed ladder operators, and the ordinary real product and chain rules apply ([[lem-sl2-raising-and-lowering-formulas-in-the-compact-picture]], [[thm-algebra-of-derivatives]], [[thm-chain-rule]]).

[F8] Every group element has a $KAN$ factorization; the factors are generated by the one-parameter subgroups from $J$, $H/2$, and $E_0=(S+J)/2$ ([[thm-iwasawa-decomposition-for-sl2-r]], [[def-iwasawa-and-minimal-parabolic-data-for-sl2-r]]).

[F9] Two holomorphic functions on a connected complex domain that agree on a nonempty open set agree throughout the domain ([[thm-identity-theorem-holomorphic-functions]]).

[F10] A real-valued function continuous on an interval and differentiable with zero derivative at every interior point is constant there ([[cor-zero-derivative-implies-constant]]).

[F11] Holomorphic functions are continuous ([[cor-complex-differentiability-implies-continuity]]), and a continuous real-valued function on a compact metric space is bounded and attains its maximum ([[thm-extreme-value-metric]]).

[A1] AC supplies normalized Haar probability on $K$ for the compact Fourier coefficients and implies the countable-choice premises of [F4]–[F6]; no additional choice is used ([[def-axiom-of-choice]], [[def-iwasawa-and-minimal-parabolic-data-for-sl2-r]], [F4]).

## Proof

**Proof technique:** continue the K-type multipliers with uniform polynomial bounds, then integrate the resulting derived intertwining identity along the real one-parameter subgroups.

1.1 For $r\equiv\varepsilon\pmod2$, write the Gamma expression from [F2] as $c_r(\nu)=(-i)^r\sqrt\pi\,\Gamma(\nu/2)\Gamma((\nu+1)/2)\big/\bigl(\Gamma((\nu+r+1)/2)\Gamma((\nu-r+1)/2)\bigr)$. Its numerator has no zeros and only simple poles at nonpositive integers. The denominator contributes zeros only when $\nu=-r-1-2j$ or $\nu=r-1-2j$ for some $j\ge0$, and each such parameter belongs to $\mathcal W_\varepsilon$; hence $c_r$ has no zeros outside that lattice. At a possible numerator pole $\nu=-m$, if $m\equiv\varepsilon\pmod2$ the denominator arguments are half-integers and do not cancel the simple pole; if $m\not\equiv\varepsilon\pmod2$, the two denominator arguments are integers with at least one nonpositive, so a reciprocal-Gamma zero cancels the numerator pole. Thus all scalar poles are simple and lie in the locally finite set $P_\varepsilon=\{-m:m\in\mathbb N_0,\ m\equiv\varepsilon\pmod2\}$. [F2, algebra]

2.1 For each center $\nu_*\in\mathbb C$, choose $\rho>0$ so that the closed disc $D=\overline{D(\nu_*,\rho)}$ has boundary disjoint from $P_\varepsilon$ and its intersection with $P_\varepsilon$ is either empty or $\{\nu_*\}$; this is possible because $P_\varepsilon$ is locally finite. Put $h(\nu)=1$ if $\nu_*\notin P_\varepsilon$ and $h(\nu)=\nu-\nu_*$ if $\nu_*\in P_\varepsilon$. Every $h c_r$ is holomorphic on a neighbourhood of $D$ by step 1.1. Let $M=|\nu_*|+\rho$, so $|\nu|\le M$ on $D$ by the triangle inequality for the complex modulus. Choose a nonnegative $r_0$ in the parity lattice so large that $r+1\ge 2M$ for every $r\ge r_0$, and choose an integer $L\ge\max(1,4M)$. The cross-multiplied recurrence in [F2], with $h$ multiplied into both sides, gives $|h(\nu)c_{r+2}(\nu)|\le \frac{r+1+M}{r+1-M}|h(\nu)c_r(\nu)|\le(1+\frac{L}{r+1})|h(\nu)c_r(\nu)|$ for $\nu\in D$ and $r\ge r_0$; the denominator here is the scalar $|r+1+\nu|\ge r+1-M>0$, and no division by $c_r(\nu)$ is used. Since $h c_{r_0}$ is bounded on $D$, iteration bounds $|h(\nu)c_r(\nu)|$ by a constant times $\prod_{k=1}^{N}(1+L/k)=\binom{N+L}{L}\le(N+L)^L$, where $N$ is the number of recurrence steps from $r_0$ to $r$; hence $|h(\nu)c_r(\nu)|\le C(1+|r|)^L$ uniformly. The finitely many smaller indices are bounded by holomorphy, and negative indices obey the same estimate by the symmetry in [F2]. [F2, F11, step 1.1, algebra]

3.1 Using the angular Haar normalization in [F3], put $\widehat f(r)=(2\pi)^{-1}\int_0^{2\pi}f(k_\theta)e^{-ir\theta}\,d\theta$. For every positive integer $N$, periodicity removes the boundary terms in [F6], giving $|\widehat f(r)|\le p_N(f)|r|^{-N}$ for $r\ne0$, where $p_N(f)=\max_{0\le j\le N}\|\partial_\theta^j f\|_\infty$. For each derivative order $q$, take $N=q+2$; integration by parts gives $(ir)^q\widehat f(r)=\widehat{\partial_\theta^q f}(r)$ and the differentiated Fourier terms are bounded by $p_N(f)|r|^{-2}$. The M-test and p-series fact [F6], applied separately to the positive and negative parity tails, give uniform convergence of the input Fourier series and every derivative series. The uniform derivative-limit theorem applied successively to real and imaginary parts shows these limits are the derivatives of the sum; their Fourier coefficients match those of $f$ and its derivatives, so completeness in [F3] and continuity identify them with those functions. Hence Fourier partial sums converge to $f$ in every $C^q$ seminorm. Next, for each angular derivative order $q$, choose $N=L+q+2$ in step 2.1; the differentiated terms of $\sum_r h(\nu)c_r(\nu)\widehat f(r)e^{ir\theta}$ are bounded by $C p_N(f)(1+|r|)^{-2}$. Applying the M-test separately to the positive and negative parity tails gives uniform convergence on the circle, locally uniformly in $\nu$, for this multiplier series and every angular derivative; applying the uniform derivative-limit theorem to real and imaginary parts shows its sum is smooth and the derivatives are the termwise derivatives. In particular each regular $A(\nu)$ defined by this series is a continuous linear map $C^\infty_\varepsilon(K)\to C^\infty_\varepsilon(K)$, with each output seminorm bounded by a constant times one input seminorm. [F3, F4, F6, F11, A1, step 2.1]

4.1 The same polynomial bound makes the meromorphic family holomorphic in the smooth topology after multiplication by $h$. Choose concentric parameter discs $\overline{D(\nu_*,R)}\subset D(\nu_*,S)$ with $0<R<S$ and closed radius-$S$ disc contained in the neighbourhood from step 2.1. Cauchy's coefficient estimate [F5] gives Taylor coefficients $a_{r,j}$ of $h c_r$ at $\nu_*$ with $|a_{r,j}|\le C(1+|r|)^L S^{-j}$. For each $j$, the Fourier multiplier $T_j f=\sum_r a_{r,j}\widehat f(r)e^{ir\theta}$ is smooth by the argument of step 3.1 and satisfies $p_q(T_jf)\le C_q S^{-j}p_{L+q+2}(f)$. Therefore, on every smaller closed parameter disc of radius $\rho<S$, $\sum_{j\ge0}T_jf(\nu-\nu_*)^j$ converges in every $C^q$ seminorm, uniformly for $f$ in bounded subsets of $C^\infty_\varepsilon(K)$. Its Fourier coefficients are the holomorphic values $(h c_r)(\nu)\widehat f(r)$; for regular $\nu$, completeness in [F3] makes the sum equal to $h(\nu)A(\nu)f$, and its value at $\nu_*$ is the removable extension when $\nu_*\in P_\varepsilon$ (and the ordinary value otherwise). This is the required local power-series definition of a meromorphic family of continuous K-diagonal maps on $C^\infty_\varepsilon(K)$. [F3, F5, F11, step 2.1, step 3.1]

4.2 On $\operatorname{Re}\nu>0$, the operator from [F1] agrees with the Fourier multiplier in step 3.1: they agree on finite Fourier sums by [F2], and for a general smooth $f$ its Fourier partial sums converge uniformly by step 3.1 while the compact-picture integral satisfies $\|A(\nu)(f-f_N)\|_\infty\le C_\nu\|f-f_N\|_\infty$, since for $k\in K$ the bottom-row norm in the integral is $\sqrt{1+u^2}$ and $(1+u^2)^{-(1+\operatorname{Re}\nu)/2}$ is integrable. Thus the series is a continuation of the stated integral. Any other meromorphic K-diagonal continuation has on each K-type a scalar meromorphic coefficient agreeing with $c_r$ on this open half-plane; clearing local pole factors and applying [F9] on connected parameter discs makes the coefficients equal as meromorphic functions. The two continuous operators then agree on finite Fourier sums and, by the density from step 3.1, on all of $C^\infty_\varepsilon(K)$, proving uniqueness. [F1, F2, F3, F9, step 3.1]

4.3 The recurrence in [F2], interpreted cross-multiplied at zero denominators, gives $A(\nu)L_{E_+}^{\nu}f_r=L_{E_+}^{-\nu}A(\nu)f_r$ on every allowed K-type; the same recurrence at index $r-2$ gives the $E_-$ identity, and K-diagonality gives the $W$ identity. These are meromorphic scalar equalities, so they hold at every regular parameter. By linearity they hold for the real generators $J,H,S$ on finite Fourier sums; their operators are continuous on $C^\infty$ by [F7], and step 3.1 gives density of Fourier sums in that topology, so the derived intertwining identities hold on all smooth vectors. [F2, F3, F7, step 3.1]

5.1 Fix a real generator $X\in\{J,H,(S+J)/2\}$ and a smooth $f$. The smooth orbit maps, continuity of $A(\nu)$ from step 3.1, and the real chain rule [F7] make $F(t)=\Pi_{-\nu}(\exp(-tX))A(\nu)\Pi_\nu(\exp(tX))f$ continuous and differentiable in every smooth seminorm. Its derivative is $\Pi_{-\nu}(\exp(-tX))\bigl(-L_X^{-\nu}A(\nu)+A(\nu)L_X^\nu\bigr)\Pi_\nu(\exp(tX))f=0$ by step 4.3. Evaluation at each $k_\theta$ gives a complex-valued function of $t$ whose real and imaginary parts satisfy [F10], so $F(t)=F(0)$ pointwise. Therefore $A(\nu)\Pi_\nu(\exp(tX))=\Pi_{-\nu}(\exp(tX))A(\nu)$. Each element of $G$ is $kan$ by [F8], with $K,A,N$ generated by these one-parameter subgroups, so the asserted $G$-intertwining identity follows by multiplying the three factor identities. [F7, F8, F10, step 3.1, step 4.3, algebra]

6.1 Suppose $\nu\notin\mathcal W_\varepsilon$ and both $A(\nu)$ and $A(-\nu)$ are regular. Then $r+1+\nu$ and $r+1-\nu$ are nonzero for every $r\equiv\varepsilon\pmod2$. Applying the recurrence at $\nu$ and $-\nu$ gives $c_{r+2}(\nu)c_{r+2}(-\nu)=c_r(\nu)c_r(-\nu)$; the symmetry $c_{-r}=(-1)^rc_r$ handles negative indices. Hence the product is independent of $r$ and equals $c_{n_0}(\nu)c_{n_0}(-\nu)$, with $n_0=0$ in even parity and $n_0=1$ in odd parity. Continuity and density from step 3.1 extend this K-type calculation to the composite operator on smooth vectors. The base eigenvalues are finite and nonzero at these regular parameters by step 1.1, so dividing each factor by its base eigenvalue gives $\widehat A(-\nu)\widehat A(\nu)=\mathrm{id}$ and $\widehat c_r(-\nu)\widehat c_r(\nu)=1$. [F2, step 1.1, step 3.1, algebra] ∎
