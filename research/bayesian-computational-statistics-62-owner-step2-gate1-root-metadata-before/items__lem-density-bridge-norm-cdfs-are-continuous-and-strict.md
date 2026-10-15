---
dependency_level: 4
id: lem-density-bridge-norm-cdfs-are-continuous-and-strict
kind: lemma
title: Continuous and strictly increasing norm distributions for density bridges
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - cor-cauchy-schwarz-for-random-variables
  - def-axiom-of-choice
  - def-multiscale-coefficient-space-m0w
  - def-negative-sobolev-space-for-white-noise
  - ex-brownian-bridge-from-brownian-motion
  - lem-density-gaussian-bridge-is-borel-on-m0w
  - lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal
  - lem-finite-measure-uniqueness-on-a-pi-system
  - lem-m0w-separable-and-projection-tails
  - lem-mean-and-covariance-determine-gaussian-finite-dimensional-laws
  - lem-multiscale-primitive-map-to-continuous-cdfs
  - lem-uncorrelated-jointly-gaussian-blocks-are-independent
  - thm-brownian-reflection-principle
  - thm-continuity-from-above-for-measures
  - thm-existence-of-continuous-brownian-motion
  - thm-finite-and-countable-subadditivity-of-measures
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
proof_strategy: direct
axiom_use: Full AC is assumed for the Gaussian-law, product-law and Brownian reflection interfaces. This lemma supplies the norm-quantile conditions for full-AC density BvM applications; it does not strengthen the choice assumptions of conditional calibration results.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Castillo and Nickl, On the Bernstein–von Mises phenomenon for nonparametric Bayes procedures, Theorems 4–5 and Section 4
      url: https://arxiv.org/pdf/1310.2484
    - title: "Rick Durrett, Probability: Theory and Examples, fifth edition, Sections 7.4 and 8.4"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Statement

Assume AC. Let $P_0$ have density $0<\rho\le f_0\le D<\infty$ on $[0,1]$, and put $F_0(t)=\int_0^t f_0$. Use a complete real orthonormal wavelet basis, allowing the Haar basis with its finite scaling coordinate, and admissible weights $w$ as in [[def-multiscale-coefficient-space-m0w]]. Assume the wavelet geometry and summability conditions of [[lem-multiscale-primitive-map-to-continuous-cdfs]], and write $J:M_0(w)\to C([0,1])$ for its primitive map. Let $G$ be the Borel centered Gaussian bridge random element of [[lem-density-gaussian-bridge-is-borel-on-m0w]], with coefficient covariance
$$\operatorname{Cov}(G_{lk},G_{l'k'})=P_0[(\psi_{lk}-P_0\psi_{lk})(\psi_{l'k'}-P_0\psi_{l'k'})].$$
Then the distribution functions of $\|G\|_{M(w)}$ and $\|JG\|_\infty$ are continuous on $\mathbb R$ and strictly increasing on $(0,\infty)$. Both assign probability zero to $0$, and take values strictly between $0$ and $1$ at every positive argument. Consequently, for every $u\in(0,1)$, each has a unique positive finite lower $u$-quantile $q$, with CDF value $u$, and is strictly increasing on an open neighborhood of $q$.

## Facts & Assumptions

**Given:** AC, the bounded positive density, complete wavelet basis, admissible weights, primitive map and Gaussian bridge in the Statement.

[F1] [[lem-m0w-separable-and-projection-tails]] and [[lem-multiscale-primitive-map-to-continuous-cdfs]]: $M_0(w)$ is separable, finite-level projections converge in its norm, and $J$ is continuous linear into $C([0,1])$.

[F2] [[def-negative-sobolev-space-for-white-noise]]: the basis is complete and orthonormal in $L^2([0,1])$, so its finite orthogonal projections converge in $L^2$.

[F3] [[lem-density-gaussian-bridge-is-borel-on-m0w]] supplies the Borel centered Gaussian law and its finite coefficient covariances. [[lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal]] and [[lem-mean-and-covariance-determine-gaussian-finite-dimensional-laws]] identify finite Gaussian laws, including singular laws, by means and covariances under AC.

