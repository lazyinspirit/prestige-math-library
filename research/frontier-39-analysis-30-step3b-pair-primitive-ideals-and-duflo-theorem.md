# Step 3b pair report — `primitive-ideals-and-duflo-theorem`

- **Run:** `frontier-39-analysis-30` (batch 24) · **role:** alpha-high, Step 3b pair author
- **A page:** `primitive-ideals-and-duflo-theorem` (510.019, `lie-theory`) — created at
  `library/lie-theory/primitive-ideals-and-duflo-theorem.md`, 15 items
- **B page:** `primitive-ideals-and-duflo-theorem-examples` (510.02) — created at
  `library/lie-theory/primitive-ideals-and-duflo-theorem-examples.md`, 5 examples/counterexamples
- **Dispatch label:** `step3b-pair-primitive-ideals-and-duflo-theorem-55955441c11722f8`
- **Owned ids:** the 20 scaffold ids of batch 24 (unchanged ids, kinds, titles and statements in the
  manifest; only `deps` rows were extended where the completed proofs needed published suppliers).
- **Artifacts written:** the 20 item files; both page files; the batch proof contracts
  `research/frontier-39-analysis-30-batch-24.proof-contracts.json` (142 citation contracts,
  20/20 strict); refreshed batch coverage (51 harvest rows, 9 stamped sources incl. a new Vogan row);
  the unchanged empty cross-batch input
  `research/frontier-39-analysis-30-batch-24.cross-batch-dependencies.json`; 20 item decisions.

## Inventory and status

All 20 items are **authored in full and closed** (`step3-decisions.mjs` `accept`/`repaired`,
confidence 1, item deps examined). Dependency levels recomputed after every dependency edit; no
in-run item-to-item edges were introduced, so all levels and the batch order are unchanged.

| id | level | proof | decision |
|---|---|---|---|
| def-annihilator-ideal-of-a-lie-algebra-module | 0 | n/a | accept |
| def-associated-graded-variety-of-a-two-sided-ideal | 0 | n/a | **repaired** (Remark terminology) |
| def-central-reduction-of-the-enveloping-algebra | 0 | n/a | accept |
| lem-adjoint-action-preserves-the-associated-graded-of-a-two-sided-ideal | 0 | 5 steps | accept |
| lem-dixmiers-lemma-for-countable-dimensional-algebras | 0 | 8 steps | **repaired** (counting step) |
| lem-every-central-character-of-the-enveloping-algebra-arises-from-a-weight | 0 | 7 steps, AC | **repaired** (contraction equality made explicit) |
| def-primitive-ideal-of-an-enveloping-algebra | 1 | n/a | accept |
| lem-the-central-reduction-of-usl2-is-simple-away-from-finite-dimensional-characters | 1 | 12 steps, AC | **repaired** (proof rebuilt) |
| prop-associated-variety-of-a-primitive-ideal-is-conical-and-g-invariant | 1 | 3 steps | **repaired** (owner receipt refreshed) |
| prop-verma-annihilator-contains-the-central-character-ideal | 1 | 4 steps | accept |
| ex-associated-variety-of-a-finite-dimensional-simple-annihilator | 1 | 4 steps | **repaired** (invalid strategy; full claim retained) |
| prop-a-primitive-ideal-determines-a-central-character | 2 | 4 steps | accept |
| prop-annihilators-of-simple-highest-weight-modules-are-primitive | 2 | 3 steps | accept |
| prop-primitive-ideals-are-prime-in-the-noncommutative-sense | 2 | 4 steps | accept |
| cor-primitive-ideals-are-partitioned-by-dot-orbit-central-character | 3 | 4 steps, AC | accept |
| rem-highest-weights-can-have-the-same-primitive-ideal | 3 | n/a | accept |
| cex-an-intersection-of-two-primitive-ideals-need-not-be-primitive | 3 | 4 steps | **repaired** (dimension claim) |
| cex-the-central-character-does-not-determine-the-primitive-ideal | 3 | 4 steps, AC | accept |
| ex-annihilator-of-the-trivial-sl2-module | 3 | 5 steps, AC | **repaired** (AC carried) |
| ex-primitive-ideals-of-usl2-at-a-generic-central-character | 3 | 4 steps, AC | accept |

