---
id: thm-private-online-learning-regret-under-composition
kind: theorem
title: "Private online learning regret under composition"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - alg-private-randomized-weighted-majority
  - cor-exponential-reciprocal-and-positivity
  - def-axiom-of-choice
  - def-conditional-expectation-given-a-sigma-algebra
  - def-filtration-and-filtered-probability-space
  - def-martingale-difference-sequence
  - def-natural-logarithm
  - def-real-exponential-function-and-e
  - lem-qa-30-exp-quadratic-bound
  - thm-advanced-adaptive-composition-arbitrary-measurable-outputs
  - thm-azuma-hoeffding-inequality
  - thm-exponential-addition-formula
  - thm-exponential-is-strictly-increasing
  - thm-logarithm-derivative-and-integral
  - thm-natural-logarithm-laws
justified_by: []
proof_strategy: direct
axiom_use: AC is used to invoke the advanced-composition and Azuma–Hoeffding suppliers. The finite potential and per-round likelihood-ratio arguments use no choice principle.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Cynthia Dwork and Aaron Roth, The Algorithmic Foundations of Differential Privacy, Chapter 11 §11.2"
      url: "https://privacytools.seas.harvard.edu/resource/thealgorithmicfoundationsofdifferentialprivacypdf"
    - title: "Salil Vadhan, The Complexity of Differential Privacy, 2017 manuscript, §2.2"
      url: "https://salil.seas.harvard.edu/sites/g/files/omnuum4266/files/salil/files/manuscript_2017.pdf"
---

## Statement

Let $k,T\ge1$ be integers, let $[k]=\{1,\ldots,k\}$, let $\eta>0$, and let each loss vector lie in $[0,1]^k$. Before round $t$ define $w_{t,j}=\exp(-\eta\sum_{s<t}\ell_s(j))$, $W_t=\sum_{i=1}^k w_{t,i}$, and $p_{t,j}=w_{t,j}/W_t$. Draw $a_t=j$ with probability $p_{t,j}$, then observe the full vector $\ell_t$ and update $w_{t+1,j}=w_{t,j}\exp(-\eta\ell_t(j))$; release the transcript $(a_1,\ldots,a_T)$. For the regret claims, assume a filtered probability model $(\Omega,\mathcal F,(\mathcal F_t)_{t=0}^T,\mathbb P)$ in which $\ell_t$ and $p_t$ are $\mathcal F_{t-1}$-measurable, each action $a_t$ is $\mathcal F_t$-measurable, and $\mathbb P(a_t=j\mid\mathcal F_{t-1})=p_{t,j}$ for every $j\in[k]$; hence each prior action is $\mathcal F_{t-1}$-measurable and the loss vector may depend on the previous transcript but not on the current draw. Set
$$R_T=\frac1T\sum_{t=1}^T\ell_t(a_t)-\min_{j\in[k]}\frac1T\sum_{t=1}^T\ell_t(j).$$
Then
$$\mathbb E R_T\le \eta+\frac{\ln k}{\eta T},$$
for every such process. Assuming the Axiom of Choice, for every $0<\beta<1$,
$$\Pr\!\left(R_T\le \eta+\frac{\ln k}{\eta T}+\sqrt{\frac{\ln(1/\beta)}{2T}}\right)\ge1-\beta.$$
The expected-regret proof uses no choice axiom. At $k=1$, $R_T=0$ identically. For $k\ge2$, substituting $\eta=\sqrt{\ln k/T}$ into the expected-regret bound gives $2\sqrt{\ln k/T}$.

