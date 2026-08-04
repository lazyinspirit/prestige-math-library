# Wave 3 — A3 adjudication (orchestrator)

Adjudicated 2026-08-04 from disk at baseline `136fb35`. All five Audit-Betas
returned `EXIT=0`. **Amendment 6 governs: nothing below is approved on a Beta's
report.** Every load-bearing claim I approve, I re-derived from the repository
or from the live web myself; where I could not, I say so and route it to A6.

## Coverage recount, from disk

| batch | ledger rows / scope | contracts | rationale skeletons | claimed coverage |
|---|---|---|---|---|
| `combinatorics-graphs` | 74 / 74 | 59 | **6 for 74 rows** | no exception |
| `combinatorics-incidence` | 34 / 34 | 22 | 34 for 34 | no exception |
| `foundations` | 36 / 36 | 29 | 36 for 36 | no exception |
| `real-analysis` | 44 / 44 | 35 | 26 for 44 | no exception |
| `topology` | 36 / 36 | 29 | 36 for 36 | no exception |
| **total** | **224 / 224** | **174** | | |

`merge-proof-contracts` wrote 174 scoped items from 5 batch files;
`proof-contract --strict` reports **19 errors, 0 warnings, 174/174 checked**,
every error the `citation-uses` class the Betas deliberately left truthful
rather than inventing a using step. That is the correct behaviour and is why the
gate is red before A4 rather than after.

## The orchestrator now has working network; the Betas do not

`WebFetch` resolves from the orchestrator session. Every Beta reported that its
sandbox had no outbound DNS and that it verified URLs through the model-side web
route instead. **This is the first wave in which the orchestrator independently
checked the sources**, and it changed three findings below. It also means A3 is
a real check on source claims rather than a restatement of them.

## Class (a) — unambiguous falsehoods: 2, both APPROVED

### A1. `def-cofinal-subset-of-an-ordinal` — false equivalence

The Definition says a non-cofinal subset is bounded below α by "there is
ξ ∈ α with η < ξ for every η ∈ C, **equivalently** η ≤ ξ for every η ∈ C and
some ξ ∈ α."

**Verified false by me from disk.** Take α = 1 and C = {0}. C is cofinal in 1
(the only ξ ∈ 1 is 0, and 0 ≤ 0 with 0 ∈ C). The strict condition fails; the
weak condition holds with ξ = 0. So the two are not equivalent. The strict form
is exactly the negation of the cofinality clause, since ordinals are linearly
ordered — the weak form is not.

**Independently corroborated.** The `topology` Beta reached the same defect from
a different batch while checking `ex-the-long-line-in-the-connectedness-hierarchy`
against this target, with the same successor-ordinal witness, and escalated it
rather than editing another batch's item. Two Sol Betas and the orchestrator
agree.

**APPROVED:** delete the false "equivalently" clause; keep the strict form.
Owner: `foundations` Beta. Elementary correction, fully written above.

### A2. `fs-ordinal-addition-is-commutative` Remark — false characterisation

The Remark says "The commutative special case is exactly the finite one, by
`thm-ordinal-arithmetic-agrees-on-omega` together with commutativity of Peano
addition."

**Verified false by me from disk.** ω + ω = ω + ω, so an infinite commuting pair
exists; ω + ω·2 = ω·2 + ω = ω·3 is another. The claim is also *unsupported by
its own citation*: the cited theorem gives agreement with Peano addition on ω,
which yields commutativity **on** finite ordinals and says nothing about the
converse direction that "exactly" asserts. It is simultaneously a falsehood and
a citation-precision defect, in a Remark — the location prior waves keep finding
them.

**APPROVED** as proposed: state that addition is commutative on finite ordinals
because it agrees there with Peano addition, and that the displayed witness
shows it is not commutative in general.

## Class (b) — citation precision

### APPROVED, verified by me on the live web

| id | defect | my verification |
|---|---|---|
| graphs B1 (9 MST items) | cite `ptwiddle.github.io/.../lecture8.html` titled "Minimum spanning trees" | fetched: heading is verbatim **"Lecture 8: Prüfer code"**, Cayley's formula, no Kruskal/Prim |
| graphs B1 replacement | ISI `Ch4.S3.html` | fetched: "4.3 Minimal spanning trees", Prop 4.18 gives injective-weights uniqueness, cut property, cycle property |
| graphs B3 (21 items) | `cs.sfu.ca/~pavol/graphclasses/` unreachable | fetched: **HTTP 404** |
| graphs B4 (8 items) | `web.math.princeton.edu/~mchudnov/bullsurvey.pdf` unreachable | fetched: **HTTP 404** |
| graphs B3/B4 replacement | White Rose thesis | fetched and read page 1: *On hereditary graph classes defined by forbidding Truemper configurations*, Boncompagni, Leeds 2018 — genuinely the right subject |

The Betas were right to refuse to infer nonexistence from a DNS failure. I can
settle it: two of those URLs are dead.

### APPROVED, verified from disk

**The 13 declared-but-unused facts (19 contract errors).** I scanned all 224
items myself, restricted to the proof/verification/refutation/counterexample
section only, and got exactly the union of what the five Betas reported:

