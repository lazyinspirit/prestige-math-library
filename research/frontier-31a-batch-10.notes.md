# frontier-31a / beta / batch 10 — scaffold notes

## Status and controlling design

This is a scaffold only: it creates no `items/`, library pages, plan changes, or workflow-state changes. The authorized manifest contains **42 A items** and **9 B items**. The A page is below the 60-item split limit, so no split is proposed.

I read both assigned design locations. `research/plan-homological-algebra-track.md` L2321–2460 is the controlling A-page design; L2461–2494 is the contiguous B-page continuation, not a later contradictory amendment. The design lists `ext-and-balanced-resolutions`, `tor-flatness-and-global-dimension`, and `the-group-algebra-and-representations` as prerequisites. `research/plan-spec.json` lists `universal-coefficients-and-kunneth-theorems-examples` and `the-group-algebra-and-representations`. Order agrees at 365.059. Per dispatch, the manifest retains the plan-spec prerequisites and does not adjudicate this conflict; the present page locally makes explicit the specialized comparison needed to compute Ext from the bar resolution.

The on-disk autopilot status reports an unrelated active `frontier-23` author run rather than this dispatch's `frontier-31a` beta role. This was observed only; no workflow state was edited.

## Source record

All three sources are independent full-text treatments. Weibel is the primary textbook source; Löh is a full independent lecture-note treatment with a harvestable table of contents; Sharifi is an independent course-note control. Exact source headings and every disposition are in [the coverage harvest](frontier-31a-batch-10.coverage.json).

| Key | full-text URL | exact material read | role |
| --- | --- | --- | --- |
| W | https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf | Ch. 6 §6.1 pp. 160–161; §6.2 p. 167; §6.3 pp. 171–174; §6.5 pp. 177–180; §6.7 pp. 189–190 and 194 | primary definitions, bars, cyclic resolution, Shapiro, transfer |
| L | https://loeh.app.ur.de/teaching/grouphom_ss19/lecture_notes.pdf | §§1.2.1–1.2.2 pp. 11–17; §1.6 pp. 41–57; §1.7 pp. 58–72; §§3.1.4–3.1.5 pp. 108–110; §4.2.1 pp. 158–160 | independent derivation, resolution comparison, subgroup and cd control |
| S | https://math.ucla.edu/~sharifi/homalg.pdf | §3.5 pp. 65 and 68–70; §3.6 pp. 71–72 | independent Tor/Ext and derived-definition control |

The direct full-text PDFs were fetched and read in the web PDF reader (W: 56 pages, L: 257 pages, S: 86 pages); that fact is recorded honestly in each coverage `fetch_verified` stamp without inventing byte counts or hashes. The local Node source fetcher and curl liveness sweep both receive `EAI_AGAIN` / `Could not resolve host` for every external host, so their body/hash and header probes cannot run in this sandbox. The exact URLs remain direct live full-text URLs verified by the reader; no source was replaced merely to mask this sandbox DNS failure. The liveness report is `/tmp/frontier-31a-batch-10-url-liveness.json` and must be rerun in an environment with DNS before a mechanically green liveness receipt can be claimed.

## Conventions and proof limits

