# Step 5A Alpha group g — authored-content review (batch 12)

Run: `phase-2-next-20`. Dispatch `5a-g` (role alpha, brief `briefs/alpha-step5.md`,
task `briefs/tasks/alpha-5a-direct.md`). Group `g` covers batch 12 only, pair
`effective-numberings-reductions-resources-and-randomness` /
`effective-numberings-reductions-resources-and-randomness-examples`
(orders 612.2 / 612.4), 22 items (19 A, 3 B) and both pages.

## Method and scope

Read on the post-splice authored state: the v3 scope-12 file, the batch-12
manifest, both page files, all 22 item files, the batch proof contract, and every
declared dependency needed to check an inference. Reviewed the authored
mathematics (statements, numbered steps, cited facts, boundary cases), not the
Step 3 scaffold checklist, and did not repeat the Step 3 scope or source-inventory
audit. Prior Step-1 source holds and the two published prerequisite audits already
on disk were reused, not re-run. No item or page was repaired: every assigned
obligation is a sound acceptance, and a sound acceptance needs no defect row.

For the 16 HIGH/CRITICAL items identified by `tools/risk-report.mjs`, a specific
complete `risk_review` was recorded in `research/phase-2-next-20-batch-12.proof-contracts.json`
during this same read (the other six are moderate/ordinary and need none).

Decisions: `research/phase-2-next-20-alpha-g-5a-decisions.json`, 24 obligations
(22 `authored:12:<item>` + 2 `authored:12:<page>`), all `accepted` with empty
`defect_ids`. The engine's own `check --phase adjudicate --batch 12` reports
"22 item(s) routed, 24 adjudication obligation(s), 0 error(s)".

## Per-item result

- `def-uniform-asymptotic-time-space-comparison` — accepted. O/o quantifiers,
  zero-of-g convention, O_M uniformity, transition-count time, visited-cell space
  as a per-tape initial segment, n+1 guard, finite worst-case maximum, separate
  read-only-input label. No AC.
- `def-machine-time-and-space-constructibility` — accepted. Unary input including
  1^0, constructor emits `bin(t(n))` within `Ct(n)` after reading the input,
  visited-cell space condition, exact-clock constructibility as a separate
  stronger interface, external-clock charging. Consistent with the cited
  Arora–Barak Remark 1.5 convention plus the stated n+1 guard.
- `thm-clocked-universal-simulation-with-time-and-space-bounds` — accepted.
  Compared with Arora–Barak Appendix 1.A and re-derived the reset invariant:
  a level-at-least-i event needs H_i+1 = 2^i transitions since the previous
  reset (higher resets included), hence at most floor(b/2^i) level-i events at
  O_M(2^i) each, giving O_M(b log(b+2)) time; b=0/1, origin-bit clamp, lazy
  archive allocation, saturated malformed-header check, two-step left/right-only
  compilation and the separate O_M(n+S+log(b+2)) configuration-scanning space
  bound all checked. Residual sketch-level implementation risk recorded in the
  contract `risk_review`; no incorrect inference found.
- `def-primitive-recursive-functions-by-initial-functions-and-schemes` —
  accepted. Standard schemes with nullary constants, composition r=0, primitive
  recursion k=0; totality and uniqueness via `thm-recursion` on the total state
  map. No AC.
- `lem-fixed-coding-primitive-recursive-arithmetic-and-sequences` — accepted.
  Every recursion is a scheme instance; recomputed the bounded least-witness
  formula; verified the cons code is a bijection onto positive integers, the
  tail-decreasing length identity, coordinate/append/concatenation folds and the
  empty/singleton cases.
- `def-kleene-computation-predicate-and-output-map` — accepted. Length-lex index
  decoding, prefix-free tuple code, letters 1/2 for bits with s>=2, canonical
  configuration list checked against the published configuration and one-step
  items, maximal-bit-prefix output convention (empty output invalid; single-bit 0
  is zero), malformed-program convention; PR-ness deferred, not assumed.
- `lem-fixed-machine-history-predicate-is-primitive-recursive` — accepted. All
  required tests PR, including the exact adjacent-step test (untrimmed blanks and
  spurious nonblank cells excluded); determinism gives output uniqueness on all
  witnesses; genuine finite runs encode; empty/singleton histories rejected.
