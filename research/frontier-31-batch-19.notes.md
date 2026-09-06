# frontier-31 · batch 19 · scaffold notes

## Scope and design decision

- Owned artefacts: `research/frontier-31-batch-19.pages.json`, this note, and
  `research/frontier-31-batch-19.coverage.json`. No page, item, workflow, plan,
  or published-content file has been changed.
- The current `.autopilot/` status recomputes as active run `frontier-23`, while
  this assigned dispatch and its owned artefacts name `frontier-31`. This is a
  workflow-state discrepancy for the build driver to adjudicate; this batch did
  not alter either run's state and remains scoped to the explicitly assigned
  `frontier-31` files.
- The task manifest and `research/plan-spec.json` agree on the two A-page
  orders and direct prerequisites: 613 / `acceptable-numberings-smn-and-the-recursion-theorem`, and 653 /
  `acceptable-numberings-smn-and-the-recursion-theorem`,
  `randomized-complexity-and-amplification`,
  `finite-probability-spaces-and-random-variables`. The design sections give no
  competing numeric order. No design/spec drift was found.
- For TC-37, the page-specific inventory at
  `research/plan-computability-theory-track.md` lines 1501–1530 controls the
  item inventory and order. The later match beginning at line 1531 is the
  corpus-wide source-comparison amendment, so it supplements the source choice
  and does not amend the inventory. The two agree.
- Both A pages remain unsplit: their inventories are respectively 18 and 22
  items, below the 60-item ceiling. Each B page is a leaf with three examples or
  counterexamples, exactly as designed. There are no forward references.

## Sources actually read and harvested

The complete source endpoints were opened in the web reader and the stated
ranges were read against their source headings. The coverage file records every
harvested heading and disposition; its URLs are also the exact source paths for
the planned authorship pass.

| Page | Source and URL | Exact range read | Role |
| --- | --- | --- | --- |
| hierarchy | Simpson, *Computability, Unsolvability, Randomness* — <https://sgslogic.net/t20/notes/cur.pdf> | contents pp. 2–4; §1.3, pp. 12–16; §§4.1–4.5, pp. 43–50; §§5.1–5.5, pp. 56–65 | independent full course-book treatment; the source itself supplies a harvestable contents list |
| hierarchy | Kueker, *Notes on Mathematical Logic* — <https://math.umd.edu/~dkueker/713.pdf> | contents pp. ii–iii; Ch. 12 §§0–2, pp. 72–74 | independent lecture-note treatment of the level definitions, `TOT`, and Post’s theorem |
| hierarchy | Montalbán, *Computable Structure Theory: Part 1* — <https://math.berkeley.edu/~antonio/CSTpart1.pdf> | contents pp. ii–v; “The arithmetic hierarchy,” pp. xx–xxi (PDF pp. 19–20) | monograph cross-check for bounded syntax, Post, and the Shoenfield limit lemma |
| complexity/randomness | Simpson — <https://sgslogic.net/t20/notes/cur.pdf> | contents pp. 2–4; §§6.1–6.3, pp. 79–87; §7.3, pp. 94–97; §8.2, pp. 105–107; §8.4, pp. 109–112; §8.7, pp. 119–120 | independent full course-book treatment with contents |
| complexity/randomness | Shen, *Around Kolmogorov Complexity: Basic Notions and Results* — <https://arxiv.org/pdf/1504.04955> | contents pp. 49–50; §§2–6, pp. 2–5; §§12–17, pp. 10–18; §§28–29, pp. 27–30; §§34–38, pp. 38–43; §40, pp. 45–46 | independent survey supporting the information and effective-dimension proof spines |
| complexity/randomness | Franklin–Porter, *Key Developments in Algorithmic Randomness* — <https://arxiv.org/pdf/2004.02851> | contents p. 1; §1.3, pp. 9–11; §§2.1–2.3, pp. 13–18; §4.5, pp. 34–36 | independent survey for tests, martingales, computable randomness, and dimension |

The coverage harvest assigns every row to a scaffold item (or explicitly to an
inline proof component); it contains no unsupported “citation-only” source.
The source-fetch stamp gate remains an open validation obligation until its
networked fetch succeeds from this environment.

## Conventions and dependency boundary

