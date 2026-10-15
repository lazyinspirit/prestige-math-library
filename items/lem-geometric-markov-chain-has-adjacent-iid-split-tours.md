---
dependency_level: 3
id: lem-geometric-markov-chain-has-adjacent-iid-split-tours
kind: lemma
title: Geometric Markov chains admit delayed adjacent-iid split tours with spare moments
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - def-axiom-of-choice
  - def-standard-borel-space
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-iterated-transition-kernels
  - def-phi-irreducible-chain
  - lem-phi-irreducible-chain-has-small-set
  - lem-geometric-split-renewal-gives-integrable-hitting-time
  - thm-standard-borel-spaces-admit-bimeasurable-real-codings
  - lem-finite-products-of-standard-borel-spaces-are-standard-borel
  - thm-disintegration-of-a-joint-law-on-standard-borel-spaces
  - thm-dynkin-pi-lambda
  - thm-measurability-of-integration-against-a-kernel
  - thm-ionescu-tulcea-construction-of-a-markov-chain
  - cor-canonical-markov-chain-on-path-space
  - thm-countable-product-of-probability-spaces
  - cor-countable-products-and-g-delta-subspaces-of-polish-spaces-are-polish
  - thm-holder-inequality-for-integrals
  - thm-minkowski-inequality-for-integrals
  - thm-monotone-convergence-for-the-integral
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: Meyn and Tweedie, Markov Chains and Stochastic Stability, splitting and regeneration; full multistep observation-word construction supplied locally
      url: https://probability.ca/MT/BOOK.pdf
    - title: Bednorz and Latuszynski, A few remarks on Fixed-Width Output Analysis for Markov Chain Monte Carlo, tour-moment argument
      url: https://warwick.ac.uk/fac/sci/statistics/staff/academic-research/latuszynski/remarks2.pdf
axiom_use: AC is inherited from small sets, canonical path laws, standard-Borel coding and disintegration, iid products, and probability-kernel extensions.
---

## Statement

Assume AC. Let $P$ be a probability kernel on a nonempty standard-Borel space $(S,\mathcal S)$, with invariant probability $\pi$, finite measurable $M:S\to[0,\infty)$ and $0<r<1$ such that
$$\|P^n(x,\cdot)-\pi\|_{\mathrm{TV}}\le M(x)r^n\quad(x\in S,\ n\ge1).$$
Let $f:S\to\mathbb R$ be finite measurable, with $\pi(f)=0$ and $\pi(|f|^v)<\infty$ for some $v>1$. For every initial law, on an extension preserving the given chain there are an integer $m\ge1$, an almost surely finite delay $D\in m\mathbb N$, a standard-Borel seed space $E$, iid seeds $(U_j)_{j\ge0}$, and measurable finite-word and length functions $W:E^2\to\bigsqcup_{k\ge1}S^k$ and $L:E\to m\mathbb N$ with the following properties.

Put $T_0=D$ and $T_{j+1}=T_j+L(U_j)$. Almost surely, simultaneously for all $j\ge0$,
$$\bigl(X_{T_j},\ldots,X_{T_{j+1}-1}\bigr)=W(U_j,U_{j+1}).$$
Write $L_j=L(U_j)$, $Z_j=\sum_{t=T_j}^{T_{j+1}-1}f(X_t)$, and $H_j=\sum_{t=T_j}^{T_{j+1}-1}|f(X_t)|$. Then $Z_j=z(U_j,U_{j+1})$ and $H_j=h(U_j,U_{j+1})$ for measurable functions $z,h$, and
$$\mathbb E e^{aL_0}<\infty\text{ for some }a>0,\qquad 0<\mu_L:=\mathbb EL_0<\infty,$$
$$\mathbb EZ_0=0,\qquad \mathbb EH_0^q<\infty\quad(1\le q<v).$$
For every nonnegative measurable $b:S\to[0,\infty]$ the full-tour occupation identity is
$$\mathbb E\sum_{t=T_0}^{T_1-1}b(X_t)=\mu_L\pi(b).$$
For each specified initial law, the same $m$, iid seed law, $W,L$ and post-delay tour law can be used also for the invariant initial law $\pi$; only the finite initial segment and coupling change.

In particular $(L_j-\mu_L,Z_j)$ is an adjacent-iid centered vector sequence, while the lengths themselves are iid. Full tour words or rewards are not asserted to be iid. No moment of $D$ or of the initial finite prefix is required, and the construction uses a useful multistep split chosen from $P$ rather than requiring any supplied one-step minorization to have positive stationary mass.

