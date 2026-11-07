---
id: lem-kloosterman-model-finite-base-normality
kind: lemma
title: "Finite-base normality of the rank-two Kloosterman model"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps: []
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
---

## Statement

Let $k$ be algebraically closed of characteristic $p>0$, let $S=\operatorname{Spec}k\llbracket t\rrbracket$, and let $X\subset\mathbb P^1_z\times\mathbb P^1_x\times S$ be given by
$$(Z_1^p-Z_1Z_0^{p-1})X_1X_0=(X_1^2+tX_0^2)Z_0^p.$$
For every finite separable extension of $k((t))$, let $S'=\operatorname{Spec}k\llbracket s\rrbracket$ be its valuation trait, with $t=s^e h(s)$ and $h(s)$ a unit, and set $X'=X\times_S S'$. Assume explicitly that $k\llbracket a,b\rrbracket$ is integrally closed and that, for every closed point of every such $X'$, the map from its Noetherian local ring to its maximal-ideal completion is faithfully flat. Then each $X'$ is flat over $S'$, integral and normal. These two algebraic assumptions are not proved by this lemma.

## Facts & Assumptions

**Given:** The field, explicit family, finite trait extension, and the stated formal-plane normality and faithful-completion assumptions.

## Proof

1.1 On each projective coordinate chart, the family is a hypersurface over $k\llbracket s\rrbracket$ whose defining equation remains nonzero modulo $s$: on the finite chart it is $x(z^p-z-x)-s^e h(s)$; at $x=0,z=\infty$ it is $x(1-v^{p-1})-(x^2+s^e h(s))v^p$; at $x=\infty,z=\infty$ it is $u(1-v^{p-1})-(1+s^e h(s)u^2)v^p$. In each polynomial chart, $s$ is prime and does not divide that equation, so the quotient has no $s$-torsion. A torsion-free module over the DVR $k\llbracket s\rrbracket$ is flat. The same holds after localization, hence $X'$ is flat. [given, algebra]

2.1 For $s\ne0$ the finite-chart equation is $z^p-z=x+t/x$ on $x\ne0$. Its right side has poles of order one, so it cannot be $g^p-g$ in the geometric rational function field; the Artin–Schreier polynomial is irreducible of degree $p$. The two boundary charts have one point over each boundary value. Thus the geometric generic fibre is integral. Flatness makes multiplication by $s$ injective in every local ring; since the generic fibre is reduced, this also makes the total scheme reduced. Every irreducible component meets the generic fibre, so its uniqueness there gives one component. Therefore $X'$ is integral. [step 1.1, algebra]

3.1 The special fibre has two rational components meeting only at the $p$ finite nodes $x=0,z\in\mathbb F_p$. At such a node, $u=x$ and $v=z^p-z-x$ are formal coordinates, with family equation $uv=s^e h(s)$. Absorb $h(s)$ into $v$. The completed local ring is the weight-zero congruence-graded subring of $k\llbracket a,b\rrbracket$ under $u=a^e,v=b^e,s=ab$. It is a domain and integrally closed: an integral element of its fraction field is integral over the assumed normal formal plane, hence lies there, and a weight-zero denominator forces all nonzero-weight components to vanish. Faithful-flat contraction of principal ideals then descends integral closure to the actual local ring. This holds even when $p\mid e$. [given, step 2.1, algebra]

4.1 At every other closed point of the special fibre, one of the explicit relative partial derivatives is a unit: on the finite chart $\partial/\partial z=-x$ unless $x=0$, where $\partial/\partial x=z^p-z$ is nonzero away from the nodes; on the two boundary charts the derivative in $x$ or $u$ is $1$ at the boundary point. Formal implicit substitution gives completed local ring $k\llbracket s,w\rrbracket$, normal by the formal-plane premise, and faithful-flat contraction makes the local ring normal. The two generic points of the special components have principal maximal ideal $(s)$ in a one-dimensional Noetherian local domain, hence are DVRs by the finite order argument. On the generic fibre the same unit-derivative charts give regular one-dimensional local rings, hence DVRs or fields. Thus every local ring of $X'$ is normal. [given, step 2.1, step 3.1, algebra] ∎
