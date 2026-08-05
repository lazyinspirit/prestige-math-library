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

# Adversarial proof reading — `ex-dini-on-the-unit-interval`

## The item under review, in full

`items/ex-dini-on-the-unit-interval.md`

```markdown
---
id: ex-dini-on-the-unit-interval
kind: example
title: "Dini's theorem applied to a nondecreasing sequence of piecewise linear approximations on $[0,1]$, and what fails when the limit is not continuous"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-dini, lem-uniform-convergence-in-the-uniform-metric,
       def-topology-of-uniform-convergence, def-metric-compactness, thm-heine-borel-rn,
       def-interval, lem-continuity-is-local-and-pastes, lem-real-line-is-a-metric-space,
       def-metrizable-space, thm-monotone-convergence, def-canonical-natural,
       cor-archimedean-reciprocal, def-max-min, lem-finite-set-has-max,
       cex-the-pointwise-limit-of-continuous-functions-need-not-be-continuous,
       def-lipschitz-holder-contraction, thm-metric-regularity-hierarchy,
       def-metric-continuity, def-continuous-map-top, def-monotone-sequence,
       lem-of-naturals-positive, lem-of-inverse-positive, def-abs-value,
       def-isometry-and-metric-embedding, def-metric-space, def-subspace-topology-top,
       lem-uniform-metric-on-a-function-space, thm-uniform-limit-theorem]
justified_by: []
aliases: []
landmark: false
short: "Dini on $[0,1]$, and its failure"
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
    - title: "Dini's theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dini%27s_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 7"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Example

Let $I := [0,1]$ with the metric inherited from $\mathbb{R}$ and let
$a_k := 1/\iota(k+2)$ ([[def-canonical-natural]]), so $0 < a_k \le 1/2$ and
$1/2 \le 1 - a_k < 1$. Define the **clipped identities**

$$s_k(t) := t \ \ (0 \le t \le 1 - a_k), \qquad s_k(t) := 1 - a_k \ \ (1 - a_k \le t \le 1) .$$

Then:

1. each $s_k$ is continuous on the compact space $I$, and the sequence is
   **nondecreasing at every point**: $s_k(t) \le s_{k+1}(t)$;
2. $s_k(t) \to t$ for every $t \in I$, and the limit function
   $\mathrm{id}_I : t \mapsto t$ is continuous;
3. therefore Dini's theorem ([[thm-dini]]) applies and $(s_k)$ converges to
   $\mathrm{id}_I$ **uniformly** — which is confirmed by the direct estimate
   $|s_k(t) - t| \le a_k$ for every $t$.

**And the hypothesis that the limit is continuous cannot be dropped.** The ramps
$r_k$ of
[[cex-the-pointwise-limit-of-continuous-functions-need-not-be-continuous]] are
continuous on the same compact $I$ and pointwise *nonincreasing*, and they
converge pointwise to the indicator of $\{1\}$, which is not continuous; the
conclusion of Dini's theorem fails for them, since a uniform limit of continuous
functions would be continuous. So on a compact domain, with monotonicity and with
continuity of every term, continuity of the limit is exactly the missing
hypothesis, and it is not implied by the others.

## Facts & Assumptions

**Given:** $I = [0,1]$ with $d(s,t) = |s-t|$ ([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]], [[def-interval]]), the reals $a_k = 1/\iota(k+2)$, the functions $s_k$ displayed above, and the identity $\mathrm{id}_I$ of $I$.

[L1] $\iota$ is strictly increasing on $\mathbb{N}$ with $\iota(n) > 0$ for $n \ge 1$, and $0 < u \le v$ gives $0 < 1/v \le 1/u$; hence $0 < a_{k+1} \le a_k \le 1/2$ and $1/2 \le 1 - a_k \le 1 - a_{k+1} < 1$ ([[def-canonical-natural]], [[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

[L2] For every real $\eta > 0$ there is a natural $m \ge 1$ with $1/\iota(m) < \eta$ ([[cor-archimedean-reciprocal]]).

[L3] An affine map $t \mapsto ct + e$ of $\mathbb{R}$ is Lipschitz with constant $|c|$, hence continuous, and a restriction to a metric subspace is continuous ([[def-lipschitz-holder-contraction]], [[thm-metric-regularity-hierarchy]], [[def-metric-continuity]], [[def-abs-value]], [[def-metrizable-space]], [[def-metric-space]]).

[L4] A function whose restrictions to the members of a finite closed cover are continuous is continuous ([[lem-continuity-is-local-and-pastes]], claim 3, [[def-subspace-topology-top]], [[def-continuous-map-top]]).

[L5] $I$ is a compact metric space, being closed in $\mathbb{R}$ and bounded ([[thm-heine-borel-rn]], claim 3, [[def-metric-compactness]]).

[L6] Dini's theorem: on a compact metric space a sequence of continuous real functions with $g_k \le g_{k+1}$ pointwise, converging pointwise to a continuous $g$, converges to $g$ uniformly ([[thm-dini]], [[def-monotone-sequence]], [[thm-monotone-convergence]]).

[L7] Uniform convergence, its identification with convergence in the uniform metric, and the uniform limit theorem: a uniform limit of continuous functions is continuous ([[def-topology-of-uniform-convergence]], [[lem-uniform-convergence-in-the-uniform-metric]], [[lem-uniform-metric-on-a-function-space]], [[thm-uniform-limit-theorem]], claim 2).

[L8] The ramps $r_k$ on $I$ are continuous, are pointwise nonincreasing, and converge pointwise to the indicator $\chi$ of $\{1\}$, which is not continuous ([[cex-the-pointwise-limit-of-continuous-functions-need-not-be-continuous]]).

[L9] The maximum and the minimum of a two-element set of reals exist and are among its elements ([[lem-finite-set-has-max]], [[def-max-min]]).

## Verification

**Proof technique:** direct.

1.1 The two formulas for $s_k$ agree at $t = 1 - a_k$, both giving $1 - a_k$, and the closed sets $[0,1-a_k]$ and $[1-a_k,1]$ cover $I$ since $0 < 1 - a_k < 1$; each restriction is the restriction of an affine map of $\mathbb{R}$, so $s_k$ is a well-defined continuous function on $I$. [L1, L3, L4]

1.2 $s_k(t) = \min\{t,\ 1-a_k\}$ for every $t \in I$: for $t \le 1-a_k$ the minimum is $t$, and for $t \ge 1-a_k$ it is $1-a_k$. [L1, L9]

2.1 $s_k(t) \le s_{k+1}(t)$ for every $t$ and $k$, since $1 - a_k \le 1 - a_{k+1}$ makes $\min\{t, 1-a_k\} \le \min\{t, 1-a_{k+1}\}$; with step 1.1 this is claim 1. [step 1.1, step 1.2, L1, L9]

2.2 $0 \le t - s_k(t) \le a_k$ for every $t \in I$: for $t \le 1-a_k$ the difference is $0$, and for $t > 1-a_k$ it is $t - (1-a_k) \le 1 - (1-a_k) = a_k$. [step 1.2, L1]

3.1 Let $\varepsilon > 0$ be real; by [L2] there is a natural $m \ge 1$ with $1/\iota(m) < \varepsilon$, and every $k \ge m$ has $a_k = 1/\iota(k+2) \le 1/\iota(m) < \varepsilon$, so $|s_k(t) - t| \le a_k < \varepsilon$ for every $t \in I$. [step 2.2, L1, L2]

4.1 In particular $s_k(t) \to t$ for every $t \in I$, and $\mathrm{id}_I$ is continuous, being the restriction of an affine map; this is claim 2. [step 3.1, L3]

5.1 $I$ is a compact metric space, every $s_k$ is continuous, the sequence is pointwise nondecreasing and its pointwise limit $\mathrm{id}_I$ is continuous, so Dini's theorem applies and $(s_k)$ converges to $\mathrm{id}_I$ uniformly; step 3.1 exhibits the same conclusion directly, an index $m$ serving every point at once. [step 2.1, step 3.1, step 4.1, L5, L6, L7]

6.1 For the failure clause, the ramps $r_k$ are continuous on the same compact $I$ and pointwise nonincreasing with pointwise limit the discontinuous $\chi$; were the convergence uniform, the limit would be continuous, so it is not uniform, and the conclusion of Dini's theorem fails for a family satisfying every one of its hypotheses except continuity of the limit. [step 5.1, L5, L7, L8] ∎

## Remarks

- **Dini's theorem is not needed for the positive half, and that is the point.** Step 3.1 proves uniform convergence of $(s_k)$ by hand, because the discrepancy $t - s_k(t)$ is bounded by $a_k$ independently of $t$. The example is worth stating because the general theorem gives the same conclusion from hypotheses that never mention a uniform bound: compactness, monotonicity, and continuity of the terms and of the limit.

- **Each hypothesis of Dini's theorem is doing something.** Continuity of the limit fails for the ramps, and the conclusion fails with it. Compactness cannot be dropped either, though this page does not construct a witness for that. Monotonicity cannot be dropped: the moving spikes earlier on this page are continuous on the compact $I$, converge pointwise to the continuous $\mathbf{0}$, and do not converge uniformly, and they are not monotone at any point where the spike passes.

- **The nonincreasing form is the one the ramps illustrate**, and it is the form obtained from [[thm-dini]] by applying it to the negatives of the functions, as that item's Statement records. Nothing here needs a separate proof.
```

