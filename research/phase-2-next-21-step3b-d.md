# Step 3b group d — author checkpoint and handoff

Run `phase-2-next-21`; role `alpha-high`; dispatch `step3b-d-7a7cfeefa33a2544`; owned batches 11, 12, and 4.

## Source and scaffold audit

I read `CLAUDE.md`, `README.md`, `SCHEMA.md`, the Step 3 sections of `WORKFLOW.md`, the group-author and dependency-ledger briefs, the six assigned design sections, all three page manifests and coverage files, all six Step 3a scope reviews, the current plan objects, the active-run state, and the relevant published supplier statements/proofs. No owner-authoring-direction file exists for this run.

Authoritative arguments read in full for the claims used here:

- Asaf Karagila, *Forcing & Symmetric Extensions* (2023), Chapters 3–4 (preservation, nice names, Cohen/collapse forcing), Chapter 6 (two-step and finite-support iterations), Chapter 7 (MA and the bookkeeping proof), and Chapter 10 (symmetric extensions and the basic Cohen model), `https://karagila.org/files/Forcing-2023.pdf`.
- Kenneth Kunen, *Set Theory* (1980), the assigned forcing and iteration sections, `https://fa.ewi.tudelft.nl/~hart/set_theory/Jech/Kunen-1980-Set_Theory.pdf`.
- Thomas Jech, *The Axiom of Choice* (1973), Chapter 4 §§4.1–4.5, Chapter 5 §§5.2–5.4, and Chapter 6 §6.1 plus Problem 6.1, `https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf`.
- A. W. van der Vaart, *Martingales, Diffusions and Financial Mathematics*, Chapter 2 §§2.1–2.9, `https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf`.
- Sébastien Roch, *Notes 19: Martingale CLT*, Theorem 19.15 and its complete proof, and *Notes 20: Azuma's Inequality*, Theorem 20.8 and its complete proof, `https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes19.pdf` and `https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes20.pdf`.

The local source copies were SHA-checked before extraction. Citations below use printed theorem/section locators; the copies are evidentiary working material in `/tmp`, not repository outputs.

Confirmed local scaffold repairs:

1. Batch 4 omitted the direct `def-axiom-of-choice` dependency and explicit “Assume AC” clause from downstream items whose proofs use the library's AC-dependent martingale/conditional-expectation representatives. The manifest has been repaired item-by-item while keeping Wald's direct Tonelli proof, elementary stopping-time definitions, and the last-exit counterexample choice-free.
2. `lem-doob-upcrossing-inequality` used convexity of $x\mapsto a+(x-a)^+$ without listing `thm-convex-functions-of-martingales-are-submartingales`; that supplier and direct AC dependency were added.
3. Batch 12's `thm-basic-fraenkel-model` uses AC-implies-well-orderability to infer failure of AC, so `thm-well-ordering-theorem` was added. Conversely `thm-hereditarily-symmetric-interpretations-form-a-zf-model` is choice-free: the unused `def-axiom-of-choice` edge was removed and the direct `thm-forcing-theorem` edge actually used by its truth-lemma argument was added.
4. Batch 4's martingale CLT scaffold listed `lem-product-of-near-one-characteristic-factors`, but the verified Roch proof uses a conditional telescoping exponential rather than a deterministic product lemma. The unused edge was removed; all remaining dependencies occur in the authored proof.
5. Two owned B-page items depended on another B-page leaf, `ex-cohen-name-valuation-and-dense-set-meeting`. `ex-two-cohen-reals-as-mutually-generic-coordinates` now derives distinctness from its A-page coordinate theorem, and `fs-ccc-means-countably-closed` now gives its own descending Cohen-condition witness. The forbidden edges were removed from item and manifest records.
6. `lem-ma-reduction-to-small-ccc-orders` no longer invokes an unnecessary Löwenheim–Skolem theorem; its proof closes a countable set explicitly under dense witnesses and common extensions. `thm-ma-small-unions-of-meagre-sets` now uses its direct $\sigma$-centered finite rational-array forcing and no longer lists the irrelevant almost-disjoint-family lemma.
7. Karagila Theorem 7.7 prints an extension clause for its almost-disjoint coding forcing that is not transitive when a new side-condition index is later used. `thm-ma-cardinal-exponentiation-below-continuum` now uses the standard protected-complement forcing: finite $F\subseteq\kappa\setminus X$ prevents all later $1$-bits on $\bigcup_{\alpha\in F}A_\alpha$. Conditions with a common stem are centered; the positive dense sets avoid finitely many almost-disjoint intersections; and directedness against a fixed condition meeting $E_\alpha$ proves the negative coding clause.
8. The ordered Mostowski proof now derives the finite-support intersection lemma via finite increasing partial bijections and intervalwise back-and-forth, then refutes a supported well-order using the least atom outside its support. The Jech–Sochor first embedding now includes the missing local ZF-model verification before the rank-bounded membership/equality induction.
9. The owner receipt `phase-2-next-21-step3a-owner-symmetric-extensions-and-basic-choice-failure-models.json` resolved the socks scaffold: Jech's mates are sets of reals, not reals. The definition, theorem, coordinate-swap example, false-statement clause, manifest, coverage, and page prose all use the approved formulation.
10. Further item-level repairs include the finite-root counting in `thm-collapse-and-levy-collapse-effects`, empty coordinate factors in `thm-mutually-generic-cohen-coordinate-reals`, the bounded divided-difference step in conditional Hoeffding, the ordering of the reverse-martingale limit argument, and removal of the last-exit counterexample's unused conditional-expectation edge.

