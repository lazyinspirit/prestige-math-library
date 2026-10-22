---
id: ex-ip-mildly-illposed-sobolev-detection-rate
kind: example
title: Mildly ill-posed Sobolev q=2 detection rate
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
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Yuri I. Ingster, Theofanis Sapatinas and Irina A. Suslina, Minimax signal detection in ill-posed inverse problems, Theorem 4.2, PDF pp. 12–13"
      url: https://arxiv.org/pdf/1001.1853
    - title: "Evarist Giné and Richard Nickl, Mathematical Foundations of Infinite-Dimensional Statistical Models, §6.2.3"
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf
---

## Example

Assume $\alpha,\beta>0$, $q=2$, $a_j=j^\alpha$, and $\sigma_j=j^\beta$ in the Gaussian sequence detection experiment. The minimax separation rate over $\Theta_2(r)$ has order
$$r_\varepsilon^*\asymp\varepsilon^{4\alpha/(4\alpha+4\beta+1)}.$$

## Example references

[Ingster, Sapatinas and Suslina, *Minimax signal detection in ill-posed inverse problems*, Theorem 4.2 and equation (4.3), PDF pp. 12–13](https://arxiv.org/pdf/1001.1853)

[Giné and Nickl, *Mathematical Foundations of Infinite-Dimensional Statistical Models*, §6.2.3](https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf)

## Facts & Assumptions

**Given:** $\alpha,\beta>0$, $q=2$, $a_j=j^\alpha$, $\sigma_j=j^\beta$, and a nonempty $\Theta_2(r)$ with the finite extremal profile supplied for sufficiently small $r$. For this rate comparison, $X_\varepsilon\asymp Y_\varepsilon$ means the ratio is bounded above and away from zero by constants independent of $\varepsilon$.

[F1] [[thm-ip-ellipsoid-detection-boundary]]: $r^2=A J_1/J_2$, $u_\varepsilon^2=(r/\varepsilon)^4J_0/(2J_1^2)$, and $u_\varepsilon\to0$ or $\infty$ gives the corresponding indistinguishability or consistency branch.

[F2] [[lem-ip-q2-ellipsoid-extremal-profile-exists-for-small-r]] and [[lem-ip-q2-ellipsoid-extremal-profile-is-minimizer]]: for sufficiently small $r$, a finite-support extremal profile exists and has $\widetilde\eta_j^2=z_0^2j^{2\beta}(1-Aj^{2\alpha})_+$.
## Verification

1.1 Let $m$ be the largest active index, so $A m^{2\alpha}<1\le A(m+1)^{2\alpha}$ and $(m+1)^{-2\alpha}\le A<m^{-2\alpha}$. For $j\le m/2$, $1-Aj^{2\alpha}\ge1-2^{-2\alpha}>0$. For any fixed $p>0$, $\sum_{j\le m}j^p\le m^{p+1}$ and $\sum_{m/4\le j\le m/2}j^p\ge c_pm^{p+1}$ for all sufficiently large $m$, by counting at least $m/8$ terms each at least $(m/4)^p$. Applying these bounds with $p=4\beta$ and $p=4\beta+2\alpha$ gives $$J_1\asymp m^{4\beta+1},\qquad J_0\asymp m^{4\beta+1},\qquad J_2=A\sum_{j\le m}j^{4\beta+2\alpha}(1-Aj^{2\alpha})\asymp m^{4\beta+1}.$$ Thus [F1] yields $r^2\asymp A\asymp m^{-2\alpha}$ and $u_\varepsilon^2\asymp\varepsilon^{-4}r^4m^{-(4\beta+1)}$. [F1, F2, given, construct, algebra]

2.1 Since $m\asymp r^{-1/\alpha}$, the last expression becomes $u_\varepsilon^2\asymp\varepsilon^{-4}r^{4+(4\beta+1)/\alpha}=(r/\varepsilon^{4\alpha/(4\alpha+4\beta+1)})^{4+(4\beta+1)/\alpha}$. Hence radii with ratio tending to zero give $u_\varepsilon\to0$, and [F1] gives the indistinguishability limits. For a ratio tending to infinity, if $r_\varepsilon$ does not tend to zero, replace it by $\bar r_\varepsilon=\sqrt{r_\varepsilon r_\varepsilon^*}$: nonempty alternatives satisfy $r_\varepsilon\le a_1^{-1}$, so $\bar r_\varepsilon\to0$, $\bar r_\varepsilon/r_\varepsilon^*\to\infty$, and $\Theta_2(r_\varepsilon)\subseteq\Theta_2(\bar r_\varepsilon)$. The consistent tests from [F1] at $\bar r_\varepsilon$ therefore also work at $r_\varepsilon$. This proves the stated separation rate. [F1, step 1.1, given, algebra] ∎