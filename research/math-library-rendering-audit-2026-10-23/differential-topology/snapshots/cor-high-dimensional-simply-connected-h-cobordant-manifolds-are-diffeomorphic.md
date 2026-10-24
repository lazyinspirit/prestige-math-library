---
id: cor-high-dimensional-simply-connected-h-cobordant-manifolds-are-diffeomorphic
kind: corollary
title: High-dimensional simply connected h-cobordant manifolds are diffeomorphic
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 19
deps:
- thm-smooth-simply-connected-h-cobordism-theorem
- def-h-cobordism
- def-diffeomorphism-and-local-diffeomorphism-of-manifolds
- def-smooth-embedding
- def-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow, Princeton University Press 1965; scanned edition with searchable text layer)
    url: https://www.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf
    locator: Introduction and §§1--9, printed pp. 1--113; Corollary 9.2 and the classification consequence, printed pp. 108--110
  - title: Wolfgang Lück, A Basic Introduction to Surgery Theory (ICTP lecture notes, 27 October 2004; complete author text)
    url: https://him-lueck.uni-bonn.de/data/ictp.pdf
    locator: Chapter 1, printed pp. 1--22 (§§1.1--1.5)
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---
## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $M_0,M_1$ be closed simply connected smooth $n$-manifolds with $n\ge5$. If
$M_0$ and $M_1$ are h-cobordant, i.e. if there is a compact smooth h-cobordism
$(W;M_0,M_1)$ with $\dim W=n+1$ ([[def-h-cobordism]]), then $M_0$ and $M_1$ are
diffeomorphic.

## Facts & Assumptions

**Given:** Countable choice and closed simply connected smooth $n$-manifolds $M_0,M_1$ with $n\ge5$ and a compact smooth h-cobordism $(W;M_0,M_1)$ with $\dim W=n+1$.

[L1] The h-cobordism theorem gives a diffeomorphism $F:W\to M_0\times[0,1]$ whose restriction to $M_0$ is the identity ([[thm-smooth-simply-connected-h-cobordism-theorem]]).

[L2] A diffeomorphism of smooth manifolds restricts to a diffeomorphism between corresponding boundary components, and the map $M_0\to M_0\times\{1\}$, $x\mapsto(x,1)$, is a diffeomorphism of smooth manifolds ([[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]], [[def-smooth-embedding]]).

## Proof

**Proof technique:** direct.

1.1 $W$ is connected because its incoming inclusion is a homotopy equivalence from the connected $M_0$; the inverse homotopies connect every point of $W$ to that face. Thus every hypothesis of [L1], including countable choice, holds: there is a diffeomorphism $F:W\to M_0\times[0,1]$ that is the identity on $M_0$; since $F$ maps the boundary of $W$ to the boundary of $M_0\times[0,1]$ and already maps $M_0$ onto $M_0\times\{0\}$, it maps the other face $M_1$ diffeomorphically onto the complementary face $M_0\times\{1\}$. [L1, given]

2.1 The restriction $F|_{M_1}:M_1\to M_0\times\{1\}$ is therefore a diffeomorphism, and the second projection $(x,1)\mapsto x$ is a diffeomorphism $M_0\times\{1\}\to M_0$ by [L2]; composing gives a diffeomorphism $M_1\to M_0$, so the two h-cobordant manifolds are diffeomorphic. [L2, step 1.1] ∎
