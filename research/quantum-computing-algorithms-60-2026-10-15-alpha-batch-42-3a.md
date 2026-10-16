# Batch 42 Step 3a adjudication

Run: `quantum-computing-algorithms-60-2026-10-15`; group: `batch-42`.

Reviewed dispatch scope, order, reader report/findings, refuter artifact, pre/post inventories, and repository instructions. Engine retains scheduling, stamping and gates.

## lem-qa-18-absorbing-walk-discriminant-decomposition

Reviewed steps 1.1–2.1 against the general row-stochastic discriminant entry formula. Unmarked/unmarked entries equal P by symmetry, marked/marked form identity, and mixed entries vanish. Empty marked or unmarked blocks and zero transitions are included; no reversibility of the absorbing kernel is assumed. No defect.

## lem-qa-18-symmetric-compressed-walk-bound

Reviewed steps 1.1–3.1: weighted Cauchy–Schwarz and column sums make Q contractive; laziness makes P positive semidefinite. The second-eigenvalue hypothesis bounds u-perpendicular, and supported unit vectors have constant-component square at most 1-epsilon. PSD compression converts the Rayleigh bound into an operator-norm bound. Empty compression, epsilon=0 and epsilon=1 checked; no choice axiom required. No defect.

The following sections record the completed dependency-ordered reviews.

## Dependency-ordered reviews through level 17

### `alg-qa-18-reversible-walk-finding`

Exact dyadic gap, mass and failure encodings give terminating rational tests; the stopping-angle test uses algebraic roots of unity. Fresh QPE registers, explicit inverse words, the extra zero-phase row-space branch, and all retained registers are specified. The marked instrument preserves the unmarked superposition. The rational precision schedule has partial sum at most gamma/8. Accepted reader repair; no further edit.

### `def-qa-18-element-distinctness-johnson-walk`

Injectivity makes equality of encodings equivalent to equality of values. N>=4 and 2<=r<=N/2 exclude singleton collision-free subsets; N<=3 has an explicit direct branch. XOR erasure/loading uses two calls; checks and output scanning use stored values. Accepted reader repair.

### `def-qa-18-canonical-skip-list-for-element-distinctness`

Fixed irreducible polynomial and polynomial basis make address encodings, hash low bits and seed-relative storage deterministic. Finite-field existence and irreducible-degree suppliers apply at H>=1. Overflow sentinel and capped searches are total finite conventions, with probability and cost left to the theorem. Accepted reader repair.

### `lem-qa-18-johnson-stored-data-query-access`

Reviewed steps 1.1–4.1. Orthogonal subset labels support finite block-unitary completion; copying shared stored values plus compute/use/erase of the new value needs two queries. Controlled nonquery gates with two unconditional oracle calls cancel on control zero. Invalid source encodings remain orthogonal, so blank-target reflection restricts correctly to logical rows. Reflections/walk/setup bounds 4/8/r+2 follow. No gate bound is inferred; r>=2 and valid loop address 1 checked. No defect.

### `lem-qa-18-johnson-walk-spectrum`

Reviewed incidence-map adjoints and commutator, injection for k<N/2, surjectivity by dimension, and the raising-chain induction. Distinct adjacency eigenvalues differ by N-2j>0 and multiplicities telescope to binomial(N,r). The j=r case uses L_r H_r=0 directly; r=N/2 remains admissible. Uniform detailed balance and nonnegative decreasing eigenvalues give the absolute gap, not just a one-sided gap. Accepted reader repair.

### `thm-qa-18-reversible-search-cost`

Reviewed every step and the supplied QPE/spectral/instrument statements; compared MNRS arXiv:quant-ph/0608026v4 section 4, Lemmas 1–2, equations (3)–(8). QPE zero-branch amplitude is at most 4^-k, including eigenspace superpositions; the extraneous zero-phase subspace gets -I from R_A. Rational beta_i=gamma/(16i^2) sums to at most gamma/8. The early-angle induction and separate last step avoid the source argument’s unrestricted use of triple-angle Lipschitz estimates. Normalized unmarked projections cost factor 3 while their norms exceed 2/3; telescoping direction drift gives Delta_t<=pi/8+3gamma/4. The final amplitude exceeds 119/480, whose square exceeds 1/20. Empty marked set, actual mass>=1/2, t=1, and direct-sampling branch checked. Recurrence 3C_(i-1)+O(log(i+1)) gives the claimed query profile; gates and arithmetic remain separate. Accepted reader repair.

