# Audit proof-refuter brief — Wave 7, step A6

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

## Selection reasons

- critical risk (15): 13 declared dependencies; 13 cited facts; 6 numbered proof steps; biconditional / both-direction claim; boundary-sensitive language; induction, recursion, or minimality; analytic limiting/completeness language

## Target item — `lem-cauchy-complete-and-archimedean-imply-mct`

Normalized current SHA-256: `ab6ad52a768a52dd73543e12e3bd9191e28f923b96265306d396abe9d563be1a`

The complete current item follows, including frontmatter:

````markdown
---
id: lem-cauchy-complete-and-archimedean-imply-mct
kind: lemma
title: "Cauchy completeness plus the Archimedean property imply the monotone convergence property"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-completeness-properties, def-sequences-in-an-ordered-field, def-archimedean-field, thm-recursion, thm-well-ordering-principle, thm-induction-principle, thm-nat-linear-order, lem-of-abs-value, lem-of-add-order, lem-of-sign-rules, lem-of-inverse-positive, lem-of-naturals-positive, def-ordered-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
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
    - title: "J. F. Hall, Completeness of Ordered Fields"
      url: "https://arxiv.org/abs/1101.5652"
    - title: "Monotone convergence theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Monotone_convergence_theorem"
    - title: "Cauchy sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
    - title: "J. Lebl, Basic Analysis I, §2.4"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement

Let $F$ be an Archimedean ordered field ([[def-archimedean-field]]) with Cauchy
completeness (CC). Then $F$ has the monotone convergence property (MCT) of
[[def-completeness-properties]]: every nondecreasing sequence in $F$ that is
bounded above converges in $F$.

The Archimedean hypothesis is not decoration. Without it the implication is
false: $\mathbb{R}((t^{-1}))$ has (CC) ([[thm-laurent-cauchy-complete]]) and
fails (MCT), since (MCT) would force it to be Archimedean
([[lem-mct-implies-archimedean]]) and it is not
([[lem-laurent-non-archimedean]]).

## Facts & Assumptions

**Given:** An Archimedean ordered field $F$ with (CC), and a nondecreasing sequence $(x_k)$ in $F$ with $x_k \le B$ for every $k$ and some $B \in F$.

[L1] The properties (MCT) and (CC) of [[def-completeness-properties]].

[L2] Sequences in an ordered field: $(x_k)$ is nondecreasing when $x_j \le x_k$ for all $j \le k$; it is Cauchy in $F$ when for every $\varepsilon > 0$ in $F$ there is $N$ with $|x_k - x_l| < \varepsilon$ for all $k, l \ge N$; convergence in $F$ is as fixed there ([[def-sequences-in-an-ordered-field]]).

[L3] Archimedean property: for every $z \in F$ there is a natural $n \ge 1$ with $z < n \cdot 1_F$ ([[def-archimedean-field]]); the canonical naturals satisfy $n \cdot 1_F > 0$ for $n \ge 1$ and $(m+n)\cdot 1_F = m \cdot 1_F + n \cdot 1_F$, with $0 \cdot 1_F = 0$ ([[lem-of-naturals-positive]]).

[L4] Recursion theorem ([[thm-recursion]]); well-ordering principle, every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]); induction principle ([[thm-induction-principle]]); the order on $\mathbb{N}$ is total ([[thm-nat-linear-order]]).

[L5] Absolute value: $|u| = u$ whenever $u \ge 0$ ([[lem-of-abs-value]]).