- Natural numbers include zero. Arithmetical formulas are interpreted in the
  standard natural-number structure with a fixed coding of finite tuples and a
  fixed acceptable numbering supplied by the declared prerequisite page.
  Bounded quantifiers belong to the matrix and do not raise the arithmetical
  level. `Σ⁰_n` and `Π⁰_n` use `n ≥ 1`; `Δ⁰_n` is their intersection.
- “c.e.” is made equivalent to domain/range/enumeration formulations in the
  `Σ⁰_1` theorem. Completeness is by total computable many-one reduction. The
  relative-computability definition records finite-query oracle computation;
  it does not define Turing degrees, which remain the following TC-18 page’s
  subject. The Post theorem introduces the finite iteration of relative
  halting only as notation required by its statement and proof.
- A limit-computable function has a computable stage approximation with a
  pointwise eventually constant value. No modulus or stabilization stage is
  assumed or supplied.
- All complexity is over finite binary strings with one fixed computable pairing
  convention. `C` is plain complexity for a chosen optimal machine and `K` is
  prefix complexity for a chosen optimal prefix-free machine. Every machine
  comparison states its additive constant; `O(1)` is never machine-independent.
  Infinite random objects are Cantor-space sequences under fair-coin cylinder
  measure. Effective dimension is the c.e.-cover / c.e.-gale notion.
- The direct dependencies below are the load-bearing local results. Existing
  prerequisite items are named only where their statements are used; no planned
  item depends on an examples-page item or on a later page.

## The arithmetical hierarchy and Post’s theorem

| Item | Exact planned claim and authorship route | Dependencies |
| --- | --- | --- |
| `def-bounded-arithmetic-formula` | Define bounded formulas from quantifier-free arithmetic by Boolean operations and bounded quantifiers. | `[]` |
| `def-sigma-n-pi-n-and-delta-n-sets` | Define `Σ⁰_n`, `Π⁰_n`, and `Δ⁰_n` sets by alternating unbounded prenex blocks over a bounded matrix. | `def-bounded-arithmetic-formula` |
| `lem-bounded-quantifiers-preserve-primitive-recursiveness` | Prove bounded existential and universal quantification of a primitive-recursive predicate remains primitive recursive by bounded search/product. | `def-bounded-arithmetic-formula` |
| `thm-sigma-one-sets-are-exactly-ce-sets` | Prove `A ⊆ ℕ` is `Σ⁰_1` exactly when it is computably enumerable. | level definition; bounded-quantifier lemma |
| `cor-delta-one-sets-are-exactly-decidable` | Derive `Δ⁰_1 =` the decidable sets by running the two c.e. searches in parallel. | level definition; `Σ⁰_1` characterization |
| `lem-prenex-normalization-preserves-level` | Convert a `Σ⁰_n`/`Π⁰_n` formula to equivalent prenex form without adding an unbounded alternation. | bounded syntax; levels; bounded-quantifier lemma |
| `def-arithmetical-level-completeness` | Define `Σ⁰_n`/`Π⁰_n` many-one completeness. | level definition |
| `thm-halting-is-sigma-one-complete` | Prove the chosen index-halting set is `Σ⁰_1`-complete. The reduction is a total parameter-specialization map. | completeness; `Σ⁰_1` theorem; `s-m-n` |
| `thm-totality-is-pi-two-complete` | Prove $TOT=\{e : \varphi_e\text{ is total}\}$ is `Π⁰_2`-complete by uniformly producing a program that searches each requested witness. | completeness; prenex lemma; `s-m-n` |
| `def-relative-computability-and-enumerability` | Define relative partial/total computation and relative c.e. sets using an oracle’s characteristic function. | acceptable numbering |
| `lem-oracle-computation-has-a-finite-query-witness` | Prove a halting oracle computation is preserved by a finite transcript answering exactly its finitely many queried locations. | relative computation |
| `thm-posts-theorem` | Prove the `Σ⁰_{n+1}`/relative-c.e. and `Δ⁰_{n+1}`/relative-computable characterizations, with the iterated halting oracle complete at the stated level. | levels; relative computation; finite witness; `Σ⁰_1` complete halting |
| `lem-diagonal-set-at-each-level` | Build, from a universal level-`n` predicate, a `Σ⁰_n` diagonal set not in `Π⁰_n`. | levels; completeness framework; prenex lemma |
| `thm-arithmetical-hierarchy-is-strict` | Deduce strictness at every finite level from the diagonal sets and Post’s characterizations. | Post; diagonal lemma |
| `def-limit-computable-function` | Define pointwise eventual limits of computable stage functions and the associated limit-computable sets. | `[]` |
| `thm-shoenfield-limit-lemma` | Prove a set is computable in the halting oracle iff its characteristic function is limit computable; use Post’s theorem for the concluding `Δ⁰_2` formulation. | limit definition; relative computation; finite witness; halting completeness; Post’s theorem |
| `fs-sigma-n-and-pi-n-are-disjoint` | Refute the claim that the two level classes are disjoint: every `Δ⁰_n` set lies in both. | level definition |
| `fs-limit-computable-has-a-known-stabilization-stage` | Refute the claim that a limit computation supplies a computable stabilization modulus. | limit definition; Shoenfield lemma |
| `ex-sigma-one-sets-are-exactly-ce-sets` | Work an explicit search predicate/enumerator translation. | `thm-sigma-one-sets-are-exactly-ce-sets` |
| `ex-shoenfield-limit-lemma` | Give the stagewise approximation to the halting-set characteristic function and identify its noncomputable convergence modulus. | `thm-shoenfield-limit-lemma` |
| `cex-sigma-n-and-pi-n-are-disjoint` | Exhibit a decidable set as a member of both classes. | `fs-sigma-n-and-pi-n-are-disjoint` |

