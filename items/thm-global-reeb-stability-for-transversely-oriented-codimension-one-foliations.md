---
id: thm-global-reeb-stability-for-transversely-oriented-codimension-one-foliations
kind: theorem
title: "Global Reeb stability for transversely oriented codimension-one foliations"
status: draft
origin: pipeline
provenance: {"statement": "literature-derived", "proof": "literature-derived"}
deps: ["lem-a-compact-codimension-one-leaf-with-finite-fundamental-group-has-trivial-holonomy-when-transversely-oriented", "lem-compact-stable-leaves-form-an-open-saturated-set", "lem-compact-leaf-control-and-compact-ambientness-give-the-required-closedness", "lem-a-compact-holonomy-free-codimension-one-foliation-is-a-fiber-bundle-over-its-leaf-space", "cor-finite-fundamental-group-is-a-sufficient-not-necessary-reeb-stability-hypothesis", "def-transversely-oriented-codimension-one-foliation", "def-connected-space", "def-compact-space", "def-countable-choice-principle-for-foliation-pair", "def-axiom-of-choice", "lem-axiom-of-choice-implies-countable-choice", "prop-mapping-torus-foliations-realize-global-reeb-stable-examples"]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources: {"references": [{"title": "Ieke Moerdijk and Janez Mrčun, Introduction to Foliations and Lie Groupoids (Cambridge Studies in Advanced Mathematics 91, 2003) — design's locators §§2.3, 2.5–2.6, pp. 30–33 and 44–55; not retrievable as full text", "url": "https://www.cambridge.org/core/books/introduction-to-foliations-and-lie-groupoids/75BBFED277FF39A56594731202789016", "locator": "Design locators: §2.3, pp. 30–33 (local Reeb stability); §2.5, pp. 44–51 (global Reeb stability); §2.6, pp. 51–55 (Thurston stability)"}, {"title": "Danny Calegari, Foliations and the Geometry of 3-Manifolds (Oxford Mathematical Monographs; complete author-hosted PDF)", "url": "https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf", "locator": "§4.2, printed pp. 140–143 (PDF pp. 149–152); §4.3, printed pp. 144–145 (PDF pp. 153–154), Example 4.7; Lemma 4.24, printed p. 155 (PDF p. 164)"}, {"title": "Tomasz Mrowka, MIT 18.965 Differential Topology, lecture notes (complete PDF)", "url": "https://math.mit.edu/~mrowka/math965lectnote.pdf", "locator": "§§20–23, PDF pp. 52–56"}]}
dependency_level: 16
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $F$ be a smooth transversely oriented codimension-one foliation of a closed connected smooth manifold $M$, and suppose some leaf $L$ is compact with finite fundamental group. Every leaf is compact, diffeomorphic to $L$, and has trivial holonomy. The leaf space $M/F$ is a circle, and the quotient is a smooth locally trivial fibre bundle $q:M\to S^1$ whose fibres are exactly the leaves. Its total space is a mapping torus of a diffeomorphism of $L$. A choice of transverse connection identifies its monodromy with the return diffeomorphism of the whole fibre after one circuit of the base; its isotopy class is independent of that choice.

The boundary/interval variant is a separate theorem. No boundary is allowed in the present statement.

## Facts & Assumptions

**Given:** The manifold, foliation, compact leaf and full-AC hypothesis of the statement.

[F1] Full AC implies the countable choice used by the local foliation suppliers ([[lem-axiom-of-choice-implies-countable-choice]], [[def-countable-choice-principle-for-foliation-pair]]).

[F2] The union $S$ of compact leaves diffeomorphic to $L$ is nonempty, open and saturated ([[lem-compact-stable-leaves-form-an-open-saturated-set]]), and is closed under exactly these hypotheses ([[lem-compact-leaf-control-and-compact-ambientness-give-the-required-closedness]]).

[F3] Finite fundamental group and coorientation make the holonomy of a compact leaf trivial ([[lem-a-compact-codimension-one-leaf-with-finite-fundamental-group-has-trivial-holonomy-when-transversely-oriented]]).

[F4] A compact foliation with all leaves diffeomorphic to $L$ and holonomy trivial is a locally trivial fibre bundle over its Hausdorff circle leaf space ([[lem-a-compact-holonomy-free-codimension-one-foliation-is-a-fiber-bundle-over-its-leaf-space]]).

[F5] With the quotient action $n\cdot(y,t)=(f^n(y),t+n)$ the mapping torus has positive-time fibre return $f^{-1}$ ([[prop-mapping-torus-foliations-realize-global-reeb-stable-examples]]).

## Proof

1.1 By F1 all the countable-choice hypotheses of the local suppliers hold. By F2, $S$ is nonempty, open and closed. Since $M$ is connected, $S=M$. Thus every leaf is compact and diffeomorphic to $L$, and in particular has finite fundamental group. By F3 its holonomy is trivial. The closedness supplier proves its limit argument using finite-dimensional $H_{\dim M-1}$, finite compact barriers and one-sheeted collar graphs, including the orientation-double-cover case; no dimension-three substitution is being used. [F1, F2, F3]

2.1 Apply F4: saturated product neighborhoods give interval charts on the leaf space and bundle trivializations of the quotient. The transverse coordinate changes are smooth and increasing, so these charts define a smooth oriented one-manifold structure on the compact connected Hausdorff quotient. Its circle identification can be made smooth by following a positive smooth vector field around this compact one-manifold. Thus $q:M\to S^1$ is a smooth locally trivial bundle with leaves as fibres. [F4, step 1.1]

3.1 Choose a smooth transverse vector field projecting under $dq$ to the unit positive vector field on $S^1$: local product lifts are patched with a finite partition of unity, and rescaled to have that projection. Its flow exists for the whole circuit because $M$ is compact. If $L_0=q^{-1}(0)$, flow for time one gives a diffeomorphism $g:L_0\to L_0$. Flow for $0\le t\le1$ trivializes the pullback bundle over $[0,1]$; at the endpoints $(y,1)$ is identified with $(g(y),0)$. Therefore $M$ is the mapping torus with quotient action $f=g^{-1}$, and F5 confirms that positive return is $g$. Two choices of projecting vector field are joined by their convex interpolation, which still projects to the unit base field; smooth flow dependence supplies an isotopy between their return maps. A closed transversal is a single curve and does not by itself specify a return map on the entire fibre. [F5, step 2.1, construct]

4.1 The asserted compactness, common leaf type, trivial holonomy, circle leaf space, fibre bundle and mapping torus description now follow from steps 1.1–3.1, with monodromy the whole-fibre return for the chosen connection. Full AC enters through the closedness supplier's finite-CW and rational-homology inputs; F1 only propagates its consequence $\mathrm{AC}_\omega$ and does not assert the converse. [step 1.1, step 2.1, step 3.1] ∎
