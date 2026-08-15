## Step 8c — one remaining split rejection on `thm-counting-lemma-for-a-fixed-graph`

Third round on this item. Rounds 1 and 2 fixed the candidate/host bookkeeping,
the $h=0$ division by zero, and the inflated `[L1]` restatement. Terra now keeps
it. **DeepSeek still rejects, on a defect neither earlier round touched:**

> "The statement never introduces or quantifies a host graph $G$, yet the
> conclusion maps into $V(G)$ and requires edges of $G$; $G$ is used outside it."

**The orchestrator verified this from the Statement and it is correct.** The text
reads:

> "Let $H$ be a finite simple graph on labelled vertices $[h]$, and let
> $0<\eta<1$. … Let $W_1,\ldots,W_h$ be nonempty vertex sets, not necessarily
> distinct, with $|W_i|\ge N$. … Then at least $c\prod|W_i|$ maps
> $\phi:[h]\to V(G)$ with $\phi(i)\in W_i$ carry every edge of $H$ to an edge of
> $G$."

$G$ occurs twice in the conclusion and is introduced nowhere. "Vertex sets" names
no graph, and $\gamma$-regularity of $(W_i,W_j)$ presupposes a graph in which
density is measured. This is an **unbound variable in a Statement**, not a proof
gap — the judges read Statements, and this one refers to an object outside its own
scope.

This is a single-lane rejection, and splits converted at only 3.1% in the main
sweep — but adjudicate it on the mathematics, not the rate. If you agree it is
`confirmed_fatal`, the repair is to bind $G$: introduce a finite simple graph $G$
and place the $W_i$ inside $V(G)$, so regularity, the codomain and the edge
condition all refer to it.

**Check the consumers before you edit.** `thm-graph-removal-lemma` and
`thm-induced-counting-lemma-for-regular-pairs` both cite this item; last round the
obvious narrowing would have exported a hole into them. Confirm the bound form
still gives them exactly what they cite.

**Baseline `pre-step8c` is recorded.** Fatal-only still binds: only a
`confirmed_fatal` row licenses an edit, the row carries `item_sha256` of the
pre-repair text, and `step8-guard --baseline pre-step8c` must pass. If you judge
it `false_positive` or `confirmed_nonfatal`, **close the row and change nothing.**

Report: `research/frontier-13-alpha-a-step8c.md` — verdict, evidence, any repair,
consumer check, guard output, rejudge target.