## Facts & Assumptions

**Given:** AC and the standard-Borel chain, geometric bound, invariant law, and finite centered observable in the Statement.

[A1] [[def-axiom-of-choice]]: AC supplies the inherited small-set, path-law, coding, product and disintegration conventions.

[F1] [[def-phi-irreducible-chain]] and [[lem-phi-irreducible-chain-has-small-set]]: on a countably generated irreducible state space there is a positive-measure $m$-small set, with a minorizing probability giving that set positive mass.

[F2] [[lem-geometric-split-renewal-gives-integrable-hitting-time]]: under its scalar geometric-return-probability hypothesis the explicitly specified split atom has an exponential positive return moment and finite mean.

[F3] [[thm-disintegration-of-a-joint-law-on-standard-borel-spaces]] and [[lem-finite-products-of-standard-borel-spaces-are-standard-borel]]: finite standard-Borel joint laws have measurable conditional probability kernels.

[F4] [[thm-standard-borel-spaces-admit-bimeasurable-real-codings]], [[def-standard-borel-space]], and [[cor-countable-products-and-g-delta-subspaces-of-polish-spaces-are-polish]]: standard-Borel spaces have Borel real codings; countable sequences of such coordinates and finite words are standard Borel through Borel subsets of the Polish cube.

[F5] [[cor-canonical-markov-chain-on-path-space]], [[thm-countable-product-of-probability-spaces]], and [[thm-ionescu-tulcea-construction-of-a-markov-chain]]: canonical kernel paths, iid products and extensions by specified kernels exist under AC.

