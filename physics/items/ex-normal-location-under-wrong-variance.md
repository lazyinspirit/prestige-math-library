---
id: ex-normal-location-under-wrong-variance
kind: example
title: "Normal location fitted under the wrong variance"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 6
deps:
  - def-pseudo-true-parameter-under-misspecification
  - thm-m-estimator-sandwich-limit-under-misspecification
  - def-identically-distributed-and-iid-random-variables
  - def-standard-normal-and-normal-laws
  - def-axiom-of-choice
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-moments-variance-and-covariance
  - def-convergence-in-probability
  - cor-markov-inequality-for-random-variables
  - thm-factorization-of-expectations-for-independent-variables
  - thm-linearity-of-the-lebesgue-integral-on-l-one
justified_by: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Yen-Chi Chen, UW STAT 581 Chapter 3: M-estimation and the maximum likelihood estimator"
      url: "https://faculty.washington.edu/yenchic/26A_stat581/Lec3_Mest.html"
    - title: "Aad W. van der Vaart, Semiparametric Statistics, extended St Flour lecture notes, Lecture 6 §6.5"
      url: "https://sites.stat.washington.edu/jaw/COURSES/EPWG/stflour.pdf"
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Fix $\tau>0$ with $\tau^2\ne1$. Let the data law be $P=N(0,\tau^2)$, but fit the location model $p_\theta=N(\theta,1)$ over $\Theta=[-1,1]$. Since every fitted law has variance $1$ while $P$ has variance $\tau^2\ne1$, $P$ differs from every fitted law. The pseudo-true parameter is $0$, and the MLE is asymptotically normal with variance $\tau^2$; the fitted model's score second moment at $0$ is $1$.

## Facts & Assumptions

**Given:** The data law and fitted model in the Example.

[A1] AC is assumed for the scalar normal-law convention and the theorem's multivariate central limit step ([[def-axiom-of-choice]]).

[F1] The pseudo-true parameter maximizes the actual-data expected log-likelihood ([[def-pseudo-true-parameter-under-misspecification]]).

[F2] The normal law $N(m,\sigma^2)$ is the affine image of $N(0,1)$, whose density is $\phi(z)=(2\pi)^{-1/2}e^{-z^2/2}$ ([[def-standard-normal-and-normal-laws]]).

[F3] IID means mutually independent observations with one common law ([[def-identically-distributed-and-iid-random-variables]]).

[F4] The misspecified sandwich theorem applies under a separated interior population optimum, uniform criterion and Hessian laws, finite score second moment, and an approximate score root ([[thm-m-estimator-sandwich-limit-under-misspecification]]).

[F5] For a nonnegative random variable $Y$ and $a>0$, $P(Y\ge a)\le E[Y]/a$ ([[cor-markov-inequality-for-random-variables]]).

[F6] Expectation and variance are the integrals and centered second moments under the indicated probability law ([[def-expectation-of-a-nonnegative-or-integrable-random-variable]], [[def-moments-variance-and-covariance]]).

[F7] $Y_n\to_P y$ means $P(|Y_n-y|>\varepsilon)\to0$ for every $\varepsilon>0$ ([[def-convergence-in-probability]]).

[F8] Expectations of products of independent integrable variables factor ([[thm-factorization-of-expectations-for-independent-variables]]).

