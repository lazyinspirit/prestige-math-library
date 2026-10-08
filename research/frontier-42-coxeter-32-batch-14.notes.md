# Batch 14 — Coxeter, Artin, and Hecke Interfaces (run `frontier-42-coxeter-32`)

Owned pair: `coxeter-artin-and-hecke-interfaces` (A, order 1744) and
`coxeter-artin-and-hecke-interfaces-examples` (B, order 1745), category `coxeter-groups`.
Eight scaffold items (four A, four B), all recorded `ready`. This is Step-1 scaffold
construction: every item is a proof contract with a statement, a proof strategy, sources and
explicit dependencies; no item body is authored here and no result is certified.

## Design conformance and plan/spec conflicts

The design section is `research/plan-coxeter-groups-track.md` CG-11 (L292). Its four named A
contracts are exactly the four A-page items, with the inventory IDs unchanged:
`def-cg-artin-monoid-and-group-presentations`,
`lem-cg-artin-presentation-universal-properties-and-coxeter-surjection`,
`thm-cg-reduced-positive-section-and-length-additive-products`,
`lem-cg-hecke-and-lie-seam-contract-compatibility`. Its `Requires:` line is
`generic-coxeter-hecke-algebras-and-the-standard-basis`,
`coxeter-presentations-exchange-and-reduced-word-theorems`,
`canonical-roots-signs-and-faithful-reflections`,
`parabolic-subgroups-and-double-coset-geometry`,
`group-homomorphisms-and-the-isomorphism-theorems`. `research/plan-spec.json` pages[1744]/[1745]
declare the same A/B ids, order, category, companion and `requires` (the plan-spec item lists
are empty for the whole Coxeter track, so the contracts come from the design plus inventory).
The owner authoring direction was read first; it requires the HH-11 exchange/Matsumoto action
and the HH-12 coefficient-compatible Hecke basis and bar/normalization to be consumed, not
re-proved, and forbids premature real-reflection-faithfulness claims. The manifest follows
that: A3 consumes `thm-hh-matsumoto-reduced-word-theorem`, A4 consumes the HH-12 basis, bar and
normalization items, and A4(4) explicitly distinguishes the faithful canonical representation
from the reflection-faithful realization Soergel methods need.

**Recorded conflicts and deviations (none silently applied):**

1. **Resolved type-A application enrichment.** The scope review identified that CG-11 A2 promised a type-A identification with the published braid category, while A2/B1 abstained and the Davis/Boyd coverage rows were not both supported by the delivered contracts. The approved enrichment is now applied within this selected pair: CG-11 A-page
   `requires` includes `garside-structure-normal-forms-and-the-center`,
   `braids-as-fundamental-groups-of-configuration-spaces`, and
   `artin-presentation-completeness-and-braid-combing` in the plan, plan-spec, manifest and
   native A scaffold. A2 identifies the standard type-A Artin group with the published geometric
   braid group only under AC and by consuming `thm-the-artin-presentation-is-complete-for-geometric-braids`;
   no topological proof is duplicated. B1 identifies the positive type-A Artin monoid with
   `B_n^+` by exact presentation match to `def-positive-braid-monoid`, without claiming its
   embedding into the group or a geometric monoid construction. The Davis note 11.6 type-A group
   row maps to A2, and Boyd Example 4.1.3's positive-monoid/`S_n` example maps to B1. The three
   added page homes are published and available; there are no new edges to other run batches, so
   the cross-batch review ledger's existing edge set is unchanged. This resolves the prior
   declared-requires conflict while preserving the full promised application.
