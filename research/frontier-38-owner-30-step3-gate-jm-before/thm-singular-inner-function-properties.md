---
id: thm-singular-inner-function-properties
kind: theorem
title: "Properties of the singular functions $S_\\mu$"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-inner-singular-inner-and-outer-functions, def-poisson-kernel-on-the-disc, lem-poisson-kernel-properties-on-the-disc, def-poisson-integral-of-finite-boundary-measure, thm-fatou-nontangential-boundary-theorem-harmonic, cor-bounded-harmonic-functions-have-nontangential-limits, thm-complex-power-series-converge-locally-uniformly, def-measure-concentrated-on-a-measurable-set, def-the-one-dimensional-torus-and-normalized-haar-integral, def-countable-choice, thm-local-maximum-modulus-principle, thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures, thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality, cor-second-countable-lch-locally-finite-borel-measures-are-regular, def-circle-maximal-function-and-nontangential-region, thm-dominated-convergence, def-complex-exponential]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. B. Garnett, Bounded Analytic Functions, revised first edition, Chapter II §6"
      url: "https://dokumen.pub/bounded-analytic-functions-0387336214-9780387336213.html"
      locator: "Singular functions, printed pp. 72-75: $S_\\mu(z)=\\exp(-\\int K(z,\\zeta)d\\mu)$, its modulus, zero-freeness, boundary behaviour and the equivalence with $\\mu\\perp m$."
    - title: "R. K. Srivastava, Lecture Notes on Hardy Spaces (MA650, IIT Guwahati), §5.10"
      url: "https://fac.iitg.ac.in/rksri/MA650%20Advanced%20Hardy%20Spaces%20Notes.pdf"
      locator: "Proof of Theorem 5.29, printed pp. 45-46: singular inner functions and the role of the singular measure."
---

## Statement

Let $\mu$ be a finite positive Borel measure on $\mathbb T$ and let
$S_\mu(z)=\exp\bigl(-\int_{\mathbb T}K(z,\zeta)\,d\mu(\zeta)\bigr)$. Then
$S_\mu$ is holomorphic and zero-free on $\mathbb D$,
$\log|S_\mu|=-P[\mu]$, $|S_\mu|\le1$, and
$S_\mu(0)=e^{-\mu(\mathbb T)}\in(0,1]$. Moreover $S_\mu$ has finite
nontangential limits $S_\mu^*(\zeta)$ for $m$-almost every
$\zeta\in\mathbb T$, with
$|S_\mu^*|=e^{-\lim_{r\uparrow1}P[\mu](r\zeta)}$, and the following are
equivalent:

(i) $\mu\perp m$; (ii) $|S_\mu^*|=1$ $m$-almost everywhere; (iii)
$P[\mu](r\zeta)\to0$ for $m$-almost every $\zeta\in\mathbb T$.

Consequently $S_\mu$ is a singular inner function exactly when $\mu\perp m$.

## Facts & Assumptions

**Given:** A finite positive Borel measure $\mu$ on the torus $\mathbb T$ with normalized Haar measure $m$, the kernel $K(z,\zeta)=(\zeta+z)/(\zeta-z)$ and the function $S_\mu=e^{-H}$ with $H(z):=\int_{\mathbb T}K(z,\zeta)\,d\mu(\zeta)$.

[L1] $K$ is continuous and bounded on $\mathbb T$ for fixed $z$, $\operatorname{Re}K(z,\zeta)=P(z,\zeta)$ is the Poisson kernel, and $\int_{\mathbb T}P(z,\zeta)\,dm(\zeta)=1$; the Poisson integral $P[\mu](z)=\int P(z,\zeta)\,d\mu$ is harmonic with $P[\mu]\ge0$ and $P[\mu](0)=\mu(\mathbb T)$ ([[def-inner-singular-inner-and-outer-functions]], [[def-poisson-kernel-on-the-disc]], [[lem-poisson-kernel-properties-on-the-disc]], [[def-poisson-integral-of-finite-boundary-measure]]).

[L2] The expansion $K(z,\zeta)=1+2\sum_{n\ge1}z^n\zeta^{-n}$ converges absolutely and locally uniformly for $|z|<1$, $|\zeta|=1$, so termwise integration against the finite measure $\mu$ exhibits $H$ as a locally uniform limit of holomorphic polynomials, hence holomorphic on $\mathbb D$; $\exp$ of a holomorphic function is holomorphic, and the exponential is never zero ([[thm-complex-power-series-converge-locally-uniformly]], [[def-inner-singular-inner-and-outer-functions]], [[def-complex-exponential]]).

[L3] Bounded complex harmonic functions have nontangential limits $m$-almost everywhere, and real and imaginary parts of holomorphic functions are harmonic ([[cor-bounded-harmonic-functions-have-nontangential-limits]], [[def-inner-singular-inner-and-outer-functions]]).

[L4] Lebesgue decomposition and Radon-Nikodym: every finite positive Borel measure on $\mathbb T$ is $\mu=h\,m+\mu_s$ with $h\in L^1(m)$, $h\ge0$, and $\mu_s$ concentrated on an $m$-null Borel set ([[thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures]], [[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]], [[def-measure-concentrated-on-a-measurable-set]]).

