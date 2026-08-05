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

# Adversarial proof reading — `cor-components-of-open-subsets-of-rn-are-polygonally-connected`

## The item under review, in full

`items/cor-components-of-open-subsets-of-rn-are-polygonally-connected.md`

```markdown
---
id: cor-components-of-open-subsets-of-rn-are-polygonally-connected
kind: corollary
title: "Every connected component of an open subset of $\\mathbb{R}^n$ is open and polygonally connected"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-open-connected-subsets-of-rn-are-polygonally-connected, def-metric-ball, def-norm-and-normed-space, lem-euclidean-polygonal-paths-are-continuous, thm-path-connected-implies-connected, def-connected-component-and-quasicomponent]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Locally connected space"
      url: "https://en.wikipedia.org/wiki/Locally_connected_space"
pipeline_run: null
---

## Statement

Every connected component of an open subset $U\subseteq\mathbb{R}^n$ is open in $\mathbb{R}^n$ and polygonally connected.

## Facts & Assumptions

**Given:** An open subset $U\subseteq\mathbb{R}^n$ and a connected component $C$ of $U$.

[L1] A Euclidean ball is path-connected, hence connected: the norm triangle inequality keeps every straight segment in the ball, the segment is continuous, and every path-connected space is connected ([[def-metric-ball]], [[def-norm-and-normed-space]], [[lem-euclidean-polygonal-paths-are-continuous]], [[thm-path-connected-implies-connected]]).

[L2] A component is the largest connected subset containing each of its points ([[def-connected-component-and-quasicomponent]]).

[L3] An open connected Euclidean subset is polygonally connected ([[thm-open-connected-subsets-of-rn-are-polygonally-connected]]).

## Proof

**Proof technique:** direct.

1.1 Let $x\in C$. Since $U$ is open, choose $r>0$ with $B(x,r)\subseteq U$. The ball is connected by [L1], meets $C$ at $x$, and so lies in $C$ by maximality of the component. [L1, L2, choose]

2.1 Therefore every point of $C$ has a Euclidean ball contained in $C$, so $C$ is open in $\mathbb{R}^n$. [step 1.1]

3.1 The component $C$ is connected and now open, so [L3] makes it polygonally connected. [L3, step 2.1] ∎
```

## The dependencies it declares, quoted verbatim from disk

Each block below is the claim-bearing text of one declared dependency.
These are the only statements the item is entitled to use. If a step
needs more than the text below gives, that is the defect — quote the
dependency text and show exactly what it fails to supply.

### `thm-open-connected-subsets-of-rn-are-polygonally-connected` — theorem — For an open subset of $\\mathbb{R}^n$, connectedness, path-connectedness and polygonal connectedness are equivalent

(statement provenance: ai-altered)

### Statement

Let $U\subseteq\mathbb{R}^n$ be open. Then $U$ is connected if and only if it is path-connected, if and only if it is polygonally connected.

### `def-metric-ball` — definition — Open ball, closed ball and sphere in a metric space

(statement provenance: ai-altered)

### Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]), let $x \in X$ and let
$r \in \mathbb{R}$ with $r > 0$ ([[def-real-order]]). Define

$$B(x,r) := \{\, y \in X : d(x,y) < r \,\}, \qquad \bar B(x,r) := \{\, y \in X : d(x,y) \le r \,\}, \qquad S(x,r) := \{\, y \in X : d(x,y) = r \,\}.$$

$B(x,r)$ is the **open ball**, $\bar B(x,r)$ the **closed ball** and $S(x,r)$ the
**sphere** of **centre** $x$ and **radius** $r$. The radius is always a strictly
positive real; a ball of radius $0$ or of negative radius is never written in
this library.

**Immediate consequences of the definitions.** For every $x \in X$ and $r > 0$:

- $x \in B(x,r)$, because $d(x,x) = 0 < r$ (axiom (M1) of [[def-metric-space]]);
  in particular open and closed balls are nonempty.
- $B(x,r) \subseteq \bar B(x,r)$ and $S(x,r) \subseteq \bar B(x,r)$, and
  $\bar B(x,r)$ is the disjoint union of $B(x,r)$ and $S(x,r)$, by trichotomy of
  the order of $\mathbb{R}$ ([[def-complete-ordered-field]], [[def-ordered-field]]):
  each $y$ satisfies exactly one of $d(x,y) < r$, $d(x,y) = r$, $d(x,y) > r$.
- If $0 < s \le r$ then $B(x,s) \subseteq B(x,r)$ and
  $\bar B(x,s) \subseteq \bar B(x,r)$, by transitivity of the order.