## The dependencies it declares, quoted verbatim from disk

Each block below is the claim-bearing text of one declared dependency.
These are the only statements the item is entitled to use. If a step
needs more than the text below gives, that is the defect — quote the
dependency text and show exactly what it fails to supply.

### `thm-dini` — theorem — Dini's theorem: on a compact metric space a nondecreasing sequence of continuous real functions converging pointwise to a continuous limit converges uniformly

(statement provenance: ai-altered)

### Statement

Let $(X,d)$ be a compact metric space ([[def-metric-compactness]]), let
$f_k : X \to \mathbb{R}$ be continuous for every $k \in \mathbb{N}$
([[def-metric-continuity]], $\mathbb{R}$ carrying its usual metric,
[[lem-real-line-is-a-metric-space]]), and suppose

$$f_k(x) \le f_{k+1}(x) \qquad \text{for every } k \in \mathbb{N} \text{ and every } x \in X ,$$

so that the sequence is **nondecreasing at every point**
([[def-monotone-sequence]]). Suppose further that $f_k(x) \to f(x)$ for every
$x \in X$ ([[def-real-limit]]) with the limit function $f : X \to \mathbb{R}$
**continuous**. Then $(f_k)$ converges to $f$ uniformly
([[def-topology-of-uniform-convergence]]).

