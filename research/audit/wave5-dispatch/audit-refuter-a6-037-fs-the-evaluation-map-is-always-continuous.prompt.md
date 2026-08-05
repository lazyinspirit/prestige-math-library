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

# Adversarial proof reading — `fs-the-evaluation-map-is-always-continuous`

## The item under review, in full

`items/fs-the-evaluation-map-is-always-continuous.md`

```markdown
---
id: fs-the-evaluation-map-is-always-continuous
kind: false-statement
title: "FALSE: the evaluation map on $C(X,Y)$ with the compact-open topology is continuous for every metric $X$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-evaluation-map, def-compact-open-topology, def-locally-compact-metric-space,
       def-metric-compactness, lem-compactness-is-intrinsic,
       thm-compact-subset-is-closed-and-bounded, lem-distance-to-set-is-lipschitz,
       def-metric-bounded-diameter, def-metric-continuity,
       thm-metric-continuity-characterisations, def-metric-ball, lem-rat-embeds-dense,
       cor-interval-uncountable, thm-rationals-countable, lem-subset-of-countable,
       def-countable, def-interval, lem-real-line-is-a-metric-space,
       def-metrizable-space, def-max-min, lem-finite-set-has-max, def-product-topology,
       def-continuous-map-top, thm-continuity-characterisations-top,
       def-topology-basis-subbasis, thm-basis-criterion, def-metric-topology,
       thm-metric-open-set-algebra, thm-metric-closure-characterisation,
       def-isometry-and-metric-embedding, def-metric-space, def-infimum,
       def-lipschitz-holder-contraction, thm-metric-regularity-hierarchy,
       def-abs-value, def-topological-space,
       thm-evaluation-is-continuous-on-a-locally-compact-metric-domain]
justified_by: []
aliases: []
landmark: false
short: "evaluation is not always continuous"
proof_strategy: contradiction
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
    - title: "Compact-open topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact-open_topology"
    - title: "Locally compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Locally_compact_space"
    - title: "J. Munkres, Topology, 2nd ed., §46"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

**False claim:** for every metric space $X$ and every topological space $Y$ the
evaluation map $e : C(X,Y) \times X \to Y$, $e(f,x) = f(x)$
([[def-evaluation-map]]), is continuous when $C(X,Y)$ carries the compact-open
topology ([[def-compact-open-topology]]).

The witness is $X = \mathbb{Q}$, the rationals inside $\mathbb{R}$ with the
metric $d(s,t) = |s-t|$, and $Y = \mathbb{R}$ with the same metric. The
load-bearing fact is that a compact subset of $\mathbb{Q}$ has empty interior in
$\mathbb{Q}$: it is closed in $\mathbb{R}$, and a subset of $\mathbb{Q}$ closed in
$\mathbb{R}$ that contained a $\mathbb{Q}$-ball would contain a whole real
interval, which is uncountable while $\mathbb{Q}$ is not.

**What the true theorem on this page requires is therefore not decoration.**
Continuity of the evaluation map is proved here under the hypothesis that $X$ is
locally compact ([[def-locally-compact-metric-space]],
[[thm-evaluation-is-continuous-on-a-locally-compact-metric-domain]]), and
$\mathbb{Q}$ is a metric space that is locally compact at no point, exactly
because of the fact just named.

No choice principle is used.

## Facts & Assumptions

**Given:** The rationals $\mathbb{Q}$ inside $\mathbb{R}$ with the metric $d(s,t) = |s-t|$ ([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]]), the target $\mathbb{R}$ with the same metric, the constant function $z : \mathbb{Q} \to \mathbb{R}$ with value $0$, and the open interval $V := (-1,1)$ ([[def-interval]]).

[L1] A compact subset of a metric space is closed in it and bounded; compactness of a subset is a property of the subspace metric alone, so a compact subset of $\mathbb{Q}$ is a compact subset of $\mathbb{R}$ ([[thm-compact-subset-is-closed-and-bounded]], [[def-metric-compactness]], [[lem-compactness-is-intrinsic]], [[def-isometry-and-metric-embedding]]).

[L2] A union of two closed subsets of a metric space is closed, its complement being an intersection of two open sets; iterating covers any finite list, and $\varnothing$ is closed ([[thm-metric-open-set-algebra]], [[def-metric-topology]]).

[L3] Strictly between any two reals lies a rational ([[lem-rat-embeds-dense]]).

[L4] For nonempty $A$ the closure is $\overline{A} = \{\, x : d(x,A) = 0 \,\}$, a closed set equals its closure and contains it, and $d(x,A) \ge 0$ with $d(x,A) \le d(x,a)$ for every $a \in A$; $d(x,A) = 0$ when $x \in A$ ([[thm-metric-closure-characterisation]], [[def-metric-bounded-diameter]], [[def-infimum]]).

[L5] Every nondegenerate open interval of $\mathbb{R}$ is uncountable, $\mathbb{Q}$ is at most countable, and a subset of an at most countable set is at most countable ([[cor-interval-uncountable]], [[thm-rationals-countable]], [[lem-subset-of-countable]], [[def-countable]]).

[L6] For nonempty $A \subseteq \mathbb{Q}$ the map $s \mapsto d(s,A)$ is $1$-Lipschitz, so $s \mapsto c\, d(s,A)$ is Lipschitz with constant $c$ for a real $c > 0$, hence continuous ([[lem-distance-to-set-is-lipschitz]], [[def-lipschitz-holder-contraction]], [[thm-metric-regularity-hierarchy]], [[def-metric-continuity]], [[def-abs-value]]).

[L7] Continuity of a map at a point, in the open-set form, and the fact that the boxes $O \times U$ with $O$ open in $C(\mathbb{Q},\mathbb{R})$ and $U$ open in $\mathbb{Q}$ form a basis for the product topology, while the finite intersections of the sets $S(K,W)$ form a basis for the compact-open topology ([[def-continuous-map-top]], [[thm-continuity-characterisations-top]], [[def-product-topology]], [[def-compact-open-topology]], [[def-topology-basis-subbasis]], [[thm-basis-criterion]], [[def-topological-space]]).

[L8] Balls of the subspace $\mathbb{Q}$ are traces of balls of $\mathbb{R}$: $B_{\mathbb{Q}}(q,r) = (q-r, q+r) \cap \mathbb{Q}$; and a subset of a metric space is open exactly when each of its points has a ball around it inside the set ([[def-isometry-and-metric-embedding]], [[def-metric-ball]], [[def-metric-topology]], [[def-metrizable-space]], [[def-interval]]).

[L9] The minimum of a two-element set of reals exists, is one of them, and is at most each of them ([[lem-finite-set-has-max]], [[def-max-min]]).

## Refutation

**Proof technique:** contradiction.

1.1 Suppose the claim holds; in particular, with $X := \mathbb{Q}$ and $Y := \mathbb{R}$, the evaluation map $e : C(\mathbb{Q},\mathbb{R}) \times \mathbb{Q} \to \mathbb{R}$ is continuous. [assume-contra]

1.2 The constant function $z$ is continuous, and $e(z,0) = 0 \in V$ with $V$ open in $\mathbb{R}$. [given, L6, L8]

2.1 Continuity of $e$ at the point $(z,0)$ gives, by the two bases of [L7], a natural $n$, compact sets $K_0, \dots, K_{n-1} \subseteq \mathbb{Q}$, open sets $V_0, \dots, V_{n-1} \subseteq \mathbb{R}$ and an open $U \subseteq \mathbb{Q}$ with $0 \in U$, such that $z \in O := S(K_0,V_0) \cap \dots \cap S(K_{n-1},V_{n-1})$ and $e[O \times U] \subseteq V$. [step 1.1, step 1.2, L7, choose]

3.1 Fix a real $\varepsilon > 0$ with $B_{\mathbb{Q}}(0,\varepsilon) \subseteq U$. [step 2.1, L8, choose]

3.2 Put $K := K_0 \cup \dots \cup K_{n-1}$, with $K := \varnothing$ when $n = 0$; each $K_j$ is a compact subset of $\mathbb{R}$ and hence closed in $\mathbb{R}$, so $K$ is a subset of $\mathbb{Q}$ closed in $\mathbb{R}$. [step 2.1, L1, L2]

4.1 $B_{\mathbb{Q}}(0,\varepsilon) \not\subseteq K$: otherwise $(-\varepsilon,\varepsilon) \cap \mathbb{Q} \subseteq K$, and this set is nonempty since it contains $0$; every $t \in (-\varepsilon,\varepsilon)$ then satisfies $d(t, (-\varepsilon,\varepsilon) \cap \mathbb{Q}) = 0$, because for a real $s > 0$ the set $(\max\{t-s,-\varepsilon\},\ \min\{t+s,\varepsilon\})$ is a nondegenerate open interval and so contains a rational within $s$ of $t$; hence $t$ lies in the closure of that set, which the closed $K$ contains, so $(-\varepsilon,\varepsilon) \subseteq K \subseteq \mathbb{Q}$, making the uncountable interval $(-\varepsilon,\varepsilon)$ at most countable, which is false. [step 3.2, L3, L4, L5, L8, L9]

5.1 Fix $q \in B_{\mathbb{Q}}(0,\varepsilon)$ with $q \notin K$. [step 4.1, choose]

6.1 Put $\eta := \min\{d(q,K),\ 1\}$ when $K \ne \varnothing$ and $\eta := 1$ when $K = \varnothing$; then $0 < \eta \le 1$, because $K$ closed in $\mathbb{R}$ and $q \notin K$ give $q \notin \overline{K}$ and hence $d(q,K) \ne 0$, while $d(q,K) \ge 0$; and $|q - t| \ge d(q,K) \ge \eta$ for every $t \in K$. [step 3.2, step 5.1, L4, L9]

6.2 $q \in U$, since $|q - 0| < \varepsilon$ puts $q$ in $B_{\mathbb{Q}}(0,\varepsilon) \subseteq U$. [step 3.1, step 5.1]

7.1 Put $A := \{\, s \in \mathbb{Q} : |s - q| \ge \eta \,\}$, which is nonempty because $q + 1 \in \mathbb{Q}$ and $|(q+1) - q| = 1 \ge \eta$, and define $g : \mathbb{Q} \to \mathbb{R}$ by $g(s) := (2/\eta)\, d(s,A)$. [step 6.1, construct, L4]

8.1 $g$ is Lipschitz with constant $2/\eta$, hence continuous, so $g \in C(\mathbb{Q},\mathbb{R})$. [step 7.1, L6]

8.2 $g$ vanishes on $K$: every $t \in K$ lies in $\mathbb{Q}$ and satisfies $|t - q| \ge \eta$ by step 6.1, so $t \in A$ and $d(t,A) = 0$. [step 6.1, step 7.1, L4]

8.3 $g(q) \ge 2$: every $s \in A$ satisfies $|q - s| \ge \eta$, so $\eta$ is a lower bound of the distances from $q$ to the members of $A$ and $d(q,A) \ge \eta$, whence $g(q) = (2/\eta)\,d(q,A) \ge 2$. [step 7.1, L4]

9.1 $g \in O$: for each $j < n$ with $K_j \ne \varnothing$ we have $z \in S(K_j,V_j)$, so $0 \in V_j$, and $g[K_j] \subseteq \{0\} \subseteq V_j$ by step 8.2 since $K_j \subseteq K$; for $K_j = \varnothing$ the condition is vacuous; and for $n = 0$ the set $O$ is the whole of $C(\mathbb{Q},\mathbb{R})$. [step 2.1, step 3.2, step 8.1, step 8.2]

10.1 Hence $(g,q) \in O \times U$ while $e(g,q) = g(q) \ge 2$, so $e(g,q) \notin (-1,1) = V$, contradicting $e[O \times U] \subseteq V$ of step 2.1; the assumption of step 1.1 is therefore false, and the claim fails for $X = \mathbb{Q}$ and $Y = \mathbb{R}$. [step 2.1, step 8.3, step 9.1, step 6.2, discharge-contradiction] ∎

## Remarks

- **The obstruction is exactly the absence of compact neighbourhoods.** A basic compact-open neighbourhood of a function constrains it on finitely many compact sets, and in $\mathbb{Q}$ those sets have empty interior, so they leave rational points arbitrarily close to $0$ completely unconstrained. The bump $g$ exploits one such point. In a locally compact domain no such point exists near $0$: some compact set is a neighbourhood of $0$, and the argument of [[thm-evaluation-is-continuous-on-a-locally-compact-metric-domain]] goes through.

- **Separate continuity is not at issue.** For each fixed $f$ the map $x \mapsto f(x)$ is continuous, and for each fixed $x$ the map $f \mapsto f(x)$ is continuous for the compact-open topology ([[def-evaluation-map]]). What fails above is **joint** continuity, and the witness is the standard warning that separate continuity in each variable does not give continuity on the product.

- **The bump function is built from a distance and needs no maximum or truncation.** Taking $g(s) = (2/\eta)\,d(s,A)$ with $A$ the set of rationals at distance at least $\eta$ from $q$ makes $g$ Lipschitz by [[lem-distance-to-set-is-lipschitz]] alone, vanish on $A$ and hence on $K$, and take a value at least $2$ at $q$. Nothing about its exact shape matters.
```

