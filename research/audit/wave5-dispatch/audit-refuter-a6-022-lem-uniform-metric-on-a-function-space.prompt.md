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

# Adversarial proof reading — `lem-uniform-metric-on-a-function-space`

## The item under review, in full

`items/lem-uniform-metric-on-a-function-space.md`

```markdown
---
id: lem-uniform-metric-on-a-function-space
kind: lemma
title: "For a nonempty set $X$ and a metric space $(Y,d)$ the uniform metric $\\bar\\rho(f,g) = \\sup_{x} \\min\\{d(f(x),g(x)), 1\\}$ is a metric on $Y^{X}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-metric-space, lem-bounded-remetrisation, def-bounded-set,
       def-complete-ordered-field, lem-sup-unique, def-max-min, lem-finite-set-has-max,
       def-topology-of-pointwise-convergence, lem-metric-nonnegativity,
       rem-sup-conventions, lem-of-add-order, def-ordered-field,
       lem-sup-metric-is-a-metric, thm-extreme-value-metric]
justified_by: []
aliases: [def-uniform-metric]
landmark: true
short: "uniform metric on $Y^{X}$"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Uniform norm (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Uniform_norm"
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "J. Munkres, Topology, 2nd ed., §20"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $X$ be a **nonempty** set, let $(Y,d)$ be a metric space
([[def-metric-space]]) and write

$$\bar d(u,v) \;:=\; \min\{\, d(u,v),\ 1 \,\} \qquad (u, v \in Y),$$

which is a metric on $Y$ with $\bar d \le 1$ everywhere
([[lem-bounded-remetrisation]], claims 1 and 2). For $f, g \in Y^{X}$
([[def-topology-of-pointwise-convergence]]) put

$$R(f,g) \;:=\; \{\, \bar d\big(f(x), g(x)\big) : x \in X \,\} \subseteq \mathbb{R}, \qquad \bar\rho(f,g) \;:=\; \sup R(f,g) .$$

This is well defined: $R(f,g)$ is nonempty because $X$ is, and $1$ is an upper
bound of it, so the least upper bound exists ([[def-complete-ordered-field]]) and
is unique ([[lem-sup-unique]]).

**Then $\bar\rho$ is a metric on $Y^{X}$** ([[def-metric-space]]), the **uniform
metric**, and $\bar\rho(f,g) \le 1$ for all $f, g$.

**Both hypotheses are used and neither is decoration.** Nonemptiness of $X$ is
what makes $R(f,g)$ nonempty; for $X = \varnothing$ the set $Y^{X}$ has a single
element and $\sup \varnothing$ does not exist in this library, which has no
extended real line ([[rem-sup-conventions]]). Truncating $d$ at $1$ is what makes
$R(f,g)$ bounded above **with no boundedness hypothesis on $f$ and $g$**; that is
the whole reason the truncation is there.

## Facts & Assumptions

**Given:** A nonempty set $X$, a metric space $(Y,d)$, functions $f, g, h \in Y^{X}$, a fixed $x_0 \in X$, and $\bar d$, $R$, $\bar\rho$ as displayed above.

[L1] $\bar d = \min\{d,1\}$ is a metric on $Y$: it satisfies (M1), (M2) and (M3) of [[def-metric-space]], and $0 \le \bar d(u,v) \le 1$ for all $u,v$ ([[lem-bounded-remetrisation]], claims 1 and 2, [[lem-metric-nonnegativity]]).

[L2] Least-upper-bound property: a nonempty subset of $\mathbb{R}$ bounded above has a least upper bound, which is an upper bound lying below every upper bound, and it is unique ([[def-complete-ordered-field]], [[lem-sup-unique]], [[def-bounded-set]]).

[L3] Order arithmetic: inequalities may be added and a constant added to both sides, in the strict form of [[lem-of-add-order]] and, with the case of equality settled by totality of the order, in the nonstrict form; and $a \le 0$ together with $a \ge 0$ gives $a = 0$ ([[def-ordered-field]], [[def-complete-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 For all $f, g \in Y^{X}$ the set $R(f,g)$ is nonempty, since $x_0 \in X$ contributes $\bar d(f(x_0),g(x_0))$, and $1$ is an upper bound of it by [L1]; so $\bar\rho(f,g) = \sup R(f,g)$ exists, is unique, and satisfies $\bar\rho(f,g) \le 1$. [given, L1, L2]

2.1 $\bar\rho(f,g) \ge \bar d(f(x),g(x)) \ge 0$ for every $x \in X$, a supremum being an upper bound of its set and $\bar d$ being nonnegative. [step 1.1, L1, L2]

2.2 Symmetry (M2): $\bar d(g(x),f(x)) = \bar d(f(x),g(x))$ for every $x$ by (M2) for $\bar d$, so $R(g,f)$ and $R(f,g)$ are the same subset of $\mathbb{R}$ and have the same supremum. [step 1.1, L1, L2]

2.3 Separation (M1), the other direction: if $f = g$ then $R(f,g) = \{0\}$ by (M1) for $\bar d$, and the least upper bound of $\{0\}$ is $0$, so $\bar\rho(f,g) = 0$. [step 1.1, L1, L2]

3.1 Separation (M1), one direction: if $\bar\rho(f,g) = 0$ then for every $x \in X$ we have $\bar d(f(x),g(x)) \le 0$ by step 2.1 and $\bar d(f(x),g(x)) \ge 0$ by [L1], hence $\bar d(f(x),g(x)) = 0$, hence $f(x) = g(x)$ by (M1) for $\bar d$; so $f = g$, two elements of $Y^{X}$ being equal exactly when they agree at every point. [step 2.1, L1, L3]

3.2 For every $x \in X$: $\bar d(f(x),h(x)) \le \bar d(f(x),g(x)) + \bar d(g(x),h(x)) \le \bar\rho(f,g) + \bar\rho(g,h)$, by (M3) for $\bar d$ and because each supremum bounds its own set above. [step 1.1, step 2.1, L1, L2, L3]

4.1 Triangle inequality (M3): by step 3.2 the real number $\bar\rho(f,g) + \bar\rho(g,h)$ is an upper bound of $R(f,h)$, and $\bar\rho(f,h)$ is the least upper bound of that set, so $\bar\rho(f,h) \le \bar\rho(f,g) + \bar\rho(g,h)$. [step 3.2, L2]

5.1 The function $\bar\rho : Y^{X} \times Y^{X} \to \mathbb{R}$ therefore satisfies (M1) by steps 3.1 and 2.3, (M2) by step 2.2 and (M3) by step 4.1, so it is a metric on $Y^{X}$, and $\bar\rho \le 1$ by step 1.1. [step 1.1, step 2.2, step 3.1, step 2.3, step 4.1, L1] ∎

## Remarks

- **This replaces the published supremum metric here; it does not generalise it.** [[lem-sup-metric-is-a-metric]] is the metric $d_\infty(f,g) = \sup_x |f(x)-g(x)|$ on the **bounded real-valued** functions on a nonempty set, and its Statement is about that set of functions and that target. It cannot carry $C(X,Y)$ for a metric target $Y$, and it cannot carry unbounded functions at all. The metric above is defined on all of $Y^{X}$, for an arbitrary metric target, at the cost of truncating distances at $1$. Where both are defined the two are different functions: they disagree at every pair whose distance somewhere exceeds $1$. The companion page verifies, on $C([0,1],\mathbb{R})$, that they are nevertheless uniformly equivalent there and so induce the same topology; no wider claim than that is made here.

- **The supremum need not be attained**, so $\bar\rho(f,g)$ is a supremum and not a maximum. It is attained when $X$ is a nonempty compact metric space and $f, g$ are continuous, by the extreme value theorem ([[thm-extreme-value-metric]]); nothing below assumes it in general.

- **Truncation is what removes the boundedness hypothesis, and it is topologically free.** $\min\{d,1\}$ is uniformly equivalent to $d$, hence topologically equivalent to it ([[lem-bounded-remetrisation]], claim 3), so nothing about the topology of $Y$ is changed by the truncation. What *is* changed is the numerical value of the distance, and every statement below that compares $\bar\rho$ with an untruncated distance says at which threshold the two agree.
```

