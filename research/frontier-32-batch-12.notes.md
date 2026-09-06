# frontier-32 · Beta · batch-12 notes

This checkpoint changes only the batch-12 manifest, source harvest, and these notes. It does not touch library pages, item files, the canonical plan, dispatch state, or another batch.

## Control, scope, and drift

Read `AGENTS.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`, the batch prompt/task, `research/frontier-32-batch-12.pages.json`, the exact AV-9 and AV-12 design material in `research/plan-algebraic-geometry-track.md:545-850`, the corresponding canonical-plan records, and the relevant published item interfaces.

The batch manifest follows the dispatch specification unchanged:

- `presheaves-sheaves-stalks-and-sheafification` is A `366.057`, requires `plane-curves-local-intersection-multiplicity-and-bezout-examples`; its B companion is `366.058`.
- `schemes-subschemes-and-morphisms-locally-of-finite-type` is A `366.063`, requires `affine-schemes-and-the-structure-sheaf-examples`; its B companion is `366.064`.

Both design `requires` clauses disagree with that specification. AV-9 asks for the category/functor and directed-colimit interfaces; AV-12 asks for AV-10 and AV-11. Per dispatch, no page edge was changed here. The direct discrepancies are for the run-level drift unit; the item dependency graph records the real mathematical interfaces where they are available.

The repository's live `.autopilot/` state reports `frontier-23` at author stage, despite this dispatch naming `frontier-32`. No workflow state was altered.

## AV-9 existing-content collision

The complete AV-9 inventory already exists in `items/`, and `library/scheme-theory/presheaves-sheaves-stalks-and-sheafification.md` already composes the A inventory (as a draft) while its B companion is published. Thirty-seven of the thirty-eight designed items are `published`; `lem-sheaf-condition-check-on-basis` alone remains an on-disk draft. The manifest-only content-policy gate rejects an in-scope item that already exists, so reproducing the design ids would be a prohibited duplicate. The first pair therefore has no new manifest items. Its harvest faithfully records the published items and defers the one existing draft lemma to itself; it does not silently pretend the source material was newly scaffolded.

This is a material scope collision, not a claim that AV-9 needs no source coverage. See [frontier-32-batch-12.coverage.json](frontier-32-batch-12.coverage.json) for the two independently read treatments and every heading disposition.

## Sources and conventions

The coverage receipt records exact HTTPS URLs, the PDF-viewer ranges actually read, source-native headings/results, dispositions, and full-text web-reader receipts.

- Vakil, *Foundations of Algebraic Geometry*, is the eligible full lecture-note treatment with a harvestable contents page. It supplies the primary treatment for both A pages.
- The Stacks Project `Sheaves on Spaces` independently checks AV-9's presheaf/sheaf/stalk/sheafification interfaces.
- The Stacks Project `Schemes` and `Morphisms of Schemes` independently check AV-12's affine-local scheme, closed-subscheme, finite-type, finite-presentation, and scheme-theoretic-image interfaces.
- The policy repair re-read the complete `Schemes` source at `https://stacks.math.columbia.edu/download/schemes.pdf`, specifically PDF viewer pages 38–40: §21 `Separation axioms`, Definition 21.3 and Lemma 21.7 (also verified at tag 01KP). The coverage receipt now records the corrected §§19–24 range and maps that lemma to `def-affine-overlap-separation-condition`.

Conventions fixed by the scaffold: schemes are locally ringed spaces locally isomorphic to affine schemes, including the empty scheme; an affine open carries the restricted structure sheaf; a scheme morphism is a locally ringed-space morphism; finite type means locally finite type plus quasi-compact; finite presentation remains distinct over non-Noetherian bases; `X_red` keeps the underlying topological space and removes nilpotents; and a scheme-theoretic image is the smallest closed factorisation when it exists. Stacks Project, *Morphisms of Schemes*, Lemma 29.6.3 supplies the kernel construction for every quasi-compact morphism without a quasi-separated hypothesis. For this page, the `k`-variety convention is integral, finite type over `k`, and satisfies the explicit affine-overlap separation condition: affine opens over a common affine base have affine intersection and a surjective map from their section-ring tensor product over `Z`. Stacks Project, *Schemes*, §21, Definition 21.3 and Lemma 21.7 (tag 01KP) identifies that criterion with the usual separatedness condition; AV-14 will give its canonical diagonal formulation after fibre products.

