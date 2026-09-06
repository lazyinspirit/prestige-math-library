# frontier-31 batch 22 notes — beta scaffold

Owned pair:

- `interactive-proof-systems-and-public-coins` /
  `interactive-proof-systems-and-public-coins-examples`

Artifacts writable in this dispatch:

- `research/frontier-31-batch-22.pages.json`
- `research/frontier-31-batch-22.coverage.json`
- this file

Session date: Saturday, September 5, 2026 (AEST).

## Design against spec

I read `AGENTS.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`, the generated
batch task, `research/plan-spec.json`, and both matched locations in
`research/plan-computability-theory-track.md`.

The two matched design locations are not competing amendments: line `1240`
starts the complete TC-30 A-page block and line `1264` starts its B-page
subheading.  I treated the full TC-30 block as controlling, and treated the
later B line as part of that same block.  The design and current plan spec
agree on id, A order `639`, B order `640`, category, companion relation, and
the two direct prerequisites
`randomized-complexity-and-amplification` and
`space-complexity-savitch-and-tqbf`; no design/spec drift is recorded.

## Item census and split decision

- A page: 16 items, exactly the 16 IDs prescribed by TC-30.
- B page: 3 items, exactly the 3 IDs prescribed by TC-30.

The A page is well below the 60-item ceiling.  No split is needed.

## Dependency closure and proof routes

The A-page order is the controlling design order.  Every planned item has an
explicit `deps` array.  No A item depends on a B-page item.

The existing interfaces opened on disk are:

- `def-probabilistic-polynomial-time-machine` for a PPT verifier and its
  bounded random tape;
- `def-np-by-verifiers` for the certificate route to `NP subseteq IP`;
- `def-pairwise-independent-hash-family` for the public hash challenge;
- `def-pspace-and-npspace` for the target class;
- `def-graph-isomorphism-and-complement` for GNI; and
- the two prerequisite page compositions named by the plan, including their
  randomized-machine/hash and PSPACE interfaces.

The actual proof spine is:

1. normalize a protocol as an alternating finite transcript with a
   polynomial-time randomized verifier and an unrestricted transcript strategy;
2. separate existential completeness from universal, adversarial soundness;
3. derive `NP subseteq IP` and fresh-coin sequential amplification;
4. define private/public coins and use the pairwise-independent set-size
   challenge in the Goldwasser--Sipser conversion;
5. make the finite game tree explicit, choose a deterministic maximizing
   prover, and evaluate max nodes and average nodes depth-first in PSPACE;
6. prove only `IP subseteq PSPACE`; the converse is deliberately not imported;
   and
7. instantiate the model with private-coin graph nonisomorphism, then retain
   the two quantifier/bounded-prover traps as false statements.

The three B items are non-load-bearing worked or counterexamples.  They depend
only on earlier A items, never the reverse.

## Current scaffold records

The manifest is the machine-readable authority for the full proposed strategy
of every proof.  This checkpoint records each current item, its exact planned
claim, and direct dependency IDs.

| ID | Planned claim | Direct deps |
| --- | --- | --- |
| `def-interactive-proof-transcript-round-and-strategy` | transcript, round, and prover-strategy definition | `def-probabilistic-polynomial-time-machine` |
| `def-completeness-and-soundness` | completeness/soundness definition | `def-interactive-proof-transcript-round-and-strategy` |
| `def-ip` | class IP definition | `def-interactive-proof-transcript-round-and-strategy`, `def-completeness-and-soundness` |
| `prop-np-is-contained-in-ip` | `NP subseteq IP` | `def-np-by-verifiers`, `def-completeness-and-soundness`, `def-ip` |
| `lem-sequential-repetition-amplifies-error` | fresh sequential repetition amplifies error | `def-completeness-and-soundness` |
| `def-private-coin-public-coin-and-arthur-merlin-protocol` | private/public/AM definition | `def-interactive-proof-transcript-round-and-strategy`, `def-completeness-and-soundness`, `def-ip` |
| `lem-hashing-commits-public-randomness` | public pairwise-hash set-size challenge | `def-pairwise-independent-hash-family` |
| `thm-private-coin-ip-equals-public-coin-ip` | private-coin IP equals public-coin IP | `def-ip`, `def-private-coin-public-coin-and-arthur-merlin-protocol`, `lem-sequential-repetition-amplifies-error`, `lem-hashing-commits-public-randomness` |
| `def-protocol-game-tree-and-value` | protocol game-tree/value definition | `def-interactive-proof-transcript-round-and-strategy` |
| `lem-optimal-prover-may-be-deterministic` | deterministic maximizer exists | `def-protocol-game-tree-and-value` |
| `lem-protocol-value-is-computable-in-polynomial-space` | exact finite-protocol value uses PSPACE | `def-protocol-game-tree-and-value`, `lem-optimal-prover-may-be-deterministic`, `def-pspace-and-npspace` |
| `thm-ip-is-contained-in-pspace` | `IP subseteq PSPACE` | `def-ip`, `def-pspace-and-npspace`, `lem-protocol-value-is-computable-in-polynomial-space` |
| `def-graph-nonisomorphism-protocol` | private-coin GNI protocol definition | `def-interactive-proof-transcript-round-and-strategy`, `def-graph-isomorphism-and-complement` |
| `thm-graph-nonisomorphism-is-in-ip` | `GNI in IP` | `def-ip`, `def-completeness-and-soundness`, `def-graph-nonisomorphism-protocol`, `lem-sequential-repetition-amplifies-error` |
| `fs-soundness-quantifies-only-over-honest-provers` | false statement: soundness tests only honest provers | `def-completeness-and-soundness` |
| `fs-the-prover-must-run-in-polynomial-time` | false statement: prover must be polynomial-time | `def-interactive-proof-transcript-round-and-strategy`, `def-ip`, `def-graph-nonisomorphism-protocol` |
| `ex-sequential-repetition-amplifies-error` | two copies send `1/2` soundness to `1/4` | `def-completeness-and-soundness`, `lem-sequential-repetition-amplifies-error` |
| `ex-graph-nonisomorphism-is-in-ip` | concrete private-coin GNI challenge | `def-graph-nonisomorphism-protocol`, `thm-graph-nonisomorphism-is-in-ip` |
| `cex-soundness-quantifies-only-over-honest-provers` | cheating strategy refutes honest-only soundness | `def-completeness-and-soundness`, `fs-soundness-quantifies-only-over-honest-provers` |

