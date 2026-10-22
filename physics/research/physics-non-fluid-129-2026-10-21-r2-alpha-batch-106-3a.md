# Batch 106 Step 3a adjudication

Run: `physics-non-fluid-129-2026-10-21-r2`; group: `batch-106`.

The immutable pre/post snapshots have identical item, contract, manifest and page fingerprints. All eight current item raw hashes match the post snapshot before this adjudication. There were no reader repairs to accept or reject. Eight routed findings are owed; risk-only items add no decisions.

## Level 2 completed: transfer commutativity

Reviewed `thm-qsmx-transfer-commutativity` steps 1.1–3.1 and actual suppliers `def-qsmx-rational-monodromy`, `lem-qsmx-transfer-regular-point`, `lem-qsmx-monodromy-rtt`, plus the imported rational-R definition and Yang–Baxter lemma. The scalar auxiliary conjugation allows partial-trace invariance; arbitrary operator-valued cyclicity is unnecessary. Inversion excludes only spectral differences ±i; polynomial continuation covers both. The logarithm series converges in a matrix norm near I, and commuting convergent series and coefficient comparison justify all Taylor-coefficient claims. No uniqueness assertion about arbitrary logarithm branches is needed. No AC, experimental premise or completeness claim is used.

Sources inspected: [Faddeev](https://arxiv.org/pdf/hep-th/9605187), §3 equations (35)–(54); [Lecture 14](https://vu-ff.github.io/integrability/en/lectures/14/), §§14.3–14.5. The latter reverses the RTT order and uses sI−iP; this is compatible with the local sI+iP convention through inversion off ±i and polynomial continuation. Current local proofs supply their own exact convention.

The transfer commutativity two-arrow diagram has identical domain/codomain Va⊗Vb⊗VN and exactly the supplier RTT composites, with rightmost-first composition. It adds no premise. Complete risk review recorded in the owning contract after the initial risk-report run (two HIGH items; zero tool errors).

Next: finish the Bethe-definition finding pair before moving to level 4. Checks and final disposition remain pending.

## Level 3 completed: regular Bethe definition

`reader:106:3` and `refuter:106:3`: **confirmed_nonfatal**, shared defect `pnf129-r2-b106-unused-commutativity`, repair confidence 1. The shifted finite operators and entry maps use the monodromy definition alone; “on-shell” is explicitly defined by the displayed equations. Removed the unused commutativity prerequisite, role, reference and contract excerpt, and synchronized the owning manifest. The Definition itself, including M=0, M=N, exclusions and nonzero-vector condition, is byte-identical. Therefore no Statement/Definition consumer propagation is triggered. No arbitrary choice is used. The retained dependency is the exact finite R/P definition inspected above. Next: level-4 eigenpair proof and title finding pair.

## Level 4 completed: regular Bethe eigenpair

`reader:106:2` and `refuter:106:2`: **confirmed_fatal**, shared defect `pnf129-r2-b106-eigenpair-title`, repair confidence 1. “Diagonalize” asserts a basis, which the explicit no-completeness conclusion does not supply. Changed only the title to “Regular Bethe data give transfer-family eigenpairs” and its manifest mirror. The Statement and proof remain unchanged; no consumer interface changes.

Independently checked all six steps: equal shifts preserve RTT; the triangular local action gives the displayed a,d; the named matrix entries give AB/DB relations and commuting B; both rational coefficient identities establish the full induction (including j=1); Bethe equations cancel unwanted terms; distinct roots give Q|P, and polynomial continuation handles u at a root. M=0 has Q=1 and Psi=Omega; M=N remains conditional on Psi≠0; zero roots are allowed; repeated roots, ±i/2 and pairwise differences ±i are excluded. No completeness, arbitrary choice or empirical premise enters. Complete risk review recorded before proceeding.

Source comparison: [Faddeev](https://arxiv.org/pdf/hep-th/9605187), §4 (66)–(97); [Lecture 15](https://vu-ff.github.io/integrability/en/lectures/15/), §§15.3–15.6, reference-state calculation, Proposition 15.6, Lemma 15.8 and Corollary 15.9. The lecture uses unshifted parameters; the local shift u→u−i/2 gives the current a,d. Sources supplement the independently checked local derivation. Next: one-magnon citation and page findings.

## Level 4 completed: one-magnon example

`reader:106:4` and `refuter:106:4`: **confirmed_nonfatal**, shared defect `pnf129-r2-b106-magnon-locator`, repair confidence 1. The specific section/equation locator is wrong, although the local proof and the alternative source support the example. Replaced both Faddeev locators and synchronized source metadata in the manifest. The source has H_source=(1/2)Σ(P−I) and ε(p)=cos p−1, so H_N=2J H_source+JN I gives exactly the current E. [Faddeev](https://arxiv.org/pdf/hep-th/9605187), §4 (108)–(112), PDF p.15, supplies the relevant passage; §5 starts on PDF p.16 before (113)–(115). [Lecture 10](https://vu-ff.github.io/integrability/en/lectures/10/), §§10.2–10.3 (10.2)–(10.5), gives the same dispersion with its explicit coupling convention.

Reviewed the exact exchange supplier and its three-step proof: differentiation of polynomial commutation, invertible regular point, Hermitian swaps and four-vector Pauli calculation. The example has precisely two distinct incident bonds for N≥3, N−2 fixing bonds, nonzero Fourier vectors, and periodic reindexing with exp(ikN)=1. J=0 and m=0 work directly; even-N endpoint modes cause no difficulty. Statement and proof are unchanged. No diagrams occur in this example. Next: page-summary finding pair and final local checks.

## Page scope completed

`reader:106:1` and `refuter:106:1`: **confirmed_fatal**, shared defect `pnf129-r2-b106-page-shift-scalar`, repair confidence 1. The old equality fails at N=3, where t(0)=−iU. Replaced it with the exact t(0)=i^N U. The current supplier derives U by tracing the ordered auxiliary swaps on every elementary basis tensor, and handles both omitted-factor endpoints in the derivative. Its orientation agrees with this page and the one-magnon Fourier convention. The page's full finite-chain summary now matches its suppliers; inventories and prerequisites are unchanged. No item Statement or Definition changed anywhere in this adjudication, so there are no affected outside consumers requiring repair or closure. No withdrawal is proposed.

## Published prerequisite alert

The imported rational-R definition and Yang–Baxter lemma have `status: published` and judge records, but no publication audit/verified marker. Their finite-dimensional content used here is independently adequate: the flip is explicitly specified; the permutation products and the un-checked polynomial expansion prove Yang–Baxter for all parameters. The checked diagram in the imported lemma also matches its displayed checked identity. Their earlier scalar/tensor convention definition and product-basis theorem were opened and have audit markers. This is publication-maintenance evidence, not a reason to edit imports or assert a full foundation audit. Exact hashes and owner repair strategy are recorded in the published-consumer/supplier ledger. The outside publication owner must resolve that maintenance; it does not block the checked local deductions.

## Final local validation and handoff

All eight routed obligations have one decision each, with no extra risk-only decision. There are four scientific defects, each fixed with confidence 1 and one shared ledger row for the corresponding reader/refuter pair. Refuter obligations use the native `flagged` decision route and retain their original `refuter:106:K` identities. Both complete risk reviews are in the owning contract. Statement/Definition bodies and mathematical proof arguments are unchanged; the reflow command joined soft-wrapped prose in the two edited proof-bearing items.

| Local command | Actual result |
|---|---|
| `node tools/physics-support/risk-report.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-106.proof-contracts.json` | exit 0; two HIGH items, eight routed |
| same command with `--require-reviewed` | exit 0; zero errors |
| `node tools/physics-support/proof-contract.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-106.proof-contracts.json --strict` | exit 0; 8/8 items, zero errors/warnings |
| `node tools/tsx-run.mjs tools/physics-support/reflow.mts items/def-qsmx-regular-bethe-data.md items/thm-qsmx-regular-bethe-eigenpair.md items/ex-qsmx-one-magnon.md` | exit 0; definition unchanged, theorem/example reflowed |
| `node tools/tsx-run.mjs tools/physics-support/precheck.mts` with the same three explicit paths | exit 0; two proof-bearing items checked, zero failures |
| `node tools/physics-support/rendercheck.mjs` with those three paths and `library/quantum-statistical-mechanics/qsmx-integrable-transfer.md` | exit 0; all four parse under renderer YAML/KaTeX |
| `node tools/physics-support/proof-layout.mjs` with the same three explicit item paths, after final source edits and reflow | exit 0; three items, eight steps, zero defects |
| defect-ledger append, then render | exit 0; four fixed rows and two outside nonfatal-recorded publication rows appended; generated view refreshed |

Final raw SHA256 guards (not engine decision stamps):

- `def-qsmx-regular-bethe-data`: `3bc8d1bf7429935cc2c071ee229629e19f47ed31fe5a60f5cb6af2e41df39a2f`.
- `thm-qsmx-regular-bethe-eigenpair`: `846fbf0e2f999070c6cfbe9ab08a18ea36cdda28073390c396fc970db54b999d`.
- `ex-qsmx-one-magnon`: `c2e79becef0137341d9a4c42b2bad5bbcad4cd1b307e889ff151ea5207f5de56`.
- `qsmx-integrable-transfer`: `e3eb3dc94af3569a03431aa2953c5768279bcf5be3855cce4c831b83249823ee`.

**Owner routing action before collection:** the two page findings have identical observed SHA256 `c782aee92b5ab59658e6f67ee64e86b983c448e1ed0ad1f00b92f9680dcb684f` and the same opening-sentence scalar defect, but their frozen taxonomy differs: reader `overstrong-title-or-statement`, refuter `false-claim`. The native shared-finding check requires an owner-reviewed finding alias for differing defect types. Please bind `reader:106:1` and `refuter:106:1` to the existing single `pnf129-r2-b106-page-shift-scalar` row through the ordinary owner alias path; do not duplicate this one scientific defect or alter the frozen reports. This report supplies the original/current scientific review and explicit same-issue classification, but does not fabricate owner authorization or run that owner operation. Other paired findings have identical defect types and exact observed carrier guards.

There is no unresolved mathematical repair or outside consumer interface obligation. The outside published-marker maintenance remains open with its owner. No judge cycle, decision stamping, engine gate battery, publication, commit or push was initiated.
