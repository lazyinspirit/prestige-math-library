# frontier-23 batch 10 notes - beta scaffold

Owned pair:

- `formal-languages-encodings-and-decision-problems` / `formal-languages-encodings-and-decision-problems-examples`

Artifacts written in this dispatch:

- `research/frontier-23-batch-10.pages.json`
- `research/frontier-23-batch-10.coverage.json`
- this file

Session date: Friday, August 28, 2026.

## Design against spec

I read `research/frontier-23-beta-10.task.md`, `research/plan-spec.json`,
`SCHEMA.md`, `README.md`, and the assigned design block in
[research/plan-computability-theory-track.md](/home/lazyinspirit/Projects/prestige-math-library/research/plan-computability-theory-track.md:178).

The task's two design references, lines `178` and `204`, are not competing
amendments. Line `204` is the B-page subheading inside the same `TC-1` design
section, so I treated the full block at lines `178-214` as the controlling
design text.

The design and the current spec agree on:

- page id
- companion page id
- page title
- order
- category
- declared prerequisite pages

No design-vs-spec drift needed recording for this batch.

One scaffold repair was necessary inside the page plan itself. The design's
item `fs-every-injection-is-an-effective-encoding` is not locally refutable at
order `581` under the track's own convention
`encoding = injective, effectively decodable, with malformed-code behavior
fixed`, because its clean counterexamples need later machine-countability or
undecidability machinery from `TC-10` through `TC-12`. I therefore replaced it
in the scaffold with the locally refutable
`fs-every-effective-encoding-is-prefix-free`, and added the matching B-page
counterexample `cex-an-effective-encoding-need-not-be-prefix-free`. The notes
below preserve that rationale for step 5 and step 3 review.

## Item census and split check

- A page `formal-languages-encodings-and-decision-problems`: `18` items
- B page `formal-languages-encodings-and-decision-problems-examples`: `4` items

No A page is close to the `60`-item split gate, so no split is needed.

## Route choices

The page keeps the design's route and proof trap:

1. define words and languages carefully enough that syntax and denotation do
   not get conflated,
2. put the regular operations on languages before any automaton model,
3. prove the small structural lemmas the later DFA/NFA pages will reuse,
4. define encodings with the malformed-code behavior fixed,
5. separate decision/search/function formulations before computability proper,
6. state the encoded-size convention that the later resource pages will build
   on.

Important choices:

- I kept the finite-word agreement lemma exactly where the design puts it. The
  earlier combinatorics page already owns a published finite-word convention,
  so this page needs an explicit seam rather than a silent redefinition.
- I did **not** add a countability theorem for `\\Sigma^*` or an
  "uncountably many languages" corollary. Gallier's range contains that
  material, but the current page does not need it internally, and the actual
  undecidability use belongs with
  `diagonalization-and-the-halting-problem`, after machine descriptions and
  recognizability are on disk.
- I broadened `def-instance-size-under-an-encoding` just enough to carry the
  missing notion of **polynomially related encodings**. Without that, the
  design's Proposition `16` would rest on an undefined phrase.
- I changed the second false statement, as noted above, because the original
  design sentence was a genuine step-5 closure defect, not a stylistic
  preference.

## Conventions and dependency notes

- **Language convention.** A language is recorded as a subset of `\\Sigma^*`
  with the alphabet retained as ambient data. This follows the track's
  convention table and is the reason complement is always "inside the fixed
  ambient `\\Sigma^*`", not inside the class of all binary strings.
- **Reversal convention.** Reversal is defined first on words and then lifted
  pointwise to languages; the lemma proves both the involution law and the
  reversed-concatenation law before any automata page uses them.
- **Homomorphism convention.** The scaffold uses the more flexible alphabet map
  `h : \\Sigma \\to \\Delta^*` and then proves the unique extension to
  `\\Sigma^*`. This matches Gallier's free-monoid treatment and prevents the
  later regular-language page from having to retrofit the general case.
- **Encoding convention.** "Effective" on this page means injective plus a
  concrete total decoder with fixed malformed-code behavior. The page does not
  yet formalize effectivity by Turing machines; that machine-level treatment is
  deferred to `robust-machine-models-and-universal-computation`.

## Source set actually read

I read and harvested from these live sources through the web reader on Friday,
August 28, 2026:

1. Jean Gallier and Jocelyn Quaintance, *Introduction to the Theory of
   Computation: Some Notes for CIS511*.