## Conventions and source-grounded limits

- A round is one verifier message followed by one prover message.  The
  normalized verifier begins, the total number and lengths of messages are
  polynomially bounded in input length, and its random tape is the only
  probability space.
- A prover strategy is an arbitrary deterministic function of the visible
  transcript.  It has no runtime bound.  A probabilistic prover is not a
  stronger model for the optimum because a deterministic choice can maximize
  the finite-tree continuation value.
- Completeness is `exists P` on yes-instances; soundness is `for every P` on
  no-instances.  The latter includes malicious, adaptive strategies.
- A public-coin verifier reveals every coin string already used to form a
  verifier message; it does not reveal future randomness.  Arthur--Merlin is
  this public-coin form.
- Repetition means reset copies with independent fresh verifier coins.  For a
  two-sided gap, the verifier takes a majority: a fixed honest prover gives
  independent trials, while a cheating prover still has conditional acceptance
  probability at most the soundness bound after every history, which supports a
  conditional-moment Chernoff bound.  The conjunction form is retained for
  perfect completeness and yields the exact `s^t` soundness bound.  Neither
  form assumes that an adaptive cheating prover becomes independent.
- `lem-hashing-commits-public-randomness` deliberately uses the design's word
  “commits” only operationally.  It is an approximate set-size/preimage
  challenge based on pairwise independence, not a cryptographic commitment and
  makes no hiding or binding assertion.
- Game-tree values are exact acceptance counts over the polynomially many
  verifier coin bits.  The PSPACE evaluator may take exponential time while
  storing only a polynomial-length transcript, recursion stack, configuration,
  and counters.
- The GNI protocol uses two graphs on a common labelled vertex set: the
  verifier selects one uniformly, randomly permutes it, and asks the prover
  which source graph was used.  Nonisomorphic inputs have perfect completeness;
  isomorphic inputs induce identical challenge distributions and have
  soundness at most one half before repetition.

`thm-private-coin-ip-equals-public-coin-ip` must state the true class-level
conversion: public coins are trivially private-coin IP, while Goldwasser--Sipser
gives `IP[k] subseteq AM[k+2]` after normalization/amplification.  It must not
claim an unchanged protocol, unchanged round count, or a cryptographic
commitment theorem.

`thm-ip-is-contained-in-pspace` is intentionally only the max/average
direction.  `PSPACE subseteq IP`, arithmetization, field size, polynomial
degree, sum-check randomness, and its completeness/soundness bookkeeping are
deferred to `arithmetization-and-the-sum-check-protocol` and then
`the-ip-equals-pspace-theorem`; no forward reference is planned here.

## Sources read and harvest support

All recorded URLs were opened at their full-text URL before the scaffold was
written.  Exact locators, each source's headings/results over the recorded
range, and a disposition for each one are in
`research/frontier-31-batch-22.coverage.json`.

1. Arora and Barak, *Computational Complexity: A Modern Approach*, Chapter 8:
   `https://theory.cs.princeton.edu/complexity/book.pdf`.
   This is the textbook/table-of-contents backbone for the IP definition,
   GNI, AM/public coins, the hash lower-bound protocol, and the statement of
   `IP = PSPACE`.  Locator: Chapter-8 contents PDF p. 7, then §§8.2--8.5 at
   PDF pp. 164--172 / printed draft pp. 149--158.
