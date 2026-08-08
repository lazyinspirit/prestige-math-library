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

## Target item — `lem-sequential-characterisation-of-closure-r`

Normalized current SHA-256: `1bdf350e4f70968dbf382763a8ec656205be029fc665107e0db3abf5fd1ba66d`

The complete current item follows, including frontmatter:

````markdown
---
id: lem-sequential-characterisation-of-closure-r
kind: lemma
title: "A point lies in the closure of $A \\subseteq \\mathbb{R}$ iff some sequence in $A$ converges to it, so a subset of $\\mathbb{R}$ is closed iff it is sequentially closed"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-closure-characterisations-r, def-limit-point-r, def-real-limit, def-sequence, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, lem-of-naturals-positive, lem-rat-embeds-dense, def-countable-choice, def-neighbourhood-r, def-interior-closure-boundary-r, def-open-and-closed-in-r]
justified_by: []
aliases: []
landmark: false
short: "closure = sequential closure"
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
    - title: "Axiom of countable choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_countable_choice"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (Thm 3.2(d))"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §7.2"
      url: "https://www.jirka.org/ra/"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$ and $x \in \mathbb{R}$, with closure as in
[[def-interior-closure-boundary-r]] and sequences and convergence as in
[[def-sequence]] and [[def-real-limit]]. Then

$$x \in \overline{A} \iff \text{there is a sequence } (a_k)_{k \in \mathbb{N}} \text{ with } a_k \in A \text{ for every } k \text{ and } a_k \to x .$$

Consequently $A$ is closed if and only if it is **sequentially closed**: whenever
a sequence with all its terms in $A$ converges, its limit lies in $A$.

**The right-to-left direction is choice free; the left-to-right direction spends
$\mathrm{AC}_\omega$** ([[def-countable-choice]]). Producing a sequence from a
point of the closure requires selecting one point of $A$ from each of the
countably many sets $N_{1/(k+1)}(x) \cap A$, and this library has no canonical
rule for that selection, so the axiom of countable choice is invoked
explicitly at step 2.2 and nowhere else.

## Facts & Assumptions

**Given:** A subset $A \subseteq \mathbb{R}$ and a real $x$. Sequences are functions on $\mathbb{N}$, which contains $0$, so a sequence is $(a_k)_{k \in \mathbb{N}}$ and the radii used below are $1/(k+1)$ rather than $1/k$ ([[def-sequence]]).

[L1] $\overline{A}$ is exactly the set of adherent points of $A$, that is, of points every neighbourhood of which meets $A$; and $A$ is closed exactly when $A = \overline{A}$ ([[thm-closure-characterisations-r]], [[def-limit-point-r]]).

[L2] $N_\varepsilon(x) = \{\, y \in \mathbb{R} : |y - x| < \varepsilon \,\}$ for real $\varepsilon > 0$ ([[def-neighbourhood-r]], [[def-open-and-closed-in-r]]).

[L3] $(a_k) \to x$ means: for every rational $\varepsilon > 0$ there is $K \in \mathbb{N}$ with $|a_k - x| < \varepsilon$ for all $k \ge K$ ([[def-real-limit]], [[def-sequence]]).

[L4] Strictly between any two reals lies a rational; in particular for every real $\varepsilon > 0$ there is a rational $q$ with $0 < q < \varepsilon$ ([[lem-rat-embeds-dense]]).

[L5] Reciprocal Archimedean property: for every real $\varepsilon > 0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

