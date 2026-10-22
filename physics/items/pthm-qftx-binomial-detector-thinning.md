---
id: pthm-qftx-binomial-detector-thinning
kind: physics-theorem
domain: physics
library: physics
title: "Ideal independent loss preserves normalized factorial correlation"
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 4
deps:
  - pthm-qftx-mode-g-two
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
dependency_roles:
  pthm-qftx-mode-g-two: physical-result
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
physical_scope: "A selected mode with a finite positive ideal mean is sent through an explicitly assumed independent, constant-efficiency counting channel with no background or dark counts. The theorem does not model detector dead time, mode dependence, correlated loss, or actual measured data."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Daniel A. Steck, Quantum and Atom Optics, revision 0.16.10 (27 June 2026)"
      url: "https://atomoptics.uoregon.edu/~dsteck/teaching/quantum-optics/quantum-optics-notes.pdf"
      locator: "Author-hosted complete course text, Chapter 16 §§16.2–16.4.1, PDF pp. 687–690, for lossless beam-splitter mode transformations and the binomial output law for photons in one input. The theorem explicitly assumes independent fixed-efficiency thinning and proves its moment identities locally."
    - title: "Roy J. Glauber, The Quantum Theory of Optical Coherence, Physical Review 130, 2529–2539 (1963)"
      url: "https://journals.aps.org/pr/pdf/10.1103/PhysRev.130.2529"
      locator: "§II equations (2.16)–(2.18), printed pp. 2531–2532, for coincidence-count correlation functions. No loss or efficiency law is imported from this paper."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

Assume the ideal wavepacket-counting postulate for a selected mode $v\in\mathcal H_T$ with $\|v\|=1$, and let $\rho$ be the incoming density operator on $\mathcal F_s(\mathcal H_T)$ (a positive self-adjoint trace-class operator with trace one). By that postulate, $P_n(v)$ are the mode-count projections and $p_n=\operatorname{tr}(\rho P_n(v))$ are the count probabilities, so $p_n\ge0$ and $\sum_{n=0}^{\infty}p_n=1$. Define the incoming mean and second factorial moment by
$$\mu:=\sum_{n=0}^{\infty}np_n,\qquad F_2:=\sum_{n=0}^{\infty}n(n-1)p_n,$$
and assume $0<\mu<\infty$ and $F_2<\infty$. Define $g_N^{(2)}(0):=F_2/\mu^2$; for this input state $\rho$, the postulate denotes the same statistic by $g_v^{(2)}(0)$.

Let $0<\eta\le1$ be a dimensionless fixed efficiency and assume no background or dark counts. To specify independent recording, put $b_\eta(0)=1-\eta$, $b_\eta(1)=\eta$, and
$$\Omega:=\{(n,x):n\in\mathbb N_0,\ x=(x_1,\ldots,x_n)\in\{0,1\}^n\},\qquad \mathcal A:=\mathcal P(\Omega).$$
This is countable under the explicit encoding $(n,x)\mapsto(n,\sum_{j=1}^{n}x_j2^{j-1})$. Give the space the point masses
$$\mathbb P(\{(n,x)\}):=p_n\prod_{j=1}^{n}b_\eta(x_j),$$
where the empty product for $n=0$ is $1$. For each fixed $n$, the product factors define the conditional product law $Q_n$ on $\{0,1\}^n$; hence its coordinates are independent Bernoulli variables with success probability $\eta$. Since $\sum_{x\in\{0,1\}^n}Q_n(\{x\})=(\eta+(1-\eta))^n=1$, these point masses sum to one and define a probability measure $\mathbb P$ on $(\Omega,\mathcal A)$. Define $N(n,x):=n$ and $K(n,x):=\sum_{j=1}^n x_j$. For every nonnegative random variable $Y$ on this space, use the expectation
$$\mathbb E Y:=\sum_{(n,x)\in\Omega}Y(n,x)\,\mathbb P(\{(n,x)\}).$$
The marginal law of $N$ is $(p_n)$, and the conditional count law of $K$ given $N=n$ is the binomial law induced by $Q_n$. If $\mathbb E K>0$, define $g_K^{(2)}(0):=\mathbb E[K(K-1)]/(\mathbb E K)^2$. Then
$$\mathbb E K=\eta\mu,\qquad \mathbb E[K(K-1)]=\eta^2F_2.$$
Consequently the normalized zero-delay factorial correlation is unchanged:
$$g_K^{(2)}(0)=\frac{\mathbb E[K(K-1)]}{(\mathbb E K)^2}=\frac{F_2}{\mu^2}=g_N^{(2)}(0)=g_v^{(2)}(0).$$
This is a model deduction conditional on independent constant-efficiency thinning; it is not a universal property of real detectors.

