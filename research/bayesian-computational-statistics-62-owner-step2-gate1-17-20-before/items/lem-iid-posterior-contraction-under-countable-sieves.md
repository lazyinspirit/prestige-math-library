---
id: lem-iid-posterior-contraction-under-countable-sieves
kind: lemma
title: "Countably partitioned sieves yield posterior contraction by weighted entropy"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - lem-iid-posterior-denominator-lower-bound-from-kl-mass
  - def-hellinger-distance-between-density-laws
  - lem-hellinger-distance-controls-l1-and-total-variation
  - def-kullback-leibler-divergence
  - def-probability-measure
  - def-measure-with-density
  - def-identically-distributed-and-iid-random-variables
  - thm-factorization-of-expectations-for-independent-variables
  - cor-markov-inequality-for-random-variables
  - def-axiom-of-choice
  - def-dominated-statistical-experiment
  - def-likelihood-density
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - def-covering-packing-bracketing-number-and-metric-entropy
proof_strategy: direct
axiom_use: "AC is used by the directional KL denominator lemma and to select countably many finite covers; no uncountable family of nets is selected."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Subhashis Ghosal and Aad W. van der Vaart, Posterior convergence rates of Dirichlet mixtures at smooth densities, Theorem 5 and proof"
      url: "https://arxiv.org/pdf/0708.1885"
    - title: "Subhashis Ghosal, Jayanta K. Ghosh and Aad W. van der Vaart, Convergence rates of posterior distributions, Theorem 2.1 and Lemma 8.1"
      url: "https://doi.org/10.1214/aos/1016218228"
---

## Statement

Assume AC. For each $n$, let $\Pi_n$ be a prior on a measurable parameter
space $\Theta_n^*$, and let $p_\theta$ be a jointly measurable family of finite-valued densities
against one sigma-finite measure, and let $p_0$ be the true density for IID
data $X_1,\ldots,X_n$. Let $\epsilon_n,\delta_n>0$ satisfy
$\delta_n\le\epsilon_n$, $n\delta_n^2\to\infty$, and
$n\epsilon_n^2\to\infty$. Suppose for a constant $C_0>0$ that
$$\Pi_n\!\left\{\theta:\mathrm{KL}(P_0\Vert P_\theta)\le\delta_n^2,\quad
P_0\left[\log\frac{p_0}{p_\theta}\right]^2\le\delta_n^2\right\}\ge e^{-C_0n\delta_n^2}.$$
Let $S_n\subseteq\Theta_n^*$ be a measurable sieve with
$\Pi_n(S_n^c\mid X_{1:n})\to0$ in $P_0^n$-probability. Partition it into
countably many measurable sets $S_{n,j}$, put $\pi_{n,j}=\Pi_n(S_{n,j})$,
and let $N_{n,j}=N(\epsilon_n,\{p_\theta:\theta\in S_{n,j}\},h)$ be the
finite covering number as defined in [[def-covering-packing-bracketing-number-and-metric-entropy]], with centers in that density class, whenever $\pi_{n,j}>0$. If
$$e^{-n\epsilon_n^2}\sum_{j:\pi_{n,j}>0}\sqrt{N_{n,j}\pi_{n,j}}\longrightarrow0,$$
then for every sufficiently large fixed $M$, the posterior mass of
$$\{\theta:h(p_\theta,p_0)>M\epsilon_n\}$$
converges to zero in $P_0^n$-probability.

## Facts & Assumptions

**Given:** A dominated IID model with a jointly measurable density family, AC, the displayed local prior mass, a measurable sieve with vanishing posterior complement, and a countable measurable partition satisfying the weighted entropy condition.

[A1] Assume AC for the directional KL convention. [[def-axiom-of-choice]] [[def-kullback-leibler-divergence]]

[F1] [[lem-iid-posterior-denominator-lower-bound-from-kl-mass]]: if the local KL and log-square set has prior mass at least $e^{-C_0n\delta_n^2}$, then, except with probability at most $(n\delta_n^2)^{-1}$, the normalized likelihood denominator is at least $e^{-(C_0+2)n\delta_n^2}$.

[F2] [[def-hellinger-distance-between-density-laws]]: $h^2(P,Q)=\int(\sqrt p-\sqrt q)^2d\mu$ and $\int\sqrt{pq}d\mu=1-h^2(P,Q)/2$.

[F3] [[lem-hellinger-distance-controls-l1-and-total-variation]]: Hellinger distance is a metric and event-supremum total variation is bounded by Hellinger distance, including for finite product laws.

[F4] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: nonnegative measurable likelihood-ratio integrands may be integrated in either order.

[F5] [[def-dominated-statistical-experiment]] and [[def-likelihood-density]]: all densities are relative to the same fixed sigma-finite measure; the supplied family is jointly measurable, so likelihood-ratio integrals are measurable.