For privacy, let $\mathcal L_T:=([0,1]^k)^T$ carry the power-set sigma-algebra, regard a fixed sequence $(\ell_1,\ldots,\ell_T)\in\mathcal L_T$ as the input, and make two sequences adjacent when one complete time-step vector is replaced by an arbitrary vector in $[0,1]^k$. Give the full action transcript $[k]^T$ its power-set sigma-algebra. For every common prior action history, the round-$t$ action kernels satisfy the ordered event inequalities for $(2\eta,0)$-differential privacy. Assuming the Axiom of Choice, for every $\varepsilon>0$ and $0<\delta<1$, put $L=\ln(1/\delta)$ and choose
$$\eta=\min\left\{\frac{\varepsilon}{\sqrt{32TL}},\frac12,\sqrt{\frac{\varepsilon}{16T}}\right\}.$$
The full transcript is then $(\varepsilon,\delta)$-differentially private. With this choice the high-probability bound above is exactly
$$R_T\le \eta+\frac{\ln k}{T} \max\left\{\frac{\sqrt{32TL}}{\varepsilon},\,2,\,4\sqrt{\frac{T}{\varepsilon}}\right\} +\sqrt{\frac{\ln(1/\beta)}{2T}}$$
with probability at least $1-\beta$. If $\eta_0=\varepsilon/\sqrt{32TL}$ satisfies $\varepsilon\le\sqrt{8TL}$ and $\varepsilon\le2L$, then $\eta=\eta_0$ and this bound specializes to
$$R_T\le \eta_0+\frac{\sqrt{32L}\,\ln k}{\varepsilon\sqrt T} +\sqrt{\frac{\ln(1/\beta)}{2T}}.$$
The fixed-sequence privacy claim and the nonanticipating adaptive-loss regret claim have distinct input quantifiers. The same privacy conclusion applies on any set of interactive loss-generating strategies equipped with its power-set sigma-algebra and a symmetric adjacency relation, provided that, for each strategy, its action kernels are measurable in the prior transcript and, at every common transcript, they satisfy the ordered $(2\eta,0)$ event inequalities for every ordered adjacent pair of strategies.

## Statement references

Dwork and Roth, *The Algorithmic Foundations of Differential Privacy*, Chapter 11 §11.2, Theorems 11.1–11.4: [full text](https://privacytools.seas.harvard.edu/resource/thealgorithmicfoundationsofdifferentialprivacypdf).

Vadhan, *The Complexity of Differential Privacy*, §2.2: [full text](https://salil.seas.harvard.edu/sites/g/files/omnuum4266/files/salil/files/manuscript_2017.pdf).

## Facts & Assumptions

**Given:** Positive integers $k,T$, a parameter $\eta>0$, the stated finite-action algorithm, a filtered probability model as in the Statement, and $0<\beta<1$. Assume AC for the Azuma tail and transcript-composition claim; for the privacy choice also assume $\varepsilon>0$ and $0<\delta<1$.

[F1] The algorithm draws from the normalized current weights using fresh randomness independent of the loss process, reveals the full loss vector after the draw, and updates by $w_{t+1,j}=w_{t,j}\exp(-\eta\ell_t(j))$. [[alg-private-randomized-weighted-majority]]

[F2] For $0<\rho\le1$ and $x\in[-1,1]$, $\exp(-\rho x)\le1-\rho x+\rho^2$. [[lem-qa-30-exp-quadratic-bound]]

[F3] The exponential addition law holds and the exponential function is strictly increasing. [[thm-exponential-addition-formula]], [[thm-exponential-is-strictly-increasing]]

[F4] The natural logarithm is the inverse of the exponential on positive reals, has derivative $1/x$ and integral representation $\ln z=\int_1^zdu/u$, and is increasing with the usual quotient laws. In particular, $\ln z\le z-1$ for every $z>0$: for $z\ge1$ integrate $1/u\le1$ on $[1,z]$; for $0<z<1$ integrate $1/u\ge1$ on $[z,1]$ and negate. [[def-natural-logarithm]], [[thm-logarithm-derivative-and-integral]], [[thm-natural-logarithm-laws]]

[F5] A filtration is an increasing sequence of sigma-algebras. A conditional-expectation version is an integrable measurable function whose integral on every event in the conditioning sigma-algebra equals that of the original variable. [[def-filtration-and-filtered-probability-space]], [[def-conditional-expectation-given-a-sigma-algebra]]

[F6] A martingale-difference sequence is adapted and integrable, with each increment having conditional expectation zero given the preceding sigma-algebra. Its definition assumes AC for conditional-expectation existence. [[def-martingale-difference-sequence]]

[F7] Under AC, if martingale differences lie in predictable intervals of lengths at most $c_t$, then for $s>0$ their upper tail is at most $\exp(-2s^2/\sum_t c_t^2)$. [[thm-azuma-hoeffding-inequality]]

[A1] The Axiom of Choice states that every family of nonempty sets has a choice function. [[def-axiom-of-choice]]

[F8] Under AC, adaptive composition of $T$ mechanisms with arbitrary measurable output spaces is $(\varepsilon',T\delta_r+\delta')$-DP when each common-history round is $(\varepsilon_r,\delta_r)$-DP, with $\varepsilon_r\ge0$, $0\le\delta_r\le1$, and $T\delta_r+\delta'\le1$, where
$$\varepsilon'=\varepsilon_r\sqrt{2T\ln(1/\delta')}+T\varepsilon_r(e^{\varepsilon_r}-1),\qquad 0<\delta'<1.$$
The theorem allows any symmetric adjacency relation on the input set. [[thm-advanced-adaptive-composition-arbitrary-measurable-outputs]]

