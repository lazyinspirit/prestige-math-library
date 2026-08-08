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

## Target item — `lem-limsup-monotone-comparison`

Normalized current SHA-256: `fd4d40499208e9be83a4cc78b1fe411d18806f62b764cf7a849b3833ad4b70aa`

The complete current item follows, including frontmatter:

````markdown
---
id: lem-limsup-monotone-comparison
kind: lemma
title: "If $x_k \\le y_k$ eventually then $\\limsup x_k \\le \\limsup y_k$ and $\\liminf x_k \\le \\liminf y_k$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-limsup-liminf, lem-limsup-exists, lem-extended-reals-complete, def-extended-reals, def-upper-bound, def-partial-order, def-sequence, def-nat-order, thm-nat-linear-order]
justified_by: []
aliases: []
landmark: false
short: "comparison of $\\limsup$"
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
    - title: "Limit superior and limit inferior (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_superior_and_limit_inferior"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §2.3"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement

Let $(x_k)$ and $(y_k)$ be sequences of reals ([[def-sequence]]) with
$x_k \le y_k$ **eventually**, that is for all $k$ from some index on. Then

$$\limsup_{k} x_k \;\le\; \limsup_{k} y_k \qquad \text{and} \qquad \liminf_{k} x_k \;\le\; \liminf_{k} y_k$$

in $\overline{\mathbb{R}}$ ([[def-limsup-liminf]], [[def-extended-reals]]). No
boundedness or convergence hypothesis is placed on either sequence.

## Facts & Assumptions

**Given:** Sequences $(x_k)$ and $(y_k)$ of reals and an index $K \in \mathbb{N}$ with $x_k \le y_k$ for every $k \ge K$; the tail ranges $T_n(x) = \{x_k : k \ge n\}$ and $T_n(y)$, and the extended tail bounds $s_n(x) = \sup T_n(x)$, $i_n(x) = \inf T_n(x)$ and likewise for $y$ ([[def-limsup-liminf]]).

[L1] All tail bounds and both of $\limsup$, $\liminf$ exist in $\overline{\mathbb{R}}$; $s_n$ is the least upper bound of the tail range and $i_n$ its greatest lower bound; $\limsup_k y_k$ is the greatest lower bound of $\{s_n(y)\}$ and $\liminf_k y_k$ the least upper bound of $\{i_n(y)\}$; and $s_m \le s_n$, $i_n \le i_m$ whenever $n \le m$ ([[lem-limsup-exists]], [[lem-extended-reals-complete]], [[def-upper-bound]], [[def-partial-order]]).

[L2] The order on $\overline{\mathbb{R}}$ is transitive and restricts on $\mathbb{R}$ to the order of $\mathbb{R}$ ([[def-extended-reals]], [[def-partial-order]]).

[L3] A property holds *eventually* when it holds for all indices from some index on ([[def-sequence]]).

[L4] The order on $\mathbb{N}$ is total, so every $n$ satisfies $n \ge K$ or $n < K$, and in the latter case $n \le K$ ([[def-nat-order]], [[thm-nat-linear-order]]).

## Proof

**Proof technique:** direct.

1.1 By hypothesis fix $K \in \mathbb{N}$ with $x_k \le y_k$ for every $k \ge K$. [given, L3]

2.1 Let $n \ge K$. Every $k \ge n$ satisfies $k \ge K$, so $x_k \le y_k \le s_n(y)$, and therefore $s_n(y)$ is an upper bound of $T_n(x)$, whence $s_n(x) \le s_n(y)$ by leastness. Dually $i_n(x) \le x_k \le y_k$ for every $k \ge n$, so $i_n(x)$ is a lower bound of $T_n(y)$ and $i_n(x) \le i_n(y)$ by greatest-lower-boundedness. [step 1.1, L1, L2, L4]

3.1 For every $n \in \mathbb{N}$ one has $\limsup_k x_k \le s_n(y)$. If $n \ge K$ this is $\limsup_k x_k \le s_n(x) \le s_n(y)$, the first inequality because $\limsup_k x_k$ is a lower bound of $\{s_m(x)\}$. If $n < K$ then $n \le K$, so $s_K(y) \le s_n(y)$, and $\limsup_k x_k \le s_K(x) \le s_K(y) \le s_n(y)$. [step 2.1, L1, L2, L4]

3.2 For every $n \in \mathbb{N}$ one has $i_n(x) \le \liminf_k y_k$. If $n \ge K$ this is $i_n(x) \le i_n(y) \le \liminf_k y_k$, the second inequality because $\liminf_k y_k$ is an upper bound of $\{i_m(y)\}$. If $n < K$ then $n \le K$, so $i_n(x) \le i_K(x) \le i_K(y) \le \liminf_k y_k$. [step 2.1, L1, L2, L4]

4.1 By step 3.1 the element $\limsup_k x_k$ is a lower bound of $\{s_n(y) : n \in \mathbb{N}\}$, whose greatest lower bound is $\limsup_k y_k$, so $\limsup_k x_k \le \limsup_k y_k$. By step 3.2 the element $\liminf_k y_k$ is an upper bound of $\{i_n(x) : n \in \mathbb{N}\}$, whose least upper bound is $\liminf_k x_k$, so $\liminf_k x_k \le \liminf_k y_k$. [step 3.1, step 3.2, L1] ∎

## Remarks

- **"Eventually" is enough, and the proof shows why.** Only tails with $n \ge K$
  are compared directly; the finitely many earlier tail bounds are absorbed by
  monotonicity of the tail bounds ([[lem-limsup-exists]]), which lets $s_K(y)$
  stand in for every earlier $s_n(y)$. No appeal to [[lem-limit-of-tail]] is
  needed, since neither quantity is defined as a limit.

- **The comparison does not become strict.** From $x_k < y_k$ for every $k$ one
  gets only $\limsup_k x_k \le \limsup_k y_k$; the sequences $x_k = 0$ and
  $y_k = 1/(k+1)$ have equal limits and hence equal limit superiors. This is the
  same phenomenon as for limits ([[lem-limit-preserves-order]]).

- **Both conclusions have the same direction.** It is the *inner* operation that
  differs between $\limsup$ and $\liminf$, and both a supremum and an infimum are
  monotone in the set, so a pointwise inequality pushes both quantities the same
  way. What fails to be monotone is the *gap* between them: nothing here compares
  $\limsup_k x_k$ with $\liminf_k y_k$.
