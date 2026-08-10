# Audit proof-refuter brief — Wave 11, A6

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30).** You are read-only and
> tool-less. Do not ask for shell or edit permission. Everything available to
> you is reproduced in the dispatch task.

You are **DeepSeek V4 Pro** at the API's maximum reasoning setting, serving as
an independent adversarial proof-refuter. Return evidence only; Audit-Alpha
alone adjudicates and edits.

## Binding triage

- **Non-negotiable:** mathematical accuracy, logical validity, correct citation.
- **Explicitly acceptable, spend no effort:** minor citational quirks; logical
  gaps a competent reader closes within 30 seconds; other non-fatal quirks;
  imperfection at the level of the letter.

Read the target's title, complete public statement, Facts & Assumptions, every
numbered proof/refutation/verification step, and Remarks. Try to falsify every
load-bearing inference. Before alleging that a cited dependency is too weak,
compare the exact current supplied dependency: domain, hypotheses, quantifiers,
direction, conclusion, boundary cases, and conventions. Check biconditionals,
existence/uniqueness, recursion/induction, limits, index shifts, empty/zero/one/
endpoint/degenerate cases, hidden division, hidden choice, and false Remarks.
For an `ai-generated` Statement or counterexample, actively search for a
counterexample to the public claim or a failure in the witness. A false public
claim, invalid proof, missing necessary hypothesis, circularity, or materially
inaccurate load-bearing citation is fatal; a quickly closable gap is nonfatal.

Return no more than 450 words, exactly in this shape:

```text
VERDICT: CLEAN | DEFECTS
```

For each defect:

```text
FINDING 1
  location: [exact section/fact/step]
  severity: fatal | nonfatal
  claim:    [exact assertion]
  evidence: [counterexample, invalid inference, or exact source mismatch]
```

Always end with:

```text
BOUNDARY: [specific boundary/counterexample checks and disposition]
SOURCES:  [confirm every supplied cited item used by the target was inspected]
CHECKED:  [confirm title, public claim, every numbered step, and Remarks]
```


---

# This dispatch

## Selection reasons

- critical risk (9): 10 declared dependencies; 7 cited facts; boundary-sensitive language; induction, recursion, or minimality

## Target item — `thm-general-leibniz-rule`

Normalized current SHA-256: `21e4fe1e71d08d99bfa19a617036eca0bb28bd4a3758afde4dc161491251fc67`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: thm-general-leibniz-rule
kind: theorem
title: "The general Leibniz rule for the $n$-th derivative of a product"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-higher-derivatives-and-smoothness, thm-algebra-of-derivatives, def-binomial-coefficient, thm-pascals-rule, def-factorial-and-falling-factorial, def-finite-sum, lem-finite-sum-laws, def-canonical-natural, lem-of-naturals-positive, thm-induction-principle]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, Taylor's theorem and related calculus"
      url: "https://www.jirka.org/ra/html/sec_taylor.html"
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 lecture notes"
      url: "https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/resources/lecture-notes/"
    - title: "UTSA Mathematics, Differentiation rules"
      url: "https://mathresearch.utsa.edu/wiki/index.php?title=Differentiation_Rule"
    - title: "University of Chicago MATH 395 notes"
      url: "https://math.uchicago.edu/~alephnil/notes/MATH-395-notes.pdf"
pipeline_run: null
---

## Statement

If $n\in\mathbb N$ and $f,g$ are $n$-times differentiable on an interval $I$, then
$$(fg)^{(n)}=\sum_{j=0}^{n}\iota\!\binom nj\,f^{(j)}g^{(n-j)}.$$

## Facts & Assumptions

**Given:** $n\in\mathbb N$ and functions $f,g$ with all derivatives through order $n$.

[L1] Products satisfy $(uv)'=u'v+uv'$ ([[thm-algebra-of-derivatives]]).

[L2] Pascal's rule says $\binom{k+1}{j}=\binom{k}{j}+\binom{k}{j-1}$, with the boundary values from [[def-binomial-coefficient]] ([[thm-pascals-rule]]).

[L3] Finite sums split and reindex as stated in [[def-finite-sum]] and [[lem-finite-sum-laws]], and the canonical embedding $\iota$ preserves natural addition ([[def-canonical-natural]], [[lem-of-naturals-positive]]).

## Proof

**Proof technique:** induction.

1.1 For $n=0$, the displayed sum is $\iota\binom00 f^{(0)}g^{(0)}=fg=(fg)^{(0)}$.  [base, L2]

1.2 Assume the formula holds at an index $k$, and assume $f,g$ have derivatives through order $k+1$.  [ih, assume-hyp]

2.1 Differentiating the finite sum gives $(fg)^{(k+1)}=\sum_{j=0}^{k}\iota\binom kj\bigl(f^{(j+1)}g^{(k-j)}+f^{(j)}g^{(k-j+1)}\bigr)$.  [step 1.2, L1, L3]

3.1 Shift $j+1$ in the first sum, retain $j$ in the second, and combine the two interior coefficients by Pascal's rule; the two boundary coefficients are $1$. The result is $(fg)^{(k+1)}=\sum_{j=0}^{k+1}\iota\binom{k+1}{j}f^{(j)}g^{(k+1-j)}$.  [step 2.1, L2, L3, algebra]

4.1 Thus the formula holds for every $n\in\mathbb N$.  [step 1.1, step 3.1, discharge-induction] ∎
````

## Wave 11 provenance row

