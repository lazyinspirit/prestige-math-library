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

## Target item — `def-extended-limits`

Normalized current SHA-256: `70af75662503afb364a5caa38d66387bb2db599608bd46fb777af05d9d7ebef4`

The complete current item follows, including frontmatter:

````markdown
---
id: def-extended-limits
kind: definition
title: "Convergence in $\\overline{\\mathbb{R}}$ and the extended subsequential limit set: $L \\in \\overline{\\mathbb{R}}$ is an extended subsequential limit when some subsequence converges to $L$, or diverges to $L = \\pm\\infty$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-extended-reals, def-sequence, def-real-limit, def-divergence-to-infinity, def-subsequential-limit, lem-limit-unique]
justified_by: []
forward_refs: [cex-limsup-infinite-not-attained-in-r]
aliases: []
landmark: false
short: "$\\overline{\\operatorname{SL}}(x)$"
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
    - title: "Subsequential limit (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subsequential_limit"
    - title: "Limit superior and limit inferior (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_superior_and_limit_inferior"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.15 to 3.17)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "N. Donaldson, Math 140A: Real Analysis notes"
      url: "https://www.math.uci.edu/~ndonalds/math140a/notes.pdf"
pipeline_run: null
---

## Definition

Let $(x_k)$ be a sequence of reals ([[def-sequence]]) and let
$L \in \overline{\mathbb{R}}$ ([[def-extended-reals]]). Say that $(x_k)$
**converges to $L$ in $\overline{\mathbb{R}}$** when one of the following holds,
according to which of the three kinds of element $L$ is:

- $L \in \mathbb{R}$ and $(x_k)$ converges to $L$ in the sense of [[def-real-limit]];
- $L = +\infty$ and $x_k \to +\infty$ in the sense of [[def-divergence-to-infinity]];
- $L = -\infty$ and $x_k \to -\infty$ in the sense of [[def-divergence-to-infinity]].

Then $L$ is an **extended subsequential limit** of $(x_k)$ when some subsequence
of $(x_k)$ converges to $L$ in $\overline{\mathbb{R}}$: when there is a strictly
increasing $n : \mathbb{N} \to \mathbb{N}$ ([[def-sequence]]) such that
$(x_{n_j})_{j \in \mathbb{N}}$ converges to $L$ in the sense just given. The
**extended subsequential limit set** of $(x_k)$ is

$$\overline{\operatorname{SL}}(x) \;:=\; \{\, L \in \overline{\mathbb{R}} : L \text{ is an extended subsequential limit of } (x_k) \,\} \subseteq \overline{\mathbb{R}}.$$

**This extends the published [[def-subsequential-limit]] and does not replace
it.** That definition is finite by design: there $L$ ranges over $\mathbb{R}$ and
$\operatorname{SL}(x) \subseteq \mathbb{R}$. Its clause is quoted verbatim as the
first of the three clauses above, so

$$\overline{\operatorname{SL}}(x) \cap \mathbb{R} = \operatorname{SL}(x),$$

immediately from the definitions: a real $L$ lies in
$\overline{\operatorname{SL}}(x)$ exactly when some subsequence converges to $L$
in the sense of [[def-real-limit]], which is exactly the condition
$L \in \operatorname{SL}(x)$. The extended set is therefore
$\operatorname{SL}(x)$ together with at most the two extra points $\pm\infty$,
each present exactly when some subsequence diverges to it. Nothing about
$\operatorname{SL}(x)$ is redefined, and every statement proved about
$\operatorname{SL}(x)$ elsewhere in the library remains a statement about the
same set.

**Neither is [[def-divergence-to-infinity]] reinterpreted.** The phrase
"$x_k \to +\infty$" keeps exactly the meaning fixed there, an abbreviation for
"for every real $M$, eventually $x_k > M$". What is new is only that the phrase
is now allowed to appear as one of three clauses in a single definition whose
parameter $L$ ranges over $\overline{\mathbb{R}}$, so that the three situations
can be quantified over together. In particular the warning recorded there stands:
a sequence diverging to $+\infty$ has no limit in $\mathbb{R}$, and none of the
rules of [[thm-algebra-of-limits]] applies to it.

## Remarks

- **An extended limit is unique.** Suppose $(x_k)$ converges to $L$ and to $L'$ in
  $\overline{\mathbb{R}}$. If both are real, $L = L'$ by uniqueness of real limits
  ([[lem-limit-unique]]). If one is real and the other is $\pm\infty$, that is
  impossible, because a sequence diverging to $\pm\infty$ is unbounded and so does
  not converge, as [[def-divergence-to-infinity]] records. If $L = +\infty$ and
  $L' = -\infty$ then, taking $M = 0$ in both conditions, there are $K$ and $K'$
  with $x_k > 0$ for $k \ge K$ and $x_k < 0$ for $k \ge K'$; any index at least as
  large as both gives $0 < x_k < 0$, which is impossible. So the three clauses are
  mutually exclusive and each determines $L$.

- **Why the extended set is the right object for a $\limsup$ theorem.** The
  greatest subsequential limit of an arbitrary real sequence need not be a real
  number: the sequence that alternates between $0$ and larger and larger values
  has $\operatorname{SL}(x) = \{0\}$, whose greatest element is $0$, while the
  behaviour that dominates it is a subsequence running off to $+\infty$. That is
  exactly the content of [[cex-limsup-infinite-not-attained-in-r]], and it is why
  [[thm-limsup-is-greatest-subsequential-limit]] is stated for
  $\overline{\operatorname{SL}}(x)$ rather than for $\operatorname{SL}(x)$.

- **A tail changes nothing.** A strictly increasing index map satisfies
  $n_j \ge j$ ([[lem-index-map-grows]]), so all three clauses depend only on the
  behaviour of $(x_k)$ at arbitrarily large indices, and a sequence and each of
  its tails have the same extended subsequential limit set. This is the same
  observation made for $\operatorname{SL}(x)$ in [[def-subsequential-limit]], with
  the two divergence clauses added.
````

## Proof contract for the target