Proof spine: normalize only after the bounded-matrix invariant is fixed;
implement completeness reductions using the total `s-m-n` map; represent a
halting oracle computation by its finite transcript before translating it back
to a formula. The strictness and limit-lemma proofs must keep program index,
machine, computation, and computed function distinct.

## Kolmogorov complexity and algorithmic randomness

| Item | Exact planned claim and authorship route | Dependencies |
| --- | --- | --- |
| `def-description-machine-and-plain-kolmogorov-complexity` | Define a partial computable description machine on binary strings and its machine-relative plain complexity. | acceptable numbering |
| `def-optimal-description-machine` | Define optimality by additive simulation overhead and fix `C` for one optimal machine. | description machine |
| `thm-invariance-theorem-for-plain-complexity` | Construct an optimal machine by tagged simulation and prove all optimal `C`’s differ by a constant. | optimal machine |
| `lem-most-strings-are-incompressible` | Count descriptions shorter than `n-c` to bound the compressible strings of length `n`. | optimal machine |
| `thm-kolmogorov-complexity-is-not-computable` | Use the first effectively selected high-complexity string to obtain the standard Berry-style contradiction. | optimal machine; incompressibility count |
| `def-conditional-kolmogorov-complexity` | Define conditional description machines and `C(x│y)`. | description machine |
| `lem-basic-conditional-complexity-inequalities` | Prove the ignore-condition, concatenate-description, and pairing upper bounds with explicit logarithmic overhead where required. | optimal and conditional complexity |
| `def-prefix-free-machine-and-prefix-complexity` | Define prefix-free domain and `K` for a fixed optimal prefix-free machine. | description machine |
| `thm-kraft-inequality` | Prove Kraft’s bound and the effective Kraft–Chaitin realization needed later. | prefix-free machine |
| `thm-invariance-for-prefix-complexity` | Build a universal prefix-free machine and prove `K` is invariant up to an additive constant. | prefix-free definition; Kraft–Chaitin theorem |
| `thm-symmetry-of-information-up-to-logarithmic-terms` | Prove the plain-complexity chain rule `C(x,y)=C(x)+C(y│x)+O(log C(x,y))` under the fixed pairing convention. | optimal and conditional complexity; basic conditional inequalities supply the coding upper bound |
| `def-incompressibility-method` | Define the proof method: select an incompressible witness, prove it has a desired property, and compare its lower and upper descriptions. | incompressibility count; plain invariance |
| `def-effectively-open-set-in-cantor-space` | Define c.e. unions of binary cylinders and their fair-coin measure. | acceptable numbering |
| `def-martin-lof-test-and-random-sequence` | Define a uniformly effectively open test with measure at most `2^-n`, passing, and Martin-Löf randomness. | effective openness |
| `lem-universal-martin-lof-test-exists` | Enumerate tests, shift their indices to budget their measures, and unite them into one universal test. | ML test |
| `thm-levin-schnorr-characterization` | Prove ML-randomness iff `K(X↾n) ≥ n-c` for some constant `c`. | ML test; universal test; prefix invariance; Kraft–Chaitin |
| `def-computable-martingale` | Define a computable nonnegative fair betting function on binary strings and success along a sequence. | finite probability space |
| `thm-martin-lof-randomness-implies-computable-randomness` | Turn a successful computable martingale into a Martin-Löf test, then take the contrapositive. | ML test; computable martingale |
| `def-effective-hausdorff-dimension` | Define effective Hausdorff dimension using c.e. `s`-gales/effective covers. | effective openness |
| `thm-effective-dimension-is-liminf-prefix-complexity-rate` | Prove `dim(X)=liminf_n K(X↾n)/n`. | effective dimension; prefix invariance; Kraft–Chaitin |
| `fs-kolmogorov-complexity-is-an-absolute-integer` | Refute exact machine-independence; changing optimal machines shifts complexity by a bounded but noncanonical constant. | plain invariance |
| `fs-normality-implies-algorithmic-randomness` | Refute the converse from normality using a computable normal sequence, which cannot be ML-random. | ML test; Levin–Schnorr |
| `ex-most-strings-are-incompressible` | Evaluate the counting bound for fixed `n` and deficiency. | incompressibility lemma |
| `ex-effective-dimension-is-liminf-prefix-complexity-rate` | Compute the rate in a tractable prefix-complexity example. | effective-dimension theorem |
| `cex-kolmogorov-complexity-is-an-absolute-integer` | Compare two optimal-machine conventions to show why no exact absolute value is intended. | machine-dependence false statement |

