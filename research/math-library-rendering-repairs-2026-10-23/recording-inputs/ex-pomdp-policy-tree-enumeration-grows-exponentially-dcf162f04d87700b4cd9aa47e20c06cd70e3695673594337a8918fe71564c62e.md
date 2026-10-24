---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-pomdp-policy-tree-enumeration-grows-exponentially.json
  precheck: pass
id: ex-pomdp-policy-tree-enumeration-grows-exponentially
kind: example
title: "A finite POMDP family has exponentially many witnessed alpha vectors"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 6
deps:
  - def-finite-pomdp
  - def-belief-state-and-bayes-filter
  - alg-pomdp-witness-backup
  - thm-finite-horizon-pomdp-piecewise-linear-convex-value
  - def-finite-cardinality
  - def-nat-power
  - thm-product-rule
  - thm-cardinality-of-a-set-of-functions
  - def-finite-sum
  - lem-finite-sum-laws
  - def-natural-numbers
  - def-nat-order
  - def-nat-addition
  - lem-nat-order-is-membership
  - lem-nat-transitive-irreflexive
  - thm-induction-principle
  - lem-cardinality-of-finite-natural-initial-segment
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references: []
---

## Example

For each $n\in\mathbb N$ with $0<n$, let $I_n=\{t\in\mathbb N:t<n\}$ be a clock set and let a hidden binary string be a function $x:I_n\to\{0,1\}$. Write $\sigma(t)$ for the natural successor. Put $S=\{(x,t):x\in\{0,1\}^{I_n},\ t\in I_n\}$, $A=\{0,1\}$, $\Omega=\{o\}$, and reward alphabet $\mathcal R=\{0,1\}$. For $t\in I_n$, define $t^+=\sigma(t)$ if $\sigma(t)\in I_n$, and $t^+=t$ otherwise. Under action $a$ at $(x,t)$, the joint next-state/reward law assigns probability one to next state $(x,t^+)$ and reward $1_{\{a=x(t)\}}$; the sole observation $o$ occurs with probability one. Let $x^\circ:I_n\to\{0,1\}$ be the constant-zero string, take $b_0=\delta_{(x^\circ,0)}$, and set horizon $H=n$ and $\gamma=1$. There are exactly $2^n$ depth-$n$ policy trees, one for each binary action string $y:I_n\to\{0,1\}$. The alpha vector of tree $y$, evaluated at state $(x,0)$, is $\sum_{t<n}1_{\{x(t)=y(t)\}}$. At the point-mass belief $\delta_{(y,0)}$ this vector has value $n$, while every distinct action string has value strictly less than $n$. Therefore all $2^n$ alpha vectors are distinct and each has a witness belief in $\Delta(S)$, which need not be reachable from the specified initial belief; the family has state count $n2^n$.

## Facts & Assumptions

**Given:** A natural number $n$ with $0<n$ and the finite POMDP described in the example, with initial belief $\delta_{(x^\circ,0)}$, horizon $n$, and discount $1$.

[F1] A finite POMDP has finite state, action, and observation sets, transition and observation probability laws, an initial belief, and a finite-horizon objective. [[def-finite-pomdp]]

[F2] A depth-zero tree has vector $0$; a depth-$(h+1)$ tree consists of a root action and one subtree per observation, with vector given by the finite transition-observation backup. [[alg-pomdp-witness-backup]]

[F3] The value at horizon $H$ is the maximum of $b\cdot\alpha$ over the backup's vectors, and a vector is witnessed when it attains that maximum at some belief. [[thm-finite-horizon-pomdp-piecewise-linear-convex-value]]

[F4] For finite sets, the function set $X^Y$ is finite of cardinality $|X|^{|Y|}$. [[thm-cardinality-of-a-set-of-functions]]

[F5] Finite Cartesian products are finite and their cardinalities multiply; cardinality is the natural number equinumerous with the set. [[thm-product-rule]], [[def-finite-cardinality]]

[F6] Natural powers start at $m^0=1$ and satisfy $m^{h+1}=m^h m$. [[def-nat-power]]

[F7] Finite sums over an initial segment are recursively defined and preserve termwise inequalities. [[def-finite-sum]], [[lem-finite-sum-laws]]

[F8] A belief is a probability vector on $S$, so the point mass at any state of $S$ is a belief. [[def-belief-state-and-bayes-filter]]

[F9] In the von Neumann naturals, $0\in n$ when $n\ne0$, $k\in\sigma(k)$, every natural number is transitive, and $\sigma$ is the successor used by the clock. [[def-natural-numbers]], [[lem-nat-order-is-membership]], [[lem-nat-transitive-irreflexive]]

[F10] The clock set $I_n=\{t\in\mathbb N:t<n\}$ equals the von Neumann natural $n$, so it is finite and has cardinality $n$. [[lem-cardinality-of-finite-natural-initial-segment]]

[F11] If a property holds at $0$ and its truth at $k$ implies its truth at $\sigma(k)$ for every $k\in\mathbb N$, it holds for every natural number. [[thm-induction-principle]]

## Verification

1.1 By [F10], $I_n$ is finite with cardinality $n$. Hence the function set $\{0,1\}^{I_n}$ has cardinality $2^n$ by [F4] and [F6], and the product rule [F5] gives $|S|=n2^n$. Since $0<n$, [F9] gives $0\in I_n$, so $(x^\circ,0)\in S$ and its point mass is a probability distribution. The action, observation, and reward sets are finite and nonempty. For each state and action the specified joint mass assigns one next-state/reward pair probability one, and the singleton observation law has total mass one; thus the data satisfy [F1]. [given, F1, F4, F5, F6, F9, F10]