[F4] [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]] supplies two independent copies of each Borel probability. [[lem-finite-measure-uniqueness-on-a-pi-system]] identifies Borel laws from their finite-coordinate laws whenever those coordinates generate the Borel sigma-algebra.

[F5] [[thm-finite-and-countable-subadditivity-of-measures]] and [[thm-continuity-from-above-for-measures]] give the countable null-union rule and continuity of probabilities along decreasing measurable events.

[F6] [[cor-cauchy-schwarz-for-random-variables]] controls the difference of second moments when both factors converge in $L^2$.

[F7] Under AC, standard Brownian motion $B$ exists by [[thm-existence-of-continuous-brownian-motion]], and put $\beta_t=B_t-tB_1$. The A-page definitions [[def-brownian-motion]] and [[def-gaussian-process]], finite expectation linearity in [[cor-expectation-linearity-monotonicity-and-modulus-bound]], and [[thm-covariance-bilinearity-and-symmetry]] give the direct bridge verification in step 3.1. Use the everywhere-continuous zero-start representative of [[thm-brownian-reflection-principle]].

[F8] [[lem-uncorrelated-jointly-gaussian-blocks-are-independent]]: finite jointly Gaussian blocks with zero cross-covariance are independent, including singular blocks.

[F9] [[thm-brownian-reflection-principle]]: for $a>0$ and $z\le a$, $P(\max_{t\le1}B_t\ge a,B_1\le z)=P(B_1\ge2a-z)$.

[A1] [[def-axiom-of-choice]]: full AC is assumed for [F3], [F4], [F7]–[F9].

## Proof

1.1 In either $E=M_0(w)$ or $E=C([0,1])$, the Borel sigma-algebra is generated by countably many continuous linear coordinates: the wavelet coordinates in the first case, and evaluations at rational times in the second. Indeed, the norm distance to a fixed point is their countable supremum, with the weights included in the first case; in the second case continuity makes the rational supremum equal the full supremum. Separability then gives a countable base of coordinate-measurable balls. Separability of $M_0(w)$ is [F1]; rational polygonal functions give a countable dense family in $C([0,1])$ by uniform continuity and finite rational approximation. Thus finite-coordinate laws determine Borel laws by [F4]. If $X$ is any centered Borel Gaussian random element in either space and $X'$ an independent copy, [F3] gives $-X\overset d=X$ and $X+X'\overset d=\sqrt2X$: every finite coordinate vector on either side is centered Gaussian with the same covariance. [A1, F1, F3, F4, given, construct]

2.1 For the law $\mu$ of such an $X$, let $S$ be its support, the set of points whose every open neighborhood has positive probability. Its complement is the union of all zero-mass balls in a countable base, hence has measure zero by [F5]; $S$ is closed and nonempty. Symmetry from step 1.1 gives $S=-S$. The support of $X+X'$ is $\overline{S+S}$: independent positive-mass balls around $s,t\in S$ give positive mass to every neighborhood of $s+t$, proving one inclusion; the other follows because $X,X'\in S$ almost surely, so their sum lies almost surely in the closed set $\overline{S+S}$. Scaling by $\sqrt2$ is a homeomorphism, so step 1.1 gives $\sqrt2S=\overline{S+S}$. Taking any $s\in S$ and $-s\in S$ shows $0\in\sqrt2S$, hence $0\in S$. Now $x+0\in\overline{S+S}=\sqrt2S$ gives $S\subseteq\sqrt2S$, while $x+x\in\sqrt2S$ gives $\sqrt2x\in S$ and hence $\sqrt2S\subseteq S$. Therefore $\sqrt2S=S$ and $\overline{S+S}=S$. The set $S$ is additive and symmetric, and division by $2$ follows by applying division by $\sqrt2$ twice. It is closed under dyadic rational scalars, and closure gives all real scalars. Thus $S$ is a closed linear subspace. [F4, F5, step 1.1, construct, algebra]

