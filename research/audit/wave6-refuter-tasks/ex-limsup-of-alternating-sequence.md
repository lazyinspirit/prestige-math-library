## Target item — `ex-limsup-of-alternating-sequence`

Normalized current SHA-256: `08785090f409550541665cc9b237578b1d56eec664d2fcc682fdcf78dd45fe6e`

The complete current item follows, including frontmatter:

````markdown
---
id: ex-limsup-of-alternating-sequence
kind: example
title: "$(-1)^k$ has $\\liminf = -1$ and $\\limsup = 1$, so it does not converge"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-limsup-liminf, thm-convergence-iff-limsup-equals-liminf, lem-alternating-sequence, lem-index-map-grows, lem-limsup-exists, lem-extended-reals-complete, def-extended-reals, def-upper-bound, def-partial-order, def-sequence, lem-of-abs-value, def-abs-value, cor-of-one-positive, lem-of-add-order, def-ordered-field, def-complete-ordered-field]
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
    - title: "Limit superior and limit inferior (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_superior_and_limit_inferior"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Example

Let $(s_k)$ be the alternating sequence of [[lem-alternating-sequence]], the
sequence usually written $s_k = (-1)^k$, characterised by $s_0 = 1$ and
$s_{k+1} = -s_k$. Then

$$\liminf_{k} s_k = -1, \qquad \limsup_{k} s_k = 1,$$

so the two differ and $(s_k)$ neither converges nor diverges to $\pm\infty$
([[thm-convergence-iff-limsup-equals-liminf]]).

This is the smallest example in which the inequality
$\liminf \le \limsup$ is strict, and it shows exactly what the gap measures: the
sequence keeps returning to two different values, and neither of them can be the
limit because the other keeps interrupting.

## Facts & Assumptions

**Given:** The alternating sequence $(s_k)$ and the index maps $e, o$ of [[lem-alternating-sequence]], and the tail ranges $T_n = \{s_k : k \ge n\}$ with extended tail bounds $s\!\sup_n := \sup T_n$ and $s\!\inf_n := \inf T_n$ ([[def-limsup-liminf]]).

[L1] The alternating sequence: $|s_k| = 1$ for every $k$, $s_{e_j} = 1$ and $s_{o_j} = -1$ for every $j$, and $e$, $o$ are strictly increasing ([[lem-alternating-sequence]]).

[L2] A strictly increasing index map satisfies $n_j \ge j$ ([[lem-index-map-grows]]).

[L3] Limit superior and limit inferior: $\limsup_k z_k = \inf\{\sup T_n(z)\}$ and $\liminf_k z_k = \sup\{\inf T_n(z)\}$, all four kinds of bound existing in $\overline{\mathbb{R}}$ for every sequence, the supremum being the least upper bound and the infimum the greatest lower bound ([[def-limsup-liminf]], [[lem-limsup-exists]], [[lem-extended-reals-complete]], [[def-upper-bound]], [[def-partial-order]], [[def-sequence]]).

[L4] The order on $\overline{\mathbb{R}}$ is total and restricts on $\mathbb{R}$ to the order of $\mathbb{R}$ ([[def-extended-reals]]).

[L5] Absolute value: $|t| = 1$ forces $t = 1$ or $t = -1$ ([[lem-of-abs-value]], [[def-abs-value]]).

[L6] Order arithmetic: $0 < 1$, hence $-1 < 1$ and $-1 \ne 1$ ([[cor-of-one-positive]], [[lem-of-add-order]], [[def-ordered-field]], [[def-complete-ordered-field]]).

[L7] A real sequence converges to $L \in \mathbb{R}$ exactly when $\liminf = \limsup = L$, and diverges to $\pm\infty$ exactly when both equal $\pm\infty$ ([[thm-convergence-iff-limsup-equals-liminf]]).

## Verification

**Proof technique:** direct.

1.1 Every value of the sequence is $1$ or $-1$, since $|s_k| = 1$. [given, L1, L5]

1.2 For every $n \in \mathbb{N}$ both values occur at some index $\ge n$: $s_{e_n} = 1$ with $e_n \ge n$, and $s_{o_n} = -1$ with $o_n \ge n$. [given, L1, L2]

2.1 Hence $T_n = \{1, -1\}$ for every $n$. Its least upper bound in $\overline{\mathbb{R}}$ is $1$, since $1$ bounds both elements from above, using $-1 < 1$, and any upper bound is $\ge 1$ because $1 \in T_n$; dually its greatest lower bound is $-1$. [step 1.1, step 1.2, L3, L4, L6]

3.1 Therefore the family of tail suprema is the one-element family $\{1\}$, whose greatest lower bound is $1$, so $\limsup_k s_k = 1$; and the family of tail infima is $\{-1\}$, whose least upper bound is $-1$, so $\liminf_k s_k = -1$. [step 2.1, L3, L4]

4.1 Since $-1 \ne 1$, there is no $L$ with $\liminf_k s_k = \limsup_k s_k = L$, so by [L7] the sequence converges to no real number and diverges to neither $+\infty$ nor $-\infty$. [step 3.1, L6, L7] ∎

## Remarks

- **The two values are exactly the subsequential limits.** By
  [[thm-limsup-is-greatest-subsequential-limit]] and
  [[cor-liminf-is-least-subsequential-limit]] the numbers $1$ and $-1$ are the
  greatest and least elements of $\overline{\operatorname{SL}}(s)$, and since
  every term is $1$ or $-1$ no other value can be a subsequential limit, so
  $\operatorname{SL}(s) = \{-1, 1\}$ exactly.

- **Contrast with [[ex-two-subsequential-limits]].** There the same two
  subsequential limits arise for a sequence none of whose terms equals either of
  them. The limit superior and limit inferior do not care: they are determined by
  the tails, not by whether the values are attained.

- **This sequence is the standard witness for strictness throughout the page.**
  It drives [[fs-limsup-additive]] and [[cex-limsup-subadditivity-strict]], and,
  after an affine change, [[cex-limsup-product-strict]].
