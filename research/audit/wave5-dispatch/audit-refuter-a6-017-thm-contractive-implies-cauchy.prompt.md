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

# Adversarial proof reading — `thm-contractive-implies-cauchy`

## The item under review, in full

`items/thm-contractive-implies-cauchy.md`

```markdown
---
id: thm-contractive-implies-cauchy
kind: theorem
title: "Every contractive sequence is Cauchy, hence converges, with error bound $|x - x_k| \\le c^{k-1}|x_2 - x_1|/(1-c)$ for $k \\ge 1$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-contractive-sequence, thm-cauchy-criterion-via-lub, lem-geometric-sequence-null, def-integer-power, lem-power-laws, lem-power-monotone, lem-power-difference-factorisation, lem-triangle-inequality-finite, def-finite-sum, lem-finite-sum-laws, thm-induction-principle, def-real-limit, def-sequence, thm-algebra-of-limits, lem-limit-abs, lem-limit-preserves-order, lem-limit-of-tail, lem-of-inverse-positive, lem-of-abs-value, prop-of-multiply-inequalities, thm-nat-linear-order]
justified_by: []
forward_refs: [ex-contractive-sequence-fixed-point, cex-strictly-decreasing-gaps-no-limit]
aliases: []
landmark: true
proof_strategy: induction
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
    - title: "Cauchy sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
    - title: "Contraction mapping (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Contraction_mapping"
    - title: "R. Bartle and D. Sherbert, Introduction to Real Analysis, 4th ed., §3.5 (Thm 3.5.8)"
      url: "https://en.wikipedia.org/wiki/Fixed-point_iteration"
    - title: "J. Lebl, Basic Analysis I, §2.4"
      url: "https://www.jirka.org/ra/"
    - title: "Contractive sequence (PlanetMath)"
      url: "https://planetmath.org/contractivesequence"
---

## Statement

Let $(x_k)$ be a contractive sequence of reals with contraction constant $c$,
so $0 < c < 1$ and $|x_{k+2} - x_{k+1}| \le c\,|x_{k+1} - x_k|$ for every
$k \in \mathbb{N}$ ([[def-contractive-sequence]]). Then:

1. **Geometric decay of the gaps.** For every $k \ge 1$,
   $$|x_{k+1} - x_k| \;\le\; c^{\,k-1}\,|x_2 - x_1| .$$
2. **Convergence.** $(x_k)$ is Cauchy ([[def-real-limit]]) and therefore
   converges to some $x \in \mathbb{R}$ ([[thm-cauchy-criterion-via-lub]]).
3. **Error bound.** For every $k \ge 1$,
   $$|x - x_k| \;\le\; \frac{c^{\,k-1}\,|x_2 - x_1|}{1 - c} .$$

**The restriction $k \ge 1$ in claim 3 is a hypothesis, not a convention.** The
displayed bound is false at $k = 0$, even though $c^{-1}$ is defined
([[def-integer-power]]). Take $c = 1/2$ and the sequence
$x_0 = 0$, $x_k = 1$ for all $k \ge 1$: it is contractive with that $c$, its
limit is $x = 1$, the right-hand side at $k = 0$ is
$c^{-1}\,|x_2 - x_1|/(1-c) = 2 \cdot 0 / (1/2) = 0$, and the left-hand side is
$|x - x_0| = 1$. The classical statement of this theorem is written for
sequences indexed from $1$, where the question does not arise; this library
indexes from $0$ ([[def-sequence]]), so the hypothesis is stated.

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals and a real $c$ with $0 < c < 1$ such that $|x_{k+2} - x_{k+1}| \le c\,|x_{k+1} - x_k|$ for every $k \in \mathbb{N}$; the abbreviations $D := |x_2 - x_1| \ge 0$ and $A := D/(1-c)$, which is defined and $\ge 0$ since $1 - c > 0$.

[L1] Contractivity, with a constant independent of the index ([[def-contractive-sequence]]).

[L2] Induction principle ([[thm-induction-principle]]).

[L3] Integer powers: $a^0 = 1$, $a^{k+1} = a^k a$; and the law $a^{m+n} = a^m a^n$ ([[def-integer-power]], [[lem-power-laws]]).

[L4] Powers and order: $a \ge 0$ gives $a^n \ge 0$; $1^n = 1$ for every $n$ ([[lem-power-monotone]]).

[L5] Absolute value: $|t| \ge 0$, $|t| = |-t|$, and $|t| \le u$ exactly when $-u \le t \le u$ ([[lem-of-abs-value]]).

[L6] Multiplying inequalities of nonnegatives: $0 \le a \le b$ and $0 \le e \le f$ give $ae \le bf$ ([[prop-of-multiply-inequalities]]).

[L7] Reciprocals of positives are positive ([[lem-of-inverse-positive]]).

[L8] Finite sums, their notation $\sum_{i<n}$, and their laws: additivity, scaling, monotonicity, and telescoping $\sum_{i<n}(t_{i+1} - t_i) = t_n - t_0$ for any sequence $(t_i)$ ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L9] Triangle inequality for finite sums: $\big|\sum_{i<n} a_i\big| \le \sum_{i<n} |a_i|$ ([[lem-triangle-inequality-finite]]).

[L10] Factorisation: $1 - c^{\,n} = (1 - c)\sum_{i<n} c^{\,i}$, the case $b = 1$, $a = c$ of $b^n - a^n = (b-a)\sum_{i=0}^{n-1} a^i b^{\,n-1-i}$ together with $1^m = 1$; at $n = 0$ both sides are $0$ ([[lem-power-difference-factorisation]], [[lem-power-monotone]]).

[L11] For $0 < c < 1$ the sequence $(c^{\,j})$ converges to $0$ ([[lem-geometric-sequence-null]]).

[L12] Cauchy condition and convergence; it suffices to test a real $\varepsilon > 0$, since every positive rational is a positive real ([[def-real-limit]], [[def-sequence]]).

[L13] Every Cauchy sequence of reals converges ([[thm-cauchy-criterion-via-lub]]).

[L14] Limits: a sequence and each of its tails converge to the same limit ([[lem-limit-of-tail]]); the algebra of limits ([[thm-algebra-of-limits]]); compatibility of the absolute value with limits ([[lem-limit-abs]]); and preservation of non-strict inequalities in the limit ([[lem-limit-preserves-order]]).

[L15] The order on $\mathbb{N}$ is total, so any two indices are comparable ([[thm-nat-linear-order]]).

## Proof

**Proof technique:** induction.

1.1 Base case of claim 1, at $k = 1$: $|x_2 - x_1| \le c^{\,0}|x_2 - x_1| = D$, since $c^{\,0} = 1$. [given, L3, base]

1.2 Inductive hypothesis: fix $j \in \mathbb{N}$ and assume $|x_{j+2} - x_{j+1}| \le c^{\,j} D$. [ih]

1.3 By [L10], $(1-c)\sum_{i<n} c^{\,i} = 1 - c^{\,n} \le 1$, since $c^{\,n} \ge 0$; dividing by $1 - c > 0$ gives $\sum_{i<n} c^{\,i} \le 1/(1-c)$. [given, L4, L6, L7, L10]

1.4 Let $\varepsilon > 0$ be an arbitrary real and put $\delta := \varepsilon/(2(A+1)) > 0$, which is defined since $A + 1 > 0$. By [L11] fix $J \in \mathbb{N}$ with $c^{\,j} < \delta$ for every $j \ge J$. [given, L4, L7, L11, L12, choose]

2.1 Successor step: contractivity at the index $j+1$ gives $|x_{j+3} - x_{j+2}| \le c\,|x_{j+2} - x_{j+1}| \le c \cdot c^{\,j} D = c^{\,j+1} D$, the middle inequality by the inductive hypothesis multiplied by $c > 0$. [step 1.2, L1, L3, L6]

3.1 By the induction principle, $|x_{j+2} - x_{j+1}| \le c^{\,j} D$ for every $j \in \mathbb{N}$; writing $k = j+1$ this is claim 1: $|x_{k+1} - x_k| \le c^{\,k-1} D$ for every $k \ge 1$. [step 1.1, step 2.1, L2]

4.1 Fix $k \ge 1$ and $n \in \mathbb{N}$, and put $t_i := x_{k+i}$. Telescoping gives $x_{k+n} - x_k = t_n - t_0 = \sum_{i<n}(t_{i+1} - t_i)$, so $|x_{k+n} - x_k| \le \sum_{i<n}|x_{k+i+1} - x_{k+i}|$. [step 3.1, L8, L9]

4.2 Each summand obeys claim 1 at the index $k+i \ge 1$: $|x_{k+i+1} - x_{k+i}| \le c^{\,k+i-1} D = c^{\,k-1} c^{\,i} D$. [step 3.1, L3]

5.1 Summing the bound of step 4.2 over $i < n$, by monotonicity and scaling of finite sums, $|x_{k+n} - x_k| \le c^{\,k-1} D \sum_{i<n} c^{\,i}$. [step 4.1, step 4.2, L8]

6.1 Combining steps 5.1 and 1.3: for every $k \ge 1$ and every $n \in \mathbb{N}$, $|x_{k+n} - x_k| \le c^{\,k-1} D/(1-c) = c^{\,k-1} A$. [step 5.1, step 1.3, L4, L6]

7.1 For all indices $l, k \ge J + 1$: by comparability one of them is the smaller, say $k$, and writing $l = k + n$ step 6.1 gives $|x_l - x_k| \le c^{\,k-1} A \le c^{\,k-1}(A+1) \le \delta(A+1) = \varepsilon/2 < \varepsilon$, using $k - 1 \ge J$; the case $l < k$ follows since $|x_l - x_k| = |x_k - x_l|$. [step 6.1, step 1.4, L5, L6, L15]

8.1 The real $\varepsilon > 0$ was arbitrary and the index $J+1$ was produced from it, so $(x_k)$ is Cauchy, and therefore converges to some $x \in \mathbb{R}$: this is claim 2. [step 7.1, L12, L13]

9.1 Fix $k \ge 1$. The $k$-th tail $n \mapsto x_{k+n}$ converges to $x$, so as $n$ ranges over $\mathbb{N}$ the sequence $n \mapsto x_{k+n} - x_k$ converges to $x - x_k$, so $n \mapsto |x_{k+n} - x_k|$ converges to $|x - x_k|$; the constant sequence with value $c^{\,k-1}A$ converges to $c^{\,k-1}A$, and step 6.1 compares the two at every $n$. [step 6.1, step 8.1, L14]

10.1 Preservation of non-strict inequalities in the limit therefore gives $|x - x_k| \le c^{\,k-1}A = c^{\,k-1}|x_2 - x_1|/(1-c)$ for every $k \ge 1$, which is claim 3; claims 1, 2 and 3 are thus all established. [step 3.1, step 8.1, step 9.1, L14, discharge-induction] ∎

## Remarks

- **The bound is computable before the limit is known.** Claim 3 needs only
  $c$ and the single number $|x_2 - x_1|$, so it is an a priori estimate of the
  error of the $k$-th term: this is what makes contractive iteration a numerical
  method and not merely an existence theorem.
  [[ex-contractive-sequence-fixed-point]] carries out the arithmetic on a
  concrete iteration.

- **Where completeness is spent.** Only in step 10.1, through
  [[thm-cauchy-criterion-via-lub]]. Claims 1 and 3 are inequalities that hold in
  any ordered field once the limit exists; it is the existence of the limit that
  needs the least-upper-bound property, and the theorem is exactly the shape in
  which the Cauchy criterion is usually applied, namely to prove convergence
  without exhibiting the limit.

- **A smaller constant is a better theorem.** Any $c' \in [c, 1)$ is also a
  contraction constant ([[def-contractive-sequence]]), and the bound degrades as
  $c'$ grows, tending to uselessness as $c' \to 1$. That degeneration is not an
  artefact: for gaps that merely shrink, with no uniform $c < 1$, the conclusion
  fails outright ([[cex-strictly-decreasing-gaps-no-limit]]).

- **On the index range.** Claims 1 and 3 both start at $k = 1$, and both are
  genuinely false at $k = 0$, on the single witness given in the statement: there
  $|x_1 - x_0| = 1$ while $c^{-1}|x_2 - x_1| = 0$, so claim 1 fails at $k = 0$
  for the same reason claim 3 does. Nothing at all is asserted about the step
  from $x_0$ to $x_1$, and nothing can be: the contractive hypothesis constrains
  every gap by its predecessor, and the first gap has no predecessor to be
  constrained by.
```