## The dependencies it declares, quoted verbatim from disk

Each block below is the claim-bearing text of one declared dependency.
These are the only statements the item is entitled to use. If a step
needs more than the text below gives, that is the defect — quote the
dependency text and show exactly what it fails to supply.

### `def-evaluation-map` — definition — The evaluation map $e : C(X,Y) \\times X \\to Y$, $e(f,x) = f(x)$

(statement provenance: literature-derived)

### Definition

Let $(X,d)$ be a metric space carrying its metric topology
([[def-metric-topology]], [[def-metrizable-space]]), let $(Y,\mathcal{T}_Y)$ be a
topological space ([[def-topological-space]]), and let $C(X,Y)$ carry the
compact-open topology ([[def-compact-open-topology]]). The **evaluation map** is

$$e : C(X,Y) \times X \longrightarrow Y, \qquad e(f,x) := f(x),$$

the domain carrying the product topology ([[def-product-topology]]) of the
compact-open topology on $C(X,Y)$ and the metric topology on $X$.

**This is a function.** For $f \in C(X,Y)$ and $x \in X$ the value $f(x)$ is a
well-determined element of $Y$, and a pair $(f,x)$ of the product determines both
entries ([[def-product-topology]]), so $e$ is defined on all of
$C(X,Y) \times X$ with no further condition.