````

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "lem-alternating-sequence",
      "source_section": "Statement",
      "quote": "Let $\\sigma$ be the successor on $\\mathbb{N}$ ([[def-natural-numbers]]). There are\nfunctions $e, o : \\mathbb{N} \\to \\mathbb{N}$ and a sequence $(s_k)$ of reals\n([[def-sequence]]) with the following properties.\n\n1. **The index maps.** $e$ is the unique function with\n   $e_0 = 0$ and $e_{\\sigma(j)} = \\sigma(\\sigma(e_j))$, and $o$ the unique\n   function with $o_0 = \\sigma(0)$ and $o_{\\sigma(j)} = \\sigma(\\sigma(o_j))$.\n   Both are **strictly increasing**.\n2. **The partition.** $\\mathbb{N}$ is the **disjoint union** of the ranges of $e$\n   and of $o$: every natural number is $e_i$ for exactly one $i$ or $o_i$ for\n   exactly one $i$, and never both.\n3. **The alternating sequence.** $(s_k)$ is the **unique** sequence of reals with\n   $$s_0 = 1, \\qquad s_{\\sigma(k)} = -s_k \\quad (k \\in \\mathbb{N}).$$\n4. **Its values.** $|s_k| = 1$ for every $k$, so $(s_k)$ is bounded; and\n   $$s_{e_j} = 1, \\qquad s_{o_j} = -1 \\qquad (j \\in \\mathbb{N}),$$\n   that is $s \\circ e$ is constantly $1$ and $s \\circ o$ constantly $-1$.\n\nThis is the sequence usually written $s_k = (-1)^k$, with $e_j = 2j$ and\n$o_j = 2j+1$, presented by the recursions that its proofs actually use. It is\ncollected here once because three separate items on this page and its companion\nneed an alternating or interleaved witness, and rebuilding the recursion inside\neach of them is what this lemma exists to prevent.",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-index-map-grows",
      "source_section": "Statement",
      "quote": "Let $n : \\mathbb{N} \\to \\mathbb{N}$ be a function, written $k \\mapsto n_k$, and\nrecall that $n$ is **strictly increasing** when $n_j < n_k$ whenever $j < k$\n([[def-sequence]], [[def-nat-order]]).\n\n1. **Consecutive comparisons suffice.** If $n_i < n_{\\sigma(i)}$ for every\n   $i \\in \\mathbb{N}$, then $n$ is strictly increasing.\n2. **Growth.** If $n$ is strictly increasing then $n_k \\ge k$ for every\n   $k \\in \\mathbb{N}$.\n\nClaim 1 is what one checks in practice when exhibiting a subsequence; claim 2 is\nwhat every later subsequence argument uses.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L3",
      "source": "def-limsup-liminf",
      "source_section": "Definition",
      "quote": "Let $(x_k)$ be a sequence of reals ([[def-sequence]]). For $n \\in \\mathbb{N}$ let\n\n$$T_n \\;:=\\; \\{\\, x_k : k \\in \\mathbb{N},\\ k \\ge n \\,\\} \\subseteq \\mathbb{R}$$\n\nbe the **$n$-th tail range** of $(x_k)$, a nonempty subset of $\\mathbb{R}$ since\n$x_n \\in T_n$. Regard $T_n$ as a subset of $\\overline{\\mathbb{R}}$\n([[def-extended-reals]]) and put\n\n$$s_n \\;:=\\; \\sup T_n \\in \\overline{\\mathbb{R}}, \\qquad i_n \\;:=\\; \\inf T_n \\in \\overline{\\mathbb{R}},$$\n\nthe supremum and infimum taken in $\\overline{\\mathbb{R}}$, which exist for every\n$n$ and for every sequence by [[lem-extended-reals-complete]]. The **limit\nsuperior** and **limit inferior** of $(x_k)$ are then\n\n$$\\limsup_{k} x_k \\;:=\\; \\inf \\{\\, s_n : n \\in \\mathbb{N} \\,\\}, \\qquad \\liminf_{k} x_k \\;:=\\; \\sup \\{\\, i_n : n \\in \\mathbb{N} \\,\\},$$\n\nagain taken in $\\overline{\\mathbb{R}}$ and again existing by\n[[lem-extended-reals-complete]], since $\\{s_n : n \\in \\mathbb{N}\\}$ and\n$\\{i_n : n \\in \\mathbb{N}\\}$ are subsets of $\\overline{\\mathbb{R}}$ on which no\nhypothesis is needed. Both are elements of $\\overline{\\mathbb{R}}$, and either may\nbe $+\\infty$ or $-\\infty$. The notations $\\limsup_{k \\to \\infty} x_k$,\n$\\varlimsup_k x_k$ and $\\overline{\\lim}_k x_k$ all denote the first of them\nelsewhere; this library writes $\\limsup_k x_k$.\n\n**Every quantity written here exists, and that is why the extended line was\nintroduced.** Each of the four operations above is an application of\n[[lem-extended-reals-complete]] to a subset of $\\overline{\\mathbb{R}}$ carrying no\nhypothesis whatever. Written with the real supremum of\n[[def-complete-ordered-field]] and the real infimum of [[thm-infimum-property]]\ninstead, the definition would be available only for sequences that are bounded\n([[def-bounded-set]]): $\\sup T_n$ needs $T_n$ bounded above, and\n$\\inf\\{s_n\\}$ needs $\\{s_n\\}$ nonempty, bounded below, and made of real numbers\n([[def-infimum]]). None of those is automatic, and the discipline recorded in\n[[rem-sup-conventions]] forbids papering over the gap with a convention. The\nextended supremum is a different operation in a different ordered set, and it is\ntotal.\n\n**Values, when the sequence is bounded.** If $(x_k)$ is bounded, say\n$|x_k| \\le M$ for every $k$, then each $T_n$ is a nonempty subset of $\\mathbb{R}$\nbounded above by $M$ and below by $-M$, so by the agreement clause of\n[[lem-extended-reals-complete]] each $s_n$ and each $i_n$ is the *real* supremum\nor infimum of $T_n$, and lies in $[-M, M]$. The family $\\{s_n\\}$ is then a\nnonempty set of reals bounded below by $-M$, so $\\limsup_k x_k$ is likewise the\nreal infimum of $\\{s_n\\}$ and lies in $[-M, M]$; dually for $\\liminf_k x_k$. So\nfor a bounded sequence both quantities are ordinary real numbers computed with\nthe ordinary real supremum and infimum, and the extended line is doing no work.\nIt is only for unbounded sequences that the values $\\pm\\infty$ occur.",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-limsup-exists",
      "source_section": "Statement",
      "quote": "Let $(x_k)$ be a sequence of reals ([[def-sequence]]), with tail ranges $T_n$ and\nextended tail bounds $s_n = \\sup T_n$, $i_n = \\inf T_n$ as in\n[[def-limsup-liminf]].\n\n1. **Monotonicity of the extended bounds under inclusion.** If\n   $A \\subseteq B \\subseteq \\overline{\\mathbb{R}}$ ([[def-extended-reals]]) then\n   $$\\sup A \\le \\sup B \\qquad \\text{and} \\qquad \\inf B \\le \\inf A,$$\n   the four quantities being the extended bounds of [[lem-extended-reals-complete]].\n   No hypothesis is placed on $A$ or $B$; in particular $A$ may be empty.\n2. **The tail bounds are monotone.** $T_m \\subseteq T_n$ whenever $n \\le m$, and\n   hence\n   $$s_m \\le s_n \\qquad \\text{and} \\qquad i_n \\le i_m \\qquad (n \\le m).$$\n   In particular $s_{n+1} \\le s_n$ and $i_n \\le i_{n+1}$ for every $n$, and\n   $i_n \\le s_n$ for every $n$.\n3. **Existence.** $\\limsup_k x_k$ and $\\liminf_k x_k$ exist in\n   $\\overline{\\mathbb{R}}$ for **every** sequence of reals, bounded or not.\n\nClaim 1 is the tool the rest of this page uses whenever two extended suprema are\ncompared. It is proved here, from the definition of a least upper bound, rather\nthan quoted from the suprema page, for the reason given in the remarks below.",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-extended-reals-complete",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\overline{\\mathbb{R}}$ be **any** subset of the extended real\nline ([[def-extended-reals]]) and write $A_{\\mathbb{R}} := A \\cap \\mathbb{R}$.\nThen $A$ has a least upper bound and a greatest lower bound in\n$\\overline{\\mathbb{R}}$ ([[def-upper-bound]]), each unique, which we write\n$\\sup A$ and $\\inf A$ with the ambient set always $\\overline{\\mathbb{R}}$.\nExplicitly:\n\n- $\\sup A = +\\infty$ if $+\\infty \\in A$, or if $A_{\\mathbb{R}}$ is not bounded above in $\\mathbb{R}$;\n- $\\sup A = -\\infty$ if $+\\infty \\notin A$ and $A_{\\mathbb{R}} = \\emptyset$;\n- $\\sup A$ is the real supremum $\\sup A_{\\mathbb{R}}$ ([[def-complete-ordered-field]]) if $+\\infty \\notin A$ and $A_{\\mathbb{R}}$ is nonempty and bounded above in $\\mathbb{R}$;\n\nand dually, with $-\\infty$ and $+\\infty$ exchanged and \"above\" replaced by\n\"below\", for $\\inf A$ ([[def-infimum]], [[thm-infimum-property]]).\n\n**Agreement.** If $A \\subseteq \\mathbb{R}$ is nonempty and bounded above in\n$\\mathbb{R}$ ([[def-bounded-set]]) then $\\sup A$ computed in\n$\\overline{\\mathbb{R}}$ is the real number $\\sup A$ of\n[[def-complete-ordered-field]]; if $A \\subseteq \\mathbb{R}$ is nonempty and\nbounded below then $\\inf A$ computed in $\\overline{\\mathbb{R}}$ is the real\nnumber $\\inf A$ of [[thm-infimum-property]]. In particular the notation is\nunambiguous on the sets for which the real supremum and infimum are defined, and\n$\\sup \\emptyset = -\\infty$, $\\inf \\emptyset = +\\infty$ in\n$\\overline{\\mathbb{R}}$.\n\n**No hypothesis is placed on $A$.** This is exactly what the real supremum cannot\ndo, and it is why every $\\limsup$ statement on this page holds for every sequence\nrather than for bounded ones only. It is also not a weakening of the discipline\nthis library keeps around suprema: the operation supplied here is a *different*\noperation, taken in a *different* ordered set, and the agreement clause records\nexactly where the two coincide.",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-upper-bound",
      "source_section": "Definition",
      "quote": "Let $(P, \\le)$ be a poset ([[def-partial-order]]) and $S \\subseteq P$.\n\nAn element $u \\in P$ is an **upper bound** of $S$ if $s \\le u$ for every\n$s \\in S$.\n\nAn element $u \\in P$ is a **least upper bound** (or **supremum**) of $S$ if $u$\nis an upper bound of $S$ and $u \\le v$ for every upper bound $v$ of $S$. When it\nexists we write $u = \\sup S$.\n\nAn element $u \\in P$ is a **strict upper bound** of $S$ if $s < u$ for every\n$s \\in S$.",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-partial-order",
      "source_section": "Definition",
      "quote": "Let $P$ be a set. A **partial order** on $P$ is a binary relation $\\le$ on $P$\nsuch that, for all $x, y, z \\in P$:\n\n- **(R)** *reflexivity*: $x \\le x$;\n- **(A)** *antisymmetry*: if $x \\le y$ and $y \\le x$, then $x = y$;\n- **(T)** *transitivity*: if $x \\le y$ and $y \\le z$, then $x \\le z$.\n\nThe pair $(P, \\le)$ is a **partially ordered set**, abbreviated **poset**. When\nthe order is clear we write $P$ for the pair.\n\nThe associated **strict order** is defined by\n$$x < y \\quad :\\Longleftrightarrow \\quad x \\le y \\text{ and } x \\ne y.$$\n\nTwo elements $x, y \\in P$ are **comparable** if $x \\le y$ or $y \\le x$, and\n**incomparable** otherwise. A partial order in which every two elements are\ncomparable is a **total order** (equivalently a **linear order**), and $(P, \\le)$\nis then a **totally ordered set**.",
      "uses": [
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
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-extended-reals",
      "source_section": "Definition",
      "quote": "Fix two objects $-\\infty$ and $+\\infty$, distinct from one another and neither of\nthem a real number ([[def-real-numbers]]), and set\n\n$$\\overline{\\mathbb{R}} := \\mathbb{R} \\cup \\{-\\infty, +\\infty\\}.$$\n\nThis is a **new object**, introduced here explicitly with its own order and its\nown partial arithmetic. It is not an enlargement of the field $\\mathbb{R}$, and\nno operation of $\\mathbb{R}$ ([[def-complete-ordered-field]]) is redefined by\nanything below.\n\n**The order.** For $a, b \\in \\overline{\\mathbb{R}}$ declare\n\n$$a \\le b \\quad :\\Longleftrightarrow \\quad a = -\\infty \\ \\text{ or } \\ b = +\\infty \\ \\text{ or } \\ \\big(a, b \\in \\mathbb{R} \\text{ and } a \\le b \\text{ in } \\mathbb{R}\\big),$$\n\nwith $\\mathbb{R}$ ordered as in [[def-real-order]], and write $a < b$ for\n\"$a \\le b$ and $a \\ne b$\" as usual ([[def-partial-order]]).\n\n**$(\\overline{\\mathbb{R}}, \\le)$ is a totally ordered set, and the inclusion of\n$\\mathbb{R}$ preserves and reflects the order.** All four checks are immediate\nfrom the displayed clauses.\n\n- *Reflexive.* For $a = \\pm\\infty$ one of the first two clauses applies; for\n  $a \\in \\mathbb{R}$ the third does, since $a \\le a$ in $\\mathbb{R}$.\n- *Antisymmetric.* Suppose $a \\le b$ and $b \\le a$. If $a = -\\infty$ then\n  $b \\le a$ forces $b = -\\infty$, since the clause $a = +\\infty$ fails and $b, a$\n  are not both real. Symmetrically $b = -\\infty$ forces $a = -\\infty$, and\n  $a = +\\infty$ or $b = +\\infty$ forces the other to be $+\\infty$. In the one\n  remaining situation $a$ and $b$ are both real and antisymmetry is that of\n  $\\mathbb{R}$.\n- *Transitive.* Let $a \\le b \\le c$. If $a = -\\infty$ or $c = +\\infty$ the\n  conclusion is one of the first two clauses. Otherwise $a \\ne -\\infty$ forces,\n  in $a \\le b$, either $b = +\\infty$ or $a, b \\in \\mathbb{R}$; and $c \\ne +\\infty$\n  forces, in $b \\le c$, either $b = -\\infty$ or $b, c \\in \\mathbb{R}$. The value\n  $b = +\\infty$ is incompatible with the second alternative pair, so $b$ is real,\n  hence so are $a$ and $c$, and transitivity is that of $\\mathbb{R}$.\n- *Total.* If $a = -\\infty$ or $b = +\\infty$ then $a \\le b$; if $b = -\\infty$ or\n  $a = +\\infty$ then $b \\le a$; otherwise both are real and the order of\n  $\\mathbb{R}$ is total.\n- *Preserved and reflected.* For $a, b \\in \\mathbb{R}$ the first two clauses fail,\n  so $a \\le b$ in $\\overline{\\mathbb{R}}$ says exactly $a \\le b$ in $\\mathbb{R}$.\n\nIn particular $-\\infty$ is the least and $+\\infty$ the greatest element of\n$\\overline{\\mathbb{R}}$, and $-\\infty < x < +\\infty$ for every $x \\in \\mathbb{R}$.\n\n**Reflection.** Extend negation by\n\n$$-(+\\infty) := -\\infty, \\qquad -(-\\infty) := +\\infty,$$\n\nkeeping the field negative on $\\mathbb{R}$. The resulting map\n$\\nu : \\overline{\\mathbb{R}} \\to \\overline{\\mathbb{R}}$, $\\nu(a) = -a$, satisfies\n$\\nu(\\nu(a)) = a$ and\n\n$$a \\le b \\iff -b \\le -a \\qquad (a, b \\in \\overline{\\mathbb{R}}).$$\n\nFor $a$ and $b$ real this is the elementwise order reversal in $\\mathbb{R}$:\ntranslation invariance ([[lem-of-add-order]]) applied with the constant $-a-b$\nturns $a < b$ into $-b < -a$ and, applied with the constant $a+b$, turns it back,\nwhile $a = b$ holds exactly when $-a = -b$. In every other case both sides are\ndecided by the first two clauses of the order: $a = -\\infty$ makes both sides\ntrue, as does $b = +\\infty$, and if $a \\ne -\\infty$, $b \\ne +\\infty$ and $a, b$\nare not both real then one of $a = +\\infty$, $b = -\\infty$ holds and both sides\nare false.\n\n**Partial addition.** For $a, b \\in \\overline{\\mathbb{R}}$ the sum $a + b$ is\ndefined by\n\n- $a + b$ = the field sum, when $a, b \\in \\mathbb{R}$;\n- $a + b := +\\infty$ when $a = +\\infty$ and $b \\ne -\\infty$, or $b = +\\infty$ and $a \\ne -\\infty$;\n- $a + b := -\\infty$ when $a = -\\infty$ and $b \\ne +\\infty$, or $b = -\\infty$ and $a \\ne +\\infty$;\n\nand **the two sums $(+\\infty) + (-\\infty)$ and $(-\\infty) + (+\\infty)$ are left\nundefined**. Addition is commutative where defined, and\n\n$$-(a + b) = (-a) + (-b),$$\n\neach side being defined exactly when the other is: the excluded pairs\n$\\{+\\infty, -\\infty\\}$ are exchanged by $\\nu$, and the three clauses above are\nexchanged accordingly.\n\n**Partial multiplication.** For $a, b \\in \\overline{\\mathbb{R}}$ the product $ab$\nis defined by\n\n- $ab$ = the field product, when $a, b \\in \\mathbb{R}$;\n- $ab := +\\infty$ when one of $a, b$ is $\\pm\\infty$, the other is $\\ne 0$, and both are $> 0$ or both are $< 0$;\n- $ab := -\\infty$ when one of $a, b$ is $\\pm\\infty$, the other is $\\ne 0$, and one is $> 0$ and the other $< 0$;\n\nand **every product with one factor $0$ and the other $\\pm\\infty$ is left\nundefined**. The comparisons $> 0$ and $< 0$ here are taken in the order above,\nunder which $+\\infty > 0 > -\\infty$.\n\n**Nothing else is defined.** There is no subtraction, no division, no\nexponentiation and no absolute value on $\\overline{\\mathbb{R}}$ in this library;\nwhere such an expression is wanted it is written out in the two defined\noperations, and where a case falls in the undefined list the statement carries an\nexplicit hypothesis saying so.",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-of-abs-value",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \\in F$, with\n$|x|$ the absolute value ([[def-abs-value]]). Then\n\n$$|x| \\ge 0; \\quad |x| = 0 \\iff x = 0; \\quad -|x| \\le x \\le |x|; \\quad |-x| = |x|; \\quad |xy| = |x|\\,|y|;$$\n\nand, for every $c > 0$, one has $|x| < c \\iff -c < x < c$.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-abs-value",
      "source_section": "Definition",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]). The **absolute value** of\n$x \\in F$ is\n\n$$|x| \\;:=\\; \\begin{cases} x & \\text{if } x \\ge 0, \\\\ -x & \\text{if } x < 0. \\end{cases}$$",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L6",
      "source": "cor-of-one-positive",
      "source_section": "Statement",
      "quote": "In any ordered field $F$ with positive cone $P$, the multiplicative identity\nsatisfies $0 < 1$; that is, $1 \\in P$.",
      "uses": [
        "2.1",
        "4.1"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-of-add-order",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and\nlet $a, b, c, d \\in F$.\n\n1. **Translation invariance.** If $a < b$ then $a + c < b + c$.\n2. **Adding inequalities.** If $a < b$ and $c < d$ then $a + c < b + d$.",
      "uses": [
        "2.1",
        "4.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-ordered-field",
      "source_section": "Definition",
      "quote": "An **ordered field** is a field $F$ ([[def-field]]) together with a subset\n$P \\subseteq F$, the set of **positive** elements (the *positive cone*),\nsatisfying:\n\n- **(O1) Trichotomy.** For each $x \\in F$, exactly one of the following holds:\n  $x \\in P$, or $x = 0$, or $-x \\in P$.\n- **(O2) Closure.** If $x, y \\in P$ then $x + y \\in P$ and $x \\cdot y \\in P$.\n\nWe write $x > 0$ for $x \\in P$ (read \"$x$ is positive\"), and define the order by\n\n$$a < b \\;:\\Longleftrightarrow\\; b - a \\in P, \\qquad a \\le b \\;:\\Longleftrightarrow\\; a < b \\text{ or } a = b.$$\n\nThus $a > b$ means $b < a$, and $a \\ge b$ means $b \\le a$. An element $x$ with\n$-x \\in P$ (equivalently $x < 0$) is called **negative**.",
      "uses": [
        "2.1",
        "4.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-complete-ordered-field",
      "source_section": "Definition",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and $S \\subseteq F$.\n\n- $u \\in F$ is an **upper bound** of $S$ if $s \\le u$ for all $s \\in S$; $S$ is\n  **bounded above** if it has an upper bound.\n- $u \\in F$ is a **least upper bound** (or **supremum**, $\\sup S$) of $S$ if $u$\n  is an upper bound of $S$ and $u \\le u'$ for every upper bound $u'$ of $S$.\n\n$F$ is a **complete ordered field** (equivalently, $F$ has the\n**least-upper-bound property**, or is **Dedekind complete**) if every nonempty\n$S \\subseteq F$ that is bounded above has a least upper bound in $F$.",
      "uses": [
        "2.1",
        "4.1"
      ]
    },
    {
      "fact": "L7",
      "source": "thm-convergence-iff-limsup-equals-liminf",
      "source_section": "Statement",
      "quote": "Let $(x_k)$ be a sequence of reals ([[def-sequence]]), with $\\limsup$ and\n$\\liminf$ as in [[def-limsup-liminf]].\n\n1. For $L \\in \\mathbb{R}$: $(x_k)$ converges to $L$ ([[def-real-limit]]) **if and\n   only if** $\\liminf_k x_k = \\limsup_k x_k = L$.\n2. $x_k \\to +\\infty$ ([[def-divergence-to-infinity]]) **if and only if**\n   $\\liminf_k x_k = \\limsup_k x_k = +\\infty$. Moreover $\\liminf_k x_k = +\\infty$\n   on its own already forces $\\limsup_k x_k = +\\infty$.\n3. $x_k \\to -\\infty$ **if and only if** $\\liminf_k x_k = \\limsup_k x_k = -\\infty$,\n   and $\\limsup_k x_k = -\\infty$ on its own already forces\n   $\\liminf_k x_k = -\\infty$.\n\nThe three clauses combine into one statement about the extended line: for\n$L \\in \\overline{\\mathbb{R}}$, the sequence $(x_k)$ converges to $L$ in\n$\\overline{\\mathbb{R}}$ ([[def-extended-limits]]) if and only if\n\n$$\\liminf_{k} x_k = \\limsup_{k} x_k = L .$$\n\nSince $\\liminf_k x_k \\le \\limsup_k x_k$ always ([[lem-liminf-le-limsup]]), the\nsingle equation $\\liminf_k x_k = \\limsup_k x_k$ is therefore equivalent to\nconvergence in $\\overline{\\mathbb{R}}$, and the common value is the limit. A\nsequence that neither converges nor diverges to $\\pm\\infty$ is exactly one for\nwhich the inequality is strict.",
      "uses": [
        "4.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "Every value of the sequence is $1$ or $-1$, since $|s_k| = 1$.",
      "step": "1.1",
      "inputs": [
        "given",
        "L1",
        "L5"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "For every $n \\in \\mathbb{N}$ both values occur at some index $\\ge n$: $s_{e_n} = 1$ with $e_n \\ge n$, and $s_{o_n} = -1$ with $o_n \\ge n$.",
      "step": "1.2",
      "inputs": [
        "given",
        "L1",
        "L2"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "Hence $T_n = \\{1, -1\\}$ for every $n$. Its least upper bound in $\\overline{\\mathbb{R}}$ is $1$, since $1$ bounds both elements from above, using $-1 < 1$, and any upper bound is $\\ge 1$ because $1 \\in T_n$; dually its greatest lower bound is $-1$.",
      "step": "2.1",
      "inputs": [
        "step 1.1",
        "step 1.2",
        "L3",
        "L4",
        "L6"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "Therefore the family of tail suprema is the one-element family $\\{1\\}$, whose greatest lower bound is $1$, so $\\limsup_k s_k = 1$; and the family of tail infima is $\\{-1\\}$, whose least upper bound is $-1$, so $\\liminf_k s_k = -1$.",
      "step": "3.1",
      "inputs": [
        "step 2.1",
        "L3",
        "L4"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "Since $-1 \\ne 1$, there is no $L$ with $\\liminf_k s_k = \\limsup_k s_k = L$, so by [L7] the sequence converges to no real number and diverges to neither $+\\infty$ nor $-\\infty$.",
      "step": "4.1",
      "inputs": [
        "step 3.1",
        "L6",
        "L7"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The ex-limsup-of-alternating-sequence statement has no empty-set or empty-family boundary."
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "The ex-limsup-of-alternating-sequence statement has no zero-valued boundary."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "The statement and step 1.1 explicitly treat the unit or first-index boundary."
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "The ex-limsup-of-alternating-sequence statement has no parameter degeneracy that changes the claim."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "The statement and step 4.1 explicitly treat the interval or extended-real endpoint case."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Step 4.1 makes the relevant selection only after its existence or source-set nonemptiness is established."
    },
    {
      "case": "iff-forward",
      "status": "checked",
      "evidence": "The forward direction is discharged in step 1.1 (with the final synthesis in step 4.1)."
    },
    {
      "case": "iff-reverse",
      "status": "checked",
      "evidence": "The reverse direction is discharged in step 1.1 (with the final synthesis in step 4.1)."
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
    "source": "ex-limsup-of-alternating-sequence",
    "sourcePage": "limsup-and-subsequential-limits-examples",
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
    "source": "ex-limsup-of-alternating-sequence",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "thm-convergence-iff-limsup-equals-liminf",
    "declared_target": "thm-convergence-iff-limsup-equals-liminf",
    "target_statement_provenance": null,
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-limsup-of-alternating-sequence",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "lem-alternating-sequence",
    "declared_target": "lem-alternating-sequence",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-sequences-and-cauchy-completeness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-limsup-of-alternating-sequence",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "lem-index-map-grows",
    "declared_target": "lem-index-map-grows",
    "target_statement_provenance": "ai-altered",
    "targetPage": "sequences-and-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-limsup-of-alternating-sequence",
    "sourcePage": "limsup-and-subsequential-limits-examples",
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
    "source": "ex-limsup-of-alternating-sequence",
    "sourcePage": "limsup-and-subsequential-limits-examples",
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
    "source": "ex-limsup-of-alternating-sequence",
    "sourcePage": "limsup-and-subsequential-limits-examples",
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
    "source": "ex-limsup-of-alternating-sequence",
    "sourcePage": "limsup-and-subsequential-limits-examples",
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
    "source": "ex-limsup-of-alternating-sequence",
    "sourcePage": "limsup-and-subsequential-limits-examples",
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
    "source": "ex-limsup-of-alternating-sequence",
    "sourcePage": "limsup-and-subsequential-limits-examples",
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
    "source": "ex-limsup-of-alternating-sequence",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
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
    "source": "ex-limsup-of-alternating-sequence",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "def-abs-value",
    "declared_target": "def-abs-value",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-limsup-of-alternating-sequence",
    "sourcePage": "limsup-and-subsequential-limits-examples",
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
    "source": "ex-limsup-of-alternating-sequence",
    "sourcePage": "limsup-and-subsequential-limits-examples",
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
    "source": "ex-limsup-of-alternating-sequence",
    "sourcePage": "limsup-and-subsequential-limits-examples",
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
    "source": "ex-limsup-of-alternating-sequence",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "def-complete-ordered-field",
    "declared_target": "def-complete-ordered-field",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Full text of every cited or declared item (22)

### `cex-limsup-product-strict`

````markdown
---
id: cex-limsup-product-strict
kind: counterexample
title: "$x_k = 1 + (-1)^k$, $y_k = 1 + (-1)^{k+1}$ give $\\limsup(x_k y_k) = 0 < 4$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [thm-limsup-submultiplicative, def-limsup-liminf, lem-alternating-sequence, lem-index-map-grows, lem-limsup-exists, lem-extended-reals-complete, def-upper-bound, def-partial-order, def-extended-reals, def-sequence, lem-of-abs-value, def-abs-value, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules, def-ordered-field, def-complete-ordered-field]
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
    - title: "Limit superior and limit inferior (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_superior_and_limit_inferior"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement refuted

That the submultiplicativity of [[thm-limsup-submultiplicative]] can be improved
to an equality: that for all bounded nonnegative sequences $(x_k)$, $(y_k)$ of
reals,
$$\limsup_{k}(x_k y_k) = \Big(\limsup_{k} x_k\Big)\Big(\limsup_{k} y_k\Big).$$

## Facts & Assumptions

**Given:** The alternating sequence $(s_k)$ of [[lem-alternating-sequence]] and the index maps $e, o$; the sequences $x_k := 1 + s_k$ and $y_k := 1 - s_k$, which are the families usually written $1 + (-1)^k$ and $1 + (-1)^{k+1}$; and the tail ranges $T_n$ of [[def-limsup-liminf]].

[L1] The alternating sequence: $|s_k| = 1$ for every $k$, $s_{e_j} = 1$ and $s_{o_j} = -1$, and $e$, $o$ are strictly increasing with $n_j \ge j$ ([[lem-alternating-sequence]], [[lem-index-map-grows]]).

[L2] Limit superior in $\overline{\mathbb{R}}$: existence for every sequence, and the least-upper-bound and greatest-lower-bound descriptions of the tail bounds ([[def-limsup-liminf]], [[lem-limsup-exists]], [[lem-extended-reals-complete]], [[def-upper-bound]], [[def-partial-order]], [[def-extended-reals]], [[def-sequence]]).

[L3] Absolute value: $|t| = 1$ forces $t = 1$ or $t = -1$ ([[lem-of-abs-value]], [[def-abs-value]]).

[L4] Order and field arithmetic: $0 < 1$, so $0 < 2 = 1 + 1$ and $0 < 4 = 2 \cdot 2$; $1 + 1 = 2$, $1 - 1 = 0$, $1 + (-1) = 0$ and $1 - (-1) = 2$; a product with a zero factor is $0$ ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]).

[L5] Submultiplicativity: for bounded nonnegative sequences, $\limsup_k(x_k y_k) \le (\limsup_k x_k)(\limsup_k y_k)$, all three quantities being real ([[thm-limsup-submultiplicative]]).

## Counterexample

**Proof technique:** direct.

1.1 Each $s_k$ is $1$ or $-1$. When $s_k = 1$ the pair $(x_k, y_k)$ is $(2, 0)$, and when $s_k = -1$ it is $(0, 2)$. In either case $0 \le x_k \le 2$ and $0 \le y_k \le 2$, so both sequences are bounded and nonnegative, and $x_k y_k = 0$ because one of the two factors is $0$. [given, L1, L3, L4]

1.2 For every $n$ both cases occur at an index $\ge n$: $s_{e_n} = 1$ with $e_n \ge n$ and $s_{o_n} = -1$ with $o_n \ge n$. [given, L1]

2.1 Hence $T_n(x) = \{0, 2\}$ and $T_n(y) = \{0, 2\}$ for every $n$, each with least upper bound $2$ in $\overline{\mathbb{R}}$, since $2$ bounds both elements and belongs to the set; so $\limsup_k x_k = \limsup_k y_k = 2$. The product sequence is constantly $0$, so $T_n(x y) = \{0\}$ and $\limsup_k (x_k y_k) = 0$. [step 1.1, step 1.2, L2, L4]

3.1 The hypotheses of [L5] are met by step 1.1, and the inequality it gives reads $0 \le 2 \cdot 2 = 4$. Since $0 < 4$, it is strict, so the equality asserted above fails for this pair and the refuted claim is false. [step 2.1, step 1.1, L4, L5] ∎

## Remarks

- **The two sequences vanish at complementary indices.** Wherever $x_k$ attains
  its maximum $2$, its partner $y_k$ is $0$, so the product is $0$ everywhere and
  the two limit superiors are attained along disjoint sets of indices. This is the
  multiplicative form of the phase mismatch behind
  [[cex-limsup-subadditivity-strict]].

- **Nonnegativity and boundedness are satisfied, so the failure is not
  degenerate.** Both hypotheses of [[thm-limsup-submultiplicative]] hold, and the
  right-hand side is an honest product of real numbers; the inequality simply
  cannot be reversed.

- **The gap can be made total.** Here the product sequence is identically zero
  while the bound is $4$, so no fraction of the bound is achieved. Equality does
  hold when one of the two sequences converges, for the same reason as in the
  additive case.
````

### `cex-limsup-subadditivity-strict`

````markdown
---
id: cex-limsup-subadditivity-strict
kind: counterexample
title: "$x_k = (-1)^k$, $y_k = (-1)^{k+1}$ give $\\limsup(x_k + y_k) = 0 < 2 = \\limsup x_k + \\limsup y_k$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [fs-limsup-additive, thm-limsup-subadditive, def-limsup-liminf, lem-alternating-sequence, def-extended-reals, def-sequence, cor-of-one-positive, lem-of-add-order, def-ordered-field, def-complete-ordered-field]
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
    - title: "Limit superior and limit inferior (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_superior_and_limit_inferior"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "N. Donaldson, Math 140A: Real Analysis notes"
      url: "https://www.math.uci.edu/~ndonalds/math140a/notes.pdf"
pipeline_run: null
---

## Statement refuted

That the subadditivity of [[thm-limsup-subadditive]] can be improved to an
equality: that for all sequences $(x_k)$, $(y_k)$ of reals whose limit superiors
have a defined sum,
$\limsup_k(x_k + y_k) = \limsup_k x_k + \limsup_k y_k$. The claim is recorded and
refuted as [[fs-limsup-additive]]; this item is the named witness.

## Facts & Assumptions

**Given:** The alternating sequence $(s_k)$ of [[lem-alternating-sequence]]; the sequences $x_k := s_k$ and $y_k := -s_k$, which are the families usually written $(-1)^k$ and $(-1)^{k+1}$.

[L1] For this pair of sequences: $x_k + y_k = 0$ for every $k$, $\limsup_k x_k = 1$, $\limsup_k y_k = 1$ and $\limsup_k(x_k + y_k) = 0$ ([[fs-limsup-additive]]).

[L2] Subadditivity: $\limsup_k(x_k + y_k) \le \limsup_k x_k + \limsup_k y_k$ whenever the right-hand side is defined ([[thm-limsup-subadditive]]).

[L3] Limit superior in $\overline{\mathbb{R}}$, and the fact that a sum of two real numbers is the field sum ([[def-limsup-liminf]], [[def-extended-reals]], [[def-sequence]]).

[L4] Order arithmetic: $0 < 1$, hence $0 < 1 + 1 = 2$ and $0 \ne 2$ ([[cor-of-one-positive]], [[lem-of-add-order]], [[def-ordered-field]], [[def-complete-ordered-field]]).

## Counterexample

**Proof technique:** direct.

1.1 The two sequences $x_k = s_k$ and $y_k = -s_k$ are sequences of reals whose termwise sum is constantly $0$, and their limit superiors are both the real number $1$. [given, L1, L3]

1.2 Both limit superiors being real, their sum is defined in $\overline{\mathbb{R}}$ and equals the field sum $1 + 1 = 2$. [given, L1, L3, L4]

2.1 The limit superior of the sum sequence is $0$, while the sum of the limit superiors is $2$, and $0 < 2$; so the inequality of [L2] holds here and is strict, and the equality asserted by the refuted claim fails. [step 1.1, step 1.2, L1, L2, L4] ∎

## Remarks

- **The gap is as large as the oscillation.** Each sequence oscillates between
  $-1$ and $1$, and the two oscillations are exactly out of phase, so the sum
  never sees either peak. Replacing $y$ by a sequence in phase with $x$, for
  instance $y = x$, restores equality; the failure is a statement about the
  relative phase, not about the sizes involved.

- **Both hypotheses of [[thm-limsup-subadditive]] hold here.** The two limit
  superiors are real, so their sum is defined, and no boundedness is needed for
  that theorem at all. The counterexample therefore refutes the equality on the
  theorem's own terms, not by exploiting a degenerate case.

- **The dual statement fails in the dual way.** For the same pair,
  $\liminf_k x_k = \liminf_k y_k = -1$ while $\liminf_k(x_k + y_k) = 0$, so the
  $\liminf$ inequality $\liminf_k(x_k+y_k) \ge \liminf_k x_k + \liminf_k y_k$ of
  [[thm-limsup-subadditive]] is also strict here, reading $0 \ge -2$.
````

### `cor-liminf-is-least-subsequential-limit`

````markdown
---
id: cor-liminf-is-least-subsequential-limit
kind: corollary
title: "The limit inferior is the least subsequential limit in $\\overline{\\mathbb{R}}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-limsup-is-greatest-subsequential-limit, lem-limsup-reflection, def-limsup-liminf, def-subsequential-limit, def-extended-limits, def-extended-reals, thm-algebra-of-limits, def-divergence-to-infinity, def-real-limit, def-sequence, lem-of-add-order]
justified_by: []
aliases: []
landmark: false
short: "$\\liminf = \\min \\overline{\\operatorname{SL}}$"
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
    - title: "Subsequential limit (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subsequential_limit"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.17)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "N. Donaldson, Math 140A: Real Analysis notes"
      url: "https://www.math.uci.edu/~ndonalds/math140a/notes.pdf"
pipeline_run: null
---

## Statement

Let $(x_k)$ be a sequence of reals ([[def-sequence]]). Then
$\liminf_{k} x_k \in \overline{\operatorname{SL}}(x)$ and
$\liminf_{k} x_k \le L$ for every $L \in \overline{\operatorname{SL}}(x)$
([[def-limsup-liminf]], [[def-extended-limits]]).

So the extended subsequential limit set of any real sequence has a **least**
element as well as a greatest one, and the two are
$\liminf_k x_k$ and $\limsup_k x_k$ respectively
([[thm-limsup-is-greatest-subsequential-limit]]). Every extended subsequential
limit lies between them.

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals, and its reflection $y_k := -x_k$.

[L1] Reflection on $\overline{\mathbb{R}}$: $a \mapsto -a$ satisfies $-(-a) = a$ and $a \le b$ if and only if $-b \le -a$ ([[def-extended-reals]]).

[L2] $\limsup_k(-x_k) = -\liminf_k x_k$ ([[lem-limsup-reflection]]).

[L3] For every real sequence the extended subsequential limit set is nonempty and has greatest element the limit superior ([[thm-limsup-is-greatest-subsequential-limit]]).

[L4] Convergence in $\overline{\mathbb{R}}$, subsequences and the set $\overline{\operatorname{SL}}$ ([[def-extended-limits]], [[def-subsequential-limit]], [[def-sequence]], [[def-real-limit]]).

[L5] Scalar multiples of convergent sequences: $z_j \to z$ in $\mathbb{R}$ implies $c z_j \to c z$ ([[thm-algebra-of-limits]]).

[L6] Divergence to $\pm\infty$, and order reversal: $z_j > M$ is equivalent to $-z_j < -M$, and $M$ runs over all reals exactly when $-M$ does ([[def-divergence-to-infinity]], [[lem-of-add-order]]).

[L7] Limit superior and limit inferior of a real sequence ([[def-limsup-liminf]]).

## Proof

**Proof technique:** direct.

1.1 Put $y_k := -x_k$, a sequence of reals; then $-y_k = x_k$ for every $k$, by the involution property of the reflection. [given, L1, L4]

1.2 Let $L \in \overline{\mathbb{R}}$ and let $n : \mathbb{N} \to \mathbb{N}$ be strictly increasing with $(x_{n_j})$ converging to $L$ in $\overline{\mathbb{R}}$. [given, L4]

1.3 By [L3] applied to the sequence $(y_k)$, the set $\overline{\operatorname{SL}}(y)$ is nonempty and has greatest element $N_0 := \limsup_k y_k$, and $N_0 = -\liminf_k x_k$ by [L2]. [given, L2, L3, L7]

2.1 The reflected subsequence $(y_{n_j}) = (-x_{n_j})$ converges to $-L$ in $\overline{\mathbb{R}}$. If $L$ is real this is the scalar rule with $c = -1$. If $L = +\infty$ then for every real $M$ there is $J$ with $x_{n_j} > M$ for all $j \ge J$, hence $y_{n_j} < -M$ for all such $j$; since $-M$ runs over all reals as $M$ does, $y_{n_j} \to -\infty = -L$. If $L = -\infty$ the same argument with the inequalities exchanged gives $y_{n_j} \to +\infty = -L$. [step 1.2, L1, L4, L5, L6]

3.1 Hence $L \in \overline{\operatorname{SL}}(x)$ implies $-L \in \overline{\operatorname{SL}}(y)$, the same index map serving. Applying that implication to the sequence $(y_k)$, whose reflection is $(x_k)$, gives conversely that $N \in \overline{\operatorname{SL}}(y)$ implies $-N \in \overline{\operatorname{SL}}(x)$. So $\overline{\operatorname{SL}}(x) = \{\, -N : N \in \overline{\operatorname{SL}}(y) \,\}$. [step 2.1, step 1.1, L1, L4]

4.1 Therefore $-N_0 \in \overline{\operatorname{SL}}(x)$, and $-N_0 = -(-\liminf_k x_k) = \liminf_k x_k$; and for any $L \in \overline{\operatorname{SL}}(x)$ the element $-L$ lies in $\overline{\operatorname{SL}}(y)$, so $-L \le N_0$ by maximality, whence $\liminf_k x_k = -N_0 \le L$ by order reversal. Thus $\liminf_k x_k$ is the least element of $\overline{\operatorname{SL}}(x)$. [step 3.1, step 1.3, L1, L2] ∎

## Remarks

- **Nothing is reconstructed.** The subsequence realising $\liminf_k x_k$ is the
  one produced by [[thm-limsup-is-greatest-subsequential-limit]] for the reflected
  sequence, read back through $y \mapsto -y$. That is the whole point of proving
  [[lem-limsup-reflection]] first: the recursion and the well-ordering argument
  are done once.

- **Combined with the greatest element, this brackets every subsequential
  limit.** For any real sequence and any $L \in \overline{\operatorname{SL}}(x)$,
  $$\liminf_{k} x_k \;\le\; L \;\le\; \limsup_{k} x_k,$$
  which contains [[lem-liminf-le-limsup]] as the special case obtained by taking
  for $L$ either endpoint, both of which are in the set.

- **The real subsequential limit set inherits the statement only when the value is
  finite.** If $\liminf_k x_k$ is a real number it is the least element of
  $\operatorname{SL}(x)$ as well, since the two sets agree on $\mathbb{R}$
  ([[def-extended-limits]]). If it is $-\infty$, then $\operatorname{SL}(x)$ may
  have no least element at all, or be empty.
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

### `def-abs-value`

````markdown
---
id: def-abs-value
kind: definition
title: "Absolute value in an ordered field"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-ordered-field]
aliases: []
landmark: false
short: "|x|"
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
    - title: "Dartmouth College analysis notes: Absolute value"
      url: "https://math.dartmouth.edu/~m63w21/lecture-m63-02.pdf"
pipeline_run: null
---

## Definition

Let $F$ be an ordered field ([[def-ordered-field]]). The **absolute value** of
$x \in F$ is

$$|x| \;:=\; \begin{cases} x & \text{if } x \ge 0, \\ -x & \text{if } x < 0. \end{cases}$$

## Remarks

- The distance between $x$ and $y$ is $|x - y|$.
- The basic algebraic properties ($|x| \ge 0$, $|x| = 0 \iff x = 0$,
  $|xy| = |x|\,|y|$, and the characterisation $|x| < c \iff -c < x < c$) are
  established in [[lem-of-abs-value]]; the triangle inequality is
  [[lem-of-triangle-inequality]].
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

### `ex-two-subsequential-limits`

````markdown
---
id: ex-two-subsequential-limits
kind: example
title: "The sequence $(-1)^k(1 + 1/k)$ is bounded with subsequential limit set exactly $\\{-1, 1\\}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-alternating-sequence, def-subsequential-limit, thm-algebra-of-limits, lem-subsequence-inherits-limit, lem-limit-abs, lem-limit-unique, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, lem-of-naturals-positive, lem-of-abs-value, def-abs-value, def-sequence, def-real-limit, def-complete-ordered-field, def-ordered-field]
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
    - title: "Subsequential limit (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subsequential_limit"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.6"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "MIT 18.100A, Lecture 9: Limsup, Liminf, and the Bolzano-Weierstrass Theorem"
      url: "https://ocw.mit.edu/courses/18-100a-real-analysis-fall-2020/mit18_100af20_lec92.pdf"
    - title: "J. Lebl, Basic Analysis I, Limit superior, limit inferior, and Bolzano-Weierstrass"
      url: "https://www.jirka.org/ra/html/sec_bw.html"
---

## Example

For $k \ge 1$ let

$$x_k = (-1)^k\Big(1 + \frac{1}{k}\Big).$$

Then $(x_k)$ is bounded, with $1 < |x_k| \le 2$ at every index, it does not
converge, and its subsequential limit set ([[def-subsequential-limit]]) is
exactly

$$\operatorname{SL}(x) = \{-1, 1\}.$$

The example separates two things that a first reading of Bolzano-Weierstrass can
run together. A bounded sequence must have a subsequential limit; it may have
several; and having several is exactly what stops it converging. Here there are
two, and neither is a value of the sequence, since $|x_k| > 1$ always.

**Indexing and the sign.** Written on $\mathbb{N}$ the sequence is
$u_j := t_j\big(1 + 1/(j+1)\big)$ for $j \in \mathbb{N}$, where $t_j := -s_j$
and $(s_k)$ is the alternating sequence of [[lem-alternating-sequence]]. Since
$s_{\sigma(j)} = -s_j$, the sequence $(t_j)$ is $j \mapsto s_{j+1}$, so
$u_j = x_{j+1}$ and $(u_j)$ is the family above under the substitution
$k = j+1$. The verification uses $(u_j)$.

## Facts & Assumptions

**Given:** The alternating sequence $(s_k)$ and the index maps $e, o$ of [[lem-alternating-sequence]]; the sequence $t_j := -s_j$; the sequence $p_j := 1 + 1/(j+1)$, where $j+1$ denotes the canonical natural $(j+1)\cdot 1_{\mathbb{R}}$; and $u_j := t_j\,p_j$ ([[def-sequence]]).

[L1] The alternating sequence: $|s_k| = 1$ for every $k$, $s_{e_i} = 1$ and $s_{o_i} = -1$ for every $i$, and $e$ and $o$ are strictly increasing ([[lem-alternating-sequence]]).

[L2] Canonical naturals: $n \cdot 1_{\mathbb{R}} > 0$ for $n \ge 1$, and $m \mapsto m \cdot 1_{\mathbb{R}}$ is strictly increasing ([[lem-of-naturals-positive]]).

[L3] Reciprocals: $a > 0$ gives $1/a > 0$, and $0 < a \le b$ gives $0 < 1/b \le 1/a$ ([[lem-of-inverse-positive]]).

[L4] Reciprocal Archimedean property: for every real $\varepsilon > 0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

[L5] Absolute value: $|ab| = |a||b|$, $|t| \ge 0$, $|t| = t$ for $t \ge 0$, and $|t| = 1$ forces $t = 1$ or $t = -1$ ([[lem-of-abs-value]], [[def-abs-value]]).

[L6] Algebra of limits ([[thm-algebra-of-limits]]); subsequences inherit the limit ([[lem-subsequence-inherits-limit]]); the absolute value is compatible with limits ([[lem-limit-abs]]); limits are unique ([[lem-limit-unique]]).

[L7] Convergence and boundedness of a sequence of reals; it suffices to test a real $\varepsilon > 0$ ([[def-real-limit]], [[def-sequence]]).

[L8] Subsequential limits: $L \in \operatorname{SL}(u)$ exactly when some subsequence of $(u_j)$ converges to $L$ ([[def-subsequential-limit]]).

[L9] Trichotomy of the order on $\mathbb{R}$ ([[def-complete-ordered-field]], [[def-ordered-field]]).

## Verification

**Proof technique:** direct.

1.1 For every $j$: $j + 1 \ge 1$ gives $0 < 1/(j+1) \le 1$, so $1 < p_j \le 2$; and $|t_j| = |-s_j| = |s_j| = 1$. [given, L1, L2, L3, L5]

1.2 The sequence $(p_j)$ converges to $1$: given a real $\varepsilon > 0$, [L4] supplies a natural $n \ge 1$ with $1/n < \varepsilon$, and for $j \ge n$ we have $0 < 1/(j+1) \le 1/n < \varepsilon$, so $|p_j - 1| = 1/(j+1) < \varepsilon$. [given, L2, L3, L4, L5, L7]

2.1 $(u_j)$ is bounded, with $1 < |u_j| = |t_j|\,p_j = p_j \le 2$ at every index. [step 1.1, L5, L7]

2.2 Along the even index map: $t_{e_i} = -s_{e_i} = -1$, so $u_{e_i} = -p_{e_i}$; since $e$ is strictly increasing, $(p_{e_i})_i$ is a subsequence of $(p_j)$ and so converges to $1$, whence $u_{e_i} \to -1$. [step 1.2, L1, L6, L8]

2.3 Along the odd index map: $t_{o_i} = -s_{o_i} = 1$, so $u_{o_i} = p_{o_i} \to 1$ by the same argument. [step 1.2, L1, L6, L8]

3.1 Hence $-1 \in \operatorname{SL}(u)$ and $1 \in \operatorname{SL}(u)$. [step 2.2, step 2.3, L8]

3.2 Conversely, let $L \in \operatorname{SL}(u)$ and fix a strictly increasing $n$ with $u_{n_i} \to L$. Then $|u_{n_i}| \to |L|$; but $|u_{n_i}| = p_{n_i}$ by step 2.1, and $(p_{n_i})_i$ is a subsequence of $(p_j)$, so it converges to $1$. [step 1.2, step 2.1, L6, L8]

4.1 By uniqueness of limits $|L| = 1$, so $L = 1$ or $L = -1$. [step 3.2, L5, L6, L9]

5.1 Combining, $\operatorname{SL}(u) = \{-1, 1\}$; and $(u_j)$ does not converge, since a convergent sequence has exactly one subsequential limit. Bounded by step 2.1, the sequence $(u_j)$, that is $(x_k)$, therefore has the asserted properties. [step 2.1, step 3.1, step 4.1, L6, L8] ∎

## Remarks

- **Where Bolzano-Weierstrass sits.** [[thm-bolzano-weierstrass]] guarantees that
  a bounded sequence has *at least one* subsequential limit; this example computes
  the whole set and finds two. Nothing above uses the theorem, since the two
  subsequential limits are exhibited directly, and that is the honest order of
  business: an existence theorem is not needed once a witness is in hand.

- **The perturbation is what makes the example more than the alternating
  sequence.** With $p_j$ replaced by the constant $1$ the sequence is
  $\pm 1$ alternating and each subsequential limit is attained infinitely often.
  Here $|x_k| > 1$ at every index, so neither subsequential limit is ever a value
  of the sequence. Subsequential limits are limits, not values.

- **The converse direction is where the partition earns its keep.** Step 4.1 rules
  out every other candidate by taking absolute values, which collapses the sign
  and leaves the single null perturbation to handle. The alternative, splitting an
  arbitrary subsequence according to how many of its indices are even, needs the
  disjointness half of [[lem-alternating-sequence]] and is longer.

- **This is the standard example of a bounded divergent sequence with a
  computable $\limsup$ and $\liminf$**, namely $1$ and $-1$. Those notions are
  developed on the next page of the track, and this item is written so that it can
  be cited there without change.
````

### `fs-limsup-additive`

````markdown
---
id: fs-limsup-additive
kind: false-statement
title: "FALSE: $\\limsup(x_k + y_k) = \\limsup x_k + \\limsup y_k$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-limsup-subadditive, def-limsup-liminf, def-extended-reals, lem-alternating-sequence, lem-index-map-grows, lem-limsup-exists, lem-extended-reals-complete, def-upper-bound, def-partial-order, def-sequence, lem-of-abs-value, def-abs-value, cor-of-one-positive, lem-of-add-order, def-ordered-field, def-complete-ordered-field]
justified_by: []
forward_refs: [cex-limsup-subadditivity-strict]
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
    - title: "Limit superior and limit inferior (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_superior_and_limit_inferior"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

**False claim:** for all sequences $(x_k)$, $(y_k)$ of reals ([[def-sequence]])
whose limit superiors have a defined sum in $\overline{\mathbb{R}}$
([[def-extended-reals]]),

$$\limsup_{k}(x_k + y_k) \;=\; \limsup_{k} x_k + \limsup_{k} y_k .$$

The corresponding statement with $=$ replaced by $\le$ is true and is
[[thm-limsup-subadditive]]. The claim above is what one gets by strengthening
that inequality to an equality, and it fails: the two sides can differ by as much
as the whole oscillation of the sequences, because the two limit superiors may be
attained along different sets of indices while the sum of the sequences never
sees either of them.

The witness is $x_k = (-1)^k$ and $y_k = -(-1)^k$, refuted below; it is recorded
separately as a named counterexample on the companion page.

## Facts & Assumptions

**Given:** The alternating sequence $(s_k)$ and the index maps $e, o$ of [[lem-alternating-sequence]]; the sequences $x_k := s_k$ and $y_k := -s_k$; and the tail ranges and extended tail bounds of [[def-limsup-liminf]].

[L1] The alternating sequence: $|s_k| = 1$ for every $k$, $s_{e_j} = 1$ and $s_{o_j} = -1$ for every $j$, and $e$, $o$ are strictly increasing ([[lem-alternating-sequence]]).

[L2] A strictly increasing index map satisfies $n_j \ge j$ ([[lem-index-map-grows]]).

[L3] Limit superior: $\limsup_k z_k = \inf\{\sup T_n(z)\}$ with $T_n(z) = \{z_k : k \ge n\}$; all these bounds exist in $\overline{\mathbb{R}}$, $\sup$ being the least upper bound and $\inf$ the greatest lower bound ([[def-limsup-liminf]], [[lem-limsup-exists]], [[lem-extended-reals-complete]], [[def-upper-bound]], [[def-partial-order]]).

[L4] The order on $\overline{\mathbb{R}}$ is total and restricts on $\mathbb{R}$ to the order of $\mathbb{R}$; $\pm\infty$ are not real ([[def-extended-reals]]).

[L5] Absolute value: $|t| = 1$ forces $t = 1$ or $t = -1$ ([[lem-of-abs-value]], [[def-abs-value]]).

[L6] Order arithmetic: $0 < 1$, so $-1 < 1$ and $0 < 1 + 1 = 2$; in particular $0 \ne 2$ ([[cor-of-one-positive]], [[lem-of-add-order]], [[def-ordered-field]], [[def-complete-ordered-field]]).

[L7] Subadditivity: $\limsup_k(z_k + w_k) \le \limsup_k z_k + \limsup_k w_k$ whenever the right-hand side is defined ([[thm-limsup-subadditive]]).

[L8] The refuted claim: for all sequences whose limit superiors have a defined sum, $\limsup_k(z_k + w_k) = \limsup_k z_k + \limsup_k w_k$.

## Refutation

**Proof technique:** direct.

1.1 The sequences $x_k = s_k$ and $y_k = -s_k$ are sequences of reals, and $x_k + y_k = s_k + (-s_k) = 0$ for every $k$. [given, L1]

1.2 Every value $s_k$ is $1$ or $-1$, since $|s_k| = 1$; and for every $n$ both values occur at an index $\ge n$, since $s_{e_n} = 1$ with $e_n \ge n$ and $s_{o_n} = -1$ with $o_n \ge n$. [given, L1, L2, L5]

2.1 Hence $T_n(x) = \{1, -1\}$ for every $n$. Its least upper bound in $\overline{\mathbb{R}}$ is $1$: the element $1$ bounds both $1$ and $-1$ from above because $-1 < 1$, and any upper bound $u$ satisfies $1 \le u$ because $1 \in T_n(x)$. So $\sup T_n(x) = 1$ for every $n$, and $\limsup_k x_k$ is the greatest lower bound of the one-element family $\{1\}$, namely $1$. [step 1.2, L3, L4, L6]

2.2 The sequence $y_k = -s_k$ takes the value $1$ at every $o_n$ and the value $-1$ at every $e_n$, and takes no other value, so $T_n(y) = \{1, -1\}$ for every $n$ as well, and the same computation gives $\limsup_k y_k = 1$. [step 1.2, L1, L2, L3, L4, L5, L6]

2.3 The sum sequence is constantly $0$, so $T_n(x+y) = \{0\}$, whose least upper bound is $0$, and $\limsup_k(x_k + y_k) = 0$. [step 1.1, L3, L4]

3.1 Both limit superiors are the real number $1$, so their sum is defined and equals $1 + 1 = 2$, and the claim asserts $0 = 2$ for this pair. But $0 < 2$, so $0 \ne 2$ and the claim fails. [step 2.1, step 2.2, step 2.3, L6, L8]

4.1 The claim is therefore false. What survives is the inequality of [L7], which for this pair reads $0 \le 2$ and is strict. [step 3.1, L7, L8] ∎

## Remarks

- **Which half of the equality fails.** Only $\ge$; the inequality $\le$ is a
  theorem ([[thm-limsup-subadditive]]). So the claim is not wrong by accident of
  the witness: the reverse inequality has no proof, and this pair shows it has no
  proof because it is false.

- **The mechanism is a mismatch of index sets.** $\limsup_k x_k = 1$ is achieved
  along the even indices and $\limsup_k y_k = 1$ along the odd ones. The sum can
  only see both at once if some index is large in both sequences simultaneously,
  and here no index is: where $x_k = 1$ one has $y_k = -1$. Equality does hold
  when one of the two sequences converges, because then its limit superior is
  achieved along *every* subsequence.

- **The witness is named on the companion page** as
  [[cex-limsup-subadditivity-strict]], which quotes the computation made here.

- **The defined-sum hypothesis is inherited from [[thm-limsup-subadditive]] and is
  not what fails here.** Both limit superiors in the witness are real, so the
  right-hand side is a perfectly good real number; the equality is false anyway.
````

### `lem-alternating-sequence`

````markdown
---
id: lem-alternating-sequence
kind: lemma
title: "The even and odd index maps and the alternating sequence: strictly increasing $e, o$ with $\\mathbb{N}$ their disjoint union, and the unique $(s_k)$ with $s_0 = 1$, $s_{\\sigma(k)} = -s_k$, which satisfies $|s_k| = 1$, $s \\circ e \\equiv 1$ and $s \\circ o \\equiv -1$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-recursion, thm-induction-principle, lem-index-map-grows, def-sequence, def-natural-numbers, def-nat-addition, def-nat-order, thm-nat-linear-order, lem-nat-successor-neq-self, def-abs-value, lem-of-abs-value, def-real-order, cor-of-one-positive, lem-of-add-order, def-complete-ordered-field, def-ordered-field, def-field]
justified_by: []
forward_refs: [ex-two-subsequential-limits, cex-unbounded-with-convergent-subsequence]
aliases: []
landmark: false
proof_strategy: induction
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
    - title: "Parity (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Parity_(mathematics)"
    - title: "Subsequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subsequence"
    - title: "T. Tao, Analysis I, 3rd ed., §2.1 and §6.4 (recursive definitions; subsequences)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
---

## Statement

Let $\sigma$ be the successor on $\mathbb{N}$ ([[def-natural-numbers]]). There are
functions $e, o : \mathbb{N} \to \mathbb{N}$ and a sequence $(s_k)$ of reals
([[def-sequence]]) with the following properties.

1. **The index maps.** $e$ is the unique function with
   $e_0 = 0$ and $e_{\sigma(j)} = \sigma(\sigma(e_j))$, and $o$ the unique
   function with $o_0 = \sigma(0)$ and $o_{\sigma(j)} = \sigma(\sigma(o_j))$.
   Both are **strictly increasing**.
2. **The partition.** $\mathbb{N}$ is the **disjoint union** of the ranges of $e$
   and of $o$: every natural number is $e_i$ for exactly one $i$ or $o_i$ for
   exactly one $i$, and never both.
3. **The alternating sequence.** $(s_k)$ is the **unique** sequence of reals with
   $$s_0 = 1, \qquad s_{\sigma(k)} = -s_k \quad (k \in \mathbb{N}).$$
4. **Its values.** $|s_k| = 1$ for every $k$, so $(s_k)$ is bounded; and
   $$s_{e_j} = 1, \qquad s_{o_j} = -1 \qquad (j \in \mathbb{N}),$$
   that is $s \circ e$ is constantly $1$ and $s \circ o$ constantly $-1$.

This is the sequence usually written $s_k = (-1)^k$, with $e_j = 2j$ and
$o_j = 2j+1$, presented by the recursions that its proofs actually use. It is
collected here once because three separate items on this page and its companion
need an alternating or interleaved witness, and rebuilding the recursion inside
each of them is what this lemma exists to prevent.

## Facts & Assumptions

**Given:** By the recursion theorem ([[thm-recursion]]) applied to the set $\mathbb{R}$, the element $1$ and the function $u \mapsto -u$, the unique sequence $(s_k)$ of reals with $s_0 = 1$ and $s_{\sigma(k)} = -s_k$; applied to the set $\mathbb{N}$, the element $0$ and the function $i \mapsto \sigma(\sigma(i))$, the unique $e : \mathbb{N} \to \mathbb{N}$ with $e_0 = 0$ and $e_{\sigma(j)} = \sigma(\sigma(e_j))$; and applied to $\mathbb{N}$, the element $\sigma(0)$ and the same function, the unique $o : \mathbb{N} \to \mathbb{N}$ with $o_0 = \sigma(0)$ and $o_{\sigma(j)} = \sigma(\sigma(o_j))$ ([[def-natural-numbers]], [[def-sequence]]).

[L1] Recursion theorem, including its uniqueness clause ([[thm-recursion]]).

[L2] Induction principle ([[thm-induction-principle]]).

[L3] Order on $\mathbb{N}$: $i < \sigma(i)$ for every $i$, since $\sigma(i) = i + 1$ gives $i \le \sigma(i)$ and $\sigma(i) \ne i$; and the order is transitive and total ([[def-nat-order]], [[def-nat-addition]], [[lem-nat-successor-neq-self]], [[thm-nat-linear-order]]).

[L4] Consecutive comparisons suffice: if $n_i < n_{\sigma(i)}$ for every $i$ then $n$ is strictly increasing ([[lem-index-map-grows]]).

[L5] Absolute value and field arithmetic: $|-u| = |u|$ ([[lem-of-abs-value]]); $|v| = v$ whenever $v \ge 0$ ([[def-abs-value]], [[def-real-order]]); and $-(-u) = u$ ([[def-field]]).

[L6] Order in $\mathbb{R}$: $0 < 1$ ([[cor-of-one-positive]]), sums of positives are positive and adding a constant preserves the order ([[lem-of-add-order]], [[def-complete-ordered-field]], [[def-ordered-field]]), so $1 - (-1) = 1 + 1 > 0$ and hence $-1 < 1$; in particular $1 \ne -1$.

## Proof

**Proof technique:** induction.

1.1 Base case for claim 4: $|s_0| = |1| = 1$, since $1 > 0$ makes $|1| = 1$. [given, L5, L6, base]

1.2 Inductive hypothesis: fix $k \in \mathbb{N}$ and assume $|s_k| = 1$. [ih]

1.3 Both index maps satisfy consecutive strict comparisons: $e_j < \sigma(e_j) < \sigma(\sigma(e_j)) = e_{\sigma(j)}$, and likewise $o_j < o_{\sigma(j)}$, so $e$ and $o$ are strictly increasing and claim 1 holds, its uniqueness part being the uniqueness clause of the recursion theorem. [given, L1, L3, L4]

1.4 By induction, $s_{e_j} = 1$ for every $j$: the base case is $s_{e_0} = s_0 = 1$, and if $s_{e_j} = 1$ then $s_{e_{\sigma(j)}} = s_{\sigma(\sigma(e_j))} = -s_{\sigma(e_j)} = -(-s_{e_j}) = s_{e_j} = 1$. [given, L1, L2, L5]

1.5 By induction, $s_{o_j} = -1$ for every $j$: the base case is $s_{o_0} = s_{\sigma(0)} = -s_0 = -1$, and if $s_{o_j} = -1$ then $s_{o_{\sigma(j)}} = s_{\sigma(\sigma(o_j))} = -(-s_{o_j}) = s_{o_j} = -1$. [given, L1, L2, L5]

1.6 By induction on $n$, every natural number satisfies: either $n = e_i$ and $\sigma(n) = o_i$ for some $i$, or $n = o_i$ and $\sigma(n) = e_{\sigma(i)}$ for some $i$. The base case is $0 = e_0$ with $\sigma(0) = o_0$. For the successor step, if $n = e_i$ and $\sigma(n) = o_i$ then $\sigma(n) = o_i$ and $\sigma(\sigma(n)) = \sigma(\sigma(e_i)) = e_{\sigma(i)}$, which is the second alternative at $\sigma(n)$; and if $n = o_i$ and $\sigma(n) = e_{\sigma(i)}$ then $\sigma(n) = e_{\sigma(i)}$ and $\sigma(\sigma(n)) = \sigma(\sigma(o_i)) = o_{\sigma(i)}$, which is the first alternative at $\sigma(n)$. [given, L1, L2]

1.7 The sequence $(s_k)$ is the unique sequence of reals with $s_0 = 1$ and $s_{\sigma(k)} = -s_k$, by the uniqueness clause of the recursion theorem: this is claim 3. [given, L1]

2.1 Successor step for claim 4: $|s_{\sigma(k)}| = |-s_k| = |s_k| = 1$. [step 1.2, L5]

2.2 In particular every natural number lies in the range of $e$ or in the range of $o$, since each alternative of step 1.6 exhibits $n$ as such a value. [step 1.6]

2.3 The two ranges are disjoint: if $e_i = o_j$ for some $i, j$ then $1 = s_{e_i} = s_{o_j} = -1$, contradicting $1 \ne -1$. [step 1.4, step 1.5, L6]

2.4 Each of $e$ and $o$ is injective, being strictly increasing, so a natural number in the range of $e$ is $e_i$ for exactly one $i$, and likewise for $o$. [step 1.3, L3]

3.1 By the induction principle, $|s_k| = 1$ for every $k \in \mathbb{N}$; hence $|s_k| \le 1$ at every index and $(s_k)$ is bounded. Together with steps 1.4 and 1.5 this is claim 4. [step 1.1, step 2.1, step 1.4, step 1.5, L2]

4.1 Claim 2 follows: by step 2.2 every natural is in one of the two ranges, by step 2.3 not in both, and by step 2.4 the index realising it is unique. Claims 1, 2, 3 and 4 are therefore all established. [step 2.2, step 2.3, step 3.1, step 2.4, step 1.3, step 1.7, discharge-induction] ∎

## Remarks

- **Why the recursion rather than $(-1)^k$.** Written as a power, every one of the
  four claims would have to be unwound into the two recursion equations before it
  could be proved; written as a recursion, each is a two-line induction. The
  identification with $(-1)^k$ is available ([[def-integer-power]]) and is used
  nowhere.

- **The parity statement is genuinely proved, not assumed.** Claim 2 is where the
  work is: the covering half is the interleaved induction of step 1.6, which
  tracks $n$ and $\sigma(n)$ together because neither alone is preserved by the
  successor, and the disjointness half is settled by the *sequence*, since
  $s$ takes the value $1$ on one range and $-1$ on the other and $1 \ne -1$.
  Using the sequence to separate the two ranges is shorter than any direct parity
  argument and needs no arithmetic on $\mathbb{N}$ beyond the successor.

- **What consumes this lemma.** [[fs-convergent-subsequence-implies-bounded]]
  interleaves a constant sequence with an unbounded one along $e$ and $o$;
  [[ex-two-subsequential-limits]] multiplies $s$ by a null perturbation to get a
  sequence with exactly two subsequential limits; and
  [[cex-unbounded-with-convergent-subsequence]] is the witness for the first of
  those. The same sequence, built inline, refutes
  [[fs-bounded-implies-convergent]] on the previous page; that item predates this
  lemma and is left as it stands.
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

### `lem-index-map-grows`

````markdown
---
id: lem-index-map-grows
kind: lemma
title: "A strictly increasing index map satisfies $n_k \\ge k$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-sequence, thm-induction-principle, lem-nat-discrete, def-nat-order, def-nat-addition, lem-nat-add-identity, lem-nat-successor-neq-self, thm-nat-linear-order, lem-nat-trichotomy]
justified_by: []
aliases: []
landmark: false
short: "$n_k\\ge k$"
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
    - title: "CMU 21-269 notes, Compactness — subsequences"
      url: "https://www.math.cmu.edu/~gautam/c/2026-269/notes/compactness.html"
    - title: "University of Wisconsin Math 521, Homework 5"
      url: "https://people.math.wisc.edu/~angenent/521.2016s/index.html"
    - title: "Subsequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subsequence"
    - title: "Mathematical induction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mathematical_induction"
    - title: "T. Tao, Analysis I, 3rd ed., §6.6"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $n : \mathbb{N} \to \mathbb{N}$ be a function, written $k \mapsto n_k$, and
recall that $n$ is **strictly increasing** when $n_j < n_k$ whenever $j < k$
([[def-sequence]], [[def-nat-order]]).

1. **Consecutive comparisons suffice.** If $n_i < n_{\sigma(i)}$ for every
   $i \in \mathbb{N}$, then $n$ is strictly increasing.
2. **Growth.** If $n$ is strictly increasing then $n_k \ge k$ for every
   $k \in \mathbb{N}$.

Claim 1 is what one checks in practice when exhibiting a subsequence; claim 2 is
what every later subsequence argument uses.

## Facts & Assumptions

**Given:** A function $n : \mathbb{N} \to \mathbb{N}$, written $k \mapsto n_k$, with $\sigma$ the successor and the order of [[def-nat-order]]; claim 1 is proved under the standing assumption that $n_i < n_{\sigma(i)}$ for every $i$, and claim 2 under the standing assumption that $n$ is strictly increasing ([[def-sequence]]).

[A1] $Q(k)$ denotes the statement: $n_j < n_k$ for every $j < k$.

[A2] $P(k)$ denotes the statement: $n_k \ge k$.

[L1] Order and successor on $\mathbb{N}$: $m \le p$ means $m + i = p$ for some $i$, so $0 \le m$ for every $m$ because $0 + m = m$; and $\sigma(k) = k + 1$ with $\sigma(k) \ne k$, so $k < \sigma(k)$ ([[def-nat-order]], [[def-nat-addition]], [[lem-nat-add-identity]], [[lem-nat-successor-neq-self]]).

[L2] Discreteness: $m < p$ if and only if $\sigma(m) \le p$ ([[lem-nat-discrete]]).

[L3] Induction principle: if $R(0)$ holds and $R(k)$ implies $R(\sigma(k))$ for every $k$, then $R(k)$ holds for every $k \in \mathbb{N}$ ([[thm-induction-principle]]).

[L4] The order on $\mathbb{N}$ is reflexive, antisymmetric, transitive and total, and satisfies trichotomy ([[thm-nat-linear-order]], [[lem-nat-trichotomy]]).

## Proof

**Proof technique:** induction.

1.1 Base case for claim 1: $Q(0)$ holds vacuously, since no $j$ satisfies $j < 0$; indeed $0 \le j$ always holds, and $j < 0$ together with $0 \le j$ would contradict antisymmetry. [base, A1, L1, L4]

1.2 Inductive hypothesis for claim 1: fix $k \in \mathbb{N}$ and assume $Q(k)$, that is $n_j < n_k$ for every $j < k$. [ih, A1]

1.3 Base case for claim 2: $P(0)$ states $n_0 \ge 0$, which holds because $0 \le m$ for every natural $m$. [base, A2, L1]

1.4 Inductive hypothesis for claim 2: fix $k \in \mathbb{N}$ and assume $P(k)$, that is $k \le n_k$. [ih, A2]

2.1 Inductive step for claim 1: let $j < \sigma(k)$. By trichotomy either $k < j$, or $j = k$, or $j < k$. The case $k < j$ is impossible, since it gives $\sigma(k) \le j$ by [L2], which together with $j < \sigma(k)$ contradicts antisymmetry. If $j = k$ then $n_j = n_k < n_{\sigma(k)}$ by the standing assumption. If $j < k$ then $n_j < n_k$ by step 1.2 and $n_k < n_{\sigma(k)}$ by the standing assumption, so $n_j < n_{\sigma(k)}$ by transitivity. In every admissible case $n_j < n_{\sigma(k)}$, so $Q(\sigma(k))$ holds. [step 1.2, A1, L2, L4]

2.2 Inductive step for claim 2: $k < \sigma(k)$ by [L1], so strict increase gives $n_k < n_{\sigma(k)}$; combined with $k \le n_k$ from step 1.4 this yields $k < n_{\sigma(k)}$, hence $\sigma(k) \le n_{\sigma(k)}$ by [L2], which is $P(\sigma(k))$. [step 1.4, A2, L1, L2, L4]

3.1 Both inductions are complete, so by the induction principle $Q(k)$ holds for every $k$, which is claim 1, and $P(k)$ holds for every $k$, which is claim 2. [step 1.1, step 1.3, step 2.1, step 2.2, L3, discharge-induction] ∎

## Remarks

- Claim 2 is sharp: the identity map $n_k = k$ is strictly increasing with $n_k = k$ throughout, so no better bound than $n_k \ge k$ holds for all strictly increasing index maps.

- Claim 2 is exactly what makes a subsequence inherit a limit ([[lem-subsequence-inherits-limit]]): a threshold $K$ that works for the original sequence works unchanged for the subsequence, because $n_k \ge k \ge K$ whenever $k \ge K$.

- Nothing here is about $\mathbb{R}$; both claims are about $(\mathbb{N}, \le, \sigma)$ alone. Both are proved **by induction** ([L3]), and that is the method, not an order property. Claim 2 needs three order facts on top of the induction: that $0$ is least, which is what makes its base case $n_0 \ge 0$ true ([L1], step 1.3); discreteness ([[lem-nat-discrete]], [L2]), which upgrades $k < n_{\sigma(k)}$ to $\sigma(k) \le n_{\sigma(k)}$ (step 2.2); and transitivity in its mixed form, which composes $k \le n_k$ with $n_k < n_{\sigma(k)}$ into $k < n_{\sigma(k)}$ ([L4], step 2.2). Claim 1 additionally uses trichotomy and antisymmetry ([L4]).

- Of those three, neither the least element nor discreteness may be dropped. Discreteness alone is not enough: $(\mathbb{Z}, \le)$ is discrete in the same sense, $m < p$ iff $m + 1 \le p$, yet $k \mapsto k - 1$ is strictly increasing on $\mathbb{Z}$ with $n_k < k$ everywhere. What $\mathbb{Z}$ lacks is a least element to anchor the induction. A least element alone is not enough either, which is what fails over $\mathbb{Q}$: on the nonnegative rationals $x \mapsto x/2$ is strictly increasing and fixes the least element $0$, but $x/2 < x$ at every positive rational.
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

### `thm-convergence-iff-limsup-equals-liminf`

````markdown
---
id: thm-convergence-iff-limsup-equals-liminf
kind: theorem
title: "A real sequence converges to $L \\in \\mathbb{R}$ iff $\\liminf x_k = \\limsup x_k = L$, and diverges to $\\pm\\infty$ iff both equal $\\pm\\infty$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-limsup-liminf, lem-limsup-epsilon-characterisation, lem-liminf-le-limsup, lem-limsup-reflection, lem-limsup-exists, lem-extended-reals-complete, def-real-limit, def-divergence-to-infinity, def-extended-reals, def-extended-limits, def-upper-bound, def-partial-order, def-sequence, lem-rat-embeds-dense, lem-of-abs-value, lem-of-add-order, cor-of-one-positive, thm-nat-linear-order, def-ordered-field, def-complete-ordered-field]
justified_by: []
forward_refs: [ex-limsup-of-alternating-sequence]
aliases: []
landmark: true
short: "convergence $\\iff \\liminf = \\limsup$"
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
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.17)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "J. Lebl, Basic Analysis I, §2.3"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement

Let $(x_k)$ be a sequence of reals ([[def-sequence]]), with $\limsup$ and
$\liminf$ as in [[def-limsup-liminf]].

1. For $L \in \mathbb{R}$: $(x_k)$ converges to $L$ ([[def-real-limit]]) **if and
   only if** $\liminf_k x_k = \limsup_k x_k = L$.
2. $x_k \to +\infty$ ([[def-divergence-to-infinity]]) **if and only if**
   $\liminf_k x_k = \limsup_k x_k = +\infty$. Moreover $\liminf_k x_k = +\infty$
   on its own already forces $\limsup_k x_k = +\infty$.
3. $x_k \to -\infty$ **if and only if** $\liminf_k x_k = \limsup_k x_k = -\infty$,
   and $\limsup_k x_k = -\infty$ on its own already forces
   $\liminf_k x_k = -\infty$.

The three clauses combine into one statement about the extended line: for
$L \in \overline{\mathbb{R}}$, the sequence $(x_k)$ converges to $L$ in
$\overline{\mathbb{R}}$ ([[def-extended-limits]]) if and only if

$$\liminf_{k} x_k = \limsup_{k} x_k = L .$$

Since $\liminf_k x_k \le \limsup_k x_k$ always ([[lem-liminf-le-limsup]]), the
single equation $\liminf_k x_k = \limsup_k x_k$ is therefore equivalent to
convergence in $\overline{\mathbb{R}}$, and the common value is the limit. A
sequence that neither converges nor diverges to $\pm\infty$ is exactly one for
which the inequality is strict.

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals, its tail ranges $T_n = \{x_k : k \ge n\}$, the extended tail bounds $s_n = \sup T_n$ and $i_n = \inf T_n$, and the quantities $\limsup_k x_k = \inf\{s_n\}$, $\liminf_k x_k = \sup\{i_n\}$ ([[def-limsup-liminf]]).

[L1] All of $s_n$, $i_n$, $\limsup_k x_k$ and $\liminf_k x_k$ exist in $\overline{\mathbb{R}}$ for every sequence; $i_n$ is the greatest lower bound of $T_n$ and $\liminf_k x_k$ the least upper bound of $\{i_n\}$, with the dual descriptions for $s_n$ and $\limsup_k x_k$ ([[lem-limsup-exists]], [[lem-extended-reals-complete]], [[def-upper-bound]], [[def-partial-order]]).

[L2] The order on $\overline{\mathbb{R}}$ is total, so the failure of $a \le b$ is $b < a$; it restricts on $\mathbb{R}$ to the order of $\mathbb{R}$; $+\infty$ is the greatest element and $-\infty$ the least; and every real is $< +\infty$ and $> -\infty$ ([[def-extended-reals]], [[def-partial-order]]).

[L3] Epsilon characterisation, for a real $L$: $L = \limsup_k x_k$ exactly when for every real $\varepsilon > 0$ one has $x_k < L + \varepsilon$ eventually and $x_k > L - \varepsilon$ frequently; and $L = \liminf_k x_k$ exactly when for every real $\varepsilon > 0$ one has $x_k > L - \varepsilon$ eventually and $x_k < L + \varepsilon$ frequently ([[lem-limsup-epsilon-characterisation]]).

[L4] $\liminf_k x_k \le \limsup_k x_k$ ([[lem-liminf-le-limsup]]).

[L5] Reflection: $\limsup_k(-x_k) = -\liminf_k x_k$ and $\liminf_k(-x_k) = -\limsup_k x_k$ ([[lem-limsup-reflection]]). Also $x_k \to -\infty$ if and only if $-x_k \to +\infty$: the condition $x_k < M$ for all $k \ge K$ is equivalent to $-x_k > -M$ for all $k \ge K$ by order reversal, and $M$ runs over all reals exactly when $-M$ does ([[def-divergence-to-infinity]]); the order reversal used here is strict, and the form stated in [[lem-of-add-order]] is likewise strict, so nothing nonstrict is being borrowed from it.

[L6] Convergence to a real $L$ means: for every rational $\varepsilon > 0$ there is $K$ with $|x_k - L| < \varepsilon$ for all $k \ge K$; and the same relation is obtained by testing every real $\varepsilon > 0$ instead, since below any positive real lies a positive rational ([[def-real-limit]], [[def-sequence]], [[lem-rat-embeds-dense]]).

[L7] Divergence: $x_k \to +\infty$ means that for every real $M$ there is $K$ with $x_k > M$ for all $k \ge K$ ([[def-divergence-to-infinity]]).

[L8] Eventually and frequently, and the fact that a property holding eventually holds frequently, since indices beyond any two given thresholds exist by totality of the order on $\mathbb{N}$; likewise two properties each holding eventually hold together from the larger threshold on ([[def-sequence]], [[thm-nat-linear-order]]).

[L9] Absolute value: for $c > 0$, $|a| < c$ if and only if $-c < a < c$ ([[lem-of-abs-value]]).

[L10] Order arithmetic in $\mathbb{R}$: $0 < 1$, so $t < t + 1$ for every real $t$, and no real is above every real; adding a constant preserves the order ([[cor-of-one-positive]], [[lem-of-add-order]], [[def-ordered-field]], [[def-complete-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 For the forward implication of claim 1, assume $L \in \mathbb{R}$ and that $(x_k)$ converges to $L$. [assume-hyp, L6]

1.2 For the converse implication of claim 1, assume $L \in \mathbb{R}$ and $\liminf_k x_k = \limsup_k x_k = L$. [assume-hyp, L1]

1.3 For the forward implication of claim 2, assume $x_k \to +\infty$. [assume-hyp, L7]

1.4 For the converse implication of claim 2, assume $\liminf_k x_k = +\infty$. [assume-hyp, L1]

2.1 Under the assumption of step 1.1, let $\varepsilon > 0$ be an arbitrary real. Testing convergence at $\varepsilon$ gives $K$ with $|x_k - L| < \varepsilon$, hence $L - \varepsilon < x_k < L + \varepsilon$, for all $k \ge K$. So $x_k < L + \varepsilon$ eventually and $x_k > L - \varepsilon$ eventually, and each of the two therefore also holds frequently. Both halves of each characterisation in [L3] are met, so $\limsup_k x_k = L$ and $\liminf_k x_k = L$. [step 1.1, L3, L6, L8, L9]

2.2 Under the assumption of step 1.2, let $\varepsilon > 0$ be an arbitrary real. The forward halves of the two characterisations in [L3] give $x_k < L + \varepsilon$ for all $k$ beyond some $K_1$ and $x_k > L - \varepsilon$ for all $k$ beyond some $K_2$; beyond the larger of $K_1$ and $K_2$ both hold, so $|x_k - L| < \varepsilon$ there. This holds for every real $\varepsilon > 0$, in particular for every rational one, so $(x_k)$ converges to $L$. [step 1.2, L3, L6, L8, L9]

2.3 Under the assumption of step 1.3, let $M$ be an arbitrary real and take $K$ with $x_k > M$ for all $k \ge K$. Then $M$ is a lower bound of $T_K$, so $M \le i_K$, and $i_K \le \liminf_k x_k$ because $\liminf_k x_k$ is an upper bound of $\{i_n\}$; hence $M \le \liminf_k x_k$. Since $M$ was an arbitrary real, $\liminf_k x_k$ is not $-\infty$, which lies below every real, and it is not a real $t$ either, since $M = t + 1$ would give $t + 1 \le t$. So $\liminf_k x_k = +\infty$. [step 1.3, L1, L2, L7, L10]

2.4 Under the assumption of step 1.4, let $M$ be an arbitrary real. Since $\sup\{i_n\} = +\infty$ and $M < +\infty$, the real $M$ is not an upper bound of $\{i_n\}$, for otherwise the least upper bound would satisfy $+\infty \le M$; by totality there is $n$ with $i_n > M$. Every $k \ge n$ satisfies $x_k \ge i_n > M$, so $x_k > M$ eventually. As $M$ was arbitrary, $x_k \to +\infty$. [step 1.4, L1, L2, L7]

3.1 Steps 2.1 and 2.2 are the two implications of claim 1. [step 2.1, step 2.2, L3]

3.2 For claim 2: if $x_k \to +\infty$ then $\liminf_k x_k = +\infty$ by step 2.3, and then $+\infty = \liminf_k x_k \le \limsup_k x_k$ forces $\limsup_k x_k = +\infty$ since $+\infty$ is the greatest element; conversely if $\liminf_k x_k = \limsup_k x_k = +\infty$ then in particular $\liminf_k x_k = +\infty$ and step 2.4 gives $x_k \to +\infty$. The same use of [L4] is the additional assertion that $\liminf_k x_k = +\infty$ alone forces $\limsup_k x_k = +\infty$. [step 2.3, step 2.4, L2, L4]

4.1 For claim 3, reflection gives $x_k \to -\infty$ exactly when $-x_k \to +\infty$, which by claim 2 holds exactly when $\liminf_k(-x_k) = \limsup_k(-x_k) = +\infty$, that is $-\limsup_k x_k = -\liminf_k x_k = +\infty$, that is $\limsup_k x_k = \liminf_k x_k = -\infty$; and $\limsup_k x_k = -\infty$ alone forces $\liminf_k x_k \le -\infty$, hence $\liminf_k x_k = -\infty$, since $-\infty$ is least. Claims 1, 2 and 3 together say that for $L \in \overline{\mathbb{R}}$ the sequence converges to $L$ in $\overline{\mathbb{R}}$ exactly when $\liminf_k x_k = \limsup_k x_k = L$, since the three clauses of that definition are convergence to a real $L$, divergence to $+\infty$ and divergence to $-\infty$. [step 3.1, step 3.2, L2, L4, L5] ∎

## Remarks

- **This is the theorem that makes $\limsup$ and $\liminf$ worth defining.** They
  exist for every sequence, with no hypothesis, and their coincidence is exactly
  convergence in $\overline{\mathbb{R}}$. So a question about convergence becomes
  a question about two computable quantities, and a proof of convergence can be
  assembled from one-sided estimates without a candidate limit in hand.

- **The equation is between elements of $\overline{\mathbb{R}}$, and reading it in
  $\mathbb{R}$ would lose two thirds of the content.** Clauses 2 and 3 are
  statements about divergence, and they are true statements about
  [[def-divergence-to-infinity]], not a redefinition of it: nothing above claims
  that a sequence diverging to $+\infty$ has a limit in $\mathbb{R}$, and the
  symbol $+\infty$ occurring in them is the element of $\overline{\mathbb{R}}$
  introduced in [[def-extended-reals]].

- **A sequence with $\liminf < \limsup$ does neither.** The alternating sequence
  is the standard witness, with the two values $-1$ and $1$
  ([[ex-limsup-of-alternating-sequence]]); it is bounded, so it also does not
  diverge to $\pm\infty$, and the theorem says its failure to converge is exactly
  the gap between the two quantities.
````

### `thm-limsup-is-greatest-subsequential-limit`

````markdown
---
id: thm-limsup-is-greatest-subsequential-limit
kind: theorem
title: "The limit superior is itself a subsequential limit in $\\overline{\\mathbb{R}}$ and is the greatest one"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-limsup-liminf, def-subsequential-limit, def-extended-limits, lem-limsup-epsilon-characterisation, lem-limsup-exists, lem-extended-reals-complete, lem-liminf-le-limsup, thm-convergence-iff-limsup-equals-liminf, thm-recursion, thm-well-ordering-principle, lem-index-map-grows, def-extended-reals, def-divergence-to-infinity, def-real-limit, lem-limit-preserves-order, def-sequence, def-upper-bound, def-partial-order, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, lem-of-naturals-positive, lem-rat-embeds-dense, lem-of-abs-value, def-nat-order, thm-nat-linear-order]
justified_by: []
forward_refs: [cex-limsup-infinite-not-attained-in-r]
aliases: []
landmark: true
short: "$\\limsup = \\max \\overline{\\operatorname{SL}}$"
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
    - title: "Limit superior and limit inferior (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_superior_and_limit_inferior"
    - title: "Subsequential limit (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subsequential_limit"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.17)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "N. Donaldson, Math 140A: Real Analysis notes"
      url: "https://www.math.uci.edu/~ndonalds/math140a/notes.pdf"
pipeline_run: null
---

## Statement

Let $(x_k)$ be a sequence of reals ([[def-sequence]]) and write
$\Lambda := \limsup_{k} x_k \in \overline{\mathbb{R}}$ ([[def-limsup-liminf]]).
Then, with the extended subsequential limit set
$\overline{\operatorname{SL}}(x)$ of [[def-extended-limits]]:

1. $\Lambda \in \overline{\operatorname{SL}}(x)$: there is a strictly increasing
   $n : \mathbb{N} \to \mathbb{N}$ such that $(x_{n_j})$ converges to $\Lambda$ in
   $\overline{\mathbb{R}}$;
2. $L \le \Lambda$ for every $L \in \overline{\operatorname{SL}}(x)$.

So $\overline{\operatorname{SL}}(x)$ is **nonempty** and has a **greatest
element**, and that element is $\limsup_k x_k$. In particular every sequence of
reals whatever has a subsequence that converges in $\overline{\mathbb{R}}$.

**The extended set is the right home for this statement, and the real set is
not.** The finite subsequential limit set $\operatorname{SL}(x)$ of
[[def-subsequential-limit]] may be empty, and when it is not it may have a
greatest element different from $\limsup_k x_k$; both failures are exhibited by
the dedicated counterexample on the companion page. What is true for
$\operatorname{SL}(x)$ follows: when $\Lambda$ is a real number, claim 1 puts it
in $\operatorname{SL}(x)$, since the two sets agree on $\mathbb{R}$
([[def-extended-limits]]), and claim 2 then makes it the greatest element there
too.

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals, its tail ranges $T_n = \{x_k : k \ge n\}$, the extended tail suprema $s_n = \sup T_n$, and $\Lambda := \limsup_k x_k = \inf\{s_n : n \in \mathbb{N}\}$ ([[def-limsup-liminf]]).

[L1] All of $s_n$ and $\Lambda$ exist in $\overline{\mathbb{R}}$, with $s_n$ the least upper bound of $T_n$ and $\Lambda$ the greatest lower bound of $\{s_n\}$ ([[lem-limsup-exists]], [[lem-extended-reals-complete]], [[def-upper-bound]], [[def-partial-order]]).

[L2] The order on $\overline{\mathbb{R}}$ is total, so the failure of $a \le b$ is $b < a$; $-\infty$ is least and $+\infty$ greatest; every real is $< +\infty$ and $> -\infty$; and on $\mathbb{R}$ the order is that of $\mathbb{R}$ ([[def-extended-reals]], [[def-partial-order]]).

[L3] Epsilon characterisation for a real $\Lambda$: for every real $\eta > 0$ one has $x_k < \Lambda + \eta$ eventually and $x_k > \Lambda - \eta$ frequently ([[lem-limsup-epsilon-characterisation]]).

[L4] Recursion theorem: for a set $A$, an element $a \in A$ and a function $f : A \to A$ there is a unique $g : \mathbb{N} \to A$ with $g_0 = a$ and $g_{j+1} = f(g_j)$ ([[thm-recursion]]).

[L5] Well-ordering principle: every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L6] Index maps: if $n_j < n_{j+1}$ for every $j$ then $n$ is strictly increasing, and then $n_j \ge j$ for every $j$; the composite $(x_{n_j})$ is a subsequence ([[lem-index-map-grows]], [[def-sequence]]).

[L7] Convergence in $\overline{\mathbb{R}}$ and the extended subsequential limit set ([[def-extended-limits]]); convergence to a real, for which it suffices to produce a threshold for every real $\varepsilon > 0$ ([[def-real-limit]], [[def-sequence]]); divergence to $\pm\infty$ ([[def-divergence-to-infinity]]); and $|a - b| < c$ if and only if $b - c < a < b + c$ for $c > 0$ ([[lem-of-abs-value]]).

[L8] If $\limsup_k x_k = -\infty$ then $\liminf_k x_k = -\infty$ and $x_k \to -\infty$ ([[lem-liminf-le-limsup]], [[thm-convergence-iff-limsup-equals-liminf]]).

[L9] Limits preserve non-strict inequalities: if $y_j \le c$ for all large $j$ and $y_j \to y$ in $\mathbb{R}$, then $y \le c$ ([[lem-limit-preserves-order]]).

[L10] Archimedean facts: for every real $M$ there is a natural $p \ge 1$ with $M < p \cdot 1_{\mathbb{R}}$, and for every real $\eta > 0$ a natural $m \ge 1$ with $1/m < \eta$; the canonical naturals satisfy $0 \le n \cdot 1_{\mathbb{R}}$ and are increasing in $n$, and $0 < a \le b$ gives $0 < 1/b \le 1/a$ ([[thm-of-archimedean]], [[cor-archimedean-reciprocal]], [[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

[L11] Strictly between any two reals lies a rational, hence a real ([[lem-rat-embeds-dense]]).

[L12] The order on $\mathbb{N}$ is total and transitive, so any two indices have a common upper bound ([[def-nat-order]], [[thm-nat-linear-order]]).

## Proof

**Proof technique:** constructive.

1.1 The element $\Lambda = \limsup_k x_k$ exists in $\overline{\mathbb{R}}$, and exactly one of the following holds: $\Lambda$ is a real number, $\Lambda = +\infty$, or $\Lambda = -\infty$. [given, L1, L2]

1.2 Suppose $\Lambda = +\infty$. Since $\Lambda$ is a lower bound of $\{s_n\}$, every $n$ has $+\infty \le s_n$ and so $s_n = +\infty$. Consequently, for every $n \in \mathbb{N}$ and every real $M$ there is $k \ge n$ with $x_k > M$: otherwise $M$ would be an upper bound of $T_n$ and leastness would give $s_n \le M$, contradicting $M < +\infty$. [given, L1, L2]

1.3 Suppose $\Lambda$ is real. Then for every $n \in \mathbb{N}$ and every real $\eta > 0$ there is $k \ge n$ with $|x_k - \Lambda| < \eta$: by [L3] fix $K$ with $x_k < \Lambda + \eta$ for all $k \ge K$, let $K'$ be an index at least as large as both $n$ and $K$, and use that $x_k > \Lambda - \eta$ frequently to obtain $k \ge K'$ with $x_k > \Lambda - \eta$; that $k$ satisfies $k \ge K$, hence also $x_k < \Lambda + \eta$, and $k \ge n$. [given, L3, L7, L12]

1.4 Suppose $\Lambda = -\infty$. Then $x_k \to -\infty$ by [L8], and the identity map $j \mapsto j$ is strictly increasing, so the subsequence $(x_j)$ of $(x_k)$ converges to $-\infty$ in $\overline{\mathbb{R}}$ and $\Lambda \in \overline{\operatorname{SL}}(x)$. [given, L6, L7, L8]

1.5 Let $L \in \overline{\operatorname{SL}}(x)$ be arbitrary and fix a strictly increasing $n : \mathbb{N} \to \mathbb{N}$ such that $(x_{n_j})$ converges to $L$ in $\overline{\mathbb{R}}$; then $n_j \ge j$ for every $j$. [given, L6, L7]

2.1 In the case $\Lambda = +\infty$, define $f : \mathbb{N} \to \mathbb{N}$ by letting $f(n)$ be the least element of $E_n := \{\, k \in \mathbb{N} : k > n \text{ and } x_k > n \cdot 1_{\mathbb{R}} \,\}$, which is nonempty by step 1.2 applied with the index $n+1$ and the real $M = n \cdot 1_{\mathbb{R}}$, and let $a$ be the least element of $\{\, k : x_k > 0 \,\}$, nonempty by step 1.2 with $n = 0$ and $M = 0$. Then $f(n) > n$ and $x_{f(n)} > n \cdot 1_{\mathbb{R}}$ for every $n$. [step 1.2, L5, construct]

2.2 In the case $\Lambda$ real, define $g : \mathbb{N} \to \mathbb{N}$ by letting $g(n)$ be the least element of $F_n := \{\, k \in \mathbb{N} : k > n \text{ and } |x_k - \Lambda| < 1/(n+1) \,\}$, which is nonempty by step 1.3 applied with the index $n+1$ and $\eta = 1/(n+1) > 0$, and let $b$ be the least element of $\{\, k : |x_k - \Lambda| < 1 \,\}$, nonempty by step 1.3 with $n = 0$ and $\eta = 1$. Then $g(n) > n$ and $|x_{g(n)} - \Lambda| < 1/(n+1)$ for every $n$. [step 1.3, L5, L10, construct]

2.3 If $L = -\infty$ then $L \le \Lambda$, since $-\infty$ is the least element of $\overline{\mathbb{R}}$. [step 1.5, L2]

2.4 If $L = +\infty$, then for every real $M$ there is $J$ with $x_{n_j} > M$ for all $j \ge J$. Fix $n \in \mathbb{N}$ and a real $M$, and take $j$ at least as large as both $J$ and $n$; then $n_j \ge j \ge n$, so $x_{n_j} \in T_n$ and $M < x_{n_j} \le s_n$. As $M$ was an arbitrary real, $s_n$ is neither real nor $-\infty$, so $s_n = +\infty$; as $n$ was arbitrary, $\Lambda = \inf\{s_n\} = +\infty$ and $L \le \Lambda$. [step 1.5, L1, L2, L7, L12]

2.5 If $L$ is real, suppose for the sake of the comparison that $\Lambda < L$. By step 1.1 the element $\Lambda$ is then real or $-\infty$; choose a real $c$ with $\Lambda < c < L$, taking a rational strictly between $\Lambda$ and $L$ in the first case and $c := L - 1$ in the second. Since $\Lambda$ is the greatest lower bound of $\{s_n\}$ and $\Lambda < c$, the element $c$ is not a lower bound, so there is $n$ with $s_n < c$, and then $x_k \le s_n < c$ for every $k \ge n$. For $j \ge n$ we have $n_j \ge j \ge n$, hence $x_{n_j} \le c$, so $L \le c$ by [L9], contradicting $c < L$. By totality $L \le \Lambda$. [step 1.5, step 1.1, L1, L2, L9, L11]

3.1 In the case $\Lambda = +\infty$, the recursion theorem applied to $\mathbb{N}$, the element $a$ and the function $f$ gives $n : \mathbb{N} \to \mathbb{N}$ with $n_0 = a$ and $n_{j+1} = f(n_j)$. Then $n_j < n_{j+1}$ for every $j$, so $n$ is strictly increasing and $n_j \ge j$; and $x_{n_{j+1}} > n_j \cdot 1_{\mathbb{R}} \ge j \cdot 1_{\mathbb{R}}$ for every $j$. [step 2.1, L4, L6, L10]

3.2 In the case $\Lambda$ real, the recursion theorem applied to $\mathbb{N}$, the element $b$ and the function $g$ gives $n : \mathbb{N} \to \mathbb{N}$ with $n_0 = b$ and $n_{j+1} = g(n_j)$. Then $n$ is strictly increasing with $n_j \ge j$, and $|x_{n_{j+1}} - \Lambda| < 1/(n_j + 1) \le 1/(j+1)$ for every $j$. [step 2.2, L4, L6, L10]

4.1 In the case $\Lambda = +\infty$, the subsequence $(x_{n_j})$ diverges to $+\infty$: given a real $M$, take a natural $p \ge 1$ with $M < p \cdot 1_{\mathbb{R}}$; every $j \ge p + 1$ satisfies $j - 1 \ge p$, so step 3.1 applied at $j - 1$ gives $x_{n_j} > (j-1) \cdot 1_{\mathbb{R}} \ge p \cdot 1_{\mathbb{R}} > M$. Hence $(x_{n_j})$ converges to $+\infty = \Lambda$ in $\overline{\mathbb{R}}$ and $\Lambda \in \overline{\operatorname{SL}}(x)$. [step 3.1, L7, L10, L12]

4.2 In the case $\Lambda$ real, the subsequence $(x_{n_j})$ converges to $\Lambda$: given a real $\varepsilon > 0$, take a natural $m \ge 1$ with $1/m < \varepsilon$; every $j \ge m$ satisfies $j \ge 1$, so step 3.2 applied at $j - 1$ gives $|x_{n_j} - \Lambda| < 1/j \le 1/m < \varepsilon$. Producing such a threshold for every real $\varepsilon > 0$ establishes convergence, so $(x_{n_j})$ converges to $\Lambda$ in $\overline{\mathbb{R}}$ and $\Lambda \in \overline{\operatorname{SL}}(x)$. [step 3.2, L7, L10]

5.1 The three cases of step 1.1 are exhaustive, and each produces a subsequence converging to $\Lambda$ in $\overline{\mathbb{R}}$: step 4.1 when $\Lambda = +\infty$, step 4.2 when $\Lambda$ is real, and step 1.4 when $\Lambda = -\infty$. So $\Lambda \in \overline{\operatorname{SL}}(x)$, which is claim 1. [step 4.1, step 4.2, step 1.4, L7]

6.1 Steps 2.3, 2.4 and 2.5 cover the three possibilities for an arbitrary $L \in \overline{\operatorname{SL}}(x)$ and give $L \le \Lambda$ in each, which is claim 2. With claim 1 this makes $\overline{\operatorname{SL}}(x)$ nonempty with greatest element $\Lambda = \limsup_k x_k$. [step 5.1, step 2.3, step 2.4, step 2.5, L2, discharge-construct] ∎

## Remarks

- **The construction uses no choice.** Both index maps are built by taking a
  *least* element ([[thm-well-ordering-principle]]) of an explicitly described
  nonempty set of naturals, so the functions $f$ and $g$ are defined outright and
  [[thm-recursion]] then produces the index map. This is the same device as in
  [[lem-peak-monotone-subsequence]], and for the same reason: a subsequence
  selected by repeated arbitrary choices would need a choice principle, and none
  is needed here.

- **Why the recursion threshold is indexed by the previous index rather than by
  the step number.** The recursion theorem produces a function of one variable, so
  the state carried from one step to the next is the index $n_j$ alone. Demanding
  $x_{n_{j+1}} > n_j$ rather than $x_{n_{j+1}} > j$ keeps that single-variable
  form, and $n_j \ge j$ ([[lem-index-map-grows]]) then upgrades the bound to the
  one actually wanted. The same trick fixes the accuracy in the finite case at
  $1/(n_j+1) \le 1/(j+1)$.

- **Claim 2 is where the $\limsup$ earns the word "greatest".** A subsequence
  cannot do better than the tail suprema allow: past any index $n$, every term of
  the sequence, and so every term of any subsequence, is at most $s_n$, and
  $\Lambda$ is the infimum of those. That is the entire content of step 2.5, and
  the strictness of the inequality $\Lambda < c$ is what gives the contradiction,
  since a limit inherits only the non-strict inequality
  ([[lem-limit-preserves-order]]).

- **Both failures of the real version really occur**, and
  [[cex-limsup-infinite-not-attained-in-r]] on the companion page is the witness:
  there $\operatorname{SL}(x)$ is nonempty with greatest element $0$ while
  $\limsup_k x_k = +\infty$.

- **The dual statement is [[cor-liminf-is-least-subsequential-limit]]**, obtained
  from this theorem by reflection rather than by repeating the construction.
````