## AV-12 item checkpoint — A page

Every id below has an explicit `deps` array in [frontier-32-batch-12.pages.json](frontier-32-batch-12.pages.json). The `strategy` fields there give the proposed proof route; source support is the mapped harvest row in the coverage receipt.

| item | exact planned claim / dependency rationale |
| --- | --- |
| `def-scheme` | A locally ringed space with an affine open neighbourhood at every point, empty allowed; depends on locally ringed and affine schemes. |
| `def-affine-open-subscheme` | An open subscheme whose restricted locally ringed space is affine; depends on the scheme and affine interfaces. |
| `lem-intersection-affine-opens-covered-principal-opens` | Two affine opens have an intersection covered by opens principal in either chart; needs the localization-open interface. |
| `thm-gluing-affine-schemes` | Cocycle-compatible open affine gluing produces a unique scheme; uses the established gluing theorem for locally ringed spaces. |
| `def-morphism-of-schemes` | A locally ringed-space morphism between schemes. |
| `thm-morphisms-into-affine-scheme-global-sections` | `Hom(X,Spec A)` is naturally `Hom(A,Gamma(X,O_X))`; needs global sections and affine anti-equivalence. |
| `lem-morphism-schemes-local-on-source-target` | Compatible local morphisms glue and can be compared locally; uses affine-open refinements and gluing. |
| `def-scheme-over-base` | An `S`-scheme, `S`-morphism, and affine-space-over-base notation. |
| `def-open-immersion-schemes` | An isomorphism onto an open subscheme. |
| `lem-open-immersion-monomorphism` | Open immersions are monomorphisms and compose; needs only their open identifications. |
| `def-quasi-compact-and-quasi-separated-scheme` | The topological and affine-intersection conditions for schemes. |
| `thm-affine-schemes-quasi-separated` | Intersections of quasi-compact opens in an affine scheme are quasi-compact; uses finite principal covers. |
| `def-ideal-sheaf` | An ideal subsheaf of the structure sheaf. |
| `def-quasi-coherent-ideal-sheaf` | The affine-local quasi-coherence condition for an ideal; added because the designed correspondence cannot be stated self-containedly without it. |
| `def-closed-immersion-schemes` | A closed topological embedding with a surjection on structure sheaves. |
| `thm-affine-closed-immersions-quotient-rings` | Closed immersions into `Spec A` are exactly `Spec(A/I) -> Spec A`; uses the affine anti-equivalence. |
| `thm-quasi-coherent-ideal-closed-subscheme-correspondence` | The assignments `I -> V(I)` and `Z -> ker(O_X -> i_*O_Z)` correspond; the AV-12 design itself requires this proof to be completed only after AV-18, so it is source-backed but must be a recorded-not-proved result if authored at this order. |
| `def-reduction-of-scheme` | Defines `X_red` by the nilradical ideal and establishes the global reduced convention. |
| `thm-reduction-universal-property` | A map from a reduced scheme factors uniquely through `X_red`; affine quotient factorisations glue. |
| `def-irreducible-component-scheme` | Topological irreducible components equipped with reduced induced scheme structures. |
| `def-integral-scheme` | Nonempty, reduced, irreducible scheme; includes the affine-domain criterion. |
| `def-locally-noetherian-and-noetherian-scheme` | Affine-local Noetherian and finite-affine-cover Noetherian conventions. |
| `def-locally-finite-type-and-finite-type-morphism` | Affine-local finite-type ring maps, plus quasi-compactness for finite type. |
| `def-locally-finite-presentation-morphism` | The analogous finite-presentation ring-map condition, kept distinct from finite type. |
| `lem-finite-type-local-on-source-and-target` | Finite type survives affine restriction and is recovered from a finite affine source cover by clearing denominators. |
| `def-quasi-compact-and-quasi-separated-morphism` | Morphism-level finiteness conditions needed by the image construction; added as a necessary intermediate definition. |
| `def-affine-overlap-separation-condition` | For an `S`-scheme, records the source's affine-open separation criterion: pairs of affine opens over a common affine base have affine intersection and a surjective map `Γ(U,O_X) tensor_Z Γ(V,O_X) -> Γ(U∩V,O_X)`. It is the necessary, source-backed interface that replaces the unavailable future diagonal definition. |
| `def-variety-scheme-theoretic` | A `k`-variety is integral, finite type over `k`, and satisfies the preceding affine-overlap separation condition. This is equivalent to the usual separatedness convention by the harvested Stacks result, without an unbuilt AV-14 dependency. |
| `thm-classical-varieties-equivalent-integral-separated-finite-type-schemes` | Compare closed-point affine charts over algebraically closed `k` and glue; its use of separatedness is discharged by the preceding affine-overlap condition rather than a future diagonal item. |
| `def-scheme-theoretic-image` | Smallest closed factorisation when it exists, without building quasi-compactness into the definition. |
| `thm-scheme-theoretic-image-quasi-compact-morphism` | Kernel ideal construction, local compatibility, and minimality for a quasi-compact morphism; no quasi-separated hypothesis is added. |
| `rem-topological-versus-scheme-theoretic-subspace` | The support alone does not determine a closed subscheme structure. |

