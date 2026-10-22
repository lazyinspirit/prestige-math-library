---
id: lem-csm-frontier-finite-generator-chain-existence
kind: lemma
title: "Uniformization constructs every finite-state rate matrix chain"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-csm-frontier-finite-generator-chain
  - def-axiom-of-choice
  - thm-ionescu-tulcea-construction-of-a-markov-chain
  - thm-dynkin-pi-lambda
  - thm-monotone-convergence-for-the-integral
dependency_roles:
  def-csm-frontier-finite-generator-chain: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-ionescu-tulcea-construction-of-a-markov-chain: mathematical-premise
  thm-dynkin-pi-lambda: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "James R. Norris, Advanced Probability, complete author-hosted lecture notes"
      url: "https://www.statslab.cam.ac.uk/~jrn10/Lectures/ap.pdf"
      locator: "Sections 4.1 and 4.3, printed pp. 25–27: finite-state continuous-time chains and their martingales."
    - title: "Rick Durrett, Probability: Theory and Examples, fifth edition, complete author-hosted book"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
      locator: "Section 4.4, Theorems 4.4.2 and 4.4.4 with proofs, printed pp. 235–237; Section 5.2 for the Markov convention."
    - title: "David Aldous and James Allen Fill, Reversible Markov Chains and Random Walks on Graphs, complete author-hosted book"
      url: "https://www.stat.berkeley.edu/~aldous/RWG/book.pdf"
      locator: "Chapter 2, Section 2.1.2, printed pp. 25–27: finite continuous-time rate matrices and exponential holding times."
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Choice. Let $E$ be a nonempty finite set, let $L$ be a rate matrix on $E$ with nonnegative off-diagonal entries and zero row sums, and let $\nu$ be an initial probability vector. Then there exists a uniformized realization under the conventions stated below. Its paths are càdlàg and almost surely have only finitely many event times on each bounded interval (nonexplosion), and, for all $0\le s\le t$,
$$\mathbb P(X_t=j\mid\mathcal F_s)=(e^{(t-s)L})_{X_sj}\quad\text{almost surely},$$
where $\mathcal F_s=\sigma(N_u,X_u:0\le u\le s)$ is the construction filtration. In particular, $e^{tL}$ is the transition matrix from any initial state.

## Statement references

[[def-csm-frontier-finite-generator-chain]]

## Facts & Assumptions

**Given:** A finite state set $E$, a rate matrix $L$, an initial probability vector $\nu$, and the Axiom of Choice.

[A1] The Axiom of Choice is used by the stated countable Ionescu–Tulcea construction; [[def-axiom-of-choice]] is its exact assumption.

[F1] [[def-csm-frontier-finite-generator-chain]]: for $q=\max_i\lambda_i>0$, $R=I+L/q$ and a uniformized realization uses an $R$-Markov sequence independent of iid rate-$q$ exponential waiting times; $N_t$ counts their arrivals and $X_t=Y_{N_t}$.

[F2] [[thm-ionescu-tulcea-construction-of-a-markov-chain]]: under Choice, a probability law with the specified initial distribution and measurable transition kernels exists on the countable sequence space, with the prescribed finite-prefix laws.

[F3] [[thm-dynkin-pi-lambda]]: probability measures that agree on a generating pi-system agree on the sigma-algebra it generates.

[F4] [[thm-monotone-convergence-for-the-integral]]: increasing limits of nonnegative measurable functions pass through their integrals.

## Proof

1.1 Put $\lambda_i=\sum_{j\ne i}L_{ij}$ and $q=\max_i\lambda_i$. If $q=0$, all off-diagonal entries vanish and the zero row sums force $L=0$. On the finite probability space $(E,2^E,\nu)$ put $Y_0(\omega)=\omega$ and $X_t=Y_0$ for all $t$. Then $N_t=0$, paths are constant, the conditional transition is the identity, and $e^{tL}=I$, giving the conclusion in this case. [given, algebra]

1.2 Suppose $q>0$. For $i\ne j$, $R_{ij}=L_{ij}/q\ge0$, while $R_{ii}=1-\lambda_i/q\ge0$; each row sums to $1$. Let $\mu_q(dw)=q e^{-qw}\,dw$ on $(0,\infty)$, a probability measure because its density integrates to $1$. On $E\times(0,\infty)$ use initial law $\nu\otimes\mu_q$ and transition kernel $K((i,w),\{j\}\times B)=R_{ij}\mu_q(B)$ for Borel $B\subseteq(0,\infty)$. For any Borel subset of the product, its kernel value is the finite sum over $j$ of $R_{ij}$ times the $\mu_q$-measure of the corresponding section; thus it is measurable, nonnegative and has total mass $1$. [given, F1, construct, algebra]

