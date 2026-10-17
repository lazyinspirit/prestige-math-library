---
id: thm-csm-dk-nonexplosive-ctmc-and-gap
kind: theorem
title: "Nonexplosive finite continuous-time chain and reversible spectral gap"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-csm-dk-finite-reversible-rate-model
  - thm-ionescu-tulcea-construction-of-a-markov-chain
  - def-axiom-of-choice
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
dependency_roles:
  def-csm-dk-finite-reversible-rate-model: mathematical-premise
  thm-ionescu-tulcea-construction-of-a-markov-chain: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  cor-real-spectral-theorem-for-self-adjoint-endomorphisms: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David Aldous and James Allen Fill, Reversible Markov Chains and Random Walks on Graphs"
      url: "https://www.stat.berkeley.edu/~aldous/RWG/book.pdf"
      locator: "Chapter 2 §2.1.2; Chapter 3 §§3.1–3.4, continuous-time generator and reversible spectral representation."
---

## Statement

Assume the Axiom of Choice [[def-axiom-of-choice]] and let $E,\pi,w,Q$ be the finite model data of [[def-csm-dk-finite-reversible-rate-model]], with $|E|=r\ge2$. For every initial probability row vector $p_0$, there exists a time-homogeneous continuous-time Markov chain $X_t$ on $E$, $t\ge0$, with no finite accumulation of jumps, transition matrix $P_t=e^{tQ}$, and law $p_t=p_0P_t$. The detailed-balance law $\pi$ is stationary. On the real inner-product space $L^2(E,\pi)$, $Q$ is self-adjoint and has an orthonormal eigenbasis $\phi_0=1,\phi_1,\ldots,\phi_{r-1}$ with eigenvalues $0,-\lambda_1,\ldots,-\lambda_{r-1}$, where every $\lambda_j>0$. Thus the spectral gap $\lambda_*:=\min_j\lambda_j$ is positive and $P_t$ converges exponentially to projection onto constants.

Here a finite-state continuous-time Markov chain means a process with piecewise-constant paths whose conditional transition matrix over an interval of length $t$ is $P_t$, independent of the starting time. For initial law $\pi$, the chain has a two-sided stationary extension $X_t$, $t\in\mathbb R$, whose finite-dimensional laws at $t_1<\cdots<t_n$ are $\pi_{a_1}\prod_{i=1}^{n-1}P_{t_{i+1}-t_i}(a_i,a_{i+1})$. Its sample paths are locally piecewise constant with finitely many jumps on every bounded time interval.

## Facts & Assumptions
**Given:** The Axiom of Choice and the rate model of [[def-csm-dk-finite-reversible-rate-model]].

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function.

[F1] [[def-csm-dk-finite-reversible-rate-model]]: $E$ is finite; $\pi(f)=\sum_a\pi_af_a$ and $\langle f,g\rangle_\pi=\sum_a\pi_af_ag_a$; $q_a=\sum_{b\ne a}w_{ab}$; the row generator has $Q_{ab}=w_{ab}$ for $a\ne b$ and $Q_{aa}=-q_a$; the positive-rate graph is connected; and $\pi_aw_{ab}=\pi_bw_{ba}$.

[F2] [[thm-ionescu-tulcea-construction-of-a-markov-chain]]: under Choice, an initial probability law and a sequence of probability kernels determine a unique probability law on the countable product with the prescribed finite-prefix laws.

[F3] [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]: a self-adjoint endomorphism of a finite-dimensional real inner-product space has an orthonormal eigenbasis.

## Proof

**Given:** [A1] and [F1]–[F3].

