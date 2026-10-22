# Knot Theory prerequisite and ownership map

Research design only. Every definition/procedure/result has one owner below. The item graph is the logical design, not proof acceptance; source-recovery limitations remain explicit. Existing item interfaces are separate exact current-carrier bindings in the JSON. No B/remark/op item supplies a proof.

## Pair order

| Pair | Owner A page | Direct earlier A prerequisites |
|---|---|---|
| KT-01 | `wirtinger-presentations-and-knot-groups` | — |
| KT-02 | `knot-exteriors-and-peripheral-systems` | — |
| KT-03 | `crossing-signs-writhe-and-linking-number` | — |
| KT-04 | `seifert-surfaces-and-knot-genus` | `crossing-signs-writhe-and-linking-number` |
| KT-05 | `connected-sums-and-prime-decomposition` | `knot-exteriors-and-peripheral-systems`, `seifert-surfaces-and-knot-genus` |
| KT-06 | `seifert-matrices-and-the-alexander-module` | `knot-exteriors-and-peripheral-systems`, `crossing-signs-writhe-and-linking-number`, `seifert-surfaces-and-knot-genus` |
| KT-07 | `alexander-polynomial-from-seifert-matrices` | `seifert-matrices-and-the-alexander-module` |
| KT-08 | `fox-colorings-and-quandle-invariants` | `wirtinger-presentations-and-knot-groups`, `crossing-signs-writhe-and-linking-number` |
| KT-09 | `multivariable-alexander-modules-and-chain-models` | `wirtinger-presentations-and-knot-groups`, `knot-exteriors-and-peripheral-systems` |
| KT-10 | `twisted-alexander-polynomials-and-reidemeister-torsion` | `wirtinger-presentations-and-knot-groups`, `knot-exteriors-and-peripheral-systems`, `multivariable-alexander-modules-and-chain-models` |
| KT-11 | `cyclic-branched-covers-and-knot-determinants` | `knot-exteriors-and-peripheral-systems`, `seifert-matrices-and-the-alexander-module`, `alexander-polynomial-from-seifert-matrices` |
| KT-12 | `levine-tristram-signatures-and-arf-invariant` | `seifert-matrices-and-the-alexander-module`, `alexander-polynomial-from-seifert-matrices` |
| KT-13 | `dehn-surgery-on-knots-and-homology` | `knot-exteriors-and-peripheral-systems`, `crossing-signs-writhe-and-linking-number` |
| KT-14 | `three-manifold-surgery-presentations-and-kirby-moves` | `knot-exteriors-and-peripheral-systems`, `dehn-surgery-on-knots-and-homology` |
| KT-16 | `torus-knots-and-seifert-fibered-exteriors` | `knot-exteriors-and-peripheral-systems`, `connected-sums-and-prime-decomposition`, `alexander-polynomial-from-seifert-matrices` |
| KT-17 | `satellite-knots-and-jsj-tori` | `knot-exteriors-and-peripheral-systems`, `connected-sums-and-prime-decomposition`, `torus-knots-and-seifert-fibered-exteriors` |
| KT-18 | `hyperbolic-knot-complements-and-volume` | `knot-exteriors-and-peripheral-systems`, `satellite-knots-and-jsj-tori` |
| KT-19 | `hyperbolic-dehn-filling-and-exceptional-slopes` | `knot-exteriors-and-peripheral-systems`, `dehn-surgery-on-knots-and-homology`, `hyperbolic-knot-complements-and-volume` |
| KT-21 | `smooth-and-topological-knot-concordance` | `seifert-surfaces-and-knot-genus`, `connected-sums-and-prime-decomposition` |
| KT-22 | `algebraic-knot-concordance-and-metabolic-forms` | `seifert-matrices-and-the-alexander-module`, `alexander-polynomial-from-seifert-matrices`, `smooth-and-topological-knot-concordance` |
| KT-23 | `fox-milnor-factorization-and-slice-obstructions` | `alexander-polynomial-from-seifert-matrices`, `levine-tristram-signatures-and-arf-invariant`, `smooth-and-topological-knot-concordance`, `algebraic-knot-concordance-and-metabolic-forms` |
| KT-24 | `casson-gordon-invariants-and-sliceness-obstructions` | `cyclic-branched-covers-and-knot-determinants`, `levine-tristram-signatures-and-arf-invariant`, `smooth-and-topological-knot-concordance`, `algebraic-knot-concordance-and-metabolic-forms` |
| KT-25 | `freedman-theorem-and-topological-sliceness` | `alexander-polynomial-from-seifert-matrices`, `smooth-and-topological-knot-concordance`, `fox-milnor-factorization-and-slice-obstructions` |
| KT-26 | `smooth-sliceness-and-four-ball-genus-obstructions` | `knot-exteriors-and-peripheral-systems`, `cyclic-branched-covers-and-knot-determinants`, `dehn-surgery-on-knots-and-homology`, `smooth-and-topological-knot-concordance` |
| KT-27 | `satellite-operators-and-knot-concordance-filtrations` | `twisted-alexander-polynomials-and-reidemeister-torsion`, `satellite-knots-and-jsj-tori`, `smooth-and-topological-knot-concordance`, `algebraic-knot-concordance-and-metabolic-forms`, `fox-milnor-factorization-and-slice-obstructions`, `freedman-theorem-and-topological-sliceness` |
| KT-28 | `ribbon-knots-and-slice-ribbon-problem` | `smooth-and-topological-knot-concordance` |
| KT-29 | `kauffman-bracket-state-sum-and-jones-polynomial` | `crossing-signs-writhe-and-linking-number` |
| KT-30 | `kauffman-and-dubrovnik-polynomials-from-bmw-algebras` | `crossing-signs-writhe-and-linking-number`, `kauffman-bracket-state-sum-and-jones-polynomial` |
| KT-31 | `skein-modules-for-links-in-three-manifolds` | `kauffman-bracket-state-sum-and-jones-polynomial` |
| KT-32 | `root-of-unity-skein-tqft-for-three-manifolds` | `three-manifold-surgery-presentations-and-kirby-moves`, `skein-modules-for-links-in-three-manifolds` |
| KT-33 | `ribbon-categories-and-reshetikhin-turaev-knot-invariants` | `kauffman-bracket-state-sum-and-jones-polynomial`, `kauffman-and-dubrovnik-polynomials-from-bmw-algebras` |
| KT-34 | `vassiliev-invariants-and-chord-diagrams` | `crossing-signs-writhe-and-linking-number` |
| KT-35 | `kontsevich-integral-and-universal-finite-type-invariants` | `vassiliev-invariants-and-chord-diagrams` |
| KT-36 | `colored-jones-invariant-and-volume-conjecture` | `hyperbolic-knot-complements-and-volume`, `ribbon-categories-and-reshetikhin-turaev-knot-invariants` |
| KT-37 | `khovanov-homology-and-jones-categorification` | `kauffman-bracket-state-sum-and-jones-polynomial` |
| KT-38 | `lee-deformation-and-rasmussen-s-invariant` | `smooth-and-topological-knot-concordance`, `khovanov-homology-and-jones-categorification` |
| KT-39 | `grid-homology-and-combinatorial-knot-floer-theory` | `seifert-surfaces-and-knot-genus` |
| KT-40 | `knot-cobordism-maps-and-functoriality` | `smooth-and-topological-knot-concordance`, `khovanov-homology-and-jones-categorification`, `grid-homology-and-combinatorial-knot-floer-theory` |
| KT-41 | `tau-invariant-and-the-four-ball-genus` | `smooth-and-topological-knot-concordance`, `grid-homology-and-combinatorial-knot-floer-theory`, `knot-cobordism-maps-and-functoriality` |
| KT-42 | `epsilon-and-upsilon-concordance-invariants` | `grid-homology-and-combinatorial-knot-floer-theory`, `tau-invariant-and-the-four-ball-genus` |
| KT-43 | `knot-floer-genus-and-fiberedness-detection` | `satellite-knots-and-jsj-tori`, `grid-homology-and-combinatorial-knot-floer-theory` |
| KT-44 | `khovanov-homology-detects-the-unknot` | `knot-exteriors-and-peripheral-systems`, `khovanov-homology-and-jones-categorification` |
| KT-15 | `knot-exterior-rigidity-and-the-complement-theorem` | `wirtinger-presentations-and-knot-groups`, `knot-exteriors-and-peripheral-systems`, `dehn-surgery-on-knots-and-homology`, `khovanov-homology-detects-the-unknot` |
| KT-20 | `character-varieties-and-the-a-polynomial` | `wirtinger-presentations-and-knot-groups`, `knot-exteriors-and-peripheral-systems`, `twisted-alexander-polynomials-and-reidemeister-torsion`, `satellite-knots-and-jsj-tori`, `hyperbolic-dehn-filling-and-exceptional-slopes`, `khovanov-homology-detects-the-unknot` |
| KT-45 | `khovanov-to-floer-spectral-sequence` | `cyclic-branched-covers-and-knot-determinants`, `khovanov-homology-and-jones-categorification`, `grid-homology-and-combinatorial-knot-floer-theory` |
| KT-46 | `branched-cover-correction-terms-and-sliceness` | `cyclic-branched-covers-and-knot-determinants`, `smooth-and-topological-knot-concordance`, `grid-homology-and-combinatorial-knot-floer-theory` |
| KT-47 | `planar-diagram-codes-and-knot-table-enumeration` | `wirtinger-presentations-and-knot-groups`, `crossing-signs-writhe-and-linking-number` |
| KT-48 | `terminating-computations-for-classical-knot-invariants` | `fox-colorings-and-quandle-invariants`, `kauffman-bracket-state-sum-and-jones-polynomial`, `planar-diagram-codes-and-knot-table-enumeration` |
| KT-49 | `normal-surface-unknot-recognition` | `knot-exteriors-and-peripheral-systems`, `planar-diagram-codes-and-knot-table-enumeration` |
| KT-50 | `alternating-diagrams-and-crossing-number-minimality` | `crossing-signs-writhe-and-linking-number`, `kauffman-bracket-state-sum-and-jones-polynomial` |
| KT-51 | `open-questions-in-knot-polynomials-and-surgery` | `kauffman-bracket-state-sum-and-jones-polynomial`, `vassiliev-invariants-and-chord-diagrams`, `character-varieties-and-the-a-polynomial` |
| KT-52 | `bridge-presentations-and-unknotting-number` | `wirtinger-presentations-and-knot-groups`, `crossing-signs-writhe-and-linking-number`, `connected-sums-and-prime-decomposition`, `levine-tristram-signatures-and-arf-invariant` |
| KT-53 | `milnor-invariants-and-link-peripheral-nilpotent-quotients` | `wirtinger-presentations-and-knot-groups`, `knot-exteriors-and-peripheral-systems`, `crossing-signs-writhe-and-linking-number`, `multivariable-alexander-modules-and-chain-models` |
| KT-54 | `zero-traces-and-conway-nonsliceness` | `knot-exteriors-and-peripheral-systems`, `dehn-surgery-on-knots-and-homology`, `three-manifold-surgery-presentations-and-kirby-moves`, `freedman-theorem-and-topological-sliceness`, `lee-deformation-and-rasmussen-s-invariant` |

## Item contracts in topological order

### `def-knot-exterior`

**Kind:** definition. **Owner:** `knot-exteriors-and-peripheral-systems` (KT-02).

defines $E_K=S^3\setminus\operatorname{int}N(K)$ for a closed tubular neighborhood $N(K)$, keeping its boundary torus and the chosen orientation.

**Direct prerequisites:** `def-framing-of-a-normal-bundle`, `def-oriented-link-in-s-three-and-ambient-isotopy`, `def-countable-choice`.

**Proof/definition route:** the current link-complement lemma concerns
the open complement and does not itself provide the marked compact exterior.
Use the smooth tubular-neighborhood theorem for the oriented normal two-plane
bundle of a circle, trivialize that oriented rank-two bundle over $S^1$, and
identify its unit normal circle bundle with $T^2$. Excision and Alexander duality give
the meridian generator; the preferred longitude is the kernel generator of
$H_1(\partial E_K)\to H_1(E_K)$. Distinguish a geometric push-off from the
unique zero-linking longitude and record orientation reversal. **Local prerequisite modules:** `lem-knot-normal-circle-bundle-trivialization`, `thm-knot-exterior-homology-and-longitude`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-1/ Calegari 2025 §2.2; reader-4/ Hatcher Basic 3-Manifold Notes, compact exterior context. Future content authoring must supply local proofs; no citation-only fallback.

### `def-knot-meridian-and-preferred-longitude`

**Kind:** definition. **Owner:** `knot-exteriors-and-peripheral-systems` (KT-02).

defines the meridian as the boundary of a normal disk and the preferred longitude as the oriented primitive parallel curve whose class vanishes in $H_1(E_K;\mathbb Z)$. It fixes base paths only up to conjugacy in the peripheral subgroup.

**Direct prerequisites:** `def-framing-of-a-normal-bundle`, `def-oriented-link-in-s-three-and-ambient-isotopy`, `def-knot-exterior`, `def-countable-choice`.

**Proof/definition route:** the current link-complement lemma concerns
the open complement and does not itself provide the marked compact exterior.
Use the smooth tubular-neighborhood theorem for the oriented normal two-plane
bundle of a circle, trivialize that oriented rank-two bundle over $S^1$, and
identify its unit normal circle bundle with $T^2$. Excision and Alexander duality give
the meridian generator; the preferred longitude is the kernel generator of
$H_1(\partial E_K)\to H_1(E_K)$. Distinguish a geometric push-off from the
unique zero-linking longitude and record orientation reversal. **Local prerequisite modules:** `lem-knot-normal-circle-bundle-trivialization`, `thm-knot-exterior-homology-and-longitude`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-1/ Calegari 2025 §2.2; reader-4/ Hatcher Basic 3-Manifold Notes, compact exterior context. Future content authoring must supply local proofs; no citation-only fallback.

### `def-knot-planar-code`

**Kind:** definition. **Owner:** `wirtinger-presentations-and-knot-groups` (KT-01).

fixes a finite planar-diagram code with over/under flags, oriented edge ends and cyclic half-edge order; it does not encode an algebraic crossing sign, which is defined in KT-03. The code is a representation of an already valid regular diagram; planarity and incidence are input conditions, not silently repaired.

**Direct prerequisites:** `def-oriented-link-in-s-three-and-ambient-isotopy`, `def-regular-oriented-link-diagram`, `thm-seifert-van-kampen`.

**Proof/definition route:** reuse
`def-oriented-link-in-s-three-and-ambient-isotopy`,
`def-regular-oriented-link-diagram`, and `thm-seifert-van-kampen`. First
remove small crossing balls and decompose the complement into the under-arc
pieces; each piece contributes its meridian, and each overlap gives the
crossing conjugacy. Prove that the chosen meridian is invertible and that
changing the base arc conjugates the presentation, not its isomorphism type.
Then verify the finite code scan has one output relation per crossing and no
unlisted generator. The proof uses van Kampen on the actual open cover and
the crossing ball local model, not an appeal to a diagram. **Local prerequisite modules:** `lem-wirtinger-crossing-ball-cover`, `lem-wirtinger-local-meridian-conjugacy`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-1/ Calegari 2025 §§4.1–4.3 (source row calegari-2025); current oriented-link/Reidemeister suppliers. Future content authoring must supply local proofs; no citation-only fallback.

### `alg-knot-wirtinger-presentation-from-code`

**Kind:** algorithm. **Owner:** `wirtinger-presentations-and-knot-groups` (KT-01).

takes such a connected diagram plus a base arc, labels each maximal under-arc, chooses one meridian generator per arc, and writes the crossing conjugacy relation from the local oriented crossing chart. It returns a finite group presentation and the meridian words; if a supplied code fails its incidence, orientation, or crossing checks, it returns

**Direct prerequisites:** `def-oriented-link-in-s-three-and-ambient-isotopy`, `def-regular-oriented-link-diagram`, `thm-seifert-van-kampen`, `def-knot-planar-code`.

**Proof/definition route:** reuse
`def-oriented-link-in-s-three-and-ambient-isotopy`,
`def-regular-oriented-link-diagram`, and `thm-seifert-van-kampen`. First
remove small crossing balls and decompose the complement into the under-arc
pieces; each piece contributes its meridian, and each overlap gives the
crossing conjugacy. Prove that the chosen meridian is invertible and that
changing the base arc conjugates the presentation, not its isomorphism type.
Then verify the finite code scan has one output relation per crossing and no
unlisted generator. The proof uses van Kampen on the actual open cover and
the crossing ball local model, not an appeal to a diagram. **Local prerequisite modules:** `lem-wirtinger-crossing-ball-cover`, `lem-wirtinger-local-meridian-conjugacy`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-1/ Calegari 2025 §§4.1–4.3 (source row calegari-2025); current oriented-link/Reidemeister suppliers. Future content authoring must supply local proofs; no citation-only fallback.

### `def-maximal-abelian-cover-alexander-module`

**Kind:** definition. **Owner:** `multivariable-alexander-modules-and-chain-models` (KT-09).

defines the cover of a nonempty oriented $r$-component link classified by the full abelianization $H_1(S^3\setminus L)\cong\mathbb Z^r$ and its module over $\Lambda_r=\mathbb Z[t_1^{\pm1},\ldots,t_r^{\pm1}]$.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `lem-the-complement-of-an-oriented-link-is-a-connected-smooth-three-manifold`, `def-axiom-of-choice`.

**Proof/definition route:** use covering-space classification, the
lifted-cellular chain complex and cellular homology; edge labels are a
1-cocycle exactly when the 2-cell checks pass. A change of lifted cell orbit
multiplies a basis element by a Laurent monomial, while subdivision gives chain
homotopy equivalences over $\Lambda_r$. This is a cellular route and does not
invoke the current Fox deficiency-one lemma or its literature-only determinant
step. Clearly distinguish the equal-variable specialization of the
multi-component Alexander module from the existing absolute one-variable
polynomial. **Local prerequisite modules:** `lem-maximal-abelian-cover-cellular-chain-model`, `lem-multivariable-alexander-order-and-specialization`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-2/ Morton 1998 Theorem 1; reader-2/ Conway 2016 v2 §§2–3; current Alexander module supplier. Future content authoring must supply local proofs; no citation-only fallback.

### `def-knot-twisted-chain-complex-and-reidemeister-torsion`

**Kind:** definition. **Owner:** `twisted-alexander-polynomials-and-reidemeister-torsion` (KT-10).

fixes a compact knot exterior with a finite based CW structure, a representation $\rho:\pi_1(E_K)\to GL_d(F)$ over a field and an epimorphism $\psi:\pi_1(E_K)\to H$ to a finite-rank free abelian group; it defines the $F(H)$-coefficient cellular complex, the acyclic based Reidemeister torsion, and its exact ambiguity by determinant-image and deck units.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `def-maximal-abelian-cover-alexander-module`, `def-axiom-of-choice`.

**Proof/definition route:** start with the full abelianization chain complex of the actual link exterior, not the one-variable total-linking cover; specialize only after stating the representation and deck map. Derive Fox's product and inverse identities, identify the evaluated Fox matrix with the cellular differential, prove the denominator is the omitted $d_1$ minor, and track each basis change under Tietze moves. Prove the acyclicity implication from the exact sequence and Euler characteristic, then prove the torsion product formula for the braid-axis decomposition and its compatibility with the colored Burau action. Conway, *Burau Maps and Twisted Alexander Polynomials* arXiv:1510.06678v2, Lemma 2.6 and Theorem 3.15 supplies the precise colored-braid route but cites Wada/Kitano for the quotient-to-torsion theorem; Ranicki's 2001 torsion notes define the ordinary based torsion but do not close this twisted proof. Do not claim a noncommutative determinant: that extension needs a separately proved Ore localization and Dieudonné/Whitehead torsion module. **Local prerequisite modules:** `lem-twisted-fox-jacobian-is-cellular-boundary`, `lem-twisted-acyclicity-from-torsion-module`, `thm-wada-deleted-minor-equals-twisted-reidemeister-torsion`, `thm-twisted-burau-axis-torsion-product`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-2/ Conway 2016 v2 Lemma 2.6 and Theorem 3.15; reader-2/ Ranicki Notes on Reidemeister Torsion (2001-07-28 text). Future content authoring must supply local proofs; no citation-only fallback.

### `def-knot-wada-quotient-for-deficiency-one-presentation`

**Kind:** definition. **Owner:** `twisted-alexander-polynomials-and-reidemeister-torsion` (KT-10).

defines the deleted-column Fox-Jacobian quotient only when the denominator determinant is nonzero, and records the chosen row/column, basis order and unit quotient.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `def-maximal-abelian-cover-alexander-module`, `def-knot-twisted-chain-complex-and-reidemeister-torsion`, `def-axiom-of-choice`.

**Proof/definition route:** start with the full abelianization chain complex of the actual link exterior, not the one-variable total-linking cover; specialize only after stating the representation and deck map. Derive Fox's product and inverse identities, identify the evaluated Fox matrix with the cellular differential, prove the denominator is the omitted $d_1$ minor, and track each basis change under Tietze moves. Prove the acyclicity implication from the exact sequence and Euler characteristic, then prove the torsion product formula for the braid-axis decomposition and its compatibility with the colored Burau action. Conway, *Burau Maps and Twisted Alexander Polynomials* arXiv:1510.06678v2, Lemma 2.6 and Theorem 3.15 supplies the precise colored-braid route but cites Wada/Kitano for the quotient-to-torsion theorem; Ranicki's 2001 torsion notes define the ordinary based torsion but do not close this twisted proof. Do not claim a noncommutative determinant: that extension needs a separately proved Ore localization and Dieudonné/Whitehead torsion module. **Local prerequisite modules:** `lem-twisted-fox-jacobian-is-cellular-boundary`, `lem-twisted-acyclicity-from-torsion-module`, `thm-wada-deleted-minor-equals-twisted-reidemeister-torsion`, `thm-twisted-burau-axis-torsion-product`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-2/ Conway 2016 v2 Lemma 2.6 and Theorem 3.15; reader-2/ Ranicki Notes on Reidemeister Torsion (2001-07-28 text). Future content authoring must supply local proofs; no citation-only fallback.

### `def-oriented-crossing-sign-writhe-and-blackboard-framing`

**Kind:** definition. **Owner:** `crossing-signs-writhe-and-linking-number` (KT-03).

orients the projection plane by the ambient orientation and positive viewing normal and sets $\operatorname{sgn}(c)=\operatorname{sgn}\det(v_{over}, v_{under})$ for tangent vectors following the oriented over- and under-strands; it calibrates the positive Artin half twist to sign $+1$. It defines diagram writhe as the signed sum over all crossings (component self-writhes are separately named) and blackboard framing by the projected normal field.

**Direct prerequisites:** `thm-oriented-reidemeister-equivalence-theorem`, `def-elementary-geometric-half-twist`, `def-countable-choice`.

**Proof/definition route:** use the existing oriented Reidemeister
equivalence theorem as a finite move reduction. Under R1, no intercomponent
crossing changes; R2 creates/cancels two intercomponent crossings of opposite
sign; R3 permutes three crossings without changing signs. Hence the signed
intercomponent sum is invariant and is even because the algebraic intersection
of the two components on the projection sphere vanishes. Check the framing
change by the normal push-off's local linking contribution. Calibrate the
determinant sign against the existing geometric-braid generator; a reversed
chart orientation reverses the sign. For self-linking, compute the linking
number of the diagram with its blackboard push-off as the signed crossing
sum; the Seifert push-off/intersection argument is deferred to KT-04.
The framed diagram theorem permits only framing-preserving moves or pairs an
R1 move with the compensating integer framing change. **Local prerequisite modules:** `lem-linking-number-even-sum-and-reidemeister-invariance`, `thm-blackboard-framing-self-linking-is-writhe`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-1/ Calegari 2025 §3.3; reader-1/ Elhamdadi–Hajij–Istvan Framed Knots v6 §3.1. Future content authoring must supply local proofs; no citation-only fallback.

### `def-based-string-link-and-labeled-link-peripheral-system`

**Kind:** definition. **Owner:** `milnor-invariants-and-link-peripheral-nilpotent-quotients` (KT-53).

defines r disjoint oriented properly embedded intervals in D2×I with fixed endpoints/collars, their stacking, closure, meridians, zero-linking longitudes and basing paths. For closed labeled links, each longitude is corrected by its self-meridian exponent; H1 of the exterior is Z^r.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `def-maximal-abelian-cover-alexander-module`, `def-axiom-of-choice`.

**Proof/definition route:** KT-01 supplies local Wirtinger relations, KT-02 the knot peripheral model which is extended explicitly componentwise here, and KT-03 linking number. A Magnus commutator degree lemma proves E(Γ_qF)⊂1+(X)^q and independence to the stated degree. A basing-change lemma tracks conjugations and longitude meridian corrections; its coefficient recursion produces exactly Δ_I. A self-crossing-change lemma proves nonrepeating-index invariance and explicitly excludes arbitrary repeated-index link-homotopy invariance. These are substantial new local obligations with no claimed full-source coverage in the six dossiers; recover Milnor's primary theorem/complete treatment before future acceptance. The plan preserves the established theorem contracts without treating bibliographic names as proved suppliers.

**Source boundary:** Explicit local derivation; complete classical source recovery required for the stated deep theorem.. Future content authoring must supply local proofs; no citation-only fallback.

### `def-framed-knot-self-linking-and-seifert-framing`

**Kind:** definition. **Owner:** `crossing-signs-writhe-and-linking-number` (KT-03).

defines a homotopy class of nonzero normal sections and relative framing integer; its Seifert-zero-framing clause is owned by KT-04 after a Seifert surface is defined. The self-linking integer uses a disjoint small push-off. No surface-existence result is assumed on this page.

**Direct prerequisites:** `thm-oriented-reidemeister-equivalence-theorem`, `def-elementary-geometric-half-twist`, `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `def-countable-choice`.

**Proof/definition route:** use the existing oriented Reidemeister
equivalence theorem as a finite move reduction. Under R1, no intercomponent
crossing changes; R2 creates/cancels two intercomponent crossings of opposite
sign; R3 permutes three crossings without changing signs. Hence the signed
intercomponent sum is invariant and is even because the algebraic intersection
of the two components on the projection sphere vanishes. Check the framing
change by the normal push-off's local linking contribution. Calibrate the
determinant sign against the existing geometric-braid generator; a reversed
chart orientation reverses the sign. For self-linking, compute the linking
number of the diagram with its blackboard push-off as the signed crossing
sum; the Seifert push-off/intersection argument is deferred to KT-04.
The framed diagram theorem permits only framing-preserving moves or pairs an
R1 move with the compensating integer framing change. **Local prerequisite modules:** `lem-linking-number-even-sum-and-reidemeister-invariance`, `thm-blackboard-framing-self-linking-is-writhe`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-1/ Calegari 2025 §3.3; reader-1/ Elhamdadi–Hajij–Istvan Framed Knots v6 §3.1. Future content authoring must supply local proofs; no citation-only fallback.

### `alg-oriented-linking-number-from-diagram`

**Kind:** algorithm. **Owner:** `crossing-signs-writhe-and-linking-number` (KT-03).

accepts a two-component oriented diagram and returns half the signed sum over crossings between distinct components. It rejects self-crossing-only input with fewer than two declared components and terminates after one crossing scan.

**Direct prerequisites:** `thm-oriented-reidemeister-equivalence-theorem`, `def-elementary-geometric-half-twist`, `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `def-framed-knot-self-linking-and-seifert-framing`, `def-countable-choice`.

**Proof/definition route:** use the existing oriented Reidemeister
equivalence theorem as a finite move reduction. Under R1, no intercomponent
crossing changes; R2 creates/cancels two intercomponent crossings of opposite
sign; R3 permutes three crossings without changing signs. Hence the signed
intercomponent sum is invariant and is even because the algebraic intersection
of the two components on the projection sphere vanishes. Check the framing
change by the normal push-off's local linking contribution. Calibrate the
determinant sign against the existing geometric-braid generator; a reversed
chart orientation reverses the sign. For self-linking, compute the linking
number of the diagram with its blackboard push-off as the signed crossing
sum; the Seifert push-off/intersection argument is deferred to KT-04.
The framed diagram theorem permits only framing-preserving moves or pairs an
R1 move with the compensating integer framing change. **Local prerequisite modules:** `lem-linking-number-even-sum-and-reidemeister-invariance`, `thm-blackboard-framing-self-linking-is-writhe`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-1/ Calegari 2025 §3.3; reader-1/ Elhamdadi–Hajij–Istvan Framed Knots v6 §3.1. Future content authoring must supply local proofs; no citation-only fallback.

### `def-kauffman-bracket-smoothing-and-loop-value`

**Kind:** definition. **Owner:** `kauffman-bracket-state-sum-and-jones-polynomial` (KT-29).

fixes the local state weights $A$ and $A^{-1}$, loop value $\delta=-A^2-A^{-2}$, and the crossing convention.

**Direct prerequisites:** `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `def-temperley-lieb-quotient-and-jones-specialization`, `def-the-homflypt-coefficient-ring`, `thm-the-homflypt-skein-relation`, `thm-the-hecke-trace-construction-is-an-oriented-link-invariant`, `def-axiom-of-choice`.

**Proof/definition route:** draw the source crossing with the over-strand gap and local orientation fixed; in that drawing the horizontal smoothing is A with coefficient $A$ and the vertical smoothing is B with coefficient $A^{-1}$. Those labels are tied to the displayed crossing, not to an orientation-free slogan for every rotated picture. Prove R2 cancellation by multiplying the two crossing skein expansions, R3 by the three-strand Temperley–Lieb relation, and R1 by the factor $-A^{\pm3}$, then cancel writhe. For the comparison, match the unknot value and positive/negative crossing skein relations after the displayed substitution; verify the two variables and mirror rule on a single positive crossing. The loop value is $\delta=-A^2-A^{-2}$ throughout. **Local prerequisite modules:** `lem-kauffman-bracket-r2-r3-identities`, `lem-kauffman-bracket-curl-and-writhe-correction`, `lem-hecke-bracket-trace-dictionary-and-local-descent`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-3/ Kauffman 1990 §§III,VI (diagram pages visually checked); reader-3/ Kauffman 2022 v2 §2; published HOMFLYPT/Jones local supplier. Future content authoring must supply local proofs; no citation-only fallback.

### `def-kauffman-bracket-skein-module-of-a-three-manifold`

**Kind:** definition. **Owner:** `skein-modules-for-links-in-three-manifolds` (KT-31).

defines the free module on isotopy classes of framed unoriented links in an oriented 3-manifold $M$, including the empty link, modulo the bracket crossing relation and the $\delta$-trivial-circle relation.

**Direct prerequisites:** `def-kauffman-bracket-smoothing-and-loop-value`, `def-axiom-of-choice`.

**Proof/definition route:** use the bracket convention of KT-29. For
$S^3$, reduce any link diagram by descending-crossing skein resolution to a
linear combination of unlinks, and use the bracket invariant to prove the
unlink is not killed. For the solid torus, resolve crossings to annular simple
closed curves and prove independence by the annular closure trace/polynomial
degree. Specify whether the source's skein modules are framed links in a 3-
manifold or state spaces of marked surfaces; they are different constructions.
The Chen thesis source treats finite-fusion-category state modules of marked
surfaces and does not prove the arbitrary-3-manifold Kauffman skein module.
**Local prerequisite modules:** `lem-general-3manifold-skein-quotient-isotopy-and-gluing`, `thm-skein-module-of-s-three-is-rank-one`, `thm-skein-module-of-solid-torus-has-core-multicurve-basis`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-3/ Pohorence, 3-manifold Invariants and TQFTs (Jan.2016), pp.1–16; reader-3/ Chen arXiv:1502.06845v1, restricted surface TV scope only. Future content authoring must supply local proofs; no citation-only fallback.

### `def-kauffman-regular-isotopy-and-dubrovnik-conventions`

**Kind:** definition. **Owner:** `kauffman-and-dubrovnik-polynomials-from-bmw-algebras` (KT-30).

fixes an unoriented regular-isotopy polynomial $L$ by its crossing, circle, and curl rules, then defines the oriented normalization $F_K(a,z)=a^{-w(K)}L_K(a,z)$ with the negative writhe exponent. It separately fixes the Dubrovnik skein convention $D_+-D_-=z(D_0-D_\infty)$, curl multipliers $a^{\pm1}$, and the printed conversion $D_K(a,z)=-i^{-w(K)}(-1)^{c(K)}L_K(ia,-iz)$ for $i^2=-1$, recording the exact component and writhe conventions.

**Direct prerequisites:** `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `def-kauffman-bracket-smoothing-and-loop-value`, `def-axiom-of-choice`.

**Proof/definition route:** keep regular-isotopy $L$, oriented ambient-isotopy $F$, and Dubrovnik $D$ as separate contracts. The convention audit uses Kauffman, *An Invariant of Regular Isotopy*, 1990, Definition 2.4 (PDF p. 7/printed p. 422) for $F=a^{-w}L$ and §VII (printed pp. 466–469) for the $D$ conversion, with the corrected factor $-i^{-w}(-1)^c$. The source proves $L$ by induction but omits proof of the conversion; it does not provide a complete BMW basis theorem. Existing BMW items on the Temperley–Lieb/Hecke pages are drafts and cannot discharge these modules. Reconstruct each tangle reduction, pairing determinant and trace stabilization from the stated relations, then check the unknot, positive and negative curl, Hopf link and mirror substitutions. Do not infer unframed Markov invariance from framed regular-isotopy invariance. **Local prerequisite modules:** `lem-bmw-relations-dubrovnik-parameter-dictionary`, `lem-bmw-descending-tangle-spanning`, `lem-bmw-closure-pairing-independence`, `lem-bmw-markov-trace-stabilization`, `lem-kauffman-dubrovnik-writhe-component-conversion`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-3/ Kauffman 1990 Definition 2.4, PDF p.7/printed p.422 and §VII pp.466–469 (corrected sign); reader-3/ BMW drafts reviewed but excluded as suppliers. Future content authoring must supply local proofs; no citation-only fallback.

### `def-bmw-algebra-with-dubrovnik-relations`

**Kind:** definition. **Owner:** `kauffman-and-dubrovnik-polynomials-from-bmw-algebras` (KT-30).

is a comparison/repair specification for the existing draft

**Direct prerequisites:** `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `def-kauffman-bracket-smoothing-and-loop-value`, `def-kauffman-regular-isotopy-and-dubrovnik-conventions`, `def-axiom-of-choice`.

**Proof/definition route:** keep regular-isotopy $L$, oriented ambient-isotopy $F$, and Dubrovnik $D$ as separate contracts. The convention audit uses Kauffman, *An Invariant of Regular Isotopy*, 1990, Definition 2.4 (PDF p. 7/printed p. 422) for $F=a^{-w}L$ and §VII (printed pp. 466–469) for the $D$ conversion, with the corrected factor $-i^{-w}(-1)^c$. The source proves $L$ by induction but omits proof of the conversion; it does not provide a complete BMW basis theorem. Existing BMW items on the Temperley–Lieb/Hecke pages are drafts and cannot discharge these modules. Reconstruct each tangle reduction, pairing determinant and trace stabilization from the stated relations, then check the unknot, positive and negative curl, Hopf link and mirror substitutions. Do not infer unframed Markov invariance from framed regular-isotopy invariance. **Local prerequisite modules:** `lem-bmw-relations-dubrovnik-parameter-dictionary`, `lem-bmw-descending-tangle-spanning`, `lem-bmw-closure-pairing-independence`, `lem-bmw-markov-trace-stabilization`, `lem-kauffman-dubrovnik-writhe-component-conversion`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-3/ Kauffman 1990 Definition 2.4, PDF p.7/printed p.422 and §VII pp.466–469 (corrected sign); reader-3/ BMW drafts reviewed but excluded as suppliers. Future content authoring must supply local proofs; no citation-only fallback.

### `def-colored-framed-knot-evaluation-from-ribbon-category`

**Kind:** definition. **Owner:** `ribbon-categories-and-reshetikhin-turaev-knot-invariants` (KT-33).

fixes a rigid braided monoidal category with twist, duality, pivotal trace and a color on every oriented component; the output is a scalar invariant of framed colored links.

**Direct prerequisites:** `def-kauffman-bracket-smoothing-and-loop-value`, `def-kauffman-regular-isotopy-and-dubrovnik-conventions`, `thm-a-ribbon-object-defines-a-unique-framed-tangle-evaluation-functor`, `thm-ribbon-evaluation-is-an-invariant-of-framed-colored-links`, `thm-writhe-normalized-ribbon-trace-is-an-unframed-link-invariant`, `def-axiom-of-choice`.

**Proof/definition route:** reuse the published
`thm-ribbon-evaluation-is-an-invariant-of-framed-colored-links` and
`thm-writhe-normalized-ribbon-trace-is-an-unframed-link-invariant` only after
checking their actual color and twist hypotheses. The new bridge is a finite
word-level calculation: verify the braid generator maps satisfy Yang–Baxter,
the trace is cyclic, and the two stabilization eigenvalues are cancelled by
the declared twist. The published draft modular-category and BMW items are
not suppliers. **Local prerequisite modules:** `lem-quantum-sl2-ribbon-trace-matches-hecke-and-bracket`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-3/ Johnson–Freyd RT notes Jan.15, 2016, pp.1–4; published framed ribbon-functor suppliers. Future content authoring must supply local proofs; no citation-only fallback.

### `def-khovanov-frobenius-algebra-and-cube-of-resolutions`

**Kind:** definition. **Owner:** `khovanov-homology-and-jones-categorification` (KT-37).

defines $A=\mathbb Z[X]/(X^2)$ with its multiplication, comultiplication, unit and counit, fixes quantum shifts and the oriented crossing normalization, and assigns a tensor product of $A$-modules to each resolution state.

**Direct prerequisites:** `def-kauffman-bracket-smoothing-and-loop-value`, `def-chain-complex-in-an-abelian-category`, `thm-chain-homotopic-maps-induce-the-same-map-on-homology`, `def-axiom-of-choice`.

**Proof/definition route:** define the cube sign from an ordering of
crossings and prove the edge squares commute before inserting signs. For R1,
decompose the added-crossing complex into a contractible summand plus the
declared grading shift; for R2 use the two-crossing cancellation; for R3
construct the explicit chain homotopy using Frobenius associativity and
coassociativity. Verify the Euler characteristic resolution-by-resolution
against KT-29's Jones convention. Khovanov 1999 v2 proves invariance of
isomorphism classes but later cobordism coherence is handled in KT-40.
**Local prerequisite modules:** `lem-khovanov-reidemeister-chain-homotopies`, `lem-khovanov-graded-euler-characteristic-jones-normalization`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-6/ Khovanov arXiv:math/9908171v2. Future content authoring must supply local proofs; no citation-only fallback.

### `def-lower-central-series-and-magnus-expansion-for-links`

**Kind:** definition. **Owner:** `milnor-invariants-and-link-peripheral-nilpotent-quotients` (KT-53).

defines Γ1G=G, Γ_(q+1)G=[G,Γ_qG], noncommuting formal series Z⟪X1,…,Xr⟫ and E(x_i)=1+X_i, E(x_i^−1)=Σ_(k≥0)(−X_i)^k; calculations to degree d use a finite truncated ring.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `def-maximal-abelian-cover-alexander-module`, `def-based-string-link-and-labeled-link-peripheral-system`, `def-axiom-of-choice`.

**Proof/definition route:** KT-01 supplies local Wirtinger relations, KT-02 the knot peripheral model which is extended explicitly componentwise here, and KT-03 linking number. A Magnus commutator degree lemma proves E(Γ_qF)⊂1+(X)^q and independence to the stated degree. A basing-change lemma tracks conjugations and longitude meridian corrections; its coefficient recursion produces exactly Δ_I. A self-crossing-change lemma proves nonrepeating-index invariance and explicitly excludes arbitrary repeated-index link-homotopy invariance. These are substantial new local obligations with no claimed full-source coverage in the six dossiers; recover Milnor's primary theorem/complete treatment before future acceptance. The plan preserves the established theorem contracts without treating bibliographic names as proved suppliers.

**Source boundary:** Explicit local derivation; complete classical source recovery required for the stated deep theorem.. Future content authoring must supply local proofs; no citation-only fallback.

### `def-milnor-integer-and-residue-invariants`

**Kind:** definition. **Owner:** `milnor-invariants-and-link-peripheral-nilpotent-quotients` (KT-53).

defines μ_(i1…ikj) as the coefficient of X_i1…X_ik in the Magnus expansion of the preferred j-longitude in the canonical string-link nilpotent quotient. For a closed link, μbar_I is reduced modulo Δ_I, the gcd of μ_J over proper subsequences of I and their cyclic permutations; gcd0 means an integral invariant.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `def-maximal-abelian-cover-alexander-module`, `def-based-string-link-and-labeled-link-peripheral-system`, `def-lower-central-series-and-magnus-expansion-for-links`, `def-axiom-of-choice`.

**Proof/definition route:** KT-01 supplies local Wirtinger relations, KT-02 the knot peripheral model which is extended explicitly componentwise here, and KT-03 linking number. A Magnus commutator degree lemma proves E(Γ_qF)⊂1+(X)^q and independence to the stated degree. A basing-change lemma tracks conjugations and longitude meridian corrections; its coefficient recursion produces exactly Δ_I. A self-crossing-change lemma proves nonrepeating-index invariance and explicitly excludes arbitrary repeated-index link-homotopy invariance. These are substantial new local obligations with no claimed full-source coverage in the six dossiers; recover Milnor's primary theorem/complete treatment before future acceptance. The plan preserves the established theorem contracts without treating bibliographic names as proved suppliers.

**Source boundary:** Explicit local derivation; complete classical source recovery required for the stated deep theorem.. Future content authoring must supply local proofs; no citation-only fallback.

### `def-oriented-seifert-surface-and-knot-genus`

**Kind:** definition. **Owner:** `seifert-surfaces-and-knot-genus` (KT-04).

defines a connected compact oriented embedded surface $F\subset S^3$ with $\partial F=K$ and $g(K)=\min_F g(F)$ in the smooth category. It explicitly separates this embedded surface from the existing diagrammatic Seifert smoothing.

**Direct prerequisites:** `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `def-seifert-smoothing-and-seifert-circles-of-an-oriented-link-diagram`, `lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups`, `def-countable-choice`.

**Proof/definition route:** the disk heights are ordered by nesting;
the bands are attached in the crossing balls, disjoint from the disk interiors.
The orientation rule makes the boundary arcs glue to the original diagram.
Each band lowers Euler characteristic by one, each initial disk contributes
one, and a connected one-boundary-component orientable surface has
$\chi=1-2g$. Supply a separate connectivity check for knot inputs; for links,
the result can be disconnected and the knot genus formula must not be used.
`alg-` termination follows from the finite crossing set. **Local prerequisite modules:** `lem-seifert-bands-embedded-orientable-boundary-correct`, `thm-seifert-algorithm-boundary-euler-and-genus`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-1/ Calegari 2025 §3.1; reader-1/ Gardner-Livingston §4.3, visually read proof supplement. Future content authoring must supply local proofs; no citation-only fallback.

### `def-admissible-pointed-heegaard-floer-data`

**Kind:** definition. **Owner:** `grid-homology-and-combinatorial-knot-floer-theory` (KT-39).

A pointed Heegaard diagram(Σ,α,β,w,z) has transverse product tori inSym^gΣ, a knot from its pointed arc data, relativeSpin^c structures and Maslov/Alexander domains. Weak/strong admissibility imposes the exact signed periodic-domain condition needed for finite disk counts; choose version, coefficients and almost complex data.

**Direct prerequisites:** `def-oriented-seifert-surface-and-knot-genus`, `def-countable-choice`.

**Proof/definition route:** Define full filtered CFK∞ overF2[U,U^−1], hat/minus/associated-graded variants, relative c1 grading and basepoint multiplicities before analytic moduli or grid identification.

**Source boundary:** reader-6/ MOS arXiv:math/0607691v2, full text; reader-6/ Manolescu 2016 introductory survey; not an analytic proof supplier. Future content authoring must supply local proofs; no citation-only fallback.

### `def-grid-diagram-for-an-oriented-knot`

**Kind:** definition. **Owner:** `grid-homology-and-combinatorial-knot-floer-theory` (KT-39).

defines an $n\times n$ toroidal grid with one $O$ and one $X$ in every row and column and fixes the orientation and Alexander filtration.

**Direct prerequisites:** `def-oriented-seifert-surface-and-knot-genus`, `def-countable-choice`.

**Proof/definition route:** order the finite permutation set; prove
the differential's Maslov grading and filtration behavior; pair broken and
unbroken rectangles for $\partial^2$. For invariance, give explicit chain
maps for commutation and stabilization, verify both compositions are chain
homotopic to the identity by domains, and then compare the grid Heegaard
diagram with the analytic multipointed Heegaard Floer complex. The last
comparison requires local modules for admissibility, holomorphic-disk
transversality, compactness, gluing and Heegaard-move invariance; MOS 2007
refers to other grid-invariance proofs, and an intro sketch is not accepted as
proof. **Local prerequisite modules:** `lem-grid-rectangle-boundary-square-zero-and-filtration`, `thm-grid-commutation-stabilization-invariance-proof`, `lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing`, `thm-grid-homology-independent-of-grid-and-equals-knot-floer`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-6/ MOS arXiv:math/0607691v2, full text; reader-6/ Manolescu 2016 introductory survey; not an analytic proof supplier. Future content authoring must supply local proofs; no citation-only fallback.

### `def-knot-connected-sum-and-prime-knot`

**Kind:** definition. **Owner:** `connected-sums-and-prime-decomposition` (KT-05).

defines the oriented connected sum using a separating sphere meeting each summand in a trivial arc; prime means nontrivial and not a connected sum of two nontrivial knots.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `def-oriented-seifert-surface-and-knot-genus`, `def-countable-choice`.

**Proof/definition route:** do not infer knot connected-sum decomposition from sphere decomposition of its irreducible exterior. Use spheres meeting the knot twice, equivalently properly embedded meridional decomposing annuli in the exterior. Prove existence by genus decrease and finiteness; uniqueness needs an annulus-system cut-and-paste theorem relative to marked peripheral boundary. General prime decomposition supplies only ambient 3-manifold context. Cut along a decomposing sphere meeting the
knot twice; the local ball-and-arc lemma identifies its two summand exteriors.
For uniqueness, put two decomposing spheres in general position, remove
inessential intersection circles by innermost-disk isotopies, and compare the
resulting prime tangles; prove that a nontrivial prime summand cannot split
across the remaining sphere. Calegari/Gardner supply only the genus-additivity
proof sketch, not uniqueness; reader 4's Hatcher §1.1 is a detailed general
prime-decomposition proof source but its exact knot-exterior bridge is local.
For genus, cut a minimum genus surface along the decomposing sphere for the
lower bound and boundary-connect minimum genus summand surfaces for the upper
bound. Alexander-polynomial multiplicativity is deferred to KT-07, after the
Seifert-matrix formula exists. **Local prerequisite modules:** `thm-schubert-prime-decomposition-for-knots`, `thm-knot-genus-additive-under-connected-sum`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-1/ Calegari 2025 §3.1 Theorem 3.7; reader-1/ Gardner-Livingston §4.5 proof supplements; reader-4/ Hatcher §1.1 (3-manifold prime decomposition only). Future content authoring must supply local proofs; no citation-only fallback.

### `def-coprime-torus-knot`

**Kind:** definition. **Owner:** `torus-knots-and-seifert-fibered-exteriors` (KT-16).

For coprime nonzero integers p,q, define the oriented primitive(p,q) curve on a standard unknotted Heegaard torus in S3, fixing meridian/longitude, orientation reversal and mirror. |p|=1 or|q|=1 gives unknot; noncoprime parameters define a link.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `def-knot-connected-sum-and-prime-knot`, `def-countable-choice`.

**Proof/definition route:** Fix the standard embedding and show independence of its choices by the torus ambient-isotopy model.

**Source boundary:** reader-1/ Calegari 2025 §4.3; reader-4/ Hatcher 3-Manifold Notes. Future content authoring must supply local proofs; no citation-only fallback.

### `def-knot-seifert-pairing-and-matrix`

**Kind:** definition. **Owner:** `seifert-matrices-and-the-alexander-module` (KT-06).

chooses a basis $a_1,\ldots,a_{2g}$ for $H_1(F;\mathbb Z)$ and fixes $V_{ij}=\operatorname{lk}(a_i^+,a_j)$ for the positive normal push-off.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `def-oriented-seifert-surface-and-knot-genus`, `def-one-variable-alexander-module-of-an-oriented-link`, `def-axiom-of-choice`.

**Proof/definition route:** first prove the cut-open exterior is
obtained by gluing the positive and negative copies of $F$ to the complement
of its bicollar. The Mayer–Vietoris map on $H_1(F)$ has the two push-off maps;
deck translation multiplies exactly one by $t$. The complementary homology is
identified using Alexander duality and the relative sequence, with the
meridian/longitude boundary map checked explicitly. This proves the presentation
without Fox calculus. The current Alexander module definition fixes the cover
and deck generator; `def-alexander-polynomial-from-the-first-elementary-ideal` supplies only the ideal convention. **Local prerequisite modules:** `lem-seifert-cut-open-cover-alexander-module-presentation`, `lem-seifert-matrix-s-equivalence-under-isotopy`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-2/ Livingston, Seifert Forms and Concordance (2002), pp.403–408; current one-variable Alexander module supplier. Future content authoring must supply local proofs; no citation-only fallback.

### `def-cyclic-branched-cover-of-a-knot`

**Kind:** definition. **Owner:** `cyclic-branched-covers-and-knot-determinants` (KT-11).

defines the connected cyclic cover of the exterior classified by meridian reduction modulo $q$, followed by Dehn filling the lift of the meridian to produce $\Sigma_q(K)$.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `def-knot-seifert-pairing-and-matrix`, `def-axiom-of-choice`.

**Proof/definition route:** build the cover by cutting along the
Seifert surface and gluing two copies; the deck involution's quotient is $S^3$
branched over $K$. The Mayer–Vietoris boundary matrix is $V+V^T$. The determinant
identity is KT-07 evaluated at $-1$; a square integer presentation has finite
cokernel precisely when its determinant is nonzero, of order the determinant's
absolute value. For general $q$, decompose the cyclic-cover chain complex over
$\mathbb C$ into deck-character eigenspaces, remove the trivial character
using $\Delta_K(1)=\pm1$, and take the determinant of each nontrivial block;
the nonvanishing conditions are exactly the finite-homology hypotheses.
Check that the unit ambiguity disappears under the absolute product. The already
published slice-disk branched-cover lemma supplies only its stated rational
homology-ball consequence, not this calculation. **Local prerequisite modules:** `lem-cyclic-branched-cover-seifert-block-matrix`, `lem-branched-cover-surgery-presentation-from-seifert-surface`, `lem-cyclic-cover-order-root-product-and-rational-sphere-test`, `lem-cyclic-cover-linking-form-inverse-matrix`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-2/ Livingston Seifert Forms (2002) Theorem 3.1; reader-2/ Przytycki–Yasuhara 2001 Theorem 3.2; surgery presentation attributed to Akbulut–Kirby. Future content authoring must supply local proofs; no citation-only fallback.

### `def-levine-tristram-hermitian-form-and-signature`

**Kind:** definition. **Owner:** `levine-tristram-signatures-and-arf-invariant` (KT-12).

defines for $\omega\in S^1\setminus\{1\}$ with $\Delta_K(\omega)\ne0$ the Hermitian form $(1-\omega)V+(1-\bar\omega)V^T$ and its signature; at roots, state the one-sided average convention separately.

**Direct prerequisites:** `def-knot-seifert-pairing-and-matrix`, `def-axiom-of-choice`.

**Proof/definition route:** Hermitian symmetry follows from
$\bar\omega=\omega^{-1}$; a basis change is congruence. Stabilization adds a
hyperbolic summand whose nonzero eigenvalues are paired with opposite signs at
admissible $\omega$. For Arf, verify $q(x+y)=q(x)+q(y)+x\cdot y$, choose a
symplectic basis and compare the quadratic Gauss sum with the Conway expansion
using KT-07. This pair states no slice obstruction yet; KT-21–25 add the
embedded-cobordism hypothesis. **Local prerequisite modules:** `lem-seifert-stabilization-preserves-levine-tristram-signature`, `lem-arf-quadratic-enhancement-from-seifert-form`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-2/ Livingston 2002 and Survey of Classical Knot Concordance v4; reader-2/ source convention audit of Levine–Tristram Hermitian form. Future content authoring must supply local proofs; no citation-only fallback.

### `def-knot-arf-invariant-from-seifert-form`

**Kind:** definition. **Owner:** `levine-tristram-signatures-and-arf-invariant` (KT-12).

defines the mod-two quadratic refinement on $H_1(F;\mathbb F_2)$ and its Arf invariant.

**Direct prerequisites:** `def-knot-seifert-pairing-and-matrix`, `def-levine-tristram-hermitian-form-and-signature`, `def-axiom-of-choice`.

**Proof/definition route:** Hermitian symmetry follows from
$\bar\omega=\omega^{-1}$; a basis change is congruence. Stabilization adds a
hyperbolic summand whose nonzero eigenvalues are paired with opposite signs at
admissible $\omega$. For Arf, verify $q(x+y)=q(x)+q(y)+x\cdot y$, choose a
symplectic basis and compare the quadratic Gauss sum with the Conway expansion
using KT-07. This pair states no slice obstruction yet; KT-21–25 add the
embedded-cobordism hypothesis. **Local prerequisite modules:** `lem-seifert-stabilization-preserves-levine-tristram-signature`, `lem-arf-quadratic-enhancement-from-seifert-form`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-2/ Livingston 2002 and Survey of Classical Knot Concordance v4; reader-2/ source convention audit of Levine–Tristram Hermitian form. Future content authoring must supply local proofs; no citation-only fallback.

### `def-knot-bridge-position-and-unknotting-number`

**Kind:** definition. **Owner:** `bridge-presentations-and-unknotting-number` (KT-52).

fixes a Morse height on S3 away from two poles; b(K) is the minimum number of local maxima of a Morse knot representative, with b(unknot)=1. It defines u(K) as the minimum crossing changes turning some regular diagram into the unknot, distinct from diagram crossing count.

**Direct prerequisites:** `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `def-knot-connected-sum-and-prime-knot`, `def-levine-tristram-hermitian-form-and-signature`, `def-axiom-of-choice`.

**Proof/definition route:** use KT-01 diagram groups, KT-03 crossing conventions, KT-05 decomposing annuli, KT-12 signature invariance and a new height-sphere/bridge-disk intersection module. The upper connected-sum bound glues two bridge positions; the lower bound requires normalization of a decomposing sphere relative to bridge disks and removal of outermost intersections, preserving a count of maxima. This exact classical theorem is a future full-source recovery obligation, not a claim that one of the six source dossiers fully proved it. Elementary descending and signature arguments are explicit local derivations from supplied diagram/surface facts.

**Source boundary:** Explicit local derivation; complete classical source recovery required for the stated deep theorem.. Future content authoring must supply local proofs; no citation-only fallback.

### `def-locally-flat-proper-surface-and-concordance-collars`

**Kind:** definition. **Owner:** `smooth-and-topological-knot-concordance` (KT-21).

A proper surface is locally flat if each interior pair chart is(R4,R2) and each boundary chart is(R4_+,R2_+), with product collars on its link boundary; wild disks are excluded. Smooth concordance is a proper embedded annulus in fixed S3×I, not an abstract bordism.

**Direct prerequisites:** `def-oriented-seifert-surface-and-knot-genus`, `def-knot-connected-sum-and-prime-knot`, `def-oriented-link-in-s-three-and-ambient-isotopy`, `def-countable-choice`.

**Proof/definition route:** State orientations and incoming−K0/outgoingK1 conventions.

**Source boundary:** reader-5/ Livingston Survey of Classical Knot Concordance v4, §§2–3. Future content authoring must supply local proofs; no citation-only fallback.

### `def-oriented-slope-and-knot-dehn-filling`

**Kind:** definition. **Owner:** `knot-exteriors-and-peripheral-systems` (KT-02).

For a marked compact exterior with basis(μ,λ), a slope is primitive pμ+qλ modulo simultaneous sign; p/q filling glues a solid torus meridian to that slope.

**Direct prerequisites:** `def-framing-of-a-normal-bundle`, `def-oriented-link-in-s-three-and-ambient-isotopy`, `def-countable-choice`.

**Proof/definition route:** Define gluing orientation and prove independence of the longitude choice of the gluing map by extension over the solid torus.

**Source boundary:** reader-1/ Calegari 2025 §2.2; reader-4/ Hatcher Basic 3-Manifold Notes, compact exterior context. Future content authoring must supply local proofs; no citation-only fallback.

### `def-integral-framed-link-surgery-diagram`

**Kind:** definition. **Owner:** `three-manifold-surgery-presentations-and-kirby-moves` (KT-14).

records an oriented link in $S^3$ with an integer framing on each component, measured against its preferred longitude.

**Direct prerequisites:** `def-oriented-slope-and-knot-dehn-filling`, `def-countable-choice`.

**Proof/definition route:** use the now-published
`lem-relative-three-manifolds-admit-parametrized-link-surgery-presentations`
with base $S^3$ and empty external boundary, and prove that each framed
parallel is $\lambda+n\mu$ with longitude coefficient $+1$. For completeness,
specialize the published `lem-relative-three-bordism-surgery-presentation`
to the closed undecorated $S^3$ base. Supply a local proof that its $O3$
integer-framed-knot/zero-meridian operation is generated in $S^3$ by framed
slides and split $\pm1$ stabilization/destabilization, tracking actual bands,
crossing changes and framings in both parity cases. Retain the proved
handle-slide and blow-up/blow-down correspondence. These published relative
suppliers include their actual bounding, common-middle and Cerf/movie
prerequisites; none of those obligations is replaced by a citation. The
$O3$ reduction is asserted only for the $S^3$ base, without changing the
published general-base theorem. This owner-approved proof-route update
reflects publication commit `29450da28f`; the full closed-manifold statements
and A/B item scope remain unchanged. **Local prerequisite modules:** `thm-lickorish-wallace-framed-link-presentation`, `thm-kirby-moves-classify-framed-link-presentations`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-4/ Hatcher notes and selected Thurston chapters. Future content authoring must supply local proofs; no citation-only fallback.

### `def-planar-diagram-gauss-and-dowker-codes`

**Kind:** definition. **Owner:** `planar-diagram-codes-and-knot-table-enumeration` (KT-47).

distinguishes a Gauss code, signed Dowker–Thistlethwaite code and oriented planar-diagram code, stating parity, cyclic-order and realizability conditions.

**Direct prerequisites:** `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `def-countable-choice`.

**Proof/definition route:** validate each crossing appears exactly
twice in the Gauss word, check the cyclic orders define a connected planar
rotation system, and use the face permutation to verify $V-E+F=2$. Reconstruct
by gluing crossing disks to edge bands and lifting over/under data to $S^3$.
Enumeration terminates because alphabet and word length are finite. It does
not decide equivalence between candidates; Reidemeister-move search is a
semidecision procedure. **Local prerequisite modules:** `lem-planar-diagram-code-realizability-and-face-validation`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-1/ Calegari 2025 §1.3; reader-4/ HLP 1999 triangulation source. Future content authoring must supply local proofs; no citation-only fallback.

### `def-normal-surface-coordinate-box`

**Kind:** definition. **Owner:** `normal-surface-unknot-recognition` (KT-49).

defines normal disk coordinates and matching equations.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `def-planar-diagram-gauss-and-dowker-codes`, `def-countable-choice`.

**Proof/definition route:** add local modules for smooth-to-PL
approximation inside a tubular neighborhood; triangulation of the compact
exterior with marked meridian; normal-coordinate matching and finite bounds;
vertex-surface enumeration and the meridian-disk criterion for a solid-torus
exterior; the mod-2 meridian test; and certificate checking. HLP's complete
1999 paper supplies the algorithm and bounds but cites central normal-surface
theorems and sketches diagram triangulation; these modules remain local proof
obligations. No polynomial-time claim is made. **Local prerequisite modules:** `lem-smooth-to-pl-knot-exterior-ambient-isotopy`, `lem-good-linear-size-exterior-triangulation-from-diagram`, `lem-normal-coordinate-matching-equations-and-finite-bounds`, `lem-meridian-disk-criterion-for-unknot-exterior`, `thm-haken-finite-box-search-correctness`, `thm-jaco-tollefson-vertex-search-correctness`, `thm-unknot-recognition-has-np-certificate`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-4/ Hass–Lagarias–Pippenger JACM 46 (1999), Theorems 8.1 and 1.1, §§4–5; normal-surface inputs remain cited gaps. Future content authoring must supply local proofs; no citation-only fallback.

### `def-quandle-and-knot-coloring`

**Kind:** definition. **Owner:** `fox-colorings-and-quandle-invariants` (KT-08).

defines a quandle by idempotency, right invertibility and self-distributivity, and a coloring of a diagram by quandle elements with the crossing relation fixed to the over/under convention.

**Direct prerequisites:** `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `thm-oriented-reidemeister-equivalence-theorem`, `def-countable-choice`.

**Proof/definition route:** the three axioms are matched respectively
to R1, R2 and R3; each move gives a bijection of coloring sets, and the inverse
map for R2 uses right invertibility. The dihedral operation $a*b=2b-a$ is a
quandle over odd characteristic, so Gaussian elimination terminates in a
finite number of row operations. No coloring count is called a complete knot
invariant.

**Source boundary:** reader-1/ Calegari 2025 §4.1; reader-2/ Birman–Brendle 2004 braid survey. Future content authoring must supply local proofs; no citation-only fallback.

### `def-encoded-diagram-size-and-exact-output`

**Kind:** definition. **Owner:** `terminating-computations-for-classical-knot-invariants` (KT-48).

defines crossing count, code length and coefficient-bit size, separating exact symbolic outputs from floating-point estimates.

**Direct prerequisites:** `def-quandle-and-knot-coloring`, `def-kauffman-bracket-smoothing-and-loop-value`, `def-planar-diagram-gauss-and-dowker-codes`, `def-axiom-of-choice`.

**Proof/definition route:** count each finite loop; the coloring
system uses at most one row per crossing, Gaussian elimination has finitely
many pivots, and bracket coefficients sum over $2^c$ states with degree
bounded linearly by $c$. A move search visits a finite branching tree at each
depth and has no negative certificate. No complexity-class result for general
knot equivalence follows. **Local prerequisite modules:** `thm-exact-bracket-output-bit-growth-bound`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-1/ Calegari 2025 §§1,4; reader-3/ Kauffman 2022 v2 state-sum convention. Future content authoring must supply local proofs; no citation-only fallback.

### `def-rack-fundamental-quandle-and-adjoint-group`

**Kind:** definition. **Owner:** `fox-colorings-and-quandle-invariants` (KT-08).

A rack has bijective R_b:a↦a*b and(a*b)*c=(a*c)*(b*c); a quandle also satisfies a*a=a. The presented fundamental quandle has under-arc generators/crossing relations; Adj(Q) has generators e_a and e_(a*b)=e_b^−1 e_a e_b.

**Direct prerequisites:** `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `thm-oriented-reidemeister-equivalence-theorem`, `def-quandle-and-knot-coloring`, `def-countable-choice`.

**Proof/definition route:** Fix positive crossing/basing conventions; this defines algebraic objects, not a completeness claim.

**Source boundary:** reader-1/ Calegari 2025 §4.1; reader-2/ Birman–Brendle 2004 braid survey. Future content authoring must supply local proofs; no citation-only fallback.

### `def-reduced-alternating-link-diagram`

**Kind:** definition. **Owner:** `alternating-diagrams-and-crossing-number-minimality` (KT-50).

defines a connected alternating diagram with no nugatory crossing.

**Direct prerequisites:** `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `def-kauffman-bracket-smoothing-and-loop-value`, `def-axiom-of-choice`.

**Proof/definition route:** prove adequacy of both extreme Kauffman
states so their extremal degrees do not cancel; the state-sum span is $4c$
in $A$, equivalently $c$ in the normalized Jones variable. Euler
characteristic of the Tait graph gives the span identity. Use flyping only for diagram classification. Adequacy and the Jones-span bound independently prove crossing minimality and do not depend on flyping. Give the flyping proof as modules from Menasco crossing-ball position, incompressible Conway spheres/standard-position alternating tangles, and the Menasco–Thistlethwaite geometric flyping reduction with an explicit decreasing complexity; graph matroid exchange alone permits mutation and is not a flyping proof. Recover/read a complete source before authoring this deep branch; no bare
theorem citation. **Local prerequisite modules:** `thm-tait-flyping-theorem`, `lem-alternating-state-adequacy-and-jones-span`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-1/ Calegari 2025 §5.2; reader-3/ Kauffman 2022 v2 §2. Future content authoring must supply local proofs; no citation-only fallback.

### `def-flype-crossing-ball-and-alternating-tangle-data`

**Kind:** definition. **Owner:** `alternating-diagrams-and-crossing-number-minimality` (KT-50).

A flype rotates a2-tangle through an adjacent crossing with the indicated boundary identification; Menasco crossing balls replace crossings by upper/lower hemispheres, and standard-position Conway spheres meet the projection in the prescribed normal arcs.

**Direct prerequisites:** `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `def-kauffman-bracket-smoothing-and-loop-value`, `def-reduced-alternating-link-diagram`, `def-axiom-of-choice`.

**Proof/definition route:** Define primeness/compositeness, checkerboard surfaces, visible/hidden Conway spheres and the geometric complexity before invoking flyping reduction.

**Source boundary:** reader-1/ Calegari 2025 §5.2; reader-3/ Kauffman 2022 v2 §2. Future content authoring must supply local proofs; no citation-only fallback.

### `def-reduced-khovanov-cohomology-of-a-knot`

**Kind:** definition. **Owner:** `khovanov-homology-and-jones-categorification` (KT-37).

At a basepoint away from crossings, use the stated integral reduced Frobenius subcomplex/quotient convention and quantum shift so the reduced unknot is Z in normalized bidegree(0,0).

**Direct prerequisites:** `def-kauffman-bracket-smoothing-and-loop-value`, `def-chain-complex-in-an-abelian-category`, `thm-chain-homotopic-maps-induce-the-same-map-on-homology`, `def-khovanov-frobenius-algebra-and-cube-of-resolutions`, `def-axiom-of-choice`.

**Proof/definition route:** Fix subcomplex versus quotient and duality once, and prove the basepoint transport equivalence.

**Source boundary:** reader-6/ Khovanov arXiv:math/9908171v2. Future content authoring must supply local proofs; no citation-only fallback.

### `def-instanton-knot-homology-and-canonical-class`

**Kind:** definition. **Owner:** `khovanov-homology-detects-the-unknot` (KT-44).

Define reduced singular instanton I^natural(K) using the earring/admissible singular bundle data of def-singular-instanton-knot-and-sutured-closure-data. Any distinguished canonical class requires a separate explicit construction; none is assumed in the rank detector.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `def-khovanov-frobenius-algebra-and-cube-of-resolutions`, `def-reduced-khovanov-cohomology-of-a-knot`, `def-axiom-of-choice`.

**Proof/definition route:** construct the filtered instanton complex
from resolutions, prove the E2 identification, and specify the instanton
rank detector as a separate theorem. The latter needs local definitions and
proof modules for the configuration-space Sobolev completion, ASD Fredholm
setup, compactness/bubbling, excision, perturbation/transversality and the
rank-one characterization of the unknot instanton group; Kronheimer–Mrowka's
paper invokes KHI rank detection rather than proving all of it. Then use the
unknot group and spectral-sequence rank inequalities to force the unknot
resolution. **Local prerequisite modules:** `lem-instanton-knot-complex-asd-analytic-foundations`, `lem-kh-to-instanton-resolution-spectral-sequence`, `thm-sutured-instanton-khi-rank-detects-unknot`, `thm-kronheimer-mrowka-reduced-khovanov-detects-unknot`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-6/ Kronheimer–Mrowka arXiv:1005.4346v1, Theorem 1.1; KHI rank detector separately cited. Future content authoring must supply local proofs; no citation-only fallback.

### `def-link-surgery-filtered-complex-for-double-branched-cover`

**Kind:** definition. **Owner:** `khovanov-to-floer-spectral-sequence` (KT-45).

defines the filtered link-surgery complex and its filtration by resolution cube.

**Direct prerequisites:** `def-cyclic-branched-cover-of-a-knot`, `def-khovanov-frobenius-algebra-and-cube-of-resolutions`, `def-reduced-khovanov-cohomology-of-a-knot`, `def-admissible-pointed-heegaard-floer-data`, `def-grid-diagram-for-an-oriented-knot`, `def-filtered-chain-complex`, `thm-a-filtered-complex-produces-an-exact-couple`, `thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology`, `def-axiom-of-choice`.

**Proof/definition route:** construct the surgery exact-triangle
complex, verify the cube filtration is bounded and exhaustive, identify the
E1 terms with the Heegaard Floer groups of resolution covers, and prove the
E1 differential agrees with the Khovanov differential under the TQFT
identification. Add local modules for triangle-count transversality,
compactness, gluing and the surgery exact triangle. Ozsváth–Szabó's 2005 paper
states that filtered quasi-isomorphism invariance was expected, not established
there; keep it as an explicit separate obligation if a link invariant
spectral sequence is claimed. **Local prerequisite modules:** `lem-os-link-surgery-filtered-complex-and-triangle`, `lem-os-first-differential-is-reduced-khovanov`, `lem-os-filtered-convergence-and-invariance-scope`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-6/ Ozsváth–Szabó arXiv:math/0309170v1; filtered-quasi-isomorphism invariance not proved in paper. Future content authoring must supply local proofs; no citation-only fallback.

### `def-satellite-pattern-companion-and-winding-number`

**Kind:** definition. **Owner:** `satellite-knots-and-jsj-tori` (KT-17).

defines a pattern $P\subset S^1\times D^2$, winding number, nontrivial companion, and the satellite $P(K)$ with essential-torus assumptions explicit.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `def-knot-connected-sum-and-prime-knot`, `def-countable-choice`.

**Proof/definition route:** prove exterior irreducibility by putting
a sphere transverse to $K$ and removing innermost intersection circles.
Essentiality follows from incompressible annuli in pattern and companion
exteriors and the non-boundary-parallel hypothesis. For JSJ, prove the
characteristic-submanifold existence and uniqueness using incompressible
surfaces, minimization of intersection number, and isotopy of parallel
components. The existing “combed geometric decomposition” is a braid theorem,
not JSJ. Expand any use of the characteristic-submanifold theorem into named
local modules and exact proof routes in the prerequisite map. **Local prerequisite modules:** `lem-satellite-torus-is-essential`, `thm-jsj-decomposition-of-knot-exteriors`, `cor-satellite-companion-is-detected-by-jsj`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-4/ Hatcher §1.2 Theorem 1.9; reader-5/ satellite-pattern category distinctions. Future content authoring must supply local proofs; no citation-only fallback.

### `def-incompressibility-seifert-fibration-and-jsj-system`

**Kind:** definition. **Owner:** `satellite-knots-and-jsj-tori` (KT-17).

A proper two-sided surface is incompressible when no essential boundary of a compressing disk exists; irreducible means every embedded S2 bounds a ball; atoroidal means every incompressible torus is boundary parallel. A Seifert-fibered piece has the stated local solid-torus(p,q) fiber charts; a minimal JSJ system has incompressible tori and Seifert/atoroidal complementary pieces.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `def-knot-connected-sum-and-prime-knot`, `def-satellite-pattern-companion-and-winding-number`, `def-countable-choice`.

**Proof/definition route:** Define boundary incompressibility, product regions, exceptional fibers and isotopy/minimality before invoking characteristic-submanifold arguments.

**Source boundary:** reader-4/ Hatcher §1.2 Theorem 1.9; reader-5/ satellite-pattern category distinctions. Future content authoring must supply local proofs; no citation-only fallback.

### `def-finite-volume-hyperbolic-knot-exterior`

**Kind:** definition. **Owner:** `hyperbolic-knot-complements-and-volume` (KT-18).

defines a complete finite-volume curvature $-1$ metric on the interior of a compact knot exterior, with one cusp and its peripheral torus.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `def-incompressibility-seifert-fibration-and-jsj-system`, `def-satellite-pattern-companion-and-winding-number`, `def-countable-choice`.

**Proof/definition route:** do not compress geometrization into a
citation. Name local modules for cusp completeness and finite-volume
truncation; pared-structure construction; the hyperbolic alternative under
the exact torus-boundary hypotheses; Mostow–Prasad rigidity via boundary-at-
infinity extension and straightening; and finiteness/isotopy invariance of the
volume integral. Each receives an exact theorem contract and proof-level route,
not a generic “prove hyperbolization” placeholder. The theorem excludes torus
and satellite knots unless their relevant JSJ pieces meet its hypotheses.
**Local prerequisite modules:** `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `thm-thurston-hyperbolization-for-atoroidal-knot-exteriors`, `thm-mostow-prasad-rigidity-and-knot-volume`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-4/ Thurston Geometry and Topology of 3-Manifolds, selected Chs.1–9,11. Future content authoring must supply local proofs; no citation-only fallback.

### `def-cusp-slope-length`

**Kind:** definition. **Owner:** `hyperbolic-dehn-filling-and-exceptional-slopes` (KT-19).

defines Euclidean length of a primitive slope on a chosen horospherical cusp section and records the scale change.

**Direct prerequisites:** `def-oriented-slope-and-knot-dehn-filling`, `def-finite-volume-hyperbolic-knot-exterior`, `def-countable-choice`.

**Proof/definition route:** prove the local deformation-space theorem
for ideal triangulations and the independent Mostow-rigidity input; solve the
peripheral holonomy equations, verify the cusp-completeness criterion, and
identify the topological filling with the resulting holonomy quotient. Then
all sufficiently large slopes fall in the deformation neighborhood, leaving
only finitely many exceptional slopes. No numeric universal length threshold
or “at most ten” count is asserted without a separate proof. Cosmetic surgery
is reserved for terminal KT-51. **Local prerequisite modules:** `lem-ideal-triangulation-gluing-equations-and-peripheral-holonomy`, `lem-dehn-filling-deformation-and-completeness`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-4/ Thurston Ch.5 Theorem 5.8.2. Future content authoring must supply local proofs; no citation-only fallback.

### `def-normalized-colored-jones-sequence`

**Kind:** definition. **Owner:** `colored-jones-invariant-and-volume-conjecture` (KT-36).

defines the $N$- dimensional irreducible $U_q(\mathfrak{sl}_2)$ color, the framing correction, and the normalization $J_N(\text{unknot};q)=1$.

**Direct prerequisites:** `def-finite-volume-hyperbolic-knot-exterior`, `def-colored-framed-knot-evaluation-from-ribbon-category`, `def-axiom-of-choice`.

**Proof/definition route:** define the quantum-group module and universal $R$-matrix action using the existing Hopf/Hecke and ribbon-category interfaces, verify its braid and twist relations, and apply the finite word algorithm. State the colored Jones normalization, root sequence and volume term exactly; the conjecture is a separate terminal statement whose cited status is not a computational consequence. The volume statement is marked as a conjecture, not an output of
the finite algorithm. Record the versioned asymptotic formulation and the date/scope of the available status source; this open item is terminal and is never used as a supplier.

**Source boundary:** reader-3/ Kauffman 2022 v2 §3 (dated quantum context); volume-conjecture source/status review is explicitly bounded. Future content authoring must supply local proofs; no citation-only fallback.

### `def-pared-hyperbolic-structures-and-volume`

**Kind:** definition. **Owner:** `hyperbolic-knot-complements-and-volume` (KT-18).

Define a pared pair(M,P), where P comprises marked peripheral incompressible tori/annuli and the stated abelian/annulus peripheral conditions; define developing map/holonomy, completeness, cusp horoballs, curvature−1 metric and volume integral.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `def-incompressibility-seifert-fibration-and-jsj-system`, `def-satellite-pattern-companion-and-winding-number`, `def-finite-volume-hyperbolic-knot-exterior`, `def-countable-choice`.

**Proof/definition route:** Record manifold/torus-end conditions and smooth orientation; these are construction data, not a hyperbolization proof.

**Source boundary:** reader-4/ Thurston Geometry and Topology of 3-Manifolds, selected Chs.1–9,11. Future content authoring must supply local proofs; no citation-only fallback.

### `def-seifert-s-equivalence-and-conway-normalization`

**Kind:** definition. **Owner:** `levine-tristram-signatures-and-arf-invariant` (KT-12).

S-equivalence is generated by integral unimodular congruence and elementary Seifert hyperbolic enlargements/reductions; ∇ is normalized by unknot1 and∇_+−∇_−=z∇_0 with symmetric Δ(t)=∇(sqrt(t)−1/sqrt(t)).

**Direct prerequisites:** `def-knot-seifert-pairing-and-matrix`, `def-levine-tristram-hermitian-form-and-signature`, `def-knot-arf-invariant-from-seifert-form`, `def-axiom-of-choice`.

**Proof/definition route:** Specify each enlargement matrix and the z,t convention before Arf.

**Source boundary:** reader-2/ Livingston 2002 and Survey of Classical Knot Concordance v4; reader-2/ source convention audit of Levine–Tristram Hermitian form. Future content authoring must supply local proofs; no citation-only fallback.

### `def-singular-instanton-knot-and-sutured-closure-data`

**Kind:** definition. **Owner:** `khovanov-homology-detects-the-unknot` (KT-44).

Define the reduced singular knot constructionI^natural using a meridional earring/arc and prescribed singular bundle holonomy; define KHI via a balanced-sutured closure with an admissible bundle and the stated eigenvalue summand.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `def-khovanov-frobenius-algebra-and-cube-of-resolutions`, `def-reduced-khovanov-cohomology-of-a-knot`, `def-axiom-of-choice`.

**Proof/definition route:** Fix field/integral coefficients, orbifold/singular local model, gauge group and spectral-flow grading; closure independence/excision are theorem obligations. I^natural is not simply the ordinary framed instanton group.

**Source boundary:** reader-6/ Kronheimer–Mrowka arXiv:1005.4346v1, Theorem 1.1; KHI rank detector separately cited. Future content authoring must supply local proofs; no citation-only fallback.

### `def-instanton-surgery-triangle-data`

**Kind:** definition. **Owner:** `knot-exterior-rigidity-and-the-complement-theorem` (KT-15).

Define oriented surgery triples, their admissible SO3 bundles with w2 pairing nontrivially with a surface, perturbed Chern–Simons functional, relative spectral-flow grading and finite-energy ASD trajectory/cobordism moduli.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `def-oriented-slope-and-knot-dehn-filling`, `def-singular-instanton-knot-and-sutured-closure-data`, `def-axiom-of-choice`.

**Proof/definition route:** Fix determinant/bundle/perturbation and orientation data; separate ordinary admissible instanton theory from the later knot-singularity version.

**Source boundary:** reader-4/ Hatcher and Baldwin–Sivek 2026 theorem context; Property P gauge proof is an explicit local module. Future content authoring must supply local proofs; no citation-only fallback.

### `def-singular-knot-and-vassiliev-derivative`

**Kind:** definition. **Owner:** `vassiliev-invariants-and-chord-diagrams` (KT-34).

defines an $m$- singular knot and the alternating finite difference of an invariant over its $2^m$ resolutions; type $n$ means vanishing on every $(n+1)$-singular knot.

**Direct prerequisites:** `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `def-countable-choice`.

**Proof/definition route:** resolve singular crossings in disjoint
balls and show the alternating difference is unchanged by singular
Reidemeister moves. The local four-term relation follows from the two ways to
resolve the common three-strand singularity; prove each coefficient sign from
the fixed crossing convention. The 1T relation is exactly the framed/unframed
curl correction. The Bar–Natan–Stoimenow source's framing distinction is
preserved: framed weight systems satisfy 4T, unframed ones also satisfy 1T.
**Local prerequisite modules:** `lem-vassiliev-4t-from-singular-reidemeister-move`, `lem-vassiliev-framing-one-term-relation`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-3/ Bar–Natan–Stoimenow arXiv:q-alg/9702009v1 §1. Future content authoring must supply local proofs; no citation-only fallback.

### `cex-knot-kt-51-boundary-case`

**Kind:** counterexample. **Owner:** `open-questions-in-knot-polynomials-and-surgery-examples` (KT-51).

The absence of an arXiv DOI/journal field proves neither truth nor falsehood; accepting or rejecting the mathematical implication from those fields is invalid inference.

**Direct prerequisites:** `def-kauffman-bracket-smoothing-and-loop-value`, `def-singular-knot-and-vassiliev-derivative`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-3/ Carmi–Cohen arXiv:2606.22410v1, full 62 pages, submitted 2026-06-21; proof claim unaudited; reader-4/ Baldwin–Sivek 2026 open questions; reader-5/ Cha–Kim 2025 Remark 1.1. Future content authoring must supply local proofs; no citation-only fallback.

### `def-framed-chord-diagram-and-four-term-relations`

**Kind:** definition. **Owner:** `vassiliev-invariants-and-chord-diagrams` (KT-34).

defines chord diagrams on an oriented circle, the 4T relation, and the additional 1T relation for unframed invariants.

**Direct prerequisites:** `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `def-singular-knot-and-vassiliev-derivative`, `def-countable-choice`.

**Proof/definition route:** resolve singular crossings in disjoint
balls and show the alternating difference is unchanged by singular
Reidemeister moves. The local four-term relation follows from the two ways to
resolve the common three-strand singularity; prove each coefficient sign from
the fixed crossing convention. The 1T relation is exactly the framed/unframed
curl correction. The Bar–Natan–Stoimenow source's framing distinction is
preserved: framed weight systems satisfy 4T, unframed ones also satisfy 1T.
**Local prerequisite modules:** `lem-vassiliev-4t-from-singular-reidemeister-move`, `lem-vassiliev-framing-one-term-relation`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-3/ Bar–Natan–Stoimenow arXiv:q-alg/9702009v1 §1. Future content authoring must supply local proofs; no citation-only fallback.

### `def-kontsevich-integral-on-parenthesized-braids`

**Kind:** definition. **Owner:** `kontsevich-integral-and-universal-finite-type-invariants` (KT-35).

defines the regularized configuration-space/KZ series with its completed chord-diagram target and parenthesization.

**Direct prerequisites:** `def-singular-knot-and-vassiliev-derivative`, `def-framed-chord-diagram-and-four-term-relations`, `def-countable-choice`.

**Proof/definition route:** give the ordered analytic/algebraic
modules: configuration-space compactification and face stratification;
integrability and convergence of the logarithmic differential form; flatness
of the KZ connection from infinitesimal braid relations; regularized limits at
collisions; the associator pentagon/hexagon from the differential equation;
invariance under the full braid/Markov/Reidemeister presentation; filtration
degree from boundary strata; and the inverse/weight-system argument for
universality. Bar–Natan–Stoimenow and Bar–Natan source summaries sketch some
of these estimates; no sketched analytic step is treated as proof. The
prerequisite map assigns every missing module a local item ID, one owner page, a noncyclic dependency contract, and the source that only outlines it. **Local prerequisite modules:** `lem-kz-connection-flatness-and-braid-relations`, `lem-kontsevich-configuration-space-compactification-faces`, `lem-kontsevich-configuration-integral-convergence-needle-estimates`, `lem-kontsevich-critical-point-normalization-and-associator`, `lem-kontsevich-braid-and-knot-isotopy-invariance`, `thm-kontsevich-universal-associated-graded-proof`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-3/ Bar–Natan–Stoimenow arXiv:q-alg/9702009v1 §2; reader-3/ Bar–Natan arXiv:q-alg/9607001v1 (pure braid separation only). Future content authoring must supply local proofs; no citation-only fallback.

### `def-completed-chord-kz-and-morse-knot-data`

**Kind:** definition. **Owner:** `kontsevich-integral-and-universal-finite-type-invariants` (KT-35).

Define the graded rational chord/Jacobi-diagram quotient with4T and optionally1T, degreewise product completion, infinitesimal braid generators tij, ordered configuration spaces, tangential basepoints, parenthesized braids and Morse long knots with a fixed height.

**Direct prerequisites:** `def-singular-knot-and-vassiliev-derivative`, `def-framed-chord-diagram-and-four-term-relations`, `def-kontsevich-integral-on-parenthesized-braids`, `def-countable-choice`.

**Proof/definition route:** Specify which framed target and hump normalization is used before integrals and associator identities.

**Source boundary:** reader-3/ Bar–Natan–Stoimenow arXiv:q-alg/9702009v1 §2; reader-3/ Bar–Natan arXiv:q-alg/9607001v1 (pure braid separation only). Future content authoring must supply local proofs; no citation-only fallback.

### `def-sl-two-character-variety-and-peripheral-eigenvalues`

**Kind:** definition. **Owner:** `character-varieties-and-the-a-polynomial` (KT-20).

defines the $SL_2(\mathbb C)$ representation variety of a Wirtinger group, its trace-character quotient and meridian/longitude eigenvalue coordinates $(M,L)$ on representations where the peripheral subgroup is simultaneously triangularizable.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `def-knot-twisted-chain-complex-and-reidemeister-torsion`, `def-incompressibility-seifert-fibration-and-jsj-system`, `def-satellite-pattern-companion-and-winding-number`, `def-singular-instanton-knot-and-sutured-closure-data`, `def-axiom-of-choice`.

**Proof/definition route:** use KT-01's presentation and KT-02's
marked peripheral words to build polynomial matrix equations. Prove trace
coordinates generate the character quotient, the boundary restriction is
algebraic, and elimination with Laurent resultants separates reducible from
nonabelian components. For the logarithmic slope, prove adjoint-twisted
homology is one-dimensional on the admissible locus, derive the Fox boundary
matrix and differentiate the defining polynomial; then use the source's
ideal-point/Culler–Shalen argument. For the Baldwin–Sivek results, assign
separate local modules for enhanced-polynomial construction, rational
$SL_2(\mathbb C)$ surgery representations, the torus/satellite/hyperbolic
trichotomy, the imported instanton L-space restriction, and the Newton-polygon
criterion. Their papers rely on instanton Floer and Culler–Shalen inputs, so
none of those is a proof supplied by the article citation. State exact
exceptions and orientation conventions. **Local prerequisite modules:** `lem-sl2-character-trace-coordinate-algebra`, `lem-knot-a-polynomial-boundary-elimination`, `thm-adjoint-logarithmic-gauss-slope-and-ideal-point`, `lem-baldwin-sivek-instanton-surgery-and-newton-polygon-inputs`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-4/ Bénard–Florens–Rodau 2024 Theorems 4.1,5.2; reader-4/ Baldwin–Sivek arXiv:2405.19197v2, published Math. Ann. 394 (2026), Theorems 1.1,1.2,1.7 and Questions 1.5,1.6,1.8. Future content authoring must supply local proofs; no citation-only fallback.

### `def-knot-a-polynomial`

**Kind:** definition. **Owner:** `character-varieties-and-the-a-polynomial` (KT-20).

defines the ordinary reduced boundary-image curve and its Laurent polynomial up to $\pm M^aL^b$, recording the abelian factor;

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `def-knot-twisted-chain-complex-and-reidemeister-torsion`, `def-incompressibility-seifert-fibration-and-jsj-system`, `def-satellite-pattern-companion-and-winding-number`, `def-singular-instanton-knot-and-sutured-closure-data`, `def-sl-two-character-variety-and-peripheral-eigenvalues`, `def-axiom-of-choice`.

**Proof/definition route:** use KT-01's presentation and KT-02's
marked peripheral words to build polynomial matrix equations. Prove trace
coordinates generate the character quotient, the boundary restriction is
algebraic, and elimination with Laurent resultants separates reducible from
nonabelian components. For the logarithmic slope, prove adjoint-twisted
homology is one-dimensional on the admissible locus, derive the Fox boundary
matrix and differentiate the defining polynomial; then use the source's
ideal-point/Culler–Shalen argument. For the Baldwin–Sivek results, assign
separate local modules for enhanced-polynomial construction, rational
$SL_2(\mathbb C)$ surgery representations, the torus/satellite/hyperbolic
trichotomy, the imported instanton L-space restriction, and the Newton-polygon
criterion. Their papers rely on instanton Floer and Culler–Shalen inputs, so
none of those is a proof supplied by the article citation. State exact
exceptions and orientation conventions. **Local prerequisite modules:** `lem-sl2-character-trace-coordinate-algebra`, `lem-knot-a-polynomial-boundary-elimination`, `thm-adjoint-logarithmic-gauss-slope-and-ideal-point`, `lem-baldwin-sivek-instanton-surgery-and-newton-polygon-inputs`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-4/ Bénard–Florens–Rodau 2024 Theorems 4.1,5.2; reader-4/ Baldwin–Sivek arXiv:2405.19197v2, published Math. Ann. 394 (2026), Theorems 1.1,1.2,1.7 and Questions 1.5,1.6,1.8. Future content authoring must supply local proofs; no citation-only fallback.

### `def-enhanced-a-polynomial`

**Kind:** definition. **Owner:** `character-varieties-and-the-a-polynomial` (KT-20).

separately removes the reducible representation component.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `def-knot-twisted-chain-complex-and-reidemeister-torsion`, `def-incompressibility-seifert-fibration-and-jsj-system`, `def-satellite-pattern-companion-and-winding-number`, `def-singular-instanton-knot-and-sutured-closure-data`, `def-sl-two-character-variety-and-peripheral-eigenvalues`, `def-knot-a-polynomial`, `def-axiom-of-choice`.

**Proof/definition route:** use KT-01's presentation and KT-02's
marked peripheral words to build polynomial matrix equations. Prove trace
coordinates generate the character quotient, the boundary restriction is
algebraic, and elimination with Laurent resultants separates reducible from
nonabelian components. For the logarithmic slope, prove adjoint-twisted
homology is one-dimensional on the admissible locus, derive the Fox boundary
matrix and differentiate the defining polynomial; then use the source's
ideal-point/Culler–Shalen argument. For the Baldwin–Sivek results, assign
separate local modules for enhanced-polynomial construction, rational
$SL_2(\mathbb C)$ surgery representations, the torus/satellite/hyperbolic
trichotomy, the imported instanton L-space restriction, and the Newton-polygon
criterion. Their papers rely on instanton Floer and Culler–Shalen inputs, so
none of those is a proof supplied by the article citation. State exact
exceptions and orientation conventions. **Local prerequisite modules:** `lem-sl2-character-trace-coordinate-algebra`, `lem-knot-a-polynomial-boundary-elimination`, `thm-adjoint-logarithmic-gauss-slope-and-ideal-point`, `lem-baldwin-sivek-instanton-surgery-and-newton-polygon-inputs`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-4/ Bénard–Florens–Rodau 2024 Theorems 4.1,5.2; reader-4/ Baldwin–Sivek arXiv:2405.19197v2, published Math. Ann. 394 (2026), Theorems 1.1,1.2,1.7 and Questions 1.5,1.6,1.8. Future content authoring must supply local proofs; no citation-only fallback.

### `def-character-variety-logarithmic-slope-invariant`

**Kind:** definition. **Owner:** `character-varieties-and-the-a-polynomial` (KT-20).

defines the adjoint-twisted slope as the kernel line of $H_1(\partial E_K;\operatorname{Ad}\rho)\to H_1(E_K;\operatorname{Ad}\rho)$ on the exact admissible locus.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `def-knot-twisted-chain-complex-and-reidemeister-torsion`, `def-incompressibility-seifert-fibration-and-jsj-system`, `def-satellite-pattern-companion-and-winding-number`, `def-singular-instanton-knot-and-sutured-closure-data`, `def-sl-two-character-variety-and-peripheral-eigenvalues`, `def-knot-a-polynomial`, `def-enhanced-a-polynomial`, `def-axiom-of-choice`.

**Proof/definition route:** use KT-01's presentation and KT-02's
marked peripheral words to build polynomial matrix equations. Prove trace
coordinates generate the character quotient, the boundary restriction is
algebraic, and elimination with Laurent resultants separates reducible from
nonabelian components. For the logarithmic slope, prove adjoint-twisted
homology is one-dimensional on the admissible locus, derive the Fox boundary
matrix and differentiate the defining polynomial; then use the source's
ideal-point/Culler–Shalen argument. For the Baldwin–Sivek results, assign
separate local modules for enhanced-polynomial construction, rational
$SL_2(\mathbb C)$ surgery representations, the torus/satellite/hyperbolic
trichotomy, the imported instanton L-space restriction, and the Newton-polygon
criterion. Their papers rely on instanton Floer and Culler–Shalen inputs, so
none of those is a proof supplied by the article citation. State exact
exceptions and orientation conventions. **Local prerequisite modules:** `lem-sl2-character-trace-coordinate-algebra`, `lem-knot-a-polynomial-boundary-elimination`, `thm-adjoint-logarithmic-gauss-slope-and-ideal-point`, `lem-baldwin-sivek-instanton-surgery-and-newton-polygon-inputs`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-4/ Bénard–Florens–Rodau 2024 Theorems 4.1,5.2; reader-4/ Baldwin–Sivek arXiv:2405.19197v2, published Math. Ann. 394 (2026), Theorems 1.1,1.2,1.7 and Questions 1.5,1.6,1.8. Future content authoring must supply local proofs; no citation-only fallback.

### `def-sl-two-abelian-surgery`

**Kind:** definition. **Owner:** `character-varieties-and-the-a-polynomial` (KT-20).

states that every $SL_2(\mathbb C)$ representation of the filled group has abelian image.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `def-knot-twisted-chain-complex-and-reidemeister-torsion`, `def-incompressibility-seifert-fibration-and-jsj-system`, `def-satellite-pattern-companion-and-winding-number`, `def-singular-instanton-knot-and-sutured-closure-data`, `def-sl-two-character-variety-and-peripheral-eigenvalues`, `def-knot-a-polynomial`, `def-enhanced-a-polynomial`, `def-character-variety-logarithmic-slope-invariant`, `def-axiom-of-choice`.

**Proof/definition route:** use KT-01's presentation and KT-02's
marked peripheral words to build polynomial matrix equations. Prove trace
coordinates generate the character quotient, the boundary restriction is
algebraic, and elimination with Laurent resultants separates reducible from
nonabelian components. For the logarithmic slope, prove adjoint-twisted
homology is one-dimensional on the admissible locus, derive the Fox boundary
matrix and differentiate the defining polynomial; then use the source's
ideal-point/Culler–Shalen argument. For the Baldwin–Sivek results, assign
separate local modules for enhanced-polynomial construction, rational
$SL_2(\mathbb C)$ surgery representations, the torus/satellite/hyperbolic
trichotomy, the imported instanton L-space restriction, and the Newton-polygon
criterion. Their papers rely on instanton Floer and Culler–Shalen inputs, so
none of those is a proof supplied by the article citation. State exact
exceptions and orientation conventions. **Local prerequisite modules:** `lem-sl2-character-trace-coordinate-algebra`, `lem-knot-a-polynomial-boundary-elimination`, `thm-adjoint-logarithmic-gauss-slope-and-ideal-point`, `lem-baldwin-sivek-instanton-surgery-and-newton-polygon-inputs`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-4/ Bénard–Florens–Rodau 2024 Theorems 4.1,5.2; reader-4/ Baldwin–Sivek arXiv:2405.19197v2, published Math. Ann. 394 (2026), Theorems 1.1,1.2,1.7 and Questions 1.5,1.6,1.8. Future content authoring must supply local proofs; no citation-only fallback.

### `def-adjoint-twisted-homology-and-culler-shalen-data`

**Kind:** definition. **Owner:** `character-varieties-and-the-a-polynomial` (KT-20).

Adρ acts on sl2(C) by conjugation; twisted cellular chains use this local system. An ideal point is a point of the smooth projective completion outside the affine character curve; its valuation gives an action on a Bruhat–Tits tree and an essential surface via a transverse equivariant map.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `def-knot-twisted-chain-complex-and-reidemeister-torsion`, `def-incompressibility-seifert-fibration-and-jsj-system`, `def-satellite-pattern-companion-and-winding-number`, `def-singular-instanton-knot-and-sutured-closure-data`, `def-sl-two-character-variety-and-peripheral-eigenvalues`, `def-knot-a-polynomial`, `def-enhanced-a-polynomial`, `def-character-variety-logarithmic-slope-invariant`, `def-sl-two-abelian-surgery`, `def-axiom-of-choice`.

**Proof/definition route:** Define character component, admissible boundary kernel line, Newton polygon and the reciprocal slope conventions; separate construction from the surface existence theorem.

**Source boundary:** reader-4/ Bénard–Florens–Rodau 2024 Theorems 4.1,5.2; reader-4/ Baldwin–Sivek arXiv:2405.19197v2, published Math. Ann. 394 (2026), Theorems 1.1,1.2,1.7 and Questions 1.5,1.6,1.8. Future content authoring must supply local proofs; no citation-only fallback.

### `def-sl-two-root-of-unity-skein-parameter`

**Kind:** definition. **Owner:** `root-of-unity-skein-tqft-for-three-manifolds` (KT-32).

fixes the exact parameter $p$ (even, $p\ge4$), A a primitive 2p-th root, q=A², r=p/2, simple labels 0,…,r−2, and the Temperley–Lieb loop value and the coefficient ring.

**Direct prerequisites:** `def-kauffman-bracket-skein-module-of-a-three-manifold`, `def-axiom-of-choice`.

**Proof/definition route:** prove the Jones–Wenzl recursion and
partial-trace identities for every denominator actually used; establish a
finite trivalent-spine spanning set for the handlebody skein module; compute
the radical and nondegenerate quotient using the fusion rules; prove the
handlebody pairing is compatible with gluing and mapping-class actions; then
prove surgery invariance under Kirby moves with the exact root-of-unity
normalization. Split the proof into local modules for module generation,
pairing nondegeneracy, Morita/handlebody gluing and surgery normalization.
Pohorence's 16-page notes define the bridge but cite the hard Blanchet–Habegger–
Masbaum–Vogel module-generation/Morita results; the citation does not close
these modules. Chen's thesis constructs Turaev–Viro state modules of marked
surfaces from a finite fusion category; it is a different construction and
does not prove this 3-manifold Kauffman-bracket skein TQFT. **Local prerequisite modules:** `lem-root-jones-wenzl-recursion-and-negligible-ideal`, `lem-root-fusion-rules-and-simple-object-completeness`, `lem-root-handlebody-spine-state-space-finite-generation`, `lem-root-handlebody-pairing-nondegeneracy-and-gluing`, `lem-root-skein-surgery-kirby-color-invariance`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-3/ Chen arXiv:1502.06845v1 §§2.1,5.1; reader-3/ Pohorence Jan.2016; BHMW/Morita proofs cited/sketched. Future content authoring must supply local proofs; no citation-only fallback.

### `def-semisimplified-temperley-lieb-fusion-category`

**Kind:** definition. **Owner:** `root-of-unity-skein-tqft-for-three-manifolds` (KT-32).

quotients by negligible morphisms, lists its simple labels and fusion rules, and proves rigidity, braiding and twist under the source's pivotal convention.

**Direct prerequisites:** `def-kauffman-bracket-skein-module-of-a-three-manifold`, `def-sl-two-root-of-unity-skein-parameter`, `def-axiom-of-choice`.

**Proof/definition route:** prove the Jones–Wenzl recursion and
partial-trace identities for every denominator actually used; establish a
finite trivalent-spine spanning set for the handlebody skein module; compute
the radical and nondegenerate quotient using the fusion rules; prove the
handlebody pairing is compatible with gluing and mapping-class actions; then
prove surgery invariance under Kirby moves with the exact root-of-unity
normalization. Split the proof into local modules for module generation,
pairing nondegeneracy, Morita/handlebody gluing and surgery normalization.
Pohorence's 16-page notes define the bridge but cite the hard Blanchet–Habegger–
Masbaum–Vogel module-generation/Morita results; the citation does not close
these modules. Chen's thesis constructs Turaev–Viro state modules of marked
surfaces from a finite fusion category; it is a different construction and
does not prove this 3-manifold Kauffman-bracket skein TQFT. **Local prerequisite modules:** `lem-root-jones-wenzl-recursion-and-negligible-ideal`, `lem-root-fusion-rules-and-simple-object-completeness`, `lem-root-handlebody-spine-state-space-finite-generation`, `lem-root-handlebody-pairing-nondegeneracy-and-gluing`, `lem-root-skein-surgery-kirby-color-invariance`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-3/ Chen arXiv:1502.06845v1 §§2.1,5.1; reader-3/ Pohorence Jan.2016; BHMW/Morita proofs cited/sketched. Future content authoring must supply local proofs; no citation-only fallback.

### `def-skein-tqft-state-space-and-handlebody-pairing`

**Kind:** definition. **Owner:** `root-of-unity-skein-tqft-for-three-manifolds` (KT-32).

defines the state space of a closed marked surface from the Kauffman bracket skein module of a handlebody modulo the radical of the gluing pairing.

**Direct prerequisites:** `def-kauffman-bracket-skein-module-of-a-three-manifold`, `def-sl-two-root-of-unity-skein-parameter`, `def-semisimplified-temperley-lieb-fusion-category`, `def-axiom-of-choice`.

**Proof/definition route:** prove the Jones–Wenzl recursion and
partial-trace identities for every denominator actually used; establish a
finite trivalent-spine spanning set for the handlebody skein module; compute
the radical and nondegenerate quotient using the fusion rules; prove the
handlebody pairing is compatible with gluing and mapping-class actions; then
prove surgery invariance under Kirby moves with the exact root-of-unity
normalization. Split the proof into local modules for module generation,
pairing nondegeneracy, Morita/handlebody gluing and surgery normalization.
Pohorence's 16-page notes define the bridge but cite the hard Blanchet–Habegger–
Masbaum–Vogel module-generation/Morita results; the citation does not close
these modules. Chen's thesis constructs Turaev–Viro state modules of marked
surfaces from a finite fusion category; it is a different construction and
does not prove this 3-manifold Kauffman-bracket skein TQFT. **Local prerequisite modules:** `lem-root-jones-wenzl-recursion-and-negligible-ideal`, `lem-root-fusion-rules-and-simple-object-completeness`, `lem-root-handlebody-spine-state-space-finite-generation`, `lem-root-handlebody-pairing-nondegeneracy-and-gluing`, `lem-root-skein-surgery-kirby-color-invariance`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-3/ Chen arXiv:1502.06845v1 §§2.1,5.1; reader-3/ Pohorence Jan.2016; BHMW/Morita proofs cited/sketched. Future content authoring must supply local proofs; no citation-only fallback.

### `def-extended-skein-cobordism-anomaly-data`

**Kind:** definition. **Owner:** `root-of-unity-skein-tqft-for-three-manifolds` (KT-32).

Fix A primitive2p root, p even≥4, r=p/2, q=A², δ=−A²−A^−2, labels0,…,r−2 and the nonzero quantum integers used. Surfaces carry a Lagrangian in H1(Σ;R); cobordisms carry an integer weight whose composition adds the corresponding Maslov-index correction.

**Direct prerequisites:** `def-kauffman-bracket-skein-module-of-a-three-manifold`, `def-sl-two-root-of-unity-skein-parameter`, `def-semisimplified-temperley-lieb-fusion-category`, `def-skein-tqft-state-space-and-handlebody-pairing`, `def-axiom-of-choice`.

**Proof/definition route:** Define the Maslov index as the signature of the three-Lagrangian form and fix the Gauss-sum anomalyκ; alternatively use a fully specified p1/framed category. The projective ordinary-oriented action is not silently a strict ordinary-oriented TQFT.

**Source boundary:** reader-3/ Chen arXiv:1502.06845v1 §§2.1,5.1; reader-3/ Pohorence Jan.2016; BHMW/Morita proofs cited/sketched. Future content authoring must supply local proofs; no citation-only fallback.

### `def-smooth-knot-concordance`

**Kind:** definition. **Owner:** `smooth-and-topological-knot-concordance` (KT-21).

defines an oriented smooth annulus properly embedded in $S^3\times[0,1]$ with boundary the two endpoint knots.

**Direct prerequisites:** `def-oriented-seifert-surface-and-knot-genus`, `def-knot-connected-sum-and-prime-knot`, `def-countable-choice`.

**Proof/definition route:** concatenate annuli to prove transitivity,
use collars to smooth the gluing in the smooth category, and use local-flat
charts for topological gluing. Connected sum is well-defined by placing
representatives in disjoint balls. Construct the inverse annulus by the
standard saddle movie from $K\#(-K)$ to the unknot and verify its
embedded trace; do not infer smooth concordance from abstract bordism. Minimum
genus exists because the admissible genus set is a nonempty subset of
$\mathbb N$ (KT-04 gives a Seifert surface pushed into $B^4$). **Local prerequisite modules:** `thm-knot-concordance-is-an-abelian-group`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-5/ Livingston Survey of Classical Knot Concordance v4, §§2–3. Future content authoring must supply local proofs; no citation-only fallback.

### `def-locally-flat-topological-knot-concordance`

**Kind:** definition. **Owner:** `smooth-and-topological-knot-concordance` (KT-21).

uses a locally flat topological annulus and does not require differentiability.

**Direct prerequisites:** `def-oriented-seifert-surface-and-knot-genus`, `def-knot-connected-sum-and-prime-knot`, `def-smooth-knot-concordance`, `def-countable-choice`.

**Proof/definition route:** concatenate annuli to prove transitivity,
use collars to smooth the gluing in the smooth category, and use local-flat
charts for topological gluing. Connected sum is well-defined by placing
representatives in disjoint balls. Construct the inverse annulus by the
standard saddle movie from $K\#(-K)$ to the unknot and verify its
embedded trace; do not infer smooth concordance from abstract bordism. Minimum
genus exists because the admissible genus set is a nonempty subset of
$\mathbb N$ (KT-04 gives a Seifert surface pushed into $B^4$). **Local prerequisite modules:** `thm-knot-concordance-is-an-abelian-group`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-5/ Livingston Survey of Classical Knot Concordance v4, §§2–3. Future content authoring must supply local proofs; no citation-only fallback.

### `def-smooth-and-topological-slice-genus`

**Kind:** definition. **Owner:** `smooth-and-topological-knot-concordance` (KT-21).

defines $g_4^{sm}$ and $g_4^{top}$ as the minimum genus of a properly embedded connected surface in $B^4$ bounded by the knot in the respective category.

**Direct prerequisites:** `def-oriented-seifert-surface-and-knot-genus`, `def-knot-connected-sum-and-prime-knot`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-countable-choice`.

**Proof/definition route:** concatenate annuli to prove transitivity,
use collars to smooth the gluing in the smooth category, and use local-flat
charts for topological gluing. Connected sum is well-defined by placing
representatives in disjoint balls. Construct the inverse annulus by the
standard saddle movie from $K\#(-K)$ to the unknot and verify its
embedded trace; do not infer smooth concordance from abstract bordism. Minimum
genus exists because the admissible genus set is a nonempty subset of
$\mathbb N$ (KT-04 gives a Seifert surface pushed into $B^4$). **Local prerequisite modules:** `thm-knot-concordance-is-an-abelian-group`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-5/ Livingston Survey of Classical Knot Concordance v4, §§2–3. Future content authoring must supply local proofs; no citation-only fallback.

### `def-generic-movie-of-an-oriented-knot-cobordism`

**Kind:** definition. **Owner:** `knot-cobordism-maps-and-functoriality` (KT-40).

encodes a properly embedded oriented surface in $S^3\times I$ by generic births, deaths, saddles, Reidemeister moves and isotopies, with each critical event assigned an index.

**Direct prerequisites:** `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `def-khovanov-frobenius-algebra-and-cube-of-resolutions`, `def-reduced-khovanov-cohomology-of-a-knot`, `def-admissible-pointed-heegaard-floer-data`, `def-grid-diagram-for-an-oriented-knot`, `def-axiom-of-choice`.

**Proof/definition route:** for Khovanov, assign maps to elementary
movie events and verify every Carter–Saito movie move using the formal tangle
complex; Bar–Natan's full 2005 Theorems 4–5 establish the canopoly functor
modulo chain homotopy and overall sign, so do not repeat Khovanov 1999's
resolved Conjecture 1 as an open claim. For knot Floer, split the proof into
Heegaard triple transversality, compactness and gluing; associativity of triangle
counts; naturality under Heegaard moves; basepoint action; and Cerf/movie move
checks for births, saddles and deaths. Zemke arXiv:1610.05207v3 is downloaded but explicitly unread in reader6. It is a future full-source recovery obligation, not evidence for a theorem certified by this source set. A decorated link cobordism includes basepoints and a dividing set separating w/z regions on the surface; those data and the exact version/coefficient/Spin^c sum conventions must be fixed before defining its Floer map. **Local prerequisite modules:** `lem-barnatan-carter-saito-movie-moves-up-to-sign`, `lem-knot-floer-holomorphic-triangle-transversality-compactness-gluing`, `lem-knot-floer-cobordism-naturality-and-movie-invariance`, `thm-khovanov-and-knot-floer-cobordism-map-scope`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-6/ Bar–Natan arXiv:math/0410495v2, Theorems 4–5; reader-6/ Zemke arXiv:1610.05207v3. Future content authoring must supply local proofs; no citation-only fallback.

### `def-good-fundamental-group-for-disk-embedding`

**Kind:** definition. **Owner:** `freedman-theorem-and-topological-sliceness` (KT-25).

defines the exact good-group class used by the disk-embedding theorem and includes the infinite cyclic group in it. A knot exterior generally has nonabelian group; only its abelianization is Z. The Alexander-one surgery construction produces the four-dimensional good-group problem with π1=Z.

**Direct prerequisites:** `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `def-countable-choice`.

**Proof/definition route:** specify separate modules for the
good-group criterion and controlled disk-embedding theorem; construction of
the capped grope/Casson tower; Whitney-disk framing and algebraic intersection
cancellation; convergence of the tower to a locally flat disk; and matching
the disk boundary to the original knot. Prove the Alexander-module input that
$\Delta=1$ removes the relevant obstruction, then apply the disk theorem.
Livingston's survey states this hard result but does not prove the disk
embedding machinery; the cited theorem is not treated as local proof. Do not
infer smooth sliceness. **Local prerequisite modules:** `def-freedman-good-group-and-disk-embedding-data`, `thm-freedman-disk-embedding-theorem-proof-modules`, `lem-freedman-casson-handle-skyscraper-and-surgery-modules`, `thm-alexander-polynomial-one-implies-topologically-slice`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-5/ Livingston 2004 §6; reader-5/ Topological 4-Manifolds: Disc Embedding Theorem and Beyond (2021 notes; outline only). Future content authoring must supply local proofs; no citation-only fallback.

### `def-freedman-good-group-and-disk-embedding-data`

**Kind:** definition. **Owner:** `freedman-theorem-and-topological-sliceness` (KT-25).

Define the local-flat normal/framed immersed disk data, equivariant Wall intersections in Z[π], framed algebraic dual spheres and the good-group disk-embedding property; π=Z is the application group.

**Direct prerequisites:** `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `def-good-fundamental-group-for-disk-embedding`, `def-countable-choice`.

**Proof/definition route:** Give Euclidean/half-space local models, whiskers, sheet-change group elements and the normal Euler/self-intersection conventions. Distinguish the π1=Z surgery problem from the generally nonabelian knot group.

**Source boundary:** reader-5/ Livingston 2004 §6; reader-5/ Topological 4-Manifolds: Disc Embedding Theorem and Beyond (2021 notes; outline only). Future content authoring must supply local proofs; no citation-only fallback.

### `def-heegaard-floer-correction-term`

**Kind:** definition. **Owner:** `branched-cover-correction-terms-and-sliceness` (KT-46).

defines $d(Y,\mathfrak s)$ for a rational homology sphere and a Spin$^c$ structure with the grading normalization fixed.

**Direct prerequisites:** `def-cyclic-branched-cover-of-a-knot`, `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `def-admissible-pointed-heegaard-floer-data`, `def-grid-diagram-for-an-oriented-knot`, `lem-double-cover-branched-over-a-slice-disk-is-a-rational-homology-ball`, `def-axiom-of-choice`.

**Proof/definition route:** define absolute gradings from the
Heegaard Floer chain complex; prove invariance under Heegaard moves and the
rational-ball inequality from the filtered cobordism map, with local analytic
modules for transversality/compactness/gluing. For the slice application,
prove the branched cover of a smooth disk is the exact rational homology ball
and identify which boundary Spin$^c$ structures extend. The existing published
lemma cannot be extended from smooth disks to locally flat topological disks
by analogy. **Local prerequisite modules:** `lem-heegaard-floer-correction-term-heegaard-invariance`, `lem-rational-ball-spin-c-cobordism-map-inequality`, `cor-double-cover-d-invariant-obstructs-smooth-slice`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-5/ smooth slice-disk double-cover supplier boundary; reader-6/ Heegaard Floer correction-term sources. Future content authoring must supply local proofs; no citation-only fallback.

### `def-heegaard-floer-plus-infinity-absolute-grading`

**Kind:** definition. **Owner:** `branched-cover-correction-terms-and-sliceness` (KT-46).

HF−,HF∞,HF+ are the statedU-complex variants related by exact sequence; torsionSpin^c rational-homology-sphere groups carry the absoluteQ grading with cobordism degree(c1²−2χ−3σ)/4.

**Direct prerequisites:** `def-cyclic-branched-cover-of-a-knot`, `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `def-admissible-pointed-heegaard-floer-data`, `def-grid-diagram-for-an-oriented-knot`, `lem-double-cover-branched-over-a-slice-disk-is-a-rational-homology-ball`, `def-heegaard-floer-correction-term`, `def-axiom-of-choice`.

**Proof/definition route:** Define tower image and normalizedS3 generator before d; hatHFK/grid output is insufficient.

**Source boundary:** reader-5/ smooth slice-disk double-cover supplier boundary; reader-6/ Heegaard Floer correction-term sources. Future content authoring must supply local proofs; no citation-only fallback.

### `def-integral-intersection-lattice-of-a-simply-connected-four-manifold`

**Kind:** definition. **Owner:** `smooth-sliceness-and-four-ball-genus-obstructions` (KT-26).

defines $H_2(X;\mathbb Z)$ modulo torsion with its unimodular intersection pairing.

**Direct prerequisites:** `def-cyclic-branched-cover-of-a-knot`, `def-oriented-slope-and-knot-dehn-filling`, `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `def-axiom-of-choice`.

**Proof/definition route:** first prove the branched-cover/surgery
construction with the stated smooth disk and boundary. The Donaldson proof
requires explicit modules: define the ASD moduli space and its Fredholm index;
prove regularity after the permitted perturbation and orientability; apply
Weitzenböck to rule out unwanted solutions; prove Uhlenbeck compactness and
removable singularities; establish Taubes existence of an irreducible
instanton on the positive-definite manifold; describe reducible ends and
their spectral-flow labels; compactify the one-instanton moduli space and
derive the lattice embedding/diagonalization contradiction. These are local
authoring obligations, not covered by general real intersection-form pages or
the 1983 citation alone. Keep any H1-mod-2 generalization out unless separately
proved. **Local prerequisite modules:** `def-asd-moduli-fredholm-index-and-lattice-setup`, `lem-asd-regularity-perturbation-and-orientability`, `lem-uhlenbeck-compactness-and-removable-singularities`, `lem-taubes-positive-definite-instanton-existence`, `lem-donaldson-reducible-ends-and-one-instanton-compactification`, `thm-donaldson-definite-diagonalization`, `lem-slice-branched-cover-produces-definite-four-manifold`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-5/ Donaldson, JDG 18 (1983), Theorem 1 and full 38-page paper. Future content authoring must supply local proofs; no citation-only fallback.

### `def-asd-moduli-fredholm-index-and-lattice-setup`

**Kind:** definition. **Owner:** `smooth-sliceness-and-four-ball-genus-obstructions` (KT-26).

Fix a closed simply connected oriented smooth positive-definite X, an SU2 bundle of charge one, Sobolev L²_k connections k>2 and based gauge group; define the self-dual/ASD sign convention and its elliptic deformation complex.

**Direct prerequisites:** `def-cyclic-branched-cover-of-a-knot`, `def-oriented-slope-and-knot-dehn-filling`, `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `def-integral-intersection-lattice-of-a-simply-connected-four-manifold`, `def-axiom-of-choice`.

**Proof/definition route:** Define curvature, gauge action and d_A^*⊕d_A^±, distinguish irreducibles/stabilizers, and derive the index giving dimension five in Donaldson's chosen orientation. State the integral lattice and characteristic-class conventions before moduli counts.

**Source boundary:** reader-5/ Donaldson, JDG 18 (1983), Theorem 1 and full 38-page paper. Future content authoring must supply local proofs; no citation-only fallback.

### `def-khovanov-cobordism-map-up-to-sign`

**Kind:** definition. **Owner:** `knot-cobordism-maps-and-functoriality` (KT-40).

defines the induced map on Khovanov homology modulo the global sign.

**Direct prerequisites:** `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `def-khovanov-frobenius-algebra-and-cube-of-resolutions`, `def-reduced-khovanov-cohomology-of-a-knot`, `def-admissible-pointed-heegaard-floer-data`, `def-grid-diagram-for-an-oriented-knot`, `def-generic-movie-of-an-oriented-knot-cobordism`, `def-axiom-of-choice`.

**Proof/definition route:** for Khovanov, assign maps to elementary
movie events and verify every Carter–Saito movie move using the formal tangle
complex; Bar–Natan's full 2005 Theorems 4–5 establish the canopoly functor
modulo chain homotopy and overall sign, so do not repeat Khovanov 1999's
resolved Conjecture 1 as an open claim. For knot Floer, split the proof into
Heegaard triple transversality, compactness and gluing; associativity of triangle
counts; naturality under Heegaard moves; basepoint action; and Cerf/movie move
checks for births, saddles and deaths. Zemke arXiv:1610.05207v3 is downloaded but explicitly unread in reader6. It is a future full-source recovery obligation, not evidence for a theorem certified by this source set. A decorated link cobordism includes basepoints and a dividing set separating w/z regions on the surface; those data and the exact version/coefficient/Spin^c sum conventions must be fixed before defining its Floer map. **Local prerequisite modules:** `lem-barnatan-carter-saito-movie-moves-up-to-sign`, `lem-knot-floer-holomorphic-triangle-transversality-compactness-gluing`, `lem-knot-floer-cobordism-naturality-and-movie-invariance`, `thm-khovanov-and-knot-floer-cobordism-map-scope`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-6/ Bar–Natan arXiv:math/0410495v2, Theorems 4–5; reader-6/ Zemke arXiv:1610.05207v3. Future content authoring must supply local proofs; no citation-only fallback.

### `def-knot-floer-cobordism-map`

**Kind:** definition. **Owner:** `knot-cobordism-maps-and-functoriality` (KT-40).

defines the corresponding multi-pointed knot Floer map and states its coefficient, basepoint and orientation conventions.

**Direct prerequisites:** `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `def-khovanov-frobenius-algebra-and-cube-of-resolutions`, `def-reduced-khovanov-cohomology-of-a-knot`, `def-admissible-pointed-heegaard-floer-data`, `def-grid-diagram-for-an-oriented-knot`, `def-generic-movie-of-an-oriented-knot-cobordism`, `def-khovanov-cobordism-map-up-to-sign`, `def-axiom-of-choice`.

**Proof/definition route:** for Khovanov, assign maps to elementary
movie events and verify every Carter–Saito movie move using the formal tangle
complex; Bar–Natan's full 2005 Theorems 4–5 establish the canopoly functor
modulo chain homotopy and overall sign, so do not repeat Khovanov 1999's
resolved Conjecture 1 as an open claim. For knot Floer, split the proof into
Heegaard triple transversality, compactness and gluing; associativity of triangle
counts; naturality under Heegaard moves; basepoint action; and Cerf/movie move
checks for births, saddles and deaths. Zemke arXiv:1610.05207v3 is downloaded but explicitly unread in reader6. It is a future full-source recovery obligation, not evidence for a theorem certified by this source set. A decorated link cobordism includes basepoints and a dividing set separating w/z regions on the surface; those data and the exact version/coefficient/Spin^c sum conventions must be fixed before defining its Floer map. **Local prerequisite modules:** `lem-barnatan-carter-saito-movie-moves-up-to-sign`, `lem-knot-floer-holomorphic-triangle-transversality-compactness-gluing`, `lem-knot-floer-cobordism-naturality-and-movie-invariance`, `thm-khovanov-and-knot-floer-cobordism-map-scope`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-6/ Bar–Natan arXiv:math/0410495v2, Theorems 4–5; reader-6/ Zemke arXiv:1610.05207v3. Future content authoring must supply local proofs; no citation-only fallback.

### `def-decorated-link-cobordism-and-floer-target`

**Kind:** definition. **Owner:** `knot-cobordism-maps-and-functoriality` (KT-40).

A decorated cobordism(W,S,A) includes an oriented proper link surface, boundary w/z basepoints and a properly embedded dividing1-manifoldA splitting S into w/z regions with the stated alternation. Specify Spin^c label, coefficient ring and minus/hat target and any sums.

**Direct prerequisites:** `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `def-khovanov-frobenius-algebra-and-cube-of-resolutions`, `def-reduced-khovanov-cohomology-of-a-knot`, `def-admissible-pointed-heegaard-floer-data`, `def-grid-diagram-for-an-oriented-knot`, `def-generic-movie-of-an-oriented-knot-cobordism`, `def-khovanov-cobordism-map-up-to-sign`, `def-knot-floer-cobordism-map`, `def-axiom-of-choice`.

**Proof/definition route:** Use the complete recovered Zemke theorem before acceptance; downloaded but unread Zemke is not a verified source. Define the data now and keep all functoriality proofs explicitly future obligations.

**Source boundary:** reader-6/ Bar–Natan arXiv:math/0410495v2, Theorems 4–5; reader-6/ Zemke arXiv:1610.05207v3. Future content authoring must supply local proofs; no citation-only fallback.

### `def-knot-floer-filtration-and-tau`

**Kind:** definition. **Owner:** `tau-invariant-and-the-four-ball-genus` (KT-41).

defines the Alexander filtration on $\widehat{CFK}$ and $\tau(K)$ as the least filtration level whose inclusion induces a nonzero map to $\widehat{HF}(S^3)$.

**Direct prerequisites:** `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `def-admissible-pointed-heegaard-floer-data`, `def-grid-diagram-for-an-oriented-knot`, `def-decorated-link-cobordism-and-floer-target`, `def-axiom-of-choice`.

**Proof/definition route:** filtered chain-homotopy equivalences
preserve the first filtration level mapping nontrivially to homology. A
decorated genus-$g$ concordance induces a filtered cobordism map with filtration
shift bounded by $g$; prove this from the triangle-count index formula and
movie decomposition, not by an unqualified functoriality citation. For
connected sums, prove the filtered tensor product formula and compute the
minimum nonzero filtration. **Local prerequisite modules:** `lem-knot-floer-large-surgery-and-filtered-cobordism-input`, `lem-tau-connected-sum-filtered-tensor-product`, `thm-tau-is-concordance-invariant-and-four-ball-genus-bound`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-6/ Ozsváth–Szabó arXiv:math/0301149v4; reader-6/ Hom arXiv:1512.00383v3. Future content authoring must supply local proofs; no citation-only fallback.

### `def-epsilon-from-filtered-knot-floer-complex`

**Kind:** definition. **Owner:** `epsilon-and-upsilon-concordance-invariants` (KT-42).

defines $\epsilon(K)\in\{-1,0,1\}$ from the relative vertical/horizontal maps in a reduced filtered complex and states its stable-equivalence convention.

**Direct prerequisites:** `def-admissible-pointed-heegaard-floer-data`, `def-grid-diagram-for-an-oriented-knot`, `def-knot-floer-filtration-and-tau`, `def-axiom-of-choice`.

**Proof/definition route:** reduce filtered complexes by filtered
Gaussian elimination, prove stable equivalence preserves the maps defining
$\epsilon$, and use the tensor product for connected sums. For $\Upsilon$,
set F_t(x)=max{(1−t/2)i+(t/2)j : a basis term [x,i,j] occurs}, and ν_t=min{F_t(z): z is a Maslov-zero cycle representing the normalized HF∞ generator}; define Υ=−2ν_t for t∈[0,2]. After a proved finite truncation, this is a finite minimax over supports of cycles, not the minimum weight of individual basis generators. Prove piecewise linearity from that finite support problem; the
cobordism map gives the genus bound by controlling filtration shifts. Keep
the proof algebraic after the grid/Heegaard theory is established. Do not
assert $s=2\tau$; KT-38 has a concrete counterexample. **Local prerequisite modules:** `lem-epsilon-stable-equivalence-and-not-a-homomorphism`, `thm-upsilon-additivity-mirror-and-genus-bound`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-6/ Ozsváth–Stipsicz–Szabó arXiv:1407.1795v3; reader-6/ Kubota arXiv:2412.08146v1; reader-6/ Hom arXiv:1512.00383v3; Ozsváth–Stipsicz–Szabó arXiv:1407.1795v3 and Kubota arXiv:2412.08146v1; reader-6 complete readings.. Future content authoring must supply local proofs; no citation-only fallback.

### `def-lee-deformed-khovanov-complex`

**Kind:** definition. **Owner:** `lee-deformation-and-rasmussen-s-invariant` (KT-38).

replaces the Frobenius algebra by the Lee deformation over $\mathbb Q$ and defines the induced quantum filtration.

**Direct prerequisites:** `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `def-khovanov-frobenius-algebra-and-cube-of-resolutions`, `def-reduced-khovanov-cohomology-of-a-knot`, `def-filtered-chain-complex`, `thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology`, `def-axiom-of-choice`.

**Proof/definition route:** verify the filtered differential does not decrease filtration; compute the Lee complex's rank through the oriented resolution basis and cancellation; on this page prove the Lee-specific oriented birth, saddle and death maps change filtration by at most their Euler-characteristic contribution, then decompose a genus-$g$ surface into these moves to obtain the bound. The later movie-map page KT-40 supplies general cobordism coherence but is not a prerequisite here. Distinguish the proved inequality from the false equality $s=2\tau$; Hedden–Ording’s twisted positive Whitehead double of the trefoil has $\tau=0$ and $s=2$. **Local prerequisite modules:** `lem-lee-filtered-spectral-sequence-and-two-orientation-classes`, `lem-lee-cobordism-filtration-genus-bound`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-6/ Rasmussen arXiv:math/0402131v1; reader-6/ Hedden–Ording arXiv:math/0512348v1, Theorem 1.1; Dunfield–Lipshitz–Schütz arXiv:2312.09114v3, Definitions3.1/3.2 and Theorem3.8; reader-6 full read, auditor selected decisive passages.. Future content authoring must supply local proofs; no citation-only fallback.

### `def-locally-flat-pl-knot-concordance`

**Kind:** definition. **Owner:** `smooth-and-topological-knot-concordance` (KT-21).

PL concordance is an oriented proper locally-flat PL annulus in the standard PL S3×I with product collars and PL pair charts(R4,R2)/(R4_+,R2_+). PL surfaces with cone singularities and arbitrary wild topological embeddings are excluded.

**Direct prerequisites:** `def-oriented-seifert-surface-and-knot-genus`, `def-knot-connected-sum-and-prime-knot`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `def-locally-flat-proper-surface-and-concordance-collars`, `def-countable-choice`.

**Proof/definition route:** Keep this relation separate from smooth and locally-flat topological concordance. The3-dimensional smooth/PL knot bridge does not by itself prove any4-dimensional smoothing equivalence.

**Source boundary:** reader-5/ Livingston Survey of Classical Knot Concordance v4, §§2–3. Future content authoring must supply local proofs; no citation-only fallback.

### `def-metabolic-seifert-form-and-algebraic-knot-concordance`

**Kind:** definition. **Owner:** `algebraic-knot-concordance-and-metabolic-forms` (KT-22).

defines a metabolizer $M\subset H_1(F;\mathbb Z)$ of half rank on which the Seifert pairing vanishes, defines the Witt class under direct sum and inverse, and distinguishes algebraic concordance from embedded concordance.

**Direct prerequisites:** `def-knot-seifert-pairing-and-matrix`, `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `def-axiom-of-choice`.

**Proof/definition route:** cut the 4-ball along the slice disk, use
the resulting homology cobordism of the Seifert surface, and identify the
kernel of the inclusion map as a half-rank isotropic subgroup. Prove the
metabolizer is integral and primitive; a rational Lagrangian alone is
insufficient for the integral Seifert form. For the classification theorem,
decompose the isometric structure over the rational function field into
primary summands, prove the local signature and discriminant invariants, then
assemble the Witt group using the exact source's number-theoretic lemmas.
Do not use the unrelated library `def-witt-algebra` for Witt groups.
**Local prerequisite modules:** `lem-slice-disk-induces-seifert-metabolizer`, `thm-levine-algebraic-concordance-surjection-proof`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-5/ Livingston 2004 §§2–3; reader-2/ Livingston Seifert Forms (2002). Future content authoring must supply local proofs; no citation-only fallback.

### `def-finite-order-character-of-a-branched-cover`

**Kind:** definition. **Owner:** `casson-gordon-invariants-and-sliceness-obstructions` (KT-24).

fixes a finite cyclic character on $H_1(\Sigma_q(K))$ and its induced local system.

**Direct prerequisites:** `def-cyclic-branched-cover-of-a-knot`, `def-levine-tristram-hermitian-form-and-signature`, `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `def-metabolic-seifert-form-and-algebraic-knot-concordance`, `def-axiom-of-choice`.

**Proof/definition route:** build the branched-cover 4-manifold from
the slice disk, prove the boundary linking form is nonsingular when the cover
is a rational homology sphere, and identify the metabolizer by duality. Define
twisted homology from the character representation, prove the signature is
independent of the chosen bounding 4-manifold by gluing and Novikov
additivity, then prove the vanishing statement for metabolizing characters.
The full Casson–Gordon machinery is not replaced by a citation: item contracts
must include the character-extension lemma, twisted-form nonsingularity,
bordism/gluing invariance and exact prime-power assumptions. **Local prerequisite modules:** `lem-casson-gordon-characters-and-linking-metabolizers`, `lem-casson-gordon-signature-defect-and-vanishing`, `thm-casson-gordon-slice-obstruction`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-5/ Livingston 2004 §4; exact Casson–Gordon proof gaps remain. Future content authoring must supply local proofs; no citation-only fallback.

### `def-casson-gordon-signature-defect`

**Kind:** definition. **Owner:** `casson-gordon-invariants-and-sliceness-obstructions` (KT-24).

defines the Casson–Gordon Witt invariant τ(Σ_q(K),χ) in W(C(t))⊗Q using the zero-surgery on the branch lift, a Z_p×Z character, a bounding multiple r and the difference (twisted form−ordinary form)/r. Its averaged unit-circle signature functions are then defined from this Witt class; an arbitrary three-manifold rho/signature defect is not silently the same invariant.

**Direct prerequisites:** `def-cyclic-branched-cover-of-a-knot`, `def-levine-tristram-hermitian-form-and-signature`, `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `def-metabolic-seifert-form-and-algebraic-knot-concordance`, `def-finite-order-character-of-a-branched-cover`, `def-axiom-of-choice`.

**Proof/definition route:** build the branched-cover 4-manifold from
the slice disk, prove the boundary linking form is nonsingular when the cover
is a rational homology sphere, and identify the metabolizer by duality. Define
twisted homology from the character representation, prove the signature is
independent of the chosen bounding 4-manifold by gluing and Novikov
additivity, then prove the vanishing statement for metabolizing characters.
The full Casson–Gordon machinery is not replaced by a citation: item contracts
must include the character-extension lemma, twisted-form nonsingularity,
bordism/gluing invariance and exact prime-power assumptions. **Local prerequisite modules:** `lem-casson-gordon-characters-and-linking-metabolizers`, `lem-casson-gordon-signature-defect-and-vanishing`, `thm-casson-gordon-slice-obstruction`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-5/ Livingston 2004 §4; exact Casson–Gordon proof gaps remain. Future content authoring must supply local proofs; no citation-only fallback.

### `def-integral-half-solutions-strebel-and-l2-signatures`

**Kind:** definition. **Owner:** `satellite-operators-and-knot-concordance-filtrations` (KT-27).

An integral n-solution W has H1(M(K))→H1(W)≅Z and a half-rank hyperbolic Lagrangian with duals overZ[π/π^(n)] mapping to an integral basis of H2(W)/tors. A(n+1/2)-solution additionally lifts its Lagrangian toπ/π^(n+1) with vanishing equivariant intersections while retaining the n-duals. D(R) means projective RG maps that become injective afterR⊗RG were already injective. Define N(G), its trace/dimension andρ^(2)=σ^(2)(W,φ)−σ(W) with independence proved separately.

**Direct prerequisites:** `def-knot-twisted-chain-complex-and-reidemeister-torsion`, `def-incompressibility-seifert-fibration-and-jsj-system`, `def-satellite-pattern-companion-and-winding-number`, `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `def-metabolic-seifert-form-and-algebraic-knot-concordance`, `def-axiom-of-choice`.

**Proof/definition route:** Match the precise Cha13 integral convention (no silent spin assumption); state n≥0, R=Q orF_p, G^(n+1)=1, extendingφ and infinite-order meridian before applying vanishing.

**Source boundary:** reader-5/ Cochran–Davis–Ray arXiv:1205.5058v3, §§2–7; reader-5/ Cha–Kim arXiv:2402.04629v2 (2025), Theorems A–C and Remark 1.1. Future content authoring must supply local proofs; no citation-only fallback.

### `def-integral-witt-and-seifert-isometric-structures`

**Kind:** definition. **Owner:** `algebraic-knot-concordance-and-metabolic-forms` (KT-22).

A Seifert lattice is a finite free abelian module with bilinear V and unimodular V−V^T; a metabolizer is a primitive half-rank summand with V identically zero. Witt equivalence uses metabolic direct-sum differences; rational isometric structures include the nonsingular form and its preserving automorphism.

**Direct prerequisites:** `def-knot-seifert-pairing-and-matrix`, `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `def-metabolic-seifert-form-and-algebraic-knot-concordance`, `def-axiom-of-choice`.

**Proof/definition route:** Do not reuse the unrelated Witt Lie algebra. Define number-field involutions, primary decomposition and local Witt invariants in the classification proof, with exact domain before use.

**Source boundary:** reader-5/ Livingston 2004 §§2–3; reader-2/ Livingston Seifert Forms (2002). Future content authoring must supply local proofs; no citation-only fallback.

### `def-rasmussen-s-invariant`

**Kind:** definition. **Owner:** `lee-deformation-and-rasmussen-s-invariant` (KT-38).

defines $s(K)$ from their filtration levels with the exact parity convention.

**Direct prerequisites:** `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `def-khovanov-frobenius-algebra-and-cube-of-resolutions`, `def-reduced-khovanov-cohomology-of-a-knot`, `def-filtered-chain-complex`, `thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology`, `def-lee-deformed-khovanov-complex`, `def-axiom-of-choice`.

**Proof/definition route:** verify the filtered differential does not decrease filtration; compute the Lee complex's rank through the oriented resolution basis and cancellation; on this page prove the Lee-specific oriented birth, saddle and death maps change filtration by at most their Euler-characteristic contribution, then decompose a genus-$g$ surface into these moves to obtain the bound. The later movie-map page KT-40 supplies general cobordism coherence but is not a prerequisite here. Distinguish the proved inequality from the false equality $s=2\tau$; Hedden–Ording’s twisted positive Whitehead double of the trefoil has $\tau=0$ and $s=2$. **Local prerequisite modules:** `lem-lee-filtered-spectral-sequence-and-two-orientation-classes`, `lem-lee-cobordism-filtration-genus-bound`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-6/ Rasmussen arXiv:math/0402131v1; reader-6/ Hedden–Ording arXiv:math/0512348v1, Theorem 1.1; Dunfield–Lipshitz–Schütz arXiv:2312.09114v3, Definitions3.1/3.2 and Theorem3.8; reader-6 full read, auditor selected decisive passages.. Future content authoring must supply local proofs; no citation-only fallback.

### `def-odd-khovanov-barnatan-and-leo-triple`

**Kind:** definition. **Owner:** `lee-deformation-and-rasmussen-s-invariant` (KT-38).

LetR=Z[X,h]/(X²−Xh). A LEO triple is finite free bigradedC overZ[X]/X², finite free bigradedD overR and a module chain-homotopy equivalencef:C⊗F2→D⊗R/(2,h), withh^−1D homotopy equivalent to rank-one freeh^−1R in homological degree0 and odd quantum degrees. Local maps(α,β) preserve bigrading/module data, β localizes to equivalence and the mod2 square commutes up to module homotopy.

**Direct prerequisites:** `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `def-khovanov-frobenius-algebra-and-cube-of-resolutions`, `def-reduced-khovanov-cohomology-of-a-knot`, `def-filtered-chain-complex`, `thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology`, `def-lee-deformed-khovanov-complex`, `def-rasmussen-s-invariant`, `def-axiom-of-choice`.

**Proof/definition route:** State h degree−2 and the odd exterior-cube/Bar–Natan algebra conventions fromDLS Definitions3.1/3.2; reduced/mod2 variants are separate.

**Source boundary:** reader-6/ Rasmussen arXiv:math/0402131v1; reader-6/ Hedden–Ording arXiv:math/0512348v1, Theorem 1.1; Dunfield–Lipshitz–Schütz arXiv:2312.09114v3, Definitions3.1/3.2 and Theorem3.8; reader-6 full read, auditor selected decisive passages.. Future content authoring must supply local proofs; no citation-only fallback.

### `def-ribbon-disk-and-ribbon-knot`

**Kind:** definition. **Owner:** `ribbon-knots-and-slice-ribbon-problem` (KT-28).

defines a ribbon disk as a smooth immersed disk in $S^3$ with only ribbon singularities whose pushed-in resolution is an embedded disk in $B^4$; it fixes the equivalent banded-link movie convention.

**Direct prerequisites:** `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `def-countable-choice`.

**Proof/definition route:** define ribbon singularities with local
coordinates, prove the local resolution is embedded and orientable, and glue
the finitely many resolved patches to obtain a proper smooth disk with boundary
$K$. The converse is not claimed. For the open problem, state current status,
known partial classes and source/date; do not use the conjecture as a supplier.
**Local prerequisite modules:** `lem-ribbon-singularity-local-resolution`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-5/ Livingston 2004 ribbon/sliceness discussion; reader-5/ Piccirillo arXiv:1808.02923v1. Future content authoring must supply local proofs; no citation-only fallback.

### `def-satellite-induced-concordance-operator`

**Kind:** definition. **Owner:** `satellite-operators-and-knot-concordance-filtrations` (KT-27).

defines the map on smooth or locally flat concordance classes induced by a fixed pattern, with winding number and strong winding conditions separate.

**Direct prerequisites:** `def-knot-twisted-chain-complex-and-reidemeister-torsion`, `def-incompressibility-seifert-fibration-and-jsj-system`, `def-satellite-pattern-companion-and-winding-number`, `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `def-metabolic-seifert-form-and-algebraic-knot-concordance`, `def-axiom-of-choice`.

**Proof/definition route:** spell out the zero-surgery homology
cobordism, the weak-injectivity step, and why strong winding $\pm1$ is stronger
than ordinary winding $\pm1$. For Cha–Kim, prove the localized Blanchfield
form and its bordism invariance, the amenable-signature theorem for the
specified PTFA derived-series quotients, the $L^2$-rho estimate for the
pattern infection, the coprime Alexander separation, and the induction over
iterates. Each is a separate local lemma with its exact group class and
signature bound; the source cites the Amenable Signature Theorem and does not
prove all those modules. **Local prerequisite modules:** `lem-cdr-zero-surgery-pattern-homology-cobordism`, `lem-cdr-weak-injectivity-and-auxiliary-pattern-reduction`, `thm-cochran-davis-ray-strong-winding-injectivity`, `lem-cha-kim-integral-solvability-and-blanchfield-bordism`, `thm-amenable-signature-vanishing-for-solvable-bordisms`, `lem-cha-kim-higher-order-rho-bound-and-coprime-separation`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-5/ Cochran–Davis–Ray arXiv:1205.5058v3, §§2–7; reader-5/ Cha–Kim arXiv:2402.04629v2 (2025), Theorems A–C and Remark 1.1. Future content authoring must supply local proofs; no citation-only fallback.

### `def-blanchfield-pairing-and-higher-order-rho-invariant`

**Kind:** definition. **Owner:** `satellite-operators-and-knot-concordance-filtrations` (KT-27).

defines the localized Alexander module, Blanchfield linking form, PTFA coefficient system and $L^2$ signature defect used in the cited theorems.

**Direct prerequisites:** `def-knot-twisted-chain-complex-and-reidemeister-torsion`, `def-incompressibility-seifert-fibration-and-jsj-system`, `def-satellite-pattern-companion-and-winding-number`, `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `def-metabolic-seifert-form-and-algebraic-knot-concordance`, `def-satellite-induced-concordance-operator`, `def-axiom-of-choice`.

**Proof/definition route:** spell out the zero-surgery homology
cobordism, the weak-injectivity step, and why strong winding $\pm1$ is stronger
than ordinary winding $\pm1$. For Cha–Kim, prove the localized Blanchfield
form and its bordism invariance, the amenable-signature theorem for the
specified PTFA derived-series quotients, the $L^2$-rho estimate for the
pattern infection, the coprime Alexander separation, and the induction over
iterates. Each is a separate local lemma with its exact group class and
signature bound; the source cites the Amenable Signature Theorem and does not
prove all those modules. **Local prerequisite modules:** `lem-cdr-zero-surgery-pattern-homology-cobordism`, `lem-cdr-weak-injectivity-and-auxiliary-pattern-reduction`, `thm-cochran-davis-ray-strong-winding-injectivity`, `lem-cha-kim-integral-solvability-and-blanchfield-bordism`, `thm-amenable-signature-vanishing-for-solvable-bordisms`, `lem-cha-kim-higher-order-rho-bound-and-coprime-separation`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-5/ Cochran–Davis–Ray arXiv:1205.5058v3, §§2–7; reader-5/ Cha–Kim arXiv:2402.04629v2 (2025), Theorems A–C and Remark 1.1. Future content authoring must supply local proofs; no citation-only fallback.

### `def-smooth-zero-trace-and-dualizable-handle-link`

**Kind:** definition. **Owner:** `zero-traces-and-conway-nonsliceness` (KT-54).

defines X(K)=B4 with a zero-framed2-handle on K. A dualizable handle link has components B,G,R with B∪R isotopic to B∪μ_B, G∪R isotopic to G∪μ_G and lk(B,G)=0; R is dotted and B,G have framing0.

**Direct prerequisites:** `def-oriented-slope-and-knot-dehn-filling`, `def-rasmussen-s-invariant`, `def-axiom-of-choice`.

**Proof/definition route:** use the exact integer trace/Kirby interfaces, Lee/s theory and Alexander-one topological theorem. For trace embedding, one direction attaches the normal neighborhood of a slice disk in the opposite4-ball; conversely combine the handle core with the cone onK, embed the resulting sphere smooth away from its cone point, and remove a small standard ball about that point to obtain a smooth disk inB4. For dualizability, isotope R to a round dotted component, slide one zero-framed attaching circle off its disk and cancel the other1/2pair; then reverse roles. For the specific Conway partner, transcribe the source Kirby sequence into a finite PD/handle code with every oriented slide/framing change recorded, and independently recompute the rational Kh table or Lee filtered complex sufficient for s=2. Source Table1 is computer-reported and is not itself an independently verified local computation. Prove Δ_C=1 with the Seifert/module bridge, apply Freedman for local-flat sliceness, and transport smooth nonsliceness through trace embedding equivalence. No claim that same trace implies concordance is made.

**Source boundary:** Piccirillo arXiv:1808.02923v1, Lemma1.3, Proposition1.4, Theorem3.1, §4/Table1 and Figures2–4; reader-5 full read; auditor selected decisive prose passages.; Rasmussen arXiv:math/0402131v1, reader-6 full read; exact Lee/s and trace proof prerequisites local.. Future content authoring must supply local proofs; no citation-only fallback.

### `def-top-alexander-grading-of-knot-floer-homology`

**Kind:** definition. **Owner:** `knot-floer-genus-and-fiberedness-detection` (KT-43).

For a null-homologous K in closed oriented connectedY and a chosen Seifert class[F], the relativeSpin^c/c1 convention defines the integral Alexander grading indexed by[F]. Genus detection in this plan is separately stated forS3; Ni retains[Y,K,F] and irreducible-exterior hypotheses.

**Direct prerequisites:** `def-incompressibility-seifert-fibration-and-jsj-system`, `def-satellite-pattern-companion-and-winding-number`, `def-admissible-pointed-heegaard-floer-data`, `def-grid-diagram-for-an-oriented-knot`, `def-countable-choice`.

**Proof/definition route:** for genus detection, compare a
Heegaard diagram adapted to a minimal Seifert surface, use the relative
Spin$^c$ grading bound, and prove the top class is nonzero using the sutured
complement decomposition. For fibering, construct the sutured Floer group of
the complement, prove top-rank-one equivalence to a product sutured manifold,
and recover the fibration by the product decomposition theorem. The grid
intro alone is not a proof of the analytic equivalence; assign exact local
modules for holomorphic-disk compactness, admissibility and Heegaard-move
invariance. **Local prerequisite modules:** `thm-knot-floer-detects-seifert-genus`, `lem-ni-fiberedness-sutured-floer-and-gabai-inputs`, `lem-ni-holomorphic-disk-and-jsj-analytic-inputs`, `thm-rank-one-top-knot-floer-detects-fiberedness`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-6/ Ni arXiv:math/0607156v4, Theorem 1.1; reader-6/ MOS arXiv:math/0607691v2. Future content authoring must supply local proofs; no citation-only fallback.

### `def-balanced-taut-sutured-manifold-and-product-region`

**Kind:** definition. **Owner:** `knot-floer-genus-and-fiberedness-detection` (KT-43).

A sutured manifold(M,γ) has oriented annular/toroidal sutures separatingR_±; balanced requires no closed components, equalχ(R_+)=χ(R_−) and every boundary component meetingγ. Taut means irreducible andR_± norm-minimizing; a product isF×I with its standard sutures.

**Direct prerequisites:** `def-incompressibility-seifert-fibration-and-jsj-system`, `def-satellite-pattern-companion-and-winding-number`, `def-admissible-pointed-heegaard-floer-data`, `def-grid-diagram-for-an-oriented-knot`, `def-top-alexander-grading-of-knot-floer-homology`, `def-countable-choice`.

**Proof/definition route:** Define product disks/annuli, horizontal decompositions, foliations and characteristic product region in the exact Ni proof setting before rank-to-product arguments.

**Source boundary:** reader-6/ Ni arXiv:math/0607156v4, Theorem 1.1; reader-6/ MOS arXiv:math/0607691v2. Future content authoring must supply local proofs; no citation-only fallback.

### `def-torsion-linking-form-and-casson-gordon-bordism`

**Kind:** definition. **Owner:** `casson-gordon-invariants-and-sliceness-obstructions` (KT-24).

On an oriented rational homology3-sphere, λ(x,y)=(C·y)/n modZ for∂C=nx. A metabolizer L satisfies L=L^perp and|L|²=|H1|. The branch-lift zero-surgery and a Z_p×Z character define twisted C(t) forms; bounding multiplicities remove finite bordism obstructions.

**Direct prerequisites:** `def-cyclic-branched-cover-of-a-knot`, `def-levine-tristram-hermitian-form-and-signature`, `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `def-metabolic-seifert-form-and-algebraic-knot-concordance`, `def-finite-order-character-of-a-branched-cover`, `def-casson-gordon-signature-defect`, `def-axiom-of-choice`.

**Proof/definition route:** Fix involution conj(t)=t^−1, quotient radicals and signature-average convention; distinguish Witt τ from arbitraryρ defects.

**Source boundary:** reader-5/ Livingston 2004 §4; exact Casson–Gordon proof gaps remain. Future content authoring must supply local proofs; no citation-only fallback.

### `def-upsilon-function-from-filtered-complex`

**Kind:** definition. **Owner:** `epsilon-and-upsilon-concordance-invariants` (KT-42).

defines the piecewise-linear function $\Upsilon_K(t)$ as the minimal filtration level of the specified linear combination of the algebraic and Alexander filtrations on $CFK^\infty$.

**Direct prerequisites:** `def-admissible-pointed-heegaard-floer-data`, `def-grid-diagram-for-an-oriented-knot`, `def-knot-floer-filtration-and-tau`, `def-epsilon-from-filtered-knot-floer-complex`, `def-axiom-of-choice`.

**Proof/definition route:** reduce filtered complexes by filtered
Gaussian elimination, prove stable equivalence preserves the maps defining
$\epsilon$, and use the tensor product for connected sums. For $\Upsilon$,
set F_t(x)=max{(1−t/2)i+(t/2)j : a basis term [x,i,j] occurs}, and ν_t=min{F_t(z): z is a Maslov-zero cycle representing the normalized HF∞ generator}; define Υ=−2ν_t for t∈[0,2]. After a proved finite truncation, this is a finite minimax over supports of cycles, not the minimum weight of individual basis generators. Prove piecewise linearity from that finite support problem; the
cobordism map gives the genus bound by controlling filtration shifts. Keep
the proof algebraic after the grid/Heegaard theory is established. Do not
assert $s=2\tau$; KT-38 has a concrete counterexample. **Local prerequisite modules:** `lem-epsilon-stable-equivalence-and-not-a-homomorphism`, `thm-upsilon-additivity-mirror-and-genus-bound`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-6/ Ozsváth–Stipsicz–Szabó arXiv:1407.1795v3; reader-6/ Kubota arXiv:2412.08146v1; reader-6/ Hom arXiv:1512.00383v3; Ozsváth–Stipsicz–Szabó arXiv:1407.1795v3 and Kubota arXiv:2412.08146v1; reader-6 complete readings.. Future content authoring must supply local proofs; no citation-only fallback.

### `ex-knot-kt-51-worked-cases`

**Kind:** example. **Owner:** `open-questions-in-knot-polynomials-and-surgery-examples` (KT-51).

State exactly V_K=1⇒unknot and the claimed nonzero coefficient bound2≤q≤3c(K) from Carmi–Cohenv1, with its version/date and unverified machine-geometry scope.

**Direct prerequisites:** `def-kauffman-bracket-smoothing-and-loop-value`, `def-singular-knot-and-vassiliev-derivative`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-3/ Carmi–Cohen arXiv:2606.22410v1, full 62 pages, submitted 2026-06-21; proof claim unaudited; reader-4/ Baldwin–Sivek 2026 open questions; reader-5/ Cha–Kim 2025 Remark 1.1. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-knot-normal-circle-bundle-trivialization`

**Kind:** lemma. **Owner:** `knot-exteriors-and-peripheral-systems` (KT-02).

The oriented normal rank-two bundle of a smooth circle in oriented S3 is trivial, and its disk neighborhood has torus boundary.

**Direct prerequisites:** `def-framing-of-a-normal-bundle`, `def-oriented-link-in-s-three-and-ambient-isotopy`, `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `def-oriented-slope-and-knot-dehn-filling`, `def-countable-choice`.

**Proof/definition route:** Trivialize over an interval, compare endpoint frames in connected SO(2), and absorb their rotation along the interval; use a compact tubular neighborhood to identify S1×D2.

**Source boundary:** reader-1/ Calegari 2025 §2.2; reader-4/ Hatcher Basic 3-Manifold Notes, compact exterior context. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-kontsevich-configuration-space-compactification-faces`

**Kind:** lemma. **Owner:** `kontsevich-integral-and-universal-finite-type-invariants` (KT-35).

Ordered configuration spaces for each finite-degree integral have a manifold-with-corners compactification whose faces are collisions, endpoints and Morse-critical events with specified orientations.

**Direct prerequisites:** `def-singular-knot-and-vassiliev-derivative`, `def-framed-chord-diagram-and-four-term-relations`, `def-kontsevich-integral-on-parenthesized-braids`, `def-completed-chord-kz-and-morse-knot-data`, `def-countable-choice`.

**Proof/definition route:** Blow up nested diagonals in compatible order, prove extension of evaluation maps and enumerate principal/hidden faces. State the precise integration domain for a Morse long knot before using Stokes.

**Source boundary:** reader-3/ Bar–Natan–Stoimenow arXiv:q-alg/9702009v1 §2; reader-3/ Bar–Natan arXiv:q-alg/9607001v1 (pure braid separation only). Future content authoring must supply local proofs; no citation-only fallback.

### `lem-kontsevich-configuration-integral-convergence-needle-estimates`

**Kind:** lemma. **Owner:** `kontsevich-integral-and-universal-finite-type-invariants` (KT-35).

Each degree of the regularized Kontsevich sum has convergent improper integrals, with controlled limits under the prescribed critical-point/needle degeneration.

**Direct prerequisites:** `def-singular-knot-and-vassiliev-derivative`, `def-framed-chord-diagram-and-four-term-relations`, `def-kontsevich-integral-on-parenthesized-braids`, `def-completed-chord-kz-and-morse-knot-data`, `lem-kontsevich-configuration-space-compactification-faces`, `def-countable-choice`.

**Proof/definition route:** Estimate logarithmic singularities on each collision face, use antisymmetry/4T cancellations for hidden faces and bound critical-point neighborhoods uniformly. The 1997 sketch does not supply these estimates; recover a complete analytic source or author them.

**Source boundary:** reader-3/ Bar–Natan–Stoimenow arXiv:q-alg/9702009v1 §2; reader-3/ Bar–Natan arXiv:q-alg/9607001v1 (pure braid separation only). Future content authoring must supply local proofs; no citation-only fallback.

### `lem-kz-connection-flatness-and-braid-relations`

**Kind:** lemma. **Owner:** `kontsevich-integral-and-universal-finite-type-invariants` (KT-35).

In the completed chord algebra with [tij,tkl]=0 on distinct indices and [tij,tik+tjk]=0, the KZ connection Σ_(i<j)tij dlog(zi−zj)/(2πi) is flat.

**Direct prerequisites:** `def-singular-knot-and-vassiliev-derivative`, `def-framed-chord-diagram-and-four-term-relations`, `def-kontsevich-integral-on-parenthesized-braids`, `def-completed-chord-kz-and-morse-knot-data`, `def-countable-choice`.

**Proof/definition route:** Expand curvature and use the three-point Arnold differential-form identity with these commutators. Degreewise completion makes each finite-degree calculation finite and gives braid holonomy after endpoint data.

**Source boundary:** reader-3/ Bar–Natan–Stoimenow arXiv:q-alg/9702009v1 §2; reader-3/ Bar–Natan arXiv:q-alg/9607001v1 (pure braid separation only). Future content authoring must supply local proofs; no citation-only fallback.

### `lem-kontsevich-critical-point-normalization-and-associator`

**Kind:** lemma. **Owner:** `kontsevich-integral-and-universal-finite-type-invariants` (KT-35).

Tangential-basepoint regularized KZ holonomy yields an associator satisfying pentagon/hexagon, and the fixed hump factor corrects Morse births/deaths in the knot invariant.

**Direct prerequisites:** `def-singular-knot-and-vassiliev-derivative`, `def-framed-chord-diagram-and-four-term-relations`, `def-kontsevich-integral-on-parenthesized-braids`, `def-completed-chord-kz-and-morse-knot-data`, `lem-kz-connection-flatness-and-braid-relations`, `lem-kontsevich-configuration-integral-convergence-needle-estimates`, `def-countable-choice`.

**Proof/definition route:** Prove regularized endpoint limits degreewise, compare the five/four boundary paths of the configuration moduli, and calculate the hump/unknot correction with the exact framed convention. Parenthesized braid coherence alone does not handle knot extrema.

**Source boundary:** reader-3/ Bar–Natan–Stoimenow arXiv:q-alg/9702009v1 §2; reader-3/ Bar–Natan arXiv:q-alg/9607001v1 (pure braid separation only). Future content authoring must supply local proofs; no citation-only fallback.

### `lem-kontsevich-braid-and-knot-isotopy-invariance`

**Kind:** lemma. **Owner:** `kontsevich-integral-and-universal-finite-type-invariants` (KT-35).

The normalized completed invariant is independent of parenthesization and invariant under the full framed/unframed Morse-knot presentation as declared.

**Direct prerequisites:** `def-singular-knot-and-vassiliev-derivative`, `def-framed-chord-diagram-and-four-term-relations`, `def-kontsevich-integral-on-parenthesized-braids`, `def-completed-chord-kz-and-morse-knot-data`, `lem-kontsevich-critical-point-normalization-and-associator`, `def-countable-choice`.

**Proof/definition route:** Use flatness for braid isotopy, associator identities for reparenthesization and the regularized hump/cap relations for critical events; enumerate all events and include 1T only for unframed quotient.

**Source boundary:** reader-3/ Bar–Natan–Stoimenow arXiv:q-alg/9702009v1 §2; reader-3/ Bar–Natan arXiv:q-alg/9607001v1 (pure braid separation only). Future content authoring must supply local proofs; no citation-only fallback.

### `lem-linking-number-even-sum-and-reidemeister-invariance`

**Kind:** lemma. **Owner:** `crossing-signs-writhe-and-linking-number` (KT-03).

Half the signed mixed-crossing sum for two disjoint oriented components is integral, symmetric and invariant; it equals signed intersection with an oriented spanning surface.

**Direct prerequisites:** `thm-oriented-reidemeister-equivalence-theorem`, `def-elementary-geometric-half-twist`, `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `def-framed-knot-self-linking-and-seifert-framing`, `def-countable-choice`.

**Proof/definition route:** Evenness is the mod-two planar intersection count. Check each R move, then compare intersection and crossing counts using local surface bands or the homology meridian generator. Reverse one component to negate the value.

**Source boundary:** reader-1/ Calegari 2025 §3.3; reader-1/ Elhamdadi–Hajij–Istvan Framed Knots v6 §3.1. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-string-link-exterior-homology-and-meridian-maps`

**Kind:** lemma. **Owner:** `milnor-invariants-and-link-peripheral-nilpotent-quotients` (KT-53).

Each inclusion of the punctured disk end into an r-string-link exterior induces H1≅Z^r with meridian basis and H2=0 on both sides.

**Direct prerequisites:** `def-based-string-link-and-labeled-link-peripheral-system`, `def-axiom-of-choice`.

**Proof/definition route:** Use excision/relative Alexander duality for r proper arcs in a ball and verify each oriented meridian generator; hence the hypotheses of the integral Stallings theorem hold.

**Source boundary:** Explicit local derivation; complete classical source recovery required for the stated deep theorem.. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-wirtinger-crossing-ball-cover`

**Kind:** lemma. **Owner:** `wirtinger-presentations-and-knot-groups` (KT-01).

For a finite regular diagram, the complement admits an open crossing-ball/arc-tube cover with the specified meridian generators and path-connected overlaps; the zero-crossing circle has group Z.

**Direct prerequisites:** `def-oriented-link-in-s-three-and-ambient-isotopy`, `def-regular-oriented-link-diagram`, `thm-seifert-van-kampen`, `def-knot-planar-code`.

**Proof/definition route:** Thicken crossing balls and under-arcs, deform their complements onto punctured disks, and compute all overlap inclusions before van Kampen; handle the crossing-free component separately.

**Source boundary:** reader-1/ Calegari 2025 §§4.1–4.3 (source row calegari-2025); current oriented-link/Reidemeister suppliers. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-wirtinger-local-meridian-conjugacy`

**Kind:** lemma. **Owner:** `wirtinger-presentations-and-knot-groups` (KT-01).

In a positive oriented crossing chart, the outgoing under-meridian is the conjugate of the incoming under-meridian by the over-meridian, with inverse conjugation for the opposite chart.

**Direct prerequisites:** `def-oriented-link-in-s-three-and-ambient-isotopy`, `def-regular-oriented-link-diagram`, `thm-seifert-van-kampen`, `def-knot-planar-code`, `lem-wirtinger-crossing-ball-cover`.

**Proof/definition route:** Use an explicit small meridian loop and base paths through the crossing ball; transport the loop through the over-strand height and record the path word, checking both signs without a picture premise.

**Source boundary:** reader-1/ Calegari 2025 §§4.1–4.3 (source row calegari-2025); current oriented-link/Reidemeister suppliers. Future content authoring must supply local proofs; no citation-only fallback.

### `op-a-polynomial-for-knots-in-other-three-manifolds`

**Kind:** open-problem. **Owner:** `character-varieties-and-the-a-polynomial` (KT-20).

Let K lie in a closed connected oriented3-manifold Y with irreducible torus-boundary exterior. Is enhanced-A thinness equivalent to the exterior being Seifert-fibered over a disk with at most two singular fibers? Is the existence of infinitely many rational SL2(C)-abelian filling slopes equivalent to the same condition, with peripheral coordinates fixed?

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `def-knot-twisted-chain-complex-and-reidemeister-torsion`, `def-incompressibility-seifert-fibration-and-jsj-system`, `def-satellite-pattern-companion-and-winding-number`, `def-singular-instanton-knot-and-sutured-closure-data`, `def-sl-two-character-variety-and-peripheral-eigenvalues`, `def-knot-a-polynomial`, `def-enhanced-a-polynomial`, `def-character-variety-logarithmic-slope-invariant`, `def-sl-two-abelian-surgery`, `def-adjoint-twisted-homology-and-culler-shalen-data`, `def-axiom-of-choice`.

**Proof/definition route:** No claimed proof. Formulation/source/status review is distinct from proof acceptance.

**Source boundary:** reader-4/ Bénard–Florens–Rodau 2024 Theorems 4.1,5.2; reader-4/ Baldwin–Sivek arXiv:2405.19197v2, published Math. Ann. 394 (2026), Theorems 1.1,1.2,1.7 and Questions 1.5,1.6,1.8. Future content authoring must supply local proofs; no citation-only fallback.

### `op-a-polynomial-newton-parallelogram-characterizes-torus-knots`

**Kind:** open-problem. **Owner:** `character-varieties-and-the-a-polynomial` (KT-20).

For K⊂S3, is K a nontrivial torus knot iff the ordinary A-polynomial Newton polygon is a parallelogram?

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `def-knot-twisted-chain-complex-and-reidemeister-torsion`, `def-incompressibility-seifert-fibration-and-jsj-system`, `def-satellite-pattern-companion-and-winding-number`, `def-singular-instanton-knot-and-sutured-closure-data`, `def-sl-two-character-variety-and-peripheral-eigenvalues`, `def-knot-a-polynomial`, `def-enhanced-a-polynomial`, `def-character-variety-logarithmic-slope-invariant`, `def-sl-two-abelian-surgery`, `def-adjoint-twisted-homology-and-culler-shalen-data`, `def-axiom-of-choice`.

**Proof/definition route:** No claimed proof. Formulation/source/status review is distinct from proof acceptance.

**Source boundary:** reader-4/ Bénard–Florens–Rodau 2024 Theorems 4.1,5.2; reader-4/ Baldwin–Sivek arXiv:2405.19197v2, published Math. Ann. 394 (2026), Theorems 1.1,1.2,1.7 and Questions 1.5,1.6,1.8. Future content authoring must supply local proofs; no citation-only fallback.

### `op-cha-kim-smooth-graded-quotients-for-topologically-slice-images`

**Kind:** open-problem. **Owner:** `satellite-operators-and-knot-concordance-filtrations` (KT-27).

For a nonconstant winding-zero satellite map on smooth concordance with entirely topologically slice image, does every ⟨P^n(C_sm)⟩/⟨P^(n+1)(C_sm)⟩ have infinite rank?

**Direct prerequisites:** `def-knot-twisted-chain-complex-and-reidemeister-torsion`, `def-incompressibility-seifert-fibration-and-jsj-system`, `def-satellite-pattern-companion-and-winding-number`, `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `def-metabolic-seifert-form-and-algebraic-knot-concordance`, `def-satellite-induced-concordance-operator`, `def-blanchfield-pairing-and-higher-order-rho-invariant`, `def-integral-half-solutions-strebel-and-l2-signatures`, `def-axiom-of-choice`.

**Proof/definition route:** No claimed proof. Formulation/source/status review is distinct from proof acceptance.

**Source boundary:** reader-5/ Cochran–Davis–Ray arXiv:1205.5058v3, §§2–7; reader-5/ Cha–Kim arXiv:2402.04629v2 (2025), Theorems A–C and Remark 1.1. Future content authoring must supply local proofs; no citation-only fallback.

### `op-kashaev-volume-conjecture-for-hyperbolic-knots`

**Kind:** open-problem. **Owner:** `colored-jones-invariant-and-volume-conjecture` (KT-36).

For a hyperbolic S3 knot and reduced J_N(unknot;q)=1, is lim_(N→∞)(2π/N)log|J_N(K;exp(2πi/N))|=Vol(S3−K), with exact q/color convention transported from the quantum definition?

**Direct prerequisites:** `def-finite-volume-hyperbolic-knot-exterior`, `def-colored-framed-knot-evaluation-from-ribbon-category`, `def-normalized-colored-jones-sequence`, `def-axiom-of-choice`.

**Proof/definition route:** No claimed proof. Formulation/source/status review is distinct from proof acceptance.

**Source boundary:** reader-3/ Kauffman 2022 v2 §3 (dated quantum context); volume-conjecture source/status review is explicitly bounded. Future content authoring must supply local proofs; no citation-only fallback.

### `op-ordinary-a-polynomial-detects-torus-knots`

**Kind:** open-problem. **Owner:** `character-varieties-and-the-a-polynomial` (KT-20).

Does the ordinary A-polynomial distinguish torus knots from all non-torus S3 knots?

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `def-knot-twisted-chain-complex-and-reidemeister-torsion`, `def-incompressibility-seifert-fibration-and-jsj-system`, `def-satellite-pattern-companion-and-winding-number`, `def-singular-instanton-knot-and-sutured-closure-data`, `def-sl-two-character-variety-and-peripheral-eigenvalues`, `def-knot-a-polynomial`, `def-enhanced-a-polynomial`, `def-character-variety-logarithmic-slope-invariant`, `def-sl-two-abelian-surgery`, `def-adjoint-twisted-homology-and-culler-shalen-data`, `def-axiom-of-choice`.

**Proof/definition route:** No claimed proof. Formulation/source/status review is distinct from proof acceptance.

**Source boundary:** reader-4/ Bénard–Florens–Rodau 2024 Theorems 4.1,5.2; reader-4/ Baldwin–Sivek arXiv:2405.19197v2, published Math. Ann. 394 (2026), Theorems 1.1,1.2,1.7 and Questions 1.5,1.6,1.8. Future content authoring must supply local proofs; no citation-only fallback.

### `op-slice-ribbon-conjecture`

**Kind:** open-problem. **Owner:** `ribbon-knots-and-slice-ribbon-problem` (KT-28).

Does every smoothly slice classical knot in standard S3 bound a ribbon disk in the stated smooth category?

**Direct prerequisites:** `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `def-ribbon-disk-and-ribbon-knot`, `def-countable-choice`.

**Proof/definition route:** No claimed proof. Formulation/source/status review is distinct from proof acceptance.

**Source boundary:** reader-5/ Livingston 2004 ribbon/sliceness discussion; reader-5/ Piccirillo arXiv:1808.02923v1. Future content authoring must supply local proofs; no citation-only fallback.

### `op-two-boundary-slopes-characterize-torus-knots`

**Kind:** open-problem. **Owner:** `character-varieties-and-the-a-polynomial` (KT-20).

Are nontrivial torus knots exactly the S3 knots with two boundary slopes?

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `def-knot-twisted-chain-complex-and-reidemeister-torsion`, `def-incompressibility-seifert-fibration-and-jsj-system`, `def-satellite-pattern-companion-and-winding-number`, `def-singular-instanton-knot-and-sutured-closure-data`, `def-sl-two-character-variety-and-peripheral-eigenvalues`, `def-knot-a-polynomial`, `def-enhanced-a-polynomial`, `def-character-variety-logarithmic-slope-invariant`, `def-sl-two-abelian-surgery`, `def-adjoint-twisted-homology-and-culler-shalen-data`, `def-axiom-of-choice`.

**Proof/definition route:** No claimed proof. Formulation/source/status review is distinct from proof acceptance.

**Source boundary:** reader-4/ Bénard–Florens–Rodau 2024 Theorems 4.1,5.2; reader-4/ Baldwin–Sivek arXiv:2405.19197v2, published Math. Ann. 394 (2026), Theorems 1.1,1.2,1.7 and Questions 1.5,1.6,1.8. Future content authoring must supply local proofs; no citation-only fallback.

### `rem-jones-polynomial-unknot-detection-status`

**Kind:** remark. **Owner:** `open-questions-in-knot-polynomials-and-surgery` (KT-51).

Historical question: for a classical knot in S3, does V_K(t)=1 imply unknot? Carmi–Cohen arXiv:2606.22410v1(21June2026), Theorems6.8–6.9, claims every nontrivial knot has a nonzero Jones–Vassiliev coefficient with2≤q≤3c(K), implying the answer yes. As of this2026-10-18 research review, this proof has not been independently validated here; neither established validity nor a definitive global unresolved status is certified. Missing DOI/journal metadata proves neither. This is a nonlogical status remark, not an op audit task or supplier.

**Direct prerequisites:** `def-knot-a-polynomial`, `def-enhanced-a-polynomial`, `def-kauffman-bracket-smoothing-and-loop-value`, `def-singular-knot-and-vassiliev-derivative`, `def-framed-chord-diagram-and-four-term-relations`, `def-axiom-of-choice`.

**Proof/definition route:** Selected decisive passages checked: machine conditionsC1–C4, Proposition5.12, Theorems5.10–5.11 and6.8–6.9. Uniform geometry, exceptional collapse and smoothing locality remain independent-verification limitations. No preprint theorem is imported into a proof.

**Source boundary:** reader-3/ Carmi–Cohen arXiv:2606.22410v1, full 62 pages, submitted 2026-06-21; proof claim unaudited; reader-4/ Baldwin–Sivek 2026 open questions; reader-5/ Cha–Kim 2025 Remark 1.1. Future content authoring must supply local proofs; no citation-only fallback.

### `rem-leo-refined-s-current-computations`

**Kind:** remark. **Owner:** `lee-deformation-and-rasmussen-s-invariant` (KT-38).

DLS arXiv:2312.09114v3(2025-11-13) reports refined integer obstructions for890 of17,991 prime knots through19crossings whose smooth sliceness was unknown inApril2023; at least832 are topologically slice. This is the cited finite cohort, not a complete2026classification.

**Direct prerequisites:** `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `def-khovanov-frobenius-algebra-and-cube-of-resolutions`, `def-reduced-khovanov-cohomology-of-a-knot`, `def-lee-deformed-khovanov-complex`, `def-rasmussen-s-invariant`, `def-odd-khovanov-barnatan-and-leo-triple`, `def-axiom-of-choice`.

**Proof/definition route:** Nonlogical source/report context only; no computational table has been independently recomputed here.

**Source boundary:** reader-6/ Rasmussen arXiv:math/0402131v1; reader-6/ Hedden–Ording arXiv:math/0512348v1, Theorem 1.1; Dunfield–Lipshitz–Schütz arXiv:2312.09114v3, Definitions3.1/3.2 and Theorem3.8; reader-6 full read, auditor selected decisive passages.. Future content authoring must supply local proofs; no citation-only fallback.

### `rem-weight-system-integration-proof-boundary`

**Kind:** remark. **Owner:** `vassiliev-invariants-and-chord-diagrams` (KT-34).

records the established characteristic-zero integration theorem as a later authoring obligation discharged by KT-35; this editorial boundary is not itself a theorem or an unresolved mathematical question.

**Direct prerequisites:** `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `def-singular-knot-and-vassiliev-derivative`, `def-framed-chord-diagram-and-four-term-relations`, `def-countable-choice`.

**Proof/definition route:** resolve singular crossings in disjoint
balls and show the alternating difference is unchanged by singular
Reidemeister moves. The local four-term relation follows from the two ways to
resolve the common three-strand singularity; prove each coefficient sign from
the fixed crossing convention. The 1T relation is exactly the framed/unframed
curl correction. The Bar–Natan–Stoimenow source's framing distinction is
preserved: framed weight systems satisfy 4T, unframed ones also satisfy 1T.
**Local prerequisite modules:** `lem-vassiliev-4t-from-singular-reidemeister-move`, `lem-vassiliev-framing-one-term-relation`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-3/ Bar–Natan–Stoimenow arXiv:q-alg/9702009v1 §1. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-blackboard-framing-self-linking-is-writhe`

**Kind:** theorem. **Owner:** `crossing-signs-writhe-and-linking-number` (KT-03).

For a knot, linking with a small blackboard-normal push-off equals the total signed crossing sum; for a link component use that component's self-crossings.

**Direct prerequisites:** `thm-oriented-reidemeister-equivalence-theorem`, `def-elementary-geometric-half-twist`, `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `def-framed-knot-self-linking-and-seifert-framing`, `lem-linking-number-even-sum-and-reidemeister-invariance`, `def-countable-choice`.

**Proof/definition route:** Each original self-crossing produces two mixed crossings of equal sign in the parallel diagram; half their sum is the original sign. Control push-off size by compactness and track the single R1 contribution.

**Source boundary:** reader-1/ Calegari 2025 §3.3; reader-1/ Elhamdadi–Hajij–Istvan Framed Knots v6 §3.1. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-knot-exterior-homology-and-longitude`

**Kind:** theorem. **Owner:** `knot-exteriors-and-peripheral-systems` (KT-02).

H1(E_K;Z)=Z with positive meridian generator; the kernel from H1(∂E_K)=Z² is a primitive rank-one summand whose oriented generator is the zero longitude.

**Direct prerequisites:** `def-framing-of-a-normal-bundle`, `def-oriented-link-in-s-three-and-ambient-isotopy`, `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `def-oriented-slope-and-knot-dehn-filling`, `lem-knot-normal-circle-bundle-trivialization`, `def-countable-choice`.

**Proof/definition route:** Alexander duality computes H1; an annular push-off has meridian coefficient equal to linking. Subtract that coefficient and verify primitivity, orientation and independence of the tubular trivialization.

**Source boundary:** reader-1/ Calegari 2025 §2.2; reader-4/ Hatcher Basic 3-Manifold Notes, compact exterior context. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`

**Kind:** lemma. **Owner:** `knot-exteriors-and-peripheral-systems` (KT-02).

Every knot exterior in S3 is irreducible; it has compressible boundary iff the knot is the unknot.

**Direct prerequisites:** `def-framing-of-a-normal-bundle`, `def-oriented-link-in-s-three-and-ambient-isotopy`, `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `def-oriented-slope-and-knot-dehn-filling`, `thm-knot-exterior-homology-and-longitude`, `def-countable-choice`.

**Proof/definition route:** A sphere disjoint from the connected knot bounds a ball on the side not containing it by smooth/PL Schoenflies. A compressing disk has longitude boundary by exterior homology; cap with the neighborhood annulus to a spanning disk, proving unknotting. This result belongs before satellite/JSJ consumers.

**Source boundary:** reader-1/ Calegari 2025 §2.2; reader-4/ Hatcher Basic 3-Manifold Notes, compact exterior context. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-knot-exterior-has-peripheral-torus`

**Kind:** lemma. **Owner:** `knot-exteriors-and-peripheral-systems` (KT-02).

proves $\partial E_K\cong T^2$ and that $(\mu,\lambda)$ is a basis of $H_1(\partial E_K;\mathbb Z)$.

**Direct prerequisites:** `def-framing-of-a-normal-bundle`, `def-oriented-link-in-s-three-and-ambient-isotopy`, `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `def-oriented-slope-and-knot-dehn-filling`, `thm-knot-exterior-homology-and-longitude`, `lem-knot-normal-circle-bundle-trivialization`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-countable-choice`.

**Proof/definition route:** the current link-complement lemma concerns
the open complement and does not itself provide the marked compact exterior.
Use the smooth tubular-neighborhood theorem for the oriented normal two-plane
bundle of a circle, trivialize that oriented rank-two bundle over $S^1$, and
identify its unit normal circle bundle with $T^2$. Excision and Alexander duality give
the meridian generator; the preferred longitude is the kernel generator of
$H_1(\partial E_K)\to H_1(E_K)$. Distinguish a geometric push-off from the
unique zero-linking longitude and record orientation reversal. **Local prerequisite modules:** `lem-knot-normal-circle-bundle-trivialization`, `thm-knot-exterior-homology-and-longitude`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-1/ Calegari 2025 §2.2; reader-4/ Hatcher Basic 3-Manifold Notes, compact exterior context. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-knot-tubular-exterior-and-boundary`

**Kind:** lemma. **Owner:** `knot-exteriors-and-peripheral-systems` (KT-02).

constructs a trivialized normal disk bundle over $K$, its compact exterior and boundary torus.

**Direct prerequisites:** `def-framing-of-a-normal-bundle`, `def-oriented-link-in-s-three-and-ambient-isotopy`, `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `def-oriented-slope-and-knot-dehn-filling`, `thm-knot-exterior-homology-and-longitude`, `lem-knot-normal-circle-bundle-trivialization`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-countable-choice`.

**Proof/definition route:** the current link-complement lemma concerns
the open complement and does not itself provide the marked compact exterior.
Use the smooth tubular-neighborhood theorem for the oriented normal two-plane
bundle of a circle, trivialize that oriented rank-two bundle over $S^1$, and
identify its unit normal circle bundle with $T^2$. Excision and Alexander duality give
the meridian generator; the preferred longitude is the kernel generator of
$H_1(\partial E_K)\to H_1(E_K)$. Distinguish a geometric push-off from the
unique zero-linking longitude and record orientation reversal. **Local prerequisite modules:** `lem-knot-normal-circle-bundle-trivialization`, `thm-knot-exterior-homology-and-longitude`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-1/ Calegari 2025 §2.2; reader-4/ Hatcher Basic 3-Manifold Notes, compact exterior context. Future content authoring must supply local proofs; no citation-only fallback.

### `cex-knot-kt-02-boundary-case`

**Kind:** counterexample. **Owner:** `knot-exteriors-and-peripheral-systems-examples` (KT-02).

λ+μ has exterior homology [μ]≠0, so an arbitrary parallel push-off need not be the preferred zero longitude.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `lem-knot-tubular-exterior-and-boundary`, `lem-knot-exterior-has-peripheral-torus`, `thm-knot-exterior-homology-and-longitude`, `lem-knot-normal-circle-bundle-trivialization`, `def-oriented-slope-and-knot-dehn-filling`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-countable-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-1/ Calegari 2025 §2.2; reader-4/ Hatcher Basic 3-Manifold Notes, compact exterior context. Future content authoring must supply local proofs; no citation-only fallback.

### `ex-knot-kt-02-worked-cases`

**Kind:** example. **Owner:** `knot-exteriors-and-peripheral-systems-examples` (KT-02).

The unknot exterior is a solid torus; in its original knot basis [μ] generates H1 and [λ]=0.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `lem-knot-tubular-exterior-and-boundary`, `lem-knot-exterior-has-peripheral-torus`, `thm-knot-exterior-homology-and-longitude`, `lem-knot-normal-circle-bundle-trivialization`, `def-oriented-slope-and-knot-dehn-filling`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-countable-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-1/ Calegari 2025 §2.2; reader-4/ Hatcher Basic 3-Manifold Notes, compact exterior context. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-knot-wirtinger-presentation-correctness`

**Kind:** theorem. **Owner:** `wirtinger-presentations-and-knot-groups` (KT-01).

states that its output presents $\pi_1(S^3\setminus K)$ and that each generator represents the positively oriented meridian of its arc.

**Direct prerequisites:** `def-oriented-link-in-s-three-and-ambient-isotopy`, `def-regular-oriented-link-diagram`, `thm-seifert-van-kampen`, `def-knot-planar-code`, `lem-wirtinger-crossing-ball-cover`, `lem-wirtinger-local-meridian-conjugacy`, `alg-knot-wirtinger-presentation-from-code`.

**Proof/definition route:** reuse
`def-oriented-link-in-s-three-and-ambient-isotopy`,
`def-regular-oriented-link-diagram`, and `thm-seifert-van-kampen`. First
remove small crossing balls and decompose the complement into the under-arc
pieces; each piece contributes its meridian, and each overlap gives the
crossing conjugacy. Prove that the chosen meridian is invertible and that
changing the base arc conjugates the presentation, not its isomorphism type.
Then verify the finite code scan has one output relation per crossing and no
unlisted generator. The proof uses van Kampen on the actual open cover and
the crossing ball local model, not an appeal to a diagram. **Local prerequisite modules:** `lem-wirtinger-crossing-ball-cover`, `lem-wirtinger-local-meridian-conjugacy`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-1/ Calegari 2025 §§4.1–4.3 (source row calegari-2025); current oriented-link/Reidemeister suppliers. Future content authoring must supply local proofs; no citation-only fallback.

### `alg-abelian-cover-chain-model-from-triangulated-exterior`

**Kind:** algorithm. **Owner:** `multivariable-alexander-modules-and-chain-models` (KT-09).

takes a finite triangulation of the compact link exterior plus oriented edge labels in $\mathbb Z^r$ representing the meridian homomorphism; it constructs one deck-orbit basis element per cell and the Laurent-polynomial cellular boundary matrices. It returns the finite chain complex and its presentation matrices, or

**Direct prerequisites:** `thm-knot-wirtinger-presentation-correctness`, `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `lem-the-complement-of-an-oriented-link-is-a-connected-smooth-three-manifold`, `def-maximal-abelian-cover-alexander-module`, `def-axiom-of-choice`.

**Proof/definition route:** use covering-space classification, the
lifted-cellular chain complex and cellular homology; edge labels are a
1-cocycle exactly when the 2-cell checks pass. A change of lifted cell orbit
multiplies a basis element by a Laurent monomial, while subdivision gives chain
homotopy equivalences over $\Lambda_r$. This is a cellular route and does not
invoke the current Fox deficiency-one lemma or its literature-only determinant
step. Clearly distinguish the equal-variable specialization of the
multi-component Alexander module from the existing absolute one-variable
polynomial. **Local prerequisite modules:** `lem-maximal-abelian-cover-cellular-chain-model`, `lem-multivariable-alexander-order-and-specialization`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-2/ Morton 1998 Theorem 1; reader-2/ Conway 2016 v2 §§2–3; current Alexander module supplier. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-maximal-abelian-cover-cellular-chain-model`

**Kind:** lemma. **Owner:** `multivariable-alexander-modules-and-chain-models` (KT-09).

For a finite exterior CW structure with a specified surjective meridian cocycle to Z^r, lifted cellular chains are finite free over Z[Z^r] and compute the full-abelian-cover homology.

**Direct prerequisites:** `thm-knot-wirtinger-presentation-correctness`, `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `lem-the-complement-of-an-oriented-link-is-a-connected-smooth-three-manifold`, `def-maximal-abelian-cover-alexander-module`, `def-axiom-of-choice`.

**Proof/definition route:** Choose one lift per cell, follow attaching maps and their deck labels, and prove ∂²=0 and cellular comparison. Face-label checks alone do not prove the cocycle is the prescribed surjective meridian map; verify those conditions separately.

**Source boundary:** reader-2/ Morton 1998 Theorem 1; reader-2/ Conway 2016 v2 §§2–3; current Alexander module supplier. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-multivariable-alexander-order-and-specialization`

**Kind:** lemma. **Owner:** `multivariable-alexander-modules-and-chain-models` (KT-09).

The selected Fitting ideals/order of the full-abelian chain module are invariant under lift changes and subdivision; specializing all variables to t is a chain base change, not an automatic equality of homology orders.

**Direct prerequisites:** `thm-knot-wirtinger-presentation-correctness`, `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `lem-the-complement-of-an-oriented-link-is-a-connected-smooth-three-manifold`, `def-maximal-abelian-cover-alexander-module`, `def-axiom-of-choice`.

**Proof/definition route:** Track monomial basis units and simple subdivisions. Use the base-change homology exact sequence/Tor terms to derive each allowed specialization, recording extra (t−1) factors and rank jumps instead of assuming flat specialization.

**Source boundary:** reader-2/ Morton 1998 Theorem 1; reader-2/ Conway 2016 v2 §§2–3; current Alexander module supplier. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-abelian-cover-chain-model-computes-alexander-module`

**Kind:** theorem. **Owner:** `multivariable-alexander-modules-and-chain-models` (KT-09).

proves the output chain homology is the module just defined and that its determinantal ideals are independent of the chosen triangulation.

**Direct prerequisites:** `thm-knot-wirtinger-presentation-correctness`, `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `lem-the-complement-of-an-oriented-link-is-a-connected-smooth-three-manifold`, `def-maximal-abelian-cover-alexander-module`, `lem-maximal-abelian-cover-cellular-chain-model`, `lem-multivariable-alexander-order-and-specialization`, `alg-abelian-cover-chain-model-from-triangulated-exterior`, `def-axiom-of-choice`.

**Proof/definition route:** use covering-space classification, the
lifted-cellular chain complex and cellular homology; edge labels are a
1-cocycle exactly when the 2-cell checks pass. A change of lifted cell orbit
multiplies a basis element by a Laurent monomial, while subdivision gives chain
homotopy equivalences over $\Lambda_r$. This is a cellular route and does not
invoke the current Fox deficiency-one lemma or its literature-only determinant
step. Clearly distinguish the equal-variable specialization of the
multi-component Alexander module from the existing absolute one-variable
polynomial. **Local prerequisite modules:** `lem-maximal-abelian-cover-cellular-chain-model`, `lem-multivariable-alexander-order-and-specialization`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-2/ Morton 1998 Theorem 1; reader-2/ Conway 2016 v2 §§2–3; current Alexander module supplier. Future content authoring must supply local proofs; no citation-only fallback.

### `alg-twisted-burau-determinant-for-colored-braid-closure`

**Kind:** algorithm. **Owner:** `twisted-alexander-polynomials-and-reidemeister-torsion` (KT-10).

accepts a colored braid and an explicit free-group representation extending over the braid closure exterior, computes the colored Burau blocks and returns the valid twisted determinant or

**Direct prerequisites:** `thm-knot-wirtinger-presentation-correctness`, `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-maximal-abelian-cover-alexander-module`, `thm-abelian-cover-chain-model-computes-alexander-module`, `def-knot-twisted-chain-complex-and-reidemeister-torsion`, `def-knot-wada-quotient-for-deficiency-one-presentation`, `def-axiom-of-choice`.

**Proof/definition route:** start with the full abelianization chain complex of the actual link exterior, not the one-variable total-linking cover; specialize only after stating the representation and deck map. Derive Fox's product and inverse identities, identify the evaluated Fox matrix with the cellular differential, prove the denominator is the omitted $d_1$ minor, and track each basis change under Tietze moves. Prove the acyclicity implication from the exact sequence and Euler characteristic, then prove the torsion product formula for the braid-axis decomposition and its compatibility with the colored Burau action. Conway, *Burau Maps and Twisted Alexander Polynomials* arXiv:1510.06678v2, Lemma 2.6 and Theorem 3.15 supplies the precise colored-braid route but cites Wada/Kitano for the quotient-to-torsion theorem; Ranicki's 2001 torsion notes define the ordinary based torsion but do not close this twisted proof. Do not claim a noncommutative determinant: that extension needs a separately proved Ore localization and Dieudonné/Whitehead torsion module. **Local prerequisite modules:** `lem-twisted-fox-jacobian-is-cellular-boundary`, `lem-twisted-acyclicity-from-torsion-module`, `thm-wada-deleted-minor-equals-twisted-reidemeister-torsion`, `thm-twisted-burau-axis-torsion-product`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-2/ Conway 2016 v2 Lemma 2.6 and Theorem 3.15; reader-2/ Ranicki Notes on Reidemeister Torsion (2001-07-28 text). Future content authoring must supply local proofs; no citation-only fallback.

### `lem-twisted-fox-jacobian-is-cellular-boundary`

**Kind:** lemma. **Owner:** `twisted-alexander-polynomials-and-reidemeister-torsion` (KT-10).

For an exterior cellular presentation spine and an encoded representation/deck map, the evaluated Fox Jacobian is its twisted d2 and d1 has blocks ρ(x_j)ψ(x_j)−I.

**Direct prerequisites:** `thm-knot-wirtinger-presentation-correctness`, `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-maximal-abelian-cover-alexander-module`, `thm-abelian-cover-chain-model-computes-alexander-module`, `def-knot-twisted-chain-complex-and-reidemeister-torsion`, `def-knot-wada-quotient-for-deficiency-one-presentation`, `def-axiom-of-choice`.

**Proof/definition route:** Prove ∂(uv)=∂u+u∂v, ∂x_i/∂x_j=δij and the inverse rule by induction on words; lift attaching loops and sum their oriented edges. The fundamental Fox identity implies d1d2=0.

**Source boundary:** reader-2/ Conway 2016 v2 Lemma 2.6 and Theorem 3.15; reader-2/ Ranicki Notes on Reidemeister Torsion (2001-07-28 text). Future content authoring must supply local proofs; no citation-only fallback.

### `lem-twisted-acyclicity-from-torsion-module`

**Kind:** lemma. **Owner:** `twisted-alexander-polynomials-and-reidemeister-torsion` (KT-10).

For the specified link exterior 2-complex with nonzero deck map, degree-one torsion over the commutative Laurent domain implies the field-of-fractions twisted complex is acyclic when H0=0 and χ=0.

**Direct prerequisites:** `thm-knot-wirtinger-presentation-correctness`, `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-maximal-abelian-cover-alexander-module`, `thm-abelian-cover-chain-model-computes-alexander-module`, `def-knot-twisted-chain-complex-and-reidemeister-torsion`, `def-knot-wada-quotient-for-deficiency-one-presentation`, `lem-twisted-fox-jacobian-is-cellular-boundary`, `def-axiom-of-choice`.

**Proof/definition route:** Prove H0 vanishes using one invertible ρ(g)ψ(g)−I over F(H); H1 vanishes by the torsion hypothesis, then Euler characteristic forces H2=0. State all rank/dimension assumptions explicitly.

**Source boundary:** reader-2/ Conway 2016 v2 Lemma 2.6 and Theorem 3.15; reader-2/ Ranicki Notes on Reidemeister Torsion (2001-07-28 text). Future content authoring must supply local proofs; no citation-only fallback.

### `thm-abelian-cover-chain-model-from-triangulated-exterior-procedure-properties`

**Kind:** theorem. **Owner:** `multivariable-alexander-modules-and-chain-models` (KT-09).

For exactly the admissible encoded inputs of alg-abelian-cover-chain-model-from-triangulated-exterior, execution terminates, rejects precisely the stated syntactic failures and returns the prescribed finite output. Any identification with a topological invariant, recognition completeness, or asymptotic complexity is only the separately proved domain result, not inferred from finite execution.

**Direct prerequisites:** `alg-abelian-cover-chain-model-from-triangulated-exterior`, `thm-knot-wirtinger-presentation-correctness`, `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `lem-the-complement-of-an-oriented-link-is-a-connected-smooth-three-manifold`, `def-maximal-abelian-cover-alexander-module`, `def-axiom-of-choice`.

**Proof/definition route:** Use the explicit finite loop/state/word or bounded search measure in the procedure; prove each branch preserves the stated output representation and all arithmetic is effective. Cite the domain correctness and completeness modules separately when claiming invariant/recognition meaning.

**Source boundary:** reader-2/ Morton 1998 Theorem 1; reader-2/ Conway 2016 v2 §§2–3; current Alexander module supplier. Future content authoring must supply local proofs; no citation-only fallback.

### `cex-knot-kt-09-boundary-case`

**Kind:** counterexample. **Owner:** `multivariable-alexander-modules-and-chain-models-examples` (KT-09).

A zero total label around every 2-cell does not establish the intended meridian epimorphism: assigning every edge0 passes the face check but yields the trivial map and must be rejected as wrong marking.

**Direct prerequisites:** `def-maximal-abelian-cover-alexander-module`, `alg-abelian-cover-chain-model-from-triangulated-exterior`, `thm-abelian-cover-chain-model-computes-alexander-module`, `lem-maximal-abelian-cover-cellular-chain-model`, `lem-multivariable-alexander-order-and-specialization`, `thm-abelian-cover-chain-model-from-triangulated-exterior-procedure-properties`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-2/ Morton 1998 Theorem 1; reader-2/ Conway 2016 v2 §§2–3; current Alexander module supplier. Future content authoring must supply local proofs; no citation-only fallback.

### `ex-knot-kt-09-worked-cases`

**Kind:** example. **Owner:** `multivariable-alexander-modules-and-chain-models-examples` (KT-09).

For the Hopf link the exterior is T²×I and the maximal abelian cover is contractible, so absolute H1 module is0; for the two-component unlink the group is F2 and its total-linking cyclic module has a free Laurent summand.

**Direct prerequisites:** `def-maximal-abelian-cover-alexander-module`, `alg-abelian-cover-chain-model-from-triangulated-exterior`, `thm-abelian-cover-chain-model-computes-alexander-module`, `lem-maximal-abelian-cover-cellular-chain-model`, `lem-multivariable-alexander-order-and-specialization`, `thm-abelian-cover-chain-model-from-triangulated-exterior-procedure-properties`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-2/ Morton 1998 Theorem 1; reader-2/ Conway 2016 v2 §§2–3; current Alexander module supplier. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-knot-wirtinger-presentation-from-code-procedure-properties`

**Kind:** theorem. **Owner:** `wirtinger-presentations-and-knot-groups` (KT-01).

For exactly the admissible encoded inputs of alg-knot-wirtinger-presentation-from-code, execution terminates, rejects precisely the stated syntactic failures and returns the prescribed finite output. Any identification with a topological invariant, recognition completeness, or asymptotic complexity is only the separately proved domain result, not inferred from finite execution.

**Direct prerequisites:** `alg-knot-wirtinger-presentation-from-code`, `def-oriented-link-in-s-three-and-ambient-isotopy`, `def-regular-oriented-link-diagram`, `thm-seifert-van-kampen`, `def-knot-planar-code`.

**Proof/definition route:** Use the explicit finite loop/state/word or bounded search measure in the procedure; prove each branch preserves the stated output representation and all arithmetic is effective. Cite the domain correctness and completeness modules separately when claiming invariant/recognition meaning.

**Source boundary:** reader-1/ Calegari 2025 §§4.1–4.3 (source row calegari-2025); current oriented-link/Reidemeister suppliers. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-kontsevich-universal-associated-graded-proof`

**Kind:** theorem. **Owner:** `kontsevich-integral-and-universal-finite-type-invariants` (KT-35).

On an n-singular knot the leading degree-n derivative of Z is its chord diagram; therefore every rational weight system integrates and each order≤n invariant factors through the truncation by a filtered functional.

**Direct prerequisites:** `def-singular-knot-and-vassiliev-derivative`, `def-framed-chord-diagram-and-four-term-relations`, `def-kontsevich-integral-on-parenthesized-braids`, `def-completed-chord-kz-and-morse-knot-data`, `lem-kontsevich-braid-and-knot-isotopy-invariance`, `def-countable-choice`.

**Proof/definition route:** Localize the n resolved crossings in small balls, show lower degrees cancel in alternating sums and compute the unit leading coefficient. Inductively subtract symbol integrations to recover all lower-degree terms.

**Source boundary:** reader-3/ Bar–Natan–Stoimenow arXiv:q-alg/9702009v1 §2; reader-3/ Bar–Natan arXiv:q-alg/9607001v1 (pure braid separation only). Future content authoring must supply local proofs; no citation-only fallback.

### `lem-kontsevich-integral-finite-type-truncation`

**Kind:** lemma. **Owner:** `kontsevich-integral-and-universal-finite-type-invariants` (KT-35).

proves the degree-$n$ truncation is a finite type-$n$ invariant and has the identity weight system in degree $n$.

**Direct prerequisites:** `def-singular-knot-and-vassiliev-derivative`, `def-framed-chord-diagram-and-four-term-relations`, `def-kontsevich-integral-on-parenthesized-braids`, `def-completed-chord-kz-and-morse-knot-data`, `lem-kz-connection-flatness-and-braid-relations`, `lem-kontsevich-configuration-space-compactification-faces`, `lem-kontsevich-configuration-integral-convergence-needle-estimates`, `lem-kontsevich-critical-point-normalization-and-associator`, `lem-kontsevich-braid-and-knot-isotopy-invariance`, `thm-kontsevich-universal-associated-graded-proof`, `def-countable-choice`.

**Proof/definition route:** give the ordered analytic/algebraic
modules: configuration-space compactification and face stratification;
integrability and convergence of the logarithmic differential form; flatness
of the KZ connection from infinitesimal braid relations; regularized limits at
collisions; the associator pentagon/hexagon from the differential equation;
invariance under the full braid/Markov/Reidemeister presentation; filtration
degree from boundary strata; and the inverse/weight-system argument for
universality. Bar–Natan–Stoimenow and Bar–Natan source summaries sketch some
of these estimates; no sketched analytic step is treated as proof. The
prerequisite map assigns every missing module a local item ID, one owner page, a noncyclic dependency contract, and the source that only outlines it. **Local prerequisite modules:** `lem-kz-connection-flatness-and-braid-relations`, `lem-kontsevich-configuration-space-compactification-faces`, `lem-kontsevich-configuration-integral-convergence-needle-estimates`, `lem-kontsevich-critical-point-normalization-and-associator`, `lem-kontsevich-braid-and-knot-isotopy-invariance`, `thm-kontsevich-universal-associated-graded-proof`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-3/ Bar–Natan–Stoimenow arXiv:q-alg/9702009v1 §2; reader-3/ Bar–Natan arXiv:q-alg/9607001v1 (pure braid separation only). Future content authoring must supply local proofs; no citation-only fallback.

### `lem-kontsevich-regularization-and-associator-coherence`

**Kind:** lemma. **Owner:** `kontsevich-integral-and-universal-finite-type-invariants` (KT-35).

proves endpoint regularization, associator pentagon/hexagon identities and invariance under changes of parenthesization.

**Direct prerequisites:** `def-singular-knot-and-vassiliev-derivative`, `def-framed-chord-diagram-and-four-term-relations`, `def-kontsevich-integral-on-parenthesized-braids`, `def-completed-chord-kz-and-morse-knot-data`, `lem-kz-connection-flatness-and-braid-relations`, `lem-kontsevich-configuration-space-compactification-faces`, `lem-kontsevich-configuration-integral-convergence-needle-estimates`, `lem-kontsevich-critical-point-normalization-and-associator`, `lem-kontsevich-braid-and-knot-isotopy-invariance`, `thm-kontsevich-universal-associated-graded-proof`, `def-countable-choice`.

**Proof/definition route:** give the ordered analytic/algebraic
modules: configuration-space compactification and face stratification;
integrability and convergence of the logarithmic differential form; flatness
of the KZ connection from infinitesimal braid relations; regularized limits at
collisions; the associator pentagon/hexagon from the differential equation;
invariance under the full braid/Markov/Reidemeister presentation; filtration
degree from boundary strata; and the inverse/weight-system argument for
universality. Bar–Natan–Stoimenow and Bar–Natan source summaries sketch some
of these estimates; no sketched analytic step is treated as proof. The
prerequisite map assigns every missing module a local item ID, one owner page, a noncyclic dependency contract, and the source that only outlines it. **Local prerequisite modules:** `lem-kz-connection-flatness-and-braid-relations`, `lem-kontsevich-configuration-space-compactification-faces`, `lem-kontsevich-configuration-integral-convergence-needle-estimates`, `lem-kontsevich-critical-point-normalization-and-associator`, `lem-kontsevich-braid-and-knot-isotopy-invariance`, `thm-kontsevich-universal-associated-graded-proof`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-3/ Bar–Natan–Stoimenow arXiv:q-alg/9702009v1 §2; reader-3/ Bar–Natan arXiv:q-alg/9607001v1 (pure braid separation only). Future content authoring must supply local proofs; no citation-only fallback.

### `thm-kontsevich-integral-is-universal`

**Kind:** theorem. **Owner:** `kontsevich-integral-and-universal-finite-type-invariants` (KT-35).

states that for every degree n the degree-n symbol map is surjective over Q and the universal invariant induces the identity on the associated graded chord-diagram algebra. Any finite-type invariant of order ≤n is recovered by a linear functional on the truncation through n (including lower degrees); no knot-pair separation conclusion follows.

**Direct prerequisites:** `def-singular-knot-and-vassiliev-derivative`, `def-framed-chord-diagram-and-four-term-relations`, `def-kontsevich-integral-on-parenthesized-braids`, `def-completed-chord-kz-and-morse-knot-data`, `lem-kz-connection-flatness-and-braid-relations`, `lem-kontsevich-configuration-space-compactification-faces`, `lem-kontsevich-configuration-integral-convergence-needle-estimates`, `lem-kontsevich-critical-point-normalization-and-associator`, `lem-kontsevich-braid-and-knot-isotopy-invariance`, `thm-kontsevich-universal-associated-graded-proof`, `def-countable-choice`.

**Proof/definition route:** give the ordered analytic/algebraic
modules: configuration-space compactification and face stratification;
integrability and convergence of the logarithmic differential form; flatness
of the KZ connection from infinitesimal braid relations; regularized limits at
collisions; the associator pentagon/hexagon from the differential equation;
invariance under the full braid/Markov/Reidemeister presentation; filtration
degree from boundary strata; and the inverse/weight-system argument for
universality. Bar–Natan–Stoimenow and Bar–Natan source summaries sketch some
of these estimates; no sketched analytic step is treated as proof. The
prerequisite map assigns every missing module a local item ID, one owner page, a noncyclic dependency contract, and the source that only outlines it. **Local prerequisite modules:** `lem-kz-connection-flatness-and-braid-relations`, `lem-kontsevich-configuration-space-compactification-faces`, `lem-kontsevich-configuration-integral-convergence-needle-estimates`, `lem-kontsevich-critical-point-normalization-and-associator`, `lem-kontsevich-braid-and-knot-isotopy-invariance`, `thm-kontsevich-universal-associated-graded-proof`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-3/ Bar–Natan–Stoimenow arXiv:q-alg/9702009v1 §2; reader-3/ Bar–Natan arXiv:q-alg/9607001v1 (pure braid separation only). Future content authoring must supply local proofs; no citation-only fallback.

### `cex-knot-kt-35-boundary-case`

**Kind:** counterexample. **Owner:** `kontsevich-integral-and-universal-finite-type-invariants-examples` (KT-35).

Framed degree1 framing-number weight system does not descend through1T; this exhibits the target distinction without inventing a knot-pair separation theorem.

**Direct prerequisites:** `def-kontsevich-integral-on-parenthesized-braids`, `lem-kz-connection-flatness-and-braid-relations`, `lem-kontsevich-regularization-and-associator-coherence`, `lem-kontsevich-integral-finite-type-truncation`, `thm-kontsevich-integral-is-universal`, `lem-kontsevich-configuration-space-compactification-faces`, `lem-kontsevich-configuration-integral-convergence-needle-estimates`, `lem-kontsevich-critical-point-normalization-and-associator`, `lem-kontsevich-braid-and-knot-isotopy-invariance`, `thm-kontsevich-universal-associated-graded-proof`, `def-completed-chord-kz-and-morse-knot-data`, `def-countable-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-3/ Bar–Natan–Stoimenow arXiv:q-alg/9702009v1 §2; reader-3/ Bar–Natan arXiv:q-alg/9607001v1 (pure braid separation only). Future content authoring must supply local proofs; no citation-only fallback.

### `ex-knot-kt-35-worked-cases`

**Kind:** example. **Owner:** `kontsevich-integral-and-universal-finite-type-invariants-examples` (KT-35).

In the unframed1T quotient, degree1 chord diagrams vanish; the Conway a2 invariant has nonzero degree2 symbol and values0 on unknot,1 on trefoil.

**Direct prerequisites:** `def-kontsevich-integral-on-parenthesized-braids`, `lem-kz-connection-flatness-and-braid-relations`, `lem-kontsevich-regularization-and-associator-coherence`, `lem-kontsevich-integral-finite-type-truncation`, `thm-kontsevich-integral-is-universal`, `lem-kontsevich-configuration-space-compactification-faces`, `lem-kontsevich-configuration-integral-convergence-needle-estimates`, `lem-kontsevich-critical-point-normalization-and-associator`, `lem-kontsevich-braid-and-knot-isotopy-invariance`, `thm-kontsevich-universal-associated-graded-proof`, `def-completed-chord-kz-and-morse-knot-data`, `def-countable-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-3/ Bar–Natan–Stoimenow arXiv:q-alg/9702009v1 §2; reader-3/ Bar–Natan arXiv:q-alg/9607001v1 (pure braid separation only). Future content authoring must supply local proofs; no citation-only fallback.

### `thm-linking-number-is-invariant-and-writhe-is-not`

**Kind:** theorem. **Owner:** `crossing-signs-writhe-and-linking-number` (KT-03).

proves linking number is an integer ambient-isotopy invariant using R1/R2/R3, while writhe changes by $\pm1$ under R1 and the blackboard framing changes by that amount.

**Direct prerequisites:** `thm-oriented-reidemeister-equivalence-theorem`, `def-elementary-geometric-half-twist`, `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `def-framed-knot-self-linking-and-seifert-framing`, `thm-blackboard-framing-self-linking-is-writhe`, `lem-linking-number-even-sum-and-reidemeister-invariance`, `alg-oriented-linking-number-from-diagram`, `def-countable-choice`.

**Proof/definition route:** use the existing oriented Reidemeister
equivalence theorem as a finite move reduction. Under R1, no intercomponent
crossing changes; R2 creates/cancels two intercomponent crossings of opposite
sign; R3 permutes three crossings without changing signs. Hence the signed
intercomponent sum is invariant and is even because the algebraic intersection
of the two components on the projection sphere vanishes. Check the framing
change by the normal push-off's local linking contribution. Calibrate the
determinant sign against the existing geometric-braid generator; a reversed
chart orientation reverses the sign. For self-linking, compute the linking
number of the diagram with its blackboard push-off as the signed crossing
sum; the Seifert push-off/intersection argument is deferred to KT-04.
The framed diagram theorem permits only framing-preserving moves or pairs an
R1 move with the compensating integer framing change. **Local prerequisite modules:** `lem-linking-number-even-sum-and-reidemeister-invariance`, `thm-blackboard-framing-self-linking-is-writhe`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-1/ Calegari 2025 §3.3; reader-1/ Elhamdadi–Hajij–Istvan Framed Knots v6 §3.1. Future content authoring must supply local proofs; no citation-only fallback.

### `alg-dihedral-fox-colorings`

**Kind:** algorithm. **Owner:** `fox-colorings-and-quandle-invariants` (KT-08).

takes a diagram and an odd prime $p$, solves the finite linear system $2x_{\rm over}=x_{\rm in}+x_{\rm out}$ in $\mathbb F_p$, and returns the full solution set and its cardinality.

**Direct prerequisites:** `thm-knot-wirtinger-presentation-correctness`, `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `thm-linking-number-is-invariant-and-writhe-is-not`, `thm-oriented-reidemeister-equivalence-theorem`, `def-quandle-and-knot-coloring`, `def-rack-fundamental-quandle-and-adjoint-group`, `def-countable-choice`.

**Proof/definition route:** the three axioms are matched respectively
to R1, R2 and R3; each move gives a bijection of coloring sets, and the inverse
map for R2 uses right invertibility. The dihedral operation $a*b=2b-a$ is a
quandle over odd characteristic, so Gaussian elimination terminates in a
finite number of row operations. No coloring count is called a complete knot
invariant.

**Source boundary:** reader-1/ Calegari 2025 §4.1; reader-2/ Birman–Brendle 2004 braid survey. Future content authoring must supply local proofs; no citation-only fallback.

### `alg-enumerate-diagrams-up-to-crossing-bound`

**Kind:** algorithm. **Owner:** `planar-diagram-codes-and-knot-table-enumeration` (KT-47).

enumerates all codes with at most $c$ crossings; it returns diagram candidates, not distinct knot types.

**Direct prerequisites:** `thm-knot-wirtinger-presentation-correctness`, `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `thm-linking-number-is-invariant-and-writhe-is-not`, `def-planar-diagram-gauss-and-dowker-codes`, `def-countable-choice`.

**Proof/definition route:** validate each crossing appears exactly
twice in the Gauss word, check the cyclic orders define a connected planar
rotation system, and use the face permutation to verify $V-E+F=2$. Reconstruct
by gluing crossing disks to edge bands and lifting over/under data to $S^3$.
Enumeration terminates because alphabet and word length are finite. It does
not decide equivalence between candidates; Reidemeister-move search is a
semidecision procedure. **Local prerequisite modules:** `lem-planar-diagram-code-realizability-and-face-validation`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-1/ Calegari 2025 §1.3; reader-4/ HLP 1999 triangulation source. Future content authoring must supply local proofs; no citation-only fallback.

### `alg-finite-rack-quandle-coloring-from-table`

**Kind:** algorithm. **Owner:** `fox-colorings-and-quandle-invariants` (KT-08).

Input a finite m×m operation table and a based oriented a-arc diagram; reject any failed rack/quandle axiom; enumerate m^a assignments and retain exactly the crossing solutions.

**Direct prerequisites:** `thm-knot-wirtinger-presentation-correctness`, `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `thm-linking-number-is-invariant-and-writhe-is-not`, `thm-oriented-reidemeister-equivalence-theorem`, `def-quandle-and-knot-coloring`, `def-rack-fundamental-quandle-and-adjoint-group`, `def-countable-choice`.

**Proof/definition route:** Exact loops over table entries, triples and assignments; invalid inputs have a specific witness.

**Source boundary:** reader-1/ Calegari 2025 §4.1; reader-2/ Birman–Brendle 2004 braid survey. Future content authoring must supply local proofs; no citation-only fallback.

### `alg-kauffman-bracket-state-sum`

**Kind:** algorithm. **Owner:** `kauffman-bracket-state-sum-and-jones-polynomial` (KT-29).

takes a finite unoriented regular diagram, enumerates its $2^c$ smoothing states, multiplies each state weight by $\delta^{\#loops-1}$, and returns a Laurent polynomial in $A$; it terminates after a finite traversal.

**Direct prerequisites:** `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `thm-linking-number-is-invariant-and-writhe-is-not`, `def-temperley-lieb-quotient-and-jones-specialization`, `def-the-homflypt-coefficient-ring`, `thm-the-homflypt-skein-relation`, `thm-the-hecke-trace-construction-is-an-oriented-link-invariant`, `def-kauffman-bracket-smoothing-and-loop-value`, `def-axiom-of-choice`.

**Proof/definition route:** draw the source crossing with the over-strand gap and local orientation fixed; in that drawing the horizontal smoothing is A with coefficient $A$ and the vertical smoothing is B with coefficient $A^{-1}$. Those labels are tied to the displayed crossing, not to an orientation-free slogan for every rotated picture. Prove R2 cancellation by multiplying the two crossing skein expansions, R3 by the three-strand Temperley–Lieb relation, and R1 by the factor $-A^{\pm3}$, then cancel writhe. For the comparison, match the unknot value and positive/negative crossing skein relations after the displayed substitution; verify the two variables and mirror rule on a single positive crossing. The loop value is $\delta=-A^2-A^{-2}$ throughout. **Local prerequisite modules:** `lem-kauffman-bracket-r2-r3-identities`, `lem-kauffman-bracket-curl-and-writhe-correction`, `lem-hecke-bracket-trace-dictionary-and-local-descent`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-3/ Kauffman 1990 §§III,VI (diagram pages visually checked); reader-3/ Kauffman 2022 v2 §2; published HOMFLYPT/Jones local supplier. Future content authoring must supply local proofs; no citation-only fallback.

### `alg-planar-code-validation-and-diagram-reconstruction`

**Kind:** algorithm. **Owner:** `planar-diagram-codes-and-knot-table-enumeration` (KT-47).

checks incidence and sign data, reconstructs the finite 4-valent plane graph and over/under structure, and returns a diagram or a specific invalid-code reason.

**Direct prerequisites:** `thm-knot-wirtinger-presentation-correctness`, `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `thm-linking-number-is-invariant-and-writhe-is-not`, `def-planar-diagram-gauss-and-dowker-codes`, `def-countable-choice`.

**Proof/definition route:** validate each crossing appears exactly
twice in the Gauss word, check the cyclic orders define a connected planar
rotation system, and use the face permutation to verify $V-E+F=2$. Reconstruct
by gluing crossing disks to edge bands and lifting over/under data to $S^3$.
Enumeration terminates because alphabet and word length are finite. It does
not decide equivalence between candidates; Reidemeister-move search is a
semidecision procedure. **Local prerequisite modules:** `lem-planar-diagram-code-realizability-and-face-validation`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-1/ Calegari 2025 §1.3; reader-4/ HLP 1999 triangulation source. Future content authoring must supply local proofs; no citation-only fallback.

### `alg-seifert-surface-from-diagram`

**Kind:** algorithm. **Owner:** `seifert-surfaces-and-knot-genus` (KT-04).

smooths every crossing coherently, caps the Seifert circles by disjoint disks at distinct heights, then attaches one oriented half-twisted band per crossing; the input is a nonempty oriented knot diagram. It returns the finite banded surface and the pair $(s,c)$ of circle and crossing counts.

**Direct prerequisites:** `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `thm-linking-number-is-invariant-and-writhe-is-not`, `def-seifert-smoothing-and-seifert-circles-of-an-oriented-link-diagram`, `lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups`, `def-oriented-seifert-surface-and-knot-genus`, `def-countable-choice`.

**Proof/definition route:** the disk heights are ordered by nesting;
the bands are attached in the crossing balls, disjoint from the disk interiors.
The orientation rule makes the boundary arcs glue to the original diagram.
Each band lowers Euler characteristic by one, each initial disk contributes
one, and a connected one-boundary-component orientable surface has
$\chi=1-2g$. Supply a separate connectivity check for knot inputs; for links,
the result can be disconnected and the knot genus formula must not be used.
`alg-` termination follows from the finite crossing set. **Local prerequisite modules:** `lem-seifert-bands-embedded-orientable-boundary-correct`, `thm-seifert-algorithm-boundary-euler-and-genus`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-1/ Calegari 2025 §3.1; reader-1/ Gardner-Livingston §4.3, visually read proof supplement. Future content authoring must supply local proofs; no citation-only fallback.

### `alg-truncated-milnor-invariants-from-based-diagram`

**Kind:** algorithm. **Owner:** `milnor-invariants-and-link-peripheral-nilpotent-quotients` (KT-53).

takes a finite labeled diagram, explicit basing and maximal length d; computes nilpotent longitude words by the inductive Wirtinger substitutions to degree d, expands in the truncated ring, and returns the integer coefficients or closed-link residues together with all lower indeterminacy data.

**Direct prerequisites:** `thm-knot-wirtinger-presentation-correctness`, `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `thm-linking-number-is-invariant-and-writhe-is-not`, `def-maximal-abelian-cover-alexander-module`, `thm-abelian-cover-chain-model-computes-alexander-module`, `def-based-string-link-and-labeled-link-peripheral-system`, `def-lower-central-series-and-magnus-expansion-for-links`, `def-milnor-integer-and-residue-invariants`, `def-axiom-of-choice`.

**Proof/definition route:** KT-01 supplies local Wirtinger relations, KT-02 the knot peripheral model which is extended explicitly componentwise here, and KT-03 linking number. A Magnus commutator degree lemma proves E(Γ_qF)⊂1+(X)^q and independence to the stated degree. A basing-change lemma tracks conjugations and longitude meridian corrections; its coefficient recursion produces exactly Δ_I. A self-crossing-change lemma proves nonrepeating-index invariance and explicitly excludes arbitrary repeated-index link-homotopy invariance. These are substantial new local obligations with no claimed full-source coverage in the six dossiers; recover Milnor's primary theorem/complete treatment before future acceptance. The plan preserves the established theorem contracts without treating bibliographic names as proved suppliers.

**Source boundary:** Explicit local derivation; complete classical source recovery required for the stated deep theorem.. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-kauffman-bracket-r2-r3-identities`

**Kind:** lemma. **Owner:** `kauffman-bracket-state-sum-and-jones-polynomial` (KT-29).

With δ=−A²−A^−2, the framed bracket expansion is invariant under R2/R3 with the declared A/B chart.

**Direct prerequisites:** `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `thm-linking-number-is-invariant-and-writhe-is-not`, `def-temperley-lieb-quotient-and-jones-specialization`, `def-the-homflypt-coefficient-ring`, `thm-the-homflypt-skein-relation`, `thm-the-hecke-trace-construction-is-an-oriented-link-invariant`, `def-kauffman-bracket-smoothing-and-loop-value`, `def-axiom-of-choice`.

**Proof/definition route:** In the local two-strand algebra expand (A1+A^−1e)(A^−1 1+Ae) and use e²=δe; expand both three-strand words and use e_i e_(i+1)e_i=e_i. Check all local outside connections by tensoring, not a sketch alone.

**Source boundary:** reader-3/ Kauffman 1990 §§III,VI (diagram pages visually checked); reader-3/ Kauffman 2022 v2 §2; published HOMFLYPT/Jones local supplier. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-kauffman-bracket-curl-and-writhe-correction`

**Kind:** lemma. **Owner:** `kauffman-bracket-state-sum-and-jones-polynomial` (KT-29).

Positive/negative curls multiply bracket by −A³/−A^−3; multiplying by (−A³)^−w removes R1, preserving the R2/R3 invariant.

**Direct prerequisites:** `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `thm-linking-number-is-invariant-and-writhe-is-not`, `def-temperley-lieb-quotient-and-jones-specialization`, `def-the-homflypt-coefficient-ring`, `thm-the-homflypt-skein-relation`, `thm-the-hecke-trace-construction-is-an-oriented-link-invariant`, `def-kauffman-bracket-smoothing-and-loop-value`, `lem-kauffman-bracket-r2-r3-identities`, `def-axiom-of-choice`.

**Proof/definition route:** Resolve the single curl into straight and circle states, calculate the factors, and use w→w±1. Exclude the empty diagram from the nonempty bracket convention or define its value separately.

**Source boundary:** reader-3/ Kauffman 1990 §§III,VI (diagram pages visually checked); reader-3/ Kauffman 2022 v2 §2; published HOMFLYPT/Jones local supplier. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-hecke-bracket-trace-dictionary-and-local-descent`

**Kind:** lemma. **Owner:** `kauffman-bracket-state-sum-and-jones-polynomial` (KT-29).

Under the explicit q,A,t dictionary, bracket closure trace equals the specialized Hecke/Ocneanu trace, including unknot and both stabilization normalizations.

**Direct prerequisites:** `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `thm-linking-number-is-invariant-and-writhe-is-not`, `def-temperley-lieb-quotient-and-jones-specialization`, `def-the-homflypt-coefficient-ring`, `thm-the-homflypt-skein-relation`, `thm-the-hecke-trace-construction-is-an-oriented-link-invariant`, `def-kauffman-bracket-smoothing-and-loop-value`, `lem-kauffman-bracket-curl-and-writhe-correction`, `def-axiom-of-choice`.

**Proof/definition route:** Reuse the published HOMFLYPT trace, prove TL descent by matching quadratic/braid and closure partial-trace rules and trace uniqueness, then identify bracket evaluation. Existing draft descent has its own source/repair obligation; do not duplicate its eventual carrier.

**Source boundary:** reader-3/ Kauffman 1990 §§III,VI (diagram pages visually checked); reader-3/ Kauffman 2022 v2 §2; published HOMFLYPT/Jones local supplier. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-knot-surgery-first-homology-mayer-vietoris`

**Kind:** lemma. **Owner:** `dehn-surgery-on-knots-and-homology` (KT-13).

Filling pμ+qλ in a knot exterior gives H1=Z/p for p≠0 and Z for p=0.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `thm-linking-number-is-invariant-and-writhe-is-not`, `def-countable-choice`.

**Proof/definition route:** Write the two boundary generators in the Mayer–Vietoris presentation, eliminate the solid-torus longitude and use [λ]=0 and [μ] a generator. Include primitive slope and orientation conventions.

**Source boundary:** reader-4/ Hatcher Basic 3-Manifold Notes; reader-1/ Framed Knots §§5–7. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-magnus-commutator-degree-and-truncation`

**Kind:** lemma. **Owner:** `milnor-invariants-and-link-peripheral-nilpotent-quotients` (KT-53).

The Magnus homomorphism E:F_r→Z⟪X⟫× maps Γ_qF into1+(X)^q; words equal moduloΓ_q have identical coefficients below degreeq.

**Direct prerequisites:** `thm-knot-wirtinger-presentation-correctness`, `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `thm-linking-number-is-invariant-and-writhe-is-not`, `def-maximal-abelian-cover-alexander-module`, `thm-abelian-cover-chain-model-computes-alexander-module`, `def-based-string-link-and-labeled-link-peripheral-system`, `def-lower-central-series-and-magnus-expansion-for-links`, `def-milnor-integer-and-residue-invariants`, `def-axiom-of-choice`.

**Proof/definition route:** Expand [1+u,1+v]=1+uv−vu+terms of higher total degree and induct on commutator weight; prove inverse/geometric-series truncations terminate in each finite degree.

**Source boundary:** Explicit local derivation; complete classical source recovery required for the stated deep theorem.. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-planar-diagram-code-realizability-and-face-validation`

**Kind:** lemma. **Owner:** `planar-diagram-codes-and-knot-table-enumeration` (KT-47).

A finite oriented rotation-system code with paired half-edges, valid overpass flags and spherical connected embedding reconstructs its decorated diagram up to the stated oriented-sphere equivalence.

**Direct prerequisites:** `thm-knot-wirtinger-presentation-correctness`, `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `thm-linking-number-is-invariant-and-writhe-is-not`, `def-planar-diagram-gauss-and-dowker-codes`, `def-countable-choice`.

**Proof/definition route:** Form edge/vertex/face permutations, check genus zero and orientation incidences, construct crossing disks and edge bands, and choose an outer face for planar equivalence. Spherical isotopy without outer-face data is not automatically plane isotopy.

**Source boundary:** reader-1/ Calegari 2025 §1.3; reader-4/ HLP 1999 triangulation source. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-seifert-bands-embedded-orientable-boundary-correct`

**Kind:** lemma. **Owner:** `seifert-surfaces-and-knot-genus` (KT-04).

The finite disk-band construction on an oriented knot diagram is embedded, orientable and connected, with boundary the original knot.

**Direct prerequisites:** `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `thm-linking-number-is-invariant-and-writhe-is-not`, `def-seifert-smoothing-and-seifert-circles-of-an-oriented-link-diagram`, `lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups`, `def-oriented-seifert-surface-and-knot-genus`, `def-countable-choice`.

**Proof/definition route:** Order nested disks by height, use disjoint crossing balls and narrow collars, and attach signed orientation-compatible bands. The disk-band incidence graph has one boundary knot, hence no separate component; verify each band restores the precise overpass.

**Source boundary:** reader-1/ Calegari 2025 §3.1; reader-1/ Gardner-Livingston §4.3, visually read proof supplement. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-vassiliev-4t-from-singular-reidemeister-move`

**Kind:** lemma. **Owner:** `vassiliev-invariants-and-chord-diagrams` (KT-34).

The top derivative of an order-n invariant depends only on the n-chord diagram and annihilates the explicit 4T combination.

**Direct prerequisites:** `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `thm-linking-number-is-invariant-and-writhe-is-not`, `def-singular-knot-and-vassiliev-derivative`, `def-framed-chord-diagram-and-four-term-relations`, `def-countable-choice`.

**Proof/definition route:** Compare immersed resolutions by crossing changes away from singular balls, which add an (n+1)st derivative and vanish; compute the signed local three-strand four-term event. Define chord-circle orientation and framed status first.

**Source boundary:** reader-3/ Bar–Natan–Stoimenow arXiv:q-alg/9702009v1 §1. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-vassiliev-framing-one-term-relation`

**Kind:** lemma. **Owner:** `vassiliev-invariants-and-chord-diagrams` (KT-34).

For unframed invariants the isolated-chord/1T diagram evaluates to zero; for framed invariants the framing derivative can survive.

**Direct prerequisites:** `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `thm-linking-number-is-invariant-and-writhe-is-not`, `def-singular-knot-and-vassiliev-derivative`, `def-framed-chord-diagram-and-four-term-relations`, `def-countable-choice`.

**Proof/definition route:** Resolve the isolated kink singularity into the two unframed-isotopic diagrams, then compare with the change in framing integer. Do not call ordinary writhe an unframed invariant.

**Source boundary:** reader-3/ Bar–Natan–Stoimenow arXiv:q-alg/9702009v1 §1. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-bracket-state-sum-matches-library-jones-specialization`

**Kind:** theorem. **Owner:** `kauffman-bracket-state-sum-and-jones-polynomial` (KT-29).

proves the exact substitution $V_K(t)=f_K(t^{-1/4})$ in the current Hecke-trace convention; it is a comparison of two constructions, not a duplicate definition of the Jones invariant.

**Direct prerequisites:** `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `thm-linking-number-is-invariant-and-writhe-is-not`, `def-temperley-lieb-quotient-and-jones-specialization`, `def-the-homflypt-coefficient-ring`, `thm-the-homflypt-skein-relation`, `thm-the-hecke-trace-construction-is-an-oriented-link-invariant`, `def-kauffman-bracket-smoothing-and-loop-value`, `lem-kauffman-bracket-r2-r3-identities`, `lem-kauffman-bracket-curl-and-writhe-correction`, `lem-hecke-bracket-trace-dictionary-and-local-descent`, `alg-kauffman-bracket-state-sum`, `def-axiom-of-choice`.

**Proof/definition route:** draw the source crossing with the over-strand gap and local orientation fixed; in that drawing the horizontal smoothing is A with coefficient $A$ and the vertical smoothing is B with coefficient $A^{-1}$. Those labels are tied to the displayed crossing, not to an orientation-free slogan for every rotated picture. Prove R2 cancellation by multiplying the two crossing skein expansions, R3 by the three-strand Temperley–Lieb relation, and R1 by the factor $-A^{\pm3}$, then cancel writhe. For the comparison, match the unknot value and positive/negative crossing skein relations after the displayed substitution; verify the two variables and mirror rule on a single positive crossing. The loop value is $\delta=-A^2-A^{-2}$ throughout. **Local prerequisite modules:** `lem-kauffman-bracket-r2-r3-identities`, `lem-kauffman-bracket-curl-and-writhe-correction`, `lem-hecke-bracket-trace-dictionary-and-local-descent`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-3/ Kauffman 1990 §§III,VI (diagram pages visually checked); reader-3/ Kauffman 2022 v2 §2; published HOMFLYPT/Jones local supplier. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-dihedral-fox-colorings-procedure-properties`

**Kind:** theorem. **Owner:** `fox-colorings-and-quandle-invariants` (KT-08).

For exactly the admissible encoded inputs of alg-dihedral-fox-colorings, execution terminates, rejects precisely the stated syntactic failures and returns the prescribed finite output. Any identification with a topological invariant, recognition completeness, or asymptotic complexity is only the separately proved domain result, not inferred from finite execution.

**Direct prerequisites:** `alg-dihedral-fox-colorings`, `thm-knot-wirtinger-presentation-correctness`, `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `thm-linking-number-is-invariant-and-writhe-is-not`, `thm-oriented-reidemeister-equivalence-theorem`, `def-quandle-and-knot-coloring`, `def-rack-fundamental-quandle-and-adjoint-group`, `def-countable-choice`.

**Proof/definition route:** Use the explicit finite loop/state/word or bounded search measure in the procedure; prove each branch preserves the stated output representation and all arithmetic is effective. Cite the domain correctness and completeness modules separately when claiming invariant/recognition meaning.

**Source boundary:** reader-1/ Calegari 2025 §4.1; reader-2/ Birman–Brendle 2004 braid survey. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-enumerate-diagrams-up-to-crossing-bound-procedure-properties`

**Kind:** theorem. **Owner:** `planar-diagram-codes-and-knot-table-enumeration` (KT-47).

For exactly the admissible encoded inputs of alg-enumerate-diagrams-up-to-crossing-bound, execution terminates, rejects precisely the stated syntactic failures and returns the prescribed finite output. Any identification with a topological invariant, recognition completeness, or asymptotic complexity is only the separately proved domain result, not inferred from finite execution.

**Direct prerequisites:** `alg-enumerate-diagrams-up-to-crossing-bound`, `thm-knot-wirtinger-presentation-correctness`, `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `thm-linking-number-is-invariant-and-writhe-is-not`, `def-planar-diagram-gauss-and-dowker-codes`, `def-countable-choice`.

**Proof/definition route:** Use the explicit finite loop/state/word or bounded search measure in the procedure; prove each branch preserves the stated output representation and all arithmetic is effective. Cite the domain correctness and completeness modules separately when claiming invariant/recognition meaning.

**Source boundary:** reader-1/ Calegari 2025 §1.3; reader-4/ HLP 1999 triangulation source. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-finite-rack-quandle-coloring-from-table-procedure-properties`

**Kind:** theorem. **Owner:** `fox-colorings-and-quandle-invariants` (KT-08).

For exactly the admissible encoded inputs of alg-finite-rack-quandle-coloring-from-table, execution terminates, rejects precisely the stated syntactic failures and returns the prescribed finite output. Any identification with a topological invariant, recognition completeness, or asymptotic complexity is only the separately proved domain result, not inferred from finite execution.

**Direct prerequisites:** `alg-finite-rack-quandle-coloring-from-table`, `thm-knot-wirtinger-presentation-correctness`, `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `thm-linking-number-is-invariant-and-writhe-is-not`, `thm-oriented-reidemeister-equivalence-theorem`, `def-quandle-and-knot-coloring`, `def-rack-fundamental-quandle-and-adjoint-group`, `def-countable-choice`.

**Proof/definition route:** Use the explicit finite loop/state/word or bounded search measure in the procedure; prove each branch preserves the stated output representation and all arithmetic is effective. Cite the domain correctness and completeness modules separately when claiming invariant/recognition meaning.

**Source boundary:** reader-1/ Calegari 2025 §4.1; reader-2/ Birman–Brendle 2004 braid survey. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-finite-table-coloring-termination-and-correctness`

**Kind:** theorem. **Owner:** `fox-colorings-and-quandle-invariants` (KT-08).

The table algorithm terminates; its axiom checks take O(m³) table operations and assignment test takes O(c m^a); accepted assignments are precisely colorings.

**Direct prerequisites:** `thm-knot-wirtinger-presentation-correctness`, `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `thm-linking-number-is-invariant-and-writhe-is-not`, `thm-oriented-reidemeister-equivalence-theorem`, `def-quandle-and-knot-coloring`, `def-rack-fundamental-quandle-and-adjoint-group`, `alg-finite-rack-quandle-coloring-from-table`, `def-countable-choice`.

**Proof/definition route:** Count loops and use the exact crossing equation.

**Source boundary:** reader-1/ Calegari 2025 §4.1; reader-2/ Birman–Brendle 2004 braid survey. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-framed-knot-surgery-trace-boundary`

**Kind:** theorem. **Owner:** `dehn-surgery-on-knots-and-homology` (KT-13).

An integer-framed 2-handle attached to B4 along K has outgoing boundary the corresponding integer filling; rational fillings require an integral chain construction.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `thm-linking-number-is-invariant-and-writhe-is-not`, `def-countable-choice`.

**Proof/definition route:** Match ∂(D2×D2) attaching/belt regions with the exterior and solid torus, calculate the meridian slope from the normal push-off, and verify orientation. Derive continued-fraction replacements by repeated slope matrix multiplication.

**Source boundary:** reader-4/ Hatcher Basic 3-Manifold Notes; reader-1/ Framed Knots §§5–7. Future content authoring must supply local proofs; no citation-only fallback.

### `cex-knot-kt-13-boundary-case`

**Kind:** counterexample. **Owner:** `dehn-surgery-on-knots-and-homology-examples` (KT-13).

p|. | A homology sphere is not characterized by H1=0: a nonmeridional ±1 trefoil surgery has zero H1 but nontrivial π1 by the stated filling obstruction (choose orientation convention before naming it).

**Direct prerequisites:** `lem-knot-surgery-first-homology-mayer-vietoris`, `thm-framed-knot-surgery-trace-boundary`, `def-countable-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-4/ Hatcher Basic 3-Manifold Notes; reader-1/ Framed Knots §§5–7. Future content authoring must supply local proofs; no citation-only fallback.

### `ex-knot-kt-13-worked-cases`

**Kind:** example. **Owner:** `dehn-surgery-on-knots-and-homology-examples` (KT-13).

Unknot 0-surgery is S1×S2, 1-surgery is S3 and p/q surgery is the conventionally oriented lens space L(p,q); first homology has order

**Direct prerequisites:** `lem-knot-surgery-first-homology-mayer-vietoris`, `thm-framed-knot-surgery-trace-boundary`, `def-countable-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-4/ Hatcher Basic 3-Manifold Notes; reader-1/ Framed Knots §§5–7. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-kauffman-bracket-state-sum-procedure-properties`

**Kind:** theorem. **Owner:** `kauffman-bracket-state-sum-and-jones-polynomial` (KT-29).

For exactly the admissible encoded inputs of alg-kauffman-bracket-state-sum, execution terminates, rejects precisely the stated syntactic failures and returns the prescribed finite output. Any identification with a topological invariant, recognition completeness, or asymptotic complexity is only the separately proved domain result, not inferred from finite execution.

**Direct prerequisites:** `alg-kauffman-bracket-state-sum`, `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `thm-linking-number-is-invariant-and-writhe-is-not`, `def-temperley-lieb-quotient-and-jones-specialization`, `def-the-homflypt-coefficient-ring`, `thm-the-homflypt-skein-relation`, `thm-the-hecke-trace-construction-is-an-oriented-link-invariant`, `def-kauffman-bracket-smoothing-and-loop-value`, `def-axiom-of-choice`.

**Proof/definition route:** Use the explicit finite loop/state/word or bounded search measure in the procedure; prove each branch preserves the stated output representation and all arithmetic is effective. Cite the domain correctness and completeness modules separately when claiming invariant/recognition meaning.

**Source boundary:** reader-3/ Kauffman 1990 §§III,VI (diagram pages visually checked); reader-3/ Kauffman 2022 v2 §2; published HOMFLYPT/Jones local supplier. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-kirby-moves-classify-framed-link-presentations`

**Kind:** theorem. **Owner:** `three-manifold-surgery-presentations-and-kirby-moves` (KT-14).

Boundary-oriented diffeomorphic integral surgery diagrams are related by isotopy, handle slides and disjoint ±1 blow-ups/down.

**Direct prerequisites:** `def-oriented-slope-and-knot-dehn-filling`, `thm-framed-knot-surgery-trace-boundary`, `def-integral-framed-link-surgery-diagram`, `def-countable-choice`.

**Proof/definition route:** Prove move soundness by handle diffeomorphisms and use relative Cerf decomposition of the diffeomorphism trace for completeness, tracking framings and the cancellation of auxiliary 1-handles. Complete Kirby/Cerf source recovery is required.

**Source boundary:** reader-4/ Hatcher notes and selected Thurston chapters. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-root-jones-wenzl-recursion-and-negligible-ideal`

**Kind:** lemma. **Owner:** `root-of-unity-skein-tqft-for-three-manifolds` (KT-32).

At the fixed admissible root parameter, Jones–Wenzl projectors exist through the last allowed label and the next zero-quantum-dimension projector generates the negligible ideal.

**Direct prerequisites:** `thm-kirby-moves-classify-framed-link-presentations`, `def-kauffman-bracket-skein-module-of-a-three-manifold`, `def-sl-two-root-of-unity-skein-parameter`, `def-semisimplified-temperley-lieb-fusion-category`, `def-skein-tqft-state-space-and-handlebody-pairing`, `def-extended-skein-cobordism-anomaly-data`, `def-axiom-of-choice`.

**Proof/definition route:** Write the exact quantum-integer recursion, prove idempotence/turnback annihilation and trace by induction, and state the allowed root/order/parity before evaluating denominators. Never divide by the first zero quantum integer.

**Source boundary:** reader-3/ Chen arXiv:1502.06845v1 §§2.1,5.1; reader-3/ Pohorence Jan.2016; BHMW/Morita proofs cited/sketched. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-root-fusion-rules-and-simple-object-completeness`

**Kind:** lemma. **Owner:** `root-of-unity-skein-tqft-for-three-manifolds` (KT-32).

The chosen semisimplified TL category has the explicit finite label set and truncated sl2 fusion multiplicities, with duals and compatible ribbon structure.

**Direct prerequisites:** `thm-kirby-moves-classify-framed-link-presentations`, `def-kauffman-bracket-skein-module-of-a-three-manifold`, `def-sl-two-root-of-unity-skein-parameter`, `def-semisimplified-temperley-lieb-fusion-category`, `def-skein-tqft-state-space-and-handlebody-pairing`, `def-extended-skein-cobordism-anomaly-data`, `lem-root-jones-wenzl-recursion-and-negligible-ideal`, `def-axiom-of-choice`.

**Proof/definition route:** Decompose tensoring with the fundamental label using projectors, prove all simple objects arise, and verify recoupling/pentagon identities and nonzero dimensions. Root conventions must be fixed numerically before using a label count.

**Source boundary:** reader-3/ Chen arXiv:1502.06845v1 §§2.1,5.1; reader-3/ Pohorence Jan.2016; BHMW/Morita proofs cited/sketched. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-root-handlebody-spine-state-space-finite-generation`

**Kind:** lemma. **Owner:** `root-of-unity-skein-tqft-for-three-manifolds` (KT-32).

Allowed labelings of a trivalent handlebody spine span the radical-quotiented skein state space and form a finite set.

**Direct prerequisites:** `thm-kirby-moves-classify-framed-link-presentations`, `def-kauffman-bracket-skein-module-of-a-three-manifold`, `def-sl-two-root-of-unity-skein-parameter`, `def-semisimplified-temperley-lieb-fusion-category`, `def-skein-tqft-state-space-and-handlebody-pairing`, `def-extended-skein-cobordism-anomaly-data`, `lem-root-fusion-rules-and-simple-object-completeness`, `def-axiom-of-choice`.

**Proof/definition route:** Cut along meridian disks, insert the projector resolution of identity, reduce each vertex by fusion, and prove spine-change recoupling. Finite spine combinatorics gives finiteness, not yet independence.

**Source boundary:** reader-3/ Chen arXiv:1502.06845v1 §§2.1,5.1; reader-3/ Pohorence Jan.2016; BHMW/Morita proofs cited/sketched. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-root-handlebody-pairing-nondegeneracy-and-gluing`

**Kind:** lemma. **Owner:** `root-of-unity-skein-tqft-for-three-manifolds` (KT-32).

The normalized double-handlebody pairing on allowed spine states is nondegenerate and its inverse gives the declared sewing/gluing maps.

**Direct prerequisites:** `thm-kirby-moves-classify-framed-link-presentations`, `def-kauffman-bracket-skein-module-of-a-three-manifold`, `def-sl-two-root-of-unity-skein-parameter`, `def-semisimplified-temperley-lieb-fusion-category`, `def-skein-tqft-state-space-and-handlebody-pairing`, `def-extended-skein-cobordism-anomaly-data`, `lem-root-handlebody-spine-state-space-finite-generation`, `def-axiom-of-choice`.

**Proof/definition route:** Compute theta/tetrahedral evaluations, prove orthogonality and invertibility, then verify independence under spine changes and mapping classes. Specify marked/weighted or Lagrangian surface data to account for anomaly.

**Source boundary:** reader-3/ Chen arXiv:1502.06845v1 §§2.1,5.1; reader-3/ Pohorence Jan.2016; BHMW/Morita proofs cited/sketched. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-root-skein-surgery-kirby-color-invariance`

**Kind:** lemma. **Owner:** `root-of-unity-skein-tqft-for-three-manifolds` (KT-32).

The sum over allowed colors weighted by quantum dimensions is handle-slide invariant, and the explicit Gauss-sum normalization cancels ±1 blow-ups.

**Direct prerequisites:** `thm-kirby-moves-classify-framed-link-presentations`, `def-kauffman-bracket-skein-module-of-a-three-manifold`, `def-sl-two-root-of-unity-skein-parameter`, `def-semisimplified-temperley-lieb-fusion-category`, `def-skein-tqft-state-space-and-handlebody-pairing`, `def-extended-skein-cobordism-anomaly-data`, `lem-root-handlebody-pairing-nondegeneracy-and-gluing`, `def-axiom-of-choice`.

**Proof/definition route:** Prove the encircling/handle-slide identity from fusion, calculate the two framed-unknot Gauss sums and signature anomaly, and apply Kirby equivalence. This is the required surgery theorem, not supplied by surface TV state spaces alone.

**Source boundary:** reader-3/ Chen arXiv:1502.06845v1 §§2.1,5.1; reader-3/ Pohorence Jan.2016; BHMW/Morita proofs cited/sketched. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-jones-wenzl-idempotents-exist-below-root-order`

**Kind:** lemma. **Owner:** `root-of-unity-skein-tqft-for-three-manifolds` (KT-32).

constructs the idempotents through the last nonvanishing quantum integer and proves the next denominator vanishes; no division by that zero quantum integer is allowed.

**Direct prerequisites:** `thm-kirby-moves-classify-framed-link-presentations`, `def-kauffman-bracket-skein-module-of-a-three-manifold`, `def-sl-two-root-of-unity-skein-parameter`, `def-semisimplified-temperley-lieb-fusion-category`, `def-skein-tqft-state-space-and-handlebody-pairing`, `def-extended-skein-cobordism-anomaly-data`, `lem-root-jones-wenzl-recursion-and-negligible-ideal`, `lem-root-fusion-rules-and-simple-object-completeness`, `lem-root-handlebody-spine-state-space-finite-generation`, `lem-root-handlebody-pairing-nondegeneracy-and-gluing`, `lem-root-skein-surgery-kirby-color-invariance`, `def-axiom-of-choice`.

**Proof/definition route:** prove the Jones–Wenzl recursion and
partial-trace identities for every denominator actually used; establish a
finite trivalent-spine spanning set for the handlebody skein module; compute
the radical and nondegenerate quotient using the fusion rules; prove the
handlebody pairing is compatible with gluing and mapping-class actions; then
prove surgery invariance under Kirby moves with the exact root-of-unity
normalization. Split the proof into local modules for module generation,
pairing nondegeneracy, Morita/handlebody gluing and surgery normalization.
Pohorence's 16-page notes define the bridge but cite the hard Blanchet–Habegger–
Masbaum–Vogel module-generation/Morita results; the citation does not close
these modules. Chen's thesis constructs Turaev–Viro state modules of marked
surfaces from a finite fusion category; it is a different construction and
does not prove this 3-manifold Kauffman-bracket skein TQFT. **Local prerequisite modules:** `lem-root-jones-wenzl-recursion-and-negligible-ideal`, `lem-root-fusion-rules-and-simple-object-completeness`, `lem-root-handlebody-spine-state-space-finite-generation`, `lem-root-handlebody-pairing-nondegeneracy-and-gluing`, `lem-root-skein-surgery-kirby-color-invariance`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-3/ Chen arXiv:1502.06845v1 §§2.1,5.1; reader-3/ Pohorence Jan.2016; BHMW/Morita proofs cited/sketched. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-lickorish-wallace-framed-link-presentation`

**Kind:** theorem. **Owner:** `three-manifold-surgery-presentations-and-kirby-moves` (KT-14).

Every closed connected oriented smooth 3-manifold has an integral framed-link surgery presentation.

**Direct prerequisites:** `def-oriented-slope-and-knot-dehn-filling`, `thm-framed-knot-surgery-trace-boundary`, `def-integral-framed-link-surgery-diagram`, `def-countable-choice`.

**Proof/definition route:** Construct a Heegaard splitting from handles, prove the mapping class has a finite Dehn-twist factorization, realize twists by surgery, and replace/cancel 1-handles with explicit meridional components. Mapping-class generation and handle cancellation are owned proof obligations.

**Source boundary:** reader-4/ Hatcher notes and selected Thurston chapters. Future content authoring must supply local proofs; no citation-only fallback.

### `cex-knot-kt-14-boundary-case`

**Kind:** counterexample. **Owner:** `three-manifold-surgery-presentations-and-kirby-moves-examples` (KT-14).

Empty diagram and a disjoint +1-framed unknot describe S3 yet are not diagrams with the same component count; Kirby stabilization is required beyond diagram isotopy.

**Direct prerequisites:** `def-integral-framed-link-surgery-diagram`, `thm-lickorish-wallace-framed-link-presentation`, `thm-kirby-moves-classify-framed-link-presentations`, `def-countable-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-4/ Hatcher notes and selected Thurston chapters. Future content authoring must supply local proofs; no citation-only fallback.

### `ex-knot-kt-14-worked-cases`

**Kind:** example. **Owner:** `three-manifold-surgery-presentations-and-kirby-moves-examples` (KT-14).

The empty surgery diagram gives S3; a zero-framed unknot gives S1×S2; a p-framed unknot gives the declared L(p,1).

**Direct prerequisites:** `def-integral-framed-link-surgery-diagram`, `thm-lickorish-wallace-framed-link-presentation`, `thm-kirby-moves-classify-framed-link-presentations`, `def-countable-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-4/ Hatcher notes and selected Thurston chapters. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-normalized-bracket-is-an-oriented-link-invariant`

**Kind:** theorem. **Owner:** `kauffman-bracket-state-sum-and-jones-polynomial` (KT-29).

defines $f_K(A)=(-A^3)^{-w(K)}\langle K\rangle$ and proves Reidemeister invariance.

**Direct prerequisites:** `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `thm-linking-number-is-invariant-and-writhe-is-not`, `def-temperley-lieb-quotient-and-jones-specialization`, `def-the-homflypt-coefficient-ring`, `thm-the-homflypt-skein-relation`, `thm-the-hecke-trace-construction-is-an-oriented-link-invariant`, `def-kauffman-bracket-smoothing-and-loop-value`, `lem-kauffman-bracket-r2-r3-identities`, `lem-kauffman-bracket-curl-and-writhe-correction`, `lem-hecke-bracket-trace-dictionary-and-local-descent`, `alg-kauffman-bracket-state-sum`, `def-axiom-of-choice`.

**Proof/definition route:** draw the source crossing with the over-strand gap and local orientation fixed; in that drawing the horizontal smoothing is A with coefficient $A$ and the vertical smoothing is B with coefficient $A^{-1}$. Those labels are tied to the displayed crossing, not to an orientation-free slogan for every rotated picture. Prove R2 cancellation by multiplying the two crossing skein expansions, R3 by the three-strand Temperley–Lieb relation, and R1 by the factor $-A^{\pm3}$, then cancel writhe. For the comparison, match the unknot value and positive/negative crossing skein relations after the displayed substitution; verify the two variables and mirror rule on a single positive crossing. The loop value is $\delta=-A^2-A^{-2}$ throughout. **Local prerequisite modules:** `lem-kauffman-bracket-r2-r3-identities`, `lem-kauffman-bracket-curl-and-writhe-correction`, `lem-hecke-bracket-trace-dictionary-and-local-descent`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-3/ Kauffman 1990 §§III,VI (diagram pages visually checked); reader-3/ Kauffman 2022 v2 §2; published HOMFLYPT/Jones local supplier. Future content authoring must supply local proofs; no citation-only fallback.

### `alg-kauffman-polynomial-from-bmw-braid-closure`

**Kind:** algorithm. **Owner:** `kauffman-and-dubrovnik-polynomials-from-bmw-algebras` (KT-30).

takes a finite signed braid word, computes its BMW image and trace, applies the specified component/writhe correction and returns the polynomial; it terminates by a finite matrix/algebra calculation over the declared Laurent ring.

**Direct prerequisites:** `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `thm-linking-number-is-invariant-and-writhe-is-not`, `def-kauffman-bracket-smoothing-and-loop-value`, `thm-normalized-bracket-is-an-oriented-link-invariant`, `def-kauffman-regular-isotopy-and-dubrovnik-conventions`, `def-bmw-algebra-with-dubrovnik-relations`, `def-axiom-of-choice`.

**Proof/definition route:** keep regular-isotopy $L$, oriented ambient-isotopy $F$, and Dubrovnik $D$ as separate contracts. The convention audit uses Kauffman, *An Invariant of Regular Isotopy*, 1990, Definition 2.4 (PDF p. 7/printed p. 422) for $F=a^{-w}L$ and §VII (printed pp. 466–469) for the $D$ conversion, with the corrected factor $-i^{-w}(-1)^c$. The source proves $L$ by induction but omits proof of the conversion; it does not provide a complete BMW basis theorem. Existing BMW items on the Temperley–Lieb/Hecke pages are drafts and cannot discharge these modules. Reconstruct each tangle reduction, pairing determinant and trace stabilization from the stated relations, then check the unknot, positive and negative curl, Hopf link and mirror substitutions. Do not infer unframed Markov invariance from framed regular-isotopy invariance. **Local prerequisite modules:** `lem-bmw-relations-dubrovnik-parameter-dictionary`, `lem-bmw-descending-tangle-spanning`, `lem-bmw-closure-pairing-independence`, `lem-bmw-markov-trace-stabilization`, `lem-kauffman-dubrovnik-writhe-component-conversion`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-3/ Kauffman 1990 Definition 2.4, PDF p.7/printed p.422 and §VII pp.466–469 (corrected sign); reader-3/ BMW drafts reviewed but excluded as suppliers. Future content authoring must supply local proofs; no citation-only fallback.

### `alg-khovanov-chain-complex-from-diagram`

**Kind:** algorithm. **Owner:** `khovanov-homology-and-jones-categorification` (KT-37).

builds the finite cube complex with the signed edge maps induced by multiplication/comultiplication.

**Direct prerequisites:** `def-kauffman-bracket-smoothing-and-loop-value`, `thm-normalized-bracket-is-an-oriented-link-invariant`, `def-chain-complex-in-an-abelian-category`, `thm-chain-homotopic-maps-induce-the-same-map-on-homology`, `def-khovanov-frobenius-algebra-and-cube-of-resolutions`, `def-reduced-khovanov-cohomology-of-a-knot`, `def-axiom-of-choice`.

**Proof/definition route:** define the cube sign from an ordering of
crossings and prove the edge squares commute before inserting signs. For R1,
decompose the added-crossing complex into a contractible summand plus the
declared grading shift; for R2 use the two-crossing cancellation; for R3
construct the explicit chain homotopy using Frobenius associativity and
coassociativity. Verify the Euler characteristic resolution-by-resolution
against KT-29's Jones convention. Khovanov 1999 v2 proves invariance of
isomorphism classes but later cobordism coherence is handled in KT-40.
**Local prerequisite modules:** `lem-khovanov-reidemeister-chain-homotopies`, `lem-khovanov-graded-euler-characteristic-jones-normalization`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-6/ Khovanov arXiv:math/9908171v2. Future content authoring must supply local proofs; no citation-only fallback.

### `alg-ribbon-evaluation-from-colored-braid-word`

**Kind:** algorithm. **Owner:** `ribbon-categories-and-reshetikhin-turaev-knot-invariants` (KT-33).

Input a signed colored braid word preserving colors on closure components and explicit finite matrices for braidings/inverses, duality and twist over an effective coefficient field. Verify the finitely supplied matrix identities or require an already proved category realization. Multiply in the stated stacking order and close by evaluation/coevaluation to obtainEnd(1), a field scalar only ifEnd(1)=k. Reject color/typing inconsistencies. Abstract arbitrary categories are theorem data, not effective algorithm inputs.

**Direct prerequisites:** `def-kauffman-bracket-smoothing-and-loop-value`, `thm-normalized-bracket-is-an-oriented-link-invariant`, `def-kauffman-regular-isotopy-and-dubrovnik-conventions`, `thm-a-ribbon-object-defines-a-unique-framed-tangle-evaluation-functor`, `thm-ribbon-evaluation-is-an-invariant-of-framed-colored-links`, `thm-writhe-normalized-ribbon-trace-is-an-unframed-link-invariant`, `def-colored-framed-knot-evaluation-from-ribbon-category`, `def-axiom-of-choice`.

**Proof/definition route:** reuse the published
`thm-ribbon-evaluation-is-an-invariant-of-framed-colored-links` and
`thm-writhe-normalized-ribbon-trace-is-an-unframed-link-invariant` only after
checking their actual color and twist hypotheses. The new bridge is a finite
word-level calculation: verify the braid generator maps satisfy Yang–Baxter,
the trace is cyclic, and the two stabilization eigenvalues are cancelled by
the declared twist. The published draft modular-category and BMW items are
not suppliers. **Local prerequisite modules:** `lem-quantum-sl2-ribbon-trace-matches-hecke-and-bracket`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-3/ Johnson–Freyd RT notes Jan.15, 2016, pp.1–4; published framed ribbon-functor suppliers. Future content authoring must supply local proofs; no citation-only fallback.

### `cex-knot-kt-29-boundary-case`

**Kind:** counterexample. **Owner:** `kauffman-bracket-state-sum-and-jones-polynomial-examples` (KT-29).

An R1 kink multiplies the raw bracket by−A³, so raw bracket is not an unframed invariant without writhe correction.

**Direct prerequisites:** `def-kauffman-bracket-smoothing-and-loop-value`, `alg-kauffman-bracket-state-sum`, `thm-normalized-bracket-is-an-oriented-link-invariant`, `thm-bracket-state-sum-matches-library-jones-specialization`, `lem-kauffman-bracket-r2-r3-identities`, `lem-kauffman-bracket-curl-and-writhe-correction`, `lem-hecke-bracket-trace-dictionary-and-local-descent`, `thm-kauffman-bracket-state-sum-procedure-properties`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-3/ Kauffman 1990 §§III,VI (diagram pages visually checked); reader-3/ Kauffman 2022 v2 §2; published HOMFLYPT/Jones local supplier. Future content authoring must supply local proofs; no citation-only fallback.

### `ex-knot-kt-29-worked-cases`

**Kind:** example. **Owner:** `kauffman-bracket-state-sum-and-jones-polynomial-examples` (KT-29).

For the positive trefoil in the declared convention, V=t+t³−t⁴; its mirror is t^−1+t^−3−t^−4, and unknot V=1.

**Direct prerequisites:** `def-kauffman-bracket-smoothing-and-loop-value`, `alg-kauffman-bracket-state-sum`, `thm-normalized-bracket-is-an-oriented-link-invariant`, `thm-bracket-state-sum-matches-library-jones-specialization`, `lem-kauffman-bracket-r2-r3-identities`, `lem-kauffman-bracket-curl-and-writhe-correction`, `lem-hecke-bracket-trace-dictionary-and-local-descent`, `thm-kauffman-bracket-state-sum-procedure-properties`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-3/ Kauffman 1990 §§III,VI (diagram pages visually checked); reader-3/ Kauffman 2022 v2 §2; published HOMFLYPT/Jones local supplier. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-alternating-state-adequacy-and-jones-span`

**Kind:** lemma. **Owner:** `alternating-diagrams-and-crossing-number-minimality` (KT-50).

Connected reduced alternating diagrams are A/B adequate, giving bracket span 4c and Jones span c, while every c′-crossing knot diagram has Jones span≤c′.

**Direct prerequisites:** `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `thm-linking-number-is-invariant-and-writhe-is-not`, `def-kauffman-bracket-smoothing-and-loop-value`, `thm-normalized-bracket-is-an-oriented-link-invariant`, `def-reduced-alternating-link-diagram`, `def-flype-crossing-ball-and-alternating-tangle-data`, `def-axiom-of-choice`.

**Proof/definition route:** Show extreme state coefficients cannot cancel, compute s_A+s_B=c+2 from the checkerboard graph and apply the degree formulas; compare any competitor to prove crossing minimality. No flyping dependency is used.

**Source boundary:** reader-1/ Calegari 2025 §5.2; reader-3/ Kauffman 2022 v2 §2. Future content authoring must supply local proofs; no citation-only fallback.

### `cor-jones-span-detects-crossing-number-for-reduced-alternating-knots`

**Kind:** corollary. **Owner:** `alternating-diagrams-and-crossing-number-minimality` (KT-50).

proves the normalized Jones span equals the crossing number under KT-29's convention.

**Direct prerequisites:** `def-reduced-alternating-link-diagram`, `lem-alternating-state-adequacy-and-jones-span`, `def-axiom-of-choice`.

**Proof/definition route:** prove adequacy of both extreme Kauffman
states so their extremal degrees do not cancel; the state-sum span is $4c$
in $A$, equivalently $c$ in the normalized Jones variable. Euler
characteristic of the Tait graph gives the span identity. Use flyping only for diagram classification. Adequacy and the Jones-span bound independently prove crossing minimality and do not depend on flyping. Give the flyping proof as modules from Menasco crossing-ball position, incompressible Conway spheres/standard-position alternating tangles, and the Menasco–Thistlethwaite geometric flyping reduction with an explicit decreasing complexity; graph matroid exchange alone permits mutation and is not a flyping proof. Recover/read a complete source before authoring this deep branch; no bare
theorem citation. **Local prerequisite modules:** `thm-tait-flyping-theorem`, `lem-alternating-state-adequacy-and-jones-span`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-1/ Calegari 2025 §5.2; reader-3/ Kauffman 2022 v2 §2. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-bmw-relations-dubrovnik-parameter-dictionary`

**Kind:** lemma. **Owner:** `kauffman-and-dubrovnik-polynomials-from-bmw-algebras` (KT-30).

The fixed draft BMW presentation has a complete dictionary to the chosen Dubrovnik crossing/curl convention over the universal coefficient ring, with no illicit division by z.

**Direct prerequisites:** `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `thm-linking-number-is-invariant-and-writhe-is-not`, `def-kauffman-bracket-smoothing-and-loop-value`, `thm-normalized-bracket-is-an-oriented-link-invariant`, `def-kauffman-regular-isotopy-and-dubrovnik-conventions`, `def-bmw-algebra-with-dubrovnik-relations`, `def-axiom-of-choice`.

**Proof/definition route:** Check each braid, skein, untwisting and loop relation, including z(δ−1)=ρ−ρ^−1 and the sign reversal relative to Goodman–Hauschild. Retain existing definition identity for future repair; this is a dictionary, not a second BMW definition.

**Source boundary:** reader-3/ Kauffman 1990 Definition 2.4, PDF p.7/printed p.422 and §VII pp.466–469 (corrected sign); reader-3/ BMW drafts reviewed but excluded as suppliers. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-bmw-descending-tangle-spanning`

**Kind:** lemma. **Owner:** `kauffman-and-dubrovnik-polynomials-from-bmw-algebras` (KT-30).

Every BMW tangle word is a linear combination of descending matching tangles over the stated coefficient ring.

**Direct prerequisites:** `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `thm-linking-number-is-invariant-and-writhe-is-not`, `def-kauffman-bracket-smoothing-and-loop-value`, `thm-normalized-bracket-is-an-oriented-link-invariant`, `def-kauffman-regular-isotopy-and-dubrovnik-conventions`, `def-bmw-algebra-with-dubrovnik-relations`, `lem-bmw-relations-dubrovnik-parameter-dictionary`, `def-axiom-of-choice`.

**Proof/definition route:** Order crossings relative to a boundary traversal, switch the first bad crossing via skein and lower crossings in smoothing terms; prove a lexicographic complexity decreases and remove curls/circles with the exact parameters.

**Source boundary:** reader-3/ Kauffman 1990 Definition 2.4, PDF p.7/printed p.422 and §VII pp.466–469 (corrected sign); reader-3/ BMW drafts reviewed but excluded as suppliers. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-bmw-closure-pairing-independence`

**Kind:** lemma. **Owner:** `kauffman-and-dubrovnik-polynomials-from-bmw-algebras` (KT-30).

The descending matching tangles are linearly independent over the declared generic field, and over an integral form only after torsion-free/base-change hypotheses are proved.

**Direct prerequisites:** `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `thm-linking-number-is-invariant-and-writhe-is-not`, `def-kauffman-bracket-smoothing-and-loop-value`, `thm-normalized-bracket-is-an-oriented-link-invariant`, `def-kauffman-regular-isotopy-and-dubrovnik-conventions`, `def-bmw-algebra-with-dubrovnik-relations`, `lem-bmw-descending-tangle-spanning`, `def-axiom-of-choice`.

**Proof/definition route:** Pair with reflected matching closures, compute the leading diagonal and off-diagonal parameter degrees and prove determinant nonzero. Generic independence is not automatically every-specialization independence.

**Source boundary:** reader-3/ Kauffman 1990 Definition 2.4, PDF p.7/printed p.422 and §VII pp.466–469 (corrected sign); reader-3/ BMW drafts reviewed but excluded as suppliers. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-bmw-markov-trace-stabilization`

**Kind:** lemma. **Owner:** `kauffman-and-dubrovnik-polynomials-from-bmw-algebras` (KT-30).

Closing BMW tangles defines a cyclic tower trace with the exact positive/negative stabilization scalars in the Dubrovnik convention.

**Direct prerequisites:** `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `thm-linking-number-is-invariant-and-writhe-is-not`, `def-kauffman-bracket-smoothing-and-loop-value`, `thm-normalized-bracket-is-an-oriented-link-invariant`, `def-kauffman-regular-isotopy-and-dubrovnik-conventions`, `def-bmw-algebra-with-dubrovnik-relations`, `lem-bmw-closure-pairing-independence`, `def-axiom-of-choice`.

**Proof/definition route:** Match gluing boundaries and both curls, compute trace on the unit/matching basis, and prove consistency with skein and untwisting; then cancel the writhe scalar using Markov.

**Source boundary:** reader-3/ Kauffman 1990 Definition 2.4, PDF p.7/printed p.422 and §VII pp.466–469 (corrected sign); reader-3/ BMW drafts reviewed but excluded as suppliers. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-general-3manifold-skein-quotient-isotopy-and-gluing`

**Kind:** lemma. **Owner:** `skein-modules-for-links-in-three-manifolds` (KT-31).

The free module on framed links modulo the specified local bracket/extra-circle relations is functorial under orientation-preserving diffeomorphisms and defined collar gluings.

**Direct prerequisites:** `def-kauffman-bracket-smoothing-and-loop-value`, `thm-normalized-bracket-is-an-oriented-link-invariant`, `def-kauffman-bracket-skein-module-of-a-three-manifold`, `def-axiom-of-choice`.

**Proof/definition route:** Push each local relation ball through the diffeomorphism/gluing and verify compositions; specify relative boundary endpoints when using a gluing action. No general freeness follows.

**Source boundary:** reader-3/ Pohorence, 3-manifold Invariants and TQFTs (Jan.2016), pp.1–16; reader-3/ Chen arXiv:1502.06845v1, restricted surface TV scope only. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-kauffman-dubrovnik-writhe-component-conversion`

**Kind:** lemma. **Owner:** `kauffman-and-dubrovnik-polynomials-from-bmw-algebras` (KT-30).

F=a^−w L and D=−i^−w(−1)^c L(ia,−iz) satisfy their respective ambient/regular-isotopy axioms.

**Direct prerequisites:** `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `thm-linking-number-is-invariant-and-writhe-is-not`, `def-kauffman-bracket-smoothing-and-loop-value`, `thm-normalized-bracket-is-an-oriented-link-invariant`, `def-kauffman-regular-isotopy-and-dubrovnik-conventions`, `def-bmw-algebra-with-dubrovnik-relations`, `lem-bmw-relations-dubrovnik-parameter-dictionary`, `def-axiom-of-choice`.

**Proof/definition route:** Check unknot (c=1), both curls, and all component merge/split branches of the crossing skein; use a descending induction uniqueness proof. The missing leading minus sign fails the unknot test.

**Source boundary:** reader-3/ Kauffman 1990 Definition 2.4, PDF p.7/printed p.422 and §VII pp.466–469 (corrected sign); reader-3/ BMW drafts reviewed but excluded as suppliers. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-bmw-descending-tangle-spanning-and-independence`

**Kind:** lemma. **Owner:** `kauffman-and-dubrovnik-polynomials-from-bmw-algebras` (KT-30).

proves crossing-switch descent spans by descending tangles, identifies the unique descending representative for each boundary matching, and proves linear independence using the closure-pairing determinant over the stated generic coefficient field before any specialization.

**Direct prerequisites:** `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `thm-linking-number-is-invariant-and-writhe-is-not`, `def-kauffman-bracket-smoothing-and-loop-value`, `thm-normalized-bracket-is-an-oriented-link-invariant`, `def-kauffman-regular-isotopy-and-dubrovnik-conventions`, `def-bmw-algebra-with-dubrovnik-relations`, `lem-bmw-relations-dubrovnik-parameter-dictionary`, `lem-bmw-descending-tangle-spanning`, `lem-bmw-closure-pairing-independence`, `lem-bmw-markov-trace-stabilization`, `lem-kauffman-dubrovnik-writhe-component-conversion`, `alg-kauffman-polynomial-from-bmw-braid-closure`, `def-axiom-of-choice`.

**Proof/definition route:** keep regular-isotopy $L$, oriented ambient-isotopy $F$, and Dubrovnik $D$ as separate contracts. The convention audit uses Kauffman, *An Invariant of Regular Isotopy*, 1990, Definition 2.4 (PDF p. 7/printed p. 422) for $F=a^{-w}L$ and §VII (printed pp. 466–469) for the $D$ conversion, with the corrected factor $-i^{-w}(-1)^c$. The source proves $L$ by induction but omits proof of the conversion; it does not provide a complete BMW basis theorem. Existing BMW items on the Temperley–Lieb/Hecke pages are drafts and cannot discharge these modules. Reconstruct each tangle reduction, pairing determinant and trace stabilization from the stated relations, then check the unknot, positive and negative curl, Hopf link and mirror substitutions. Do not infer unframed Markov invariance from framed regular-isotopy invariance. **Local prerequisite modules:** `lem-bmw-relations-dubrovnik-parameter-dictionary`, `lem-bmw-descending-tangle-spanning`, `lem-bmw-closure-pairing-independence`, `lem-bmw-markov-trace-stabilization`, `lem-kauffman-dubrovnik-writhe-component-conversion`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-3/ Kauffman 1990 Definition 2.4, PDF p.7/printed p.422 and §VII pp.466–469 (corrected sign); reader-3/ BMW drafts reviewed but excluded as suppliers. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-khovanov-cube-differential-squares-to-zero`

**Kind:** lemma. **Owner:** `khovanov-homology-and-jones-categorification` (KT-37).

proves $d^2=0$ by cancellation of each square face using Frobenius relations.

**Direct prerequisites:** `def-kauffman-bracket-smoothing-and-loop-value`, `thm-normalized-bracket-is-an-oriented-link-invariant`, `def-chain-complex-in-an-abelian-category`, `thm-chain-homotopic-maps-induce-the-same-map-on-homology`, `def-khovanov-frobenius-algebra-and-cube-of-resolutions`, `def-reduced-khovanov-cohomology-of-a-knot`, `alg-khovanov-chain-complex-from-diagram`, `def-axiom-of-choice`.

**Proof/definition route:** define the cube sign from an ordering of
crossings and prove the edge squares commute before inserting signs. For R1,
decompose the added-crossing complex into a contractible summand plus the
declared grading shift; for R2 use the two-crossing cancellation; for R3
construct the explicit chain homotopy using Frobenius associativity and
coassociativity. Verify the Euler characteristic resolution-by-resolution
against KT-29's Jones convention. Khovanov 1999 v2 proves invariance of
isomorphism classes but later cobordism coherence is handled in KT-40.
**Local prerequisite modules:** `lem-khovanov-reidemeister-chain-homotopies`, `lem-khovanov-graded-euler-characteristic-jones-normalization`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-6/ Khovanov arXiv:math/9908171v2. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-khovanov-graded-euler-characteristic-jones-normalization`

**Kind:** lemma. **Owner:** `khovanov-homology-and-jones-categorification` (KT-37).

The alternating q-graded rank of normalized unreduced Kh is the declared unknot factor times Jones after the exact q,t substitution; reduced Kh has unknot value one.

**Direct prerequisites:** `def-kauffman-bracket-smoothing-and-loop-value`, `thm-normalized-bracket-is-an-oriented-link-invariant`, `def-chain-complex-in-an-abelian-category`, `thm-chain-homotopic-maps-induce-the-same-map-on-homology`, `def-khovanov-frobenius-algebra-and-cube-of-resolutions`, `def-reduced-khovanov-cohomology-of-a-knot`, `def-axiom-of-choice`.

**Proof/definition route:** Compute each resolution tensor product's graded dimension and sum its cube sign/shift; identify the bracket weights statewise and test unknot, positive trefoil and mirror.

**Source boundary:** reader-6/ Khovanov arXiv:math/9908171v2. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-khovanov-reidemeister-chain-homotopies`

**Kind:** lemma. **Owner:** `khovanov-homology-and-jones-categorification` (KT-37).

The normalized integral Frobenius cube complexes before/after each oriented R move are chain-homotopy equivalent with the stated grading shifts.

**Direct prerequisites:** `def-kauffman-bracket-smoothing-and-loop-value`, `thm-normalized-bracket-is-an-oriented-link-invariant`, `def-chain-complex-in-an-abelian-category`, `thm-chain-homotopic-maps-induce-the-same-map-on-homology`, `def-khovanov-frobenius-algebra-and-cube-of-resolutions`, `def-reduced-khovanov-cohomology-of-a-knot`, `lem-khovanov-cube-differential-squares-to-zero`, `def-axiom-of-choice`.

**Proof/definition route:** Write inclusions/projections and contracting homotopies for R1/R2 using unit/counit/m/Δ; compare R3 via explicit mapping-cone cancellations. Cube reordering signs give canonical isomorphisms up to the declared conventions.

**Source boundary:** reader-6/ Khovanov arXiv:math/9908171v2. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-quantum-sl2-ribbon-trace-matches-hecke-and-bracket`

**Kind:** lemma. **Owner:** `ribbon-categories-and-reshetikhin-turaev-knot-invariants` (KT-33).

For generic U_q(sl2) fundamental module with explicitly chosen R matrix, duality and twist, normalized ribbon evaluation equals the declared bracket/Jones specialization.

**Direct prerequisites:** `def-kauffman-bracket-smoothing-and-loop-value`, `thm-normalized-bracket-is-an-oriented-link-invariant`, `def-kauffman-regular-isotopy-and-dubrovnik-conventions`, `thm-a-ribbon-object-defines-a-unique-framed-tangle-evaluation-functor`, `thm-ribbon-evaluation-is-an-invariant-of-framed-colored-links`, `thm-writhe-normalized-ribbon-trace-is-an-unframed-link-invariant`, `def-colored-framed-knot-evaluation-from-ribbon-category`, `def-axiom-of-choice`.

**Proof/definition route:** Compute the two R eigenvalues/projectors, match their TL generators and trace/unknot value, and transport through the existing tangle functor. Higher colors require actual representation matrices and quantum-dimension normalization, not an unnamed object.

**Source boundary:** reader-3/ Johnson–Freyd RT notes Jan.15, 2016, pp.1–4; published framed ribbon-functor suppliers. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-bmw-markov-trace-gives-dubrovnik-invariant`

**Kind:** theorem. **Owner:** `kauffman-and-dubrovnik-polynomials-from-bmw-algebras` (KT-30).

constructs the trace on the BMW tower, checks cyclicity and both stabilization scalars, and proves the normalized closure is invariant under oriented Markov moves.

**Direct prerequisites:** `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `thm-linking-number-is-invariant-and-writhe-is-not`, `def-kauffman-bracket-smoothing-and-loop-value`, `thm-normalized-bracket-is-an-oriented-link-invariant`, `def-kauffman-regular-isotopy-and-dubrovnik-conventions`, `def-bmw-algebra-with-dubrovnik-relations`, `lem-bmw-relations-dubrovnik-parameter-dictionary`, `lem-bmw-descending-tangle-spanning`, `lem-bmw-closure-pairing-independence`, `lem-bmw-markov-trace-stabilization`, `lem-kauffman-dubrovnik-writhe-component-conversion`, `alg-kauffman-polynomial-from-bmw-braid-closure`, `def-axiom-of-choice`.

**Proof/definition route:** keep regular-isotopy $L$, oriented ambient-isotopy $F$, and Dubrovnik $D$ as separate contracts. The convention audit uses Kauffman, *An Invariant of Regular Isotopy*, 1990, Definition 2.4 (PDF p. 7/printed p. 422) for $F=a^{-w}L$ and §VII (printed pp. 466–469) for the $D$ conversion, with the corrected factor $-i^{-w}(-1)^c$. The source proves $L$ by induction but omits proof of the conversion; it does not provide a complete BMW basis theorem. Existing BMW items on the Temperley–Lieb/Hecke pages are drafts and cannot discharge these modules. Reconstruct each tangle reduction, pairing determinant and trace stabilization from the stated relations, then check the unknot, positive and negative curl, Hopf link and mirror substitutions. Do not infer unframed Markov invariance from framed regular-isotopy invariance. **Local prerequisite modules:** `lem-bmw-relations-dubrovnik-parameter-dictionary`, `lem-bmw-descending-tangle-spanning`, `lem-bmw-closure-pairing-independence`, `lem-bmw-markov-trace-stabilization`, `lem-kauffman-dubrovnik-writhe-component-conversion`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-3/ Kauffman 1990 Definition 2.4, PDF p.7/printed p.422 and §VII pp.466–469 (corrected sign); reader-3/ BMW drafts reviewed but excluded as suppliers. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-kauffman-and-dubrovnik-conversion`

**Kind:** theorem. **Owner:** `kauffman-and-dubrovnik-polynomials-from-bmw-algebras` (KT-30).

proves the regular-isotopy/oriented conversion formulas locally by checking the skein, curl, component and writhe factors; the printed Kauffman proposition alone is not accepted as proof because it omits that derivation.

**Direct prerequisites:** `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `thm-linking-number-is-invariant-and-writhe-is-not`, `def-kauffman-bracket-smoothing-and-loop-value`, `thm-normalized-bracket-is-an-oriented-link-invariant`, `def-kauffman-regular-isotopy-and-dubrovnik-conventions`, `def-bmw-algebra-with-dubrovnik-relations`, `lem-bmw-relations-dubrovnik-parameter-dictionary`, `lem-bmw-descending-tangle-spanning`, `lem-bmw-closure-pairing-independence`, `lem-bmw-markov-trace-stabilization`, `lem-kauffman-dubrovnik-writhe-component-conversion`, `alg-kauffman-polynomial-from-bmw-braid-closure`, `def-axiom-of-choice`.

**Proof/definition route:** keep regular-isotopy $L$, oriented ambient-isotopy $F$, and Dubrovnik $D$ as separate contracts. The convention audit uses Kauffman, *An Invariant of Regular Isotopy*, 1990, Definition 2.4 (PDF p. 7/printed p. 422) for $F=a^{-w}L$ and §VII (printed pp. 466–469) for the $D$ conversion, with the corrected factor $-i^{-w}(-1)^c$. The source proves $L$ by induction but omits proof of the conversion; it does not provide a complete BMW basis theorem. Existing BMW items on the Temperley–Lieb/Hecke pages are drafts and cannot discharge these modules. Reconstruct each tangle reduction, pairing determinant and trace stabilization from the stated relations, then check the unknot, positive and negative curl, Hopf link and mirror substitutions. Do not infer unframed Markov invariance from framed regular-isotopy invariance. **Local prerequisite modules:** `lem-bmw-relations-dubrovnik-parameter-dictionary`, `lem-bmw-descending-tangle-spanning`, `lem-bmw-closure-pairing-independence`, `lem-bmw-markov-trace-stabilization`, `lem-kauffman-dubrovnik-writhe-component-conversion`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-3/ Kauffman 1990 Definition 2.4, PDF p.7/printed p.422 and §VII pp.466–469 (corrected sign); reader-3/ BMW drafts reviewed but excluded as suppliers. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-kauffman-polynomial-from-bmw-braid-closure-procedure-properties`

**Kind:** theorem. **Owner:** `kauffman-and-dubrovnik-polynomials-from-bmw-algebras` (KT-30).

For exactly the admissible encoded inputs of alg-kauffman-polynomial-from-bmw-braid-closure, execution terminates, rejects precisely the stated syntactic failures and returns the prescribed finite output. Any identification with a topological invariant, recognition completeness, or asymptotic complexity is only the separately proved domain result, not inferred from finite execution.

**Direct prerequisites:** `alg-kauffman-polynomial-from-bmw-braid-closure`, `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `thm-linking-number-is-invariant-and-writhe-is-not`, `def-kauffman-bracket-smoothing-and-loop-value`, `thm-normalized-bracket-is-an-oriented-link-invariant`, `def-kauffman-regular-isotopy-and-dubrovnik-conventions`, `def-bmw-algebra-with-dubrovnik-relations`, `def-axiom-of-choice`.

**Proof/definition route:** Use the explicit finite loop/state/word or bounded search measure in the procedure; prove each branch preserves the stated output representation and all arithmetic is effective. Cite the domain correctness and completeness modules separately when claiming invariant/recognition meaning.

**Source boundary:** reader-3/ Kauffman 1990 Definition 2.4, PDF p.7/printed p.422 and §VII pp.466–469 (corrected sign); reader-3/ BMW drafts reviewed but excluded as suppliers. Future content authoring must supply local proofs; no citation-only fallback.

### `cex-knot-kt-30-boundary-case`

**Kind:** counterexample. **Owner:** `kauffman-and-dubrovnik-polynomials-from-bmw-algebras-examples` (KT-30).

Dropping the leading minus in−i^−w(−1)^cL(ia,−iz) gives value−1 on unknot; the component/writhe factor is essential.

**Direct prerequisites:** `def-kauffman-regular-isotopy-and-dubrovnik-conventions`, `def-bmw-algebra-with-dubrovnik-relations`, `lem-bmw-descending-tangle-spanning-and-independence`, `thm-bmw-markov-trace-gives-dubrovnik-invariant`, `thm-kauffman-and-dubrovnik-conversion`, `alg-kauffman-polynomial-from-bmw-braid-closure`, `lem-bmw-relations-dubrovnik-parameter-dictionary`, `lem-bmw-descending-tangle-spanning`, `lem-bmw-closure-pairing-independence`, `lem-bmw-markov-trace-stabilization`, `lem-kauffman-dubrovnik-writhe-component-conversion`, `thm-kauffman-polynomial-from-bmw-braid-closure-procedure-properties`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-3/ Kauffman 1990 Definition 2.4, PDF p.7/printed p.422 and §VII pp.466–469 (corrected sign); reader-3/ BMW drafts reviewed but excluded as suppliers. Future content authoring must supply local proofs; no citation-only fallback.

### `ex-knot-kt-30-worked-cases`

**Kind:** example. **Owner:** `kauffman-and-dubrovnik-polynomials-from-bmw-algebras-examples` (KT-30).

Verify unknot F=D=1, curl multipliers a±1 and F=a^−wL, and the two-component unlink Dubrovnik value1+(a−a^−1)/z.

**Direct prerequisites:** `def-kauffman-regular-isotopy-and-dubrovnik-conventions`, `def-bmw-algebra-with-dubrovnik-relations`, `lem-bmw-descending-tangle-spanning-and-independence`, `thm-bmw-markov-trace-gives-dubrovnik-invariant`, `thm-kauffman-and-dubrovnik-conversion`, `alg-kauffman-polynomial-from-bmw-braid-closure`, `lem-bmw-relations-dubrovnik-parameter-dictionary`, `lem-bmw-descending-tangle-spanning`, `lem-bmw-closure-pairing-independence`, `lem-bmw-markov-trace-stabilization`, `lem-kauffman-dubrovnik-writhe-component-conversion`, `thm-kauffman-polynomial-from-bmw-braid-closure-procedure-properties`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-3/ Kauffman 1990 Definition 2.4, PDF p.7/printed p.422 and §VII pp.466–469 (corrected sign); reader-3/ BMW drafts reviewed but excluded as suppliers. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-khovanov-chain-complex-from-diagram-procedure-properties`

**Kind:** theorem. **Owner:** `khovanov-homology-and-jones-categorification` (KT-37).

For exactly the admissible encoded inputs of alg-khovanov-chain-complex-from-diagram, execution terminates, rejects precisely the stated syntactic failures and returns the prescribed finite output. Any identification with a topological invariant, recognition completeness, or asymptotic complexity is only the separately proved domain result, not inferred from finite execution.

**Direct prerequisites:** `alg-khovanov-chain-complex-from-diagram`, `def-kauffman-bracket-smoothing-and-loop-value`, `thm-normalized-bracket-is-an-oriented-link-invariant`, `def-chain-complex-in-an-abelian-category`, `thm-chain-homotopic-maps-induce-the-same-map-on-homology`, `def-khovanov-frobenius-algebra-and-cube-of-resolutions`, `def-reduced-khovanov-cohomology-of-a-knot`, `def-axiom-of-choice`.

**Proof/definition route:** Use the explicit finite loop/state/word or bounded search measure in the procedure; prove each branch preserves the stated output representation and all arithmetic is effective. Cite the domain correctness and completeness modules separately when claiming invariant/recognition meaning.

**Source boundary:** reader-6/ Khovanov arXiv:math/9908171v2. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-khovanov-euler-characteristic-is-jones`

**Kind:** theorem. **Owner:** `khovanov-homology-and-jones-categorification` (KT-37).

gives the exact normalized graded Euler characteristic.

**Direct prerequisites:** `def-kauffman-bracket-smoothing-and-loop-value`, `thm-normalized-bracket-is-an-oriented-link-invariant`, `def-chain-complex-in-an-abelian-category`, `thm-chain-homotopic-maps-induce-the-same-map-on-homology`, `def-khovanov-frobenius-algebra-and-cube-of-resolutions`, `def-reduced-khovanov-cohomology-of-a-knot`, `lem-khovanov-reidemeister-chain-homotopies`, `lem-khovanov-graded-euler-characteristic-jones-normalization`, `alg-khovanov-chain-complex-from-diagram`, `def-axiom-of-choice`.

**Proof/definition route:** define the cube sign from an ordering of
crossings and prove the edge squares commute before inserting signs. For R1,
decompose the added-crossing complex into a contractible summand plus the
declared grading shift; for R2 use the two-crossing cancellation; for R3
construct the explicit chain homotopy using Frobenius associativity and
coassociativity. Verify the Euler characteristic resolution-by-resolution
against KT-29's Jones convention. Khovanov 1999 v2 proves invariance of
isomorphism classes but later cobordism coherence is handled in KT-40.
**Local prerequisite modules:** `lem-khovanov-reidemeister-chain-homotopies`, `lem-khovanov-graded-euler-characteristic-jones-normalization`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-6/ Khovanov arXiv:math/9908171v2. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-khovanov-homology-is-an-oriented-link-invariant`

**Kind:** theorem. **Owner:** `khovanov-homology-and-jones-categorification` (KT-37).

For finite regular oriented diagrams of ambient-isotopic smooth S3 links, the normalized integral Frobenius cube complexes are bigraded-chain-homotopy equivalent. Invariance includes crossing-order sign changes and all oriented R1/R2/R3 variants; coefficients, reducedness and grading shifts are as defined, with no cobordism strict-sign claim.

**Direct prerequisites:** `def-kauffman-bracket-smoothing-and-loop-value`, `thm-normalized-bracket-is-an-oriented-link-invariant`, `def-chain-complex-in-an-abelian-category`, `thm-chain-homotopic-maps-induce-the-same-map-on-homology`, `def-khovanov-frobenius-algebra-and-cube-of-resolutions`, `def-reduced-khovanov-cohomology-of-a-knot`, `lem-khovanov-reidemeister-chain-homotopies`, `lem-khovanov-graded-euler-characteristic-jones-normalization`, `alg-khovanov-chain-complex-from-diagram`, `def-axiom-of-choice`.

**Proof/definition route:** define the cube sign from an ordering of
crossings and prove the edge squares commute before inserting signs. For R1,
decompose the added-crossing complex into a contractible summand plus the
declared grading shift; for R2 use the two-crossing cancellation; for R3
construct the explicit chain homotopy using Frobenius associativity and
coassociativity. Verify the Euler characteristic resolution-by-resolution
against KT-29's Jones convention. Khovanov 1999 v2 proves invariance of
isomorphism classes but later cobordism coherence is handled in KT-40.
**Local prerequisite modules:** `lem-khovanov-reidemeister-chain-homotopies`, `lem-khovanov-graded-euler-characteristic-jones-normalization`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-6/ Khovanov arXiv:math/9908171v2. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-instanton-knot-complex-asd-analytic-foundations`

**Kind:** lemma. **Owner:** `khovanov-homology-detects-the-unknot` (KT-44).

For the specified admissible singular SO3/SU2 bundle and knot singularity data, perturbed Chern–Simons critical points and finite-energy ASD trajectories define I^natural with d²=0 and isotopy invariance.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-khovanov-frobenius-algebra-and-cube-of-resolutions`, `def-reduced-khovanov-cohomology-of-a-knot`, `thm-khovanov-homology-is-an-oriented-link-invariant`, `def-instanton-knot-homology-and-canonical-class`, `def-singular-instanton-knot-and-sutured-closure-data`, `def-axiom-of-choice`.

**Proof/definition route:** Define singular connection Sobolev spaces, holonomy conditions, admissibility and spectral-flow grading; prove transversality, bubbling control, compactness and broken-trajectory gluing. Distinguish reduced singular instanton homology from ordinary framed instanton groups.

**Source boundary:** reader-6/ Kronheimer–Mrowka arXiv:1005.4346v1, Theorem 1.1; KHI rank detector separately cited. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-kh-to-instanton-resolution-spectral-sequence`

**Kind:** lemma. **Owner:** `khovanov-homology-detects-the-unknot` (KT-44).

The integral filtered resolution complex has E2=reduced Kh of the mirror and abuts to I^natural(K), with the exact grading/sign normalization.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-khovanov-frobenius-algebra-and-cube-of-resolutions`, `def-reduced-khovanov-cohomology-of-a-knot`, `thm-khovanov-homology-is-an-oriented-link-invariant`, `def-instanton-knot-homology-and-canonical-class`, `def-singular-instanton-knot-and-sutured-closure-data`, `lem-instanton-knot-complex-asd-analytic-foundations`, `def-axiom-of-choice`.

**Proof/definition route:** Prove the singular instanton exact triangles and coherent cube maps, identify unlink groups and saddle maps with the reduced Frobenius TQFT, then use finite cube filtration convergence. This is not the branched-cover Heegaard Floer sequence.

**Source boundary:** reader-6/ Kronheimer–Mrowka arXiv:1005.4346v1, Theorem 1.1; KHI rank detector separately cited. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-oriented-linking-number-from-diagram-procedure-properties`

**Kind:** theorem. **Owner:** `crossing-signs-writhe-and-linking-number` (KT-03).

For exactly the admissible encoded inputs of alg-oriented-linking-number-from-diagram, execution terminates, rejects precisely the stated syntactic failures and returns the prescribed finite output. Any identification with a topological invariant, recognition completeness, or asymptotic complexity is only the separately proved domain result, not inferred from finite execution.

**Direct prerequisites:** `alg-oriented-linking-number-from-diagram`, `thm-oriented-reidemeister-equivalence-theorem`, `def-elementary-geometric-half-twist`, `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `def-framed-knot-self-linking-and-seifert-framing`, `def-countable-choice`.

**Proof/definition route:** Use the explicit finite loop/state/word or bounded search measure in the procedure; prove each branch preserves the stated output representation and all arithmetic is effective. Cite the domain correctness and completeness modules separately when claiming invariant/recognition meaning.

**Source boundary:** reader-1/ Calegari 2025 §3.3; reader-1/ Elhamdadi–Hajij–Istvan Framed Knots v6 §3.1. Future content authoring must supply local proofs; no citation-only fallback.

### `cex-knot-kt-03-boundary-case`

**Kind:** counterexample. **Owner:** `crossing-signs-writhe-and-linking-number-examples` (KT-03).

Adding a positive R1 kink to an unknot changes diagram writhe from0 to1 and blackboard framing by1 while preserving unframed knot type.

**Direct prerequisites:** `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `alg-oriented-linking-number-from-diagram`, `thm-linking-number-is-invariant-and-writhe-is-not`, `def-framed-knot-self-linking-and-seifert-framing`, `thm-blackboard-framing-self-linking-is-writhe`, `lem-linking-number-even-sum-and-reidemeister-invariance`, `thm-oriented-linking-number-from-diagram-procedure-properties`, `def-countable-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-1/ Calegari 2025 §3.3; reader-1/ Elhamdadi–Hajij–Istvan Framed Knots v6 §3.1. Future content authoring must supply local proofs; no citation-only fallback.

### `ex-knot-kt-03-worked-cases`

**Kind:** example. **Owner:** `crossing-signs-writhe-and-linking-number-examples` (KT-03).

For the positive Hopf diagram the two mixed signs are +1,+1 and lk=1; for the standard Whitehead diagram mixed signs sum to zero.

**Direct prerequisites:** `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `alg-oriented-linking-number-from-diagram`, `thm-linking-number-is-invariant-and-writhe-is-not`, `def-framed-knot-self-linking-and-seifert-framing`, `thm-blackboard-framing-self-linking-is-writhe`, `lem-linking-number-even-sum-and-reidemeister-invariance`, `thm-oriented-linking-number-from-diagram-procedure-properties`, `def-countable-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-1/ Calegari 2025 §3.3; reader-1/ Elhamdadi–Hajij–Istvan Framed Knots v6 §3.1. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-planar-code-validation-and-diagram-reconstruction-procedure-properties`

**Kind:** theorem. **Owner:** `planar-diagram-codes-and-knot-table-enumeration` (KT-47).

For exactly the admissible encoded inputs of alg-planar-code-validation-and-diagram-reconstruction, execution terminates, rejects precisely the stated syntactic failures and returns the prescribed finite output. Any identification with a topological invariant, recognition completeness, or asymptotic complexity is only the separately proved domain result, not inferred from finite execution.

**Direct prerequisites:** `alg-planar-code-validation-and-diagram-reconstruction`, `thm-knot-wirtinger-presentation-correctness`, `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `thm-linking-number-is-invariant-and-writhe-is-not`, `def-planar-diagram-gauss-and-dowker-codes`, `def-countable-choice`.

**Proof/definition route:** Use the explicit finite loop/state/word or bounded search measure in the procedure; prove each branch preserves the stated output representation and all arithmetic is effective. Cite the domain correctness and completeness modules separately when claiming invariant/recognition meaning.

**Source boundary:** reader-1/ Calegari 2025 §1.3; reader-4/ HLP 1999 triangulation source. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-quandle-colorings-are-reidemeister-invariant`

**Kind:** theorem. **Owner:** `fox-colorings-and-quandle-invariants` (KT-08).

proves coloring sets have canonical local extension bijections under oriented R1/R2/R3 for a quandle. Conversely, requiring those extension bijections for every boundary coloring yields idempotency, right invertibility and self-distributivity; invariance of a numerical count alone is not that converse.

**Direct prerequisites:** `thm-knot-wirtinger-presentation-correctness`, `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `thm-linking-number-is-invariant-and-writhe-is-not`, `thm-oriented-reidemeister-equivalence-theorem`, `def-quandle-and-knot-coloring`, `def-rack-fundamental-quandle-and-adjoint-group`, `alg-dihedral-fox-colorings`, `alg-finite-rack-quandle-coloring-from-table`, `def-countable-choice`.

**Proof/definition route:** the three axioms are matched respectively
to R1, R2 and R3; each move gives a bijection of coloring sets, and the inverse
map for R2 uses right invertibility. The dihedral operation $a*b=2b-a$ is a
quandle over odd characteristic, so Gaussian elimination terminates in a
finite number of row operations. No coloring count is called a complete knot
invariant.

**Source boundary:** reader-1/ Calegari 2025 §4.1; reader-2/ Birman–Brendle 2004 braid survey. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-fundamental-quandle-and-adjoint-group-from-wirtinger`

**Kind:** theorem. **Owner:** `fox-colorings-and-quandle-invariants` (KT-08).

The diagram quandle is invariant under local quandle presentation moves, and its adjoint presentation is the knot Wirtinger group.

**Direct prerequisites:** `thm-knot-wirtinger-presentation-correctness`, `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `thm-linking-number-is-invariant-and-writhe-is-not`, `thm-oriented-reidemeister-equivalence-theorem`, `def-quandle-and-knot-coloring`, `def-rack-fundamental-quandle-and-adjoint-group`, `thm-quandle-colorings-are-reidemeister-invariant`, `def-countable-choice`.

**Proof/definition route:** Check all R extensions/inverses, apply the adjoint relations to each crossing and compare generators with KT01.

**Source boundary:** reader-1/ Calegari 2025 §4.1; reader-2/ Birman–Brendle 2004 braid survey. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-rack-colorings-are-framed-invariants`

**Kind:** theorem. **Owner:** `fox-colorings-and-quandle-invariants` (KT-08).

Rack colorings are invariant under R2/R3 and the declared framing-compensated diagram moves; forgetting framing requires the idempotency relation.

**Direct prerequisites:** `thm-knot-wirtinger-presentation-correctness`, `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `thm-linking-number-is-invariant-and-writhe-is-not`, `thm-oriented-reidemeister-equivalence-theorem`, `def-quandle-and-knot-coloring`, `def-rack-fundamental-quandle-and-adjoint-group`, `thm-blackboard-framing-self-linking-is-writhe`, `def-countable-choice`.

**Proof/definition route:** Check right inverses and self-distributivity; track the kink bijection and framing integer.

**Source boundary:** reader-1/ Calegari 2025 §4.1; reader-2/ Birman–Brendle 2004 braid survey. Future content authoring must supply local proofs; no citation-only fallback.

### `cex-knot-kt-08-boundary-case`

**Kind:** counterexample. **Owner:** `fox-colorings-and-quandle-invariants-examples` (KT-08).

One coloring prime is incomplete: over F5 both the unknot and trefoil have only5 constant assignments, although their groups distinguish them.

**Direct prerequisites:** `def-quandle-and-knot-coloring`, `alg-dihedral-fox-colorings`, `thm-quandle-colorings-are-reidemeister-invariant`, `def-rack-fundamental-quandle-and-adjoint-group`, `thm-fundamental-quandle-and-adjoint-group-from-wirtinger`, `thm-rack-colorings-are-framed-invariants`, `alg-finite-rack-quandle-coloring-from-table`, `thm-finite-table-coloring-termination-and-correctness`, `thm-dihedral-fox-colorings-procedure-properties`, `thm-finite-rack-quandle-coloring-from-table-procedure-properties`, `def-countable-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-1/ Calegari 2025 §4.1; reader-2/ Birman–Brendle 2004 braid survey. Future content authoring must supply local proofs; no citation-only fallback.

### `ex-knot-kt-08-worked-cases`

**Kind:** example. **Owner:** `fox-colorings-and-quandle-invariants-examples` (KT-08).

The trefoil F3 coloring equations reduce to one free linear relation, giving9 assignments, three constant and six nonconstant; the unknot has3.

**Direct prerequisites:** `def-quandle-and-knot-coloring`, `alg-dihedral-fox-colorings`, `thm-quandle-colorings-are-reidemeister-invariant`, `def-rack-fundamental-quandle-and-adjoint-group`, `thm-fundamental-quandle-and-adjoint-group-from-wirtinger`, `thm-rack-colorings-are-framed-invariants`, `alg-finite-rack-quandle-coloring-from-table`, `thm-finite-table-coloring-termination-and-correctness`, `thm-dihedral-fox-colorings-procedure-properties`, `thm-finite-rack-quandle-coloring-from-table-procedure-properties`, `def-countable-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-1/ Calegari 2025 §4.1; reader-2/ Birman–Brendle 2004 braid survey. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-reduced-alternating-diagram-minimizes-crossings`

**Kind:** theorem. **Owner:** `alternating-diagrams-and-crossing-number-minimality` (KT-50).

proves a reduced alternating diagram has minimal crossing number.

**Direct prerequisites:** `def-reduced-alternating-link-diagram`, `lem-alternating-state-adequacy-and-jones-span`, `def-axiom-of-choice`.

**Proof/definition route:** prove adequacy of both extreme Kauffman
states so their extremal degrees do not cancel; the state-sum span is $4c$
in $A$, equivalently $c$ in the normalized Jones variable. Euler
characteristic of the Tait graph gives the span identity. Use flyping only for diagram classification. Adequacy and the Jones-span bound independently prove crossing minimality and do not depend on flyping. Give the flyping proof as modules from Menasco crossing-ball position, incompressible Conway spheres/standard-position alternating tangles, and the Menasco–Thistlethwaite geometric flyping reduction with an explicit decreasing complexity; graph matroid exchange alone permits mutation and is not a flyping proof. Recover/read a complete source before authoring this deep branch; no bare
theorem citation. **Local prerequisite modules:** `thm-tait-flyping-theorem`, `lem-alternating-state-adequacy-and-jones-span`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-1/ Calegari 2025 §5.2; reader-3/ Kauffman 2022 v2 §2. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-reduced-khovanov-basepoint-and-reidemeister-invariance`

**Kind:** theorem. **Owner:** `khovanov-homology-and-jones-categorification` (KT-37).

The integral reduced complex is invariant under based R moves and basepoint transport along a knot with the fixed shift.

**Direct prerequisites:** `def-kauffman-bracket-smoothing-and-loop-value`, `thm-normalized-bracket-is-an-oriented-link-invariant`, `def-chain-complex-in-an-abelian-category`, `thm-chain-homotopic-maps-induce-the-same-map-on-homology`, `def-khovanov-frobenius-algebra-and-cube-of-resolutions`, `def-reduced-khovanov-cohomology-of-a-knot`, `lem-khovanov-reidemeister-chain-homotopies`, `def-axiom-of-choice`.

**Proof/definition route:** Restrict the unreduced chain homotopies and prove the crossing-passing basepoint maps/homotopies.

**Source boundary:** reader-6/ Khovanov arXiv:math/9908171v2. Future content authoring must supply local proofs; no citation-only fallback.

### `cex-knot-kt-37-boundary-case`

**Kind:** counterexample. **Owner:** `khovanov-homology-and-jones-categorification-examples` (KT-37).

Omitting the n− and quantum writhe shifts in the cube changes under R1 and gives the wrong Jones Euler normalization.

**Direct prerequisites:** `def-khovanov-frobenius-algebra-and-cube-of-resolutions`, `alg-khovanov-chain-complex-from-diagram`, `lem-khovanov-cube-differential-squares-to-zero`, `thm-khovanov-homology-is-an-oriented-link-invariant`, `thm-khovanov-euler-characteristic-is-jones`, `lem-khovanov-reidemeister-chain-homotopies`, `lem-khovanov-graded-euler-characteristic-jones-normalization`, `def-reduced-khovanov-cohomology-of-a-knot`, `thm-reduced-khovanov-basepoint-and-reidemeister-invariance`, `thm-khovanov-chain-complex-from-diagram-procedure-properties`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-6/ Khovanov arXiv:math/9908171v2. Future content authoring must supply local proofs; no citation-only fallback.

### `ex-knot-kt-37-worked-cases`

**Kind:** example. **Owner:** `khovanov-homology-and-jones-categorification-examples` (KT-37).

Unreduced integral unknot Kh is Z in quantum degrees±1 and homological degree0; reduced unknot Kh is one Z in its normalized degree.

**Direct prerequisites:** `def-khovanov-frobenius-algebra-and-cube-of-resolutions`, `alg-khovanov-chain-complex-from-diagram`, `lem-khovanov-cube-differential-squares-to-zero`, `thm-khovanov-homology-is-an-oriented-link-invariant`, `thm-khovanov-euler-characteristic-is-jones`, `lem-khovanov-reidemeister-chain-homotopies`, `lem-khovanov-graded-euler-characteristic-jones-normalization`, `def-reduced-khovanov-cohomology-of-a-knot`, `thm-reduced-khovanov-basepoint-and-reidemeister-invariance`, `thm-khovanov-chain-complex-from-diagram-procedure-properties`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-6/ Khovanov arXiv:math/9908171v2. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-ribbon-evaluation-from-colored-braid-word-procedure-properties`

**Kind:** theorem. **Owner:** `ribbon-categories-and-reshetikhin-turaev-knot-invariants` (KT-33).

For exactly the admissible encoded inputs of alg-ribbon-evaluation-from-colored-braid-word, execution terminates, rejects precisely the stated syntactic failures and returns the prescribed finite output. Any identification with a topological invariant, recognition completeness, or asymptotic complexity is only the separately proved domain result, not inferred from finite execution.

**Direct prerequisites:** `alg-ribbon-evaluation-from-colored-braid-word`, `def-kauffman-bracket-smoothing-and-loop-value`, `thm-normalized-bracket-is-an-oriented-link-invariant`, `def-kauffman-regular-isotopy-and-dubrovnik-conventions`, `thm-a-ribbon-object-defines-a-unique-framed-tangle-evaluation-functor`, `thm-ribbon-evaluation-is-an-invariant-of-framed-colored-links`, `thm-writhe-normalized-ribbon-trace-is-an-unframed-link-invariant`, `def-colored-framed-knot-evaluation-from-ribbon-category`, `def-axiom-of-choice`.

**Proof/definition route:** Use the explicit finite loop/state/word or bounded search measure in the procedure; prove each branch preserves the stated output representation and all arithmetic is effective. Cite the domain correctness and completeness modules separately when claiming invariant/recognition meaning.

**Source boundary:** reader-3/ Johnson–Freyd RT notes Jan.15, 2016, pp.1–4; published framed ribbon-functor suppliers. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-ribbon-evaluation-independent-of-colored-braid-representative`

**Kind:** theorem. **Owner:** `ribbon-categories-and-reshetikhin-turaev-knot-invariants` (KT-33).

proves correctness from the braid relations and Markov stabilization scalars.

**Direct prerequisites:** `def-kauffman-bracket-smoothing-and-loop-value`, `thm-normalized-bracket-is-an-oriented-link-invariant`, `def-kauffman-regular-isotopy-and-dubrovnik-conventions`, `thm-a-ribbon-object-defines-a-unique-framed-tangle-evaluation-functor`, `thm-ribbon-evaluation-is-an-invariant-of-framed-colored-links`, `thm-writhe-normalized-ribbon-trace-is-an-unframed-link-invariant`, `def-colored-framed-knot-evaluation-from-ribbon-category`, `lem-quantum-sl2-ribbon-trace-matches-hecke-and-bracket`, `alg-ribbon-evaluation-from-colored-braid-word`, `def-axiom-of-choice`.

**Proof/definition route:** reuse the published
`thm-ribbon-evaluation-is-an-invariant-of-framed-colored-links` and
`thm-writhe-normalized-ribbon-trace-is-an-unframed-link-invariant` only after
checking their actual color and twist hypotheses. The new bridge is a finite
word-level calculation: verify the braid generator maps satisfy Yang–Baxter,
the trace is cyclic, and the two stabilization eigenvalues are cancelled by
the declared twist. The published draft modular-category and BMW items are
not suppliers. **Local prerequisite modules:** `lem-quantum-sl2-ribbon-trace-matches-hecke-and-bracket`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-3/ Johnson–Freyd RT notes Jan.15, 2016, pp.1–4; published framed ribbon-functor suppliers. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-root-of-unity-skein-tqft-gluing-and-surgery-invariance`

**Kind:** theorem. **Owner:** `root-of-unity-skein-tqft-for-three-manifolds` (KT-32).

For the fixed admissible root and normalized Gauss sums, radical-quotient handlebody state spaces and Kirby-color maps form the weighted/Lagrangian extended3-cobordism TQFT with explicit Maslov/signature anomaly correction. Forgetting the extension gives projective ordinary-oriented data unless anomaly removal is separately proved.

**Direct prerequisites:** `def-extended-skein-cobordism-anomaly-data`, `def-skein-tqft-state-space-and-handlebody-pairing`, `lem-root-handlebody-pairing-nondegeneracy-and-gluing`, `lem-root-skein-surgery-kirby-color-invariance`, `thm-kirby-moves-classify-framed-link-presentations`, `def-axiom-of-choice`.

**Proof/definition route:** prove the Jones–Wenzl recursion and
partial-trace identities for every denominator actually used; establish a
finite trivalent-spine spanning set for the handlebody skein module; compute
the radical and nondegenerate quotient using the fusion rules; prove the
handlebody pairing is compatible with gluing and mapping-class actions; then
prove surgery invariance under Kirby moves with the exact root-of-unity
normalization. Split the proof into local modules for module generation,
pairing nondegeneracy, Morita/handlebody gluing and surgery normalization.
Pohorence's 16-page notes define the bridge but cite the hard Blanchet–Habegger–
Masbaum–Vogel module-generation/Morita results; the citation does not close
these modules. Chen's thesis constructs Turaev–Viro state modules of marked
surfaces from a finite fusion category; it is a different construction and
does not prove this 3-manifold Kauffman-bracket skein TQFT. **Local prerequisite modules:** `lem-root-jones-wenzl-recursion-and-negligible-ideal`, `lem-root-fusion-rules-and-simple-object-completeness`, `lem-root-handlebody-spine-state-space-finite-generation`, `lem-root-handlebody-pairing-nondegeneracy-and-gluing`, `lem-root-skein-surgery-kirby-color-invariance`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-3/ Chen arXiv:1502.06845v1 §§2.1,5.1; reader-3/ Pohorence Jan.2016; BHMW/Morita proofs cited/sketched. Future content authoring must supply local proofs; no citation-only fallback.

### `cex-knot-kt-32-boundary-case`

**Kind:** counterexample. **Owner:** `root-of-unity-skein-tqft-for-three-manifolds-examples` (KT-32).

For p=6, quantum integer[3]=0, so the recursion requiring its inverse is undefined; no cancellation of0/0 is permitted.

**Direct prerequisites:** `def-sl-two-root-of-unity-skein-parameter`, `lem-jones-wenzl-idempotents-exist-below-root-order`, `def-semisimplified-temperley-lieb-fusion-category`, `def-skein-tqft-state-space-and-handlebody-pairing`, `thm-root-of-unity-skein-tqft-gluing-and-surgery-invariance`, `lem-root-jones-wenzl-recursion-and-negligible-ideal`, `lem-root-fusion-rules-and-simple-object-completeness`, `lem-root-handlebody-spine-state-space-finite-generation`, `lem-root-handlebody-pairing-nondegeneracy-and-gluing`, `lem-root-skein-surgery-kirby-color-invariance`, `def-extended-skein-cobordism-anomaly-data`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-3/ Chen arXiv:1502.06845v1 §§2.1,5.1; reader-3/ Pohorence Jan.2016; BHMW/Morita proofs cited/sketched. Future content authoring must supply local proofs; no citation-only fallback.

### `ex-knot-kt-32-worked-cases`

**Kind:** example. **Owner:** `root-of-unity-skein-tqft-for-three-manifolds-examples` (KT-32).

In the BHMV convention A primitive2p root, p even, labels0,…,p/2−2: p=4 has only0, p=6 has0,1; fusion1⊗1=0 at p=6 and torus state-space dimension2.

**Direct prerequisites:** `def-sl-two-root-of-unity-skein-parameter`, `lem-jones-wenzl-idempotents-exist-below-root-order`, `def-semisimplified-temperley-lieb-fusion-category`, `def-skein-tqft-state-space-and-handlebody-pairing`, `thm-root-of-unity-skein-tqft-gluing-and-surgery-invariance`, `lem-root-jones-wenzl-recursion-and-negligible-ideal`, `lem-root-fusion-rules-and-simple-object-completeness`, `lem-root-handlebody-spine-state-space-finite-generation`, `lem-root-handlebody-pairing-nondegeneracy-and-gluing`, `lem-root-skein-surgery-kirby-color-invariance`, `def-extended-skein-cobordism-anomaly-data`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-3/ Chen arXiv:1502.06845v1 §§2.1,5.1; reader-3/ Pohorence Jan.2016; BHMW/Morita proofs cited/sketched. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-seifert-algorithm-boundary-euler-and-genus`

**Kind:** theorem. **Owner:** `seifert-surfaces-and-knot-genus` (KT-04).

A connected output from s disks and c bands has χ=s−c and genus (1−s+c)/2; hence g(K) is at most that number.

**Direct prerequisites:** `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `thm-linking-number-is-invariant-and-writhe-is-not`, `def-seifert-smoothing-and-seifert-circles-of-an-oriented-link-diagram`, `lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups`, `def-oriented-seifert-surface-and-knot-genus`, `lem-seifert-bands-embedded-orientable-boundary-correct`, `def-countable-choice`.

**Proof/definition route:** Count zero/one-handles and use the compact-boundary-surface Euler formula; the surface is an admissible competitor, not proof of genus minimality.

**Source boundary:** reader-1/ Calegari 2025 §3.1; reader-1/ Gardner-Livingston §4.3, visually read proof supplement. Future content authoring must supply local proofs; no citation-only fallback.

### `alg-grid-knot-floer-complex`

**Kind:** algorithm. **Owner:** `grid-homology-and-combinatorial-knot-floer-theory` (KT-39).

Input an n×n toroidal grid with disjoint X/O markings, exactly one each per row/column, and knot component count1; otherwise return a named invalid/link-input branch. Select mode tilde, associated-graded-minus or full-filtered-minus. Enumerate permutation states and embedded empty-of-state rectangles. Tilde excludes X andO; associated-graded-minus excludesX and weightsO byU_i; full-filtered-minus allowsX, weightsO and records the Alexander filtration drop. Output exactF2 orF2[U_i] differential matrices and Maslov/Alexander data, together with the statedV/free stabilization factors. Do not identify these three versions.

**Direct prerequisites:** `def-oriented-seifert-surface-and-knot-genus`, `thm-seifert-algorithm-boundary-euler-and-genus`, `def-grid-diagram-for-an-oriented-knot`, `def-admissible-pointed-heegaard-floer-data`, `def-countable-choice`.

**Proof/definition route:** order the finite permutation set; prove
the differential's Maslov grading and filtration behavior; pair broken and
unbroken rectangles for $\partial^2$. For invariance, give explicit chain
maps for commutation and stabilization, verify both compositions are chain
homotopic to the identity by domains, and then compare the grid Heegaard
diagram with the analytic multipointed Heegaard Floer complex. The last
comparison requires local modules for admissibility, holomorphic-disk
transversality, compactness, gluing and Heegaard-move invariance; MOS 2007
refers to other grid-invariance proofs, and an intro sketch is not accepted as
proof. **Local prerequisite modules:** `lem-grid-rectangle-boundary-square-zero-and-filtration`, `thm-grid-commutation-stabilization-invariance-proof`, `lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing`, `thm-grid-homology-independent-of-grid-and-equals-knot-floer`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-6/ MOS arXiv:math/0607691v2, full text; reader-6/ Manolescu 2016 introductory survey; not an analytic proof supplier. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-grid-rectangle-boundary-square-zero-and-filtration`

**Kind:** lemma. **Owner:** `grid-homology-and-combinatorial-knot-floer-theory` (KT-39).

In each specified grid version, pairs of rectangle decompositions cancel over F2, except the annuli terms which cancel with equal U actions; Maslov/Alexander changes match the declared differential.

**Direct prerequisites:** `def-oriented-seifert-surface-and-knot-genus`, `thm-seifert-algorithm-boundary-euler-and-genus`, `def-grid-diagram-for-an-oriented-knot`, `def-admissible-pointed-heegaard-floer-data`, `def-countable-choice`.

**Proof/definition route:** Classify index-two domains and their two decompositions, track O weights and X exclusions, and treat annular degenerations. Distinguish tilde, associated-graded minus and full filtered differentials.

**Source boundary:** reader-6/ MOS arXiv:math/0607691v2, full text; reader-6/ Manolescu 2016 introductory survey; not an analytic proof supplier. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing`

**Kind:** lemma. **Owner:** `grid-homology-and-combinatorial-knot-floer-theory` (KT-39).

For admissible pointed Heegaard data and generic almost complex structure, zero/one-dimensional moduli of index-one/two disks with specified basepoint multiplicities are regular, compact up to broken strips and admit the gluing required for d²/invariance.

**Direct prerequisites:** `def-oriented-seifert-surface-and-knot-genus`, `thm-seifert-algorithm-boundary-euler-and-genus`, `def-grid-diagram-for-an-oriented-knot`, `def-admissible-pointed-heegaard-floer-data`, `def-countable-choice`.

**Proof/definition route:** Define Sym^g(Σ), product tori, homotopy disk classes, Maslov index and periodic-domain admissibility; prove Fredholm transversality, energy bounds excluding forbidden bubbling, Gromov compactness and oriented/mod2 gluing. No analytic claim follows from rectangle combinatorics alone.

**Source boundary:** reader-6/ MOS arXiv:math/0607691v2, full text; reader-6/ Manolescu 2016 introductory survey; not an analytic proof supplier. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-seifert-cut-open-cover-alexander-module-presentation`

**Kind:** lemma. **Owner:** `seifert-matrices-and-the-alexander-module` (KT-06).

With V_ij=lk(a_i^+,a_j) and a fixed positive deck direction, the stacked bicollar complement has H1 presented by the corresponding V−tV^T (or its explicitly transported transpose) matrix.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `thm-linking-number-is-invariant-and-writhe-is-not`, `def-oriented-seifert-surface-and-knot-genus`, `thm-seifert-algorithm-boundary-euler-and-genus`, `def-one-variable-alexander-module-of-an-oriented-link`, `def-knot-seifert-pairing-and-matrix`, `def-axiom-of-choice`.

**Proof/definition route:** Choose dual linking cycles in the cut-open complement by Alexander duality; compute both push-off inclusions on that basis, then the Mayer–Vietoris difference i_+−t i_−. Prove no extra H0 relation survives for connected F.

**Source boundary:** reader-2/ Livingston, Seifert Forms and Concordance (2002), pp.403–408; current one-variable Alexander module supplier. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-seifert-matrix-s-equivalence-under-isotopy`

**Kind:** lemma. **Owner:** `seifert-matrices-and-the-alexander-module` (KT-06).

Two connected Seifert surfaces for the same oriented knot have integrally S-equivalent Seifert matrices.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `thm-linking-number-is-invariant-and-writhe-is-not`, `def-oriented-seifert-surface-and-knot-genus`, `thm-seifert-algorithm-boundary-euler-and-genus`, `def-one-variable-alexander-module-of-an-oriented-link`, `def-knot-seifert-pairing-and-matrix`, `lem-seifert-cut-open-cover-alexander-module-presentation`, `def-axiom-of-choice`.

**Proof/definition route:** Put surfaces transverse with common boundary collar, construct a common stabilization by tubing along intersection arcs, and show each tube is an elementary enlargement and each basis change unimodular congruence. This is a surface theorem, not just polynomial invariance.

**Source boundary:** reader-2/ Livingston, Seifert Forms and Concordance (2002), pp.403–408; current one-variable Alexander module supplier. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-knot-infinite-cyclic-cover-cut-and-paste-presentation`

**Kind:** lemma. **Owner:** `seifert-matrices-and-the-alexander-module` (KT-06).

constructs a finite $ \mathbb Z[t^{\pm1}]$-presentation of the first homology of the infinite cyclic cover by stacking copies of $S^3\setminus F$; its matrix is the exact signed form $V-tV^T$ (or the declared transpose convention).

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `thm-linking-number-is-invariant-and-writhe-is-not`, `def-oriented-seifert-surface-and-knot-genus`, `thm-seifert-algorithm-boundary-euler-and-genus`, `def-one-variable-alexander-module-of-an-oriented-link`, `def-knot-seifert-pairing-and-matrix`, `lem-seifert-cut-open-cover-alexander-module-presentation`, `lem-seifert-matrix-s-equivalence-under-isotopy`, `def-axiom-of-choice`.

**Proof/definition route:** first prove the cut-open exterior is
obtained by gluing the positive and negative copies of $F$ to the complement
of its bicollar. The Mayer–Vietoris map on $H_1(F)$ has the two push-off maps;
deck translation multiplies exactly one by $t$. The complementary homology is
identified using Alexander duality and the relative sequence, with the
meridian/longitude boundary map checked explicitly. This proves the presentation
without Fox calculus. The current Alexander module definition fixes the cover
and deck generator; `def-alexander-polynomial-from-the-first-elementary-ideal` supplies only the ideal convention. **Local prerequisite modules:** `lem-seifert-cut-open-cover-alexander-module-presentation`, `lem-seifert-matrix-s-equivalence-under-isotopy`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-2/ Livingston, Seifert Forms and Concordance (2002), pp.403–408; current one-variable Alexander module supplier. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-seifert-matrix-skew-part-is-surface-intersection`

**Kind:** lemma. **Owner:** `seifert-matrices-and-the-alexander-module` (KT-06).

proves that $V-V^T$ is the signed unimodular intersection matrix of $F$, with the sign fixed by the positive push-off convention.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `thm-linking-number-is-invariant-and-writhe-is-not`, `def-oriented-seifert-surface-and-knot-genus`, `thm-seifert-algorithm-boundary-euler-and-genus`, `def-one-variable-alexander-module-of-an-oriented-link`, `def-knot-seifert-pairing-and-matrix`, `lem-seifert-cut-open-cover-alexander-module-presentation`, `lem-seifert-matrix-s-equivalence-under-isotopy`, `def-axiom-of-choice`.

**Proof/definition route:** first prove the cut-open exterior is
obtained by gluing the positive and negative copies of $F$ to the complement
of its bicollar. The Mayer–Vietoris map on $H_1(F)$ has the two push-off maps;
deck translation multiplies exactly one by $t$. The complementary homology is
identified using Alexander duality and the relative sequence, with the
meridian/longitude boundary map checked explicitly. This proves the presentation
without Fox calculus. The current Alexander module definition fixes the cover
and deck generator; `def-alexander-polynomial-from-the-first-elementary-ideal` supplies only the ideal convention. **Local prerequisite modules:** `lem-seifert-cut-open-cover-alexander-module-presentation`, `lem-seifert-matrix-s-equivalence-under-isotopy`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-2/ Livingston, Seifert Forms and Concordance (2002), pp.403–408; current one-variable Alexander module supplier. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-grid-commutation-stabilization-invariance-proof`

**Kind:** theorem. **Owner:** `grid-homology-and-combinatorial-knot-floer-theory` (KT-39).

Grid commutation/stabilization gives the explicit chain/filtered equivalences with the correct V/free factors and variable identifications.

**Direct prerequisites:** `def-oriented-seifert-surface-and-knot-genus`, `thm-seifert-algorithm-boundary-euler-and-genus`, `def-grid-diagram-for-an-oriented-knot`, `def-admissible-pointed-heegaard-floer-data`, `lem-grid-rectangle-boundary-square-zero-and-filtration`, `def-countable-choice`.

**Proof/definition route:** Count pentagons/hexagons for commutation and snail/stabilization domains, prove chain-map equations by boundary pairing, then construct inverse homotopies. Full MOST source recovery remains necessary; MOS cites this combinatorial proof.

**Source boundary:** reader-6/ MOS arXiv:math/0607691v2, full text; reader-6/ Manolescu 2016 introductory survey; not an analytic proof supplier. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-grid-homology-independent-of-grid-and-equals-knot-floer`

**Kind:** theorem. **Owner:** `grid-homology-and-combinatorial-knot-floer-theory` (KT-39).

The specified grid differential agrees with the multipointed Heegaard disk differential, yielding the declared HFKhat⊗V^(n−1) or filtered CFK version with its exact stable factors.

**Direct prerequisites:** `def-oriented-seifert-surface-and-knot-genus`, `thm-seifert-algorithm-boundary-euler-and-genus`, `def-grid-diagram-for-an-oriented-knot`, `def-admissible-pointed-heegaard-floer-data`, `thm-grid-commutation-stabilization-invariance-proof`, `lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing`, `def-countable-choice`.

**Proof/definition route:** Stretch the grid diagram, identify every relevant index-one domain with an empty rectangle and show its mod2 count is one; then use Heegaard-move invariance and the multipointed stabilization formula.

**Source boundary:** reader-6/ MOS arXiv:math/0607691v2, full text; reader-6/ Manolescu 2016 introductory survey; not an analytic proof supplier. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-grid-rectangle-differential-squares-to-zero`

**Kind:** lemma. **Owner:** `grid-homology-and-combinatorial-knot-floer-theory` (KT-39).

pairs the two decompositions of every index-two domain and proves $\partial^2=0$.

**Direct prerequisites:** `def-oriented-seifert-surface-and-knot-genus`, `thm-seifert-algorithm-boundary-euler-and-genus`, `def-grid-diagram-for-an-oriented-knot`, `def-admissible-pointed-heegaard-floer-data`, `thm-grid-homology-independent-of-grid-and-equals-knot-floer`, `lem-grid-rectangle-boundary-square-zero-and-filtration`, `thm-grid-commutation-stabilization-invariance-proof`, `lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing`, `alg-grid-knot-floer-complex`, `def-countable-choice`.

**Proof/definition route:** order the finite permutation set; prove
the differential's Maslov grading and filtration behavior; pair broken and
unbroken rectangles for $\partial^2$. For invariance, give explicit chain
maps for commutation and stabilization, verify both compositions are chain
homotopic to the identity by domains, and then compare the grid Heegaard
diagram with the analytic multipointed Heegaard Floer complex. The last
comparison requires local modules for admissibility, holomorphic-disk
transversality, compactness, gluing and Heegaard-move invariance; MOS 2007
refers to other grid-invariance proofs, and an intro sketch is not accepted as
proof. **Local prerequisite modules:** `lem-grid-rectangle-boundary-square-zero-and-filtration`, `thm-grid-commutation-stabilization-invariance-proof`, `lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing`, `thm-grid-homology-independent-of-grid-and-equals-knot-floer`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-6/ MOS arXiv:math/0607691v2, full text; reader-6/ Manolescu 2016 introductory survey; not an analytic proof supplier. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-grid-knot-floer-complex-procedure-properties`

**Kind:** theorem. **Owner:** `grid-homology-and-combinatorial-knot-floer-theory` (KT-39).

For exactly the admissible encoded inputs of alg-grid-knot-floer-complex, execution terminates, rejects precisely the stated syntactic failures and returns the prescribed finite output. Any identification with a topological invariant, recognition completeness, or asymptotic complexity is only the separately proved domain result, not inferred from finite execution.

**Direct prerequisites:** `alg-grid-knot-floer-complex`, `def-oriented-seifert-surface-and-knot-genus`, `thm-seifert-algorithm-boundary-euler-and-genus`, `def-grid-diagram-for-an-oriented-knot`, `def-admissible-pointed-heegaard-floer-data`, `def-countable-choice`.

**Proof/definition route:** Use the explicit finite loop/state/word or bounded search measure in the procedure; prove each branch preserves the stated output representation and all arithmetic is effective. Cite the domain correctness and completeness modules separately when claiming invariant/recognition meaning.

**Source boundary:** reader-6/ MOS arXiv:math/0607691v2, full text; reader-6/ Manolescu 2016 introductory survey; not an analytic proof supplier. Future content authoring must supply local proofs; no citation-only fallback.

### `cex-knot-kt-39-boundary-case`

**Kind:** counterexample. **Owner:** `grid-homology-and-combinatorial-knot-floer-theory-examples` (KT-39).

Deleting the V^(n−1) factor makes grid stabilization appear to change the knot invariant; tilde output is not the unstabilized hat group.

**Direct prerequisites:** `def-grid-diagram-for-an-oriented-knot`, `alg-grid-knot-floer-complex`, `lem-grid-rectangle-differential-squares-to-zero`, `thm-grid-homology-independent-of-grid-and-equals-knot-floer`, `lem-grid-rectangle-boundary-square-zero-and-filtration`, `thm-grid-commutation-stabilization-invariance-proof`, `lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing`, `def-admissible-pointed-heegaard-floer-data`, `thm-grid-knot-floer-complex-procedure-properties`, `def-countable-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-6/ MOS arXiv:math/0607691v2, full text; reader-6/ Manolescu 2016 introductory survey; not an analytic proof supplier. Future content authoring must supply local proofs; no citation-only fallback.

### `ex-knot-kt-39-worked-cases`

**Kind:** example. **Owner:** `grid-homology-and-combinatorial-knot-floer-theory-examples` (KT-39).

For the2×2 unknot grid the tilde homology is HFKhat(unknot)⊗V, so rank2; the hat invariant itself has rank1.

**Direct prerequisites:** `def-grid-diagram-for-an-oriented-knot`, `alg-grid-knot-floer-complex`, `lem-grid-rectangle-differential-squares-to-zero`, `thm-grid-homology-independent-of-grid-and-equals-knot-floer`, `lem-grid-rectangle-boundary-square-zero-and-filtration`, `thm-grid-commutation-stabilization-invariance-proof`, `lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing`, `def-admissible-pointed-heegaard-floer-data`, `thm-grid-knot-floer-complex-procedure-properties`, `def-countable-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-6/ MOS arXiv:math/0607691v2, full text; reader-6/ Manolescu 2016 introductory survey; not an analytic proof supplier. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-knot-concordance-is-an-abelian-group`

**Kind:** theorem. **Owner:** `smooth-and-topological-knot-concordance` (KT-21).

Smooth and locally-flat topological concordance are separate equivalence relations compatible with connected sum; the inverse is reverse mirror and slice is concordant to unknot.

**Direct prerequisites:** `def-oriented-seifert-surface-and-knot-genus`, `thm-seifert-algorithm-boundary-euler-and-genus`, `def-knot-connected-sum-and-prime-knot`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `def-locally-flat-proper-surface-and-concordance-collars`, `def-locally-flat-pl-knot-concordance`, `def-countable-choice`.

**Proof/definition route:** Construct collared annulus gluings, ambient disjoint-ball sums and a ribbon disk for K#(reverse mirror K). Define local flatness by the Euclidean/half-space pair charts and prove the gluing preserves it; abstract bordism is insufficient.

**Source boundary:** reader-5/ Livingston Survey of Classical Knot Concordance v4, §§2–3. Future content authoring must supply local proofs; no citation-only fallback.

### `cex-knot-kt-21-boundary-case`

**Kind:** counterexample. **Owner:** `smooth-and-topological-knot-concordance-examples` (KT-21).

Any two oriented circles are abstractly cobordant, but unknot and trefoil are not smoothly concordant because their Seifert signatures differ; abstract cobordism is weaker than embedded annulus concordance.

**Direct prerequisites:** `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `thm-knot-concordance-is-an-abelian-group`, `def-locally-flat-proper-surface-and-concordance-collars`, `def-locally-flat-pl-knot-concordance`, `def-countable-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-5/ Livingston Survey of Classical Knot Concordance v4, §§2–3. Future content authoring must supply local proofs; no citation-only fallback.

### `ex-knot-kt-21-worked-cases`

**Kind:** example. **Owner:** `smooth-and-topological-knot-concordance-examples` (KT-21).

Exhibit the collared ribbon disk for K#(reverse mirror K), proving its smooth and hence locally-flat slice class is zero.

**Direct prerequisites:** `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `thm-knot-concordance-is-an-abelian-group`, `def-locally-flat-proper-surface-and-concordance-collars`, `def-locally-flat-pl-knot-concordance`, `def-countable-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-5/ Livingston Survey of Classical Knot Concordance v4, §§2–3. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-barnatan-carter-saito-movie-moves-up-to-sign`

**Kind:** lemma. **Owner:** `knot-cobordism-maps-and-functoriality` (KT-40).

The formal Kh tangle complex sends isotopic oriented surface movies to homotopic maps modulo a single global sign.

**Direct prerequisites:** `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `thm-knot-concordance-is-an-abelian-group`, `def-khovanov-frobenius-algebra-and-cube-of-resolutions`, `def-reduced-khovanov-cohomology-of-a-knot`, `thm-khovanov-homology-is-an-oriented-link-invariant`, `def-admissible-pointed-heegaard-floer-data`, `def-grid-diagram-for-an-oriented-knot`, `thm-grid-homology-independent-of-grid-and-equals-knot-floer`, `lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing`, `def-generic-movie-of-an-oriented-knot-cobordism`, `def-khovanov-cobordism-map-up-to-sign`, `def-knot-floer-cobordism-map`, `def-decorated-link-cobordism-and-floer-target`, `def-axiom-of-choice`.

**Proof/definition route:** Assign births/deaths/saddles/R maps, check all Carter–Saito movie moves in the S/T/4Tu quotient, and apply the Frobenius TQFT. This proves up-to-sign, not strict sign-free ordinary even Kh functoriality.

**Source boundary:** reader-6/ Bar–Natan arXiv:math/0410495v2, Theorems 4–5; reader-6/ Zemke arXiv:1610.05207v3. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-knot-floer-holomorphic-triangle-transversality-compactness-gluing`

**Kind:** lemma. **Owner:** `knot-cobordism-maps-and-functoriality` (KT-40).

Admissible pointed Heegaard triples/multidiagrams define the triangle/polygon counts, with boundary degenerations precisely giving the required A∞/composition relations.

**Direct prerequisites:** `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `thm-knot-concordance-is-an-abelian-group`, `def-khovanov-frobenius-algebra-and-cube-of-resolutions`, `def-reduced-khovanov-cohomology-of-a-knot`, `thm-khovanov-homology-is-an-oriented-link-invariant`, `def-admissible-pointed-heegaard-floer-data`, `def-grid-diagram-for-an-oriented-knot`, `thm-grid-homology-independent-of-grid-and-equals-knot-floer`, `lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing`, `def-generic-movie-of-an-oriented-knot-cobordism`, `def-khovanov-cobordism-map-up-to-sign`, `def-knot-floer-cobordism-map`, `def-decorated-link-cobordism-and-floer-target`, `def-axiom-of-choice`.

**Proof/definition route:** Define triangle classes and Spin^c data, prove regularity, energy bounds, compactification and gluing, then classify boundary strata. The unread Zemke lead is future recovery, not completed evidence for decorations or coefficients.

**Source boundary:** reader-6/ Bar–Natan arXiv:math/0410495v2, Theorems 4–5; reader-6/ Zemke arXiv:1610.05207v3. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-knot-floer-cobordism-naturality-and-movie-invariance`

**Kind:** lemma. **Owner:** `knot-cobordism-maps-and-functoriality` (KT-40).

For the chosen decorated link-cobordism category, the constructed Floer maps are invariant under its complete Cerf/move relations and compose with the stated Spin^c sums.

**Direct prerequisites:** `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `thm-knot-concordance-is-an-abelian-group`, `def-khovanov-frobenius-algebra-and-cube-of-resolutions`, `def-reduced-khovanov-cohomology-of-a-knot`, `thm-khovanov-homology-is-an-oriented-link-invariant`, `def-admissible-pointed-heegaard-floer-data`, `def-grid-diagram-for-an-oriented-knot`, `thm-grid-homology-independent-of-grid-and-equals-knot-floer`, `lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing`, `def-generic-movie-of-an-oriented-knot-cobordism`, `def-khovanov-cobordism-map-up-to-sign`, `def-knot-floer-cobordism-map`, `def-decorated-link-cobordism-and-floer-target`, `lem-knot-floer-holomorphic-triangle-transversality-compactness-gluing`, `def-axiom-of-choice`.

**Proof/definition route:** Fix dividing sets and w/z basepoints; check quasi-stabilization, basepoint-moving, band and handle maps against the exact move list. A surface with no dividing data does not determine this map.

**Source boundary:** reader-6/ Bar–Natan arXiv:math/0410495v2, Theorems 4–5; reader-6/ Zemke arXiv:1610.05207v3. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-knot-floer-large-surgery-and-filtered-cobordism-input`

**Kind:** lemma. **Owner:** `tau-invariant-and-the-four-ball-genus` (KT-41).

The S3 filtered knot complex and large-surgery maps satisfy the cobordism filtration shift/adjunction estimate used for τ; all smooth-definite hypotheses are carried.

**Direct prerequisites:** `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `thm-knot-concordance-is-an-abelian-group`, `def-admissible-pointed-heegaard-floer-data`, `def-grid-diagram-for-an-oriented-knot`, `thm-grid-homology-independent-of-grid-and-equals-knot-floer`, `lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing`, `def-decorated-link-cobordism-and-floer-target`, `lem-knot-floer-cobordism-naturality-and-movie-invariance`, `def-knot-floer-filtration-and-tau`, `def-axiom-of-choice`.

**Proof/definition route:** Construct surgery-adapted Heegaard triples, identify filtration regions and calculate c1², χ and σ grading shifts; prove the needed nonvanishing and adjunction theorem. The simply-connected Donaldson contract cannot silently replace a broader definite-lattice input in a general-W statement.

**Source boundary:** reader-6/ Ozsváth–Szabó arXiv:math/0301149v4; reader-6/ Hom arXiv:1512.00383v3. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-lee-cobordism-filtration-genus-bound`

**Kind:** lemma. **Owner:** `lee-deformation-and-rasmussen-s-invariant` (KT-38).

A connected smooth oriented knot cobordism of genus g gives

**Direct prerequisites:** `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `thm-knot-concordance-is-an-abelian-group`, `def-khovanov-frobenius-algebra-and-cube-of-resolutions`, `def-reduced-khovanov-cohomology-of-a-knot`, `thm-khovanov-homology-is-an-oriented-link-invariant`, `def-filtered-chain-complex`, `thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology`, `def-lee-deformed-khovanov-complex`, `def-rasmussen-s-invariant`, `def-odd-khovanov-barnatan-and-leo-triple`, `def-axiom-of-choice`.

**Proof/definition route:** s(K1)−s(K0)|≤2g; slice disks imply |s(K)|≤2g4. | Prove birth/saddle/death filtration degrees and nonzero action on canonical orientation classes; compose a fixed Morse decomposition. This Lee-specific argument needs the required maps but need not assume later general strict functoriality.

**Source boundary:** reader-6/ Rasmussen arXiv:math/0402131v1; reader-6/ Hedden–Ording arXiv:math/0512348v1, Theorem 1.1; Dunfield–Lipshitz–Schütz arXiv:2312.09114v3, Definitions3.1/3.2 and Theorem3.8; reader-6 full read, auditor selected decisive passages.. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-lee-filtered-spectral-sequence-and-two-orientation-classes`

**Kind:** lemma. **Owner:** `lee-deformation-and-rasmussen-s-invariant` (KT-38).

Over Q, Lee's X²=1 deformation has filtered homology rank 2^r for an r-component link; for a knot its two canonical orientation classes define filtration levels differing by two.

**Direct prerequisites:** `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `thm-knot-concordance-is-an-abelian-group`, `def-khovanov-frobenius-algebra-and-cube-of-resolutions`, `def-reduced-khovanov-cohomology-of-a-knot`, `thm-khovanov-homology-is-an-oriented-link-invariant`, `def-filtered-chain-complex`, `thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology`, `def-lee-deformed-khovanov-complex`, `def-rasmussen-s-invariant`, `def-odd-khovanov-barnatan-and-leo-triple`, `def-axiom-of-choice`.

**Proof/definition route:** Diagonalize the Frobenius algebra using (1±X)/2, cancel incompatible edge-colorings and identify the surviving orientations; verify filtration and derive the bounded spectral sequence with the exact page convention.

**Source boundary:** reader-6/ Rasmussen arXiv:math/0402131v1; reader-6/ Hedden–Ording arXiv:math/0512348v1, Theorem 1.1; Dunfield–Lipshitz–Schütz arXiv:2312.09114v3, Definitions3.1/3.2 and Theorem3.8; reader-6 full read, auditor selected decisive passages.. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-odd-khovanov-and-barnatan-localization-foundations`

**Kind:** lemma. **Owner:** `lee-deformation-and-rasmussen-s-invariant` (KT-38).

Odd Kh and the Bar–Natan deformation provide the finite-free complexes/mod2 comparison of a knot LEO triple; their pointed tensor/Kunneth and cobordism maps satisfy the declared local-equivalence hypotheses.

**Direct prerequisites:** `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `thm-knot-concordance-is-an-abelian-group`, `def-khovanov-frobenius-algebra-and-cube-of-resolutions`, `def-reduced-khovanov-cohomology-of-a-knot`, `thm-khovanov-homology-is-an-oriented-link-invariant`, `def-filtered-chain-complex`, `thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology`, `def-lee-deformed-khovanov-complex`, `def-rasmussen-s-invariant`, `def-odd-khovanov-barnatan-and-leo-triple`, `def-axiom-of-choice`.

**Proof/definition route:** Construct the odd exterior-algebra cube with valid edge-sign assignments and all R homotopies; localize the Bar–Natan X(X−h) algebra and prove the generator/cobordism maps, then the connected-sum interface. DLS cites original odd/Putyra foundations; recover them or prove locally.

**Source boundary:** reader-6/ Rasmussen arXiv:math/0402131v1; reader-6/ Hedden–Ording arXiv:math/0512348v1, Theorem 1.1; Dunfield–Lipshitz–Schütz arXiv:2312.09114v3, Definitions3.1/3.2 and Theorem3.8; reader-6 full read, auditor selected decisive passages.. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-ribbon-singularity-local-resolution`

**Kind:** lemma. **Owner:** `ribbon-knots-and-slice-ribbon-problem` (KT-28).

A ribbon-immersed disk with finitely many ribbon double arcs pushes rel boundary to a properly embedded smooth disk in B4.

**Direct prerequisites:** `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `thm-knot-concordance-is-an-abelian-group`, `def-ribbon-disk-and-ribbon-knot`, `def-countable-choice`.

**Proof/definition route:** In each local pair chart one sheet arc has interior endpoints and the other boundary endpoints; separate by radial height consistently and extend using disjoint collars. Count the disk topology; adding a handle to the surface would change genus and is not the asserted resolution.

**Source boundary:** reader-5/ Livingston 2004 ribbon/sliceness discussion; reader-5/ Piccirillo arXiv:1808.02923v1. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-tau-connected-sum-filtered-tensor-product`

**Kind:** lemma. **Owner:** `tau-invariant-and-the-four-ball-genus` (KT-41).

CFK∞(K#J) is filtered-chain equivalent to CFK∞(K)⊗CFK∞(J), with Maslov/Alexander gradings and generator normalized, and τ adds.

**Direct prerequisites:** `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `thm-knot-concordance-is-an-abelian-group`, `def-admissible-pointed-heegaard-floer-data`, `def-grid-diagram-for-an-oriented-knot`, `thm-grid-homology-independent-of-grid-and-equals-knot-floer`, `lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing`, `def-decorated-link-cobordism-and-floer-target`, `lem-knot-floer-cobordism-naturality-and-movie-invariance`, `def-knot-floer-filtration-and-tau`, `def-axiom-of-choice`.

**Proof/definition route:** Neck-stretch the connected-sum Heegaard diagram, identify disk products and the normalized HF∞ generator; prove the matching filtration upper and lower bounds on cycles, not only basis elements.

**Source boundary:** reader-6/ Ozsváth–Szabó arXiv:math/0301149v4; reader-6/ Hom arXiv:1512.00383v3. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-epsilon-stable-equivalence-and-not-a-homomorphism`

**Kind:** lemma. **Owner:** `epsilon-and-upsilon-concordance-invariants` (KT-42).

Define ν,ν′ from the specified vertical/horizontal CFK maps and ε=2τ−ν−ν′∈{−1,0,1}; stable filtered equivalence preserves ε, ε=0 implies τ=0, but converse and additivity fail generally.

**Direct prerequisites:** `def-admissible-pointed-heegaard-floer-data`, `def-grid-diagram-for-an-oriented-knot`, `thm-grid-homology-independent-of-grid-and-equals-knot-floer`, `lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing`, `def-knot-floer-filtration-and-tau`, `lem-tau-connected-sum-filtered-tensor-product`, `def-epsilon-from-filtered-knot-floer-complex`, `def-upsilon-function-from-filtered-complex`, `def-axiom-of-choice`.

**Proof/definition route:** Prove the map dichotomy in simplified bases and stability under acyclic summands, then supply actual knot/complex witnesses for the nonconverses. State sign/mirror/tensor rules rather than label ε an integer homomorphism.

**Source boundary:** reader-6/ Ozsváth–Stipsicz–Szabó arXiv:1407.1795v3; reader-6/ Kubota arXiv:2412.08146v1; reader-6/ Hom arXiv:1512.00383v3; Ozsváth–Stipsicz–Szabó arXiv:1407.1795v3 and Kubota arXiv:2412.08146v1; reader-6 complete readings.. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-grid-upsilon-equals-oss-upsilon`

**Kind:** theorem. **Owner:** `epsilon-and-upsilon-concordance-invariants` (KT-42).

After identifying all gridU_i and accounting for the precise W factors, Kubota gridUpsilon equals original OSSUpsilon (arXiv:2412.08146v1).

**Direct prerequisites:** `def-admissible-pointed-heegaard-floer-data`, `def-grid-diagram-for-an-oriented-knot`, `thm-grid-homology-independent-of-grid-and-equals-knot-floer`, `lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing`, `def-knot-floer-filtration-and-tau`, `lem-tau-connected-sum-filtered-tensor-product`, `def-epsilon-from-filtered-knot-floer-complex`, `def-upsilon-function-from-filtered-complex`, `def-axiom-of-choice`.

**Proof/definition route:** Use the proved filtered grid/CFK equivalence, pass through t-modification and show the normalized non-torsion generator grading is unchanged by the stated factors; retain coefficients/filtration and no improved complexity claim.

**Source boundary:** reader-6/ Ozsváth–Stipsicz–Szabó arXiv:1407.1795v3; reader-6/ Kubota arXiv:2412.08146v1; reader-6/ Hom arXiv:1512.00383v3; Ozsváth–Stipsicz–Szabó arXiv:1407.1795v3 and Kubota arXiv:2412.08146v1; reader-6 complete readings.. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-khovanov-and-knot-floer-cobordism-map-scope`

**Kind:** theorem. **Owner:** `knot-cobordism-maps-and-functoriality` (KT-40).

Kh gives a functor modulo homotopy/sign; the separately constructed decorated Floer theory gives its own coefficient/basepoint/Spin^c-valued functor, with no identification of targets.

**Direct prerequisites:** `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `thm-knot-concordance-is-an-abelian-group`, `def-khovanov-frobenius-algebra-and-cube-of-resolutions`, `def-reduced-khovanov-cohomology-of-a-knot`, `thm-khovanov-homology-is-an-oriented-link-invariant`, `def-admissible-pointed-heegaard-floer-data`, `def-grid-diagram-for-an-oriented-knot`, `thm-grid-homology-independent-of-grid-and-equals-knot-floer`, `lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing`, `def-generic-movie-of-an-oriented-knot-cobordism`, `def-khovanov-cobordism-map-up-to-sign`, `def-knot-floer-cobordism-map`, `def-decorated-link-cobordism-and-floer-target`, `lem-knot-floer-cobordism-naturality-and-movie-invariance`, `lem-barnatan-carter-saito-movie-moves-up-to-sign`, `def-axiom-of-choice`.

**Proof/definition route:** Combine the two independent move checks, not a dependency from Kh movie algebra to Floer analytic counts. State target category and orientation signs separately.

**Source boundary:** reader-6/ Bar–Natan arXiv:math/0410495v2, Theorems 4–5; reader-6/ Zemke arXiv:1610.05207v3. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-barnatan-khovanov-cobordism-functoriality-up-to-sign`

**Kind:** theorem. **Owner:** `knot-cobordism-maps-and-functoriality` (KT-40).

proves this map depends only on the isotopy class of the cobordism and composes up to sign.

**Direct prerequisites:** `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `thm-knot-concordance-is-an-abelian-group`, `def-khovanov-frobenius-algebra-and-cube-of-resolutions`, `def-reduced-khovanov-cohomology-of-a-knot`, `thm-khovanov-homology-is-an-oriented-link-invariant`, `def-admissible-pointed-heegaard-floer-data`, `def-grid-diagram-for-an-oriented-knot`, `thm-grid-homology-independent-of-grid-and-equals-knot-floer`, `lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing`, `def-generic-movie-of-an-oriented-knot-cobordism`, `def-khovanov-cobordism-map-up-to-sign`, `def-knot-floer-cobordism-map`, `def-decorated-link-cobordism-and-floer-target`, `lem-barnatan-carter-saito-movie-moves-up-to-sign`, `lem-knot-floer-holomorphic-triangle-transversality-compactness-gluing`, `lem-knot-floer-cobordism-naturality-and-movie-invariance`, `thm-khovanov-and-knot-floer-cobordism-map-scope`, `def-axiom-of-choice`.

**Proof/definition route:** for Khovanov, assign maps to elementary
movie events and verify every Carter–Saito movie move using the formal tangle
complex; Bar–Natan's full 2005 Theorems 4–5 establish the canopoly functor
modulo chain homotopy and overall sign, so do not repeat Khovanov 1999's
resolved Conjecture 1 as an open claim. For knot Floer, split the proof into
Heegaard triple transversality, compactness and gluing; associativity of triangle
counts; naturality under Heegaard moves; basepoint action; and Cerf/movie move
checks for births, saddles and deaths. Zemke arXiv:1610.05207v3 is downloaded but explicitly unread in reader6. It is a future full-source recovery obligation, not evidence for a theorem certified by this source set. A decorated link cobordism includes basepoints and a dividing set separating w/z regions on the surface; those data and the exact version/coefficient/Spin^c sum conventions must be fixed before defining its Floer map. **Local prerequisite modules:** `lem-barnatan-carter-saito-movie-moves-up-to-sign`, `lem-knot-floer-holomorphic-triangle-transversality-compactness-gluing`, `lem-knot-floer-cobordism-naturality-and-movie-invariance`, `thm-khovanov-and-knot-floer-cobordism-map-scope`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-6/ Bar–Natan arXiv:math/0410495v2, Theorems 4–5; reader-6/ Zemke arXiv:1610.05207v3. Future content authoring must supply local proofs; no citation-only fallback.

### `cex-knot-kt-40-boundary-case`

**Kind:** counterexample. **Owner:** `knot-cobordism-maps-and-functoriality-examples` (KT-40).

A birth followed by death is εη=ε(1)=0, not an identity cylinder map; ordinary even Kh movie functoriality is only up to global sign.

**Direct prerequisites:** `def-generic-movie-of-an-oriented-knot-cobordism`, `def-khovanov-cobordism-map-up-to-sign`, `thm-barnatan-khovanov-cobordism-functoriality-up-to-sign`, `def-knot-floer-cobordism-map`, `lem-barnatan-carter-saito-movie-moves-up-to-sign`, `lem-knot-floer-holomorphic-triangle-transversality-compactness-gluing`, `lem-knot-floer-cobordism-naturality-and-movie-invariance`, `thm-khovanov-and-knot-floer-cobordism-map-scope`, `def-decorated-link-cobordism-and-floer-target`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-6/ Bar–Natan arXiv:math/0410495v2, Theorems 4–5; reader-6/ Zemke arXiv:1610.05207v3. Future content authoring must supply local proofs; no citation-only fallback.

### `ex-knot-kt-40-worked-cases`

**Kind:** example. **Owner:** `knot-cobordism-maps-and-functoriality-examples` (KT-40).

In Frobenius Kh TQFT, a circle birth followed by a saddle merging into another circle acts by m(1⊗x)=x, giving the identity map.

**Direct prerequisites:** `def-generic-movie-of-an-oriented-knot-cobordism`, `def-khovanov-cobordism-map-up-to-sign`, `thm-barnatan-khovanov-cobordism-functoriality-up-to-sign`, `def-knot-floer-cobordism-map`, `lem-barnatan-carter-saito-movie-moves-up-to-sign`, `lem-knot-floer-holomorphic-triangle-transversality-compactness-gluing`, `lem-knot-floer-cobordism-naturality-and-movie-invariance`, `thm-khovanov-and-knot-floer-cobordism-map-scope`, `def-decorated-link-cobordism-and-floer-target`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-6/ Bar–Natan arXiv:math/0410495v2, Theorems 4–5; reader-6/ Zemke arXiv:1610.05207v3. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-knot-genus-additive-under-connected-sum`

**Kind:** theorem. **Owner:** `connected-sums-and-prime-decomposition` (KT-05).

A minimal Seifert surface for K#J can be cut along the decomposing sphere after removal of inessential intersections into spanning surfaces with genera summing to at most its genus.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-oriented-seifert-surface-and-knot-genus`, `thm-seifert-algorithm-boundary-euler-and-genus`, `def-knot-connected-sum-and-prime-knot`, `def-countable-choice`.

**Proof/definition route:** Compress along innermost disk intersections while discarding closed sphere components, retain the unique spanning arc, and count Euler characteristics. Boundary-connect minimal summand surfaces for the reverse inequality. This module is independent of prime uniqueness.

**Source boundary:** reader-1/ Calegari 2025 §3.1 Theorem 3.7; reader-1/ Gardner-Livingston §4.5 proof supplements; reader-4/ Hatcher §1.1 (3-manifold prime decomposition only). Future content authoring must supply local proofs; no citation-only fallback.

### `thm-lee-homology-of-a-knot-has-two-generators`

**Kind:** theorem. **Owner:** `lee-deformation-and-rasmussen-s-invariant` (KT-38).

proves the rank-two result for a knot and identifies the two canonical orientation classes.

**Direct prerequisites:** `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `thm-knot-concordance-is-an-abelian-group`, `def-khovanov-frobenius-algebra-and-cube-of-resolutions`, `def-reduced-khovanov-cohomology-of-a-knot`, `thm-khovanov-homology-is-an-oriented-link-invariant`, `def-filtered-chain-complex`, `thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology`, `def-lee-deformed-khovanov-complex`, `def-rasmussen-s-invariant`, `def-odd-khovanov-barnatan-and-leo-triple`, `lem-lee-filtered-spectral-sequence-and-two-orientation-classes`, `lem-lee-cobordism-filtration-genus-bound`, `def-axiom-of-choice`.

**Proof/definition route:** verify the filtered differential does not decrease filtration; compute the Lee complex's rank through the oriented resolution basis and cancellation; on this page prove the Lee-specific oriented birth, saddle and death maps change filtration by at most their Euler-characteristic contribution, then decompose a genus-$g$ surface into these moves to obtain the bound. The later movie-map page KT-40 supplies general cobordism coherence but is not a prerequisite here. Distinguish the proved inequality from the false equality $s=2\tau$; Hedden–Ording’s twisted positive Whitehead double of the trefoil has $\tau=0$ and $s=2$. **Local prerequisite modules:** `lem-lee-filtered-spectral-sequence-and-two-orientation-classes`, `lem-lee-cobordism-filtration-genus-bound`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-6/ Rasmussen arXiv:math/0402131v1; reader-6/ Hedden–Ording arXiv:math/0512348v1, Theorem 1.1; Dunfield–Lipshitz–Schütz arXiv:2312.09114v3, Definitions3.1/3.2 and Theorem3.8; reader-6 full read, auditor selected decisive passages.. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-leo-local-equivalence-group-and-concordance-map`

**Kind:** theorem. **Owner:** `lee-deformation-and-rasmussen-s-invariant` (KT-38).

Tensor product and dual make the local-equivalence classes of LEO triples an abelian group, andK↦LEO(K) gives a smooth-concordance homomorphism (DLS Theorem1.1/3.8).

**Direct prerequisites:** `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `thm-knot-concordance-is-an-abelian-group`, `def-khovanov-frobenius-algebra-and-cube-of-resolutions`, `def-reduced-khovanov-cohomology-of-a-knot`, `thm-khovanov-homology-is-an-oriented-link-invariant`, `def-filtered-chain-complex`, `thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology`, `def-lee-deformed-khovanov-complex`, `def-rasmussen-s-invariant`, `def-odd-khovanov-barnatan-and-leo-triple`, `lem-odd-khovanov-and-barnatan-localization-foundations`, `def-axiom-of-choice`.

**Proof/definition route:** Prove reflexive/symmetric/transitive local equivalence, tensor compatibility, unit and evaluation/coevaluation dual cancellation after localization; apply the proved pointed Kunneth/cobordism maps.

**Source boundary:** reader-6/ Rasmussen arXiv:math/0402131v1; reader-6/ Hedden–Ording arXiv:math/0512348v1, Theorem 1.1; Dunfield–Lipshitz–Schütz arXiv:2312.09114v3, Definitions3.1/3.2 and Theorem3.8; reader-6 full read, auditor selected decisive passages.. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-rasmussen-s-bounds-smooth-four-ball-genus`

**Kind:** theorem. **Owner:** `lee-deformation-and-rasmussen-s-invariant` (KT-38).

proves $|s(K)|\le2g_4^{sm}(K)$ and concordance invariance.

**Direct prerequisites:** `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `thm-knot-concordance-is-an-abelian-group`, `def-khovanov-frobenius-algebra-and-cube-of-resolutions`, `def-reduced-khovanov-cohomology-of-a-knot`, `thm-khovanov-homology-is-an-oriented-link-invariant`, `def-filtered-chain-complex`, `thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology`, `def-lee-deformed-khovanov-complex`, `def-rasmussen-s-invariant`, `def-odd-khovanov-barnatan-and-leo-triple`, `lem-lee-filtered-spectral-sequence-and-two-orientation-classes`, `lem-lee-cobordism-filtration-genus-bound`, `def-axiom-of-choice`.

**Proof/definition route:** verify the filtered differential does not decrease filtration; compute the Lee complex's rank through the oriented resolution basis and cancellation; on this page prove the Lee-specific oriented birth, saddle and death maps change filtration by at most their Euler-characteristic contribution, then decompose a genus-$g$ surface into these moves to obtain the bound. The later movie-map page KT-40 supplies general cobordism coherence but is not a prerequisite here. Distinguish the proved inequality from the false equality $s=2\tau$; Hedden–Ording’s twisted positive Whitehead double of the trefoil has $\tau=0$ and $s=2$. **Local prerequisite modules:** `lem-lee-filtered-spectral-sequence-and-two-orientation-classes`, `lem-lee-cobordism-filtration-genus-bound`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-6/ Rasmussen arXiv:math/0402131v1; reader-6/ Hedden–Ording arXiv:math/0512348v1, Theorem 1.1; Dunfield–Lipshitz–Schütz arXiv:2312.09114v3, Definitions3.1/3.2 and Theorem3.8; reader-6 full read, auditor selected decisive passages.. Future content authoring must supply local proofs; no citation-only fallback.

### `cex-knot-kt-38-boundary-case`

**Kind:** counterexample. **Owner:** `lee-deformation-and-rasmussen-s-invariant-examples` (KT-38).

The same Whitehead-double example disproves universal s=2τ; it is a counterexample, not an open conjecture.

**Direct prerequisites:** `def-lee-deformed-khovanov-complex`, `thm-lee-homology-of-a-knot-has-two-generators`, `def-rasmussen-s-invariant`, `thm-rasmussen-s-bounds-smooth-four-ball-genus`, `lem-lee-filtered-spectral-sequence-and-two-orientation-classes`, `lem-lee-cobordism-filtration-genus-bound`, `def-odd-khovanov-barnatan-and-leo-triple`, `lem-odd-khovanov-and-barnatan-localization-foundations`, `thm-leo-local-equivalence-group-and-concordance-map`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-6/ Rasmussen arXiv:math/0402131v1; reader-6/ Hedden–Ording arXiv:math/0512348v1, Theorem 1.1; Dunfield–Lipshitz–Schütz arXiv:2312.09114v3, Definitions3.1/3.2 and Theorem3.8; reader-6 full read, auditor selected decisive passages.. Future content authoring must supply local proofs; no citation-only fallback.

### `ex-knot-kt-38-worked-cases`

**Kind:** example. **Owner:** `lee-deformation-and-rasmussen-s-invariant-examples` (KT-38).

Unknot has s=0, right/left trefoil s=±2; the2-twisted positive Whitehead double of right trefoil has s=2 and τ=0 by Hedden–Ording Theorem1.1.

**Direct prerequisites:** `def-lee-deformed-khovanov-complex`, `thm-lee-homology-of-a-knot-has-two-generators`, `def-rasmussen-s-invariant`, `thm-rasmussen-s-bounds-smooth-four-ball-genus`, `lem-lee-filtered-spectral-sequence-and-two-orientation-classes`, `lem-lee-cobordism-filtration-genus-bound`, `def-odd-khovanov-barnatan-and-leo-triple`, `lem-odd-khovanov-and-barnatan-localization-foundations`, `thm-leo-local-equivalence-group-and-concordance-map`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-6/ Rasmussen arXiv:math/0402131v1; reader-6/ Hedden–Ording arXiv:math/0512348v1, Theorem 1.1; Dunfield–Lipshitz–Schütz arXiv:2312.09114v3, Definitions3.1/3.2 and Theorem3.8; reader-6 full read, auditor selected decisive passages.. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-ribbon-knot-is-smoothly-slice`

**Kind:** theorem. **Owner:** `ribbon-knots-and-slice-ribbon-problem` (KT-28).

constructs the embedded disk by resolving each ribbon singularity with a 1-handle/0-handle pair.

**Direct prerequisites:** `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `thm-knot-concordance-is-an-abelian-group`, `def-ribbon-disk-and-ribbon-knot`, `lem-ribbon-singularity-local-resolution`, `def-countable-choice`.

**Proof/definition route:** define ribbon singularities with local
coordinates, prove the local resolution is embedded and orientable, and glue
the finitely many resolved patches to obtain a proper smooth disk with boundary
$K$. The converse is not claimed. For the open problem, state current status,
known partial classes and source/date; do not use the conjecture as a supplier.
**Local prerequisite modules:** `lem-ribbon-singularity-local-resolution`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-5/ Livingston 2004 ribbon/sliceness discussion; reader-5/ Piccirillo arXiv:1808.02923v1. Future content authoring must supply local proofs; no citation-only fallback.

### `cex-knot-kt-28-boundary-case`

**Kind:** counterexample. **Owner:** `ribbon-knots-and-slice-ribbon-problem-examples` (KT-28).

Nonslice trefoil is certainly not ribbon; the converse slice⇒ribbon remains the separately qualified question and is not established by vanishing elementary obstructions.

**Direct prerequisites:** `def-ribbon-disk-and-ribbon-knot`, `thm-ribbon-knot-is-smoothly-slice`, `lem-ribbon-singularity-local-resolution`, `def-countable-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-5/ Livingston 2004 ribbon/sliceness discussion; reader-5/ Piccirillo arXiv:1808.02923v1. Future content authoring must supply local proofs; no citation-only fallback.

### `ex-knot-kt-28-worked-cases`

**Kind:** example. **Owner:** `ribbon-knots-and-slice-ribbon-problem-examples` (KT-28).

K#(reverse mirror K) has the explicit standard banded-unlink ribbon disk; apply it to the trefoil to get the nontrivial square-knot ribbon example.

**Direct prerequisites:** `def-ribbon-disk-and-ribbon-knot`, `thm-ribbon-knot-is-smoothly-slice`, `lem-ribbon-singularity-local-resolution`, `def-countable-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-5/ Livingston 2004 ribbon/sliceness discussion; reader-5/ Piccirillo arXiv:1808.02923v1. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-schubert-prime-decomposition-for-knots`

**Kind:** theorem. **Owner:** `connected-sums-and-prime-decomposition` (KT-05).

Minimal complete systems of meridional decomposing annuli in E_K determine the same prime knot summands up to order and oriented equivalence.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-oriented-seifert-surface-and-knot-genus`, `thm-seifert-algorithm-boundary-euler-and-genus`, `def-knot-connected-sum-and-prime-knot`, `def-countable-choice`.

**Proof/definition route:** Put two systems transverse, minimize boundary intersections, remove inessential circles/outermost arcs, and prove surviving annulus product regions only reorder summands. Existence uses positive genus decrease, not the sphere decomposition of the irreducible exterior. Complete annulus-system source recovery is required.

**Source boundary:** reader-1/ Calegari 2025 §3.1 Theorem 3.7; reader-1/ Gardner-Livingston §4.5 proof supplements; reader-4/ Hatcher §1.1 (3-manifold prime decomposition only). Future content authoring must supply local proofs; no citation-only fallback.

### `lem-knot-decomposing-sphere-realizes-connected-sum`

**Kind:** lemma. **Owner:** `connected-sums-and-prime-decomposition` (KT-05).

proves that a sphere meeting a knot transversely in two points cuts it into the stated pair of oriented knot summands, including the ball-and-arc boundary identification.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-oriented-seifert-surface-and-knot-genus`, `thm-seifert-algorithm-boundary-euler-and-genus`, `def-knot-connected-sum-and-prime-knot`, `thm-schubert-prime-decomposition-for-knots`, `thm-knot-genus-additive-under-connected-sum`, `def-countable-choice`.

**Proof/definition route:** do not infer knot connected-sum decomposition from sphere decomposition of its irreducible exterior. Use spheres meeting the knot twice, equivalently properly embedded meridional decomposing annuli in the exterior. Prove existence by genus decrease and finiteness; uniqueness needs an annulus-system cut-and-paste theorem relative to marked peripheral boundary. General prime decomposition supplies only ambient 3-manifold context. Cut along a decomposing sphere meeting the
knot twice; the local ball-and-arc lemma identifies its two summand exteriors.
For uniqueness, put two decomposing spheres in general position, remove
inessential intersection circles by innermost-disk isotopies, and compare the
resulting prime tangles; prove that a nontrivial prime summand cannot split
across the remaining sphere. Calegari/Gardner supply only the genus-additivity
proof sketch, not uniqueness; reader 4's Hatcher §1.1 is a detailed general
prime-decomposition proof source but its exact knot-exterior bridge is local.
For genus, cut a minimum genus surface along the decomposing sphere for the
lower bound and boundary-connect minimum genus summand surfaces for the upper
bound. Alexander-polynomial multiplicativity is deferred to KT-07, after the
Seifert-matrix formula exists. **Local prerequisite modules:** `thm-schubert-prime-decomposition-for-knots`, `thm-knot-genus-additive-under-connected-sum`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-1/ Calegari 2025 §3.1 Theorem 3.7; reader-1/ Gardner-Livingston §4.5 proof supplements; reader-4/ Hatcher §1.1 (3-manifold prime decomposition only). Future content authoring must supply local proofs; no citation-only fallback.

### `thm-prime-decomposition-of-compact-orientable-three-manifold`

**Kind:** theorem. **Owner:** `connected-sums-and-prime-decomposition` (KT-05).

states and proves the sphere-decomposition existence/uniqueness theorem for compact connected orientable 3-manifolds (with boundary conventions and the S2×S1 prime exception explicit); irreducibility describes resulting factors, not a hypothesis forcing all decompositions trivial.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-oriented-seifert-surface-and-knot-genus`, `thm-seifert-algorithm-boundary-euler-and-genus`, `def-knot-connected-sum-and-prime-knot`, `thm-schubert-prime-decomposition-for-knots`, `thm-knot-genus-additive-under-connected-sum`, `def-countable-choice`.

**Proof/definition route:** do not infer knot connected-sum decomposition from sphere decomposition of its irreducible exterior. Use spheres meeting the knot twice, equivalently properly embedded meridional decomposing annuli in the exterior. Prove existence by genus decrease and finiteness; uniqueness needs an annulus-system cut-and-paste theorem relative to marked peripheral boundary. General prime decomposition supplies only ambient 3-manifold context. Cut along a decomposing sphere meeting the
knot twice; the local ball-and-arc lemma identifies its two summand exteriors.
For uniqueness, put two decomposing spheres in general position, remove
inessential intersection circles by innermost-disk isotopies, and compare the
resulting prime tangles; prove that a nontrivial prime summand cannot split
across the remaining sphere. Calegari/Gardner supply only the genus-additivity
proof sketch, not uniqueness; reader 4's Hatcher §1.1 is a detailed general
prime-decomposition proof source but its exact knot-exterior bridge is local.
For genus, cut a minimum genus surface along the decomposing sphere for the
lower bound and boundary-connect minimum genus summand surfaces for the upper
bound. Alexander-polynomial multiplicativity is deferred to KT-07, after the
Seifert-matrix formula exists. **Local prerequisite modules:** `thm-schubert-prime-decomposition-for-knots`, `thm-knot-genus-additive-under-connected-sum`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-1/ Calegari 2025 §3.1 Theorem 3.7; reader-1/ Gardner-Livingston §4.5 proof supplements; reader-4/ Hatcher §1.1 (3-manifold prime decomposition only). Future content authoring must supply local proofs; no citation-only fallback.

### `cex-knot-kt-05-boundary-case`

**Kind:** counterexample. **Owner:** `connected-sums-and-prime-decomposition-examples` (KT-05).

Granny and square knots have the same product Alexander polynomial (t²−t+1)² but different signature magnitude4 versus0, so equal polynomial does not identify prime summands.

**Direct prerequisites:** `def-knot-connected-sum-and-prime-knot`, `lem-knot-decomposing-sphere-realizes-connected-sum`, `thm-prime-decomposition-of-compact-orientable-three-manifold`, `thm-schubert-prime-decomposition-for-knots`, `thm-knot-genus-additive-under-connected-sum`, `def-countable-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-1/ Calegari 2025 §3.1 Theorem 3.7; reader-1/ Gardner-Livingston §4.5 proof supplements; reader-4/ Hatcher §1.1 (3-manifold prime decomposition only). Future content authoring must supply local proofs; no citation-only fallback.

### `ex-knot-kt-05-worked-cases`

**Kind:** example. **Owner:** `connected-sums-and-prime-decomposition-examples` (KT-05).

Right trefoil connected sum with right trefoil has genus2; right trefoil sum with reverse mirror has genus2 but is smoothly ribbon slice.

**Direct prerequisites:** `def-knot-connected-sum-and-prime-knot`, `lem-knot-decomposing-sphere-realizes-connected-sum`, `thm-prime-decomposition-of-compact-orientable-three-manifold`, `thm-schubert-prime-decomposition-for-knots`, `thm-knot-genus-additive-under-connected-sum`, `def-countable-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-1/ Calegari 2025 §3.1 Theorem 3.7; reader-1/ Gardner-Livingston §4.5 proof supplements; reader-4/ Hatcher §1.1 (3-manifold prime decomposition only). Future content authoring must supply local proofs; no citation-only fallback.

### `thm-schubert-bridge-connected-sum`

**Kind:** theorem. **Owner:** `bridge-presentations-and-unknotting-number` (KT-52).

states b(K#J)=b(K)+b(J)−1; its lower bound owns a thin-position/decomposing-sphere proof obligation, independent of genus additivity. Every minimum is over a nonempty set of integers; no efficient minimization algorithm is claimed.

**Direct prerequisites:** `def-knot-bridge-position-and-unknotting-number`, `def-knot-connected-sum-and-prime-knot`, `lem-knot-decomposing-sphere-realizes-connected-sum`, `def-axiom-of-choice`.

**Proof/definition route:** use KT-01 diagram groups, KT-03 crossing conventions, KT-05 decomposing annuli, KT-12 signature invariance and a new height-sphere/bridge-disk intersection module. The upper connected-sum bound glues two bridge positions; the lower bound requires normalization of a decomposing sphere relative to bridge disks and removal of outermost intersections, preserving a count of maxima. This exact classical theorem is a future full-source recovery obligation, not a claim that one of the six source dossiers fully proved it. Elementary descending and signature arguments are explicit local derivations from supplied diagram/surface facts.

**Source boundary:** Explicit local derivation; complete classical source recovery required for the stated deep theorem.. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-seifert-matrix-presents-knot-alexander-module`

**Kind:** theorem. **Owner:** `seifert-matrices-and-the-alexander-module` (KT-06).

identifies this cokernel with the existing one-variable Alexander module.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `thm-linking-number-is-invariant-and-writhe-is-not`, `def-oriented-seifert-surface-and-knot-genus`, `thm-seifert-algorithm-boundary-euler-and-genus`, `def-one-variable-alexander-module-of-an-oriented-link`, `def-knot-seifert-pairing-and-matrix`, `lem-seifert-cut-open-cover-alexander-module-presentation`, `lem-seifert-matrix-s-equivalence-under-isotopy`, `def-axiom-of-choice`.

**Proof/definition route:** first prove the cut-open exterior is
obtained by gluing the positive and negative copies of $F$ to the complement
of its bicollar. The Mayer–Vietoris map on $H_1(F)$ has the two push-off maps;
deck translation multiplies exactly one by $t$. The complementary homology is
identified using Alexander duality and the relative sequence, with the
meridian/longitude boundary map checked explicitly. This proves the presentation
without Fox calculus. The current Alexander module definition fixes the cover
and deck generator; `def-alexander-polynomial-from-the-first-elementary-ideal` supplies only the ideal convention. **Local prerequisite modules:** `lem-seifert-cut-open-cover-alexander-module-presentation`, `lem-seifert-matrix-s-equivalence-under-isotopy`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-2/ Livingston, Seifert Forms and Concordance (2002), pp.403–408; current one-variable Alexander module supplier. Future content authoring must supply local proofs; no citation-only fallback.

### `cex-knot-kt-06-boundary-case`

**Kind:** counterexample. **Owner:** `seifert-matrices-and-the-alexander-module-examples` (KT-06).

A unimodular basis change can alter all entries of V while preserving its presented Alexander module; check P^T V P with P=[[1,1],[0,1]].

**Direct prerequisites:** `def-knot-seifert-pairing-and-matrix`, `lem-seifert-matrix-skew-part-is-surface-intersection`, `lem-knot-infinite-cyclic-cover-cut-and-paste-presentation`, `thm-seifert-matrix-presents-knot-alexander-module`, `lem-seifert-cut-open-cover-alexander-module-presentation`, `lem-seifert-matrix-s-equivalence-under-isotopy`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-2/ Livingston, Seifert Forms and Concordance (2002), pp.403–408; current one-variable Alexander module supplier. Future content authoring must supply local proofs; no citation-only fallback.

### `ex-knot-kt-06-worked-cases`

**Kind:** example. **Owner:** `seifert-matrices-and-the-alexander-module-examples` (KT-06).

For V=[[1,0],[-1,1]], V−V^T is the unimodular symplectic matrix and det(V−tV^T)=1−t+t².

**Direct prerequisites:** `def-knot-seifert-pairing-and-matrix`, `lem-seifert-matrix-skew-part-is-surface-intersection`, `lem-knot-infinite-cyclic-cover-cut-and-paste-presentation`, `thm-seifert-matrix-presents-knot-alexander-module`, `lem-seifert-cut-open-cover-alexander-module-presentation`, `lem-seifert-matrix-s-equivalence-under-isotopy`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-2/ Livingston, Seifert Forms and Concordance (2002), pp.403–408; current one-variable Alexander module supplier. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-square-seifert-presentation-and-alexander-normalization`

**Kind:** lemma. **Owner:** `alexander-polynomial-from-seifert-matrices` (KT-07).

For knots, the square presentation of the absolute Alexander module has zeroth Fitting ideal generated by its determinant, which evaluates to ±1 at t=1.

**Direct prerequisites:** `def-knot-seifert-pairing-and-matrix`, `thm-seifert-matrix-presents-knot-alexander-module`, `lem-seifert-matrix-s-equivalence-under-isotopy`, `def-alexander-polynomial-from-the-first-elementary-ideal`, `thm-the-alexander-polynomial-is-an-oriented-link-invariant`, `def-axiom-of-choice`.

**Proof/definition route:** Use the locally derived stacked-cover matrix; maximal minors of a square presentation give E0, and V−V^T is the unimodular intersection form. Do not invoke the literature fact in the published definition to prove itself.

**Source boundary:** reader-2/ Livingston Seifert Forms (2002); current E0 Alexander definition; its square-presentation fact is literature-input. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-seifert-determinant-is-the-knot-alexander-polynomial`

**Kind:** theorem. **Owner:** `alexander-polynomial-from-seifert-matrices` (KT-07).

The gcd-E0 polynomial of the existing definition equals the Seifert determinant up to ±t^k, with reciprocal width at most 2g.

**Direct prerequisites:** `def-knot-seifert-pairing-and-matrix`, `thm-seifert-matrix-presents-knot-alexander-module`, `lem-seifert-matrix-s-equivalence-under-isotopy`, `def-alexander-polynomial-from-the-first-elementary-ideal`, `thm-the-alexander-polynomial-is-an-oriented-link-invariant`, `lem-square-seifert-presentation-and-alexander-normalization`, `def-axiom-of-choice`.

**Proof/definition route:** Identify the actual modules and E0 convention; transpose the determinant for symmetry, evaluate at one for normalization, and bound each determinant exponent. The knot fraction D=Δ/(1−t) is distinct.

**Source boundary:** reader-2/ Livingston Seifert Forms (2002); current E0 Alexander definition; its square-presentation fact is literature-input. Future content authoring must supply local proofs; no citation-only fallback.

### `cor-alexander-polynomial-multiplies-under-connected-sum`

**Kind:** corollary. **Owner:** `alexander-polynomial-from-seifert-matrices` (KT-07).

proves $\Delta_{K\#J}\doteq\Delta_K\Delta_J$ from the block-sum Seifert matrix, after KT-05 has supplied the connected-sum operation.

**Direct prerequisites:** `def-knot-seifert-pairing-and-matrix`, `thm-seifert-matrix-presents-knot-alexander-module`, `lem-seifert-matrix-s-equivalence-under-isotopy`, `def-alexander-polynomial-from-the-first-elementary-ideal`, `thm-the-alexander-polynomial-is-an-oriented-link-invariant`, `thm-seifert-determinant-is-the-knot-alexander-polynomial`, `lem-square-seifert-presentation-and-alexander-normalization`, `def-axiom-of-choice`.

**Proof/definition route:** KT-06 identifies a finite presentation;
the order of its torsion module is the gcd of maximal minors, and a square
presentation has order its determinant up to a unit. At $t=1$, the matrix is
$V-V^T$, the unimodular surface intersection matrix, giving determinant
$\pm1$. Transposition and multiplication by a monomial give the reciprocal
relation. Since the matrix has size $2g(F)$, its determinant's Laurent width
is at most $2g(F)$; minimize over $F$. The proof uses the current
`thm-the-alexander-polynomial-is-an-oriented-link-invariant` only for its
locally proved module-naturality interface, not the Fox determinant rule.
**Local prerequisite modules:** `lem-square-seifert-presentation-and-alexander-normalization`, `thm-seifert-determinant-is-the-knot-alexander-polynomial`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-2/ Livingston Seifert Forms (2002); current E0 Alexander definition; its square-presentation fact is literature-input. Future content authoring must supply local proofs; no citation-only fallback.

### `cor-knot-alexander-normalization-symmetry-and-genus-bound`

**Kind:** corollary. **Owner:** `alexander-polynomial-from-seifert-matrices` (KT-07).

deduces $\Delta_K(1)=\pm1$, reciprocal symmetry, and $\deg\Delta_K\le2g(K)$ after centering the Laurent polynomial. The theorem does not confuse the knot normalization $\Delta_K/(1-t)$ with the existing multi-component convention.

**Direct prerequisites:** `def-knot-seifert-pairing-and-matrix`, `thm-seifert-matrix-presents-knot-alexander-module`, `lem-seifert-matrix-s-equivalence-under-isotopy`, `def-alexander-polynomial-from-the-first-elementary-ideal`, `thm-the-alexander-polynomial-is-an-oriented-link-invariant`, `thm-seifert-determinant-is-the-knot-alexander-polynomial`, `lem-square-seifert-presentation-and-alexander-normalization`, `def-axiom-of-choice`.

**Proof/definition route:** KT-06 identifies a finite presentation;
the order of its torsion module is the gcd of maximal minors, and a square
presentation has order its determinant up to a unit. At $t=1$, the matrix is
$V-V^T$, the unimodular surface intersection matrix, giving determinant
$\pm1$. Transposition and multiplication by a monomial give the reciprocal
relation. Since the matrix has size $2g(F)$, its determinant's Laurent width
is at most $2g(F)$; minimize over $F$. The proof uses the current
`thm-the-alexander-polynomial-is-an-oriented-link-invariant` only for its
locally proved module-naturality interface, not the Fox determinant rule.
**Local prerequisite modules:** `lem-square-seifert-presentation-and-alexander-normalization`, `thm-seifert-determinant-is-the-knot-alexander-polynomial`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-2/ Livingston Seifert Forms (2002); current E0 Alexander definition; its square-presentation fact is literature-input. Future content authoring must supply local proofs; no citation-only fallback.

### `cex-knot-kt-07-boundary-case`

**Kind:** counterexample. **Owner:** `alexander-polynomial-from-seifert-matrices-examples` (KT-07).

The knot-normalized fraction D=Δ/(1−t) is not the polynomial Δ: for unknot Δ=1 but D has a pole at1.

**Direct prerequisites:** `thm-seifert-determinant-is-the-knot-alexander-polynomial`, `cor-knot-alexander-normalization-symmetry-and-genus-bound`, `cor-alexander-polynomial-multiplies-under-connected-sum`, `lem-square-seifert-presentation-and-alexander-normalization`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-2/ Livingston Seifert Forms (2002); current E0 Alexander definition; its square-presentation fact is literature-input. Future content authoring must supply local proofs; no citation-only fallback.

### `ex-knot-kt-07-worked-cases`

**Kind:** example. **Owner:** `alexander-polynomial-from-seifert-matrices-examples` (KT-07).

The matrices [[1,0],[-1,1]] and [[1,0],[-1,-1]] give trefoil 1−t+t² and figure-eight −1+3t−t² up to units; evaluate at1 and−1.

**Direct prerequisites:** `thm-seifert-determinant-is-the-knot-alexander-polynomial`, `cor-knot-alexander-normalization-symmetry-and-genus-bound`, `cor-alexander-polynomial-multiplies-under-connected-sum`, `lem-square-seifert-presentation-and-alexander-normalization`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-2/ Livingston Seifert Forms (2002); current E0 Alexander definition; its square-presentation fact is literature-input. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-arf-quadratic-enhancement-from-seifert-form`

**Kind:** lemma. **Owner:** `levine-tristram-signatures-and-arf-invariant` (KT-12).

q(x)=V(x,x) mod2 is a quadratic refinement of the symplectic surface form; Σ_i q(a_i)q(b_i) is basis independent.

**Direct prerequisites:** `def-knot-seifert-pairing-and-matrix`, `thm-seifert-matrix-presents-knot-alexander-module`, `lem-seifert-matrix-s-equivalence-under-isotopy`, `thm-seifert-determinant-is-the-knot-alexander-polynomial`, `def-levine-tristram-hermitian-form-and-signature`, `def-knot-arf-invariant-from-seifert-form`, `def-seifert-s-equivalence-and-conway-normalization`, `def-axiom-of-choice`.

**Proof/definition route:** Expand q(x+y), use V−V^T mod2, and prove invariance under elementary symplectic changes or the quadratic Gauss sum; show elementary S-enlargement adds a zero-Arf hyperbolic plane.

**Source boundary:** reader-2/ Livingston 2002 and Survey of Classical Knot Concordance v4; reader-2/ source convention audit of Levine–Tristram Hermitian form. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-branched-cover-surgery-presentation-from-seifert-surface`

**Kind:** lemma. **Owner:** `cyclic-branched-covers-and-knot-determinants` (KT-11).

The disk-band Seifert surface gives the declared integral surgery presentation for its cyclic branch cover with boundary marking.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-knot-seifert-pairing-and-matrix`, `thm-seifert-matrix-presents-knot-alexander-module`, `lem-seifert-matrix-s-equivalence-under-isotopy`, `thm-seifert-determinant-is-the-knot-alexander-polynomial`, `def-cyclic-branched-cover-of-a-knot`, `def-axiom-of-choice`.

**Proof/definition route:** Lift each disk/band attachment, construct its 2-handles and compute framings/linkings from push-offs; prove the boundary identification by local branched charts. The cited Akbulut–Kirby construction must be recovered fully or reproved; its name is not a supplier.

**Source boundary:** reader-2/ Livingston Seifert Forms (2002) Theorem 3.1; reader-2/ Przytycki–Yasuhara 2001 Theorem 3.2; surgery presentation attributed to Akbulut–Kirby. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-cyclic-branched-cover-seifert-block-matrix`

**Kind:** lemma. **Owner:** `cyclic-branched-covers-and-knot-determinants` (KT-11).

For q≥2, gluing q Seifert cuts and filling the lifted meridian gives an integral block presentation of H1(Σ_q(K)); q=2 reduces to V+V^T.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-knot-seifert-pairing-and-matrix`, `thm-seifert-matrix-presents-knot-alexander-module`, `lem-seifert-matrix-s-equivalence-under-isotopy`, `thm-seifert-determinant-is-the-knot-alexander-polynomial`, `def-cyclic-branched-cover-of-a-knot`, `def-axiom-of-choice`.

**Proof/definition route:** Build the q-sheet cyclic gluing, write all push-off difference maps, eliminate the trivial sheet and filling generators by integral operations, and display the resulting (q−1)2g square block matrix before taking determinants.

**Source boundary:** reader-2/ Livingston Seifert Forms (2002) Theorem 3.1; reader-2/ Przytycki–Yasuhara 2001 Theorem 3.2; surgery presentation attributed to Akbulut–Kirby. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-cyclic-cover-linking-form-inverse-matrix`

**Kind:** lemma. **Owner:** `cyclic-branched-covers-and-knot-determinants` (KT-11).

For a nonsingular integral surgery matrix A presenting the oriented rational homology sphere, its torsion linking form is ±x^T A^−1 y mod Z with the sign fixed by the chosen boundary orientation.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-knot-seifert-pairing-and-matrix`, `thm-seifert-matrix-presents-knot-alexander-module`, `lem-seifert-matrix-s-equivalence-under-isotopy`, `thm-seifert-determinant-is-the-knot-alexander-polynomial`, `def-cyclic-branched-cover-of-a-knot`, `lem-branched-cover-surgery-presentation-from-seifert-surface`, `def-axiom-of-choice`.

**Proof/definition route:** Bound multiples of representative meridians by relative rational chains in the handlebody; compute intersections and prove independence modulo Z and nonsingularity. Zero determinant forbids inverse-matrix use.

**Source boundary:** reader-2/ Livingston Seifert Forms (2002) Theorem 3.1; reader-2/ Przytycki–Yasuhara 2001 Theorem 3.2; surgery presentation attributed to Akbulut–Kirby. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-asd-regularity-perturbation-and-orientability`

**Kind:** lemma. **Owner:** `smooth-sliceness-and-four-ball-genus-obstructions` (KT-26).

For the permitted generic metric/holonomy perturbations, the irreducible charge-one moduli locus is regular of expected dimension with the required coherent orientation, retaining prescribed neighborhoods of reducibles and instanton ends.

**Direct prerequisites:** `def-cyclic-branched-cover-of-a-knot`, `lem-cyclic-cover-linking-form-inverse-matrix`, `def-oriented-slope-and-knot-dehn-filling`, `thm-framed-knot-surgery-trace-boundary`, `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `thm-knot-concordance-is-an-abelian-group`, `def-integral-intersection-lattice-of-a-simply-connected-four-manifold`, `def-asd-moduli-fredholm-index-and-lattice-setup`, `def-axiom-of-choice`.

**Proof/definition route:** Prove Sobolev slice theorem and elliptic estimates, Sard–Smale transversality for the specified perturbation space, determinant-line orientation and compatibility under gluing. Genericity without a surjective linearization proof is not enough.

**Source boundary:** reader-5/ Donaldson, JDG 18 (1983), Theorem 1 and full 38-page paper. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-cyclic-cover-order-root-product-and-rational-sphere-test`

**Kind:** lemma. **Owner:** `cyclic-branched-covers-and-knot-determinants` (KT-11).

H1(Σ_q(K)) is finite iff Δ_K(ζ_q^j)≠0 for 1≤j<q, and its order then equals the absolute product of these values.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-knot-seifert-pairing-and-matrix`, `thm-seifert-matrix-presents-knot-alexander-module`, `lem-seifert-matrix-s-equivalence-under-isotopy`, `thm-seifert-determinant-is-the-knot-alexander-polynomial`, `def-cyclic-branched-cover-of-a-knot`, `lem-cyclic-branched-cover-seifert-block-matrix`, `def-axiom-of-choice`.

**Proof/definition route:** Fourier diagonalize the proven cyclic block presentation over C, discard the trivial character using Δ(1)=±1, and compare determinant with integer Smith normal form. Show unit ambiguity has absolute product one. Prime-power nonvanishing follows reduction modulo the prime.

**Source boundary:** reader-2/ Livingston Seifert Forms (2002) Theorem 3.1; reader-2/ Przytycki–Yasuhara 2001 Theorem 3.2; surgery presentation attributed to Akbulut–Kirby. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-double-branched-cover-homology-from-seifert-matrix`

**Kind:** lemma. **Owner:** `cyclic-branched-covers-and-knot-determinants` (KT-11).

proves $H_1(\Sigma_2(K);\mathbb Z)\cong\operatorname{coker}(V+V^T)$ under the KT-06 sign convention.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-knot-seifert-pairing-and-matrix`, `thm-seifert-matrix-presents-knot-alexander-module`, `lem-seifert-matrix-s-equivalence-under-isotopy`, `thm-seifert-determinant-is-the-knot-alexander-polynomial`, `def-cyclic-branched-cover-of-a-knot`, `lem-cyclic-branched-cover-seifert-block-matrix`, `lem-branched-cover-surgery-presentation-from-seifert-surface`, `lem-cyclic-cover-order-root-product-and-rational-sphere-test`, `lem-cyclic-cover-linking-form-inverse-matrix`, `def-axiom-of-choice`.

**Proof/definition route:** build the cover by cutting along the
Seifert surface and gluing two copies; the deck involution's quotient is $S^3$
branched over $K$. The Mayer–Vietoris boundary matrix is $V+V^T$. The determinant
identity is KT-07 evaluated at $-1$; a square integer presentation has finite
cokernel precisely when its determinant is nonzero, of order the determinant's
absolute value. For general $q$, decompose the cyclic-cover chain complex over
$\mathbb C$ into deck-character eigenspaces, remove the trivial character
using $\Delta_K(1)=\pm1$, and take the determinant of each nontrivial block;
the nonvanishing conditions are exactly the finite-homology hypotheses.
Check that the unit ambiguity disappears under the absolute product. The already
published slice-disk branched-cover lemma supplies only its stated rational
homology-ball consequence, not this calculation. **Local prerequisite modules:** `lem-cyclic-branched-cover-seifert-block-matrix`, `lem-branched-cover-surgery-presentation-from-seifert-surface`, `lem-cyclic-cover-order-root-product-and-rational-sphere-test`, `lem-cyclic-cover-linking-form-inverse-matrix`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-2/ Livingston Seifert Forms (2002) Theorem 3.1; reader-2/ Przytycki–Yasuhara 2001 Theorem 3.2; surgery presentation attributed to Akbulut–Kirby. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-heegaard-floer-correction-term-heegaard-invariance`

**Kind:** lemma. **Owner:** `branched-cover-correction-terms-and-sliceness` (KT-46).

For a rational homology sphere Y and Spin^c s, the minimal absolute grading of a non-torsion tower element in im(HF∞→HF+) defines d(Y,s) and is invariant.

**Direct prerequisites:** `def-cyclic-branched-cover-of-a-knot`, `lem-cyclic-cover-linking-form-inverse-matrix`, `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `thm-knot-concordance-is-an-abelian-group`, `def-admissible-pointed-heegaard-floer-data`, `def-grid-diagram-for-an-oriented-knot`, `thm-grid-homology-independent-of-grid-and-equals-knot-floer`, `lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing`, `lem-double-cover-branched-over-a-slice-disk-is-a-rational-homology-ball`, `def-heegaard-floer-correction-term`, `def-heegaard-floer-plus-infinity-absolute-grading`, `def-axiom-of-choice`.

**Proof/definition route:** Construct the absolute Q grading using cobordism index shifts, prove Heegaard-move compatibility and the tower map; generic hat/grid HFK is not enough to define HF+ or d.

**Source boundary:** reader-5/ smooth slice-disk double-cover supplier boundary; reader-6/ Heegaard Floer correction-term sources. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-os-link-surgery-filtered-complex-and-triangle`

**Kind:** lemma. **Owner:** `khovanov-to-floer-spectral-sequence` (KT-45).

For a link diagram, the bounded link-surgery cube built from admissible HF polygon counts has total homology HFhat of its branched double cover.

**Direct prerequisites:** `def-cyclic-branched-cover-of-a-knot`, `lem-cyclic-cover-linking-form-inverse-matrix`, `def-khovanov-frobenius-algebra-and-cube-of-resolutions`, `def-reduced-khovanov-cohomology-of-a-knot`, `thm-khovanov-homology-is-an-oriented-link-invariant`, `def-admissible-pointed-heegaard-floer-data`, `def-grid-diagram-for-an-oriented-knot`, `thm-grid-homology-independent-of-grid-and-equals-knot-floer`, `lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing`, `def-filtered-chain-complex`, `thm-a-filtered-complex-produces-an-exact-couple`, `thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology`, `def-link-surgery-filtered-complex-for-double-branched-cover`, `def-axiom-of-choice`.

**Proof/definition route:** Prove the surgery exact triangle/iterated mapping-cone construction with A∞ polygon identities and identify the branched resolution covers. Fix F2 coefficients and diagram data; intermediate filtered invariance is separate.

**Source boundary:** reader-6/ Ozsváth–Szabó arXiv:math/0309170v1; filtered-quasi-isomorphism invariance not proved in paper. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-os-first-differential-is-reduced-khovanov`

**Kind:** lemma. **Owner:** `khovanov-to-floer-spectral-sequence` (KT-45).

At E1 the resolution-cover HF groups and edge maps agree with the reduced Kh cube of the mirror over F2.

**Direct prerequisites:** `def-cyclic-branched-cover-of-a-knot`, `lem-cyclic-cover-linking-form-inverse-matrix`, `def-khovanov-frobenius-algebra-and-cube-of-resolutions`, `def-reduced-khovanov-cohomology-of-a-knot`, `thm-khovanov-homology-is-an-oriented-link-invariant`, `def-admissible-pointed-heegaard-floer-data`, `def-grid-diagram-for-an-oriented-knot`, `thm-grid-homology-independent-of-grid-and-equals-knot-floer`, `lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing`, `def-filtered-chain-complex`, `thm-a-filtered-complex-produces-an-exact-couple`, `thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology`, `def-link-surgery-filtered-complex-for-double-branched-cover`, `lem-os-link-surgery-filtered-complex-and-triangle`, `def-axiom-of-choice`.

**Proof/definition route:** Compute HFhat of connected sums of S1×S2 as exterior algebras, calculate surgery saddle maps and match the basepoint reduction. Track mirror and grading convention explicitly.

**Source boundary:** reader-6/ Ozsváth–Szabó arXiv:math/0309170v1; filtered-quasi-isomorphism invariance not proved in paper. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-os-filtered-convergence-and-invariance-scope`

**Kind:** lemma. **Owner:** `khovanov-to-floer-spectral-sequence` (KT-45).

The finite resolution filtration converges to HFhat(Σ(L);F2); the E2 page is reduced Kh(mirror L), with no claim of diagram-independent intermediate filtered type from the 2003 source.

**Direct prerequisites:** `def-cyclic-branched-cover-of-a-knot`, `lem-cyclic-cover-linking-form-inverse-matrix`, `def-khovanov-frobenius-algebra-and-cube-of-resolutions`, `def-reduced-khovanov-cohomology-of-a-knot`, `thm-khovanov-homology-is-an-oriented-link-invariant`, `def-admissible-pointed-heegaard-floer-data`, `def-grid-diagram-for-an-oriented-knot`, `thm-grid-homology-independent-of-grid-and-equals-knot-floer`, `lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing`, `def-filtered-chain-complex`, `thm-a-filtered-complex-produces-an-exact-couple`, `thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology`, `def-link-surgery-filtered-complex-for-double-branched-cover`, `lem-os-first-differential-is-reduced-khovanov`, `def-axiom-of-choice`.

**Proof/definition route:** Apply the existing bounded-filtration theorem after the diagram-specific construction; keep any additional filtered-move invariance as a separately sourced/proved theorem rather than an inference from invariant endpoints.

**Source boundary:** reader-6/ Ozsváth–Szabó arXiv:math/0309170v1; filtered-quasi-isomorphism invariance not proved in paper. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-link-surgery-e-one-differential-is-reduced-khovanov`

**Kind:** lemma. **Owner:** `khovanov-to-floer-spectral-sequence` (KT-45).

identifies the first differential with reduced Khovanov cohomology over $\mathbb F_2$.

**Direct prerequisites:** `def-cyclic-branched-cover-of-a-knot`, `lem-cyclic-cover-linking-form-inverse-matrix`, `def-khovanov-frobenius-algebra-and-cube-of-resolutions`, `def-reduced-khovanov-cohomology-of-a-knot`, `thm-khovanov-homology-is-an-oriented-link-invariant`, `def-admissible-pointed-heegaard-floer-data`, `def-grid-diagram-for-an-oriented-knot`, `thm-grid-homology-independent-of-grid-and-equals-knot-floer`, `lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing`, `def-filtered-chain-complex`, `thm-a-filtered-complex-produces-an-exact-couple`, `thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology`, `def-link-surgery-filtered-complex-for-double-branched-cover`, `lem-os-link-surgery-filtered-complex-and-triangle`, `lem-os-first-differential-is-reduced-khovanov`, `lem-os-filtered-convergence-and-invariance-scope`, `def-axiom-of-choice`.

**Proof/definition route:** construct the surgery exact-triangle
complex, verify the cube filtration is bounded and exhaustive, identify the
E1 terms with the Heegaard Floer groups of resolution covers, and prove the
E1 differential agrees with the Khovanov differential under the TQFT
identification. Add local modules for triangle-count transversality,
compactness, gluing and the surgery exact triangle. Ozsváth–Szabó's 2005 paper
states that filtered quasi-isomorphism invariance was expected, not established
there; keep it as an explicit separate obligation if a link invariant
spectral sequence is claimed. **Local prerequisite modules:** `lem-os-link-surgery-filtered-complex-and-triangle`, `lem-os-first-differential-is-reduced-khovanov`, `lem-os-filtered-convergence-and-invariance-scope`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-6/ Ozsváth–Szabó arXiv:math/0309170v1; filtered-quasi-isomorphism invariance not proved in paper. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-rational-ball-spin-c-cobordism-map-inequality`

**Kind:** lemma. **Owner:** `branched-cover-correction-terms-and-sliceness` (KT-46).

If smooth rational ball B has ∂B=Y and s extends, then d(Y,s)=0 in the fixed orientation convention.

**Direct prerequisites:** `def-cyclic-branched-cover-of-a-knot`, `lem-cyclic-cover-linking-form-inverse-matrix`, `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `thm-knot-concordance-is-an-abelian-group`, `def-admissible-pointed-heegaard-floer-data`, `def-grid-diagram-for-an-oriented-knot`, `thm-grid-homology-independent-of-grid-and-equals-knot-floer`, `lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing`, `lem-double-cover-branched-over-a-slice-disk-is-a-rational-homology-ball`, `def-heegaard-floer-correction-term`, `def-heegaard-floer-plus-infinity-absolute-grading`, `lem-heegaard-floer-correction-term-heegaard-invariance`, `def-axiom-of-choice`.

**Proof/definition route:** Puncture B to a rational homology cobordism from S3, prove its HF∞ map is an isomorphism with degree (c1²−2χ−3σ)/4=0, and apply tower monotonicity in both orientations. State torsion Spin^c and extension assumptions.

**Source boundary:** reader-5/ smooth slice-disk double-cover supplier boundary; reader-6/ Heegaard Floer correction-term sources. Future content authoring must supply local proofs; no citation-only fallback.

### `cor-double-cover-d-invariant-obstructs-smooth-slice`

**Kind:** corollary. **Owner:** `branched-cover-correction-terms-and-sliceness` (KT-46).

If K smoothly slice, all Spin^c structures on Σ2(K) extending over its smooth slice cover have d=0, with the extension coset/metabolizer described.

**Direct prerequisites:** `def-cyclic-branched-cover-of-a-knot`, `lem-cyclic-cover-linking-form-inverse-matrix`, `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `thm-knot-concordance-is-an-abelian-group`, `def-admissible-pointed-heegaard-floer-data`, `def-grid-diagram-for-an-oriented-knot`, `thm-grid-homology-independent-of-grid-and-equals-knot-floer`, `lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing`, `lem-double-cover-branched-over-a-slice-disk-is-a-rational-homology-ball`, `def-heegaard-floer-correction-term`, `def-heegaard-floer-plus-infinity-absolute-grading`, `lem-rational-ball-spin-c-cobordism-map-inequality`, `def-axiom-of-choice`.

**Proof/definition route:** Use the existing smooth rational-ball-cover lemma and the proved correction-term constraint; compute the image of H²(B) in H²(∂B) and search all possible extension sets. A nonextendible single structure gives no direct contradiction.

**Source boundary:** reader-5/ smooth slice-disk double-cover supplier boundary; reader-6/ Heegaard Floer correction-term sources. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-seifert-stabilization-preserves-levine-tristram-signature`

**Kind:** lemma. **Owner:** `levine-tristram-signatures-and-arf-invariant` (KT-12).

H_ω=(1−ω)V+(1−conj(ω))V^T has basis/S-enlargement-invariant signature for ω≠1 away from roots, and invariant two-sided average at roots.

**Direct prerequisites:** `def-knot-seifert-pairing-and-matrix`, `thm-seifert-matrix-presents-knot-alexander-module`, `lem-seifert-matrix-s-equivalence-under-isotopy`, `thm-seifert-determinant-is-the-knot-alexander-polynomial`, `def-levine-tristram-hermitian-form-and-signature`, `def-knot-arf-invariant-from-seifert-form`, `def-seifert-s-equivalence-and-conway-normalization`, `def-axiom-of-choice`.

**Proof/definition route:** Congruence handles basis change. Reduce the new enlargement block by congruence to a nonsingular hyperbolic plane for admissible ω; take finite one-sided limits at isolated roots. Define nullity separately; do not transfer nondegenerate assertions to roots.

**Source boundary:** reader-2/ Livingston 2002 and Survey of Classical Knot Concordance v4; reader-2/ source convention audit of Levine–Tristram Hermitian form. Future content authoring must supply local proofs; no citation-only fallback.

### `alg-descending-diagram-unknotting-sequence`

**Kind:** algorithm. **Owner:** `bridge-presentations-and-unknotting-number` (KT-52).

takes a based oriented diagram, traverses it and switches a crossing precisely when its first encounter is an underpass; it returns the crossing-change list and a descending diagram.

**Direct prerequisites:** `thm-knot-wirtinger-presentation-correctness`, `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `thm-linking-number-is-invariant-and-writhe-is-not`, `def-knot-connected-sum-and-prime-knot`, `def-levine-tristram-hermitian-form-and-signature`, `lem-seifert-stabilization-preserves-levine-tristram-signature`, `def-knot-bridge-position-and-unknotting-number`, `def-axiom-of-choice`.

**Proof/definition route:** use KT-01 diagram groups, KT-03 crossing conventions, KT-05 decomposing annuli, KT-12 signature invariance and a new height-sphere/bridge-disk intersection module. The upper connected-sum bound glues two bridge positions; the lower bound requires normalization of a decomposing sphere relative to bridge disks and removal of outermost intersections, preserving a count of maxima. This exact classical theorem is a future full-source recovery obligation, not a claim that one of the six source dossiers fully proved it. Elementary descending and signature arguments are explicit local derivations from supplied diagram/surface facts.

**Source boundary:** Explicit local derivation; complete classical source recovery required for the stated deep theorem.. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-slice-disk-double-cover-is-rational-homology-ball`

**Kind:** lemma. **Owner:** `branched-cover-correction-terms-and-sliceness` (KT-46).

reuses the published result only for a smooth properly embedded disk and its stated rational-homology-ball conclusion.

**Direct prerequisites:** `def-cyclic-branched-cover-of-a-knot`, `lem-cyclic-cover-linking-form-inverse-matrix`, `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `thm-knot-concordance-is-an-abelian-group`, `def-admissible-pointed-heegaard-floer-data`, `def-grid-diagram-for-an-oriented-knot`, `thm-grid-homology-independent-of-grid-and-equals-knot-floer`, `lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing`, `lem-double-cover-branched-over-a-slice-disk-is-a-rational-homology-ball`, `def-heegaard-floer-correction-term`, `def-heegaard-floer-plus-infinity-absolute-grading`, `cor-double-cover-d-invariant-obstructs-smooth-slice`, `lem-heegaard-floer-correction-term-heegaard-invariance`, `lem-rational-ball-spin-c-cobordism-map-inequality`, `def-axiom-of-choice`.

**Proof/definition route:** define absolute gradings from the
Heegaard Floer chain complex; prove invariance under Heegaard moves and the
rational-ball inequality from the filtered cobordism map, with local analytic
modules for transversality/compactness/gluing. For the slice application,
prove the branched cover of a smooth disk is the exact rational homology ball
and identify which boundary Spin$^c$ structures extend. The existing published
lemma cannot be extended from smooth disks to locally flat topological disks
by analogy. **Local prerequisite modules:** `lem-heegaard-floer-correction-term-heegaard-invariance`, `lem-rational-ball-spin-c-cobordism-map-inequality`, `cor-double-cover-d-invariant-obstructs-smooth-slice`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-5/ smooth slice-disk double-cover supplier boundary; reader-6/ Heegaard Floer correction-term sources. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-slice-disk-induces-seifert-metabolizer`

**Kind:** lemma. **Owner:** `algebraic-knot-concordance-and-metabolic-forms` (KT-22).

A smooth or locally-flat slice disk gives a primitive rank-g isotropic direct summand of the integral rank-2g Seifert lattice.

**Direct prerequisites:** `def-knot-seifert-pairing-and-matrix`, `thm-seifert-matrix-presents-knot-alexander-module`, `lem-seifert-matrix-s-equivalence-under-isotopy`, `thm-seifert-determinant-is-the-knot-alexander-polynomial`, `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `thm-knot-concordance-is-an-abelian-group`, `def-metabolic-seifert-form-and-algebraic-knot-concordance`, `def-integral-witt-and-seifert-isometric-structures`, `def-axiom-of-choice`.

**Proof/definition route:** Construct the bounded 3-manifold from the capped Seifert surface with its normal neighborhood; use integral duality to get a rational half-rank isotropic kernel and intersect with the free lattice to saturate it. Prove pairing vanishes before saturation; rational Lagrangian intersection is primitive.

**Source boundary:** reader-5/ Livingston 2004 §§2–3; reader-2/ Livingston Seifert Forms (2002). Future content authoring must supply local proofs; no citation-only fallback.

### `lem-casson-gordon-characters-and-linking-metabolizers`

**Kind:** lemma. **Owner:** `casson-gordon-invariants-and-sliceness-obstructions` (KT-24).

A prime-power cyclic cover of a locally-flat slice disk is a rational ball with boundary linking metabolizer; characters arising by linking with prime-power-order elements in that metabolizer extend in the exact Casson–Gordon construction.

**Direct prerequisites:** `def-cyclic-branched-cover-of-a-knot`, `lem-cyclic-cover-linking-form-inverse-matrix`, `def-levine-tristram-hermitian-form-and-signature`, `lem-seifert-stabilization-preserves-levine-tristram-signature`, `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `thm-knot-concordance-is-an-abelian-group`, `def-metabolic-seifert-form-and-algebraic-knot-concordance`, `lem-slice-disk-induces-seifert-metabolizer`, `def-finite-order-character-of-a-branched-cover`, `def-casson-gordon-signature-defect`, `def-torsion-linking-form-and-casson-gordon-bordism`, `def-axiom-of-choice`.

**Proof/definition route:** Prove local-flat branch charts/normal neighborhoods and cover homology, identify kernel and annihilator by integral duality, then extend the Z_p×Z character on the zero-surgery of the branch lift, using a bounding multiple where required.

**Source boundary:** reader-5/ Livingston 2004 §4; exact Casson–Gordon proof gaps remain. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-casson-gordon-signature-defect-and-vanishing`

**Kind:** lemma. **Owner:** `casson-gordon-invariants-and-sliceness-obstructions` (KT-24).

The based twisted-minus-ordinary intersection form divided by a bounding multiplicity defines τ∈W(C(t))⊗Q independent of the chosen extension; slice-metabolizing characters give zero.

**Direct prerequisites:** `def-cyclic-branched-cover-of-a-knot`, `lem-cyclic-cover-linking-form-inverse-matrix`, `def-levine-tristram-hermitian-form-and-signature`, `lem-seifert-stabilization-preserves-levine-tristram-signature`, `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `thm-knot-concordance-is-an-abelian-group`, `def-metabolic-seifert-form-and-algebraic-knot-concordance`, `lem-slice-disk-induces-seifert-metabolizer`, `def-finite-order-character-of-a-branched-cover`, `def-casson-gordon-signature-defect`, `def-torsion-linking-form-and-casson-gordon-bordism`, `lem-casson-gordon-characters-and-linking-metabolizers`, `def-axiom-of-choice`.

**Proof/definition route:** Prove nonsingularity after quotienting radicals, compare two extensions by gluing and the bordism signature calculation, and use the actual slice-exterior cover to produce a metabolic difference. Ordinary Novikov additivity alone is not independence of the twisted Witt class.

**Source boundary:** reader-5/ Livingston 2004 §4; exact Casson–Gordon proof gaps remain. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-taubes-positive-definite-instanton-existence`

**Kind:** lemma. **Owner:** `smooth-sliceness-and-four-ball-genus-obstructions` (KT-26).

Small-scale charge-one model instantons on the specified definite X glue to genuine irreducible solutions and parametrize the compactification end with center in X.

**Direct prerequisites:** `def-cyclic-branched-cover-of-a-knot`, `lem-cyclic-cover-linking-form-inverse-matrix`, `def-oriented-slope-and-knot-dehn-filling`, `thm-framed-knot-surgery-trace-boundary`, `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `thm-knot-concordance-is-an-abelian-group`, `def-integral-intersection-lattice-of-a-simply-connected-four-manifold`, `def-asd-moduli-fredholm-index-and-lattice-setup`, `lem-asd-regularity-perturbation-and-orientability`, `def-axiom-of-choice`.

**Proof/definition route:** Build the approximate connection in a geodesic ball, bound the linear right inverse uniformly in scale and solve the nonlinear correction by contraction; prove uniqueness in the gluing chart and orientation compatibility. This is the particular Taubes end theorem, not unrestricted existence on every bundle.

**Source boundary:** reader-5/ Donaldson, JDG 18 (1983), Theorem 1 and full 38-page paper. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-uhlenbeck-compactness-and-removable-singularities`

**Kind:** lemma. **Owner:** `smooth-sliceness-and-four-ball-genus-obstructions` (KT-26).

A bounded-energy sequence of the specified SU2 solutions has a gauge-convergent subsequence away from finitely many bubbles, with integer energy loss; finite-energy punctured-ball solutions extend after gauge.

**Direct prerequisites:** `def-cyclic-branched-cover-of-a-knot`, `lem-cyclic-cover-linking-form-inverse-matrix`, `def-oriented-slope-and-knot-dehn-filling`, `thm-framed-knot-surgery-trace-boundary`, `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `thm-knot-concordance-is-an-abelian-group`, `def-integral-intersection-lattice-of-a-simply-connected-four-manifold`, `def-asd-moduli-fredholm-index-and-lattice-setup`, `def-axiom-of-choice`.

**Proof/definition route:** Prove small-energy Coulomb gauges, elliptic bootstrapping, bubbling quantization and removable singularities; retain fixed bundle/energy and compact X hypotheses. These analytic inputs require full local proofs/source recovery beyond the primary paper's citations.

**Source boundary:** reader-5/ Donaldson, JDG 18 (1983), Theorem 1 and full 38-page paper. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-donaldson-reducible-ends-and-one-instanton-compactification`

**Kind:** lemma. **Owner:** `smooth-sliceness-and-four-ball-genus-obstructions` (KT-26).

In Donaldson's charge-one space the reducible singularities correspond to ± integral square-one classes, their links are CP2 with controlled orientations, and the small-instanton end is X.

**Direct prerequisites:** `def-cyclic-branched-cover-of-a-knot`, `lem-cyclic-cover-linking-form-inverse-matrix`, `def-oriented-slope-and-knot-dehn-filling`, `thm-framed-knot-surgery-trace-boundary`, `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `thm-knot-concordance-is-an-abelian-group`, `def-integral-intersection-lattice-of-a-simply-connected-four-manifold`, `def-asd-moduli-fredholm-index-and-lattice-setup`, `lem-uhlenbeck-compactness-and-removable-singularities`, `lem-taubes-positive-definite-instanton-existence`, `def-axiom-of-choice`.

**Proof/definition route:** Use reducible splittings and local Kuranishi models, rule out additional ends with the compactness/energy count, and match Taubes charts. Excising cones yields an oriented bordism from X to the CP2 links.

**Source boundary:** reader-5/ Donaldson, JDG 18 (1983), Theorem 1 and full 38-page paper. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-arf-equals-second-conway-coefficient-mod-two`

**Kind:** theorem. **Owner:** `levine-tristram-signatures-and-arf-invariant` (KT-12).

proves the stated coefficient identity under the chosen Conway convention.

**Direct prerequisites:** `def-knot-seifert-pairing-and-matrix`, `thm-seifert-matrix-presents-knot-alexander-module`, `lem-seifert-matrix-s-equivalence-under-isotopy`, `thm-seifert-determinant-is-the-knot-alexander-polynomial`, `def-levine-tristram-hermitian-form-and-signature`, `def-knot-arf-invariant-from-seifert-form`, `def-seifert-s-equivalence-and-conway-normalization`, `lem-seifert-stabilization-preserves-levine-tristram-signature`, `lem-arf-quadratic-enhancement-from-seifert-form`, `def-axiom-of-choice`.

**Proof/definition route:** Hermitian symmetry follows from
$\bar\omega=\omega^{-1}$; a basis change is congruence. Stabilization adds a
hyperbolic summand whose nonzero eigenvalues are paired with opposite signs at
admissible $\omega$. For Arf, verify $q(x+y)=q(x)+q(y)+x\cdot y$, choose a
symplectic basis and compare the quadratic Gauss sum with the Conway expansion
using KT-07. This pair states no slice obstruction yet; KT-21–25 add the
embedded-cobordism hypothesis. **Local prerequisite modules:** `lem-seifert-stabilization-preserves-levine-tristram-signature`, `lem-arf-quadratic-enhancement-from-seifert-form`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-2/ Livingston 2002 and Survey of Classical Knot Concordance v4; reader-2/ source convention audit of Levine–Tristram Hermitian form. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-bridge-one-is-unknot-and-signature-crossing-change-bound`

**Kind:** theorem. **Owner:** `bridge-presentations-and-unknotting-number` (KT-52).

proves b(K)=1 iff unknot by the two trivial arcs in height balls; a single crossing change alters the nondegenerate classical signature by at most two by a rank-one Seifert/Goeritz update, so |σ_(−1)(K)|/2≤u(K).

**Direct prerequisites:** `thm-knot-wirtinger-presentation-correctness`, `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `thm-linking-number-is-invariant-and-writhe-is-not`, `def-knot-connected-sum-and-prime-knot`, `def-levine-tristram-hermitian-form-and-signature`, `lem-seifert-stabilization-preserves-levine-tristram-signature`, `def-knot-bridge-position-and-unknotting-number`, `alg-descending-diagram-unknotting-sequence`, `def-axiom-of-choice`.

**Proof/definition route:** use KT-01 diagram groups, KT-03 crossing conventions, KT-05 decomposing annuli, KT-12 signature invariance and a new height-sphere/bridge-disk intersection module. The upper connected-sum bound glues two bridge positions; the lower bound requires normalization of a decomposing sphere relative to bridge disks and removal of outermost intersections, preserving a count of maxima. This exact classical theorem is a future full-source recovery obligation, not a claim that one of the six source dossiers fully proved it. Elementary descending and signature arguments are explicit local derivations from supplied diagram/surface facts.

**Source boundary:** Explicit local derivation; complete classical source recovery required for the stated deep theorem.. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-casson-gordon-slice-obstruction`

**Kind:** theorem. **Owner:** `casson-gordon-invariants-and-sliceness-obstructions` (KT-24).

If K is slice, some deck-invariant metabolizer L satisfies τ(Σ_q(K),χ_x)=0 for all permitted prime-power-order x∈L; nonzero averaged signatures for every possible L obstruct sliceness.

**Direct prerequisites:** `def-cyclic-branched-cover-of-a-knot`, `lem-cyclic-cover-linking-form-inverse-matrix`, `def-levine-tristram-hermitian-form-and-signature`, `lem-seifert-stabilization-preserves-levine-tristram-signature`, `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `thm-knot-concordance-is-an-abelian-group`, `def-metabolic-seifert-form-and-algebraic-knot-concordance`, `lem-slice-disk-induces-seifert-metabolizer`, `def-finite-order-character-of-a-branched-cover`, `def-casson-gordon-signature-defect`, `def-torsion-linking-form-and-casson-gordon-bordism`, `lem-casson-gordon-signature-defect-and-vanishing`, `def-axiom-of-choice`.

**Proof/definition route:** Apply the character-extension and Witt-vanishing modules, then evaluate the rational Hermitian signature using two-sided unit-circle limits. A single nonzero character outside all permitted L is not by itself a sliceness obstruction.

**Source boundary:** reader-5/ Livingston 2004 §4; exact Casson–Gordon proof gaps remain. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-slice-disk-induces-branched-cover-metabolizer`

**Kind:** lemma. **Owner:** `casson-gordon-invariants-and-sliceness-obstructions` (KT-24).

proves a locally flat slice disk gives an invariant metabolizer in the linking form of the cyclic branched cover.

**Direct prerequisites:** `def-cyclic-branched-cover-of-a-knot`, `lem-cyclic-cover-linking-form-inverse-matrix`, `def-levine-tristram-hermitian-form-and-signature`, `lem-seifert-stabilization-preserves-levine-tristram-signature`, `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `thm-knot-concordance-is-an-abelian-group`, `def-metabolic-seifert-form-and-algebraic-knot-concordance`, `lem-slice-disk-induces-seifert-metabolizer`, `def-finite-order-character-of-a-branched-cover`, `def-casson-gordon-signature-defect`, `def-torsion-linking-form-and-casson-gordon-bordism`, `thm-casson-gordon-slice-obstruction`, `lem-casson-gordon-characters-and-linking-metabolizers`, `lem-casson-gordon-signature-defect-and-vanishing`, `def-axiom-of-choice`.

**Proof/definition route:** build the branched-cover 4-manifold from
the slice disk, prove the boundary linking form is nonsingular when the cover
is a rational homology sphere, and identify the metabolizer by duality. Define
twisted homology from the character representation, prove the signature is
independent of the chosen bounding 4-manifold by gluing and Novikov
additivity, then prove the vanishing statement for metabolizing characters.
The full Casson–Gordon machinery is not replaced by a citation: item contracts
must include the character-extension lemma, twisted-form nonsingularity,
bordism/gluing invariance and exact prime-power assumptions. **Local prerequisite modules:** `lem-casson-gordon-characters-and-linking-metabolizers`, `lem-casson-gordon-signature-defect-and-vanishing`, `thm-casson-gordon-slice-obstruction`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-5/ Livingston 2004 §4; exact Casson–Gordon proof gaps remain. Future content authoring must supply local proofs; no citation-only fallback.

### `cex-knot-kt-24-boundary-case`

**Kind:** counterexample. **Owner:** `casson-gordon-invariants-and-sliceness-obstructions-examples` (KT-24).

A character of Z/3 not vanishing on a proposed subgroup cannot be treated as extending from a metabolizer; compute the annihilator before applying τ vanishing. For an actual slice test use the square knot cover Z/3⊕Z/3 with opposite pairings and diagonal metabolizer.

**Direct prerequisites:** `def-finite-order-character-of-a-branched-cover`, `def-casson-gordon-signature-defect`, `lem-slice-disk-induces-branched-cover-metabolizer`, `thm-casson-gordon-slice-obstruction`, `lem-casson-gordon-characters-and-linking-metabolizers`, `lem-casson-gordon-signature-defect-and-vanishing`, `def-torsion-linking-form-and-casson-gordon-bordism`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-5/ Livingston 2004 §4; exact Casson–Gordon proof gaps remain. Future content authoring must supply local proofs; no citation-only fallback.

### `ex-knot-kt-24-worked-cases`

**Kind:** example. **Owner:** `casson-gordon-invariants-and-sliceness-obstructions-examples` (KT-24).

Trefoil double-cover linking group is Z/3 with a nonzero ±1/3 generator pairing; no subgroup has order√3, so no metabolizer exists.

**Direct prerequisites:** `def-finite-order-character-of-a-branched-cover`, `def-casson-gordon-signature-defect`, `lem-slice-disk-induces-branched-cover-metabolizer`, `thm-casson-gordon-slice-obstruction`, `lem-casson-gordon-characters-and-linking-metabolizers`, `lem-casson-gordon-signature-defect-and-vanishing`, `def-torsion-linking-form-and-casson-gordon-bordism`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-5/ Livingston 2004 §4; exact Casson–Gordon proof gaps remain. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-correction-term-obstruction-from-rational-ball`

**Kind:** theorem. **Owner:** `branched-cover-correction-terms-and-sliceness` (KT-46).

proves the exact inequality/vanishing constraint on the correction term for Spin$^c$ structures extending over a rational homology ball.

**Direct prerequisites:** `def-cyclic-branched-cover-of-a-knot`, `lem-cyclic-cover-linking-form-inverse-matrix`, `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `thm-knot-concordance-is-an-abelian-group`, `def-admissible-pointed-heegaard-floer-data`, `def-grid-diagram-for-an-oriented-knot`, `thm-grid-homology-independent-of-grid-and-equals-knot-floer`, `lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing`, `lem-double-cover-branched-over-a-slice-disk-is-a-rational-homology-ball`, `def-heegaard-floer-correction-term`, `def-heegaard-floer-plus-infinity-absolute-grading`, `cor-double-cover-d-invariant-obstructs-smooth-slice`, `lem-heegaard-floer-correction-term-heegaard-invariance`, `lem-rational-ball-spin-c-cobordism-map-inequality`, `def-axiom-of-choice`.

**Proof/definition route:** define absolute gradings from the
Heegaard Floer chain complex; prove invariance under Heegaard moves and the
rational-ball inequality from the filtered cobordism map, with local analytic
modules for transversality/compactness/gluing. For the slice application,
prove the branched cover of a smooth disk is the exact rational homology ball
and identify which boundary Spin$^c$ structures extend. The existing published
lemma cannot be extended from smooth disks to locally flat topological disks
by analogy. **Local prerequisite modules:** `lem-heegaard-floer-correction-term-heegaard-invariance`, `lem-rational-ball-spin-c-cobordism-map-inequality`, `cor-double-cover-d-invariant-obstructs-smooth-slice`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-5/ smooth slice-disk double-cover supplier boundary; reader-6/ Heegaard Floer correction-term sources. Future content authoring must supply local proofs; no citation-only fallback.

### `cex-knot-kt-46-boundary-case`

**Kind:** counterexample. **Owner:** `branched-cover-correction-terms-and-sliceness-examples` (KT-46).

These nonzero values obstruct a smooth rational-ball filling of that oriented L(3,1) only after quantifying extendible Spin^c structures; a nonextendible structure alone is not a filling obstruction.

**Direct prerequisites:** `def-heegaard-floer-correction-term`, `lem-slice-disk-double-cover-is-rational-homology-ball`, `thm-correction-term-obstruction-from-rational-ball`, `cor-double-cover-d-invariant-obstructs-smooth-slice`, `lem-heegaard-floer-correction-term-heegaard-invariance`, `lem-rational-ball-spin-c-cobordism-map-inequality`, `def-heegaard-floer-plus-infinity-absolute-grading`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-5/ smooth slice-disk double-cover supplier boundary; reader-6/ Heegaard Floer correction-term sources. Future content authoring must supply local proofs; no citation-only fallback.

### `ex-knot-kt-46-worked-cases`

**Kind:** example. **Owner:** `branched-cover-correction-terms-and-sliceness-examples` (KT-46).

In the convention d(L(p,1),i)=((2i−p)²−p)/(4p), d(L(3,1),i)={1/2,−1/6,−1/6}; reversing orientation negates.

**Direct prerequisites:** `def-heegaard-floer-correction-term`, `lem-slice-disk-double-cover-is-rational-homology-ball`, `thm-correction-term-obstruction-from-rational-ball`, `cor-double-cover-d-invariant-obstructs-smooth-slice`, `lem-heegaard-floer-correction-term-heegaard-invariance`, `lem-rational-ball-spin-c-cobordism-map-inequality`, `def-heegaard-floer-plus-infinity-absolute-grading`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-5/ smooth slice-disk double-cover supplier boundary; reader-6/ Heegaard Floer correction-term sources. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-descending-diagram-is-unknot-and-finite-bounds`

**Kind:** theorem. **Owner:** `bridge-presentations-and-unknotting-number` (KT-52).

proves the output unknot by lifting the traversed arc monotonically and closing across the base arc, termination in at most c switches, and finiteness of u(K).

**Direct prerequisites:** `alg-descending-diagram-unknotting-sequence`, `thm-knot-wirtinger-presentation-correctness`, `def-axiom-of-choice`.

**Proof/definition route:** use KT-01 diagram groups, KT-03 crossing conventions, KT-05 decomposing annuli, KT-12 signature invariance and a new height-sphere/bridge-disk intersection module. The upper connected-sum bound glues two bridge positions; the lower bound requires normalization of a decomposing sphere relative to bridge disks and removal of outermost intersections, preserving a count of maxima. This exact classical theorem is a future full-source recovery obligation, not a claim that one of the six source dossiers fully proved it. Elementary descending and signature arguments are explicit local derivations from supplied diagram/surface facts.

**Source boundary:** Explicit local derivation; complete classical source recovery required for the stated deep theorem.. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-descending-diagram-unknotting-sequence-procedure-properties`

**Kind:** theorem. **Owner:** `bridge-presentations-and-unknotting-number` (KT-52).

For exactly the admissible encoded inputs of alg-descending-diagram-unknotting-sequence, execution terminates, rejects precisely the stated syntactic failures and returns the prescribed finite output. Any identification with a topological invariant, recognition completeness, or asymptotic complexity is only the separately proved domain result, not inferred from finite execution.

**Direct prerequisites:** `alg-descending-diagram-unknotting-sequence`, `thm-knot-wirtinger-presentation-correctness`, `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `thm-linking-number-is-invariant-and-writhe-is-not`, `def-knot-connected-sum-and-prime-knot`, `def-levine-tristram-hermitian-form-and-signature`, `lem-seifert-stabilization-preserves-levine-tristram-signature`, `def-knot-bridge-position-and-unknotting-number`, `def-axiom-of-choice`.

**Proof/definition route:** Use the explicit finite loop/state/word or bounded search measure in the procedure; prove each branch preserves the stated output representation and all arithmetic is effective. Cite the domain correctness and completeness modules separately when claiming invariant/recognition meaning.

**Source boundary:** Explicit local derivation; complete classical source recovery required for the stated deep theorem.. Future content authoring must supply local proofs; no citation-only fallback.

### `cex-diagram-crossing-count-is-not-unknotting-number`

**Kind:** counterexample. **Owner:** `bridge-presentations-and-unknotting-number-examples` (KT-52).

An unknot with k R1 kinks has diagram crossing count k, while b=1,u=0; diagram crossings are not unknotting number.

**Direct prerequisites:** `def-knot-bridge-position-and-unknotting-number`, `alg-descending-diagram-unknotting-sequence`, `thm-descending-diagram-is-unknot-and-finite-bounds`, `thm-bridge-one-is-unknot-and-signature-crossing-change-bound`, `thm-schubert-bridge-connected-sum`, `thm-descending-diagram-unknotting-sequence-procedure-properties`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** Explicit local derivation; complete classical source recovery required for the stated deep theorem.. Future content authoring must supply local proofs; no citation-only fallback.

### `ex-trefoil-bridge-and-unknotting-numbers`

**Kind:** example. **Owner:** `bridge-presentations-and-unknotting-number-examples` (KT-52).

Trefoil has b=2 and u=1 from its2-bridge diagram and one crossing change, with nontrivial group proving both lower bounds.

**Direct prerequisites:** `def-knot-bridge-position-and-unknotting-number`, `alg-descending-diagram-unknotting-sequence`, `thm-descending-diagram-is-unknot-and-finite-bounds`, `thm-bridge-one-is-unknot-and-signature-crossing-change-bound`, `thm-schubert-bridge-connected-sum`, `thm-descending-diagram-unknotting-sequence-procedure-properties`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** Explicit local derivation; complete classical source recovery required for the stated deep theorem.. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-donaldson-definite-diagonalization`

**Kind:** theorem. **Owner:** `smooth-sliceness-and-four-ball-genus-obstructions` (KT-26).

The closed simply connected smooth positive-definite lattice is standard diagonal over Z.

**Direct prerequisites:** `def-cyclic-branched-cover-of-a-knot`, `lem-cyclic-cover-linking-form-inverse-matrix`, `def-oriented-slope-and-knot-dehn-filling`, `thm-framed-knot-surgery-trace-boundary`, `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `thm-knot-concordance-is-an-abelian-group`, `def-integral-intersection-lattice-of-a-simply-connected-four-manifold`, `def-asd-moduli-fredholm-index-and-lattice-setup`, `lem-donaldson-reducible-ends-and-one-instanton-compactification`, `def-axiom-of-choice`.

**Proof/definition route:** The compactified moduli bordism gives rank(Q)=signature(X)≤n(Q); elementary orthogonal splitting at a norm-one vector gives n(Q)≤rank(Q), equality iff diagonal. Negative definite follows only by reversing orientation. No broader H1-mod2 contract is imported.

**Source boundary:** reader-5/ Donaldson, JDG 18 (1983), Theorem 1 and full 38-page paper. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-slice-branched-cover-produces-definite-four-manifold`

**Kind:** lemma. **Owner:** `smooth-sliceness-and-four-ball-genus-obstructions` (KT-26).

For a specified simply connected definite filling W of Σ2(K), a smooth slice disk cover B yields a closed definite gluing only after boundary π1 normal generation is verified; its lattice contains Q_W.

**Direct prerequisites:** `def-cyclic-branched-cover-of-a-knot`, `lem-cyclic-cover-linking-form-inverse-matrix`, `def-oriented-slope-and-knot-dehn-filling`, `thm-framed-knot-surgery-trace-boundary`, `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `thm-knot-concordance-is-an-abelian-group`, `def-integral-intersection-lattice-of-a-simply-connected-four-manifold`, `def-asd-moduli-fredholm-index-and-lattice-setup`, `thm-donaldson-definite-diagonalization`, `def-axiom-of-choice`.

**Proof/definition route:** Use the existing smooth rational-ball-cover lemma, van Kampen and Mayer–Vietoris including torsion/index effects. Prove integral lattice injection and any finite index explicitly; nonsliceness follows if no diagonal embedding is possible.

**Source boundary:** reader-5/ Donaldson, JDG 18 (1983), Theorem 1 and full 38-page paper. Future content authoring must supply local proofs; no citation-only fallback.

### `cor-lattice-obstruction-to-smooth-sliceness`

**Kind:** corollary. **Owner:** `smooth-sliceness-and-four-ball-genus-obstructions` (KT-26).

gives the resulting lower bound on $g_4^{sm}$ under the exact definiteness, simple-connectivity and boundary conditions.

**Direct prerequisites:** `def-cyclic-branched-cover-of-a-knot`, `lem-cyclic-cover-linking-form-inverse-matrix`, `def-oriented-slope-and-knot-dehn-filling`, `thm-framed-knot-surgery-trace-boundary`, `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `thm-knot-concordance-is-an-abelian-group`, `def-integral-intersection-lattice-of-a-simply-connected-four-manifold`, `def-asd-moduli-fredholm-index-and-lattice-setup`, `thm-donaldson-definite-diagonalization`, `lem-slice-branched-cover-produces-definite-four-manifold`, `lem-asd-regularity-perturbation-and-orientability`, `lem-uhlenbeck-compactness-and-removable-singularities`, `lem-taubes-positive-definite-instanton-existence`, `lem-donaldson-reducible-ends-and-one-instanton-compactification`, `def-axiom-of-choice`.

**Proof/definition route:** first prove the branched-cover/surgery
construction with the stated smooth disk and boundary. The Donaldson proof
requires explicit modules: define the ASD moduli space and its Fredholm index;
prove regularity after the permitted perturbation and orientability; apply
Weitzenböck to rule out unwanted solutions; prove Uhlenbeck compactness and
removable singularities; establish Taubes existence of an irreducible
instanton on the positive-definite manifold; describe reducible ends and
their spectral-flow labels; compactify the one-instanton moduli space and
derive the lattice embedding/diagonalization contradiction. These are local
authoring obligations, not covered by general real intersection-form pages or
the 1983 citation alone. Keep any H1-mod-2 generalization out unless separately
proved. **Local prerequisite modules:** `def-asd-moduli-fredholm-index-and-lattice-setup`, `lem-asd-regularity-perturbation-and-orientability`, `lem-uhlenbeck-compactness-and-removable-singularities`, `lem-taubes-positive-definite-instanton-existence`, `lem-donaldson-reducible-ends-and-one-instanton-compactification`, `thm-donaldson-definite-diagonalization`, `lem-slice-branched-cover-produces-definite-four-manifold`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-5/ Donaldson, JDG 18 (1983), Theorem 1 and full 38-page paper. Future content authoring must supply local proofs; no citation-only fallback.

### `cex-knot-kt-26-boundary-case`

**Kind:** counterexample. **Owner:** `smooth-sliceness-and-four-ball-genus-obstructions-examples` (KT-26).

The topological E8 realization does not satisfy the smooth hypothesis; an integral lattice alone is not a knot nonsliceness certificate without the specified smooth gluing construction.

**Direct prerequisites:** `def-integral-intersection-lattice-of-a-simply-connected-four-manifold`, `thm-donaldson-definite-diagonalization`, `lem-slice-branched-cover-produces-definite-four-manifold`, `cor-lattice-obstruction-to-smooth-sliceness`, `def-asd-moduli-fredholm-index-and-lattice-setup`, `lem-asd-regularity-perturbation-and-orientability`, `lem-uhlenbeck-compactness-and-removable-singularities`, `lem-taubes-positive-definite-instanton-existence`, `lem-donaldson-reducible-ends-and-one-instanton-compactification`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-5/ Donaldson, JDG 18 (1983), Theorem 1 and full 38-page paper. Future content authoring must supply local proofs; no citation-only fallback.

### `ex-knot-kt-26-worked-cases`

**Kind:** example. **Owner:** `smooth-sliceness-and-four-ball-genus-obstructions-examples` (KT-26).

E8 is an even positive-definite unimodular rank8 lattice and has no norm-one vector, so it is not diagonal; Donaldson excludes it for closed smooth simply-connected positive-definite4-manifolds.

**Direct prerequisites:** `def-integral-intersection-lattice-of-a-simply-connected-four-manifold`, `thm-donaldson-definite-diagonalization`, `lem-slice-branched-cover-produces-definite-four-manifold`, `cor-lattice-obstruction-to-smooth-sliceness`, `def-asd-moduli-fredholm-index-and-lattice-setup`, `lem-asd-regularity-perturbation-and-orientability`, `lem-uhlenbeck-compactness-and-removable-singularities`, `lem-taubes-positive-definite-instanton-existence`, `lem-donaldson-reducible-ends-and-one-instanton-compactification`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-5/ Donaldson, JDG 18 (1983), Theorem 1 and full 38-page paper. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-knot-cyclic-cover-order-from-alexander-polynomial`

**Kind:** theorem. **Owner:** `cyclic-branched-covers-and-knot-determinants` (KT-11).

states that for a $q$-fold cyclic branched cover, $H_1(\Sigma_q(K))$ is finite exactly when $\Delta_K(\zeta_q^j)\ne0$ for all $1\le j<q$, and in that case $|H_1(\Sigma_q(K))|=\prod_{j=1}^{q-1}|\Delta_K(\zeta_q^j)|$.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-knot-seifert-pairing-and-matrix`, `thm-seifert-matrix-presents-knot-alexander-module`, `lem-seifert-matrix-s-equivalence-under-isotopy`, `thm-seifert-determinant-is-the-knot-alexander-polynomial`, `def-cyclic-branched-cover-of-a-knot`, `lem-cyclic-branched-cover-seifert-block-matrix`, `lem-branched-cover-surgery-presentation-from-seifert-surface`, `lem-cyclic-cover-order-root-product-and-rational-sphere-test`, `lem-cyclic-cover-linking-form-inverse-matrix`, `def-axiom-of-choice`.

**Proof/definition route:** build the cover by cutting along the
Seifert surface and gluing two copies; the deck involution's quotient is $S^3$
branched over $K$. The Mayer–Vietoris boundary matrix is $V+V^T$. The determinant
identity is KT-07 evaluated at $-1$; a square integer presentation has finite
cokernel precisely when its determinant is nonzero, of order the determinant's
absolute value. For general $q$, decompose the cyclic-cover chain complex over
$\mathbb C$ into deck-character eigenspaces, remove the trivial character
using $\Delta_K(1)=\pm1$, and take the determinant of each nontrivial block;
the nonvanishing conditions are exactly the finite-homology hypotheses.
Check that the unit ambiguity disappears under the absolute product. The already
published slice-disk branched-cover lemma supplies only its stated rational
homology-ball consequence, not this calculation. **Local prerequisite modules:** `lem-cyclic-branched-cover-seifert-block-matrix`, `lem-branched-cover-surgery-presentation-from-seifert-surface`, `lem-cyclic-cover-order-root-product-and-rational-sphere-test`, `lem-cyclic-cover-linking-form-inverse-matrix`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-2/ Livingston Seifert Forms (2002) Theorem 3.1; reader-2/ Przytycki–Yasuhara 2001 Theorem 3.2; surgery presentation attributed to Akbulut–Kirby. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-knot-determinant-is-order-of-double-cover-homology`

**Kind:** theorem. **Owner:** `cyclic-branched-covers-and-knot-determinants` (KT-11).

proves that $H_1(\Sigma_2(K))$ is finite exactly when $\Delta_K(-1)\ne0$ and then has order $|\Delta_K(-1)|$.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-knot-seifert-pairing-and-matrix`, `thm-seifert-matrix-presents-knot-alexander-module`, `lem-seifert-matrix-s-equivalence-under-isotopy`, `thm-seifert-determinant-is-the-knot-alexander-polynomial`, `def-cyclic-branched-cover-of-a-knot`, `lem-cyclic-branched-cover-seifert-block-matrix`, `lem-branched-cover-surgery-presentation-from-seifert-surface`, `lem-cyclic-cover-order-root-product-and-rational-sphere-test`, `lem-cyclic-cover-linking-form-inverse-matrix`, `def-axiom-of-choice`.

**Proof/definition route:** build the cover by cutting along the
Seifert surface and gluing two copies; the deck involution's quotient is $S^3$
branched over $K$. The Mayer–Vietoris boundary matrix is $V+V^T$. The determinant
identity is KT-07 evaluated at $-1$; a square integer presentation has finite
cokernel precisely when its determinant is nonzero, of order the determinant's
absolute value. For general $q$, decompose the cyclic-cover chain complex over
$\mathbb C$ into deck-character eigenspaces, remove the trivial character
using $\Delta_K(1)=\pm1$, and take the determinant of each nontrivial block;
the nonvanishing conditions are exactly the finite-homology hypotheses.
Check that the unit ambiguity disappears under the absolute product. The already
published slice-disk branched-cover lemma supplies only its stated rational
homology-ball consequence, not this calculation. **Local prerequisite modules:** `lem-cyclic-branched-cover-seifert-block-matrix`, `lem-branched-cover-surgery-presentation-from-seifert-surface`, `lem-cyclic-cover-order-root-product-and-rational-sphere-test`, `lem-cyclic-cover-linking-form-inverse-matrix`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-2/ Livingston Seifert Forms (2002) Theorem 3.1; reader-2/ Przytycki–Yasuhara 2001 Theorem 3.2; surgery presentation attributed to Akbulut–Kirby. Future content authoring must supply local proofs; no citation-only fallback.

### `cex-knot-kt-11-boundary-case`

**Kind:** counterexample. **Owner:** `cyclic-branched-covers-and-knot-determinants-examples` (KT-11).

No knot double determinant is zero because Δ(−1) is odd; the trefoil six-fold cover has infinite H1 because Δ vanishes at a primitive sixth root.

**Direct prerequisites:** `def-cyclic-branched-cover-of-a-knot`, `lem-double-branched-cover-homology-from-seifert-matrix`, `thm-knot-determinant-is-order-of-double-cover-homology`, `thm-knot-cyclic-cover-order-from-alexander-polynomial`, `lem-cyclic-branched-cover-seifert-block-matrix`, `lem-branched-cover-surgery-presentation-from-seifert-surface`, `lem-cyclic-cover-order-root-product-and-rational-sphere-test`, `lem-cyclic-cover-linking-form-inverse-matrix`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-2/ Livingston Seifert Forms (2002) Theorem 3.1; reader-2/ Przytycki–Yasuhara 2001 Theorem 3.2; surgery presentation attributed to Akbulut–Kirby. Future content authoring must supply local proofs; no citation-only fallback.

### `ex-knot-kt-11-worked-cases`

**Kind:** example. **Owner:** `cyclic-branched-covers-and-knot-determinants-examples` (KT-11).

Trefoil double cover has H1=Z/3, figure-eight double cover has H1=Z/5, unknot double cover is S3; verify with V+V^T and Smith form.

**Direct prerequisites:** `def-cyclic-branched-cover-of-a-knot`, `lem-double-branched-cover-homology-from-seifert-matrix`, `thm-knot-determinant-is-order-of-double-cover-homology`, `thm-knot-cyclic-cover-order-from-alexander-polynomial`, `lem-cyclic-branched-cover-seifert-block-matrix`, `lem-branched-cover-surgery-presentation-from-seifert-surface`, `lem-cyclic-cover-order-root-product-and-rational-sphere-test`, `lem-cyclic-cover-linking-form-inverse-matrix`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-2/ Livingston Seifert Forms (2002) Theorem 3.1; reader-2/ Przytycki–Yasuhara 2001 Theorem 3.2; surgery presentation attributed to Akbulut–Kirby. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-levine-algebraic-concordance-surjection-proof`

**Kind:** theorem. **Owner:** `algebraic-knot-concordance-and-metabolic-forms` (KT-22).

Integral Seifert forms with unimodular skew part are realizable by band surfaces, and the induced geometric-to-algebraic concordance map is a well-defined surjection; the algebraic group has Z∞⊕Z2∞⊕Z4∞ structure.

**Direct prerequisites:** `def-knot-seifert-pairing-and-matrix`, `thm-seifert-matrix-presents-knot-alexander-module`, `lem-seifert-matrix-s-equivalence-under-isotopy`, `thm-seifert-determinant-is-the-knot-alexander-polynomial`, `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `thm-knot-concordance-is-an-abelian-group`, `def-metabolic-seifert-form-and-algebraic-knot-concordance`, `def-integral-witt-and-seifert-isometric-structures`, `def-axiom-of-choice`.

**Proof/definition route:** Prove realization by controlling band linking, slice-to-metabolic and cancellation; reduce rational isometric structures to primary number-field Witt groups and prove their signature/local-discriminant classification. Separate realizability/surjectivity from the deeper group-classification proof.

**Source boundary:** reader-5/ Livingston 2004 §§2–3; reader-2/ Livingston Seifert Forms (2002). Future content authoring must supply local proofs; no citation-only fallback.

### `thm-levine-algebraic-concordance-classification`

**Kind:** theorem. **Owner:** `algebraic-knot-concordance-and-metabolic-forms` (KT-22).

states the sourced classification of the algebraic concordance group as Z^∞ ⊕ (Z/2)^∞ ⊕ (Z/4)^∞ via rational isometric structures and their real signatures and number-field/local Witt invariants, not signatures and Arf alone and records which hypotheses make the map from geometric concordance surjective.

**Direct prerequisites:** `def-knot-seifert-pairing-and-matrix`, `thm-seifert-matrix-presents-knot-alexander-module`, `lem-seifert-matrix-s-equivalence-under-isotopy`, `thm-seifert-determinant-is-the-knot-alexander-polynomial`, `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `thm-knot-concordance-is-an-abelian-group`, `def-metabolic-seifert-form-and-algebraic-knot-concordance`, `def-integral-witt-and-seifert-isometric-structures`, `lem-slice-disk-induces-seifert-metabolizer`, `thm-levine-algebraic-concordance-surjection-proof`, `def-axiom-of-choice`.

**Proof/definition route:** cut the 4-ball along the slice disk, use
the resulting homology cobordism of the Seifert surface, and identify the
kernel of the inclusion map as a half-rank isotropic subgroup. Prove the
metabolizer is integral and primitive; a rational Lagrangian alone is
insufficient for the integral Seifert form. For the classification theorem,
decompose the isometric structure over the rational function field into
primary summands, prove the local signature and discriminant invariants, then
assemble the Witt group using the exact source's number-theoretic lemmas.
Do not use the unrelated library `def-witt-algebra` for Witt groups.
**Local prerequisite modules:** `lem-slice-disk-induces-seifert-metabolizer`, `thm-levine-algebraic-concordance-surjection-proof`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-5/ Livingston 2004 §§2–3; reader-2/ Livingston Seifert Forms (2002). Future content authoring must supply local proofs; no citation-only fallback.

### `cex-knot-kt-22-boundary-case`

**Kind:** counterexample. **Owner:** `algebraic-knot-concordance-and-metabolic-forms-examples` (KT-22).

A zero-dimensional isotropic subspace of the rank-two trefoil lattice is not a Lagrangian; isotropic without half-rank is insufficient. Prove rational full Lagrangians do saturate to integral ones.

**Direct prerequisites:** `def-metabolic-seifert-form-and-algebraic-knot-concordance`, `lem-slice-disk-induces-seifert-metabolizer`, `thm-levine-algebraic-concordance-classification`, `thm-levine-algebraic-concordance-surjection-proof`, `def-integral-witt-and-seifert-isometric-structures`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-5/ Livingston 2004 §§2–3; reader-2/ Livingston Seifert Forms (2002). Future content authoring must supply local proofs; no citation-only fallback.

### `ex-knot-kt-22-worked-cases`

**Kind:** example. **Owner:** `algebraic-knot-concordance-and-metabolic-forms-examples` (KT-22).

The empty Seifert matrix is metabolic; the trefoil V above is not, since its −1 signature is2.

**Direct prerequisites:** `def-metabolic-seifert-form-and-algebraic-knot-concordance`, `lem-slice-disk-induces-seifert-metabolizer`, `thm-levine-algebraic-concordance-classification`, `thm-levine-algebraic-concordance-surjection-proof`, `def-integral-witt-and-seifert-isometric-structures`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-5/ Livingston 2004 §§2–3; reader-2/ Livingston Seifert Forms (2002). Future content authoring must supply local proofs; no citation-only fallback.

### `thm-locally-flat-slice-implies-fox-milnor-factorization`

**Kind:** theorem. **Owner:** `fox-milnor-factorization-and-slice-obstructions` (KT-23).

A primitive rank-g Seifert metabolizer makes det(V−tV^T) a unit times f(t)f(t^−1) with f integral.

**Direct prerequisites:** `thm-seifert-determinant-is-the-knot-alexander-polynomial`, `def-levine-tristram-hermitian-form-and-signature`, `lem-seifert-stabilization-preserves-levine-tristram-signature`, `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `thm-knot-concordance-is-an-abelian-group`, `def-metabolic-seifert-form-and-algebraic-knot-concordance`, `lem-slice-disk-induces-seifert-metabolizer`, `def-axiom-of-choice`.

**Proof/definition route:** Extend the metabolizer basis to an integral basis; the upper-left block vanishes, and expansion along its zero block factors the two complementary determinants. Metabolic Hermitian forms have equal positive/negative index away from roots. This is necessary, not sufficient for geometric sliceness.

**Source boundary:** reader-5/ Livingston 2004 §3. Future content authoring must supply local proofs; no citation-only fallback.

### `cor-nonfactorization-obstructs-sliceness`

**Kind:** corollary. **Owner:** `fox-milnor-factorization-and-slice-obstructions` (KT-23).

states the contrapositive as a necessary obstruction only.

**Direct prerequisites:** `thm-seifert-determinant-is-the-knot-alexander-polynomial`, `def-levine-tristram-hermitian-form-and-signature`, `lem-seifert-stabilization-preserves-levine-tristram-signature`, `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `thm-knot-concordance-is-an-abelian-group`, `def-metabolic-seifert-form-and-algebraic-knot-concordance`, `lem-slice-disk-induces-seifert-metabolizer`, `thm-locally-flat-slice-implies-fox-milnor-factorization`, `def-axiom-of-choice`.

**Proof/definition route:** use KT-22's integral metabolizer and the
KT-06 matrix presentation to choose a basis adapted to the metabolizer; the
Seifert matrix becomes block triangular modulo the metabolizer, and its
determinant factors as a polynomial times its reciprocal. For the signature,
the Hermitian form has complementary isotropic subspaces, so positive and
negative indices agree. Explicitly state that factorization/vanishing does
not prove sliceness. The general Fox determinant rule is not used; this is a
Seifert-form proof. **Local prerequisite modules:** `thm-locally-flat-slice-implies-fox-milnor-factorization`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-5/ Livingston 2004 §3. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-freedman-casson-handle-skyscraper-and-surgery-modules`

**Kind:** lemma. **Owner:** `freedman-theorem-and-topological-sliceness` (KT-25).

The controlled infinite tower constructed from the specified framed π1-null immersion has a standard open 2-handle neighborhood, preserving its attaching region; the resulting surgery is topological and locally flat.

**Direct prerequisites:** `thm-seifert-determinant-is-the-knot-alexander-polynomial`, `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `thm-knot-concordance-is-an-abelian-group`, `thm-locally-flat-slice-implies-fox-milnor-factorization`, `def-good-fundamental-group-for-disk-embedding`, `def-freedman-good-group-and-disk-embedding-data`, `def-axiom-of-choice`.

**Proof/definition route:** Define kinky handles, capped towers, nested shrinking neighborhoods and end control; prove the standardness/detection homeomorphism rel attaching collar and verify local-flatness. Arbitrary formal convergence of disks is not the standardness theorem.

**Source boundary:** reader-5/ Livingston 2004 §6; reader-5/ Topological 4-Manifolds: Disc Embedding Theorem and Beyond (2021 notes; outline only). Future content authoring must supply local proofs; no citation-only fallback.

### `thm-freedman-disk-embedding-theorem-proof-modules`

**Kind:** theorem. **Owner:** `freedman-theorem-and-topological-sliceness` (KT-25).

For a compact topological 4-manifold with good π1 and a finite framed immersed disk collection with vanishing equivariant intersections and framed algebraically dual spheres, replace disks rel boundary by disjoint locally-flat embedded disks with the stated duals.

**Direct prerequisites:** `thm-seifert-determinant-is-the-knot-alexander-polynomial`, `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `thm-knot-concordance-is-an-abelian-group`, `thm-locally-flat-slice-implies-fox-milnor-factorization`, `def-good-fundamental-group-for-disk-embedding`, `def-freedman-good-group-and-disk-embedding-data`, `lem-freedman-casson-handle-skyscraper-and-surgery-modules`, `def-axiom-of-choice`.

**Proof/definition route:** Establish the exact relative disk theorem through π1-null capped-grope splitting, Whitney towers, controlled Casson-handle construction and standardness. The read 2021 notes outline these decisive results; a complete theorem/proof source remains required.

**Source boundary:** reader-5/ Livingston 2004 §6; reader-5/ Topological 4-Manifolds: Disc Embedding Theorem and Beyond (2021 notes; outline only). Future content authoring must supply local proofs; no citation-only fallback.

### `thm-alexander-polynomial-one-implies-topologically-slice`

**Kind:** theorem. **Owner:** `freedman-theorem-and-topological-sliceness` (KT-25).

If the locally normalized knot Alexander polynomial is a unit, K bounds a locally-flat disk in standard B4, with no smooth conclusion.

**Direct prerequisites:** `thm-seifert-determinant-is-the-knot-alexander-polynomial`, `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `thm-knot-concordance-is-an-abelian-group`, `thm-locally-flat-slice-implies-fox-milnor-factorization`, `def-good-fundamental-group-for-disk-embedding`, `def-freedman-good-group-and-disk-embedding-data`, `thm-freedman-disk-embedding-theorem-proof-modules`, `def-axiom-of-choice`.

**Proof/definition route:** Build the π1=Z homology-circle surgery problem from the Seifert form, use the unit Alexander module input to kill surgery obstruction, apply good-group disk embedding, and identify the resulting ball/boundary via the required relative topological Poincare/h-cobordism inputs.

**Source boundary:** reader-5/ Livingston 2004 §6; reader-5/ Topological 4-Manifolds: Disc Embedding Theorem and Beyond (2021 notes; outline only). Future content authoring must supply local proofs; no citation-only fallback.

### `lem-alexander-one-knot-produces-a-good-group-disk-obstruction`

**Kind:** lemma. **Owner:** `freedman-theorem-and-topological-sliceness` (KT-25).

constructs from $\Delta_K(t)=1$ the required capped immersed surface and algebraically trivializes its intersections.

**Direct prerequisites:** `thm-seifert-determinant-is-the-knot-alexander-polynomial`, `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `thm-knot-concordance-is-an-abelian-group`, `thm-locally-flat-slice-implies-fox-milnor-factorization`, `def-good-fundamental-group-for-disk-embedding`, `def-freedman-good-group-and-disk-embedding-data`, `thm-alexander-polynomial-one-implies-topologically-slice`, `thm-freedman-disk-embedding-theorem-proof-modules`, `lem-freedman-casson-handle-skyscraper-and-surgery-modules`, `def-axiom-of-choice`.

**Proof/definition route:** specify separate modules for the
good-group criterion and controlled disk-embedding theorem; construction of
the capped grope/Casson tower; Whitney-disk framing and algebraic intersection
cancellation; convergence of the tower to a locally flat disk; and matching
the disk boundary to the original knot. Prove the Alexander-module input that
$\Delta=1$ removes the relevant obstruction, then apply the disk theorem.
Livingston's survey states this hard result but does not prove the disk
embedding machinery; the cited theorem is not treated as local proof. Do not
infer smooth sliceness. **Local prerequisite modules:** `def-freedman-good-group-and-disk-embedding-data`, `thm-freedman-disk-embedding-theorem-proof-modules`, `lem-freedman-casson-handle-skyscraper-and-surgery-modules`, `thm-alexander-polynomial-one-implies-topologically-slice`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-5/ Livingston 2004 §6; reader-5/ Topological 4-Manifolds: Disc Embedding Theorem and Beyond (2021 notes; outline only). Future content authoring must supply local proofs; no citation-only fallback.

### `thm-conway-knot-topologically-slice-not-smoothly-slice`

**Kind:** theorem. **Owner:** `zero-traces-and-conway-nonsliceness` (KT-54).

concludes C is locally-flat topologically slice but not smoothly slice.

**Direct prerequisites:** `def-oriented-slope-and-knot-dehn-filling`, `thm-framed-knot-surgery-trace-boundary`, `thm-kirby-moves-classify-framed-link-presentations`, `thm-alexander-polynomial-one-implies-topologically-slice`, `def-rasmussen-s-invariant`, `thm-rasmussen-s-bounds-smooth-four-ball-genus`, `def-smooth-zero-trace-and-dualizable-handle-link`, `def-axiom-of-choice`.

**Proof/definition route:** use the exact integer trace/Kirby interfaces, Lee/s theory and Alexander-one topological theorem. For trace embedding, one direction attaches the normal neighborhood of a slice disk in the opposite4-ball; conversely combine the handle core with the cone onK, embed the resulting sphere smooth away from its cone point, and remove a small standard ball about that point to obtain a smooth disk inB4. For dualizability, isotope R to a round dotted component, slide one zero-framed attaching circle off its disk and cancel the other1/2pair; then reverse roles. For the specific Conway partner, transcribe the source Kirby sequence into a finite PD/handle code with every oriented slide/framing change recorded, and independently recompute the rational Kh table or Lee filtered complex sufficient for s=2. Source Table1 is computer-reported and is not itself an independently verified local computation. Prove Δ_C=1 with the Seifert/module bridge, apply Freedman for local-flat sliceness, and transport smooth nonsliceness through trace embedding equivalence. No claim that same trace implies concordance is made.

**Source boundary:** Piccirillo arXiv:1808.02923v1, Lemma1.3, Proposition1.4, Theorem3.1, §4/Table1 and Figures2–4; reader-5 full read; auditor selected decisive prose passages.; Rasmussen arXiv:math/0402131v1, reader-6 full read; exact Lee/s and trace proof prerequisites local.. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-dualizable-handle-link-has-two-knot-trace-descriptions`

**Kind:** theorem. **Owner:** `zero-traces-and-conway-nonsliceness` (KT-54).

proves canceling R with B or G after the specified slides gives X(K)≅X(K′), with oriented framings tracked.

**Direct prerequisites:** `def-oriented-slope-and-knot-dehn-filling`, `thm-framed-knot-surgery-trace-boundary`, `thm-kirby-moves-classify-framed-link-presentations`, `thm-alexander-polynomial-one-implies-topologically-slice`, `def-rasmussen-s-invariant`, `thm-rasmussen-s-bounds-smooth-four-ball-genus`, `def-smooth-zero-trace-and-dualizable-handle-link`, `def-axiom-of-choice`.

**Proof/definition route:** use the exact integer trace/Kirby interfaces, Lee/s theory and Alexander-one topological theorem. For trace embedding, one direction attaches the normal neighborhood of a slice disk in the opposite4-ball; conversely combine the handle core with the cone onK, embed the resulting sphere smooth away from its cone point, and remove a small standard ball about that point to obtain a smooth disk inB4. For dualizability, isotope R to a round dotted component, slide one zero-framed attaching circle off its disk and cancel the other1/2pair; then reverse roles. For the specific Conway partner, transcribe the source Kirby sequence into a finite PD/handle code with every oriented slide/framing change recorded, and independently recompute the rational Kh table or Lee filtered complex sufficient for s=2. Source Table1 is computer-reported and is not itself an independently verified local computation. Prove Δ_C=1 with the Seifert/module bridge, apply Freedman for local-flat sliceness, and transport smooth nonsliceness through trace embedding equivalence. No claim that same trace implies concordance is made.

**Source boundary:** Piccirillo arXiv:1808.02923v1, Lemma1.3, Proposition1.4, Theorem3.1, §4/Table1 and Figures2–4; reader-5 full read; auditor selected decisive prose passages.; Rasmussen arXiv:math/0402131v1, reader-6 full read; exact Lee/s and trace proof prerequisites local.. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-freedman-disk-embedding-for-good-groups`

**Kind:** theorem. **Owner:** `freedman-theorem-and-topological-sliceness` (KT-25).

states the locally flat disk-embedding conclusion with its algebraic self-intersection and fundamental-group hypotheses.

**Direct prerequisites:** `thm-seifert-determinant-is-the-knot-alexander-polynomial`, `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `thm-knot-concordance-is-an-abelian-group`, `thm-locally-flat-slice-implies-fox-milnor-factorization`, `def-good-fundamental-group-for-disk-embedding`, `def-freedman-good-group-and-disk-embedding-data`, `thm-alexander-polynomial-one-implies-topologically-slice`, `thm-freedman-disk-embedding-theorem-proof-modules`, `lem-freedman-casson-handle-skyscraper-and-surgery-modules`, `def-axiom-of-choice`.

**Proof/definition route:** specify separate modules for the
good-group criterion and controlled disk-embedding theorem; construction of
the capped grope/Casson tower; Whitney-disk framing and algebraic intersection
cancellation; convergence of the tower to a locally flat disk; and matching
the disk boundary to the original knot. Prove the Alexander-module input that
$\Delta=1$ removes the relevant obstruction, then apply the disk theorem.
Livingston's survey states this hard result but does not prove the disk
embedding machinery; the cited theorem is not treated as local proof. Do not
infer smooth sliceness. **Local prerequisite modules:** `def-freedman-good-group-and-disk-embedding-data`, `thm-freedman-disk-embedding-theorem-proof-modules`, `lem-freedman-casson-handle-skyscraper-and-surgery-modules`, `thm-alexander-polynomial-one-implies-topologically-slice`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-5/ Livingston 2004 §6; reader-5/ Topological 4-Manifolds: Disc Embedding Theorem and Beyond (2021 notes; outline only). Future content authoring must supply local proofs; no citation-only fallback.

### `cex-knot-kt-25-boundary-case`

**Kind:** counterexample. **Owner:** `freedman-theorem-and-topological-sliceness-examples` (KT-25).

Trefoil has nonunit Δ, so the Alexander-one theorem has no conclusion; failure of a sufficient condition alone is not a nonsliceness proof.

**Direct prerequisites:** `def-good-fundamental-group-for-disk-embedding`, `thm-freedman-disk-embedding-for-good-groups`, `lem-alexander-one-knot-produces-a-good-group-disk-obstruction`, `thm-alexander-polynomial-one-implies-topologically-slice`, `def-freedman-good-group-and-disk-embedding-data`, `thm-freedman-disk-embedding-theorem-proof-modules`, `lem-freedman-casson-handle-skyscraper-and-surgery-modules`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-5/ Livingston 2004 §6; reader-5/ Topological 4-Manifolds: Disc Embedding Theorem and Beyond (2021 notes; outline only). Future content authoring must supply local proofs; no citation-only fallback.

### `ex-knot-kt-25-worked-cases`

**Kind:** example. **Owner:** `freedman-theorem-and-topological-sliceness-examples` (KT-25).

A positive untwisted Whitehead double has Seifert determinant a unit; the established topological theorem supplies a locally-flat slice disk after its future proof is built.

**Direct prerequisites:** `def-good-fundamental-group-for-disk-embedding`, `thm-freedman-disk-embedding-for-good-groups`, `lem-alexander-one-knot-produces-a-good-group-disk-obstruction`, `thm-alexander-polynomial-one-implies-topologically-slice`, `def-freedman-good-group-and-disk-embedding-data`, `thm-freedman-disk-embedding-theorem-proof-modules`, `lem-freedman-casson-handle-skyscraper-and-surgery-modules`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-5/ Livingston 2004 §6; reader-5/ Topological 4-Manifolds: Disc Embedding Theorem and Beyond (2021 notes; outline only). Future content authoring must supply local proofs; no citation-only fallback.

### `thm-knot-slice-iff-zero-trace-embeds-in-s-four`

**Kind:** theorem. **Owner:** `zero-traces-and-conway-nonsliceness` (KT-54).

proves K smoothly slice iff X(K) smoothly embeds in standardS4.

**Direct prerequisites:** `def-oriented-slope-and-knot-dehn-filling`, `thm-framed-knot-surgery-trace-boundary`, `thm-kirby-moves-classify-framed-link-presentations`, `thm-alexander-polynomial-one-implies-topologically-slice`, `def-rasmussen-s-invariant`, `thm-rasmussen-s-bounds-smooth-four-ball-genus`, `def-smooth-zero-trace-and-dualizable-handle-link`, `def-axiom-of-choice`.

**Proof/definition route:** use the exact integer trace/Kirby interfaces, Lee/s theory and Alexander-one topological theorem. For trace embedding, one direction attaches the normal neighborhood of a slice disk in the opposite4-ball; conversely combine the handle core with the cone onK, embed the resulting sphere smooth away from its cone point, and remove a small standard ball about that point to obtain a smooth disk inB4. For dualizability, isotope R to a round dotted component, slide one zero-framed attaching circle off its disk and cancel the other1/2pair; then reverse roles. For the specific Conway partner, transcribe the source Kirby sequence into a finite PD/handle code with every oriented slide/framing change recorded, and independently recompute the rational Kh table or Lee filtered complex sufficient for s=2. Source Table1 is computer-reported and is not itself an independently verified local computation. Prove Δ_C=1 with the Seifert/module bridge, apply Freedman for local-flat sliceness, and transport smooth nonsliceness through trace embedding equivalence. No claim that same trace implies concordance is made.

**Source boundary:** Piccirillo arXiv:1808.02923v1, Lemma1.3, Proposition1.4, Theorem3.1, §4/Table1 and Figures2–4; reader-5 full read; auditor selected decisive prose passages.; Rasmussen arXiv:math/0402131v1, reader-6 full read; exact Lee/s and trace proof prerequisites local.. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-metabolizer-implies-levine-tristram-signature-vanishing`

**Kind:** theorem. **Owner:** `fox-milnor-factorization-and-slice-obstructions` (KT-23).

proves the signature vanishes at unit complex numbers away from roots of $\Delta$ whenever the form is metabolic.

**Direct prerequisites:** `thm-seifert-determinant-is-the-knot-alexander-polynomial`, `def-levine-tristram-hermitian-form-and-signature`, `lem-seifert-stabilization-preserves-levine-tristram-signature`, `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `thm-knot-concordance-is-an-abelian-group`, `def-metabolic-seifert-form-and-algebraic-knot-concordance`, `lem-slice-disk-induces-seifert-metabolizer`, `thm-locally-flat-slice-implies-fox-milnor-factorization`, `def-axiom-of-choice`.

**Proof/definition route:** use KT-22's integral metabolizer and the
KT-06 matrix presentation to choose a basis adapted to the metabolizer; the
Seifert matrix becomes block triangular modulo the metabolizer, and its
determinant factors as a polynomial times its reciprocal. For the signature,
the Hermitian form has complementary isotropic subspaces, so positive and
negative indices agree. Explicitly state that factorization/vanishing does
not prove sliceness. The general Fox determinant rule is not used; this is a
Seifert-form proof. **Local prerequisite modules:** `thm-locally-flat-slice-implies-fox-milnor-factorization`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-5/ Livingston 2004 §3. Future content authoring must supply local proofs; no citation-only fallback.

### `cex-knot-kt-23-boundary-case`

**Kind:** counterexample. **Owner:** `fox-milnor-factorization-and-slice-obstructions-examples` (KT-23).

Trefoil Δ=t²−t+1 is not an integral reciprocal norm because its value at−1 is3, not a square; this obstructs locally-flat sliceness.

**Direct prerequisites:** `thm-locally-flat-slice-implies-fox-milnor-factorization`, `cor-nonfactorization-obstructs-sliceness`, `thm-metabolizer-implies-levine-tristram-signature-vanishing`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-5/ Livingston 2004 §3. Future content authoring must supply local proofs; no citation-only fallback.

### `ex-knot-kt-23-worked-cases`

**Kind:** example. **Owner:** `fox-milnor-factorization-and-slice-obstructions-examples` (KT-23).

For the ribbon square knot Δ=(t²−t+1)² is a Fox–Milnor norm; exhibit its block Seifert metabolizer.

**Direct prerequisites:** `thm-locally-flat-slice-implies-fox-milnor-factorization`, `cor-nonfactorization-obstructs-sliceness`, `thm-metabolizer-implies-levine-tristram-signature-vanishing`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-5/ Livingston 2004 §3. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-os-khovanov-spectral-sequence-to-branched-cover-floer`

**Kind:** theorem. **Owner:** `khovanov-to-floer-spectral-sequence` (KT-45).

states that for a link diagram the spectral sequence has $E_2=\widetilde{Kh}^{*}(\overline L; \mathbb F_2)$ and converges to $\widehat{HF}(\Sigma(L);\mathbb F_2)$. It does not claim diagram-independent filtered quasi-isomorphism unless the additional invariance module is proved.

**Direct prerequisites:** `def-cyclic-branched-cover-of-a-knot`, `lem-cyclic-cover-linking-form-inverse-matrix`, `def-khovanov-frobenius-algebra-and-cube-of-resolutions`, `def-reduced-khovanov-cohomology-of-a-knot`, `thm-khovanov-homology-is-an-oriented-link-invariant`, `def-admissible-pointed-heegaard-floer-data`, `def-grid-diagram-for-an-oriented-knot`, `thm-grid-homology-independent-of-grid-and-equals-knot-floer`, `lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing`, `def-filtered-chain-complex`, `thm-a-filtered-complex-produces-an-exact-couple`, `thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology`, `def-link-surgery-filtered-complex-for-double-branched-cover`, `lem-os-link-surgery-filtered-complex-and-triangle`, `lem-os-first-differential-is-reduced-khovanov`, `lem-os-filtered-convergence-and-invariance-scope`, `def-axiom-of-choice`.

**Proof/definition route:** construct the surgery exact-triangle
complex, verify the cube filtration is bounded and exhaustive, identify the
E1 terms with the Heegaard Floer groups of resolution covers, and prove the
E1 differential agrees with the Khovanov differential under the TQFT
identification. Add local modules for triangle-count transversality,
compactness, gluing and the surgery exact triangle. Ozsváth–Szabó's 2005 paper
states that filtered quasi-isomorphism invariance was expected, not established
there; keep it as an explicit separate obligation if a link invariant
spectral sequence is claimed. **Local prerequisite modules:** `lem-os-link-surgery-filtered-complex-and-triangle`, `lem-os-first-differential-is-reduced-khovanov`, `lem-os-filtered-convergence-and-invariance-scope`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-6/ Ozsváth–Szabó arXiv:math/0309170v1; filtered-quasi-isomorphism invariance not proved in paper. Future content authoring must supply local proofs; no citation-only fallback.

### `cex-knot-kt-45-boundary-case`

**Kind:** counterexample. **Owner:** `khovanov-to-floer-spectral-sequence-examples` (KT-45).

The2-step filtered complex generated by x,y with d x=y has a nonzero early page but zero total homology; invariant endpoints alone do not make intermediate-page identifications canonical between diagrams.

**Direct prerequisites:** `def-link-surgery-filtered-complex-for-double-branched-cover`, `lem-link-surgery-e-one-differential-is-reduced-khovanov`, `thm-os-khovanov-spectral-sequence-to-branched-cover-floer`, `lem-os-link-surgery-filtered-complex-and-triangle`, `lem-os-first-differential-is-reduced-khovanov`, `lem-os-filtered-convergence-and-invariance-scope`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-6/ Ozsváth–Szabó arXiv:math/0309170v1; filtered-quasi-isomorphism invariance not proved in paper. Future content authoring must supply local proofs; no citation-only fallback.

### `ex-knot-kt-45-worked-cases`

**Kind:** example. **Owner:** `khovanov-to-floer-spectral-sequence-examples` (KT-45).

For trefoil, reduced Kh overF2 has rank3 and HFhat(Σ2(trefoil)) rank3; the total-rank inequality is consistent with collapse.

**Direct prerequisites:** `def-link-surgery-filtered-complex-for-double-branched-cover`, `lem-link-surgery-e-one-differential-is-reduced-khovanov`, `thm-os-khovanov-spectral-sequence-to-branched-cover-floer`, `lem-os-link-surgery-filtered-complex-and-triangle`, `lem-os-first-differential-is-reduced-khovanov`, `lem-os-filtered-convergence-and-invariance-scope`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-6/ Ozsváth–Szabó arXiv:math/0309170v1; filtered-quasi-isomorphism invariance not proved in paper. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-piccirillo-conway-trace-partner-has-s-two`

**Kind:** theorem. **Owner:** `zero-traces-and-conway-nonsliceness` (KT-54).

states the particular K′ constructed from the Conway knot in Piccirillo2018§3/Figures2–4 has X(K′)≅X(C) and s(K′)=2.

**Direct prerequisites:** `def-oriented-slope-and-knot-dehn-filling`, `thm-framed-knot-surgery-trace-boundary`, `thm-kirby-moves-classify-framed-link-presentations`, `thm-alexander-polynomial-one-implies-topologically-slice`, `def-rasmussen-s-invariant`, `thm-rasmussen-s-bounds-smooth-four-ball-genus`, `def-smooth-zero-trace-and-dualizable-handle-link`, `def-axiom-of-choice`.

**Proof/definition route:** use the exact integer trace/Kirby interfaces, Lee/s theory and Alexander-one topological theorem. For trace embedding, one direction attaches the normal neighborhood of a slice disk in the opposite4-ball; conversely combine the handle core with the cone onK, embed the resulting sphere smooth away from its cone point, and remove a small standard ball about that point to obtain a smooth disk inB4. For dualizability, isotope R to a round dotted component, slide one zero-framed attaching circle off its disk and cancel the other1/2pair; then reverse roles. For the specific Conway partner, transcribe the source Kirby sequence into a finite PD/handle code with every oriented slide/framing change recorded, and independently recompute the rational Kh table or Lee filtered complex sufficient for s=2. Source Table1 is computer-reported and is not itself an independently verified local computation. Prove Δ_C=1 with the Seifert/module bridge, apply Freedman for local-flat sliceness, and transport smooth nonsliceness through trace embedding equivalence. No claim that same trace implies concordance is made.

**Source boundary:** Piccirillo arXiv:1808.02923v1, Lemma1.3, Proposition1.4, Theorem3.1, §4/Table1 and Figures2–4; reader-5 full read; auditor selected decisive prose passages.; Rasmussen arXiv:math/0402131v1, reader-6 full read; exact Lee/s and trace proof prerequisites local.. Future content authoring must supply local proofs; no citation-only fallback.

### `cex-zero-trace-does-not-force-concordance`

**Kind:** counterexample. **Owner:** `zero-traces-and-conway-nonsliceness-examples` (KT-54).

Piccirillo's Conway partner has the same0-trace as C but s(K′)=2 versus s(C)=0, so same0-trace does not imply smooth concordance. Both s values require their own explicit local filtered computation; neither follows solely from trace equivalence.

**Direct prerequisites:** `def-smooth-zero-trace-and-dualizable-handle-link`, `thm-knot-slice-iff-zero-trace-embeds-in-s-four`, `thm-dualizable-handle-link-has-two-knot-trace-descriptions`, `thm-piccirillo-conway-trace-partner-has-s-two`, `thm-conway-knot-topologically-slice-not-smoothly-slice`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** Piccirillo arXiv:1808.02923v1, Lemma1.3, Proposition1.4, Theorem3.1, §4/Table1 and Figures2–4; reader-5 full read; auditor selected decisive prose passages.; Rasmussen arXiv:math/0402131v1, reader-6 full read; exact Lee/s and trace proof prerequisites local.. Future content authoring must supply local proofs; no citation-only fallback.

### `ex-unknot-zero-trace-and-dualizable-cancellation`

**Kind:** example. **Owner:** `zero-traces-and-conway-nonsliceness-examples` (KT-54).

X(unknot)=S2×D2 embeds smoothly inS4 as the standard sphere neighborhood; verify the zero-framed unknot handle attachment.

**Direct prerequisites:** `def-smooth-zero-trace-and-dualizable-handle-link`, `thm-knot-slice-iff-zero-trace-embeds-in-s-four`, `thm-dualizable-handle-link-has-two-knot-trace-descriptions`, `thm-piccirillo-conway-trace-partner-has-s-two`, `thm-conway-knot-topologically-slice-not-smoothly-slice`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** Piccirillo arXiv:1808.02923v1, Lemma1.3, Proposition1.4, Theorem3.1, §4/Table1 and Figures2–4; reader-5 full read; auditor selected decisive prose passages.; Rasmussen arXiv:math/0402131v1, reader-6 full read; exact Lee/s and trace proof prerequisites local.. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-seifert-s-equivalence-and-conway-arf-bridge`

**Kind:** theorem. **Owner:** `levine-tristram-signatures-and-arf-invariant` (KT-12).

The normalized Conway coefficient a2 mod2 equals the Seifert quadratic Arf invariant and is independent of surface.

**Direct prerequisites:** `def-knot-seifert-pairing-and-matrix`, `thm-seifert-matrix-presents-knot-alexander-module`, `lem-seifert-matrix-s-equivalence-under-isotopy`, `thm-seifert-determinant-is-the-knot-alexander-polynomial`, `def-levine-tristram-hermitian-form-and-signature`, `def-knot-arf-invariant-from-seifert-form`, `def-seifert-s-equivalence-and-conway-normalization`, `lem-arf-quadratic-enhancement-from-seifert-form`, `def-axiom-of-choice`.

**Proof/definition route:** Use common surface stabilization and a symplectic determinant expansion in z.

**Source boundary:** reader-2/ Livingston 2002 and Survey of Classical Knot Concordance v4; reader-2/ source convention audit of Levine–Tristram Hermitian form. Future content authoring must supply local proofs; no citation-only fallback.

### `cex-knot-kt-12-boundary-case`

**Kind:** counterexample. **Owner:** `levine-tristram-signatures-and-arf-invariant-examples` (KT-12).

At a primitive sixth root the trefoil Hermitian form is singular; nondegenerate signature formulas cannot be applied there without the explicitly defined limiting convention.

**Direct prerequisites:** `def-levine-tristram-hermitian-form-and-signature`, `lem-seifert-stabilization-preserves-levine-tristram-signature`, `def-knot-arf-invariant-from-seifert-form`, `thm-arf-equals-second-conway-coefficient-mod-two`, `lem-arf-quadratic-enhancement-from-seifert-form`, `def-seifert-s-equivalence-and-conway-normalization`, `thm-seifert-s-equivalence-and-conway-arf-bridge`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-2/ Livingston 2002 and Survey of Classical Knot Concordance v4; reader-2/ source convention audit of Levine–Tristram Hermitian form. Future content authoring must supply local proofs; no citation-only fallback.

### `ex-knot-kt-12-worked-cases`

**Kind:** example. **Owner:** `levine-tristram-signatures-and-arf-invariant-examples` (KT-12).

For the displayed positive-definite trefoil V, the −1 Hermitian signature is2 and Arf=1; figure-eight has signature0 and Arf=1.

**Direct prerequisites:** `def-levine-tristram-hermitian-form-and-signature`, `lem-seifert-stabilization-preserves-levine-tristram-signature`, `def-knot-arf-invariant-from-seifert-form`, `thm-arf-equals-second-conway-coefficient-mod-two`, `lem-arf-quadratic-enhancement-from-seifert-form`, `def-seifert-s-equivalence-and-conway-normalization`, `thm-seifert-s-equivalence-and-conway-arf-bridge`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-2/ Livingston 2002 and Survey of Classical Knot Concordance v4; reader-2/ source convention audit of Levine–Tristram Hermitian form. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-seifert-surface-from-diagram-procedure-properties`

**Kind:** theorem. **Owner:** `seifert-surfaces-and-knot-genus` (KT-04).

For exactly the admissible encoded inputs of alg-seifert-surface-from-diagram, execution terminates, rejects precisely the stated syntactic failures and returns the prescribed finite output. Any identification with a topological invariant, recognition completeness, or asymptotic complexity is only the separately proved domain result, not inferred from finite execution.

**Direct prerequisites:** `alg-seifert-surface-from-diagram`, `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `thm-linking-number-is-invariant-and-writhe-is-not`, `def-seifert-smoothing-and-seifert-circles-of-an-oriented-link-diagram`, `lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups`, `def-oriented-seifert-surface-and-knot-genus`, `def-countable-choice`.

**Proof/definition route:** Use the explicit finite loop/state/word or bounded search measure in the procedure; prove each branch preserves the stated output representation and all arithmetic is effective. Cite the domain correctness and completeness modules separately when claiming invariant/recognition meaning.

**Source boundary:** reader-1/ Calegari 2025 §3.1; reader-1/ Gardner-Livingston §4.3, visually read proof supplement. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-seifert-zero-framing-and-framing-integer`

**Kind:** theorem. **Owner:** `seifert-surfaces-and-knot-genus` (KT-04).

For a fixed oriented knot, homotopy framing classes form a Z-torsor; any oriented Seifert surface selects self-linking-zero framing.

**Direct prerequisites:** `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `thm-linking-number-is-invariant-and-writhe-is-not`, `def-seifert-smoothing-and-seifert-circles-of-an-oriented-link-diagram`, `lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups`, `def-oriented-seifert-surface-and-knot-genus`, `def-framed-knot-self-linking-and-seifert-framing`, `def-countable-choice`.

**Proof/definition route:** Trivialize the normal bundle, lift a relative angle to R and identify its integer winding; compare Seifert push-off with surface intersection.

**Source boundary:** reader-1/ Calegari 2025 §3.1; reader-1/ Gardner-Livingston §4.3, visually read proof supplement. Future content authoring must supply local proofs; no citation-only fallback.

### `cex-knot-kt-04-boundary-case`

**Kind:** counterexample. **Owner:** `seifert-surfaces-and-knot-genus-examples` (KT-04).

Adding a trivial tube to a disk produces a genus-one Seifert surface for the unknot, whose minimum genus is0; a chosen spanning surface need not be minimal.

**Direct prerequisites:** `def-oriented-seifert-surface-and-knot-genus`, `alg-seifert-surface-from-diagram`, `thm-seifert-algorithm-boundary-euler-and-genus`, `lem-seifert-bands-embedded-orientable-boundary-correct`, `thm-seifert-zero-framing-and-framing-integer`, `thm-seifert-surface-from-diagram-procedure-properties`, `def-countable-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-1/ Calegari 2025 §3.1; reader-1/ Gardner-Livingston §4.3, visually read proof supplement. Future content authoring must supply local proofs; no citation-only fallback.

### `ex-knot-kt-04-worked-cases`

**Kind:** example. **Owner:** `seifert-surfaces-and-knot-genus-examples` (KT-04).

Trefoil Seifert construction has s=2,c=3,g=1; figure-eight s=3,c=4,g=1; kinked unknot s=2,c=1,g=0.

**Direct prerequisites:** `def-oriented-seifert-surface-and-knot-genus`, `alg-seifert-surface-from-diagram`, `thm-seifert-algorithm-boundary-euler-and-genus`, `lem-seifert-bands-embedded-orientable-boundary-correct`, `thm-seifert-zero-framing-and-framing-integer`, `thm-seifert-surface-from-diagram-procedure-properties`, `def-countable-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-1/ Calegari 2025 §3.1; reader-1/ Gardner-Livingston §4.3, visually read proof supplement. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-skein-module-of-s-three-is-rank-one`

**Kind:** theorem. **Owner:** `skein-modules-for-links-in-three-manifolds` (KT-31).

The bracket skein module of S3 over Z[A±1] is freely generated by the empty link, with a trivial circle equal to δ times that generator.

**Direct prerequisites:** `def-kauffman-bracket-smoothing-and-loop-value`, `thm-normalized-bracket-is-an-oriented-link-invariant`, `def-kauffman-bracket-skein-module-of-a-three-manifold`, `def-axiom-of-choice`.

**Proof/definition route:** Resolve all crossings into unlinks for spanning; define the unnormalized bracket functional with empty value one for independence. It differs by a δ factor from the normalized nonempty bracket.

**Source boundary:** reader-3/ Pohorence, 3-manifold Invariants and TQFTs (Jan.2016), pp.1–16; reader-3/ Chen arXiv:1502.06845v1, restricted surface TV scope only. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-skein-module-of-solid-torus-has-core-multicurve-basis`

**Kind:** theorem. **Owner:** `skein-modules-for-links-in-three-manifolds` (KT-31).

Over Z[A±1], the solid-torus bracket skein module has basis z^n, n≥0, for n parallel unframed-annular cores with blackboard framing.

**Direct prerequisites:** `def-kauffman-bracket-smoothing-and-loop-value`, `thm-normalized-bracket-is-an-oriented-link-invariant`, `def-kauffman-bracket-skein-module-of-a-three-manifold`, `def-axiom-of-choice`.

**Proof/definition route:** Resolve annular diagrams to essential core multicurves and trivial circles; define a state expansion into the free polynomial module and prove local R2/R3 and framing compatibility to obtain a two-sided inverse, not merely a degree-count guess.

**Source boundary:** reader-3/ Pohorence, 3-manifold Invariants and TQFTs (Jan.2016), pp.1–16; reader-3/ Chen arXiv:1502.06845v1, restricted surface TV scope only. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-skein-module-isomorphism-respects-framings-and-boundary`

**Kind:** lemma. **Owner:** `skein-modules-for-links-in-three-manifolds` (KT-31).

proves the quotient is invariant under orientation-preserving diffeomorphism and that boundary collars give the declared gluing action.

**Direct prerequisites:** `def-kauffman-bracket-smoothing-and-loop-value`, `thm-normalized-bracket-is-an-oriented-link-invariant`, `def-kauffman-bracket-skein-module-of-a-three-manifold`, `thm-skein-module-of-s-three-is-rank-one`, `thm-skein-module-of-solid-torus-has-core-multicurve-basis`, `lem-general-3manifold-skein-quotient-isotopy-and-gluing`, `def-axiom-of-choice`.

**Proof/definition route:** use the bracket convention of KT-29. For
$S^3$, reduce any link diagram by descending-crossing skein resolution to a
linear combination of unlinks, and use the bracket invariant to prove the
unlink is not killed. For the solid torus, resolve crossings to annular simple
closed curves and prove independence by the annular closure trace/polynomial
degree. Specify whether the source's skein modules are framed links in a 3-
manifold or state spaces of marked surfaces; they are different constructions.
The Chen thesis source treats finite-fusion-category state modules of marked
surfaces and does not prove the arbitrary-3-manifold Kauffman skein module.
**Local prerequisite modules:** `lem-general-3manifold-skein-quotient-isotopy-and-gluing`, `thm-skein-module-of-s-three-is-rank-one`, `thm-skein-module-of-solid-torus-has-core-multicurve-basis`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-3/ Pohorence, 3-manifold Invariants and TQFTs (Jan.2016), pp.1–16; reader-3/ Chen arXiv:1502.06845v1, restricted surface TV scope only. Future content authoring must supply local proofs; no citation-only fallback.

### `cex-knot-kt-31-boundary-case`

**Kind:** counterexample. **Owner:** `skein-modules-for-links-in-three-manifolds-examples` (KT-31).

Rotating a blackboard framing by one changes the class by−A±3; unframed isotopy cannot silently identify those skein classes.

**Direct prerequisites:** `def-kauffman-bracket-skein-module-of-a-three-manifold`, `lem-skein-module-isomorphism-respects-framings-and-boundary`, `thm-skein-module-of-s-three-is-rank-one`, `thm-skein-module-of-solid-torus-has-core-multicurve-basis`, `lem-general-3manifold-skein-quotient-isotopy-and-gluing`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-3/ Pohorence, 3-manifold Invariants and TQFTs (Jan.2016), pp.1–16; reader-3/ Chen arXiv:1502.06845v1, restricted surface TV scope only. Future content authoring must supply local proofs; no citation-only fallback.

### `ex-knot-kt-31-worked-cases`

**Kind:** example. **Owner:** `skein-modules-for-links-in-three-manifolds-examples` (KT-31).

In S3 skein module a trivial circle is δ times the empty generator; in a solid torus z and z² are distinct basis elements over Z[A±1].

**Direct prerequisites:** `def-kauffman-bracket-skein-module-of-a-three-manifold`, `lem-skein-module-isomorphism-respects-framings-and-boundary`, `thm-skein-module-of-s-three-is-rank-one`, `thm-skein-module-of-solid-torus-has-core-multicurve-basis`, `lem-general-3manifold-skein-quotient-isotopy-and-gluing`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-3/ Pohorence, 3-manifold Invariants and TQFTs (Jan.2016), pp.1–16; reader-3/ Chen arXiv:1502.06845v1, restricted surface TV scope only. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-stallings-integral-lower-central-isomorphism`

**Kind:** theorem. **Owner:** `milnor-invariants-and-link-peripheral-nilpotent-quotients` (KT-53).

If f:G→H induces an isomorphism H1(−;Z) and a surjection H2(−;Z), then G/Γ_qG→H/Γ_qH is an isomorphism for every finite q≥1.

**Direct prerequisites:** `def-lower-central-series-and-magnus-expansion-for-links`, `def-axiom-of-choice`.

**Proof/definition route:** Use the five-term homology exact sequence for central extensions and induction to identify Γ_q/Γ_(q+1); supply the group homology construction and exact sequence locally or via exact accepted suppliers.

**Source boundary:** Explicit local derivation; complete classical source recovery required for the stated deep theorem.. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-string-link-nilpotent-peripheral-identifications`

**Kind:** theorem. **Owner:** `milnor-invariants-and-link-peripheral-nilpotent-quotients` (KT-53).

proves each end inclusion F_r→π1(exterior) induces F_r/Γ_q≅G/Γ_q for every finite q using the integral Stallings hypothesis H1 isomorphism and H2 surjection. Its local supplier proves that group theorem via the five-term homology sequence of central extensions and induction; the exterior homology hypotheses are separately proved by duality.

**Direct prerequisites:** `def-based-string-link-and-labeled-link-peripheral-system`, `def-lower-central-series-and-magnus-expansion-for-links`, `lem-string-link-exterior-homology-and-meridian-maps`, `thm-stallings-integral-lower-central-isomorphism`, `def-axiom-of-choice`.

**Proof/definition route:** KT-01 supplies local Wirtinger relations, KT-02 the knot peripheral model which is extended explicitly componentwise here, and KT-03 linking number. A Magnus commutator degree lemma proves E(Γ_qF)⊂1+(X)^q and independence to the stated degree. A basing-change lemma tracks conjugations and longitude meridian corrections; its coefficient recursion produces exactly Δ_I. A self-crossing-change lemma proves nonrepeating-index invariance and explicitly excludes arbitrary repeated-index link-homotopy invariance. These are substantial new local obligations with no claimed full-source coverage in the six dossiers; recover Milnor's primary theorem/complete treatment before future acceptance. The plan preserves the established theorem contracts without treating bibliographic names as proved suppliers.

**Source boundary:** Explicit local derivation; complete classical source recovery required for the stated deep theorem.. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-milnor-basing-indeterminacy-and-self-crossing-scope`

**Kind:** lemma. **Owner:** `milnor-invariants-and-link-peripheral-nilpotent-quotients` (KT-53).

Changing closed-link basings/closure gives precisely the lower-index/cyclic-subsequence gcd indeterminacy Δ_I; nonrepeating coefficients are unchanged under component self-crossing changes.

**Direct prerequisites:** `thm-knot-wirtinger-presentation-correctness`, `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `thm-linking-number-is-invariant-and-writhe-is-not`, `def-maximal-abelian-cover-alexander-module`, `thm-abelian-cover-chain-model-computes-alexander-module`, `def-based-string-link-and-labeled-link-peripheral-system`, `def-lower-central-series-and-magnus-expansion-for-links`, `def-milnor-integer-and-residue-invariants`, `lem-magnus-commutator-degree-and-truncation`, `thm-string-link-nilpotent-peripheral-identifications`, `def-axiom-of-choice`.

**Proof/definition route:** Track longitude conjugation, preferred-meridian correction and closure basing word moves in Magnus coefficients degree by degree; derive the generated ideal and prove repeated-index exclusions. Complete Milnor source recovery remains a prerequisite to acceptance.

**Source boundary:** Explicit local derivation; complete classical source recovery required for the stated deep theorem.. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-milnor-invariants-isotopy-and-link-homotopy-scope`

**Kind:** theorem. **Owner:** `milnor-invariants-and-link-peripheral-nilpotent-quotients` (KT-53).

proves string-link isotopy invariance for all index sequences; for closed links it proves exactly the stated indeterminacy under basing/conjugation/closure changes, and link-homotopy invariance only for nonrepeating indices.

**Direct prerequisites:** `def-milnor-integer-and-residue-invariants`, `thm-string-link-nilpotent-peripheral-identifications`, `lem-milnor-basing-indeterminacy-and-self-crossing-scope`, `def-axiom-of-choice`.

**Proof/definition route:** KT-01 supplies local Wirtinger relations, KT-02 the knot peripheral model which is extended explicitly componentwise here, and KT-03 linking number. A Magnus commutator degree lemma proves E(Γ_qF)⊂1+(X)^q and independence to the stated degree. A basing-change lemma tracks conjugations and longitude meridian corrections; its coefficient recursion produces exactly Δ_I. A self-crossing-change lemma proves nonrepeating-index invariance and explicitly excludes arbitrary repeated-index link-homotopy invariance. These are substantial new local obligations with no claimed full-source coverage in the six dossiers; recover Milnor's primary theorem/complete treatment before future acceptance. The plan preserves the established theorem contracts without treating bibliographic names as proved suppliers.

**Source boundary:** Explicit local derivation; complete classical source recovery required for the stated deep theorem.. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-sutured-instanton-khi-rank-detects-unknot`

**Kind:** theorem. **Owner:** `khovanov-homology-detects-the-unknot` (KT-44).

For classical S3 knots, KHI(K;Q) has rank one iff K is unknot; the excision bridge identifies I^natural(K;Q) with this group.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-khovanov-frobenius-algebra-and-cube-of-resolutions`, `def-reduced-khovanov-cohomology-of-a-knot`, `thm-khovanov-homology-is-an-oriented-link-invariant`, `def-instanton-knot-homology-and-canonical-class`, `def-singular-instanton-knot-and-sutured-closure-data`, `lem-instanton-knot-complex-asd-analytic-foundations`, `def-axiom-of-choice`.

**Proof/definition route:** Define sutured instanton closure/auxiliary bundle independence, prove excision and the sutured decomposition/nonvanishing genus result; a positive-genus knot has additional top/bottom contributions. The separate Knots,sutures,excision source must be recovered; KM's detector paper cites this input.

**Source boundary:** reader-6/ Kronheimer–Mrowka arXiv:1005.4346v1, Theorem 1.1; KHI rank detector separately cited. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-property-p-instanton-surgery-triangle-and-rank-input`

**Kind:** lemma. **Owner:** `knot-exterior-rigidity-and-the-complement-theorem` (KT-15).

For a nontrivial S3 knot, nonmeridional filling has nontrivial fundamental group; homology excludes numerator other than ±1 and instanton surgery constraints handle ±1/q.

**Direct prerequisites:** `thm-knot-wirtinger-presentation-correctness`, `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-oriented-slope-and-knot-dehn-filling`, `thm-framed-knot-surgery-trace-boundary`, `def-singular-instanton-knot-and-sutured-closure-data`, `lem-instanton-knot-complex-asd-analytic-foundations`, `thm-sutured-instanton-khi-rank-detects-unknot`, `def-instanton-surgery-triangle-data`, `def-axiom-of-choice`.

**Proof/definition route:** Construct the appropriate admissible instanton surgery triangle, nontrivial-knot rank/nonvanishing input and extension to reciprocal slopes; carry perturbation and bundle choices. This theorem requires more source recovery than the six reader dossiers and cannot be certified by Hatcher/Thurston context alone.

**Source boundary:** reader-4/ Hatcher and Baldwin–Sivek 2026 theorem context; Property P gauge proof is an explicit local module. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-gordon-luecke-knot-complement-determines-knot`

**Kind:** theorem. **Owner:** `knot-exterior-rigidity-and-the-complement-theorem` (KT-15).

An exterior homeomorphism carries the unique S3-filling slope to the meridian and extends across the solid torus; state unoriented knot and ambient orientation cases separately.

**Direct prerequisites:** `thm-knot-wirtinger-presentation-correctness`, `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-oriented-slope-and-knot-dehn-filling`, `thm-framed-knot-surgery-trace-boundary`, `def-singular-instanton-knot-and-sutured-closure-data`, `lem-instanton-knot-complex-asd-analytic-foundations`, `thm-sutured-instanton-khi-rank-detects-unknot`, `def-instanton-surgery-triangle-data`, `def-axiom-of-choice`.

**Proof/definition route:** Use the proven nonmeridional-filling obstruction and first homology, then isotope a torus map to its homology matrix and extend a meridian-preserving map over disk fibers. Recover the precise uniqueness theorem/source if any weaker Property-P contract is used.

**Source boundary:** reader-4/ Hatcher and Baldwin–Sivek 2026 theorem context; Property P gauge proof is an explicit local module. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-s-three-filling-detects-the-meridian-slope`

**Kind:** lemma. **Owner:** `knot-exterior-rigidity-and-the-complement-theorem` (KT-15).

combines KT-13 homology with Property P to show that a filling yielding $S^3$ must be the meridional filling.

**Direct prerequisites:** `thm-knot-wirtinger-presentation-correctness`, `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-oriented-slope-and-knot-dehn-filling`, `thm-framed-knot-surgery-trace-boundary`, `def-singular-instanton-knot-and-sutured-closure-data`, `lem-instanton-knot-complex-asd-analytic-foundations`, `thm-sutured-instanton-khi-rank-detects-unknot`, `def-instanton-surgery-triangle-data`, `thm-gordon-luecke-knot-complement-determines-knot`, `lem-property-p-instanton-surgery-triangle-and-rank-input`, `def-axiom-of-choice`.

**Proof/definition route:** $|p|\ne1$ is excluded by KT-13 homology;
the $|p|=1$ nonmeridional case uses Property P. Property P is not a citation
placeholder: specify local modules for the $SU(2)$ representation variety of
the surgery, reducible/irreducible boundary analysis, the Chern–Simons
functional and spectral-flow grading, finite-energy ASD compactness and
gluing, and the Floer exact triangle contradiction. Then isotope the boundary
map to a meridian-preserving linear map and extend it over the solid torus by
the meridian-disk foliation. **Local prerequisite modules:** `lem-property-p-instanton-surgery-triangle-and-rank-input`, `thm-gordon-luecke-knot-complement-determines-knot`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-4/ Hatcher and Baldwin–Sivek 2026 theorem context; Property P gauge proof is an explicit local module. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-kronheimer-mrowka-reduced-khovanov-detects-unknot`

**Kind:** theorem. **Owner:** `khovanov-homology-detects-the-unknot` (KT-44).

Integral reduced Kh≅Z implies K is unknot, and the unknot has that group.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-khovanov-frobenius-algebra-and-cube-of-resolutions`, `def-reduced-khovanov-cohomology-of-a-knot`, `thm-khovanov-homology-is-an-oriented-link-invariant`, `def-instanton-knot-homology-and-canonical-class`, `def-singular-instanton-knot-and-sutured-closure-data`, `lem-kh-to-instanton-resolution-spectral-sequence`, `thm-sutured-instanton-khi-rank-detects-unknot`, `def-axiom-of-choice`.

**Proof/definition route:** Tensor the spectral sequence with Q, use rank cannot increase and nonzero I^natural rank, then apply the KHI rank detector; compute the unknot complex directly. The claim does not depend on Jones-detection status.

**Source boundary:** reader-6/ Kronheimer–Mrowka arXiv:1005.4346v1, Theorem 1.1; KHI rank detector separately cited. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-khovanov-to-instanton-spectral-sequence`

**Kind:** theorem. **Owner:** `khovanov-homology-detects-the-unknot` (KT-44).

constructs the spectral sequence from reduced Khovanov cohomology of the mirror to $I^\natural(K)$.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-khovanov-frobenius-algebra-and-cube-of-resolutions`, `def-reduced-khovanov-cohomology-of-a-knot`, `thm-khovanov-homology-is-an-oriented-link-invariant`, `def-instanton-knot-homology-and-canonical-class`, `def-singular-instanton-knot-and-sutured-closure-data`, `thm-kronheimer-mrowka-reduced-khovanov-detects-unknot`, `lem-instanton-knot-complex-asd-analytic-foundations`, `lem-kh-to-instanton-resolution-spectral-sequence`, `thm-sutured-instanton-khi-rank-detects-unknot`, `def-axiom-of-choice`.

**Proof/definition route:** construct the filtered instanton complex
from resolutions, prove the E2 identification, and specify the instanton
rank detector as a separate theorem. The latter needs local definitions and
proof modules for the configuration-space Sobolev completion, ASD Fredholm
setup, compactness/bubbling, excision, perturbation/transversality and the
rank-one characterization of the unknot instanton group; Kronheimer–Mrowka's
paper invokes KHI rank detection rather than proving all of it. Then use the
unknot group and spectral-sequence rank inequalities to force the unknot
resolution. **Local prerequisite modules:** `lem-instanton-knot-complex-asd-analytic-foundations`, `lem-kh-to-instanton-resolution-spectral-sequence`, `thm-sutured-instanton-khi-rank-detects-unknot`, `thm-kronheimer-mrowka-reduced-khovanov-detects-unknot`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-6/ Kronheimer–Mrowka arXiv:1005.4346v1, Theorem 1.1; KHI rank detector separately cited. Future content authoring must supply local proofs; no citation-only fallback.

### `cex-knot-kt-44-boundary-case`

**Kind:** counterexample. **Owner:** `khovanov-homology-detects-the-unknot-examples` (KT-44).

The unaudited June2026 Jones proof claim is not a substitute for a local instanton/KHI supplier; distinguish its qualified status from the established Kh detector.

**Direct prerequisites:** `def-instanton-knot-homology-and-canonical-class`, `thm-khovanov-to-instanton-spectral-sequence`, `thm-kronheimer-mrowka-reduced-khovanov-detects-unknot`, `lem-instanton-knot-complex-asd-analytic-foundations`, `lem-kh-to-instanton-resolution-spectral-sequence`, `thm-sutured-instanton-khi-rank-detects-unknot`, `def-singular-instanton-knot-and-sutured-closure-data`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-6/ Kronheimer–Mrowka arXiv:1005.4346v1, Theorem 1.1; KHI rank detector separately cited. Future content authoring must supply local proofs; no citation-only fallback.

### `ex-knot-kt-44-worked-cases`

**Kind:** example. **Owner:** `khovanov-homology-detects-the-unknot-examples` (KT-44).

Unknot reduced Kh has rank1, while trefoil reduced rational Kh has rank3; the rank detector separates them.

**Direct prerequisites:** `def-instanton-knot-homology-and-canonical-class`, `thm-khovanov-to-instanton-spectral-sequence`, `thm-kronheimer-mrowka-reduced-khovanov-detects-unknot`, `lem-instanton-knot-complex-asd-analytic-foundations`, `lem-kh-to-instanton-resolution-spectral-sequence`, `thm-sutured-instanton-khi-rank-detects-unknot`, `def-singular-instanton-knot-and-sutured-closure-data`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-6/ Kronheimer–Mrowka arXiv:1005.4346v1, Theorem 1.1; KHI rank detector separately cited. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-property-p-for-nontrivial-knots`

**Kind:** theorem. **Owner:** `knot-exterior-rigidity-and-the-complement-theorem` (KT-15).

states that every nonmeridional Dehn filling of a nontrivial smooth knot has nontrivial fundamental group.

**Direct prerequisites:** `thm-knot-wirtinger-presentation-correctness`, `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-oriented-slope-and-knot-dehn-filling`, `thm-framed-knot-surgery-trace-boundary`, `def-singular-instanton-knot-and-sutured-closure-data`, `lem-instanton-knot-complex-asd-analytic-foundations`, `thm-sutured-instanton-khi-rank-detects-unknot`, `def-instanton-surgery-triangle-data`, `thm-gordon-luecke-knot-complement-determines-knot`, `lem-property-p-instanton-surgery-triangle-and-rank-input`, `def-axiom-of-choice`.

**Proof/definition route:** $|p|\ne1$ is excluded by KT-13 homology;
the $|p|=1$ nonmeridional case uses Property P. Property P is not a citation
placeholder: specify local modules for the $SU(2)$ representation variety of
the surgery, reducible/irreducible boundary analysis, the Chern–Simons
functional and spectral-flow grading, finite-energy ASD compactness and
gluing, and the Floer exact triangle contradiction. Then isotope the boundary
map to a meridian-preserving linear map and extend it over the solid torus by
the meridian-disk foliation. **Local prerequisite modules:** `lem-property-p-instanton-surgery-triangle-and-rank-input`, `thm-gordon-luecke-knot-complement-determines-knot`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-4/ Hatcher and Baldwin–Sivek 2026 theorem context; Property P gauge proof is an explicit local module. Future content authoring must supply local proofs; no citation-only fallback.

### `cex-knot-kt-15-boundary-case`

**Kind:** counterexample. **Owner:** `knot-exterior-rigidity-and-the-complement-theorem-examples` (KT-15).

Unknot and trefoil share abelianization Z, so abelianized peripheral information alone is insufficient to recover knot type.

**Direct prerequisites:** `thm-property-p-for-nontrivial-knots`, `lem-s-three-filling-detects-the-meridian-slope`, `thm-gordon-luecke-knot-complement-determines-knot`, `lem-property-p-instanton-surgery-triangle-and-rank-input`, `def-instanton-surgery-triangle-data`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-4/ Hatcher and Baldwin–Sivek 2026 theorem context; Property P gauge proof is an explicit local module. Future content authoring must supply local proofs; no citation-only fallback.

### `ex-knot-kt-15-worked-cases`

**Kind:** example. **Owner:** `knot-exterior-rigidity-and-the-complement-theorem-examples` (KT-15).

A torus boundary matrix carrying μ to±μ extends across the solid torus; verify by a disk map and longitude twist.

**Direct prerequisites:** `thm-property-p-for-nontrivial-knots`, `lem-s-three-filling-detects-the-meridian-slope`, `thm-gordon-luecke-knot-complement-determines-knot`, `lem-property-p-instanton-surgery-triangle-and-rank-input`, `def-instanton-surgery-triangle-data`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-4/ Hatcher and Baldwin–Sivek 2026 theorem context; Property P gauge proof is an explicit local module. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-tait-flyping-theorem`

**Kind:** theorem. **Owner:** `alternating-diagrams-and-crossing-number-minimality` (KT-50).

Two connected reduced alternating diagrams representing the same oriented link are related by flypes and planar isotopy, with split/composite and sphere/plane conventions fixed.

**Direct prerequisites:** `def-reduced-alternating-link-diagram`, `def-flype-crossing-ball-and-alternating-tangle-data`, `def-axiom-of-choice`.

**Proof/definition route:** Use geometric crossing-ball position, standard-position incompressible Conway spheres and the Menasco–Thistlethwaite tangle reduction with decreasing geometric complexity. Complete source recovery is required; graph 2-isomorphism/matroid exchange can encode mutation and is insufficient.

**Source boundary:** reader-1/ Calegari 2025 §5.2; reader-3/ Kauffman 2022 v2 §2. Future content authoring must supply local proofs; no citation-only fallback.

### `cex-knot-kt-50-boundary-case`

**Kind:** counterexample. **Owner:** `alternating-diagrams-and-crossing-number-minimality-examples` (KT-50).

An R1-kinked unknot diagram has c=1 but Jones span0, showing reducedness is necessary for equality with diagram crossing count.

**Direct prerequisites:** `def-reduced-alternating-link-diagram`, `thm-tait-flyping-theorem`, `thm-reduced-alternating-diagram-minimizes-crossings`, `cor-jones-span-detects-crossing-number-for-reduced-alternating-knots`, `lem-alternating-state-adequacy-and-jones-span`, `def-flype-crossing-ball-and-alternating-tangle-data`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-1/ Calegari 2025 §5.2; reader-3/ Kauffman 2022 v2 §2. Future content authoring must supply local proofs; no citation-only fallback.

### `ex-knot-kt-50-worked-cases`

**Kind:** example. **Owner:** `alternating-diagrams-and-crossing-number-minimality-examples` (KT-50).

Positive trefoil Jones span is4−1=3 and figure-eight span4; the reduced alternating crossing numbers are3 and4.

**Direct prerequisites:** `def-reduced-alternating-link-diagram`, `thm-tait-flyping-theorem`, `thm-reduced-alternating-diagram-minimizes-crossings`, `cor-jones-span-detects-crossing-number-for-reduced-alternating-knots`, `lem-alternating-state-adequacy-and-jones-span`, `def-flype-crossing-ball-and-alternating-tangle-data`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-1/ Calegari 2025 §5.2; reader-3/ Kauffman 2022 v2 §2. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-tau-is-concordance-invariant-and-four-ball-genus-bound`

**Kind:** theorem. **Owner:** `tau-invariant-and-the-four-ball-genus` (KT-41).

For S3 knots, τ is an additive smooth-concordance invariant and

**Direct prerequisites:** `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `thm-knot-concordance-is-an-abelian-group`, `def-admissible-pointed-heegaard-floer-data`, `def-grid-diagram-for-an-oriented-knot`, `thm-grid-homology-independent-of-grid-and-equals-knot-floer`, `lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing`, `def-decorated-link-cobordism-and-floer-target`, `lem-knot-floer-cobordism-naturality-and-movie-invariance`, `def-knot-floer-filtration-and-tau`, `def-axiom-of-choice`.

**Proof/definition route:** τ|≤g4_sm. | A genus-g decorated surface supplies the proven filtration-shift maps; compare the normalized generator's least inclusion level in both directions and use mirror antisymmetry. Do not infer a locally-flat topological bound.

**Source boundary:** reader-6/ Ozsváth–Szabó arXiv:math/0301149v4; reader-6/ Hom arXiv:1512.00383v3. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-tau-is-independent-of-heegaard-grid`

**Kind:** lemma. **Owner:** `tau-invariant-and-the-four-ball-genus` (KT-41).

proves the value is invariant under the local grid/Heegaard equivalences of KT-39.

**Direct prerequisites:** `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `thm-knot-concordance-is-an-abelian-group`, `def-admissible-pointed-heegaard-floer-data`, `def-grid-diagram-for-an-oriented-knot`, `thm-grid-homology-independent-of-grid-and-equals-knot-floer`, `lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing`, `def-decorated-link-cobordism-and-floer-target`, `lem-knot-floer-cobordism-naturality-and-movie-invariance`, `def-knot-floer-filtration-and-tau`, `thm-tau-is-concordance-invariant-and-four-ball-genus-bound`, `lem-knot-floer-large-surgery-and-filtered-cobordism-input`, `lem-tau-connected-sum-filtered-tensor-product`, `def-axiom-of-choice`.

**Proof/definition route:** filtered chain-homotopy equivalences
preserve the first filtration level mapping nontrivially to homology. A
decorated genus-$g$ concordance induces a filtered cobordism map with filtration
shift bounded by $g$; prove this from the triangle-count index formula and
movie decomposition, not by an unqualified functoriality citation. For
connected sums, prove the filtered tensor product formula and compute the
minimum nonzero filtration. **Local prerequisite modules:** `lem-knot-floer-large-surgery-and-filtered-cobordism-input`, `lem-tau-connected-sum-filtered-tensor-product`, `thm-tau-is-concordance-invariant-and-four-ball-genus-bound`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-6/ Ozsváth–Szabó arXiv:math/0301149v4; reader-6/ Hom arXiv:1512.00383v3. Future content authoring must supply local proofs; no citation-only fallback.

### `cex-knot-kt-41-boundary-case`

**Kind:** counterexample. **Owner:** `tau-invariant-and-the-four-ball-genus-examples` (KT-41).

The Hedden–Ording double has τ=0 but s=2, so τ=0 does not establish smooth sliceness.

**Direct prerequisites:** `def-knot-floer-filtration-and-tau`, `lem-tau-is-independent-of-heegaard-grid`, `thm-tau-is-concordance-invariant-and-four-ball-genus-bound`, `lem-knot-floer-large-surgery-and-filtered-cobordism-input`, `lem-tau-connected-sum-filtered-tensor-product`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-6/ Ozsváth–Szabó arXiv:math/0301149v4; reader-6/ Hom arXiv:1512.00383v3. Future content authoring must supply local proofs; no citation-only fallback.

### `ex-knot-kt-41-worked-cases`

**Kind:** example. **Owner:** `tau-invariant-and-the-four-ball-genus-examples` (KT-41).

τ(unknot)=0 and τ(right/left trefoil)=±1, verified from the filtered staircases; these bounds recover their smooth genus1.

**Direct prerequisites:** `def-knot-floer-filtration-and-tau`, `lem-tau-is-independent-of-heegaard-grid`, `thm-tau-is-concordance-invariant-and-four-ball-genus-bound`, `lem-knot-floer-large-surgery-and-filtered-cobordism-input`, `lem-tau-connected-sum-filtered-tensor-product`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-6/ Ozsváth–Szabó arXiv:math/0301149v4; reader-6/ Hom arXiv:1512.00383v3. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-torus-knot-group-presentation`

**Kind:** theorem. **Owner:** `torus-knots-and-seifert-fibered-exteriors` (KT-16).

For coprime nonzero p,q, a torus-knot exterior has two exceptional Seifert fibers and group ⟨x,y:x^p=y^q⟩, with regular fiber central and explicitly marked peripheral words.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-knot-connected-sum-and-prime-knot`, `thm-seifert-determinant-is-the-knot-alexander-polynomial`, `def-coprime-torus-knot`, `def-axiom-of-choice`.

**Proof/definition route:** Decompose along the torus annulus, apply van Kampen and track oriented Bezout meridian paths. Treat |p|=1 or |q|=1 as unknot; noncoprime pairs are links. Compare the annulus fibration with the group central element.

**Source boundary:** reader-1/ Calegari 2025 §4.3; reader-4/ Hatcher 3-Manifold Notes. Future content authoring must supply local proofs; no citation-only fallback.

### `cor-satellite-companion-is-detected-by-jsj`

**Kind:** corollary. **Owner:** `satellite-knots-and-jsj-tori` (KT-17).

An explicitly marked essential companion torus cuts off the companion exterior; JSJ identifies its canonical isotopy class when it belongs to the canonical family under the stated exceptions.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-knot-connected-sum-and-prime-knot`, `thm-torus-knot-group-presentation`, `def-satellite-pattern-companion-and-winding-number`, `def-incompressibility-seifert-fibration-and-jsj-system`, `def-axiom-of-choice`.

**Proof/definition route:** Track boundary meridian/longitude through satellite gluing and inspect possible Seifert amalgamation. Do not claim every arbitrary pattern torus survives as a separate JSJ torus or determines a unique companion without exclusions.

**Source boundary:** reader-4/ Hatcher §1.2 Theorem 1.9; reader-5/ satellite-pattern category distinctions. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-satellite-torus-is-essential`

**Kind:** lemma. **Owner:** `satellite-knots-and-jsj-tori` (KT-17).

If K is nontrivial and the pattern exterior's outer torus is incompressible and not product-boundary parallel after gluing, the companion torus in E_(P(K)) is essential.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-knot-connected-sum-and-prime-knot`, `thm-torus-knot-group-presentation`, `def-satellite-pattern-companion-and-winding-number`, `def-incompressibility-seifert-fibration-and-jsj-system`, `def-axiom-of-choice`.

**Proof/definition route:** Normalize a compressing disk relative to the gluing torus and use innermost intersections to push it into a piece; apply the exact two boundary-incompressibility hypotheses. Prove any claimed sufficient winding/geometric-essentiality criterion separately.

**Source boundary:** reader-4/ Hatcher §1.2 Theorem 1.9; reader-5/ satellite-pattern category distinctions. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-jsj-decomposition-of-knot-exteriors`

**Kind:** theorem. **Owner:** `satellite-knots-and-jsj-tori` (KT-17).

A compact orientable irreducible knot exterior has a minimal canonical incompressible-torus system with atoroidal or Seifert pieces, unique up to isotopy.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-knot-connected-sum-and-prime-knot`, `thm-torus-knot-group-presentation`, `def-satellite-pattern-companion-and-winding-number`, `def-incompressibility-seifert-fibration-and-jsj-system`, `def-axiom-of-choice`.

**Proof/definition route:** Prove Haken finiteness, Seifert annulus classification and minimal-intersection compatibility of candidate systems; remove parallel tori and control small Seifert exceptions. Atoroidal is not synonymous with hyperbolic in this theorem.

**Source boundary:** reader-4/ Hatcher §1.2 Theorem 1.9; reader-5/ satellite-pattern category distinctions. Future content authoring must supply local proofs; no citation-only fallback.

### `cex-knot-kt-17-boundary-case`

**Kind:** counterexample. **Owner:** `satellite-knots-and-jsj-tori-examples` (KT-17).

The core pattern on a companion has a product region: its chosen tubular torus can be boundary parallel, so the essential-torus conclusion needs the nonproduct hypothesis.

**Direct prerequisites:** `def-satellite-pattern-companion-and-winding-number`, `lem-satellite-torus-is-essential`, `thm-jsj-decomposition-of-knot-exteriors`, `cor-satellite-companion-is-detected-by-jsj`, `def-incompressibility-seifert-fibration-and-jsj-system`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-4/ Hatcher §1.2 Theorem 1.9; reader-5/ satellite-pattern category distinctions. Future content authoring must supply local proofs; no citation-only fallback.

### `ex-knot-kt-17-worked-cases`

**Kind:** example. **Owner:** `satellite-knots-and-jsj-tori-examples` (KT-17).

For a nontrivial companion and a cable pattern with the stated incompressible nonproduct exterior, identify the companion exterior on one side of its essential torus.

**Direct prerequisites:** `def-satellite-pattern-companion-and-winding-number`, `lem-satellite-torus-is-essential`, `thm-jsj-decomposition-of-knot-exteriors`, `cor-satellite-companion-is-detected-by-jsj`, `def-incompressibility-seifert-fibration-and-jsj-system`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-4/ Hatcher §1.2 Theorem 1.9; reader-5/ satellite-pattern category distinctions. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-cdr-zero-surgery-pattern-homology-cobordism`

**Kind:** lemma. **Owner:** `satellite-operators-and-knot-concordance-filtrations` (KT-27).

A winding-n pattern gives the CDR zero-surgery cobordism with Z[1/n]-homology isomorphisms; strong winding ±1 additionally gives the needed fundamental-group normal-generation property.

**Direct prerequisites:** `def-knot-twisted-chain-complex-and-reidemeister-torsion`, `lem-twisted-fox-jacobian-is-cellular-boundary`, `def-incompressibility-seifert-fibration-and-jsj-system`, `thm-jsj-decomposition-of-knot-exteriors`, `def-satellite-pattern-companion-and-winding-number`, `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `thm-knot-concordance-is-an-abelian-group`, `def-metabolic-seifert-form-and-algebraic-knot-concordance`, `lem-slice-disk-induces-seifert-metabolizer`, `thm-locally-flat-slice-implies-fox-milnor-factorization`, `thm-alexander-polynomial-one-implies-topologically-slice`, `def-satellite-induced-concordance-operator`, `def-blanchfield-pairing-and-higher-order-rho-invariant`, `def-integral-half-solutions-strebel-and-l2-signatures`, `def-axiom-of-choice`.

**Proof/definition route:** Attach the explicitly prescribed handles, compute the relative cellular boundary matrix with n localization, and follow meridian normal closures. Define C^(1/n), C_ex and C_top separately.

**Source boundary:** reader-5/ Cochran–Davis–Ray arXiv:1205.5058v3, §§2–7; reader-5/ Cha–Kim arXiv:2402.04629v2 (2025), Theorems A–C and Remark 1.1. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-cdr-weak-injectivity-and-auxiliary-pattern-reduction`

**Kind:** lemma. **Owner:** `satellite-operators-and-knot-concordance-filtrations` (KT-27).

CDR's zero-surgery weak-injectivity statement reduces P(K)=P(J) to the slice/identity case through the auxiliary pattern, in each stated concordance category.

**Direct prerequisites:** `def-knot-twisted-chain-complex-and-reidemeister-torsion`, `lem-twisted-fox-jacobian-is-cellular-boundary`, `def-incompressibility-seifert-fibration-and-jsj-system`, `thm-jsj-decomposition-of-knot-exteriors`, `def-satellite-pattern-companion-and-winding-number`, `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `thm-knot-concordance-is-an-abelian-group`, `def-metabolic-seifert-form-and-algebraic-knot-concordance`, `lem-slice-disk-induces-seifert-metabolizer`, `thm-locally-flat-slice-implies-fox-milnor-factorization`, `thm-alexander-polynomial-one-implies-topologically-slice`, `def-satellite-induced-concordance-operator`, `def-blanchfield-pairing-and-higher-order-rho-invariant`, `def-integral-half-solutions-strebel-and-l2-signatures`, `lem-cdr-zero-surgery-pattern-homology-cobordism`, `def-axiom-of-choice`.

**Proof/definition route:** Construct the auxiliary string-link/pattern operation, prove its surgery cobordism and normal-generation properties, then cap the relevant boundary without identifying an exotic ball with standard smooth B4.

**Source boundary:** reader-5/ Cochran–Davis–Ray arXiv:1205.5058v3, §§2–7; reader-5/ Cha–Kim arXiv:2402.04629v2 (2025), Theorems A–C and Remark 1.1. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-cha-kim-integral-solvability-and-blanchfield-bordism`

**Kind:** lemma. **Owner:** `satellite-operators-and-knot-concordance-filtrations` (KT-27).

The infection cobordisms meet Cha–Kim's integral n-solvability and Blanchfield-bordism conditions with the exact derived-series coefficient systems, and nonzero axis self-pairing survives the designated stage.

**Direct prerequisites:** `def-knot-twisted-chain-complex-and-reidemeister-torsion`, `lem-twisted-fox-jacobian-is-cellular-boundary`, `def-incompressibility-seifert-fibration-and-jsj-system`, `thm-jsj-decomposition-of-knot-exteriors`, `def-satellite-pattern-companion-and-winding-number`, `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `thm-knot-concordance-is-an-abelian-group`, `def-metabolic-seifert-form-and-algebraic-knot-concordance`, `lem-slice-disk-induces-seifert-metabolizer`, `thm-locally-flat-slice-implies-fox-milnor-factorization`, `thm-alexander-polynomial-one-implies-topologically-slice`, `def-satellite-induced-concordance-operator`, `def-blanchfield-pairing-and-higher-order-rho-invariant`, `def-integral-half-solutions-strebel-and-l2-signatures`, `def-axiom-of-choice`.

**Proof/definition route:** Define n-solutions by lifted hyperbolic surface pairs and π1^(n) conditions, prove homology/duality for each infection, and use the nonsingular localized Blanchfield pairing to detect the axis. Recover the exact mixed-coefficient/Strebel hypotheses from a complete foundational source before acceptance.

**Source boundary:** reader-5/ Cochran–Davis–Ray arXiv:1205.5058v3, §§2–7; reader-5/ Cha–Kim arXiv:2402.04629v2 (2025), Theorems A–C and Remark 1.1. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-ni-holomorphic-disk-and-jsj-analytic-inputs`

**Kind:** lemma. **Owner:** `knot-floer-genus-and-fiberedness-detection` (KT-43).

Ni's surface-adapted disk counts respect the required horizontal and product-annulus decompositions and characteristic-product-region argument.

**Direct prerequisites:** `def-incompressibility-seifert-fibration-and-jsj-system`, `thm-jsj-decomposition-of-knot-exteriors`, `def-satellite-pattern-companion-and-winding-number`, `def-admissible-pointed-heegaard-floer-data`, `def-grid-diagram-for-an-oriented-knot`, `thm-grid-homology-independent-of-grid-and-equals-knot-floer`, `lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing`, `def-top-alexander-grading-of-knot-floer-homology`, `def-balanced-taut-sutured-manifold-and-product-region`, `def-axiom-of-choice`.

**Proof/definition route:** Specify winding/admissibility and basepoint domains, prove the decomposition maps at chain level, and apply the exact JSJ/product-region hypotheses. Generic Heegaard disk existence is not this specialized decomposition theorem.

**Source boundary:** reader-6/ Ni arXiv:math/0607156v4, Theorem 1.1; reader-6/ MOS arXiv:math/0607691v2. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-ni-fiberedness-sutured-floer-and-gabai-inputs`

**Kind:** lemma. **Owner:** `knot-floer-genus-and-fiberedness-detection` (KT-43).

Under Ni's null-homologous/irreducible hypotheses, a monic top HFK implies the complementary sutured manifold is a product.

**Direct prerequisites:** `def-incompressibility-seifert-fibration-and-jsj-system`, `thm-jsj-decomposition-of-knot-exteriors`, `def-satellite-pattern-companion-and-winding-number`, `def-admissible-pointed-heegaard-floer-data`, `def-grid-diagram-for-an-oriented-knot`, `thm-grid-homology-independent-of-grid-and-equals-knot-floer`, `lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing`, `def-top-alexander-grading-of-knot-floer-homology`, `def-balanced-taut-sutured-manifold-and-product-region`, `lem-ni-holomorphic-disk-and-jsj-analytic-inputs`, `def-axiom-of-choice`.

**Proof/definition route:** Prove Ni's horizontal/product-annulus decomposition formulas, use Gabai taut decompositions and the characteristic product region, and rule out a nonproduct remainder by rank growth. Define balanced/taut sutured manifolds and product annuli first.

**Source boundary:** reader-6/ Ni arXiv:math/0607156v4, Theorem 1.1; reader-6/ MOS arXiv:math/0607691v2. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-amenable-signature-vanishing-for-solvable-bordisms`

**Kind:** theorem. **Owner:** `satellite-operators-and-knot-concordance-filtrations` (KT-27).

Let n≥0 and R=Q or F_p. If G∈D(R), G^(n+1)=1, W is an integral(n+1/2)-solution for zero-surgery M(K), φ:π1M(K)→G extends over W and sends the meridian to infinite order, then ρ^(2)(M(K),φ)=0 (Cha–Kim Theorem3.1 citing Cha13 Theorem1.3).

**Direct prerequisites:** `def-knot-twisted-chain-complex-and-reidemeister-torsion`, `lem-twisted-fox-jacobian-is-cellular-boundary`, `def-incompressibility-seifert-fibration-and-jsj-system`, `thm-jsj-decomposition-of-knot-exteriors`, `def-satellite-pattern-companion-and-winding-number`, `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `thm-knot-concordance-is-an-abelian-group`, `def-metabolic-seifert-form-and-algebraic-knot-concordance`, `lem-slice-disk-induces-seifert-metabolizer`, `thm-locally-flat-slice-implies-fox-milnor-factorization`, `thm-alexander-polynomial-one-implies-topologically-slice`, `def-satellite-induced-concordance-operator`, `def-blanchfield-pairing-and-higher-order-rho-invariant`, `def-integral-half-solutions-strebel-and-l2-signatures`, `def-axiom-of-choice`.

**Proof/definition route:** Define D(R): every map of projective RG-modules whose R⊗_(RG) map is injective is itself injective; derived G^(n+1)=1 makes G solvable and amenable. Prove the dimension-flatness/metabolic L² intersection calculation and ordinary signature cancellation using the exact integral half-step Lagrangian/dual data. Complete Cha13 foundational source recovery remains required; Cha–Kim cites rather than proves this theorem.

**Source boundary:** reader-5/ Cochran–Davis–Ray arXiv:1205.5058v3, §§2–7; reader-5/ Cha–Kim arXiv:2402.04629v2 (2025), Theorems A–C and Remark 1.1. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-cha-kim-higher-order-rho-bound-and-coprime-separation`

**Kind:** lemma. **Owner:** `satellite-operators-and-knot-concordance-filtrations` (KT-27).

With winding zero and nonzero axis self-pairing, iterated infection yields independent classes in each P-filtration grade; distinct-pattern separation additionally uses the separately stated coprime Alexander hypotheses.

**Direct prerequisites:** `def-knot-twisted-chain-complex-and-reidemeister-torsion`, `lem-twisted-fox-jacobian-is-cellular-boundary`, `def-incompressibility-seifert-fibration-and-jsj-system`, `thm-jsj-decomposition-of-knot-exteriors`, `def-satellite-pattern-companion-and-winding-number`, `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `thm-knot-concordance-is-an-abelian-group`, `def-metabolic-seifert-form-and-algebraic-knot-concordance`, `lem-slice-disk-induces-seifert-metabolizer`, `thm-locally-flat-slice-implies-fox-milnor-factorization`, `thm-alexander-polynomial-one-implies-topologically-slice`, `def-satellite-induced-concordance-operator`, `def-blanchfield-pairing-and-higher-order-rho-invariant`, `def-integral-half-solutions-strebel-and-l2-signatures`, `lem-cha-kim-integral-solvability-and-blanchfield-bordism`, `thm-amenable-signature-vanishing-for-solvable-bordisms`, `def-axiom-of-choice`.

**Proof/definition route:** Choose companions with signatures above the fixed Cheeger–Gromov bound, use Novikov/L² additivity, amenable vanishing and Blanchfield persistence, and induct on the first surviving infection level. Keep the Theorem-C coprimality branch separate from A/B.

**Source boundary:** reader-5/ Cochran–Davis–Ray arXiv:1205.5058v3, §§2–7; reader-5/ Cha–Kim arXiv:2402.04629v2 (2025), Theorems A–C and Remark 1.1. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-cochran-davis-ray-strong-winding-injectivity`

**Kind:** theorem. **Owner:** `satellite-operators-and-knot-concordance-filtrations` (KT-27).

Winding n≠0 gives injectivity on localized homology concordance; strong winding ±1 gives injectivity on C_ex and locally-flat C_top; injectivity on ordinary C_sm is conditional on unique smooth S4.

**Direct prerequisites:** `def-knot-twisted-chain-complex-and-reidemeister-torsion`, `lem-twisted-fox-jacobian-is-cellular-boundary`, `def-incompressibility-seifert-fibration-and-jsj-system`, `thm-jsj-decomposition-of-knot-exteriors`, `def-satellite-pattern-companion-and-winding-number`, `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `thm-knot-concordance-is-an-abelian-group`, `def-metabolic-seifert-form-and-algebraic-knot-concordance`, `lem-slice-disk-induces-seifert-metabolizer`, `thm-locally-flat-slice-implies-fox-milnor-factorization`, `thm-alexander-polynomial-one-implies-topologically-slice`, `def-satellite-induced-concordance-operator`, `def-blanchfield-pairing-and-higher-order-rho-invariant`, `def-integral-half-solutions-strebel-and-l2-signatures`, `lem-cdr-weak-injectivity-and-auxiliary-pattern-reduction`, `def-axiom-of-choice`.

**Proof/definition route:** Apply the two CDR cobordism modules, topological Poincare in the locally-flat case and the explicitly conditional smooth identification in the ordinary smooth case. Satellite maps need not be homomorphisms.

**Source boundary:** reader-5/ Cochran–Davis–Ray arXiv:1205.5058v3, §§2–7; reader-5/ Cha–Kim arXiv:2402.04629v2 (2025), Theorems A–C and Remark 1.1. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-cha-kim-winding-zero-iterates-infinite-rank`

**Kind:** theorem. **Owner:** `satellite-operators-and-knot-concordance-filtrations` (KT-27).

states the 2025 theorem: for a winding-zero pattern whose axis has nonzero self-pairing in the Blanchfield form of $P(U)$, for C=C_top or C_sm, the quotient ⟨P^n(C)⟩/⟨P^{n+1}(C)⟩ has infinite rank for every n≥0, and P^n is not a homomorphism for n≥1. These are Theorems A/B under the nonzero Blanchfield self-pairing hypothesis. The separate coprime-Alexander hypotheses belong to Theorem C on distinguishing patterns, not to A/B.

**Direct prerequisites:** `def-knot-twisted-chain-complex-and-reidemeister-torsion`, `lem-twisted-fox-jacobian-is-cellular-boundary`, `def-incompressibility-seifert-fibration-and-jsj-system`, `thm-jsj-decomposition-of-knot-exteriors`, `def-satellite-pattern-companion-and-winding-number`, `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-smooth-and-topological-slice-genus`, `thm-knot-concordance-is-an-abelian-group`, `def-metabolic-seifert-form-and-algebraic-knot-concordance`, `lem-slice-disk-induces-seifert-metabolizer`, `thm-locally-flat-slice-implies-fox-milnor-factorization`, `thm-alexander-polynomial-one-implies-topologically-slice`, `def-satellite-induced-concordance-operator`, `def-blanchfield-pairing-and-higher-order-rho-invariant`, `def-integral-half-solutions-strebel-and-l2-signatures`, `thm-cochran-davis-ray-strong-winding-injectivity`, `lem-cdr-zero-surgery-pattern-homology-cobordism`, `lem-cdr-weak-injectivity-and-auxiliary-pattern-reduction`, `lem-cha-kim-integral-solvability-and-blanchfield-bordism`, `thm-amenable-signature-vanishing-for-solvable-bordisms`, `lem-cha-kim-higher-order-rho-bound-and-coprime-separation`, `def-axiom-of-choice`.

**Proof/definition route:** spell out the zero-surgery homology
cobordism, the weak-injectivity step, and why strong winding $\pm1$ is stronger
than ordinary winding $\pm1$. For Cha–Kim, prove the localized Blanchfield
form and its bordism invariance, the amenable-signature theorem for the
specified PTFA derived-series quotients, the $L^2$-rho estimate for the
pattern infection, the coprime Alexander separation, and the induction over
iterates. Each is a separate local lemma with its exact group class and
signature bound; the source cites the Amenable Signature Theorem and does not
prove all those modules. **Local prerequisite modules:** `lem-cdr-zero-surgery-pattern-homology-cobordism`, `lem-cdr-weak-injectivity-and-auxiliary-pattern-reduction`, `thm-cochran-davis-ray-strong-winding-injectivity`, `lem-cha-kim-integral-solvability-and-blanchfield-bordism`, `thm-amenable-signature-vanishing-for-solvable-bordisms`, `lem-cha-kim-higher-order-rho-bound-and-coprime-separation`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-5/ Cochran–Davis–Ray arXiv:1205.5058v3, §§2–7; reader-5/ Cha–Kim arXiv:2402.04629v2 (2025), Theorems A–C and Remark 1.1. Future content authoring must supply local proofs; no citation-only fallback.

### `cex-knot-kt-27-boundary-case`

**Kind:** counterexample. **Owner:** `satellite-operators-and-knot-concordance-filtrations-examples` (KT-27).

A nontrivial local-knot pattern has knotted P(U), yet its solid-torus meridian can still be a normal generator; knotted P(U) alone does not prove failure of strong winding. No unsupported winding1 counterexample is asserted.

**Direct prerequisites:** `def-satellite-induced-concordance-operator`, `def-blanchfield-pairing-and-higher-order-rho-invariant`, `thm-cochran-davis-ray-strong-winding-injectivity`, `thm-cha-kim-winding-zero-iterates-infinite-rank`, `lem-cdr-zero-surgery-pattern-homology-cobordism`, `lem-cdr-weak-injectivity-and-auxiliary-pattern-reduction`, `lem-cha-kim-integral-solvability-and-blanchfield-bordism`, `thm-amenable-signature-vanishing-for-solvable-bordisms`, `lem-cha-kim-higher-order-rho-bound-and-coprime-separation`, `def-integral-half-solutions-strebel-and-l2-signatures`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-5/ Cochran–Davis–Ray arXiv:1205.5058v3, §§2–7; reader-5/ Cha–Kim arXiv:2402.04629v2 (2025), Theorems A–C and Remark 1.1. Future content authoring must supply local proofs; no citation-only fallback.

### `ex-knot-kt-27-worked-cases`

**Kind:** example. **Owner:** `satellite-operators-and-knot-concordance-filtrations-examples` (KT-27).

The core pattern is the identity and strong winding1; a (n,1) cable has winding n and illustrates localized homology-concordance input with Z[1/n].

**Direct prerequisites:** `def-satellite-induced-concordance-operator`, `def-blanchfield-pairing-and-higher-order-rho-invariant`, `thm-cochran-davis-ray-strong-winding-injectivity`, `thm-cha-kim-winding-zero-iterates-infinite-rank`, `lem-cdr-zero-surgery-pattern-homology-cobordism`, `lem-cdr-weak-injectivity-and-auxiliary-pattern-reduction`, `lem-cha-kim-integral-solvability-and-blanchfield-bordism`, `thm-amenable-signature-vanishing-for-solvable-bordisms`, `lem-cha-kim-higher-order-rho-bound-and-coprime-separation`, `def-integral-half-solutions-strebel-and-l2-signatures`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-5/ Cochran–Davis–Ray arXiv:1205.5058v3, §§2–7; reader-5/ Cha–Kim arXiv:2402.04629v2 (2025), Theorems A–C and Remark 1.1. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-knot-floer-detects-seifert-genus`

**Kind:** theorem. **Owner:** `knot-floer-genus-and-fiberedness-detection` (KT-43).

For K⊂S3, the top nonzero integral HFKhat Alexander grading is the Seifert genus.

**Direct prerequisites:** `def-incompressibility-seifert-fibration-and-jsj-system`, `thm-jsj-decomposition-of-knot-exteriors`, `def-satellite-pattern-companion-and-winding-number`, `def-admissible-pointed-heegaard-floer-data`, `def-grid-diagram-for-an-oriented-knot`, `thm-grid-homology-independent-of-grid-and-equals-knot-floer`, `lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing`, `def-top-alexander-grading-of-knot-floer-homology`, `def-balanced-taut-sutured-manifold-and-product-region`, `def-axiom-of-choice`.

**Proof/definition route:** Establish the adjunction upper bound on an adapted Heegaard diagram and nonvanishing from a taut sutured hierarchy/foliation; do not assert a general-Y genus equality without the appropriate Thurston-norm theorem.

**Source boundary:** reader-6/ Ni arXiv:math/0607156v4, Theorem 1.1; reader-6/ MOS arXiv:math/0607691v2. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-mostow-prasad-rigidity-and-knot-volume`

**Kind:** theorem. **Owner:** `hyperbolic-knot-complements-and-volume` (KT-18).

Complete finite-volume hyperbolic 3-manifolds with isomorphic marked fundamental groups have the rigidity isometry, preserving orientation when the original equivalence does, hence equal volumes.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-incompressibility-seifert-fibration-and-jsj-system`, `thm-jsj-decomposition-of-knot-exteriors`, `def-satellite-pattern-companion-and-winding-number`, `def-finite-volume-hyperbolic-knot-exterior`, `def-pared-hyperbolic-structures-and-volume`, `def-axiom-of-choice`.

**Proof/definition route:** Prove the finite-volume boundary extension, quasi-conformal rigidity/straightening and cusp control; integrate the volume form under the resulting isometry. Developing-map existence alone does not prove rigidity.

**Source boundary:** reader-4/ Thurston Geometry and Topology of 3-Manifolds, selected Chs.1–9,11. Future content authoring must supply local proofs; no citation-only fallback.

### `alg-colored-jones-from-ribbon-evaluation`

**Kind:** algorithm. **Owner:** `colored-jones-invariant-and-volume-conjecture` (KT-36).

InputN≥1, a signed braid word for a knot and generic effectiveU_q(sl2)N-color matrices. Compute the framed ribbon evaluation, apply the exact twist scalar, reduce by the generic unknot quantum dimension and prove Laurent polynomiality before any specialization. Return the reduced generic Laurent polynomialJ_N(unknot;q)=1. A later root-evaluation routine substitutes into this polynomial; it never performs a root-level0/0 dimension quotient.

**Direct prerequisites:** `def-finite-volume-hyperbolic-knot-exterior`, `thm-mostow-prasad-rigidity-and-knot-volume`, `def-colored-framed-knot-evaluation-from-ribbon-category`, `def-normalized-colored-jones-sequence`, `def-axiom-of-choice`.

**Proof/definition route:** define the quantum-group module and universal $R$-matrix action using the existing Hopf/Hecke and ribbon-category interfaces, verify its braid and twist relations, and apply the finite word algorithm. State the colored Jones normalization, root sequence and volume term exactly; the conjecture is a separate terminal statement whose cited status is not a computational consequence. The volume statement is marked as a conjecture, not an output of
the finite algorithm. Record the versioned asymptotic formulation and the date/scope of the available status source; this open item is terminal and is never used as a supplier.

**Source boundary:** reader-3/ Kauffman 2022 v2 §3 (dated quantum context); volume-conjecture source/status review is explicitly bounded. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-dehn-filling-deformation-and-completeness`

**Kind:** lemma. **Owner:** `hyperbolic-dehn-filling-and-exceptional-slopes` (KT-19).

Near a complete k-cusped finite-volume structure, peripheral logarithms give k complex parameters and primitive large slopes satisfying p u+q v=2πi produce smooth hyperbolic fillings.

**Direct prerequisites:** `def-oriented-slope-and-knot-dehn-filling`, `thm-framed-knot-surgery-trace-boundary`, `def-finite-volume-hyperbolic-knot-exterior`, `thm-mostow-prasad-rigidity-and-knot-volume`, `def-cusp-slope-length`, `def-axiom-of-choice`.

**Proof/definition route:** Prove the local deformation theorem including Jacobian rank, solve the holonomy equations, construct the filled solid-torus metric and verify discreteness/completeness; control all cusps uniformly. Cone parameters are a separate category.

**Source boundary:** reader-4/ Thurston Ch.5 Theorem 5.8.2. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-ideal-triangulation-gluing-equations-and-peripheral-holonomy`

**Kind:** lemma. **Owner:** `hyperbolic-dehn-filling-and-exceptional-slopes` (KT-19).

For nondegenerate positively oriented shapes z_j in the upper half-plane, edge products with total angle 2π and complete Euclidean cusp holonomy produce the stated complete hyperbolic structure.

**Direct prerequisites:** `def-oriented-slope-and-knot-dehn-filling`, `thm-framed-knot-surgery-trace-boundary`, `def-finite-volume-hyperbolic-knot-exterior`, `thm-mostow-prasad-rigidity-and-knot-volume`, `def-cusp-slope-length`, `def-axiom-of-choice`.

**Proof/definition route:** Glue ideal tetrahedra isometrically, check neighborhoods of edges and cusp links, and prove metric completeness/finite volume by cusp truncations. Algebraic edge products alone do not guarantee angle 2π, positivity or completeness.

**Source boundary:** reader-4/ Thurston Ch.5 Theorem 5.8.2. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-one-cusped-deformation-parameters-and-holonomy`

**Kind:** lemma. **Owner:** `hyperbolic-dehn-filling-and-exceptional-slopes` (KT-19).

constructs the local complex deformation and peripheral holonomy parameters near the complete structure.

**Direct prerequisites:** `def-oriented-slope-and-knot-dehn-filling`, `thm-framed-knot-surgery-trace-boundary`, `def-finite-volume-hyperbolic-knot-exterior`, `thm-mostow-prasad-rigidity-and-knot-volume`, `def-cusp-slope-length`, `lem-ideal-triangulation-gluing-equations-and-peripheral-holonomy`, `lem-dehn-filling-deformation-and-completeness`, `def-axiom-of-choice`.

**Proof/definition route:** prove the local deformation-space theorem
for ideal triangulations and the independent Mostow-rigidity input; solve the
peripheral holonomy equations, verify the cusp-completeness criterion, and
identify the topological filling with the resulting holonomy quotient. Then
all sufficiently large slopes fall in the deformation neighborhood, leaving
only finitely many exceptional slopes. No numeric universal length threshold
or “at most ten” count is asserted without a separate proof. Cosmetic surgery
is reserved for terminal KT-51. **Local prerequisite modules:** `lem-ideal-triangulation-gluing-equations-and-peripheral-holonomy`, `lem-dehn-filling-deformation-and-completeness`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-4/ Thurston Ch.5 Theorem 5.8.2. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-colored-jones-finite-evaluation`

**Kind:** theorem. **Owner:** `colored-jones-invariant-and-volume-conjecture` (KT-36).

For integerN≥1, the generic reduced U_q(sl2) color construction yields the stated Laurent invariant J_N(unknot;q)=1 by finite effective matrices. Prove polynomiality and normalize generically before root evaluation; do not divide by a vanishing root quantum dimension.

**Direct prerequisites:** `def-finite-volume-hyperbolic-knot-exterior`, `thm-mostow-prasad-rigidity-and-knot-volume`, `def-colored-framed-knot-evaluation-from-ribbon-category`, `def-normalized-colored-jones-sequence`, `alg-colored-jones-from-ribbon-evaluation`, `def-axiom-of-choice`.

**Proof/definition route:** define the quantum-group module and universal $R$-matrix action using the existing Hopf/Hecke and ribbon-category interfaces, verify its braid and twist relations, and apply the finite word algorithm. State the colored Jones normalization, root sequence and volume term exactly; the conjecture is a separate terminal statement whose cited status is not a computational consequence. The volume statement is marked as a conjecture, not an output of
the finite algorithm. Record the versioned asymptotic formulation and the date/scope of the available status source; this open item is terminal and is never used as a supplier.

**Source boundary:** reader-3/ Kauffman 2022 v2 §3 (dated quantum context); volume-conjecture source/status review is explicitly bounded. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-colored-jones-from-ribbon-evaluation-procedure-properties`

**Kind:** theorem. **Owner:** `colored-jones-invariant-and-volume-conjecture` (KT-36).

For exactly the admissible encoded inputs of alg-colored-jones-from-ribbon-evaluation, execution terminates, rejects precisely the stated syntactic failures and returns the prescribed finite output. Any identification with a topological invariant, recognition completeness, or asymptotic complexity is only the separately proved domain result, not inferred from finite execution.

**Direct prerequisites:** `alg-colored-jones-from-ribbon-evaluation`, `def-finite-volume-hyperbolic-knot-exterior`, `thm-mostow-prasad-rigidity-and-knot-volume`, `def-colored-framed-knot-evaluation-from-ribbon-category`, `def-normalized-colored-jones-sequence`, `def-axiom-of-choice`.

**Proof/definition route:** Use the explicit finite loop/state/word or bounded search measure in the procedure; prove each branch preserves the stated output representation and all arithmetic is effective. Cite the domain correctness and completeness modules separately when claiming invariant/recognition meaning.

**Source boundary:** reader-3/ Kauffman 2022 v2 §3 (dated quantum context); volume-conjecture source/status review is explicitly bounded. Future content authoring must supply local proofs; no citation-only fallback.

### `cex-knot-kt-36-boundary-case`

**Kind:** counterexample. **Owner:** `colored-jones-invariant-and-volume-conjecture-examples` (KT-36).

One finite N evaluation, even matching a volume approximation numerically, does not establish the N→∞ root-of-unity asymptotic.

**Direct prerequisites:** `def-normalized-colored-jones-sequence`, `alg-colored-jones-from-ribbon-evaluation`, `thm-colored-jones-finite-evaluation`, `thm-colored-jones-from-ribbon-evaluation-procedure-properties`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-3/ Kauffman 2022 v2 §3 (dated quantum context); volume-conjecture source/status review is explicitly bounded. Future content authoring must supply local proofs; no citation-only fallback.

### `ex-knot-kt-36-worked-cases`

**Kind:** example. **Owner:** `colored-jones-invariant-and-volume-conjecture-examples` (KT-36).

The normalized sequence has J1=1 and J2 equal to the ordinary Jones convention; for trefoil J2=t+t³−t⁴ after the declared variable transport.

**Direct prerequisites:** `def-normalized-colored-jones-sequence`, `alg-colored-jones-from-ribbon-evaluation`, `thm-colored-jones-finite-evaluation`, `thm-colored-jones-from-ribbon-evaluation-procedure-properties`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-3/ Kauffman 2022 v2 §3 (dated quantum context); volume-conjecture source/status review is explicitly bounded. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-rank-one-top-knot-floer-detects-fiberedness`

**Kind:** theorem. **Owner:** `knot-floer-genus-and-fiberedness-detection` (KT-43).

If K is null-homologous in closed oriented connected Y, Y−K irreducible, F genus g, and HFKhat(Y,K,[F],g)=Z, then K fibers with fiber F.

**Direct prerequisites:** `def-incompressibility-seifert-fibration-and-jsj-system`, `thm-jsj-decomposition-of-knot-exteriors`, `def-satellite-pattern-companion-and-winding-number`, `def-admissible-pointed-heegaard-floer-data`, `def-grid-diagram-for-an-oriented-knot`, `thm-grid-homology-independent-of-grid-and-equals-knot-floer`, `lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing`, `def-top-alexander-grading-of-knot-floer-homology`, `def-balanced-taut-sutured-manifold-and-product-region`, `lem-ni-fiberedness-sutured-floer-and-gabai-inputs`, `def-axiom-of-choice`.

**Proof/definition route:** Combine the specialized decomposition/nonproduct rank obstruction, identify the sutured product F×I and reglue its two boundary copies. The converse fibered⇒rank-one has its separate source/proof obligation.

**Source boundary:** reader-6/ Ni arXiv:math/0607156v4, Theorem 1.1; reader-6/ MOS arXiv:math/0607691v2. Future content authoring must supply local proofs; no citation-only fallback.

### `cex-knot-kt-43-boundary-case`

**Kind:** counterexample. **Owner:** `knot-floer-genus-and-fiberedness-detection-examples` (KT-43).

A null-homologous unknot contained in a ball in a reducible homology sphere has reducible exterior, so Ni's irreducibility hypothesis is not automatic for general Y.

**Direct prerequisites:** `def-top-alexander-grading-of-knot-floer-homology`, `thm-knot-floer-detects-seifert-genus`, `thm-rank-one-top-knot-floer-detects-fiberedness`, `lem-ni-fiberedness-sutured-floer-and-gabai-inputs`, `lem-ni-holomorphic-disk-and-jsj-analytic-inputs`, `def-balanced-taut-sutured-manifold-and-product-region`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-6/ Ni arXiv:math/0607156v4, Theorem 1.1; reader-6/ MOS arXiv:math/0607691v2. Future content authoring must supply local proofs; no citation-only fallback.

### `ex-knot-kt-43-worked-cases`

**Kind:** example. **Owner:** `knot-floer-genus-and-fiberedness-detection-examples` (KT-43).

Trefoil top HFKhat rank1 in Alexander degree1 is consistent with fibering; the alternating5_2 has top rank2 and is nonfibered after its explicit grid or alternating-HFK calculation.

**Direct prerequisites:** `def-top-alexander-grading-of-knot-floer-homology`, `thm-knot-floer-detects-seifert-genus`, `thm-rank-one-top-knot-floer-detects-fiberedness`, `lem-ni-fiberedness-sutured-floer-and-gabai-inputs`, `lem-ni-holomorphic-disk-and-jsj-analytic-inputs`, `def-balanced-taut-sutured-manifold-and-product-region`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-6/ Ni arXiv:math/0607156v4, Theorem 1.1; reader-6/ MOS arXiv:math/0607691v2. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-thurston-hyperbolic-dehn-filling`

**Kind:** theorem. **Owner:** `hyperbolic-dehn-filling-and-exceptional-slopes` (KT-19).

proves that for a complete finite-volume hyperbolic 3-manifold with $k$ torus cusps, a neighborhood of the complete point in the $k$ surgery-parameter spheres gives hyperbolic structures; in particular all but finitely many primitive integral filling slopes at each cusp are hyperbolic. It uses the exact smooth filling parameters for ordinary manifolds and does not call cone/orbifold parameters ordinary Dehn fillings.

**Direct prerequisites:** `def-oriented-slope-and-knot-dehn-filling`, `thm-framed-knot-surgery-trace-boundary`, `def-finite-volume-hyperbolic-knot-exterior`, `thm-mostow-prasad-rigidity-and-knot-volume`, `def-cusp-slope-length`, `lem-ideal-triangulation-gluing-equations-and-peripheral-holonomy`, `lem-dehn-filling-deformation-and-completeness`, `def-axiom-of-choice`.

**Proof/definition route:** prove the local deformation-space theorem
for ideal triangulations and the independent Mostow-rigidity input; solve the
peripheral holonomy equations, verify the cusp-completeness criterion, and
identify the topological filling with the resulting holonomy quotient. Then
all sufficiently large slopes fall in the deformation neighborhood, leaving
only finitely many exceptional slopes. No numeric universal length threshold
or “at most ten” count is asserted without a separate proof. Cosmetic surgery
is reserved for terminal KT-51. **Local prerequisite modules:** `lem-ideal-triangulation-gluing-equations-and-peripheral-holonomy`, `lem-dehn-filling-deformation-and-completeness`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-4/ Thurston Ch.5 Theorem 5.8.2. Future content authoring must supply local proofs; no citation-only fallback.

### `cex-knot-kt-19-boundary-case`

**Kind:** counterexample. **Owner:** `hyperbolic-dehn-filling-and-exceptional-slopes-examples` (KT-19).

Nonprimitive slope(2,0) is not an ordinary Dehn filling meridian; its cone/orbifold parameter cannot be used as a primitive smooth slope.

**Direct prerequisites:** `def-cusp-slope-length`, `lem-one-cusped-deformation-parameters-and-holonomy`, `thm-thurston-hyperbolic-dehn-filling`, `lem-ideal-triangulation-gluing-equations-and-peripheral-holonomy`, `lem-dehn-filling-deformation-and-completeness`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-4/ Thurston Ch.5 Theorem 5.8.2. Future content authoring must supply local proofs; no citation-only fallback.

### `ex-knot-kt-19-worked-cases`

**Kind:** example. **Owner:** `hyperbolic-dehn-filling-and-exceptional-slopes-examples` (KT-19).

Figure-eight zero-filling caps its punctured-torus fiber and gives a torus bundle with monodromy [[2,1],[1,1]], hence nonhyperbolic.

**Direct prerequisites:** `def-cusp-slope-length`, `lem-one-cusped-deformation-parameters-and-holonomy`, `thm-thurston-hyperbolic-dehn-filling`, `lem-ideal-triangulation-gluing-equations-and-peripheral-holonomy`, `lem-dehn-filling-deformation-and-completeness`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-4/ Thurston Ch.5 Theorem 5.8.2. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-baldwin-sivek-instanton-surgery-and-newton-polygon-inputs`

**Kind:** lemma. **Owner:** `character-varieties-and-the-a-polynomial` (KT-20).

For S3 knots, enhanced-A thinness and infinitely many SL2(C)-abelian rational surgeries characterize torus knots under Baldwin–Sivek's exact conventions.

**Direct prerequisites:** `thm-knot-wirtinger-presentation-correctness`, `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-knot-twisted-chain-complex-and-reidemeister-torsion`, `lem-twisted-fox-jacobian-is-cellular-boundary`, `def-incompressibility-seifert-fibration-and-jsj-system`, `thm-jsj-decomposition-of-knot-exteriors`, `def-satellite-pattern-companion-and-winding-number`, `thm-thurston-hyperbolic-dehn-filling`, `def-singular-instanton-knot-and-sutured-closure-data`, `lem-instanton-knot-complex-asd-analytic-foundations`, `thm-sutured-instanton-khi-rank-detects-unknot`, `def-sl-two-character-variety-and-peripheral-eigenvalues`, `def-knot-a-polynomial`, `def-enhanced-a-polynomial`, `def-character-variety-logarithmic-slope-invariant`, `def-sl-two-abelian-surgery`, `def-adjoint-twisted-homology-and-culler-shalen-data`, `def-axiom-of-choice`.

**Proof/definition route:** Prove the imported instanton L-space surgery constraints, exclude hyperbolic cases by faithful filling representations, exclude satellites via pattern/Alexander restrictions, and calculate the torus case. Split Theorems 1.1/1.2 and the exact Corollaries 1.3/1.4 rather than inventing individual torus detection from a generic label.

**Source boundary:** reader-4/ Bénard–Florens–Rodau 2024 Theorems 4.1,5.2; reader-4/ Baldwin–Sivek arXiv:2405.19197v2, published Math. Ann. 394 (2026), Theorems 1.1,1.2,1.7 and Questions 1.5,1.6,1.8. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-knot-a-polynomial-boundary-elimination`

**Kind:** lemma. **Owner:** `character-varieties-and-the-a-polynomial` (KT-20).

The reduced union of one-dimensional eigenvalue images of specified character components has a Laurent defining polynomial, up to units, with abelian factor L−1 in the ordinary convention.

**Direct prerequisites:** `thm-knot-wirtinger-presentation-correctness`, `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-knot-twisted-chain-complex-and-reidemeister-torsion`, `lem-twisted-fox-jacobian-is-cellular-boundary`, `def-incompressibility-seifert-fibration-and-jsj-system`, `thm-jsj-decomposition-of-knot-exteriors`, `def-satellite-pattern-companion-and-winding-number`, `thm-thurston-hyperbolic-dehn-filling`, `def-singular-instanton-knot-and-sutured-closure-data`, `lem-instanton-knot-complex-asd-analytic-foundations`, `thm-sutured-instanton-khi-rank-detects-unknot`, `def-sl-two-character-variety-and-peripheral-eigenvalues`, `def-knot-a-polynomial`, `def-enhanced-a-polynomial`, `def-character-variety-logarithmic-slope-invariant`, `def-sl-two-abelian-surgery`, `def-adjoint-twisted-homology-and-culler-shalen-data`, `def-axiom-of-choice`.

**Proof/definition route:** Lift peripheral restrictions to simultaneous eigenvalue data, eliminate interior variables and remove repeated factors. Record isolated image points separately; prove the actual matrix filling relation before using eigenvalues as a representation detector.

**Source boundary:** reader-4/ Bénard–Florens–Rodau 2024 Theorems 4.1,5.2; reader-4/ Baldwin–Sivek arXiv:2405.19197v2, published Math. Ann. 394 (2026), Theorems 1.1,1.2,1.7 and Questions 1.5,1.6,1.8. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-sl2-character-trace-coordinate-algebra`

**Kind:** lemma. **Owner:** `character-varieties-and-the-a-polynomial` (KT-20).

A finitely presented group has an affine SL2 representation variety and a finitely generated trace-character quotient; peripheral restriction is algebraic.

**Direct prerequisites:** `thm-knot-wirtinger-presentation-correctness`, `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-knot-twisted-chain-complex-and-reidemeister-torsion`, `lem-twisted-fox-jacobian-is-cellular-boundary`, `def-incompressibility-seifert-fibration-and-jsj-system`, `thm-jsj-decomposition-of-knot-exteriors`, `def-satellite-pattern-companion-and-winding-number`, `thm-thurston-hyperbolic-dehn-filling`, `def-singular-instanton-knot-and-sutured-closure-data`, `lem-instanton-knot-complex-asd-analytic-foundations`, `thm-sutured-instanton-khi-rank-detects-unknot`, `def-sl-two-character-variety-and-peripheral-eigenvalues`, `def-knot-a-polynomial`, `def-enhanced-a-polynomial`, `def-character-variety-logarithmic-slope-invariant`, `def-sl-two-abelian-surgery`, `def-adjoint-twisted-homology-and-culler-shalen-data`, `def-axiom-of-choice`.

**Proof/definition route:** Write matrix-relator equations and determinant-one constraints, prove the needed invariant-theory trace identities/generation, and distinguish semisimple characters from individual nonsemisimple representations. Elimination computes Zariski closures, not every geometric representation.

**Source boundary:** reader-4/ Bénard–Florens–Rodau 2024 Theorems 4.1,5.2; reader-4/ Baldwin–Sivek arXiv:2405.19197v2, published Math. Ann. 394 (2026), Theorems 1.1,1.2,1.7 and Questions 1.5,1.6,1.8. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-adjoint-logarithmic-gauss-slope-and-ideal-point`

**Kind:** theorem. **Owner:** `character-varieties-and-the-a-polynomial` (KT-20).

On BFR's admissible irreducible component with one-dimensional restriction, s=−(M/L)(A_M/A_L) as a rational identity; its ideal-point slope has the negative boundary-slope convention b/a.

**Direct prerequisites:** `thm-knot-wirtinger-presentation-correctness`, `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-knot-twisted-chain-complex-and-reidemeister-torsion`, `lem-twisted-fox-jacobian-is-cellular-boundary`, `def-incompressibility-seifert-fibration-and-jsj-system`, `thm-jsj-decomposition-of-knot-exteriors`, `def-satellite-pattern-companion-and-winding-number`, `thm-thurston-hyperbolic-dehn-filling`, `def-singular-instanton-knot-and-sutured-closure-data`, `lem-instanton-knot-complex-asd-analytic-foundations`, `thm-sutured-instanton-khi-rank-detects-unknot`, `def-sl-two-character-variety-and-peripheral-eigenvalues`, `def-knot-a-polynomial`, `def-enhanced-a-polynomial`, `def-character-variety-logarithmic-slope-invariant`, `def-sl-two-abelian-surgery`, `def-adjoint-twisted-homology-and-culler-shalen-data`, `def-axiom-of-choice`.

**Proof/definition route:** Compute the twisted boundary kernel by exact linear algebra, identify its tangent/conormal line via deformation cohomology, then apply valuations and the Culler–Shalen surface construction. Nonadmissible points and zero denominators are excluded, not assigned arbitrary finite slopes.

**Source boundary:** reader-4/ Bénard–Florens–Rodau 2024 Theorems 4.1,5.2; reader-4/ Baldwin–Sivek arXiv:2405.19197v2, published Math. Ann. 394 (2026), Theorems 1.1,1.2,1.7 and Questions 1.5,1.6,1.8. Future content authoring must supply local proofs; no citation-only fallback.

### `cor-enhanced-a-polynomial-and-alexander-degree-identify-torus-knots`

**Kind:** corollary. **Owner:** `character-varieties-and-the-a-polynomial` (KT-20).

If(enhanced A-polynomial, degree of symmetrized Alexander polynomial) of K⊂S3 equals that of a specified torus knot T_(a,b), then K is that torus knot in the source orientation/mirror convention (Corollary1.4).

**Direct prerequisites:** `thm-knot-wirtinger-presentation-correctness`, `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-knot-twisted-chain-complex-and-reidemeister-torsion`, `lem-twisted-fox-jacobian-is-cellular-boundary`, `def-incompressibility-seifert-fibration-and-jsj-system`, `thm-jsj-decomposition-of-knot-exteriors`, `def-satellite-pattern-companion-and-winding-number`, `thm-thurston-hyperbolic-dehn-filling`, `def-singular-instanton-knot-and-sutured-closure-data`, `lem-instanton-knot-complex-asd-analytic-foundations`, `thm-sutured-instanton-khi-rank-detects-unknot`, `def-sl-two-character-variety-and-peripheral-eigenvalues`, `def-knot-a-polynomial`, `def-enhanced-a-polynomial`, `def-character-variety-logarithmic-slope-invariant`, `def-sl-two-abelian-surgery`, `def-adjoint-twisted-homology-and-culler-shalen-data`, `lem-sl2-character-trace-coordinate-algebra`, `lem-knot-a-polynomial-boundary-elimination`, `thm-adjoint-logarithmic-gauss-slope-and-ideal-point`, `lem-baldwin-sivek-instanton-surgery-and-newton-polygon-inputs`, `def-axiom-of-choice`.

**Proof/definition route:** use KT-01's presentation and KT-02's
marked peripheral words to build polynomial matrix equations. Prove trace
coordinates generate the character quotient, the boundary restriction is
algebraic, and elimination with Laurent resultants separates reducible from
nonabelian components. For the logarithmic slope, prove adjoint-twisted
homology is one-dimensional on the admissible locus, derive the Fox boundary
matrix and differentiate the defining polynomial; then use the source's
ideal-point/Culler–Shalen argument. For the Baldwin–Sivek results, assign
separate local modules for enhanced-polynomial construction, rational
$SL_2(\mathbb C)$ surgery representations, the torus/satellite/hyperbolic
trichotomy, the imported instanton L-space restriction, and the Newton-polygon
criterion. Their papers rely on instanton Floer and Culler–Shalen inputs, so
none of those is a proof supplied by the article citation. State exact
exceptions and orientation conventions. **Local prerequisite modules:** `lem-sl2-character-trace-coordinate-algebra`, `lem-knot-a-polynomial-boundary-elimination`, `thm-adjoint-logarithmic-gauss-slope-and-ideal-point`, `lem-baldwin-sivek-instanton-surgery-and-newton-polygon-inputs`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-4/ Bénard–Florens–Rodau 2024 Theorems 4.1,5.2; reader-4/ Baldwin–Sivek arXiv:2405.19197v2, published Math. Ann. 394 (2026), Theorems 1.1,1.2,1.7 and Questions 1.5,1.6,1.8. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-adjoint-twisted-slope-is-rational-on-a-character-component`

**Kind:** lemma. **Owner:** `character-varieties-and-the-a-polynomial` (KT-20).

proves rationality under the one-dimensional image and nonvanishing hypotheses.

**Direct prerequisites:** `thm-knot-wirtinger-presentation-correctness`, `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-knot-twisted-chain-complex-and-reidemeister-torsion`, `lem-twisted-fox-jacobian-is-cellular-boundary`, `def-incompressibility-seifert-fibration-and-jsj-system`, `thm-jsj-decomposition-of-knot-exteriors`, `def-satellite-pattern-companion-and-winding-number`, `thm-thurston-hyperbolic-dehn-filling`, `def-singular-instanton-knot-and-sutured-closure-data`, `lem-instanton-knot-complex-asd-analytic-foundations`, `thm-sutured-instanton-khi-rank-detects-unknot`, `def-sl-two-character-variety-and-peripheral-eigenvalues`, `def-knot-a-polynomial`, `def-enhanced-a-polynomial`, `def-character-variety-logarithmic-slope-invariant`, `def-sl-two-abelian-surgery`, `def-adjoint-twisted-homology-and-culler-shalen-data`, `lem-sl2-character-trace-coordinate-algebra`, `lem-knot-a-polynomial-boundary-elimination`, `thm-adjoint-logarithmic-gauss-slope-and-ideal-point`, `lem-baldwin-sivek-instanton-surgery-and-newton-polygon-inputs`, `def-axiom-of-choice`.

**Proof/definition route:** use KT-01's presentation and KT-02's
marked peripheral words to build polynomial matrix equations. Prove trace
coordinates generate the character quotient, the boundary restriction is
algebraic, and elimination with Laurent resultants separates reducible from
nonabelian components. For the logarithmic slope, prove adjoint-twisted
homology is one-dimensional on the admissible locus, derive the Fox boundary
matrix and differentiate the defining polynomial; then use the source's
ideal-point/Culler–Shalen argument. For the Baldwin–Sivek results, assign
separate local modules for enhanced-polynomial construction, rational
$SL_2(\mathbb C)$ surgery representations, the torus/satellite/hyperbolic
trichotomy, the imported instanton L-space restriction, and the Newton-polygon
criterion. Their papers rely on instanton Floer and Culler–Shalen inputs, so
none of those is a proof supplied by the article citation. State exact
exceptions and orientation conventions. **Local prerequisite modules:** `lem-sl2-character-trace-coordinate-algebra`, `lem-knot-a-polynomial-boundary-elimination`, `thm-adjoint-logarithmic-gauss-slope-and-ideal-point`, `lem-baldwin-sivek-instanton-surgery-and-newton-polygon-inputs`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-4/ Bénard–Florens–Rodau 2024 Theorems 4.1,5.2; reader-4/ Baldwin–Sivek arXiv:2405.19197v2, published Math. Ann. 394 (2026), Theorems 1.1,1.2,1.7 and Questions 1.5,1.6,1.8. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-sl-two-character-trace-coordinate-model`

**Kind:** lemma. **Owner:** `character-varieties-and-the-a-polynomial` (KT-20).

proves the finite trace-coordinate equations present the character quotient on the stated reducible/nonreducible loci.

**Direct prerequisites:** `thm-knot-wirtinger-presentation-correctness`, `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-knot-twisted-chain-complex-and-reidemeister-torsion`, `lem-twisted-fox-jacobian-is-cellular-boundary`, `def-incompressibility-seifert-fibration-and-jsj-system`, `thm-jsj-decomposition-of-knot-exteriors`, `def-satellite-pattern-companion-and-winding-number`, `thm-thurston-hyperbolic-dehn-filling`, `def-singular-instanton-knot-and-sutured-closure-data`, `lem-instanton-knot-complex-asd-analytic-foundations`, `thm-sutured-instanton-khi-rank-detects-unknot`, `def-sl-two-character-variety-and-peripheral-eigenvalues`, `def-knot-a-polynomial`, `def-enhanced-a-polynomial`, `def-character-variety-logarithmic-slope-invariant`, `def-sl-two-abelian-surgery`, `def-adjoint-twisted-homology-and-culler-shalen-data`, `lem-sl2-character-trace-coordinate-algebra`, `lem-knot-a-polynomial-boundary-elimination`, `thm-adjoint-logarithmic-gauss-slope-and-ideal-point`, `lem-baldwin-sivek-instanton-surgery-and-newton-polygon-inputs`, `def-axiom-of-choice`.

**Proof/definition route:** use KT-01's presentation and KT-02's
marked peripheral words to build polynomial matrix equations. Prove trace
coordinates generate the character quotient, the boundary restriction is
algebraic, and elimination with Laurent resultants separates reducible from
nonabelian components. For the logarithmic slope, prove adjoint-twisted
homology is one-dimensional on the admissible locus, derive the Fox boundary
matrix and differentiate the defining polynomial; then use the source's
ideal-point/Culler–Shalen argument. For the Baldwin–Sivek results, assign
separate local modules for enhanced-polynomial construction, rational
$SL_2(\mathbb C)$ surgery representations, the torus/satellite/hyperbolic
trichotomy, the imported instanton L-space restriction, and the Newton-polygon
criterion. Their papers rely on instanton Floer and Culler–Shalen inputs, so
none of those is a proof supplied by the article citation. State exact
exceptions and orientation conventions. **Local prerequisite modules:** `lem-sl2-character-trace-coordinate-algebra`, `lem-knot-a-polynomial-boundary-elimination`, `thm-adjoint-logarithmic-gauss-slope-and-ideal-point`, `lem-baldwin-sivek-instanton-surgery-and-newton-polygon-inputs`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-4/ Bénard–Florens–Rodau 2024 Theorems 4.1,5.2; reader-4/ Baldwin–Sivek arXiv:2405.19197v2, published Math. Ann. 394 (2026), Theorems 1.1,1.2,1.7 and Questions 1.5,1.6,1.8. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-a-polynomial-boundary-restriction-and-surgery-detector`

**Kind:** theorem. **Owner:** `character-varieties-and-the-a-polynomial` (KT-20).

proves the boundary restriction is algebraic and boundary eigenvalues from each one-dimensional peripheral-image component included in the defining curve satisfy its A-polynomial. Zero-dimensional images are recorded separately and are not silently curve factors. A representation descends to p/q filling exactly when ρ(μ)^pρ(λ)^q=I. The eigenvalue equation M^pL^q=1 is necessary, and is sufficient only with simultaneous diagonalizability (or a separately verified matrix relation); unipotent parts, ideal points and Zariski-closure points need not furnish filling representations.

**Direct prerequisites:** `thm-knot-wirtinger-presentation-correctness`, `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-knot-twisted-chain-complex-and-reidemeister-torsion`, `lem-twisted-fox-jacobian-is-cellular-boundary`, `def-incompressibility-seifert-fibration-and-jsj-system`, `thm-jsj-decomposition-of-knot-exteriors`, `def-satellite-pattern-companion-and-winding-number`, `thm-thurston-hyperbolic-dehn-filling`, `def-singular-instanton-knot-and-sutured-closure-data`, `lem-instanton-knot-complex-asd-analytic-foundations`, `thm-sutured-instanton-khi-rank-detects-unknot`, `def-sl-two-character-variety-and-peripheral-eigenvalues`, `def-knot-a-polynomial`, `def-enhanced-a-polynomial`, `def-character-variety-logarithmic-slope-invariant`, `def-sl-two-abelian-surgery`, `def-adjoint-twisted-homology-and-culler-shalen-data`, `lem-sl2-character-trace-coordinate-algebra`, `lem-knot-a-polynomial-boundary-elimination`, `thm-adjoint-logarithmic-gauss-slope-and-ideal-point`, `lem-baldwin-sivek-instanton-surgery-and-newton-polygon-inputs`, `def-axiom-of-choice`.

**Proof/definition route:** use KT-01's presentation and KT-02's
marked peripheral words to build polynomial matrix equations. Prove trace
coordinates generate the character quotient, the boundary restriction is
algebraic, and elimination with Laurent resultants separates reducible from
nonabelian components. For the logarithmic slope, prove adjoint-twisted
homology is one-dimensional on the admissible locus, derive the Fox boundary
matrix and differentiate the defining polynomial; then use the source's
ideal-point/Culler–Shalen argument. For the Baldwin–Sivek results, assign
separate local modules for enhanced-polynomial construction, rational
$SL_2(\mathbb C)$ surgery representations, the torus/satellite/hyperbolic
trichotomy, the imported instanton L-space restriction, and the Newton-polygon
criterion. Their papers rely on instanton Floer and Culler–Shalen inputs, so
none of those is a proof supplied by the article citation. State exact
exceptions and orientation conventions. **Local prerequisite modules:** `lem-sl2-character-trace-coordinate-algebra`, `lem-knot-a-polynomial-boundary-elimination`, `thm-adjoint-logarithmic-gauss-slope-and-ideal-point`, `lem-baldwin-sivek-instanton-surgery-and-newton-polygon-inputs`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-4/ Bénard–Florens–Rodau 2024 Theorems 4.1,5.2; reader-4/ Baldwin–Sivek arXiv:2405.19197v2, published Math. Ann. 394 (2026), Theorems 1.1,1.2,1.7 and Questions 1.5,1.6,1.8. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-baldwin-sivek-infinitely-many-abelian-surgeries-characterize-torus-knots`

**Kind:** theorem. **Owner:** `character-varieties-and-the-a-polynomial` (KT-20).

For K⊂S3, infinitely many rational SL2(C)-abelian surgeries occur iff K is a torus knot, including the source unknot convention. SL2(C)-abelian means every representation of the filled group has abelian image.

**Direct prerequisites:** `thm-knot-wirtinger-presentation-correctness`, `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-knot-twisted-chain-complex-and-reidemeister-torsion`, `lem-twisted-fox-jacobian-is-cellular-boundary`, `def-incompressibility-seifert-fibration-and-jsj-system`, `thm-jsj-decomposition-of-knot-exteriors`, `def-satellite-pattern-companion-and-winding-number`, `thm-thurston-hyperbolic-dehn-filling`, `def-singular-instanton-knot-and-sutured-closure-data`, `lem-instanton-knot-complex-asd-analytic-foundations`, `thm-sutured-instanton-khi-rank-detects-unknot`, `def-sl-two-character-variety-and-peripheral-eigenvalues`, `def-knot-a-polynomial`, `def-enhanced-a-polynomial`, `def-character-variety-logarithmic-slope-invariant`, `def-sl-two-abelian-surgery`, `def-adjoint-twisted-homology-and-culler-shalen-data`, `lem-sl2-character-trace-coordinate-algebra`, `lem-knot-a-polynomial-boundary-elimination`, `thm-adjoint-logarithmic-gauss-slope-and-ideal-point`, `lem-baldwin-sivek-instanton-surgery-and-newton-polygon-inputs`, `def-axiom-of-choice`.

**Proof/definition route:** use KT-01's presentation and KT-02's
marked peripheral words to build polynomial matrix equations. Prove trace
coordinates generate the character quotient, the boundary restriction is
algebraic, and elimination with Laurent resultants separates reducible from
nonabelian components. For the logarithmic slope, prove adjoint-twisted
homology is one-dimensional on the admissible locus, derive the Fox boundary
matrix and differentiate the defining polynomial; then use the source's
ideal-point/Culler–Shalen argument. For the Baldwin–Sivek results, assign
separate local modules for enhanced-polynomial construction, rational
$SL_2(\mathbb C)$ surgery representations, the torus/satellite/hyperbolic
trichotomy, the imported instanton L-space restriction, and the Newton-polygon
criterion. Their papers rely on instanton Floer and Culler–Shalen inputs, so
none of those is a proof supplied by the article citation. State exact
exceptions and orientation conventions. **Local prerequisite modules:** `lem-sl2-character-trace-coordinate-algebra`, `lem-knot-a-polynomial-boundary-elimination`, `thm-adjoint-logarithmic-gauss-slope-and-ideal-point`, `lem-baldwin-sivek-instanton-surgery-and-newton-polygon-inputs`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-4/ Bénard–Florens–Rodau 2024 Theorems 4.1,5.2; reader-4/ Baldwin–Sivek arXiv:2405.19197v2, published Math. Ann. 394 (2026), Theorems 1.1,1.2,1.7 and Questions 1.5,1.6,1.8. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-baldwin-sivek-two-boundary-slope-alternative`

**Kind:** theorem. **Owner:** `character-varieties-and-the-a-polynomial` (KT-20).

If K⊂S3 is nontrivial, fibered and not a torus knot, then either E_K contains a connected separating incompressible surface with slope-zero boundary or K has at least three boundary slopes (Theorem1.7). Exactly-two-slopes is its corollary restatement, not an extra hypothesis here.

**Direct prerequisites:** `thm-knot-wirtinger-presentation-correctness`, `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-knot-twisted-chain-complex-and-reidemeister-torsion`, `lem-twisted-fox-jacobian-is-cellular-boundary`, `def-incompressibility-seifert-fibration-and-jsj-system`, `thm-jsj-decomposition-of-knot-exteriors`, `def-satellite-pattern-companion-and-winding-number`, `thm-thurston-hyperbolic-dehn-filling`, `def-singular-instanton-knot-and-sutured-closure-data`, `lem-instanton-knot-complex-asd-analytic-foundations`, `thm-sutured-instanton-khi-rank-detects-unknot`, `def-sl-two-character-variety-and-peripheral-eigenvalues`, `def-knot-a-polynomial`, `def-enhanced-a-polynomial`, `def-character-variety-logarithmic-slope-invariant`, `def-sl-two-abelian-surgery`, `def-adjoint-twisted-homology-and-culler-shalen-data`, `lem-sl2-character-trace-coordinate-algebra`, `lem-knot-a-polynomial-boundary-elimination`, `thm-adjoint-logarithmic-gauss-slope-and-ideal-point`, `lem-baldwin-sivek-instanton-surgery-and-newton-polygon-inputs`, `def-axiom-of-choice`.

**Proof/definition route:** use KT-01's presentation and KT-02's
marked peripheral words to build polynomial matrix equations. Prove trace
coordinates generate the character quotient, the boundary restriction is
algebraic, and elimination with Laurent resultants separates reducible from
nonabelian components. For the logarithmic slope, prove adjoint-twisted
homology is one-dimensional on the admissible locus, derive the Fox boundary
matrix and differentiate the defining polynomial; then use the source's
ideal-point/Culler–Shalen argument. For the Baldwin–Sivek results, assign
separate local modules for enhanced-polynomial construction, rational
$SL_2(\mathbb C)$ surgery representations, the torus/satellite/hyperbolic
trichotomy, the imported instanton L-space restriction, and the Newton-polygon
criterion. Their papers rely on instanton Floer and Culler–Shalen inputs, so
none of those is a proof supplied by the article citation. State exact
exceptions and orientation conventions. **Local prerequisite modules:** `lem-sl2-character-trace-coordinate-algebra`, `lem-knot-a-polynomial-boundary-elimination`, `thm-adjoint-logarithmic-gauss-slope-and-ideal-point`, `lem-baldwin-sivek-instanton-surgery-and-newton-polygon-inputs`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-4/ Bénard–Florens–Rodau 2024 Theorems 4.1,5.2; reader-4/ Baldwin–Sivek arXiv:2405.19197v2, published Math. Ann. 394 (2026), Theorems 1.1,1.2,1.7 and Questions 1.5,1.6,1.8. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-benard-florens-rodau-logarithmic-gauss-formula`

**Kind:** theorem. **Owner:** `character-varieties-and-the-a-polynomial` (KT-20).

proves their slope equals the negative logarithmic Gauss map $-(M/L)(\partial_M A/\partial_L A)$ in their variable order on a one-dimensional irreducible component; at an ideal point it gives the negative Culler–Shalen boundary slope under their convention.

**Direct prerequisites:** `thm-knot-wirtinger-presentation-correctness`, `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-knot-twisted-chain-complex-and-reidemeister-torsion`, `lem-twisted-fox-jacobian-is-cellular-boundary`, `def-incompressibility-seifert-fibration-and-jsj-system`, `thm-jsj-decomposition-of-knot-exteriors`, `def-satellite-pattern-companion-and-winding-number`, `thm-thurston-hyperbolic-dehn-filling`, `def-singular-instanton-knot-and-sutured-closure-data`, `lem-instanton-knot-complex-asd-analytic-foundations`, `thm-sutured-instanton-khi-rank-detects-unknot`, `def-sl-two-character-variety-and-peripheral-eigenvalues`, `def-knot-a-polynomial`, `def-enhanced-a-polynomial`, `def-character-variety-logarithmic-slope-invariant`, `def-sl-two-abelian-surgery`, `def-adjoint-twisted-homology-and-culler-shalen-data`, `lem-sl2-character-trace-coordinate-algebra`, `lem-knot-a-polynomial-boundary-elimination`, `thm-adjoint-logarithmic-gauss-slope-and-ideal-point`, `lem-baldwin-sivek-instanton-surgery-and-newton-polygon-inputs`, `def-axiom-of-choice`.

**Proof/definition route:** use KT-01's presentation and KT-02's
marked peripheral words to build polynomial matrix equations. Prove trace
coordinates generate the character quotient, the boundary restriction is
algebraic, and elimination with Laurent resultants separates reducible from
nonabelian components. For the logarithmic slope, prove adjoint-twisted
homology is one-dimensional on the admissible locus, derive the Fox boundary
matrix and differentiate the defining polynomial; then use the source's
ideal-point/Culler–Shalen argument. For the Baldwin–Sivek results, assign
separate local modules for enhanced-polynomial construction, rational
$SL_2(\mathbb C)$ surgery representations, the torus/satellite/hyperbolic
trichotomy, the imported instanton L-space restriction, and the Newton-polygon
criterion. Their papers rely on instanton Floer and Culler–Shalen inputs, so
none of those is a proof supplied by the article citation. State exact
exceptions and orientation conventions. **Local prerequisite modules:** `lem-sl2-character-trace-coordinate-algebra`, `lem-knot-a-polynomial-boundary-elimination`, `thm-adjoint-logarithmic-gauss-slope-and-ideal-point`, `lem-baldwin-sivek-instanton-surgery-and-newton-polygon-inputs`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-4/ Bénard–Florens–Rodau 2024 Theorems 4.1,5.2; reader-4/ Baldwin–Sivek arXiv:2405.19197v2, published Math. Ann. 394 (2026), Theorems 1.1,1.2,1.7 and Questions 1.5,1.6,1.8. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-enhanced-a-polynomial-newton-polygon-detects-torus-knots`

**Kind:** theorem. **Owner:** `character-varieties-and-the-a-polynomial` (KT-20).

For K⊂S3, the enhanced-A Newton polygon is contained in a line iff K is a torus knot, with the enhanced polynomial defined from the source irreducible representation components (Baldwin–Sivek Theorem1.2).

**Direct prerequisites:** `thm-knot-wirtinger-presentation-correctness`, `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-knot-twisted-chain-complex-and-reidemeister-torsion`, `lem-twisted-fox-jacobian-is-cellular-boundary`, `def-incompressibility-seifert-fibration-and-jsj-system`, `thm-jsj-decomposition-of-knot-exteriors`, `def-satellite-pattern-companion-and-winding-number`, `thm-thurston-hyperbolic-dehn-filling`, `def-singular-instanton-knot-and-sutured-closure-data`, `lem-instanton-knot-complex-asd-analytic-foundations`, `thm-sutured-instanton-khi-rank-detects-unknot`, `def-sl-two-character-variety-and-peripheral-eigenvalues`, `def-knot-a-polynomial`, `def-enhanced-a-polynomial`, `def-character-variety-logarithmic-slope-invariant`, `def-sl-two-abelian-surgery`, `def-adjoint-twisted-homology-and-culler-shalen-data`, `lem-sl2-character-trace-coordinate-algebra`, `lem-knot-a-polynomial-boundary-elimination`, `thm-adjoint-logarithmic-gauss-slope-and-ideal-point`, `lem-baldwin-sivek-instanton-surgery-and-newton-polygon-inputs`, `def-axiom-of-choice`.

**Proof/definition route:** use KT-01's presentation and KT-02's
marked peripheral words to build polynomial matrix equations. Prove trace
coordinates generate the character quotient, the boundary restriction is
algebraic, and elimination with Laurent resultants separates reducible from
nonabelian components. For the logarithmic slope, prove adjoint-twisted
homology is one-dimensional on the admissible locus, derive the Fox boundary
matrix and differentiate the defining polynomial; then use the source's
ideal-point/Culler–Shalen argument. For the Baldwin–Sivek results, assign
separate local modules for enhanced-polynomial construction, rational
$SL_2(\mathbb C)$ surgery representations, the torus/satellite/hyperbolic
trichotomy, the imported instanton L-space restriction, and the Newton-polygon
criterion. Their papers rely on instanton Floer and Culler–Shalen inputs, so
none of those is a proof supplied by the article citation. State exact
exceptions and orientation conventions. **Local prerequisite modules:** `lem-sl2-character-trace-coordinate-algebra`, `lem-knot-a-polynomial-boundary-elimination`, `thm-adjoint-logarithmic-gauss-slope-and-ideal-point`, `lem-baldwin-sivek-instanton-surgery-and-newton-polygon-inputs`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-4/ Bénard–Florens–Rodau 2024 Theorems 4.1,5.2; reader-4/ Baldwin–Sivek arXiv:2405.19197v2, published Math. Ann. 394 (2026), Theorems 1.1,1.2,1.7 and Questions 1.5,1.6,1.8. Future content authoring must supply local proofs; no citation-only fallback.

### `cex-knot-kt-20-boundary-case`

**Kind:** counterexample. **Owner:** `character-varieties-and-the-a-polynomial-examples` (KT-20).

A peripheral pair ρ(μ)=[[1,1],[0,1]],ρ(λ)=I has eigenvalue equation M^pL^q=1 for every p,q but fails the matrix filling relation for p≠0. This is a matrix-level boundary counterexample, not a claim that every such pair extends to a knot exterior.

**Direct prerequisites:** `def-sl-two-character-variety-and-peripheral-eigenvalues`, `lem-sl-two-character-trace-coordinate-model`, `def-knot-a-polynomial`, `def-enhanced-a-polynomial`, `thm-a-polynomial-boundary-restriction-and-surgery-detector`, `def-character-variety-logarithmic-slope-invariant`, `lem-adjoint-twisted-slope-is-rational-on-a-character-component`, `thm-benard-florens-rodau-logarithmic-gauss-formula`, `def-sl-two-abelian-surgery`, `thm-baldwin-sivek-infinitely-many-abelian-surgeries-characterize-torus-knots`, `thm-enhanced-a-polynomial-newton-polygon-detects-torus-knots`, `cor-enhanced-a-polynomial-and-alexander-degree-identify-torus-knots`, `thm-baldwin-sivek-two-boundary-slope-alternative`, `lem-sl2-character-trace-coordinate-algebra`, `lem-knot-a-polynomial-boundary-elimination`, `thm-adjoint-logarithmic-gauss-slope-and-ideal-point`, `lem-baldwin-sivek-instanton-surgery-and-newton-polygon-inputs`, `def-adjoint-twisted-homology-and-culler-shalen-data`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-4/ Bénard–Florens–Rodau 2024 Theorems 4.1,5.2; reader-4/ Baldwin–Sivek arXiv:2405.19197v2, published Math. Ann. 394 (2026), Theorems 1.1,1.2,1.7 and Questions 1.5,1.6,1.8. Future content authoring must supply local proofs; no citation-only fallback.

### `ex-knot-kt-20-worked-cases`

**Kind:** example. **Owner:** `character-varieties-and-the-a-polynomial-examples` (KT-20).

With fixed M-meridian/L-longitude convention compute figure-eight ordinary A=(L−1)(L²−(M⁴−M²−2−M^−2+M^−4)L+1) up to monomial unit; explicitly state which factors remain enhanced.

**Direct prerequisites:** `def-sl-two-character-variety-and-peripheral-eigenvalues`, `lem-sl-two-character-trace-coordinate-model`, `def-knot-a-polynomial`, `def-enhanced-a-polynomial`, `thm-a-polynomial-boundary-restriction-and-surgery-detector`, `def-character-variety-logarithmic-slope-invariant`, `lem-adjoint-twisted-slope-is-rational-on-a-character-component`, `thm-benard-florens-rodau-logarithmic-gauss-formula`, `def-sl-two-abelian-surgery`, `thm-baldwin-sivek-infinitely-many-abelian-surgeries-characterize-torus-knots`, `thm-enhanced-a-polynomial-newton-polygon-detects-torus-knots`, `cor-enhanced-a-polynomial-and-alexander-degree-identify-torus-knots`, `thm-baldwin-sivek-two-boundary-slope-alternative`, `lem-sl2-character-trace-coordinate-algebra`, `lem-knot-a-polynomial-boundary-elimination`, `thm-adjoint-logarithmic-gauss-slope-and-ideal-point`, `lem-baldwin-sivek-instanton-surgery-and-newton-polygon-inputs`, `def-adjoint-twisted-homology-and-culler-shalen-data`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-4/ Bénard–Florens–Rodau 2024 Theorems 4.1,5.2; reader-4/ Baldwin–Sivek arXiv:2405.19197v2, published Math. Ann. 394 (2026), Theorems 1.1,1.2,1.7 and Questions 1.5,1.6,1.8. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-thurston-hyperbolization-for-atoroidal-knot-exteriors`

**Kind:** theorem. **Owner:** `hyperbolic-knot-complements-and-volume` (KT-18).

A compact S3 knot exterior that is irreducible, boundary-incompressible, atoroidal and not Seifert-fibered has complete finite-volume hyperbolic interior.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-incompressibility-seifert-fibration-and-jsj-system`, `thm-jsj-decomposition-of-knot-exteriors`, `def-satellite-pattern-companion-and-winding-number`, `def-finite-volume-hyperbolic-knot-exterior`, `def-pared-hyperbolic-structures-and-volume`, `def-axiom-of-choice`.

**Proof/definition route:** Use the pared Haken structure: establish incompressible hierarchy, acylindrical pieces, hyperbolic gluing/deformation compactness and cusp completeness. The geometrization/hyperbolization proof is a major source-recovery obligation; the 1980 notes do not provide all these steps.

**Source boundary:** reader-4/ Thurston Geometry and Topology of 3-Manifolds, selected Chs.1–9,11. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-hyperbolic-knot-exterior-irreducibility-and-boundary-incompressibility`

**Kind:** lemma. **Owner:** `hyperbolic-knot-complements-and-volume` (KT-18).

proves the required topological hypotheses for an atoroidal, non-Seifert-fibered exterior.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-incompressibility-seifert-fibration-and-jsj-system`, `thm-jsj-decomposition-of-knot-exteriors`, `def-satellite-pattern-companion-and-winding-number`, `def-finite-volume-hyperbolic-knot-exterior`, `def-pared-hyperbolic-structures-and-volume`, `thm-thurston-hyperbolization-for-atoroidal-knot-exteriors`, `thm-mostow-prasad-rigidity-and-knot-volume`, `def-axiom-of-choice`.

**Proof/definition route:** do not compress geometrization into a
citation. Name local modules for cusp completeness and finite-volume
truncation; pared-structure construction; the hyperbolic alternative under
the exact torus-boundary hypotheses; Mostow–Prasad rigidity via boundary-at-
infinity extension and straightening; and finiteness/isotopy invariance of the
volume integral. Each receives an exact theorem contract and proof-level route,
not a generic “prove hyperbolization” placeholder. The theorem excludes torus
and satellite knots unless their relevant JSJ pieces meet its hypotheses.
**Local prerequisite modules:** `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `thm-thurston-hyperbolization-for-atoroidal-knot-exteriors`, `thm-mostow-prasad-rigidity-and-knot-volume`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-4/ Thurston Geometry and Topology of 3-Manifolds, selected Chs.1–9,11. Future content authoring must supply local proofs; no citation-only fallback.

### `cex-knot-kt-18-boundary-case`

**Kind:** counterexample. **Owner:** `hyperbolic-knot-complements-and-volume-examples` (KT-18).

Trefoil exterior is Seifert-fibered with central regular fiber and does not satisfy the non-Seifert hypothesis of the hyperbolization contract.

**Direct prerequisites:** `def-finite-volume-hyperbolic-knot-exterior`, `lem-hyperbolic-knot-exterior-irreducibility-and-boundary-incompressibility`, `thm-thurston-hyperbolization-for-atoroidal-knot-exteriors`, `thm-mostow-prasad-rigidity-and-knot-volume`, `def-pared-hyperbolic-structures-and-volume`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-4/ Thurston Geometry and Topology of 3-Manifolds, selected Chs.1–9,11. Future content authoring must supply local proofs; no citation-only fallback.

### `ex-knot-kt-18-worked-cases`

**Kind:** example. **Owner:** `hyperbolic-knot-complements-and-volume-examples` (KT-18).

The figure-eight complement glues two regular ideal tetrahedra and has volume2 v3≈2.02988; verify edge angle and cusp completeness equations.

**Direct prerequisites:** `def-finite-volume-hyperbolic-knot-exterior`, `lem-hyperbolic-knot-exterior-irreducibility-and-boundary-incompressibility`, `thm-thurston-hyperbolization-for-atoroidal-knot-exteriors`, `thm-mostow-prasad-rigidity-and-knot-volume`, `def-pared-hyperbolic-structures-and-volume`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-4/ Thurston Geometry and Topology of 3-Manifolds, selected Chs.1–9,11. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-torus-knot-alexander-and-genus-formulas`

**Kind:** theorem. **Owner:** `torus-knots-and-seifert-fibered-exteriors` (KT-16).

derives $g(T(p,q))=(|p|-1)(|q|-1)/2$ and $\Delta_{T(p,q)}(t)\doteq (t^{|pq|}-1)(t-1)/((t^{|p|}-1)(t^{|q|}-1))$.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-knot-connected-sum-and-prime-knot`, `thm-seifert-determinant-is-the-knot-alexander-polynomial`, `def-coprime-torus-knot`, `thm-torus-knot-group-presentation`, `def-axiom-of-choice`.

**Proof/definition route:** split the exterior along the annulus in
the Heegaard torus into two solid tori; van Kampen identifies core classes and
gives the single relation. Compute a meridian-longitude word from a Bezout
solution to $p\alpha+q\beta=1$ and prove primitivity and zero linking of the
longitude. Construct the standard plumbing of $|p|-1$ by $|q|-1$ signed Hopf
bands, count genus, then apply KT-07's determinant formula. **Local prerequisite modules:** `thm-torus-knot-group-presentation`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-1/ Calegari 2025 §4.3; reader-4/ Hatcher 3-Manifold Notes. Future content authoring must supply local proofs; no citation-only fallback.

### `cex-knot-kt-16-boundary-case`

**Kind:** counterexample. **Owner:** `torus-knots-and-seifert-fibered-exteriors-examples` (KT-16).

T(2,2) has two components and is not in the coprime knot genus formula.

**Direct prerequisites:** `thm-torus-knot-group-presentation`, `thm-torus-knot-alexander-and-genus-formulas`, `def-coprime-torus-knot`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-1/ Calegari 2025 §4.3; reader-4/ Hatcher 3-Manifold Notes. Future content authoring must supply local proofs; no citation-only fallback.

### `ex-knot-kt-16-worked-cases`

**Kind:** example. **Owner:** `torus-knots-and-seifert-fibered-exteriors-examples` (KT-16).

For T(2,3), compute group ⟨x,y:x²=y³⟩, Δ=t²−t+1 and g=1; T(1,q) is unknot.

**Direct prerequisites:** `thm-torus-knot-group-presentation`, `thm-torus-knot-alexander-and-genus-formulas`, `def-coprime-torus-knot`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-1/ Calegari 2025 §4.3; reader-4/ Hatcher 3-Manifold Notes. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-truncated-milnor-computation-terminates-and-is-correct`

**Kind:** theorem. **Owner:** `milnor-invariants-and-link-peripheral-nilpotent-quotients` (KT-53).

proves stabilization through each lower-central degree, finite word arithmetic, and correctness relative to the peripheral quotient; it makes no polynomial-time claim.

**Direct prerequisites:** `alg-truncated-milnor-invariants-from-based-diagram`, `lem-magnus-commutator-degree-and-truncation`, `thm-string-link-nilpotent-peripheral-identifications`, `lem-milnor-basing-indeterminacy-and-self-crossing-scope`, `def-axiom-of-choice`.

**Proof/definition route:** KT-01 supplies local Wirtinger relations, KT-02 the knot peripheral model which is extended explicitly componentwise here, and KT-03 linking number. A Magnus commutator degree lemma proves E(Γ_qF)⊂1+(X)^q and independence to the stated degree. A basing-change lemma tracks conjugations and longitude meridian corrections; its coefficient recursion produces exactly Δ_I. A self-crossing-change lemma proves nonrepeating-index invariance and explicitly excludes arbitrary repeated-index link-homotopy invariance. These are substantial new local obligations with no claimed full-source coverage in the six dossiers; recover Milnor's primary theorem/complete treatment before future acceptance. The plan preserves the established theorem contracts without treating bibliographic names as proved suppliers.

**Source boundary:** Explicit local derivation; complete classical source recovery required for the stated deep theorem.. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-truncated-milnor-invariants-from-based-diagram-procedure-properties`

**Kind:** theorem. **Owner:** `milnor-invariants-and-link-peripheral-nilpotent-quotients` (KT-53).

For exactly the admissible encoded inputs of alg-truncated-milnor-invariants-from-based-diagram, execution terminates, rejects precisely the stated syntactic failures and returns the prescribed finite output. Any identification with a topological invariant, recognition completeness, or asymptotic complexity is only the separately proved domain result, not inferred from finite execution.

**Direct prerequisites:** `alg-truncated-milnor-invariants-from-based-diagram`, `thm-knot-wirtinger-presentation-correctness`, `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `thm-linking-number-is-invariant-and-writhe-is-not`, `def-maximal-abelian-cover-alexander-module`, `thm-abelian-cover-chain-model-computes-alexander-module`, `def-based-string-link-and-labeled-link-peripheral-system`, `def-lower-central-series-and-magnus-expansion-for-links`, `def-milnor-integer-and-residue-invariants`, `def-axiom-of-choice`.

**Proof/definition route:** Use the explicit finite loop/state/word or bounded search measure in the procedure; prove each branch preserves the stated output representation and all arithmetic is effective. Cite the domain correctness and completeness modules separately when claiming invariant/recognition meaning.

**Source boundary:** Explicit local derivation; complete classical source recovery required for the stated deep theorem.. Future content authoring must supply local proofs; no citation-only fallback.

### `cex-pairwise-linking-does-not-classify-links`

**Kind:** counterexample. **Owner:** `milnor-invariants-and-link-peripheral-nilpotent-quotients-examples` (KT-53).

Borromean link and3-component unlink both have pairwise linking0 but different μ123, so pairwise linking is incomplete; repeated-index μ is not generally link-homotopy invariant.

**Direct prerequisites:** `thm-stallings-integral-lower-central-isomorphism`, `lem-string-link-exterior-homology-and-meridian-maps`, `lem-magnus-commutator-degree-and-truncation`, `lem-milnor-basing-indeterminacy-and-self-crossing-scope`, `def-based-string-link-and-labeled-link-peripheral-system`, `def-lower-central-series-and-magnus-expansion-for-links`, `thm-string-link-nilpotent-peripheral-identifications`, `def-milnor-integer-and-residue-invariants`, `thm-milnor-invariants-isotopy-and-link-homotopy-scope`, `alg-truncated-milnor-invariants-from-based-diagram`, `thm-truncated-milnor-computation-terminates-and-is-correct`, `thm-truncated-milnor-invariants-from-based-diagram-procedure-properties`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** Explicit local derivation; complete classical source recovery required for the stated deep theorem.. Future content authoring must supply local proofs; no citation-only fallback.

### `ex-borromean-link-milnor-triple-invariant`

**Kind:** example. **Owner:** `milnor-invariants-and-link-peripheral-nilpotent-quotients-examples` (KT-53).

For the declared based Borromean string link, longitude3 has leading[x1,x2], hence μ123=1 and all pairwise linking numbers0 by Magnus expansion.

**Direct prerequisites:** `thm-stallings-integral-lower-central-isomorphism`, `lem-string-link-exterior-homology-and-meridian-maps`, `lem-magnus-commutator-degree-and-truncation`, `lem-milnor-basing-indeterminacy-and-self-crossing-scope`, `def-based-string-link-and-labeled-link-peripheral-system`, `def-lower-central-series-and-magnus-expansion-for-links`, `thm-string-link-nilpotent-peripheral-identifications`, `def-milnor-integer-and-residue-invariants`, `thm-milnor-invariants-isotopy-and-link-homotopy-scope`, `alg-truncated-milnor-invariants-from-based-diagram`, `thm-truncated-milnor-computation-terminates-and-is-correct`, `thm-truncated-milnor-invariants-from-based-diagram-procedure-properties`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** Explicit local derivation; complete classical source recovery required for the stated deep theorem.. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-twist-correction-removes-framing`

**Kind:** theorem. **Owner:** `ribbon-categories-and-reshetikhin-turaev-knot-invariants` (KT-33).

proves the specified writhe/twist normalization is an invariant of oriented unframed links when the color twist is invertible and the scalar is the exact one in the current supplier.

**Direct prerequisites:** `def-kauffman-bracket-smoothing-and-loop-value`, `thm-normalized-bracket-is-an-oriented-link-invariant`, `def-kauffman-regular-isotopy-and-dubrovnik-conventions`, `thm-a-ribbon-object-defines-a-unique-framed-tangle-evaluation-functor`, `thm-ribbon-evaluation-is-an-invariant-of-framed-colored-links`, `thm-writhe-normalized-ribbon-trace-is-an-unframed-link-invariant`, `def-colored-framed-knot-evaluation-from-ribbon-category`, `lem-quantum-sl2-ribbon-trace-matches-hecke-and-bracket`, `alg-ribbon-evaluation-from-colored-braid-word`, `def-axiom-of-choice`.

**Proof/definition route:** reuse the published
`thm-ribbon-evaluation-is-an-invariant-of-framed-colored-links` and
`thm-writhe-normalized-ribbon-trace-is-an-unframed-link-invariant` only after
checking their actual color and twist hypotheses. The new bridge is a finite
word-level calculation: verify the braid generator maps satisfy Yang–Baxter,
the trace is cyclic, and the two stabilization eigenvalues are cancelled by
the declared twist. The published draft modular-category and BMW items are
not suppliers. **Local prerequisite modules:** `lem-quantum-sl2-ribbon-trace-matches-hecke-and-bracket`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-3/ Johnson–Freyd RT notes Jan.15, 2016, pp.1–4; published framed ribbon-functor suppliers. Future content authoring must supply local proofs; no citation-only fallback.

### `cex-knot-kt-33-boundary-case`

**Kind:** counterexample. **Owner:** `ribbon-categories-and-reshetikhin-turaev-knot-invariants-examples` (KT-33).

A non-scalar twist on a decomposable object cannot be canceled by a single λ^−w; distinct twist eigenvalues give distinct stabilization factors on the summands.

**Direct prerequisites:** `def-colored-framed-knot-evaluation-from-ribbon-category`, `alg-ribbon-evaluation-from-colored-braid-word`, `thm-ribbon-evaluation-independent-of-colored-braid-representative`, `thm-twist-correction-removes-framing`, `lem-quantum-sl2-ribbon-trace-matches-hecke-and-bracket`, `thm-ribbon-evaluation-from-colored-braid-word-procedure-properties`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-3/ Johnson–Freyd RT notes Jan.15, 2016, pp.1–4; published framed ribbon-functor suppliers. Future content authoring must supply local proofs; no citation-only fallback.

### `ex-knot-kt-33-worked-cases`

**Kind:** example. **Owner:** `ribbon-categories-and-reshetikhin-turaev-knot-invariants-examples` (KT-33).

In finite-dimensional vector spaces with ordinary flip and trivial twist, a component colored by V evaluates to dim V; two components to(dim V)².

**Direct prerequisites:** `def-colored-framed-knot-evaluation-from-ribbon-category`, `alg-ribbon-evaluation-from-colored-braid-word`, `thm-ribbon-evaluation-independent-of-colored-braid-representative`, `thm-twist-correction-removes-framing`, `lem-quantum-sl2-ribbon-trace-matches-hecke-and-bracket`, `thm-ribbon-evaluation-from-colored-braid-word-procedure-properties`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-3/ Johnson–Freyd RT notes Jan.15, 2016, pp.1–4; published framed ribbon-functor suppliers. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-twisted-burau-determinant-for-colored-braid-closure-procedure-properties`

**Kind:** theorem. **Owner:** `twisted-alexander-polynomials-and-reidemeister-torsion` (KT-10).

For exactly the admissible encoded inputs of alg-twisted-burau-determinant-for-colored-braid-closure, execution terminates, rejects precisely the stated syntactic failures and returns the prescribed finite output. Any identification with a topological invariant, recognition completeness, or asymptotic complexity is only the separately proved domain result, not inferred from finite execution.

**Direct prerequisites:** `alg-twisted-burau-determinant-for-colored-braid-closure`, `thm-knot-wirtinger-presentation-correctness`, `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-maximal-abelian-cover-alexander-module`, `thm-abelian-cover-chain-model-computes-alexander-module`, `def-knot-twisted-chain-complex-and-reidemeister-torsion`, `def-knot-wada-quotient-for-deficiency-one-presentation`, `def-axiom-of-choice`.

**Proof/definition route:** Use the explicit finite loop/state/word or bounded search measure in the procedure; prove each branch preserves the stated output representation and all arithmetic is effective. Cite the domain correctness and completeness modules separately when claiming invariant/recognition meaning.

**Source boundary:** reader-2/ Conway 2016 v2 Lemma 2.6 and Theorem 3.15; reader-2/ Ranicki Notes on Reidemeister Torsion (2001-07-28 text). Future content authoring must supply local proofs; no citation-only fallback.

### `thm-upsilon-additivity-mirror-and-genus-bound`

**Kind:** theorem. **Owner:** `epsilon-and-upsilon-concordance-invariants` (KT-42).

Υ=−2ν_t for t∈[0,2] is piecewise linear, additive, mirror-antisymmetric, Υ(0)=0, Υ′(0+)=−τ and

**Direct prerequisites:** `def-admissible-pointed-heegaard-floer-data`, `def-grid-diagram-for-an-oriented-knot`, `thm-grid-homology-independent-of-grid-and-equals-knot-floer`, `lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing`, `def-knot-floer-filtration-and-tau`, `lem-tau-connected-sum-filtered-tensor-product`, `def-epsilon-from-filtered-knot-floer-complex`, `def-upsilon-function-from-filtered-complex`, `def-axiom-of-choice`.

**Proof/definition route:** Υ(t)|≤t g4 for 0≤t≤1. | Use the finite-cycle minimax filtration, normalized Maslov-zero generator, filtered tensor product and genus-shift maps. Prove finite truncation before reducing the Novikov/real-weight formulation to a finite computation; recover Kubota's grid comparison with its W factors separately.

**Source boundary:** reader-6/ Ozsváth–Stipsicz–Szabó arXiv:1407.1795v3; reader-6/ Kubota arXiv:2412.08146v1; reader-6/ Hom arXiv:1512.00383v3; Ozsváth–Stipsicz–Szabó arXiv:1407.1795v3 and Kubota arXiv:2412.08146v1; reader-6 complete readings.. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-epsilon-upsilon-are-concordance-homomorphism-data`

**Kind:** theorem. **Owner:** `epsilon-and-upsilon-concordance-invariants` (KT-42).

proves mirror, connected-sum and cobordism inequalities under the source's exact filtration conventions; it states precisely which of $\epsilon$ and $\Upsilon$ is a homomorphism and which is only a concordance invariant.

**Direct prerequisites:** `def-admissible-pointed-heegaard-floer-data`, `def-grid-diagram-for-an-oriented-knot`, `thm-grid-homology-independent-of-grid-and-equals-knot-floer`, `lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing`, `def-knot-floer-filtration-and-tau`, `lem-tau-connected-sum-filtered-tensor-product`, `def-epsilon-from-filtered-knot-floer-complex`, `def-upsilon-function-from-filtered-complex`, `lem-epsilon-stable-equivalence-and-not-a-homomorphism`, `thm-upsilon-additivity-mirror-and-genus-bound`, `def-axiom-of-choice`.

**Proof/definition route:** reduce filtered complexes by filtered
Gaussian elimination, prove stable equivalence preserves the maps defining
$\epsilon$, and use the tensor product for connected sums. For $\Upsilon$,
set F_t(x)=max{(1−t/2)i+(t/2)j : a basis term [x,i,j] occurs}, and ν_t=min{F_t(z): z is a Maslov-zero cycle representing the normalized HF∞ generator}; define Υ=−2ν_t for t∈[0,2]. After a proved finite truncation, this is a finite minimax over supports of cycles, not the minimum weight of individual basis generators. Prove piecewise linearity from that finite support problem; the
cobordism map gives the genus bound by controlling filtration shifts. Keep
the proof algebraic after the grid/Heegaard theory is established. Do not
assert $s=2\tau$; KT-38 has a concrete counterexample. **Local prerequisite modules:** `lem-epsilon-stable-equivalence-and-not-a-homomorphism`, `thm-upsilon-additivity-mirror-and-genus-bound`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-6/ Ozsváth–Stipsicz–Szabó arXiv:1407.1795v3; reader-6/ Kubota arXiv:2412.08146v1; reader-6/ Hom arXiv:1512.00383v3; Ozsváth–Stipsicz–Szabó arXiv:1407.1795v3 and Kubota arXiv:2412.08146v1; reader-6 complete readings.. Future content authoring must supply local proofs; no citation-only fallback.

### `cex-knot-kt-42-boundary-case`

**Kind:** counterexample. **Owner:** `epsilon-and-upsilon-concordance-invariants-examples` (KT-42).

A basis element of low F_t weight need not be a cycle representing the normalized HF∞ generator; individual basis minima cannot define Υ. Use the explicit nontrivial staircase boundary to verify the failure.

**Direct prerequisites:** `def-epsilon-from-filtered-knot-floer-complex`, `def-upsilon-function-from-filtered-complex`, `thm-epsilon-upsilon-are-concordance-homomorphism-data`, `lem-epsilon-stable-equivalence-and-not-a-homomorphism`, `thm-upsilon-additivity-mirror-and-genus-bound`, `thm-grid-upsilon-equals-oss-upsilon`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-6/ Ozsváth–Stipsicz–Szabó arXiv:1407.1795v3; reader-6/ Kubota arXiv:2412.08146v1; reader-6/ Hom arXiv:1512.00383v3; Ozsváth–Stipsicz–Szabó arXiv:1407.1795v3 and Kubota arXiv:2412.08146v1; reader-6 complete readings.. Future content authoring must supply local proofs; no citation-only fallback.

### `ex-knot-kt-42-worked-cases`

**Kind:** example. **Owner:** `epsilon-and-upsilon-concordance-invariants-examples` (KT-42).

Trefoil has ε=1 and Υ(t)=−t on[0,1], t−2 on[1,2], with the mirror negatives and a breakpoint at1.

**Direct prerequisites:** `def-epsilon-from-filtered-knot-floer-complex`, `def-upsilon-function-from-filtered-complex`, `thm-epsilon-upsilon-are-concordance-homomorphism-data`, `lem-epsilon-stable-equivalence-and-not-a-homomorphism`, `thm-upsilon-additivity-mirror-and-genus-bound`, `thm-grid-upsilon-equals-oss-upsilon`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-6/ Ozsváth–Stipsicz–Szabó arXiv:1407.1795v3; reader-6/ Kubota arXiv:2412.08146v1; reader-6/ Hom arXiv:1512.00383v3; Ozsváth–Stipsicz–Szabó arXiv:1407.1795v3 and Kubota arXiv:2412.08146v1; reader-6 complete readings.. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-valid-code-reconstructs-the-declared-link-diagram`

**Kind:** theorem. **Owner:** `planar-diagram-codes-and-knot-table-enumeration` (KT-47).

A valid oriented spherical rotation-system code with overpass data and distinguished outer face reconstructs the declared plane diagram up to orientation-preserving planar isotopy and relabeling. Without an outer face the natural equivalence is spherical, not automatically planar.

**Direct prerequisites:** `thm-knot-wirtinger-presentation-correctness`, `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `thm-linking-number-is-invariant-and-writhe-is-not`, `def-planar-diagram-gauss-and-dowker-codes`, `lem-planar-diagram-code-realizability-and-face-validation`, `alg-planar-code-validation-and-diagram-reconstruction`, `alg-enumerate-diagrams-up-to-crossing-bound`, `def-countable-choice`.

**Proof/definition route:** validate each crossing appears exactly
twice in the Gauss word, check the cyclic orders define a connected planar
rotation system, and use the face permutation to verify $V-E+F=2$. Reconstruct
by gluing crossing disks to edge bands and lifting over/under data to $S^3$.
Enumeration terminates because alphabet and word length are finite. It does
not decide equivalence between candidates; Reidemeister-move search is a
semidecision procedure. **Local prerequisite modules:** `lem-planar-diagram-code-realizability-and-face-validation`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-1/ Calegari 2025 §1.3; reader-4/ HLP 1999 triangulation source. Future content authoring must supply local proofs; no citation-only fallback.

### `alg-haken-jaco-tollefson-unknot-recognition`

**Kind:** algorithm. **Owner:** `normal-surface-unknot-recognition` (KT-49).

Input a finite n-crossing planar link code and mode Haken or JT. Reject invalid code; return not-a-knot for multiple components. Build a good marked exterior triangulation with t=O(n+1). Haken: enumerate all0≤v_i≤t2^(7t+2), check matching/quadrilateral conditions and fundamentalness by nonzero proper decompositions. JT: enumerate independent active-constraint sets and their primitive extreme-ray integer vectors; check admissibility. For each connected candidate require boundary nonempty,χ=1 and odd mod2 intersection against the marked original meridian. Return unknot and the vector on success; after complete finite exhaustion return not-unknot. Haken/JT essential-disk existence and bit bounds are separate theorems.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-planar-diagram-gauss-and-dowker-codes`, `thm-valid-code-reconstructs-the-declared-link-diagram`, `def-normal-surface-coordinate-box`, `def-countable-choice`.

**Proof/definition route:** add local modules for smooth-to-PL
approximation inside a tubular neighborhood; triangulation of the compact
exterior with marked meridian; normal-coordinate matching and finite bounds;
vertex-surface enumeration and the meridian-disk criterion for a solid-torus
exterior; the mod-2 meridian test; and certificate checking. HLP's complete
1999 paper supplies the algorithm and bounds but cites central normal-surface
theorems and sketches diagram triangulation; these modules remain local proof
obligations. No polynomial-time claim is made. **Local prerequisite modules:** `lem-smooth-to-pl-knot-exterior-ambient-isotopy`, `lem-good-linear-size-exterior-triangulation-from-diagram`, `lem-normal-coordinate-matching-equations-and-finite-bounds`, `lem-meridian-disk-criterion-for-unknot-exterior`, `thm-haken-finite-box-search-correctness`, `thm-jaco-tollefson-vertex-search-correctness`, `thm-unknot-recognition-has-np-certificate`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-4/ Hass–Lagarias–Pippenger JACM 46 (1999), Theorems 8.1 and 1.1, §§4–5; normal-surface inputs remain cited gaps. Future content authoring must supply local proofs; no citation-only fallback.

### `cex-knot-kt-47-boundary-case`

**Kind:** counterexample. **Owner:** `planar-diagram-codes-and-knot-table-enumeration-examples` (KT-47).

A code in which one crossing label occurs once cannot define a regular4-valent closed diagram and is rejected before any knot calculation.

**Direct prerequisites:** `def-planar-diagram-gauss-and-dowker-codes`, `alg-planar-code-validation-and-diagram-reconstruction`, `thm-valid-code-reconstructs-the-declared-link-diagram`, `alg-enumerate-diagrams-up-to-crossing-bound`, `lem-planar-diagram-code-realizability-and-face-validation`, `thm-planar-code-validation-and-diagram-reconstruction-procedure-properties`, `thm-enumerate-diagrams-up-to-crossing-bound-procedure-properties`, `def-countable-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-1/ Calegari 2025 §1.3; reader-4/ HLP 1999 triangulation source. Future content authoring must supply local proofs; no citation-only fallback.

### `ex-knot-kt-47-worked-cases`

**Kind:** example. **Owner:** `planar-diagram-codes-and-knot-table-enumeration-examples` (KT-47).

A based Gauss traversal of a trefoil records each of three crossing labels twice; show the explicit rotation/overpass reconstruction and chosen outer face.

**Direct prerequisites:** `def-planar-diagram-gauss-and-dowker-codes`, `alg-planar-code-validation-and-diagram-reconstruction`, `thm-valid-code-reconstructs-the-declared-link-diagram`, `alg-enumerate-diagrams-up-to-crossing-bound`, `lem-planar-diagram-code-realizability-and-face-validation`, `thm-planar-code-validation-and-diagram-reconstruction-procedure-properties`, `thm-enumerate-diagrams-up-to-crossing-bound-procedure-properties`, `def-countable-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-1/ Calegari 2025 §1.3; reader-4/ HLP 1999 triangulation source. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-meridian-disk-criterion-for-unknot-exterior`

**Kind:** lemma. **Owner:** `normal-surface-unknot-recognition` (KT-49).

A knot is unknotted iff E_K contains a proper disk with essential boundary; such a disk has longitude boundary with odd intersection against the original marked meridian.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-planar-diagram-gauss-and-dowker-codes`, `thm-valid-code-reconstructs-the-declared-link-diagram`, `def-normal-surface-coordinate-box`, `def-countable-choice`.

**Proof/definition route:** Use the primitive boundary kernel from exterior homology, cap by an annulus to K and apply the embedded disk unknot theorem/Schoenflies; conversely delete a neighborhood from a spanning disk. Prove disk connectedness and orientability before using χ=1.

**Source boundary:** reader-4/ Hass–Lagarias–Pippenger JACM 46 (1999), Theorems 8.1 and 1.1, §§4–5; normal-surface inputs remain cited gaps. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-normal-coordinate-matching-equations-and-finite-bounds`

**Kind:** lemma. **Owner:** `normal-surface-unknot-recognition` (KT-49).

Admissible 7t nonnegative coordinates satisfying face matching and one quadrilateral type per tetrahedron represent normal surfaces; primitive vertex coordinates are ≤2^(7t−1), fundamental ones ≤t 2^(7t+2).

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-planar-diagram-gauss-and-dowker-codes`, `thm-valid-code-reconstructs-the-declared-link-diagram`, `def-normal-surface-coordinate-box`, `def-countable-choice`.

**Proof/definition route:** Prove local normal disk reconstruction, rational cone structure, determinant/Hadamard bound on extremal rays and Hilbert-basis decomposition into bounded simplicial cones. These bounds do not by themselves prove an essential disk exists among fundamental/vertex surfaces.

**Source boundary:** reader-4/ Hass–Lagarias–Pippenger JACM 46 (1999), Theorems 8.1 and 1.1, §§4–5; normal-surface inputs remain cited gaps. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-smooth-to-pl-knot-exterior-ambient-isotopy`

**Kind:** lemma. **Owner:** `normal-surface-unknot-recognition` (KT-49).

Compact smooth knots admit ambient-isotopic polygonal representatives with compatible marked exteriors, and PL rounding induces the inverse tame-type correspondence.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-planar-diagram-gauss-and-dowker-codes`, `thm-valid-code-reconstructs-the-declared-link-diagram`, `def-normal-surface-coordinate-box`, `def-countable-choice`.

**Proof/definition route:** Choose a finite tubular normal-graph approximation, interpolate through embeddings and extend isotopy; round vertices in disjoint balls relative endpoints. Parametric approximation is needed for equivalence, not only existence of one approximation.

**Source boundary:** reader-4/ Hass–Lagarias–Pippenger JACM 46 (1999), Theorems 8.1 and 1.1, §§4–5; normal-surface inputs remain cited gaps. Future content authoring must supply local proofs; no citation-only fallback.

### `lem-good-linear-size-exterior-triangulation-from-diagram`

**Kind:** lemma. **Owner:** `normal-surface-unknot-recognition` (KT-49).

A finite n-crossing planar code gives a marked good exterior triangulation with O(n+1) tetrahedra and explicit meridian edge path.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-planar-diagram-gauss-and-dowker-codes`, `thm-valid-code-reconstructs-the-declared-link-diagram`, `def-normal-surface-coordinate-box`, `lem-smooth-to-pl-knot-exterior-ambient-isotopy`, `def-countable-choice`.

**Proof/definition route:** Build crossing boxes and connecting prisms, triangulate local blocks compatibly and remove a regular knot neighborhood; bound block counts and bit lengths. Treat zero crossings by a fixed solid-torus model.

**Source boundary:** reader-4/ Hass–Lagarias–Pippenger JACM 46 (1999), Theorems 8.1 and 1.1, §§4–5; normal-surface inputs remain cited gaps. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-exact-bracket-output-bit-growth-bound`

**Kind:** theorem. **Owner:** `terminating-computations-for-classical-knot-invariants` (KT-48).

A c-crossing nonempty diagram has at most 2^c states, bracket Laurent degree O(c), and exact integer coefficient bit length O(c); naive state enumeration has an explicit exponential bit upper bound.

**Direct prerequisites:** `def-quandle-and-knot-coloring`, `thm-quandle-colorings-are-reidemeister-invariant`, `def-kauffman-bracket-smoothing-and-loop-value`, `thm-normalized-bracket-is-an-oriented-link-invariant`, `def-planar-diagram-gauss-and-dowker-codes`, `thm-valid-code-reconstructs-the-declared-link-diagram`, `def-encoded-diagram-size-and-exact-output`, `def-axiom-of-choice`.

**Proof/definition route:** Each loop factor has at most 2^(c+O(1)) binomial mass and there are 2^c states; bound the degree interval and total coefficient l1 norm, then count loop tracing and integer additions/multiplications. State whether c or encoded code length is the input size.

**Source boundary:** reader-1/ Calegari 2025 §§1,4; reader-3/ Kauffman 2022 v2 state-sum convention. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-bracket-state-sum-exponential-bound`

**Kind:** theorem. **Owner:** `terminating-computations-for-classical-knot-invariants` (KT-48).

gives the $2^c$ state count and coefficient bit-growth bound for KT-29; it does not claim polynomial-time Jones evaluation.

**Direct prerequisites:** `def-quandle-and-knot-coloring`, `thm-quandle-colorings-are-reidemeister-invariant`, `def-kauffman-bracket-smoothing-and-loop-value`, `thm-normalized-bracket-is-an-oriented-link-invariant`, `def-planar-diagram-gauss-and-dowker-codes`, `thm-valid-code-reconstructs-the-declared-link-diagram`, `def-encoded-diagram-size-and-exact-output`, `thm-exact-bracket-output-bit-growth-bound`, `def-axiom-of-choice`.

**Proof/definition route:** count each finite loop; the coloring
system uses at most one row per crossing, Gaussian elimination has finitely
many pivots, and bracket coefficients sum over $2^c$ states with degree
bounded linearly by $c$. A move search visits a finite branching tree at each
depth and has no negative certificate. No complexity-class result for general
knot equivalence follows. **Local prerequisite modules:** `thm-exact-bracket-output-bit-growth-bound`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-1/ Calegari 2025 §§1,4; reader-3/ Kauffman 2022 v2 state-sum convention. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-haken-jaco-tollefson-unknot-recognition-procedure-properties`

**Kind:** theorem. **Owner:** `normal-surface-unknot-recognition` (KT-49).

For exactly the admissible encoded inputs of alg-haken-jaco-tollefson-unknot-recognition, execution terminates, rejects precisely the stated syntactic failures and returns the prescribed finite output. Any identification with a topological invariant, recognition completeness, or asymptotic complexity is only the separately proved domain result, not inferred from finite execution.

**Direct prerequisites:** `alg-haken-jaco-tollefson-unknot-recognition`, `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-planar-diagram-gauss-and-dowker-codes`, `thm-valid-code-reconstructs-the-declared-link-diagram`, `def-normal-surface-coordinate-box`, `def-countable-choice`.

**Proof/definition route:** Use the explicit finite loop/state/word or bounded search measure in the procedure; prove each branch preserves the stated output representation and all arithmetic is effective. Cite the domain correctness and completeness modules separately when claiming invariant/recognition meaning.

**Source boundary:** reader-4/ Hass–Lagarias–Pippenger JACM 46 (1999), Theorems 8.1 and 1.1, §§4–5; normal-surface inputs remain cited gaps. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-haken-normal-essential-disk-existence`

**Kind:** theorem. **Owner:** `normal-surface-unknot-recognition` (KT-49).

If a compact triangulated knot exterior contains an essential disk, it has a fundamental normal essential disk.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-planar-diagram-gauss-and-dowker-codes`, `thm-valid-code-reconstructs-the-declared-link-diagram`, `def-normal-surface-coordinate-box`, `lem-meridian-disk-criterion-for-unknot-exterior`, `def-countable-choice`.

**Proof/definition route:** Minimize weight among essential disks, normalize rel essential boundary, analyze normal sums and remove sphere/boundary-parallel summands without losing essentiality. HLP cites Haken/Schubert rather than proves this.

**Source boundary:** reader-4/ Hass–Lagarias–Pippenger JACM 46 (1999), Theorems 8.1 and 1.1, §§4–5; normal-surface inputs remain cited gaps. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-haken-finite-box-search-correctness`

**Kind:** theorem. **Owner:** `normal-surface-unknot-recognition` (KT-49).

Haken's bounded box search returns unknot iff an essential normal disk exists, using fundamentalness for connectedness.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-planar-diagram-gauss-and-dowker-codes`, `thm-valid-code-reconstructs-the-declared-link-diagram`, `def-normal-surface-coordinate-box`, `lem-normal-coordinate-matching-equations-and-finite-bounds`, `lem-meridian-disk-criterion-for-unknot-exterior`, `thm-haken-normal-essential-disk-existence`, `def-countable-choice`.

**Proof/definition route:** Combine the separate least-weight fundamental-essential-disk theorem with coordinate bounds. Enumerate all vectors, verify matching/quadrilaterals, test proper nonzero decompositions, then χ=1, boundary nonempty and mod2 meridian intersection. Exhaustion gives the negative output.

**Source boundary:** reader-4/ Hass–Lagarias–Pippenger JACM 46 (1999), Theorems 8.1 and 1.1, §§4–5; normal-surface inputs remain cited gaps. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-jaco-tollefson-normal-essential-disk-vertex-existence`

**Kind:** theorem. **Owner:** `normal-surface-unknot-recognition` (KT-49).

An essential disk in a compact triangulated3-manifold with nonempty boundary has an essential normal vertex disk in the exact JT theorem scope.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-planar-diagram-gauss-and-dowker-codes`, `thm-valid-code-reconstructs-the-declared-link-diagram`, `def-normal-surface-coordinate-box`, `def-countable-choice`.

**Proof/definition route:** Prove the least-weight disk face argument and exchange-annulus analysis; bound ray solutions after existence. Recover complete JT Corollary6.4 proof before acceptance.

**Source boundary:** reader-4/ Hass–Lagarias–Pippenger JACM 46 (1999), Theorems 8.1 and 1.1, §§4–5; normal-surface inputs remain cited gaps. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-jaco-tollefson-vertex-search-correctness`

**Kind:** theorem. **Owner:** `normal-surface-unknot-recognition` (KT-49).

Primitive extreme-ray enumeration is complete for unknotting under the separate normal-essential-disk vertex theorem, and has 2^O(n) Turing time/O(n²log n) space.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-planar-diagram-gauss-and-dowker-codes`, `thm-valid-code-reconstructs-the-declared-link-diagram`, `def-normal-surface-coordinate-box`, `lem-normal-coordinate-matching-equations-and-finite-bounds`, `lem-meridian-disk-criterion-for-unknot-exterior`, `thm-jaco-tollefson-normal-essential-disk-vertex-existence`, `def-countable-choice`.

**Proof/definition route:** Enumerate independent active-constraint sets, compute primitive ray integer vectors by determinants/gcd, and verify admissibility/disk/essentiality. Primitive vertex solutions are fundamental, hence connected; bound ray counts, bit sizes and sequential workspace as in HLP.

**Source boundary:** reader-4/ Hass–Lagarias–Pippenger JACM 46 (1999), Theorems 8.1 and 1.1, §§4–5; normal-surface inputs remain cited gaps. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-knot-linking-number-and-fox-coloring-finite-complexity`

**Kind:** theorem. **Owner:** `terminating-computations-for-classical-knot-invariants` (KT-48).

proves the crossing scan and finite-field Gaussian-elimination procedures terminate and gives operation counts in terms of crossings and field size.

**Direct prerequisites:** `def-quandle-and-knot-coloring`, `thm-quandle-colorings-are-reidemeister-invariant`, `def-kauffman-bracket-smoothing-and-loop-value`, `thm-normalized-bracket-is-an-oriented-link-invariant`, `def-planar-diagram-gauss-and-dowker-codes`, `thm-valid-code-reconstructs-the-declared-link-diagram`, `def-encoded-diagram-size-and-exact-output`, `thm-exact-bracket-output-bit-growth-bound`, `def-axiom-of-choice`.

**Proof/definition route:** count each finite loop; the coloring
system uses at most one row per crossing, Gaussian elimination has finitely
many pivots, and bracket coefficients sum over $2^c$ states with degree
bounded linearly by $c$. A move search visits a finite branching tree at each
depth and has no negative certificate. No complexity-class result for general
knot equivalence follows. **Local prerequisite modules:** `thm-exact-bracket-output-bit-growth-bound`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-1/ Calegari 2025 §§1,4; reader-3/ Kauffman 2022 v2 state-sum convention. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-normal-surface-unknot-algorithm-terminates-and-is-correct`

**Kind:** theorem. **Owner:** `normal-surface-unknot-recognition` (KT-49).

proves the equivalence and source bounds: Haken search takes $2^{O(n^2)}$ time and $O(n^2\log n)$ space; Jaco–Tollefson vertex-surface search takes $2^{O(n)}$ time with the stated space bound.

**Direct prerequisites:** `alg-haken-jaco-tollefson-unknot-recognition`, `thm-haken-finite-box-search-correctness`, `thm-jaco-tollefson-vertex-search-correctness`, `def-countable-choice`.

**Proof/definition route:** add local modules for smooth-to-PL
approximation inside a tubular neighborhood; triangulation of the compact
exterior with marked meridian; normal-coordinate matching and finite bounds;
vertex-surface enumeration and the meridian-disk criterion for a solid-torus
exterior; the mod-2 meridian test; and certificate checking. HLP's complete
1999 paper supplies the algorithm and bounds but cites central normal-surface
theorems and sketches diagram triangulation; these modules remain local proof
obligations. No polynomial-time claim is made. **Local prerequisite modules:** `lem-smooth-to-pl-knot-exterior-ambient-isotopy`, `lem-good-linear-size-exterior-triangulation-from-diagram`, `lem-normal-coordinate-matching-equations-and-finite-bounds`, `lem-meridian-disk-criterion-for-unknot-exterior`, `thm-haken-finite-box-search-correctness`, `thm-jaco-tollefson-vertex-search-correctness`, `thm-unknot-recognition-has-np-certificate`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-4/ Hass–Lagarias–Pippenger JACM 46 (1999), Theorems 8.1 and 1.1, §§4–5; normal-surface inputs remain cited gaps. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-reidemeister-enumeration-is-only-a-semidecision`

**Kind:** theorem. **Owner:** `terminating-computations-for-classical-knot-invariants` (KT-48).

proves breadth-first enumeration halts with “equivalent” when a move sequence exists but may not halt for inequivalent diagrams.

**Direct prerequisites:** `def-quandle-and-knot-coloring`, `thm-quandle-colorings-are-reidemeister-invariant`, `def-kauffman-bracket-smoothing-and-loop-value`, `thm-normalized-bracket-is-an-oriented-link-invariant`, `def-planar-diagram-gauss-and-dowker-codes`, `thm-valid-code-reconstructs-the-declared-link-diagram`, `def-encoded-diagram-size-and-exact-output`, `thm-exact-bracket-output-bit-growth-bound`, `def-axiom-of-choice`.

**Proof/definition route:** count each finite loop; the coloring
system uses at most one row per crossing, Gaussian elimination has finitely
many pivots, and bracket coefficients sum over $2^c$ states with degree
bounded linearly by $c$. A move search visits a finite branching tree at each
depth and has no negative certificate. No complexity-class result for general
knot equivalence follows. **Local prerequisite modules:** `thm-exact-bracket-output-bit-growth-bound`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-1/ Calegari 2025 §§1,4; reader-3/ Kauffman 2022 v2 state-sum convention. Future content authoring must supply local proofs; no citation-only fallback.

### `cex-knot-kt-48-boundary-case`

**Kind:** counterexample. **Owner:** `terminating-computations-for-classical-knot-invariants-examples` (KT-48).

A finite unsuccessful Reidemeister search between unknot and trefoil is not its own negative certificate; their group/coloring difference provides the actual independent distinction.

**Direct prerequisites:** `def-encoded-diagram-size-and-exact-output`, `thm-knot-linking-number-and-fox-coloring-finite-complexity`, `thm-bracket-state-sum-exponential-bound`, `thm-reidemeister-enumeration-is-only-a-semidecision`, `thm-exact-bracket-output-bit-growth-bound`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-1/ Calegari 2025 §§1,4; reader-3/ Kauffman 2022 v2 state-sum convention. Future content authoring must supply local proofs; no citation-only fallback.

### `ex-knot-kt-48-worked-cases`

**Kind:** example. **Owner:** `terminating-computations-for-classical-knot-invariants-examples` (KT-48).

A c=8 bracket state sum visits256 smoothing states; trefoilF3 coloring Gaussian elimination yields9 assignments.

**Direct prerequisites:** `def-encoded-diagram-size-and-exact-output`, `thm-knot-linking-number-and-fox-coloring-finite-complexity`, `thm-bracket-state-sum-exponential-bound`, `thm-reidemeister-enumeration-is-only-a-semidecision`, `thm-exact-bracket-output-bit-growth-bound`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-1/ Calegari 2025 §§1,4; reader-3/ Kauffman 2022 v2 state-sum convention. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-unknot-recognition-has-np-certificate`

**Kind:** theorem. **Owner:** `normal-surface-unknot-recognition` (KT-49).

An unknot diagram has a polynomial-bit certificate consisting of a primitive normal vertex disk and enough active constraints/boundary data to verify it in polynomial time.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-planar-diagram-gauss-and-dowker-codes`, `thm-valid-code-reconstructs-the-declared-link-diagram`, `def-normal-surface-coordinate-box`, `thm-jaco-tollefson-vertex-search-correctness`, `def-countable-choice`.

**Proof/definition route:** Verify the ray constraint rank, primitive gcd, matching/quadrilateral conditions, χ=1, boundary nonempty and mod2 meridian test by compressed arithmetic. Exponential enumeration is not the verifier; no full expansion into exponentially many disks is permitted.

**Source boundary:** reader-4/ Hass–Lagarias–Pippenger JACM 46 (1999), Theorems 8.1 and 1.1, §§4–5; normal-surface inputs remain cited gaps. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-smooth-knot-has-compatible-pl-exterior-model`

**Kind:** theorem. **Owner:** `normal-surface-unknot-recognition` (KT-49).

proves a finite smooth knot diagram admits an ambient-isotopic PL knot and good triangulation of its compact exterior with meridian marked.

**Direct prerequisites:** `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-planar-diagram-gauss-and-dowker-codes`, `thm-valid-code-reconstructs-the-declared-link-diagram`, `def-normal-surface-coordinate-box`, `thm-unknot-recognition-has-np-certificate`, `lem-smooth-to-pl-knot-exterior-ambient-isotopy`, `lem-good-linear-size-exterior-triangulation-from-diagram`, `lem-normal-coordinate-matching-equations-and-finite-bounds`, `lem-meridian-disk-criterion-for-unknot-exterior`, `thm-haken-finite-box-search-correctness`, `thm-jaco-tollefson-vertex-search-correctness`, `alg-haken-jaco-tollefson-unknot-recognition`, `def-countable-choice`.

**Proof/definition route:** add local modules for smooth-to-PL
approximation inside a tubular neighborhood; triangulation of the compact
exterior with marked meridian; normal-coordinate matching and finite bounds;
vertex-surface enumeration and the meridian-disk criterion for a solid-torus
exterior; the mod-2 meridian test; and certificate checking. HLP's complete
1999 paper supplies the algorithm and bounds but cites central normal-surface
theorems and sketches diagram triangulation; these modules remain local proof
obligations. No polynomial-time claim is made. **Local prerequisite modules:** `lem-smooth-to-pl-knot-exterior-ambient-isotopy`, `lem-good-linear-size-exterior-triangulation-from-diagram`, `lem-normal-coordinate-matching-equations-and-finite-bounds`, `lem-meridian-disk-criterion-for-unknot-exterior`, `thm-haken-finite-box-search-correctness`, `thm-jaco-tollefson-vertex-search-correctness`, `thm-unknot-recognition-has-np-certificate`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-4/ Hass–Lagarias–Pippenger JACM 46 (1999), Theorems 8.1 and 1.1, §§4–5; normal-surface inputs remain cited gaps. Future content authoring must supply local proofs; no citation-only fallback.

### `cex-knot-kt-49-boundary-case`

**Kind:** counterexample. **Owner:** `normal-surface-unknot-recognition-examples` (KT-49).

A boundary-parallel disk candidate in a trefoil exterior has trivial boundary class and fails the mod2 test; this rejects that surface only, not the knot without completeness and exhaustive search.

**Direct prerequisites:** `thm-smooth-knot-has-compatible-pl-exterior-model`, `def-normal-surface-coordinate-box`, `alg-haken-jaco-tollefson-unknot-recognition`, `thm-normal-surface-unknot-algorithm-terminates-and-is-correct`, `thm-unknot-recognition-has-np-certificate`, `lem-smooth-to-pl-knot-exterior-ambient-isotopy`, `lem-good-linear-size-exterior-triangulation-from-diagram`, `lem-normal-coordinate-matching-equations-and-finite-bounds`, `lem-meridian-disk-criterion-for-unknot-exterior`, `thm-haken-finite-box-search-correctness`, `thm-jaco-tollefson-vertex-search-correctness`, `thm-haken-normal-essential-disk-existence`, `thm-jaco-tollefson-normal-essential-disk-vertex-existence`, `thm-haken-jaco-tollefson-unknot-recognition-procedure-properties`, `def-countable-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-4/ Hass–Lagarias–Pippenger JACM 46 (1999), Theorems 8.1 and 1.1, §§4–5; normal-surface inputs remain cited gaps. Future content authoring must supply local proofs; no citation-only fallback.

### `ex-knot-kt-49-worked-cases`

**Kind:** example. **Owner:** `normal-surface-unknot-recognition-examples` (KT-49).

A fixed zero-crossing unknot exterior triangulation contains an essential normal disk; verify matching/quadrilateral, connectedness, χ=1 and odd meridian-intersection data.

**Direct prerequisites:** `thm-smooth-knot-has-compatible-pl-exterior-model`, `def-normal-surface-coordinate-box`, `alg-haken-jaco-tollefson-unknot-recognition`, `thm-normal-surface-unknot-algorithm-terminates-and-is-correct`, `thm-unknot-recognition-has-np-certificate`, `lem-smooth-to-pl-knot-exterior-ambient-isotopy`, `lem-good-linear-size-exterior-triangulation-from-diagram`, `lem-normal-coordinate-matching-equations-and-finite-bounds`, `lem-meridian-disk-criterion-for-unknot-exterior`, `thm-haken-finite-box-search-correctness`, `thm-jaco-tollefson-vertex-search-correctness`, `thm-haken-normal-essential-disk-existence`, `thm-jaco-tollefson-normal-essential-disk-vertex-existence`, `thm-haken-jaco-tollefson-unknot-recognition-procedure-properties`, `def-countable-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-4/ Hass–Lagarias–Pippenger JACM 46 (1999), Theorems 8.1 and 1.1, §§4–5; normal-surface inputs remain cited gaps. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-vassiliev-invariant-induces-weight-system`

**Kind:** theorem. **Owner:** `vassiliev-invariants-and-chord-diagrams` (KT-34).

proves a type-$n$ invariant induces a linear functional on degree-$n$ chord diagrams modulo 4T (and 1T in the unframed normalization).

**Direct prerequisites:** `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `thm-linking-number-is-invariant-and-writhe-is-not`, `def-singular-knot-and-vassiliev-derivative`, `def-framed-chord-diagram-and-four-term-relations`, `lem-vassiliev-4t-from-singular-reidemeister-move`, `lem-vassiliev-framing-one-term-relation`, `def-countable-choice`.

**Proof/definition route:** resolve singular crossings in disjoint
balls and show the alternating difference is unchanged by singular
Reidemeister moves. The local four-term relation follows from the two ways to
resolve the common three-strand singularity; prove each coefficient sign from
the fixed crossing convention. The 1T relation is exactly the framed/unframed
curl correction. The Bar–Natan–Stoimenow source's framing distinction is
preserved: framed weight systems satisfy 4T, unframed ones also satisfy 1T.
**Local prerequisite modules:** `lem-vassiliev-4t-from-singular-reidemeister-move`, `lem-vassiliev-framing-one-term-relation`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-3/ Bar–Natan–Stoimenow arXiv:q-alg/9702009v1 §1. Future content authoring must supply local proofs; no citation-only fallback.

### `cex-knot-kt-34-boundary-case`

**Kind:** counterexample. **Owner:** `vassiliev-invariants-and-chord-diagrams-examples` (KT-34).

Diagram writhe changes under unframed R1, so it is not an unframed finite-type invariant despite its simple crossing derivative.

**Direct prerequisites:** `def-singular-knot-and-vassiliev-derivative`, `def-framed-chord-diagram-and-four-term-relations`, `thm-vassiliev-invariant-induces-weight-system`, `lem-vassiliev-4t-from-singular-reidemeister-move`, `lem-vassiliev-framing-one-term-relation`, `def-countable-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-3/ Bar–Natan–Stoimenow arXiv:q-alg/9702009v1 §1. Future content authoring must supply local proofs; no citation-only fallback.

### `ex-knot-kt-34-worked-cases`

**Kind:** example. **Owner:** `vassiliev-invariants-and-chord-diagrams-examples` (KT-34).

For a two-component oriented link, the singular derivative at one mixed crossing of lk is±1, and a second derivative is0; on knots the restriction is0.

**Direct prerequisites:** `def-singular-knot-and-vassiliev-derivative`, `def-framed-chord-diagram-and-four-term-relations`, `thm-vassiliev-invariant-induces-weight-system`, `lem-vassiliev-4t-from-singular-reidemeister-move`, `lem-vassiliev-framing-one-term-relation`, `def-countable-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-3/ Bar–Natan–Stoimenow arXiv:q-alg/9702009v1 §1. Future content authoring must supply local proofs; no citation-only fallback.

### `thm-wada-deleted-minor-equals-twisted-reidemeister-torsion`

**Kind:** theorem. **Owner:** `twisted-alexander-polynomials-and-reidemeister-torsion` (KT-10).

In an acyclic based length-two exterior complex, a deleted generator block with invertible d1 block gives τ=det(d2_deleted)/det(d1_block) in the declared torsion convention, modulo determinant-image/deck units.

**Direct prerequisites:** `thm-knot-wirtinger-presentation-correctness`, `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-maximal-abelian-cover-alexander-module`, `thm-abelian-cover-chain-model-computes-alexander-module`, `def-knot-twisted-chain-complex-and-reidemeister-torsion`, `def-knot-wada-quotient-for-deficiency-one-presentation`, `lem-twisted-fox-jacobian-is-cellular-boundary`, `lem-twisted-acyclicity-from-torsion-module`, `def-axiom-of-choice`.

**Proof/definition route:** Split off the chosen invertible block, form boundary and lift bases in the torsion definition and cancel determinants. Column independence follows the same based complex; invariance under elementary simple expansions/collapses is proved with their torsion units, not asserted for arbitrary presentation complexes.

**Source boundary:** reader-2/ Conway 2016 v2 Lemma 2.6 and Theorem 3.15; reader-2/ Ranicki Notes on Reidemeister Torsion (2001-07-28 text). Future content authoring must supply local proofs; no citation-only fallback.

### `thm-twisted-burau-axis-torsion-product`

**Kind:** theorem. **Owner:** `twisted-alexander-polynomials-and-reidemeister-torsion` (KT-10).

For a colored braid representation extending across closure and nonzero admissible denominator, the axis-decomposition torsion product yields Conway's twisted Burau determinant; nonacyclic cases follow the separately declared zero convention.

**Direct prerequisites:** `thm-knot-wirtinger-presentation-correctness`, `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-maximal-abelian-cover-alexander-module`, `thm-abelian-cover-chain-model-computes-alexander-module`, `def-knot-twisted-chain-complex-and-reidemeister-torsion`, `def-knot-wada-quotient-for-deficiency-one-presentation`, `thm-wada-deleted-minor-equals-twisted-reidemeister-torsion`, `def-axiom-of-choice`.

**Proof/definition route:** Build the axis exterior group, Fox-differentiate its moving-slice action, identify colored Burau blocks, and derive the exact short-exact-complex torsion product with basis signs. Carry strand-variable identifications and extension relators explicitly.

**Source boundary:** reader-2/ Conway 2016 v2 Lemma 2.6 and Theorem 3.15; reader-2/ Ranicki Notes on Reidemeister Torsion (2001-07-28 text). Future content authoring must supply local proofs; no citation-only fallback.

### `lem-knot-twisted-exterior-acyclicity-from-torsion-module`

**Kind:** lemma. **Owner:** `twisted-alexander-polynomials-and-reidemeister-torsion` (KT-10).

proves the degree-one torsion-module hypothesis implies acyclicity of the stated twisted complex, under the finite 2-complex, vanishing-top-homology and Euler-characteristic assumptions.

**Direct prerequisites:** `thm-knot-wirtinger-presentation-correctness`, `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-maximal-abelian-cover-alexander-module`, `thm-abelian-cover-chain-model-computes-alexander-module`, `def-knot-twisted-chain-complex-and-reidemeister-torsion`, `def-knot-wada-quotient-for-deficiency-one-presentation`, `lem-twisted-fox-jacobian-is-cellular-boundary`, `lem-twisted-acyclicity-from-torsion-module`, `thm-wada-deleted-minor-equals-twisted-reidemeister-torsion`, `thm-twisted-burau-axis-torsion-product`, `alg-twisted-burau-determinant-for-colored-braid-closure`, `def-axiom-of-choice`.

**Proof/definition route:** start with the full abelianization chain complex of the actual link exterior, not the one-variable total-linking cover; specialize only after stating the representation and deck map. Derive Fox's product and inverse identities, identify the evaluated Fox matrix with the cellular differential, prove the denominator is the omitted $d_1$ minor, and track each basis change under Tietze moves. Prove the acyclicity implication from the exact sequence and Euler characteristic, then prove the torsion product formula for the braid-axis decomposition and its compatibility with the colored Burau action. Conway, *Burau Maps and Twisted Alexander Polynomials* arXiv:1510.06678v2, Lemma 2.6 and Theorem 3.15 supplies the precise colored-braid route but cites Wada/Kitano for the quotient-to-torsion theorem; Ranicki's 2001 torsion notes define the ordinary based torsion but do not close this twisted proof. Do not claim a noncommutative determinant: that extension needs a separately proved Ore localization and Dieudonné/Whitehead torsion module. **Local prerequisite modules:** `lem-twisted-fox-jacobian-is-cellular-boundary`, `lem-twisted-acyclicity-from-torsion-module`, `thm-wada-deleted-minor-equals-twisted-reidemeister-torsion`, `thm-twisted-burau-axis-torsion-product`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-2/ Conway 2016 v2 Lemma 2.6 and Theorem 3.15; reader-2/ Ranicki Notes on Reidemeister Torsion (2001-07-28 text). Future content authoring must supply local proofs; no citation-only fallback.

### `thm-knot-wada-quotient-equals-reidemeister-torsion`

**Kind:** theorem. **Owner:** `twisted-alexander-polynomials-and-reidemeister-torsion` (KT-10).

proves the Fox Jacobian is the twisted cellular boundary matrix and the deleted-minor quotient equals the torsion up to exactly the declared units; it proves invariance under the permitted presentation and column changes rather than importing Wada–Kitano.

**Direct prerequisites:** `thm-knot-wirtinger-presentation-correctness`, `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-maximal-abelian-cover-alexander-module`, `thm-abelian-cover-chain-model-computes-alexander-module`, `def-knot-twisted-chain-complex-and-reidemeister-torsion`, `def-knot-wada-quotient-for-deficiency-one-presentation`, `lem-twisted-fox-jacobian-is-cellular-boundary`, `lem-twisted-acyclicity-from-torsion-module`, `thm-wada-deleted-minor-equals-twisted-reidemeister-torsion`, `thm-twisted-burau-axis-torsion-product`, `alg-twisted-burau-determinant-for-colored-braid-closure`, `def-axiom-of-choice`.

**Proof/definition route:** start with the full abelianization chain complex of the actual link exterior, not the one-variable total-linking cover; specialize only after stating the representation and deck map. Derive Fox's product and inverse identities, identify the evaluated Fox matrix with the cellular differential, prove the denominator is the omitted $d_1$ minor, and track each basis change under Tietze moves. Prove the acyclicity implication from the exact sequence and Euler characteristic, then prove the torsion product formula for the braid-axis decomposition and its compatibility with the colored Burau action. Conway, *Burau Maps and Twisted Alexander Polynomials* arXiv:1510.06678v2, Lemma 2.6 and Theorem 3.15 supplies the precise colored-braid route but cites Wada/Kitano for the quotient-to-torsion theorem; Ranicki's 2001 torsion notes define the ordinary based torsion but do not close this twisted proof. Do not claim a noncommutative determinant: that extension needs a separately proved Ore localization and Dieudonné/Whitehead torsion module. **Local prerequisite modules:** `lem-twisted-fox-jacobian-is-cellular-boundary`, `lem-twisted-acyclicity-from-torsion-module`, `thm-wada-deleted-minor-equals-twisted-reidemeister-torsion`, `thm-twisted-burau-axis-torsion-product`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-2/ Conway 2016 v2 Lemma 2.6 and Theorem 3.15; reader-2/ Ranicki Notes on Reidemeister Torsion (2001-07-28 text). Future content authoring must supply local proofs; no citation-only fallback.

### `thm-twisted-burau-determinant-formula-under-extension-hypotheses`

**Kind:** theorem. **Owner:** `twisted-alexander-polynomials-and-reidemeister-torsion` (KT-10).

For an encoded colored braid representation extending over the closure, an acyclic twisted exterior complex and admissible nonzero denominator, the axis-decomposition determinant equals the declared torsion up to determinant-image/deck units. Nonacyclic input has declared zero torsion; a zero denominator forbids that quotient column.

**Direct prerequisites:** `thm-knot-wirtinger-presentation-correctness`, `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `def-maximal-abelian-cover-alexander-module`, `thm-abelian-cover-chain-model-computes-alexander-module`, `def-knot-twisted-chain-complex-and-reidemeister-torsion`, `def-knot-wada-quotient-for-deficiency-one-presentation`, `lem-twisted-fox-jacobian-is-cellular-boundary`, `lem-twisted-acyclicity-from-torsion-module`, `thm-wada-deleted-minor-equals-twisted-reidemeister-torsion`, `thm-twisted-burau-axis-torsion-product`, `alg-twisted-burau-determinant-for-colored-braid-closure`, `def-axiom-of-choice`.

**Proof/definition route:** start with the full abelianization chain complex of the actual link exterior, not the one-variable total-linking cover; specialize only after stating the representation and deck map. Derive Fox's product and inverse identities, identify the evaluated Fox matrix with the cellular differential, prove the denominator is the omitted $d_1$ minor, and track each basis change under Tietze moves. Prove the acyclicity implication from the exact sequence and Euler characteristic, then prove the torsion product formula for the braid-axis decomposition and its compatibility with the colored Burau action. Conway, *Burau Maps and Twisted Alexander Polynomials* arXiv:1510.06678v2, Lemma 2.6 and Theorem 3.15 supplies the precise colored-braid route but cites Wada/Kitano for the quotient-to-torsion theorem; Ranicki's 2001 torsion notes define the ordinary based torsion but do not close this twisted proof. Do not claim a noncommutative determinant: that extension needs a separately proved Ore localization and Dieudonné/Whitehead torsion module. **Local prerequisite modules:** `lem-twisted-fox-jacobian-is-cellular-boundary`, `lem-twisted-acyclicity-from-torsion-module`, `thm-wada-deleted-minor-equals-twisted-reidemeister-torsion`, `thm-twisted-burau-axis-torsion-product`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**Source boundary:** reader-2/ Conway 2016 v2 Lemma 2.6 and Theorem 3.15; reader-2/ Ranicki Notes on Reidemeister Torsion (2001-07-28 text). Future content authoring must supply local proofs; no citation-only fallback.

### `cex-knot-kt-10-boundary-case`

**Kind:** counterexample. **Owner:** `twisted-alexander-polynomials-and-reidemeister-torsion-examples` (KT-10).

A generator with ψ(x)=1 and ρ(x)=I has denominator det(ρ(x)ψ(x)−I)=0; that column is inadmissible even if another column is valid.

**Direct prerequisites:** `def-knot-twisted-chain-complex-and-reidemeister-torsion`, `def-knot-wada-quotient-for-deficiency-one-presentation`, `lem-knot-twisted-exterior-acyclicity-from-torsion-module`, `thm-knot-wada-quotient-equals-reidemeister-torsion`, `alg-twisted-burau-determinant-for-colored-braid-closure`, `thm-twisted-burau-determinant-formula-under-extension-hypotheses`, `lem-twisted-fox-jacobian-is-cellular-boundary`, `lem-twisted-acyclicity-from-torsion-module`, `thm-wada-deleted-minor-equals-twisted-reidemeister-torsion`, `thm-twisted-burau-axis-torsion-product`, `thm-twisted-burau-determinant-for-colored-braid-closure-procedure-properties`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-2/ Conway 2016 v2 Lemma 2.6 and Theorem 3.15; reader-2/ Ranicki Notes on Reidemeister Torsion (2001-07-28 text). Future content authoring must supply local proofs; no citation-only fallback.

### `ex-knot-kt-10-worked-cases`

**Kind:** example. **Owner:** `twisted-alexander-polynomials-and-reidemeister-torsion-examples` (KT-10).

For the trivial one-dimensional representation, the trefoil cellular torsion convention gives τ=(t²−t+1)/(1−t); reduced Burau σ1³ has scalar −t³ and yields the same polynomial after normalization.

**Direct prerequisites:** `def-knot-twisted-chain-complex-and-reidemeister-torsion`, `def-knot-wada-quotient-for-deficiency-one-presentation`, `lem-knot-twisted-exterior-acyclicity-from-torsion-module`, `thm-knot-wada-quotient-equals-reidemeister-torsion`, `alg-twisted-burau-determinant-for-colored-braid-closure`, `thm-twisted-burau-determinant-formula-under-extension-hypotheses`, `lem-twisted-fox-jacobian-is-cellular-boundary`, `lem-twisted-acyclicity-from-torsion-module`, `thm-wada-deleted-minor-equals-twisted-reidemeister-torsion`, `thm-twisted-burau-axis-torsion-product`, `thm-twisted-burau-determinant-for-colored-braid-closure-procedure-properties`, `def-axiom-of-choice`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-2/ Conway 2016 v2 Lemma 2.6 and Theorem 3.15; reader-2/ Ranicki Notes on Reidemeister Torsion (2001-07-28 text). Future content authoring must supply local proofs; no citation-only fallback.

### `thm-wirtinger-code-scan-terminates`

**Kind:** theorem. **Owner:** `wirtinger-presentations-and-knot-groups` (KT-01).

For a finite valid code the presentation scan terminates with exactly one meridian per under-arc and one relation per crossing; zero crossings return ⟨m: ⟩.

**Direct prerequisites:** `def-oriented-link-in-s-three-and-ambient-isotopy`, `def-regular-oriented-link-diagram`, `thm-seifert-van-kampen`, `def-knot-planar-code`, `alg-knot-wirtinger-presentation-from-code`.

**Proof/definition route:** Count finite traversals and write the crossing-free branch.

**Source boundary:** reader-1/ Calegari 2025 §§4.1–4.3 (source row calegari-2025); current oriented-link/Reidemeister suppliers. Future content authoring must supply local proofs; no citation-only fallback.

### `cex-knot-kt-01-boundary-case`

**Kind:** counterexample. **Owner:** `wirtinger-presentations-and-knot-groups-examples` (KT-01).

Equal abelianization does not classify knots: unknot and trefoil both abelianize to Z but trefoil has the displayed nonabelian quotient.

**Direct prerequisites:** `def-knot-planar-code`, `alg-knot-wirtinger-presentation-from-code`, `thm-knot-wirtinger-presentation-correctness`, `lem-wirtinger-crossing-ball-cover`, `lem-wirtinger-local-meridian-conjugacy`, `thm-wirtinger-code-scan-terminates`, `thm-knot-wirtinger-presentation-from-code-procedure-properties`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-1/ Calegari 2025 §§4.1–4.3 (source row calegari-2025); current oriented-link/Reidemeister suppliers. Future content authoring must supply local proofs; no citation-only fallback.

### `ex-knot-kt-01-worked-cases`

**Kind:** example. **Owner:** `wirtinger-presentations-and-knot-groups-examples` (KT-01).

Unknot group is Z; trefoil group is ⟨a,b:aba=bab⟩ and has the nonabelian S3 quotient a↦(12),b↦(23); compute the figure-eight Wirtinger relations from its four-crossing code.

**Direct prerequisites:** `def-knot-planar-code`, `alg-knot-wirtinger-presentation-from-code`, `thm-knot-wirtinger-presentation-correctness`, `lem-wirtinger-crossing-ball-cover`, `lem-wirtinger-local-meridian-conjugacy`, `thm-wirtinger-code-scan-terminates`, `thm-knot-wirtinger-presentation-from-code-procedure-properties`.

**Proof/definition route:** Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.

**Source boundary:** reader-1/ Calegari 2025 §§4.1–4.3 (source row calegari-2025); current oriented-link/Reidemeister suppliers. Future content authoring must supply local proofs; no citation-only fallback.
