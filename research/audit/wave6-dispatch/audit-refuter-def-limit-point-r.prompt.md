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

## Target item — `def-limit-point-r`

Normalized current SHA-256: `77c8ace625d71330a848eb95d3f2f85dee5535f7148a0a925d1f22f2709c87c3`

The complete current item follows, including frontmatter:

````markdown
---
id: def-limit-point-r
kind: definition
title: "Limit point, isolated point, adherent point, derived set, and dense subset of $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-neighbourhood-r, def-open-and-closed-in-r, def-interior-closure-boundary-r]
justified_by: []
aliases: [def-accumulation-point-r, def-derived-set-r, def-dense-in-r]
landmark: true
short: "limit point, isolated point, dense"
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
    - title: "Limit point (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_point"
    - title: "Isolated point (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Isolated_point"
    - title: "Dense set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dense_set"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Def. 2.18)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Let $A \subseteq \mathbb{R}$ and $x \in \mathbb{R}$, with neighbourhoods as in
[[def-neighbourhood-r]] and closure as in
[[def-interior-closure-boundary-r]].

- $x$ is an **adherent point** of $A$ when $N_\varepsilon(x) \cap A \ne
  \varnothing$ for every real $\varepsilon > 0$.
- $x$ is a **limit point** (or *accumulation point*) of $A$ when
  $N^{*}_\varepsilon(x) \cap A \ne \varnothing$ for every real
  $\varepsilon > 0$: every punctured neighbourhood of $x$ meets $A$.
- $x$ is an **isolated point** of $A$ when $x \in A$ and there is a real
  $\varepsilon > 0$ with $N_\varepsilon(x) \cap A = \{x\}$.
- The **derived set** of $A$ is
  $$A' \;:=\; \{\, x \in \mathbb{R} : x \text{ is a limit point of } A \,\}.$$
- $A$ is **dense in $\mathbb{R}$** when $\overline{A} = \mathbb{R}$.

**A limit point is an adherent point**, since $N^{*}_\varepsilon(x) \subseteq
N_\varepsilon(x)$; and an element of $A$ is an adherent point of $A$, since
$x \in N_\varepsilon(x) \cap A$ ([[def-neighbourhood-r]]). So the adherent
points of $A$ are exactly the points of $A \cup A'$, a statement proved as part
of [[thm-closure-characterisations-r]].

**Limit point and isolated point are exact opposites inside $A$.** For
$x \in A$: $x$ is an isolated point of $A$ exactly when it is not a limit point
of $A$. Indeed $N_\varepsilon(x) \cap A = \{x\}$ says precisely that
$N^{*}_\varepsilon(x) \cap A = \varnothing$, because $x$ itself always lies in
$N_\varepsilon(x) \cap A$ when $x \in A$; so the existence of an $\varepsilon$
witnessing isolation is the negation of the condition defining a limit point.
A point of $A$ is therefore either isolated in $A$ or a limit point of $A$, and
never both.

**A limit point need not belong to the set, and a point of the set need not be a
limit point.** Both possibilities occur, and the two examples that matter later
are $0$, which is a limit point of $\{\, 1/k : k \ge 1 \,\}$ without belonging
to it, and $0$ again, which belongs to $\{0\} \cup [1,2]$ as an isolated point.

## Remarks

- **Terminology: *limit point* here is about a set, never about a sequence.**
  This library reserves *subsequential limit* for the sequential notion
  ([[def-subsequential-limit]]), and the two are genuinely different: the
  constant sequence $x_k = 0$ has $0$ as a subsequential limit, while its set of
  values $\{0\}$ has no limit point at all. The distinction is the one
  [[def-subsequential-limit]] records under "Terminology", and it is respected
  throughout this page.

- **Density is defined through the closure, not through intervals.** Saying
  $\overline{A} = \mathbb{R}$ is equivalent to saying that every nonempty open
  subset of $\mathbb{R}$ meets $A$, and also to saying that every neighbourhood
  of every real meets $A$; the equivalences follow from
  [[thm-closure-characterisations-r]] and are used in that form in
  [[lem-q-and-irrationals-dense-r]].

