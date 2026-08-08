# Audit proof-refuter brief — Wave 6, step A6

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30) — binding on every current
> and future agent.** Use commands already allowed inside the workspace sandbox;
> choose non-escalated forms and never ask the owner to approve a shell command.
> If an indispensable operation has no escalation-free form, report a blocker.

You are **DeepSeek V4 Pro** at the API's maximum reasoning setting, serving as a
read-only adversarial proof-refuter for the published-page audit. You are
tool-less: you cannot open a file, run a command, browse, edit, or delegate.
Everything you may rely on is reproduced in the `This dispatch` section. Return
evidence only; Audit-Alpha alone adjudicates and edits.

## Triage — the standing rule (verbatim, binding on you)

- **Non-negotiable:** mathematical accuracy, logical validity, correct
  citation.
- **Explicitly acceptable, spend no effort:** minor citational quirks; logical
  gaps a competent reader closes **within 30 seconds**; other non-fatal quirks;
  imperfection at the level of the letter.

## Adversarial standard

Read the target's title, Statement/Definition/Example/Statement refuted, Facts &
Assumptions, every numbered proof/refutation/verification step, and Remarks.
Try to falsify the public claim and every load-bearing inference.

1. Compare every cited fact with the supplied source text before alleging that
   it is weak. Check domain, quantifiers, hypotheses, direction, conclusion,
   and whether the source licenses the exact use.
2. Check that the title and public statement assert no more than the proof
   establishes, and that every proof step uses only available premises.
3. Check both directions of biconditionals, uniqueness/existence claims,
   induction and limiting arguments, empty/zero/endpoint/degenerate cases,
   extended-real conventions, index shifts, and hidden division or choice.
4. Re-read Remarks as skeptically as a numbered step. A false mathematical
   remark is a defect even when the proof is sound.
5. When the target is marked `ai-generated`, actively search for a
   counterexample to its claim, witness, or refutation rather than merely
   checking prose consistency.
6. Treat a false public claim, logically invalid proof, missing necessary
   hypothesis, circularity, or materially inaccurate load-bearing citation as
   fatal. Do not inflate an expository omission or a gap closable within thirty
   seconds into a defect.

## Output format

Reply with exactly this structure and no preamble:

```text
VERDICT: CLEAN | DEFECTS
```

If `DEFECTS`, give one block per finding:

```text
FINDING 1
  location: [exact title, section, fact label, or numbered step]
  severity: fatal | nonfatal
  claim:    [the exact mathematical assertion]
  evidence: [counterexample, missing hypothesis, invalid inference, or exact source mismatch]
```

Then always end with:

```text
BOUNDARY: [specific boundary/counterexample checks and their disposition]
SOURCES:  [confirm every supplied cited item used by the target was inspected]
CHECKED:  [confirm the title, public claim, every numbered step, and Remarks were read]
```



---

# This dispatch

## Target item — `rem-extended-real-conventions`

Normalized current SHA-256: `fb7a041810274bc3813e6e1f2109e13c0bcaec8dc1dba3451cb44231fc0c695a`

The complete current item follows, including frontmatter:

````markdown
---
id: rem-extended-real-conventions
kind: remark
title: "Which extended-real operations this library leaves undefined, and where each $\\limsup$ statement needs the hypothesis"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: not-applicable
deps: [def-extended-reals, def-limsup-liminf, thm-limsup-subadditive, thm-limsup-submultiplicative, rem-sup-conventions, lem-extended-reals-complete]
justified_by: []
forward_refs: [cex-zero-times-infinity-indeterminate]
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Extended real number line (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Extended_real_number_line"
    - title: "Indeterminate form (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Indeterminate_form"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 (1.23)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

[[rem-sup-conventions]] refused, inside $\mathbb{R}$, the conventions
$\sup S = +\infty$ and $\inf \emptyset = +\infty$, and promised that a later page
needing $\overline{\mathbb{R}}$ would introduce it explicitly as a new object
with its own order and its own partial arithmetic. [[def-extended-reals]] is that
introduction, and this page is the one that needed it. Nothing about the real
supremum has changed: $\sup S$ and $\inf S$ for $S \subseteq \mathbb{R}$ are still
real numbers, still defined only under the nonempty and bounded hypotheses, and
the extended bounds of [[lem-extended-reals-complete]] are a *different*
operation in a *different* ordered set, agreeing with the real one exactly where
the real one is defined.

**What is defined.** On $\overline{\mathbb{R}}$ this library defines exactly
three things: the total order, the reflection $a \mapsto -a$, and the two partial
operations $a + b$ and $ab$. The order and the reflection are total. The two
operations are not, and the gaps are these.

| expression | status |
|---|---|
| $a + b$ with $a, b \in \mathbb{R}$ | the field sum |
| $(+\infty) + b$ with $b \ne -\infty$ | $+\infty$ |
| $(-\infty) + b$ with $b \ne +\infty$ | $-\infty$ |
| $(+\infty) + (-\infty)$ and $(-\infty) + (+\infty)$ | **undefined** |
| $ab$ with $a, b \in \mathbb{R}$ | the field product |
| $(\pm\infty) \cdot b$ with $b \ne 0$ | $\pm\infty$, by the sign rule |
| $0 \cdot (\pm\infty)$ and $(\pm\infty) \cdot 0$ | **undefined** |

**What is not defined at all.** There is no subtraction on
$\overline{\mathbb{R}}$, no division, no absolute value and no exponentiation.
Where a proof on this page wants $a - b$ it writes $a + (-b)$, which inherits the
gap at $\{+\infty, -\infty\}$; where it wants a quotient it does not write one.
In particular the expressions $(+\infty) - (+\infty)$, $(+\infty)/(+\infty)$ and
$0/0$ do not occur here, not because they are hard but because neither operation
exists.

**Why the two gaps are gaps.** They are the two places where the value is not
determined by the sequences involved, so no assignment could be compatible with
limits. For the product this is proved:
[[cex-zero-times-infinity-indeterminate]] exhibits a null sequence and sequences
diverging to $+\infty$ whose products behave differently, so $0 \cdot (+\infty)$
has no value that would make a product rule true. For the sum the same is visible
with $a_k = k$ and $b_k = -k$, whose sum is constantly $0$, against $a_k = k$ and
$b_k = -2k$, whose sum diverges to $-\infty$; both pairs have
$\limsup a_k = +\infty$ and $\limsup b_k = -\infty$.

**Where each statement on this page carries the hypothesis.** Reading the page in
order, the pattern is that everything purely order-theoretic is unconditional and
everything arithmetic is not.

- [[lem-extended-reals-complete]], [[def-limsup-liminf]], [[lem-limsup-exists]],
  [[lem-limsup-reflection]], [[lem-liminf-le-limsup]],
  [[lem-limsup-monotone-comparison]], [[thm-limsup-is-greatest-subsequential-limit]]
  and [[cor-liminf-is-least-subsequential-limit]] carry **no** hypothesis on the
  sequence. They use only the order and the reflection, both of which are total,
  so unbounded sequences and the values $\pm\infty$ need no separate treatment.
- [[lem-limsup-epsilon-characterisation]] requires $L \in \mathbb{R}$. That is not
  an arithmetic gap but a syntactic one: its conditions mention $L + \varepsilon$
  and $L - \varepsilon$, and subtraction is not available in
  $\overline{\mathbb{R}}$. The infinite cases are covered instead by
  [[thm-convergence-iff-limsup-equals-liminf]], whose statement uses no
  arithmetic at all.
- [[thm-limsup-subadditive]] requires that
  $\limsup_k x_k + \limsup_k y_k$ be defined, which is exactly the exclusion of
  the pair $\{+\infty, -\infty\}$ from the table above. Nothing else is assumed;
  in particular the sequences need not be bounded, and the two infinite cases are
  proved rather than excluded.
- [[thm-limsup-submultiplicative]] requires the sequences to be bounded and
  nonnegative. Boundedness is what makes all three limit superiors real, so that
  the product on the right is a product in $\mathbb{R}$; without it the right-hand
  side could be the undefined $0 \cdot (+\infty)$. Nonnegativity is a separate
  requirement, needed because the estimate multiplies two upper bounds.

**What this costs a reader coming from a measure-theory text.** Such a text
typically declares $0 \cdot \infty := 0$, which is genuinely convenient there,
because in an integral the factor $0$ is a measure-zero set and the convention
makes countable additivity work without cases. That convention is *not* in force
here, and it is not compatible with limits: it is a decision about a particular
formula, not a fact about $\overline{\mathbb{R}}$. A statement quoted from such a
source therefore needs its degenerate cases restored before it can be used with
the results on this page.

**One thing that is not a convention.** The equations
$\limsup_k x_k = +\infty$ and $\liminf_k x_k = -\infty$ occurring throughout this
page are ordinary equations between elements of $\overline{\mathbb{R}}$, not
abbreviations. That is precisely the difference from
[[def-divergence-to-infinity]], where "$x_k \to +\infty$" is a single
abbreviation for a condition and no object named $+\infty$ is involved. Both
readings coexist without conflict, and
[[thm-convergence-iff-limsup-equals-liminf]] is the statement that relates them.
````

## Proof contract for the target

No proof contract is required for this non-proof-bearing item.

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "rem-extended-real-conventions",
    "sourcePage": "limsup-and-subsequential-limits",
    "batch": "wave6-real-analysis-limits",
    "target": "def-extended-reals",
    "declared_target": "def-extended-reals",
    "target_statement_provenance": null,
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-extended-real-conventions",
    "sourcePage": "limsup-and-subsequential-limits",
    "batch": "wave6-real-analysis-limits",
    "target": "def-limsup-liminf",
    "declared_target": "def-limsup-liminf",
    "target_statement_provenance": null,
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-extended-real-conventions",
    "sourcePage": "limsup-and-subsequential-limits",
    "batch": "wave6-real-analysis-limits",
    "target": "thm-limsup-subadditive",
    "declared_target": "thm-limsup-subadditive",
    "target_statement_provenance": null,
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-extended-real-conventions",
    "sourcePage": "limsup-and-subsequential-limits",
    "batch": "wave6-real-analysis-limits",
    "target": "thm-limsup-submultiplicative",
    "declared_target": "thm-limsup-submultiplicative",
    "target_statement_provenance": null,
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-extended-real-conventions",
    "sourcePage": "limsup-and-subsequential-limits",
    "batch": "wave6-real-analysis-limits",
    "target": "rem-sup-conventions",
    "declared_target": "rem-sup-conventions",
    "target_statement_provenance": "ai-altered",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-extended-real-conventions",
    "sourcePage": "limsup-and-subsequential-limits",
    "batch": "wave6-real-analysis-limits",
    "target": "lem-extended-reals-complete",
    "declared_target": "lem-extended-reals-complete",
    "target_statement_provenance": null,
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-extended-real-conventions",
    "sourcePage": "limsup-and-subsequential-limits",
    "batch": "wave6-real-analysis-limits",
    "target": "cex-zero-times-infinity-indeterminate",
    "declared_target": "cex-zero-times-infinity-indeterminate",
    "target_statement_provenance": null,
    "targetPage": "limsup-and-subsequential-limits-examples",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "forward_ref",
    "kind": "forward",
    "requires_semantic_audit": true
  }
]
```

## Full text of every cited or declared item (16)

### `cex-zero-times-infinity-indeterminate`

````markdown
---
id: cex-zero-times-infinity-indeterminate
kind: counterexample
title: "Null times divergent has no rule: $x_k = 1/k$ with $y_k = ck$ gives product limit $c$, and with $y_k = k^2$ gives divergence"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-extended-reals, def-divergence-to-infinity, thm-algebra-of-limits, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, lem-of-naturals-positive, lem-limit-unique, lem-convergent-implies-bounded, def-real-limit, def-sequence, def-integer-power, lem-of-sign-rules, lem-of-add-order, cor-of-one-positive, def-nat-order, thm-nat-linear-order, def-ordered-field, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Indeterminate form (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Indeterminate_form"
    - title: "Extended real number line (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Extended_real_number_line"
    - title: "T. Tao, Analysis I, 3rd ed., §6.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement refuted

That the product $0 \cdot (+\infty)$, left undefined by [[def-extended-reals]],
could be given a value compatible with limits: that there is
$v \in \overline{\mathbb{R}}$ such that for all sequences of reals with
$x_k \to 0$ ([[def-real-limit]]) and $y_k \to +\infty$
([[def-divergence-to-infinity]]) the products $x_k y_k$ have the single limiting
behaviour named by $v$.

Equivalently: that knowing a factor is null and the other diverges to $+\infty$
determines anything at all about the product. It does not, and the two undefined
entries in the arithmetic of $\overline{\mathbb{R}}$ are undefined for exactly
this reason.

## Facts & Assumptions

**Given:** The canonical naturals $\iota(n) = n \cdot 1_{\mathbb{R}}$; the sequence $x_k := 1/\iota(k+1)$; for a real $c > 0$ the sequence $y^{(c)}_k := c\,\iota(k+1)$; and the sequence $z_k := \iota(k+1)\,\iota(k+1)$.

[L1] Canonical naturals: $\iota(n) > 0$ and invertible for $n \ge 1$, $\iota$ is strictly increasing, and $\iota(n) \ge 1$ for $n \ge 1$ ([[lem-of-naturals-positive]], [[def-nat-order]], [[thm-nat-linear-order]]).

[L2] Archimedean facts: for every real $\eta > 0$ there is a natural $p \ge 1$ with $1/p < \eta$, and for every real $M$ there is a natural $p \ge 1$ with $M < \iota(p)$; and $0 < u < v$ gives $0 < 1/v < 1/u$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[lem-of-inverse-positive]]).

[L3] Convergence to a real and divergence to $+\infty$; to establish convergence it suffices to produce a threshold for every real $\varepsilon > 0$; a constant sequence converges to its value ([[def-real-limit]], [[def-sequence]], [[def-divergence-to-infinity]]).

[L4] A sequence diverging to $+\infty$ is unbounded and therefore does not converge to any real ([[def-divergence-to-infinity]], [[lem-convergent-implies-bounded]]); a limit, when it exists, is unique ([[lem-limit-unique]]).

[L5] Order and field arithmetic: multiplying an inequality by a positive element preserves it; $0 < 1 < 2$ and $1 \ne 2$; $u \cdot (1/u) = 1$ for $u \ne 0$; and the algebra of limits ([[lem-of-sign-rules]], [[lem-of-add-order]], [[cor-of-one-positive]], [[thm-algebra-of-limits]], [[def-integer-power]], [[def-ordered-field]], [[def-complete-ordered-field]]).

[L6] The product $0 \cdot (\pm\infty)$ is left undefined in $\overline{\mathbb{R}}$ ([[def-extended-reals]]).

## Counterexample

**Proof technique:** direct.

1.1 The sequence $x_k = 1/\iota(k+1)$ is well defined, positive, and converges to $0$: given a real $\varepsilon > 0$, take a natural $p \ge 1$ with $1/p < \varepsilon$; for $k \ge p$ we have $\iota(k+1) > \iota(p) > 0$, hence $0 < x_k < 1/p < \varepsilon$. [given, L1, L2, L3]

1.2 For every real $c > 0$ the sequence $y^{(c)}_k = c\,\iota(k+1)$ diverges to $+\infty$: given a real $M$, the quotient $M/c$ is real, so there is a natural $p \ge 1$ with $M/c < \iota(p)$, and for $k \ge p$ we get $\iota(k+1) > \iota(p) > M/c$, hence $y^{(c)}_k = c\,\iota(k+1) > M$ after multiplying by $c > 0$. [given, L1, L2, L3, L5]

1.3 The sequence $z_k = \iota(k+1)\iota(k+1)$ diverges to $+\infty$: given a real $M$, take a natural $p \ge 1$ with $M < \iota(p)$; for $k \ge p$ we have $\iota(k+1) \ge 1$ and $\iota(k+1) > \iota(p) > M$, so $z_k \ge \iota(k+1) > M$. [given, L1, L2, L3, L5]

2.1 For every real $c > 0$ the product sequence is constant: $x_k y^{(c)}_k = \big(1/\iota(k+1)\big)\,c\,\iota(k+1) = c$ for every $k$, so it converges to $c$. [step 1.1, step 1.2, L3, L5]

2.2 The product with $(z_k)$ is $x_k z_k = \big(1/\iota(k+1)\big)\iota(k+1)\iota(k+1) = \iota(k+1)$, which diverges to $+\infty$ by the argument of step 1.3 with the single factor, and therefore converges to no real number. [step 1.1, step 1.3, L1, L2, L3, L4, L5]

3.1 Now take the three pairs $(x, y^{(1)})$, $(x, y^{(2)})$ and $(x, z)$. In each, the first sequence is null and the second diverges to $+\infty$, so each pair satisfies the hypotheses of the refuted claim; but the three products converge to $1$, converge to $2$, and converge to $+\infty$ in the extended sense. Since $1 \ne 2$ and limits are unique, no single $v \in \overline{\mathbb{R}}$ describes all three, and the claim is false. [step 2.1, step 2.2, L4, L5, L6] ∎

## Remarks

- **This is why the entry is blank in the table.** [[def-extended-reals]] leaves $0 \cdot (\pm\infty)$ undefined not out of caution but because any value assigned to it would make some instance of a product rule false, and the three pairs above already realise three different behaviours.

- **The same phenomenon rules out $(+\infty) + (-\infty)$.** Taking $a_k = \iota(k)$ and $b_k = -\iota(k)$ gives a sum that is constantly $0$, while $a_k = \iota(k)$ and $b_k = -\iota(k) - \iota(k)$ gives a sum diverging to $-\infty$; both pairs have $a_k \to +\infty$ and $b_k \to -\infty$.

- **Measure theory's convention is not a counterexample to this.** Texts that set $0 \cdot \infty := 0$ are fixing the value of a *formula* in a context where the factor $0$ is the measure of a null set, not asserting a limit rule; the distinction is spelled out in [[rem-extended-real-conventions]].

- **Index range.** The classical statement writes $x_k = 1/k$ and $y_k = ck$, which requires $k \ge 1$. Written on $\mathbb{N}$, which contains $0$ ([[def-sequence]]), the same sequences are $1/(k+1)$ and $c(k+1)$, as above.
````

### `cor-liminf-is-least-subsequential-limit`

````markdown
---
id: cor-liminf-is-least-subsequential-limit
kind: corollary
title: "The limit inferior is the least subsequential limit in $\\overline{\\mathbb{R}}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-limsup-is-greatest-subsequential-limit, lem-limsup-reflection, def-limsup-liminf, def-subsequential-limit, def-extended-limits, def-extended-reals, thm-algebra-of-limits, def-divergence-to-infinity, def-real-limit, def-sequence, lem-of-add-order]
justified_by: []
aliases: []
landmark: false
short: "$\\liminf = \\min \\overline{\\operatorname{SL}}$"
proof_strategy: direct
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
    - title: "Limit superior and limit inferior (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_superior_and_limit_inferior"
    - title: "Subsequential limit (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subsequential_limit"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.17)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "N. Donaldson, Math 140A: Real Analysis notes"
      url: "https://www.math.uci.edu/~ndonalds/math140a/notes.pdf"
pipeline_run: null
---

## Statement

Let $(x_k)$ be a sequence of reals ([[def-sequence]]). Then
$\liminf_{k} x_k \in \overline{\operatorname{SL}}(x)$ and
$\liminf_{k} x_k \le L$ for every $L \in \overline{\operatorname{SL}}(x)$
([[def-limsup-liminf]], [[def-extended-limits]]).

So the extended subsequential limit set of any real sequence has a **least**
element as well as a greatest one, and the two are
$\liminf_k x_k$ and $\limsup_k x_k$ respectively
([[thm-limsup-is-greatest-subsequential-limit]]). Every extended subsequential
limit lies between them.

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals, and its reflection $y_k := -x_k$.

[L1] Reflection on $\overline{\mathbb{R}}$: $a \mapsto -a$ satisfies $-(-a) = a$ and $a \le b$ if and only if $-b \le -a$ ([[def-extended-reals]]).

[L2] $\limsup_k(-x_k) = -\liminf_k x_k$ ([[lem-limsup-reflection]]).

[L3] For every real sequence the extended subsequential limit set is nonempty and has greatest element the limit superior ([[thm-limsup-is-greatest-subsequential-limit]]).

[L4] Convergence in $\overline{\mathbb{R}}$, subsequences and the set $\overline{\operatorname{SL}}$ ([[def-extended-limits]], [[def-subsequential-limit]], [[def-sequence]], [[def-real-limit]]).

[L5] Scalar multiples of convergent sequences: $z_j \to z$ in $\mathbb{R}$ implies $c z_j \to c z$ ([[thm-algebra-of-limits]]).

[L6] Divergence to $\pm\infty$, and order reversal: $z_j > M$ is equivalent to $-z_j < -M$, and $M$ runs over all reals exactly when $-M$ does ([[def-divergence-to-infinity]], [[lem-of-add-order]]).

[L7] Limit superior and limit inferior of a real sequence ([[def-limsup-liminf]]).

## Proof

**Proof technique:** direct.

1.1 Put $y_k := -x_k$, a sequence of reals; then $-y_k = x_k$ for every $k$, by the involution property of the reflection. [given, L1, L4]

1.2 Let $L \in \overline{\mathbb{R}}$ and let $n : \mathbb{N} \to \mathbb{N}$ be strictly increasing with $(x_{n_j})$ converging to $L$ in $\overline{\mathbb{R}}$. [given, L4]

1.3 By [L3] applied to the sequence $(y_k)$, the set $\overline{\operatorname{SL}}(y)$ is nonempty and has greatest element $N_0 := \limsup_k y_k$, and $N_0 = -\liminf_k x_k$ by [L2]. [given, L2, L3, L7]

2.1 The reflected subsequence $(y_{n_j}) = (-x_{n_j})$ converges to $-L$ in $\overline{\mathbb{R}}$. If $L$ is real this is the scalar rule with $c = -1$. If $L = +\infty$ then for every real $M$ there is $J$ with $x_{n_j} > M$ for all $j \ge J$, hence $y_{n_j} < -M$ for all such $j$; since $-M$ runs over all reals as $M$ does, $y_{n_j} \to -\infty = -L$. If $L = -\infty$ the same argument with the inequalities exchanged gives $y_{n_j} \to +\infty = -L$. [step 1.2, L1, L4, L5, L6]

3.1 Hence $L \in \overline{\operatorname{SL}}(x)$ implies $-L \in \overline{\operatorname{SL}}(y)$, the same index map serving. Applying that implication to the sequence $(y_k)$, whose reflection is $(x_k)$, gives conversely that $N \in \overline{\operatorname{SL}}(y)$ implies $-N \in \overline{\operatorname{SL}}(x)$. So $\overline{\operatorname{SL}}(x) = \{\, -N : N \in \overline{\operatorname{SL}}(y) \,\}$. [step 2.1, step 1.1, L1, L4]

4.1 Therefore $-N_0 \in \overline{\operatorname{SL}}(x)$, and $-N_0 = -(-\liminf_k x_k) = \liminf_k x_k$; and for any $L \in \overline{\operatorname{SL}}(x)$ the element $-L$ lies in $\overline{\operatorname{SL}}(y)$, so $-L \le N_0$ by maximality, whence $\liminf_k x_k = -N_0 \le L$ by order reversal. Thus $\liminf_k x_k$ is the least element of $\overline{\operatorname{SL}}(x)$. [step 3.1, step 1.3, L1, L2] ∎

## Remarks

- **Nothing is reconstructed.** The subsequence realising $\liminf_k x_k$ is the
  one produced by [[thm-limsup-is-greatest-subsequential-limit]] for the reflected
  sequence, read back through $y \mapsto -y$. That is the whole point of proving
  [[lem-limsup-reflection]] first: the recursion and the well-ordering argument
  are done once.

- **Combined with the greatest element, this brackets every subsequential
  limit.** For any real sequence and any $L \in \overline{\operatorname{SL}}(x)$,
  $$\liminf_{k} x_k \;\le\; L \;\le\; \limsup_{k} x_k,$$
  which contains [[lem-liminf-le-limsup]] as the special case obtained by taking
  for $L$ either endpoint, both of which are in the set.

- **The real subsequential limit set inherits the statement only when the value is
  finite.** If $\liminf_k x_k$ is a real number it is the least element of
  $\operatorname{SL}(x)$ as well, since the two sets agree on $\mathbb{R}$
  ([[def-extended-limits]]). If it is $-\infty$, then $\operatorname{SL}(x)$ may
  have no least element at all, or be empty.
````

### `def-divergence-to-infinity`

````markdown
---
id: def-divergence-to-infinity
kind: definition
title: "Divergence to $+\\infty$ and to $-\\infty$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-sequence, def-real-order, def-real-limit, def-complete-ordered-field, lem-convergent-implies-bounded, thm-of-archimedean, lem-of-abs-value]
justified_by: []
aliases: []
landmark: false
short: "$x_k\\to+\\infty$"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis, Ch. 3"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch3.pdf"
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "Extended real number line (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Extended_real_number_line"
    - title: "T. Tao, Analysis I, 3rd ed., §6.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Let $(x_k)$ be a sequence of reals ([[def-sequence]]), with $\mathbb{R}$ ordered
as in [[def-real-order]] and [[def-complete-ordered-field]].

- $(x_k)$ **diverges to $+\infty$**, written $x_k \to +\infty$, when for every
  $M \in \mathbb{R}$ there is $K \in \mathbb{N}$ such that $x_k > M$ for all
  $k \ge K$.
- $(x_k)$ **diverges to $-\infty$**, written $x_k \to -\infty$, when for every
  $M \in \mathbb{R}$ there is $K \in \mathbb{N}$ such that $x_k < M$ for all
  $k \ge K$.

Equivalently, in the language of [[def-sequence]]: $x_k \to +\infty$ when the
property $x_k > M$ holds eventually, for every real $M$.

## Remarks

- **This is divergence, not convergence.** The symbols $+\infty$ and $-\infty$
  are **not real numbers**: $\mathbb{R}$ is the complete ordered field
  ([[def-complete-ordered-field]]) and contains no element larger than every
  element of itself. Nothing above claims that $(x_k)$ has a limit in the sense
  of [[def-real-limit]], and nothing above defines an object named $+\infty$.
  The whole phrase "$x_k \to +\infty$" is a single abbreviation for the
  displayed condition, exactly as "$(x_k)$ is Cauchy" is an abbreviation for a
  condition and not a claim that some object called a Cauchy value exists.

- **A sequence diverging to $+\infty$ really does diverge.** Suppose
  $x_k \to +\infty$. Given any real $M$, there is $K$ with $x_k > M$ for all
  $k \ge K$; in particular $x_K > M$, so no real $M$ satisfies $x_k \le M$ for
  all $k$. Since $x_k \le |x_k|$ always ([[lem-of-abs-value]]), a bound
  $|x_k| \le M$ valid for all $k$ would give $x_k \le M$ for all $k$, which has
  just been excluded, so no such $M$ exists either. Thus
  $(x_k)$ is unbounded, and an unbounded sequence cannot converge, since
  convergent sequences are bounded ([[lem-convergent-implies-bounded]]). The
  same argument applies to $-\infty$. So the two notions never overlap: a
  sequence that diverges to $\pm\infty$ has no limit whatever.

- **Consequently $\lim_k x_k$ is not written here.** Many texts write
  $\lim_k x_k = +\infty$. This library does not, for the reason recorded in
  [[rem-sup-conventions]] about $\sup S = +\infty$: writing an equation whose
  right-hand side is not an element of $\mathbb{R}$ silently moves the discussion
  into the extended real line, a structure that is not a field, and every
  subsequent algebraic step then needs its own justification. In particular none
  of the rules of [[thm-algebra-of-limits]] may be applied to a divergence to
  $\pm\infty$; the familiar slogans "$\infty + \infty = \infty$" and
  "$\infty \cdot \infty = \infty$" are separate statements about this definition
  and would need separate proofs.

- **Testing against naturals suffices.** Since $\mathbb{R}$ is Archimedean
  ([[thm-of-archimedean]]), every real $M$ is below some canonical natural $n$,
  so the condition "for every real $M$" may equivalently be read as "for every
  natural $n \ge 1$"; the two formulations of $x_k \to +\infty$ agree.

- **Divergence to $+\infty$ is much stronger than divergence.** A sequence
  alternating between $1$ and $-1$ diverges ([[fs-bounded-implies-convergent]])
  but goes to neither $+\infty$ nor $-\infty$, since it is bounded. Divergence
  is the negation of convergence; divergence to $+\infty$ is a positive
  statement about growth.
````

### `def-extended-reals`

````markdown
---
id: def-extended-reals
kind: definition
title: "The extended real line $\\overline{\\mathbb{R}} = \\mathbb{R} \\cup \\{-\\infty, +\\infty\\}$, its order, and the arithmetic that is left undefined"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-real-numbers, def-real-order, def-complete-ordered-field, def-divergence-to-infinity, def-partial-order, lem-of-add-order]
justified_by: []
forward_refs: [cex-zero-times-infinity-indeterminate]
aliases: [def-extended-real-line]
landmark: true
short: "$\\overline{\\mathbb{R}}$"
verification:
  precheck: n/a
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Extended real number line (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Extended_real_number_line"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 (1.23, the extended real number system)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.2 (the extended real number system)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "J. K. Hunter, Measure Theory notes"
      url: "https://www.math.ucdavis.edu/~hunter/m206/ch0_measure.pdf"
pipeline_run: null
---

## Definition

Fix two objects $-\infty$ and $+\infty$, distinct from one another and neither of
them a real number ([[def-real-numbers]]), and set

$$\overline{\mathbb{R}} := \mathbb{R} \cup \{-\infty, +\infty\}.$$

This is a **new object**, introduced here explicitly with its own order and its
own partial arithmetic. It is not an enlargement of the field $\mathbb{R}$, and
no operation of $\mathbb{R}$ ([[def-complete-ordered-field]]) is redefined by
anything below.

**The order.** For $a, b \in \overline{\mathbb{R}}$ declare

$$a \le b \quad :\Longleftrightarrow \quad a = -\infty \ \text{ or } \ b = +\infty \ \text{ or } \ \big(a, b \in \mathbb{R} \text{ and } a \le b \text{ in } \mathbb{R}\big),$$

with $\mathbb{R}$ ordered as in [[def-real-order]], and write $a < b$ for
"$a \le b$ and $a \ne b$" as usual ([[def-partial-order]]).

**$(\overline{\mathbb{R}}, \le)$ is a totally ordered set, and the inclusion of
$\mathbb{R}$ preserves and reflects the order.** All four checks are immediate
from the displayed clauses.

- *Reflexive.* For $a = \pm\infty$ one of the first two clauses applies; for
  $a \in \mathbb{R}$ the third does, since $a \le a$ in $\mathbb{R}$.
- *Antisymmetric.* Suppose $a \le b$ and $b \le a$. If $a = -\infty$ then
  $b \le a$ forces $b = -\infty$, since the clause $a = +\infty$ fails and $b, a$
  are not both real. Symmetrically $b = -\infty$ forces $a = -\infty$, and
  $a = +\infty$ or $b = +\infty$ forces the other to be $+\infty$. In the one
  remaining situation $a$ and $b$ are both real and antisymmetry is that of
  $\mathbb{R}$.
- *Transitive.* Let $a \le b \le c$. If $a = -\infty$ or $c = +\infty$ the
  conclusion is one of the first two clauses. Otherwise $a \ne -\infty$ forces,
  in $a \le b$, either $b = +\infty$ or $a, b \in \mathbb{R}$; and $c \ne +\infty$
  forces, in $b \le c$, either $b = -\infty$ or $b, c \in \mathbb{R}$. The value
  $b = +\infty$ is incompatible with the second alternative pair, so $b$ is real,
  hence so are $a$ and $c$, and transitivity is that of $\mathbb{R}$.
- *Total.* If $a = -\infty$ or $b = +\infty$ then $a \le b$; if $b = -\infty$ or
  $a = +\infty$ then $b \le a$; otherwise both are real and the order of
  $\mathbb{R}$ is total.
- *Preserved and reflected.* For $a, b \in \mathbb{R}$ the first two clauses fail,
  so $a \le b$ in $\overline{\mathbb{R}}$ says exactly $a \le b$ in $\mathbb{R}$.

In particular $-\infty$ is the least and $+\infty$ the greatest element of
$\overline{\mathbb{R}}$, and $-\infty < x < +\infty$ for every $x \in \mathbb{R}$.

**Reflection.** Extend negation by

$$-(+\infty) := -\infty, \qquad -(-\infty) := +\infty,$$

keeping the field negative on $\mathbb{R}$. The resulting map
$\nu : \overline{\mathbb{R}} \to \overline{\mathbb{R}}$, $\nu(a) = -a$, satisfies
$\nu(\nu(a)) = a$ and

$$a \le b \iff -b \le -a \qquad (a, b \in \overline{\mathbb{R}}).$$

For $a$ and $b$ real this is the elementwise order reversal in $\mathbb{R}$:
translation invariance ([[lem-of-add-order]]) applied with the constant $-a-b$
turns $a < b$ into $-b < -a$ and, applied with the constant $a+b$, turns it back,
while $a = b$ holds exactly when $-a = -b$. In every other case both sides are
decided by the first two clauses of the order: $a = -\infty$ makes both sides
true, as does $b = +\infty$, and if $a \ne -\infty$, $b \ne +\infty$ and $a, b$
are not both real then one of $a = +\infty$, $b = -\infty$ holds and both sides
are false.

**Partial addition.** For $a, b \in \overline{\mathbb{R}}$ the sum $a + b$ is
defined by

- $a + b$ = the field sum, when $a, b \in \mathbb{R}$;
- $a + b := +\infty$ when $a = +\infty$ and $b \ne -\infty$, or $b = +\infty$ and $a \ne -\infty$;
- $a + b := -\infty$ when $a = -\infty$ and $b \ne +\infty$, or $b = -\infty$ and $a \ne +\infty$;

and **the two sums $(+\infty) + (-\infty)$ and $(-\infty) + (+\infty)$ are left
undefined**. Addition is commutative where defined, and

$$-(a + b) = (-a) + (-b),$$

each side being defined exactly when the other is: the excluded pairs
$\{+\infty, -\infty\}$ are exchanged by $\nu$, and the three clauses above are
exchanged accordingly.

**Partial multiplication.** For $a, b \in \overline{\mathbb{R}}$ the product $ab$
is defined by

- $ab$ = the field product, when $a, b \in \mathbb{R}$;
- $ab := +\infty$ when one of $a, b$ is $\pm\infty$, the other is $\ne 0$, and both are $> 0$ or both are $< 0$;
- $ab := -\infty$ when one of $a, b$ is $\pm\infty$, the other is $\ne 0$, and one is $> 0$ and the other $< 0$;

and **every product with one factor $0$ and the other $\pm\infty$ is left
undefined**. The comparisons $> 0$ and $< 0$ here are taken in the order above,
under which $+\infty > 0 > -\infty$.

**Nothing else is defined.** There is no subtraction, no division, no
exponentiation and no absolute value on $\overline{\mathbb{R}}$ in this library;
where such an expression is wanted it is written out in the two defined
operations, and where a case falls in the undefined list the statement carries an
explicit hypothesis saying so.

## Remarks

- **$\overline{\mathbb{R}}$ is not a field, and not an ordered field.** It has no
  additive inverse for $+\infty$: $(+\infty) + b$ is $+\infty$ whenever it is
  defined and is never $0$. So none of the field axioms
  ([[def-complete-ordered-field]]) is available here, and no algebraic
  manipulation valid in $\mathbb{R}$ may be transported to
  $\overline{\mathbb{R}}$ without a separate justification.

- **Why the excluded cases are excluded.** The three defined clauses of each
  operation are exactly the cases in which the value is forced by the limiting
  behaviour of the sequences involved, and the excluded cases are exactly the
  ones in which it is not. For the product this is proved on the companion page:
  [[cex-zero-times-infinity-indeterminate]] exhibits a null sequence and two
  sequences diverging to $+\infty$ whose products behave differently, so no value
  assigned to $0 \cdot (+\infty)$ could be compatible with products of limits.
  The same phenomenon rules out a value for $(+\infty) + (-\infty)$: with
  $a_k = k$ and $b_k = -k$ the sum is constantly $0$, while with $b_k = -2k$ it
  diverges to $-\infty$. Leaving them undefined is not squeamishness, it is the
  only option that keeps every later statement about limits true without a
  side condition hidden inside the arithmetic.

- **This is the separate introduction that [[rem-sup-conventions]] points to.**
  That remark refuses the conventions $\sup S = +\infty$ and
  $\inf \emptyset = +\infty$ inside $\mathbb{R}$, and records that the extended
  real line is introduced explicitly here, with its own order and its own partial
  arithmetic kept separate from $\mathbb{R}$ rather than quietly extending it.
  This is that introduction. The suprema and infima of [[def-complete-ordered-field]],
  [[def-infimum]] and the whole suprema page remain real numbers with their
  nonempty and bounded hypotheses intact; what is new is a *separate* supremum
  operation, taken in $\overline{\mathbb{R}}$ and named as such, supplied by
  [[lem-extended-reals-complete]].

- **The symbols were already in circulation, and this definition does not change
  what they meant.** [[def-divergence-to-infinity]] defines the single phrase
  "$x_k \to +\infty$" as an abbreviation for a condition on $(x_k)$, and says in
  as many words that it does not define an object named $+\infty$. That reading
  is still correct: nothing in [[def-divergence-to-infinity]] is restated or
  reinterpreted here, and [[def-extended-limits]] is where the two are related, by
  a definition that quotes the old one rather than replacing it. Likewise the
  interval notation $(a, \infty)$ of [[def-interval]] is notation for a condition
  on one side, not an endpoint, and stays that way.

- **Why the order is defined by three clauses rather than by a picture.** The
  clauses are what the verifications above actually use, and they make the two
  facts that later proofs lean on immediate: every element is $\le +\infty$ and
  every element is $\ge -\infty$, with no case analysis at the point of use.
````

### `def-limsup-liminf`

````markdown
---
id: def-limsup-liminf
kind: definition
title: "Limit superior and limit inferior of a real sequence as $\\inf_n \\sup_{k \\ge n} x_k$ and $\\sup_n \\inf_{k \\ge n} x_k$ in $\\overline{\\mathbb{R}}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-extended-reals, def-sequence, def-complete-ordered-field, thm-infimum-property, def-bounded-set, def-infimum, lem-extended-reals-complete]
justified_by: []
aliases: [def-limsup, def-liminf]
landmark: true
short: "$\\limsup$, $\\liminf$"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Limit superior and limit inferior (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_superior_and_limit_inferior"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.16)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "J. Lebl, Basic Analysis I, §2.3"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Definition

Let $(x_k)$ be a sequence of reals ([[def-sequence]]). For $n \in \mathbb{N}$ let

$$T_n \;:=\; \{\, x_k : k \in \mathbb{N},\ k \ge n \,\} \subseteq \mathbb{R}$$

be the **$n$-th tail range** of $(x_k)$, a nonempty subset of $\mathbb{R}$ since
$x_n \in T_n$. Regard $T_n$ as a subset of $\overline{\mathbb{R}}$
([[def-extended-reals]]) and put

$$s_n \;:=\; \sup T_n \in \overline{\mathbb{R}}, \qquad i_n \;:=\; \inf T_n \in \overline{\mathbb{R}},$$

the supremum and infimum taken in $\overline{\mathbb{R}}$, which exist for every
$n$ and for every sequence by [[lem-extended-reals-complete]]. The **limit
superior** and **limit inferior** of $(x_k)$ are then

$$\limsup_{k} x_k \;:=\; \inf \{\, s_n : n \in \mathbb{N} \,\}, \qquad \liminf_{k} x_k \;:=\; \sup \{\, i_n : n \in \mathbb{N} \,\},$$

again taken in $\overline{\mathbb{R}}$ and again existing by
[[lem-extended-reals-complete]], since $\{s_n : n \in \mathbb{N}\}$ and
$\{i_n : n \in \mathbb{N}\}$ are subsets of $\overline{\mathbb{R}}$ on which no
hypothesis is needed. Both are elements of $\overline{\mathbb{R}}$, and either may
be $+\infty$ or $-\infty$. The notations $\limsup_{k \to \infty} x_k$,
$\varlimsup_k x_k$ and $\overline{\lim}_k x_k$ all denote the first of them
elsewhere; this library writes $\limsup_k x_k$.

**Every quantity written here exists, and that is why the extended line was
introduced.** Each of the four operations above is an application of
[[lem-extended-reals-complete]] to a subset of $\overline{\mathbb{R}}$ carrying no
hypothesis whatever. Written with the real supremum of
[[def-complete-ordered-field]] and the real infimum of [[thm-infimum-property]]
instead, the definition would be available only for sequences that are bounded
([[def-bounded-set]]): $\sup T_n$ needs $T_n$ bounded above, and
$\inf\{s_n\}$ needs $\{s_n\}$ nonempty, bounded below, and made of real numbers
([[def-infimum]]). None of those is automatic, and the discipline recorded in
[[rem-sup-conventions]] forbids papering over the gap with a convention. The
extended supremum is a different operation in a different ordered set, and it is
total.

**Values, when the sequence is bounded.** If $(x_k)$ is bounded, say
$|x_k| \le M$ for every $k$, then each $T_n$ is a nonempty subset of $\mathbb{R}$
bounded above by $M$ and below by $-M$, so by the agreement clause of
[[lem-extended-reals-complete]] each $s_n$ and each $i_n$ is the *real* supremum
or infimum of $T_n$, and lies in $[-M, M]$. The family $\{s_n\}$ is then a
nonempty set of reals bounded below by $-M$, so $\limsup_k x_k$ is likewise the
real infimum of $\{s_n\}$ and lies in $[-M, M]$; dually for $\liminf_k x_k$. So
for a bounded sequence both quantities are ordinary real numbers computed with
the ordinary real supremum and infimum, and the extended line is doing no work.
It is only for unbounded sequences that the values $\pm\infty$ occur.

## Remarks

- **The order of the two operations is not symmetric and must be kept straight.**
  $\limsup$ is an infimum of suprema and $\liminf$ a supremum of infima. Taking
  them in the other order gives $\sup_n \sup_{k \ge n} x_k = \sup_k x_k$ and
  $\inf_n \inf_{k \ge n} x_k = \inf_k x_k$, which are the extreme values of the
  whole sequence and carry no information about its behaviour at large indices.
  The point of the definition is that the inner operation looks at a tail and the
  outer one lets the tail recede.

- **Why tails at all.** Each $s_n$ is a bound on the whole tail from index $n$ on,
  so it forgets the first $n$ terms; letting $n$ grow forgets any fixed finite
  number of them. That is what makes $\limsup$ and $\liminf$ tail quantities in
  the sense of [[lem-limit-of-tail]], and it is the reason they can characterise
  convergence, which is itself a tail property.

- **Neither quantity is a limit, and neither is claimed to be one.** The symbols
  $\limsup$ and $\liminf$ are single pieces of notation for the two displayed
  expressions, exactly as "$x_k \to +\infty$" is a single abbreviation in
  [[def-divergence-to-infinity]]. That the family $(s_n)$ does decrease to
  $\limsup_k x_k$ in a precise sense is a theorem, not part of this definition;
  the monotonicity half is [[lem-limsup-exists]].

- **The tail ranges are sets, not sequences.** $T_n$ is the range of the $n$-th
  tail, so repetitions and order are forgotten ([[def-sequence]]). That is
  harmless here, since a supremum depends only on the set of values, and it is
  what lets the whole definition be phrased with the order-theoretic operations of
  [[lem-extended-reals-complete]] and nothing else.
````

### `lem-extended-reals-complete`

````markdown
---
id: lem-extended-reals-complete
kind: lemma
title: "Every subset of $\\overline{\\mathbb{R}}$ has a least upper bound and a greatest lower bound in $\\overline{\\mathbb{R}}$, agreeing with the real supremum and infimum on nonempty sets bounded in $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-extended-reals, def-upper-bound, def-partial-order, def-complete-ordered-field, thm-infimum-property, def-bounded-set, def-infimum, def-real-order]
justified_by: []
aliases: []
landmark: true
short: "$\\overline{\\mathbb{R}}$ is order complete"
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
    - title: "Extended real number line (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Extended_real_number_line"
    - title: "Complete lattice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Complete_lattice"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $A \subseteq \overline{\mathbb{R}}$ be **any** subset of the extended real
line ([[def-extended-reals]]) and write $A_{\mathbb{R}} := A \cap \mathbb{R}$.
Then $A$ has a least upper bound and a greatest lower bound in
$\overline{\mathbb{R}}$ ([[def-upper-bound]]), each unique, which we write
$\sup A$ and $\inf A$ with the ambient set always $\overline{\mathbb{R}}$.
Explicitly:

- $\sup A = +\infty$ if $+\infty \in A$, or if $A_{\mathbb{R}}$ is not bounded above in $\mathbb{R}$;
- $\sup A = -\infty$ if $+\infty \notin A$ and $A_{\mathbb{R}} = \emptyset$;
- $\sup A$ is the real supremum $\sup A_{\mathbb{R}}$ ([[def-complete-ordered-field]]) if $+\infty \notin A$ and $A_{\mathbb{R}}$ is nonempty and bounded above in $\mathbb{R}$;

and dually, with $-\infty$ and $+\infty$ exchanged and "above" replaced by
"below", for $\inf A$ ([[def-infimum]], [[thm-infimum-property]]).

**Agreement.** If $A \subseteq \mathbb{R}$ is nonempty and bounded above in
$\mathbb{R}$ ([[def-bounded-set]]) then $\sup A$ computed in
$\overline{\mathbb{R}}$ is the real number $\sup A$ of
[[def-complete-ordered-field]]; if $A \subseteq \mathbb{R}$ is nonempty and
bounded below then $\inf A$ computed in $\overline{\mathbb{R}}$ is the real
number $\inf A$ of [[thm-infimum-property]]. In particular the notation is
unambiguous on the sets for which the real supremum and infimum are defined, and
$\sup \emptyset = -\infty$, $\inf \emptyset = +\infty$ in
$\overline{\mathbb{R}}$.

**No hypothesis is placed on $A$.** This is exactly what the real supremum cannot
do, and it is why every $\limsup$ statement on this page holds for every sequence
rather than for bounded ones only. It is also not a weakening of the discipline
this library keeps around suprema: the operation supplied here is a *different*
operation, taken in a *different* ordered set, and the agreement clause records
exactly where the two coincide.

## Facts & Assumptions

**Given:** A subset $A \subseteq \overline{\mathbb{R}}$, and its real part $A_{\mathbb{R}} := A \cap \mathbb{R}$.

[L1] $(\overline{\mathbb{R}}, \le)$ is a totally ordered set in which $-\infty$ is the least element and $+\infty$ the greatest, and whose order restricted to $\mathbb{R}$ is the order of $\mathbb{R}$ ([[def-extended-reals]], [[def-partial-order]], [[def-real-order]]).

[L2] Upper and lower bounds in a poset: $u$ is an upper bound of $A$ when $a \le u$ for all $a \in A$, and a least upper bound when moreover $u \le v$ for every upper bound $v$; dually for lower bounds and greatest lower bounds. Each is unique when it exists, by antisymmetry ([[def-upper-bound]], [[def-partial-order]]).

[L3] Least-upper-bound property of $\mathbb{R}$: every nonempty $S \subseteq \mathbb{R}$ that is bounded above in $\mathbb{R}$ has a real least upper bound $\sup S$ ([[def-complete-ordered-field]]).

[L4] Greatest-lower-bound property of $\mathbb{R}$: every nonempty $S \subseteq \mathbb{R}$ that is bounded below in $\mathbb{R}$ has a real greatest lower bound $\inf S$ ([[thm-infimum-property]], [[def-infimum]]).

[L5] Bounded above and bounded below in $\mathbb{R}$ mean the existence of a real upper, respectively lower, bound ([[def-bounded-set]]).

## Proof

**Proof technique:** cases.

1.1 Case S1 for the supremum: $+\infty \in A$. [given, assume-case suptop]

1.2 Case S2 for the supremum: $+\infty \notin A$ and $A_{\mathbb{R}} = \emptyset$, so that every element of $A$ equals $-\infty$. [given, assume-case supbot]

1.3 Case S3 for the supremum: $+\infty \notin A$, $A_{\mathbb{R}} \ne \emptyset$, and $A_{\mathbb{R}}$ is bounded above in $\mathbb{R}$. [given, assume-case supfin]

1.4 Case S4 for the supremum: $+\infty \notin A$, $A_{\mathbb{R}} \ne \emptyset$, and $A_{\mathbb{R}}$ is not bounded above in $\mathbb{R}$. [given, assume-case supunb]

1.5 Case I1 for the infimum: $-\infty \in A$. [given, assume-case infbot]

1.6 Case I2 for the infimum: $-\infty \notin A$ and $A_{\mathbb{R}} = \emptyset$, so that every element of $A$ equals $+\infty$. [given, assume-case inftop]

1.7 Case I3 for the infimum: $-\infty \notin A$, $A_{\mathbb{R}} \ne \emptyset$, and $A_{\mathbb{R}}$ is bounded below in $\mathbb{R}$. [given, assume-case inffin]

1.8 Case I4 for the infimum: $-\infty \notin A$, $A_{\mathbb{R}} \ne \emptyset$, and $A_{\mathbb{R}}$ is not bounded below in $\mathbb{R}$. [given, assume-case infunb]

2.1 In case S1 the element $+\infty$ is an upper bound of $A$, being the greatest element of $\overline{\mathbb{R}}$; and if $v$ is any upper bound of $A$ then $+\infty \in A$ gives $+\infty \le v$, whence $v = +\infty$ by antisymmetry. So $+\infty$ is the least upper bound of $A$. [step 1.1, L1, L2]

2.2 In case S2 every element of $A$ equals $-\infty$, so $-\infty$ is an upper bound of $A$ by reflexivity; and $-\infty \le v$ for every $v \in \overline{\mathbb{R}}$, being the least element. So $-\infty$ is the least upper bound of $A$. [step 1.2, L1, L2]

2.3 In case S3 the real number $\sigma := \sup A_{\mathbb{R}}$ exists, and it is an upper bound of $A$ in $\overline{\mathbb{R}}$: an element of $A$ is either real, hence lies in $A_{\mathbb{R}}$ and satisfies $a \le \sigma$ in $\mathbb{R}$ and so in $\overline{\mathbb{R}}$, or equals $-\infty$, which is $\le \sigma$; the value $+\infty$ does not occur in $A$ in this case. [step 1.3, L1, L3]

2.4 In case S4 the element $+\infty$ is an upper bound of $A$; and if $v$ is an upper bound then $v \ne -\infty$, because fixing $a \in A_{\mathbb{R}}$, which is possible in this case, gives $a \le v$ with $a$ real and $-\infty$ is below no real, while $v$ real would make $v$ a real upper bound of $A_{\mathbb{R}}$ and contradict the case hypothesis. So $v = +\infty$, and $+\infty$ is the least upper bound of $A$. [step 1.4, L1, L2, L5]

2.5 In case I1 the element $-\infty$ is a lower bound of $A$, being least; and any lower bound $w$ satisfies $w \le -\infty$ because $-\infty \in A$, whence $w = -\infty$ by antisymmetry. So $-\infty$ is the greatest lower bound of $A$. [step 1.5, L1, L2]

2.6 In case I2 every element of $A$ equals $+\infty$, so $+\infty$ is a lower bound of $A$ by reflexivity, and $w \le +\infty$ for every $w$. So $+\infty$ is the greatest lower bound of $A$. [step 1.6, L1, L2]

2.7 In case I3 the real number $\iota := \inf A_{\mathbb{R}}$ exists and is a lower bound of $A$ in $\overline{\mathbb{R}}$: an element of $A$ is either real, hence in $A_{\mathbb{R}}$ and $\ge \iota$, or equals $+\infty \ge \iota$; the value $-\infty$ does not occur in $A$ in this case. [step 1.7, L1, L4]

2.8 In case I4 the element $-\infty$ is a lower bound of $A$; any lower bound $w$ satisfies $w \ne +\infty$, because fixing $a \in A_{\mathbb{R}}$ gives $w \le a$ with $a$ real and $+\infty$ is above no real, while $w$ real would be a real lower bound of $A_{\mathbb{R}}$ and contradict the case hypothesis. So $w = -\infty$ is the greatest lower bound of $A$. [step 1.8, L1, L2, L5]

3.1 In case S3 let $v$ be any upper bound of $A$ and fix $a \in A_{\mathbb{R}}$, which is possible since $A_{\mathbb{R}} \ne \emptyset$. From $a \le v$ with $a$ real we get $v \ne -\infty$, since $-\infty$ is below no real. If $v = +\infty$ then $\sigma \le v$ because $+\infty$ is greatest. Otherwise $v$ is real, and it bounds $A_{\mathbb{R}}$ above in $\mathbb{R}$, so $\sigma \le v$ by leastness of the real supremum. Hence $\sigma$ is the least upper bound of $A$. [step 1.3, step 2.3, L1, L2, L3]

3.2 In case I3 let $w$ be a lower bound of $A$ and fix $a \in A_{\mathbb{R}}$. From $w \le a$ with $a$ real we get $w \ne +\infty$. If $w = -\infty$ then $w \le \iota$; otherwise $w$ is real and bounds $A_{\mathbb{R}}$ below in $\mathbb{R}$, so $w \le \iota$. Hence $\iota$ is the greatest lower bound of $A$. [step 1.7, step 2.7, L1, L2, L4]

4.1 The four supremum cases are exhaustive and mutually exclusive: either $+\infty \in A$, which is S1, or not, and then either $A_{\mathbb{R}} = \emptyset$, which is S2, or $A_{\mathbb{R}} \ne \emptyset$ and it is bounded above in $\mathbb{R}$, which is S3, or it is not, which is S4. In each case a least upper bound was produced, and it is unique. The same four alternatives with $-\infty$, $+\infty$ and "below" in place of $+\infty$, $-\infty$ and "above" are I1 to I4, and in each a greatest lower bound was produced. [step 2.1, step 2.2, step 3.1, step 2.4, step 2.5, step 2.6, step 3.2, step 2.8, L2, L5, cases: a two-fold split followed by a three-fold split, cases-exhaustive]

5.1 The agreement clause follows: a nonempty $A \subseteq \mathbb{R}$ bounded above in $\mathbb{R}$ satisfies $+\infty \notin A$ and $A_{\mathbb{R}} = A$, so case S3 applies and $\sup A = \sup A_{\mathbb{R}}$ is the real supremum; a nonempty $A \subseteq \mathbb{R}$ bounded below satisfies case I3 and $\inf A$ is the real infimum; and $A = \emptyset$ falls under S2 and I2, giving $\sup \emptyset = -\infty$ and $\inf \emptyset = +\infty$. [step 2.3, step 3.1, step 2.7, step 3.2, step 4.1, L3, L4] ∎

## Remarks

- **What makes this work is that $\overline{\mathbb{R}}$ has a top and a bottom.**
  The three defining clauses of the order ([[def-extended-reals]]) put $+\infty$
  above everything and $-\infty$ below everything, and every case above is settled
  by one of those two facts or by the least-upper-bound property of $\mathbb{R}$
  applied to the real part. Nothing else about $\overline{\mathbb{R}}$ is used,
  and in particular no arithmetic is used at all.

- **The two exceptional cases of [[fs-every-set-has-sup]] are not repaired, they
  are relocated.** That false statement records that in $\mathbb{R}$ a set may
  fail to have a supremum, and it stays true; the discipline of
  [[rem-sup-conventions]], which refuses to write $\sup S = +\infty$ inside
  $\mathbb{R}$, also stays in force. What is proved here is a statement about a
  different ordered set.

- **The empty set is not an exception here, and that is the point of the
  ambient set.** In $\mathbb{R}$ the empty set has no supremum, because every
  real is an upper bound and there is no least one.
  In $\overline{\mathbb{R}}$ every element is still an upper bound of $\emptyset$,
  but now there *is* a least one, namely $-\infty$. The two statements are about
  different ordered sets and neither contradicts the other.

- **Where this is consumed.** [[def-limsup-liminf]] needs the supremum of a tail
  range of an arbitrary real sequence, which may be unbounded, and then the
  infimum of the resulting family, which may contain $+\infty$; both are supplied
  here and by nothing earlier in the library. Fourteen items on this page depend
  on it, and five more on the companion page of examples.
````

### `lem-liminf-le-limsup`

````markdown
---
id: lem-liminf-le-limsup
kind: lemma
title: "$\\liminf x_k \\le \\limsup x_k$ for every real sequence"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-limsup-liminf, lem-limsup-exists, lem-extended-reals-complete, def-extended-reals, def-upper-bound, def-partial-order, def-sequence, def-nat-order, thm-nat-linear-order]
justified_by: []
forward_refs: [ex-limsup-of-alternating-sequence]
aliases: []
landmark: false
short: "$\\liminf \\le \\limsup$"
proof_strategy: direct
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
    - title: "Limit superior and limit inferior (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_superior_and_limit_inferior"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §2.3"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement

For every sequence $(x_k)$ of reals ([[def-sequence]]),

$$\liminf_{k} x_k \;\le\; \limsup_{k} x_k$$

in $\overline{\mathbb{R}}$ ([[def-limsup-liminf]], [[def-extended-reals]]). No
hypothesis is placed on $(x_k)$: both sides exist for every sequence
([[lem-limsup-exists]]) and the inequality holds between them in every case,
including those in which one or both sides are $\pm\infty$.

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals, its tail ranges $T_n = \{x_k : k \ge n\}$, and the extended tail bounds $s_n = \sup T_n$, $i_n = \inf T_n$ ([[def-limsup-liminf]]).

[L1] Every subset of $\overline{\mathbb{R}}$ has a least upper bound and a greatest lower bound in $\overline{\mathbb{R}}$, an upper bound below every upper bound and a lower bound above every lower bound respectively ([[lem-extended-reals-complete]], [[def-upper-bound]], [[def-partial-order]]).

[L2] Monotonicity of the tail bounds: $s_m \le s_n$ and $i_n \le i_m$ whenever $n \le m$, and $i_n \le s_n$ for every $n$; both $\limsup_k x_k = \inf\{s_n\}$ and $\liminf_k x_k = \sup\{i_n\}$ exist ([[lem-limsup-exists]], [[def-limsup-liminf]]).

[L3] The order on $\mathbb{N}$ is total ([[def-nat-order]], [[thm-nat-linear-order]]).

[L4] The order on $\overline{\mathbb{R}}$ is transitive ([[def-extended-reals]], [[def-partial-order]]).

## Proof

**Proof technique:** direct.

1.1 Let $m, n \in \mathbb{N}$ be arbitrary. The order on $\mathbb{N}$ is total, so either $m \le n$ or $n \le m$; let $p$ be whichever of $m$ and $n$ is the larger, so that $m \le p$ and $n \le p$. [given, L3, choose]

2.1 Monotonicity of the tail bounds gives $i_m \le i_p$ and $s_p \le s_n$, and $i_p \le s_p$ holds because $T_p$ is nonempty; chaining these by transitivity yields $i_m \le s_n$. As $m$ and $n$ were arbitrary, every tail infimum is below every tail supremum. [step 1.1, L2, L4]

3.1 Fix $n \in \mathbb{N}$. By step 2.1 the element $s_n$ is an upper bound of the family $\{i_m : m \in \mathbb{N}\}$, and $\liminf_k x_k$ is its least upper bound, so $\liminf_k x_k \le s_n$. [step 2.1, L1, L2]

4.1 Since $n$ was arbitrary, $\liminf_k x_k$ is a lower bound of the family $\{s_n : n \in \mathbb{N}\}$, and $\limsup_k x_k$ is its greatest lower bound, so $\liminf_k x_k \le \limsup_k x_k$. [step 3.1, L1, L2] ∎

## Remarks

- **The inequality can be strict, and that is the interesting case.** For the
  alternating sequence the two sides are $-1$ and $1$
  ([[ex-limsup-of-alternating-sequence]]). Equality is exactly convergence, in the
  extended sense: that is [[thm-convergence-iff-limsup-equals-liminf]].

- **What the proof actually uses is that the two families interleave.** Each
  $i_m$ is below each $s_n$, not merely below $s_m$, and getting that needs a
  common index $p$ beyond both, which is where totality of the order on
  $\mathbb{N}$ enters. Without that step one would only know
  $i_n \le s_n$ for each $n$, which does not by itself compare a supremum of the
  first family with an infimum of the second.

- **No completeness of $\mathbb{R}$ is used here beyond what is already inside
  [[lem-extended-reals-complete]].** The argument is pure order theory in a
  totally ordered set with a least and a greatest element.
````

### `lem-limsup-epsilon-characterisation`

````markdown
---
id: lem-limsup-epsilon-characterisation
kind: lemma
title: "For finite $L$: $L = \\limsup x_k$ iff for every $\\varepsilon > 0$ one has $x_k < L + \\varepsilon$ eventually and $x_k > L - \\varepsilon$ frequently"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-limsup-liminf, lem-limsup-exists, lem-limsup-reflection, lem-extended-reals-complete, def-extended-reals, def-upper-bound, def-partial-order, def-sequence, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, lem-of-add-order, def-ordered-field, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "$\\varepsilon$ test for $\\limsup$"
proof_strategy: direct
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
    - title: "Limit superior and limit inferior (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_superior_and_limit_inferior"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.17)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "J. Lebl, Basic Analysis I, §2.3"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement

Let $(x_k)$ be a sequence of reals ([[def-sequence]]) and let $L \in \mathbb{R}$,
with *eventually* and *frequently* as in [[def-sequence]] and $\limsup$,
$\liminf$ as in [[def-limsup-liminf]].

1. $L = \limsup_{k} x_k$ **if and only if** for every real $\varepsilon > 0$
   $$x_k < L + \varepsilon \ \text{ eventually} \qquad \text{and} \qquad x_k > L - \varepsilon \ \text{ frequently}.$$
2. Dually, $L = \liminf_{k} x_k$ **if and only if** for every real
   $\varepsilon > 0$
   $$x_k > L - \varepsilon \ \text{ eventually} \qquad \text{and} \qquad x_k < L + \varepsilon \ \text{ frequently}.$$

**The hypothesis $L \in \mathbb{R}$ is not a restriction that can be lifted.**
Both conditions are stated with real $\varepsilon$ and real $L \pm \varepsilon$,
so neither has a reading at $L = \pm\infty$; the infinite cases are handled
instead by the convergence theorem later on this page. What the lemma does say
is that whenever $\limsup_k x_k$ happens to be a real number, it is pinned down by
the familiar two-sided test: nothing exceeds it by a fixed positive amount from
some index on, and something comes within any fixed positive amount of it
arbitrarily late.

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals, a real number $L$, the tail ranges $T_n = \{x_k : k \ge n\}$, the extended tail suprema $s_n = \sup T_n$, and $\Lambda := \limsup_k x_k = \inf\{s_n : n \in \mathbb{N}\}$ ([[def-limsup-liminf]]).

[L1] $\Lambda$ and every $s_n$ exist in $\overline{\mathbb{R}}$ for every sequence, and $\Lambda$ is the greatest lower bound of $\{s_n\}$ while $s_n$ is the least upper bound of $T_n$ ([[lem-extended-reals-complete]], [[lem-limsup-exists]], [[def-upper-bound]], [[def-partial-order]]).

[L2] The order on $\overline{\mathbb{R}}$ is total, so the failure of $a \le b$ is $b < a$; it restricts on $\mathbb{R}$ to the order of $\mathbb{R}$; and every real number is $< +\infty$ and $> -\infty$ ([[def-extended-reals]], [[def-partial-order]]).

[L3] A property $P$ of indices holds *eventually* when it holds for all $k \ge K$ for some $K$, and *frequently* when for every $K$ it holds for some $k \ge K$ ([[def-sequence]]).

[L4] Reciprocal Archimedean property: for every real $\eta > 0$ there is a natural $m \ge 1$ with $1/m < \eta$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[lem-of-inverse-positive]]).

[L5] Order arithmetic in $\mathbb{R}$: for $\varepsilon > 0$ one has $L - \varepsilon < L < L + \varepsilon$, and $a < b$ if and only if $-b < -a$, both by translation invariance; the order is total, so exactly one of $a < b$, $a = b$, $b < a$ holds and $a < a$ is impossible ([[lem-of-add-order]], [[def-ordered-field]], [[def-complete-ordered-field]]).

[L6] Reflection exchanges the two quantities: $\limsup_k(-x_k) = -\liminf_k x_k$ and $\liminf_k(-x_k) = -\limsup_k x_k$ ([[lem-limsup-reflection]]).

## Proof

**Proof technique:** direct.

1.1 For the forward implication of claim 1, assume $L = \Lambda$ and let $\varepsilon > 0$ be an arbitrary real. [assume-hyp, L1]

1.2 For the converse implication of claim 1, assume that for every real $\varepsilon > 0$ the sequence satisfies $x_k < L + \varepsilon$ eventually and $x_k > L - \varepsilon$ frequently. [assume-hyp, L3]

2.1 Under the assumption of step 1.1, $L + \varepsilon > L = \Lambda$, so $L + \varepsilon$ is not a lower bound of $\{s_n\}$, since $\Lambda$ is the greatest lower bound; by totality there is $n$ with $s_n < L + \varepsilon$. For every $k \ge n$ we have $x_k \le s_n$, hence $x_k < L + \varepsilon$; so $x_k < L + \varepsilon$ eventually. [step 1.1, L1, L2, L3, L5]

2.2 Under the assumption of step 1.1, fix $n \in \mathbb{N}$. Then $\Lambda \le s_n$ because $\Lambda$ is a lower bound of $\{s_n\}$, and $L - \varepsilon < L = \Lambda$, so $L - \varepsilon < s_n$. Hence $L - \varepsilon$ is not an upper bound of $T_n$, for an upper bound $u$ of $T_n$ satisfies $s_n \le u$; by totality of the order on $\mathbb{R}$ there is therefore $k \ge n$ with $x_k > L - \varepsilon$. As $n$ was arbitrary, $x_k > L - \varepsilon$ frequently. [step 1.1, L1, L2, L3, L5]

2.3 Under the assumption of step 1.2, let $\varepsilon > 0$ be a real and take $N$ with $x_k < L + \varepsilon$ for all $k \ge N$. Then $L + \varepsilon$ is an upper bound of $T_N$, so $s_N \le L + \varepsilon$ by leastness, and $\Lambda \le s_N$ because $\Lambda$ is a lower bound of $\{s_n\}$; hence $\Lambda \le L + \varepsilon$. [step 1.2, L1, L2, L3]

2.4 Under the assumption of step 1.2, let $\varepsilon > 0$ be a real and fix $n$. There is $k \ge n$ with $x_k > L - \varepsilon$, and $x_k \le s_n$, so $L - \varepsilon < s_n$ and in particular $L - \varepsilon \le s_n$. As $n$ was arbitrary, $L - \varepsilon$ is a lower bound of $\{s_n\}$, so $L - \varepsilon \le \Lambda$ by greatest-lower-boundedness. [step 1.2, L1, L2, L3]

3.1 Taking $\varepsilon = 1$ in steps 2.3 and 2.4 gives $L - 1 \le \Lambda \le L + 1$ with $L \pm 1$ real, so $\Lambda$ is neither $+\infty$ nor $-\infty$ and is therefore a real number. Suppose $\Lambda > L$ and put $\delta := \Lambda - L > 0$; choosing a natural $m \ge 1$ with $1/m < \delta$ and applying step 2.3 with $\varepsilon = 1/m$ gives $\Lambda \le L + 1/m < L + \delta = \Lambda$, which is impossible. Suppose instead $\Lambda < L$ and put $\delta := L - \Lambda > 0$; choosing $m \ge 1$ with $1/m < \delta$ and applying step 2.4 with $\varepsilon = 1/m$ gives $L - 1/m \le \Lambda$, that is $\delta = L - \Lambda \le 1/m < \delta$, again impossible. By trichotomy $\Lambda = L$. [step 2.3, step 2.4, L2, L4, L5]

4.1 Steps 2.1 and 2.2 prove the forward implication of claim 1 and step 3.1 proves its converse, so claim 1 holds. [step 2.1, step 2.2, step 3.1]

5.1 For claim 2, note that $L = \liminf_k x_k$ holds exactly when $-L = -\liminf_k x_k = \limsup_k(-x_k)$, since negation is injective on $\overline{\mathbb{R}}$. Applying claim 1 to the sequence $(-x_k)$ and the real number $-L$, that holds exactly when for every real $\varepsilon > 0$ one has $-x_k < -L + \varepsilon$ eventually and $-x_k > -L - \varepsilon$ frequently. Negating each of the two inequalities reverses it, turning them into $x_k > L - \varepsilon$ eventually and $x_k < L + \varepsilon$ frequently, which is claim 2. [step 4.1, L5, L6] ∎

## Remarks

- **The two halves are not interchangeable.** "Eventually below $L + \varepsilon$"
  says $L$ is not exceeded in the long run; "frequently above $L - \varepsilon$"
  says $L$ is approached again and again. Weakening the first to *frequently*
  would make the condition hold for $L = \liminf$ as well, and strengthening the
  second to *eventually* would force convergence, which is exactly the extra
  content of [[thm-convergence-iff-limsup-equals-liminf]].

- **Real $\varepsilon$ is used throughout, and no rational test is involved.**
  Neither condition is a convergence statement, so [[def-real-limit]] and its
  quantification over rational $\varepsilon$ do not enter. Where a convergence
  hypothesis has to be fed into this lemma, as in
  [[thm-convergence-iff-limsup-equals-liminf]], the passage between rational and
  real $\varepsilon$ is made there, by the sanctioned remark of [[def-sequence]].

- **Why the epsilon lemmas for the real supremum are not cited.**
  [[lem-sup-epsilon]] and [[lem-inf-epsilon]] characterise the *real* supremum and
  infimum of a nonempty set bounded on the relevant side. Here $s_n$ may be
  $+\infty$ and the family $\{s_n\}$ may be unbounded below in $\mathbb{R}$, so
  neither lemma applies to the sets actually in play; the corresponding steps
  above are made directly from the least-upper-bound and greatest-lower-bound
  properties in $\overline{\mathbb{R}}$ ([[lem-extended-reals-complete]]), which
  need no hypothesis.

- **The Archimedean property is what closes the converse.** Steps 2.3 and 2.4
  give $L - \varepsilon \le \Lambda \le L + \varepsilon$ for every positive real
  $\varepsilon$, and passing from that to $\Lambda = L$ needs a positive real
  strictly below any prescribed positive gap; [[cor-archimedean-reciprocal]]
  supplies $1/m$.
````

### `lem-limsup-exists`

````markdown
---
id: lem-limsup-exists
kind: lemma
title: "The tail suprema of any real sequence are nonincreasing in $\\overline{\\mathbb{R}}$, so the limit superior exists for every sequence"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-limsup-liminf, def-extended-reals, lem-extended-reals-complete, def-upper-bound, def-partial-order, def-sequence, def-nat-order, thm-nat-linear-order]
justified_by: []
aliases: []
landmark: false
short: "$s_{n+1}\\le s_n$"
proof_strategy: direct
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
    - title: "Limit superior and limit inferior (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_superior_and_limit_inferior"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §2.3"
      url: "https://www.jirka.org/ra/"
    - title: "N. Donaldson, Math 140A: Real Analysis notes"
      url: "https://www.math.uci.edu/~ndonalds/math140a/notes.pdf"
pipeline_run: null
---

## Statement

Let $(x_k)$ be a sequence of reals ([[def-sequence]]), with tail ranges $T_n$ and
extended tail bounds $s_n = \sup T_n$, $i_n = \inf T_n$ as in
[[def-limsup-liminf]].

1. **Monotonicity of the extended bounds under inclusion.** If
   $A \subseteq B \subseteq \overline{\mathbb{R}}$ ([[def-extended-reals]]) then
   $$\sup A \le \sup B \qquad \text{and} \qquad \inf B \le \inf A,$$
   the four quantities being the extended bounds of [[lem-extended-reals-complete]].
   No hypothesis is placed on $A$ or $B$; in particular $A$ may be empty.
2. **The tail bounds are monotone.** $T_m \subseteq T_n$ whenever $n \le m$, and
   hence
   $$s_m \le s_n \qquad \text{and} \qquad i_n \le i_m \qquad (n \le m).$$
   In particular $s_{n+1} \le s_n$ and $i_n \le i_{n+1}$ for every $n$, and
   $i_n \le s_n$ for every $n$.
3. **Existence.** $\limsup_k x_k$ and $\liminf_k x_k$ exist in
   $\overline{\mathbb{R}}$ for **every** sequence of reals, bounded or not.

Claim 1 is the tool the rest of this page uses whenever two extended suprema are
compared. It is proved here, from the definition of a least upper bound, rather
than quoted from the suprema page, for the reason given in the remarks below.

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals, its tail ranges $T_n = \{x_k : k \ge n\}$, and the extended bounds $s_n = \sup T_n$, $i_n = \inf T_n$ ([[def-sequence]], [[def-limsup-liminf]]).

[L1] Every subset of $\overline{\mathbb{R}}$ has a least upper bound and a greatest lower bound in $\overline{\mathbb{R}}$, with no hypothesis on the subset ([[lem-extended-reals-complete]]).

[L2] Least upper bound and greatest lower bound in a poset: $\sup A$ is an upper bound of $A$ that is $\le$ every upper bound of $A$, and $\inf A$ is a lower bound that is $\ge$ every lower bound; each is unique when it exists ([[def-upper-bound]], [[def-partial-order]]).

[L3] $(\overline{\mathbb{R}}, \le)$ is a totally ordered set, so its order is reflexive and transitive ([[def-extended-reals]], [[def-partial-order]]).

[L4] The order on $\mathbb{N}$ is total and transitive ([[def-nat-order]], [[thm-nat-linear-order]]).

## Proof

**Proof technique:** direct.

1.1 Let $A \subseteq B \subseteq \overline{\mathbb{R}}$ be arbitrary. By [L1] the four elements $\sup A$, $\sup B$, $\inf A$, $\inf B$ of $\overline{\mathbb{R}}$ all exist and are uniquely determined. [given, L1, L2]

1.2 Let $n \le m$ in $\mathbb{N}$. Every element of $T_m$ has the form $x_k$ with $k \ge m$, and then $k \ge n$ by transitivity, so $x_k \in T_n$; hence $T_m \subseteq T_n$. [given, L4]

1.3 For every $n$ the tail range $T_n$ contains $x_n$, so $i_n \le x_n$ because $i_n$ is a lower bound of $T_n$, and $x_n \le s_n$ because $s_n$ is an upper bound of $T_n$; transitivity gives $i_n \le s_n$. [given, L1, L2, L3]

2.1 Since $\sup B$ is an upper bound of $B$ and $A \subseteq B$, every element of $A$ is $\le \sup B$, so $\sup B$ is an upper bound of $A$; as $\sup A$ is the least of the upper bounds of $A$, this gives $\sup A \le \sup B$. Dually $\inf B$ is a lower bound of $B$, hence of $A$, and as $\inf A$ is the greatest of the lower bounds of $A$ this gives $\inf B \le \inf A$. Claim 1 is proved. [step 1.1, L1, L2]

3.1 Applying claim 1 to the inclusion $T_m \subseteq T_n$ valid for $n \le m$ gives $s_m \le s_n$ and $i_n \le i_m$; the special case $m = n + 1$ gives $s_{n+1} \le s_n$ and $i_n \le i_{n+1}$. Together with $i_n \le s_n$ this is claim 2. [step 1.2, step 1.3, step 2.1]

4.1 The families $\{s_n : n \in \mathbb{N}\}$ and $\{i_n : n \in \mathbb{N}\}$ are subsets of $\overline{\mathbb{R}}$, so [L1] applies to them with no hypothesis, and $\limsup_k x_k = \inf\{s_n\}$ and $\liminf_k x_k = \sup\{i_n\}$ exist in $\overline{\mathbb{R}}$ for every sequence of reals. This is claim 3. [step 3.1, L1, L2] ∎

## Remarks

- **The monotonicity is where the two operations of the definition interlock.**
  Because $(s_n)$ is nonincreasing, the outer infimum in
  $\limsup_k x_k = \inf_n s_n$ is an infimum of a decreasing family, so it is the
  value the tail suprema are pressing down towards; and because $(i_n)$ is
  nondecreasing, $\liminf_k x_k = \sup_n i_n$ is the value the tail infima are
  pressing up towards. Nothing in this lemma says the pressing converges, and for
  an unbounded sequence there is nothing in $\mathbb{R}$ for it to converge to;
  the exact statement is [[lem-limsup-epsilon-characterisation]].

- **Why the word "nonincreasing" is spelled out rather than cited.**
  [[def-monotone-sequence]] defines monotone for sequences of *reals*, and
  $(s_n)$ takes values in $\overline{\mathbb{R}}$, so the definition does not
  apply to it. Claim 2 is therefore stated as the inequality it is. When $(x_k)$
  is bounded every $s_n$ is real ([[def-limsup-liminf]]) and $(s_n)$ is then a
  nonincreasing sequence of reals in the sense of [[def-monotone-sequence]], but
  no proof on this page needs that reading.

- **Claim 1 is not [[lem-sup-monotone]].** That lemma is the same one-line
  argument carried out in $\mathbb{R}$, and its statement carries the hypotheses
  that the smaller set be nonempty and the larger one bounded above, without
  which neither supremum denotes anything. Those are exactly the hypotheses that
  the extended bounds of [[lem-extended-reals-complete]] dispense with, so the
  extended statement is not an instance of the real one and is proved from the
  definition of a least upper bound instead.

- **Claim 1 costs nothing and is used everywhere.** It is the one-line poset
  argument: the larger set's supremum bounds the smaller set, and leastness does
  the rest. It is stated as part of this lemma rather than as an item of its own
  because it is used only in company with the tail bounds.
````

### `lem-limsup-monotone-comparison`

````markdown
---
id: lem-limsup-monotone-comparison
kind: lemma
title: "If $x_k \\le y_k$ eventually then $\\limsup x_k \\le \\limsup y_k$ and $\\liminf x_k \\le \\liminf y_k$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-limsup-liminf, lem-limsup-exists, lem-extended-reals-complete, def-extended-reals, def-upper-bound, def-partial-order, def-sequence, def-nat-order, thm-nat-linear-order]
justified_by: []
aliases: []
landmark: false
short: "comparison of $\\limsup$"
proof_strategy: direct
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
    - title: "Limit superior and limit inferior (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_superior_and_limit_inferior"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §2.3"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement

Let $(x_k)$ and $(y_k)$ be sequences of reals ([[def-sequence]]) with
$x_k \le y_k$ **eventually**, that is for all $k$ from some index on. Then

$$\limsup_{k} x_k \;\le\; \limsup_{k} y_k \qquad \text{and} \qquad \liminf_{k} x_k \;\le\; \liminf_{k} y_k$$

in $\overline{\mathbb{R}}$ ([[def-limsup-liminf]], [[def-extended-reals]]). No
boundedness or convergence hypothesis is placed on either sequence.

## Facts & Assumptions

**Given:** Sequences $(x_k)$ and $(y_k)$ of reals and an index $K \in \mathbb{N}$ with $x_k \le y_k$ for every $k \ge K$; the tail ranges $T_n(x) = \{x_k : k \ge n\}$ and $T_n(y)$, and the extended tail bounds $s_n(x) = \sup T_n(x)$, $i_n(x) = \inf T_n(x)$ and likewise for $y$ ([[def-limsup-liminf]]).

[L1] All tail bounds and both of $\limsup$, $\liminf$ exist in $\overline{\mathbb{R}}$; $s_n$ is the least upper bound of the tail range and $i_n$ its greatest lower bound; $\limsup_k y_k$ is the greatest lower bound of $\{s_n(y)\}$ and $\liminf_k y_k$ the least upper bound of $\{i_n(y)\}$; and $s_m \le s_n$, $i_n \le i_m$ whenever $n \le m$ ([[lem-limsup-exists]], [[lem-extended-reals-complete]], [[def-upper-bound]], [[def-partial-order]]).

[L2] The order on $\overline{\mathbb{R}}$ is transitive and restricts on $\mathbb{R}$ to the order of $\mathbb{R}$ ([[def-extended-reals]], [[def-partial-order]]).

[L3] A property holds *eventually* when it holds for all indices from some index on ([[def-sequence]]).

[L4] The order on $\mathbb{N}$ is total, so every $n$ satisfies $n \ge K$ or $n < K$, and in the latter case $n \le K$ ([[def-nat-order]], [[thm-nat-linear-order]]).

## Proof

**Proof technique:** direct.

1.1 By hypothesis fix $K \in \mathbb{N}$ with $x_k \le y_k$ for every $k \ge K$. [given, L3]

2.1 Let $n \ge K$. Every $k \ge n$ satisfies $k \ge K$, so $x_k \le y_k \le s_n(y)$, and therefore $s_n(y)$ is an upper bound of $T_n(x)$, whence $s_n(x) \le s_n(y)$ by leastness. Dually $i_n(x) \le x_k \le y_k$ for every $k \ge n$, so $i_n(x)$ is a lower bound of $T_n(y)$ and $i_n(x) \le i_n(y)$ by greatest-lower-boundedness. [step 1.1, L1, L2, L4]

3.1 For every $n \in \mathbb{N}$ one has $\limsup_k x_k \le s_n(y)$. If $n \ge K$ this is $\limsup_k x_k \le s_n(x) \le s_n(y)$, the first inequality because $\limsup_k x_k$ is a lower bound of $\{s_m(x)\}$. If $n < K$ then $n \le K$, so $s_K(y) \le s_n(y)$, and $\limsup_k x_k \le s_K(x) \le s_K(y) \le s_n(y)$. [step 2.1, L1, L2, L4]

3.2 For every $n \in \mathbb{N}$ one has $i_n(x) \le \liminf_k y_k$. If $n \ge K$ this is $i_n(x) \le i_n(y) \le \liminf_k y_k$, the second inequality because $\liminf_k y_k$ is an upper bound of $\{i_m(y)\}$. If $n < K$ then $n \le K$, so $i_n(x) \le i_K(x) \le i_K(y) \le \liminf_k y_k$. [step 2.1, L1, L2, L4]

4.1 By step 3.1 the element $\limsup_k x_k$ is a lower bound of $\{s_n(y) : n \in \mathbb{N}\}$, whose greatest lower bound is $\limsup_k y_k$, so $\limsup_k x_k \le \limsup_k y_k$. By step 3.2 the element $\liminf_k y_k$ is an upper bound of $\{i_n(x) : n \in \mathbb{N}\}$, whose least upper bound is $\liminf_k x_k$, so $\liminf_k x_k \le \liminf_k y_k$. [step 3.1, step 3.2, L1] ∎

## Remarks

- **"Eventually" is enough, and the proof shows why.** Only tails with $n \ge K$
  are compared directly; the finitely many earlier tail bounds are absorbed by
  monotonicity of the tail bounds ([[lem-limsup-exists]]), which lets $s_K(y)$
  stand in for every earlier $s_n(y)$. No appeal to [[lem-limit-of-tail]] is
  needed, since neither quantity is defined as a limit.

- **The comparison does not become strict.** From $x_k < y_k$ for every $k$ one
  gets only $\limsup_k x_k \le \limsup_k y_k$; the sequences $x_k = 0$ and
  $y_k = 1/(k+1)$ have equal limits and hence equal limit superiors. This is the
  same phenomenon as for limits ([[lem-limit-preserves-order]]).

- **Both conclusions have the same direction.** It is the *inner* operation that
  differs between $\limsup$ and $\liminf$, and both a supremum and an infimum are
  monotone in the set, so a pointwise inequality pushes both quantities the same
  way. What fails to be monotone is the *gap* between them: nothing here compares
  $\limsup_k x_k$ with $\liminf_k y_k$.
````

### `lem-limsup-reflection`

````markdown
---
id: lem-limsup-reflection
kind: lemma
title: "$\\limsup(-x_k) = -\\liminf(x_k)$, with the reflection of $\\overline{\\mathbb{R}}$ exchanging $\\pm\\infty$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-limsup-liminf, lem-limsup-exists, def-extended-reals, lem-extended-reals-complete, def-upper-bound, def-partial-order, def-sequence]
justified_by: []
aliases: []
landmark: false
short: "$\\limsup(-x)=-\\liminf x$"
proof_strategy: direct
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
    - title: "Limit superior and limit inferior (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_superior_and_limit_inferior"
    - title: "Infimum and supremum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Infimum_and_supremum"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Boyle, Liminf and limsup notes"
      url: "https://www.math.umd.edu/~mboyle/courses/410f12/liminf.pdf"
    - title: "Extended real number line (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Extended_real_number_line"
pipeline_run: null
---

## Statement

Write $-A := \{-a : a \in A\}$ for $A \subseteq \overline{\mathbb{R}}$, with the
reflection of [[def-extended-reals]], which fixes no point of
$\{-\infty, +\infty\}$ but exchanges the two.

1. **Reflection exchanges the extended bounds.** For every
   $A \subseteq \overline{\mathbb{R}}$,
   $$\sup(-A) = -\inf A \qquad \text{and} \qquad \inf(-A) = -\sup A,$$
   with the bounds of [[lem-extended-reals-complete]] and no hypothesis on $A$.
2. **Reflection exchanges $\limsup$ and $\liminf$.** For every sequence $(x_k)$
   of reals ([[def-sequence]]),
   $$\limsup_{k}(-x_k) = -\liminf_{k} x_k \qquad \text{and} \qquad \liminf_{k}(-x_k) = -\limsup_{k} x_k,$$
   with $\limsup$ and $\liminf$ as in [[def-limsup-liminf]].

Claim 2 is what turns every statement about $\limsup$ on this page into its dual
about $\liminf$ without a second proof, exactly as the identity
$\inf S = -\sup(-S)$ does in $\mathbb{R}$. The novelty is only that the reflection
now has to move the two new points, and it does: $-(+\infty) = -\infty$.

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals, the reflected sequence $y_k := -x_k$, and for $A \subseteq \overline{\mathbb{R}}$ the reflected set $-A = \{-a : a \in A\}$.

[L1] Reflection on $\overline{\mathbb{R}}$: the map $a \mapsto -a$ satisfies $-(-a) = a$ and $a \le b$ if and only if $-b \le -a$, for all $a, b \in \overline{\mathbb{R}}$ ([[def-extended-reals]]).

[L2] Every subset of $\overline{\mathbb{R}}$ has a least upper bound and a greatest lower bound in $\overline{\mathbb{R}}$, with no hypothesis on the subset ([[lem-extended-reals-complete]]).

[L3] Least upper bound and greatest lower bound in a poset, and their uniqueness ([[def-upper-bound]], [[def-partial-order]]).

[L4] Tail ranges $T_n = \{x_k : k \ge n\}$, the extended tail bounds $s_n = \sup T_n$ and $i_n = \inf T_n$, and $\limsup_k x_k = \inf\{s_n\}$, $\liminf_k x_k = \sup\{i_n\}$ ([[def-limsup-liminf]]).

[L5] All four families exist for every sequence ([[lem-limsup-exists]]).

## Proof

**Proof technique:** direct.

1.1 Let $A \subseteq \overline{\mathbb{R}}$ be arbitrary. Since $-(-a) = a$ for every $a$, the map $a \mapsto -a$ carries $A$ onto $-A$ and $-A$ onto $A$, so $-(-A) = A$; and by [L2] each of $\sup A$, $\inf A$, $\sup(-A)$, $\inf(-A)$ exists. [given, L1, L2]

1.2 Let $T_n$ and $T'_n$ be the tail ranges of $(x_k)$ and of $(y_k) = (-x_k)$. Since $y_k = -x_k$, the set $T'_n = \{y_k : k \ge n\}$ is exactly $-T_n$. [given, L4]

2.1 The element $-\inf A$ is an upper bound of $-A$: for $a \in A$ we have $\inf A \le a$, hence $-a \le -\inf A$ by [L1], and every element of $-A$ is such a $-a$. If $v$ is any upper bound of $-A$, then for $a \in A$ we get $-a \le v$, hence $-v \le a$ by [L1], so $-v$ is a lower bound of $A$ and therefore $-v \le \inf A$, which gives $-\inf A \le v$ by [L1] again. So $-\inf A$ is the least upper bound of $-A$, that is $\sup(-A) = -\inf A$. [step 1.1, L1, L2, L3]

3.1 Applying the identity just proved to the set $-A$ in place of $A$, and using $-(-A) = A$, gives $\sup A = -\inf(-A)$; reflecting both sides and using $-(-a) = a$ yields $\inf(-A) = -\sup A$. Claim 1 is proved. [step 2.1, step 1.1, L1]

4.1 By claim 1 applied to $T_n$, the $n$-th tail supremum of $(y_k)$ is $\sup T'_n = \sup(-T_n) = -i_n$, and its $n$-th tail infimum is $\inf(-T_n) = -s_n$. [step 1.2, step 2.1, step 3.1, L4]

5.1 Hence the family of tail suprema of $(y_k)$ is $\{-i_n : n \in \mathbb{N}\} = -\{i_n : n \in \mathbb{N}\}$, so claim 1 applied to $\{i_n\}$ gives $\limsup_k(-x_k) = \inf\big(-\{i_n\}\big) = -\sup\{i_n\} = -\liminf_k x_k$. [step 4.1, step 3.1, L4, L5]

6.1 The same identity applied to the sequence $(y_k)$, whose reflection is $(-y_k) = (x_k)$ by [L1], reads $\limsup_k x_k = -\liminf_k(-x_k)$; reflecting both sides gives $\liminf_k(-x_k) = -\limsup_k x_k$. Both parts of claim 2 are proved. [step 5.1, L1] ∎

## Remarks

- **Claim 1 needs no hypothesis, and that is the whole gain over $\mathbb{R}$.**
  The corresponding real statement, $\inf S = -\sup(-S)$
  ([[thm-infimum-property]]), carries the hypotheses that $S$ be nonempty and
  bounded below, because otherwise neither side denotes anything. Here both sides
  always denote, so the identity is unconditional and can be applied to the family
  $\{i_n\}$ without first checking that it is bounded, which for an unbounded
  sequence it is not.

- **The reflection is an order anti-isomorphism, not merely a bijection.** What
  step 2.1 uses is that $a \mapsto -a$ is a bijection *and* reverses the order,
  both recorded in [[def-extended-reals]]. A bijection alone would not exchange
  bounds, and an order-reversing map that is not injective would not carry least
  upper bounds to greatest lower bounds.

- **Consequences on this page.** [[cor-liminf-is-least-subsequential-limit]] is
  [[thm-limsup-is-greatest-subsequential-limit]] read through this lemma, the
  $\liminf$ half of [[thm-limsup-subadditive]] is its $\limsup$ half read the same
  way, and the $-\infty$ case of
  [[thm-convergence-iff-limsup-equals-liminf]] is its $+\infty$ case.
````

### `rem-sup-conventions`

````markdown
---
id: rem-sup-conventions
kind: remark
title: "Conventions: $\\sup \\emptyset$, unbounded sets, and the extended reals"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-complete-ordered-field, def-infimum, thm-infimum-property, fs-every-set-has-sup,
       lem-sup-epsilon, lem-inf-epsilon, lem-sup-monotone, lem-sup-translate,
       lem-sup-scale, lem-sup-sum, lem-sup-unique, lem-max-is-sup]
justified_by: []
forward_refs: [def-extended-reals]
aliases: []
landmark: false
verification:
  precheck: n/a
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Extended real number line (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Extended_real_number_line"
    - title: "Infimum and supremum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Infimum_and_supremum"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

Many texts, especially in measure theory, lattice theory and optimisation, work
in the **extended real line** $\overline{\mathbb{R}} = \mathbb{R} \cup \{-\infty, +\infty\}$
and adopt the conventions

$$\sup \emptyset = -\infty, \qquad \inf \emptyset = +\infty, \qquad \sup S = +\infty \ \text{ for } S \text{ not bounded above}, \qquad \inf S = -\infty \ \text{ for } S \text{ not bounded below}.$$

With those conventions in force, every subset of $\mathbb{R}$ has a supremum and
an infimum in $\overline{\mathbb{R}}$, and the two exceptional cases recorded in
[[fs-every-set-has-sup]] disappear. The conventions are consistent and often
convenient. The value $\sup \emptyset = -\infty$ is not arbitrary: it is forced
by monotonicity under inclusion together with $\sup \{x\} = x$, since
$\emptyset \subseteq \{x\}$ then gives $\sup \emptyset \le x$ for **every** real
$x$, and $-\infty$ is the only element of $\overline{\mathbb{R}}$ below every
real. (Monotonicity together with $\sup \mathbb{R} = +\infty$ forces nothing
here: it only gives $\sup \emptyset \le +\infty$.) The convention also makes
$\sup(S \cup T) = \max\{\sup S, \sup T\}$ hold without side conditions.

**This library does not adopt them.** Two reasons, both about keeping the
foundations honest.

- $\pm\infty$ are not elements of $\mathbb{R}$. The library's $\mathbb{R}$ is the
  complete ordered field ([[def-complete-ordered-field]]), and
  $\overline{\mathbb{R}}$ is not a field: $+\infty$ has no additive inverse, and
  the expressions $(+\infty) + (-\infty)$ and $0 \cdot (+\infty)$ have no
  definition that keeps the field axioms. Writing $\sup S = +\infty$ silently
  moves the discussion into a different structure, and every subsequent algebraic
  step then needs its own justification.
- Suppressed hypotheses become invisible errors. If $\sup S$ is always defined,
  a statement such as "$\sup(S + T) = \sup S + \sup T$" appears to be
  unconditional, and the cases where it degenerates are hidden inside the
  arithmetic of $\pm\infty$ rather than shown in the hypotheses.

Accordingly, in this library:

- $\sup S$ and $\inf S$ denote **real numbers**, and the notation is used only
  after existence has been established. Existence comes from the
  least-upper-bound property ([[def-complete-ordered-field]]) and its dual
  ([[thm-infimum-property]]), each of which requires the set to be nonempty and
  bounded on the relevant side.
- No supremum or infimum is written down before its existence has been
  established, and every statement that establishes existence says explicitly
  what it assumes. The nonempty and bounded clauses in [[lem-sup-epsilon]],
  [[lem-inf-epsilon]], [[lem-sup-monotone]], [[lem-sup-translate]],
  [[lem-sup-scale]] and [[lem-sup-sum]] are load bearing, not decoration. Where
  some other hypothesis does that work it is named instead of being suppressed:
  [[lem-max-is-sup]] obtains existence from a maximum rather than from a
  boundedness clause, and [[lem-sup-unique]], which asserts no existence at all,
  needs neither clause.
- $\sup \emptyset$ and $\inf \emptyset$ are simply undefined
  ([[def-infimum]], [[fs-every-set-has-sup]]).

A reader coming from a source that uses the extended-real conventions should
therefore expect the statements here to look more heavily qualified than the ones
they are used to. The mathematics is the same; the difference is where the case
analysis is written down. The extended real line is introduced explicitly in
[[def-extended-reals]] for later limsup and liminf arguments, with its order and
partial arithmetic kept separate from $\mathbb{R}$.
````

### `thm-convergence-iff-limsup-equals-liminf`

````markdown
---
id: thm-convergence-iff-limsup-equals-liminf
kind: theorem
title: "A real sequence converges to $L \\in \\mathbb{R}$ iff $\\liminf x_k = \\limsup x_k = L$, and diverges to $\\pm\\infty$ iff both equal $\\pm\\infty$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-limsup-liminf, lem-limsup-epsilon-characterisation, lem-liminf-le-limsup, lem-limsup-reflection, lem-limsup-exists, lem-extended-reals-complete, def-real-limit, def-divergence-to-infinity, def-extended-reals, def-extended-limits, def-upper-bound, def-partial-order, def-sequence, lem-rat-embeds-dense, lem-of-abs-value, lem-of-add-order, cor-of-one-positive, thm-nat-linear-order, def-ordered-field, def-complete-ordered-field]
justified_by: []
forward_refs: [ex-limsup-of-alternating-sequence]
aliases: []
landmark: true
short: "convergence $\\iff \\liminf = \\limsup$"
proof_strategy: direct
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
    - title: "Limit superior and limit inferior (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_superior_and_limit_inferior"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.17)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "J. Lebl, Basic Analysis I, §2.3"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement

Let $(x_k)$ be a sequence of reals ([[def-sequence]]), with $\limsup$ and
$\liminf$ as in [[def-limsup-liminf]].

1. For $L \in \mathbb{R}$: $(x_k)$ converges to $L$ ([[def-real-limit]]) **if and
   only if** $\liminf_k x_k = \limsup_k x_k = L$.
2. $x_k \to +\infty$ ([[def-divergence-to-infinity]]) **if and only if**
   $\liminf_k x_k = \limsup_k x_k = +\infty$. Moreover $\liminf_k x_k = +\infty$
   on its own already forces $\limsup_k x_k = +\infty$.
3. $x_k \to -\infty$ **if and only if** $\liminf_k x_k = \limsup_k x_k = -\infty$,
   and $\limsup_k x_k = -\infty$ on its own already forces
   $\liminf_k x_k = -\infty$.

The three clauses combine into one statement about the extended line: for
$L \in \overline{\mathbb{R}}$, the sequence $(x_k)$ converges to $L$ in
$\overline{\mathbb{R}}$ ([[def-extended-limits]]) if and only if

$$\liminf_{k} x_k = \limsup_{k} x_k = L .$$

Since $\liminf_k x_k \le \limsup_k x_k$ always ([[lem-liminf-le-limsup]]), the
single equation $\liminf_k x_k = \limsup_k x_k$ is therefore equivalent to
convergence in $\overline{\mathbb{R}}$, and the common value is the limit. A
sequence that neither converges nor diverges to $\pm\infty$ is exactly one for
which the inequality is strict.

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals, its tail ranges $T_n = \{x_k : k \ge n\}$, the extended tail bounds $s_n = \sup T_n$ and $i_n = \inf T_n$, and the quantities $\limsup_k x_k = \inf\{s_n\}$, $\liminf_k x_k = \sup\{i_n\}$ ([[def-limsup-liminf]]).

[L1] All of $s_n$, $i_n$, $\limsup_k x_k$ and $\liminf_k x_k$ exist in $\overline{\mathbb{R}}$ for every sequence; $i_n$ is the greatest lower bound of $T_n$ and $\liminf_k x_k$ the least upper bound of $\{i_n\}$, with the dual descriptions for $s_n$ and $\limsup_k x_k$ ([[lem-limsup-exists]], [[lem-extended-reals-complete]], [[def-upper-bound]], [[def-partial-order]]).

[L2] The order on $\overline{\mathbb{R}}$ is total, so the failure of $a \le b$ is $b < a$; it restricts on $\mathbb{R}$ to the order of $\mathbb{R}$; $+\infty$ is the greatest element and $-\infty$ the least; and every real is $< +\infty$ and $> -\infty$ ([[def-extended-reals]], [[def-partial-order]]).

[L3] Epsilon characterisation, for a real $L$: $L = \limsup_k x_k$ exactly when for every real $\varepsilon > 0$ one has $x_k < L + \varepsilon$ eventually and $x_k > L - \varepsilon$ frequently; and $L = \liminf_k x_k$ exactly when for every real $\varepsilon > 0$ one has $x_k > L - \varepsilon$ eventually and $x_k < L + \varepsilon$ frequently ([[lem-limsup-epsilon-characterisation]]).

[L4] $\liminf_k x_k \le \limsup_k x_k$ ([[lem-liminf-le-limsup]]).

[L5] Reflection: $\limsup_k(-x_k) = -\liminf_k x_k$ and $\liminf_k(-x_k) = -\limsup_k x_k$ ([[lem-limsup-reflection]]). Also $x_k \to -\infty$ if and only if $-x_k \to +\infty$: the condition $x_k < M$ for all $k \ge K$ is equivalent to $-x_k > -M$ for all $k \ge K$ by order reversal, and $M$ runs over all reals exactly when $-M$ does ([[def-divergence-to-infinity]]); the order reversal used here is strict, and the form stated in [[lem-of-add-order]] is likewise strict, so nothing nonstrict is being borrowed from it.

[L6] Convergence to a real $L$ means: for every rational $\varepsilon > 0$ there is $K$ with $|x_k - L| < \varepsilon$ for all $k \ge K$; and the same relation is obtained by testing every real $\varepsilon > 0$ instead, since below any positive real lies a positive rational ([[def-real-limit]], [[def-sequence]], [[lem-rat-embeds-dense]]).

[L7] Divergence: $x_k \to +\infty$ means that for every real $M$ there is $K$ with $x_k > M$ for all $k \ge K$ ([[def-divergence-to-infinity]]).

[L8] Eventually and frequently, and the fact that a property holding eventually holds frequently, since indices beyond any two given thresholds exist by totality of the order on $\mathbb{N}$; likewise two properties each holding eventually hold together from the larger threshold on ([[def-sequence]], [[thm-nat-linear-order]]).

[L9] Absolute value: for $c > 0$, $|a| < c$ if and only if $-c < a < c$ ([[lem-of-abs-value]]).

[L10] Order arithmetic in $\mathbb{R}$: $0 < 1$, so $t < t + 1$ for every real $t$, and no real is above every real; adding a constant preserves the order ([[cor-of-one-positive]], [[lem-of-add-order]], [[def-ordered-field]], [[def-complete-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 For the forward implication of claim 1, assume $L \in \mathbb{R}$ and that $(x_k)$ converges to $L$. [assume-hyp, L6]

1.2 For the converse implication of claim 1, assume $L \in \mathbb{R}$ and $\liminf_k x_k = \limsup_k x_k = L$. [assume-hyp, L1]

1.3 For the forward implication of claim 2, assume $x_k \to +\infty$. [assume-hyp, L7]

1.4 For the converse implication of claim 2, assume $\liminf_k x_k = +\infty$. [assume-hyp, L1]

2.1 Under the assumption of step 1.1, let $\varepsilon > 0$ be an arbitrary real. Testing convergence at $\varepsilon$ gives $K$ with $|x_k - L| < \varepsilon$, hence $L - \varepsilon < x_k < L + \varepsilon$, for all $k \ge K$. So $x_k < L + \varepsilon$ eventually and $x_k > L - \varepsilon$ eventually, and each of the two therefore also holds frequently. Both halves of each characterisation in [L3] are met, so $\limsup_k x_k = L$ and $\liminf_k x_k = L$. [step 1.1, L3, L6, L8, L9]

2.2 Under the assumption of step 1.2, let $\varepsilon > 0$ be an arbitrary real. The forward halves of the two characterisations in [L3] give $x_k < L + \varepsilon$ for all $k$ beyond some $K_1$ and $x_k > L - \varepsilon$ for all $k$ beyond some $K_2$; beyond the larger of $K_1$ and $K_2$ both hold, so $|x_k - L| < \varepsilon$ there. This holds for every real $\varepsilon > 0$, in particular for every rational one, so $(x_k)$ converges to $L$. [step 1.2, L3, L6, L8, L9]

2.3 Under the assumption of step 1.3, let $M$ be an arbitrary real and take $K$ with $x_k > M$ for all $k \ge K$. Then $M$ is a lower bound of $T_K$, so $M \le i_K$, and $i_K \le \liminf_k x_k$ because $\liminf_k x_k$ is an upper bound of $\{i_n\}$; hence $M \le \liminf_k x_k$. Since $M$ was an arbitrary real, $\liminf_k x_k$ is not $-\infty$, which lies below every real, and it is not a real $t$ either, since $M = t + 1$ would give $t + 1 \le t$. So $\liminf_k x_k = +\infty$. [step 1.3, L1, L2, L7, L10]

2.4 Under the assumption of step 1.4, let $M$ be an arbitrary real. Since $\sup\{i_n\} = +\infty$ and $M < +\infty$, the real $M$ is not an upper bound of $\{i_n\}$, for otherwise the least upper bound would satisfy $+\infty \le M$; by totality there is $n$ with $i_n > M$. Every $k \ge n$ satisfies $x_k \ge i_n > M$, so $x_k > M$ eventually. As $M$ was arbitrary, $x_k \to +\infty$. [step 1.4, L1, L2, L7]

3.1 Steps 2.1 and 2.2 are the two implications of claim 1. [step 2.1, step 2.2, L3]

3.2 For claim 2: if $x_k \to +\infty$ then $\liminf_k x_k = +\infty$ by step 2.3, and then $+\infty = \liminf_k x_k \le \limsup_k x_k$ forces $\limsup_k x_k = +\infty$ since $+\infty$ is the greatest element; conversely if $\liminf_k x_k = \limsup_k x_k = +\infty$ then in particular $\liminf_k x_k = +\infty$ and step 2.4 gives $x_k \to +\infty$. The same use of [L4] is the additional assertion that $\liminf_k x_k = +\infty$ alone forces $\limsup_k x_k = +\infty$. [step 2.3, step 2.4, L2, L4]

4.1 For claim 3, reflection gives $x_k \to -\infty$ exactly when $-x_k \to +\infty$, which by claim 2 holds exactly when $\liminf_k(-x_k) = \limsup_k(-x_k) = +\infty$, that is $-\limsup_k x_k = -\liminf_k x_k = +\infty$, that is $\limsup_k x_k = \liminf_k x_k = -\infty$; and $\limsup_k x_k = -\infty$ alone forces $\liminf_k x_k \le -\infty$, hence $\liminf_k x_k = -\infty$, since $-\infty$ is least. Claims 1, 2 and 3 together say that for $L \in \overline{\mathbb{R}}$ the sequence converges to $L$ in $\overline{\mathbb{R}}$ exactly when $\liminf_k x_k = \limsup_k x_k = L$, since the three clauses of that definition are convergence to a real $L$, divergence to $+\infty$ and divergence to $-\infty$. [step 3.1, step 3.2, L2, L4, L5] ∎

## Remarks

- **This is the theorem that makes $\limsup$ and $\liminf$ worth defining.** They
  exist for every sequence, with no hypothesis, and their coincidence is exactly
  convergence in $\overline{\mathbb{R}}$. So a question about convergence becomes
  a question about two computable quantities, and a proof of convergence can be
  assembled from one-sided estimates without a candidate limit in hand.

- **The equation is between elements of $\overline{\mathbb{R}}$, and reading it in
  $\mathbb{R}$ would lose two thirds of the content.** Clauses 2 and 3 are
  statements about divergence, and they are true statements about
  [[def-divergence-to-infinity]], not a redefinition of it: nothing above claims
  that a sequence diverging to $+\infty$ has a limit in $\mathbb{R}$, and the
  symbol $+\infty$ occurring in them is the element of $\overline{\mathbb{R}}$
  introduced in [[def-extended-reals]].

- **A sequence with $\liminf < \limsup$ does neither.** The alternating sequence
  is the standard witness, with the two values $-1$ and $1$
  ([[ex-limsup-of-alternating-sequence]]); it is bounded, so it also does not
  diverge to $\pm\infty$, and the theorem says its failure to converge is exactly
  the gap between the two quantities.
````

### `thm-limsup-is-greatest-subsequential-limit`

````markdown
---
id: thm-limsup-is-greatest-subsequential-limit
kind: theorem
title: "The limit superior is itself a subsequential limit in $\\overline{\\mathbb{R}}$ and is the greatest one"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-limsup-liminf, def-subsequential-limit, def-extended-limits, lem-limsup-epsilon-characterisation, lem-limsup-exists, lem-extended-reals-complete, lem-liminf-le-limsup, thm-convergence-iff-limsup-equals-liminf, thm-recursion, thm-well-ordering-principle, lem-index-map-grows, def-extended-reals, def-divergence-to-infinity, def-real-limit, lem-limit-preserves-order, def-sequence, def-upper-bound, def-partial-order, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, lem-of-naturals-positive, lem-rat-embeds-dense, lem-of-abs-value, def-nat-order, thm-nat-linear-order]
justified_by: []
forward_refs: [cex-limsup-infinite-not-attained-in-r]
aliases: []
landmark: true
short: "$\\limsup = \\max \\overline{\\operatorname{SL}}$"
proof_strategy: constructive
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
    - title: "Limit superior and limit inferior (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_superior_and_limit_inferior"
    - title: "Subsequential limit (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subsequential_limit"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.17)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "N. Donaldson, Math 140A: Real Analysis notes"
      url: "https://www.math.uci.edu/~ndonalds/math140a/notes.pdf"
pipeline_run: null
---

## Statement

Let $(x_k)$ be a sequence of reals ([[def-sequence]]) and write
$\Lambda := \limsup_{k} x_k \in \overline{\mathbb{R}}$ ([[def-limsup-liminf]]).
Then, with the extended subsequential limit set
$\overline{\operatorname{SL}}(x)$ of [[def-extended-limits]]:

1. $\Lambda \in \overline{\operatorname{SL}}(x)$: there is a strictly increasing
   $n : \mathbb{N} \to \mathbb{N}$ such that $(x_{n_j})$ converges to $\Lambda$ in
   $\overline{\mathbb{R}}$;
2. $L \le \Lambda$ for every $L \in \overline{\operatorname{SL}}(x)$.

So $\overline{\operatorname{SL}}(x)$ is **nonempty** and has a **greatest
element**, and that element is $\limsup_k x_k$. In particular every sequence of
reals whatever has a subsequence that converges in $\overline{\mathbb{R}}$.

**The extended set is the right home for this statement, and the real set is
not.** The finite subsequential limit set $\operatorname{SL}(x)$ of
[[def-subsequential-limit]] may be empty, and when it is not it may have a
greatest element different from $\limsup_k x_k$; both failures are exhibited by
the dedicated counterexample on the companion page. What is true for
$\operatorname{SL}(x)$ follows: when $\Lambda$ is a real number, claim 1 puts it
in $\operatorname{SL}(x)$, since the two sets agree on $\mathbb{R}$
([[def-extended-limits]]), and claim 2 then makes it the greatest element there
too.

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals, its tail ranges $T_n = \{x_k : k \ge n\}$, the extended tail suprema $s_n = \sup T_n$, and $\Lambda := \limsup_k x_k = \inf\{s_n : n \in \mathbb{N}\}$ ([[def-limsup-liminf]]).

[L1] All of $s_n$ and $\Lambda$ exist in $\overline{\mathbb{R}}$, with $s_n$ the least upper bound of $T_n$ and $\Lambda$ the greatest lower bound of $\{s_n\}$ ([[lem-limsup-exists]], [[lem-extended-reals-complete]], [[def-upper-bound]], [[def-partial-order]]).

[L2] The order on $\overline{\mathbb{R}}$ is total, so the failure of $a \le b$ is $b < a$; $-\infty$ is least and $+\infty$ greatest; every real is $< +\infty$ and $> -\infty$; and on $\mathbb{R}$ the order is that of $\mathbb{R}$ ([[def-extended-reals]], [[def-partial-order]]).

[L3] Epsilon characterisation for a real $\Lambda$: for every real $\eta > 0$ one has $x_k < \Lambda + \eta$ eventually and $x_k > \Lambda - \eta$ frequently ([[lem-limsup-epsilon-characterisation]]).

[L4] Recursion theorem: for a set $A$, an element $a \in A$ and a function $f : A \to A$ there is a unique $g : \mathbb{N} \to A$ with $g_0 = a$ and $g_{j+1} = f(g_j)$ ([[thm-recursion]]).

[L5] Well-ordering principle: every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L6] Index maps: if $n_j < n_{j+1}$ for every $j$ then $n$ is strictly increasing, and then $n_j \ge j$ for every $j$; the composite $(x_{n_j})$ is a subsequence ([[lem-index-map-grows]], [[def-sequence]]).

[L7] Convergence in $\overline{\mathbb{R}}$ and the extended subsequential limit set ([[def-extended-limits]]); convergence to a real, for which it suffices to produce a threshold for every real $\varepsilon > 0$ ([[def-real-limit]], [[def-sequence]]); divergence to $\pm\infty$ ([[def-divergence-to-infinity]]); and $|a - b| < c$ if and only if $b - c < a < b + c$ for $c > 0$ ([[lem-of-abs-value]]).

[L8] If $\limsup_k x_k = -\infty$ then $\liminf_k x_k = -\infty$ and $x_k \to -\infty$ ([[lem-liminf-le-limsup]], [[thm-convergence-iff-limsup-equals-liminf]]).

[L9] Limits preserve non-strict inequalities: if $y_j \le c$ for all large $j$ and $y_j \to y$ in $\mathbb{R}$, then $y \le c$ ([[lem-limit-preserves-order]]).

[L10] Archimedean facts: for every real $M$ there is a natural $p \ge 1$ with $M < p \cdot 1_{\mathbb{R}}$, and for every real $\eta > 0$ a natural $m \ge 1$ with $1/m < \eta$; the canonical naturals satisfy $0 \le n \cdot 1_{\mathbb{R}}$ and are increasing in $n$, and $0 < a \le b$ gives $0 < 1/b \le 1/a$ ([[thm-of-archimedean]], [[cor-archimedean-reciprocal]], [[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

[L11] Strictly between any two reals lies a rational, hence a real ([[lem-rat-embeds-dense]]).

[L12] The order on $\mathbb{N}$ is total and transitive, so any two indices have a common upper bound ([[def-nat-order]], [[thm-nat-linear-order]]).

## Proof

**Proof technique:** constructive.

1.1 The element $\Lambda = \limsup_k x_k$ exists in $\overline{\mathbb{R}}$, and exactly one of the following holds: $\Lambda$ is a real number, $\Lambda = +\infty$, or $\Lambda = -\infty$. [given, L1, L2]

1.2 Suppose $\Lambda = +\infty$. Since $\Lambda$ is a lower bound of $\{s_n\}$, every $n$ has $+\infty \le s_n$ and so $s_n = +\infty$. Consequently, for every $n \in \mathbb{N}$ and every real $M$ there is $k \ge n$ with $x_k > M$: otherwise $M$ would be an upper bound of $T_n$ and leastness would give $s_n \le M$, contradicting $M < +\infty$. [given, L1, L2]

1.3 Suppose $\Lambda$ is real. Then for every $n \in \mathbb{N}$ and every real $\eta > 0$ there is $k \ge n$ with $|x_k - \Lambda| < \eta$: by [L3] fix $K$ with $x_k < \Lambda + \eta$ for all $k \ge K$, let $K'$ be an index at least as large as both $n$ and $K$, and use that $x_k > \Lambda - \eta$ frequently to obtain $k \ge K'$ with $x_k > \Lambda - \eta$; that $k$ satisfies $k \ge K$, hence also $x_k < \Lambda + \eta$, and $k \ge n$. [given, L3, L7, L12]

1.4 Suppose $\Lambda = -\infty$. Then $x_k \to -\infty$ by [L8], and the identity map $j \mapsto j$ is strictly increasing, so the subsequence $(x_j)$ of $(x_k)$ converges to $-\infty$ in $\overline{\mathbb{R}}$ and $\Lambda \in \overline{\operatorname{SL}}(x)$. [given, L6, L7, L8]

1.5 Let $L \in \overline{\operatorname{SL}}(x)$ be arbitrary and fix a strictly increasing $n : \mathbb{N} \to \mathbb{N}$ such that $(x_{n_j})$ converges to $L$ in $\overline{\mathbb{R}}$; then $n_j \ge j$ for every $j$. [given, L6, L7]

2.1 In the case $\Lambda = +\infty$, define $f : \mathbb{N} \to \mathbb{N}$ by letting $f(n)$ be the least element of $E_n := \{\, k \in \mathbb{N} : k > n \text{ and } x_k > n \cdot 1_{\mathbb{R}} \,\}$, which is nonempty by step 1.2 applied with the index $n+1$ and the real $M = n \cdot 1_{\mathbb{R}}$, and let $a$ be the least element of $\{\, k : x_k > 0 \,\}$, nonempty by step 1.2 with $n = 0$ and $M = 0$. Then $f(n) > n$ and $x_{f(n)} > n \cdot 1_{\mathbb{R}}$ for every $n$. [step 1.2, L5, construct]

2.2 In the case $\Lambda$ real, define $g : \mathbb{N} \to \mathbb{N}$ by letting $g(n)$ be the least element of $F_n := \{\, k \in \mathbb{N} : k > n \text{ and } |x_k - \Lambda| < 1/(n+1) \,\}$, which is nonempty by step 1.3 applied with the index $n+1$ and $\eta = 1/(n+1) > 0$, and let $b$ be the least element of $\{\, k : |x_k - \Lambda| < 1 \,\}$, nonempty by step 1.3 with $n = 0$ and $\eta = 1$. Then $g(n) > n$ and $|x_{g(n)} - \Lambda| < 1/(n+1)$ for every $n$. [step 1.3, L5, L10, construct]

2.3 If $L = -\infty$ then $L \le \Lambda$, since $-\infty$ is the least element of $\overline{\mathbb{R}}$. [step 1.5, L2]

2.4 If $L = +\infty$, then for every real $M$ there is $J$ with $x_{n_j} > M$ for all $j \ge J$. Fix $n \in \mathbb{N}$ and a real $M$, and take $j$ at least as large as both $J$ and $n$; then $n_j \ge j \ge n$, so $x_{n_j} \in T_n$ and $M < x_{n_j} \le s_n$. As $M$ was an arbitrary real, $s_n$ is neither real nor $-\infty$, so $s_n = +\infty$; as $n$ was arbitrary, $\Lambda = \inf\{s_n\} = +\infty$ and $L \le \Lambda$. [step 1.5, L1, L2, L7, L12]

2.5 If $L$ is real, suppose for the sake of the comparison that $\Lambda < L$. By step 1.1 the element $\Lambda$ is then real or $-\infty$; choose a real $c$ with $\Lambda < c < L$, taking a rational strictly between $\Lambda$ and $L$ in the first case and $c := L - 1$ in the second. Since $\Lambda$ is the greatest lower bound of $\{s_n\}$ and $\Lambda < c$, the element $c$ is not a lower bound, so there is $n$ with $s_n < c$, and then $x_k \le s_n < c$ for every $k \ge n$. For $j \ge n$ we have $n_j \ge j \ge n$, hence $x_{n_j} \le c$, so $L \le c$ by [L9], contradicting $c < L$. By totality $L \le \Lambda$. [step 1.5, step 1.1, L1, L2, L9, L11]

3.1 In the case $\Lambda = +\infty$, the recursion theorem applied to $\mathbb{N}$, the element $a$ and the function $f$ gives $n : \mathbb{N} \to \mathbb{N}$ with $n_0 = a$ and $n_{j+1} = f(n_j)$. Then $n_j < n_{j+1}$ for every $j$, so $n$ is strictly increasing and $n_j \ge j$; and $x_{n_{j+1}} > n_j \cdot 1_{\mathbb{R}} \ge j \cdot 1_{\mathbb{R}}$ for every $j$. [step 2.1, L4, L6, L10]

3.2 In the case $\Lambda$ real, the recursion theorem applied to $\mathbb{N}$, the element $b$ and the function $g$ gives $n : \mathbb{N} \to \mathbb{N}$ with $n_0 = b$ and $n_{j+1} = g(n_j)$. Then $n$ is strictly increasing with $n_j \ge j$, and $|x_{n_{j+1}} - \Lambda| < 1/(n_j + 1) \le 1/(j+1)$ for every $j$. [step 2.2, L4, L6, L10]

4.1 In the case $\Lambda = +\infty$, the subsequence $(x_{n_j})$ diverges to $+\infty$: given a real $M$, take a natural $p \ge 1$ with $M < p \cdot 1_{\mathbb{R}}$; every $j \ge p + 1$ satisfies $j - 1 \ge p$, so step 3.1 applied at $j - 1$ gives $x_{n_j} > (j-1) \cdot 1_{\mathbb{R}} \ge p \cdot 1_{\mathbb{R}} > M$. Hence $(x_{n_j})$ converges to $+\infty = \Lambda$ in $\overline{\mathbb{R}}$ and $\Lambda \in \overline{\operatorname{SL}}(x)$. [step 3.1, L7, L10, L12]

4.2 In the case $\Lambda$ real, the subsequence $(x_{n_j})$ converges to $\Lambda$: given a real $\varepsilon > 0$, take a natural $m \ge 1$ with $1/m < \varepsilon$; every $j \ge m$ satisfies $j \ge 1$, so step 3.2 applied at $j - 1$ gives $|x_{n_j} - \Lambda| < 1/j \le 1/m < \varepsilon$. Producing such a threshold for every real $\varepsilon > 0$ establishes convergence, so $(x_{n_j})$ converges to $\Lambda$ in $\overline{\mathbb{R}}$ and $\Lambda \in \overline{\operatorname{SL}}(x)$. [step 3.2, L7, L10]

5.1 The three cases of step 1.1 are exhaustive, and each produces a subsequence converging to $\Lambda$ in $\overline{\mathbb{R}}$: step 4.1 when $\Lambda = +\infty$, step 4.2 when $\Lambda$ is real, and step 1.4 when $\Lambda = -\infty$. So $\Lambda \in \overline{\operatorname{SL}}(x)$, which is claim 1. [step 4.1, step 4.2, step 1.4, L7]

6.1 Steps 2.3, 2.4 and 2.5 cover the three possibilities for an arbitrary $L \in \overline{\operatorname{SL}}(x)$ and give $L \le \Lambda$ in each, which is claim 2. With claim 1 this makes $\overline{\operatorname{SL}}(x)$ nonempty with greatest element $\Lambda = \limsup_k x_k$. [step 5.1, step 2.3, step 2.4, step 2.5, L2, discharge-construct] ∎

## Remarks

- **The construction uses no choice.** Both index maps are built by taking a
  *least* element ([[thm-well-ordering-principle]]) of an explicitly described
  nonempty set of naturals, so the functions $f$ and $g$ are defined outright and
  [[thm-recursion]] then produces the index map. This is the same device as in
  [[lem-peak-monotone-subsequence]], and for the same reason: a subsequence
  selected by repeated arbitrary choices would need a choice principle, and none
  is needed here.

- **Why the recursion threshold is indexed by the previous index rather than by
  the step number.** The recursion theorem produces a function of one variable, so
  the state carried from one step to the next is the index $n_j$ alone. Demanding
  $x_{n_{j+1}} > n_j$ rather than $x_{n_{j+1}} > j$ keeps that single-variable
  form, and $n_j \ge j$ ([[lem-index-map-grows]]) then upgrades the bound to the
  one actually wanted. The same trick fixes the accuracy in the finite case at
  $1/(n_j+1) \le 1/(j+1)$.

- **Claim 2 is where the $\limsup$ earns the word "greatest".** A subsequence
  cannot do better than the tail suprema allow: past any index $n$, every term of
  the sequence, and so every term of any subsequence, is at most $s_n$, and
  $\Lambda$ is the infimum of those. That is the entire content of step 2.5, and
  the strictness of the inequality $\Lambda < c$ is what gives the contradiction,
  since a limit inherits only the non-strict inequality
  ([[lem-limit-preserves-order]]).

- **Both failures of the real version really occur**, and
  [[cex-limsup-infinite-not-attained-in-r]] on the companion page is the witness:
  there $\operatorname{SL}(x)$ is nonempty with greatest element $0$ while
  $\limsup_k x_k = +\infty$.

- **The dual statement is [[cor-liminf-is-least-subsequential-limit]]**, obtained
  from this theorem by reflection rather than by repeating the construction.
````

### `thm-limsup-subadditive`

````markdown
---
id: thm-limsup-subadditive
kind: theorem
title: "$\\limsup(x_k + y_k) \\le \\limsup x_k + \\limsup y_k$ whenever the right-hand side is defined in $\\overline{\\mathbb{R}}$, and dually for $\\liminf$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-limsup-liminf, lem-limsup-exists, lem-limsup-epsilon-characterisation, lem-limsup-reflection, lem-liminf-le-limsup, thm-convergence-iff-limsup-equals-liminf, lem-extended-reals-complete, def-extended-reals, def-upper-bound, def-partial-order, def-sequence, def-divergence-to-infinity, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, lem-of-naturals-positive, lem-of-add-order, def-nat-order, thm-nat-linear-order]
justified_by: []
forward_refs: [cex-limsup-subadditivity-strict]
aliases: []
landmark: true
short: "$\\limsup$ is subadditive"
proof_strategy: direct
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
    - title: "Limit superior and limit inferior (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_superior_and_limit_inferior"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §2.3"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement

Let $(x_k)$ and $(y_k)$ be sequences of reals ([[def-sequence]]) and write
$\Lambda := \limsup_{k} x_k$, $M := \limsup_{k} y_k$
([[def-limsup-liminf]]).

1. If the sum $\Lambda + M$ is defined in $\overline{\mathbb{R}}$
   ([[def-extended-reals]]), that is if $\{\Lambda, M\} \ne \{+\infty, -\infty\}$,
   then
   $$\limsup_{k}(x_k + y_k) \;\le\; \Lambda + M .$$
2. Dually, writing $\lambda := \liminf_k x_k$ and $\mu := \liminf_k y_k$, if
   $\lambda + \mu$ is defined in $\overline{\mathbb{R}}$ then
   $$\liminf_{k}(x_k + y_k) \;\ge\; \lambda + \mu .$$

**The hypothesis is exactly the one [[def-extended-reals]] forces, and it cannot
be dropped.** When one of $\Lambda$, $M$ is $+\infty$ and the other $-\infty$ the
right-hand side is not an element of $\overline{\mathbb{R}}$ at all, so there is
nothing to compare. The inequality is genuinely an inequality: equality can fail,
and does, for an alternating pair of sequences; the failure of additivity is
recorded as a false statement among this page's examples, and the witness is a
named counterexample on the companion page.

## Facts & Assumptions

**Given:** Sequences $(x_k)$ and $(y_k)$ of reals, their termwise sum $(x_k + y_k)$, and $\Lambda := \limsup_k x_k$, $M := \limsup_k y_k$, assumed to have a sum defined in $\overline{\mathbb{R}}$.

[L1] Tail bounds and the two quantities exist in $\overline{\mathbb{R}}$ for every sequence, $s_n$ being the least upper bound of the $n$-th tail range and $\limsup$ the greatest lower bound of $\{s_n\}$ ([[lem-limsup-exists]], [[lem-extended-reals-complete]], [[def-limsup-liminf]], [[def-upper-bound]], [[def-partial-order]]).

[L2] The order on $\overline{\mathbb{R}}$ is total and transitive, $+\infty$ is its greatest element and $-\infty$ its least, and it restricts on $\mathbb{R}$ to the order of $\mathbb{R}$ ([[def-extended-reals]], [[def-partial-order]]).

[L3] Partial addition on $\overline{\mathbb{R}}$: a sum is undefined only for the pairs $(+\infty, -\infty)$ and $(-\infty, +\infty)$; a sum with one summand $+\infty$ and the other $\ne -\infty$ is $+\infty$; a sum with one summand $-\infty$ and the other $\ne +\infty$ is $-\infty$; and $-(a+b) = (-a) + (-b)$, each side defined exactly when the other is ([[def-extended-reals]]).

[L4] Epsilon characterisation for a real limit superior: $\Lambda = \limsup_k x_k$ real implies that for every real $\varepsilon > 0$ one has $x_k < \Lambda + \varepsilon$ eventually ([[lem-limsup-epsilon-characterisation]]).

[L5] $\limsup_k z_k = -\infty$ implies $z_k \to -\infty$; and $z_k \to -\infty$ implies $\limsup_k z_k = -\infty$ ([[lem-liminf-le-limsup]], [[thm-convergence-iff-limsup-equals-liminf]], [[def-divergence-to-infinity]]).

[L6] Reflection: $\limsup_k(-z_k) = -\liminf_k z_k$ and $\liminf_k(-z_k) = -\limsup_k z_k$ ([[lem-limsup-reflection]]).

[L7] Order arithmetic in $\mathbb{R}$: [[lem-of-add-order]] states the strict forms, that inequalities may be translated and added, so $a < a'$ and $b < b'$ give $a + b < a' + b'$; adjoining the case of equality, in which both sides move by the same amount, gives the nonstrict forms used below. In particular $a \le b$ if and only if $-b \le -a$: translation by $-a-b$ turns $a < b$ into $-b < -a$ and back, while $a = b$ holds exactly when $-a = -b$.

[L8] Reciprocal Archimedean property and canonical naturals: for every real $\delta > 0$ there is a natural $m \ge 1$ with $1/m < \delta$; for a natural $m \ge 1$ the element $2m$ is a natural $\ge 1$ with $(2m) \cdot 1_{\mathbb{R}} = 2\big(m \cdot 1_{\mathbb{R}}\big) > 0$, so $1/(2m) > 0$ and $1/(2m) + 1/(2m) = 1/m$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[lem-of-inverse-positive]], [[lem-of-naturals-positive]]).

[L9] Two properties each holding eventually hold together from the larger of the two thresholds on ([[def-sequence]], [[thm-nat-linear-order]], [[def-nat-order]]).

## Proof

**Proof technique:** direct.

1.1 Since $\Lambda + M$ is defined, exactly one of the following three situations holds: at least one of $\Lambda$, $M$ equals $+\infty$, and then the other is $\ne -\infty$; both are real; or neither equals $+\infty$ and at least one equals $-\infty$. Both the hypothesis and the conclusion of claim 1 are unchanged by exchanging the two sequences, so in the third situation it may be assumed that $\Lambda = -\infty$. [given, L2, L3]

2.1 In the first situation $\Lambda + M = +\infty$ by the addition table, and every element of $\overline{\mathbb{R}}$ is $\le +\infty$, so $\limsup_k(x_k + y_k) \le \Lambda + M$. [step 1.1, L2, L3]

2.2 In the second situation let $\delta > 0$ be an arbitrary real, take a natural $m \ge 1$ with $1/m < \delta$ and put $\varepsilon := 1/(2m) > 0$, so that $\varepsilon + \varepsilon = 1/m < \delta$. By [L4] there are thresholds beyond which $x_k < \Lambda + \varepsilon$ and beyond which $y_k < M + \varepsilon$; beyond the larger of them both hold, so adding the two inequalities gives $x_k + y_k < \Lambda + M + \varepsilon + \varepsilon$ for all $k \ge N$, where $N$ is that larger threshold. Hence $\Lambda + M + \varepsilon + \varepsilon$ is an upper bound of the $N$-th tail range of $(x_k + y_k)$, so the $N$-th tail supremum is $\le \Lambda + M + \varepsilon + \varepsilon$, and therefore $\limsup_k(x_k + y_k) \le \Lambda + M + \varepsilon + \varepsilon < \Lambda + M + \delta$. [step 1.1, L1, L2, L4, L7, L8, L9]

2.3 In the third situation, with $\Lambda = -\infty$, first note that there is a real $B$ with $y_k < B$ eventually: if $M$ is real, [L4] with $\varepsilon = 1$ gives $y_k < M + 1$ eventually, so $B := M + 1$ serves; and if $M = -\infty$ then $y_k \to -\infty$ by [L5], so $y_k < 0$ eventually and $B := 0$ serves. Also $\Lambda = -\infty$ gives $x_k \to -\infty$ by [L5]. Now let $c$ be an arbitrary real: since $c - B$ is real, $x_k < c - B$ eventually, and beyond the larger threshold both that and $y_k < B$ hold, so $x_k + y_k < (c - B) + B = c$ there. As $c$ was arbitrary, $x_k + y_k \to -\infty$, hence $\limsup_k(x_k + y_k) = -\infty = \Lambda + M$ by [L5] and the addition table. [step 1.1, L3, L4, L5, L7, L9]

3.1 In the second situation the conclusion follows from step 2.2: taking $\delta = 1$ shows $\limsup_k(x_k + y_k) \le \Lambda + M + 1$, a real number, so the left-hand side is not $+\infty$; if it is $-\infty$ then it is $\le \Lambda + M$ because $-\infty$ is least; and if it is a real $S$ with $S > \Lambda + M$, then $\delta_0 := S - (\Lambda + M) > 0$ and step 2.2 applied with $\delta = \delta_0$ gives $S < \Lambda + M + \delta_0 = S$, which is impossible. So $\limsup_k(x_k + y_k) \le \Lambda + M$ by totality. [step 2.2, L2, L7]

4.1 Claim 1 now holds in all three situations, by steps 2.1, 3.1 and 2.3. [step 2.1, step 3.1, step 2.3, step 1.1]

5.1 For claim 2, suppose $\lambda + \mu$ is defined. By [L6] the reflected sequences have $\limsup_k(-x_k) = -\lambda$ and $\limsup_k(-y_k) = -\mu$, and $(-\lambda) + (-\mu) = -(\lambda + \mu)$ is defined exactly when $\lambda + \mu$ is, by [L3]. Claim 1 applied to $(-x_k)$ and $(-y_k)$, whose termwise sum is $(-(x_k + y_k))$, therefore gives $-\liminf_k(x_k + y_k) = \limsup_k\big(-(x_k+y_k)\big) \le (-\lambda) + (-\mu) = -(\lambda + \mu)$; reflecting this inequality reverses it into $\liminf_k(x_k + y_k) \ge \lambda + \mu$. [step 4.1, L3, L6, L7] ∎

## Remarks

- **The three situations are not decoration.** The middle one is the analytic
  content and the outer two are genuinely different arguments: the first is
  vacuous because $+\infty$ bounds everything, and the third is a statement about
  divergence to $-\infty$ that has to be proved, since a sum of two sequences each
  running off to $-\infty$, or one running off with the other merely bounded
  above, is not covered by any algebra of limits
  ([[def-divergence-to-infinity]] forbids that).

- **Why the real supremum of a sumset is not used.** The natural one-line route,
  $s_n(x+y) \le s_n(x) + s_n(y)$ followed by a passage to the infimum, needs the
  first inequality in $\overline{\mathbb{R}}$ and then still needs an $\varepsilon$
  argument to compare $\inf_n\big(s_n(x) + s_n(y)\big)$ with
  $\Lambda + M$. The identity $\sup(S+T) = \sup S + \sup T$ of [[lem-sup-sum]]
  does not apply, since it requires both sets to be nonempty subsets of
  $\mathbb{R}$ bounded above, and a tail range of an unbounded sequence is not.
  The $\varepsilon$ argument is therefore made directly, once.

- **Both halves of the $\varepsilon$ split are reciprocals of natural numbers, not halvings in
  $\mathbb{R}$.** Choosing $m$ with $1/m < \delta$ and then working with
  $1/(2m)$ keeps every quantity a reciprocal of a canonical natural, so the only
  field facts used are that positives are invertible and that inequalities add.

- **Equality is the exception.** Without a hypothesis on one of the two
  sequences the gap can be as large as the whole oscillation, as
  [[cex-limsup-subadditivity-strict]] shows. It is standard, and neither needed
  nor proved on this page, that the inequality becomes an equality as soon as one
  of the two sequences converges to a real limit.
````

### `thm-limsup-submultiplicative`

````markdown
---
id: thm-limsup-submultiplicative
kind: theorem
title: "For bounded nonnegative sequences, $\\limsup(x_k y_k) \\le (\\limsup x_k)(\\limsup y_k)$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-limsup-liminf, lem-limsup-exists, lem-limsup-epsilon-characterisation, lem-extended-reals-complete, prop-of-multiply-inequalities, lem-of-sign-rules, def-bounded-set, def-sequence, def-extended-reals, def-upper-bound, def-partial-order, lem-of-abs-value, lem-of-add-order, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, def-nat-order, thm-nat-linear-order]
justified_by: []
forward_refs: [cex-limsup-product-strict, cex-zero-times-infinity-indeterminate]
aliases: []
landmark: false
short: "$\\limsup$ is submultiplicative"
proof_strategy: direct
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
    - title: "Limit superior and limit inferior (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_superior_and_limit_inferior"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §2.3"
      url: "https://www.jirka.org/ra/"
    - title: "N. Donaldson, Math 140A: Real Analysis notes"
      url: "https://www.math.uci.edu/~ndonalds/math140a/notes.pdf"
pipeline_run: null
---

## Statement

Let $(x_k)$ and $(y_k)$ be **bounded** sequences of reals ([[def-sequence]]) with
$x_k \ge 0$ and $y_k \ge 0$ for every $k \in \mathbb{N}$. Then
$\limsup_k x_k$, $\limsup_k y_k$ and $\limsup_k (x_k y_k)$ are **real numbers**,
all $\ge 0$, and

$$\limsup_{k} (x_k y_k) \;\le\; \Big(\limsup_{k} x_k\Big)\Big(\limsup_{k} y_k\Big).$$

**Both hypotheses are doing work.** Boundedness makes all three quantities real,
so that the product on the right is a product in the field $\mathbb{R}$ and no
extended multiplication is involved; without it the right-hand side could be an
undefined product $0 \cdot (+\infty)$ ([[def-extended-reals]]). Nonnegativity is
what lets two upper estimates be multiplied: for sequences of mixed sign the
inequality is false in the stated form, since a product of two negative numbers
is positive and the estimate would point the wrong way. Strictness is possible,
and a witness is recorded on the companion page.

## Facts & Assumptions

**Given:** Bounded sequences $(x_k)$, $(y_k)$ of reals with $x_k \ge 0$ and $y_k \ge 0$ for every $k$; their termwise product $(x_k y_k)$; and $\Lambda := \limsup_k x_k$, $M := \limsup_k y_k$, $P := \limsup_k(x_k y_k)$ ([[def-limsup-liminf]]).

[L1] Tail ranges $T_n$, extended tail suprema $s_n = \sup T_n$ and $\limsup_k z_k = \inf\{s_n\}$ all exist for every sequence; $s_n$ is the least upper bound of $T_n$ and $\limsup$ the greatest lower bound of $\{s_n\}$ ([[lem-limsup-exists]], [[lem-extended-reals-complete]], [[def-limsup-liminf]], [[def-upper-bound]], [[def-partial-order]]).

[L2] The order on $\overline{\mathbb{R}}$ is total and transitive, restricts on $\mathbb{R}$ to the order of $\mathbb{R}$, and has $+\infty$ greatest and $-\infty$ least; a member of $\overline{\mathbb{R}}$ lying between two reals is itself real ([[def-extended-reals]], [[def-partial-order]]).

[L3] Epsilon characterisation for a real limit superior: for every real $\varepsilon > 0$ one has $z_k < \limsup_k z_k + \varepsilon$ eventually ([[lem-limsup-epsilon-characterisation]]).

[L4] Boundedness of a sequence of reals: there is a real $B$ with $|z_k| \le B$ for every $k$; and $z \le |z|$ always ([[def-sequence]], [[def-bounded-set]], [[lem-of-abs-value]]).

[L5] Products of inequalities: $0 \le a \le b$ and $0 \le c \le d$ give $ac \le bd$, which [[prop-of-multiply-inequalities]] states in exactly this nonstrict form; and multiplication by a positive element preserves the order, [[lem-of-sign-rules]] stating the strict form $a < b \iff ac < bc$ and the nonstrict form following by adjoining the case $a = b$, where the two products are equal.

[L6] Order arithmetic in $\mathbb{R}$: inequalities may be added and translated, and the order is total, so exactly one of $a < b$, $a = b$, $b < a$ holds ([[lem-of-add-order]]).

[L7] Reciprocal Archimedean property: for every real $\eta > 0$ there is a natural $m \ge 1$ with $1/m < \eta$; and $0 < a \le b$ gives $0 < 1/b \le 1/a$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[lem-of-inverse-positive]]).

[L8] Two properties each holding eventually hold together from the larger of the two thresholds on, the order on $\mathbb{N}$ being total ([[def-sequence]], [[def-nat-order]], [[thm-nat-linear-order]]).

## Proof

**Proof technique:** direct.

1.1 Both sequences are bounded, so there are reals bounding $|x_k|$ and $|y_k|$; let $B$ be the larger of the two, so that $|x_k| \le B$ and $|y_k| \le B$ for every $k$, and $B \ge |x_0| \ge 0$. With $x_k \ge 0$ and $y_k \ge 0$ this gives $0 \le x_k \le B$ and $0 \le y_k \le B$ for every $k$, hence $0 \le x_k y_k \le B \cdot B$ by [L5]. [given, L4, L5, L6]

2.1 Each of $\Lambda$, $M$, $P$ is a real number $\ge 0$. Indeed, for every $n$ the real $B$ is an upper bound of the $n$-th tail range of $(x_k)$, so $s_n \le B$ and hence $\Lambda \le s_0 \le B$; and $s_n \ge x_n \ge 0$ for every $n$, so $0$ is a lower bound of $\{s_n\}$ and $0 \le \Lambda$. Being between the reals $0$ and $B$, the element $\Lambda$ is real. The same argument gives $0 \le M \le B$, and, using the bound $B \cdot B$ from step 1.1, $0 \le P \le B \cdot B$. [step 1.1, L1, L2]

3.1 Let $\delta > 0$ be an arbitrary real and put $C := \Lambda + M + 1$, a real with $C \ge 1 > 0$. Take a natural $m_1 \ge 1$ with $1/m_1 < 1$ and a natural $m_2 \ge 1$ with $1/m_2 < \delta/C$, let $m$ be the larger of $m_1$ and $m_2$, and set $\varepsilon := 1/m$, so that $0 < \varepsilon < 1$ and $\varepsilon C < \delta$. By [L3] there are thresholds beyond which $x_k < \Lambda + \varepsilon$ and beyond which $y_k < M + \varepsilon$; let $N$ be the larger. For $k \ge N$ we have $0 \le x_k \le \Lambda + \varepsilon$ and $0 \le y_k \le M + \varepsilon$, so $x_k y_k \le (\Lambda + \varepsilon)(M + \varepsilon) = \Lambda M + \varepsilon(\Lambda + M + \varepsilon) \le \Lambda M + \varepsilon C < \Lambda M + \delta$, the middle step because $\Lambda + M + \varepsilon \le C$ and $\varepsilon > 0$. Hence $\Lambda M + \varepsilon C$ is an upper bound of the $N$-th tail range of $(x_k y_k)$, so $P \le \Lambda M + \varepsilon C < \Lambda M + \delta$. [step 2.1, L1, L3, L5, L6, L7, L8, algebra]

4.1 Suppose $P > \Lambda M$. Both are real by step 2.1, so $\delta_0 := P - \Lambda M > 0$, and step 3.1 applied with $\delta = \delta_0$ gives $P < \Lambda M + \delta_0 = P$, which is impossible. By totality $P \le \Lambda M$, which is the asserted inequality. [step 3.1, step 2.1, L2, L6] ∎

## Remarks

- **The estimate is the product of two one-sided estimates, and that is why
  nonnegativity is needed.** Step 3.1 multiplies $x_k \le \Lambda + \varepsilon$
  by $y_k \le M + \varepsilon$, which is legitimate only when all four quantities
  are $\ge 0$ ([[prop-of-multiply-inequalities]]). For sequences of mixed sign the
  same two estimates say nothing about the product; the correct general statement
  in that setting involves absolute values and is not needed on this page.

- **The error term is linear in $\varepsilon$ with a fixed coefficient.**
  Expanding gives $\varepsilon(\Lambda + M + \varepsilon)$, and restricting to
  $\varepsilon < 1$ replaces the varying coefficient by the constant
  $C = \Lambda + M + 1$, after which one choice of $\varepsilon$ makes the whole
  error smaller than the prescribed $\delta$. Both restrictions on $\varepsilon$
  are met at once by taking the larger of two Archimedean choices.

- **The inequality is strict for some bounded nonnegative pairs**, and
  [[cex-limsup-product-strict]] on the companion page is the witness: there the
  product sequence is identically $0$ while the right-hand side is $4$.

- **The bounded hypothesis is not merely for convenience.** Without it $\Lambda$
  could be $+\infty$ and $M$ could be $0$, and then the right-hand side is not an
  element of $\overline{\mathbb{R}}$ at all ([[def-extended-reals]]); the
  behaviour of the products in that situation really is unconstrained, as
  [[cex-zero-times-infinity-indeterminate]] shows.
````

