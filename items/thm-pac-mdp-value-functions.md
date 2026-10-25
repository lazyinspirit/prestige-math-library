---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/thm-pac-mdp-value-functions.json
  precheck: pass
id: thm-pac-mdp-value-functions
kind: theorem
title: "Well-defined discounted values and optimal Bellman fixed points"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-pac-mdp-bounded-reward-model
  - def-axiom-of-choice
  - thm-ionescu-tulcea-construction-of-a-markov-chain
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - thm-change-of-variables-for-expectation
  - cor-expectation-agrees-with-the-finite-weighted-sum
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable
  - thm-monotone-convergence-for-the-integral
  - thm-geometric-series
  - thm-reals-cauchy-complete
  - def-countable
  - lem-finite-set-has-max
  - lem-finite-sum-laws
  - lem-triangle-inequality-finite
  - lem-finite-choice
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Alexander L. Strehl, Lihong Li, and Michael L. Littman, Reinforcement Learning in Finite MDPs: PAC Analysis"
      url: "https://www.jmlr.org/papers/volume10/strehl09a/strehl09a.pdf"
      locator: "§1.2, PDF pp. 4–5 (printed pp. 2416–2417)."
    - title: "Csaba Szepesvári, Algorithms for Reinforcement Learning"
      url: "https://old.sztaki.hu/~szcsaba/papers/RLAlgsInMDPs-lecture.pdf"
      locator: "§§2.2–2.4 and Appendix A.1–A.2, PDF pp. 8–16 and 74–83."
---

## Statement

Assume the Axiom of Choice. In every bounded-reward finite discounted Markov decision process with nonempty finite state set $S$, nonempty finite action sets $A(s)$, and $0\le\gamma<1$, the trajectory law of every history-dependent behavior from every starting state exists. Its discounted return is measurable, integrable, and between $0$ and $1/(1-\gamma)$. For each stationary policy $\pi$, its value $V^\pi$ satisfies its Bellman equation. The optimality operator

