---
dependency_level: 2
id: thm-bounded-summable-strong-mixing-clt
kind: theorem
title: Bounded stationary CLT under summable strong mixing
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - def-axiom-of-choice
  - def-mixing-coefficients-for-stationary-markov-chain
  - def-moments-variance-and-covariance
  - lem-strong-mixing-quantile-covariance-bound
  - cor-cauchy-schwarz-for-random-variables
  - thm-dominated-convergence
  - lem-second-order-characteristic-function-expansion
  - lem-characteristic-function-of-a-normal-law
  - cor-characteristic-function-criterion-for-weak-convergence
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Galin L. Jones, On the Markov Chain Central Limit Theorem, Theorem 5(1)
      url: https://arxiv.org/pdf/math/0409112
    - title: P. Doukhan, P. Massart and E. Rio, The functional central limit theorem for strongly mixing processes, bounded-variable application
      url: https://www.numdam.org/item/AIHPB_1994__30_1_63_0.pdf
axiom_use: AC is inherited only through the local characteristic-function convergence criterion and normal-law characteristic function; no independent-copy extension or two-sided stationary extension is used.
---

## Statement

Assume AC. Let $(Z_k)_{k\ge0}$ be a centered strictly stationary real sequence, with $|Z_0|\le B$ almost surely for a finite $B$, and suppose
$$\sum_{r=1}^\infty\alpha_Z(r)<\infty.$$
Put $T_n=\sum_{k=1}^nZ_k$. Then its covariance series converges absolutely and
$$\sigma_Z^2=\mathbb EZ_0^2+2\sum_{r=1}^\infty\operatorname{Cov}(Z_0,Z_r)=\lim_{n\to\infty}\frac{\operatorname{Var}(T_n)}n\ge0.$$
Moreover
$$T_n/\sqrt n\Rightarrow N(0,\sigma_Z^2),$$
including $\sigma_Z^2=0$. Writing $D_Z=\mathbb EZ_0^2+2\sum_{r\ge1}|\operatorname{Cov}(Z_0,Z_r)|$, every finite subset $I\subseteq\mathbb N_0$ satisfies
$$\mathbb E\left(\sum_{i\in I}Z_i\right)^2\le D_Z|I|.$$
The strong-mixing coefficient is that of [[def-mixing-coefficients-for-stationary-markov-chain]].

## Facts & Assumptions

**Given:** AC, the centered strictly stationary bounded sequence, and summability of its strong-mixing coefficients.

[A1] AC is assumed for the characteristic-function convergence criterion and the normal-law supplier. ([[def-axiom-of-choice]])

[F1] Strict stationarity preserves finite-dimensional laws under nonnegative shifts, and the mixing coefficient is the supremum over separated past and future events. ([[def-mixing-coefficients-for-stationary-markov-chain]])

[F2] Bounded real variables from fields with event coefficient $a$ have covariance at most $4ABa$ in absolute value; complex variables obey the analogous bound $16ABa$. ([[lem-strong-mixing-quantile-covariance-bound]])

[F3] Variance and covariance are centered product expectations. ([[def-moments-variance-and-covariance]])

[F4] Dominated convergence applies on an arbitrary measure space, including counting measure with a summable majorant. ([[thm-dominated-convergence]])

[F5] Cauchy–Schwarz bounds absolute product expectations of square-integrable real variables. ([[cor-cauchy-schwarz-for-random-variables]])

[F6] For $r(u)=e^{iu}-1-iu+u^2/2$, one has $|r(u)|\le |u|^3/3$ for all real $u$. ([[lem-second-order-characteristic-function-expansion]])

[F7] Under AC the characteristic function of $N(0,s^2)$ is $e^{-s^2t^2/2}$, including $s=0$. ([[lem-characteristic-function-of-a-normal-law]])

[F8] Under AC, convergence of characteristic functions to that of a specified probability law is equivalent to weak convergence to that law. ([[cor-characteristic-function-criterion-for-weak-convergence]])

## Proof

