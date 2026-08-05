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

# Adversarial proof reading — `thm-open-connected-subsets-of-rn-are-polygonally-connected`

## The item under review, in full

`items/thm-open-connected-subsets-of-rn-are-polygonally-connected.md`

```markdown
---
id: thm-open-connected-subsets-of-rn-are-polygonally-connected
kind: theorem
title: "For an open subset of $\\mathbb{R}^n$, connectedness, path-connectedness and polygonal connectedness are equivalent"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-polygonally-reachable-set-is-clopen, thm-path-connected-implies-connected, def-connected-space, def-polygonal-path-and-polygonal-connectedness]
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
    - title: "Path-connected space"
      url: "https://en.wikipedia.org/wiki/Path-connected_space"
    - title: "Connected space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Connected_space"
pipeline_run: null
---

## Statement

Let $U\subseteq\mathbb{R}^n$ be open. Then $U$ is connected if and only if it is path-connected, if and only if it is polygonally connected.

## Facts & Assumptions

**Given:** An open subset $U\subseteq\mathbb{R}^n$.

[L1] The polygonally reachable set from a point of $U$ is clopen in $U$ ([[lem-polygonally-reachable-set-is-clopen]]).

[L2] A polygonal path is a path, and every path-connected space is connected ([[def-polygonal-path-and-polygonal-connectedness]], [[thm-path-connected-implies-connected]]).

[L3] A connected space has no nonempty proper clopen subset ([[def-connected-space]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $U$ is connected. If $U=\varnothing$, then polygonal connectedness, path-connectedness, and connectedness all hold vacuously. Otherwise choose $a\in U$. The reachable set $R_a$ is nonempty and clopen by [L1], so [L3] gives $R_a=U$. [L1, L3, cases, choose]

1.2 Polygonal connectedness implies path-connectedness, and path-connectedness implies connectedness, by [L2]. [L2]

2.1 In the nonempty case, every point of $U=R_a$ is joined to $a$ by a polygonal path; reversing one such path and concatenating it with another joins any two points of $U$. Together with the empty case, connectedness implies polygonal connectedness. [step 1.1]

3.1 Steps 2.1 and 1.2 give all three equivalences. [step 2.1, step 1.2] ∎
```

## The dependencies it declares, quoted verbatim from disk

Each block below is the claim-bearing text of one declared dependency.
These are the only statements the item is entitled to use. If a step
needs more than the text below gives, that is the defect — quote the
dependency text and show exactly what it fails to supply.

### `lem-polygonally-reachable-set-is-clopen` — lemma — The points polygonally reachable from a fixed point form a clopen subset of every open subset of $\\mathbb{R}^n$

(statement provenance: ai-altered)

### Statement

Let $U\subseteq\mathbb{R}^n$ be open and let $a\in U$. The set $R_a$ of points of $U$ joined to $a$ by a polygonal path ([[def-polygonal-path-and-polygonal-connectedness]]) in $U$ is both open and closed in the subspace $U$.

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

### `def-connected-space` — definition — Separation of a topological space, connected and disconnected spaces, clopen sets, and connected subsets

(statement provenance: ai-altered)

### Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

- A **separation** of $X$ is an ordered pair $(U, V)$ of **open**, **nonempty**,
  **disjoint** subsets of $X$ with $U \cup V = X$.
- $X$ is **disconnected** when a separation of $X$ exists, and **connected** when
  none does.
- A subset $A \subseteq X$ is a **connected subset** of $X$ when the space
  $(A, \mathcal{T}_A)$ is connected, $\mathcal{T}_A$ being the subspace topology
  ([[def-subspace-topology-top]]). "Disconnected subset" is read the same way.

Since $U$ and $V$ are complementary in $X$, each of them is closed as well as
open; so a separation is the same thing as a partition of $X$ into two nonempty
clopen pieces ([[def-topological-space]]). The **clopen** subsets of $X$ are
those that are both open and closed, and $\varnothing$ and $X$ are always among
them.

**The empty space and the one-point space are connected in this library.**
Neither admits a separation: a separation requires two nonempty disjoint sets
whose union is the whole space, and neither $\varnothing$ nor a singleton can be
written as such a union. So both are connected under the definition above,
without any special clause. **This is a live convention fork** and the competing
choice is recorded in [[rem-connectedness-conventions]]; nothing on this page
depends on which is taken except the reading of the word "connected" applied to
those two spaces.