[F9] The real exponential is finite and strictly positive at every real input. [[def-real-exponential-function-and-e]], [[cor-exponential-reciprocal-and-positivity]]

## Proof

**Given:** The hypotheses in the Statement and [F1]–[F9], with [A1] for the AC-qualified claims.

1.1 First suppose $0<\eta\le1$. Write $W_t=\sum_{j=1}^k w_{t,j}$ and $\mu_t=\sum_{j=1}^k p_{t,j}\ell_t(j)$. By [F2] with $\rho=\eta$ and $x=\ell_t(j)$, $W_{t+1}/W_t=\sum_jp_{t,j}e^{-\eta\ell_t(j)}\le1-\eta\mu_t+\eta^2$. Both sides are positive: the left side is positive by [F9], and it is at most the right side. Applying the increasing logarithm and then [F4] gives $\ln(W_{t+1}/W_t)\le-\eta\mu_t+\eta^2$. Summing over $t$ and using $W_1=k$ yields $\ln(W_{T+1}/k)\le-\eta\sum_t\mu_t+T\eta^2$. [given, F1, F2, F4, F9]

1.2 Fix two adjacent loss sequences and a common prior action history. Before round $t$, their cumulative losses differ coordinatewise by at most one, because only one full loss vector was replaced and each coordinate belongs to $[0,1]$. By [F1], [F3], and [F9], the positive unnormalized weights for each action have ratio between $e^{-\eta}$ and $e^\eta$. Summing over actions gives the same two-sided bounds for their normalizers. Dividing the weight ratios by the normalizer ratios bounds each action-probability ratio by $e^{2\eta}$ in either order; summing over any event proves the ordered $(2\eta,0)$ round-kernel inequalities. [given, F1, F3, F9]

2.1 For every expert $j$, $W_{T+1}\ge w_{T+1,j}=\exp(-\eta\sum_t\ell_t(j))$. The finite set of cumulative losses has a minimizer. Taking logarithms and combining with step 1.1 gives $\sum_t\mu_t-\min_j\sum_t\ell_t(j)\le(\ln k)/\eta+\eta T$. This is a pathwise inequality for every realized sequence, including one selected adaptively from earlier actions. [given, F1, step 1.1]

2.2 Set $L=\ln(1/\delta)>0$. Apply [F8] with $\varepsilon_r=2\eta>0$, $\delta_r=0$, and $\delta'=\delta\in(0,1)$; its remaining parameter condition holds since $T\delta_r+\delta'=\delta<1$. The composed privacy parameter is $2\eta\sqrt{2TL}+2T\eta(e^{2\eta}-1)$. The first cap in $\eta$ bounds the first summand by $\varepsilon/2$. The second cap gives $2\eta\le1$; [F2] with $\rho=2\eta$ and $x=-1$ gives $e^{2\eta}-1\le2\eta+4\eta^2\le4\eta$. The third cap therefore bounds the second summand by $8T\eta^2\le\varepsilon/2$. Their sum is at most $\varepsilon$, and the composed failure probability is $T\cdot0+\delta=\delta$. This proves transcript $(\varepsilon,\delta)$-privacy under [A1]. [given, A1, F2, F8, step 1.2]