- A left G-module always means a left `Z[G]`-module. `Z` is the left trivial module through augmentation for `Hom_{Z[G]}(Z,M)`, but the first `Z` in `Z tensor_{Z[G]} M` is the **right** trivial module.
- `H^n(G;M)` is the right derived invariants functor / `Ext^n_{Z[G]}(Z,M)` relative to supplied injective data. `H_n(G;M)` is the left derived coinvariants functor / `Tor_n^{Z[G]}(Z,M)`.
- The homogeneous unnormalized bar complex is the free `Z[G]` complex on vertices with diagonal G-action. The identity-insertion contraction is only Z-linear after forgetting the G-action; it is not asserted equivariant. The homogeneous--inhomogeneous dictionary must print both inverse formulas and check differentials.
- Normalized bars quotient the degenerate subcomplex. The trivial-group positive-vanishing lemma is A-side because the finite-transfer proof cannot depend on B content.
- For `H <= G`, induction is `Z[G] tensor_{Z[H]} -` and coinduction is `Hom_{Z[H]}(Z[G],-)`; Shapiro uses induction for homology and coinduction for cohomology. A coset transversal must match the claimed module side; its unrestricted existence invokes a choice principle unless supplied.
- Corestriction is only for finite index in this page. The main composite is `cor o res = [G:H]`; the reverse normal/trivial-action refinement is to be stated only in the source-supported form.
- `cd_Z G` is the projective dimension of the trivial `Z[G]` module. The torsion-free theorem must build the needed finite-cyclic periodic resolution inside its proof, not depend on the B example.
- No crossed-homomorphism `H^1` interpretation or group-extension `H^2` interpretation is authored here; those are deliberately deferred to group-theory. No forward references are planned.

## Item ledger — A page

Each row gives the exact planned claim, source support, and explicit dependency set from the manifest. `[]` would denote no dependencies; none of these load-bearing A items is dependency-free.

