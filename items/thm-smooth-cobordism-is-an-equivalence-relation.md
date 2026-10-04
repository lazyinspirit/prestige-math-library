---
id: thm-smooth-cobordism-is-an-equivalence-relation
kind: theorem
title: Smooth cobordism is an equivalence relation
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-unoriented-smooth-cobordism-of-closed-manifolds
  - def-oriented-smooth-cobordism
  - lem-cylinders-give-reflexivity-of-cobordism
  - lem-reversing-a-cobordism-gives-symmetry
  - lem-collar-gluing-and-corner-smoothing-give-transitivity
  - def-equivalence-relation
  - def-compact-space
  - def-smooth-manifold
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: https://people.math.harvard.edu/~dafr/bordism.pdf
      locator: "Lemma 1.25 and (2.22), printed pp.10 and 18-19"
    - title: "John Milnor and James Stasheff, Characteristic Classes (original pagination)"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: "Lemma 17.2, printed pp.201-202"
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, 2002)"
      url: https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro
      locator: "Section 6.3, unoriented and oriented cobordism rings, electronic pp.117-118"
---

## Statement

For every $n\ge0$, unoriented cobordism of closed smooth $n$-manifolds
([[def-unoriented-smooth-cobordism-of-closed-manifolds]]) and oriented
cobordism of closed oriented smooth $n$-manifolds
([[def-oriented-smooth-cobordism]]) are reflexive by cylinders, symmetric by
dual bordisms (orientation-reversed in the oriented case), and transitive by
collar gluing. Restricted to any set $S$ of such manifolds in either theory,
cobordism is therefore an equivalence relation
([[def-equivalence-relation]]) and partitions $S$ into classes $[M]_S$.
The collection of manifolds on arbitrary underlying sets is not itself a set;
global bordism sets and the notation $[M]$ use the bounded models introduced
in the subsequent bordism-group definition. No choice principle is used,
and no claim about diffeomorphism classification is made.

## Facts & Assumptions

**Given:** An integer $n\ge0$, closed smooth $n$-manifolds, and in the oriented theory closed oriented smooth $n$-manifolds. A closed manifold is compact without boundary ([[def-compact-space]], [[def-smooth-manifold]]).

[F1] For every closed smooth $n$-manifold $M$ the cylinder $M\times[0,1]$ with its product collars is a bordism from $M$ to $M$, and in the oriented case it carries an orientation making it an oriented bordism from $(M,o)$ to $(M,o)$; hence $M$ is cobordant to itself in both theories ([[lem-cylinders-give-reflexivity-of-cobordism]]).

[F2] Swapping the boundary parts and collar parametrisations of a bordism from $M_0$ to $M_1$ yields a bordism from $M_1$ to $M_0$; in the oriented case the dual with the opposite orientation on the same manifold is an oriented bordism from $M_1$ to $M_0$ ([[lem-reversing-a-cobordism-gives-symmetry]]).

[F3] If $W_1$ is a bordism from $M_0$ to $M_1$ and $W_2$ a bordism from $M_1$ to $M_2$, the collar gluing produces a bordism $W_1\cup_{M_1}W_2$ from $M_0$ to $M_2$, and in the oriented case the orientations glue to an orientation making it an oriented bordism from $M_0$ to $M_2$ ([[lem-collar-gluing-and-corner-smoothing-give-transitivity]]).

[F4] A binary relation on a set is an equivalence relation when it is reflexive, symmetric and transitive; for an equivalence relation the equivalence classes form a partition of the set and $[a]$ denotes the class of $a$ ([[def-equivalence-relation]]).

## Proof

1.1 (Reflexivity.) Let $M$ be a closed smooth $n$-manifold, oriented by $o$ in the oriented theory. By [F1] the cylinder $M\times[0,1]$ with its product collars is a bordism from $M$ to $M$, and with the orientation $(-1)^n(o\otimes dt)$ it is an oriented bordism from $(M,o)$ to $(M,o)$. Thus $M$ is cobordant to itself in both theories. [F1]

1.2 (Symmetry.) If $M_0$ is cobordant to $M_1$, choose a bordism $(W,\theta_0,\theta_1)$; the dual data of [F2] give a bordism from $M_1$ to $M_0$. If $(W,\theta_0,\theta_1)$ is an oriented bordism from $M_0$ to $M_1$, the same manifold with the opposite orientation and the swapped collars is an oriented bordism from $M_1$ to $M_0$, with induced orientations $-M_1$ and $M_0$ on the incoming and outgoing faces. [F2]

1.3 (Transitivity.) If $M_0$ is cobordant to $M_1$ through $W_1$ and $M_1$ is cobordant to $M_2$ through $W_2$, the collar gluing of [F3] gives a bordism from $M_0$ to $M_2$; if both bordisms are oriented, the glued orientation makes the result an oriented bordism from $M_0$ to $M_2$. [F3]

2.1 (Equivalence relation on a set.) Let $S$ be any set of closed smooth $n$-manifolds, with supplied orientations in the oriented theory. Restricted to $S$, cobordism is reflexive by step 1.1, symmetric by step 1.2 and transitive by step 1.3. Thus [F4] gives an equivalence relation on $S$ and the quotient classes $[M]_S$. The three properties hold for arbitrary manifolds, but the set-theoretic quotient is asserted only on a set of models; the subsequent definition constructs global bordism sets this way. The argument uses only supplied collar data and no choice principle. [F4, step 1.1, step 1.2, step 1.3] ∎
