---
id: ex-strauss-exact-likelihood-versus-pseudolikelihood
kind: example
title: "Exact and pseudo likelihoods for finite-window Poisson and Strauss models"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 6
deps:
  - def-finite-window-spatial-observation
  - lem-finite-window-pair-count-is-measurable
  - def-finite-window-gibbs-density
  - def-papangelou-conditional-intensity
  - def-finite-window-pseudolikelihood
  - lem-diffuse-finite-window-poisson-process-is-simple
  - thm-finite-window-spatial-poisson-likelihood
  - lem-finite-window-gibbs-density-ratio-is-papangelou
  - def-poisson-and-cox-point-process
  - def-scalar-poisson-count-law
  - def-real-exponential-function-and-e
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - thm-exponential-addition-formula
  - thm-exponential-is-strictly-increasing
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - prop-measure-monotonicity
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: "Countable Choice is inherited through the window's Lebesgue measure; no full Axiom of Choice is used."
sources:
  references:
    - title: "Adrian Baddeley, Spatial Point Processes and their Applications, complete lecture notes"
      url: "https://leman.stat.vt.edu/VTCourses/BaddeleyPointProcesses.pdf"
      locator: "Lecture 4, §§4.4–4.6 and §4.9, Examples 4.8, 4.11, and 4.15, PDF pp. 63–69 and 72–73."
    - title: "Günter Last and Mathew Penrose, Lectures on the Poisson Process, author-hosted 2017 version"
      url: "https://stoch.math.kit.edu/img/Last/lastpenrose2017.pdf"
      locator: "Chapter 3, Theorem 3.6 and Proposition 3.8; Chapter 4, Theorem 4.1, PDF pp. 33–34 and 39–43."
---

## Example

Use $W=[0,2]^2$, unit-rate Poisson reference $P_0$, empty exterior boundary,
interaction radius $R=1/2$, activity $\beta>0$, and $0<\gamma\le1$. Take the
full admissible support to be $\mathcal S_{\beta,\gamma}=\mathcal C(W)$. Put
$$N(\eta):=\eta(W),\quad S_R(\eta):=\frac12\big((\eta\otimes\eta)(D_R)-N(\eta)\big),\quad H_{\beta,\gamma}(\eta):=-N(\eta)\log\beta-S_R(\eta)\log\gamma,$$
where $D_R=\{(u,v)\in W^2:\|u-v\|_2\le R\}$. The finite-window Gibbs
density is $Z_{\beta,\gamma,R}^{-1}\beta^{N(\eta)}\gamma^{S_R(\eta)}$.
At $\gamma=1$ this is the homogeneous Poisson model and its pseudolikelihood
is proportional to its exact likelihood. At $0<\gamma<1$ the two criteria
are not proportional as functions of the observation.

## Facts & Assumptions

**Given:** The window, reference law, boundary convention, and parameters in
the Example; $S_R$ counts unordered pairs of distinct occurrences.

[F1] A finite-window Gibbs law relative to $P_0$ requires measurable support
and $0<Z<\infty$. ([[def-finite-window-gibbs-density]])

[F2] The Strauss pair statistic $S_R$ is measurable
([[lem-finite-window-pair-count-is-measurable]]); $N(\eta)=\eta(W)$ is an
evaluation map and is measurable by
[[def-finite-window-spatial-observation]].

[F3] For a positive Gibbs density $g$, the density ratio
$g(\eta+\delta_u)/g(\eta)$ is its Papangelou conditional intensity.
([[lem-finite-window-gibbs-density-ratio-is-papangelou]])

[F4] The pseudolikelihood is the product of deleted-point Papangelou factors
times the exponential integrated-intensity term.
([[def-finite-window-pseudolikelihood]])

[F5] The finite Poisson likelihood relative to $P_0$ is
$e^{|W|-\int_W\lambda}\prod_{x\in\eta}\lambda(x)$, with multiplicity
counted. ([[thm-finite-window-spatial-poisson-likelihood]])

