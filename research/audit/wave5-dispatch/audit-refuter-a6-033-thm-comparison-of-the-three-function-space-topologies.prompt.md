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

# Adversarial proof reading — `thm-comparison-of-the-three-function-space-topologies`

## The item under review, in full

`items/thm-comparison-of-the-three-function-space-topologies.md`

```markdown
---
id: thm-comparison-of-the-three-function-space-topologies
kind: theorem
title: "On $C(X,Y)$ with $X$ and $Y$ metric, uniform convergence is finer than compact convergence, which is finer than pointwise convergence"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-topology-of-pointwise-convergence, def-topology-of-uniform-convergence,
       def-topology-of-compact-convergence, def-compact-open-topology,
       thm-compact-open-equals-compact-convergence, lem-uniform-metric-on-a-function-space,
       def-metric-compactness, lem-compactness-is-intrinsic, def-metric-ball,
       def-metric-topology, def-metrizable-space, def-subspace-topology-top,
       def-isometry-and-metric-embedding, def-topology-basis-subbasis,
       thm-basis-criterion, def-max-min, lem-finite-set-has-max,
       lem-bounded-remetrisation, def-metric-space, def-continuous-map-top,
       def-topological-space]
justified_by: []
aliases: []
landmark: true
short: "uniform finer than compact finer than pointwise"
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
    - title: "Compact convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_convergence"
    - title: "Uniform convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Uniform_convergence"
    - title: "J. Munkres, Topology, 2nd ed., §46"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $(X,d_X)$ be a **nonempty** metric space and let $(Y,d)$ be a metric space
([[def-metric-space]]), each carrying its metric topology, and write
$\mathcal{T}_{\mathrm{pt}}$, $\mathcal{T}_{\mathrm{cc}}$ and
$\mathcal{T}_{\mathrm{u}}$ for the topologies of pointwise convergence
([[def-topology-of-pointwise-convergence]]), of compact convergence
([[def-topology-of-compact-convergence]]) and of uniform convergence
([[def-topology-of-uniform-convergence]]) on $C(X,Y)$. Then

$$\mathcal{T}_{\mathrm{pt}} \;\subseteq\; \mathcal{T}_{\mathrm{cc}} \;\subseteq\; \mathcal{T}_{\mathrm{u}} ,$$

that is, uniform convergence is finer than compact convergence, which is finer
than pointwise convergence ([[def-topological-space]] for *finer*). The middle
topology is also the compact-open topology
([[thm-compact-open-equals-compact-convergence]],
[[def-compact-open-topology]]).

**No strictness is claimed.** The theorem asserts the two inclusions and nothing
more; that neither reverses in general is witnessed on the companion page, by a
sequence converging pointwise but not on compact sets and by a sequence converging
on compact sets but not uniformly. Those witnesses are not prerequisites of this
theorem. Nonemptiness of $X$ is inherited from
[[lem-uniform-metric-on-a-function-space]], which defines the uniform metric only
there. No choice principle is used.

## Facts & Assumptions

**Given:** A nonempty metric space $(X,d_X)$, a metric space $(Y,d)$, the set $C(X,Y)$ of continuous maps, and on it the three topologies named in the Statement; $\bar d = \min\{d,1\}$ and $\bar\rho$ are as in [[lem-uniform-metric-on-a-function-space]].

[L1] $\mathcal{T}_{\mathrm{pt}}$ is generated by the sets $T(x,V) := \{\, g \in C(X,Y) : g(x) \in V \,\}$ for $x \in X$ and $V \subseteq Y$ open, these being the traces on $C(X,Y)$ of the subbasic sets of the product topology ([[def-topology-of-pointwise-convergence]], [[def-subspace-topology-top]], [[def-topology-basis-subbasis]]).

[L2] The sets $B_K(f,\varepsilon)$ are a basis for $\mathcal{T}_{\mathrm{cc}}$, with $B_{\varnothing}(f,\varepsilon) = C(X,Y)$, and $\max_{x \in K} d(f(x),g(x))$ exists for $f, g \in C(X,Y)$ and nonempty compact $K$, by fact (U3) there ([[def-topology-of-compact-convergence]]).

[L3] $\mathcal{T}_{\mathrm{u}}$ is the metric topology on $C(X,Y)$ of the restriction of $\bar\rho$, whose balls are the traces $B_{\bar\rho}(g,\delta) \cap C(X,Y)$; balls are open and $g \in B_{\bar\rho}(g,\delta)$ ([[def-topology-of-uniform-convergence]], [[def-isometry-and-metric-embedding]], [[def-metric-ball]], [[def-metric-topology]], [[def-metrizable-space]]).

[L4] A topology generated by a family is contained in every topology containing that family, and a set all of whose points lie in a member of a basis inside it is open ([[def-topology-basis-subbasis]], [[thm-basis-criterion]]).

[L5] A one-point subset of a metric space is compact, the one-point metric space being compact ([[def-metric-compactness]], [[lem-compactness-is-intrinsic]], [[def-isometry-and-metric-embedding]]).

[L6] A subset $V \subseteq Y$ is open exactly when each of its points has a ball around it inside $V$ ([[def-metric-topology]], [[def-metric-ball]]).

[L7] $\bar d \le d$ and $\bar d \le 1$; if $\bar d(u,v) < 1$ then $\bar d(u,v) = d(u,v)$; and $\bar d(g(x),h(x)) \le \bar\rho(g,h)$ for every $x$ ([[lem-bounded-remetrisation]], [[lem-uniform-metric-on-a-function-space]], [[lem-finite-set-has-max]], [[def-max-min]]).

## Proof

**Proof technique:** direct.

1.1 For the first inclusion, let $x \in X$, let $V \subseteq Y$ be open and let $f \in T(x,V)$. [L1]

1.2 For the second inclusion, let $K \subseteq X$ be compact, let $f_0 \in C(X,Y)$, let $\varepsilon > 0$ be real and let $g \in B_K(f_0,\varepsilon)$. [L2]

2.1 Under step 1.1: $f(x) \in V$ with $V$ open, so there is a real $\varepsilon > 0$ with $B(f(x),\varepsilon) \subseteq V$; and $\{x\}$ is a compact subset of $X$. [step 1.1, L5, L6, choose]

2.2 Under step 1.2: if $K = \varnothing$ then $B_K(f_0,\varepsilon) = C(X,Y)$, which is open in $\mathcal{T}_{\mathrm{u}}$; so assume $K \ne \varnothing$, put $M := \max_{x \in K} d(f_0(x),g(x))$, which exists and satisfies $M < \varepsilon$, and put $\delta := \min\{\varepsilon - M,\ 1\}/2$, a real with $0 < \delta \le 1/2$ and $2\delta \le \varepsilon - M$. [step 1.2, L2, L3, L7]

3.1 Under step 1.1: $B_{\{x\}}(f,\varepsilon) \subseteq T(x,V)$, since $g \in B_{\{x\}}(f,\varepsilon)$ means $d(f(x),g(x)) < \varepsilon$, that is $g(x) \in B(f(x),\varepsilon) \subseteq V$. [step 2.1, L2]

3.2 Under step 1.2 with $K \ne \varnothing$: let $h \in B_{\bar\rho}(g,\delta) \cap C(X,Y)$; then for every $x \in X$ we have $\bar d(g(x),h(x)) \le \bar\rho(g,h) < \delta \le 1/2 < 1$, hence $d(g(x),h(x)) = \bar d(g(x),h(x)) < \delta$. [step 2.2, L7]

4.1 Under step 1.1: $f$ lies in the basic set $B_{\{x\}}(f,\varepsilon)$ of $\mathcal{T}_{\mathrm{cc}}$, which by step 3.1 lies inside $T(x,V)$; as $f$ was an arbitrary point of $T(x,V)$, the set $T(x,V)$ is open in $\mathcal{T}_{\mathrm{cc}}$. [step 2.1, step 3.1, L2, L4]

4.2 Under step 1.2 with $K \ne \varnothing$: for $x \in K$ we get $d(f_0(x),h(x)) \le d(f_0(x),g(x)) + d(g(x),h(x)) < M + \delta \le M + (\varepsilon - M) = \varepsilon$, so $h \in B_K(f_0,\varepsilon)$; hence $B_{\bar\rho}(g,\delta) \cap C(X,Y) \subseteq B_K(f_0,\varepsilon)$. [step 2.2, step 3.2]

5.1 By step 4.1 every generating set of $\mathcal{T}_{\mathrm{pt}}$ lies in $\mathcal{T}_{\mathrm{cc}}$, so $\mathcal{T}_{\mathrm{pt}} \subseteq \mathcal{T}_{\mathrm{cc}}$. [step 4.1, L1, L4]

5.2 By steps 2.2 and 4.2 every point of every basic set of $\mathcal{T}_{\mathrm{cc}}$ has a ball of the uniform metric around it inside that set, so every such basic set is open in $\mathcal{T}_{\mathrm{u}}$ and hence $\mathcal{T}_{\mathrm{cc}} \subseteq \mathcal{T}_{\mathrm{u}}$. [step 2.2, step 4.2, L2, L3, L4]

6.1 Steps 5.1 and 5.2 are the two asserted inclusions, and the middle topology is the compact-open topology by [[thm-compact-open-equals-compact-convergence]]. [step 5.1, step 5.2] ∎

## Remarks

- **Where each inclusion comes from.** The first is the observation that a one-point set is compact, so every constraint of the pointwise topology is already a constraint of the compact-convergence topology. The second is that $X$ itself need not be compact: a uniform bound over all of $X$ is at least as strong as a uniform bound over one compact set.

- **The truncation threshold appears once**, in step 3.2, where the uniform distance has to be pushed below $1$ before it can be read as an untruncated distance. That costs nothing, since $\delta$ is being made small in any case.

- **Nonemptiness of $X$ is a hypothesis about the uniform metric only.** The inclusion $\mathcal{T}_{\mathrm{pt}} \subseteq \mathcal{T}_{\mathrm{cc}}$ needs no such hypothesis; it is stated with it only because the theorem names all three topologies at once.

- **When the outer two coincide.** If $X$ is itself compact, then $K = X$ is an admissible compact set and the chain collapses at its right end: compact convergence and uniform convergence agree on $C(X,Y)$. The companion page works that case on $[0,1]$ and separates the two on $\mathbb{R}$.
```