No cross-batch dependency was introduced: the SET-16→SET-15, SET-19→SET-18, and PT-14→PT-13 edges are all internal to their respective owned batches.

## Item checkpoints

Each row was added only after the named item had been written. Its state column records the checkpoint-time next action; the final dispositions and gates below supersede those historical `pending` markers.

| Sequence | Item | Claim/conventions and source locator | Dependencies examined | State / next action |
|---:|---|---|---|---|
| 1 | `def-kappa-closure-distributivity-and-chain-condition` | Strict `<κ` closure/distributivity and `<κ` antichain size; Karagila Ch. 4 definitions | all 3 manifest deps | authored; pending gates |
| 2 | `thm-closure-distributivity-and-no-short-sequences` | ZFC equivalence, closure implication, no short subsets/collapses; Karagila Thms. 4.2–4.3 | all 4 deps; AC used for recursive choices/well-orders | authored; pending gates |
| 3 | `thm-chain-condition-preserves-cofinalities-and-cardinals` | regular `θ` chain condition preserves cofinalities/cardinals at least `θ`; Karagila Ch. 3 preservation | all 6 deps; maximal antichains and cardinal unions checked | authored; pending gates |
| 4 | `def-nice-name-for-a-subset` | antichain-per-coordinate form, no reduction built into definition; Karagila Def. 3.32 | all 3 deps | authored; pending gates |
| 5 | `thm-nice-name-reduction-and-counting` | maximal-antichain reduction and `(μ^aleph0)^λ` count; Karagila Thm. 3.33 | all 5 deps; empty `A` and real specialization checked | authored; pending gates |
| 6 | `def-cohen-collapse-and-levy-collapse-forcings` | reverse-inclusion partial-function conventions and distinction of `Col` from `Lv`; Karagila Chs. 3–4 | all 3 deps | authored; pending gates |
| 7 | `lem-generalized-delta-system-for-small-supports` | `θ`-sized delta subsystem under `|α|^{<κ}<θ`; Kunen generalized delta-system argument | all 5 deps; regular thinning and special `ρ^+` case checked | authored; pending gates |
| 8 | `thm-cohen-forcing-closure-and-chain-condition` | union closure and root-agreement compatibility; Karagila Ch. 4 | all 4 deps; `κ=ω` separated | authored; pending gates |
| 9 | `thm-collapse-and-levy-collapse-effects` | generic surjections, `θ`-cc, preservation, and `θ=aleph1`; Karagila Chs. 3–4 | all 6 deps | authored; pending gates |
| 10 | `thm-mutually-generic-cohen-coordinate-reals` | total/distinct coordinates and product factorization; Karagila product forcing discussion | all 4 deps | authored; pending gates |
| 11 | `thm-cohen-forcing-controls-the-continuum` | lower coordinate injection and upper nice-name count; Karagila Thm. 3.35 | all 6 deps | authored; pending gates |
| 12 | `thm-higher-cohen-forcing-violates-gch` | closure/cc split, generalized nice-name bound, CH preservation in instance | all 6 deps | authored; pending gates |
| 13 | `rem-easton-support-for-continuum-patterns` | orientation only; monotonicity and König cofinality restriction, no Easton theorem claim | both deps | authored; pending gates |
| 14 | `lem-formal-cohen-forcing-verification-compiler` | explicit proof-code parser/dispatcher, two forcing schedules, PA line-check induction; Kunen Chs. VII–VIII and local formal suppliers | all 6 deps; malformed input and no-CTM boundary explicit | authored; pending gates |
| 15 | `cor-formal-negative-consistency-of-ch-and-gch` | two PA consistency implications, no Recorded premise | both deps | authored; pending gates; next `ex-nice-name-for-a-cohen-coordinate-real` |
| 16 | `ex-nice-name-for-a-cohen-coordinate-real` | singleton bit condition (or retained maximal-antichain part) evaluates exactly to coordinate real | all 3 deps; empty bit case checked | authored; pending gates |
| 17 | `ex-levy-collapse-of-a-regular-cardinal` | explicit domain/range dense sets and preservation at `θ` | sole dep | authored; pending gates |
| 18 | `ex-two-cohen-reals-as-mutually-generic-coordinates` | restriction/union product isomorphism, dense disagreement witness | both deps | authored; pending gates |
| 19 | `fs-ccc-means-countably-closed` | `Add(ω,1)` ccc but descending finite-zero strings have no condition lower bound | all 3 deps; strict `ω` versus `aleph1` closure checked | authored; pending gates; next `def-two-step-forcing-iteration` |
| 20 | `def-two-step-forcing-iteration` | pair order with forced second-coordinate relation, modulo forced equality | both deps | authored; pending gates |
| 21 | `thm-two-step-generic-factorization-and-ccc` | both generic directions, model equality, and ccc proof; Karagila Thms. 6.4–6.5 | all 4 deps; AC/maximal antichains explicit | authored; pending gates |
| 22 | `def-finite-support-forcing-iteration` | recursive successor/limit definition with finite support and top names | both deps | authored; pending gates |
| 23 | `lem-iteration-restrictions-and-complete-embeddings` | padded-stage compatibility only, reduction/amalgamation and quotient | all 3 deps; arbitrary-restriction caveat retained | authored; pending gates |
| 24 | `thm-finite-support-iterations-preserve-ccc` | successor plus both limit-cofinality cases; Karagila Thm. 6.14 | all 5 deps | authored; pending gates |
| 25 | `lem-bounded-stage-capture-in-finite-support-iterations` | nice-name support union bounded below uncountable-cofinality limit | all 5 deps; coded-object qualification retained | authored; pending gates |
| 26 | `lem-finite-support-iteration-size-bound` | dense coherent presentations only, not raw redundant-name bound | all 4 deps | authored; pending gates |
| 27 | `def-martins-axiom` | strict `κ<c` scheme and dense/open equivalence | all 3 deps | authored; pending gates |
| 28 | `thm-rasiowa-sikorski-and-ch-implies-ma` | descending sequence, upward-closure filter, CH quantifier reduction | all 3 deps | authored; pending gates |
| 29 | `lem-ma-reduction-to-small-ccc-orders` | repaired from an unnecessary LS supplier to an explicit countable hull-closure construction preserving compatibility | 2 retained deps; removed `thm-downward-lowenheim-skolem-with-parameters` | authored; pending gates; decision must be `repaired` |
| 30 | `def-omega-two-ma-bookkeeping-iteration` | GCH coding, cofinal repeats, ccc/trivial mixing, cofinal Cohen stages | all 4 deps; AC use exact | authored; pending gates |
| 31 | `thm-omega-two-iteration-forces-ma-and-not-ch` | ccc/cardinal preservation, exact continuum, bounded capture and bookkeeping | all 8 deps | authored; pending gates |
| 32 | `lem-formal-ma-iteration-verification-compiler` | finite parser, L-interpreter, per-instance forcing blocks, PA line induction | all 5 deps; malformed/no-CTM boundaries explicit | authored; pending gates |
| 33 | `cor-formal-consistency-of-ma-and-not-ch` | direct instantiation of verified refutation transformer | both deps | authored; pending gates |
| 34 | `lem-continuum-sized-almost-disjoint-family-on-omega` | explicit branch-initial-segment coding | both deps; no arbitrary post-code choice | authored; pending gates |
| 35 | `thm-ma-cardinal-exponentiation-below-continuum` | explicit `P_X`, exact infinite/finite intersection test, König regularity | all 5 deps; Karagila Thm. 7.7 | authored; pending gates |
| 36 | `thm-ma-small-unions-of-meagre-sets` | repaired to a direct sigma-centered finite rational-array forcing; no published sigma-ideal use | 3 retained deps; removed unnecessary almost-disjoint supplier | authored; pending gates; decision must be `repaired` |
| 37 | `thm-ma-small-unions-of-null-sets` | small-open-cover order, ccc rational approximation, directed union measure bound | all 6 deps | authored; pending gates |
| 38 | `thm-ma-products-of-ccc-spaces-are-ccc` | MA→Knaster, binary/finite products, delta-system root for arbitrary products | all 5 deps; empty product factor addressed | authored; pending gates |
| 39 | `ex-two-step-cohen-iteration-is-a-product` | literal restriction/union isomorphism and factorized generics | all 3 deps | authored; pending gates |
| 40 | `ex-ma-diagonal-real` | domain and disagreement dense sets; total real outside listed family | both deps | authored; pending gates |
| 41 | `ex-ma-small-set-is-null-and-meagre` | singleton union with separate category/measure invocations | both deps | authored; pending gates |
| 42 | `fs-ma-implies-ch` | formal relative-consistency countermodel, valid converse distinguished | both deps | authored; pending gates; next batch 12 `def-zfa-universe-atoms-and-kernel` |
| 43 | `def-zfa-universe-atoms-and-kernel` | atoms/extensionality conventions, hierarchy, choice-free kernel and optional AC restriction | all 3 deps; Jech §4.1 | authored; pending gates |
| 44 | `def-permutation-support-system-and-normal-filter` | rank action, normal filter, stabilizers and finite supports | all 3 deps; conjugation calculation explicit | authored; pending gates |
| 45 | `def-symmetric-and-hereditarily-symmetric-sets` | transitive-closure/rank-recursive equivalence; symmetric versus hereditary | both deps | authored; pending gates |
| 46 | `thm-fraenkel-mostowski-permutation-model` | all ZFA axioms including internal Power Set and Replacement, plus explicit noninheritance witness | both deps; construction choice-free | authored; pending gates |
| 47 | `thm-basic-fraenkel-model` | finite/cofinite atom subsets, no omega injection, no well-order, failure of AC | all 4 repaired deps; Jech §4.3 | authored; pending gates; decision must be `repaired` |
| 48 | `thm-second-fraenkel-model-countable-pairs-without-choice` | empty-supported sequence and unsupported pair swap | both deps; Jech §4.4 | authored; pending gates |
| 49 | `thm-ordered-mostowski-model` | intersection/least supports, empty-supported dense order, no supported well-order | both deps; Jech Lemmas 4.5–4.6/Thm. 4.7 | authored; pending gates |
| 50 | `def-boundable-sentence-over-an-atom-set` | fixed finite power-iterate quantifier bound; socks target coding, no arbitrary transfer | all 3 deps; Jech Ch. 6 Problem 1 | authored; pending gates |
| 51 | `thm-jech-sochor-first-embedding` | block forcing, lifted action, membership/equality induction, closure surjectivity through alpha | all 4 deps; Jech Thm. 6.1/Lemmas 6.2–6.5 | authored; pending gates |
| 52 | `thm-jech-sochor-transfer-for-boundable-sentences` | both bounded-quantifier directions via power-iterate surjectivity | both deps | authored; pending gates |
| 53 | `rem-pincus-transfer-interface-and-preservation-limits` | orientation only; injectively boundable/BPI interface and atom-sensitive nontransfer witness | sole dep | authored; pending gates |
| 54 | `lem-jech-sochor-socks-transfer-is-uniformly-formalizable` | literal socks codes, finite bound, source swap, embedding templates, PA checker induction | all 5 deps; malformed/no-CTM boundaries explicit | authored; pending gates |
| 55 | `cor-zf-countable-family-of-pairs-without-choice` | composition of L, forcing, and transfer reductions; no Recorded premise | all 4 deps | authored; pending gates |
| 56 | `ex-basic-fraenkel-finite-or-cofinite-support-test` | transposition split, vacuous complement case noted | sole dep | authored; pending gates |
| 57 | `ex-second-fraenkel-sock-swap` | least unsupported pair and graph-action contradiction | sole dep | authored; pending gates |
| 58 | `ex-ordered-mostowski-order-has-empty-support` | direct relation-action calculation and well-order contrast | sole dep | authored; pending gates |
| 59 | `fs-a-zfa-model-is-a-zf-model` | two atoms refute unrestricted Extensionality; kernel and bounded transfer distinguished | both deps | authored; pending gates; next `def-forcing-name-automorphism-action` |
| 60 | `def-forcing-name-automorphism-action` | rank-recursive action, group law, check-name fixation and generic transport; Karagila Def. 10.5–Prop. 10.11 | all 4 deps | authored; pending gates |
| 61 | `def-symmetric-forcing-system-and-hereditarily-symmetric-names` | normal subgroup filter, stabilizers, HS recursion and generic interpretation | both deps | authored; pending gates |
| 62 | `lem-symmetry-lemma-for-forcing-automorphisms` | atomic rank induction followed by formula induction, including restricted HS quantifiers; Karagila Lem. 10.8/Ex. 10.19 | all 3 deps | authored; pending gates |
| 63 | `lem-canonical-check-names-are-hereditarily-symmetric` | rank induction, full-group stabilizer and evaluation | all 3 deps | authored; pending gates |
| 64 | `thm-hereditarily-symmetric-interpretations-form-a-zf-model` | transitivity, almost universality and bounded Separation expanded to every ZF axiom; Karagila Thm. 10.17 | all 3 repaired deps; removed unused AC | authored; pending gates; decision must be `repaired` |
| 65 | `def-basic-cohen-symmetric-system` | `Add(omega,omega)`, finitary coordinate action, finite-support filter and orbit name | both deps | authored; pending gates |
| 66 | `lem-basic-cohen-generic-reals-form-a-symmetric-set` | singleton/empty support computation, fresh-bit distinctness, graph moved | both deps | authored; pending gates |
| 67 | `thm-basic-cohen-generic-real-set-has-no-countably-infinite-subset` | supported-map transposition with compatible image condition; Karagila Thm. 10.25 | both deps | authored; pending gates |
| 68 | `thm-basic-cohen-model-has-an-infinite-dedekind-finite-set-of-reals` | finite witnesses to infinitude and choice-free Dedekind equivalences | all 3 deps | authored; pending gates |
| 69 | `cor-basic-cohen-model-fails-well-orderability-and-choice` | well-order recursion gives omega injection; AC used only through well-ordering theorem | all 3 deps | authored; pending gates |
| 70 | `lem-basic-cohen-symmetric-construction-is-uniformly-formalizable` | literal finite parser/templates and PA checker induction; no semantic CTM inference | all 5 deps | authored; pending gates |
| 71 | `thm-formal-consistency-of-zf-with-failure-of-choice` | composition of `L` and verified symmetric-model refutation transformations | all 4 deps; syntactic conclusion only | authored; pending gates |
| 72 | `def-atom-free-socks-symmetric-system` | Jech's actual second-Cohen coordinates make each mate a set of reals, not a real | all 2 deps; source contradiction with manifest | corrected draft authored; owner later recorded `repaired` |
| 73 | `thm-atom-free-socks-model-has-countable-pairs-without-choice` | finite-support block swap proves failure for pairs of sets of reals; Jech Lemmas 5.17–5.19 | all 3 deps; promised “pairs of reals” claim is false in ZF | corrected draft authored; owner later recorded `repaired` |
| 74 | `ex-basic-cohen-orbit-name-without-enumeration` | explicit invariant-range and moved-graph calculation | sole dep | authored; pending gates |
| 75 | `ex-equivalent-dedekind-finiteness-tests-in-basic-cohen-model` | all three explicit ZF constructions and their negations | both deps | authored; pending gates |
| 76 | `ex-atom-free-socks-coordinate-swap` | Jech's fresh internal-coordinate permutation makes the swap-image condition compatible | corrected owner-approved supplier | corrected draft authored; owner later recorded `repaired` |
| 77 | `fs-every-symmetric-submodel-satisfies-choice` | basic Cohen countermodel independently refutes claim; socks supplies stronger corrected example | all 3 deps | authored; owner later recorded `repaired`; next batch 4 |
| 78 | `def-upcrossing-number-of-an-interval` | finite-tuple maximum, measurable threshold events, countable increasing supremum | both deps; no optimizer selected | authored; pending gates |
| 79 | `lem-doob-upcrossing-inequality` | convex truncation plus complementary predictable holdings; van der Vaart Lem. 2.19 | all 6 repaired deps; AC inherited | authored; pending gates; decision must be `repaired` |
| 80 | `thm-doob-submartingale-convergence` | rational crossing argument and separate Fatou bounds exclude both infinities | all 6 deps; AC inherited | authored; pending gates |
| 81 | `thm-doob-l1-maximal-inequality` | explicit finite first-crossing partition, no stopping theorem | all 5 deps; AC inherited | authored; pending gates |
| 82 | `thm-doob-lp-maximal-inequality` | truncated layer cake, refined L1 bound, Hölder, MCT; constant `p/(p-1)` | all 6 deps; zero-norm division case checked | authored; pending gates |
| 83 | `thm-lp-bounded-martingale-convergence` | a.s. limit, infinite maximal domination, Lp DCT and terminal conditioning | all 7 deps; AC inherited | authored; pending gates |
| 84 | `thm-uniformly-integrable-martingale-convergence` | UI gives L1 bound, a.s. convergence, probability convergence and Vitali upgrade | all 5 deps; no L1-bounded shortcut | authored; pending gates |
| 85 | `thm-closed-martingale-characterization` | all three directions and terminal-value identification | all 5 deps; AC exact | authored; pending gates |
| 86 | `def-reverse-filtration-and-reverse-martingale` | decreasing filtration, adjacent/multistep tower equivalence and intersection | all 4 deps; almost-everywhere convention | authored; pending gates |
| 87 | `thm-reverse-martingale-convergence` | finite reversed segments bound both crossing directions; UI and event-integral identification | all 8 deps; AC inherited | authored; pending gates |
| 88 | `thm-levy-upward-convergence-of-conditional-expectations` | UI closed limit and monotone-class extension from increasing-union algebra | all 5 deps; AC inherited | authored; pending gates |
| 89 | `thm-levy-downward-convergence-of-conditional-expectations` | reverse-martingale tower calculation and terminal tower identity | all 3 deps; AC inherited | authored; pending gates |
| 90 | `cor-kolmogorov-zero-one-law-from-reverse-martingales` | finite-initial independence, Levy upward limit and indicator constant | all 5 deps; published zero-one theorem not consumed | authored; pending gates |
| 91 | `lem-conditional-hoeffding-bound-for-bounded-martingale-differences` | random endpoint integrability, conditional chord, explicit log-second-derivative bound | all 5 deps; width-zero and AC cases checked | authored; pending gates |
| 92 | `thm-azuma-hoeffding-inequality` | iterated conditional mgf, Markov optimization, zero variance and both tails | all 4 deps; AC inherited | authored; pending gates |
| 93 | `cor-symmetric-bounded-increment-azuma-bound` | endpoints `±c_k`, width calculation and union bound | all 3 deps; all-zero widths checked | authored; pending gates |
| 94 | `def-square-integrable-martingale-difference-array-and-variance-clock` | infinite rows, conditional variances, predictable clock and zero padding | all 3 deps; AC exact | authored; pending gates |
| 95 | `thm-martingale-central-limit-theorem` | Roch conditional telescope, Lindeberg remainder, clock localization and characteristic functions | 8 repaired deps; removed unused product lemma | authored; pending gates; decision must be `repaired`; next A-page examples |
| 96 | `ex-doob-maximal-bound-for-a-centered-random-walk` | conditional martingale calculation, variance expansion, L1/L2 bounds | all 5 deps; cross terms explicitly zero | authored; pending gates |
| 97 | `ex-nonnegative-martingale-converges-almost-surely` | constant means, Doob convergence and Fatou inequality | all 3 deps; equality deliberately not claimed | authored; pending gates |
| 98 | `ex-dyadic-martingale-converges-to-the-original-l1-variable` | dyadic refinement generates Borel sets; Levy upward and known-variable identity | all 4 deps; endpoint null set fixed | authored; pending gates |
| 99 | `ex-reverse-martingale-and-the-tail-sigma-algebra` | decreasing future sigma-algebras and downward convergence; independence qualification separate | all 4 deps | authored; pending gates |
| 100 | `ex-lp-bounded-martingale-with-an-lp-terminal-value` | conditional contraction, martingale convergence and Levy identification | all 5 deps | authored; pending gates |
| 101 | `cex-l1-bounded-martingale-need-not-converge-in-l1` | nested intervals, atomwise conditional averages, pointwise-zero limit and unit L1 norm | all 3 deps; endpoint checked | authored; pending gates |
| 102 | `cex-almost-sure-martingale-convergence-need-not-preserve-expectation` | same explicit witness, means `1` versus limiting mean `0`, UI failure | all 3 deps | authored; pending gates |
| 103 | `cex-doob-lp-maximal-inequality-excludes-p-equals-one` | finite closed martingale; shell calculation gives `n/2+1` | all 3 deps; every shell and final cell counted | authored; pending gates |
| 104 | `ex-azuma-bound-for-simple-random-walk` | centered independent increments, widths one, variance proxy `n` | all 3 deps | authored; pending gates; next `def-discrete-stopping-time` |
| 105 | `def-discrete-stopping-time` | literal finite-horizon events; bounded distinguished from a.s. finite | both deps | authored; pending gates |
| 106 | `lem-equivalent-event-tests-for-a-discrete-stopping-time` | complements, level differences, finite union, and predictable tail event | both deps; `n=0` separate | authored; pending gates |
| 107 | `lem-first-hitting-time-of-an-adapted-process-is-a-stopping-time` | finite union of adapted hit events; empty hit set gives infinity | both deps | authored; pending gates |
| 108 | `lem-minimum-maximum-and-bounded-shifts-of-stopping-times` | min/max, positive shift, shifted-filtration earlier shift and truncation | both deps; false unshifted earlier-shift claim excluded | authored; pending gates |
| 109 | `def-sigma-algebra-at-a-stopping-time` | literal event-intersection definition for possibly infinite times | both deps | authored; pending gates |
| 110 | `lem-stopping-time-sigma-algebra-is-a-sigma-algebra` | all sigma-algebra operations, deterministic equality, ordered inclusion | both deps; pointwise order stated | authored; pending gates |
| 111 | `def-stopped-random-variable-and-stopped-process` | explicit cemetery value for `X_tau`; finite formula for `X^tau_n` | both deps; infinity branch explicit | authored; pending gates |
| 112 | `lem-stopped-random-variable-is-measurable-at-the-stopping-time` | Borel inverse-image level decomposition and finite stopped-time tests | all 3 deps; cemetery event checked | authored; pending gates |
| 113 | `thm-a-stopped-martingale-is-a-martingale` | predictable indicator increment identity, integrability and conditioning | all 5 deps; AC inherited | authored; pending gates |
| 114 | `thm-optional-sampling-for-bounded-stopping-times` | event-tested predictable transform for martingale and both inequality directions | all 5 deps; no unbounded limit | authored; pending gates |
| 115 | `thm-optional-stopping-under-uniform-integrability` | terminal-variable representation, truncated stopped conditioning, UI/L1 limit and tower | all 6 deps; a.s. finiteness and pointwise order explicit | authored; pending gates |
| 116 | `thm-optional-stopping-with-integrable-time-and-bounded-increments` | pathwise `C(tau-n)^+` bound and DCT | all 4 deps; both hypotheses used | authored; pending gates |
| 117 | `thm-optional-stopping-with-a-dominating-integrable-variable` | eventual equality, inherited domination and DCT | all 3 deps | authored; pending gates |
| 118 | `cor-wald-first-equation-under-integrable-stopping` | tail-series identity, Tonelli absolute bound, independence factorization and DCT | all 7 deps; choice-free | authored; pending gates |
| 119 | `cor-gamblers-ruin-hitting-probability-from-optional-stopping` | geometric block exit bound, bounded stopped walk and two-point terminal calculation | all 4 deps; AC inherited | authored; pending gates |
| 120 | `cor-gamblers-ruin-expected-duration` | square-minus-clock martingale, DCT/MCT, duration proved finite rather than assumed | all 6 deps; AC inherited | authored; pending gates |
| 121 | `rem-optional-stopping-requires-a-passage-to-the-limit-hypothesis` | separates UI, bounded-increment/integrable-time, and domination mechanisms | all 4 deps; AC inherited | authored; pending gates; next stopping-time examples |
| 122 | `ex-first-exit-time-from-an-interval` | explicit Borel target and finite-union event; infinity allowed | sole dep; choice-free | authored; pending gates |
| 123 | `ex-gamblers-ruin-probability-for-a-biased-walk` | exponential martingale calculation, geometric exit bound, bounded stopping and algebra | all 4 deps; `p≠q` denominator checked | authored; pending gates |
| 124 | `ex-expected-duration-of-simple-gamblers-ruin` | direct substitution including midpoint `N^2/4` | both deps; AC inherited | authored; pending gates |
| 125 | `ex-walds-equation-for-a-bounded-stopping-time` | geometric tail sum and stopped Bernoulli success indicator | sole dep; `p=1` endpoint checked; choice-free | authored; pending gates |
| 126 | `ex-stopping-a-likelihood-ratio-martingale` | RN terminal density, stopped conditional representation and event integral | all 5 deps; AC exact | authored; pending gates |
| 127 | `cex-a-last-exit-time-need-not-be-a-stopping-time` | two-toss witness; future event cannot be first-toss measurable by self-independence contradiction | 2 repaired deps; removed unused conditional-expectation supplier; choice-free | authored; pending gates; decision must be `repaired` |
| 128 | `cex-optional-stopping-fails-for-unbounded-simple-random-walk-hitting-time` | increasing finite-ruin events prove a.s. hit; stopped expectation `1≠0` | all 3 deps; AC inherited | authored; pending gates |
| 129 | `cex-almost-surely-finite-stopping-does-not-imply-integrable-stopping` | contradiction via bounded increments if the hitting time were integrable | all 3 deps; AC inherited | authored; pending gates |
| 130 | `cex-integrable-stopping-time-alone-does-not-suffice-for-arbitrary-martingale-increments` | locally reconstructed nested-set martingale; tail sum `2`, stopped value `0`, unbounded increments | all 6 deps; AC inherited; no B dependency | authored; pending gates; next page authoring |