````

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "lem-limsup-exists",
      "source_section": "Statement",
      "quote": "Let $(x_k)$ be a sequence of reals ([[def-sequence]]), with tail ranges $T_n$ and\nextended tail bounds $s_n = \\sup T_n$, $i_n = \\inf T_n$ as in\n[[def-limsup-liminf]].\n\n1. **Monotonicity of the extended bounds under inclusion.** If\n   $A \\subseteq B \\subseteq \\overline{\\mathbb{R}}$ ([[def-extended-reals]]) then\n   $$\\sup A \\le \\sup B \\qquad \\text{and} \\qquad \\inf B \\le \\inf A,$$\n   the four quantities being the extended bounds of [[lem-extended-reals-complete]].\n   No hypothesis is placed on $A$ or $B$; in particular $A$ may be empty.\n2. **The tail bounds are monotone.** $T_m \\subseteq T_n$ whenever $n \\le m$, and\n   hence\n   $$s_m \\le s_n \\qquad \\text{and} \\qquad i_n \\le i_m \\qquad (n \\le m).$$\n   In particular $s_{n+1} \\le s_n$ and $i_n \\le i_{n+1}$ for every $n$, and\n   $i_n \\le s_n$ for every $n$.\n3. **Existence.** $\\limsup_k x_k$ and $\\liminf_k x_k$ exist in\n   $\\overline{\\mathbb{R}}$ for **every** sequence of reals, bounded or not.\n\nClaim 1 is the tool the rest of this page uses whenever two extended suprema are\ncompared. It is proved here, from the definition of a least upper bound, rather\nthan quoted from the suprema page, for the reason given in the remarks below.",
      "uses": [
        "2.1",
        "3.1",
        "3.2",
        "4.1"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-extended-reals-complete",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\overline{\\mathbb{R}}$ be **any** subset of the extended real\nline ([[def-extended-reals]]) and write $A_{\\mathbb{R}} := A \\cap \\mathbb{R}$.\nThen $A$ has a least upper bound and a greatest lower bound in\n$\\overline{\\mathbb{R}}$ ([[def-upper-bound]]), each unique, which we write\n$\\sup A$ and $\\inf A$ with the ambient set always $\\overline{\\mathbb{R}}$.\nExplicitly:\n\n- $\\sup A = +\\infty$ if $+\\infty \\in A$, or if $A_{\\mathbb{R}}$ is not bounded above in $\\mathbb{R}$;\n- $\\sup A = -\\infty$ if $+\\infty \\notin A$ and $A_{\\mathbb{R}} = \\emptyset$;\n- $\\sup A$ is the real supremum $\\sup A_{\\mathbb{R}}$ ([[def-complete-ordered-field]]) if $+\\infty \\notin A$ and $A_{\\mathbb{R}}$ is nonempty and bounded above in $\\mathbb{R}$;\n\nand dually, with $-\\infty$ and $+\\infty$ exchanged and \"above\" replaced by\n\"below\", for $\\inf A$ ([[def-infimum]], [[thm-infimum-property]]).\n\n**Agreement.** If $A \\subseteq \\mathbb{R}$ is nonempty and bounded above in\n$\\mathbb{R}$ ([[def-bounded-set]]) then $\\sup A$ computed in\n$\\overline{\\mathbb{R}}$ is the real number $\\sup A$ of\n[[def-complete-ordered-field]]; if $A \\subseteq \\mathbb{R}$ is nonempty and\nbounded below then $\\inf A$ computed in $\\overline{\\mathbb{R}}$ is the real\nnumber $\\inf A$ of [[thm-infimum-property]]. In particular the notation is\nunambiguous on the sets for which the real supremum and infimum are defined, and\n$\\sup \\emptyset = -\\infty$, $\\inf \\emptyset = +\\infty$ in\n$\\overline{\\mathbb{R}}$.\n\n**No hypothesis is placed on $A$.** This is exactly what the real supremum cannot\ndo, and it is why every $\\limsup$ statement on this page holds for every sequence\nrather than for bounded ones only. It is also not a weakening of the discipline\nthis library keeps around suprema: the operation supplied here is a *different*\noperation, taken in a *different* ordered set, and the agreement clause records\nexactly where the two coincide.",
      "uses": [
        "2.1",
        "3.1",
        "3.2",
        "4.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-upper-bound",
      "source_section": "Definition",
      "quote": "Let $(P, \\le)$ be a poset ([[def-partial-order]]) and $S \\subseteq P$.\n\nAn element $u \\in P$ is an **upper bound** of $S$ if $s \\le u$ for every\n$s \\in S$.\n\nAn element $u \\in P$ is a **least upper bound** (or **supremum**) of $S$ if $u$\nis an upper bound of $S$ and $u \\le v$ for every upper bound $v$ of $S$. When it\nexists we write $u = \\sup S$.\n\nAn element $u \\in P$ is a **strict upper bound** of $S$ if $s < u$ for every\n$s \\in S$.",
      "uses": [
        "2.1",
        "3.1",
        "3.2",
        "4.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-partial-order",
      "source_section": "Definition",
      "quote": "Let $P$ be a set. A **partial order** on $P$ is a binary relation $\\le$ on $P$\nsuch that, for all $x, y, z \\in P$:\n\n- **(R)** *reflexivity*: $x \\le x$;\n- **(A)** *antisymmetry*: if $x \\le y$ and $y \\le x$, then $x = y$;\n- **(T)** *transitivity*: if $x \\le y$ and $y \\le z$, then $x \\le z$.\n\nThe pair $(P, \\le)$ is a **partially ordered set**, abbreviated **poset**. When\nthe order is clear we write $P$ for the pair.\n\nThe associated **strict order** is defined by\n$$x < y \\quad :\\Longleftrightarrow \\quad x \\le y \\text{ and } x \\ne y.$$\n\nTwo elements $x, y \\in P$ are **comparable** if $x \\le y$ or $y \\le x$, and\n**incomparable** otherwise. A partial order in which every two elements are\ncomparable is a **total order** (equivalently a **linear order**), and $(P, \\le)$\nis then a **totally ordered set**.",
      "uses": [
        "2.1",
        "3.1",
        "3.2",
        "4.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-extended-reals",
      "source_section": "Definition",
      "quote": "Fix two objects $-\\infty$ and $+\\infty$, distinct from one another and neither of\nthem a real number ([[def-real-numbers]]), and set\n\n$$\\overline{\\mathbb{R}} := \\mathbb{R} \\cup \\{-\\infty, +\\infty\\}.$$\n\nThis is a **new object**, introduced here explicitly with its own order and its\nown partial arithmetic. It is not an enlargement of the field $\\mathbb{R}$, and\nno operation of $\\mathbb{R}$ ([[def-complete-ordered-field]]) is redefined by\nanything below.\n\n**The order.** For $a, b \\in \\overline{\\mathbb{R}}$ declare\n\n$$a \\le b \\quad :\\Longleftrightarrow \\quad a = -\\infty \\ \\text{ or } \\ b = +\\infty \\ \\text{ or } \\ \\big(a, b \\in \\mathbb{R} \\text{ and } a \\le b \\text{ in } \\mathbb{R}\\big),$$\n\nwith $\\mathbb{R}$ ordered as in [[def-real-order]], and write $a < b$ for\n\"$a \\le b$ and $a \\ne b$\" as usual ([[def-partial-order]]).\n\n**$(\\overline{\\mathbb{R}}, \\le)$ is a totally ordered set, and the inclusion of\n$\\mathbb{R}$ preserves and reflects the order.** All four checks are immediate\nfrom the displayed clauses.\n\n- *Reflexive.* For $a = \\pm\\infty$ one of the first two clauses applies; for\n  $a \\in \\mathbb{R}$ the third does, since $a \\le a$ in $\\mathbb{R}$.\n- *Antisymmetric.* Suppose $a \\le b$ and $b \\le a$. If $a = -\\infty$ then\n  $b \\le a$ forces $b = -\\infty$, since the clause $a = +\\infty$ fails and $b, a$\n  are not both real. Symmetrically $b = -\\infty$ forces $a = -\\infty$, and\n  $a = +\\infty$ or $b = +\\infty$ forces the other to be $+\\infty$. In the one\n  remaining situation $a$ and $b$ are both real and antisymmetry is that of\n  $\\mathbb{R}$.\n- *Transitive.* Let $a \\le b \\le c$. If $a = -\\infty$ or $c = +\\infty$ the\n  conclusion is one of the first two clauses. Otherwise $a \\ne -\\infty$ forces,\n  in $a \\le b$, either $b = +\\infty$ or $a, b \\in \\mathbb{R}$; and $c \\ne +\\infty$\n  forces, in $b \\le c$, either $b = -\\infty$ or $b, c \\in \\mathbb{R}$. The value\n  $b = +\\infty$ is incompatible with the second alternative pair, so $b$ is real,\n  hence so are $a$ and $c$, and transitivity is that of $\\mathbb{R}$.\n- *Total.* If $a = -\\infty$ or $b = +\\infty$ then $a \\le b$; if $b = -\\infty$ or\n  $a = +\\infty$ then $b \\le a$; otherwise both are real and the order of\n  $\\mathbb{R}$ is total.\n- *Preserved and reflected.* For $a, b \\in \\mathbb{R}$ the first two clauses fail,\n  so $a \\le b$ in $\\overline{\\mathbb{R}}$ says exactly $a \\le b$ in $\\mathbb{R}$.\n\nIn particular $-\\infty$ is the least and $+\\infty$ the greatest element of\n$\\overline{\\mathbb{R}}$, and $-\\infty < x < +\\infty$ for every $x \\in \\mathbb{R}$.\n\n**Reflection.** Extend negation by\n\n$$-(+\\infty) := -\\infty, \\qquad -(-\\infty) := +\\infty,$$\n\nkeeping the field negative on $\\mathbb{R}$. The resulting map\n$\\nu : \\overline{\\mathbb{R}} \\to \\overline{\\mathbb{R}}$, $\\nu(a) = -a$, satisfies\n$\\nu(\\nu(a)) = a$ and\n\n$$a \\le b \\iff -b \\le -a \\qquad (a, b \\in \\overline{\\mathbb{R}}).$$\n\nFor $a$ and $b$ real this is the elementwise order reversal in $\\mathbb{R}$:\ntranslation invariance ([[lem-of-add-order]]) applied with the constant $-a-b$\nturns $a < b$ into $-b < -a$ and, applied with the constant $a+b$, turns it back,\nwhile $a = b$ holds exactly when $-a = -b$. In every other case both sides are\ndecided by the first two clauses of the order: $a = -\\infty$ makes both sides\ntrue, as does $b = +\\infty$, and if $a \\ne -\\infty$, $b \\ne +\\infty$ and $a, b$\nare not both real then one of $a = +\\infty$, $b = -\\infty$ holds and both sides\nare false.\n\n**Partial addition.** For $a, b \\in \\overline{\\mathbb{R}}$ the sum $a + b$ is\ndefined by\n\n- $a + b$ = the field sum, when $a, b \\in \\mathbb{R}$;\n- $a + b := +\\infty$ when $a = +\\infty$ and $b \\ne -\\infty$, or $b = +\\infty$ and $a \\ne -\\infty$;\n- $a + b := -\\infty$ when $a = -\\infty$ and $b \\ne +\\infty$, or $b = -\\infty$ and $a \\ne +\\infty$;\n\nand **the two sums $(+\\infty) + (-\\infty)$ and $(-\\infty) + (+\\infty)$ are left\nundefined**. Addition is commutative where defined, and\n\n$$-(a + b) = (-a) + (-b),$$\n\neach side being defined exactly when the other is: the excluded pairs\n$\\{+\\infty, -\\infty\\}$ are exchanged by $\\nu$, and the three clauses above are\nexchanged accordingly.\n\n**Partial multiplication.** For $a, b \\in \\overline{\\mathbb{R}}$ the product $ab$\nis defined by\n\n- $ab$ = the field product, when $a, b \\in \\mathbb{R}$;\n- $ab := +\\infty$ when one of $a, b$ is $\\pm\\infty$, the other is $\\ne 0$, and both are $> 0$ or both are $< 0$;\n- $ab := -\\infty$ when one of $a, b$ is $\\pm\\infty$, the other is $\\ne 0$, and one is $> 0$ and the other $< 0$;\n\nand **every product with one factor $0$ and the other $\\pm\\infty$ is left\nundefined**. The comparisons $> 0$ and $< 0$ here are taken in the order above,\nunder which $+\\infty > 0 > -\\infty$.\n\n**Nothing else is defined.** There is no subtraction, no division, no\nexponentiation and no absolute value on $\\overline{\\mathbb{R}}$ in this library;\nwhere such an expression is wanted it is written out in the two defined\noperations, and where a case falls in the undefined list the statement carries an\nexplicit hypothesis saying so.",
      "uses": [
        "2.1",
        "3.1",
        "3.2"
      ]
    },
    {
      "fact": "L2",
      "source": "def-partial-order",
      "source_section": "Definition",
      "quote": "Let $P$ be a set. A **partial order** on $P$ is a binary relation $\\le$ on $P$\nsuch that, for all $x, y, z \\in P$:\n\n- **(R)** *reflexivity*: $x \\le x$;\n- **(A)** *antisymmetry*: if $x \\le y$ and $y \\le x$, then $x = y$;\n- **(T)** *transitivity*: if $x \\le y$ and $y \\le z$, then $x \\le z$.\n\nThe pair $(P, \\le)$ is a **partially ordered set**, abbreviated **poset**. When\nthe order is clear we write $P$ for the pair.\n\nThe associated **strict order** is defined by\n$$x < y \\quad :\\Longleftrightarrow \\quad x \\le y \\text{ and } x \\ne y.$$\n\nTwo elements $x, y \\in P$ are **comparable** if $x \\le y$ or $y \\le x$, and\n**incomparable** otherwise. A partial order in which every two elements are\ncomparable is a **total order** (equivalently a **linear order**), and $(P, \\le)$\nis then a **totally ordered set**.",
      "uses": [
        "2.1",
        "3.1",
        "3.2"
      ]
    },
    {
      "fact": "L3",
      "source": "def-sequence",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]],\n[[def-real-numbers]]) with its order and absolute value ([[def-real-order]]), and\n$\\mathbb{N}$ is the set of natural numbers with its order ([[def-natural-numbers]],\n[[def-nat-order]]).\n\nA **sequence of reals** is a function $x : \\mathbb{N} \\to \\mathbb{R}$. We write\n$x_k$ for the value $x(k)$, call it the **$k$-th term**, and write $(x_k)$, or\n$(x_k)_{k \\in \\mathbb{N}}$, for the function itself. The **range** of $(x_k)$ is\nthe subset $\\{\\, x_k : k \\in \\mathbb{N} \\,\\} \\subseteq \\mathbb{R}$.\n\nLet $(x_k)$ be a sequence of reals and let $P$ be a property of indices.\n\n- $(x_k)$ is **bounded** if there is $M \\in \\mathbb{R}$ with $|x_k| \\le M$ for\n  every $k \\in \\mathbb{N}$; it is **unbounded** otherwise.\n- $P$ holds **eventually** if there is $K \\in \\mathbb{N}$ such that $P(k)$ holds\n  for every $k \\ge K$.\n- $P$ holds **frequently** if for every $K \\in \\mathbb{N}$ there is some\n  $k \\ge K$ for which $P(k)$ holds.\n- For $K \\in \\mathbb{N}$, the **$K$-th tail** of $(x_k)$ is the sequence\n  $x^{(K)}$ defined by $x^{(K)}_j := x_{j + K}$ for $j \\in \\mathbb{N}$; it is\n  again a sequence of reals.\n- A function $n : \\mathbb{N} \\to \\mathbb{N}$ is **strictly increasing** if\n  $n_j < n_k$ whenever $j < k$. For such an $n$, the **subsequence** of $(x_k)$\n  along $n$ is the composite $x \\circ n$, written $(x_{n_k})_{k \\in \\mathbb{N}}$;\n  it is again a sequence of reals.\n\n**Convergence and Cauchyness are not defined here.** They are already fixed, for\nsequences of reals, by the published [[def-real-limit]]: $(x_k)$ *converges* to\n$x \\in \\mathbb{R}$ when for every rational $\\varepsilon > 0$ there is\n$K \\in \\mathbb{N}$ with $|x_k - x| < \\varepsilon$ for all $k \\ge K$, and $(x_k)$\nis *Cauchy* when for every rational $\\varepsilon > 0$ there is $K \\in \\mathbb{N}$\nwith $|x_k - x_l| < \\varepsilon$ for all $k, l \\ge K$. This page builds the\ntoolkit for those two notions and does not restate them. A sequence\n**converges** if it converges to some real, and **diverges** if it does not.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-nat-order",
      "source_section": "Definition",
      "quote": "For $m, n \\in \\mathbb{N}$, define the **order** by\n\n$$m \\le n \\iff \\exists k \\in \\mathbb{N}\\ (m + k = n),$$\n\nand the **strict order** by $m < n \\iff (m \\le n \\text{ and } m \\neq n)$, using\naddition ([[def-nat-addition]]).",
      "uses": [
        "2.1",
        "3.1",
        "3.2"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-nat-linear-order",
      "source_section": "Statement",
      "quote": "The relation $\\le$ on $\\mathbb{N}$, where $m \\le n \\iff \\exists k\\ (m + k = n)$ ([[def-nat-order]]), is a linear (total) order: reflexive, antisymmetric, transitive, and total.",
      "uses": [
        "2.1",
        "3.1",
        "3.2"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "By hypothesis fix $K \\in \\mathbb{N}$ with $x_k \\le y_k$ for every $k \\ge K$.",
      "step": "1.1",
      "inputs": [
        "given",
        "L3"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "Let $n \\ge K$. Every $k \\ge n$ satisfies $k \\ge K$, so $x_k \\le y_k \\le s_n(y)$, and therefore $s_n(y)$ is an upper bound of $T_n(x)$, whence $s_n(x) \\le s_n(y)$ by leastness. Dually $i_n(x) \\le x_k \\le y_k$ for every $k \\ge n$, so $i_n(x)$ is a lower bound of $T_n(y)$ and $i_n(x) \\le i_n(y)$ by greatest-lower-boundedness.",
      "step": "2.1",
      "inputs": [
        "step 1.1",
        "L1",
        "L2",
        "L4"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "For every $n \\in \\mathbb{N}$ one has $\\limsup_k x_k \\le s_n(y)$. If $n \\ge K$ this is $\\limsup_k x_k \\le s_n(x) \\le s_n(y)$, the first inequality because $\\limsup_k x_k$ is a lower bound of $\\{s_m(x)\\}$. If $n < K$ then $n \\le K$, so $s_K(y) \\le s_n(y)$, and $\\limsup_k x_k \\le s_K(x) \\le s_K(y) \\le s_n(y)$.",
      "step": "3.1",
      "inputs": [
        "step 2.1",
        "L1",
        "L2",
        "L4"
      ]
    },
    {
      "id": "step-3-2",
      "claim": "For every $n \\in \\mathbb{N}$ one has $i_n(x) \\le \\liminf_k y_k$. If $n \\ge K$ this is $i_n(x) \\le i_n(y) \\le \\liminf_k y_k$, the second inequality because $\\liminf_k y_k$ is an upper bound of $\\{i_m(y)\\}$. If $n < K$ then $n \\le K$, so $i_n(x) \\le i_K(x) \\le i_K(y) \\le \\liminf_k y_k$.",
      "step": "3.2",
      "inputs": [
        "step 2.1",
        "L1",
        "L2",
        "L4"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "By step 3.1 the element $\\limsup_k x_k$ is a lower bound of $\\{s_n(y) : n \\in \\mathbb{N}\\}$, whose greatest lower bound is $\\limsup_k y_k$, so $\\limsup_k x_k \\le \\limsup_k y_k$. By step 3.2 the element $\\liminf_k y_k$ is an upper bound of $\\{i_n(x) : n \\in \\mathbb{N}\\}$, whose least upper bound is $\\liminf_k x_k$, so $\\liminf_k x_k \\le \\liminf_k y_k$.",
      "step": "4.1",
      "inputs": [
        "step 3.1",
        "step 3.2",
        "L1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The lem-limsup-monotone-comparison statement has no empty-set or empty-family boundary."
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "The lem-limsup-monotone-comparison statement has no zero-valued boundary."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "The statement and step 3.1 explicitly treat the unit or first-index boundary."
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "The lem-limsup-monotone-comparison statement has no parameter degeneracy that changes the claim."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "The lem-limsup-monotone-comparison statement has no interval or extended-real endpoint convention."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "The lem-limsup-monotone-comparison proof makes no selection from a set whose nonemptiness needs a separate discharge."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The lem-limsup-monotone-comparison statement is not a biconditional requiring a forward implication."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The lem-limsup-monotone-comparison statement is not a biconditional requiring a reverse implication."
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
    "source": "lem-limsup-monotone-comparison",
    "sourcePage": "limsup-and-subsequential-limits",
    "batch": "wave6-real-analysis-limits",
    "target": "def-limsup-liminf",
    "declared_target": "def-limsup-liminf",
    "target_statement_provenance": null,
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-limsup-monotone-comparison",
    "sourcePage": "limsup-and-subsequential-limits",
    "batch": "wave6-real-analysis-limits",
    "target": "lem-limsup-exists",
    "declared_target": "lem-limsup-exists",
    "target_statement_provenance": null,
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-limsup-monotone-comparison",
    "sourcePage": "limsup-and-subsequential-limits",
    "batch": "wave6-real-analysis-limits",
    "target": "lem-extended-reals-complete",
    "declared_target": "lem-extended-reals-complete",
    "target_statement_provenance": null,
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-limsup-monotone-comparison",
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
    "source": "lem-limsup-monotone-comparison",
    "sourcePage": "limsup-and-subsequential-limits",
    "batch": "wave6-real-analysis-limits",
    "target": "def-upper-bound",
    "declared_target": "def-upper-bound",
    "target_statement_provenance": "ai-altered",
    "targetPage": "order-zorn-and-the-axiom-of-choice",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-limsup-monotone-comparison",
    "sourcePage": "limsup-and-subsequential-limits",
    "batch": "wave6-real-analysis-limits",
    "target": "def-partial-order",
    "declared_target": "def-partial-order",
    "target_statement_provenance": "literature-derived",
    "targetPage": "relations-functions-and-quotients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-limsup-monotone-comparison",
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
    "source": "lem-limsup-monotone-comparison",
    "sourcePage": "limsup-and-subsequential-limits",
    "batch": "wave6-real-analysis-limits",
    "target": "def-nat-order",
    "declared_target": "def-nat-order",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-the-natural-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-limsup-monotone-comparison",
    "sourcePage": "limsup-and-subsequential-limits",
    "batch": "wave6-real-analysis-limits",
    "target": "thm-nat-linear-order",
    "declared_target": "thm-nat-linear-order",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-the-natural-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Full text of every cited or declared item (11)

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

### `def-limsup-liminf`

````markdown
---
id: def-limsup-liminf
kind: definition
title: "Limit superior and limit inferior of a real sequence as $\\inf_n \\sup_{k \\ge n} x_k$ and $\\sup_n \\inf_{k \\ge n} x_k$ in $\\overline{\\mathbb{R}}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-extended-reals, def-sequence, def-complete-ordered-field, thm-infimum-property, def-bounded-set, def-infimum, lem-extended-reals-complete]
justified_by: []
aliases: [def-limsup, def-liminf]
landmark: true
short: "$\\limsup$, $\\liminf$"
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
    - title: "Limit superior and limit inferior (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_superior_and_limit_inferior"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.16)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "J. Lebl, Basic Analysis I, §2.3"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Definition

Let $(x_k)$ be a sequence of reals ([[def-sequence]]). For $n \in \mathbb{N}$ let

$$T_n \;:=\; \{\, x_k : k \in \mathbb{N},\ k \ge n \,\} \subseteq \mathbb{R}$$

be the **$n$-th tail range** of $(x_k)$, a nonempty subset of $\mathbb{R}$ since
$x_n \in T_n$. Regard $T_n$ as a subset of $\overline{\mathbb{R}}$
([[def-extended-reals]]) and put

$$s_n \;:=\; \sup T_n \in \overline{\mathbb{R}}, \qquad i_n \;:=\; \inf T_n \in \overline{\mathbb{R}},$$

the supremum and infimum taken in $\overline{\mathbb{R}}$, which exist for every
$n$ and for every sequence by [[lem-extended-reals-complete]]. The **limit
superior** and **limit inferior** of $(x_k)$ are then

$$\limsup_{k} x_k \;:=\; \inf \{\, s_n : n \in \mathbb{N} \,\}, \qquad \liminf_{k} x_k \;:=\; \sup \{\, i_n : n \in \mathbb{N} \,\},$$

again taken in $\overline{\mathbb{R}}$ and again existing by
[[lem-extended-reals-complete]], since $\{s_n : n \in \mathbb{N}\}$ and
$\{i_n : n \in \mathbb{N}\}$ are subsets of $\overline{\mathbb{R}}$ on which no
hypothesis is needed. Both are elements of $\overline{\mathbb{R}}$, and either may
be $+\infty$ or $-\infty$. The notations $\limsup_{k \to \infty} x_k$,
$\varlimsup_k x_k$ and $\overline{\lim}_k x_k$ all denote the first of them
elsewhere; this library writes $\limsup_k x_k$.

**Every quantity written here exists, and that is why the extended line was
introduced.** Each of the four operations above is an application of
[[lem-extended-reals-complete]] to a subset of $\overline{\mathbb{R}}$ carrying no
hypothesis whatever. Written with the real supremum of
[[def-complete-ordered-field]] and the real infimum of [[thm-infimum-property]]
instead, the definition would be available only for sequences that are bounded
([[def-bounded-set]]): $\sup T_n$ needs $T_n$ bounded above, and
$\inf\{s_n\}$ needs $\{s_n\}$ nonempty, bounded below, and made of real numbers
([[def-infimum]]). None of those is automatic, and the discipline recorded in
[[rem-sup-conventions]] forbids papering over the gap with a convention. The
extended supremum is a different operation in a different ordered set, and it is
total.

**Values, when the sequence is bounded.** If $(x_k)$ is bounded, say
$|x_k| \le M$ for every $k$, then each $T_n$ is a nonempty subset of $\mathbb{R}$
bounded above by $M$ and below by $-M$, so by the agreement clause of
[[lem-extended-reals-complete]] each $s_n$ and each $i_n$ is the *real* supremum
or infimum of $T_n$, and lies in $[-M, M]$. The family $\{s_n\}$ is then a
nonempty set of reals bounded below by $-M$, so $\limsup_k x_k$ is likewise the
real infimum of $\{s_n\}$ and lies in $[-M, M]$; dually for $\liminf_k x_k$. So
for a bounded sequence both quantities are ordinary real numbers computed with
the ordinary real supremum and infimum, and the extended line is doing no work.
It is only for unbounded sequences that the values $\pm\infty$ occur.

## Remarks

- **The order of the two operations is not symmetric and must be kept straight.**
  $\limsup$ is an infimum of suprema and $\liminf$ a supremum of infima. Taking
  them in the other order gives $\sup_n \sup_{k \ge n} x_k = \sup_k x_k$ and
  $\inf_n \inf_{k \ge n} x_k = \inf_k x_k$, which are the extreme values of the
  whole sequence and carry no information about its behaviour at large indices.
  The point of the definition is that the inner operation looks at a tail and the
  outer one lets the tail recede.

- **Why tails at all.** Each $s_n$ is a bound on the whole tail from index $n$ on,
  so it forgets the first $n$ terms; letting $n$ grow forgets any fixed finite
  number of them. That is what makes $\limsup$ and $\liminf$ tail quantities in
  the sense of [[lem-limit-of-tail]], and it is the reason they can characterise
  convergence, which is itself a tail property.

- **Neither quantity is a limit, and neither is claimed to be one.** The symbols
  $\limsup$ and $\liminf$ are single pieces of notation for the two displayed
  expressions, exactly as "$x_k \to +\infty$" is a single abbreviation in
  [[def-divergence-to-infinity]]. That the family $(s_n)$ does decrease to
  $\limsup_k x_k$ in a precise sense is a theorem, not part of this definition;
  the monotonicity half is [[lem-limsup-exists]].

- **The tail ranges are sets, not sequences.** $T_n$ is the range of the $n$-th
  tail, so repetitions and order are forgotten ([[def-sequence]]). That is
  harmless here, since a supremum depends only on the set of values, and it is
  what lets the whole definition be phrased with the order-theoretic operations of
  [[lem-extended-reals-complete]] and nothing else.
````

### `def-nat-order`

````markdown
---
id: def-nat-order
kind: definition
title: "Order on the natural numbers"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-natural-numbers, def-nat-addition]
aliases: []
landmark: false
short: "$m\\le n\\iff\\exists k\\,(m+k=n)$"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-02
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §2.2 (Ordering of the naturals)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Set-theoretic definition of natural numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Set-theoretic_definition_of_natural_numbers"
    - title: "Peano axioms (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Peano_axioms"
    - title: "W. Aitken, MATH 378 Ch. 1: The Peano Axioms (CSU San Marcos)"
      url: "https://public.csusm.edu/aitken_html/m378_S2016/Ch1PeanoAxioms.pdf"
pipeline_run: null
---

## Definition

For $m, n \in \mathbb{N}$, define the **order** by

$$m \le n \iff \exists k \in \mathbb{N}\ (m + k = n),$$

and the **strict order** by $m < n \iff (m \le n \text{ and } m \neq n)$, using
addition ([[def-nat-addition]]).

## Remarks

Read $m \le n$ as "$n$ is $m$ plus something": the gap $k$ with $m + k = n$ is
unique when it exists (by commutativity and cancellation,
[[lem-nat-add-commutative]], [[lem-nat-add-cancellative]]) and is
written $n - m$ once subtraction is available. That $\le$ is genuinely a linear
order, reflexive, antisymmetric, transitive, and total, is proved in
[[thm-nat-linear-order]] and [[lem-nat-trichotomy]]; compatibility with the
arithmetic ([[lem-nat-order-add-compatible]],
[[lem-nat-order-mult-compatible]]) and discreteness
($m < n \iff \sigma(m) \le n$, [[lem-nat-discrete]]) follow.

In the von Neumann model this order coincides with membership and inclusion:
$m \le n \iff m \subseteq n$ and $m < n \iff m \in n$, matching the picture of
each natural number as the set $\{0, 1, \dots, n-1\}$ of its predecessors
([[def-natural-numbers]]). That coincidence is not proved here; it is derived
from the additive definition above on a later page. The least-element property of every nonempty subset,
the **well-ordering principle** ([[thm-well-ordering-principle]]), is the deepest
consequence.
````

### `def-partial-order`

````markdown
---
id: def-partial-order
kind: definition
title: "Partial order and partially ordered set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
justified_by: []
forward_refs: [def-chain-complete-poset, lem-extremal-cut-closed-under-f,
               lem-successor-of-extremal, thm-bourbaki-witt, thm-zorn,
               thm-zorn-implies-ac, fs-maximal-is-greatest]
aliases: [def-poset]
landmark: true
short: "partial order"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-06
    scope: published-rehoming-repair
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Partially ordered set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Partially_ordered_set"
    - title: "Total order (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Total_order"
pipeline_run: null
---

## Definition

Let $P$ be a set. A **partial order** on $P$ is a binary relation $\le$ on $P$
such that, for all $x, y, z \in P$:

- **(R)** *reflexivity*: $x \le x$;
- **(A)** *antisymmetry*: if $x \le y$ and $y \le x$, then $x = y$;
- **(T)** *transitivity*: if $x \le y$ and $y \le z$, then $x \le z$.

The pair $(P, \le)$ is a **partially ordered set**, abbreviated **poset**. When
the order is clear we write $P$ for the pair.

The associated **strict order** is defined by
$$x < y \quad :\Longleftrightarrow \quad x \le y \text{ and } x \ne y.$$

Two elements $x, y \in P$ are **comparable** if $x \le y$ or $y \le x$, and
**incomparable** otherwise. A partial order in which every two elements are
comparable is a **total order** (equivalently a **linear order**), and $(P, \le)$
is then a **totally ordered set**.

## Remarks

- Partiality is the whole point: a partial order is permitted to leave pairs
  incomparable, which is what makes maximal elements and chains worth
  distinguishing at all. In a total order every subset is a chain, and a maximal
  element is automatically the greatest element.
- All three axioms are used essentially in the proofs that rest on this
  definition: reflexivity in [[lem-extremal-cut-closed-under-f]] and
  [[lem-successor-of-extremal]],
  transitivity almost everywhere, and antisymmetry in [[thm-bourbaki-witt]],
  where the fixed point is obtained by passing from $f(c) \le c$ and
  $c \le f(c)$ to $f(c) = c$. Antisymmetry is also what makes a least upper
  bound unique when it exists, and uniqueness is what licenses the functional
  notation $\sup$ used in [[def-chain-complete-poset]].
- Dropping antisymmetry gives a **preorder**. Preorders are genuinely useful
  elsewhere (a directed set is preordered).
- Inclusion $\subseteq$ on the power set of any set is the standard example, and
  it is the order that appears concretely in [[thm-zorn]], which applies
  [[thm-bourbaki-witt]] to the set of chains of $P$ ordered by inclusion, and in
  [[thm-zorn-implies-ac]], which applies Zorn's lemma to partial choice
  functions ordered by extension, an inclusion order on their graphs. The
  results themselves are stated for an *arbitrary* poset and are used that way:
  [[thm-zorn]] is applied to whatever poset a later page brings, and the
  refutation in
  [[fs-maximal-is-greatest]] runs in a bare two-element antichain that is not
  presented as an order by inclusion at all.
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

### `def-upper-bound`

````markdown
---
id: def-upper-bound
kind: definition
title: "Upper bound, least upper bound, and strict upper bound"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-partial-order]
justified_by: []
aliases: [def-supremum-poset]
landmark: false
short: "upper bound"
verification:
  precheck: n/a
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Upper and lower bounds (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Upper_and_lower_bounds"
    - title: "Partially ordered set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Partially_ordered_set"
pipeline_run: null
---

## Definition

Let $(P, \le)$ be a poset ([[def-partial-order]]) and $S \subseteq P$.

An element $u \in P$ is an **upper bound** of $S$ if $s \le u$ for every
$s \in S$.

An element $u \in P$ is a **least upper bound** (or **supremum**) of $S$ if $u$
is an upper bound of $S$ and $u \le v$ for every upper bound $v$ of $S$. When it
exists we write $u = \sup S$.

An element $u \in P$ is a **strict upper bound** of $S$ if $s < u$ for every
$s \in S$.

## Remarks

- **A least upper bound is unique when it exists.** If $u$ and $u'$ are both
  least upper bounds of $S$ then each is an upper bound and each is below the
  other, so $u \le u'$ and $u' \le u$, whence $u = u'$ by antisymmetry
  ([[def-partial-order]]). This is what makes the notation $\sup S$ legitimate.
  Antisymmetry is not peculiar to this argument: the same two-inequality step
  gives uniqueness of a greatest element ([[def-maximal-element]]), and it is
  used essentially in [[thm-bourbaki-witt]], whose fixed point is obtained by
  passing from $f(c) \le c$ and $c \le f(c)$ to $f(c) = c$. Drop antisymmetry
  and it is the conclusion, not merely the notation, that goes: on two distinct
  elements each below the other, every subset still has a least upper bound, yet
  the map exchanging the two satisfies $x \le f(x)$ and has no fixed point.
- **Every element of $P$ is an upper bound of the empty set**, vacuously.
  Consequently $\sup \emptyset$, when it exists, is the least element of $P$.
- An upper bound of $S$ need not belong to $S$, and $S$ may have many upper
  bounds and no least one. In $\mathbb{Q}$ with its usual order, the set
  $\{q \in \mathbb{Q} : q^2 < 2\}$ has upper bounds but no least upper bound.
- In a poset, a strict upper bound is exactly an upper bound outside $S$. If
  $u$ is strict then $u\notin S$, since $u<u$ is impossible. Conversely, if
  $u$ is an upper bound and $u\notin S$, then every $s\in S$ satisfies
  $s\le u$ and $s\ne u$, hence $s<u$. This distinction from an arbitrary upper
  bound matters in [[thm-zorn]], where the argument must produce one outside
  the chain.
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

### `lem-limit-of-tail`

````markdown
---
id: lem-limit-of-tail
kind: lemma
title: "Convergence depends only on the tail"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-sequence, def-real-limit, def-nat-order, def-nat-addition, lem-nat-order-add-compatible, lem-nat-add-associative, lem-nat-add-commutative, thm-nat-linear-order]
justified_by: []
aliases: []
landmark: false
short: "tails have the same limit"
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

Let $(x_k)$ be a sequence of reals ([[def-sequence]]), let $x \in \mathbb{R}$,
and for $K \in \mathbb{N}$ let $x^{(K)}$ denote the $K$-th tail, $x^{(K)}_j =
x_{j+K}$. The following are equivalent ([[def-real-limit]]):

1. $(x_k)$ converges to $x$;
2. every tail $x^{(K)}$ converges to $x$;
3. some tail $x^{(K)}$ converges to $x$.

The same three statements with "converges to $x$" replaced by "is Cauchy" are
likewise equivalent. Consequently, if two sequences agree from some index on,
then either both converge to $x$ or neither does, and either both are Cauchy or
neither is.

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals, a real $x$, and for each $K \in \mathbb{N}$ the $K$-th tail $x^{(K)}$ defined by $x^{(K)}_j := x_{j+K}$ ([[def-sequence]]).

[L1] Convergence and the Cauchy condition: $(z_k)$ converges to $z$ when for every rational $\varepsilon > 0$ there is $N$ with $|z_k - z| < \varepsilon$ for all $k \ge N$, and $(z_k)$ is Cauchy when for every rational $\varepsilon > 0$ there is $N$ with $|z_k - z_l| < \varepsilon$ for all $k, l \ge N$ ([[def-real-limit]]).

[L2] Index arithmetic, first half: $j \ge N$ implies $j + K \ge N + K$, and $N + K \ge N$ ([[def-nat-order]], [[lem-nat-order-add-compatible]]).

[L3] Index arithmetic, second half: every $k \ge N + K$ has the form $k = j + K$ with $j \ge N$. Indeed $N + K \le k$ gives $i$ with $(N+K) + i = k$; put $j := N + i$, so that $j \ge N$ and $j + K = (N+i) + K = N + (i + K) = N + (K + i) = (N+K) + i = k$ ([[def-nat-order]], [[lem-nat-add-associative]], [[lem-nat-add-commutative]]).

[L4] The order on $\mathbb{N}$ is reflexive and transitive, so $k \ge N + K \ge N$ gives $k \ge N$; and $j + 0 = j$ for every $j$ ([[thm-nat-linear-order]], [[def-nat-order]], [[def-nat-addition]]).

## Proof

**Proof technique:** direct.

1.1 (1) implies (2). Assume $(x_k)$ converges to $x$, let $K \in \mathbb{N}$ be arbitrary and let $\varepsilon > 0$ be rational; take $N$ with $|x_k - x| < \varepsilon$ for all $k \ge N$. For every $j \ge N$ we have $j + K \ge N + K \ge N$, hence $|x^{(K)}_j - x| = |x_{j+K} - x| < \varepsilon$; so $x^{(K)}$ converges to $x$. [assume-hyp, L1, L2, L4]

1.2 (2) implies (3), in both families. The $0$-th tail satisfies $x^{(0)}_j = x_{j+0} = x_j$, so $(x_k)$ is itself one of its own tails; statement (2) quantifies over all tails, so applying it to this one already yields (3). [given, L4]

1.3 (3) implies (1). Assume $x^{(K)}$ converges to $x$ for some fixed $K$, and let $\varepsilon > 0$ be rational; take $N$ with $|x^{(K)}_j - x| < \varepsilon$ for all $j \ge N$. Every $k \ge N + K$ is of the form $j + K$ with $j \ge N$, so $|x_k - x| = |x^{(K)}_j - x| < \varepsilon$; taking $N + K$ as the threshold shows $(x_k)$ converges to $x$. [assume-hyp, L1, L3]

1.4 The Cauchy version of (1) implies (2). Assume $(x_k)$ is Cauchy, fix $K$ and a rational $\varepsilon > 0$, and take $N$ with $|x_k - x_l| < \varepsilon$ for all $k, l \ge N$. For $i, j \ge N$ both $i + K \ge N$ and $j + K \ge N$, so $|x^{(K)}_i - x^{(K)}_j| = |x_{i+K} - x_{j+K}| < \varepsilon$; so $x^{(K)}$ is Cauchy. [assume-hyp, L1, L2, L4]

1.5 The Cauchy version of (3) implies (1). Assume $x^{(K)}$ is Cauchy and let $\varepsilon > 0$ be rational; take $N$ with $|x^{(K)}_i - x^{(K)}_j| < \varepsilon$ for all $i, j \ge N$. Any $k, l \ge N + K$ are of the form $i + K$ and $j + K$ with $i, j \ge N$, so $|x_k - x_l| < \varepsilon$; so $(x_k)$ is Cauchy. [assume-hyp, L1, L3]

2.1 In each of the two families the cycle (1) implies (2) implies (3) implies (1) is closed, so within each family the three statements are equivalent. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5]

3.1 If $(x_k)$ and $(y_k)$ agree from index $K$ on, then $x^{(K)} = y^{(K)}$ as functions, so by the established equivalence $(x_k)$ converges to $x$ exactly when $y^{(K)}$ does, exactly when $(y_k)$ does, and the same chain applies to the Cauchy condition. [step 2.1, given] ∎

## Remarks

- This is the lemma that makes the word "eventually" usable. Once it is known that finitely many initial terms are irrelevant, a hypothesis of the form "$P(k)$ for all $k$" can everywhere be weakened to "$P(k)$ eventually" ([[def-sequence]]) at the cost of passing to a tail.

- It also settles the bookkeeping question of where the indexing starts. A text that writes $(x_k)_{k \ge 1}$ is describing the first tail of a sequence in the sense used here, and the two have the same limits and the same Cauchy status.

- Boundedness, by contrast, is *not* a tail property in the same trivial way: a tail of a bounded sequence is bounded, and a sequence with a bounded tail is bounded only because the finitely many omitted terms can be absorbed into the bound, which is exactly the argument of [[lem-convergent-implies-bounded]].
````

### `lem-limit-preserves-order`

````markdown
---
id: lem-limit-preserves-order
kind: lemma
title: "Limits preserve non-strict inequalities"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-real-limit, def-sequence, lem-limit-unique, thm-algebra-of-limits, thm-of-archimedean, lem-of-add-order, lem-rat-embeds-dense, lem-of-inverse-positive, lem-of-abs-value, thm-nat-linear-order, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "$x_k\\le y_k$ gives $\\lim x_k\\le\\lim y_k$"
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
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis, Ch. 3"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch3.pdf"
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "T. Tao, Analysis I, 3rd ed., §6.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(x_k)$ and $(y_k)$ be sequences of reals ([[def-sequence]]) converging to
$x$ and $y$ respectively ([[def-real-limit]]). If $x_k \le y_k$ eventually, that
is for all $k$ from some index on, then

$$\lim_{k} x_k \;\le\; \lim_{k} y_k .$$

In particular, if $x_k \ge 0$ eventually then $\lim_k x_k \ge 0$, and if
$a \le x_k \le b$ eventually then $a \le \lim_k x_k \le b$.

The conclusion is **not** strict, and cannot be made strict; see the remarks
below and the false statement at the end of this page.

## Facts & Assumptions

**Given:** Sequences $(x_k)$, $(y_k)$ of reals with $(x_k)$ converging to $x$, $(y_k)$ converging to $y$, and an index $K_0 \in \mathbb{N}$ with $x_k \le y_k$ for every $k \ge K_0$ ([[def-sequence]], [[def-real-limit]]). Write $z_k := y_k - x_k$ and $z := y - x$.

[L1] Convergence, quantified over rational $\varepsilon > 0$ ([[def-real-limit]]).

[L2] Difference rule: $(z_k) = (y_k - x_k)$ converges to $y - x = z$ ([[thm-algebra-of-limits]]).

[L3] Small rationals: for every real $\eta > 0$ there is a rational $\varepsilon$ with $0 < \varepsilon < \eta$, by density ([[lem-rat-embeds-dense]]) or by the Archimedean property ([[thm-of-archimedean]]) applied to $1/\eta$ ([[lem-of-inverse-positive]]).

[L4] Absolute value: $|u| < c$ if and only if $-c < u < c$, for $c > 0$ ([[lem-of-abs-value]]).

[L5] Order arithmetic in $\mathbb{R}$: adding a constant preserves $<$ and $\le$; $u \le v$ and $v < w$ give $u < w$; trichotomy, so exactly one of $z < 0$, $z = 0$, $z > 0$ holds and the negation of $z < 0$ is $z \ge 0$; $u \le v$ if and only if $v - u \ge 0$; and $u < u$ is impossible ([[lem-of-add-order]], [[def-complete-ordered-field]], [[def-ordered-field]]).

[L6] The order on $\mathbb{N}$ is total, so any two indices admit a common upper bound ([[thm-nat-linear-order]]).

[L7] For $c \in \mathbb{R}$ the constant sequence $(c)$ converges to $c$ ([[def-sequence]], [[def-real-limit]]).

[L8] A sequence of reals has at most one limit ([[lem-limit-unique]]), which is what licenses writing $\lim_k x_k$ and $\lim_k y_k$ for the limits named in the statement; without it those symbols would not denote.

## Proof

**Proof technique:** contradiction.

1.1 By [L2] the sequence $(z_k)$ converges to $z = y - x$, and by hypothesis $z_k = y_k - x_k \ge 0$ for every $k \ge K_0$. [given, L2, L5]

1.2 Suppose, for contradiction, that $z < 0$. [assume-contra]

2.1 Then $-z > 0$, so by [L3] we may choose a rational $\varepsilon$ with $0 < \varepsilon < -z$. [step 1.2, L3, L5, choose]

3.1 Applying convergence of $(z_k)$ to this $\varepsilon$ gives $K_1 \in \mathbb{N}$ with $|z_k - z| < \varepsilon$ for all $k \ge K_1$, hence $z_k - z < \varepsilon$ and so $z_k < z + \varepsilon$ for all such $k$. [step 1.1, step 2.1, L1, L4, L5]

4.1 Fix an index $k$ with $k \ge K_0$ and $k \ge K_1$. Then $0 \le z_k < z + \varepsilon < z + (-z) = 0$, so $0 < 0$, which is impossible. [step 1.1, step 2.1, step 3.1, L5, L6]

5.1 The assumption $z < 0$ is therefore untenable; by trichotomy $z \ge 0$, that is $y - x \ge 0$, that is $x \le y$; since $x$ and $y$ are the unique limits of $(x_k)$ and $(y_k)$ by [L8], that is exactly $\lim_k x_k \le \lim_k y_k$. Since $(x_k)$ and $(y_k)$ were an arbitrary pair satisfying the hypotheses, the conclusion applies to every such pair, and the two stated special cases are instances of it. Let $(w_k)$ be convergent. If $w_k \ge 0$ from some index on, apply the conclusion to the pair consisting of the constant sequence $0$, which converges to $0$ by [L7], and of $(w_k)$: it gives $0 \le \lim_k w_k$. If $a \le w_k \le b$ from some index on, apply it first to the constant sequence $a$ and $(w_k)$, then to $(w_k)$ and the constant sequence $b$: it gives $a \le \lim_k w_k$ and $\lim_k w_k \le b$. [step 4.1, L5, L7, L8, discharge-contradiction] ∎

## Remarks

- The two special cases are instances of the main claim, discharged in step 5.1 by taking one of the two sequences constant; that a constant sequence converges to its value ([[def-sequence]]) is the only extra ingredient they need.

- **The inequality does not become strict.** From $x_k < y_k$ for every $k$ one may conclude only $\lim x_k \le \lim y_k$; the witness $x_k = 0 < 1/(k+1) = y_k$ has equal limits ([[fs-limit-preserves-strict-inequality]]). Intuitively, the order relation $<$ is not preserved by passage to a limit because a strict gap may shrink to nothing, while $\le$ is preserved because it is closed under that shrinking.

- The proof routes through the single sequence $(z_k) = (y_k - x_k)$ and the difference rule of [[thm-algebra-of-limits]]. That is not an economy of writing only: it isolates the one thing being proved, namely that a sequence eventually $\ge 0$ cannot have a negative limit.
````

### `lem-limsup-exists`

````markdown
---
id: lem-limsup-exists
kind: lemma
title: "The tail suprema of any real sequence are nonincreasing in $\\overline{\\mathbb{R}}$, so the limit superior exists for every sequence"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-limsup-liminf, def-extended-reals, lem-extended-reals-complete, def-upper-bound, def-partial-order, def-sequence, def-nat-order, thm-nat-linear-order]
justified_by: []
aliases: []
landmark: false
short: "$s_{n+1}\\le s_n$"
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
    - title: "Limit superior and limit inferior (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_superior_and_limit_inferior"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §2.3"
      url: "https://www.jirka.org/ra/"
    - title: "N. Donaldson, Math 140A: Real Analysis notes"
      url: "https://www.math.uci.edu/~ndonalds/math140a/notes.pdf"
pipeline_run: null
---

## Statement

Let $(x_k)$ be a sequence of reals ([[def-sequence]]), with tail ranges $T_n$ and
extended tail bounds $s_n = \sup T_n$, $i_n = \inf T_n$ as in
[[def-limsup-liminf]].

1. **Monotonicity of the extended bounds under inclusion.** If
   $A \subseteq B \subseteq \overline{\mathbb{R}}$ ([[def-extended-reals]]) then
   $$\sup A \le \sup B \qquad \text{and} \qquad \inf B \le \inf A,$$
   the four quantities being the extended bounds of [[lem-extended-reals-complete]].
   No hypothesis is placed on $A$ or $B$; in particular $A$ may be empty.
2. **The tail bounds are monotone.** $T_m \subseteq T_n$ whenever $n \le m$, and
   hence
   $$s_m \le s_n \qquad \text{and} \qquad i_n \le i_m \qquad (n \le m).$$
   In particular $s_{n+1} \le s_n$ and $i_n \le i_{n+1}$ for every $n$, and
   $i_n \le s_n$ for every $n$.
3. **Existence.** $\limsup_k x_k$ and $\liminf_k x_k$ exist in
   $\overline{\mathbb{R}}$ for **every** sequence of reals, bounded or not.

Claim 1 is the tool the rest of this page uses whenever two extended suprema are
compared. It is proved here, from the definition of a least upper bound, rather
than quoted from the suprema page, for the reason given in the remarks below.

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals, its tail ranges $T_n = \{x_k : k \ge n\}$, and the extended bounds $s_n = \sup T_n$, $i_n = \inf T_n$ ([[def-sequence]], [[def-limsup-liminf]]).

[L1] Every subset of $\overline{\mathbb{R}}$ has a least upper bound and a greatest lower bound in $\overline{\mathbb{R}}$, with no hypothesis on the subset ([[lem-extended-reals-complete]]).

[L2] Least upper bound and greatest lower bound in a poset: $\sup A$ is an upper bound of $A$ that is $\le$ every upper bound of $A$, and $\inf A$ is a lower bound that is $\ge$ every lower bound; each is unique when it exists ([[def-upper-bound]], [[def-partial-order]]).

[L3] $(\overline{\mathbb{R}}, \le)$ is a totally ordered set, so its order is reflexive and transitive ([[def-extended-reals]], [[def-partial-order]]).

[L4] The order on $\mathbb{N}$ is total and transitive ([[def-nat-order]], [[thm-nat-linear-order]]).

## Proof

**Proof technique:** direct.

1.1 Let $A \subseteq B \subseteq \overline{\mathbb{R}}$ be arbitrary. By [L1] the four elements $\sup A$, $\sup B$, $\inf A$, $\inf B$ of $\overline{\mathbb{R}}$ all exist and are uniquely determined. [given, L1, L2]

1.2 Let $n \le m$ in $\mathbb{N}$. Every element of $T_m$ has the form $x_k$ with $k \ge m$, and then $k \ge n$ by transitivity, so $x_k \in T_n$; hence $T_m \subseteq T_n$. [given, L4]

1.3 For every $n$ the tail range $T_n$ contains $x_n$, so $i_n \le x_n$ because $i_n$ is a lower bound of $T_n$, and $x_n \le s_n$ because $s_n$ is an upper bound of $T_n$; transitivity gives $i_n \le s_n$. [given, L1, L2, L3]

2.1 Since $\sup B$ is an upper bound of $B$ and $A \subseteq B$, every element of $A$ is $\le \sup B$, so $\sup B$ is an upper bound of $A$; as $\sup A$ is the least of the upper bounds of $A$, this gives $\sup A \le \sup B$. Dually $\inf B$ is a lower bound of $B$, hence of $A$, and as $\inf A$ is the greatest of the lower bounds of $A$ this gives $\inf B \le \inf A$. Claim 1 is proved. [step 1.1, L1, L2]

3.1 Applying claim 1 to the inclusion $T_m \subseteq T_n$ valid for $n \le m$ gives $s_m \le s_n$ and $i_n \le i_m$; the special case $m = n + 1$ gives $s_{n+1} \le s_n$ and $i_n \le i_{n+1}$. Together with $i_n \le s_n$ this is claim 2. [step 1.2, step 1.3, step 2.1]

4.1 The families $\{s_n : n \in \mathbb{N}\}$ and $\{i_n : n \in \mathbb{N}\}$ are subsets of $\overline{\mathbb{R}}$, so [L1] applies to them with no hypothesis, and $\limsup_k x_k = \inf\{s_n\}$ and $\liminf_k x_k = \sup\{i_n\}$ exist in $\overline{\mathbb{R}}$ for every sequence of reals. This is claim 3. [step 3.1, L1, L2] ∎

## Remarks

- **The monotonicity is where the two operations of the definition interlock.**
  Because $(s_n)$ is nonincreasing, the outer infimum in
  $\limsup_k x_k = \inf_n s_n$ is an infimum of a decreasing family, so it is the
  value the tail suprema are pressing down towards; and because $(i_n)$ is
  nondecreasing, $\liminf_k x_k = \sup_n i_n$ is the value the tail infima are
  pressing up towards. Nothing in this lemma says the pressing converges, and for
  an unbounded sequence there is nothing in $\mathbb{R}$ for it to converge to;
  the exact statement is [[lem-limsup-epsilon-characterisation]].

- **Why the word "nonincreasing" is spelled out rather than cited.**
  [[def-monotone-sequence]] defines monotone for sequences of *reals*, and
  $(s_n)$ takes values in $\overline{\mathbb{R}}$, so the definition does not
  apply to it. Claim 2 is therefore stated as the inequality it is. When $(x_k)$
  is bounded every $s_n$ is real ([[def-limsup-liminf]]) and $(s_n)$ is then a
  nonincreasing sequence of reals in the sense of [[def-monotone-sequence]], but
  no proof on this page needs that reading.

- **Claim 1 is not [[lem-sup-monotone]].** That lemma is the same one-line
  argument carried out in $\mathbb{R}$, and its statement carries the hypotheses
  that the smaller set be nonempty and the larger one bounded above, without
  which neither supremum denotes anything. Those are exactly the hypotheses that
  the extended bounds of [[lem-extended-reals-complete]] dispense with, so the
  extended statement is not an instance of the real one and is proved from the
  definition of a least upper bound instead.

- **Claim 1 costs nothing and is used everywhere.** It is the one-line poset
  argument: the larger set's supremum bounds the smaller set, and leastness does
  the rest. It is stated as part of this lemma rather than as an item of its own
  because it is used only in company with the tail bounds.
````

### `thm-nat-linear-order`

````markdown
---
id: thm-nat-linear-order
kind: theorem
title: "$\\le$ is a linear order on $\\mathbb{N}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-nat-order, def-nat-addition, lem-nat-add-identity, lem-nat-add-associative, lem-nat-add-commutative, lem-nat-add-cancellative, lem-nat-nonzero-is-successor, lem-nat-trichotomy, thm-omega-is-peano-system]
aliases: []
landmark: true
short: "reflexive, antisymmetric, transitive, total"
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
    - title: "T. Tao, Analysis I, 3rd ed., §2.1-2.3 (Peano axioms, recursion, arithmetic)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Peano axioms (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Peano_axioms"
    - title: "W. Aitken, MATH 378 Ch. 1: The Peano Axioms (CSU San Marcos)"
      url: "https://public.csusm.edu/aitken_html/m378_S2016/Ch1PeanoAxioms.pdf"
pipeline_run: null
---

## Statement

The relation $\le$ on $\mathbb{N}$, where $m \le n \iff \exists k\ (m + k = n)$ ([[def-nat-order]]), is a linear (total) order: reflexive, antisymmetric, transitive, and total.

## Facts & Assumptions

**Given:** The order $m \le n \iff \exists k\ (m + k = n)$ ([[def-nat-order]]) and addition with $m + 0 = m$, $m + \sigma(n) = \sigma(m + n)$ ([[def-nat-addition]]).

[L1] $0 + k = k$ and addition is associative ([[lem-nat-add-identity]], [[lem-nat-add-associative]]).

[L2] Cancellation: $m + k = n + k \Rightarrow m = n$ ([[lem-nat-add-cancellative]]).

[L3] Every nonzero natural is a successor: if $j \ne 0$ then $j = \sigma(i)$ for some $i$ ([[lem-nat-nonzero-is-successor]]).

[L4] Trichotomy: exactly one of $m < n$, $m = n$, $m > n$ holds ([[lem-nat-trichotomy]]).

[L5] Addition is commutative ([[lem-nat-add-commutative]]).

[L6] $\sigma(x) \ne 0$ for every $x$ (Peano axiom P1) ([[thm-omega-is-peano-system]]).

## Proof

**Proof technique:** direct.

1.1 Reflexive: $m + 0 = m$, so $m \le m$. [given]

1.2 Transitive: if $m \le n$ and $n \le p$, say $m + k = n$ and $n + j = p$, then $m + (k + j) = (m + k) + j = n + j = p$, so $m \le p$. [given, L1]

1.3 A sum is zero only if both summands are: if $k + j = 0$ with $j \ne 0$ then $j = \sigma(i)$ and $k + j = k + \sigma(i) = \sigma(k + i) \ne 0$ [L6], a contradiction, so $k = j = 0$. [L1, L3, L6]

1.4 Total: by trichotomy one of $m < n$, $m = n$, $m > n$ holds, and each of these gives $m \le n$ or $n \le m$. [L4]

2.1 Antisymmetric: if $m \le n$ and $n \le m$, say $m + k = n$ and $n + j = m$, then $m + (k + j) = (m + k) + j = n + j = m = m + 0$; commuting both sides [L5] gives $(k + j) + m = 0 + m$, and cancelling the common right summand $m$ [L2] gives $k + j = 0$, hence $k = j = 0$ by step 1.3 and $m = n$. [given, L1, L2, L5, step 1.3]

3.1 Reflexivity, antisymmetry, transitivity, and totality all hold, so $\le$ is a linear order on $\mathbb{N}$. [step 1.1, step 1.2, step 2.1, step 1.4] ∎
````