## The dependencies it declares, quoted verbatim from disk

Each block below is the claim-bearing text of one declared dependency.
These are the only statements the item is entitled to use. If a step
needs more than the text below gives, that is the defect — quote the
dependency text and show exactly what it fails to supply.

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

### `lem-bounded-remetrisation` — lemma — $\\min(d,1)$ and $d/(1+d)$ are metrics uniformly equivalent to $d$, so every metric space carries a bounded metric with the same topology

(statement provenance: ai-altered)

### Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]) and define, for
$x, y \in X$,

$$d'(x,y) := \min\{\, d(x,y),\ 1 \,\}, \qquad d''(x,y) := \frac{d(x,y)}{1 + d(x,y)} .$$

Both are well defined: $d(x,y) \ge 0$ ([[lem-metric-nonnegativity]]), so
$1 + d(x,y) > 0$ and is invertible, and the minimum of a two-element set of
reals exists ([[lem-finite-set-has-max]], [[def-max-min]]). Then:

1. $d'$ and $d''$ are metrics on $X$.
2. $d'(x,y) \le 1$ and $d''(x,y) < 1$ for all $x,y$; hence $(X,d')$ and
   $(X,d'')$ are bounded metric spaces
   ([[def-metric-bounded-diameter]]), and if $X \ne \emptyset$ then
   $\operatorname{diam}(X) \le 1$ for both.
