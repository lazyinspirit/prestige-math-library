# Batch 44 Step 3a adjudication

Run: `non-ml-math-remaining-81-2026-10-18`; group: `batch-44`.

Scope: the sole JSON obligation is `refuter:44:1`; no touched/page/reader obligation is owed. The pre/post snapshots have identical item, contract and page fingerprints. The reader made no repairs. Four routed risk reviews are processed in generated dependency order. The live disk status confirms the run is active at Step 3a. No judge, stamp or gate cycle is initiated.

## Level 1 — derived BV bracket

`thm-bv-derived-bracket-is-odd-poisson`: independent current proof review complete, risk review complete. Checked its BV Definition, every operator identity and parity in steps 1.1–4.1. T is multiplication by its value on the unit; H_a is the bracket derivation; Delta compatibility and [H_a,H_b]=-H_{a,b} give odd Jacobi. Zero/unit and arbitrary integer grading cases work. No AC or finite-dimensionality is used. The first-slot derivation formula follows by odd skew and the second-slot rule.

Sources read: [Getzler §1 Proposition 1.2, PDF pp.5–6](https://arxiv.org/pdf/hep-th/9212043), [Seidel Lecture12 equations12.8–12.13, printed/PDF p.119](https://math.mit.edu/~seidel/texts/937-lecture-notes.pdf), and [Kosmann-Schwarzbach–Monterde §1.1 equation(1), arXiv PDF p.4, §1.3 equation(6), p.5](https://arxiv.org/pdf/math/0002209). Their degree/parity conventions were compared to the local +1 formula rather than silently imported. Additional routed-risk decision: confirmed citation-inaccurate defect, repaired with confidence1; the source metadata had called equation12.7 a section and mismatched the linked PDFs’ pages. Only those locators changed; no mathematical carrier rewrite, claim/dependency/manifest/provenance change, or consumer propagation is needed. Ledger row: `nm81-b44-3a-bv-source-locators`.

Checkpoint: BV theorem risk review completed before the next level1 obligation.

## Level 1 — BRST square zero

`thm-classical-lie-action-brst-differential-squares-zero`: every step reviewed and risk complete. Dependencies opened: `def-classical-lie-action-brst-complex`, the published `def-chevalley-eilenberg-cochains`, `def-chevalley-eilenberg-differential`, `thm-the-chevalley-eilenberg-differential-squares-to-zero`, `def-lie-algebra-over-a-field`, and `def-representation-of-a-lie-algebra`. Exact zero-based signs and module domains agree. The supplier expansion partitions all terms into action/action and created-bracket action, mixed terms, disjoint brackets and nested Jacobi terms with the required cancellations. Its generality includes infinite-dimensional algebras and modules. Negative and zero cochain spaces give zero composites; degree0 uses the representation identity. The image/kernel quotient is valid also for n=0 with C^-1=0. No AC is used.

Additional routed-risk decision: confirmed citation-inaccurate printed-page locator, corrected with confidence1 to Weibel Corollary7.7.3, printed240/PDF25, retaining the accurate Exercise7.7.1 square-zero caveat. The linked PDF image was inspected: printed240 contains the actual two-sum cochain formula. The refuter’s proposed printed241 correction is itself inaccurate; the report is evidence, not a verdict. Ledger row: `nm81-b44-3a-brst-source-locator`. Statement, proof, deps and provenance are unchanged; no material rewrite or consumer propagation.

Checkpoint: BRST theorem risk review completed before closing the counterexample.

## Level 1 — counterexample, refuter:44:1

Verdict `confirmed_fatal`, route `flagged`, closed row `nm81-b44-3a-counterexample-source-locator`, repair_confidence1. The pre-edit raw item hash `9dcbe17b483dbc2f6d81a26b66da29f00c6851f0855186b2a57d87ba0d7f740b` matches both snapshots. The immutable routed observation `00e6d4fb4aa488d230f70cb5cd767fc018ec10c7da955896776d72fb40e0740b` is a separate structured-carrier fingerprint, not a raw-byte hash. No unbound historical disposition is claimed or needed. The bibliographic claim is inaccurate, even though the local mathematics is sound. Corrected the locator to Corollary7.7.3, printed240/PDF25, specializing the general cochain formula to degree0. Printed239/PDF23 was wrong; the refuter’s alternative printed241 was also wrong. PDF23 is actually printed238 with Definition7.7.1 for chains; printed239 is PDF24. I inspected the printed240/PDF25 image and both terms of the cochain formula.

Reviewed the complete counterexample: both assigned operators are derivations, their commutator is partial_y, the Lie bracket is zero, and evaluation at y gives d²y(u,v)=1. This refutes exactly the asserted universal linear-action claim while making clear the action is inadmissible for the BRST theorem. Source repair alone is needed; no mathematical narrowing, material rewrite, or consumer propagation. The source remains literature context while F1 gives the actual formula used. Closed obligation before moving higher.

## Level 2 — dilation cohomology

`ex-dilation-action-classical-brst-cohomology`: reviewed_no_defect in this routed risk review (no new JSON obligation). Read all four Verification steps and the actual BRST suppliers. A single derivation gives an abelian one-dimensional representation; exterior powers leave only C0 and C1. The finite coefficient formula x f′ has kernel constants and image x C[x]; preimages x^r/r establish surjectivity onto that ideal over C. Evaluation at0 identifies the H1 quotient with C, while C^-1=0 gives H0=C and all higher cochains vanish. This includes zero/constant polynomials and imposes no completion or AC. The broad Weibel reference range includes Corollary7.7.3 at printed240/PDF25. Risk review complete before the level3 polynomial BV example and its CME suppliers.

## Level 3 — polynomial BV/CME example

`ex-one-variable-bv-algebra-solves-classical-master-equation`: reviewed_no_defect in the routed risk review (no new JSON obligation), risk complete. Read all Verification steps and the actual four dependencies, including the full CME implication proof. The latter uses 2 d_S²(x)={{S,S},x} and invertibility of2; it makes no converse claim. The formal master-equation Definition uses only finite Cauchy sums and its stated normalization is algebraically consistent.

For the example, the quotient has unique f+theta g form. All four parity products verify the signed partial_theta Leibniz rule, including the odd/odd zero product. Delta has degree+1, kills1 and squares to zero; its displayed second commutator is multiplication, so every third commutator vanishes. Direct substitution gives {f,theta g}=f′g, {S,S}=0 for S=x³/3, and d_S(f+theta g)=x²g; the image has no theta and is killed. Unit, zero, negative degree, quotient relation, and linear extension cases work without AC or geometric nondegeneracy. No edit or new mathematical defect.

Sources: Getzler Proposition1.2 PDF5–6 and [Schwarz opening coordinate model, equation(1), PDF2](https://arxiv.org/pdf/hep-th/9205088); Schwarz equation(7), PDF3, was also read for the coordinate BV operator context. The example supplies its own algebraic +1 conventions and requires no analytic or integration theorem.

## Outside routed-carrier alerts

The unchanged unrouted dependency `def-bv-algebra-and-degree-plus-one-bracket` has the same inaccurate Seidel section/PDF and KSM PDF locators diagnosed on the routed theorem: use Seidel equations12.8–12.13 at printed/PDF119 and KSM §1.1 equation(1) arXiv PDF4. The unchanged unrouted `thm-classical-master-equation-defines-square-zero-differential` cites KSM §1.1 at PDF1–2 although that section is PDF4. These are source-metadata owner maintenance alerts; their defining/proved mathematics was read and is sound. No edits to those unrouted carriers or owner acceptance claimed. `def-classical-and-formal-quantum-master-equations` also calls Proposition1.6 material §1.3: in the linked arXiv version it is §1.4 PDF7; §2.2’s QME identity is PDF10, beyond its stated PDF4–9 range. Owner should correct the locator to §1.4 Proposition1.6 PDF7 and §2.2 equations22–23 PDF10. The algebraic normalization itself is correct. These alerts do not require a new mathematical prerequisite or block the reviewed proofs.

## Published suppliers and consumer ledger

Published `def-chevalley-eilenberg-cochains` and `def-chevalley-eilenberg-differential` cite a nonexistent Definition7.7.2 and chain-page locators for the cochain construction. Independently verified that the actual Hom/exterior definition and both differential sums are sound and match the owned BRST uses. Recorded each as A-P with exact raw hash, suppliers, consumer loci, nonfatal-recorded bounded disposition, owner repair strategy (Corollary7.7.3, printed240/PDF25), and a distinct deduplicated classification-index row. Acquired `research/.published-consumer-ledger.lock`, reread/merged, then released only my own lock. Published carriers were not edited. This is bibliography maintenance, not an unresolved mathematical prerequisite.

Maintained the owned-consumer note in `briefs/tasks/frontier-dependency-ledger.md`. The two existing page-context cross-batch records are preserved; no scientific supplier definition or statement changed and no withdrawal is proposed or removed. The existing page route is not an actual logical dependency of any reviewed item; no new review of unrelated PA12/PA10 proofs or source certification is claimed.

## Final local checks and disposition

- Initial `node tools/risk-report.mjs research/non-ml-math-remaining-81-2026-10-18-batch-44.proof-contracts.json`: 0 errors, four HIGH/CRITICAL reviews required (six total proof-bearing items routed by the structural report).
- Reflow: `node tools/tsx-run.mjs tools/reflow.mts` on the three edited item paths. This also joins soft-wrapped Facts/Given prose mechanically; numbered proof paragraphs, mathematical content, and Statements are unchanged. There were no judge records to invalidate on these carriers. Existing provenance and manifest interfaces remain accurate, so neither was rewritten.
- Precheck: `node tools/tsx-run.mjs tools/precheck.mts` on those same three paths: 3 checked, 0 failing, all clean.
- Rendercheck: `node tools/rendercheck.mjs` on the same paths: 3 files, no errors, real KaTeX and frontmatter YAML parsing passed.
- Final required layout command, run once after all item edits and the formatter: `node tools/proof-layout.mjs items/thm-bv-derived-bracket-is-odd-poisson.md items/thm-classical-lie-action-brst-differential-squares-zero.md items/cex-nonrepresentation-action-breaks-brst-nilpotence.md`: 3 items, 12 steps, 0 defects. No item edits followed it.
- Final reviewed risk check: `node tools/risk-report.mjs research/non-ml-math-remaining-81-2026-10-18-batch-44.proof-contracts.json --require-reviewed`: 0 errors, six items reported; all four required reviews complete.
- Focused contract check: `node tools/proof-contract.mjs research/non-ml-math-remaining-81-2026-10-18-batch-44.proof-contracts.json --strict`: 0 errors, 0 warnings, 6/6 checked.
- `node tools/defect-ledger.mjs append --file /tmp/non-ml-b44-3a-ledger-rows.json`: appended eight unique closed rows and regenerated the shared view under the tool’s append lock. Three rows record completed local locator repairs; two record read-only published maintenance; three record unrouted draft bibliography alerts with no repair credit. Additional defects have explicit report-based adjudication decisions rather than invented JSON obligations. The sole routed finding has exactly one closed row in its decision.
- A focused consistency script verified exactly one owed JSON decision, eight unique closed batch44 rows, and all eight recorded current raw hashes against disk. Sorting the pre/post counterexample carrier keys and SHA256 hashing their compact JSON gives exactly the routed observation fingerprint `00e6d4fb4aa488d230f70cb5cd767fc018ec10c7da955896776d72fb40e0740b`.

No mathematical escalation or substantial missing prerequisite remains. Pending owner work consists of the three unchanged unrouted draft bibliography alerts and two published bibliography repairs described above; this dispatch does not claim those source edits are complete. No page obligation was owed. The decisions JSON contains exactly `refuter:44:1` with `confirmed_fatal` and repair_confidence1. Structural risk review is not mathematical acceptance or an engine gate. The engine retains decision stamping and the gate battery.

Current raw hashes for the locally edited items:

- `thm-bv-derived-bracket-is-odd-poisson`: `ac614c9211a239b36a14ac4cdf3e9e4bffb8d6ee03997fe7cbd4cda468b6cad2`.
- `thm-classical-lie-action-brst-differential-squares-zero`: `68cb00cc3bea9736d8282f6f6322defaf5fbccad81f83319b913f49d510122fd`.
- `cex-nonrepresentation-action-breaks-brst-nilpotence`: `82728d7fed18d227e757571ae3c8abb195004f9ef1d29885291d474f4930f02b`.
