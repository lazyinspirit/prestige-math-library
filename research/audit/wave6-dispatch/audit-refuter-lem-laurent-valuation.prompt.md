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

## Target item — `lem-laurent-valuation`

Normalized current SHA-256: `ebde3bd42f28fa849e3aed8ae5d3a9c5a37389c5b6f21f4bb1083a8da7136904`

The complete current item follows, including frontmatter:

````markdown
---
id: lem-laurent-valuation
kind: lemma
title: "Valuation and leading coefficient in $\\mathbb{R}((t^{-1}))$: $v(fg) = v(f) + v(g)$, and the behaviour of $v$ under sums"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-formal-laurent-series, lem-laurent-series-ring, def-field, thm-reals-ordered-field, thm-int-ordered-ring, def-int-order]
aliases: []
landmark: false
short: "$v(fg) = v(f)+v(g)$"
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
    - title: "Valuation (algebra) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Valuation_(algebra)"
    - title: "Hahn series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hahn_series"
    - title: "B. Sambale, An invitation to formal power series"
      url: "https://link.springer.com/article/10.1365/s13291-022-00256-6"
    - title: "Laurent series (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Laurent_series"
    - title: "H. G. Dales, Norming infinitesimals of large fields"
      url: "https://eprints.lancs.ac.uk/id/eprint/78955/1/Norminginfinitesimalsfinal.pdf"
pipeline_run: null
---

## Statement

Let $K = \mathbb{R}((t^{-1}))$ with its valuation $v$ and leading coefficient
$\operatorname{lc}$ ([[def-formal-laurent-series]]), and let $f, g \in K$ with
$f \ne 0_K$ and $g \ne 0_K$. Then:

1. **(Products.)** $fg \ne 0_K$, and
   $$v(fg) = v(f) + v(g), \qquad \operatorname{lc}(fg) = \operatorname{lc}(f)\operatorname{lc}(g).$$
   In particular $K$ has no zero divisors.
2. **(Negatives.)** $-f \ne 0_K$, $v(-f) = v(f)$ and
   $\operatorname{lc}(-f) = -\operatorname{lc}(f)$.
3. **(Unequal valuations.)** If $v(f) < v(g)$ then $f + g \ne 0_K$,
   $v(f+g) = v(f)$ and $\operatorname{lc}(f+g) = \operatorname{lc}(f)$.
4. **(Equal valuations, no cancellation.)** If $v(f) = v(g) = q$ and
   $\operatorname{lc}(f) + \operatorname{lc}(g) \ne 0$, then $f + g \ne 0_K$,
   $v(f+g) = q$ and
   $\operatorname{lc}(f+g) = \operatorname{lc}(f) + \operatorname{lc}(g)$.
5. **(Sums in general.)** If $f + g \ne 0_K$ then
   $v(f+g) \ge \min\{v(f), v(g)\}$.

## Facts & Assumptions

**Given:** $f, g \in K$ with $f \ne 0_K$ and $g \ne 0_K$; write $p := v(f)$ and $q := v(g)$.

[L1] For a nonzero $h \in K$ one has $h(k) = 0$ for every $k < v(h)$ and $h(v(h)) = \operatorname{lc}(h) \ne 0$; conversely, if $h(k) = 0$ for all $k < r$ and $h(r) \ne 0$ then $h \ne 0_K$, $v(h) = r$ and $\operatorname{lc}(h) = h(r)$ ([[def-formal-laurent-series]]).

[L2] $(f+g)(k) = f(k) + g(k)$ and $(fg)(k) = \sum_{i+j=k} f(i)g(j)$, a finite sum; if $f$ vanishes at every index below $m$ and $g$ at every index below $n$, then $fg$ vanishes at every index below $m+n$ ([[lem-laurent-series-ring]], [[def-formal-laurent-series]]).

[L3] $\mathbb{R}$ is a field, so a product of two nonzero reals is nonzero, and $-x = 0$ only for $x = 0$ ([[def-field]], [[thm-reals-ordered-field]]).