3. $d'$ and $d''$ are each uniformly equivalent to $d$, hence topologically
   equivalent to it ([[def-equivalent-metrics]],
   [[thm-metric-equivalence-hierarchy]]).

**Consequently every metric space carries a bounded metric with exactly the same
topology**, so boundedness cannot be read off the topology alone.

### `def-bounded-set` — definition — Lower bound, bounded below, bounded set

(statement provenance: literature-derived)

### Definition

Throughout, $\mathbb{R}$ denotes the complete ordered field
([[def-complete-ordered-field]]) and $S \subseteq \mathbb{R}$ is a subset of it.

The notions **upper bound** and **bounded above** are already fixed by
[[def-complete-ordered-field]] and are only recalled here, never redefined:
$u \in \mathbb{R}$ is an *upper bound* of $S$ if $s \le u$ for all $s \in S$, and
$S$ is *bounded above* if it has at least one upper bound. The dual notions are:

- $\ell \in \mathbb{R}$ is a **lower bound** of $S$ if $\ell \le s$ for all $s \in S$.
- $S$ is **bounded below** if it has at least one lower bound.
- $S$ is **bounded** if it is both bounded above and bounded below, that is, if
  there are $\ell, u \in \mathbb{R}$ with $\ell \le s \le u$ for every $s \in S$.

### `def-complete-ordered-field` — definition — Complete ordered field (least-upper-bound property)

(statement provenance: literature-derived)

### Definition

Let $F$ be an ordered field ([[def-ordered-field]]) and $S \subseteq F$.

- $u \in F$ is an **upper bound** of $S$ if $s \le u$ for all $s \in S$; $S$ is
  **bounded above** if it has an upper bound.
- $u \in F$ is a **least upper bound** (or **supremum**, $\sup S$) of $S$ if $u$
  is an upper bound of $S$ and $u \le u'$ for every upper bound $u'$ of $S$.

$F$ is a **complete ordered field** (equivalently, $F$ has the
**least-upper-bound property**, or is **Dedekind complete**) if every nonempty
$S \subseteq F$ that is bounded above has a least upper bound in $F$.

### `lem-sup-unique` — lemma — Suprema and infima are unique

(statement provenance: literature-derived)

### Statement

Let $S \subseteq \mathbb{R}$. If $u_1$ and $u_2$ are both least upper bounds of
$S$ ([[def-complete-ordered-field]]), then $u_1 = u_2$. If $\ell_1$ and $\ell_2$
are both greatest lower bounds of $S$ ([[def-infimum]]), then
$\ell_1 = \ell_2$.

Consequently a set has at most one supremum and at most one infimum, and the
notations $\sup S$ and $\inf S$ denote single, well-determined real numbers
whenever they exist.

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