1.1 Set $\Lambda>\max_aq_a$ and $K:=I+Q/\Lambda$. Every off-diagonal entry of $K$ is nonnegative, $K_{aa}=1-q_a/\Lambda>0$, and each row sums to one, so $K$ is a transition matrix. The balance relation in [F1] gives $\pi_aK_{ab}=\pi_bK_{ba}$ for all $a,b$. Use [F2] with state space $E\times(0,1)$, initial state distributed as $p_0$ with an independent uniform mark, and transition kernel $K(a,b)\,du'$ from $(a,u)$ to $(b,u')$. Write $Y_n$ for the state coordinate and $U_n$ for the uniform mark; the sequence $Y_n$ has transitions $K$, and the marks $U_n$ are independent uniforms independent of the state sequence. The holding intervals $\tau_n:=-\log U_n/\Lambda$ are independent exponentials of rate $\Lambda$. [A1, F1, F2, construct, algebra]

2.1 For every $n$, $\Pr(\tau_n\ge1/\Lambda)=e^{-1}$. For each fixed $m$, independence gives probability $(1-e^{-1})^N$ that none of $\tau_m,\ldots,\tau_{m+N-1}$ reaches $1/\Lambda$; this tends to zero. A countable union over $m$ shows that infinitely many holding intervals are at least $1/\Lambda$, almost surely. Therefore $S_n:=\sum_{j=0}^{n-1}\tau_j\to\infty$. For each $t\ge0$, there is a unique $N(t)$ with $S_{N(t)}\le t<S_{N(t)+1}$; set $X_t:=Y_{N(t)}$. Thus the constructed path is piecewise constant and has only finitely many transition attempts on each bounded interval. This proves nonexplosion. [A1, F2, step 1.1, algebra]

3.1 The sum of $k\ge1$ independent rate-$\Lambda$ exponential holding times has density $\Lambda^ks^{k-1}e^{-\Lambda s}/(k-1)!$, as follows by induction using convolution. Integrating this density against the survival $e^{-\Lambda(t-s)}$ of the next holding time gives $\Pr(N(t)=k)=e^{-\Lambda t}(\Lambda t)^k/k!$; for $k=0$ it is $e^{-\Lambda t}$. Starting from state $a$, each uniformized attempt stays at $a$ with probability $K_{aa}=1-q_a/\Lambda$. Since $N(t)$ is Poisson and independent of the $K$-chain, the probability of no state change by time $t$ is $\sum_{k\ge0}e^{-\Lambda t}(\Lambda t)^kK_{aa}^k/k!=e^{-q_at}$. At the first attempt that changes state, the destination $b\ne a$ has conditional probability $K_{ab}/(1-K_{aa})=w_{ab}/q_a$. Thus the actual holding time and jump destination have exactly the law stated in the Definition. The exponential holding times are memoryless and independent of the $K$-chain, so after any time the remaining clock and future transitions have the same laws from the current state; conditioning on $N(t)$ therefore yields the time-homogeneous transition matrix $P_t=e^{-\Lambda t}\sum_{k=0}^{\infty}(\Lambda t)^kK^k/k!=e^{tQ}$ because $Q=\Lambda(K-I)$. The finite-matrix series converges absolutely, differentiates termwise, and satisfies $P'_t=P_tQ$ and $P_0=I$. Each term is stochastic, hence $P_t$ is stochastic. For each state $b$, detailed balance gives $(\pi Q)_b=\sum_{a\ne b}\pi_aw_{ab}-\pi_bq_b=\pi_b\sum_{a\ne b}w_{ba}-\pi_b\sum_{a\ne b}w_{ba}=0$; therefore $\pi P_t=\pi$. [F1, step 1.1, step 2.1, algebra]

4.1 For $f,g\in L^2(E,\pi)$, detailed balance gives $\langle f,Qg\rangle_\pi=\langle Qf,g\rangle_\pi$. Pairing the two directed terms for each edge gives $-\langle f,Qf\rangle_\pi=\frac12\sum_{a\in E}\sum_{b\ne a}\pi_aw_{ab}(f_b-f_a)^2\ge0$. Equality holds only when $f_a=f_b$ along every positive-rate edge; connectedness in [F1] then makes $f$ constant. Thus the zero eigenspace is exactly the constants. By [F3], $Q$ has a real orthonormal eigenbasis; nonpositivity and the one-dimensional kernel imply all other eigenvalues are $-\lambda_j$ with $\lambda_j>0$. Expanding in this basis gives $P_tf=\pi(f)1+\sum_{j=1}^{r-1}e^{-\lambda_jt}\langle f,\phi_j\rangle_\pi\phi_j$, proving the positive gap and exponential convergence. [F1, F3, step 3.1, algebra]

