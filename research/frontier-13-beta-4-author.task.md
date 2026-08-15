## Batch 4 — step 5 authoring

Splice receipt: `research/frontier-13-splice-4.json`. **Read it first** — its
`summary_corrections` map is binding, and the lead Alpha has already decided each
A page summary.

| page | kind | order | items |
|---|---|---|---|
| `erdos-hajnal-property-and-homogeneous-sets` | A | 395 | 14 |
| `erdos-hajnal-property-and-homogeneous-sets-examples` | B | 396 | 8 |
| `regular-pairs-and-induced-counting` | A | 399 | 25 |
| `regular-pairs-and-induced-counting-examples` | B | 400 | 8 |

**55 items to author.**

### Specific to this batch

Alpha verified your three Erdős–Hajnal positives argument-by-argument: the $\\binom{t+s-2}{t-1}$ instantiation is the published bound under $(s,t)\\mapsto(t,s)$, $s\\ge t-2$ is used exactly where $(t+s-2)\\le 2s$ needs it, $\\omega(K_0)=\\alpha(K_0)=0$ closes the empty graph, and your claimed exponent $1/t$ underclaims what Ramsey delivers. Author them as verified. `ex-bounded-order-graph-classes-are-erdos-hajnal` now requires **hereditary** in its title — the hypothesis must genuinely discharge in the proof, not just appear in the title.

**From the round-3 re-check — the one thing to fix while authoring.**
`def-erdos-hajnal-property-and-constant` is quoted by its **title** in all **10**
citations of it — a noun phrase, carrying no proposition. This was unavoidable at
step 3 (the definition was not authored yet), but it is the most-cited in-batch
definition on page 395 and **every Erdős–Hajnal proof on the page rests on it**.
Once you have written its defining sentence, replace all ten title-quotes with it.

Alpha also flags, and you should not read it as a pass: all 46 of your contracts
declare a **single** derivation step, so "the citation is used at the step that
uses it" is structurally forced rather than demonstrated. Write real numbered
input maps as you author — `--strict` cannot tell the two apart.