The initial A inventory was 32 items, below the mandatory 60-item split threshold. The three additions (`def-quasi-coherent-ideal-sheaf`, `def-quasi-compact-and-quasi-separated-morphism`, and `def-affine-overlap-separation-condition`) are dependency closure, not padding.

## AV-12 item checkpoint — B page

| item | exact planned verification / dependencies |
| --- | --- |
| `ex-projective-line-by-gluing-affines` | Glue two affine lines along inverse coordinates; uses affine gluing and open immersions. |
| `ex-doubled-origin-nonseparated-scheme` | Glue two affine lines along their punctured opens; records, but does not use, the later separatedness test. |
| `ex-closed-subscheme-double-origin-point` | Compare `(t)` and `(t^2)` quotient spectra. |
| `ex-reduction-dual-numbers` | Quotient the dual numbers by the nilradical. |
| `cex-closed-subset-does-not-determine-closed-subscheme` | The `V(t^n)` family has one support and distinct nilpotent structure. |
| `ex-affine-n-space-over-arbitrary-base` | Affine polynomial charts, including `n=0`, give an `S`-scheme finite type over `S`. |
| `cex-locally-finite-type-not-finite-type` | Infinite disjoint affine-line union fails quasi-compactness over a field. |
| `cex-finite-type-not-finite-presentation-nonnoetherian-base` | `Spec(A/I) -> Spec A` for non-finitely-generated `I` distinguishes the two finiteness conditions. |
| `ex-scheme-theoretic-image-dense-open-immersion` | A dense open immersion into an integral scheme has full scheme-theoretic image by a direct affine-domain argument, whether or not the immersion is quasi-compact. |

## Known limits and unresolved obligations before the Step-3 fix