2. **Design's Lie seam vs the requires closure.** The design asks that "finite roots/coroots
   adapt to published Lie root suppliers" as a dependency/normalization check. The published Lie
   root-system page `root-systems-dynkin-diagrams-and-cartan-killing-classification` is also
   outside the A page's closure, and the run's crystallographic page
   `crystallographic-root-lattices-and-weyl-group-interfaces` (batch 21) is the in-run owner of
   that material. A4(3) therefore proves the exact normalization dictionary as a *conditional*
   statement on supplied data (normalized inner products equal to `-cos(pi/m)`, independent
   simple vectors, reflection assignment a W-action) and constructs or identifies no root
   system, coroot system, Cartan matrix or lattice. The genuine Lie adaptor and the affine
   classification are deferred with destinations recorded in the coverage file
   (`crystallographic-root-lattices-and-weyl-group-interfaces` and
   `affine-coxeter-diagrams-and-semidefinite-classification`) — see the coverage rows for
   `research/plan-coxeter-groups-track.md` CG-11's source harvest.
3. **Inventory `depends_on` lists are design templates, not proof facts.** The inventory gives
   all four A items one identical `depends_on` list (`thm-hh-parabolic-...`,
   `thm-cg-root-inversion-formulas-and-strong-exchange`,
   `thm-cg-double-coset-unique-minimum-and-normal-form`,
   `thm-quotient-group-universal-property`). The manifest declares the mathematically used
   suppliers instead: A1 needs only the Coxeter presentation and the free-group/word/quotation
   vocabulary; A2 adds the quotient universal property, von Dyck and the third isomorphism
   theorem; A3 consumes Matsumoto; A4 consumes the HH-12 basis/bar items and the batch-4/7
   reflection items. The root-inversion and double-coset theorems are **not** used by this pair,
   and the parabolic page `parabolic-subgroups-and-double-coset-geometry` enters only as a
   declared page prerequisite (and through the general vocabulary of the Artin/Hecke seam);
   no item of this pair depends on it. This deviation is recorded here and in the cross-batch
   dependency input.

## Items built, in prerequisite order

| # | item | kind | level |
|---|---|---|---|
| A1 | `def-cg-artin-monoid-and-group-presentations` | definition | 1 |
| A2 | `lem-cg-artin-presentation-universal-properties-and-coxeter-surjection` | lemma | 2 |
| A3 | `thm-cg-reduced-positive-section-and-length-additive-products` | theorem | 5 |
| A4 | `lem-cg-hecke-and-lie-seam-contract-compatibility` | lemma | 10 |
| B1 | `ex-cg-type-a-artin-projection-and-positive-lifts` | example | 6 |
| B2 | `cex-cg-artin-positive-lift-is-not-a-homomorphism` | counterexample | 6 |
| B3 | `ex-cg-quadratic-hecke-normalizations-s-equals-q-t` | example | 11 |
| B4 | `cex-cg-faithful-canonical-realization-need-not-be-reflection-faithful` | counterexample | 11 |

Every item carries `dependency_level`; the labels are `1 + max(level of in-run deps)` with
level 0 for in-run deps at level 0, and published and other out-of-run suppliers do not raise a
level. `node tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32` reports no
label, dependency or cycle error for any batch-14 item (the only error lines are the
`empty scaffold inventory` lines of the still-unscaffolded sibling pages).

## Dependency verification (examined, not assumed)

Declared `deps` resolve (`node tools/manifest-deps.mjs` on the batch: 8 items, 0 errors) and
their statements and proof strategies were read. In-run suppliers read in the current
manifests:

- batch 2 (HH-11): `def-hh-coxeter-matrix-word-group-and-length` (presentation, universal
  property, length as a minimum), `lem-hh-dihedral-root-recurrence-and-root-sign` (part (3)(iv)
  rank-two unipotent product, part (4) exact/infinite order of `st`),
  `thm-hh-matsumoto-reduced-word-theorem` (part (1) braid connectivity — the exact clause A3
  uses), `thm-hh-parabolic-minimal-representatives-and-length-additivity` (part (4) type-A
  identification with `l = inv`).
- batch 3 (HH-12): `def-hh-universal-coxeter-hecke-parameters-and-presentation` (braid
  relations (B), quadratic relation `(T_s-v_s)(T_s+v_s^{-1})=0`, `v_s` constant on odd-edge
  classes), `lem-hh-reduced-word-independence-and-length-multiplication` (T_w well defined),
  `thm-hh-generic-coxeter-hecke-standard-basis` (parts 2 and 4: basis and base change),
  `lem-hh-hecke-anti-involution-bar-and-normalization` (part 4: `S_s=v_sT_s`, `Q_s=v_s^2`,
  `(S_s-Q_s)(S_s+1)=0`).