$$T^*V(s)=\max_{a\in A(s)}\left[r(s,a)+\gamma\sum_{s'\in S}P(s'\mid s,a)V(s')\right]$$

is a $\gamma$ contraction in the supremum norm, meaning $\|T^*V-T^*W\|_\infty\le\gamma\|V-W\|_\infty$ for all $V,W:S\to\mathbb R$, where $\|V\|_\infty=\max_{s\in S}|V(s)|$, and has a unique fixed point $V^*$. This fixed point is the supremum of the values of all history-dependent behaviors and is attained by a deterministic stationary greedy policy. The optimal action value is

$$Q^*(s,a)=r(s,a)+\gamma\sum_{s'\in S}P(s'\mid s,a)V^*(s'),$$

and $V^*(s)=\max_{a\in A(s)}Q^*(s,a)$ with $Q^*(s,a)\ge0$.

## Statement references

[[def-pac-mdp-bounded-reward-model|The finite state/action model, joint transition-reward kernel, and discounted interaction convention]].

[[def-axiom-of-choice|The Axiom of Choice, required by the countable path-law construction]].

[[thm-ionescu-tulcea-construction-of-a-markov-chain|History-dependent probability kernels determine a unique infinite path law under AC]].

[Strehl, Li, and Littman, *Reinforcement Learning in Finite MDPs: PAC Analysis*](https://www.jmlr.org/papers/volume10/strehl09a/strehl09a.pdf).

[Szepesvári, *Algorithms for Reinforcement Learning*](https://old.sztaki.hu/~szcsaba/papers/RLAlgsInMDPs-lecture.pdf).

## Facts & Assumptions

**Given:** A nonempty finite state set $S$, nonempty finite action sets $A(s)$, a probability kernel $K$ on $S\times[0,1]$ for each admissible pair, and a discount $0\le\gamma<1$.

[F1] [[def-pac-mdp-bounded-reward-model]] supplies $0\le R_{t+1}\le1$, state-transition probabilities $P(\cdot\mid s,a)$ summing to one, expected rewards $r(s,a)\in[0,1]$, and measurable history-dependent behavior kernels.

[A1] [[def-axiom-of-choice]] is assumed for the infinite path-law existence theorem; the Bellman fixed-point and finite maximization arguments below use no arbitrary-index choice.

[F2] [[thm-ionescu-tulcea-construction-of-a-markov-chain]]: under AC, a starting law and a sequence of history-dependent probability kernels determine a probability law with the specified finite-prefix laws.

[F3] [[thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]]: a pointwise limit of measurable real functions is measurable. [[def-expectation-of-a-nonnegative-or-integrable-random-variable]] defines expectation as the corresponding Lebesgue integral.

[F4] [[thm-geometric-series]]: for $0\le\gamma<1$, $\sum_{j=0}^{n-1}\gamma^j\le1/(1-\gamma)$ and $\sum_{j=n}^{\infty}\gamma^j=\gamma^n/(1-\gamma)$.

[F5] [[thm-monotone-convergence-for-the-integral]]: an increasing sequence of nonnegative measurable functions has integrals increasing to the integral of its pointwise limit.

[F6] [[lem-finite-set-has-max]]: every nonempty finite set of real action values has an attained maximum.

[F7] [[lem-finite-sum-laws]] and [[lem-triangle-inequality-finite]]: finite sums preserve termwise inequalities and scaling and satisfy the triangle inequality.

[F8] [[thm-reals-cauchy-complete]]: every Cauchy sequence of real numbers has a real limit.

[F9] [[def-countable]] defines a finite set as one bijective with a natural number, and [[lem-finite-choice]] constructs a choice function for any natural-number-indexed finite family of nonempty sets without AC.

[F10] [[thm-linearity-of-the-lebesgue-integral-on-l-one]], [[thm-change-of-variables-for-expectation]], [[cor-expectation-agrees-with-the-finite-weighted-sum]], and [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]: for every admissible pair and every real vector $v:S\to\mathbb R$, the bounded terms are integrable, inequalities between nonnegative integrands pass through the integral, and
$$\int_{S\times[0,1]}\bigl(\rho+\gamma v(s')\bigr)\,K(ds',d\rho\mid s,a)=r(s,a)+\gamma\sum_{s'\in S}P(s'\mid s,a)v(s').$$
The integral splits by linearity; the second term is the expectation of the finite-valued next-state function, evaluated using its marginal law $P(\cdot\mid s,a)$ and the finite weighted-sum formula. The same formula evaluates a probability distribution on any finite action set.

## Proof

1.1 Fix a starting state and a history-dependent behavior, and write $D=\{(s,a):a\in A(s)\}$ as in [F1]. For a history $h_t$ ending at state $s$ and a measurable set $E\subseteq D\times S\times[0,1]$, define $\Lambda_t(h_t,E)=\sum_{a\in A(s)}\pi_t(a\mid h_t)\int 1_E((s,a),s',\rho)K(ds',d\rho\mid s,a)$. For each fixed $a$, the integrand section is measurable by the product sigma-algebra, and the finite weighted sum is measurable in $h_t$ because $\pi_t$ is a probability kernel; its total mass is $\sum_a\pi_t(a\mid h_t)=1$. Thus $\Lambda_t$ is a probability kernel from histories to the fixed space $D\times S\times[0,1]$. Applying [F2] to this sequence of history kernels and the initial point mass gives the full interaction path law. [given, F1, F2, A1, construct]

1.2 For a stationary policy $\pi$, define $T_\pi v(s)=\sum_{a\in A(s)}\pi(a\mid s)[r(s,a)+\gamma\sum_{s'}P(s'\mid s,a)v(s')]$. This is a real vector by the finite sums. For any $v,w:S\to\mathbb R$, the absolute difference of each bracketed backup is at most $\gamma\sum_{s'}P(s'\mid s,a)|v(s')-w(s')|\le\gamma\|v-w\|_\infty$. Averaging over $\pi(a\mid s)$ preserves this bound, so $\|T_\pi v-T_\pi w\|_\infty\le\gamma\|v-w\|_\infty$. [given, F1, F7, algebra]

1.3 For finite real lists $(x_a)$ and $(y_a)$, if $m=\max_a|x_a-y_a|$, then $x_a\le y_a+m$ and $y_a\le x_a+m$ for every $a$, whence $|\max_a x_a-\max_a y_a|\le m$. Applying this and [F7] to the definition of $T^*$ gives $\|T^*v-T^*w\|_\infty\le\gamma\|v-w\|_\infty$. The operator maps $[0,1/(1-\gamma)]^S$ into itself because rewards are in $[0,1]$ and transition probabilities sum to one. [F1, F6, F7, algebra]

2.1 Each reward coordinate on the product path space is measurable and lies in $[0,1]$. The finite partial discounted sums are measurable, increase pointwise, and are bounded above by $\sum_{j<n}\gamma^j\le1/(1-\gamma)$ by [F4]. Their pointwise limit is measurable by [F3] and has the same bound. By [F5] its expectation is the limit of the finite partial expectations and is finite; thus every behavior value is well-defined and lies in the stated interval. [step 1.1, F3, F4, F5]

2.2 For a stationary policy $\pi$, let $v_n^\pi(s)$ be the expected sum of its first $n$ discounted rewards from $s$, with $v_0^\pi=0$. The finite-prefix law from step 1.1 and conditioning on the first action and joint reward/next-state outcome give $v_{n+1}^\pi(s)=\sum_a\pi(a\mid s)\int[\rho+\gamma v_n^\pi(s')]K(ds',d\rho\mid s,a)$. Apply [F10] to each integral to obtain $v_{n+1}^\pi(s)=\sum_a\pi(a\mid s)[r(s,a)+\gamma\sum_{s'}P(s'\mid s,a)v_n^\pi(s')]=T_\pi v_n^\pi(s)$; the finite action distribution is evaluated by the same finite weighted-sum formula in [F10]. The joint law allows dependence between reward and next state; the integral identity does not assume independence. [given, F1, F2, step 1.1, step 1.2, F7, F10]

2.3 Start with $v_0=0$ and set $v_{n+1}=T^*v_n$. Since $0\le v_1\le1$ and $T^*$ is a $\gamma$ contraction, induction gives $\|v_{n+1}-v_n\|_\infty\le\gamma^n$. Thus for $m>n$, $\|v_m-v_n\|_\infty\le\sum_{j=n}^{m-1}\gamma^j\le\gamma^n/(1-\gamma)$; every coordinate is Cauchy and converges by [F8], uniformly because $S$ is finite. Its limit $v^*$ is a fixed point by the finite-sum/max formula and the contraction estimate. If $w^*$ were another fixed point, step 1.3 would give $\|v^*-w^*\|_\infty\le\gamma\|v^*-w^*\|_\infty$, so $v^*=w^*$. [step 1.3, F4, F8, induction, algebra]

3.1 The finite-horizon stationary-policy values converge to $V^\pi$ by step 2.1 and the geometric tail bound [F4]. Passing their finite recursions from step 2.2 to the limit is valid because each sum is finite and the maximum statewise error tends to zero; hence $T_\pi V^\pi=V^\pi$. If two fixed points existed, step 1.2 would give their distance at most $\gamma$ times itself, forcing equality. [step 2.1, step 2.2, step 1.2, F4, F7]

3.2 We prove by induction on $n$ that, from every starting history ending at state $s$, every history-dependent continuation has $n$-reward expected discounted return at most $v_n(s)$ from step 2.3. The base $v_0=0$ is the empty-horizon return. For the successor step, condition on the first chosen action and the joint next-state/reward outcome $(s',\rho)$. The induction hypothesis applies to the extended history ending at $s'$, so its continuation return is pointwise at most $v_n(s')$, even when its action rule used the observed reward $\rho$. For each first action, monotonicity of integration and [F10] bound the conditional expected total by $r(s,a)+\gamma\sum_{s'}P(s'\mid s,a)v_n(s')$. Averaging over the randomized first action by the finite weighted-sum formula in [F10] is at most its finite maximum, namely $T^*v_n(s)=v_{n+1}(s)$. Thus the claimed upper bound holds uniformly over histories and behaviors. [given, F1, F6, F7, F10, step 2.3, induction]

3.3 For any behavior, its omitted tail after $n$ rewards is at most $\gamma^n/(1-\gamma)$ by [F4]. Therefore its infinite-horizon value is at most $v_n(s)+\gamma^n/(1-\gamma)$. Letting $n\to\infty$ and using step 2.3 proves that every behavior value is at most $v^*(s)$. [step 2.1, step 2.3, F4, F5, algebra]

4.1 For each $s$, let $B_s$ be the nonempty finite set of actions attaining the maximum in $T^*v^*(s)$. By [F9] and the finiteness of $S$, choose one member of each $B_s$ without AC; these choices define a deterministic stationary policy $\pi^*$. It satisfies $T_{\pi^*}v^*=T^*v^*=v^*$, so step 3.1 and uniqueness imply $V^{\pi^*}=v^*$. Together with step 3.3 this proves $v^*=V^*$ and attainment. After forcing a first action $a$ and then following $\pi^*$, the expected return is $r(s,a)+\gamma\sum_{s'}P(s'\mid s,a)V^*(s')$. Any other continuation after that first action is bounded by $V^*(s')$ at each next state by step 3.3, so this is the maximal value with first action fixed to $a$, namely $Q^*(s,a)$. Its maximum over $a$ is $V^*(s)$, and it is nonnegative by [F1]. AC is used only for the path law in step 1.1. [step 1.1, step 2.3, step 3.1, step 3.3, F1, F6, F9, algebra] ∎

## Remarks

For a fixed state $s$, the Bellman backup first averages next-state values separately for every admissible action, then maximizes the resulting action values. Write $q_V(s,a)=r(s,a)+\gamma\sum_{s'\in S}P(s'\mid s,a)V(s')$ for the action backup of an arbitrary real vector $V:S\to\mathbb R$.

```tikz
\begin{tikzpicture}[>=stealth]
\node[draw,rounded corners,inner sep=8pt] (input) at (0,3.6) {$V:S\to\mathbb R$};
\node[draw,rounded corners,inner sep=10pt] (backup) at (0,1.8) {$\bigl(q_V(s,a)\bigr)_{a\in A(s)},\qquad q_V(s,a)=r(s,a)+\gamma\sum_{s'\in S}P(s'\mid s,a)V(s')$};
\node[draw,rounded corners,inner sep=8pt] (output) at (0,0) {$T^*V(s)=\max_{a\in A(s)}q_V(s,a)$};
\draw[->] (input) -- node[right] {average for each action} (backup);
\draw[->] (backup) -- node[right] {maximize over actions} (output);
\end{tikzpicture}
```

At the fixed point $V=V^*$, these action backups are $Q^*(s,a)$ and the output is $V^*(s)$. Choosing any maximizing action at each state gives the deterministic stationary greedy policy from step 4.1. The averaging uses the transition marginal of the joint reward/next-state law; it does not assume independence of those coordinates. The proof above is independent of this illustration.