## Published-content concern for owner

Confirmed defect, independent of the new supplier work: `prop-meagre-subsets-form-a-sigma-ideal` on page `complete-metrizability-and-baire` explicitly assumes Countable Choice in its Statement and uses simultaneous selection of one nowhere-dense cover for each member of a countable family, but its published frontmatter lists only `def-nowhere-dense-meagre-and-residual-subsets` and `thm-n-cross-n-countable`. Confidence: high/confirmed from the published statement and proof. Required supplier: `def-countable-choice`. Proposed repair after owner authorization: add that direct dependency, make the proof's selection step item-specific rather than the current generic “flatten” sentence, and propagate the axiom record to published consumers. I did not edit this published item or the serial published-consumer-supplier ledger.

## Owner-resolved scaffold issue

The initial batch-12 socks promise was false: in ZF the first-differing-bit lexicographic order canonically selects from every pair of distinct reals. Jech Chapter 5 §5.4, pp. 68–71 explicitly replaces the two reals by two sets of mutually generic reals. The owner accepted that exact remedy in `research/phase-2-next-21-step3a-owner-symmetric-extensions-and-basic-choice-failure-models.json`. The four affected IDs are `def-atom-free-socks-symmetric-system`, `thm-atom-free-socks-model-has-countable-pairs-without-choice`, `ex-atom-free-socks-coordinate-swap`, and the socks clause of `fs-every-symmetric-submodel-satisfies-choice`; all four current drafts and records implement the ruling, and their current owner item receipts record `repaired`.

