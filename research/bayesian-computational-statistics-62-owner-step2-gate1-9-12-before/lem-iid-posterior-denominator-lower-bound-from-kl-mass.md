---
id: lem-iid-posterior-denominator-lower-bound-from-kl-mass
kind: lemma
title: "KL prior mass gives a posterior denominator lower bound in probability"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-dominated-statistical-experiment
  - def-likelihood-density
  - def-kullback-leibler-divergence
  - def-axiom-of-choice
  - def-identically-distributed-and-iid-random-variables
  - def-moments-variance-and-covariance
  - cor-finite-nonnegative-integral-implies-finite-almost-everywhere
  - lem-measurable-functions-preserve-independence
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - thm-composition-with-borel-functions-preserves-measurability
  - thm-variance-of-a-finite-sum
  - thm-factorization-of-expectations-for-independent-variables
  - thm-jensens-integral-inequality
  - thm-holder-inequality-for-integrals
  - thm-nonnegative-integral-zero-iff-zero-almost-everywhere
  - cor-chebyshev-inequality-for-random-variables
  - def-measure-with-density
  - thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Subhashis Ghosal, Jayanta K. Ghosh and Aad W. van der Vaart, Convergence rates of posterior distributions, Lemma 8.1 and proof"
      url: "https://doi.org/10.1214/aos/1016218228"
    - title: "B. J. K. Kleijn, Bayesian Statistics for Frequentists, Lemma 6.4.5 and proof"
      url: "https://staff.fnwi.uva.nl/b.j.k.kleijn/bkleijn-book-work-in-progress-Bayesian_Statistics_for_frequentists-Version-1.0-July-2025.pdf"
    - title: "Subhashis Ghosal, The Dirichlet Process, Related Priors and Posterior Asymptotics, §2.5.2"
      url: "https://people.eecs.berkeley.edu/~jordan/sail/readings/Ghosal09.pdf"
---

## Statement

Let $(\Theta,\mathcal T)$ be a measurable parameter space, $\Pi$ a prior probability measure on it, and $p_\theta$ a jointly measurable family of finite-valued probability densities relative to one fixed sigma-finite measure $\mu$. Let $P_0$ have finite-valued density $p_0$ relative to $\mu$, and let $X_1,\ldots,X_n$ be IID with law $P_0$. Assume the Axiom of Choice for the imported directional KL convention ([[def-axiom-of-choice]]). The jointly measurable density family is explicit input, so no arbitrary-index selection of versions is used here. In the expression below, the weighted log terms are set to zero on $\{p_0=0\}$; on $\{p_0>0,p_\theta=0\}$ the log ratio is $-\infty$ and its square is $+\infty$. For $\epsilon_n>0$, define
$$K_n:=\left\{\theta:\mathrm{KL}(P_0\Vert P_\theta)\le\epsilon_n^2,\quad \int\left[\log\frac{p_\theta}{p_0}\right]^2p_0\,d\mu\le\epsilon_n^2\right\}.$$
Joint measurability and Tonelli make $K_n$ measurable, as verified below. If $\Pi(K_n)\ge e^{-Cn\epsilon_n^2}$ for $C>0$ and $\mathrm{KL}(P_0\Vert P_\theta)$ uses the direction in [[def-kullback-leibler-divergence]], then, defining the ratio to be zero on the $P_0$-null set where $p_0=0$, the likelihood denominator
$$D_n:=\int_\Theta\prod_{i=1}^n\frac{p_\theta(X_i)}{p_0(X_i)}\,\Pi(d\theta)$$
is finite and positive $P_0^n$-almost surely and
$$P_0^n\!\left\{D_n\ge e^{-(C+2)n\epsilon_n^2}\right\}\ge1-\frac1{n\epsilon_n^2}.$$

## Facts & Assumptions

**Given:** A sigma-finite dominated family of probability densities $p_\theta$ with jointly measurable evaluation map, a density $p_0$, an IID sample from $P_0$, $n\ge1$, $\epsilon_n>0$, and $\Pi(K_n)\ge e^{-Cn\epsilon_n^2}$.

