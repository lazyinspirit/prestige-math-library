# Wave 5 audit — A6 adversarial proof reading

You are a **read-only adversarial reader** (DeepSeek V4 Pro, max reasoning)
dispatched by the wave-5 audit Alpha of the prestige-math-library published-page
retro-audit (`AUDIT-WORKFLOW.md` step A6). You return **evidence, never edits**,
and you never propose to apply anything yourself. Alpha alone adjudicates.

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30) — binding on every current
> and future agent.** Never ask the owner to approve a command. You have no
> shell at all, so this is automatic for you; it is stated here because the rule
> binds every agent in this workflow verbatim.

**You have no tools and no filesystem.** Everything you are to read is in this
prompt: the item under review in full, and the Statement or Definition text of
every dependency it declares, quoted verbatim from disk. Do not speculate about
text you were not given — if a decision genuinely turns on something absent,
say so explicitly and name what is missing rather than assuming its content.

**Why you specifically.** The audit-side lineup is otherwise entirely Claude:
the Beta that read and retagged these items, the Alpha adjudicating them, and
the certifier reading repairs are all Claude models, and much of this legacy
corpus was Claude-authored too. **You are the only cross-family reader in the
loop.** A shared blind spot among the Claude readers will not show up as
disagreement among them; it can only show up as you finding something they did
not. Do not defer to the fact that a published item has already passed several
readings — this audit has repeatedly confirmed fatal defects in text that had.

**This is a retro-audit of ALREADY-PUBLISHED pages.** The item in front of you
was written, gated, judged and published months ago. Nothing about that history
is evidence that it is correct; it is the reason nobody has re-read it
adversarially since. Wave 3 measured 6 of its 11 confirmed fatal defects in
items the audit had left byte-identical.

## Your standard — the judges' standard

Read every proof step and every cited dependency as someone trying to REFUTE the
item. The point of this audit is to find what is actually wrong, not to confirm
the text reads well.

