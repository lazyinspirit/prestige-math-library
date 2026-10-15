---
dependency_level: 4
id: lem-zero-variance-geometric-markov-sums-have-strong-rate
kind: lemma
title: Zero-variance geometric Markov sums have a uniform strong rate
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - def-axiom-of-choice
  - def-geometric-and-uniform-ergodicity-for-mcmc-clt
  - def-total-variation-distance-for-probability-laws
  - lem-geometric-strong-mixing-gives-lp-poisson-solution
  - lem-square-integrable-markov-transition-conditional-expectation
  - cor-cauchy-schwarz-for-random-variables
  - thm-taking-out-what-is-known
  - thm-basic-algebra-and-order-properties-of-conditional-expectation
  - thm-finite-measure-l-r-includes-into-l-p-for-p-less-r
  - thm-monotone-convergence-for-the-integral
  - cor-first-borel-cantelli-lemma-for-events
  - cor-canonical-markov-chain-on-path-space
  - thm-markov-property-for-bounded-future-path-functionals
  - thm-invariant-initial-law-makes-the-chain-stationary
  - lem-harris-geometric-ergodicity-has-integrable-rate-envelope
  - lem-geometric-total-variation-rate-controls-strong-mixing
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Galin L. Jones, On the Markov Chain Central Limit Theorem, §§3–4
      url: https://arxiv.org/pdf/math/0409112
      locator: Full PDF retrieved; Theorem 2 and Theorem 5 with their mixing/covariance setting inspected. The exact zero-variance rate and deletion-invariant all-start transfer below are local deductions, not an imported SIP.
    - title: P. Doukhan, P. Massart and E. Rio, The functional central limit theorem for strongly mixing processes, Lemma 1 and Proposition 1
      url: https://www.numdam.org/item/AIHPB_1994__30_1_63_0.pdf
      locator: Printed p. 66/PDF p. 5 inspected as a rendered page. Its covariance method is supplied by the preceding proved local Poisson-solution lemma; no coupling theorem is used.
axiom_use: AC is assumed through the conditional-expectation, Poisson-solution, canonical path-law, and geometric-envelope suppliers. The rate and all-start event argument use no additional choice.
---

## Statement

Assume AC. Let $P$ be a probability kernel on an arbitrary measurable space $(\mathsf X,\mathcal X)$ with invariant probability $\pi$. Suppose its stationary Markov chain has strong-mixing coefficients $\alpha_X(n)\le Cr^n$ for $n\ge1$, with $0\le C<\infty$ and $0<r<1$. Let $f:\mathsf X\to\mathbb R$ be finite measurable with $\pi f=0$, $\pi|f|^q<\infty$ for a finite $q>2$, and suppose the absolutely convergent covariance sum is zero:
$$v:=\pi(f^2)+2\sum_{n\ge1}\operatorname{Cov}_\pi(f(X_0),f(X_n))=0.$$
Then for every $2<p<q$, under the stationary law,
$$\max_{0\le j\le n}\left|\sum_{k=0}^{j-1}f(X_k)\right|=o(n^{1/p})\qquad\text{almost surely}.$$
The empty sum at $j=0$ is zero. No ergodicity assumption is needed beyond the stated stationary mixing bound.

If additionally $\|P^n(x,\cdot)-\pi\|_{\mathrm{TV}}\to0$ for every $x\in\mathsf X$, the same assertion holds under every initial probability law, without a moment assumption on that law. In particular, it holds under every initial law whenever $P$ has an everywhere finite measurable common geometric total-variation envelope in the sense of [[def-geometric-and-uniform-ergodicity-for-mcmc-clt]] and $f$ has the stated moment, centering and zero covariance sum. No positive one-step minorization, irreducibility or Harris hypothesis is added to this last sufficient condition.

## Facts & Assumptions

**Given:** AC, the stationary geometric strong-mixing hypotheses, finite centered real $f\in L^q(\pi)$, the zero covariance sum, and any fixed $2<p<q$. For the all-start conclusion assume also the stated pointwise total-variation convergence; for the final sufficient condition assume the everywhere geometric envelope instead.

[A1] AC is assumed. [[def-axiom-of-choice]]

[F1] Under the stationary geometric strong-mixing and moment hypotheses, there is a finite measurable $g\in L^p(\pi)$ with $f=g-Pg$ almost everywhere; the covariance series is absolutely convergent and $n^{-1}\mathbb E_\pi(\sum_{k=0}^{n-1}f(X_k))^2\to v$. [[lem-geometric-strong-mixing-gives-lp-poisson-solution]]

[F2] For $g\in L^2(\pi)$, $D_{k+1}=g(X_{k+1})-Pg(X_k)$ is square-integrable with $\mathbb E[D_{k+1}\mid\mathcal F_k]=0$, where $\mathcal F_k=\sigma(X_0,\ldots,X_k)$. [[lem-square-integrable-markov-transition-conditional-expectation]]