- Nonnegativity of the metric ([[lem-metric-nonnegativity]]) is what forces the
  radius convention, and it forces it for the **open** ball only: if $r \le 0$
  then $B(x,r) = \{y : d(x,y) < r\}$ is empty, because $d(x,y) \ge 0 \ge r$
  for every $y$. The other two sets behave differently at $r = 0$, and the
  convention $r > 0$ excludes them for uniformity rather than for emptiness:
  $\bar B(x,0) = S(x,0) = \{x\}$, since $d(x,y) \le 0$ together with
  $d(x,y) \ge 0$ gives $d(x,y) = 0$ and hence $y = x$ by (M1). For $r < 0$ all
  three sets are empty.

**A sphere may be empty, and so the three sets are not on a par.** For $r > 0$
the open and closed balls always contain $x$, but nothing in the definition
produces a point at distance exactly $r$ from $x$. If a metric takes only the
values $0$ and $1$, as the discrete metric on the companion page does, then
$S(x,2) = \emptyset$ while $B(x,2) = \bar B(x,2)$ is the whole space. So
nonemptiness of a sphere is never available by convention: where it is used, it
is proved.

**The ambient space is part of the notation.** $B(x,r)$ depends on $(X,d)$ and
not on $x$ and $r$ alone. When more than one space or more than one metric is in
play we write $B_X(x,r)$, or $B_d(x,r)$, and likewise for $\bar B$ and $S$. This
matters as soon as subspaces appear ([[def-isometry-and-metric-embedding]]): a
ball of a subspace is the trace on it of a ball of the ambient space, and the two
are different sets.

### `def-norm-and-normed-space` — definition — A norm on a real vector space, the induced metric, and the dictionary with the metric axioms

(statement provenance: untagged)

### Definition

Throughout this page $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]]) constructed in this library, in particular a
field, so that "vector space" below always means vector space over $\mathbb{R}$
([[def-vector-space]]).

Let $V$ be a vector space over $\mathbb{R}$, with zero vector $0_V$. A **norm on
$V$** is a function $N : V \to \mathbb{R}$ such that for all $u, v \in V$ and all
$\lambda \in \mathbb{R}$:

- **(N1) Separation.** $N(v) = 0$ if and only if $v = 0_V$.
- **(N2) Absolute homogeneity.** $N(\lambda v) = |\lambda|\,N(v)$, the absolute
  value being that of [[def-abs-value]].
- **(N3) Triangle inequality.** $N(u + v) \le N(u) + N(v)$.

A **normed space** is a pair $(V, N)$ consisting of a vector space $V$ over
$\mathbb{R}$ and a norm $N$ on it. When only one norm is in play we write
$\lVert v\rVert$ for $N(v)$; when several are, the norm is always named.

**The values of a norm are real numbers.** The codomain is $\mathbb{R}$, so
$N(v)$ is an honest element of the complete ordered field and no infinite value
is permitted. This is the same convention [[rem-metric-axiom-conventions]]
records for metrics.

### Nonnegativity is a theorem, not an axiom

Many texts add a fourth condition $N(v) \ge 0$. It is redundant. Applying (N2)
with $\lambda = -1$ gives $N(-v) = |-1|\,N(v) = N(v)$ ([[lem-of-abs-value]],
[[lem-vector-space-elementary-consequences]] for $(-1)v = -v$), and then (N3)
with $u = v$ and $-v$ gives

$$0 \;=\; N(0_V) \;=\; N\bigl(v + (-v)\bigr) \;\le\; N(v) + N(-v) \;=\; N(v) + N(v),$$

where $N(0_V) = 0$ is (N1). So $N(v) + N(v) \ge 0$, and if $N(v) < 0$ then
$N(v) + N(v) < 0$ by addition of inequalities, which trichotomy forbids
([[def-complete-ordered-field]]). Hence $N(v) \ge 0$ for every $v \in V$.

**Consequently the verification of a candidate norm has three things to check and
not four**, exactly as the verification of a candidate metric has three and not
four ([[def-metric-space]], [[lem-metric-nonnegativity]]). No item in this
library assumes nonnegativity of a norm before the argument above.

### The induced metric

Let $N$ be a norm on $V$ and define

$$d_N(u,v) \;:=\; N(u - v) \qquad (u, v \in V),$$

where $u - v = u + (-v)$ ([[def-vector-space]]). **Then $d_N$ is a metric on
$V$** ([[def-metric-space]]), and the three axioms are the three conditions
above, in order:

- **(M1)** $d_N(u,v) = 0$ means $N(u-v) = 0$, which by (N1) says $u - v = 0_V$,
  that is $u = v$; and conversely $d_N(v,v) = N(0_V) = 0$.
- **(M2)** $d_N(v,u) = N(v-u) = N\bigl((-1)(u-v)\bigr) = |-1|\,N(u-v) = d_N(u,v)$,
  by (N2), [[lem-of-abs-value]] and $(-1)w = -w$
  ([[lem-vector-space-elementary-consequences]]).
- **(M3)** $d_N(u,w) = N\bigl((u-v) + (v-w)\bigr) \le N(u-v) + N(v-w) = d_N(u,v) + d_N(v,w)$,
  by (N3).

