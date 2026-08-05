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

# Adversarial proof reading — `thm-metric-spaces-are-tychonoff-and-perfectly-normal`

## The item under review, in full

`items/thm-metric-spaces-are-tychonoff-and-perfectly-normal.md`

```markdown
---
id: thm-metric-spaces-are-tychonoff-and-perfectly-normal
kind: theorem
title: "In a metric space every closed set is a zero set and a $G_\\delta$, and the distance function separates a point from a closed set, so every metrizable space is Tychonoff and perfectly normal"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-metric-spaces-are-completely-normal, def-completely-regular-and-tychonoff-spaces,
       def-completely-normal-and-perfectly-normal-spaces, def-zero-sets-and-cozero-sets,
       def-g-delta-and-f-sigma-in-a-topological-space, def-metric-bounded-diameter,
       lem-distance-to-set-is-lipschitz, thm-metric-closure-characterisation,
       def-metric-continuity, thm-metric-continuity-characterisations,
       def-metrizable-space, def-metric-space, def-metric-topology,
       def-canonical-natural, cor-archimedean-reciprocal, lem-nat-nonzero-is-successor,
       def-max-min, lem-finite-set-has-max, def-hausdorff-space,
       lem-urysohn-sits-between-hausdorff-and-regular-plus-t1, def-t0-and-t1-spaces,
       def-interval, def-topological-space]
justified_by: []
aliases: []
landmark: true
short: "metric spaces are Tychonoff and perfectly normal"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Normal space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normal_space"
    - title: "Tychonoff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Tychonoff_space"
    - title: "J. Munkres, Topology, 2nd ed., §33"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "Metrizable space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metrizable_space"
    - title: "Gδ set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/G%CE%B4_set"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]) with its metric topology
([[def-metric-topology]]), and write $1/(n+1)$ for the inverse of the canonical
natural $\iota(n+1)$ of $\mathbb{R}$ ([[def-canonical-natural]]). Then:

1. **Every closed set is a zero set.** For closed $C \subseteq X$ there is a
   continuous $f : X \to \mathbb{R}$ with $C = Z(f)$
   ([[def-zero-sets-and-cozero-sets]]); for $C \ne \varnothing$ one may take
   $f(x) = d(x,C)$ ([[def-metric-bounded-diameter]]), and for $C = \varnothing$
   the constant function $1$.
2. **Every closed set is a $G_\delta$**
   ([[def-g-delta-and-f-sigma-in-a-topological-space]]): for $C \ne \varnothing$,
   $$C \;=\; \bigcap_{n \in \mathbb{N}} \{\, x \in X : d(x,C) < 1/(n+1) \,\},$$
   an intersection of open sets, and $\varnothing$ is open hence a $G_\delta$.
3. **$X$ is completely regular** ([[def-completely-regular-and-tychonoff-spaces]]):
   for closed $C$ and $x_0 \notin C$ the function
   $f(x) := \min\{1,\ d(x,C)/r\}$ with $r := d(x_0,C)$ is continuous, takes the
   value $1$ at $x_0$ and the value $0$ on $C$, when $C \ne \varnothing$; for
   $C = \varnothing$ the constant function $1$ serves.
4. Consequently every metrizable space ([[def-metrizable-space]]) is **Tychonoff**
   and **perfectly normal**, and hence $T_6$, $T_5$, $T_4$, $T_{3\frac12}$,
   $T_3$, $T_{2\frac12}$, $T_2$, $T_1$ and $T_0$.

**No choice principle is used anywhere below.**

## Facts & Assumptions

**Given:** A metric space $(X,d)$, a closed set $C \subseteq X$, a point $x_0 \in X \setminus C$, and $\mathbb{R}$ with its usual topology.

[L1] For nonempty $S \subseteq X$ the distance $d(x,S)$ is defined, is $\ge 0$, and $\overline{S} = \{\, x : d(x,S) = 0 \,\}$ ([[def-metric-bounded-diameter]], [[thm-metric-closure-characterisation]], claim 1).

[L2] $|d(x,S) - d(y,S)| \le d(x,y)$ for nonempty $S$ ([[lem-distance-to-set-is-lipschitz]]).

[L3] A map between metric spaces satisfying an inequality $|g(x) - g(y)| \le L\, d(x,y)$ with $L > 0$ is continuous in the $\varepsilon$-$\delta$ sense, by $\delta := \varepsilon / L$, and is therefore continuous as a map of topological spaces ([[def-metric-continuity]], [[thm-metric-continuity-characterisations]], clause (b), [[def-metrizable-space]]).

[L4] A set is closed exactly when it equals its closure ([[thm-metric-closure-characterisation]], claim 3); $\varnothing$ and $X$ are open ([[def-metric-topology]], [[def-topological-space]]).

[L5] For every real $\varepsilon > 0$ there is a natural $k \ge 1$ with $1/k < \varepsilon$, and every nonzero natural is a successor, so $k = n+1$ for some $n \in \mathbb{N}$ ([[cor-archimedean-reciprocal]], [[lem-nat-nonzero-is-successor]], [[def-canonical-natural]]).

[L6] A two-element set of reals has a maximum and a minimum, each of which is one of the two elements ([[def-max-min]], [[lem-finite-set-has-max]]); and $[0,1]$ is the set of reals $t$ with $0 \le t \le 1$ ([[def-interval]]).

[L7] Every metrizable space is Hausdorff, hence $T_1$ and $T_0$ ([[def-metrizable-space]], [[def-hausdorff-space]], [[lem-urysohn-sits-between-hausdorff-and-regular-plus-t1]], [[def-t0-and-t1-spaces]]).

[L8] Every metric space is completely normal, hence normal ([[thm-metric-spaces-are-completely-normal]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $C \ne \varnothing$ and put $g(x) := d(x,C)$; then $g$ is continuous by [L2] and [L3] with $L = 1$. [L1, L2, L3, assume-hyp]

1.2 If $C = \varnothing$ then the constant function $1$ is continuous and has zero set $\varnothing = C$, since $1 \ne 0$. [L3, L4]

2.1 Under step 1.1: $Z(g) = \{\, x : d(x,C) = 0 \,\} = \overline{C} = C$, the last equality because $C$ is closed. [step 1.1, L1, L4]

2.2 Under step 1.1: for each $n$ the set $W_n := \{\, x : d(x,C) < 1/(n+1) \,\}$ is open, since for $x \in W_n$ and $t := 1/(n+1) - d(x,C) > 0$ any $y$ with $d(x,y) < t$ has $d(y,C) \le d(x,C) + d(x,y) < 1/(n+1)$ by [L2]. [step 1.1, L2]

3.1 By steps 2.1 and 1.2 every closed subset of $X$ is a zero set, which is claim 1. [step 2.1, step 1.2]

3.2 Under step 1.1: $C \subseteq \bigcap_n W_n$, since $d(x,C) = 0 < 1/(n+1)$ for $x \in C$ by [L1] and step 2.1. [step 2.1, step 2.2, L1]

3.3 Under step 1.1: if $x \notin C$ then $d(x,C) > 0$ by [L1] and step 2.1, so [L5] gives $n$ with $1/(n+1) < d(x,C)$ and hence $x \notin W_n$. [step 2.1, step 2.2, L1, L5]

3.4 Under step 1.1 with $x_0 \notin C$: $r := d(x_0,C) > 0$ by [L1] and step 2.1, and $f(x) := \min\{1,\ d(x,C)/r\}$ takes values in $[0,1]$ by [L1] and [L6]. [step 2.1, L1, L6]

4.1 Steps 3.2 and 3.3 give $C = \bigcap_n W_n$ for nonempty closed $C$, and $\varnothing$ is open hence a $G_\delta$ by [L4]; this is claim 2. [step 3.2, step 3.3, L4]

4.2 Under step 3.4: $|\min\{1,u\} - \min\{1,v\}| \le |u - v|$ for all reals $u,v$, since if both are at most $1$ the two sides are equal, if both exceed $1$ the left side is $0$, and if $u \le 1 < v$ then the left side is $1 - u$, which is at most $v - u$, the remaining case $v \le 1 < u$ being the same with $u$ and $v$ exchanged; hence $|f(x) - f(y)| \le |d(x,C) - d(y,C)|/r \le d(x,y)/r$ and $f$ is continuous by [L3] with $L = 1/r$. [step 3.4, L2, L3, L6]

4.3 Under step 3.4: $f(x_0) = \min\{1, r/r\} = \min\{1,1\} = 1$, and $f(y) = \min\{1, 0\} = 0$ for $y \in C$ since $d(y,C) = 0$. [step 3.4, L1, L6]

5.1 By steps 4.2 and 4.3, and by step 1.2 for the case $C = \varnothing$, the space $X$ is completely regular, which is claim 3. [step 1.2, step 4.2, step 4.3]

6.1 A metrizable space $Y$ is completely regular by step 5.1 applied to any inducing metric, and it is $T_1$ by [L7], so it is Tychonoff; it is normal by [L8] and every closed subset of it is a $G_\delta$ by step 4.1, so it is perfectly normal. [step 4.1, step 5.1, L7, L8]

7.1 Being perfectly normal and $T_1$, such a $Y$ is $T_6$; it is $T_5$ and $T_4$ by [L8] and $T_1$, it is $T_{3\frac12}$ by step 6.1, and it is $T_3$, $T_{2\frac12}$, $T_2$, $T_1$ and $T_0$ by the implications already proved on this page; this is claim 4. [step 6.1, L7, L8] ∎

## Remarks

- **Claim 1 is the sharp form and claim 2 is its shadow.** A zero set is always a $G_\delta$ ([[def-zero-sets-and-cozero-sets]]), so claim 2 follows from claim 1; it is proved separately here because the explicit presentation $\bigcap_n \{x : d(x,C) < 1/(n+1)\}$ is the one quoted later, and because it makes visible that the index runs from $n = 0$, where the radius is $1$.

- **The empty closed set is not a nuisance to be waved away.** $d(x,\varnothing)$ is undefined in this library, there being no infimum of the empty set ([[def-metric-bounded-diameter]]), so each of the three claims is discharged separately at $C = \varnothing$ by a constant function or by openness.

- **What this does *not* prove.** It says nothing about which non-metrizable spaces are perfectly normal, and it gives no metrization theorem in the other direction: exhibiting a metric is the only way a space is shown metrizable here ([[def-metrizable-space]]).
```