1.1 Put $\gamma_r=\operatorname{Cov}(Z_0,Z_r)$. By [F1]–[F2], $|\gamma_r|\le4B^2\alpha_Z(r)$ for $r\ge1$, so $D_Z<\infty$. Expanding the square of a sum indexed by a finite subset $I$ gives its diagonal terms $|I|\gamma_0$ and off-diagonal terms $2\gamma_{j-i}$ for pairs $i<j$ in $I$. For each fixed positive lag there are at most $|I|$ such pairs. Thus the asserted bound $\mathbb E(\sum_{i\in I}Z_i)^2\le D_Z|I|$ holds, also for $I=\varnothing$. For a consecutive block, the same expansion gives $\operatorname{Var}(T_n)/n=\gamma_0+2\sum_{r=1}^{n-1}(1-r/n)\gamma_r$. The summable majorant $2|\gamma_r|$ and [F4] imply convergence to the stated $\sigma_Z^2$, which is nonnegative as a limit of variances. [F1, F2, F3, F4, given]

1.2 Extend the coefficient convention by $\alpha_Z(0)=1$. It is nonincreasing: increasing the separation restricts the future sigma-algebra in [F1]. For ordered indices $i\le j\le k\le l$, write $a=j-i$ and $c=l-k$. If $a>0$, centering of $Z_i$ and [F2] applied to $Z_i$ and $Z_jZ_kZ_l$ give $|\mathbb E Z_iZ_jZ_kZ_l|\le4B^4\alpha_Z(a)$; if $a=0$, the trivial bound $B^4$ suffices. Splitting off the centered last factor gives the same bound with $c$. Therefore $|\mathbb E Z_iZ_jZ_kZ_l|\le4B^4\alpha_Z(\max(a,c))$. There are at most $24$ orderings, at most $p$ choices each for the first index and the middle gap, and $2r+1$ pairs $(a,c)$ with maximum $r$. Hence
$$\mathbb ET_p^4\le96B^4p^2\sum_{r=0}^p(2r+1)\alpha_Z(r)=o(p^3).$$
To justify the last limit, for each fixed $R$, $p^{-1}\sum_{r\le R}r\alpha_Z(r)\to0$, whereas $p^{-1}\sum_{R<r\le p}r\alpha_Z(r)\le\sum_{r>R}\alpha_Z(r)\to0$ as $R\to\infty$; the unweighted part divided by $p$ also tends to zero. Repeated indices are included by the convention at zero. [F1, F2, given, algebra]

2.1 Set $\varepsilon_p=\mathbb ET_p^4/p^3$ and $\eta_n=\sup_{p\ge\lfloor\sqrt n\rfloor}\varepsilon_p$. By step 1.2, $\eta_n\to0$. For sufficiently large $n$, define $h_n=\min(n^{1/8},\eta_n^{-1/4})$, interpreting the second entry as $+\infty$ if $\eta_n=0$, and ignore the finitely many earlier $n$. Then $h_n\to\infty$, $h_n=o(n^{1/4})$, and $h_n^2\eta_n\to0$. Put $p_n=\lceil\sqrt n h_n\rceil$, $q_n=\lfloor\sqrt n/h_n\rfloor$, and $k_n=\lfloor n/(p_n+q_n)\rfloor$. Thus $p_n,q_n\to\infty$, $p_n/n\to0$, $q_n/p_n\to0$, and $k_np_n/n\to1$. Retain $k_n$ consecutive blocks of length $p_n$, separated by discarded blocks of length $q_n$, and discard the final remainder. Their discarded index set $I_n$ has cardinality at most $k_nq_n+p_n+q_n=o(n)$. Step 1.1 gives $\|n^{-1/2}\sum_{i\in I_n}Z_i\|_2^2\le D_Z|I_n|/n\to0$, controlling all gaps together without asserting their independence. [step 1.1, step 1.2, algebra]

2.2 Summability and monotonicity imply $r\alpha_Z(r)\to0$, since $\lfloor r/2\rfloor\alpha_Z(r)\le\sum_{s=\lfloor r/2\rfloor}^r\alpha_Z(s)$. For large $n$, $n/p_n\le\sqrt n/h_n\le2q_n$, so $k_n\alpha_Z(q_n)\le2q_n\alpha_Z(q_n)\to0$. Let $B_{n,j}$ denote the sum in retained block $j$. At a fixed real frequency $t$, put $U_j=e^{itB_{n,j}/\sqrt n}$. Both each factor and every partial product have modulus at most one. The partial product through block $j$ is measurable before the gap preceding block $j+1$, so [F2] bounds the discrepancy in factoring its expectation from $U_{j+1}$ by $16\alpha_Z(q_n)$. Telescoping these factorizations gives
$$\left|\mathbb E e^{it\sum_{j=1}^{k_n}B_{n,j}/\sqrt n}-\prod_{j=1}^{k_n}\mathbb E e^{itB_{n,j}/\sqrt n}\right|\le16(k_n-1)\alpha_Z(q_n)\longrightarrow0.$$
This compares characteristic functions only and requires no independent copies or coupling construction. [F1, F2, step 2.1, algebra]

