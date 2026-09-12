---
id: "cex-whitehead-theorem-fails-without-cw-type"
kind: "counterexample"
title: "Whitehead theorem fails without CW type"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-weak-homotopy-equivalence","def-subspace-topology-top","def-homotopy-equivalence","thm-intermediate-value","lem-q-and-irrationals-dense-r"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: May Whitehead theorem hypotheses, Chapter 10 §3; explicit rational-space
        witness checked locally
      url: https://math.mit.edu/~hrm/papers/notes-905.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Statement refuted

Every weak homotopy equivalence of topological spaces is a homotopy equivalence, without a CW-type hypothesis.

## Facts & Assumptions

[F1] [[def-weak-homotopy-equivalence]] requires a bijection on path components and an isomorphism on every positive homotopy group at every source basepoint.

[F2] [[def-subspace-topology-top]] defines the rational subspace topology, continuity of its inclusion into the real line, and the characteristic property for maps into a subspace.

[F3] [[def-homotopy-equivalence]] requires a continuous inverse up to homotopy in both orders.

[F4] [[thm-intermediate-value]] gives every intermediate real value of a continuous real-valued function on a closed interval, including when the endpoint values are in decreasing order. Its proof is choice-free.

[F5] [[lem-q-and-irrationals-dense-r]] proves that every nonempty open real interval contains both a rational and an irrational.

## Counterexample

**Given:** Let $Q$ be the rational numbers with the subspace topology inherited from $\mathbb R$, and let $Q_d$ be the same set with the discrete topology, whose open sets are all subsets. Let $f:Q_d\to Q$ be the identity set map.

1.1 The map $f$ is continuous: the inverse image of every open subset of $Q$ is a subset of $Q_d$, hence open. Every continuous path $p:I\to Q$ is constant. Indeed, if two of its values differ, restrict to the closed interval between their parameters and compose with the continuous inclusion $Q\to\mathbb R$ from [F2]. By [F5] an irrational lies strictly between those values; [F4] supplies a parameter with that irrational value, impossible for a map into $Q$. The same assertion holds for paths into $Q_d$, since composing with $f$ gives a path into $Q$ and $f$ is the identity on the underlying set. [F2, F4, F5, given]

2.1 Every path component in either space is therefore a singleton. At each rational $q$, the map on components sends $\{q\}$ to $\{q\}$, so it is bijective. For an integer $k\ge1$, let $a:I^k\to Q$ be a continuous based cube with boundary value $q$. Any $u,v\in I^k$ are joined by the continuous segment $t\mapsto(1-t)u+tv$, which remains in the cube coordinate by coordinate. Its composite with $a$ is a path, hence constant by step 1.1. Thus $a$ is constant, and its value is $q$ because the boundary is nonempty. For a cube into $Q_d$, compose with $f$ to reach the same conclusion. Each based homotopy group consequently has exactly one element in every positive degree, including degree one. The induced map is the unique homomorphism between trivial groups, hence an isomorphism. Together with the component calculation this proves that $f$ is a weak homotopy equivalence by [F1]. [F1, step 1.1, given]

2.2 If $g:Q\to Q_d$ were a homotopy inverse, [F3] would give a homotopy $H:Q\times I\to Q$ between $fg$ and $\mathrm{id}_Q$. For each $q\in Q$, the function $t\mapsto H(q,t)$ is a continuous path, hence constant by step 1.1. Evaluating at the two endpoints gives $f(g(q))=q$. Since $f$ is the identity set map, $g(q)=q$ for every rational $q$. Thus any possible homotopy inverse is forced to be the identity set map $Q\to Q_d$. [F3, step 1.1, given]

3.1 That identity is not continuous. The singleton $\{0\}$ is open in $Q_d$, but is not open in $Q$: if $\{0\}=U\cap Q$ for an open real set $U$, then $0\in U$ supplies $\varepsilon>0$ with $(-\varepsilon,\varepsilon)\subset U$. By [F5] there is a rational $r\in(0,\varepsilon)$, giving $r\in U\cap Q$ and $r\ne0$, a contradiction. Hence the necessary $g$ of step 2.2 cannot be continuous, and $f$ is not a homotopy equivalence. [F2, F3, F5, step 2.2]

4.1 This is a nonempty example with infinitely many components; it does not assert that $Q$ is weakly contractible. The degree-zero condition is the bijection of those singleton components, while every positive group at every rational basepoint is zero. A constant cube, a constant homotopy and the interval endpoints all appear in steps 1.1–2.2; none is excluded. The argument instantiates an irrational or rational in one specified interval at a time and uses the choice-free intermediate value theorem, so no choice axiom is needed. Steps 2.1 and 3.1 give respectively the hypothesis and the failed conclusion of the asserted implication, completing the counterexample. [F1, F4, F5, step 1.1, step 2.1, step 2.2, step 3.1] ∎