## The dependencies it declares, quoted verbatim from disk

Each block below is the claim-bearing text of one declared dependency.
These are the only statements the item is entitled to use. If a step
needs more than the text below gives, that is the defect — quote the
dependency text and show exactly what it fails to supply.

### `thm-metric-spaces-are-completely-normal` — theorem — In a metric space any two separated sets have disjoint open neighbourhoods, so every metrizable space is completely normal

(statement provenance: literature-derived)

### Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]) with its metric topology
([[def-metric-topology]]), and let $A, B \subseteq X$ be separated
([[def-separated-sets]]). Then there are disjoint open sets $U \supseteq A$ and
$V \supseteq B$.

Consequently every metrizable space ([[def-metrizable-space]]) is **completely
normal**, and hence normal
([[def-completely-normal-and-perfectly-normal-spaces]],
[[def-normal-and-t4-spaces]]).

**No choice principle is used.** The two open sets are unions indexed by the
points of $A$ and of $B$, and the radius attached to a point is the number
$d(a,B)/2$, which is determined by $a$, by $B$ and by $d$; nothing is selected.

### `def-completely-regular-and-tychonoff-spaces` — definition — Completely regular spaces and Tychonoff ($T_{3\\frac{1}{2}}$) spaces

(statement provenance: literature-derived)

### Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$[0,1] \subseteq \mathbb{R}$ carry the subspace topology of the usual topology of
$\mathbb{R}$ ([[def-interval]], [[def-subspace-topology-top]],
[[lem-real-line-is-a-metric-space]], [[def-metrizable-space]]).

- $X$ is **completely regular** when a point can be separated from a closed set
  not containing it *by a continuous function*: for every closed $C \subseteq X$
  and every $x_0 \in X \setminus C$ there is a continuous
  $f : X \to [0,1]$ ([[def-continuous-map-top]]) with
  $$f(x_0) = 1 \qquad \text{and} \qquad f(y) = 0 \ \text{ for every } y \in C .$$
- $X$ is **Tychonoff**, also written **$T_{3\frac{1}{2}}$** and *completely
  regular Hausdorff*, when it is completely regular **and** $T_1$
  ([[def-t0-and-t1-spaces]]).

The case $C = \varnothing$ is allowed and is satisfied by the constant function
$1$, which is continuous ([[def-zero-sets-and-cozero-sets]]); so the condition
hides no nonemptiness hypothesis.

**The same condition in the vocabulary of zero sets.** With $f$ as displayed,
$C \subseteq Z(f)$ and $x_0 \in \operatorname{coz}(f)$
([[def-zero-sets-and-cozero-sets]]), so complete regularity says: for every
closed $C$ and every $x_0 \notin C$ there is a continuous $f$ whose zero set
contains $C$ and whose cozero set contains $x_0$. In particular
$\operatorname{coz}(f)$ is an open set containing $x_0$ and disjoint from $C$;
that alone is weaker than regularity, and the passage from the function to two
*disjoint* open sets is the next item.

**The values $0$ and $1$ are a normalisation, not a restriction.** If
$g : X \to \mathbb{R}$ is continuous with $g(x_0) = a$, $g[C] = \{b\}$ and
$a \ne b$, then the condition above is met by a function built from $g$ by an
affine change of variable followed by truncation into $[0,1]$; this page never
needs that construction, because every function it builds is already normalised.
The *direction* of the normalisation is a genuine convention and is fixed here as
$f(x_0) = 1$ and $f[C] = \{0\}$, following the most common usage; some texts
write the reverse, and a reader must check which is meant before quoting a
formula.

**The convention fork over $T_1$ is the same one as for regularity.** *Completely
regular* names the function-separation condition alone, and Tychonoff names the
conjunction with $T_1$ ([[def-regular-and-t3-spaces]]). The indiscrete topology
on a two-point set ([[def-standard-topologies]]) is completely regular, its only
closed set disjoint from a point being $\varnothing$, and it is not $T_0$; so the
two halves are independent here as well.

### `def-completely-normal-and-perfectly-normal-spaces` — definition — Completely normal ($T_5$) and perfectly normal ($T_6$) spaces

(statement provenance: ai-altered)

### Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

- $X$ is **completely normal** when any two **separated** sets can be put into
  disjoint open sets: for all $A, B \subseteq X$ that are separated
  ([[def-separated-sets]]) there are $U, V \in \mathcal{T}$ with
  $$A \subseteq U, \qquad B \subseteq V, \qquad U \cap V = \varnothing .$$
  $X$ is **$T_5$** when it is completely normal and $T_1$
  ([[def-t0-and-t1-spaces]]).
- $X$ is **perfectly normal** when $X$ is normal ([[def-normal-and-t4-spaces]])
  **and** every closed subset of $X$ is a $G_\delta$
  ([[def-g-delta-and-f-sigma-in-a-topological-space]]). $X$ is **$T_6$** when it
  is perfectly normal and $T_1$.

As with *regular* and *normal*, neither adjective carries a $T_1$ hypothesis in
this library, and the numerals name the conjunctions.

**The $G_\delta$ condition, restated by complementation.** Every closed subset of
$X$ is a $G_\delta$ if and only if every open subset of $X$ is an $F_\sigma$,
because complementation exchanges the two classes and exchanges open with closed
([[def-g-delta-and-f-sigma-in-a-topological-space]]). Both forms are used below,
and the second is the one the implication $T_6 \Rightarrow T_5$ consumes.

**Complete normality really is stronger than normality, on its face.** Disjoint
closed sets are separated ([[def-separated-sets]]), so the complete-normality
condition applies in particular to them; that is the whole proof of the next
item. What complete normality adds is the ability to separate sets that are not
closed, for instance the two sets $(0,1)$ and $(1,2)$ of $\mathbb{R}$, which are
separated and neither of which is closed.