**Which topology is meant is part of the definition.** Continuity of $e$ is a
statement about the pair of topologies on the source and the topology on the
target ([[def-continuous-map-top]]), and $C(X,Y)$ carries several topologies on
this page. Unless another is named, the topology on $C(X,Y)$ inside an evaluation
map is the compact-open one; where a subspace of $C(X,Y)$ is evaluated, it carries
the subspace topology ([[def-subspace-topology-top]]).

**Separate continuity is immediate; joint continuity is not.** For fixed
$f \in C(X,Y)$ the map $x \mapsto e(f,x) = f(x)$ is continuous, being $f$ itself.
For fixed $x \in X$ the map $f \mapsto e(f,x) = f(x)$ is continuous as well, since
for open $V \subseteq Y$ its preimage is $S(\{x\},V)$, a subbasic open set of the
compact-open topology, $\{x\}$ being compact ([[def-compact-open-topology]]).
What is at issue on this page is **joint** continuity, that is continuity of $e$
on the product, and that genuinely needs a hypothesis on $X$: it holds when $X$ is
locally compact, and this page records as a false statement that it holds for
every metric $X$, with an explicit witness.

### `def-compact-open-topology` — definition — The compact-open topology on $C(X,Y)$ for a metric domain $X$, with subbasis $S(K,V) = \\{f : f[K] \\subseteq V\\}$

(statement provenance: literature-derived)

### Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]) carrying its metric topology
([[def-metric-topology]], [[def-metrizable-space]]), let $(Y, \mathcal{T}_Y)$ be
a topological space ([[def-topological-space]]), and let

$$C(X,Y) \;=\; \{\, f : X \to Y \;:\; f \text{ is continuous} \,\}$$

([[def-continuous-map-top]]). For a compact subset $K \subseteq X$
([[def-metric-compactness]]) and an open $V \in \mathcal{T}_Y$ put

$$S(K,V) \;:=\; \{\, f \in C(X,Y) \;:\; f[K] \subseteq V \,\} \;=\; \{\, f \in C(X,Y) : f(x) \in V \text{ for every } x \in K \,\} .$$

The **compact-open topology** on $C(X,Y)$ is the topology generated by

$$\mathcal{S}_{\mathrm{co}} \;:=\; \{\, S(K,V) \;:\; K \subseteq X \text{ compact},\ V \in \mathcal{T}_Y \,\}$$

as a subbasis ([[def-topology-basis-subbasis]]). By [[thm-basis-criterion]] the
finite intersections

$$S(K_0,V_0) \cap \dots \cap S(K_{n-1},V_{n-1}) \qquad (n \in \mathbb{N})$$

form a basis for it, the value $n = 0$ giving the empty intersection $C(X,Y)$.
Nothing has to be checked for this to be a topology: a topology generated by an
arbitrary family exists and is the coarsest one containing it
([[def-topology-basis-subbasis]]).

**Two degenerate members, recorded because they are used.** $S(\varnothing, V) = C(X,Y)$
for every open $V$, the empty set being compact and $f[\varnothing] = \varnothing$;
and $S(K, Y) = C(X,Y)$ for every compact $K$. Both are the whole space, so neither
constrains anything, and arguments below dispose of them separately rather than
dividing by a distance that does not exist.

**The domain is metric, and the target is not.** Compactness of $K$ is
[[def-metric-compactness]], which is defined for subsets of a metric space and,
at this point in the reading order, for nothing else; that is why $X$ carries a
metric here. The target $Y$ needs only its open sets, so it is an arbitrary
topological space throughout this definition and wherever the compact-open
topology alone is in play. Where a distance in the target is used — the uniform
metric, compact convergence, the comparison theorem — $Y$ is required to be
metric and the requirement is stated.

**Compactness of $K$ is intrinsic** ([[def-metric-compactness]]): it means that
the metric subspace $(K, d_K)$ is a compact metric space. The equivalent
description by families of open subsets of $X$ covering $K$ is
[[lem-compactness-is-intrinsic]], and it is cited at every step that uses it.

**Notation.** The letter $S$ carries two unrelated meanings in this library:
$S(x,r)$ is the sphere of centre $x$ and radius $r$ in a metric space
([[def-metric-ball]]), and $S(K,V)$ is the set defined above. The two are never
ambiguous, because the first argument of a sphere is a point and its second a
positive real, while the first argument of $S(K,V)$ is a compact set and its
second an open set; no item on this page writes a sphere.

### `def-locally-compact-metric-space` — definition — Locally compact metric space: every point has a compact neighbourhood

(statement provenance: ai-altered)

### Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]), with balls as in
[[def-metric-ball]] and compact subsets as in [[def-metric-compactness]].

$(X,d)$ is **locally compact** if for every $x \in X$ there are a compact subset
$K \subseteq X$ and a real $r > 0$ with

$$B(x,r) \;\subseteq\; K .$$

**This is the condition "every point has a compact neighbourhood", written out.**
Give $X$ its metric topology $\mathcal{T}_d$ ([[def-metric-topology]]), so that
$(X, \mathcal{T}_d)$ is a topological space ([[def-metrizable-space]]). A set
$K \subseteq X$ is a neighbourhood of $x$ in the sense of
[[def-neighbourhood-top]] exactly when some open $U$ satisfies
$x \in U \subseteq K$, and by [[def-metric-topology]] that holds exactly when some
ball $B(x,r)$ satisfies $B(x,r) \subseteq K$. So the displayed condition says
precisely that $x$ has a compact neighbourhood, and the two readings are the same
condition and not two notions.

**Two conventions are fixed here, because both are live in the literature.**

- *Neighbourhoods need not be open.* This library's convention is
  [[def-neighbourhood-top]]'s, and it is what makes "compact neighbourhood" a
  useful phrase at all: a compact set is rarely open. Note that
  [[def-metric-topology]] uses the word *neighbourhood* for an open set
  containing the point; that narrower usage is confined to that item, and the
  present definition never relies on it.
- *Compactness of a subset is intrinsic.* $K$ compact means the metric subspace
  $(K, d_K)$ is a compact metric space ([[def-metric-compactness]],
  [[def-isometry-and-metric-embedding]]); the equivalent description by families
  of open subsets of the ambient $X$ is [[lem-compactness-is-intrinsic]] and is
  cited wherever it is used.

**Every compact metric space is locally compact**, since $K := X$ and any $r > 0$
serve at every point. The empty metric space is locally compact, the condition
being vacuous.

### `def-metric-compactness` — definition — Open cover, subcover, compact metric space, and compact subset of a metric space

(statement provenance: ai-altered)

### Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]), with open sets as in
[[def-metric-topology]] and balls as in [[def-metric-ball]].

