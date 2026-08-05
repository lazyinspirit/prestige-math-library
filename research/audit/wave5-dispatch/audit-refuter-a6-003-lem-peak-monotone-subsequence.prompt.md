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

# Adversarial proof reading — `lem-peak-monotone-subsequence`

## The item under review, in full

`items/lem-peak-monotone-subsequence.md`

```markdown
---
id: lem-peak-monotone-subsequence
kind: lemma
title: "Every real sequence has a monotone subsequence (the peak / rising-sun lemma)"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-sequence, def-monotone-sequence, def-real-order, def-complete-ordered-field, def-ordered-field, lem-index-map-grows, thm-recursion, thm-well-ordering-principle, def-nat-order, thm-nat-linear-order, lem-nat-discrete]
justified_by: []
aliases: []
landmark: true
proof_strategy: cases
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Bolzano-Weierstrass theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bolzano%E2%80%93Weierstrass_theorem"
    - title: "T. Tao, Analysis I, 3rd ed., §6.4 and §6.6"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "J. Lebl, Basic Analysis I, §2.3 (monotone subsequence)"
      url: "https://www.jirka.org/ra/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Peak Point Lemma (ProofWiki)"
      url: "https://proofwiki.org/wiki/Peak_Point_Lemma"
    - title: "The Monotone Subsequence Theorem (Mathonline)"
      url: "http://mathonline.wikidot.com/the-monotone-subsequence-theorem"
---

## Statement

Every sequence of reals has a monotone subsequence: for every sequence $(x_k)$ of
reals ([[def-sequence]]) there is a strictly increasing
$n : \mathbb{N} \to \mathbb{N}$ such that the subsequence $(x_{n_j})$ is monotone
([[def-monotone-sequence]]).

No hypothesis whatever is placed on $(x_k)$: it need not be bounded, and it need
not converge. Combined with the corollary later on this page, which
converts monotone plus bounded into convergent, this is the whole content of the
Bolzano-Weierstrass theorem.

Call an index $n \in \mathbb{N}$ a **peak** of $(x_k)$ when

$$x_m \le x_n \quad \text{for every } m \ge n,$$

that is, when no later term ever exceeds $x_n$. The proof splits on whether peaks
occur arbitrarily late or stop occurring, and produces a nonincreasing
subsequence in the first case and an increasing one in the second. The picture
behind the name is the rising sun shining from the right: the peaks are the
points that are not put in shadow by anything to their right.

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals. An index $n \in \mathbb{N}$ is called a *peak* when $x_m \le x_n$ for every $m \ge n$, and $P \subseteq \mathbb{N}$ denotes the set of peaks.

[L1] Recursion theorem: for a set $A$, an element $a \in A$ and a function $f : A \to A$ there is a unique $g : \mathbb{N} \to A$ with $g_0 = a$ and $g_{\sigma(j)} = f(g_j)$ ([[thm-recursion]]).

[L2] Well-ordering principle: every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L3] Consecutive comparisons suffice for an index map: if $n_j < n_{\sigma(j)}$ for every $j$ then $n$ is strictly increasing ([[lem-index-map-grows]]).

[L4] Consecutive comparisons suffice for monotonicity: if $y_{\sigma(j)} \le y_j$ for every $j$ then $(y_j)$ is nonincreasing, and if $y_j < y_{\sigma(j)}$ for every $j$ then $(y_j)$ is increasing; in both cases $(y_j)$ is monotone ([[def-monotone-sequence]]).

[L5] Subsequences: for strictly increasing $n$, the composite $(x_{n_j})$ is a subsequence of $(x_k)$ and is again a sequence of reals ([[def-sequence]]).

[L6] Order on $\mathbb{N}$: $m < n$ means $m \le n$ and $m \ne n$; the order is total and transitive ([[def-nat-order]], [[thm-nat-linear-order]]).

[L7] Discreteness: $N < \sigma(N)$ for every $N \in \mathbb{N}$ ([[lem-nat-discrete]]).

[L8] Trichotomy in $\mathbb{R}$: for reals $s, t$ exactly one of $s < t$, $s = t$, $s > t$ holds, so the failure of $x_m \le x_n$ is $x_m > x_n$, and $x_n > x_n$ is impossible ([[def-real-order]], [[def-complete-ordered-field]], [[def-ordered-field]]).

## Proof

**Proof technique:** cases.

1.1 **Case (i).** Assume that for every $N \in \mathbb{N}$ there is a peak $n$ with $n > N$. [given, assume-case cofinal]

1.2 **Case (ii).** Assume instead that there is $N_0 \in \mathbb{N}$ such that no $n > N_0$ is a peak. [given, assume-case bounded]

2.1 In case (i) the set $P$ is nonempty, since the case hypothesis applied to $N = 0$ produces a peak, so $P$ has a least element $p_0$. [step 1.1, L2, choose]

2.2 In case (i), for each $p \in P$ the set $\{q \in P : q > p\}$ is nonempty, by the case hypothesis applied to $N = p$; let $f(p)$ be its least element. This defines $f : P \to P$ with $f(p) > p$ for every $p \in P$. [step 1.1, L2, construct]

2.3 In case (ii) put $A := \{n \in \mathbb{N} : n > N_0\}$; it is nonempty because $\sigma(N_0) > N_0$. [step 1.2, L7]

3.1 In case (i), the recursion theorem applied to the set $P$, the element $p_0$ and the function $f$ gives $g : \mathbb{N} \to P$ with $g_0 = p_0$ and $g_{\sigma(j)} = f(g_j)$; every $g_j$ is a peak and $g_j < g_{\sigma(j)}$ for every $j$. [step 2.1, step 2.2, L1]

3.2 In case (ii), each $n \in A$ satisfies $n > N_0$ and so is not a peak, meaning some $m \ge n$ has $x_m > x_n$; such an $m$ is distinct from $n$, since $x_n > x_n$ is impossible, hence $m > n > N_0$ and $m \in A$. The set of such $m$ is therefore a nonempty subset of $A$; let $h(n)$ be its least element. This defines $h : A \to A$ with $h(n) > n$ and $x_{h(n)} > x_n$. [step 2.3, L2, L6, L8, construct]

4.1 In case (i), $g$ is strictly increasing by [L3], so $(x_{g_j})$ is a subsequence of $(x_k)$. [step 3.1, L3, L5]

4.2 In case (i), for every $j$ the index $g_{\sigma(j)}$ satisfies $g_{\sigma(j)} \ge g_j$ and $g_j$ is a peak, so $x_{g_{\sigma(j)}} \le x_{g_j}$; hence $(x_{g_j})$ is nonincreasing, so monotone. [step 3.1, L4]

4.3 In case (ii), the recursion theorem applied to the set $A$, the element $\sigma(N_0)$ and the function $h$ gives $g' : \mathbb{N} \to A$ with $g'_0 = \sigma(N_0)$ and $g'_{\sigma(j)} = h(g'_j)$; thus $g'_j < g'_{\sigma(j)}$ and $x_{g'_j} < x_{g'_{\sigma(j)}}$ for every $j$. [step 2.3, step 3.2, L1]

5.1 In case (ii), $g'$ is strictly increasing by [L3], so $(x_{g'_j})$ is a subsequence of $(x_k)$, and it is increasing by [L4], so monotone. [step 4.3, L3, L4, L5]

6.1 Cases (i) and (ii) are literal negations of one another, so one of them holds; case (i) produces the monotone subsequence $(x_{g_j})$ and case (ii) the monotone subsequence $(x_{g'_j})$. Every sequence of reals therefore has a monotone subsequence. [step 4.1, step 4.2, step 5.1, cases: exhaustive by negation, cases-exhaustive] ∎

## Remarks

- **The two cases are a negation pair, so no completeness is used to split them.**
  Either peaks occur beyond every index, or they stop; nothing about $\mathbb{R}$
  enters the dichotomy. The only properties of the reals used anywhere above are
  trichotomy of the order, in step 3.2, and nothing else. In particular this
  lemma holds verbatim in any linearly ordered set, and it is
  [[cor-monotone-converges-iff-bounded]], not this lemma, that consumes the
  least-upper-bound property inside [[thm-bolzano-weierstrass]].

- **Which kind of monotone subsequence is produced depends on the case, and the
  statement deliberately does not say which.** Case (i) gives a nonincreasing
  subsequence and case (ii) a strictly increasing one. A sequence may satisfy
  case (i) with no increasing subsequence at all, for instance a constant
  sequence, so nothing stronger than "monotone" can be claimed uniformly.

- **Choice is not used.** Both recursions choose a *least* element, supplied by
  the well-ordering principle ([[thm-well-ordering-principle]]), so the functions
  $f$ and $h$ are defined outright rather than selected, and
  [[thm-recursion]] then produces the index map. This is why the lemma, and with
  it Bolzano-Weierstrass in $\mathbb{R}$, needs no form of the axiom of choice,
  in contrast with the usual argument for sequential compactness in a general
  metric space.
```

