# Step 3a reader report — batch 105

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: reader  
Date: 2026-10-21

## Opened inventory

Assigned pages:

- `library/knot-theory/alternating-diagrams-and-crossing-number-minimality.md` (A)
- `library/knot-theory/alternating-diagrams-and-crossing-number-minimality-examples.md` (B)

All 20 items listed in the batch manifest were opened and read in dependency order:

- `def-crossing-number-of-link`
- `def-flype-crossing-ball-and-alternating-tangle-data`
- `def-reduced-alternating-link-diagram`
- `def-split-link`
- `def-tait-graph-of-a-link-diagram`
- `lem-connected-regular-link-diagram-has-checkerboard-coloring`
- `lem-disconnected-projection-components-separated-by-jordan-curve`
- `lem-kauffman-smoothing-operators-for-braid-crossings`
- `lem-connected-projection-has-connected-tait-graphs`
- `lem-disconnected-link-diagram-represents-a-split-link`
- `lem-definite-normal-pairing-forces-nonsplit-boundary`
- `lem-connected-diagram-bracket-span-bound-and-alternating-equality`
- `lem-alternating-checkerboard-normal-pairing-is-definite`
- `lem-connected-alternating-link-is-nonsplit`
- `thm-reduced-alternating-diagram-minimizes-crossings`
- `thm-tait-flyping-theorem`
- `lem-alternating-state-adequacy-and-jones-span`
- `cor-jones-span-detects-crossing-number-for-reduced-alternating-knots`
- `cex-knot-kt-50-boundary-case`
- `ex-knot-kt-50-worked-cases`

The two A-page prerequisites named in the page frontmatter were also opened:
`crossing-signs-writhe-and-linking-number` and
`kauffman-bracket-state-sum-and-jones-polynomial`. Their bodies are empty and
their inventories are retained.