**A competing definition of *perfectly normal*, and why this library does not
use it.** Some texts define a perfectly normal space to be a normal space in
which every closed set is a **zero set** ([[def-zero-sets-and-cozero-sets]]).
That condition is equivalent to the one above, but the equivalence rests on
Urysohn's lemma, which is not available at this point in the reading order; the
$G_\delta$ form is therefore the definition here, and no statement on this page
asserts the equivalence. What *is* proved here is one direction in the metric
case, where the distance function exhibits every closed set simultaneously as a
zero set and as a $G_\delta$.

### `def-zero-sets-and-cozero-sets` — definition — Zero sets and cozero sets of continuous real-valued functions

(statement provenance: literature-derived)

### Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$\mathbb{R}$ carry its usual topology, the metric topology of
$d_{\mathbb{R}}(s,t) = |s-t|$ ([[lem-real-line-is-a-metric-space]],
[[def-metrizable-space]]). For a continuous $f : X \to \mathbb{R}$
([[def-continuous-map-top]]) put

$$Z(f) \;:=\; f^{-1}[\{0\}] \;=\; \{\, x \in X : f(x) = 0 \,\}, \qquad \operatorname{coz}(f) \;:=\; X \setminus Z(f) \;=\; \{\, x \in X : f(x) \ne 0 \,\} .$$

$Z(f)$ is the **zero set** of $f$ and $\operatorname{coz}(f)$ its **cozero set**.
A subset of $X$ is *a zero set of $X$* when it is $Z(f)$ for some continuous
$f : X \to \mathbb{R}$, and *a cozero set of $X$* when it is the complement of
one. Where the target is written $[0,1]$ ([[def-interval]]) with its subspace
topology ([[def-subspace-topology-top]]), a continuous map $X \to [0,1]$ is the
same thing as a continuous map $X \to \mathbb{R}$ with all values in $[0,1]$, by
the characteristic property of a map into a subspace recorded in
[[def-subspace-topology-top]]; so nothing below depends on which of the two
targets is written.

**Every zero set is closed and every cozero set is open.** $\{0\}$ is closed in
$\mathbb{R}$: its complement $\mathbb{R} \setminus \{0\}$ is open, since a point
$t \ne 0$ has the bounded open interval $(t - |t|,\ t + |t|)$ around it inside
$\mathbb{R} \setminus \{0\}$ ([[def-interval]], [[lem-real-line-is-a-metric-space]],
claim 3). The preimage of a closed set under a continuous map is closed
([[thm-continuity-characterisations-top]], clause (c)).

**Every zero set is a $G_\delta$ and every cozero set an $F_\sigma$**
([[def-g-delta-and-f-sigma-in-a-topological-space]]). Writing $\iota$ for the
canonical natural of $\mathbb{R}$ ([[def-canonical-natural]]), so that $1/(n+1)$
abbreviates the inverse of $\iota(n+1)$, put

$$V_n \;:=\; f^{-1}\big[\,(-1/(n+1),\ 1/(n+1))\,\big] \qquad (n \in \mathbb{N}).$$

Each $V_n$ is open, being the preimage of an open interval
([[thm-continuity-characterisations-top]], clause (b)). Clearly
$Z(f) \subseteq \bigcap_n V_n$. Conversely, if $f(x) \ne 0$ then
$\varepsilon := |f(x)| > 0$, and [[cor-archimedean-reciprocal]] gives a natural
$k \ge 1$ with $1/k < \varepsilon$; since $k \ne 0$ it is a successor,
$k = n+1$ with $n \in \mathbb{N}$ ([[lem-nat-nonzero-is-successor]]), so
$|f(x)| > 1/(n+1)$ and $x \notin V_n$. Hence $Z(f) = \bigcap_{n} V_n$ is a
$G_\delta$, and $\operatorname{coz}(f)$ is an $F_\sigma$ by complementation.

**Both extremes occur.** The constant maps are continuous, since the preimage of
any set under a constant map is $\varnothing$ or $X$
([[thm-continuity-characterisations-top]], clause (b)); so $X = Z(0)$ and
$\varnothing = Z(1)$ are zero sets of every space, where $0$ and $1$ denote the
corresponding constant maps.

### `def-g-delta-and-f-sigma-in-a-topological-space` — definition — $G_\\delta$ and $F_\\sigma$ subsets of a topological space, agreeing with the real-line notion

(statement provenance: literature-derived)

### Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$A \subseteq X$.

- $A$ is a **$G_\delta$ set of $X$** when there is a sequence
  $(V_n)_{n \in \mathbb{N}}$ of open subsets of $X$ with
  $$A \;=\; \bigcap_{n \in \mathbb{N}} V_n .$$
- $A$ is an **$F_\sigma$ set of $X$** when there is a sequence
  $(F_n)_{n \in \mathbb{N}}$ of closed subsets of $X$ with
  $$A \;=\; \bigcup_{n \in \mathbb{N}} F_n .$$

As everywhere in this library $\mathbb{N}$ contains $0$, so both indexings start
at $0$. An at most countable *family* may always be presented as a sequence
([[def-countable]]): a finite list $V_0, \dots, V_m$ is extended by $V_n := V_m$
for $n > m$, which changes neither the intersection nor the union, so nothing is
lost by indexing over $\mathbb{N}$.

**The two classes are exchanged by complementation.** $A$ is $F_\sigma$ in $X$ if
and only if $X \setminus A$ is $G_\delta$ in $X$. If $A = \bigcup_n F_n$ with
each $F_n$ closed then $X \setminus A = \bigcap_n (X \setminus F_n)$ by De Morgan
and each $X \setminus F_n$ is open ([[def-topological-space]]); the converse is
the same computation read backwards.

**Every open set is $G_\delta$ and every closed set is $F_\sigma$**, by the
constant sequence $V_n := A$, respectively $F_n := A$. **Neither converse
holds**, and $\mathbb{R}$ with its usual topology already refutes both. The
singleton $\{0\}$ is a $G_\delta$ that is **not open**: it is
$\bigcap_{n \in \mathbb{N}} (-1/(n+1),\ 1/(n+1))$, since $0$ lies in every one of
those intervals while a real $t \ne 0$ is excluded at some index, the
Archimedean property giving a natural $k \ge 1$ with $1/k < |t|$ and $k$ being a
successor $n+1$ ([[cor-archimedean-reciprocal]], [[lem-nat-nonzero-is-successor]],
[[def-canonical-natural]]); and $\{0\}$ is not open because every bounded open
interval $(a,b)$ with $a < 0 < b$ contains the point $b/2 \ne 0$
([[def-interval]], [[lem-real-line-is-a-metric-space]], claim 3). Complementing,
$\mathbb{R} \setminus \{0\}$ is an $F_\sigma$ that is **not closed**, its
complement $\{0\}$ not being open.

**The condition that is a real restriction is the other pairing**, namely that
every **closed** set be a $G_\delta$, equivalently that every **open** set be an
$F_\sigma$. That is not automatic in an arbitrary space, and it is exactly the
second conjunct of perfect normality later on this page. It must not be confused
with the two automatic inclusions above: they hold everywhere and say nothing
about a space.

**Agreement with the real-line notion, stated because a second notion of the
same name would be a defect.** [[def-f-sigma-g-delta]] defines $F_\sigma$ and
$G_\delta$ subsets of $\mathbb{R}$ by the same two displayed conditions, with
"open" and "closed" read in the sense of [[def-open-and-closed-in-r]]. Those two
words name the same two collections of subsets of $\mathbb{R}$ as the usual
topology of $\mathbb{R}$ does, and the verification is one line of unfolding.
[[def-open-and-closed-in-r]] calls $U$ open when every $x \in U$ admits
$\varepsilon > 0$ with $N_\varepsilon(x) \subseteq U$, where
$N_\varepsilon(x) = (x - \varepsilon,\ x + \varepsilon)$
([[def-neighbourhood-r]]); [[def-metric-topology]] calls $U$ open in
$(\mathbb{R}, d_{\mathbb{R}})$ when every $x \in U$ admits $r > 0$ with
$B(x,r) \subseteq U$, and $B(x,r) = (x-r,\ x+r)$ by claim 2 of
[[lem-real-line-is-a-metric-space]]. The two conditions are therefore the same
condition word for word, so the two collections of open subsets of $\mathbb{R}$
are one collection, and hence so are the two collections of closed subsets, each
being the complements of the other collection. The usual topology of $\mathbb{R}$
is the metric topology of $d_{\mathbb{R}}$ ([[def-metrizable-space]]). Since the
two definitions quantify over one collection of open sets and one collection of
closed sets, a subset of $\mathbb{R}$ is $G_\delta$ in the sense above, for
$\mathbb{R}$ with its usual topology, if and only if it is $G_\delta$ in the
sense of [[def-f-sigma-g-delta]]; and likewise for $F_\sigma$. **There is one
notion here, not two**, and every statement proved about $F_\sigma$ or $G_\delta$
subsets of $\mathbb{R}$ elsewhere in this library may be quoted verbatim as a
statement about the topological space $\mathbb{R}$.

