# frontier-13 — Step 8c: Alpha adjudication of the last split rejection

Lead Alpha, sole adjudicator (owner, 2026-07-31). Fatal-only under R1 (owner,
2026-08-03). Baseline `pre-step8c`. One rejection row.

**Result: `confirmed_fatal`. DeepSeek is right, the defect is in the Statement
rather than the proof, and the item is repaired by binding $G$.** Both direct
consumers were opened from disk before the edit and both still get exactly what
they cite — the bound form licenses their applications better than the old text
did, because the old text never said which graph the copies were counted in.

---

## 1. The rejection, and that it was cast against today's text

`research/frontier-13-judge.jsonl`, 2026-08-15T12:12:27Z:

> "The statement never introduces or quantifies a host graph $G$, yet the
> conclusion maps into $V(G)$ and requires edges of $G$; $G$ is used outside its
> scope, so the theorem is not a well-formed assertion."

Terra keeps the same text (12:03:42Z, same `context_sha256` `d60fd674`), so this
is a genuine split, not a stale lane.

Checked first, because a rejection against superseded text is worth nothing: the
judge's own normalization (whole file minus the `judge:` block) of the pre-repair
disk file reproduces the verdict's `item_sha256`
`9a9b2440999e060aaeab751de6aca16e25b9acaecee46d3c5d07b75fe6ebb1e0` exactly.
DeepSeek read the text I adjudicated. (That digest differs from the ledger's
`916e926b…` only because `item-hash.mjs` strips the whole `verification:` block
while `judge.mts` strips only `judge:` — two normalizations, same file.)

## 2. Verdict: `confirmed_fatal`, `other`

The pre-repair Statement bound $H$, $\eta$, $\gamma$, $c$, $N$ and
$W_1,\ldots,W_h$, and nothing else. $G$ then appeared twice in the conclusion —
as the codomain $V(G)$ and in "an edge of $G$" — with no binder anywhere.

It is not a 30-second gap, on three counts, and the third is what settles it.

1. The 30-second rule is for a gap **between proof steps**. This is the
   Statement, which is what the judges read and what a reader takes away.
2. The hypothesis is not even expressible without the ambient graph:
   `def-epsilon-regular-pair` reads "let $X,Y$ be nonempty vertex sets **in a
   graph**", and `def-edge-density-between-vertex-sets` defines $d_G(X,Y)$ for
   $X,Y\subseteq V(G)$. "Nonempty vertex sets" names no graph, so
   "$\gamma$-regular of density at least $\eta$" had no referent.
3. **The free variable admits a false reading.** Nothing in the old text tied the
   $G$ of the conclusion to the graph carrying the regularity hypothesis, so a
   reader may instantiate them independently: let $W_1,W_2$ be disjoint sets of
   size $\ge N$, $\gamma$-regular of density $\ge\eta$ in some $G_0$, take
   $H=K_2$, and read $G$ as the edgeless graph on $V(G_0)$. The hypotheses hold,
   and the conclusion asserts at least $c|W_1||W_2|>0$ maps carrying the edge
   $12$ to an edge of $G$ — there are none. An unbound variable in a landmark
   theorem that one reading makes false is a fatal Statement defect, not
   exposition.

Ledger row appended to `research/frontier-13-judge-adjudications.jsonl` with
`item_sha256` `916e926bc974befd88405a7a9006a8c7334458dcd8d0982f4e1d0042782e32e7`
— the pre-repair state, matching the `pre-step8c` baseline hash `916e926bc974befd`.

## 3. What changed

Two lines, both in the hypothesis; **no numbered step, constant, `deps` entry or
title moved**, because every step already read $G$ as the ambient graph.

Statement — was:

> …such that the following holds. Let $W_1,\ldots,W_h$ be nonempty vertex sets,
> not necessarily distinct, with $|W_i|\ge N$. Whenever $ij\in E(H)$, require
> $W_i\ne W_j$ and require $(W_i,W_j)$ to be $\gamma$-regular of density at least
> $\eta$.

now:

> …such that the following holds **for every finite simple graph $G$**. Let
> $W_1,\ldots,W_h\subseteq V(G)$ be nonempty, not necessarily distinct, with
> $|W_i|\ge N$. Whenever $ij\in E(H)$, require $W_i\ne W_j$ and require
> $(W_i,W_j)$ to be $\gamma$-regular **in $G$** of density at least $\eta$.

