---
id: thm-fano-packing
kind: theorem
title: "Fano’s packing bound with a reference-distribution KL bound"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-bayes-and-minimax-risk
  - def-finite-cardinality
  - def-higher-derivatives-and-smoothness
  - def-kullback-leibler-divergence
  - def-loss-function-and-risk
  - def-mutual-information-for-finite-hypothesis-testing
  - def-natural-logarithm
  - def-parameter-measurable-statistical-model-as-markov-kernel
  - def-probability-measure
  - def-radon-nikodym-derivative
  - def-randomized-procedure-as-a-markov-kernel
  - thm-algebra-of-derivatives
  - thm-chain-rule
  - cor-mean-value-theorem
  - thm-integral-logarithm-derivative-and-normalisation
  - def-integral-logarithm
  - cor-integral-logarithm-agrees-with-natural-logarithm
  - thm-natural-logarithm-laws
  - thm-likelihood-ratio-change-of-measure
  - thm-jensens-integral-inequality
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, Chapter 4, §4.4, Theorem 4.10"
      url: "https://arxiv.org/pdf/2310.19244v1"
    - title: "John Duchi, Lecture Notes on Statistics and Information Theory, Chapter 8, §§8.4.1–8.4.4 and 8.7"
      url: "https://stanford.edu/class/stats311/lecture-notes.pdf"
---

## Statement

Assume AC. Let $M\ge2$ be finite, let $P_1,\ldots,P_M$ be sample laws on one
measurable space, and let $t_1,\ldots,t_M$ lie in a metric space
$(\mathcal T,\rho)$ with its Borel sigma-algebra. Suppose
$\rho(t_j,t_l)\ge\Delta>0$ whenever $j\ne l$. Let $J$ be uniform on
$[M]=\{1,\ldots,M\}$, with conditional observation law $P_j$ given $J=j$.
For any probability reference law $Q$, define
$$K_Q:=\frac1M\sum_{j=1}^M D(P_j\|Q)\in[0,+\infty].$$
For every randomized estimator kernel from the observation to $\mathcal T$,
with squared metric loss $\rho(a,t_j)^2$, its uniform average risk and its
maximum risk are each at least
$$\frac{\Delta^2}{4} \left(1-\frac{K_Q+\log2}{\log M}\right).$$
The minimax risk over all randomized estimators obeys this bound as well.
When $K_Q=+\infty$, the displayed lower bound is interpreted as $-\infty$
and is vacuous. Logarithms are natural.

## Facts & Assumptions

**Given:** AC; a finite uniform hypothesis experiment, pairwise separated targets, a probability reference law $Q$, and an arbitrary estimator kernel.

[A1] [[def-axiom-of-choice]]: AC supplies the Radon–Nikodym derivatives in the directional KL definition.

[F1] [[def-mutual-information-for-finite-hypothesis-testing]]: for the uniform index, $\bar P=M^{-1}\sum_jP_j$ is a probability measure, $P_j\ll\bar P$, the densities $p_j=dP_j/d\bar P$ satisfy $0\le p_j/M\le1$ and $\sum_jp_j/M=1$ almost everywhere, and $I(J;X)=M^{-1}\sum_jD(P_j\|\bar P)$.

[F2] [[def-kullback-leibler-divergence]], [[def-radon-nikodym-derivative]], and [[thm-likelihood-ratio-change-of-measure]]: when $P\ll Q$, $D(P\|Q)=\int (dP/dQ)\log(dP/dQ)\,dQ$ with $0\log0=0$; otherwise it is $+\infty$. The negative part of $u\log u$ is pointwise bounded by $1/e$, so its integral under any probability reference law is at most $1/e$. Densities can be integrated against their reference laws to recover the original measures.