| ID | planned claim and source support | deps |
| --- | --- | --- |
| `def-integral-group-ring-module-and-trivial-module-convention` | Fixes integral left modules and trivial `Z`; W §6.1, L §1.1/§1.2, S Def. 3.6.1. | group-ring definition; augmentation; action/module correspondence |
| `def-invariants-functor-of-a-group-module` | Defines `M^G`; W §6.1, S Def. 3.6.3. | integral convention |
| `thm-invariants-are-hom-from-the-trivial-group-ring-module` | Natural `M^G = Hom_ZG(Z,M)`; W Lem. 6.1.1, L §3.1.5. | integral convention; invariants |
| `prop-the-invariants-functor-is-left-exact` | Invariants preserve left exact sequences; W Ex. 6.1.1(1), S §3.6. | Hom-from-trivial; Hom left exactness |
| `def-group-cohomology-as-a-derived-functor` | Defines `H^n=R^n(-)^G=Ext^n_ZG(Z,-)` relative to supplied data; W Def. 6.1.2, L Thm. 3.1.16, S Def. 3.6.5/Rem. 3.6.8. | left exactness; right-derived object; injective data; right-data comparison |
| `def-coinvariants-functor-of-a-group-module` | Defines `M_G` and identifies it with right-trivial `Z tensor_ZG M`; W Lem. 6.1.1, S §3.6. | integral convention; tensor definition |
| `prop-the-coinvariants-functor-is-right-exact` | Coinvariants are right exact; W Ex. 6.1.1(2), S §3.6. | coinvariants; tensor right exactness |
| `def-group-homology-as-a-derived-functor` | Defines `H_n=Tor_n^ZG(Z,M)` with handedness; W Def. 6.1.2, L Thm. 3.1.12, S Rem. 3.6.8. | coinvariant exactness; left-derived object; projective data; left-data comparison |
| `prop-degree-zero-group-cohomology-and-homology-are-invariants-and-coinvariants` | `H^0=M^G`, `H_0=M_G`; W Def. 6.1.2, S Rem. 3.6.8. | both definitions; both degree-zero recovery theorems |
| `thm-long-exact-sequence-in-group-cohomology` | Long exact derived-invariants sequence; W §6.1, L §3.1.5. | cohomology definition; right-derived delta theorem |
| `thm-long-exact-sequence-in-group-homology` | Long exact derived-coinvariants sequence; W §6.1, L §3.1.4. | homology definition; left-derived delta theorem |
| `def-unnormalized-homogeneous-bar-resolution` | Defines free homogeneous bars and faces; W §6.5 Def. 6.5.1, L Def. 1.2.1. | integral convention |
| `lem-the-bar-differential-is-group-equivariant-and-squares-to-zero` | Equivariance and alternating-face cancellation; W Ex. 6.5.1, L Rem. 1.2.2. | unnormalized bars |
| `def-bar-augmentation` | Defines the augmentation to trivial `Z`; W §6.5, L §1.2. | bars; integral convention |
| `lem-the-augmented-bar-complex-is-exact` | Underlying-abelian-group identity-insertion contraction; W Thm. 6.5.3 proof. | bar differential; augmentation |
| `thm-the-bar-complex-is-a-free-resolution-of-the-trivial-module` | Free terms plus augmented exactness; W Thm. 6.5.3, L Prop. 1.6.5. | bars; differential; augmentation; exactness |
| `def-inhomogeneous-group-cochains` | Defines `Map(G^n,M)` and standard differential; W App. 6.5.5, L §1.2.2. | integral convention |
| `lem-the-inhomogeneous-group-cochain-differential-squares-to-zero` | Verifies standard differential squares to zero; W §6.5, L bar comparison. | inhomogeneous cochains |
| `thm-homogeneous-and-inhomogeneous-group-cochains-are-isomorphic-complexes` | Both inverse formulas and differential compatibility; W App. 6.5.5, L Rem. 1.2.4. | homogeneous bars; inhomogeneous cochains; differential lemma |
| `thm-the-bar-cochain-complex-computes-derived-group-cohomology` | Specialized Ext/bar comparison via `Hom(P,I)` double complex; W App. 6.5.5, L Ex. 3.1.15/Thm. 3.1.16. | derived definition; free bar resolution; homogeneous/inhomogeneous theorem |
| `def-normalized-bar-resolution` | Quotient by degenerate bars / normalized cochains; W §6.5, L Def. 1.2.3. | unnormalized bars |
| `lem-degenerate-bar-chains-form-a-contractible-subcomplex` | Degenerate span is a contractible subcomplex; W Ex. 6.5.1, §6.5. | normalized bars; bar differential |
| `thm-normalized-and-unnormalized-bar-complexes-are-chain-homotopy-equivalent` | Quotient, splitting, and degenerate contraction yield homotopy equivalence; W §6.5. | both bars; degenerate contraction |
| `cor-normalized-cochains-compute-group-cohomology` | Normalized cochains have the same cohomology; W App. 6.5.5. | bar computation; normalized equivalence |
| `def-restriction-induction-and-coinduction-for-group-modules` | Defines restriction, induction, coinduction and handedness; W Def. 6.3.1, L Defs. 1.7.1/1.7.4/1.7.6. | integral convention; scalar restriction/extension; tensor definition |
| `thm-induction-is-left-adjoint-and-coinduction-right-adjoint-to-restriction` | Tensor--Hom adjunctions; W §6.3, L §1.7.1. | change-of-groups definition; extension/coextension adjunctions |
| `lem-the-group-ring-is-free-over-a-subgroup-ring` | A coset transversal gives the correct-sided basis; W §6.3/§6.7.2, L Prop. 1.7.2. | change-of-groups definition; subgroup definition |
| `thm-shapiro-lemma-for-group-cohomology` | `H^n(G,Coind M)=H^n(H,M)` naturally; W Shapiro 6.3.2, L Thm. 1.7.8. | cohomology; adjunctions; subgroup freeness |
| `thm-shapiro-lemma-for-group-homology` | `H_n(G,Ind M)=H_n(H,M)` naturally; W Shapiro 6.3.2, L Thm. 1.7.8. | homology; adjunctions; subgroup freeness |
| `def-cohomological-dimension-of-a-group` | Defines `cd_Z G=pd_ZG Z`; L Def. 4.2.1. | integral convention; projective modules |
| `thm-group-cohomological-dimension-is-detected-by-cohomology-vanishing` | Characterises cd by vanishing for all coefficients; L Prop. 4.2.2. | cohomology; cd definition |
| `def-restriction-and-corestriction-on-group-cohomology` | Defines finite-index restriction and corestriction; W Def. 6.7.1/Transfer 6.7.16, L Defs. 1.7.12–1.7.13. | cohomology; change-of-groups definition |
| `lem-corestriction-is-independent-of-the-coset-representatives` | Reindexing/correction-factor proof of representative independence; W Transfer 6.7.16, L Rem. 1.7.14. | restriction/corestriction; subgroup freeness |
| `thm-restriction-corestriction-composite-is-multiplication-by-the-index` | `cor res=[G:H]`; constrained reverse refinement only; W Lem. 6.7.17, L Thm. 1.7.15. | restriction/corestriction; independence lemma |
| `lem-positive-group-cohomology-of-the-trivial-group-vanishes` | Positive normalized bars vanish for `G=1`; W Ex. 6.1.3, L §1.2. | normalized cochain computation |
| `prop-finite-groups-have-torsion-annihilation-in-positive-cohomology` | `|G| H^n(G,M)=0` for `n>0`; W Thm. 6.5.8, L transfer proof. | composite theorem; trivial-group vanishing |
| `thm-groups-of-finite-integral-cohomological-dimension-are-torsion-free` | A nontrivial finite cyclic subgroup contradicts finite cd; L Cor. 1.7.3, §1.6.3. | cd definition/criterion; subgroup freeness |
| `fs-group-cohomology-is-the-derived-functor-of-coinvariants` | Refutes swapped cohomology/homology derivation; W Def. 6.1.2. | cohomology; homology |
| `fs-the-bar-contracting-homotopy-is-group-equivariant` | Refutes equivariance of identity insertion; W Thm. 6.5.3 proof. | bar exactness; free resolution |
| `fs-h-one-is-defined-here-as-crossed-homomorphisms-modulo-principal-ones` | Refutes an out-of-scope low-degree definition; W Ex. 6.5.6. | cohomology |
| `fs-h-two-is-defined-here-as-equivalence-classes-of-group-extensions` | Refutes an out-of-scope low-degree definition; W Ex. 6.5.7. | cohomology |
| `fs-shapiro-lemma-needs-no-distinction-between-induction-and-coinduction` | Refutes conflating the two adjoints; W Shapiro 6.3.2, L Thm. 1.7.8. | both Shapiro theorems |

