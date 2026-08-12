# frontier-11 — Alpha step 8, round 2

Alpha (Claude Opus 5, `xhigh`, 1M window). Adjudication of the two items still
split after the step-8 rejudge: Terra rejects, DeepSeek passes, on the repaired
text.

**Outcome: one `confirmed_fatal` (repaired), one `confirmed_nonfatal` (untouched).**
The level does **not** close with both Terra rejections standing — one of them was
a real defect.

Both items were adjudicated against the current disk text, and I verified that is
the text Terra actually judged: recomputing the judge-side normalization on disk
reproduces the exact hashes in the rejection rows (`d76f377c3a9f`,
`05bca753decd`). Nothing had drifted between the rejudge and this adjudication.

---

## 1. `thm-rectifiable-iff-coordinate-functions-have-bounded-variation` — `confirmed_nonfatal`

Terra: *"Step 1.2 invokes Var(gamma_j) before assuming or proving that gamma_j has
bounded variation. The cited definition defines total variation only in that case,
so its final inequality is not well-formed for arbitrary gamma."*

**Terra's premise is factually correct.** `items/def-bounded-variation-and-total-variation.md`
lines 40–44 read: "The function $f$ has **bounded variation** on $[a,b]$ when this
set of sums is bounded above. **In that case** its **total variation** is
$\operatorname{Var}_{[a,b]}(f):=\sup_P V(f,P)$." The library does not define
$\operatorname{Var}$ as an element of $[0,\infty]$ for arbitrary $f$. So the
trailing term of step 1.2 is, read in isolation, a symbol outside its domain of
definition.

**It is nonetheless nonfatal, because nothing in the proof uses it outside that
domain.** The evidence is structural:

- Step 1.2's chain is `ℓ_P(γ) ≤ Σ_j V(γ_j,P) ≤ Σ_j Var(γ_j)`. Its **unconditional**
  half — `ℓ_P(γ) ≤ Σ_j V(γ_j,P)` — is well-formed and true for every path, and that
  is the only half any unconditional step needs.
- The trailing term is consumed **only** by step 2.2, whose stated hypothesis is
  "If every coordinate has bounded variation". Under that hypothesis
  $\operatorname{Var}(\gamma_j)$ is defined by the cited definition, and
  $V(\gamma_j,P)\le\operatorname{Var}(\gamma_j)$ is immediate from the supremum.
- Step 2.2's own wording scopes it explicitly: it says "the **final real number**
  in step 1.2", a phrase that is true precisely under 2.2's hypothesis. The text
  already signals the conditionality rather than concealing it.
- Steps 2.1 and 3.1 do not touch the trailing term. Step 2.1 derives bounded
  variation before naming $\operatorname{Var}$; step 3.1 uses only the singleton
  conventions.

Against the fatal checklist: no false claim, no unlicensed inference, no missing
hypothesis in the Statement, no inaccurate citation. `[L2]` is a faithful
shortening of the definition — it omits the boundedness proviso but asserts
nothing false, and the licensing dependency is correctly declared in `deps` and
cited in the fact. The Statement itself is the standard theorem and is correct,
including the $a=b$ degenerate case.

A competent reader closes this by reading one step further. **30-second rule:
nonfatal.** Under R1, closed with **no content, frontmatter, contract, impact or
judge mutation** — the file is byte-identical to the text Terra judged.

Tightening `[L2]` to carry the proviso would be legitimate *step-6* polish. It is
exactly the edit R1 forbids at step 8, so it was not made.

## 2. `thm-extremal-graph-supersaturation` — `confirmed_fatal` (`dependency_citation`)

Terra: *"Step 2.1 concludes that more than ex(m,H) edges forces a copy of H, but it
cites only step 1.1 and given. This needs the definition of the extremal number;
no listed fact or dependency states it."*

**Confirmed, and it is a genuine hole in the artifact, not a reading gap.** The
disk evidence:

- Step 2.1's bracket was `[step 1.1, given]`. **Neither source carries the
  licence.** Step 1.1 nowhere says what $\operatorname{ex}$ means. "Given" is "the
  hypotheses and notation of the statement above", and the Statement never
  mentions $\operatorname{ex}(m,H)$ at all — only $\pi(H)$, $e(G)$, $\binom n2$.
- The facts were `[F1]` Turán-density convergence, `[F2]` double counting, `[F3]`
  binomial coefficients. None states the definition of the extremal number.
