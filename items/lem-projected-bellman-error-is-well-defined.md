---
id: lem-projected-bellman-error-is-well-defined
kind: lemma
title: The weighted feature projection is well-defined
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-finite-markov-decision-process
  - def-policy-bellman-operator
  - def-sum-over-a-finite-index-set
  - lem-finite-span-orthogonal-projection-in-inner-product-space
  - lem-finite-sum-laws
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Richard S. Sutton and Andrew G. Barto, Reinforcement Learning: An Introduction, 2nd ed."
      url: "https://raw.githubusercontent.com/mutual-ai/Book/main/books/RL/RLbook2020.pdf"
      locator: "§11.4, equations (11.11)–(11.15), weighted state norm, finite feature span, and linear projection."
---

## Statement

Let $S$ be a nonempty finite state set of a finite Markov decision process, let $0\leq\gamma<1$, and let $\pi$ be a stationary Markov policy. Define the policy Bellman operator by
$$
(T^\pi f)(s)=\sum_{a\in A(s)}\pi(a\mid s)\left[r(s,a)+\gamma\sum_{s'\in S}P(s'\mid s,a)f(s')\right].
$$
Let $\mu:S\to[0,1]$ satisfy $\sum_{s\in S}\mu(s)=1$, and let $\phi_1,\ldots,\phi_d:S\to\mathbb R$ be a finite list of feature functions. Define $f\sim_\mu g$ when $\sum_{s\in S}\mu(s)(f(s)-g(s))^2=0$, let $H_\mu$ be the quotient of $\mathbb R^S$ by this relation, and define $\langle[f]_\mu,[g]_\mu\rangle_\mu=\sum_{s\in S}\mu(s)f(s)g(s)$. Then this quotient is a finite-dimensional real inner-product space. The span $V_\mu$ of $[\phi_1]_\mu,\ldots,[\phi_d]_\mu$ is finite-dimensional, and every $h\in H_\mu$ has a unique orthogonal projection $\Pi_\mu h\in V_\mu$. Here orthogonal means that $h-\Pi_\mu h$ has inner product zero with every vector in $V_\mu$. For each fixed $w\in\mathbb R^d$, put $v_w(s)=\sum_{j=1}^d\phi_j(s)w_j$ and $\delta_w=[T^\pi v_w-v_w]_\mu$. Then $\|\delta_w\|_\mu^2$ and $\|\Pi_\mu\delta_w\|_\mu^2$ are well-defined real numbers, including when some state weights vanish or the features are linearly dependent.

## Statement references

[[def-finite-markov-decision-process|The finite transition/reward model and stationary Markov policies]].

[[def-policy-bellman-operator|The expected discounted policy Bellman operator]].

[[def-sum-over-a-finite-index-set|Finite indexed sums over the state set]].

[[lem-finite-span-orthogonal-projection-in-inner-product-space|Every vector in a real inner-product space has a unique orthogonal projection onto a finite-dimensional subspace]].

[[lem-finite-sum-laws|Finite sums of nonnegative terms vanish only when each term vanishes]].

[Sutton and Barto, *Reinforcement Learning: An Introduction*, 2nd ed., §11.4](https://raw.githubusercontent.com/mutual-ai/Book/main/books/RL/RLbook2020.pdf).

## Facts & Assumptions

**Given:** A nonempty finite set $S$, probability weights $\mu$ on $S$, and finitely many real-valued feature functions on $S$.

[F1] [[def-sum-over-a-finite-index-set]]: a sum over a finite set is defined by enumerating its elements through a bijection with an initial segment of the natural numbers, with the value independent of that enumeration.

[F2] [[lem-finite-sum-laws]]: a finite sum of nonnegative real numbers is zero only if every summand is zero; finite sums also preserve addition and scalar multiplication.

[F3] [[lem-finite-span-orthogonal-projection-in-inner-product-space]]: in a real inner-product space, every vector has a unique orthogonal projection onto any finite-dimensional subspace, characterized by the residual being orthogonal to that subspace.

## Proof

1.1 Put $S_+=\{s\in S:\mu(s)>0\}$. By [F1] and [F2], $f\sim_\mu g$ holds exactly when $f(s)=g(s)$ for every $s\in S_+$. This is an equivalence relation, and equality on $S_+$ is preserved under pointwise addition and scalar multiplication, so the quotient inherits the real vector-space operations. If representatives change within their equivalence classes, every summand with positive weight stays unchanged and every summand with zero weight remains zero; therefore the displayed inner product is independent of representatives. It is symmetric and bilinear by finite-sum rules, and $\langle[f]_\mu,[f]_\mu\rangle_\mu=0$ implies $f=0$ on $S_+$, so $[f]_\mu=0$. The classes of the finitely many coordinate indicator functions span $H_\mu$, hence this is a finite-dimensional real inner-product space. [given, F1, F2, algebra]

2.1 The subspace $V_\mu$ is spanned by the finite list of feature classes, so it is finite-dimensional. Apply [F3] to $h\in H_\mu$ and $V_\mu$ to obtain a unique vector $\Pi_\mu h$ whose residual is orthogonal to $V_\mu$. For each fixed $w$, the Bellman residual is a function on $S$, so it determines the class $\delta_w$; its norm and the norm of its unique projection are finite real numbers. This conclusion does not identify parameters whose feature functions agree only on the support of $\mu$, since the Bellman operator can depend on values outside that support. [given, F3, step 1.1] ∎
