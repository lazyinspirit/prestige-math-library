# Audit proof-refuter brief — Wave 9, A6

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30).** You are read-only and
> tool-less. Do not ask for shell or edit permission. Everything available to
> you is reproduced in the dispatch task.

You are **DeepSeek V4 Pro** at the API's maximum reasoning setting, serving as
an independent adversarial proof-refuter. Return evidence only; Audit-Alpha
alone adjudicates and edits.

## Binding triage

- **Non-negotiable:** mathematical accuracy, logical validity, correct citation.
- **Explicitly acceptable, spend no effort:** minor citational quirks; logical
  gaps a competent reader closes within 30 seconds; other non-fatal quirks;
  imperfection at the level of the letter.

Read the target's title, complete public statement, Facts & Assumptions, every
numbered proof/refutation/verification step, and Remarks. Try to falsify every
load-bearing inference. Before alleging that a cited dependency is too weak,
compare the exact current supplied dependency: domain, hypotheses, quantifiers,
direction, conclusion, boundary cases, and conventions. Check biconditionals,
existence/uniqueness, recursion/induction, limits, index shifts, empty/zero/one/
endpoint/degenerate cases, hidden division, hidden choice, and false Remarks.
For an `ai-generated` proof, actively search for a counterexample. A false
public claim, invalid proof, missing necessary hypothesis, circularity, or
materially inaccurate load-bearing citation is fatal; a quickly closable gap is
nonfatal.

Return no more than 450 words, exactly in this shape:

```text
VERDICT: CLEAN | DEFECTS
```

For each defect:

```text
FINDING 1
  location: [exact section/fact/step]
  severity: fatal | nonfatal
  claim:    [exact assertion]
  evidence: [counterexample, invalid inference, or exact source mismatch]
```

Always end with:

```text
BOUNDARY: [specific boundary/counterexample checks and disposition]
SOURCES:  [confirm every supplied cited item used by the target was inspected]
CHECKED:  [confirm title, public claim, every numbered step, and Remarks]
```


---

# This dispatch

## Wave 9 target — `lem-oscillation-superlevel-sets-are-closed`

Selection: mandatory Wave 9 high/critical proof-bearing route.

Normalized current SHA-256: `184087e4b05b856755375227cf02c4493d2a1bcb61ede065ca64b5ff191018eb`

## Complete current target

````markdown
---
id: lem-oscillation-superlevel-sets-are-closed
kind: lemma
title: "For every real $\\varepsilon > 0$ the set $\\{\\,x \\in A : \\omega_f(x) \\ge \\varepsilon\\,\\}$ is the intersection with $A$ of a closed subset of $\\mathbb{R}$; in particular it is closed in $\\mathbb{R}$ when $A = \\mathbb{R}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
  evidence: semantic-source