3.1 Under the filtration in the Statement, $\ell_t$ and $p_{t,j}$ are measurable before the draw and the conditional law of $a_t$ is $p_t$. All losses and their conditional averages are bounded by one. For every event $B\in\mathcal F_{t-1}$ and action $j$, [F1] gives $\Pr(B\cap\{a_t=j\})=\mathbb E[\mathbf1_Bp_{t,j}]$. Summing over the finite action set gives $\mathbb E[\mathbf1_B\ell_t(a_t)]=\mathbb E[\mathbf1_B\sum_jp_{t,j}\ell_t(j)]=\mathbb E[\mathbf1_B\mu_t]$. Thus [F5] makes $\mu_t$ a conditional-expectation version and $X_t=\ell_t(a_t)-\mu_t$ has conditional mean zero. Taking $B=\Omega$ gives $\mathbb E[\ell_t(a_t)]=\mathbb E[\mu_t]$. Taking expectations in step 2.1 therefore proves the expected-regret inequality when $\eta\le1$. If $\eta>1$, then $R_T\le1<\eta$, since each average loss lies in $[0,1]$; this proves the same expected bound for every $\eta>0$. [given, F1, F5, step 2.1]

4.1 Each $X_t$ is $\mathcal F_t$-measurable, and step 3.1 shows its conditional mean given $\mathcal F_{t-1}$ is zero. Since $0\le\mu_t\le1$, it lies in the finite predictable interval $[-\mu_t,1-\mu_t]\subseteq[-1,1]$, so $X_t$ is integrable and this interval has length one. By [F6] under AC [A1], $(X_t)$ is a martingale-difference sequence; its partial sums are a martingale by the conditional-mean-zero property. Apply [F7] with the predictable endpoints $A_t=-\mu_t$, $B_t=1-\mu_t$ and $c_t=1$ to obtain $\Pr(\sum_tX_t\ge s)\le e^{-2s^2/T}$ for $s>0$. The realized regret numerator equals $\sum_tX_t+\sum_t\mu_t-\min_j\sum_t\ell_t(j)$; step 2.1 bounds its second term. Taking $s=\sqrt{T\ln(1/\beta)/2}$ gives the displayed tail bound for $\eta\le1$. If $\eta>1$, then $R_T\le1<\eta$ deterministically, so the asserted tail bound also holds. When $k=1$, the only action is the comparator, hence $R_T=0$. [given, A1, F1, F5, F6, F7, step 2.1, step 3.1]

5.1 For $k\ge2$, substituting $\eta=\sqrt{\ln k/T}$ in the expected bound of step 3.1 gives $\eta+\ln k/(\eta T)=2\sqrt{\ln k/T}$. For the privacy choice, since $\eta$ is the minimum of three positive numbers, $1/\eta=\max\{\sqrt{32TL}/\varepsilon,2,4\sqrt{T/\varepsilon}\}$. Substitution in the high-probability bound of step 4.1 gives the stated exact capped expression. The first cap alone is attained by $\eta_0$ exactly when the other two hold: $\eta_0\le1/2$ is equivalent to $\varepsilon\le\sqrt{8TL}$, and $\eta_0\le\sqrt{\varepsilon/(16T)}$ is equivalent to $\varepsilon\le2L$. In that region, substitution gives the stated specialization. Finally, for adjacent interactive strategies, their stated common-history ordered kernel inequalities are precisely the roundwise hypothesis of [F8]; applying it with the same parameters and the estimates in step 2.2 proves the same transcript guarantee. [given, A1, F8, step 2.2, step 3.1, step 4.1] ∎

## Source notes

The privacy guarantee treats a fixed loss sequence as the input. The regret guarantee separately permits nonanticipating adaptation to the prior transcript; it does not permit the current loss vector to react to the current fresh action. No unrestricted big-O simplification in $k,\varepsilon,\delta$ is asserted.