## Item ledger — B page

| ID | planned claim and source support | deps |
| --- | --- | --- |
| `ex-group-cohomology-of-the-trivial-group` | Computes `H^0` and positive degrees for `1`; W Ex. 6.1.3. | normalized cochains compute |
| `ex-degree-zero-invariants-and-coinvariants` | Computes fixed points and quotient for a concrete action; W §6.1, S Rem. 3.6.8. | degree-zero proposition |
| `ex-the-first-three-bar-differentials` | Writes degrees 1–3 and a cancellation; W Ex. 6.5.2. | bar definition; differential; augmentation |
| `ex-normalizing-an-inhomogeneous-cochain` | Replaces a low-degree cochain by normalized representative; W App. 6.5.5. | inhomogeneous cochains; normalized computation |
| `ex-a-periodic-resolution-for-a-finite-cyclic-group` | Builds alternating `t-1`/norm resolution; W Calc. 6.2.1, L Prop. 1.6.11. | integral convention |
| `ex-cohomology-of-a-finite-cyclic-group-from-the-periodic-resolution` | Reads kernels/quotients from Hom of the periodic resolution; L Cor. 1.6.13. | cohomology definition; periodic example |
| `ex-shapiro-lemma-for-the-trivial-subgroup` | Specialises both Shapiro statements to `H=1`; W Cor. 6.3.3, L Thm. 1.7.8. | both Shapiro theorems |
| `cex-the-underlying-bar-contraction-is-not-equivariant` | Exhibits translate mismatch for identity insertion; W Thm. 6.5.3 proof. | bar exactness |
| `ex-cohomological-dimension-of-the-trivial-group-and-of-an-infinite-cyclic-group` | Shows `cd(1)=0` and `cd(Z)=1`; W Ex. 6.1.4, L §4.2.1. | cd definition; cd criterion |

