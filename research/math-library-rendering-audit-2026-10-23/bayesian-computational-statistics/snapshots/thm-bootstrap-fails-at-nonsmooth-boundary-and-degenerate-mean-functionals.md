---
id: thm-bootstrap-fails-at-nonsmooth-boundary-and-degenerate-mean-functionals
kind: theorem
title: Ordinary bootstrap failure for nonsmooth and first-order-degenerate mean functionals
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - def-m-out-of-n-bootstrap-and-subsampling
  - def-identically-distributed-and-iid-random-variables
  - def-partial-sums-and-sample-means
  - def-cumulative-distribution-function-of-a-random-variable
  - def-weak-convergence-of-borel-probability-measures
  - def-axiom-of-choice
  - def-standard-normal-and-normal-laws
  - lem-normal-location-scale-mean-and-variance
  - lem-iid-normal-sample-mean-law
  - thm-first-and-second-order-delta-method-for-random-vectors
  - lem-pointwise-cdf-convergence-to-a-continuous-law-is-uniform
  - thm-conditional-iid-bootstrap-clt-for-empirical-law
  - thm-portmanteau-theorem
justified_by: []
proof_strategy: direct
axiom_use: "AC is stated explicitly and is required by the standard-normal law, the finite normal-sample-mean theorem, and the conditional empirical-bootstrap CLT. No additional choice is used in the interval or test-function arguments."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "P. J. Bickel, F. Götze, and W. R. van Zwet, Resampling Fewer Than n Observations: Gains, Losses, and Remedies for Losses, §2.3, Examples 5–6"
      url: "https://www3.stat.sinica.edu.tw/statistica/oldpdf/a7n11.pdf"
    - title: "Ryan Martin, Stat 451 Lecture Notes 0812: Bootstrap, pp. 15–17"
      url: "https://homepages.math.uic.edu/~rgmartin/Teaching/Stat451/Slides/451notes08.pdf"
---

## Statement

Assume AC. For each integer $n\ge1$, let $X_1,\ldots,X_n$ be IID $N(0,1)$ and let $\bar X_n=n^{-1}\sum_{i=1}^nX_i$. At $\mu=0$, which is the boundary value of the nonnegative ranges of $g_1(\mu)=|\mu|$ and $g_2(\mu)=\mu^2$, consider these two functionals. For the ordinary bootstrap, draw $X_1^*,\ldots,X_n^*$ conditionally IID from the empirical law and write $W_n^*=\sqrt n(\bar X_n^* -\bar X_n)$ with conditional CDF $G_n^*$. The conditional empirical-bootstrap CLT [[thm-conditional-iid-bootstrap-clt-for-empirical-law]], specialized to $d=1$, $a=1$, and $\sigma^2=1$, gives $G_n^*(x)\to\Phi(x)$ in probability for every fixed $x$, where $\Phi$ is the standard normal CDF. Here conditional weak consistency means that the conditional integral of every bounded continuous test function converges in probability to its sampling-law integral.

Then the ordinary bootstrap is inconsistent for both correctly centered roots
$$R_{n,1}=\sqrt n\,|\bar X_n|,\qquad R_{n,1}^*=\sqrt n\,(|\bar X_n^*|-|\bar X_n|),$$
and
$$R_{n,2}=n\bar X_n^2,\qquad R_{n,2}^*=n\bigl((\bar X_n^*)^2-\bar X_n^2\bigr).$$
In both cases the true root CDF is continuous at zero with value zero, whereas the conditional bootstrap root CDF at zero stays away from zero with positive probability. The first functional is nonsmooth at the boundary; the second has zero first derivative there, so its nondegenerate sampling root is on the second-order scale.

## Facts & Assumptions

**Given:** AC, an IID standard-normal sample, the ordinary empirical bootstrap, and the stated conditional CDF convergence assumption for its centered sample mean.

[A1] [[def-axiom-of-choice]]: Every family of nonempty sets has a choice function. This is the explicit axiom premise of the published normal-law and normal-sample-mean suppliers used here.

[F1] [[def-m-out-of-n-bootstrap-and-subsampling]]: The ordinary n-out-of-n bootstrap uses conditionally IID draws from the empirical law and centers the size-$n$ statistic at its observed value.

[F2] [[def-identically-distributed-and-iid-random-variables]]: IID means identical laws and mutual independence of the whole family.

[F3] [[def-partial-sums-and-sample-means]]: $\bar X_n=n^{-1}\sum_{i=1}^nX_i$.

[F4] [[def-standard-normal-and-normal-laws]], [[lem-normal-location-scale-mean-and-variance]], [[lem-iid-normal-sample-mean-law]]: Under AC, $N(0,1)$ has density $\phi(x)=(2\pi)^{-1/2}e^{-x^2/2}$, mean zero and variance one; the mean of $n$ IID $N(0,1)$ variables has law $N(0,1/n)$, so $Z_n:=\sqrt n\bar X_n$ has law $N(0,1)$ for every $n$.

