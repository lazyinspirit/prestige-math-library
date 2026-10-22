---
id: cor-ip-ellipsoid-sharp-gaussian-testing-asymptotics
kind: corollary
title: Sharp Gaussian asymptotics under a vanishing largest weight
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - thm-ip-ellipsoid-detection-boundary
  - lem-ip-weighted-chi-square-triangular-array-limit
  - lem-ip-gaussian-product-mixture-testing-bound
  - thm-slutsky-for-real-random-variables
  - thm-portmanteau-theorem
  - thm-chebyshev-markov-inequality-for-the-integral
  - lem-standard-normal-fourth-moment
  - def-axiom-of-choice
  - def-countable-choice
  - def-ip-isonormal-white-noise-experiment
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: Countable Choice is inherited from the sequence model. AC is used only through the published Lindeberg–Feller theorem in the weighted chi-square limit; the finite likelihood-ratio expansion and asymptotic testing inequalities are choice-free.
sources:
  references:
    - title: "Yuri I. Ingster, Theofanis Sapatinas and Irina A. Suslina, Minimax signal detection in ill-posed inverse problems, Theorem 4.1 and the discussion after equation (4.3), PDF pp. 6–7"
      url: https://arxiv.org/pdf/1001.1853
    - title: "Evarist Giné and Richard Nickl, Mathematical Foundations of Infinite-Dimensional Statistical Models, §6.2.3, PDF pp. 506–508"
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf
    - title: "Clément Marteau and Theofanis Sapatinas, A unified treatment for non-asymptotic and asymptotic approaches to minimax signal detection, §§3.1–3.2"
      url: https://arxiv.org/pdf/1406.5387
---

## Statement

Assume the $q=2$ ellipsoid detection-boundary theorem, Countable Choice, and the Axiom of Choice. Along a sequence for which $u_\varepsilon$ is bounded above and bounded away from zero and $w_{\varepsilon,0}\to0$, the minimax level-$\alpha$ type-II error and minimax total error satisfy
$$\beta_\varepsilon(\Theta_2(r_\varepsilon),\alpha)=\Phi(H_\alpha-u_\varepsilon)+o(1),\qquad \gamma_\varepsilon(\Theta_2(r_\varepsilon))=2\Phi(-u_\varepsilon/2)+o(1),$$
where $\Phi$ is the standard normal distribution function and $H_\alpha$ is defined by $\Phi(H_\alpha)=1-\alpha$. Let $c_{\varepsilon,\alpha}=\inf\{t:\mathbb P_{\varepsilon,0}(T_\varepsilon\le t)\ge1-\alpha\}$; then $\mathbb P_{\varepsilon,0}(T_\varepsilon>c_{\varepsilon,\alpha})\le\alpha$ and $c_{\varepsilon,\alpha}\to H_\alpha$. The weighted tests with thresholds $c_{\varepsilon,\alpha}$ and $u_\varepsilon/2$ attain these asymptotics, while the uncalibrated threshold $H_\alpha$ has asymptotic size $\alpha$. The vanishing-largest-weight condition is required for this Gaussian sharp branch.

## Statement references

