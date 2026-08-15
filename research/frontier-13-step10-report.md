# frontier-13 — Step 10 fatal-error report

**This is the owner pause.** Nothing in this run is `status: published`. All 467
items are `status: draft`, `origin: session`. Flipping status is the publish
action and is yours alone.

## What was built

| | |
|---|---|
| pairs | 11 A/B pairs across abstract algebra, linear algebra, number theory, combinatorics, category theory |
| items | **467** — 337 on A pages, 130 on B companions |
| pages | 22, all `draft` |
| judge verdicts | 978, **0 nulls**, both lanes current on every item |

| category | A page (each has an `-examples` companion) |
|---|---|
| abstract-algebra | `symmetric-polynomials` · `algebraic-extensions-degree-and-finite-fields` · `semidirect-products-and-automorphism-groups` · `tensor-products-of-modules` |
| number-theory | `primitive-roots-and-unit-groups-modulo-n` |
| linear-algebra | `diagonalisation-and-the-minimal-polynomial` · `inner-product-spaces-and-orthogonality` |
| combinatorics | `erdos-hajnal-property-and-homogeneous-sets` · `regular-pairs-and-induced-counting` · `linear-recurrences-and-rational-generating-functions` |
| category-theory | `adjunctions-units-and-counits` |

## Fatal defects, by defect type

Evidence: `research/frontier-13-judge-adjudications.jsonl` (25 `confirmed_fatal`
rows over 13 distinct items), the three `-6b.md` group reports (25), and
`-6c.md` (1). Roughly **50 confirmed fatal defects** were found and repaired
across steps 6 and 8.

### Incorrect dependency citation — the dominant class

Ten of 25 step-8 rows and the majority of step-6 findings. The shape is always
the same: the `[F#]`/`[L#]` restatement claims more than the cited item's
Statement says, and a numbered step then leans on the inflated version.

| item | defect | disposition |
|---|---|---|
| `thm-counting-lemma-for-a-fixed-graph` | `[L1]` claimed a *uniform* typical-degree bound over all large candidate sets; the lemma gives only *per-candidate* bounds | repaired to the faithful restatement |
| `thm-weighted-walks-are-entries-of-transfer-matrix-powers` | `[L3]` attributed $A^0=I$ to a matrix-laws theorem with **no such clause** — and no library item defines matrix powers | repaired |
| `thm-carmichael-function-formula` | Statement used `lcm` over an arbitrary finite list; `def-lcm` says **"Two arguments only"** in as many words | repaired |
| `prop-carmichael-function-as-maximal-order` | same `def-lcm` over-extension | repaired |
| `thm-matrix-of-the-adjoint-is-the-conjugate-transpose` | `[L2]` cites an item that does not state the fact | repaired |
| `thm-gram-determinant-detects-linear-independence` | `[L4]`/`[L7]` drop $n\ge1$ | repaired |
| `cor-orthogonal-and-unitary-operators-form-groups…` | `[L5]` cited domain enlarged | repaired |
| `thm-diagonalisable-iff-characteristic-polynomial-splits…` | `[L7]` cited domain enlarged | repaired |

### False or overstrong statement — in the title or Statement

The class the judges cannot see, because they read Statements and a false title
is invisible to them.

| item | defect | disposition |
|---|---|---|
| `thm-counting-lemma-for-a-fixed-graph` | **$G$ unbound** — used in the conclusion, introduced nowhere. A legal reading (edgeless $G$ on $V(G_0)$) makes the theorem **false** | $G$ bound after the constants, preserving quantifier order |
| `cor-symmetric-polynomial-values-on-roots-lie-in-the-base-field` | false uniqueness; and false over the zero ring. DeepSeek's counterexample verified: $R=\mathbb Z$, $S=\mathbb Z/2$, $f=1$, $P=0$, $Q=2$ | both clauses removed, $R\ne0$ carried |
| `rem-tower-and-wowzer-bounds-in-regularity` | **false** — induced removal needs only a *constant* regularity sequence, so the bound is tower, not wowzer | corrected |
| `ex-bounded-order-graph-classes-are-erdos-hajnal` | asserted the EH property of a class that need not be hereditary ($\{K_2\}$) | **hereditary** added to the title |
| `lem-typical-degrees-in-a-regular-pair` | title off by a factor of two; had already propagated into `thm-triangle-counting-lemma-for-regular-triples` | both repaired |
| `ex-gram-determinant-of-two-vectors` | title claimed a determinant–area relation the library nowhere establishes | narrowed |
| `cor-a-galois-connection-satisfies-fgf-equals-f…` | asserted *equality* while depending only on a **preorder**; Riehl requires posets | poset hypothesis stated |
| `cor-symmetric-polynomial-values…` (step 6) | false uniqueness in title *and* Statement, countermodel reproduced | uniqueness moved to the formal identity |

### Missing hypothesis or choice scope