deps: [def-oscillation, def-open-and-closed-in-r, def-neighbourhood-r, def-extended-reals, lem-extended-reals-complete]
justified_by: []
aliases: []
landmark: false
short: "$\\{\\omega_f \\ge \\varepsilon\\}$ is relatively closed"
proof_strategy: direct
verification:
  audited: 2026-07-28
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Oscillation (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Oscillation_(mathematics)"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ and let
$\varepsilon \in \mathbb{R}$ with $\varepsilon > 0$. Put

$$E_\varepsilon \;:=\; \{\, x \in A : \omega_f(x) \ge \varepsilon \,\}$$

([[def-oscillation]]). Then there is a **closed** $G \subseteq \mathbb{R}$
([[def-open-and-closed-in-r]]) with

$$E_\varepsilon \;=\; A \cap G .$$

In particular, if $A = \mathbb{R}$ then $E_\varepsilon$ is itself a closed
subset of $\mathbb{R}$.

**The set $G$ is produced explicitly and does not depend on any choice**: it is
the complement of

$$U \;:=\; \{\, y \in \mathbb{R} : \omega_f(A \cap N_\rho(y)) < \varepsilon \ \text{ for some real } \rho > 0 \,\},$$

which the proof shows to be open. Note that $y$ ranges over all of $\mathbb{R}$
here and not only over $A$; the expression $\omega_f(A \cap N_\rho(y))$ is the
oscillation of $f$ on a subset of $A$ and makes sense for every real $y$, taking
the value $\sup \varnothing = -\infty$ when $A \cap N_\rho(y) = \varnothing$
([[def-oscillation]], [[lem-extended-reals-complete]]).

## Facts & Assumptions

**Given:** $A \subseteq \mathbb{R}$, a function $f : A \to \mathbb{R}$, and a real $\varepsilon > 0$.

[L1] $\omega_f(S) = \sup\{|f(x) - f(y)| : x, y \in S\}$ in $\overline{\mathbb{R}}$, and $\omega_f(S) \le \omega_f(T)$ whenever $S \subseteq T \subseteq A$; for $c \in A$, $\omega_f(c) = \inf\{\omega_f(A \cap N_\delta(c)) : \delta > 0\}$ ([[def-oscillation]], [[def-extended-reals]]).

[L2] In $\overline{\mathbb{R}}$ every subset has a greatest lower bound; an infimum is $\ge$ an extended real $\ell$ exactly when $\ell$ bounds the set from below, and the infimum is $\le$ every member of the set ([[lem-extended-reals-complete]]).

[L3] $N_\delta(x) = \{y : |y - x| < \delta\}$; if $|y - x| < \rho/2$ then $N_{\rho/2}(y) \subseteq N_\rho(x)$, since $|z - y| < \rho/2$ gives $|z - x| \le |z - y| + |y - x| < \rho$ ([[def-neighbourhood-r]]).

[L4] $U \subseteq \mathbb{R}$ is open when every point of $U$ has a neighbourhood contained in $U$, and $G \subseteq \mathbb{R}$ is closed exactly when $\mathbb{R} \setminus G$ is open ([[def-open-and-closed-in-r]]).

## Proof

**Proof technique:** direct.

1.1 Define $U := \{\, y \in \mathbb{R} : \omega_f(A \cap N_\rho(y)) < \varepsilon$ for some real $\rho > 0 \,\}$ and $G := \mathbb{R} \setminus U$. [construct]

2.1 $U$ is open. Let $y \in U$ with witness $\rho > 0$, and let $z \in N_{\rho/2}(y)$. Then $N_{\rho/2}(z) \subseteq N_\rho(y)$, hence $A \cap N_{\rho/2}(z) \subseteq A \cap N_\rho(y)$, hence $\omega_f(A \cap N_{\rho/2}(z)) \le \omega_f(A \cap N_\rho(y)) < \varepsilon$, so $z \in U$ with witness $\rho/2$. Thus $N_{\rho/2}(y) \subseteq U$. [step 1.1, L1, L3, L4]

2.2 Let $x \in A$ with $x \notin U$. Then $\omega_f(A \cap N_\delta(x)) \ge \varepsilon$ for every real $\delta > 0$, so $\varepsilon$ is a lower bound of the set whose infimum is $\omega_f(x)$, and therefore $\omega_f(x) \ge \varepsilon$, that is $x \in E_\varepsilon$. [step 1.1, L1, L2]

2.3 Let $x \in E_\varepsilon$, so $x \in A$ and $\omega_f(x) \ge \varepsilon$. For every real $\delta > 0$ the value $\omega_f(A \cap N_\delta(x))$ is at least the infimum $\omega_f(x)$, hence at least $\varepsilon$; so no $\rho$ witnesses membership of $x$ in $U$, that is $x \notin U$. [step 1.1, L1, L2]

3.1 $G$ is closed, being the complement of the open set $U$. [step 1.1, step 2.1, L4]

4.1 Steps 2.2 and 2.3 together say that for $x \in A$ one has $x \in E_\varepsilon$ if and only if $x \in G$; hence $E_\varepsilon = A \cap G$ with $G$ closed. [step 3.1, step 2.2, step 2.3]

5.1 If $A = \mathbb{R}$ then $E_\varepsilon = \mathbb{R} \cap G = G$ is closed in $\mathbb{R}$. [step 4.1, L4] ∎

## Remarks

- **Why the strict inequality is on the open side.** The set $U$ is defined by a
  strict inequality and an existential quantifier over $\rho$, which is what
  makes it open; its complement is then closed, and the superlevel set
  $\{\omega_f \ge \varepsilon\}$ is what remains of it inside $A$. Defining
  $E_\varepsilon$ with a strict inequality instead, as
  $\{\omega_f > \varepsilon\}$, would not give a closed set in general, and the
  exhaustion of [[thm-discontinuity-set-is-f-sigma]] is arranged so that only the
  non-strict form is ever needed.

- **The relative form is the honest one.** For general $A$ the set
  $E_\varepsilon$ is a subset of $A$ and there is no reason for it to be closed
  in $\mathbb{R}$: taking $A = (0,1)$ and $f$ the restriction of a function with
  oscillation $\ge \varepsilon$ everywhere gives $E_\varepsilon = (0,1)$, which
  is not closed. What is always true is the displayed identity
  $E_\varepsilon = A \cap G$, and that is what the theorems downstream use.
````

## Current Wave 9 provenance determination

```json
{
  "id": "lem-oscillation-superlevel-sets-are-closed",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://en.wikipedia.org/wiki/Oscillation_(mathematics)"
  ],
  "rationale": "The source explains that oscillation superlevel sets are closed and continuity points form a G-delta. The item supplies the relative-domain trace formulation and a fully local closure proof.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

## Current Wave 9 proof contract

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "def-oscillation",
      "source_section": "Definition",
      "quote": "$$\\omega_f(c) \\;:=\\; \\inf\\{\\, \\omega_f(A \\cap N_\\delta(c)) \\;:\\; \\delta \\in \\mathbb{R},\\ \\delta > 0 \\,\\} \\;\\in\\; \\overline{\\mathbb{R}},$$",
      "uses": [
        "2.1",
        "2.2",
        "2.3"
      ]
    },
    {
      "fact": "L1",
      "source": "def-extended-reals",
      "source_section": "Definition",
      "quote": "$$\\overline{\\mathbb{R}} := \\mathbb{R} \\cup \\{-\\infty, +\\infty\\}.$$",
      "uses": [
        "2.1",
        "2.2",
        "2.3"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-extended-reals-complete",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\overline{\\mathbb{R}}$ be **any** subset of the extended real\nline ([[def-extended-reals]]) and write $A_{\\mathbb{R}} := A \\cap \\mathbb{R}$.\nThen $A$ has a least upper bound and a greatest lower bound in\n$\\overline{\\mathbb{R}}$ ([[def-upper-bound]]), each unique, which we write\n$\\sup A$ and $\\inf A$ with the ambient set always $\\overline{\\mathbb{R}}$.\nExplicitly:",
      "uses": [
        "2.2",
        "2.3"
      ]
    },
    {
      "fact": "L3",
      "source": "def-neighbourhood-r",
      "source_section": "Definition",
      "quote": "**Monotonicity in the radius.** If $0 < \\delta \\le \\varepsilon$ then\n$N_\\delta(x) \\subseteq N_\\varepsilon(x)$, because $|y - x| < \\delta \\le\n\\varepsilon$ ([[def-ordered-field]]).",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-open-and-closed-in-r",
      "source_section": "Definition",
      "quote": "- $U$ is **open** when for every $x \\in U$ there is a real $\\varepsilon > 0$\n  with $N_\\varepsilon(x) \\subseteq U$.\n- $F$ is **closed** when its complement $\\mathbb{R} \\setminus F$ is open.\n- A set is **clopen** when it is both open and closed.",
      "uses": [
        "2.1",
        "3.1",
        "5.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "lem-oscillation-superlevel-sets-are-closed-step-1-1",
      "claim": "Define $U := \\{\\, y \\in \\mathbb{R} : \\omega_f(A \\cap N_\\rho(y)) < \\varepsilon$ for some real $\\rho > 0 \\,\\}$ and $G := \\mathbb{R} \\setminus U$. [construct]",
      "step": "1.1",
      "inputs": [
        "given hypotheses and local construction"
      ]
    },
    {
      "id": "lem-oscillation-superlevel-sets-are-closed-step-2-1",
      "claim": "$U$ is open. Let $y \\in U$ with witness $\\rho > 0$, and let $z \\in N_{\\rho/2}(y)$. Then $N_{\\rho/2}(z) \\subseteq N_\\rho(y)$, hence $A \\cap N_{\\rho/2}(z) \\subseteq A \\cap N_\\rho(y)$, hence $\\omega_f(A \\cap N_{\\rho/2}(z)) \\le \\omega_f(A \\cap N_\\rho(y)) < \\varepsilon$, so $z \\in U$ with witness $\\rho/2$. Thus $N_{\\rho/2}(y) \\subseteq U$. [step 1.1, L1, L3, L4]",
      "step": "2.1",
      "inputs": [
        "1.1",
        "L1",
        "L3",
        "L4"
      ]
    },
    {
      "id": "lem-oscillation-superlevel-sets-are-closed-step-2-2",
      "claim": "Let $x \\in A$ with $x \\notin U$. Then $\\omega_f(A \\cap N_\\delta(x)) \\ge \\varepsilon$ for every real $\\delta > 0$, so $\\varepsilon$ is a lower bound of the set whose infimum is $\\omega_f(x)$, and therefore $\\omega_f(x) \\ge \\varepsilon$, that is $x \\in E_\\varepsilon$. [step 1.1, L1, L2]",
      "step": "2.2",
      "inputs": [
        "1.1",
        "L1",
        "L2"
      ]
    },
    {
      "id": "lem-oscillation-superlevel-sets-are-closed-step-2-3",
      "claim": "Let $x \\in E_\\varepsilon$, so $x \\in A$ and $\\omega_f(x) \\ge \\varepsilon$. For every real $\\delta > 0$ the value $\\omega_f(A \\cap N_\\delta(x))$ is at least the infimum $\\omega_f(x)$, hence at least $\\varepsilon$; so no $\\rho$ witnesses membership of $x$ in $U$, that is $x \\notin U$. [step 1.1, L1, L2]",
      "step": "2.3",
      "inputs": [
        "1.1",
        "L1",
        "L2"
      ]
    },
    {
      "id": "lem-oscillation-superlevel-sets-are-closed-step-3-1",
      "claim": "$G$ is closed, being the complement of the open set $U$. [step 1.1, step 2.1, L4]",
      "step": "3.1",
      "inputs": [
        "1.1",
        "2.1",
        "L4"
      ]
    },
    {
      "id": "lem-oscillation-superlevel-sets-are-closed-step-4-1",
      "claim": "Steps 2.2 and 2.3 together say that for $x \\in A$ one has $x \\in E_\\varepsilon$ if and only if $x \\in G$; hence $E_\\varepsilon = A \\cap G$ with $G$ closed. [step 3.1, step 2.2, step 2.3]",
      "step": "4.1",
      "inputs": [
        "2.2",
        "2.3",
        "3.1"
      ]
    },
    {
      "id": "lem-oscillation-superlevel-sets-are-closed-step-5-1",
      "claim": "If $A = \\mathbb{R}$ then $E_\\varepsilon = \\mathbb{R} \\cap G = G$ is closed in $\\mathbb{R}$. [step 4.1, L4] ∎",
      "step": "5.1",
      "inputs": [
        "4.1",
        "L4"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "step 1.1: the empty-object convention or its exclusion is explicit in the statement/proof."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "step 1.1: the zero-valued or zero-index boundary is handled explicitly, or is included without division by it."
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "One is not a distinguished parameter or exceptional value in this statement."
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "The claim is not parametrised by an interval, finite range, or object with a degenerate case."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "No interval endpoint or one-sided domain boundary occurs in the statement."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "The proof selects no witness from a varying asserted nonempty family."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The statement is not a biconditional or equivalence."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The statement is not a biconditional or equivalence."
    }
  ]
}
```

## Generated cross-batch/cross-level relationships sourced by this target

```json
[
  {
    "source": "lem-oscillation-superlevel-sets-are-closed",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "def-oscillation",
    "declared_target": "def-oscillation",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-functions-and-discontinuities",
    "targetBatch": "wave9-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-oscillation-superlevel-sets-are-closed",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "def-open-and-closed-in-r",
    "declared_target": "def-open-and-closed-in-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-oscillation-superlevel-sets-are-closed",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "def-neighbourhood-r",
    "declared_target": "def-neighbourhood-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-oscillation-superlevel-sets-are-closed",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "def-extended-reals",
    "declared_target": "def-extended-reals",
    "target_statement_provenance": "ai-altered",
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-oscillation-superlevel-sets-are-closed",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "lem-extended-reals-complete",
    "declared_target": "lem-extended-reals-complete",
    "target_statement_provenance": "literature-derived",
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Complete current text of every declared or cited item (6)

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

### `def-neighbourhood-r`

````markdown
---
id: def-neighbourhood-r
kind: definition
title: "The $\\varepsilon$-neighbourhood and the punctured $\\varepsilon$-neighbourhood of a point of $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-real-order, def-interval, lem-of-abs-value, def-complete-ordered-field, def-ordered-field, def-abs-value, lem-of-triangle-inequality]
justified_by: []
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
    - title: "Neighbourhood (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Neighbourhood_(mathematics)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Def. 2.18(a))"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §7.1 and §1.4"
      url: "https://www.jirka.org/ra/"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]], [[def-ordered-field]]) with its order
([[def-real-order]]) and its absolute value ([[def-abs-value]]).

Let $x \in \mathbb{R}$ and let $\varepsilon \in \mathbb{R}$ with
$\varepsilon > 0$. The **$\varepsilon$-neighbourhood of $x$** is

$$N_\varepsilon(x) \;:=\; \{\, y \in \mathbb{R} : |y - x| < \varepsilon \,\},$$

and the **punctured $\varepsilon$-neighbourhood of $x$** is

$$N^{*}_\varepsilon(x) \;:=\; N_\varepsilon(x) \setminus \{x\} \;=\; \{\, y \in \mathbb{R} : 0 < |y - x| < \varepsilon \,\}.$$

The two descriptions of $N^{*}_\varepsilon(x)$ agree because $|y - x| = 0$ holds
exactly when $y = x$ ([[lem-of-abs-value]]).

**A neighbourhood is an open interval.** For every $x$ and every
$\varepsilon > 0$,

$$N_\varepsilon(x) \;=\; (x - \varepsilon,\ x + \varepsilon),$$

the interval of [[def-interval]]. Indeed [[lem-of-abs-value]] gives, for
$\varepsilon > 0$, the equivalence $|y - x| < \varepsilon \iff -\varepsilon <
y - x < \varepsilon$, and adding $x$ throughout turns the right-hand side into
$x - \varepsilon < y < x + \varepsilon$ ([[def-ordered-field]]).

**The centre lies in its own neighbourhoods.** $x \in N_\varepsilon(x)$, since
$|x - x| = |0| = 0 < \varepsilon$ ([[lem-of-abs-value]]).

**Punctured neighbourhoods are never empty.** The element
$y := x + \varepsilon/2$ satisfies $|y - x| = \varepsilon/2$, which is
$> 0$ and $< \varepsilon$, so $y \in N^{*}_\varepsilon(x)$
([[lem-of-abs-value]], [[def-ordered-field]]).

**Monotonicity in the radius.** If $0 < \delta \le \varepsilon$ then
$N_\delta(x) \subseteq N_\varepsilon(x)$, because $|y - x| < \delta \le
\varepsilon$ ([[def-ordered-field]]).

**Nesting at an interior point.** If $y \in N_\varepsilon(x)$ and
$0 < \delta \le \varepsilon - |y - x|$, then

$$N_\delta(y) \;\subseteq\; N_\varepsilon(x).$$

Indeed for $z \in N_\delta(y)$ the triangle inequality
([[lem-of-triangle-inequality]]) gives
$|z - x| = |(z - y) + (y - x)| \le |z - y| + |y - x| < \delta + |y - x| \le
\varepsilon$. Note that $\varepsilon - |y - x| > 0$ precisely because
$y \in N_\varepsilon(x)$, so such a $\delta$ always exists.

## Remarks

- **The radius is a real number, not a rational.** Nothing on this page tests a
  condition against rational radii only. That convention belongs to
  [[def-real-limit]], where the quantifier is over rational $\varepsilon$ and
  the passage between the rational and the real form is the sanctioned remark of
  [[def-sequence]]. Here $\varepsilon$ ranges over the positive reals
  throughout, and every statement above is proved for an arbitrary positive
  real.

- **Why the punctured version is separated out.** A limit point of a set is a
  point every punctured neighbourhood of which meets the set
  ([[def-limit-point-r]]), and deleting the centre is exactly what stops a point
  of the set from qualifying automatically. The unpunctured condition defines
  the weaker notion of an adherent point, and the difference between the two is
  precisely an isolated point.

- **Nesting is the workhorse.** Almost every openness verification on this page
  has the shape "given $y$ in the set, shrink the radius by the distance
  already travelled", which is the nesting property above. It is recorded here
  once so that no later proof has to redo the triangle inequality in passing.
````

### `def-open-and-closed-in-r`

````markdown
---
id: def-open-and-closed-in-r
kind: definition
title: "Open subset of $\\mathbb{R}$ (every point has a neighbourhood inside it), closed subset (complement open), and clopen"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-neighbourhood-r, def-interval, def-complete-ordered-field, def-ordered-field, def-real-order, lem-finite-set-has-max, def-max-min]
justified_by: []
aliases: []
landmark: true
short: "open, closed, clopen in $\\mathbb{R}$"
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
    - title: "Open set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Open_set"
    - title: "Closed set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closed_set"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Def. 2.18)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §7.2"
      url: "https://www.jirka.org/ra/"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Let $U, F \subseteq \mathbb{R}$, with neighbourhoods as in
[[def-neighbourhood-r]].

- $U$ is **open** when for every $x \in U$ there is a real $\varepsilon > 0$
  with $N_\varepsilon(x) \subseteq U$.
- $F$ is **closed** when its complement $\mathbb{R} \setminus F$ is open.
- A set is **clopen** when it is both open and closed.

The whole of the topology of $\mathbb{R}$ developed on this page rests on this
one definition: closedness is *defined* as openness of the complement, and every
other description of a closed set on this page is a theorem
([[thm-closure-characterisations-r]], [[lem-sequential-characterisation-of-closure-r]]).

**$\varnothing$ and $\mathbb{R}$ are clopen.** The condition defining openness
quantifies over the elements of the set, so it holds vacuously for
$\varnothing$; and for $x \in \mathbb{R}$ one has $N_1(x) \subseteq \mathbb{R}$,
so $\mathbb{R}$ is open. Since each of the two is the complement of the other,
each is also closed.

**Every neighbourhood is open.** Let $y \in N_\varepsilon(x)$ and put
$\delta := \varepsilon - |y - x|$, which is $> 0$ because
$y \in N_\varepsilon(x)$. The nesting property of [[def-neighbourhood-r]] gives
$N_\delta(y) \subseteq N_\varepsilon(x)$. So every point of $N_\varepsilon(x)$
has a neighbourhood inside it.

**The four open forms of [[def-interval]] are open sets.** Let $a, b \in
\mathbb{R}$.

- $(a,b)$: for $x$ with $a < x < b$, both $x - a > 0$ and $b - x > 0$, so
  $\delta := \min\{x - a,\ b - x\}$ is a positive real (the minimum of a
  two-element set of reals exists, [[lem-finite-set-has-max]], [[def-max-min]]).
  If $|y - x| < \delta$ then $y > x - \delta \ge x - (x - a) = a$ and
  $y < x + \delta \le x + (b - x) = b$, so $y \in (a,b)$; hence
  $N_\delta(x) \subseteq (a,b)$.
- $(a,\infty)$: for $x > a$ take $\delta := x - a > 0$; then $|y - x| < \delta$
  gives $y > x - \delta = a$.
- $(-\infty,b)$: for $x < b$ take $\delta := b - x > 0$; then $|y - x| < \delta$
  gives $y < x + \delta = b$.
- $(-\infty,\infty) = \mathbb{R}$: already treated above.

**The four closed forms of [[def-interval]] are closed sets.** In each case the
complement is shown open directly.

- $[a,b]$: if $x \notin [a,b]$ then $x < a$ or $x > b$ by trichotomy
  ([[def-ordered-field]]). If $x < a$, take $\delta := a - x > 0$; every
  $y \in N_\delta(x)$ has $y < x + \delta = a$, hence $y \notin [a,b]$. If
  $x > b$, take $\delta := x - b > 0$; every $y \in N_\delta(x)$ has
  $y > x - \delta = b$, hence $y \notin [a,b]$. So
  $\mathbb{R} \setminus [a,b]$ is open.
- $[a,\infty)$: its complement is $(-\infty,a)$, which is open by the previous
  paragraph.
- $(-\infty,b]$: its complement is $(b,\infty)$, which is open.
- $(-\infty,\infty) = \mathbb{R}$: its complement is $\varnothing$, which is
  open.

## Remarks

- **Open and closed are not opposites, and not exhaustive.** A set may be
  neither: the half-open interval $[0,1)$ is neither open nor closed
  ([[fs-every-set-is-open-or-closed]]). A set may be both: $\varnothing$ and
  $\mathbb{R}$ are clopen. The words are inherited from the interval terminology
  of [[def-interval]], and the agreement between the two usages is exactly the
  two lists verified above: an interval called open there is an open set here,
  and an interval called closed there is a closed set here.

- **A clopen set is a disconnection waiting to happen.** If $A$ is clopen and
  both $A$ and $\mathbb{R} \setminus A$ are nonempty, then each of the two is
  its own closure, so the two are separated in the sense of
  [[def-connected-r]] and $\mathbb{R} = A \cup (\mathbb{R} \setminus A)$ is a
  disconnection. Since $\mathbb{R}$ is order-convex it is connected
  ([[thm-connected-subsets-of-r-are-intervals]]), so no such $A$ exists:
  $\varnothing$ and $\mathbb{R}$ are the only clopen subsets of $\mathbb{R}$.

- **The half-open forms are the ones the two lists omit**, and deliberately so:
  $[a,b)$ and $(a,b]$ with $a < b$ are neither open nor closed as subsets of
  $\mathbb{R}$.

- **The radius depends on the point.** Openness asks for *some* $\varepsilon$
  at each point, and that $\varepsilon$ may shrink to nothing as the point
  approaches the edge of the set, as the computation for $(a,b)$ shows: there
  $\delta = \min\{x - a,\ b - x\}$ tends to $0$ as $x$ tends to either endpoint.
  Asking instead for a single $\varepsilon$ that works simultaneously at every
  point of the set is a strictly stronger condition, and it is not what is
  defined here; nothing on this page uses it.
````

### `def-oscillation`

````markdown
---
id: def-oscillation
kind: definition
title: "The oscillation $\\omega_f(S) = \\sup\\{\\,|f(x) - f(y)| : x, y \\in S\\,\\}$ of $f$ on a set and the oscillation $\\omega_f(c) = \\inf_{\\delta > 0} \\omega_f(A \\cap N_\\delta(c))$ at a point, both taken in the extended reals"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
  evidence: semantic-source
deps: [def-extended-reals, lem-extended-reals-complete, def-neighbourhood-r, def-bounded-set, def-infimum, lem-of-abs-value, lem-of-triangle-inequality, def-complete-ordered-field]
justified_by: []
aliases: [def-oscillation-at-a-point]
landmark: true
short: "oscillation $\\omega_f$"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Oscillation (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Oscillation_(mathematics)"
pipeline_run: null
---

## Definition

Let $A \subseteq \mathbb{R}$ and let $f : A \to \mathbb{R}$. All suprema and
infima below are taken in the extended real line
$\overline{\mathbb{R}} = \mathbb{R} \cup \{-\infty, +\infty\}$
([[def-extended-reals]]), where **every** subset has a least upper bound and a
greatest lower bound ([[lem-extended-reals-complete]]); no boundedness
hypothesis on $f$ is therefore needed anywhere, and none is imposed.

**Oscillation on a set.** For $S \subseteq A$ put

$$\omega_f(S) \;:=\; \sup\{\, |f(x) - f(y)| \;:\; x, y \in S \,\} \;\in\; \overline{\mathbb{R}} .$$

**Oscillation at a point.** For $c \in A$ put

$$\omega_f(c) \;:=\; \inf\{\, \omega_f(A \cap N_\delta(c)) \;:\; \delta \in \mathbb{R},\ \delta > 0 \,\} \;\in\; \overline{\mathbb{R}},$$

where $N_\delta(c) = (c - \delta, c + \delta)$ is the $\delta$-neighbourhood of
$c$ ([[def-neighbourhood-r]]).

The two uses of the symbol $\omega_f$ are distinguished by their argument: a
subset of $A$ in the first, a point of $A$ in the second. Where confusion is
possible the first is written $\omega_f(S)$ with $S$ named as a set.

### Both values are well posed; point oscillation and nonempty-set oscillation are nonnegative

**The set in the first display is nonempty whenever $S$ is**, since $x = y \in S$
gives the value $|f(x) - f(x)| = 0$; so $\omega_f(S) \ge 0$ for nonempty $S$,
and $\omega_f(S) = \sup \varnothing = -\infty$ for $S = \varnothing$
([[lem-extended-reals-complete]]). Only nonempty $S$ occurs below.

**The set in the second display is nonempty**, since some real $\delta > 0$
exists, and each of its members is $\ge 0$: for $c \in A$ the set
$A \cap N_\delta(c)$ contains $c$ itself, because $|c - c| = 0 < \delta$, so it
is nonempty and $\omega_f(A \cap N_\delta(c)) \ge 0$
([[lem-of-abs-value]]). Hence $0$ is a lower bound of that set and

$$0 \;\le\; \omega_f(c) \;\le\; \omega_f(A \cap N_\delta(c)) \qquad \text{for every real } \delta > 0,$$

the second inequality because $\omega_f(c)$ is a lower bound of the set of which
$\omega_f(A \cap N_\delta(c))$ is a member. In particular $\omega_f(c)$ is never
$-\infty$.

### Monotonicity, and the case of a bounded $f$

**$\omega_f$ is monotone under inclusion.** If $S \subseteq T \subseteq A$ then
every value $|f(x) - f(y)|$ with $x, y \in S$ is also a value with $x, y \in T$,
so the first set of values is contained in the second and
$\omega_f(S) \le \omega_f(T)$: a supremum of a subset is at most the supremum of
the set. Consequently $\delta \mapsto \omega_f(A \cap N_\delta(c))$ is
nondecreasing in $\delta$, since $\delta \le \delta'$ gives
$N_\delta(c) \subseteq N_{\delta'}(c)$ ([[def-neighbourhood-r]]).

**When $f$ is bounded, nonempty-set and point oscillations are real.** Suppose
there is a real $M$ with $|f(x)| \le M$ for every $x \in A$
([[def-bounded-set]]). Then for $x, y \in A$,

$$|f(x) - f(y)| \;\le\; |f(x)| + |f(y)| \;\le\; 2M$$

([[lem-of-triangle-inequality]], [[lem-of-abs-value]]), so $\omega_f(S) \le 2M$
for every $S \subseteq A$. If
$S$ is nonempty, $\omega_f(S)$ is a real number in $[0,2M]$, and every point
oscillation is also a real number in $[0,2M]$: the supremum of a nonempty
subset of $\mathbb{R}$ that is bounded above in $\mathbb{R}$ is the real
supremum ([[lem-extended-reals-complete]], [[def-complete-ordered-field]],
[[def-infimum]]). The convention $\omega_f(\varnothing)=-\infty$ remains the
single empty-set exception. Apart from that exception, an infinite extended
value can occur only when $f$ is unbounded.

**The notation.** The letter is $\omega$ throughout this library, never
"$\operatorname{osc}$", and the function is always in the subscript.
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

### `thm-discontinuity-set-is-f-sigma`

````markdown
---
id: thm-discontinuity-set-is-f-sigma
kind: theorem
title: "For $f : A \\to \\mathbb{R}$ the set of points of $A$ at which $f$ is discontinuous is the intersection with $A$ of an $F_\\sigma$ subset of $\\mathbb{R}$, and the set of points at which $f$ is continuous is the intersection with $A$ of a $G_\\delta$ subset; for $A = \\mathbb{R}$ the two sets are $F_\\sigma$ and $G_\\delta$ outright"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
  evidence: semantic-source
deps: [def-oscillation, thm-continuity-iff-oscillation-zero, lem-oscillation-superlevel-sets-are-closed, def-f-sigma-g-delta, def-open-and-closed-in-r, cor-archimedean-reciprocal, def-continuity-real, def-extended-reals, def-canonical-natural, lem-of-naturals-positive, def-classification-of-discontinuities]
justified_by: []
aliases: [thm-continuity-set-is-g-delta]
landmark: true
short: "discontinuity set is $F_\\sigma$"
proof_strategy: direct
verification:
  audited: 2026-07-28
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Classification of discontinuities (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Classification_of_discontinuities"
    - title: "Gdelta set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/G%CE%B4_set"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$ and let $f : A \to \mathbb{R}$. Write

$$D \;:=\; \{\, x \in A : f \text{ is discontinuous at } x \,\}, \qquad C \;:=\; A \setminus D$$

([[def-continuity-real]], [[def-classification-of-discontinuities]]). Then:

1. **Pointwise exhaustion.** $D = \{\, x \in A : \omega_f(x) > 0 \,\}$
   ([[def-oscillation]]), and $D$ is the union of the increasing sequence of
   superlevel sets
   $$D \;=\; \bigcup_{n \in \mathbb{N}} \{\, x \in A : \omega_f(x) \ge 1/\iota(n+1) \,\}$$
   ([[def-canonical-natural]]), whose thresholds are $1, 1/2, 1/3, \dots$.
2. **Descriptive form.** There is an $F_\sigma$ set $F \subseteq \mathbb{R}$ and
   a $G_\delta$ set $V \subseteq \mathbb{R}$ ([[def-f-sigma-g-delta]]) with
   $$D \;=\; A \cap F, \qquad C \;=\; A \cap V, \qquad V = \mathbb{R} \setminus F ,$$
   and $F$ may be taken to be $\bigcup_{n \in \mathbb{N}} G_n$ with each $G_n$ a
   closed subset of $\mathbb{R}$ cutting down on $A$ to the $n$-th set of
   claim 1 ([[lem-oscillation-superlevel-sets-are-closed]]).

In particular, when $A = \mathbb{R}$ the discontinuity set $D$ is an $F_\sigma$
subset of $\mathbb{R}$ and the continuity set $C$ is a $G_\delta$ subset, and
claim 1 reads $D = \bigcup_{n} \{\, x \in \mathbb{R} : \omega_f(x) \ge 1/\iota(n+1) \,\}$.

**Claim 1 is stated separately because it is what is cited downstream.** The
exhaustion of $D$ by the superlevel sets $\{\omega_f \ge 1/\iota(n+1)\}$ is used
directly wherever a property has to be established one threshold at a time —
[[thm-baire-one-continuity-points]] shows each superlevel set nowhere dense and
concludes that $D$ is meager — and that use needs the identity itself, not only
the descriptive conclusion of claim 2.

**The statement is relative on purpose.** For a general domain $A$ the sets $D$
and $C$ are subsets of $A$, and neither is $F_\sigma$ or $G_\delta$ in
$\mathbb{R}$ in general; what the proof produces are two subsets of $\mathbb{R}$
that cut down to them. The absolute form is stated only for $A = \mathbb{R}$,
which is the case [[thm-continuity-set-realisation]] and
[[cor-no-function-is-continuous-exactly-on-q]] use.

## Facts & Assumptions

**Given:** $A \subseteq \mathbb{R}$ and a function $f : A \to \mathbb{R}$.

[L1] $f$ is continuous at $c \in A$ if and only if $\omega_f(c) = 0$; and $\omega_f(c) \ge 0$ for every $c \in A$ ([[thm-continuity-iff-oscillation-zero]], [[def-oscillation]], [[def-extended-reals]]).

[L2] For every real $\varepsilon > 0$ there is a closed $G \subseteq \mathbb{R}$ with $\{x \in A : \omega_f(x) \ge \varepsilon\} = A \cap G$ ([[lem-oscillation-superlevel-sets-are-closed]]).

[L3] For every real $\eta > 0$ there is a natural $m \ge 1$ with $1/\iota(m) < \eta$, where $\iota(m)$ is the canonical natural of $m$ in $\mathbb{R}$; and $\iota$ is strictly increasing and positive on the naturals $\ge 1$ ([[cor-archimedean-reciprocal]], [[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L4] A subset of $\mathbb{R}$ is $F_\sigma$ when it is the union of a sequence of closed sets and $G_\delta$ when it is the intersection of a sequence of open sets; $S$ is $F_\sigma$ if and only if $\mathbb{R} \setminus S$ is $G_\delta$ ([[def-f-sigma-g-delta]], [[def-open-and-closed-in-r]]).

## Proof

**Proof technique:** direct.

1.1 For each $n \in \mathbb{N}$ put $\varepsilon_n := 1/\iota(n+1)$, a positive real since $n + 1 \ge 1$, and let $G_n \subseteq \mathbb{R}$ be closed with $\{x \in A : \omega_f(x) \ge \varepsilon_n\} = A \cap G_n$. [L2, L3, construct]

1.2 $D = \{\, x \in A : \omega_f(x) > 0 \,\}$: a point $x \in A$ is a discontinuity exactly when $\omega_f(x) \ne 0$, and $\omega_f(x) \ge 0$ always, so exactly when $\omega_f(x) > 0$. [L1]

2.1 $D \subseteq \bigcup_{n \in \mathbb{N}} (A \cap G_n)$. Let $x \in D$, so $\omega_f(x) > 0$. If $\omega_f(x) \ge \varepsilon_0 = 1$ then $x \in A \cap G_0$. Otherwise $0 < \omega_f(x) < 1$, so $\omega_f(x)$ is a positive real, and there is a natural $m \ge 1$ with $1/\iota(m) < \omega_f(x)$; writing $m = n + 1$ with $n \in \mathbb{N}$ gives $\omega_f(x) > \varepsilon_n$, hence $x \in A \cap G_n$. [step 1.1, step 1.2, L3]

2.2 Conversely $\bigcup_{n \in \mathbb{N}} (A \cap G_n) \subseteq D$: if $x \in A \cap G_n$ then $\omega_f(x) \ge \varepsilon_n > 0$, so $x \in D$. [step 1.1, step 1.2, L3]

3.1 Put $F := \bigcup_{n \in \mathbb{N}} G_n$, an $F_\sigma$ subset of $\mathbb{R}$ since each $G_n$ is closed and the family is indexed by $\mathbb{N}$. Then $A \cap F = \bigcup_{n} (A \cap G_n) = D$. [step 1.1, step 2.1, step 2.2, L4]

3.2 Claim 1 is proved: $D = \{x \in A : \omega_f(x) > 0\}$ by step 1.2, and $D = \bigcup_{n \in \mathbb{N}} \{x \in A : \omega_f(x) \ge \varepsilon_n\}$ by steps 2.1 and 2.2, since $A \cap G_n$ is by step 1.1 exactly the set $\{x \in A : \omega_f(x) \ge \varepsilon_n\}$ with $\varepsilon_n = 1/\iota(n+1)$. The union is increasing, since $n \le m$ gives $\iota(n+1) \le \iota(m+1)$ and hence $\varepsilon_m \le \varepsilon_n$. [step 1.1, step 1.2, step 2.1, step 2.2, L3]

4.1 Put $V := \mathbb{R} \setminus F$, a $G_\delta$ subset of $\mathbb{R}$. Then $A \cap V = A \setminus (A \cap F) = A \setminus D = C$. [step 3.1, L4]

5.1 Claim 2 is proved by steps 3.1 and 4.1; and for $A = \mathbb{R}$ the two identities read $D = F$ and $C = V$, so $D$ is $F_\sigma$ and $C$ is $G_\delta$ outright. [step 3.1, step 3.2, step 4.1] ∎

## Remarks

- **The exhaustion is indexed from $0$ and the thresholds are $1/\iota(n+1)$.** $\mathbb{N}$ contains $0$, so the sequence of thresholds is $1, 1/2, 1/3, \dots$ and never $1/\iota(0)$, which is not defined. Writing the union as $\bigcup_{n \ge 1} \{\omega_f \ge 1/\iota(n)\}$ names the same family; the form above is used because a sequence in this library is a function on $\mathbb{N}$.

- **The converse holds and is proved separately.** Every $G_\delta$ subset of $\mathbb{R}$ is the continuity set of some function $\mathbb{R} \to \mathbb{R}$ ([[thm-continuity-set-realisation]]), so the two classes coincide exactly. What the present theorem contributes is the direction that constrains: no function can have a continuity set that fails to be $G_\delta$, and [[cor-no-function-is-continuous-exactly-on-q]] spends that on $\mathbb{Q}$.
````

