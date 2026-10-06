---
id: lem-duality-eliminates-top-and-cotop-handles
kind: lemma
title: Duality eliminates the top and codimension-one handles
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 11
deps:
- def-h-cobordism
- lem-zero-and-one-handles-can-be-eliminated-in-a-simply-connected-h-cobordism
- def-dual-handle-decomposition
- thm-handle-duality-from-negating-a-morse-function
- prop-dual-elimination-of-top-index-handles
- def-smooth-cobordism-triad-for-morse-theory
- def-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow, Princeton University Press 1965; scanned edition with searchable text layer)
    url: https://www.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf
    locator: Introduction and §§1--9, printed pp. 1--113; Concluding Remarks, printed pp. 113--114
  - title: Wolfgang Lück, A Basic Introduction to Surgery Theory (ICTP lecture notes, 27 October 2004; complete author text)
    url: https://him-lueck.uni-bonn.de/data/ictp.pdf
    locator: Chapter 1, printed pp. 1--22 (§§1.1--1.5)
verification:
  precheck: pass
---
## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). In the situation of the
previous lemma, $W$ also admits a handle decomposition relative to $M_0$ with no
handles of index $n$ or $n+1$; combining the two results, $W$ admits a
presentation relative to $M_0$ in which every handle has index between $2$ and
$n-1$. Both statements are obtained from the low-index elimination by running it
on the reversed triad $(W;M_1,M_0)$ and dualising
([[def-h-cobordism]]).

## Facts & Assumptions

**Given:** An h-cobordism $(W;M_0,M_1)$ with $\dim W=n+1$, $n\ge5$, closed simply connected faces and connected $W$; $\mathrm{AC}_\omega$.

[F1] The reversed triad $(W;M_1,M_0)$ of an h-cobordism is again a compact smooth cobordism triad with collared boundary, the same manifold with the face labels exchanged ([[def-smooth-cobordism-triad-for-morse-theory]]), and it is again an h-cobordism because the definition is symmetric in the two faces ([[def-h-cobordism]]).

[F2] Zero- and one-handles can be eliminated: a connected h-cobordism of dimension $n+1$, $n\ge5$, with closed simply connected faces admits a presentation relative to its incoming boundary with no handles of index $0$ or $1$ ([[lem-zero-and-one-handles-can-be-eliminated-in-a-simply-connected-h-cobordism]]).

[F3] Negating an adapted Morse function produces the dual handle decomposition, in which a $k$-handle of the reversed presentation becomes an $(n+1-k)$-handle of a presentation relative to $M_0$, with attaching and belt spheres interchanged and the index ordered reversed ([[thm-handle-duality-from-negating-a-morse-function]], [[def-dual-handle-decomposition]]).

[F4] The low-index procedure removes only $0$- and $1$-handles and introduces only $3$-handles; it preserves any upper index bound at least three ([[lem-zero-and-one-handles-can-be-eliminated-in-a-simply-connected-h-cobordism]], proof step 5.1).

## Proof

**Proof technique:** direct.

1.1 By [F1] the reversed triad $(W;M_1,M_0)$ is again an h-cobordism with the same dimension, and its faces are the same closed simply connected $n$-manifolds in the opposite order while $W$ remains connected; hence the low-index elimination [F2] applies to the reversed triad and gives a presentation of $W$ relative to $M_1$ with no handles of index $0$ or $1$. [F1, F2, given]

2.1 Negate the Morse function of the reversed presentation and dualise by [F3]: a handle of index $k$ in the presentation relative to $M_1$ becomes a handle of index $n+1-k$ in a presentation relative to $M_0$, with attaching and belt spheres interchanged. Absent indices $0$ and $1$ therefore become absent indices $n+1$ and $n$, so the dual presentation relative to $M_0$ has no handles of index $n+1$ or $n$. [F3, step 1.1]

3.1 To obtain the two exclusions simultaneously, first eliminate $0,1$ relative to $M_0$ by [F2]. Its reversed presentation has every index at most $n-1$. Apply the actual low-index procedure to that presentation relative to $M_1$: by [F4] it deletes $0,1$ and introduces only $3$, so its maximum stays at most $n-1$, because $n\ge5$. Reverse back by [F3]. The resulting original indices lie between $2$ and $n-1$; both exclusions now hold in one presentation. No composition of two independently chosen presentations or face-fixing diffeomorphisms is being assumed. [F2, F3, F4, step 2.1, given] ∎
