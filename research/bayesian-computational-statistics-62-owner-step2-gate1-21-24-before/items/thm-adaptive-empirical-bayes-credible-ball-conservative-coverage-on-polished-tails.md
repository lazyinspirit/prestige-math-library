---
id: thm-adaptive-empirical-bayes-credible-ball-conservative-coverage-on-polished-tails
kind: theorem
title: "Conservative coverage of adaptive empirical-Bayes credible balls on polished tails"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - def-adaptive-empirical-bayes-gaussian-sequence-procedure
  - def-axiom-of-choice
  - def-polished-tail-class-for-gaussian-sequence
  - lem-gaussian-sequence-empirical-bayes-posterior-formula
  - lem-empirical-bayes-maximizer-bracket-on-polished-tails
  - lem-empirical-bayes-radius-bias-and-noise-comparison
justified_by: []
proof_strategy: direct
axiom_use: "The probability model inherits AC through the Gaussian sequence procedure. No stronger choice principle is asserted."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Botond Szabó, Aad van der Vaart and Harry van Zanten, Frequentist coverage of adaptive nonparametric Bayesian credible sets, Annals of Statistics 43(4) (2015)"
      url: "https://arxiv.org/pdf/1310.4489v5"
      locator: "Theorem 3.6 and full proof in §5, printed pp. 12–13 and 22–28 (PDF pp. 13–14 and 23–29)."
    - title: "B. T. Knapik, A. W. van der Vaart and J. H. van Zanten, Bayesian inverse problems with Gaussian priors, Annals of Statistics 39(5) (2011)"
      url: "https://research.vu.nl/ws/portalfiles/portal/2619416/276605.pdf"
      locator: "Theorem 4.2 and complete proof in §7.4, printed pp. 2635–2638 (PDF pp. 11–14); fixed-hyperparameter Gaussian credible-ball coverage and bias/spread comparison."
---

## Statement

Use the Gaussian sequence procedure of
[[def-adaptive-empirical-bayes-gaussian-sequence-procedure]] with fixed
$p\ge0$, $C\ge1$, $A>0$, and
$C^{-2}i^{-2p}\le\kappa_i^2\le C^2i^{-2p}$. Fix $L_0\ge1$, $N_0\ge1$,
$\rho\ge2$, and $\gamma\in(0,1)$. Assume that
$\theta_0\in\Theta_{\mathrm{pt}}(L_0,N_0,\rho)$ and
$\theta_{0,1}=0$. Then there is a finite inflation constant $L>0$,
depending only on the fixed model and class parameters, such that
$$ \inf_{\substack{\theta_0\in\Theta_{\mathrm{pt}}(L_0,N_0,\rho)\\ \theta_{0,1}=0}} P_{\theta_0}^{(n)}\{\theta_0\in\widehat C_n(L)\} \longrightarrow1. $$
This is conservative frequentist coverage tending to one, not exact
asymptotic coverage $1-\gamma$. The source also allows a sequence of caps
$A_n>0$ satisfying, for all sufficiently large $n$,
$$ A_n\le \frac{\sqrt{\log n}}{4\sqrt{\log(\rho\vee e)}}. $$
In that case there is a constant $K_{\mathrm{infl}}>0$, depending only on the
fixed model and class parameters and not on $n$, such that the same coverage
conclusion holds for any deterministic inflation sequence satisfying
$$ L_n\ge K_{\mathrm{infl}}(3\rho^{3(1+2p)})^{A_n} $$
for all sufficiently large $n$.

## Facts & Assumptions

**Given:** AC and the hypotheses in the Statement, with either fixed $A$ or the stated growing-cap regime.

[F1] The empirical-Bayes procedure defines its credible set to be all of $\ell^2$ when the selector is zero. [[def-adaptive-empirical-bayes-gaussian-sequence-procedure]]