[L4] The order on $\mathbb{Z}$ is total and compatible with addition ([[thm-int-ordered-ring]], [[def-int-order]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] $f$ vanishes at every index below $p$ and $g$ at every index below $q$, so by [L2] $(fg)(k) = 0$ for every $k < p + q$. [L1, L2]

1.2 If $(i,j)$ satisfies $i + j = p+q$ and $f(i)g(j) \ne 0$ then $i \ge p$ and $j \ge q$ by [L1], and $i + j = p + q$ then forces $i = p$ and $j = q$; hence $(fg)(p+q) = f(p)g(q) = \operatorname{lc}(f)\operatorname{lc}(g)$, which is nonzero by [L3]. [L1, L2, L3, L4]

1.3 $(-f)(k) = -f(k)$ for every $k$, so $-f$ vanishes exactly where $f$ does; by [L1] and [L3] this gives $-f \ne 0_K$, $v(-f) = p$ and $\operatorname{lc}(-f) = -\operatorname{lc}(f) \ne 0$. [L1, L2, L3]

1.4 Suppose $p < q$. For $k < p$ both $f(k) = 0$ and $g(k) = 0$, so $(f+g)(k) = 0$; and $g(p) = 0$ because $p < q$, so $(f+g)(p) = \operatorname{lc}(f) \ne 0$. By [L1], $f + g \ne 0_K$ with $v(f+g) = p$ and $\operatorname{lc}(f+g) = \operatorname{lc}(f)$. [L1, L2, L4]

1.5 Suppose $p = q$ and $\operatorname{lc}(f) + \operatorname{lc}(g) \ne 0$. For $k < p$ both terms vanish, so $(f+g)(k) = 0$; and $(f+g)(p) = \operatorname{lc}(f) + \operatorname{lc}(g) \ne 0$. By [L1], $f+g \ne 0_K$, $v(f+g) = p$ and $\operatorname{lc}(f+g) = \operatorname{lc}(f) + \operatorname{lc}(g)$. [L1, L2]

1.6 For $k < \min\{p,q\}$ one has $f(k) = g(k) = 0$, hence $(f+g)(k) = 0$; so if $f + g \ne 0_K$ then its valuation, being the least index at which it is nonzero, satisfies $v(f+g) \ge \min\{p,q\}$. [L1, L2, L4]

2.1 By [step 1.1] $fg$ vanishes at every index below $p+q$ and by [step 1.2] it is nonzero at $p+q$; so by [L1] $fg \ne 0_K$, $v(fg) = p + q$ and $\operatorname{lc}(fg) = \operatorname{lc}(f)\operatorname{lc}(g)$. Since $f$ and $g$ were arbitrary nonzero elements, no product of nonzero elements of $K$ is zero. [step 1.1, step 1.2, L1]

3.1 Clause 1 is [step 2.1], clause 2 is [step 1.3], clause 3 is [step 1.4], clause 4 is [step 1.5] and clause 5 is [step 1.6]. [step 1.3, step 1.4, step 1.5, step 1.6, step 2.1] ∎
````

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "def-formal-laurent-series",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the field of real numbers with its order\n([[def-real-numbers]], [[thm-reals-ordered-field]]) and $\\mathbb{Z}$ is the\ntotally ordered commutative ring of integers ([[def-integers]],\n[[def-int-operations]], [[def-int-order]], [[thm-int-ordered-ring]]).\n\nFor a function $f : \\mathbb{Z} \\to \\mathbb{R}$ write\n\n$$\\operatorname{supp} f \\;:=\\; \\{\\, k \\in \\mathbb{Z} : f(k) \\ne 0 \\,\\},$$\n\nand say that $\\operatorname{supp} f$ is **bounded below** when there is\n$m \\in \\mathbb{Z}$ with $f(k) = 0$ for every $k < m$. The set of **formal Laurent\nseries in $t^{-1}$ over $\\mathbb{R}$** is\n\n$$K \\;=\\; \\mathbb{R}((t^{-1})) \\;:=\\; \\{\\, f : \\mathbb{Z} \\to \\mathbb{R} \\;\\mid\\; \\operatorname{supp} f \\text{ is bounded below} \\,\\},$$\n\nequipped with\n\n$$(f + g)(k) := f(k) + g(k), \\qquad (fg)(k) := \\sum_{i + j = k} f(i)\\,g(j),$$\n\nwhere the product sum ranges over the pairs $(i,j) \\in \\mathbb{Z} \\times\n\\mathbb{Z}$ with $i + j = k$ and $f(i)g(j) \\ne 0$. That set of pairs is finite\nfor every $k$, and $f + g$ and $fg$ again lie in $K$: this is\n[[lem-laurent-series-ring]], which also proves that $K$ with these operations is\na commutative ring whose zero $0_K$ is the constant function $0$ and whose\nidentity $1_K$ is the function taking the value $1$ at $0$ and $0$ elsewhere.\n\n**Distinguished elements.** For $n \\in \\mathbb{Z}$ let $t^{-n} \\in K$ be the\nfunction taking the value $1$ at $n$ and $0$ at every other index; so\n$t^{0} = 1_K$, and $t := t^{-(-1)}$ is the function taking the value $1$ at $-1$.\nFor $c \\in \\mathbb{R}$ let $\\iota(c) \\in K$ be the function taking the value $c$\nat $0$ and $0$ elsewhere. The notation $t^{-n}$ is *defined* here as a name;\nthat it is consistent with the ring multiplication, $t^{-m} \\, t^{-n} =\nt^{-(m+n)}$, is proved in [[lem-laurent-series-ring]].\n\n**Series notation.** Because $\\operatorname{supp} f$ is bounded below, say by\n$m$, one writes\n\n$$f \\;=\\; \\sum_{k \\ge m} f(k)\\, t^{-k},$$\n\na purely notational device: the object is the function $f$, and no convergence\nof any kind is asserted or used.\n\n**Valuation and leading coefficient.** Let $f \\in K$ with $f \\ne 0_K$. Then\n$\\operatorname{supp} f$ is nonempty and bounded below, so it has a least element\n([[lem-laurent-series-ring]]). Define\n\n$$v(f) \\;:=\\; \\min \\operatorname{supp} f \\in \\mathbb{Z}, \\qquad \\operatorname{lc}(f) \\;:=\\; f(v(f)) \\in \\mathbb{R} \\setminus \\{0\\}.$$\n\n$v(f)$ is the **valuation** and $\\operatorname{lc}(f)$ the **leading\ncoefficient** of $f$. Neither is defined at $f = 0_K$, whose support is empty;\nevery statement about $v$ or $\\operatorname{lc}$ in this library carries the\nhypothesis $f \\ne 0_K$ explicitly.\n\n**Order.** The **positive cone** of $K$ is\n\n$$P \\;:=\\; \\{\\, f \\in K : f \\ne 0_K \\text{ and } \\operatorname{lc}(f) > 0 \\,\\},$$\n\nthat is, a nonzero series is positive exactly when its lowest-index nonzero\ncoefficient is a positive real. That $(K, P)$ is an ordered field\n([[def-ordered-field]], [[def-field]]) is [[thm-laurent-ordered-field]], and\nthat every nonzero element of $K$ is invertible is\n[[thm-laurent-series-field]]. As in any ordered field, $f < g$ means\n$g - f \\in P$.",
      "uses": [
        "1.1",
        "1.2",
        "1.3",
        "1.4",
        "1.5",
        "1.6",
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-laurent-series-ring",
      "source_section": "Statement",
      "quote": "Let $K = \\mathbb{R}((t^{-1}))$ be as in [[def-formal-laurent-series]], and let\n$f, g \\in K$, with $m, n \\in \\mathbb{Z}$ chosen so that $f(i) = 0$ for all\n$i < m$ and $g(j) = 0$ for all $j < n$. Then:\n\n1. **(Finiteness.)** For every $k \\in \\mathbb{Z}$ the set\n   $S_k := \\{\\, (i,j) \\in \\mathbb{Z} \\times \\mathbb{Z} : i + j = k,\\; f(i)g(j) \\ne 0 \\,\\}$\n   is finite, so $(fg)(k) = \\sum_{i+j=k} f(i)g(j)$ is a finite sum of reals; and\n   $S_k = \\varnothing$ whenever $k < m + n$.\n2. **(Closure.)** $f + g$, $-f$ and $fg$ lie in $K$, with $(f+g)(k) = 0$ for\n   $k < \\min(m,n)$ and $(fg)(k) = 0$ for $k < m + n$.\n3. **(Ring.)** $(K, +, \\cdot\\,, 0_K, 1_K)$ is a commutative ring with identity,\n   and $1_K \\ne 0_K$.\n4. **(Monomials and constants.)** $(t^{-a}h)(k) = h(k-a)$ for every $h \\in K$\n   and all $a, k \\in \\mathbb{Z}$; consequently $t^{-a} \\, t^{-b} = t^{-(a+b)}$\n   for all $a, b \\in \\mathbb{Z}$. Moreover $(\\iota(c)f)(k) = c\\, f(k)$ for all\n   $c \\in \\mathbb{R}$ and $k \\in \\mathbb{Z}$.\n5. **(Least element.)** Every nonempty $S \\subseteq \\mathbb{Z}$ that is bounded\n   below has a least element. In particular $\\operatorname{supp} f$ has a least\n   element whenever $f \\ne 0_K$, so the valuation $v(f)$ and the leading\n   coefficient $\\operatorname{lc}(f)$ of [[def-formal-laurent-series]] are\n   defined.",
      "uses": [
        "1.1",
        "1.2",
        "1.3",
        "1.4",
        "1.5",
        "1.6"
      ]
    },
    {
      "fact": "L2",
      "source": "def-formal-laurent-series",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the field of real numbers with its order\n([[def-real-numbers]], [[thm-reals-ordered-field]]) and $\\mathbb{Z}$ is the\ntotally ordered commutative ring of integers ([[def-integers]],\n[[def-int-operations]], [[def-int-order]], [[thm-int-ordered-ring]]).\n\nFor a function $f : \\mathbb{Z} \\to \\mathbb{R}$ write\n\n$$\\operatorname{supp} f \\;:=\\; \\{\\, k \\in \\mathbb{Z} : f(k) \\ne 0 \\,\\},$$\n\nand say that $\\operatorname{supp} f$ is **bounded below** when there is\n$m \\in \\mathbb{Z}$ with $f(k) = 0$ for every $k < m$. The set of **formal Laurent\nseries in $t^{-1}$ over $\\mathbb{R}$** is\n\n$$K \\;=\\; \\mathbb{R}((t^{-1})) \\;:=\\; \\{\\, f : \\mathbb{Z} \\to \\mathbb{R} \\;\\mid\\; \\operatorname{supp} f \\text{ is bounded below} \\,\\},$$\n\nequipped with\n\n$$(f + g)(k) := f(k) + g(k), \\qquad (fg)(k) := \\sum_{i + j = k} f(i)\\,g(j),$$\n\nwhere the product sum ranges over the pairs $(i,j) \\in \\mathbb{Z} \\times\n\\mathbb{Z}$ with $i + j = k$ and $f(i)g(j) \\ne 0$. That set of pairs is finite\nfor every $k$, and $f + g$ and $fg$ again lie in $K$: this is\n[[lem-laurent-series-ring]], which also proves that $K$ with these operations is\na commutative ring whose zero $0_K$ is the constant function $0$ and whose\nidentity $1_K$ is the function taking the value $1$ at $0$ and $0$ elsewhere.\n\n**Distinguished elements.** For $n \\in \\mathbb{Z}$ let $t^{-n} \\in K$ be the\nfunction taking the value $1$ at $n$ and $0$ at every other index; so\n$t^{0} = 1_K$, and $t := t^{-(-1)}$ is the function taking the value $1$ at $-1$.\nFor $c \\in \\mathbb{R}$ let $\\iota(c) \\in K$ be the function taking the value $c$\nat $0$ and $0$ elsewhere. The notation $t^{-n}$ is *defined* here as a name;\nthat it is consistent with the ring multiplication, $t^{-m} \\, t^{-n} =\nt^{-(m+n)}$, is proved in [[lem-laurent-series-ring]].\n\n**Series notation.** Because $\\operatorname{supp} f$ is bounded below, say by\n$m$, one writes\n\n$$f \\;=\\; \\sum_{k \\ge m} f(k)\\, t^{-k},$$\n\na purely notational device: the object is the function $f$, and no convergence\nof any kind is asserted or used.\n\n**Valuation and leading coefficient.** Let $f \\in K$ with $f \\ne 0_K$. Then\n$\\operatorname{supp} f$ is nonempty and bounded below, so it has a least element\n([[lem-laurent-series-ring]]). Define\n\n$$v(f) \\;:=\\; \\min \\operatorname{supp} f \\in \\mathbb{Z}, \\qquad \\operatorname{lc}(f) \\;:=\\; f(v(f)) \\in \\mathbb{R} \\setminus \\{0\\}.$$\n\n$v(f)$ is the **valuation** and $\\operatorname{lc}(f)$ the **leading\ncoefficient** of $f$. Neither is defined at $f = 0_K$, whose support is empty;\nevery statement about $v$ or $\\operatorname{lc}$ in this library carries the\nhypothesis $f \\ne 0_K$ explicitly.\n\n**Order.** The **positive cone** of $K$ is\n\n$$P \\;:=\\; \\{\\, f \\in K : f \\ne 0_K \\text{ and } \\operatorname{lc}(f) > 0 \\,\\},$$\n\nthat is, a nonzero series is positive exactly when its lowest-index nonzero\ncoefficient is a positive real. That $(K, P)$ is an ordered field\n([[def-ordered-field]], [[def-field]]) is [[thm-laurent-ordered-field]], and\nthat every nonzero element of $K$ is invertible is\n[[thm-laurent-series-field]]. As in any ordered field, $f < g$ means\n$g - f \\in P$.",
      "uses": [
        "1.1",
        "1.2",
        "1.3",
        "1.4",
        "1.5",
        "1.6"
      ]
    },
    {
      "fact": "L3",
      "source": "def-field",
      "source_section": "Definition",
      "quote": "A **field** is a set $F$ equipped with two binary operations $+$ (addition) and\n$\\cdot$ (multiplication) and two distinguished elements $0 \\ne 1$ of $F$,\nsatisfying:\n\n- **(A)** $(F, +)$ is an abelian group with identity $0$: addition is\n  associative and commutative, $x + 0 = x$ for all $x$, and every $x$ has an\n  additive inverse $-x$ with $x + (-x) = 0$.\n- **(M)** Multiplication is associative and commutative **on all of $F$**, and\n  $x \\cdot 1 = x$ for every $x \\in F$; moreover $(F \\setminus \\{0\\}, \\cdot)$ is an\n  abelian group with identity $1$, so every $x \\ne 0$ has a multiplicative inverse\n  $x^{-1}$ with $x \\cdot x^{-1} = 1$.\n- **(D)** Multiplication distributes over addition: $x \\cdot (y + z) = x\\cdot y + x\\cdot z$.\n\nWe write $x - y := x + (-y)$ and $x/y := x \\cdot y^{-1}$ (for $y \\ne 0$), and\nabbreviate $x \\cdot y$ as $xy$.",
      "uses": [
        "1.2",
        "1.3"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-reals-ordered-field",
      "source_section": "Statement",
      "quote": "The relation of [[def-real-order]] is well defined and makes $\\mathbb{R}$\n([[thm-reals-field]]) a totally ordered field.",
      "uses": [
        "1.2",
        "1.3"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-int-ordered-ring",
      "source_section": "Statement",
      "quote": "The relation of [[def-int-order]] is well defined and is a total order on\n$\\mathbb{Z}$; it is compatible with addition ($x \\le y$ implies\n$x + z \\le y + z$) and positives are closed under multiplication\n($0 < x$ and $0 < y$ imply $0 < xy$). Thus $\\mathbb{Z}$ is a totally\nordered commutative ring.",
      "uses": [
        "1.2",
        "1.4",
        "1.6"
      ]
    },
    {
      "fact": "L4",
      "source": "def-int-order",
      "source_section": "Definition",
      "quote": "For integers $x = [(a,b)]$ and $y = [(c,d)]$ ([[def-integers]]) define\n\n$$x \\le y \\iff a + d \\le b + c \\quad \\text{in } \\mathbb{N}.$$\n\nWrite $x < y$ when $x \\le y$ and $x \\ne y$. An integer $x$ is **positive**\nwhen $0 < x$; on representatives, $0 < [(a,b)]$ exactly when $b < a$.",
      "uses": [
        "1.2",
        "1.4",
        "1.6"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "By [L1] $f$ vanishes at every index below $p$ and $g$ at every index below $q$, so by [L2] $(fg)(k) = 0$ for every $k < p + q$.",
      "step": "1.1",
      "inputs": [
        "L1",
        "L2"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "If $(i,j)$ satisfies $i + j = p+q$ and $f(i)g(j) \\ne 0$ then $i \\ge p$ and $j \\ge q$ by [L1], and $i + j = p + q$ then forces $i = p$ and $j = q$; hence $(fg)(p+q) = f(p)g(q) = \\operatorname{lc}(f)\\operatorname{lc}(g)$, which is nonzero by [L3].",
      "step": "1.2",
      "inputs": [
        "L1",
        "L3",
        "L2",
        "L4"
      ]
    },
    {
      "id": "step-1.3",
      "claim": "$(-f)(k) = -f(k)$ for every $k$, so $-f$ vanishes exactly where $f$ does; by [L1] and [L3] this gives $-f \\ne 0_K$, $v(-f) = p$ and $\\operatorname{lc}(-f) = -\\operatorname{lc}(f) \\ne 0$.",
      "step": "1.3",
      "inputs": [
        "L1",
        "L3",
        "L2"
      ]
    },
    {
      "id": "step-1.4",
      "claim": "Suppose $p < q$. For $k < p$ both $f(k) = 0$ and $g(k) = 0$, so $(f+g)(k) = 0$; and $g(p) = 0$ because $p < q$, so $(f+g)(p) = \\operatorname{lc}(f) \\ne 0$. By [L1], $f + g \\ne 0_K$ with $v(f+g) = p$ and $\\operatorname{lc}(f+g) = \\operatorname{lc}(f)$.",
      "step": "1.4",
      "inputs": [
        "L1",
        "L2",
        "L4"
      ]
    },
    {
      "id": "step-1.5",
      "claim": "Suppose $p = q$ and $\\operatorname{lc}(f) + \\operatorname{lc}(g) \\ne 0$. For $k < p$ both terms vanish, so $(f+g)(k) = 0$; and $(f+g)(p) = \\operatorname{lc}(f) + \\operatorname{lc}(g) \\ne 0$. By [L1], $f+g \\ne 0_K$, $v(f+g) = p$ and $\\operatorname{lc}(f+g) = \\operatorname{lc}(f) + \\operatorname{lc}(g)$.",
      "step": "1.5",
      "inputs": [
        "L1",
        "L2"
      ]
    },
    {
      "id": "step-1.6",
      "claim": "For $k < \\min\\{p,q\\}$ one has $f(k) = g(k) = 0$, hence $(f+g)(k) = 0$; so if $f + g \\ne 0_K$ then its valuation, being the least index at which it is nonzero, satisfies $v(f+g) \\ge \\min\\{p,q\\}$.",
      "step": "1.6",
      "inputs": [
        "L1",
        "L2",
        "L4"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "By [step 1.1] $fg$ vanishes at every index below $p+q$ and by [step 1.2] it is nonzero at $p+q$; so by [L1] $fg \\ne 0_K$, $v(fg) = p + q$ and $\\operatorname{lc}(fg) = \\operatorname{lc}(f)\\operatorname{lc}(g)$. Since $f$ and $g$ were arbitrary nonzero elements, no product of nonzero elements of $K$ is zero.",
      "step": "2.1",
      "inputs": [
        "L1",
        "step 1.1",
        "step 1.2"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "Clause 1 is [step 2.1], clause 2 is [step 1.3], clause 3 is [step 1.4], clause 4 is [step 1.5] and clause 5 is [step 1.6].",
      "step": "3.1",
      "inputs": [
        "step 2.1",
        "step 1.3",
        "step 1.4",
        "step 1.5",
        "step 1.6"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The valuation and leading-coefficient clauses assume both input series are nonzero, so their supports are nonempty."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Zero is excluded where v is used, while possible cancellation f+g=0 is isolated explicitly in the hypothesis of clause 5 and at step 1.6."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "At the single leading index p+q, step 1.2 proves that exactly the pair (p,q) contributes."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "Complete leading-term cancellation at equal valuation is excluded in step 1.5 and handled by the general lower bound at step 1.6 when the sum remains nonzero."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "Steps 1.1 and 1.2 distinguish strict indices below p+q from the endpoint p+q itself."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "No witness is chosen; all leading indices are already supplied by the nonzero hypotheses and the definition of valuation."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The statement is not a biconditional, so there is no forward implication boundary to audit."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The statement is not a biconditional, so there is no reverse implication boundary to audit."
    }
  ],
  "finite_smoke": []
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "lem-laurent-valuation",
    "sourcePage": "formal-laurent-series-field",
    "batch": "wave6-real-analysis-laurent",
    "target": "def-formal-laurent-series",
    "declared_target": "def-formal-laurent-series",
    "target_statement_provenance": null,
    "targetPage": "formal-laurent-series-field",
    "targetBatch": "wave6-real-analysis-laurent",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-laurent-valuation",
    "sourcePage": "formal-laurent-series-field",
    "batch": "wave6-real-analysis-laurent",
    "target": "lem-laurent-series-ring",
    "declared_target": "lem-laurent-series-ring",
    "target_statement_provenance": null,
    "targetPage": "formal-laurent-series-field",
    "targetBatch": "wave6-real-analysis-laurent",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-laurent-valuation",
    "sourcePage": "formal-laurent-series-field",
    "batch": "wave6-real-analysis-laurent",
    "target": "def-field",
    "declared_target": "def-field",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-laurent-valuation",
    "sourcePage": "formal-laurent-series-field",
    "batch": "wave6-real-analysis-laurent",
    "target": "thm-reals-ordered-field",
    "declared_target": "thm-reals-ordered-field",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-laurent-valuation",
    "sourcePage": "formal-laurent-series-field",
    "batch": "wave6-real-analysis-laurent",
    "target": "thm-int-ordered-ring",
    "declared_target": "thm-int-ordered-ring",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-laurent-valuation",
    "sourcePage": "formal-laurent-series-field",
    "batch": "wave6-real-analysis-laurent",
    "target": "def-int-order",
    "declared_target": "def-int-order",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Full text of every cited or declared item (6)

### `def-field`

````markdown
---
id: def-field
kind: definition
title: "Field"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: []
justified_by: [lem-of-inverse-unique]
aliases: []
landmark: false
short: "field"
verification:
  precheck: n/a
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-28
    scope: page
    delegated_by: owner
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
---

## Definition

A **field** is a set $F$ equipped with two binary operations $+$ (addition) and
$\cdot$ (multiplication) and two distinguished elements $0 \ne 1$ of $F$,
satisfying:

- **(A)** $(F, +)$ is an abelian group with identity $0$: addition is
  associative and commutative, $x + 0 = x$ for all $x$, and every $x$ has an
  additive inverse $-x$ with $x + (-x) = 0$.
- **(M)** Multiplication is associative and commutative **on all of $F$**, and
  $x \cdot 1 = x$ for every $x \in F$; moreover $(F \setminus \{0\}, \cdot)$ is an
  abelian group with identity $1$, so every $x \ne 0$ has a multiplicative inverse
  $x^{-1}$ with $x \cdot x^{-1} = 1$.
- **(D)** Multiplication distributes over addition: $x \cdot (y + z) = x\cdot y + x\cdot z$.

We write $x - y := x + (-y)$ and $x/y := x \cdot y^{-1}$ (for $y \ne 0$), and
abbreviate $x \cdot y$ as $xy$.

## Remarks

- The rationals $\mathbb{Q}$ ([[thm-rat-field]]) and both constructions of the
  reals ([[thm-reals-field]], [[thm-reals-dedekind-field]]) are fields. This
  definition states the field axioms once, abstractly, so that every field fact
  proved from them applies to all of these at once.
- The requirement $0 \ne 1$ excludes the trivial one-element structure.
- **Why (M) quantifies over all of $F$ explicitly** (amended 2026-07-28, owner
  approved). An earlier wording headed (M) with the group
  $(F \setminus \{0\}, \cdot)$ alone, and under that strict reading the axioms
  do not pin down the products $0 \cdot y$: take $\mathbb{F}_2$ and redefine
  $0 \cdot y := y$, which leaves (A) untouched, leaves
  $(F \setminus \{0\}, \cdot)$ the trivial group, and satisfies (D) in all eight
  instances, yet has $0 \cdot 1 = 1$ — making [[lem-of-zero-mult]] false in a
  purported model of the axioms. Associativity, commutativity and
  $x \cdot 1 = x$ are therefore asserted on **all** of $F$, the element $0$
  included. Commutativity on all of $F$ is also what turns (D) into its
  right-hand form $(y + z) \cdot x = y \cdot x + z \cdot x$, which
  [[lem-of-zero-mult]] uses.
- The identities $0, 1$ and the inverses $-x, x^{-1}$ are unique
  ([[lem-of-inverse-unique]]), so writing them as single-valued notation, and
  the abbreviations $x - y := x + (-y)$ and $x/y := x y^{-1}$, are legitimate.
````

### `def-formal-laurent-series`

````markdown
---
id: def-formal-laurent-series
kind: definition
title: "The formal Laurent series $\\mathbb{R}((t^{-1}))$: support bounded below, valuation, leading coefficient"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-real-numbers, thm-reals-ordered-field, def-integers, def-int-order, def-int-operations, thm-int-ordered-ring, def-field, def-ordered-field]
justified_by: [lem-laurent-series-ring, thm-laurent-series-field, thm-laurent-ordered-field]
aliases: []
landmark: true
short: "$\\mathbb{R}((t^{-1}))$"
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
    - title: "Formal power series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Formal_power_series"
    - title: "Hahn series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hahn_series"
    - title: "Ordered field (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordered_field"
    - title: "B. Sambale, An invitation to formal power series"
      url: "https://link.springer.com/article/10.1365/s13291-022-00256-6"
    - title: "H. G. Dales, Norming infinitesimals of large fields"
      url: "https://eprints.lancs.ac.uk/id/eprint/78955/1/Norminginfinitesimalsfinal.pdf"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the field of real numbers with its order
([[def-real-numbers]], [[thm-reals-ordered-field]]) and $\mathbb{Z}$ is the
totally ordered commutative ring of integers ([[def-integers]],
[[def-int-operations]], [[def-int-order]], [[thm-int-ordered-ring]]).

For a function $f : \mathbb{Z} \to \mathbb{R}$ write

$$\operatorname{supp} f \;:=\; \{\, k \in \mathbb{Z} : f(k) \ne 0 \,\},$$

and say that $\operatorname{supp} f$ is **bounded below** when there is
$m \in \mathbb{Z}$ with $f(k) = 0$ for every $k < m$. The set of **formal Laurent
series in $t^{-1}$ over $\mathbb{R}$** is

$$K \;=\; \mathbb{R}((t^{-1})) \;:=\; \{\, f : \mathbb{Z} \to \mathbb{R} \;\mid\; \operatorname{supp} f \text{ is bounded below} \,\},$$

equipped with

$$(f + g)(k) := f(k) + g(k), \qquad (fg)(k) := \sum_{i + j = k} f(i)\,g(j),$$

where the product sum ranges over the pairs $(i,j) \in \mathbb{Z} \times
\mathbb{Z}$ with $i + j = k$ and $f(i)g(j) \ne 0$. That set of pairs is finite
for every $k$, and $f + g$ and $fg$ again lie in $K$: this is
[[lem-laurent-series-ring]], which also proves that $K$ with these operations is
a commutative ring whose zero $0_K$ is the constant function $0$ and whose
identity $1_K$ is the function taking the value $1$ at $0$ and $0$ elsewhere.

**Distinguished elements.** For $n \in \mathbb{Z}$ let $t^{-n} \in K$ be the
function taking the value $1$ at $n$ and $0$ at every other index; so
$t^{0} = 1_K$, and $t := t^{-(-1)}$ is the function taking the value $1$ at $-1$.
For $c \in \mathbb{R}$ let $\iota(c) \in K$ be the function taking the value $c$
at $0$ and $0$ elsewhere. The notation $t^{-n}$ is *defined* here as a name;
that it is consistent with the ring multiplication, $t^{-m} \, t^{-n} =
t^{-(m+n)}$, is proved in [[lem-laurent-series-ring]].

**Series notation.** Because $\operatorname{supp} f$ is bounded below, say by
$m$, one writes

$$f \;=\; \sum_{k \ge m} f(k)\, t^{-k},$$

a purely notational device: the object is the function $f$, and no convergence
of any kind is asserted or used.

**Valuation and leading coefficient.** Let $f \in K$ with $f \ne 0_K$. Then
$\operatorname{supp} f$ is nonempty and bounded below, so it has a least element
([[lem-laurent-series-ring]]). Define

$$v(f) \;:=\; \min \operatorname{supp} f \in \mathbb{Z}, \qquad \operatorname{lc}(f) \;:=\; f(v(f)) \in \mathbb{R} \setminus \{0\}.$$

$v(f)$ is the **valuation** and $\operatorname{lc}(f)$ the **leading
coefficient** of $f$. Neither is defined at $f = 0_K$, whose support is empty;
every statement about $v$ or $\operatorname{lc}$ in this library carries the
hypothesis $f \ne 0_K$ explicitly.

**Order.** The **positive cone** of $K$ is

$$P \;:=\; \{\, f \in K : f \ne 0_K \text{ and } \operatorname{lc}(f) > 0 \,\},$$

that is, a nonzero series is positive exactly when its lowest-index nonzero
coefficient is a positive real. That $(K, P)$ is an ordered field
([[def-ordered-field]], [[def-field]]) is [[thm-laurent-ordered-field]], and
that every nonzero element of $K$ is invertible is
[[thm-laurent-series-field]]. As in any ordered field, $f < g$ means
$g - f \in P$.

## Remarks

- **Why the support must be bounded below.** It is exactly what makes the
  product a finite sum. If arbitrary functions $\mathbb{Z} \to \mathbb{R}$ were
  admitted, the defining sum for $(fg)(k)$ would range over an infinite set of
  pairs and would denote nothing, since $K$ carries no notion of convergence.
  The condition is preserved by both operations, which is the content of
  [[lem-laurent-series-ring]].

- **Indices run over all of $\mathbb{Z}$, and the edge cases are real.** The zero
  series has empty support and no valuation. A nonzero constant series
  $\iota(c)$ has $v(\iota(c)) = 0$ and $\operatorname{lc}(\iota(c)) = c$, so the
  index $k = 0$ is an ordinary index and not a boundary. Negative indices are
  admitted, and they are what makes $t = t^{-(-1)}$, whose support is $\{-1\}$,
  an element of $K$; a series may have finitely many terms of negative index but
  never infinitely many.

- **The order is not the coefficientwise order.** Two series are compared by
  their *lowest* differing coefficient, not by all of them at once, and this is
  what makes $t^{-1}$ smaller than every positive real constant while $t$ is
  larger than every real constant. The consequences are drawn in
  [[lem-laurent-non-archimedean]].

- **Relation to the rational functions.** The ordered field $\mathbb{R}(t)$ of
  [[cex-ordered-field-not-archimedean]], ordered so that $f > 0$ exactly when
  $f(x) > 0$ for all sufficiently large real $x$, is the standard first example
  of a non-Archimedean ordered field, and standard treatments identify it with a
  subfield of $K$ by expanding each rational function at infinity. **This page
  neither constructs that identification nor uses it**, and no item here may be
  cited for it: everything proved about $K$ below is proved from the definition
  above and nothing else. What the two objects share, and all that is used here,
  is the idea of ordering by behaviour at infinity.
````

### `def-int-order`

````markdown
---
id: def-int-order
kind: definition
title: "Order on the integers"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-integers]
justified_by: [thm-int-ordered-ring]
aliases: []
verification:
  precheck: n/a
  audited: 2026-07-24
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §4.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Integer — construction from pairs of naturals (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Integer"
pipeline_run: null
---

## Definition

For integers $x = [(a,b)]$ and $y = [(c,d)]$ ([[def-integers]]) define

$$x \le y \iff a + d \le b + c \quad \text{in } \mathbb{N}.$$

Write $x < y$ when $x \le y$ and $x \ne y$. An integer $x$ is **positive**
when $0 < x$; on representatives, $0 < [(a,b)]$ exactly when $b < a$.

## Remarks

- The defining inequality is "$a - b \le c - d$" restated without subtraction.
- Well-definedness, totality, and compatibility with the arithmetic are proved
  in [[thm-int-ordered-ring]].
````

### `lem-laurent-series-ring`

````markdown
---
id: lem-laurent-series-ring
kind: lemma
title: "$\\mathbb{R}((t^{-1}))$ is a commutative ring: the product is a finite sum and both operations preserve support bounded below"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-formal-laurent-series, thm-int-ordered-ring, def-int-order, def-int-operations, thm-well-ordering-principle, lem-nat-embeds-int, def-field, thm-reals-ordered-field]
aliases: []
landmark: false
short: "$K$ is a commutative ring"
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
    - title: "Formal power series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Formal_power_series"
    - title: "Hahn series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hahn_series"
    - title: "B. Sambale, An invitation to formal power series"
      url: "https://link.springer.com/article/10.1365/s13291-022-00256-6"
    - title: "H. G. Dales, Norming infinitesimals of large fields"
      url: "https://eprints.lancs.ac.uk/id/eprint/78955/1/Norminginfinitesimalsfinal.pdf"
pipeline_run: null
---

## Statement

Let $K = \mathbb{R}((t^{-1}))$ be as in [[def-formal-laurent-series]], and let
$f, g \in K$, with $m, n \in \mathbb{Z}$ chosen so that $f(i) = 0$ for all
$i < m$ and $g(j) = 0$ for all $j < n$. Then:

1. **(Finiteness.)** For every $k \in \mathbb{Z}$ the set
   $S_k := \{\, (i,j) \in \mathbb{Z} \times \mathbb{Z} : i + j = k,\; f(i)g(j) \ne 0 \,\}$
   is finite, so $(fg)(k) = \sum_{i+j=k} f(i)g(j)$ is a finite sum of reals; and
   $S_k = \varnothing$ whenever $k < m + n$.
2. **(Closure.)** $f + g$, $-f$ and $fg$ lie in $K$, with $(f+g)(k) = 0$ for
   $k < \min(m,n)$ and $(fg)(k) = 0$ for $k < m + n$.
3. **(Ring.)** $(K, +, \cdot\,, 0_K, 1_K)$ is a commutative ring with identity,
   and $1_K \ne 0_K$.
4. **(Monomials and constants.)** $(t^{-a}h)(k) = h(k-a)$ for every $h \in K$
   and all $a, k \in \mathbb{Z}$; consequently $t^{-a} \, t^{-b} = t^{-(a+b)}$
   for all $a, b \in \mathbb{Z}$. Moreover $(\iota(c)f)(k) = c\, f(k)$ for all
   $c \in \mathbb{R}$ and $k \in \mathbb{Z}$.
5. **(Least element.)** Every nonempty $S \subseteq \mathbb{Z}$ that is bounded
   below has a least element. In particular $\operatorname{supp} f$ has a least
   element whenever $f \ne 0_K$, so the valuation $v(f)$ and the leading
   coefficient $\operatorname{lc}(f)$ of [[def-formal-laurent-series]] are
   defined.

## Facts & Assumptions

**Given:** $K$, its operations, $0_K$, $1_K$, the monomials $t^{-n}$ and the constants $\iota(c)$ as in [[def-formal-laurent-series]]; elements $f, g \in K$ and bounds $m, n \in \mathbb{Z}$ with $f(i) = 0$ for $i < m$ and $g(j) = 0$ for $j < n$.

[L1] $K$ consists of the functions $\mathbb{Z} \to \mathbb{R}$ whose support is bounded below; $(f+g)(k) = f(k) + g(k)$ and $(fg)(k) = \sum_{i+j=k} f(i)g(j)$; $0_K$ is the zero function, $1_K$ is $1$ at index $0$ and $0$ elsewhere, $t^{-a}$ is $1$ at index $a$ and $0$ elsewhere, and $\iota(c)$ is $c$ at index $0$ and $0$ elsewhere ([[def-formal-laurent-series]]).

[L2] $\mathbb{Z}$ is a totally ordered commutative ring: its order is total, and $x \le y$ implies $x + z \le y + z$ ([[thm-int-ordered-ring]], [[def-int-order]], [[def-int-operations]]).

[L3] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L4] The map $\varepsilon(a) = [(a,0)]$ is injective from $\mathbb{N}$ onto the set of nonnegative integers and preserves addition and order, so every integer $x \ge 0$ is $\varepsilon(a)$ for a unique natural $a$ ([[lem-nat-embeds-int]]).

[L5] $\mathbb{R}$ is a field: addition and multiplication are associative and commutative, multiplication distributes over addition, $0 \ne 1$, and a finite sum of reals is independent of the order and bracketing of its terms ([[def-field]], [[thm-reals-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Let $S \subseteq \mathbb{Z}$ be nonempty with $s \ge b$ for all $s \in S$. Every element of $T := \{\, s - b : s \in S \,\}$ is a nonnegative integer, so by [L4] $T = \{\, \varepsilon(a) : a \in A \,\}$ for a nonempty $A \subseteq \mathbb{N}$; by [L3] $A$ has a least element $a_0$, and since $\varepsilon$ preserves order and $x \mapsto x + b$ preserves order, $\varepsilon(a_0) + b$ is an element of $S$ that is $\le$ every element of $S$. [L2, L3, L4]

1.2 Fix $k \in \mathbb{Z}$ and let $(i,j) \in S_k$. Then $f(i) \ne 0$ and $g(j) \ne 0$, so $i \ge m$ and $j \ge n$; from $i + j = k$ and $j \ge n$ we get $i = k - j \le k - n$. Hence $m \le i \le k - n$, and $j = k - i$ is determined by $i$. [given, L1, L2]

2.1 The integers $i$ with $m \le i \le k - n$ are in order-preserving bijection with the naturals $a$ satisfying $\varepsilon(a) \le k - n - m$ by [L4], and there are finitely many of these, none at all when $k - n - m < 0$; so $S_k$ is a finite set by [step 1.2], it is empty whenever $k < m + n$, and therefore $(fg)(k)$ is a finite sum of reals which is $0$ whenever $k < m + n$. [step 1.2, L2, L4, L5]

3.1 $(f+g)(k) = f(k) + g(k) = 0$ for every $k < \min(m,n)$ and $(-f)(k) = -f(k) = 0$ for every $k < m$, so $f + g$ and $-f$ have support bounded below; and $(fg)(k) = 0$ for every $k < m+n$ by [step 2.1], so $fg$ does too. All three therefore lie in $K$. [step 2.1, given, L1, L5]

3.2 $(fg)(k) = \sum_{i+j=k} f(i)g(j) = \sum_{j+i=k} g(j)f(i) = (gf)(k)$, since the two sums have the same finite index set and their terms agree by commutativity of multiplication in $\mathbb{R}$; so multiplication on $K$ is commutative. [step 2.1, L5]

3.3 For $f, g, h \in K$ and $k \in \mathbb{Z}$, expanding both $((fg)h)(k)$ and $(f(gh))(k)$ by [L1] and [L5] gives the sum of $f(i)g(j)h(l)$ over the triples $(i,j,l)$ with $i + j + l = k$ and $f(i)g(j)h(l) \ne 0$; that set is finite because the argument of [step 1.2] bounds $i$, $j$ and $l$ from below and hence, as in [step 2.1], from above as well. So multiplication on $K$ is associative. [step 1.2, step 2.1, L5]

3.4 $(f(g+h))(k) = \sum_{i+j=k} f(i)\bigl(g(j) + h(j)\bigr) = \sum_{i+j=k} f(i)g(j) + \sum_{i+j=k} f(i)h(j) = (fg)(k) + (fh)(k)$, all three sums being finite; so multiplication distributes over addition. [step 2.1, L5]

3.5 For $h \in K$, $(t^{-a}h)(k) = \sum_{i+j=k} t^{-a}(i)h(j)$ has at most one nonzero term, the one with $i = a$ and $j = k - a$, so $(t^{-a}h)(k) = h(k-a)$; taking $h = t^{-b}$ gives $(t^{-a}t^{-b})(k) = t^{-b}(k-a)$, which is $1$ when $k = a+b$ and $0$ otherwise, that is, $t^{-a}t^{-b} = t^{-(a+b)}$. [step 2.1, L1]

3.6 $(\iota(c)f)(k) = \sum_{i+j=k} \iota(c)(i) f(j)$ has at most one nonzero term, the one with $i = 0$ and $j = k$, so $(\iota(c)f)(k) = c\,f(k)$. [step 2.1, L1]

3.7 $(f \cdot 1_K)(k) = \sum_{i+j=k} f(i) 1_K(j)$ has at most one nonzero term, the one with $j = 0$ and $i = k$, so $(f \cdot 1_K)(k) = f(k)$ and $f \cdot 1_K = f$; moreover $1_K(0) = 1 \ne 0 = 0_K(0)$, so $1_K \ne 0_K$. [step 2.1, L1, L5]

4.1 Addition on $K$ is defined index by index, and $K$ is closed under it and under negation by [step 3.1]; so associativity, commutativity, the law $f + 0_K = f$ and the law $f + (-f) = 0_K$ each hold at every index by the corresponding law in $\mathbb{R}$, and $(K, +, 0_K)$ is an abelian group. [step 3.1, L1, L5]

5.1 By [step 4.1] addition makes $K$ an abelian group, by [step 3.2], [step 3.3] and [step 3.7] multiplication is commutative and associative with identity $1_K \ne 0_K$, and by [step 3.4] it distributes over addition; hence $K$ is a commutative ring with identity. [step 3.2, step 3.3, step 3.4, step 3.7, step 4.1]

6.1 Clause 1 is [step 2.1], clause 2 is [step 3.1] with [step 2.1], clause 3 is [step 5.1], clause 4 is [step 3.5] and [step 3.6], and clause 5 is [step 1.1] applied to $S = \operatorname{supp} f$, which is nonempty when $f \ne 0_K$ and bounded below because $f \in K$. [step 1.1, step 2.1, step 3.1, step 3.5, step 3.6, step 5.1] ∎
````

### `thm-int-ordered-ring`

````markdown
---
id: thm-int-ordered-ring
kind: theorem
title: "The integers form a totally ordered ring"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-integers, def-int-operations, def-int-order, def-nat-order,
       thm-int-comm-ring, lem-nat-add-commutative,
       lem-nat-add-associative, thm-nat-linear-order,
       lem-nat-order-add-compatible, lem-nat-mult-commutative,
       lem-nat-mult-associative, lem-nat-mult-distributive,
       lem-nat-mult-identity, lem-nat-order-mult-compatible]
aliases: []
landmark: true
short: "ℤ ordered ring"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-dependency-repair
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §4.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Integer — construction from pairs of naturals (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Integer"
pipeline_run: null
---

## Statement

The relation of [[def-int-order]] is well defined and is a total order on
$\mathbb{Z}$; it is compatible with addition ($x \le y$ implies
$x + z \le y + z$) and positives are closed under multiplication
($0 < x$ and $0 < y$ imply $0 < xy$). Thus $\mathbb{Z}$ is a totally
ordered commutative ring.

## Facts & Assumptions

**Given:** Integers $x = [(a,b)]$, $y = [(c,d)]$, $z = [(e,f)]$ with the operations of [[def-int-operations]].

[L1] Addition on $\mathbb{N}$ is commutative and associative ([[lem-nat-add-commutative]], [[lem-nat-add-associative]]).

[L2] The order on $\mathbb{N}$ is total, antisymmetric, and transitive ([[thm-nat-linear-order]]).

[L3] Natural order is translation-invariant: $x\le y\iff x+z\le y+z$ ([[lem-nat-order-add-compatible]]).

[L4] By the definition of natural order, $x\le y$ exactly when $y=x+k$ for some natural $k$; if $x<y$, such a gap is nonzero ([[def-nat-order]]).

[L5] Natural multiplication is commutative and associative, distributes over addition, and has the usual zero and identity laws; multiplication by a nonzero natural preserves strict order ([[lem-nat-mult-commutative]], [[lem-nat-mult-associative]], [[lem-nat-mult-distributive]], [[lem-nat-mult-identity]], [[lem-nat-order-mult-compatible]]).

[L6] The integer operations make $\mathbb{Z}$ a commutative ring with multiplicative identity ([[thm-int-comm-ring]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $(a,b) \sim (a',b')$ and $(c,d) \sim (c',d')$, i.e. $a + b' = b + a'$ and $c + d' = d + c'$. [given]

1.2 Suppose $a + d \le b + c$. [given]

1.3 Totality: in $\mathbb{N}$ either $a + d \le b + c$ or $b + c \le a + d$, so $x \le y$ or $y \le x$. [L2]

1.4 Antisymmetry: $x \le y$ and $y \le x$ give $a + d \le b + c$ and $b + c \le a + d$, hence $a + d = b + c$, which is $x = y$ as classes. [L2]

1.5 Transitivity: from $a + d \le b + c$ and $c + f \le d + e$, adding gives $(a+d)+(c+f) \le (b+c)+(d+e)$; regrouping, $(a+f)+(c+d) \le (b+e)+(c+d)$; cancelling, $a + f \le b + e$, i.e. $x \le z$. [L1, L2, L3]

1.6 Compatibility with addition: $x + z \le y + z$ reads $(a+e)+(d+f) \le (b+f)+(c+e)$, which regroups to $(a+d) + (e+f) \le (b+c) + (e+f)$, equivalent to $a + d \le b + c$, i.e. $x \le y$. [L1, L3]

1.7 Suppose $0 < x$ and $0 < y$, i.e. $b < a$ and $d < c$. [given]

2.1 Adding $(a'+d')$: $(a+d) + (a'+d') \le (b+c) + (a'+d')$. [step 1.2, L3]

2.2 Regrouping with the equations of step 1.1: $(b+c) + (a'+d') = (b+a') + (c+d') = (a+b') + (d+c') = (a+d) + (b'+c')$. [step 1.1, L1]

2.3 Write $a = b + k$ and $c = d + m$ with nonzero naturals $k,m$. [step 1.7, L4]

3.1 So $(a+d) + (a'+d') \le (a+d) + (b'+c')$; cancelling $(a+d)$ gives $a'+d'\le b'+c'$. Applying the same argument with primed and unprimed representatives exchanged proves the converse implication, so the relation is independent of representatives. [step 1.1, step 2.1, step 2.2, L3]

3.2 Expanding both components of $xy = [(ac+bd,\, ad+bc)]$: $ac + bd = (b+k)(d+m) + bd = (bd + bm + kd + bd) + km$ and $ad + bc = (b+k)d + b(d+m) = bd + kd + bd + bm$, so $ac + bd = (ad + bc) + km$. [step 2.3, L1, L5]

4.1 Since $k,m$ are nonzero, $0<k$ and $0<m$ by [L4]. Hence [L5] gives $0=0\cdot m<km$, and step 3.2 yields $ad+bc<ac+bd$, which is $0<xy$. [step 2.3, step 3.2, L2, L4, L5]

5.1 The order is well defined, total, compatible with addition, and positives are closed under multiplication; together with [L6], this makes $\mathbb{Z}$ a totally ordered commutative ring. [step 3.1, step 1.3, step 1.4, step 1.5, step 1.6, step 4.1, L6] ∎
````

### `thm-reals-ordered-field`

````markdown
---
id: thm-reals-ordered-field
kind: theorem
title: "The reals form a totally ordered field"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-real-order, def-real-numbers, thm-reals-field, lem-cauchy-away-from-zero, thm-rat-ordered-field, def-null-sequence]
aliases: []
landmark: true
short: "ℝ ordered field"
proof_strategy: direct
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
    - title: "T. Tao, Analysis I, 3rd ed., §5.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "L. S. Krapp, Constructions of the real numbers: a set theoretical approach (Oxford, 2014)"
      url: "https://www.math.uni-konstanz.de/~krapp/research/Constructions_of_the_real_numbers.pdf"
pipeline_run: null
---

## Statement

The relation of [[def-real-order]] is well defined and makes $\mathbb{R}$
([[thm-reals-field]]) a totally ordered field.

## Facts & Assumptions

**Given:** Reals $x, y$ with representatives $(a_n), (b_n)$.

[L1] A sequence $(u_n)_{n \ge 1}$ of rational numbers is null if, for every rational $\varepsilon > 0$, there is $N \in \mathbb{N}$ such that $|u_n| < \varepsilon$ for every $n \ge N$ ([[def-null-sequence]]).

[L2] Ordered-field arithmetic in $\mathbb{Q}$: $\delta/2 > 0$; sums and products of eventual lower bounds ([[thm-rat-ordered-field]]).

[L3] Dichotomy for non-null Cauchy sequences: eventually $> \delta$ or eventually $< -\delta$ ([[lem-cauchy-away-from-zero]]).

[L4] $\mathbb{R}$ is a field ([[thm-reals-field]]).

[L5] In $\mathbb{R} = \mathcal{C}/\mathcal{N}$, $x = 0$ iff a representative is null; so $x \ne 0$ iff every representative is non-null ([[def-real-numbers]]).

## Proof

**Proof technique:** direct.

1.1 Positivity is independent of the representative: if $a_n > \delta$ for $n \ge N$ and $(a'_n - a_n)$ is null, then beyond some $N' \ge N$ also $|a'_n - a_n| < \delta/2$, so $a'_n > \delta/2$: the defining property holds for $(a'_n)$ with $\delta/2$. [L1, L2]

1.2 Trichotomy: if $x \ne 0$, any representative is non-null, so by the dichotomy either $a_n > \delta$ eventually ($x$ positive) or $a_n < -\delta$ eventually ($-x$ positive); the two exclude each other, and exactly one of $x$ positive, $x = 0$, $-x$ positive holds. [L1, L3, L5]

1.3 Positives are closed under $+$ and $\cdot$: from $a_n > \delta$ and $b_n > \delta'$ eventually, $a_n + b_n > \delta + \delta'$ and $a_n b_n > \delta\delta'$ eventually, with $\delta + \delta', \delta\delta' > 0$. [L2]

2.1 Consequently $\le$ is a total order (trichotomy plus transitivity from closure under sums), compatible with addition (translation preserves the difference) and with multiplication by positives: $\mathbb{R}$ is a totally ordered field. [step 1.1, step 1.2, step 1.3, L4] ∎
````