[F3] On a probability space $L^p\subset L^2$ for $p>2$; Cauchy–Schwarz bounds products of $L^2$ variables. Conditional expectation preserves means, and a known factor can be taken out when the products are integrable. [[thm-finite-measure-l-r-includes-into-l-p-for-p-less-r]], [[cor-cauchy-schwarz-for-random-variables]], [[thm-basic-algebra-and-order-properties-of-conditional-expectation]], [[thm-taking-out-what-is-known]]

[F4] Monotone convergence passes increasing finite nonnegative sums through expectation; summable event probabilities imply only finitely many occurrences almost surely. [[thm-monotone-convergence-for-the-integral]], [[cor-first-borel-cantelli-lemma-for-events]]

[F5] Under AC the canonical Markov path law exists for every initial law. For a bounded product-measurable path functional $H$, $h(x)=\mathbb E_xH(X_0,X_1,\ldots)$ is measurable and $\mathbb E[H(X_n,X_{n+1},\ldots)\mid\mathcal F_n]=h(X_n)$. An invariant initial law makes the chain stationary. [[cor-canonical-markov-chain-on-path-space]], [[thm-markov-property-for-bounded-future-path-functionals]], [[thm-invariant-initial-law-makes-the-chain-stationary]]

[F6] Total variation is $\|\mu-\nu\|_{\mathrm{TV}}=\sup_A|\mu(A)-\nu(A)|$. [[def-total-variation-distance-for-probability-laws]]

[F7] An invariant kernel with an everywhere finite measurable common geometric total-variation envelope admits such an envelope integrable under $\pi$, possibly at a slower geometric rate. That integrable bound implies $\alpha_X(n)\le\pi(M)r^n$ for the stationary chain. [[lem-harris-geometric-ergodicity-has-integrable-rate-envelope]], [[lem-geometric-total-variation-rate-controls-strong-mixing]], [[def-geometric-and-uniform-ergodicity-for-mcmc-clt]]

## Proof

1.1 Apply [F1] to obtain $g\in L^p(\pi)$ with $f=g-Pg$ almost everywhere; choose its finite measurable version as in that supplier. By [F3], $g\in L^2$. Stationarity makes the Poisson identity hold at every $X_k$ simultaneously off a countable union of null events. By [F2], on this common event $f(X_k)=g(X_k)-g(X_{k+1})+D_{k+1}$. Summing gives $S_n:=\sum_{k=0}^{n-1}f(X_k)=R_n+M_n$, with $R_n=g(X_0)-g(X_n)$ and $M_n=\sum_{k=0}^{n-1}D_{k+1}$. No ergodic theorem or central limit theorem has been used. [A1, F1, F2, F3, given, algebra]

1.2 Put $\tau^2=\mathbb E_\pi D_1^2$. Stationarity of transition pairs gives $\mathbb E D_j^2=\tau^2$ for every $j\ge1$. If $i<j$, then $D_i$ is $\mathcal F_{j-1}$-measurable, its product with $D_j$ is integrable by [F3], and [F2]–[F3] give $\mathbb E[D_iD_j]=\mathbb E[D_i\mathbb E(D_j\mid\mathcal F_{j-1})]=0$. Thus $\mathbb E M_n^2=n\tau^2$. The inequality $(a-b)^2\le2a^2+2b^2$ and stationarity give $\mathbb E R_n^2\le4\|g\|_2^2$. Cauchy–Schwarz [F3] and step 1.1 imply $|n^{-1}\mathbb E S_n^2-\tau^2|\le4\|g\|_2^2/n+4\|g\|_2\tau/\sqrt n\to0$. By [F1], the same normalized second moments tend to $v=0$, so $\tau^2=0$. A nonnegative variable of zero expectation is zero almost surely; applying this to each $D_j^2$ and taking the countable intersection shows that all $D_j$ vanish simultaneously. Hence $S_n=g(X_0)-g(X_n)$ for every $n$ on one probability-one event. [F1, F2, F3, step 1.1, given, algebra]

2.1 Fix $\varepsilon>0$. Pointwise, the number of positive integers $k$ with $|g(x)|^p>\varepsilon^p k$ is at most $\varepsilon^{-p}|g(x)|^p$. Stationarity and [F4], applied first to finite sums and then to their increasing limit, therefore give $\sum_{k\ge1}\mathbb P_\pi(|g(X_k)|>\varepsilon k^{1/p})=\sum_{k\ge1}\pi(|g|^p>\varepsilon^p k)\le\varepsilon^{-p}\pi|g|^p<\infty$. Borel–Cantelli [F4], intersected over positive rational $\varepsilon$, yields $g(X_k)=o(k^{1/p})$ almost surely. On that event, for every $\varepsilon>0$ the sufficiently late terms obey $|g(X_k)|\le\varepsilon k^{1/p}\le\varepsilon n^{1/p}$ for $k\le n$, while the maximum of the finitely many earlier terms divided by $n^{1/p}$ tends to zero. Thus $\max_{k\le n}|g(X_k)|=o(n^{1/p})$. Step 1.2 gives $\max_{0\le j\le n}|S_j|\le|g(X_0)|+\max_{j\le n}|g(X_j)|=o(n^{1/p})$, proving the stationary conclusion. [F4, step 1.1, step 1.2, algebra]

