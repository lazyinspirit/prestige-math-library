---
id: thm-independent-groups-terminal-influence-limit
kind: theorem
title: Independent-group terminal influence limit
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps:
  - def-identically-distributed-and-iid-random-variables
  - def-independent-families-of-event-classes
  - def-covariance-matrix-of-a-random-vector
  - def-characteristic-function-of-a-real-random-variable
  - def-multivariate-normal-law
  - def-op-and-little-op-stochastic-bounds
  - thm-multivariate-iid-central-limit-theorem
  - thm-vector-slutsky
  - thm-continuous-mapping-theorem
  - thm-levy-continuity-theorem-forward-direction
  - lem-characteristic-functions-under-affine-maps-and-independent-sums
  - lem-characteristic-function-of-a-normal-law
  - cor-characteristic-function-criterion-for-weak-convergence
  - thm-cramer-wold-device
  - def-axiom-of-choice
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Sourav Chatterjee, Stats 310A (Math 230A) Lecture Notes, §§8.5.3, 8.8–8.9, PDF pp. 101–104"
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

Assume the Axiom of Choice. Fix a finite $G\ge2$ and $d\ge1$. For each total sample size $n$, let $n_1,\ldots,n_G$ be positive deterministic integers with $\sum_{g=1}^G n_g=n$, and suppose $n_g/n\to\rho_g\in(0,1)$ with $\sum_{g=1}^G\rho_g=1$. For group $g$, let $O_{g1},O_{g2},\ldots$ be IID with law $P_g$ on a measurable space; assume the subject families in distinct groups are independent. Let $\phi_g$ be measurable with $E_{P_g}\phi_g=0$, $E_{P_g}\|\phi_g\|_2^2<\infty$, and $\Sigma_g=E_{P_g}[\phi_g\phi_g^T]$. If a measurable estimator of fixed $\theta\in\mathbb R^d$ has the separately established expansion, with remainder on the same sample probability space as its group sums,

$$\sqrt n(\hat\theta_n-\theta)=\sum_{g=1}^G\sqrt{\frac n{n_g}}\frac1{\sqrt{n_g}}\sum_{i=1}^{n_g}\phi_g(O_{gi})+R_n,\qquad R_n=o_P(1),$$

then

$$\sqrt n(\hat\theta_n-\theta)\Rightarrow N_d\!\left(0,\sum_{g=1}^G\rho_g^{-1}\Sigma_g\right).$$

The group count $G$ is fixed; the laws $P_g$ may differ. The covariance may be singular. This is a terminal finite-dimensional result: it neither proves the estimator expansion nor supplies a continuous-time or functional martingale CLT.

## Facts & Assumptions

**Given:** Assume AC, fixed finite $G\ge2$ and $d\ge1$, deterministic sample sizes with $n=\sum_g n_g$ and $n_g/n\to\rho_g\in(0,1)$, independent subject families, centered square-integrable measurable $\phi_g$ with covariance $\Sigma_g$, and the displayed estimator expansion with $R_n=o_P(1)$. Prove the displayed limit.

[A1] [[def-axiom-of-choice]]: Assume the Axiom of Choice (AC).

[F1] [[def-identically-distributed-and-iid-random-variables]]: Within each group, IID means a common law and mutual independence of the whole family.

[F2] [[def-independent-families-of-event-classes]]: For every finite selection of distinct independent indices and one event from each selected class, the probability of their intersection is the product of their probabilities.

[F3] [[def-covariance-matrix-of-a-random-vector]]: For a finite-dimensional square-integrable vector $X$ with mean $\mu$, $\operatorname{Cov}(X)=E[(X-\mu)(X-\mu)^T]$ and is positive semidefinite.

[F4] [[thm-multivariate-iid-central-limit-theorem]]: Under AC, IID centered $\mathbb R^d$ vectors with finite second moment and covariance $\Sigma$ have normalized sums converging to $N_d(0,\Sigma)$, including singular $\Sigma$.

[F5] [[thm-vector-slutsky]]: If $X_n\Rightarrow X$ and $Y_n\to_P c$, then every continuous function of $(X_n,Y_n)$ converges in distribution to the same function of $(X,c)$.

[F6] [[thm-continuous-mapping-theorem]]: A continuous map sends a weakly convergent random vector to the corresponding weak limit.

[F7] [[def-characteristic-function-of-a-real-random-variable]]: The characteristic function is $t\mapsto E[e^{itX}]$.