[A1] Assume the Axiom of Choice [[def-axiom-of-choice]] as required by the imported directional KL convention [[def-kullback-leibler-divergence]]. The finite-valued densities are supplied jointly measurably in the statement, so the proof makes no arbitrary-index density selection.

[F1] [[def-dominated-statistical-experiment]]: domination means a specified sigma-finite $\mu$ with $P_\theta\ll\mu$ for every parameter.

[F2] [[def-likelihood-density]]: for each $\theta$, a nonnegative representative $p_\theta$ of $dP_\theta/d\mu$ is a likelihood density; no joint parameter measurability follows from that definition.

[F3] [[def-kullback-leibler-divergence]]: if $P\not\ll Q$, then $\mathrm{KL}(P\Vert Q)=+\infty$; if $P\ll Q$, then $\mathrm{KL}(P\Vert Q)=\int\log(dP/dQ)\,dP$, whose negative part has integral at most $1/e$.

[F4] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: nonnegative product-measurable functions on sigma-finite product spaces may be integrated in either order.

[F5] [[thm-jensens-integral-inequality]]: for a probability measure and convex $\varphi$, $\varphi(\int f)\le\int\varphi(f)$ when the stated integrability conditions hold.

[F6] [[def-identically-distributed-and-iid-random-variables]]: IID means mutually independent random variables with one common law.

[F7] [[lem-measurable-functions-preserve-independence]]: applying the same measurable real function separately to independent random variables preserves independence.

[F8] [[def-moments-variance-and-covariance]]: variance is $\operatorname{Var}(Z)=\mathbb E[(Z-\mathbb EZ)^2]$ for square-integrable $Z$.

[F9] [[cor-chebyshev-inequality-for-random-variables]]: for square-integrable $Z$ and $a>0$, $\mathbb P(|Z-\mathbb EZ|\ge a)\le\operatorname{Var}(Z)/a^2$.

[F10] [[thm-arithmetic-and-lattice-operations-preserve-measurability]]: arithmetic and positive/negative-part operations on extended-real measurable functions preserve measurability under the stated zero convention.

[F11] [[thm-variance-of-a-finite-sum]]: the variance of a finite sum is the sum of individual variances plus twice the sum of pairwise covariances.

[F12] [[thm-factorization-of-expectations-for-independent-variables]]: expectations of finite products of integrable functions of independent real random variables factor.

[F13] [[def-natural-logarithm]] and [[thm-natural-logarithm-laws]]: the natural logarithm is a continuous function on $(0,\infty)$, hence Borel measurable there.

[F14] [[thm-composition-with-borel-functions-preserves-measurability]]: composing a measurable map with a Borel map preserves measurability.

[F15] [[cor-finite-nonnegative-integral-implies-finite-almost-everywhere]]: a nonnegative measurable function with finite integral is finite almost everywhere.

[F16] [[thm-holder-inequality-for-integrals]]: Cauchy–Schwarz bounds the integral of an absolute product by the product of the two $L^2$ norms.