- `thm-kleene-normal-form-for-the-fixed-machine-coding` — accepted. Normal form
  from total PR T_k plus witness uniqueness; strict composition, strict primitive
  recursion (exactly y h-calls, base y=0, divergence propagation) and strict
  minimization (no dovetailing past an undefined value) compiled to finite
  programs; domains including the empty domain agree.
- `def-computable-many-one-reducibility-interface` — accepted. Direction,
  totality, reflexivity, transitivity (numeric/oracle/string), one-transition
  query convention, and the restricted canonical-input bridge with its explicit
  non-claim for unrestricted numeral-image languages.
- `def-oracle-turing-reducibility-interface` — accepted. Query instruction model,
  X-computability and X-c.e. definitions, total decider for <=_T, many-one implies
  Turing, transitivity with total subcalls and the explicit refusal to use a
  recognizer at a negative query.
- `def-acceptable-numbering-with-universal-evaluation` — accepted. Composition
  formulation of acceptability, universal evaluator, total code generation with
  the `2^{|w|}-1+val(w)` index, exact domain/value agreement with divergence
  propagation, explicit arity convention.
- `thm-smn-for-the-fixed-acceptable-numbering` — accepted. Generated prepend
  program with arity header 1^{m+n}0, total code generation, equality of domains
  and values including zero parameters and malformed e, m=n=1 case.
- `thm-kleene-fixed-point-theorem-for-program-indices` — accepted.
  q computes H(z,y)=phi_{F(s(z,z))}(y), e=s(q,q), specialization gives
  phi_e=phi_{F(e)} with simultaneous domains; effective index transformation.
- `def-polynomial-time-verifier-and-reduction-interface` — accepted. All-input
  polynomial time, guarded verifier language, 1^{|x|}0xw pair encoding,
  polynomial reductions, output-extent bound, composed polynomial, optional
  fixed-length certificate of 2P+1 bits (P=0 single 0).
- `def-probabilistic-polynomial-time-machine-interface` — accepted. Two total
  tables with fresh fair bits, all-branch polynomial bound, finite space
  {0,1}^{p(n)} with prefix mass 2^{-j}, simulator/branch agreement including
  input-dependent stopping, p(n)=0 boundary.
- `def-rp-corp-zpp-bpp-and-pp-classes` — accepted. RP/coRP/BPP thresholds and
  strict PP majority, survival-sum expected time, q_K<=E T/K by Markov, 2p(n)
  truncation bound 1/2, fresh-block restart cost <=2P(n), both directions of
  ZPP = RP ∩ coRP; empty/full languages and empty input checked.
- `def-pairwise-independent-hash-family-interface` — accepted. Count form of
  pairwise independence, uniform marginals, unique seed per ordered output pair
  at distinct inputs, zero slopes included, collision bounds explicitly not the
  definition.
- `lem-chernoff-bound-for-independent-bernoulli-trials` — accepted. Recomputed
  all estimates: 1+u<=exp(u); E exp(lambda S)<=exp(mu(e^lambda-1)); both
  multiplicative tails and their delta^2/3, delta^2/2 rate inequalities (by
  derivative estimates); delta=1 via prod(1-p_i)<=e^{-mu}; mu=0, N=0, delta=0;
  additive Hoeffding bound via g''=q(1-q)<=1/4 with Markov at lambda=4t/N and
  the union bound. Mutual (not pairwise) independence required.
- `thm-schwartz-zippel-over-finite-fields` — accepted. Integral-domain base,
  coefficient decomposition with deg g_r<=d-r, bad-base count, per-specialization
  root bound, count d q^{m-1}; d>=q endpoint, d=0, r=0, |A|=1 checked. The
  nonempty-subset strengthening of Arora–Barak Lemma A.25 is supplied locally.
- `ex-smn-specializes-a-two-argument-index` — accepted. Index formula, compiled
  addition loop invariant, both tuple encodings `110 11011 100` and
  `110 11011 1110100`, outputs 11 and 111; no invented decimal index.