2.1 Apply [F2] to this initial law and kernel, and write the resulting coordinates as $Z_n=(Y_n,W_{n+1})$. Their finite-prefix law factors as the Markov-chain prefix law for $Y$ times $\prod_{k=1}^{n+1}\mu_q(dW_k)$, because every transition kernel chooses the next state with probabilities $R_{ij}$ and the next waiting time with the same factor $\mu_q$, independently of the current waiting time. Cylinder events generate the two coordinate sigma-algebras, so [F3] extends this factorization to independence of the full sequence $Y$ from the iid family $(W_k)$. The first coordinate is an $R$-Markov sequence with initial law $\nu$, as required by [F1]. [A1, F1, F2, F3, step 1.2]

3.1 Each $W_k$ has probability $e^{-1}$ of being at least $q^{-1}$. For any fixed $r$, independence gives $\mathbb P(W_k<q^{-1}\text{ for }r\le k\le n)=(1-e^{-1})^{n-r+1}\to0$. Continuity of probability for decreasing events, obtained by applying [F4] to complements, shows that the probability of no such event after $r$ is zero. A countable union over $r$ shows that $W_k\ge q^{-1}$ occurs infinitely often almost surely, and therefore $\sum_kW_k=\infty$ almost surely. On every bounded time interval there are consequently finitely many event times; the convention $X_t=Y_{N_t}$ makes paths right-continuous with left limits. [F1, F4, step 2.1]

3.2 For $n\ge1$, convolution of the exponential densities gives the arrival-time density $$ f_{T_n}(u)=\frac{q^n u^{n-1}e^{-qu}}{(n-1)!},\qquad u>0. $$ Indeed the formula holds for $n=1$, and convolving it with $q e^{-q(t-u)}$ gives $q^{n+1}e^{-qt}\int_0^t u^{n-1}du/(n-1)!=q^{n+1}t^ne^{-qt}/n!$. Since $W_{n+1}$ is independent of $T_n$, for $n\ge1$, $$ \mathbb P(N_t=n)=\int_0^t f_{T_n}(u)\mathbb P(W_{n+1}>t-u)\,du=e^{-qt}\frac{(qt)^n}{n!}; $$ for $n=0$ the probability is $\mathbb P(W_1>t)=e^{-qt}$. [F1, step 2.1, algebra]

4.1 The event process has independent rate-$q$ Poisson increments. To see the conditional assertion needed here, on $\{N_s=n\}$ the event-clock history gives $T_n\le s<T_{n+1}$; by the exponential memoryless identity $\mathbb P(W_{n+1}-(s-T_n)>u\mid W_{n+1}>s-T_n)=e^{-qu}$, the residual time after $s$ is rate-$q$ exponential independent of that history. The later waiting times are independent rate-$q$ exponentials as well. Repeating the calculation in step 3.2 shows that, conditional on the clock history up to $s$, $N_{s+h}-N_s$ has probabilities $e^{-qh}(qh)^k/k!$, independent of that history. The clock is independent of $Y$ by step 2.1 and the uniformized convention [F1]. [F1, step 2.1, step 3.2, algebra]

5.1 Let $H_s=(Y_0,\ldots,Y_{N_s})$ be the finite embedded-state prefix and put $\mathcal G_s=\sigma(N_u:0\le u\le s,H_s)$. Since $N_u\le N_s$ for $u\le s$, the construction filtration $\mathcal F_s=\sigma(N_u,X_u:0\le u\le s)$ is contained in $\mathcal G_s$. Given $\mathcal G_s$ and $X_s=i$, $k$ further clock events have probability $e^{-qh}(qh)^k/k!$ by step 4.1, and the embedded chain has $k$-step transition matrix $R^k$. Hence $$ \mathbb P(X_{s+h}=j\mid\mathcal G_s)=\sum_{k=0}^{\infty}e^{-qh}\frac{(qh)^k}{k!}(R^k)_{ij}=\bigl(e^{-qh}e^{qhR}\bigr)_{ij}=(e^{hL})_{ij}, $$ since $q(R-I)=L$. This conditional law depends on $\mathcal G_s$ only through $X_s$; conditioning down to $\mathcal F_s$ gives the required identity for all $s\le t$. The matrix series converges absolutely because $E$ is finite. [F1, step 2.1, step 4.1, algebra]

6.1 The constructed $X$ is adapted to $\mathcal F_t$ by definition. Step 3.1 gives nonexplosion and càdlàg paths; step 5.1 gives its all-pairs conditional transition matrices. Thus it is a uniformized realization for every finite rate matrix, including reducible matrices and states with $\lambda_i=0$. [given, F1, step 3.1, step 5.1] ∎
