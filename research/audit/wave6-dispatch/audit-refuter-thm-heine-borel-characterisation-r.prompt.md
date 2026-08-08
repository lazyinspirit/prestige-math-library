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

## Target item — `thm-heine-borel-characterisation-r`

Normalized current SHA-256: `0fb5ba6e01810feb0a5df5539449530f2e7184b295fed1d91596a810ffa89178`

The complete current item follows, including frontmatter:

````markdown
---
id: thm-heine-borel-characterisation-r
kind: theorem
title: "A subset of $\\mathbb{R}$ is compact if and only if it is closed and bounded"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-heine-borel-r, lem-compact-implies-closed-and-bounded-r, def-open-cover-r, def-interval, def-bounded-set, def-open-and-closed-in-r]
justified_by: []
forward_refs: [cex-unbounded-closed-set-not-compact, cex-closed-bounded-in-q-not-compact]
aliases: []
landmark: true
short: "compact $\\iff$ closed and bounded"
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
    - title: "Heine-Borel theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Thm 2.41)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §7.4"
      url: "https://www.jirka.org/ra/"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $K \subseteq \mathbb{R}$. Then $K$ is compact ([[def-open-cover-r]]) if and
only if $K$ is closed ([[def-open-and-closed-in-r]]) and bounded
([[def-bounded-set]]).

This is the Heine-Borel theorem in the form used everywhere below. The forward
implication is [[lem-compact-implies-closed-and-bounded-r]] and spends no
completeness, only the Archimedean property and the existence of maxima of
finite sets; the backward implication rests on
[[thm-heine-borel-r]] and therefore on the completeness of $\mathbb{R}$, and the
remarks below record where it fails without completeness.

## Facts & Assumptions

**Given:** A subset $K \subseteq \mathbb{R}$.

[L1] Open cover, finite subfamily and compactness; the empty subfamily covers $\varnothing$ ([[def-open-cover-r]]).

[L2] A compact subset of $\mathbb{R}$ is closed and bounded ([[lem-compact-implies-closed-and-bounded-r]]).

[L3] Every closed bounded interval $[\ell,u]$ with $\ell \le u$ is compact ([[thm-heine-borel-r]]).

[L4] $K$ is closed exactly when $\mathbb{R} \setminus K$ is open ([[def-open-and-closed-in-r]]).

[L5] $K$ is bounded exactly when there are $\ell, u \in \mathbb{R}$ with $\ell \le y \le u$ for every $y \in K$ ([[def-bounded-set]]).

[L6] $[\ell,u] = \{\, z \in \mathbb{R} : \ell \le z \le u \,\}$ ([[def-interval]]).

## Proof

**Proof technique:** direct.

1.1 If $K$ is compact then $K$ is closed and bounded, which is [L2]; this is the forward implication. [L2]

1.2 For the backward implication assume $K$ is closed and bounded. If $K = \varnothing$ then every open cover of $K$ admits the empty subfamily as a finite subcover, so $K$ is compact. [assume-hyp, L1]

1.3 Assume moreover $K \ne \varnothing$; fix $s \in K$ and, by [L5], reals $\ell, u$ with $\ell \le y \le u$ for every $y \in K$. Then $\ell \le s \le u$, so $\ell \le u$, and $K \subseteq [\ell,u]$ by [L6]. [assume-hyp, L5, L6, choose]

2.1 Let $\mathcal{U}$ be an open cover of $K$ and put $\mathcal{W} := \mathcal{U} \cup \{\mathbb{R} \setminus K\}$. Every member of $\mathcal{W}$ is open, since $\mathbb{R} \setminus K$ is open by [L4], and $\mathcal{W}$ covers $[\ell,u]$: a point of $[\ell,u]$ either lies in $K$, hence in some member of $\mathcal{U}$, or lies outside $K$, hence in $\mathbb{R} \setminus K$. [step 1.3, L1, L4]

3.1 By [L3] the interval $[\ell,u]$ is compact, so some finite subfamily $\{W_0, \dots, W_p\}$ of $\mathcal{W}$ covers $[\ell,u]$, where the case of an empty subfamily is possible only when $[\ell,u] = \varnothing$, which is excluded by $\ell \le u$. Put $\mathcal{V} := \{\, W_i : W_i \in \mathcal{U} \,\}$, a finite subfamily of $\mathcal{U}$. Then $K \subseteq \bigcup \mathcal{V}$: a point $y \in K \subseteq [\ell,u]$ lies in some $W_i$, and $W_i$ cannot be a member of $\mathcal{W}$ outside $\mathcal{U}$, because the only such member is $\mathbb{R} \setminus K$ and $y \in K$; so $W_i \in \mathcal{U}$ and $W_i \in \mathcal{V}$. [step 2.1, L1, L3, L6]

4.1 Every open cover of a nonempty closed bounded $K$ therefore has a finite subcover, so such a $K$ is compact; together with the empty case of step 1.2 this proves the backward implication, and step 1.1 is the forward one. [step 1.1, step 1.2, step 3.1, L1] ∎

## Remarks

- **A closed subset of a compact set is compact.** If $C \subseteq K$ with $K$
  compact and $C$ closed, then $C$ is bounded, being a subset of a bounded set,
  and closed by hypothesis, so it is compact by the theorem. The corresponding
  statement for arbitrary subsets is false: $(0,1) \subseteq [0,1]$ is bounded
  and not compact ([[cex-unbounded-closed-set-not-compact]]).

- **Both hypotheses are needed and neither implies the other.**
  [[cex-unbounded-closed-set-not-compact]] exhibits a closed set that is not
  bounded and a bounded set that is not closed, and neither is compact.

- **What the theorem is not.** It characterises compactness *for subsets of
  $\mathbb{R}$*. The two halves are of very different strengths: the forward
  half is elementary and general, while the backward half rests on the
  completeness of $\mathbb{R}$ and fails over $\mathbb{Q}$
  ([[fs-closed-bounded-compact-without-completeness]], witnessed by
  [[cex-closed-bounded-in-q-not-compact]]). Nothing here licenses "closed and
  bounded implies compact" in any other setting.