- batch 4 (real forms): `def-cg-real-coxeter-form-and-reflection` (B with `B(e_s,e_t)=-1` for
  `m=infinity`, reflection formula), `lem-cg-reflection-form-invariance-and-rank-two-orders`
  (part (2) fixed hyperplane is `ker B(-,a)`; part (3) rank-two Gram and radical),
  `def-cg-canonical-reflection-homomorphism` (rho, Phi, T),
  `lem-cg-reflection-representation-descends-and-root-norms` (parts 2-4).
- batch 7: `thm-cg-root-length-criterion-and-faithfulness` (part (3) faithfulness of rho).

Checks actually made on conventions and directions: the sign conventions `S_s=v_sT_s` with
`Q_s=v_s^2` (multiplicative) versus `H_s=-T_s` with coefficient `v_s^{-1}-v_s` versus
`T^{EW}_s=-v_s^{-1}T_s` with constant term `v_s^{-2}` (each substitution recomputed
independently); the exact relation `(T^{EW}+1)(T^{EW}-q^{-2})=0`; the intertwining computation
`beta(alpha_s,alpha_t) = -|alpha_s||alpha_t|cos(pi/m)` giving
`r_{alpha_s}(alpha_t/|alpha_t|) = alpha_t/|alpha_t| + 2cos(pi/m) alpha_s/|alpha_s|`; the
direction of the radical argument (`r_a` fixes `ker B(-,a)` and hence `rad(B)`, not the other
way round); `rad(B) = R(e_s+e_t)` for `m=infinity` with `dim = dim V - 1`; the matrices
`[r_s]=((-1,2),(0,1))`, `[r_t]=((1,0),(2,-1))`; the type-A `l = inv` direction; the
containment direction in the length-map well-definedness proof (the equality-of-length
relation is a congruence containing the braid pairs, so the smallest congruence is contained
in it); and the quotient-by-squares isomorphism direction. No missing, circular, forward or
inadequate dependency was found; no item depends on a later same-page item (A2 was corrected
during self-review to drop an early non-injectivity claim that would have needed A3's degree
map).

## Sources: full texts fetched, stamped and inspected

1. **M. W. Davis, _The Geometry and Topology of Coxeter Groups_** (first-edition author
   manuscript, `https://people.math.osu.edu/davis.12/davisbook.pdf`, `sha256_16 ccefbb950fdcfce9`,
   600 PDF pages). Read for this pair: Section 11.6 (printed pp. 228-229, the Artin group, the
   epimorphism, the type-A case, the K(pi,1) remarks); Appendix B's Euclidean Tessellations
   discussion (the dimension-one Euclidean diagram A-tilde_1); Appendix C, Theorem C.1.3 and
   Lemma C.2.2 with the rank-two determinant computation (printed pp. 434-435).
2. **G. Lusztig, _Hecke Algebras with Unequal Parameters_** (revised book text,
   `https://arxiv.org/pdf/math/0208154`, `sha256_16 6329366ceac9317c`, 141 PDF pages). Read:
   Sections 1.5, 1.6, 1.8 and Theorem 1.9 (the signed action, prefix-reflection independence,
   the graph of reduced expressions, Matsumoto-Tits); Section 1.11 (the cosine form and the
   integrality condition); Sections 3.1-3.3 (the Iwahori-Hecke algebra, `T_w`, Proposition 3.3);
   Sections 4.1-4.2 (the bar operator and `(T_s^{-1}-v_s^{-1})(T_s^{-1}+v_s)=0`).
