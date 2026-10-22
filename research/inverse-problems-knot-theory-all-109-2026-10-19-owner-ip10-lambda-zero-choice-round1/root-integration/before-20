---
id: ex-ip-severely-illposed-analytic-detection-rate
kind: example
title: Severely ill-posed analytic q=2 detection rate
status: draft
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
    - title: "Yuri I. Ingster, Theofanis Sapatinas and Irina A. Suslina, Minimax signal detection in ill-posed inverse problems, Theorem 4.3 and equation (4.4), PDF p. 13"
      url: https://arxiv.org/pdf/1001.1853
    - title: "Evarist Giné and Richard Nickl, Mathematical Foundations of Infinite-Dimensional Statistical Models, §6.2.3"
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf
---

## Example

Assume $\alpha,\beta>0$, $q=2$, $a_j=e^{\alpha j}$, and $\sigma_j=e^{\beta j}$ in the Gaussian sequence detection experiment. A minimax separation rate over $\Theta_2(r)$ is
$$r_\varepsilon^*\asymp\varepsilon^{\alpha/(\alpha+\beta)}.$$

## Example references

[Ingster, Sapatinas and Suslina, *Minimax signal detection in ill-posed inverse problems*, Theorem 4.3 and equation (4.4), PDF p. 13](https://arxiv.org/pdf/1001.1853)

[Giné and Nickl, *Mathematical Foundations of Infinite-Dimensional Statistical Models*, §6.2.3](https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf)

## Facts & Assumptions

**Given:** $\alpha,\beta>0$, $q=2$, $a_j=e^{\alpha j}$, $\sigma_j=e^{\beta j}$, and the finite-support extremal profile for sufficiently small $r$. For this rate comparison, $X_\varepsilon\asymp Y_\varepsilon$ means the ratio is bounded above and away from zero by constants independent of $\varepsilon$.

[F1] [[thm-ip-ellipsoid-detection-boundary]]: $r^2=A J_1/J_2$, $u_\varepsilon^2=(r/\varepsilon)^4J_0/(2J_1^2)$, and the $u_\varepsilon$ boundary determines minimax distinguishability.

[F2] [[lem-ip-q2-ellipsoid-extremal-profile-exists-for-small-r]] and [[lem-ip-q2-ellipsoid-extremal-profile-is-minimizer]]: the active cutoff $m$ satisfies $A\asymp e^{-2\alpha m}$.
## Verification

1.1 Let $m$ be the largest active index and put $t=Ae^{2\alpha m}\in[e^{-2\alpha},1)$. For $j=m-\ell$, the profile factor is $\rho_\ell=1-te^{-2\alpha\ell}$. For every $\ell\ge1$, $1-e^{-2\alpha}\le\rho_\ell\le1$, while $0\le\rho_0\le1$. The sums for $J_1$ and $J_0$ are geometric in $\ell$; their $\ell=1$ terms give positive lower bounds and the full geometric sums give upper bounds, so $J_1\asymp J_0\asymp e^{4\beta m}$. In $J_2$, the summands are $t e^{-(2\alpha+4\beta)\ell}\rho_\ell e^{4\beta m}$; the $\ell=1$ term is bounded below by a positive constant times $e^{4\beta m}$, and the geometric series gives the matching upper bound. Thus $J_2\asymp e^{4\beta m}$. By [F1], $$r^2\asymp A\asymp e^{-2\alpha m},\qquad u_\varepsilon^2\asymp\varepsilon^{-4}r^4e^{-4\beta m}\asymp\varepsilon^{-4}r^{4+4\beta/\alpha}.$$ [F1, F2, given, construct, algebra]

2.1 The last expression is comparable to $(r/\varepsilon^{\alpha/(\alpha+\beta)})^{4+4\beta/\alpha}$. Thus radii below the displayed scale by a factor tending to zero have $u_\varepsilon\to0$, and radii above it by a factor tending to infinity have $u_\varepsilon\to\infty$ when $r_\varepsilon\to0$. If $r_\varepsilon$ does not tend to zero, reduce to $\bar r_\varepsilon=\sqrt{r_\varepsilon r_\varepsilon^*}$. Nonempty alternatives satisfy $r_\varepsilon^2\le a_1^{-2}$ by the two q=2 constraints, so $\bar r_\varepsilon\to0$ and $\bar r_\varepsilon/r_\varepsilon^*\to\infty$. The inclusion $\Theta_2(r_\varepsilon)\subseteq\Theta_2(\bar r_\varepsilon)$ transfers consistent tests to the original class. The risk implications in [F1] establish the separation rate. [F1, step 1.1, given, algebra] ∎