- `ex-pairwise-independent-affine-hashing-over-a-prime-field` — accepted.
  Primality of 5 and F_5 = Z/5, inverse table, unique seed (1,1) for
  (1,3)->(2,4), general seed formula, 25-seed count, three-wise failure via
  h(2)=2h(1)-h(0).
- `ex-schwartz-zippel-for-a-bivariate-polynomial` — accepted. Field declared and
  checked, four inverse pairs, 4/25 < 2/5, comparison as an upper bound.
- `effective-numberings-reductions-resources-and-randomness` (page) — accepted.
  Prose agrees with the 19 listed items; frontmatter item list matches the
  manifest order exactly; no claim exceeds the inventory.
- `effective-numberings-reductions-resources-and-randomness-examples` (page) —
  accepted. Prose agrees with the three examples and the manifest order; the
  examples' placement under `items:` is legal per SCHEMA.md section 4 (lists
  control display placement, not item kind).

## Edits made

No item, page, manifest, provenance, dependency, order or plan edit was needed:
the authored mathematics is sound as written. The only edit is the addition of
the 16 required `risk_review` records to the batch-12 proof contract. Page item
order and plan-spec `items`/`deps` already agree with the manifest and item
frontmatter (verified mechanically).

## Source evidence read for this review

- Arora–Barak, `https://theory.cs.princeton.edu/complexity/book.pdf`, downloaded
  during this review: 4,572,986 bytes, SHA-256 prefix `da0881782a35bde6`,
  matching the recorded receipt. Read Appendix 1.A printed pp.35–38 (PDF
  pp.51–54) through the final shifted-zone count; checked Remark 1.5 (time
  constructibility), Definition 7.1 (BPTIME/BPP), and Appendix A Lemma A.25
  (PDF p.474, printed p.459, proof continuing on PDF p.475).
- Gallier, cited URL `https://www.cis.upenn.edu/~cis5110/notes/tcbook-comp.pdf`,
  downloaded: the s-m-n theorem is Theorem 5.1 (printed p.152) stated through the
  composition function `Con`, matching this batch's acceptability formulation;
  §1.7 is the primitive-recursion section. The items' locators name the cis2620
  recovery edition while the URL is the cis5110 edition; the coverage record
  keeps the editions distinct, so no locator was silently interchanged, and the
  Gallier backing is recorded as dropped in favour of the authored alternatives.
- Aspnes, `https://cs.yale.edu/homes/aspnes/classes/469/notes.pdf`, downloaded:
  §§5.2.1–5.2.4 are the concentration-bound sections. The Chernoff proof was
  verified self-containedly; the Aspnes backing is recorded as dropped.
- Reused, not repeated: `research/phase-2-next-20-published-machine-interpreter-prerequisite-audit.md`
  and `research/phase-2-next-20-published-chernoff-prerequisite-audit.md`
  (already in the canonical ledger), which clear the published machine and
  probability prerequisites used here.

## Local suppliers

None added. The two Step-1 local lemmas
(`lem-fixed-coding-primitive-recursive-arithmetic-and-sequences`,
`lem-fixed-machine-history-predicate-is-primitive-recursive`) are retained,
fully authored, declared in the manifest, contract and plan, and ordered before
their consumers on the A page.

## Required shared-plan amendments

None. `research/plan-spec.json` orders 612.2/612.4 already carry 19 and 3 items
whose `deps` match the item frontmatter exactly; the A page's six `requires`
pages resolve; the batch cross-batch input is `[]` and the frontier refresh is
current. Non-blocking notes for the serial lead:

1. The `-examples` page lists its three examples under `items:` rather than
   `examples:`. SCHEMA.md section 4 makes this legal (display placement only) and
   all tools concatenate both lists; flag only if the renderer's example
   grouping is intended to be uniform.
2. The Gallier source locators name the cis2620 recovery edition while the
   linked URL is cis5110. Already recorded in the Step-1 coverage; keep the
   editions distinct rather than rewriting one locator set into the other.

## Published findings