**All four hypotheses are used.** Compactness of $X$, monotonicity of the
sequence, continuity of every $f_k$ and continuity of the limit $f$ each enter the
proof, and dropping any one of them makes the conclusion false; the companion
page exhibits the failure when the limit is not continuous.

**The nonincreasing form holds too**, by applying the theorem to $(-f_k)$ and
$-f$, which are continuous and nondecreasing at every point; the proof below is
written for the nondecreasing direction only, and the Statement claims that
direction.

**No choice principle is used**: the finite subcover produced below is returned
as a list of *indices* by the indexed form of compactness
([[lem-compactness-is-intrinsic]]).

### `lem-uniform-convergence-in-the-uniform-metric` — lemma — Convergence in the uniform metric is exactly uniform convergence: one $N$ serving every point

(statement provenance: literature-derived)

### Statement

Let $X$ be a nonempty set, let $(Y,d)$ be a metric space
([[def-metric-space]]), and let $\bar\rho$ be the uniform metric on $Y^{X}$
([[lem-uniform-metric-on-a-function-space]]). Let $(f_k)$ be a sequence in
$Y^{X}$ and let $f \in Y^{X}$. Then

$$f_k \to f \text{ in } (Y^{X}, \bar\rho) \qquad \Longleftrightarrow \qquad (f_k) \text{ converges uniformly to } f ,$$

