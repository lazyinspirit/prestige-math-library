# Wave 14 published-item repair ledger

Reviewer: Audit-Alpha (GPT 5.6 Sol xhigh/1M, owner-delegated), Wave 14 A6.

The exact baseline is `442f831c94882899c1dc5559b36599b0f78a99c8`.
Pure provenance retags are excluded. These are the only ten item ids whose
mathematical, citation, dependency, source, or source-provenance text changed
in Wave 14 A4/A6, and therefore the exact A7 targets.

## A4 material repairs

### `cor-exponential-reciprocal-and-positivity`

Class: dependency precision.

- The old dependency pair did not export the exact strict positivity fact used
  for a nonzero square.
- A4 replaced it with `lem-of-square-positive`, which exactly licenses the
  proof's positivity step.
- Exact-final Terra result: `CERTIFIED`; DeepSeek routing was not structurally
  required because the risk tier is ordinary.

### `ex-exponential-product-limit-at-negative-input`

Class: dependency precision.

- The old metadata did not license the identification
  `exp(-2)=e^{-2}`.
- A4 added the exponential definition, addition formula, and integer-power
  definition used by that identification.
- Exact-final evidence: Terra `CERTIFIED`; DeepSeek `CLEAN`.

### `lem-exponential-series-has-infinite-radius`

Class: dependency precision.

- The embedded factorial ratio uses positivity and nonzeroness of canonical
  naturals.
- A4 added `lem-of-naturals-positive`, the exact missing license.
- Exact-final evidence: Terra `CERTIFIED`; DeepSeek `CLEAN`.

### `thm-e-is-irrational`

Class: proof correctness and dependency precision.

- The old presentation used the integer-scaled tail before it was defined and
  stated an insufficiently precise tail estimate.
- A4 reordered the contradiction, corrected the tail bound, added canonical-
  natural positivity, and normalized the affected phase labels to
  2.1/3.1/4.1.
- Exact-final evidence: Terra `CERTIFIED`; DeepSeek `CLEAN`.

### `thm-normalized-exponential-functional-equation`

Class: dependency precision.

- Both uniqueness arguments also require existence of the normalized
  exponential solution.
- A4 added the exponential definition and derivative theorem that license the
  existence halves.
- Exact-final evidence: Terra `CERTIFIED`; DeepSeek `CLEAN`.

## A6 source-only corrections

These five corrections do not alter mathematics, titles, bodies, dependency
contracts, or provenance classifications. Each removes a redundant HTTP-403
source after Alpha verified that a retained live source exactly supports the
claim. The original host liveness receipt and the later sandbox-DNS attempt are
preserved append-only.

### `cex-exponential-not-uniformly-continuous-on-r`

- Removed the redundant Keisler PDF URL.
- Corrected the rationale to attribute the explicit non-uniform-continuity
  statement singularly to the retained live UTSA note.
- Exact-final evidence: Terra `CERTIFIED`; DeepSeek `CLEAN`.

### `cor-exponential-is-a-bijection-onto-positive-reals`

- Removed the redundant TAMU second-edition URL.
- Retained Lebl's live exact support for the range/bijection statement.
- Exact-final evidence: Terra `CERTIFIED`; DeepSeek `CLEAN`.

### `thm-exponential-is-strictly-increasing`

- Removed the redundant Keisler PDF URL.
- Retained Lebl's live exact support.
- Exact-final evidence: Terra `CERTIFIED`; DeepSeek `CLEAN`.

### `thm-exponential-limits-and-range`

- Removed the redundant TAMU second-edition URL.
- Corrected the rationale to the singular retained Lebl source.
- Exact-final evidence: Terra `CERTIFIED`; DeepSeek `CLEAN`.

### `thm-exponential-product-limit`

- Removed the redundant Keisler PDF URL.
- Retained Lebl Exercise 5.4.5 as live exact support.
- Exact-final evidence: Terra `CERTIFIED`; DeepSeek `CLEAN`.

All ten exact-current Terra certifications were returned before their
owner-delegated `verification.verified` stamps were written. The 22 first-pass
DeepSeek and ten first-pass Terra transport-null files remain preserved as
non-verdict attempts; the corresponding host `a6r2` files are the final
evidence. No page or Wave 11–13 item was repaired.

## A8 confirmed-fatal repairs

Reviewer: Audit-Alpha (GPT 5.6 Sol xhigh/1M, owner-delegated), Wave 14 A8.