## The dependencies it declares, quoted verbatim from disk

Each block below is the claim-bearing text of one declared dependency.
These are the only statements the item is entitled to use. If a step
needs more than the text below gives, that is the defect — quote the
dependency text and show exactly what it fails to supply.

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

### `def-topology-of-uniform-convergence` — definition — Uniform convergence, and the topology of uniform convergence: the metric topology of the uniform metric on $Y^{X}$ and on $C(X,Y)$

(statement provenance: literature-derived)

### Definition

Let $X$ be a nonempty set and let $(Y,d)$ be a metric space
([[def-metric-space]]).

**Uniform convergence.** A sequence $(f_k)$ in $Y^{X}$
([[def-topology-of-pointwise-convergence]]) **converges uniformly** to
$f \in Y^{X}$ if for every real $\varepsilon > 0$ there is $K \in \mathbb{N}$
such that

$$d\big(f_k(x), f(x)\big) < \varepsilon \qquad \text{for every } x \in X \text{ and every } k \ge K .$$

The whole content is the quantifier order: one index $K$ must serve **every**
point of $X$ at once, whereas pointwise convergence allows $K$ to depend on the
point as well as on $\varepsilon$. As everywhere in this library $\mathbb{N}$
contains $0$ and a sequence is indexed from $0$
([[def-topology-of-pointwise-convergence]]).