2. John E. Savage, *Models of Computation: Exploring the Power of Computing*.
3. Michael Sipser, MIT OCW lecture notes, Lecture `1`.
4. Michael Sipser, MIT OCW lecture notes, Lecture `7`.
5. Sanjeev Arora and Boaz Barak, *Computational Complexity: A Modern Approach*
   (January 2007 draft).
6. San Skulrattanakulchai, lecture note *The Class P*.

What each source is doing in the scaffold:

- Gallier is the main formal-language source for alphabets, words, language
  operations, reversal, and homomorphisms.
- Savage supplies the decision-problem / language dictionary, the general
  function-problem viewpoint, and the encoded-instance-length convention.
- Sipser Lecture `1` independently backs the strings/languages/regular
  operations route in the design's stated Sipser coverage.
- Sipser Lecture `7` backs tuple-encoding notation and records the exact later
  automata/grammar decision problems that this page intentionally does not yet
  build.
- Arora-Barak supplies the explicit decision-versus-search distinction and the
  exact later search-to-decision theorem destination.
- The St. Olaf lecture note is the explicit source for the standard classroom
  convention on polynomially related encodings.

## Known limits and step-5 risks

- The page's only nontrivial step-5 design repair is the replacement of
  `fs-every-injection-is-an-effective-encoding`. If step 3 insists on the
  original id, the pair will need a later-page dependency or a re-scope
  decision; it is not honestly authorable at order `581` as written.
- `def-effective-binary-encoding-and-decoder` must stay explicit about what the
  decoder does on malformed input. The track's proof traps and convention table
  both make that load-bearing.
- The shell in this dispatch cannot resolve external hosts, so the mechanical
  fetch/liveness validators below do not pass here even though every cited URL
  was opened and read in the web channel before I wrote its coverage rows.

## Validation checklist

Commands run after writing the scaffold:

```bash
node tools/coverage-checklist.mjs --require-destination research/frontier-23-batch-10.coverage.json
node tools/content-policy.mjs --manifest-only research/frontier-23-batch-*.pages.json
node tools/validate-plan.mjs research/plan-spec.json
node tools/source-fetch-check.mjs --coverage research/frontier-23-batch-10.coverage.json --stamp
node tools/source-fetch-check.mjs --coverage research/frontier-23-batch-10.coverage.json
node tools/url-sweep.mjs --coverage research/frontier-23-batch-10.coverage.json --out /tmp/frontier-23-batch-10-url-liveness.json --recover --fail-on-dead
```

Results are appended below after execution.

## Validation results

- `node tools/coverage-checklist.mjs --require-destination research/frontier-23-batch-10.coverage.json`
  passed on Friday, August 28, 2026 with one standing warning:
  `coverage-checklist: 1 page(s), 55 harvested result(s), 0 error(s), 1 warning(s)`.
  The warning is `coverage-low-yield` on
  `formal-languages-encodings-and-decision-problems` (`20/55` harvested rows
  are scaffolded as `included`). That is real and is left for Alpha review;
  the declines are intentional and destination-complete.

- `node tools/content-policy.mjs --manifest-only research/frontier-23-batch-*.pages.json`
  passed:
  `content-policy: 388 scoped item(s), 0 error(s), 0 warning(s)`.

- `node tools/validate-plan.mjs research/plan-spec.json`
  exited `0` on Friday, August 28, 2026. The visible output remained the
  repository-wide `redundant-prereq` advisories and ended with:
  `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 484 page(s) with item lists.`

- `node tools/source-fetch-check.mjs --coverage research/frontier-23-batch-10.coverage.json --stamp`
  failed for all six source URLs with the same resolver error `EAI_AGAIN`:
  - `https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html`
  - `https://cs.brown.edu/people/jsavage/book/pdfs/ModelsOfComputation.pdf`
  - `https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/b4d9bf1573dccea21bee82cfba4224d4_MIT18_404f20_lec1.pdf`
  - `https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/78c0346bd81b6abcb2b1dde899adfc88_MIT18_404f20_lec7.pdf`
  - `https://theory.cs.princeton.edu/complexity/book.pdf`
  - `https://homepages.gac.edu/~sskulrat/Courses/2019S-265/lectures/P.html`

- `node tools/source-fetch-check.mjs --coverage research/frontier-23-batch-10.coverage.json`
  then failed, correctly, because no `fetch_verified` stamps exist after the
  resolver failure.

- `node tools/url-sweep.mjs --coverage research/frontier-23-batch-10.coverage.json --out /tmp/frontier-23-batch-10-url-liveness.json --recover --fail-on-dead`
  failed `0/6` live on the same shell-wide DNS blocker:
  `curl: (6) Could not resolve host` for every host, `0` recoverable snapshots,
  receipt written to `/tmp/frontier-23-batch-10-url-liveness.json`.
  Its generic line "`re-sourcing is justified here`" is not a real mathematical
  source finding in this dispatch, because the failure mode is transport-wide
  and affected every host uniformly.

