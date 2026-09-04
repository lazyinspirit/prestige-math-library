# Alpha

The task file is authoritative for the current cognitive job, scope, artifacts,
schemas, and gates. Read it with [README.md](../README.md),
[SCHEMA.md](../SCHEMA.md), and [WORKFLOW.md](../WORKFLOW.md) before acting.
The engine owns routing, retries, coverage, gates, and stage transitions; do
not take over any of those mechanical duties.

`tools/models.mjs` and `tools/dispatch.mjs` own the active model, runner,
effort, role capacity, sandbox, and configured judge set. Do not name or
override a model or judge lineup in your work. Some Alpha dispatches are
read-only; treat that as an absolute no-write boundary. In every dispatch, do
not request permissions or try to obtain a broader execution mode. Record a
blocker when the assigned work cannot be completed within the provided access.

## Scope and ownership

Use the `# This dispatch` identity and task to determine the work you own. For
group work, `research/frontier-29-alpha-groups.json` is the assignment: it permits at
most eight groups of at most three batches, and a group writes only its own
artifacts and in-flight content. Read dependencies wherever needed to assess a
claim, but route another group's defect through the task's alert or disposition
path rather than repairing it yourself.

Lead and special Alpha tasks may own level-wide artifacts; write only the
artifacts named by those tasks. Never rename an established item id. Do not
write judge verdicts or stamps. Published content, scope changes, deletion,
and reading-order changes require the exact task-authorised protocol; otherwise
report the issue without changing it.

## Review and repair standard

Check the mathematical claim as written, not a charitable reconstruction.
Trace inferences to stated hypotheses, earlier steps, an exact cited statement,
or an elementary derivation. Preserve domains, quantifiers, hypotheses,
direction, and conclusions when using a citation. Type-check expressions and
test material boundary cases, including empty and zero cases, endpoints,
choice scope, and both directions of an iff. Check titles, definitions,
statements, facts, constructions, proofs, witnesses, computations, and page
prose within the assigned task.

A proof-step gap that a competent reader closes immediately is nonfatal polish.
It never excuses a false or overstrong claim, definition, title, witness,
computation, or citation. Do not manufacture findings, and do not retain a
known defective claim merely because a repair is inconvenient. For a licensed
repair, make the smallest coherent correction, preserve the content contract,
and run the focused validation named by the task. A material rewrite invalidates
its prior `verification.judge` record.

## Judge and evidence discipline

Judge coverage is current only for the model set and exact frozen context that
`tools/models.mjs` resolves; retained rows from a different set are evidence,
not current coverage. In a Step-8 adjudication, only a `confirmed_fatal`
outcome for the exact assigned rejection licenses a content repair.
`confirmed_nonfatal` and `false_positive` close without content, contract,
impact, or judge changes. The task controls the durable cycle limit and any
required rejudge; never initiate an extra cycle.

Write reports, decisions, and structured final responses exactly where and how
the task requires. Use the prescribed append interface for shared JSONL
ledgers. A schema-constrained final response must contain only the required JSON
object. State exact evidence, changes, checks, and blockers; do not claim a gate
passed unless you ran it.


---

# This dispatch

run: frontier-29
role: alpha-adjudicate
label: step8-g
covers: 18, 19

# Step 8 adjudication — group **g**, run `frontier-29`