[F6] [[def-identically-distributed-and-iid-random-variables]] and [[thm-factorization-of-expectations-for-independent-variables]]: disjoint finite blocks of an IID sample are independent, and expectations of products of nonnegative functions of those blocks factor.

[F7] [[cor-markov-inequality-for-random-variables]]: for a nonnegative random variable $Y$ and $a>0$, $P(Y\ge a)\le E[Y]/a$.

[F8] [[def-probability-measure]] and [[def-measure-with-density]]: $P_0$ and each model law are probability measures represented by their displayed densities; integrating $p_\theta/p_0$ under $P_0$ gives $\int_{\{p_0>0\}}p_\theta\,d\mu\le1$.

[F9] [[def-covering-packing-bracketing-number-and-metric-entropy]]: $N(\epsilon,\mathcal F,h)$ is the least finite number of centers from $\mathcal F$ whose closed Hellinger balls of radius $\epsilon$ cover $\mathcal F$.

## Proof

**Given:** The hypotheses in the Statement.

1.1 Put $x_n=n\epsilon_n^2$, $y_n=n\delta_n^2$, and let $D_n$ be the likelihood denominator relative to $p_0^n$. By [F1], on an event $\Omega_n$ with $P_0^n(\Omega_n^c)\le y_n^{-1}$, $D_n\ge e^{-(C_0+2)y_n}$. [A1, F1, given]

1.2 Write $T_n=\sum_j\sqrt{N_{n,j}\pi_{n,j}}$ and $s_n=e^{-x_n}T_n$, so $s_n\to0$. Fix $K>2(C_0+3)$ and split indices into active $J_n^+=\{j:\pi_{n,j}\ge e^{-Kx_n}\}$ and small-mass $J_n^-$. Since $N_{n,j}\ge1$, $\sum_{J_n^-}\pi_{n,j}\le e^{-Kx_n/2}T_n=e^{(1-K/2)x_n}s_n$. For active $j$, $\sqrt{N_{n,j}\pi_{n,j}}\le T_n=e^{x_n}s_n$, hence $\log(N_{n,j}/\pi_{n,j})\le(2+2K)x_n$ for all sufficiently large $n$. [given, algebra]

1.3 Fix a sufficiently large constant $M$. If $M\epsilon_n\ge\sqrt2$, then the alternative is empty because Hellinger distance is at most $\sqrt2$, and the desired posterior mass is zero for this $n$. For the remaining $n$, choose, by [A1], a finite $\epsilon_n$-cover with centers in each active stratum's density image, as allowed by [F9]. For every center $q$ within $\epsilon_n$ of a density $p_\theta$ satisfying $h(p_\theta,p_0)>M\epsilon_n$, the triangle inequality gives $h(q,p_0)>(M-1)\epsilon_n$. Set $m_n=\left\lceil\frac{2\log 8}{(M-1)^2\epsilon_n^2}\right\rceil$. On a block of $m_n$ observations define $T_q=\mathbf1\{\prod_iq(X_i)>\prod_i p_0(X_i)\}$. On rejection, $p_0^{\otimes m_n}\le\sqrt{p_0^{\otimes m_n}q^{\otimes m_n}}$, so its type-I error is at most the product affinity; on acceptance, $q^{\otimes m_n}\le\sqrt{p_0^{\otimes m_n}q^{\otimes m_n}}$, so its type-II error under $q$ has the same bound. By [F2], this affinity is $(1-h^2(q,p_0)/2)^{m_n}\le e^{-m_nh^2(q,p_0)/2}\le1/8$. [A1, F2, F9, given, construct]

2.1 If $h(p_\theta,q)\le\epsilon_n$, product affinity gives $h^2(P_\theta^{m_n},Q^{m_n})=2\left[1-\left(1-h^2(p_\theta,q)/2\right)^{m_n}\right]\le m_n\epsilon_n^2$, using $1-(1-u)^m\le mu$ for $u\in[0,1]$; [F3] bounds their total variation by $\sqrt{m_n}\epsilon_n$. Since $M\epsilon_n<\sqrt2$, $\epsilon_n^2<2/M^2$ and $m_n\epsilon_n^2\le\frac{2\log8}{(M-1)^2}+\frac{2}{M^2}\le1/64$ for sufficiently large $M$. The total variation is then at most $1/8$. Therefore the block test in step 1.3 rejects with probability at least $3/4$ under every $p_\theta$ in the alternative and at most $1/8$ under $p_0$. [F2, F3, step 1.3, algebra]

