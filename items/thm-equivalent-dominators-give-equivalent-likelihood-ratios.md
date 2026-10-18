---
id: thm-equivalent-dominators-give-equivalent-likelihood-ratios
kind: theorem
title: "Equivalent dominating measures give equivalent likelihood ratios"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-probability-measure
  - def-finite-sigma-finite-and-semifinite-measures
  - def-total-variation-of-a-signed-or-complex-measure
  - def-absolutely-continuous-with-respect-to-a-positive-measure
  - def-likelihood-density
  - lem-radon-nikodym-density-of-a-finite-positive-measure-has-a-nonnegative-representative
  - def-radon-nikodym-derivative
  - thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality
  - thm-chain-rule-for-radon-nikodym-derivatives
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Ryan Martin, Lecture Notes on Advanced Statistical Theory, §3.2, PDF pp. 54–55"
      url: "https://homepages.math.uic.edu/~rgmartin/Teaching/Stat511/Notes/511notes.pdf"
    - title: "Joshua M. Tebbs, STAT 512 Mathematical Statistics Lecture Notes, §9.3, PDF pp. 118–123"
      url: "https://people.stat.sc.edu/Tebbs/stat512/s24notes.pdf"
    - title: "Charles J. Geyer, Stat 5421 Lecture Notes: Exponential Families, §3, PDF pp. 3–5"
      url: "https://www.stat.umn.edu/geyer/5421/notes/expfam.pdf"
    - title: "John K. Hunter, Measure Theory, Theorem 6.27 and proof, §6.8 (notes pp. 75–77)"
      url: "https://metaphor.ethz.ch/x/2022/fs/401-4820-22L/notes/Mean-Field_Limits_in_Statistical_Dynamics_Golse.pdf"
---

## Statement

Assume AC. Let $\mu$ and $\nu$ be mutually absolutely continuous sigma-finite
positive measures on one measurable space, and let
$\mathcal E=((\mathcal X,\mathcal A),\Theta,(P_\theta)_{\theta\in\Theta})$
be dominated by both. Choose nonnegative density representatives
$p_\theta^\mu=dP_\theta/d\mu$, $p_\theta^\nu=dP_\theta/d\nu$, and
$h=d\nu/d\mu$. Then $h>0$ $\mu$-almost everywhere and, for each fixed
$\theta$,
$$p_\theta^\mu=h\,p_\theta^\nu\qquad\mu\text{-almost everywhere}.$$
Thus, for each fixed pair $\theta,\eta$, the ratios
$p_\theta^\mu/p_\eta^\mu$ and $p_\theta^\nu/p_\eta^\nu$ agree
$\mu$-almost everywhere wherever the denominator is positive. The factor
$h$ depends only on the two dominating measures. For an arbitrary uncountable
$\Theta$, no single exceptional null set valid for every pair is asserted;
the density versions are not pointwise canonical, and no ratio value is
specified at a zero denominator.

## Facts & Assumptions

**Given:** AC; mutually absolutely continuous sigma-finite positive measures
$\mu,\nu$; and an experiment whose probability laws satisfy
$P_\theta\ll\mu$ and $P_\theta\ll\nu$ for every $\theta$.

[F1] [[def-finite-sigma-finite-and-semifinite-measures]]: sigma-finiteness gives countable covers by measurable sets finite under the corresponding measure.

[A1] [[def-axiom-of-choice]]: AC says every family of nonempty sets has a choice function, permitting simultaneous selection of density representatives.

[F3] [[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]] and [[def-radon-nikodym-derivative]]: under AC and a common finite exhaustion, each derivative is a finite-valued measurable representative class satisfying the setwise integral formula.

[F4] [[lem-radon-nikodym-density-of-a-finite-positive-measure-has-a-nonnegative-representative]]: for sigma-finite positive measures with absolute continuity, the RN class has a finite-valued nonnegative representative.

[F5] [[thm-chain-rule-for-radon-nikodym-derivatives]]: if $\lambda,\rho$ are sigma-finite positive measures and $\sigma$ has a common finite exhaustion with them, with $\sigma\ll\rho\ll\lambda$, then $d\sigma/d\lambda=(d\sigma/d\rho)(d\rho/d\lambda)$ $\lambda$-almost everywhere.

[F6] [[def-absolutely-continuous-with-respect-to-a-positive-measure]]: $\mu\ll\nu$ means every $\nu$-null measurable set is $\mu$-null.

[F7] [[def-likelihood-density]]: for observed $x$, the likelihood under a chosen dominating measure is $L_x(\theta)=p_\theta(x)$, with each density specified only up to its own null set.

[F8] [[def-total-variation-of-a-signed-or-complex-measure]] and [[def-probability-measure]]: on a measurable set, total variation of a positive measure equals its measure; in particular $|P_\theta|(X_n)=P_\theta(X_n)\le1$.

## Proof

**Proof technique:** direct.

1.1 Choose increasing finite-measure covers $(A_i)$ for $\mu$ and $(B_j)$ for $\nu$ by [F1], and set $X_n=\bigcup_{i,j\le n}(A_i\cap B_j)$. Then $X_n\uparrow\mathcal X$, $\mu(X_n)<\infty$, and $\nu(X_n)<\infty$. Since $P_\theta$ is a probability measure, [F8] gives $|P_\theta|(X_n)\le1$. This is a common finite exhaustion for $\mu,\nu,P_\theta$, so the hypotheses in [F5] hold for every $\theta$, with $(\lambda,\rho,\sigma)=(\mu,\nu,P_\theta)$. [A1, F1, F5, F8, given, construct]

1.2 By [A1], [F3], and [F4], choose nonnegative representatives $h=d\nu/d\mu$ and $p_\theta^\mu,p_\theta^\nu$ for the stated classes. The measurable set $H=\{x:h(x)=0\}$ satisfies $\nu(H)=\int_Hh\,d\mu=0$ by [F3]; then $\mu(H)=0$ by [F6]. Hence $h>0$ $\mu$-almost everywhere. [A1, F3, F4, F6, given, choose]

2.1 Fix $\theta$. Applying [F5] on the common exhaustion from step 1.1 gives $p_\theta^\mu=h\,p_\theta^\nu$ $\mu$-almost everywhere. For a fixed pair $\theta,\eta$, remove the union of their two exceptional null sets and the null set $H$ from step 1.2. On the remaining set, both density identities hold and $h>0$, so division by the positive common factor gives $p_\theta^\mu/p_\eta^\mu=p_\theta^\nu/p_\eta^\nu$ wherever the denominators are positive. The exceptional set may depend on the pair, which proves the stated scope. [A1, F3, F5, F7, step 1.1, step 1.2, given, algebra] ∎
