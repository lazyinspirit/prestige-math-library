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

## Target item — `ex-open-set-decomposed-into-components`

Normalized current SHA-256: `a30033154d60bc04cecf950312d23db6e1eb100c229ca7464a8e55ce9d9f7dcd`

The complete current item follows, including frontmatter:

````markdown
---
id: ex-open-set-decomposed-into-components
kind: example
title: "An explicit open subset of $\\mathbb{R}$ written as the disjoint union of its component intervals"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-open-subsets-of-r-structure, def-interval, def-open-and-closed-in-r, thm-open-set-algebra-r]
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
    - title: "Open set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Open_set"
    - title: "Interval (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Interval_(mathematics)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Exercise 2.29)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Example

Take

$$U \;:=\; (-1,0) \;\cup\; (0,1) \;\cup\; (2,\infty) .$$

This is an open subset of $\mathbb{R}$, and its order components in the sense of
[[thm-open-subsets-of-r-structure]] are exactly the three intervals
$(-1,0)$, $(0,1)$ and $(2,\infty)$: they are pairwise disjoint, their union is
$U$, and there are three of them, a finite and hence at most countable family.
The example is chosen so that one component is unbounded and two are bounded,
and so that the two bounded ones are separated by a single missing point, $0$,
rather than by a gap of positive length.

## Facts & Assumptions

**Given:** The set $U := (-1,0) \cup (0,1) \cup (2,\infty)$, together with the order-convex hull $H(x,y) = \{\, z : x \le z \le y \text{ or } y \le z \le x \,\}$ and the relation $x \sim y \iff H(x,y) \subseteq U$ on $U$, both as in [[thm-open-subsets-of-r-structure]]. Write $A := (-1,0)$, $B := (0,1)$ and $C := (2,\infty)$.

[L1] For an open $U$, the relation $\sim$ is an equivalence relation on $U$, its classes are the order components, and they are nonempty pairwise disjoint open intervals whose union is $U$, forming an at most countable family ([[thm-open-subsets-of-r-structure]]).

[L2] Each of the forms $(a,b)$ and $(a,\infty)$ is an open set, and a union of open sets is open ([[def-open-and-closed-in-r]], [[def-interval]], [[thm-open-set-algebra-r]]).

[L3] Each of the nine interval forms is order-convex ([[def-interval]]).

## Verification

**Proof technique:** direct.

1.1 $U$ is open: $A$, $B$ and $C$ are open sets by [L2], and their union is open by [L2]. [L2]

1.2 $A$, $B$ and $C$ are pairwise disjoint with union $U$: an element of $A$ is negative, an element of $B$ lies strictly between $0$ and $1$, and an element of $C$ exceeds $2$, so no two of the three share a point, and the union is $U$ by definition. [given, L3]

2.1 Any two points of the same one of $A$, $B$, $C$ are equivalent: if $x, y \in A$ then $H(x,y) \subseteq A \subseteq U$ because $A$ is order-convex by [L3], so $x \sim y$; the same argument applies inside $B$ and inside $C$. [step 1.2, L1, L3]

2.2 No two points of different ones of $A$, $B$, $C$ are equivalent: for $x \in A$ and $y \in B$, or for $x \in A$ and $y \in C$, one has $x < 0 < y$, so $0 \in H(x,y)$ while $0 \notin U$; for $x \in B$ and $y \in C$ one has $x < 2 < y$, so $2 \in H(x,y)$ while $2 \notin U$. In each case $H(x,y) \not\subseteq U$ and $x \not\sim y$. [step 1.2, L1]

3.1 Every point of $U$ lies in exactly one of $A$, $B$, $C$ by step 1.2, and by steps 2.1 and 2.2 its equivalence class is precisely that one of the three; so the order components of $U$ are exactly $A$, $B$ and $C$, three pairwise disjoint nonempty open intervals with union $U$, which is the decomposition promised by [L1]. [step 1.2, step 2.1, step 2.2, L1] ∎

## Remarks

- **The count is the number of components, not the number of points.** There are
  three components here, while each of them is an uncountable set
  ([[lem-q-and-irrationals-dense-r]]). The at most countable family of
  [[thm-open-subsets-of-r-structure]] is a family of intervals, and a finite
  family is one instance of it.

- **What keeps two components apart may be a single missing point.** $A$ and $B$
  are kept apart by $0 \notin U$ alone, and no gap of positive length is
  required, although $B$ and $C$ happen to have one. This is why the components
  are defined by an equivalence relation on $U$ and not by measuring distances
  between the pieces.

- **Reading the decomposition off the formula is legitimate here only because
  the three pieces were checked to be the classes.** A presentation of an open
  set as a union of open intervals is not automatically its decomposition into
  components: $(0,2) = (0,1) \cup (0,2)$ writes an open set as a union of open
  intervals that are neither disjoint nor components.