**The topology.** The **topology of uniform convergence** (the *uniform
topology*) on $Y^{X}$ is the metric topology $\mathcal{T}_{\bar\rho}$
([[def-metric-topology]]) of the uniform metric

$$\bar\rho(f,g) = \sup_{x \in X} \min\{\, d(f(x),g(x)),\ 1 \,\}$$

of [[lem-uniform-metric-on-a-function-space]]. Its basic open sets are the balls
$B_{\bar\rho}(f,\varepsilon)$ ([[def-metric-ball]]), and $Y^{X}$ with this
topology is a metrizable space ([[def-metrizable-space]]).

**On $C(X,Y)$.** If $X$ carries a topology, the **topology of uniform
convergence on $C(X,Y)$** ([[def-continuous-map-top]]) is the subspace topology
inherited from $Y^{X}$ ([[def-subspace-topology-top]]). It is the metric topology
of the restriction of $\bar\rho$ to $C(X,Y) \times C(X,Y)$: the subspace topology
of a metric topology is the metric topology of the subspace metric
([[def-isometry-and-metric-embedding]], [[def-metrizable-space]]). So the two
readings of the phrase agree, and $C(X,Y)$ carrying it is again metrizable.

**The name is justified by the next item.** That convergence in
$\mathcal{T}_{\bar\rho}$ is exactly uniform convergence in the sense defined above
is not part of the definition; it is
[[lem-uniform-convergence-in-the-uniform-metric]], and it is what entitles the
topology to the name.

**$X$ is nonempty throughout.** The uniform metric is defined only for nonempty
$X$ ([[lem-uniform-metric-on-a-function-space]]), so the topology of uniform
convergence is defined only there. The notion of uniform convergence itself makes
sense for $X = \varnothing$ and is vacuous, every sequence converging uniformly
to the unique element of $Y^{\varnothing}$; nothing below uses that case.

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

### `lem-uniform-metric-on-a-function-space` — lemma — For a nonempty set $X$ and a metric space $(Y,d)$ the uniform metric $\\bar\\rho(f,g) = \\sup_{x} \\min\\{d(f(x),g(x)), 1\\}$ is a metric on $Y^{X}$

(statement provenance: literature-derived)

### Statement

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

### `def-subspace-topology-top` — definition — Subspace topology: the traces of the open sets, its closed sets and its bases, the continuity of the inclusion, and the characteristic property of a map into a subspace

(statement provenance: ai-altered)

### Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$S \subseteq X$. The **subspace topology** (also *relative topology*) on $S$ is

$$\mathcal{T}_S := \{\, U \cap S : U \in \mathcal{T} \,\},$$

