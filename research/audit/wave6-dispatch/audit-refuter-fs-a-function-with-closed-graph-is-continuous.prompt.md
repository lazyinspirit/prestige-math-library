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

## Target item — `fs-a-function-with-closed-graph-is-continuous`

Normalized current SHA-256: `4059bd8203a7b26d9e16a09e08d9c8637ab3c2f5c5e06404e2e615fafe7a41a7`

The complete current item follows, including frontmatter:

````markdown
---
id: fs-a-function-with-closed-graph-is-continuous
kind: false-statement
title: "FALSE: every function between topological spaces whose graph is closed in the product is continuous"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-the-closed-graph-criterion-over-a-compact-hausdorff-codomain,
       def-product-topology, def-topology-basis-subbasis, def-metrizable-space,
       lem-real-line-is-a-metric-space, def-continuity-real,
       thm-algebra-of-continuous-functions, def-continuous-map-top,
       thm-closure-characterisation-top, def-interval, cor-archimedean-reciprocal,
       def-compact-space]
justified_by: []
aliases: []
landmark: false
short: "a closed graph does not imply continuity"
proof_strategy: constructive
verification:
  precheck: pass
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Closed graph theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closed_graph_theorem"
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "Analysis 3103, Handout 7 (UCL)"
      url: "https://www.ucl.ac.uk/~ucahad0/2010/3103_handout_7.pdf"
pipeline_run: null
---

## Statement

**False claim:** if $X$ and $Y$ are topological spaces and $f : X \to Y$ is a
function whose graph $G_f$ is closed in $X \times Y$ with the product topology
([[def-product-topology]]), then $f$ is continuous
([[def-continuous-map-top]]).

The refutation is the function $f : \mathbb{R} \to \mathbb{R}$, with $\mathbb{R}$
carrying its usual topology ([[lem-real-line-is-a-metric-space]],
[[def-metrizable-space]]), given by

$$f(x) := \frac{1}{x} \ \ (x \ne 0), \qquad f(0) := 0 .$$

Its graph is closed in $\mathbb{R} \times \mathbb{R}$ and it is not continuous at
$0$. Since a map into a **compact** space with closed graph *is* continuous
([[thm-the-closed-graph-criterion-over-a-compact-hausdorff-codomain]], claim 1),
the same witness shows as a by-product that $\mathbb{R}$ with its usual topology
is not compact ([[def-compact-space]]): the compactness hypothesis in that
theorem is what the claim above drops, and it is not redundant.

## Facts & Assumptions

**Given:** $\mathbb{R}$ with its usual topology, the product $\mathbb{R} \times \mathbb{R}$ with the product topology, the function $f$ above, and its graph $G_f = \{\, z \in \mathbb{R} \times \mathbb{R} : z_1 = f(z_0) \,\}$.

[A1] A set $U \subseteq \mathbb{R}$ is open in the usual topology exactly when for every $x \in U$ there is a real $r > 0$ with $(x - r, x + r) \subseteq U$; in particular every bounded open interval is open ([[lem-real-line-is-a-metric-space]], claims 2 and 3, [[def-metrizable-space]], [[def-interval]]).

[A2] The boxes $U \times W$ with $U$ and $W$ open in $\mathbb{R}$ form a basis for the product topology on $\mathbb{R} \times \mathbb{R}$, the index set being $2$ ([[def-product-topology]], [[def-topology-basis-subbasis]]).

[A3] $f$ is continuous at $x_0$ exactly when for every open $V$ with $f(x_0) \in V$ there is an open $U \ni x_0$ with $f[U] \subseteq V$, and continuous when this holds everywhere ([[def-continuous-map-top]]).

[L1] A point lies in $\overline{A}$ exactly when every basic open set containing it meets $A$, and $A$ is closed exactly when $A = \overline{A}$ ([[thm-closure-characterisation-top]], claims 1(d) and 2).

[L2] The reciprocal $x \mapsto 1/x$ is continuous at every $c \ne 0$ as a function on $\{\, x \in \mathbb{R} : x \ne 0 \,\}$, being the quotient of the constant function $1$ by the identity ([[thm-algebra-of-continuous-functions]], claims 4 and 5); continuity at $c$ means that for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that $x \ne 0$ and $|x - c| < \delta$ imply $|1/x - 1/c| < \varepsilon$ ([[def-continuity-real]]).

[L3] For every real $\varepsilon > 0$ there is a natural number $n \ge 1$ with $1/n < \varepsilon$ ([[cor-archimedean-reciprocal]]).

[L4] If the codomain is compact and the graph is closed then the map is continuous ([[thm-the-closed-graph-criterion-over-a-compact-hausdorff-codomain]], claim 1, [[def-compact-space]]).

## Refutation

**Proof technique:** constructive.

1.1 Define $f : \mathbb{R} \to \mathbb{R}$ by $f(x) := 1/x$ for $x \ne 0$ and $f(0) := 0$; this is a function on all of $\mathbb{R}$, every nonzero real having a multiplicative inverse. [construct]

1.2 Let $z = (a,b) \in \mathbb{R} \times \mathbb{R}$ with $z \notin G_f$, so that $b \ne f(a)$. [given]

1.3 $f$ is not continuous at $0$: put $V := (-1,1)$, an open set containing $f(0) = 0$, and let $U$ be any open set with $0 \in U$; by [A1] there is a real $r > 0$ with $(-r, r) \subseteq U$, by [L3] there is a natural $n \ge 1$ with $1/n < \min\{r, 1\}$, and then $1/n \in U$ while $f(1/n) = n > 1$, so $f(1/n) \notin V$ and $f[U] \not\subseteq V$. [A1, A3, L3]

2.1 Suppose $a \ne 0$, so $f(a) = 1/a$ and $\varepsilon := |b - 1/a|/2 > 0$; by [L2] fix a real $\delta_1 > 0$ such that $x \ne 0$ and $|x - a| < \delta_1$ imply $|1/x - 1/a| < \varepsilon$, and put $\delta := \min\{\delta_1, |a|\} > 0$. [step 1.2, L2, choose]

2.2 Suppose $a = 0$, so $f(a) = 0$ and $b \ne 0$, hence $|b| > 0$; put $\rho := 1/(2|b|) > 0$ and $\sigma := |b|/2 > 0$ and $B := (-\rho, \rho) \times (b - \sigma, b + \sigma)$, a basic open set containing $z = (0,b)$. [step 1.2, A1, A2, construct]

3.1 With $a \ne 0$ the box $B := (a - \delta, a + \delta) \times (b - \varepsilon, b + \varepsilon)$ is a basic open set containing $z$ and $B \cap G_f = \varnothing$: for $(x,y) \in B$ one has $|x - a| < \delta \le |a|$, so $x \ne 0$ and $f(x) = 1/x$ with $|1/x - 1/a| < \varepsilon$, whence $|f(x) - b| \ge |b - 1/a| - |1/x - 1/a| > 2\varepsilon - \varepsilon = \varepsilon > |y - b|$ and therefore $y \ne f(x)$. [step 2.1, A1, A2]

3.2 With $a = 0$ the box $B$ of step 2.2 satisfies $B \cap G_f = \varnothing$: let $(x,y) \in B$ with $y = f(x)$; if $x = 0$ then $y = 0$ and $|y - b| = |b| > \sigma$, contradicting $y \in (b - \sigma, b + \sigma)$; and if $x \ne 0$ then $0 < |x| < \rho$ gives $|f(x)| = 1/|x| > 1/\rho = 2|b|$, while $|y| \le |b| + |y - b| < |b| + \sigma = 3|b|/2 < 2|b|$, contradicting $y = f(x)$. [step 2.2]

4.1 Every $z \notin G_f$ has a basic open set containing it and missing $G_f$, by step 3.1 if its first coordinate is nonzero and by step 3.2 if it is zero; so no such $z$ lies in $\overline{G_f}$, whence $\overline{G_f} = G_f$ and $G_f$ is closed in $\mathbb{R} \times \mathbb{R}$. [step 1.2, step 3.1, step 3.2, L1]

5.1 By step 1.3 and [A3] the function $f$ is not continuous, while by step 4.1 its graph is closed; so the claim is false. [step 4.1, step 1.3, A3]

6.1 By [L4] a function into a compact codomain with closed graph is continuous, so steps 4.1 and 1.3 also show that $\mathbb{R}$ with its usual topology is not compact; the witness therefore refutes the claim and locates the missing hypothesis at the same time. [step 4.1, step 1.3, step 5.1, L4, discharge-construct] ∎

## Remarks

- **Which hypothesis was dropped.** The true statements in this neighbourhood are the two halves of [[thm-the-closed-graph-criterion-over-a-compact-hausdorff-codomain]]: a closed graph gives continuity when the codomain is **compact**, and continuity gives a closed graph when the codomain is **Hausdorff** ([[lem-the-graph-of-a-continuous-map-into-a-hausdorff-space-is-closed]]). The claim above asks for the first conclusion with neither hypothesis, and the witness has a Hausdorff codomain, so it is compactness and not separation that is missing.

- **Where the closedness of the graph comes from, informally.** Off the vertical axis the graph is closed because the reciprocal is continuous there; on the axis it is closed because the function *escapes*: near $0$ the values are large in absolute value, so a small box around a point $(0,b)$ with $b \ne 0$ cannot meet the graph at all. That escape is exactly what a compact codomain would forbid.

