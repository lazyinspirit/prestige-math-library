---
id: cex-sparse-gap-truth-causes-empirical-bayes-credible-set-undercoverage
kind: counterexample
title: "Sparse-gap truth causes empirical-Bayes credible-set undercoverage"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - def-adaptive-empirical-bayes-gaussian-sequence-procedure
  - def-axiom-of-choice
  - def-gaussian-sequence-hyperrectangle-class
  - lem-gaussian-sequence-empirical-bayes-posterior-formula
  - lem-empirical-bayes-maximizer-bracket-on-polished-tails
  - lem-normal-location-scale-mean-and-variance
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
justified_by: []
proof_strategy: direct
axiom_use: "The probability model inherits AC through the Gaussian sequence procedure. No stronger choice principle is asserted."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Botond Szabó, Aad van der Vaart and Harry van Zanten, Frequentist coverage of adaptive nonparametric Bayesian credible sets, Annals of Statistics 43(4) (2015)"
      url: "https://arxiv.org/pdf/1310.4489v5"
      locator: "Theorem 3.1 and complete proof in §9, printed pp. 8 and 32–34 (PDF pp. 9 and 33–35)."
    - title: "B. T. Knapik, A. W. van der Vaart and J. H. van Zanten, Bayesian inverse problems with Gaussian priors, Annals of Statistics 39(5) (2011)"
      url: "https://research.vu.nl/ws/portalfiles/portal/2619416/276605.pdf"
      locator: "Theorem 4.2(iii) and complete proof in §7.4, printed pp. 2635–2638 (PDF pp. 11–14); bias larger than posterior spread yields vanishing coverage for a fixed regularity prior."
---

## Statement refuted

The adaptive empirical-Bayes credible balls have nonvanishing frequentist
coverage uniformly over every truth in a hyperrectangle $\Theta_\beta(M)$.

**Explicit sparse-gap construction.**

Use [[def-adaptive-empirical-bayes-gaussian-sequence-procedure]], assume AC,
and fix $\beta>0$, $p\ge0$, $C\ge1$, $\gamma\in(0,1)$ and a finite
$A>\beta$. Run the procedure with the fixed cap $A_n=A$ and
$C^{-2}i^{-2p}\le\kappa_i^2\le C^2i^{-2p}$. Choose
$0<M\le(1984C^8)^{-1}$. Put $s=1+2\beta+2p$, $\rho_j=2^j$,
$n_1=2$, and
$$ n_{j+1}=\left\lceil(2\rho_{j+1}^2)^s n_j\right\rceil,\qquad N_j=n_j^{1/s}. $$
Define the fixed nonnegative truth by
$$ \theta_{0,i}^2=\begin{cases}0,&N_j/\rho_j<i\le N_j\text{ for some }j,\\0,&2N_j<i\le\rho_jN_j\text{ for some }j,\\Mi^{-1-2\beta},&\text{otherwise}.\end{cases} $$
Then $\theta_{0,1}=0$ and $\theta_0\in\Theta_\beta(M)$. For every
deterministic nonnegative inflation sequence for which there exist
$K_L\in(0,\infty)$ and $j_0\in\mathbb N$ such that, for every $j\ge j_0$,
$$ L_{n_j}\le K_L\sqrt M\,\rho_j^{(1+2p)/(8+8\beta+8p)} $$
one has
$$ P_{\theta_0}^{(n_j)}\{\theta_0\in\widehat C_{n_j}(L_{n_j})\}\longrightarrow0. $$
The finitely many indices with $n_j<3$ are irrelevant. In particular,
for every $\beta>0$ this gives a counterexample for any fixed cap
$A>\beta$, including constant inflation factors.

## Facts & Assumptions

**Given:** AC and the model, parameters, cap, truth and inflation bound above.

[F1] The coordinate posterior has mean
$\widehat\theta_{n,\alpha,i}=n\kappa_iX_i/(i^{1+2\alpha}+n\kappa_i^2)$
and variance $v_i(\alpha)=(i^{1+2\alpha}+n\kappa_i^2)^{-1}$.
[[lem-gaussian-sequence-empirical-bayes-posterior-formula]]