Proof spine: use tagged enumeration for both invariance theorems; use explicit
description counting rather than probability rhetoric; obtain the universal test
by a summable measure budget; and use a Kraft–Chaitin request set in both
directions of Levin–Schnorr and the dimension theorem. The martingale result is
only the stated implication, not an unproved equivalence of randomness notions.

## Validation checkpoint

- JSON parse: pass for both owned JSON files.
- `node tools/coverage-checklist.mjs --require-destination research/frontier-31-batch-19.coverage.json`:
  pass — 2 A pages, 65 harvested rows, 0 errors, 0 warnings.
- `node tools/content-policy.mjs --manifest-only research/frontier-31-batch-19.pages.json`:
  pass — 46 scoped item ids, 0 errors, 0 warnings.
- `node tools/splice-plan.mjs --run frontier-31 --batch 19 --dry-run`:
  pass — four manifest pages and 46 items project cleanly into the plan; no
  plan file or receipt was written. A temporary, in-memory-equivalent spliced
  plan passed `validate-plan.mjs` (exit 0): no cycles, unresolved ids, forward
  dependencies, B-page dependencies, or size breach. Its ordinary whole-plan
  warning notes that the required direct finite-probability prerequisite of TC-37
  is also reached through randomized complexity; the dispatch requires that
  direct edge, so it remains unchanged.
- Fetch stamp and liveness: **not ready in this execution environment**.
  `source-fetch-check --stamp --timeout-sec 30` returned `EAI_AGAIN` for all
  six source records (five distinct URLs), and wrote no `fetch_verified`
  records. `url-sweep --fail-on-dead` likewise returned 0/5 because its curl
  process could not resolve any of the five hosts. These are DNS-resolution
  failures of the local Node/curl runner, not re-harvest findings: the exact
  full-text URLs above were independently opened and read in the web reader.
  No replacement or archive URL is substituted without an actual source-text
  fetch, and no durable fetch stamp has been fabricated. Re-run the two checks
  from a resolver-enabled runner before the batch can clear its source gate.

## Known scope limits and next action

- The hierarchy page stops before the TC-18 degree structure, degree order,
  jump monotonicity, truth-table reductions, and finite-jump corollary. It also
  does not import incompleteness theorems.
- The complexity page does not promise resource-bounded complexity, Solomonoff
  induction, K-triviality, effective packing dimension, general computable
  measures, or randomness variants beyond the one stated implication. These are
  out of scope as recorded in the design’s specialist-continuations section.
- Planned proofs must not cite a B-page item, a later page, or a source as a
  proof substitute. Their source support is confined to the six browser-opened
  full-text paths and exact locators above; the independent fetch-stamp gate is
  still recorded as an obligation until it has written durable stamps.
- Next action: retain this exact harvest and re-run the two source-network
  gates from a resolver-enabled runner so their durable full-text stamps can be
  written into the authorised coverage record. No mathematical-scaffold change
  is outstanding.
