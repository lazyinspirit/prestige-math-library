# frontier-31a · batch 21 · beta scaffold notes

## Scope and design decision

- Authorised scaffold: `research/frontier-31a-batch-21.pages.json`; evidence: the sibling coverage file.  No library content, workflow state, plan structure, or foreign `frontier-31` artefact was changed.
- The task specification and `research/plan-spec.json` agree: orders 613/614 require `acceptable-numberings-smn-and-the-recursion-theorem`; orders 627/628 require `space-complexity-savitch-and-tqbf` and `diagonalization-and-the-halting-problem`.  The design records no contrary order or prerequisite, so no drift was recorded.
- The controlling hierarchy design is the complete TC-24 block beginning at `plan-computability-theory-track.md` line 1018.  The second matched location (line 1041) is its B-page subsection, not a later amendment or competing design.
- Counts are 18 A items plus 3 B items for the arithmetical pair and 20 A items plus 3 B items for the complexity pair.  Neither A page exceeds 60 items, so an honest split is not required.

## Sources read and harvested

### Arithmetical hierarchy and Post's theorem

- Ludovic Patey, *Computability Theory* (draft course notes, 2023), [full PDF](https://ludovicpatey.com/courses/comp-thy-2023/cr11-en.pdf): contents PDF pp. 2–4; §§4.2–4.7, printed pp. 50–63 (PDF pp. 69–82); §§5.1–5.5, printed pp. 79–90 (PDF pp. 98–109).  Read oracle computation, use property/finite use, jump, limit computability and Lemma 7.2; then elementary hierarchy properties, Propositions 2.1–2.2, Definitions 5.1–5.2, Proposition 5.3, Corollary 5.4 and Theorem 5.5.  The complete heading-by-heading dispositions are in coverage.
- Douglas Cenzer and Jeffrey B. Remmel, *Effectively Closed Sets: Pi_1^0 Classes* (draft monograph, 2012), [full PDF](https://people.clas.ufl.edu/cenzer/files/book4.pdf): contents PDF pp. 2–4; §II.6, printed pp. 26–28 (PDF pp. 35–37).  Read Definitions II.6.1, II.6.5, II.6.8–II.6.9, Theorems II.6.2–II.6.7, and Lemmas II.6.10–II.6.11.  The two modulus results have result-specific out-of-scope dispositions; all other headings name their receiving item or proof.

### Time and space hierarchy theorems

- Sanjeev Arora and Boaz Barak, *Computational Complexity: A Modern Approach*, [full PDF](https://theory.cs.princeton.edu/complexity/book.pdf): contents PDF pp. 4–5; Chapter 3 introduction and §§3.1–3.3, printed pp. 65–67 (PDF pp. 80–82); Chapter 4 Figure 4.1, Definition 4.1 and Remark 4.2, printed pp. 75–76 (PDF pp. 90–91); and Definition 4.5, printed p. 78 (PDF p. 93).  Read the diagonalization setup and Theorems 3.1–3.3, then the explicit read-only-input/work-tape convention, work-space constructibility, and the source's L/PSPACE definitions.
- Sebastiaan A. Terwijn, *Complexity Theory* (course notes, Fall 2025), [full PDF](https://www.math.ru.nl/~terwijn/teaching/complexitytheory.pdf): contents PDF pp. 2–3; §§2.1–2.3, printed pp. 6–9 (PDF pp. 10–13); Exercise 3.5.2(a), printed p. 30 (PDF p. 34); §5.6, printed pp. 42–44 (PDF pp. 46–48).  Read the hierarchy theorems, padding exercise, and Theorem 5.6.1.
- Juris Hartmanis and John E. Hopcroft, *An Overview of the Theory of Computational Complexity*, [stable PDF](https://users.cs.fiu.edu/~giri/teach/5420/f01/papers/p444-hartmanis.pdf): §4 “Complexity Classes”, Theorem 7 and its proof, printed pp. 458–459; §6 “Naming of Complexity Classes”, Theorem 16 and its proof, printed pp. 467–468. The 32-page FIU-hosted scan was opened and the complete theorem range verified; the coverage file is the canonical, heading-level disposition record.

## Conventions, dependencies, and known limits

- Arithmetic formulas use a fixed arithmetic language; “bounded” means that every bounded quantifier is bounded by a term, and the base relation is primitive recursive.  Machines, their codes, computations, and the partial functions they compute stay distinct.
- `thm-posts-theorem` defines the finite jumps it uses in its own statement (`0^(0)=∅` and the relative-halting recursion).  This avoids silently depending on TC-18's later `def-turing-jump`; the oracle-machine convention and finite-use lemma are explicitly earlier in this A page.
- The hierarchy proof relies on total, effective simulation and reduction maps.  The totality reduction is to be compiled by s-m-n, not described as an informal program transformation.
- “Limit-computable” means a computable approximation that converges pointwise.  It does **not** include a computable modulus; the false statement isolates that distinction.
- The time proofs use the clocked, multi-tape universal-simulation convention and give parsing and simulation overhead quantitatively.  Time hierarchy retains its time-constructibility and logarithmic-overhead hypotheses; nondeterministic hierarchy retains its length-slack hypothesis.
- The pre-existing `thm-deterministic-space-hierarchy` keeps its all-tapes convention and cannot supply the L corollary.  The repair inserts a distinct read-only-input/work-tape class and constructibility interface, an explicit bridge which charges the input to translate it to all-tapes DSPACE, and a local workspace hierarchy theorem.  Its hierarchy route requires $\lceil\log_2(n+2)\rceil=O(f(n))$: this pays for the read-only input-head address in the local universal simulation, as Arora--Barak Remark 4.2 requires.  The corollary names $L=\mathrm{DWORKSPACE}(\lceil\log_2(n+2)\rceil)$ only for its specialization; it does not take TC-25's later standalone L/NL definitions as a dependency.
- Padding fixes one canonical delimiter-and-unary-padding encoding and explicitly rejects malformed strings.  Both directions must account for encoding/decoding cost.
- Gap and union are stated only in their precise abstract-complexity-measure / uniformly recursive-family forms, defining those assumptions in the statement.  They are not claimed as unconditional DTIME or DSPACE facts, and they do not decide P versus NP.

## Completed scaffold-item records

Each record supplies the exact planned claim, explicit dependency rationale, source support, and authoring route.  The manifest is the machine-readable source of the same ids, kinds, `deps` arrays, and strategy text.

### `the-arithmetical-hierarchy-and-posts-theorem` (A)

1. `def-bounded-arithmetic-formula` — define bounded arithmetic formulas over primitive-recursive matrices; deps `def-primitive-recursive-function` supplies that base class; Patey §5.1 and Cenzer II.6.6; define syntax before closure facts.
2. `def-sigma-n-pi-n-and-delta-n-sets` — define finite hierarchy levels; depends on bounded formulas; Patey §5.2 and Cenzer Definition II.6.5; quantify alternating blocks explicitly.
3. `lem-bounded-quantifiers-preserve-primitive-recursiveness` — prove bounded search preserves primitive recursiveness; deps provide the function class and syntax; Patey §5.1/Cenzer II.6.6; use bounded sum/product constructions.
4. `thm-sigma-one-sets-are-exactly-ce-sets` — establish the Sigma_1/c.e. equivalence; deps provide hierarchy syntax, computability, recognition and normal form; Patey Proposition 2.1/Cenzer II.6.2; use computation witnesses in both directions.
5. `cor-delta-one-sets-are-exactly-decidable` — identify Delta_1 with decidability; deps give both Sigma_1 characterization and recognizer vocabulary; Patey Proposition 2.2; dovetail complementary semideciders.
6. `lem-prenex-normalization-preserves-level` — normalize without a hidden level jump; deps give formulas, levels and bounded closure; Patey §5.1/Cenzer II.6.6; track negation and block padding.
7. `def-arithmetical-level-completeness` — define level completeness by total computable many-one reductions; deps provide levels and reductions; Patey Definition 5.2/Cenzer Definition II.6.8; fix the reduction convention.
8. `thm-halting-is-sigma-one-complete` — prove Sigma_1 completeness of halting; deps provide acceptable numberings, computation coding and Sigma_1/c.e.; Patey §5.4; compile each existential primitive-recursive predicate.
9. `thm-totality-is-pi-two-complete` — prove Pi_2 completeness of totality; deps provide hierarchy, completeness, T predicate, s-m-n and reductions; Patey Example 1.5; compile the witness predicate by s-m-n.
10. `def-relative-computability-and-enumerability` — define oracle computation, relative computability and A-c.e.; deps supply Turing-reduction and numbering language; Patey §4.2/Cenzer Definition II.6.1; fix oracle-query semantics.
11. `lem-oracle-computation-has-a-finite-query-witness` — isolate finite oracle use of a halting computation; depends on relative computation; Patey §4.4; trace the finite query transcript.
12. `thm-posts-theorem` — identify Sigma/Pi levels with finite-jump relative c.e./computability; deps supply syntax, oracle notions, finite use and Sigma_1 base; Patey Theorem 5.5/Cenzer II.6.7; prove the two inductions and define finite jumps locally.
13. `lem-diagonal-set-at-each-level` — obtain a level-wise diagonal set; depends on relative enumeration and Post; Patey §§4.5–4.6; diagonalize against the relative c.e. list.
14. `thm-arithmetical-hierarchy-is-strict` — show strict finite-level inclusions; deps provide levels, Post and diagonal sets; Patey Corollary 5.4; separate adjacent levels and use monotonicity.
15. `def-limit-computable-function` — define pointwise limits of computable approximations; deps provide computability; Patey §4.7; distinguish a limit from a modulus.
16. `thm-shoenfield-limit-lemma` — characterize 0'-computability by limit computability; deps provide limits, relative computation, Post and finite query use; Patey Lemma 7.2/Cenzer II.6.11; approximate oracle runs and query eventual changes.
17. `fs-sigma-n-and-pi-n-are-disjoint` — refute disjointness; deps give hierarchy and decidable Delta_1 sets; Patey §5.2; exhibit a decidable set in both classes.
18. `fs-limit-computable-has-a-known-stabilization-stage` — refute uniform known stabilization; deps give limits, the limit lemma and undecidable halting; Patey §4.7/Cenzer II.6.9–II.6.11; turn a hypothetical modulus into a halting decider.

### `the-arithmetical-hierarchy-and-posts-theorem-examples` (B)

19. `ex-sigma-one-sets-are-exactly-ce-sets` — translate a concrete enumeration to a Sigma_1 computation-witness formula; deps are the equivalence and halting completeness; Patey Proposition 2.1; verification follows the theorem’s two translations.
20. `ex-shoenfield-limit-lemma` — stage an approximation to a 0'-computable characteristic function; deps give the definition and theorem; Patey Lemma 7.2; retain only eventual convergence.
21. `cex-sigma-n-and-pi-n-are-disjoint` — give both level presentations of a decidable set; deps give hierarchy, Delta_1 and the refuted claim; Patey §5.2; contrast overlap with equality.

### `time-and-space-hierarchy-theorems` (A)

22. `def-efficient-universal-simulation-with-clock` — fix a quantitative clocked universal simulator; deps give machine coding, constructibility and complexity-class vocabulary; Arora–Barak Chapter 3/Terwijn §2.1; state decoding and simulation overhead.
23. `lem-effective-enumeration-of-clocked-machines` — enumerate total decodings of clocked programs; deps give the simulator and encoding; Arora–Barak Chapter 3; use a default machine for malformed codes.
24. `lem-time-diagonal-language-respects-its-budget` — prove the clocked diagonal language stays in its stated time; deps supply simulation, enumeration, constructibility and classes; Arora–Barak §3.1; reserve overhead before complementing.
25. `thm-deterministic-time-hierarchy` — prove proper deterministic time containment under the stated gap; deps provide budget lemma, classes and asymptotic comparison; Arora–Barak Theorem 3.1/Terwijn Theorem 2.3.2; diagonalize quantitatively.
26. `cor-p-is-properly-contained-in-exp` — specialize deterministic hierarchy; deps give the theorem and P/EXP definitions; Terwijn §2.2; apply it with $f(n)=2^{\lceil\sqrt n\rceil}$ and $g(n)=2^n$, so every polynomial is in `DTIME(f)` and $f\log f=o(g)$.
27. `thm-nondeterministic-time-hierarchy` — state and prove the nondeterministic hierarchy with its exact slack; deps give simulator, enumeration, constructibility and class notation; Arora–Barak Theorem 3.3/Terwijn Theorem 2.3.3; use the proper nondeterministic diagonal construction.
28. `lem-space-bounded-universal-simulation` — bound universal simulation space; deps supply simulator, classes and constructibility; Arora–Barak §3.2; store one active configuration and counter.
29. `lem-space-diagonal-machine-halts` — force the space diagonalizer to halt; deps give space simulation, bounded configuration count and constructibility; Terwijn §2.3; stop at the configuration bound.
30. `thm-deterministic-space-hierarchy` — prove proper deterministic space containment; deps give the forced-halting lemma, class notation and asymptotics; Arora–Barak Theorem 3.2/Terwijn Theorem 2.3.1; diagonalize under the explicit constructibility condition.
31. `def-read-only-input-workspace-classes` — define `DWORKSPACE(s)` with a read-only input tape and count only work cells, together with the matching unary-input constructibility convention and the hierarchy-route floor $s(n)\ge\lceil\log_2(n+2)\rceil$; deps supply asymptotics and the multitape machine vocabulary; Arora–Barak Figure 4.1, Definition 4.1 and Remark 4.2; keep it distinct from the all-tapes published DSPACE definition.
32. `lem-read-only-workspace-universal-simulation` — give a local work-space universal simulation; deps give the local model and the existing effective coded-machine enumeration; retain program/input on the read-only tape, obtain $O(s(n)+\log n)$ for the input-head address, then invoke the declared logarithmic floor for the claimed $O(s(n))$ bound.
33. `lem-read-only-workspace-diagonal-machine-halts` — force the local-model diagonalizer to halt; deps provide the local convention and local universal simulation; count its bounded-work configurations and stop at that bound.
34. `thm-read-only-workspace-space-hierarchy` — prove `DWORKSPACE(f) \subsetneq DWORKSPACE(g)` for work-space-constructible $f,g$ with $\lceil\log_2(n+2)\rceil=O(f(n))$ and $f=o(g)$; deps give the local model, forced-halting diagonal construction and asymptotic comparison; Arora–Barak §3.2/Theorem 3.2 with the model made explicit by its Chapter 4 Definition 4.1 and Remark 4.2.
35. `lem-read-only-workspace-simulates-in-all-tapes-space` — prove `DWORKSPACE(s) ⊆ DSPACE(n+s(n))`; deps give the new local convention and the existing all-tapes DSPACE definition; charge the at-most-$n$ input cells and the $O(s(n))$ work cells explicitly.
36. `cor-l-is-properly-contained-in-pspace` — instantiate the repaired hierarchy with $f(n)=\lceil\log_2(n+2)\rceil$ and $g(n)=n$, then use the bridge to put the separating `DWORKSPACE(n)` language in the existing all-tapes PSPACE; deps are exactly the repaired hierarchy, bridge and PSPACE definition; Arora–Barak Definition 4.5.
37. `def-language-padding` — define canonical delimiter/unary language padding; no dependencies because syntax and malformed-input convention are stated here; Terwijn Exercise 3.5.2(a); fix the encoder before transfer claims.
38. `lem-padding-transfers-time-bounds` — translate time bounds through padding; deps give the padding definition and time classes; Terwijn Exercise 3.5.2(a); prove both encoding and decoding directions quantitatively.
39. `thm-gap-and-union-theorems-for-complexity-bounds` — give the conditional abstract gap and union theorems; depends on computability for recursive bounds; Terwijn Theorem 5.6.1 and Hartmanis–Hopcroft Theorems 7 and 16; define the complexity-measure hypotheses in the statement.
40. `prop-hierarchy-theorems-do-not-separate-p-from-np` — explain the logical scope of the hierarchy theorems; deps give deterministic/nondeterministic hierarchy and P/NP definitions; Arora–Barak Chapter 3; compare quantifiers without asserting P versus NP.
41. `fs-unrestricted-diagonalization-respects-any-bound` — refute a no-overhead diagonalization claim; deps give the simulator and deterministic hierarchy; Arora–Barak §3.1; show why parsing, simulation and constructibility must be budgeted.

### `time-and-space-hierarchy-theorems-examples` (B)

42. `ex-time-diagonal-language-respects-its-budget` — trace an encoded clocked input through its reserved budget; deps are the time-budget lemma and theorem; Arora–Barak §3.1; verify each overhead component.
43. `ex-hierarchy-theorems-do-not-separate-p-from-np` — compare a hierarchy separation with the P/NP statement; depends on the scope proposition; Arora–Barak Chapter 3; identify the absent implication.
44. `cex-unrestricted-diagonalization-respects-any-bound` — exhibit lost budget from unreserved universal simulation; deps are the false statement and simulator; Arora–Barak §3.1; calculate the overhead on a coded input family.

## Validation checkpoint and next action

The manifest has explicit `deps` arrays on all 44 items and no A-page split is needed.  The post-fix validation results are recorded in the Step-3 checkpoint below.

The five exact source URLs were re-opened as full text in the web reader and are recorded as `web-open` receipts (PDF page counts: 368, 348, 489, and 103; the survey was substantive HTML).  The local Node fetcher and URL sweep both failed all five with DNS `EAI_AGAIN`/“Could not resolve host”; this is a sandbox-wide DNS restriction, not a re-sourcing conclusion.  No byte hash is claimed.  Retain this concrete environment limitation for Alpha rather than treating it as evidence that any source URL is stale.

## Step-3 fix pass

- Finding `time-and-space-hierarchy-theorems.missing[0]` in `research/frontier-31a-alpha-d-step3-verdicts.json` — **applied**.  The direct Hartmanis–Hopcroft URL was opened as substantive 3,687-line full-text HTML.  Its §4/Theorem 7 range (printed pp. 458–459) and §6/Theorem 16 range and proof (printed pp. 467–468) were read; Theorem 16 constructs a recursive bound for the union of an increasing recursively enumerable family.  Changed scaffold record: `research/frontier-31a-batch-21.coverage.json`, source row “Juris Hartmanis and John E. Hopcroft …”, with exact locator, `web-open` fetch verification, and four source-heading/result dispositions, all carried by `thm-gap-and-union-theorems-for-complexity-bounds`.  This completes the missing Union-Theorem half without weakening the paired item to Gap alone.

- Finding `time-and-space-hierarchy-theorems.missing[1]` in `research/frontier-31a-alpha-d-step3-verdicts.json` — **applied**.  Arora–Barak §3.2/Theorem 3.2 gives the hierarchy route; its Figure 4.1, Definition 4.1, Remark 4.2, and Definition 4.5 make the required read-only-input/work-tape convention, constructibility condition, and L/PSPACE notation explicit.  Changed scaffold records: `def-read-only-input-workspace-classes` fixes `DWORKSPACE(s)`, local constructibility, and the logarithmic floor required to address the input head; `lem-read-only-workspace-universal-simulation` first records its $O(s(n)+\log n)$ space use and then applies that floor; `lem-read-only-workspace-diagonal-machine-halts` exposes the local proof's halting step; `thm-read-only-workspace-space-hierarchy` proves the compatible strict hierarchy under the same floor; `lem-read-only-workspace-simulates-in-all-tapes-space` proves `DWORKSPACE(s) ⊆ DSPACE(n+s(n))`; and `cor-l-is-properly-contained-in-pspace` now depends on precisely those local results plus `def-pspace-and-npspace`.  The all-tapes `thm-deterministic-space-hierarchy` remains unchanged and is no longer used for this different-model corollary.  The local interface intentionally does not depend on batch 22 or duplicate its later standalone `def-l-and-nl` item.

- Finding `the-arithmetical-hierarchy-and-posts-theorem` / verdict `sufficient` — **stands; no change required**.  Its two fetch-verified independent primary treatments and all 21 manifest records remain source-grounded and dependency-closed.  Changed scaffold record: none.

- Source verification evidence: each of the five coverage URLs has a `fetch_verified` receipt.  Four were opened as complete PDFs (368, 348, 489, and 103 pages); the Hartmanis–Hopcroft source was opened as substantive full-text HTML.  The sandbox Node fetcher remains DNS-blocked, so the receipts faithfully record `web-open` verification and no unavailable local byte hash.

- Post-fix validation: `node tools/manifest-deps.mjs research/frontier-31a-batch-21.pages.json` reports `44` items, `0` normalized, `0` errors; `node tools/coverage-checklist.mjs --require-destination research/frontier-31a-batch-21.coverage.json` reports `2` pages, `65` harvested results, `0` errors/warnings; `node tools/content-policy.mjs --manifest-only research/frontier-31a-batch-*.pages.json` reports `908` scoped items, `0` errors/warnings; and `node tools/source-fetch-check.mjs --coverage research/frontier-31a-batch-21.coverage.json` reports `5/5` sources fetch-verified.  `node tools/validate-plan.mjs research/plan-spec.json` exits `0`: the declared page order is acyclic and consistent, with no item-level cycles, forward references, B-page dependencies, or unresolved IDs among the `746` pages with item lists.  The validator emits only pre-existing whole-plan redundant-prerequisite warnings.  No batch-21 scaffold obligation remains.

## Scaffold-fix round

- Finding `closure-work[1]: time-and-space-hierarchy-theorems / Union Theorem` — **applied**. The current batch-21 coverage file had no Hartmanis--Hopcroft source row despite the earlier Step-3 note claiming one, so that note could not satisfy the closure finding. I re-opened the specified full-text URL and read §6 from its opening through the complete Theorem 16 proof (printed pp. 467--468; full-text HTML lines 2327--2510 of 3,687). The theorem gives a recursive bound whose abstract complexity class is the union of a recursively enumerable increasing sequence of such classes. The coverage now records the fresh `web-open` fetch-verification receipt, exact locator, and dispositions for the §6 union development, Theorem 16, its construction, and proof: the theorem statement is carried by `thm-gap-and-union-theorems-for-complexity-bounds`, while the construction and proof are inline to that same item. No new item was needed because that existing item already explicitly planned both the gap and union results and has `deps: ["def-computable-and-partial-computable-function"]`.

- Validation after the source-row placement correction: `manifest-deps` reports 44 items, 0 normalized, 0 errors; `coverage-checklist --require-destination` reports 2 pages, 65 harvested results, 0 errors/warnings; `source-fetch-check` reports 5/5 sources fetch-verified; the whole-run `content-policy --manifest-only research/frontier-31a-batch-*.pages.json` reports 908 scoped items and 0 errors/warnings; and `validate-plan` exits 0, reporting no item-level cycles, forward references, B-page dependencies, or unresolved IDs. The plan validator still emits its pre-existing whole-run redundant-prerequisite advisories only. The Hartmanis--Hopcroft row was first detected under the wrong A-page array by the source-count check and immediately moved intact to `time-and-space-hierarchy-theorems`; no harvested result was removed.

- Owner source-liveness repair: the ResearchGate endpoint later returned HTTP
  403 and had no archive recovery. It was retired and replaced in the canonical
  coverage row by the verified 32-page FIU-hosted scan of the same JACM paper,
  with §6/Theorem 16 at printed pp. 467–468 (PDF pp. 23–24). The theorem and
  proof dispositions are unchanged.

## Step-5 authoring

- Authored all planned draft items: TC-17 A `def-bounded-arithmetic-formula`,
  `def-sigma-n-pi-n-and-delta-n-sets`,
  `lem-bounded-quantifiers-preserve-primitive-recursiveness`,
  `thm-sigma-one-sets-are-exactly-ce-sets`,
  `cor-delta-one-sets-are-exactly-decidable`,
  `lem-prenex-normalization-preserves-level`,
  `def-arithmetical-level-completeness`, `thm-halting-is-sigma-one-complete`,
  `thm-totality-is-pi-two-complete`,
  `def-relative-computability-and-enumerability`,
  `lem-oracle-computation-has-a-finite-query-witness`, `thm-posts-theorem`,
  `lem-diagonal-set-at-each-level`, `thm-arithmetical-hierarchy-is-strict`,
  `def-limit-computable-function`, `thm-shoenfield-limit-lemma`,
  `fs-sigma-n-and-pi-n-are-disjoint`, and
  `fs-limit-computable-has-a-known-stabilization-stage`; and B
  `ex-sigma-one-sets-are-exactly-ce-sets`, `ex-shoenfield-limit-lemma`, and
  `cex-sigma-n-and-pi-n-are-disjoint`.
- Authored all planned draft TC-24 A items: the clocked simulation,
  time/space hierarchy, local read-only-workspace bridge and hierarchy,
  padding, conditional gap/union, scope proposition, and false statement;
  plus its three B examples. The four pages were written directly under
  `library/computability-theory/`.
- Provenance is literature-derived for statements, with locally written proofs
  tagged ai-generated and definitions tagged not-applicable. The source basis
  is the exact coverage locators: Patey/Cenzer--Remmel for arithmetic and
  Arora--Barak, Terwijn, and Hartmanis--Hopcroft for complexity. Post's theorem
  defines finite jumps locally; the L/PSPACE corollary uses only the newly
  authored local read-only-workspace theorem and explicit all-tapes bridge.
- No planned claim was dropped or narrowed. The gap/union theorem retains its
  source-qualified abstract Blum-measure and recursive-family hypotheses; it
  is not stated as an unconditional DTIME/DSPACE result. No blocker remains.
- Checks run: explicit 44-path `precheck` passed after canonical tag repairs;
  `content-policy` reported 44 scoped items, 0 errors/warnings;
  `proof-contract --strict` reported 36/36, 0 errors/warnings; and
  `validate-plan.mjs research/plan-spec.json` completed successfully (its
  verbose whole-plan report was truncated by the terminal). `git diff --check`
  completed without reported whitespace errors.