- **The value chosen at $0$ is immaterial.** Replacing $f(0) = 0$ by any fixed real $c$ leaves both conclusions standing. For the graph, a point $(0,b)$ with $b \ne c$ is separated from it by the box $(-\rho, \rho) \times (b - \sigma, b + \sigma)$ with $\sigma := |b - c|/2$ and $\rho := 1/(|b| + \sigma)$: the value at $0$ is $c$, which lies outside the second factor, and for $x \ne 0$ in the first factor $|1/x| > |b| + \sigma$ forces $|1/x - b| > \sigma$. For the discontinuity, step 1.3 uses only that $f(1/n) = n$ exceeds every bound, which does not involve $f(0)$ at all. The value $0$ is chosen above only because it makes the two computations shortest.
````

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "A1",
      "source": "lem-real-line-is-a-metric-space",
      "source_section": "Statement",
      "quote": "1. $d_{\\mathbb{R}}$ is a metric on $\\mathbb{R}$ ([[def-metric-space]]); it is called the **usual metric** of $\\mathbb{R}$. 2. For $x \\in \\mathbb{R}$ and $r > 0$ the open ball is the bounded open interval ([[def-interval]], [[def-metric-ball]]) $$B(x,r) = (x-r,\\ x+r),$$ and the closed ball is $\\bar B(x,r) = [x-r,\\ x+r]$. 3. Consequently $U \\subseteq \\mathbb{R}$ is open in the metric topology of $d_{\\mathbb{R}}$ ([[def-metric-topology]]) exactly when for every $x \\in U$ there is $r > 0$ with $(x-r, x+r) \\subseteq U$. This topology is called the **usual topology** of $\\mathbb{R}$. 4. $(\\mathbb{R}, d_{\\mathbb{R}})$ is not a bounded metric space ([[def-metric-bounded-diameter]]): no ball contains $\\mathbb{R}$, so $\\operatorname{diam}(\\mathbb{R})$ is not defined.",
      "uses": [
        "1.3",
        "2.2",
        "3.1"
      ]
    },
    {
      "fact": "A1",
      "source": "def-metrizable-space",
      "source_section": "Definition",
      "quote": "**The usual topology of $\\mathbb{R}$.** The absolute value makes $\\mathbb{R}$ a metric space under $d_{\\mathbb{R}}(x,y) = |x-y|$, its open balls are the bounded open intervals, and the resulting metric topology is what claim 3 of [[lem-real-line-is-a-metric-space]] names the **usual topology** of $\\mathbb{R}$. That is the topology meant by the phrase throughout these two pages, and $\\mathbb{R}$ carrying it is metrizable by definition. Every statement about it on these two pages is proved from the metric $d_{\\mathbb{R}}$ and the bridge above, and no example re-derives any of it.",
      "uses": [
        "1.3",
        "2.2",
        "3.1"
      ]
    },
    {
      "fact": "A1",
      "source": "def-interval",
      "source_section": "Definition",
      "quote": "An interval is **open** when both of its written endpoints are excluded, that is for the forms $(a,b)$, $(a,\\infty)$, $(-\\infty,b)$ and $(-\\infty,\\infty)$; it is **closed** when both written endpoints are included, that is for $[a,b]$, $[a,\\infty)$, $(-\\infty,b]$ and $(-\\infty,\\infty)$. The forms $[a,b)$ and $(a,b]$ are **half-open**.",
      "uses": [
        "1.3",
        "2.2",
        "3.1"
      ]
    },
    {
      "fact": "A2",
      "source": "def-product-topology",
      "source_section": "Definition",
      "quote": "**The product topology.** The **product topology** $\\mathcal{T}^{\\Pi}$ on $\\prod_i X_i$ is the initial topology of the family of projections $(\\pi_i)_{i \\in I}$ ([[def-initial-and-final-topology]]): the topology generated by the subbasis",
      "uses": [
        "2.2",
        "3.1"
      ]
    },
    {
      "fact": "A2",
      "source": "def-topology-basis-subbasis",
      "source_section": "Definition",
      "quote": "A family $\\mathcal{B} \\subseteq \\mathcal{T}$ is a **basis for $\\mathcal{T}$** if every open set is a union of members of $\\mathcal{B}$: for every $U \\in \\mathcal{T}$ there is $\\mathcal{B}_U \\subseteq \\mathcal{B}$ with $U = \\bigcup \\mathcal{B}_U$. Equivalently, and this is the form used in proofs,",
      "uses": [
        "2.2",
        "3.1"
      ]
    },
    {
      "fact": "A3",
      "source": "def-continuous-map-top",
      "source_section": "Definition",
      "quote": "**The same condition with open sets only.** $f$ is continuous at $x$ if and only if for every open $V \\subseteq Y$ with $f(x) \\in V$ there is an open $U \\subseteq X$ with $x \\in U$ and $f[U] \\subseteq V$. Indeed, if $f$ is continuous at $x$ and $V$ is such an open set, then $V$ is a neighbourhood of $f(x)$, so $f^{-1}[V]$ is a neighbourhood of $x$ and contains an open $U \\ni x$, which satisfies $f[U] \\subseteq V$. Conversely, given the displayed condition and a neighbourhood $V$ of $f(x)$, fix open $V_0$ with $f(x) \\in V_0 \\subseteq V$ and then open $U \\ni x$ with $f[U] \\subseteq V_0$; then $x \\in U \\subseteq f^{-1}[V_0] \\subseteq f^{-1}[V]$, so $f^{-1}[V]$ is a neighbourhood of $x$. Both forms are used below and are the same statement written twice.",
      "uses": [
        "1.3",
        "5.1"
      ]
    },
    {
      "fact": "L1",
      "source": "thm-closure-characterisation-top",
      "source_section": "Statement",
      "quote": "1. The following four conditions are equivalent. - (a) $x \\in \\overline{A}$; - (b) $N \\cap A \\ne \\varnothing$ for every neighbourhood $N$ of $x$ ([[def-neighbourhood-top]]); - (c) $U \\cap A \\ne \\varnothing$ for every open $U$ with $x \\in U$; - (d) $B \\cap A \\ne \\varnothing$ for every $B \\in \\mathcal{B}$ with $x \\in B$. 2. $\\overline{A}$ is closed, contains $A$, and is contained in every closed $F \\subseteq X$ with $A \\subseteq F$; so it is the smallest closed superset of $A$, and $A$ is closed if and only if $A = \\overline{A}$. 3. $\\overline{A} = A \\cup A'$.",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-algebra-of-continuous-functions",
      "source_section": "Statement",
      "quote": "5. every constant function $A \\to \\mathbb{R}$ and the identity $\\mathrm{id} : A \\to \\mathbb{R}$, $x \\mapsto x$, are continuous on $A$; hence so is $x \\mapsto x^{n}$ for every $n \\in \\mathbb{N}$ ([[def-integer-power]]), and hence so is every **polynomial function** $x \\mapsto a_0 + a_1 x + \\dots + a_n x^{n}$ with real coefficients.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-continuity-real",
      "source_section": "Definition",
      "quote": "In the language of neighbourhoods: for every real $\\varepsilon > 0$ there is a real $\\delta > 0$ with $$f\\bigl(A \\cap N_{\\delta}(c)\\bigr) \\;\\subseteq\\; N_{\\varepsilon}\\bigl(f(c)\\bigr).$$ $f$ is **continuous on $A$** when it is continuous at every point of $A$.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "cor-archimedean-reciprocal",
      "source_section": "Statement",
      "quote": "Let $F$ be a complete ordered field ([[def-complete-ordered-field]]) and let $\\varepsilon \\in F$ with $\\varepsilon > 0$. Then there is a natural number $n \\ge 1$ such that",
      "uses": [
        "1.3"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-the-closed-graph-criterion-over-a-compact-hausdorff-codomain",
      "source_section": "Statement",
      "quote": "1. **Closed graph implies continuity, over a compact codomain.** If $Y$ is compact ([[def-compact-space]]) and $G_f$ is closed in $X \\times Y$, then $f$ is continuous ([[def-continuous-map-top]]). *No separation hypothesis on $Y$ is used in this direction.* 2. **Continuity implies closed graph, over a Hausdorff codomain.** If $Y$ is Hausdorff ([[def-hausdorff-space]]) and $f$ is continuous, then $G_f$ is closed in $X \\times Y$. 3. **The equivalence.** If $Y$ is compact **and** Hausdorff then $f$ is continuous if and only if $G_f$ is closed in $X \\times Y$.",
      "uses": [
        "6.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-compact-space",
      "source_section": "Definition",
      "quote": "- An **open cover** of $(X,\\mathcal{T})$ is a family $\\mathcal{U} \\subseteq \\mathcal{T}$ of open sets with $X = \\bigcup \\mathcal{U}$, where $\\bigcup \\mathcal{U} = \\{\\, x \\in X : x \\in U \\text{ for some } U \\in \\mathcal{U} \\,\\}$. - A **subcover** of $\\mathcal{U}$ is a subfamily $\\mathcal{V} \\subseteq \\mathcal{U}$ that is itself an open cover. - A family $\\mathcal{V}$ of sets is **finite** when $\\mathcal{V} = \\varnothing$ or there are $n \\in \\mathbb{N}$ and sets $V_0, \\dots, V_n$ with $\\mathcal{V} = \\{V_0, \\dots, V_n\\}$; repetitions in the list are allowed and harmless. - $(X,\\mathcal{T})$ is **compact** when every open cover of it has a finite subcover: for every open cover $\\mathcal{U}$, either $X = \\varnothing$ and the empty subfamily covers it, or there are $n \\in \\mathbb{N}$ and $U_0, \\dots, U_n \\in \\mathcal{U}$ with $$X = U_0 \\cup \\dots \\cup U_n .$$ - A subset $A \\subseteq X$ is a **compact subset** of $X$ when the subspace $(A, \\mathcal{T}_A)$ is a compact topological space, $\\mathcal{T}_A$ being the subspace topology ([[def-subspace-topology-top]]).",
      "uses": [
        "6.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "Define $f : \\mathbb{R} \\to \\mathbb{R}$ by $f(x) := 1/x$ for $x \\ne 0$ and $f(0) := 0$; this is a function on all of $\\mathbb{R}$, every nonzero real having a multiplicative inverse. [construct]",
      "step": "1.1",
      "inputs": [
        "statement hypotheses and the definitions or objects introduced in this step"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "Let $z = (a,b) \\in \\mathbb{R} \\times \\mathbb{R}$ with $z \\notin G_f$, so that $b \\ne f(a)$. [given]",
      "step": "1.2",
      "inputs": [
        "statement hypotheses and the definitions or objects introduced in this step"
      ]
    },
    {
      "id": "step-1.3",
      "claim": "$f$ is not continuous at $0$: put $V := (-1,1)$, an open set containing $f(0) = 0$, and let $U$ be any open set with $0 \\in U$; by [A1] there is a real $r > 0$ with $(-r, r) \\subseteq U$, by [L3] there is a natural $n \\ge 1$ with $1/n < \\min\\{r, 1\\}$, and then $1/n \\in U$ while $f(1/n) = n > 1$, so $f(1/n) \\notin V$ and $f[U] \\not\\subseteq V$. [A1, A3, L3]",
      "step": "1.3",
      "inputs": [
        "A1",
        "L3",
        "A3"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Suppose $a \\ne 0$, so $f(a) = 1/a$ and $\\varepsilon := |b - 1/a|/2 > 0$; by [L2] fix a real $\\delta_1 > 0$ such that $x \\ne 0$ and $|x - a| < \\delta_1$ imply $|1/x - 1/a| < \\varepsilon$, and put $\\delta := \\min\\{\\delta_1, |a|\\} > 0$. [step 1.2, L2, choose]",
      "step": "2.1",
      "inputs": [
        "L2",
        "1.2"
      ]
    },
    {
      "id": "step-2.2",
      "claim": "Suppose $a = 0$, so $f(a) = 0$ and $b \\ne 0$, hence $|b| > 0$; put $\\rho := 1/(2|b|) > 0$ and $\\sigma := |b|/2 > 0$ and $B := (-\\rho, \\rho) \\times (b - \\sigma, b + \\sigma)$, a basic open set containing $z = (0,b)$. [step 1.2, A1, A2, construct]",
      "step": "2.2",
      "inputs": [
        "1.2",
        "A1",
        "A2"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "With $a \\ne 0$ the box $B := (a - \\delta, a + \\delta) \\times (b - \\varepsilon, b + \\varepsilon)$ is a basic open set containing $z$ and $B \\cap G_f = \\varnothing$: for $(x,y) \\in B$ one has $|x - a| < \\delta \\le |a|$, so $x \\ne 0$ and $f(x) = 1/x$ with $|1/x - 1/a| < \\varepsilon$, whence $|f(x) - b| \\ge |b - 1/a| - |1/x - 1/a| > 2\\varepsilon - \\varepsilon = \\varepsilon > |y - b|$ and therefore $y \\ne f(x)$. [step 2.1, A1, A2]",
      "step": "3.1",
      "inputs": [
        "2.1",
        "A1",
        "A2"
      ]
    },
    {
      "id": "step-3.2",
      "claim": "With $a = 0$ the box $B$ of step 2.2 satisfies $B \\cap G_f = \\varnothing$: let $(x,y) \\in B$ with $y = f(x)$; if $x = 0$ then $y = 0$ and $|y - b| = |b| > \\sigma$, contradicting $y \\in (b - \\sigma, b + \\sigma)$; and if $x \\ne 0$ then $0 < |x| < \\rho$ gives $|f(x)| = 1/|x| > 1/\\rho = 2|b|$, while $|y| \\le |b| + |y - b| < |b| + \\sigma = 3|b|/2 < 2|b|$, contradicting $y = f(x)$. [step 2.2]",
      "step": "3.2",
      "inputs": [
        "2.2"
      ]
    },
    {
      "id": "step-4.1",
      "claim": "Every $z \\notin G_f$ has a basic open set containing it and missing $G_f$, by step 3.1 if its first coordinate is nonzero and by step 3.2 if it is zero; so no such $z$ lies in $\\overline{G_f}$, whence $\\overline{G_f} = G_f$ and $G_f$ is closed in $\\mathbb{R} \\times \\mathbb{R}$. [step 1.2, step 3.1, step 3.2, L1]",
      "step": "4.1",
      "inputs": [
        "3.1",
        "3.2",
        "1.2",
        "L1"
      ]
    },
    {
      "id": "step-5.1",
      "claim": "By step 1.3 and [A3] the function $f$ is not continuous, while by step 4.1 its graph is closed; so the claim is false. [step 4.1, step 1.3, A3]",
      "step": "5.1",
      "inputs": [
        "1.3",
        "A3",
        "4.1"
      ]
    },
    {
      "id": "step-6.1",
      "claim": "By [L4] a function into a compact codomain with closed graph is continuous, so steps 4.1 and 1.3 also show that $\\mathbb{R}$ with its usual topology is not compact; the witness therefore refutes the claim and locates the missing hypothesis at the same time. [step 4.1, step 1.3, step 5.1, L4, discharge-construct] ∎",
      "step": "6.1",
      "inputs": [
        "L4",
        "4.1",
        "1.3",
        "5.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "the statement fixes or assumes nonempty spaces or named points, so an empty carrier cannot satisfy its hypotheses"
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "steps 1.1 through 4.1 separately treat the function value and graph fibre at x=0"
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "no independently varying cardinal, dimension, or index has a separate one case"
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "the statement has no separate coincident-map, constant-map, singleton, or collapsed-parameter branch"
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "no interval endpoint or one-sided boundary enters the statement or proof"
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "step 2.1 fixes a continuity radius only after the cited local continuity statement supplies one"
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "the statement is not a biconditional"
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "the statement is not a biconditional"
    }
  ],
  "finite_smoke": []
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "fs-a-function-with-closed-graph-is-continuous",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
    "target": "thm-the-closed-graph-criterion-over-a-compact-hausdorff-codomain",
    "declared_target": "thm-the-closed-graph-criterion-over-a-compact-hausdorff-codomain",
    "target_statement_provenance": null,
    "targetPage": "hausdorff-via-the-diagonal",
    "targetBatch": "wave6-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-a-function-with-closed-graph-is-continuous",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
    "target": "def-product-topology",
    "declared_target": "def-product-topology",
    "target_statement_provenance": "ai-altered",
    "targetPage": "subspaces-products-and-quotients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-a-function-with-closed-graph-is-continuous",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
    "target": "def-topology-basis-subbasis",
    "declared_target": "def-topology-basis-subbasis",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-a-function-with-closed-graph-is-continuous",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
    "target": "def-metrizable-space",
    "declared_target": "def-metrizable-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-a-function-with-closed-graph-is-continuous",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
    "target": "lem-real-line-is-a-metric-space",
    "declared_target": "lem-real-line-is-a-metric-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-a-function-with-closed-graph-is-continuous",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
    "target": "def-continuity-real",
    "declared_target": "def-continuity-real",
    "target_statement_provenance": null,
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-a-function-with-closed-graph-is-continuous",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
    "target": "thm-algebra-of-continuous-functions",
    "declared_target": "thm-algebra-of-continuous-functions",
    "target_statement_provenance": null,
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-a-function-with-closed-graph-is-continuous",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
    "target": "def-continuous-map-top",
    "declared_target": "def-continuous-map-top",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-a-function-with-closed-graph-is-continuous",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
    "target": "thm-closure-characterisation-top",
    "declared_target": "thm-closure-characterisation-top",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-a-function-with-closed-graph-is-continuous",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
    "target": "def-interval",
    "declared_target": "def-interval",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-sequences-and-cauchy-completeness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-a-function-with-closed-graph-is-continuous",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
    "target": "cor-archimedean-reciprocal",
    "declared_target": "cor-archimedean-reciprocal",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-a-function-with-closed-graph-is-continuous",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
    "target": "def-compact-space",
    "declared_target": "def-compact-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Full text of every cited or declared item (13)

### `cor-archimedean-reciprocal`

````markdown
---
id: cor-archimedean-reciprocal
kind: corollary
title: "For every $\\varepsilon > 0$ in a complete ordered field there is a natural $n \\ge 1$ with $1/n < \\varepsilon$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-of-archimedean, lem-of-inverse-positive, def-complete-ordered-field, def-ordered-field, def-field]
justified_by: []
aliases: []
landmark: false
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
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 (Thm 1.20(a) and its corollaries)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §5.4 (Prop. 5.4.12, the Archimedean property)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
    - title: "UTSA Mathematics: The Archimedean property"
      url: "https://mathresearch.utsa.edu/wiki/index.php?title=Real_Numbers%3AArchimedean_Property"
---

## Statement

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

## Facts & Assumptions

**Given:** A complete ordered field $F$ and an element $\varepsilon \in F$ with $\varepsilon > 0$.

[L1] Archimedean property: for every $x \in F$ there is a natural number $n \ge 1$ with $x < n \cdot 1_F$ ([[thm-of-archimedean]], [[def-complete-ordered-field]]).

[L2] Inverses and order: if $a > 0$ then $a^{-1} > 0$, and if $0 < a < b$ then $0 < b^{-1} < a^{-1}$ ([[lem-of-inverse-positive]], [[def-ordered-field]]).

[L3] Field arithmetic: an element $a$ with $a > 0$ is nonzero by trichotomy, hence has a multiplicative inverse $a^{-1}$, and $(a^{-1})^{-1} = a$ ([[def-field]], [[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Since $\varepsilon > 0$, trichotomy gives $\varepsilon \ne 0$, so $\varepsilon^{-1}$ exists, and $\varepsilon^{-1} > 0$. [given, L2, L3]

2.1 Apply [L1] to $x = \varepsilon^{-1}$: fix a natural number $n \ge 1$ with $\varepsilon^{-1} < n \cdot 1_F$. [step 1.1, L1, choose]

3.1 Chaining the two displayed inequalities gives $0 < \varepsilon^{-1} < n \cdot 1_F$; in particular $n \cdot 1_F > 0$, so $n \cdot 1_F \ne 0$ and $1/(n \cdot 1_F)$ is defined. [step 1.1, step 2.1, L3]

4.1 Apply the second claim of [L2] with $a = \varepsilon^{-1}$ and $b = n \cdot 1_F$: $0 < (n \cdot 1_F)^{-1} < (\varepsilon^{-1})^{-1}$. [step 3.1, L2]

5.1 By [L3], $(\varepsilon^{-1})^{-1} = \varepsilon$, so the natural number $n \ge 1$ fixed in step 2.1 satisfies $1/(n \cdot 1_F) < \varepsilon$, which is the assertion. [step 4.1, L3] ∎

## Remarks

- **Monotonicity gives the eventual form for free.** If $m \ge n \ge 1$ then
  $m \cdot 1_F \ge n \cdot 1_F > 0$, because $k \mapsto k \cdot 1_F$ is strictly
  increasing on the naturals $\ge 1$ ([[lem-of-naturals-positive]]), and so
  $1/(m \cdot 1_F) \le 1/(n \cdot 1_F) < \varepsilon$ by [[lem-of-inverse-positive]]
  again. So the corollary yields not merely one index but a threshold: every
  $m \ge n$ satisfies $1/m < \varepsilon$. That one extra line is what a
  convergence proof needs, and it is left to the caller rather than folded into
  the statement, because the caller usually has a threshold of its own to combine
  it with.

- **Completeness is used only through [[thm-of-archimedean]].** Nothing here
  needs the least-upper-bound property directly. The corollary therefore holds
  verbatim in any Archimedean ordered field, in particular in $\mathbb{Q}$, and
  it fails in a non-Archimedean ordered field, where an infinitesimal
  $\varepsilon > 0$ is below every $1/n$ by construction.

- The equivalence is exact: the reciprocal form implies the cofinal form back
  again, since given $x > 0$ one applies it to $\varepsilon = 1/x$. The two are
  the same property written on the two sides of the inversion, and only the
  direction proved above is used in this library.
````

### `def-compact-space`

````markdown
---
id: def-compact-space
kind: definition
title: "Open cover, subcover, and compact topological space; a compact subset is a subspace that is compact in its own right"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-subspace-topology-top, def-standard-topologies, def-countable, def-metric-compactness]
justified_by: []
aliases: [def-compact-topological-space, def-open-cover-top]
landmark: true
short: "open cover, compact space"
verification:
  precheck: n/a
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-05
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "Cover (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cover_(topology)"
    - title: "J. Munkres, Topology, 2nd ed., §26"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "Stacks Project, Section 5.12: Quasi-compact spaces and maps"
      url: "https://stacks.math.columbia.edu/tag/0059"
pipeline_run: null
---
## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

- An **open cover** of $(X,\mathcal{T})$ is a family
  $\mathcal{U} \subseteq \mathcal{T}$ of open sets with $X = \bigcup \mathcal{U}$,
  where $\bigcup \mathcal{U} = \{\, x \in X : x \in U \text{ for some } U \in \mathcal{U} \,\}$.
- A **subcover** of $\mathcal{U}$ is a subfamily $\mathcal{V} \subseteq \mathcal{U}$
  that is itself an open cover.
- A family $\mathcal{V}$ of sets is **finite** when $\mathcal{V} = \varnothing$ or
  there are $n \in \mathbb{N}$ and sets $V_0, \dots, V_n$ with
  $\mathcal{V} = \{V_0, \dots, V_n\}$; repetitions in the list are allowed and
  harmless.
- $(X,\mathcal{T})$ is **compact** when every open cover of it has a finite
  subcover: for every open cover $\mathcal{U}$, either $X = \varnothing$ and the
  empty subfamily covers it, or there are $n \in \mathbb{N}$ and
  $U_0, \dots, U_n \in \mathcal{U}$ with
  $$X = U_0 \cup \dots \cup U_n .$$
- A subset $A \subseteq X$ is a **compact subset** of $X$ when the subspace
  $(A, \mathcal{T}_A)$ is a compact topological space, $\mathcal{T}_A$ being the
  subspace topology ([[def-subspace-topology-top]]).

**Compactness of a subset is defined intrinsically, and only intrinsically.**
The last clause speaks about the subspace $(A, \mathcal{T}_A)$ and its own open
sets, not about families of open subsets of the ambient $X$. The two readings do
agree, but that is a theorem and not a convention: it is
[[lem-compactness-of-a-subspace-is-ambient]], and no item of this library may use
the ambient reading without citing it. Taking the intrinsic reading makes
compactness a property of the topological space $(A, \mathcal{T}_A)$ alone.
Hence it is preserved when $A$ is embedded homeomorphically as a subspace, or
when another ambient space induces the same topology on $A$; it need not be
preserved if the induced topology changes. This is exactly the convention already fixed for
metric spaces by [[def-metric-compactness]], and the agreement of that
definition with this one is [[thm-compactness-agrees-with-metric-compactness]].

**The empty space is compact**, since the empty subfamily of any family covers
it; this is the reason the clause above is written with the two cases. Every
space listed as $\{x_0, \dots, x_n\}$ is compact too: given a cover, each $x_i$
lies in some member, and finitely many members named in this way already cover.
So every finite space is compact, whatever its topology, and in particular the
discrete topology on a finite set is compact while the discrete topology on an
infinite set is not ([[def-standard-topologies]]).

**The finiteness convention.** "Finite" above is the listing form. It agrees with
the definition of finiteness by equinumerosity with a natural number
([[def-countable]]), in both directions, and the agreement is the one already
discharged in [[def-metric-compactness]]: a nonempty set equinumerous with
$m \ge 1$ is listable, and a set listed as $\{a_0, \dots, a_n\}$ injects into
$\sigma(n)$ by sending $x$ to the least $i \le n$ with $a_i = x$. Neither
direction uses a choice principle; the second selects nothing, taking a least
index instead.

**Quasicompact is not used here.** Some authors, following Bourbaki, reserve
*compact* for a space that is both compact in the above sense and Hausdorff, and
call the open-cover condition alone *quasicompact*. This library follows the more
widely adopted convention: **compact** means the open-cover condition and nothing
more, and a Hausdorff hypothesis is always written out. The fork is recorded in
[[rem-compactness-conventions-and-choice-ledger]].

## Remarks

**Why open covers rather than covers by arbitrary sets.** Nothing in the
definition would break if $\mathcal{U}$ were allowed to consist of arbitrary
subsets of $X$, but the resulting notion would be uninteresting: every space is
covered by its singletons, and only a finite space would survive. Openness of the
members is what makes the condition a genuine restriction, and it is what
[[lem-compactness-of-a-subspace-is-ambient]] has to keep track of when the
ambient space changes.

**A warning about the word "cover".** A family may cover $A \subseteq X$ without
being a family of subsets of $A$: the members are open subsets of $X$ and their
union merely contains $A$. That is the ambient reading, and it is a different
statement from "$\mathcal{U}$ is an open cover of the space
$(A, \mathcal{T}_A)$", whose members are open subsets of $A$. Which of the two is
meant is written out everywhere on this page.
````

### `def-continuity-real`

````markdown
---
id: def-continuity-real
kind: definition
title: "Continuity of $f : A \\to \\mathbb{R}$ at a point of $A$ and on $A$: the $\\varepsilon$-$\\delta$ condition, its agreement with $\\lim_{x \\to c} f(x) = f(c)$ at a limit point, and continuity at an isolated point"
status: published
origin: session
deps: [def-function-limit, def-limit-point-r, def-neighbourhood-r, def-open-and-closed-in-r, def-interval, lem-of-abs-value, def-complete-ordered-field]
justified_by: []
aliases: [def-continuity-at-a-point-r]
forward_refs: [cex-dirichlet-is-nowhere-continuous]
landmark: true
short: "continuity of a real function"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.2"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field with its order and
absolute value ([[def-complete-ordered-field]], [[lem-of-abs-value]]), and
neighbourhoods are those of [[def-neighbourhood-r]].

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ and let $c \in A$. Then
$f$ is **continuous at $c$** when

$$(\forall \varepsilon > 0)\ (\exists \delta > 0)\ (\forall x \in A)\ \bigl[\ |x - c| < \delta \ \Longrightarrow\ |f(x) - f(c)| < \varepsilon\ \bigr],$$

with $\varepsilon$ and $\delta$ ranging over the **positive reals**. In the
language of neighbourhoods: for every real $\varepsilon > 0$ there is a real
$\delta > 0$ with

$$f\bigl(A \cap N_{\delta}(c)\bigr) \;\subseteq\; N_{\varepsilon}\bigl(f(c)\bigr).$$

$f$ is **continuous on $A$** when it is continuous at every point of $A$.

**The point $c$ is required to lie in $A$, and the condition is unpunctured.**
Both differ from [[def-function-limit]], and deliberately. There the quantifier
runs over $0 < |x - c| < \delta$, which removes $x = c$; here $x = c$ is allowed,
and at $x = c$ the implication reads $|f(c) - f(c)| = 0 < \varepsilon$, which is
automatic. So allowing $x = c$ costs nothing, and it is what lets the definition
be stated at every point of $A$, including the points where no limit exists.

**Three clauses, and all three are part of the definition.**

1. **At a limit point.** Suppose $c \in A$ is a limit point of $A$
   ([[def-limit-point-r]]). Then $f$ is continuous at $c$ if and only if the
   limit of $f$ at $c$ exists and
   $$\lim_{x \to c} f(x) \;=\; f(c)$$
   ([[def-function-limit]]). Indeed, for a given $\varepsilon > 0$ a $\delta$
   witnessing continuity witnesses the limit condition, because the limit
   condition quantifies over a subset of the points continuity quantifies over;
   and conversely a $\delta$ witnessing $\lim_{x \to c} f(x) = f(c)$ witnesses
   continuity, because the one point it omits, $x = c$, satisfies
   $|f(c) - f(c)| < \varepsilon$ anyway.

2. **At an isolated point.** Suppose $c \in A$ is an isolated point of $A$
   ([[def-limit-point-r]]), so that $N_{\eta}(c) \cap A = \{c\}$ for some real
   $\eta > 0$. Then **every** $f : A \to \mathbb{R}$ is continuous at $c$: take
   $\delta := \eta$, so that the only $x \in A$ with $|x - c| < \delta$ is $c$
   itself, and $|f(c) - f(c)| = 0 < \varepsilon$.

3. **On a set.** Continuity on $A$ is continuity at each point of $A$, and
   nothing more. It is not a condition relating $f$ to points outside $A$.

Every point of $A$ is either a limit point of $A$ or an isolated point of $A$,
and never both ([[def-limit-point-r]]), so clauses 1 and 2 between them describe
continuity at every point of $A$.

**This is not the raw $\varepsilon$-$\delta$ formula of
[[fs-limit-unique-at-every-point-of-the-domain]].** That item records what goes
wrong when the *punctured* formula of [[def-function-limit]] is written down at
an arbitrary point of the domain: at an isolated point it is satisfied
vacuously by every real $L$ at once, so it defines nothing, and this library
therefore leaves $\lim_{x \to c} f(x)$ **undefined** at an isolated point.
Continuity at an isolated point is a different matter: the formula above is not
vacuous — it is a genuine condition on $f(c)$, satisfied because $f(c)$ is the
only value being compared with itself — and it names a single, well-defined
property. The limit is undefined there; the continuity is defined, and is
automatic. Clause 1 is the only place where the two notions meet, and it is
stated only where the limit exists as a notion.

**Where the distinction disappears.** If $A$ is an open subset of $\mathbb{R}$
([[def-open-and-closed-in-r]]), then every $c \in A$ has some
$N_{\eta}(c) \subseteq A$, and a punctured neighbourhood is never empty
([[def-neighbourhood-r]]), so every point of $A$ is a limit point of $A$ and
clause 1 covers the whole of $A$. The same holds when $A$ is a nondegenerate
interval ([[def-interval]]). Isolated points are what force clause 2 to exist at
all, and they occur as soon as $A$ is allowed to be an arbitrary subset of
$\mathbb{R}$, as in $A = \{0\} \cup [1,2]$.

## Remarks

- **Continuity is local.** If $\eta > 0$ and $g : A \to \mathbb{R}$ agrees with
  $f$ on $A \cap N_{\eta}(c)$, then $f$ is continuous at $c$ if and only if $g$
  is: any $\delta$ may be replaced by $\min\{\delta, \eta\}$, after which the
  condition only ever evaluates the two functions where they agree. So
  continuity at $c$ sees only an arbitrarily small neighbourhood of $c$, exactly
  as the limit does ([[lem-limit-is-local]]).

- **Continuity passes to subsets of the domain.** If $B \subseteq A$ and
  $c \in B$, then continuity of $f$ at $c$ gives continuity of the restriction
  $f|_B$ at $c$, with the same $\delta$: the condition on $f|_B$ quantifies over
  fewer points. The converse fails, and the standard witness is the indicator of
  $\mathbb{Q}$ restricted to $\mathbb{Q}$, which is constant and hence
  continuous, while the indicator itself is continuous nowhere
  ([[cex-dirichlet-is-nowhere-continuous]]).

- **The radius is a real number.** As in [[def-neighbourhood-r]], $\varepsilon$
  and $\delta$ range over the positive reals here. Restricting either quantifier
  to the positive rationals defines the same relation, by the passage recorded
  in [[def-function-limit]]: below every positive real lies a positive rational
  ([[lem-rat-embeds-dense]]), and a real $\delta$ may be shrunk to a rational
  one below it.

- **The word *continuous* is used for two things in this library, and they
  agree.** [[def-metric-continuity]] defines continuity of a map between metric
  spaces, and $A \subseteq \mathbb{R}$ carries the metric $d(x,y) = |x-y|$. The
  two notions coincide, and that is proved, not assumed:
  [[lem-real-and-metric-notions-agree]] is the dictionary, and it is stated on
  this page precisely so that no later item has to guess.
````

### `def-continuous-map-top`

````markdown
---
id: def-continuous-map-top
kind: definition
title: "Continuity of a map of topological spaces at a point and globally"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-neighbourhood-top, def-injection-surjection-bijection]
justified_by: []
aliases: [def-continuity-top]
landmark: true
short: "continuous map of spaces"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "J. Munkres, Topology, 2nd ed., §18"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

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

## Remarks

- **This is the metric definition when both topologies are metric topologies.**
  For metric spaces, $\varepsilon$-$\delta$ continuity at $a$
  ([[def-metric-continuity]]) says that every ball around $f(a)$ has a ball
  around $a$ mapped into it, and the balls around a point are a neighbourhood
  base there; the identification is carried out where metrizable spaces are
  defined later on this page. Nothing about a metric survives in the definition
  above: continuity is a relation between two topologies and a function, and it
  is meaningless to ask whether a function between bare sets is continuous.

- **Continuity depends on both topologies, and coarsening the target or refining
  the source only helps.** If $f$ is continuous and $\mathcal{T}_X$ is replaced
  by a finer topology, or $\mathcal{T}_Y$ by a coarser one, $f$ remains
  continuous, since each condition to be verified is weakened and each
  neighbourhood available in the source is still available. In particular every
  map out of a discrete space and every map into an indiscrete space is
  continuous ([[def-standard-topologies]]).

- **Continuity at a point is strictly weaker than continuity.** A function may be
  continuous at exactly one point, and the definition above is deliberately local
  so that the sequential criteria proved later can be stated pointwise.
````

### `def-interval`

````markdown
---
id: def-interval
kind: definition
title: "Intervals of $\\mathbb{R}$: the nine order-convex forms, nondegeneracy, and length"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-complete-ordered-field, def-ordered-field, def-real-order, def-bounded-set]
justified_by: []
aliases: []
landmark: true
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
    - title: "Interval (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Interval_(mathematics)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (segments and cells)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §0.3 and §1.1"
      url: "https://www.jirka.org/ra/"
---

## Definition

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

## Remarks

- **Why the five unbounded forms really are unbounded.** Take $[a,\infty)$ and
  suppose $u \in \mathbb{R}$ were an upper bound of it. The element
  $x = a + |u - a| + 1$ satisfies $x \ge a$, so $x \in [a,\infty)$, and
  $x \ge a + (u - a) + 1 = u + 1 > u$, since $|t| \ge t$ ([[lem-of-abs-value]])
  and $1 > 0$ ([[cor-of-one-positive]]). That contradicts $x \le u$. The same
  computation with $a$ replaced by any element of $(a,\infty)$ handles the open
  form, and reflecting through the origin handles $(-\infty,b)$ and
  $(-\infty,b]$; $\mathbb{R}$ itself is unbounded on both sides for the same
  reason. Note that this uses no Archimedean property: it is the failure of a
  *single* bound, not the cofinality of the naturals.

- **The converse classification is not asserted here.** It is true that every
  order-convex subset of $\mathbb{R}$ is empty or one of the nine forms, and the
  proof runs through suprema and infima, but nothing in this library needs it and
  it is not proved anywhere here. What is used is only the direction proved
  above: each of the nine forms is order-convex.

- **Degenerate intervals are kept, not excluded.** $[a,a] = \{a\}$ and
  $(a,a) = \emptyset$ are intervals under this definition. Excluding them would
  force a nonemptiness hypothesis into every statement that produces an interval,
  and the nested interval property is a good illustration: its conclusion is that
  the intersection is nonempty, and in the equality case the intersection is the
  degenerate interval $[a,a]$, which is exactly the single point.
````

### `def-metrizable-space`

````markdown
---
id: def-metrizable-space
kind: definition
title: "Metrizable space: a topological space whose topology is induced by some metric; metrizability is topological, the metric is not"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-metric-topology, def-metric-space, thm-metric-open-set-algebra, def-equivalent-metrics,
       def-subspace-topology-top, def-isometry-and-metric-embedding,
       def-metric-ball, def-neighbourhood-top, def-interior-closure-boundary-top, def-continuous-map-top,
       def-sequence-convergence-top, def-homeomorphism-and-open-maps, def-first-countable-top,
       lem-metric-ball-neighbourhood-base, thm-metric-hausdorff-separation, def-metric-convergence,
       def-metric-continuity, thm-metric-closure-characterisation, def-metric-interior-closure-boundary,
       lem-metric-limits-unique, lem-real-line-is-a-metric-space]
justified_by: []
aliases: [def-metrizable, def-usual-topology-of-r]
landmark: true
short: "metrizable space; the usual topology of $\\mathbb{R}$"
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-03
    scope: published-audit-targeted
    context_sha256: 481fc46dfb5166d1c7254e753d62020d03b9c022b265f7afd686ea1f9dd7ff0a
    item_sha256: 36f4a57f6ea43198decefdca5ecb7883fa754f6a0fa1ef34d13dc55d3704c788
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Metrizable space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metrizable_space"
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "J. Munkres, Topology, 2nd ed., §20"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

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

## Remarks

- **The usual topology of $\mathbb{R}$ is not a second notion alongside the
  order-native development built earlier in this library.**
  [[rem-r-native-topology-scope]] records that the two collections of open subsets
  of $\mathbb{R}$ — the one defined from balls and the one defined from
  order-neighbourhoods — are literally the same collection, and hence that
  interior, closure, boundary, limit point, density and sequential convergence
  agree on the two sides. That identification is quoted here for orientation only;
  the order-topology example on the companion page is where the order-native
  description is used.

- **A metrizable space comes with many metrics and no canonical one.** The
  statement "$X$ is metrizable" asserts existence, and every argument that uses a
  metric must name one first. Where two metrics are compared, the vocabulary is
  that of [[def-equivalent-metrics]]: Lipschitz, uniform and topological
  equivalence, of which only the last is visible to the topology.

- **Metrization theorems are not proved here.** Necessary conditions are easy —
  Hausdorff, first countable — and sufficient ones require separation and
  countability axioms that this page does not develop. Nothing below asserts that
  a space *is* metrizable except by exhibiting a metric.

- **Not every topology is metrizable**, and the cheapest witness is the
  indiscrete topology on a two-point set, which is not Hausdorff. That is
  recorded on this page as a false statement and witnessed on the companion page.
````

### `def-product-topology`

````markdown
---
id: def-product-topology
kind: definition
title: "The product set $\\prod_{i \\in I} X_i$ of functions choosing a point in each factor, the projections, the box topology, and the product topology as the initial topology of the projections; the empty product is a one-point space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-initial-and-final-topology, def-topological-space, def-topology-basis-subbasis,
       thm-basis-criterion, def-choice-function, def-axiom-of-choice, lem-finite-choice,
       def-standard-topologies]
justified_by: []
aliases: [def-product-top, def-box-topology, def-projection-top]
landmark: true
short: "product topology, box topology, projections"
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
    - title: "Product topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Product_topology"
    - title: "Box topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Box_topology"
    - title: "J. Munkres, Topology, 2nd ed., §19"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

**The product set.** Let $I$ be a set and let $X_i$ be a set for each $i \in I$.
The **product** is

$$\prod_{i \in I} X_i \;:=\; \Big\{\, x : x \text{ is a function with domain } I \text{ and } x(i) \in X_i \text{ for every } i \in I \,\Big\},$$

and we write $x_i := x(i)$, the $i$-th **coordinate** of $x$. Two elements of the
product are equal exactly when they agree at every index, functions being equal
when they have the same domain and the same values. For $j \in I$ the $j$-th
**projection** is

$$\pi_j : \prod_{i \in I} X_i \to X_j, \qquad \pi_j(x) := x_j .$$

**Notation for a finite product.** For $I = n$ a natural number, which is the set
$\{0, 1, \dots, n-1\}$ of its predecessors, an element of $\prod_{k<n} X_k$ is a
function on $n$ and we write it $(x_0, \dots, x_{n-1})$. In particular $I = 2$
gives the **binary product**, written $X \times Y$ for $\prod_{i<2} X_i$ with
$X_0 = X$ and $X_1 = Y$, whose elements are written $(u,v)$ for the function
$0 \mapsto u$, $1 \mapsto v$. This is the only meaning the symbol $X \times Y$
carries on this page.

**Two facts about when the product is nonempty, stated because they are used and
because they cost something.** If some $X_{i_0}$ is empty then the product is
empty, since no function can take a value in $X_{i_0}$. Conversely, suppose every
$X_i$ is nonempty.

- For $I = n$ a natural number, the product is nonempty, and this is a theorem of
  ZF: [[lem-finite-choice]] applied to the function $i \mapsto X_i$ on $n$
  supplies a choice function $g$ for the family of values, and
  $x(i) := g(X_i)$ defines a member of $\prod_{k<n} X_k$.
- For an arbitrary $I$ the assertion "$\prod_{i \in I} X_i \ne \varnothing$
  whenever every $X_i$ is nonempty" **is** the Axiom of Choice: it is the
  formulation recorded in [[def-axiom-of-choice]], and the choice function of
  [[def-choice-function]] is exactly a point of the product of a family by
  itself. Every use of it below is flagged at the step that spends it.

**The box topology.** Now let each $X_i$ carry a topology $\mathcal{T}_i$
([[def-topological-space]]). Put

$$\mathcal{R} \;:=\; \Big\{\, \prod_{i \in I} U_i \;:\; U_i \in \mathcal{T}_i \text{ for every } i \in I \,\Big\},$$

the family of **boxes**. $\mathcal{R}$ is a basis for a topology
([[thm-basis-criterion]]): it contains $\prod_i X_i$, so it covers the product,
and it is closed under binary intersections, since

$$\Big(\prod_i U_i\Big) \cap \Big(\prod_i V_i\Big) = \prod_i (U_i \cap V_i)$$

and each $U_i \cap V_i$ is open by (T3). The topology it generates is the **box
topology** $\mathcal{T}^{\square}$, and $\mathcal{R}$ is a basis for it
([[def-topology-basis-subbasis]]).

**The product topology.** The **product topology** $\mathcal{T}^{\Pi}$ on
$\prod_i X_i$ is the initial topology of the family of projections
$(\pi_i)_{i \in I}$ ([[def-initial-and-final-topology]]): the topology generated
by the subbasis

$$\mathcal{G} \;:=\; \{\, \pi_i^{-1}[U] : i \in I,\ U \in \mathcal{T}_i \,\}, \qquad \pi_i^{-1}[U] = \prod_{j \in I} W_j \ \text{ with } W_i = U \text{ and } W_j = X_j \text{ for } j \ne i .$$

By [[thm-basis-criterion]] the finite intersections of members of $\mathcal{G}$
form a basis for $\mathcal{T}^{\Pi}$, and those finite intersections are exactly
the boxes with all but finitely many factors unrestricted:

$$\mathcal{R}^{\Pi} \;=\; \Big\{\, \prod_{i \in I} U_i \;:\; U_i \in \mathcal{T}_i \text{ for every } i, \text{ and } U_i = X_i \text{ for all but finitely many } i \,\Big\}.$$

Indeed the intersection of $\pi_{i_1}^{-1}[U_1], \dots, \pi_{i_n}^{-1}[U_n]$ is
the box whose factor at $i$ is the intersection of those $U_m$ with $i_m = i$ and
is $X_i$ when no $i_m$ equals $i$; and the intersection of no members is the
whole product, the box with every factor $X_i$. Conversely a box with
$U_i = X_i$ off a finite set is such an intersection. Members of
$\mathcal{R}^{\Pi}$ are called **basic product-open** sets, and members of
$\mathcal{R}$ **boxes**. So $\mathcal{R}^{\Pi} \subseteq \mathcal{R}$, with
equality when $I$ is a natural number.

**The empty product.** For $I = \varnothing$ there is exactly one function with
domain $\varnothing$, the empty function, so $\prod_{i \in \varnothing} X_i$ is a
one-point set. A one-point set carries exactly one topology, namely
$\{\varnothing, \{\varnothing\}\}$, since a topology must contain the empty set
and the whole set and there is nothing else to contain
([[def-topological-space]]); so the box topology and the product topology agree
there, and both equal the discrete topology and the indiscrete topology
([[def-standard-topologies]]), which coincide on a one-point set. There are no
projections to speak of, and the initial topology of the empty family is indeed
the indiscrete one ([[def-initial-and-final-topology]]).

**Convention.** Unless the box topology is named explicitly, $\prod_i X_i$ always
carries the product topology in this library. That is not a matter of taste: the
product topology is the one with the characteristic property of the next item,
and the box topology has no such property.

## Remarks

- **Where the two topologies actually differ.** The box topology is finer than
  the product topology by construction, since $\mathcal{R}^{\Pi} \subseteq
  \mathcal{R}$. They agree whenever $I$ is finite; and, assuming the Axiom of Choice, for a
  family of **nonempty** spaces they differ for infinite $I$ as soon as infinitely
  many factors have a nonempty proper open subset. Nonemptiness is not decoration: if one factor is
  empty then the product is empty and carries exactly one topology, so the two
  agree however the other factors are chosen. Both statements are proved two items
  below, with that hypothesis, and the failure is recorded on this page as a false
  statement.

- **The product set is a set of functions, and that is not a technicality.** The
  factors are indexed by an arbitrary set, so there is no "list" to write down;
  writing $x = (x_i)_{i \in I}$ is notation for the function $x$. The finite case
  recovers the familiar tuple, and the identification of $\prod_{k<n}\mathbb{R}$
  with the $\mathbb{R}^n$ of [[lem-metrics-on-rn]] is literal, that item defining
  $\mathbb{R}^n$ as the set of functions $n \to \mathbb{R}$.

- **The projections carry no hypothesis.** They are defined for every product,
  including the empty one and products with an empty factor; what does need a
  hypothesis is their *surjectivity*, which is the point at which choice enters
  and which is stated separately in the next item.
````

### `def-topology-basis-subbasis`

````markdown
---
id: def-topology-basis-subbasis
kind: definition
title: "Basis and subbasis for a topology, and the topology generated by a family of sets"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space]
justified_by: []
aliases: [def-basis-top, def-subbasis-top, def-generated-topology]
landmark: true
short: "basis, subbasis, generated topology"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Base (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Base_(topology)"
    - title: "Subbase (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subbase"
    - title: "J. Munkres, Topology, 2nd ed., §13"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

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

## Remarks

- **Every topology is a basis for itself**, so a basis always exists; the point
  of a basis is to be smaller and more explicit than $\mathcal{T}$, and the point
  of a subbasis is to be smaller still at the cost of one round of finite
  intersections.

- **Two extremes of the generated topology.** $\langle \varnothing \rangle$ is
  the indiscrete topology, since $\{\varnothing, X\}$ is a topology containing the
  empty family and is contained in every topology. At the other end,
  $\langle \mathcal{P}(X) \rangle = \mathcal{P}(X)$ is the discrete topology.

- **Generation is monotone and idempotent.** If
  $\mathcal{S}_1 \subseteq \mathcal{S}_2$ then every topology containing
  $\mathcal{S}_2$ contains $\mathcal{S}_1$, so
  $\langle \mathcal{S}_1 \rangle \subseteq \langle \mathcal{S}_2 \rangle$; and
  $\langle \langle \mathcal{S} \rangle \rangle = \langle \mathcal{S} \rangle$
  because $\langle \mathcal{S} \rangle$ is itself a topology containing
  $\mathcal{S}$. Both are used silently below.
````

### `lem-real-line-is-a-metric-space`

````markdown
---
id: lem-real-line-is-a-metric-space
kind: lemma
title: "The absolute value makes $\\mathbb{R}$ a metric space: $d(x,y) = |x-y|$ is a metric, its open balls are the intervals $(x-r, x+r)$, and it is unbounded"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-metric-space, def-metric-ball, def-metric-topology, def-metric-bounded-diameter,
       def-abs-value, lem-of-abs-value, lem-of-triangle-inequality, def-interval,
       thm-of-archimedean, def-complete-ordered-field, def-ordered-field,
       lem-of-add-order, lem-of-naturals-positive]
justified_by: []
aliases: [def-usual-metric-on-r]
landmark: true
short: "$(\\mathbb{R}, |x-y|)$"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-02
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "Real line (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Real_line"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 20: The Metric Topology (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-20.pdf"
pipeline_run: null
---

## Statement

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

## Facts & Assumptions

**Given:** The complete ordered field $\mathbb{R}$ ([[def-complete-ordered-field]], [[def-ordered-field]]) with its absolute value ([[def-abs-value]]), and the function $d_{\mathbb{R}}(x,y) = |x-y|$; points $x, y, z \in \mathbb{R}$ and a real $r > 0$.

[L1] Absolute value: $|u| \ge 0$; $|u| = 0$ if and only if $u = 0$; $|-u| = |u|$; and for $c > 0$ one has $|u| < c$ if and only if $-c < u < c$ ([[lem-of-abs-value]], [[def-abs-value]]).

[L2] Triangle inequality in an ordered field: $|u + v| \le |u| + |v|$ ([[lem-of-triangle-inequality]]).

[L3] Intervals: $(a,b) = \{t : a < t < b\}$ and $[a,b] = \{t : a \le t \le b\}$ ([[def-interval]]).

[L4] Archimedean property: for every $w \in \mathbb{R}$ there is a natural $n \ge 1$ with $w < n \cdot 1_{\mathbb{R}}$ ([[thm-of-archimedean]]); and $n \cdot 1_{\mathbb{R}} > 0$ for $n \ge 1$ ([[lem-of-naturals-positive]]).

[L5] Adding a constant to an inequality, in strict and nonstrict form: the strict form is [[lem-of-add-order]] and the nonstrict form is that together with the case of equality, the order being total ([[def-ordered-field]]).

[L6] Trichotomy: for reals $a,b$ exactly one of $a < b$, $a = b$, $b < a$ holds ([[def-complete-ordered-field]], [[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Separation (M1): $d_{\mathbb{R}}(x,y) = |x-y| = 0$ holds if and only if $x - y = 0$, that is if and only if $x = y$. [L1]

1.2 Symmetry (M2): $d_{\mathbb{R}}(y,x) = |y-x| = |-(x-y)| = |x-y| = d_{\mathbb{R}}(x,y)$. [L1]

1.3 Triangle inequality (M3): $d_{\mathbb{R}}(x,z) = |x - z| = |(x-y) + (y-z)| \le |x-y| + |y-z| = d_{\mathbb{R}}(x,y) + d_{\mathbb{R}}(y,z)$. [L2]

1.4 For $y \in \mathbb{R}$ and $r > 0$: $y \in B(x,r)$ means $|x - y| < r$, which by [L1] holds if and only if $-r < x - y < r$, and adding $y - r$ respectively $y + r$ to the two halves shows this is equivalent to $x - r < y < x + r$. [L1, L5]

1.5 For $y \in \mathbb{R}$ and $r > 0$: $y \in \bar B(x,r)$ means $|x-y| \le r$, which by the same equivalence read with $\le$ in place of $<$ holds if and only if $x - r \le y \le x + r$. [L1, L5]

1.6 Let $x_0 \in \mathbb{R}$ and $r > 0$ be arbitrary, and use [L4] to fix a natural $n \ge 1$ with $x_0 + r < n \cdot 1_{\mathbb{R}}$; write $w := n \cdot 1_{\mathbb{R}}$. [L4, choose]

2.1 By steps 1.1, 1.2 and 1.3 the function $d_{\mathbb{R}}$ satisfies (M1), (M2) and (M3), so it is a metric on $\mathbb{R}$, which is claim 1. [step 1.1, step 1.2, step 1.3]

2.2 By step 1.4 and [L3] the set $B(x,r)$ has exactly the elements of $(x-r,x+r)$, and by step 1.5 and [L3] the set $\bar B(x,r)$ has exactly the elements of $[x-r,x+r]$; this is claim 2. [step 1.4, step 1.5, L3]

2.3 Since $r > 0$ we have $x_0 < x_0 + r < w$, so $w - x_0 > r > 0$ and hence $d_{\mathbb{R}}(x_0, w) = |x_0 - w| = |-(w - x_0)| = w - x_0 > r$; therefore $w \notin B(x_0,r)$. [step 1.6, L1, L5, L6]

3.1 Substituting claim 2 into the definition of open in the metric topology gives claim 3: $U$ is open exactly when every $x \in U$ admits $r > 0$ with $(x-r,x+r) = B(x,r) \subseteq U$. [step 2.2]

4.1 Since $x_0$ and $r$ were arbitrary, step 2.3 exhibits for every ball $B(x_0,r)$ a real not in it, so no ball contains $\mathbb{R}$; hence $\mathbb{R}$ is not a bounded subset of itself and $\operatorname{diam}(\mathbb{R})$ is not defined, which is claim 4. [step 2.1, step 2.3] ∎

## Remarks

- **This is the metric every later ceiling rests on.** Every real-line example on the companion page, and every subspace of $\mathbb{R}$ used there, takes its metric from $d_{\mathbb{R}}$ through the subspace construction of [[def-isometry-and-metric-embedding]].
- **Unboundedness needs no Archimedean input, and no completeness either.** No ordered field is bounded under $d(u,v) = |u-v|$, and the reason is a single element rather than any cofinality property: given a centre $c$ and a radius $r > 0$, the element $c + r + 1$ satisfies $d(c,\, c + r + 1) = |{-(r+1)}| = r + 1 > r$, because $1 > 0$ and $r + 1 > 0$ ([[lem-of-abs-value]], [[cor-of-one-positive]], [[lem-of-add-order]]); so it lies outside $B(c,r)$ and no ball contains the field. Step 1.6 above chooses its witness with [[thm-of-archimedean]] instead, which is a convenience and not a necessity: it delivers a witness that is a canonical natural, and claim 4 needs no such thing. Claim 4 therefore holds verbatim in every ordered field with this $d$, Archimedean or not. Note also that a radius is an element of $\mathbb{R}$, so "a ball of infinite radius" is not something that can be written here.
- **The claim that $\operatorname{diam}(\mathbb{R})$ is "not defined" is a claim about the conventions of this development** ([[rem-sup-conventions]], [[def-metric-bounded-diameter]]): suprema here are real numbers and the extended real line, which is introduced on a later page, is not used for them, so an unbounded set has no diameter at all rather than a diameter $+\infty$.
````

### `lem-the-graph-of-a-continuous-map-into-a-hausdorff-space-is-closed`

````markdown
---
id: lem-the-graph-of-a-continuous-map-into-a-hausdorff-space-is-closed
kind: lemma
title: "The graph of a continuous map into a Hausdorff space is closed in the product"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-the-agreement-set-of-two-maps-into-a-hausdorff-space-is-closed,
       def-the-diagonal-of-a-space, def-product-topology, thm-product-universal-property,
       lem-continuity-is-local-and-pastes, def-hausdorff-space, def-continuous-map-top]
justified_by: []
aliases: [lem-closed-graph-of-a-continuous-map]
landmark: true
short: "a continuous map into a Hausdorff space has closed graph"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Hausdorff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_space"
    - title: "Closed graph theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closed_graph_theorem"
    - title: "Stacks Project, Topology, Lemma 5.3 (Tag 08ZD)"
      url: "https://stacks.math.columbia.edu/tag/08ZD"
pipeline_run: null
---

## Statement

Let $X$ be a topological space, let $Y$ be Hausdorff
([[def-hausdorff-space]]) and let $f : X \to Y$ be continuous
([[def-continuous-map-top]]). Then the **graph**

$$G_f \;:=\; \{\, z \in X \times Y : z_1 = f(z_0) \,\} \;=\; \{\, (x, f(x)) : x \in X \,\}$$

is closed in $X \times Y$ with the product topology ([[def-product-topology]]).

No hypothesis is placed on $X$. The Hausdorff hypothesis is on the codomain and
the continuity hypothesis is on $f$; both are used, and the converse implication
— that a closed graph forces continuity — needs a *different* hypothesis on the
codomain and is treated separately.

## Facts & Assumptions

**Given:** A topological space $X$, a Hausdorff space $Y$, a continuous map $f : X \to Y$, and the product $X \times Y$ with the product topology and projections $\pi_0, \pi_1$.

[A1] $G_f = \{\, z \in X \times Y : (f \circ \pi_0)(z) = \pi_1(z) \,\}$, since $(f \circ \pi_0)(z) = f(z_0)$ and $\pi_1(z) = z_1$ ([[def-product-topology]], [[def-the-diagonal-of-a-space]]).

[L1] The projections $\pi_0 : X \times Y \to X$ and $\pi_1 : X \times Y \to Y$ are continuous ([[thm-product-universal-property]], claim 1).

[L2] A composite of continuous maps is continuous ([[lem-continuity-is-local-and-pastes]], claim 1).

[L3] If $Y$ is Hausdorff and $u, v : Z \to Y$ are continuous, then $\{\, z \in Z : u(z) = v(z) \,\}$ is closed in $Z$ ([[cor-the-agreement-set-of-two-maps-into-a-hausdorff-space-is-closed]], [[def-hausdorff-space]]).

## Proof

**Proof technique:** direct.

1.1 $\pi_0$ and $\pi_1$ are continuous. [L1]

2.1 $f \circ \pi_0 : X \times Y \to Y$ is continuous, being a composite of the continuous $\pi_0$ with the continuous $f$. [step 1.1, L2]

3.1 By [A1] the graph $G_f$ is the agreement set of the two continuous maps $f \circ \pi_0$ and $\pi_1$ from $X \times Y$ to the Hausdorff space $Y$, so it is closed in $X \times Y$. [step 1.1, step 2.1, A1, L3] ∎

## Remarks

- **The graph is an agreement set, and that is the whole proof.** Writing $G_f$ as the set where $f \circ \pi_0$ and $\pi_1$ agree turns a statement about a map into a statement about two maps out of one space, which is exactly the shape [[cor-the-agreement-set-of-two-maps-into-a-hausdorff-space-is-closed]] handles. Equivalently $G_f = \langle f \circ \pi_0, \pi_1 \rangle^{-1}[\Delta_Y]$, the preimage of the diagonal ([[def-the-diagonal-of-a-space]]).

- **The Hausdorff hypothesis is not removable.** Let $X$ be a one-point space and let $Y = \{a,b\}$ with $a \ne b$ carry the indiscrete topology ([[def-standard-topologies]]). Every function $X \to Y$ is continuous, the only preimages to check being those of $\varnothing$ and $Y$. The product $X \times Y$ has as its open boxes only $\varnothing$ and itself, so its only closed sets are $\varnothing$ and itself; and $G_f$ is a single point, hence neither. The argument above breaks at [L3] and nowhere else.

- **Continuity of $f$ is used, and only through the composite.** Step 2.1 is the only appearance of the hypothesis; everything else is a property of the product.
````

### `thm-algebra-of-continuous-functions`

````markdown
---
id: thm-algebra-of-continuous-functions
kind: theorem
title: "Sums, scalar multiples, products, absolute values, maxima, minima and quotients with nonvanishing denominator of continuous functions are continuous, as are constants, the identity and every polynomial function"
status: published
origin: session
deps: [def-continuity-real, thm-algebra-of-function-limits, lem-sign-preservation-near-a-limit, def-function-limit, def-limit-point-r, def-neighbourhood-r, lem-of-abs-value, cor-of-reverse-triangle, def-max-min, lem-finite-set-has-max, def-integer-power, def-ordered-field, def-field]
justified_by: []
aliases: [thm-continuity-algebra]
forward_refs: [cex-dirichlet-is-nowhere-continuous]
landmark: true
short: "algebra of continuous functions"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Thm 4.4, 4.9)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.2"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $f, g : A \to \mathbb{R}$, let
$\alpha \in \mathbb{R}$ and let $c \in A$. Suppose $f$ and $g$ are continuous at
$c$ ([[def-continuity-real]]). Then:

1. $f + g$, $\alpha f$ and $fg$ are continuous at $c$;
2. $|f|$, the function $x \mapsto |f(x)|$, is continuous at $c$;
3. $\max\{f,g\}$ and $\min\{f,g\}$, defined pointwise by
   $x \mapsto \max\{f(x), g(x)\}$ and $x \mapsto \min\{f(x), g(x)\}$
   ([[def-max-min]]), are continuous at $c$;
4. if $g(c) \ne 0$ then, writing $A_0 := \{\, x \in A : g(x) \ne 0 \,\}$, the
   point $c$ lies in $A_0$ and the quotient
   $(f/g)|_{A_0} : A_0 \to \mathbb{R}$, $x \mapsto f(x)/g(x)$, is continuous at
   $c$ as a function on $A_0$.

Moreover, with no hypothesis at all:

5. every constant function $A \to \mathbb{R}$ and the identity
   $\mathrm{id} : A \to \mathbb{R}$, $x \mapsto x$, are continuous on $A$; hence
   so is $x \mapsto x^{n}$ for every $n \in \mathbb{N}$
   ([[def-integer-power]]), and hence so is every **polynomial function**
   $x \mapsto a_0 + a_1 x + \dots + a_n x^{n}$ with real coefficients.

Consequently, if $f$ and $g$ are continuous **on** $A$ then so are $f+g$,
$\alpha f$, $fg$, $|f|$, $\max\{f,g\}$ and $\min\{f,g\}$, and
$(f/g)|_{A_0}$ is continuous on $A_0$.

**Claim 4 is stated on $A_0$ because $f/g$ is not defined where $g$ vanishes**,
and $g$ may well vanish at points of $A$ far from $c$. The hypothesis is
$g(c) \ne 0$, not "$g$ nowhere zero"; what it buys is that $c$ itself lies in
the smaller domain, which is what makes continuity there mean anything.

**Nothing here is proved through a sequence.** Claims 1 and 4 are read off from
[[thm-algebra-of-function-limits]], which is itself proved from $\varepsilon$
and $\delta$, and claims 2, 3 and 5 are proved directly below. So no choice
principle is used anywhere in this item.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, functions $f, g : A \to \mathbb{R}$, a real $\alpha$, a point $c \in A$ at which $f$ and $g$ are continuous, and, for claim 4, the hypothesis $g(c) \ne 0$ together with $A_0 := \{\, x \in A : g(x) \ne 0 \,\}$.

[L1] Continuity at $c$: for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x \in A$ with $|x - c| < \delta$ satisfies $|f(x) - f(c)| < \varepsilon$ ([[def-continuity-real]]).

[L2] A point of $A$ is either a limit point of $A$ or an isolated point of $A$, and never both; at an isolated point of its domain every function is continuous; at a limit point $c$ of $A$, continuity of $f$ at $c$ is exactly the statement that the limit of $f$ at $c$ exists and equals $f(c)$ ([[def-continuity-real]], [[def-limit-point-r]], [[def-neighbourhood-r]], [[def-function-limit]]).

[L3] Algebra of function limits at a limit point $c$ of $A$: if the limits of $f$ and $g$ at $c$ exist with values $L$ and $M$, then the limits of $f+g$, $\alpha f$ and $fg$ at $c$ exist with values $L+M$, $\alpha L$ and $LM$; and if $M \ne 0$ then $c$ is a limit point of $A_0$, and the limit of $(f/g)|_{A_0}$ at $c$ exists and equals $L/M$ ([[thm-algebra-of-function-limits]]).

[L4] Sign preservation: if the limit of $g$ at a limit point $c$ of $A$ exists and is nonzero, then $c$ is a limit point of $A_0 = \{\, x \in A : g(x) \ne 0 \,\}$ ([[lem-sign-preservation-near-a-limit]]).

[L5] Reverse triangle inequality: $\bigl||u| - |v|\bigr| \le |u - v|$ ([[cor-of-reverse-triangle]]); and $|u| \ge 0$, $|u| = 0$ exactly when $u = 0$, $|uv| = |u||v|$ ([[lem-of-abs-value]]).

[L6] Maximum and minimum of a two-element set of reals exist ([[lem-finite-set-has-max]], [[def-max-min]]), and for all reals $u, v$ one has $\max\{u,v\} = \tfrac{1}{2}\bigl(u + v + |u-v|\bigr)$ and $\min\{u,v\} = \tfrac{1}{2}\bigl(u + v - |u-v|\bigr)$.

[L7] Ordered-field arithmetic in $\mathbb{R}$: trichotomy and totality of the order, the field identities, and $0 < 1$ so that $2 \ne 0$ and $t/2$ is defined ([[def-ordered-field]], [[def-field]]).

[L8] Integer powers: $a^{0} = 1$ and $a^{n+1} = a^{n} \cdot a$ ([[def-integer-power]]).

## Proof

**Proof technique:** direct.

1.1 **Justification of the identity in [L6].** Let $u, v \in \mathbb{R}$. By totality either $u \ge v$ or $v \ge u$. If $u \ge v$ then $u - v \ge 0$, so $|u-v| = u-v$ and $\tfrac{1}{2}(u+v+|u-v|) = \tfrac{1}{2}(2u) = u = \max\{u,v\}$, while $\tfrac{1}{2}(u+v-|u-v|) = v = \min\{u,v\}$. If $v \ge u$ the same computation with the roles exchanged applies, since $|u-v| = v-u$ there. [L5, L6, L7]

1.2 **The isolated case.** Suppose $c$ is an isolated point of $A$, say $N_{\eta}(c) \cap A = \{c\}$ with $\eta > 0$ real. Then every function on $A$ is continuous at $c$ by [L2], which gives claims 1, 2 and 3 at once. For claim 4, assume $g(c) \ne 0$; then $c \in A_0$, and $N_{\eta}(c) \cap A_0 \subseteq N_{\eta}(c) \cap A = \{c\}$ with $c$ in the left-hand side, so $c$ is an isolated point of $A_0$ and every function on $A_0$, in particular $(f/g)|_{A_0}$, is continuous at $c$. [L2]

1.3 **Claim 2, at any point of $A$.** Let a real $\varepsilon > 0$ be given and let $\delta > 0$ be as in [L1] for $f$ and this $\varepsilon$. For $x \in A$ with $|x - c| < \delta$ the reverse triangle inequality gives $\bigl||f(x)| - |f(c)|\bigr| \le |f(x) - f(c)| < \varepsilon$. So $|f|$ is continuous at $c$, and no case distinction was needed. [L1, L5]

1.4 **Claim 5, constants and the identity.** If $f$ is constant then $|f(x) - f(c)| = 0 < \varepsilon$ for every $x \in A$ and every real $\varepsilon > 0$, so any $\delta > 0$ serves. For the identity, given a real $\varepsilon > 0$ take $\delta := \varepsilon$: every $x \in A$ with $|x - c| < \delta$ has $|\mathrm{id}(x) - \mathrm{id}(c)| = |x - c| < \varepsilon$. Both are continuous at every point of $A$. [L1, L5, L7]

1.5 **The limit-point case, claim 1.** Suppose $c$ is a limit point of $A$. By [L2] the limits of $f$ and of $g$ at $c$ exist and equal $f(c)$ and $g(c)$. By [L3] the limits of $f+g$, $\alpha f$ and $fg$ at $c$ exist and equal $f(c)+g(c)$, $\alpha f(c)$ and $f(c)g(c)$, which are exactly the values of those three functions at $c$; by [L2] again, each of them is continuous at $c$. [L2, L3]

1.6 **The limit-point case, claim 4.** Suppose $c$ is a limit point of $A$ and $g(c) \ne 0$. Then $c \in A_0$, and by [L4] the point $c$ is a limit point of $A_0$. By [L3] the limit of $(f/g)|_{A_0}$ at $c$ exists and equals $f(c)/g(c)$, which is the value of $(f/g)|_{A_0}$ at $c$; by [L2] applied on the domain $A_0$, that function is continuous at $c$. [L2, L3, L4]

2.1 **Claims 1 and 4 in general.** By [L2] the point $c$ is either isolated in $A$ or a limit point of $A$; step 1.2 settles the first case and steps 1.5 and 1.6 the second. So claims 1 and 4 hold as stated. [step 1.2, step 1.5, step 1.6, L2]

3.1 **Claim 3.** By claim 1 the function $f - g = f + (-1)g$ is continuous at $c$, by step 1.3 so is $|f-g|$, and by claim 1 again so are $f + g + |f-g|$ and its scalar multiple by $1/2$. By step 1.1 that scalar multiple is the function $x \mapsto \max\{f(x), g(x)\}$, so the maximum is continuous at $c$; the same argument with $-|f-g|$ gives the minimum. [step 1.1, step 1.3, step 2.1, L6, L7]

3.2 **Claim 5, powers and polynomials.** The map $x \mapsto x^{0}$ is the constant $1$ and $x \mapsto x^{1}$ is the identity, both continuous on $A$ by step 1.4; and if $x \mapsto x^{n}$ is continuous on $A$ then so is $x \mapsto x^{n+1} = x^{n} \cdot x$, being a product of two functions continuous on $A$ by step 2.1. By induction on $n$, $x \mapsto x^{n}$ is continuous on $A$ for every $n \in \mathbb{N}$. A polynomial function $a_0 + a_1x + \dots + a_nx^{n}$ is obtained from these by finitely many scalar multiplications and additions, each of which preserves continuity by step 2.1. [step 1.4, step 2.1, L8]

4.1 Claims 1 to 5 are proved, all of them at an arbitrary point $c$ of $A$ and therefore, applied at every point, on the whole of $A$; and no sequence and no choice principle was used. [step 1.3, step 2.1, step 3.1, step 3.2] ∎

## Remarks

- **Why the two-case shape, and why it is not an inconvenience.** Continuity is defined at every point of the domain, including isolated points, where no limit exists ([[def-continuity-real]]). The algebra of limits therefore cannot be applied blindly; but at an isolated point every function is continuous, so the case is settled before it is opened. Claims 2 and 5 are proved directly from $\varepsilon$ and $\delta$ and need no case distinction at all.

- **Absolute value, maximum and minimum are not in [[thm-algebra-of-function-limits]]**, and the reason is that they are not needed there. They are needed here: the extreme value theorem and the one-dimensional fixed point theorem both build auxiliary functions out of maxima, minima and differences, and [[thm-compactness-is-necessary-for-evt-and-uniform-continuity]] builds its witnesses out of $|x - x_0|$ and quotients.

- **The converse of claim 2 is false**: $|f|$ may be continuous while $f$ is continuous nowhere. The function equal to $1$ on $\mathbb{Q}$ and to $-1$ elsewhere has constant absolute value; that it is nowhere continuous follows from the argument of [[cex-dirichlet-is-nowhere-continuous]] applied verbatim, since that argument uses only that the two values are distinct.
````

### `thm-closure-characterisation-top`

````markdown
---
id: thm-closure-characterisation-top
kind: theorem
title: "A point lies in the closure of $A$ iff every basic neighbourhood of it meets $A$; the closure is the smallest closed superset and equals $A$ together with its derived set"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-interior-closure-boundary-top, def-neighbourhood-top, def-topology-basis-subbasis, def-topological-space]
justified_by: []
aliases: []
landmark: true
short: "closure by neighbourhoods; $\\overline{A} = A \\cup A'$"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Closure (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closure_(topology)"
    - title: "Limit point (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_point"
    - title: "J. Munkres, Topology, 2nd ed., §17"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{T})$ be a topological space, let $\mathcal{B}$ be a basis for
$\mathcal{T}$ ([[def-topology-basis-subbasis]]), let $A \subseteq X$ and let
$x \in X$. Closure, derived set and limit points are as in
[[def-interior-closure-boundary-top]]. Then:

1. The following four conditions are equivalent.
   - (a) $x \in \overline{A}$;
   - (b) $N \cap A \ne \varnothing$ for every neighbourhood $N$ of $x$
     ([[def-neighbourhood-top]]);
   - (c) $U \cap A \ne \varnothing$ for every open $U$ with $x \in U$;
   - (d) $B \cap A \ne \varnothing$ for every $B \in \mathcal{B}$ with $x \in B$.
2. $\overline{A}$ is closed, contains $A$, and is contained in every closed
   $F \subseteq X$ with $A \subseteq F$; so it is the smallest closed superset of
   $A$, and $A$ is closed if and only if $A = \overline{A}$.
3. $\overline{A} = A \cup A'$.

Claim 2 is recorded here for reference and is discharged in
[[def-interior-closure-boundary-top]], where it is what makes the definition of
$\overline{A}$ well posed; claims 1 and 3 are proved below. Claim 1 is the form in
which the closure is used everywhere afterwards, and clause (d) is what makes a
closure computable from a basis rather than from all open sets.

## Facts & Assumptions

**Given:** A topological space $(X,\mathcal{T})$, a basis $\mathcal{B}$ for $\mathcal{T}$, a subset $A \subseteq X$ and a point $x \in X$.

[A1] $\overline{A}$ is the intersection of all closed supersets of $A$; it is closed, contains $A$, and is contained in every closed superset of $A$ ([[def-interior-closure-boundary-top]]).

[A2] $x \in A'$ means that $N \cap (A \setminus \{x\}) \ne \varnothing$ for every neighbourhood $N$ of $x$ ([[def-interior-closure-boundary-top]]).

[L1] $N$ is a neighbourhood of $x$ when $x \in U \subseteq N$ for some open $U$; an open set containing $x$ is a neighbourhood of $x$ ([[def-neighbourhood-top]]).

[L2] $\mathcal{B}$ is a basis for $\mathcal{T}$: for every open $U$ and every $x \in U$ there is $B \in \mathcal{B}$ with $x \in B \subseteq U$, and every member of $\mathcal{B}$ is open ([[def-topology-basis-subbasis]]).

[L3] A set is closed exactly when its complement is open ([[def-topological-space]]).

## Proof

**Proof technique:** direct.

1.1 (a) implies (c): let $U$ be open with $x \in U$ and suppose $U \cap A = \varnothing$; then $X \setminus U$ is closed and contains $A$, so $\overline{A} \subseteq X \setminus U$ by [A1], whence $x \notin \overline{A}$, contradicting (a); therefore $U \cap A \ne \varnothing$. [A1, L3]

1.2 (c) implies (a): suppose $x \notin \overline{A}$; then $U := X \setminus \overline{A}$ is open by [A1] and [L3], contains $x$, and satisfies $U \cap A = \varnothing$ because $A \subseteq \overline{A}$, so (c) fails. [A1, L3]

1.3 (b) implies (c): an open $U$ containing $x$ is a neighbourhood of $x$, so (b) applies to it. [L1]

1.4 (c) implies (b): let $N$ be a neighbourhood of $x$ and fix open $U$ with $x \in U \subseteq N$; then $\varnothing \ne U \cap A \subseteq N \cap A$. [L1]

1.5 (c) implies (d): every $B \in \mathcal{B}$ with $x \in B$ is an open set containing $x$. [L2]

1.6 (d) implies (c): let $U$ be open with $x \in U$ and fix $B \in \mathcal{B}$ with $x \in B \subseteq U$; then $\varnothing \ne B \cap A \subseteq U \cap A$. [L2]

1.7 $A \subseteq \overline{A}$ and $\overline{A}$ is closed, and $\overline{A}$ is contained in every closed superset of $A$, which is claim 2; in particular $A$ is closed exactly when $A = \overline{A}$, since one inclusion always holds and the other says that $A$ is a closed superset of itself. [A1, L3]

2.1 By steps 1.1 to 1.6 the four conditions (a), (b), (c) and (d) are equivalent, which is claim 1: (a) and (c) are equivalent by steps 1.1 and 1.2, (b) and (c) by steps 1.3 and 1.4, and (c) and (d) by steps 1.5 and 1.6. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, step 1.6]

3.1 $A \cup A' \subseteq \overline{A}$: points of $A$ lie in $\overline{A}$ by [A1], and if $x \in A'$ then every neighbourhood $N$ of $x$ meets $A \setminus \{x\}$ and hence meets $A$, so $x \in \overline{A}$ by condition (b). [step 2.1, A1, A2]

3.2 $\overline{A} \subseteq A \cup A'$: let $x \in \overline{A}$ and suppose $x \notin A$; then for every neighbourhood $N$ of $x$ condition (b) gives $N \cap A \ne \varnothing$, and $A = A \setminus \{x\}$ because $x \notin A$, so $N \cap (A \setminus \{x\}) \ne \varnothing$ and $x \in A'$. [step 2.1, A2]

4.1 Steps 3.1 and 3.2 give $\overline{A} = A \cup A'$, which is claim 3; with step 2.1 for claim 1 and step 1.7 for claim 2 the theorem is proved. [step 1.7, step 2.1, step 3.1, step 3.2] ∎

## Remarks

- **Clause (d) is relative to a basis and clause (c) is not.** Different bases for one topology give different families of test sets in (d), and the theorem says all of them detect the same closure. This is why a closure in a metric space may be computed with balls alone, and a closure in $\mathbb{R}$ with bounded open intervals alone.

- **The empty set and the whole space.** $\overline{\varnothing} = \varnothing$, since $\varnothing$ is closed, and $\overline{X} = X$; claim 1 reads correctly in both cases, no neighbourhood meeting $\varnothing$ and every neighbourhood meeting $X$.

- **Nothing here assumes that singletons are closed.** In the indiscrete topology on a set with at least two points, $\overline{\{x\}} = X$ for every $x$, since the only neighbourhood of any point is $X$; claim 3 then says $A' = X \setminus \{x\}$ is contained in $\overline{\{x\}}$, which it is.
````

### `thm-the-closed-graph-criterion-over-a-compact-hausdorff-codomain`

````markdown
---
id: thm-the-closed-graph-criterion-over-a-compact-hausdorff-codomain
kind: theorem
title: "A map into a compact space whose graph is closed is continuous; so for a compact Hausdorff codomain, continuity and closedness of the graph are equivalent"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-the-graph-of-a-continuous-map-into-a-hausdorff-space-is-closed,
       def-compact-space, thm-closed-subspace-of-a-compact-space-is-compact,
       def-product-topology, def-topology-basis-subbasis, def-subspace-topology-top,
       lem-finite-choice, def-choice-function, def-countable, def-hausdorff-space,
       def-continuous-map-top, def-topological-space]
justified_by: []
aliases: [thm-closed-graph-criterion-top]
landmark: true
short: "closed graph criterion over a compact codomain"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Closed graph theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closed_graph_theorem"
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "Introduction to Functional Analysis (MIT 18.102)"
      url: "https://math.mit.edu/~kehle/files/Introduction_to_functional_analysis_18_102.pdf"
pipeline_run: null
---

## Statement

Let $X$ and $Y$ be topological spaces, let $f : X \to Y$ be a function, and give
$X \times Y$ the product topology ([[def-product-topology]]), writing

$$G_f \;=\; \{\, z \in X \times Y : z_1 = f(z_0) \,\}$$

for the graph of $f$. Then:

1. **Closed graph implies continuity, over a compact codomain.** If $Y$ is
   compact ([[def-compact-space]]) and $G_f$ is closed in $X \times Y$, then $f$
   is continuous ([[def-continuous-map-top]]). *No separation hypothesis on $Y$
   is used in this direction.*
2. **Continuity implies closed graph, over a Hausdorff codomain.** If $Y$ is
   Hausdorff ([[def-hausdorff-space]]) and $f$ is continuous, then $G_f$ is
   closed in $X \times Y$.
3. **The equivalence.** If $Y$ is compact **and** Hausdorff then $f$ is
   continuous if and only if $G_f$ is closed in $X \times Y$.

**The two halves carry different hypotheses and the equivalence is stated only
where both hold.** Claim 1 needs compactness and does not need the Hausdorff
condition; claim 2 needs the Hausdorff condition and does not need compactness.
Neither hypothesis may be transplanted to the other half.

## Facts & Assumptions

**Given:** Topological spaces $X$ and $Y$, a function $f : X \to Y$, the product $X \times Y$ with the product topology, and the graph $G_f = \{\, z \in X \times Y : z_1 = f(z_0) \,\}$.

[A1] The boxes $U \times W$ with $U$ open in $X$ and $W$ open in $Y$ form a basis for the product topology on $X \times Y$, the index set being $2$ ([[def-product-topology]], [[def-topology-basis-subbasis]]).

[A2] $f$ is continuous at $x_0$ exactly when for every open $V \subseteq Y$ with $f(x_0) \in V$ there is an open $U \subseteq X$ with $x_0 \in U$ and $f[U] \subseteq V$, and $f$ is continuous when this holds at every point of $X$ ([[def-continuous-map-top]]).

[A3] A subset of a space is closed exactly when its complement is open; a finite intersection of open sets is open, and $X$ itself is open ([[def-topological-space]]).

[L1] A space is compact when every family of its open sets whose union is the whole space has a finite subfamily whose union is the whole space; a subset is compact when it is compact as a subspace, whose open sets are the traces of the open sets of the ambient space ([[def-compact-space]], [[def-subspace-topology-top]]).

[L2] A closed subspace of a compact space is compact ([[thm-closed-subspace-of-a-compact-space-is-compact]]).

[L3] A finite set is equinumerous with some natural number $n$, hence may be listed as $a_0, \dots, a_{n-1}$ ([[def-countable]]).

[L4] If $F$ is a function with domain a natural number $n$ all of whose values are nonempty sets, then the family of its values has a choice function; this is a theorem of ZF ([[lem-finite-choice]], [[def-choice-function]]).

[L5] If $Y$ is Hausdorff and $f$ is continuous then $G_f$ is closed in $X \times Y$ ([[lem-the-graph-of-a-continuous-map-into-a-hausdorff-space-is-closed]], [[def-hausdorff-space]]).

## Proof

**Proof technique:** direct.

1.1 Assume $Y$ is compact and $G_f$ is closed, and put $N := (X \times Y) \setminus G_f$, which is open. [A3]

1.2 Fix $x_0 \in X$ and an open $V \subseteq Y$ with $f(x_0) \in V$, and put $C := Y \setminus V$; then $C$ is closed in $Y$, hence a compact subspace. [A3, L2]

1.3 Let $\mathcal{P}$ be the set of all pairs $(U, W)$ such that $U$ is open in $X$, $W$ is open in $Y$, $x_0 \in U$ and $(U \times W) \cap G_f = \varnothing$; this family is specified by a formula and nothing is selected in forming it. [construct]

1.4 If $Y$ is Hausdorff and $f$ is continuous then $G_f$ is closed, which is claim 2. [L5]

2.1 Every $y \in C$ lies in $W$ for some $(U,W) \in \mathcal{P}$: since $f(x_0) \in V$ and $y \notin V$ we have $y \ne f(x_0)$, so $(x_0, y) \in N$, and by [A1] there is a basic box $U \times W$ with $(x_0,y) \in U \times W \subseteq N$, which gives $(U,W) \in \mathcal{P}$. [step 1.1, step 1.2, step 1.3, A1]

3.1 The family $\mathcal{V} := \{\, W \cap C : (U,W) \in \mathcal{P} \text{ for some } U \,\}$ consists of sets open in the subspace $C$ and its union is $C$, by step 2.1. [step 2.1, L1]

4.1 By compactness of $C$ there is a finite subfamily of $\mathcal{V}$ whose union is $C$; being finite it may be listed as $V_0, \dots, V_{n-1}$ for some $n \in \mathbb{N}$, so that $C \subseteq \bigcup_{i<n} V_i$. [step 1.2, step 3.1, L1, L3]

5.1 For each $i < n$ the set $\mathcal{P}_i := \{\, (U,W) \in \mathcal{P} : W \cap C = V_i \,\}$ is nonempty, since $V_i \in \mathcal{V}$; so by [L4] applied to the function $i \mapsto \mathcal{P}_i$ on $n$ there is a choice function on the family of these sets, and it supplies a pair $(U_i, W_i) \in \mathcal{P}_i$ for every $i < n$. [step 4.1, L4, choose]

6.1 Put $U := \{\, x \in X : x \in U_i \text{ for every } i < n \,\}$; this is $X$ when $n = 0$ and a finite intersection of open sets otherwise, hence open in either case, and $x_0 \in U$ since $x_0 \in U_i$ for every $i < n$. [step 5.1, A3, construct]

7.1 $f[U] \subseteq V$: let $x \in U$ and suppose $f(x) \notin V$, that is $f(x) \in C$; then $f(x) \in V_i = W_i \cap C \subseteq W_i$ for some $i < n$ by step 4.1, while $x \in U \subseteq U_i$, so the point $(x, f(x))$ of $G_f$ lies in $U_i \times W_i$, contradicting $(U_i \times W_i) \cap G_f = \varnothing$; hence $f(x) \in V$. [step 4.1, step 5.1, step 6.1]

8.1 By steps 6.1 and 7.1 there is, for the arbitrary $x_0 \in X$ and the arbitrary open $V$ containing $f(x_0)$ fixed in step 1.2, an open $U \ni x_0$ with $f[U] \subseteq V$; so $f$ is continuous by [A2], which is claim 1. [step 1.2, step 6.1, step 7.1, A2]

9.1 If $Y$ is compact and Hausdorff then step 8.1 gives one implication and step 1.4 the other, so continuity of $f$ and closedness of $G_f$ are equivalent, which is claim 3; with steps 8.1 and 1.4 the theorem is proved. [step 8.1, step 1.4] ∎

## Remarks

- **The choice cost is exactly one finite choice, and the family it is made from is defined by a formula.** The textbook phrasing "for each $y \in C$ choose a box around $(x_0,y)$ missing the graph" selects one object for each point of an arbitrary set and is an application of the Axiom of Choice. Step 1.3 avoids it by collecting *all* admissible pairs into one formula-defined family; only after compactness has cut the cover down to finitely many members is anything chosen, and that choice is licensed by [[lem-finite-choice]], a theorem of ZF.

- **Why the empty case is written out.** If $V = Y$ then $C = \varnothing$ and the finite subfamily of step 4.1 may be empty, so $n = 0$; the set $U$ of step 6.1 is then $X$, which is exactly what is wanted. Writing $U$ as a defining condition rather than as an intersection is what makes that reading available, an intersection over no sets not being defined.

- **Compactness of the codomain is doing the work in claim 1, and it is not removable.** Nothing in that direction separates points, and no Hausdorff hypothesis appears; what is used is that the *complement of the target open set* is compact. A discontinuous function with closed graph into a non-compact Hausdorff codomain is recorded on this page as a false statement.
````