## The dependencies it declares, quoted verbatim from disk

Each block below is the claim-bearing text of one declared dependency.
These are the only statements the item is entitled to use. If a step
needs more than the text below gives, that is the defect — quote the
dependency text and show exactly what it fails to supply.

### `def-contractive-sequence` — definition — Contractive sequence: $|x_{k+2} - x_{k+1}| \\le c\\,|x_{k+1} - x_k|$ for a fixed $0 < c < 1$

(statement provenance: literature-derived)

### Definition

A sequence $(x_k)$ of reals ([[def-sequence]]) is **contractive** when there is a
real $c$ with

$$0 < c < 1 \qquad \text{and} \qquad |x_{k+2} - x_{k+1}| \;\le\; c\,|x_{k+1} - x_k| \quad \text{for every } k \in \mathbb{N},$$

the order and the absolute value being those of $\mathbb{R}$
([[def-real-order]], [[lem-of-abs-value]]). Such a $c$ is called a **contraction
constant** for $(x_k)$.

**The constant must not depend on $k$.** This is the whole content of the
definition and the only place it can go wrong. A sequence whose consecutive gaps
each shrink, so that

$$|x_{k+2} - x_{k+1}| < |x_{k+1} - x_k| \quad \text{for every } k,$$

is *not* contractive on that evidence: what is required is a single $c < 1$
working at every index simultaneously. The two conditions really are different:
there is a sequence satisfying the second that satisfies the first for no
$c < 1$ and does not converge, and it is the named counterexample of the
companion page, recalled in the remarks below.