## Mathematical checkpoints

### Level 0

- **def-annihilator-ideal-of-a-lie-algebra-module.** Annihilator = kernel of the unital action;
  two-sided ideal by the kernel theorem; equals the intersection of the pointwise left ideals;
  the quotient acts faithfully. Sources Etingof §25.1 pp.123–124, Barbasch §2.1. deps unchanged.
- **def-associated-graded-variety-of-a-two-sided-ideal.** `gr I` is a graded ideal; `V(I)` is the
  zero locus of `gr I` in `g*` via the PBW identification `gr U(g) = S(g) = C[g*]`; basis
  independence and the `I = 0`, `I = U(g)` boundaries are recorded. Sources Barbasch §3.3,
  Fadeev Defs 2.16–2.18, Vogan §3 (Vogan row now stamped — record repair done). deps unchanged.
- **def-central-reduction-of-the-enveloping-algebra.** `U_chi = U(g)/U(g) ker chi`; central
  elements become scalars; the three equivalent descriptions of `chi`-modules. Sources Etingof
  §14.1–14.2 pp.76–77 (the stale §22.1 locator was replaced in coverage), Barbasch §2.1.
- **lem-adjoint-action-preserves-the-associated-graded-of-a-two-sided-ideal.** Five steps:
  `gr I` is a graded ideal; `ad_x` is a filtration-preserving derivation mapping `I` into `I`;
  the induced graded derivation restricts to `ad_x` on `g` and therefore equals `D_x`;
  `D_x(gr I) ⊆ gr I` and `sigma(ad_x u) = D_x(sigma(u))`. deps unchanged.
- **lem-dixmiers-lemma-for-countable-dimensional-algebras.** Complete proof: Schur/division ring;
  `x` transcendental; `C(t)` embeds in `D`; the `(x-a)^{-1}` are `C`-independent; the evaluation
  map `D → M` is injective so `M` contains an uncountable independent set; contradiction with the
  counting lemma; the centre acts through a character; PBW gives countable dimension for `U(g)`.
  **Repair:** the scaffold's step "a countable union of finite-dimensional subspaces cannot contain
  an uncountable independent set" is not available choice-free as written — the general
  "countable union of finite sets is countable" statement implies `AC_ω(fin)`. The authored proof
  replaces it with an explicit canonical count (greedy ordered basis of each `W_n`, lexicographic
  order of coefficient vectors, injection `S → N×N`), which is choice-free. deps added:
  `thm-the-complex-numbers-are-algebraically-closed`, `def-complex-numbers-and-arithmetic`,
  `thm-product-of-countable`, `cor-independent-set-is-no-larger-than-a-finite-spanning-set`,
  `thm-n-cross-n-countable`, `lem-subset-of-countable`.
- **lem-every-central-character-of-the-enveloping-algebra-arises-from-a-weight.** Under AC:
  `psi = chi ∘ HC^{-1}`; Nakayama/determinant trick gives `(ker psi)S(h) ≠ S(h)`; a maximal ideal
  above it gives a finite-dimensional field extension of `C`, hence `C`; evaluation at a weight
  `lambda`; `chi = chi_{lambda-rho}`; maximal ideals of `Z` and the `h*/W` bijection. deps added:
  `def-harish-chandra-projection`, `thm-quotient-is-field-iff-ideal-maximal`,
  `def-prime-and-maximal-ideals`, `thm-the-complex-numbers-are-algebraically-closed`.

### Levels 1–3

- **def-primitive-ideal-of-an-enveloping-algebra.** Definition with properness/faithfulness remarks;
  no highest-weight hypothesis. deps unchanged.