### `def-metric-bounded-diameter` — definition — Bounded subset, diameter, distance from a point to a set, and distance between two sets in a metric space

(statement provenance: ai-altered)

### Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]) and let
$A, B \subseteq X$.

**Bounded subset.** $A$ is **bounded** if $A = \emptyset$ or there are $x_0 \in X$
and a real $r > 0$ with $A \subseteq B(x_0, r)$ ([[def-metric-ball]]). The space
$(X,d)$ is a **bounded metric space** if $X$ is a bounded subset of itself.

**Diameter, for nonempty bounded $A$ only.** Suppose $A$ is nonempty and
bounded, and put

$$D(A) := \{\, d(a,b) : a, b \in A \,\} \subseteq \mathbb{R}.$$

Then $D(A)$ is nonempty, since $A$ is, and it is bounded above: fixing $x_0$ and
$r$ with $A \subseteq B(x_0,r)$, every $a, b \in A$ satisfy
$d(a,b) \le d(a,x_0) + d(x_0,b) < r + r$ by the triangle inequality, symmetry
([[def-metric-space]]) and addition of inequalities ([[lem-of-add-order]],
[[def-ordered-field]]), so $r + r$ is an upper bound of $D(A)$
([[def-bounded-set]]). Hence $D(A)$ has a least upper bound in $\mathbb{R}$ by
the least-upper-bound property ([[def-complete-ordered-field]]), and that bound
is unique ([[lem-sup-unique]]). Define

$$\operatorname{diam}(A) := \sup D(A).$$

**Distance from a point to a set, for nonempty $A$ only.** Let $x \in X$ and let
$A$ be nonempty, and put $E(x,A) := \{\, d(x,a) : a \in A \,\}$. Then $E(x,A)$ is
nonempty and bounded below by $0$, since a metric is nonnegative
([[lem-metric-nonnegativity]], [[def-bounded-set]]), so it has a greatest lower
bound ([[thm-infimum-property]], [[def-infimum]]), unique by [[lem-sup-unique]].
Define

$$d(x,A) := \inf E(x,A).$$

**Distance between two sets, for nonempty $A$ and $B$ only.** Put
$E(A,B) := \{\, d(a,b) : a \in A,\ b \in B \,\}$, again nonempty and bounded
below by $0$, and define

$$d(A,B) := \inf E(A,B).$$

**Every one of the three scope restrictions is load bearing.** In this library
$\sup$ and $\inf$ denote real numbers and are written only after existence has
been established; the extended real line is introduced on a later page and is
not used for the suprema and infima taken here, and no convention
$\sup \emptyset = -\infty$ is in force in this development
([[rem-sup-conventions]]). Accordingly:

- $\operatorname{diam}(A)$ is defined exactly when $A$ is nonempty **and**
  bounded. It is not defined for $A = \emptyset$, and it is not defined, not even
  as an infinite value, for an unbounded $A$.
- $d(x,A)$ is defined exactly when $A \ne \emptyset$, and $d(A,B)$ exactly when
  both $A$ and $B$ are nonempty. No boundedness is needed for these two, because
  $0$ is always a lower bound.

### `lem-distance-to-set-is-lipschitz` — lemma — $|d(x,A) - d(y,A)| \\le d(x,y)$, so the distance to a fixed nonempty set is $1$-Lipschitz

(statement provenance: ai-altered)

### Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]), let $A \subseteq X$ be
nonempty and let $x, y \in X$. Then

$$|d(x,A) - d(y,A)| \le d(x,y),$$

with $d(\cdot,A)$ the distance to a nonempty set ([[def-metric-bounded-diameter]]).
Thus the real-valued function $u \mapsto d(u,A)$ changes by at most $d(u,v)$
between $u$ and $v$: it is **$1$-Lipschitz**.

### `thm-metric-closure-characterisation` — theorem — The closure of a nonempty $A$ is $\\{x : d(x,A) = 0\\}$, equals $A$ together with its limit points, and is the smallest closed superset

(statement provenance: ai-altered)

### Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]) and let $A \subseteq X$,
with closure, derived set and limit points as in
[[def-metric-interior-closure-boundary]]. Then:

1. If $A \ne \emptyset$, then $\overline{A} = \{\, x \in X : d(x,A) = 0 \,\}$,
   where $d(x,A)$ is the distance from a point to a nonempty set
   ([[def-metric-bounded-diameter]]).
2. $\overline{A} = A \cup A'$.
3. $\overline{A}$ is closed, contains $A$, and is contained in every closed
   $F \subseteq X$ with $A \subseteq F$. So $\overline{A}$ is the smallest closed
   superset of $A$, and $A$ is closed if and only if $A = \overline{A}$.

Claims 2 and 3 hold for every $A$, the empty set included: $\overline{\emptyset}$
is empty because no ball meets $\emptyset$, and $\emptyset$ is closed because $X$
is open ([[def-metric-topology]]). Claim 1 carries the hypothesis $A \ne \emptyset$
because $d(x,A)$ is defined only for nonempty $A$
([[def-metric-bounded-diameter]]).

### `def-metric-continuity` — definition — Continuity of a map between metric spaces, at a point and globally, in the $\\varepsilon$-$\\delta$ form

(statement provenance: literature-derived)

### Definition

Let $(X, d_X)$ and $(Y, d_Y)$ be metric spaces ([[def-metric-space]]), let
$f : X \to Y$ be a function and let $a \in X$.

$f$ is **continuous at $a$** if for every real $\varepsilon > 0$ there is a real
$\delta > 0$ such that

$$d_X(x,a) < \delta \;\Longrightarrow\; d_Y\big(f(x), f(a)\big) < \varepsilon \qquad \text{for all } x \in X .$$

$f$ is **continuous** (globally, or on $X$) if it is continuous at every point of
$X$.

**The same condition in balls.** Since $d_X(x,a) < \delta$ says $x \in B_X(a,\delta)$
and $d_Y(f(x),f(a)) < \varepsilon$ says $f(x) \in B_Y(f(a),\varepsilon)$
([[def-metric-ball]]), continuity at $a$ reads: for every $\varepsilon > 0$ there
is $\delta > 0$ with

$$f\big[B_X(a,\delta)\big] \subseteq B_Y\big(f(a), \varepsilon\big).$$

Both forms are used below and are the same statement written twice.

**Both metrics matter, and both are named.** Continuity is a property of the
triple $(d_X, d_Y, f)$, not of $f$ alone. When several metrics on the same
underlying sets are in play, as in [[def-equivalent-metrics]], the metrics are
always written out.

**Quantifier order.** The $\delta$ is allowed to depend on $\varepsilon$ **and on
the point $a$**. Requiring one $\delta$ to work at every point simultaneously is
a strictly stronger condition, uniform continuity; it is defined on a later page
of this library, and at this point in the reading order it is written out in full
where needed ([[def-equivalent-metrics]]).

### `thm-metric-continuity-characterisations` — theorem — For a map of metric spaces the following agree: $\\varepsilon$-$\\delta$ continuity everywhere, preimages of open sets are open, preimages of closed sets are closed, sequential continuity, and $f(\\overline{A}) \\subseteq \\overline{f(A)}$

(statement provenance: ai-altered)

### Statement

Let $(X,d_X)$ and $(Y,d_Y)$ be metric spaces ([[def-metric-space]]) and let
$f : X \to Y$ be a function, with images and preimages written $f[\,\cdot\,]$
and $f^{-1}[\,\cdot\,]$ ([[def-injection-surjection-bijection]]). The following
five statements are equivalent.