**The constant is not unique.** If $c$ is a contraction constant then so is every
$c'$ with $c \le c' < 1$, since $c\,|x_{k+1} - x_k| \le c'\,|x_{k+1} - x_k|$ when
$|x_{k+1} - x_k| \ge 0$ ([[lem-of-abs-value]]). Statements about contractive
sequences therefore quantify over a *chosen* constant, and the error bound in
[[thm-contractive-implies-cauchy]] is sharper for a smaller $c$.

**Degenerate cases are included.** A constant sequence is contractive with every
$c \in (0,1)$, all the gaps being $0$. A sequence that is eventually constant is
contractive as soon as the inequality holds at the finitely many earlier indices.
Nothing in the definition forces the gaps to be positive.

### `thm-cauchy-criterion-via-lub` — theorem — The Cauchy criterion from the least-upper-bound property: in a complete ordered field every Cauchy sequence converges

(statement provenance: literature-derived)

### Statement

Every Cauchy sequence of reals converges to a real ([[def-real-limit]]).

More carefully, this is a statement about the *axioms*: in a complete ordered
field, that is in an ordered field with the least-upper-bound property
([[def-complete-ordered-field]]), every Cauchy sequence converges. The proof
below uses nothing about $\mathbb{R}$ except that property, through
[[thm-bolzano-weierstrass]].

