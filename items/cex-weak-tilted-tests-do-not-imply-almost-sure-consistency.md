---
dependency_level: 4
id: cex-weak-tilted-tests-do-not-imply-almost-sure-consistency
kind: counterexample
title: Weak tests against likelihood tilts do not ensure almost-sure posterior consistency
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - def-axiom-of-choice
  - def-kl-projection-set-and-relative-kl-neighborhoods
  - def-likelihood-tilted-measure-at-kl-projection
  - lem-likelihood-tilted-measure-is-sigma-finite
  - lem-product-likelihood-tilt-has-product-density
  - lem-centered-integrable-iid-random-walk-is-unbounded-above
  - cor-chebyshev-inequality-for-random-variables
  - cor-first-borel-cantelli-lemma-for-events
  - thm-finite-union-bound
proof_strategy: direct
axiom_use: AC is inherited only through the KL and likelihood-density conventions. Every density is supplied explicitly and each deterministic hitting-time quantile is chosen as the least admissible integer.
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: counterexample
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: Kleijn and van der Vaart, The Bernstein-Von-Mises theorem under misspecification, Lemma 3.3 and Corollaries 4.1–4.2 (claims examined here)
      url: https://pure.uva.nl/ws/files/1850322/114737_376240.pdf
    - title: "Durrett, Probability: Theory and Examples, fifth edition, random walks and zero-one laws"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
justified_by: []
---

## Statement refuted

In a dominated IID model with a finite KL minimum, a nonempty KL-minimizer
set $\Theta^*$, and positive prior mass in every relative KL neighborhood,
suppose that for every $\eta>0$ there are measurable tests satisfying
$$P_0^n\phi_n\to0,\qquad\sup_{\theta:d(\theta,\Theta^*)>\eta}Q_\theta^n(1-\phi_n)\to0.$$
The false assertion is that these conditions, allowing arbitrary
sigma-finite likelihood tilts, imply almost-sure posterior concentration
on every neighborhood of $\Theta^*$. The example below has a unique
minimizer and finite log likelihood contrasts, but posterior mass outside
each discrete neighborhood of radius less than one has almost-sure
limes superior one.

## Facts & Assumptions

**Given:** The explicitly supplied countable model and IID observations constructed below. All logarithms are natural.

[A1] [[def-axiom-of-choice]] is assumed for the imported KL convention; all densities are supplied and no additional selections are used.

[F1] [[def-kl-projection-set-and-relative-kl-neighborhoods]] defines the directional KL contrast, its minimizer set, and relative KL neighborhoods.

[F2] [[def-likelihood-tilted-measure-at-kl-projection]], [[lem-likelihood-tilted-measure-is-sigma-finite]], and [[lem-product-likelihood-tilt-has-product-density]] give the sigma-finite tilt with density $p_\theta/p_*$ and its product density.

[F3] [[lem-centered-integrable-iid-random-walk-is-unbounded-above]]: IID integrable, nonconstant, mean-zero increments have partial sums unbounded above almost surely.

[F4] [[cor-chebyshev-inequality-for-random-variables]] bounds a centered finite-variance variable's deviation probability by its variance divided by the squared threshold.

[F5] [[cor-first-borel-cantelli-lemma-for-events]]: summable event probabilities imply only finitely many occurrences almost surely.

[F6] [[thm-finite-union-bound]] bounds the probability of at least one of finitely many events by the sum of their probabilities.

## Counterexample

**Given:** The hypotheses and notation just stated.

1.1 Let $c>0$ normalize the density $f(y)=c/[y^2(\log y)^2]$ on $[e,\infty)$. Its normalizing integral is finite and positive, and $\mu:=E_0Y=c\int_e^\infty[y(\log y)^2]^{-1}dy=c<\infty$. For IID $Y_i$ with this density put $X_i=Y_i-\mu$ and $S_n=\sum_{i=1}^nX_i$. These increments are integrable, nonconstant and centered. [given, construct, algebra]

2.1 For $b\ge e$, direct integration gives $E_0[Y1_{\{Y>b\}}]=c/\log b$ and $P_0(Y>b)\le c/[b(\log b)^2]$. Moreover $E_0[Y^21_{\{Y\le b\}}]=c\int_e^b(\log y)^{-2}dy=O(b/(\log b)^2)$: split the integral at $\sqrt b$, bound the first part by $\sqrt b$, and the second by $4b/(\log b)^2$. Put $b_n=n/(\log n)^{3/2}$ for all sufficiently large $n$. By [F6], the probability that any of the first $n$ observations exceeds $b_n$ is $O((\log n)^{-1/2})\to0$. The variance of $\sum_{i=1}^nY_i1_{\{Y_i\le b_n\}}$ is at most $O(nb_n/(\log b_n)^2)$ by independence. Dividing this bound by $(n/\log n)^2$ gives $O(b_n/n)\to0$. Chebyshev [F4] therefore shows $S_n/(n/\log n)=-c\log n/\log b_n+o_{P_0}(1)\to-c$. Define $a_n=cn/(2\log n)$ and $\phi_n=1_{\{S_n>-a_n\}}$ for $n\ge3$, with arbitrary tests for $n<3$. It follows that $P_0^n\phi_n\to0$. [F4, F6, step 1.1, construct, algebra]

