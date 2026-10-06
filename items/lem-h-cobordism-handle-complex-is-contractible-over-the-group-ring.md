---
id: lem-h-cobordism-handle-complex-is-contractible-over-the-group-ring
kind: lemma
title: "The handle complex of an h-cobordism is contractible over the group ring, with an explicit contraction"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 8
deps: ["def-based-handle-chain-complex-over-the-fundamental-group-ring", "def-h-cobordism", "lem-a-lifted-cellular-homotopy-equivalence-has-a-contractible-algebraic-mapping-cone", "thm-a-chain-map-is-a-homotopy-equivalence-exactly-when-its-cone-is-contractible", "def-chain-homotopy-equivalence", "def-mapping-cone-of-a-chain-map", "thm-composition-and-sum-formulas-for-whitehead-torsion", "thm-cellular-approximation-for-maps-of-cw-pairs", "def-homotopy-equivalence", "thm-covering-space-lifting-criterion", "def-universal-covering-space", "def-countable-choice"]
provenance:
  statement: ai-altered
  proof: literature-derived
justified_by: []
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
    - title: "Wolfgang Lück, A Basic Introduction to Surgery Theory (ICTP lecture notes, 27 October 2004; complete author text)"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Chapter 1 §§1.2--1.4, printed pp. 11--22; Chapter 2 §2.2, printed pp. 30--33"
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, electronic edition)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/books/surgery.pdf"
      locator: "Proposition 8.30, printed pp. 182--183; PDF pages 190, 191"
---
## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $(W;M_0,M_1)$ be a nonempty connected h-cobordism whose inclusions $M_i\hookrightarrow W$ are
homotopy equivalences, with a finite handle decomposition relative to $M_0$,
and let $C^{\mathrm h}_*(W,M_0)$ be its based handle complex over
$R=\mathbb Z[\pi_1(M_0)]$. Then $C^{\mathrm h}_*(W,M_0)$ is contractible: it
admits a right $R$-linear chain contraction $s$ with
$ds+sd=\mathrm{id}$. Choose a homotopy inverse $r:W\to M_0$ and homotopies
$ri\simeq\mathrm{id}_{M_0}$ and $ir\simeq\mathrm{id}_W$, cellularly
approximate $r$, and lift the maps and homotopies equivariantly to universal
covers. The lifted inclusion induces a chain homotopy equivalence, so its
algebraic mapping cone is contractible by the lifted-cone lemma. The based
pair sequence
$$0\to C_*(\widetilde M_0)\xrightarrow{C_*(\widetilde i)}C_*(\widetilde W)\to C^{\mathrm h}_*(W,M_0)\to 0$$
is degreewise split; its quotient complex is chain homotopy equivalent to that
mapping cone, hence is contractible. The argument constructs a contraction
from the lifted homotopy inverse and homotopies; it does not infer
contractibility from acyclicity.

## Facts & Assumptions

**Given:** An h-cobordism $(W;M_0,M_1)$ with a finite handle decomposition relative to $M_0$, and its based handle complex $C^{\mathrm h}_*(W,M_0)$ over $R=\mathbb Z[\pi_1(M_0)]$, all lifted data taken from the handle decomposition.

[F1] Both inclusions of an h-cobordism are homotopy equivalences, so the inclusion $\iota:M_0\hookrightarrow W$ induces an isomorphism on fundamental groups, and any homotopy inverse $r:W\to M_0$ with homotopies $r\iota\simeq\mathrm{id}_{M_0}$ and $\iota r\simeq\mathrm{id}_W$ can be replaced by a cellular map and cellular homotopies in the CW structure induced by the handle decomposition ([[def-h-cobordism]], [[thm-cellular-approximation-for-maps-of-cw-pairs]], [[def-homotopy-equivalence]]).

[F2] A lifted cellular homotopy equivalence of connected finite CW complexes induces a right-linear chain homotopy equivalence of the based cellular chain complexes of their universal covers, with chain homotopies induced by the lifted geometric homotopies, and its algebraic mapping cone is contractible ([[lem-a-lifted-cellular-homotopy-equivalence-has-a-contractible-algebraic-mapping-cone]], [[def-chain-homotopy-equivalence]], [[def-mapping-cone-of-a-chain-map]], [[thm-covering-space-lifting-criterion]], [[def-universal-covering-space]]).