- **The derived set need not be comparable with the set.** It can be strictly
  larger, as for $\mathbb{Q}$: every punctured neighbourhood of any real
  contains a rational, since density supplies one strictly between $x$ and
  $x + \varepsilon$ ([[lem-q-and-irrationals-dense-r]]), so the derived set of
  $\mathbb{Q}$ is all of $\mathbb{R}$. It can be strictly smaller, as for
  $\{0\}$, whose derived set is empty; and it can be neither, as for
  $\{0\} \cup (1,2)$, whose derived set is $[1,2]$, a set containing points
  outside the original and omitting the point $0$ of it. A closed set satisfying
  $A \subseteq A'$ is called perfect ([[def-perfect-set-r]]).
````

## Proof contract for the target

No proof contract is required for this non-proof-bearing item.

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "def-limit-point-r",
    "sourcePage": "topology-of-r",
    "batch": "wave6-real-analysis-limits",
    "target": "def-neighbourhood-r",
    "declared_target": "def-neighbourhood-r",
    "target_statement_provenance": null,
    "targetPage": "topology-of-r",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "def-limit-point-r",
    "sourcePage": "topology-of-r",
    "batch": "wave6-real-analysis-limits",
    "target": "def-open-and-closed-in-r",
    "declared_target": "def-open-and-closed-in-r",
    "target_statement_provenance": null,
    "targetPage": "topology-of-r",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "def-limit-point-r",
    "sourcePage": "topology-of-r",
    "batch": "wave6-real-analysis-limits",
    "target": "def-interior-closure-boundary-r",
    "declared_target": "def-interior-closure-boundary-r",
    "target_statement_provenance": null,
    "targetPage": "topology-of-r",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  }
]
```

## Full text of every cited or declared item (7)

### `def-interior-closure-boundary-r`

````markdown
---
id: def-interior-closure-boundary-r
kind: definition
title: "Interior, closure, boundary and exterior of a subset of $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-open-and-closed-in-r, def-neighbourhood-r, thm-open-set-algebra-r]
justified_by: []
aliases: []
landmark: true
short: "$A^{\\circ}$, $\\overline{A}$, $\\partial A$"
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
    - title: "Interior (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Interior_(topology)"
    - title: "Closure (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closure_(topology)"
    - title: "Boundary (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Boundary_(topology)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Let $A \subseteq \mathbb{R}$, with open and closed sets as in
[[def-open-and-closed-in-r]].

- The **interior** of $A$ is the union of all open subsets of $A$:
  $$A^{\circ} \;:=\; \bigcup \{\, U \subseteq \mathbb{R} : U \text{ open and } U \subseteq A \,\}.$$
- The **closure** of $A$ is the intersection of all closed supersets of $A$:
  $$\overline{A} \;:=\; \bigcap \{\, F \subseteq \mathbb{R} : F \text{ closed and } A \subseteq F \,\}.$$
- The **boundary** of $A$ is $\partial A := \overline{A} \setminus A^{\circ}$.
- The **exterior** of $A$ is $\operatorname{ext} A := (\mathbb{R} \setminus A)^{\circ}$.

**Both operators are well defined and deliver what their names claim.** The
family whose union defines $A^{\circ}$ always contains $\varnothing$, and the
family whose intersection defines $\overline{A}$ always contains $\mathbb{R}$,
so the second family is nonempty and both expressions denote subsets of
$\mathbb{R}$ without appeal to any convention about empty unions or
intersections. Moreover:

- $A^{\circ}$ is **open**, being a union of open sets
  ([[thm-open-set-algebra-r]], claim 1), and $A^{\circ} \subseteq A$, since
  every set in the family is a subset of $A$. It is therefore the **largest**
  open subset of $A$: any open $U \subseteq A$ is a member of the family and so
  $U \subseteq A^{\circ}$.
- $\overline{A}$ is **closed**, being an intersection of a nonempty family of
  closed sets ([[thm-open-set-algebra-r]], claim 3), and $A \subseteq
  \overline{A}$, since every set in the family contains $A$. It is therefore the
  **smallest** closed superset of $A$: any closed $F \supseteq A$ is a member of
  the family and so $\overline{A} \subseteq F$.

**Pointwise description of the interior.** For $x \in \mathbb{R}$,

$$x \in A^{\circ} \iff \text{there is } \varepsilon > 0 \text{ with } N_\varepsilon(x) \subseteq A .$$

If $x \in A^{\circ}$ then, $A^{\circ}$ being open and containing $x$, there is
$\varepsilon > 0$ with $N_\varepsilon(x) \subseteq A^{\circ} \subseteq A$.
Conversely if $N_\varepsilon(x) \subseteq A$ then $N_\varepsilon(x)$ is an open
subset of $A$ ([[def-open-and-closed-in-r]]) containing $x$, hence
$x \in N_\varepsilon(x) \subseteq A^{\circ}$ ([[def-neighbourhood-r]]).

The corresponding pointwise description of the closure is not a definitional
matter and is proved separately, as [[thm-closure-characterisations-r]].

## Remarks

- **The four sets partition nothing by themselves, but three of them do.** For
  every $A$ the three sets $A^{\circ}$, $\partial A$ and $\operatorname{ext} A$
  are pairwise disjoint with union $\mathbb{R}$. This is not proved here and is
  not used on this page; what is used is only the definitions above and the
  characterisations of [[thm-closure-characterisations-r]].

- **Interior and closure are dual.** Complementation exchanges the two families
  above, since $U$ is open exactly when $\mathbb{R} \setminus U$ is closed, so
  $\mathbb{R} \setminus A^{\circ} = \overline{\mathbb{R} \setminus A}$ and
  $\mathbb{R} \setminus \overline{A} = (\mathbb{R} \setminus A)^{\circ} =
  \operatorname{ext} A$. The second identity is the reason the exterior is
  usually described as "the complement of the closure".

- **$A$ is open exactly when $A = A^{\circ}$, and closed exactly when
  $A = \overline{A}$.** For the first: $A^{\circ} \subseteq A$ always, and
  $A \subseteq A^{\circ}$ holds exactly when $A$ is one of the open subsets of
  $A$, that is, exactly when $A$ is open. The closure half is the same argument
  read the other way, and it is recorded as a claim of
  [[thm-closure-characterisations-r]] because the rest of that theorem needs it.

- **Boundary points may or may not belong to the set.** $\partial (0,1) =
  \partial [0,1] = \{0,1\}$, and the two boundary points lie outside the first
  set and inside the second; the boundary sees only the way the set meets its
  complement, not which side the edge is assigned to.
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

### `def-perfect-set-r`

````markdown
---
id: def-perfect-set-r
kind: definition
title: "Perfect subset of $\\mathbb{R}$: closed with no isolated points"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-limit-point-r, def-open-and-closed-in-r, thm-closure-characterisations-r]
justified_by: []
forward_refs: [cex-closed-set-with-an-isolated-point-is-not-perfect, ex-closed-interval-is-perfect]
aliases: []
landmark: false
short: "perfect set"
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
    - title: "Perfect set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Perfect_set"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Def. 2.18(h))"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Isolated point (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Isolated_point"
    - title: "A. Erdman, Companion to Real Analysis"
      url: "https://web.pdx.edu/~erdman/CRA/COMPANION_ANALYSIS_pdf.pdf"
pipeline_run: null
---

## Definition

A set $P \subseteq \mathbb{R}$ is **perfect** when

- $P$ is closed ([[def-open-and-closed-in-r]]), and
- $P$ has no isolated points ([[def-limit-point-r]]): no $x \in P$ admits a real
  $\varepsilon > 0$ with $N_\varepsilon(x) \cap P = \{x\}$.

**Equivalently, $P$ is closed and $P \subseteq P'$.** By
[[def-limit-point-r]], a point of $P$ is isolated in $P$ exactly when it is not
a limit point of $P$, so "no point of $P$ is isolated in $P$" says precisely
that every point of $P$ is a limit point of $P$, that is, $P \subseteq P'$.
Combined with the characterisation of closedness as $P' \subseteq P$
([[thm-closure-characterisations-r]]), a perfect set is exactly a set with
$P = P'$, though only the two conditions above are used below.

## Remarks

- **Both conditions are needed and neither implies the other.** The set
  $\{0\} \cup [1,2]$ is closed and has the isolated point $0$, so it is not
  perfect ([[cex-closed-set-with-an-isolated-point-is-not-perfect]]); the open
  interval $(0,1)$ has no isolated points and is not closed, so it is not
  perfect either.

- **$\varnothing$ is perfect**, vacuously: it is closed and has no points at
  all, hence no isolated ones. This is why
  [[thm-perfect-set-uncountable-r]] carries the hypothesis that $P$ is nonempty:
  the empty set is perfect and countable.

- **A nonempty perfect set is forced to be large.** It is uncountable
  ([[thm-perfect-set-uncountable-r]]), and the simplest examples are the
  nondegenerate closed intervals ([[ex-closed-interval-is-perfect]]). A perfect
  set need not contain any interval, the Cantor set being the standard example
  of that; it is not constructed anywhere in this library, and the statement is
  recorded here as orientation only, on the references above.
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

### `lem-q-and-irrationals-dense-r`

````markdown
---
id: lem-q-and-irrationals-dense-r
kind: lemma
title: "Both $\\mathbb{Q}$ and $\\mathbb{R} \\setminus \\mathbb{Q}$ are dense in $\\mathbb{R}$, and every nonempty open subset of $\\mathbb{R}$ is uncountable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-rat-embeds-dense, def-limit-point-r, def-open-and-closed-in-r, def-interval, def-neighbourhood-r, thm-closure-characterisations-r, cor-interval-uncountable, lem-subset-of-countable, def-countable, thm-rationals-countable, def-equinumerous, def-injection-surjection-bijection]
justified_by: []
forward_refs: [ex-closure-interior-boundary-of-q]
aliases: []
landmark: false
short: "$\\mathbb{Q}$ and its complement are dense"
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
    - title: "Dense set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dense_set"
    - title: "Countable set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countable_set"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 and Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §1.2"
      url: "https://www.jirka.org/ra/"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Write $\mathbb{Q}_{\mathbb{R}}$ for the image of $\mathbb{Q}$ in $\mathbb{R}$
under the canonical embedding $q \mapsto \hat q$ ([[lem-rat-embeds-dense]]), the
set usually written $\mathbb{Q}$ once the identification is made, and put
$X := \mathbb{R} \setminus \mathbb{Q}_{\mathbb{R}}$ for the irrationals. Then:

1. $\mathbb{Q}_{\mathbb{R}}$ is dense in $\mathbb{R}$, that is,
   $\overline{\mathbb{Q}_{\mathbb{R}}} = \mathbb{R}$ ([[def-limit-point-r]]);
2. $X$ is dense in $\mathbb{R}$;
3. every nonempty open subset of $\mathbb{R}$ is uncountable
   ([[def-countable]]).

Claim 2 is not a symmetry of claim 1: the rationals are dense because they are
*constructed* to approximate, whereas the irrationals are dense because there are
too many points in any interval for a countable set to exhaust it, which is why
claim 3 is proved alongside and used for it.

## Facts & Assumptions

**Given:** The canonical embedding $q \mapsto \hat q$ of $\mathbb{Q}$ into $\mathbb{R}$, its image $\mathbb{Q}_{\mathbb{R}}$, and the complement $X = \mathbb{R} \setminus \mathbb{Q}_{\mathbb{R}}$.

[L1] $\overline{A}$ is the set of points every neighbourhood of which meets $A$; $A$ is dense in $\mathbb{R}$ when $\overline{A} = \mathbb{R}$ ([[thm-closure-characterisations-r]], [[def-limit-point-r]]).

[L2] $N_\varepsilon(x) = (x - \varepsilon, x + \varepsilon)$ for real $\varepsilon > 0$, and $x - \varepsilon < x + \varepsilon$ ([[def-neighbourhood-r]], [[def-interval]]).

[L3] $U$ is open when every $x \in U$ admits $\varepsilon > 0$ with $N_\varepsilon(x) \subseteq U$ ([[def-open-and-closed-in-r]]).

[L4] Strictly between any two reals lies an element of $\mathbb{Q}_{\mathbb{R}}$, and $q \mapsto \hat q$ is injective ([[lem-rat-embeds-dense]]).

[L5] $\mathbb{Q} \approx \mathbb{N}$ ([[thm-rationals-countable]]); an injection is a bijection onto its image, and $\approx$ is symmetric and transitive ([[def-injection-surjection-bijection]], [[def-equinumerous]]).

[L6] Every subset of an at most countable set is at most countable, and uncountable means not at most countable ([[lem-subset-of-countable]], [[def-countable]]).

[L7] For $a < b$ the interval $(a,b)$ is uncountable ([[cor-interval-uncountable]]).

## Proof

**Proof technique:** direct.

1.1 $\mathbb{Q}_{\mathbb{R}}$ is dense: let $x \in \mathbb{R}$ and let $\varepsilon > 0$ be real; by [L2] one has $x - \varepsilon < x + \varepsilon$, so [L4] supplies $\hat q$ with $x - \varepsilon < \hat q < x + \varepsilon$, that is $\hat q \in N_\varepsilon(x) \cap \mathbb{Q}_{\mathbb{R}}$. Every real is therefore an adherent point of $\mathbb{Q}_{\mathbb{R}}$ and claim 1 follows from [L1]. [L1, L2, L4]

1.2 $\mathbb{Q}_{\mathbb{R}}$ is at most countable: the embedding is an injection of $\mathbb{Q}$ with image $\mathbb{Q}_{\mathbb{R}}$, hence a bijection onto it, so $\mathbb{Q}_{\mathbb{R}} \approx \mathbb{Q} \approx \mathbb{N}$. [L4, L5]

1.3 For all reals $a < b$ the interval $(a,b)$ is uncountable. [L7]

2.1 For all reals $a < b$ the interval $(a,b)$ contains an irrational: if it did not, then $(a,b) \subseteq \mathbb{Q}_{\mathbb{R}}$, so $(a,b)$ would be a subset of an at most countable set by step 1.2 and hence at most countable by [L6], contradicting step 1.3. So some $z \in (a,b)$ lies in $X$. [step 1.2, step 1.3, L6]

2.2 Every nonempty open $U \subseteq \mathbb{R}$ is uncountable: fix $x \in U$ and, by [L3], a real $\varepsilon > 0$ with $N_\varepsilon(x) \subseteq U$; by [L2] the set $N_\varepsilon(x)$ is the interval $(x - \varepsilon, x + \varepsilon)$ with $x - \varepsilon < x + \varepsilon$, hence uncountable by step 1.3. Were $U$ at most countable, its subset $N_\varepsilon(x)$ would be at most countable by [L6], which it is not; so $U$ is uncountable, which is claim 3. [step 1.3, L2, L3, L6, choose]

3.1 $X$ is dense: let $x \in \mathbb{R}$ and let $\varepsilon > 0$ be real; applying step 2.1 with $a = x - \varepsilon$ and $b = x + \varepsilon$ gives $z \in (x - \varepsilon, x + \varepsilon) \cap X$, which is $N_\varepsilon(x) \cap X$ by [L2]. Every real is therefore an adherent point of $X$, so $\overline{X} = \mathbb{R}$ by [L1], which is claim 2. [step 2.1, L1, L2]

4.1 Claims 1, 2 and 3 are steps 1.1, 3.1 and 2.2, so both $\mathbb{Q}_{\mathbb{R}}$ and its complement are dense in $\mathbb{R}$ and every nonempty open subset of $\mathbb{R}$ is uncountable. [step 1.1, step 2.2, step 3.1] ∎

## Remarks

- **Two dense sets can be disjoint.** $\mathbb{Q}_{\mathbb{R}}$ and $X$ partition
  $\mathbb{R}$ and both are dense, so density says nothing about size: one of
  them is countable and the other is not
  ([[cor-irrationals-uncountable]]). What density does say is that neither has
  interior: a set whose complement is dense has empty interior, which is the
  computation carried out for $\mathbb{Q}$ in
  [[ex-closure-interior-boundary-of-q]].

- **Claim 3 is a statement about open sets, not about intervals.** It follows
  from the uncountability of intervals ([[cor-interval-uncountable]]) only
  because openness supplies an interval inside the set at each of its points.
  A nonempty set with empty interior can perfectly well be countable, as
  $\mathbb{Q}_{\mathbb{R}}$ shows.

- **An explicit irrational is not produced here.** Step 2.1 is a counting
  argument and exhibits nothing. The library does exhibit one separately,
  $\sqrt 2$ ([[thm-of-square-roots]], [[fs-sqrt2-rational]]), and an explicit
  irrational in a given interval $(a,b)$ can be built from it as
  $q_1 + (q_2 - q_1)/\sqrt 2$ for suitable rationals $q_1 < q_2$ in the
  interval; that route is longer and is not the one taken above.
````

### `thm-closure-characterisations-r`

````markdown
---
id: thm-closure-characterisations-r
kind: theorem
title: "The closure equals the set together with its limit points, equals the set of points every neighbourhood of which meets it, and is the smallest closed superset; a set is closed iff it contains its limit points"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-interior-closure-boundary-r, def-limit-point-r, def-open-and-closed-in-r, thm-open-set-algebra-r, def-neighbourhood-r]
justified_by: []
aliases: []
landmark: true
short: "$\\overline{A} = A \\cup A'$"
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
    - title: "Closure (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closure_(topology)"
    - title: "Limit point (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_point"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Thm 2.27)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §7.2"
      url: "https://www.jirka.org/ra/"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, with closure $\overline{A}$ as in
[[def-interior-closure-boundary-r]] and derived set $A'$ as in
[[def-limit-point-r]]. Write

$$E \;:=\; \{\, x \in \mathbb{R} : N_\varepsilon(x) \cap A \ne \varnothing \text{ for every real } \varepsilon > 0 \,\}$$

for the set of adherent points of $A$ ([[def-neighbourhood-r]]). Then:

1. $\overline{A} = E$.
2. $\overline{A} = A \cup A'$.
3. $\overline{A}$ is the smallest closed superset of $A$: it is closed, it
   contains $A$, and it is contained in every closed $F$ with $A \subseteq F$.
4. $A$ is closed if and only if $A = \overline{A}$, if and only if
   $A' \subseteq A$.

Claim 3 is the content of the definition of $\overline{A}$ and is restated here
so that the four descriptions stand together; claims 1, 2 and 4 are the ones
that carry work.

## Facts & Assumptions

**Given:** A subset $A \subseteq \mathbb{R}$, and the set $E$ of adherent points of $A$ as displayed in the Statement.

[L1] $U$ is open when every $x \in U$ admits $\varepsilon > 0$ with $N_\varepsilon(x) \subseteq U$; $F$ is closed when $\mathbb{R} \setminus F$ is open ([[def-open-and-closed-in-r]]).

[L2] $x \in N_\varepsilon(x)$; $N^{*}_\varepsilon(x) = N_\varepsilon(x) \setminus \{x\} \subseteq N_\varepsilon(x)$; and if $y \in N_\varepsilon(x)$ then $\delta := \varepsilon - |y - x| > 0$ and $N_\delta(y) \subseteq N_\varepsilon(x)$ ([[def-neighbourhood-r]]).

[L3] $\overline{A}$ is the intersection of the nonempty family of closed supersets of $A$; it is closed, it contains $A$, and it is contained in every closed superset of $A$ ([[def-interior-closure-boundary-r]], [[thm-open-set-algebra-r]]).

[L4] $x$ is an adherent point of $A$ when every $N_\varepsilon(x)$ meets $A$, a limit point when every $N^{*}_\varepsilon(x)$ meets $A$, and $A'$ is the set of limit points ([[def-limit-point-r]]).

## Proof

**Proof technique:** direct.

1.1 $A \subseteq E$: for $x \in A$ and any $\varepsilon > 0$ one has $x \in N_\varepsilon(x) \cap A$, so that intersection is nonempty. [L2, L4]

1.2 Let $x \in \mathbb{R} \setminus E$; by the definition of $E$ there is a real $\varepsilon > 0$ with $N_\varepsilon(x) \cap A = \varnothing$. [L4, choose]

1.3 Let $F$ be closed with $A \subseteq F$, and let $x \in \mathbb{R} \setminus F$; since $\mathbb{R} \setminus F$ is open there is a real $\eta > 0$ with $N_\eta(x) \subseteq \mathbb{R} \setminus F$. [L1, choose]

2.1 For every $y \in N_\varepsilon(x)$ the radius $\delta := \varepsilon - |y - x|$ is positive and $N_\delta(y) \subseteq N_\varepsilon(x)$, so $N_\delta(y) \cap A = \varnothing$ and $y \notin E$; hence $N_\varepsilon(x) \subseteq \mathbb{R} \setminus E$, and since $x$ was an arbitrary point of $\mathbb{R} \setminus E$ that set is open, that is, $E$ is closed. [step 1.2, L1, L2, L4]

2.2 From $N_\eta(x) \subseteq \mathbb{R} \setminus F \subseteq \mathbb{R} \setminus A$ we get $N_\eta(x) \cap A = \varnothing$, so $x \notin E$; hence $\mathbb{R} \setminus F \subseteq \mathbb{R} \setminus E$, that is, $E \subseteq F$, for every closed $F \supseteq A$. [step 1.3, L4]

3.1 By steps 1.1 and 2.1 the set $E$ is a closed superset of $A$, so $\overline{A} \subseteq E$ by the leastness in [L3]; and $\overline{A}$ is itself a closed superset of $A$ by [L3], so step 2.2 applied to $F = \overline{A}$ gives $E \subseteq \overline{A}$. Hence $\overline{A} = E$, which is claim 1. [step 1.1, step 2.1, step 2.2, L3]

4.1 $E = A \cup A'$: if $x \in E$ and $x \notin A$ then for every $\varepsilon > 0$ some $a \in N_\varepsilon(x) \cap A$ exists, and $a \ne x$ because $x \notin A$, so $a \in N^{*}_\varepsilon(x) \cap A$ and $x \in A'$; conversely $A \subseteq E$ by step 1.1, and $A' \subseteq E$ because $N^{*}_\varepsilon(x) \subseteq N_\varepsilon(x)$. Combining with step 3.1 gives $\overline{A} = A \cup A'$, which is claim 2. [step 1.1, step 3.1, L2, L4]

5.1 Claim 4: if $A$ is closed then $A$ is a closed superset of itself, so $\overline{A} \subseteq A$ by [L3], while $A \subseteq \overline{A}$ by [L3], whence $A = \overline{A}$; conversely if $A = \overline{A}$ then $A$ is closed because $\overline{A}$ is. Finally $A = \overline{A}$ says $A = A \cup A'$ by step 4.1, and $A = A \cup A'$ holds exactly when $A' \subseteq A$. [step 4.1, L3]

6.1 Claim 3 is [L3] restated, and claims 1, 2 and 4 are steps 3.1, 4.1 and 5.1, so all four hold. [step 3.1, step 4.1, step 5.1, L3] ∎

## Remarks

- **Which claim does the work in practice.** Claim 1 is the one used almost
  everywhere below: to show a point lies in $\overline{A}$ one exhibits, for each
  $\varepsilon > 0$, a point of $A$ within $\varepsilon$ of it. Claim 2 is what
  separates the two ways a point can be adherent, by membership or by
  accumulation, and it is what makes the notion of an isolated point visible.

- **No special property of $\mathbb{R}$ is used.** The argument uses the
  definitions of open, closed, neighbourhood and closure, and the order enters
  only through the nesting property of neighbourhoods; neither the
  least-upper-bound property nor the Archimedean property appears at any step.
  The results of this page that do use them are flagged in
  [[rem-r-native-topology-scope]].

- **The sequential form is a separate theorem and costs more.** Replacing
  "every neighbourhood meets $A$" by "some sequence in $A$ converges to $x$" is
  [[lem-sequential-characterisation-of-closure-r]], and the passage from the
  first to the second spends the axiom of countable choice, since it selects one
  point of $A$ from each of infinitely many neighbourhoods. The characterisation
  proved above is choice free.
````