### `def-topology-of-pointwise-convergence` — definition — The topology of pointwise convergence on $Y^{X}$, which is the product topology, and its restriction to $C(X,Y)$

(statement provenance: literature-derived)

### Definition

Let $X$ be a set and let $(Y, \mathcal{T}_Y)$ be a topological space
([[def-topological-space]]). Write

$$Y^{X} \;:=\; \prod_{x \in X} Y ,$$

the product of the constant family whose factor at every index $x \in X$ is $Y$
([[def-product-topology]]). Unwinding that definition, an element of $Y^{X}$ is a
function with domain $X$ taking its value at each $x$ in $Y$; so $Y^{X}$ **is**
the set of all functions $X \to Y$, and the projection at $x$ is evaluation,

$$\pi_x : Y^{X} \to Y, \qquad \pi_x(f) = f(x) .$$

The **topology of pointwise convergence** on $Y^{X}$ is the product topology: the
initial topology of the family $(\pi_x)_{x \in X}$
([[def-initial-and-final-topology]]), that is the topology generated by the
subbasis

$$\mathcal{G} \;:=\; \{\, \pi_x^{-1}[V] \;:\; x \in X,\ V \in \mathcal{T}_Y \,\}, \qquad \pi_x^{-1}[V] = \{\, f \in Y^{X} : f(x) \in V \,\} .$$

By [[thm-basis-criterion]] the finite intersections of members of $\mathcal{G}$
form a basis for it ([[def-topology-basis-subbasis]]), so the basic open sets are
exactly the sets

$$\{\, f \in Y^{X} \;:\; f(x_j) \in V_j \text{ for every } j < n \,\} \qquad (n \in \mathbb{N},\ x_0, \dots, x_{n-1} \in X,\ V_0, \dots, V_{n-1} \in \mathcal{T}_Y),$$

the value $n = 0$ giving the empty intersection $Y^{X}$ itself. A basic open set
therefore constrains a member of $Y^{X}$ at **finitely many points only**, and
that is the whole content of the topology.

**The restriction to the continuous maps.** Suppose in addition that $X$ carries
a topology, and write

$$C(X,Y) \;:=\; \{\, f \in Y^{X} : f \text{ is continuous} \,\}$$

([[def-continuous-map-top]]). The **topology of pointwise convergence on
$C(X,Y)$** is the subspace topology inherited from $Y^{X}$
([[def-subspace-topology-top]]); its subbasic open sets are the traces
$\pi_x^{-1}[V] \cap C(X,Y)$, since tracing carries a subbasis to a subbasis
([[def-subspace-topology-top]]).

**Nothing on this page gives $C(X,Y)$ a default topology.** The set $C(X,Y)$
carries several different topologies below, and every statement names the one it
means at the point of use.

### `lem-metric-nonnegativity` — lemma — Nonnegativity of a metric is a consequence of the other axioms, not an axiom

(statement provenance: ai-altered)

### Statement