[F3] A chain map of bounded based free complexes is a chain homotopy equivalence if and only if its algebraic mapping cone is contractible, and the based-exact-sequence clause of the AT-22 sum theorem identifies the torsion of the quotient of a degreewise split based exact sequence with the relevant cone torsion ([[thm-a-chain-map-is-a-homotopy-equivalence-exactly-when-its-cone-is-contractible]], [[thm-composition-and-sum-formulas-for-whitehead-torsion]]).

[F4] The based handle complex is the based relative cellular chain complex of the relative CW pair induced by the handle decomposition, and the degreewise split based pair sequence of a based subcomplex and its relative quotient exists with the quotient complex the relative based complex of the pair ([[def-based-handle-chain-complex-over-the-fundamental-group-ring]]).

## Proof

1.1 Choose a homotopy inverse $r:W\to M_0$ of the inclusion $\iota$ together with homotopies $H:r\iota\simeq\mathrm{id}_{M_0}$ and $K:\iota r\simeq\mathrm{id}_W$; by [F1] the inclusion is a homotopy equivalence and $r$ may be assumed cellular with cellular homotopies, so all this data is compatible with the CW structure induced by the handle decomposition. [F1, given]

2.1 Lift $r$ and the homotopies to the universal covers; the lifted inclusion $C_*(\widetilde\iota):C_*(\widetilde M_0)\to C_*(\widetilde W)$ is a right $R$-linear chain homotopy equivalence, with the chain homotopies induced by the lifted geometric homotopies, and its algebraic mapping cone $\operatorname{Cone}(C_*(\widetilde\iota))$ is contractible by the lifted-cone lemma of [F2]. [F2, step 1.1]

3.1 Consider the based pair sequence $0\to C_*(\widetilde M_0)\xrightarrow{C_*(\widetilde\iota)}C_*(\widetilde W)\to C^{\mathrm h}_*(W,M_0)\to 0$ of [F4]; it is degreewise based exact and split, because the relative cells of the handle decomposition and the cells over $M_0$ together form a basis of $C_*(\widetilde W)$ in each degree. [F4, step 2.1]

4.1 The quotient map $\gamma:\operatorname{Cone}(C_*(\widetilde\iota))\to C^{\mathrm h}_*(W,M_0)$, $\gamma(b,a):=[b]$, is a chain map for the cone differential of [[def-mapping-cone-of-a-chain-map]], since $q\circ C_*(\widetilde\iota)=0$ and $q$ is a chain map; in the degreewise splitting $C_*(\widetilde W)_n=C_*(\widetilde M_0)_n\oplus C^{\mathrm h}_n$ of [F4] its kernel consists of the pairs $(C_*(\widetilde\iota)a',a)$ and is the complex $K(a',a)=(\partial a'+a,-\partial a)$ on $C_*(\widetilde M_0)_n\oplus C_*(\widetilde M_0)_{n-1}$, which the explicit map $s(a',a)=(0,a')$ contracts, so the kernel is contractible. The displayed sequence $0\to\ker\gamma\to\operatorname{Cone}(C_*(\widetilde\iota))\to C^{\mathrm h}_*(W,M_0)\to0$ is degreewise split; choosing a graded splitting $\sigma$ and correcting it by the kernel contraction as in the proof of the based-exact-sequence clause of the AT-22 sum theorem produces a chain section $\sigma'$ with $d\sigma'=\sigma'd$, and then $\gamma H\sigma'$ contracts $C^{\mathrm h}_*(W,M_0)$ for any contraction $H$ of the cone. [F3, F4, step 2.1, step 3.1]

5.1 Therefore $C^{\mathrm h}_*(W,M_0)$ is contractible, with a right $R$-linear contraction $s$ constructed from the lifted homotopy inverse and homotopies; in particular the contraction is produced by the geometric data and not inferred from the vanishing of homology. [F2, F3, step 2.1, step 4.1] ∎