1. AV-9 cannot be newly scaffolded in this batch without violating the existing-item policy; its one nonpublished basis lemma also cannot truthfully be labelled `already-published`.
2. The AV-12 design describes separatedness as supplied at AV-14, but the whole-run manifest policy correctly rejects the unscaffolded `def-separated-morphism-schemes` dependency. This repair does not erase separatedness: `def-affine-overlap-separation-condition` records the complete affine criterion in the harvested Stacks §21 result. The later AV-14 diagonal definition and its equivalence proof remain outside this batch and are not a dependency here.
3. The AV-12 design says the quasi-coherent-ideal/closed-subscheme correspondence proof is completed only after AV-18. It must not be authored as a local proof here; author it as `proved_here: false` with the SCHEMA-required external-dependency record, or move the proof only through a separately authorised plan change.
4. The source-fetch receipt is based on complete PDFs opened in the web reader. Local `curl`/Node DNS resolution is restricted in this workspace, so source-fetch stamping cannot independently download the same sources here. No unverified URL was retained.
5. Alpha scaffold review found that `thm-classical-varieties-equivalent-integral-separated-finite-type-schemes` uses the general classical-variety category without defining it in this pair or inheriting it from the current prerequisite closure. Closing that gap requires a definition of classical algebraic prevarieties, regular maps, and separated algebraic varieties from Milne, *Algebraic Geometry*, Definitions 5.2 and 5.7 (printed pages 100--102), plus an exact source mapping for the comparison functor and closed-point inverse in Milne, *Algebraic Geometry*, version 10, section p, printed pages 36--37. The theorem must restrict the classical side to irreducible varieties in order to match integral schemes. Adding that new definition is outside this Step-3 repair licence, so the pair remains insufficient pending an owner decision.

## Initial validation record before the Step-3 fix

## Step-5 authoring

Authored draft AV-12 A-page items: def-classical-algebraic-prevariety-regular-maps-and-varieties, def-scheme, def-affine-open-subscheme, lem-intersection-affine-opens-covered-principal-opens, thm-gluing-affine-schemes, def-morphism-of-schemes, thm-morphisms-into-affine-scheme-global-sections, lem-morphism-schemes-local-on-source-target, def-scheme-over-base, def-open-immersion-schemes, lem-open-immersion-monomorphism, def-quasi-compact-and-quasi-separated-scheme, thm-affine-schemes-quasi-separated, def-ideal-sheaf, def-quasi-coherent-ideal-sheaf, def-closed-immersion-schemes, thm-affine-closed-immersions-quotient-rings, def-reduction-of-scheme, thm-reduction-universal-property, def-irreducible-component-scheme, def-integral-scheme, def-locally-noetherian-and-noetherian-scheme, def-locally-finite-type-and-finite-type-morphism, def-locally-finite-presentation-morphism, lem-finite-type-local-on-source-and-target, def-quasi-compact-and-quasi-separated-morphism, def-affine-overlap-separation-condition, def-variety-scheme-theoretic, thm-classical-varieties-equivalent-integral-separated-finite-type-schemes, def-scheme-theoretic-image, and rem-topological-versus-scheme-theoretic-subspace.

Authored draft AV-12 examples: ex-projective-line-by-gluing-affines, ex-doubled-origin-nonseparated-scheme, ex-closed-subscheme-double-origin-point, ex-reduction-dual-numbers, cex-closed-subset-does-not-determine-closed-subscheme, ex-affine-n-space-over-arbitrary-base, cex-locally-finite-type-not-finite-type, and cex-finite-type-not-finite-presentation-nonnoetherian-base. The two draft pages compose only these resolvable authored items. All statements and local proofs are literature-derived/AI-altered as recorded in frontmatter, using the exact Vakil, Stacks, and Milne sources/locators harvested in the coverage receipt. The new classical-category definition and Milne 10.158 comparison route implement the current manifest's repair to Alpha finding F12-1.

Blocker: the manifest requires thm-quasi-coherent-ideal-closed-subscheme-correspondence to be a recorded-not-proved theorem. SCHEMA.md permits proved_here: false only for a remark, whose id must have a rem- prefix; no schema-valid item can have that planned theorem id and role. Its dependent thm-scheme-theoretic-image-quasi-compact-morphism and ex-scheme-theoretic-image-dense-open-immersion were therefore not authored. No plan, workflow, published content, or another batch was changed.