**Connectedness is a property of a space, not of an ambient pair.** The condition
above mentions only $(X,\mathcal{T})$. When it is applied to $A \subseteq X$ it
is applied to the space $(A, \mathcal{T}_A)$, so it does not change if $A$ is
regarded as a subspace of some other space inducing the same topology on $A$; in
particular a subset of $A$ is connected as a subset of $A$ exactly when it is
connected as a subset of $X$, by transitivity of the subspace topology
([[def-subspace-topology-top]]). This is why "connected" may be used of a subset
with no ambient space named.

**Spelled out for a subset.** $A \subseteq X$ is disconnected exactly when there
are open $U, V \subseteq X$ with

$$A \subseteq U \cup V, \qquad U \cap A \ne \varnothing, \qquad V \cap A \ne \varnothing, \qquad U \cap V \cap A = \varnothing,$$

because the open sets of $(A,\mathcal{T}_A)$ are precisely the traces $U \cap A$.
Note the last condition: it asks $U$ and $V$ to be disjoint **on $A$**, not in
$X$. Requiring $U \cap V = \varnothing$ outright is a strictly stronger demand
and is a different notion.

**The two-point discrete space.** Write $\mathbf{2} := \{0,1\}$ with the discrete
topology ([[def-standard-topologies]]), in which every subset is open. A
separation of $X$ is the same datum as a surjective continuous map
$X \to \mathbf{2}$ ([[def-continuous-map-top]]): given $(U,V)$, the map sending
$U$ to $0$ and $V$ to $1$ is continuous because the preimage of each of the four
open subsets of $\mathbf{2}$ is one of $\varnothing$, $U$, $V$, $X$; given a
surjective continuous $\chi : X \to \mathbf{2}$, the pair
$(\chi^{-1}[\{0\}], \chi^{-1}[\{1\}])$ is a separation. This reformulation is
proved as a theorem on this page and is recorded here only to name $\mathbf{2}$.

**Separated sets.** Two subsets $A_1, A_2 \subseteq X$ are **separated in $X$**
when

$$\overline{A_1} \cap A_2 = \varnothing \qquad \text{and} \qquad A_1 \cap \overline{A_2} = \varnothing,$$

closures taken in $X$ ([[def-interior-closure-boundary-top]],
[[thm-closure-characterisation-top]]). Separated sets are disjoint, since
$A_1 \subseteq \overline{A_1}$; the converse fails. This is verbatim the
condition [[def-connected-r]] uses on the real line, transported to an arbitrary
space, and the theorem relating it to the definition above is the next lemma on
this page.

**Totally disconnected spaces, and the empty case.** The vocabulary for a space
all of whose connected subsets are single points is fixed later on this page,
together with the components; it is not defined here because it is stated in
terms of components.

### `def-polygonal-path-and-polygonal-connectedness` — definition — Polygonal paths and polygonally connected subsets of $\\mathbb{R}^n$

(statement provenance: ai-altered)

### Definition

Let $A\subseteq\mathbb{R}^n$. A **polygonal path in $A$** from $x$ to $y$ is a path $\gamma:[0,1]\to A$ ([[def-path-connected]], [[def-interval]]) for which there are a finite list of vertices $v_0,\ldots,v_m\in A$ and a partition $0=t_0<t_1<\cdots<t_m=1$ such that $v_0=x$, $v_m=y$, and

$$\gamma(t)=\frac{t_i-t}{t_i-t_{i-1}}v_{i-1}+\frac{t-t_{i-1}}{t_i-t_{i-1}}v_i\quad\text{when }t_{i-1}\le t\le t_i.$$

The formula uses only scalar multiplication and vector addition in $\mathbb{R}^n$ ([[def-vector-space]]). The finite list is indexed by a natural number ([[def-finite-cardinality]]).

The subset $A$ is **polygonally connected** when every pair of its points is joined by a polygonal path in $A$.

## What to return

Read `thm-open-connected-subsets-of-rn-are-polygonally-connected` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