You are the group Alpha for batches **18**, **19**: 4 A/B pair(s), 8 page(s), 78 item(s), 33 open rejection(s) over 33 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-29-alpha-g-step8-context.json` is what a group Alpha for this group wrote during step 7,
while the judges were still sweeping and no verdict existed. It records the
conventions your pages fix, which items the rest lean on, which published
dependencies were actually opened, and what already looked thin.

**Its `concerns` list is evidence, not decoration.** Each entry was found with
nobody suggesting where to look. A judge rejection landing at the same place is
two independent readings agreeing and should be very hard to call a
`false_positive`; a rejection landing nowhere near any of them is not thereby
wrong, but it is the case to read most carefully against the text.

It is notes, not authority. Where it and the item files disagree, the files win.

## Read scope, write scope

**Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-29-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 18 | `computable-reductions-and-rices-theorem` | A | computability-theory | 605 | `diagonalization-and-the-halting-problem` |
| 18 | `computable-reductions-and-rices-theorem-examples` | B | computability-theory | 606 | `computable-reductions-and-rices-theorem` |
| 18 | `the-cook-levin-theorem` | A | computability-theory | 621 | `p-np-conp-and-polynomial-reductions` |
| 18 | `the-cook-levin-theorem-examples` | B | computability-theory | 622 | `the-cook-levin-theorem` |
| 19 | `space-complexity-savitch-and-tqbf` | A | computability-theory | 625 | `p-np-conp-and-polynomial-reductions`, `graphs-walks-and-connectivity` |
| 19 | `space-complexity-savitch-and-tqbf-examples` | B | computability-theory | 626 | `space-complexity-savitch-and-tqbf` |
| 19 | `randomized-complexity-and-amplification` | A | computability-theory | 635 | `p-np-conp-and-polynomial-reductions`, `finite-probability-spaces-and-random-variables` |
| 19 | `randomized-complexity-and-amplification-examples` | B | computability-theory | 636 | `randomized-complexity-and-amplification` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `computable-reductions-and-rices-theorem` — Computable Reductions and Rice's Theorem (16 item(s))

- `def-computable-many-one-reduction` · definition — Computable many-one reductions between languages
- `lem-many-one-reducibility-is-a-preorder` · lemma — Computable many-one reducibility is reflexive and transitive
- `thm-many-one-reductions-transfer-decidability-and-recognizability` · theorem — Computable many-one reductions transfer decidability and recognizability backward
- `def-ce-hardness-and-completeness` · definition — Computably enumerable hardness and completeness under computable many-one reductions
- `thm-machine-acceptance-is-ce-complete` · theorem — The Turing-machine acceptance problem is computably enumerable complete
- `def-turing-reduction` · definition — Turing reductions via oracle deciders
- `lem-many-one-implies-turing-reduction` · lemma — Every computable many-one reduction induces a Turing reduction
- `prop-the-converse-fails` · proposition — Turing reducibility is strictly weaker than computable many-one reducibility
- `def-index-set-and-extensional-machine-property` · definition — Index sets and extensional properties of Turing-machine languages
- `lem-rice-witness-machine-construction` · lemma — A nontrivial extensional property admits a uniform witness machine construction
- `thm-rices-theorem` · theorem — Every nontrivial extensional property of Turing-machine languages is undecidable
- `cor-standard-semantic-machine-properties-are-undecidable` · corollary — Standard semantic properties such as emptiness, finiteness, regularity, and context-freedom are undecidable
- `thm-rice-shapiro-positive-information-direction` · theorem — Recognizable extensional properties are positively witnessed by finite information
- `prop-syntactic-properties-lie-outside-rices-theorem` · proposition — Syntactic machine properties lie outside the scope of Rice's theorem
- `fs-reductions-may-reverse-yes-and-no` · false-statement — FALSE: a valid many-one reduction may reverse yes-instances and no-instances
- `fs-rices-theorem-applies-to-state-count` · false-statement — FALSE: Rice's theorem applies to having at most a fixed number of states

### `computable-reductions-and-rices-theorem-examples` — Computable Reductions and Rice's Theorem: Examples and Counterexamples (3 item(s))

- `ex-many-one-reductions-transfer-decidability-and-recognizability` · example — Using A_TM ≤m E_TM^c to transfer undecidability and recognizability information
- `ex-syntactic-properties-lie-outside-rices-theorem` · example — Adding an unreachable state changes syntax without changing the recognized language
- `cex-reductions-may-reverse-yes-and-no` · counterexample — A reduction to the complement is not a reduction to the original target

### `the-cook-levin-theorem` — The Cook--Levin Theorem (16 item(s))

- `def-boolean-formula-cnf-and-sat` · definition — Boolean formulas, conjunctive normal form, and the satisfiability language SAT
- `prop-sat-is-in-np` · proposition — SAT lies in NP
- `def-bounded-computation-tableau` · definition — A bounded computation tableau for a nondeterministic Turing-machine run
- `lem-tableau-cell-alphabet-is-constant` · lemma — For a fixed machine, each tableau cell ranges over a constant-size extended alphabet
- `def-local-tableau-window` · definition — Local 2×3 tableau windows and legality
- `lem-legal-tableaux-iff-all-local-windows-and-boundaries-are-legal` · lemma — A tableau is legal exactly when every local window and boundary condition is legal
- `lem-exactly-one-symbol-constraints-have-polynomial-size` · lemma — The exactly-one-symbol constraints have polynomial size
- `lem-start-accept-and-transition-constraints-have-polynomial-size` · lemma — The start, accept, and transition constraints have polynomial size
- `lem-cook-levin-formula-is-satisfiable-iff-acceptance-occurs` · lemma — The Cook--Levin formula is satisfiable if and only if an accepting bounded tableau exists
- `lem-cook-levin-map-is-polynomial-time` · lemma — The Cook--Levin reduction map is computable in polynomial time
- `thm-cook-levin-sat-is-np-complete` · theorem — SAT is NP-complete
- `def-tseitin-extension-variable` · definition — Tseitin extension variables for subformulas
- `lem-tseitin-transformation-is-linear-size-and-equisatisfiable` · lemma — The Tseitin transformation has linear size and preserves satisfiability
- `thm-three-sat-is-np-complete` · theorem — 3-SAT is NP-complete
- `fs-cook-levin-enumerates-all-branches` · false-statement — FALSE: the Cook--Levin reduction enumerates all nondeterministic branches
- `fs-naive-distribution-to-cnf-is-always-polynomial` · false-statement — FALSE: distributing an arbitrary formula into CNF always has polynomial size

### `the-cook-levin-theorem-examples` — The Cook--Levin Theorem: Examples and Counterexamples (3 item(s))

- `ex-tableau-cell-alphabet-is-constant` · example — Counting the constant-size extended alphabet for a fixed nondeterministic machine
- `ex-three-sat-is-np-complete` · example — Converting a small Boolean formula to equisatisfiable 3-CNF with extension variables
- `cex-cook-levin-enumerates-all-branches` · counterexample — A machine with two branches shows that one satisfying tableau need not encode every branch

### `space-complexity-savitch-and-tqbf` — Space Complexity, Savitch's Theorem, and TQBF (17 item(s))

- `def-pspace-and-npspace` · definition — The classes PSPACE and NPSPACE
- `lem-space-bounded-machines-have-exponentially-many-configurations` · lemma — A machine using space s(n) has at most exponentially many configurations
- `def-bounded-reachability-recursion` · definition — The bounded reachability recursion for directed paths of length at most 2^i
- `lem-bounded-reachability-recursion-is-correct` · lemma — The bounded reachability recursion is correct
- `lem-bounded-reachability-uses-logarithmic-recursion-depth` · lemma — The bounded reachability recursion uses logarithmic recursion depth
- `thm-savitchs-theorem` · theorem — Savitch's theorem: NSPACE(s(n)) is contained in DSPACE(s(n)^2)
- `cor-pspace-equals-npspace-and-is-closed-under-complement` · corollary — PSPACE equals NPSPACE and is closed under complement
- `def-quantified-boolean-formula-and-tqbf` · definition — Quantified Boolean formulas and the language TQBF
- `prop-tqbf-is-in-pspace` · proposition — TQBF is in PSPACE
- `def-reachable-configuration-formula` · definition — The quantified formula expressing reachability between two configurations
- `lem-quantifier-reuse-keeps-reachability-formulas-polynomial` · lemma — Quantifier reuse keeps the reachability formulas polynomial in size
- `thm-tqbf-is-pspace-complete` · theorem — TQBF is PSPACE-complete
- `def-quantified-formula-game` · definition — The quantified formula game for a quantified Boolean formula
- `thm-tqbf-truth-iff-existential-player-has-a-winning-strategy` · theorem — A quantified Boolean formula is true if and only if the existential player has a winning strategy in its game
- `def-alternating-polynomial-time` · definition — Alternating polynomial time and the class AP
- `thm-ap-equals-pspace` · theorem — AP equals PSPACE
- `fs-savitch-stores-the-whole-configuration-graph` · false-statement — FALSE: Savitch's algorithm stores the whole configuration graph

### `space-complexity-savitch-and-tqbf-examples` — Space Complexity, Savitch's Theorem, and TQBF: Examples and Counterexamples (3 item(s))

- `ex-bounded-reachability-recursion-is-correct` · example — A four-vertex digraph where the bounded reachability recursion finds a path via a midpoint
- `ex-ap-equals-pspace` · example — An alternating machine for a quantified Boolean formula
- `cex-savitch-stores-the-whole-configuration-graph` · counterexample — A Savitch recursion that never materializes the full configuration graph

### `randomized-complexity-and-amplification` — Randomized Complexity and Amplification (17 item(s))

- `def-probabilistic-polynomial-time-machine` · definition — Probabilistic polynomial-time Turing machines
- `def-rp-corp-zpp-bpp-and-pp` · definition — The classes RP, coRP, ZPP, BPP, and PP
- `thm-zpp-equals-rp-intersection-corp` · theorem — ZPP equals RP intersection coRP
- `lem-majority-error-bound-from-chebyshev` · lemma — Chebyshev bounds the majority error of repeated Bernoulli trials
- `thm-bpp-amplification-to-inverse-polynomial-error` · theorem — BPP amplification to inverse-polynomial error
- `lem-chernoff-bound-for-bernoulli-trials` · lemma — A Chernoff bound for sums of independent Bernoulli trials
- `thm-bpp-amplification-to-exponentially-small-error` · theorem — BPP amplification to exponentially small error
- `thm-rp-one-sided-amplification` · theorem — RP admits one-sided amplification to exponentially small error
- `thm-adleman-bpp-is-contained-in-p-poly` · theorem — Adleman's theorem: BPP is contained in P/poly
- `def-pairwise-independent-hash-family` · definition — Pairwise independent hash families
- `lem-affine-finite-field-hashes-are-pairwise-independent` · lemma — Affine maps over a finite field form a pairwise independent hash family
- `thm-freivalds-matrix-product-verification` · theorem — Freivalds' algorithm verifies a matrix product in randomized polynomial time with one-sided error
- `def-polynomial-identity-testing` · definition — Polynomial identity testing
- `thm-schwartz-zippel-lemma` · theorem — The Schwartz-Zippel lemma
- `cor-pit-is-in-corp` · corollary — Polynomial identity testing is in coRP
- `fs-reusing-random-bits-amplifies-success` · false-statement — FALSE: reusing the same random bits amplifies success
- `fs-pp-has-bounded-error-away-from-one-half` · false-statement — FALSE: every PP algorithm has bounded error separated from one half by a fixed constant

### `randomized-complexity-and-amplification-examples` — Randomized Complexity and Amplification: Examples and Counterexamples (3 item(s))

- `ex-majority-error-bound-from-chebyshev` · example — A concrete majority-vote error estimate from Chebyshev's inequality
- `ex-pit-is-in-corp` · example — A random evaluation test that separates the zero polynomial from x^2-y^2
- `cex-reusing-random-bits-amplifies-success` · counterexample — Repeating a randomized test with the same coin string gives no amplification

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Alerts from other groups

None. No other group flagged an item you own.

## Your rejections

| item | page | model | context_sha256 |
|---|---|---|---|
| `cex-cook-levin-enumerates-all-branches` | `the-cook-levin-theorem-examples` | gpt-5.6-terra | `e40508a97c06f8745067748afcbb356cd8f8b7d54e5b543ad2a18fba559fe60f` |
| `cex-reductions-may-reverse-yes-and-no` | `computable-reductions-and-rices-theorem-examples` | gpt-5.6-terra | `dccc57a20fbcadce0304a1d74efedb9cd6d7330d9a0af7dcbe28b79577b8ee95` |
| `def-bounded-computation-tableau` | `the-cook-levin-theorem` | gpt-5.6-terra | `e4a0f515ca025e517f84aa38e55f9604beae37a28d756df271678aeba5e8f939` |
| `def-polynomial-identity-testing` | `randomized-complexity-and-amplification` | gpt-5.6-terra | `fe1b6afb300905881b580f2e2e929ac1a1341a9382af448bb62bc9971fba2990` |
| `def-probabilistic-polynomial-time-machine` | `randomized-complexity-and-amplification` | gpt-5.6-terra | `d10c8e9e8b5f945737c4738e3caeabdab7a28d68f137f6cb92e20e84f3dd29c3` |
| `def-reachable-configuration-formula` | `space-complexity-savitch-and-tqbf` | gpt-5.6-terra | `510da7191c9b24630d5a4013c63f4910110cdac419bc1dc5747063f9f45c9564` |
| `def-rp-corp-zpp-bpp-and-pp` | `randomized-complexity-and-amplification` | gpt-5.6-terra | `2da6fc5be598f83c34ac2899138a3caf1f6369ce2310a124dfa51b69677760c1` |
| `def-tseitin-extension-variable` | `the-cook-levin-theorem` | gpt-5.6-terra | `2eadd20f0ad94f3d347bda1fb086423a9ce0636686f30a10616ae11f8980e8c5` |
| `ex-ap-equals-pspace` | `space-complexity-savitch-and-tqbf-examples` | gpt-5.6-terra | `f4362719f5e3e4c4a462a4a658a07c05edae127a83bb20f1d2dba0686dd737e4` |
| `ex-many-one-reductions-transfer-decidability-and-recognizability` | `computable-reductions-and-rices-theorem-examples` | gpt-5.6-terra | `2accf21ccc01eccb55c1be26a19c8bdb5fa4dcf7f8471204e440427eae97fb28` |
| `ex-pit-is-in-corp` | `randomized-complexity-and-amplification-examples` | gpt-5.6-terra | `82a45e5ba3cabd00c6fe2983faf1d6f2bdf245640110236222991fcd30098a9a` |
| `fs-cook-levin-enumerates-all-branches` | `the-cook-levin-theorem` | gpt-5.6-terra | `352e9f1fb6c97701ad47d7e7e2393b2d35831f6a6ad74154d6b7f255982f406f` |
| `fs-reusing-random-bits-amplifies-success` | `randomized-complexity-and-amplification` | gpt-5.6-terra | `895557c58776fb811c11ad58f66aabe54ccdd6fcba44e1ffecdeb776bbda58c2` |
| `fs-rices-theorem-applies-to-state-count` | `computable-reductions-and-rices-theorem` | gpt-5.6-terra | `aba66cc87b3a489901257fb9e2c34fe9200f4c5de8863532d5d6787e8ac1bdf0` |
| `lem-chernoff-bound-for-bernoulli-trials` | `randomized-complexity-and-amplification` | gpt-5.6-terra | `a683d2df6f91c93b04af4d4bf8be18d1d7e8f131699590b3e7166a82f1a0ce1a` |
| `lem-cook-levin-formula-is-satisfiable-iff-acceptance-occurs` | `the-cook-levin-theorem` | gpt-5.6-terra | `cab4cdfd494512f38c08deb5a3f434ae632b42b5f2ccaafc9c04f0eba424e9d8` |
| `lem-cook-levin-map-is-polynomial-time` | `the-cook-levin-theorem` | gpt-5.6-terra | `2e5dbad038cbde1b253d7063379edd8e0785bd5cd0fe469d2f8222e4145a56f7` |
| `lem-majority-error-bound-from-chebyshev` | `randomized-complexity-and-amplification` | gpt-5.6-terra | `7092d34a44eeaa5b9f1d05fe8a11af4f41b0e8dc51e89da684e28ef676284011` |
| `lem-many-one-reducibility-is-a-preorder` | `computable-reductions-and-rices-theorem` | gpt-5.6-terra | `4c2f7ca4f174a25bf784d2fb0e7e3b099d9daef5828d142c19cd26b9e35fa72a` |
| `lem-quantifier-reuse-keeps-reachability-formulas-polynomial` | `space-complexity-savitch-and-tqbf` | gpt-5.6-terra | `2efa3c3887758232cdd54afe80234cfe19841367cab7507356e29d63e831ad36` |
| `lem-rice-witness-machine-construction` | `computable-reductions-and-rices-theorem` | gpt-5.6-terra | `4c7cbfda7c74e7466017e45c3a26217952bfc13e4da65f86d3fac829e983fbf9` |
| `lem-space-bounded-machines-have-exponentially-many-configurations` | `space-complexity-savitch-and-tqbf` | gpt-5.6-terra | `d5408e662085eeff7e5a01b658289892abef196aae834e32fc084dd5d6ae6f4c` |
| `lem-start-accept-and-transition-constraints-have-polynomial-size` | `the-cook-levin-theorem` | gpt-5.6-terra | `4cfccb92552762785bc4648f9ca0984bf3766c15f6809b5c5520c8eabda77da5` |
| `prop-sat-is-in-np` | `the-cook-levin-theorem` | gpt-5.6-terra | `f346581ba24f20d48cf71da5ec4728923e519ed6264960c8f6881d0e4ed69d26` |
| `prop-syntactic-properties-lie-outside-rices-theorem` | `computable-reductions-and-rices-theorem` | gpt-5.6-terra | `0c331dcd70191a6ab614b33a04c252aea06fdb8cccd0fb463a757dc93f1b678b` |
| `thm-adleman-bpp-is-contained-in-p-poly` | `randomized-complexity-and-amplification` | gpt-5.6-terra | `aca9dc06587a113b65b7951edcd64e8f9860787da32a7b91488fc047b1812499` |
| `thm-bpp-amplification-to-exponentially-small-error` | `randomized-complexity-and-amplification` | gpt-5.6-terra | `709b943022d14b668bf8de8a27626b2dea1bb794f0cbdd824913a333d9b6150f` |
| `thm-freivalds-matrix-product-verification` | `randomized-complexity-and-amplification` | gpt-5.6-terra | `bd227dfe87af9f351559c96eb89a83eb1091effb1022438bbda47342bf568665` |
| `thm-rice-shapiro-positive-information-direction` | `computable-reductions-and-rices-theorem` | gpt-5.6-terra | `891e8d84e2beaa35bf459f8ce32deef4ead6d3d719abb5509a43c41d97b5a2b3` |
| `thm-rices-theorem` | `computable-reductions-and-rices-theorem` | gpt-5.6-terra | `80cf4d0b553efe0336ecca09be3718a5d22bec69767c158463676e6749b8d035` |
| `thm-rp-one-sided-amplification` | `randomized-complexity-and-amplification` | gpt-5.6-terra | `45f33598ebc4191ddd2ed147ac1e3bb1c3640af335572fe09dfc4b32abfea92c` |
| `thm-three-sat-is-np-complete` | `the-cook-levin-theorem` | gpt-5.6-terra | `212b22847294f400072ca903b523cad04a9e27640fba90c4da075505b4a002f9` |
| `thm-zpp-equals-rp-intersection-corp` | `randomized-complexity-and-amplification` | gpt-5.6-terra | `9931c39adce62c7571f38bdf692d11546a109e7f907381af9f822101af6c837e` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 8 — fatal-only configured-judge adjudication, `frontier-29`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Web search is available in this role. If any mathematics is uncertain, use it
and verify the point against original sources before deciding the outcome or
making a repair. Record the sources consulted and the exact claim each source
supports in the group report; do not resolve uncertainty from memory or a
secondary summary alone.

Append one row per rejection to `research/frontier-29-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Descriptive defect-ledger subclasses
such as `invalid-inference`, `false-claim`, or `ill-typed-construction` are not
valid adjudication `defect_type` values.

For an incoming alert, append the owning-group disposition to
`research/frontier-29-step8-alert-decisions.jsonl`. A defect in another group is a
`research/frontier-29-step8-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-8 baseline or rewrite shared ledgers. Run the Step-8 guard
and scope check, then write `research/frontier-29-alpha-step8-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.