[L6] Order arithmetic: adding a constant preserves the strict order and strict inequalities add ([[lem-of-add-order]]), the nonstrict forms following with the equality cases; for $c > 0$ one has $a < b$ if and only if $ac < bc$ ([[lem-of-sign-rules]]); a positive element is invertible with positive inverse ([[lem-of-inverse-positive]]); the order is total and transitive ([[def-ordered-field]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose $(x_k)$ is not Cauchy in $F$: there is $\varepsilon > 0$ in $F$ such that for every $N \in \mathbb{N}$ there are $k, l \ge N$ with $|x_k - x_l| \ge \varepsilon$. [L2, assume-contra]

2.1 For every $n \in \mathbb{N}$ there is $k > n$ with $x_k - x_n \ge \varepsilon$: apply step 1.1 with $N := n + 1$ to get $k, l \ge n+1$ with $|x_k - x_l| \ge \varepsilon$, name them so that $l \le k$, note that monotonicity gives $x_l \le x_k$ and hence $|x_k - x_l| = x_k - x_l \ge \varepsilon$, and note that $n < l$ gives $x_n \le x_l$, so $x_k - x_n \ge x_k - x_l \ge \varepsilon$ with $k \ge n+1 > n$. [step 1.1, L2, L4, L5, L6]

3.1 For each $n$ the set $\{\, k \in \mathbb{N} : k > n \text{ and } x_k - x_n \ge \varepsilon \,\}$ is therefore nonempty and has a least element, so $f(n) := \min\{k : k > n, \ x_k - x_n \ge \varepsilon\}$ is a total function $\mathbb{N} \to \mathbb{N}$; the recursion theorem applied to $\mathbb{N}$, the element $0$ and $f$ gives indices $k_0 = 0$ and $k_{j+1} = f(k_j)$, with $k_j < k_{j+1}$ and $x_{k_{j+1}} - x_{k_j} \ge \varepsilon$ for every $j$. [step 2.1, L4]

4.1 By induction on $j$, $x_{k_j} - x_{k_0} \ge (j \cdot 1_F)\,\varepsilon$ for every $j$: at $j = 0$ both sides are $0$, and adding $x_{k_{j+1}} - x_{k_j} \ge \varepsilon$ to the inductive inequality gives $x_{k_{j+1}} - x_{k_0} \ge (j \cdot 1_F)\varepsilon + \varepsilon = ((j+1)\cdot 1_F)\,\varepsilon$. [step 3.1, L3, L4, L6]

5.1 Since $\varepsilon > 0$ is invertible with $\varepsilon^{-1} > 0$, the Archimedean property supplies $j \ge 1$ with $(B - x_{k_0})\varepsilon^{-1} < j \cdot 1_F$, hence $B - x_{k_0} < (j \cdot 1_F)\varepsilon$ and $x_{k_j} \ge x_{k_0} + (j \cdot 1_F)\varepsilon > B$, contradicting the hypothesis that $B$ bounds every term of $(x_k)$. [step 4.1, L3, L6]

6.1 The assumption of step 1.1 is therefore untenable, so $(x_k)$ is Cauchy in $F$ and (CC) makes it converge in $F$; as $(x_k)$ was an arbitrary nondecreasing sequence bounded above, $F$ has (MCT). [step 5.1, L1, L2, discharge-contradiction] ∎

## Remarks

- **What the Archimedean property does here.** It is used exactly once, in the
  final estimate, to say that a fixed positive $\varepsilon$ added to itself
  often enough exceeds a given element. In a non-Archimedean field the increments
  $\varepsilon$ of the recursion can be infinitesimal relative to $B - x_{k_0}$, and
  the sequence $(x_{k_j})$ climbs forever without ever passing $B$; that is
  exactly how (CC) survives while (MCT) fails.

- **No choice is used:** the recursion takes the *least* admissible index,
  supplied by [[thm-well-ordering-principle]], and it is [[thm-recursion]]
  applied to a function defined outright.
````

## Wave 7 provenance row for the target

```json
{
  "id": "lem-cauchy-complete-and-archimedean-imply-mct",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://arxiv.org/abs/1101.5652"
  ],
  "rationale": "Hall states the equivalence of sequential Cauchy and monotone completeness in Archimedean ordered fields. The local theorem exposes ARCH and supplies a dependency-adapted increment argument.",
  "alpha_concurred": false,
  "at": "2026-08-08",
  "ledger": "wave7-real-analysis-completeness-limits.provenance.jsonl"
}
```

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "def-completeness-properties",
      "source_section": "Definition",
      "quote": "Throughout, $F$ is an ordered field ([[def-ordered-field]]) with its order and\nits absolute value. Sequences in $F$, and the notions of convergence in $F$,\nCauchyness in $F$, boundedness, nondecreasing and nonincreasing, subsequence,\nclosed interval $[a,b]_F$, nesting, and lengths tending to $0$ in $F$, are the\nones fixed once and for all in [[def-sequences-in-an-ordered-field]]. They are\nnot restated here and they are never read in $\\mathbb{R}$: every $\\varepsilon$\nbelow ranges over the positive elements of $F$ itself.\n\nA sequence $(x_k)$ in $F$ is **bounded above** when there is $B \\in F$ with\n$x_k \\le B$ for every $k \\in \\mathbb{N}$, and a subset $S \\subseteq F$ is bounded\nabove when there is $B \\in F$ with $s \\le B$ for every $s \\in S$\n([[def-complete-ordered-field]], [[def-upper-bound]]).\n\nThe following are five properties that $F$ may or may not have.\n\n- **(LUB), the least-upper-bound property.** Every nonempty $S \\subseteq F$ that\n  is bounded above has a least upper bound in $F$. This is exactly the condition\n  that makes $F$ a complete ordered field ([[def-complete-ordered-field]]), and\n  the two names are used interchangeably here.\n\n- **(MCT), the monotone convergence property.** Every nondecreasing sequence in\n  $F$ that is bounded above converges in $F$.\n\n- **(NIP), the nested interval property.** For every nested sequence\n  $(I_k)_{k \\in \\mathbb{N}}$ of closed intervals $I_k = [a_k, b_k]_F$ of $F$\n  whose lengths tend to $0$ in $F$, the intersection\n\n  $$\\bigcap_{k \\in \\mathbb{N}} I_k$$\n\n  is nonempty.\n\n- **(BW), the Bolzano-Weierstrass property.** Every bounded sequence in $F$ has\n  a subsequence that converges in $F$.\n\n- **(CC), Cauchy completeness.** Every Cauchy sequence in $F$ converges in $F$.\n\nAlongside these we use the **Archimedean property (ARCH)** of\n[[def-archimedean-field]]: for every $x \\in F$ there is a natural number $n$\nwith $x < n \\cdot 1_F$.",
      "uses": [
        "6.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-sequences-in-an-ordered-field",
      "source_section": "Definition",
      "quote": "Throughout, $F$ is an ordered field ([[def-ordered-field]]) with its order and\nits absolute value $|\\cdot|$ ([[def-abs-value]]), and $\\mathbb{N}$ is the set of\nnatural numbers with its order ([[def-natural-numbers]], [[def-nat-order]]).\n\nA **sequence in $F$** is a function $x : \\mathbb{N} \\to F$. We write $x_k$ for\n$x(k)$ and $(x_k)$, or $(x_k)_{k \\in \\mathbb{N}}$, for the function itself.\n\nLet $(x_k)$ be a sequence in $F$.\n\n- $(x_k)$ is **bounded** when there is $M \\in F$ with $|x_k| \\le M$ for every\n  $k \\in \\mathbb{N}$.\n- $(x_k)$ **converges to** $L \\in F$ when\n\n  $$\\text{for every } \\varepsilon \\in F \\text{ with } \\varepsilon > 0 \\text{ there is } N \\in \\mathbb{N} \\text{ such that } |x_k - L| < \\varepsilon \\text{ for all } k \\ge N.$$\n\n  We then write $x_k \\to L$ *in $F$*. The sequence is **convergent in $F$** when\n  it converges to some $L \\in F$, and **divergent in $F$** otherwise.\n- $(x_k)$ is **Cauchy in $F$** when\n\n  $$\\text{for every } \\varepsilon \\in F \\text{ with } \\varepsilon > 0 \\text{ there is } N \\in \\mathbb{N} \\text{ such that } |x_k - x_l| < \\varepsilon \\text{ for all } k, l \\ge N.$$\n\n- $(x_k)$ is **nondecreasing** when $x_j \\le x_k$ for all $j \\le k$,\n  **increasing** when $x_j < x_k$ for all $j < k$, **nonincreasing** when\n  $x_j \\ge x_k$ for all $j \\le k$, **decreasing** when $x_j > x_k$ for all\n  $j < k$, and **monotone** when it is nondecreasing or nonincreasing.\n- For a strictly increasing $n : \\mathbb{N} \\to \\mathbb{N}$, the **subsequence**\n  of $(x_k)$ along $n$ is the composite $(x_{n_j})_{j \\in \\mathbb{N}}$. An\n  element $L \\in F$ is a **subsequential limit** of $(x_k)$ when some\n  subsequence of $(x_k)$ converges to $L$ in $F$.\n\n**Closed intervals and nesting.** For $a, b \\in F$ with $a \\le b$, the **closed\ninterval** with endpoints $a$ and $b$ is\n\n$$[a,b]_F \\;:=\\; \\{\\, x \\in F : a \\le x \\le b \\,\\},$$\n\nand its **length** is $b - a \\ge 0$. A sequence $(I_k)_{k \\in \\mathbb{N}}$ of\nclosed intervals $I_k = [a_k, b_k]_F$ is **nested** when $I_{k+1} \\subseteq I_k$\nfor every $k$. Its **lengths tend to $0$ in $F$** when the sequence\n$(b_k - a_k)_{k \\in \\mathbb{N}}$ converges to $0$ in the sense above, that is,\nwhen for every $\\varepsilon > 0$ in $F$ there is $N \\in \\mathbb{N}$ with\n$b_k - a_k < \\varepsilon$ for all $k \\ge N$ (the absolute value may be dropped\nbecause each length is $\\ge 0$).",
      "uses": [
        "1.1",
        "2.1",
        "6.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-archimedean-field",
      "source_section": "Definition",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]). For a natural number\n$n \\ge 1$, write $n \\cdot 1_F := \\underbrace{1_F + \\cdots + 1_F}_{n}$ for the\n$n$-fold sum of the multiplicative identity, and $0 \\cdot 1_F := 0$. These are\nthe **canonical natural numbers** of $F$.\n\n$F$ is **Archimedean** if for every $x \\in F$ there is a natural number $n$ with\n\n$$x < n \\cdot 1_F.$$\n\nEquivalently, the canonical naturals $(n \\cdot 1_F)_{n \\ge 1}$ are **cofinal**:\nno single element of $F$ is an upper bound for all of them.",
      "uses": [
        "4.1",
        "5.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-of-naturals-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field, with field structure as in [[def-field]], and for\n$n \\ge 1$ let $n \\cdot 1_F$ denote the canonical natural number\n$\\underbrace{1_F + \\cdots + 1_F}_{n}$, defined recursively by $1 \\cdot 1_F = 1_F$\nand $(n+1) \\cdot 1_F = n \\cdot 1_F + 1_F$. Then for every $n \\ge 1$:\n\n- $n \\cdot 1_F > 0$ and $(n+1) \\cdot 1_F > n \\cdot 1_F$;\n- the map $n \\mapsto n \\cdot 1_F$ is strictly increasing, hence injective, on $\\{1, 2, 3, \\dots\\}$;\n- $(m+n) \\cdot 1_F = m \\cdot 1_F + n \\cdot 1_F$ and $(mn) \\cdot 1_F = (m \\cdot 1_F)(n \\cdot 1_F)$ for all $m, n \\ge 1$.",
      "uses": [
        "4.1",
        "5.1"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-recursion",
      "source_section": "Statement",
      "quote": "Let $(N,0,\\sigma)$ be a Peano system ([[def-peano-system]]), in particular the natural numbers $\\mathbb{N}$ ([[def-natural-numbers]]). For any set $A$, any element $a \\in A$, and any function $f : A \\to A$, there is a unique function $g : N \\to A$ such that $g(0) = a$ and $g(\\sigma(n)) = f(g(n))$ for all $n \\in N$.",
      "uses": [
        "2.1",
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-well-ordering-principle",
      "source_section": "Statement",
      "quote": "Every nonempty subset $S \\subseteq \\mathbb{N}$ has a least element: there is $\\ell \\in S$ with $\\ell \\le s$ for all $s \\in S$.",
      "uses": [
        "2.1",
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-induction-principle",
      "source_section": "Statement",
      "quote": "Let $S \\subseteq \\mathbb{N}$. If $0 \\in S$ and $\\sigma(n) \\in S$ whenever $n \\in S$, then $S = \\mathbb{N}$. Equivalently (property form): if a property $P$ satisfies $P(0)$ and ($P(n) \\Rightarrow P(\\sigma(n))$) for all $n$, then $P(n)$ holds for all $n \\in \\mathbb{N}$. This is the induction principle, the basis of proof by induction.",
      "uses": [
        "2.1",
        "3.1",
        "4.1"
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
        "4.1"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-of-abs-value",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \\in F$, with\n$|x|$ the absolute value ([[def-abs-value]]). Then\n\n$$|x| \\ge 0; \\quad |x| = 0 \\iff x = 0; \\quad -|x| \\le x \\le |x|; \\quad |-x| = |x|; \\quad |xy| = |x|\\,|y|;$$\n\nand, for every $c > 0$, one has $|x| < c \\iff -c < x < c$.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-of-add-order",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and\nlet $a, b, c, d \\in F$.\n\n1. **Translation invariance.** If $a < b$ then $a + c < b + c$.\n2. **Adding inequalities.** If $a < b$ and $c < d$ then $a + c < b + d$.",
      "uses": [
        "2.1",
        "4.1",
        "5.1"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-of-sign-rules",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and\nlet $a, b, c \\in F$.\n\n1. If $a > 0$ and $b > 0$ then $ab > 0$.\n2. If $a > 0$ and $b < 0$ then $ab < 0$.\n3. If $a < 0$ and $b < 0$ then $ab > 0$.\n4. If $c > 0$ then $a < b \\iff ac < bc$.\n5. If $c < 0$ then $a < b \\iff bc < ac$ (multiplication by a negative reverses order).",
      "uses": [
        "2.1",
        "4.1",
        "5.1"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-of-inverse-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and\nlet $a, b \\in F$.\n\n1. If $a > 0$ then $a^{-1} > 0$.\n2. If $0 < a < b$ then $0 < b^{-1} < a^{-1}$.",
      "uses": [
        "2.1",
        "4.1",
        "5.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-ordered-field",
      "source_section": "Definition",
      "quote": "An **ordered field** is a field $F$ ([[def-field]]) together with a subset\n$P \\subseteq F$, the set of **positive** elements (the *positive cone*),\nsatisfying:\n\n- **(O1) Trichotomy.** For each $x \\in F$, exactly one of the following holds:\n  $x \\in P$, or $x = 0$, or $-x \\in P$.\n- **(O2) Closure.** If $x, y \\in P$ then $x + y \\in P$ and $x \\cdot y \\in P$.\n\nWe write $x > 0$ for $x \\in P$ (read \"$x$ is positive\"), and define the order by\n\n$$a < b \\;:\\Longleftrightarrow\\; b - a \\in P, \\qquad a \\le b \\;:\\Longleftrightarrow\\; a < b \\text{ or } a = b.$$\n\nThus $a > b$ means $b < a$, and $a \\ge b$ means $b \\le a$. An element $x$ with\n$-x \\in P$ (equivalently $x < 0$) is called **negative**.",
      "uses": [
        "2.1",
        "4.1",
        "5.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "Suppose $(x_k)$ is not Cauchy in $F$: there is $\\varepsilon > 0$ in $F$ such that for every $N \\in \\mathbb{N}$ there are $k, l \\ge N$ with $|x_k - x_l| \\ge \\varepsilon$.",
      "step": "1.1",
      "inputs": [
        "L2",
        "assume-contra"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "For every $n \\in \\mathbb{N}$ there is $k > n$ with $x_k - x_n \\ge \\varepsilon$: apply step 1.1 with $N := n + 1$ to get $k, l \\ge n+1$ with $|x_k - x_l| \\ge \\varepsilon$, name them so that $l \\le k$, note that monotonicity gives $x_l \\le x_k$ and hence $|x_k - x_l| = x_k - x_l \\ge \\varepsilon$, and note that $n < l$ gives $x_n \\le x_l$, so $x_k - x_n \\ge x_k - x_l \\ge \\varepsilon$ with $k \\ge n+1 > n$.",
      "step": "2.1",
      "inputs": [
        "1.1",
        "L2",
        "L4",
        "L5",
        "L6"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "For each $n$ the set $\\{\\, k \\in \\mathbb{N} : k > n \\text{ and } x_k - x_n \\ge \\varepsilon \\,\\}$ is therefore nonempty and has a least element, so $f(n) := \\min\\{k : k > n, \\ x_k - x_n \\ge \\varepsilon\\}$ is a total function $\\mathbb{N} \\to \\mathbb{N}$; the recursion theorem applied to $\\mathbb{N}$, the element $0$ and $f$ gives indices $k_0 = 0$ and $k_{j+1} = f(k_j)$, with $k_j < k_{j+1}$ and $x_{k_{j+1}} - x_{k_j} \\ge \\varepsilon$ for every $j$.",
      "step": "3.1",
      "inputs": [
        "2.1",
        "L4"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "By induction on $j$, $x_{k_j} - x_{k_0} \\ge (j \\cdot 1_F)\\,\\varepsilon$ for every $j$: at $j = 0$ both sides are $0$, and adding $x_{k_{j+1}} - x_{k_j} \\ge \\varepsilon$ to the inductive inequality gives $x_{k_{j+1}} - x_{k_0} \\ge (j \\cdot 1_F)\\varepsilon + \\varepsilon = ((j+1)\\cdot 1_F)\\,\\varepsilon$.",
      "step": "4.1",
      "inputs": [
        "3.1",
        "L3",
        "L4",
        "L6"
      ]
    },
    {
      "id": "step-5-1",
      "claim": "Since $\\varepsilon > 0$ is invertible with $\\varepsilon^{-1} > 0$, the Archimedean property supplies $j \\ge 1$ with $(B - x_{k_0})\\varepsilon^{-1} < j \\cdot 1_F$, hence $B - x_{k_0} < (j \\cdot 1_F)\\varepsilon$ and $x_{k_j} \\ge x_{k_0} + (j \\cdot 1_F)\\varepsilon > B$, contradicting the hypothesis that $B$ bounds every term of $(x_k)$.",
      "step": "5.1",
      "inputs": [
        "4.1",
        "L3",
        "L6"
      ]
    },
    {
      "id": "step-6-1",
      "claim": "The assumption of step 1.1 is therefore untenable, so $(x_k)$ is Cauchy in $F$ and (CC) makes it converge in $F$; as $(x_k)$ was an arbitrary nondecreasing sequence bounded above, $F$ has (MCT).",
      "step": "6.1",
      "inputs": [
        "1.1",
        "5.1",
        "L1",
        "L2",
        "discharge-contradiction"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "step 3.1: For each $n$ the set $\\{\\, k \\in \\mathbb{N} : k > n \\text{ and } x_k - x_n \\ge \\varepsilon \\,\\}$ is therefore nonempty and has a least element, so $f(n) := \\min\\{k : k > n, \\ x_k - x_n \\ge \\varepsilon\\}$ is a total function $\\mathbb{N} \\to \\mathbb{N}$; the rec"
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "step 1.1: Suppose $(x_k)$ is not Cauchy in $F$: there is $\\varepsilon > 0$ in $F$ such that for every $N \\in \\mathbb{N}$ there are $k, l \\ge N$ with $|x_k - x_l| \\ge \\varepsilon$."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "step 2.1: For every $n \\in \\mathbb{N}$ there is $k > n$ with $x_k - x_n \\ge \\varepsilon$: apply step 1.1 with $N := n + 1$ to get $k, l \\ge n+1$ with $|x_k - x_l| \\ge \\varepsilon$, name them so that $l \\le k$, note that monotonicity gives $x_l \\le x_k$ and hence $|x_k -"
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "step 4.1: By induction on $j$, $x_{k_j} - x_{k_0} \\ge (j \\cdot 1_F)\\,\\varepsilon$ for every $j$: at $j = 0$ both sides are $0$, and adding $x_{k_{j+1}} - x_{k_j} \\ge \\varepsilon$ to the inductive inequality gives $x_{k_{j+1}} - x_{k_0} \\ge (j \\cdot 1_F)\\varepsilon + \\va"
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "The Statement has no interval endpoint or finite-index endpoint boundary."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "step 1.1, step 2.1, step 3.1: all existence or selection moves were checked; any countable-choice use is explicitly tagged in the cited step."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The Statement is not a biconditional; it is a one-directional result, example, or refutation."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The Statement is not a biconditional; no reverse implication is asserted."
    }
  ],
  "finite_smoke": [],
  "risk_review": {
    "status": "pending",
    "reviewer": "Alpha",
    "notes": "Audit-Beta captured this A2 contract after reading every numbered step and every cited target section; independent risk review remains for A6."
  }
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "lem-cauchy-complete-and-archimedean-imply-mct",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "def-completeness-properties",
    "declared_target": "def-completeness-properties",
    "target_statement_provenance": "ai-altered",
    "targetPage": "equivalent-forms-of-completeness",
    "targetBatch": "wave7-real-analysis-completeness-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-cauchy-complete-and-archimedean-imply-mct",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "def-sequences-in-an-ordered-field",
    "declared_target": "def-sequences-in-an-ordered-field",
    "target_statement_provenance": "ai-altered",
    "targetPage": "formal-laurent-series-field",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-cauchy-complete-and-archimedean-imply-mct",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "def-archimedean-field",
    "declared_target": "def-archimedean-field",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-cauchy-complete-and-archimedean-imply-mct",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "thm-recursion",
    "declared_target": "thm-recursion",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-the-natural-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-cauchy-complete-and-archimedean-imply-mct",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "thm-well-ordering-principle",
    "declared_target": "thm-well-ordering-principle",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-the-natural-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-cauchy-complete-and-archimedean-imply-mct",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "thm-induction-principle",
    "declared_target": "thm-induction-principle",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-the-natural-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-cauchy-complete-and-archimedean-imply-mct",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "thm-nat-linear-order",
    "declared_target": "thm-nat-linear-order",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-the-natural-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-cauchy-complete-and-archimedean-imply-mct",
    "sourcePage": "equivalent-forms-of-completeness",
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
    "source": "lem-cauchy-complete-and-archimedean-imply-mct",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
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
    "source": "lem-cauchy-complete-and-archimedean-imply-mct",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
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
    "source": "lem-cauchy-complete-and-archimedean-imply-mct",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
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
    "source": "lem-cauchy-complete-and-archimedean-imply-mct",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
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
    "source": "lem-cauchy-complete-and-archimedean-imply-mct",
    "sourcePage": "equivalent-forms-of-completeness",
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

## Relevant pending generated-risk rows

```json
[]
```

## Full text of every cited or declared item (16)

### `def-archimedean-field`

````markdown
---
id: def-archimedean-field
kind: definition
title: "Archimedean ordered field"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-ordered-field, def-field]
aliases: []
landmark: false
short: "Archimedean"
verification:
  precheck: n/a
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "UTSA Mathematics: The Archimedean property"
      url: "https://mathresearch.utsa.edu/wiki/index.php?title=Real_Numbers%3AArchimedean_Property"
pipeline_run: null
---

## Definition

Let $F$ be an ordered field ([[def-ordered-field]]). For a natural number
$n \ge 1$, write $n \cdot 1_F := \underbrace{1_F + \cdots + 1_F}_{n}$ for the
$n$-fold sum of the multiplicative identity, and $0 \cdot 1_F := 0$. These are
the **canonical natural numbers** of $F$.

$F$ is **Archimedean** if for every $x \in F$ there is a natural number $n$ with

$$x < n \cdot 1_F.$$

Equivalently, the canonical naturals $(n \cdot 1_F)_{n \ge 1}$ are **cofinal**:
no single element of $F$ is an upper bound for all of them.

## Remarks

- Equivalently (applying the definition to $1/\varepsilon$): for every
  $\varepsilon > 0$ in $F$ there is $n$ with $1/(n \cdot 1_F) < \varepsilon$, so
  the canonical fractions $1/n$ are arbitrarily small.
- That the canonical naturals are well-defined, positive, and strictly
  increasing is [[lem-of-naturals-positive]]. Every complete ordered field is
  Archimedean ([[thm-of-archimedean]]); an ordered field need not be
  ([[cex-ordered-field-not-archimedean]]).
````

### `def-completeness-properties`

````markdown
---
id: def-completeness-properties
kind: definition
title: "The five completeness properties of an ordered field: least upper bound, monotone convergence, nested intervals, Bolzano-Weierstrass, and Cauchy completeness"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-sequences-in-an-ordered-field, def-ordered-field, def-archimedean-field, def-complete-ordered-field, def-upper-bound]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "J. F. Hall, Completeness of Ordered Fields"
      url: "https://arxiv.org/abs/1101.5652"
    - title: "Completeness of the real numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Completeness_of_the_real_numbers"
    - title: "Least-upper-bound property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Least-upper-bound_property"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 and Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §1.2 and §2.3"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Definition

Throughout, $F$ is an ordered field ([[def-ordered-field]]) with its order and
its absolute value. Sequences in $F$, and the notions of convergence in $F$,
Cauchyness in $F$, boundedness, nondecreasing and nonincreasing, subsequence,
closed interval $[a,b]_F$, nesting, and lengths tending to $0$ in $F$, are the
ones fixed once and for all in [[def-sequences-in-an-ordered-field]]. They are
not restated here and they are never read in $\mathbb{R}$: every $\varepsilon$
below ranges over the positive elements of $F$ itself.

A sequence $(x_k)$ in $F$ is **bounded above** when there is $B \in F$ with
$x_k \le B$ for every $k \in \mathbb{N}$, and a subset $S \subseteq F$ is bounded
above when there is $B \in F$ with $s \le B$ for every $s \in S$
([[def-complete-ordered-field]], [[def-upper-bound]]).

The following are five properties that $F$ may or may not have.

- **(LUB), the least-upper-bound property.** Every nonempty $S \subseteq F$ that
  is bounded above has a least upper bound in $F$. This is exactly the condition
  that makes $F$ a complete ordered field ([[def-complete-ordered-field]]), and
  the two names are used interchangeably here.

- **(MCT), the monotone convergence property.** Every nondecreasing sequence in
  $F$ that is bounded above converges in $F$.

- **(NIP), the nested interval property.** For every nested sequence
  $(I_k)_{k \in \mathbb{N}}$ of closed intervals $I_k = [a_k, b_k]_F$ of $F$
  whose lengths tend to $0$ in $F$, the intersection

  $$\bigcap_{k \in \mathbb{N}} I_k$$

  is nonempty.

- **(BW), the Bolzano-Weierstrass property.** Every bounded sequence in $F$ has
  a subsequence that converges in $F$.

- **(CC), Cauchy completeness.** Every Cauchy sequence in $F$ converges in $F$.

Alongside these we use the **Archimedean property (ARCH)** of
[[def-archimedean-field]]: for every $x \in F$ there is a natural number $n$
with $x < n \cdot 1_F$.

## Remarks

- **(NIP) is stated in the shrinking form because that is the form both
  satisfied by the formal Laurent series field and used by the bisection
  theorem.** The field $\mathbb{R}((t^{-1}))$ is Cauchy complete without having
  least upper bounds ([[thm-laurent-cauchy-complete]],
  [[cor-laurent-not-lub-complete]]), and it satisfies shrinking (NIP)
  ([[cor-laurent-nested-intervals]]). The same shrinking condition is exactly
  what the bisection argument of
  [[lem-nested-intervals-and-archimedean-imply-bw]] produces.

- **"Lengths tend to $0$" is read in $F$.** For a non-Archimedean $F$ this is
  strictly stronger than the same words read in $\mathbb{R}$ through some
  identification of the rational scalars, and the difference is not academic:
  the remarks of [[cor-laurent-nested-intervals]] exhibit intervals in
  $\mathbb{R}((t^{-1}))$ whose lengths are the real constants $2/(n+1)$, which
  tend to $0$ in the ordinary real sense and do not tend to $0$ in the order of
  that field.

- **Boundedness of a sequence is two-sided, boundedness above is not.**
  [[def-sequences-in-an-ordered-field]] calls $(x_k)$ bounded when
  $|x_k| \le M$ for every $k$, which is the hypothesis of (BW); (MCT) asks only
  for the one-sided bound $x_k \le B$, which for a nondecreasing sequence is the
  only side in question, since $x_0 \le x_k$ always.

- **(MCT) is stated for nondecreasing sequences only.** The nonincreasing case
  is not a separate assumption: if $(x_k)$ is nonincreasing and bounded below by
  $b$ then $(-x_k)$ is nondecreasing and bounded above by $-b$, and $x_k \to L$
  exactly when $-x_k \to -L$, because $|(-x_k) - (-L)| = |x_k - L|$. That
  reduction is used in the proof of [[lem-mct-implies-lub]].

- **Nothing here presumes that any of the five holds.** They are predicates on
  an ordered field, and the point of the page they open is that in the presence
  of (ARCH) they are all the same predicate ([[thm-completeness-equivalences]]),
  while without it two of them are strictly weaker
  ([[fs-nested-intervals-implies-lub]], [[fs-cauchy-complete-implies-lub]]).

- **(CC) is this library's third rendering of "Cauchy complete", and for $\mathbb{R}$ all three agree.** [[def-cauchy-in-metric]] and [[def-complete-metric-space]] read Cauchyness and completeness in a metric space, and the case $n = 1$ of [[thm-euclidean-space-complete]] proves $(\mathbb{R}, |x-y|)$ complete; [[def-real-limit]] reads both notions for real sequences, with $\varepsilon$ ranging over the positive rationals; the present definition reads them in an ordered field $F$. For $F = \mathbb{R}$ under the metric $d(x,y) = |x-y|$ of [[lem-real-line-is-a-metric-space]] the three unfold to the same quantified statement: below every positive real lies a positive rational ([[lem-rat-embeds-dense]]), so the two ranges of $\varepsilon$ pick out the same Cauchy sequences and the same convergent ones. So "$\mathbb{R}$ satisfies (CC)" is a statement this library has already proved twice, as [[thm-cauchy-criterion-via-lub]] and as the case $n = 1$ of [[thm-euclidean-space-complete]]. The parallel stops at $\mathbb{R}$. The absolute value of an ordered field takes its values in $F$, while a metric is required to take its values in $\mathbb{R}$ ([[def-metric-space]]), so for a non-Archimedean $F$ the map $(x,y) \mapsto |x-y|$ is not a metric in this library's sense and the metric development says nothing about it. That is why [[lem-of-sequence-basics]] had to be proved from the order axioms alone, although its Cauchy clauses reappear for metric spaces as [[lem-metric-convergent-implies-cauchy]], [[lem-metric-cauchy-bounded]] and [[lem-metric-cauchy-with-convergent-subsequence]]. Neither development generalises the other; they meet exactly at $\mathbb{R}$.
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

### `def-sequences-in-an-ordered-field`

````markdown
---
id: def-sequences-in-an-ordered-field
kind: definition
title: "Sequences, convergence, Cauchyness, monotonicity, boundedness and closed intervals in an arbitrary ordered field"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-ordered-field, def-abs-value, lem-of-abs-value, lem-of-triangle-inequality, def-natural-numbers, def-nat-order, def-sequence, def-real-limit, def-monotone-sequence, def-interval, def-subsequential-limit]
aliases: []
landmark: false
short: "sequences in an ordered field $F$"
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
    - title: "Ordered field (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordered_field"
    - title: "Cauchy sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Cauchy sequences in ordered fields (University of Tennessee notes)"
      url: "https://web.math.utk.edu/~freire/teaching/m300f12/m300s12handout7.pdf"
pipeline_run: null
---

## Definition

Throughout, $F$ is an ordered field ([[def-ordered-field]]) with its order and
its absolute value $|\cdot|$ ([[def-abs-value]]), and $\mathbb{N}$ is the set of
natural numbers with its order ([[def-natural-numbers]], [[def-nat-order]]).

A **sequence in $F$** is a function $x : \mathbb{N} \to F$. We write $x_k$ for
$x(k)$ and $(x_k)$, or $(x_k)_{k \in \mathbb{N}}$, for the function itself.

Let $(x_k)$ be a sequence in $F$.

- $(x_k)$ is **bounded** when there is $M \in F$ with $|x_k| \le M$ for every
  $k \in \mathbb{N}$.
- $(x_k)$ **converges to** $L \in F$ when

  $$\text{for every } \varepsilon \in F \text{ with } \varepsilon > 0 \text{ there is } N \in \mathbb{N} \text{ such that } |x_k - L| < \varepsilon \text{ for all } k \ge N.$$

  We then write $x_k \to L$ *in $F$*. The sequence is **convergent in $F$** when
  it converges to some $L \in F$, and **divergent in $F$** otherwise.
- $(x_k)$ is **Cauchy in $F$** when

  $$\text{for every } \varepsilon \in F \text{ with } \varepsilon > 0 \text{ there is } N \in \mathbb{N} \text{ such that } |x_k - x_l| < \varepsilon \text{ for all } k, l \ge N.$$

- $(x_k)$ is **nondecreasing** when $x_j \le x_k$ for all $j \le k$,
  **increasing** when $x_j < x_k$ for all $j < k$, **nonincreasing** when
  $x_j \ge x_k$ for all $j \le k$, **decreasing** when $x_j > x_k$ for all
  $j < k$, and **monotone** when it is nondecreasing or nonincreasing.
- For a strictly increasing $n : \mathbb{N} \to \mathbb{N}$, the **subsequence**
  of $(x_k)$ along $n$ is the composite $(x_{n_j})_{j \in \mathbb{N}}$. An
  element $L \in F$ is a **subsequential limit** of $(x_k)$ when some
  subsequence of $(x_k)$ converges to $L$ in $F$.

**Closed intervals and nesting.** For $a, b \in F$ with $a \le b$, the **closed
interval** with endpoints $a$ and $b$ is

$$[a,b]_F \;:=\; \{\, x \in F : a \le x \le b \,\},$$

and its **length** is $b - a \ge 0$. A sequence $(I_k)_{k \in \mathbb{N}}$ of
closed intervals $I_k = [a_k, b_k]_F$ is **nested** when $I_{k+1} \subseteq I_k$
for every $k$. Its **lengths tend to $0$ in $F$** when the sequence
$(b_k - a_k)_{k \in \mathbb{N}}$ converges to $0$ in the sense above, that is,
when for every $\varepsilon > 0$ in $F$ there is $N \in \mathbb{N}$ with
$b_k - a_k < \varepsilon$ for all $k \ge N$ (the absolute value may be dropped
because each length is $\ge 0$).

## Remarks

- **The thresholds range over $F$, and that is not a stylistic choice.** In an
  Archimedean ordered field one may equivalently test $\varepsilon$ over the
  canonical rationals, and that is what the $\mathbb{R}$-specific
  [[def-real-limit]] does; the two agree there, as the remark on rational and
  real $\varepsilon$ in [[def-sequence]] records. In a general $F$ they do
  **not** agree, because the canonical rationals need not be cofinal below the
  positive elements. A concrete failure lives on this page: in
  $\mathbb{R}((t^{-1}))$ every positive rational constant exceeds $t^{-1}$
  (clause 4 of [[lem-laurent-non-archimedean]], since a nonzero constant is
  nonzero at index $0$), so the sequence taking the value $0$ at even indices
  and $t^{-1}$ at odd indices would satisfy the Cauchy condition read with
  rational thresholds only, while failing it at $\varepsilon = t^{-2}$, where
  consecutive terms differ by $t^{-1} > t^{-2}$; and it has no limit at all,
  since a convergent sequence is Cauchy by the triangle inequality. Every
  definition above therefore
  quantifies over $\varepsilon \in F$, and no proof in this library may
  substitute a rational threshold in a field that has not been shown to be
  Archimedean.

- **These are the $\mathbb{R}$-notions with $\mathbb{R}$ replaced by $F$, and
  nothing more.** Sequence, tail, subsequence and boundedness are
  [[def-sequence]]; monotonicity is [[def-monotone-sequence]]; subsequential
  limits are [[def-subsequential-limit]]; convergence and Cauchyness are
  [[def-real-limit]]; closed intervals are the form $[a,b]$ of
  [[def-interval]]. Only the field in which the inequalities are read has
  changed.

- **Transfer of theorems is not automatic, and citing an $\mathbb{R}$-item for a
  general $F$ is a citation error.** A result proved about sequences of reals is
  a statement about $\mathbb{R}$. Many such proofs use only the ordered-field
  axioms and go through for any $F$ verbatim, and many others use completeness
  or the Archimedean property and do not. Which is which has to be settled by
  reading the proof; until an item is stated for a general ordered field, it may
  not be cited for one.

- **Limits are unique in any ordered field.** If $x_k \to L$ and $x_k \to L'$
  in $F$ with $L \ne L'$, put $\varepsilon := |L - L'|/2$, which is positive
  because $|L-L'| > 0$ ([[lem-of-abs-value]]) and $2 = 1 + 1 > 0$. Choose $N$
  beyond which both $|x_k - L| < \varepsilon$ and $|x_k - L'| < \varepsilon$
  hold, and take any $k \ge N$: the triangle inequality
  ([[lem-of-triangle-inequality]], proved for an arbitrary ordered field) gives
  $|L - L'| \le |L - x_k| + |x_k - L'| < 2\varepsilon = |L - L'|$, which is
  impossible. So the limit, when it exists, is unique, and the notation
  $\lim_k x_k$ is unambiguous. No completeness and no Archimedean hypothesis is
  used.

- **Indexing starts at $0$**, as everywhere in this library, because
  $0 \in \mathbb{N}$ ([[def-natural-numbers]]). A nested sequence of intervals
  therefore begins with $I_0$, and a statement about "the first $N$ terms" means
  the indices $0, \dots, N-1$.
````

### `lem-laurent-non-archimedean`

````markdown
---
id: lem-laurent-non-archimedean
kind: lemma
title: "$\\mathbb{R}((t^{-1}))$ is non-Archimedean, and the monomials $t^{-k}$ are cofinal below its positive elements"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-formal-laurent-series, lem-laurent-valuation, thm-laurent-ordered-field, def-archimedean-field, def-ordered-field, def-abs-value, thm-int-ordered-ring, lem-nat-embeds-int, def-int-order]
aliases: []
landmark: true
short: "$K$ is non-Archimedean"
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
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
    - title: "Ordered field (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordered_field"
    - title: "H. G. Dales, Norming infinitesimals of large fields"
      url: "https://eprints.lancs.ac.uk/id/eprint/78955/1/Norminginfinitesimalsfinal.pdf"
pipeline_run: null
---

## Statement

Let $K = \mathbb{R}((t^{-1}))$ be the ordered field of
[[thm-laurent-ordered-field]], and identify a natural number with its image in
$\mathbb{Z}$ when it is used as an index. Then:

1. $n \cdot 1_K < t$ for every $n \in \mathbb{N}$; consequently $K$ is **not**
   Archimedean ([[def-archimedean-field]]).
2. $0_K < t^{-(k+1)} < t^{-k}$ for every $k \in \mathbb{Z}$.
3. **(Countable cofinality.)** For every $\varepsilon \in K$ with
   $\varepsilon > 0_K$ there is $k \in \mathbb{N}$ with
   $0_K < t^{-k} < \varepsilon$; indeed every integer $k > v(\varepsilon)$
   works.
4. **(The monomials measure the valuation.)** For $h \in K$ and $k \in
   \mathbb{Z}$: if $h(j) = 0$ for every $j \le k$ then $|h| < t^{-k}$; and
   conversely, if $|h| < t^{-k}$ then $h(j) = 0$ for every $j < k$.

## Facts & Assumptions

**Given:** $K$ with its valuation $v$, leading coefficient $\operatorname{lc}$, monomials $t^{-a}$ and constants $\iota(c)$.

[L1] For nonzero $h \in K$, $h(k) = 0$ for $k < v(h)$ and $h(v(h)) = \operatorname{lc}(h) \ne 0$; $t^{-a}$ is $1$ at index $a$ and $0$ elsewhere, so $t^{-a} \ne 0_K$ with $v(t^{-a}) = a$ and $\operatorname{lc}(t^{-a}) = 1$; and $t = t^{-(-1)}$ ([[def-formal-laurent-series]]).

[L2] $K$ is an ordered field in which $f < g$ holds exactly when $g - f \ne 0_K$ and $\operatorname{lc}(g-f) > 0$; for $f \ne 0_K$ one has $|f| \ne 0_K$, $v(|f|) = v(f)$ and $\operatorname{lc}(|f|) > 0$; and $n \cdot 1_K = \iota(n \cdot 1_{\mathbb{R}})$, which for $n \ge 1$ is nonzero with $v = 0$ ([[thm-laurent-ordered-field]], [[def-abs-value]]).

[L3] For nonzero $f, g \in K$: $-f \ne 0_K$ with $v(-f) = v(f)$; and if $v(f) < v(g)$ then $f + g \ne 0_K$ with $\operatorname{lc}(f+g) = \operatorname{lc}(f)$ ([[lem-laurent-valuation]]).

[L4] An ordered field $F$ is Archimedean when for every $x \in F$ there is a natural $n$ with $x < n \cdot 1_F$; and in an ordered field exactly one of $x < y$, $x = y$, $y < x$ holds ([[def-archimedean-field]], [[def-ordered-field]]).

[L5] The order on $\mathbb{Z}$ is total, and every integer $\ge 0$ is the image of a unique natural number; so for every $m \in \mathbb{Z}$ there is a natural $k$ whose image exceeds $m$ ([[thm-int-ordered-ring]], [[def-int-order]], [[lem-nat-embeds-int]]).

## Proof

**Proof technique:** direct.

1.1 For every $k \in \mathbb{Z}$ the monomial $t^{-k}$ is nonzero with $\operatorname{lc}(t^{-k}) = 1 > 0$, so $t^{-k} > 0_K$ by [L2]; and since $v(t^{-k}) = k < k+1 = v(-t^{-(k+1)})$ by [L1] and [L3], the difference $t^{-k} - t^{-(k+1)}$ is nonzero with leading coefficient $\operatorname{lc}(t^{-k}) = 1 > 0$, so $t^{-(k+1)} < t^{-k}$. [L1, L2, L3]

1.2 Let $n \in \mathbb{N}$. If $n = 0$ then $t - n \cdot 1_K = t$, which is nonzero with $\operatorname{lc}(t) = 1 > 0$. If $n \ge 1$ then $n \cdot 1_K$ is nonzero with $v(n \cdot 1_K) = 0$, so $-(n\cdot 1_K)$ is nonzero with valuation $0$ by [L3], while $v(t) = -1 < 0$; hence $t - n\cdot 1_K$ is nonzero with leading coefficient $\operatorname{lc}(t) = 1 > 0$ by [L3]. In both cases $n \cdot 1_K < t$ by [L2]. [L1, L2, L3]

1.3 Conversely, let $h \in K$ and $k \in \mathbb{Z}$ with $|h| < t^{-k}$, and suppose $h \ne 0_K$ with $v(h) < k$. Then $v(|h|) = v(h) < k = v(t^{-k})$ and $\operatorname{lc}(|h|) > 0$ by [L2], so $|h| - t^{-k}$ is nonzero with leading coefficient $\operatorname{lc}(|h|) > 0$ by [L3], giving $t^{-k} < |h|$ and contradicting $|h| < t^{-k}$ by the trichotomy of [L4]. Hence $h = 0_K$ or $v(h) \ge k$, and in either case $h(j) = 0$ for every $j < k$ by [L1]. [L1, L2, L3, L4]

2.1 Let $h \in K$ and $k \in \mathbb{Z}$ with $h(j) = 0$ for every $j \le k$. If $h = 0_K$ then $|h| = 0_K < t^{-k}$ by [step 1.1]. Otherwise $h \ne 0_K$ with $v(h) > k$, so $|h| \ne 0_K$ with $v(|h|) = v(h) > k = v(t^{-k})$ by [L1] and [L2]; then $t^{-k} - |h|$ is nonzero with leading coefficient $\operatorname{lc}(t^{-k}) = 1 > 0$ by [L3], so $|h| < t^{-k}$ by [L2]. [step 1.1, L1, L2, L3]

2.2 Let $\varepsilon \in K$ with $\varepsilon > 0_K$, so $\varepsilon \ne 0_K$ and $\operatorname{lc}(\varepsilon) > 0$ by [L2]; put $m := v(\varepsilon)$ and use [L5] to fix a natural $k$ with $k > m$. Then $v(\varepsilon) = m < k = v(t^{-k}) = v(-t^{-k})$ by [L1] and [L3], so $\varepsilon - t^{-k}$ is nonzero with leading coefficient $\operatorname{lc}(\varepsilon) > 0$, that is $t^{-k} < \varepsilon$; and $t^{-k} > 0_K$ by [step 1.1]. The same computation applies to every integer $k > m$. [step 1.1, L1, L2, L3, L5]

2.3 By [step 1.2], $n \cdot 1_K < t$ for every natural $n$; by the trichotomy of [L4] no natural $n$ can then satisfy $t < n \cdot 1_K$, so the defining condition of [L4] fails at $x = t$ and $K$ is not Archimedean. [step 1.2, L4]

3.1 Clause 1 is [step 1.2] with [step 2.3], clause 2 is [step 1.1], clause 3 is [step 2.2], and clause 4 is [step 2.1] together with [step 1.3]. [step 1.1, step 2.1, step 1.3, step 2.2, step 2.3] ∎

## Remarks

- **Why clause 3 is the pivotal one.** The valuation takes its values in
  $\mathbb{Z}$, which has countable cofinality, and clause 3 is the translation
  of that fact into the order of $K$: a *countable* family, the monomials
  $t^{-k}$ with $k \in \mathbb{N}$, already gets below every positive element.
  This is what makes the sequential Cauchy condition in $K$ testable against
  countably many thresholds, and it is the reason a sequence indexed by
  $\mathbb{N}$ suffices to reach a limit in [[thm-laurent-cauchy-complete]].
  Nothing like it would hold if the exponents were allowed to range over a
  group of uncountable cofinality.

- **Non-Archimedean here is a statement about $t$, not about the constants.**
  The canonical naturals of $K$ are the constant series
  $n \cdot 1_K = \iota(n \cdot 1_{\mathbb{R}})$ (clause 3 of
  [[thm-laurent-ordered-field]]), all of valuation $0$, and what bounds them
  above is $t$, of valuation $-1$. The computation in step 1.2 uses nothing
  about $t$ beyond that: every *positive* element of negative valuation exceeds
  every canonical natural, because a strict inequality between valuations
  decides the comparison outright, whatever the coefficients are.
````

### `lem-mct-implies-archimedean`

````markdown
---
id: lem-mct-implies-archimedean
kind: lemma
title: "The monotone convergence property alone forces the Archimedean property, so it carries no separate Archimedean hypothesis"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-completeness-properties, def-sequences-in-an-ordered-field, def-archimedean-field, def-ordered-field, lem-of-add-order, lem-of-naturals-positive, lem-of-abs-value, lem-of-sequence-basics, cor-of-one-positive]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
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
    - title: "J. F. Hall, Completeness of Ordered Fields"
      url: "https://arxiv.org/abs/1101.5652"
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
    - title: "Monotone convergence theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Monotone_convergence_theorem"
    - title: "J. Lebl, Basic Analysis I, §1.2 and §2.4"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement

Let $F$ be an ordered field with the monotone convergence property (MCT) of
[[def-completeness-properties]]. Then $F$ is Archimedean
([[def-archimedean-field]]).

So (MCT), like (BW) and like (LUB), carries the Archimedean property on its own,
and the hypothesis attached to (CC) in
[[lem-cauchy-complete-and-archimedean-imply-mct]] need not be attached here.
This is what lets [[rem-where-the-archimedean-hypothesis-is-needed]] sort the
five properties into those that do and those that do not.

## Facts & Assumptions

**Given:** An ordered field $F$ with (MCT).

[L1] The property (MCT): every nondecreasing sequence in $F$ that is bounded above converges in $F$ ([[def-completeness-properties]]).

[L2] Sequences in an ordered field: a sequence is a function $\mathbb{N} \to F$; it is nondecreasing when $x_j \le x_k$ for all $j \le k$; convergence and Cauchyness in $F$ are as fixed there ([[def-sequences-in-an-ordered-field]]).

[L3] Archimedean property: $F$ is Archimedean when for every $x \in F$ there is a natural $n$ with $x < n \cdot 1_F$, where $0 \cdot 1_F = 0$ and $(n+1)\cdot 1_F = n \cdot 1_F + 1_F$ ([[def-archimedean-field]]).

[L4] Canonical naturals: $n \cdot 1_F > 0$ for $n \ge 1$ and $n \mapsto n \cdot 1_F$ is strictly increasing on $\{1,2,3,\dots\}$ ([[lem-of-naturals-positive]]).

[L5] A sequence converging in $F$ is Cauchy in $F$ (clause 3 of [[lem-of-sequence-basics]]).

[L6] Order arithmetic: $0 < 1_F$ ([[cor-of-one-positive]]); the order is total, so the failure of $x < y$ is $y \le x$; adding a constant preserves the order ([[lem-of-add-order]], [[def-ordered-field]]); and $|u| = u$ whenever $u \ge 0$ ([[lem-of-abs-value]]). Here [[lem-of-add-order]] states the STRICT forms and only those; the nonstrict forms used below are those together with the equality cases, which trichotomy settles, the order being total ([[def-ordered-field]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose $F$ has (MCT) and is not Archimedean; then there is $x \in F$ with $n \cdot 1_F \le x$ for every $n \in \mathbb{N}$. [L3, L6, assume-contra]

1.2 Let $(y_k)$ be the sequence $y_k := k \cdot 1_F$ in $F$, so $y_0 = 0$ and $y_{k+1} = y_k + 1_F$; it is nondecreasing, since $0 = y_0 < y_n$ for $n \ge 1$ and $j \mapsto j \cdot 1_F$ is strictly increasing on the positive naturals. [L2, L3, L4]

2.1 $(y_k)$ is bounded above by $x$, so (MCT) makes it converge in $F$ to some $L$. [step 1.1, step 1.2, L1, L2]

3.1 Being convergent, $(y_k)$ is Cauchy in $F$, so, $1_F$ being positive, there is $N \in \mathbb{N}$ with $|y_k - y_l| < 1_F$ for all $k, l \ge N$. [step 2.1, L2, L5, L6]

4.1 But $y_{N+1} - y_N = 1_F > 0$, so $|y_{N+1} - y_N| = 1_F$, which is not $< 1_F$; this contradicts step 3.1. [step 1.2, step 3.1, L6]

5.1 The assumption of step 1.1 is therefore untenable, and an ordered field with (MCT) is Archimedean. [step 4.1, discharge-contradiction] ∎

## Remarks

- **Why this item exists.** Without it, the natural reading of the equivalence
  theorem would attach an Archimedean hypothesis to (MCT) as well, and
  [[rem-where-the-archimedean-hypothesis-is-needed]] would answer its own
  question wrongly. With it the answer is clean: (LUB), (BW) and (MCT) each
  imply the Archimedean property, while (NIP) and (CC) do not
  ([[fs-nested-intervals-implies-lub]], [[fs-cauchy-complete-implies-lub]]).

- **The witness is the same sequence as in [[lem-bw-implies-archimedean]]**, the
  canonical naturals, but the two arguments use different failures of it. There
  the sequence is bounded and has no convergent subsequence; here it is
  nondecreasing and bounded above and has no limit. Neither argument implies the
  other, because neither (BW) nor (MCT) is assumed in the other's proof.

- The gap of exactly $1_F$ between consecutive terms is what does the work, and
  it is available in every ordered field: $1_F > 0$ by
  [[cor-of-one-positive]], and no smallness of $1_F$ relative to $x$ is
  possible, since the Cauchy condition is tested at the threshold $1_F$ itself.
````

### `lem-of-abs-value`

````markdown
---
id: lem-of-abs-value
kind: lemma
title: "Basic properties of the absolute value"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-abs-value, def-ordered-field, lem-of-mult-neg, lem-of-sign-rules]
aliases: []
landmark: false
short: "|x| properties"
proof_strategy: cases
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
    - title: "Purdue University analysis notes: Ordered fields and absolute value"
      url: "https://www.math.purdue.edu/~gcavigli/Swanson.pdf"
pipeline_run: null
---

## Statement

Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \in F$, with
$|x|$ the absolute value ([[def-abs-value]]). Then

$$|x| \ge 0; \quad |x| = 0 \iff x = 0; \quad -|x| \le x \le |x|; \quad |-x| = |x|; \quad |xy| = |x|\,|y|;$$

and, for every $c > 0$, one has $|x| < c \iff -c < x < c$.

## Facts & Assumptions

**Given:** An ordered field $F$ and elements $x, y \in F$.

[L1] Absolute value: $|u| = u$ if $u \ge 0$, and $|u| = -u$ if $u < 0$ ([[def-abs-value]]).

[L2] Ordered-field order: trichotomy holds (for each $u$ exactly one of $u > 0$, $u = 0$, $u < 0$), $a < b$ means $b - a$ is positive, and sums and products of positives are positive ([[def-ordered-field]]).

[L3] Signs in products: $(-a)b = -(ab)$ and $(-a)(-b) = ab$ ([[lem-of-mult-neg]]).

[L4] Sign rules: a product of two elements of the same sign is positive, and a product of two elements of opposite sign is negative ([[lem-of-sign-rules]]).

## Proof

**Proof technique:** cases.

1.1 Case $x > 0$: by [L1] $|x| = x > 0$, so $|x| \ge 0$ and $|x| \ne 0$; since $-x < 0$ we get $|-x| = -(-x) = x = |x|$ by [L1], and $-|x| = -x < 0 < x = |x|$, so $-|x| \le x \le |x|$. [assume-case pos, L1, L2, algebra]

1.2 Case $x = 0$: then $|x| = |0| = 0$, so $|x| \ge 0$ holds with $|x| = 0$ and $x = 0$, while $|-x| = |0| = |x|$ and $-|x| = 0 \le 0 \le 0 = |x|$. [assume-case zero, L1]

1.3 Case $x < 0$: by [L1] $|x| = -x$, and [L2] gives $-x > 0$, so $|x| > 0$ and $|x| \ne 0$; here $|-x| = -x = |x|$ by [L1], and $-|x| = -(-x) = x \le x$ while $x < 0 < -x = |x|$, so $-|x| \le x \le |x|$. [assume-case neg, L1, L2, algebra]

1.4 Case $x = 0$ or $y = 0$: then $xy = 0$, so $|xy| = 0$, and one of $|x|, |y|$ is $0$, whence $|x|\,|y| = 0 = |xy|$. [assume-case zerofactor, L1]

1.5 Case $x, y$ have the same sign (both positive or both negative): by [L4] $xy > 0$, so $|xy| = xy$, while $|x|\,|y| = xy$ by [L3] (for $x, y < 0$ this is $(-x)(-y) = xy$), hence $|xy| = |x|\,|y|$. [assume-case same, L1, L3, L4]

1.6 Case $x, y$ have opposite signs (one positive, one negative): by [L4] $xy < 0$, so $|xy| = -(xy)$, while $|x|\,|y| = -(xy)$ by [L3] (namely $x(-y)$ or $(-x)y$), hence $|xy| = |x|\,|y|$. [assume-case opposite, L1, L3, L4]

2.1 By trichotomy [L2] each $x$ lies in exactly one of the cases 1.1-1.3, and in each we verified $|x| \ge 0$, that $|x| = 0 \iff x = 0$, that $|-x| = |x|$, and that $-|x| \le x \le |x|$; hence all four hold for every $x$. [step 1.1, step 1.2, step 1.3, cases-exhaustive]

2.2 By trichotomy [L2] each pair $x, y$ lies in exactly one of the cases 1.4-1.6, and in each $|xy| = |x|\,|y|$; hence $|xy| = |x|\,|y|$ for all $x, y$. [step 1.4, step 1.5, step 1.6, cases-exhaustive]

3.1 Let $c > 0$: if $|x| < c$ then $-c < -|x| \le x \le |x| < c$ by [step 2.1] and [L2], so $-c < x < c$; conversely if $-c < x < c$ then both $x < c$ and $-x < c$, and since $|x|$ equals $x$ or $-x$ by [L1], we get $|x| < c$, so $|x| < c \iff -c < x < c$. [step 2.1, L1, L2] ∎
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

### `thm-induction-principle`

````markdown
---
id: thm-induction-principle
kind: theorem
title: "The principle of mathematical induction"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-natural-numbers, def-inductive-set, lem-omega-smallest-inductive]
aliases: [principle-of-induction, induction-principle]
landmark: true
short: "$0\\in S$, $\\sigma$-closed $\\Rightarrow S=\\mathbb N$"
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
    - title: "Mathematical induction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mathematical_induction"
    - title: "Set-theoretic definition of natural numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Set-theoretic_definition_of_natural_numbers"
    - title: "B. Kaya, MATH 320 Set Theory (METU lecture notes)"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Peano axioms (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Peano_axioms"
pipeline_run: null
---

## Statement

Let $S \subseteq \mathbb{N}$. If $0 \in S$ and $\sigma(n) \in S$ whenever $n \in S$, then $S = \mathbb{N}$. Equivalently (property form): if a property $P$ satisfies $P(0)$ and ($P(n) \Rightarrow P(\sigma(n))$) for all $n$, then $P(n)$ holds for all $n \in \mathbb{N}$. This is the induction principle, the basis of proof by induction.

## Facts & Assumptions

**Given:** $\mathbb{N} = \omega$ is the smallest inductive set ([[def-inductive-set]], [[def-natural-numbers]], [[lem-omega-smallest-inductive]]); $0 = \varnothing$, $\sigma(n) = n \cup \{n\}$.

[L1] $\omega$ is contained in every inductive set ([[lem-omega-smallest-inductive]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $S \subseteq \mathbb{N}$ with $0 = \varnothing \in S$ and ($x \in S \Rightarrow \sigma(x) = x \cup \{x\} \in S$). [given]

2.1 Then $S$ contains $\varnothing$ and is closed under $x \mapsto x \cup \{x\}$, so $S$ is an inductive set. [step 1.1]

3.1 $\mathbb{N} = \omega \subseteq S$ because $\omega$ is a subset of every inductive set. [L1, step 2.1]

4.1 With $S \subseteq \mathbb{N}$ by hypothesis, $S = \mathbb{N}$. [step 3.1, given]

5.1 The property form is the set case with $S = \{n \in \mathbb{N} : P(n)\}$: $P(0)$ and $P(n) \Rightarrow P(\sigma(n))$ give $0 \in S$ and $\sigma$-closure, so $S = \mathbb{N}$, i.e. $P$ holds for all $n$; conversely the set form is the property form applied to $P(n) :\equiv n \in S$, so the two are equivalent. [step 4.1] ∎
````

### `thm-laurent-cauchy-complete`

````markdown
---
id: thm-laurent-cauchy-complete
kind: theorem
title: "Every Cauchy sequence in $\\mathbb{R}((t^{-1}))$ converges: $K$ is sequentially Cauchy complete"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-formal-laurent-series, lem-laurent-series-ring, thm-laurent-ordered-field, lem-laurent-non-archimedean, def-sequences-in-an-ordered-field, def-ordered-field, def-abs-value, thm-well-ordering-principle, thm-induction-principle, def-natural-numbers, def-nat-order, thm-nat-linear-order, lem-nat-embeds-int]
aliases: []
landmark: true
short: "$K$ is Cauchy complete"
proof_strategy: constructive
verification:
  precheck: pass
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-08
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Hahn series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hahn_series"
    - title: "Cauchy sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
    - title: "Complete field (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Complete_field"
    - title: "B. Sambale, An invitation to formal power series"
      url: "https://link.springer.com/article/10.1365/s13291-022-00256-6"
    - title: "Laurent series (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Laurent_series"
    - title: "H. G. Dales, Norming infinitesimals of large fields"
      url: "https://eprints.lancs.ac.uk/id/eprint/78955/1/Norminginfinitesimalsfinal.pdf"
pipeline_run: null
---

## Statement

Every sequence $(f^{(n)})_{n \in \mathbb{N}}$ in $K = \mathbb{R}((t^{-1}))$ that
is Cauchy in $K$ ([[def-sequences-in-an-ordered-field]]) converges in $K$. That
is, the ordered field $K$ of [[thm-laurent-ordered-field]] is **sequentially
Cauchy complete**.

The limit is built coefficient by coefficient: at each index $j \in \mathbb{Z}$
the real numbers $f^{(n)}(j)$ are eventually constant in $n$, and $L(j)$ is that
eventual value.

## Scratch

The whole theorem turns on one structural fact about $K$, and it is worth
isolating before the proof: **the value group is $\mathbb{Z}$, so it has
countable cofinality.** Concretely, the countably many monomials $t^{-k}$,
$k \in \mathbb{N}$, get below every positive element of $K$
([[lem-laurent-non-archimedean]], clause 3). Two consequences drive everything.

First, the Cauchy condition, which quantifies over the uncountably many positive
$\varepsilon \in K$, is *equivalent* to its restriction to the countable family
$\varepsilon = t^{-(k+1)}$, and by clause 4 of the same lemma that restricted
condition says exactly: for each $k$ the coefficients at all indices $j \le k$
are eventually constant along the sequence.

Second, a sequence indexed by $\mathbb{N}$ is long enough to reach the limit.
For each of the countably many thresholds $t^{-k}$ there is an index $N_k$ past
which the sequence is that close, and $\sup$-free bookkeeping over $\mathbb{N}$
assembles the $N_k$ into a single limit. In a field whose value group had
uncountable cofinality this last step would fail, and a sequence would not
suffice.

The one genuinely non-formal point is that the assembled $L$ must have support
bounded below, so that it is an element of $K$ at all. That does not follow from
the eventual constancy at each index separately; it comes from the *single*
threshold $k = 0$, which already pins down every negative index at once.

## Facts & Assumptions

**Given:** A sequence $(f^{(n)})_{n \in \mathbb{N}}$ in $K$ that is Cauchy in $K$.

[L1] $K$ consists of the functions $\mathbb{Z} \to \mathbb{R}$ whose support is bounded below; $t^{-a}$ is $1$ at index $a$ and $0$ elsewhere ([[def-formal-laurent-series]]).

[L2] $K$ is an ordered field, so its order is transitive and total ([[thm-laurent-ordered-field]], [[def-ordered-field]], [[def-abs-value]]); and $(g - h)(j) = g(j) - h(j)$ for $g, h \in K$ ([[lem-laurent-series-ring]]).

[L3] In $K$: $0_K < t^{-(k+1)} < t^{-k}$ for every $k \in \mathbb{Z}$; for every $\varepsilon > 0$ in $K$ there is $k \in \mathbb{N}$ with $t^{-k} < \varepsilon$; if $h(j) = 0$ for every $j \le k$ then $|h| < t^{-k}$; and if $|h| < t^{-k}$ then $h(j) = 0$ for every $j < k$ ([[lem-laurent-non-archimedean]]).

[L4] $(x_n)$ is Cauchy in $K$ when for every $\varepsilon > 0$ in $K$ there is $N \in \mathbb{N}$ with $|x_n - x_m| < \varepsilon$ for all $n, m \ge N$; and $(x_n)$ converges to $L$ in $K$ when for every $\varepsilon > 0$ in $K$ there is $N$ with $|x_n - L| < \varepsilon$ for all $n \ge N$ ([[def-sequences-in-an-ordered-field]]).

[L5] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L6] The order on $\mathbb{N}$ is total ([[thm-nat-linear-order]], [[def-nat-order]]), induction is available ([[thm-induction-principle]], [[def-natural-numbers]]), and every integer $\ge 0$ is the image of a unique natural number, so a natural number may be used as an index in $\mathbb{Z}$ ([[lem-nat-embeds-int]]).

## Proof

**Proof technique:** constructive.

1.1 For $k \in \mathbb{N}$ put $M_k := \{\, N \in \mathbb{N} : |f^{(n)} - f^{(m)}| < t^{-(k+1)} \text{ for all } n, m \ge N \,\}$. Since $t^{-(k+1)} > 0_K$ by [L3] and the sequence is Cauchy, $M_k \ne \varnothing$ by [L4]; let $N_k := \min M_k$, which exists by [L5]. [given, L3, L4, L5, construct]

2.1 For every $k \in \mathbb{N}$, all $n, m \ge N_k$ and every $j \le k$ one has $f^{(n)}(j) = f^{(m)}(j)$: by [step 1.1] $|f^{(n)} - f^{(m)}| < t^{-(k+1)}$, so [L3] gives $(f^{(n)} - f^{(m)})(j) = 0$ for every $j < k+1$, that is for every $j \le k$, and $(f^{(n)} - f^{(m)})(j) = f^{(n)}(j) - f^{(m)}(j)$ by [L2]. [step 1.1, L2, L3, L6]

2.2 $N_a \le N_b$ whenever $a \le b$ in $\mathbb{N}$: for consecutive indices, $t^{-(k+2)} < t^{-(k+1)}$ by [L3], so any $N$ witnessing membership in $M_{k+1}$ also witnesses membership in $M_k$ by transitivity of the order [L2]; hence $M_{k+1} \subseteq M_k$ and $N_k = \min M_k \le \min M_{k+1} = N_{k+1}$. The general case follows by induction on $b$ [L6]. [step 1.1, L2, L3, L6]

2.3 Define $\kappa : \mathbb{Z} \to \mathbb{N}$ by $\kappa(j) := j$ for $j \ge 0$ and $\kappa(j) := 0$ for $j < 0$, so that $j \le \kappa(j)$ for every $j \in \mathbb{Z}$; then define $L : \mathbb{Z} \to \mathbb{R}$ by $L(j) := f^{(N_{\kappa(j)})}(j)$. [step 1.1, L6, construct]

3.1 For every $j \in \mathbb{Z}$ and every $n \ge N_{\kappa(j)}$ one has $f^{(n)}(j) = L(j)$: apply [step 2.1] with $k = \kappa(j)$, which is legitimate since $j \le \kappa(j)$, to the two indices $n$ and $N_{\kappa(j)}$, both of which are $\ge N_{\kappa(j)}$. [step 2.1, step 2.3, L6]

3.2 $L \in K$. The series $f^{(N_0)}$ lies in $K$, so by [L1] there is $m_0 \in \mathbb{Z}$ with $f^{(N_0)}(j) = 0$ for every $j < m_0$. If $j < m_0$ and $j < 0$ then $\kappa(j) = 0$, so $L(j) = f^{(N_0)}(j) = 0$; hence $L(j) = 0$ for every $j$ below both $m_0$ and $0$, the support of $L$ is bounded below, and $L \in K$. [step 2.3, L1]

4.1 For every $k \in \mathbb{N}$, every $n \ge N_k$ and every $j \le k$ one has $f^{(n)}(j) = L(j)$: if $j \ge 0$ then $\kappa(j) = j \le k$, and if $j < 0$ then $\kappa(j) = 0 \le k$, so in both cases $N_{\kappa(j)} \le N_k \le n$ by [step 2.2] and [step 3.1] applies. [step 2.2, step 3.1, L6]

5.1 $(f^{(n)})$ converges to $L$ in $K$. Let $\varepsilon > 0$ in $K$. By [L3] — this is the countable-cofinality step, and it is the only place where anything special about $K$ is used — there is $k \in \mathbb{N}$ with $t^{-k} < \varepsilon$. Put $N := N_k$. For every $n \ge N$, [step 4.1] and [L2] give $(f^{(n)} - L)(j) = f^{(n)}(j) - L(j) = 0$ for every $j \le k$, so $|f^{(n)} - L| < t^{-k}$ by [L3] and therefore $|f^{(n)} - L| < \varepsilon$ by transitivity [L2]. As $\varepsilon$ was arbitrary, this is convergence in the sense of [L4]. [step 3.2, step 4.1, L2, L3, L4]

6.1 The sequence $(f^{(n)})$ was an arbitrary Cauchy sequence in $K$, and [step 3.2] and [step 5.1] produce an element $L \in K$ to which it converges; so every Cauchy sequence in $K$ converges in $K$. [step 3.2, step 5.1, discharge-construct] ∎

## Remarks

- **What makes the argument work, in one sentence.** The value group of $K$ is $\mathbb{Z}$, whose cofinality is countable, so the continuum of thresholds $\varepsilon > 0$ in the Cauchy condition collapses to the countable family $t^{-k}$, $k \in \mathbb{N}$ ([[lem-laurent-non-archimedean]], clause 3), and a sequence indexed by $\mathbb{N}$ can meet all of them. A proof that skipped this step would be proving nothing: it is exactly the point at which the countability of the index set $\mathbb{N}$ is matched to the structure of the field.

- **Support-boundedness of the limit is a separate obligation, and it is discharged from a single threshold.** Knowing that each coefficient $f^{(n)}(j)$ is eventually constant gives a function $\mathbb{Z} \to \mathbb{R}$ and nothing more; there is no reason *a priori* why its support should be bounded below. What supplies that is [step 3.2]: the threshold $k = 0$ freezes *all* indices $j \le 0$ simultaneously from the single stage $N_0$ onward, so $L$ agrees with the one series $f^{(N_0)}$ on the whole negative half-line and inherits its lower bound.

- **No choice is used.** The stage $N_k$ is not chosen: it is defined as the least element of $M_k$, which exists by the well-ordering principle ([[thm-well-ordering-principle]]). This matters because the construction makes countably many selections, and a version of it that said "pick some $N_k$" would be an appeal to countable choice for no reason.

- **This is Cauchy completeness and nothing more.** $K$ is sequentially Cauchy complete and at the same time lacks the least-upper-bound property ([[cor-laurent-not-lub-complete]]); the two are not the same condition, and in a non-Archimedean field they come apart. Nor does this theorem give the unrestricted nested interval property: see [[cor-laurent-nested-intervals]] for what it does give, and [[cex-laurent-nested-intervals-empty]] for what it does not.
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

### `thm-recursion`

````markdown
---
id: thm-recursion
kind: theorem
title: "The recursion theorem"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-peano-system, def-natural-numbers, thm-induction-principle]
aliases: [dedekind-recursion, recursion-theorem]
landmark: true
short: "$g(0)=a,\\ g(\\sigma n)=f(g n)$ unique"
proof_strategy: direct
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
    - title: "T. Tao, Analysis I, 3rd ed., §2.1-2.3 (Peano axioms, recursion, arithmetic)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Peano axioms (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Peano_axioms"
    - title: "W. Aitken, MATH 378 Ch. 1: The Peano Axioms (CSU San Marcos)"
      url: "https://public.csusm.edu/aitken_html/m378_S2016/Ch1PeanoAxioms.pdf"
    - title: "B. Kaya, MATH 320 Set Theory (METU lecture notes)"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
pipeline_run: null
---

## Statement

Let $(N,0,\sigma)$ be a Peano system ([[def-peano-system]]), in particular the natural numbers $\mathbb{N}$ ([[def-natural-numbers]]). For any set $A$, any element $a \in A$, and any function $f : A \to A$, there is a unique function $g : N \to A$ such that $g(0) = a$ and $g(\sigma(n)) = f(g(n))$ for all $n \in N$.

## Facts & Assumptions

**Given:** a Peano system $(N,0,\sigma)$, a set $A$, an element $a \in A$, and a function $f : A \to A$. Call a set $R \subseteq N \times A$ **closed** when $(0,a) \in R$ and, for all $n \in N$ and $x \in A$, $(n,x) \in R$ implies $(\sigma(n),f(x)) \in R$.

[L1] Induction holds in $N$: any $S \subseteq N$ with $0 \in S$ that is closed under $\sigma$ equals $N$ (axiom P3, [[thm-induction-principle]]).

[L2] In a Peano system $\sigma(n) \ne 0$ (P1) and $\sigma$ is injective (P2) ([[def-peano-system]]).

## Proof

**Proof technique:** direct.

1.1 The set $N \times A$ is closed, so the collection of closed subsets of $N \times A$ is nonempty; let $g := \bigcap \{ R : R \subseteq N \times A \text{ closed} \}$, which is itself closed, since if every closed $R$ contains $(0,a)$ then so does $g$, and if $(n,x) \in g$ then $(n,x) \in R$ for each closed $R$, whence $(\sigma(n),f(x)) \in R$ for each such $R$, so $(\sigma(n),f(x)) \in g$. [given, construct]

2.1 Let $D = \{ n \in N : \exists x \in A,\ (n,x) \in g \}$; then $0 \in D$ since $(0,a) \in g$, and if $n \in D$ with $(n,x) \in g$ then $(\sigma(n),f(x)) \in g$ by closure, so $\sigma(n) \in D$; by induction $D = N$, hence $g$ relates every $n$ to at least one $x$. [L1, step 1.1]

2.2 Suppose $(0,b) \in g$ with $b \ne a$; then $g \setminus \{(0,b)\}$ still contains $(0,a)$ and is closed, since any generated pair $(\sigma(m),f(z))$ has $\sigma(m) \ne 0$ by P1 and so is never equal to $(0,b)$; this contradicts the minimality of $g$, so $a$ is the unique second coordinate paired with $0$. [L2, step 1.1]

3.1 Let $U = \{ n \in N : \text{there is exactly one } x \text{ with } (n,x) \in g \}$; then $0 \in U$ by step 2.2. [step 2.2]

4.1 Assume $n \in U$ with unique value $x$, so $(n,x) \in g$ and $(\sigma(n),f(x)) \in g$ by closure; if $(\sigma(n),c) \in g$ with $c \ne f(x)$, then $g \setminus \{(\sigma(n),c)\}$ contains $(0,a)$ because $\sigma(n) \ne 0$, and is closed, because a generated pair $(\sigma(m),f(z))$ with $(m,z) \in g \setminus \{(\sigma(n),c)\}$ can equal $(\sigma(n),c)$ only if $\sigma(m) = \sigma(n)$ and $f(z) = c$, but $\sigma(m) = \sigma(n)$ forces $m = n$ by injectivity, then $z = x$ by uniqueness at $n$, giving $f(z) = f(x) \ne c$, a contradiction; hence $g \setminus \{(\sigma(n),c)\}$ is closed and smaller than $g$, contradicting minimality, so $f(x)$ is the unique value at $\sigma(n)$ and $\sigma(n) \in U$. [L2, step 3.1, step 1.1]

5.1 By induction $U = N$, so together with the totality from step 2.1 the relation $g$ is a function $g : N \to A$; it satisfies $g(0) = a$, and closure with uniqueness gives $g(\sigma(n)) = f(g(n))$ for all $n$. [L1, step 2.1, step 3.1, step 4.1]

6.1 If $h : N \to A$ also satisfies $h(0) = a$ and $h(\sigma(n)) = f(h(n))$, then the set $\{ n : g(n) = h(n) \}$ contains $0$ and is closed under $\sigma$, since $g(n) = h(n)$ implies $g(\sigma(n)) = f(g(n)) = f(h(n)) = h(\sigma(n))$, so by induction it equals $N$, that is $h = g$. [L1, step 5.1] ∎
````

### `thm-well-ordering-principle`

````markdown
---
id: thm-well-ordering-principle
kind: theorem
title: "The well-ordering principle"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-natural-numbers, def-nat-order, thm-induction-principle, lem-nat-discrete, lem-nat-trichotomy, thm-omega-is-peano-system, lem-nat-add-successor-left, lem-nat-add-identity]
aliases: [well-ordering]
landmark: true
short: "every nonempty $S\\subseteq\\mathbb N$ has a least element"
proof_strategy: contradiction
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
    - title: "Well-ordering principle (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Well-ordering_principle"
    - title: "Mathematical induction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mathematical_induction"
    - title: "B. Kaya, MATH 320 Set Theory (METU lecture notes)"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
pipeline_run: null
---

## Statement

Every nonempty subset $S \subseteq \mathbb{N}$ has a least element: there is $\ell \in S$ with $\ell \le s$ for all $s \in S$.

## Facts & Assumptions

**Given:** A nonempty subset $S \subseteq \mathbb{N}$. Define $T = \{\, n \in \mathbb{N} : \text{every } m \text{ with } m \le n \text{ satisfies } m \notin S \,\}$ (informally, no element of $S$ is $\le n$).

[L1] Induction principle: a subset of $\mathbb{N}$ that contains $0$ and is closed under $\sigma$ equals $\mathbb{N}$ ([[thm-induction-principle]]).

[L2] $m < n \iff \sigma(m) \le n$; consequently no $k$ satisfies $n < k < \sigma(n)$ ([[lem-nat-discrete]]).

[L3] Exactly one of $s < n$, $s = n$, $n < s$ holds ([[lem-nat-trichotomy]]); and $n < s \iff \sigma(n) \le s$ ([[lem-nat-discrete]]).

[L4] $\sigma$ is injective (Peano axiom P2) ([[thm-omega-is-peano-system]]).

[L5] $\sigma(a) + i = \sigma(a + i)$ for all $a, i$ (the left successor law, [[lem-nat-add-successor-left]]).

[L6] $0 + k = k$ for all $k$ ([[lem-nat-add-identity]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose $S$ is nonempty but has no least element. [assume-contra]

1.2 If $m < \sigma(n)$ then $m \le n$: by [L2] applied to $m$ and $\sigma(n)$ we get $\sigma(m) \le \sigma(n)$, say $\sigma(m) + i = \sigma(n)$; then $\sigma(m + i) = \sigma(m) + i = \sigma(n)$ [L5], so $m + i = n$ by injectivity [L4], hence $m \le n$. [L2, L4, L5]

2.1 First, $0 \in T$: if $0 \in S$ then $0 \le s$ for all $s \in S$, since $0 + s = s$ [L6], making $0$ a least element, contrary to the assumption; hence $0 \notin S$; moreover $m \le 0$ forces $m = 0$, because $m \ne 0$ would give $0 < m$ (as $0 + m = m$ [L6] with $m \ne 0$) while $m \le 0$ gives $m < 0$, and [L3] admits at most one of these; so every $m \le 0$ lies outside $S$. [step 1.1, L3, L6, given]

2.2 Next, $T$ is closed under $\sigma$: assume $n \in T$; if $\sigma(n) \in S$ then no $s \in S$ satisfies $s < \sigma(n)$ (else $s \le n$ by step 1.2, so $s \notin S$ because $n \in T$, a contradiction), hence $\sigma(n) \le s$ for all $s \in S$ by [L3], making $\sigma(n)$ a least element, contrary to the assumption; therefore $\sigma(n) \notin S$, and any $m$ with $m \le \sigma(n)$ satisfies $m = \sigma(n)$ or $m \ne \sigma(n)$; in the second case $m \le \sigma(n)$ together with $m \ne \sigma(n)$ gives $m < \sigma(n)$ by the definition of the strict order, hence $m \le n$ by step 1.2 and $m \notin S$ because $n \in T$, while in the first case $m = \sigma(n) \notin S$; so every $m \le \sigma(n)$ lies outside $S$, giving $\sigma(n) \in T$. [step 1.1, step 1.2, L3]

3.1 By the induction principle [L1], from $0 \in T$ and closure under $\sigma$, $T = \mathbb{N}$; then for every $n$, taking $m = n \le n$ shows $n \notin S$, so $S = \varnothing$, contradicting nonemptiness; therefore $S$ has a least element. [step 2.1, step 2.2, L1, discharge-contradiction] ∎
````

