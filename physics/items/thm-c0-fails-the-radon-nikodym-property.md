---
id: thm-c0-fails-the-radon-nikodym-property
kind: theorem
title: "$c_0$ fails the Radon--Nikodym property"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, thm-rnp-dentability-characterization, def-dentable-bounded-set-and-slice, def-c-zero-and-ell-infinity, lem-real-and-complex-c-zero-are-banach, lem-finite-truncations-are-dense-in-c0-and-ell-one, thm-dual-of-c0-is-ell-one]
justified_by: []
forward_refs: []
aliases: []
landmark: true
proof_strategy: counterexample
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  scraped: []
  references:
    - title: "Gilles Pisier, Martingales in Banach Spaces"
      url: "https://webusers.imj-prg.fr/~gilles.pisier/ihp-pisier.pdf"
      locator: "Chapter 2, remark following Corollary 2.11, printed p. 42"
pipeline_run: phase-2-next-18
---

## Statement

Assume the Axiom of Choice. Over either $\mathbb R$ or $\mathbb C$, the Banach
space $c_0$ does not have the Radon--Nikodym property.

## Facts & Assumptions

[A1] The Axiom of Choice holds ([[def-axiom-of-choice]]).

[L1] The sequence space $c_0$ has the supremum norm ([[def-c-zero-and-ell-infinity]]) and is Banach over both scalar fields ([[lem-real-and-complex-c-zero-are-banach]]).

[L2] Every $f\in c_0^*$ has the unique bilinear representation $f(x)=\sum_{n\geq0}a_nx_n$ by a sequence $a\in\ell^1$ ([[thm-dual-of-c0-is-ell-one]]), whose finite truncations converge in $\ell^1$ ([[lem-finite-truncations-are-dense-in-c0-and-ell-one]]).

[L3] A bounded set is dentable when it has slices of arbitrarily small norm diameter ([[def-dentable-bounded-set-and-slice]]).

[L4] Under AC, RNP is equivalent to dentability of every nonempty bounded closed convex set ([[thm-rnp-dentability-characterization]]).

## Proof

**Proof technique:** counterexample.

**Given:** AC and the closed unit ball $B$ of $c_0$.

1.1 Fix an arbitrary slice and a point with positive margin. Let $S=S(B,f,\alpha)$ be any slice, and represent $f(x)=\sum_na_nx_n$ by [L2]. On $B$ one has $\sup\operatorname{Re}f=\|f\|$: the upper bound is the dual-norm inequality, and multiplying an almost norming vector by a scalar of modulus one makes its $f$-value real and nonnegative. By nonemptiness of the slice choose $x\in S$ and put $\delta=\operatorname{Re}f(x)-(\|f\|-\alpha)>0$. [given, L2, L3, choose]

2.1 Change one remote coordinate in both directions. Truncation convergence in [L2] gives $a_n\to0$, so choose $k$ with $2|a_k|<\delta$. Define $y,z$ by retaining all coordinates of $x$ except $y_k=1$ and $z_k=-1$. Both sequences still tend to zero and have supremum norm at most one, so $y,z\in B$. Moreover [L1, L2, step 1.1, construct]

$$\operatorname{Re}f(y)\geq\operatorname{Re}f(x)-|a_k|\,|1-x_k|>\|f\|-\alpha,$$

and the same estimate with $|-1-x_k|\leq2$ puts $z$ in $S$. Thus $\|y-z\|_\infty=2$.

3.1 Compute every slice diameter and obtain nondentability. The triangle inequality bounds the diameter of $B$, and hence of $S$, by two; step 2.1 attains two. Therefore every slice of $B$ has diameter exactly two. In particular no slice has diameter below one, so $B$ is not dentable. The ball is nonempty, bounded, closed, and convex in the Banach space from [L1]. [L1, L3, step 2.1]

4.1 Apply the RNP--dentability characterization. If $c_0$ had RNP, [L4] would make its closed unit ball dentable, contradicting step 3.1. Hence $c_0$ fails RNP over both scalar fields. [A1, L4, step 3.1]

5.1 Record the zero-functional and endpoint cases. [A1, L2, L3, step 1.1, step 2.1, step 4.1] If $f=0$, the slice is all of $B$; take $x=0$ and any $k$, so the same $y=e_k$, $z=-e_k$ witness diameter two. For nonzero $f$, the strict slice margin $\delta$ ensures both perturbed points remain inside rather than merely on its boundary. A zero coefficient $a_k$ causes no difficulty. The complex proof uses the bilinear $c_0$--$\ell^1$ pairing and real parts exactly as in [L2]--[L3]; no conjugate is inserted. AC is used only through [L4]. [A1, L2, L3, step 2.1, step 4.1] ∎