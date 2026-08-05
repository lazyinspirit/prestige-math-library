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

# Adversarial proof reading — `prop-continuous-image-density-and-lindelof-degree`

## The item under review, in full

`items/prop-continuous-image-density-and-lindelof-degree.md`

```markdown
---
id: prop-continuous-image-density-and-lindelof-degree
kind: proposition
title: "Under choice, a continuous surjection does not increase density or Lindelöf degree"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-weight-density-and-character, def-lindelof-degree-and-cellularity, def-continuous-map-top, thm-continuity-characterisations-top, lem-density-is-well-defined, lem-lindelof-degree-is-well-defined, def-axiom-of-choice]
aliases: []
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
Assume the Axiom of Choice. If $f:X\to Y$ is continuous and onto, then
$d(Y)\le d(X)$ and $L(Y)\le L(X)$.
## Facts & Assumptions
**Given:** The Axiom of Choice and a continuous surjection $f:X\to Y$ ([[def-axiom-of-choice]]).

[L1] A continuous map has open preimages of open sets ([[def-continuous-map-top]], [[thm-continuity-characterisations-top]]).

[L2] The least dense-set cardinality $d(Z)$ and the least cardinal bounding subcovers $L(Z)$ exist for every topological space $Z$ ([[lem-density-is-well-defined]], [[lem-lindelof-degree-is-well-defined]]).
## Proof

**Proof technique:** direct.

1.1 If $D\subseteq X$ is dense, then $f[D]$ is dense in $Y$: a nonempty open $V\subseteq Y$ has nonempty open preimage by surjectivity and [L1], so that preimage meets $D$ and $V$ meets $f[D]$. [L1]

1.2 For an open cover $\mathcal U$ of $Y$, the family $\{f^{-1}[U]:U\in\mathcal U\}$ is an open cover of $X$; a subfamily indexed by at most $L(X)$ members covers $X$, and the corresponding members of $\mathcal U$ cover $Y$ by surjectivity. [L1, L2]

2.1 Taking $D$ with $|D|=d(X)$, step 1.1 gives a dense subset of $Y$ of cardinality at most $d(X)$; hence $d(Y)\le d(X)$ by [L2]. [step 1.1, L2]

3.1 Step 1.2 gives $L(Y)\le L(X)$ by [L2], and together with step 2.1 this proves both inequalities. [step 2.1, step 1.2, L2] ∎
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

### `def-continuous-map-top` — definition — Continuity of a map of topological spaces at a point and globally

(statement provenance: ai-altered)

### Definition

Let $(X, \mathcal{T}_X)$ and $(Y, \mathcal{T}_Y)$ be topological spaces
([[def-topological-space]]), let $f : X \to Y$ be a function and let $x \in X$.
Neighbourhoods are as in [[def-neighbourhood-top]].

$f$ is **continuous at $x$** if for every neighbourhood $V$ of $f(x)$ in $Y$ the
preimage $f^{-1}[V]$ is a neighbourhood of $x$ in $X$.

$f$ is **continuous** if it is continuous at every point of $X$.

**The same condition with open sets only.** $f$ is continuous at $x$ if and only
if for every open $V \subseteq Y$ with $f(x) \in V$ there is an open
$U \subseteq X$ with $x \in U$ and $f[U] \subseteq V$. Indeed, if $f$ is
continuous at $x$ and $V$ is such an open set, then $V$ is a neighbourhood of
$f(x)$, so $f^{-1}[V]$ is a neighbourhood of $x$ and contains an open $U \ni x$,
which satisfies $f[U] \subseteq V$. Conversely, given the displayed condition and
a neighbourhood $V$ of $f(x)$, fix open $V_0$ with $f(x) \in V_0 \subseteq V$ and
then open $U \ni x$ with $f[U] \subseteq V_0$; then $x \in U \subseteq f^{-1}[V_0] \subseteq f^{-1}[V]$,
so $f^{-1}[V]$ is a neighbourhood of $x$. Both forms are used below and are the
same statement written twice.

**Preimage, not image.** $f^{-1}[V] = \{\, x \in X : f(x) \in V \,\}$
is the preimage in the sense of [[def-injection-surjection-bijection]] and is
defined for every function, invertible or not; no inverse function is being
asserted to exist. Continuity is a condition on preimages throughout, and the
corresponding conditions on images define the *open* and *closed* maps of a later
item, which are different notions.

### `thm-continuity-characterisations-top` — theorem — For a map of spaces the following agree: continuity at every point, preimages of open sets open, preimages of closed sets closed, preimages of subbasic open sets open, and $f(\\overline{A}) \\subseteq \\overline{f(A)}$

(statement provenance: ai-altered)

### Statement

Let $(X, \mathcal{T}_X)$ and $(Y, \mathcal{T}_Y)$ be topological spaces, let
$f : X \to Y$ be a function, and let $\mathcal{S}$ be a subbasis for
$\mathcal{T}_Y$ ([[def-topology-basis-subbasis]]). The following five conditions
are equivalent.

- **(a)** $f$ is continuous at every point of $X$ ([[def-continuous-map-top]]).
- **(b)** $f^{-1}[V]$ is open in $X$ for every open $V \subseteq Y$.
- **(c)** $f^{-1}[F]$ is closed in $X$ for every closed $F \subseteq Y$.
- **(d)** $f^{-1}[S]$ is open in $X$ for every $S \in \mathcal{S}$.
- **(e)** $f[\overline{A}] \subseteq \overline{f[A]}$ for every $A \subseteq X$,
  closures being taken in $X$ and in $Y$ respectively
  ([[def-interior-closure-boundary-top]]).

Condition (d) is what makes continuity checkable against a generating family
rather than against every open set, and it holds for a *basis* as well, a basis
being in particular a subbasis for the topology it generates.

### `lem-density-is-well-defined` — lemma — Under choice, $d(X)$ is a well-defined cardinal

(statement provenance: ai-altered)

### Statement

Assuming choice, $d(X)$ is a well-defined cardinal.

### `lem-lindelof-degree-is-well-defined` — lemma — Under choice, $L(X)$ is a well-defined cardinal

(statement provenance: ai-altered)

### Statement

Assuming choice, $L(X)$ is a well-defined cardinal.

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

Read `prop-continuous-image-density-and-lindelof-degree` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
