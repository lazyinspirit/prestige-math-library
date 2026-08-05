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

# Adversarial proof reading — `ex-the-compact-open-topology-on-the-continuous-functions-of-the-line`

## The item under review, in full

`items/ex-the-compact-open-topology-on-the-continuous-functions-of-the-line.md`

```markdown
---
id: ex-the-compact-open-topology-on-the-continuous-functions-of-the-line
kind: example
title: "On $C(\\mathbb{R}, \\mathbb{R})$ the compact-open topology has the sets $\\{g : \\sup_{[-m,m]} |f-g| < \\varepsilon\\}$ as a neighbourhood base, and $\\mathbb{R}$ is locally compact so evaluation is continuous"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-compact-open-topology, thm-compact-open-equals-compact-convergence,
       def-topology-of-compact-convergence, def-locally-compact-metric-space,
       thm-evaluation-is-continuous-on-a-locally-compact-metric-domain,
       def-evaluation-map, thm-heine-borel-rn, def-metric-compactness, def-interval,
       lem-real-line-is-a-metric-space, def-metrizable-space, def-canonical-natural,
       def-metric-ball, def-metric-topology, def-metric-bounded-diameter,
       def-neighbourhood-top, thm-of-archimedean, lem-of-naturals-positive,
       def-max-min, lem-finite-set-has-max, def-continuous-map-top, def-metric-space]
justified_by: []
aliases: []
landmark: false
short: "compact-open topology on $C(\\mathbb{R},\\mathbb{R})$"
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
    - title: "Compact-open topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact-open_topology"
    - title: "Locally compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Locally_compact_space"
pipeline_run: null
---

## Example

Let $\mathbb{R}$ carry its usual metric $d(s,t) = |s-t|$
([[lem-real-line-is-a-metric-space]]) and let $C(\mathbb{R},\mathbb{R})$ carry
the compact-open topology ([[def-compact-open-topology]]). For a natural
$m \ge 1$ write $[-m,m] := \{\, t \in \mathbb{R} : -\iota(m) \le t \le \iota(m) \,\}$
([[def-interval]], [[def-canonical-natural]]). Then:

1. every $[-m,m]$ is a compact subset of $\mathbb{R}$, and every compact
   $K \subseteq \mathbb{R}$ is contained in some $[-m,m]$;
2. for each $f \in C(\mathbb{R},\mathbb{R})$ the sets
   $$B_{[-m,m]}(f,\varepsilon) = \{\, g \in C(\mathbb{R},\mathbb{R}) : |f(t)-g(t)| < \varepsilon \text{ for every } t \in [-m,m] \,\} \qquad (m \ge 1,\ \varepsilon > 0)$$
   form a neighbourhood base at $f$ in the compact-open topology
   ([[def-neighbourhood-top]]);
3. $\mathbb{R}$ is a locally compact metric space
   ([[def-locally-compact-metric-space]]), so the evaluation map
   $e : C(\mathbb{R},\mathbb{R}) \times \mathbb{R} \to \mathbb{R}$ is continuous
   ([[thm-evaluation-is-continuous-on-a-locally-compact-metric-domain]],
   [[def-evaluation-map]]).

The quantity $\sup_{t \in [-m,m]} |f(t)-g(t)|$ of the title exists and is a
maximum, by fact (U3) of [[def-topology-of-compact-convergence]]; the
formulation in claim 2 avoids writing it, which is what keeps the empty compact
set harmless elsewhere on this page.

## Facts & Assumptions

**Given:** $\mathbb{R}$ with the usual metric, $C(\mathbb{R},\mathbb{R})$ with the compact-open topology, and for a natural $m \ge 1$ the interval $[-m,m]$.

[L1] A subset of $\mathbb{R}$ is a compact subset exactly when it is closed in $\mathbb{R}$ and bounded, and a bounded subset lies in a ball $B(0,r)$, so $|t| < r$ for each of its points ([[thm-heine-borel-rn]], claim 3, [[def-metric-compactness]], [[def-metric-bounded-diameter]], [[def-metric-ball]]).

[L2] A subset of $\mathbb{R}$ is closed exactly when its complement is open, and a set is open exactly when each of its points has a ball around it inside the set ([[def-metric-topology]], [[def-metrizable-space]], [[def-metric-ball]]).

[L3] For every real $x$ there is a natural $m \ge 1$ with $x < \iota(m)$, and $\iota$ is strictly increasing with $\iota(m) > 0$ for $m \ge 1$ ([[thm-of-archimedean]], [[lem-of-naturals-positive]], [[def-canonical-natural]]).

[L4] The compact-open topology on $C(X,Y)$ for metric $X$ and $Y$ is the topology of compact convergence, whose sets $B_K(f,\varepsilon)$ centred at $f$ form a neighbourhood base at $f$ ([[thm-compact-open-equals-compact-convergence]], [[def-topology-of-compact-convergence]], fact (U4), [[def-compact-open-topology]], [[def-metric-space]]).

[L5] If $K \subseteq K'$ are compact then $B_{K'}(f,\varepsilon) \subseteq B_K(f,\varepsilon)$, the defining condition on $K'$ being stronger ([[def-topology-of-compact-convergence]]).

[L6] $(X,d)$ is locally compact when every point has a compact set containing a ball around it ([[def-locally-compact-metric-space]]); and evaluation is then continuous ([[thm-evaluation-is-continuous-on-a-locally-compact-metric-domain]], [[def-evaluation-map]], [[def-continuous-map-top]]).

[L7] The maximum of a two-element set of reals exists and is one of them ([[lem-finite-set-has-max]], [[def-max-min]]).

## Verification

**Proof technique:** direct.

1.1 $[-m,m]$ is bounded, lying in $B(0, \iota(m)+1)$, and closed in $\mathbb{R}$, since a point $y$ with $y > \iota(m)$ has $B(y, y - \iota(m))$ inside the complement and a point with $y < -\iota(m)$ has $B(y, -\iota(m) - y)$ inside it; so $[-m,m]$ is a compact subset of $\mathbb{R}$. [L1, L2]

2.1 Let $K \subseteq \mathbb{R}$ be compact; it is bounded, so fix a real $r > 0$ with $|t| < r$ for every $t \in K$, and then a natural $m \ge 1$ with $r < \iota(m)$; every $t \in K$ satisfies $-\iota(m) \le t \le \iota(m)$, that is $K \subseteq [-m,m]$. This with step 1.1 is claim 1. [step 1.1, L1, L3, choose]

2.2 For claim 3, let $x \in \mathbb{R}$ and take a natural $m \ge 1$ with $|x| + 1 < \iota(m)$; then $[-m,m]$ is compact by step 1.1 and $B(x,1) \subseteq [-m,m]$, since $|t - x| < 1$ gives $|t| \le |x| + 1 < \iota(m)$ by the triangle inequality for the absolute value. [step 1.1, L3, L7, choose]

3.1 For claim 2, fix $f \in C(\mathbb{R},\mathbb{R})$ and let $N$ be a neighbourhood of $f$ in the compact-open topology; since that topology is the topology of compact convergence, there are a compact $K$ and a real $\varepsilon > 0$ with $B_K(f,\varepsilon) \subseteq N$. [step 2.1, L4, choose]

4.1 Take $m \ge 1$ with $K \subseteq [-m,m]$; then $B_{[-m,m]}(f,\varepsilon) \subseteq B_K(f,\varepsilon) \subseteq N$, and $f \in B_{[-m,m]}(f,\varepsilon)$, which is itself a neighbourhood of $f$ by step 1.1 and [L4]; so the displayed family is a neighbourhood base at $f$, which is claim 2. [step 1.1, step 2.1, step 3.1, L4, L5]

5.1 So every point of $\mathbb{R}$ has a compact set containing a ball around it, that is $\mathbb{R}$ is a locally compact metric space; hence the evaluation map on $C(\mathbb{R},\mathbb{R})$ is continuous, which is claim 3. [step 2.2, L6] ∎

## Remarks

- **Claim 2 is what makes the compact-open topology on $C(\mathbb{R},\mathbb{R})$ concrete.** A general neighbourhood in it involves an arbitrary compact set and an arbitrary open subset of the target; claim 2 replaces both by a bound on a symmetric interval and a single $\varepsilon$, and the intervals may be indexed by the naturals. That is the shape a metrization proof would exploit, and this library does not carry out that proof.

- **Local compactness of $\mathbb{R}$ is where Heine-Borel is spent.** In a general metric space a closed ball need not be compact, and then nothing above survives; what makes $\mathbb{R}$ work is that closed bounded sets are compact ([[thm-heine-borel-rn]]). The contrast is $\mathbb{Q}$, where the evaluation map is not continuous at all.

- **The intervals $[-m,m]$ exhaust $\mathbb{R}$, and that is claim 1's real content.** Every compact subset sits inside one of countably many of them, so the compact sets, of which there are very many, are controlled by a countable family. Nothing about metrizability follows from this alone, and none is claimed.
```

