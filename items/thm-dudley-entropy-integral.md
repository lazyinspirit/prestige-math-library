---
id: thm-dudley-entropy-integral
kind: theorem
title: Dudley entropy-integral bound for sub-Gaussian processes
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 2
deps: [def-covering-packing-bracketing-number-and-metric-entropy, def-subgaussian-variable-and-vector, thm-jensen-inequality-for-expectation, cor-markov-inequality-for-random-variables, thm-monotone-convergence-for-the-integral, lem-probability-measure-basic-identities]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "David Pollard, Empirical Processes: Theory and Applications, Section 3, Lemma 3.4 and Theorem 3.5"
      url: "http://www.stat.yale.edu/~pollard/Books/Iowa/Iowa-notes.pdf"
    - title: "Jon A. Wellner, Empirical Processes: Theory and Applications, Chapter 1, §3, Corollary 3.5"
      url: "https://faculty.washington.edu/jonw/RESEARCH/TALKS/Delft/emp-proc-delft-big.pdf"
---

## Statement

Let $(T,d)$ be a nonempty pseudometric space that is totally bounded in the following sense: for every $r>0$ there is a finite set $E_r\subseteq T$ such that $T\subseteq\bigcup_{e\in E_r}\{t\in T:d(t,e)\le r\}$. Its diameter is $D:=\sup_{s,t\in T}d(s,t)<\infty$. For each $t\in T$, let $X_t$ be a real random variable. Assume the process is separable: a specified countable dense subset $T_0\subseteq T$, equipped with a fixed listing, has the property that the supremum of every process increment over $T$ equals its supremum over $T_0$ almost surely. Suppose all increments are centered and sub-Gaussian with their $d$-scale, meaning that for every $s,t\in T$ and $\lambda\in\mathbb R$,

$$\mathbb E\exp\{\lambda(X_s-X_t)\}\le\exp\{\lambda^2d(s,t)^2/2\}.$$

If

$$\int_0^D\sqrt{\log N(\epsilon,T,d)}\,d\epsilon<\infty,$$

where $N(\epsilon,T,d)$ is the least number of closed $d$-balls of radius $\epsilon$ covering $T$ ([[def-covering-packing-bracketing-number-and-metric-entropy]]), then for every $t_0\in T$,

$$\mathbb E\sup_{t\in T}|X_t-X_{t_0}|\le C\int_0^D\sqrt{\log N(\epsilon,T,d)}\,d\epsilon$$

for a universal constant $C$. If $D=0$, the integral and the supremum are both zero.

## Facts & Assumptions

**Given:** A nonempty totally bounded pseudometric space $(T,d)$, a separable real process $(X_t)_{t\in T}$ with centered sub-Gaussian increments whose MGF proxy is $d(s,t)^2$, and a finite entropy integral.

[F1] [[def-covering-packing-bracketing-number-and-metric-entropy]]: $N(\epsilon,T,d)$ is the least finite cover size with centers in the class and covering radius $\epsilon$.

[F2] [[def-subgaussian-variable-and-vector]]: a centered real random variable $Y$ has sub-Gaussian proxy $\sigma^2$ when $\mathbb E e^{\lambda Y}\le e^{\lambda^2\sigma^2/2}$ for every real $\lambda$.

[F3] [[thm-jensen-inequality-for-expectation]]: for an integrable random variable $Y$ and convex $\varphi$ with integrable or nonnegative $\varphi(Y)$, $\varphi(EY)\le E\varphi(Y)$.

[F4] [[cor-markov-inequality-for-random-variables]]: for nonnegative $Y$ and $a>0$, $P(Y\ge a)\le EY/a$.

[F5] [[thm-monotone-convergence-for-the-integral]]: increasing nonnegative limits pass through the integral.

[F6] [[lem-probability-measure-basic-identities]]: countable unions of null events are null.

## Proof

**Given:** The objects and assumptions in the statement.