3.1 Divide $L_n=\lfloor n/m_n\rfloor$ disjoint blocks and let $Y_k$ be their block-test indicators. Under each IID law the indicators are independent by [F6]; their means are at most $a=1/8$ under $P_0$ and at least $b=3/4$ under every alternative by step 2.1. For independent Bernoulli variables with means at most $a$, exponential Markov [F7] gives $P_0(L_n^{-1}\sum Y_k\ge t)\le e^{-L_nD(t\Vert a)}$; with means at least $b$, the negative-exponential bound gives $P_\theta(L_n^{-1}\sum Y_k<t)\le e^{-L_nD(t\Vert b)}$, where $D(t\Vert u)=t\log(t/u)+(1-t)\log((1-t)/(1-u))$. These bounds follow by bounding each moment generating function by $1-u+ue^\lambda$ (using $u=a$ for $\lambda>0$, $u=b$ for $\lambda<0$) and optimizing over $\lambda$. [F6, F7, step 2.1, algebra]

4.1 The function $D(t\Vert a)-D(t\Vert b)$ is affine and strictly increasing on $[a,b]$, is negative at $a$, and equals $D(b\Vert a)>0$ at $b$. Let $t_*$ be its unique zero. By AC [A1], for each active $j$ choose $t_j\in[t_*,b]$ such that $L_n\{D(t_j\Vert a)-D(t_j\Vert b)\}=\log(N_{n,j}/\pi_{n,j})$. This is possible after increasing $M$: writing $A=2\log 8$, $M\epsilon_n<\sqrt2$ implies $A/((M-1)^2\epsilon_n^2)>2$ for sufficiently large $M$, so the ceiling in $m_n$ costs at most a fixed factor; since $n\epsilon_n^2\to\infty$, the floor in $L_n$ also costs at most a fixed factor eventually. Hence $L_n\ge cM^2x_n$ for a universal $c>0$, while step 1.2 bounds the right side by $(2+2K)x_n$. Define $\phi_{n,j}$ as the maximum of the block-majority tests over its $N_{n,j}$ centers, using threshold $t_j$. Continuity on $[t_*,b]$ and positivity of both divergences at $t_*$ give a constant $c_*>0$ such that $(D(t\Vert a)+D(t\Vert b))/2\ge c_*$ there. The null union bound and step 3.1 give $P_0^n(\phi_{n,j}=1)\le\sqrt{N_{n,j}\pi_{n,j}}e^{-c_*L_n}$; the same Chernoff bound for a center within $\epsilon_n$ of each alternative gives $\sup_{\theta\in S_{n,j}:h(p_\theta,p_0)>M\epsilon_n}P_\theta^n(\phi_{n,j}=0)\le\sqrt{N_{n,j}/\pi_{n,j}}e^{-c_*L_n}$ by step 2.1. [A1, step 1.2, step 2.1, step 3.1, algebra]

5.1 Let $\phi_n$ be one on the countable union of the rejection events of $\phi_{n,j}$ over $j\in J_n^+$ and zero otherwise; it is measurable as a countable union of measurable events. The union bound and step 4.1 give $P_0^n(\phi_n=1)\le T_ne^{-c_*L_n}$. For the tested likelihood numerator on an active stratum, Tonelli [F4], the jointly measurable likelihood interface [F5] and change of density give $E_0[(1-\phi_n)\int_{\{\theta\in S_{n,j}:h(p_\theta,p_0)>M\epsilon_n\}}\prod_i\frac{p_\theta(X_i)}{p_0(X_i)}\,\Pi_n(d\theta)]\le\pi_{n,j}\sup_{\theta\text{ in the set}}P_\theta^n(1-\phi_{n,j})\le\sqrt{N_{n,j}\pi_{n,j}}e^{-c_*L_n}.$ [F4, F5, step 4.1, algebra]

6.1 Write $d_n=e^{-(C_0+2)y_n}$. For the active numerator $R_n^+$, step 5.1 gives $P_0^n(\phi_n=1)\le T_ne^{-c_*L_n}$ and $E_0[(1-\phi_n)R_n^+]\le T_ne^{-c_*L_n}$. Thus, for every fixed $\zeta>0$, $P_0^n(R_n^+/D_n>\zeta)\le P_0^n(D_n<d_n)+T_ne^{-c_*L_n}+\zeta^{-1}d_n^{-1}T_ne^{-c_*L_n}$. This tends to zero for sufficiently large $M$, since $T_n=e^{x_n}s_n$, $y_n\le x_n$, $L_n\ge cM^2x_n$, and $s_n\to0$. For the small-mass numerator $R_n^-$, [F8] and Tonelli give $E_0[R_n^-]\le\sum_{J_n^-}\pi_{n,j}\le e^{-Kx_n/2}T_n$; hence its posterior mass tends to zero in probability by Markov and the denominator event, because $e^{(C_0+2)y_n}e^{-Kx_n/2}T_n\le s_ne^{(C_0+3-K/2)x_n}\to0$ when $K>2(C_0+3)$. [F7, F8, step 1.1, step 1.2, step 5.1, algebra]

7.1 The posterior outside the $M\epsilon_n$-ball is the union of its active-stratum part, its small-mass-stratum part, and the sieve complement. Step 6.1 sends the first two parts to zero in probability, and the sieve-complement term tends to zero by hypothesis. [given, step 6.1] ∎