What was still verified despite the shell-side source-gate blocker:

- Every recorded URL was actually opened in the web reader before I wrote its
  locator and harvest rows.
- I did not fabricate any `fetch_verified` stamps.
- The fetch and liveness failures are resolver-wide in this shell, not evidence
  that any one of the six source documents is dead or mismatched.

## Step-3 fix pass

- `research/frontier-23-alpha-d-step3-scaffold-review.md` issues no `B10-*`
  finding ids for batch `10`; it leaves
  `formal-languages-encodings-and-decision-problems` at verdict
  `sufficient`, so `research/frontier-23-batch-10.pages.json` stays unchanged.
- `b53896d2ceacbc81879c9ada022bcf83875bedb580352f1bb1862428f52ddabf` —
  applied. Evidence: `research/frontier-23-alpha-d-scope-decisions.json`
  marked the Arora-Barak `Theorem 2.19` row `owner-decision` because the old
  deferment reason overclaimed that the live TC-20 page already plans the same
  general search-from-decision theorem. The current plan at
  `research/plan-computability-theory-track.md:889-890` names only
  `def-search-version-of-an-np-relation` and the SAT-specific
  `thm-sat-search-reduces-to-sat-decision`. Changed scaffold record:
  `research/frontier-23-batch-10.coverage.json`, source
  `https://theory.cs.princeton.edu/complexity/book.pdf`, result
  `Theorem 2.19`; destination kept as
  `p-np-conp-and-polynomial-reductions`, reason rewritten to route it to the
  later NP/verifier discussion without claiming verbatim later coverage.
- `dc271d44e0d51ba2f5dbf67cc8f01f9227192a11a7a62ece86c225d935078f6e` —
  applied. Evidence: `research/frontier-23-alpha-d-scope-decisions.json`
  marked Sipser's `A TM has three possible outcomes for each input`
  `owner-decision` because the exact current home is TC-9
  `turing-machines-configurations-and-computation`, whose live items at
  `research/plan-computability-theory-track.md:478-482` define accepting and
  rejecting configurations, halting, divergence, and recognized/decided
  languages. Changed scaffold record:
  `research/frontier-23-batch-10.coverage.json`, source
  `https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/78c0346bd81b6abcb2b1dde899adfc88_MIT18_404f20_lec7.pdf`,
  result `A TM has three possible outcomes for each input`; destination
  changed from `decidable-recognizable-and-enumerable-languages` to
  `turing-machines-configurations-and-computation`, and the reason now names
  the exact machine-semantics page.
- Source re-verification: I re-opened all six recorded source URLs in the web
  reader on Friday, August 28, 2026, and confirmed that each current URL still
  resolves, including
  `https://homepages.gac.edu/~sskulrat/Courses/2019S-265/lectures/P.html`.
- Validators rerun on Friday, August 28, 2026:
  - `node tools/coverage-checklist.mjs --require-destination research/frontier-23-batch-10.coverage.json`
    passed with the same standing warning:
    `coverage-checklist: 1 page(s), 55 harvested result(s), 0 error(s), 1 warning(s)`;
    the warning remains `coverage-low-yield` on
    `formal-languages-encodings-and-decision-problems` (`20/55` included).
  - `node tools/content-policy.mjs --manifest-only research/frontier-23-batch-*.pages.json`
    passed:
    `content-policy: 499 scoped item(s), 0 error(s), 0 warning(s)`.
  - `node tools/validate-plan.mjs research/plan-spec.json` exited `0` and
    ended with:
    `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 484 page(s) with item lists.`

## Step-5 authoring

Session date: Saturday, August 29, 2026.

Authored artifacts:

- A page: `library/computability-theory/formal-languages-encodings-and-decision-problems.md`
- B page: `library/computability-theory/formal-languages-encodings-and-decision-problems-examples.md`
- Proof-contract report: `research/frontier-23-batch-10.proof-contracts.json`
- A-page items: `def-computation-alphabet-and-word-convention`, `lem-computation-words-agree-with-published-finite-words`, `def-language-over-an-alphabet`, `def-language-boolean-operations`, `def-language-concatenation-powers-and-kleene-star`, `lem-language-concatenation-is-associative`, `lem-kleene-star-has-the-expected-least-closure-property`, `def-word-and-language-reversal`, `lem-reversal-is-an-involution-and-reverses-concatenation`, `def-alphabet-homomorphism-and-induced-word-map`, `lem-induced-word-map-has-the-free-extension-property`, `def-effective-binary-encoding-and-decoder`, `lem-finite-tuples-admit-effective-prefix-free-encodings`, `def-decision-search-and-function-problem`, `def-instance-size-under-an-encoding`, `prop-polynomially-related-encodings-preserve-polynomial-size`, `fs-a-language-is-a-set-of-symbols`, `fs-every-effective-encoding-is-prefix-free`
- B-page items: `ex-language-concatenation-is-associative`, `ex-polynomially-related-encodings-preserve-polynomial-size`, `cex-a-language-is-a-set-of-symbols`, `cex-an-effective-encoding-need-not-be-prefix-free`

Provenance rationale kept on disk:

- Core definitions and standard structural lemmas are tagged `literature-derived` in `provenance.statement`, with locally written proofs tagged `ai-generated` where the batch writes the proof text rather than merely copying a source proof.
- The worked examples and counterexamples are tagged `ai-generated` statements with the required `generation.role` entries (`example` or `counterexample`), and none of those generated statements is used as a dependency target.
- Every authored item and both pages remain `status: draft`, as required for an in-flight Step-5 run.

Authoring repairs and claim control:

- I kept the scaffold's repaired false statement `fs-every-effective-encoding-is-prefix-free`; I did not restore the non-authorable design placeholder `fs-every-injection-is-an-effective-encoding`.
- No further narrowing or dropping was needed after authoring. The A-page route stayed the scaffolded one: words and languages, operations, reversal, induced maps, encodings, problem types, encoded size, and the two local false statements.
- During contract validation I converted the proof-bearing items' `deps` frontmatter from YAML block lists to inline arrays. That was not a mathematical change; it was required because `tools/proof-contract.mjs` reads dependency lists with an inline-array parser and otherwise cannot see the cited dependencies.
- I tightened two B-page facts to cite the underlying definitions directly instead of paraphrasing the false-statement items, so the proof-contract quotes preserve exact cited claims.

Blockers:

- None for the batch authoring scope.

Checks run on the authored state:

- `node tools/tsx-run.mjs tools/precheck.mts items/def-computation-alphabet-and-word-convention.md items/lem-computation-words-agree-with-published-finite-words.md items/def-language-over-an-alphabet.md items/def-language-boolean-operations.md items/def-language-concatenation-powers-and-kleene-star.md items/lem-language-concatenation-is-associative.md items/lem-kleene-star-has-the-expected-least-closure-property.md items/def-word-and-language-reversal.md items/lem-reversal-is-an-involution-and-reverses-concatenation.md items/def-alphabet-homomorphism-and-induced-word-map.md items/lem-induced-word-map-has-the-free-extension-property.md items/def-effective-binary-encoding-and-decoder.md items/lem-finite-tuples-admit-effective-prefix-free-encodings.md items/def-decision-search-and-function-problem.md items/def-instance-size-under-an-encoding.md items/prop-polynomially-related-encodings-preserve-polynomial-size.md items/fs-a-language-is-a-set-of-symbols.md items/fs-every-effective-encoding-is-prefix-free.md items/ex-language-concatenation-is-associative.md items/ex-polynomially-related-encodings-preserve-polynomial-size.md items/cex-a-language-is-a-set-of-symbols.md items/cex-an-effective-encoding-need-not-be-prefix-free.md`
  - pass: `13 checked, 0 failing — all clean`
- `node tools/content-policy.mjs research/frontier-23-batch-10.pages.json`
  - pass: `content-policy: 22 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json`
  - pass, ending with:
    `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 512 page(s) with item lists.`
    `NOTE: 781 planned page(s) carry no item list yet (marked * above). Their reading order is guaranteed; their item dependencies are not yet asserted, so re-run this after writing each page's items.`

Additional contract checks run on the output report:

- `node tools/proof-contract.mjs research/frontier-23-batch-10.proof-contracts.json --strict`
  - pass: `proof-contract: 0 error(s), 0 warning(s), 13/13 item(s) checked`
- `node tools/citation-fidelity.mjs research/frontier-23-batch-10.proof-contracts.json --fail-on-missing-quote`
  - pass: `QUOTE NOT FOUND — none; every recorded quote appears in its cited item.`
- `node tools/boundary-audit.mjs research/frontier-23-batch-10.proof-contracts.json --fail-on-contradicted --fail-on-template`
  - pass: `TEMPLATE REUSE — none at or above 3 members.` and `CONTRADICTED DISPOSITIONS — none found by the three detectors.`