convergence in a metric space being [[def-metric-convergence]] and uniform
convergence being [[def-topology-of-uniform-convergence]].

**This is what makes the name of the topology accurate**, and it is the reason
the truncation at $1$ in the uniform metric costs nothing: below the threshold the
truncated and untruncated distances agree, and convergence is a statement about
arbitrarily small distances. No choice principle is used.

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

### `lem-continuity-is-local-and-pastes` — lemma — Continuity may be checked on any open cover, and on any finite closed cover; composites of continuous maps are continuous

(statement provenance: ai-altered)

### Statement

Let $X$, $Y$ and $Z$ be topological spaces, with subspaces carrying the subspace
topology ([[def-subspace-topology-top]]). Then:

1. **Composites.** If $f : X \to Y$ and $g : Y \to Z$ are continuous
   ([[def-continuous-map-top]]) then $g \circ f : X \to Z$ is continuous.
2. **Open cover.** Let $f : X \to Y$ be a function and let
   $\{\, U_i : i \in I \,\}$ be a family of open subsets of $X$ with
   $\bigcup_{i \in I} U_i = X$. If $f|_{U_i} : U_i \to Y$ is continuous for every
   $i \in I$, then $f$ is continuous.
3. **Finite closed cover.** Let $f : X \to Y$ be a function, let $n \ge 1$ and
   let $F_1, \dots, F_n$ be closed subsets of $X$ with
   $F_1 \cup \dots \cup F_n = X$. If $f|_{F_k} : F_k \to Y$ is continuous for
   every $k$, then $f$ is continuous.

The converses of claims 2 and 3 hold with no hypothesis on the cover at all:
every restriction of a continuous map to a subspace is continuous
([[def-subspace-topology-top]]). The finiteness in claim 3 is not removable; see
the remarks.

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

### `thm-monotone-convergence` — theorem — A nondecreasing sequence bounded above converges to the supremum of its range, and a nonincreasing sequence bounded below to the infimum

(statement provenance: literature-derived)

### Statement

Let $(x_k)$ be a sequence of reals ([[def-sequence]]) and let
$S = \{x_k : k \in \mathbb{N}\}$ be its range.

1. If $(x_k)$ is nondecreasing ([[def-monotone-sequence]]) and $S$ is bounded
   above ([[def-bounded-set]]), then $(x_k)$ converges ([[def-real-limit]]) and
   $$\lim_{k} x_k = \sup S .$$
2. If $(x_k)$ is nonincreasing and $S$ is bounded below, then $(x_k)$ converges
   and $$\lim_{k} x_k = \inf S .$$

Both suprema and infima exist under the stated hypotheses: $S$ is nonempty, so
the least-upper-bound property ([[def-complete-ordered-field]]) supplies the
first and [[thm-infimum-property]] the second, and each is unique
([[lem-sup-unique]]).

This is the first place in this track where the least-upper-bound property
produces a **limit**. Everything on the sequences page held in any Archimedean
ordered field; the theorem below does not, and the sequence of decimal
truncations of $\sqrt 2$ inside $\mathbb{Q}$ is the standard witness of its
failure there.

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

### `cex-the-pointwise-limit-of-continuous-functions-need-not-be-continuous` — counterexample — Refuted: $C(X,Y)$ is closed in the topology of pointwise convergence. The ramps on $[0,1]$ converge pointwise to a discontinuous limit

(statement provenance: ai-altered)

### Statement refuted

**Refuted claim:** for a topological space $X$ and a metric space $Y$ the set
$C(X,Y)$ is closed in $Y^{X}$ for the topology of pointwise convergence
([[def-topology-of-pointwise-convergence]]); equivalently, a pointwise limit of
continuous functions is continuous.