- **(a)** $f$ is continuous at every point of $X$ in the $\varepsilon$-$\delta$
  sense ([[def-metric-continuity]]).
- **(b)** $f^{-1}[V]$ is open in $X$ for every open $V \subseteq Y$
  ([[def-metric-topology]]).
- **(c)** $f^{-1}[G]$ is closed in $X$ for every closed $G \subseteq Y$.
- **(d)** $f$ is **sequentially continuous**: whenever $x_k \to x$ in $(X,d_X)$,
  also $f(x_k) \to f(x)$ in $(Y,d_Y)$ ([[def-metric-convergence]]).
- **(e)** $f[\overline{A}] \subseteq \overline{f[A]}$ for every $A \subseteq X$
  ([[def-metric-interior-closure-boundary]]).

**Where choice is used.** Only the implication (d) $\Rightarrow$ (e) uses a
choice principle, and it uses it only through
[[thm-metric-sequential-closure]], whose forward direction spends the Axiom of
Countable Choice ([[def-countable-choice]]). The cycle
(a) $\Rightarrow$ (b) $\Rightarrow$ (c) $\Rightarrow$ (e) $\Rightarrow$ (a) and
the implication (a) $\Rightarrow$ (d) are choice free.

### `def-metrizable-space` — definition — Metrizable space: a topological space whose topology is induced by some metric; metrizability is topological, the metric is not

(statement provenance: ai-altered)

### Definition

A topological space $(X, \mathcal{T})$ ([[def-topological-space]]) is
**metrizable** if there is a metric $d$ on $X$ ([[def-metric-space]]) whose
metric topology is $\mathcal{T}$, that is $\mathcal{T} = \mathcal{T}_d$
([[def-metric-topology]]). Such a $d$ is said to **induce** or **metrise**
$\mathcal{T}$.

**The definition presupposes that $\mathcal{T}_d$ is a topology in the sense of
[[def-topological-space]], and it is.** By [[def-metric-topology]] both
$\varnothing$ and $X$ are open in $(X,d)$, which is (T1), and by
[[thm-metric-open-set-algebra]] the family $\mathcal{T}_d$ is closed under
arbitrary unions, which is (T2), and under intersections of $n \ge 1$ members,
which contains (T3). So every metric space is a topological space, and the
metric-space development of this library is a special case of the present one.

**The standard local notions in the two developments agree after translating
their neighbourhood conventions.** Let $d$ be a metric on $X$ and give $X$ the
topology $\mathcal{T}_d$.

- *Neighbourhoods and balls.* [[def-metric-topology]] uses "neighbourhood" for
  an open set containing $x$, whereas [[def-neighbourhood-top]] also allows a
  non-open superset of such a set. Thus the two collections are not literally
  equal, but the open metric neighbourhoods are cofinal in the broader
  neighbourhood filter. The balls $B(x,r)$, $r > 0$ ([[def-metric-ball]]), are
  open ([[thm-metric-open-set-algebra]]) and form a neighbourhood base at $x$:
  any neighbourhood $N$ contains an open $U \ni x$, hence a ball around $x$ by
  [[def-metric-topology]]. The balls of radius $1/n$ alone already suffice
  ([[lem-metric-ball-neighbourhood-base]]).
- *Interior, closure, boundary.* [[def-metric-interior-closure-boundary]] defines
  them by the same conditions with balls in place of neighbourhoods, and the
  previous bullet makes the two conditions equivalent; the metric closure is the
  smallest closed superset ([[thm-metric-closure-characterisation]]), which is the
  definition used here ([[def-interior-closure-boundary-top]]). So the two
  closures, the two interiors and the two boundaries are the same three
  operations.
- *Convergence.* $x_k \to p$ in the sense of [[def-sequence-convergence-top]] is
  "eventually in every neighbourhood of $p$", and by the first bullet this is
  "eventually in every ball around $p$", which is [[def-metric-convergence]].
- *Continuity.* $\varepsilon$-$\delta$ continuity at $a$
  ([[def-metric-continuity]]) says that every ball around $f(a)$ has a ball
  around $a$ mapped into it, which by the first bullet is continuity at $a$ in
  the sense of [[def-continuous-map-top]].

- *Subspaces.* For $A \subseteq X$ the subspace topology
  $\{\, U \cap A : U \in \mathcal{T}_d \,\}$ of [[def-subspace-topology-top]] is
  exactly the metric topology of the subspace metric $d_A$
  ([[def-isometry-and-metric-embedding]]), so the two uses of the phrase
  *subspace topology* in this library name one thing. Indeed
  $B_A(a,r) = B_X(a,r) \cap A$: a trace $U \cap A$ is $d_A$-open, since each of
  its points $a$ has $B_X(a,r) \subseteq U$ and hence $B_A(a,r) \subseteq U \cap A$;
  and a $d_A$-open $W$ is the trace of
  $U := \bigcup \{\, B_X(a,r) : a \in W,\ r > 0,\ B_X(a,r) \cap A \subseteq W \,\}$,
  which is $d_X$-open, satisfies $U \cap A = W$, and involves no choice principle,
  the union being taken over a set of pairs rather than over a selection.

Consequently the metric-space notions of interior, closure, boundary, density,
convergence, continuity and subspace agree with the topological notions here,
and statements about them transfer once a metric is named. For neighbourhoods
the transfer uses the explicit convention change above: a metric-page
neighbourhood is an open topological neighbourhood, while every topological
neighbourhood contains one.

