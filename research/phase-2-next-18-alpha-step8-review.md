# Step 8 scope and frontier review — phase-2-next-18

Reviewer: Alpha, step8-lead. Scope review completed; owner decisions below remain unresolved. This report is not mathematical certification or a stage-transition instruction.

Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, and `briefs/tasks/frontier-dependency-ledger.md`. Refreshed and read the unified frontier ledger before reviewing the pending scope delta. Reviewed the 54 pending rows of `research/phase-2-next-18-step8-scope-delta.json` against current manifests, page prose, item interfaces, plan destinations, available published suppliers, and the cited source passages described below. The original delta remains unchanged as the engine's dispatch input.

## Scope decisions

43 declines stand; 11 require an owner decision. All 54 owning decision rows have current evidence and hashes, with no pending owning decisions. An `owner-decision` records an unresolved scope, destination, or source question; it does not approve a new page, dependency, or reading-order change.

| Group | Reviewed | Stands | Owner decision |
| --- | ---: | ---: | ---: |
| a | 8 | 8 | 0 |
| b | 9 | 5 | 4 |
| c | 10 | 7 | 3 |
| d | 11 | 9 | 2 |
| e | 10 | 9 | 1 |
| f | 6 | 5 | 1 |

The detailed records are `research/phase-2-next-18-alpha-{a,b,c,d,e,f}-scope-decisions.json`. The standing decisions preserve the distinction between an omitted source application and a dependency actually required by the retained theorem: in particular, real versus complex K-periodicity, local reflexive-range AP/MAP arguments versus general tensor-dual variants, the finite-power CH topological construction versus stronger diamond constructions, and regularity versus uniformization in Solovay's theorem.

### Unresolved owner decisions

- **Group b, batch 4: characteristic-class applications following BU and BO** (`6d7a5579b9fab64351efeed55d904c7d88482ab0f2848eff121870e3bd3a74b6`). Page: `topological-vector-bundles-and-grassmannian-classification`. The row broadly defers characteristic-class applications after both BU and BO to AT-19. The current AT-19 design explicitly constructs real classes, while AT-20 separately owns complex Chern/Pontryagin development; both page files are absent. Classification of real and complex bundles is already retained in AT-15. Owner must identify the exact declined applications and split their destinations when complex classes are included; the broad recorded destination is not an exact coverage guarantee.

- **Group b, batch 4: characteristic classes and their calculations** (`dfa4b75a7957b53fea9d7e2f61f310f01f23d80026800ef4027031235bc0004c`). Page: `topological-vector-bundles-and-grassmannian-classification`. Hatcher Chapter 3 §3.1 is explicitly Stiefel–Whitney and Chern Classes, so the broad declined characteristic-class calculations include both real and complex branches. Current AT-19 only owns the real branch and AT-20 owns complex Chern/Pontryagin calculations; neither destination file is present. Owner must split or precisely restrict this decline rather than treat the sole real-class destination as covering the entire source package.

- **Group b, batch 4: splitting principle and Thom isomorphism for general complex bundles** (`e1100e03fb1efe502b437a0c78f04c06ae396a6ff4a3946ded2c835b0fbd7269`). Page: `complex-topological-k-theory-and-bott-periodicity`. Read May Chapter 24 §3, printed pp.210–211: the stated Thom map is K(X) to reduced K(T(xi)), defined by the exterior-algebra class lambda_E. Current AT-18 thm-thom-isomorphism-for-oriented-vector-bundles instead concerns ordinary H*(D,S;R) and orientation coefficients. Those are different cohomology theories, and AT-18 does not supply the K-theoretic splitting/Thom package. Owner must select an exact destination or authorize its scope; no new page or forward dependency was introduced.

- **Group b, batch 4: Stiefel–Whitney and Chern class calculations** (`e55ba1aabc0f6548a6912c5a991833b0aa8e22f1abc4de3179f703bb2dee2207`). Page: `topological-vector-bundles-and-grassmannian-classification`. Milnor–Stasheff separates Stiefel–Whitney classes (§4 and §8) from Chern classes (§14). The decline explicitly names both, while its sole destination is AT-19, whose design says it constructs real classes. AT-20 is the distinct complex Chern/Pontryagin destination. Owner must split this mixed result row or give both exact destinations; a real-class page alone cannot cover the Chern calculations.

