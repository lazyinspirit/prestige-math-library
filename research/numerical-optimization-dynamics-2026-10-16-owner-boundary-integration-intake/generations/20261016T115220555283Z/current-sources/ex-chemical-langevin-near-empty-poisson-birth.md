---
id: ex-chemical-langevin-near-empty-poisson-birth
kind: example
title: "A CLE can assign negative density near an empty population"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-density-scaled-jump-and-chemical-langevin-generators
  - def-poisson-and-cox-point-process
  - thm-finite-intensity-poisson-process-existence-and-mixed-binomial-law
  - def-scalar-poisson-count-law
  - lem-poisson-count-law-normalization-and-moments
  - def-standard-normal-and-normal-laws
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pending
sources:
  references:
    - title: "Daniel T. Gillespie, Approximate accelerated stochastic simulation of chemically reacting systems"
      url: "https://moodle2.units.it/pluginfile.php/293921/mod_resource/content/1/Gillespie_2001_Approximate_accelerated_stochastic_simulation_of_chemically_reacting_systems.pdf"
      locator: "§IV, Poisson-to-normal approximation conditions for the chemical Langevin method, journal pp. 1720–1721 / PDF pp. 5–6."
    - title: "Tiejun Li, Lecture 21: Application in chemical reaction kinetics, Applied Stochastic Analysis course notes"
      url: "https://www.math.pku.edu.cn/teachers/litj/notes/appl_stoch/lect21.pdf"
      locator: "§3.2, Poisson-to-normal CLE scaling, PDF pp. 3–4."
---

## Example

Consider constant immigration $\varnothing\to A$ with density jump $1/V$ and
rate $V\lambda$, where $V\ge1$, $\lambda>0$, and the time horizon $T>0$.
Let $N_T$ be the count of a homogeneous Poisson point process on $(0,T]$ with
intensity $V\lambda$ times Lebesgue measure, and set $X_T=N_T/V$. For the
constant-coefficient CLE generator
$$\mathcal G_Vf(x)=\lambda f'(x)+\frac{\lambda}{2V}f''(x),$$
use its Gaussian terminal marginal
$$Z_T=\mu+\sqrt{\mu/V}\,G,\qquad \mu=\lambda T,\quad G\sim N(0,1).$$
Then $X_T\ge0$ almost surely, while the CLE marginal can be negative.

## Facts & Assumptions

**Given:** $V\ge1$, $\lambda,T>0$, the exact jump-count construction, the
Gaussian CLE marginal above, and the count and density-scaled model laws.

[F1] [[thm-finite-intensity-poisson-process-existence-and-mixed-binomial-law]]:
a Poisson point process on a finite-intensity time interval exists, and its
total count is Poisson with parameter equal to the intensity of that interval.

[F2] [[def-poisson-and-cox-point-process]]: counts on disjoint Borel sets of
a Poisson point process are independent and have Poisson laws with their
respective intensity parameters.

[F3] [[def-scalar-poisson-count-law]] and
[[lem-poisson-count-law-normalization-and-moments]]: a count with law
$\operatorname{Pois}(m)$ has masses $e^{-m}m^k/k!$, mean $m$, and
$\mathbb E[N(N-1)]=m^2$.

[F4] [[def-density-scaled-jump-and-chemical-langevin-generators]]: a jump of
size $\nu/V$ at rate $Va(x)$ has generator
$Va(x)(f(x+\nu/V)-f(x))$; its CLE coefficients are the drift $\nu a(x)$
and covariance rate $a(x)\nu\nu^{\mathsf T}/V$.

[F5] [[def-standard-normal-and-normal-laws]]: the law $N(0,1)$ has density
$\varphi(u)=e^{-u^2/2}/\sqrt{2\pi}$ on $\mathbb R$.

[A1] The normal-law construction [F5] assumes the Axiom of Choice, recorded
as [[def-axiom-of-choice]].

[A2] The example uses the stated Gaussian terminal marginal of the
constant-coefficient CLE. This exact marginal is specified here; it is not
inferred from the general model-error theorem.

## Verification

**Given:** The inputs above, with $m=V\mu$.

1.1 By [F1], $N_T\sim\operatorname{Pois}(m)$, so $X_T=N_T/V\ge0$ almost surely. The point-process counts on disjoint intervals are independent by [F2]. On an interval of length $h$, put $r=V\lambda h$. By [F3], $\mathbb P(K=0)=e^{-r}=1-r+O(r^2)$ and $\mathbb P(K=1)=re^{-r}=r+O(r^2)$; also $\mathbb P(K\ge2)\le\mathbb E[K(K-1)]/2=r^2/2$. For bounded $f$, the multiple-count contribution to its expected increment is therefore $O(h^2)\|f\|_\infty$. Dividing the zero/single-count expansion by $h$ gives the density-count generator $V\lambda(f(x+1/V)-f(x))$, as in [F4]. [F1, F2, F3, F4, algebra]

1.2 The density $\varphi$ in [F5] is even. The moments of orders one and three are absolutely integrable, as follows by substituting $v=u^2/2$ in the tail integrals, so symmetry gives $\mathbb E G=\mathbb E G^3=0$. Since $\varphi'(u)=-u\varphi(u)$ and $u\varphi(u)\to0$ at both infinities, integration by parts gives $$\mathbb E[G^2]=\int_{\mathbb R}u^2\varphi(u)\,du =\int_{\mathbb R}\varphi(u)\,du=1.$$ Expanding the cube in [A2] now gives $$\mathbb E[Z_T^3]=\mu^3+3\mu^2/V.$$ [F5, A1, A2, algebra]

2.1 Reindexing the nonnegative Poisson mass series gives $$\mathbb E[N_T(N_T-1)(N_T-2)] =e^{-m}\sum_{k=3}^\infty\frac{k(k-1)(k-2)m^k}{k!} =m^3e^{-m}\sum_{r=0}^\infty\frac{m^r}{r!}=m^3.$$ Using [F3] and $N^3=N(N-1)(N-2)+3N(N-1)+N$ yields $$\mathbb E[X_T^3]=\mu^3+\frac{3\mu^2}{V}+\frac{\mu}{V^2}.$$ [F3, step 1.1, algebra]

3.1 Subtracting the two moments in steps 2.1 and 1.2 gives $$\mathbb E[X_T^3]-\mathbb E[Z_T^3]=\mu/V^2>0.$$ Thus this exact marginal comparison has a weak discrepancy of order $V^{-2}$ for the cubic payoff. [step 2.1, step 1.2, algebra]

4.1 The CLE value is negative exactly when $G<-\sqrt{V\mu}$. The normal density is strictly positive on every nonempty interval, so this event has positive probability. As $V\mu\downarrow0$, continuity of the normal distribution and symmetry give $$\mathbb P(Z_T<0)=\mathbb P(G<-\sqrt{V\mu})\longrightarrow\tfrac12.$$ The jump marginal remains nonnegative by step 1.1. [F5, step 1.1, A2, algebra] ∎

## Notes

The cubic payoff is unbounded, so its exact discrepancy is not an application
of [[thm-density-scaled-chemical-langevin-model-error]], whose general estimate
requires a bounded payoff and a smooth stopped backward solution. This example
separates a solvable marginal calculation from that theorem's hypotheses.