**This library already knows the conclusion by a different route.**
It is proved on the Cauchy-construction page, where
$\mathbb{R}$ is built out of Cauchy sequences of rationals and completeness is
read off the construction. That proof is about a particular construction; this
one is about the axioms, and it is what tells us the statement holds in *any*
complete ordered field, however it was obtained.

### `lem-geometric-sequence-null` — lemma — For $|r| < 1$ the sequence $r^k$ is null, and for $|r| > 1$ the sequence $|r|^k$ diverges to $+\\infty$

(statement provenance: ai-altered)

### Statement

Let $r \in \mathbb{R}$ and let $r^k$ be the integer power ([[def-integer-power]]).

1. If $|r| < 1$ then $(r^k)$ is **null**, that is $r^k \to 0$
   ([[def-real-limit]]).
2. If $|r| > 1$ then $(|r|^k)$ **diverges to $+\infty$**
   ([[def-divergence-to-infinity]]).

Claim 2 is stated for $|r|^k$ and not for $r^k$ on purpose: for $r < -1$ the
terms $r^k$ alternate in sign and are unbounded, so they neither converge nor
diverge to $+\infty$; what is true of them is the statement about their absolute
values.

Both claims come from Bernoulli's inequality ([[lem-bernoulli-inequality]]) and
the Archimedean property. Nothing here needs the least-upper-bound property
except through [[thm-of-archimedean]] and [[cor-archimedean-reciprocal]].

### `def-integer-power` — definition — Integer powers $a^m$

(statement provenance: ai-altered)

### Definition

Let $a \in \mathbb{R}$, where $\mathbb{R}$ is the ambient ordered field
([[def-ordered-field]], [[def-field]]).

**Natural exponents.** By the recursion theorem ([[thm-recursion]]) applied to
the set $\mathbb{R}$, the starting element $1$ and the function
$f(x) = x \cdot a$, there is a unique function $\mathbb{N} \to \mathbb{R}$,
written $n \mapsto a^n$, with

$$a^0 = 1, \qquad a^{n+1} = a^n \cdot a \quad (n \in \mathbb{N}).$$

Thus $a^1 = a$, $a^2 = a \cdot a$, and so on. Note that this is defined for
**every** $a$, including $a = 0$.

**Negative exponents.** If $a \ne 0$ and $n \in \mathbb{N}$ with $n \ge 1$, set

$$a^{-n} := (a^n)^{-1}.$$