[F6] The scalar Poisson law has masses $e^{-v}v^n/n!$ for finite $v$.
([[def-scalar-poisson-count-law]])

[F7] Every singleton in $\mathbb R^2$ has Lebesgue measure zero by the
degenerate-box case. ([[thm-lebesgue-measure-of-a-box-of-every-kind]])

[F8] A finite Poisson process with atomless intensity is simple almost
surely. ([[lem-diffuse-finite-window-poisson-process-is-simple]])

[F9] A Poisson process count on a set of finite intensity has the scalar
Poisson law with that intensity as its parameter.
([[def-poisson-and-cox-point-process]])

[F10] $\exp(\log y)=y$ for $y>0$ and exponentials satisfy
$\exp(a+b)=\exp(a)\exp(b)$.
([[def-natural-logarithm]], [[thm-natural-logarithm-laws]],
[[thm-exponential-addition-formula]])

[F11] The real exponential is strictly increasing and $\exp(0)=1$.
([[def-real-exponential-function-and-e]],
[[thm-exponential-is-strictly-increasing]])

[F12] Lebesgue measure is monotone, and the box $[4/5,6/5]^2$ has volume
$4/25$. ([[prop-measure-monotonicity]],
[[thm-lebesgue-measure-of-a-box-of-every-kind]])

## Verification

**Given:** The window, reference law, boundary convention, and parameters in
the Example; $S_R$ counts unordered pairs of distinct occurrences.

[F1] A finite-window Gibbs law relative to $P_0$ requires measurable support
and $0<Z<\infty$. ([[def-finite-window-gibbs-density]])

[F2] The Strauss pair statistic $S_R$ is measurable.
([[lem-finite-window-pair-count-is-measurable]])

[F3] For a positive Gibbs density $g$, the density ratio
$g(\eta+\delta_u)/g(\eta)$ is its Papangelou conditional intensity.
([[lem-finite-window-gibbs-density-ratio-is-papangelou]])

[F4] The pseudolikelihood is the product of deleted-point Papangelou factors
times the exponential integrated-intensity term.
([[def-finite-window-pseudolikelihood]])

[F5] The finite Poisson likelihood relative to $P_0$ is
$e^{|W|-\int_W\lambda}\prod_{x\in\eta}\lambda(x)$, with multiplicity
counted. ([[thm-finite-window-spatial-poisson-likelihood]])

[F6] The scalar Poisson law has masses $e^{-v}v^n/n!$ for finite $v$.
([[def-scalar-poisson-count-law]])

[F7] Every singleton in $\mathbb R^2$ has Lebesgue measure zero by the
degenerate-box case. ([[thm-lebesgue-measure-of-a-box-of-every-kind]])

[F8] A finite Poisson process with atomless intensity is simple almost
surely. ([[lem-diffuse-finite-window-poisson-process-is-simple]])

[F9] A Poisson process count on a set of finite intensity has the scalar
Poisson law with that intensity as its parameter.
([[def-poisson-and-cox-point-process]])

[F10] $\exp(\log y)=y$ for $y>0$ and exponentials satisfy
$\exp(a+b)=\exp(a)\exp(b)$.
([[def-natural-logarithm]], [[thm-natural-logarithm-laws]],
[[thm-exponential-addition-formula]])

[F11] The real exponential is strictly increasing and $\exp(0)=1$.
([[def-real-exponential-function-and-e]],
[[thm-exponential-is-strictly-increasing]])

[F12] Lebesgue measure is monotone, and the box $[4/5,6/5]^2$ has volume
$4/25$. ([[prop-measure-monotonicity]],
[[thm-lebesgue-measure-of-a-box-of-every-kind]])



