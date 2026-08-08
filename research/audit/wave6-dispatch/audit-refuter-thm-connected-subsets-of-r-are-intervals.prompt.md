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

## Target item — `thm-connected-subsets-of-r-are-intervals`

Normalized current SHA-256: `631489e1b98e7eb88cd0155b14e6adc036ddf22ccd8c689fbcc787b44a86f662`

The complete current item follows, including frontmatter:

````markdown
---
id: thm-connected-subsets-of-r-are-intervals
kind: theorem
title: "A subset of $\\mathbb{R}$ is connected if and only if it is order-convex, that is, an interval"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-connected-r, def-interval, def-complete-ordered-field, lem-sup-epsilon, lem-sup-unique, def-open-and-closed-in-r, def-bounded-set, thm-closure-characterisations-r, def-interior-closure-boundary-r, def-neighbourhood-r, lem-finite-set-has-max, def-max-min, def-ordered-field, lem-of-add-order, cor-of-one-positive, lem-of-sign-rules]
justified_by: []
forward_refs: [cex-rationals-in-an-interval-are-disconnected]
aliases: []
landmark: true
short: "connected $\\iff$ order-convex"
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
    - title: "Connected space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Connected_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Thm 2.47)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §7.5"
      url: "https://www.jirka.org/ra/"
    - title: "Interval (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Interval_(mathematics)"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $E \subseteq \mathbb{R}$. Then $E$ is connected ([[def-connected-r]]) if and
only if $E$ is **order-convex** ([[def-interval]]), that is, if and only if

$$x, z \in E \text{ and } x \le w \le z \;\Longrightarrow\; w \in E .$$

**On the word "interval".** Order-convexity is exactly the defining property
that [[def-interval]] proves for each of its nine forms, and in that sense the
theorem says that the connected subsets of $\mathbb{R}$ are the intervals. The
converse classification, that every order-convex subset of $\mathbb{R}$ is empty
or one of the nine forms, is true and is explicitly **not proved anywhere in
this library**; [[def-interval]] records that omission in its own remarks. So
the statement proved below is the equivalence with order-convexity, and the
phrase "is an interval" is to be read as "is order-convex" throughout this page.

## Facts & Assumptions

**Given:** A subset $E \subseteq \mathbb{R}$.

[L1] Separated sets, disconnection, connectedness; separated sets are disjoint ([[def-connected-r]]).

[L2] $\overline{A}$ is the smallest closed superset of $A$, so $A \subseteq B$ gives $\overline{A} \subseteq \overline{B}$ and $\overline{A} \subseteq F$ for every closed $F \supseteq A$; and $\overline{A}$ is exactly the set of points every neighbourhood of which meets $A$ ([[thm-closure-characterisations-r]], [[def-interior-closure-boundary-r]]).

[L3] Order-convexity, and the interval forms: $(-\infty,w]$ and $[w,\infty)$ are closed sets, $(-\infty,w)$ and $(w,\infty)$ are open sets, and the order is total and transitive ([[def-interval]], [[def-open-and-closed-in-r]], [[def-ordered-field]], [[def-complete-ordered-field]]).

[L4] Least-upper-bound property: a nonempty subset of $\mathbb{R}$ bounded above has a unique least upper bound ([[def-complete-ordered-field]], [[lem-sup-unique]], [[def-bounded-set]]).

[L5] Epsilon characterisation: for nonempty $S$ bounded above and $c = \sup S$, every $\varepsilon > 0$ admits $s \in S$ with $c - \varepsilon < s$ ([[lem-sup-epsilon]]).

[L6] $N_\varepsilon(x) = \{\, y : |y - x| < \varepsilon \,\}$ ([[def-neighbourhood-r]]).

[L7] Every nonempty finite set of reals has a minimum, which is one of its members ([[lem-finite-set-has-max]], [[def-max-min]]).

[L8] Ordered-field arithmetic: $0 < 1$, so $2 := 1+1 > 0$ and $2^{-1} > 0$; for $d > 0$ one has $0 < d \cdot 2^{-1} < d$; adding a constant preserves an inequality ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Proof

**Proof technique:** direct.

1.1 Suppose $E$ is not order-convex: there are $x, z \in E$ and $w \in \mathbb{R}$ with $x \le w \le z$ and $w \notin E$; then $w \ne x$ and $w \ne z$, so $x < w < z$. Put $A := E \cap (-\infty,w)$ and $B := E \cap (w,\infty)$; then $x \in A$ and $z \in B$, so both are nonempty, and $A \cup B = E$ because no element of $E$ equals $w$. [assume-hyp, L3]

1.2 Suppose instead that $E$ is order-convex and that $(A,B)$ is a disconnection of $E$; fix $p \in A$ and $q \in B$. Separated sets are disjoint by [L1], so $p \ne q$, and interchanging the names $A$ and $B$ if necessary, which is legitimate because the hypotheses on the pair are symmetric, we may assume $p < q$. [assume-hyp, L1, choose]

1.3 For a nonempty $S \subseteq \mathbb{R}$ bounded above, $\sup S \in \overline{S}$: for every real $\varepsilon > 0$ the fact [L5] supplies $s \in S$ with $\sup S - \varepsilon < s \le \sup S$, so $|s - \sup S| < \varepsilon$ and $s \in N_\varepsilon(\sup S) \cap S$; thus every neighbourhood of $\sup S$ meets $S$, and [L2] gives $\sup S \in \overline{S}$. [L2, L4, L5, L6]

2.1 In the situation of step 1.1 the pair $(A,B)$ is a disconnection: $(-\infty,w]$ is a closed set containing $A$, so $\overline{A} \subseteq (-\infty,w]$ by [L2], whence $\overline{A} \cap B \subseteq (-\infty,w] \cap (w,\infty) = \varnothing$; symmetrically $\overline{B} \subseteq [w,\infty)$ and $A \cap \overline{B} = \varnothing$. So $A$ and $B$ are separated, nonempty, and their union is $E$, and $E$ is disconnected. [step 1.1, L1, L2, L3]

2.2 In the situation of step 1.2 put $S := A \cap [p,q]$; it is nonempty because $p \in A$ and $p \le p \le q$, and it is bounded above by $q$, so $c := \sup S$ exists by [L4], and $p \le c \le q$ since $p \in S$ and $q$ is an upper bound. [step 1.2, L3, L4]

3.1 $c \in A$: from $S \subseteq A$ and [L2] we get $\overline{S} \subseteq \overline{A}$, and $c \in \overline{S}$ by step 1.3, so $c \in \overline{A}$ and hence $c \notin B$ because $\overline{A} \cap B = \varnothing$; on the other hand $p \le c \le q$ with $p, q \in E$ and $E$ order-convex gives $c \in E = A \cup B$, so $c \in A$. [step 1.2, step 1.3, step 2.2, L1, L2]

4.1 $c < q$, since $c \in A$ and $q \in B$ are distinct by [L1] while $c \le q$; and every $v$ with $c < v \le q$ lies in $B$: such a $v$ satisfies $p \le c < v \le q$, so $v \in E$ by order-convexity, and $v \notin A$, for otherwise $v \in A \cap [p,q] = S$ would force $v \le c$. [step 1.2, step 2.2, step 3.1, L1, L3]

5.1 $c \in \overline{B}$, which is impossible: given a real $\varepsilon > 0$, put $t := \min\{\varepsilon \cdot 2^{-1},\ (q - c) \cdot 2^{-1}\}$, a positive real by [L7] and [L8] since $q - c > 0$, and $v := c + t$; then $c < v$ and $v \le c + (q-c) \cdot 2^{-1} < q$, so $v \in B$ by step 4.1, while $|v - c| = t \le \varepsilon \cdot 2^{-1} < \varepsilon$, so $v \in N_\varepsilon(c) \cap B$. Hence every neighbourhood of $c$ meets $B$ and $c \in \overline{B}$ by [L2]; but $c \in A$ by step 3.1 and $A \cap \overline{B} = \varnothing$ by [L1]. So the assumed disconnection cannot exist and an order-convex $E$ is connected. [step 3.1, step 4.1, L1, L2, L6, L7, L8]

6.1 Step 2.1 shows that a set which is not order-convex is disconnected, hence a connected set is order-convex; step 5.1 shows that an order-convex set admits no disconnection, hence is connected. The two together are the asserted equivalence. [step 2.1, step 5.1] ∎

## Remarks

- **Where completeness is spent.** Only in step 2.2, which produces
  $\sup(A \cap [p,q])$; no other step uses the least-upper-bound property, and
  the rest is the order, ordered-field arithmetic and the definition of
  separation. The obstruction over an incomplete ordered field is traceable to
  the failure of that supremum to exist, and it is visible in
  [[cex-rationals-in-an-interval-are-disconnected]]: the set
  $\mathbb{Q} \cap [0,2]$ contains all the rationals between its endpoints and is
  nevertheless disconnected as a subset of $\mathbb{R}$, split at an irrational
  point that $\mathbb{Q}$ does not see.

- **The two directions are of different characters.** "Not order-convex implies
  disconnected" is a construction, step 1.1, and needs nothing beyond the order.
  "Order-convex implies connected" is where the work sits, and the supremum
  $c$ produced in step 2.2 is the point at which the two pieces would have to
  meet; the contradiction is that it is adherent to both.

- **The theorem is about subsets of $\mathbb{R}$ and its statement is written in
  order vocabulary**, so it cannot even be stated where no order is present;
  [[rem-r-native-topology-scope]] collects the results on this page with that
  feature.