[F5] [[thm-first-and-second-order-delta-method-for-random-vectors]]: If $r_n(T_n-\theta)\Rightarrow Z$ and $g$ has zero first derivative and a second-order expansion $g(\theta+h)-g(\theta)=\frac12H[h,h]+o(\|h\|^2)$, then $r_n^2(g(T_n)-g(\theta))\Rightarrow\frac12H[Z,Z]$; this theorem's first-order differentiability hypothesis does not apply to $g_1$ at zero.

[F6] [[thm-conditional-iid-bootstrap-clt-for-empirical-law]]: Under AC, IID $\mathbb R^d$ observations with finite second moment, and a fixed projection of positive variance, the finite-index empirical bootstrap mean centered at $\bar X_n$ and scaled by $\sqrt n$ has conditional CDF converging uniformly in probability to the matching normal CDF. For standard-normal data, $d=1$, $a=1$, and variance $1$ satisfy these hypotheses, giving the pointwise convergence used here.

[F7] [[lem-pointwise-cdf-convergence-to-a-continuous-law-is-uniform]]: Pointwise convergence in probability of CDFs to the continuous CDF $\Phi$ implies uniform convergence in probability.

[F8] [[def-weak-convergence-of-borel-probability-measures]]: Weak convergence of Borel laws requires convergence of integrals against every bounded continuous real test function.

[F9] [[thm-portmanteau-theorem]]: Weak convergence implies convergence of CDF values at every continuity point of the limiting CDF.

[F10] [[def-cumulative-distribution-function-of-a-random-variable]]: The CDF of a real root $R$ under a law $P$ is $x\mapsto P(R\le x)$; the bootstrap analogue uses its conditional law.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 By [F2], the data form an IID sequence, and [F3] identifies $\bar X_n$ as its arithmetic sample mean. By [F4], $Z_n=\sqrt n\bar X_n$ is standard normal for every $n$. For $g_2(\mu)=\mu^2$, the derivative at zero vanishes and the second derivative is $2$, so [F5] gives the second-order scale $R_{n,2}=Z_n^2\Rightarrow Z^2$; directly, its law is exactly that of $Z^2$ for every $n$. For $g_1(\mu)=|\mu|$, the first-order delta premise fails at zero, and directly $R_{n,1}=|Z_n|$ has the law of $|Z|$ for every $n$. For $t>0$, the density bound in [F4] gives $P(|Z|\le t)\le2t/\sqrt{2\pi}$ and $P(Z^2\le t)\le2\sqrt t/\sqrt{2\pi}$; for $t<0$ both probabilities are zero. Therefore both true-root CDFs are continuous at zero and equal zero there. Their constant-law sequences converge weakly by [F8], and [F9] gives the same CDF limit at this continuity point. [A1, F2, F3, F4, F5, F8, F9, algebra]

1.2 By [F1], the bootstrap draws are conditionally IID from the empirical law and $W_n^*$ is the centered, $\sqrt n$-scaled empirical-bootstrap mean. By [F10], $G_n^*$ is the CDF of this conditional root law. The specialized supplier fact [F6] and the local CDF lemma [F7] give $\Delta_n:=\sup_x|G_n^*(x)-\Phi(x)|\to0$ in probability. For a realized value $z=Z_n$, the event $R_{n,1}^*\le0$ is $|z+W_n^*|\le|z|$, and the event $R_{n,2}^*\le0$ is $(z+W_n^*)^2\le z^2$; both are the same interval event, with $W_n^*\in[-2z,0]$ if $z\ge0$ and $W_n^*\in[0,-2z]$ if $z<0$. A uniform CDF error $\Delta_n$ also bounds the error at left limits, since $\Phi$ is continuous. Thus each conditional probability differs by at most $2\Delta_n$ from its standard-normal value $\Phi(2|Z_n|)-\frac12$. [F1, F6, F7, F10, given, algebra]

2.1 Put $b:=\Phi(2)-\frac12>0$ and $c=b/2$. On $A_n:=\{|Z_n|\ge1\}$, whose probability is the fixed positive number $P(|Z|\ge1)$ by [F4], the normal interval probability in step 1.2 is at least $b$. On the additional event $\Delta_n\le b/4$, both conditional root CDFs at zero are therefore at least $c$. The true roots have the laws of $|Z|$ and $Z^2$ for every $n$ by [F4]. Their atom at zero is zero, and the standard-normal density is bounded by $(2\pi)^{-1/2}$, so for every $d>0$, $\mathbb E[h_d(|Z|)]\le P(|Z|<d)\le2d/\sqrt{2\pi}$ and $\mathbb E[h_d(Z^2)]\le P(|Z|<\sqrt d)\le2\sqrt d/\sqrt{2\pi}$, where $h_d(t)=1$ for $t\le0$, $h_d(t)=1-t/d$ for $0<t<d$, and $h_d(t)=0$ for $t\ge d$. Choose $d$ so both expectations are below $c/2$. For either bootstrap root, $\mathbb E^*[h_d(R_{n,j}^*)]\ge P^*(R_{n,j}^*\le0)\ge c$ on that event, while its true test integral is below $c/2$. The event has probability at least $P(|Z|\ge1)-P(\Delta_n>b/4)$, whose limit is positive. Thus the conditional integral of a bounded continuous test function fails to converge in probability to the true integral, contradicting conditional weak consistency. [F4, F7, F8, given, step 1.2, algebra] ∎