## The dependencies it declares, quoted verbatim from disk

Each block below is the claim-bearing text of one declared dependency.
These are the only statements the item is entitled to use. If a step
needs more than the text below gives, that is the defect — quote the
dependency text and show exactly what it fails to supply.

### `def-sequence` — definition — Sequences of reals: bounded, eventually, frequently, tails, subsequences

(statement provenance: ai-altered)

### Definition

Throughout, $\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]],
[[def-real-numbers]]) with its order and absolute value ([[def-real-order]]), and
$\mathbb{N}$ is the set of natural numbers with its order ([[def-natural-numbers]],
[[def-nat-order]]).

A **sequence of reals** is a function $x : \mathbb{N} \to \mathbb{R}$. We write
$x_k$ for the value $x(k)$, call it the **$k$-th term**, and write $(x_k)$, or
$(x_k)_{k \in \mathbb{N}}$, for the function itself. The **range** of $(x_k)$ is
the subset $\{\, x_k : k \in \mathbb{N} \,\} \subseteq \mathbb{R}$.

Let $(x_k)$ be a sequence of reals and let $P$ be a property of indices.

- $(x_k)$ is **bounded** if there is $M \in \mathbb{R}$ with $|x_k| \le M$ for
  every $k \in \mathbb{N}$; it is **unbounded** otherwise.