1. `def-efficient-universal-simulation-with-clock` (page
   `time-and-space-hierarchy-theorems`) — existing A-P finding, unchanged in
   substance. Its single fixed simulator asserts both the time and the space
   estimate with no supplied joint proof. The exact Phase-3 supplier
   `thm-clocked-universal-simulation-with-time-and-space-bounds` now exists on
   A612.2 as an authored, 5A-accepted draft with two separate simulators, but it
   is not published, so the published consumer still requires the Phase-3 split
   onto U_time/U_space. A newly available supplier does not repair a published
   proof. The ledger entry was updated with this supplier state under the ledger
   lock.
2. `thm-algebra-of-derivatives` (page `the-derivative-and-mean-value-theorems`) —
   existing A-P alias collision: its alias `thm-product-rule` is the exact ID of
   the published finite-cardinality product theorem. The batch-12 Chernoff item
   names the canonical ID and is not affected; already recorded by the
   published Chernoff prerequisite audit.
3. `def-turing-machine-configuration` — candidate only, not a confirmed defect
   and no ledger class change. Its configuration *word* over Q ∪ Γ is not
   injective when the numeric state and tape alphabets overlap (q=0,h=0,(1,1)
   and q=1,h=1,(0,1) can produce the same word), but the item does not claim an
   injective encoding, and the only published consumer that decodes a
   configuration (`prop-valid-computation-histories-are-decidable`) does so
   through a disjoint tagged alphabet. Reported for the serial owner; the
   machine-interface audit's bounded-clear note on the triple definition is not
   contradicted.

## Checks actually run

| Check | Exit | Result |
|---|---:|---|
| `step5-scope.mjs check --run phase-2-next-20 --batch 12 --phase adjudicate` | 0 | 22 items routed, 24 obligations, 0 errors |
| `step5-scope.mjs check-escalations --run phase-2-next-20` | 0 | No owner escalations in any current 5a decisions file |
| `risk-report.mjs research/phase-2-next-20-batch-12.proof-contracts.json --require-reviewed` | 0 | 0 errors, 22 items routed (16 reviews now present) |
| `proof-contract.mjs ... --strict` | 0 | 0 errors, 0 warnings, 22/22 items checked |
| `boundary-audit.mjs ... --fail-on-contradicted --fail-on-template` | 0 | No contradicted or template rows |
| `citation-fidelity.mjs ... --fail-on-missing-quote` | 0 | Every recorded quote appears in its cited item |
| `finite-smoke.mjs ...` | 0 | 0 errors; no finite obligations in this batch |
| `content-policy.mjs research/phase-2-next-20-batch-12.pages.json` | 0 | 22 scoped items, 0 errors, 0 warnings |
| `manifest-deps.mjs research/phase-2-next-20-batch-12.pages.json` | 0 | 22 items, 0 errors |
| `coverage-checklist.mjs research/phase-2-next-20-batch-12.coverage.json` | 0 | 1 page, 16 harvested rows, 0 errors |
| `depcheck.mjs` (repo-wide) | 0 | No cycles; all references resolve; no draft items on published pages |
| `tsx-run tools/precheck.mts` (repo-wide) | 0 | 13630 checked, 0 failing |
| `rendercheck.mjs` (repo-wide) | 0 | 18195 files: KaTeX and YAML clean |
| `extcheck.mjs`, `fwdcheck.mjs --quiet`, `depsource.mjs`, `prosecheck.mjs`, `pathcheck.mjs` | 0 | No hard errors; warnings only, none on this batch |
| `splice-plan.mjs --run phase-2-next-20 --verify` | 0 | 44 pages across 15 manifests; plan and manifests agree |
| `defect-ledger.mjs validate --run phase-2-next-20` | 0 | 7 rows checked, 0 errors |
| Plan/manifest/page agreement for 612.2/612.4 | 0 | Item order and deps match on all 22 items and both pages |

## Blockers

None for group g. All 24 obligations are accepted; the group contributes no
escalation and no open defect. Two non-blocking residuals are recorded above and
in the contract `risk_review`s: the clocked-simulation theorem's fixed
finite-state realization is argued at the source's sketch level (no incorrect
inference found), and the operator-held source-harvest dispositions for this
batch remain separate from this mathematical review.
