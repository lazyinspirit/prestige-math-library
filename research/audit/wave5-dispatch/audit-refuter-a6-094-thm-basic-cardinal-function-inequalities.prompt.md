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

# Adversarial proof reading — `thm-basic-cardinal-function-inequalities`

## The item under review, in full

`items/thm-basic-cardinal-function-inequalities.md`

```markdown
---
id: thm-basic-cardinal-function-inequalities
kind: theorem
title: "Under choice, $c(X)\\le d(X)\\le w(X)$ and $\\chi(X),L(X)\\le w(X)$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-weight-density-and-character, def-lindelof-degree-and-cellularity, lem-weight-is-well-defined, lem-density-is-well-defined, lem-character-is-well-defined, lem-lindelof-degree-is-well-defined, lem-cellularity-is-well-defined, def-axiom-of-choice]
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
    - title: "D. H. Fremlin, Measure Theory, Chapter 5A"
      url: "https://www1.essex.ac.uk/maths/people/fremlin/chap5a.pdf"
pipeline_run: null
---
## Statement

Assuming choice, $c(X)\le d(X)\le w(X)$ and $\chi(X),L(X)\le w(X)$.

## Facts & Assumptions

**Given:** A topological space $X$, the Axiom of Choice, a basis $\mathcal B$ of cardinality $w(X)$, and a dense subset $D$ of cardinality $d(X)$.

[L1] The raw definitions make $w(X)$ and $d(X)$ the least cardinalities of a basis and a dense subset, make $\chi(X)$ the supremum of the local characters, make $L(X)$ the least cardinal bounding subcovers, and make $c(X)$ the supremum of sizes of pairwise-disjoint nonempty open families ([[def-weight-density-and-character]], [[def-lindelof-degree-and-cellularity]]).

[A1] The Axiom of Choice chooses one member from each nonempty set in a family ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Choose one point from each nonempty $B\in\mathcal B$; the chosen set meets every nonempty open set because $\mathcal B$ is a basis, so it is dense and has cardinality at most $|\mathcal B|$. [A1, L1]

1.2 For each $x\in X$, the subfamily $\{B\in\mathcal B:x\in B\}$ is a local base at $x$ and has cardinality at most $|\mathcal B|$, so every local character, and therefore its supremum $\chi(X)$, is at most $w(X)$. [L1]

1.3 Given an open cover, choose for each $B\in\mathcal B$ that lies in a cover member one such member; these at most $|\mathcal B|$ chosen sets still cover $X$, so $L(X)\le w(X)$. [A1, L1]

1.4 For a pairwise-disjoint family $\mathcal U$ of nonempty open sets, choose a point of $D\cap U$ for each $U\in\mathcal U$; disjointness makes this assignment injective into $D$, so $|\mathcal U|\le d(X)$ and $c(X)\le d(X)$. [A1, L1]

2.1 Steps 1.1, 1.2, 1.3 and 1.4 give $c(X)\le d(X)\le w(X)$ and $\chi(X),L(X)\le w(X)$. [step 1.1, step 1.2, step 1.3, step 1.4] ∎
```

## The dependencies it declares, quoted verbatim from disk

Each block below is the claim-bearing text of one declared dependency.
These are the only statements the item is entitled to use. If a step
needs more than the text below gives, that is the defect — quote the
dependency text and show exactly what it fails to supply.

### `def-weight-density-and-character` — definition — Under choice, weight $w(X)$, density $d(X)$, local character $\\chi(x,X)$, and character $\\chi(X)$ as raw cardinal minima and a supremum

(statement provenance: ai-altered)

### Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]) and let $X$ be a topological space. The **weight** $w(X)$ is the least cardinality of a basis for $X$, and the **density** $d(X)$ is the least cardinality of a dense subset of $X$ ([[def-topology-basis-subbasis]], [[def-dense-top]], [[def-cardinal]]).

For $x\in X$, the **local character** $\chi(x,X)$ is the least cardinality of a neighbourhood base at $x$ ([[def-neighbourhood-top]]). The **character** is the raw cardinal supremum
$$\chi(X)=\sup\{\chi(x,X):x\in X\}.$$

No $\aleph_0$ normalization is imposed. In particular a one-member local base has cardinality $1$, not $\aleph_0$. The forward lemmas named in `justified_by` establish the asserted minima and supremum.

### `def-lindelof-degree-and-cellularity` — definition — Under choice, Lindelöf degree $L(X)$ and cellularity $c(X)$ as raw cardinal functions

(statement provenance: ai-altered)

### Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]). The **Lindelöf degree** $L(X)$ is the least cardinal $\kappa$ such that every open cover of $X$ has a subcover of cardinality at most $\kappa$. The **cellularity** $c(X)$ is the cardinal supremum of the cardinalities of pairwise-disjoint families of nonempty open subsets of $X$.

These are raw cardinal functions. Thus finite covers and finite cellular families retain their finite cardinalities. Their well-definedness is supplied by the forward lemmas named in `justified_by`.

### `lem-weight-is-well-defined` — lemma — Under choice, $w(X)$ is a well-defined cardinal

(statement provenance: ai-altered)

### Statement

Assuming choice, the collection of cardinalities of bases for $X$ is nonempty and has a least member. Hence $w(X)$ is well-defined.

### `lem-density-is-well-defined` — lemma — Under choice, $d(X)$ is a well-defined cardinal

(statement provenance: ai-altered)

### Statement

Assuming choice, $d(X)$ is a well-defined cardinal.

### `lem-character-is-well-defined` — lemma — Under choice, $\\chi(x,X)$ and $\\chi(X)$ are well-defined cardinals

(statement provenance: ai-altered)

### Statement

Assuming choice, every $\chi(x,X)$ and the raw supremum $\chi(X)$ are well-defined cardinals.

### `lem-lindelof-degree-is-well-defined` — lemma — Under choice, $L(X)$ is a well-defined cardinal

(statement provenance: ai-altered)

### Statement

Assuming choice, $L(X)$ is a well-defined cardinal.

### `lem-cellularity-is-well-defined` — lemma — Under choice, $c(X)$ is a well-defined cardinal

(statement provenance: ai-altered)

### Statement

Assuming choice, $c(X)$ is a well-defined cardinal.

### `def-axiom-of-choice` — definition — The Axiom of Choice

(statement provenance: literature-derived)

### Definition

The **Axiom of Choice** (AC) is the following statement.

> Every family of nonempty sets has a choice function
> ([[def-choice-function]]).

Written out: for every set $\mathcal{F}$ all of whose members are nonempty,
there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for
all $S \in \mathcal{F}$.

An equivalent formulation, immediate from the definition of the Cartesian
product, is that a product of nonempty sets is nonempty: if $X_i \ne \emptyset$
for every $i \in I$, then $\prod_{i \in I} X_i \ne \emptyset$.

## What to return

Read `thm-basic-cardinal-function-inequalities` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