**Metrizability is a topological property; the metric is not part of it.** If
$h : X \to Y$ is a homeomorphism ([[def-homeomorphism-and-open-maps]]) and $d$
metrises $X$, then $d'(y_1,y_2) := d(h^{-1}(y_1), h^{-1}(y_2))$ is a metric on
$Y$ — the three axioms transfer along the bijection $h^{-1}$ — and
$h[B_d(x,r)] = B_{d'}(h(x), r)$, so $h$ carries a basis of $\mathcal{T}_d$ to a
basis of $\mathcal{T}_{d'}$ and $\mathcal{T}_{d'} = h[\mathcal{T}_d] = \mathcal{T}_Y$.
Hence $Y$ is metrizable. The metric itself, however, is **not** determined by the
topology: two metrics on one set may induce the same topology without agreeing,
which is exactly topological equivalence ([[def-equivalent-metrics]]), and
properties of a metric that are not properties of its topology, boundedness among
them, are therefore not properties of a metrizable space.

**Two things every metrizable space has.** It is **Hausdorff**: distinct points
have disjoint open neighbourhoods, by [[thm-metric-hausdorff-separation]] applied
to any metric inducing the topology. And it is **first countable**
([[def-first-countable-top]]), by [[lem-metric-ball-neighbourhood-base]]. Either
failure is therefore an obstruction to metrizability, and this page uses the
first of them to exhibit a topology induced by no metric.

**Sequential limits in a metrizable space are unique, so the notation
$\lim_k x_k$ is available there.** In a metric space a sequence has at most one
limit ([[lem-metric-limits-unique]]), and by the agreement of convergence above
that uniqueness is a statement about the topology alone; so within a metrizable
space, and only there, this page writes $\lim_k x_k$ in the ordinary way. In a
general space the symbol is unavailable ([[def-sequence-convergence-top]]).

**The usual topology of $\mathbb{R}$.** The absolute value makes $\mathbb{R}$ a
metric space under $d_{\mathbb{R}}(x,y) = |x-y|$, its open balls are the bounded
open intervals, and the resulting metric topology is what claim 3 of
[[lem-real-line-is-a-metric-space]] names the **usual topology** of $\mathbb{R}$.
That is the topology meant by the phrase throughout these two pages, and
$\mathbb{R}$ carrying it is metrizable by definition. Every statement about it on
these two pages is proved from the metric $d_{\mathbb{R}}$ and the bridge above,
and no example re-derives any of it.

### `def-metric-space` — definition — Metric space: $d(x,y) = 0$ iff $x = y$, symmetry, and the triangle inequality; pseudometric and ultrametric

(statement provenance: ai-altered)

### Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]], [[def-ordered-field]]) constructed in this
library ([[def-real-numbers]]) and carrying its order ([[def-real-order]]).

Let $X$ be a set. A **metric** on $X$ is a function
$d : X \times X \to \mathbb{R}$ such that for all $x, y, z \in X$:

- **(M1) Separation.** $d(x,y) = 0$ if and only if $x = y$.
- **(M2) Symmetry.** $d(x,y) = d(y,x)$.
- **(M3) Triangle inequality.** $d(x,z) \le d(x,y) + d(y,z)$.

A **metric space** is a pair $(X,d)$ consisting of a set $X$ and a metric $d$ on
it. The elements of $X$ are its **points** and $d(x,y)$ is the **distance** from
$x$ to $y$. When only one metric is in play we write $X$ for $(X,d)$; when
several are, the metric is always named.

**The values of a metric are real numbers.** The codomain is $\mathbb{R}$, so
$d(x,y)$ is an honest element of the complete ordered field and every
inequality above is an inequality there. No infinite value is permitted;
[[rem-metric-axiom-conventions]] records why extended metrics are not treated in
this library.

**Nonnegativity is deliberately absent from the axiom list.** Many texts add a
fourth axiom $d(x,y) \ge 0$. It is redundant: (M1), (M2) and (M3) already force
it, as [[lem-metric-nonnegativity]] proves. Nothing below assumes it before that
lemma is available.

**Pseudometric.** A **pseudometric** on $X$ is a function
$p : X \times X \to \mathbb{R}$ satisfying (M2), (M3) and the weakening

- **(M1') Reflexivity.** $p(x,x) = 0$ for every $x \in X$

of (M1). A pseudometric may therefore assign distance $0$ to two distinct
points. Every metric is a pseudometric, and a pseudometric is a metric exactly
when $p(x,y) = 0$ forces $x = y$.

**Ultrametric.** An **ultrametric** on $X$ is a metric $d$ that in addition
satisfies

- **(M3') Strong triangle inequality.** $d(x,z) \le \max\{d(x,y), d(y,z)\}$

for all $x, y, z \in X$, where the maximum is that of a two-element subset of
$\mathbb{R}$, which exists and is one of the two elements
([[def-max-min]], [[lem-finite-set-has-max]]). An **ultrametric space** is a pair
$(X,d)$ with $d$ an ultrametric.

### `def-metric-topology` — definition — The metric topology: a set is open when every one of its points has a ball around it inside the set; closed means open complement

(statement provenance: literature-derived)

### Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]).

A subset $U \subseteq X$ is **open in $(X,d)$** if for every $x \in U$ there is a
real $r > 0$ with $B(x,r) \subseteq U$ ([[def-metric-ball]]). A subset
$F \subseteq X$ is **closed in $(X,d)$** if its complement $X \setminus F$ is
open.

The collection

$$\mathcal{T}_d := \{\, U \subseteq X : U \text{ is open in } (X,d) \,\}$$

of all open subsets is the **metric topology** of $d$ on $X$. A subset of $X$
that is both open and closed is called **clopen**.

**Two sets are open for trivial reasons.** $\emptyset$ is open, because the
defining condition quantifies over no points; and $X$ is open, because
$B(x,r) \subseteq X$ for every $x$ and every $r > 0$. Consequently $X$ and
$\emptyset$ are also closed, and both are clopen.

**A neighbourhood of a point $x$** is any open set containing $x$. The condition
above therefore reads: $U$ is open exactly when every point of $U$ has a ball
around it inside $U$, and it is the balls alone that have to be tested.

**The metric, not the set, determines $\mathcal{T}_d$.** Two metrics on the same
set may have different metric topologies, and two different metrics may have the
same one; the systematic comparison is [[def-equivalent-metrics]].

### `def-canonical-natural` — definition — The canonical natural $\\iota(n) = n \\cdot 1_F$ of a field

(statement provenance: ai-altered)

### Definition

Let $F$ be a field ([[def-field]]) with additive identity $0_F$ and
multiplicative identity $1_F$. Define
$\iota : \mathbb{N} \to F$ by recursion on $\mathbb{N}$
([[def-natural-numbers]], [[thm-recursion]]):

$$\iota(0) \;:=\; 0_F, \qquad \iota(n+1) \;:=\; \iota(n) + 1_F .$$

$\iota(n)$ is the **canonical natural** of $n$ in $F$. It is also written
$n \cdot 1_F$, and for $n \ge 1$ it is $1_F$ added to itself $n$ times.

**Why the notation is needed at all.** A natural number in this library is a von
Neumann natural, that is a set ([[def-natural-numbers]]), and a set is not an
element of $F$. So $1/n$, $n^{\alpha}$ and $x/n$ are not expressions of $F$ when
$n$ is a natural: what they mean is $1/\iota(n)$, $\iota(n)^{\alpha}$ and
$x/\iota(n)$. The map $\iota$ is what carries a counting number into the field,
and writing it is the whole reason a reader meets $1/\iota(k+1)$ where an
informal text would write $1/(k+1)$.

### `cor-archimedean-reciprocal` — corollary — For every $\\varepsilon > 0$ in a complete ordered field there is a natural $n \\ge 1$ with $1/n < \\varepsilon$

(statement provenance: ai-altered)

### Statement

Let $F$ be a complete ordered field ([[def-complete-ordered-field]]) and let
$\varepsilon \in F$ with $\varepsilon > 0$. Then there is a natural number
$n \ge 1$ such that

$$\frac{1}{n \cdot 1_F} < \varepsilon ,$$

where $n \cdot 1_F$ is the canonical natural of $F$ ([[thm-of-archimedean]]) and
$1/(n \cdot 1_F)$ is its multiplicative inverse ([[def-field]]). As is standard
we abbreviate $n \cdot 1_F$ to $n$ and write the conclusion $1/n < \varepsilon$.

This is the **reciprocal form** of the Archimedean property.
[[thm-of-archimedean]] on its own delivers only the assertion that the canonical
naturals are cofinal, $x < n \cdot 1_F$; the form actually used in analysis, that
the reciprocals of the naturals get below every positive bound, is the statement
above, and it is recorded separately so that no proof has to reconstruct the
inversion step in passing.

### `lem-nat-nonzero-is-successor` — lemma — Every nonzero natural number is a successor

(statement provenance: literature-derived)

### Statement

For every $n \in \mathbb{N}$ with $n \neq 0$, there exists $m \in \mathbb{N}$ with $n = \sigma(m)$. Equivalently, every natural number is either $0$ or a successor.

### `def-max-min` — definition — Maximum and minimum of a set

(statement provenance: ai-altered)

### Definition

Let $S \subseteq \mathbb{R}$ and $m \in \mathbb{R}$.

- $m$ is a **maximum** (or *greatest element*) of $S$ if $m \in S$ and $s \le m$
  for every $s \in S$.
- $m$ is a **minimum** (or *least element*) of $S$ if $m \in S$ and $m \le s$
  for every $s \in S$.

A set has at most one maximum: if $m_1$ and $m_2$ are both maxima then
$m_1 \in S$ gives $m_1 \le m_2$ and $m_2 \in S$ gives $m_2 \le m_1$, so
$m_1 = m_2$ by antisymmetry of the order, which is immediate from the trichotomy
axiom of an ordered field ([[def-ordered-field]], [[def-complete-ordered-field]]).
The same argument applies to minima, so we may write $\max S$ and $\min S$.

### `lem-finite-set-has-max` — lemma — Every nonempty finite set of reals has a maximum and a minimum

(statement provenance: ai-altered)

### Statement

For every $n \in \mathbb{N}$ and all $a_0, a_1, \dots, a_n \in \mathbb{R}$, the
set $\{a_0, a_1, \dots, a_n\}$ has a maximum and a minimum ([[def-max-min]]).

What is proved below is exactly the displayed statement, by induction on $n$.

The usual reading, that *every nonempty finite subset of $\mathbb{R}$ has a
maximum and a minimum*, follows once one identifies the nonempty finite subsets
of $\mathbb{R}$ with the sets listable as $\{a_0, \dots, a_n\}$. That
identification is recorded as a stipulation in the Given below, because this page
has no definition of finiteness to prove it against. **It is discharged, not
merely assumed**: [[lem-finite-subsets-listable]] proves that the two
descriptions of a nonempty finite subset of $\mathbb{R}$ agree. That lemma is
recorded in `justified_by` rather than in `deps`, since it is about the sets this
lemma quantifies over and therefore depends on this one. This is what licenses
the notation
$\max\{a_1, \dots, a_n\}$ and $\min\{a_1, \dots, a_n\}$ for finite sets of
**real** numbers from this page onwards.

### `def-hausdorff-space` — definition — Hausdorff space: distinct points have disjoint open neighbourhoods; every metrizable space is Hausdorff and the indiscrete topology on two points is not

(statement provenance: ai-altered)

### Definition

A topological space $(X, \mathcal{T})$ ([[def-topological-space]]) is
**Hausdorff** when any two distinct points are separated by disjoint open sets:
for all $x, y \in X$ with $x \ne y$ there are $U, V \in \mathcal{T}$ with

$$x \in U, \qquad y \in V, \qquad U \cap V = \varnothing .$$

Since an open set containing a point is an open neighbourhood of it
([[def-neighbourhood-top]]), the condition reads: distinct points have disjoint
open neighbourhoods. Nothing is asserted about points that are equal, and the
condition is vacuous for a space with at most one point, so every such space is
Hausdorff.

**Every metrizable space is Hausdorff.** This is not proved here, because it is
already discharged: [[def-metrizable-space]] records it among the two things
every metrizable space has, deriving it from
[[thm-metric-hausdorff-separation]], which separates $p \ne q$ in a metric space
by the disjoint open balls $B(p,r)$ and $B(q,r)$ with $r = d(p,q)/2 > 0$. In
particular $\mathbb{R}$ with its usual topology, every $\mathbb{R}^n$, and every
subspace of a metrizable space are Hausdorff.

**Not every space is Hausdorff.** The indiscrete topology
$\mathcal{T}_{\mathrm{ind}} = \{\varnothing, X\}$ on a set $X = \{a,b\}$ with
$a \ne b$ ([[def-standard-topologies]]) is not: the only open set containing $a$
is $X$, the only one containing $b$ is $X$, and $X \cap X = X \ne \varnothing$.
This is the same two-point space that [[def-metrizable-space]] uses to exhibit a
topology induced by no metric, and the reason is the same one: failure of the
Hausdorff condition is an obstruction to metrizability.

**Being Hausdorff is a topological property** ([[def-homeomorphism-and-open-maps]]).
If $h : X \to Z$ is a homeomorphism and $X$ is Hausdorff, then for $z \ne z'$ in
$Z$ the points $h^{-1}(z)$ and $h^{-1}(z')$ are distinct, so they have disjoint
open $U, V$; the images $h[U]$ and $h[V]$ are open, disjoint, and contain $z$ and
$z'$ respectively, a homeomorphism carrying the open sets of one space
bijectively onto those of the other. So no space homeomorphic to a Hausdorff
space fails the condition.

**Scope of this item.** Only the definition, the metrizable case and the
two-point failure are recorded here, because that is all this page uses. The
Hausdorff condition is one of a graded family of separation axioms; that family,
its ordering, and the questions of which of its members are hereditary or
preserved by products, are not available at this point in the reading order and
nothing here anticipates them. What this page does use is a single negative
result: a quotient of a Hausdorff space need not be Hausdorff, which is recorded
below as a false statement and witnessed on the companion page.

### `lem-urysohn-sits-between-hausdorff-and-regular-plus-t1` — lemma — Every Urysohn space is Hausdorff, every Hausdorff space is $T_1$ and hence $T_0$, and every regular $T_1$ space is Urysohn

(statement provenance: ai-altered)

### Statement

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]). Then:

1. If $X$ is Urysohn ([[def-urysohn-space]]) then $X$ is Hausdorff
   ([[def-hausdorff-space]]).
2. If $X$ is Hausdorff then $X$ is $T_1$, and hence $T_0$
   ([[def-t0-and-t1-spaces]]).
3. If $X$ is regular ([[def-regular-and-t3-spaces]]) and $T_1$ — that is, if $X$
   is $T_3$ — then $X$ is Urysohn.

Consequently $T_3$ implies $T_{2\frac12}$, which implies $T_2$, which implies
$T_1$, which implies $T_0$. Nothing here asserts that any of the four
implications reverses; two of the failures are recorded among this page's false
statements.

### `def-t0-and-t1-spaces` — definition — $T_0$ (Kolmogorov) and $T_1$ (Frechet) spaces

(statement provenance: literature-derived)

### Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

- $X$ is **$T_0$**, or a **Kolmogorov space**, when any two distinct points are
  *topologically distinguishable*: for all $x, y \in X$ with $x \ne y$ there is
  an open set containing exactly one of $x$ and $y$.
- $X$ is **$T_1$**, or a **Frechet space**, when each of any two distinct points
  has an open set containing it and missing the other: for all $x, y \in X$ with
  $x \ne y$ there are $U, V \in \mathcal{T}$ with

$$x \in U, \quad y \notin U, \qquad y \in V, \quad x \notin V .$$

Nothing is asserted about a pair of equal points, so a space with at most one
point satisfies both conditions vacuously.

Since an open set containing a point is an open neighbourhood of it
([[def-neighbourhood-top]]), both conditions may be read with "open
neighbourhood" in place of "open set"; and by the same equivalence recorded in
[[def-neighbourhood-top]] they may be read with arbitrary neighbourhoods, since
a neighbourhood of $x$ contains an open one and an open neighbourhood is a
neighbourhood.

**Every $T_1$ space is $T_0$, and this is discharged here** rather than left to
the reader, because it is the bottom arrow of the whole hierarchy on this page.
Let $x \ne y$ and take $U, V$ as in the $T_1$ condition. Then $U$ is an open set
containing $x$ and not $y$, so it contains exactly one of the two points, which
is the $T_0$ condition. Only the first half of the $T_1$ condition is used, so
the implication does not reverse formally, and it does not reverse in fact:
Sierpinski space is a witness, recorded on the companion page.

**The two conditions differ exactly in symmetry.** $T_0$ asks for *one* open set
that tells the pair apart, with no control over which of the two it contains;
$T_1$ asks for *both* separations at once. In Sierpinski space
$(\{a,b\}, \{\varnothing, \{b\}, \{a,b\}\})$ of [[def-standard-topologies]] the
open set $\{b\}$ contains $b$ and not $a$, so the space is $T_0$; but the only
open set containing $a$ is the whole space, which also contains $b$, so it is
not $T_1$.

**Neither condition is a property of a set alone.** Both are properties of the
pair $(X, \mathcal{T})$, and both are inherited upwards along the comparison
order of [[def-topological-space]]: if $\mathcal{T}_1 \subseteq \mathcal{T}_2$
and $(X,\mathcal{T}_1)$ is $T_0$, respectively $T_1$, then so is
$(X,\mathcal{T}_2)$, since the separating open sets of the coarser topology lie
in the finer one. In particular the discrete topology satisfies both, and the
indiscrete topology on a set with at least two points satisfies neither.

### `def-interval` — definition — Intervals of $\\mathbb{R}$: the nine order-convex forms, nondegeneracy, and length

(statement provenance: ai-altered)

### Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]], [[def-ordered-field]]) with its order
([[def-real-order]]).

A subset $I \subseteq \mathbb{R}$ is **order-convex** when

$$x, y \in I \text{ and } x \le z \le y \;\Longrightarrow\; z \in I .$$

The **intervals** of $\mathbb{R}$ are the sets of the following nine forms, where
$a, b \in \mathbb{R}$:

| | bounded forms | | one-sided and full forms |
|---|---|---|---|
| $(a,b)$ | $\{x : a < x < b\}$ | $(a,\infty)$ | $\{x : a < x\}$ |
| $[a,b]$ | $\{x : a \le x \le b\}$ | $[a,\infty)$ | $\{x : a \le x\}$ |
| $[a,b)$ | $\{x : a \le x < b\}$ | $(-\infty,b)$ | $\{x : x < b\}$ |
| $(a,b]$ | $\{x : a < x \le b\}$ | $(-\infty,b]$ | $\{x : x \le b\}$ |
| | | $(-\infty,\infty)$ | $\mathbb{R}$ |

An interval is **open** when both of its written endpoints are excluded, that is
for the forms $(a,b)$, $(a,\infty)$, $(-\infty,b)$ and $(-\infty,\infty)$; it is
**closed** when both written endpoints are included, that is for $[a,b]$,
$[a,\infty)$, $(-\infty,b]$ and $(-\infty,\infty)$. The forms $[a,b)$ and
$(a,b]$ are **half-open**.

**The symbols $\pm\infty$ are notation and not elements of $\mathbb{R}$.** They
mark which side carries no endpoint condition at all; the five forms in the right
column are defined by the displayed conditions on $x$ alone, and no arithmetic is
ever performed with $\infty$. This is the same refusal to extend $\mathbb{R}$
silently that [[rem-sup-conventions]] records for suprema.

**Every one of the nine forms is order-convex.** Each is defined by a conjunction
of at most two conditions, each of the shape $a < x$, $a \le x$, $x < b$ or
$x \le b$, and each such condition is inherited by an intermediate point: if
$a < x$ and $x \le z$ then $a < z$, and if $z \le y$ and $y < b$ then $z < b$,
by transitivity of the order ([[def-ordered-field]]). Applying this to whichever
one or two conditions define the form in question gives $z \in I$ whenever
$x, y \in I$ and $x \le z \le y$.

**Bounded intervals.** An interval is **bounded** ([[def-bounded-set]]) exactly
when it is of one of the four forms in the left column: for those, $a$ is a lower
bound and $b$ an upper bound. The other five forms are unbounded, on the side or
sides written with $\infty$; the verification is in the remarks below.

**Nondegeneracy.** An interval is **degenerate** when it has at most one element,
and **nondegenerate** when it has at least two. For the four bounded forms with
endpoints $a$ and $b$:

- $[a,b]$ is nonempty exactly when $a \le b$, and it is nondegenerate exactly
  when $a < b$. It is the singleton $\{a\}$ when $a = b$.
- $(a,b)$, $[a,b)$ and $(a,b]$ are nonempty exactly when $a < b$, and then each
  is nondegenerate.

The only assertion here that is not immediate from the defining conditions is
that $a < b$ makes $(a,b)$ nonempty with at least two points. It holds because
$a < (a+b)/2 < b$, which follows from $a < b$ by adding $a$, respectively $b$, to
both sides and halving ([[def-ordered-field]]); repeating the halving inside
$(a, (a+b)/2)$ produces a second point.

**Closed bounded intervals.** These are the sets $[a,b]$ with $a \le b$, which is
exactly the condition making them nonempty. They are the intervals the nested
interval property is stated for, and the phrase *closed bounded interval* always
carries the hypothesis $a \le b$ in this library.

**Length.** The **length** of a bounded interval presented by its endpoints
$a \le b$ is

$$\ell = b - a \;\ge\; 0 .$$

Length is attached to the presentation by endpoints and is not recovered from the
set: $(a,b)$, $[a,b)$ and $(a,b]$ are all empty when $a = b$, and so is
$(c,c)$ for any other $c$, while each of these presentations has length $0$, so
nothing inconsistent arises; but the endpoints are named explicitly at every
point where a length is used in this library, and never inferred from the set.
Unbounded intervals are assigned no length.

### `def-topological-space` — definition — Topology on a set, open and closed sets, clopen sets, the closed-set axiomatisation, and the coarser/finer comparison

(statement provenance: ai-altered)

### Definition

Let $X$ be a set and write $\mathcal{P}(X)$ for its power set. A **topology** on
$X$ is a family $\mathcal{T} \subseteq \mathcal{P}(X)$ such that

- **(T1)** $\varnothing \in \mathcal{T}$ and $X \in \mathcal{T}$;
- **(T2)** $\bigcup \mathcal{S} \in \mathcal{T}$ for every $\mathcal{S} \subseteq \mathcal{T}$;
- **(T3)** $U \cap V \in \mathcal{T}$ for all $U, V \in \mathcal{T}$.

A **topological space** is a pair $(X, \mathcal{T})$ consisting of a set $X$ and
a topology $\mathcal{T}$ on it; the elements of $X$ are its **points**. When only
one topology is in play we write $X$ for the pair; when several are, the topology
is always named.

The members of $\mathcal{T}$ are the **open** sets of $(X,\mathcal{T})$. A subset
$F \subseteq X$ is **closed** when its complement $X \setminus F$ is open, and
**clopen** when it is both open and closed. By (T1) both $\varnothing$ and $X$
are clopen. *Open and closed are not opposites*: a set may be neither, and it may
be both, so "not open" is never a synonym for "closed".

**Finite intersections, and the empty one.** Axiom (T3) is stated for two sets
because that is all that is ever needed: if $n \ge 1$ and
$U_1, \dots, U_n \in \mathcal{T}$, then $U_1 \cap \dots \cap U_n \in \mathcal{T}$
follows by iterating (T3) $n-1$ times. The intersection of the **empty** family
of subsets of $X$ is $X$, since the condition "lies in every member of the empty
family" is vacuous; that case is covered by (T1) rather than by (T3), which is
one of the two reasons $X \in \mathcal{T}$ is demanded outright. The other is
that (T2) alone gives only $\bigcup \varnothing = \varnothing$.

**The closed sets, and the dual axiomatisation.** Put
$\mathcal{C} := \{\, X \setminus U : U \in \mathcal{T} \,\}$, the family of closed
sets. Then

- **(C1)** $\varnothing \in \mathcal{C}$ and $X \in \mathcal{C}$;
- **(C2)** $\bigcap \mathcal{D} \in \mathcal{C}$ for every **nonempty**
  $\mathcal{D} \subseteq \mathcal{C}$;
- **(C3)** $C \cup D \in \mathcal{C}$ for all $C, D \in \mathcal{C}$.

Conversely, if a family $\mathcal{C} \subseteq \mathcal{P}(X)$ satisfies (C1),
(C2) and (C3), then $\mathcal{T} := \{\, X \setminus C : C \in \mathcal{C} \,\}$
is a topology on $X$ whose closed sets are exactly the members of $\mathcal{C}$.
So a topology may be presented equally well by its open sets or by its closed
sets, and this library uses whichever is shorter.

*Both directions are one computation, and it is carried out here rather than
assumed.* The map $U \mapsto X \setminus U$ is an involution of
$\mathcal{P}(X)$, hence a bijection, and it carries the two De Morgan identities

$$X \setminus \bigcup_{i \in I} A_i = \bigcap_{i \in I} (X \setminus A_i) \quad (I \ne \varnothing), \qquad X \setminus \bigcap_{i \in I} A_i = \bigcup_{i \in I} (X \setminus A_i) \quad (I \ne \varnothing)$$

term by term into each other. Given (T1)–(T3): $\varnothing = X \setminus X$ and
$X = X \setminus \varnothing$ lie in $\mathcal{C}$, which is (C1); for nonempty
$\mathcal{D} \subseteq \mathcal{C}$ the family
$\mathcal{S} = \{\, X \setminus C : C \in \mathcal{D} \,\}$ lies in $\mathcal{T}$
and $\bigcap \mathcal{D} = X \setminus \bigcup \mathcal{S}$ is closed by (T2),
which is (C2); and $C \cup D = X \setminus ((X \setminus C) \cap (X \setminus D))$
is closed by (T3), which is (C3). Given (C1)–(C3) the same three lines run
backwards, the empty-union case $\bigcup \varnothing = \varnothing$ being supplied
by (C1) rather than by (C2); and $\{\, X \setminus C : C \in \mathcal{C} \,\}$ has
$\mathcal{C}$ as its family of complements because complementation is an
involution.

**Comparison of topologies.** If $\mathcal{T}_1$ and $\mathcal{T}_2$ are
topologies on the same set $X$ and $\mathcal{T}_1 \subseteq \mathcal{T}_2$, then
$\mathcal{T}_1$ is **coarser** than $\mathcal{T}_2$ and $\mathcal{T}_2$ is
**finer** than $\mathcal{T}_1$; the comparison is **strict** when the inclusion
is. Inclusion is a partial order on the set of topologies on $X$
([[def-partial-order]]), and it is not a total one: two topologies on the same
set may be incomparable.

## What to return

Read `thm-metric-spaces-are-tychonoff-and-perfectly-normal` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
