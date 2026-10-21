---
id: thm-ip-pcn-small-step-acceptance-under-potential-bounds
kind: theorem
title: pCN stationary mean acceptance tends to one at small scale
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - alg-ip-prior-preserving-crank-nicolson
  - def-axiom-of-choice
  - def-borel-gaussian-random-element-on-a-separable-banach-space
  - def-hilbert-space
  - def-ip-misfit-evidence-and-posterior-law
  - def-ip-prior-on-a-forward-domain
  - def-law-or-distribution-of-a-random-element
  - def-separable-space
  - def-second-countable-space
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-independent-random-elements
  - def-metric-ball
  - def-metric-topology
  - def-norm-and-normed-space
  - def-integral-over-a-measurable-set
  - lem-borel-product-of-second-countable-spaces
  - lem-rat-embeds-dense
  - lem-subset-of-countable
  - thm-dominated-convergence
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - thm-composition-with-borel-functions-preserves-measurability
  - thm-continuous-preimages-of-borel-sets-are-borel
  - thm-exponential-is-strictly-increasing
  - thm-fernique-integrability-for-separable-banach-gaussian-law
  - thm-ip-function-space-posterior-propriety
  - thm-metric-open-set-algebra
  - thm-nonnegative-integral-zero-iff-zero-almost-everywhere
  - thm-product-of-countable
  - thm-rationals-countable
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
axiom_use: "AC is inherited from the centered Borel Gaussian and pCN interfaces. The posterior-propriety supplier and the limit argument add no further choice use."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "S. L. Cotter, G. O. Roberts, A. M. Stuart, and D. White, MCMC Methods for Functions: Modifying Old Algorithms to Make Them Faster, Statistical Science 28(3) (2013)"
      url: "https://eprints.maths.manchester.ac.uk/2215/1/1202.0709v3.pdf"
      locator: "§6.2, Assumptions 6.1(1)–(2) and Theorem 6.4; the small-scale acceptance limit is proved locally here."
---

## Statement

Assume the Axiom of Choice. Let $H$ be a separable real Hilbert space and let
$\mu_0$ be a centered Borel Gaussian probability measure on $H$. Let
$\Phi:H\to[0,\infty)$ be finite-valued and Borel measurable. Suppose that
there are constants $p,K>0$ such that
$$0\le\Phi(u)\le K(1+\|u\|^p)\qquad(u\in H),$$
and for every $R>0$ there is a finite $L_R$ such that
$$|\Phi(u)-\Phi(v)|\le L_R\|u-v\|\quad\text{whenever }\max\{\|u\|,\|v\|\}<R.$$
Set $Z=\int_H e^{-\Phi(u)}\,\mu_0(du)$ and
$\mu(du)=Z^{-1}e^{-\Phi(u)}\mu_0(du)$. For $\beta\in[0,1]$, let
$U\sim\mu$ and $\xi\sim\mu_0$ be independent, put
$V_\beta=\sqrt{1-\beta^2}U+\beta\xi$, and define
$$\alpha_\beta=\min\{1,\exp(\Phi(U)-\Phi(V_\beta))\}.$$
Then $0<Z<\infty$, $\mu$ is a probability measure, and the stationary mean
acceptance satisfies
$$\lim_{\beta\downarrow0}\mathbb E[\alpha_\beta]=1.$$

## Statement references

[[alg-ip-prior-preserving-crank-nicolson|The pCN proposal combines the current state with an independent Gaussian reference draw and accepts by the potential ratio.]]

[[thm-ip-function-space-posterior-propriety|A continuous potential with a common integrable lower envelope gives positive finite evidence and a proper posterior.]]

[[thm-fernique-integrability-for-separable-banach-gaussian-law|A centered Gaussian law on a separable Banach space has an exponential-square moment.]]

## Facts & Assumptions

**Given:** The hypotheses in the Statement.

[A1] AC is assumed, as required by the centered Borel Gaussian interface and the pCN algorithm. [[def-axiom-of-choice]] [[alg-ip-prior-preserving-crank-nicolson]]