- **Group c, batch 9: PID implies no Suslin trees** (`1d9175f7fff4b83c6dd6211a32da332f0e79007e9e166e4190d5fa320dfae4e1`). Page: `minimal-walks-oscillation-and-l-and-s-spaces`. Abraham, Three applications of ideal dichotomy, slides 5–6, explicitly discusses PID implies no Souslin trees. The named destination has order 687 and contains MA(aleph_1)-based elimination, not this PID implication. The PID definition and theorem lie on proper-forcing-countable-support-iterations-and-pfa at order 707, whose closure already requires the Suslin page. Moving this result to the recorded destination would require a forward dependency or reading-order decision. Owner must select a compatible destination; MA/PFA implies SH is not the same conditional theorem.

- **Group c, batch 9: Other applications of Prikry forcing** (`3ba2c4115a7d35c626e4576258e43309ead159a436afb5986cedc662f5fb1e66`). Page: `prikry-forcing-and-gitiks-singular-cardinal-model`. Karagila §9.2 was read through Theorem 9.10, Lemmas 9.11–9.12, Proposition 9.13 (semiproper but not proper), and Exercise 9.14. The row names only unspecified other applications, and its reason says the page stops at Gitik orientation. The current page actually proves the Gitik class-forcing, symmetric-model, singularity and consistency chain. Owner must replace that stale boundary with an exact list of excluded applications; it cannot stand as written.

- **Group c, batch 9: Consistency proof for the dichotomy** (`b842c025707f98387d5ad6040155a988749652ca7d016a182d0b04b1142e6293`). Page: `minimal-walks-oscillation-and-l-and-s-spaces`. The named prerequisite page does contain cor-formal-consistency-of-pfa-from-a-supercompact and thm-pfa-implies-p-ideal-dichotomy, and the consumer independently proves its omega_1-generated simple-ideal dichotomy. However, this exact Abraham web source has an exhausted initial-plus-five recovery record and a documented source drop in batch-9 coverage. No complete cached version of those notes was recovered in this review; the separate applications slides do not supply their consistency proof. Owner-decision retains this precise source-verification limitation instead of claiming the declined source argument was read or equating the two dichotomies.

- **Group d, batch 8: Omission of the original full Halpern–Läuchli application in favor of the elementary continuity proof** (`4fe6396d5638c331f95f0c09352e6a5166fa9ae62ee1cb1533ea4064b8d49d1e`). Page: `halpern-lauchli-and-bpi-without-choice`. Repicky abstract and introduction explicitly replace the full Halpern–Lauchli argument by an elementary case. That methodological comparison is not itself an additional theorem. However, the current Cohen-model and HL page prose expressly abandon the elementary continuity-to-primality shortcut and retain search-and-shift instead. The row reason saying the complete elementary Cohen proof is retained is stale. Owner must reconcile that description; no mathematical content was added or removed.

- **Group d, batch 7: Halpern-Lauchli combinatorial route** (`9446ef15d89df0c31e9646ae8d1cc854a1c50168cc18bc15eeeaf056a6e2341a`). Page: `boolean-prime-ideal-theorem-in-the-basic-cohen-model`. Current boolean-prime-ideal-theorem-in-the-basic-cohen-model prose and lem-basic-cohen-search-and-shift-prime-ideal-construction use the Halpern–Levy search-and-shift route with Ramsey and Erdos–Rado inputs. Repicky is read as the abandoned shortcut, not the required direct proof. The current plan still correctly forbids a dependency on the later HL page, but the reason mandating direct Repicky continuity contradicts the current frozen content. Owner must reconcile the reason and design; no forward edge or replacement proof is introduced here.

- **Group e, batch 1: Theorem 11.32: closed unbounded-operator extension** (`68ef1fe1e7767e35214bbad4a174443246127ee3f08c390d2179f3eb72318361`). Page: `banach-valued-integration-and-the-radon-nikodym-property`. Read Teschl Theorem 11.32 and its graph proof, printed pp.334–335: it is Hille commutation for a general closed operator D(A) subset Y to Z between Banach spaces, requiring both f and Af integrable. FA-21 currently plans Hilbert-space domain/adjoint/spectral and Stone results, with no exact general Banach Hille item; its page file is absent. Owner must secure an exact destination or authorize an appropriate local addition. A self-adjoint specialization does not preserve this general source claim.

