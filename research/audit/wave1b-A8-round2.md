# Wave 1b published-page audit — A8 round 2

Audit role: Audit-Alpha, GPT 5.6 Sol through the Codex subscription at `xhigh`.
Date: 2026-08-03. Scope: Wave 1b, A8 round 2 only.

## 1. Recovery and current-context reconstruction

Before adjudicating I recovered the durable Alpha record and read the current
disk state required by `briefs/audit-alpha.md`, `AUDIT-WORKFLOW.md` sections 7
and 9, `CLAUDE.md`, `research/audit/RESUME.md`, the prior A8 report, the
published-repair record, the four Wave 1 findings and proof-contract batches,
the Alpha/A3/A4 records, and the judge, adjudication, edge, touch, provenance,
generation-risk, and impact receipts. I did not trust the prior process's prose
in place of the ledgers.

I reconstructed the current verdict independently by retaining the last row for
each targeted item and model in `wave1b-judge-paired.jsonl`. The 24 repaired
items have 48/48 current lane verdicts: 14 pass both lanes and the following ten
have one current rejection. This exactly confirms the owner's supplied table.
The paired ledger has 396 rows in total; the targeted rejudge contributed the
last 48 rows against the verified repair contexts.

## 2. Per-item adjudications

No rejection below alleges a false claim. Nine identify a real citation-detail
defect that a competent reader closes in materially less than 30 seconds. Under
the binding threshold and section 9, those are `confirmed_nonfatal`: the defect
is recorded and the item is not churned. One is a missing theorem hypothesis and
is `confirmed_fatal`.

### `def-dense-top`

- Lane/context: `gpt-5.6-terra`,
  `c7a97ad97ec61db8369cd880beea307ddf8d57d0d8c3957386e5bdd6cbf35604`.
- Outcome: `confirmed_nonfatal`.
- Named defect: the nowhere-dense Remark invokes monotonicity of interior but
  does not cite the interior-identities lemma or give the one-line derivation.
- Threshold judgment: from (A\subseteq\overline A), every open subset of
  (A) is an open subset of (\overline A), hence
  (\operatorname{int}(A)\subseteq\operatorname{int}(\overline A)). This is a
  direct definition-level closure, well below 30 seconds. No repair.

### `fs-equivalent-metrics-share-cauchy-sequences`

- Lane/context: `gpt-5.6-terra`,
  `794c5ce71bd812c2fedd57dad4e6df53312046b31a285def81a8d7e679bb3453`.
- Outcome: `confirmed_nonfatal`.
- Named defect: `[L3]` attributes the union-of-balls characterisation to
  `def-metric-topology`, whose stated criterion is pointwise existence of a ball
  inside the open set.
- Threshold judgment: take the union of all balls contained in (U) and centred
  at points of (U); the pointwise criterion gives equality with (U).
  Step 2.1 itself uses only the cited pointwise criterion. This is below 30
  seconds. No repair.

### `lem-sequential-closure-inside-closure`

- Lane/context: `gpt-5.6-terra`,
  `06211449c4d0fc0aca215c558465e97112d512b838b49ffc602b44b04839ed41`.
- Outcome: `confirmed_nonfatal`.
- Named defect: step 1.4 uses the full neighbourhood definition, while `[L2]`
  records only its consequence that a neighbourhood contains its point.
- Threshold judgment: the declared and cited `def-neighbourhood-top` says
  verbatim, “A set (N \subseteq X) is a **neighbourhood of (x)** if there is
  an open (U \in \mathcal T) with (x \in U \subseteq N).” Opening that
  definition closes the step immediately. This is undercitation, but below 30
  seconds. No repair.

### `fs-sequentially-continuous-implies-continuous`

- Lane/context: `gpt-5.6-terra`,
  `e03a570f7addc6b687d2c877724cfa25a736384cc2aed811028cbd37d6461905`.
- Outcome: `confirmed_nonfatal`.
- Named defect: step 3.2 uses eventual membership in every neighbourhood from
  convergence, but `[A2]` records only sequential continuity even though it
  cites `def-sequence-convergence-top`.
- Threshold judgment: the cited definition says exactly that convergence means
  eventual membership in every neighbourhood. The step is a direct unfolding
  of the named definition and is below 30 seconds. No repair.