2. James Aspnes, *Notes on Computational Complexity*, Chapter 16:
   `https://www.cs.yale.edu/homes/aspnes/classes/468/notes.pdf`.
   This independent full lecture-note treatment supplies a harvestable chapter
   table of contents and explicitly presents private/public GNI, the
   pairwise-hash hit analysis, private-coin simulation, and the max/average
   `IP subseteq PSPACE` evaluation.  Locator: Chapter-16 contents PDF p. 6,
   then Chapter 16 PDF pp. 158--163 / printed pp. 139--144.
3. Shafi Goldwasser and Michael Sipser, *Private Coins versus Public Coins in
   Interactive Proof Systems*:
   `https://www.cs.tau.ac.il/~amnon/Classes/2004-Class-Between-P-and-PSPACE/from%20classes/safi-sipser-private-public-1986-stoc.pdf`.
   This is the eligible primary treatment for the public/private conversion,
   with its own Definitions, approximate lower-bound lemma, amplification
   lemma, main theorem, and proof.  Locator: PDF pp. 1--8 / printed
   proceedings pp. 60--67, through sections `Interactive Proof Systems`,
   `Arthur-Merlin Games`, §§2--4, and the start of the full proof.

The source harvest assigns every included or inline result to a planned ID.
The two out-of-scope treatments are individually reasoned in coverage.  The
IP-equality and PSPACE-to-IP results are deferred to the planned
`the-ip-equals-pspace-theorem` page with reasons and a resolving destination.

## Known authoring obligations

- Preserve the exact `exists`/`for all` quantifier contrast in the completeness
  and soundness definitions.  The false statement and counterexample must use
  an actual no-instance and cheating strategy, not merely restate the rule.
- In the repetition proof, condition on the full preceding transcript and
  invoke soundness for the induced continuation strategy.  Use a
  conditional-moment Chernoff argument for majority repetition; reserve the
  simple product calculation for the perfect-completeness conjunction form.
  Do not multiply probabilities by assuming a cheating prover's replies are
  independent.
- In the hashing lemma, state the set-membership verifier, hash domain/range,
  output-length regime, union-bound sparse case, and pairwise-
  independence/inclusion--exclusion dense case.  Keep the size gap and the
  amplification step explicit.
- In the Goldwasser--Sipser theorem, account for amplification, message and
  randomness bounds, the two extra rounds, and the change from private
  verifier coins to public hash challenges.
- In the PSPACE evaluator, keep exact counters at polynomial bit length and
  distinguish exponential time/branching from polynomial workspace.  A bare
  claim that “the game tree can be searched” is not enough.
- In GNI, prove the identical-distribution claim for isomorphic graphs before
  applying repetition.  Do not say the prover is polynomial-time; the intended
  prover may decide graph isomorphism by unrestricted computation.

## Current checkpoint and validation plan

The manifest and source harvest have been written.  Local JSON parsing and the
explicit-dependency validator pass (`19` items, none missing `deps`).  The
repository Node fetcher attempted all three exact source URLs at
`2026-09-05T07:32:19Z` and returned `EAI_AGAIN` for each: the sandbox cannot
resolve external DNS.  This is not treated as a source failure because each
exact full PDF was independently fetched and read in the web reader.  The
coverage records transparent `verified_via: web-open` receipts with page
counts and no invented byte/hash fields.

## Validation receipt

Completed on the current bytes:

- JSON parsing: pass for the manifest and coverage.
- `node tools/manifest-deps.mjs research/frontier-31-batch-22.pages.json`:
  `19` items and `0` missing explicit dependency arrays.
- `node tools/source-fetch-check.mjs --coverage research/frontier-31-batch-22.coverage.json`:
  `3/3` sources fetch-verified from the transparent web-reader receipts.
- `node tools/coverage-checklist.mjs --require-destination research/frontier-31-batch-22.coverage.json`:
  `1` A page, `41` harvested results, `0` errors, `0` warnings.
- `node tools/content-policy.mjs --manifest-only research/frontier-31-batch-*.pages.json`:
  `447` scoped items, `0` errors, `0` warnings.
- A read-only overlay that substitutes this batch's two pages into the current
  `research/plan-spec.json`, piped to `tools/validate-plan.mjs`: pass.  It
  reports no item cycle, forward reference, B-page dependency, unresolved ID,
  or undeclared prerequisite edge for the overlaid plan.
- `git diff --check` over the owned manifest/coverage/notes path set: no
  whitespace diagnostics.

The header-only URL sweep was also run against this coverage.  It reported
`0/3` live only because sandbox `curl` cannot resolve any external hostname
(`curl: (6) Could not resolve host` for each URL), matching the Node
`EAI_AGAIN` result.  This is an environment DNS failure, not evidence that a
recorded source is dead: the exact URLs were all opened as full PDFs in the web
reader and are recorded with their visible page counts.  Consequently no
alternate/recovery URL was substituted, and no harvest row was removed.

The scaffold is complete.  Step 5 should use the manifest's proof strategies,
the coverage locators, and the authoring obligations above without changing the
planned page structure or importing the deferred IP-equality direction.
