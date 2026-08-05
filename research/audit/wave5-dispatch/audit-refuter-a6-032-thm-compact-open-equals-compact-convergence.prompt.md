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

# Adversarial proof reading — `thm-compact-open-equals-compact-convergence`

## The item under review, in full

`items/thm-compact-open-equals-compact-convergence.md`

```markdown
---
id: thm-compact-open-equals-compact-convergence
kind: theorem
title: "For a metric domain and a metric target the compact-open topology on $C(X,Y)$ is the topology of compact convergence"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-compact-open-topology, def-topology-of-compact-convergence,
       def-metric-compactness, lem-compactness-is-intrinsic,
       lem-closed-subset-of-a-compact-space-is-compact,
       thm-continuous-image-of-a-compact-space-is-compact, thm-extreme-value-metric,
       lem-distance-to-set-is-lipschitz, def-metric-bounded-diameter, def-metric-ball,
       thm-metric-open-set-algebra, def-continuous-map-top, def-metrizable-space,
       def-metric-continuity, def-metric-topology, def-topology-basis-subbasis,
       thm-basis-criterion, def-isometry-and-metric-embedding, def-max-min,
       lem-finite-set-has-max, thm-metric-regularity-hierarchy,
       def-lipschitz-holder-contraction, def-infimum, lem-real-line-is-a-metric-space,
       def-metric-space]
justified_by: []
aliases: []
landmark: true
short: "compact-open = compact convergence"
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
    - title: "Compact convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_convergence"
    - title: "J. Munkres, Topology, 2nd ed., §46"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

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

## Facts & Assumptions

**Given:** Metric spaces $(X,d_X)$ and $(Y,d)$ with their metric topologies, the set $C(X,Y)$ of continuous maps, the sets $S(K,V)$ of [[def-compact-open-topology]], the sets $B_K(f,\varepsilon)$ of [[def-topology-of-compact-convergence]], and the topologies $\mathcal{T}_{\mathrm{co}}$ and $\mathcal{T}_{\mathrm{cc}}$ they respectively generate.

[L1] The sets $S(K,V)$, for $K \subseteq X$ compact and $V \subseteq Y$ open, are a subbasis for $\mathcal{T}_{\mathrm{co}}$; $S(\varnothing,V) = S(K,Y) = C(X,Y)$; and finite intersections of subbasic sets are open ([[def-compact-open-topology]], [[thm-basis-criterion]], [[def-topology-basis-subbasis]]).

[L2] The sets $B_K(f,\varepsilon)$ are a basis for $\mathcal{T}_{\mathrm{cc}}$, and $B_{\varnothing}(f,\varepsilon) = C(X,Y)$; facts (U1), (U2) and (U3) of [[def-topology-of-compact-convergence]] are available, in particular the existence of $\max_{x \in K} d(f(x),g(x))$ for $f, g \in C(X,Y)$ and nonempty compact $K$ ([[def-topology-of-compact-convergence]]).

[L3] A topology generated by a family $\mathcal{S}$ is contained in every topology containing $\mathcal{S}$, and a set all of whose points lie in a basic set inside it is a union of basic sets, hence open ([[def-topology-basis-subbasis]], [[thm-basis-criterion]]).

[L4] The continuous image of a compact subset is compact ([[thm-continuous-image-of-a-compact-space-is-compact]], claim 2).

[L5] For nonempty $A \subseteq Y$ the distance $y \mapsto d(y,A)$ is defined, is $1$-Lipschitz and hence continuous, and satisfies $d(y,A) \le d(y,z)$ for every $z \in A$ ([[def-metric-bounded-diameter]], [[lem-distance-to-set-is-lipschitz]], [[thm-metric-regularity-hierarchy]], [[def-lipschitz-holder-contraction]], [[def-infimum]]).

[L6] A continuous real-valued function on a nonempty compact metric space attains a least and a greatest value, and the restriction of a continuous map to a metric subspace is continuous ([[thm-extreme-value-metric]], [[def-metric-continuity]], [[def-isometry-and-metric-embedding]], [[lem-real-line-is-a-metric-space]]).

[L7] $\bar B(a,r)$ is closed and $B(a,r)$ is open in $(X,d_X)$; relative openness in a subspace is tracing, so a closed subset of $X$ traces to a closed subset of any metric subspace, and a closed subset of a compact metric space is compact ([[thm-metric-open-set-algebra]], [[def-metric-topology]], [[lem-compactness-is-intrinsic]], [[lem-closed-subset-of-a-compact-space-is-compact]], [[def-metric-ball]], [[def-metric-compactness]]).

[L8] $K$ compact and $(U_i)_{i \in I}$ open in $X$ with $K \subseteq \bigcup_i U_i$ give $n \in \mathbb{N}$ and indices $i_0, \dots, i_n \in I$ with $K \subseteq U_{i_0} \cup \dots \cup U_{i_n}$, unless $K = \varnothing$ ([[lem-compactness-is-intrinsic]], claim 3).

[L9] The minimum of a two-element set of reals exists and is one of the two elements; balls are open and $y \in B(y,s)$ ([[lem-finite-set-has-max]], [[def-max-min]], [[thm-metric-open-set-algebra]], [[def-metric-ball]], [[def-metrizable-space]]).

## Proof

**Proof technique:** direct.

1.1 First half: let $K \subseteq X$ be compact, let $V \subseteq Y$ be open and let $f \in S(K,V)$; it suffices to produce a real $\varepsilon > 0$ with $B_K(f,\varepsilon) \subseteq S(K,V)$, since then every point of $S(K,V)$ lies in a basic set of $\mathcal{T}_{\mathrm{cc}}$ inside it. [L1, L2, L3, suffices: each subbasic compact open set is a union of basic compact convergence sets]

1.2 Second half: let $K \subseteq X$ be compact, let $f_0 \in C(X,Y)$, let $\varepsilon_0 > 0$ be real and let $g \in B_K(f_0,\varepsilon_0)$; it suffices to produce a finite intersection of sets $S(K',V')$ containing $g$ and contained in $B_K(f_0,\varepsilon_0)$. [L1, L2, L3, suffices: each basic compact convergence set is a union of compact open sets]

2.1 In step 1.1, if $K = \varnothing$ or $V = Y$ then $S(K,V) = C(X,Y)$, which is open in $\mathcal{T}_{\mathrm{cc}}$, and $\varepsilon := 1$ serves since $B_K(f,1) \subseteq C(X,Y)$; so assume $K \ne \varnothing$ and $V \ne Y$, whence $Y \setminus V$ is nonempty. [step 1.1, L1, L2]

2.2 In step 1.2, if $K = \varnothing$ then $B_K(f_0,\varepsilon_0) = C(X,Y) = S(\varnothing, Y)$, which is subbasic and hence open in $\mathcal{T}_{\mathrm{co}}$; so assume $K \ne \varnothing$. [step 1.2, L1, L2]

3.1 Under step 2.1: $f[K]$ is a nonempty compact subset of $Y$, and the function $\psi(y) := d(y, Y \setminus V)$ is defined and continuous on $Y$. [step 2.1, L4, L5]

3.2 Under step 2.2: $M := \max_{x \in K} d(f_0(x), g(x))$ exists and satisfies $M < \varepsilon_0$, because $g \in B_K(f_0,\varepsilon_0)$ makes $\varepsilon_0$ a strict upper bound of the values; put $\delta := \varepsilon_0 - M > 0$. [step 2.2, L2]

4.1 Under step 2.1: the restriction of $\psi$ to the nonempty compact metric subspace $f[K]$ is continuous, so it attains a least value $\varepsilon := \psi(y_0)$ at some $y_0 \in f[K]$, and $\varepsilon \le \psi(y)$ for every $y \in f[K]$. [step 3.1, L6, choose]

4.2 Under step 2.2: let $\mathcal{P}$ be the set of pairs $(a,r)$ with $a \in K$, $r > 0$ real and $g[\bar B(a,r) \cap K] \subseteq B(g(a), \delta/4)$; the family $(B(a,r))_{(a,r) \in \mathcal{P}}$ consists of open subsets of $X$ and covers $K$, since continuity of $g$ at $a \in K$ gives $s > 0$ with $g[B(a,s)] \subseteq B(g(a),\delta/4)$ and then $r := s/2$ satisfies $\bar B(a,r) \subseteq B(a,s)$, so $(a,r) \in \mathcal{P}$ and $a \in B(a,r)$. [step 3.2, construct, L6, L9]

5.1 Under step 2.1: $\varepsilon > 0$, because $y_0 \in f[K] \subseteq V$ with $V$ open gives a real $s > 0$ with $B(y_0,s) \subseteq V$, so every $z \in Y \setminus V$ satisfies $d(y_0,z) \ge s$, making $s$ a lower bound of the distances from $y_0$ to $Y \setminus V$ and hence $\psi(y_0) \ge s > 0$. [step 4.1, L5, L9]

5.2 Under step 2.2: since $K \ne \varnothing$ is compact, there are $n \in \mathbb{N}$ and pairs $(a_0,r_0), \dots, (a_n,r_n) \in \mathcal{P}$ with $K \subseteq B(a_0,r_0) \cup \dots \cup B(a_n,r_n)$; each index is a pair, so the centres and radii come back with the indices and nothing is selected. [step 4.2, L8]

6.1 Under step 2.1: for $u \in B_K(f,\varepsilon)$ and $x \in K$ we have $d(f(x),u(x)) < \varepsilon \le \psi(f(x))$ by step 4.1, since $f(x) \in f[K]$; were $u(x) \in Y \setminus V$, the distance $d(f(x),u(x))$ would be one of the distances from $f(x)$ to $Y \setminus V$ and hence at least $\psi(f(x))$, which it is not; so $u(x) \in V$. [step 4.1, step 5.1, L5]

6.2 Under step 2.2: for $j \le n$ put $K_j := \bar B(a_j,r_j) \cap K$ and $V_j := B(g(a_j), \delta/2)$; each $K_j$ is closed in the compact metric space $(K, d_K)$, being the trace on $K$ of the closed set $\bar B(a_j,r_j)$, hence is compact, and each $V_j$ is open in $Y$. [step 5.2, L7, L9]

7.1 Under step 2.1: step 6.1 holds for every $x \in K$, so $u[K] \subseteq V$ and $u \in S(K,V)$; hence $B_K(f,\varepsilon) \subseteq S(K,V)$, which is what step 1.1 required, and every $S(K,V)$ is open in $\mathcal{T}_{\mathrm{cc}}$, so $\mathcal{T}_{\mathrm{co}} \subseteq \mathcal{T}_{\mathrm{cc}}$. [step 1.1, step 2.1, step 6.1, L3]

7.2 Under step 2.2: $g \in S(K_j,V_j)$ for every $j \le n$, since $K_j \subseteq \bar B(a_j,r_j) \cap K$ and $(a_j,r_j) \in \mathcal{P}$ give $g[K_j] \subseteq B(g(a_j),\delta/4) \subseteq V_j$; so $g \in O := S(K_0,V_0) \cap \dots \cap S(K_n,V_n)$, a finite intersection of subbasic sets and hence open in $\mathcal{T}_{\mathrm{co}}$. [step 4.2, step 5.2, step 6.2, L1]

8.1 Under step 2.2: let $h \in O$ and $x \in K$; step 5.2 gives $j \le n$ with $x \in B(a_j,r_j)$, so $x \in K_j$, whence $d(h(x),g(a_j)) < \delta/2$ and $d(g(x),g(a_j)) < \delta/4$, so $d(h(x),g(x)) < \delta/2 + \delta/4 < \delta$ by the triangle inequality. [step 5.2, step 6.2, step 7.2, L9]

9.1 Under step 2.2: therefore $d(f_0(x),h(x)) \le d(f_0(x),g(x)) + d(g(x),h(x)) < M + \delta = \varepsilon_0$ for every $x \in K$, that is $h \in B_K(f_0,\varepsilon_0)$; so $O \subseteq B_K(f_0,\varepsilon_0)$, which is what step 1.2 required. [step 3.2, step 8.1]

10.1 By step 9.1 every point of every basic set of $\mathcal{T}_{\mathrm{cc}}$ is interior to it in $\mathcal{T}_{\mathrm{co}}$, so every basic set of $\mathcal{T}_{\mathrm{cc}}$ is open in $\mathcal{T}_{\mathrm{co}}$, and since those basic sets generate, $\mathcal{T}_{\mathrm{cc}} \subseteq \mathcal{T}_{\mathrm{co}}$. [step 2.2, step 9.1, L2, L3]

11.1 With step 7.1 the two inclusions give $\mathcal{T}_{\mathrm{co}} = \mathcal{T}_{\mathrm{cc}}$. [step 7.1, step 10.1] ∎

## Remarks

- **The first half is where the compactness of the *image* is used**, through the extreme value theorem applied to the distance to the closed set $Y \setminus V$. Without it the number $\varepsilon$ of step 4.1 would be an infimum that might be $0$, and the conclusion would fail: the set $S(K,V)$ genuinely needs $f[K]$ to sit at a positive distance from the complement of $V$, and that is a consequence of compactness, not of openness of $V$.

- **The cases $K = \varnothing$ and $V = Y$ are disposed of first for a reason.** In both, $S(K,V)$ is the whole space and the distance $d(f[K], Y \setminus V)$ is not defined — in the first because there is no point of $K$ to measure from, in the second because $Y \setminus V$ is empty and this library defines the distance to a set only for a nonempty set ([[def-metric-bounded-diameter]]).

- **The second half is a covering argument and is where the compact-open topology earns its subbasis.** A single set $S(K,V)$ cannot control $g$ uniformly on $K$; what does is a finite family of sets $S(K_j,V_j)$ on which $g$ varies by less than a quarter of the slack. That the pieces $K_j$ are again compact is [[lem-closed-subset-of-a-compact-space-is-compact]] applied inside $K$.

- **This is the theorem that lets the rest of the page use whichever description is convenient.** The comparison of the three topologies is proved against compact convergence, while the evaluation map and the exponential law are proved against the compact-open topology, and the two are the same topology whenever both are defined.
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

### `lem-closed-subset-of-a-compact-space-is-compact` — lemma — A closed subset of a compact metric space is compact

(statement provenance: ai-altered)

### Statement

Let $(X,d)$ be a compact metric space ([[def-metric-compactness]],
[[def-metric-space]]) and let $F \subseteq X$ be closed in $X$
([[def-metric-topology]]). Then $F$ is a compact subset of $X$: the metric
subspace $(F, d_F)$ is a compact metric space
([[def-isometry-and-metric-embedding]]).

No choice principle is used.

### `thm-continuous-image-of-a-compact-space-is-compact` — theorem — The image of a compact metric space under a continuous map is compact, and so is the image of any compact subset

(statement provenance: ai-altered)

### Statement

Let $(X,d_X)$ and $(Y,d_Y)$ be metric spaces ([[def-metric-space]]) and let
$f : X \to Y$ be continuous ([[def-metric-continuity]]). Then:

1. If $(X,d_X)$ is compact ([[def-metric-compactness]]), the image
   $f[X] \subseteq Y$ is a compact subset of $Y$.
2. More generally, if $K \subseteq X$ is a compact subset of $X$, then $f[K]$ is
   a compact subset of $Y$.

No choice principle is used.

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

Read `thm-compact-open-equals-compact-convergence` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