3.1 Write $W_{n,j}=B_{n,j}/\sqrt n$. These variables are centered and each has the law of $T_{p_n}/\sqrt n$ by stationarity. Steps 1.1 and 2.1 imply $\sum_{j=1}^{k_n}\mathbb EW_{n,j}^2=(k_np_n/n)\operatorname{Var}(T_{p_n})/p_n\to\sigma_Z^2$. Also
$$\sum_{j=1}^{k_n}\mathbb EW_{n,j}^4=\frac{k_n\mathbb ET_{p_n}^4}{n^2}\le\frac{p_n^2}{n}\varepsilon_{p_n}\longrightarrow0,$$
because $p_n^2/n=O(h_n^2)$ and $\varepsilon_{p_n}\le\eta_n$. For every $\delta>0$, the Lindeberg sum of these block marginals is at most $\delta^{-2}\sum_j\mathbb EW_{n,j}^4\to0$. Applying [F5] first to $|W|,W^2$ and then the finite-sum Cauchy–Schwarz inequality yields $\sum_j\mathbb E|W_{n,j}|^3\le(\sum_j\mathbb EW_{n,j}^2)^{1/2}(\sum_j\mathbb EW_{n,j}^4)^{1/2}\to0$. Finally $\max_j(\mathbb EW_{n,j}^2)^2\le\sum_j\mathbb EW_{n,j}^4\to0$. No uniform-integrability hypothesis or deterministic block bound tending to zero has been assumed. [F1, F5, step 1.1, step 2.1, algebra]

3.2 For fixed $t$, [F6] gives $\mathbb Ee^{itW_{n,j}}=1-a_{n,j}+r_{n,j}$, where $a_{n,j}=t^2\mathbb EW_{n,j}^2/2\ge0$ and $\sum_j|r_{n,j}|\le |t|^3\sum_j\mathbb E|W_{n,j}|^3/3\to0$. Step 3.1 gives $\sum_ja_{n,j}\to t^2\sigma_Z^2/2$ and $\sum_ja_{n,j}^2\le(\max_ja_{n,j})\sum_ja_{n,j}\to0$. The elementary real Taylor bound $|1-a-e^{-a}|\le a^2/2$ for $a\ge0$ follows by integrating the second derivative $e^{-a}\le1$ twice. Since both $|\mathbb Ee^{itW_{n,j}}|$ and $e^{-a_{n,j}}$ are at most one, the product telescoping inequality now gives
$$\left|\prod_j\mathbb Ee^{itW_{n,j}}-e^{-\sum_ja_{n,j}}\right|\le\sum_j|r_{n,j}|+\frac12\sum_ja_{n,j}^2\longrightarrow0.$$
Thus the product characteristic function tends to $e^{-t^2\sigma_Z^2/2}$. [F6, step 3.1, algebra]

4.1 The discarded normalized sum in step 2.1 tends to zero in $L^2$ and hence in $L^1$ by [F5]. The elementary bound $|e^{ix}-e^{iy}|\le|x-y|$, obtained by integrating the derivative of $e^{iu}$ along the real interval, makes its effect on each characteristic function tend to zero. Combine steps 2.2 and 3.2: $\mathbb Ee^{itT_n/\sqrt n}\to e^{-t^2\sigma_Z^2/2}$ for every real $t$. Under [A1], [F7] identifies this with the characteristic function of $N(0,\sigma_Z^2)$, and [F8] gives the asserted weak convergence. This remains valid for $\sigma_Z^2=0$; all finite-moment and discarded-set assertions were already proved in step 1.1. [A1, F5, F7, F8, step 1.1, step 2.1, step 2.2, step 3.2] ∎