**Why that is legitimate.** The right-hand side presupposes that $a^n$ is
invertible, that is, that $a^n \ne 0$. This is a proof obligation and not an
observation, and it is discharged by claim 2 of [[lem-power-laws]]: for $a \ne 0$
in a field, $a^n \ne 0$ for every $n \in \mathbb{N}$, proved there by induction on
$n$ from the fact that a field has no zero divisors ([[lem-of-no-zero-divisors]]).
That lemma is a statement *about* the operation introduced here, so it depends on
this definition and is recorded in this item's `justified_by` rather than in its
`deps` (SCHEMA §3). Given $a^n \ne 0$, the value $(a^n)^{-1}$ is a single
well-determined element, because multiplicative inverses in a field are unique
([[lem-of-inverse-unique]]).

**Integer exponents.** Every integer $m$ ([[def-integers]]) is either
$\iota(n)$ or $-\iota(n)$ for a unique natural $n$, where $\iota$ is the
embedding $\mathbb{N} \to \mathbb{Z}$ ([[lem-nat-embeds-int]],
[[def-int-operations]]). This too is a citation and not a slogan: the order on
$\mathbb{Z}$ is total ([[thm-int-ordered-ring]]), so $m \ge 0$ or $m < 0$; the
image of $\iota$ is exactly the set of nonnegative integers, and each of them is
$\iota(n)$ for a unique natural $n$ ([[lem-nat-embeds-int]]); and if $m < 0$ then
$-m > 0$, by compatibility of the order with addition ([[thm-int-ordered-ring]]),
so $-m = \iota(n)$ and $m = -\iota(n)$, with $n$ unique because $\iota$ is
injective. The two clauses above therefore define $a^m$ for every
$m \in \mathbb{Z}$ whenever $a \ne 0$, and for every $m \in \mathbb{N}$ for
arbitrary $a$. The clauses are consistent where they overlap: the only overlap is
$m = 0$, where $-\iota(0) = \iota(0)$ and $(a^0)^{-1} = 1^{-1} = 1 = a^0$.

### `lem-power-laws` — lemma — Laws of integer exponents

(statement provenance: ai-altered)

### Statement

Let $a, b$ be elements of a field ([[def-field]]) and let integer powers be as in
[[def-integer-power]].

1. For all $m, n \in \mathbb{N}$: $a^{m+n} = a^m a^n$, $(a^m)^n = a^{mn}$ and $(ab)^n = a^n b^n$.
2. If $a \ne 0$ then $a^n \ne 0$ for every $n \in \mathbb{N}$, and $a^{-m} = (a^m)^{-1}$ for every $m \in \mathbb{Z}$ ([[def-int-operations]]).
3. If $a \ne 0$ and $b \ne 0$ then all three identities of claim 1 hold for all $m, n \in \mathbb{Z}$.

### `lem-power-monotone` — lemma — Monotonicity of $x \\mapsto x^n$ and of $n \\mapsto a^n$

(statement provenance: ai-altered)

### Statement

Let $\mathbb{R}$ be an ordered field ([[def-ordered-field]]), let
$a, b \in \mathbb{R}$ and let $n \in \mathbb{N}$, with powers as in
[[def-integer-power]].

1. **Signs.** If $a \ge 0$ then $a^n \ge 0$, and if $a > 0$ then $a^n > 0$.
2. **Strict monotonicity in the base.** If $0 \le a < b$ and $n \ge 1$ then $a^n < b^n$. Consequently, for $a, b \ge 0$ and $n \ge 1$: $a < b \iff a^n < b^n$ and $a \le b \iff a^n \le b^n$, and $x \mapsto x^n$ is injective on $\{x \in \mathbb{R} : x \ge 0\}$.
3. **Comparison with the base.** If $a \ge 1$ and $n \ge 1$ then $a^n \ge a \ge 1$; if $a > 1$ and $n \ge 1$ then $a^n \ge a > 1$; and if $0 \le a \le 1$ then $a^n \le 1$.
4. **Monotonicity in the exponent.** If $a > 1$ then $a^m < a^n$ whenever $m < n$ in $\mathbb{N}$; if $a = 1$ then $a^n = 1$ for all $n$; and if $0 < a < 1$ then $a^m > a^n$ whenever $m < n$.

### `lem-power-difference-factorisation` — lemma — Factorisation of $b^n - a^n$, and the resulting Lipschitz estimate

(statement provenance: ai-altered)

### Statement