### `def-first-countable-top`

- Lane/context: `gpt-5.6-terra`,
  `1df0366f3413917cf9d9a0cae94df0ba5b87e9a0249f463f04b69e431cd6d894`.
- Outcome: `confirmed_nonfatal`.
- Named defect: the first Remark says that, under Countable Choice, sequential
  continuity and continuity agree in first-countable spaces, but links only the
  Fréchet--Urysohn/sequential hierarchy rather than
  `thm-first-countable-sequences-suffice`.
- Threshold judgment: this is an omitted pointer to the immediately relevant
  theorem, not a missing hypothesis or argument; the choice qualification is
  already explicit. A competent reader locates the named first-countable
  theorem in seconds. No repair.

### `ex-cocountable-topology-on-r`

- Lane/context: `gpt-5.6-terra`,
  `fe7b1b1474eaed9862dd8766f0b9a21a8a295c008dc1f74b7e96508cb716d9fb`.
- Outcome: `confirmed_nonfatal`.
- Named defect: the final Remark calls
  (\mathbb R\setminus\{0\}) uncountable, but its displayed citations give only
  uncountability of (\mathbb R) and closure of countability under subsets.
- Threshold judgment: if (\mathbb R\setminus\{0\}) were at most countable,
  adjoining the singleton would make
  (\mathbb R=(\mathbb R\setminus\{0\})\cup\{0\}) at most countable, a
  contradiction. Closure under adjoining one point is elementary and below 30
  seconds. No repair.

### `thm-first-countable-sequences-suffice`

- Lane/context: `gpt-5.6-terra`,
  `88b7fe0d33ae031c7cd4e7d41d907b3fee37f9e448451742ebb2bc04cf265d4b`.
- Outcome: `confirmed_nonfatal`.
- Named defect: step 2.1 says the recursive function has first coordinate (k)
  “by induction” but cites the recursion and neighbourhood facts rather than an
  induction theorem.
- Threshold judgment: the initial coordinate is (0), and the recurrence sends
  first coordinate (k) to (\sigma(k)). The asserted coordinate formula is
  the immediate induction on that recurrence, below 30 seconds. No repair.

### `ex-uncountable-cantor-cube-uniformizable-not-first-countable`

- Lane/context: `gpt-5.6-terra`,
  `171bfa996e29975eeb21b061eaefefa7a06769428345c13b9babb12048d49f61`.
- Outcome: `confirmed_nonfatal`.
- Named defect: `[L2]` abbreviates the finite-support shape of basic product
  opens, while step 1.2 also needs every neighbourhood of the zero point to
  contain such a basic cylinder.
- Threshold judgment: the cited `def-product-topology` says verbatim, “the
  finite intersections of members of (\mathcal G) form a basis for
  (\mathcal T^\Pi),” and identifies those intersections as boxes with only
  finitely many restricted coordinates. The required cylinder is an immediate
  application of that cited basis clause, below 30 seconds. No repair.

### `thm-fundamental-theorem-of-arithmetic`

- Lane/context: `gpt-5.6-terra`,
  `7f0739f3e39489b0671081908246fe5cc430d6527bf7b88f468ba820659de88d`.
- Outcome: `confirmed_nonfatal`.
- Named defect: steps 1.2 and 1.4 index (q_t) and (p_r) in lists of lengths
  (\sigma(t)) and (\sigma(r)), but omit `[L9]`, the Fact stating
  (n<\sigma(n)).
- Threshold judgment: the indices are valid immediately from
  (\sigma(n)=n\cup\{n\}) and `[L9]` is already present in the same Facts
  block. Locating it and checking both indices takes seconds. No repair.

### `ex-hamel-basis-of-r-over-q`

- Lane/context: `deepseek-v4-pro`,
  `ae4637d451416215b86a2721519d76d34342909d115f13644dbb6b08aba0f467`.