2.2 Put $Z=B_1$ and $M=\max_{0\le t\le1}\beta_t$. Every finite vector of bridge values is jointly Gaussian with $Z$ and has zero cross-covariance, because $\operatorname{Cov}(B_t-tB_1,B_1)=t-t=0$. By [F8] these finite vectors are independent of $Z$. The coordinate generation in step 1.1 and finite-measure uniqueness [F4], applied to rectangles and then the generated sigma-algebra, show that the entire bridge path, and hence $M$, is independent of $Z$. Write $\phi$ for the standard-normal density. For $c>\varepsilon>0$, [F9] implies that the measure $P(\max_{t\le1}B_t<c,Z\in dz)$ on $[-\varepsilon,\varepsilon]$ has density $\phi(z)-\phi(2c-z)$: subtract the reflected-event measure from the terminal normal measure; the reflected-event CDF in [F9] differentiates to $\phi(2c-z)$ for $z<c$. Thus $A_\varepsilon(c):=\frac{P(\max_{t\le1}B_t<c,|Z|\le\varepsilon)}{P(|Z|\le\varepsilon)}=\frac{\int_{-\varepsilon}^{\varepsilon}[\phi(z)-\phi(2c-z)]\,dz}{\int_{-\varepsilon}^{\varepsilon}\phi(z)\,dz}.$ For fixed $a>0$, take $0<\varepsilon<a/3$. Since $\|B-\beta\|_\infty\le\varepsilon$ on $\{|Z|\le\varepsilon\}$, the inclusions with thresholds $a-\varepsilon$ and $a+\varepsilon$, together with independence, give $A_\varepsilon(a-\varepsilon)\le P(M<a)\le A_\varepsilon(a+\varepsilon)$. Continuity and positivity of $\phi$ show that both bounds tend to $1-\phi(2a)/\phi(0)=1-e^{-2a^2}$. Hence $P(M<a)=1-e^{-2a^2}$ for every $a>0$. By [F5], $P(M\le a)=\lim_{k\to\infty}P(M<a+1/k)=1-e^{-2a^2}$ for $a>0$, and $M\ge0$ together with the same formula as $a\downarrow0$ gives $P(M=0)=0$. Therefore $M$ is atomless. [A1, F4, F5, F7, F8, F9, step 1.1, construct, algebra]

3.1 If $X$ has any nondegenerate scalar coordinate, then $P(X=0)=0$ and $S\ne\{0\}$. For every $r>0$, $0\in S$ gives $P(\|X\|<r)>0$. A nonzero $s\in S$ can be scaled to have norm greater than $r$, so some neighborhood of that scaled point lies in $\{\|X\|>r\}$ and has positive probability. Likewise, for $0<a<b$, scale $s$ to have norm $(a+b)/2$; a sufficiently small ball about it is contained in $\{a<\|X\|<b\}$ and has positive probability. Consequently its norm CDF is strictly between zero and one at every positive argument and strictly increasing there. This applies to $G$: any nonconstant wavelet has positive $P_0$-variance, because $f_0\ge\rho$ makes the $P_0$ and Lebesgue null sets identical and a nonconstant wavelet cannot equal a constant almost everywhere. [F3, step 2.1, given, algebra]

4.1 For each nonzero $x\in M_0(w)$, its norm is attained by some coordinate: if $r=\|x\|_{M(w)}>0$, the normalized level maxima are below $r/2$ after finitely many levels, and the maximum over the remaining finite set equals $r$. Enumerate all coordinates by $j$, and write $b_j>0$ for their norm weights: $b_j=w_l$ on detail level $l$, and $b_j=1$ for any additional Haar scaling coordinate. Hence, for $r>0$, $\{\|G\|_{M(w)}=r\}$ is contained in the countable union of events $\{|G_j|=rb_j\}$. Each has probability zero: a positive-variance normal has a density, and a zero-variance centered normal is zero whereas $rb_j>0$. By [F5] the union is null. At $r=0$, the nondegenerate coordinate from step 3.1 again gives probability zero; negative values are impossible. Absence of atoms and continuity of probability in [F5] show that this norm CDF is continuous on $\mathbb R$. [F3, F5, step 3.1, given, algebra]