- **lem-the-central-reduction-of-usl2-is-simple-away-from-finite-dimensional-characters.**
  **Rebuilt and re-derived independently.** Normalized `Omega = ef + fe + ½h²` verified central and
  equal to `4C` for the library Casimir `C` (Killing form `B(h,h)=8`, `B(e,f)=4` computed locally).
  The center generator is now proved from PBW symbols: `h` is checked to be Cartan, its Weyl group
  acts by sign, Chevalley restriction gives `S(sl2)^sl2 = C[sigma(C)]`, and the graded-adjoint
  supplier makes every central symbol invariant; subtracting the matching power of `C` lowers
  degree and proves `Z(U(sl2)) = C[Omega]`. This repairs the unsupported inference that a
  nonconstant Casimir in a polynomial center must itself generate that center. The root argument
  now cites algebraic closedness when it concludes a polynomial without roots is constant, and
  Step 10.1 explicitly extracts a least-dimensional simple submodule to prove the converse for
  arbitrary finite-dimensional modules.
  `gr U_chi = C[e,f,h]/(h²+4ef)` with Hilbert function `2d+1`; normal-form basis, infinite
  dimension and `ad_h`-weights; `J ∩ C[h] ≠ 0` and its generator `P`; the two commutator
  divisibilities; root constraints via the last members of the `±2` chains; **all three cases**
  (two roots in different classes mod 2; the double root `c = -½`; two congruent roots — the
  finite-dimensional values `c = n(n+2)/2`, where the annihilator of `L(n)` exhibits a nonzero
  proper ideal). The final consequences (faithfulness, simplicity of `M(lambda)`,
  `Ann M(lambda) = U(g) ker chi`) are proved. Sources Gaddis §2, Block Intro and §5.2, Etingof
  §24.2. Dependencies now include the graded-adjoint lemma, Chevalley restriction, the Cartan,
  normalizer, root and reflection definitions, and complex algebraic closedness; the unsupported
  general-center dependency was removed. The scaffold's root/order chase needed the chain form,
  and its naive order-of-vanishing argument would have failed at finite-dimensional values.
- **prop-associated-variety-of-a-primitive-ideal-is-conical-and-g-invariant.** Closed cone from
  gradedness of `gr I` (homogeneity; the `I = U(g)` vacuous case handled); coadjoint invariance
  from `D_x(gr I) ⊆ gr I`: the function `t ↦ f(xi ∘ e^{-t ad_x})` has all derivatives at `0`
  equal to `±(D_x^k f)(xi) = 0` and is entire, hence vanishes identically. Three steps.
  The analytic input is recorded explicitly in [F3]; see "Open obligations".
- **prop-verma-annihilator-contains-the-central-character-ideal.** Four steps: central elements act
  on every cyclic highest-weight module by `pr(z)(lambda)`; `ker chi_lambda` annihilates; the
  generated two-sided ideal lies in the annihilator; `Ann M(lambda) ⊆ Ann L(lambda) = I(lambda)`
  by the unique simple quotient. deps unchanged.
- **ex-associated-variety-of-a-finite-dimensional-simple-annihilator.** **Owner adjudication:**
  retain the full scaffold statement, including that `gr I(lambda)` contains every symmetric
  tensor of sufficiently high degree. It is true. For `d = dim L(lambda)`, Cayley–Hamilton gives
  `y^d ∈ gr_d I(lambda)` for every `y ∈ g`; polarization over `C` spans `S^d(g)`, and the ideal
  property gives `S^k(g) ⊆ gr I(lambda)` for every `k ≥ d`. The `L(1)` objection confused `I`
  with `gr I`: although `h^n ∉ I(1)` for `n ≥ 1`, `h²−1 ∈ I(1)`, hence `h² ∈ gr_2 I(1)`.
  The actual defect was only the manifest strategy's invalid inference
  `F_n U(g) ⊆ I(lambda)` from finite codimension. The manifest strategy and item proof now use
  Cayley–Hamilton plus polarization; the item explicitly proves the high-degree clause. No
  statement, dependency, or Step 3a scope change was needed. Owner `repaired` item receipt recorded
  on the corrected proof hash (`fb3b7fc5…`); the run-wide final check will recheck its transitive
  input hash.