Let $a, b \in \mathbb{R}$ and let $n \in \mathbb{N}$ with $n \ge 1$, with powers
as in [[def-integer-power]] and finite sums as in [[def-finite-sum]]. Then

$$b^n - a^n = (b - a)\sum_{k=0}^{n-1} a^k b^{\,n-1-k}.$$

**Lipschitz estimate.** If $0 \le a \le b \le M$ then

$$0 \le b^n - a^n \le n M^{\,n-1} (b - a),$$

where $n$ denotes the canonical natural $\iota(n) \in \mathbb{R}$
([[lem-of-naturals-positive]], [[lem-of-q-embeds]]). This estimate is the form in
which the factorisation is used, later on this page, to prove that $n$-th roots
exist.

### `lem-triangle-inequality-finite` — lemma — Triangle inequality for finite sums

(statement provenance: ai-altered)

### Statement

Let $a : \mathbb{N} \to \mathbb{R}$ be a sequence of reals and $n \in \mathbb{N}$,
with finite sums as in [[def-finite-sum]] and the absolute value as in
[[def-abs-value]]. Then

$$\Big|\sum_{k<n} a_k\Big| \le \sum_{k<n} |a_k|.$$

### `def-finite-sum` — definition — Finite sums and finite products, by recursion

(statement provenance: ai-altered)

### Definition

Throughout this page $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]]), in particular an ordered field
([[def-ordered-field]]) and a field ([[def-field]]), and $\mathbb{N}$ is the set
of natural numbers ([[def-natural-numbers]]) with successor $\sigma(n) = n + 1$
([[def-nat-addition]]).

Let $a : \mathbb{N} \to \mathbb{R}$ be a sequence of reals, written $a_k$ for
$a(k)$. **Finite sums and finite products of $a$ are defined by recursion on the
upper index**, which is legitimate because of the recursion theorem
([[thm-recursion]]). That theorem produces a function of one variable, so the
running index has to be carried along inside the value: applying it to the set
$A = \mathbb{N} \times \mathbb{R}$, the starting element $(0, 0)$ and the function
$f(n, s) = (\sigma(n),\, s + a_n)$ gives a unique
$g : \mathbb{N} \to \mathbb{N} \times \mathbb{R}$ with

$$g(0) = (0, 0), \qquad g(\sigma(n)) = f(g(n)) \quad (n \in \mathbb{N}).$$

Write $g(n) = \big(\pi_1(g(n)),\, \Sigma_n\big)$ for its two coordinates.

**The first coordinate is the index itself, and that is a small induction, not an
observation** ([[thm-induction-principle]]). Indeed $\pi_1(g(0)) = 0$; and if
$\pi_1(g(n)) = n$, then
$g(\sigma(n)) = f\big(\pi_1(g(n)), \Sigma_n\big) = \big(\sigma(\pi_1(g(n))),\, \Sigma_n + a_{\pi_1(g(n))}\big) = \big(\sigma(n),\, \Sigma_n + a_n\big)$,
so $\pi_1(g(\sigma(n))) = \sigma(n)$. By induction $\pi_1(g(n)) = n$ for every
$n \in \mathbb{N}$. Only now may the second coordinate of the two displayed
clauses be read off, and doing so gives

$$\Sigma_0 = 0, \qquad \Sigma_{\sigma(n)} = \Sigma_n + a_n .$$

$\Sigma$ is moreover the **unique** function $\mathbb{N} \to \mathbb{R}$ with those
two properties: if $\Sigma'$ also has them then $n \mapsto (n, \Sigma'_n)$ satisfies
the two clauses defining $g$, hence equals $g$ by the uniqueness clause of
[[thm-recursion]], so $\Sigma' = \Sigma$.

We write $\sum_{k < n} a_k := \Sigma_n$. The same construction with starting
element $(0, 1)$ and $f(n, p) = (\sigma(n),\, p \cdot a_n)$, with the same
induction on the first coordinate and the same uniqueness argument, gives the
unique $\Pi : \mathbb{N} \to \mathbb{R}$ with

$$\Pi_0 = 1, \qquad \Pi_{\sigma(n)} = \Pi_n \cdot a_n ,$$

and we write $\prod_{k < n} a_k := \Pi_n$.

**Notation.** For $m, n \in \mathbb{N}$ we abbreviate

$$\sum_{k=0}^{n} a_k := \sum_{k < n+1} a_k, \qquad \prod_{k=0}^{n} a_k := \prod_{k < n+1} a_k,$$

and, for a general lower index $m$ with $m \le n + 1$, writing $d = n + 1 - m$
for the number of terms,