[F6] [[thm-measurability-of-integration-against-a-kernel]], [[thm-monotone-convergence-for-the-integral]], and [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: the kernel expectations and nonnegative sums below are measurable, and increasing limits pass through them.

[F7] [[thm-holder-inequality-for-integrals]] and [[thm-minkowski-inequality-for-integrals]]: the indicated Holder and finite-sum $L^q$ bounds hold for $q\ge1$.

[F8] [[def-invariant-and-stationary-distribution-for-a-markov-kernel]] and [[def-iterated-transition-kernels]]: $\pi P=\pi$ and iterated transitions are successive kernel integrations; consequently $\pi P^k=\pi$ for every $k$ by induction.

[F9] [[thm-dynkin-pi-lambda]]: equality of probabilities or kernel identities extends from a countable generating algebra to all measurable events.

## Proof

**Given:** The hypotheses in the Statement and AC [A1].

1.1 For every $\pi$-positive measurable set $A$, the geometric bound implies $P^n(x,A)>0$ for all sufficiently large $n$, for each $x$. Thus $P$ is $\pi$-irreducible. By [F4], a standard-Borel space has a countable generating algebra, so [F1] gives $m\ge1$, $D_0$ with $\pi(D_0)>0$, a probability $\nu_0$ with $\nu_0(D_0)>0$, and $\epsilon_0>0$ such that $P^m(x,\cdot)\ge\epsilon_0\nu_0$ on $D_0$. Choose an integer $K$ so $C=D_0\cap\{M\le K\}$ is positive under both $\pi$ and $\nu_0$, and restrict $\nu_0$ to $\{M\le L\}$ for a finite integer $L\ge K$, then normalize. Decrease the minorization constant to $0<\epsilon<1$. With $Q=P^m$, the resulting probability $\nu$ satisfies $Q(x,\cdot)\ge\epsilon\nu$ on $C$, $\nu(M)\le L$ and $\pi(C)>0$. [A1, F1, F4, given, choose, construct]

1.2 The bridge kernel has a jointly measurable uniform sampler. Code its standard-Borel word space into a Borel subset of $[0,1]$ by [F4]. Its distribution-function evaluations at rational cuts are measurable. The generalized inverse, defined by an infimum over those cuts, is jointly measurable in the endpoints and a uniform variable and has the coded probability law. Its output lies in the coded image almost surely for each endpoint; use a fixed valid word on the Borel complement and decode. For completeness, the word and sequence spaces here are standard Borel: code $S$ into a Borel subset $A\subseteq[0,1]$; $A^{\mathbb N}$ is Borel in the Polish cube by coordinate tests, and finite words are the Borel union of length-marked sequences with fixed trailing coordinates. The extra uniform sequences have the same property. [A1, F3, F4, F6, construct]

2.1 Put $p=\epsilon\pi(C)>0$. Invariance [F8] gives $\pi\ge p\nu$. The geometric bound gives $|\nu Q^n(C)-\pi(C)|\le L(r^m)^n$ for $n\ge1$; for $n=0$ use $1$. Thus [F2] applies to this exact split. Its atom $\alpha=C\times\{1\}$ has a positive return time $\tau$ with $\mathbb E b^\tau<\infty$ for some $b>1$. The transition out of $\alpha$ draws the next skeleton state from $\nu$ independently of the previous state, and assigns its fresh flag with success probability $\epsilon1_C$. [F2, F8, step 1.1, given]

3.1 Define the substochastic failure kernel $K_0(x,dy)=Q(x,dy)-\epsilon1_C(x)\nu(dy)$, and let $a(x)$ be the probability of never obtaining a successful split coin, starting with a fresh coin at $x$. This is measurable by [F5] and [F6], lies in $[0,1]$, and satisfies $a=K_0a=Qa-\epsilon1_C\nu(a)$. Integrate against $\pi$ to get $p\nu(a)=0$, hence $\nu(a)=0$. Therefore $a=Qa$ at every state and $a=Q^na$ for all $n$. Convergence of $Q^n(x,\cdot)$ to $\pi$ implies $a(x)=\pi(a)$ for every $x$, since for a measurable $[0,1]$-valued function its expectation difference is bounded by total variation, by integrating level-set indicators. Integrating this constant against $\nu$ makes it zero. Thus every state and every initial law has a finite first success; its post-transition calendar time is an almost surely finite $D\in m\mathbb N$. [F5, F6, F8, step 1.1, step 2.1, given, algebra]

4.1 A skeleton core starts from the $\nu$ endpoint just after a success and includes the successive states through the next successful coin, excluding that successful transition's endpoint. A core of length $\ell$ has probability measure $\nu(dx_0)\prod_{i=0}^{\ell-2}K_0(x_i,dx_{i+1})\,\epsilon1_C(x_{\ell-1}).$ The sum over $\ell\ge1$ has mass one by step 3.1. Its length has the law of $\tau$ in step 2.1: starting in the split atom, one transition draws its initial $\nu$ state, and the next atom visit occurs at precisely that core's inclusive coin count. Hence its length has an exponential moment. Taking iid copies of this core measure supplies all post-success cores; the first state of the next copy supplies the independent $\nu$ endpoint of the preceding successful transition. Multiplying these core kernels reconstructs the split skeleton law. The analogous initial core starts from the given initial law and ends at its first success, before the endpoint drawn from the first iid core. [F5, F6, step 2.1, step 3.1, construct]

4.2 To restore the intermediate states, choose $\rho=\tfrac12\pi+\tfrac12\sum_{k\ge0}2^{-k-1}\mu P^k$ for the given initial law $\mu$. Then $\pi,\mu\ll\rho$ and $\rho P\ll\rho$, by the null-set calculation used directly on this displayed sum. Disintegrate the intermediate word $(X_1,\ldots,X_{m-1})$ conditional on $(X_0,X_m)$ under initial law $\rho$, using [F3]; for $m=1$ take the unique empty word. Denote the kernel by $B(x,y;d\mathbf w)$. Its bridge identity holds for $\rho$-almost every starting point, simultaneously as a probability identity by [F9]. Every starting distribution encountered in a split skeleton is $\rho$-absolutely continuous: $K_0\le Q$ propagates this through failures, and $\nu\ll\pi\ll\rho$ handles successes. Both success and failure endpoint-pair measures are absolutely continuous with respect to $\rho(dx)Q(x,dy)$, because their endpoint kernels are bounded by $Q$. Thus this bridge identity holds on every transition actually sampled. [A1, F3, F6, F8, F9, step 2.1, step 3.1, construct]

5.1 Let $U_j$ consist of the $j$th iid core and an independent infinite sequence of bridge uniforms, using [F5]. For a nonterminal core transition both skeleton endpoints lie in $U_j$. For its terminal successful transition the starting endpoint lies in $U_j$ and the ending endpoint is the first state in $U_{j+1}$; use a uniform in $U_j$ for its bridge. Concatenate each transition's starting state and its $m-1$ intermediate states, excluding its endpoint. This gives a measurable finite word $W(U_j,U_{j+1})$ of length $L(U_j)=m\ell(U_j)$. Concatenate also the finite initial segment from step 4.1, with its terminal bridge ending at the first state's value in $U_0$. Success and failure endpoint kernels add to $Q$, and step 4.2's bridge kernel then restores the original $m$-step path law. Iterating these identities gives the original full $P$-chain law from $\mu$. Thus these words are the claimed delayed calendar tours in a chain copy, with rewards and absolute envelopes measurable functions of two adjacent seeds. [F5, F6, F9, step 4.1, step 4.2, step 1.2, construct]

5.2 The invariant identity is $\pi=\pi K_0+p\nu$. Iteration gives $\pi=p\sum_{j=0}^{n-1}\nu K_0^j+\pi K_0^n$. The remainder's total mass is the stationary probability of no successful coin in its first $n$ opportunities, which tends to zero by step 3.1 and monotone convergence. Therefore the potential measure $\eta=\sum_{j\ge0}\nu K_0^j$ equals $\pi/p$. It counts every core state before its fresh coin is sampled, including the state of the terminal successful coin. In particular $\mathbb E\ell=\eta(S)=1/p$ and $\mathbb EL=m/p$. [F6, F8, step 2.1, step 3.1, step 4.1, algebra]

6.1 For nonnegative measurable $b$, set $c_b(x)=\sum_{i=0}^{m-1}P^ib(x)$. The event that a skeleton state is counted in the core is determined before its fresh coin and bridge are sampled. Averaging that coin, its endpoint and bridge makes the conditional expected calendar-block cost $c_b(x)$, because their endpoint mixture is $Q$ and their restored block law is the original one. Hence [F6] and step 5.2 give $\mathbb E\sum_{t\text{ in one full tour}}b(X_t)=\eta(c_b)=\frac{\pi(c_b)}p=\frac m p\pi(b)=\mu_L\pi(b).$ This includes the cost inside the terminal successful bridge. Apply the identity to the positive and negative parts of $f$; $\pi|f|<\infty$ follows from its stated $v$th moment and [F7]. Thus $\mathbb EZ_0=0$. [F6, F7, F8, step 4.2, step 5.1, step 5.2]

6.2 By step 4.1, $\mathbb E\exp(aL)<\infty$ for $a=(\log b)/m>0$. Starting just after a success, the reconstructed infinite chain has initial law $\nu$ and its original $P$-chain marginal, by step 5.1. Since $\pi\ge p\nu$, invariance gives $\mathbb E_\nu|f(X_t)|^v\le\pi(|f|^v)/p$ at every calendar time. For $1\le q<v$, Minkowski and Holder [F7], first on finite sums, imply $\left\|\sum_{t=0}^{L-1}|f(X_t)|\right\|_q\le\left(\frac{\pi(|f|^v)}p\right)^{1/v}\sum_{t\ge0}\Pr_\nu(L>t)^{1/q-1/v}<\infty.$ The exponential length moment makes the series finite; [F6] passes through the increasing finite sums. This proves every claimed spare moment, while $|Z_0|\le H_0$. [F6, F7, F8, step 2.1, step 4.1, step 5.1]

7.1 The constructed state path, its finite delay, and its iid seed sequence have a joint law on standard-Borel spaces by the explicit countable coding in step 1.2. Disintegrate that law conditional on the full state path by [F3], and evaluate the auxiliary kernel at the actual given chain path. Extend its probability space by [F5]. The original entire process is preserved, and its joint law with the seeds and delay is the constructed one. Thus the word equalities, iid seed law, occupation identity and moment conclusions hold on this extension. The initial segment is almost surely finite by step 3.1; since $f$ is finite, its absolute reward is finite, even without an initial-law moment bound. [A1, F3, F4, F5, step 3.1, step 1.2, step 5.1, step 6.1, step 6.2]

8.1 Each length depends only on $U_j$, so the lengths are iid with positive finite mean. Each reward and envelope depends on $(U_j,U_{j+1})$, so their joint sequence with the centered lengths is adjacent-iid, with $\mathbb EZ_0=0$ and all the stated moments. Disjoint seed pairs are independent, giving one-dependence without claiming iid full tours. The same $m,C,\nu$ and core law were selected from $P,\pi,M$, and the single bridge version in step 4.2 uses a $\rho$ dominating both the specified initial law and $\pi$. Thus the same seed law and word functions work from either initial law; only the initial segment and its lifting kernel change. All properties in the Statement follow. The chosen split came from step 1.1 and never used positivity of any supplied one-step minorization, which can therefore be vacuous. [F5, step 4.2, step 5.1, step 5.2, step 6.1, step 6.2, step 7.1] ∎