3. **J. McCammond, _The mysterious geometry of Artin groups_** (Winter Braids Lecture Notes
   Vol. 4 (2017), Course no I, `https://proceedings.centre-mersenne.org/item/10.5802/wbln.17.pdf`,
   `sha256_16 ebeac9664085558a`, 31 PDF pages, a full lecture-note set). Read: Section 1.1
   (Definition 1.1, Remark 1.2, Table 1.1); Section 1.3 (Definition 1.10 and the A-tilde_1
   exception); Section 2 (Definition 2.1, Definition 2.3, Theorem 2.4 and the signature
   discussion); Section 11 (Definition 11.1, "weakly spherical").
4. **B. Elias and G. Williamson, _Soergel calculus_** (`https://arxiv.org/pdf/1309.0865`,
   `sha256_16 e610a4fa938a7cc9`, 83 PDF pages). Read: Section 1.1 (the quadratic relation
   `(T_s+1)(T_s-v^{-2})=0`); Section 3.1 (Definition 3.1 of a realization, Example 3.2(1) with
   `⟨alpha_t^vee,alpha_s⟩ = -2cos(pi/m_st)`, the technical condition (3.3), Definitions 3.5-3.6);
   Section 3.2 (Assumption 3.7, Definition 3.8 of reflection faithfulness, the Soergel
   realization terminology).
5. **B. Elias and G. Williamson, _The Hodge theory of Soergel bimodules_**
   (`https://arxiv.org/pdf/1212.0791`, `sha256_16 01039f543cdd06f1`, 45 PDF pages). Read:
   Section 3.2 and Remark 3.2 (the Kazhdan-Lusztig normalization, `H_s^2=(v^{-1}-v)H_s+1`, the
   conversion `H_x = v^{l(x)}T_x`, `h_{y,x}=v^{l(x)-l(y)}P_{y,x}(v^{-2})`). The positivity
   theorems of the introduction were consulted only as context and are not used.
6. **R. Boyd, _Homology of Coxeter and Artin groups_** (PhD thesis, corrected version,
   `https://www.maths.gla.ac.uk/~rboyd/Boyd%20Thesis%20with%20corrections.pdf`,
   `sha256_16 32d53ca3f9c0fc6a`, 195 PDF pages). Read: Chapter 4, Sections 4.1-4.2 (Definition
   4.1.1, Remark 4.1.2 group completion, Example 4.1.3 braid monoid, Definition 4.2.1 and
   Remark 4.2.2 length additivity).

Harvest dispositions: 36 rows across the six sources — 17 `included` rows naming batch-14
items, 8 `inline` rows absorbed by the named supplier or batch-14 proofs, 1 `deferred` row
(to `affine-coxeter-diagrams-and-semidefinite-classification`) and 10 `out-of-scope` rows with
an individual reason each. No source was dropped and no `source_resolution` was needed. The
guessed-DOI Sotomayor paper left in a sibling's temporary directory was inspected and is **not**
Deligne; no Deligne reading is claimed.

## Checks run (actual results)