- An **open cover** of $(X,d)$ is a family $\mathcal{U}$ of open subsets of $X$
  with $X = \bigcup \mathcal{U}$, where
  $\bigcup \mathcal{U} = \{\, x \in X : x \in U \text{ for some } U \in \mathcal{U} \,\}$.
- A **subcover** of $\mathcal{U}$ is a subfamily
  $\mathcal{V} \subseteq \mathcal{U}$ that is itself an open cover.
- A family $\mathcal{V}$ of sets is **finite** when $\mathcal{V} = \emptyset$ or
  there are $n \in \mathbb{N}$ and sets $V_0, \dots, V_n$ with
  $\mathcal{V} = \{V_0, \dots, V_n\}$; repetitions in the list are allowed and
  harmless.
- $(X,d)$ is **compact** when every open cover of it has a finite subcover: for
  every open cover $\mathcal{U}$, either $X = \emptyset$ and the empty subfamily
  covers it, or there are $n \in \mathbb{N}$ and
  $U_0, \dots, U_n \in \mathcal{U}$ with
  $$X = U_0 \cup \dots \cup U_n .$$
- A subset $A \subseteq X$ is a **compact subset** of $X$ when the metric
  subspace $(A, d_A)$ is a compact metric space, $d_A$ being the restriction of
  $d$ to $A \times A$ ([[def-isometry-and-metric-embedding]]).

**Compactness of a subset is defined intrinsically, and only intrinsically.**
The last clause speaks about the subspace $(A,d_A)$ and its own open sets, not
about families of open subsets of the ambient $X$. The two readings do agree,
but that is a theorem and not a convention: it is
[[lem-compactness-is-intrinsic]], and no item of this library may use the
ambient reading without citing it. Taking the intrinsic reading as the
definition is what makes "compact" a property of the metric space $(A,d_A)$
alone, so that a set compact in one ambient space is compact in every other one
containing it isometrically.

**The empty space is compact**, since the empty subfamily of any family covers
it; this is the reason the clause above is written with the two cases. The
one-point space is compact too, and so is every space listed as
$\{x_0, \dots, x_n\}$: given a cover, each $x_i$ lies in some member, and
finitely many members chosen in this way already cover.

**The finiteness convention, and how it is used both ways.** "Finite" above is
the listing form, matching the finite lists of
[[def-finite-intersection-property]]. It agrees with the definition of
finiteness by equinumerosity with a natural number ([[def-countable]]), and
both directions of the agreement are available and are used below:

- A nonempty finite set $F$ in the sense of [[def-countable]] satisfies
  $F \approx m$ for some $m \ge 1$, and a bijection $m \to F$ is exactly a
  listing $F = \{a_0, \dots, a_{m-1}\}$.
- Conversely a set listed as $A = \{a_0, \dots, a_n\}$, that is the image of a
  function $a$ with domain $\sigma(n)$, is finite in the sense of
  [[def-countable]]: the map sending $x \in A$ to the least $i \le n$ with
  $a_i = x$ is an injection of $A$ into $\sigma(n)$, so $A$ is equinumerous with
  a subset of $\mathbb{N}$ bounded above, and such a subset is finite
  ([[lem-subset-of-countable]]).

Neither direction uses a choice principle: the second selects nothing, taking a
least index instead.

### `lem-compactness-is-intrinsic` — lemma — A subset of a metric space is open in the subspace metric exactly when it is the trace of an open set of the ambient space, and it is compact as a metric space in its own right exactly when every family of open subsets of the ambient space covering it, indexed or not, has finitely many members covering it

(statement provenance: ai-altered)

### Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]), let $A \subseteq X$ and let
$(A,d_A)$ be the metric subspace ([[def-isometry-and-metric-embedding]]). Then:

1. **Relative openness is a trace.** A set $V \subseteq A$ is open in $(A,d_A)$
   ([[def-metric-topology]]) if and only if $V = U \cap A$ for some $U$ open in
   $(X,d)$.
2. **Compactness read in the ambient space.** $A$ is a compact subset of $X$
   ([[def-metric-compactness]]), that is $(A,d_A)$ is a compact metric space, if
   and only if for every family $\mathcal{U}$ of open subsets of $X$ with
   $A \subseteq \bigcup \mathcal{U}$ there are $n \in \mathbb{N}$ and
   $U_0, \dots, U_n \in \mathcal{U}$ with $A \subseteq U_0 \cup \dots \cup U_n$,
   or else $A = \emptyset$.
3. **The same in indexed form.** $A$ is a compact subset of $X$ if and only if
   for every set $I$ and every family $(U_i)_{i \in I}$ of open subsets of $X$
   with $A \subseteq \bigcup_{i \in I} U_i$ there are $n \in \mathbb{N}$ and
   indices $i_0, \dots, i_n \in I$ with
   $A \subseteq U_{i_0} \cup \dots \cup U_{i_n}$, or else $A = \emptyset$.

Claim 3 is the form used by almost every later proof on this page, because a
cover is usually produced by a rule that attaches an open set to each point or to
each index, and a set of open sets forgets that rule. No choice principle is used
anywhere below; the one place a selection is made is over a finite index set, and
[[lem-finite-choice]] is a theorem of ZF.

### `thm-compact-subset-is-closed-and-bounded` — theorem — A compact subset of a metric space is closed and bounded

(statement provenance: ai-altered)

### Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]) and let $K \subseteq X$ be a
compact subset ([[def-metric-compactness]]). Then $K$ is closed in $X$
([[def-metric-topology]]) and bounded ([[def-metric-bounded-diameter]]).

No choice principle is used: both covers below are given by a rule, and the
indexed form of [[lem-compactness-is-intrinsic]] returns indices rather than
sets.

**The converse is false in general.** A closed and bounded subset of an arbitrary
metric space need not be compact
([[fs-closed-and-bounded-implies-compact-in-every-metric-space]]); it is exactly
in $\mathbb{R}^n$ that the converse holds ([[thm-heine-borel-rn]]).

### `lem-distance-to-set-is-lipschitz` — lemma — $|d(x,A) - d(y,A)| \\le d(x,y)$, so the distance to a fixed nonempty set is $1$-Lipschitz

(statement provenance: ai-altered)

### Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]), let $A \subseteq X$ be
nonempty and let $x, y \in X$. Then

$$|d(x,A) - d(y,A)| \le d(x,y),$$

with $d(\cdot,A)$ the distance to a nonempty set ([[def-metric-bounded-diameter]]).
Thus the real-valued function $u \mapsto d(u,A)$ changes by at most $d(u,v)$
between $u$ and $v$: it is **$1$-Lipschitz**.

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

### `lem-rat-embeds-dense` — lemma — The rationals embed densely in the reals

(statement provenance: ai-altered)

### Statement

The map $q \mapsto \hat q$ ([[def-real-numbers]]) is an embedding of ordered
fields. Every real is approximated by rationals: for $x \in \mathbb{R}$ and
rational $\varepsilon > 0$ there is $q \in \mathbb{Q}$ with
$|x - \hat q| < \hat\varepsilon$. Consequently, strictly between any two
reals lies a rational.

