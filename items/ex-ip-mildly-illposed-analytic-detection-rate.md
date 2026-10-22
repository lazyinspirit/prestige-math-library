---
id: ex-ip-mildly-illposed-analytic-detection-rate
kind: example
title: Mildly ill-posed analytic q=2 detection rate
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - thm-ip-ellipsoid-detection-boundary
  - lem-ip-q2-ellipsoid-extremal-profile-exists-for-small-r
  - lem-ip-q2-ellipsoid-extremal-profile-is-minimizer
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Yuri I. Ingster, Theofanis Sapatinas and Irina A. Suslina, Minimax signal detection in ill-posed inverse problems, Theorem 4.5, PDF p. 14"
      url: https://arxiv.org/pdf/1001.1853
    - title: "Evarist Giné and Richard Nickl, Mathematical Foundations of Infinite-Dimensional Statistical Models, §6.2.3"
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Example

Assume $\alpha,\beta>0$, $q=2$, $a_j=e^{\alpha j}$, and $\sigma_j=j^\beta$ in the Gaussian sequence detection experiment. The minimax separation rate over $\Theta_2(r)$ has order
$$r_\varepsilon^*\asymp\varepsilon(\log\varepsilon^{-1})^{\beta+1/4}.$$

## Example references

[Ingster, Sapatinas and Suslina, *Minimax signal detection in ill-posed inverse problems*, Theorem 4.5 and equation (4.6), PDF p. 14](https://arxiv.org/pdf/1001.1853)

[Giné and Nickl, *Mathematical Foundations of Infinite-Dimensional Statistical Models*, §6.2.3](https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf)

## Facts & Assumptions

**Given:** $\alpha,\beta>0$, $q=2$, $a_j=e^{\alpha j}$, $\sigma_j=j^\beta$, and a nonempty $\Theta_2(r)$ with a finite extremal profile for sufficiently small $r$. For this rate comparison, $X_\varepsilon\asymp Y_\varepsilon$ means the ratio is bounded above and away from zero by constants independent of $\varepsilon$.

[F1] [[thm-ip-ellipsoid-detection-boundary]]: $r^2=A J_1/J_2$, $u_\varepsilon^2=(r/\varepsilon)^4J_0/(2J_1^2)$, and the $u_\varepsilon$ boundary determines minimax distinguishability.

[F2] [[lem-ip-q2-ellipsoid-extremal-profile-exists-for-small-r]] and [[lem-ip-q2-ellipsoid-extremal-profile-is-minimizer]]: a finite active profile exists and its cutoff $m$ satisfies $A\asymp e^{-2\alpha m}$.
## Verification

1.1 Let $m$ be the largest active index. Then $A e^{2\alpha m}<1\le A e^{2\alpha(m+1)}$, so $t=Ae^{2\alpha m}\in[e^{-2\alpha},1)$. For $j=m-\ell$ with $0\le\ell<m$, the profile factor is $\rho_\ell=1-te^{-2\alpha\ell}$. For $\ell\ge1$, $1-e^{-2\alpha}\le\rho_\ell\le1$. Hence the terms with $1\le\ell\le m/2$ give a lower bound for $J_1$ and $J_0$, while the full sums are bounded above by $\sum_{j\le m}j^{4\beta}\le m^{4\beta+1}$. Thus $J_1\asymp J_0\asymp m^{4\beta+1}$. In $J_2$, the summand at $\ell$ is $t e^{-2\alpha\ell}(m-\ell)^{4\beta}\rho_\ell$. Its sum is at most $m^{4\beta}\sum_{\ell\ge0}e^{-2\alpha\ell}\le C_\alpha m^{4\beta}$, and the $\ell=1$ term is at least $c_{\alpha,\beta}m^{4\beta}$ for $m\ge2$. Therefore $J_2\asymp m^{4\beta}$. Formula [F1] gives $$r^2\asymp e^{-2\alpha m}m,\qquad u_\varepsilon^2\asymp\varepsilon^{-4}r^4m^{-(4\beta+1)}.$$ Taking logarithms of the first relation shows $m\asymp\log(1/r)$. [F1, F2, given, construct, algebra]

2.1 Set $L=\log\varepsilon^{-1}$ and $r_\varepsilon^*=\varepsilon L^{\beta+1/4}$. At this radius, $\log(1/r_\varepsilon^*)\sim L$, so [F1] and step 1.1 give $u_\varepsilon^2\asymp1$. If $r_\varepsilon/r_\varepsilon^*\to0$, then $\log(1/r_\varepsilon)\ge\log(1/r_\varepsilon^*)\sim L$ and $$u_\varepsilon^2\asymp(r_\varepsilon/r_\varepsilon^*)^4\left(\frac{\log(1/r_\varepsilon^*)}{\log(1/r_\varepsilon)}\right)^{4\beta+1}\to0.$$ If $r_\varepsilon/r_\varepsilon^*\to\infty$ and $r_\varepsilon\to0$, the logarithm ratio is at least one, so $u_\varepsilon\to\infty$. If the radii do not tend to zero, use $\bar r_\varepsilon=\sqrt{r_\varepsilon r_\varepsilon^*}$. Nonempty alternatives satisfy $r_\varepsilon^2\le a_1^{-2}$ because $\sum_j\sigma_j^2\eta_j^2\le a_1^{-2}\sum_ja_j^2\sigma_j^2\eta_j^2\le a_1^{-2}$. Hence $\bar r_\varepsilon\to0$, $\bar r_\varepsilon/r_\varepsilon^*\to\infty$, and $\Theta_2(r_\varepsilon)\subseteq\Theta_2(\bar r_\varepsilon)$; consistent tests for the larger class work on the original class. The two risk implications in [F1] prove the claimed rate. [F1, step 1.1, given, algebra] ∎