5.1 Apply [F2] on $((E\times(0,1))^2)$ with initial state whose two $E$ coordinates are equal with law $\pi$ and whose two marks $U_0^+,U_0^-$ are independent uniforms. From a state pair $(a^+,a^-)$, use the product kernel $K(a^+,b^+)K(a^-,b^-)\,du'^+du'^-$; this makes the two $K$-chains conditionally independent given their shared initial state and gives independent uniform marks at every step. Denote the state coordinates by $Y_n^\pm$, set $\tau_n^\pm:=-\log U_n^\pm/\Lambda$, $S_0^\pm:=0$, and $S_n^\pm:=\sum_{j=0}^{n-1}\tau_j^\pm$. For $s\ge0$, let $N^\pm(s)$ be the unique index with $S_{N^\pm(s)}^\pm\le s<S_{N^\pm(s)+1}^\pm$ and put $Z_s^\pm:=Y_{N^\pm(s)}^\pm$. Step 2.1 applied to each clock sequence ensures these indices exist for every finite $s$. Put $X_t=Z_t^+$ for $t\ge0$ and $X_t=Z_{-t}^-$ for $t<0$. For times entirely on the nonnegative half, the Markov-chain law has the stated product form. For negative times $t_1<\cdots<t_k<0$, append the time $0$ with state $c=X_0$. In the forward parameter $s=-t$, the ordered states are $c,a_k,\ldots,a_1$, so their joint probability is $\pi_cP_{-t_k}(c,a_k)\prod_{i=1}^{k-1}P_{t_{i+1}-t_i}(a_{i+1},a_i)$. Applying $\pi_aP_u(a,b)=\pi_bP_u(b,a)$ first to the factor from $0$ to $t_k$ and then successively to the remaining factors gives $\pi_{a_1}\prod_{i=1}^{k-1}P_{t_{i+1}-t_i}(a_i,a_{i+1})P_{-t_k}(a_k,c)$. Summing over $c$ gives the negative-time marginal; $k=1$ is included by the empty-product convention. If a list also has nonnegative times, conditional independence of the halves given $X_0=c$ multiplies this negative-side factor by $P_{t_{k+1}}(c,a_{k+1})\prod_{i=k+1}^{n-1}P_{t_{i+1}-t_i}(a_i,a_{i+1})$. For adjacent times $t_k<0\le t_{k+1}$ around zero, summing over $c$ joins the two factors because $\sum_cP_{-t_k}(a_k,c)P_{t_{k+1}}(c,a_{k+1})=P_{t_{k+1}-t_k}(a_k,a_{k+1})$, by the semigroup law. Thus in every case the joint probability is $\pi_{a_1}\prod_{i=1}^{n-1}P_{t_{i+1}-t_i}(a_i,a_{i+1})$, which depends only on time differences. For each $a\in E$, the set $\{(s,\omega):Z_s^\pm(\omega)=a\}$ equals $\bigcup_{n\ge0}\{(s,\omega):S_n^\pm(\omega)\le s<S_{n+1}^\pm(\omega),\ Y_n^\pm(\omega)=a\}$; every set in this union is product-measurable because $S_n^\pm$ and $Y_n^\pm$ are measurable. Since $E$ is finite, both half-processes are jointly measurable, and composing the negative half with $t\mapsto -t$ and gluing on the measurable half-lines preserves joint measurability. Step 2.1 gives finitely many jumps on every bounded interval on both halves, so the glued process has the stated local path property. [A1, F1, F2, step 2.1, step 3.1] ∎
