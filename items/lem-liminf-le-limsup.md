---
id: lem-liminf-le-limsup
kind: lemma
title: "$\\liminf x_k \\le \\limsup x_k$ for every real sequence"
status: draft
origin: session
deps: [def-limsup-liminf, lem-limsup-exists, lem-extended-reals-complete, def-extended-reals, def-upper-bound, def-partial-order, def-sequence, def-nat-order, thm-nat-linear-order]
justified_by: []
forward_refs: [ex-limsup-of-alternating-sequence]
aliases: []
landmark: false
short: "$\\liminf \\le \\limsup$"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
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

For every sequence $(x_k)$ of reals ([[def-sequence]]),

$$\liminf_{k} x_k \;\le\; \limsup_{k} x_k$$

in $\overline{\mathbb{R}}$ ([[def-limsup-liminf]], [[def-extended-reals]]). No
hypothesis is placed on $(x_k)$: both sides exist for every sequence
([[lem-limsup-exists]]) and the inequality holds between them in every case,
including those in which one or both sides are $\pm\infty$.

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals, its tail ranges $T_n = \{x_k : k \ge n\}$, and the extended tail bounds $s_n = \sup T_n$, $i_n = \inf T_n$ ([[def-limsup-liminf]]).

[L1] Every subset of $\overline{\mathbb{R}}$ has a least upper bound and a greatest lower bound in $\overline{\mathbb{R}}$, an upper bound below every upper bound and a lower bound above every lower bound respectively ([[lem-extended-reals-complete]], [[def-upper-bound]], [[def-partial-order]]).

[L2] Monotonicity of the tail bounds: $s_m \le s_n$ and $i_n \le i_m$ whenever $n \le m$, and $i_n \le s_n$ for every $n$; both $\limsup_k x_k = \inf\{s_n\}$ and $\liminf_k x_k = \sup\{i_n\}$ exist ([[lem-limsup-exists]], [[def-limsup-liminf]]).

[L3] The order on $\mathbb{N}$ is total ([[def-nat-order]], [[thm-nat-linear-order]]).

[L4] The order on $\overline{\mathbb{R}}$ is transitive ([[def-extended-reals]], [[def-partial-order]]).

## Proof

**Proof technique:** direct.

1.1 Let $m, n \in \mathbb{N}$ be arbitrary. The order on $\mathbb{N}$ is total, so either $m \le n$ or $n \le m$; let $p$ be whichever of $m$ and $n$ is the larger, so that $m \le p$ and $n \le p$. [given, L3, choose]

2.1 Monotonicity of the tail bounds gives $i_m \le i_p$ and $s_p \le s_n$, and $i_p \le s_p$ holds because $T_p$ is nonempty; chaining these by transitivity yields $i_m \le s_n$. As $m$ and $n$ were arbitrary, every tail infimum is below every tail supremum. [step 1.1, L2, L4]

3.1 Fix $n \in \mathbb{N}$. By step 2.1 the element $s_n$ is an upper bound of the family $\{i_m : m \in \mathbb{N}\}$, and $\liminf_k x_k$ is its least upper bound, so $\liminf_k x_k \le s_n$. [step 2.1, L1, L2]

4.1 Since $n$ was arbitrary, $\liminf_k x_k$ is a lower bound of the family $\{s_n : n \in \mathbb{N}\}$, and $\limsup_k x_k$ is its greatest lower bound, so $\liminf_k x_k \le \limsup_k x_k$. [step 3.1, L1, L2] ∎

## Remarks

- **The inequality can be strict, and that is the interesting case.** For the
  alternating sequence the two sides are $-1$ and $1$
  ([[ex-limsup-of-alternating-sequence]]). Equality is exactly convergence, in the
  extended sense: that is [[thm-convergence-iff-limsup-equals-liminf]].

- **What the proof actually uses is that the two families interleave.** Each
  $i_m$ is below each $s_n$, not merely below $s_m$, and getting that needs a
  common index $p$ beyond both, which is where totality of the order on
  $\mathbb{N}$ enters. Without that step one would only know
  $i_n \le s_n$ for each $n$, which does not by itself compare a supremum of the
  first family with an infimum of the second.

- **No completeness of $\mathbb{R}$ is used here beyond what is already inside
  [[lem-extended-reals-complete]].** The argument is pure order theory in a
  totally ordered set with a least and a greatest element.