The quantifier order is the point: $\gamma,c,N$ still depend on $H$ and $\eta$
alone and are chosen **before** $G$, which is then universally quantified over
every finite simple graph. Putting $G$ in the opening sentence would have made
the constants depend on the host and broken both consumers, which apply the
lemma to a graph produced only after the constants are fixed.

Facts line — `**Given:** $H,\eta$ and host sets satisfying the Statement.` now
names the host graph: `$H,\eta$, a host graph $G$, and host sets
$W_i\subseteq V(G)$ satisfying the Statement.`

`def-finite-simple-graph` is already in `deps` and already cited as `[L3]`, so
naming $G$ as a finite simple graph adds no dependency.

The $h=0$ case repaired at 8b survives unchanged: for every $G$, including the
null graph, there is exactly one map $\emptyset\to V(G)$, it is injective and
vacuously edge-preserving, and $\prod_{i=1}^{0}|W_i|=1$ against $c=1/2$.

## 4. Consumers — checked from disk before the edit

`impact-audit` from `pre-step8c` to `after-step8c-alpha`: 1 changed interface, 5
affected items, all disposed `still-licensed` in
`research/frontier-13-step8c-impact.json`.

```
impact-audit: 1 changed public interface(s), 5 affected item(s)
  thm-counting-lemma-for-a-fixed-graph: 5 logical, 2 direct citation consumer(s)
```

**`thm-graph-removal-lemma`** (direct, `[L2]`, used at 1.1 and 5.1) supplies
every clause the bound form asks for, and did so already:

| bound form asks | the removal lemma supplies |
|---|---|
| a finite simple graph $G$ | its own Statement's $G$ of order $n\ge n_0$ |
| $W_i\subseteq V(G)$ | the parts of the equitable partition of $V(G)$ from step 1.1 |
| $\gamma$-regular in $G$, density $\ge\eta$ | step 2.1 deletes exactly the irregular and the below-$\eta$ pairs, so the pairs carrying the copy found at 4.1 are regular and dense **in $G$** |
| $W_i\ne W_j$ on edges of $H$ | step 2.1 also deletes within-part edges, so an edge of $H$ in $G'$ has endpoints in distinct parts |
| $\vert W_i\vert\ge N$ | step 5.1's $\vert W_i\vert\ge n/(2M)$, with $n_0$ chosen large |

Its conclusion — "the original graph contains at least $c\prod_i|W_i|$ injective
copies" — is now unambiguous about *which* graph, which is what it wanted all
along.

**`thm-induced-counting-lemma-for-regular-pairs`** (direct, `[L1]`, used at 3.1
and 4.1) does not invoke the counting lemma as a black box: 3.1 borrows the
retained-fraction constant $\rho$ of the greedy argument and 4.1 re-runs that
argument with a per-pair required relation. Its own host sets live in one ambient
graph in which its $d(W_i,W_j)$ are measured — the configuration the bound form
describes. Nothing it cites was narrowed away.

The three transitive consumers touch none of this: `thm-induced-graph-removal-lemma`
cites the *induced* counting lemma and its representative sets are already
$W_i\subseteq V_i\subseteq V(G)$ for its own $G$; `ex-induced-path-counting-from-three-pure-pairs`
is a concrete pure-pair model in a single graph; `cex-edge-deletion-alone-cannot-prove-induced-removal`
is a construction in $K_n$ that uses induced removal only for "additions are
permitted" and invokes no regularity or counting bound.

**One artifact edit follows the repair.** Both consumers' proof contracts quote
the counting lemma's Statement verbatim as their `[L2]`/`[L1]` source clause, so
`proof-contract --strict` reported `citation-quote-mismatch` on both until the
quotes were re-pointed at the repaired text (`research/frontier-13-alpha-a-step8c-requote.mjs`,
2 citations). Contract quotes only; no consumer item was touched.

## 5. Gates, verbatim

