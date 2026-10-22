---
id: thm-ip-sparse-detection-regime-split
kind: theorem
title: Sparse q<2 detection regime split
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-ip-minimax-detection-risk-and-separation
  - lem-ip-gaussian-product-mixture-testing-bound
  - def-countable-choice
  - def-total-variation-distance-for-probability-laws
  - def-ip-isonormal-white-noise-experiment
  - lem-normal-density-has-total-mass-one
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-chebyshev-markov-inequality-for-the-integral
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: Countable Choice is inherited from the sequence model and the normal-density change-of-variables supplier. The proved finite-support mixture calculations and the lambda-nonpositive maximum test use no additional choice.
sources:
  references:
    - title: "Yuri I. Ingster, Theofanis Sapatinas and Irina A. Suslina, Minimax signal detection in ill-posed inverse problems, §4.7, Theorem 4.7, PDF pp. 18–19"
      url: https://arxiv.org/pdf/1001.1853
    - title: "Yuri I. Ingster and Irina A. Suslina, Nonparametric Goodness-of-Fit Testing Under Gaussian Models, Chapters 4 and 6, cited for the sparse proof in the 2012 article"
      url: https://link.springer.com/book/10.1007/978-0-387-21580-8
---

## Statement

Assume Countable Choice and the minimax detection-risk definition with $0<q<2$, $a_j=j^\alpha$, $\sigma_j=j^\beta$, and $\alpha,\beta>0$. Let $r_\varepsilon\to0$ as $\varepsilon\downarrow0$, and put
$$\lambda=\frac{\alpha+\beta}{2}-\frac{\beta}{q}.$$
For $\lambda>0$, put $A=2\alpha+1/q-1/2$, $B=2(\alpha+\beta)+1/q$, and $D=\alpha+\beta(1-2/q)>0$. Choose any $\delta_\varepsilon>0$ with $\delta_\varepsilon\to0$ and $\delta_\varepsilon\log\varepsilon^{-1}\to\infty$, set $\widetilde r_\varepsilon=r_\varepsilon(1-\delta_\varepsilon)$, and define
$$u_\varepsilon^2=2\inf\left\{\sum_{j\ge1}h_j^2\sinh^2(z_j^2/2):\ 0\le h_j\le1,\ z_j\ge0,\ \sum_{j\ge1}j^{2\beta}h_jz_j^2\ge\frac{\widetilde r_\varepsilon^2}{\varepsilon^2},\ \sum_{j\ge1}j^{q(\alpha+\beta)}h_jz_j^q\le\frac1{\varepsilon^q}\right\}.$$
Then the sharp errors have Gaussian form
$$\beta_\varepsilon(\Theta_q(r_\varepsilon),\alpha)=\Phi(H_\alpha-u_\varepsilon)+o(1),\qquad \gamma_\varepsilon(\Theta_q(r_\varepsilon))=2\Phi(-u_\varepsilon/2)+o(1),$$
where $\Phi(t)=(2\pi)^{-1/2}\int_{-\infty}^t e^{-x^2/2}\,dx$ and $H_\alpha$ is its $(1-\alpha)$-quantile. Moreover,
$$u_\varepsilon\sim c_{\alpha,\beta,q}\,\varepsilon^{-A/D}r_\varepsilon^{B/D}$$
for a constant $c_{\alpha,\beta,q}>0$, and a minimax separation rate is
$$r_\varepsilon^*=\varepsilon^{A/B}.$$
If $\lambda\le0$, put $n_\varepsilon=r_\varepsilon^{-1/\alpha}$ and $D_\varepsilon=n_\varepsilon^{-\beta}r_\varepsilon/\varepsilon-\sqrt{2\log n_\varepsilon}$. Then the sharp errors have degenerate form
$$\beta_\varepsilon(\Theta_q(r_\varepsilon),\alpha)=(1-\alpha)\Phi(-D_\varepsilon)+o(1),\qquad \gamma_\varepsilon(\Theta_q(r_\varepsilon))=\Phi(-D_\varepsilon)+o(1),$$
and a sharp separation-rate normalization is
$$r_\varepsilon^*=\Lambda\,\varepsilon^{\alpha/(\alpha+\beta)}(\log\varepsilon^{-1})^{\alpha/[2(\alpha+\beta)]},\qquad \Lambda=\left(\frac{2}{\alpha+\beta}\right)^{\alpha/[2(\alpha+\beta)]}.$$
Thus the sparse boundary $\lambda=0$ belongs to the degenerate regime, and the two regimes have different separation rates.
## Statement references