[F2] For every fixed $\ell^2$ truth with first coordinate zero, the
one-sided marginal-likelihood bracket gives
$P_{\theta_0}^{(n)}\{\widehat\alpha_n\ge\underline\alpha_n\}\to1$,
without a polished-tail assumption. Here, with
$K_\alpha=n^{1/(1+2\alpha+2p)}$ and $\tau=(16C^8)^{-1}$,
$$ h_n(\alpha)=\frac1{K_\alpha\log K_\alpha}\sum_{i\ge1}\frac{n^2i^{1+2\alpha}(\log i)\theta_{0,i}^2}{(i^{1+2\alpha+2p}+n)^2},\qquad \underline\alpha_n=\inf\{\alpha\in[0,A]:h_n(\alpha)\ge\tau\}, $$
with $\inf\varnothing=A$.
[[lem-empirical-bayes-maximizer-bracket-on-polished-tails]]

[F3] $\Theta_\beta(M)$ is the set of $\ell^2$ sequences satisfying
$\sup_i i^{1+2\beta}\theta_i^2\le M$.
[[def-gaussian-sequence-hyperrectangle-class]]

[F4] A standard normal coordinate satisfies $E Z_i^2=1$. Nonnegative
coordinate sums may be integrated termwise by applying Tonelli to the
probability space and $\mathbb N$ with counting measure.
[[lem-normal-location-scale-mean-and-variance]]
[[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

## Counterexample

1.1 The recursion gives $N_{j+1}\ge2\rho_{j+1}^2N_j$. The preceding last gap endpoint satisfies $\rho_{j-1}N_{j-1}\le N_j/(2\rho_j)<N_j$, while the next first gap begins at $N_{j+1}/\rho_{j+1}\ge2\rho_{j+1}N_j>2N_j$. Thus no other zero gap intersects $N_j<i\le2N_j$, where $\theta_{0,i}^2=Mi^{-1-2\beta}$. Every squared coordinate is zero or $Mi^{-1-2\beta}$, so $\sum_i\theta_{0,i}^2\le M(1+(2\beta)^{-1})<\infty$ and [F3] holds. Finally $1<N_1=2^{1/s}<2=\rho_1$, so the first gap contains coordinate $1$. [F3, given, algebra]

1.2 Put $\delta_j=s\log\rho_j/(4\log n_j)$, $a_j=\beta+\delta_j$, $t_j=s+2\delta_j$ and $d=1+2p$. Iterating the growth bound gives $\log n_j\ge\log2+s(\log2)(j^2+2j-3)$ for $j\ge2$, hence $\delta_j\to0$. Consequently, eventually $0<\delta_j\le1/4$, $a_j<A$, $N_j/\rho_j\ge2$ and $N_j\ge2$. Restrict to these indices and put $T=s+1/2$, so $s<t_j\le T$ and $n_j^{\delta_j}=\rho_j^{s/4}$. [given, algebra]

2.1 For $x\ge2$ and $q\ge2$, split the integers $i>x$ into intervals $(2^l x,2^{l+1}x]$. Each contains at most $3\cdot2^l x$ integers, and $\log i\le(l+2)\log x$. Hence $\sum_{i>x}i^{-q}\log i\le3x^{1-q}\log x\sum_{l\ge0}(l+2)2^{-l(q-1)}\le18x^{1-q}\log x$, because $\sum_{l\ge0}(l+2)2^{-l}=6$. [algebra]

2.2 Set $n=n_j$ and first take $0\le\alpha\le\beta$. Write $t=1+2\alpha+2p$, $K=n^{1/t}$ and $q=2+2\alpha+4p+2\beta\ge2$. In [F2], use the denominator bounds $(i^t+n)^2\ge n^2$ for $i\le K$ and $(i^t+n)^2\ge i^{2t}$ for $i>K$, together with $\theta_{0,i}^2\le Mi^{-1-2\beta}$. The first part of $h_n(\alpha)$ is at most $M$, since $i^{2\alpha-2\beta}\le1$ and $\sum_{i\le K}\log i\le K\log K$. By step 2.1 the tail is at most $18Mn^2K^{-q}=18MK^{2\alpha-2\beta}\le18M$. Thus $h_n(\alpha)\le19M$ throughout $[0,\beta]$. [F2, step 1.1, step 2.1, algebra]

2.3 Now take $\beta<\alpha\le a_j$, and write $\delta=\alpha-\beta$, $t=s+2\delta$, $K=n^{1/t}$, $N=N_j$ and $\rho=\rho_j$. The zero gaps split $h_n$ into three nonnegative parts, over $i\le N/\rho$, $N<i\le2N$ and $i>\rho N$. Bounding the denominator by $n^2$, the first part satisfies $H_1\le M(\log N/\log K)(N/\rho)^{1+2\delta}/K$. Here $\log N/\log K=t/s\le T/s$ and $N^{1+2\delta}/K=n^{2\delta(t+1)/(st)}\le\rho^{(s+1)/(2s)}$, using $\delta\le\delta_j$ and $(t+1)/t\le(s+1)/s$. Therefore $H_1\le M(T/s)\rho^{-(s-1)/(2s)}$. [F2, step 1.1, step 1.2, algebra]

2.4 For the middle part use $(i^t+n)^2\ge i^{2t}$, $\log i\le\log(2N)$ and at most $2N$ indices, obtaining $H_2\le2M(\log(2N)/\log K)n^2N^{1-2s-2\delta}/K$. Since $N\ge2$, the logarithm ratio is at most $2T/s$. Also $n^2N^{1-2s-2\delta}/K=n^{-2\delta(t-1)/(st)}\le1$. Consequently $H_2\le4MT/s$. [step 1.2, step 2.3, algebra]

2.5 For the last part set $q=2s+2\delta\ge2$ and apply step 2.1 at $x=\rho N$. This gives $H_3\le18M(\log(\rho N)/\log K)n^2(\rho N)^{1-q}/K$. Because $\log\rho/\log N=4\delta_j\le1$, the logarithm ratio is at most $2T/s$. Furthermore $n^2N^{1-q}/K=n^{-2\delta(t-1)/(st)}\le1$ and $\rho^{1-q}\le\rho^{1-2s}$. Thus $H_3\le36M(T/s)\rho^{1-2s}$. Combining these estimates yields $\sup_{0\le\alpha\le a_j}h_n(\alpha)\le\max(19,41T/s)M\le62M\le(32C^8)^{-1}<\tau$, since $s>1$. Hence $\underline\alpha_{n_j}\ge a_j$, and [F2] gives $P_{\theta_0}^{(n_j)}(E_j)\to1$ for $E_j=\{\widehat\alpha_{n_j}\ge a_j\}$. [F2, step 1.2, step 2.1, step 2.2, step 2.3, step 2.4, algebra]

3.1 For fixed $\alpha$ write $B_i(\alpha)=i^{1+2\alpha}\theta_{0,i}/(i^{1+2\alpha}+n\kappa_i^2)$ and $W_i(\alpha)=\sqrt n\kappa_i Z_i/(i^{1+2\alpha}+n\kappa_i^2)$, so the posterior-mean error is $-B(\alpha)+W(\alpha)$. If $\alpha\ge a_j>\beta$ and $N_j<i\le2N_j$, then $i^{1+2\alpha+2p}\ge N_j^s=n$ and $n\kappa_i^2/i^{1+2\alpha}\le C^2$. There are at least $N_j/2$ integers in this block, each with squared truth at least $M(2N_j)^{-1-2\beta}$. Therefore, uniformly for $\alpha\ge a_j$, $\|B(\alpha)\|^2\ge b^2MN_j^{-2\beta}$, where $b=2^{-1-\beta}/(1+C^2)>0$. [F1, step 1.1, step 1.2, algebra]

3.2 Set $R_j=n_j^{-a_j/t_j}$ and $D=C^2(2+2^{2\beta+1/2}/(2\beta))$. At $\alpha=a_j$, put $K=n_j^{1/t_j}\ge2$. Since $v_i(a_j)\le C^2i^{2p}/(i^{t_j}+n_j)$, summing over $i\le K$ gives at most $2C^2K^{-2a_j}$. The tail is at most $\sum_{i>K}i^{-1-2a_j}\le\lfloor K\rfloor^{-2a_j}/(2a_j)\le2^{2\beta+1/2}K^{-2a_j}/(2\beta)$. Thus $V_j=\sum_i v_i(a_j)\le DR_j^2$. Each variance decreases in $\alpha$, so [F4] bounds the posterior expected squared centered norm by $V_j$ whenever $\alpha\ge a_j$. For a nonnegative random variable $Y$, integrating $u\mathbf1_{\{Y>u\}}\le Y$ gives $uP(Y>u)\le EY$. Apply this with $u=V_j/\gamma$ to bound the posterior norm quantile: $\sup_{\alpha\ge a_j}r_{n_j,\gamma}(\alpha)\le\sqrt{D/\gamma}\,R_j$. [F1, F4, step 1.2, algebra]

3.3 For every realization of the normal coordinates, $|W_i(\alpha)|\le|W_i(a_j)|$ whenever $\alpha\ge a_j$. Hence $\sup_{\alpha\ge a_j}\|W(\alpha)\|\le\|W(a_j)\|$. By [F4], $E\|W(a_j)\|^2=\sum_i n_j\kappa_i^2/(i^{1+2a_j}+n_j\kappa_i^2)^2\le V_j\le DR_j^2$. The elementary probability bound proved in step 3.2 therefore gives $P_{\theta_0}^{(n_j)}\{\sup_{\alpha\ge a_j}\|W(\alpha)\|>b\sqrt M N_j^{-\beta}/2\}\le4DR_j^2/(b^2MN_j^{-2\beta})$. These bounds also show almost sure square-summability simultaneously for every $\alpha\ge a_j$. [F4, step 3.2, algebra]

4.1 Subtracting exponents and using $n_j^{\delta_j}=\rho_j^{s/4}$ gives $R_j/N_j^{-\beta}=\rho_j^{-d/(4t_j)}$. Put $e=d/(4(s+1))$ and $\eta=d/(8(s+1)(s+1/2))>0$. Since $t_j\le T=s+1/2$, one has $d/(4t_j)-e\ge\eta$. The inflation assumption and step 3.2 imply $\sup_{\alpha\ge a_j}L_{n_j}r_{n_j,\gamma}(\alpha)/(\sqrt M N_j^{-\beta})\le K_L\sqrt{D/\gamma}\,\rho_j^{-\eta}\to0$. Step 3.3's probability bound is at most $(4D/(b^2M))\rho_j^{-d/(2T)}\to0$. [given, step 1.2, step 3.2, step 3.3, algebra]

4.2 On $E_j$ the selected regularity is positive and at least $a_j$. Coverage then implies $\|B(\widehat\alpha_{n_j})\|\le L_{n_j}r_{n_j,\gamma}(\widehat\alpha_{n_j})+\|W(\widehat\alpha_{n_j})\|$. The left side is at least $b\sqrt M N_j^{-\beta}$ by step 3.1; the first term on the right is eventually strictly below half that amount by step 4.1, while the second exceeds the same half-threshold with probability tending to zero. Consequently coverage is at most $P_{\theta_0}^{(n_j)}(E_j^c)+o(1)\to0$. This fixed truth in $\Theta_\beta(M)$ refutes the proposed uniform nonvanishing coverage. [step 2.5, step 3.1, step 4.1] ∎

## Remarks

The cap condition is essential to the argument: the selected admissible
range must contain $a_j>\beta$ eventually. Here $a_j\to\beta$, so every
fixed $A>\beta$ suffices. The printed source theorem leaves this
qualification implicit. The lower likelihood bracket used here holds for
all fixed square-summable truths with first coordinate zero; the
polished-tail restriction needed for a matching upper bracket does not
apply to this one-sided use.
