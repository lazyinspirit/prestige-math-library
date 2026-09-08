# Group f — final scaffold adjudication

Run: phase-2-wave-1. Batches: 7, 8. Date: 2026-09-08.

Both A/B pairs are **escalated**, with ordinary verdict **insufficient**. No mathematical repair is represented as applied. No owner-decision file existed for either assigned A page when checked. This report supersedes the earlier recheck's page-wide blocker conclusions, not the historical observations retained in the batch notes.

## Batch 7: F-FINAL-7

`lem-the-open-star-criterion-produces-a-simplicial-map` states its finite-source, arbitrary-target continuity and relative-pair assertions without a choice assumption. Its actual `proof_route` says to reduce the images of f and g to a finite target using `lem-compact-subsets-of-an-arbitrary-simplicial-realization-meet-finitely-many-open-simplices`. That supplier explicitly assumes Countable Choice and explicitly disclaims a choice-free proof. Its hypothesis is not propagated into the star lemma or the approximation results using that lemma. A definition of Countable Choice in the dependency graph is not an assumption of it.

The finite-target interpolation proof is adequate after compact support is available: positive coordinates put both images in the same target simplex, linear interpolation stays in that simplex, finite weak and Euclidean topologies agree, and equality/subcomplex conditions persist. The missing part is an adequate unconditional arbitrary-target continuity route. This does not show that the unconditional theorem is false. I am not certifying a choice-free replacement from the current earlier interfaces.

Owner decision needed: preserve the existing unconditional scope by supplying an earlier, fully proved choice-free continuity interface, or decide explicitly whether an axiom-contract change is intended. The latter would amend AT-24's binding open-star/absolute/relative approximation claims in `research/plan-algebraic-topology-track.md` and the corresponding plan inventory. Silently adding Countable Choice to those statements would weaken them, so no such repair was applied. No new pair is proposed without a settled replacement proof and inventory.

Hatcher's Appendix A.1 compactness argument selects points in infinitely many cells; reading it does not remove this axiom obligation. Zeeman's complete relative theorem proof and Maunder's relative subdivision discussion support the relative construction but do not themselves provide the missing local choice-free continuity dependency. The geometric and relative-subdivision checks therefore do not justify accepting the pair.

## Batch 8: F-FINAL-8

The actual proof path is:

`thm-classical-affine-nullstellensatz-correspondence`
→ `cor-weak-nullstellensatz-algebraically-closed-coordinate-form`
→ `lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite`
→ `cor-field-finite-type-over-a-field-is-a-finite-extension`
→ `lem-zariski-lemma-transcendence-basis-reduction`.

In `items/lem-zariski-lemma-transcendence-basis-reduction.md`, Proof 2.1 establishes monic equations for the finitely many generators over A=k[t_1,...,t_r][1/s]. Proof 3.1 then asserts every element of A[a_1,...,a_m]=K is integral, citing only the preceding step and “algebra.” Closure of integral elements under ring operations is load-bearing; it is neither proved there nor supplied by the three declared dependencies (field generation, transcendence basis and algebraicity transitivity). This is an actual prerequisite defect, not an unrelated published consumer awaiting these new scaffolds.

Exact proposed published amendment: declare and use `cor-integral-elements-form-a-subring` and `def-integral-element-and-algebraic-integer`. With A a nonzero subring of K, each a_i belongs to the integral subring, hence so does the A-algebra they generate. The existing subring corollary is at order 108, before the Zariski-lemma page at 111.013. Its complete proof and `thm-integrality-and-finite-module-equivalences` were read: finite monomial spanning gives a finite A-module; faithfulness and the adjugate identity produce a monic annihilating polynomial. The hypotheses match this use. This is a proposed amendment, not a certification of its entire expanded prerequisite closure.

Also make the localization interfaces used when clearing denominators explicit. The adjacent `lem-zariski-lemma-localised-polynomial-ring-not-field` uses a substitution into k[u,1/g]; declare the localization universal property and state surjectivity (t_1 maps to u, and 1/s maps to 1/g) before using the nonfield contradiction. Its unused one-variable model-case edge should only be removed after recording that its explicit denominator argument supplies the needed claim. These are protected published amendments. An alternative local route would need a complete replacement of the affected Zariski/Nullstellensatz chain and an authorized binding inventory update; merely adding an unused integrality edge to the owned theorem would not fix the published proof.

Owner decision needed: disposition of these protected prerequisite amendments, followed by their current proof audit, or an authorized complete local replacement design. No published proof or shared design/plan was changed.

## Dependency and scope reconciliation

Read the current manifests (25 A/6 B in batch 7; 48 A/1 B in batch 8), coverage inventories, prior reviews/fixes and notes, AT-24 and affine-interface designs, and relevant current plan entries. Declared item traversal through `deps` and `justified_by`, starting only from owned items, reaches 371 items for batch 7 and 384 for batch 8, including owned items. Those counts are graph evidence, not a claim that every reached proof has been semantically certified. The load-bearing uses above were separately inspected in full. No same-frontier supplier was found; both owned cross-batch input arrays remain empty.