## Owner-resolved scaffold repairs

1. **`thm-closure-distributivity-and-no-short-sequences`.** The original manifest promised that $\kappa$-distributivity of an arbitrary forcing preorder is equivalent to adding no short ground-model sequences. Let $P=[\omega]^{<\omega}$ ordered by reverse inclusion and, for $n<\omega$, let $D_n=\{s:n\in s\}$. Every $D_n$ is dense open and $\bigcap_nD_n=\varnothing$, so $P$ is not $\omega_1$-distributive under the library's literal dense-intersection definition. Yet every two conditions are compatible, its separative quotient is the one-point forcing, and it adds no sequences. Confidence: confirmed from the definitions and Karagila Chapter 1's explicit preorder/separative-quotient convention. The item and manifest now state the equivalence for separative $P$ and for an arbitrary preordering only after quotienting. Consumers `thm-collapse-and-levy-collapse-effects` and `thm-higher-cohen-forcing-violates-gch` use only the valid closure-implies-distributivity/no-new-sequences direction. The current owner receipt records this repair after examining the counterexample, proof, suppliers, precheck, rendering, contract, and scope.
2. **`lem-generalized-delta-system-for-small-supports`.** The original manifest's “in particular” clause took $\rho=2^{<\kappa}$ for arbitrary infinite $\kappa$, but Kunen Chapter II Theorem 1.6 requires $|\alpha|^{<\kappa}<\rho^+$ for every $\alpha<\rho^+$. The omitted regularity is essential. Under GCH take $\kappa=\aleph_\omega$, so $\rho=2^{<\kappa}=\kappa$; König gives $\kappa^\omega\ge\kappa^+$. Choose $\kappa^+$ branches through $\kappa^{<\omega}$ and regard each branch as a countable set. If $\kappa^+$ branches had common delta root $r$, their pairwise intersections would all be the same finite initial segment; among only $\kappa$ possible next nodes, two branches would agree one level farther, a contradiction. Confidence: confirmed by this witness and Kunen's exact hypothesis. The item and manifest now require $\kappa$ regular, which gives $(2^{<\kappa})^{<\kappa}=2^{<\kappa}$. Consumers already assume regular $\kappa$. The current owner receipt records this repair after examining Kunen's hypothesis, the counterexample, proof, suppliers, precheck, rendering, contract, and scope.

