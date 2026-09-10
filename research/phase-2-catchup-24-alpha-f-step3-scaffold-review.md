# Phase 2 catch-up 24 — Alpha group f Step-3 scaffold review

Run: `phase-2-catchup-24`  
Group: `f`  
Batches reviewed: `12`, `13`

| Batch | A page | B page | Verdict |
|---|---|---|---|
| 12 | `one-tape-simulation-normal-forms` | `one-tape-simulation-normal-forms-examples` | **sufficient** |
| 13 | `boone-machine-simulation-and-fixed-presentation-undecidability` | `boone-machine-simulation-and-fixed-presentation-undecidability-examples` | **sufficient** |

I independently reviewed the current manifests, coverage records, notes, assigned design sections, current plan entries, Step-0 no-drift report, published prerequisites actually used by the proof plans, both companion pages, and the relevant complete source text. Batch 12 has three A items and two B items. Batch 13 has thirteen A items and three B items. Both pairs are in legal proof order, remain well below the 60-item A-page limit, preserve every commissioned mathematical result, and need no new prerequisite pair or shared prose-scaffold/plan edit.

## Batch 12 — one-tape simulation normal forms

The page's two declared prerequisites are published and earlier: `turing-machine-configuration-boundary-interface` supplies the exact input, halting, finite-support and clamped-left-boundary conventions, while `turing-machines-configurations-and-computation` supplies the ordinary L/R machine, configuration and one-step interfaces. The proof does not silently apply the L/R-only boundary theorem to an S-machine: `def-stay-put-one-tape-machine-and-run-interface` reconstructs the extended step/run interface and proves its well-definedness from the lower-level suppliers.

The load-bearing path is

`def-stay-put-one-tape-machine-and-run-interface`
→ `lem-stay-put-right-left-macro-simulation`
→ `thm-stay-put-elimination-with-explicit-simulation-interface`.

Every edge is adequate in statement, direction and hypotheses. Finite support after writing is proved through finite adjunction and `thm-subset-of-a-finite-set`; recursion is applied to a total identity extension only as a set-theoretic construction, not misclassified as a divergent run. The marked state product separates original and intermediate states, is finite, and gives a total ordinary transition table. For an S step at head `h`, the simulator writes at `h`, moves to `h+1`, preserves the arbitrary symbol there, and returns left to exactly `h`; this includes `h=0` and transitions whose target is an original halting state, because its tagged intermediate copy remains nonhalting. The theorem's boundary times `k_i=i+s_i` partition every simulator time into a macro boundary or the unique interior S-macro state. The bounds make boundary times unbounded on infinite runs, so acceptance, rejection and divergence are preserved in both directions, including empty input and the whole halting tape/head output.

| Item | Independent review |
|---|---|
| `def-stay-put-one-tape-machine-and-run-interface` | Complete definition and run-existence/uniqueness route; exact ZF dependencies are present. |
| `lem-stay-put-right-left-macro-simulation` | Complete finite-state construction; boundary, neighbor-symbol and halting-target cases are handled. |
| `thm-stay-put-elimination-with-explicit-simulation-interface` | Complete induction and time-partition argument; halting data and two-way divergence follow. |
| `ex-eliminating-a-stay-put-transition` | Direct trace is a valid instance of the constructed macro, including the left boundary. |
| `cex-deleting-stay-put-moves-does-not-preserve-computation` | Separates ill-formed deletion from a complete but inequivalent S-to-R replacement and supplies the complete finite transition witness. |

The B page requires only its A page and every B item is a leaf. Neither example introduces a hidden model convention or a later result.

### Batch-12 source adjudication

The active independent treatments are Stephen Checkoway, *CS 301 Lecture 16: Turing machine variants*, printed slides 2–10/PDF pages 2–19, and John E. Savage, *Models of Computation*, §5.1, printed pages 210–211. The former supports the explicit marked-state right/left macro and the latter supplies the independent textbook treatment of finite control and tape operations. Both have current full-PDF fetch stamps.

The UNSW Lecture 7 record has a complete `source_resolution` with `status: dropped`, an initial real failure plus at least five real recovery retries, institution/author/archive searches, and three alternative arguments. I independently checked all three alternatives:

- The interface argument proves configuration-set formation, finite-support preservation, unique successor/maximal run and the first-halting-index convention from exactly `def-deterministic-one-tape-turing-machine`, `def-one-step-configuration-relation`, `def-turing-machine-initial-and-halting-configuration-interface`, recursion, induction and finite-subset closure.
- The macro argument supplies the full tagged transition table and verifies both directions of the one- versus two-step segment claim from its seven declared dependencies.
- The global simulation argument proves the boundary-time identity, time partition, all three outcomes and input/output preservation from the interface, macro, recursion, induction and named natural-number order/addition suppliers.

Thus the drop loses no result, hypothesis or dependency and creates no owner escalation. The active Checkoway treatment corroborates the same construction; the missing original is not required as an axiom.

## Batch 13 — Boone simulation and fixed-presentation undecidability

All eight page prerequisites are published and earlier. The actual machine path uses the fixed recognizer constructed in `thm-halting-is-recognizable-and-undecidable`, the exact ordinary machine/configuration interfaces, and a local finite compiler. The algebraic path uses the fixed-presentation definition, free-group and free-product normal forms, HNN/Britton/base-embedding results, quotient/equivalence machinery, and explicit `def-axiom-of-choice` wherever transversal normal forms are used. No stronger computability equivalence, Higman embedding result, or recorded/deferred theorem is imported.

The semantic path is closed:

`thm-halting-is-recognizable-and-undecidable`
→ `lem-normalized-fixed-halting-machine-for-boone-simulation`
→ `def-boone-machine-semigroup-and-augmented-configurations`
→ `lem-boone-semigroup-histories-detect-halting`
→ `thm-fixed-finite-semigroup-has-undecidable-terminal-equality`
→ `def-boone-group-presentation-and-special-word`
→ the base-group/HNN/pushing/extraction/reconstruction lemmas
→ `thm-boone-special-word-equivalence`
→ `thm-novikov-boone-undecidability-of-the-word-problem`.

The machine compiler is concrete: it dots cell zero, splits write from motion, implements the right-infinite clamp by a no-op at the dot, maps acceptance to one stop and rejection/unreachable cases to total loops, and handles the empty input. The semigroup definition includes all five instruction families, all three cleanup families, an explicit contextual congruence, and augmented configurations with an empty right tape allowed at `q0`. Determinism and shortest-path valley deletion justify the converse history implication without pretending arbitrary semigroup words are configurations.

The group presentation is equally explicit. Sharp changes the sign of each tape letter without reversing order. The base is `H * F(Qbar)`, so no spurious state/x commutation is assumed. The free bases of the rule-edge subgroups follow from the tape retraction and a free-product Nielsen automorphism; the rule-letter tower then follows by finite successive HNN extensions. The subgroup centralized by `t` is the actual free subgroup `C=<x,r_i>`, while the subgroup centralized by `k` is the actual generated subgroup `D=<x,r_i,q^-1 t q>`—no unnecessary freeness or full-centralizer claim is made. AC strength is visible in every dependent statement.

The four pushing identities were checked with their signs and empty-context cases. Britton extraction treats both possible later t-pinches and uses a minimal expression in `D`. The no-rule-pinch lemma proves the necessary intersections with `<x>` are trivial. Positive reconstruction retains the stronger signed-word induction, both orientations of the rule relation, the `theta` symmetry, empty prefixes/suffixes, and the endpoint-sign test preventing fresh cancellation. These are precisely the premises needed for the two directions of the special-word equivalence. The last theorem fixes the recognizer, compiler, semigroup and presentation once and varies only the effectively written input word, so its quantifiers establish a single fixed finite presentation rather than merely uniform undecidability.