- **prop-a-primitive-ideal-determines-a-central-character.** Dixmier gives `chi_I`;
  `I ∩ Z = ker chi_I` by the two inclusions (`M ≠ 0`); maximality from `Z/ker ≅ C`; `U(g) ker chi_I ⊆ I`.
  deps unchanged.
- **prop-annihilators-of-simple-highest-weight-modules-are-primitive.** `L(lambda)` simple ⇒ its
  annihilator is primitive; `Ann M ⊆ Ann L`; equality when `M(lambda)` is simple. deps unchanged.
- **prop-primitive-ideals-are-prime-in-the-noncommutative-sense.** If `AB ⊆ I` and `B ⊄ I` then
  `BM ≠ 0` is a nonzero submodule of the simple `M`, so `BM = M` and
  `AM = (AB)M = 0`. Equivalence with `U/I` prime recorded. deps unchanged.
- **cor-primitive-ideals-are-partitioned-by-dot-orbit-central-character.** Under AC: uniqueness of
  `chi_I` from its kernel; parametrization `chi_I = chi_lambda`; the orbit theorem makes the dot
  orbit independent of `lambda`; the stated equivalences. deps unchanged.
- **rem-highest-weights-can-have-the-same-primitive-ideal.** Recorded boundary: no injectivity;
  the `sl2` witness `Ann L(0) ≠ Ann L(-2)` over the trivial central character; Joseph/KL fibre
  theory named as out of scope. deps unchanged.
- **cex-an-intersection-of-two-primitive-ideals-need-not-be-primitive.** `I_0 = Ann L(0)`,
  `I_1 = Ann L(1)` are primitive; their central intersections are distinct maximal ideals, whose
  intersection is not maximal, so `I_0 ∩ I_1` is not primitive. **Correction:** the scaffold
  called `L(1)` "the three-dimensional simple module"; it is the two-dimensional standard module
  (the three-dimensional one is `L(2)`). The source item and batch-24 manifest now both identify
  `L(1)` as the two-dimensional standard module; this manifest sync changes only its stale
  statement snapshot, and no direct consumer lies outside batch 24. The mathematical claim and
  pair inventory are unchanged.
  Choice-free.
- **cex-the-central-character-does-not-determine-the-primitive-ideal.** Under AC, for `n ≥ 0`:
  `I(n) = Ann L(n)` and `J(n) = Ann M(-n-2)` are distinct primitive ideals with the same central
  character. Distinctness by the finite-dimensionality contradiction
  (`dim M(-n-2) ≤ dim U/I(n) < ∞`); `M(-n-2)` is simple by the antidominant criterion; equality of
  central characters from the Casimir values. deps added: the `sl2` central-reduction lemma
  (supplies the normalized Casimir and `Z = C[Omega]`).
- **ex-annihilator-of-the-trivial-sl2-module.** Under AC: `Ann C = U(g)g = (e,f,h)`;
  `Ann C ∩ Z = ker chi_0 = (Omega)`; `(Omega)U(g)` annihilates `M(-2)` (central character `chi_0`)
  but `h` acts on the highest vector of `M(-2)` by `-2`, so `h ∉ (Omega)U(g)`: the central ideal is
  strictly smaller. **Repaired assumption:** the scaffold statement silently used
  `Z(U(g)) = C[Omega]`, which is published only under AC; the item now declares AC and carries it.
  The B-page dependence on `ex-sl2-reducible-and-generic-verma-modules` was replaced by the A-page
  criterion `cor-verma-irreducibility-criterion-from-shapovalov-determinants`.
- **ex-primitive-ideals-of-usl2-at-a-generic-central-character.** Under AC: the simplicity lemma
  makes `U_chi` simple; any primitive `I` over `chi` has `U(g) ker chi ⊆ I` with simple image,
  hence `I = U(g) ker chi`; every `M(lambda)` with `chi_lambda = chi` is simple with that
  annihilator. deps added: `def-left-right-and-two-sided-ideal`.

