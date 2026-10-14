---
id: ex-sparse-gaussian-sequence-fano-lower-bound
kind: example
title: "A sparse Gaussian sequence lower bound by Fano’s method"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 6
deps:
  - def-axiom-of-choice
  - def-loss-function-and-risk
  - def-multivariate-normal-law
  - def-natural-logarithm
  - def-integral-logarithm
  - cor-integral-logarithm-agrees-with-natural-logarithm
  - def-real-exponential-function-and-e
  - def-randomized-procedure-as-a-markov-kernel
  - def-standard-normal-and-normal-laws
  - lem-gaussian-location-kl-formula
  - lem-sparse-hamming-packing
  - thm-fano-packing
  - thm-pinsker
  - thm-natural-logarithm-laws
  - thm-product-kl-additivity
  - thm-two-point-le-cam-risk-bound
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, Chapter 4, §4.5, sparse Varshamov–Gilbert Lemma 4.14 and Gaussian sequence application"
      url: "https://arxiv.org/pdf/2310.19244v1"
    - title: "John Duchi, Lecture Notes on Statistics and Information Theory, Chapter 8, §§8.2.3, 8.4 and 8.7"
      url: "https://stanford.edu/class/stats311/lecture-notes.pdf"
---

## Example

Assume AC. Let $d,n\ge1$, $\sigma>0$, and $1\le k\le d/2$ be integers. Observe
$Y\in\mathbb R^d$ with independent coordinates
$Y_j\sim N(\mu_j,\sigma^2/n)$, and estimate $\mu$ under squared Euclidean
loss over
$$\Theta_{k,d}=\{\mu\in\mathbb R^d:\#\{j:\mu_j\ne0\}\le k\}.$$
For a randomized kernel $K$ to $\mathbb R^d$, set
$$R_\mu(K)=\int_{\mathbb R^d}\int_{\mathbb R^d} \|a-\mu\|_2^2K(y,da)P_\mu(dy),$$
and define the minimax value here as $\inf_K\sup_{\mu\in\Theta_{k,d}}R_\mu(K)$.
There is a universal lower bound
$$\inf_K\sup_{\mu\in\Theta_{k,d}}R_\mu(K) \ge\frac{\sigma^2}{200000n}\,k\log\!\left(\frac{ed}{k}\right),$$
where $K$ ranges over randomized estimators. The range $1\le k\le d/2$
uses the local packing lemma proved on the A page.

## Facts & Assumptions

**Given:** AC, the sparse Gaussian sequence family, the stated range of $k,d$, and an arbitrary randomized estimator $K$ with values in $\mathbb R^d$.

[F1] [[def-standard-normal-and-normal-laws]] and [[def-multivariate-normal-law]]: $N_d(\mu,\tau^2I_d)$ is realized by $\mu+\tau Z$ with independent standard-normal coordinates, hence has the specified independent scalar normal marginals.

[F2] [[lem-sparse-hamming-packing]]: for $1\le k\le d/2$ there is a finite code whose binary vectors have exactly $k$ ones, pairwise squared distance greater than $k/2$, and cardinality $M$ satisfying $\log M\ge(k/1024)\log(ed/k)$.

[F3] [[lem-gaussian-location-kl-formula]] and
[[thm-product-kl-additivity]]: in the stated independent Gaussian model,
$$D(P_\mu\|P_\nu)=\frac{n}{2\sigma^2}\|\mu-\nu\|_2^2.$$

[F4] [[thm-fano-packing]]: under AC, for $M$ equally weighted hypotheses with target separation at least $\Delta$ and average KL to a reference $Q$ at most $K_Q$, every randomized estimator's average squared-error risk is at least $\Delta^2(1-(K_Q+\log2)/\log M)/4$.

[F5] [[thm-two-point-le-cam-risk-bound]]: for a scalar action kernel to $\mathbb R$ and two scalar targets separated by $\delta$, the maximum squared-error risk is at least $\delta^2(1-\mathrm{TV})/8$.

[F6] [[thm-pinsker]]: $\mathrm{TV}(P,Q)\le\sqrt{D(P\|Q)/2}$ under the event-supremum convention.

[F7] [[def-loss-function-and-risk]] and [[def-randomized-procedure-as-a-markov-kernel]]: each parameter risk is the nonnegative iterated kernel integral of its squared-error loss, with no measurability requirement on the parameter index for this pointwise risk.

[F8] [[def-natural-logarithm]], [[def-integral-logarithm]], [[cor-integral-logarithm-agrees-with-natural-logarithm]], [[def-real-exponential-function-and-e]], and [[thm-natural-logarithm-laws]]: $\log$ is increasing and obeys its product law; since $\log e=1>\log1=0$, $e>1$, so $\log(ed/k)>0$ when $d/k\ge2$; also $0<\log2=\int_1^2dt/t<1$.

## Proof

1.1 By [F2], choose a code $\mathcal C$ of size $M$ with associated $u^\omega\in\{0,1\}^d$, each having exactly $k$ ones and pairwise squared distance greater than $k/2$. Its logarithmic size is positive because $ed/k\ge2e>1$ by [F8], so $M\ge2$. [F2, F8, given, algebra]

2.1 Suppose $M=2$. The size bound in [F2] implies $k\log(ed/k)\le1024\log2<1024$ by [F8]. The two means $\mu^0=0$ and $\mu^1=b e_1$, where $b=\sigma/(2\sqrt n)$, both belong to $\Theta_{k,d}$ because $k\ge1$. Let $\pi_1:\mathbb R^d\to\mathbb R$ be first-coordinate projection and define the scalar action kernel $K_1(y,B):=K(y,\pi_1^{-1}(B))$ for every Borel $B\subseteq\mathbb R$. Since $\pi_1$ is Borel, each $K_1(y,\cdot)$ is the pushforward probability under $\pi_1$ and $y\mapsto K_1(y,B)$ is measurable, so [F5] applies to $K_1$. For $j=0,1$, define $R^{(1)}_j(K_1):=\int_{\mathbb R^d}\int_{\mathbb R}(x-\mu^j_1)^2K_1(y,dx)P_{\mu^j}(dy)$. The pushforward integral identity here follows from the definition of $K_1$ for indicators and then for nonnegative functions by simple approximation; together with $\|z-\mu^j\|_2^2\ge(z_1-\mu^j_1)^2$, it gives $R_{\mu^j}(K)\ge R^{(1)}_j(K_1)$. The scalar target gap is $b$. The KL divergence of the two full observation laws is $nb^2/(2\sigma^2)=1/8$ by [F3], so [F6] gives $\|P_{\mu^0}-P_{\mu^1}\|_{\rm TV}\le1/4$. Applying [F5] to the scalar kernel and these two laws yields $\max_jR^{(1)}_j(K_1)\ge b^2(1-1/4)/8=3b^2/32=3\sigma^2/(128n)$, and therefore $\max_jR_{\mu^j}(K)\ge3\sigma^2/(128n)$. Since $1024/200000<3/128$, this exceeds $\sigma^2 k\log(ed/k)/(200000n)$. [F2, F3, F5, F6, F7, F8, step 1.1, algebra]

2.2 Suppose $M\ge3$. Put $a^2=\sigma^2\log M/(4nk)$ and $\mu^\omega=a u^\omega$. These means belong to $\Theta_{k,d}$, and their pairwise squared distances exceed $a^2k/2$ by step 1.1. [F2, step 1.1, algebra]

3.1 Take $Q=P_0$, the zero-mean Gaussian law. By [F3], for every $\omega\in\mathcal C$, $D(P_{\mu^\omega}\|P_0)=\frac{n}{2\sigma^2}\|a u^\omega\|_2^2=\frac{na^2k}{2\sigma^2}=\frac{\log M}{8}.$ Thus the average reference divergence equals $\log M/8$. [F1, F3, step 2.2, algebra]

4.1 Since $M\ge3$, $\log2/\log M\le\log2/\log3<2/3$: the strict inequality follows from $3\log2=\log8<\log9=2\log3$, using $8<9$, monotonicity, and the product law in [F8]. Thus $1-((\log M)/8+\log2)/\log M\ge7/8-2/3=5/24>1/5$. Apply [F4] with separation $\Delta=a\sqrt{k/2}$ and reference $P_0$. Every estimator's average risk on the code is at least $\frac{\Delta^2}{4}\cdot\frac15=\frac{a^2k}{40}=\frac{\sigma^2\log M}{160n}\ge\frac{\sigma^2 k\log(ed/k)}{163840n}.$ The supremum over $\Theta_{k,d}$ dominates this finite-code average. [F3, F4, F8, step 2.2, step 3.1, algebra]

5.1 In the $M\ge3$ case, $1/163840>1/200000$, so step 4.1 implies the claimed bound. In the $M=2$ case it follows from step 2.1. For every estimator, the supremum risk over $\Theta_{k,d}$ is at least the finite submodel average or two-point maximum just proved; taking the infimum over estimators in the defined minimax value preserves the bound. [F7, step 2.1, step 4.1, algebra] ∎