````

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "def-open-cover-r",
      "source_section": "Definition",
      "quote": "Let $K \\subseteq \\mathbb{R}$, with open sets as in\n[[def-open-and-closed-in-r]].\n\n- An **open cover** of $K$ is a family $\\mathcal{U}$ of open subsets of\n  $\\mathbb{R}$ with $K \\subseteq \\bigcup \\mathcal{U}$.\n- A **subcover** of $\\mathcal{U}$ is a subfamily $\\mathcal{V} \\subseteq\n  \\mathcal{U}$ that is still an open cover of $K$.\n- A subfamily $\\mathcal{V} \\subseteq \\mathcal{U}$ is **finite** when\n  $\\mathcal{V} = \\varnothing$ or there are $n \\in \\mathbb{N}$ and members\n  $U_0, \\dots, U_n$ of $\\mathcal{U}$ with $\\mathcal{V} = \\{U_0, \\dots, U_n\\}$;\n  repetitions in the list are allowed and harmless.\n- $K$ is **compact** when every open cover of $K$ has a finite subcover:\n  for every open cover $\\mathcal{U}$ of $K$, either $K = \\varnothing$ and the\n  empty subfamily covers it, or there are $n \\in \\mathbb{N}$ and\n  $U_0, \\dots, U_n \\in \\mathcal{U}$ with\n  $$K \\subseteq U_0 \\cup \\dots \\cup U_n .$$\n- $K$ is **sequentially compact** when every sequence $(x_k)$ of reals with\n  $x_k \\in K$ for all $k \\in \\mathbb{N}$ ([[def-sequence]]) has a subsequence\n  converging ([[def-real-limit]]) to some point of $K$; equivalently, when every\n  such sequence has a subsequential limit ([[def-subsequential-limit]]) that\n  lies in $K$.\n\n**Compactness is a property of $K$ alone.** The covering families range over open\nsubsets of $\\mathbb{R}$, not over sets open in some other ambient space, so the\nnotion defined here is compactness of $K$ as a subset of $\\mathbb{R}$. Nothing\nbelow relativises it to a smaller ambient field; where an ordered field other\nthan $\\mathbb{R}$ is meant, as in\n[[fs-closed-bounded-compact-without-completeness]], the whole vocabulary is set\nup again there for that field.\n\n**$\\varnothing$ is compact and sequentially compact.** The empty subfamily covers\nit, and there is no sequence with all terms in $\\varnothing$, so both conditions\nhold vacuously.",
      "uses": [
        "1.2",
        "2.1",
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-compact-implies-closed-and-bounded-r",
      "source_section": "Statement",
      "quote": "Let $K \\subseteq \\mathbb{R}$ be compact ([[def-open-cover-r]]). Then $K$ is\nclosed ([[def-open-and-closed-in-r]]) and bounded ([[def-bounded-set]]).\n\nTwo covers do the work, and they use the Archimedean property in its two\ndifferent forms. Boundedness is read off the cover of $\\mathbb{R}$ by the\nintervals $(-n,n)$, which needs the **cofinal** form, that the canonical naturals\nexceed every real ([[thm-of-archimedean]]). Closedness is read off the cover of\n$K$, for a point $x$ outside it, by the sets\n$\\{\\, y : |y - x| > 1/n \\,\\}$, which needs the **reciprocal** form, that the\nreciprocals of the naturals get below every positive real\n([[cor-archimedean-reciprocal]]); the cofinal form alone does not deliver it.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-heine-borel-r",
      "source_section": "Statement",
      "quote": "Let $a, b \\in \\mathbb{R}$ with $a \\le b$. Then the closed bounded interval\n$[a,b]$ ([[def-interval]]) is compact ([[def-open-cover-r]]): every family of\nopen subsets of $\\mathbb{R}$ whose union contains $[a,b]$ has a finite subfamily\nwhose union already contains $[a,b]$.\n\nThe proof is by repeated bisection. Supposing some open cover admits no finite\nsubcover, one halves the interval, keeps a half that still admits none, and\niterates; the halves shrink to a point, which the cover does reach, and a single\nmember of the cover then swallows a whole late-stage half. **The halving rule is\ncanonical**, taking the left half whenever the left half works, so the recursion\nuses [[thm-recursion]] and no choice principle.",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-open-and-closed-in-r",
      "source_section": "Definition",
      "quote": "Let $U, F \\subseteq \\mathbb{R}$, with neighbourhoods as in\n[[def-neighbourhood-r]].\n\n- $U$ is **open** when for every $x \\in U$ there is a real $\\varepsilon > 0$\n  with $N_\\varepsilon(x) \\subseteq U$.\n- $F$ is **closed** when its complement $\\mathbb{R} \\setminus F$ is open.\n- A set is **clopen** when it is both open and closed.\n\nThe whole of the topology of $\\mathbb{R}$ developed on this page rests on this\none definition: closedness is *defined* as openness of the complement, and every\nother description of a closed set on this page is a theorem\n([[thm-closure-characterisations-r]], [[lem-sequential-characterisation-of-closure-r]]).\n\n**$\\varnothing$ and $\\mathbb{R}$ are clopen.** The condition defining openness\nquantifies over the elements of the set, so it holds vacuously for\n$\\varnothing$; and for $x \\in \\mathbb{R}$ one has $N_1(x) \\subseteq \\mathbb{R}$,\nso $\\mathbb{R}$ is open. Since each of the two is the complement of the other,\neach is also closed.\n\n**Every neighbourhood is open.** Let $y \\in N_\\varepsilon(x)$ and put\n$\\delta := \\varepsilon - |y - x|$, which is $> 0$ because\n$y \\in N_\\varepsilon(x)$. The nesting property of [[def-neighbourhood-r]] gives\n$N_\\delta(y) \\subseteq N_\\varepsilon(x)$. So every point of $N_\\varepsilon(x)$\nhas a neighbourhood inside it.\n\n**The four open forms of [[def-interval]] are open sets.** Let $a, b \\in\n\\mathbb{R}$.\n\n- $(a,b)$: for $x$ with $a < x < b$, both $x - a > 0$ and $b - x > 0$, so\n  $\\delta := \\min\\{x - a,\\ b - x\\}$ is a positive real (the minimum of a\n  two-element set of reals exists, [[lem-finite-set-has-max]], [[def-max-min]]).\n  If $|y - x| < \\delta$ then $y > x - \\delta \\ge x - (x - a) = a$ and\n  $y < x + \\delta \\le x + (b - x) = b$, so $y \\in (a,b)$; hence\n  $N_\\delta(x) \\subseteq (a,b)$.\n- $(a,\\infty)$: for $x > a$ take $\\delta := x - a > 0$; then $|y - x| < \\delta$\n  gives $y > x - \\delta = a$.\n- $(-\\infty,b)$: for $x < b$ take $\\delta := b - x > 0$; then $|y - x| < \\delta$\n  gives $y < x + \\delta = b$.\n- $(-\\infty,\\infty) = \\mathbb{R}$: already treated above.\n\n**The four closed forms of [[def-interval]] are closed sets.** In each case the\ncomplement is shown open directly.\n\n- $[a,b]$: if $x \\notin [a,b]$ then $x < a$ or $x > b$ by trichotomy\n  ([[def-ordered-field]]). If $x < a$, take $\\delta := a - x > 0$; every\n  $y \\in N_\\delta(x)$ has $y < x + \\delta = a$, hence $y \\notin [a,b]$. If\n  $x > b$, take $\\delta := x - b > 0$; every $y \\in N_\\delta(x)$ has\n  $y > x - \\delta = b$, hence $y \\notin [a,b]$. So\n  $\\mathbb{R} \\setminus [a,b]$ is open.\n- $[a,\\infty)$: its complement is $(-\\infty,a)$, which is open by the previous\n  paragraph.\n- $(-\\infty,b]$: its complement is $(b,\\infty)$, which is open.\n- $(-\\infty,\\infty) = \\mathbb{R}$: its complement is $\\varnothing$, which is\n  open.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-bounded-set",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ denotes the complete ordered field\n([[def-complete-ordered-field]]) and $S \\subseteq \\mathbb{R}$ is a subset of it.\n\nThe notions **upper bound** and **bounded above** are already fixed by\n[[def-complete-ordered-field]] and are only recalled here, never redefined:\n$u \\in \\mathbb{R}$ is an *upper bound* of $S$ if $s \\le u$ for all $s \\in S$, and\n$S$ is *bounded above* if it has at least one upper bound. The dual notions are:\n\n- $\\ell \\in \\mathbb{R}$ is a **lower bound** of $S$ if $\\ell \\le s$ for all $s \\in S$.\n- $S$ is **bounded below** if it has at least one lower bound.\n- $S$ is **bounded** if it is both bounded above and bounded below, that is, if\n  there are $\\ell, u \\in \\mathbb{R}$ with $\\ell \\le s \\le u$ for every $s \\in S$.",
      "uses": [
        "1.3"
      ]
    },
    {
      "fact": "L6",
      "source": "def-interval",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]], [[def-ordered-field]]) with its order\n([[def-real-order]]).\n\nA subset $I \\subseteq \\mathbb{R}$ is **order-convex** when\n\n$$x, y \\in I \\text{ and } x \\le z \\le y \\;\\Longrightarrow\\; z \\in I .$$\n\nThe **intervals** of $\\mathbb{R}$ are the sets of the following nine forms, where\n$a, b \\in \\mathbb{R}$:\n\n| | bounded forms | | one-sided and full forms |\n|---|---|---|---|\n| $(a,b)$ | $\\{x : a < x < b\\}$ | $(a,\\infty)$ | $\\{x : a < x\\}$ |\n| $[a,b]$ | $\\{x : a \\le x \\le b\\}$ | $[a,\\infty)$ | $\\{x : a \\le x\\}$ |\n| $[a,b)$ | $\\{x : a \\le x < b\\}$ | $(-\\infty,b)$ | $\\{x : x < b\\}$ |\n| $(a,b]$ | $\\{x : a < x \\le b\\}$ | $(-\\infty,b]$ | $\\{x : x \\le b\\}$ |\n| | | $(-\\infty,\\infty)$ | $\\mathbb{R}$ |\n\nAn interval is **open** when both of its written endpoints are excluded, that is\nfor the forms $(a,b)$, $(a,\\infty)$, $(-\\infty,b)$ and $(-\\infty,\\infty)$; it is\n**closed** when both written endpoints are included, that is for $[a,b]$,\n$[a,\\infty)$, $(-\\infty,b]$ and $(-\\infty,\\infty)$. The forms $[a,b)$ and\n$(a,b]$ are **half-open**.\n\n**The symbols $\\pm\\infty$ are notation and not elements of $\\mathbb{R}$.** They\nmark which side carries no endpoint condition at all; the five forms in the right\ncolumn are defined by the displayed conditions on $x$ alone, and no arithmetic is\never performed with $\\infty$. This is the same refusal to extend $\\mathbb{R}$\nsilently that [[rem-sup-conventions]] records for suprema.\n\n**Every one of the nine forms is order-convex.** Each is defined by a conjunction\nof at most two conditions, each of the shape $a < x$, $a \\le x$, $x < b$ or\n$x \\le b$, and each such condition is inherited by an intermediate point: if\n$a < x$ and $x \\le z$ then $a < z$, and if $z \\le y$ and $y < b$ then $z < b$,\nby transitivity of the order ([[def-ordered-field]]). Applying this to whichever\none or two conditions define the form in question gives $z \\in I$ whenever\n$x, y \\in I$ and $x \\le z \\le y$.\n\n**Bounded intervals.** An interval is **bounded** ([[def-bounded-set]]) exactly\nwhen it is of one of the four forms in the left column: for those, $a$ is a lower\nbound and $b$ an upper bound. The other five forms are unbounded, on the side or\nsides written with $\\infty$; the verification is in the remarks below.\n\n**Nondegeneracy.** An interval is **degenerate** when it has at most one element,\nand **nondegenerate** when it has at least two. For the four bounded forms with\nendpoints $a$ and $b$:\n\n- $[a,b]$ is nonempty exactly when $a \\le b$, and it is nondegenerate exactly\n  when $a < b$. It is the singleton $\\{a\\}$ when $a = b$.\n- $(a,b)$, $[a,b)$ and $(a,b]$ are nonempty exactly when $a < b$, and then each\n  is nondegenerate.\n\nThe only assertion here that is not immediate from the defining conditions is\nthat $a < b$ makes $(a,b)$ nonempty with at least two points. It holds because\n$a < (a+b)/2 < b$, which follows from $a < b$ by adding $a$, respectively $b$, to\nboth sides and halving ([[def-ordered-field]]); repeating the halving inside\n$(a, (a+b)/2)$ produces a second point.\n\n**Closed bounded intervals.** These are the sets $[a,b]$ with $a \\le b$, which is\nexactly the condition making them nonempty. They are the intervals the nested\ninterval property is stated for, and the phrase *closed bounded interval* always\ncarries the hypothesis $a \\le b$ in this library.\n\n**Length.** The **length** of a bounded interval presented by its endpoints\n$a \\le b$ is\n\n$$\\ell = b - a \\;\\ge\\; 0 .$$\n\nLength is attached to the presentation by endpoints and is not recovered from the\nset: $(a,b)$, $[a,b)$ and $(a,b]$ are all empty when $a = b$, and so is\n$(c,c)$ for any other $c$, while each of these presentations has length $0$, so\nnothing inconsistent arises; but the endpoints are named explicitly at every\npoint where a length is used in this library, and never inferred from the set.\nUnbounded intervals are assigned no length.",
      "uses": [
        "1.3",
        "3.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "If $K$ is compact then $K$ is closed and bounded, which is [L2]; this is the forward implication.",
      "step": "1.1",
      "inputs": [
        "L2"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "For the backward implication assume $K$ is closed and bounded. If $K = \\varnothing$ then every open cover of $K$ admits the empty subfamily as a finite subcover, so $K$ is compact.",
      "step": "1.2",
      "inputs": [
        "assume-hyp",
        "L1"
      ]
    },
    {
      "id": "step-1-3",
      "claim": "Assume moreover $K \\ne \\varnothing$; fix $s \\in K$ and, by [L5], reals $\\ell, u$ with $\\ell \\le y \\le u$ for every $y \\in K$. Then $\\ell \\le s \\le u$, so $\\ell \\le u$, and $K \\subseteq [\\ell,u]$ by [L6].",
      "step": "1.3",
      "inputs": [
        "assume-hyp",
        "L5",
        "L6",
        "choose"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "Let $\\mathcal{U}$ be an open cover of $K$ and put $\\mathcal{W} := \\mathcal{U} \\cup \\{\\mathbb{R} \\setminus K\\}$. Every member of $\\mathcal{W}$ is open, since $\\mathbb{R} \\setminus K$ is open by [L4], and $\\mathcal{W}$ covers $[\\ell,u]$: a point of $[\\ell,u]$ either lies in $K$, hence in some member of $\\mathcal{U}$, or lies outside $K$, hence in $\\mathbb{R} \\setminus K$.",
      "step": "2.1",
      "inputs": [
        "step 1.3",
        "L1",
        "L4"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "By [L3] the interval $[\\ell,u]$ is compact, so some finite subfamily $\\{W_0, \\dots, W_p\\}$ of $\\mathcal{W}$ covers $[\\ell,u]$, where the case of an empty subfamily is possible only when $[\\ell,u] = \\varnothing$, which is excluded by $\\ell \\le u$. Put $\\mathcal{V} := \\{\\, W_i : W_i \\in \\mathcal{U} \\,\\}$, a finite subfamily of $\\mathcal{U}$. Then $K \\subseteq \\bigcup \\mathcal{V}$: a point $y \\in K \\subseteq [\\ell,u]$ lies in some $W_i$, and $W_i$ cannot be a member of $\\mathcal{W}$ outside $\\mathcal{U}$, because the only such member is $\\mathbb{R} \\setminus K$ and $y \\in K$; so $W_i \\in \\mathcal{U}$ and $W_i \\in \\mathcal{V}$.",
      "step": "3.1",
      "inputs": [
        "step 2.1",
        "L1",
        "L3",
        "L6"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "Every open cover of a nonempty closed bounded $K$ therefore has a finite subcover, so such a $K$ is compact; together with the empty case of step 1.2 this proves the backward implication, and step 1.1 is the forward one.",
      "step": "4.1",
      "inputs": [
        "step 1.1",
        "step 1.2",
        "step 3.1",
        "L1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "The statement and step 1.2 explicitly treat the empty-set or empty-family case."
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "The thm-heine-borel-characterisation-r statement has no zero-valued boundary."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "The statement and step 4.1 explicitly treat the unit or first-index boundary."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "The statement and step 4.1 explicitly treat the equality, singleton, constant, or nonempty degeneracy."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "The thm-heine-borel-characterisation-r statement has no interval or extended-real endpoint convention."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Step 1.3 makes the relevant selection only after its existence or source-set nonemptiness is established."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The thm-heine-borel-characterisation-r statement is not a biconditional requiring a forward implication."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The thm-heine-borel-characterisation-r statement is not a biconditional requiring a reverse implication."
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
    "source": "thm-heine-borel-characterisation-r",
    "sourcePage": "topology-of-r",
    "batch": "wave6-real-analysis-limits",
    "target": "thm-heine-borel-r",
    "declared_target": "thm-heine-borel-r",
    "target_statement_provenance": null,
    "targetPage": "topology-of-r",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-heine-borel-characterisation-r",
    "sourcePage": "topology-of-r",
    "batch": "wave6-real-analysis-limits",
    "target": "lem-compact-implies-closed-and-bounded-r",
    "declared_target": "lem-compact-implies-closed-and-bounded-r",
    "target_statement_provenance": null,
    "targetPage": "topology-of-r",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-heine-borel-characterisation-r",
    "sourcePage": "topology-of-r",
    "batch": "wave6-real-analysis-limits",
    "target": "def-open-cover-r",
    "declared_target": "def-open-cover-r",
    "target_statement_provenance": null,
    "targetPage": "topology-of-r",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-heine-borel-characterisation-r",
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
    "source": "thm-heine-borel-characterisation-r",
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
    "source": "thm-heine-borel-characterisation-r",
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
    "source": "thm-heine-borel-characterisation-r",
    "sourcePage": "topology-of-r",
    "batch": "wave6-real-analysis-limits",
    "target": "cex-unbounded-closed-set-not-compact",
    "declared_target": "cex-unbounded-closed-set-not-compact",
    "target_statement_provenance": null,
    "targetPage": "topology-of-r-examples",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "forward_ref",
    "kind": "forward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-heine-borel-characterisation-r",
    "sourcePage": "topology-of-r",
    "batch": "wave6-real-analysis-limits",
    "target": "cex-closed-bounded-in-q-not-compact",
    "declared_target": "cex-closed-bounded-in-q-not-compact",
    "target_statement_provenance": null,
    "targetPage": "topology-of-r-examples",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "forward_ref",
    "kind": "forward",
    "requires_semantic_audit": true
  }
]
```

## Full text of every cited or declared item (9)

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

### `cex-unbounded-closed-set-not-compact`

````markdown
---
id: cex-unbounded-closed-set-not-compact
kind: counterexample
title: "$\\mathbb{Z}$ is closed and not compact, and $(0,1)$ is bounded and not compact: neither hypothesis of Heine-Borel can be dropped"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-heine-borel-characterisation-r, def-open-cover-r, def-integers, thm-of-archimedean, def-interval, lem-of-q-embeds, lem-of-naturals-positive, lem-of-triangle-inequality, lem-of-abs-value, lem-finite-set-has-max, def-max-min, def-open-and-closed-in-r, def-neighbourhood-r, def-bounded-set, def-ordered-field, def-complete-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
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
    - title: "Integer (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Integer"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement refuted

**Refuted claims:** (i) every closed subset of $\mathbb{R}$ is compact; (ii)
every bounded subset of $\mathbb{R}$ is compact
([[def-open-cover-r]]).

Both are refuted, so neither hypothesis of
[[thm-heine-borel-characterisation-r]] can be dropped. The witness for (i) is
the set $\mathbb{Z}$ of integers of $\mathbb{R}$, which is closed and unbounded;
the witness for (ii) is the interval $(0,1)$, which is bounded and not closed.

**What $\mathbb{Z}$ means here.** Write
$$\mathbb{Z} \;:=\; \{\, n \cdot 1_{\mathbb{R}} : n \in \mathbb{N} \,\} \cup \{\, -(n \cdot 1_{\mathbb{R}}) : n \in \mathbb{N} \,\}, \qquad 0 \cdot 1_{\mathbb{R}} := 0,$$
the set of **canonical integers** of $\mathbb{R}$. By [[lem-of-q-embeds]] this is
exactly the image of the integers ([[def-integers]]) under the unique field
homomorphism $\mathbb{Q} \to \mathbb{R}$, which sends $n$ to $n \cdot
1_{\mathbb{R}}$ and $-n$ to $-(n \cdot 1_{\mathbb{R}})$; as is standard we write
$\mathbb{Z}$ for it. Nothing below uses that identification: every step is
carried out with the displayed description.

## Facts & Assumptions

**Given:** The set $\mathbb{Z}$ of canonical integers of $\mathbb{R}$ as displayed above, and the interval $(0,1)$.

[A1] The refuted claims: (i) every closed subset of $\mathbb{R}$ is compact; (ii) every bounded subset of $\mathbb{R}$ is compact.

[L1] A subset of $\mathbb{R}$ is compact exactly when it is closed and bounded ([[thm-heine-borel-characterisation-r]], [[def-open-cover-r]]).

[L2] Canonical naturals: $n \cdot 1_{\mathbb{R}} > 0$ for $n \ge 1$, the map $n \mapsto n \cdot 1_{\mathbb{R}}$ is strictly increasing on $\{1,2,\dots\}$ with $1 \cdot 1_{\mathbb{R}} = 1$, and $(m+n) \cdot 1_{\mathbb{R}} = m \cdot 1_{\mathbb{R}} + n \cdot 1_{\mathbb{R}}$ for $m, n \ge 1$ ([[lem-of-naturals-positive]]).

[L3] Archimedean property: for every $x \in \mathbb{R}$ there is a natural $n \ge 1$ with $x < n \cdot 1_{\mathbb{R}}$ ([[thm-of-archimedean]]).

[L4] $U$ is open when each of its points has a neighbourhood inside it; $F$ is closed when $\mathbb{R} \setminus F$ is open; $N_\varepsilon(x) = \{\, y : |y-x| < \varepsilon \,\}$; each interval $(a,b)$ is an open set ([[def-open-and-closed-in-r]], [[def-neighbourhood-r]], [[def-interval]]).

[L5] A set is bounded when it has a lower and an upper bound ([[def-bounded-set]]).

[L6] Triangle inequality: $|p + q| \le |p| + |q|$ ([[lem-of-triangle-inequality]]); $|z| = z$ for $z \ge 0$ and $|z| = -z$ for $z < 0$, and $|-z| = |z|$ ([[lem-of-abs-value]]).

[L7] Every nonempty finite set of reals has a minimum, which is one of its members ([[lem-finite-set-has-max]], [[def-max-min]]).

[L8] $0 < 1$, so $2 := 1+1 > 0$ and $0 < d \cdot 2^{-1} < d$ for $d > 0$; adding a constant preserves an inequality and the order is total and transitive ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Counterexample

**Proof technique:** direct.

1.1 Distinct elements of $\mathbb{Z}$ differ by at least $1$ in absolute value. For $m, n \in \mathbb{N}$ with $m < n$: if $m = 0$ then $n \cdot 1_{\mathbb{R}} - 0 = n \cdot 1_{\mathbb{R}} \ge 1$ by [L2], since $n \ge 1$ and the map is increasing with value $1$ at $1$; and if $m \ge 1$ then $m + (n-m) = n$ with $n - m \ge 1$ gives $n \cdot 1_{\mathbb{R}} - m \cdot 1_{\mathbb{R}} = (n-m) \cdot 1_{\mathbb{R}} \ge 1$ by [L2]. The same computation after negation covers two distinct elements of the form $-(n \cdot 1_{\mathbb{R}})$, using $|-z| = |z|$ from [L6]. Finally, for distinct $n \cdot 1_{\mathbb{R}}$ and $-(m \cdot 1_{\mathbb{R}})$ at least one of $n, m$ is $\ge 1$, so their difference $n \cdot 1_{\mathbb{R}} + m \cdot 1_{\mathbb{R}}$ is a sum of two nonnegative terms one of which is $\ge 1$, hence is $\ge 1$. [given, L2, L6, L8]

1.2 $\mathbb{Z}$ is not bounded: given any $x \in \mathbb{R}$, [L3] supplies a natural $n \ge 1$ with $x < n \cdot 1_{\mathbb{R}}$, and $n \cdot 1_{\mathbb{R}} \in \mathbb{Z}$, so no $x$ is an upper bound of $\mathbb{Z}$ and $\mathbb{Z}$ has no upper bound at all. [given, L3, L5]

1.3 $(0,1)$ is bounded, since $0 \le y \le 1$ for every $y \in (0,1)$, and it is not closed: $0 \notin (0,1)$, while for every real $\varepsilon > 0$ the point $t := \min\{\varepsilon, 1\} \cdot 2^{-1}$ satisfies $0 < t < 1$ and $|t - 0| = t \le \varepsilon \cdot 2^{-1} < \varepsilon$ by [L7] and [L8], so $t \in N_\varepsilon(0) \cap (0,1)$ and no neighbourhood of $0$ lies in the complement of $(0,1)$. [L4, L5, L6, L7, L8]

2.1 $\mathbb{Z}$ is closed: let $x \in \mathbb{R} \setminus \mathbb{Z}$. The neighbourhood $N_{1 \cdot 2^{-1}}(x)$ contains at most one element of $\mathbb{Z}$, since two distinct elements $z, z'$ of it would satisfy $|z - z'| = |(z - x) + (x - z')| \le |z - x| + |x - z'| < 1 \cdot 2^{-1} + 1 \cdot 2^{-1} = 1$ by [L6], contradicting step 1.1. If it contains none, then $N_{1 \cdot 2^{-1}}(x) \cap \mathbb{Z} = \varnothing$. If it contains exactly one element $z$, then $z \ne x$ because $x \notin \mathbb{Z}$, so $|x - z| > 0$, and $\varepsilon := \min\{\, 1 \cdot 2^{-1},\ |x - z| \,\}$ is positive by [L7]; then $N_\varepsilon(x) \subseteq N_{1 \cdot 2^{-1}}(x)$, so any element of $\mathbb{Z}$ in $N_\varepsilon(x)$ must be $z$, whereas $|z - x| \ge \varepsilon$ excludes $z$. In both cases some neighbourhood of $x$ misses $\mathbb{Z}$, so $\mathbb{R} \setminus \mathbb{Z}$ is open. [step 1.1, L4, L6, L7, L8]

3.1 By step 2.1 the set $\mathbb{Z}$ is closed and by step 1.2 it is not bounded, so [L1] denies that it is compact, refuting claim (i) of [A1]; and by step 1.3 the set $(0,1)$ is bounded and not closed, so [L1] denies that it is compact, refuting claim (ii). Neither hypothesis of [L1] is therefore removable. [step 1.2, step 1.3, step 2.1, A1, L1] ∎

## Remarks

- **The two failures are of opposite kinds.** $\mathbb{Z}$ has all its limit
  points, of which it has none, and escapes to infinity; $(0,1)$ stays inside a
  bounded region and loses its two endpoints. Compactness rules out both, and
  [[thm-heine-borel-characterisation-r]] says these are the only two ways to
  fail for a subset of $\mathbb{R}$.

- **An explicit cover for each.** For $\mathbb{Z}$ the intervals $(-n,n)$ with
  $n \ge 1$ cover $\mathbb{R}$ and any finite subfamily has union $(-N,N)$, which
  omits the element $N \cdot 1_{\mathbb{R}}$ of $\mathbb{Z}$. For $(0,1)$ the
  cover $\{(1/k,1)\}$ of
  [[cex-open-cover-of-unit-interval-no-finite-subcover]] does the same job.
  Neither cover is needed above, since [[thm-heine-borel-characterisation-r]]
  already converts the failure of a hypothesis into the failure of compactness.

- **$\mathbb{Z}$ is closed and has no limit points at all**, which is what the
  separation computation really shows: its points are uniformly apart. A set of
  that kind is closed for free, and it is the standard example of a closed set
  that is as far from perfect as possible, every one of its points being
  isolated ([[def-perfect-set-r]]).
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

### `def-open-cover-r`

````markdown
---
id: def-open-cover-r
kind: definition
title: "Open cover, subcover, compact subset of $\\mathbb{R}$ (every open cover has a finite subcover), and sequentially compact subset"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-open-and-closed-in-r, def-sequence, def-subsequential-limit, def-real-limit]
justified_by: []
aliases: [def-compact-in-r, def-sequentially-compact-in-r]
landmark: true
short: "open cover, compact, sequentially compact"
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
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "Sequentially compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sequentially_compact_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Def. 2.31, 2.32)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §7.4"
      url: "https://www.jirka.org/ra/"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Let $K \subseteq \mathbb{R}$, with open sets as in
[[def-open-and-closed-in-r]].

- An **open cover** of $K$ is a family $\mathcal{U}$ of open subsets of
  $\mathbb{R}$ with $K \subseteq \bigcup \mathcal{U}$.
- A **subcover** of $\mathcal{U}$ is a subfamily $\mathcal{V} \subseteq
  \mathcal{U}$ that is still an open cover of $K$.
- A subfamily $\mathcal{V} \subseteq \mathcal{U}$ is **finite** when
  $\mathcal{V} = \varnothing$ or there are $n \in \mathbb{N}$ and members
  $U_0, \dots, U_n$ of $\mathcal{U}$ with $\mathcal{V} = \{U_0, \dots, U_n\}$;
  repetitions in the list are allowed and harmless.
- $K$ is **compact** when every open cover of $K$ has a finite subcover:
  for every open cover $\mathcal{U}$ of $K$, either $K = \varnothing$ and the
  empty subfamily covers it, or there are $n \in \mathbb{N}$ and
  $U_0, \dots, U_n \in \mathcal{U}$ with
  $$K \subseteq U_0 \cup \dots \cup U_n .$$
- $K$ is **sequentially compact** when every sequence $(x_k)$ of reals with
  $x_k \in K$ for all $k \in \mathbb{N}$ ([[def-sequence]]) has a subsequence
  converging ([[def-real-limit]]) to some point of $K$; equivalently, when every
  such sequence has a subsequential limit ([[def-subsequential-limit]]) that
  lies in $K$.

**Compactness is a property of $K$ alone.** The covering families range over open
subsets of $\mathbb{R}$, not over sets open in some other ambient space, so the
notion defined here is compactness of $K$ as a subset of $\mathbb{R}$. Nothing
below relativises it to a smaller ambient field; where an ordered field other
than $\mathbb{R}$ is meant, as in
[[fs-closed-bounded-compact-without-completeness]], the whole vocabulary is set
up again there for that field.

**$\varnothing$ is compact and sequentially compact.** The empty subfamily covers
it, and there is no sequence with all terms in $\varnothing$, so both conditions
hold vacuously.

## Remarks

- **Why "finite" is spelled out by listing.** A finite subfamily is described
  here as one that can be written $\{U_0, \dots, U_n\}$ with $n \in \mathbb{N}$,
  which is exactly the form every proof on this page produces or consumes: the
  bisection argument of [[thm-heine-borel-r]] produces a one-member list, and
  the arguments of [[lem-compact-implies-closed-and-bounded-r]] consume a list by
  taking a maximum over it ([[lem-finite-set-has-max]]). Since $\mathbb{N}$
  contains $0$, the shortest nonempty list is $\{U_0\}$.

- **The two notions are not defined to be equivalent, and their equivalence is a
  theorem.** For subsets of $\mathbb{R}$ it is
  [[thm-compact-iff-sequentially-compact-r]]; both of its implications run
  through the characterisation of compactness by closed and bounded, and its
  forward implication additionally uses Bolzano-Weierstrass. Neither implication
  is formal.

- **Compactness is not inherited by subsets, but by closed subsets.** A closed
  subset of a compact set is compact, which is immediate from
  [[thm-heine-borel-characterisation-r]] once that is available, whereas
  $(0,1) \subseteq [0,1]$ shows that an arbitrary subset of a compact set need
  not be compact.

- **The empty cover.** If $K \ne \varnothing$ then no open cover of $K$ is
  empty, so the case distinction in the definition of compactness only ever
  matters for $K = \varnothing$; it is written out so that the definition does
  not quietly assume $K$ nonempty.
````

### `fs-closed-bounded-compact-without-completeness`

````markdown
---
id: fs-closed-bounded-compact-without-completeness
kind: false-statement
title: "FALSE: in every ordered field a closed bounded set is compact, so Heine-Borel needs no completeness"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-heine-borel-characterisation-r, def-open-cover-r, def-open-and-closed-in-r, def-neighbourhood-r, def-bounded-set, def-rationals, thm-rat-ordered-field, thm-rat-field, fs-sqrt2-rational, def-ordered-field, def-abs-value, lem-of-abs-value, lem-of-square-monotone, lem-of-add-order, lem-of-sign-rules, cor-of-one-positive, lem-of-inverse-positive]
justified_by: []
forward_refs: [cex-closed-bounded-in-q-not-compact]
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
    - title: "Heine-Borel theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem"
    - title: "Rational number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Rational_number"
    - title: "Square root of 2 (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Square_root_of_2"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Example 2.21(g) and Thm 2.41)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "MIT 18.100, Test 1 solutions"
      url: "https://math.mit.edu/classes/18.100/Test1_sol.pdf"
pipeline_run: null
---

## Statement

**False claim:** in every ordered field $F$ ([[def-ordered-field]]), a subset of
$F$ that is closed in $F$ and bounded is compact in $F$; consequently the
completeness hypothesis in [[thm-heine-borel-characterisation-r]] is
unnecessary.

**How the claim must be read.** It speaks of an arbitrary ordered field, so the
whole vocabulary has to be available there, and it is: for $x \in F$ and
$\varepsilon \in F$ with $\varepsilon > 0$ put
$N^{F}_\varepsilon(x) := \{\, y \in F : |y - x| < \varepsilon \,\}$, using the
absolute value of [[def-abs-value]], which is defined in every ordered field;
call $U \subseteq F$ **open in $F$** when every $x \in U$ admits
$\varepsilon > 0$ in $F$ with $N^{F}_\varepsilon(x) \subseteq U$, call
$C \subseteq F$ **closed in $F$** when $F \setminus C$ is open in $F$, call
$S \subseteq F$ **bounded** when some $\ell, u \in F$ satisfy $\ell \le s \le u$
for all $s \in S$, and call $S$ **compact in $F$** when every family of sets open
in $F$ whose union contains $S$ has a finite subfamily whose union already
contains $S$. These are the definitions of [[def-neighbourhood-r]],
[[def-open-and-closed-in-r]], [[def-bounded-set]] and [[def-open-cover-r]]
transposed word for word from $\mathbb{R}$ to $F$; with $F = \mathbb{R}$ they are
literally those definitions.

The refutation takes $F = \mathbb{Q}$ ([[def-rationals]],
[[thm-rat-ordered-field]]) and the set of nonnegative rationals whose square is
below $2$.

## Facts & Assumptions

**Given:** The ordered field $\mathbb{Q}$ and the set $S := \{\, q \in \mathbb{Q} : q \ge 0 \text{ and } q^2 < 2 \,\}$, together with the notions "open in $\mathbb{Q}$", "closed in $\mathbb{Q}$", "bounded" and "compact in $\mathbb{Q}$" as set out in the Statement. Here $2 := 1 + 1$ and $4 := 2 \cdot 2$ in $\mathbb{Q}$.

[A1] The false claim: in every ordered field, a closed bounded subset is compact.

[L1] $\mathbb{Q}$ is a field and the relation of its order makes it a totally ordered field: the order is total and transitive, adding a constant preserves it, and a product of positives is positive ([[thm-rat-ordered-field]], [[thm-rat-field]], [[def-rationals]], [[def-ordered-field]]).

[L2] Absolute value in an ordered field: $|z| \ge 0$; $|z| = z$ for $z \ge 0$ and $|z| = -z$ for $z < 0$; and for $c > 0$ one has $|z| < c$ exactly when $-c < z < c$ ([[def-abs-value]], [[lem-of-abs-value]]).

[L3] No rational number squares to $2$ ([[fs-sqrt2-rational]]).

[L4] In an ordered field, squaring is strictly monotone on the nonnegatives: $0 \le a < b$ implies $a^2 < b^2$, and $0 \le a \le b$ implies $a^2 \le b^2$ ([[lem-of-square-monotone]]).

[L5] Ordered-field arithmetic: $0 < 1$, hence $0 < 2 < 4$ and $2 \ne 0$; a positive element has a positive inverse; adding a constant and multiplying by a positive preserve an inequality ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[lem-of-inverse-positive]], [[def-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Refutation

**Proof technique:** direct.

1.1 $S$ is nonempty and bounded: $1 \in S$ because $1 \ge 0$ and $1^2 = 1 < 2$ by [L5]; and every $q \in S$ satisfies $0 \le q < 2$, since $q \ge 2 \ge 0$ would give $q^2 \ge 2^2 = 4 > 2$ by [L4] and [L5], contradicting $q^2 < 2$. [L1, L4, L5]

1.2 $S$ has no greatest element: let $q \in S$ and put $h := \min\{\, 1,\ (2 - q^2)(2q+2)^{-1} \,\}$, a definition by cases on the total order of $\mathbb{Q}$; here $2q + 2 > 0$ because $q \ge 0$, and $2 - q^2 > 0$, so both entries are positive and $h > 0$ with $h \le 1$. Put $r := q + h$, so $r > q \ge 0$. Then $h^2 \le h$ because $0 < h \le 1$, and $h(2q+1) \le (2-q^2)(2q+1)(2q+2)^{-1} < 2 - q^2$ because $(2q+1)(2q+2)^{-1} < 1$ and $2 - q^2 > 0$; hence $r^2 = q^2 + 2qh + h^2 \le q^2 + h(2q+1) < q^2 + (2 - q^2) = 2$, so $r \in S$ and $q < r$. [L1, L4, L5]

1.3 $S$ is closed in $\mathbb{Q}$: let $q \in \mathbb{Q} \setminus S$, so $q < 0$, or $q \ge 0$ and $q^2 \ge 2$, in which case $q^2 \ne 2$ by [L3] gives $q^2 > 2$. If $q < 0$, put $\varepsilon := -q > 0$; every $y$ with $|y - q| < \varepsilon$ satisfies $y < q + \varepsilon = 0$ by [L2], hence $y \notin S$. If $q \ge 0$ and $q^2 > 2$, then $q \ne 0$ since $0^2 = 0 < 2$, so $q > 0$; put $\varepsilon := \min\{\, q,\ (q^2 - 2)(2q)^{-1} \,\} > 0$, again a definition by cases. Every $y$ with $|y - q| < \varepsilon$ satisfies $y > q - \varepsilon \ge 0$, so $y^2 > (q - \varepsilon)^2$ by [L4], and $(q-\varepsilon)^2 = q^2 - 2q\varepsilon + \varepsilon^2 \ge q^2 - 2q\varepsilon \ge q^2 - (q^2 - 2) = 2$, whence $y^2 > 2$ and $y \notin S$. In both cases a neighbourhood of $q$ misses $S$, so $\mathbb{Q} \setminus S$ is open in $\mathbb{Q}$. [L1, L2, L3, L4, L5]

1.4 For $r \in S$ put $B_r := \{\, y \in \mathbb{Q} : y < r \,\}$; each $B_r$ is open in $\mathbb{Q}$, since $y \in B_r$ and $\varepsilon := r - y > 0$ give, for every $z$ with $|z - y| < \varepsilon$, the inequality $z < y + \varepsilon = r$ by [L2]. [given, L1, L2]

2.1 The family $\mathcal{U} := \{\, B_r : r \in S \,\}$ is a cover of $S$ by sets open in $\mathbb{Q}$: given $q \in S$, step 1.2 supplies $r \in S$ with $q < r$, so $q \in B_r$. [step 1.2, step 1.4, L1]

2.2 $\mathcal{U}$ has no finite subfamily covering $S$: the empty subfamily fails because $S \ne \varnothing$ by step 1.1; and a nonempty finite subfamily is $\{B_{r_0}, \dots, B_{r_p}\}$ with every $r_i \in S$, so an induction on $p$ using the totality of the order of $\mathbb{Q}$ produces $R := \max\{r_0, \dots, r_p\}$, one of the $r_i$ and hence a member of $S$; for each $i$ one has $r_i \le R$, so $R < r_i$ fails and $R \notin B_{r_i}$. Thus the element $R$ of $S$ lies in no member of the subfamily. [step 1.1, step 1.4, L1]

3.1 The set $S$ is bounded by step 1.1 and closed in $\mathbb{Q}$ by step 1.3, and by steps 2.1 and 2.2 it is not compact in $\mathbb{Q}$, while $\mathbb{Q}$ is an ordered field by [L1]. So the claim [A1] fails at $F = \mathbb{Q}$ and is false. [step 1.1, step 1.3, step 2.1, step 2.2, A1, L1] ∎

## Remarks

- **What the false claim gets wrong.** [[thm-heine-borel-characterisation-r]]
  has two halves of very different strengths. The half that a compact set is
  closed and bounded ([[lem-compact-implies-closed-and-bounded-r]]) uses no
  completeness at all, only the Archimedean property and the existence of maxima
  of finite sets. The converse half is
  the one that rests on completeness, through [[thm-heine-borel-r]] and the
  nested interval property, and it is exactly the half refuted above.

- **Where the missing point is.** The cover of step 2.1 creeps up on a bound that
  $\mathbb{Q}$ does not contain. In $\mathbb{R}$ that bound exists, namely
  $\sqrt 2$ ([[thm-of-square-roots]]), and it is not rational
  ([[fs-sqrt2-rational]]); the set $S$ is thus closed in $\mathbb{Q}$ precisely
  because the point that would have to be adjoined to close it is absent from
  $\mathbb{Q}$. Read inside $\mathbb{R}$, the same set of numbers is bounded and
  not closed, and it is not compact there either.

- **This is a statement about ordered fields, and it is refuted in that
  generality.** One counterexample field suffices to refute a claim about every
  ordered field, and $\mathbb{Q}$ is the smallest one available here. Nothing
  above uses any ordered-field lemma outside its stated generality: [L2], [L4]
  and [L5] are all proved for an arbitrary ordered field, and the results of this
  page that are stated for $\mathbb{R}$ only are not applied to $\mathbb{Q}$.

- **The named witness** is [[cex-closed-bounded-in-q-not-compact]]; the
  refutation is carried out here.
````

### `lem-compact-implies-closed-and-bounded-r`

````markdown
---
id: lem-compact-implies-closed-and-bounded-r
kind: lemma
title: "A compact subset of $\\mathbb{R}$ is closed and bounded"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-open-cover-r, def-open-and-closed-in-r, def-bounded-set, def-neighbourhood-r, def-interval, thm-of-archimedean, cor-archimedean-reciprocal, lem-of-abs-value, lem-of-triangle-inequality, lem-finite-set-has-max, def-max-min, lem-of-naturals-positive, lem-of-inverse-positive, def-complete-ordered-field, def-ordered-field]
justified_by: []
forward_refs: [cex-unbounded-closed-set-not-compact]
aliases: []
landmark: false
short: "compact $\\Rightarrow$ closed and bounded"
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
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "Heine-Borel theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Thm 2.34, 2.35)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §7.4"
      url: "https://www.jirka.org/ra/"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $K \subseteq \mathbb{R}$ be compact ([[def-open-cover-r]]). Then $K$ is
closed ([[def-open-and-closed-in-r]]) and bounded ([[def-bounded-set]]).

Two covers do the work, and they use the Archimedean property in its two
different forms. Boundedness is read off the cover of $\mathbb{R}$ by the
intervals $(-n,n)$, which needs the **cofinal** form, that the canonical naturals
exceed every real ([[thm-of-archimedean]]). Closedness is read off the cover of
$K$, for a point $x$ outside it, by the sets
$\{\, y : |y - x| > 1/n \,\}$, which needs the **reciprocal** form, that the
reciprocals of the naturals get below every positive real
([[cor-archimedean-reciprocal]]); the cofinal form alone does not deliver it.

## Facts & Assumptions

**Given:** A compact set $K \subseteq \mathbb{R}$. Throughout, $n$ denotes both a natural number $\ge 1$ and the canonical natural $n \cdot 1_{\mathbb{R}}$ of $\mathbb{R}$, as is standard.

[L1] Open cover, finite subfamily and compactness: every open cover of $K$ has a subcover that is empty or of the form $\{U_0, \dots, U_p\}$ with $p \in \mathbb{N}$ ([[def-open-cover-r]]).

[L2] $U$ is open when every $x \in U$ admits $\varepsilon > 0$ with $N_\varepsilon(x) \subseteq U$; $K$ is closed when $\mathbb{R} \setminus K$ is open; each of the forms $(a,b)$, $(a,\infty)$, $(-\infty,b)$, $\mathbb{R}$ is an open set ([[def-open-and-closed-in-r]], [[def-interval]]).

[L3] $N_\varepsilon(x) = \{\, y : |y - x| < \varepsilon \,\}$ ([[def-neighbourhood-r]]).

[L4] $K$ is bounded when there are $\ell, u$ with $\ell \le y \le u$ for every $y \in K$ ([[def-bounded-set]]).

[L5] Archimedean property, cofinal form: for every $z \in \mathbb{R}$ there is a natural $n \ge 1$ with $z < n$ ([[thm-of-archimedean]]).

[L6] Archimedean property, reciprocal form: for every real $\varepsilon > 0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

[L7] Absolute value: $|z| \ge 0$, $|z| \ge z$, $|z| \ge -z$, and $|z| = 0$ exactly when $z = 0$ ([[lem-of-abs-value]]).

[L8] Triangle inequality: $|p + q| \le |p| + |q|$ ([[lem-of-triangle-inequality]]).

[L9] Every nonempty finite set of reals has a maximum, which is one of its members ([[lem-finite-set-has-max]], [[def-max-min]]).

[L10] Canonical naturals: $n \cdot 1_{\mathbb{R}} > 0$ for $n \ge 1$ and $m \le n$ in $\mathbb{N}$ gives $m \cdot 1_{\mathbb{R}} \le n \cdot 1_{\mathbb{R}}$ ([[lem-of-naturals-positive]]); reciprocation of positives reverses the order ([[lem-of-inverse-positive]]); the order is total and transitive ([[def-complete-ordered-field]], [[def-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Proof

**Proof technique:** direct.

1.1 For each natural $n \ge 1$ put $W_n := (-n, n)$, an open set by [L2]. The family $\{\, W_n : n \ge 1 \,\}$ covers $\mathbb{R}$, hence covers $K$: given $y \in \mathbb{R}$, [L5] supplies $n \ge 1$ with $|y| < n$, and then $y \le |y| < n$ and $-y \le |y| < n$ by [L7], so $-n < y < n$. [L2, L5, L7]

1.2 Let $x \in \mathbb{R} \setminus K$ and for each natural $n \ge 1$ put $V_n := \{\, y \in \mathbb{R} : |y - x| > 1/n \,\}$, which is defined because $n > 0$ has a positive inverse by [L10]. Each $V_n$ is open: given $y \in V_n$, put $\delta := |y - x| - 1/n > 0$; for $z \in N_\delta(y)$ the triangle inequality [L8] gives $|y - x| = |(y - z) + (z - x)| \le |y - z| + |z - x| < \delta + |z - x|$, whence $|z - x| > |y - x| - \delta = 1/n$ and $z \in V_n$. The family $\{\, V_n : n \ge 1 \,\}$ covers $K$: for $y \in K$ one has $y \ne x$, so $|y - x| > 0$ by [L7], and [L6] supplies $n \ge 1$ with $1/n < |y - x|$, that is $y \in V_n$. [L3, L6, L7, L8, L10]

2.1 Apply compactness to the cover of step 1.1. If the finite subcover is empty then $K = \varnothing$ and $-1 \le y \le 1$ holds vacuously for $y \in K$; otherwise there are naturals $n_0, \dots, n_p \ge 1$ with $K \subseteq W_{n_0} \cup \dots \cup W_{n_p}$, and putting $N := \max\{n_0, \dots, n_p\}$ by [L9] we get $W_{n_i} \subseteq W_N$ for each $i$, since $n_i \le N$ gives $-N \le -n_i$ and $n_i \le N$ in $\mathbb{R}$ by [L10]. Hence $K \subseteq W_N = (-N,N)$ and $-N \le y \le N$ for every $y \in K$, so $K$ is bounded. [step 1.1, L1, L2, L4, L9, L10]

2.2 Apply compactness to the cover of step 1.2. If the finite subcover is empty then $K = \varnothing$ and $|y - x| > 1$ holds vacuously for $y \in K$, so take $M := 1$; otherwise there are naturals $n_0, \dots, n_p \ge 1$ with $K \subseteq V_{n_0} \cup \dots \cup V_{n_p}$, and putting $M := \max\{n_0, \dots, n_p\}$ by [L9] we get $V_{n_i} \subseteq V_M$ for each $i$, since $n_i \le M$ gives $0 < 1/M \le 1/n_i$ by [L10]. In both cases $K \subseteq V_M$, that is, $|y - x| > 1/M$ for every $y \in K$. [step 1.2, L1, L9, L10]

3.1 Consequently $N_{1/M}(x) \cap K = \varnothing$, since $y \in K$ has $|y - x| > 1/M$ while $y \in N_{1/M}(x)$ would give $|y - x| < 1/M$, which trichotomy forbids; so $N_{1/M}(x) \subseteq \mathbb{R} \setminus K$. As $x$ was an arbitrary point of $\mathbb{R} \setminus K$, that complement is open and $K$ is closed. [step 2.2, L2, L3, L10]

4.1 $K$ is bounded by step 2.1 and closed by step 3.1, which is the assertion. [step 2.1, step 3.1] ∎

## Remarks

- **Why the reciprocal form is unavoidable in step 1.2.** The sets covering $K$
  must exhaust the complement of the single point $x$, and the natural way to do
  that with open sets is to exclude a shrinking closed neighbourhood of $x$. The
  radii of those neighbourhoods have to become smaller than $|y - x|$ for each
  $y \in K$, and that is exactly the statement of
  [[cor-archimedean-reciprocal]]. The cofinal form [[thm-of-archimedean]] says
  the naturals get large, which is what step 1.1 needs and is a different
  assertion; the corollary exists in this library precisely so that the
  inversion between them is done once.

- **The converse needs completeness and this lemma does not.** Nothing above
  uses the least-upper-bound property except through the Archimedean property;
  beyond the ordered-field axioms the proof asks only for that property and for
  the existence of a maximum of a finite set. The converse, that a closed bounded
  set is compact, is false in $\mathbb{Q}$
  ([[fs-closed-bounded-compact-without-completeness]]) and true in $\mathbb{R}$
  ([[thm-heine-borel-characterisation-r]]).

- **Neither conclusion can be strengthened to an equivalence on its own.** A
  closed set need not be compact and a bounded set need not be compact, and both
  failures are recorded in [[cex-unbounded-closed-set-not-compact]].
````

### `thm-heine-borel-r`

````markdown
---
id: thm-heine-borel-r
kind: theorem
title: "Heine-Borel by bisection: every closed bounded interval $[a,b]$ is compact"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-open-cover-r, def-interval, thm-nested-interval-property, def-complete-ordered-field, thm-recursion, cor-archimedean-reciprocal, thm-of-archimedean, def-neighbourhood-r, def-open-and-closed-in-r, lem-of-naturals-positive, lem-of-inverse-positive, lem-of-abs-value, lem-of-add-order, lem-of-sign-rules, cor-of-one-positive, def-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "$[a,b]$ is compact"
proof_strategy: contradiction
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
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Thm 2.40)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §7.4"
      url: "https://www.jirka.org/ra/"
    - title: "Nested intervals (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nested_intervals"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $a, b \in \mathbb{R}$ with $a \le b$. Then the closed bounded interval
$[a,b]$ ([[def-interval]]) is compact ([[def-open-cover-r]]): every family of
open subsets of $\mathbb{R}$ whose union contains $[a,b]$ has a finite subfamily
whose union already contains $[a,b]$.

The proof is by repeated bisection. Supposing some open cover admits no finite
subcover, one halves the interval, keeps a half that still admits none, and
iterates; the halves shrink to a point, which the cover does reach, and a single
member of the cover then swallows a whole late-stage half. **The halving rule is
canonical**, taking the left half whenever the left half works, so the recursion
uses [[thm-recursion]] and no choice principle.

## Facts & Assumptions

**Given:** Reals $a \le b$ and an open cover $\mathcal{U}$ of $[a,b]$; the set $X := \{\, (u,v) \in \mathbb{R} \times \mathbb{R} : u \le v \,\}$; and the following terminology: a pair $(u,v) \in X$ is **bad** when there are no $n \in \mathbb{N}$ and $U_0, \dots, U_n \in \mathcal{U}$ with $[u,v] \subseteq U_0 \cup \dots \cup U_n$, that is, when the interval $[u,v]$ admits no finite subcover from $\mathcal{U}$.

[L1] Open cover, subcover, finite subfamily and compactness ([[def-open-cover-r]]).

[L2] Closed bounded intervals: $[u,v] = \{\, z : u \le z \le v \,\}$ is nonempty exactly when $u \le v$; and for $u \le m \le v$ one has $[u,v] = [u,m] \cup [m,v]$, since $z \in [u,v]$ satisfies $z \le m$ or $m < z$ by trichotomy ([[def-interval]], [[def-ordered-field]]).

[L3] $U$ is open when every $x \in U$ admits $\varepsilon > 0$ with $N_\varepsilon(x) \subseteq U$, and $N_\varepsilon(x) = \{\, y : |y - x| < \varepsilon \,\}$ ([[def-open-and-closed-in-r]], [[def-neighbourhood-r]]).

[L4] Recursion: for a set $Y$, an element $y_0 \in Y$ and a function $G : Y \to Y$ there is $h : \mathbb{N} \to Y$ with $h(0) = y_0$ and $h(k+1) = G(h(k))$ for every $k$ ([[thm-recursion]]).

[L5] Nested interval property: if $[a_k,b_k]$ with $a_k \le b_k$ satisfy $[a_{k+1},b_{k+1}] \subseteq [a_k,b_k]$ for every $k \in \mathbb{N}$, then $\bigcap_{k} [a_k,b_k] \ne \varnothing$ ([[thm-nested-interval-property]]).

[L6] Reciprocal Archimedean property: for every real $\varepsilon > 0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

[L7] Canonical naturals: $n \cdot 1_{\mathbb{R}} > 0$ for $n \ge 1$, the map $n \mapsto n \cdot 1_{\mathbb{R}}$ is strictly increasing, and $(n+1) \cdot 1_{\mathbb{R}} = n \cdot 1_{\mathbb{R}} + 1$ ([[lem-of-naturals-positive]]); a positive element has a positive inverse and $0 < c \le d$ gives $0 < 1/d \le 1/c$ ([[lem-of-inverse-positive]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

[L8] Ordered-field arithmetic: $0 < 1$, hence $2 := 1 + 1 > 0$ and $2^{-1} > 0$; adding a constant preserves an inequality and multiplying by a positive preserves it ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-complete-ordered-field]], [[def-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

[L9] Absolute value: $|y - x| \le v - u$ whenever $x, y \in [u,v]$, because $|y - x|$ equals $y - x$ or $x - y$ and each is at most $v - u$ ([[lem-of-abs-value]], [[def-ordered-field]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $[a,b]$ is not compact: some open cover $\mathcal{U}$ of $[a,b]$ has no finite subcover, that is, the pair $(a,b) \in X$ is bad. [assume-contra, L1]

1.2 Bisection rule: for $(u,v) \in X$ put $m := (u+v) \cdot 2^{-1}$, so that $u \le m \le v$ by [L8], and define $G(u,v) := (u,m)$ if $(u,m)$ is bad and $G(u,v) := (m,v)$ otherwise. This is a definition by cases on one condition, so $G : X \to X$ is a function and nothing is selected. [L2, L8, construct]

1.3 If $(u,v)$ is bad then $G(u,v)$ is bad: were both $(u,m)$ and $(m,v)$ not bad, concatenating the two finite lists of members of $\mathcal{U}$ would give a finite subfamily whose union contains $[u,m] \cup [m,v] = [u,v]$ by [L2], so $(u,v)$ would not be bad; hence at least one half is bad, and the rule returns the left half when it is bad and otherwise the right half, which must then be bad. [L1, L2]

2.1 Apply [L4] with $Y = X$, seed $(a,b)$ and map $G$: there is $h : \mathbb{N} \to X$ with $h(0) = (a,b)$ and $h(k+1) = G(h(k))$. Write $h(k) = (a_k,b_k)$, so $a_k \le b_k$ for every $k$, $(a_0,b_0) = (a,b)$, and $(a_{k+1},b_{k+1})$ is one of the two halves of $(a_k,b_k)$. [step 1.2, L2, L4, construct]

3.1 Every $(a_k,b_k)$ is bad, by induction on $k$: the case $k = 0$ is step 1.1, and if $(a_k,b_k)$ is bad then $(a_{k+1},b_{k+1}) = G(a_k,b_k)$ is bad by step 1.3. [step 1.1, step 1.3, step 2.1]

3.2 Writing $\ell_k := b_k - a_k \ge 0$, the intervals are nested and the lengths halve: $[a_{k+1},b_{k+1}]$ is $[a_k,m_k]$ or $[m_k,b_k]$ with $m_k = (a_k+b_k) \cdot 2^{-1}$, and each of these is contained in $[a_k,b_k]$ by [L2], while $m_k - a_k = b_k - m_k = \ell_k \cdot 2^{-1}$, so $\ell_{k+1} = \ell_k \cdot 2^{-1}$. [step 2.1, L2, L8]

4.1 For every $k \in \mathbb{N}$ one has $\ell_k \cdot (k+1) \le \ell_0$, by induction on $k$: at $k = 0$ this reads $\ell_0 \cdot 1 \le \ell_0$; and if it holds at $k$ then $\ell_{k+1} \cdot (k+2) = \ell_k \cdot 2^{-1} \cdot (k+2) \le \ell_k \cdot (k+1) \le \ell_0$, using $\ell_k \ge 0$ and $(k+2) \cdot 2^{-1} \le k+1$, which is $k + 2 \le 2k+2$, that is $0 \le k$. [step 3.2, L7, L8]

4.2 By [L5] the nested family $[a_k,b_k]$ of nonempty closed bounded intervals has a common point $x$; since $x \in [a_0,b_0] = [a,b]$ and $\mathcal{U}$ covers $[a,b]$, fix $U \in \mathcal{U}$ with $x \in U$ and then, $U$ being open, a real $\varepsilon > 0$ with $N_\varepsilon(x) \subseteq U$. [step 3.2, L1, L2, L3, L5, choose]

5.1 There is $k \in \mathbb{N}$ with $\ell_k < \varepsilon$: the real $\varepsilon/(\ell_0+1)$ is positive because $\ell_0 + 1 > 0$, so [L6] supplies a natural $n \ge 1$ with $1/n < \varepsilon/(\ell_0+1)$; put $k := n-1$, a natural number, so that $k+1 = n$ and step 4.1 with [L7] gives $\ell_k \le \ell_0 \cdot (1/n) \le \ell_0 \cdot \varepsilon/(\ell_0+1) < \varepsilon$, the last step because $\ell_0 < \ell_0 + 1$ forces $\ell_0/(\ell_0+1) < 1$ and $\varepsilon > 0$. [step 4.1, step 4.2, L6, L7, L8, choose]

6.1 For that $k$ one has $x \in [a_k,b_k]$, and every $y \in [a_k,b_k]$ satisfies $|y - x| \le \ell_k < \varepsilon$ by [L9], so $[a_k,b_k] \subseteq N_\varepsilon(x) \subseteq U$; hence the one-member subfamily $\{U\}$ of $\mathcal{U}$ covers $[a_k,b_k]$ and $(a_k,b_k)$ is not bad, contradicting step 3.1. The assumption of step 1.1 is therefore untenable and $[a,b]$ is compact. [step 3.1, step 4.2, step 5.1, L1, L3, L9, discharge-contradiction] ∎

## Remarks

- **What each hypothesis buys.** Closedness enters through [L5]: the nested
  interval property is stated for closed intervals and fails for open ones
  ([[cex-nested-open-intervals-empty]]). Boundedness enters through the same
  fact and through the length computation of step 3.2. Completeness of
  $\mathbb{R}$ enters only inside [[thm-nested-interval-property]] and, through
  [[cor-archimedean-reciprocal]], in step 5.1.

- **Why the lengths are handled without powers.** The obvious route is
  $\ell_k = \ell_0 \cdot 2^{-k}$ together with the nullity of a geometric
  sequence, which is available ([[lem-geometric-sequence-null]]). The route
  taken instead, the one-line induction of step 4.1, gives the weaker bound
  $\ell_k \le \ell_0/(k+1)$, which is all step 5.1 needs, and it avoids
  integer powers and the algebra of limits entirely.

- **The recursion is over pairs, not over sets.** The state carried from stage
  to stage is the pair of endpoints, so [L4] applies with $Y = X$ and a total
  map $G$; had the rule been "choose a bad half", the state would have been
  chosen rather than computed and the argument would have needed dependent
  choice, which this library does not have.

- **The converse direction is a separate result.** That a compact subset of
  $\mathbb{R}$ must be closed and bounded is
  [[lem-compact-implies-closed-and-bounded-r]], and the two together give
  [[thm-heine-borel-characterisation-r]].
````