````

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "def-connected-r",
      "source_section": "Definition",
      "quote": "Let $A, B, E \\subseteq \\mathbb{R}$, with closure as in\n[[def-interior-closure-boundary-r]].\n\n- $A$ and $B$ are **separated** when\n  $$\\overline{A} \\cap B = \\varnothing \\quad \\text{and} \\quad A \\cap \\overline{B} = \\varnothing .$$\n- A **disconnection** of $E$ is a pair $(A,B)$ of nonempty separated sets with\n  $E = A \\cup B$.\n- $E$ is **disconnected** when it admits a disconnection, and **connected** when\n  it does not.\n\n**Separated is strictly stronger than disjoint.** Since $A \\subseteq\n\\overline{A}$ ([[def-interior-closure-boundary-r]]), the first displayed\ncondition already gives $A \\cap B \\subseteq \\overline{A} \\cap B = \\varnothing$,\nso separated sets are disjoint. The converse fails: $(0,1)$ and $[1,2)$ are\ndisjoint, yet every neighbourhood of $1$ meets $(0,1)$, so $1$ is an adherent\npoint of $(0,1)$ and lies in $\\overline{(0,1)}$\n([[thm-closure-characterisations-r]]), while $1 \\in [1,2)$; hence\n$\\overline{(0,1)} \\cap [1,2) \\ne \\varnothing$ and the pair is not separated.\nWhat separation adds to disjointness is exactly this: **neither set of a\nseparated pair may contain a point adherent to the other**, which is what makes\na disconnection a genuine splitting rather than a bookkeeping partition.\n\n**Separation does not ask the two closures to be disjoint.** Each condition\ntests one closure against the *other set*, never closure against closure. The\npair $(0,1)$, $(1,2)$ illustrates the difference and is separated: $[0,1]$ is a\nclosed set containing $(0,1)$, so $\\overline{(0,1)} \\subseteq [0,1]$\n([[def-open-and-closed-in-r]], [[def-interior-closure-boundary-r]]) and\n$\\overline{(0,1)} \\cap (1,2) = \\varnothing$; symmetrically\n$\\overline{(1,2)} \\subseteq [1,2]$ and $(0,1) \\cap \\overline{(1,2)} =\n\\varnothing$. The two closures nevertheless share the point $1$, so a definition\ndemanding $\\overline{A} \\cap \\overline{B} = \\varnothing$ would be a different and\nstrictly stronger condition, and it is not the one used here.",
      "uses": [
        "1.2",
        "2.1",
        "3.1",
        "4.1",
        "5.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-closure-characterisations-r",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$, with closure $\\overline{A}$ as in\n[[def-interior-closure-boundary-r]] and derived set $A'$ as in\n[[def-limit-point-r]]. Write\n\n$$E \\;:=\\; \\{\\, x \\in \\mathbb{R} : N_\\varepsilon(x) \\cap A \\ne \\varnothing \\text{ for every real } \\varepsilon > 0 \\,\\}$$\n\nfor the set of adherent points of $A$ ([[def-neighbourhood-r]]). Then:\n\n1. $\\overline{A} = E$.\n2. $\\overline{A} = A \\cup A'$.\n3. $\\overline{A}$ is the smallest closed superset of $A$: it is closed, it\n   contains $A$, and it is contained in every closed $F$ with $A \\subseteq F$.\n4. $A$ is closed if and only if $A = \\overline{A}$, if and only if\n   $A' \\subseteq A$.\n\nClaim 3 is the content of the definition of $\\overline{A}$ and is restated here\nso that the four descriptions stand together; claims 1, 2 and 4 are the ones\nthat carry work.",
      "uses": [
        "1.3",
        "2.1",
        "3.1",
        "5.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-interior-closure-boundary-r",
      "source_section": "Definition",
      "quote": "Let $A \\subseteq \\mathbb{R}$, with open and closed sets as in\n[[def-open-and-closed-in-r]].\n\n- The **interior** of $A$ is the union of all open subsets of $A$:\n  $$A^{\\circ} \\;:=\\; \\bigcup \\{\\, U \\subseteq \\mathbb{R} : U \\text{ open and } U \\subseteq A \\,\\}.$$\n- The **closure** of $A$ is the intersection of all closed supersets of $A$:\n  $$\\overline{A} \\;:=\\; \\bigcap \\{\\, F \\subseteq \\mathbb{R} : F \\text{ closed and } A \\subseteq F \\,\\}.$$\n- The **boundary** of $A$ is $\\partial A := \\overline{A} \\setminus A^{\\circ}$.\n- The **exterior** of $A$ is $\\operatorname{ext} A := (\\mathbb{R} \\setminus A)^{\\circ}$.\n\n**Both operators are well defined and deliver what their names claim.** The\nfamily whose union defines $A^{\\circ}$ always contains $\\varnothing$, and the\nfamily whose intersection defines $\\overline{A}$ always contains $\\mathbb{R}$,\nso the second family is nonempty and both expressions denote subsets of\n$\\mathbb{R}$ without appeal to any convention about empty unions or\nintersections. Moreover:\n\n- $A^{\\circ}$ is **open**, being a union of open sets\n  ([[thm-open-set-algebra-r]], claim 1), and $A^{\\circ} \\subseteq A$, since\n  every set in the family is a subset of $A$. It is therefore the **largest**\n  open subset of $A$: any open $U \\subseteq A$ is a member of the family and so\n  $U \\subseteq A^{\\circ}$.\n- $\\overline{A}$ is **closed**, being an intersection of a nonempty family of\n  closed sets ([[thm-open-set-algebra-r]], claim 3), and $A \\subseteq\n  \\overline{A}$, since every set in the family contains $A$. It is therefore the\n  **smallest** closed superset of $A$: any closed $F \\supseteq A$ is a member of\n  the family and so $\\overline{A} \\subseteq F$.\n\n**Pointwise description of the interior.** For $x \\in \\mathbb{R}$,\n\n$$x \\in A^{\\circ} \\iff \\text{there is } \\varepsilon > 0 \\text{ with } N_\\varepsilon(x) \\subseteq A .$$\n\nIf $x \\in A^{\\circ}$ then, $A^{\\circ}$ being open and containing $x$, there is\n$\\varepsilon > 0$ with $N_\\varepsilon(x) \\subseteq A^{\\circ} \\subseteq A$.\nConversely if $N_\\varepsilon(x) \\subseteq A$ then $N_\\varepsilon(x)$ is an open\nsubset of $A$ ([[def-open-and-closed-in-r]]) containing $x$, hence\n$x \\in N_\\varepsilon(x) \\subseteq A^{\\circ}$ ([[def-neighbourhood-r]]).\n\nThe corresponding pointwise description of the closure is not a definitional\nmatter and is proved separately, as [[thm-closure-characterisations-r]].",
      "uses": [
        "1.3",
        "2.1",
        "3.1",
        "5.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-interval",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]], [[def-ordered-field]]) with its order\n([[def-real-order]]).\n\nA subset $I \\subseteq \\mathbb{R}$ is **order-convex** when\n\n$$x, y \\in I \\text{ and } x \\le z \\le y \\;\\Longrightarrow\\; z \\in I .$$\n\nThe **intervals** of $\\mathbb{R}$ are the sets of the following nine forms, where\n$a, b \\in \\mathbb{R}$:\n\n| | bounded forms | | one-sided and full forms |\n|---|---|---|---|\n| $(a,b)$ | $\\{x : a < x < b\\}$ | $(a,\\infty)$ | $\\{x : a < x\\}$ |\n| $[a,b]$ | $\\{x : a \\le x \\le b\\}$ | $[a,\\infty)$ | $\\{x : a \\le x\\}$ |\n| $[a,b)$ | $\\{x : a \\le x < b\\}$ | $(-\\infty,b)$ | $\\{x : x < b\\}$ |\n| $(a,b]$ | $\\{x : a < x \\le b\\}$ | $(-\\infty,b]$ | $\\{x : x \\le b\\}$ |\n| | | $(-\\infty,\\infty)$ | $\\mathbb{R}$ |\n\nAn interval is **open** when both of its written endpoints are excluded, that is\nfor the forms $(a,b)$, $(a,\\infty)$, $(-\\infty,b)$ and $(-\\infty,\\infty)$; it is\n**closed** when both written endpoints are included, that is for $[a,b]$,\n$[a,\\infty)$, $(-\\infty,b]$ and $(-\\infty,\\infty)$. The forms $[a,b)$ and\n$(a,b]$ are **half-open**.\n\n**The symbols $\\pm\\infty$ are notation and not elements of $\\mathbb{R}$.** They\nmark which side carries no endpoint condition at all; the five forms in the right\ncolumn are defined by the displayed conditions on $x$ alone, and no arithmetic is\never performed with $\\infty$. This is the same refusal to extend $\\mathbb{R}$\nsilently that [[rem-sup-conventions]] records for suprema.\n\n**Every one of the nine forms is order-convex.** Each is defined by a conjunction\nof at most two conditions, each of the shape $a < x$, $a \\le x$, $x < b$ or\n$x \\le b$, and each such condition is inherited by an intermediate point: if\n$a < x$ and $x \\le z$ then $a < z$, and if $z \\le y$ and $y < b$ then $z < b$,\nby transitivity of the order ([[def-ordered-field]]). Applying this to whichever\none or two conditions define the form in question gives $z \\in I$ whenever\n$x, y \\in I$ and $x \\le z \\le y$.\n\n**Bounded intervals.** An interval is **bounded** ([[def-bounded-set]]) exactly\nwhen it is of one of the four forms in the left column: for those, $a$ is a lower\nbound and $b$ an upper bound. The other five forms are unbounded, on the side or\nsides written with $\\infty$; the verification is in the remarks below.\n\n**Nondegeneracy.** An interval is **degenerate** when it has at most one element,\nand **nondegenerate** when it has at least two. For the four bounded forms with\nendpoints $a$ and $b$:\n\n- $[a,b]$ is nonempty exactly when $a \\le b$, and it is nondegenerate exactly\n  when $a < b$. It is the singleton $\\{a\\}$ when $a = b$.\n- $(a,b)$, $[a,b)$ and $(a,b]$ are nonempty exactly when $a < b$, and then each\n  is nondegenerate.\n\nThe only assertion here that is not immediate from the defining conditions is\nthat $a < b$ makes $(a,b)$ nonempty with at least two points. It holds because\n$a < (a+b)/2 < b$, which follows from $a < b$ by adding $a$, respectively $b$, to\nboth sides and halving ([[def-ordered-field]]); repeating the halving inside\n$(a, (a+b)/2)$ produces a second point.\n\n**Closed bounded intervals.** These are the sets $[a,b]$ with $a \\le b$, which is\nexactly the condition making them nonempty. They are the intervals the nested\ninterval property is stated for, and the phrase *closed bounded interval* always\ncarries the hypothesis $a \\le b$ in this library.\n\n**Length.** The **length** of a bounded interval presented by its endpoints\n$a \\le b$ is\n\n$$\\ell = b - a \\;\\ge\\; 0 .$$\n\nLength is attached to the presentation by endpoints and is not recovered from the\nset: $(a,b)$, $[a,b)$ and $(a,b]$ are all empty when $a = b$, and so is\n$(c,c)$ for any other $c$, while each of these presentations has length $0$, so\nnothing inconsistent arises; but the endpoints are named explicitly at every\npoint where a length is used in this library, and never inferred from the set.\nUnbounded intervals are assigned no length.",
      "uses": [
        "1.1",
        "2.1",
        "2.2",
        "4.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-open-and-closed-in-r",
      "source_section": "Definition",
      "quote": "Let $U, F \\subseteq \\mathbb{R}$, with neighbourhoods as in\n[[def-neighbourhood-r]].\n\n- $U$ is **open** when for every $x \\in U$ there is a real $\\varepsilon > 0$\n  with $N_\\varepsilon(x) \\subseteq U$.\n- $F$ is **closed** when its complement $\\mathbb{R} \\setminus F$ is open.\n- A set is **clopen** when it is both open and closed.\n\nThe whole of the topology of $\\mathbb{R}$ developed on this page rests on this\none definition: closedness is *defined* as openness of the complement, and every\nother description of a closed set on this page is a theorem\n([[thm-closure-characterisations-r]], [[lem-sequential-characterisation-of-closure-r]]).\n\n**$\\varnothing$ and $\\mathbb{R}$ are clopen.** The condition defining openness\nquantifies over the elements of the set, so it holds vacuously for\n$\\varnothing$; and for $x \\in \\mathbb{R}$ one has $N_1(x) \\subseteq \\mathbb{R}$,\nso $\\mathbb{R}$ is open. Since each of the two is the complement of the other,\neach is also closed.\n\n**Every neighbourhood is open.** Let $y \\in N_\\varepsilon(x)$ and put\n$\\delta := \\varepsilon - |y - x|$, which is $> 0$ because\n$y \\in N_\\varepsilon(x)$. The nesting property of [[def-neighbourhood-r]] gives\n$N_\\delta(y) \\subseteq N_\\varepsilon(x)$. So every point of $N_\\varepsilon(x)$\nhas a neighbourhood inside it.\n\n**The four open forms of [[def-interval]] are open sets.** Let $a, b \\in\n\\mathbb{R}$.\n\n- $(a,b)$: for $x$ with $a < x < b$, both $x - a > 0$ and $b - x > 0$, so\n  $\\delta := \\min\\{x - a,\\ b - x\\}$ is a positive real (the minimum of a\n  two-element set of reals exists, [[lem-finite-set-has-max]], [[def-max-min]]).\n  If $|y - x| < \\delta$ then $y > x - \\delta \\ge x - (x - a) = a$ and\n  $y < x + \\delta \\le x + (b - x) = b$, so $y \\in (a,b)$; hence\n  $N_\\delta(x) \\subseteq (a,b)$.\n- $(a,\\infty)$: for $x > a$ take $\\delta := x - a > 0$; then $|y - x| < \\delta$\n  gives $y > x - \\delta = a$.\n- $(-\\infty,b)$: for $x < b$ take $\\delta := b - x > 0$; then $|y - x| < \\delta$\n  gives $y < x + \\delta = b$.\n- $(-\\infty,\\infty) = \\mathbb{R}$: already treated above.\n\n**The four closed forms of [[def-interval]] are closed sets.** In each case the\ncomplement is shown open directly.\n\n- $[a,b]$: if $x \\notin [a,b]$ then $x < a$ or $x > b$ by trichotomy\n  ([[def-ordered-field]]). If $x < a$, take $\\delta := a - x > 0$; every\n  $y \\in N_\\delta(x)$ has $y < x + \\delta = a$, hence $y \\notin [a,b]$. If\n  $x > b$, take $\\delta := x - b > 0$; every $y \\in N_\\delta(x)$ has\n  $y > x - \\delta = b$, hence $y \\notin [a,b]$. So\n  $\\mathbb{R} \\setminus [a,b]$ is open.\n- $[a,\\infty)$: its complement is $(-\\infty,a)$, which is open by the previous\n  paragraph.\n- $(-\\infty,b]$: its complement is $(b,\\infty)$, which is open.\n- $(-\\infty,\\infty) = \\mathbb{R}$: its complement is $\\varnothing$, which is\n  open.",
      "uses": [
        "1.1",
        "2.1",
        "2.2",
        "4.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-ordered-field",
      "source_section": "Definition",
      "quote": "An **ordered field** is a field $F$ ([[def-field]]) together with a subset\n$P \\subseteq F$, the set of **positive** elements (the *positive cone*),\nsatisfying:\n\n- **(O1) Trichotomy.** For each $x \\in F$, exactly one of the following holds:\n  $x \\in P$, or $x = 0$, or $-x \\in P$.\n- **(O2) Closure.** If $x, y \\in P$ then $x + y \\in P$ and $x \\cdot y \\in P$.\n\nWe write $x > 0$ for $x \\in P$ (read \"$x$ is positive\"), and define the order by\n\n$$a < b \\;:\\Longleftrightarrow\\; b - a \\in P, \\qquad a \\le b \\;:\\Longleftrightarrow\\; a < b \\text{ or } a = b.$$\n\nThus $a > b$ means $b < a$, and $a \\ge b$ means $b \\le a$. An element $x$ with\n$-x \\in P$ (equivalently $x < 0$) is called **negative**.",
      "uses": [
        "1.1",
        "2.1",
        "2.2",
        "4.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-complete-ordered-field",
      "source_section": "Definition",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and $S \\subseteq F$.\n\n- $u \\in F$ is an **upper bound** of $S$ if $s \\le u$ for all $s \\in S$; $S$ is\n  **bounded above** if it has an upper bound.\n- $u \\in F$ is a **least upper bound** (or **supremum**, $\\sup S$) of $S$ if $u$\n  is an upper bound of $S$ and $u \\le u'$ for every upper bound $u'$ of $S$.\n\n$F$ is a **complete ordered field** (equivalently, $F$ has the\n**least-upper-bound property**, or is **Dedekind complete**) if every nonempty\n$S \\subseteq F$ that is bounded above has a least upper bound in $F$.",
      "uses": [
        "1.1",
        "2.1",
        "2.2",
        "4.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-complete-ordered-field",
      "source_section": "Definition",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and $S \\subseteq F$.\n\n- $u \\in F$ is an **upper bound** of $S$ if $s \\le u$ for all $s \\in S$; $S$ is\n  **bounded above** if it has an upper bound.\n- $u \\in F$ is a **least upper bound** (or **supremum**, $\\sup S$) of $S$ if $u$\n  is an upper bound of $S$ and $u \\le u'$ for every upper bound $u'$ of $S$.\n\n$F$ is a **complete ordered field** (equivalently, $F$ has the\n**least-upper-bound property**, or is **Dedekind complete**) if every nonempty\n$S \\subseteq F$ that is bounded above has a least upper bound in $F$.",
      "uses": [
        "1.3",
        "2.2"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-sup-unique",
      "source_section": "Statement",
      "quote": "Let $S \\subseteq \\mathbb{R}$. If $u_1$ and $u_2$ are both least upper bounds of\n$S$ ([[def-complete-ordered-field]]), then $u_1 = u_2$. If $\\ell_1$ and $\\ell_2$\nare both greatest lower bounds of $S$ ([[def-infimum]]), then\n$\\ell_1 = \\ell_2$.\n\nConsequently a set has at most one supremum and at most one infimum, and the\nnotations $\\sup S$ and $\\inf S$ denote single, well-determined real numbers\nwhenever they exist.",
      "uses": [
        "1.3",
        "2.2"
      ]
    },
    {
      "fact": "L4",
      "source": "def-bounded-set",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ denotes the complete ordered field\n([[def-complete-ordered-field]]) and $S \\subseteq \\mathbb{R}$ is a subset of it.\n\nThe notions **upper bound** and **bounded above** are already fixed by\n[[def-complete-ordered-field]] and are only recalled here, never redefined:\n$u \\in \\mathbb{R}$ is an *upper bound* of $S$ if $s \\le u$ for all $s \\in S$, and\n$S$ is *bounded above* if it has at least one upper bound. The dual notions are:\n\n- $\\ell \\in \\mathbb{R}$ is a **lower bound** of $S$ if $\\ell \\le s$ for all $s \\in S$.\n- $S$ is **bounded below** if it has at least one lower bound.\n- $S$ is **bounded** if it is both bounded above and bounded below, that is, if\n  there are $\\ell, u \\in \\mathbb{R}$ with $\\ell \\le s \\le u$ for every $s \\in S$.",
      "uses": [
        "1.3",
        "2.2"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-sup-epsilon",
      "source_section": "Statement",
      "quote": "Let $S \\subseteq \\mathbb{R}$ be nonempty and bounded above, and let $u$ be an\nupper bound of $S$ ([[def-complete-ordered-field]]). Then\n\n$$u = \\sup S \\quad \\Longleftrightarrow \\quad \\text{for every } \\varepsilon > 0 \\text{ there exists } s \\in S \\text{ with } u - \\varepsilon < s.$$\n\nIn words: among the upper bounds of $S$, the supremum is exactly the one that\ncannot be lowered by any positive amount and still bound $S$.",
      "uses": [
        "1.3"
      ]
    },
    {
      "fact": "L6",
      "source": "def-neighbourhood-r",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]], [[def-ordered-field]]) with its order\n([[def-real-order]]) and its absolute value ([[def-abs-value]]).\n\nLet $x \\in \\mathbb{R}$ and let $\\varepsilon \\in \\mathbb{R}$ with\n$\\varepsilon > 0$. The **$\\varepsilon$-neighbourhood of $x$** is\n\n$$N_\\varepsilon(x) \\;:=\\; \\{\\, y \\in \\mathbb{R} : |y - x| < \\varepsilon \\,\\},$$\n\nand the **punctured $\\varepsilon$-neighbourhood of $x$** is\n\n$$N^{*}_\\varepsilon(x) \\;:=\\; N_\\varepsilon(x) \\setminus \\{x\\} \\;=\\; \\{\\, y \\in \\mathbb{R} : 0 < |y - x| < \\varepsilon \\,\\}.$$\n\nThe two descriptions of $N^{*}_\\varepsilon(x)$ agree because $|y - x| = 0$ holds\nexactly when $y = x$ ([[lem-of-abs-value]]).\n\n**A neighbourhood is an open interval.** For every $x$ and every\n$\\varepsilon > 0$,\n\n$$N_\\varepsilon(x) \\;=\\; (x - \\varepsilon,\\ x + \\varepsilon),$$\n\nthe interval of [[def-interval]]. Indeed [[lem-of-abs-value]] gives, for\n$\\varepsilon > 0$, the equivalence $|y - x| < \\varepsilon \\iff -\\varepsilon <\ny - x < \\varepsilon$, and adding $x$ throughout turns the right-hand side into\n$x - \\varepsilon < y < x + \\varepsilon$ ([[def-ordered-field]]).\n\n**The centre lies in its own neighbourhoods.** $x \\in N_\\varepsilon(x)$, since\n$|x - x| = |0| = 0 < \\varepsilon$ ([[lem-of-abs-value]]).\n\n**Punctured neighbourhoods are never empty.** The element\n$y := x + \\varepsilon/2$ satisfies $|y - x| = \\varepsilon/2$, which is\n$> 0$ and $< \\varepsilon$, so $y \\in N^{*}_\\varepsilon(x)$\n([[lem-of-abs-value]], [[def-ordered-field]]).\n\n**Monotonicity in the radius.** If $0 < \\delta \\le \\varepsilon$ then\n$N_\\delta(x) \\subseteq N_\\varepsilon(x)$, because $|y - x| < \\delta \\le\n\\varepsilon$ ([[def-ordered-field]]).\n\n**Nesting at an interior point.** If $y \\in N_\\varepsilon(x)$ and\n$0 < \\delta \\le \\varepsilon - |y - x|$, then\n\n$$N_\\delta(y) \\;\\subseteq\\; N_\\varepsilon(x).$$\n\nIndeed for $z \\in N_\\delta(y)$ the triangle inequality\n([[lem-of-triangle-inequality]]) gives\n$|z - x| = |(z - y) + (y - x)| \\le |z - y| + |y - x| < \\delta + |y - x| \\le\n\\varepsilon$. Note that $\\varepsilon - |y - x| > 0$ precisely because\n$y \\in N_\\varepsilon(x)$, so such a $\\delta$ always exists.",
      "uses": [
        "1.3",
        "5.1"
      ]
    },
    {
      "fact": "L7",
      "source": "lem-finite-set-has-max",
      "source_section": "Statement",
      "quote": "For every $n \\in \\mathbb{N}$ and all $a_0, a_1, \\dots, a_n \\in \\mathbb{R}$, the\nset $\\{a_0, a_1, \\dots, a_n\\}$ has a maximum and a minimum ([[def-max-min]]).\n\nWhat is proved below is exactly the displayed statement, by induction on $n$.\n\nThe usual reading, that *every nonempty finite subset of $\\mathbb{R}$ has a\nmaximum and a minimum*, follows once one identifies the nonempty finite subsets\nof $\\mathbb{R}$ with the sets listable as $\\{a_0, \\dots, a_n\\}$. That\nidentification is recorded as a stipulation in the Given below, because this page\nhas no definition of finiteness to prove it against. **It is discharged, not\nmerely assumed**: [[lem-finite-subsets-listable]] proves that the two\ndescriptions of a nonempty finite subset of $\\mathbb{R}$ agree. That lemma is\nrecorded in `justified_by` rather than in `deps`, since it is about the sets this\nlemma quantifies over and therefore depends on this one. This is what licenses\nthe notation\n$\\max\\{a_1, \\dots, a_n\\}$ and $\\min\\{a_1, \\dots, a_n\\}$ for finite sets of\n**real** numbers from this page onwards.",
      "uses": [
        "5.1"
      ]
    },
    {
      "fact": "L7",
      "source": "def-max-min",
      "source_section": "Definition",
      "quote": "Let $S \\subseteq \\mathbb{R}$ and $m \\in \\mathbb{R}$.\n\n- $m$ is a **maximum** (or *greatest element*) of $S$ if $m \\in S$ and $s \\le m$\n  for every $s \\in S$.\n- $m$ is a **minimum** (or *least element*) of $S$ if $m \\in S$ and $m \\le s$\n  for every $s \\in S$.\n\nA set has at most one maximum: if $m_1$ and $m_2$ are both maxima then\n$m_1 \\in S$ gives $m_1 \\le m_2$ and $m_2 \\in S$ gives $m_2 \\le m_1$, so\n$m_1 = m_2$ by antisymmetry of the order, which is immediate from the trichotomy\naxiom of an ordered field ([[def-ordered-field]], [[def-complete-ordered-field]]).\nThe same argument applies to minima, so we may write $\\max S$ and $\\min S$.",
      "uses": [
        "5.1"
      ]
    },
    {
      "fact": "L8",
      "source": "cor-of-one-positive",
      "source_section": "Statement",
      "quote": "In any ordered field $F$ with positive cone $P$, the multiplicative identity\nsatisfies $0 < 1$; that is, $1 \\in P$.",
      "uses": [
        "5.1"
      ]
    },
    {
      "fact": "L8",
      "source": "lem-of-add-order",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and\nlet $a, b, c, d \\in F$.\n\n1. **Translation invariance.** If $a < b$ then $a + c < b + c$.\n2. **Adding inequalities.** If $a < b$ and $c < d$ then $a + c < b + d$.",
      "uses": [
        "5.1"
      ]
    },
    {
      "fact": "L8",
      "source": "lem-of-sign-rules",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and\nlet $a, b, c \\in F$.\n\n1. If $a > 0$ and $b > 0$ then $ab > 0$.\n2. If $a > 0$ and $b < 0$ then $ab < 0$.\n3. If $a < 0$ and $b < 0$ then $ab > 0$.\n4. If $c > 0$ then $a < b \\iff ac < bc$.\n5. If $c < 0$ then $a < b \\iff bc < ac$ (multiplication by a negative reverses order).",
      "uses": [
        "5.1"
      ]
    },
    {
      "fact": "L8",
      "source": "def-ordered-field",
      "source_section": "Definition",
      "quote": "An **ordered field** is a field $F$ ([[def-field]]) together with a subset\n$P \\subseteq F$, the set of **positive** elements (the *positive cone*),\nsatisfying:\n\n- **(O1) Trichotomy.** For each $x \\in F$, exactly one of the following holds:\n  $x \\in P$, or $x = 0$, or $-x \\in P$.\n- **(O2) Closure.** If $x, y \\in P$ then $x + y \\in P$ and $x \\cdot y \\in P$.\n\nWe write $x > 0$ for $x \\in P$ (read \"$x$ is positive\"), and define the order by\n\n$$a < b \\;:\\Longleftrightarrow\\; b - a \\in P, \\qquad a \\le b \\;:\\Longleftrightarrow\\; a < b \\text{ or } a = b.$$\n\nThus $a > b$ means $b < a$, and $a \\ge b$ means $b \\le a$. An element $x$ with\n$-x \\in P$ (equivalently $x < 0$) is called **negative**.",
      "uses": [
        "5.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "Suppose $E$ is not order-convex: there are $x, z \\in E$ and $w \\in \\mathbb{R}$ with $x \\le w \\le z$ and $w \\notin E$; then $w \\ne x$ and $w \\ne z$, so $x < w < z$. Put $A := E \\cap (-\\infty,w)$ and $B := E \\cap (w,\\infty)$; then $x \\in A$ and $z \\in B$, so both are nonempty, and $A \\cup B = E$ because no element of $E$ equals $w$.",
      "step": "1.1",
      "inputs": [
        "assume-hyp",
        "L3"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "Suppose instead that $E$ is order-convex and that $(A,B)$ is a disconnection of $E$; fix $p \\in A$ and $q \\in B$. Separated sets are disjoint by [L1], so $p \\ne q$, and interchanging the names $A$ and $B$ if necessary, which is legitimate because the hypotheses on the pair are symmetric, we may assume $p < q$.",
      "step": "1.2",
      "inputs": [
        "assume-hyp",
        "L1",
        "choose"
      ]
    },
    {
      "id": "step-1-3",
      "claim": "For a nonempty $S \\subseteq \\mathbb{R}$ bounded above, $\\sup S \\in \\overline{S}$: for every real $\\varepsilon > 0$ the fact [L5] supplies $s \\in S$ with $\\sup S - \\varepsilon < s \\le \\sup S$, so $|s - \\sup S| < \\varepsilon$ and $s \\in N_\\varepsilon(\\sup S) \\cap S$; thus every neighbourhood of $\\sup S$ meets $S$, and [L2] gives $\\sup S \\in \\overline{S}$.",
      "step": "1.3",
      "inputs": [
        "L2",
        "L4",
        "L5",
        "L6"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "In the situation of step 1.1 the pair $(A,B)$ is a disconnection: $(-\\infty,w]$ is a closed set containing $A$, so $\\overline{A} \\subseteq (-\\infty,w]$ by [L2], whence $\\overline{A} \\cap B \\subseteq (-\\infty,w] \\cap (w,\\infty) = \\varnothing$; symmetrically $\\overline{B} \\subseteq",
      "step": "2.1",
      "inputs": [
        "w",
        "\\infty)$ and $A \\cap \\overline{B} = \\varnothing$. So $A$ and $B$ are separated",
        "nonempty",
        "and their union is $E$",
        "and $E$ is disconnected. [step 1.1",
        "L1",
        "L2",
        "L3",
        "step 1.1"
      ]
    },
    {
      "id": "step-2-2",
      "claim": "In the situation of step 1.2 put $S := A \\cap [p,q]$; it is nonempty because $p \\in A$ and $p \\le p \\le q$, and it is bounded above by $q$, so $c := \\sup S$ exists by [L4], and $p \\le c \\le q$ since $p \\in S$ and $q$ is an upper bound.",
      "step": "2.2",
      "inputs": [
        "step 1.2",
        "L3",
        "L4"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "$c \\in A$: from $S \\subseteq A$ and [L2] we get $\\overline{S} \\subseteq \\overline{A}$, and $c \\in \\overline{S}$ by step 1.3, so $c \\in \\overline{A}$ and hence $c \\notin B$ because $\\overline{A} \\cap B = \\varnothing$; on the other hand $p \\le c \\le q$ with $p, q \\in E$ and $E$ order-convex gives $c \\in E = A \\cup B$, so $c \\in A$.",
      "step": "3.1",
      "inputs": [
        "step 1.2",
        "step 1.3",
        "step 2.2",
        "L1",
        "L2"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "$c < q$, since $c \\in A$ and $q \\in B$ are distinct by [L1] while $c \\le q$; and every $v$ with $c < v \\le q$ lies in $B$: such a $v$ satisfies $p \\le c < v \\le q$, so $v \\in E$ by order-convexity, and $v \\notin A$, for otherwise $v \\in A \\cap [p,q] = S$ would force $v \\le c$.",
      "step": "4.1",
      "inputs": [
        "step 1.2",
        "step 2.2",
        "step 3.1",
        "L1",
        "L3"
      ]
    },
    {
      "id": "step-5-1",
      "claim": "$c \\in \\overline{B}$, which is impossible: given a real $\\varepsilon > 0$, put $t := \\min\\{\\varepsilon \\cdot 2^{-1},\\ (q - c) \\cdot 2^{-1}\\}$, a positive real by [L7] and [L8] since $q - c > 0$, and $v := c + t$; then $c < v$ and $v \\le c + (q-c) \\cdot 2^{-1} < q$, so $v \\in B$ by step 4.1, while $|v - c| = t \\le \\varepsilon \\cdot 2^{-1} < \\varepsilon$, so $v \\in N_\\varepsilon(c) \\cap B$. Hence every neighbourhood of $c$ meets $B$ and $c \\in \\overline{B}$ by [L2]; but $c \\in A$ by step 3.1 and $A \\cap \\overline{B} = \\varnothing$ by [L1]. So the assumed disconnection cannot exist and an order-convex $E$ is connected.",
      "step": "5.1",
      "inputs": [
        "step 3.1",
        "step 4.1",
        "L1",
        "L2",
        "L6",
        "L7",
        "L8"
      ]
    },
    {
      "id": "step-6-1",
      "claim": "Step 2.1 shows that a set which is not order-convex is disconnected, hence a connected set is order-convex; step 5.1 shows that an order-convex set admits no disconnection, hence is connected. The two together are the asserted equivalence.",
      "step": "6.1",
      "inputs": [
        "step 2.1",
        "step 5.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "The statement and step 1.1 explicitly treat the empty-set or empty-family case."
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "The thm-connected-subsets-of-r-are-intervals statement has no zero-valued boundary."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "The statement and step 1.1 explicitly treat the unit or first-index boundary."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "The statement and step 1.1 explicitly treat the equality, singleton, constant, or nonempty degeneracy."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "The statement and step 1.1 explicitly treat the interval or extended-real endpoint case."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Step 1.2 makes the relevant selection only after its existence or source-set nonemptiness is established."
    },
    {
      "case": "iff-forward",
      "status": "checked",
      "evidence": "The forward direction is discharged in step 6.1 (with the final synthesis in step 6.1)."
    },
    {
      "case": "iff-reverse",
      "status": "checked",
      "evidence": "The reverse direction is discharged in step 5.1 (with the final synthesis in step 6.1)."
    }
  ],
  "finite_smoke": [],
  "risk_review": {
    "status": "pending",
    "reviewer": null,
    "notes": "Reserved for the independent Alpha proof-refuter when risk routing is run after A3."
  }
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "thm-connected-subsets-of-r-are-intervals",
    "sourcePage": "topology-of-r",
    "batch": "wave6-real-analysis-limits",
    "target": "def-connected-r",
    "declared_target": "def-connected-r",
    "target_statement_provenance": null,
    "targetPage": "topology-of-r",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-connected-subsets-of-r-are-intervals",
    "sourcePage": "topology-of-r",
    "batch": "wave6-real-analysis-limits",
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
    "source": "thm-connected-subsets-of-r-are-intervals",
    "sourcePage": "topology-of-r",
    "batch": "wave6-real-analysis-limits",
    "target": "def-complete-ordered-field",
    "declared_target": "def-complete-ordered-field",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-connected-subsets-of-r-are-intervals",
    "sourcePage": "topology-of-r",
    "batch": "wave6-real-analysis-limits",
    "target": "lem-sup-epsilon",
    "declared_target": "lem-sup-epsilon",
    "target_statement_provenance": "ai-altered",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-connected-subsets-of-r-are-intervals",
    "sourcePage": "topology-of-r",
    "batch": "wave6-real-analysis-limits",
    "target": "lem-sup-unique",
    "declared_target": "lem-sup-unique",
    "target_statement_provenance": "literature-derived",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-connected-subsets-of-r-are-intervals",
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
    "source": "thm-connected-subsets-of-r-are-intervals",
    "sourcePage": "topology-of-r",
    "batch": "wave6-real-analysis-limits",
    "target": "def-bounded-set",
    "declared_target": "def-bounded-set",
    "target_statement_provenance": "literature-derived",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-connected-subsets-of-r-are-intervals",
    "sourcePage": "topology-of-r",
    "batch": "wave6-real-analysis-limits",
    "target": "thm-closure-characterisations-r",
    "declared_target": "thm-closure-characterisations-r",
    "target_statement_provenance": null,
    "targetPage": "topology-of-r",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-connected-subsets-of-r-are-intervals",
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
  },
  {
    "source": "thm-connected-subsets-of-r-are-intervals",
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
    "source": "thm-connected-subsets-of-r-are-intervals",
    "sourcePage": "topology-of-r",
    "batch": "wave6-real-analysis-limits",
    "target": "lem-finite-set-has-max",
    "declared_target": "lem-finite-set-has-max",
    "target_statement_provenance": "ai-altered",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-connected-subsets-of-r-are-intervals",
    "sourcePage": "topology-of-r",
    "batch": "wave6-real-analysis-limits",
    "target": "def-max-min",
    "declared_target": "def-max-min",
    "target_statement_provenance": "ai-altered",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-connected-subsets-of-r-are-intervals",
    "sourcePage": "topology-of-r",
    "batch": "wave6-real-analysis-limits",
    "target": "def-ordered-field",
    "declared_target": "def-ordered-field",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-connected-subsets-of-r-are-intervals",
    "sourcePage": "topology-of-r",
    "batch": "wave6-real-analysis-limits",
    "target": "lem-of-add-order",
    "declared_target": "lem-of-add-order",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-connected-subsets-of-r-are-intervals",
    "sourcePage": "topology-of-r",
    "batch": "wave6-real-analysis-limits",
    "target": "cor-of-one-positive",
    "declared_target": "cor-of-one-positive",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-connected-subsets-of-r-are-intervals",
    "sourcePage": "topology-of-r",
    "batch": "wave6-real-analysis-limits",
    "target": "lem-of-sign-rules",
    "declared_target": "lem-of-sign-rules",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-connected-subsets-of-r-are-intervals",
    "sourcePage": "topology-of-r",
    "batch": "wave6-real-analysis-limits",
    "target": "cex-rationals-in-an-interval-are-disconnected",
    "declared_target": "cex-rationals-in-an-interval-are-disconnected",
    "target_statement_provenance": null,
    "targetPage": "topology-of-r-examples",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "forward_ref",
    "kind": "forward",
    "requires_semantic_audit": true
  }
]
```

## Full text of every cited or declared item (18)

### `cex-rationals-in-an-interval-are-disconnected`

````markdown
---
id: cex-rationals-in-an-interval-are-disconnected
kind: counterexample
title: "$\\mathbb{Q} \\cap [0,2]$ is bounded and disconnected, so being an interval of $\\mathbb{Q}$ is not enough"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-connected-subsets-of-r-are-intervals, def-connected-r, fs-sqrt2-rational, thm-of-square-roots, def-rationals, lem-rat-embeds-dense, def-interval, def-interior-closure-boundary-r, def-open-and-closed-in-r, thm-closure-characterisations-r, lem-of-square-monotone, def-bounded-set, def-ordered-field, def-complete-ordered-field, cor-of-one-positive]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
cx_machine_verified: false
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
    - title: "Connected space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Connected_space"
    - title: "Square root of 2 (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Square_root_of_2"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Example 2.44)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** the set $E := \mathbb{Q}_{\mathbb{R}} \cap [0,2]$ of rationals
between $0$ and $2$ is connected ([[def-connected-r]]), where
$\mathbb{Q}_{\mathbb{R}}$ is the copy of $\mathbb{Q}$ inside $\mathbb{R}$
([[lem-rat-embeds-dense]]).

$E$ is bounded, and it contains **every rational** lying between its two
endpoints, so it is order-convex as a subset of the ordered field $\mathbb{Q}$:
it is an interval of that field. As a subset of $\mathbb{R}$ it is nevertheless
disconnected, split at the irrational point $\sqrt 2$. So the equivalence of
[[thm-connected-subsets-of-r-are-intervals]] genuinely uses the completeness of
$\mathbb{R}$, and "is an interval of the order it carries from $\mathbb{Q}$" is
not enough to make a set connected.

## Facts & Assumptions

**Given:** The copy $\mathbb{Q}_{\mathbb{R}}$ of $\mathbb{Q}$ in $\mathbb{R}$, the set $E := \mathbb{Q}_{\mathbb{R}} \cap [0,2]$, and the real $r$ with $r \ge 0$ and $r^2 = 2$.

[A1] The refuted claim: $E$ is connected.

[L1] Separated sets, disconnection and connectedness ([[def-connected-r]]).

[L2] $\overline{A}$ is the smallest closed superset of $A$, so $\overline{A} \subseteq F$ for every closed $F \supseteq A$ ([[thm-closure-characterisations-r]], [[def-interior-closure-boundary-r]]).

[L3] Each of $(-\infty, c]$ and $[c,\infty)$ is a closed set and each of $(-\infty,c)$ and $(c,\infty)$ is an open set ([[def-open-and-closed-in-r]], [[def-interval]]).

[L4] In a complete ordered field every $a \ge 0$ has a unique $s \ge 0$ with $s^2 = a$ ([[thm-of-square-roots]]).

[L5] No rational squares to $2$ ([[fs-sqrt2-rational]]); the map $q \mapsto \hat q$ is an injective embedding of ordered fields, so it preserves sums, products and the order ([[lem-rat-embeds-dense]], [[def-rationals]]).

[L6] Squaring is strictly monotone on the nonnegatives: $0 \le a < b$ gives $a^2 < b^2$ ([[lem-of-square-monotone]]); $0 < 1$ and the order is total and transitive ([[cor-of-one-positive]], [[def-ordered-field]], [[def-complete-ordered-field]]).

[L7] A set is bounded when it has an upper and a lower bound ([[def-bounded-set]]).

## Counterexample

**Proof technique:** direct.

1.1 By [L4] there is a unique real $r \ge 0$ with $r^2 = 2$, and $0 < r < 2$: indeed $r \ne 0$ since $0^2 = 0 \ne 2$, while $r \ge 2$ would give $r^2 \ge 4 > 2$ by [L6]. [L4, L6]

1.2 $r \notin \mathbb{Q}_{\mathbb{R}}$: if $r = \hat q$ for a rational $q$, then $\widehat{q^2} = \hat q \cdot \hat q = r^2 = 2 = \hat 2$ by [L5], and injectivity of the embedding gives $q^2 = 2$ in $\mathbb{Q}$, contradicting [L5]. [L5]

1.3 $E$ is bounded, since $0 \le y \le 2$ for every $y \in E$ by the definition of $E$. [given, L7]

2.1 Put $A := E \cap (-\infty, r)$ and $B := E \cap (r, \infty)$. Then $A \cup B = E$, because every $y \in E$ satisfies $y \ne r$ by step 1.2 and hence $y < r$ or $y > r$; and both are nonempty, since $0 \in A$ and $2 \in B$ by step 1.1, both being rationals in $[0,2]$. [step 1.1, step 1.2, L3, L5, L6]

3.1 $A$ and $B$ are separated: $(-\infty, r]$ is closed and contains $A$, so $\overline{A} \subseteq (-\infty,r]$ by [L2] and hence $\overline{A} \cap B \subseteq (-\infty,r] \cap (r,\infty) = \varnothing$; symmetrically $\overline{B} \subseteq [r,\infty)$ and $A \cap \overline{B} = \varnothing$. Hence $(A,B)$ is a disconnection of $E$ and $E$ is disconnected, so the claim [A1] is refuted. [step 2.1, A1, L1, L2, L3] ∎

## Remarks

- **What the witness shows about
  [[thm-connected-subsets-of-r-are-intervals]].** That theorem says a subset of
  $\mathbb{R}$ is connected exactly when it is order-convex **in $\mathbb{R}$**.
  $E$ is not order-convex in $\mathbb{R}$: the point $r$ lies between $0$ and
  $2$ and is not in $E$. So no contradiction arises, and the example locates
  precisely what "interval" has to mean in the theorem: order-convex with
  respect to the complete order, not with respect to the order of a dense
  subfield.

- **Where completeness is spent in the theorem, and why it is absent here.** The
  proof of [[thm-connected-subsets-of-r-are-intervals]] produces a supremum, and
  that supremum is the point at which the two pieces of a would-be disconnection
  must meet. For $E$ the corresponding supremum is $r$, which exists in
  $\mathbb{R}$ and not in $\mathbb{Q}$; inside $\mathbb{Q}$ there is no point at
  which to detect the split, which is exactly why $E$ looks like an interval
  there.

- **The same phenomenon in a different guise** is
  [[cex-closed-bounded-in-q-not-compact]]: a set that behaves well inside
  $\mathbb{Q}$ because the real number that would spoil it is missing from
  $\mathbb{Q}$. In both cases the missing number is $\sqrt 2$.
````

### `cor-of-one-positive`

````markdown
---
id: cor-of-one-positive
kind: corollary
title: "The multiplicative identity is positive"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-of-square-positive, def-field]
aliases: []
landmark: false
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
    - title: "Elias Zakon, Mathematical Analysis: Axioms and Basic Definitions"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/02%3A_Real_Numbers_and_Fields/2.01%3A_Axioms_and_Basic_Definitions"
pipeline_run: null
proof_strategy: direct
---

## Statement

In any ordered field $F$ with positive cone $P$, the multiplicative identity
satisfies $0 < 1$; that is, $1 \in P$.

## Facts & Assumptions

**Given:** An ordered field $F$ with positive cone $P$ and multiplicative identity $1$ ([[def-field]]).

[L1] In any field $1 \neq 0$ ([[def-field]]).

[L2] For every $x \neq 0$ the square satisfies $x^2 > 0$ ([[lem-of-square-positive]]).

[L3] The identity axiom gives $1 = 1 \cdot 1 = 1^2$ ([[def-field]]).

## Proof

**Proof technique:** direct.

1.1 By the field axioms $1 \neq 0$, and $1 = 1 \cdot 1 = 1^2$. [L1, L3]

2.1 Since $1 \neq 0$, applying the square lemma with $x = 1$ gives $1^2 > 0$. [step 1.1, L2]

3.1 Because $1 = 1^2$, it follows that $1 > 0$, i.e. $0 < 1$. [step 2.1, step 1.1, L3] ∎
````

### `def-bounded-set`

````markdown
---
id: def-bounded-set
kind: definition
title: "Lower bound, bounded below, bounded set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-complete-ordered-field]
justified_by: []
aliases: []
landmark: false
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
    - title: "Upper and lower bounds (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Upper_and_lower_bounds"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ denotes the complete ordered field
([[def-complete-ordered-field]]) and $S \subseteq \mathbb{R}$ is a subset of it.

The notions **upper bound** and **bounded above** are already fixed by
[[def-complete-ordered-field]] and are only recalled here, never redefined:
$u \in \mathbb{R}$ is an *upper bound* of $S$ if $s \le u$ for all $s \in S$, and
$S$ is *bounded above* if it has at least one upper bound. The dual notions are:

- $\ell \in \mathbb{R}$ is a **lower bound** of $S$ if $\ell \le s$ for all $s \in S$.
- $S$ is **bounded below** if it has at least one lower bound.
- $S$ is **bounded** if it is both bounded above and bounded below, that is, if
  there are $\ell, u \in \mathbb{R}$ with $\ell \le s \le u$ for every $s \in S$.

## Remarks

- A bound is an element of $\mathbb{R}$ and is not required to lie in $S$. A
  bound that does lie in $S$ is a maximum or a minimum ([[def-max-min]]), and
  that is a strictly stronger condition ([[fs-sup-belongs-to-set]]).
- Bounds come in half-lines: if $\ell$ is a lower bound of $S$ then so is every
  $\ell'' \le \ell$, and if $u$ is an upper bound then so is every $u'' \ge u$.
  Consequently a set that has one bound of a given kind has infinitely many, and
  the interesting question is whether the collection of them has a best element,
  which is what a supremum ([[def-complete-ordered-field]]) or an infimum
  ([[def-infimum]]) is.
- Bounded above and bounded below are independent conditions. The set
  $A = \{\, n \cdot 1_{\mathbb{R}} : n \ge 1 \,\}$ of canonical naturals of
  $\mathbb{R}$ is bounded below by $0$ ([[lem-of-naturals-positive]]) and is not
  bounded above ([[thm-of-archimedean]]); its reflection $-A$ is bounded above
  and not bounded below ([[lem-reflection]]).
- The empty set is bounded, and vacuously so: every real number is both an upper
  bound and a lower bound of $\emptyset$, since the defining condition quantifies
  over no elements. Having bounds is therefore much weaker than having a least
  upper bound or a greatest lower bound ([[fs-every-set-has-sup]]).
````

### `def-complete-ordered-field`

````markdown
---
id: def-complete-ordered-field
kind: definition
title: "Complete ordered field (least-upper-bound property)"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-ordered-field]
aliases: [def-dedekind-complete-field]
landmark: true
short: "complete ordered field"
verification:
  precheck: n/a
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 8"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
    - title: "University of Wisconsin Math 521 notes: Real analysis"
      url: "https://people.math.wisc.edu/~jwrobbin/521dir/521.pdf"
pipeline_run: null
---

## Definition

Let $F$ be an ordered field ([[def-ordered-field]]) and $S \subseteq F$.

- $u \in F$ is an **upper bound** of $S$ if $s \le u$ for all $s \in S$; $S$ is
  **bounded above** if it has an upper bound.
- $u \in F$ is a **least upper bound** (or **supremum**, $\sup S$) of $S$ if $u$
  is an upper bound of $S$ and $u \le u'$ for every upper bound $u'$ of $S$.

$F$ is a **complete ordered field** (equivalently, $F$ has the
**least-upper-bound property**, or is **Dedekind complete**) if every nonempty
$S \subseteq F$ that is bounded above has a least upper bound in $F$.

## Remarks

- A least upper bound, if it exists, is unique (two least upper bounds are each
  $\le$ the other, so equal by antisymmetry of the order).
- Applying the property to $\{-s : s \in S\}$ yields the dual **greatest lower
  bound** (infimum) property, so the two are equivalent.
- The Dedekind-cut reals have this property by construction
  ([[thm-dedekind-complete]]); the Cauchy-sequence reals acquire it via
  [[cor-cauchy-reals-lub-complete]]. This definition is the target for the
  uniqueness theorem [[thm-uniqueness-complete-ordered-field]].
````

### `def-connected-r`

````markdown
---
id: def-connected-r
kind: definition
title: "Separated sets, disconnection, and connected subset of $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-open-and-closed-in-r, def-interior-closure-boundary-r, thm-closure-characterisations-r, def-interval, def-neighbourhood-r]
justified_by: []
forward_refs: [cex-rationals-in-an-interval-are-disconnected]
aliases: [def-separated-sets-r, def-disconnection-r]
landmark: false
short: "separated, connected"
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
    - title: "Connected space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Connected_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Def. 2.45)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §7.5"
      url: "https://www.jirka.org/ra/"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Let $A, B, E \subseteq \mathbb{R}$, with closure as in
[[def-interior-closure-boundary-r]].

- $A$ and $B$ are **separated** when
  $$\overline{A} \cap B = \varnothing \quad \text{and} \quad A \cap \overline{B} = \varnothing .$$
- A **disconnection** of $E$ is a pair $(A,B)$ of nonempty separated sets with
  $E = A \cup B$.
- $E$ is **disconnected** when it admits a disconnection, and **connected** when
  it does not.

**Separated is strictly stronger than disjoint.** Since $A \subseteq
\overline{A}$ ([[def-interior-closure-boundary-r]]), the first displayed
condition already gives $A \cap B \subseteq \overline{A} \cap B = \varnothing$,
so separated sets are disjoint. The converse fails: $(0,1)$ and $[1,2)$ are
disjoint, yet every neighbourhood of $1$ meets $(0,1)$, so $1$ is an adherent
point of $(0,1)$ and lies in $\overline{(0,1)}$
([[thm-closure-characterisations-r]]), while $1 \in [1,2)$; hence
$\overline{(0,1)} \cap [1,2) \ne \varnothing$ and the pair is not separated.
What separation adds to disjointness is exactly this: **neither set of a
separated pair may contain a point adherent to the other**, which is what makes
a disconnection a genuine splitting rather than a bookkeeping partition.

**Separation does not ask the two closures to be disjoint.** Each condition
tests one closure against the *other set*, never closure against closure. The
pair $(0,1)$, $(1,2)$ illustrates the difference and is separated: $[0,1]$ is a
closed set containing $(0,1)$, so $\overline{(0,1)} \subseteq [0,1]$
([[def-open-and-closed-in-r]], [[def-interior-closure-boundary-r]]) and
$\overline{(0,1)} \cap (1,2) = \varnothing$; symmetrically
$\overline{(1,2)} \subseteq [1,2]$ and $(0,1) \cap \overline{(1,2)} =
\varnothing$. The two closures nevertheless share the point $1$, so a definition
demanding $\overline{A} \cap \overline{B} = \varnothing$ would be a different and
strictly stronger condition, and it is not the one used here.

## Remarks

- **Why separation and not "both pieces open".** For a subset $E$ of
  $\mathbb{R}$ the pieces of a splitting are rarely open as subsets of
  $\mathbb{R}$: in the disconnection of $\mathbb{Q} \cap [0,2]$ used by
  [[cex-rationals-in-an-interval-are-disconnected]] neither piece is open in
  $\mathbb{R}$. Rudin's separated-sets formulation avoids introducing a second
  topology relative to $E$, and it is the only formulation this page uses.
  Nothing below refers to sets open "in $E$".

- **Every one-point set and the empty set are connected.** A disconnection
  requires two nonempty pieces with union $E$, and if $E$ has at most one point
  no two nonempty disjoint sets have union $E$.

- **Connectedness of a subset of $\mathbb{R}$ turns out to be an order
  property**: $E$ is connected exactly when it is order-convex
  ([[thm-connected-subsets-of-r-are-intervals]]). That is a theorem about
  $\mathbb{R}$ and uses its completeness; the definition above mentions no order
  at all.
````

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

### `def-max-min`

````markdown
---
id: def-max-min
kind: definition
title: "Maximum and minimum of a set"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: []
landmark: false
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
    - title: "Maximum and minimum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Maximum_and_minimum"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "David H. Ernst, An Introduction to Proof via Inquiry-Based Learning, Section 5.1"
      url: "https://math.libretexts.org/Bookshelves/Mathematical_Logic_and_Proof/An_Introduction_to_Proof_via_Inquiry-Based_Learning_%28Ernst%29/05%253A_New_Page/5.01%253A_New_Page"
pipeline_run: null
---

## Definition

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

## Remarks

- A maximum is precisely an upper bound of $S$ ([[def-complete-ordered-field]])
  that happens to lie in $S$; a minimum is a lower bound of $S$
  ([[def-bounded-set]]) that lies in $S$. In particular a set with a maximum is
  bounded above and a set with a minimum is bounded below.
- The empty set has neither a maximum nor a minimum, because the requirement
  $m \in S$ cannot be met.
- The membership requirement $m \in S$ is exactly what separates a maximum from a
  supremum, and it is the theme of this page. A supremum is a bound on the set
  and is not asked to belong to it; a maximum is an element of the set. The two
  agree exactly when the supremum happens to be attained ([[lem-max-is-sup]]),
  and they genuinely differ in general ([[fs-sup-belongs-to-set]]).
- Every nonempty finite subset of $\mathbb{R}$ has both a maximum and a minimum
  ([[lem-finite-set-has-max]]), which is what licenses the notation
  $\max\{a_1, \dots, a_n\}$. Infinite sets need not: the failure of attainment is
  an infinitary phenomenon.
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

### `def-ordered-field`

````markdown
---
id: def-ordered-field
kind: definition
title: "Ordered field"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-field]
aliases: []
landmark: true
short: "ordered field"
verification:
  precheck: n/a
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
    - title: "University of Illinois Chicago notes: Ordered field axioms"
      url: "https://homepages.math.uic.edu/~jbaldwin/math215/fieldax.pdf"
pipeline_run: null
---

## Definition

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

## Remarks

- By trichotomy applied to $b - a$, for any $a, b$ exactly one of $a < b$,
  $a = b$, $a > b$ holds; this makes $\le$ a total order.
- (O2) says the positives are closed under addition and multiplication: sums and
  products of positives are positive.
- The rationals ([[thm-rat-ordered-field]]) and both constructions of the reals
  ([[thm-reals-ordered-field]], [[thm-reals-dedekind-ordered-field]]) are ordered
  fields, so every fact proved here from (O1)-(O2) holds in each of them.
````

### `lem-finite-set-has-max`

````markdown
---
id: lem-finite-set-has-max
kind: lemma
title: "Every nonempty finite set of reals has a maximum and a minimum"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-max-min, thm-induction-principle, def-nat-addition, def-complete-ordered-field, def-ordered-field]
justified_by: [lem-finite-subsets-listable]
forward_refs: [def-countable]
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Maximum and minimum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Maximum_and_minimum"
    - title: "Mathematical induction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mathematical_induction"
    - title: "Finite set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Finite_set"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

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

## Facts & Assumptions

**Given:** Real numbers $a_0, a_1, a_2, \dots$; for $n \in \mathbb{N}$ write $F_n := \{a_0, \dots, a_n\}$, so that $F_{n+1} = F_n \cup \{a_{n+1}\}$. A subset of $\mathbb{R}$ is nonempty and finite exactly when it equals $F_n$ for some $n \in \mathbb{N}$ and some choice of $a_0, \dots, a_n$.

[A1] $P(n)$ denotes the statement: for all $a_0, \dots, a_n \in \mathbb{R}$, the set $F_n$ has a maximum and a minimum.

[L1] Maximum and minimum: $m = \max X$ means $m \in X$ and $x \le m$ for all $x \in X$; $m = \min X$ means $m \in X$ and $m \le x$ for all $x \in X$; each is unique when it exists ([[def-max-min]]).

[L2] Induction principle: if $P(0)$ holds and $P(n)$ implies $P(n+1)$ for every $n \in \mathbb{N}$, then $P(n)$ holds for every $n \in \mathbb{N}$, where $n + 1$ denotes the successor $\sigma(n)$ ([[thm-induction-principle]], [[def-nat-addition]]).

[L3] The order on $\mathbb{R}$ is reflexive, total and transitive: $a \le a$; for all $a, b$ exactly one of $a < b$, $a = b$, $b < a$ holds, so at least one of $a \le b$ and $b \le a$ holds; and $a \le b$ with $b \le c$ gives $a \le c$ ([[def-complete-ordered-field]], [[def-ordered-field]]).

## Proof

**Proof technique:** induction.

1.1 Base case: $F_0 = \{a_0\}$, and $a_0 \in F_0$ with $a_0 \le a_0$ by reflexivity, so $a_0$ is both a maximum and a minimum of $F_0$; hence $P(0)$ holds. [base, A1, L1, L3]

1.2 Inductive hypothesis: fix $n \in \mathbb{N}$ and assume $P(n)$, that is, for all reals $a_0, \dots, a_n$ the set $F_n$ has a maximum and a minimum. [ih, A1]

2.1 Let $a_0, \dots, a_{n+1} \in \mathbb{R}$ be arbitrary; by the inductive hypothesis the set $F_n$ has a maximum $M$ and a minimum $m$, and $F_{n+1} = F_n \cup \{a_{n+1}\}$. [step 1.2, L1]

3.1 By totality at least one of $a_{n+1} \le M$ and $M \le a_{n+1}$ holds. If $a_{n+1} \le M$, then $M \in F_n \subseteq F_{n+1}$, every element of $F_n$ is $\le M$ because $M = \max F_n$, and $a_{n+1} \le M$ as well, so $M$ is a maximum of $F_{n+1}$. If $M \le a_{n+1}$, then $a_{n+1} \in F_{n+1}$, every $x \in F_n$ satisfies $x \le M \le a_{n+1}$ hence $x \le a_{n+1}$ by transitivity, and $a_{n+1} \le a_{n+1}$, so $a_{n+1}$ is a maximum of $F_{n+1}$. Either way $F_{n+1}$ has a maximum. [step 2.1, L1, L3]

3.2 Dually, at least one of $m \le a_{n+1}$ and $a_{n+1} \le m$ holds. If $m \le a_{n+1}$, then $m \in F_{n+1}$ and every element of $F_{n+1}$ is $\ge m$, so $m$ is a minimum of $F_{n+1}$. If $a_{n+1} \le m$, then $a_{n+1} \in F_{n+1}$ and every $x \in F_n$ satisfies $a_{n+1} \le m \le x$ hence $a_{n+1} \le x$ by transitivity, so $a_{n+1}$ is a minimum of $F_{n+1}$. Either way $F_{n+1}$ has a minimum. [step 2.1, L1, L3]

4.1 Since $a_0, \dots, a_{n+1}$ were arbitrary, $F_{n+1}$ has a maximum and a minimum for every such list, that is, $P(n)$ implies $P(n+1)$. [step 3.1, step 3.2, A1]

5.1 The base case and the inductive step give $P(n)$ for every $n \in \mathbb{N}$ by the induction principle; since a nonempty finite subset of $\mathbb{R}$ is exactly a set of the form $F_n$, every nonempty finite subset of $\mathbb{R}$ has both a maximum and a minimum. [step 1.1, step 4.1, given, L2, discharge-induction] ∎

## Remarks

- **Where the stipulation is discharged.** Finiteness itself is defined later, in [[def-countable]], as equinumerosity with a von Neumann natural; with that definition in hand [[lem-finite-subsets-listable]] proves that a subset of $\mathbb{R}$ is nonempty and finite exactly when it is listable as $\{a_0, \dots, a_n\}$, which is the Given below. So nothing on this page rests on an assumption that is never paid for; it is paid for later, and the payment is recorded in `justified_by`.
- **Only the total order is used, never completeness.** The base case needs reflexivity, the inductive step needs totality and transitivity, and the induction itself runs over $\mathbb{N}$. The same induction works in any totally ordered field; what is recorded here is its specialisation to $\mathbb{R}$.
- Nonemptiness is essential: $\emptyset$ is finite and has no maximum ([[def-max-min]]). Finiteness is essential too: $\{x \in \mathbb{R} : 0 < x < 1\}$ is bounded and has no maximum ([[fs-sup-belongs-to-set]]).
- Combined with claim 1 of [[lem-max-is-sup]], this says every nonempty finite subset of $\mathbb{R}$ has a supremum, and that the supremum is attained, because it equals the maximum. The infimum half is *not* part of [[lem-max-is-sup]], which speaks only of maxima and suprema; it follows from the minimum proved here together with the reflection identity $\inf X = -\sup(-X)$ ([[lem-reflection]], [[thm-infimum-property]]).
````

### `lem-of-add-order`

````markdown
---
id: lem-of-add-order
kind: lemma
title: "Order is preserved by adding a constant and by adding inequalities"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-ordered-field]
aliases: []
landmark: false
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
    - title: "University of Illinois Chicago notes: Ordered field axioms"
      url: "https://homepages.math.uic.edu/~jbaldwin/math215/fieldax.pdf"
pipeline_run: null
proof_strategy: direct
---

## Statement

Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and
let $a, b, c, d \in F$.

1. **Translation invariance.** If $a < b$ then $a + c < b + c$.
2. **Adding inequalities.** If $a < b$ and $c < d$ then $a + c < b + d$.

## Facts & Assumptions

**Given:** An ordered field $F$ with positive cone $P$, and elements $a, b, c, d \in F$.

[L1] For $x, y \in F$, the relation $x < y$ means $y - x \in P$ ([[def-ordered-field]]).

[L2] $P$ is closed under addition: if $u, v \in P$ then $u + v \in P$ (axiom O2 of [[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Assume $a < b$; by the definition of the order this means $b - a \in P$. [assume-hyp, L1]

1.2 For every $c \in F$ the field identities give $(b + c) - (a + c) = b - a$. [algebra]

1.3 Assume moreover $c < d$; by the definition of the order this means $d - c \in P$. [assume-hyp, L1]

1.4 The field identities give $(b + d) - (a + c) = (b - a) + (d - c)$. [algebra]

2.1 Hence $(b + c) - (a + c) = b - a \in P$, which is exactly $a + c < b + c$, proving claim 1. [step 1.1, step 1.2, L1]

2.2 Since $b - a \in P$ and $d - c \in P$, closure under addition gives $(b - a) + (d - c) \in P$. [step 1.1, step 1.3, L2]

3.1 Therefore $(b + d) - (a + c) = (b - a) + (d - c) \in P$, which is exactly $a + c < b + d$, proving claim 2. [step 1.4, step 2.2, L1] ∎
````

### `lem-of-sign-rules`

````markdown
---
id: lem-of-sign-rules
kind: lemma
title: "Sign rules for products and monotonicity of multiplication"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-ordered-field, lem-of-mult-neg, lem-of-zero-mult]
aliases: []
landmark: false
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
    - title: "University of Illinois Chicago notes: Ordered field axioms"
      url: "https://homepages.math.uic.edu/~jbaldwin/math215/fieldax.pdf"
pipeline_run: null
proof_strategy: direct
---

## Statement

Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and
let $a, b, c \in F$.

1. If $a > 0$ and $b > 0$ then $ab > 0$.
2. If $a > 0$ and $b < 0$ then $ab < 0$.
3. If $a < 0$ and $b < 0$ then $ab > 0$.
4. If $c > 0$ then $a < b \iff ac < bc$.
5. If $c < 0$ then $a < b \iff bc < ac$ (multiplication by a negative reverses order).

## Facts & Assumptions

**Given:** An ordered field $F$ with positive cone $P$, and elements $a, b, c \in F$.

[L1] For $x, y \in F$: $x < y \iff y - x \in P$; $x > 0 \iff x \in P$; $x < 0 \iff -x \in P$; and (trichotomy) for each $x$ exactly one of $x \in P$, $x = 0$, $-x \in P$ holds, so $0 \notin P$ and $x \in P \Rightarrow x \neq 0$ ([[def-ordered-field]]).

[L2] $P$ is closed under multiplication: if $u, v \in P$ then $uv \in P$ (axiom O2 of [[def-ordered-field]]).

[L3] In any field, $(-u)v = -(uv)$ and $(-u)(-v) = uv$ ([[lem-of-mult-neg]]).

[L4] In any field, $0 \cdot u = 0$ ([[lem-of-zero-mult]]).

## Proof

**Proof technique:** direct.

1.1 Assume $a > 0$ and $b > 0$, i.e. $a \in P$ and $b \in P$; closure gives $ab \in P$, so $ab > 0$, proving claim 1. [assume-hyp, L1, L2]

1.2 Assume $a > 0$ and $b < 0$, i.e. $a \in P$ and $-b \in P$; closure gives $a(-b) \in P$. [assume-hyp, L1, L2]

1.3 Assume $a < 0$ and $b < 0$, i.e. $-a \in P$ and $-b \in P$; closure gives $(-a)(-b) \in P$. [assume-hyp, L1, L2]

1.4 Assume $c > 0$ and $a < b$, i.e. $c \in P$ and $b - a \in P$; closure gives $(b - a)c \in P$. [assume-hyp, L1, L2]

1.5 Assume $c < 0$ and $a < b$, i.e. $-c \in P$ and $b - a \in P$; closure gives $(b - a)(-c) \in P$. [assume-hyp, L1, L2]

2.1 Since $a(-b) = -(ab)$ by L3, step 1.2 gives $-(ab) \in P$, so $ab < 0$, proving claim 2. [step 1.2, L3, L1]

2.2 Since $(-a)(-b) = ab$ by L3, step 1.3 gives $ab \in P$, so $ab > 0$, proving claim 3. [step 1.3, L3, L1]

2.3 By distributivity $(b - a)c = bc - ac$, so step 1.4 gives $bc - ac \in P$, i.e. $ac < bc$: this is the forward direction of claim 4. [step 1.4, algebra, L1]

2.4 By L3 and distributivity $(b - a)(-c) = -((b - a)c) = -(bc - ac) = ac - bc$, so step 1.5 gives $ac - bc \in P$, i.e. $bc < ac$: this is the forward direction of claim 5. [step 1.5, L3, algebra, L1]

3.1 Conversely, assume $c > 0$ and $ac < bc$; by trichotomy exactly one of $a < b$, $a = b$, $b < a$ holds. If $a = b$ then $ac = bc$, contradicting $ac < bc$; if $b < a$ then the argument of step 2.3 applied to the pair $b < a$ gives $bc < ac$, so $bc - ac \in P$ (from $ac < bc$) while $ac - bc \in P$ (from $bc < ac$), putting the element $bc - ac$ and its negative $ac - bc$ both in $P$, which trichotomy forbids; hence $a < b$: this completes claim 4. [assume-hyp, step 2.3, L4, L1, algebra]

4.1 Conversely, assume $c < 0$ and $bc < ac$; by trichotomy exactly one of $a < b$, $a = b$, $b < a$ holds. If $a = b$ then $ac = bc$, contradicting $bc < ac$; if $b < a$ then the argument of step 2.4 applied to the pair $b < a$ gives $ac < bc$, so $ac - bc \in P$ (from $bc < ac$) while $bc - ac \in P$ (from $ac < bc$), putting the element $ac - bc$ and its negative $bc - ac$ both in $P$, which trichotomy forbids; hence $a < b$: this completes claim 5. [assume-hyp, step 2.4, L4, L1, algebra] ∎
````

### `lem-sup-epsilon`

````markdown
---
id: lem-sup-epsilon
kind: lemma
title: "Epsilon characterisation of the supremum"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-complete-ordered-field, lem-sup-unique, def-ordered-field]
justified_by: []
aliases: []
landmark: false
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
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Infimum and supremum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Infimum_and_supremum"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "David H. Ernst, An Introduction to Proof via Inquiry-Based Learning, Section 5.1"
      url: "https://math.libretexts.org/Bookshelves/Mathematical_Logic_and_Proof/An_Introduction_to_Proof_via_Inquiry-Based_Learning_%28Ernst%29/05%253A_New_Page/5.01%253A_New_Page"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $S \subseteq \mathbb{R}$ be nonempty and bounded above, and let $u$ be an
upper bound of $S$ ([[def-complete-ordered-field]]). Then

$$u = \sup S \quad \Longleftrightarrow \quad \text{for every } \varepsilon > 0 \text{ there exists } s \in S \text{ with } u - \varepsilon < s.$$

In words: among the upper bounds of $S$, the supremum is exactly the one that
cannot be lowered by any positive amount and still bound $S$.

## Facts & Assumptions

**Given:** A nonempty $S \subseteq \mathbb{R}$ that is bounded above, and an upper bound $u$ of $S$; since $S$ is nonempty and bounded above, $\sup S$ exists.

[L1] Supremum: $u = \sup S$ exactly when $u$ is an upper bound of $S$ and $u \le u'$ for every upper bound $u'$ of $S$; and every nonempty subset of $\mathbb{R}$ that is bounded above has such a least upper bound ([[def-complete-ordered-field]]).

[L2] The least upper bound is unique, so the equation $u = \sup S$ says precisely that $u$ is a least upper bound of $S$ ([[lem-sup-unique]]).

[L3] The order is total: for $a, b \in \mathbb{R}$ exactly one of $a < b$, $a = b$, $b < a$ holds, so the negation of $a \le b$ is $b < a$; and $a < b$ holds exactly when $b - a > 0$ ([[def-complete-ordered-field]], [[def-ordered-field]]). (Translation invariance follows in one line from that last equivalence, since $(b + c) - (a + c) = b - a$, but no step below uses it and it is not claimed here as a quoted result.)

## Proof

**Proof technique:** direct.

1.1 For the forward implication assume $u = \sup S$, that is, $u$ is an upper bound of $S$ that is $\le$ every upper bound of $S$, and let $\varepsilon > 0$ be arbitrary. [assume-hyp, L1, L2]

1.2 For the converse implication assume that $u$ is an upper bound of $S$ such that for every $\varepsilon > 0$ there exists $s \in S$ with $u - \varepsilon < s$, and let $u'$ be an arbitrary upper bound of $S$. [assume-hyp]

2.1 Since $u - (u - \varepsilon) = \varepsilon > 0$, we have $u - \varepsilon < u$. [step 1.1, L3, algebra]

2.2 By totality either $u \le u'$ or $u' < u$; in the second case put $\varepsilon_0 := u - u'$, so that $\varepsilon_0 > 0$ and $u - \varepsilon_0 = u'$. [step 1.2, L3, algebra]

3.1 The element $u - \varepsilon$ is not an upper bound of $S$: if it were, the leastness of $u$ among upper bounds would give $u \le u - \varepsilon$, which contradicts $u - \varepsilon < u$ by trichotomy. [step 2.1, step 1.1, L1, L3]

3.2 In that second case the hypothesis applied to $\varepsilon_0$ yields $s_0 \in S$ with $u' = u - \varepsilon_0 < s_0$, so $s_0 \le u'$ fails, contradicting that $u'$ is an upper bound of $S$; the second case is therefore impossible and $u \le u'$. [step 2.2, step 1.2, L3]

4.1 Failing to be an upper bound of $S$ means precisely that some $s \in S$ does not satisfy $s \le u - \varepsilon$, and by totality that says $u - \varepsilon < s$; since $\varepsilon > 0$ was arbitrary, the forward implication is proved. [step 3.1, L3]

4.2 Since $u'$ was an arbitrary upper bound of $S$, we get $u \le u'$ for every upper bound $u'$; as $u$ is itself an upper bound, $u$ is a least upper bound of $S$, hence $u = \sup S$ by uniqueness, which proves the converse implication. [step 3.2, step 1.2, L1, L2]

5.1 Both implications hold, so for an upper bound $u$ of a nonempty set $S$ bounded above, $u = \sup S$ if and only if for every $\varepsilon > 0$ there is $s \in S$ with $u - \varepsilon < s$. [step 4.1, step 4.2] ∎
````

### `lem-sup-unique`

````markdown
---
id: lem-sup-unique
kind: lemma
title: "Suprema and infima are unique"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-complete-ordered-field, def-infimum, def-ordered-field]
justified_by: []
aliases: []
landmark: false
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
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Infimum and supremum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Infimum_and_supremum"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $S \subseteq \mathbb{R}$. If $u_1$ and $u_2$ are both least upper bounds of
$S$ ([[def-complete-ordered-field]]), then $u_1 = u_2$. If $\ell_1$ and $\ell_2$
are both greatest lower bounds of $S$ ([[def-infimum]]), then
$\ell_1 = \ell_2$.

Consequently a set has at most one supremum and at most one infimum, and the
notations $\sup S$ and $\inf S$ denote single, well-determined real numbers
whenever they exist.

## Facts & Assumptions

**Given:** A subset $S \subseteq \mathbb{R}$ of the complete ordered field $\mathbb{R}$, together with elements $u_1, u_2, \ell_1, \ell_2 \in \mathbb{R}$.

[L1] $u$ is a least upper bound of $S$ exactly when $u$ is an upper bound of $S$ and $u \le u'$ for every upper bound $u'$ of $S$ ([[def-complete-ordered-field]]).

[L2] $\ell$ is a greatest lower bound of $S$ exactly when $\ell$ is a lower bound of $S$ and $\ell' \le \ell$ for every lower bound $\ell'$ of $S$ ([[def-infimum]]).

[L3] Antisymmetry of the order: for $a, b \in \mathbb{R}$, if $a \le b$ and $b \le a$ then $a = b$. This is trichotomy in the underlying ordered field, which says that exactly one of $a < b$, $a = b$, $b < a$ holds, so, reasoning by contradiction, $a \ne b$ would put both $a < b$ and $b < a$ in force, which trichotomy forbids ([[def-complete-ordered-field]], [[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Assume $u_1$ and $u_2$ are both least upper bounds of $S$; in particular each of them is an upper bound of $S$ and each is $\le$ every upper bound of $S$. [assume-hyp, L1]

1.2 Assume $\ell_1$ and $\ell_2$ are both greatest lower bounds of $S$; in particular each of them is a lower bound of $S$ and each is $\ge$ every lower bound of $S$. [assume-hyp, L2]

2.1 Applying the leastness of $u_1$ to the upper bound $u_2$ gives $u_1 \le u_2$, and applying the leastness of $u_2$ to the upper bound $u_1$ gives $u_2 \le u_1$. [step 1.1, L1]

2.2 Applying the greatestness of $\ell_1$ to the lower bound $\ell_2$ gives $\ell_2 \le \ell_1$, and applying the greatestness of $\ell_2$ to the lower bound $\ell_1$ gives $\ell_1 \le \ell_2$. [step 1.2, L2]

3.1 By antisymmetry $u_1 = u_2$ and $\ell_1 = \ell_2$, so a least upper bound and a greatest lower bound of $S$ are each unique when they exist, which is what licenses writing $\sup S$ and $\inf S$. [step 2.1, step 2.2, L3] ∎
````

### `rem-r-native-topology-scope`

````markdown
---
id: rem-r-native-topology-scope
kind: remark
title: "Which results on this page use the order of $\\mathbb{R}$ and therefore have no general-topological analogue"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: not-applicable
deps: [def-metric-space, def-metric-topology, def-metric-ball, lem-real-line-is-a-metric-space,
       def-metric-interior-closure-boundary, thm-metric-closure-characterisation,
       thm-metric-sequential-closure, def-metric-bounded-diameter,
       fs-boundedness-is-a-topological-property,
       def-interior-closure-boundary-r, def-limit-point-r,
       lem-sequential-characterisation-of-closure-r,
       lem-compact-implies-closed-and-bounded-r,
       thm-open-subsets-of-r-structure, thm-connected-subsets-of-r-are-intervals, thm-heine-borel-r, thm-compact-iff-sequentially-compact-r, def-open-cover-r, thm-heine-borel-characterisation-r, thm-open-set-algebra-r, thm-closure-characterisations-r, def-open-and-closed-in-r, def-neighbourhood-r, def-connected-r, def-interval, def-bounded-set, thm-nested-interval-property, thm-bolzano-weierstrass, fs-closed-bounded-compact-without-completeness]
justified_by: []
forward_refs: [cex-closed-bounded-in-q-not-compact, def-topological-space, def-metrizable-space]
aliases: []
landmark: false
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
    - title: "Open set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Open_set"
    - title: "Heine-Borel theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem"
    - title: "Connected space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Connected_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

This page builds the topology of $\mathbb{R}$ out of the order and the absolute
value alone: a neighbourhood is an interval ([[def-neighbourhood-r]]), and open
and closed are defined from neighbourhoods ([[def-open-and-closed-in-r]]). Some
of what follows uses nothing else about $\mathbb{R}$, and some of it is written
in order vocabulary from beginning to end. This remark separates the two, so a
reader knows which results are candidates for reuse elsewhere and which are not
even statable elsewhere. **It asserts nothing about topological spaces in
general: they are developed later in this library, on the page of
[[def-topological-space]] and [[def-metrizable-space]], where the metric
development becomes a special case, but no claim about them is made or needed
here and nothing below rests on them.**

**Results that use only the definitions.** [[thm-open-set-algebra-r]] and
[[thm-closure-characterisations-r]] use openness, closedness, closure and the
nesting property of neighbourhoods, together with the comparison of two positive
radii, and nothing beyond that. Neither the least-upper-bound property nor the
Archimedean property appears in either proof, and their statements mention no
interval, no bound and no order, so those statements would still make sense
wherever a notion of neighbourhood is available, however it arises.

**Results that cannot be separated from the order of $\mathbb{R}$.** Four
results on this page depend on the order. For the first three the order is in
what they say and not merely in how they are proved; for the fourth it is in the
proof only, and the bullet says so.

- [[thm-open-subsets-of-r-structure]] says that an open set is a countable
  disjoint union of **open intervals**. An interval is defined by the order
  ([[def-interval]]), the components are the classes of an equivalence relation
  defined by order-convexity, and the identification of a component as an
  interval is carried out with $\sup$ and $\inf$. Delete the order and there is
  no statement left to prove.
- [[thm-connected-subsets-of-r-are-intervals]] characterises connectedness by
  **order-convexity**. Connectedness itself is defined without the order
  ([[def-connected-r]]), but the property it is being equated with is an order
  property, so the theorem is a bridge between an order notion and a topological
  one and exists only where both are present.
- [[thm-heine-borel-r]] and [[thm-heine-borel-characterisation-r]] speak of
  **closed bounded intervals** and of **bounded** sets. Boundedness is an order
  notion ([[def-bounded-set]]), and the proof of the first is a bisection, which
  uses the midpoint and hence the field operations as well. The completeness of
  $\mathbb{R}$ enters through [[thm-nested-interval-property]].
- [[thm-compact-iff-sequentially-compact-r]] routes **both** implications
  through the previous item, whose backward half spends the least-upper-bound
  property, and its **forward** implication additionally uses
  [[thm-bolzano-weierstrass]], which spends that property again; the backward
  implication does not use Bolzano-Weierstrass at all. Its statement mentions
  only compactness and sequences ([[def-open-cover-r]]), so unlike the three
  above it *is* statable without an order; the dependence lies entirely in the
  proof. This library provides no other proof, so nothing here licenses the
  equivalence outside $\mathbb{R}$.

**Where the dependence on completeness is visible rather than merely present.**
[[fs-closed-bounded-compact-without-completeness]] refutes, inside this library,
the claim that closed and bounded implies compact in an arbitrary ordered field,
and [[cex-closed-bounded-in-q-not-compact]] names the witness in $\mathbb{Q}$.
That is the sharpest statement this page makes about the limits of its own
results: the Heine-Borel characterisation is not a formal consequence of the
definitions, and it fails in the nearest ordered field that is not complete.

**The metric topology of $\mathbb{R}$ is the topology of this page.** This
library does develop metric spaces ([[def-metric-space]],
[[def-metric-topology]]), and $\mathbb{R}$ under $d(x,y) = |x-y|$ is one of them
([[lem-real-line-is-a-metric-space]]). The two resulting notions of *open subset
of $\mathbb{R}$* are not merely equivalent but literally the same condition, and
unfolding the definitions is the whole of the proof: claim 2 of that lemma gives
$B(x,r) = (x-r,\ x+r)$, which is exactly the neighbourhood $N_r(x)$ of
[[def-neighbourhood-r]], so "every point of $U$ admits a ball inside $U$" and
"every point of $U$ admits a neighbourhood inside $U$"
([[def-open-and-closed-in-r]]) say the same thing word for word. This page still
proves everything from the order directly, so that nothing here rests on the
metric development; the identification is recorded so that a reader moving
between the two pages knows they are looking at one topology and not two.
Because the two collections of open sets are one collection, everything built
from them is one notion as well. The interior, closure and boundary of
[[def-interior-closure-boundary-r]] and of
[[def-metric-interior-closure-boundary]] are the same three sets, since each
side characterises them in both of the same two ways, pointwise by
neighbourhoods and by extremality among the open subsets and the closed
supersets ([[thm-closure-characterisations-r]],
[[thm-metric-closure-characterisation]]); limit point, isolated point, adherent
point and dense are defined by literally the same condition on the two sides
([[def-limit-point-r]]), once $N_\varepsilon(x)$ and $B(x,\varepsilon)$ are
recognised as the same set; and
[[lem-sequential-characterisation-of-closure-r]] is the case $X = \mathbb{R}$ of
[[thm-metric-sequential-closure]], spending the axiom of countable choice in the
same one of the two directions.

**Bounded means the same here as it does in the metric development, and that
agreement is not a topological fact.** [[def-bounded-set]] calls
$A \subseteq \mathbb{R}$ bounded when it has both a lower and an upper bound,
while [[def-metric-bounded-diameter]] calls it bounded when it is empty or lies
inside some ball of $(\mathbb{R}, d_{\mathbb{R}})$. The two conditions hold of
exactly the same subsets of $\mathbb{R}$. If $A \subseteq B(x_0,r) = (x_0 - r,\
x_0 + r)$ ([[lem-real-line-is-a-metric-space]], claim 2, [[def-metric-ball]])
then $x_0 - r$ and $x_0 + r$ bound $A$ below and above; conversely, if
$\ell \le a \le u$ for every $a \in A$ and $A \ne \varnothing$, then $\ell \le u$
and $A \subseteq B(\ell,\ u - \ell + 1)$, the radius being at least $1$ and hence
positive; and an empty $A$ is bounded under both definitions, vacuously under the
first and by the explicit empty clause of the second. So the word **bounded** in
[[thm-heine-borel-characterisation-r]] may be read in either sense without
changing which sets the theorem names.

What may not be done is to read that theorem as a statement about the topology.
Boundedness is a property of the metric and not of the topology it induces
([[fs-boundedness-is-a-topological-property]]): the metric
$\rho(u,v) = \min\{|u-v|,\ 1\}$ induces exactly the open sets of this page, and
under it every subset of $\mathbb{R}$, including $\mathbb{R}$ itself, is
bounded. Since the open sets are unchanged, compactness ([[def-open-cover-r]])
is unchanged too, and $\mathbb{R}$ is not compact, being unbounded in the order
sense ([[lem-compact-implies-closed-and-bounded-r]]); yet $\mathbb{R}$ is closed,
and $\rho$-bounded. So "closed and bounded implies compact" is false for $\rho$
and true for $d_{\mathbb{R}}$, on one and the same topology. The identification
in the previous paragraph is with the usual metric specifically, and Heine-Borel
is a theorem about that metric and the order it comes from, not about the
topology alone.

**What is deliberately not claimed.** Whether the results above have analogues in
a setting carrying a topology with no order available at all, and whether
compactness and sequential compactness agree there, are questions about general
topological spaces. This library takes those questions up on a later page, where
[[def-metrizable-space]] identifies the metric development, this page's topology
included, as a special case of the general one; but nothing on **this** page
proves anything about general spaces, and the reader should take no assertion
about them from here. What is claimed here is narrower and
is checkable line by line against the proofs: in the four results listed above,
the order of $\mathbb{R}$ is used, and in three of them it is used in the
statement itself.
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

