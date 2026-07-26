---
id: lem-limsup-monotone-comparison
kind: lemma
title: "If $x_k \\le y_k$ eventually then $\\limsup x_k \\le \\limsup y_k$ and $\\liminf x_k \\le \\liminf y_k$"
status: published
origin: session
deps: [def-limsup-liminf, lem-limsup-exists, lem-extended-reals-complete, def-extended-reals, def-upper-bound, def-partial-order, def-sequence, def-nat-order, thm-nat-linear-order]
justified_by: []
aliases: []
landmark: false
short: "comparison of $\\limsup$"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Limit superior and limit inferior (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_superior_and_limit_inferior"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §2.3"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement

Let $(x_k)$ and $(y_k)$ be sequences of reals ([[def-sequence]]) with
$x_k \le y_k$ **eventually**, that is for all $k$ from some index on. Then

$$\limsup_{k} x_k \;\le\; \limsup_{k} y_k \qquad \text{and} \qquad \liminf_{k} x_k \;\le\; \liminf_{k} y_k$$

in $\overline{\mathbb{R}}$ ([[def-limsup-liminf]], [[def-extended-reals]]). No
boundedness or convergence hypothesis is placed on either sequence.

## Facts & Assumptions

**Given:** Sequences $(x_k)$ and $(y_k)$ of reals and an index $K \in \mathbb{N}$ with $x_k \le y_k$ for every $k \ge K$; the tail ranges $T_n(x) = \{x_k : k \ge n\}$ and $T_n(y)$, and the extended tail bounds $s_n(x) = \sup T_n(x)$, $i_n(x) = \inf T_n(x)$ and likewise for $y$ ([[def-limsup-liminf]]).

[L1] All tail bounds and both of $\limsup$, $\liminf$ exist in $\overline{\mathbb{R}}$; $s_n$ is the least upper bound of the tail range and $i_n$ its greatest lower bound; $\limsup_k y_k$ is the greatest lower bound of $\{s_n(y)\}$ and $\liminf_k y_k$ the least upper bound of $\{i_n(y)\}$; and $s_m \le s_n$, $i_n \le i_m$ whenever $n \le m$ ([[lem-limsup-exists]], [[lem-extended-reals-complete]], [[def-upper-bound]], [[def-partial-order]]).

[L2] The order on $\overline{\mathbb{R}}$ is transitive and restricts on $\mathbb{R}$ to the order of $\mathbb{R}$ ([[def-extended-reals]], [[def-partial-order]]).

[L3] A property holds *eventually* when it holds for all indices from some index on ([[def-sequence]]).

[L4] The order on $\mathbb{N}$ is total, so every $n$ satisfies $n \ge K$ or $n < K$, and in the latter case $n \le K$ ([[def-nat-order]], [[thm-nat-linear-order]]).

## Proof

**Proof technique:** direct.

1.1 By hypothesis fix $K \in \mathbb{N}$ with $x_k \le y_k$ for every $k \ge K$. [given, L3]

2.1 Let $n \ge K$. Every $k \ge n$ satisfies $k \ge K$, so $x_k \le y_k \le s_n(y)$, and therefore $s_n(y)$ is an upper bound of $T_n(x)$, whence $s_n(x) \le s_n(y)$ by leastness. Dually $i_n(x) \le x_k \le y_k$ for every $k \ge n$, so $i_n(x)$ is a lower bound of $T_n(y)$ and $i_n(x) \le i_n(y)$ by greatest-lower-boundedness. [step 1.1, L1, L2, L4]

3.1 For every $n \in \mathbb{N}$ one has $\limsup_k x_k \le s_n(y)$. If $n \ge K$ this is $\limsup_k x_k \le s_n(x) \le s_n(y)$, the first inequality because $\limsup_k x_k$ is a lower bound of $\{s_m(x)\}$. If $n < K$ then $n \le K$, so $s_K(y) \le s_n(y)$, and $\limsup_k x_k \le s_K(x) \le s_K(y) \le s_n(y)$. [step 2.1, L1, L2, L4]

3.2 For every $n \in \mathbb{N}$ one has $i_n(x) \le \liminf_k y_k$. If $n \ge K$ this is $i_n(x) \le i_n(y) \le \liminf_k y_k$, the second inequality because $\liminf_k y_k$ is an upper bound of $\{i_m(y)\}$. If $n < K$ then $n \le K$, so $i_n(x) \le i_K(x) \le i_K(y) \le \liminf_k y_k$. [step 2.1, L1, L2, L4]

4.1 By step 3.1 the element $\limsup_k x_k$ is a lower bound of $\{s_n(y) : n \in \mathbb{N}\}$, whose greatest lower bound is $\limsup_k y_k$, so $\limsup_k x_k \le \limsup_k y_k$. By step 3.2 the element $\liminf_k y_k$ is an upper bound of $\{i_n(x) : n \in \mathbb{N}\}$, whose least upper bound is $\liminf_k x_k$, so $\liminf_k x_k \le \liminf_k y_k$. [step 3.1, step 3.2, L1] ∎

## Remarks

- **"Eventually" is enough, and the proof shows why.** Only tails with $n \ge K$
  are compared directly; the finitely many earlier tail bounds are absorbed by
  monotonicity of the tail bounds ([[lem-limsup-exists]]), which lets $s_K(y)$
  stand in for every earlier $s_n(y)$. No appeal to [[lem-limit-of-tail]] is
  needed, since neither quantity is defined as a limit.

- **The comparison does not become strict.** From $x_k < y_k$ for every $k$ one
  gets only $\limsup_k x_k \le \limsup_k y_k$; the sequences $x_k = 0$ and
  $y_k = 1/(k+1)$ have equal limits and hence equal limit superiors. This is the
  same phenomenon as for limits ([[lem-limit-preserves-order]]).

- **Both conclusions have the same direction.** It is the *inner* operation that
  differs between $\limsup$ and $\liminf$, and both a supremum and an infimum are
  monotone in the set, so a pointwise inequality pushes both quantities the same
  way. What fails to be monotone is the *gap* between them: nothing here compares
  $\limsup_k x_k$ with $\liminf_k y_k$.