The witness is the sequence of **ramps** on $I := [0,1]$. With
$a_k := 1/\iota(k+2)$ ([[def-canonical-natural]]), so that $0 < a_k \le 1/2$,
define $r_k : I \to \mathbb{R}$ by

$$r_k(t) := 0 \ \ (0 \le t \le 1 - a_k), \qquad r_k(t) := \frac{t - (1-a_k)}{a_k} \ \ (1 - a_k \le t \le 1) .$$

Each $r_k$ is continuous, the sequence $(r_k)$ converges pointwise to the
indicator function

$$\chi(t) := 0 \ (t < 1), \qquad \chi(1) := 1 ,$$

and $\chi$ is not continuous at $1$. So $C(I,\mathbb{R})$ is not closed in
$\mathbb{R}^{I}$ for the topology of pointwise convergence.

**The sequence is moreover pointwise nonincreasing**, $r_{k+1}(t) \le r_k(t)$ for
every $t \in I$ and every $k \in \mathbb{N}$ (step 2.2 below). That is recorded
here because it is the configuration Dini's theorem rules out on a compact domain
*when the limit is continuous*; here the limit is not continuous, and the
conclusion of Dini's theorem fails.

**This is exactly what the uniform topology repairs.** For the uniform metric
$C(X,Y)$ *is* closed ([[thm-uniform-limit-theorem]], claim 3), so the convergence
above cannot be uniform, and it is not: the ramps stay at distance $1$ from
$\chi$ in the sense that $r_k(1-a_k) = 0$ while $\chi$ jumps to $1$ arbitrarily
close by.

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

### `def-monotone-sequence` — definition — Nondecreasing, increasing, nonincreasing, decreasing, monotone, and eventually monotone sequences

(statement provenance: ai-altered)

### Definition

Let $(x_k)$ be a sequence of reals ([[def-sequence]]), with $\mathbb{R}$ ordered
as in [[def-real-order]] and [[def-complete-ordered-field]], and with
$\mathbb{N}$ ordered as in [[def-nat-order]]. The sequence is:

- **nondecreasing** when $x_j \le x_k$ for all $j \le k$;
- **increasing** (or *strictly increasing*) when $x_j < x_k$ for all $j < k$;
- **nonincreasing** when $x_j \ge x_k$ for all $j \le k$;
- **decreasing** (or *strictly decreasing*) when $x_j > x_k$ for all $j < k$;
- **monotone** when it is nondecreasing or nonincreasing;
- **strictly monotone** when it is increasing or decreasing;
- **eventually monotone** when some tail $x^{(K)}$ ([[def-sequence]]) is
  monotone, that is when there is $K \in \mathbb{N}$ such that the restriction of
  the comparison to indices $\ge K$ is one-signed.

An increasing sequence is nondecreasing and a decreasing sequence is
nonincreasing, since $j \le k$ means $j < k$ or $j = k$ and the second case gives
equality. A sequence that is both nondecreasing and nonincreasing is constant.

**Consecutive comparisons suffice, and that is an induction.** The four
conditions above quantify over *all* pairs of indices, but what one checks in
practice, and what a recursive construction delivers, is the comparison of
consecutive terms. The two agree:

> $(x_k)$ is nondecreasing **if and only if** $x_k \le x_{\sigma(k)}$ for every
> $k \in \mathbb{N}$, and $(x_k)$ is increasing **if and only if**
> $x_k < x_{\sigma(k)}$ for every $k \in \mathbb{N}$; likewise, with the
> inequalities reversed, for nonincreasing and decreasing.