[F1] The pCN proposal is $V_\beta=\sqrt{1-\beta^2}U+\beta\xi$, and its acceptance for finite potential values is $\min\{1,\exp(\Phi(U)-\Phi(V_\beta))\}$. [[alg-ip-prior-preserving-crank-nicolson]]

[F2] A prior on a full-mass Borel forward domain and a finite continuous potential with a common integrable lower envelope have positive finite evidence and a normalized posterior. [[def-ip-prior-on-a-forward-domain]] [[def-ip-misfit-evidence-and-posterior-law]] [[thm-ip-function-space-posterior-propriety]]

[F3] A centered Borel Gaussian random element in a separable Banach space has $\mathbb E e^{a\|X\|^2}<\infty$ for some $a>0$; a centered Borel Gaussian probability on $H$ is realized by the identity random element on $(H,\mathcal B(H),\mu_0)$. [[def-borel-gaussian-random-element-on-a-separable-banach-space]] [[thm-fernique-integrability-for-separable-banach-gaussian-law]]

[F4] If a nonnegative measurable function has integral zero, it vanishes almost everywhere; integrating on a measurable set is integrating its indicator times the function. [[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]] [[def-integral-over-a-measurable-set]]

[F5] If measurable functions converge pointwise and are dominated in absolute value by one integrable function, their integrals converge to the integral of the pointwise limit. [[thm-dominated-convergence]]

[F6] Since $H$ is separable, countable dense $D\subseteq H$ and positive
rational radii give a countable base of open norm balls in its induced metric
topology: for $x\in U$ with $U$ open,
choose $r>0$ with $B(x,r)\subseteq U$, then $d\in D$ with $\|d-x\|<r/3$ and
a rational $s$ with $\|d-x\|<s<r-\|d-x\|$; then
$x\in B(d,s)\subseteq B(x,r)$. Thus $H$ is second-countable and
$\mathcal B(H\times H)=\mathcal B(H)\otimes\mathcal B(H)$. The law notation in
the Statement makes $U$ and $\xi$ Borel random elements; the pair $(U,\xi)$ is
measurable into the product sigma-algebra because inverse images of measurable
rectangles are intersections of measurable coordinate events.
For each $\beta$, $(u,z)\mapsto\sqrt{1-\beta^2}u+\beta z$ is continuous, so
$V_\beta$ is Borel; composing with the Borel $\Phi$ and the continuous scalar
operations shows $\Delta_\beta=\Phi(V_\beta)-\Phi(U)$ and
$\alpha_\beta=\min\{1,e^{-\Delta_\beta}\}$ are measurable.
[[def-separable-space]] [[def-second-countable-space]]
[[def-product-sigma-algebra-and-finite-product-sigma-algebras]]
[[def-law-or-distribution-of-a-random-element]]
[[def-independent-random-elements]] [[thm-product-of-countable]]
[[thm-rationals-countable]] [[lem-rat-embeds-dense]]
[[def-norm-and-normed-space]] [[def-metric-ball]] [[def-metric-topology]]
[[thm-metric-open-set-algebra]]
[[lem-subset-of-countable]]
[[lem-borel-product-of-second-countable-spaces]]
[[thm-continuous-preimages-of-borel-sets-are-borel]]
[[thm-composition-with-borel-functions-preserves-measurability]]
[[thm-arithmetic-and-lattice-operations-preserve-measurability]]
[[thm-exponential-is-strictly-increasing]]

## Proof

**Given:** The hypotheses and definitions in the Statement.

1.1 Apply [F2] with parameter space $H$, domain $D=H$, one-point data space
$\{*\}$, potential $\widetilde\Phi(u,*)=\Phi(u)$, and envelope $M_1=0$.
The domain has full $\mu_0$-mass. For any $u\in H$, choose $R>\|u\|$;
all sufficiently close $v$ satisfy $\max\{\|u\|,\|v\|\}<R$, so the
stated Lipschitz bound proves continuity at $u$. Also
$\int_H e^{M_1(\|u\|)}\,\mu_0(du)=1$. Hence $0<Z<\infty$ and $\mu$ is a
probability. The density $e^{-\Phi}$ is strictly positive everywhere. If
$\mu(A)=0$, then $\int_H e^{-\Phi}\mathbf1_A\,d\mu_0=0$, so [F4] gives
$e^{-\Phi}\mathbf1_A=0$ $\mu_0$-almost everywhere; strict positivity yields
$\mu_0(A)=0$. Conversely, $\mu_0(A)=0$ implies $\mu(A)=0$ directly from the
integral formula. Thus $\mu$ and $\mu_0$ are equivalent. [F2, F4, given, construct]