[L5] The Poisson integral of $h\in L^1(\mathbb T,m)$ converges to $h(\zeta)$ at $m$-almost every $\zeta$ within every cone $\Gamma_A(\zeta)$, $A>1$ ([[thm-fatou-nontangential-boundary-theorem-harmonic]]).

[L6] Regularity and concentration: $m$ is a finite Borel measure on the compact metric space $\mathbb T$, hence outer regular, so an $m$-null set $N$ lies in open sets $U$ of arbitrarily small measure, and a measure concentrated on $N$ gives zero mass to $\mathbb T\setminus U$; the Poisson kernel concentrates away from open arcs: for fixed radius and an arc removed from $\zeta_0$, the kernel values tend to $0$ inside any cone at $\zeta_0$ ([[cor-second-countable-lch-locally-finite-borel-measures-are-regular]], [[def-measure-concentrated-on-a-measurable-set]], [[lem-poisson-kernel-properties-on-the-disc]], [[def-circle-maximal-function-and-nontangential-region]], [[thm-dominated-convergence]]).



## Proof

**Proof technique:** direct.

1.1 Holomorphy, modulus and value at the origin. By [L2] the function $H$ is holomorphic on $\mathbb D$ with $\operatorname{Re}H=P[\mu]$ by [L1]; hence $S_\mu=e^{-H}$ is holomorphic and zero-free, $$|S_\mu(z)|=e^{-\operatorname{Re}H(z)}=e^{-P[\mu](z)}\le1$$ because $P[\mu]\ge0$, and $S_\mu(0)=e^{-H(0)}=e^{-\mu(\mathbb T)}\in(0,1]$. Also $\log|S_\mu|=-P[\mu]$. [given, L1, L2, algebra]

2.1 Nontangential limits. Since $|S_\mu|\le1$, the real and imaginary parts of $S_\mu$ are bounded harmonic, so by [L3] $S_\mu$ has finite nontangential limits $S_\mu^*$ at $m$-almost every point; passing to the limit in $|S_\mu(z)|=e^{-P[\mu](z)}$ along cones gives $|S_\mu^*(\zeta)|=e^{-\lim_{z\to\zeta}P[\mu](z)}$ a.e., and the radial limit is the same by the cone statement. [step 1.1, L3, algebra]

2.2 (i) implies (iii). Assume $\mu\perp m$ and let $N$ be an $m$-null Borel set with $\mu$ concentrated on $N$ by [L4]. Given $\varepsilon>0$, [L6] gives an open $U\supseteq N$ with $m(U)<\varepsilon$ and $\mu(\mathbb T\setminus U)=0$. For $z\in\mathbb D$, $$P[\mu](z)=\int_U P(z,\zeta)\,d\mu(\zeta)\le\mu(\mathbb T)\sup_{\zeta\in U}P(z,\zeta).$$ Suppose $\zeta_0\in\mathbb T\setminus\overline U$; since $\overline U$ is compact and does not contain $\zeta_0$, all points of $U$ stay an arc-distance at least $\delta>0$ from $\zeta_0$, and for $z\to\zeta_0$ within any fixed cone, [L6] gives $\sup_{\zeta\in U}P(z,\zeta)\to0$; hence $\limsup_{z\to\zeta_0}P[\mu](z)\le0$, that is $P[\mu]\to0$ at every $\zeta_0\notin\overline U$. Applying this with a sequence $\varepsilon_j\downarrow0$ and open sets $U_j\supseteq N$ shows that $P[\mu]\to0$ at every point outside $\bigcap_j\overline U_j$, a set of $m$-measure $0$ because it is contained in each $U_j$ up to a null set and $m(U_j)<\varepsilon_j$; hence (iii) holds. [step 1.1, L1, L4, L6, algebra]

3.1 (iii) implies (ii). If $P[\mu](r\zeta)\to0$ for $m$-almost every $\zeta$, then step 2.1 gives $|S_\mu^*(\zeta)|=e^{0}=1$ for $m$-almost every $\zeta$, which is (ii). [step 2.1, algebra]

3.2 (ii) implies (i). Assume (ii) and decompose $\mu=h\,m+\mu_s$ as in [L4]. Since $h\ge0$, one has $P[h]\le P[\mu]$ pointwise, and by [L5], $P[h](r\zeta)\to h(\zeta)$ for $m$-almost every $\zeta$. By step 2.1, (ii) says $P[\mu](r\zeta)\to0$ a.e.; hence $0\le h(\zeta)\le\liminf_r P[\mu](r\zeta)=0$ a.e., so $h=0$ $m$-almost everywhere. Therefore $\mu=\mu_s$ is concentrated on an $m$-null set, that is, $\mu\perp m$, which is (i). [step 2.1, L4, L5, algebra]

4.1 Assembly. Step 1.1 gives holomorphy, zero-freeness, the modulus identity and the value at $0$; step 2.1 gives the a.e. nontangential limits and the displayed modulus formula; steps 2.2, 3.1 and 3.2 prove (i)$\Rightarrow$(iii)$\Rightarrow$(ii)$\Rightarrow$(i), so the three conditions are equivalent. By the definition of singular inner function, $S_\mu$ is a singular inner function exactly when $\mu\perp m$, i.e. exactly when the equivalent conditions hold. [step 1.1, step 2.1, step 2.2, step 3.2, algebra] ∎