$$\sum_{k=m}^{n} a_k := \sum_{j < d} a_{m+j}, \qquad \prod_{k=m}^{n} a_k := \prod_{j < d} a_{m+j} .$$

When $m = n + 1$ we have $d = 0$ and the sum is **empty**, with value $0$, while
the empty product has value $1$. In the same spirit $\sum_{k=0}^{-1} a_k$ is
notation for the empty sum $\Sigma_0 = 0$ and $\prod_{k=0}^{-1} a_k$ for the
empty product $\Pi_0 = 1$; the index $-1$ never occurs as an element of
$\mathbb{N}$ and is only a way of writing "no terms".

Only finitely many values of $a$ enter $\sum_{k<n} a_k$, so the notation
$\sum_{k<n} a_k$ and $\prod_{k<n} a_k$ is also used for a list
$a_0, \dots, a_{n-1}$ of reals given without reference to any extension of the
list to all of $\mathbb{N}$: extend the list by $a_k = 0$ (respectively
$a_k = 1$) for $k \ge n$ and apply the definition above.

### `lem-finite-sum-laws` — lemma — Laws of finite sums and finite products

(statement provenance: ai-altered)

### Statement

Let $a, b, c : \mathbb{N} \to \mathbb{R}$ be sequences of reals, let
$\lambda \in \mathbb{R}$, and let $m, n \in \mathbb{N}$, with finite sums and
finite products as in [[def-finite-sum]]. Then:

1. **Additivity.** $\displaystyle\sum_{k<n}(a_k + b_k) = \sum_{k<n} a_k + \sum_{k<n} b_k$.
2. **Scaling.** $\displaystyle\sum_{k<n} \lambda a_k = \lambda \sum_{k<n} a_k$; in particular $\displaystyle\sum_{k<n} \lambda = n\lambda$, where $n$ denotes the canonical natural $\iota(n) \in \mathbb{R}$ ([[lem-of-q-embeds]], [[lem-of-naturals-positive]]).
3. **Splitting.** If $m \le n$ then $\displaystyle\sum_{k<n} a_k = \sum_{k<m} a_k + \sum_{k=m}^{n-1} a_k$, and $\displaystyle\prod_{k<n} a_k = \Big(\prod_{k<m} a_k\Big)\Big(\prod_{k=m}^{n-1} a_k\Big)$.
4. **Monotonicity.** If $a_k \le b_k$ for all $k < n$ then $\displaystyle\sum_{k<n} a_k \le \sum_{k<n} b_k$. In particular, if $a_k \ge 0$ for all $k < n$ then $\sum_{k<n} a_k \ge 0$, every single term satisfies $a_j \le \sum_{k<n} a_k$ for $j < n$, and $\sum_{k<n} a_k = 0$ forces $a_k = 0$ for every $k < n$.
5. **Telescoping.** $\displaystyle\sum_{k<n}\big(c_{k+1} - c_k\big) = c_n - c_0$.
6. **Products.** $\displaystyle\prod_{k<n}(a_k b_k) = \Big(\prod_{k<n} a_k\Big)\Big(\prod_{k<n} b_k\Big)$; if $a_k \ge 0$ for all $k < n$ then $\prod_{k<n} a_k \ge 0$, and if $a_k > 0$ for all $k < n$ then $\prod_{k<n} a_k > 0$.

### `thm-induction-principle` — theorem — The principle of mathematical induction

(statement provenance: literature-derived)

### Statement

Let $S \subseteq \mathbb{N}$. If $0 \in S$ and $\sigma(n) \in S$ whenever $n \in S$, then $S = \mathbb{N}$. Equivalently (property form): if a property $P$ satisfies $P(0)$ and ($P(n) \Rightarrow P(\sigma(n))$) for all $n$, then $P(n)$ holds for all $n \in \mathbb{N}$. This is the induction principle, the basis of proof by induction.

### `def-real-limit` — definition — Limits and Cauchy sequences of reals

(statement provenance: ai-altered)

### Definition

A sequence $(x_k)$ of reals **converges** to $x \in \mathbb{R}$ when for
every rational $\varepsilon > 0$ there is $K$ with
$|x_k - x| < \hat\varepsilon$ for all $k \ge K$. It is **Cauchy** when for
every rational $\varepsilon > 0$ there is $K$ with
$|x_k - x_l| < \hat\varepsilon$ for all $k, l \ge K$.

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

### `thm-algebra-of-limits` — theorem — Algebra of limits: sums, scalar multiples, products and quotients

(statement provenance: ai-altered)

