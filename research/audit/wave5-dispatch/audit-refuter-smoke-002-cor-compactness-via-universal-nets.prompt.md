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

# Adversarial proof reading — `cor-compactness-via-universal-nets`

## The item under review, in full

`items/cor-compactness-via-universal-nets.md`

```markdown
---
id: cor-compactness-via-universal-nets
kind: corollary
title: "Assuming the ultrafilter lemma, a space is compact if and only if every universal net converges"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-every-net-has-a-universal-subnet, lem-universal-net-cluster-points-are-limits, thm-compactness-via-nets-filters-and-ultrafilters, thm-net-cluster-point-iff-convergent-subnet]
aliases: []
landmark: true
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
    - title: "WVU Math 581 Topology I"
      url: "https://math.wvu.edu/~jwojciec/teaching_files/2024_Spring-581/index.html"
    - title: "Net (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Net_(mathematics)"
    - title: "Boolean prime ideal theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Boolean_prime_ideal_theorem"
pipeline_run: null
---

## Statement

**Assume the ultrafilter lemma.** A topological space is compact if and only if every universal net in it converges.

## Facts & Assumptions

**Given:** A topological space $X$ and the ultrafilter lemma.

[L1] Compactness is equivalent to every net having a cluster point ([[thm-compactness-via-nets-filters-and-ultrafilters]]).

[L2] Every net has a universal subnet ([[lem-every-net-has-a-universal-subnet]]), and a cluster point of a universal net is a limit ([[lem-universal-net-cluster-points-are-limits]]).

[L3] A point is a cluster point of a net exactly when some subnet converges to it ([[thm-net-cluster-point-iff-convergent-subnet]]).



## Proof

**Proof technique:** direct.

1.1 If $X$ is compact, a universal net has a cluster point by [L1], hence converges by [L2]. [L1, L2]

1.2 Conversely, suppose every universal net converges. Every net has a universal subnet by [L2], which then converges; its limit is a cluster point of the original net by [L3]. Thus every net has a cluster point. [L2, L3]

2.1 By [L1], this makes $X$ compact. [step 1.2, L1] ∎
```

## The dependencies it declares, quoted verbatim from disk

Each block below is the claim-bearing text of one declared dependency.
These are the only statements the item is entitled to use. If a step
needs more than the text below gives, that is the defect — quote the
dependency text and show exactly what it fails to supply.

### `lem-every-net-has-a-universal-subnet` — lemma — Assuming the ultrafilter lemma, every net has a universal subnet

(statement provenance: ai-altered)

### Statement

**Assume the ultrafilter lemma.** Every net has a universal subnet.

### `lem-universal-net-cluster-points-are-limits` — lemma — Every cluster point of a universal net is a limit of that net

(statement provenance: ai-altered)

### Statement

Every cluster point of a universal net is a limit of that net.

### `thm-compactness-via-nets-filters-and-ultrafilters` — theorem — Assuming the ultrafilter lemma, compactness is equivalent to every net having a cluster point, every net having a convergent subnet, every filter having a cluster point, and every ultrafilter converging

(statement provenance: ai-altered)

### Statement

**Assume the ultrafilter lemma.** For a topological space $X$, the following are equivalent:

1. $X$ is compact;
2. every net in $X$ has a cluster point;
3. every net in $X$ has a convergent subnet;
4. every filter on $X$ has a cluster point;
5. every ultrafilter on $X$ converges.

### `thm-net-cluster-point-iff-convergent-subnet` — theorem — A point is a cluster point of a net if and only if some subnet converges to it

(statement provenance: literature-derived)

### Statement

For a net $x:D\to X$ and $p\in X$, $p$ is a cluster point of $x$ if and only if $x$ has a subnet converging to $p$.

## What to return

Read `cor-compactness-via-universal-nets` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