[L6] Canonical naturals: $n \cdot 1_{\mathbb{R}} > 0$ for $n \ge 1$ and $m \le n$ in $\mathbb{N}$ gives $m \cdot 1_{\mathbb{R}} \le n \cdot 1_{\mathbb{R}}$ ([[lem-of-naturals-positive]]); a positive element has a positive inverse and $0 < a \le b$ gives $0 < 1/b \le 1/a$ ([[lem-of-inverse-positive]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

[L7] Countable choice: for every family $(X_k)_{k \in \mathbb{N}}$ of nonempty sets there is a function $f$ with domain $\mathbb{N}$ such that $f(k) \in X_k$ for every $k$ ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 For the right-to-left implication, assume $a_k \in A$ for every $k \in \mathbb{N}$ and $a_k \to x$, and let $\varepsilon > 0$ be an arbitrary real. [assume-hyp, L3]

1.2 For the left-to-right implication, assume $x \in \overline{A}$; then for every $k \in \mathbb{N}$ the radius $1/(k+1)$ is a positive real and the set $X_k := N_{1/(k+1)}(x) \cap A$ is nonempty, because $x$ is an adherent point of $A$ by [L1]. [assume-hyp, L1, L2, L6]

2.1 Fix a rational $q$ with $0 < q < \varepsilon$ by [L4], and then $K \in \mathbb{N}$ with $|a_k - x| < q$ for all $k \ge K$ by [L3]; in particular $|a_K - x| < q < \varepsilon$, so $a_K \in N_\varepsilon(x) \cap A$ and that intersection is nonempty. As $\varepsilon$ was an arbitrary positive real, $x$ is an adherent point of $A$, hence $x \in \overline{A}$ by [L1]. [step 1.1, L1, L2, L3, L4, choose]

2.2 Apply [L7] to the family $(X_k)_{k \in \mathbb{N}}$ of step 1.2 and fix $f$ with $f(k) \in X_k$ for every $k$; putting $a_k := f(k)$ gives a sequence with $a_k \in A$ and $|a_k - x| < 1/(k+1)$ for every $k \in \mathbb{N}$. [step 1.2, L2, L7, choose]

3.1 That sequence converges to $x$: let $\varepsilon > 0$ be rational, fix by [L5] a natural $n \ge 1$ with $1/n < \varepsilon$, and put $K := n - 1$, a natural number since $n \ge 1$; for every $k \ge K$ one has $k + 1 \ge n \ge 1$, hence $0 < 1/(k+1) \le 1/n < \varepsilon$ by [L6], and therefore $|a_k - x| < 1/(k+1) < \varepsilon$. [step 2.2, L3, L5, L6, choose]

4.1 Step 2.1 gives the implication from right to left and steps 2.2 and 3.1 give it from left to right, so $x \in \overline{A}$ holds exactly when some sequence with all terms in $A$ converges to $x$. [step 2.1, step 2.2, step 3.1]

4.2 Sequential closedness: if $A$ is closed and a sequence with all terms in $A$ converges to some $y$, then $y \in \overline{A}$ by step 2.1 and $\overline{A} = A$ by [L1], so $y \in A$; conversely, if every convergent sequence with terms in $A$ has its limit in $A$, then any $y \in \overline{A}$ is the limit of the sequence produced by steps 2.2 and 3.1, hence lies in $A$, so $\overline{A} \subseteq A$, and with $A \subseteq \overline{A}$ this gives $A = \overline{A}$, that is, $A$ is closed. [step 2.1, step 2.2, step 3.1, L1]

5.1 Both assertions of the statement are proved, namely the sequential description of the closure in step 4.1 and the equivalence of closedness with sequential closedness in step 4.2. [step 4.1, step 4.2] ∎

## Remarks

- **Where the choice is spent, and why it cannot be avoided here.** Step 2.2 is
  the only appeal to [[def-countable-choice]]. A canonical selection would
  require a rule picking a distinguished element of an arbitrary nonempty subset
  of $\mathbb{R}$, and $\mathbb{R}$ carries no well-ordering that this library
  has constructed, so this library has no such rule to offer. Contrast
  [[lem-subset-of-countable]] and [[lem-countable-iff-surjection-from-n]], where
  the selection is from subsets of $\mathbb{N}$ and the least element is
  canonical.

- **The choice is genuinely confined to one direction.** Step 2.1 selects a
  single rational $q$ and a single index $K$ for one $\varepsilon$ at a time, and
  finitely many selections need no choice principle. So "the limit of a
  convergent sequence in a closed set lies in the set" is a theorem of ZF, and
  only the production of a sequence out of a point of the closure is not.

- **The indices start at $0$.** Since $\mathbb{N}$ contains $0$
  ([[def-sequence]]), the shrinking radii are $1/(k+1)$ and not $1/k$; the
  latter is undefined at $k = 0$. The threshold in step 3.1 is $K = n - 1$ for
  the same reason, and $n \ge 1$ is exactly what makes $K$ a natural number.
````

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "thm-closure-characterisations-r",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$, with closure $\\overline{A}$ as in\n[[def-interior-closure-boundary-r]] and derived set $A'$ as in\n[[def-limit-point-r]]. Write\n\n$$E \\;:=\\; \\{\\, x \\in \\mathbb{R} : N_\\varepsilon(x) \\cap A \\ne \\varnothing \\text{ for every real } \\varepsilon > 0 \\,\\}$$\n\nfor the set of adherent points of $A$ ([[def-neighbourhood-r]]). Then:\n\n1. $\\overline{A} = E$.\n2. $\\overline{A} = A \\cup A'$.\n3. $\\overline{A}$ is the smallest closed superset of $A$: it is closed, it\n   contains $A$, and it is contained in every closed $F$ with $A \\subseteq F$.\n4. $A$ is closed if and only if $A = \\overline{A}$, if and only if\n   $A' \\subseteq A$.\n\nClaim 3 is the content of the definition of $\\overline{A}$ and is restated here\nso that the four descriptions stand together; claims 1, 2 and 4 are the ones\nthat carry work.",
      "uses": [
        "1.2",
        "2.1",
        "4.2"
      ]
    },
    {
      "fact": "L1",
      "source": "def-limit-point-r",
      "source_section": "Definition",
      "quote": "Let $A \\subseteq \\mathbb{R}$ and $x \\in \\mathbb{R}$, with neighbourhoods as in\n[[def-neighbourhood-r]] and closure as in\n[[def-interior-closure-boundary-r]].\n\n- $x$ is an **adherent point** of $A$ when $N_\\varepsilon(x) \\cap A \\ne\n  \\varnothing$ for every real $\\varepsilon > 0$.\n- $x$ is a **limit point** (or *accumulation point*) of $A$ when\n  $N^{*}_\\varepsilon(x) \\cap A \\ne \\varnothing$ for every real\n  $\\varepsilon > 0$: every punctured neighbourhood of $x$ meets $A$.\n- $x$ is an **isolated point** of $A$ when $x \\in A$ and there is a real\n  $\\varepsilon > 0$ with $N_\\varepsilon(x) \\cap A = \\{x\\}$.\n- The **derived set** of $A$ is\n  $$A' \\;:=\\; \\{\\, x \\in \\mathbb{R} : x \\text{ is a limit point of } A \\,\\}.$$\n- $A$ is **dense in $\\mathbb{R}$** when $\\overline{A} = \\mathbb{R}$.\n\n**A limit point is an adherent point**, since $N^{*}_\\varepsilon(x) \\subseteq\nN_\\varepsilon(x)$; and an element of $A$ is an adherent point of $A$, since\n$x \\in N_\\varepsilon(x) \\cap A$ ([[def-neighbourhood-r]]). So the adherent\npoints of $A$ are exactly the points of $A \\cup A'$, a statement proved as part\nof [[thm-closure-characterisations-r]].\n\n**Limit point and isolated point are exact opposites inside $A$.** For\n$x \\in A$: $x$ is an isolated point of $A$ exactly when it is not a limit point\nof $A$. Indeed $N_\\varepsilon(x) \\cap A = \\{x\\}$ says precisely that\n$N^{*}_\\varepsilon(x) \\cap A = \\varnothing$, because $x$ itself always lies in\n$N_\\varepsilon(x) \\cap A$ when $x \\in A$; so the existence of an $\\varepsilon$\nwitnessing isolation is the negation of the condition defining a limit point.\nA point of $A$ is therefore either isolated in $A$ or a limit point of $A$, and\nnever both.\n\n**A limit point need not belong to the set, and a point of the set need not be a\nlimit point.** Both possibilities occur, and the two examples that matter later\nare $0$, which is a limit point of $\\{\\, 1/k : k \\ge 1 \\,\\}$ without belonging\nto it, and $0$ again, which belongs to $\\{0\\} \\cup [1,2]$ as an isolated point.",
      "uses": [
        "1.2",
        "2.1",
        "4.2"
      ]
    },
    {
      "fact": "L2",
      "source": "def-neighbourhood-r",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]], [[def-ordered-field]]) with its order\n([[def-real-order]]) and its absolute value ([[def-abs-value]]).\n\nLet $x \\in \\mathbb{R}$ and let $\\varepsilon \\in \\mathbb{R}$ with\n$\\varepsilon > 0$. The **$\\varepsilon$-neighbourhood of $x$** is\n\n$$N_\\varepsilon(x) \\;:=\\; \\{\\, y \\in \\mathbb{R} : |y - x| < \\varepsilon \\,\\},$$\n\nand the **punctured $\\varepsilon$-neighbourhood of $x$** is\n\n$$N^{*}_\\varepsilon(x) \\;:=\\; N_\\varepsilon(x) \\setminus \\{x\\} \\;=\\; \\{\\, y \\in \\mathbb{R} : 0 < |y - x| < \\varepsilon \\,\\}.$$\n\nThe two descriptions of $N^{*}_\\varepsilon(x)$ agree because $|y - x| = 0$ holds\nexactly when $y = x$ ([[lem-of-abs-value]]).\n\n**A neighbourhood is an open interval.** For every $x$ and every\n$\\varepsilon > 0$,\n\n$$N_\\varepsilon(x) \\;=\\; (x - \\varepsilon,\\ x + \\varepsilon),$$\n\nthe interval of [[def-interval]]. Indeed [[lem-of-abs-value]] gives, for\n$\\varepsilon > 0$, the equivalence $|y - x| < \\varepsilon \\iff -\\varepsilon <\ny - x < \\varepsilon$, and adding $x$ throughout turns the right-hand side into\n$x - \\varepsilon < y < x + \\varepsilon$ ([[def-ordered-field]]).\n\n**The centre lies in its own neighbourhoods.** $x \\in N_\\varepsilon(x)$, since\n$|x - x| = |0| = 0 < \\varepsilon$ ([[lem-of-abs-value]]).\n\n**Punctured neighbourhoods are never empty.** The element\n$y := x + \\varepsilon/2$ satisfies $|y - x| = \\varepsilon/2$, which is\n$> 0$ and $< \\varepsilon$, so $y \\in N^{*}_\\varepsilon(x)$\n([[lem-of-abs-value]], [[def-ordered-field]]).\n\n**Monotonicity in the radius.** If $0 < \\delta \\le \\varepsilon$ then\n$N_\\delta(x) \\subseteq N_\\varepsilon(x)$, because $|y - x| < \\delta \\le\n\\varepsilon$ ([[def-ordered-field]]).\n\n**Nesting at an interior point.** If $y \\in N_\\varepsilon(x)$ and\n$0 < \\delta \\le \\varepsilon - |y - x|$, then\n\n$$N_\\delta(y) \\;\\subseteq\\; N_\\varepsilon(x).$$\n\nIndeed for $z \\in N_\\delta(y)$ the triangle inequality\n([[lem-of-triangle-inequality]]) gives\n$|z - x| = |(z - y) + (y - x)| \\le |z - y| + |y - x| < \\delta + |y - x| \\le\n\\varepsilon$. Note that $\\varepsilon - |y - x| > 0$ precisely because\n$y \\in N_\\varepsilon(x)$, so such a $\\delta$ always exists.",
      "uses": [
        "1.2",
        "2.1",
        "2.2"
      ]
    },
    {
      "fact": "L2",
      "source": "def-open-and-closed-in-r",
      "source_section": "Definition",
      "quote": "Let $U, F \\subseteq \\mathbb{R}$, with neighbourhoods as in\n[[def-neighbourhood-r]].\n\n- $U$ is **open** when for every $x \\in U$ there is a real $\\varepsilon > 0$\n  with $N_\\varepsilon(x) \\subseteq U$.\n- $F$ is **closed** when its complement $\\mathbb{R} \\setminus F$ is open.\n- A set is **clopen** when it is both open and closed.\n\nThe whole of the topology of $\\mathbb{R}$ developed on this page rests on this\none definition: closedness is *defined* as openness of the complement, and every\nother description of a closed set on this page is a theorem\n([[thm-closure-characterisations-r]], [[lem-sequential-characterisation-of-closure-r]]).\n\n**$\\varnothing$ and $\\mathbb{R}$ are clopen.** The condition defining openness\nquantifies over the elements of the set, so it holds vacuously for\n$\\varnothing$; and for $x \\in \\mathbb{R}$ one has $N_1(x) \\subseteq \\mathbb{R}$,\nso $\\mathbb{R}$ is open. Since each of the two is the complement of the other,\neach is also closed.\n\n**Every neighbourhood is open.** Let $y \\in N_\\varepsilon(x)$ and put\n$\\delta := \\varepsilon - |y - x|$, which is $> 0$ because\n$y \\in N_\\varepsilon(x)$. The nesting property of [[def-neighbourhood-r]] gives\n$N_\\delta(y) \\subseteq N_\\varepsilon(x)$. So every point of $N_\\varepsilon(x)$\nhas a neighbourhood inside it.\n\n**The four open forms of [[def-interval]] are open sets.** Let $a, b \\in\n\\mathbb{R}$.\n\n- $(a,b)$: for $x$ with $a < x < b$, both $x - a > 0$ and $b - x > 0$, so\n  $\\delta := \\min\\{x - a,\\ b - x\\}$ is a positive real (the minimum of a\n  two-element set of reals exists, [[lem-finite-set-has-max]], [[def-max-min]]).\n  If $|y - x| < \\delta$ then $y > x - \\delta \\ge x - (x - a) = a$ and\n  $y < x + \\delta \\le x + (b - x) = b$, so $y \\in (a,b)$; hence\n  $N_\\delta(x) \\subseteq (a,b)$.\n- $(a,\\infty)$: for $x > a$ take $\\delta := x - a > 0$; then $|y - x| < \\delta$\n  gives $y > x - \\delta = a$.\n- $(-\\infty,b)$: for $x < b$ take $\\delta := b - x > 0$; then $|y - x| < \\delta$\n  gives $y < x + \\delta = b$.\n- $(-\\infty,\\infty) = \\mathbb{R}$: already treated above.\n\n**The four closed forms of [[def-interval]] are closed sets.** In each case the\ncomplement is shown open directly.\n\n- $[a,b]$: if $x \\notin [a,b]$ then $x < a$ or $x > b$ by trichotomy\n  ([[def-ordered-field]]). If $x < a$, take $\\delta := a - x > 0$; every\n  $y \\in N_\\delta(x)$ has $y < x + \\delta = a$, hence $y \\notin [a,b]$. If\n  $x > b$, take $\\delta := x - b > 0$; every $y \\in N_\\delta(x)$ has\n  $y > x - \\delta = b$, hence $y \\notin [a,b]$. So\n  $\\mathbb{R} \\setminus [a,b]$ is open.\n- $[a,\\infty)$: its complement is $(-\\infty,a)$, which is open by the previous\n  paragraph.\n- $(-\\infty,b]$: its complement is $(b,\\infty)$, which is open.\n- $(-\\infty,\\infty) = \\mathbb{R}$: its complement is $\\varnothing$, which is\n  open.",
      "uses": [
        "1.2",
        "2.1",
        "2.2"
      ]
    },
    {
      "fact": "L3",
      "source": "def-real-limit",
      "source_section": "Definition",
      "quote": "A sequence $(x_k)$ of reals **converges** to $x \\in \\mathbb{R}$ when for\nevery rational $\\varepsilon > 0$ there is $K$ with\n$|x_k - x| < \\hat\\varepsilon$ for all $k \\ge K$. It is **Cauchy** when for\nevery rational $\\varepsilon > 0$ there is $K$ with\n$|x_k - x_l| < \\hat\\varepsilon$ for all $k, l \\ge K$.",
      "uses": [
        "1.1",
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-sequence",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]],\n[[def-real-numbers]]) with its order and absolute value ([[def-real-order]]), and\n$\\mathbb{N}$ is the set of natural numbers with its order ([[def-natural-numbers]],\n[[def-nat-order]]).\n\nA **sequence of reals** is a function $x : \\mathbb{N} \\to \\mathbb{R}$. We write\n$x_k$ for the value $x(k)$, call it the **$k$-th term**, and write $(x_k)$, or\n$(x_k)_{k \\in \\mathbb{N}}$, for the function itself. The **range** of $(x_k)$ is\nthe subset $\\{\\, x_k : k \\in \\mathbb{N} \\,\\} \\subseteq \\mathbb{R}$.\n\nLet $(x_k)$ be a sequence of reals and let $P$ be a property of indices.\n\n- $(x_k)$ is **bounded** if there is $M \\in \\mathbb{R}$ with $|x_k| \\le M$ for\n  every $k \\in \\mathbb{N}$; it is **unbounded** otherwise.\n- $P$ holds **eventually** if there is $K \\in \\mathbb{N}$ such that $P(k)$ holds\n  for every $k \\ge K$.\n- $P$ holds **frequently** if for every $K \\in \\mathbb{N}$ there is some\n  $k \\ge K$ for which $P(k)$ holds.\n- For $K \\in \\mathbb{N}$, the **$K$-th tail** of $(x_k)$ is the sequence\n  $x^{(K)}$ defined by $x^{(K)}_j := x_{j + K}$ for $j \\in \\mathbb{N}$; it is\n  again a sequence of reals.\n- A function $n : \\mathbb{N} \\to \\mathbb{N}$ is **strictly increasing** if\n  $n_j < n_k$ whenever $j < k$. For such an $n$, the **subsequence** of $(x_k)$\n  along $n$ is the composite $x \\circ n$, written $(x_{n_k})_{k \\in \\mathbb{N}}$;\n  it is again a sequence of reals.\n\n**Convergence and Cauchyness are not defined here.** They are already fixed, for\nsequences of reals, by the published [[def-real-limit]]: $(x_k)$ *converges* to\n$x \\in \\mathbb{R}$ when for every rational $\\varepsilon > 0$ there is\n$K \\in \\mathbb{N}$ with $|x_k - x| < \\varepsilon$ for all $k \\ge K$, and $(x_k)$\nis *Cauchy* when for every rational $\\varepsilon > 0$ there is $K \\in \\mathbb{N}$\nwith $|x_k - x_l| < \\varepsilon$ for all $k, l \\ge K$. This page builds the\ntoolkit for those two notions and does not restate them. A sequence\n**converges** if it converges to some real, and **diverges** if it does not.",
      "uses": [
        "1.1",
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-rat-embeds-dense",
      "source_section": "Statement",
      "quote": "The map $q \\mapsto \\hat q$ ([[def-real-numbers]]) is an embedding of ordered\nfields. Every real is approximated by rationals: for $x \\in \\mathbb{R}$ and\nrational $\\varepsilon > 0$ there is $q \\in \\mathbb{Q}$ with\n$|x - \\hat q| < \\hat\\varepsilon$. Consequently, strictly between any two\nreals lies a rational.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L5",
      "source": "cor-archimedean-reciprocal",
      "source_section": "Statement",
      "quote": "Let $F$ be a complete ordered field ([[def-complete-ordered-field]]) and let\n$\\varepsilon \\in F$ with $\\varepsilon > 0$. Then there is a natural number\n$n \\ge 1$ such that\n\n$$\\frac{1}{n \\cdot 1_F} < \\varepsilon ,$$\n\nwhere $n \\cdot 1_F$ is the canonical natural of $F$ ([[thm-of-archimedean]]) and\n$1/(n \\cdot 1_F)$ is its multiplicative inverse ([[def-field]]). As is standard\nwe abbreviate $n \\cdot 1_F$ to $n$ and write the conclusion $1/n < \\varepsilon$.\n\nThis is the **reciprocal form** of the Archimedean property.\n[[thm-of-archimedean]] on its own delivers only the assertion that the canonical\nnaturals are cofinal, $x < n \\cdot 1_F$; the form actually used in analysis, that\nthe reciprocals of the naturals get below every positive bound, is the statement\nabove, and it is recorded separately so that no proof has to reconstruct the\ninversion step in passing.",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L5",
      "source": "thm-of-archimedean",
      "source_section": "Statement",
      "quote": "Every complete ordered field $F$ ([[def-complete-ordered-field]]) is Archimedean:\nfor every $x \\in F$ there is a natural number $n \\ge 1$ with $x < n \\cdot 1_F$,\nwhere $n \\cdot 1_F$ is the canonical natural of the ordered field $F$\n([[def-ordered-field]]). Equivalently, the canonical naturals are cofinal in $F$.",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-of-naturals-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field, with field structure as in [[def-field]], and for\n$n \\ge 1$ let $n \\cdot 1_F$ denote the canonical natural number\n$\\underbrace{1_F + \\cdots + 1_F}_{n}$, defined recursively by $1 \\cdot 1_F = 1_F$\nand $(n+1) \\cdot 1_F = n \\cdot 1_F + 1_F$. Then for every $n \\ge 1$:\n\n- $n \\cdot 1_F > 0$ and $(n+1) \\cdot 1_F > n \\cdot 1_F$;\n- the map $n \\mapsto n \\cdot 1_F$ is strictly increasing, hence injective, on $\\{1, 2, 3, \\dots\\}$;\n- $(m+n) \\cdot 1_F = m \\cdot 1_F + n \\cdot 1_F$ and $(mn) \\cdot 1_F = (m \\cdot 1_F)(n \\cdot 1_F)$ for all $m, n \\ge 1$.",
      "uses": [
        "1.2",
        "3.1"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-of-inverse-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and\nlet $a, b \\in F$.\n\n1. If $a > 0$ then $a^{-1} > 0$.\n2. If $0 < a < b$ then $0 < b^{-1} < a^{-1}$.",
      "uses": [
        "1.2",
        "3.1"
      ]
    },
    {
      "fact": "L7",
      "source": "def-countable-choice",
      "source_section": "Definition",
      "quote": "The **Axiom of Countable Choice**, written $\\mathrm{AC}_\\omega$, is the following\nstatement.\n\n> For every family $(X_n)_{n \\in \\mathbb{N}}$ of nonempty sets indexed by\n> $\\mathbb{N}$ there is a function $f$ with domain $\\mathbb{N}$ such that\n> $f(n) \\in X_n$ for every $n \\in \\mathbb{N}$.\n\nEquivalently, in the vocabulary of [[def-choice-function]]: every at most\ncountable family of nonempty sets ([[def-countable]]) has a choice function.",
      "uses": [
        "2.2"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "For the right-to-left implication, assume $a_k \\in A$ for every $k \\in \\mathbb{N}$ and $a_k \\to x$, and let $\\varepsilon > 0$ be an arbitrary real.",
      "step": "1.1",
      "inputs": [
        "assume-hyp",
        "L3"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "For the left-to-right implication, assume $x \\in \\overline{A}$; then for every $k \\in \\mathbb{N}$ the radius $1/(k+1)$ is a positive real and the set $X_k := N_{1/(k+1)}(x) \\cap A$ is nonempty, because $x$ is an adherent point of $A$ by [L1].",
      "step": "1.2",
      "inputs": [
        "assume-hyp",
        "L1",
        "L2",
        "L6"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "Fix a rational $q$ with $0 < q < \\varepsilon$ by [L4], and then $K \\in \\mathbb{N}$ with $|a_k - x| < q$ for all $k \\ge K$ by [L3]; in particular $|a_K - x| < q < \\varepsilon$, so $a_K \\in N_\\varepsilon(x) \\cap A$ and that intersection is nonempty. As $\\varepsilon$ was an arbitrary positive real, $x$ is an adherent point of $A$, hence $x \\in \\overline{A}$ by [L1].",
      "step": "2.1",
      "inputs": [
        "step 1.1",
        "L1",
        "L2",
        "L3",
        "L4",
        "choose"
      ]
    },
    {
      "id": "step-2-2",
      "claim": "Apply [L7] to the family $(X_k)_{k \\in \\mathbb{N}}$ of step 1.2 and fix $f$ with $f(k) \\in X_k$ for every $k$; putting $a_k := f(k)$ gives a sequence with $a_k \\in A$ and $|a_k - x| < 1/(k+1)$ for every $k \\in \\mathbb{N}$.",
      "step": "2.2",
      "inputs": [
        "step 1.2",
        "L2",
        "L7",
        "choose"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "That sequence converges to $x$: let $\\varepsilon > 0$ be rational, fix by [L5] a natural $n \\ge 1$ with $1/n < \\varepsilon$, and put $K := n - 1$, a natural number since $n \\ge 1$; for every $k \\ge K$ one has $k + 1 \\ge n \\ge 1$, hence $0 < 1/(k+1) \\le 1/n < \\varepsilon$ by [L6], and therefore $|a_k - x| < 1/(k+1) < \\varepsilon$.",
      "step": "3.1",
      "inputs": [
        "step 2.2",
        "L3",
        "L5",
        "L6",
        "choose"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "Step 2.1 gives the implication from right to left and steps 2.2 and 3.1 give it from left to right, so $x \\in \\overline{A}$ holds exactly when some sequence with all terms in $A$ converges to $x$.",
      "step": "4.1",
      "inputs": [
        "step 2.1",
        "step 2.2",
        "step 3.1"
      ]
    },
    {
      "id": "step-4-2",
      "claim": "Sequential closedness: if $A$ is closed and a sequence with all terms in $A$ converges to some $y$, then $y \\in \\overline{A}$ by step 2.1 and $\\overline{A} = A$ by [L1], so $y \\in A$; conversely, if every convergent sequence with terms in $A$ has its limit in $A$, then any $y \\in \\overline{A}$ is the limit of the sequence produced by steps 2.2 and 3.1, hence lies in $A$, so $\\overline{A} \\subseteq A$, and with $A \\subseteq \\overline{A}$ this gives $A = \\overline{A}$, that is, $A$ is closed.",
      "step": "4.2",
      "inputs": [
        "step 2.1",
        "step 2.2",
        "step 3.1",
        "L1"
      ]
    },
    {
      "id": "step-5-1",
      "claim": "Both assertions of the statement are proved, namely the sequential description of the closure in step 4.1 and the equivalence of closedness with sequential closedness in step 4.2.",
      "step": "5.1",
      "inputs": [
        "step 4.1",
        "step 4.2"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The lem-sequential-characterisation-of-closure-r statement has no empty-set or empty-family boundary."
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "The lem-sequential-characterisation-of-closure-r statement has no zero-valued boundary."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "The statement and step 3.1 explicitly treat the unit or first-index boundary."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "The statement and step 1.2 explicitly treat the equality, singleton, constant, or nonempty degeneracy."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "The lem-sequential-characterisation-of-closure-r statement has no interval or extended-real endpoint convention."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Step 2.1 makes the relevant selection only after its existence or source-set nonemptiness is established."
    },
    {
      "case": "iff-forward",
      "status": "checked",
      "evidence": "The forward direction is discharged in step 1.1 (with the final synthesis in step 5.1)."
    },
    {
      "case": "iff-reverse",
      "status": "checked",
      "evidence": "The reverse direction is discharged in step 4.2 (with the final synthesis in step 5.1)."
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
    "source": "lem-sequential-characterisation-of-closure-r",
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
    "source": "lem-sequential-characterisation-of-closure-r",
    "sourcePage": "topology-of-r",
    "batch": "wave6-real-analysis-limits",
    "target": "def-limit-point-r",
    "declared_target": "def-limit-point-r",
    "target_statement_provenance": null,
    "targetPage": "topology-of-r",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-sequential-characterisation-of-closure-r",
    "sourcePage": "topology-of-r",
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
    "source": "lem-sequential-characterisation-of-closure-r",
    "sourcePage": "topology-of-r",
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
    "source": "lem-sequential-characterisation-of-closure-r",
    "sourcePage": "topology-of-r",
    "batch": "wave6-real-analysis-limits",
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
    "source": "lem-sequential-characterisation-of-closure-r",
    "sourcePage": "topology-of-r",
    "batch": "wave6-real-analysis-limits",
    "target": "thm-of-archimedean",
    "declared_target": "thm-of-archimedean",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-sequential-characterisation-of-closure-r",
    "sourcePage": "topology-of-r",
    "batch": "wave6-real-analysis-limits",
    "target": "lem-of-inverse-positive",
    "declared_target": "lem-of-inverse-positive",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-sequential-characterisation-of-closure-r",
    "sourcePage": "topology-of-r",
    "batch": "wave6-real-analysis-limits",
    "target": "lem-of-naturals-positive",
    "declared_target": "lem-of-naturals-positive",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-sequential-characterisation-of-closure-r",
    "sourcePage": "topology-of-r",
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
    "source": "lem-sequential-characterisation-of-closure-r",
    "sourcePage": "topology-of-r",
    "batch": "wave6-real-analysis-limits",
    "target": "def-countable-choice",
    "declared_target": "def-countable-choice",
    "target_statement_provenance": "ai-altered",
    "targetPage": "countability-and-uncountability",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-sequential-characterisation-of-closure-r",
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
    "source": "lem-sequential-characterisation-of-closure-r",
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
    "source": "lem-sequential-characterisation-of-closure-r",
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
  }
]
```

## Full text of every cited or declared item (15)

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

### `def-countable-choice`

````markdown
---
id: def-countable-choice
kind: definition
title: "The Axiom of Countable Choice ($\\mathrm{AC}_\\omega$)"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-choice-function, def-axiom-of-choice, def-countable, thm-well-ordering-principle, lem-countable-iff-surjection-from-n]
justified_by: []
external_refs: [rem-feferman-levy-model, rem-cohen-first-model]
aliases: [def-ac-omega, axiom-of-countable-choice]
landmark: false
short: "$\\mathrm{AC}_\\omega$"
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
    - title: "D. H. Fremlin, Measure Theory, Chapter 56"
      url: "https://www1.essex.ac.uk/maths/people/fremlin/chap56.pdf"
    - title: "Axiom of countable choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_countable_choice"
    - title: "Axiom of dependent choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_dependent_choice"
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
pipeline_run: null
---

## Definition

The **Axiom of Countable Choice**, written $\mathrm{AC}_\omega$, is the following
statement.

> For every family $(X_n)_{n \in \mathbb{N}}$ of nonempty sets indexed by
> $\mathbb{N}$ there is a function $f$ with domain $\mathbb{N}$ such that
> $f(n) \in X_n$ for every $n \in \mathbb{N}$.

Equivalently, in the vocabulary of [[def-choice-function]]: every at most
countable family of nonempty sets ([[def-countable]]) has a choice function.

## Remarks

- **The two formulations are equivalent, and the passage between them uses no
  choice.** Given an at most countable family $\mathcal{F}$ of nonempty sets,
  either $\mathcal{F} = \varnothing$, where the empty function is a choice
  function, or a surjection $s : \mathbb{N} \to \mathcal{F}$ exists
  ([[lem-countable-iff-surjection-from-n]]); applying the indexed form to
  $X_n := s(n)$ gives $f$ with $f(n) \in s(n)$, and
  $g(S) := f(\min\{\, n : s(n) = S \,\})$ is a choice function for $\mathcal{F}$,
  the minimum being canonical by [[thm-well-ordering-principle]]. Conversely a
  choice function $g$ on the at most countable family $\{\, X_n : n \in \mathbb{N} \,\}$
  gives $f(n) := g(X_n)$.

- **$\mathrm{AC}_\omega$ is strictly weaker than the Axiom of Choice**
  ([[def-axiom-of-choice]]): AC implies it immediately, since AC applies to every
  family, while it is consistent with ZF that $\mathrm{AC}_\omega$ holds and AC
  fails. **It is also strictly stronger than what ZF proves**: it is consistent
  with ZF that $\mathrm{AC}_\omega$ fails, as Cohen's first model shows, since an
  infinite set of reals with no countably infinite subset
  ([[rem-cohen-first-model]]) is already a failure of $\mathrm{AC}_\omega$; the
  Feferman-Levy model ([[rem-feferman-levy-model]]) is a second witness. Both
  statements are conditional on the consistency of ZF and are external results,
  established by forcing and by permutation models; they are recorded here with
  references and are **not** proved in this library, which contains neither
  technique. Of the two, only the failure of $\mathrm{AC}_\omega$ is recorded in
  this library's catalogue of unproved results; the separation of
  $\mathrm{AC}_\omega$ from AC in the other direction is quoted from the
  references alone.

- **Dependent choice sits between them.** The Axiom of Dependent Choice
  (DC) says that if $R$ is a relation on a nonempty set $X$ such that every
  $x \in X$ has some $y$ with $x \mathbin{R} y$, then there is a sequence
  $(x_n)_{n \in \mathbb{N}}$ with $x_n \mathbin{R} x_{n+1}$ for all $n$. In ZF,
  $\mathrm{AC} \Rightarrow \mathrm{DC} \Rightarrow \mathrm{AC}_\omega$; both
  implications are theorems of ZF, and neither is proved here. That neither
  reverses is a pair of relative-consistency results of the same kind as in the
  previous bullet: if ZF is consistent, then so are ZF + DC + (not AC) and
  ZF + $\mathrm{AC}_\omega$ + (not DC). Both are established by forcing and by
  permutation models, are quoted here from the references rather than proved, and
  cannot be stated without the consistency hypothesis; so "DC is *strictly*
  between AC and $\mathrm{AC}_\omega$" is shorthand for those two conditional
  statements and is never used here as a standalone assertion. DC is the
  principle that legitimises "choose $x_0$, then choose $x_1$ depending on
  $x_0$, and so on"; $\mathrm{AC}_\omega$ only legitimises countably many
  *independent* choices made at once.

- **Being an axiom, $\mathrm{AC}_\omega$ carries no well-definedness obligation**,
  which is why this item has no `justified_by`. Its role in this library is
  bookkeeping: [[thm-countable-union-of-countable]] assumes it and flags the exact
  step that spends it, and [[fs-countable-union-theorem-of-zf]] records that the
  assumption cannot be removed.

- Every result *proved* on this page other than
  [[thm-countable-union-of-countable]] is a theorem of ZF alone. In particular
  [[lem-subset-of-countable]], [[lem-countable-iff-surjection-from-n]],
  [[thm-schroder-bernstein]], [[thm-rationals-countable]], [[thm-cantor-powerset]]
  and [[thm-r-uncountable]] are choice free, and each says so. The false
  statements at the end of the page are not all of that kind, and the claim above
  does not cover them: two of the three refute a ZF-provability claim only under
  the hypothesis that ZF is consistent, quoting an external independence result
  rather than proving it, and they say so in their own Facts.
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

### `def-limit-point-r`

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

### `lem-countable-iff-surjection-from-n`

````markdown
---
id: lem-countable-iff-surjection-from-n
kind: lemma
title: "A nonempty set is at most countable iff it is a surjective image of $\\mathbb{N}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-countable, thm-well-ordering-principle, def-injection-surjection-bijection, lem-subset-of-countable, def-equinumerous, def-natural-numbers, def-nat-order, lem-nat-order-is-membership]
justified_by: []
aliases: []
landmark: false
short: "countable iff enumerable by a surjection"
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
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "J. Lebl, Basic Analysis: Introduction to Real Analysis, basic set theory"
      url: "https://www.jirka.org/ra/html/sec_basicset.html"
    - title: "Countable set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countable_set"
    - title: "T. Tao, Analysis I, 3rd ed., §8.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $A$ be a nonempty set. Then $A$ is at most countable ([[def-countable]]) if
and only if there is a surjection $s : \mathbb{N} \to A$
([[def-injection-surjection-bijection]]).

Moreover, from any such surjection an injection $A \to \mathbb{N}$ is obtained
explicitly, without any choice, by

$$j(a) := \min\{\, k \in \mathbb{N} : s(k) = a \,\}.$$

This is the working form of countability used everywhere below: to prove a
nonempty set countable it suffices to list its elements, repetitions and all.

**No choice principle is used.** The backward direction is where an appeal to
choice would be natural ("for each $a$ pick some $k$ with $s(k) = a$") and it is
avoided outright, because $\min$ is canonical: every nonempty set of naturals has
a *least* element ([[thm-well-ordering-principle]]), so $j(a)$ is determined by
$a$ and $s$ alone.

## Facts & Assumptions

**Given:** A nonempty set $A$. For $a \in A$ and a function $s : \mathbb{N} \to A$ write $s^{-1}(\{a\}) = \{\, k \in \mathbb{N} : s(k) = a \,\}$.

[L1] $A$ is at most countable when $A \approx n$ for some $n \in \mathbb{N}$ or $A \approx \mathbb{N}$; $A \approx 0 = \varnothing$ holds only for $A = \varnothing$ ([[def-countable]], [[def-natural-numbers]]).

[L2] Bijections, injections, surjections, images and the symmetry and transitivity of $\approx$; an injection is a bijection onto its image ([[def-injection-surjection-bijection]], [[def-equinumerous]]).

[L3] Well-ordering: every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L4] Every subset of an at most countable set is at most countable ([[lem-subset-of-countable]]).

[L5] For naturals, $k \in n \iff k < n$, so a natural number $n$ is the set $\{\, k \in \mathbb{N} : k < n \,\}$ of naturals below it; in particular $0 \in n$ whenever $n \ne 0$ ([[lem-nat-order-is-membership]], proved earlier on this page from the additive order of [[def-nat-order]] on the von Neumann naturals of [[def-natural-numbers]]).

## Proof

**Proof technique:** direct.

1.1 For the forward implication assume $A$ is at most countable; since $A \ne \varnothing$ we have $A \approx \mathbb{N}$, or $A \approx n$ for some $n \in \mathbb{N}$ with $n \ne 0$, and in either case fix a bijection $\psi$ from $\mathbb{N}$, respectively from $n$, onto $A$. [assume-hyp, given, L1, L2]

1.2 For the converse implication assume a surjection $s : \mathbb{N} \to A$ is given. [assume-hyp]

2.1 If $\psi$ is defined on $\mathbb{N}$ it is itself a surjection $\mathbb{N} \to A$; if $\psi$ is defined on $n \ne 0$, then $0 \in n$ by [L5] and the function $s_\psi : \mathbb{N} \to A$ with $s_\psi(k) = \psi(k)$ for $k < n$ and $s_\psi(k) = \psi(0)$ for $k \ge n$ is a surjection, since every element of $A$ is $\psi(k)$ for some $k \in n$. In both cases a surjection $\mathbb{N} \to A$ exists. [step 1.1, L2, L5, construct]

2.2 For each $a \in A$ the set $s^{-1}(\{a\})$ is a nonempty subset of $\mathbb{N}$, because $s$ is surjective, so [L3] provides its least element and $j(a) := \min s^{-1}(\{a\})$ defines a function $j : A \to \mathbb{N}$; no selection is made, since the least element is uniquely determined. [step 1.2, L3, construct]

3.1 $j$ is injective: if $j(a) = j(a') = k$ then $s(k) = a$ and $s(k) = a'$, because $j(a) \in s^{-1}(\{a\})$ and $j(a') \in s^{-1}(\{a'\})$, so $a = a'$. [step 2.2, L2]

4.1 Hence $j$ is a bijection of $A$ onto $j[A] \subseteq \mathbb{N}$, so $A \approx j[A]$; the subset $j[A]$ of the at most countable set $\mathbb{N}$ is at most countable by [L4], and transitivity of $\approx$ transfers this to $A$. [step 3.1, L1, L2, L4]

5.1 The forward implication is step 2.1 and the converse is step 4.1, so for nonempty $A$ countability and the existence of a surjection $\mathbb{N} \to A$ are equivalent, with $j$ of step 2.2 the promised injection $A \to \mathbb{N}$. [step 2.1, step 3.1, step 4.1] ∎

## Remarks

- The hypothesis $A \ne \varnothing$ cannot be dropped in the forward direction: $\varnothing$ is finite, hence at most countable, but no function $\mathbb{N} \to \varnothing$ exists at all. The converse direction needs no such hypothesis, since a surjection onto $A$ already forces $A \ne \varnothing$.

- Combining the two directions: a nonempty $A$ is at most countable if and only if $A \preceq \mathbb{N}$ ([[def-equinumerous]]). The forward direction of that reformulation is immediate, and the backward direction is step 4.1.

- The lemma is what licenses the informal phrase "enumerate $A$ as $a_0, a_1, a_2, \dots$, possibly with repetitions". Repetitions are exactly what distinguishes a surjection from a bijection, and allowing them is what makes the criterion easy to apply: the enumerations built in [[thm-product-of-countable]] and [[thm-countable-union-of-countable]] repeat.
````

### `lem-of-inverse-positive`

````markdown
---
id: lem-of-inverse-positive
kind: lemma
title: "Inverses of positives are positive, and reciprocation reverses order"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-ordered-field, lem-of-sign-rules, cor-of-one-positive]
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
    - title: "University of Innsbruck notes: Ordered fields"
      url: "https://www.uibk.ac.at/media/filer_public/28/02/280225fd-dde6-4e9c-bff6-baad33ff4a05/ragen.pdf"
pipeline_run: null
proof_strategy: direct
---

## Statement

Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and
let $a, b \in F$.

1. If $a > 0$ then $a^{-1} > 0$.
2. If $0 < a < b$ then $0 < b^{-1} < a^{-1}$.

## Facts & Assumptions

**Given:** An ordered field $F$ with positive cone $P$, and elements $a, b \in F$.

[L1] $x > 0 \iff x \in P$; $x < 0 \iff -x \in P$; and for $x \neq 0$ exactly one of $x \in P$, $-x \in P$ holds ([[def-ordered-field]]).

[L2] Sign rules: a product of a positive and a negative is negative, a product of two positives is positive, and for $c > 0$ one has $a < b \iff ac < bc$ ([[lem-of-sign-rules]]).

[L3] $0 < 1$; in particular $1 \neq 0$ ([[cor-of-one-positive]]).

[L4] $P$ is closed under addition, so $<$ is transitive ([[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Assume $a > 0$, so $a \neq 0$ and its inverse $a^{-1}$ exists with $a \cdot a^{-1} = 1$; moreover $a^{-1} \neq 0$, since $a^{-1}$ has $a$ as its inverse while $0$ is non-invertible ($1 \neq 0$ by L3). [assume-hyp, L1, L3]

2.1 By trichotomy $a^{-1} \in P$ or $-a^{-1} \in P$; if $-a^{-1} \in P$, then $a > 0$ and $a^{-1} < 0$ give $a \cdot a^{-1} < 0$ by the sign rules, i.e. $1 < 0$, contradicting $0 < 1$; hence $a^{-1} \in P$, i.e. $a^{-1} > 0$, proving claim 1. [step 1.1, L2, L3, L1]

3.1 Assume $0 < a < b$; then $0 < b$ by transitivity, so by claim 1 both $a^{-1} > 0$ and $b^{-1} > 0$, and the sign rules give $a^{-1} b^{-1} > 0$. [assume-hyp, step 2.1, L4, L2, L1]

4.1 Multiplying $a < b$ by the positive $a^{-1} b^{-1}$ via the sign rules gives $a (a^{-1} b^{-1}) < b (a^{-1} b^{-1})$; since $a a^{-1} = 1$ and $b b^{-1} = 1$, this simplifies to $b^{-1} < a^{-1}$. [step 3.1, L2, algebra]

5.1 Together with $b^{-1} > 0$ from step 3.1, we conclude $0 < b^{-1} < a^{-1}$, proving claim 2. [step 3.1, step 4.1] ∎
````

### `lem-of-naturals-positive`

````markdown
---
id: lem-of-naturals-positive
kind: lemma
title: "Canonical naturals are positive and strictly increasing"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-of-one-positive, lem-of-add-order, def-field]
aliases: []
landmark: false
short: "n·1 > 0"
proof_strategy: induction
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
    - title: "Elias Zakon, Mathematical Analysis: Natural Numbers and Induction"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/02%3A_Real_Numbers_and_Fields/2.02%3A_Natural_Numbers._Induction"
pipeline_run: null
---

## Statement

Let $F$ be an ordered field, with field structure as in [[def-field]], and for
$n \ge 1$ let $n \cdot 1_F$ denote the canonical natural number
$\underbrace{1_F + \cdots + 1_F}_{n}$, defined recursively by $1 \cdot 1_F = 1_F$
and $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$. Then for every $n \ge 1$:

- $n \cdot 1_F > 0$ and $(n+1) \cdot 1_F > n \cdot 1_F$;
- the map $n \mapsto n \cdot 1_F$ is strictly increasing, hence injective, on $\{1, 2, 3, \dots\}$;
- $(m+n) \cdot 1_F = m \cdot 1_F + n \cdot 1_F$ and $(mn) \cdot 1_F = (m \cdot 1_F)(n \cdot 1_F)$ for all $m, n \ge 1$.

## Facts & Assumptions

**Given:** An ordered field $F$ whose canonical naturals are defined recursively by $1 \cdot 1_F = 1_F$ and $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$, with $0 \cdot 1_F = 0$.

[L1] $0 < 1_F$ in every ordered field ([[cor-of-one-positive]]).

[L2] The order is compatible with addition and positives are closed under addition: $a < b$ implies $a + c < b + c$, and $a > 0$, $b > 0$ imply $a + b > 0$ ([[lem-of-add-order]]).

## Proof

**Proof technique:** induction.

1.1 Base case $n = 1$: by definition $1 \cdot 1_F = 1_F$, and $1_F > 0$. [L1, base]

1.2 Inductive hypothesis: assume $n \cdot 1_F > 0$ for some fixed $n \ge 1$. [ih]

1.3 By the recursion, $(n+1) \cdot 1_F - n \cdot 1_F = 1_F > 0$, so $(n+1) \cdot 1_F > n \cdot 1_F$. [given, L1]

1.4 Additive identity: fix $m$ and induct on $n$; at $n = 1$, $(m+1) \cdot 1_F = m \cdot 1_F + 1_F$ by the recursion, and if $(m+n) \cdot 1_F = m \cdot 1_F + n \cdot 1_F$ then $(m+n+1) \cdot 1_F = (m+n) \cdot 1_F + 1_F = m \cdot 1_F + n \cdot 1_F + 1_F = m \cdot 1_F + (n+1) \cdot 1_F$. [given, algebra]

2.1 Inductive step: $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$ is a sum of two positives, by the hypothesis and $1_F > 0$, hence $(n+1) \cdot 1_F > 0$. [step 1.2, L1, L2]

2.2 Iterating 1.3, for $m < n$ one has $m \cdot 1_F < n \cdot 1_F$, so $n \mapsto n \cdot 1_F$ is strictly increasing and therefore injective on $\{1, 2, 3, \dots\}$. [step 1.3, L2]

2.3 Multiplicative identity: fix $m$ and induct on $n$; at $n = 1$, $(m \cdot 1) \cdot 1_F = m \cdot 1_F = (m \cdot 1_F)(1 \cdot 1_F)$, and the step $(m(n+1)) \cdot 1_F = (mn + m) \cdot 1_F = (mn) \cdot 1_F + m \cdot 1_F = (m \cdot 1_F)(n \cdot 1_F) + (m \cdot 1_F)(1_F) = (m \cdot 1_F)((n+1) \cdot 1_F)$ uses 1.4 and distributivity. [step 1.4, algebra]

3.1 By induction on 1.1, 1.2, 2.1, $n \cdot 1_F > 0$ for every $n \ge 1$; with the strict increase 2.2 and the identities 1.4, 2.3, every claim holds. [step 2.1, step 2.2, step 1.4, step 2.3, discharge-induction] ∎
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

### `lem-subset-of-countable`

````markdown
---
id: lem-subset-of-countable
kind: lemma
title: "Every subset of an at most countable set is at most countable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-countable, thm-well-ordering-principle, thm-recursion, thm-strong-induction, def-equinumerous, def-injection-surjection-bijection, def-natural-numbers, def-nat-order, lem-nat-order-is-membership, lem-nat-transitive-irreflexive, lem-nat-discrete, lem-nat-nonzero-is-successor, lem-nat-trichotomy, thm-nat-linear-order]
justified_by: []
aliases: []
landmark: false
short: "subsets of countable sets are countable"
proof_strategy: cases
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
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "J. Lebl, Basic Analysis: Introduction to Real Analysis, basic set theory"
      url: "https://www.jirka.org/ra/html/sec_basicset.html"
    - title: "Countable set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countable_set"
    - title: "T. Tao, Analysis I, 3rd ed., §8.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $A$ be at most countable ([[def-countable]]) and let $B \subseteq A$. Then
$B$ is at most countable.

The proof establishes the sharper statement about subsets of $\mathbb{N}$ from
which this follows: **a subset $S \subseteq \mathbb{N}$ is finite if it is
bounded above, and countably infinite if it is not.**

**No choice principle is used.** This is the point of the lemma rather than a
footnote to it. The enumeration of an unbounded $S \subseteq \mathbb{N}$ is built
by always taking the *least* element of $S$ above the previous one, and the least
element of a nonempty set of naturals is canonical
([[thm-well-ordering-principle]]): it is determined by $S$, not selected from it.
Replacing "least" by "some" would turn the construction into an appeal to
dependent choice.

## Facts & Assumptions

**Given:** An at most countable set $A$ and a subset $B \subseteq A$. Throughout, a natural number is the von Neumann natural, so that $0 = \varnothing$ and $\sigma(n) = n \cup \{n\}$ ([[def-natural-numbers]]); that $n = \{\, m \in \mathbb{N} : m < n \,\}$, and in particular that every element of a natural number is a natural number, is [[lem-nat-order-is-membership]], proved earlier on this page from the additive order of [[def-nat-order]].

[L1] $A$ is finite when $A \approx n$ for some $n \in \mathbb{N}$, countably infinite when $A \approx \mathbb{N}$, and at most countable when one of the two holds ([[def-countable]]).

[L2] $\approx$ is symmetric and transitive, an injection is a bijection onto its image, and the restriction of a bijection to a subset is a bijection onto the image of that subset ([[def-equinumerous]], [[def-injection-surjection-bijection]]).

[L3] Well-ordering: every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L4] Strong induction: if for every $n$ the truth of $P(m)$ for all $m < n$ implies $P(n)$, then $P(n)$ holds for every $n$ ([[thm-strong-induction]]).

[L5] Recursion: for any set $X$, any $x_0 \in X$ and any $F : X \to X$ there is a function $h : \mathbb{N} \to X$ with $h(0) = x_0$ and $h(\sigma(n)) = F(h(n))$ ([[thm-recursion]]).

[L6] Order facts in $\mathbb{N}$: $m \in n \iff m < n$, $m \le n \iff m \subseteq n$, $n < \sigma(n)$, and $m < \sigma(n) \iff m \le n$ ([[lem-nat-order-is-membership]]); exactly one of $m < n$, $m = n$, $n < m$ holds, so $<$ is irreflexive and any two naturals are comparable ([[lem-nat-trichotomy]]); $\le$ is reflexive, antisymmetric, transitive and total ([[thm-nat-linear-order]]), whence $<$ is transitive, because $m < n < p$ gives $m \le p$ while $m = p$ would force $m = n$ by antisymmetry; $m < n \iff \sigma(m) \le n$ ([[lem-nat-discrete]]).

[L7] Every nonzero natural is a successor ([[lem-nat-nonzero-is-successor]]).

[L8] Membership is irreflexive on $\mathbb{N}$: $k \notin k$ for every $k \in \mathbb{N}$, and every natural number is a transitive set ([[lem-nat-transitive-irreflexive]]).

## Proof

**Proof technique:** cases.

1.1 Since $A$ is at most countable there is a bijection $\varphi : A \to N_0$ where $N_0 = n$ for some $n \in \mathbb{N}$ or $N_0 = \mathbb{N}$; in either case $N_0 \subseteq \mathbb{N}$, and restricting $\varphi$ to $B$ gives a bijection of $B$ onto $S := \varphi[B] \subseteq \mathbb{N}$, so $B \approx S$. It therefore suffices to prove that every subset of $\mathbb{N}$ is at most countable, since then $S \approx n'$ or $S \approx \mathbb{N}$ and transitivity carries the conclusion back to $B$. [given, L1, L2, L6, suffices: every subset of N is at most countable]

1.2 Every subset of a natural number is finite: by strong induction on $n$, assume every subset of every $m < n$ is finite. If $n = 0$ then a subset $T \subseteq 0 = \varnothing$ is empty and $T \approx 0$. Otherwise $n = \sigma(m)$ by [L7], with $m < n$; given $T \subseteq \sigma(m) = m \cup \{m\}$, the set $T \setminus \{m\}$ is a subset of $m$, so the hypothesis at $m$ gives a bijection $u : T \setminus \{m\} \to k$ for some $k \in \mathbb{N}$. If $m \notin T$ then $T = T \setminus \{m\} \approx k$. If $m \in T$, extend $u$ by $u(m) := k$; since $k \notin k$ by irreflexivity of membership, the value $k$ is not already taken and the extension is a bijection $T \to k \cup \{k\} = \sigma(k)$. In both cases $T$ is finite, so the claim holds for $n$ and hence for all $n$. [L1, L2, L4, L6, L7, L8]

1.3 Case $S$ bounded: assume there is $b_0 \in \mathbb{N}$ with $s \le b_0$ for every $s \in S$. Then $s < \sigma(b_0)$ for every $s \in S$ by [L6], that is, $S \subseteq \sigma(b_0)$. [assume-case bounded, L6]

1.4 Case $S$ unbounded: assume that for every $b \in \mathbb{N}$ there is $s \in S$ with $b < s$. Then $S \ne \varnothing$, and for each $s \in S$ the set $\{\, t \in S : s < t \,\}$ is nonempty, so [L3] makes $\nu(s) := \min \{\, t \in S : s < t \,\}$ a well-defined element of $S$ with $s < \nu(s)$; this defines a function $\nu : S \to S$ with no arbitrary choices. [assume-case unbounded, L3, construct]

2.1 In the bounded case $S$ is a subset of the natural number $\sigma(b_0)$, hence finite by step 1.2, hence at most countable. [step 1.2, step 1.3, L1]

2.2 In the unbounded case apply [L5] with $X = S$, $x_0 = \min S$ (available by [L3] since $S \ne \varnothing$) and $F = \nu$: there is $e : \mathbb{N} \to S$ with $e(0) = \min S$ and $e(\sigma(n)) = \nu(e(n)) = \min \{\, t \in S : e(n) < t \,\}$ for every $n$. [step 1.4, L3, L5, construct]

3.1 For every $n$, $e(n) < e(\sigma(n))$ by the defining property of $\nu$; consequently $m < n$ implies $e(m) < e(n)$, by strong induction on $n$ (for $n = \sigma(j)$ and $m < n$ one has $m \le j$ by [L6], so either $m = j$, giving $e(m) < e(\sigma(j))$ directly, or $m < j$, giving $e(m) < e(j) < e(\sigma(j))$ by the hypothesis at $j$ and transitivity). Hence $e$ is injective: if $m \ne n$ then $m < n$ or $n < m$ by comparability, and irreflexivity forbids $e(m) = e(n)$. [step 2.2, L4, L6, L7]

3.2 For every $k$, $k \le e(k)$: again by strong induction, at $k = 0$ this is immediate, and for $k = \sigma(j)$ the hypothesis at $j$ gives $j \le e(j) < e(\sigma(j))$, so $j < e(k)$ and therefore $\sigma(j) \le e(k)$ by [L6], that is $k \le e(k)$. [step 2.2, L4, L6, L7]

4.1 $e$ is surjective onto $S$: let $t \in S$. The set $K = \{\, k \in \mathbb{N} : t \le e(k) \,\}$ contains $t$ by step 3.2, so $k^\ast := \min K$ exists by [L3]. If $k^\ast = 0$ then $e(0) = \min S \le t$ because $t \in S$, and $t \le e(0)$, so $e(0) = t$. Otherwise $k^\ast = \sigma(j)$ by [L7], and $j \notin K$ by minimality, so $e(j) < t$; then $t$ belongs to $\{\, u \in S : e(j) < u \,\}$, whence $e(k^\ast) = \min \{\, u \in S : e(j) < u \,\} \le t$, and with $t \le e(k^\ast)$ this gives $e(k^\ast) = t$. In both cases $t$ is a value of $e$. [step 2.2, step 3.2, L3, L6, L7]

5.1 In the unbounded case $e : \mathbb{N} \to S$ is therefore a bijection, so $S \approx \mathbb{N}$ and $S$ is countably infinite, hence at most countable. [step 3.1, step 4.1, L1, L2]

6.1 Every $S \subseteq \mathbb{N}$ is either bounded above or not, so steps 2.1 and 5.1 cover all cases and every subset of $\mathbb{N}$ is at most countable; by the reduction of step 1.1 the subset $B$ of the at most countable set $A$ is at most countable. [step 1.1, step 2.1, step 5.1, cases-exhaustive, L1, L2] ∎

## Remarks

- A subset of a countably infinite set may perfectly well be finite: $\{0, 1\}$ and $\varnothing$ are subsets of $\mathbb{N}$. This is exactly why the conclusion is "at most countable" and not "countably infinite", and it is why the library's convention that "countable" means "at most countable" ([[def-countable]]) keeps the statement free of case distinctions.

- The dichotomy proved here, bounded subsets of $\mathbb{N}$ are finite and unbounded ones are copies of $\mathbb{N}$, is the only structural fact about $\mathbb{N}$ the rest of the page needs. The enumeration $e$ built in the unbounded case is the increasing one, and it is unique with that property.

- The bounded case rests on the von Neumann encoding: "bounded by $b_0$" is literally "a subset of the set $\sigma(b_0)$", which is what makes the induction of step 1.2 an induction on a natural number rather than on an informal count. That translation is not a convention but a theorem, [[lem-nat-order-is-membership]], since the library's order on $\mathbb{N}$ is defined additively ([[def-nat-order]]) and not by membership.
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

### `thm-of-archimedean`

````markdown
---
id: thm-of-archimedean
kind: theorem
title: "Every complete ordered field is Archimedean"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-complete-ordered-field, lem-of-naturals-positive, cor-of-one-positive, def-ordered-field]
aliases: []
landmark: true
short: "complete ⇒ Archimedean"
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
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Neil Donaldson, Math 140A notes: Completeness and the Archimedean property"
      url: "https://www.math.uci.edu/~ndonalds/math140a/1complete.html"
pipeline_run: null
---

## Statement

Every complete ordered field $F$ ([[def-complete-ordered-field]]) is Archimedean:
for every $x \in F$ there is a natural number $n \ge 1$ with $x < n \cdot 1_F$,
where $n \cdot 1_F$ is the canonical natural of the ordered field $F$
([[def-ordered-field]]). Equivalently, the canonical naturals are cofinal in $F$.

## Facts & Assumptions

**Given:** A complete ordered field $F$; write $A = \{\, n \cdot 1_F : n \ge 1 \,\}$ for the set of its canonical naturals.

[L1] Least-upper-bound property: every nonempty $S \subseteq F$ that is bounded above has a least upper bound $\sup S \in F$ ([[def-complete-ordered-field]]).

[L2] Each canonical natural satisfies $n \cdot 1_F > 0$, one has $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$, and $(n+1) \cdot 1_F > n \cdot 1_F$ ([[lem-of-naturals-positive]]).

[L3] $0 < 1_F$ ([[cor-of-one-positive]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $F$ is not Archimedean: there is some $x \in F$ with $n \cdot 1_F \le x$ for all $n \ge 1$, that is, $x$ is an upper bound of $A$. [assume-contra]

2.1 The set $A$ is nonempty, since $1 \cdot 1_F = 1_F \in A$, and it is bounded above by $x$. [step 1.1, L2]

3.1 By the least-upper-bound property, $A$ has a least upper bound $s = \sup A \in F$. [step 2.1, L1]

4.1 Since $1_F > 0$, we have $s - 1_F < s$; as $s$ is the least upper bound, $s - 1_F$ is not an upper bound of $A$. [step 3.1, L3]

5.1 Hence there is some $m \ge 1$ with $m \cdot 1_F > s - 1_F$. [step 4.1]

6.1 Adding $1_F$ to both sides, $(m+1) \cdot 1_F = m \cdot 1_F + 1_F > s$. [step 5.1, L2]

7.1 But $(m+1) \cdot 1_F \in A$, so $(m+1) \cdot 1_F \le s$ because $s$ is an upper bound of $A$, contradicting 6.1. [step 6.1, step 3.1, L2]

8.1 The assumption is therefore untenable, so $F$ is Archimedean. [step 7.1, discharge-contradiction] ∎
````