1.2 View the identity map $x\mapsto x$ on $(H,\mathcal B(H),\mu_0)$ as a
centered Borel Gaussian random element. By [F3], there is $a>0$ such that
$\int_H e^{a\|x\|^2}\,\mu_0(dx)<\infty$. For every $q>0$, the function
$r\mapsto r^q e^{-ar^2}$ is bounded on $[0,\infty)$, so
$\int_H\|x\|^q\,\mu_0(dx)<\infty$. Since $e^{-\Phi}\le1$ and $Z>0$,
$$\mathbb E\|U\|^q=Z^{-1}\int_H\|x\|^q e^{-\Phi(x)}\,\mu_0(dx)\le Z^{-1}\int_H\|x\|^q\,\mu_0(dx)<\infty.$$
The same Gaussian moment bound gives $\mathbb E\|\xi\|^q<\infty$ for every
$q>0$. [A1, F3, step 1.1, given, algebra]

2.1 Fix any sequence $\beta_n\in[0,1]$ with $\beta_n\to0$. For every
realization with $U,\xi\in H$, $\rho_n:=\sqrt{1-\beta_n^2}\to1$ and
$$\|V_{\beta_n}-U\|\le |1-\rho_n|\|U\|+\beta_n\|\xi\|\longrightarrow0.$$
Choose $R>\|U\|+1$ for that realization. Eventually
$\max\{\|U\|,\|V_{\beta_n}\|\}<R$, and the assumed ball-wise Lipschitz
bound gives
$$|\Phi(V_{\beta_n})-\Phi(U)|\le L_R\|V_{\beta_n}-U\|\longrightarrow0.$$
Therefore $\Delta_n:=\Phi(V_{\beta_n})-\Phi(U)\to0$ almost surely. Its
measurability, and that of $\alpha_{\beta_n}$, was established in [F6].
[F1, F6, given, choose, algebra]

2.2 The growth bound and $\|V_{\beta_n}\|\le\|U\|+\|\xi\|$ imply
$$|\Delta_n|\le 2K+K\|U\|^p+K(\|U\|+\|\xi\|)^p\le C_{p,K}(1+\|U\|^p+\|\xi\|^p),$$
where the last inequality follows from
$(a+b)^p\le2^p(a^p+b^p)$ for $a,b\ge0$ (use
$a+b\le2\max(a,b)$ and $\max(a,b)^p\le a^p+b^p$), with
$C_{p,K}:=\max\{2K,K(1+2^p),K2^p\}$. By step 1.2 the right
side is integrable and does not depend on $n$. Applying [F5] to the measurable
sequence $|\Delta_n|$ from [F6] and step 2.1 gives
$\mathbb E|\Delta_n|\to0$. [F5, F6, step 1.2, step 2.1, given, algebra]

3.1 The scalar function $g(t)=\min\{1,e^{-t}\}$ is continuous and
$g(0)=1$. Step 2.1 therefore implies
$\alpha_{\beta_n}=g(\Delta_n)\to1$ almost surely. Since
$0\le\alpha_{\beta_n}\le1$, [F5] with the integrable dominating constant
$1$ yields $\mathbb E\alpha_{\beta_n}\to1$. The sequence $\beta_n\to0$ was
arbitrary, so the sequential criterion for real limits proves
$\lim_{\beta\downarrow0}\mathbb E[\alpha_\beta]=1$. This is the stationary
mean acceptance limit; it asserts no convergence or mixing rate for the
resulting chain. [F5, F6, step 2.1, given, algebra] ∎