Let $X$ be a set and let $p : X \times X \to \mathbb{R}$ satisfy the reflexivity
axiom (M1') $p(x,x) = 0$ and the symmetry axiom (M2) $p(x,y) = p(y,x)$ of
[[def-metric-space]]. Then:

1. If $p$ satisfies the triangle inequality (M3), then $p(x,y) \ge 0$ for all
   $x, y \in X$.
2. If $p$ satisfies the strong triangle inequality (M3'), then
   $p(x,y) \ge 0$ for all $x, y \in X$.

In particular every metric, every pseudometric and every ultrametric
([[def-metric-space]]) takes only nonnegative values. Nonnegativity is therefore
a theorem about the axiom list this library uses, not a fourth axiom, and no
statement on this page needs to assume it separately.

### `rem-sup-conventions` — remark — Conventions: $\\sup \\emptyset$, unbounded sets, and the extended reals

(statement provenance: ai-altered)

_(no Statement/Definition section found in this item)_

### `lem-of-add-order` — lemma — Order is preserved by adding a constant and by adding inequalities

(statement provenance: ai-altered)

### Statement

Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and
let $a, b, c, d \in F$.

1. **Translation invariance.** If $a < b$ then $a + c < b + c$.
2. **Adding inequalities.** If $a < b$ and $c < d$ then $a + c < b + d$.

### `def-ordered-field` — definition — Ordered field

(statement provenance: ai-altered)

### Definition

An **ordered field** is a field $F$ ([[def-field]]) together with a subset
$P \subseteq F$, the set of **positive** elements (the *positive cone*),
satisfying:

- **(O1) Trichotomy.** For each $x \in F$, exactly one of the following holds:
  $x \in P$, or $x = 0$, or $-x \in P$.
- **(O2) Closure.** If $x, y \in P$ then $x + y \in P$ and $x \cdot y \in P$.

We write $x > 0$ for $x \in P$ (read "$x$ is positive"), and define the order by

$$a < b \;:\Longleftrightarrow\; b - a \in P, \qquad a \le b \;:\Longleftrightarrow\; a < b \text{ or } a = b.$$

Thus $a > b$ means $b < a$, and $a \ge b$ means $b \le a$. An element $x$ with
$-x \in P$ (equivalently $x < 0$) is called **negative**.

### `lem-sup-metric-is-a-metric` — lemma — The supremum metric $d_\\infty(f,g) = \\sup_x |f(x) - g(x)|$ is a metric on the bounded real-valued functions on a nonempty set

(statement provenance: ai-altered)

### Statement

Let $S$ be a nonempty set. Call a function $f : S \to \mathbb{R}$ **bounded** when
its range $f[S] = \{f(s) : s \in S\}$ is a bounded subset of $\mathbb{R}$
([[def-bounded-set]]), and write

$$\mathcal{B}(S) := \{\, f : f \text{ is a bounded function } S \to \mathbb{R} \,\}.$$

For $f, g \in \mathcal{B}(S)$ put $D(f,g) := \{\, |f(s) - g(s)| : s \in S \,\}$ and

$$d_\infty(f,g) := \sup D(f,g).$$

This is well defined: $D(f,g)$ is nonempty because $S$ is, and it is bounded
above (step 1.1 below), so its least upper bound exists
([[def-complete-ordered-field]]) and is unique ([[lem-sup-unique]]).

**Then $d_\infty$ is a metric on $\mathcal{B}(S)$** ([[def-metric-space]]), the
**supremum metric** (also called the uniform metric).

The hypotheses ensure that the formula is a finite real-valued metric for every
pair in the stated function space. Boundedness of $f$ and $g$ makes $D(f,g)$
bounded above, and nonemptiness of $S$ makes it nonempty. Some unbounded pairs
can still have a finite supremum, but allowing all real-valued functions would
not give a finite-valued metric: for example, on $S=\mathbb{R}$ the functions
$f(s)=s$ and $g(s)=0$ make $D(f,g)$ unbounded above
([[rem-sup-conventions]]).

### `thm-extreme-value-metric` — theorem — A continuous real-valued function on a nonempty compact metric space is bounded and attains a greatest and a least value

(statement provenance: ai-altered)

### Statement

Let $(X,d)$ be a nonempty compact metric space ([[def-metric-compactness]],
[[def-metric-space]]) and let $f : X \to \mathbb{R}$ be continuous
([[def-metric-continuity]]), $\mathbb{R}$ carrying its usual metric
$d_{\mathbb{R}}(s,t) = |s-t|$ ([[lem-real-line-is-a-metric-space]]). Then the
image $f[X]$ is bounded above and below ([[def-bounded-set]]), and it has a
maximum and a minimum ([[def-max-min]]): there are points
$x_{\max}, x_{\min} \in X$ with

$$f(x_{\min}) \;\le\; f(x) \;\le\; f(x_{\max}) \qquad \text{for every } x \in X,$$

and then $f(x_{\max}) = \sup f[X]$ and $f(x_{\min}) = \inf f[X]$
([[def-complete-ordered-field]], [[def-infimum]]).

Nonemptiness of $X$ is a hypothesis and not an oversight: for $X = \emptyset$ the
image is empty and has neither a supremum nor a maximum. No choice principle is
used.

## What to return

Read `lem-uniform-metric-on-a-function-space` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