[F2] The polished-tail bracket places the selector in $[a_n,b_n]=[\underline\alpha_n,\overline\alpha_n]$ with probability tending uniformly to one and compares $R_{a_n}/R_{b_n}$, where $R_\alpha=n^{-2\alpha/(1+2\alpha+2p)}$. [[lem-empirical-bayes-maximizer-bracket-on-polished-tails]]

[F3] For bracket endpoints with $b_n>0$, the posterior-radius, bias and noise bounds apply when $h_n(b_n;\theta_0)\le8C^8$. [[lem-empirical-bayes-radius-bias-and-noise-comparison]]

## Proof

1.1 Write $a=a_n$, $b=b_n$. Continuity of $h_n(\cdot;\theta_0)$ gives $h_n(b;\theta_0)\le8C^8$ whenever $b>0$: if the sublevel set is nonempty, its supremum belongs to it by compactness, while an empty sublevel set has $b=0$ by convention. The hypotheses $N_{n,A_n}\to\infty$ and $A_n/N_{n,A_n}\to0$ in [F3] hold for fixed $A$ and under the growing cap, because $\log N_{n,A_n}=\log n/(1+2A_n+2p)$ grows at least as a positive multiple of $\sqrt{\log n}$ when $A_n$ is unbounded. [F2, F3, given, algebra]

1.2 On the bracket event from [F2], the case $\widehat\alpha_n=0$ gives coverage by [F1]. Otherwise $b>0$. Couple the centered posterior-mean noise by the same normal errors for every $\alpha$. Each posterior variance decreases with $\alpha$, so its norm quantile decreases too, and [F3] gives $r(\widehat\alpha_n)\ge r(b)\ge\sqrt{dR_b}$. The triangle inequality and [F3] then give, with probability tending uniformly to one, $\|\widehat\theta_{n,\widehat\alpha_n}-\theta_0\|\le K_1(1+\rho^{1+2b+2p})\sqrt{R_b}+K_2\sqrt{R_a}$. The probability error for the noise is bounded by $K/N_{n,A_n}$ and is independent of the truth. [F1, F2, F3, step 1.1, algebra]

2.1 For fixed $A$, [F2] bounds $R_a/R_b$ by a constant depending only on the fixed parameters. Choose $L$ so that $L\sqrt d$ exceeds $K_1(1+\rho^{1+2A+2p})+K_2\sqrt{R_a/R_b}$ uniformly. Then step 1.2 implies coverage on an event whose probability tends uniformly to one. This proves the fixed-cap conclusion. [F2, step 1.2, choose, algebra]

2.2 For growing $A_n$, the sharpened comparison in [F2] bounds $R_a/R_b$ by $K(1+L_0\rho^{1+2A_n})^{1+2p}$, with $K$ independent of $n$ and the truth. Hence $\sqrt{R_a/R_b}\le K_{\mathrm{noise}}\rho^{(1+2p)A_n}$ after absorbing fixed factors into $K_{\mathrm{noise}}$. The bias bound from step 1.2 is at most $K_{\mathrm{bias}}\rho^{2A_n}\sqrt{R_b}$, with $K_{\mathrm{bias}}$ also independent of $n$ and the truth. Since $(3\rho^{3(1+2p)})^{A_n}$ dominates both $\rho^{(1+2p)A_n}$ and $\rho^{2A_n}$, choose a fixed $K_{\mathrm{infl}}\ge1$ with $K_{\mathrm{infl}}\sqrt d\ge K_{\mathrm{noise}}+K_{\mathrm{bias}}$. Then the bound on $L_n$ makes the credible radius at least the sum of the bias and noise bounds on the bracket and noise events. The bracket and noise errors tend uniformly to zero because $N_{n,A_n}\to\infty$, proving the growing-cap conclusion. [F2, step 1.2, step 2.1, algebra] ∎

## Remarks

The first-coordinate restriction is necessary for uniformity with this prior convention: the marginal likelihood does not use its value in selecting $\alpha$, while its posterior bias contains that value. All probability-model choice assumptions are inherited from the stated procedure.