A normed space is therefore a metric space, and every notion defined for metric
spaces — open set ([[def-metric-topology]]), convergence, Cauchyness,
continuity, compactness — is available in it with no further definition. **This
library never introduces a second notion of any of them for normed spaces.**

### Two properties an arbitrary metric need not have

The metric $d_N$ satisfies, for all $u, v, w \in V$ and $\lambda \in \mathbb{R}$:

- **translation invariance**, $d_N(u + w, v + w) = N\bigl((u+w)-(v+w)\bigr) = N(u-v) = d_N(u,v)$;
- **absolute homogeneity**, $d_N(\lambda u, \lambda v) = N\bigl(\lambda(u-v)\bigr) = |\lambda|\,d_N(u,v)$, by (N2).

**Not every metric on a vector space arises from a norm**, and homogeneity is
what fails. The published bounded remetrisation [[lem-bounded-remetrisation]]
replaces a metric $d$ by $d' = \min\{d, 1\}$, a metric with the same topology
whose values never exceed $1$; on a vector space $V$ containing a vector $v$ with
$d(v, 0_V) > 0$ this $d'$ cannot be $d_M$ for any norm $M$, since absolute
homogeneity would force $d'(\lambda v, 0_V) = |\lambda|\,d'(v, 0_V)$, which is
unbounded in $\lambda$, while $d'$ is bounded by $1$. So the passage from norms
to metrics is not reversible, and a statement about a metric on a vector space is
strictly weaker than the corresponding statement about a norm.

### `lem-euclidean-polygonal-paths-are-continuous` — lemma — A finite concatenation of straight segments in $\\mathbb{R}^n$ is a continuous path

(statement provenance: ai-altered)

### Statement

Let $v_0,\ldots,v_m\in\mathbb{R}^n$ and $0=t_0<\cdots<t_m=1$. The affine pieces joining $v_{i-1}$ to $v_i$ define a continuous map $[0,1]\to\mathbb{R}^n$. If every piece lies in a subset $A$, the map is a polygonal path ([[def-polygonal-path-and-polygonal-connectedness]]) in $A$ from $v_0$ to $v_m$.

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

### `def-connected-component-and-quasicomponent` — definition — Connected components, quasicomponents, and totally disconnected spaces

(statement provenance: ai-altered)

### Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]), with
subsets carrying the subspace topology ([[def-subspace-topology-top]]) and
connectedness as in [[def-connected-space]]. Let $x \in X$.

- The **connected component of $x$** is
  $$C(x) \;:=\; \bigcup \{\, A \subseteq X : x \in A \text{ and } A \text{ is connected} \,\} .$$
  A **component of $X$** is a set of the form $C(x)$ for some $x \in X$.
- The **quasicomponent of $x$** is
  $$Q(x) \;:=\; \bigcap \{\, K \subseteq X : x \in K \text{ and } K \text{ is clopen in } X \,\} .$$
  A **quasicomponent of $X$** is a set of the form $Q(x)$.
- $X$ is **totally disconnected** when $C(x) = \{x\}$ for every $x \in X$.

**Both are well posed, and the obligations are discharged here.** The family
united in the definition of $C(x)$ is nonempty, since the singleton $\{x\}$ is
connected: a singleton admits no separation, a separation requiring two disjoint
nonempty pieces. Every member of that family contains $x$, so
[[thm-unions-of-connected-sets]] claim 1 applies and **$C(x)$ is connected**;
being a union of every connected set through $x$, it contains each of them, so
$C(x)$ is *the largest connected subset of $X$ containing $x$*. The family
intersected in the definition of $Q(x)$ is nonempty as well, since $X$ itself is
clopen ([[def-topological-space]]), so the intersection is a set; it contains
$x$, every member doing so.

**Both notions are defined by a property of $X$, not of an ambient space.** A
component of a subspace $S \subseteq X$ means a component of the space $S$, and
is written $C_S(y)$ when the space needs naming. The same holds for
quasicomponents.

**Totally disconnected, spelled out.** $X$ is totally disconnected exactly when
every connected subset of $X$ has at most one point: if some connected $A$ had
two points $x \ne y$ then $A \subseteq C(x)$ would give $C(x) \ne \{x\}$, and
conversely if $C(x) \ne \{x\}$ then $C(x)$ is a connected set with at least two
points. The empty space is totally disconnected, having no point to test.

**A discrete space is totally disconnected.** Let $X$ carry the discrete topology
([[def-standard-topologies]]) and let $A \subseteq X$ have two distinct points
$x, y$. Every subset of $A$ is open in $A$, so $(\{x\}, A \setminus \{x\})$ is a
pair of open, disjoint, nonempty sets covering $A$, that is a separation. Hence
no connected subset has two points and every component is a singleton. The
converse fails: total disconnectedness does not force the topology to be
discrete.

## What to return

Read `cor-components-of-open-subsets-of-rn-are-polygonally-connected` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