[F9] [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: integrable real functions and their finite linear combinations are integrable, and their integrals are linear; by [F6], this applies to expectation under $P$.

## Verification

**Given:** $X_i$ iid $N(0,\tau^2)$ with $\tau^2>0$, $\tau^2\ne1$, and the fitted family $p_\theta=N(\theta,1)$ for $\theta\in[-1,1]$.

1.1 Let $Z\sim N(0,1)$, so $X\overset{d}=\tau Z$. Direct integration gives $E|Z|=2(2\pi)^{-1/2}\int_0^\infty z e^{-z^2/2}dz=\sqrt{2/\pi}<\infty$, so symmetry gives $E Z=0$. Since $\phi'(z)=-z\phi(z)$ and $z^k\phi(z)\to0$ at both tails, integration by parts gives $E Z^2=\int z^2\phi(z)dz=1$ and $E Z^4=\int z^4\phi(z)dz=3\int z^2\phi(z)dz=3$. Hence $E_PX=0$, $E_PX^2=\tau^2$, and $E_PX^4=3\tau^4$. The fitted log-density is $\ell_\theta(x)=-\tfrac12\log(2\pi)-\tfrac12(x-\theta)^2$. The functions $1$, $X$, and $X^2$ are integrable by the finite absolute first and second moments just established. Thus the expanded log-density is a finite linear combination of integrable functions, and [F9] gives $E_P(X-\theta)^2=E_PX^2-2\theta E_PX+\theta^2$. Therefore $M(\theta)=E_P\ell_\theta(X)=-\tfrac12\log(2\pi)-\tfrac12(\tau^2+\theta^2)$, so $\theta^*=0$ is the unique separated maximizer, and $H=E_P\partial_\theta S_{\theta^*}(X)=-1$. [A1, F1, F2, F6, F9, given, algebra]

2.1 The uniform criterion error is bounded by $\sup_{\theta\in[-1,1]}|P_n\ell_\theta-M(\theta)|\le\tfrac12|P_nX^2-\tau^2|+|P_nX|$. Put $Y_i=X_i$ and $W_i=X_i^2-\tau^2$. All terms of the following single-variable expansions are integrable by the finite first, second, and fourth moments in step 1.1. Linearity [F9] therefore gives $\mathbb E_PY_i=\mathbb E_PW_i=0$, $\mathbb E_PY_i^2=\tau^2$, and $\mathbb E_PW_i^2=3\tau^4-2\tau^2\mathbb E_PX_i^2+\tau^4=2\tau^4$. Moreover $\mathbb E_P|Y_i|=\tau\mathbb E|Z|<\infty$ and $\mathbb E_P|W_i|\le\mathbb E_PX_i^2+\tau^2=2\tau^2$, so [F8] applies to these variables. By independence and [F8], all cross expectations $\mathbb E_P[Y_iY_j]$ and $\mathbb E_P[W_iW_j]$ vanish for $i\ne j$. For either centered family $V_i=Y_i$ or $V_i=W_i$, $|V_iV_j|\le(V_i^2+V_j^2)/2$ makes every mixed product integrable. Thus [F9] permits termwise expectation of each finite square expansion and gives $\mathbb E_P[(P_nX)^2]=\tau^2/n$ and $\mathbb E_P[(P_nX^2-\tau^2)^2]=2\tau^4/n$. Applying [F5] to these squared deviations gives $P_nX\to_P0$ and $P_nX^2\to_P\tau^2$ by [F7], proving the required uniform law. [F3, F5, F6, F7, F8, F9, given, step 1.1, algebra]

3.1 The exact constrained MLE is $\hat\theta_n=\Pi_{[-1,1]}(\bar X_n)$, the projection of the sample mean onto $[-1,1]$. step 2.1 and [F7] give $\bar X_n\to_P0$, hence $\hat\theta_n\to_P0$ and the separated-criterion consistency condition holds. On $\{|\bar X_n|\le1\}$ the score equation is exact: $P_nS_{\hat\theta_n}=\bar X_n-\hat\theta_n=0$. The complementary event has probability tending to zero, so $\sqrt nP_nS_{\hat\theta_n}\to_P0$. The score is $S_\theta(x)=x-\theta$, its second moment at $\theta^*=0$ under $P$ is $J=\tau^2$, and the sample Hessian is identically $-1$, so the Hessian law holds with $H=-1$. [F3, F4, F7, step 2.1, given, algebra]

4.1 All hypotheses of [F4] now hold. It gives $\sqrt n\hat\theta_n\Rightarrow N(0,H^{-1}JH^{-T})=N(0,\tau^2)$. The fitted model's score second moment at $\theta=0$ is $E_{N(0,1)}[(X-0)^2]=1$, so the sandwich variance $\tau^2$ differs from the inverse fitted-model information $1$ because $\tau^2\ne1$. [A1, F2, F4, step 1.1, step 2.1, step 3.1, algebra] ∎