The former 104-page/2,832-item and 65-page/1,798-item counts included co-resident results that are not actual proof prerequisites. Do not require their semantic certification to clear these suppliers. None of the five previously cited Noetherian consumer items is reached in batch 7; batch 8 reaches only `thm-noetherian-ring-ideal-characterisations`. Its finite-generation/ideal transport is adequate for the used clause; its statement discusses DC and batch 8 explicitly inherits AC/DC. No missing-DC claim about this used clause is retained here.

The canonical `research/published-consumer-supplier-ledger.md`, “Noetherian direct-consumer follow-up,” already records the short-exact-sequence repair and the exact earlier supplier/repair routes for composition series, prime filtration/associated primes, PID factorisation and ring-characterization wording. The first is already repaired; the remaining unused affected clauses are Phase-3 debt. These dispositions are recorded in owned notes for reconciliation without modifying the shared ledger. No additional frontier supplier is required for those repairs. F-FINAL-8 differs because its deficient integrality step is actually consumed.

All 19 current group-f decline decisions remain `stands`, with row-specific scope reasons. Deferred results retain their planned destinations; out-of-scope examples and extensions are not used to resolve either escalation. Refresh/check binds those decisions to current scope context. No result, source, or useful mathematical claim was dropped to pass a gate.

## Source evidence

The six active coverage sources and their exact locators/result dispositions are retained. Source-fetch-check reports all six verified from existing stamps (zero newly fetched). These reused stamps are not a claim of successful new network downloads.

- Hatcher, *Algebraic Topology*, https://pi.math.cornell.edu/~hatcher/AT/AT.pdf: complete Appendix A.1 argument, p.520, read through the web full text; confirms the compact finite-cell support proof and its selection step. Existing coverage retains §2C locators.
- Zeeman, “Relative simplicial approximation,” https://www.lms.ac.uk/sites/default/files/1964%20Relative%20simplicial%20approximation.pdf: complete pp.39–43, including proof, fullness condition, addendum and counterexample, read from recovered local text. Original web open timed out, retry failed, and the institutional `/sites/lms.ac.uk/files/` alternate failed. Existing complete PDF recovered locally with SHA-256 `a5c5b142200df86ba54bb5a7ce201f3e2a3cf2283b4b64775bd95a485a4f8e98`, matching its recorded stamp. Recovery ended retries; no absence or source drop inferred.
- Maunder, *Algebraic Topology*, https://webhomes.maths.ed.ac.uk/~v1ranick/papers/maunder.pdf: complete relevant §2.5.18–2.5.20 text read via web; the supplementary discussion shrinks stars, preserves relative stars, and interpolates in mixed simplices. Local PDF hash `5980bdaa6331056739c18c3d801bb887abbd570bb48cd150188752d7915bde0b` matches the existing stamp.
- Rourke–Sanderson active source: web access failed; complete cached PDF hash `dd4ebd291635675895b0fc3e174b4283a1cc698ce24f5b3a59c5ed5e3a28f4ae` matches the active stamp. Its prior harvest is retained; this final adjudication does not claim a new full reading or use it to certify the unresolved choice route.
- Milne, *Algebraic Geometry*, https://www.jmilne.org/math/CourseNotes/AG.pdf, and Arapura's https://www.math.purdue.edu/~arapura/preprints/algeom.pdf opened as complete documents. Existing exact coverage locators and harvest are retained; this final adjudication does not claim a fresh complete reading of every harvested argument or acceptance of the whole affine scaffold.
- Additional authoritative proof check: Milne, *A Primer of Commutative Algebra*, https://www.jmilne.org/math/xnotes/CA.pdf, §6 Propositions 6.1–6.4 and Theorem 6.5, pp.25–26 (finite modules, determinant argument, integral closure), and §13 Theorem 13.1/Lemma 13.6, pp.59–60 (finite-type fields/Zariski route). Complete relevant arguments read; these substantiate the exact missing local proof use, without replacing active source records.
- Conrad, https://kconrad.math.uconn.edu/blurbs/linmultialg/noetherianmod.pdf, Theorem 1.7 argument read for choice-sensitive module characterization. No claim of reading the complete note is made.

## Applied changes and validation

Changed only owned coverage status/current obligations (retaining superseded findings as history), batch notes, group scope evidence, this report and ordinary verdicts. A/B mathematical manifests remain unchanged. Terminal decisions are recorded only after these edits and checks. The derived frontier ledger is refreshed with its tool.

Executed checks: manifest-deps over all 15 run manifests (436 items, no errors); content-policy on the two owned manifests (80 items, no errors/warnings); coverage-checklist (49 and 86 source results respectively, no errors/warnings); source-backing with require-verified (80 items backed); source-fetch-check --stamp (6/6 verified, zero new stamps); validate-plan (no errors; existing warnings and 719 pages without item lists remain); extcheck (no errors, 63 warnings). Structural passes do not establish mathematical adequacy or close either finding. Final scope/frontier and post-edit check results are appended below.

Post-edit validation: both coverage checklists, scoped content-policy and verified source-backing passed again. `scope-decisions refresh --run phase-2-wave-1 --group f` reported 19 declines/0 pending; its `check` reported 19 current declines/0 errors. `frontier-dependency-ledger refresh --run phase-2-wave-1 --require-reviewed` succeeded. Scoped `git diff --check` passed. No whole-run scaffold-verdict success is claimed: these two verdicts intentionally remain insufficient. Both terminal records use `escalate` and reference F-FINAL-7/F-FINAL-8 in this report.
