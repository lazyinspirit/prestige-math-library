---
id: prop-transverse-volume-preserving-flow-implies-tautness-in-the-compact-cooriented-three-dimensional-setting
kind: proposition
title: A transverse volume-preserving flow implies tautness in the compact cooriented three-dimensional setting
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps:
- def-taut-codimension-one-foliation
- def-dead-end-component
- lem-a-foliation-is-taut-if-and-only-if-it-has-no-dead-end-component
- def-local-and-global-flow
- def-complete-vector-field
- cor-every-smooth-vector-field-on-a-compact-manifold-is-complete
- def-volume-form-on-an-oriented-manifold
- prop-a-tensor-field-is-invariant-under-a-flow-if-and-only-if-its-lie-derivative-vanishes
- def-lie-derivative-of-a-tensor-field
- def-compact-space
- def-countable-choice-principle-for-foliation-pair
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 14
verification:
  precheck: pass
sources:
  scraped: []
  references:
  - title: Danny Calegari, Foliations and the Geometry of 3-Manifolds (Oxford Mathematical Monographs; complete
      author-hosted PDF)
    url: https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf
    locator: §4.4, Theorem 4.29 with proof, printed pp. 157-158
  - title: 'Samuel Ranz, Approximately Holomorphic Techniques in Foliations: A Simple Proof of Novikov''s Theorem
      (PhD thesis, Universidad Autonoma de Madrid, 2024; complete PDF)'
    url: https://www.icmat.es/Thesis/2024/Tesis_Samuel_Ranz.pdf
    locator: §2.2, Lemma 2.10, printed pp. 38-39
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$. Let $F$ be a transversely oriented codimension-one foliation of a closed oriented $3$-manifold $M$, and let $X$ be a smooth vector field transverse to $F$ whose flow preserves a volume form $\mu$ on $M$, i.e. $L_X\mu=0$. Then $F$ is taut. (The flow of $X$ is complete because $M$ is compact.)

## Facts & Assumptions

**Given:** A closed oriented three-manifold $M$ with a transversely oriented codimension-one foliation $F$, a smooth vector field $X$ transverse to $F$ with $L_X\mu=0$ for a volume form $\mu$, and the flow $\phi_t$ of $X$.

[F1] A transversely oriented foliation of a compact manifold is taut if and only if it has no dead-end component, and a dead-end component is a compact saturated submanifold whose boundary leaves carry the co-orientation inwards ([[lem-a-foliation-is-taut-if-and-only-if-it-has-no-dead-end-component]], [[def-dead-end-component]], [[def-taut-codimension-one-foliation]]).

[F2] A smooth vector field on a compact manifold is complete, so its flow is defined for all real times and is a smooth one-parameter group of diffeomorphisms ([[cor-every-smooth-vector-field-on-a-compact-manifold-is-complete]], [[def-complete-vector-field]], [[def-local-and-global-flow]]).

[F3] A tensor field is invariant under a flow if and only if its Lie derivative in the generating field vanishes, so $L_X\mu=0$ makes every $\phi_t$ preserve $\mu$ ([[prop-a-tensor-field-is-invariant-under-a-flow-if-and-only-if-its-lie-derivative-vanishes]], [[def-lie-derivative-of-a-tensor-field]]).

[F4] A volume form on an oriented manifold assigns finite positive measure to every compact region with nonempty interior ([[def-volume-form-on-an-oriented-manifold]], [[def-compact-space]]).

[F5] The standing assumption is Countable Choice $\mathrm{AC}_\omega$ as recorded for this pair ([[def-countable-choice-principle-for-foliation-pair]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $F$ is not taut. By [F1] there is a dead-end region; take a connected component $N$ with nonempty boundary. The sign of $X$ relative to the chosen coorientation is constant on this connected region, so we may choose the transverse field $X$ co-oriented so that it points inwards along $\partial N$: replacing $X$ by $-X$ preserves $L_X\mu=0$ up to sign and changes the co-orientation, so the volume-preservation hypothesis is unaffected. [F1, given, choose]

2.1 A transverse flow with this co-orientation maps $N$ properly into itself: an integral curve starting in $N$ cannot cross $\partial N$ outwards without violating the inward co-orientation, so $\phi_t(N)\subseteq N$ for $t\ge0$, and the inclusion is proper for every $t>0$ because the flow moves points of $N$ strictly inwards across a small collar of the boundary. [F1, F2, step 1.1]

3.1 On the other hand $\mu(\phi_t(N))=\mu(N)$ by [F3], and $\mu(N)<\infty$ because $N$ is compact and $\mu$ is a volume form [F4]. The proper inclusion leaves in $N\setminus\phi_t(N)$ a nonempty open set, hence positive measure for $t>0$, contradicting the equality of measures. Therefore no dead-end component exists and $F$ is taut. [F3, F4, step 2.1]

4.1 This is Ranz's volume-preserving-flow lemma and the converse direction of Calegari's volume criterion, with completeness of the flow supplied by compactness of $M$ [F2]; the argument uses only finitely many charts and one flow, so it consumes at most the standing countable choice from [F5]. [F2, F5, step 3.1] ∎