## Statement references

[[pthm-qftx-mode-g-two]]

[[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[Steck, Quantum and Atom Optics](https://atomoptics.uoregon.edu/~dsteck/teaching/quantum-optics/quantum-optics-notes.pdf)

[Glauber (1963)](https://journals.aps.org/pr/pdf/10.1103/PhysRev.130.2529)

## Facts & Assumptions

**Given:** The count distribution $(p_n)$ of the ideal mode model, its finite moments $\mu>0$ and $F_2$, a fixed efficiency $0<\eta\le1$, and conditionally independent Bernoulli recording of each incoming photon.

[A1] The conditional law on the $n$th fiber of $\Omega$ is $Q_n(\{x\})=\prod_{j=1}^{n}b_\eta(x_j)$, with $b_\eta(0)=1-\eta$ and $b_\eta(1)=\eta$. For $j\le n$, the coordinate map $X_{n,j}(x):=x_j$ is therefore Bernoulli with success probability $\eta$, and the coordinate maps are mutually independent under $Q_n$. The joint mass is $\mathbb P(\{(n,x)\})=p_nQ_n(\{x\})$. This is the explicitly assumed thinning channel, not an empirical detector law.

[F1] For this incoming law, the ideal mode theorem uses the wavepacket postulate's input statistic $g_v^{(2)}(0)=F_2/\mu^2$ when $0<\mu<\infty$ and $F_2<\infty$. Thus the Statement's $g_N^{(2)}(0)$ is exactly that postulate value for $\rho$. [[pthm-qftx-mode-g-two]]

[F2] Nonnegative countable sums may be averaged and regrouped by Tonelli's theorem. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

## Proof

1.1 Fix $n\in\mathbb N_0$ and average on its finite fiber using $Q_n$. For each $j\le n$, factorization gives $\sum_xQ_n(\{x\})X_{n,j}(x)=\eta$, and for distinct $i,j\le n$ it gives $\sum_xQ_n(\{x\})X_{n,i}(x)X_{n,j}(x)=\eta^2$. Since $K(n,x)=\sum_{j=1}^nX_{n,j}(x)$ and $K(n,x)(K(n,x)-1)=\sum_{i\ne j}X_{n,i}(x)X_{n,j}(x)$ for zero-one coordinates, it follows that $\sum_xQ_n(\{x\})K(n,x)=n\eta$ and $\sum_xQ_n(\{x\})K(n,x)(K(n,x)-1)=n(n-1)\eta^2$. For $n=0$ or $n=1$ the relevant sums are empty and the same formulas hold. [A1, algebra]

2.1 Using the Statement's encoding, identify $\Omega$ with a subset of $\mathbb N_0\times\mathbb N_0$. For either $Y=K$ or $Y=K(K-1)$, extend $f_Y(n,m):=p_nQ_n(\{x\})Y(n,x)$ by zero outside that subset. Counting measure on $\mathbb N_0$ is sigma-finite, so [F2] applied to the product of the two counting-measure spaces permits the nonnegative sum to be regrouped over the finite fibers. Using step 1.1 gives $\mathbb E K=\sum_np_n n\eta=\eta\mu$ and $\mathbb E[K(K-1)]=\sum_np_n n(n-1)\eta^2=\eta^2F_2$. Both are finite by hypothesis. Since $\eta\mu>0$, division gives $g_K^{(2)}(0)=\eta^2F_2/(\eta\mu)^2=F_2/\mu^2=g_N^{(2)}(0)=g_v^{(2)}(0)$ by [F1]. [A1, F1, F2, step 1.1, algebra] ∎