## Choice tracking

- Choice-free: the annihilator, primeness, Dixmier, central-reduction, Verma-inclusion and
  associated-variety items (the last uses only finite-dimensional exponential/entire facts, no
  Choice); `cex-an-intersection`.
- Carrying AC explicitly: `lem-every-central-character...`, `cor-primitive-ideals-are-partitioned...`,
  `lem-the-central-reduction-of-usl2...`, `ex-primitive-ideals...`, `cex-the-central-character...`
  (through `cor-central-characters-are-dot-weyl-orbits` / the `sl2` lemma), and — newly —
  `ex-annihilator-of-the-trivial-sl2-module`, because its statement's `Z(U(g)) = C[Omega]` is
  published only under AC. `def-axiom-of-choice` is in the deps of each AC item.
- The generic `sl2` example inherits AC from the `sl2` lemma, as scaffolded.

## Checks actually run (results)

| check | command (scope) | result |
|---|---|---|
| precheck | `tools/tsx-run.mjs tools/precheck.mts` on all 20 items | 15 proof-bearing items checked, 0 failing |
| rendercheck | `tools/rendercheck.mjs` on 20 items + 2 pages | OK (22 files) |
| proof-layout | `tools/proof-layout.mjs` on all 20 items | 20 items, 70 steps, 0 defects |
| depcheck | `tools/depcheck.mjs --items-file` (20-item focus) | 0 errors touching this pair |
| item levels | `tools/item-dependency-levels.mjs check --run frontier-39-analysis-30` | no batch-24 error (remaining errors belong to other in-flight pairs) |
| content policy | `tools/content-policy.mjs` on the batch manifest (item mode) | 20 scoped, 0 errors, 0 warnings |
| manifest deps | `tools/manifest-deps.mjs` on the batch manifest | 20 items, 0 normalized, 0 errors |
| validate-plan | `tools/validate-plan.mjs research/plan-spec.json` | OK, no cycles/forward refs/unresolved ids |
| proof contracts | `tools/proof-contract.mjs research/frontier-39-analysis-30-batch-24.proof-contracts.json --strict` | 20/20 items, 0 errors, 0 warnings |
| coverage | `tools/coverage-checklist.mjs research/frontier-39-analysis-30-batch-24.coverage.json` | 2 pages, 51 harvest rows, 0 errors, 0 warnings |
| source fetch | `tools/source-fetch-check.mjs --coverage research/frontier-39-analysis-30-batch-24.coverage.json` | 9/9 fetch-verified, 9/9 resolved |
| ledger | `tools/frontier-dependency-ledger.mjs refresh --run frontier-39-analysis-30` | refreshed; batch 24 present |
| decisions | `tools/step3-decisions.mjs record-item` × 20, confidence 1 | all closed; 0 open items in `check --phase final` for this pair |
| pre-splice | `tools/splice-plan.mjs --run frontier-39-analysis-30 --batch 24 --dry-run` | 2 pages spliced, 20 new items, 0 refusals; plan `requires` match the manifest |

**Final re-verification (2026-10-05).** After the last item/contract edits, every check in the
table was re-run once more on the frozen files: precheck 0 failing, rendercheck OK (22 files),
proof-layout 0 defects (70 steps), strict proof contracts 20/20 with 0 errors/warnings,
content-policy 0 errors/warnings, manifest-deps 0 errors, coverage-checklist 0 errors/0 warnings,
source-fetch 9/9, validate-plan OK, depcheck focus with no diagnostic naming any of the 20 owned
ids, item-dependency-levels with no batch-24 error, ledger refreshed with batch 24 reviewed and
zero edges (the input file is the valid empty `[]`), and a direct `itemDecision` probe returning
`closed: true` for 20/20 owned ids, so no decision receipt is stale.

## Record repairs made