```
precheck:  PASS items/thm-counting-lemma-for-a-fixed-graph.md (direct)
           1 checked, 0 failing — all clean
rendercheck: OK — 1 file(s): no wikilink inside math, … every math span parses under the real KaTeX
citecheck: OK — every recognised elementary move cites a home that states it
proof-contract --strict --require-reviewed: 0 error(s), 0 warning(s), 393/393 item(s) checked
finite-smoke: 0 error(s), 16 check(s)
risk-report:  0 error(s), 393 item(s) routed
content-policy [batches 3 and 4]: 143 scoped item(s), 0 error(s), 0 warning(s)
depcheck: OK — no cycles, all references resolve, no draft items on published pages
fwdcheck: OK — every forward reference is declared, points strictly forward, …
extcheck: OK — every recorded-not-proved statement is a cited remark …
impact-audit --receipt: 1 changed public interface(s), 5 affected item(s) — exit 0
```

Contracts re-merged from all seven batch files first (393 entries — the full
level, not the 352 of the short step-8 merge recorded in §5 of the 8b report).

### `step8-guard --baseline pre-step8c`

Against the live tree:

```
step8-guard: baseline "pre-step8c" (2026-08-15T12:34:11.358Z) vs working tree
  4646 item(s) at baseline; 1 changed, 0 created, 0 deleted
  1/1 change(s) licensed by a confirmed_fatal adjudication

OK — every step-8 edit is licensed by a confirmed fatal defect
```

Window closed with `touchlog.mjs snap … "after-step8c-alpha"` so the gate stays
re-runnable once anything later edits the tree, and re-verified against that label:

```
step8-guard: baseline "pre-step8c" (2026-08-15T12:34:11.358Z) vs after-step8c-alpha
  4646 item(s) at baseline; 1 changed, 0 created, 0 deleted
  1/1 change(s) licensed by a confirmed_fatal adjudication

OK — every step-8 edit is licensed by a confirmed fatal defect
```

The snapshot repeats `NOTE: 2 item(s) now repaired more than once`. This item is
now at three repairs (8, 8b, 8c). The twice-touched escalation is advisory at
step 8 (owner, 2026-08-03); recorded for step 10, and each round fixed a distinct
defect — candidate/host bookkeeping, then $h=0$ and the inflated `[L1]`, now the
unbound $G$ — never a recurrence.

## 6. `risk_review`

The item's HIGH-tier `risk_review` row (Alpha-C, step 6b) stands. Its content —
the greedy invariant of 2.1 against the exceptional-set bound of 3.1–4.1, and the
collision count of 5.1 — concerns numbered steps, none of which changed here.
Naming the graph the argument was always running in does not disturb it.
`proof-contract --require-reviewed` passes over all 393 items.

## 7. Rejudge target

`research/frontier-13-step8c-rejudge-targets.json`:

```
thm-counting-lemma-for-a-fixed-graph
```

Its `item_sha256` changed, so **both** lanes rejudge it — Terra's 8b keep was
cast against the pre-8c text. Its unedited page-mates on
`regular-pairs-and-induced-counting` are spared (owner, 2026-08-06).

## 8. For the owner at step 10

1. **The dominant class had a third member, in a Statement rather than a `[F#]`.**
   Nine of the run's inflated restatements were dependency citations; this one is
   the same failure one level up — the Statement itself under-specified, so every
   citation of it inherited the ambiguity. Worth saying in the step-10 account.
2. **The two consumers' restatements of this lemma are synthetic summaries.**
   `thm-graph-removal-lemma`'s `[L2]` ("regular pairs of density bounded below
   contain a positive product-proportion of injective part-respecting copies of
   $H$") and `thm-induced-counting-lemma-for-regular-pairs`'s `[L1]` are exactly
   the shape DeepSeek caught in this item's own `[L1]` at 8b: they drop the
   $W_i\ne W_j$ requirement, the size threshold $N$ and the parameter $\gamma$.
   Both applications are sound — I verified each above — so neither is a fatal
   defect and R1 forbids the cosmetic edit here. They want a step-6 restatement in
   a later pass, alongside this item's `[L2]`, already flagged in §7 of the 8b
   report.
3. **`thm-induced-counting-lemma-for-regular-pairs` leaves its own ambient graph
   implicit** — "vertex sets", $d(W_i,W_j)$, and "induce $H$" all presuppose a
   host graph it never names. Unlike the item repaired here it introduces no free
   *symbol*, so no reading of it is false and a reader closes it immediately; it
   is nonfatal and I hold no rejection row against it. But it is the same
   exposition weakness a judge just rejected its sibling for, and it will
   plausibly draw a rejection in a future sweep. Owner's call whether it gets a
   step-6 pass before publication.

## Blockers

None.
