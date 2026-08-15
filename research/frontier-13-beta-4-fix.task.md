## Batch 4 fix task — `erdos-hajnal-property-and-homogeneous-sets` (395) · `regular-pairs-and-induced-counting` (399)

Alpha verdicts: order 395 **insufficient**; order 399 **sufficient**. No split on
either page.

### F4.1 — order 395 never proves any forbidden graph HAS the EH property (must fix)

This is the run's strongest finding. Your page defines the Erdős–Hajnal property,
refutes it for the class of all graphs, proves three invariances, states the
conjecture — **and stops. There is no positive instance anywhere on the page.**
It has 11 A items; the next-thinnest A page in this run has 23, and this page
opens a 21-page block whose later pairs inherit its definitions.

`ex-complete-and-empty-hereditary-classes-have-constant-one` is **not** a positive
instance. "Complete graphs have EH constant 1" only says a complete graph is a
clique. The real statement is "$K_t$-**free** graphs are EH" — Ramsey's theorem —
and it is absent.

Your Chudnovsky locator stops at p. 2. **Page 3 opens with exactly this material.**
Extend the read range and add three results (11 → 14 items), all provable from
published items already in your closure, needing no `requires` change and no
split:

1. **$K_t$-free $\Rightarrow$ EH**, from `thm-finite-graph-ramsey-binomial-bound`.
   Alpha read that item on disk and confirms it is the off-diagonal form
   $\binom{s+t-2}{s-1}\to(s,t)^2$ — exactly what this needs.
2. **$P_3$-free $\Rightarrow \hom(G)\ge\sqrt n$.** Every component is a clique, so
   $n\le\alpha\omega\le\hom(G)^2$. `graphs-walks-and-connectivity` already supplies
   14 of this page's dependencies.
3. **Every graph on $\le 3$ vertices is EH**, from those two plus your scaffolded
   complement invariance.

Update the Chudnovsky coverage rows for the newly-read range, giving every heading
a disposition.

### F4.2 — DELETE the two B-page summaries (must fix)

Your notes §"Two-paragraph page summaries for step 4" drafts two-paragraph
summaries for all four pages, **including both `-examples` companions.** The
page-summary contract is explicit: **a B page has no authored summary body at
all.** Yours is the only batch in the run that did this. Delete the
`erdos-hajnal-property-and-homogeneous-sets-examples` and
`regular-pairs-and-induced-counting-examples` summary blocks; keep the two A-page
summaries, which are correct in form.

### F4.3 — one wording fix, one coverage gap

- `rem-tower-and-wowzer-bounds-in-regularity` says regularity "gives tower bounds".
  It must say ***upper*** bounds. Alpha confirmed your decline of the tower-type
  **lower** bounds is real — Zhao's Thm 2.1.17 says verbatim "We do not include the
  proof here" — and that your titles otherwise claim no more than the proofs give.
  This one word is the exception.
- Zhao Exercises 2.1.22–2.1.25 sit inside §2.1 but outside your stated locator,
  and **2.1.24 is the half graph your own notes already cite.** Extend the locator
  and give all four a disposition.

### F4.4 — proof-contract citations are entirely empty

All 43 of your contracts have an empty `citations` array. Populate them — see the
brief's table; batches 1 and 2 are the standard.

### Confirmed — leave alone

Alpha verified your induced-removal chain closes as advertised (strong regularity
→ energy approximation → self-regular extraction → representative selection →
induced counting) — the run's clearest case of building the machinery rather than
declining. Your two pairs correctly do not cite each other.