[F17] [[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]: a nonnegative measurable function with zero integral vanishes almost everywhere.

[F18] [[def-measure-with-density]] and [[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]]: a density defines its measure by integration, and two densities of the same finite measure agree almost everywhere with respect to the dominating measure.

## Proof

1.1 Define $k(\theta,x)=p_0(x)\log(p_0(x)/p_\theta(x))$ as $0$ when $p_0=0$ and as $+\infty$ when $p_0>0,p_\theta=0$. The sets $\{p_0=0\}$, $\{p_0>0,p_\theta=0\}$, and $\{p_0>0,p_\theta>0\}$ are product-measurable; on the last set the logarithm is a difference of measurable logarithms by [F13]–[F14]. Thus $k^+$ and $k^-$ are product-measurable by [F10]. Where $p_\theta>p_0>0$, setting $u=p_0/p_\theta\in(0,1)$ gives $-u\log u\le1/e$, so $k^-\le p_\theta/e$ and $\int k^-d\mu\le1/e$. If $P_0\ll P_\theta$, then $P_0\{p_\theta=0\}=0$; [F17] gives $p_0=0$ $\mu$-almost everywhere there. Consequently, for every measurable $A$, the function $r_\theta=p_0/p_\theta$ on $\{p_\theta>0\}$ and $0$ otherwise satisfies $\int_A r_\theta\,dP_\theta=\int_{A\cap\{p_\theta>0\}}p_0d\mu=P_0(A)$. By [F18], it is a Radon–Nikodym derivative, so [F3] identifies $\mathrm{KL}(P_0\Vert P_\theta)=\int k(\theta,x)d\mu$. Conversely, if $P_0\{p_\theta=0\}=0$, then every $P_\theta$-null set $A$ has $p_\theta=0$ $\mu$-almost everywhere on $A$, hence $P_0(A)=0$; thus failure of $P_0\ll P_\theta$ implies $P_0\{p_\theta=0\}>0$. In that case the same integral is $+\infty$, again equal to [F3]. Finally, Tonelli [F4] makes the integrals of $k^+$ and $k^-$ measurable in $\theta$; the latter is finite, so their difference gives a measurable extended-real KL map. For the log-square coordinate, the specified ratio conventions and [F10], [F13], [F14] give a nonnegative product-measurable integrand, whose section integral is measurable by [F4]. Hence $K_n\in\mathcal T$. [A1, F3, F4, F10, F13, F14, F17, F18, given]

1.2 Set $Y_{\theta,i}:=p_\theta(X_i)/p_0(X_i)$ when $p_0(X_i)>0$ and $0$ otherwise. This is a measurable function of $X_i$ by [F10, F14]. Since $P_0\{p_0=0\}=\int_{\{p_0=0\}}p_0\,d\mu=0$, change of density using [F1, F2] gives $\mathbb E_{P_0}Y_{\theta,i}=\int_{\{p_0>0\}}p_\theta\,d\mu\le1$. For each fixed $\theta$, the $Y_{\theta,i}$ are independent measurable transforms of the IID coordinates; [F6, F7, F12] therefore give $\mathbb E_{P_0^n}\prod_iY_{\theta,i}\le1$. Joint measurability and Tonelli [F4] imply $\mathbb E_{P_0^n}D_n\le1$, so [F15] gives $D_n<\infty$ almost surely. [F1, F2, F4, F6, F7, F10, F12, F14, F15, given]

1.3 By [A1, F3], every $\theta\in K_n$ satisfies $P_0\ll P_\theta$, so $P_0\{p_\theta=0\}=0$. For each fixed $\theta$, the IID sample therefore has $\prod_i p_\theta(X_i)>0$ almost surely. Apply Tonelli [F4] to the zero-product indicator on $K_n\times\mathsf X^n$ with the product of the prior conditioned on K_n and the n-fold sampling law: for $P_0^n$-almost every sample, the conditional prior measure of parameters with zero product is zero. Hence the product likelihood is positive for prior-almost every $\theta\in K_n$, and [F17] implies its integral over the positive-mass set $K_n$ is positive. On the full-probability event where each $p_0(X_i)>0$, this implies $D_n>0$. [A1, F3, F4, F17, given]

1.4 Write $\bar\Pi_n=\Pi(\cdot\mid K_n)$ and define the jointly measurable extended-real function $\ell(\theta,x)$ by the ratio conventions in the Statement: it is zero on $\{p_0=0\}$, equals $\log(p_\theta/p_0)$ where $p_0,p_\theta>0$, and is $-\infty$ where $p_0>0,p_\theta=0$; the stated arithmetic and Borel-composition facts [F10, F13, F14] justify this measurability. This avoids assuming a common $P_0$-full set on which all densities in an uncountable family are positive. For every $\theta\in K_n$, finite KL gives $P_0\ll P_\theta$, so $\ell(\theta,\cdot)$ is finite $P_0$-almost everywhere; the local second-moment condition gives $\mathbb E_{P_0}\ell(\theta,X_1)^2\le\epsilon_n^2$. Holder [F16] on the probability space yields $\mathbb E_{P_0}|\ell(\theta,X_1)|\le\epsilon_n$, and the directional convention [F3] gives $\mathbb E_{P_0}\ell(\theta,X_1)=-\mathrm{KL}(P_0\Vert P_\theta)\ge-\epsilon_n^2$. Tonelli [F4] applied to the positive and negative parts therefore makes $Z(x):=\int\ell(\theta,x)\,\bar\Pi_n(d\theta)$ finite almost everywhere, measurable after assigning zero on the null exceptional set, and integrable with $\mathbb E_{P_0}Z(X_1)\ge-\epsilon_n^2$. Tonelli also gives $\mathbb E_{P_0}\int\ell(\theta,X_1)^2\,\bar\Pi_n(d\theta)\le\epsilon_n^2$; for $P_0$-almost every $x$, Jensen [F5] for $z\mapsto z^2$ gives $Z(x)^2\le\int\ell(\theta,x)^2\,\bar\Pi_n(d\theta)$. Hence $\mathbb E_{P_0}Z(X_1)^2\le\epsilon_n^2$. [A1, F3, F4, F5, F10, F13, F14, F16, given]

2.1 Set $Z_i:=Z(X_i)$. By [F6] and [F7], the $Z_i$ are IID; [F8] and step 1.4 imply $\operatorname{Var}(Z_i)\le\epsilon_n^2$, so the centered variables are square-integrable and integrable. For $i\ne j$, the centered variables are independent measurable transforms of independent coordinates, so [F12] factors their product expectation and their covariance is zero. Applying [F11] to their finite sum therefore gives $\operatorname{Var}(n^{-1}\sum_i Z_i)=n^{-2}\sum_i\operatorname{Var}(Z_i)\le\epsilon_n^2/n$. [F6, F7, F8, F11, F12, step 1.4]

3.1 The mean of $n^{-1}\sum_i Z_i$ is at least $-\epsilon_n^2$ and its variance is at most $\epsilon_n^2/n$, by independence in step 2.1. Thus the event $n^{-1}\sum_iZ_i<-2\epsilon_n^2$ forces a deviation from its mean of at least $\epsilon_n^2$. Chebyshev [F9] yields $P_0^n\!\left\{n^{-1}\sum_iZ_i<-2\epsilon_n^2\right\}\le\frac1{n\epsilon_n^2}.$ [F6, F8, F9, step 1.4, step 2.1, algebra]

4.1 By Tonelli [F4] and the local second-moment bound, for $P_0^n$-almost every sample each of the finitely many functions $\theta\mapsto\ell(\theta,X_i)$ is square-integrable under $\bar\Pi_n$; Cauchy–Schwarz [F16] makes their sum integrable. Step 1.3 and the $P_0^n$-full event where each $p_0(X_i)>0$ ensure that $\exp(\sum_i\ell(\theta,X_i))=\prod_i p_\theta(X_i)/p_0(X_i)$ for $\bar\Pi_n$-almost every $\theta$. Step 1.2 bounds the integrated exponential by the finite $D_n/\Pi(K_n)$, so Jensen [F5] applies to that sum and the exponential. On the complementary event, it gives $D_n\ge\Pi(K_n)\int\exp\!\left(\sum_i\ell(\theta,X_i)\right)\bar\Pi_n(d\theta)\ge\Pi(K_n)\exp\!\left(\sum_iZ_i\right)\ge e^{-(C+2)n\epsilon_n^2}.$ Combining with step 3.1 proves the probability bound. [F4, F5, F16, step 1.2, step 1.3, step 3.1, given, algebra] ∎