## Validation checkpoint and next action

- `node tools/coverage-checklist.mjs --require-destination research/frontier-31a-batch-10.coverage.json` — pass: 1 A page, 75 harvested source results, 0 errors, 0 warnings.
- `node tools/content-policy.mjs --manifest-only research/frontier-31a-batch-10.pages.json` — pass: 51 scoped items, 0 errors, 0 warnings. Every manifest item has an explicit `deps` array.
- `node tools/source-fetch-check.mjs --coverage research/frontier-31a-batch-10.coverage.json` — pass: 3/3 recorded full-text fetch-verification stamps. The prior `--stamp` run failed only because the local resolver returned `EAI_AGAIN`; see the source-record note above.
- `node tools/validate-plan.mjs research/plan-spec.json` — pass.  It reports an acyclic declared page order and no item-level cycles, forward references, B-page dependencies, or unresolved IDs among the 746 page manifests; its warnings concern pre-existing redundant prerequisites and unscaffolded pages elsewhere in the run.
- `node tools/content-policy.mjs --manifest-only research/frontier-31a-batch-*.pages.json` — fails with 22 whole-run errors outside this task's writable scope.  In particular, later `research/frontier-31a-batch-1.pages.json` (`schur-multipliers-and-universal-central-extensions`, order 365.075) redeclares the controlling design's earlier foundational IDs `def-group-cohomology-as-a-derived-functor` and `def-group-homology-as-a-derived-functor`.  This produces duplicate-ID diagnostics and makes the policy's global ID lookup misattribute this page's dependencies as forward references.  Batch 1 also participates in unrelated UCT duplicate diagnostics with batch 9.  Batch 10 must retain the two foundational claims and their design-prescribed IDs at order 365.059; renaming or removing them would contradict the controlling design and would not repair the later page.  The owner of the later batch must remove the redeclarations and depend on this page before the whole-run gate can pass.

Next action: resolve the cross-batch duplicate IDs in their owning batch and rerun whole-run content policy; rerun URL liveness in an environment with DNS.  Authoring must preserve the listed conventions, print the double-complex comparison in the bar-computation theorem, and keep low-degree interpretations outside this pair.

## Step-5 authoring

Authored all 51 manifest IDs: the 42 A-page items in
`library/homological-algebra/group-cohomology-as-a-derived-functor.md` and the
9 B-page items in
`library/homological-algebra/group-cohomology-as-a-derived-functor-examples.md`.
Every item and both pages remain `status: draft`. Statements are recorded as
literature-derived from the batch's Weibel/Löh source locators; local proofs,
refutations, and example verifications are marked AI-generated. No generated
statement is used as a dependency target, and no judge record was created.

The authored conventions are: left integral group modules; left versus right
trivial modules distinguished in Hom and tensor; the bar contraction only
underlying-abelian-group linear; cohomological Shapiro uses coinduction and
homological Shapiro induction; transfer is finite-index only; and the torsion
argument builds the cyclic periodic calculation inside the A-side proof. The
derived bar comparison explicitly uses its finite-diagonal double-complex
dependencies. Low-degree crossed-homomorphism and extension interpretations
remain excluded. No planned claim was narrowed or dropped; no authoring blocker
remains.

Proof contract: `research/frontier-31a-batch-10.proof-contracts.json` contains
39 proof-bearing entries. It maps each numbered proof step and records all
eight boundary axes with the applicable mathematical disposition; no local
fact citation is asserted where the written proof uses no labelled fact row.

Checks run after canonical repair of the bar-comparison phase numbering:

- `node tools/tsx-run.mjs tools/precheck.mts` with all 51 explicit manifest
  paths: 39 proof-bearing files checked, 0 failing.
