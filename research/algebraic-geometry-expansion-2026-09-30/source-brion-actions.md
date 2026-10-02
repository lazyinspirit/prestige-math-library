# Source report: Michel Brion on actions of algebraic groups

## Bibliographic identity and access record

The source read for this lane is Michel Brion, “Introduction to actions of
algebraic groups,” *Les cours du CIRM* **1** (2010), no. 1, 1–22,
doi:[10.5802/ccirm.1](https://doi.org/10.5802/ccirm.1). The publisher’s record
is [CCIRM](https://ccirm.centre-mersenne.org/item/10.5802/ccirm.1); the complete
publisher PDF is
<https://ccirm.centre-mersenne.org/item/10.5802/ccirm.1.pdf> (the publisher
also exposes the article page at
<https://ccirm.centre-mersenne.org/articles/10.5802/ccirm.1/>). Crossref and
OpenAlex title/author/journal records agree with this identity. The fetched
PDF’s title and author metadata agree as well. The local evidence copy was
`/tmp/brion-introduction-actions-algebraic-groups.pdf`, SHA-256
`1abc97e4b6ff41d68c4b900020709bc2ccca3e01d965d86cbd4c961a4ed0eef2`;
PyMuPDF extracted the full document to `/tmp/brion-actions-fulltext.txt`.
I read all 23 PDF pages (a cover/title page plus journal pages 1–22), and
visually checked the PDF pages containing Definitions 1.18 and Theorem 2.22.
These are access/read records, not repository artifacts.

I used the publisher PDF, not an arXiv copy. Exact-title arXiv API lookup did
not return this note; an exact identifier surfaced in the broader search was
an unrelated scheduling paper. I do not claim to have exhaustively searched
all repositories. No other full external source was read for this lane.

## Scope and theorem locator map

Brion’s opening convention is complex algebraic groups and classical
algebraic varieties over `C`; the varieties in §1 need not be irreducible.
Actions and quotient topology there are algebraic/Zariski actions. Section 2
specializes to a connected reductive group `G`, a Borel subgroup `B`, a
maximal torus `T`, and its maximal unipotent subgroup `U`. Do not silently
read this as a result about group schemes over arbitrary bases or about
reductive groups in positive characteristic. Numbering and printed pages
below are the journal’s pages.

| Topic | Source locator and exact usable content | Hypotheses and limits |
|---|---|---|
| Actions and representations | §1.1, Defs. 1.1, 1.4, 1.6, 1.8; Lem. 1.5; Prop. 1.9, pp. 2–4. Coordinate rings of affine actions are locally finite rational modules; torus actions are gradings (Ex. 1.7); an affine action embeds equivariantly as a closed subvariety of a finite-dimensional module (Prop. 1.9). | Over `C`; Prop. 1.9 is an affine-group/affine-variety statement. It is stronger than merely saying the acting affine algebraic group is linear. |
| Orbits and stabilizers | Def. 1.10; Prop. 1.11; Lem. 1.14; Ex. 1.12, pp. 4–5. Orbits are locally closed and smooth; each orbit component has dimension `dim G − dim G_x`; orbit-boundary points lie in lower-dimensional orbits; each orbit closure contains a closed orbit; orbit dimension is upper semicontinuous. | Classical complex algebraic varieties. Prop. 1.11’s proof uses constructibility and fibre-dimension input; Lem. 1.14 explicitly cites Tauvel–Yu, Thm. 15.5.7. These inputs must be supplied for a local proof. |
| Group quotients and homogeneous spaces | Thm. 1.15 (Chevalley), Thm. 1.16 and Def. 1.17, pp. 5–6. A closed subgroup `H` is the stabilizer of a line in a finite-dimensional representation; `G/H` has a unique homogeneous variety structure, is smooth quasi-projective, and satisfies the stated quotient topology/function property. | `G` linear and `H` closed. The theorem invokes scheme structures, generic smoothness, and faithfully flat descent; it is not a proof of general fpqc quotient representability. |
| Geometric quotients and reductivity | Def. 1.18; Ex. 1.19; Thm. 1.23; Thm. 1.24; Def. 1.25 and Prop. 1.26, pp. 7–10. Rosenlicht’s generic quotient statement follows the examples. Thm. 1.24 gives finite generation and the categorical affine quotient for reductive `G`, including a unique closed orbit in each quotient fibre; Prop. 1.26 identifies the stable affine locus’s geometric quotient. | Reductive over `C`, acting on affine `X` of finite type; stable means closed orbit and finite stabilizer. The proof of reductivity implying the needed complete reducibility is not completed (Thm. 1.23). Rosenlicht is stated with a citation, not proved. |
| Projective GIT | Def. 1.28 and Prop. 1.29; Def. 1.30 and Prop. 1.31; Def. 1.33, Lem. 1.34, Prop. 1.35, pp. 10–13. Semistable points in `P(V)` are detected by positive-degree invariants; the quotient is a Proj; for a projective action with an ample `G`-linearized line bundle, invariant sections construct a good quotient and the stable locus has a geometric quotient. | The line bundle is assumed `G`-linearized in Prop. 1.35. The argument is a sketch. The note expressly omits the Hilbert–Mumford criterion (Introduction, p. 1) and only cites the general linearization-up-to-power result. |
| Highest weights and `U` invariants | Lem. 2.1, Lem. 2.2, Thm. 2.4, Thm. 2.7, Prop. 2.8, Cor. 2.9, pp. 13–17. These give the isotypic and coordinate-ring decompositions, dominant-weight description, finite generation of `C[X]^U`, and its fraction-field/normality properties. | `G` connected reductive over `C`, `U` maximal unipotent; the highest-weight proof imports the open Bruhat cell from Springer §8.3. Thm. 2.7 depends on affine invariant finite generation in Thm. 1.24. |
| Spherical varieties and Borel orbits | Defs. 2.10, 2.13, 2.16, 2.20; Thms. 2.14, 2.15, 2.22; Cor. 2.23, pp. 17–21. In the affine normal irreducible setting, sphericality is related to multiplicity-free coordinate rings, saturated weight monoids, and a toric `U`-quotient (Thm. 2.14); spherical homogeneous spaces have finitely many `B`-orbits (Thm. 2.15). Projective orbit/weight statements and global generation are then developed. | Thm. 2.15 imports Springer §8.4’s minimal-parabolic structure. Cor. 2.23 uses Borel fixed point without proving it. Thm. 2.22 contains a self-reference in its printed proof (see errata below). The finer classification of spherical varieties is not given; Losev is cited. |
| Flag varieties | Examples 1.12 and 2.11; §2 uses flag varieties and `G/B` in the spherical discussion. Bruhat and minimal-parabolic facts are cited to Springer rather than developed as a flag-variety course. | Brion does not supply a self-contained flag-geometry chain. Its reductive-group scope also exceeds a bridge stated only for semisimple groups unless the central torus is checked. |

## What the note proves, imports, or sketches

Here “proof supplied” means that Brion gives a mathematical argument in the
note. It does not mean that every foundational result invoked in the argument
is proved there. For scaffold use, keep the two statuses separate.

### Arguments substantially supplied in the note

- Prop. 1.9 gives the finite-dimensional equivariant embedding argument.
- Thm. 1.15 gives a proof of Chevalley’s line-stabilizer theorem. Thm. 1.16
  then gives a substantial construction/proof for `G/H` and states its
  descent argument.
- Thm. 1.24 gives the Reynolds-operator proof of affine invariant-ring finite
  generation and the categorical quotient properties, conditional on the
  reductivity/complete-reducibility result it has just stated. Prop. 1.26
  supplies the stable-locus argument from orbit-dimension semicontinuity and
  the affine quotient theorem.
- Prop. 1.29 and Prop. 1.31 give the projective quotient constructions from
  invariant graded rings. Prop. 1.35 gives a proof outline under an ample
  linearization, but not a proof at the same detail as the affine theorem.
- Lems. 2.1–2.2 give representation/coordinate-ring arguments. Thms. 2.7,
  2.14 and 2.15 provide proof arguments conditional on the earlier invariant
  theory and cited reductive-group structure. Prop. 2.8 also gives its
  rational-invariant and normality argument.

### Results with material imported or omitted

- Prop. 1.11 and Lem. 1.14 have arguments but depend on general constructibility
  and fibre-dimension facts. Prop. 1.11 cites Tauvel–Yu for generic fibre
  dimension; Lem. 1.14 cites their fibre-dimension semicontinuity theorem
  (15.5.7). Cor. 1.13 also uses Zariski Main Theorem.
- Thm. 1.16 is not self-contained: its construction invokes generic
  smoothness, scheme-theoretic arguments, and faithfully flat descent. The
  existence theorem is useful as a target but not a substitute for the local
  descent/representability interfaces.
- Thm. 1.23 explicitly leaves the deep implication from reductivity to a
  compact Zariski-dense subgroup beyond scope and refers to Schwarz–Brion,
  *Théorie des invariants & Géométrie des variétés quotient*, Ch. 5. The
  equivalence with complete reducibility therefore cannot be treated as
  proved in this note.
- Rosenlicht’s theorem after Ex. 1.19 is only stated and cited to
  Popov–Vinberg, §2.3.
- Thm. 2.4 uses Springer, *Linear Algebraic Groups*, §8.3 for the open Bruhat
  cell and multiplication structure. Thm. 2.15 cites Springer §8.4 for
  minimal parabolics and their rank-one quotients.
- Prop. 1.35 is expressly a sketch. The assertion that a positive power of a
  line bundle can be linearized under additional normality/connectedness
  assumptions is only cited to Knop–Kraft–Luna–Vust [6]; it is not a blanket
  assertion for every action and every ample bundle.
- Cor. 2.23 imports Borel fixed point. The local AG-LIE scaffold already has
  `lem-borel-fixed-point-for-projective-actions` as a possible supplier.
- The uniqueness/classification results for spherical varieties with fixed
  weight data are not proved here; the note points to Losev [7].

Brion’s printed errors must be resolved before turning the statements into
local items:

1. In Def. 1.18(iii), p. 7, the displayed invariant ring is printed as
   `C[π⁻¹(U)]^H`, although `G` is the acting group. The sheaf clause below it
   uses `G`; the quotient invariant must be `G`-invariant.
2. In the proof of Thm. 2.22, p. 21, the final sentence says that the
   remaining assertions follow from Thm. 2.14 and **Thm. 2.22 itself**. This
   is a self-reference and supplies no proof of those assertions. Repair the
   proof rather than copying this locator as a completed result.

## Concrete local interfaces and remaining proof suppliers

The plan’s classical block already has useful material: AV-5 includes
constructible images and fibre-dimension results, including
`thm-chevalley-constructible-image-varieties` and
`thm-generic-fibre-dimension`; AV-11 onward adds scheme morphisms and
fibre products, descent and smoothness interfaces. Current published scheme
pages include `fibre-products-base-change-and-scheme-theoretic-fibres`,
`kahler-differentials-conormal-sequences-and-infinitesimal-lifting`,
`quasi-coherent-and-coherent-sheaves-and-vector-bundles`,
`proj-projective-schemes-twisting-sheaves-and-ampleness`, and
`cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes`.
These supply prerequisites for proofs; they do not already establish general
algebraic-group actions or their quotients.

| Brion result or interface | Existing local supplier | Work still required / credible proof source |
|---|---|---|
| Algebraic groups are linear | `items/lem-affine-algebraic-group-faithful-rational-representation.md` | Supports faithful rational representations. Prop. 1.9’s equivariant closed embedding of an affine action is a distinct statement and needs its own item/proof. |
| Orbit constructibility, dimension and stabilizer semicontinuity | AV-5 constructibility and fibre-dimension interfaces | Reassemble them for the orbit map and stabilizer fibres, with group smoothness and the precise componentwise dimension statement. Brion cites Tauvel–Yu, *Lie Algebras and Algebraic Groups*, 15.5.5 and 15.5.7. |
| `G/H` as a smooth quasi-projective homogeneous variety | AV-11+ scheme morphisms/fibre products; AV smoothness and descent interfaces | Prove the quotient structure and faithfully flat descent explicitly; check what the current AV descent statements actually cover. Brion points to Hartshorne, *Algebraic Geometry*, III §§9–10, and Tauvel–Yu. For a scheme/group-scheme extension, use a dedicated descent source such as the Stacks Project or SGA 3; neither was read for this report. The current `G/B` construction only handles its flag setting. |
| Reductive group complete reducibility and affine invariant quotient | `items/thm-noether-finiteness-theorem-for-invariants.md` is only for finite groups; it is not a substitute. | Add rational representations, a Reynolds operator, and the exact characteristic-zero reductive/linearly reductive bridge used by Thm. 1.24. Brion points to Schwarz–Brion, Ch. 5; Dolgachev’s *Lectures on Invariant Theory* and Mumford–Fogarty–Kirwan’s *Geometric Invariant Theory* are credible candidates for the invariant-theory/GIT sequence. None was read here. Do not extend “reductive implies linearly reductive” to positive characteristic. |
| Rosenlicht generic quotient | No dedicated local item identified in the current AV scaffold | Either leave as a cited boundary result or add a separate proof item with the hypotheses and rational quotient construction. Brion’s candidate is Popov–Vinberg, §2.3; it was not read here. |
| Highest weights, Bruhat cells, flags, Borel fixed point | Published `AG-LIE-1` page `library/algebraic-geometry/smooth-projective-serre-duality-and-flag-variety-line-bundles.md`; items include `lem-semisimple-opposite-borel-big-cell`, `lem-semisimple-bruhat-double-cosets`, `lem-semisimple-minimal-parabolic-root-subgroup`, `thm-semisimple-flag-variety-smooth-projective`, and the Borel fixed-point lemma. | Good local suppliers for the special semisimple flag chain. Brion’s §2.4 assumes connected reductive `G`, so verify the torus factor and the exact rational-representation hypotheses before reuse. The AG-LIE page metadata says `published`, while its closing prose still calls the items “current-run drafts”; item-level metadata and proof files should be checked rather than trusting that stale page sentence. |
| Projective GIT and linearizations | AV-18/19/22 interfaces for coherent sheaves, Proj/ampleness and projective cohomology | Add the group action on section rings and prove quotient/stability properties. Keep the ample `G`-linearized line bundle as an explicit hypothesis unless a separate linearization theorem is proved. For the Hilbert–Mumford criterion, use a separate source and pair; Brion explicitly omits it. Credible candidates are Mumford–Fogarty–Kirwan or Dolgachev (not read here). |
| Spherical-variety classification | Highest-weight/flag suppliers and any new reductive quotient items | The note’s basic affine spherical arguments can be scaffolded after those interfaces, but repair Thm. 2.22 and keep the finer uniqueness theorem outside the claim unless Losev is separately studied. |

The AV plan itself records finite-group invariant theory and equivariant
geometry as outside its original scope. Its current prose contains historic
build/status notes that do not match all current artifacts: AG-LIE and its
scheme prerequisites now exist as published pages/items, while some older
plan text calls prerequisite pages unbuilt. Use current page/item metadata
for availability and inspect proof files for proof status; do not infer
mathematical coverage from the historic inventory alone. The published
`library/differential-geometry/lie-subgroups-actions-and-homogeneous-spaces.md`
is about smooth Lie actions, not algebraic actions or algebraic quotients.

## Suggested dependency-ordered A/B expansion

These are research recommendations, not edits to the canonical plan. Start
with the classical complex-variety register matching Brion, then make the
scheme-theoretic widening an explicitly later pair. Each A page should carry
proof-bearing definitions and results; B is for examples and counterexamples
that test the hypotheses and scope.

### GA-1 — Classical algebraic groups, rational actions, and affine embeddings

**Depends on:** AV-1/2 affine coordinate rings and morphisms; the local
faithful-representation item.

**A proof obligations:** Define complex linear algebraic groups, algebraic
actions, rational representations and equivariance; prove the coordinate
ring’s locally finite rational-module structure; derive the torus grading
dictionary; prove an affine action embeds equivariantly as a closed
subvariety of a finite-dimensional module. Keep the group linearity theorem
separate from the affine-action embedding theorem.

**B boundary checks:** A torus grading and a matrix action on affine space;
matrix rank orbits. Counterexample: an arbitrary abstract group action on a
set or a discontinuous action is not an algebraic action and has no induced
rational coordinate-ring representation.

### GA-2 — Orbit geometry, stabilizers, and homogeneous spaces

**Depends on:** GA-1, AV-5 constructibility/fibre dimension, and the AV
scheme-theoretic fibre, smoothness and descent interfaces where used.

**A proof obligations:** Prove the orbit map’s image is locally closed, the
orbit is smooth in characteristic zero, and its dimension is
`dim G − dim G_x`; prove orbit dimension semicontinuity, lower-dimensional
boundary orbits, and existence of a closed orbit in each orbit closure. Then
construct `G/H` for a closed subgroup, prove the quotient properties and
quasi-projectivity, and state exactly where faithful-flat descent enters.
Distinguish an orbit `G/G_x` from a global quotient of all of `X`.

**B boundary checks:** `SL₂` on `A²` with open orbit `A²−{0}` and stabilizer a
unipotent subgroup; general linear matrix rank orbits. Counterexamples:
orbits need not be closed, and `SL₂/U ≅ A²−{0}` is not affine, so
homogeneous does not mean affine and an orbit map need not be a quotient map
with all global invariant-theory properties.

### GA-3 — Reductive affine invariant theory and geometric quotients

**Depends on:** GA-1 and GA-2, affine finite-type algebra, and a proved
characteristic-zero complete-reducibility/Reynolds interface.

**A proof obligations:** Define reductive and linearly reductive in the
chosen characteristic; prove exactly the implication being used over `C`;
construct the Reynolds operator; prove finite generation of `C[X]^G`,
surjectivity and categorical universality of `X → X//G`, compatibility for
closed invariant subvarieties, a unique closed orbit in every quotient
fibre, and the stated normality passage. Define stable points and prove the
stable open locus has a geometric quotient. Mark results depending on
complete reducibility instead of hiding that dependency.

**B boundary checks:** Scalar multiplication and weights `(1,−1)` on `A²`.
For weights `(1,−1)` on `A²−{0}`, the geometric quotient exists: it is the
nonseparated doubled-origin line, obtained by gluing the two affine-line
quotients from `x≠0` and `y≠0` along `G_m`. The failure of invariant rational
functions to distinguish the two axis orbits does not rule out a geometric
quotient. For a valid closed-orbit/stability counterexample, take the trivial
`G_m` action on a point: the orbit is closed, but its stabilizer is
positive-dimensional, so the point is not stable under Brion's definition.
Also record that the existing finite-group Noether theorem does not prove
reductive-group invariant finite generation.

### GA-4 — Projective GIT from linearized line bundles

**Depends on:** GA-3 and current AV coherent-sheaf, Proj, ampleness and
projective section-cohomology pages.

**A proof obligations:** Define a `G`-linearization; construct the invariant
section ring and its Proj quotient; prove semistable and stable locus
statements and the good/geometric quotient conclusions under an ample
linearized line bundle. State separately any theorem that supplies a
linearization after taking a power, with its normality, connectedness and
group hypotheses. Do not imply every projective action comes with the
needed linearization. Keep Hilbert–Mumford as a separate dependency if
included.

**B boundary checks:** An explicit projective action and quotient. For
`G_m` acting trivially on a point, the trivial linearization makes the point
semistable, while twisting by a nontrivial character makes every positive
degree invariant section vanish and the semistable set empty; this tests
dependence on the linearization.

### GA-5 — Borel actions and spherical varieties (optional advanced branch)

**Depends on:** GA-3, highest-weight theory, and the current AG-LIE flag
bridge, plus repairs for the imported Springer facts and the printed
Thm. 2.22 proof.

**A proof obligations:** Define sphericality and weight monoids; prove finite
generation of `C[X]^U`, the affine multiplicity-free/saturation/toric
quotient criteria with normality hypotheses explicit, and finite `B`-orbit
results where the needed minimal-parabolic structure is supplied. Treat
projective moment-polytope assertions only after repairing Thm. 2.22’s
self-reference. State which finer classification results remain cited.

**B boundary checks:** Toric and flag examples; Brion’s Ex. 2.24(3) gives
`P¹×P¹` and a spherical quadratic cone with the same moment polytope and
weight lattice, showing those data alone do not classify all polarized
spherical varieties.

### GA-SG — Later scheme/group-scheme widening (not covered by Brion)

**Depends on:** AV-11 onward, fibre products, group schemes/actions, and
effectivity/descent interfaces. Add only after the classical pairs above.

**A proof obligations:** Define group schemes and actions over a base,
stabilizers and quotient sheaves; distinguish representable `G/H` from a
quotient sheaf/algebraic space; prove only the representability and descent
claims actually targeted. Separate linearly reductive from geometrically
reductive group schemes and spell out base/flatness assumptions.

**B boundary checks:** A finite flat group action with a nontrivial
scheme-theoretic stabilizer; an example where the orbit set does not
represent the quotient functor. Brion’s classical complex note cannot
discharge this pair. Candidate sources include the Stacks Project’s
group-scheme/descent material, SGA 3, and Conrad, *Reductive Group Schemes*;
these are leads only and were not read here.

## Limits of this report

The publisher note’s full body was read. The cited Springer, Tauvel–Yu,
Hartshorne, Popov–Vinberg, Schwarz–Brion, Knop–Kraft–Luna–Vust, Losev,
Dolgachev, and Mumford–Fogarty–Kirwan sources were not read for this lane;
references to them above identify explicit proof dependencies in Brion or
credible next-source candidates, not independent verification. This report
does not claim that the current local pages prove more than their individual
items establish, and does not broaden Brion’s complex-variety statements to
arbitrary schemes or characteristic.