- Outcome: `confirmed_fatal`; `defect_type: dependency_citation`.
- Named defect: `[L5]` asserted uncountability for the Cauchy-sequence reals
  without establishing the completeness hypothesis of its cited theorem.
  `thm-r-uncountable` begins verbatim, “Let (\mathbb R) be a complete ordered
  field. Then (\mathbb R) is **uncountable**.” Before this round, the example
  established only the field and ordered-field structure. This is a real
  missing hypothesis, not a citation detail closable under the threshold.
- Repair: added `cor-cauchy-reals-lub-complete` and
  `def-complete-ordered-field` to `deps`; the Example, Given block, and `[L5]`
  now establish least-upper-bound completeness before invoking
  `thm-r-uncountable`. The supporting corollary states verbatim, “Hence,
  together with `thm-reals-ordered-field`, (\mathbb R_C) is a **complete
  ordered field**.” The namespaced linear-algebra proof contract and merged
  contract now quote and map the same hypothesis chain.

The ten rows were appended to
`research/audit/wave1b-judge-adjudications.jsonl` using the existing schema and
the rejecting contexts above. The complete ledger now has 108/108 unique exact
rejection keys and no duplicate key: 20 `confirmed_fatal`, 82
`confirmed_nonfatal`, and six `false_positive` outcomes.

## 3. Repair protocol, certification, and impact

The dedicated pre-edit touch snapshot was
`pre-A8-round2-ex-hamel-completeness`. The correction changed no id, deleted no
item, altered no page membership or reading order, and made no presentation
change. Existing `ai-altered` / `ai-generated` provenance remains unchanged.
The stale delegated `verification.verified` block was deleted before the
material edit; no stale `verification.judge` existed.

Independent certification was performed read-only by a separate GPT 5.6 Sol
reader at `xhigh`, `/root/hamel_certifier`. It certified the complete unstamped
item and its exact dependency chain at raw pre-stamp SHA-256
`93a89b18acfeaedbcfccd892ce182ab782aa2db971d21e223376ac47c11c3f15`.
Alpha independently recomputed the same hash before applying only the delegated
`verification.verified` stamp. The post-stamp raw SHA-256 is
`b89c7eed4ea43833c1288e7bc4bdde98bc4536d6309f619c68a15a51569ec399`.
No `verification.audited` or `verification.judge` field was written.

The public interface changed, so I reran the impact protocol. The explicit
consumer query found no logical consumers and two direct wikilink consumers:

- `ex-basis-of-the-eventually-zero-families` only compares the example as the
  non-explicit middle case whose basis comes from the Zorn argument. That claim
  is unchanged: `still-licensed`.
- `lem-hamel-basis-exists` compares its coefficient-map additions with the
  example's basis-existence and infinitude clauses. Those clauses are unchanged:
  `still-licensed`.

The example's home-page membership is unchanged. The page link from
`library/real-analysis/monotone-functions-and-discontinuities.md` explicitly
says its lemma is rebuilt rather than quoted from this leaf item, so it is not
load-bearing and remains licensed. The updated impact receipt passes for the
complete `pre-A4` to `final-A8-round2-prejudge` interval: 182 changed public
interfaces and 2,070 affected items, with both direct consumers specifically
redisposed for this repair.

The final snapshot is `final-A8-round2-prejudge`. The mechanical touch audit
reports this item as refuted twice and repaired four times, total six. It is
therefore in the orchestrator's personal-audit escalation set; I record that
escalation and do not claim to have discharged the orchestrator's role.

## 4. Exact targeted-rejudge handoff

Exactly one id needs paired rejudge:

    ex-hamel-basis-of-r-over-q

No other id needs rejudge. The nine `confirmed_nonfatal` items were not changed.
I did not run a judge command, create a verdict or targeted receipt, or apply a
judge stamp. The orchestrator must run the paired targeted rejudge against the
current text.

## 5. Convergence judgment

**No: the wave has not yet converged at the required evidence layer.** The
round-2 adjudication has converged mathematically to nine recorded subthreshold
findings and one independently certified repair, but that changed item still
needs both targeted judge lanes. If both lanes pass, this round has no remaining
content repair and the wave has converged; a new rejection would require another
adjudication round. The 30-second rule terminates the nine citation-detail
threads here rather than inviting unbounded citation churn.

## 6. Verbatim gate output