- $P$ holds **eventually** if there is $K \in \mathbb{N}$ such that $P(k)$ holds
  for every $k \ge K$.
- $P$ holds **frequently** if for every $K \in \mathbb{N}$ there is some
  $k \ge K$ for which $P(k)$ holds.
- For $K \in \mathbb{N}$, the **$K$-th tail** of $(x_k)$ is the sequence
  $x^{(K)}$ defined by $x^{(K)}_j := x_{j + K}$ for $j \in \mathbb{N}$; it is
  again a sequence of reals.
- A function $n : \mathbb{N} \to \mathbb{N}$ is **strictly increasing** if
  $n_j < n_k$ whenever $j < k$. For such an $n$, the **subsequence** of $(x_k)$
  along $n$ is the composite $x \circ n$, written $(x_{n_k})_{k \in \mathbb{N}}$;
  it is again a sequence of reals.

**Convergence and Cauchyness are not defined here.** They are already fixed, for
sequences of reals, by the published [[def-real-limit]]: $(x_k)$ *converges* to
$x \in \mathbb{R}$ when for every rational $\varepsilon > 0$ there is
$K \in \mathbb{N}$ with $|x_k - x| < \varepsilon$ for all $k \ge K$, and $(x_k)$
is *Cauchy* when for every rational $\varepsilon > 0$ there is $K \in \mathbb{N}$
with $|x_k - x_l| < \varepsilon$ for all $k, l \ge K$. This page builds the
toolkit for those two notions and does not restate them. A sequence
**converges** if it converges to some real, and **diverges** if it does not.

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

### `def-real-order` — definition — Order on the reals

(statement provenance: ai-altered)

### Definition

A real $x$ is **positive** when it has a representative $(a_n)$ together
with a rational $\delta > 0$ and an index $N$ such that $a_n > \delta$
for all $n \ge N$. Define

$$x \le y \iff x = y \;\text{ or }\; y - x \text{ is positive},$$

and $|x| = x$ if $x \ge 0$, $|x| = -x$ otherwise.

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

### `lem-index-map-grows` — lemma — A strictly increasing index map satisfies $n_k \\ge k$

(statement provenance: ai-altered)

### Statement

Let $n : \mathbb{N} \to \mathbb{N}$ be a function, written $k \mapsto n_k$, and
recall that $n$ is **strictly increasing** when $n_j < n_k$ whenever $j < k$
([[def-sequence]], [[def-nat-order]]).

1. **Consecutive comparisons suffice.** If $n_i < n_{\sigma(i)}$ for every
   $i \in \mathbb{N}$, then $n$ is strictly increasing.
2. **Growth.** If $n$ is strictly increasing then $n_k \ge k$ for every
   $k \in \mathbb{N}$.

Claim 1 is what one checks in practice when exhibiting a subsequence; claim 2 is
what every later subsequence argument uses.

### `thm-recursion` — theorem — The recursion theorem

(statement provenance: literature-derived)

### Statement

Let $(N,0,\sigma)$ be a Peano system ([[def-peano-system]]), in particular the natural numbers $\mathbb{N}$ ([[def-natural-numbers]]). For any set $A$, any element $a \in A$, and any function $f : A \to A$, there is a unique function $g : N \to A$ such that $g(0) = a$ and $g(\sigma(n)) = f(g(n))$ for all $n \in N$.

### `thm-well-ordering-principle` — theorem — The well-ordering principle

(statement provenance: literature-derived)

### Statement

Every nonempty subset $S \subseteq \mathbb{N}$ has a least element: there is $\ell \in S$ with $\ell \le s$ for all $s \in S$.

### `def-nat-order` — definition — Order on the natural numbers

(statement provenance: literature-derived)

### Definition

For $m, n \in \mathbb{N}$, define the **order** by

$$m \le n \iff \exists k \in \mathbb{N}\ (m + k = n),$$

and the **strict order** by $m < n \iff (m \le n \text{ and } m \neq n)$, using
addition ([[def-nat-addition]]).

### `thm-nat-linear-order` — theorem — $\\le$ is a linear order on $\\mathbb{N}$

(statement provenance: ai-altered)

### Statement

The relation $\le$ on $\mathbb{N}$, where $m \le n \iff \exists k\ (m + k = n)$ ([[def-nat-order]]), is a linear (total) order: reflexive, antisymmetric, transitive, and total.

### `lem-nat-discrete` — lemma — Discreteness: $\\sigma(n)$ is the immediate successor

(statement provenance: ai-altered)

### Statement

For all $m, n \in \mathbb{N}$: $m < n \iff \sigma(m) \le n$ ([[def-nat-order]]). Consequently there is no $k$ with $n < k < \sigma(n)$: the successor $\sigma(n)$ is the immediate successor of $n$.

## What to return

Read `lem-peak-monotone-subsequence` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