### `alg-qa-18-szegedy-phase-detection`

The supplied binary Lüders instrument conditions only on markedness and preserves unmarked coherence. The exact algebraic cosine comparisons implement both loop bounds and strict phase cutoff, including equality. Singleton X terminates directly; all-marked X has no unmarked conditional branch. Explicit row/inverse/control calls are charged. Accepted reader repair.

### `thm-qa-18-element-distinctness-query-cost`

Reviewed steps 1.1–4.1. A fixed colliding pair lies in an r-subset with probability r(r-1)/(N(N-1)); injective stored encodings implement the exact clean marked check. Dyadic lower bounds retain factors two, giving epsilon_0>=r^2/(4N^2), delta_0>=1/(4r), and epsilon_0<1/2. The actual controlled access is 8 queries, not the informal replacement cost 2. r+O(N/sqrt(r)) balances at the clamped Theta(N^(2/3)) choice; N=4..7 and N<=3 branches checked. Accepted reader repair.

### `thm-qa-18-detection-correctness-cost`

Reviewed steps 1.1–5.1 against the one-reflection spectral mapping, absorbing block decomposition, PSD compression and exact QPE tail supplier. Conditional row state T s_U has no marked eigenline or orthogonal-complement component. Signal phase distance >=gamma_0/(2pi), cutoff gamma_0/(4pi), and error gamma_0/(8pi) give K>=4 and per-run failure <=1/6. Independent repetitions use the lower dyadic beta endpoint and preserve one-sided error. Singleton, empty, all-marked and strict-cutoff equality cases checked. Costs include the selected instrument, label readout and verification; no label is promised from phase-only acceptance. Accepted reader repair.

All nine touched current raw item hashes matched the immutable reader-post item hashes before Alpha edits. Pre/post inventories differ on exactly the routed items. No original source bytes were reconstructed from hashes; reader repair descriptions are corroborating evidence, and acceptance rests on independent current argument review. The final item and page dispositions follow below.

## Final gate-cost item and page

Reader replaced exact row-reflection and walk-query counts by proved upper bounds. The supplied stored-data lemma says at most 4 and 8 queries; the current page correctly distinguishes detection from finding and makes full row-access/subset gate costs explicit inputs. The corrected optional Boolean compiler theorem remains compatible with the page summary; page source and order are unchanged by Alpha.

Reviewed all 13 proof steps and actual supplier statements, including the serial and parallel Boolean compiler proofs. Polynomial evaluation gives d-wise independence; bucket factorial moment and per-level run union bounds give eta_N=O(N^-7 log N). Canonical field/seed-relative storage, sorting, spans and collision counter checked. Caps are endpoint-symmetric; ideal prefixes preserve uniform seeds after deferred Lüders measurement, so orthogonal logical labels justify the bad-block norm and hybrid probability bound 4T sqrt(2 eta_N). Fixed N_0 preserves success >=1/40; final direct verification preserves one-sided error. Full row-access and uniform-subset gate costs remain explicit assumptions, as do continuous rotations. Confirmed refuter constant-node omission and separately the serial/parallel schedule conflation; corrected Statement, F5/F6 and 8.1 to count constants in S and distinguish serial size 6S+4E+m from parallel size 6S+4E+3m and depth bound. Empty DAG, repeated outputs, unused constants, overflow/overrun, all/no collisions, and finite N<N_0 branches checked. No unresolved mathematical blocker.

Refuter `refuter:42:1`: confirmed fatal. The constant-node witness emits seven gates against the former bound one. The serial compiler now uses S including constants. A second defect was the combination of bounds for different serial and parallel circuits: repeated input outputs with S=E=0, m=3 need seven gates in the cited fanout schedule rather than the serial three. The corrected theorem retains both results as separate implementation bounds. Repair confidence is 1. No current judge record was present to invalidate.

Direct dependency/reference consumer search over items, library pages and current run manifests found only this theorem, its manifest entry and the assigned A page. The A-page summary requires no further correction; no outside consumer repair or proposed withdrawal is needed. Published suppliers were read-only and no defective published item was identified.