1. **Coverage rows.** Ten new per-item rows were added to
   `research/frontier-39-analysis-30-batch-24.coverage.json` (annihilator, highest-weight
   annihilator, central reduction, Verma inclusion, dot-orbit partition, the intersection
   counterexample as `inline`) and a new stamped Vogan source row with four `included` rows
   (associated-variety definition, adjoint-action lemma, conical-invariant proposition and the
   finite-dimensional example). Coverage now reports 0 errors and 0 warnings.
2. **Source stamps.** The Vogan CMS paper was fetched and stamped (1 new stamp; 9/9 verified).
3. **Stale locators.** The central-reduction/character material now carries the verified
   Etingof §14.1–14.2 pp.76–77 locator in the coverage rows (the design's §18/§22 pointers remain
   stale in the design file, for Step 4).

## Open obligations and findings for Steps 4–8

1. **Resolved owner decision—associated variety.** The approved statement is retained and its
   proof strategy is repaired as described above. The owner receipt is current for the conical
   invariance proposition and finite-dimensional example; both are included in the 20/20 current
   hash closure below.
2. **Scaffold proof-strategy defects recorded in items (no manifest mismatch):**
  the Dixmier counting step is not choice-free as scaffolded (replaced by an explicit canonical
  count); the `sl2` central-reduction scaffold's center-generator inference was unsupported, its
  root/order chase needed the chain form and three-case split, its rootless-polynomial conclusion
  lacked an algebraic-closedness citation, and its finite-dimensional converse had to pass through
  a simple submodule (all repaired proof-only); the intersection counterexample's
  "three-dimensional `L(1)`" was corrected to two-dimensional.
3. **Resolved owner decision—AC scope.** Retain the AC-scoped
   `ex-annihilator-of-the-trivial-sl2-module` as authored. Its statement already declares AC, and
   its proof uses the general center theorem that assumes AC. Proving the same center description
   choice-free would require a local `U(sl2)` center calculation, a genuine proof rebuild; the
   current approved claim is sound and needs no amendment.
4. **Resolved owner decision—analytic closure.** Retain the full exponential/entire-function
   argument in `prop-associated-variety-of-a-primitive-ideal-is-conical-and-g-invariant`. The
   item now gives the finite-dimensional norm-majorant proof and declares published exponential-
   series, power-series, chain-rule and global-Taylor suppliers. They already lie in the page's
   transitive `requires` closure, so no new page edge is needed. The analytic proof is preserved;
   no frontier-40 or run-local draft dependency is introduced.
5. **Plan/design records.** `plan-spec.json` still has empty item inventories for both pages
   (Step 4 splice fills them from the batch manifest). The RL-10/AG design locator defects recorded
   by Step 3a remain in the design files (corrected only in coverage); neither is load-bearing.
6. **Page registration.** Both draft pages and all 20 items are registered in the manifest, the
   pages, the contracts and coverage. The shared `library/lie-theory/_pathway.md` was intentionally
   not edited (draft pages are not pathway entries; the pathway is shared and Step 4 owns splices).
7. **Duflo boundary preserved.** No item states, consumes or depends on Duflo surjectivity, the
   Kazhdan–Lusztig/Joseph fibre theory or the localisation architecture; the two allusions
   (`rem-highest-weights-can-have-the-same-primitive-ideal`, the generic-character example) assert
   only self-contained `sl2` content.


## Current-hash Step 3b closure (2026-10-05)

B24 owner scope is closed at `4815e5ca973f4fd663d93ea78d7c8854234490a9db4bf07ac5250283e7a121b6`. All 20 item receipts are current and closed: 18 reviewer receipts and 2 owner receipts; no B24 Step 3b blocker remains. The following hashes are transitive item hashes computed from the current manifest, item sources, and dependencies.

