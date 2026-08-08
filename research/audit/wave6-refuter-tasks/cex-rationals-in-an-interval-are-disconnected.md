## Target item — `cex-rationals-in-an-interval-are-disconnected`

Normalized current SHA-256: `dd0f53afc9e0f3182f8a2246e870cafef1db52ae2aa184c5281110b058bf7d83`

The complete current item follows, including frontmatter:

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
        "3.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-closure-characterisations-r",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$, with closure $\\overline{A}$ as in\n[[def-interior-closure-boundary-r]] and derived set $A'$ as in\n[[def-limit-point-r]]. Write\n\n$$E \\;:=\\; \\{\\, x \\in \\mathbb{R} : N_\\varepsilon(x) \\cap A \\ne \\varnothing \\text{ for every real } \\varepsilon > 0 \\,\\}$$\n\nfor the set of adherent points of $A$ ([[def-neighbourhood-r]]). Then:\n\n1. $\\overline{A} = E$.\n2. $\\overline{A} = A \\cup A'$.\n3. $\\overline{A}$ is the smallest closed superset of $A$: it is closed, it\n   contains $A$, and it is contained in every closed $F$ with $A \\subseteq F$.\n4. $A$ is closed if and only if $A = \\overline{A}$, if and only if\n   $A' \\subseteq A$.\n\nClaim 3 is the content of the definition of $\\overline{A}$ and is restated here\nso that the four descriptions stand together; claims 1, 2 and 4 are the ones\nthat carry work.",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-interior-closure-boundary-r",
      "source_section": "Definition",
      "quote": "Let $A \\subseteq \\mathbb{R}$, with open and closed sets as in\n[[def-open-and-closed-in-r]].\n\n- The **interior** of $A$ is the union of all open subsets of $A$:\n  $$A^{\\circ} \\;:=\\; \\bigcup \\{\\, U \\subseteq \\mathbb{R} : U \\text{ open and } U \\subseteq A \\,\\}.$$\n- The **closure** of $A$ is the intersection of all closed supersets of $A$:\n  $$\\overline{A} \\;:=\\; \\bigcap \\{\\, F \\subseteq \\mathbb{R} : F \\text{ closed and } A \\subseteq F \\,\\}.$$\n- The **boundary** of $A$ is $\\partial A := \\overline{A} \\setminus A^{\\circ}$.\n- The **exterior** of $A$ is $\\operatorname{ext} A := (\\mathbb{R} \\setminus A)^{\\circ}$.\n\n**Both operators are well defined and deliver what their names claim.** The\nfamily whose union defines $A^{\\circ}$ always contains $\\varnothing$, and the\nfamily whose intersection defines $\\overline{A}$ always contains $\\mathbb{R}$,\nso the second family is nonempty and both expressions denote subsets of\n$\\mathbb{R}$ without appeal to any convention about empty unions or\nintersections. Moreover:\n\n- $A^{\\circ}$ is **open**, being a union of open sets\n  ([[thm-open-set-algebra-r]], claim 1), and $A^{\\circ} \\subseteq A$, since\n  every set in the family is a subset of $A$. It is therefore the **largest**\n  open subset of $A$: any open $U \\subseteq A$ is a member of the family and so\n  $U \\subseteq A^{\\circ}$.\n- $\\overline{A}$ is **closed**, being an intersection of a nonempty family of\n  closed sets ([[thm-open-set-algebra-r]], claim 3), and $A \\subseteq\n  \\overline{A}$, since every set in the family contains $A$. It is therefore the\n  **smallest** closed superset of $A$: any closed $F \\supseteq A$ is a member of\n  the family and so $\\overline{A} \\subseteq F$.\n\n**Pointwise description of the interior.** For $x \\in \\mathbb{R}$,\n\n$$x \\in A^{\\circ} \\iff \\text{there is } \\varepsilon > 0 \\text{ with } N_\\varepsilon(x) \\subseteq A .$$\n\nIf $x \\in A^{\\circ}$ then, $A^{\\circ}$ being open and containing $x$, there is\n$\\varepsilon > 0$ with $N_\\varepsilon(x) \\subseteq A^{\\circ} \\subseteq A$.\nConversely if $N_\\varepsilon(x) \\subseteq A$ then $N_\\varepsilon(x)$ is an open\nsubset of $A$ ([[def-open-and-closed-in-r]]) containing $x$, hence\n$x \\in N_\\varepsilon(x) \\subseteq A^{\\circ}$ ([[def-neighbourhood-r]]).\n\nThe corresponding pointwise description of the closure is not a definitional\nmatter and is proved separately, as [[thm-closure-characterisations-r]].",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-open-and-closed-in-r",
      "source_section": "Definition",
      "quote": "Let $U, F \\subseteq \\mathbb{R}$, with neighbourhoods as in\n[[def-neighbourhood-r]].\n\n- $U$ is **open** when for every $x \\in U$ there is a real $\\varepsilon > 0$\n  with $N_\\varepsilon(x) \\subseteq U$.\n- $F$ is **closed** when its complement $\\mathbb{R} \\setminus F$ is open.\n- A set is **clopen** when it is both open and closed.\n\nThe whole of the topology of $\\mathbb{R}$ developed on this page rests on this\none definition: closedness is *defined* as openness of the complement, and every\nother description of a closed set on this page is a theorem\n([[thm-closure-characterisations-r]], [[lem-sequential-characterisation-of-closure-r]]).\n\n**$\\varnothing$ and $\\mathbb{R}$ are clopen.** The condition defining openness\nquantifies over the elements of the set, so it holds vacuously for\n$\\varnothing$; and for $x \\in \\mathbb{R}$ one has $N_1(x) \\subseteq \\mathbb{R}$,\nso $\\mathbb{R}$ is open. Since each of the two is the complement of the other,\neach is also closed.\n\n**Every neighbourhood is open.** Let $y \\in N_\\varepsilon(x)$ and put\n$\\delta := \\varepsilon - |y - x|$, which is $> 0$ because\n$y \\in N_\\varepsilon(x)$. The nesting property of [[def-neighbourhood-r]] gives\n$N_\\delta(y) \\subseteq N_\\varepsilon(x)$. So every point of $N_\\varepsilon(x)$\nhas a neighbourhood inside it.\n\n**The four open forms of [[def-interval]] are open sets.** Let $a, b \\in\n\\mathbb{R}$.\n\n- $(a,b)$: for $x$ with $a < x < b$, both $x - a > 0$ and $b - x > 0$, so\n  $\\delta := \\min\\{x - a,\\ b - x\\}$ is a positive real (the minimum of a\n  two-element set of reals exists, [[lem-finite-set-has-max]], [[def-max-min]]).\n  If $|y - x| < \\delta$ then $y > x - \\delta \\ge x - (x - a) = a$ and\n  $y < x + \\delta \\le x + (b - x) = b$, so $y \\in (a,b)$; hence\n  $N_\\delta(x) \\subseteq (a,b)$.\n- $(a,\\infty)$: for $x > a$ take $\\delta := x - a > 0$; then $|y - x| < \\delta$\n  gives $y > x - \\delta = a$.\n- $(-\\infty,b)$: for $x < b$ take $\\delta := b - x > 0$; then $|y - x| < \\delta$\n  gives $y < x + \\delta = b$.\n- $(-\\infty,\\infty) = \\mathbb{R}$: already treated above.\n\n**The four closed forms of [[def-interval]] are closed sets.** In each case the\ncomplement is shown open directly.\n\n- $[a,b]$: if $x \\notin [a,b]$ then $x < a$ or $x > b$ by trichotomy\n  ([[def-ordered-field]]). If $x < a$, take $\\delta := a - x > 0$; every\n  $y \\in N_\\delta(x)$ has $y < x + \\delta = a$, hence $y \\notin [a,b]$. If\n  $x > b$, take $\\delta := x - b > 0$; every $y \\in N_\\delta(x)$ has\n  $y > x - \\delta = b$, hence $y \\notin [a,b]$. So\n  $\\mathbb{R} \\setminus [a,b]$ is open.\n- $[a,\\infty)$: its complement is $(-\\infty,a)$, which is open by the previous\n  paragraph.\n- $(-\\infty,b]$: its complement is $(b,\\infty)$, which is open.\n- $(-\\infty,\\infty) = \\mathbb{R}$: its complement is $\\varnothing$, which is\n  open.",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-interval",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]], [[def-ordered-field]]) with its order\n([[def-real-order]]).\n\nA subset $I \\subseteq \\mathbb{R}$ is **order-convex** when\n\n$$x, y \\in I \\text{ and } x \\le z \\le y \\;\\Longrightarrow\\; z \\in I .$$\n\nThe **intervals** of $\\mathbb{R}$ are the sets of the following nine forms, where\n$a, b \\in \\mathbb{R}$:\n\n| | bounded forms | | one-sided and full forms |\n|---|---|---|---|\n| $(a,b)$ | $\\{x : a < x < b\\}$ | $(a,\\infty)$ | $\\{x : a < x\\}$ |\n| $[a,b]$ | $\\{x : a \\le x \\le b\\}$ | $[a,\\infty)$ | $\\{x : a \\le x\\}$ |\n| $[a,b)$ | $\\{x : a \\le x < b\\}$ | $(-\\infty,b)$ | $\\{x : x < b\\}$ |\n| $(a,b]$ | $\\{x : a < x \\le b\\}$ | $(-\\infty,b]$ | $\\{x : x \\le b\\}$ |\n| | | $(-\\infty,\\infty)$ | $\\mathbb{R}$ |\n\nAn interval is **open** when both of its written endpoints are excluded, that is\nfor the forms $(a,b)$, $(a,\\infty)$, $(-\\infty,b)$ and $(-\\infty,\\infty)$; it is\n**closed** when both written endpoints are included, that is for $[a,b]$,\n$[a,\\infty)$, $(-\\infty,b]$ and $(-\\infty,\\infty)$. The forms $[a,b)$ and\n$(a,b]$ are **half-open**.\n\n**The symbols $\\pm\\infty$ are notation and not elements of $\\mathbb{R}$.** They\nmark which side carries no endpoint condition at all; the five forms in the right\ncolumn are defined by the displayed conditions on $x$ alone, and no arithmetic is\never performed with $\\infty$. This is the same refusal to extend $\\mathbb{R}$\nsilently that [[rem-sup-conventions]] records for suprema.\n\n**Every one of the nine forms is order-convex.** Each is defined by a conjunction\nof at most two conditions, each of the shape $a < x$, $a \\le x$, $x < b$ or\n$x \\le b$, and each such condition is inherited by an intermediate point: if\n$a < x$ and $x \\le z$ then $a < z$, and if $z \\le y$ and $y < b$ then $z < b$,\nby transitivity of the order ([[def-ordered-field]]). Applying this to whichever\none or two conditions define the form in question gives $z \\in I$ whenever\n$x, y \\in I$ and $x \\le z \\le y$.\n\n**Bounded intervals.** An interval is **bounded** ([[def-bounded-set]]) exactly\nwhen it is of one of the four forms in the left column: for those, $a$ is a lower\nbound and $b$ an upper bound. The other five forms are unbounded, on the side or\nsides written with $\\infty$; the verification is in the remarks below.\n\n**Nondegeneracy.** An interval is **degenerate** when it has at most one element,\nand **nondegenerate** when it has at least two. For the four bounded forms with\nendpoints $a$ and $b$:\n\n- $[a,b]$ is nonempty exactly when $a \\le b$, and it is nondegenerate exactly\n  when $a < b$. It is the singleton $\\{a\\}$ when $a = b$.\n- $(a,b)$, $[a,b)$ and $(a,b]$ are nonempty exactly when $a < b$, and then each\n  is nondegenerate.\n\nThe only assertion here that is not immediate from the defining conditions is\nthat $a < b$ makes $(a,b)$ nonempty with at least two points. It holds because\n$a < (a+b)/2 < b$, which follows from $a < b$ by adding $a$, respectively $b$, to\nboth sides and halving ([[def-ordered-field]]); repeating the halving inside\n$(a, (a+b)/2)$ produces a second point.\n\n**Closed bounded intervals.** These are the sets $[a,b]$ with $a \\le b$, which is\nexactly the condition making them nonempty. They are the intervals the nested\ninterval property is stated for, and the phrase *closed bounded interval* always\ncarries the hypothesis $a \\le b$ in this library.\n\n**Length.** The **length** of a bounded interval presented by its endpoints\n$a \\le b$ is\n\n$$\\ell = b - a \\;\\ge\\; 0 .$$\n\nLength is attached to the presentation by endpoints and is not recovered from the\nset: $(a,b)$, $[a,b)$ and $(a,b]$ are all empty when $a = b$, and so is\n$(c,c)$ for any other $c$, while each of these presentations has length $0$, so\nnothing inconsistent arises; but the endpoints are named explicitly at every\npoint where a length is used in this library, and never inferred from the set.\nUnbounded intervals are assigned no length.",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-of-square-roots",
      "source_section": "Statement",
      "quote": "Let $F$ be a complete ordered field ([[def-complete-ordered-field]]). Then every\n$a \\in F$ with $a \\ge 0$ has a **unique** $s \\in F$ with $s \\ge 0$ and $s^2 = a$;\nwe write $s = \\sqrt{a}$. Consequently the positive elements of $F$ are exactly the\nnonzero squares: $x > 0$ if and only if $x = y^2$ for some $y \\neq 0$.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L5",
      "source": "fs-sqrt2-rational",
      "source_section": "Statement",
      "quote": "**False claim:** there exists $x \\in \\mathbb{Q}$ with $x^2 = 2$.",
      "uses": [
        "1.2",
        "2.1"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-rat-embeds-dense",
      "source_section": "Statement",
      "quote": "The map $q \\mapsto \\hat q$ ([[def-real-numbers]]) is an embedding of ordered\nfields. Every real is approximated by rationals: for $x \\in \\mathbb{R}$ and\nrational $\\varepsilon > 0$ there is $q \\in \\mathbb{Q}$ with\n$|x - \\hat q| < \\hat\\varepsilon$. Consequently, strictly between any two\nreals lies a rational.",
      "uses": [
        "1.2",
        "2.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-rationals",
      "source_section": "Definition",
      "quote": "On the set of pairs $(a,b)$ with $a, b \\in \\mathbb{Z}$ and $b \\ne 0$, define\n\n$$(a,b) \\sim (c,d) \\iff ad = cb \\quad \\text{in } \\mathbb{Z}.$$\n\nThis is an equivalence relation ([[lem-rat-equivalence]]). The **rationals** are\nthe quotient $\\mathbb{Q}$, and $[(a,b)]$ is written $a/b$.",
      "uses": [
        "1.2",
        "2.1"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-of-square-monotone",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field. For $a, b \\ge 0$:\n\n$$a < b \\iff a^2 < b^2, \\qquad a \\le b \\iff a^2 \\le b^2.$$\n\nMore generally, for arbitrary $a, b \\in F$, $a^2 < b^2 \\iff |a| < |b|$.",
      "uses": [
        "1.1",
        "2.1"
      ]
    },
    {
      "fact": "L6",
      "source": "cor-of-one-positive",
      "source_section": "Statement",
      "quote": "In any ordered field $F$ with positive cone $P$, the multiplicative identity\nsatisfies $0 < 1$; that is, $1 \\in P$.",
      "uses": [
        "1.1",
        "2.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-ordered-field",
      "source_section": "Definition",
      "quote": "An **ordered field** is a field $F$ ([[def-field]]) together with a subset\n$P \\subseteq F$, the set of **positive** elements (the *positive cone*),\nsatisfying:\n\n- **(O1) Trichotomy.** For each $x \\in F$, exactly one of the following holds:\n  $x \\in P$, or $x = 0$, or $-x \\in P$.\n- **(O2) Closure.** If $x, y \\in P$ then $x + y \\in P$ and $x \\cdot y \\in P$.\n\nWe write $x > 0$ for $x \\in P$ (read \"$x$ is positive\"), and define the order by\n\n$$a < b \\;:\\Longleftrightarrow\\; b - a \\in P, \\qquad a \\le b \\;:\\Longleftrightarrow\\; a < b \\text{ or } a = b.$$\n\nThus $a > b$ means $b < a$, and $a \\ge b$ means $b \\le a$. An element $x$ with\n$-x \\in P$ (equivalently $x < 0$) is called **negative**.",
      "uses": [
        "1.1",
        "2.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-complete-ordered-field",
      "source_section": "Definition",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and $S \\subseteq F$.\n\n- $u \\in F$ is an **upper bound** of $S$ if $s \\le u$ for all $s \\in S$; $S$ is\n  **bounded above** if it has an upper bound.\n- $u \\in F$ is a **least upper bound** (or **supremum**, $\\sup S$) of $S$ if $u$\n  is an upper bound of $S$ and $u \\le u'$ for every upper bound $u'$ of $S$.\n\n$F$ is a **complete ordered field** (equivalently, $F$ has the\n**least-upper-bound property**, or is **Dedekind complete**) if every nonempty\n$S \\subseteq F$ that is bounded above has a least upper bound in $F$.",
      "uses": [
        "1.1",
        "2.1"
      ]
    },
    {
      "fact": "L7",
      "source": "def-bounded-set",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ denotes the complete ordered field\n([[def-complete-ordered-field]]) and $S \\subseteq \\mathbb{R}$ is a subset of it.\n\nThe notions **upper bound** and **bounded above** are already fixed by\n[[def-complete-ordered-field]] and are only recalled here, never redefined:\n$u \\in \\mathbb{R}$ is an *upper bound* of $S$ if $s \\le u$ for all $s \\in S$, and\n$S$ is *bounded above* if it has at least one upper bound. The dual notions are:\n\n- $\\ell \\in \\mathbb{R}$ is a **lower bound** of $S$ if $\\ell \\le s$ for all $s \\in S$.\n- $S$ is **bounded below** if it has at least one lower bound.\n- $S$ is **bounded** if it is both bounded above and bounded below, that is, if\n  there are $\\ell, u \\in \\mathbb{R}$ with $\\ell \\le s \\le u$ for every $s \\in S$.",
      "uses": [
        "1.3"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "By [L4] there is a unique real $r \\ge 0$ with $r^2 = 2$, and $0 < r < 2$: indeed $r \\ne 0$ since $0^2 = 0 \\ne 2$, while $r \\ge 2$ would give $r^2 \\ge 4 > 2$ by [L6].",
      "step": "1.1",
      "inputs": [
        "L4",
        "L6"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "$r \\notin \\mathbb{Q}_{\\mathbb{R}}$: if $r = \\hat q$ for a rational $q$, then $\\widehat{q^2} = \\hat q \\cdot \\hat q = r^2 = 2 = \\hat 2$ by [L5], and injectivity of the embedding gives $q^2 = 2$ in $\\mathbb{Q}$, contradicting [L5].",
      "step": "1.2",
      "inputs": [
        "L5"
      ]
    },
    {
      "id": "step-1-3",
      "claim": "$E$ is bounded, since $0 \\le y \\le 2$ for every $y \\in E$ by the definition of $E$.",
      "step": "1.3",
      "inputs": [
        "given",
        "L7"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "Put $A := E \\cap (-\\infty, r)$ and $B := E \\cap (r, \\infty)$. Then $A \\cup B = E$, because every $y \\in E$ satisfies $y \\ne r$ by step 1.2 and hence $y < r$ or $y > r$; and both are nonempty, since $0 \\in A$ and $2 \\in B$ by step 1.1, both being rationals in $[0,2]$.",
      "step": "2.1",
      "inputs": [
        "step 1.1",
        "step 1.2",
        "L3",
        "L5",
        "L6"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "$A$ and $B$ are separated: $(-\\infty, r]$ is closed and contains $A$, so $\\overline{A} \\subseteq (-\\infty,r]$ by [L2] and hence $\\overline{A} \\cap B \\subseteq (-\\infty,r] \\cap (r,\\infty) = \\varnothing$; symmetrically $\\overline{B} \\subseteq [r,\\infty)$ and $A \\cap \\overline{B} = \\varnothing$. Hence $(A,B)$ is a disconnection of $E$ and $E$ is disconnected, so the claim [A1] is refuted.",
      "step": "3.1",
      "inputs": [
        "step 2.1",
        "A1",
        "L1",
        "L2",
        "L3"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The cex-rationals-in-an-interval-are-disconnected statement has no empty-set or empty-family boundary."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "The statement and step 1.1 explicitly treat the zero boundary."
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "The cex-rationals-in-an-interval-are-disconnected statement has no unit or first-index boundary."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "The statement and step 2.1 explicitly treat the equality, singleton, constant, or nonempty degeneracy."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "The statement and step 2.1 explicitly treat the interval or extended-real endpoint case."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Step 1.1 makes the relevant selection only after its existence or source-set nonemptiness is established."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The cex-rationals-in-an-interval-are-disconnected statement is not a biconditional requiring a forward implication."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The cex-rationals-in-an-interval-are-disconnected statement is not a biconditional requiring a reverse implication."
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
    "source": "cex-rationals-in-an-interval-are-disconnected",
    "sourcePage": "topology-of-r-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "thm-connected-subsets-of-r-are-intervals",
    "declared_target": "thm-connected-subsets-of-r-are-intervals",
    "target_statement_provenance": null,
    "targetPage": "topology-of-r",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-rationals-in-an-interval-are-disconnected",
    "sourcePage": "topology-of-r-examples",
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
    "source": "cex-rationals-in-an-interval-are-disconnected",
    "sourcePage": "topology-of-r-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "fs-sqrt2-rational",
    "declared_target": "fs-sqrt2-rational",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-rationals-in-an-interval-are-disconnected",
    "sourcePage": "topology-of-r-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "thm-of-square-roots",
    "declared_target": "thm-of-square-roots",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-rationals-in-an-interval-are-disconnected",
    "sourcePage": "topology-of-r-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "def-rationals",
    "declared_target": "def-rationals",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-rationals-in-an-interval-are-disconnected",
    "sourcePage": "topology-of-r-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "lem-rat-embeds-dense",
    "declared_target": "lem-rat-embeds-dense",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-rationals-in-an-interval-are-disconnected",
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
    "source": "cex-rationals-in-an-interval-are-disconnected",
    "sourcePage": "topology-of-r-examples",
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
    "source": "cex-rationals-in-an-interval-are-disconnected",
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
    "source": "cex-rationals-in-an-interval-are-disconnected",
    "sourcePage": "topology-of-r-examples",
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
    "source": "cex-rationals-in-an-interval-are-disconnected",
    "sourcePage": "topology-of-r-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "lem-of-square-monotone",
    "declared_target": "lem-of-square-monotone",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-rationals-in-an-interval-are-disconnected",
    "sourcePage": "topology-of-r-examples",
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
    "source": "cex-rationals-in-an-interval-are-disconnected",
    "sourcePage": "topology-of-r-examples",
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
    "source": "cex-rationals-in-an-interval-are-disconnected",
    "sourcePage": "topology-of-r-examples",
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
    "source": "cex-rationals-in-an-interval-are-disconnected",
    "sourcePage": "topology-of-r-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "cor-of-one-positive",
    "declared_target": "cor-of-one-positive",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Full text of every cited or declared item (16)

### `cex-closed-bounded-in-q-not-compact`

````markdown
---
id: cex-closed-bounded-in-q-not-compact
kind: counterexample
title: "$\\{q \\in \\mathbb{Q} : q \\ge 0,\\ q^2 < 2\\}$ is closed and bounded in $\\mathbb{Q}$ and is not compact"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [fs-closed-bounded-compact-without-completeness, def-rationals, fs-sqrt2-rational, thm-of-square-roots, def-open-cover-r, def-ordered-field, thm-rat-ordered-field, lem-of-square-monotone, def-abs-value, lem-of-abs-value]
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
    - title: "Heine-Borel theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem"
    - title: "Square root of 2 (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Square_root_of_2"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Example 2.21(g))"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** in every ordered field a closed bounded set is compact, so the
completeness hypothesis of the Heine-Borel characterisation is unnecessary
([[fs-closed-bounded-compact-without-completeness]]).

The witness is the ordered field $\mathbb{Q}$ ([[def-rationals]],
[[thm-rat-ordered-field]]) together with

$$S \;:=\; \{\, q \in \mathbb{Q} : q \ge 0 \text{ and } q^2 < 2 \,\} .$$

The set $S$ is bounded, is closed in $\mathbb{Q}$, and is not compact in
$\mathbb{Q}$, all with respect to the vocabulary of
[[def-open-cover-r]] transposed from $\mathbb{R}$ to $\mathbb{Q}$ exactly as set
out in [[fs-closed-bounded-compact-without-completeness]], where the refutation
is carried out in full. This item records the witness and says what makes it
work.

## Facts & Assumptions

**Given:** The ordered field $\mathbb{Q}$ and the set $S := \{\, q \in \mathbb{Q} : q \ge 0 \text{ and } q^2 < 2 \,\}$, with "open in $\mathbb{Q}$", "closed in $\mathbb{Q}$", "bounded" and "compact in $\mathbb{Q}$" as defined in [[fs-closed-bounded-compact-without-completeness]].

[A1] The refuted claim: in every ordered field a closed bounded set is compact.

[L1] $S$ is nonempty and bounded, has no greatest element, is closed in $\mathbb{Q}$, and the family $\{\, \{\, y \in \mathbb{Q} : y < r \,\} : r \in S \,\}$ is a cover of $S$ by sets open in $\mathbb{Q}$ with no finite subfamily covering $S$ ([[fs-closed-bounded-compact-without-completeness]]).

[L2] $\mathbb{Q}$ is a totally ordered field ([[thm-rat-ordered-field]], [[def-rationals]], [[def-ordered-field]]), with the absolute value of [[def-abs-value]] and its basic properties ([[lem-of-abs-value]]).

[L3] No rational number squares to $2$ ([[fs-sqrt2-rational]]).

[L4] Squaring is strictly monotone on the nonnegatives of an ordered field ([[lem-of-square-monotone]]).

## Counterexample

**Proof technique:** direct.

1.1 $\mathbb{Q}$ is an ordered field by [L2], so it is a legitimate instance of the claim [A1]. [A1, L2]

1.2 $S$ is bounded and closed in $\mathbb{Q}$ by [L1]; the closedness rests on the fact that no rational squares to $2$ ([L3]), which is what makes the complement of $S$ split into the rationals below $0$ and those whose square exceeds $2$, and on the monotonicity of squaring ([L4]), which is what makes each of those two pieces open in $\mathbb{Q}$. [L1, L2, L3, L4]

1.3 $S$ is not compact in $\mathbb{Q}$: the cover exhibited in [L1] consists of sets open in $\mathbb{Q}$, covers $S$ because $S$ has no greatest element, and admits no finite subfamily covering $S$, since the largest index of such a subfamily is itself a member of $S$ that the subfamily leaves uncovered. [L1, L2]

2.1 So the ordered field $\mathbb{Q}$ carries a bounded set that is closed in $\mathbb{Q}$ and not compact in $\mathbb{Q}$, and the claim [A1] is refuted. [step 1.1, step 1.2, step 1.3, A1, L1] ∎

## Remarks

- **What is closed in $\mathbb{Q}$ is not closed in $\mathbb{R}$.** Read inside
  $\mathbb{R}$, the same collection of numbers is bounded and fails to be
  closed: the real $\sqrt 2$, which exists by [[thm-of-square-roots]] and is not
  rational by [[fs-sqrt2-rational]], is adherent to it and absent from it. The
  set is closed in $\mathbb{Q}$
  precisely because the point that would have to be adjoined to close it does
  not lie in $\mathbb{Q}$. Closedness is a statement about a set inside an
  ambient field, not about the set alone.

- **Only one half of Heine-Borel fails here.** That a compact set is closed and
  bounded ([[lem-compact-implies-closed-and-bounded-r]]) uses no completeness at
  all, only the Archimedean property and the existence of maxima of finite sets;
  the converse
  ([[thm-heine-borel-r]] and [[thm-heine-borel-characterisation-r]]) is the half
  that spends completeness, and it is the half refuted here.

- **Why this witness rather than $\mathbb{Q} \cap [0,1]$.** Both work: a set with
  rational endpoints is also closed and bounded in $\mathbb{Q}$ and also fails to
  be compact there, but its non-compactness has to be produced by splitting it
  at some irrational chosen for the purpose. In $S$ the irrational is already
  built in, and the same fact, the irrationality of $\sqrt 2$
  ([[fs-sqrt2-rational]]), delivers both closedness in $\mathbb{Q}$ and the
  absence of a finite subcover. The witness therefore runs on exactly the
  mechanism of the false statement it refutes.
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

### `def-rationals`

````markdown
---
id: def-rationals
kind: definition
title: "The rationals as equivalence classes of pairs of integers"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-integers, thm-int-comm-ring]
justified_by: [lem-rat-equivalence]
aliases: []
landmark: true
short: "ℚ"
verification:
  precheck: n/a
  audited: 2026-07-24
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §4.2"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "E. Landau, Foundations of Analysis"
      url: "https://archive.org/details/foundationsofana0000land"
    - title: "Rational number — formal construction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Rational_number"
pipeline_run: null
---

## Definition

On the set of pairs $(a,b)$ with $a, b \in \mathbb{Z}$ and $b \ne 0$, define

$$(a,b) \sim (c,d) \iff ad = cb \quad \text{in } \mathbb{Z}.$$

This is an equivalence relation ([[lem-rat-equivalence]]). The **rationals** are
the quotient $\mathbb{Q}$, and $[(a,b)]$ is written $a/b$.

## Remarks

- The pair $(a,b)$ encodes the formal quotient $a/b$; the relation
  $ad = cb$ is "$a/b = c/d$" cleared of denominators, using only the ring
  arithmetic of $\mathbb{Z}$ ([[thm-int-comm-ring]]).
````

### `fs-sqrt2-rational`

````markdown
---
id: fs-sqrt2-rational
kind: false-statement
title: "FALSE: some rational number squares to 2"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-rationals, thm-rat-field]
aliases: []
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-24
  audited: 2026-07-24
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §4.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Square root of 2 — proofs of irrationality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Square_root_of_2"
pipeline_run: null
---

## Statement

**False claim:** there exists $x \in \mathbb{Q}$ with $x^2 = 2$.

## Facts & Assumptions

**Given:** The rationals as quotients of integer pairs ([[def-rationals]]).

[A1] Every rational can be written $a/b$ in lowest terms, with $a, b$ not both even (cancel common factors of $2$; the process terminates by well-ordering of $\mathbb{N}$).

[A2] Parity in $\mathbb{Z}$: if $k^2$ is even then $k$ is even (an odd $k = 2j+1$ has odd square $4j^2 + 4j + 1$).

## Refutation

**Proof technique:** contradiction.

1.1 Assume, for contradiction, that some $x \in \mathbb{Q}$ has $x^2 = 2$; write $x = a/b$ in lowest terms, $a, b$ not both even. [assume-contra, A1]

2.1 Clearing denominators: $a^2 = 2b^2$. [step 1.1, algebra]

3.1 $a^2$ is even, hence $a$ is even: $a = 2c$. [step 2.1, A2]

4.1 Substituting: $4c^2 = 2b^2$, so $b^2 = 2c^2$ is even, hence $b$ is even. [step 3.1, A2, algebra]

5.1 Both $a$ and $b$ are even, contradicting the lowest-terms choice of step 1.1; the assumption fails: no rational squares to $2$. [step 4.1, step 1.1, discharge-contradiction] ∎
````

### `lem-of-square-monotone`

````markdown
---
id: lem-of-square-monotone
kind: lemma
title: "Squaring is monotone on the nonnegatives"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-ordered-field, lem-of-sign-rules, lem-of-zero-mult, lem-of-abs-value]
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
pipeline_run: null
proof_strategy: direct
---

## Statement

Let $F$ be an ordered field. For $a, b \ge 0$:

$$a < b \iff a^2 < b^2, \qquad a \le b \iff a^2 \le b^2.$$

More generally, for arbitrary $a, b \in F$, $a^2 < b^2 \iff |a| < |b|$.

## Facts & Assumptions

**Given:** Elements $a, b$ of an ordered field $F$.

[L1] For a positive factor $s > 0$ and any $t$: $t > 0 \iff st > 0$; this is [[lem-of-sign-rules]] (the rule $c > 0 \Rightarrow (x < y \iff xc < yc)$ taken at $x = 0$, $y = t$, $c = s$, using $0 \cdot s = 0$, [[lem-of-zero-mult]]).

[L2] Trichotomy: for $a, b$ exactly one of $a < b$, $a = b$, $a > b$ holds; and a sum of two nonnegatives with at least one positive is positive ([[def-ordered-field]]).

[L3] $|x| \ge 0$ and $|x|^2 = x^2$ for every $x$ ([[lem-of-abs-value]]).

## Proof

**Proof technique:** direct.

1.1 The difference factors as $b^2 - a^2 = (b - a)(b + a)$. [algebra]

2.1 If $a, b \ge 0$ and $a < b$, then $b > 0$, so $b + a > 0$ by [L2], and $b - a > 0$; by [L1] with $s = b + a$ and $t = b - a$, $(b - a)(b + a) > 0$, i.e. $a^2 < b^2$. [L1, L2, step 1.1]

2.2 If $a, b \ge 0$ and $a^2 < b^2$, then $b^2 - a^2 > 0$, so $a, b$ are not both zero and $b + a > 0$ by [L2]; by [L1] with $s = b + a$, from $(b - a)(b + a) = b^2 - a^2 > 0$ we get $b - a > 0$, i.e. $a < b$. [L1, L2, step 1.1]

3.1 Hence for $a, b \ge 0$, $a < b \iff a^2 < b^2$. [step 2.1, step 2.2]

4.1 The $\le$ form follows by trichotomy: for $a, b \ge 0$, applying step 3.1 to the nonnegatives $b, a$ gives $a \le b \iff \lnot(b < a) \iff \lnot(b^2 < a^2) \iff a^2 \le b^2$. [step 3.1, L2]

5.1 For arbitrary $a, b$, [L3] gives $|a|, |b| \ge 0$ with $|a|^2 = a^2$ and $|b|^2 = b^2$; applying step 3.1 to $|a|, |b|$ yields $a^2 < b^2 \iff |a|^2 < |b|^2 \iff |a| < |b|$. [step 3.1, L3] ∎
````

### `lem-rat-embeds-dense`

````markdown
---
id: lem-rat-embeds-dense
kind: lemma
title: "The rationals embed densely in the reals"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-real-numbers, def-real-order, thm-reals-ordered-field, thm-reals-field, def-rational-cauchy-sequence, thm-rat-ordered-field, thm-rat-field]
aliases: []
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
    - title: "T. Tao, Analysis I, 3rd ed., §5.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Dense set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dense_set"
pipeline_run: null
---

## Statement

The map $q \mapsto \hat q$ ([[def-real-numbers]]) is an embedding of ordered
fields. Every real is approximated by rationals: for $x \in \mathbb{R}$ and
rational $\varepsilon > 0$ there is $q \in \mathbb{Q}$ with
$|x - \hat q| < \hat\varepsilon$. Consequently, strictly between any two
reals lies a rational.

## Facts & Assumptions

**Given:** A real $x = [(a_n)]$ and a rational $\varepsilon > 0$.

[L1] The orders of $\mathbb{Q}$ and $\mathbb{R}$; ordered-field arithmetic ([[thm-rat-ordered-field]], [[thm-reals-ordered-field]]).

[L2] Field arithmetic in $\mathbb{Q}$: $\varepsilon/2, \delta/4$ are positive rationals, and every nonzero rational $q$ has a reciprocal $1/q$ with $q \cdot (1/q) = 1$ ([[thm-rat-field]]).

[L3] Cauchy definition ([[def-rational-cauchy-sequence]]).

[L4] Real positivity via eventual rational lower bounds ([[def-real-order]]).

[L5] $\mathbb{R} = \mathcal{C}/\mathcal{N}$ is a field ([[thm-reals-field]]), and $0_{\mathbb{R}} = \hat 0$, $1_{\mathbb{R}} = \hat 1$ are the classes of the constant sequences ([[def-real-numbers]]). A multiplicative inverse there is unique: if $ab = 1_{\mathbb{R}} = ac$ then $b = b(ac) = (ba)c = c$.

## Proof

**Proof technique:** direct.

1.1 Embedding: constant sequences are Cauchy; $\hat q = \hat r$ iff the constant $q - r$ is null iff $q = r$; operations match termwise; and $q < r$ gives the constant lower bound $r - q > 0$, so $\hat q < \hat r$ and order is preserved and reflected. [L1, L4]

1.2 Fix $N$ with $|a_m - a_n| < \varepsilon/2$ for all $m, n \ge N$, and set $q = a_N$. [L3, L2]

2.1 The difference $\hat q - x$ has representative $(a_N - a_n)$ with $|a_N - a_n| < \varepsilon/2$ for $n \ge N$; hence both $\hat\varepsilon - (x - \hat q)$ and $\hat\varepsilon - (\hat q - x)$ have representatives eventually $> \varepsilon/2$, so both are positive: $|x - \hat q| < \hat\varepsilon$. [step 1.2, L4, L1]

2.2 Inverses: let $q$ be a nonzero rational. Then $\hat q \ne \hat 0 = 0_{\mathbb{R}}$ by the injectivity of step 1.1, and $1/q$ exists in $\mathbb{Q}$ by [L2]; since the operations match termwise (step 1.1), $\hat q \cdot \widehat{1/q} = \widehat{q \cdot (1/q)} = \hat 1 = 1_{\mathbb{R}}$. Inverses in $\mathbb{R}$ are unique by [L5], so $(\hat q)^{-1} = \widehat{1/q}$: the embedding preserves reciprocals. [step 1.1, L2, L5]

3.1 Density: let $x < y$; pick $\delta > 0$ rational and $N$ with the representative of $y - x$ eventually $> \delta$; set $\varepsilon = \delta/4$ and pick $q$ with $|x - \hat q| < \hat\varepsilon$; then $q' = q + 2\varepsilon$ satisfies $\hat q' - x \ge -\hat\varepsilon + 2\hat\varepsilon = \hat\varepsilon > 0$ and $y - \hat q' \ge \hat\delta - \hat\varepsilon - 2\hat\varepsilon = \hat\delta/4 > 0$, so $x < \hat q' < y$. [step 2.1, L4, L1, L2]

4.1 The rationals embed as an ordered subfield — injectively, preserving the order in both directions, the ring operations, and reciprocals — and they approximate every real arbitrarily well and separate any two reals. [step 1.1, step 2.2, step 3.1] ∎
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

### `thm-connected-subsets-of-r-are-intervals`

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

### `thm-of-square-roots`

````markdown
---
id: thm-of-square-roots
kind: theorem
title: "Square roots exist: a unique $\\sqrt{a} \\ge 0$ with $(\\sqrt{a})^2 = a$; the positives are $\\{x^2 : x \\neq 0\\}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-complete-ordered-field, lem-of-sign-rules, lem-of-square-monotone, lem-of-square-positive, prop-of-multiply-inequalities, def-ordered-field]
aliases: []
landmark: true
proof_strategy: contradiction
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
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 (Thm 1.21)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 8"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
    - title: "University of Colorado analysis notes: The real numbers"
      url: "https://spot.colorado.edu/~baggett/chap1.pdf"
pipeline_run: null
---

## Statement

Let $F$ be a complete ordered field ([[def-complete-ordered-field]]). Then every
$a \in F$ with $a \ge 0$ has a **unique** $s \in F$ with $s \ge 0$ and $s^2 = a$;
we write $s = \sqrt{a}$. Consequently the positive elements of $F$ are exactly the
nonzero squares: $x > 0$ if and only if $x = y^2$ for some $y \neq 0$.

## Facts & Assumptions

**Given:** A complete ordered field $F$ ([[def-complete-ordered-field]]), that is, an ordered field ([[def-ordered-field]]) with the least-upper-bound property, and an element $a \in F$ with $a \ge 0$.

[L1] Every nonempty subset of $F$ that is bounded above has a least upper bound in $F$ ([[def-complete-ordered-field]]).

[L2] Sign and scaling rules: a product of positives is positive, and for $c > 0$ one has $x < y \iff cx < cy$ ([[lem-of-sign-rules]]).

[L3] Squaring is strictly monotone on the nonnegatives: if $0 \le x < y$ then $x^2 < y^2$; in particular squaring is injective on $\{x : x \ge 0\}$ ([[lem-of-square-monotone]]).

[L4] A nonzero square is positive: if $y \neq 0$ then $y^2 > 0$ ([[lem-of-square-positive]]).

[L5] Multiplying inequalities of positives: if $0 < x < y$ and $0 < u < v$ then $xu < yv$ ([[prop-of-multiply-inequalities]]).

## Proof

**Proof technique:** contradiction.

1.1 If $a = 0$, then $s = 0$ satisfies $s \ge 0$ and $s^2 = 0 = a$, so existence holds; assume henceforth $a > 0$. [given, algebra]

1.2 Uniqueness holds once a root exists: if $u, v \ge 0$ satisfy $u^2 = v^2$, then strict monotonicity of squaring on nonnegatives [L3] rules out both $u < v$ and $u > v$, forcing $u = v$; so at most one $s \ge 0$ has $s^2 = a$. [L3, given]

1.3 Define $S = \{ t \in F : t \ge 0 \text{ and } t^2 \le a \}$; then $0 \in S$ because $0 \ge 0$ and $0^2 = 0 \le a$, so $S \neq \emptyset$. [given, algebra]

1.4 The element $1 + a$ is an upper bound of $S$: since $a > 0$ we have $1 + a > 1$, so any $t > 1 + a$ has $t > 1$ and $t > 0$, whence $t^2 = t \cdot t > 1 \cdot t = t > 1 + a > a$, giving $t \notin S$. [given, L2]

2.1 By completeness [L1], $s := \sup S$ exists in $F$; and since $0 \in S$ we have $s \ge 0$. [L1, step 1.3, step 1.4]

3.1 Assume, for contradiction, that $s^2 \neq a$; by trichotomy either $s^2 < a$ or $s^2 > a$. [assume-contra, step 2.1]

4.1 (Case $s^2 < a$.) Choose $h$ with $0 < h < 1$ and $h < \dfrac{a - s^2}{2s + 1}$, possible since $a - s^2 > 0$ and $2s + 1 \ge 1 > 0$; then $h^2 = h \cdot h < h \cdot 1 = h$ and $h(2s+1) < a - s^2$, so $(s+h)^2 = s^2 + 2sh + h^2 < s^2 + 2sh + h = s^2 + h(2s+1) < a$, whence $s + h \in S$ with $s + h > s$, contradicting that $s$ is an upper bound of $S$. [assume-case low, step 3.1, step 2.1, L2, L5, choose]

4.2 (Case $s^2 > a$.) Here $s > 0$ since $s^2 > a \ge 0$; choose $h$ with $0 < h < s$ and $h < \dfrac{s^2 - a}{2s}$, so $2sh < s^2 - a$ and $(s-h)^2 = s^2 - 2sh + h^2 \ge s^2 - 2sh > a$, hence every $t \in S$ has $t^2 \le a < (s-h)^2$ with $t \ge 0$ and $s - h > 0$, so $t < s - h$ by [L3]; thus $s - h$ is an upper bound of $S$ with $s - h < s$, contradicting that $s$ is the least upper bound. [assume-case high, step 3.1, step 2.1, L3, choose]

5.1 Both cases of the disjunction in step 3.1 give a contradiction, so the assumption fails and $s^2 = a$: a unique (by step 1.2) $s = \sqrt{a} \ge 0$ with $s^2 = a$ exists, and applying this to any $x > 0$ writes $x = (\sqrt{x})^2$ with $\sqrt{x} \neq 0$ while conversely any nonzero square is positive by [L4], so the positive elements of $F$ are exactly the nonzero squares. [step 4.1, step 4.2, step 3.1, step 1.2, L4, cases, discharge-contradiction] ∎
````