[F8] [[thm-levy-continuity-theorem-forward-direction]]: Weak convergence of real laws implies pointwise convergence of their characteristic functions.

[F9] [[lem-characteristic-functions-under-affine-maps-and-independent-sums]]: For a finite mutually independent family of real random variables, the characteristic function of its sum is the product of the individual characteristic functions.

[F10] [[lem-characteristic-function-of-a-normal-law]]: A centered real normal law of variance $v\ge0$ has characteristic function $t\mapsto e^{-vt^2/2}$, including $v=0$.

[F11] [[cor-characteristic-function-criterion-for-weak-convergence]]: Under AC, pointwise convergence of characteristic functions to that of a specified real probability law implies weak convergence to that law.

[F12] [[def-multivariate-normal-law]]: Under AC, $N_d(0,V)$ exists for every positive semidefinite $V$ and each projection $u^TX$ is normal with variance $u^TVu$.

[F13] [[thm-cramer-wold-device]]: Under AC, convergence of every scalar projection to the projections of a specified finite-dimensional law implies vector weak convergence to that law.

[F14] [[def-op-and-little-op-stochastic-bounds]]: For vectors, $R_n=o_P(1)$ means $P(\|R_n\|_2>\varepsilon)\to0$ for every $\varepsilon>0$.

## Proof

1.1 For each group, measurable preimages show that $\phi_g(O_{gi})$ are IID; [F2] applied to preimages of finite event selections also shows independence across groups. Their means and covariances are $0$ and $\Sigma_g$ by assumption and [F3]. Since $\rho_g>0$ and $n\to\infty$, $n_g\to\infty$. Applying [F4] to each of the finitely many groups gives $U_{g,n}:=n_g^{-1/2}\sum_{i=1}^{n_g}\phi_g(O_{gi})\Rightarrow Z_g\sim N_d(0,\Sigma_g)$. [A1, F1, F2, F3, F4, given]

2.1 Put $a_{g,n}=\sqrt{n/n_g}$, so $a_{g,n}\to\rho_g^{-1/2}$. Applying [F5] to the continuous map $(x,a)\mapsto ax$ gives $a_{g,n}U_{g,n}\Rightarrow\rho_g^{-1/2}Z_g$. For any fixed $u\in\mathbb R^d$, [F6] gives convergence of the projections; by [F12], $u^TZ_g$ is normal, and the affine characteristic-function identity [F9] with [F10] identifies its scaled law as $N(0,\rho_g^{-1}u^T\Sigma_gu)$, including zero projected variance. [A1, F5, F6, F9, F10, F12, given, step 1.1]

3.1 Let $V=\sum_g\rho_g^{-1}\Sigma_g$. By [F3], $u^TVu=\sum_g\rho_g^{-1}u^T\Sigma_gu\ge0$ for every $u$, so $V$ is positive semidefinite; under [A1], [F12] supplies $Z\sim N_d(0,V)$. Set $W_n=\sum_g a_{g,n}U_{g,n}$. Fix $u\in\mathbb R^d$ and any frequency $t\in\mathbb R$. The scalar terms $u^Ta_{g,n}U_{g,n}$ are independent across $g$ by [F2]. By the characteristic-function definition [F7], weak-convergence continuity [F8], independent-sum product identity [F9], and normal formula [F10], step 2.1 gives pointwise convergence of the characteristic function of $u^TW_n$ to $\prod_{g=1}^G\exp(-t^2u^T\Sigma_gu/(2\rho_g))=\exp(-t^2u^TVu/2)$. This is the characteristic function of $u^TZ$ by [F12] and [F10]. The criterion [F11] gives $u^TW_n\Rightarrow u^TZ$. [A1, F2, F3, F7, F8, F9, F10, F11, F12, step 2.1]

4.1 Since step 3.1 holds for every $u\in\mathbb R^d$ and the specified target is $Z$, [F13] gives $W_n\Rightarrow Z\sim N_d(0,V)$. [A1, F13, step 3.1]

5.1 The expansion in the statement is $W_n+R_n$. By [F14], $R_n=o_P(1)$ is convergence in probability to the zero vector. Apply [F5] with the continuous addition map to step 4.1 to obtain the claimed estimator limit. This proof derives the group-sum limit but does not establish any consumer's expansion. [F5, F14, step 4.1] ∎