1.1 Both $N$ and $S_R$ are finite nonnegative integer-valued measurable functions by [F2]. For $m,k\in\mathbb N_0$, the set $\{N=m,S_R=k\}$ is measurable, and on it $H_{\beta,\gamma}=-m\log\beta-k\log\gamma$ and $w=\beta^m\gamma^k$. Thus both the energy and weight are measurable by their countable measurable level-set partitions. By [F10], $e^{-H_{\beta,\gamma}(\eta)}=w(\eta)$. Since $0<\gamma\le1$, $0<w(\eta)\le\beta^{N(\eta)}$. The unit-rate reference count $N$ has law $\operatorname{Pois}(4)$ by [F9], with masses given by [F6], so $Z=\mathbb E_{P_0}w(\eta)\le\mathbb E_{P_0}\beta^N=e^{-4}\sum_{n=0}^{\infty}\frac{(4\beta)^n}{n!}=e^{4(\beta-1)}<\infty.$ The empty configuration contributes $P_0\{\eta=0\}=e^{-4}$ to $Z$, hence $Z\ge e^{-4}>0$. Thus [F1] defines the stated Gibbs law. [given, F1, F2, F6, F9, F10, algebra, construct]

2.1 Inserting $u$ adds one point and creates exactly $T_R(u,\eta):=\eta(\{v\in W:\|v-u\|_2\le R\})$ unordered interaction pairs, counting occurrences: if the pair count is written as the number of unordered pairs, the increase is $S_R(\eta+\delta_u)-S_R(\eta)=\big(2T_R(u,\eta)+1-1\big)/2=T_R(u,\eta)$; the $1$ in the numerator is the new diagonal term removed in the definition of $S_R$. Therefore $\frac{w(\eta+\delta_u)}{w(\eta)}=\beta\gamma^{T_R(u,\eta)}.$ The same ratio holds for the normalized density because $Z$ cancels; [F3] shows that the Strauss Papangelou conditional intensity is $\lambda(u;\eta)=\beta\gamma^{T_R(u,\eta)}$. [given, step 1.1, F2, F3, algebra]

2.2 Every singleton is a degenerate box of Lebesgue measure zero by [F7], so the unit-rate reference intensity is atomless. It is simple almost surely by [F8]. The normalized Strauss law is absolutely continuous with respect to that reference and is therefore also supported on simple configurations. Thus on a probability-one set the occurrence-pair energy is the usual simple-pattern Strauss energy. [given, step 1.1, F1, F7, F8, construct]

3.1 When $\gamma=1$, $S_R$ drops out and the normalizer from the earlier calculation gives $Z=e^{4(\beta-1)}$, so the exact density is $e^{4(1-\beta)}\beta^{N(\eta)}$, matching the Poisson formula [F5]. The Papangelou intensity is the constant $\beta$, so [F4] gives pseudolikelihood $\beta^{N(\eta)}e^{-4\beta}$. The ratio of exact to pseudo likelihood is the observation-independent constant $e^4$. [step 1.1, step 2.1, F4, F5, algebra]

3.2 Now suppose $0<\gamma<1$, let $x=(1,1)$, and compare the empty configuration $0$ with $\delta_x$. By [F1] and the fact that neither configuration has an interacting pair, their exact Gibbs density ratio is $g(\delta_x)/g(0)=\beta$. By [F4] and step 2.1, the pseudolikelihood ratio is $\frac{\operatorname{PL}(\delta_x)}{\operatorname{PL}(0)}=\beta\exp\{\beta(1-\gamma)a\},\qquad a:=|\{u\in W:\|u-x\|_2\le R\}|.$ Indeed the event factor at $x$ is $\beta$, and the integrated intensity changes from $\beta|W|$ to $\beta(|W|-(1-\gamma)a)$. [given, step 2.1, F1, F4, algebra]

4.1 The square $[4/5,6/5]^2$ lies inside the radius-$1/2$ ball about $x$, so $a\ge4/25>0$ by [F12]. Hence $\exp\{\beta(1-\gamma)a\}>1$ by [F11], and the pseudo ratio is strictly larger than the exact ratio $\beta$. A constant multiple of the exact likelihood would have equal observation ratios, so the Strauss pseudolikelihood is not the joint likelihood in this case. The example makes no consistency or asymptotic claim. [step 3.2, F11, F12, algebra] ∎