- `deps` was `[thm-turan-density-exists, thm-double-counting, def-binomial-coefficient]`
  — it **omitted `def-extremal-number-turan-graph-and-blowup`**, the item that
  defines $\operatorname{ex}(n,H)$, and which sits as item **#1 on this very A
  page** (supersaturation is #10).

What makes this fatal rather than a 30-second gap is that **the page's own
convention treats this exact inference as requiring the citation.** Three sibling
items — `thm-mantel-exact-and-unique`, `lem-zykov-symmetrisation`,
`thm-turan-exact-and-unique` — each carry verbatim:

> `[F1] $\operatorname{ex}(n,H)$ is the maximum edge count of an $n$-vertex graph with no ordinary copy of $H$ ([[def-extremal-number-turan-graph-and-blowup]]).`

and each declares that definition in `deps`. Those are precisely the items that
**unfold** the definition. The page's other `ex`-users
(`thm-turan-density-exists`, `prop-normalized-extremal-number-monotonicity`,
`cor-bipartite-extremal-density-zero`, `cor-chromatic-number-extremal-density`)
use `ex` only as an asymptotic *quantity* and legitimately omit it.
Supersaturation makes the unfolding move and carried neither the fact nor the dep.

The second reason: **`deps` is inside the `item-hash` normalization and feeds the
machine-consumed dependency graph** — `impact-audit`, `depcheck`, the flowchart,
the `spine-audit` transitive cone. A missing edge here is a wrong graph, not
prose hygiene: had `def-extremal-number-turan-graph-and-blowup` ever been
repaired, `impact-audit` would not have surfaced supersaturation as a consumer.
The 30-second rule governs *logical gaps between proof steps*; it is not a licence
to leave a load-bearing dependency undeclared.

Worth recording: **`depcheck` could not have caught this.** Its `cited-not-in-deps`
check fires on "cites but does not declare". This item never wiki-linked the
definition anywhere, so it used the notion without citing it — invisible to the
gate. Terra found it by reading.

**The mathematics was never wrong.** I re-verified the whole proof independently:
the averaging identity in 1.1 ($\mathbb E[e(G[S])]/\binom m2 = e(G)/\binom n2$ via
$\binom{n-2}{m-2}/\binom nm = \binom m2/\binom n2$), the density inequality in 2.1
($\varepsilon/2 \le p(1-(\pi+\varepsilon/2)) \Rightarrow p \ge \varepsilon/2$,
valid because step 1.1 reduces to $\pi+\varepsilon\le1$ so $1-(\pi+\varepsilon/2)\in(0,1]$),
and the double count in 3.1 ($\binom nm/\binom{n-h}{m-h} = \binom nh/\binom mh$).
All correct. **No claim was trimmed or weakened.** The repair supplies a missing
licence; it does not retreat from anything.

### Repair applied (smallest correction)

1. `deps` gains `def-extremal-number-turan-graph-and-blowup`.
2. New `[F4]`, in the page's established wording verbatim:
   `[F4] $\operatorname{ex}(n,H)$ is the maximum edge count of an $n$-vertex graph with no ordinary copy of $H$ ([[def-extremal-number-turan-graph-and-blowup]]).`
3. Step 2.1 makes the unfolding explicit and cites it: "Each good subset induces
   an $m$-vertex graph with more than $\operatorname{ex}(m,H)$ edges, so by [F4] it
   is not $H$-free: it admits an injective ordinary-subgraph embedding of $H$."
   Bracket → `[step 1.1, given, F4]`.
4. Step 1.1 cites `F4` too — it is where the symbol $\operatorname{ex}(m,H)$ first
   enters (choosing $m$). Fixing 2.1 alone would have left the notation introduced
   without a licence one step earlier.

No Statement, title, hypothesis or constant changed. No published item touched, so
no `impact-audit` closure is triggered — both this item and the definition it now
cites are `draft`.

---

## Twice-touched

**`thm-extremal-graph-supersaturation` is in the twice-touched escalation, and this
repair is its third touch.** Per-snapshot trace:

| snapshot | hash | stage |
|---|---|---|
| `probe-post-step6` | `8c6e32fc1040ab6d` | created |
| `alpha-step6-final` | `f1cefe83eb7856b3` | step-6 repair |
| `post-step8-repairs` | `54c471fd3b613623` | step-8 fatal repair #1 |
| working tree | `c30f9dcf051244dd` | **step-8b fatal repair #2 (this one)** |

The escalation is advisory, not blocking, and I judge it should **not** halt the
level: the three touches are not a proof oscillating under resampled nitpicks.
They are disjoint and monotone — a step-6 content repair, then a step-8 fatal
repair, then this one, which adds a citation and changes no mathematics. The
underlying argument has been stable and correct throughout. Flagging for the
step-10 rundown as instructed.

`thm-rectifiable-iff-coordinate-functions-have-bounded-variation` was **not**
touched here and stays at one repair (`post-step8-repairs`).

The other three items at ≥2 repairs are unchanged by this round:
`lem-complex-conjugation-and-modulus-laws`, `cex-the-koch-curve-is-not-rectifiable`,
`cor-operator-determinant-by-row-reduction`.

---

## Ledger note for the orchestrator — two different `item_sha256` normalizations

**The dispatch quoted judge-ledger hashes; the adjudication ledger takes a
different hash.** They are computed by different normalizations:

| producer | normalization | supersaturation |
|---|---|---|
| `tools/judge.mts` | strips only the `  judge:` sub-block | `05bca753decd…` |
| `tools/item-hash.mjs` (`touchlog`, `step8-guard`) | strips the whole `verification:` block | `54c471fd3b61…` |

`step8-guard` matches an adjudication row's `item_sha256` against the **touchlog**
baseline, which uses `item-hash.mjs`. I confirmed the `pre-step8b` snapshot stores
`54c471fd3b613623` / `e86fbad427acf4b2`, and that prior adjudication rows in this
run carry the `item-hash.mjs` value. **The rows therefore record the `item-hash.mjs`
hashes.** Writing the quoted `05bca753de…` would have produced a spurious
`nonfatal-edit` failure — the licence would not have matched the baseline.

Rows appended to `research/frontier-11-judge-adjudications.jsonl`:

```
{"id":"thm-rectifiable-iff-coordinate-functions-have-bounded-variation","model":"gpt-5.6-terra","context_sha256":"dd2e303d…","outcome":"confirmed_nonfatal","item_sha256":"e86fbad427acf4b2cc2fc0f227f0003a23b49e674230389edc453d46fac0d189"}
{"id":"thm-extremal-graph-supersaturation","model":"gpt-5.6-terra","context_sha256":"325f4c1e…","outcome":"confirmed_fatal","defect_type":"dependency_citation","item_sha256":"54c471fd3b613623f03a0d6bc3358124db22ff9871f4ecdd8b4955d953999886"}
```

---

## Gates run

- `precheck.mts items/thm-extremal-graph-supersaturation.md` — **PASS**, 0 failing.
- `step8-guard --baseline pre-step8b` — **OK**: 3718 items at baseline, **1 changed,
  0 created, 0 deleted; 1/1 licensed by a `confirmed_fatal` adjudication.**
- `fwdcheck` — **OK**; the new dependency edge points backward within the page
  (item #1 ← item #10), introduces no cycle and no forward reference.
- `depcheck` — supersaturation is **absent from all output**, warnings included.
  The run's 4 pre-existing `published-unaudited` errors on the D1-relocated
  complex-number items (`def-complex-numbers-and-arithmetic`,
  `thm-complex-numbers-form-a-field`,
  `def-complex-conjugate-real-imaginary-part-and-modulus`,
  `lem-complex-conjugation-and-modulus-laws`) are unrelated to this round and
  untouched by it; they remain open for the owner audit at step 10.

Files changed by this round, in full: `items/thm-extremal-graph-supersaturation.md`
and `research/frontier-11-judge-adjudications.jsonl`.

## Rejudge list

```
thm-extremal-graph-supersaturation
```

One item, both lanes. Its own `item_sha256` changed, so it must rejudge. Its
unedited page-mates on `extremal-graph-theory` are spared under the owner decision
of 2026-08-06: their text is byte-identical, so their current verdicts stand even
though the pair context hash moves.

`thm-rectifiable-iff-coordinate-functions-have-bounded-variation` is **not** a
rejudge target — it was not edited, and its Terra rejection is closed on its
exact-hash ledger row as `confirmed_nonfatal`.

## Step-10 note

One Terra-only rejection stands adjudicated as nonfatal for this run
(`thm-rectifiable-iff-…`, well-formedness scope of `Var` under a definition that
is correctly declared and faithfully cited). The other was a real
`dependency_citation` defect that both the step-6 audit and `depcheck` missed and
Terra caught — worth recording in the step-10 model comparison as a genuine
cross-lane catch, since DeepSeek passed the same text twice.