- `node tools/validate-plan.mjs research/plan-spec.json`: declared page order
  acyclic; no item-level cycle, forward-reference, B-page dependency, or
  unresolved-ID error (repository-wide redundant-prerequisite warnings only).
- `node tools/content-policy.mjs research/frontier-31a-batch-10.pages.json`:
  51 scoped items, 0 errors, 0 warnings.
- `node tools/proof-contract.mjs
  research/frontier-31a-batch-10.proof-contracts.json --strict`: 39/39,
  0 errors, 0 warnings.

## Step-3 fix pass

### B10-1 — applied and revalidated

**Finding.** The bar-computation theorem used the finite-diagonal `Hom(P,I)`
comparison and its two exactness/acyclic-assembly directions without declaring
the corresponding earlier scaffold results.  The cohomological-dimension
criterion likewise used the earlier Ext/projective-dimension criterion without
declaring it.

**Disposition.** Applied.  The current record
`thm-the-bar-cochain-complex-computes-derived-group-cohomology` has explicit
`deps` on the seven HA-8 records
`def-hom-double-complex-of-a-projective-and-an-injective-resolution`,
`lem-the-two-hom-double-complex-differentials-commute-before-signing`,
`def-direct-sum-total-complex-on-finite-diagonals`,
`lem-acyclic-assembly-by-exact-columns`,
`lem-acyclic-assembly-by-exact-rows`,
`lem-hom-from-a-projective-object-makes-the-injective-resolution-columns-exact`,
and `lem-hom-into-an-injective-object-makes-the-projective-resolution-rows-exact`.
The current record
`thm-group-cohomological-dimension-is-detected-by-cohomology-vanishing` also
explicitly depends on
`thm-projective-dimension-at-most-n-iff-higher-ext-vanishes`.  Those eight
stable IDs occur in the earlier batch-8 manifest, where the first seven define
and assemble the first-quadrant comparison and the eighth gives the stated
Ext-detection criterion.  No B-page item is made load-bearing.

**Source evidence re-read.** The direct full-text sources remain current and
need no replacement: Weibel, Chapter 6 §§6.1, 6.3, 6.5, and 6.7 (PDF pp. 0–1,
11–12, 17–20, 29, and 34) supplies the derived definitions, appropriate
induction/coinduction Shapiro forms, free/normalized bar resolutions, and
transfer; Löh §§1.2, 1.6, 1.7, and 4.2.1–4.2.2 (PDF pp. 18–24, 50–57, 65–69,
and 165–166) supplies the standard-resolution calculation, subgroup
restriction, Shapiro, and the all-coefficients/projective-resolution
cohomological-dimension criterion; Sharifi §§3.5–3.6 (PDF pp. 64–72) confirms
the Tor/Ext derived constructions and the group-(co)homology conventions.
The existing coverage rows name every harvested heading/result and retain their
item-specific dispositions, so no coverage-row change was needed.

**Changed scaffold record.** The two manifest item records above already
contain the B10-1 dependency repair in the current on-disk scaffold; this pass
confirms and retains those fields rather than duplicating the HA-8 claims.

**Checks.** `node tools/manifest-deps.mjs research/frontier-31a-batch-8.pages.json research/frontier-31a-batch-10.pages.json` reported 145 items and 0
errors.  `node tools/coverage-checklist.mjs --require-destination
research/frontier-31a-batch-10.coverage.json` reported 75 harvested results and
0 errors/warnings; `node tools/source-fetch-check.mjs --coverage
research/frontier-31a-batch-10.coverage.json` reported 3/3 fetch-verified
sources.  Whole-run `node tools/content-policy.mjs --manifest-only
research/frontier-31a-batch-*.pages.json` reported 906 scoped items and 0
errors/warnings.  `node tools/validate-plan.mjs research/plan-spec.json`
reported an acyclic declared order and no item-level cycles, forward references,
B-page dependencies, or unresolved IDs among the 746 itemized pages (with its
existing unrelated redundant-prerequisite warnings).