### `cor-interval-uncountable` — corollary — Every nondegenerate interval of $\\mathbb{R}$ is uncountable

(statement provenance: ai-altered)

### Statement

Let $\mathbb{R}$ be a complete ordered field ([[def-complete-ordered-field]]) and
let $a, b \in \mathbb{R}$ with $a < b$. Then both

1. the closed interval $[a,b] = \{\, x \in \mathbb{R} : a \le x \le b \,\}$, and
2. the open interval $(a,b) = \{\, x \in \mathbb{R} : a < x < b \,\}$

are uncountable ([[def-countable]]).

**What this adds to [[thm-r-uncountable]], and what it does not inherit from it.**
That theorem states exactly one thing: $\mathbb{R}$ is uncountable. Its statement
says nothing about any interval, so the present result cannot be read off it. Its
*proof*, on the other hand, is general in every part but its seed: the trisection
rule of its step 2.1 is constructed there for an arbitrary $(a,b) \in I$, and its
steps 4.1, 5.1 and 6.1, together with the interval reasoning of its step 7.1, use
nothing about the starting interval beyond the nesting and the strictness
$a_n < b_n$ that the rule delivers. Only three places are special to $\mathbb{R}$
and to $(0,1)$: the surjection of its step 1.1 is onto $\mathbb{R}$, the recursion
of its step 3.1 is seeded at $(0,(0,1))$, and the conclusion drawn in its step 7.1
is about $\mathbb{R}$. So the construction is re-run below, seeded
instead at the **middle third** of $(a,b)$, against a surjection onto $(a,b)$; the
remarks record why that seed and not $(a,b)$ itself.

### `thm-rationals-countable` — theorem — $\\mathbb{Q}$ is countably infinite

(statement provenance: ai-altered)

### Statement

$\mathbb{Q} \approx \mathbb{N}$ ([[def-equinumerous]]): the rationals are
countably infinite ([[def-countable]]).

**No choice principle is used.** The one place where a reader expects a choice,
"pick a representative $a/b$ of each rational", is exactly where
[[lem-rat-positive-denominator]] applies: every rational *has* a representative
with positive denominator, so the map $(a,b) \mapsto [(a,b)]$ defined on
$\mathbb{Z} \times \mathbb{Z}_{>0}$ is already **surjective** onto $\mathbb{Q}$,
and countability follows from a surjection without ever selecting a
representative. The same device handles $\mathbb{Z}$, which is a surjective image
of $\mathbb{N} \times \mathbb{N}$ by construction ([[def-integers]]).

### `lem-subset-of-countable` — lemma — Every subset of an at most countable set is at most countable

(statement provenance: ai-altered)

### Statement

Let $A$ be at most countable ([[def-countable]]) and let $B \subseteq A$. Then
$B$ is at most countable.

The proof establishes the sharper statement about subsets of $\mathbb{N}$ from
which this follows: **a subset $S \subseteq \mathbb{N}$ is finite if it is
bounded above, and countably infinite if it is not.**

**No choice principle is used.** This is the point of the lemma rather than a
footnote to it. The enumeration of an unbounded $S \subseteq \mathbb{N}$ is built
by always taking the *least* element of $S$ above the previous one, and the least
element of a nonempty set of naturals is canonical
([[thm-well-ordering-principle]]): it is determined by $S$, not selected from it.
Replacing "least" by "some" would turn the construction into an appeal to
dependent choice.

### `def-countable` — definition — Finite, countably infinite, countable, uncountable

(statement provenance: ai-altered)

### Definition

Recall that a natural number is a von Neumann natural
([[def-natural-numbers]]): $0 = \varnothing$ and $\sigma(n) = n \cup \{n\}$, so
that

$$n = \{\, m \in \mathbb{N} : m < n \,\} = \{0, 1, \dots, n-1\}$$

is itself the set of its predecessors. Here $<$ is the order of
[[def-nat-order]], which is defined additively, so the displayed identity is a
theorem and not a convention: it is [[lem-nat-order-is-membership]], proved
immediately above. Let $A$ be a set, and let $\approx$ be equinumerosity
([[def-equinumerous]]).

- $A$ is **finite** if $A \approx n$ for some $n \in \mathbb{N}$.
- $A$ is **countably infinite** if $A \approx \mathbb{N}$.
- $A$ is **at most countable** if it is finite or countably infinite.
- $A$ is **uncountable** if it is not at most countable.

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

### `lem-real-line-is-a-metric-space` — lemma — The absolute value makes $\\mathbb{R}$ a metric space: $d(x,y) = |x-y|$ is a metric, its open balls are the intervals $(x-r, x+r)$, and it is unbounded

(statement provenance: ai-altered)

### Statement

Define $d_{\mathbb{R}} : \mathbb{R} \times \mathbb{R} \to \mathbb{R}$ by
$d_{\mathbb{R}}(x,y) := |x - y|$ ([[def-abs-value]]). Then:

1. $d_{\mathbb{R}}$ is a metric on $\mathbb{R}$ ([[def-metric-space]]); it is
   called the **usual metric** of $\mathbb{R}$.
2. For $x \in \mathbb{R}$ and $r > 0$ the open ball is the bounded open interval
   ([[def-interval]], [[def-metric-ball]])
   $$B(x,r) = (x-r,\ x+r),$$
   and the closed ball is $\bar B(x,r) = [x-r,\ x+r]$.
3. Consequently $U \subseteq \mathbb{R}$ is open in the metric topology of
   $d_{\mathbb{R}}$ ([[def-metric-topology]]) exactly when for every $x \in U$
   there is $r > 0$ with $(x-r, x+r) \subseteq U$. This topology is called the
   **usual topology** of $\mathbb{R}$.
4. $(\mathbb{R}, d_{\mathbb{R}})$ is not a bounded metric space
   ([[def-metric-bounded-diameter]]): no ball contains $\mathbb{R}$, so
   $\operatorname{diam}(\mathbb{R})$ is not defined.

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

### `def-product-topology` — definition — The product set $\\prod_{i \\in I} X_i$ of functions choosing a point in each factor, the projections, the box topology, and the product topology as the initial topology of the projections; the empty product is a one-point space

(statement provenance: ai-altered)

### Definition

**The product set.** Let $I$ be a set and let $X_i$ be a set for each $i \in I$.
The **product** is

$$\prod_{i \in I} X_i \;:=\; \Big\{\, x : x \text{ is a function with domain } I \text{ and } x(i) \in X_i \text{ for every } i \in I \,\Big\},$$

and we write $x_i := x(i)$, the $i$-th **coordinate** of $x$. Two elements of the
product are equal exactly when they agree at every index, functions being equal
when they have the same domain and the same values. For $j \in I$ the $j$-th
**projection** is

$$\pi_j : \prod_{i \in I} X_i \to X_j, \qquad \pi_j(x) := x_j .$$