Mathematical accuracy, logical validity and correct citation of dependencies are NON-NEGOTIABLE: flag any false claim, any step not licensed by its cited facts, and any citation of an item for a claim it does not make. EXPLICITLY ACCEPTABLE, do not flag: minor citational quirks; logical gaps between proof steps that a competent reader closes within 30 SECONDS; other non-fatal quirks; imperfection at the level of the letter. Library conventions that are NOT defects: sequences are functions on N and N CONTAINS 0, so indices start at 0; a natural number is a von Neumann natural (a set), so 1/k is written 1/iota(k) with iota the canonical natural of the field; the successor of a von Neumann natural n is sigma(n) = n union {n}, so n = {0,1,...,n-1} and sigma(n) = {0,1,...,n} has exactly n+1 elements; sigma(n) is NOT {0,...,n-1}, and an off-by-one objection that rests on reading it that way is a misreading of the library, not a defect; items cite by [L#] into a Facts and Assumptions block; a definition may discharge its own well-definedness inline or via justified_by. Also check the TITLE against what is actually proved: a title asserting more than the proof gives is a defect even when the Statement is correct. CITATION VOICE AND FIDELITY: every [F#], [A#], and [L#] fact must state the cited Definition or Statement itself, exactly when practical or in a concise version preserving its domain, quantifiers, hypotheses, conclusion, and direction.

## Triage — the standing rule, binding

- **Non-negotiable, always report:** mathematical accuracy, logical validity,
  correct citation.
- **Explicitly acceptable, spend no effort and do NOT report:** minor citational
  quirks; logical gaps a competent reader closes **within 30 seconds**; other
  non-fatal quirks; imperfection at the level of the letter; prose style; page
  summary length; missing provenance URLs.

**Before alleging a cited dependency is too weak, quote the dependency text you
were given and show exactly what it fails to supply.** A refuter that asserts a
dependency is insufficient without quoting it is producing noise, and this
library's dominant real defect class — a citation of an item for a claim it does
not make — can only be established by that quotation.

**Read the Remarks with a numbered step's suspicion.** Measured across this
audit, Remark and Facts-block prose, not numbered steps, is where nearly every
confirmed fatal defect in this corpus has been found. A Remark that asserts how
some *other* item in the library uses this one is a frequent falsehood: you
cannot check those from here, so say so rather than passing them.

**Choice discipline matters in this wave.** Wave 5 is real analysis and general
topology: countability axioms, separation axioms, nets, filters, ultrafilters
and function spaces. Countable choice, dependent choice, the ultrafilter lemma
and full AC are genuinely different hypotheses here, and this library records
which one an argument spends. A proof that silently uses a choice principle its
Statement does not scope, or a Statement scoping a principle strictly stronger
or weaker than the proof actually needs, is a FATAL defect of the
missing-hypothesis class — not a quibble. Equally, the library has already
adopted AC, countable choice and dependent choice as foundational axioms, so
using one *within its declared scope* is not a defect.

## Output — the only thing you return

Plain markdown. For each finding, one block:

```
### FINDING 1, 2, 3, ... — FATAL or NONFATAL — location: title / Statement / [L#] / step X.Y / Remark
CLAIM AS WRITTEN: "<verbatim quote of the offending text>"
WHY IT FAILS: <the concrete false claim, unlicensed inference, missing
hypothesis, or inaccurate citation — with the verbatim dependency text that
does or does not license it>
WHAT WOULD FIX IT: <the smallest correction you can name, or "not obvious">
```

If, having genuinely tried to refute it, you find nothing fatal, say so plainly
and list what you checked. Finish with one line: `N fatal, M nonfatal`.

A confident empty reading is worse than useless here. Either name a concrete
defect with its quotation, or state clearly that you could not find one.


---

# This dispatch

# Adversarial proof reading — `lem-subnets-preserve-eventual-properties-and-limits`

## The item under review, in full

`items/lem-subnets-preserve-eventual-properties-and-limits.md`

```markdown
---
id: lem-subnets-preserve-eventual-properties-and-limits
kind: lemma
title: "Subnets preserve eventual properties and every limit of a net"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-subnet, def-net-convergence-and-cluster-point, def-net-eventually-and-frequently]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Schlumprecht, Math 655 notes"
      url: "https://people.tamu.edu/~t-schlumprecht/course_notes_math655_23c.pdf"
    - title: "Net (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Net_(mathematics)"
    - title: "Subnet (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subnet_(mathematics)"
pipeline_run: null
---

## Statement

If $y$ is a subnet of a net $x$, then every subset in which $x$ is eventually contained is one in which $y$ is eventually contained. Consequently every limit of $x$ is a limit of $y$.

## Facts & Assumptions

**Given:** A subnet $y_e=x_{\phi(e)}$ of $x_d$.

[A1] Eventual cofinality says that for every $d_0\in D$ some $e_0\in E$ has $e\ge e_0\Rightarrow\phi(e)\ge d_0$ ([[def-subnet]]).

[A2] A net converges to $p$ exactly when it is eventually in every neighbourhood of $p$ ([[def-net-convergence-and-cluster-point]]).



## Proof

**Proof technique:** direct.

1.1 Suppose $x$ is eventually in $S\subseteq X$, and choose $d_0$ such that $d\ge d_0$ implies $x_d\in S$. [given]

2.1 Choose $e_0$ from [A1] for this $d_0$; then $e\ge e_0$ gives $y_e=x_{\phi(e)}\in S$. Thus $y$ is eventually in $S$. [step 1.1, A1]

3.1 If $x$ converges to $p$, apply step 2.1 to each neighbourhood of $p$ using [A2]; then $y$ is eventually in every such neighbourhood and converges to $p$. [step 2.1, A2] ∎
```

## The dependencies it declares, quoted verbatim from disk

Each block below is the claim-bearing text of one declared dependency.
These are the only statements the item is entitled to use. If a step
needs more than the text below gives, that is the defect — quote the
dependency text and show exactly what it fails to supply.

### `def-subnet` — definition — Subnet via an eventually cofinal index map

(statement provenance: ai-altered)

### Definition

Let $x:D\to X$ be a net. A net $y:E\to X$ is a **subnet** of $x$ if $E$ is a directed preorder and there is a map $\phi:E\to D$ such that $y_e=x_{\phi(e)}$ for every $e\in E$ and

$$\text{for every }d\in D\text{ there is }e_0\in E\text{ such that }e\ge e_0\Longrightarrow\phi(e)\ge d.$$

The displayed condition says that $\phi$ is **eventually cofinal**. No order-preservation condition is imposed on $\phi$.

### `def-net-convergence-and-cluster-point` — definition — Convergence and cluster points of a net in a topological space

(statement provenance: literature-derived)

### Definition

Let $x:D\to X$ be a net in a topological space $X$ and let $p\in X$.

- $x$ **converges to $p$**, written $x_d\to p$, if it is eventually in every neighbourhood of $p$ ([[def-neighbourhood-top]]).
- $p$ is a **cluster point** of $x$ if $x$ is frequently in every neighbourhood of $p$.

Convergence implies being a cluster point. If $x$ is eventually in a neighbourhood
$N$ after $d_0$, then for an arbitrary threshold $d$ choose a common upper bound
$e\ge d,d_0$; one has $x_e\in N$, so $x$ is frequently in $N$.

### `def-net-eventually-and-frequently` — definition — A net is eventually or frequently in a subset of its codomain

(statement provenance: literature-derived)

### Definition

Let $x:D\to X$ be a net ([[def-directed-set-and-net]]) and let $S\subseteq X$.

- $x$ is **eventually in $S$** if some $d_0\in D$ satisfies $x_d\in S$ for every $d\ge d_0$.
- $x$ is **frequently in $S$** if, for every $d_0\in D$, there is $d\ge d_0$ with $x_d\in S$.

The net is frequently in $S$ exactly when it is not eventually in $X\setminus S$: negating the first displayed existential-universal condition gives the second one.

## What to return

Read `lem-subnets-preserve-eventual-properties-and-limits` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
