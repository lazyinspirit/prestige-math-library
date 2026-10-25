---
id: "prop-degree-of-the-power-map-on-the-circle"
kind: "proposition"
title: "Degree of the power map on the circle"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-circle-as-real-line-mod-integers","prop-real-line-mod-integers-is-compact-and-path-connected","thm-compact-subset-of-a-hausdorff-space-is-closed","thm-closed-subspace-of-a-compact-space-is-compact","thm-regular-value-formula-for-degree"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Robbin–Salamon, Introduction to Differential Topology, degree examples following Theorem 5.4.1
      url: https://zaco.au/lib/math/text/differential-geometry/difftop.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "regular-value"
---

## Statement

Equip $S^1=\mathbb R/\mathbb Z$ with the smooth structure and orientation whose local quotient coordinates increase with the real coordinate. For every $m\in\mathbb Z$, the smooth power map
$$P_m:S^1\longrightarrow S^1,\qquad P_m([t])=[mt],$$
equivalently $z\mapsto z^m$ on the counterclockwise unit circle, has $\deg(P_m)=m$.

## Facts & Assumptions

**Given:** An integer $m$ and the oriented quotient-circle model in the statement.

[F1] [[def-circle-as-real-line-mod-integers]] gives $[s]=[t]$ exactly when $s-t\in\mathbb Z$.

[F2] [[prop-real-line-mod-integers-is-compact-and-path-connected]] makes the quotient circle compact and connected. Compact subsets of its Hausdorff manifold topology are closed by [[thm-compact-subset-of-a-hausdorff-space-is-closed]], and closed subsets of a compact space are compact by [[thm-closed-subspace-of-a-compact-space-is-compact]].

[F3] [[thm-regular-value-formula-for-degree]] computes the degree of a proper smooth same-dimensional map at a supplied regular value as the finite sum of its derivative orientation signs, including an empty fibre.

## Proof

**Proof technique:** regular-value calculation.

1.1 The formula is well defined: if $[s]=[t]$, then $s-t\in\mathbb Z$ by [F1], so $m(s-t)\in\mathbb Z$ and $[ms]=[mt]$. On every quotient arc shorter than one, source and target lift coordinates express $P_m$ as $u\mapsto mu+k$ for an integer constant $k$; hence it is smooth with derivative $m$. For any compact $K\subseteq S^1$, Hausdorffness makes $K$ closed, continuity makes $P_m^{-1}(K)$ closed, and [F2] makes this closed subset of the compact circle compact. Thus $P_m$ is proper. [F1, F2, given]

2.1 Suppose $m>0$. The fibre over $[0]$ is exactly $$P_m^{-1}([0])=\{[k/m]:0\le k<m\}.$$ Indeed, after taking the unique representative $t\in[0,1)$, the condition $mt\in\mathbb Z$ says $mt=k$ for exactly one of these integers. The derivative in positive lift coordinates is $m>0$, so every one of these $m$ points has local sign $+1$. The value is regular, and [F3] gives $\deg(P_m)=\sum_{k=0}^{m-1}1=m$. [F1, F3, step 1.1]

2.2 Suppose $m<0$ and put $r=-m>0$. The same representative calculation gives the $r$ distinct preimages $[k/r]$, $0\le k<r$, of $[0]$. In positive lift coordinates the derivative is $m<0$, so every local sign is $-1$. Hence [F3] gives $\deg(P_m)=\sum_{k=0}^{r-1}(-1)=-r=m$. [F1, F3, step 1.1]

3.1 If $m=0$, $P_0$ is the constant map with value $[0]$. The point $[1/2]$ has empty fibre and is therefore a regular value; [F3] gives degree equal to the empty sum, namely zero. Thus all integers are covered. In particular $P_1$ is the identity and $P_{-1}$ reverses orientation. All fibres used are explicitly finite, no root is selected from a family, and no choice axiom is used. [F3, step 1.1, step 2.1, step 2.2] ∎
