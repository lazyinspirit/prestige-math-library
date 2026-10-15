---
id: thm-rpm-h-local-legendre-and-energy-descent
kind: theorem
title: "Energy descends through an almost-regular Legendre map"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 2
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps: [def-countable-choice, def-rpm-h-almost-regular-legendre, def-fibre-derivative-and-legendre-transform-of-a-lagrangian, cor-local-normal-form-for-submersions]
dependency_roles:
  def-countable-choice: mathematical-premise
  def-rpm-h-almost-regular-legendre: mathematical-premise
  def-fibre-derivative-and-legendre-transform-of-a-lagrangian: mathematical-premise
  cor-local-normal-form-for-submersions: mathematical-premise
sources:
  references:
    - title: "Henneaux, Teitelboim and Regge, Constrained Hamiltonian Systems, Part 1"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0e1d11ee-2741-4da4-83ed-b7cabc0cd7d6/download"
      locator: "Chapter I, pp. 7–11."
physical_scope: "Conditional theorem under the explicit almost-regular package; not a universal theorem for singular Lagrangians."
---

## Statement

Let $L(t,q,v)$ be smooth on an open velocity domain and let $\mathbb FL(t,q,v)=(t,q,L_v)$ be almost regular in the sense that it is a surjective submersion onto a specified embedded image $N$ and every fibre is connected. Define $E_L=v^iL_{v^i}-L$. Then there is a unique smooth function $h:N\to\mathbb R$ with $E_L=h\circ\mathbb FL$. The assertion is local in the stated domains; no global inverse velocity map is asserted.

## Facts & Assumptions

**Given:** Smooth $L$, its fibre derivative, the specified embedded image $N$, surjective-submersion property, and connected fibres.

[A1] [[def-countable-choice]]: Assume countable choice ACω, meaning every sequence of nonempty sets has a choice function; no full Axiom of Choice is assumed.

[F1] [[def-rpm-h-almost-regular-legendre]]: all these almost-regular hypotheses are assumptions, not consequences of degeneracy.

[F2] [[def-fibre-derivative-and-legendre-transform-of-a-lagrangian]]: $p_i=L_{v^i}$, with velocity derivative $L_{v^iv^j}$.

[F3] [[cor-local-normal-form-for-submersions]]: a submersion has smooth local sections through every point of its target.

## Proof

1.1 A tangent vector to a fibre of $\mathbb FL$ has the form $(0,0,\delta v)$ with $L_{v^iv^j}\delta v^j=0$, since the $(t,q)$ components of $\mathbb FL$ are identity components and its $p$-variation vanishes. Differentiating $E_L$ in this direction gives $dE_L(\delta v)=v^iL_{v^iv^j}\delta v^j=0$; the $L_{v^j}\delta v^j$ terms cancel. [given, A1, F2, calculus]

1.2 On a connected fibre, a smooth function whose differential vanishes is constant: it is locally constant in coordinate neighborhoods, and a locally constant function on a connected space is constant. Hence $E_L$ is constant on each fibre of $\mathbb FL$. Define $h(y)$ to be this common value for any point above $y\in N$; surjectivity gives existence, and constancy gives well-definedness and uniqueness. [given, F1, step 1.1, connectedness]

2.1 For each $y\in N$, [F3] gives a smooth local section $s$ of $\mathbb FL$. On that neighborhood $h=E_L\circ s$, so $h$ is smooth. These local formulas agree on overlaps because the value is already uniquely constant on each fibre. Thus globally on $N$, $E_L=h\circ\mathbb FL$. [given, F3, step 1.2] ∎
