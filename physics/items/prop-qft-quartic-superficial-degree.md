---
id: prop-qft-quartic-superficial-degree
kind: proposition
title: Quartic graph superficial degree from exact counting
status: draft
origin: pipeline
domain: mathematics
deps:
  - def-qft-quartic-graph-power-counting
dependency_roles:
  def-qft-quartic-graph-power-counting: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Alexander M. Polyakov's QFT I course material, reconstructed and expanded by QFT.org, lesson 39: One-Loop Divergences and Power Counting"
      url: "https://qft.org/courses/qft-i/39-one-loop-divergences-and-power-counting/"
    - title: "Mark Srednicki, Quantum Field Theory, author-posted prepublication draft, §18, equations (18.2)–(18.8)"
      url: "https://web.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf"
dependency_level: 1
---

## Statement

Let $D\in\mathbb Z_{\ge1}$ and let $\Gamma$ be a finite quartic graph in the sense of [[def-qft-quartic-graph-power-counting]]. With $V$ vertices, $I$ internal edges, $E$ external half-edges, and loop count $L$, the incidence and loop-count identities are $4V=2I+E$ and $L=I-V+1$. Its superficial degree under the stated Euclidean scalar power-counting convention is $\omega_D(\Gamma)=DL-2I=D+(D-4)V-\frac{D-2}{2}E$. In $D=4$ this reduces to $\omega_4(\Gamma)=4-E$. A zero value is a logarithmic **superficial** degree by the convention in the definition; these identities do not assert convergence or divergence of an actual graph integral.

## Facts & Assumptions

**Given:** $D\in\mathbb Z_{\ge1}$ and a finite connected multigraph $\Gamma$ with $V\ge1$ four-slot vertices, $I$ internal edges, and $E$ external half-edges, using degree $D$ per loop integration and degree $-2$ per internal scalar propagator.

[F1] [[def-qft-quartic-graph-power-counting]]: the internal-edge ends and the attached external half-edges are in bijection with the four incidence slots at each vertex; $L:=I-V+1$ is the cycle rank; one formal loop integration contributes degree $D$, each internal scalar propagator contributes degree $-2$, and $\omega_D(\Gamma):=DL-2I$. The value $\omega_D=0$ is called logarithmic superficial degree and is only formal graph bookkeeping.

## Proof

**Given:** The graph and power-counting data in [F1].

1.1 Counting the four slots at every vertex gives $4V$ slots. Each of the $I$ internal edges occupies two slots, including a self-loop, and each of the $E$ external half-edges occupies one. Hence $4V=2I+E$. [given, F1, algebra]

1.2 Start with one vertex and repeatedly add an internal edge from the reached vertices to a vertex not yet reached. Connectedness provides such an edge until all $V$ vertices are reached. Each added edge introduces one new vertex, so the selected edges form a spanning tree with $V-1$ edges; for $V=1$ it is empty. Exactly $I-(V-1)=I-V+1=L$ internal edges lie outside this tree, including any unselected loops or parallel edges, so the cycle rank in [F1] is nonnegative and counts the non-tree internal edges. [given, F1, construct]

2.1 By [F1], $\omega_D=DL-2I$. Substitute $L=I-V+1$ from step 1.2 to obtain $\omega_D=(D-2)I-DV+D$. From step 1.1, $I=2V-E/2$, so $\omega_D=(D-2)(2V-E/2)-DV+D=D+(D-4)V-\frac{D-2}{2}E$. [F1, step 1.1, step 1.2, algebra]

3.1 Setting $D=4$ in step 2.1 gives $\omega_4=4-E$. The defining convention in [F1] calls its zero value logarithmic superficial degree; it makes no claim about an actual integral's convergence or divergence. [F1, step 2.1, algebra] ∎
