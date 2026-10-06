---
id: lem-theta-n-connected-sum-operation-is-well-defined
kind: lemma
title: "Connected sum descends to oriented h-cobordism classes"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-connected-sum-of-oriented-homotopy-spheres-is-a-homotopy-sphere, def-h-cobordism, def-smooth-collar-of-a-manifold-boundary, lem-collar-gluing-and-corner-smoothing-give-transitivity, thm-excision-for-singular-homology, thm-long-exact-sequence-of-a-pair-in-singular-homology, thm-mayer-vietoris-sequence-in-singular-homology, cor-seifert-van-kampen-simply-connected-overlap, thm-whitehead-theorem, lem-attaching-handles-along-isotopic-attaching-embeddings-preserves-the-diffeomorphism-type, lem-compact-smooth-manifolds-have-finite-cw-models-under-countable-choice, thm-relative-hurewicz-theorem, def-countable-choice, thm-smooth-simply-connected-h-cobordism-theorem]
justified_by: []
aliases: []
landmark: false
dependency_level: 6
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "Michel Kervaire and John Milnor, Groups of Homotopy Spheres I, Annals of Mathematics 77 (1963), 504-537"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/kervmiln.pdf"
      locator: "printed pp. 505-508, connected sum and the group operation on homotopy spheres"
    - title: "John Milnor, Lectures on the h-Cobordism Theorem, section 9, printed pp. 109-110"
      url: "https://www.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf"
      locator: "boundary connected sum and collar gluing"
---

## Statement

Assume $\mathrm{AC}_\omega$. For $n\ge5$, oriented connected sum of smooth
homotopy $n$-spheres descends to oriented h-cobordism classes and defines an
associative and commutative operation with the class of $S^n$ as identity.

## Facts & Assumptions

**Given:** Oriented smooth homotopy $n$-spheres with $n\ge5$, h-cobordisms $W:\Sigma_0\to\Sigma_1$ and $W':\Sigma'_0\to\Sigma'_1$, and the orientation-compatible boundary identification used to form connected sums.

[A1] Countable choice $\mathrm{AC}_\omega$ is assumed ([[def-countable-choice]]).

[L1] Connected sum of oriented homotopy spheres is again an oriented homotopy sphere for $n\ge3$ ([[lem-connected-sum-of-oriented-homotopy-spheres-is-a-homotopy-sphere]]), and collar gluing and corner smoothing of cobordisms are available ([[lem-collar-gluing-and-corner-smoothing-give-transitivity]], [[def-smooth-collar-of-a-manifold-boundary]]).

[L2] An h-cobordism is a compact smooth cobordism triad whose two face inclusions are homotopy equivalences ([[def-h-cobordism]]), and the faces arising here are closed and connected.

[L3] Assume $\mathrm{AC}_\omega$. Let $X$ be a compact smooth manifold with boundary, let $0\le k\le\dim X$, and let attaching embeddings $\varphi_0,\varphi_1$ of $S^{k-1}\times D^{\dim X-k}$ into $\partial X$ extend over a neighbourhood of the disk factor and be joined by a smooth isotopy through such embeddings that is constant near the ends of the parameter interval. Then the corner-rounded handle attachments $X\cup_{\varphi_0}(D^k\times D^{\dim X-k})$ and $X\cup_{\varphi_1}(D^k\times D^{\dim X-k})$ are diffeomorphic by a diffeomorphism that is the identity outside a collar of the swept attaching regions, and any later handles attached to the swept region are carried along, so the two total manifolds are diffeomorphic as well ([[lem-attaching-handles-along-isotopic-attaching-embeddings-preserves-the-diffeomorphism-type]]).

[L4] Under $\mathrm{AC}_\omega$, every connected smooth h-cobordism of dimension at least six with closed simply connected faces is a product relative to the incoming face ([[thm-smooth-simply-connected-h-cobordism-theorem]]).

## Proof

**Proof technique:** direct.

1.1 An oriented connected sum uses small coordinate disks and the fixed orientation-reversing linear reflection of their boundary coordinates, as in [L1]. Changes of small coordinate disks are joined by isotopies: shrink each disk within its chart, move its centre along a finite chain of charts on a path in the connected manifold, and move its oriented frame through $GL_n^+(\mathbb R)$: Gram–Schmidt deforms the positive triangular factor to identity and plane rotations deform the orthogonal factor to identity. On a sufficiently small disk each chart change is isotopic to its derivative by rescaling, retaining positive determinant; the finitely many stages yield the required isotopy. Reparameterize it to be stationary near its ends. Applying [L3] to a $1$-handle joining the outgoing faces of two disjoint product collars transfers this isotopy to an orientation-preserving diffeomorphism of their connected-sum boundary. Thus coordinate-disk choices do not affect the sum. This argument asserts no independence under an arbitrary nonextendable boundary twist. [L1, L3, A1, given, construct]

2.1 By [L2] the h-cobordisms $W,W'$ are connected and their faces are simply connected homotopy spheres. Their dimension is $n+1\ge6$, so [L4] gives orientation-preserving diffeomorphisms $f:\Sigma_0\to\Sigma_1$ and $f':\Sigma'_0\to\Sigma'_1$: a product diffeomorphism relative to the incoming face preserves its orientation, and hence the orientation throughout the connected cobordism. Choose outgoing disk charts by transporting the incoming ones through $f,f'$. The restrictions of $f,f'$ then agree with the coordinate reflection used at the neck and glue to an orientation-preserving diffeomorphism $\Sigma_0\#\Sigma'_0\to\Sigma_1\#\Sigma'_1$. Its product cylinder is an oriented h-cobordism. Step 1.1 removes dependence on the disk choices, proving descent to classes. [step 1.1, L2, L4, A1]

3.1 For three summands choose two disjoint small disks in the middle one and one disk in each outer one. Both groupings are the same quotient of the three punctured manifolds with the same two neck identifications; regrouping the quotient gives an orientation-preserving diffeomorphism. Interchanging the summands reverses the neck parameter and applies the fixed reflection on its sphere factor, so the two orientation signs cancel and give an orientation-preserving diffeomorphism. Together with step 1.1 these prove associativity and commutativity. [step 1.1, step 2.1, construct]

4.1 The complement of a standard coordinate disk in $S^n$ is a standard disk. The coordinate reflection extends linearly over it, so gluing this complement into the removed disk of $\Sigma$ restores $\Sigma$ orientation-preservingly. Thus $S^n$ is an identity; [L1] ensures that every sum remains a homotopy sphere. [step 1.1, step 3.1, L1]

5.1 Connected sum consequently defines the asserted associative, commutative operation on oriented h-cobordism classes with identity $[S^n]$. [step 2.1, step 3.1, step 4.1] ∎