| batch | items |
|---|---|
| `combinatorics-graphs` | `lem-edge-addition-to-a-tree` (L1), `lem-fundamental-cut-of-a-spanning-tree` (F1), `cor-distinct-edge-weights-...` (L1) |
| `combinatorics-incidence` | none |
| `foundations` | `fs-ordinal-addition-is-commutative` (L5), `fs-ordinal-multiplication-is-commutative` (L5), `cex-omega-one-has-no-at-most-countable-cofinal-subset` (L5) |
| `real-analysis` | `fs-countable-union-theorem-of-zf` (L2), `fs-infinite-has-countable-subset-in-zf` (A2) |
| `topology` | `fs-a-connected-space-is-path-connected` (L3), `fs-the-closure-of-a-path-connected-set-is-path-connected` (L3), `fs-a-connected-space-is-locally-connected` (L3), `fs-an-intersection-of-connected-sets-is-connected` (A6), `ex-the-oscillating-zigzag-curve-computed` (A6) |

Every Beta found every one of its own; no Beta missed one and none invented one.
**APPROVED:** remove the unused entry from Facts & Assumptions and carry the
same statement as a direct wikilink in the Remark that actually uses it. Never
add a proof-step use that does not exist. **Re-run `extcheck` and `fwdcheck`
after** — `fs-infinite-has-countable-subset-in-zf`'s `[A2]` is a
not-proved-here ‡ citation, and moving it changes which row carries the marker.

**topology B1** — `ex-convex-subsets-of-rn-are-path-connected` uses absolute
homogeneity and the triangle inequality in `[A5]` and step 1.2, citing
`def-p-norms-on-rn`. Verified: that definition says at lines 91–92 that normhood
"is proved there and is not assumed here", pointing at
`lem-p-norms-are-norms-and-induce-the-published-metrics`, which is absent from
`deps`. The conclusion is true; the licensing chain is incomplete. **APPROVED:**
add the lemma to `deps` and cite it in `[A5]`. No statement or derivation change.

**topology B2** — `lem-the-oscillating-zigzag-curve` step 6.3 attributes the
connectedness of π₀[V] to "[A4] and step 3.1"; verified from disk that step 3.1
establishes continuity of the graph map g, not of π₀|_V. **APPROVED:** cite
`[A2, A3, A4]` and extend the terminal tag as proposed. No claim changes.

**foundations B1** — the ordinal-arithmetic page line 52 says
`cor-ordinal-exponentiation-well-defined` "carries the details and the exponent
law that the naive clause falsifies". Verified: the corollary's Statement proves
existence, uniqueness and ordinal-valuedness only; the sum law
α^(β+γ) = α^β · α^γ is clause (e) of `thm-ordinal-exponent-laws`, and the
corollary merely mentions it in a Remark. **APPROVED for the page.** The Beta
also alleges the same defect inside `def-ordinal-exponentiation`; that item's
line 40 attribution is accurate as written, so **A6 must confirm the second
location before it is edited.**

