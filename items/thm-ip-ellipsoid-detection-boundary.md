---
id: thm-ip-ellipsoid-detection-boundary
kind: theorem
title: q=2 Gaussian-sequence ellipsoid detection boundary
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-ip-minimax-detection-risk-and-separation
  - def-ip-isonormal-white-noise-experiment
  - lem-ip-gaussian-product-mixture-testing-bound
  - lem-ip-q2-ellipsoid-extremal-profile-is-minimizer
  - def-countable-choice
  - lem-standard-normal-fourth-moment
  - thm-chebyshev-markov-inequality-for-the-integral
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: Countable Choice is inherited from the Gaussian sequence inverse model. The two rate-dichotomy branches use only finite likelihood ratios and second-moment bounds; no further choice axiom is used.
sources:
  references:
    - title: "Yuri I. Ingster, Theofanis Sapatinas and Irina A. Suslina, Minimax signal detection in ill-posed inverse problems, §2 and §4.1, PDF pp. 4–7"
      url: https://arxiv.org/pdf/1001.1853
    - title: "Evarist Giné and Richard Nickl, Mathematical Foundations of Infinite-Dimensional Statistical Models, §6.2.3, PDF pp. 506–508"
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf
    - title: "Clément Marteau and Theofanis Sapatinas, A unified treatment for non-asymptotic and asymptotic approaches to minimax signal detection, §§3.1–3.2"
      url: https://arxiv.org/pdf/1406.5387
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Assume Countable Choice and the minimax detection-risk definition with $q=2$. For each $\varepsilon$, suppose $\Theta_2(r_\varepsilon)$ is nonempty and has a finite-support fourth-power minimizer $\widetilde\eta_\varepsilon$ with profile $\widetilde\eta_{\varepsilon,j}^2=z_0^2\sigma_j^2(1-Aa_j^2)_+$ as in the extremal-profile lemma. Put
$$u_\varepsilon^2=\frac{1}{2\varepsilon^4}\sum_j\widetilde\eta_{\varepsilon,j}^4,\qquad w_{\varepsilon,j}=\frac{\widetilde\eta_{\varepsilon,j}^2}{\sqrt{2\sum_j\widetilde\eta_{\varepsilon,j}^4}},\qquad w_{\varepsilon,0}=\max_jw_{\varepsilon,j},$$
and define
$$T_\varepsilon=\sum_jw_{\varepsilon,j}\bigl((Y_j/\varepsilon)^2-1\bigr),\qquad \psi_{\varepsilon,H}=\mathbf1_{\{T_\varepsilon>H\}}.$$
If $u_\varepsilon\to0$, then $\gamma_\varepsilon(\Theta_2(r_\varepsilon))\to1$ and $\beta_\varepsilon(\Theta_2(r_\varepsilon),\alpha)\to1-\alpha$ for every $\alpha\in(0,1)$. If $u_\varepsilon\to\infty$, then for every fixed $c\in(0,1)$ the tests $\psi_{\varepsilon,cu_\varepsilon}$ have total error tending to zero.

For the extremal profile, define the finite sums
$$J_1=\sum_j\sigma_j^4(1-Aa_j^2)_+,\quad J_2=A\sum_ja_j^2\sigma_j^4(1-Aa_j^2)_+,\quad J_0=\sum_j\sigma_j^4(1-Aa_j^2)_+^2.$$
The active constraints imply
$$r_\varepsilon^2=A\frac{J_1}{J_2},\qquad u_\varepsilon^2=\left(\frac{r_\varepsilon}{\varepsilon}\right)^4\frac{J_0}{2J_1^2}.$$

## Statement references

