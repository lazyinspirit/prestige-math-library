# Reader report — batch 75

Run: `non-ml-math-remaining-81-2026-10-18`  
Batch: `75`  
Role: reader

## Inventory reviewed

Assigned pages:

- `library/lie-theory/gauge-groups-and-representation-theory-interfaces.md` (A page; draft).
- `library/lie-theory/gauge-groups-and-representation-theory-interfaces-examples.md` (B page; draft).

Assigned items, by manifest dependency level:

- Level 0: `def-smooth-principal-g-bundle`.
- Level 1: `def-principal-connection-and-vertical-curvature`, `def-gauge-group-of-a-smooth-principal-bundle`.
- Level 2: `prop-gauge-transformations-act-on-principal-connections`, `prop-gauge-transformations-induce-associated-bundle-automorphisms`.
- Level 3: `ex-gauge-group-and-curvature-of-a-trivial-real-principal-bundle`.

The two page prerequisites were opened: `library/abstract-algebra/algebraic-representation-and-tensor-symmetry-map.md` and `library/lie-theory/real-forms-and-real-semisimple-lie-algebras.md`.

Direct item suppliers read for the assigned claims: `def-principal-g-bundle-and-associated-fiber-bundle`, `def-lie-group`, `def-smooth-manifold`, `def-smooth-map-between-manifolds-with-boundary`, `def-diffeomorphism-and-local-diffeomorphism-of-manifolds`, `def-countable-choice`, `thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure`, `def-differential-of-a-smooth-map`, `def-smooth-vector-field-as-a-tangent-bundle-section`, `def-lie-bracket-of-smooth-vector-fields`, `thm-vector-fields-form-a-lie-algebra`, `def-smooth-vector-bundle-rank-fibre-and-trivial-bundle`, `def-group`, `prop-identity-maps-and-composites-of-smooth-maps-are-smooth`, `thm-chain-rule-for-differentials-of-smooth-maps`, `cor-diffeomorphism-pushforward-preserves-lie-brackets`, `def-associated-bundle-to-a-principal-bundle-and-representation`, `thm-associated-vector-bundle-is-well-defined`, `def-vector-bundle-map-over-a-smooth-base-map`, `def-smooth-section-local-section-and-support`, and `prop-smooth-sections-form-a-module-over-smooth-functions`.

Items linked by the page summaries and opened for their stated hypotheses and claims: `def-lie-bracket-on-the-tangent-space-of-a-lie-group`, `cex-the-circle-and-line-have-isomorphic-one-dimensional-lie-algebras-but-are-not-isomorphic-lie-groups`, `thm-connected-lie-groups-are-central-quotients-of-their-simply-connected-integrations`, `prop-central-quotients-correspond-to-intermediate-character-lattices`, `thm-highest-weight-classification-for-a-compact-connected-lie-group`, `prop-differentiation-relates-compact-group-and-complexified-lie-algebra-highest-weights`, `cex-the-full-weight-lattice-does-not-integrate-to-every-central-quotient-group`, `ex-simply-connected-adjoint-and-intermediate-forms-of-a-semisimple-compact-group`, `def-connection-on-a-smooth-vector-bundle`, `def-curvature-of-a-vector-bundle-connection`, and `ex-gauge-transformation-of-a-connection-one-form`.

Reviewed `research/non-ml-math-remaining-81-2026-10-18-batch-75.proof-contracts.json` for its three proof-bearing items. Its cited supplier sections, routine-step mappings, and boundary-case notes match the current proof sections; no contract update was needed.

## Mathematical review and evidence