4.2 First verify the bridge used in [F7] directly. Every finite linear combination of $\beta_{t_j}=B_{t_j}-t_jB_1$ is a finite linear combination of Brownian values with time $1$ appended, so it is normal by [F7], including repeated times and singular combinations. Finite expectation linearity makes its mean zero. Covariance bilinearity gives $\operatorname{Cov}(\beta_s,\beta_t)=\min(s,t)-ts-st+st=\min(s,t)-st$ for $s,t\in[0,1]$. On the single continuous zero-start Brownian path event supplied in [F7], subtraction of the continuous function $tB_1$ makes $\beta$ continuous, with $\beta_0=\beta_1=0$. Thus it is the needed centered continuous Gaussian bridge, without an example as a logical supplier. Write $Y=JG$. For every continuous real linear functional $L$ on $C([0,1])$, $L\circ J$ is continuous linear on $M_0(w)$, so $L(Y)$ is centered normal by [F3]; thus $Y$ is centered Gaussian. For $s\in[0,1]$, let $p_N1_{[0,s]}$ be the orthogonal wavelet projection through level $N$. Its Lebesgue $L^2$ limit is $1_{[0,s]}$ by [F2], and $f_0\le D$ gives the same convergence in $L^2(P_0)$. Put $U_N(s)=J(P_NG)(s)$. The coefficient covariance in [F3] gives $\operatorname{Cov}(U_N(s),U_M(t))=P_0[(p_N1_{[0,s]}-P_0p_N1_{[0,s]})(p_M1_{[0,t]}-P_0p_M1_{[0,t]})]$. In particular $U_N(s)$ is Cauchy in $L^2$, and it converges almost surely to $Y(s)$ by [F1]. Its $L^2$ limit therefore equals $Y(s)$ almost surely, since convergence in $L^2$ implies convergence in probability and two probability limits agree. The means are zero; applying [F6] to the product differences passes the covariances to the limit. Thus $Y$ is a centered continuous Gaussian process with covariance $F_0(s\wedge t)-F_0(s)F_0(t)$. The function $F_0$ is a continuous strictly increasing bijection of $[0,1]$ onto itself. By [F3], $Y$ and $t\mapsto\beta_{F_0(t)}$ from [F7] have the same finite Gaussian laws; step 1.1 then gives equality of their Borel laws on $C([0,1])$. In particular $\|Y\|_\infty\overset d=\|\beta\|_\infty$, and $Y$ has a nondegenerate evaluation coordinate, for example at any $s$ with $0<F_0(s)<1$. Step 3.1 therefore applies to its norm as well. [A1, F1, F2, F3, F6, F7, step 1.1, step 3.1, given, algebra]

5.1 By symmetry of the centered Gaussian bridge, $-\min_t\beta_t$ has the same atomless distribution as $M$. For $r\ge0$, continuity on a compact interval gives $\{\|\beta\|_\infty=r\}\subseteq\{M=r\}\cup\{-\min_t\beta_t=r\}$. Both events on the right are null by step 2.2 and symmetry; [F5] gives no atom at $r$. Negative norm values are impossible. By step 4.2, the CDF of $\|JG\|_\infty$ is therefore continuous on $\mathbb R$. [F3, F5, step 4.2, step 2.2, algebra]

6.1 Both norm CDFs are continuous by steps 4.1 and 5.1, vanish at zero, and are strictly increasing on $(0,\infty)$ with values strictly between zero and one by steps 3.1 and 4.2. They tend to one at infinity because both random norms are finite almost surely. For each $u\in(0,1)$, continuity therefore gives a positive finite point $q$ with CDF value $u$, strict increase gives its uniqueness, and monotonicity makes it the lower $u$-quantile. Any sufficiently small open interval around $q$ is contained in $(0,\infty)$, where strict increase holds. These are all the asserted quantile conditions. [F1, F5, step 3.1, step 4.1, step 4.2, step 5.1, given, algebra] ∎