[Ingster, Sapatinas and Suslina, *Minimax signal detection in ill-posed inverse problems*, Theorem 4.1 and equations (4.1)–(4.8)](https://arxiv.org/pdf/1001.1853)

[Giné and Nickl, *Mathematical Foundations of Infinite-Dimensional Statistical Models*, §6.2.3, Theorem 6.2.11 proof, PDF pp. 506–508](https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf)

[Marteau and Sapatinas, *A unified treatment for non-asymptotic and asymptotic approaches to minimax signal detection*, §§3.1–3.2](https://arxiv.org/pdf/1406.5387)

## Facts & Assumptions

**Given:** Countable Choice; $q=2$; a nonempty class $\Theta_2(r_\varepsilon)$; a finite-support minimizing profile satisfying both active constraints; and the Gaussian sequence detection experiment.

[F1] [[def-ip-minimax-detection-risk-and-separation]]: $\alpha_\varepsilon(\psi)=\mathbb E_0\psi$, $\beta_\varepsilon(\Theta_2(r),\psi)=\sup_{\eta\in\Theta_2(r)}\mathbb E_\eta(1-\psi)$, and $\gamma_\varepsilon$ is the infimum total error.

[F2] [[lem-ip-q2-ellipsoid-extremal-profile-is-minimizer]]: $\widetilde\eta_j^2=z_0^2\sigma_j^2(1-Aa_j^2)_+$ minimizes $\sum_j\eta_j^4$ over $\Theta_2(r)$ and satisfies $\sum_j\sigma_j^2\widetilde\eta_j^2=r^2$, $\sum_ja_j^2\sigma_j^2\widetilde\eta_j^2=1$.

[F3] [[lem-ip-gaussian-product-mixture-testing-bound]]: for a finite-support feasible $v$, its symmetric sign mixture has total-variation distance at most $\tfrac12\sqrt{\exp(u(v)^2)-1}$ from the null; consequently it gives the displayed minimax lower bounds.

[F4] [[def-ip-isonormal-white-noise-experiment]] supplies independent standard-normal coordinates with normalized density $\varphi(t)=(2\pi)^{-1/2}e^{-t^2/2}$ and covariance one. We use the scalar calculation of [[lem-standard-normal-fourth-moment]] with this supplied law, rather than invoke its AC-based law construction: $\varphi\prime(t)=-t\varphi(t)$, so integration by parts on $[-R,R]$ gives $\int t^2\varphi=[-t\varphi]_{-R}^R+\int\varphi$ and $\int t^4\varphi=[-t^3\varphi]_{-R}^R+3\int t^2\varphi$. The polynomial-Gaussian boundary terms vanish as $R\to\infty$; the nonnegative integrals increase to their full integrals. Supplied normalization therefore gives second and fourth moments $1$ and $3$; symmetry gives first and third moments zero. This supplied-law calculation uses no additional choice.

[F5] [[thm-chebyshev-markov-inequality-for-the-integral]]: Chebyshev's inequality bounds a tail probability by the variance divided by the squared deviation.

[A1] [[def-countable-choice]]: Countable Choice is the assumption of the upstream Gaussian sequence model.

## Proof


1.1 The profile has finite support by the assumption on $S$. Its weights satisfy $2\sum_jw_{\varepsilon,j}^2=1$, so $\sum_jw_{\varepsilon,j}^2=1/2$. Under a parameter $\eta$, write $\mu_j=\eta_j/\varepsilon$; then $Y_j/\varepsilon=\xi_j+\mu_j$. Independence and [F4] give $$m_\eta:=\mathbb E_\eta T_\varepsilon=\sum_jw_{\varepsilon,j}\mu_j^2,\qquad \operatorname{Var}_\eta(T_\varepsilon)=1+4\sum_jw_{\varepsilon,j}^2\mu_j^2\le1+4w_{\varepsilon,0}m_\eta.$$ In particular, under the null the statistic has mean zero and variance one. [A1, F1, F2, F4, algebra]

1.2 Suppose $u_\varepsilon\to0$. Apply [F3] to $v=\widetilde\eta_\varepsilon$. The resulting total-variation bound tends to zero, so every test has total error at least $1-o(1)$ and every level-$\alpha$ test has maximal type-II error at least $1-\alpha-o(1)$. The constant test $\psi\equiv0$ gives total error $1$, and the constant randomized test $\psi\equiv\alpha$ gives level $\alpha$ and maximal type-II error $1-\alpha$. These upper bounds prove both limits. [F1, F3, given]

2.1 For any $\eta\in\Theta_2(r_\varepsilon)$, put $x_j=\eta_j^2$ and $\widetilde x_j=\widetilde\eta_j^2$. Since $1-Aa_j^2\le0$ off the profile support, $$\sum_j\widetilde x_jx_j=z_0^2\sum_{j\in S}\sigma_j^2(1-Aa_j^2)x_j\ge z_0^2(r_\varepsilon^2-A)=\sum_j\widetilde x_j^2,$$ where the inequality follows from $\sum_j\sigma_j^2x_j\ge r_\varepsilon^2$ and $\sum_ja_j^2\sigma_j^2x_j\le1$. Thus $$m_\eta\ge\frac{\sum_j\widetilde\eta_j^4}{\varepsilon^2\sqrt{2\sum_j\widetilde\eta_j^4}}=u_\varepsilon.$$ [A1, F1, F2, step 1.1, algebra]

3.1 Suppose $u_\varepsilon\to\infty$ and fix $c\in(0,1)$. Applying [F5] under the null gives $\alpha_\varepsilon(\psi_{\varepsilon,cu_\varepsilon})\le(cu_\varepsilon)^{-2}\to0$. For any alternative, step 2.1 and step 1.1 give $$\mathbb P_\eta(T_\varepsilon\le cu_\varepsilon)\le\frac{1+4w_{\varepsilon,0}m_\eta}{(m_\eta-cu_\varepsilon)^2}\le\frac{1}{(1-c)^2u_\varepsilon^2}+\frac{4w_{\varepsilon,0}}{(1-c)^2u_\varepsilon}.$$ The final bound uses that $m/(m-cu)^2$ decreases for $m\ge u$ and $w_{\varepsilon,0}\le1/\sqrt2$, which follows from $\sum_jw_{\varepsilon,j}^2=1/2$. It tends to zero uniformly over $\Theta_2(r_\varepsilon)$, proving consistency. [F1, F5, step 1.1, step 2.1, algebra]

4.1 Substituting the profile into the active constraints gives $r_\varepsilon^2=z_0^2J_1$ and $1=z_0^2J_2/A$. Hence $r_\varepsilon^2=A J_1/J_2$. Also $\sum_j\widetilde\eta_j^4=z_0^4J_0$, and eliminating $z_0^2=r_\varepsilon^2/J_1$ gives $u_\varepsilon^2=(r_\varepsilon/\varepsilon)^4J_0/(2J_1^2)$. [F2, given, algebra] ∎
