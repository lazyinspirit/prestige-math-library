# Batch 7 Step 3a adjudication

Run: `hopf-hecke-unfinished-15-2026-10-15`; group: `batch-7`.

Review follows the generated level order. Scope owes exactly `refuter:7:1` and the two touched-theorem decisions; the other four listed items owe risk reviews only. Reader findings and page obligations are empty.

## Level 5: finite dual regular Hopf module

`lem-hh-finite-dual-regular-hopf-module-construction`: `refuter:7:1` is **confirmed_nonfatal**. Original Proof 1.1 suppresses the swap from the pairing on H* × H to its H × H* order. The supplier states V* ⊗ W* ≅ (V ⊗ W)*, so the displayed conclusion needs that identification. This is an immediately closable typing explanation, not a false coaction. Replaced only that existence/uniqueness explanation with the explicit tensor Σ e_i* ⊗ Σ (e_i)_1 f((e_i)_2). Evaluation at x,p gives Σ p(x_1)f(x_2); finite tensor separation proves uniqueness. Statement, hypotheses, dependencies and consumers are unchanged; repair confidence 1.

Independently checked current F1–F5 suppliers and the entire argument: action order, compatibility using S(h₂)h₃, both coaction axioms and both directions of the coinvariant/integral equivalence. No antipode inverse or arbitrary choice is used; zero functional and dimension-one cases work. Contract derivation 1.1 and complete risk review updated. No judge record existed. Source: [Saracco course notes](https://paolo.saracco.web.ulb.be/Material/2019-06-12_Structure%20Theorem_course%20notes.pdf), §3, Lemmas 3.4–3.5 and Theorem 3.6 with complete proof, printed pp.15–17; finite-dimensional specialization is valid over the stated field.

## Level 5: Hopf–Maschke

`thm-hh-hopf-maschke-integral-averaging`: **accepted_repair**, confidence 1. The reader correctly restricted F6 to the published preliminary lemma’s clause 4, and supplied the finite vector-space projection directly in Proof 2.2. I checked that supplier’s statement and complement proof (1.4, 2.4, 3.4, 4.1), the current module/submodule/semisimple definitions and the Hopf identities. The two directions are independent: 1.1→2.1 splits the augmentation under semisimplicity; 1.2→2.2→3.1 normalizes an integral, proves the Casimir identity, averages projections, and inherits complements for the dimension induction. Zero/full ideals, dimension one and arbitrary field characteristic cause no exception. Both current proof and contract match the reader-described repair; no further item edit is needed. Complete risk review recorded.

## Level 6: group and Taft examples

Both examples have complete risk reviews and require no decision or edit. For `ex-hh-finite-group-algebra-integrals-and-maschke`, both coefficient comparisons have the stated substitutions, the group-basis sum is nonzero even in dividing characteristic, and its counit gives exactly both directions of the characteristic criterion, including the trivial group. I read the group-Hopf supplier’s current construction and stated basis/counit interface.

For `ex-hh-taft-integrals-and-maschke-failure`, I read the current Taft PBW/Hopf construction, including the product formula, presentation, coproduct descent and antipode checks. The sign convention xg=ζ⁻¹gx agrees. The equations gt=t and xt=0 force constant coefficients only at degree N−1, where the displayed sum is nonzero. N>1 ensures its counit is zero; all left integrals are its multiples, so the Maschke conclusion is valid. N=2 is allowed; N=1 is explicitly excluded. No supplier defect was found.

## Level 7: integral dimensions and antipodes

`thm-hh-finite-integrals-are-one-dimensional-and-antipode-is-bijective`: **accepted_repair**, confidence 1. The reader’s F5/Proof 1.2 wording now exactly uses the evaluation algebra and coalgebra isomorphisms proved in finite duality 2.4 and 2.1. Multiplication and counit preservation transport the left-integral equations; no additional Hopf-isomorphism assertion is needed. Current raw item hash equals the frozen reader-post hash `4ed89f9a5a019f147565193f7d0109ec884aa9775b527aaa90172759ee67251a` (pre: `c02704c70b42fa79cc8602225e92684425c09fb5e7f64bdea135ff6867639bce`).

I checked every step and F1–F8, including the fundamental theorem’s inverse construction and its coinvariant-projection supplier. The two dimension equations give one-dimensional left integrals for H* and H**, then evaluation transports to H. Nonzero λ and μ and tensor contraction prove injectivity of S_H and S_H* separately; finite rank-nullity makes both bijective. Only then does 3.1 invoke the inverse to send left integrals to right integrals and use the reverse inclusion and dimensions. Division is of positive natural-number dimensions, so there is no field-characteristic restriction. Complete risk review recorded; no consumer interface changes.

## Level 8: Frobenius

`thm-hh-finite-hopf-algebras-are-frobenius` has a complete risk review and requires no decision or edit. The action isomorphism and now-proved bijectivity of S give Θ(b)(x)=λ(xb). Its inverse applied to u_i* uniquely supplies v_i. The identity λ(u_j v_i)=δ_ji gives both coordinate expansions, in their stated orders, and hence injectivity of Φ(a)(b)=λ(ab); equal dimensions give surjectivity. Both variables are nondegenerate, while multiplication gives associativity. No symmetry assertion is smuggled in. Zero λ and zero H are excluded; H=k works.

I independently read [Erasmus lecture notes](https://www.fc.up.pt/pessoas/clomp/Adana-lectures.pdf), Theorem 6.3 and its complete proof, printed p.16: the field and finite-dimensionality hypotheses, action, one-dimensional coinvariants and antipode-kernel argument match the local proof. That source leaves Hopf-module compatibility as an exercise; the local regular-dual lemma supplies its full proof, independently checked above. No external citation replaces a local prerequisite.

## Historical comparison and scope

Maschke current raw SHA-256 is exactly reader-post `7e2ad8143324ea189f55b3196a02e3c856851232bb15febd6b7ad36caea56fc5`, versus pre `260abb308b66984eb20ee97232d95ef138ab90e54a3012742f1987bdfe9499fa`. The integral-theorem hashes are recorded above. Pre/post contract hashes also differ for exactly these two reader-touched items; their manifest hashes do not change. The current source and contract implement precisely the repairs described in the immutable reader report, and independent mathematical review supports accepting them. I made no further changes to either touched item. The refuter’s finding concerns the unchanged reader-era Proof 1.1; this adjudication repairs it explicitly.

All item Statements/Definitions, manifests, stable IDs and page placements remain unchanged. No consumer repair or recursive impact review is triggered. No published prerequisite defect was found and no published source or published ledger was edited. No withdrawal is proposed. Outside consumers remain outside this dispatch. The frontier dependency ledger records this disposition.

## Decisions and closed defects

The decisions file is `research/hopf-hecke-unfinished-15-2026-10-15-alpha-batch-7-3a-decisions.json`, version 1, group `batch-7`, containing exactly three owed decisions:

- `refuter:7:1`: `confirmed_nonfatal`, closed row `hh15-b7-3a-dual-coaction-tensor-order`.
- `touched:7:thm-hh-hopf-maschke-integral-averaging`: `accepted_repair`, closed row `hh15-b7-3a-maschke-complement-citation`.
- `touched:7:thm-hh-finite-integrals-are-one-dimensional-and-antipode-is-bijective`: `accepted_repair`, closed row `hh15-b7-3a-bidual-citation`.

Each completed repair has confidence 1. All three rows are owned at `3a-adjudicate`, have disposition `fixed`, and reference the exact decision. No row was created for a mechanical failure.

## Validation and handoff

Actual commands and results:

- `node tools/risk-report.mjs research/hopf-hecke-unfinished-15-2026-10-15-batch-7.proof-contracts.json`: six CRITICAL items identified; zero errors. Each received the independent item-specific review above before moving higher in dependency order.
- The same command with `--require-reviewed`: zero errors, 9 items routed, all six required reviews complete.
- `node tools/tsx-run.mjs tools/reflow.mts items/lem-hh-finite-dual-regular-hopf-module-construction.md`: unchanged after the final proof edit.
- `node tools/tsx-run.mjs tools/precheck.mts` on the repaired lemma and two reader-touched theorems: 3 checked, 0 failing.
- `node tools/rendercheck.mjs` on those same three paths: 3 files pass, including actual KaTeX and YAML parsing.
- `node tools/proof-contract.mjs research/hopf-hecke-unfinished-15-2026-10-15-batch-7.proof-contracts.json --strict`: 9/9 checked, 0 errors, 0 warnings.
- `node tools/defect-ledger.mjs append --file /tmp/hh15-b7-3a-defect-rows.json`: appended the three closed rows and regenerated the derived ledger view.
- `node tools/defect-ledger.mjs validate --run hopf-hecke-unfinished-15-2026-10-15`: 10 run rows checked, 0 errors.
- Final batched `node tools/proof-layout.mjs items/lem-hh-finite-dual-regular-hopf-module-construction.md items/thm-hh-hopf-maschke-integral-averaging.md items/thm-hh-finite-integrals-are-one-dimensional-and-antipode-is-bijective.md`: 3 items, 13 steps, 0 defects. No item edit or formatter followed this command.

No unresolved mathematical defect, published finding, missing prerequisite or owner decision remains in this dispatched batch. The live `.autopilot` status and recent Git log confirm this is the active run; its unrelated batch-10 split retry blocker is outside this dispatch and was not altered. No judge, stamp, certification, agent dispatch or gate battery was initiated. The engine must stamp current decision hashes and run its ordinary gates after collection.