[F3] [[def-natural-logarithm]], [[def-integral-logarithm]], [[cor-integral-logarithm-agrees-with-natural-logarithm]], [[def-higher-derivatives-and-smoothness]], [[thm-natural-logarithm-laws]], [[thm-integral-logarithm-derivative-and-normalisation]], [[thm-algebra-of-derivatives]], [[thm-chain-rule]], [[cor-mean-value-theorem]], and [[thm-jensens-integral-inequality]]: $L=\log$ transfers $L'(x)=1/x$ to $\log'(x)=1/x$; products and compositions obey the derivative rules; and Jensen's inequality applies to an integrable convex transform. The function $\psi(u)=u\log u$ for $u>0$, extended by $\psi(0)=0$, is continuous at zero: for $s\ge1$, $0\le\log(s)/s\le2/\sqrt{s}$ by $\log s=\int_1^sdu/u$ and $1/u\le1/\sqrt{u}$. Since $\psi''(u)=1/u>0$ for $u>0$, the mean value theorem makes it convex on $(0,\infty)$; continuity extends convexity to $[0,\infty)$.

[F4] [[def-probability-measure]] and [[def-finite-cardinality]]: finite probability vectors have entropy $H(q)=-\sum_jq_j\log q_j$, with $0\log0=0$.

[F5] [[def-randomized-procedure-as-a-markov-kernel]]: the estimator's action probabilities are measurable in the observation and form a probability measure for each observation.

[F6] [[def-loss-function-and-risk]]: a nonnegative loss with a measurable action section at each parameter has risk given by its iterated integral against the sample law and action kernel. Here each section $a\mapsto\rho(a,t_j)^2$ is continuous, hence Borel measurable.

[F7] [[def-parameter-measurable-statistical-model-as-markov-kernel]] and [[def-bayes-and-minimax-risk]]: give the finite parameter set $[M]$ its power-set sigma-algebra. The model $j\mapsto P_j$ is then a probability kernel. The squared metric loss is jointly measurable: the inverse image of any Borel set $B\subseteq[0,\infty]$ is the finite union $\bigcup_{j=1}^M\{j\}\times\{a:\rho(a,t_j)^2\in B\}$. Thus the uniform average risk is a Bayes risk, and minimax risk is the infimum of maximum risk over procedures.

## Proof

1.1 Since $\bar P\ge P_j/M$, each $P_j\ll\bar P$. Choose densities $p_j=dP_j/d\bar P$ and set $\pi_j=p_j/M$. Then $\sum_j\pi_j=1$ $\bar P$-almost everywhere and $0\le\pi_j\le1$ by [F1]. The mutual-information definition [F1] and KL formula [F2] give $I(J;X)=\int\sum_j\pi_j\log(M\pi_j)\,d\bar P=\log M-\int H(\pi(x))\,\bar P(dx).$ All terms are integrable because $u\log u$ is bounded on $[0,1]$ and the sum is finite. [A1, F1, F2, F3, F4, given, algebra]

2.1 Let $L$ be any randomized decision in $[M]$ based on $X$, with $q_l(x)=P(L=l\mid X=x)$ given by its probability kernel. Put $w_l=\int q_l\,d\bar P$. When $w_l>0$, the conditional probability vector of $J$ given $L=l$ has entries $\eta_{lj}=w_l^{-1}\int q_l(x)\pi_j(x)\,\bar P(dx)$. Apply Jensen to $u\mapsto u\log u$ for each coordinate under the probability measure $q_l\,d\bar P/w_l$, sum over $j$, and use $\sum_j\pi_j=\sum_j\eta_{lj}=1$. The result is $H(\eta_l)\ge w_l^{-1}\int q_l(x)H(\pi(x))\,\bar P(dx)$. Multiplication by $w_l$ and summation over positive $w_l$ yields $H(J\mid L):=\sum_lw_lH(\eta_l)\ge\int H(\pi(x))\,d\bar P$; zero-probability outputs contribute zero. Hence $\log M-H(J\mid L)\le I(J;X)$ by step 1.1. [F1, F3, F4, F5, step 1.1, algebra]