Reader source edits are accepted mathematically, subject to the exact-gap and Boolean-compiler corrections below. All nine touched decisions are amended: eight needed current manifest reconciliation, and the query-cost item needed its supplier contract excerpt refreshed; two item sources also received the specific corrections described below. The page summary repair is accepted. There are exactly 11 routed decisions, with one closed ledger row for the refuter finding and separate rows for the reader repairs and independent schedule defect. Hash inventories remain immutable; the engine will stamp current decisions.

## Final finite-input caveat

The reader-repaired theorem still allowed delta_0=delta_act whenever the actual gap was supplied exactly, although the algorithm requires dyadic gap inputs. Exact supply does not imply dyadicity (even a finite rational chain may have a non-dyadic rational gap). The Statement now permits equality only for dyadic gaps and uses the already proved factor-two dyadic lower-bound convention otherwise. Direct uses in the finding algorithm, query-cost and QRAM-cost items use lower dyadic bounds already, so need no repair. For example P=[[2/3,1/3],[1/3,2/3]] has absolute gap 2/3, which is exactly rational but not dyadic. The corrected substitution clause preserves all promised chains. This adds one distinct closed defect row; the total is 13.

All direct current consumers of reader-altered Definitions/Statements were searched in items/: they are within batch 42. The two example carriers retain the same inclusion counts and spectrum formulas and require no content edits. Four stale contract citation excerpts were refreshed to current supplier sections; these are mechanical synchronization, with no manufactured defect row. Eight manifest mirrors were reconciled; no IDs, pages or inventory were added or removed. The owned cross-batch input gained 12 missing current declared edges and the derived ledger was refreshed.

## Sources and scope of mathematical evidence

- [MNRS, Search via Quantum Walk](https://arxiv.org/html/quant-ph/0608026), v4, §4, recursive algorithm, Lemmas 1–2 and equations (3)–(8): checked the reflection-error and retained-unmarked-state recurrences against the local proof. Local constants are independently bounded with the rational beta schedule, rather than copied from the source.
- [Ambainis, Quantum walk algorithm for element distinctness](https://arxiv.org/html/quant-ph/0311001v9), §6.2, model, storage, uniqueness and guaranteed-time discussion, Lemma 5 and the beginning of Lemma 6: checked the QRAM swap convention and hybrid framework. The local polynomial-hash and nested-list estimates are proved locally and do not rely on the source’s special unique-collision amplitude argument.
- Exact local supplier Statements/Definitions were read for every routed argument: row stochasticity, reversible/absolute-gap conventions, discriminant and spectral mapping, walk access, QPE kernel/tails/superpositions/costs, instrument and Lüders branches, finite-dimensional linear algebra, trigonometric identities/bounds, finite fields and the serial/parallel Boolean compilers. The serial and parallel compiler proofs and finite deferred-instrument proof were also read. Source citations are provenance, not replacements for local proof.

## Local checks and handoff

- Initial risk-report without --require-reviewed routed eight HIGH/CRITICAL items. Each now has a specific complete risk_review in the owning contract. Final risk-report --require-reviewed: 0 errors, 12 items routed (including four moderate items).
- Focused strict proof-contract check: 12/12 checked, 0 errors and 0 warnings. Four stale reader-era citation excerpts and two supplier excerpts affected by the exact-gap clarification were synchronized.
- Reflow left both changed proof carriers unchanged. Final precheck: 2 checked, 0 failing.
- Rendercheck on both changed proof carriers: all frontmatter and math parsed under the actual renderer.
- After final item edits and reflow, the batched proof-layout command covered items/thm-qa-18-reversible-search-cost.md and items/thm-qa-18-element-distinctness-qr-access-gate-cost.md: 2 items, 23 steps, 0 defects.
- Defect ledger append accepted 13 distinct closed rows for this adjudication; the refuter decision owns exactly its constant-node row. No row was created for mechanical synchronization. The ledger tool serialized append and regenerated its view.
- Current owned cross-batch records were maintained and frontier-dependency-ledger refresh completed. No published item was edited and no published-defect entry was necessary.

No unresolved mathematical blocker or owner escalation remains. No judge, decision stamping, self-certification or engine gate battery was run. The engine owns current hash stamps and its independent gate battery.