[Ingster, Sapatinas and Suslina, *Minimax signal detection in ill-posed inverse problems*, §4.7, Theorem 4.7, PDF pp. 18–19](https://arxiv.org/pdf/1001.1853)

[Ingster and Suslina, *Nonparametric Goodness-of-Fit Testing Under Gaussian Models*, cited by the 2012 article for Theorem 4.7, Chapters 4 and 6](https://link.springer.com/book/10.1007/978-0-387-21580-8)

## Facts & Assumptions

**Given:** Countable Choice; $0<q<2$, $\alpha,\beta>0$, $a_i=i^\alpha$, $\sigma_i=i^\beta$, and the Gaussian sequence detection experiment with alternatives $\Theta_q(r)$.

[F1] [[def-ip-minimax-detection-risk-and-separation]]: $\eta\in\Theta_q(r)$ means $\sum_i i^{q(\alpha+\beta)}|\eta_i|^q\le1$ and $\sum_i i^{2\beta}\eta_i^2\ge r^2$; the minimax risks use randomized product-Borel tests.

[F2] [[lem-ip-gaussian-product-mixture-testing-bound]]: for a fixed finite-support vector, independent coordinate signs give the stated product likelihood ratio; its proof also derives the Cauchy–Schwarz conversion from a centered likelihood-ratio second moment to event and randomized-test total variation.

[F3] [[def-total-variation-distance-for-probability-laws]]: $\|P-Q\|_{\rm TV}=\sup_A|P(A)-Q(A)|$.

[F4] [[def-ip-isonormal-white-noise-experiment]]: coordinates on every finite orthonormal tuple are independent standard normals with density $\varphi(x)=(2\pi)^{-1/2}e^{-x^2/2}$.

[F5] [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]] and [[lem-normal-density-has-total-mass-one]]: completing the square gives $\mathbb E e^{tG}=e^{t^2/2}$ for $G\sim N(0,1)$.

[F6] [[thm-chebyshev-markov-inequality-for-the-integral]]: Markov's inequality gives $\mathbb P(|G|>t)\le2e^{-t^2/2}$ by applying it to $e^{tG}$ and $e^{-tG}$.

[A1] [[def-countable-choice]]: Countable Choice is the assumption of the Gaussian sequence model.

## Proof

**Proof scope:** The $\lambda\le0$ rate is proved below. For $\lambda>0$, the lower-bound half is proved, but the matching consistency upper bound remains unresolved; this draft is escalated and does not claim a complete proof of the full Statement.

1.1 Assume $\lambda\le0$, so $e:=2\beta-q(\alpha+\beta)\ge0$. Let $N=\lceil C r^{-1/\alpha}\rceil$ with a fixed $C>1$. For every alternative, $|\eta_i|\le i^{-(\alpha+\beta)}$ follows termwise from [F1]. Therefore $$\sum_{i>N}i^{2\beta}\left(\frac{\eta_i}{\varepsilon}\right)^2=\sum_{i>N}\left(i^{q(\alpha+\beta)}\left|\frac{\eta_i}{\varepsilon}\right|^q\right)i^{2\beta-q(\alpha+\beta)}\left|\frac{\eta_i}{\varepsilon}\right|^{2-q}\le\varepsilon^{-2}N^{-2\alpha}.$$ Choosing $C$ large enough makes this tail at most $r^2/(2\varepsilon^2)$, so $\sum_{i\le N}i^{2\beta}(\eta_i/\varepsilon)^2\ge r^2/(2\varepsilon^2)$. [A1, F1, algebra]

1.2 For the lower bound in the $\lambda\le0$ regime, let $n=\lfloor r^{-1/\alpha}/4\rfloor$ and let $I=\{n+1,\ldots,2n\}$. For each $i\in I$ and sign $s\in\{-1,1\}$, set $\eta^{(i,s)}_i=s r i^{-\beta}$ and all other coordinates to zero. Then $\sum_jj^{2\beta}(\eta_j^{(i,s)})^2=r^2$, while $\sum_jj^{q(\alpha+\beta)}|\eta_j^{(i,s)}|^q=(ri^\alpha)^q\le1$, so each point belongs to $\Theta_q(r)$. [F1, given, construct]

1.3 Now assume $\lambda>0$. Since $r_\varepsilon\to0$ and $\delta_\varepsilon\to0$, eventually $0<\widetilde r_\varepsilon\le1$. The choice $h_1=1$, $z_1=\widetilde r_\varepsilon/\varepsilon$, and $h_j=z_j=0$ for $j>1$ satisfies both constraints in the definition of $u_\varepsilon$, so its infimum is finite. Set $A=2\alpha+1/q-1/2$, $B=2(\alpha+\beta)+1/q$, $r_\varepsilon^*=\varepsilon^{A/B}$, and $n=\lfloor\varepsilon^{-2/B}\rfloor$. For $r/r_\varepsilon^*\to0$, put $k=\max\{1,\lceil r^2/(\varepsilon^2n^{2\beta})\rceil\}$ and choose a $k$-element subset uniformly from $I_n=\{n+1,\ldots,2n\}$, then put independent signs on its coordinates with amplitude $\varepsilon$. Every support point has weighted squared signal at least $k\varepsilon^2n^{2\beta}\ge r^2$. Its $q$-ellipsoid sum is at most $Ck\varepsilon^qn^{q(\alpha+\beta)}\le Ck/\sqrt n\to0$, because $\varepsilon^qn^{q(\alpha+\beta)+1/2}\asymp1$ and $k/\sqrt n\le C((r/r_\varepsilon^*)^2+n^{-1/2})$. Hence the prior is supported on $\Theta_q(r)$. [F1, F4, given, construct]

2.1 Put $M=\max_{i\le N}|\eta_i|/\varepsilon$. Since $e\ge0$, [F1] and step 1.1 give $$\frac{r^2}{2\varepsilon^2}\le\sum_{i\le N}i^{2\beta}(\eta_i/\varepsilon)^2\le\varepsilon^{-q}N^eM^{2-q},$$ so $M\ge c\varepsilon^{-1}r^{(\alpha+\beta)/\alpha}$ for a constant $c>0$ depending only on $C,\alpha,\beta,q$. Here $2\alpha+e=(2-q)(\alpha+\beta)$ and $N\asymp r^{-1/\alpha}$. [F1, step 1.1, algebra]

2.2 Mix uniformly over the $2n$ alternatives in step 1.2. Writing $\mu_i=r/(\varepsilon i^\beta)$, the likelihood ratio is $L=n^{-1}\sum_{i\in I}e^{-\mu_i^2/2}\cosh(\mu_iG_i)$. Independence and [F5] give $$\mathbb E_0(L-1)^2=\frac1{n^2}\sum_{i\in I}\bigl(\cosh(\mu_i^2)-1\bigr)\le\frac{e^{\max_{i\in I}\mu_i^2}}{n}.$$ If $r/r_\varepsilon^*\to0$ in the $\lambda\le0$ normalization, write $s=r/r_\varepsilon^*$. Then $s\to0$, $\log n\ge c\log(\varepsilon^{-1})$ for some $c>0$ and small $\varepsilon$, and $\max_{i\in I}\mu_i^2\le C\varepsilon^{-2}r^{2+2\beta/\alpha}=C s^{2(\alpha+\beta)/\alpha}\log(\varepsilon^{-1})$, using $\Lambda^{2(\alpha+\beta)/\alpha}=2/(\alpha+\beta)$. Hence $\max_{i\in I}\mu_i^2=o(\log n)$. Thus $\mathbb E_0(L-1)^2\to0$. Since $\mathbb E_0(L-1)=0$, the positive and negative parts of $L-1$ have equal integrals. Centering and Cauchy--Schwarz then give $|P_\pi(E)-P_0(E)|\le\frac12\sqrt{\mathbb E_0(L-1)^2}$ for each event $E$; approximating a randomized test by averages of event indicators gives the same bound on expectation differences. Hence $\gamma_\varepsilon(\Theta_q(r))\to1$ and every level-$\alpha$ test has maximal type-II error at least $1-\alpha-o(1)$. The constant randomized test $\psi\equiv\alpha$ gives the matching upper bound $1-\alpha$, so $\beta_\varepsilon(\Theta_q(r),\alpha)\to1-\alpha$. [F2, F3, F5, step 1.2, given, algebra]

3.1 Use the finite-coordinate maximum test $\psi=\mathbf1\{\max_{i\le N}|Y_i|/\varepsilon>t_N\}$ with $t_N=\sqrt{2(1+\delta)\log N}$ for fixed $\delta>0$. By [F4], [F6] and a union bound, its null rejection probability is at most $2N^{-\delta}\to0$. If $r/r_\varepsilon^*\to\infty$ with $r_\varepsilon^*$ as in the $\lambda\le0$ clause, step 2.1 gives $M/t_N\to\infty$. At a coordinate attaining $M$, the probability of failing to reject is at most $\mathbb P(|G|\ge M-t_N)\to0$. Thus the test is uniformly consistent. [F1, F4, F6, step 2.1, given, algebra]

4.1 For each fixed support $S$, the sign-mixture supplier [F2] gives $L_S=\prod_{j\in S}e^{-1/2}\cosh(G_j)$; the full prior's likelihood ratio $L$ is the uniform average of these $L_S$, so $\mathbb E_0L=1$. For two independent uniform $k$-subsets $S,S'\subset I_n$, independence and the Gaussian moment calculation in step 2.2 give $\mathbb E_0L_SL_{S'}=(\cosh1)^{|S\cap S'|}$, hence $\mathbb E_0L^2=\mathbb E[(\cosh1)^{|S\cap S'|}]$. If $K=|S\cap S'|$, then for $0\le\ell\le k$, $\mathbb E\binom K\ell=\binom k\ell(k)_\ell/(n)_\ell\le\binom k\ell(k/n)^\ell$: expand $\binom K\ell$ over $\ell$-subsets of $I_n$ and use $\mathbb P(A\subseteq S)=(k)_\ell/(n)_\ell$. With $m=\cosh1$, expanding $m^K=(1+(m-1))^K$ gives $\mathbb E_0L^2\le(1+(m-1)k/n)^k\le e^{(m-1)k^2/n}\to1$ because $k=o(\sqrt n)$. As $\mathbb E_0L=1$, $\mathbb E_0(L-1)^2\to0$; the event and randomized-test conversion in step 2.2 then gives $\gamma_\varepsilon(\Theta_q(r))\to1$ and $\beta_\varepsilon(\Theta_q(r),\alpha)\to1-\alpha$ whenever $r/r_\varepsilon^*\to0$. This proves only the impossibility half for $\lambda>0$; the matching upper bound and the displayed sharp error formulas remain unresolved. [F2, F3, F5, step 2.2, step 1.3, given, algebra] ∎
## Remarks

This draft proves the rate lower bounds in both regimes and the full rate-order upper bound when $\lambda\le0$. It does not prove the $\lambda>0$ consistency upper bound, either regime's displayed sharp error formulas, or the corresponding asymptotically minimax tests. The 2012 article states these results but omits its proof, referring to Ingster--Suslina's Theorems 4.5 and 6.1. The full book proof has not been recovered; see the batch notes and source-resolution record. This carrier is escalated and does not certify the full Statement.