**Notation for a finite product.** For $I = n$ a natural number, which is the set
$\{0, 1, \dots, n-1\}$ of its predecessors, an element of $\prod_{k<n} X_k$ is a
function on $n$ and we write it $(x_0, \dots, x_{n-1})$. In particular $I = 2$
gives the **binary product**, written $X \times Y$ for $\prod_{i<2} X_i$ with
$X_0 = X$ and $X_1 = Y$, whose elements are written $(u,v)$ for the function
$0 \mapsto u$, $1 \mapsto v$. This is the only meaning the symbol $X \times Y$
carries on this page.

**Two facts about when the product is nonempty, stated because they are used and
because they cost something.** If some $X_{i_0}$ is empty then the product is
empty, since no function can take a value in $X_{i_0}$. Conversely, suppose every
$X_i$ is nonempty.

- For $I = n$ a natural number, the product is nonempty, and this is a theorem of
  ZF: [[lem-finite-choice]] applied to the function $i \mapsto X_i$ on $n$
  supplies a choice function $g$ for the family of values, and
  $x(i) := g(X_i)$ defines a member of $\prod_{k<n} X_k$.
- For an arbitrary $I$ the assertion "$\prod_{i \in I} X_i \ne \varnothing$
  whenever every $X_i$ is nonempty" **is** the Axiom of Choice: it is the
  formulation recorded in [[def-axiom-of-choice]], and the choice function of
  [[def-choice-function]] is exactly a point of the product of a family by
  itself. Every use of it below is flagged at the step that spends it.

**The box topology.** Now let each $X_i$ carry a topology $\mathcal{T}_i$
([[def-topological-space]]). Put

$$\mathcal{R} \;:=\; \Big\{\, \prod_{i \in I} U_i \;:\; U_i \in \mathcal{T}_i \text{ for every } i \in I \,\Big\},$$

the family of **boxes**. $\mathcal{R}$ is a basis for a topology
([[thm-basis-criterion]]): it contains $\prod_i X_i$, so it covers the product,
and it is closed under binary intersections, since

$$\Big(\prod_i U_i\Big) \cap \Big(\prod_i V_i\Big) = \prod_i (U_i \cap V_i)$$

and each $U_i \cap V_i$ is open by (T3). The topology it generates is the **box
topology** $\mathcal{T}^{\square}$, and $\mathcal{R}$ is a basis for it
([[def-topology-basis-subbasis]]).

**The product topology.** The **product topology** $\mathcal{T}^{\Pi}$ on
$\prod_i X_i$ is the initial topology of the family of projections
$(\pi_i)_{i \in I}$ ([[def-initial-and-final-topology]]): the topology generated
by the subbasis

$$\mathcal{G} \;:=\; \{\, \pi_i^{-1}[U] : i \in I,\ U \in \mathcal{T}_i \,\}, \qquad \pi_i^{-1}[U] = \prod_{j \in I} W_j \ \text{ with } W_i = U \text{ and } W_j = X_j \text{ for } j \ne i .$$

By [[thm-basis-criterion]] the finite intersections of members of $\mathcal{G}$
form a basis for $\mathcal{T}^{\Pi}$, and those finite intersections are exactly
the boxes with all but finitely many factors unrestricted:

$$\mathcal{R}^{\Pi} \;=\; \Big\{\, \prod_{i \in I} U_i \;:\; U_i \in \mathcal{T}_i \text{ for every } i, \text{ and } U_i = X_i \text{ for all but finitely many } i \,\Big\}.$$

Indeed the intersection of $\pi_{i_1}^{-1}[U_1], \dots, \pi_{i_n}^{-1}[U_n]$ is
the box whose factor at $i$ is the intersection of those $U_m$ with $i_m = i$ and
is $X_i$ when no $i_m$ equals $i$; and the intersection of no members is the
whole product, the box with every factor $X_i$. Conversely a box with
$U_i = X_i$ off a finite set is such an intersection. Members of
$\mathcal{R}^{\Pi}$ are called **basic product-open** sets, and members of
$\mathcal{R}$ **boxes**. So $\mathcal{R}^{\Pi} \subseteq \mathcal{R}$, with
equality when $I$ is a natural number.

**The empty product.** For $I = \varnothing$ there is exactly one function with
domain $\varnothing$, the empty function, so $\prod_{i \in \varnothing} X_i$ is a
one-point set. A one-point set carries exactly one topology, namely
$\{\varnothing, \{\varnothing\}\}$, since a topology must contain the empty set
and the whole set and there is nothing else to contain
([[def-topological-space]]); so the box topology and the product topology agree
there, and both equal the discrete topology and the indiscrete topology
([[def-standard-topologies]]), which coincide on a one-point set. There are no
projections to speak of, and the initial topology of the empty family is indeed
the indiscrete one ([[def-initial-and-final-topology]]).

**Convention.** Unless the box topology is named explicitly, $\prod_i X_i$ always
carries the product topology in this library. That is not a matter of taste: the
product topology is the one with the characteristic property of the next item,
and the box topology has no such property.

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

### `def-topology-basis-subbasis` — definition — Basis and subbasis for a topology, and the topology generated by a family of sets

(statement provenance: ai-altered)

### Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

A family $\mathcal{B} \subseteq \mathcal{T}$ is a **basis for $\mathcal{T}$** if
every open set is a union of members of $\mathcal{B}$: for every
$U \in \mathcal{T}$ there is $\mathcal{B}_U \subseteq \mathcal{B}$ with
$U = \bigcup \mathcal{B}_U$. Equivalently, and this is the form used in proofs,

$$\text{for every } U \in \mathcal{T} \text{ and every } x \in U \text{ there is } B \in \mathcal{B} \text{ with } x \in B \subseteq U .$$

*The two forms say the same thing.* If every open $U$ is such a union and
$x \in U$, then $x$ lies in one of the sets united, which is a member of
$\mathcal{B}$ inside $U$. Conversely, if the displayed condition holds then
$U = \bigcup \{\, B \in \mathcal{B} : B \subseteq U \,\}$, since each such $B$ is
contained in $U$ and each $x \in U$ lies in one of them. Note that
$\bigcup \varnothing = \varnothing$, so the empty open set is covered by the empty
subfamily and needs no member of $\mathcal{B}$. The members of a basis are called
**basic open sets**.

**The topology generated by a family.** Let $\mathcal{S} \subseteq \mathcal{P}(X)$
be *any* family of subsets of $X$. Then