- **Group f, batch 2: Theorem 7.1.6 Brownian paths are not Lipschitz** (`1300a4128369f06ab567e3c6475d654737d01288b0d3b6fd770580132f15dcfe`). Page: `brownian-motion-construction-and-continuity`. Durrett Theorem 7.1.6, printed pp.358–359, proves pointwise failure of Lipschitz continuity and hence nowhere differentiability; its complete probability estimate was read. The recorded reason instead calls it sharp failure at exponent one half, which is a different claim. PT-18 and the current page retain positive Holder regularity below one half, scaling, inversion, and Wiener measure. Owner must reconcile the inaccurate reason and decide whether this construction-adjacent negative result remains excluded; no endpoint theorem was silently substituted or added.

## Source and closure evidence

The owning decision rows retain the source URLs and exact claims. Local caches were used for the relevant passages; this review does not claim to have read every cited book or to have audited every proof on the frontier.

| Topic | Evidence read and comparison |
| --- | --- |
| Brownian motion and random walks | `/tmp/durrett.txt`, Theorem 7.1.6, printed pp.358–359, complete argument (lines 30671–30740), and Theorem 5.2.6 with its induction (24104–24137); Theorem 5.2.7 statement/context. `/tmp/sousi.txt` §6.4 and `/tmp/yoshida.txt` §6.6 strong-Markov statements; `/tmp/roch.txt` §2 potential-theory scope. Compared current Brownian construction and random-walk pages and PT-18/PT-19 plans. |
| Functional analysis | `/tmp/ryan-real.txt`, Theorems 4.15, 5.33–5.34 and 5.41–5.49 statements/context; read the current full proof of `thm-reflexive-approximation-property-implies-metric-approximation-property`. `/tmp/pisier.txt` Theorems 2.6–2.7; `/tmp/mueger.txt` Exercise B19; `/tmp/teschl.txt` Theorem 11.32 and complete graph proof, pp.334–335; `/tmp/cheeger-kleiner.txt` §6, Theorem 6.1; `/tmp/dvoretzky-rogers.txt` Theorems 4–6 statements. Compared retained Banach integration and approximation interfaces with the FA-21 Hilbert-space plan. |
| Bundles and K-theory | `/tmp/phase2next18-b4-sources/may-concise.txt`, Chapter 23 §6 and Chapter 24 §3, pp.210–211, plus §§5–6 statements/context; `hatcher-vbkt.txt` Chapter 3 §3.1 and real/complex periodicity scope; `milnor-stasheff.txt` §§4, 8, 14 contents. Compared current AT-15/16/18 pages and AT-19/20 plans. The broad MIT application row is left for owner clarification rather than claiming an exact unspecified source theorem. |
| Lie theory | `/tmp/prestige-lie-sources/milne.txt`, Chapter I §§2–9 scope and Hausdorff section; Kirillov's explicit omission of Engel's proof and root-classification sections; Weibel §7.2 homology/cohomology definitions and examples. Compared current solvable/nilpotent and semisimple page inventories and exact later destinations. |
| Cohen model, BPI, and choice | All four pages of `/tmp/groupd-owner-sources/repicky.txt`; Jech Chapter 10.6 and measure/Borel consequences in `/tmp/groupd-owner-sources/jech-choice.txt`. Read Feferman's scanned printed pp.340–345 using `/tmp/pml-audit-sources/feferman-9.png` through `feferman-11.png`, including Theorems 4.11 and 4.12 and their proofs: delta=1 definable well-ordering and delta=omega ultrafilter conclusions are distinct. Read current semantic and formal BPI/no-free-ultrafilter supplier proofs and the affected batch-8 consumer proofs. Published basic-Cohen-system and failure-of-choice suppliers were read; ramified Feferman conclusions were not silently transferred to a different HS model. |
| Solovay, ultrafilters, embeddings | `/tmp/pml-audit-sources/solovay1970-clean.txt`, III.1.12–1.13 and III.2.12 statements/context; `/tmp/pml-audit-sources/hayut-karagila.txt`, introduction and Proposition 2.3 scope; `/tmp/pml-audit-sources/hamkins-gap.txt`, corollary inventory 11–18; `/tmp/tachtsis.txt`, abstract and §1 comparison implications. Compared the narrower retained regularity, ordinal reduction, embedding, and Russell-set claims. |
| Prikry and L/S spaces | Complete Karagila §9.2 in `/tmp/karagila-forcing-2023.txt`; Dimitriou Chapter 2 §5 and Chapter 3 scope in `/tmp/prestige-prikry-audit/dimitriou.txt`; Moore Theorems 7.9 and 7.13 and Tukey context in `/tmp/moore-l-space.txt`; Hart–Kunen introduction in `/tmp/phase2-c-ultra.txt`; PFA(S) introduction in `/tmp/phase2-c-todorcevic-chain.txt`; Abraham application slides 1–8 in `/tmp/abraham-pid-iii.txt`. Compared current order 687 Suslin and order 707 PFA/PID pages and the retained local simple-ideal theorem. The distinct paperzz notes remain unavailable: batch-9 coverage records initial plus five failed recovery attempts and `source_resolution.status: dropped`. Its legacy reading-status claim is not this review's evidence. |