The opened external direct item dependencies were `def-oriented-link-in-s-three-and-ambient-isotopy`, `def-regular-oriented-link-diagram`, `def-countable-choice`, `lem-every-oriented-link-admits-a-regular-projection`, `thm-well-ordering-principle`, `lem-choice-free-smooth-jordan-disk-parameters-and-prescribed-collars`, `def-elementary-geometric-half-twist`, `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `def-kauffman-bracket-smoothing-and-loop-value`, `thm-mayer-vietoris-sequence-in-singular-homology`, `cor-homology-of-spheres`, `thm-simplicial-and-singular-homology-agree-for-simplicial-complexes`, `thm-euler-formula-for-connected-plane-graphs`, `thm-normalized-bracket-is-an-oriented-link-invariant`, `def-planar-isotopy-of-link-diagrams`, `lem-component-marked-prime-decomposition-comparisons-lift-prime-flype-sequences`, `def-axiom-of-choice`, `lem-smooth-sphere-diffeomorphisms-extend-over-balls`, `thm-bracket-state-sum-matches-library-jones-specialization`, `lem-each-oriented-reidemeister-move-is-realized-by-ambient-isotopy`, and `def-closure-of-a-geometric-braid`.

For the geometric supplier chain, I additionally opened `thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three`, `lem-choice-free-isotopy-extension-for-a-compact-smooth-source`, `lem-smooth-disk-diffeomorphisms-fixing-boundary-admit-relative-smooth-isotopies`, `lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space`, `thm-polygonal-jordan-curve`, `thm-simple-polygon-admits-a-triangulation`, and `lem-choice-free-smooth-parametrized-ball-windows-and-disk-absorption`.

## Repairs and checks

1. In `lem-kauffman-smoothing-operators-for-braid-crossings`, the displayed `e_i` pairing crossed its two strands, contradicting the statement's top-cap/bottom-cup pairing. The figure now shows the noncrossing top cap and bottom cup. The mathematical statement and proof are unchanged. The batch proof-contract note records the diagram correction; the item has no `verification.judge` record to remove.

2. In `lem-connected-diagram-bracket-span-bound-and-alternating-equality`, Step 2.1 said that an incidence graph with one edge per saddle was connected. That graph description did not account for a saddle incident to more than two state circles. The proof now uses a bipartite incidence graph joining each saddle to every incident state circle; projection edges connect the endpoint saddles through their all-A and all-B state circles. The proof-contract derivation for Step 2.1 was updated. The item has no `verification.judge` record to remove.

For both changed items, reflow reported `unchanged`, precheck passed, and the final batched `proof-layout` run reported 2 items, 7 steps, and 0 defects.

## Uneditable findings

The complete sections in the listed published dependencies below contain inline hyperlinks. They require the appropriate immediately following `Definition references`, `Statement references`, or `Remarks references` section. Published content is outside this reader's write scope. The exact item, section, and assigned consumer for each issue are recorded in `research/inverse-problems-knot-theory-all-109-2026-10-19-reader-findings-105.json`.

- `def-oriented-link-in-s-three-and-ambient-isotopy`: hyperlinks interrupt the complete Definition.
- `def-regular-oriented-link-diagram`: hyperlinks interrupt the complete Definition.
- `def-elementary-geometric-half-twist`: hyperlinks interrupt the complete Definition and its prose Remarks.
- `thm-euler-formula-for-connected-plane-graphs`: hyperlinks interrupt the complete Statement.
- `thm-simplicial-and-singular-homology-agree-for-simplicial-complexes`: a hyperlink interrupts the complete Statement.
- `def-planar-isotopy-of-link-diagrams`: hyperlinks interrupt the complete Definition.
- `def-closure-of-a-geometric-braid`: hyperlinks interrupt the complete Definition.

Two published homology statements use a coefficient symbol `G` without specifying its domain. Hatcher's Chapter 2, §2.2 treats coefficient chains using a fixed abelian group. The assigned consumer instantiates these results with `Q`, but the source statements should state the coefficient-group hypothesis:

- `thm-mayer-vietoris-sequence-in-singular-homology`, Statement.
- `cor-homology-of-spheres`, Statement.

Two current-run draft suppliers outside batch 105 also need owner attention:

- `thm-bracket-state-sum-matches-library-jones-specialization`, Statement: the formula for `f_K(A)` is written using a regular diagram `D` without stating that `D` represents `K`. The assigned consumer is `lem-alternating-state-adequacy-and-jones-span`.
- `lem-choice-free-smooth-jordan-disk-parameters-and-prescribed-collars`, Proof 6.1: after moving `B(p_0)` to `p_1`, the proof says `q∘B^{-1}` fixes `p_1`. That needs `q(p_0)=p_1`, which the Statement does not impose. The item is reached by assigned consumer `thm-tait-flyping-theorem`; its use of the fixed-point germ case supplies that equality, so this gap does not affect that particular use.

## Page verdicts

- `alternating-diagrams-and-crossing-number-minimality` (A): pass. Its 18-item inventory matches the manifest, status remains draft, and the body is empty as required. No page-prose defect was found.
- `alternating-diagrams-and-crossing-number-minimality-examples` (B): pass. Its two examples match the manifest, status remains draft, and the body is empty as required. The assigned TikZ diagrams were checked; the trefoil and figure-eight Tait graphs and the oriented positive kink diagram are consistent with their descriptions. No page-prose defect was found.

## Blockers and coverage limits

There was no blocker to completing this review. The report does not claim a recursive audit of every transitive supplier proof or a full independent rereading of the primary 59-page Menasco–Thistlethwaite proof. For the marked prime theorem, Fontaine's complete exposition in §2.2, Definitions 2.8–2.9 and Theorem 2.10 (pp. 11–12) was read at https://pi.math.cornell.edu/~bfontain/partiii.pdf; the primary DOI/JSTOR copy was not accessible in the web tool. Kindred's arXiv HTML §2.2, Definitions 2.9 and 2.11, was read at https://arxiv.org/html/2008.06490 for flype and entire-flype conventions. Greene's *Alternating Links and Definite Surfaces*, §§2–4, including Proposition 4.1, was read at https://people.maths.ox.ac.uk/lackenby/Fox.pdf for the normal pairing and definiteness context. Menasco's 1984 Theorem 1(a),(b), p. 37 and its proof on pp. 41–42 were read from the available scan at https://www.scribd.com/document/471863717/1-s2-0-0040938384900235-main-2. Murasugi, Chapter 11, Propositions 11.1.1 and 11.2.6 (pp. 221, 228), was checked against searchable text of the book for the value-at-one input; direct retrieval of https://webhomes.maths.ed.ac.uk/~v1ranick/papers/murasug3.pdf exceeded the web-tool size limit. Hatcher, Algebraic Topology, §2.2 coefficient-chain construction (PDF p. 57, lines 3640–3646), was read at https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf. These locators state the exact reading limits; no whole-source audit is claimed.