1.1 First derive a finite-maximum estimate. If $Y_1,\ldots,Y_m$ are centered and each has sub-Gaussian proxy at most $s^2$, then for $\lambda>0$, $\mathbb E e^{\lambda\max_j|Y_j|}\le\sum_{j=1}^m(\mathbb Ee^{\lambda Y_j}+\mathbb Ee^{-\lambda Y_j})\le2m e^{\lambda^2s^2/2}.$ By [F3], $\mathbb E\max_j|Y_j|\le\lambda^{-1}\log(2m)+\lambda s^2/2$. For $s>0$, choosing $\lambda=\sqrt{2\log(2m)}/s$ gives $\mathbb E\max_j|Y_j|\le s\sqrt{2\log(2m)}$; for $s=0$, the proxy bound forces every $Y_j=0$ almost surely by [F4] applied to $e^{\pm\lambda Y_j}$ and letting $\lambda\to\infty$. [F2, F3, F4, given, algebra]

2.1 If $D=0$, every pair in $T$ has distance zero. The proxy-zero case of step 1.1 applied to each increment, together with separability and [F6] for the countable intersection of probability-one events, makes the supremum zero. Assume $D>0$. Fix $k\ge1$ and put $\epsilon_k=2^{-k}D$. Total boundedness gives a finite cover of $T$ by $N(\epsilon_k/4,T,d)$ closed balls of radius $\epsilon_k/4$. Approximate each center by a point of the dense set $T_0$ within $\epsilon_k/4$ to obtain a cover of $T$ by the same number of balls of radius $\epsilon_k/2$. Since the specified countable dense set is listed, choose the first finite tuple under its induced enumeration that is an $\epsilon_k$-net and has cardinality at most this cover size; such a tuple exists by the construction. Denote it by $T_k$. For each $t$, choose the least-index point $\pi_k(t)\in T_k$ within $\epsilon_k$. These canonical choices across scales require no choice axiom. Put $T_0^{(0)}=\{t_0\}$ and $\pi_0(t)=t_0$. [F1, F6, step 1.1, given, construct]

2.2 For a finite subset $A\subset T_0$, telescope $X_t-X_{t_0}$ through $\pi_1(t),\ldots,\pi_m(t)$ for every $t\in A$. At level $1$ there are at most $|T_1|$ increments, each with proxy at most $D^2$; for $k\ge2$ there are at most $|T_k||T_{k-1}|$ increments, each with proxy at most $(\epsilon_k+\epsilon_{k-1})^2=(3\epsilon_k)^2$. Applying step 1.1 to the finite set of increments at each level, and the triangle inequality for their maxima, yields $\mathbb E\max_{t\in A}|X_{\pi_m(t)}-X_{t_0}|\le C_1\sum_{k=1}^m\epsilon_k\sqrt{1+\log N(\epsilon_k/4,T,d)}$ for a universal $C_1$; the $k=1$ term is absorbed using $\epsilon_1=D/2$ and $N(\epsilon_1/4)\ge1$. [F1, step 1.1, algebra]

3.1 The residual maximum over $A$ has expectation at most $\epsilon_m\sqrt{2\log(2|A|)}$ by step 1.1, since $d(t,\pi_m(t))\le\epsilon_m$. Letting $m\to\infty$ for this fixed finite $A$ removes the residual. The dyadic sum in step 2.2 is bounded by a universal multiple of the entropy integral: on each interval $[\epsilon_k/8,\epsilon_k/4]$, monotonicity of $N$ makes the integral at least $(\epsilon_k/8)\sqrt{\log N(\epsilon_k/4,T,d)}$. Also, for $0<\epsilon<D/2$, one ball of radius $\epsilon$ cannot cover a set of diameter $D$, so $N(\epsilon,T,d)\ge2$ and the entropy integral is at least $(D/2)\sqrt{\log2}$; this absorbs the geometric contribution from the added $1$. Hence $\mathbb E\max_{t\in A}|X_t-X_{t_0}|\le C\int_0^D\sqrt{\log N(\epsilon,T,d)}\,d\epsilon.$ Taking an increasing sequence of finite subsets whose union is $T_0$, [F5] and the separability assumption give the asserted supremum over $T$. [F1, F5, step 2.2, step 1.1, given, algebra] ∎