Checks run:

- The mandated explicit-manifest precheck was run. It reached the missing correspondence file after passing every existing assigned proof item; this is an expected ENOENT failure caused by the blocker.
- Focused precheck of the ten authored phase proofs: PASS, 10 checked and 0 failing.
- node tools/validate-plan.mjs without an argument reports its required plan-spec argument. node tools/validate-plan.mjs research/plan-spec.json completed successfully (the repository has unrelated advisory output).
- node tools/content-policy.mjs research/frontier-32-batch-12.pages.json: 3 expected scope-item-missing errors, exactly the blocker chain above.
- node tools/proof-contract.mjs research/frontier-32-batch-12.proof-contracts.json --strict: PASS, 10/10 proof items, 0 errors and 0 warnings.

The initial whole-run policy check reported exactly two `batch-dependency-missing` failures: the two AV-12 variety items depended on future `def-separated-morphism-schemes`. This repair adds the source-backed `def-affine-overlap-separation-condition` and replaces only those two invalid edges.

- JSON parse: PASS.
- `node tools/manifest-deps.mjs research/frontier-32-batch-*.pages.json`: PASS — 668 manifest items, each with an explicit `deps` array.
- `node tools/content-policy.mjs research/frontier-32-batch-*.pages.json --manifest-only`: PASS — 668 scoped items, 0 errors, 0 warnings.
- `node tools/coverage-checklist.mjs --require-destination research/frontier-32-batch-12.coverage.json --json`: PASS — 2 A pages, 92 harvested results, 0 errors. Its one advisory low-yield warning is the recorded AV-9 existing-content collision: all 40 harvested AV-9 rows name existing published content or the one existing draft, so none may honestly be a new included item.
- `node tools/source-fetch-check.mjs --coverage research/frontier-32-batch-12.coverage.json`: PASS — 5/5 sources fetch-verified.
- `node tools/validate-plan.mjs research/plan-spec.json`: PASS for the unmodified canonical plan. The existing plan-level placement edge for `def-noetherian-ring-and-module` remains outside this batch and was not changed.
- `git diff --no-index --check /dev/null <each batch-12 task artifact>`: PASS — no whitespace diagnostics.

## Step-3 fix pass