1.2 With one observation, the tree-count recurrence in [F3] gives $N_0=1$ and $N_{h+1}=2N_h$: each tree is determined by its root action and its unique observation continuation. [given, F3]

2.1 Induction using [F11] and the recursion for powers [F6] gives $N_h=2^h$ for every $h$: the base is $N_0=1=2^0$, and $N_{h+1}=2N_h=2\cdot2^h=2^{h+1}$. A depth-$n$ tree with one observation is exactly an action string $y:I_n\to\{0,1\}$, so there are exactly $2^n$ such trees by [F4]. [step 1.2, F4, F6, F11, induction, algebra]

2.2 Let $c_k$ be the clock coordinate after $k$ transitions from the initial clock $0$. We prove by induction that $k\in I_n$ implies $c_k=k$. At $k=0$ this holds. If $\sigma(k)\in I_n$, then $k\in\sigma(k)$ by [F9], and transitivity of the natural $n=I_n$ from [F10] gives $k\in I_n$; the induction hypothesis gives $c_k=k$. Since $\sigma(k)\in I_n$, the transition rule advances to $c_{\sigma(k)}=\sigma(k)$. If $\sigma(k)\notin I_n$, the successor case of the implication is vacuous. The induction principle [F11] proves the claim for every $k$. [given, step 1.1, F9, F10, F11, induction]

3.1 Therefore, at each decision time $t\in I_n$ from initial state $(x,0)$, the hidden state is $(x,t)$. Under the tree $y$ its reward at that time is $1_{\{x(t)=y(t)\}}$, and the finite horizon sum with $\gamma=1$ gives $\alpha_y(x,0)=\sum_{t<n}1_{\{x(t)=y(t)\}}$. [given, step 2.2, F1, F2, F7]

4.1 For each string $y$, the point mass $\delta_{(y,0)}$ is a belief by [F8], and [F3] evaluates its tree there as $\alpha_y(y,0)=n$. If $z\ne y$, some coordinate $t$ differs, so the sum for $\alpha_z(y,0)$ has at least one zero term and all other terms at most one; its value is strictly less than $n$. Thus $y$ is the unique maximizing tree at $\delta_{(y,0)}$, so its vector is witnessed. If $y\ne z$, their values at $\delta_{(y,0)}$ differ, so their vectors are distinct. By step 2.1 there are $2^n$ strings; hence the example has exactly $2^n$ distinct witnessed vectors. [given, step 2.1, step 3.1, F3, F7, F8, algebra] ∎

## Remarks

For $n=2$, the four policy trees below are chains: each action has just the one observation continuation $o$. The leaf denotes the depth-zero continuation, not another action. Under a hidden string $x$, the two decisions occur at $(x,0)$ and $(x,1)$ and earn rewards $1_{\{x(0)=y(0)\}}$ and $1_{\{x(1)=y(1)\}}$. The bottom row gives the value of each tree at the single belief $b=\delta_{(01,0)}$; the tree $y=01$ uniquely attains $2$.

```tikz
\begin{tikzpicture}[x=2.4cm,y=1cm]
\node at (0,0) {$y=00$};
\node at (1,0) {$y=01$};
\node at (2,0) {$y=10$};
\node at (3,0) {$y=11$};
\node[draw,rounded corners] (a00) at (0,-0.7) {$a=0$};
\node[draw,rounded corners] (a01) at (1,-0.7) {$a=0$};
\node[draw,rounded corners] (a10) at (2,-0.7) {$a=1$};
\node[draw,rounded corners] (a11) at (3,-0.7) {$a=1$};
\node[draw,rounded corners] (b00) at (0,-1.9) {$a=0$};
\node[draw,rounded corners] (b01) at (1,-1.9) {$a=1$};
\node[draw,rounded corners] (b10) at (2,-1.9) {$a=0$};
\node[draw,rounded corners] (b11) at (3,-1.9) {$a=1$};
\node (c00) at (0,-3.1) {leaf};
\node (c01) at (1,-3.1) {leaf};
\node (c10) at (2,-3.1) {leaf};
\node (c11) at (3,-3.1) {leaf};
\draw[->] (a00) -- node[right] {$o$} (b00);
\draw[->] (a01) -- node[right] {$o$} (b01);
\draw[->] (a10) -- node[right] {$o$} (b10);
\draw[->] (a11) -- node[right] {$o$} (b11);
\draw[->] (b00) -- node[right] {$o$} (c00);
\draw[->] (b01) -- node[right] {$o$} (c01);
\draw[->] (b10) -- node[right] {$o$} (c10);
\draw[->] (b11) -- node[right] {$o$} (c11);
\node at (0,-3.8) {$b\cdot\alpha_{00}=1$};
\node at (1,-3.8) {$b\cdot\alpha_{01}=2$};
\node at (2,-3.8) {$b\cdot\alpha_{10}=0$};
\node at (3,-3.8) {$b\cdot\alpha_{11}=1$};
\end{tikzpicture}
```

This is only the $n=2$ slice. In general the witness for tree $y$ is $\delta_{(y,0)}$; these beliefs need not be reachable from the specified initial belief. The verification above proves the general count and witness property independently of the figure.