## The dependencies it declares, quoted verbatim from disk

Each block below is the claim-bearing text of one declared dependency.
These are the only statements the item is entitled to use. If a step
needs more than the text below gives, that is the defect — quote the
dependency text and show exactly what it fails to supply.

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

### `thm-compact-open-equals-compact-convergence` — theorem — For a metric domain and a metric target the compact-open topology on $C(X,Y)$ is the topology of compact convergence

(statement provenance: ai-altered)

### Statement

Let $(X,d_X)$ and $(Y,d)$ be metric spaces ([[def-metric-space]]), each carrying
its metric topology, and let $C(X,Y)$ be the set of continuous maps $X \to Y$
([[def-continuous-map-top]]). Then the compact-open topology
([[def-compact-open-topology]]) and the topology of compact convergence
([[def-topology-of-compact-convergence]]) on $C(X,Y)$ are **the same topology**.

Both halves are proved by exhibiting, around each point of a generating set of
one topology, a generating set of the other inside it. No choice principle is
used: the only cover produced below is indexed by pairs, so the indexed form of
compactness ([[lem-compactness-is-intrinsic]]) returns everything that is needed.

**The metric hypothesis on the target is not removable by anything on this page.**
The topology of compact convergence is defined only for a metric target, since its
basic sets are written with a distance in $Y$; the compact-open topology needs
only the open sets of $Y$. The theorem is a statement about the case where both
are defined.