- `F12-1` — **applied, not pushed back.** The current scoped scaffold-repair policy expressly permits adding a genuinely needed supporting definition inside this batch. The earlier review's statement that a new item was outside its own edit licence is therefore not a reason to leave this batch dependency-open.

  Changed record: `def-classical-algebraic-prevariety-regular-maps-and-varieties` is the new, unused definition id in the AV-12 A manifest. Its exact convention fixes an algebraically closed field `k`; a classical algebraic prevariety is a quasi-compact `k`-ringed space locally isomorphic to the standard ringed space of an affine algebraic set; regular maps are morphisms of `k`-ringed spaces; a classical algebraic variety is a separated prevariety. The comparison uses the full subcategory with irreducible underlying space, so its classical side matches integral rather than merely reduced schemes. Its explicit dependencies are `def-algebraically-closed-field`, `def-affine-algebraic-set`, `def-ringed-space`, `def-morphism-ringed-spaces`, and `def-irreducible-topological-space-and-subset`.

  Evidence and harvest: Milne, *Algebraic Geometry*, Chapter 5 §§5a–5c, Definition 5.2, Proposition 5.4, Lemma 5.6, Definition 5.7, Proposition 5.8, Example 5.9, and 5.10, printed pages 100–102, [https://www.jmilne.org/math/CourseNotes/AG.pdf](https://www.jmilne.org/math/CourseNotes/AG.pdf), was read in full over that range. The source adds seven individually dispositioned harvest rows. Its Chapter 5a–c category material maps to the new definition; Example 5.9 maps to `ex-doubled-origin-nonseparated-scheme`; and the unused explanatory/function-field results carry result-specific out-of-scope reasons.

  Changed record: `thm-classical-varieties-equivalent-integral-separated-finite-type-schemes` now directly depends on the new definition and its strategy is the actual closed-point route: use the finite-type EGA-scheme-to-ultrascheme functor; recover the scheme by adjoining points for irreducible closed subsets; identify affine charts by the established Nullstellensatz interface; then restrict to irreducible classical varieties and integral separated finite-type schemes. The prior affine-overlap interface remains the scheme-side separatedness convention; no future diagonal item was introduced.

  Evidence and harvest: Milne, *Algebraic Geometry*, Chapter 10 §p, `Comparison with algebraic schemes in the sense of EGA`, item 10.158(a)–(d), printed pages 36–37, [https://www.jmilne.org/math/CourseNotes/AG10.pdf](https://www.jmilne.org/math/CourseNotes/AG10.pdf), was read in full over that range. The closed-point reconstruction and categorical equivalence rows are included for the theorem; the normality/smoothness and later morphism-property rows are retained with specific out-of-scope reasons. Both URLs were fetch-verified as complete PDFs in the web reader (231 and 41 pages respectively), and all seven Batch-12 source URLs now carry fetch receipts.

  The AV-12 A manifest has 33 items and its B manifest has 9, so the repair remains below the 60-item mandatory split threshold. The new sources add 12 harvest rows: AV-12 now has 64 rows and Batch 12 has 104. No existing dependency, plan record, library page, item file, workflow state, or another batch was changed.

  Validation after the repair: `manifest-deps` over all frontier-32 manifests passed with 677 items, 0 normalizations, and 0 errors; whole-run `content-policy --manifest-only` passed with 677 scoped items, 0 errors, and 0 warnings; the Batch-12 coverage checklist passed with 104 harvested results and 0 errors, retaining only the already-reviewed AV-9 existing-content low-yield warning; `source-fetch-check` passed 7/7; and `validate-plan.mjs research/plan-spec.json --repo . --max-items 60` reported `OK` with no cycles, forward references, B-page dependencies, or unresolved ids among pages with item lists.

## Scaffold-fix round

- `F12-1` — **applied.** `thm-classical-varieties-equivalent-integral-separated-finite-type-schemes` is now titled **Irreducible classical varieties and integral separated finite-type schemes**, and its planned statement explicitly asserts an equivalence between irreducible classical varieties (using the existing nonempty irreducibility convention) and integral separated finite-type $k$-schemes. Its unchanged dependency on `def-classical-algebraic-prevariety-regular-maps-and-varieties` supplies Milne's general separated-prevariety definition; `def-irreducible-topological-space-and-subset` is already among that definition's explicit dependencies, and `def-integral-scheme` is an explicit theorem dependency. No item was added, removed, rehomed, or given a changed dependency.

  Evidence: Milne, *Algebraic Geometry*, Definition 5.2 and §5b on regular maps, printed pages 99--101 (viewer pages 99--101), and Definition 5.7, printed page 101, define algebraic prevarieties and call every separated prevariety an algebraic variety: [https://www.jmilne.org/math/CourseNotes/AG.pdf](https://www.jmilne.org/math/CourseNotes/AG.pdf). Milne, *Algebraic Geometry*, Chapter 10 §p, item 10.158(a),(c), printed page 36 (viewer page 36), gives the closed-point reconstruction and the EGA-scheme/ultrascheme equivalence: [https://www.jmilne.org/math/CourseNotes/AG10.pdf](https://www.jmilne.org/math/CourseNotes/AG10.pdf). The latter source itself states the broader algebraic-scheme/ultrascheme equivalence, so the irreducible/integral restriction is recorded as the necessary narrowing, not attributed as its literal headline. Both complete PDFs were reopened on 2026-09-06; the existing coverage rows for Definition 5.2/5.7 and 10.158(a),(c) remain faithful and continue to disposition the relevant results to the definition and this theorem. All seven recorded Batch-12 source entries (six unique HTTP(S) URLs, with Vakil's PDF used independently for both A pages) were fetch-verified during this round at their recorded locators.

  Validation on 2026-09-06: JSON parsing passed; `node tools/manifest-deps.mjs research/frontier-32-batch-*.pages.json` reported 677 items, 0 normalizations, and 0 errors; `node tools/coverage-checklist.mjs --require-destination research/frontier-32-batch-12.coverage.json --json` reported 2 A pages and 104 harvested results with 0 errors (the sole warning is the pre-existing AV-9 0/40 existing-content low-yield advisory); `node tools/source-fetch-check.mjs --coverage research/frontier-32-batch-12.coverage.json` reported 7/7 fetch-verified; `node tools/content-policy.mjs --manifest-only research/frontier-32-batch-*.pages.json` reported 677 scoped items, 0 errors, and 0 warnings; and `node tools/validate-plan.mjs research/plan-spec.json --repo . --max-items 60` ended `OK`. `git diff --check` on all three Batch-12 artifacts also passed.

## Step-5 authoring

Recovery authored the three planned draft items previously omitted by the
recorded-not-proved shape conflict:
`thm-quasi-coherent-ideal-closed-subscheme-correspondence`,
`thm-scheme-theoretic-image-quasi-compact-morphism`, and
`ex-scheme-theoretic-image-dense-open-immersion`. It also repaired the three
draft counterexamples `cex-closed-subset-does-not-determine-closed-subscheme`,
`cex-locally-finite-type-not-finite-type`, and
`cex-finite-type-not-finite-presentation-nonnoetherian-base` to carry their
actual direct proof strategy, phase-format proof, and proof contract.

The correspondence is now proved directly by restricting to affine quotient
charts and checking that the quotient constructions agree on overlaps. The
image theorem uses the exact quasi-compact finite-affine-cover route in Stacks,
*Morphisms of Schemes*, §6, Lemma 6.3 / current Lemma 29.6.3, at
`https://stacks.math.columbia.edu/tag/01R5`: its kernel ideal is
quasi-coherent, its associated closed subscheme is minimal, and restriction to
an open gives the restricted image. The dense-open example uses the affine
domain criterion from `def-integral-scheme`: on a nonempty principal open,
vanishing after localization forces an ideal section to vanish. Thus it does
not need quasi-compactness of the open immersion. The closed-subscheme
correspondence continues to cite the batch-harvested Stacks *Morphisms of
Schemes* §2 Lemma 2.3 at
`https://stacks.math.columbia.edu/download/morphisms.pdf` and its exact affine
quotient dependency.

No claim was narrowed or dropped. The prior blocker is resolved without a
recorded-not-proved item: all six repaired items are `status: draft`, retain
literature-derived statements and truthful AI-altered or literature-derived
proof provenance, and have no judge record. The AV-12 A and B pages now list
all 33 and all 9 planned items respectively; the pre-existing AV-9 published
material was not changed.

Checks run after recovery:

- Explicit-manifest `node tools/tsx-run.mjs tools/precheck.mts` with all 80
  `items/ID.md` paths: PASS — 40 phase-format items checked, 0 failing.
- `node tools/validate-plan.mjs research/plan-spec.json`: PASS — its final
  result is `OK`; repository-wide redundant-prerequisite advisories are
  outside this batch.
- `node tools/content-policy.mjs research/frontier-32-batch-12.pages.json`:
  PASS — 80 scoped items, 0 errors, 0 warnings.
- `node tools/proof-contract.mjs
  research/frontier-32-batch-12.proof-contracts.json --strict`: PASS — 16/16
  proof-bearing authored draft items, 0 errors, 0 warnings.
- `git diff --check` on the batch-owned items, pages, contracts, and notes:
  PASS — no whitespace diagnostics.