The complete gate-of-record transcript is
`research/audit/wave1b-A8-round2-terminal-gates.log`. Every named section exited
0. These are verbatim result lines from that transcript:

    unchanged items/ex-hamel-basis-of-r-over-q.md
    PASS items/ex-hamel-basis-of-r-over-q.md (direct)
    1 checked, 0 failing — all clean
    proof-contract: 0 error(s), 0 warning(s), 25/25 item(s) checked
    merge-proof-contracts: wrote research/audit/wave1b-proof-contracts.json with 142 scoped item(s) from 4 batch contract(s)
    proof-contract: 0 error(s), 0 warning(s), 142/142 item(s) checked
    risk-report: 0 error(s), 142 item(s) routed
    finite-smoke: 0 error(s), 0 check(s)
    content-policy: 174 scoped item(s), 0 error(s), 3 warning(s)
    genrisk receipt: 45 seed(s), 8 load-bearing
    impact-audit: 182 changed public interface(s), 2070 affected item(s)
    adjudications: 108/108 exact rejection rows; fatal 20; nonfatal 82; false-positive 6
    targeted current context: 48/48 lane verdicts; 14/24 pass both lanes; 10/24 carry one rejection
    current rejection ids: def-dense-top, def-first-countable-top, ex-cocountable-topology-on-r, ex-hamel-basis-of-r-over-q, ex-uncountable-cantor-cube-uniformizable-not-first-countable, fs-equivalent-metrics-share-cauchy-sequences, fs-sequentially-continuous-implies-continuous, lem-sequential-closure-inside-closure, thm-first-countable-sequences-suffice, thm-fundamental-theorem-of-arithmetic
    repair stamp: independent pre-stamp sha256 93a89b18acfeaedbcfccd892ce182ab782aa2db971d21e223376ac47c11c3f15 recorded; delegated verified stamp present; no audited or judge block
    edge receipt: sha256 202312f78856f028a1b973957f3e83cbf3970f64f123b85ff7173e6e485b0530; 2137/2137 rows; 2113 active; 24 retired
    30 item(s) with >= 2 repair(s)
    ESCALATION SET (refutations + repairs > 1): 94 item(s)
      ex-hamel-basis-of-r-over-q
          refuted 2x, repaired 4x, total 6
    OK — no cycles, all references resolve, no draft items on published pages.
    fwdcheck: 2767 items, 0 open forward reference(s), 341 closed, 25 load bearing
    OK — every forward reference is declared, points strictly forward, is closed by a planned later page, stays off the spine unless orientation only, and introduces no cycle.
    extcheck: 2767 items, 116 recorded-not-proved, 83 resting on them
    OK — every recorded-not-proved statement is a cited remark with no proof, and every consequence is marked.
    citecheck: 2767 item(s) scanned
    OK — 2947 file(s): no wikilink inside math, no nested or unbalanced
    delimiters, no multiline display block, and every math span parses under the
    real KaTeX.
    2947 file(s) checked. 0 error(s), 589 warning(s).
      library-scope-denial: 224
      count-in-prose: 191
      count-of-this-page: 174
    OK — no positional claim contradicts the spec.

The three content-policy warnings, the 22 citecheck heuristic warnings, the 83
external-material warnings, and the prose warnings are printed in full in the
transcript; their gates exit 0 and none is introduced by this repair. I do not
claim a targeted rejudge gate, because no rejudge was run in this session.

The format- and report-integrity checks run after writing this report returned
the following verbatim result lines; `git diff --check` produced no output and
exited 0:

    OK — 2947 file(s): no wikilink inside math, no nested or unbalanced
    delimiters, no multiline display block, and every math span parses under the
    real KaTeX.
    2947 file(s) checked. 0 error(s), 589 warning(s).
      library-scope-denial: 224
      count-in-prose: 191
      count-of-this-page: 174
    OK — no positional claim contradicts the spec.
    round2 report: 10/10 item sections; adjudication tail 10/10 unique rows; exact id sets match
    round2 stamp honesty: no audited or judge block on repaired item

## 7. Boundaries observed

I did not write `verification.audited`, rename or delete any id, alter frozen
presentation or reading order, run the targeted judges, publish, commit, push,
or release the owner's A10 pause. No permission escalation was requested.