$$\langle \mathcal{S} \rangle := \bigcap \{\, \mathcal{T}' : \mathcal{T}' \text{ is a topology on } X \text{ with } \mathcal{S} \subseteq \mathcal{T}' \,\}$$

is a topology on $X$, it contains $\mathcal{S}$, and it is contained in every
topology on $X$ that contains $\mathcal{S}$. It is called the **topology
generated by $\mathcal{S}$**, and $\mathcal{S}$ is a **subbasis** for a topology
$\mathcal{T}$ when $\mathcal{T} = \langle \mathcal{S} \rangle$.

*This is well posed, and the obligation is discharged here.* The collection being
intersected is nonempty, because $\mathcal{P}(X)$ is a topology on $X$ containing
$\mathcal{S}$; so the intersection is an intersection of a nonempty family of
subsets of $\mathcal{P}(X)$ and is a set. It is a topology: $\varnothing$ and $X$
lie in every topology on $X$, hence in the intersection, which is (T1); if
$\mathcal{S}' \subseteq \langle \mathcal{S} \rangle$ then $\mathcal{S}'$ is a
subfamily of each $\mathcal{T}'$ in the collection, so $\bigcup \mathcal{S}'$ lies
in each $\mathcal{T}'$ and hence in the intersection, which is (T2); and the same
argument with $U \cap V$ gives (T3). It contains $\mathcal{S}$ because every
$\mathcal{T}'$ in the collection does, and it is contained in each such
$\mathcal{T}'$ because an intersection is contained in each of its members. So
$\langle \mathcal{S} \rangle$ is the coarsest topology on $X$ containing
$\mathcal{S}$ ([[def-topological-space]]), and in particular it is uniquely
determined by $\mathcal{S}$.

**Neither notion is intrinsic to the family alone.** "$\mathcal{B}$ is a basis
for $\mathcal{T}$" and "$\mathcal{S}$ is a subbasis for $\mathcal{T}$" are
relations between a family and a topology, not properties of the family. The
question of which families are a basis *for some* topology, and how the topology
generated by a subbasis is computed from it, is settled by the next item.

### `thm-basis-criterion` — theorem — A family is a basis for a unique topology iff it covers the set and every point of an intersection of two members lies in a member inside that intersection; finite intersections of any subbasis form a basis

(statement provenance: ai-altered)

### Statement

Let $X$ be a set, and for $\mathcal{B} \subseteq \mathcal{P}(X)$ write

$$\mathcal{T}_{\mathcal{B}} := \{\, U \subseteq X : \text{for every } x \in U \text{ there is } B \in \mathcal{B} \text{ with } x \in B \subseteq U \,\} .$$

1. $\mathcal{B}$ is a basis for some topology on $X$ ([[def-topology-basis-subbasis]])
   if and only if

   - **(B1)** $\bigcup \mathcal{B} = X$, and
   - **(B2)** for all $B_1, B_2 \in \mathcal{B}$ and every $x \in B_1 \cap B_2$
     there is $B_3 \in \mathcal{B}$ with $x \in B_3 \subseteq B_1 \cap B_2$.

   When (B1) and (B2) hold, that topology is **unique**: it is
   $\mathcal{T}_{\mathcal{B}}$, which is also exactly the family of all unions of
   subfamilies of $\mathcal{B}$.

2. Let $\mathcal{S} \subseteq \mathcal{P}(X)$ be an arbitrary family and let
   $\mathcal{B}_{\mathcal{S}}$ be the family of intersections of finitely many
   members of $\mathcal{S}$. Then $\mathcal{B}_{\mathcal{S}}$ satisfies (B1) and
   (B2), and $\mathcal{T}_{\mathcal{B}_{\mathcal{S}}} = \langle \mathcal{S} \rangle$,
   the topology generated by $\mathcal{S}$. So the finite intersections of any
   subbasis form a basis for the topology it generates.

**The nullary intersection: this library takes the empty intersection to be $X$.**
In claim 2 the phrase "finitely many" includes **none**, and the intersection of
the empty subfamily of $\mathcal{S}$ is $X$, because the defining condition "lies
in every member of the empty family" holds of every point of $X$. Hence
$X \in \mathcal{B}_{\mathcal{S}}$ for every $\mathcal{S}$, including
$\mathcal{S} = \varnothing$, and **no covering hypothesis is imposed on a
subbasis**. The competing convention takes only nonempty finite intersections and
compensates by requiring $\bigcup \mathcal{S} = X$; under it claim 2 holds
verbatim once that hypothesis is added, and the two conventions differ only in
which of the two devices supplies (B1). The choice made here is recorded again
among this page's conventions, and it is the reason
$\langle \varnothing \rangle$ comes out as the indiscrete topology
$\{\varnothing, X\}$ rather than being undefined.

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

### `thm-metric-open-set-algebra` — theorem — Arbitrary unions and finite intersections of open sets are open, open balls are open and closed balls are closed

(statement provenance: ai-altered)

### Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]), with open and closed sets
as in [[def-metric-topology]] and balls as in [[def-metric-ball]]. Then:

1. **Balls are open.** $B(x,r)$ is open, for every $x \in X$ and every $r > 0$.
2. **Arbitrary unions.** If $\mathcal{U}$ is any collection of open subsets of
   $X$, then $\bigcup \mathcal{U}$ is open.
3. **Finite intersections.** If $n \ge 1$ and $U_0, \dots, U_{n-1}$ are open,
   then $U_0 \cap \dots \cap U_{n-1}$ is open.
4. **Closed balls are closed.** $\bar B(x,r)$ is closed, for every $x \in X$ and
   every $r > 0$.

Together with the fact that $\emptyset$ and $X$ are open, recorded already in
[[def-metric-topology]], claims 2 and 3 say that $\mathcal{T}_d$ has exactly the
closure properties that the word *topology* names.

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

### `def-isometry-and-metric-embedding` — definition — Isometry, isometric embedding, and the subspace metric on a subset

(statement provenance: ai-altered)

### Definition

Let $(X,d_X)$ and $(Y,d_Y)$ be metric spaces ([[def-metric-space]]).

**Isometric embedding and isometry.** A function $f : X \to Y$ is an
**isometric embedding** if

$$d_Y\big(f(x), f(x')\big) = d_X(x,x') \qquad \text{for all } x, x' \in X ,$$

and an **isometry** if it is in addition bijective
([[def-injection-surjection-bijection]]). Two metric spaces are **isometric** if
some isometry between them exists.

**Subspace metric.** Let $A \subseteq X$ and let

$$d_A := d_X \restriction (A \times A)$$

be the restriction of $d_X$ to pairs from $A$. Then $d_A$ is a metric on $A$:
the three axioms (M1), (M2), (M3) of [[def-metric-space]] are conditions on
triples of points, and each holds for points of $A$ because it holds for points
of $X$. The pair $(A, d_A)$ is the **metric subspace** $A$ of $X$, and the
inclusion $A \to X$ is an isometric embedding by construction. The metric
topology of $d_A$ ([[def-metric-topology]]) is the **subspace topology** of $A$.

**Balls of a subspace are traces of balls of the ambient space.** For $a \in A$
and $r > 0$,

$$B_A(a,r) = B_X(a,r) \cap A ,$$

directly from the definitions: a point $z$ lies in the left side exactly when
$z \in A$ and $d_A(a,z) = d_X(a,z) < r$ ([[def-metric-ball]]). This is why the
ambient space is always written into the ball notation, and it is the source of
every apparent paradox about balls in subspaces.

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

### `def-infimum` — definition — Greatest lower bound (infimum)

(statement provenance: literature-derived)

### Definition

Let $S \subseteq \mathbb{R}$ and $\ell \in \mathbb{R}$. Then $\ell$ is a
**greatest lower bound**, or **infimum**, of $S$ if both of the following hold:

- $\ell$ is a lower bound of $S$ ([[def-bounded-set]]), that is, $\ell \le s$ for
  every $s \in S$;
- $\ell' \le \ell$ for every lower bound $\ell'$ of $S$.

Written out in one line:

$$\ell \text{ is an infimum of } S \iff \big[(\forall s \in S)\, \ell \le s\big] \text{ and } \big[(\forall \ell' \in \mathbb{R})\, \big((\forall s \in S)\, \ell' \le s\big) \Rightarrow \ell' \le \ell\big].$$

An infimum, when it exists, is unique ([[lem-sup-unique]]), so we may write
$\inf S$ for it.

### `def-lipschitz-holder-contraction` — definition — Lipschitz map, $\\alpha$-Hölder map for rational $0 < \\alpha \\le 1$, and contraction

(statement provenance: ai-altered)

### Definition

Let $(X,d_X)$ and $(Y,d_Y)$ be metric spaces ([[def-metric-space]]) and let
$f : X \to Y$ be a function. Recall that a metric takes nonnegative real values
([[lem-metric-nonnegativity]]).

- $f$ is **Lipschitz** with **constant** $L$, where $L \in \mathbb{R}$ and
  $L \ge 0$, if
  $$d_Y\big(f(x), f(x')\big) \;\le\; L \, d_X(x,x') \qquad \text{for all } x, x' \in X .$$
  $f$ is *Lipschitz* if it is Lipschitz with some such constant.
- Let $\alpha \in \mathbb{Q}$ with $0 < \alpha \le 1$ ([[def-rat-order]]). $f$ is
  **$\alpha$-Hölder** with **constant** $C$, where $C \in \mathbb{R}$ and
  $C \ge 0$, if
  $$d_Y\big(f(x), f(x')\big) \;\le\; C \, d_X(x,x')^{\alpha} \qquad \text{for all } x, x' \in X ,$$
  the power being the rational power of a nonnegative base
  ([[def-rational-power]]). $f$ is *$\alpha$-Hölder* if it is so with some such
  constant, and *Hölder* if it is $\alpha$-Hölder for some rational
  $\alpha \in (0,1]$.
- $f$ is a **contraction** with constant $q$ if it is Lipschitz with constant $q$
  and $0 \le q < 1$. The number $q$ is then called a **contraction constant** for
  $f$.

**The power $d_X(x,x')^{\alpha}$ is defined at every pair, including $x = x'$.**
The base $d_X(x,x')$ is a nonnegative real, and [[def-rational-power]] defines
$a^{\alpha}$ for every $a > 0$ and, by its supplementary clause, sets
$0^{\alpha} = 0$ for every rational $\alpha > 0$. Since $\alpha > 0$ is required
here, the displayed inequality at $x = x'$ reads $0 \le C \cdot 0$, which holds;
so no separate clause and no restriction to $x \ne x'$ is needed. Note that this
does not by itself explain the strict inequality $\alpha>0$: if one extended the
formula to $\alpha=0$ using the convention $0^0=1$ of [[def-integer-power]], the
equal-point inequality would still be the automatic $0\le C$. Globally, however,
that extension would reduce to the bounded-diameter condition
$d_Y(f(x),f(x'))\le C$, outside the standard Hölder range adopted here.

**Why the exponent is a rational and why it is at most $1$.** This library has no
real exponents ([[def-rational-power]]), so $\alpha$ ranges over the rationals;
that is a limitation of the ambient toolkit and not of the notion. The upper
bound $\alpha \le 1$ is the standard convention, and it is where the notion is
useful: the classical theory reserves the name for $\alpha \in (0,1]$, and
nothing in this library uses an exponent outside that range. No claim is made
here about what an exponent $\alpha > 1$ would do.

**Constants are not unique and are not part of the data.** If $f$ is Lipschitz
with constant $L$ it is Lipschitz with every constant $L' \ge L$, and likewise
for Hölder constants; the adjectives above are existential statements. A
*contraction*, by contrast, requires a constant strictly below $1$, and that is a
real restriction: exhibiting the constant is part of exhibiting a contraction, and
a map that shrinks every distance without admitting one uniform constant is not a
contraction here.

### `thm-metric-regularity-hierarchy` — theorem — Contraction implies Lipschitz implies uniformly continuous implies continuous; every Hölder map is uniformly continuous, and a Lipschitz map on a bounded space is Hölder for every exponent

(statement provenance: ai-altered)

### Statement

Let $(X,d_X)$ and $(Y,d_Y)$ be metric spaces ([[def-metric-space]]) and let
$f : X \to Y$ be a function, with the three regularity conditions as in
[[def-lipschitz-holder-contraction]]. Then:

1. If $f$ is a contraction, it is Lipschitz.
2. If $f$ is Lipschitz, it is uniformly continuous
   ([[def-metric-uniform-continuity]]).
3. If $f$ is uniformly continuous, it is continuous
   ([[def-metric-continuity]]).
4. If $f$ is $\alpha$-Hölder for some rational $\alpha$ with $0 < \alpha \le 1$,
   it is uniformly continuous.
5. Suppose $X$ is nonempty and bounded, and put
   $R := \operatorname{diam}(X) + 1$, a real with $R > 0$
   ([[def-metric-bounded-diameter]]). If $f$ is Lipschitz with constant $L$, then
   for **every** rational $\alpha$ with $0 < \alpha \le 1$ the map $f$ is
   $\alpha$-Hölder with constant $L\,R^{\,1-\alpha}$.

**Claim 5 carries its boundedness hypothesis for a reason, and no unconditional
"Lipschitz implies Hölder" is asserted anywhere here.** On an unbounded space the
implication is false; the witness and its verification are in the first remark
below.

**Strictness is not claimed.** The five implications are asserted and nothing
more; that none of them reverses is witnessed elsewhere, and those witnesses are
not prerequisites of this theorem. See the second remark.

### `def-abs-value` — definition — Absolute value in an ordered field

(statement provenance: literature-derived)

### Definition

Let $F$ be an ordered field ([[def-ordered-field]]). The **absolute value** of
$x \in F$ is

$$|x| \;:=\; \begin{cases} x & \text{if } x \ge 0, \\ -x & \text{if } x < 0. \end{cases}$$

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

### `thm-evaluation-is-continuous-on-a-locally-compact-metric-domain` — theorem — If $X$ is a locally compact metric space then the evaluation map is continuous for the compact-open topology

(statement provenance: ai-altered)

### Statement

Let $(X,d)$ be a **locally compact** metric space
([[def-locally-compact-metric-space]]) carrying its metric topology, let
$(Y,\mathcal{T}_Y)$ be a topological space ([[def-topological-space]]), and give
$C(X,Y)$ the compact-open topology ([[def-compact-open-topology]]). Then the
evaluation map

$$e : C(X,Y) \times X \to Y, \qquad e(f,x) = f(x)$$

([[def-evaluation-map]]) is continuous, the product carrying the product topology
([[def-product-topology]]).

**No hypothesis whatever is placed on $Y$**, which is an arbitrary topological
space: the argument uses only that a point of $Y$ lies in an open set. No choice
principle is used.

**Local compactness is not removable.** This page records as a false statement
that the evaluation map is continuous for every metric domain, and its witness is
$X = \mathbb{Q}$, a metric space that is locally compact at no point.

## What to return

Read `fs-the-evaluation-map-is-always-continuous` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
