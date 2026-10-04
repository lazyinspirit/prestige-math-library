---
id: thm-singular-inner-function-properties
kind: theorem
title: "Properties of the singular functions $S_\\mu$"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [lem-poisson-integral-of-a-singular-circle-measure-has-zero-nontangential-limit, def-inner-singular-inner-and-outer-functions, def-poisson-kernel-on-the-disc, lem-poisson-kernel-properties-on-the-disc, def-poisson-integral-of-finite-boundary-measure, thm-fatou-nontangential-boundary-theorem-harmonic, lem-bounded-holomorphic-disc-functions-have-fatou-limits-under-countable-choice, thm-complex-power-series-converge-locally-uniformly, def-measure-concentrated-on-a-measurable-set, def-the-one-dimensional-torus-and-normalized-haar-integral, def-countable-choice, thm-local-maximum-modulus-principle, lem-finite-positive-circle-measures-have-lebesgue-decomposition-under-countable-choice, cor-second-countable-lch-locally-finite-borel-measures-are-regular, def-circle-maximal-function-and-nontangential-region, thm-dominated-convergence, def-complex-exponential]
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

Assume countable choice, as in the defining circle and singular-function conventions. Let $\mu$ be a finite positive Borel measure on $\mathbb T$ and let
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

**Given:** Countable choice and a finite positive Borel measure $\mu$ on the torus $\mathbb T$ with normalized Haar measure $m$, the kernel $K(z,\zeta)=(\zeta+z)/(\zeta-z)$ and the function $S_\mu=e^{-H}$ with $H(z):=\int_{\mathbb T}K(z,\zeta)\,d\mu(\zeta)$.

[L1] $K$ is continuous and bounded on $\mathbb T$ for fixed $z$, $\operatorname{Re}K(z,\zeta)=P(z,\zeta)$ is the Poisson kernel, and $\int_{\mathbb T}P(z,\zeta)\,dm(\zeta)=1$; the Poisson integral $P[\mu](z)=\int P(z,\zeta)\,d\mu$ is harmonic with $P[\mu]\ge0$ and $P[\mu](0)=\mu(\mathbb T)$ ([[def-inner-singular-inner-and-outer-functions]], [[def-poisson-kernel-on-the-disc]], [[lem-poisson-kernel-properties-on-the-disc]], [[def-poisson-integral-of-finite-boundary-measure]]).

[L2] The expansion $K(z,\zeta)=1+2\sum_{n\ge1}z^n\zeta^{-n}$ converges absolutely and locally uniformly for $|z|<1$, $|\zeta|=1$, so termwise integration against the finite measure $\mu$ exhibits $H$ as a locally uniform limit of holomorphic polynomials, hence holomorphic on $\mathbb D$; $\exp$ of a holomorphic function is holomorphic, and the exponential is never zero ([[thm-complex-power-series-converge-locally-uniformly]], [[def-inner-singular-inner-and-outer-functions]], [[def-complex-exponential]]).

[L3] Under countable choice, every bounded holomorphic disc function has finite nontangential limits almost everywhere. ([[lem-bounded-holomorphic-disc-functions-have-fatou-limits-under-countable-choice]])

[L4] Under countable choice every finite positive Borel circle measure has a decomposition $\mu=h\,m+\mu_s$ with integrable Borel $h\ge0$ and $\mu_s$ carried by a Haar-null Borel set. ([[lem-finite-positive-circle-measures-have-lebesgue-decomposition-under-countable-choice]], [[def-measure-concentrated-on-a-measurable-set]])

[L5] The Poisson integral of $h\in L^1(\mathbb T,m)$ converges to $h(\zeta)$ at $m$-almost every $\zeta$ within every cone $\Gamma_A(\zeta)$, $A>1$ ([[thm-fatou-nontangential-boundary-theorem-harmonic]]).

[L6] For a finite positive singular circle measure, its Poisson integral tends nontangentially to zero almost everywhere under countable choice. The proof uses compact approximation of its singular carrier and the weak maximal estimate; no small-closure assertion for an open set is used. ([[lem-poisson-integral-of-a-singular-circle-measure-has-zero-nontangential-limit]])



## Proof

**Proof technique:** direct.

1.1 Holomorphy, modulus and value at the origin. By [L2] the function $H$ is holomorphic on $\mathbb D$ with $\operatorname{Re}H=P[\mu]$ by [L1]; hence $S_\mu=e^{-H}$ is holomorphic and zero-free, $$|S_\mu(z)|=e^{-\operatorname{Re}H(z)}=e^{-P[\mu](z)}\le1$$ because $P[\mu]\ge0$, and $S_\mu(0)=e^{-H(0)}=e^{-\mu(\mathbb T)}\in(0,1]$. Also $\log|S_\mu|=-P[\mu]$. [given, L1, L2, algebra]

2.1 Nontangential limits. By step 1.1, $S_\mu$ is bounded holomorphic, so [L3] gives finite nontangential limits $S_\mu^*$ almost everywhere. To identify their modulus, decompose $\mu=h\,m+\mu_s$ by [L4]. The Poisson integral is the sum $P[h]+P[\mu_s]$ by [L1]; [L5] gives $P[h]\to h$ nontangentially almost everywhere, and [L6] gives $P[\mu_s]\to0$. On their common full-measure set, $P[\mu]\to h$, so continuity of the real exponential in the identity of step 1.1 gives $|S_\mu^*|=e^{-h}=e^{-\lim_{r\uparrow1}P[\mu](r\zeta)}$. The radial limit agrees with the cone limits. [step 1.1, L1, L3, L4, L5, L6, algebra]

2.2 (i) implies (iii). If $\mu\perp m$, [L6] gives $P[\mu](z)\to0$ within every cone at almost every circle point, hence in particular along radii. Thus (iii) holds, including $\mu=0$. [step 1.1, L6]

3.1 (iii) implies (ii). If $P[\mu](r\zeta)\to0$ for $m$-almost every $\zeta$, then step 2.1 gives $|S_\mu^*(\zeta)|=e^{0}=1$ for $m$-almost every $\zeta$, which is (ii). [step 2.1, algebra]

3.2 (ii) implies (i). Assume (ii) and decompose $\mu=h\,m+\mu_s$ as in [L4]. Since $h\ge0$, one has $P[h]\le P[\mu]$ pointwise, and by [L5], $P[h](r\zeta)\to h(\zeta)$ for $m$-almost every $\zeta$. By step 2.1, (ii) says $P[\mu](r\zeta)\to0$ a.e.; hence $0\le h(\zeta)\le\liminf_r P[\mu](r\zeta)=0$ a.e., so $h=0$ $m$-almost everywhere. Therefore $\mu=\mu_s$ is concentrated on an $m$-null set, that is, $\mu\perp m$, which is (i). [step 2.1, L4, L5, algebra]

4.1 Assembly. Step 1.1 gives holomorphy, zero-freeness, the modulus identity and the value at $0$; step 2.1 gives the a.e. nontangential limits and the displayed modulus formula; steps 2.2, 3.1 and 3.2 prove (i)$\Rightarrow$(iii)$\Rightarrow$(ii)$\Rightarrow$(i), so the three conditions are equivalent. By the definition of singular inner function, $S_\mu$ is a singular inner function exactly when $\mu\perp m$, i.e. exactly when the equivalent conditions hold. [step 1.1, step 2.1, step 2.2, step 3.2, algebra] ∎
