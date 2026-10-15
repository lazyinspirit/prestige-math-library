---
id: thm-iid-terminal-influence-limit
kind: theorem
title: IID terminal influence limit from a separately established expansion
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps:
  - def-asymptotically-linear-estimator-and-influence-function
  - def-identically-distributed-and-iid-random-variables
  - def-independent-families-of-event-classes
  - def-covariance-matrix-of-a-random-vector
  - def-op-and-little-op-stochastic-bounds
  - thm-multivariate-iid-central-limit-theorem
  - thm-vector-slutsky
  - def-axiom-of-choice
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Sourav Chatterjee, Stats 310A (Math 230A) Lecture Notes, §§8.5.3, 8.8–8.9, PDF pp. 104–107 / printed pp. 100–103"
      url: "https://souravchatterjee.su.domains/stat310a-lecture-notes.pdf"
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., §3.10, Theorems 3.10.5–3.10.7, printed pp. 200–201"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
    - title: "Peter Bartlett, Theoretical Statistics, Stat 210B Lecture 16, PDF pp. 9–12"
      url: "https://www.stat.berkeley.edu/~bartlett/courses/2013spring-stat210b/notes/16notes.pdf"
proof_strategy: direct
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $d\ge1$, let $(\mathcal O,\mathcal A,P)$ be a probability space, and let $O_1,O_2,\ldots$ be IID with law $P$. Let $\hat\theta_n$ be a measurable $\mathbb R^d$-valued estimator based on $O_1,\ldots,O_n$ for a fixed $\theta\in\mathbb R^d$. Suppose $\phi:\mathcal O\to\mathbb R^d$ is measurable, $E_P\phi=0$, and $E_P\|\phi\|_2^2<\infty$, and set $\Sigma=E_P[\phi\phi^T]$. Assume the separately established expansion, with remainder $r_n$ on the sample probability space,

$$\hat\theta_n-\theta=\frac1n\sum_{i=1}^n\phi(O_i)+r_n,\qquad r_n=o_P(n^{-1/2}),$$

Then

$$\sqrt n(\hat\theta_n-\theta)\Rightarrow N_d(0,\Sigma).$$

The remainder notation means $\sqrt n\,r_n\to_P0$, as in [[def-asymptotically-linear-estimator-and-influence-function]]. Thus $\phi$ is the estimator influence function in the asymptotically linear sense: the theorem assumes the expansion and does not establish it. The covariance may be singular, including zero.

## Facts & Assumptions

**Given:** Assume AC. The subjects $O_i$ are IID with law $P$; the measurable influence function $\phi$ is centered and square-integrable; $\Sigma=E_P[\phi\phi^T]$; and the estimator has the displayed expansion with $\sqrt n\,r_n\to_P0$. Prove the displayed distributional limit.

[A1] [[def-axiom-of-choice]]: Assume the Axiom of Choice (AC).

[F1] [[def-identically-distributed-and-iid-random-variables]]: IID means a common law and mutual independence of the whole family.

[F2] [[def-independent-families-of-event-classes]]: Independence means that for every finite selection of distinct indices and one event from each selected class, the probability of their intersection is the product of their probabilities.

[F3] [[def-asymptotically-linear-estimator-and-influence-function]]: For an IID sample, an asymptotically linear estimator has expansion $\hat\psi_n-\psi(P)=(P_n-P)\phi+o_P(n^{-1/2})$, with a mean-zero square-integrable influence function; this definition alone does not assert asymptotic normality.

[F4] [[def-covariance-matrix-of-a-random-vector]]: For a finite-dimensional square-integrable vector $X$ with mean $\mu$, $\operatorname{Cov}(X)=E[(X-\mu)(X-\mu)^T]$.

[F5] [[thm-multivariate-iid-central-limit-theorem]]: Under AC, IID centered $\mathbb R^d$ vectors with finite second moment and covariance $\Sigma$ have normalized sums converging to $N_d(0,\Sigma)$; $\Sigma$ may be singular.

[F6] [[def-op-and-little-op-stochastic-bounds]]: For vectors, $R_n=o_P(1)$ means $P(\|R_n\|_2>\varepsilon)\to0$ for every $\varepsilon>0$.

[F7] [[thm-vector-slutsky]]: If $X_n\Rightarrow X$ and $Y_n\to_P c$, then every continuous function of $(X_n,Y_n)$ converges in distribution to the same function of $(X,c)$.

## Proof

1.1 For each Borel set $B\subseteq\mathbb R^d$, $\phi^{-1}(B)\in\mathcal A$. The common law of the $O_i$ gives a common image law, and [F2] applied to finitely many preimage events gives independence of the images. Thus $\phi(O_1),\phi(O_2),\ldots$ are IID. [F1, F2, given]

2.1 The vectors in step 1.1 have mean zero and covariance $\Sigma$ by the assumptions and [F4]. Thus [F5] gives $S_n:=n^{-1/2}\sum_{i=1}^n\phi(O_i)\Rightarrow N_d(0,\Sigma)$. [A1, F4, F5, step 1.1]

3.1 The assumed expansion gives $\sqrt n(\hat\theta_n-\theta)=S_n+\sqrt n\,r_n$, and the asymptotically linear convention [F3] makes its scaled remainder tend to zero in probability; [F6] identifies this as $o_P(1)$. Apply [F7] with $h(x,y)=x+y$ and $c=0$ to step 2.1. This proves the asserted limit, without deriving the influence expansion. [F3, F6, F7, step 2.1] ∎