### Statement

Let $(x_k)$ and $(y_k)$ be sequences of reals ([[def-sequence]]) converging to
$x$ and $y$ respectively ([[def-real-limit]]), and let $c \in \mathbb{R}$. Then

$$x_k + y_k \to x + y, \qquad c\,x_k \to c\,x, \qquad x_k - y_k \to x - y, \qquad x_k y_k \to x y,$$

and if in addition $y \ne 0$ and $y_k \ne 0$ for every $k \in \mathbb{N}$, then

$$\frac{1}{y_k} \to \frac{1}{y} \qquad \text{and} \qquad \frac{x_k}{y_k} \to \frac{x}{y}.$$

The quotient case rests on an eventual lower bound for $|y_k|$, proved below
rather than assumed: $|y_k| > |y|/2$ for all sufficiently large $k$.

### `lem-limit-abs` — lemma — The absolute value is compatible with limits

(statement provenance: ai-altered)

### Statement

Let $(x_k)$ be a sequence of reals converging to $x \in \mathbb{R}$
([[def-sequence]], [[def-real-limit]]). Then $(|x_k|)$ converges to $|x|$.

In the single case $x = 0$ the implication reverses: $|x_k| \to 0$ if and only if
$x_k \to 0$. Whether the implication can be reversed for $x \ne 0$ is taken up in
the remarks below; it is no part of what the proof establishes.

### `lem-limit-preserves-order` — lemma — Limits preserve non-strict inequalities

(statement provenance: ai-altered)

### Statement

Let $(x_k)$ and $(y_k)$ be sequences of reals ([[def-sequence]]) converging to
$x$ and $y$ respectively ([[def-real-limit]]). If $x_k \le y_k$ eventually, that
is for all $k$ from some index on, then

$$\lim_{k} x_k \;\le\; \lim_{k} y_k .$$

In particular, if $x_k \ge 0$ eventually then $\lim_k x_k \ge 0$, and if
$a \le x_k \le b$ eventually then $a \le \lim_k x_k \le b$.

The conclusion is **not** strict, and cannot be made strict; see the remarks
below and the false statement at the end of this page.

### `lem-limit-of-tail` — lemma — Convergence depends only on the tail

(statement provenance: ai-altered)

### Statement

Let $(x_k)$ be a sequence of reals ([[def-sequence]]), let $x \in \mathbb{R}$,
and for $K \in \mathbb{N}$ let $x^{(K)}$ denote the $K$-th tail, $x^{(K)}_j =
x_{j+K}$. The following are equivalent ([[def-real-limit]]):

1. $(x_k)$ converges to $x$;
2. every tail $x^{(K)}$ converges to $x$;
3. some tail $x^{(K)}$ converges to $x$.

The same three statements with "converges to $x$" replaced by "is Cauchy" are
likewise equivalent. Consequently, if two sequences agree from some index on,
then either both converge to $x$ or neither does, and either both are Cauchy or
neither is.

### `lem-of-inverse-positive` — lemma — Inverses of positives are positive, and reciprocation reverses order

(statement provenance: ai-altered)

### Statement

Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and
let $a, b \in F$.

1. If $a > 0$ then $a^{-1} > 0$.
2. If $0 < a < b$ then $0 < b^{-1} < a^{-1}$.

### `lem-of-abs-value` — lemma — Basic properties of the absolute value

(statement provenance: ai-altered)

### Statement

Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \in F$, with
$|x|$ the absolute value ([[def-abs-value]]). Then

$$|x| \ge 0; \quad |x| = 0 \iff x = 0; \quad -|x| \le x \le |x|; \quad |-x| = |x|; \quad |xy| = |x|\,|y|;$$

and, for every $c > 0$, one has $|x| < c \iff -c < x < c$.

### `prop-of-multiply-inequalities` — proposition — Multiplying inequalities of positives

(statement provenance: ai-altered)

### Statement

Let $F$ be an ordered field. If $0 < a < b$ and $0 < c < d$ then $ac < bd$. If $0 \le a \le b$ and $0 \le c \le d$ then $ac \le bd$.

### `thm-nat-linear-order` — theorem — $\\le$ is a linear order on $\\mathbb{N}$

(statement provenance: ai-altered)

### Statement

The relation $\le$ on $\mathbb{N}$, where $m \le n \iff \exists k\ (m + k = n)$ ([[def-nat-order]]), is a linear (total) order: reflexive, antisymmetric, transitive, and total.

## What to return

Read `thm-contractive-implies-cauchy` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