| Item | Independent review |
|---|---|
| `lem-normalized-fixed-halting-machine-for-boone-simulation` | Complete finite compiler and two-way run invariant, with one stop and empty-input handling. |
| `def-boone-machine-semigroup-and-augmented-configurations` | Complete finite relation inventory, congruence well-definedness and corrected augmented domain. |
| `lem-boone-semigroup-histories-detect-halting` | Complete forward/cleanup route and deterministic valley-removal converse. |
| `thm-fixed-finite-semigroup-has-undecidable-terminal-equality` | Correct fixed-object reduction; no unused recursive-set closure is needed. |
| `def-boone-group-presentation-and-special-word` | Complete finite presentation and correct same-order sharp convention. |
| `lem-boone-base-groups-and-associated-free-bases` | Adequate iterated-HNN, retraction and free-product automorphism proof; corrected base group. |
| `lem-boone-hnn-tower-and-auxiliary-subgroups` | Adequate successive extensions, embedded bases and exact actual associated subgroups. |
| `lem-boone-positive-history-pushing` | All four signed identities and both rewrite orientations are supplied. |
| `lem-boone-commutator-extracts-an-auxiliary-history` | Complete k- then t-Britton argument with the minimality contradiction. |
| `lem-boone-reduced-auxiliary-words-have-no-rule-pinches` | Correct edge-subgroup intersection and stable-letter-length comparison. |
| `lem-boone-positive-history-reconstruction` | Complete stronger induction, including both signs and all cancellation boundary cases. |
| `thm-boone-special-word-equivalence` | Correct composition on the stated positive-special-word domain. |
| `thm-novikov-boone-undecidability-of-the-word-problem` | Correct computable reduction to one fixed presentation with explicit inherited AC. |
| `ex-boone-sharp-is-not-word-inversion` | Correctly distinguishes same-order sign change from group-word inversion. |
| `ex-boone-halting-cleanup-through-an-empty-right-tape` | Directly exhibits the corrected `q0` augmented configuration and all cleanup steps. |
| `ex-fixed-boone-undecidability-implies-uniform-undecidability` | Correct restriction argument from the uniform problem to the fixed hard presentation. |

The B page requires only the A page and its three items are leaves. Its cleanup example is especially important evidence that the scaffold does not inherit the source's false nonempty-right-tape invariant.

### Batch-13 source adjudication

The textbook treatment is Joseph J. Rotman, *An Introduction to the Theory of Groups*, Chapter 12, complete targeted text at printed pages 418–433 and 438–447. I checked the machine/semigroup construction, Theorem 12.5 and Corollary 12.6, the Boone presentation, Lemmas 12.10–12.15, and the sufficiency and necessity arguments through their QEDs. The recovered 53-page PDF has a current fetch stamp and recorded SHA-256 evidence. The independent full treatment is Stephen G. Simpson, *A Slick Proof of the Unsolvability of the Word Problem for Finitely Presented Groups*, all five pages, especially Definition 1 and Theorem 8; it independently confirms the HNN/base-embedding setup and the fixed-presentation endpoint while being correctly marked as a cross-check rather than backing for Rotman's positive-reconstruction lemma.

The scaffold expressly repairs, rather than propagates, the source's load-bearing slips:

- Rotman's Lemma 12.3 uses a nonempty-right-tape assertion that fails during stopping cleanup; the owned augmented domain allows the empty right side at `q0`.
- The printed Lemma 12.11 passage introduces an unintended state/x commutation while later using a free state factor; the owned base is explicitly `H * F(Qbar)`.
- The printed Corollary 12.9 specialization omits the conjugated `t`; the owned definition and reduction use the full commutator `W(Sigma)`.
- Theorem 12.2's displayed enumeration is not used. Its decline stands because the direct fixed-HALT reduction never needs recognizable identity language.

All 39 harvested rows have a disposition. The one coverage-checklist warning is only a low-yield-source warning for Simpson: the complete paper supplies a genuine independent endpoint/HNN cross-check, so it does not indicate a missing result. There is no source drop or owner escalation in batch 13. The coverage file's top-level `status: blocked-source-fetch` and corresponding old prose in the notes are stale relative to the present `fetch_verified` records and passing source-fetch gate. The owning Beta should reconcile that bookkeeping before later handoff, preserving the historical recovery attempts. This metadata mismatch is not a missing mathematical prerequisite or unresolved source and therefore does not change the pair verdict.

## Dependency exactness, published-consumer boundary and Foundations boundary