- The smooth principal-bundle definition preserves the right-action convention and adds smooth equivariant product charts. Its principal-bundle and Lie-group hypotheses agree with the cited definitions.
- The connection definition assumes a specified smooth right-invariant complement and does not claim existence. The vertical bundle and projection are supported by the local product charts. The tensoriality computation uses the bracket Leibniz rule correctly, and the local-frame argument yields a smooth vertical-valued alternating bundle map. The sign agrees with Vákár's horizontal-curvature formula, `Chapter 1, §1.3.1–§1.3.4, printed pp. 32–35 (PDF pp. 31–34)`, [Principal Bundles and Gauge Theories](https://arxiv.org/pdf/2110.06334).
- The gauge group definition is closed under composition and inverse, with the inverse base-fixing and equivariance identities justified. The cited Husemöller definition describes gauge transformations by these same two identities: [Basic Bundle Theory and K-Cohomology Invariants](https://www.mathematik.uni-muenchen.de/~schotten/Texte/978-3-540-74955-4_Book_LNP726corr1.pdf), Part I, Chapter 5, §6.1, printed p. 62 (PDF p. 77).
- The connection-action proof correctly transports vertical and horizontal subbundles, right invariance, projections, and curvature under a gauge diffeomorphism. The chain rule and diffeomorphism invariance of the vector-field bracket supply the needed steps. Smith's notes, Chapter 9, §9.4, printed p. 44 (PDF p. 43), give the principal-connection and curvature conventions: [Differential Geometry](https://math.berkeley.edu/~ltomczak/notes/Mich2022/DG_Notes.pdf).
- The associated-bundle map respects `[pg,v]=[p,ρ(g)v]`, is smooth and linear in local associated charts, has a smooth inverse, and induces the stated left action on sections. Neeb, Chapter 1, §1.6, Lemma 1.6.2 and Example 1.6.4, states the induced associated-bundle homomorphism and section action: [Differential Topology of Fiber Bundles](https://www.math.fau.de/wp-content/uploads/2024/01/bundle-lect.pdf), printed pp. 14–15 (PDF pp. 17–18).
- The trivial-bundle example's gauge-function classification, associated-line coordinate `[(x,y,t),v] ↦ (x,y,e^t v)`, multiplier `e^u`, horizontal span, bracket sign, and vertical curvature calculation are consistent with the supplied definitions. The nonconstant choice `u(x,y)=x` changes the horizontal distribution and carries the curvature as claimed; constant choices have identity differential.
- The A-page's global-form and representation-lattice summary retains the linked hypotheses: `AC_ω` for connected integrations, AC and a fixed maximal torus/positive system for the compact highest-weight statements, and the simply connected compact semisimple setting for the central-quotient lattice correspondence. The associated-bundle and connection-comparison paragraphs agree with their linked item statements.
- The B-page lists only its assigned example and accurately summarizes its computations. Its global-form references identify the cited examples and counterexample with their stated hypotheses. Neither page summary introduces a physical gauge assumption.

## Repairs and checks

No item or page edits were made. The numbered proof steps were already separated by blank lines. The one attempted patch was content-identical and made no source change. The required layout check was run once over all six assigned items:

```text
node tools/proof-layout.mjs items/def-smooth-principal-g-bundle.md items/def-principal-connection-and-vertical-curvature.md items/def-gauge-group-of-a-smooth-principal-bundle.md items/prop-gauge-transformations-act-on-principal-connections.md items/prop-gauge-transformations-induce-associated-bundle-automorphisms.md items/ex-gauge-group-and-curvature-of-a-trivial-real-principal-bundle.md
proof-layout: 6 items, 15 steps, 0 defects
```

No material repair occurred, so no contract, judge record, reflow, or precheck update was required.

## Defects and page verdicts

- Uneditable defects: none identified.
- A-page `gauge-groups-and-representation-theory-interfaces`: pass. Its title, item inventory, dependency narrative, hypotheses, and page summary agree with the reviewed items and linked suppliers.
- B-page `gauge-groups-and-representation-theory-interfaces-examples`: pass. Its example inventory and summary agree with the assigned example; the contextual global-form references are accurately qualified.
- Blocker: none.

## Coverage note

I opened the assigned item files before opening their suppliers, so I did not meet the requested supplier-first reading order. I then read the direct suppliers and page-summary-linked items needed to check the claims. I relied on the current published supplier statements for their established conclusions and did not independently re-prove every transitive proof in those published dependencies. No uncertainty remained about the assigned claims after checking those statements and the cited source passages.