2.2 By [F3], the hitting times $T_j=\inf\{n\ge1:S_n\ge j\}$ are finite almost surely for every positive integer $j$. Define recursively $N_0=0$ and let $N_j$ be the least integer at least $\max(j,N_{j-1}+1)$ with $P_0(T_j>N_j)\le2^{-j}$. Such an integer exists since $T_j<\infty$ almost surely. Put $\epsilon_j=N_j^{-1}$. Thus $\epsilon_j>0$ and $\epsilon_j\to0$; these constants depend only on the true law, not the realized observations. By [F5], $T_j\le N_j$ eventually almost surely. Also $T_j\to\infty$ almost surely, since finitely many finite partial sums cannot exceed arbitrarily large levels. [F3, F5, step 1.1, construct]

3.1 Take sample space $\mathsf X=[e,\infty)\sqcup\{z\}$ with its disjoint-union Borel sigma-algebra and dominating measure equal to Lebesgue measure plus $\delta_z$. Set $p_0(y)=f(y)$ and $p_0(z)=0$. On the continuous part supply $p_*(y)=f(y)e^{-2y}$ and $p_j(y)=f(y)e^{-y-\mu-\epsilon_j}$; give each density its remaining mass at $z$. Both continuous masses are strictly between zero and one, so these atom masses are positive, and every density is finite and normalized. Take $\Theta=\{*\}\sqcup\{1,2,\ldots\}$ with the discrete metric and its Borel sigma-algebra; the supplied density family is jointly measurable. By [F1], $K(*)=2\mu<\infty$ and $K(j)=E_0(Y+\mu+\epsilon_j)=2\mu+\epsilon_j$, so $\Theta^*=\{*\}$. All relevant log ratios are integrable because $E_0Y<\infty$. [A1, F1, step 1.1, step 2.2, construct, algebra]

4.1 On the $P_0$-support, the tilt at $j$ has density $r_j(y)=e^{y-\mu-\epsilon_j}=e^{X-\epsilon_j}$. Its total mass is infinite, since $\int_e^\infty e^y f(y)dy=\infty$, but the finite pointwise density makes it sigma-finite by [F2]. Its product density is $e^{S_n-n\epsilon_j}$. On $\{\phi_n=0\}$ this is at most $e^{-a_n}$, uniformly in $j$, and hence $\sup_jQ_j^n(1-\phi_n)\le e^{-a_n}\to0$. For $0<\eta<1$, the set at distance greater than $\eta$ from $\Theta^*$ is precisely $\{1,2,\ldots\}$, so these same tests satisfy both required weak errors. For $\eta\ge1$ that set is empty and the type-II requirement is vacuous. [F2, step 2.1, step 3.1, algebra]

5.1 Put $r=e^{-1/4}$ and give the model prior $\pi_*=1/2$, $\pi_j=(1-r)r^{j-1}/2$. These masses sum to one. Every relative KL neighborhood has mass at least $1/2$ because it contains $*$. On any observed continuous sample, divide the prior-weighted likelihood by $\prod_i p_*(Y_i)$ to obtain the alternative numerator $A_n=e^{S_n}\sum_{j\ge1}\pi_je^{-n\epsilon_j}$. It is finite, being at most $e^{S_n}/2$, and the total relative evidence is $1/2+A_n>0$. Thus the posterior mass of the alternatives is $A_n/(1/2+A_n)$. [F1, step 3.1, step 4.1, construct, algebra]

6.1 Almost surely, for every sufficiently large $j$, step 2.2 gives $T_j\epsilon_j\le1$ and $S_{T_j}\ge j$. Consequently $A_{T_j}\ge e^{j-1}\pi_j=(1-r)e^{j-1}r^{j-1}/2\to\infty$. Since $T_j\to\infty$, the posterior mass outside every discrete neighborhood of radius less than one has limes superior one almost surely. This contradicts the claimed a.s. consistency although both test errors in the refuted statement tend to zero. [step 2.2, step 5.1, algebra] ∎

## Remarks

The test statistics converge to zero only in probability: the unbounded positive excursions of $S_n$ make $\phi_n=1$ infinitely often almost surely. Thus this counterexample does not satisfy an a.s.-vanishing type-I premise. It does not refute a posterior conclusion formulated only in probability. It specifically refutes the original unrestricted weak-test to almost-sure implication and its proposed exponential-test amplification.