| check | command (prefix `node tools/`) | result |
|---|---|---|
| manifest dependency fields (batch) | `manifest-deps.mjs research/frontier-42-coxeter-32-batch-14.pages.json` | `8 item(s), 0 normalized, 0 error(s)` |
| manifest dependency fields (whole run) | `manifest-deps.mjs research/frontier-42-coxeter-32-batch-*.pages.json` | `149 item(s), 0 normalized, 0 error(s)` |
| scaffold policy (batch with suppliers 1,2,3,4,7,10) | `content-policy.mjs --manifest-only ...batch-{1,2,3,4,7,10,14}.pages.json` | `68 scoped item(s), 0 error(s), 0 warning(s)` |
| scaffold policy (whole run) | `content-policy.mjs --manifest-only ...batch-*.pages.json` | `149 scoped item(s), 0 error(s), 0 warning(s)` |
| coverage | `coverage-checklist.mjs ...batch-14.coverage.json --require-destination` | `1 page(s), 36 harvested result(s), 0 error(s), 0 warning(s)` |
| full-text fetch | `source-fetch-check.mjs --coverage ...batch-14.coverage.json --stamp` then check mode | `6/6 source(s) fetch-verified (6 newly stamped)`; check mode `6/6 resolved`, exit 0 |
| URL liveness | `url-sweep.mjs --coverage ... --out /tmp/b14/url-liveness.json --recover --fail-on-dead` | `6/6 live; 0 failed`; output written to `/tmp` to avoid touching shared run artifacts |
| source backing | `source-backing.mjs --coverage ... --liveness /tmp/b14/url-liveness.json --reharvest-plan /tmp/b14/reharvest.json --require-verified` | `7 authored result(s) across 1 file(s), every one still backed`; empty work list |
| manifest integrity | `manifest-integrity.mjs --run frontier-42-coxeter-32` | `64 page(s) owed, 64 in the manifests; no scope drift` |
| drift review | `drift-review-check.mjs --run frontier-42-coxeter-32` | `32 page(s) reviewed, 0 spec edit(s) applied, no blocked edges` |
| plan | `frontier-item-gate.mjs --run frontier-42-coxeter-32 --tool validate-plan` | exit 0 (page level; item lists are validated per batch by the manifest checks) |
| dependency levels (whole run) | `item-dependency-levels.mjs check --run frontier-42-coxeter-32` | exit 1 with 32 `empty scaffold inventory` lines for not-yet-scaffolded sibling pages; **no line names a batch-14 item** |
| readiness (whole run) | `step1-decisions.mjs check --run frontier-42-coxeter-32` | `items 165`; no work entry names a batch-14 item: all eight records are current |
| dependency ledger | `frontier-dependency-ledger.mjs refresh --run frontier-42-coxeter-32` | exit 0 (refreshed and deduplicated); 34 batch-14 edges with review rows |
| wikilink/deps consistency | local extraction of every `[[...]]` in the manifest statements and strategies | 0 unresolved links, 0 links outside `deps`/`justified_by`/same-page ids, 0 forward same-page dependencies |

## Self-review corrections before hand-off

Two full re-reads of the eight statements and strategies against the sources found and
corrected these defects, after which all eight readiness records were re-recorded:

1. A1 had a forward wikilink to the later same-page theorem A3 inside an abstention clause;
   the link was removed and the clause rephrased, keeping the statement free of forward
   dependencies.
2. A2 claimed "in particular π is not injective for S ≠ ∅", which needs the degree homomorphism
   of the later item A3; the sentence was removed from A2 (the non-injectivity is B2's content,
   where the degree map is legitimately available). A2 also gained the free-group and
   free-words suppliers it cites in its strategy, and the monoid vocabulary dependency for
   clause (1).
3. A4's Soergel-generator substitution `T^{EW}_s = -v_s^{-1}T_s` was recomputed: the first
   draft contemplated `S_s = v_s^{-1}T_s`, which does not satisfy the Soergel-calculus relation;
   the correct element is `-v_s^{-1}T_s`, and the constant-term/sign check is now displayed in
   both the statement and the strategy.
4. B4 contained a mistyped wikilink (`lem-hh-dihedral-root-recurrence-and-rank-two-orders`) to
   a non-existent id; corrected to `lem-hh-dihedral-root-recurrence-and-root-sign`, and the
   realization clause now records the normalization `alpha_s = 2B(-,e_s)` that makes
   `⟨alpha^vee_s, alpha_s⟩ = 2` hold, not the unnormalised functional `B(-,e_s)`.
5. B1's phrase describing the Artin monoid projection as "the map $s_i\mapsto s_i$" was
   garbled; reworded to the same assignment on generators. B2's general-S paragraph was
   corrected: the ambient monoid argument (the length map on `A^+(S,m)`) is used directly, with
   no parabolic reduction claimed. B3's rank-two check now explicitly restricts to a single
   parameter (legitimate always, forced for odd `m`), so that `S_w=q^{l(w)}T_w` is correct.
6. B3's Kazhdan-Lusztig clause was reworded so that `T^{KL}` is introduced as the generator
   of the presentation with relation `(T^{KL})^2=(q^{-2}-1)T^{KL}+q^{-2}` under the substitution
   `T=-qT^{KL}`; the earlier phrasing could have been read as a uniqueness statement for roots
   of the quadratic polynomial, which is false in the rank-one algebra.