The group-author recorder preserves both owner receipts and does not create competing review receipts for these IDs.

## Checks and plan reconciliation

- `author-check.mts phase-2-next-21 BATCH` passed for batches 11, 12, and 4. Across the receipts: all 106 proof-bearing items pass precheck; all 142 item/page render targets pass; content policy passes all 130 scoped items; and strict proof contracts pass 130/130 with zero errors or warnings.
- `coverage-checklist.mjs ... --require-destination` passed all three exact coverage paths: 2 pages/83 harvested rows for batch 11, 2/43 for batch 12, and 2/46 for batch 4, with zero errors or warnings.
- `boundary-audit.mjs` over the three exact contract paths passed with 1,040 rows, zero template clusters, zero contradicted candidates, and zero unauthored items.
- Repository-wide `depcheck.mjs --quiet` passed with zero errors and 269 unrelated multi-home/citation warnings; `fwdcheck.mjs --quiet` passed with zero errors/warnings; `extcheck.mjs --quiet` passed with zero errors and 55 existing published Recorded-result warnings. No owned item consumes a Recorded result or a B-page leaf.
- Explicit-path `citecheck.mjs` scanned all 130 owned items and passed with zero warnings.
- `frontier-dependency-ledger.mjs refresh --run phase-2-next-21 --require-reviewed` passed. Batch inputs 11, 12, and 4 are each `[]`: all identified same-group edges are internal to a batch, and there are no cross-batch inputs or orphaned reviews.
- `validate-plan.mjs research/plan-spec.json` exited 0: the declared order is acyclic and has no unresolved IDs, item/page cycles, forward-reference violation, or B-page dependency. This is pre-splice only. The twelve owned plan rows still contain zero items, while their manifests contain respectively 15, 4, 19, 4, 13, 4, 14, 4, 18, 9, 17, and 9 items (130 total). Every owned `requires` array agrees. Step 4 must splice these inventories; this group did not edit the shared plan.
- `step3-decisions.mjs check --phase final` remains open run-wide because other groups are still authoring, but none of its open rows is an owned ID. All 130 owned item decisions have current hashes: 81 group-author `accept`, 43 group-author `repaired`, and 6 owner `repaired`.

## Final disposition and handoff

All 130 items and all twelve A/B pages are authored. The local proof-contract inventory contains all 130 IDs and their 1,040 item-specific boundary rows. No new item or local supplier was added.

Receipt serialization is complete. The mathematical dispositions are 81 `accept`, 49 `repaired`, and 0 unresolved: 124 group-author decisions plus six preserved owner `repaired` decisions (the four socks items and the two batch-11 items above). All 130 items are complete and gate-clean.

Open obligations for the owner/serial reconciler:

- Splice the twelve exact manifest inventories into the plan in Step 4.
- Add the published `prop-meagre-subsets-form-a-sigma-ideal` concern to `published-consumer-supplier-ledger.md` and repair it only through the authorized serial path.