### `ex-exponential-product-limit-at-negative-input`

Class: false/ill-defined published statement; missing exact dependency citation.

- Old text: `a_n=(1-2/iota(n))^n` was asserted for every `n in N`, but `iota(0)=0`, so the claimed sequence was undefined at its first index.
- New text: `a_0:=0` and `a_n=(1-2/iota(n))^n` for `n>=1`; the proof works on `n>2` and invokes `lem-limit-of-tail` for the full sequence.
- Elementary/source derivation: `def-canonical-natural` makes the original division-by-zero exact; `thm-exponential-product-limit` and `lem-limit-of-tail` prove the repaired convergence.
- Provenance transition: none; statement and proof remain honestly `ai-generated`.
- Independent certifier: GPT 5.6 Terra `CERTIFIED / FINDINGS: NONE` at `8829d15a4f637c1c7d421a770db48d6aecec84f10a70120ca4f9b8b1a1912d8f`.
- Impact: no consumers; receipt `research/audit/wave14-A8-impact-review.json`.

### `thm-e-is-irrational`

Class: invalid/unlicensed load-bearing inference and missing dependency citations.

- Old text: step 3.1 asserted `q|n!`, `k!|n!`, and that the scaled tail was an embedded integer without typed divisibility witnesses or an exact embedding chain.
- New text: the binomial closed formula supplies `k!|n!` and `q!|n!`; factorial recurrence supplies `q|q!`; exact N-to-Z-to-Q-to-R embeddings turn the witnesses into real equalities, and integer-ring closure licenses the final finite difference.
- Elementary/source derivation: the complete exact targets named in the refreshed proof contract state each divisibility, embedding, arithmetic, order, and closure fact used.
- Provenance transition: proof `literature-derived -> ai-altered`; the theorem Statement remains `literature-derived` with exact-source evidence.
- Independent certifier: GPT 5.6 Terra `CERTIFIED / FINDINGS: NONE` at `8ea24c102b30f21259e235b2839c2ed7ee5c73384f714b01ca0bdbd13dbc75ea`.
- Impact: `rem-exponential-roadmap-and-circularity` read in full and still licensed; receipt `research/audit/wave14-A8-impact-review.json`.

Only these two A8 ids changed. The other seven rejection rows were adjudicated nonfatal or false positive and caused no item, page, frontmatter, contract, provenance, impact, stamp, or rejudge mutation.

## A8 exact targeted rejudge closure

The orchestrator rejudged only the two A8-repaired ids. `ex-exponential-product-limit-at-negative-input` returned DeepSeek/Terra keep/keep at context `c6fbe5bd...` and received the sole pass-only judge stamp. `thm-e-is-irrational` returned DeepSeek keep and Terra reject at context `25881e78...`; Alpha adjudicated the discreteness objection false positive from the exact ordered-embedding chain. The theorem remains unchanged and honestly unstamped. Coverage closes 10/10 target pairs, 25 items, 23 proofs, and 178 relationships with zero errors.

## A9 final render-gate repair

### `ex-exponential-product-limit-at-negative-input`

Class: renderer-safe mathematical source formatting; no semantic change.

- Old source: the single displayed sequence definition contained a hard line
  break between `\qquad` and `a_n:=...` inside one `$$...$$` block.
- New source: the identical formula is on one source line, as required by
  `tools/rendercheck.mjs`; the rendered formula, statement, proof,
  dependencies, and contract are byte-for-byte unchanged apart from that
  whitespace.
- Provenance transition: none; statement and proof remain `ai-generated`.
- Independent certifier: GPT 5.6 Terra `CERTIFIED / FINDINGS: NONE` at
  normalized hash
  `9d72aaa4e7848e6ed95a587788aa20e5f215cae642f3b96c5673a3da54cba736`.
- Exact-current targeted rejudge: DeepSeek keep and Terra keep at context
  `1b09d929df31280d6a9428c9a6b6dc8c4f76f94460fdf974b3fa9ec2658c62d5`;
  the pass-only targeted judge stamp was refreshed.
- Impact: one mechanically changed interface, zero logical consumers, zero
  direct-citation consumers (`wave14-A9-impact-review.json`).
- Personal repeat-touch audit: this is the item's third mechanical repair. The
  fault is renderer-only, not mathematical; dropping the repair would leave a
  published display that the repository renderer rejects. The orchestrator
  reread the complete item and retained the result.

No unchanged item was rejudged for this A9 repair.
