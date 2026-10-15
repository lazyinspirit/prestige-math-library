---
id: thm-dirichlet-normal-mixture-posterior-contraction
kind: theorem
title: "Dirichlet normal-mixture posterior contraction"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 9
deps:
  - lem-dirichlet-normal-mixture-density-well-defined
  - lem-dirichlet-normal-mixture-countable-band-entropy-sum
  - lem-dirichlet-normal-mixture-local-prior-mass
  - lem-iid-posterior-contraction-under-countable-sieves
  - lem-dirichlet-normal-mixture-posterior-sieve-tail
  - lem-iid-posterior-denominator-lower-bound-from-kl-mass
  - def-dirichlet-process
  - thm-existence-of-dirichlet-process-by-normalized-gamma-poisson-random-measure
  - def-dominated-statistical-experiment
  - def-likelihood-density
  - def-hellinger-distance-between-density-laws
  - def-kullback-leibler-divergence
  - def-axiom-of-choice
proof_strategy: direct
axiom_use: "Full AC is used by the normalized-gamma DP construction and imported directional KL convention; it is stated explicitly and is not strengthened."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Subhashis Ghosal and Aad W. van der Vaart, Posterior convergence rates of Dirichlet mixtures at smooth densities, Theorem 1 and complete proof"
      url: "https://arxiv.org/pdf/0708.1885"
    - title: "Subhashis Ghosal and Aad W. van der Vaart, Fundamentals of Nonparametric Bayesian Inference, Chapter 5 Theorem 5.19 and Chapter 6 Theorem 6.6"
      url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/bayesianstatistics"
    - title: "Subhashis Ghosal, The Dirichlet Process, Related Priors and Posterior Asymptotics, §§2.5.2–2.5.3"
      url: "https://people.eecs.berkeley.edu/~jordan/sail/readings/Ghosal09.pdf"
---

## Statement

