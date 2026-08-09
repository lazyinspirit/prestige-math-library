# Independent repair certifier brief — Wave 7, step A6

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30) — binding on every current
> and future agent.** Use commands already allowed inside the workspace sandbox;
> choose non-escalated forms and never ask the owner to approve a shell command.
> If an indispensable operation has no escalation-free form, report a blocker.

You are **GPT 5.6 Terra** at `xhigh` effort with a 1,000,000-token context
window. You are an independent, read-only certifier of one Audit-Beta repair.
You did not author it. Your Codex lane has a mechanically read-only shell: use
non-mutating commands such as `rg`, `sed`, and `git diff` to read the current
workspace and use web access where a source check is material. Do not edit,
delegate, escalate, or ask for a shell permission. Shell reads already allowed
inside the read-only sandbox require no owner approval.

## Triage — the standing rule (verbatim, binding on you)

- **Non-negotiable:** mathematical accuracy, logical validity, correct
  citation.
- **Explicitly acceptable, spend no effort:** minor citational quirks; logical
  gaps a competent reader closes **within 30 seconds**; other non-fatal quirks;
  imperfection at the level of the letter.

Read the assigned item's **current final text from disk**, not merely its task
summary. Read each dependency relevant to the repaired inference. Check the
title and public statement, every numbered step, Facts & Assumptions, Remarks,
dependency lists, provenance tags, and verification block. Where an exact
external source is material, use web access to check that source. Confirm that
stale pre-repair `verification.judge`/`verification.audited` evidence is absent
and that the stated repair fixes its named defect without introducing a new
one. A passing mechanical gate is supporting evidence, not a mathematical
substitute.

Return exactly:

```text
ITEM: <id>
VERDICT: CERTIFIED | REFUSED | BLOCKED
CURRENT-TEXT: READ
MATHEMATICS: [concise evidence]
CITATIONS: [concise evidence]
METADATA: [provenance/dependencies/stale-verdict disposition]
FINDINGS: NONE | [fatal defect or concrete blocker]
```

Do not suggest optional polishing and do not write a verification stamp. Audit-
Alpha decides whether the independent reading licenses one.


---

# This dispatch

## Assigned repair — `thm-composition-of-function-limits`

Item path: `items/thm-composition-of-function-limits.md`

Normalized final-text SHA-256 at dispatch: `723958c421c313d3f0f0527a4997c76f5021296adcfccb91b89485141992b8a1`

Split reasons: ["body text"]

Provenance ledger: `wave7-real-analysis-completeness-limits.provenance.jsonl`

The four Wave 7 findings ledgers on disk record the original defect and Beta's repair. Locate this id there before certifying.

Read the current target from disk and every dependency needed to check the repair. The generated manifest rows are supplied only as a completeness checklist:

```json
[
  {
    "source": "thm-composition-of-function-limits",
    "sourcePage": "limits-of-real-functions",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "def-function-limit",
    "declared_target": "def-function-limit",
    "target_statement_provenance": "literature-derived",
    "targetPage": "limits-of-real-functions",
    "targetBatch": "wave7-real-analysis-completeness-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-composition-of-function-limits",
    "sourcePage": "limits-of-real-functions",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "def-limit-point-r",
    "declared_target": "def-limit-point-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-composition-of-function-limits",
    "sourcePage": "limits-of-real-functions",
    "batch": "wave7-real-analysis-completeness-limits",
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
    "source": "thm-composition-of-function-limits",
    "sourcePage": "limits-of-real-functions",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "lem-of-abs-value",
    "declared_target": "lem-of-abs-value",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-composition-of-function-limits",
    "sourcePage": "limits-of-real-functions",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "def-ordered-field",
    "declared_target": "def-ordered-field",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

For a byte-exact cross-check, the current item at dispatch was:

````markdown
---
id: thm-composition-of-function-limits
kind: theorem
title: "Composition of limits holds under either hypothesis: $f$ is defined at $L$ with value $M$, or $g$ avoids $L$ on a punctured neighbourhood of $c$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-function-limit, def-limit-point-r, def-neighbourhood-r, lem-of-abs-value, def-ordered-field]
justified_by: []
aliases: [thm-limit-of-a-composition]
landmark: true
short: "composition of limits"
proof_strategy: cases
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, §3.1: Limits of functions"
      url: "https://www.jirka.org/ra/html/sec_limoffunc.html"
    - title: "Limit of a function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_function"
    - title: "J. Lebl, Basic Analysis I, §3.1"
      url: "https://www.jirka.org/ra/"
    - title: "T. Tao, Analysis I, 3rd ed., §9.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $A, B \subseteq \mathbb{R}$, let $g : A \to \mathbb{R}$ with
$g(A) \subseteq B$, and let $f : B \to \mathbb{R}$, so that the composite
$f \circ g : A \to \mathbb{R}$ is defined. Let $c$ be a limit point of $A$ and
$L$ a limit point of $B$ ([[def-limit-point-r]]), and suppose the limits

$$\lim_{x \to c} g(x) = L \qquad \text{and} \qquad \lim_{y \to L} f(y) = M$$

both exist, with the stated values ([[def-function-limit]]). Suppose in addition
that **at least one** of the following holds:

- **(i)** $L \in B$ and $f(L) = M$;
- **(ii)** there is a real $\eta > 0$ with $g(x) \ne L$ for every $x \in A$
  satisfying $0 < |x - c| < \eta$.

Then the limit of $f \circ g$ at $c$ **exists**, and

$$\lim_{x \to c} f\bigl(g(x)\bigr) \;=\; \lim_{y \to L} f(y) \;=\; M .$$

**At least one extra hypothesis is necessary.** With both omitted the statement is
false, and [[fs-naive-composition-of-limits]] refutes it with a two-line witness
in which (i) fails because $f(L) \ne M$ and (ii) fails because $g$ is constantly
equal to $L$.

**Why an extra hypothesis is needed at all.** The inner limit controls $g(x)$
only up to $|g(x) - L| < \rho$; it does not prevent $g(x)$ from *equalling* $L$.
But [[def-function-limit]] says nothing about $f$ at the point $L$, so the outer
estimate is unavailable exactly at the values $g(x) = L$. Hypothesis (i) supplies
the missing value directly; hypothesis (ii) excludes those values.

## Facts & Assumptions

**Given:** Sets $A, B \subseteq \mathbb{R}$, functions $g : A \to \mathbb{R}$ with $g(A) \subseteq B$ and $f : B \to \mathbb{R}$, a limit point $c$ of $A$, a limit point $L$ of $B$, and reals with $\lim_{x \to c} g(x) = L$ and $\lim_{y \to L} f(y) = M$; and the assumption that (i) or (ii) of the statement holds ([[def-function-limit]], [[def-limit-point-r]]).

[L1] The limit condition: $\lim_{x \to c} h(x) = P$ means that for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x$ in the domain of $h$ with $0 < |x - c| < \delta$ satisfies $|h(x) - P| < \varepsilon$ ([[def-function-limit]]).

[L2] Absolute value: $|u| \ge 0$, and $|u| = 0$ if and only if $u = 0$ ([[lem-of-abs-value]]).

[L3] Order arithmetic: of two positive reals the smaller is positive, the order being total; and trichotomy ([[def-ordered-field]]).

[L4] Limit point, and neighbourhoods ([[def-limit-point-r]], [[def-neighbourhood-r]]).

## Proof

**Proof technique:** cases.

1.1 Let $\varepsilon > 0$ be an arbitrary real. By [L1] applied to $f$ at $L$, fix a real $\rho > 0$ such that every $y \in B$ with $0 < |y - L| < \rho$ satisfies $|f(y) - M| < \varepsilon$; then by [L1] applied to $g$ at $c$, with $\rho$ in the role of the tolerance, fix a real $\delta_1 > 0$ such that every $x \in A$ with $0 < |x - c| < \delta_1$ satisfies $|g(x) - L| < \rho$. [L1, choose]

2.1 Case (i): assume $L \in B$ and $f(L) = M$, and put $\delta := \delta_1 > 0$. Let $x \in A$ with $0 < |x - c| < \delta$ and set $y := g(x)$, an element of $B$ since $g(A) \subseteq B$; then $|y - L| < \rho$. If $y = L$ then $|f(y) - M| = |f(L) - M| = |0| = 0 < \varepsilon$; and if $y \ne L$ then $0 < |y - L| < \rho$, so $|f(y) - M| < \varepsilon$. In both events $|(f \circ g)(x) - M| < \varepsilon$. [step 1.1, assume-case value, L1, L2, L3]

2.2 Case (ii): assume there is a real $\eta > 0$ with $g(x) \ne L$ for every $x \in A$ satisfying $0 < |x - c| < \eta$, and let $\delta$ be the smaller of $\delta_1$ and $\eta$, so $\delta > 0$. Let $x \in A$ with $0 < |x - c| < \delta$ and set $y := g(x) \in B$; then $y \ne L$, so $|y - L| > 0$, and $|y - L| < \rho$, so $0 < |y - L| < \rho$ and $|(f \circ g)(x) - M| = |f(y) - M| < \varepsilon$. [step 1.1, assume-case avoid, L1, L2, L3]

3.1 By hypothesis at least one of (i) and (ii) holds, so in either case a real $\delta > 0$ has been produced with $|(f \circ g)(x) - M| < \varepsilon$ for every $x \in A$ satisfying $0 < |x - c| < \delta$; since $\varepsilon > 0$ was arbitrary and $c$ is a limit point of $A$, the limit of $f \circ g$ at $c$ exists and equals $M$. [step 2.1, step 2.2, L1, L4, cases-exhaustive] ∎

## Remarks

- **The hypothesis that $L$ is a limit point of $B$ is what makes $\lim_{y \to L} f(y)$ meaningful at all** ([[def-function-limit]]); it is not an extra assumption of convenience. Note that it does not follow from $\lim_{x \to c} g(x) = L$: a constant $g$ has that limit while $B$ may be a set for which $L$ is isolated.

- **Hypothesis (i) is the continuity hypothesis in disguise.** Saying $L \in B$ and $f(L) = M = \lim_{y \to L} f(y)$ is exactly saying that $f$ is continuous at $L$ in the sense the next page of this track will define; that is the form in which this theorem is usually quoted, and it is why textbook statements of "the limit of a composition" almost always assume continuity of the outer function.

- **Hypothesis (ii) is the one that survives without continuity**, and it is the hypothesis under which substitutions such as $y = 1/x$ are legitimate: there the inner function omits the critical value on a punctured neighbourhood for a structural reason, not by assumption on $f$.

- **The two hypotheses are genuinely different**, neither implying the other. The companion page exhibits a pair satisfying neither, and the same pair with the inner function replaced by the identity, which satisfies (ii) but not (i).
````