2.2 If some $P_j\not\ll Q$, then $K_Q=+\infty$ and the bound is vacuous. Otherwise write $r_j=dP_j/dQ$. If the positive part of $r_j\log r_j$ has infinite integral, then $D(P_j\|Q)=+\infty$; if it is finite, the negative part is finite by [F2] and Jensen [F3] for the convex function $u\log u$ gives $D(P_j\|Q)=\int r_j\log r_j\,dQ\ge0$. Thus every divergence is nonnegative; therefore $K_Q<\infty$ implies that every term is finite. Set $\bar r=M^{-1}\sum_jr_j=d\bar P/dQ$. On $\{\bar r>0\}$, $r_j=M\bar r\pi_j$ $Q$-almost everywhere: by [F2], for every measurable $A$, $P_j(A)=\int_Ap_j\,d\bar P=\int_Ap_j\bar r\,dQ$, where $p_j=dP_j/d\bar P=M\pi_j$ from step 1.1; uniqueness of the density gives the identity. Hence $r_j\log(r_j/\bar r)=\bar r\,\psi(M\pi_j)$. This is integrable: $M\pi_j\in[0,M]$, $|u\log u|\le1/e$ for $0\le u\le1$ by [F2], and $0\le u\log u\le M\log M$ for $1\le u\le M$ by monotonicity in [F3], while $\bar r$ has integral one. The identity $r_j\log r_j=r_j\log(r_j/\bar r)+r_j\log\bar r$ holds on $\{\bar r>0\}$; on $\{\bar r=0\}$ all $r_j=0$ and every term is set to zero. Jensen and [F3] give $\bar r\log\bar r\le M^{-1}\sum_jr_j\log r_j$, so its positive part is integrable; its negative part is bounded by [F2]. Integrating the identity and averaging therefore gives $K_Q=I(J;X)+D(\bar P\|Q).$ Finally Jensen under the probability law $Q$ yields $D(\bar P\|Q)=\int\bar r\log\bar r\,dQ\ge(\int\bar r\,dQ)\log(\int\bar r\,dQ)=0$. Therefore $I(J;X)\le K_Q$. [A1, F1, F2, F3, step 1.1, algebra]

3.1 For the error event $E=\{L\ne J\}$, $E$ is determined by $(J,L)$, so $H(E,J\mid L)=H(J\mid L)$. Expanding the finite conditional entropy sums and factoring $P(E=e,J=j\mid L=l)=P(E=e\mid L=l)P(J=j\mid E=e,L=l)$ gives $H(J\mid L)=H(E\mid L)+H(J\mid E,L).$ For each conditional law, entropy on at most $N$ points is at most $\log N$: if its probabilities are $s_1,\ldots,s_N$, Jensen for $u\log u$ gives $N^{-1}\sum_r(Ns_r)\log(Ns_r)\ge0$, which rearranges to $-\sum_rs_r\log s_r\le\log N$. Thus $H(E\mid L)\le\log2$; when $E=0$, $J=L$ has entropy zero, and when $E=1$, at most $M-1$ indices remain, so $H(J\mid E,L)\le P(E=1)\log(M-1)\le P(E=1)\log M$. Combining this with step 2.1 and $I(J;X)\le K_Q$ from step 2.2 proves $P(L\ne J)\ge1-\frac{K_Q+\log2}{\log M}$ when $K_Q<\infty$; for $K_Q=\infty$ the bound is vacuous. [F3, F4, step 2.1, step 2.2, algebra]

4.1 Given an estimator action $A\in\mathcal T$, choose $L$ to be the smallest index minimizing $\rho(A,t_l)$. This is a measurable finite-valued decision because each distance to a fixed target is continuous and ties are resolved by the fixed index order; composing the map with the estimator kernel gives the randomized decision kernel of step 2.1 by [F5]. If $L\ne J=j$, nearest choice and the triangle inequality give $\Delta\le\rho(t_j,t_L)\le\rho(t_j,A)+\rho(A,t_L)\le2\rho(A,t_j)$, so squared loss is at least $\Delta^2/4$ on the error event. Step 3.1 therefore gives the average risk bound. The maximum risk is at least its uniform average; taking the infimum over procedures using [F6] and [F7] gives the minimax conclusion. [F5, F6, F7, step 2.1, step 3.1, algebra] ∎
