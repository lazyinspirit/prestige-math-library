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

# Adversarial proof reading — `thm-r-is-not-homeomorphic-to-higher-dimensional-euclidean-space`

## The item under review, in full

`items/thm-r-is-not-homeomorphic-to-higher-dimensional-euclidean-space.md`

```markdown
---
id: thm-r-is-not-homeomorphic-to-higher-dimensional-euclidean-space
kind: theorem
title: "$\\mathbb{R}$ is not homeomorphic to $\\mathbb{R}^n$ for any $n\\ge2$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-punctured-rn-is-polygonally-connected, thm-path-connected-implies-connected, cor-connected-subsets-of-the-line, thm-continuous-image-of-a-connected-space, def-homeomorphism-and-open-maps]
aliases: []
landmark: true
proof_strategy: contradiction
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
    - title: "Invariance of domain"
      url: "https://en.wikipedia.org/wiki/Invariance_of_domain"
pipeline_run: null
---

## Statement

For every $n\ge2$, there is no homeomorphism $\mathbb R\to\mathbb R^n$.

## Facts & Assumptions

**Given:** $n\ge2$.

[L1] The punctured space $\mathbb R^n\setminus\{0\}$ is polygonally connected, hence connected ([[lem-punctured-rn-is-polygonally-connected]], [[thm-path-connected-implies-connected]]).

[L2] A continuous image of a connected space is connected ([[thm-continuous-image-of-a-connected-space]]).

[L3] A connected subset of $\mathbb R$ is order-convex ([[cor-connected-subsets-of-the-line]]).

[L4] A homeomorphism is a continuous bijection with continuous inverse ([[def-homeomorphism-and-open-maps]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose $h:\mathbb R\to\mathbb R^n$ is a homeomorphism, and put $a:=h^{-1}(0)$. [assume-contra, L4, choose]

1.2 Restricting $h^{-1}$ to $\mathbb R^n\setminus\{0\}$ gives a continuous surjection onto $\mathbb R\setminus\{a\}$. The source is connected by [L1], so the target is connected by [L2]. [L1, L2, L4]

1.3 Choose $a-1<a<a+1$. Both endpoints lie in $\mathbb R\setminus\{a\}$, but $a$ does not, so this subset is not order-convex and therefore not connected by [L3]. [L3]

2.1 Steps 1.2 and 1.3 contradict one another. Thus no such homeomorphism exists. [step 1.2, step 1.3, discharge-contradiction] ∎
```

## The dependencies it declares, quoted verbatim from disk

Each block below is the claim-bearing text of one declared dependency.
These are the only statements the item is entitled to use. If a step
needs more than the text below gives, that is the defect — quote the
dependency text and show exactly what it fails to supply.

### `lem-punctured-rn-is-polygonally-connected` — lemma — For $n\\ge2$, the punctured space $\\mathbb{R}^n\\setminus\\{0\\}$ is polygonally connected

(statement provenance: ai-altered)

### Statement

For $n\ge2$, $\mathbb R^n\setminus\{0\}$ is polygonally connected.

### `thm-path-connected-implies-connected` — theorem — Every path-connected space is connected, and every path component lies inside a component

(statement provenance: ai-altered)

### Statement

Let $X$ be a topological space, with subsets carrying the subspace topology
([[def-subspace-topology-top]]). Then:

1. **The unit interval is connected.** $I = [0,1]$ is a connected subset of
   $\mathbb{R}$, hence a connected space.
2. **Path-connected implies connected.** If $X$ is path-connected
   ([[def-path-connected]]) then $X$ is connected ([[def-connected-space]]). The
   same holds for a subset: a path-connected subset of $X$ is a connected subset
   of $X$.
3. **Path components refine components.** For every $x \in X$,
   $$P(x) \;\subseteq\; C(x),$$
   the path component inside the component
   ([[def-connected-component-and-quasicomponent]]). So every component is a
   union of path components.

**No converse is claimed.** Claim 2 is one-directional and claim 3 is an
inclusion; the question of when a connected space is path-connected is not
settled here.

**No choice principle is used.** The proof takes the union over the **set of all**
paths issuing from a fixed point rather than selecting one path per endpoint,
which is what an appeal to the Axiom of Choice would be. The point at which the
temptation arises is flagged in the remarks.

### `cor-connected-subsets-of-the-line` — corollary — The connected subspaces of $\\mathbb{R}$ with its usual topology are exactly the order-convex subsets, the published characterisation transported by the identification of the two descriptions of \"open in $\\mathbb{R}$\"

(statement provenance: ai-altered)

### Statement

Give $\mathbb{R}$ its usual topology, the metric topology of
$d_{\mathbb{R}}(s,t) = |s-t|$ ([[lem-real-line-is-a-metric-space]],
[[def-metric-topology]], [[def-metrizable-space]]), and let $E \subseteq
\mathbb{R}$ carry the subspace topology ([[def-subspace-topology-top]]). Then $E$
is a connected subset of $\mathbb{R}$ ([[def-connected-space]]) if and only if
$E$ is **order-convex** ([[def-interval]],
[[def-order-topology-on-a-linearly-ordered-set]]), that is

$$x, z \in E \text{ and } x \le w \le z \;\Longrightarrow\; w \in E .$$

In particular each of the nine interval forms of [[def-interval]] is connected,
and so are $\varnothing$ and every singleton.