| Item | Current transitive hash | Decision | Receipt |
|---|---|---|---|
| def-annihilator-ideal-of-a-lie-algebra-module | 4db0448576732af1b389609b8a977d2f2008ce29fddc1c079882cc8a628ea7d0 | accept | review |
| def-associated-graded-variety-of-a-two-sided-ideal | 73371d4ff9305022f041ad799e41fd09a0ddad6f16a747a753ab2367ece2d5b7 | repaired | review |
| def-central-reduction-of-the-enveloping-algebra | 5ccb37de4793950f111f80b9e2cfc8dd5a3b02bc31c582eda27664909aa804ff | repaired | review |
| lem-adjoint-action-preserves-the-associated-graded-of-a-two-sided-ideal | a42b66757234d030723fb4eee98305c9111a224c755dbaee054294cff3e1f074 | repaired | review |
| lem-dixmiers-lemma-for-countable-dimensional-algebras | 3dbb3475c03bac7362c3311ea9b517404b198300df300e758b0415a7c1b9e389 | accept | review |
| lem-every-central-character-of-the-enveloping-algebra-arises-from-a-weight | 77e29ff4a46e92be7ab6ffd5d853bfe98f4eacffeca3e5c61e8d06dc6e303718 | repaired | review |
| def-primitive-ideal-of-an-enveloping-algebra | 596215ba8197635a19aef5e976c7306ed8eafa431a250b0b4c91f7b7283ce0e7 | accept | review |
| lem-the-central-reduction-of-usl2-is-simple-away-from-finite-dimensional-characters | 9f295fdee124731e1fbaa96e65ce28337f9d1244d0865ef3841927cfb4bf333c | repaired | review |
| prop-associated-variety-of-a-primitive-ideal-is-conical-and-g-invariant | 22a504353f3fb85e140a69d35e6d73e851e26b8992e70f7a38c210bf27513472 | repaired | owner |
| prop-verma-annihilator-contains-the-central-character-ideal | c4ab6b63e151e5f5099bc81326ccc8cba63c847b3a9d72a988f2c45b426a2498 | accept | review |
| ex-associated-variety-of-a-finite-dimensional-simple-annihilator | 739c8c8f4b8c2c9dc997afef3a879b6fe62353d830ccdd503bfe371661a98a56 | repaired | owner |
| prop-a-primitive-ideal-determines-a-central-character | 6af1ff38fbb7be5f131f3d33d96e8ad7953bf86f8919e94be0509a14b5278552 | accept | review |
| prop-annihilators-of-simple-highest-weight-modules-are-primitive | fa5e6a2c2324fe8f03d48e4ebbc8c262c455c2a17d5e6d41d1dffabc3f129278 | accept | review |
| prop-primitive-ideals-are-prime-in-the-noncommutative-sense | 553629d3f7260ce4e9821d1a49f04c17a86d91884df6031ac62c968c965d61f4 | accept | review |
| cor-primitive-ideals-are-partitioned-by-dot-orbit-central-character | 01ae4a65931c8061d1e7d594083d75d78776b7052aa6ccf5510da6c134ddc23d | accept | review |
| rem-highest-weights-can-have-the-same-primitive-ideal | 100ea0b706b861b9ac182198a16bbe4d52087fb422de273c08b816ad465eef81 | accept | review |
| cex-an-intersection-of-two-primitive-ideals-need-not-be-primitive | 2f3fee1b4630623a63ee1ed7f137593db1ee4ae7254c6dd660ca10861b0dc5d4 | accept | review |
| cex-the-central-character-does-not-determine-the-primitive-ideal | 9bfd296c6bb8dcc6de4521774198b37c56007ce2cd3d1fc73f9fb3fe789c1fbe | accept | review |
| ex-annihilator-of-the-trivial-sl2-module | eae4a9ed4790099cde1bf676c9308db9c46115c8eede4b9f3ae4deb36c2387c5 | accept | review |
| ex-primitive-ideals-of-usl2-at-a-generic-central-character | f97dd6e2d1c882e22fac855e34f1f950c876e1b965f1bdc52185787633a6d98c | accept | review |

Latest focused checks after the proof repairs: `node tools/proof-layout.mjs` on the three changed items reports 3 items, 19 steps, 0 defects; strict B24 proof-contract validation reports 20/20 items, 0 errors and 0 warnings. No tests or workflow gates were run in this lane.