## Frontier reconciliation

The refreshed unified ledger has inputs for all nine batches, 32 edges, and one removed orphaned review. Nine previously open batch-8 rows were reconciled in `research/phase-2-next-18-batch-8.cross-batch-dependencies.json`. Each now has current interface evidence and status `verified`; the former publication-status objection does not prevent a same-frontier draft supplier from supplying its checked claim.

The affected item interfaces are:

- `cor-relative-consistency-of-halpern-lauchli-bpi-without-choice` consuming `cor-relative-consistency-of-bpi-without-choice-over-zf`.
- `fs-bpi-well-orders-every-set` consuming that formal consistency corollary and `thm-basic-cohen-model-satisfies-bpi-and-fails-choice`.
- `thm-halpern-lauchli-and-the-basic-cohen-bpi-model` consuming the semantic basic-Cohen theorem.
- `thm-strict-relative-placement-of-bpi-over-zf` consuming the formal BPI corollary and `cor-relative-consistency-of-no-free-ultrafilter-on-omega-over-zf`.

The three page interfaces are the Halpern–Lauchli page's prerequisites on the BPI and symmetric-collapse pages, and the Solovay page's methodological prerequisite on symmetric collapse. The current Solovay item interfaces have no batch-7 theorem use. The item checks preserve the distinction between a supplied transitive ground with a generic extension and an external finite-fragment conditional consistency argument. They do not infer a PA-uniform compiler. The strict BPI separation uses the cofinite proper filter and point-exclusion argument with the required hypotheses.

Checked the four `removed` edge reviews against current declarations and uses: the disk/sphere Thom definition takes a supplied metric rather than citing metric existence; the HL semantic consumer no longer uses the continuity schema, finite-set continuity, or OD maximal-ideal suppliers. The removed orphan for `lem-basic-cohen-continuity-forces-the-maximal-ideal-to-be-prime` remains removed: the supplier is absent from the current manifest, and the consumer and its strict proof contract use the current semantic theorem instead. Its evidence was refreshed in place. Other current frontier notes were retained, not represented as a new blanket certification.

## Changes, ledger, and validation

Exact changed mathematical item IDs: `[]`. No mathematical repair or auditor-created item, page, dependency, reading-order change, published-content change, judge record, or stamp was written. There is consequently no new-result manifest, coverage, contract, risk, splice, or impact delta. Scope changes remain owner decisions.

Changed artifacts: the six owning scope-decision JSON files, batch-8 frontier input, tool-regenerated unified frontier ledger, and this report. The optional `research/phase-2-next-18-step8-mathematical-review.task.md` does not exist, so there was no additional supervising repair assignment.

The canonical `research/defect-ledger.jsonl` contains 317 rows for this run and zero open rows at final inspection. There was no open row to close or defer and no shared defect-ledger mutation requiring an append or render. Unresolved scope issues are preserved in their existing owning decision rows above.

Validation performed:

- `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-next-18 --require-reviewed` — passed; all nine batch inputs and required reviews are present.
- `node tools/scope-decisions.mjs refresh --run phase-2-next-18 --all` — refreshed all six groups; zero pending owning decisions.
- `node tools/scope-decisions.mjs check --run phase-2-next-18` — 54 current declines, zero errors.

These checks establish the stated bookkeeping conditions. No engine stage transition, judge gate, or Step-8 recertification was run or claimed. Next action belongs to the owner/engine: resolve the 11 recorded owner decisions and perform the required subsequent gates and certification.