````

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "thm-open-subsets-of-r-structure",
      "source_section": "Statement",
      "quote": "Let $U \\subseteq \\mathbb{R}$ be open ([[def-open-and-closed-in-r]]). For\n$x, y \\in \\mathbb{R}$ write\n\n$$H(x,y) \\;:=\\; \\{\\, z \\in \\mathbb{R} : x \\le z \\le y \\text{ or } y \\le z \\le x \\,\\}$$\n\nfor the order-convex hull of the pair, and define a relation on $U$ by\n\n$$x \\sim y \\quad :\\Longleftrightarrow \\quad H(x,y) \\subseteq U .$$\n\nThen $\\sim$ is an equivalence relation on $U$. Its equivalence classes, called\nthe **order components** of $U$, form a family $\\mathcal{C}$ with the following\nproperties:\n\n1. the members of $\\mathcal{C}$ are nonempty and pairwise disjoint, and\n   $U = \\bigcup \\mathcal{C}$;\n2. every member of $\\mathcal{C}$ is an interval of one of the four open forms\n   $(a,b)$, $(a,\\infty)$, $(-\\infty,b)$, $(-\\infty,\\infty)$ of\n   [[def-interval]], and is an open set;\n3. $\\mathcal{C}$ is at most countable ([[def-countable]]).\n\nSo every open subset of $\\mathbb{R}$ is the union of an at most countable family\nof pairwise disjoint nonempty open intervals. For $U = \\varnothing$ the family\n$\\mathcal{C}$ is empty and the union of the empty family is $\\varnothing$, so the\nstatement holds in that case too.\n\n**No choice principle is used.** The components are defined by an explicit\nequivalence relation, and the enumeration in claim 3 is obtained by sending a\ncomponent to the *least* index of a rational lying in it, which is canonical by\n[[thm-well-ordering-principle]].",
      "uses": [
        "2.1",
        "2.2",
        "3.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-open-and-closed-in-r",
      "source_section": "Definition",
      "quote": "Let $U, F \\subseteq \\mathbb{R}$, with neighbourhoods as in\n[[def-neighbourhood-r]].\n\n- $U$ is **open** when for every $x \\in U$ there is a real $\\varepsilon > 0$\n  with $N_\\varepsilon(x) \\subseteq U$.\n- $F$ is **closed** when its complement $\\mathbb{R} \\setminus F$ is open.\n- A set is **clopen** when it is both open and closed.\n\nThe whole of the topology of $\\mathbb{R}$ developed on this page rests on this\none definition: closedness is *defined* as openness of the complement, and every\nother description of a closed set on this page is a theorem\n([[thm-closure-characterisations-r]], [[lem-sequential-characterisation-of-closure-r]]).\n\n**$\\varnothing$ and $\\mathbb{R}$ are clopen.** The condition defining openness\nquantifies over the elements of the set, so it holds vacuously for\n$\\varnothing$; and for $x \\in \\mathbb{R}$ one has $N_1(x) \\subseteq \\mathbb{R}$,\nso $\\mathbb{R}$ is open. Since each of the two is the complement of the other,\neach is also closed.\n\n**Every neighbourhood is open.** Let $y \\in N_\\varepsilon(x)$ and put\n$\\delta := \\varepsilon - |y - x|$, which is $> 0$ because\n$y \\in N_\\varepsilon(x)$. The nesting property of [[def-neighbourhood-r]] gives\n$N_\\delta(y) \\subseteq N_\\varepsilon(x)$. So every point of $N_\\varepsilon(x)$\nhas a neighbourhood inside it.\n\n**The four open forms of [[def-interval]] are open sets.** Let $a, b \\in\n\\mathbb{R}$.\n\n- $(a,b)$: for $x$ with $a < x < b$, both $x - a > 0$ and $b - x > 0$, so\n  $\\delta := \\min\\{x - a,\\ b - x\\}$ is a positive real (the minimum of a\n  two-element set of reals exists, [[lem-finite-set-has-max]], [[def-max-min]]).\n  If $|y - x| < \\delta$ then $y > x - \\delta \\ge x - (x - a) = a$ and\n  $y < x + \\delta \\le x + (b - x) = b$, so $y \\in (a,b)$; hence\n  $N_\\delta(x) \\subseteq (a,b)$.\n- $(a,\\infty)$: for $x > a$ take $\\delta := x - a > 0$; then $|y - x| < \\delta$\n  gives $y > x - \\delta = a$.\n- $(-\\infty,b)$: for $x < b$ take $\\delta := b - x > 0$; then $|y - x| < \\delta$\n  gives $y < x + \\delta = b$.\n- $(-\\infty,\\infty) = \\mathbb{R}$: already treated above.\n\n**The four closed forms of [[def-interval]] are closed sets.** In each case the\ncomplement is shown open directly.\n\n- $[a,b]$: if $x \\notin [a,b]$ then $x < a$ or $x > b$ by trichotomy\n  ([[def-ordered-field]]). If $x < a$, take $\\delta := a - x > 0$; every\n  $y \\in N_\\delta(x)$ has $y < x + \\delta = a$, hence $y \\notin [a,b]$. If\n  $x > b$, take $\\delta := x - b > 0$; every $y \\in N_\\delta(x)$ has\n  $y > x - \\delta = b$, hence $y \\notin [a,b]$. So\n  $\\mathbb{R} \\setminus [a,b]$ is open.\n- $[a,\\infty)$: its complement is $(-\\infty,a)$, which is open by the previous\n  paragraph.\n- $(-\\infty,b]$: its complement is $(b,\\infty)$, which is open.\n- $(-\\infty,\\infty) = \\mathbb{R}$: its complement is $\\varnothing$, which is\n  open.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-interval",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]], [[def-ordered-field]]) with its order\n([[def-real-order]]).\n\nA subset $I \\subseteq \\mathbb{R}$ is **order-convex** when\n\n$$x, y \\in I \\text{ and } x \\le z \\le y \\;\\Longrightarrow\\; z \\in I .$$\n\nThe **intervals** of $\\mathbb{R}$ are the sets of the following nine forms, where\n$a, b \\in \\mathbb{R}$:\n\n| | bounded forms | | one-sided and full forms |\n|---|---|---|---|\n| $(a,b)$ | $\\{x : a < x < b\\}$ | $(a,\\infty)$ | $\\{x : a < x\\}$ |\n| $[a,b]$ | $\\{x : a \\le x \\le b\\}$ | $[a,\\infty)$ | $\\{x : a \\le x\\}$ |\n| $[a,b)$ | $\\{x : a \\le x < b\\}$ | $(-\\infty,b)$ | $\\{x : x < b\\}$ |\n| $(a,b]$ | $\\{x : a < x \\le b\\}$ | $(-\\infty,b]$ | $\\{x : x \\le b\\}$ |\n| | | $(-\\infty,\\infty)$ | $\\mathbb{R}$ |\n\nAn interval is **open** when both of its written endpoints are excluded, that is\nfor the forms $(a,b)$, $(a,\\infty)$, $(-\\infty,b)$ and $(-\\infty,\\infty)$; it is\n**closed** when both written endpoints are included, that is for $[a,b]$,\n$[a,\\infty)$, $(-\\infty,b]$ and $(-\\infty,\\infty)$. The forms $[a,b)$ and\n$(a,b]$ are **half-open**.\n\n**The symbols $\\pm\\infty$ are notation and not elements of $\\mathbb{R}$.** They\nmark which side carries no endpoint condition at all; the five forms in the right\ncolumn are defined by the displayed conditions on $x$ alone, and no arithmetic is\never performed with $\\infty$. This is the same refusal to extend $\\mathbb{R}$\nsilently that [[rem-sup-conventions]] records for suprema.\n\n**Every one of the nine forms is order-convex.** Each is defined by a conjunction\nof at most two conditions, each of the shape $a < x$, $a \\le x$, $x < b$ or\n$x \\le b$, and each such condition is inherited by an intermediate point: if\n$a < x$ and $x \\le z$ then $a < z$, and if $z \\le y$ and $y < b$ then $z < b$,\nby transitivity of the order ([[def-ordered-field]]). Applying this to whichever\none or two conditions define the form in question gives $z \\in I$ whenever\n$x, y \\in I$ and $x \\le z \\le y$.\n\n**Bounded intervals.** An interval is **bounded** ([[def-bounded-set]]) exactly\nwhen it is of one of the four forms in the left column: for those, $a$ is a lower\nbound and $b$ an upper bound. The other five forms are unbounded, on the side or\nsides written with $\\infty$; the verification is in the remarks below.\n\n**Nondegeneracy.** An interval is **degenerate** when it has at most one element,\nand **nondegenerate** when it has at least two. For the four bounded forms with\nendpoints $a$ and $b$:\n\n- $[a,b]$ is nonempty exactly when $a \\le b$, and it is nondegenerate exactly\n  when $a < b$. It is the singleton $\\{a\\}$ when $a = b$.\n- $(a,b)$, $[a,b)$ and $(a,b]$ are nonempty exactly when $a < b$, and then each\n  is nondegenerate.\n\nThe only assertion here that is not immediate from the defining conditions is\nthat $a < b$ makes $(a,b)$ nonempty with at least two points. It holds because\n$a < (a+b)/2 < b$, which follows from $a < b$ by adding $a$, respectively $b$, to\nboth sides and halving ([[def-ordered-field]]); repeating the halving inside\n$(a, (a+b)/2)$ produces a second point.\n\n**Closed bounded intervals.** These are the sets $[a,b]$ with $a \\le b$, which is\nexactly the condition making them nonempty. They are the intervals the nested\ninterval property is stated for, and the phrase *closed bounded interval* always\ncarries the hypothesis $a \\le b$ in this library.\n\n**Length.** The **length** of a bounded interval presented by its endpoints\n$a \\le b$ is\n\n$$\\ell = b - a \\;\\ge\\; 0 .$$\n\nLength is attached to the presentation by endpoints and is not recovered from the\nset: $(a,b)$, $[a,b)$ and $(a,b]$ are all empty when $a = b$, and so is\n$(c,c)$ for any other $c$, while each of these presentations has length $0$, so\nnothing inconsistent arises; but the endpoints are named explicitly at every\npoint where a length is used in this library, and never inferred from the set.\nUnbounded intervals are assigned no length.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-open-set-algebra-r",
      "source_section": "Statement",
      "quote": "Let open and closed subsets of $\\mathbb{R}$ be as in\n[[def-open-and-closed-in-r]].\n\n1. **Arbitrary unions of open sets are open.** If $\\mathcal{U}$ is any family of\n   open subsets of $\\mathbb{R}$, then $\\bigcup \\mathcal{U}$ is open.\n2. **Finite intersections of open sets are open.** If $n \\in \\mathbb{N}$ and\n   $U_0, \\dots, U_n$ are open, then $U_0 \\cap \\dots \\cap U_n$ is open.\n3. **Arbitrary intersections of closed sets are closed.** If $\\mathcal{F}$ is a\n   nonempty family of closed subsets of $\\mathbb{R}$, then\n   $\\bigcap \\mathcal{F}$ is closed.\n4. **Finite unions of closed sets are closed.** If $n \\in \\mathbb{N}$ and\n   $F_0, \\dots, F_n$ are closed, then $F_0 \\cup \\dots \\cup F_n$ is closed.\n\nThe word *finite* in claims 2 and 4 is not decoration: an arbitrary\nintersection of open sets need not be open, and dually an arbitrary union\nof closed sets need not be closed; the remarks below say where that is settled.\nClaim 3 asks $\\mathcal{F}$ to be nonempty\nonly so that $\\bigcap \\mathcal{F}$ is a subset of $\\mathbb{R}$ without appeal to\na convention about the empty intersection.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-interval",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]], [[def-ordered-field]]) with its order\n([[def-real-order]]).\n\nA subset $I \\subseteq \\mathbb{R}$ is **order-convex** when\n\n$$x, y \\in I \\text{ and } x \\le z \\le y \\;\\Longrightarrow\\; z \\in I .$$\n\nThe **intervals** of $\\mathbb{R}$ are the sets of the following nine forms, where\n$a, b \\in \\mathbb{R}$:\n\n| | bounded forms | | one-sided and full forms |\n|---|---|---|---|\n| $(a,b)$ | $\\{x : a < x < b\\}$ | $(a,\\infty)$ | $\\{x : a < x\\}$ |\n| $[a,b]$ | $\\{x : a \\le x \\le b\\}$ | $[a,\\infty)$ | $\\{x : a \\le x\\}$ |\n| $[a,b)$ | $\\{x : a \\le x < b\\}$ | $(-\\infty,b)$ | $\\{x : x < b\\}$ |\n| $(a,b]$ | $\\{x : a < x \\le b\\}$ | $(-\\infty,b]$ | $\\{x : x \\le b\\}$ |\n| | | $(-\\infty,\\infty)$ | $\\mathbb{R}$ |\n\nAn interval is **open** when both of its written endpoints are excluded, that is\nfor the forms $(a,b)$, $(a,\\infty)$, $(-\\infty,b)$ and $(-\\infty,\\infty)$; it is\n**closed** when both written endpoints are included, that is for $[a,b]$,\n$[a,\\infty)$, $(-\\infty,b]$ and $(-\\infty,\\infty)$. The forms $[a,b)$ and\n$(a,b]$ are **half-open**.\n\n**The symbols $\\pm\\infty$ are notation and not elements of $\\mathbb{R}$.** They\nmark which side carries no endpoint condition at all; the five forms in the right\ncolumn are defined by the displayed conditions on $x$ alone, and no arithmetic is\never performed with $\\infty$. This is the same refusal to extend $\\mathbb{R}$\nsilently that [[rem-sup-conventions]] records for suprema.\n\n**Every one of the nine forms is order-convex.** Each is defined by a conjunction\nof at most two conditions, each of the shape $a < x$, $a \\le x$, $x < b$ or\n$x \\le b$, and each such condition is inherited by an intermediate point: if\n$a < x$ and $x \\le z$ then $a < z$, and if $z \\le y$ and $y < b$ then $z < b$,\nby transitivity of the order ([[def-ordered-field]]). Applying this to whichever\none or two conditions define the form in question gives $z \\in I$ whenever\n$x, y \\in I$ and $x \\le z \\le y$.\n\n**Bounded intervals.** An interval is **bounded** ([[def-bounded-set]]) exactly\nwhen it is of one of the four forms in the left column: for those, $a$ is a lower\nbound and $b$ an upper bound. The other five forms are unbounded, on the side or\nsides written with $\\infty$; the verification is in the remarks below.\n\n**Nondegeneracy.** An interval is **degenerate** when it has at most one element,\nand **nondegenerate** when it has at least two. For the four bounded forms with\nendpoints $a$ and $b$:\n\n- $[a,b]$ is nonempty exactly when $a \\le b$, and it is nondegenerate exactly\n  when $a < b$. It is the singleton $\\{a\\}$ when $a = b$.\n- $(a,b)$, $[a,b)$ and $(a,b]$ are nonempty exactly when $a < b$, and then each\n  is nondegenerate.\n\nThe only assertion here that is not immediate from the defining conditions is\nthat $a < b$ makes $(a,b)$ nonempty with at least two points. It holds because\n$a < (a+b)/2 < b$, which follows from $a < b$ by adding $a$, respectively $b$, to\nboth sides and halving ([[def-ordered-field]]); repeating the halving inside\n$(a, (a+b)/2)$ produces a second point.\n\n**Closed bounded intervals.** These are the sets $[a,b]$ with $a \\le b$, which is\nexactly the condition making them nonempty. They are the intervals the nested\ninterval property is stated for, and the phrase *closed bounded interval* always\ncarries the hypothesis $a \\le b$ in this library.\n\n**Length.** The **length** of a bounded interval presented by its endpoints\n$a \\le b$ is\n\n$$\\ell = b - a \\;\\ge\\; 0 .$$\n\nLength is attached to the presentation by endpoints and is not recovered from the\nset: $(a,b)$, $[a,b)$ and $(a,b]$ are all empty when $a = b$, and so is\n$(c,c)$ for any other $c$, while each of these presentations has length $0$, so\nnothing inconsistent arises; but the endpoints are named explicitly at every\npoint where a length is used in this library, and never inferred from the set.\nUnbounded intervals are assigned no length.",
      "uses": [
        "1.2",
        "2.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "$U$ is open: $A$, $B$ and $C$ are open sets by [L2], and their union is open by [L2].",
      "step": "1.1",
      "inputs": [
        "L2"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "$A$, $B$ and $C$ are pairwise disjoint with union $U$: an element of $A$ is negative, an element of $B$ lies strictly between $0$ and $1$, and an element of $C$ exceeds $2$, so no two of the three share a point, and the union is $U$ by definition.",
      "step": "1.2",
      "inputs": [
        "given",
        "L3"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "Any two points of the same one of $A$, $B$, $C$ are equivalent: if $x, y \\in A$ then $H(x,y) \\subseteq A \\subseteq U$ because $A$ is order-convex by [L3], so $x \\sim y$; the same argument applies inside $B$ and inside $C$.",
      "step": "2.1",
      "inputs": [
        "step 1.2",
        "L1",
        "L3"
      ]
    },
    {
      "id": "step-2-2",
      "claim": "No two points of different ones of $A$, $B$, $C$ are equivalent: for $x \\in A$ and $y \\in B$, or for $x \\in A$ and $y \\in C$, one has $x < 0 < y$, so $0 \\in H(x,y)$ while $0 \\notin U$; for $x \\in B$ and $y \\in C$ one has $x < 2 < y$, so $2 \\in H(x,y)$ while $2 \\notin U$. In each case $H(x,y) \\not\\subseteq U$ and $x \\not\\sim y$.",
      "step": "2.2",
      "inputs": [
        "step 1.2",
        "L1"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "Every point of $U$ lies in exactly one of $A$, $B$, $C$ by step 1.2, and by steps 2.1 and 2.2 its equivalence class is precisely that one of the three; so the order components of $U$ are exactly $A$, $B$ and $C$, three pairwise disjoint nonempty open intervals with union $U$, which is the decomposition promised by [L1].",
      "step": "3.1",
      "inputs": [
        "step 1.2",
        "step 2.1",
        "step 2.2",
        "L1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The ex-open-set-decomposed-into-components statement has no empty-set or empty-family boundary."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "The statement and step 1.2 explicitly treat the zero boundary."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "The statement and step 1.2 explicitly treat the unit or first-index boundary."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "The statement and step 3.1 explicitly treat the equality, singleton, constant, or nonempty degeneracy."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "The statement and step 3.1 explicitly treat the interval or extended-real endpoint case."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "The ex-open-set-decomposed-into-components proof makes no selection from a set whose nonemptiness needs a separate discharge."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The ex-open-set-decomposed-into-components statement is not a biconditional requiring a forward implication."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The ex-open-set-decomposed-into-components statement is not a biconditional requiring a reverse implication."
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
    "source": "ex-open-set-decomposed-into-components",
    "sourcePage": "topology-of-r-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "thm-open-subsets-of-r-structure",
    "declared_target": "thm-open-subsets-of-r-structure",
    "target_statement_provenance": null,
    "targetPage": "topology-of-r",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-open-set-decomposed-into-components",
    "sourcePage": "topology-of-r-examples",
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
    "source": "ex-open-set-decomposed-into-components",
    "sourcePage": "topology-of-r-examples",
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
    "source": "ex-open-set-decomposed-into-components",
    "sourcePage": "topology-of-r-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "thm-open-set-algebra-r",
    "declared_target": "thm-open-set-algebra-r",
    "target_statement_provenance": null,
    "targetPage": "topology-of-r",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  }
]
```

## Full text of every cited or declared item (5)

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

### `thm-open-set-algebra-r`

````markdown
---
id: thm-open-set-algebra-r
kind: theorem
title: "Arbitrary unions and finite intersections of open subsets of $\\mathbb{R}$ are open, and dually for closed sets"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-open-and-closed-in-r, def-neighbourhood-r, lem-finite-set-has-max, def-max-min, def-interval, def-complete-ordered-field, def-ordered-field]
justified_by: []
forward_refs: [cex-intersection-of-shrinking-intervals-not-open]
aliases: []
landmark: true
short: "the algebra of open and closed sets"
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
    - title: "Open set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Open_set"
    - title: "Closed set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closed_set"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Thm 2.24)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §7.2"
      url: "https://www.jirka.org/ra/"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let open and closed subsets of $\mathbb{R}$ be as in
[[def-open-and-closed-in-r]].

1. **Arbitrary unions of open sets are open.** If $\mathcal{U}$ is any family of
   open subsets of $\mathbb{R}$, then $\bigcup \mathcal{U}$ is open.
2. **Finite intersections of open sets are open.** If $n \in \mathbb{N}$ and
   $U_0, \dots, U_n$ are open, then $U_0 \cap \dots \cap U_n$ is open.
3. **Arbitrary intersections of closed sets are closed.** If $\mathcal{F}$ is a
   nonempty family of closed subsets of $\mathbb{R}$, then
   $\bigcap \mathcal{F}$ is closed.
4. **Finite unions of closed sets are closed.** If $n \in \mathbb{N}$ and
   $F_0, \dots, F_n$ are closed, then $F_0 \cup \dots \cup F_n$ is closed.

The word *finite* in claims 2 and 4 is not decoration: an arbitrary
intersection of open sets need not be open, and dually an arbitrary union
of closed sets need not be closed; the remarks below say where that is settled.
Claim 3 asks $\mathcal{F}$ to be nonempty
only so that $\bigcap \mathcal{F}$ is a subset of $\mathbb{R}$ without appeal to
a convention about the empty intersection.

## Facts & Assumptions

**Given:** A family $\mathcal{U}$ of open subsets of $\mathbb{R}$, with $\bigcup \mathcal{U} = \{\, x \in \mathbb{R} : x \in U \text{ for some } U \in \mathcal{U} \,\}$; a natural number $n$ and open sets $U_0, \dots, U_n$; a nonempty family $\mathcal{F}$ of closed subsets of $\mathbb{R}$, with $\bigcap \mathcal{F} = \{\, x \in \mathbb{R} : x \in F \text{ for every } F \in \mathcal{F} \,\}$; and closed sets $F_0, \dots, F_n$.

[A1] De Morgan's laws in the ambient set theory: for a nonempty family $\mathcal{G}$ of subsets of $\mathbb{R}$, $\mathbb{R} \setminus \bigcap \mathcal{G} = \bigcup \{\, \mathbb{R} \setminus G : G \in \mathcal{G} \,\}$, and $\mathbb{R} \setminus (G_0 \cup \dots \cup G_n) = (\mathbb{R} \setminus G_0) \cap \dots \cap (\mathbb{R} \setminus G_n)$. Also $\mathbb{R} \setminus (\mathbb{R} \setminus G) = G$.

[L1] $U$ is open when every $x \in U$ admits a real $\varepsilon > 0$ with $N_\varepsilon(x) \subseteq U$; $F$ is closed when $\mathbb{R} \setminus F$ is open ([[def-open-and-closed-in-r]]).

[L2] $N_\varepsilon(x) = \{\, y : |y - x| < \varepsilon \,\}$, and $0 < \delta \le \varepsilon$ gives $N_\delta(x) \subseteq N_\varepsilon(x)$ ([[def-neighbourhood-r]]).

[L3] Every nonempty finite set of reals has a minimum, so $\min\{\varepsilon, \eta\}$ is defined and equals one of the two entries, and is $\le$ both ([[lem-finite-set-has-max]], [[def-max-min]]).

## Proof

**Proof technique:** direct.

1.1 Let $x \in \bigcup \mathcal{U}$. Then $x \in U$ for some $U \in \mathcal{U}$, and $U$ is open, so there is $\varepsilon > 0$ with $N_\varepsilon(x) \subseteq U \subseteq \bigcup \mathcal{U}$; as $x$ was arbitrary, $\bigcup \mathcal{U}$ is open, which is claim 1. [given, L1, choose]

1.2 Now let $U$ and $V$ be open and let $x \in U \cap V$; fix $\varepsilon > 0$ with $N_\varepsilon(x) \subseteq U$ and $\eta > 0$ with $N_\eta(x) \subseteq V$. [given, L1, choose]

2.1 Put $\delta := \min\{\varepsilon, \eta\}$, which is one of $\varepsilon, \eta$ and hence $> 0$, and satisfies $\delta \le \varepsilon$ and $\delta \le \eta$; then $N_\delta(x) \subseteq N_\varepsilon(x) \subseteq U$ and $N_\delta(x) \subseteq N_\eta(x) \subseteq V$, so $N_\delta(x) \subseteq U \cap V$, and as $x$ was arbitrary $U \cap V$ is open. [step 1.2, L2, L3]

2.2 The family $\{\, \mathbb{R} \setminus F : F \in \mathcal{F} \,\}$ consists of open sets by [L1], so its union is open by step 1.1; that union is $\mathbb{R} \setminus \bigcap \mathcal{F}$ by [A1], so $\bigcap \mathcal{F}$ is closed, which is claim 3. [step 1.1, A1, L1]

3.1 Claim 2 now follows by induction on $n$: for $n = 0$ the intersection is $U_0$, which is open by hypothesis; and if $W := U_0 \cap \dots \cap U_n$ is open then $U_0 \cap \dots \cap U_{n+1} = W \cap U_{n+1}$ is an intersection of two open sets, hence open by step 2.1. [step 2.1, given]

4.1 Each $\mathbb{R} \setminus F_i$ is open by [L1], so $(\mathbb{R} \setminus F_0) \cap \dots \cap (\mathbb{R} \setminus F_n)$ is open by step 3.1; that set is $\mathbb{R} \setminus (F_0 \cup \dots \cup F_n)$ by [A1], so $F_0 \cup \dots \cup F_n$ is closed, which is claim 4. [step 3.1, A1, L1]

5.1 Claims 1, 2, 3 and 4 are steps 1.1, 3.1, 2.2 and 4.1 respectively, so arbitrary unions and finite intersections of open sets are open, and arbitrary intersections and finite unions of closed sets are closed. [step 1.1, step 2.2, step 3.1, step 4.1] ∎

## Remarks

- **Completeness plays no part.** Nothing above uses the least-upper-bound
  property, or even the Archimedean property: the only facts about $\mathbb{R}$
  the proof touches are the definition of a neighbourhood, its monotonicity in
  the radius, and the comparison of two positive radii. What needs completeness
  is not the algebra of open sets but the theorems about compactness that come
  later.

- **Why finiteness cannot be dropped in claim 2.** The minimum taken in step 2.1
  is a minimum of finitely many positive radii, and it is positive precisely
  because it is one of them ([[lem-finite-set-has-max]]). An infinite family of
  positive radii has an infimum that may be $0$, and then no positive $\delta$
  survives. That is exactly what happens for the shrinking intervals of
  [[fs-arbitrary-intersection-of-open-is-open]], whose named witness is
  [[cex-intersection-of-shrinking-intervals-not-open]].

- **The four claims are a rewriting of two.** Claims 3 and 4 are claims 1 and 2
  read through complementation, and closedness is *defined* by complementation
  ([[def-open-and-closed-in-r]]), so no separate argument about closed sets is
  possible or needed.
````

### `thm-open-subsets-of-r-structure`

````markdown
---
id: thm-open-subsets-of-r-structure
kind: theorem
title: "Every open subset of $\\mathbb{R}$ is a countable disjoint union of open intervals, namely its order components"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-open-and-closed-in-r, def-neighbourhood-r, def-interval, def-complete-ordered-field, lem-sup-epsilon, lem-inf-epsilon, thm-infimum-property, def-infimum, lem-sup-unique, def-bounded-set, lem-rat-embeds-dense, thm-rationals-countable, lem-subset-of-countable, def-countable, def-injection-surjection-bijection, def-equinumerous, thm-well-ordering-principle, def-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "structure of open subsets of $\\mathbb{R}$"
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
    - title: "Open set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Open_set"
    - title: "Interval (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Interval_(mathematics)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Exercise 2.29)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §7.2"
      url: "https://www.jirka.org/ra/"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $U \subseteq \mathbb{R}$ be open ([[def-open-and-closed-in-r]]). For
$x, y \in \mathbb{R}$ write

$$H(x,y) \;:=\; \{\, z \in \mathbb{R} : x \le z \le y \text{ or } y \le z \le x \,\}$$

for the order-convex hull of the pair, and define a relation on $U$ by

$$x \sim y \quad :\Longleftrightarrow \quad H(x,y) \subseteq U .$$

Then $\sim$ is an equivalence relation on $U$. Its equivalence classes, called
the **order components** of $U$, form a family $\mathcal{C}$ with the following
properties:

1. the members of $\mathcal{C}$ are nonempty and pairwise disjoint, and
   $U = \bigcup \mathcal{C}$;
2. every member of $\mathcal{C}$ is an interval of one of the four open forms
   $(a,b)$, $(a,\infty)$, $(-\infty,b)$, $(-\infty,\infty)$ of
   [[def-interval]], and is an open set;
3. $\mathcal{C}$ is at most countable ([[def-countable]]).

So every open subset of $\mathbb{R}$ is the union of an at most countable family
of pairwise disjoint nonempty open intervals. For $U = \varnothing$ the family
$\mathcal{C}$ is empty and the union of the empty family is $\varnothing$, so the
statement holds in that case too.

**No choice principle is used.** The components are defined by an explicit
equivalence relation, and the enumeration in claim 3 is obtained by sending a
component to the *least* index of a rational lying in it, which is canonical by
[[thm-well-ordering-principle]].

## Facts & Assumptions

**Given:** An open set $U \subseteq \mathbb{R}$, the hull $H(x,y)$ and the relation $\sim$ as displayed in the Statement. Write $\mathbb{Q}_{\mathbb{R}}$ for the image of $\mathbb{Q}$ in $\mathbb{R}$ under the canonical embedding $q \mapsto \hat q$.

[L1] $U$ is open when every $u \in U$ admits a real $\varepsilon > 0$ with $N_\varepsilon(u) \subseteq U$ ([[def-open-and-closed-in-r]]).

[L2] $N_\varepsilon(u) = (u - \varepsilon, u + \varepsilon)$, and $u \in N_\varepsilon(u)$ ([[def-neighbourhood-r]]).

[L3] Order-convexity and the nine interval forms; each of the nine is order-convex, and $(a,b)$, $(a,\infty)$, $(-\infty,b)$, $(-\infty,\infty)$ are the open forms; trichotomy and transitivity of the order ([[def-interval]], [[def-ordered-field]], [[def-complete-ordered-field]]).

[L4] Least-upper-bound property: a nonempty subset of $\mathbb{R}$ bounded above has a least upper bound, unique, and dually a nonempty subset bounded below has a greatest lower bound, unique ([[def-complete-ordered-field]], [[thm-infimum-property]], [[def-infimum]], [[lem-sup-unique]]).

[L5] Epsilon characterisations: for nonempty $S$ bounded above and $b = \sup S$, every $\varepsilon > 0$ admits $s \in S$ with $b - \varepsilon < s$; for nonempty $S$ bounded below and $a = \inf S$, every $\varepsilon > 0$ admits $s \in S$ with $s < a + \varepsilon$ ([[lem-sup-epsilon]], [[lem-inf-epsilon]]).

[L6] Bounded above, bounded below, and their negations: $S$ fails to be bounded above exactly when for every $w \in \mathbb{R}$ there is $v \in S$ with $w < v$, and fails to be bounded below exactly when for every $w$ there is $t \in S$ with $t < w$ ([[def-bounded-set]], [[def-complete-ordered-field]]).

[L7] Strictly between any two reals lies an element of $\mathbb{Q}_{\mathbb{R}}$, and $q \mapsto \hat q$ is injective ([[lem-rat-embeds-dense]]).

[L8] $\mathbb{Q} \approx \mathbb{N}$ ([[thm-rationals-countable]]); a composition of bijections is a bijection and an injection is a bijection onto its image ([[def-injection-surjection-bijection]], [[def-equinumerous]]); every subset of an at most countable set is at most countable ([[lem-subset-of-countable]], [[def-countable]]).

[L9] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

## Proof

**Proof technique:** constructive.

1.1 The hull satisfies $x, y \in H(x,y)$, $H(x,y) = H(y,x)$ and $H(x,x) = \{x\}$, and for all $x, y, z$ one has $H(x,z) \subseteq H(x,y) \cup H(y,z)$: given $w \in H(x,z)$, either $x \le w \le z$, in which case $w \le y$ puts $w$ in $H(x,y)$ and $y < w$ puts $w$ in $H(y,z)$, or $z \le w \le x$, in which case $w \le y$ puts $w$ in $H(y,z)$ and $y < w$ puts $w$ in $H(x,y)$. Hence $\sim$ is reflexive on $U$ (as $H(x,x) = \{x\} \subseteq U$), symmetric, and transitive. [given, L3]

1.2 Let $C \subseteq \mathbb{R}$ be nonempty, open and order-convex, and let $u \in C$; fix $\varepsilon > 0$ with $N_\varepsilon(u) \subseteq C$. Then $u - \varepsilon/2$ and $u + \varepsilon/2$ lie in $N_\varepsilon(u) \subseteq C$, so $u$ is neither an upper bound nor a lower bound of $C$. [L1, L2, L3, choose]

1.3 For $x \in U$ put $C_x := \{\, y \in U : H(x,y) \subseteq U \,\}$, the equivalence class of $x$, and let $\mathcal{C} := \{\, C_x : x \in U \,\}$. [construct]

2.1 Each $C_x$ is nonempty because $x \in C_x$; two classes of an equivalence relation are equal or disjoint; and every $x \in U$ lies in $C_x$, so $U = \bigcup \mathcal{C}$. This is claim 1. [step 1.1, step 1.3]

2.2 Each $C_x$ is order-convex: let $u, v \in C_x$ and $u \le w \le v$. From $u \sim x$ and $x \sim v$ we get $u \sim v$, so $H(u,v) \subseteq U$; since $w \in H(u,v)$ we get $w \in U$, and $H(u,w) \subseteq H(u,v) \subseteq U$ because every $t$ with $u \le t \le w$ satisfies $u \le t \le v$, so $u \sim w$ and hence $w \in C_u = C_x$. [step 1.1, step 1.3, L3]

2.3 Each $C_x$ is open: let $u \in C_x \subseteq U$ and fix $\varepsilon > 0$ with $N_\varepsilon(u) \subseteq U$. For $y \in N_\varepsilon(u)$ the hull $H(u,y)$ is contained in the order-convex set $N_\varepsilon(u)$, hence in $U$, so $u \sim y$ and $y \in C_u = C_x$; therefore $N_\varepsilon(u) \subseteq C_x$. [step 1.1, step 1.3, L1, L2, L3, choose]

2.4 Let $C$ be nonempty, open and order-convex and bounded both above and below; then $a := \inf C$ and $b := \sup C$ exist by [L4]. Every $u \in C$ satisfies $a \le u \le b$, and $u$ is neither an upper nor a lower bound of $C$, so $u \ne a$ and $u \ne b$, giving $a < u < b$; in particular $a < b$ and $C \subseteq (a,b)$. Conversely let $a < w < b$: by [L5] with $\varepsilon = b - w$ there is $v \in C$ with $w < v$, and with $\varepsilon = w - a$ there is $t \in C$ with $t < w$, so $t \le w \le v$ and order-convexity gives $w \in C$. Hence $C = (a,b)$. [step 1.2, L3, L4, L5]

2.5 Let $C$ be nonempty, open and order-convex. If $C$ is bounded below and not above, put $a := \inf C$; as in the bounded case every $u \in C$ satisfies $a < u$, and for $w > a$ the fact [L5] supplies $t \in C$ with $t < w$ while [L6] supplies $v \in C$ with $w < v$, so $w \in C$ by order-convexity; hence $C = (a,\infty)$. Symmetrically, if $C$ is bounded above and not below then $C = (-\infty, b)$ with $b := \sup C$. If $C$ is bounded neither above nor below then for every $w$ the fact [L6] supplies $t, v \in C$ with $t < w < v$, so $w \in C$ and $C = \mathbb{R}$. [step 1.2, L3, L4, L5, L6]

3.1 Every member of $\mathcal{C}$ is nonempty, open and order-convex by steps 2.1, 2.2 and 2.3, and it is bounded above or not and bounded below or not, so steps 2.4 and 2.5 exhibit it as an interval of one of the four open forms; this is claim 2. [step 2.1, step 2.2, step 2.3, step 2.4, step 2.5, L3]

3.2 Every member $C$ of $\mathcal{C}$ contains an element of $\mathbb{Q}_{\mathbb{R}}$: pick $u \in C$ and, by openness, $\varepsilon > 0$ with $N_\varepsilon(u) \subseteq C$; since $u - \varepsilon < u + \varepsilon$, the fact [L7] supplies $\hat q$ with $u - \varepsilon < \hat q < u + \varepsilon$, and $N_\varepsilon(u) = (u - \varepsilon, u + \varepsilon)$ by [L2], so $\hat q \in C$. [step 2.1, step 2.3, L2, L7, choose]

4.1 By [L8] fix a bijection $\beta : \mathbb{N} \to \mathbb{Q}$; then $e := \iota \circ \beta$, where $\iota(q) = \hat q$, is a bijection from $\mathbb{N}$ onto $\mathbb{Q}_{\mathbb{R}}$ by [L7] and [L8]. For $C \in \mathcal{C}$ the set $\{\, n \in \mathbb{N} : e(n) \in C \,\}$ is nonempty by step 3.2, so $\Phi(C) := \min \{\, n \in \mathbb{N} : e(n) \in C \,\}$ is defined by [L9] and no selection is made; and $\Phi$ is injective, since $e(\Phi(C)) \in C$ and distinct members of $\mathcal{C}$ are disjoint by step 2.1. [step 2.1, step 3.2, L7, L8, L9, construct]

5.1 Hence $\mathcal{C}$ is in bijection with $\Phi[\mathcal{C}] \subseteq \mathbb{N}$, and a subset of $\mathbb{N}$ is at most countable, so $\mathcal{C}$ is at most countable; this is claim 3. [step 4.1, L8]

6.1 The family $\mathcal{C}$ constructed in step 1.3 therefore consists of pairwise disjoint nonempty open intervals whose union is $U$, and it is at most countable, which is exactly the assertion. [step 2.1, step 3.1, step 5.1, discharge-construct] ∎

## Remarks

- **The components are forced, not chosen.** A component is an equivalence class
  of an explicitly written relation, so the family $\mathcal{C}$ is determined by
  $U$ alone, with no selection anywhere. One half of the usual uniqueness
  statement is immediate from that: if $U$ is written as a union of nonempty open
  intervals, each of those intervals is order-convex and contained in $U$, so any
  two of its points are equivalent and the whole interval lies inside a single
  component. That the intervals must then *be* the components is the other half,
  and it is neither needed below nor proved here.

- **Where completeness is spent.** Only in steps 2.4 and 2.5, which produce
  $\inf C$ and $\sup C$ from the least-upper-bound property. Everything else
  uses the order alone. The argument therefore does not transpose to an
  arbitrary ordered field, where the two bounds it asks for need not exist; the
  standard obstruction is the set of positive rationals whose square is below
  $2$, which is bounded above in $\mathbb{Q}$ and has no supremum there
  ([[ex-sup-rationals-below-sqrt-two]]).

- **The two sizes in the statement pull in opposite directions.** Each single
  component is an uncountable set, being a nonempty open set
  ([[lem-q-and-irrationals-dense-r]]), while the family of components is at most
  countable. There is no tension: the count in claim 3 is a count of components,
  not of points, and the injection of step 4.1 is into $\mathbb{N}$ through the
  rationals, which are countable and dense at once.

- **This is one of the results whose statement is order vocabulary throughout**,
  and [[rem-r-native-topology-scope]] collects them: interval, disjoint union of
  intervals, and the components themselves are all defined from the order, so
  there is nothing here to restate where no order is present.
````