3.1 For the all-start part, define the original path event $E=\{(x_k)_{k\ge0}:n^{-1/p}\sum_{k=0}^{n-1}f(x_k)\to0\}$. It is product-measurable, since the condition is a countable combination of inequalities for finite measurable sums. It is invariant under deleting the first coordinate: if $s_n=\sum_{k=0}^{n-1}f(x_k)$, the shifted sum is $s_{n+1}-f(x_0)$, and the reverse identity is $s_n=f(x_0)+(s_n-f(x_0))$ with the second term the shifted sum of length $n-1$. Since $f(x_0)$ is finite and $((n+1)/n)^{1/p}$ and $((n-1)/n)^{1/p}$ tend to one, either normalized convergence implies the other. Iterating gives invariance under deleting any fixed finite prefix. Also, on every real path, $s_n=o(n^{1/p})$ is equivalent to $\max_{j\le n}|s_j|=o(n^{1/p})$: the reverse direction is immediate, and the forward direction follows by discarding a finite initial segment and bounding all later $|s_j|$ by $\varepsilon j^{1/p}$. Thus it suffices to transfer the event $E$, rather than any Poisson identity outside a stationary full-measure set. [given, construct, algebra, step 2.1]

3.2 Let $h(x)=\mathbb P_x(E)$. By [F5], $h$ is measurable and $0\le h\le1$. The canonical stationary chain has the same path law as the stationary chain already considered, so step 2.1 gives $\pi(h)=\mathbb P_\pi(E)=1$; this equality also follows by applying [F5] at time zero and taking expectations. For every state $x$ and integer $n\ge1$, prefix-deletion invariance and [F5] give $h(x)=\mathbb E_x1_E=\mathbb E_x[h(X_n)]=P^nh(x)$. These are identities for each canonical starting state, not simultaneous versions of a conditional expectation over an uncountable family of starts. [A1, F5, step 2.1, step 3.1]

3.3 For any probability measures $\mu,\nu$ and measurable $0\le h\le1$, let $h_m=2^{-m}\sum_{j=1}^{2^m}1_{\{h\ge j2^{-m}\}}$. Then $|h_m-h|\le2^{-m}$ and [F6] gives $|\mu(h_m)-\nu(h_m)|\le\|\mu-\nu\|_{\mathrm{TV}}$. Letting $m\to\infty$ proves the same bound for $h$. Under the additional pointwise total-variation assumption, apply it to $\mu=P^n(x,\cdot)$ and $\nu=\pi$. Step 3.2 gives $h(x)=P^nh(x)\to\pi(h)=1$ for every $x$, hence $h(x)=1$ everywhere. For any initial law $\mu$, [F5] at time zero gives $\mathbb P_\mu(E)=\int h\,d\mu=1$. The deterministic equivalence in step 3.1 transfers the uniform maximal rate as well. No moment or support condition on $\mu$ is needed. [F5, F6, step 3.1, step 3.2, given, construct]

4.1 Finally suppose the everywhere common geometric bound in the Statement holds. Since its envelope is finite at every state, it implies $P^n(x,\cdot)\to\pi$ in total variation for every $x$. By [F5] the canonical invariant-initial-law chain is stationary. The stronger arbitrary-measurable-space clause of [F7] supplies a finite integrable geometric envelope, and its mixing implication supplies the stationary geometric strong-mixing bound needed by [F1]. Therefore the proof in steps 1.1–3.3 applies to the stated $f$ and zero covariance sum under every initial law. The zero function, a one-state chain, empty partial sums and zero martingale variance are all included; an empty state space admits no invariant probability and does not satisfy the hypotheses. Strict $2<p<q$ is used by [F1] and the $L^2$ comparison. AC is inherited precisely through [F1], [F2], [F3], [F5] and [F7]. This completes both the stationary result and the asserted all-start sufficient conditions. [A1, F1, F2, F3, F5, F7, step 1.1, step 1.2, step 2.1, step 3.3, given] ∎

## Remarks

This is the zero-variance rate only. For a moment $\pi|f|^{2+\delta+\varepsilon}<\infty$ with $\delta,\varepsilon>0$, choose $p$ strictly between $2+\delta$ and $2+\delta+\varepsilon$. The proved $o(n^{1/p})$ rate is stronger than $O(n^{1/(2+\delta)}\log n)$. It therefore supplies the degenerate error estimate needed in a zero-Brownian-coefficient branch without using regeneration, a martingale CLT, KMT, or a nondegenerate SIP. It establishes no positive-variance Brownian coupling.

The Jones and Doukhan–Massart–Rio full PDFs were retrieved, and the source locations specified above were inspected. Their covariance and mixing methods document provenance; the bounded-dual Poisson supplier, zero-martingale variance comparison, integrated-tail rate and deletion-invariant arbitrary-start transfer are all proved locally here or in the explicit mathematical dependencies.