[Ingster, Sapatinas and Suslina, *Minimax signal detection in ill-posed inverse problems*, Theorem 4.1 and equations (4.1)–(4.3), PDF pp. 6–7](https://arxiv.org/pdf/1001.1853)

[Giné and Nickl, *Mathematical Foundations of Infinite-Dimensional Statistical Models*, §6.2.3, PDF pp. 506–508](https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf)

[Marteau and Sapatinas, *A unified treatment for non-asymptotic and asymptotic approaches to minimax signal detection*, §§3.1–3.2](https://arxiv.org/pdf/1406.5387)

## Facts & Assumptions

**Given:** The q=2 detection-boundary statistic $T_\varepsilon$, finite-support extremal mean $\widetilde\eta_\varepsilon$, $u_\varepsilon$, and weights $w_{\varepsilon,j}$; AC and Countable Choice; $u_\varepsilon$ bounded above and away from zero; $w_{\varepsilon,0}\to0$.

[F1] [[thm-ip-ellipsoid-detection-boundary]]: $2\sum_jw_{\varepsilon,j}^2=1$, every alternative has statistic mean $m_\eta=\sum_jw_{\varepsilon,j}(\eta_j/\varepsilon)^2\ge u_\varepsilon$, and $\operatorname{Var}_\eta(T_\varepsilon)\le1+4w_{\varepsilon,0}m_\eta$.

[F2] [[lem-ip-weighted-chi-square-triangular-array-limit]]: under the null, $T_\varepsilon\Rightarrow N(0,1)$ when $w_{\varepsilon,0}\to0$.

[F3] [[lem-ip-gaussian-product-mixture-testing-bound]]: for the symmetric sign mixture on $\widetilde\eta_\varepsilon$, $L_\varepsilon=dP_{\pi}/dP_0=\prod_j e^{-\delta_j/2}\cosh(\sqrt{\delta_j}G_j)$, where $\delta_j=\widetilde\eta_{\varepsilon,j}^2/\varepsilon^2$ and $G_j=Y_j/\varepsilon$ under the null.

[F4] [[def-ip-isonormal-white-noise-experiment]] and [[lem-standard-normal-fourth-moment]]: under the null the $G_j$ are independent standard normals with even density, second moment $1$, fourth moment $3$, and finite eighth moment (the latter follows by two further integrations by parts against the Gaussian density).

[F5] [[thm-slutsky-for-real-random-variables]]: adding a term converging to zero in probability preserves convergence in distribution.

[F6] [[thm-portmanteau-theorem]]: convergence in distribution gives convergence of bounded uniformly continuous test expectations and convergence of probabilities on Borel sets whose boundaries have limiting probability zero.

[F7] [[thm-chebyshev-markov-inequality-for-the-integral]]: Chebyshev's inequality bounds a tail probability by the variance divided by the squared deviation.

[A1] [[def-axiom-of-choice]]: AC is used through the weighted Lindeberg–Feller theorem in [F2].

[A2] [[def-countable-choice]]: Countable Choice is inherited from the Gaussian sequence experiment.

## Proof

1.1 Under an alternative $\eta$, write $\mu_j=\eta_j/\varepsilon$ and let $G_j=\xi_j$ denote the independent standard-normal noise coordinates, so $Y_j/\varepsilon=\mu_j+G_j$. Then $$T_\varepsilon-m_\eta=\sum_jw_{\varepsilon,j}(G_j^2-1)+2\sum_jw_{\varepsilon,j}\mu_jG_j.$$ The first sum converges to $N(0,1)$ by [F2]. The second has mean zero and variance $4\sum_jw_{\varepsilon,j}^2\mu_j^2\le4w_{\varepsilon,0}m_\eta$. Thus for any sequence of alternatives with bounded $m_\eta$, the second sum tends to zero in probability by [F7], and [F5] gives $T_\varepsilon-m_\eta\Rightarrow N(0,1)$. [A1, A2, F1, F2, F5, F7, given]

1.2 Put $\delta_j=\widetilde\eta_{\varepsilon,j}^2/\varepsilon^2=2u_\varepsilon w_{\varepsilon,j}$. Since $u_\varepsilon$ is bounded and $w_{\varepsilon,0}\to0$, $\max_j\delta_j\to0$ and $\sum_j\delta_j^2=2u_\varepsilon^2=O(1)$. For a standard normal $G$, the Gaussian density and repeated integration by parts give $\mathbb EG^2=1$, $\mathbb EG^4=3$, $\mathbb EG^6=15$, and $\mathbb EG^8=105$; the boundary terms vanish because every fixed polynomial times $e^{-x^2/2}$ tends to zero. Taylor's theorem applied to $f(x)=\log\cosh x$ gives $|f(x)-x^2/2+x^4/12|\le C|x|^6$ for all real $x$: on $[-1,1]$ use the bounded sixth derivative, and outside that interval use $|\log\cosh x|\le|x|$. Therefore the summed Taylor remainder in $\log L_\varepsilon$ has expected absolute value at most $C\sum_j\delta_j^3\mathbb E|G|^6\le C(\max_j\delta_j)\sum_j\delta_j^2\to0$. [A1, F3, F4, given, algebra]

2.1 Define $c_{\varepsilon,\alpha}=\inf\{t:\mathbb P_0(T_\varepsilon\le t)\ge1-\alpha\}$. Then $\mathbb P_0(T_\varepsilon>c_{\varepsilon,\alpha})\le\alpha$, and [F2] and [F6] imply $c_{\varepsilon,\alpha}\to H_\alpha$, since the limiting normal distribution is continuous and strictly increasing. To bound maximal type-II error, consider any sequence $\eta_\varepsilon\in\Theta_2(r_\varepsilon)$. If its means $m_{\eta_\varepsilon}$ are unbounded, pass to a subsequence on which they tend to infinity; the variance bound in [F1] and [F7] show $\mathbb P_{\eta_\varepsilon}(T_\varepsilon\le c_{\varepsilon,\alpha})\to0$. If they are bounded, pass to a subsequence on which $m_{\eta_\varepsilon}\to m\ge u_*$ and $u_\varepsilon\to u_*$, where $u_*>0$. Step 1.1 gives type-II limit $\Phi(H_\alpha-m)\le\Phi(H_\alpha-u_*)$. A subsequence contradiction therefore proves the uniform upper bound $\beta_\varepsilon(\Theta_2(r_\varepsilon),\psi_{\varepsilon,c_{\varepsilon,\alpha}})\le\Phi(H_\alpha-u_\varepsilon)+o(1)$. [F1, F2, F6, F7, step 1.1, given]

2.2 The quartic term $\sum_j\delta_j^2G_j^4$ has mean $3\sum_j\delta_j^2=6u_\varepsilon^2$ and variance $96\sum_j\delta_j^4\le96(\max_j\delta_j)^2\sum_j\delta_j^2\to0$. Substituting the expansion from step 1.2 into [F3] gives $$\log L_\varepsilon=u_\varepsilon T_\varepsilon-u_\varepsilon^2/2+o_{P_0}(1).$$ Together with [F2], this implies that under $P_0$ the likelihood ratio converges along any subsequence with $u_\varepsilon\to u_*>0$ to $\exp(-u_*^2/2+u_*G)$ for $G\sim N(0,1)$. [F2, F3, F4, step 1.2, algebra]

3.1 For any level-$\alpha$ test $\psi$, set $a_\varepsilon=\exp(u_\varepsilon c_{\varepsilon,\alpha}-u_\varepsilon^2/2)$. Pointwise, $L_\varepsilon(1-\psi)\ge\min(L_\varepsilon,a_\varepsilon)-a_\varepsilon\psi$. Hence the mixture-average type-II error is at least $\mathbb E_0\min(L_\varepsilon,a_\varepsilon)-a_\varepsilon\alpha$. Along a subsequence with $u_\varepsilon\to u_*>0$, step 2.1 gives $c_{\varepsilon,\alpha}\to H_\alpha$, and step 2.2 and [F6] yield the limit $\Phi(H_\alpha-u_*)$. Since maximal type-II error dominates the mixture average, this proves the matching lower bound for $\beta_\varepsilon(\Theta_2(r_\varepsilon),\alpha)$. [F1, F3, F6, step 2.1, step 2.2, given, algebra]

4.1 For every test $\psi$, $\psi+L_\varepsilon(1-\psi)\ge\min(1,L_\varepsilon)$ pointwise. Thus its total error against the null and mixture is at least $\mathbb E_0\min(1,L_\varepsilon)$. By step 2.2 and [F6] this expectation tends along $u_\varepsilon\to u_*$ to $2\Phi(-u_*/2)$, giving the matching minimax lower bound for $\gamma_\varepsilon$. The weighted test at threshold $u_\varepsilon/2$ has type-I limit $\Phi(-u_*/2)$ and maximal type-II upper limit $\Phi(-u_*/2)$ by the same bounded-mean/unbounded-mean split as step 2.1. Continuity in $u_*$ and compactness of the allowed range of $u_\varepsilon$ turn the subsequential bounds into the stated $o(1)$ formulas. [F1, F2, F6, F7, step 2.1, step 2.2, given, algebra] ∎