All manifest item IDs resolve, all item dependencies point backward or to published items, and all page `requires` are earlier. The few conservative dependencies that are not strictly needed for an elementary subcalculation are harmless earlier local context rather than concealed axioms: for example, `lem-boone-positive-history-pushing` can verify its identities directly from the presentation even though the declared HNN-tower edge also supplies the ambient embedded-group interface; `lem-boone-positive-history-reconstruction` names the preceding extraction and pushing stages although its internal induction's mathematical work is the no-pinches/base-group route. Retaining those edges does not strengthen a conclusion, add a cycle, cross the Foundations boundary, or substitute an unproved result. Removing them is unnecessary and would only weaken the recorded pipeline context.

The published-consumer ledger contains older computability and group-theory consumer debt. None is a premise of an owned proof. In particular, batch 12 proves its macro directly and does not consume the historical `thm-stay-put-moves-can-be-eliminated` or a multitape simulation theorem. Batch 13 reduces directly through its owned semigroup and Boone group construction and does not consume the ledgered published `fs-*` consequences. Under the Phase-2 supplier/Phase-3 consumer boundary, those unrelated consumer defects remain Phase-3 debt and are not supplier verdict failures.

Neither owned page is a Foundations page. I traced the actual item paths, `requires`, `deps`, empty `justified_by` arrays and load-bearing references. No path reaches `deferred-set-theory-beyond-choice` or an item recorded there. Batch 12 is proved in ZF. Batch 13's uses of choice are explicit through `def-axiom-of-choice`; the deferred catalogue is neither a supplier nor a proof axiom.

## Frontier dependency ledger

Neither batch consumes a same-frontier page or item. Batch 12 depends only on earlier published Turing-machine pages; batch 13 deliberately compiles the earlier published fixed recognizer directly and does not use batch 12's stay-put normal form. Accordingly both per-batch files are `[]`. Refresh records batches 12 and 13 as reviewed and introduces no edge for group f.

## Scope decisions

`scope-decisions refresh` found 17 current declined rows. Each is resolved `stands` with item-level evidence in `research/phase-2-catchup-24-alpha-f-scope-decisions.json`. The declined UNSW two-sided-tape conversion is not used by the right-infinite stay-put macro. Rotman's elementary exercises and Theorem 12.2, and Simpson's modular-machine/good-subgroup route and stronger Turing-degree remark, supply no premise of the direct Boone reduction. `scope-decisions check` reports 17 current declines and zero errors.

## Checks run

- `node tools/scope-decisions.mjs refresh --run phase-2-catchup-24 --group f` — 17 current declines, 17 initially pending.
- `node tools/scope-decisions.mjs check --run phase-2-catchup-24 --group f` — 17 current declines, 0 errors.
- `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-catchup-24 --require-reviewed` — refreshed all 16 reviewed batches; group-f inputs remain empty.
- `node tools/coverage-checklist.mjs research/phase-2-catchup-24-batch-12.coverage.json` — 1 A page, 14 harvested rows, 0 errors, 0 warnings.
- `node tools/coverage-checklist.mjs research/phase-2-catchup-24-batch-13.coverage.json` — 1 A page, 39 harvested rows, 0 errors, 1 low-yield warning.
- `node tools/source-fetch-check.mjs --coverage research/phase-2-catchup-24-batch-12.coverage.json,research/phase-2-catchup-24-batch-13.coverage.json --stamp` — 4/5 source records verified (0 newly stamped), 5/5 resolved, one documented drop.
- `node tools/content-policy.mjs --manifest-only research/phase-2-catchup-24-batch-12.pages.json research/phase-2-catchup-24-batch-13.pages.json` — 21 scoped items, 0 errors, 0 warnings.
- `node tools/manifest-deps.mjs research/phase-2-catchup-24-batch-*.pages.json` — 691 items, 0 normalized, 0 errors.
- `node tools/validate-plan.mjs research/plan-spec.json` — pass; 1,624 pages, no dependency cycles, missing item IDs or forward item edges among itemized pages.
- `node tools/extcheck.mjs --quiet` — pass with 57 pre-existing published/unproved warnings at the final concurrent snapshot; none is an actual premise of an owned proof.

## Handoff

Both pairs are author-ready at scaffold level. The owning Beta has no mathematical or dependency repair to make from this review. The only follow-up is to reconcile batch 13's stale top-level source-status prose with its already-present verified fetch receipts and passing gate; no result, source disposition, dependency, or verdict changes.