Assume AC. Let $p_0$ be a finite-valued probability density on $\mathbb R$
with compact support. Assume $p_0\in C^2(\mathbb R)$ and, with the
integrands set to zero on $\{p_0=0\}$,
$$\int_{\{p_0>0\}}\left[\left(\frac{p_0''}{p_0}\right)^2+
\left(\frac{p_0'}{p_0}\right)^4\right]p_0\,dx<\infty,$$
and assume there is $C<\infty$ such that
$$h(p_0,p_0*\phi_\sigma)\le C\sigma^2$$
for all sufficiently small $\sigma>0$. Here $h$ is the root-L2 Hellinger
distance of [[def-hellinger-distance-between-density-laws]], and
$\phi_\sigma$ is the centered normal density with standard deviation
$\sigma$. Let $F\sim DP(\alpha)$, where $\alpha$ is a finite nonzero
measure with a continuous, strictly positive Lebesgue density on an open
interval containing $\operatorname{supp}(p_0)$, and independently let
$S\sim G$ on $(0,\infty)$. For $\sigma=\sigma_nS$, define
$$p_{F,\sigma}(x)=\int\phi_\sigma(x-z)F(dz),$$
and observe $X_1,\ldots,X_n$ IID from $p_0$. Suppose
$$n^{-a_1}\lesssim\sigma_n\lesssim n^{-a_2},\qquad
0<a_2<a_1<1,\qquad a_2\ge(4+\gamma)^{-1},$$
and, for some $\beta>0$ and $\gamma>1$,
$$G((0,s])\lesssim e^{-\beta s^{-\gamma}}\ (s\downarrow0),\qquad
G((s,\infty))\lesssim e^{-\beta s^\gamma}\ (s\to\infty).$$
Here $u_n\lesssim v_n$ means $u_n\le Cv_n$ eventually for a fixed
constant $C$. For every fixed
$\eta>\gamma/[2(\gamma-1)]$, put
$$\epsilon_n=\max\left\{(n\sigma_n)^{-1/2}\log n,
n^{-1/2}\sigma_n^{-\eta},\ \sigma_n^2\log n\right\}.$$
Then for every sufficiently large fixed $M$,
$$\Pi_n\!\left(h(p_{F,\sigma},p_0)>M\epsilon_n\mid X_{1:n}\right)
\longrightarrow0$$
in $P_0^n$-probability. If $G$ is compactly supported in $(0,\infty)$,
the middle term $n^{-1/2}\sigma_n^{-\eta}$ may be omitted. The conclusion
is only in probability; it supplies no almost-sure contraction or generic
minimax-optimality assertion.

## Facts & Assumptions

**Given:** Full AC; the compactly supported smooth truth and displayed smoothness/convolution conditions; the finite DP base measure with its density condition; independent scale law; polynomial bandwidth and scale-tail hypotheses; and an IID sample from $p_0$.

[A1] Full AC supplies the normalized-gamma DP construction and the directional KL convention. [[def-axiom-of-choice]] [[thm-existence-of-dirichlet-process-by-normalized-gamma-poisson-random-measure]] [[def-kullback-leibler-divergence]]

[F1] [[def-dirichlet-process]] and [[thm-existence-of-dirichlet-process-by-normalized-gamma-poisson-random-measure]]: $DP(\alpha)$ is a measurable random probability measure with the stated Dirichlet finite-partition laws.

[F2] [[lem-dirichlet-normal-mixture-density-well-defined]]: $(F,\sigma,x)\mapsto p_{F,\sigma}(x)$ is jointly measurable, positive, finite, and integrates to one.

[F3] [[lem-dirichlet-normal-mixture-local-prior-mass]]: for $d_n=\max\{(n\sigma_n)^{-1/2}\log n,\sigma_n^2\log n\}$, the local KL and log-square neighborhood has mass at least $e^{-C n d_n^2}$, with both quantities at most $C d_n^2$.

[F4] [[lem-iid-posterior-denominator-lower-bound-from-kl-mass]]: local KL/log-square mass at least $e^{-n\bar d_n^2}$ gives, with probability at least $1-(n\bar d_n^2)^{-1}$, a likelihood denominator at least $e^{-3n\bar d_n^2}$.

[F5] [[lem-dirichlet-normal-mixture-posterior-sieve-tail]]: given that denominator bound, for any compact interval $I=[L,U]$ containing the truth, put $R=(U-L)/2$ and $I_d=[L-d,U+d]$. If $s_n\to0$, $nq_n-5n\bar d_n^2\to\infty$ for $q_n=2\Phi(-R/s_n)$, where $\Phi$ is the standard normal distribution function, and $n\xi_n^{-2}s_n^{-1}e^{-d^2/(2s_n^2)}\to0$, then the posterior complement of $\{F(I_d^c)\le\xi_n^2,\sigma\le s_n\}$ vanishes, provided $n\xi_n^2\to\infty$ and the DP base density is bounded below near $I$.

[F6] [[lem-dirichlet-normal-mixture-countable-band-entropy-sum]]: for a fixed $A\ge1$ and dyadic scale bands whose sieve satisfies $F([-A,A]^c)\le\min\{r_n,1/4\}^2/8$, the weighted entropy condition holds when $r_n$ dominates the displayed first and middle rate terms; for compact scale support it holds with only the first term.

[F7] [[lem-iid-posterior-contraction-under-countable-sieves]]: local KL/log-square mass, a sieve with vanishing posterior complement, and the weighted countable-band entropy condition imply contraction in the same Hellinger metric at every sufficiently large fixed multiple of the target radius.

[F8] [[def-dominated-statistical-experiment]] and [[def-likelihood-density]]: the sampling experiment is dominated by Lebesgue measure, and the supplied jointly measurable mixture densities define its likelihoods.

[F9] [[def-hellinger-distance-between-density-laws]]: $h$ in the conclusion is the root-L2 Hellinger distance between square-root densities.

## Proof

**Given:** The hypotheses in the Statement.

1.1 Put $d_n=\max\{(n\sigma_n)^{-1/2}\log n,\sigma_n^2\log n\}$. By [F3], choose $C_1\ge1$ so the prior mass is at least $e^{-C_1nd_n^2}$ on a set where both local quantities are at most $C_1d_n^2$. Set $\bar d_n=\sqrt{C_1}d_n$. Then the mass is at least $e^{-n\bar d_n^2}$ and both quantities are at most $\bar d_n^2$. By [F4], except on an event of probability at most $(n\bar d_n^2)^{-1}$, the likelihood denominator is at least $e^{-3n\bar d_n^2}$. Also $n\bar d_n^2\ge C_1\sigma_n^{-1}(\log n)^2\to\infty$. [A1, F3, F4, given, algebra]

1.2 Choose a compact interval $I=[L,U]$ containing $\operatorname{supp}(p_0)$ in its interior and contained in the open interval where the density of $\alpha$ is continuous and strictly positive. Such an interval exists because the support is compact; its base density is bounded below on $I$. Put $R=(U-L)/2>0$ and $\kappa=\max\{a_1,1-4a_2,0\}<1$. The polynomial bandwidth bounds give $n\bar d_n^2\le Cn^\kappa(\log n)^2$. Choose $s_n=c_0(\log n)^{-1/2}$ with $c_0$ large enough that for some $\theta<1-\kappa$, $q_n:=2\Phi(-R/s_n)\ge n^{-\theta}$ eventually: integrating the standard normal density on $[R/s_n,R/s_n+1]$ gives the claimed lower bound once $R^2/(2c_0^2)<\theta$. Hence $nq_n-5n\bar d_n^2\to\infty$. Set $r_n=M_0\epsilon_n$ for a fixed sufficiently large $M_0$, and $\xi_n=\min\{r_n,1/4\}/\sqrt8$. We have $n\xi_n^2\to\infty$ and $\xi_n^{-2}\le Cn$: if $r_n<1/4$, use $\epsilon_n\ge n^{-1/2}\log n$ for all large $n$, and otherwise $\xi_n$ is fixed. Choose $d>0$ with $d^2/(2c_0^2)>4$ and $A\ge1$ large enough that $I_d=[L-d,U+d]\subseteq[-A,A]$. Then $n\xi_n^{-2}s_n^{-1}e^{-d^2/(2s_n^2)}\to0$. Applying [F5] gives posterior concentration on $\{F(I_d^c)\le\xi_n^2,\sigma\le s_n\}$. Since $[-A,A]^c\subseteq I_d^c$, the larger sieve $S_n=\{F([-A,A]^c)\le\xi_n^2,\sigma\le s_n\}$ also has $\Pi_n(S_n^c\mid X_{1:n})\to0$. [F5, given, construct, algebra]

1.3 Partition $S_n$ into dyadic scale bands $S_{n,j}=S_n\cap\{2^j\sigma_n\le\sigma<2^{j+1}\sigma_n\}$ for $2^j\sigma_n\le s_n$. Their prior masses are bounded by $G([2^j,2^{j+1}))$. Since $\xi_n^2=\min\{r_n,1/4\}^2/8$, [F6] applies at radius $r_n$ and gives $e^{-nr_n^2}\sum_j\sqrt{N(r_n,\{p_{F,\sigma}:(F,\sigma)\in S_{n,j}\},h) \,\Pi_n(S_{n,j})}\longrightarrow0.$ For compactly supported $G$, only finitely many bands have positive prior mass and the first rate term suffices. [F2, F6, given, algebra]

2.1 If $G$ is compactly supported, put $\epsilon_n^{\mathrm c}=\max\{(n\sigma_n)^{-1/2}\log n,\sigma_n^2\log n\}$, $r_n^{\mathrm c}=M_0\epsilon_n^{\mathrm c}$ and $\xi_n^{\mathrm c}=\min\{r_n^{\mathrm c},1/4\}/\sqrt8$. Since $\sigma_n\to0$, $n(\epsilon_n^{\mathrm c})^2\ge\sigma_n^{-1}(\log n)^2\to\infty$ and $(\epsilon_n^{\mathrm c})^{-2}\le Cn$. Thus $n(\xi_n^{\mathrm c})^2\to\infty$ and $(\xi_n^{\mathrm c})^{-2}\le Cn$. Also $\bar d_n\le\sqrt{C_1}\epsilon_n^{\mathrm c}$. Retain $I,s_n,d,A$ from step 1.2: its denominator, leakage bound, and exponential factor do not depend on the target radius, so the hypotheses of [F5] hold with $\epsilon_n^{\mathrm c}$ and $\xi_n^{\mathrm c}$ in place of $\epsilon_n$ and $\xi_n$. It yields posterior sieve complement convergence for $S_n^{\mathrm c}=\{F([-A,A]^c)\le(\xi_n^{\mathrm c})^2,\sigma\le s_n\}$. The compact branch of [F6] supplies the weighted entropy condition at radius $r_n^{\mathrm c}$ using only the first rate term. [F5, F6, given, step 1.1, step 1.2, algebra]

3.1 The prior is the measurable DP law from [F1], and [F2], [F8] give its jointly measurable density likelihoods. We have $\bar d_n\le\sqrt{C_1}\epsilon_n$, so increasing $M_0$ if necessary ensures $\bar d_n\le r_n$; also $n\bar d_n^2,nr_n^2\to\infty$. Thus [F3] supplies the local prior-mass condition for [F7]. For general $G$, steps 1.2 and 1.3 provide a sieve with vanishing posterior complement and its weighted entropy condition. If $G$ is compactly supported, step 2.1 instead provides these two conditions at radius $r_n^{\mathrm c}$, and its bound $\bar d_n\le\sqrt{C_1}\epsilon_n^{\mathrm c}$ allows $M_0$ to be chosen so $\bar d_n\le r_n^{\mathrm c}$. Apply [F7] with local radius $\bar d_n$ and target radius $r_n$ in the general case, or $r_n^{\mathrm c}$ in the compact case. It follows that for every sufficiently large fixed $M_1$, the posterior outside $M_1M_0\epsilon_n$ (respectively $M_1M_0\epsilon_n^{\mathrm c}$) tends to zero in $P_0^n$-probability. Since $M_1M_0$ can be any sufficiently large fixed constant, this proves the stated rates. The measurability and dominated-likelihood requirements are supplied by [F1], [F2], and [F8], and [F9] fixes the conclusion's metric convention. [A1, F1, F2, F3, F6, F7, F8, F9, step 1.1, step 1.2, step 1.3, step 2.1, algebra] ∎