The forward implications are the instances $j = k$, $k = \sigma(k)$ of the
definitions, using $k < \sigma(k)$ ([[lem-nat-discrete]]). For the converse,
suppose $x_i \le x_{\sigma(i)}$ for every $i$ and fix $k$; we show by induction
on $k$ ([[thm-induction-principle]]) that $x_j \le x_k$ for every $j \le k$. For
$k = 0$: $j \le 0$ forces $j = 0$, and $x_0 \le x_0$. Assume the statement for
$k$ and let $j \le \sigma(k)$. If $j = \sigma(k)$ then $x_j \le x_{\sigma(k)}$ by
reflexivity. Otherwise $j < \sigma(k)$, and then $j \le k$: were $k < j$ we would
have $k < j < \sigma(k)$, which [[lem-nat-discrete]] excludes, so $j \le k$ by
totality of the order on $\mathbb{N}$ ([[thm-nat-linear-order]]). The induction
hypothesis gives $x_j \le x_k$, and $x_k \le x_{\sigma(k)}$ by assumption, so
$x_j \le x_{\sigma(k)}$ by transitivity. This completes the induction. The three
remaining equivalences are the same argument with $\le$ replaced by $<$,
$\ge$ or $>$, transitivity of the strict order being used in the same place.

**Boundedness of a monotone sequence is one-sided.** A nondecreasing sequence is
bounded below by its first term $x_0$, and a nonincreasing sequence is bounded
above by $x_0$, both immediately from the definition with $j = 0$. So for a
nondecreasing sequence the only substantive question is whether it is bounded
above, and for a nonincreasing sequence whether it is bounded below. The range of
$(x_k)$ is the set $\{x_k : k \in \mathbb{N}\}$ ([[def-sequence]]), and it is
bounded above, bounded below or bounded in the sense of [[def-bounded-set]]
exactly when the sequence is.

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

### `lem-of-inverse-positive` — lemma — Inverses of positives are positive, and reciprocation reverses order

(statement provenance: ai-altered)

### Statement

Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and
let $a, b \in F$.

1. If $a > 0$ then $a^{-1} > 0$.
2. If $0 < a < b$ then $0 < b^{-1} < a^{-1}$.

### `def-abs-value` — definition — Absolute value in an ordered field

(statement provenance: literature-derived)

### Definition

Let $F$ be an ordered field ([[def-ordered-field]]). The **absolute value** of
$x \in F$ is

$$|x| \;:=\; \begin{cases} x & \text{if } x \ge 0, \\ -x & \text{if } x < 0. \end{cases}$$

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

### `thm-uniform-limit-theorem` — theorem — A uniform limit of continuous functions is continuous, so $C(X,Y)$ is closed in $Y^{X}$ under the uniform metric

(statement provenance: literature-derived)

### Statement

Let $(X,\mathcal{T}_X)$ be a topological space ([[def-topological-space]]) and
let $(Y,d)$ be a metric space ([[def-metric-space]]) carrying its metric
topology. Then:

1. **The $\varepsilon/3$ criterion.** Let $f : X \to Y$ be a function such that
   for every real $\varepsilon > 0$ there is a **continuous** $g : X \to Y$ with
   $$d\big(f(x), g(x)\big) < \varepsilon \qquad \text{for every } x \in X .$$
   Then $f$ is continuous ([[def-continuous-map-top]]).
2. **Uniform limit theorem.** If $X$ is nonempty, $(f_k)$ is a sequence of
   continuous maps $X \to Y$ and $(f_k)$ converges uniformly to $f$
   ([[def-topology-of-uniform-convergence]]), then $f$ is continuous.
3. **Closedness.** If $X$ is nonempty, $C(X,Y)$ is a closed subset of
   $(Y^{X}, \bar\rho)$, the uniform metric being that of
   [[lem-uniform-metric-on-a-function-space]].

**The domain is an arbitrary topological space**, not a metric space: nothing in
the argument uses a distance in $X$. Only the target carries a metric, and it
carries one because the hypothesis of claim 1 is a statement about distances in
$Y$.

**No choice principle is used, and claim 3 in particular is choice free.** The
proof of claim 3 instantiates *one* continuous $g$ for each $\varepsilon$ and uses
it immediately, rather than manufacturing a sequence of them; a sequential
argument through [[thm-metric-sequential-closure]] would spend the Axiom of
Countable Choice, and that route is deliberately not taken.

## What to return

Read `ex-dini-on-the-unit-interval` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
