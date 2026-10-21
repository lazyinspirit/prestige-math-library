---
id: ex-ip-severely-illposed-sobolev-detection-rate
kind: example
title: Severely ill-posed Sobolev q=2 detection rate
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
    - title: "Yuri I. Ingster, Theofanis Sapatinas and Irina A. Suslina, Minimax signal detection in ill-posed inverse problems, Theorem 4.4 and equation (4.5), PDF pp. 13–14"
      url: https://arxiv.org/pdf/1001.1853
    - title: "Evarist Giné and Richard Nickl, Mathematical Foundations of Infinite-Dimensional Statistical Models, §6.2.3"
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf
---

## Example

Assume $\alpha,\beta>0$, $q=2$, $a_j=j^\alpha$, and $\sigma_j=e^{\beta j}$ in the Gaussian sequence detection experiment. A minimax separation rate over $\Theta_2(r)$ is
$$r_\varepsilon^*\asymp\left(\frac{\log\varepsilon^{-1}}{\beta}\right)^{-\alpha}.$$

## Example references

[Ingster, Sapatinas and Suslina, *Minimax signal detection in ill-posed inverse problems*, Theorem 4.4 and equation (4.5), PDF pp. 13–14](https://arxiv.org/pdf/1001.1853)

[Giné and Nickl, *Mathematical Foundations of Infinite-Dimensional Statistical Models*, §6.2.3](https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf)

## Facts & Assumptions

**Given:** $\alpha,\beta>0$, $q=2$, $a_j=j^\alpha$, $\sigma_j=e^{\beta j}$, and the finite-support extremal profile for sufficiently small $r$. For this rate comparison, $X_\varepsilon\asymp Y_\varepsilon$ means the ratio is bounded above and away from zero by constants independent of $\varepsilon$.

[F1] [[thm-ip-ellipsoid-detection-boundary]]: $r^2=A J_1/J_2$, $u_\varepsilon^2=(r/\varepsilon)^4J_0/(2J_1^2)$, and $u_\varepsilon\to0$ or $\infty$ gives the two minimax risk regimes.

[F2] [[lem-ip-q2-ellipsoid-extremal-profile-exists-for-small-r]] and [[lem-ip-q2-ellipsoid-extremal-profile-is-minimizer]]: the active cutoff $m$ satisfies $A\asymp m^{-2\alpha}$.
## Verification

1.1 Let $m$ be the largest active index, so $(m+1)^{-2\alpha}\le A<m^{-2\alpha}$, and write $\ell=m-j$. For $1\le\ell\le m/2$, the mean-value theorem applied to $x^{2\alpha}$ on $[1/2,1]$ gives $$c_\alpha\frac{\ell+1}{m}\le1-A(m-\ell)^{2\alpha}\le C_\alpha\frac{\ell+1}{m}.$$ For $\ell>m/2$, the profile factor is at most one. Summing against $\sigma_j^4=e^{4\beta m}e^{-4\beta\ell}$, the near terms are bounded by the convergent sums $\sum_{\ell\ge0}(\ell+1)e^{-4\beta\ell}$ and $\sum_{\ell\ge0}(\ell+1)^2e^{-4\beta\ell}$, and the far tail is exponentially smaller than $m^{-2}$. The $\ell=1$ term supplies matching lower bounds. Thus $$J_1\asymp J_2\asymp e^{4\beta m}/m,\qquad J_0\asymp e^{4\beta m}/m^2.$$ For $J_2$, its extra factor $Aa_j^2$ is at most one and is bounded below by a positive constant at $j=m-1$. Consequently [F1] gives $r^2\asymp A\asymp m^{-2\alpha}$ and $u_\varepsilon^2\asymp\varepsilon^{-4}r^4e^{-4\beta m}$. [F1, F2, given, construct, algebra]

2.1 The cutoff relation implies $m\asymp r^{-1/\alpha}$. For $r_\varepsilon^*=(\log\varepsilon^{-1}/\beta)^{-\alpha}$, if $r_\varepsilon/r_\varepsilon^*\to0$, then $m/(\log\varepsilon^{-1}/\beta)\to\infty$, so the expression in step 1.1 tends to zero. If the ratio tends to infinity while $r_\varepsilon\to0$, then $m=o(\log\varepsilon^{-1})$ and $\log u_\varepsilon^2=4\log\varepsilon^{-1}-4\beta m+4\log r_\varepsilon+O(1)\to\infty$, because $\log(1/r_\varepsilon)=O(\log\log\varepsilon^{-1})$. If $r_\varepsilon$ does not tend to zero, reduce to $\bar r_\varepsilon=\sqrt{r_\varepsilon r_\varepsilon^*}$. Nonempty alternatives satisfy $r_\varepsilon^2\le a_1^{-2}$ by the two q=2 constraints, so $\bar r_\varepsilon\to0$ and $\bar r_\varepsilon/r_\varepsilon^*\to\infty$. The inclusion $\Theta_2(r_\varepsilon)\subseteq\Theta_2(\bar r_\varepsilon)$ transfers consistent tests to the original class. By [F1], these limits prove the displayed rate. [F1, step 1.1, given, algebra] ∎