### `def-topology-of-compact-convergence` — definition — The topology of compact convergence on $C(X,Y)$ for metric $X$ and $Y$: uniform convergence on each compact subset of $X$

(statement provenance: literature-derived)

### Definition

Let $(X,d_X)$ and $(Y,d)$ be metric spaces ([[def-metric-space]]), each carrying
its metric topology ([[def-metric-topology]], [[def-metrizable-space]]), and let
$C(X,Y)$ be the set of continuous maps $X \to Y$ ([[def-continuous-map-top]]).
For a compact subset $K \subseteq X$ ([[def-metric-compactness]]), a function
$f \in C(X,Y)$ and a real $\varepsilon > 0$ put

$$B_K(f,\varepsilon) \;:=\; \{\, g \in C(X,Y) \;:\; d\big(f(x), g(x)\big) < \varepsilon \text{ for every } x \in K \,\} .$$

No supremum appears in this definition, deliberately: for $K = \varnothing$ the
condition is vacuous and $B_{\varnothing}(f,\varepsilon) = C(X,Y)$, whereas a
supremum over the empty set does not exist in this library.

**The family $\mathcal{B}_{\mathrm{cc}} := \{\, B_K(f,\varepsilon) : K \subseteq X
\text{ compact},\ f \in C(X,Y),\ \varepsilon > 0 \,\}$ is a basis for a unique
topology on $C(X,Y)$** ([[thm-basis-criterion]], claim 1); that topology is the
**topology of compact convergence** (also called the topology of uniform
convergence on compact sets). The verification is carried out below.

### Three facts, discharged here and reused on this page

**(U1) A union of two compact subsets of $X$ is compact.** Let $K_1, K_2 \subseteq X$
be compact and let $(U_i)_{i \in I}$ be open subsets of $X$ with
$K_1 \cup K_2 \subseteq \bigcup_{i \in I} U_i$. If $K_1 \cup K_2 = \varnothing$
there is nothing to prove. Otherwise each $K_m$ is covered by the same family, so
by [[lem-compactness-is-intrinsic]] (claim 3) either $K_m = \varnothing$, and we
take the empty list for it, or there are finitely many indices whose sets cover
$K_m$; concatenating the two lists gives finitely many indices whose sets cover
$K_1 \cup K_2$, and that list is nonempty because $K_1 \cup K_2$ is. By
[[lem-compactness-is-intrinsic]] again, $K_1 \cup K_2$ is compact. Nothing is
selected: the indices are returned by the indexed form of compactness.