**What has to be checked, and it is not the mathematics.** The characterisation
itself is the published [[thm-connected-subsets-of-r-are-intervals]], which is
stated for the connectedness of [[def-connected-r]] — a condition phrased with
the open sets of [[def-open-and-closed-in-r]] and the closure of
[[def-interior-closure-boundary-r]]. The present corollary says the same thing
for the connectedness of [[def-connected-space]] in the topological space
$\mathbb{R}$. What licenses the transport is that the two descriptions of "open
in $\mathbb{R}$" are the same condition word for word, which is unfolded in the
proof rather than quoted.

### `thm-continuous-image-of-a-connected-space` — theorem — A continuous image of a connected space is connected, and connectedness is a topological property

(statement provenance: ai-altered)

### Statement

Let $X$ and $Y$ be topological spaces and let $f : X \to Y$ be continuous
([[def-continuous-map-top]]). Subsets carry the subspace topology
([[def-subspace-topology-top]]). Then:

1. **Images.** If $A \subseteq X$ is a connected subset of $X$
   ([[def-connected-space]]) then $f[A]$ is a connected subset of $Y$. In
   particular, if $X$ is connected then $f[X]$ is connected, and if $f$ is
   moreover surjective then $Y$ is connected.
2. **Topological invariance.** If $h : X \to Y$ is a homeomorphism
   ([[def-homeomorphism-and-open-maps]]) then $X$ is connected if and only if
   $Y$ is. So connectedness is a **topological property**.

Nothing is assumed about $f$ beyond continuity: it need not be injective, open,
closed or surjective. Note the direction — a continuous **image** of a connected
space is connected, while a continuous **preimage** need not be, since a constant
map from a disconnected space is continuous.

### `def-homeomorphism-and-open-maps` — definition — Homeomorphism, open map, closed map, embedding, and what it means for a property to be topological

(statement provenance: ai-altered)

### Definition

Let $(X, \mathcal{T}_X)$ and $(Y, \mathcal{T}_Y)$ be topological spaces and let
$f : X \to Y$ be a function. Continuity is as in [[def-continuous-map-top]],
injections, surjections and bijections as in
[[def-injection-surjection-bijection]].

- $f$ is an **open map** if $f[U]$ is open in $Y$ for every open $U \subseteq X$.
- $f$ is a **closed map** if $f[F]$ is closed in $Y$ for every closed
  $F \subseteq X$.
- $f$ is a **homeomorphism** if $f$ is a continuous bijection whose inverse
  $f^{-1} : Y \to X$ is also continuous. The spaces are **homeomorphic**, written
  $X \cong Y$, when a homeomorphism $X \to Y$ exists.
- $f$ is an **embedding** if $f$ is injective and the corestriction
  $f_0 : X \to f[X]$, $f_0(x) = f(x)$, is a homeomorphism onto $f[X]$ carrying
  the subspace topology inherited from $Y$ ([[def-subspace-topology-top]]).

**The inverse in the third clause exists because $f$ is a bijection**, and it is
the unique two-sided inverse ([[def-injection-surjection-bijection]]); no choice
principle is involved. Continuity of $f^{-1}$ is a genuine additional demand: a
continuous bijection need not be a homeomorphism, and this page records that
failure as a false statement with a two-point witness.

**Open, closed and homeomorphism are three different conditions.** A
homeomorphism is continuous by definition, but an open map need not be continuous
and a closed map need not be continuous; and continuity implies neither openness
nor closedness. An open map need
not be closed and a closed map need not be open, and Sierpinski space
$S = \{a,b\}$ with open point $b$ ([[def-standard-topologies]]) witnesses both
failures at once: the constant map $S \to S$ with value $b$ is open, since the
image of every nonempty set is the open set $\{b\}$, and is not closed, since the
image of the closed set $\{a\}$ is $\{b\}$, whose complement $\{a\}$ is not open;
the constant map with value $a$ is closed and not open by the same computation
read the other way. What is true
is that for a **continuous bijection** the three notions collapse: it is a
homeomorphism exactly when it is open, exactly when it is closed. That is proved
in the next item and is not assumed here.

**Topological properties.** A **property of topological spaces** is a condition
$P$ that is either true or false of each space. $P$ is a **topological property**
(one is also said to be *preserved by homeomorphism*, or *invariant*) when
$X \cong Y$ implies that $P(X)$ and $P(Y)$ have the same truth value. Since
$\cong$ is an equivalence relation on spaces — the identity is a homeomorphism,
inverses and composites of homeomorphisms are homeomorphisms, all three verified
in the next item — a topological property is exactly one that is constant on each
$\cong$-class.

**What a homeomorphism transports.** If $h : X \to Y$ is a homeomorphism then
$U \mapsto h[U]$ is a bijection from $\mathcal{T}_X$ onto $\mathcal{T}_Y$, with
inverse $V \mapsto h^{-1}[V]$: both maps are well defined because $h$ and
$h^{-1}$ are continuous, and they are mutually inverse because $h$ is a
bijection. So a homeomorphism is an isomorphism of the structure "a set together
with a distinguished family of subsets", and every notion defined from the open
sets alone — closed, closure, interior, boundary, dense, convergence of
sequences, continuity of maps into and out of the space — is carried across by
it. Anything defined from extra data, such as a metric or an order, is not, and
that distinction is exactly what the phrase *topological property* is for.

## What to return

Read `thm-r-is-not-homeomorphic-to-higher-dimensional-euclidean-space` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
