---
id: lem-matrix-chapman-kolmogorov-equations
kind: lemma
title: "Matrix Chapman–Kolmogorov equations"
status: published
origin: pipeline
proof_strategy: direct
deps:
  - def-transition-matrix-and-n-step-transition-probabilities
  - lem-kernel-composition-is-well-defined-and-associative
  - thm-measures-on-countable-discrete-spaces-are-weighted-dirac-sums
  - thm-monotone-convergence-for-the-integral
  - def-iterated-transition-kernels
  - def-composition-of-probability-kernels
landmark: false
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: "Levin, Peres and Wilmer, Markov Chains and Mixing Times, second edition"
      url: https://pages.uoregon.edu/dlevin/MARKOV/mcmt2e.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
---
## Statement

For $m,n\ge0$ and $x,y$ in countable $E$,

$$p^{(m+n)}(x,y)=\sum_{z\in E}p^{(m)}(x,z)p^{(n)}(z,y).$$

## Facts & Assumptions

**Given:** A countable state space $E$, a probability kernel $K$ on $(E,2^E)$, $m,n\in\mathbb N_0$, and $x,y\in E$.

[F1] Iterated kernels start with $K^0=I$ and satisfy $K^{j+1}=K^jK$. [[def-iterated-transition-kernels]]

[F2] Kernel composition is defined by $(KL)(s,A)=\int_T L(t,A)\,K(s,dt)$. [[def-composition-of-probability-kernels]]

[F3] Kernel composition is associative at each source point and measurable set. [[lem-kernel-composition-is-well-defined-and-associative]]

[F4] A measure on a countable discrete space is determined by its singleton weights and is their weighted sum. [[thm-measures-on-countable-discrete-spaces-are-weighted-dirac-sums]]

[F5] An increasing sequence of nonnegative measurable functions passes to the limit under the integral. [[thm-monotone-convergence-for-the-integral]]

[F6] The transition probabilities are $p^{(j)}(x,y)=K^j(x,\{y\})$. [[def-transition-matrix-and-n-step-transition-probabilities]]

## Proof

**Proof technique:** direct induction and monotone convergence.

1.1 For all $m,n\ge0$, $K^{m+n}=K^mK^n$. For $n=0$, the composition formula in [F2] and $K^0=I$ in [F1] give $K^mK^0=K^m$. If the identity holds at $n$, then [F1] and associativity [F3] give

$$K^{m+n+1}=K^{m+n}K=(K^mK^n)K=K^m(K^nK)=K^mK^{n+1}.$$

Induction proves the kernel identity. [F1, F2, F3, given, induction]

2.1 Apply step 1.1 to the singleton $\{y\}$. By [F2] and [F6], $p^{(m+n)}(x,y)=\int_E K^n(z,\{y\})\,K^m(x,dz)$. The integrand is measurable and between zero and one because $K^n$ is a probability kernel, so the integral is defined. [F2, F3, F6, step 1.1, given]

3.1 If $E$ is finite, list it without repetition as $e(0),\ldots,e(r-1)$; if it is countably infinite, fix a bijection $e:\mathbb N\to E$. Let $J=\{0,\ldots,r-1\}$ in the finite case and $J=\mathbb N$ in the infinite case, and set $g_N(z)=\sum_{k\in J,\,k<N}K^n(e(k),\{y\})\mathbf1_{\{z=e(k)\}}$. These finite-support functions increase pointwise to $g(z)=K^n(z,\{y\})$ and are constant once $N\ge r$ in the finite case. By [F4], the singleton weights of $K^m(x,\cdot)$ are $p^{(m)}(x,e(k))$; [F5] therefore gives $\int_Eg\,dK^m(x,\cdot)=\lim_N\sum_{k\in J,\,k<N}p^{(m)}(x,e(k))p^{(n)}(e(k),y)=\sum_{z\in E}p^{(m)}(x,z)p^{(n)}(z,y)$. Combining with step 2.1 proves the formula, with the nonnegative series interpreted by its finite partial sums. [F4, F5, F6, step 2.1]

4.1 If $m=0$, the row $p^{(0)}(x,z)=\mathbf1_{\{x=z\}}$ leaves only the term $z=x$; if $n=0$, $p^{(0)}(z,y)=\mathbf1_{\{z=y\}}$ leaves only $z=y$. When $m=n=0$, both sides are $\mathbf1_{\{x=y\}}$. Thus the zero-time endpoints, including the one-state and deterministic cases, agree. If $E=\varnothing$, there are no $x,y$ and the assertion is vacuous. The proof uses kernel algebra and nonnegative sums only; no AC or conditional-probability version enters. [F1, F6, step 3.1, given] ∎