| item | defect | disposition |
|---|---|---|
| `thm-counting-lemma-for-a-fixed-graph` | step 1.1 assumed $h\ge1$; $\gamma$ divides by $2h$, so $h=0$ **divides by zero** | closed inline rather than narrowing — both consumers admit $h=0$ and narrowing would have exported the hole |
| `lem-leading-multidegrees…` | missing nonzero-ring hypothesis (`def-ring` admits the zero ring) | added; consumers verified unaffected |
| `cor-every-graph-on-at-most-three-vertices…` | asserted the EH property without citing its own defining lemma | `lem-forbidden-induced-subgraph-classes-are-hereditary` cited |

### Invalid inference

| item | defect | disposition |
|---|---|---|
| `thm-counting-lemma-for-a-fixed-graph` | exceptional sets bounded by a fraction of the **candidate** set where the cited lemma bounds by the **host** set — the derived constant did not follow | bookkeeping rewritten; Statement unchanged |
| `thm-szemeredi-regularity-lemma-with-tower-bound` | a step ending mid-sentence at "`[L2] gives`", the per-round increment printed *after* the step citing it and citing a *future* step, equitisation energy-loss estimate absent | proof rewritten; **the Statement's recurrence changed** from $\lceil\varepsilon^{-5}m_r2^{m_r+2}\rceil$ to $m_r\lceil\varepsilon^{-5}2^{m_r+5}\rceil$ because the honest estimate does not support the old constant |
| `thm-induced-graph-removal-lemma`, `cor-regularity-refining-a-given-partition`, `thm-strong-regularity-lemma-by-energy-stabilisation` | missing arguments written out | repaired |

## Three items repaired more than once — the twice-touched escalation

`thm-counting-lemma-for-a-fixed-graph` took **three rounds and three genuinely
distinct defects**, each surfacing only after the previous cleared: the
candidate/host estimate, then $h=0$, then unbound $G$. Both lanes now keep it.
My reading is that it converged rather than being false — the defects got smaller
and more local — but it is the page's weakest item and worth your eye.

`cor-symmetric-polynomial-values-on-roots-lie-in-the-base-field` took two rounds
and is now clean on both lanes.

## Findings about the machinery, not the mathematics

These outlive this run and I would not want them lost in the detail.

1. **The `boundaries` contract row is largely template boilerplate.** 2,169 of
   3,144 rows are `not_applicable`, and the most-repeated text recurs 124 times
   with only the id substituted. **Two of those false rows each concealed a fatal
   defect** — the $h=0$ division by zero and the $n=0$ counterexample —
   and `regen-contract-entries.mjs` re-emits them verbatim after a repair.
   `proof-contract --strict` checks the eight dispositions are *present*, never
   *true*.

2. **A dead source URL passed every gate.** Kim's UCL notes returned 404 while
   carrying **47 of 114 harvested rows and 15 items outright** on one batch.
   Fixed structurally: `url-sweep.mjs` is now a gate at steps 2 and 6 with
   `--recover --fail-on-dead` (commit `1262d7ad`), and it recovers from the
   Wayback index under host variants because the citation's own hostname returns
   nothing.

3. **Seven refuter dispatches produced prompts and no results** while a report
   tabled all eleven as dispatched, leaving **74 `risk_review` dispositions
   silently unwritten** until step 6c counted them. Fixed structurally:
   `run-supervisor.mjs` counts only `ok:true` results (commit `b94c2b17`).

4. **52 of 68 deferrals named no destination page** — prose only, which is
   indistinguishable from a silent drop. All now name a licensing page id.

5. **Two declines rested on false claims** and were overturned at step 9: the Q₈
   witness (claimed the quaternion page was outside the closure; `def-quaternions`
   is published *inside* it) and the floor/ceiling adjoint triple (claimed no real
   floor definition exists; `lem-integer-part` is published and in closure). Four
   items were built as a result.

## Verification state

```
precheck    3649 checked, 0 failing        depcheck     exit 0
fwdcheck    exit 0                         extcheck     exit 0
rendercheck exit 0                         prosecheck   OK
content-policy   463 scoped, 0 errors      coverage     988 results, 0 errors
proof-contract --strict   393/393          finite-smoke 16 checks
risk-report --require-reviewed  390 routed, 225 risk_review dispositions
url-sweep   36/36 live                     impact-audit 0 changed interfaces
step8-guard clean against all three baselines
```

**`impact-audit` caveat:** its baseline was taken *after* authoring, so its diff
cannot prove anything. The conclusion is independently true — `git status` shows
**0 modified files** under `items/` or `library/`, so no published item was
touched and no public interface changed. Take the snapshot at step 4 next time.

**`finite-smoke` caveat:** it reported "0 errors, 0 checks" for most of this run —
a green gate checking nothing, because the registry held only graph, poset and
cyclic-subgroup checks and a contract can reference but not define one. Four
checks were added and it now runs 16. The coverage is still thin.

## What I recommend before you publish

1. Read `thm-counting-lemma-for-a-fixed-graph` and
   `thm-szemeredi-regularity-lemma-with-tower-bound` yourself. Both are on the
   regularity page, both were repaired more than once, and the second had its
   Statement's bound changed.
2. Spot-check any two `boundaries` rows marked `not_applicable`. If the template
   text is false on them too, the finding above is broader than two items.
3. Everything else I would publish.