**(U2) For $f, g \in C(X,Y)$ the function $\varphi(x) := d(f(x),g(x))$ is a
continuous map $X \to \mathbb{R}$**, $\mathbb{R}$ carrying its usual metric
([[lem-real-line-is-a-metric-space]]). Indeed for $x, x' \in X$,

$$|\varphi(x) - \varphi(x')| \le \big|d(f(x),g(x)) - d(f(x'),g(x))\big| + \big|d(f(x'),g(x)) - d(f(x'),g(x'))\big| \le d\big(f(x),f(x')\big) + d\big(g(x),g(x')\big),$$

the first inequality by the triangle inequality for the absolute value
([[lem-of-triangle-inequality]], [[def-abs-value]]) applied after inserting and
removing $d(f(x'),g(x))$, and the second by the reverse triangle inequality
([[lem-metric-reverse-triangle]]) applied twice, the second time after using the
symmetry of $d$. Given $a \in X$ and a real $\varepsilon > 0$, continuity of $f$
and of $g$ at $a$ ([[def-metric-continuity]], [[def-metrizable-space]]) supplies
reals $\delta_1, \delta_2 > 0$ with $d(f(x),f(a)) < \varepsilon/2$ for
$d_X(x,a) < \delta_1$ and $d(g(x),g(a)) < \varepsilon/2$ for $d_X(x,a) < \delta_2$;
then $\delta := \min\{\delta_1,\delta_2\} > 0$ ([[lem-finite-set-has-max]],
[[def-max-min]]) gives $|\varphi(x)-\varphi(a)| < \varepsilon$ whenever
$d_X(x,a) < \delta$.

**(U3) For $f, g \in C(X,Y)$ and a nonempty compact $K \subseteq X$ the value
$\max_{x \in K} d(f(x),g(x))$ exists.** The restriction of $\varphi$ to the metric
subspace $(K, d_K)$ ([[def-isometry-and-metric-embedding]]) is continuous, the
$\varepsilon$-$\delta$ condition at a point of $K$ being the condition for
$\varphi$ read for the points of $K$ only; $(K,d_K)$ is a nonempty compact metric
space ([[def-metric-compactness]]); so [[thm-extreme-value-metric]] gives a point
of $K$ at which $\varphi$ attains a greatest value.

### Discharge of the basis conditions

**(B1)** Every $f \in C(X,Y)$ lies in $B_{\varnothing}(f,1) \in \mathcal{B}_{\mathrm{cc}}$,
so $\bigcup \mathcal{B}_{\mathrm{cc}} = C(X,Y)$.

**(B2)** Let $h \in B_{K_1}(f_1,\varepsilon_1) \cap B_{K_2}(f_2,\varepsilon_2)$.
For $m \in \{1,2\}$ put $\delta_m := \varepsilon_m$ if $K_m = \varnothing$, and
otherwise $\delta_m := \varepsilon_m - M_m$ where
$M_m := \max_{x \in K_m} d(f_m(x),h(x))$, which exists by (U3) and satisfies
$M_m < \varepsilon_m$ because $h \in B_{K_m}(f_m,\varepsilon_m)$; either way
$\delta_m > 0$. Put $K := K_1 \cup K_2$, compact by (U1), and
$\delta := \min\{\delta_1,\delta_2\} > 0$ ([[lem-finite-set-has-max]],
[[def-max-min]]). Then $h \in B_K(h,\delta)$, and
$B_K(h,\delta) \subseteq B_{K_m}(f_m,\varepsilon_m)$ for $m \in \{1,2\}$: for
$g \in B_K(h,\delta)$ and $x \in K_m \subseteq K$,

$$d\big(f_m(x), g(x)\big) \le d\big(f_m(x), h(x)\big) + d\big(h(x), g(x)\big) < M_m + \delta \le M_m + \delta_m = \varepsilon_m$$

when $K_m \ne \varnothing$, and the condition is vacuous when $K_m = \varnothing$.
So $B_K(h,\delta) \in \mathcal{B}_{\mathrm{cc}}$ contains $h$ and lies inside the
intersection, which is (B2).

By [[thm-basis-criterion]] the family $\mathcal{B}_{\mathrm{cc}}$ is therefore a
basis for exactly one topology on $C(X,Y)$, and the open sets of that topology are
exactly the unions of members of $\mathcal{B}_{\mathrm{cc}}$
([[def-topology-basis-subbasis]]).

**(U4) For each $f \in C(X,Y)$ the sets $B_K(f,\varepsilon)$ *centred at $f$* form
a neighbourhood base at $f$** ([[def-neighbourhood-top]]). Indeed a neighbourhood
of $f$ contains a basic set $B_{K_1}(f_1,\varepsilon_1)$ containing $f$, and the
(B2) computation above run with $h := f$, $K_2 := \varnothing$ and
$\varepsilon_2 := 1$ produces $\delta > 0$ with
$f \in B_{K_1}(f,\delta) \subseteq B_{K_1}(f_1,\varepsilon_1)$. This is the form in
which the topology is used in practice: convergence to $f$ in it is exactly uniform
convergence to $f$ on each compact subset of $X$.

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

### `thm-heine-borel-rn` — theorem — Heine-Borel in $\\mathbb{R}^n$: with the Euclidean metric a subset of $\\mathbb{R}^n$ is compact if and only if it is closed and bounded, and the proof by bisection uses no choice principle; the same holds on the real line

(statement provenance: ai-altered)

### Statement

Let $n \in \mathbb{N}$ with $n \ge 1$, let $\mathbb{R}^n$ be the set of functions
$n \to \mathbb{R}$ and let $d_2$ be the Euclidean metric on it
([[lem-metrics-on-rn]]). Then:

1. **Closed boxes are compact.** For reals $a_k \le b_k$ $(k < n)$ the box
   $Q = \{\, x \in \mathbb{R}^n : a_k \le x_k \le b_k \text{ for every } k < n \,\}$
   is a compact subset of $(\mathbb{R}^n, d_2)$ ([[def-metric-compactness]]).
2. **Heine-Borel.** A subset $K \subseteq \mathbb{R}^n$ is a compact subset of
   $(\mathbb{R}^n, d_2)$ if and only if $K$ is closed in $\mathbb{R}^n$
   ([[def-metric-topology]]) and bounded
   ([[def-metric-bounded-diameter]]).
3. **The real line.** A subset $K \subseteq \mathbb{R}$ is a compact subset of
   $(\mathbb{R}, d_{\mathbb{R}})$, the usual metric $d_{\mathbb{R}}(x,y) = |x-y|$
   ([[lem-real-line-is-a-metric-space]]), if and only if $K$ is closed in
   $\mathbb{R}$ and bounded.

**No choice principle is used.** The bisection below halves one coordinate at a
time and takes the **left** half whenever the left half still fails to be finitely
covered, the right half otherwise: a rule with two outcomes, decided by a
property of the box, not a selection. That is the whole reason the theorem is
available in ZF, while the general "complete and totally bounded implies compact"
([[thm-complete-and-totally-bounded-implies-compact]]) is not.

The hypothesis $n \ge 1$ is inherited from [[lem-metrics-on-rn]], which defines
$\mathbb{R}^n$ and its metrics only there; the last remark below records what
happens at $n = 0$.

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

### `def-neighbourhood-top` — definition — Neighbourhood of a point and neighbourhood base, with this library's convention that a neighbourhood need not be open

(statement provenance: ai-altered)

### Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$x \in X$.

A set $N \subseteq X$ is a **neighbourhood of $x$** if there is an open
$U \in \mathcal{T}$ with $x \in U \subseteq N$. The family of all neighbourhoods
of $x$ is written $\mathcal{N}(x)$ and called the **neighbourhood filter** at
$x$. A neighbourhood that is itself open is an **open neighbourhood**.

**Convention, and it is a live fork: in this library a neighbourhood need not be
open.** The competing convention, used by Munkres among others, defines a
neighbourhood of $x$ to be an *open* set containing $x$. Both are in current use;
this library follows the one above and writes "open neighbourhood" in full
whenever openness is wanted, so that no statement here depends on which
convention a reader brings.

A family $\mathcal{B}_x \subseteq \mathcal{N}(x)$ is a **neighbourhood base at
$x$** if every neighbourhood of $x$ contains a member of $\mathcal{B}_x$: for
every $N \in \mathcal{N}(x)$ there is $B \in \mathcal{B}_x$ with $B \subseteq N$.

**Four immediate consequences, established here because they are used
constantly.**

1. *$X$ is a neighbourhood of each of its points*, since $x \in X \subseteq X$
   and $X$ is open by (T1); so $\mathcal{N}(x) \ne \varnothing$ and every point
   has at least one neighbourhood base, namely $\mathcal{N}(x)$ itself.
2. *A superset of a neighbourhood of $x$ is a neighbourhood of $x$*: if
   $x \in U \subseteq N \subseteq M$ with $U$ open then $x \in U \subseteq M$.
3. *The intersection of two neighbourhoods of $x$ is a neighbourhood of $x$*: if
   $x \in U \subseteq N$ and $x \in V \subseteq M$ with $U, V$ open, then
   $U \cap V$ is open by (T3) and $x \in U \cap V \subseteq N \cap M$. By
   iteration the same holds for any intersection of finitely many
   neighbourhoods of $x$.
4. *A set is open exactly when it is a neighbourhood of each of its points.* If
   $U$ is open and $x \in U$ then $x \in U \subseteq U$. Conversely, if $N$ is a
   neighbourhood of each of its points, choose for each $x \in N$ an open $U_x$
   with $x \in U_x \subseteq N$; then $N = \bigcup_{x \in N} U_x$ is open by (T2).
   No choice principle is involved: $U_x$ may be taken to be the union of *all*
   open subsets of $N$ containing $x$, which is determined by $x$ and $N$, and is
   open by (T2).

**Basic sets give neighbourhood bases.** If $\mathcal{B}$ is a basis for
$\mathcal{T}$ ([[def-topology-basis-subbasis]]) then
$\mathcal{B}_x := \{\, B \in \mathcal{B} : x \in B \,\}$ is a neighbourhood base
at $x$ consisting of open sets. Each such $B$ is open and contains $x$, hence is
a neighbourhood of $x$; and if $N \in \mathcal{N}(x)$, fix open $U$ with
$x \in U \subseteq N$ and then $B \in \mathcal{B}$ with $x \in B \subseteq U$,
which gives $B \in \mathcal{B}_x$ with $B \subseteq N$. A member of
$\mathcal{B}_x$ is called a **basic neighbourhood** of $x$.

### `thm-of-archimedean` — theorem — Every complete ordered field is Archimedean

(statement provenance: literature-derived)

### Statement

Every complete ordered field $F$ ([[def-complete-ordered-field]]) is Archimedean:
for every $x \in F$ there is a natural number $n \ge 1$ with $x < n \cdot 1_F$,
where $n \cdot 1_F$ is the canonical natural of the ordered field $F$
([[def-ordered-field]]). Equivalently, the canonical naturals are cofinal in $F$.

### `lem-of-naturals-positive` — lemma — Canonical naturals are positive and strictly increasing

(statement provenance: ai-altered)

### Statement

Let $F$ be an ordered field, with field structure as in [[def-field]], and for
$n \ge 1$ let $n \cdot 1_F$ denote the canonical natural number
$\underbrace{1_F + \cdots + 1_F}_{n}$, defined recursively by $1 \cdot 1_F = 1_F$
and $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$. Then for every $n \ge 1$:

- $n \cdot 1_F > 0$ and $(n+1) \cdot 1_F > n \cdot 1_F$;
- the map $n \mapsto n \cdot 1_F$ is strictly increasing, hence injective, on $\{1, 2, 3, \dots\}$;
- $(m+n) \cdot 1_F = m \cdot 1_F + n \cdot 1_F$ and $(mn) \cdot 1_F = (m \cdot 1_F)(n \cdot 1_F)$ for all $m, n \ge 1$.

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

## What to return

Read `ex-the-compact-open-topology-on-the-continuous-functions-of-the-line` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
