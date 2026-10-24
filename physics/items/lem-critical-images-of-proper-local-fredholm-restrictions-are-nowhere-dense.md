---
id: lem-critical-images-of-proper-local-fredholm-restrictions-are-nowhere-dense
kind: lemma
title: Critical images of proper local Fredholm restrictions are nowhere dense
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, lem-local-finite-dimensional-reduction-for-a-fredholm-map, thm-morse-sard-for-euclidean-maps, def-nowhere-dense-meagre-and-residual-subsets]
proof_strategy: direct
sources:
  references:
    - title: "Stephen Smale, An Infinite Dimensional Version of Sard's Theorem, proof of Theorem 1.3, pp. 862-863"
      url: "https://people.math.harvard.edu/~dafr/M392C-2018-MorseTheory/Readings/Smale.pdf"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical new_item review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-10-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Assume the Axiom of Choice. Let $P:M\to N$ be a $C^h$ Fredholm map of
fixed index $m$ between Hausdorff second-countable real Banach manifolds,
where $h$ is a positive integer or $\infty$ and $h>\max\{m,0\}$.
Suppose $W\subset M$ is open, $P(W)$ lies in a target chart $V\subset N$,
and on $W$ the map has normal form $(u,v)\mapsto(u,g(u,v))$ with
$v\in K$, $g(u,v)\in Q$, $K,Q$ finite-dimensional and
$\dim K-\dim Q=m$. If $C\subset W$ is closed relative to $W$ and
$P|_C:C\to V$ is proper, then
$$P(C\cap\operatorname{Crit}(P))$$
is closed and nowhere dense **relative to $V$**, and is nowhere dense in
$N$. Here $\operatorname{Crit}(P)$ is the locus where $DP$ is not
surjective.

## Facts & Assumptions

**Given:** The data in the statement, including AC.

[F1] A $C^h$ map from an open subset of $\mathbb R^a$ to $\mathbb R^b$ has
null critical-value set when $h>\max\{a-b,0\}$
([[thm-morse-sard-for-euclidean-maps]]).

[F2] Normal form identifies the derivative's surjectivity with that of
$D_vg(u,v):K\to Q$
([[lem-local-finite-dimensional-reduction-for-a-fredholm-map]]).

## Proof

**Proof technique:** direct.

1.1 In normal-form coordinates, $DP$ is onto exactly when $D_vg$ is onto. Surjectivity of a linear map between the finite-dimensional spaces $K,Q$ is an open condition on its matrix entries. Thus $A:=C\cap\operatorname{Crit}(P)$ is closed in $C$. [F2, given]

2.1 The image $B:=P(A)$ is closed in $V$. Indeed, if $y_i\in B$ converges to $y\in V$, choose $x_i\in A$ with $P(x_i)=y_i$. The set consisting of $y$ and the $y_i$ is compact in the metrizable chart $V$. Properness makes its inverse image in $C$ compact. A subsequence of $x_i$ therefore converges in $C$ to $x\in A$, and continuity gives $P(x)=y$. Sequential closedness equals closedness in the metrizable chart. [step 1.1, given]

3.1 If $Q=\{0\}$, every $D_vg$ is onto and $B=\varnothing$. Otherwise suppose a nonempty target-coordinate open rectangle $U_0\times Q_0$ lay inside $B$. Fix $u\in U_0$. For the $C^h$ map $g_u:v\mapsto g(u,v)$ on the open finite-dimensional kernel-coordinate domain, every $q\in Q_0$ would be a critical value: each $(u,q)\in B$ comes from some $(u,v)\in C$ with $D_vg(u,v)$ not onto. If $h=\infty$, choose any finite integer $r>\max\{\dim K-\dim Q,0\}$; otherwise take $r=h$. Then [F1] applies to the $C^r$ slice and says its critical values are null, so they cannot contain the nonempty open set $Q_0$. Thus $B$ has empty interior in $V$, and step 2.1 makes it nowhere dense there. [F1, F2, step 2.1, cases]

4.1 Since $V$ is open in $N$, the closure in $N$ of a relatively nowhere dense subset of $V$ has empty interior: any open set in that closure must meet $V$ (the boundary of an open set has empty interior), contradicting relative nowhere density. Hence $B$ is nowhere dense in $N$ as well. [step 3.1, algebra] ∎