```json
{
  "id": "thm-general-leibniz-rule",
  "statement": "literature-derived",
  "proof": "ai-generated",
  "evidence": "exact-source",
  "urls": [
    "https://mathresearch.utsa.edu/wiki/index.php?title=Differentiation_Rule",
    "https://math.uchicago.edu/~alephnil/notes/MATH-395-notes.pdf"
  ],
  "rationale": "The sources state the nth product rule with the same binomial sum and differentiability hypothesis. The repository changes notation only. Its induction through Pascal's rule was audited as a local proof rather than an identifiable transcription of either source proof.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

## Exact-current proof contract

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "thm-algebra-of-derivatives",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$, let $c \\in A$ be a limit point of $A$\n([[def-limit-point-r]]), let $f, g : A \\to \\mathbb{R}$ be differentiable at $c$\n([[def-derivative]]) and let $\\alpha \\in \\mathbb{R}$. Then:\n\n1. $f + g$ is differentiable at $c$ and $(f+g)'(c) = f'(c) + g'(c)$;\n2. $\\alpha f$ is differentiable at $c$ and $(\\alpha f)'(c) = \\alpha f'(c)$;\n3. $fg$ is differentiable at $c$ and $(fg)'(c) = f'(c)g(c) + f(c)g'(c)$;\n4. if $g(c) \\ne 0$ then, writing $A_0 := \\{\\, x \\in A : g(x) \\ne 0 \\,\\}$, the\n   point $c$ lies in $A_0$ and is a limit point of $A_0$, the quotient\n   $(f/g)|_{A_0} : A_0 \\to \\mathbb{R}$, $x \\mapsto f(x)/g(x)$, is differentiable\n   at $c$ as a function on $A_0$, and\n   $$\\bigl((f/g)|_{A_0}\\bigr)'(c) \\;=\\; \\frac{f'(c)\\,g(c) - f(c)\\,g'(c)}{g(c)^{2}} .$$\n\nEach claim asserts two things: that the derivative on the left exists, and that\nit has the stated value. Both are proved.\n\n**Why claim 4 is stated on $A_0$.** The function $f/g$ is not defined where $g$\nvanishes, and $g$ may vanish at points of $A$ far from $c$; restricting to $A_0$\nis forced. That the restriction still has $c$ as a limit point, so that a\nderivative there means anything at all, is not free either, and it is the last\nclaim of [[lem-sign-preservation-near-a-limit]] applied to $g$. The hypothesis\nis $g(c) \\ne 0$, not \"$g$ vanishes nowhere\".\n\n**Everything is proved through\n[[thm-caratheodory-characterisation]].** No difference quotient is estimated and\nno limit theorem beyond continuity is used, so no choice principle is spent.\nThe four identities are four algebraic rearrangements of an increment, each\nfollowed by a reading of [[thm-algebra-of-continuous-functions]].",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-binomial-coefficient",
      "source_section": "Definition",
      "quote": "For a finite set $A$ and $k \\in \\mathbb{N}$ put\n\n$$[A]^{k} := \\{\\, S \\subseteq A \\ :\\ \\lvert S\\rvert = k \\,\\},$$\n\nthe set of $k$-element subsets of $A$. Every $S \\subseteq A$ is finite\n([[thm-subset-of-a-finite-set]]), so the condition $\\lvert S\\rvert = k$ makes\nsense for every subset.\n\n**$[A]^{k}$ is finite.** It is a subset of $\\mathcal{P}(A)$, which is finite by\n[[cor-cardinality-of-the-power-set]], so [[thm-subset-of-a-finite-set]] applies.\n\n**$\\lvert [A]^{k}\\rvert$ depends only on $\\lvert A\\rvert$.** Let $h : A \\to A'$ be\na bijection of finite sets. The direct image map $S \\mapsto h[S]$ carries\n$[A]^{k}$ into $[A']^{k}$, because $h$ restricted to $S$ is a bijection of $S$\nonto $h[S]$ and so $\\lvert h[S]\\rvert = \\lvert S\\rvert = k$ by the transport\nclause of [[def-finite-cardinality]]; the map $T \\mapsto h^{-1}[T]$ is its\ntwo-sided inverse, since $h^{-1}[h[S]] = S$ and $h[h^{-1}[T]] = T$ for a\nbijection $h$. So $[A]^{k} \\approx [A']^{k}$ and the two have the same\ncardinality.\n\n**Definition.** For $n, k \\in \\mathbb{N}$ set\n\n$$\\binom{n}{k} := \\big\\lvert\\, [n]^{k} \\,\\big\\rvert \\in \\mathbb{N},$$\n\nthe **binomial coefficient**. By the previous paragraph and $\\lvert n\\rvert = n$,\n\n$$\\big\\lvert [A]^{k}\\big\\rvert = \\binom{\\lvert A\\rvert}{k} \\qquad \\text{for every finite } A .$$\n\n**$\\binom{n}{k}$ is a count, so it is a natural number by construction.** It is\n*not* defined as $n!/(k!\\,(n-k)!)$: that expression involves a division, hence\nlives in $\\mathbb{R}$, and the assertion that its value is a natural number is a\ntheorem, proved in [[thm-binomial-closed-formula]]. Defining the coefficient as a\ncount makes integrality free and leaves the closed formula something to prove.\n\n**Boundary values, read off the definition and not stipulated.**\n\n- $\\binom{n}{0} = 1$ **for every $n$, including $n = 0$**: the subsets of $n$ of\n  cardinality $0$ are exactly the subsets equal to $\\varnothing$\n  ([[def-finite-cardinality]], clause (b)), so $[n]^{0} = \\{\\varnothing\\}$, a\n  one-element set. No empty-product convention is involved.\n- $\\binom{n}{n} = 1$: if $S \\subseteq n$ has $\\lvert S\\rvert = n = \\lvert n\\rvert$\n  then $S = n$ by clause 3 of [[thm-subset-of-a-finite-set]], so\n  $[n]^{n} = \\{n\\}$.\n- $\\binom{n}{k} = 0$ for $k > n$: a subset $S \\subseteq n$ has\n  $\\lvert S\\rvert \\le n$ by clause 2 of [[thm-subset-of-a-finite-set]], so\n  $\\lvert S\\rvert = k > n$ is impossible and $[n]^{k} = \\varnothing$\n  ([[lem-nat-trichotomy]]).\n- $\\binom{n}{1} = n$: a subset of cardinality $1$ is $\\{x\\}$ for exactly one\n  $x \\in n$, since $\\lvert S\\rvert = 1$ means $S \\approx \\{0\\}$; so\n  $S \\mapsto$ its unique element is a bijection $[n]^{1} \\to n$.\n- $\\binom{0}{0} = 1$ and $\\binom{0}{k} = 0$ for $k \\ge 1$, both instances of the\n  above.",
      "uses": [
        "1.1",
        "3.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-pascals-rule",
      "source_section": "Statement",
      "quote": "For all $n, k \\in \\mathbb{N}$:\n\n1. **Pascal's rule.**\n   $\\displaystyle\\binom{n+1}{k+1} = \\binom{n}{k} + \\binom{n}{k+1}$, with **no**\n   restriction relating $k$ to $n$;\n2. **The hockey-stick identity.**\n   $\\displaystyle\\sum_{i<n+1}\\binom{i}{k} = \\binom{n+1}{k+1}$, the sum being the\n   $\\mathbb{N}$-valued finite sum of [[def-nat-finite-sum-and-product]] over\n   $i = 0, 1, \\dots, n$.\n\n```tikz\n\\begin{tikzpicture}[x=1cm,y=1cm]\n  \\node at (0,3.8) {$|A|=n+1$};\n  \\node[draw,rounded corners] (all) at (0,3) {$[A]^{k+1}$, with $A'=A\\setminus\\{a\\}$};\n  \\node[draw,rounded corners] (yes) at (-3,1.75) {$P=\\{S:a\\in S\\}$};\n  \\node[draw,rounded corners] (no) at (3,1.75) {$Q=\\{S:a\\notin S\\}$};\n  \\node[draw,rounded corners] (left) at (-3,0.35) {$[A']^k$};\n  \\node[draw,rounded corners] (right) at (3,0.35) {$[A']^{k+1}$};\n  \\draw[->] (all) -- (yes);\n  \\draw[->] (all) -- (no);\n  \\draw[->] (yes) -- node[left] {$S\\mapsto S\\setminus\\{a\\}$} (left);\n  \\draw[->] (no) -- node[right] {$S\\mapsto S$} (right);\n  \\node at (0,-0.75) {${n+1\\choose k+1}={n\\choose k}+{n\\choose k+1}$};\n\\end{tikzpicture}\n```",
      "uses": [
        "1.1",
        "3.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-finite-sum",
      "source_section": "Definition",
      "quote": "Throughout this page $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]]), in particular an ordered field\n([[def-ordered-field]]) and a field ([[def-field]]), and $\\mathbb{N}$ is the set\nof natural numbers ([[def-natural-numbers]]) with successor $\\sigma(n) = n + 1$\n([[def-nat-addition]]).\n\nLet $a : \\mathbb{N} \\to \\mathbb{R}$ be a sequence of reals, written $a_k$ for\n$a(k)$. **Finite sums and finite products of $a$ are defined by recursion on the\nupper index**, which is legitimate because of the recursion theorem\n([[thm-recursion]]). That theorem produces a function of one variable, so the\nrunning index has to be carried along inside the value: applying it to the set\n$A = \\mathbb{N} \\times \\mathbb{R}$, the starting element $(0, 0)$ and the function\n$f(n, s) = (\\sigma(n),\\, s + a_n)$ gives a unique\n$g : \\mathbb{N} \\to \\mathbb{N} \\times \\mathbb{R}$ with\n\n$$g(0) = (0, 0), \\qquad g(\\sigma(n)) = f(g(n)) \\quad (n \\in \\mathbb{N}).$$\n\nWrite $g(n) = \\big(\\pi_1(g(n)),\\, \\Sigma_n\\big)$ for its two coordinates.\n\n**The first coordinate is the index itself, and that is a small induction, not an\nobservation** ([[thm-induction-principle]]). Indeed $\\pi_1(g(0)) = 0$; and if\n$\\pi_1(g(n)) = n$, then\n$g(\\sigma(n)) = f\\big(\\pi_1(g(n)), \\Sigma_n\\big) = \\big(\\sigma(\\pi_1(g(n))),\\, \\Sigma_n + a_{\\pi_1(g(n))}\\big) = \\big(\\sigma(n),\\, \\Sigma_n + a_n\\big)$,\nso $\\pi_1(g(\\sigma(n))) = \\sigma(n)$. By induction $\\pi_1(g(n)) = n$ for every\n$n \\in \\mathbb{N}$. Only now may the second coordinate of the two displayed\nclauses be read off, and doing so gives\n\n$$\\Sigma_0 = 0, \\qquad \\Sigma_{\\sigma(n)} = \\Sigma_n + a_n .$$\n\n$\\Sigma$ is moreover the **unique** function $\\mathbb{N} \\to \\mathbb{R}$ with those\ntwo properties: if $\\Sigma'$ also has them then $n \\mapsto (n, \\Sigma'_n)$ satisfies\nthe two clauses defining $g$, hence equals $g$ by the uniqueness clause of\n[[thm-recursion]], so $\\Sigma' = \\Sigma$.\n\nWe write $\\sum_{k < n} a_k := \\Sigma_n$. The same construction with starting\nelement $(0, 1)$ and $f(n, p) = (\\sigma(n),\\, p \\cdot a_n)$, with the same\ninduction on the first coordinate and the same uniqueness argument, gives the\nunique $\\Pi : \\mathbb{N} \\to \\mathbb{R}$ with\n\n$$\\Pi_0 = 1, \\qquad \\Pi_{\\sigma(n)} = \\Pi_n \\cdot a_n ,$$\n\nand we write $\\prod_{k < n} a_k := \\Pi_n$.\n\n**Notation.** For $m, n \\in \\mathbb{N}$ we abbreviate\n\n$$\\sum_{k=0}^{n} a_k := \\sum_{k < n+1} a_k, \\qquad \\prod_{k=0}^{n} a_k := \\prod_{k < n+1} a_k,$$\n\nand, for a general lower index $m$ with $m \\le n + 1$, writing $d = n + 1 - m$\nfor the number of terms,\n\n$$\\sum_{k=m}^{n} a_k := \\sum_{j < d} a_{m+j}, \\qquad \\prod_{k=m}^{n} a_k := \\prod_{j < d} a_{m+j} .$$\n\nWhen $m = n + 1$ we have $d = 0$ and the sum is **empty**, with value $0$, while\nthe empty product has value $1$. In the same spirit $\\sum_{k=0}^{-1} a_k$ is\nnotation for the empty sum $\\Sigma_0 = 0$ and $\\prod_{k=0}^{-1} a_k$ for the\nempty product $\\Pi_0 = 1$; the index $-1$ never occurs as an element of\n$\\mathbb{N}$ and is only a way of writing \"no terms\".\n\nOnly finitely many values of $a$ enter $\\sum_{k<n} a_k$, so the notation\n$\\sum_{k<n} a_k$ and $\\prod_{k<n} a_k$ is also used for a list\n$a_0, \\dots, a_{n-1}$ of reals given without reference to any extension of the\nlist to all of $\\mathbb{N}$: extend the list by $a_k = 0$ (respectively\n$a_k = 1$) for $k \\ge n$ and apply the definition above.",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-finite-sum-laws",
      "source_section": "Statement",
      "quote": "Let $a, b, c : \\mathbb{N} \\to \\mathbb{R}$ be sequences of reals, let\n$\\lambda \\in \\mathbb{R}$, and let $m, n \\in \\mathbb{N}$, with finite sums and\nfinite products as in [[def-finite-sum]]. Then:\n\n1. **Additivity.** $\\displaystyle\\sum_{k<n}(a_k + b_k) = \\sum_{k<n} a_k + \\sum_{k<n} b_k$.\n2. **Scaling.** $\\displaystyle\\sum_{k<n} \\lambda a_k = \\lambda \\sum_{k<n} a_k$; in particular $\\displaystyle\\sum_{k<n} \\lambda = n\\lambda$, where $n$ denotes the canonical natural $\\iota(n) \\in \\mathbb{R}$ ([[lem-of-q-embeds]], [[lem-of-naturals-positive]]).\n3. **Splitting.** If $m \\le n$ then $\\displaystyle\\sum_{k<n} a_k = \\sum_{k<m} a_k + \\sum_{k=m}^{n-1} a_k$, and $\\displaystyle\\prod_{k<n} a_k = \\Big(\\prod_{k<m} a_k\\Big)\\Big(\\prod_{k=m}^{n-1} a_k\\Big)$.\n4. **Monotonicity.** If $a_k \\le b_k$ for all $k < n$ then $\\displaystyle\\sum_{k<n} a_k \\le \\sum_{k<n} b_k$. In particular, if $a_k \\ge 0$ for all $k < n$ then $\\sum_{k<n} a_k \\ge 0$, every single term satisfies $a_j \\le \\sum_{k<n} a_k$ for $j < n$, and $\\sum_{k<n} a_k = 0$ forces $a_k = 0$ for every $k < n$.\n5. **Telescoping.** $\\displaystyle\\sum_{k<n}\\big(c_{k+1} - c_k\\big) = c_n - c_0$.\n6. **Products.** $\\displaystyle\\prod_{k<n}(a_k b_k) = \\Big(\\prod_{k<n} a_k\\Big)\\Big(\\prod_{k<n} b_k\\Big)$; if $a_k \\ge 0$ for all $k < n$ then $\\prod_{k<n} a_k \\ge 0$, and if $a_k > 0$ for all $k < n$ then $\\prod_{k<n} a_k > 0$.",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-canonical-natural",
      "source_section": "Definition",
      "quote": "Let $F$ be a field ([[def-field]]) with additive identity $0_F$ and\nmultiplicative identity $1_F$. Define\n$\\iota : \\mathbb{N} \\to F$ by recursion on $\\mathbb{N}$\n([[def-natural-numbers]], [[thm-recursion]]):\n\n$$\\iota(0) \\;:=\\; 0_F, \\qquad \\iota(n+1) \\;:=\\; \\iota(n) + 1_F .$$\n\n$\\iota(n)$ is the **canonical natural** of $n$ in $F$. It is also written\n$n \\cdot 1_F$, and for $n \\ge 1$ it is $1_F$ added to itself $n$ times.\n\n**Why the notation is needed at all.** A natural number in this library is a von\nNeumann natural, that is a set ([[def-natural-numbers]]), and a set is not an\nelement of $F$. So $1/n$, $n^{\\alpha}$ and $x/n$ are not expressions of $F$ when\n$n$ is a natural: what they mean is $1/\\iota(n)$, $\\iota(n)^{\\alpha}$ and\n$x/\\iota(n)$. The map $\\iota$ is what carries a counting number into the field,\nand writing it is the whole reason a reader meets $1/\\iota(k+1)$ where an\ninformal text would write $1/(k+1)$.",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-of-naturals-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field, with field structure as in [[def-field]], and for\n$n \\ge 1$ let $n \\cdot 1_F$ denote the canonical natural number\n$\\underbrace{1_F + \\cdots + 1_F}_{n}$, defined recursively by $1 \\cdot 1_F = 1_F$\nand $(n+1) \\cdot 1_F = n \\cdot 1_F + 1_F$. Then for every $n \\ge 1$:\n\n- $n \\cdot 1_F > 0$ and $(n+1) \\cdot 1_F > n \\cdot 1_F$;\n- the map $n \\mapsto n \\cdot 1_F$ is strictly increasing, hence injective, on $\\{1, 2, 3, \\dots\\}$;\n- $(m+n) \\cdot 1_F = m \\cdot 1_F + n \\cdot 1_F$ and $(mn) \\cdot 1_F = (m \\cdot 1_F)(n \\cdot 1_F)$ for all $m, n \\ge 1$.",
      "uses": [
        "2.1",
        "3.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "thm-general-leibniz-rule-step-1-1",
      "claim": "For $n=0$, the displayed sum is $\\iota\\binom00 f^{(0)}g^{(0)}=fg=(fg)^{(0)}$. [base, L2]",
      "step": "1.1",
      "inputs": [
        "base",
        "L2"
      ]
    },
    {
      "id": "thm-general-leibniz-rule-step-1-2",
      "claim": "Assume the formula holds at an index $k$, and assume $f,g$ have derivatives through order $k+1$. [ih, assume-hyp]",
      "step": "1.2",
      "inputs": [
        "ih",
        "assume-hyp"
      ]
    },
    {
      "id": "thm-general-leibniz-rule-step-2-1",
      "claim": "Differentiating the finite sum gives $(fg)^{(k+1)}=\\sum_{j=0}^{k}\\iota\\binom kj\\bigl(f^{(j+1)}g^{(k-j)}+f^{(j)}g^{(k-j+1)}\\bigr)$. [step 1.2, L1, L3]",
      "step": "2.1",
      "inputs": [
        "step 1.2",
        "L1",
        "L3"
      ]
    },
    {
      "id": "thm-general-leibniz-rule-step-3-1",
      "claim": "Shift $j+1$ in the first sum, retain $j$ in the second, and combine the two interior coefficients by Pascal's rule; the two boundary coefficients are $1$. The result is $(fg)^{(k+1)}=\\sum_{j=0}^{k+1}\\iota\\binom{k+1}{j}f^{(j)}g^{(k+1-j)}$. [step 2.1, L2, L3, algebra]",
      "step": "3.1",
      "inputs": [
        "step 2.1",
        "L2",
        "L3",
        "algebra"
      ]
    },
    {
      "id": "thm-general-leibniz-rule-step-4-1",
      "claim": "Thus the formula holds for every $n\\in\\mathbb N$. [step 1.1, step 3.1, discharge-induction] ∎",
      "step": "4.1",
      "inputs": [
        "step 1.1",
        "step 3.1",
        "discharge-induction"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "thm-general-leibniz-rule concerns stipulated functions and points; no empty family, empty sum, or empty choice domain changes its assertion."
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "thm-general-leibniz-rule has no counting, exponent, or value parameter whose zero case changes the proof."
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "thm-general-leibniz-rule has no counting, exponent, or unit parameter whose one case changes the proof."
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "thm-general-leibniz-rule has no interval-length or denominator parameter that may collapse degenerately."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "thm-general-leibniz-rule contains no interval-endpoint assertion requiring a separate endpoint case."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Step 1.1 establishes or explicitly fixes the object before the proof chooses or extremizes it."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The Statement of thm-general-leibniz-rule is not a biconditional, so it has no forward iff direction."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The Statement of thm-general-leibniz-rule is not a biconditional, so it has no reverse iff direction."
    }
  ],
  "finite_smoke": [],
  "risk_review": {
    "status": "pending",
    "reviewer": "Alpha",
    "notes": "Audit-Beta captured the published A2 contract; independent risk routing occurs after A3."
  }
}
```

## Generated audit-manifest relationships

```json
[
  {
    "source": "thm-general-leibniz-rule",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
    "target": "def-higher-derivatives-and-smoothness",
    "declared_target": "def-higher-derivatives-and-smoothness",
    "target_statement_provenance": "ai-altered",
    "targetPage": "darboux-lhopital-and-taylor",
    "targetBatch": "wave11-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-general-leibniz-rule",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
    "target": "thm-algebra-of-derivatives",
    "declared_target": "thm-algebra-of-derivatives",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-derivative-and-mean-value-theorems",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-general-leibniz-rule",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
    "target": "def-binomial-coefficient",
    "declared_target": "def-binomial-coefficient",
    "target_statement_provenance": "literature-derived",
    "targetPage": "finite-counting-and-binomial-coefficients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-general-leibniz-rule",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
    "target": "thm-pascals-rule",
    "declared_target": "thm-pascals-rule",
    "target_statement_provenance": "ai-altered",
    "targetPage": "finite-counting-and-binomial-coefficients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-general-leibniz-rule",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
    "target": "def-factorial-and-falling-factorial",
    "declared_target": "def-factorial-and-falling-factorial",
    "target_statement_provenance": "ai-altered",
    "targetPage": "finite-counting-and-binomial-coefficients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-general-leibniz-rule",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
    "target": "def-finite-sum",
    "declared_target": "def-finite-sum",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-general-leibniz-rule",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
    "target": "lem-finite-sum-laws",
    "declared_target": "lem-finite-sum-laws",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-general-leibniz-rule",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
    "target": "def-canonical-natural",
    "declared_target": "def-canonical-natural",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-general-leibniz-rule",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
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
    "source": "thm-general-leibniz-rule",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
    "target": "thm-induction-principle",
    "declared_target": "thm-induction-principle",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-the-natural-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Relevant current generated-risk rows

```json
[]
```

## Full exact-current text of every cited or declared item (10)

### `def-binomial-coefficient`

````markdown
---
id: def-binomial-coefficient
kind: definition
title: "The set $[A]^{k}$ of $k$-element subsets and the binomial coefficient $\\binom{n}{k} := \\lvert [n]^{k}\\rvert$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-cardinality, cor-cardinality-of-the-power-set, thm-subset-of-a-finite-set,
       def-injection-surjection-bijection, def-equinumerous, def-natural-numbers,
       def-nat-order, lem-nat-order-is-membership, lem-nat-trichotomy]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Binomial coefficient (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Binomial_coefficient"
    - title: "Combination (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Combination"
    - title: "R. Stanley, Enumerative Combinatorics, Vol. 1, Ch. 1"
      url: "https://en.wikipedia.org/wiki/Enumerative_Combinatorics"
pipeline_run: null
---

## Definition

For a finite set $A$ and $k \in \mathbb{N}$ put

$$[A]^{k} := \{\, S \subseteq A \ :\ \lvert S\rvert = k \,\},$$

the set of $k$-element subsets of $A$. Every $S \subseteq A$ is finite
([[thm-subset-of-a-finite-set]]), so the condition $\lvert S\rvert = k$ makes
sense for every subset.

**$[A]^{k}$ is finite.** It is a subset of $\mathcal{P}(A)$, which is finite by
[[cor-cardinality-of-the-power-set]], so [[thm-subset-of-a-finite-set]] applies.

**$\lvert [A]^{k}\rvert$ depends only on $\lvert A\rvert$.** Let $h : A \to A'$ be
a bijection of finite sets. The direct image map $S \mapsto h[S]$ carries
$[A]^{k}$ into $[A']^{k}$, because $h$ restricted to $S$ is a bijection of $S$
onto $h[S]$ and so $\lvert h[S]\rvert = \lvert S\rvert = k$ by the transport
clause of [[def-finite-cardinality]]; the map $T \mapsto h^{-1}[T]$ is its
two-sided inverse, since $h^{-1}[h[S]] = S$ and $h[h^{-1}[T]] = T$ for a
bijection $h$. So $[A]^{k} \approx [A']^{k}$ and the two have the same
cardinality.

**Definition.** For $n, k \in \mathbb{N}$ set

$$\binom{n}{k} := \big\lvert\, [n]^{k} \,\big\rvert \in \mathbb{N},$$

the **binomial coefficient**. By the previous paragraph and $\lvert n\rvert = n$,

$$\big\lvert [A]^{k}\big\rvert = \binom{\lvert A\rvert}{k} \qquad \text{for every finite } A .$$

**$\binom{n}{k}$ is a count, so it is a natural number by construction.** It is
*not* defined as $n!/(k!\,(n-k)!)$: that expression involves a division, hence
lives in $\mathbb{R}$, and the assertion that its value is a natural number is a
theorem, proved in [[thm-binomial-closed-formula]]. Defining the coefficient as a
count makes integrality free and leaves the closed formula something to prove.

**Boundary values, read off the definition and not stipulated.**

- $\binom{n}{0} = 1$ **for every $n$, including $n = 0$**: the subsets of $n$ of
  cardinality $0$ are exactly the subsets equal to $\varnothing$
  ([[def-finite-cardinality]], clause (b)), so $[n]^{0} = \{\varnothing\}$, a
  one-element set. No empty-product convention is involved.
- $\binom{n}{n} = 1$: if $S \subseteq n$ has $\lvert S\rvert = n = \lvert n\rvert$
  then $S = n$ by clause 3 of [[thm-subset-of-a-finite-set]], so
  $[n]^{n} = \{n\}$.
- $\binom{n}{k} = 0$ for $k > n$: a subset $S \subseteq n$ has
  $\lvert S\rvert \le n$ by clause 2 of [[thm-subset-of-a-finite-set]], so
  $\lvert S\rvert = k > n$ is impossible and $[n]^{k} = \varnothing$
  ([[lem-nat-trichotomy]]).
- $\binom{n}{1} = n$: a subset of cardinality $1$ is $\{x\}$ for exactly one
  $x \in n$, since $\lvert S\rvert = 1$ means $S \approx \{0\}$; so
  $S \mapsto$ its unique element is a bijection $[n]^{1} \to n$.
- $\binom{0}{0} = 1$ and $\binom{0}{k} = 0$ for $k \ge 1$, both instances of the
  above.

## Remarks

- **Notation.** $[A]^{k}$ is standard for the set of $k$-element subsets; it is
  unrelated to the notation $A^{B}$ for a set of functions, which appears on this
  page as well. Where confusion is possible the words are used in full.

- **Symmetry is not visible yet.** $\binom{n}{k} = \binom{n}{n-k}$ is proved in
  [[thm-binomial-closed-formula]] by exhibiting the complementation bijection
  $S \mapsto n \setminus S$; from the definition alone there is no reason for the
  two counts to agree.

- **$0$ is a legitimate value of $k$ and of $n$.** Every boundary clause above is
  checked at $0$, which is where a statement about binomial coefficients most
  often goes wrong in this library's index convention.
````

### `def-canonical-natural`

````markdown
---
id: def-canonical-natural
kind: definition
title: "The canonical natural $\\iota(n) = n \\cdot 1_F$ of a field"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-field, def-natural-numbers, thm-recursion]
justified_by: []
forward_refs: [def-metric-completion]
aliases: []
landmark: false
short: "$\\iota(n) = n \\cdot 1_F$"
verification:
  precheck: n/a
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Characteristic (algebra) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Characteristic_(algebra)"
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Elias Zakon, Mathematical Analysis: Natural Numbers and Induction"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/02%3A_Real_Numbers_and_Fields/2.02%3A_Natural_Numbers._Induction"
pipeline_run: null
---

## Definition

Let $F$ be a field ([[def-field]]) with additive identity $0_F$ and
multiplicative identity $1_F$. Define
$\iota : \mathbb{N} \to F$ by recursion on $\mathbb{N}$
([[def-natural-numbers]], [[thm-recursion]]):

$$\iota(0) \;:=\; 0_F, \qquad \iota(n+1) \;:=\; \iota(n) + 1_F .$$

$\iota(n)$ is the **canonical natural** of $n$ in $F$. It is also written
$n \cdot 1_F$, and for $n \ge 1$ it is $1_F$ added to itself $n$ times.

**Why the notation is needed at all.** A natural number in this library is a von
Neumann natural, that is a set ([[def-natural-numbers]]), and a set is not an
element of $F$. So $1/n$, $n^{\alpha}$ and $x/n$ are not expressions of $F$ when
$n$ is a natural: what they mean is $1/\iota(n)$, $\iota(n)^{\alpha}$ and
$x/\iota(n)$. The map $\iota$ is what carries a counting number into the field,
and writing it is the whole reason a reader meets $1/\iota(k+1)$ where an
informal text would write $1/(k+1)$.

## Remarks

- **Where the index shift comes from.** $\mathbb{N}$ contains $0$
  ([[def-natural-numbers]]) and $\iota(0) = 0_F$, so $1/\iota(k)$ is undefined at
  $k = 0$. A family of reciprocals indexed by $\mathbb{N}$ is therefore written
  over $\iota(k+1)$, which is why the harmonic and telescoping families of this
  library run over $k+1$ rather than over $k$. This is bookkeeping, not a
  restriction: the values are the usual ones.

- **This definition records notation; the arithmetic is proved elsewhere.** That
  $\iota$ is strictly increasing and positive on $n \ge 1$, and that it carries
  sums to sums and products to products, is [[lem-of-naturals-positive]], stated
  for an ordered field. That lemma introduces the same element by the equivalent
  recursion $1 \cdot 1_F = 1_F$, $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$, which
  agrees with the definition above because $\iota(1) = \iota(0) + 1_F = 1_F$.
  Nothing here is new mathematics; the definition exists so that the notation has
  a home a reader can look up.

- **The symbol $\iota$ is used in this library for other canonical maps, and this
  definition does not govern them.** It also denotes the canonical field
  embedding $\iota : \mathbb{Q} \to F$ ([[lem-of-q-embeds]]), the isometric
  embedding of a metric space into a completion ([[def-metric-completion]]), and
  an inclusion map $\iota : S \to X$ of a subspace. Each of those is introduced
  where it is used and means something different from the map defined here. What
  the four share is only that each is the canonical map of its situation.

- **Fields, not just ordered fields.** The recursion needs no order, so the
  definition is stated for a field; every use in this library is in an ordered
  field, and the order is what makes $\iota$ injective
  ([[lem-of-naturals-positive]]). In a field of positive characteristic $\iota$
  is not injective, which is one reason the injectivity is a lemma rather than
  part of the definition.
````

### `def-factorial-and-falling-factorial`

````markdown
---
id: def-factorial-and-falling-factorial
kind: definition
title: "The factorial $n!$ and the falling factorial $n^{\\underline{k}}$, defined by recursion in $\\mathbb{N}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-recursion, thm-induction-principle, def-nat-finite-sum-and-product,
       lem-nat-finite-sum-laws-and-the-canonical-embedding, def-nat-multiplication,
       lem-nat-mult-associative, lem-nat-mult-commutative, lem-nat-mult-identity,
       lem-nat-mult-cancellative, lem-nat-add-cancellative, def-nat-order,
       lem-nat-nonzero-is-successor, thm-omega-is-peano-system, def-canonical-natural]
justified_by: []
forward_refs: [lem-factorial-beats-geometric, def-monoid-finite-product]
aliases: []
landmark: true
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
    - title: "Factorial (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Factorial"
    - title: "Falling and rising factorials (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Falling_and_rising_factorials"
    - title: "Empty product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Empty_product"
pipeline_run: null
---

## Definition

**The factorial.** By the recursion theorem ([[thm-recursion]]) applied to the
set $\mathbb{N}\times\mathbb{N}$, the starting element $(0,1)$ and the function
$f(k, v) = (\sigma(k),\, v \cdot \sigma(k))$, and by the same induction on the
first coordinate as in [[def-nat-finite-sum-and-product]], there is a unique
$F : \mathbb{N} \to \mathbb{N}$ with

$$F(0) = 1, \qquad F(\sigma(n)) = F(n)\cdot\sigma(n) \quad (n \in \mathbb{N}).$$

We write $n! := F(n)$. Thus $0! = 1$, $1! = 0!\cdot 1 = 1$, $2! = 1!\cdot 2 = 2$,
$3! = 6$, $4! = 24$, $5! = 120$, $6! = 720$.

**$0! = 1$ is the base clause of this recursion**, not a convention imported from
elsewhere. Nothing about empty products is presupposed; the agreement with the
empty product is proved below, in clause (a), rather than assumed.

**Truncated difference.** Throughout, $n - k$ is the operation fixed in
[[def-nat-finite-sum-and-product]]: the unique $j$ with $k + j = n$ when
$k \le n$, and $0$ when $n < k$.

**The falling factorial.** For $n \in \mathbb{N}$ define $n^{\underline{k}}$ by
recursion on $k$, by the recursion theorem applied to
$\mathbb{N}\times\mathbb{N}$ with starting element $(0,1)$ and
$f(k, v) = (\sigma(k),\, v \cdot (n-k))$:

$$n^{\underline{0}} = 1, \qquad n^{\underline{\sigma(k)}} = n^{\underline{k}}\cdot(n-k) .$$

So $n^{\underline{1}} = 1\cdot(n-0) = n$ and $n^{\underline{2}} = n\,(n-1)$, and
for $k \le n$ the value is the product $n(n-1)\cdots(n-k+1)$ of the $k$ topmost
factors.

**Four facts, proved here because the page uses each of them.**

**(a) The factorial is the product of the first $n$ positive naturals.**
$n! = \prod_{j<n}\sigma(j) = \prod_{j<n}(j+1)$, the $\mathbb{N}$-valued product of
[[def-nat-finite-sum-and-product]]. Induction ([[thm-induction-principle]]): at
$n = 0$ both sides are $1$, the empty product and the base clause agreeing; and
$\prod_{j<\sigma(n)}\sigma(j) = \big(\prod_{j<n}\sigma(j)\big)\cdot\sigma(n) = n!\cdot\sigma(n) = \sigma(n)!$.
**So the empty-product reading and the base-clause reading are the same reading**,
and neither was assumed.

**(b) $n! \ne 0$, and $\iota(n!) = \prod^{\mathbb{R}}_{j<n}\iota(j+1)$.** For the
first, $0! = 1 \ne 0$ ([[thm-omega-is-peano-system]]) and
$\sigma(n)! = n!\cdot\sigma(n)$ is a product of two nonzero naturals, which is
nonzero: if $xy = 0$ with $y \ne 0$ then $xy = 0\cdot y$
([[lem-nat-mult-identity]]) and cancellation gives $x = 0$
([[lem-nat-mult-cancellative]]). So $n! \ne 0$ for every $n$ by induction. For the second, apply the bridge clause
6 of that lemma to clause (a) above. This is what makes the factorial of this
page and the real-valued product $\prod_{j<n}(j+1)$ used elsewhere in the library
**one object seen twice**, rather than two unrelated notions.

**(c) $n^{\underline{k}}\cdot(n-k)! = n!$ for $k \le n$.** Induction on $k$, for
all $n$ at once. At $k = 0$ this reads $1 \cdot n! = n!$. Assume it at $k$ and
let $\sigma(k) \le n$; then $k \le n$, and writing $d := n - k$ we have
$k + d = n$ and $d \ne 0$, since $k + 0 = k \ne n$; so $d = \sigma(e)$ for a
unique $e$ ([[lem-nat-nonzero-is-successor]]), and $\sigma(k) + e = n$, that is
$e = n - \sigma(k)$ ([[lem-nat-add-cancellative]]). Therefore
$n^{\underline{\sigma(k)}}\cdot\big(n-\sigma(k)\big)! = n^{\underline{k}}\cdot(n-k)\cdot e! = n^{\underline{k}}\cdot\big(e!\cdot\sigma(e)\big) = n^{\underline{k}}\cdot\sigma(e)! = n^{\underline{k}}\cdot(n-k)! = n!$,
using commutativity and associativity of multiplication
([[lem-nat-mult-associative]], [[lem-nat-mult-commutative]]) and the recursion
clause for the factorial.

**(d) Boundary values.** $n^{\underline{0}} = 1$ for every $n$, by the base
clause; $n^{\underline{n}} = n!$, since clause (c) at $k = n$ gives
$n^{\underline{n}}\cdot 0! = n!$ and $0! = 1$; and
$n^{\underline{k}} = 0$ whenever $k > n$. For the last, $n - n = 0$ gives
$n^{\underline{\sigma(n)}} = n^{\underline{n}}\cdot 0 = 0$, the clause
$x \cdot 0 = 0$ being definitional ([[def-nat-multiplication]]), and if
$n^{\underline{k}} = 0$ then
$n^{\underline{\sigma(k)}} = 0$ as well, so $n^{\underline{k}} = 0$ for every
$k \ge \sigma(n)$ by induction.

## Remarks

- **Why $0! = 1$ is not imported.** The empty-product convention of an arbitrary
  monoid is fixed in [[def-monoid-finite-product]], which comes later in the
  reading order, so citing it here would be a dependency pointing the wrong way.
  Taking $0! = 1$ as the base clause of the factorial's own recursion costs
  nothing and owes nothing, and clause (a) then records the agreement.

- **The library's other factorial.** [[lem-factorial-beats-geometric]], later in
  the reading order, works with a real-valued factorial defined as the product
  $\prod_{j<n}(j+1)$ in $\mathbb{R}$. Clause (b) says that this is exactly
  $\iota(n!)$, so the two agree and no second notion has been created. That
  pointer is orientation only.

- **Check every clause at $k = 0$ and at $k = n$.** The falling factorial is
  defined by two regimes, one for $k \le n$ and one beyond, and the recursion
  above covers both because the truncated difference is $0$ past the end. The
  two values that get used constantly are $n^{\underline{0}} = 1$ and
  $n^{\underline{n}} = n!$, and both are clause (d).
````

### `def-finite-sum`

````markdown
---
id: def-finite-sum
kind: definition
title: "Finite sums and finite products, by recursion"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-recursion, thm-induction-principle, def-ordered-field, def-natural-numbers, def-nat-addition, def-field, def-complete-ordered-field, lem-of-naturals-positive, lem-of-q-embeds]
justified_by: []
aliases: [def-finite-product]
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
    - title: "J. Aspnes, Summation Notation"
      url: "https://www.cs.yale.edu/homes/aspnes/pinewiki/SummationNotation.html"
    - title: "M. Fochler, Recursive sums, products, and powers"
      url: "https://people.math.binghamton.edu/mfochler/bu-mfx/bu-math-arv/math-330-arv/math-330-2019-08/html/lec-notes/bu-ln-330-m330-solns-2019-12-03.pdf"
    - title: "Empty sum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Empty_sum"
    - title: "T. Tao, Analysis I, 3rd ed., §7.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Throughout this page $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]]), in particular an ordered field
([[def-ordered-field]]) and a field ([[def-field]]), and $\mathbb{N}$ is the set
of natural numbers ([[def-natural-numbers]]) with successor $\sigma(n) = n + 1$
([[def-nat-addition]]).

Let $a : \mathbb{N} \to \mathbb{R}$ be a sequence of reals, written $a_k$ for
$a(k)$. **Finite sums and finite products of $a$ are defined by recursion on the
upper index**, which is legitimate because of the recursion theorem
([[thm-recursion]]). That theorem produces a function of one variable, so the
running index has to be carried along inside the value: applying it to the set
$A = \mathbb{N} \times \mathbb{R}$, the starting element $(0, 0)$ and the function
$f(n, s) = (\sigma(n),\, s + a_n)$ gives a unique
$g : \mathbb{N} \to \mathbb{N} \times \mathbb{R}$ with

$$g(0) = (0, 0), \qquad g(\sigma(n)) = f(g(n)) \quad (n \in \mathbb{N}).$$

Write $g(n) = \big(\pi_1(g(n)),\, \Sigma_n\big)$ for its two coordinates.

**The first coordinate is the index itself, and that is a small induction, not an
observation** ([[thm-induction-principle]]). Indeed $\pi_1(g(0)) = 0$; and if
$\pi_1(g(n)) = n$, then
$g(\sigma(n)) = f\big(\pi_1(g(n)), \Sigma_n\big) = \big(\sigma(\pi_1(g(n))),\, \Sigma_n + a_{\pi_1(g(n))}\big) = \big(\sigma(n),\, \Sigma_n + a_n\big)$,
so $\pi_1(g(\sigma(n))) = \sigma(n)$. By induction $\pi_1(g(n)) = n$ for every
$n \in \mathbb{N}$. Only now may the second coordinate of the two displayed
clauses be read off, and doing so gives

$$\Sigma_0 = 0, \qquad \Sigma_{\sigma(n)} = \Sigma_n + a_n .$$

$\Sigma$ is moreover the **unique** function $\mathbb{N} \to \mathbb{R}$ with those
two properties: if $\Sigma'$ also has them then $n \mapsto (n, \Sigma'_n)$ satisfies
the two clauses defining $g$, hence equals $g$ by the uniqueness clause of
[[thm-recursion]], so $\Sigma' = \Sigma$.

We write $\sum_{k < n} a_k := \Sigma_n$. The same construction with starting
element $(0, 1)$ and $f(n, p) = (\sigma(n),\, p \cdot a_n)$, with the same
induction on the first coordinate and the same uniqueness argument, gives the
unique $\Pi : \mathbb{N} \to \mathbb{R}$ with

$$\Pi_0 = 1, \qquad \Pi_{\sigma(n)} = \Pi_n \cdot a_n ,$$

and we write $\prod_{k < n} a_k := \Pi_n$.

**Notation.** For $m, n \in \mathbb{N}$ we abbreviate

$$\sum_{k=0}^{n} a_k := \sum_{k < n+1} a_k, \qquad \prod_{k=0}^{n} a_k := \prod_{k < n+1} a_k,$$

and, for a general lower index $m$ with $m \le n + 1$, writing $d = n + 1 - m$
for the number of terms,

$$\sum_{k=m}^{n} a_k := \sum_{j < d} a_{m+j}, \qquad \prod_{k=m}^{n} a_k := \prod_{j < d} a_{m+j} .$$

When $m = n + 1$ we have $d = 0$ and the sum is **empty**, with value $0$, while
the empty product has value $1$. In the same spirit $\sum_{k=0}^{-1} a_k$ is
notation for the empty sum $\Sigma_0 = 0$ and $\prod_{k=0}^{-1} a_k$ for the
empty product $\Pi_0 = 1$; the index $-1$ never occurs as an element of
$\mathbb{N}$ and is only a way of writing "no terms".

Only finitely many values of $a$ enter $\sum_{k<n} a_k$, so the notation
$\sum_{k<n} a_k$ and $\prod_{k<n} a_k$ is also used for a list
$a_0, \dots, a_{n-1}$ of reals given without reference to any extension of the
list to all of $\mathbb{N}$: extend the list by $a_k = 0$ (respectively
$a_k = 1$) for $k \ge n$ and apply the definition above.

## Remarks

- **Why recursion and not "$a_0 + a_1 + \cdots + a_{n-1}$".** The dots are not a
  definition: they presuppose that the displayed pattern determines a value for
  every $n$, which is exactly what the recursion theorem
  ([[thm-recursion]]) supplies, and its uniqueness clause is what makes
  $\sum_{k<n} a_k$ a single well-determined real rather than a family of choices.
  Associativity and commutativity of addition are *not* used in the definition;
  they are used in the laws proved from it ([[lem-finite-sum-laws]]).
- **Naturals and rationals inside $\mathbb{R}$ (a convention used on the whole
  page).** A natural number $n$ and a rational number $r$ are not literally
  elements of $\mathbb{R}$: they enter $\mathbb{R}$ through the canonical
  embedding $\iota : \mathbb{Q} \to \mathbb{R}$, which is an injective,
  order-preserving field homomorphism ([[lem-of-q-embeds]]), restricting on
  positive naturals to $n \mapsto n \cdot 1_{\mathbb{R}} = 1_\mathbb{R} + \cdots + 1_\mathbb{R}$
  ([[lem-of-naturals-positive]]). Following ordinary practice, and only where no
  confusion is possible, we write $n$ for $\iota(n)$ and $r$ for $\iota(r)$; so,
  for instance, $\frac{1}{n}\sum_{k<n} a_k$ means
  $\iota(n)^{-1} \cdot \sum_{k<n} a_k$, which makes sense because
  $\iota(n) > 0$ for $n \ge 1$. Exponents are the one place where the
  identification is deliberately NOT made: in $a^n$ and $a^r$ the exponent stays
  a natural, an integer or a rational ([[def-integer-power]],
  [[def-rational-power]]), never a real.
- The two indexings are related by $\sum_{k=0}^{n} a_k = \sum_{k < n+1} a_k$, so
  a statement proved for one is available for the other. Sums over $k < n$ are
  the primitive form here because $\Sigma_0$, the empty sum, is then the base
  case of every induction, and no index outside $\mathbb{N}$ is ever needed.
````

### `def-higher-derivatives-and-smoothness`

````markdown
---
id: def-higher-derivatives-and-smoothness
kind: definition
title: "Higher derivatives and the classes $C^k$ and $C^\\infty$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-derivative, def-continuity-real, def-one-sided-limits, def-natural-numbers]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: n/a
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, Taylor's theorem and related calculus"
      url: "https://www.jirka.org/ra/html/sec_taylor.html"
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 lecture notes"
      url: "https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/resources/lecture-notes/"
pipeline_run: null
---

## Definition

Let $I\subseteq\mathbb R$ be an interval and $f:I\to\mathbb R$. Put $f^{(0)}:=f$. Recursively, wherever $f^{(j)}$ is differentiable, put $f^{(j+1)}:=(f^{(j)})'$, with derivatives at endpoints understood in the one-sided sense fixed by [[def-derivative]] and [[def-one-sided-limits]].

For $k\in\mathbb N$, the function is **$k$-times differentiable** on $I$ if $f^{(j)}$ exists on $I$ for every $j\le k$. It is of class **$C^k$** on $I$ if these derivatives exist and every $f^{(j)}$, $0\le j\le k$, is continuous on $I$ ([[def-continuity-real]]). It is **smooth**, or $C^\infty$, if it is $C^k$ for every $k\in\mathbb N$.

Since $0\in\mathbb N$ ([[def-natural-numbers]]), $C^0$ means continuity. The definitions also give $C^{k+1}\subseteq C^k$. Existence of $f^{(k)}$ alone does not assert that $f^{(k)}$ is continuous.
````

### `lem-finite-sum-laws`

````markdown
---
id: lem-finite-sum-laws
kind: lemma
title: "Laws of finite sums and finite products"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-finite-sum, thm-induction-principle, def-ordered-field, def-field, lem-of-add-order, lem-of-sign-rules, lem-of-zero-mult, cor-of-one-positive, lem-of-q-embeds, lem-of-naturals-positive]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
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
    - title: "J. Aspnes, Summation Notation"
      url: "https://www.cs.yale.edu/homes/aspnes/pinewiki/SummationNotation.html"
    - title: "M. Fochler, Recursive sums, products, and powers"
      url: "https://people.math.binghamton.edu/mfochler/bu-mfx/bu-math-arv/math-330-arv/math-330-2019-08/html/lec-notes/bu-ln-330-m330-solns-2019-12-03.pdf"
    - title: "T. Tao, Analysis I, 3rd ed., §7.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Telescoping series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Telescoping_series"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $a, b, c : \mathbb{N} \to \mathbb{R}$ be sequences of reals, let
$\lambda \in \mathbb{R}$, and let $m, n \in \mathbb{N}$, with finite sums and
finite products as in [[def-finite-sum]]. Then:

1. **Additivity.** $\displaystyle\sum_{k<n}(a_k + b_k) = \sum_{k<n} a_k + \sum_{k<n} b_k$.
2. **Scaling.** $\displaystyle\sum_{k<n} \lambda a_k = \lambda \sum_{k<n} a_k$; in particular $\displaystyle\sum_{k<n} \lambda = n\lambda$, where $n$ denotes the canonical natural $\iota(n) \in \mathbb{R}$ ([[lem-of-q-embeds]], [[lem-of-naturals-positive]]).
3. **Splitting.** If $m \le n$ then $\displaystyle\sum_{k<n} a_k = \sum_{k<m} a_k + \sum_{k=m}^{n-1} a_k$, and $\displaystyle\prod_{k<n} a_k = \Big(\prod_{k<m} a_k\Big)\Big(\prod_{k=m}^{n-1} a_k\Big)$.
4. **Monotonicity.** If $a_k \le b_k$ for all $k < n$ then $\displaystyle\sum_{k<n} a_k \le \sum_{k<n} b_k$. In particular, if $a_k \ge 0$ for all $k < n$ then $\sum_{k<n} a_k \ge 0$, every single term satisfies $a_j \le \sum_{k<n} a_k$ for $j < n$, and $\sum_{k<n} a_k = 0$ forces $a_k = 0$ for every $k < n$.
5. **Telescoping.** $\displaystyle\sum_{k<n}\big(c_{k+1} - c_k\big) = c_n - c_0$.
6. **Products.** $\displaystyle\prod_{k<n}(a_k b_k) = \Big(\prod_{k<n} a_k\Big)\Big(\prod_{k<n} b_k\Big)$; if $a_k \ge 0$ for all $k < n$ then $\prod_{k<n} a_k \ge 0$, and if $a_k > 0$ for all $k < n$ then $\prod_{k<n} a_k > 0$.

## Facts & Assumptions

**Given:** Sequences $a, b, c : \mathbb{N} \to \mathbb{R}$, a real $\lambda$, and naturals $m, n$. Write $\Sigma_n = \sum_{k<n} a_k$ and $\Pi_n = \prod_{k<n} a_k$.

[L1] Recursion clauses ([[def-finite-sum]]): $\sum_{k<0} a_k = 0$ and $\sum_{k<n+1} a_k = \sum_{k<n} a_k + a_n$; $\prod_{k<0} a_k = 1$ and $\prod_{k<n+1} a_k = \big(\prod_{k<n} a_k\big) \cdot a_n$; and $\sum_{k=m}^{n-1} a_k = \sum_{j < n-m} a_{m+j}$ for $m \le n$, likewise for products.

[L2] Field axioms: addition and multiplication are associative and commutative, $0$ and $1$ are the identities, $x - x = 0$, and multiplication distributes over addition ([[def-field]], [[def-ordered-field]]); and $0 \cdot x = 0$, which is not an axiom but a lemma ([[lem-of-zero-mult]]).

[L3] Induction principle: a property holding at $0$ and inherited by successors holds at every natural ([[thm-induction-principle]]).

[L4] Adding inequalities: $x \le y$ and $u \le v$ imply $x + u \le y + v$. [[lem-of-add-order]] states the STRICT forms and only those ($x < y \Rightarrow x + c < y + c$, and $x < y$ with $u < v$ giving $x + u < y + v$); the nonstrict form used throughout below is those two together with the cases $x = y$ and $u = v$, which are settled by trichotomy, the order being total and transitive ([[def-ordered-field]]).

[L5] The canonical embedding $\iota : \mathbb{Q} \to \mathbb{R}$ is a field homomorphism, so $\iota(0) = 0$ and $\iota(n+1) = \iota(n) + 1$, and $\iota(n) > 0$ for $n \ge 1$ ([[lem-of-q-embeds]], [[lem-of-naturals-positive]]).

[L6] Sign rules: a product of two positives is positive ([[lem-of-sign-rules]], claim 1), and a product of two nonnegatives is nonnegative, since a factor equal to $0$ makes the product $0$ ([[lem-of-zero-mult]]) and otherwise both factors are positive; and $1 > 0$, which is proved in [[cor-of-one-positive]] and stated by none of the items named above.

## Proof

**Proof technique:** induction.

1.1 Base case $n = 0$: every claim holds at $n = 0$, since both sides of claim 1 are $0 = 0 + 0$, both sides of claim 2 are $0 = \lambda \cdot 0$ and $0 = \iota(0)\lambda$, claim 4 reads $0 \le 0$ with no term to bound and the hypothesis $\sum_{k<0} a_k = 0$ giving nothing to prove, claim 5 reads $0 = c_0 - c_0$, and claim 6 reads $1 = 1 \cdot 1$ with $1 > 0$. [base, L1, L2, L5, L6]

1.2 Inductive hypothesis: fix $n \in \mathbb{N}$ and assume claims 1, 2, 4, 5 and 6 hold for this $n$ and for all sequences $a, b, c$ and all $\lambda$. [ih]

1.3 Splitting, claim 3, by a separate induction on the number of trailing terms $d = n - m$ with $m$ fixed: for $d = 0$ the claim reads $\sum_{k<m} a_k = \sum_{k<m} a_k + 0$ and $\prod_{k<m} a_k = \big(\prod_{k<m} a_k\big) \cdot 1$, which hold; and if $\sum_{k<m+d} a_k = \sum_{k<m} a_k + \sum_{j<d} a_{m+j}$, then $\sum_{k<m+d+1} a_k = \sum_{k<m+d} a_k + a_{m+d} = \sum_{k<m} a_k + \big(\sum_{j<d} a_{m+j} + a_{m+d}\big) = \sum_{k<m} a_k + \sum_{j<d+1} a_{m+j}$ by associativity, and identically for products with $1$ in place of $0$ and multiplication in place of addition, so induction on $d$ gives claim 3 for every $m \le n$. [L1, L2, L3]

2.1 Additivity at $n+1$: $\sum_{k<n+1}(a_k + b_k) = \sum_{k<n}(a_k + b_k) + (a_n + b_n) = \big(\sum_{k<n} a_k + \sum_{k<n} b_k\big) + (a_n + b_n) = \big(\sum_{k<n} a_k + a_n\big) + \big(\sum_{k<n} b_k + b_n\big) = \sum_{k<n+1} a_k + \sum_{k<n+1} b_k$, using the recursion clause, the hypothesis, and commutativity with associativity of addition. [step 1.2, L1, L2]

2.2 Scaling at $n+1$: $\sum_{k<n+1} \lambda a_k = \sum_{k<n} \lambda a_k + \lambda a_n = \lambda \sum_{k<n} a_k + \lambda a_n = \lambda\big(\sum_{k<n} a_k + a_n\big) = \lambda \sum_{k<n+1} a_k$ by the recursion clause, the hypothesis and distributivity; taking $a_k = 1$ for all $k$ gives $\sum_{k<n+1} \lambda = \sum_{k<n} \lambda + \lambda = \iota(n)\lambda + \lambda = (\iota(n) + 1)\lambda = \iota(n+1)\lambda$. [step 1.2, L1, L2, L5]

2.3 Monotonicity at $n+1$: assume $a_k \le b_k$ for all $k < n+1$; then $a_k \le b_k$ for all $k < n$, so the hypothesis gives $\sum_{k<n} a_k \le \sum_{k<n} b_k$, and adding the inequality $a_n \le b_n$ gives $\sum_{k<n+1} a_k = \sum_{k<n} a_k + a_n \le \sum_{k<n} b_k + b_n = \sum_{k<n+1} b_k$. [step 1.2, L1, L4]

2.4 Telescoping at $n+1$: $\sum_{k<n+1}(c_{k+1} - c_k) = \sum_{k<n}(c_{k+1} - c_k) + (c_{n+1} - c_n) = (c_n - c_0) + (c_{n+1} - c_n) = c_{n+1} - c_0$, by the recursion clause, the hypothesis and the field identities. [step 1.2, L1, L2]

2.5 Products at $n+1$: $\prod_{k<n+1}(a_k b_k) = \big(\prod_{k<n}(a_k b_k)\big)(a_n b_n) = \big(\prod_{k<n} a_k\big)\big(\prod_{k<n} b_k\big)(a_n b_n) = \big(\prod_{k<n+1} a_k\big)\big(\prod_{k<n+1} b_k\big)$ by the recursion clause, the hypothesis, and commutativity with associativity of multiplication; and if every $a_k \ge 0$ for $k < n+1$ then $\prod_{k<n+1} a_k = \big(\prod_{k<n} a_k\big) a_n$ is a product of two nonnegatives, hence nonnegative, with the same argument giving positivity from positivity since $\prod_{k<0} a_k = 1 > 0$. [step 1.2, L1, L2, L6]

3.1 Consequences of monotonicity, completing claim 4: monotonicity itself holds at every $n$, by the induction principle applied to the base case of step 1.1 and the successor step 2.3, so it is available for an arbitrary $n$ in what follows; if $a_k \ge 0$ for all $k < n$ then comparing with the zero sequence gives $\sum_{k<n} a_k \ge \sum_{k<n} 0 = 0$; for $j < n$ splitting at $j$ and then at $j+1$ writes $\sum_{k<n} a_k = \sum_{k<j} a_k + a_j + \sum_{k=j+1}^{n-1} a_k$ with the first and third summands $\ge 0$, so $a_j \le \sum_{k<n} a_k$; and if moreover $\sum_{k<n} a_k = 0$ then $0 \le a_j \le 0$ for every $j < n$, so $a_j = 0$. [step 1.1, step 2.3, step 1.3, L3, L4, L2]

4.1 By the induction principle claims 1, 2, 4, 5 and 6 hold for every $n \in \mathbb{N}$, and claim 3 was proved in step 1.3 with its consequences in step 3.1, so all six laws hold. [step 1.1, step 2.1, step 2.2, step 2.3, step 2.4, step 2.5, step 1.3, step 3.1, L3, discharge-induction] ∎
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

### `thm-algebra-of-derivatives`

````markdown
---
id: thm-algebra-of-derivatives
kind: theorem
title: "Sums, scalar multiples, products and quotients: $(f+g)'(c) = f'(c) + g'(c)$, $(\\alpha f)'(c) = \\alpha f'(c)$, $(fg)'(c) = f'(c)g(c) + f(c)g'(c)$, and $(f/g)'(c) = \\bigl(f'(c)g(c) - f(c)g'(c)\\bigr)/g(c)^{2}$ when $g(c) \\ne 0$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-derivative, thm-caratheodory-characterisation, cor-differentiable-implies-continuous, thm-algebra-of-continuous-functions, def-continuity-real, def-function-limit, def-limit-point-r, lem-sign-preservation-near-a-limit, def-integer-power, lem-of-no-zero-divisors]
justified_by: []
aliases: [thm-differentiation-rules, thm-product-rule, thm-quotient-rule]
landmark: true
short: "algebra of derivatives"
proof_strategy: direct
verification:
  audited: 2026-07-28
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Product rule (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Product_rule"
    - title: "Quotient rule (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Quotient_rule"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 5 (Thm 5.3)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §4.1"
      url: "https://www.jirka.org/ra/"
    - title: "J. Lebl, Basic Analysis I, The Derivative"
      url: "https://www.jirka.org/ra/html/der_chapter.html"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $c \in A$ be a limit point of $A$
([[def-limit-point-r]]), let $f, g : A \to \mathbb{R}$ be differentiable at $c$
([[def-derivative]]) and let $\alpha \in \mathbb{R}$. Then:

1. $f + g$ is differentiable at $c$ and $(f+g)'(c) = f'(c) + g'(c)$;
2. $\alpha f$ is differentiable at $c$ and $(\alpha f)'(c) = \alpha f'(c)$;
3. $fg$ is differentiable at $c$ and $(fg)'(c) = f'(c)g(c) + f(c)g'(c)$;
4. if $g(c) \ne 0$ then, writing $A_0 := \{\, x \in A : g(x) \ne 0 \,\}$, the
   point $c$ lies in $A_0$ and is a limit point of $A_0$, the quotient
   $(f/g)|_{A_0} : A_0 \to \mathbb{R}$, $x \mapsto f(x)/g(x)$, is differentiable
   at $c$ as a function on $A_0$, and
   $$\bigl((f/g)|_{A_0}\bigr)'(c) \;=\; \frac{f'(c)\,g(c) - f(c)\,g'(c)}{g(c)^{2}} .$$

Each claim asserts two things: that the derivative on the left exists, and that
it has the stated value. Both are proved.

**Why claim 4 is stated on $A_0$.** The function $f/g$ is not defined where $g$
vanishes, and $g$ may vanish at points of $A$ far from $c$; restricting to $A_0$
is forced. That the restriction still has $c$ as a limit point, so that a
derivative there means anything at all, is not free either, and it is the last
claim of [[lem-sign-preservation-near-a-limit]] applied to $g$. The hypothesis
is $g(c) \ne 0$, not "$g$ vanishes nowhere".

**Everything is proved through
[[thm-caratheodory-characterisation]].** No difference quotient is estimated and
no limit theorem beyond continuity is used, so no choice principle is spent.
The four identities are four algebraic rearrangements of an increment, each
followed by a reading of [[thm-algebra-of-continuous-functions]].

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, a point $c \in A$ that is a limit point of $A$, functions $f, g : A \to \mathbb{R}$ differentiable at $c$, and a real $\alpha$; for claim 4 also the hypothesis $g(c) \ne 0$ together with $A_0 := \{\, x \in A : g(x) \ne 0 \,\}$ ([[def-derivative]], [[def-limit-point-r]]).

[L1] Carathéodory's characterisation ([[thm-caratheodory-characterisation]]), used in both directions: for a set $B \subseteq \mathbb{R}$, a point $p \in B$ that is a limit point of $B$ and a function $h : B \to \mathbb{R}$, the function $h$ is differentiable at $p$ if and only if there is $\eta : B \to \mathbb{R}$, continuous at $p$, with $h(x) - h(p) = \eta(x)(x - p)$ for every $x \in B$, and then $\eta(p) = h'(p)$.

[L2] Algebra of continuous functions ([[thm-algebra-of-continuous-functions]]): sums, scalar multiples and products of functions continuous at a point are continuous there (claim 1); every constant function and the identity are continuous everywhere on the domain (claim 5); and if $u, v$ are continuous at a point $p$ of their common domain $D$ with $v(p) \ne 0$, then $p$ lies in $D_0 := \{x \in D : v(x) \ne 0\}$ and $(u/v)|_{D_0}$ is continuous at $p$ as a function on $D_0$ (claim 4).

[L3] Continuity passes to a subset of the domain: if $B \subseteq A$, if $p \in B$ and if $\psi : A \to \mathbb{R}$ is continuous at $p$, then $\psi|_B$ is continuous at $p$, the condition on the restriction quantifying over fewer points ([[def-continuity-real]]).

[L4] A function differentiable at $c$ is continuous at $c$ ([[cor-differentiable-implies-continuous]]); in particular $g$ is.

[L5] At a limit point $c$ of $A$, continuity of $g$ at $c$ says exactly that $\lim_{x \to c} g(x)$ exists and equals $g(c)$ ([[def-continuity-real]], clause 1, [[def-function-limit]]).

[L6] Sign preservation ([[lem-sign-preservation-near-a-limit]]): if $c$ is a limit point of $A$ and $\lim_{x \to c} g(x)$ exists and is nonzero, then $c$ is a limit point of $A_0 = \{x \in A : g(x) \ne 0\}$.

[L7] A product of two nonzero reals is nonzero ([[lem-of-no-zero-divisors]]), and $g(c)^{2} = g(c)\,g(c)$ ([[def-integer-power]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], applied to $f$ and to $g$ on $A$ at $c$, fix $\varphi, \psi : A \to \mathbb{R}$, both continuous at $c$, with $f(x) - f(c) = \varphi(x)(x - c)$ and $g(x) - g(c) = \psi(x)(x - c)$ for every $x \in A$, and with $\varphi(c) = f'(c)$ and $\psi(c) = g'(c)$. [L1, choose]

1.2 Assume $g(c) \ne 0$. Then $c \in A_0$ by the definition of $A_0$; $g$ is continuous at $c$ by [L4], so $\lim_{x \to c} g(x) = g(c) \ne 0$ by [L5]; and therefore $c$ is a limit point of $A_0$ by [L6]. [L4, L5, L6]

2.1 **Sum.** For every $x \in A$, $(f+g)(x) - (f+g)(c) = \bigl(f(x)-f(c)\bigr) + \bigl(g(x)-g(c)\bigr) = \bigl(\varphi(x) + \psi(x)\bigr)(x-c)$. The function $\varphi + \psi$ is continuous at $c$ by [L2], and $(\varphi+\psi)(c) = f'(c) + g'(c)$. So [L1] gives claim 1. [step 1.1, L1, L2]

2.2 **Scalar multiple.** For every $x \in A$, $(\alpha f)(x) - (\alpha f)(c) = \alpha\bigl(f(x)-f(c)\bigr) = \bigl(\alpha\varphi(x)\bigr)(x-c)$. The function $\alpha\varphi$ is continuous at $c$ by [L2], with value $\alpha f'(c)$ there. So [L1] gives claim 2. [step 1.1, L1, L2]

2.3 **Product.** For every $x \in A$, $f(x)g(x) - f(c)g(c) = \bigl(f(x)-f(c)\bigr)g(x) + f(c)\bigl(g(x)-g(c)\bigr) = \bigl(\varphi(x)g(x) + f(c)\psi(x)\bigr)(x-c)$. Put $\chi := \varphi\,g + f(c)\,\psi$; it is continuous at $c$ by [L2], since $\varphi$, $\psi$ and (by [L4]) $g$ are, and constants are; and $\chi(c) = \varphi(c)g(c) + f(c)\psi(c) = f'(c)g(c) + f(c)g'(c)$. So [L1] gives claim 3. [step 1.1, L1, L2, L4]

2.4 **Quotient, the rearrangement.** Assume $g(c) \ne 0$ and let $x \in A_0$, so $g(x) \ne 0$ and $g(c) \ne 0$. Then $f(x)/g(x) - f(c)/g(c) = \bigl(f(x)g(c) - f(c)g(x)\bigr)/\bigl(g(x)g(c)\bigr)$, and $f(x)g(c) - f(c)g(x) = \bigl(f(x)-f(c)\bigr)g(c) - f(c)\bigl(g(x)-g(c)\bigr) = \bigl(\varphi(x)g(c) - f(c)\psi(x)\bigr)(x-c)$. So, defining $\theta : A_0 \to \mathbb{R}$ by $\theta(x) := \bigl(\varphi(x)g(c) - f(c)\psi(x)\bigr)/\bigl(g(x)g(c)\bigr)$, one has $(f/g)|_{A_0}(x) - (f/g)|_{A_0}(c) = \theta(x)(x-c)$ for every $x \in A_0$. [step 1.1, L1, L7]

2.5 **Quotient, continuity of the factor.** Assume $g(c) \ne 0$. The restrictions of $\varphi$, $\psi$ and $g$ to $A_0$ are continuous at $c \in A_0$ by [L3] and [L4], so by [L2] the numerator $u(x) := \varphi(x)g(c) - f(c)\psi(x)$ and the denominator $v(x) := g(x)g(c)$ are continuous at $c$ as functions on $A_0$. By [L7] the denominator vanishes at no point of $A_0$, so $\{x \in A_0 : v(x) \ne 0\} = A_0$, and $v(c) = g(c)^{2} \ne 0$; hence claim 4 of [L2] gives that $\theta = (u/v)|_{A_0}$ is continuous at $c$, with $\theta(c) = \bigl(\varphi(c)g(c) - f(c)\psi(c)\bigr)/g(c)^{2} = \bigl(f'(c)g(c) - f(c)g'(c)\bigr)/g(c)^{2}$. [step 1.1, step 1.2, L2, L3, L4, L7]

3.1 **Quotient, conclusion.** Assume $g(c) \ne 0$. By step 1.2 the point $c$ lies in $A_0$ and is a limit point of $A_0$; by steps 2.4 and 2.5 the function $\theta : A_0 \to \mathbb{R}$ is continuous at $c$ and factors the increment of $(f/g)|_{A_0}$. So [L1], applied on the domain $A_0$ at the point $c$, gives that $(f/g)|_{A_0}$ is differentiable at $c$ with derivative $\theta(c)$: claim 4. [step 1.2, step 2.4, step 2.5, L1]

4.1 Claims 1 to 4 are proved, by steps 2.1, 2.2, 2.3 and 3.1 respectively, each by exhibiting the Carathéodory factor of the new function and reading its continuity at $c$ off the algebra of continuous functions. [step 2.1, step 2.2, step 2.3, step 3.1] ∎

## Remarks

- **The product rearrangement in one line.** The identity $fg - f(c)g(c) = (f - f(c))\,g + f(c)\,(g - g(c))$ splits the increment of a product into two increments, one multiplied by $g$ and one by a constant. It is the same identity that carries the product case of [[thm-algebra-of-function-limits]], read at the level of increments rather than of $\varepsilon$; here the factor $g$ has to be continuous at $c$ rather than merely bounded near it, and [[cor-differentiable-implies-continuous]] is what supplies that.

- **The reciprocal is the case $f \equiv 1$.** Claim 4 then reads $\bigl((1/g)|_{A_0}\bigr)'(c) = -g'(c)/g(c)^{2}$, since $f'(c) = 0$ for a constant $f$; nothing separate has to be proved, and the derivative of a negative integer power on this page is obtained exactly this way.

- **Two hypotheses that look removable and are not.** In claim 4 the hypothesis $g(c) \ne 0$ cannot be weakened to "$g$ is nonzero somewhere near $c$", because $c$ itself must lie in the smaller domain for a derivative there to be a statement about $c$; and the conclusion is about $(f/g)|_{A_0}$, not about any extension of it to $A$, since no such extension is canonical.
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

### `thm-pascals-rule`

````markdown
---
id: thm-pascals-rule
kind: theorem
title: "Pascal's rule $\\binom{n+1}{k+1} = \\binom{n}{k} + \\binom{n}{k+1}$, and the hockey-stick identity $\\sum_{i \\le n}\\binom{i}{k} = \\binom{n+1}{k+1}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-binomial-coefficient, thm-sum-rule, def-nat-finite-sum-and-product,
       lem-nat-finite-sum-laws-and-the-canonical-embedding, def-finite-cardinality,
       thm-subset-of-a-finite-set, def-injection-surjection-bijection,
       thm-induction-principle, def-nat-order, lem-nat-add-cancellative,
       lem-nat-trichotomy, def-natural-numbers]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
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
    - title: "Pascal's rule (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Pascal%27s_rule"
    - title: "Hockey-stick identity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hockey-stick_identity"
    - title: "Pascal's triangle (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Pascal%27s_triangle"
pipeline_run: null
---

## Statement

For all $n, k \in \mathbb{N}$:

1. **Pascal's rule.**
   $\displaystyle\binom{n+1}{k+1} = \binom{n}{k} + \binom{n}{k+1}$, with **no**
   restriction relating $k$ to $n$;
2. **The hockey-stick identity.**
   $\displaystyle\sum_{i<n+1}\binom{i}{k} = \binom{n+1}{k+1}$, the sum being the
   $\mathbb{N}$-valued finite sum of [[def-nat-finite-sum-and-product]] over
   $i = 0, 1, \dots, n$.

```tikz
\begin{tikzpicture}[x=1cm,y=1cm]
  \node at (0,3.8) {$|A|=n+1$};
  \node[draw,rounded corners] (all) at (0,3) {$[A]^{k+1}$, with $A'=A\setminus\{a\}$};
  \node[draw,rounded corners] (yes) at (-3,1.75) {$P=\{S:a\in S\}$};
  \node[draw,rounded corners] (no) at (3,1.75) {$Q=\{S:a\notin S\}$};
  \node[draw,rounded corners] (left) at (-3,0.35) {$[A']^k$};
  \node[draw,rounded corners] (right) at (3,0.35) {$[A']^{k+1}$};
  \draw[->] (all) -- (yes);
  \draw[->] (all) -- (no);
  \draw[->] (yes) -- node[left] {$S\mapsto S\setminus\{a\}$} (left);
  \draw[->] (no) -- node[right] {$S\mapsto S$} (right);
  \node at (0,-0.75) {${n+1\choose k+1}={n\choose k}+{n\choose k+1}$};
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** Naturals $n$, $k$; $\sigma(m) = m+1$; and $\binom{m}{j} = \lvert [X]^{j}\rvert$ for any finite $X$ with $\lvert X\rvert = m$.

[L1] Induction ([[thm-induction-principle]]).

[L2] Binomial coefficients ([[def-binomial-coefficient]]): $\lvert [X]^{j}\rvert = \binom{\lvert X\rvert}{j}$; $\binom{m}{0} = 1$; $\binom{m}{j} = 0$ for $j > m$; $\binom{m}{m} = 1$; $\binom{m}{1} = m$.

[L3] The sum rule for two disjoint blocks, and the recursion clause $\sum_{i<\sigma(n)} c_i = \sum_{i<n} c_i + c_n$ ([[thm-sum-rule]], [[def-nat-finite-sum-and-product]]).

[L4] Cardinality ([[def-finite-cardinality]], [[thm-subset-of-a-finite-set]]): transport along a bijection; a subset of a finite set is finite; $\lvert\{a\}\rvert = 1$; $\lvert X\rvert = 0$ exactly when $X = \varnothing$.

[L5] Cancellation and order in $\mathbb{N}$: $x+1 = y+1$ implies $x = y$; trichotomy ([[lem-nat-add-cancellative]], [[lem-nat-trichotomy]], [[def-nat-order]]).

[L6] Maps ([[def-injection-surjection-bijection]]): a map with a two-sided inverse is a bijection.

[L7] Naturals: $\sigma(m) = m \cup \{m\}$ and $m \notin m$ ([[def-natural-numbers]]).

## Proof

**Proof technique:** induction.

1.1 Fix $n$ and $k$, let $A$ be a set with $\lvert A\rvert = \sigma(n)$, and fix $a \in A$, possible because $A \ne \varnothing$ by [L4]. Put $A' := A \setminus \{a\}$, which is finite with $\lvert A'\rvert = n$: indeed $A = A' \cup \{a\}$ is a disjoint union, so $\sigma(n) = \lvert A'\rvert + 1$ by [L3], and [L5] applies. Split $[A]^{\sigma(k)}$ into $P := \{S \in [A]^{\sigma(k)} : a \in S\}$ and $Q := \{S \in [A]^{\sigma(k)} : a \notin S\}$, which are disjoint with union $[A]^{\sigma(k)}$. [L3, L4, L5, L7]

1.2 The two blocks are counted by $\binom{n}{k}$ and $\binom{n}{\sigma(k)}$. First, $Q = [A']^{\sigma(k)}$, since a subset of $A$ avoiding $a$ is exactly a subset of $A'$; so $\lvert Q\rvert = \binom{n}{\sigma(k)}$ by [L2]. Second, $S \mapsto S \setminus \{a\}$ maps $P$ into $[A']^{k}$: for $S \in P$ the set $S$ is the disjoint union of $S\setminus\{a\}$ and $\{a\}$, so $\sigma(k) = \lvert S\setminus\{a\}\rvert + 1$ and $\lvert S\setminus\{a\}\rvert = k$ by [L5]. Its two-sided inverse is $T \mapsto T \cup \{a\}$, which lands in $P$ because $a \notin T \subseteq A'$ gives $\lvert T \cup \{a\}\rvert = k+1 = \sigma(k)$ by [L3]. Hence $\lvert P\rvert = \binom{n}{k}$ by [L2] and [L4]. [L2, L3, L4, L5, L6, construct]

1.3 Base case of clause 2, at $n = 0$. The left-hand side is $\sum_{i<1}\binom{i}{k} = \binom{0}{k}$ by [L3], and the right-hand side is $\binom{1}{\sigma(k)}$. If $k = 0$ both are $1$, by $\binom{0}{0} = 1$ and $\binom{1}{1} = 1$ from [L2]. If $k \ge 1$ then $k > 0$ and $\sigma(k) > 1$, so both are $0$ by [L2]. [base, L2, L3, L5]

1.4 Inductive hypothesis for clause 2: fix $n$ and assume $\sum_{i<\sigma(n)}\binom{i}{k} = \binom{\sigma(n)}{\sigma(k)}$ for every $k$. [ih]

2.1 Clause 1. By step 1.1, step 1.2 and the sum rule, $\binom{\sigma(n)}{\sigma(k)} = \big\lvert [A]^{\sigma(k)}\big\rvert = \lvert P\rvert + \lvert Q\rvert = \binom{n}{k} + \binom{n}{\sigma(k)}$. No relation between $k$ and $n$ was used, and the identity is correct beyond the range as well: for $k > n$ all three coefficients are $0$ by [L2], and at $k = 0$ it reads $\binom{\sigma(n)}{1} = 1 + \binom{n}{1}$, which is $\sigma(n) = 1 + n$. [step 1.1, step 1.2, L2, L3]

3.1 Inductive step for clause 2. Using the recursion clause and then the hypothesis of step 1.4, $\sum_{i<\sigma(\sigma(n))}\binom{i}{k} = \sum_{i<\sigma(n)}\binom{i}{k} + \binom{\sigma(n)}{k} = \binom{\sigma(n)}{\sigma(k)} + \binom{\sigma(n)}{k}$, and clause 1 applied with $\sigma(n)$ in place of $n$ says exactly that this is $\binom{\sigma(\sigma(n))}{\sigma(k)}$. [step 1.4, step 2.1, L3]

4.1 By step 1.3, step 3.1 and induction, clause 2 holds for every $n$ and every $k$. [step 1.3, step 3.1, L1]

5.1 Clause 1 is step 2.1 and clause 2 is step 4.1. [step 2.1, step 4.1, discharge-induction] ∎

## Remarks

- **The rule needs no range hypothesis** because the boundary values of [[def-binomial-coefficient]] make every out-of-range coefficient $0$ rather than undefined. Both edges were checked in step 2.1 rather than assumed.

- **The hockey stick sums a column, not a row.** The index $i$ runs over $0, 1, \dots, n$ with $k$ fixed, and the terms with $i < k$ vanish, so the identity is a statement about the entries $\binom{k}{k}, \binom{k+1}{k}, \dots$ of one column of Pascal's triangle. The base case $n = 0$ is the only place where the two readings $k = 0$ and $k \ge 1$ have to be separated.

- **Everything here is an identity in $\mathbb{N}$.** No embedding into $\mathbb{R}$ is used or needed; the sum is the $\mathbb{N}$-valued one.
````