**incidence W3-CI-001 … 006 — APPROVED as a group.** These are the wave's most
precise citation work: each names the source clause that does and does not
support the item (Gotti is real-valued so "f(x,x) ≠ 0" is not the item's
arbitrary-commutative-ring unit criterion; Hameister–Rao–Simpson Prop 2.8 gives
that criterion; Stanley §§3.8.4–3.8.5 covers the divisor poset the MIT problem
set does not; `cex-a-non-locally-finite-poset` needs `lem-pigeonhole` for "N is
infinite", which the two cited definitions do not prove). I verified both arXiv
targets exist and are what the Beta says: 2412.18049 is *Additive Biderivations
of Incidence Algebras* (Guan–Zhang, locally finite poset, commutative unital
ring) and 2605.08089 is *Finite products in commutative monoids* — the latter is
cited for `def-finite-sum-in-a-commutative-monoid`, which is exactly its
subject, not a mis-citation.

### ADDED BY THE ORCHESTRATOR — not found by any Beta

**29 items cite `diestel-graph-theory.com/basic.html?level=1`.** Fetched: the URL
is live but is the book's **preview/landing portal** — "the chapter links below
will let you view the main text" — and states none of the definitions cited to
it. The `combinatorics-graphs` Beta itself used the real chapter PDF
(`math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch1.pdf`, verified
live, 4.1 MB) for two other items. **APPROVED:** redirect the 29 to the chapter
PDF. Same defect class the incidence Beta found in Stanley's `ec1toc.html`
table-of-contents URL (9 items) — which is also approved.

Counting only what is now settled, **38 of the 74 items in `combinatorics-graphs`
carry a reference URL that is dead or does not contain the cited content.** This
is the fourth consecutive wave in which link quality is a finding; it is the
strongest evidence yet for the queued "link liveness as a gate" item.

## Class (c) — provenance retags: 224 rows

**APPROVED as recorded for `combinatorics-incidence` (34), `foundations` (36),
`real-analysis` (44) and `topology` (36).** Their rationales are individualised
(34/34, 36/36, 36/36; real-analysis 26 skeletons over 44 rows with a stated,
defensible conservative policy) and name source sections, convention deltas, and
coefficient-domain differences.

**PARTIALLY DECLINED for `combinatorics-graphs`.** Stripping the quoted item text
from its 74 rationales leaves **six** skeletons covering all 74 rows. Two
consequences:

1. **0 of 74 rows are `literature-derived/exact-source`**, against 25/39 in wave-0
   foundations and 17/43 in wave-2 foundations. Two topology batches did run at
   0–1 exact, so 0 is not impossible, but with 15 standard definitions in this
   batch it is not credible without per-item evidence.
2. **On counterexample and false-statement items the template records something
   untrue.** For `cex-minimum-spanning-tree-not-unique` it reads: the reference
   "supplies the established mathematical content represented by *'Every
   connected weighted graph has a unique minimum spanning tree'*". That sentence
   is the **false claim the item refutes**; the ISI source states the true
   restricted version. The determination may well be right — the recorded
   evidence does not establish it.

**Calibrated before calling this a defect:** across waves 0/1/1b/2, examples run
83/120 and counterexamples 61/79 `ai-altered/semantic-source`, so 0
`ai-generated` in this batch is within precedent and is **not** itself evidence
of a bulk default. Erring toward `ai-altered` is also the owner-mandated
direction. The template is the defect, not the labels.

**Required at A4, scoped so it is proportionate:** the `combinatorics-graphs`
Beta re-determines with individual, evidence-bearing rationales (a) its 10
counterexample and false-statement rows, where the template's sentence is
factually wrong as recorded, and (b) its 15 definition rows, which are the
credible `exact-source` candidates. The remaining 49 rows may keep their labels,
but each rationale must name the specific source clause relied on. This is ~25
rows, not 74.

## Class (d)

**APPROVED — `thm-cantor-normal-form` Remark.** It claims "the same argument with
ω replaced by any ordinal γ > 1 gives a base-γ normal form". The conclusion is a
real theorem but the claim about the argument is false: this proof rests on
additive indecomposability of ω^β, and the analogous absorption already fails at
base 2, since 1 + 2 = 3 ≠ 2. Replace with the proposed wording, which states the
general result and that its proof needs a digit-and-carry argument.

**APPROVED — `rem-real-exponents-deferred` published-claim decay.** The Remark
says no link is given "because the page that carries that development does not
exist yet". `library/real-analysis/the-logarithm-and-general-powers.md` is
published and carries `def-real-power`, `thm-real-power-laws` and
`thm-rational-supremum-power-agrees-with-exp`. A false claim about the corpus is
a falsehood; replace the stale sentence. Orienting wikilinks only — **do not
create a logical dependency on later material**, and re-run `fwdcheck`.

**APPROVED, narrow — the ordinal-arithmetic page's "Every other law a reader
might expect fails"** (line 74). Verified present. It asserts far more than the
five named counterexamples establish. Replace with a bounded claim naming what
the companions actually show.

**DECLINED — the three wholesale A-page summary rewrites.** `foundations` D2 and
both `real-analysis` summaries propose replacing the entire page body to meet the
two-paragraph, 150-word contract. Measured: ordinal-arithmetic 10 paragraphs /
1,023 words, countability 8 / 843, roots 5 / 707 — the contract violations are
real. But `AUDIT-WORKFLOW.md` §7 A2.4 is explicit that prose defects of this
class are "recorded, not chased", and the mathematical content of all three is
accurate. A wholesale rewrite is also the largest blast radius available at A4:
it changes the frozen A/B-pair context for every item on the page.

**Recorded for the A10 owner queue** with the three drafted replacements
preserved in the Beta findings files, so the owner can take them as a batch if
they want the contract retrofitted. This is the same disposition wave 2 gave its
14 scope-denial prose candidates.

## Routed to A6 rather than settled here

1. **Full URL liveness for the 63 URLs the A4 retag will write.** Audit Alpha is
   `claude-opus-5` dispatched as an Anthropic subagent and therefore has the same
   working web access I do — unlike the Betas. Alpha must fetch every URL it
   stamps. I spot-checked and found one already:
   `math.wvu.edu/~jwojciec/teaching_files/2024_Spring-581/node-9.html` returns
   **ECONNREFUSED on 443** from here, while the `topology` Beta reported HTTP 200
   for all 21 of its URLs. That may be an HTTP-only host or a transient outage —
   **it is not established as dead**, and the wave-2 DNS lesson says not to
   overclaim. Alpha resolves it, and its sibling `node-11.html`.
2. **The second `def-ordinal-exponentiation` location** in foundations B1.
3. **Whether any `combinatorics-graphs` definition is genuinely `exact-source`**
   after the Beta's re-determination.

## Not adopted

- No deletion, id change, or reading-order change was proposed by any Beta, and
  none is approved.
- No Beta proposed a new theorem or a B companion page.
- A0's proof-bearing count was corrected 161 → 174 in `wave3-A0.md`; three Betas
  independently flagged the same undercount, and `QUALITY-CONTROLS.md` lines
  12–13 settle it in their favour.