No proof contract is required for this non-proof-bearing item.

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "def-extended-limits",
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
    "source": "def-extended-limits",
    "sourcePage": "limsup-and-subsequential-limits",
    "batch": "wave6-real-analysis-limits",
    "target": "def-sequence",
    "declared_target": "def-sequence",
    "target_statement_provenance": "ai-altered",
    "targetPage": "sequences-and-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "def-extended-limits",
    "sourcePage": "limsup-and-subsequential-limits",
    "batch": "wave6-real-analysis-limits",
    "target": "def-real-limit",
    "declared_target": "def-real-limit",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "def-extended-limits",
    "sourcePage": "limsup-and-subsequential-limits",
    "batch": "wave6-real-analysis-limits",
    "target": "def-divergence-to-infinity",
    "declared_target": "def-divergence-to-infinity",
    "target_statement_provenance": "ai-altered",
    "targetPage": "sequences-and-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "def-extended-limits",
    "sourcePage": "limsup-and-subsequential-limits",
    "batch": "wave6-real-analysis-limits",
    "target": "def-subsequential-limit",
    "declared_target": "def-subsequential-limit",
    "target_statement_provenance": "literature-derived",
    "targetPage": "monotone-sequences-and-cauchy-completeness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "def-extended-limits",
    "sourcePage": "limsup-and-subsequential-limits",
    "batch": "wave6-real-analysis-limits",
    "target": "lem-limit-unique",
    "declared_target": "lem-limit-unique",
    "target_statement_provenance": "literature-derived",
    "targetPage": "sequences-and-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "def-extended-limits",
    "sourcePage": "limsup-and-subsequential-limits",
    "batch": "wave6-real-analysis-limits",
    "target": "cex-limsup-infinite-not-attained-in-r",
    "declared_target": "cex-limsup-infinite-not-attained-in-r",
    "target_statement_provenance": null,
    "targetPage": "limsup-and-subsequential-limits-examples",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "forward_ref",
    "kind": "forward",
    "requires_semantic_audit": true
  }
]
```

## Full text of every cited or declared item (10)

### `cex-limsup-infinite-not-attained-in-r`

````markdown
---
id: cex-limsup-infinite-not-attained-in-r
kind: counterexample
title: "A sequence with $\\limsup = +\\infty$: the greatest subsequential limit exists only in $\\overline{\\mathbb{R}}$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-limsup-liminf, thm-limsup-is-greatest-subsequential-limit, def-extended-reals, def-extended-limits, def-subsequential-limit, def-divergence-to-infinity, lem-alternating-sequence, lem-index-map-grows, lem-limsup-exists, lem-extended-reals-complete, lem-convergent-implies-bounded, lem-limit-unique, lem-limit-of-tail, thm-of-archimedean, lem-of-naturals-positive, lem-of-abs-value, def-abs-value, def-upper-bound, def-partial-order, def-sequence, def-real-limit, cor-of-one-positive, lem-of-add-order, def-nat-order, thm-nat-linear-order, def-ordered-field, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Limit superior and limit inferior (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_superior_and_limit_inferior"
    - title: "Subsequential limit (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subsequential_limit"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement refuted

That [[thm-limsup-is-greatest-subsequential-limit]] can be stated inside
$\mathbb{R}$: that for every sequence $(x_k)$ of reals the set
$\operatorname{SL}(x)$ of *real* subsequential limits ([[def-subsequential-limit]])
has a greatest element and that element is $\limsup_k x_k$.

The witness below has a nonempty $\operatorname{SL}(x)$ with a greatest element,
so the failure is not that the real set is empty: it is that the greatest element
of $\operatorname{SL}(x)$ is $0$ while $\limsup_k x_k = +\infty$. The dominant
behaviour of the sequence is invisible to $\operatorname{SL}(x)$ and is recorded
only by $\overline{\operatorname{SL}}(x)$ ([[def-extended-limits]]).

## Facts & Assumptions

**Given:** The alternating sequence $(s_k)$ and the index maps $e, o$ of [[lem-alternating-sequence]]; the canonical naturals $\iota(k) = k \cdot 1_{\mathbb{R}}$ with $\iota(0) = 0$; and the sequence $x_k := \iota(k)$ when $s_k = 1$ and $x_k := 0$ when $s_k = -1$.

[L1] The alternating sequence: $|s_k| = 1$, $s_{e_j} = 1$, $s_{o_j} = -1$, and $e$, $o$ are strictly increasing, so $e_j \ge j$ and $o_j \ge j$ ([[lem-alternating-sequence]], [[lem-index-map-grows]]).

[L2] Limit superior in $\overline{\mathbb{R}}$: existence for every sequence, the tail supremum being the least upper bound of the tail range and $\limsup$ the greatest lower bound of the family of tail suprema ([[def-limsup-liminf]], [[lem-limsup-exists]], [[lem-extended-reals-complete]], [[def-upper-bound]], [[def-partial-order]], [[def-sequence]]).

[L3] The order on $\overline{\mathbb{R}}$ is total, $+\infty$ is greatest, every real is $< +\infty$ and $> -\infty$, and the order restricts on $\mathbb{R}$ to the order of $\mathbb{R}$ ([[def-extended-reals]]).

[L4] Extended subsequential limits and convergence in $\overline{\mathbb{R}}$; divergence to $+\infty$ means that for every real $M$ one has $x_k > M$ eventually ([[def-extended-limits]], [[def-divergence-to-infinity]], [[def-subsequential-limit]], [[def-real-limit]]).

[L5] Canonical naturals: $\iota$ is strictly increasing with $\iota(k) \ge 0$, and for every real $M$ there is a natural $p \ge 1$ with $M < \iota(p)$ ([[lem-of-naturals-positive]], [[thm-of-archimedean]]).

[L6] A convergent sequence of reals is bounded, a limit is unique, and a sequence agreeing with a constant from some index on converges to that constant ([[lem-convergent-implies-bounded]], [[lem-limit-unique]], [[lem-limit-of-tail]], [[def-sequence]]).

[L7] Absolute value and order: $|t| = 1$ forces $t = 1$ or $t = -1$; $0 < 1$; the order on $\mathbb{N}$ is total ([[lem-of-abs-value]], [[def-abs-value]], [[cor-of-one-positive]], [[lem-of-add-order]], [[def-nat-order]], [[thm-nat-linear-order]], [[def-ordered-field]], [[def-complete-ordered-field]]).

## Counterexample

**Proof technique:** direct.

1.1 Each $s_k$ is $1$ or $-1$, so $(x_k)$ is a well-defined sequence of reals with $x_k \ge 0$ for every $k$; moreover $x_{e_j} = \iota(e_j)$ and $x_{o_j} = 0$ for every $j$. [given, L1, L5, L7]

1.2 The subsequence along $o$ is constantly $0$, and $o$ is strictly increasing, so $0 \in \operatorname{SL}(x)$. [given, L1, L4, L6]

2.1 For every $n \in \mathbb{N}$ the tail supremum $\sup T_n(x)$ is $+\infty$. Given a real $M$, take a natural $p \ge 1$ with $M < \iota(p)$ and an index $j$ at least as large as both $n$ and $p$; then $e_j \ge j \ge n$, so $x_{e_j} = \iota(e_j) \in T_n(x)$, and $e_j \ge j \ge p$ gives $\iota(e_j) \ge \iota(p) > M$. So no real number bounds $T_n(x)$ above, and the least upper bound in $\overline{\mathbb{R}}$ must be $+\infty$. [step 1.1, L1, L2, L3, L5, L7]

3.1 Every real subsequential limit of $(x_k)$ equals $0$. Let $n$ be strictly increasing with $x_{n_i} \to L \in \mathbb{R}$; the subsequence is then bounded, say $|x_{n_i}| \le B$ for every $i$. Suppose $s_{n_i} = 1$ for arbitrarily large $i$: taking a natural $p \ge 1$ with $B < \iota(p)$ and such an index $i \ge p$, we get $x_{n_i} = \iota(n_i) \ge \iota(i) \ge \iota(p) > B$, contradicting the bound. So there is $I$ with $s_{n_i} = -1$, hence $x_{n_i} = 0$, for every $i \ge I$; a sequence equal to $0$ from an index on converges to $0$, so $L = 0$ by uniqueness of limits. [step 1.1, step 2.1, L1, L4, L5, L6, L7]

4.1 Consequently $\limsup_k x_k$ is the greatest lower bound of the family $\{+\infty\}$, namely $+\infty$, while $\operatorname{SL}(x) = \{0\}$ by steps 1.2 and 3.1, whose greatest element is the real number $0$. Since $0 \ne +\infty$, the refuted claim fails for this sequence. [step 2.1, step 1.2, step 3.1, L2, L3] ∎

## Remarks

- **What the extended set records.** By [[thm-limsup-is-greatest-subsequential-limit]] the element $\limsup_k x_k = +\infty$ lies in $\overline{\operatorname{SL}}(x)$ and is its greatest element, so $\overline{\operatorname{SL}}(x) = \{0, +\infty\}$: the value $-\infty$ is excluded because $x_k \ge 0$ for every $k$, so no subsequence can be eventually below a negative real. The real set $\operatorname{SL}(x) = \{0\}$ is exactly the finite part of it, as [[def-extended-limits]] says it must be.

- **Why the theorem cannot simply be restricted to bounded sequences.** For a bounded sequence $\limsup$ is real and the two statements agree; the point of stating [[thm-limsup-is-greatest-subsequential-limit]] in $\overline{\mathbb{R}}$ is that it then holds for *every* sequence, with no hypothesis to check, and this witness shows the hypothesis-free version is strictly stronger.

- **A simpler witness would prove less.** The sequence $x_k = \iota(k)$ has $\operatorname{SL}(x) = \emptyset$, so the refuted claim fails there only because an empty set has no greatest element. Interleaving with $0$ makes $\operatorname{SL}(x)$ nonempty with a greatest element, so the claim fails for the substantive reason: the greatest real subsequential limit is not the limit superior.
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

### `def-real-limit`

````markdown
---
id: def-real-limit
kind: definition
title: "Limits and Cauchy sequences of reals"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-real-numbers, def-real-order]
aliases: []
verification:
  precheck: n/a
  audited: 2026-07-24
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §6.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Cauchy sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
pipeline_run: null
---

## Definition

A sequence $(x_k)$ of reals **converges** to $x \in \mathbb{R}$ when for
every rational $\varepsilon > 0$ there is $K$ with
$|x_k - x| < \hat\varepsilon$ for all $k \ge K$. It is **Cauchy** when for
every rational $\varepsilon > 0$ there is $K$ with
$|x_k - x_l| < \hat\varepsilon$ for all $k, l \ge K$.

## Remarks

- Quantifying over rational $\varepsilon$ loses nothing: below any real
  $\varepsilon > 0$ lies a positive rational ([[lem-rat-embeds-dense]]).
- $|\cdot|$ is the absolute value of [[def-real-order]].
````

### `def-sequence`

````markdown
---
id: def-sequence
kind: definition
title: "Sequences of reals: bounded, eventually, frequently, tails, subsequences"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-real-numbers, def-natural-numbers, def-nat-order, def-real-limit, def-real-order, def-complete-ordered-field, lem-rat-embeds-dense]
justified_by: []
aliases: []
landmark: true
short: "$(x_k)$, bounded, eventually, subsequence"
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
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis, Ch. 3"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch3.pdf"
    - title: "CMU 21-269 notes, Compactness — subsequences"
      url: "https://www.math.cmu.edu/~gautam/c/2026-269/notes/compactness.html"
    - title: "Sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sequence"
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "Subsequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subsequence"
    - title: "T. Tao, Analysis I, 3rd ed., §6.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

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

## Remarks

- **Identification of $\mathbb{Q}$ with its image.** The map $q \mapsto \hat q$
  is an embedding of ordered fields ([[lem-rat-embeds-dense]]), and as is
  standard we write $q$ for $\hat q$, so that a rational may be compared with a
  real without further comment. [[def-real-limit]] is stated with the hat; every
  rational $\varepsilon$ occurring on this page is its image under this
  embedding.

- **Rational and real $\varepsilon$ agree.** [[def-real-limit]] tests convergence
  against every *rational* $\varepsilon > 0$, and its own remark records that
  this loses nothing. Spelled out: suppose that for every rational
  $\varepsilon > 0$ there is $K$ with $|x_k - x| < \varepsilon$ for all
  $k \ge K$, and let $\eta > 0$ be an arbitrary *real*. Since $0 < \eta$,
  density of $\mathbb{Q}$ in $\mathbb{R}$ ([[lem-rat-embeds-dense]]) supplies a
  rational $\varepsilon$ with $0 < \varepsilon < \eta$, and the index $K$
  belonging to that $\varepsilon$ satisfies $|x_k - x| < \varepsilon < \eta$ for
  all $k \ge K$. The converse implication is immediate, since every positive
  rational is a positive real. So the two formulations define the same relation,
  and the same two lines apply verbatim to the Cauchy condition and to any
  condition of the shape "for every $\varepsilon > 0$, eventually
  $\cdots < \varepsilon$". Proofs on this page therefore run the test with a real
  $\varepsilon$ wherever that is more convenient, and say so by citing this
  remark; nothing is smuggled in.

- **Constant sequences converge.** For $c \in \mathbb{R}$ the constant sequence
  $x_k := c$ converges to $c$, because $|x_k - c| = |0| = 0 < \varepsilon$ for
  every $\varepsilon > 0$ and every $k$; it is bounded by $|c|$.

- **Eventually and frequently are dual.** $P$ holds frequently exactly when
  $\lnot P$ does not hold eventually, and $P$ holds eventually exactly when
  $\lnot P$ does not hold frequently. So the two quantifier patterns are
  negations of one another applied to the complementary property, and there is no
  third pattern hiding between them.

- **A sequence is not its range.** $(x_k)$ is a function, not a set, and the
  range does not determine the function: the sequence $x_0 = 0$, $x_k = 1$ for
  $k \ge 1$ and the sequence $y_0 = y_1 = 0$, $y_k = 1$ for $k \ge 2$ have the
  same range $\{0, 1\}$, yet they differ at $k = 1$, so they are different
  sequences. Order and repetition are part of the data and the range forgets
  both. Boundedness, on the other hand, depends only on the range.

- **Indexing.** Sequences here start at $k = 0$ because $\mathbb{N}$ contains
  $0$ ([[def-natural-numbers]]). Texts that index from $1$ describe the same
  objects up to a shift, and the shift changes nothing about convergence, by
  [[lem-limit-of-tail]].
````

### `def-subsequential-limit`

````markdown
---
id: def-subsequential-limit
kind: definition
title: "Subsequential limit of a real sequence, and the subsequential limit set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-sequence, def-real-limit, lem-index-map-grows]
justified_by: []
forward_refs: [ex-two-subsequential-limits, cex-unbounded-with-convergent-subsequence]
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
    - title: "Subsequential limit (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subsequential_limit"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (Def. 3.5, subsequential limits)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.6"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
---

## Definition

Let $(x_k)$ be a sequence of reals ([[def-sequence]]) and let $L \in \mathbb{R}$.
Then $L$ is a **subsequential limit** of $(x_k)$ when some subsequence of $(x_k)$
converges to $L$: that is, when there is a strictly increasing
$n : \mathbb{N} \to \mathbb{N}$ such that

$$x_{n_j} \longrightarrow L \qquad (j \to \infty)$$

in the sense of [[def-real-limit]]. The **subsequential limit set** of $(x_k)$ is

$$\operatorname{SL}(x) \;:=\; \{\, L \in \mathbb{R} : L \text{ is a subsequential limit of } (x_k) \,\} \subseteq \mathbb{R}.$$

Both pieces of the definition are already fixed elsewhere and are only combined
here: *strictly increasing* and *subsequence* are [[def-sequence]], and
*converges* is [[def-real-limit]]. Nothing about $(x_k)$ itself is assumed; in
particular $(x_k)$ is not assumed to converge, and $\operatorname{SL}(x)$ may be
empty, a single point, or larger.

**A subsequence looks arbitrarily far out.** A strictly increasing index map
satisfies $n_j \ge j$ for every $j$ ([[lem-index-map-grows]]), so the indices
$n_j$ are cofinal in $\mathbb{N}$ and a subsequential limit is determined by the
behaviour of $(x_k)$ at arbitrarily large indices. Consequently no finite
initial segment of $(x_k)$ affects $\operatorname{SL}(x)$: a sequence and each of
its tails have the same subsequential limits.

**Terminology.** Some texts say *cluster point*, *limit point* or *accumulation
value* of the sequence for the same notion. This library says *subsequential
limit* throughout, reserving *limit point* for the topological notion of a limit
point of a set, which is a different thing: the set $\{x_k\}$ of values of the
constant sequence $x_k = 0$ has no limit point, while $0$ is a subsequential
limit of that sequence.

## Remarks

- **A convergent sequence has exactly one subsequential limit, its limit.** If
  $x_k \to x$ then every subsequence converges to $x$
  ([[lem-subsequence-inherits-limit]]), so every subsequential limit equals $x$
  by uniqueness of limits ([[lem-limit-unique]]); and $x$ itself is one, taking
  $n_j = j$, which is strictly increasing. So $\operatorname{SL}(x) = \{x\}$. The
  converse fails: $\operatorname{SL}$ being a single point does not force
  convergence, as the unbounded sequence of
  [[cex-unbounded-with-convergent-subsequence]] shows.

- **The subsequential limit set can be empty.** The sequence $x_k = k$ has no
  subsequential limit at all, since every subsequence is unbounded and an
  unbounded sequence does not converge ([[lem-convergent-implies-bounded]]).
  Bolzano-Weierstrass ([[thm-bolzano-weierstrass]]) says exactly that
  boundedness is what rules this out: for a bounded sequence,
  $\operatorname{SL}(x) \ne \emptyset$.

- **It can also be large.** The alternating sequence of
  [[lem-alternating-sequence]] has subsequential limit set $\{-1, 1\}$, and
  [[ex-two-subsequential-limits]] carries out that computation for a sequence
  that converges to neither. The systematic study of $\operatorname{SL}(x)$, in
  particular that it has a greatest and a least element for a bounded sequence,
  belongs to the $\limsup$ page and is not begun here.
````

### `lem-index-map-grows`

````markdown
---
id: lem-index-map-grows
kind: lemma
title: "A strictly increasing index map satisfies $n_k \\ge k$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-sequence, thm-induction-principle, lem-nat-discrete, def-nat-order, def-nat-addition, lem-nat-add-identity, lem-nat-successor-neq-self, thm-nat-linear-order, lem-nat-trichotomy]
justified_by: []
aliases: []
landmark: false
short: "$n_k\\ge k$"
proof_strategy: induction
verification:
  precheck: pass
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
    - title: "CMU 21-269 notes, Compactness — subsequences"
      url: "https://www.math.cmu.edu/~gautam/c/2026-269/notes/compactness.html"
    - title: "University of Wisconsin Math 521, Homework 5"
      url: "https://people.math.wisc.edu/~angenent/521.2016s/index.html"
    - title: "Subsequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subsequence"
    - title: "Mathematical induction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mathematical_induction"
    - title: "T. Tao, Analysis I, 3rd ed., §6.6"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $n : \mathbb{N} \to \mathbb{N}$ be a function, written $k \mapsto n_k$, and
recall that $n$ is **strictly increasing** when $n_j < n_k$ whenever $j < k$
([[def-sequence]], [[def-nat-order]]).

1. **Consecutive comparisons suffice.** If $n_i < n_{\sigma(i)}$ for every
   $i \in \mathbb{N}$, then $n$ is strictly increasing.
2. **Growth.** If $n$ is strictly increasing then $n_k \ge k$ for every
   $k \in \mathbb{N}$.

Claim 1 is what one checks in practice when exhibiting a subsequence; claim 2 is
what every later subsequence argument uses.

## Facts & Assumptions

**Given:** A function $n : \mathbb{N} \to \mathbb{N}$, written $k \mapsto n_k$, with $\sigma$ the successor and the order of [[def-nat-order]]; claim 1 is proved under the standing assumption that $n_i < n_{\sigma(i)}$ for every $i$, and claim 2 under the standing assumption that $n$ is strictly increasing ([[def-sequence]]).

[A1] $Q(k)$ denotes the statement: $n_j < n_k$ for every $j < k$.

[A2] $P(k)$ denotes the statement: $n_k \ge k$.

[L1] Order and successor on $\mathbb{N}$: $m \le p$ means $m + i = p$ for some $i$, so $0 \le m$ for every $m$ because $0 + m = m$; and $\sigma(k) = k + 1$ with $\sigma(k) \ne k$, so $k < \sigma(k)$ ([[def-nat-order]], [[def-nat-addition]], [[lem-nat-add-identity]], [[lem-nat-successor-neq-self]]).

[L2] Discreteness: $m < p$ if and only if $\sigma(m) \le p$ ([[lem-nat-discrete]]).

[L3] Induction principle: if $R(0)$ holds and $R(k)$ implies $R(\sigma(k))$ for every $k$, then $R(k)$ holds for every $k \in \mathbb{N}$ ([[thm-induction-principle]]).

[L4] The order on $\mathbb{N}$ is reflexive, antisymmetric, transitive and total, and satisfies trichotomy ([[thm-nat-linear-order]], [[lem-nat-trichotomy]]).

## Proof

**Proof technique:** induction.

1.1 Base case for claim 1: $Q(0)$ holds vacuously, since no $j$ satisfies $j < 0$; indeed $0 \le j$ always holds, and $j < 0$ together with $0 \le j$ would contradict antisymmetry. [base, A1, L1, L4]

1.2 Inductive hypothesis for claim 1: fix $k \in \mathbb{N}$ and assume $Q(k)$, that is $n_j < n_k$ for every $j < k$. [ih, A1]

1.3 Base case for claim 2: $P(0)$ states $n_0 \ge 0$, which holds because $0 \le m$ for every natural $m$. [base, A2, L1]

1.4 Inductive hypothesis for claim 2: fix $k \in \mathbb{N}$ and assume $P(k)$, that is $k \le n_k$. [ih, A2]

2.1 Inductive step for claim 1: let $j < \sigma(k)$. By trichotomy either $k < j$, or $j = k$, or $j < k$. The case $k < j$ is impossible, since it gives $\sigma(k) \le j$ by [L2], which together with $j < \sigma(k)$ contradicts antisymmetry. If $j = k$ then $n_j = n_k < n_{\sigma(k)}$ by the standing assumption. If $j < k$ then $n_j < n_k$ by step 1.2 and $n_k < n_{\sigma(k)}$ by the standing assumption, so $n_j < n_{\sigma(k)}$ by transitivity. In every admissible case $n_j < n_{\sigma(k)}$, so $Q(\sigma(k))$ holds. [step 1.2, A1, L2, L4]

2.2 Inductive step for claim 2: $k < \sigma(k)$ by [L1], so strict increase gives $n_k < n_{\sigma(k)}$; combined with $k \le n_k$ from step 1.4 this yields $k < n_{\sigma(k)}$, hence $\sigma(k) \le n_{\sigma(k)}$ by [L2], which is $P(\sigma(k))$. [step 1.4, A2, L1, L2, L4]

3.1 Both inductions are complete, so by the induction principle $Q(k)$ holds for every $k$, which is claim 1, and $P(k)$ holds for every $k$, which is claim 2. [step 1.1, step 1.3, step 2.1, step 2.2, L3, discharge-induction] ∎

## Remarks

- Claim 2 is sharp: the identity map $n_k = k$ is strictly increasing with $n_k = k$ throughout, so no better bound than $n_k \ge k$ holds for all strictly increasing index maps.

- Claim 2 is exactly what makes a subsequence inherit a limit ([[lem-subsequence-inherits-limit]]): a threshold $K$ that works for the original sequence works unchanged for the subsequence, because $n_k \ge k \ge K$ whenever $k \ge K$.

- Nothing here is about $\mathbb{R}$; both claims are about $(\mathbb{N}, \le, \sigma)$ alone. Both are proved **by induction** ([L3]), and that is the method, not an order property. Claim 2 needs three order facts on top of the induction: that $0$ is least, which is what makes its base case $n_0 \ge 0$ true ([L1], step 1.3); discreteness ([[lem-nat-discrete]], [L2]), which upgrades $k < n_{\sigma(k)}$ to $\sigma(k) \le n_{\sigma(k)}$ (step 2.2); and transitivity in its mixed form, which composes $k \le n_k$ with $n_k < n_{\sigma(k)}$ into $k < n_{\sigma(k)}$ ([L4], step 2.2). Claim 1 additionally uses trichotomy and antisymmetry ([L4]).

- Of those three, neither the least element nor discreteness may be dropped. Discreteness alone is not enough: $(\mathbb{Z}, \le)$ is discrete in the same sense, $m < p$ iff $m + 1 \le p$, yet $k \mapsto k - 1$ is strictly increasing on $\mathbb{Z}$ with $n_k < k$ everywhere. What $\mathbb{Z}$ lacks is a least element to anchor the induction. A least element alone is not enough either, which is what fails over $\mathbb{Q}$: on the nonnegative rationals $x \mapsto x/2$ is strictly increasing and fixes the least element $0$, but $x/2 < x$ at every positive rational.
````

### `lem-limit-unique`

````markdown
---
id: lem-limit-unique
kind: lemma
title: "A sequence has at most one limit"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-real-limit, def-sequence, thm-of-archimedean, lem-of-triangle-inequality, lem-of-abs-value, lem-rat-embeds-dense, lem-of-inverse-positive, lem-of-add-order, lem-of-sign-rules, cor-of-one-positive, thm-nat-linear-order, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "limits are unique"
proof_strategy: contradiction
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis, Ch. 3"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch3.pdf"
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "T. Tao, Analysis I, 3rd ed., §6.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(x_k)$ be a sequence of reals ([[def-sequence]]) and let $x, y \in
\mathbb{R}$. If $(x_k)$ converges to $x$ and $(x_k)$ converges to $y$
([[def-real-limit]]), then $x = y$. A sequence therefore has at most one limit,
and when a limit exists it may be denoted $\lim_{k} x_k$.

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals and reals $x, y$ such that $(x_k)$ converges to $x$ and $(x_k)$ converges to $y$ ([[def-sequence]], [[def-real-limit]]).

[L1] Convergence: $(x_k)$ converges to $z$ when for every rational $\varepsilon > 0$ there is $K \in \mathbb{N}$ with $|x_k - z| < \varepsilon$ for all $k \ge K$ ([[def-real-limit]]).

[L2] Triangle inequality: $|a + b| \le |a| + |b|$ in any ordered field, in particular in $\mathbb{R}$ ([[lem-of-triangle-inequality]], [[def-complete-ordered-field]]).

[L3] Absolute value: $|u| \ge 0$, and $|u| = 0$ if and only if $u = 0$, and $|-u| = |u|$ ([[lem-of-abs-value]]).

[L4] Small rationals: for every real $\eta > 0$ there is a rational $\varepsilon$ with $0 < \varepsilon < \eta$. Either route gives this: density of $\mathbb{Q}$ in $\mathbb{R}$ ([[lem-rat-embeds-dense]]) applied to the pair $0 < \eta$; or the Archimedean property ([[thm-of-archimedean]]) applied to $1/\eta$, which yields a natural $n \ge 1$ with $1/\eta < n$ and hence $0 < 1/n < \eta$ ([[lem-of-inverse-positive]]).

[L5] Order arithmetic in $\mathbb{R}$. Trichotomy, so $u \ne 0$ together with $|u| \ge 0$ and $|u| \ne 0$ forces $|u| > 0$; transitivity and irreflexivity of $<$; and, since $u \le v$ means $u < v$ or $u = v$, the mixed form $u \le v < w \Rightarrow u < w$ ([[def-complete-ordered-field]], [[def-ordered-field]]). Adding two strict inequalities: $a < b$ and $c < d$ give $a + c < b + d$ ([[lem-of-add-order]]). Multiplying by a positive: for $c > 0$, $a < b$ gives $ac < bc$ ([[lem-of-sign-rules]]). Halving a positive: $1 > 0$ ([[cor-of-one-positive]]), so $2 := 1 + 1 > 0$ because the positives are closed under addition ([[def-ordered-field]]), hence $2^{-1} > 0$ ([[lem-of-inverse-positive]]) and $\eta/2 = \eta \cdot 2^{-1} > 0$ whenever $\eta > 0$ ([[lem-of-sign-rules]]).

[L6] The order on $\mathbb{N}$ is total, so any two indices $K_1, K_2$ admit an index $k$ with $k \ge K_1$ and $k \ge K_2$ ([[thm-nat-linear-order]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $x \ne y$. [assume-contra]

2.1 Then $x - y \ne 0$, so $|x - y| \ne 0$ while $|x - y| \ge 0$; by trichotomy $|x - y| > 0$, and hence $|x - y|/2 > 0$. [step 1.1, L3, L5]

3.1 Choose a rational $\varepsilon$ with $0 < \varepsilon < |x - y|/2$; multiplying that inequality by $2 > 0$ and using $(|x - y|/2) \cdot 2 = |x - y|$ gives $2\varepsilon < |x - y|$. [step 2.1, L4, L5, algebra, choose]

4.1 Since $(x_k)$ converges to $x$ there is $K_1$ with $|x_k - x| < \varepsilon$ for all $k \ge K_1$, and since $(x_k)$ converges to $y$ there is $K_2$ with $|x_k - y| < \varepsilon$ for all $k \ge K_2$. [step 3.1, L1]

5.1 Fix an index $k$ with $k \ge K_1$ and $k \ge K_2$; then $|x - y| = |(x - x_k) + (x_k - y)| \le |x - x_k| + |x_k - y| = |x_k - x| + |x_k - y|$, while adding the two strict inequalities of step 4.1 gives $|x_k - x| + |x_k - y| < \varepsilon + \varepsilon = 2\varepsilon$; composing the non-strict inequality with the strict one yields $|x - y| < 2\varepsilon$. [step 4.1, L2, L3, L5, L6]

6.1 Combining, $2\varepsilon < |x - y| < 2\varepsilon$, so $2\varepsilon < 2\varepsilon$, which contradicts irreflexivity of the strict order. [step 3.1, step 5.1, L5]

7.1 The assumption $x \ne y$ is therefore untenable, so $x = y$: a sequence of reals has at most one limit. [step 6.1, discharge-contradiction] ∎

## Remarks

- Uniqueness is what licenses the notation $\lim_{k} x_k$ and the phrase *the* limit. Without it the symbol would not denote. This library writes $\lim_k x_k$ only for sequences already known to converge, exactly as it writes $\sup S$ only for sets already known to have a supremum ([[rem-sup-conventions]]).

- The proof uses only that $\mathbb{R}$ is an ordered field in which arbitrarily small positive rationals exist, that is, an Archimedean ordered field ([[thm-of-archimedean]]). Completeness is not needed: limits are unique in $\mathbb{Q}$ too, where many sequences fail to have one.

- The hypothesis is genuinely about a single sequence having two limits. Two *different* sequences may of course share a limit, and a sequence with no limit at all is not excluded by anything here.
````

### `thm-algebra-of-limits`

````markdown
---
id: thm-algebra-of-limits
kind: theorem
title: "Algebra of limits: sums, scalar multiples, products and quotients"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-real-limit, def-sequence, lem-convergent-implies-bounded, lem-null-times-bounded, lem-of-triangle-inequality, lem-of-abs-value, cor-of-reverse-triangle, thm-of-archimedean, lem-of-inverse-positive, lem-rat-embeds-dense, lem-of-add-order, lem-of-sign-rules, cor-of-one-positive, thm-rat-ordered-field, thm-nat-linear-order, def-field, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "limits respect $+$, $\\cdot$, $/$"
proof_strategy: direct
verification:
  precheck: pass
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
    - title: "OpenStax Calculus Volume 2, §5.1 Sequences"
      url: "https://openstax.org/books/calculus-volume-2/pages/5-1-sequences"
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "T. Tao, Analysis I, 3rd ed., §6.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(x_k)$ and $(y_k)$ be sequences of reals ([[def-sequence]]) converging to
$x$ and $y$ respectively ([[def-real-limit]]), and let $c \in \mathbb{R}$. Then

$$x_k + y_k \to x + y, \qquad c\,x_k \to c\,x, \qquad x_k - y_k \to x - y, \qquad x_k y_k \to x y,$$

and if in addition $y \ne 0$ and $y_k \ne 0$ for every $k \in \mathbb{N}$, then

$$\frac{1}{y_k} \to \frac{1}{y} \qquad \text{and} \qquad \frac{x_k}{y_k} \to \frac{x}{y}.$$

The quotient case rests on an eventual lower bound for $|y_k|$, proved below
rather than assumed: $|y_k| > |y|/2$ for all sufficiently large $k$.

## Facts & Assumptions

**Given:** Sequences $(x_k)$, $(y_k)$ of reals with $(x_k)$ converging to $x$ and $(y_k)$ converging to $y$, and a real $c$ ([[def-sequence]], [[def-real-limit]]). For the last two claims we assume in addition $y \ne 0$ and $y_k \ne 0$ for every $k$.

[L1] Convergence, quantified over rational $\varepsilon > 0$ ([[def-real-limit]]).

[L2] Absolute value and the triangle inequality: $|uv| = |u|\,|v|$, $|u| \ge 0$, $|u| = 0$ if and only if $u = 0$, $|-u| = |u|$, and $|a + b| \le |a| + |b|$ ([[lem-of-abs-value]], [[lem-of-triangle-inequality]]).

[L3] Real versus rational $\varepsilon$: for every real $\eta > 0$ there is a rational $\varepsilon$ with $0 < \varepsilon < \eta$, by density ([[lem-rat-embeds-dense]]) or by the Archimedean property ([[thm-of-archimedean]]) applied to $1/\eta$ ([[lem-of-inverse-positive]]); consequently the convergence test of [[def-real-limit]] may equivalently be run with real $\varepsilon > 0$ ([[def-sequence]]).

[L4] Convergent sequences are bounded ([[lem-convergent-implies-bounded]]), and a constant sequence $(c)$ is bounded by $|c|$ ([[def-sequence]]).

[L5] A null sequence times a bounded sequence is null ([[lem-null-times-bounded]]).

[L6] Reverse triangle inequality: $\bigl||u| - |v|\bigr| \le |u - v|$, hence $|u| \ge |v| - |v - u|$ ([[cor-of-reverse-triangle]]).

[L7] Inverses and order: $a > 0$ implies $a^{-1} > 0$; $0 < a < b$ implies $0 < b^{-1} < a^{-1}$; $(u^{-1})^{-1} = u$ for $u \ne 0$ ([[lem-of-inverse-positive]], [[def-field]]).

[L8] Order arithmetic in $\mathbb{R}$: adding a constant and adding inequalities preserve the order, multiplying a strict inequality by a positive factor preserves it, and $\le$ and $<$ compose transitively; trichotomy holds, and since $u \ge 0$ means $u > 0$ or $u = 0$, an element with $u \ge 0$ and $u \ne 0$ satisfies $u > 0$ ([[lem-of-add-order]], [[lem-of-sign-rules]], [[def-complete-ordered-field]], [[def-ordered-field]]). Moreover $2 = 1 + 1 > 0$ and $2$ is invertible: $0 < 1$ in any ordered field ([[cor-of-one-positive]]) and the positives are closed under addition, so $2 > 0$ and in particular $2 \ne 0$ ([[def-ordered-field]]), whence $2^{-1}$ exists ([[def-field]]).

[L9] Rational arithmetic: $\varepsilon/2$ is a rational $> 0$ whenever $\varepsilon$ is, and $\varepsilon/2 + \varepsilon/2 = \varepsilon$ ([[thm-rat-ordered-field]]); the order on $\mathbb{N}$ is total, so finitely many thresholds admit a common index ([[thm-nat-linear-order]]).

## Proof

**Proof technique:** direct.

1.1 Reduction to null sequences: for any sequence $(z_k)$ of reals and any real $z$, the statements "$(z_k)$ converges to $z$" and "$(z_k - z)$ converges to $0$" are literally the same condition, because $|(z_k - z) - 0| = |z_k - z|$ for every $k$. [L1, L2]

1.2 Sum rule, in general form. Let $(u_k) \to u$ and $(v_k) \to v$ be any convergent sequences of reals and let $\varepsilon > 0$ be rational; take $K_1$ with $|u_k - u| < \varepsilon/2$ for $k \ge K_1$ and $K_2$ with $|v_k - v| < \varepsilon/2$ for $k \ge K_2$, and let $K$ be an index at least as large as both. For $k \ge K$, $|(u_k + v_k) - (u + v)| = |(u_k - u) + (v_k - v)| \le |u_k - u| + |v_k - v| < \varepsilon/2 + \varepsilon/2 = \varepsilon$; hence $u_k + v_k \to u + v$, and in particular $x_k + y_k \to x + y$. [L1, L2, L8, L9, algebra]

1.3 Boundedness: every convergent sequence of reals is bounded, and every constant sequence $(d)$ is bounded by $|d|$. [L4]

1.4 Quotient preparation. Assume $y \ne 0$ and $y_k \ne 0$ for every $k$. Then $|y| > 0$ by [L2], so $|y|/2 > 0$; running the convergence test of $(y_k)$ with the real number $|y|/2$ as tolerance, which [L3] licenses, produces $K_0 \in \mathbb{N}$ with $|y_k - y| < |y|/2$ for all $k \ge K_0$. [L1, L2, L3, L7, L8, choose]

2.1 Scalar rule, in general form. Let $(u_k) \to u$ and let $d \in \mathbb{R}$. By step 1.1 the sequence $(u_k - u)$ is null and by step 1.3 the constant sequence $(d)$ is bounded, so $(d(u_k - u)) = (d u_k - d u)$ is null by [L5]; by step 1.1 again, $d u_k \to d u$, and in particular $c x_k \to c x$. [step 1.1, step 1.3, L5, algebra]

2.2 Product rule, in general form. Let $(u_k) \to u$ and $(v_k) \to v$, and write $u_k v_k - u v = u_k(v_k - v) + v(u_k - u)$. By step 1.1 both $(v_k - v)$ and $(u_k - u)$ are null; by step 1.3 both $(u_k)$ and the constant sequence $(v)$ are bounded; so both $(u_k(v_k - v))$ and $(v(u_k - u))$ are null by [L5], and their sum is null by step 1.2 applied with both limits equal to $0$. By step 1.1, $u_k v_k \to u v$, and in particular $x_k y_k \to x y$. [step 1.1, step 1.2, step 1.3, L5, algebra]

2.3 Eventual lower bound. For every $k \ge K_0$, the reverse triangle inequality gives $|y_k| \ge |y| - |y - y_k| = |y| - |y_k - y| > |y| - |y|/2 = |y|/2 > 0$; so $|y_k| > |y|/2$ for all $k \ge K_0$, and in particular $|y_k| \ne 0$ there. [step 1.4, L2, L6, L8]

3.1 Difference rule. Applying step 2.1 to the sequence $(y_k)$ with $d = -1$ gives $-y_k \to -y$; the sum rule of step 1.2 applied to $(x_k)$ and $(-y_k)$ then gives $x_k - y_k = x_k + (-y_k) \to x + (-y) = x - y$. [step 1.2, step 2.1, L8, algebra]

3.2 Reciprocal estimate. For $k \ge K_0$ we have $y_k \ne 0$ and $|y_k| > |y|/2 > 0$, so [L7] applied to $0 < |y|/2 < |y_k|$ gives $0 < |y_k|^{-1} < 2/|y|$, and therefore $\left|\dfrac{1}{y_k} - \dfrac{1}{y}\right| = \dfrac{|y - y_k|}{|y_k|\,|y|} \le \dfrac{2}{|y|^2}\,|y_k - y|$. [step 2.3, L2, L7, L8, algebra]

4.1 Reciprocal rule. Let $\varepsilon > 0$ be an arbitrary real and put $\eta := \varepsilon |y|^2/2$, a real $> 0$; by [L3] there is $K_1$ with $|y_k - y| < \eta$ for all $k \ge K_1$. For every $k$ at least as large as both $K_0$ and $K_1$, step 3.2 gives $\left|\dfrac{1}{y_k} - \dfrac{1}{y}\right| \le \dfrac{2}{|y|^2}|y_k - y| < \dfrac{2}{|y|^2}\,\eta = \varepsilon$; hence $1/y_k \to 1/y$. [step 3.2, L1, L3, L7, L8, L9, algebra]

5.1 Quotient rule. By step 4.1 the sequence $(1/y_k)$ converges to $1/y$, so the product rule of step 2.2 applied to $(x_k)$ and $(1/y_k)$ gives $x_k/y_k = x_k \cdot (1/y_k) \to x \cdot (1/y) = x/y$. [step 2.2, step 4.1, algebra]

6.1 All the claims are established: the sum rule in step 1.2, the scalar rule in step 2.1, the difference rule in step 3.1, the product rule in step 2.2, and the reciprocal and quotient rules in steps 4.1 and 5.1. [step 1.2, step 2.1, step 2.2, step 3.1, step 4.1, step 5.1] ∎

## Remarks

- **The quotient case is where proofs usually cheat.** The estimate $|1/y_k - 1/y| = |y - y_k| / (|y_k||y|)$ is worthless until $|y_k|$ is known to stay away from $0$: without a lower bound the denominator can be arbitrarily small and the fraction arbitrarily large, even while $|y - y_k|$ shrinks. Step 2.3 supplies that bound, $|y_k| > |y|/2$ for $k \ge K_0$, and it is proved from the reverse triangle inequality, not assumed.

- The hypothesis $y_k \ne 0$ for every $k$ is only there so that $1/y_k$ is defined for every index. It is not needed for the limit: step 2.3 shows $|y_k| > |y|/2 > 0$ from $K_0$ on, so a sequence with $y \ne 0$ has at most finitely many zero terms, and by [[lem-limit-of-tail]] one may pass to the $K_0$-th tail and read the conclusion there.

- The hypothesis $y \ne 0$ cannot be dropped. With $x_k = 1$ and $y_k = 1/(k+1)$, both sequences converge: the first is constant ([[def-sequence]]) and the second is null ([[fs-limit-preserves-strict-inequality]]), so $y = 0$. Yet $x_k/y_k = k+1$, and no real $M$ bounds every $k+1$, by the Archimedean property ([[thm-of-archimedean]]); so the quotient sequence is unbounded, hence not convergent by [[lem-convergent-implies-bounded]].

- Nothing in the proof uses completeness of $\mathbb{R}$ beyond the Archimedean property invoked in [L3], so the same rules hold verbatim for sequences of rationals.
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