7. Dependency-consistency fixes: A4 gained the A2 dependency it links; B4 gained
   `def-group-homomorphism`; A2 gained `def-semigroup-and-monoid`, `def-free-group` and
   `thm-reduced-words-form-the-free-group`. All affected records were re-recorded, and B3 was
   re-recorded after correction 6.

## Recorded clarifications and residual uncertainty

1. **AC is used only for the type-A geometric group application.** The local presentations,
   quotient universal properties, Coxeter projection and positive lifts need no choice. The
   conditional type-A application states AC explicitly and consumes the published completeness
   theorem whose statement assumes AC; the item does not repeat that topological proof. No other
   claim in this pair relies on that theorem.
2. **A4(3) is a conditional normalization check, not a root-system construction.** It proves
   that supplied data satisfying the displayed normalized-inner-product identity reproduce the
   canonical form and representation; it does not construct a root system, coroot system,
   Cartan matrix or lattice, and it does not claim that the published Lie suppliers satisfy the
   hypothesis — that identification is deferred (design/plan conflict 2 above).
3. **The Kazhdan-Lusztig coefficient conversion is quoted, not established here.** A4(2) and B3
   verify the *unit* conversion (`H_s = vT_s` in rank one) and the normalization relations; the
   general identity `h_{y,x} = v^{l(x)-l(y)}P_{y,x}(v^{-2})` is recorded from the Hodge-theory
   source as the required conversion before coefficients are compared. The canonical basis, bar
   invariance of the KL basis, cells and positivity remain in their designated proof homes and
   are not claimed by this pair.
4. **No published defect was found** in the published items consumed by this pair
   (`def-free-group`, `thm-reduced-words-form-the-free-group`, the presentation and quotient
   vocabulary, the symmetric-group/inversion items, the bilinear-form and linear-map items,
   `def-braid-group-by-the-artin-presentation`,
   `thm-the-artin-presentation-is-complete-for-geometric-braids`, and
   `def-positive-braid-monoid`). The presentation-completeness theorem is consumed only for the
   AC-conditional type-A group application, while the positive-monoid definition supports an
   exact presentation match; neither import asserts a monoid embedding here.
5. This batch is mathematically scaffolded but not proved: the eight items are proof contracts
   for Step-3 authoring. Step 3 review, not these readiness records, provides mathematical
   acceptance. No published content, shared plan, engine state or verdict was edited; no
   selected pair was changed.

## Exploratory item-validator probes (not stage-1 gates)

The stage-1 battery does not include item-scoped `extcheck`/`fwdcheck` (their selector is
derived from the live manifests while the item carriers do not exist until `3b-author`). The
probes were nevertheless run and are recorded honestly:

- `node tools/frontier-item-gate.mjs --run frontier-42-coxeter-32 --tool extcheck --quiet`
  -> `FAIL` with 165 `[focus-item-unknown]` lines for the scaffolded-but-unwritten ids across
  the run (including the eight batch-14 ids). Expected pre-author state, identical to the
  observation recorded by the sibling batches.
- `node tools/frontier-item-gate.mjs --run frontier-42-coxeter-32 --tool fwdcheck --quiet`
  -> the same 165 `focus-item-unknown` failures, same cause.

At hand-off the autopilot status recomputed from disk lists batch 14 among the batches with
their stage-1 artifacts present once this batch's manifest, coverage, notes and readiness
records are on disk; unit receipt stamping and the transition to `2-assign` remain engine-owned.

## Completion

All eight items were recorded `ready` with their examined direct dependency ids; the records are
`research/frontier-42-coxeter-32-step1-<id>.json` and are current for the manifest bytes on
disk. No item was escalated. Cross-batch dependencies are in
`research/frontier-42-coxeter-32-batch-14.cross-batch-dependencies.json` (4 page rows plus 30
item rows) and were refreshed into the run ledger. The remaining whole-run failures
(empty scaffolds in sibling batches, the 165 pre-author focus-item probes) are not batch-14
defects and resolve as the other batches land and as Step 3 authors the items.