the family of **traces** on $S$ of the open sets of $X$. The pair
$(S, \mathcal{T}_S)$ is a **subspace** of $X$. A subset of $S$ that lies in
$\mathcal{T}_S$ is said to be **open in $S$**, and *relatively open* where the
ambient space needs emphasis.

**$\mathcal{T}_S$ is a topology, and this is discharged here.** (T1):
$\varnothing = \varnothing \cap S$ and $S = X \cap S$ are traces. (T2): if
$\mathcal{S}' \subseteq \mathcal{T}_S$, choose for each member a set of
$\mathcal{T}$ tracing to it — no choice principle is needed, since
$U' := \bigcup \{\, U \in \mathcal{T} : U \cap S \subseteq W \,\}$ is a canonical
such set for $W \in \mathcal{T}_S$, being open by (T2) in $X$ and satisfying
$U' \cap S = W$ — and then
$\bigcup_i (U_i \cap S) = (\bigcup_i U_i) \cap S \in \mathcal{T}_S$ by (T2) in
$X$. (T3): $(U \cap S) \cap (V \cap S) = (U \cap V) \cap S \in \mathcal{T}_S$ by
(T3) in $X$.

**Closed sets of a subspace are the traces of the closed sets.** A set
$C \subseteq S$ is closed in $S$ if and only if $C = F \cap S$ for some closed
$F \subseteq X$. Indeed $S \setminus (U \cap S) = (X \setminus U) \cap S$ and
$S \setminus (F \cap S) = (X \setminus F) \cap S$, so complementation inside $S$
matches complementation inside $X$ under tracing.

**Bases and subbases trace as well.** If $\mathcal{B}$ is a basis for
$\mathcal{T}$ ([[def-topology-basis-subbasis]]) then
$\mathcal{B}_S := \{\, B \cap S : B \in \mathcal{B} \,\}$ is a basis for
$\mathcal{T}_S$: its members are open in $S$, and for $W = U \cap S$ open in $S$
and $x \in W$ there is $B \in \mathcal{B}$ with $x \in B \subseteq U$, whence
$x \in B \cap S \subseteq W$. The same computation with a subbasis $\mathcal{S}$
shows that $\{\, S_0 \cap S : S_0 \in \mathcal{S} \,\}$ is a subbasis for
$\mathcal{T}_S$, since tracing commutes with finite intersections and with
unions.

**The inclusion is continuous.** The inclusion map $\iota : S \to X$,
$\iota(s) = s$, satisfies $\iota^{-1}[U] = U \cap S$ for every $U \subseteq X$,
so preimages of open sets are open and $\iota$ is continuous
([[thm-continuity-characterisations-top]], clause (b)). Moreover
$\mathcal{T}_S$ is the **coarsest** topology on $S$ making $\iota$ continuous: any
topology on $S$ for which $\iota$ is continuous must contain every
$\iota^{-1}[U] = U \cap S$, hence contain $\mathcal{T}_S$.

**Characteristic property of a map into a subspace.** Let $(Z, \mathcal{T}_Z)$ be
a topological space and let $g : Z \to S$ be a function. Then

$$g \text{ is continuous as a map } Z \to (S,\mathcal{T}_S) \iff \iota \circ g \text{ is continuous as a map } Z \to (X,\mathcal{T}) .$$

*Proof.* For $U \in \mathcal{T}$ one has
$(\iota \circ g)^{-1}[U] = g^{-1}[\iota^{-1}[U]] = g^{-1}[U \cap S]$. If $g$ is
continuous then each $g^{-1}[U \cap S]$ is open, so $\iota \circ g$ is continuous;
conversely if $\iota \circ g$ is continuous then for any $W = U \cap S$ open in
$S$ the set $g^{-1}[W] = (\iota \circ g)^{-1}[U]$ is open, so $g$ is continuous.
Both directions use only clause (b) of [[thm-continuity-characterisations-top]].

**Restriction of a continuous map.** If $f : X \to Y$ is continuous and
$S \subseteq X$, then $f|_S : S \to Y$ is continuous, since
$(f|_S)^{-1}[V] = f^{-1}[V] \cap S$ is open in $S$ for every open $V \subseteq Y$
([[def-continuous-map-top]], [[thm-continuity-characterisations-top]]).

**When relative and ambient agree.** If $S$ is open in $X$ then a subset of $S$
is open in $S$ if and only if it is open in $X$: a trace $U \cap S$ is then an
intersection of two open sets of $X$, and conversely an open subset of $X$
contained in $S$ is its own trace. The same statement with "closed" throughout
holds when $S$ is closed in $X$. Both are used in the pasting lemma of the next
item, and both fail without the hypothesis: $S$ itself is always open and closed
in $S$, and need be neither in $X$.

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

Read `thm-comparison-of-the-three-function-space-topologies` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
