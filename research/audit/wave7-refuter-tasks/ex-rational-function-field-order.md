## Selection reasons

- critical risk (10): 9 declared dependencies; 11 cited facts; 7 numbered proof steps; boundary-sensitive language; analytic limiting/completeness language

## Target item — `ex-rational-function-field-order`

Normalized current SHA-256: `9cdd2dabbcf8367cedd558f4fd65d2f6f98bf138c6791387583408e50625683c`

The complete current item follows, including frontmatter:

````markdown
---
id: ex-rational-function-field-order
kind: example
title: "The rational function field $\\mathbb{R}(t)$ ordered by the eventual sign is an ordered field, worked out"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cex-ordered-field-not-archimedean, def-ordered-field, def-field, def-archimedean-field, lem-of-square-positive, lem-of-sign-rules, lem-of-inverse-positive, lem-of-q-embeds, thm-reals-ordered-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "D. J. Eck, Axioms for the Real Numbers"
      url: "https://math.hws.edu/eck/math331/guide2020/04-axioms-for-R.html"
    - title: "Ordered field (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordered_field"
    - title: "Field of fractions (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Field_of_fractions"
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
pipeline_run: null
---

## Example

Let $\mathbb{R}(t)$ be the field of fractions of the polynomial ring
$\mathbb{R}[t]$, and let

$$P \;=\; \{\, f \in \mathbb{R}(t) : f \ne 0 \text{ and } f(x) > 0 \text{ for all sufficiently large real } x \,\}.$$

[[cex-ordered-field-not-archimedean]] proves that $(\mathbb{R}(t), P)$ is an
ordered field and that it is not Archimedean. This example works the order out
in usable form. Three things are established below:

1. **A computation rule.** For $f = p/q$ with $p, q \in \mathbb{R}[t]$ nonzero,
   $f \in P$ exactly when $\operatorname{lc}(p)\operatorname{lc}(q) > 0$, where
   $\operatorname{lc}$ is the leading coefficient. So comparing two rational
   functions is comparing one product of two real numbers.
2. **That the rule is independent of the representative** $p/q$ chosen, which is
   what makes it a definition of a function on $\mathbb{R}(t)$ and not merely on
   pairs.
3. **The two elements that make the field interesting**: $t$, which exceeds
   every canonical natural, and $1/t$, which is positive and lies below every
   positive rational. An element of the second kind is called an
   *infinitesimal*, and its existence is exactly the failure of the Archimedean
   property ([[def-archimedean-field]]).

## Facts & Assumptions

**Given:** The field $\mathbb{R}(t)$ of fractions of $\mathbb{R}[t]$, whose elements are written $p/q$ with $p, q \in \mathbb{R}[t]$ and $q \ne 0$, with $p/q = p'/q'$ exactly when $pq' = p'q$; and the set $P$ above. For a nonzero $p \in \mathbb{R}[t]$, $\operatorname{lc}(p)$ denotes its leading coefficient.

[L1] $(\mathbb{R}(t), P)$ is an ordered field, and $n \cdot 1 < t$ for every natural $n$, so it is not Archimedean ([[cex-ordered-field-not-archimedean]], [[def-ordered-field]], [[def-archimedean-field]]).

[L2] A nonzero real polynomial has finitely many real roots, and beyond all of them its values have the constant sign of its leading coefficient; $\mathbb{R}[t]$ is an integral domain, so $\operatorname{lc}(pq) = \operatorname{lc}(p)\operatorname{lc}(q)$ and a product of nonzero polynomials is nonzero ([[cex-ordered-field-not-archimedean]], [[thm-reals-ordered-field]], [[def-field]]).

[L3] In $\mathbb{R}$, a nonzero square is positive ([[lem-of-square-positive]]); a product of two nonzero reals is positive exactly when both are positive or both are negative ([[lem-of-sign-rules]]).

[L4] In an ordered field, $f < g$ means $g - f \in P$; a positive element has a positive inverse ([[lem-of-inverse-positive]], [[def-ordered-field]]).

[L5] The canonical embedding of $\mathbb{Q}$ into an ordered field is an order embedding, so a rational $q > 0$ names a positive element $q \cdot 1$ of $\mathbb{R}(t)$ ([[lem-of-q-embeds]]).

## Verification

**Proof technique:** direct.

1.1 For nonzero $p, q \in \mathbb{R}[t]$ there is a real $X$ beyond which neither $p$ nor $q$ vanishes, so $f = p/q$ has a value $f(x) = p(x)/q(x)$ for every $x > X$, and the sign of that value is the sign of $\operatorname{lc}(p)\operatorname{lc}(q)$; hence $f \in P$ exactly when $\operatorname{lc}(p)\operatorname{lc}(q) > 0$. [L2, L3]

1.2 If $p/q = p'/q'$ then $pq' = p'q$, so $\operatorname{lc}(p)\operatorname{lc}(q') = \operatorname{lc}(p')\operatorname{lc}(q)$; multiplying both sides by $\operatorname{lc}(q)\operatorname{lc}(q')$ gives $\operatorname{lc}(p)\operatorname{lc}(q)\cdot\operatorname{lc}(q')^2 = \operatorname{lc}(p')\operatorname{lc}(q')\cdot \operatorname{lc}(q)^2$, and both squares are positive, so $\operatorname{lc}(p)\operatorname{lc}(q)$ and $\operatorname{lc}(p')\operatorname{lc}(q')$ have the same sign. [L2, L3]

2.1 The rule of step 1.1 is therefore independent of the representative and computes membership in $P$; combined with [L1] it computes the order: $p/q < p'/q'$ exactly when the numerator and denominator of $p'/q' - p/q$, written in any representative, have leading coefficients of positive product. [step 1.1, step 1.2, L1, L4]

2.2 $1/t \in P$, since $\operatorname{lc}(1)\operatorname{lc}(t) = 1 > 0$; equivalently, $t \in P$ and inverses of positives are positive. [step 1.1, L3, L4]

3.1 For every rational $q > 0$: $q \cdot 1 - 1/t = (qt - 1)/t$, whose leading coefficients have product $q \cdot 1 = q > 0$, so $1/t < q \cdot 1$. Together with step 2.2, $0 < 1/t < q\cdot 1$ for every positive rational $q$. [step 1.1, step 2.1, step 2.2, L3, L5]

3.2 For every natural $n$: $t - n \cdot 1$ has leading coefficients with product $1 > 0$, so $n \cdot 1 < t$; and $t^2 - t = t(t-1)$ likewise gives $t < t^2$. [step 1.1, step 2.1, L2, L3]

4.1 So $\mathbb{R}(t)$ is an ordered field, computed by a single product of leading coefficients, in which $t$ is larger than every canonical natural and $1/t$ is a positive infinitesimal. [step 2.1, step 3.1, step 3.2, L1] ∎

## Remarks

- **Why the eventual sign, and not the sign at a point.** Evaluating at a fixed real $x_0$ is not even a function on all of $\mathbb{R}(t)$, since a rational function may have a pole at $x_0$; and even where evaluation is defined, its sign cannot give a positive cone on the field, because the nonzero rational function $t-x_0$ evaluates to $0$, so trichotomy fails. The behaviour at $+\infty$ is one representative-independent, multiplicative choice, and step 1.1 is exactly that statement.

- **What this field is and is not good for.** It is the library's cheapest witness that an ordered field need not be Archimedean, and [[cex-q-not-dense-in-an-ordered-field]] uses the infinitesimal $1/t$ found above to show $\mathbb{Q}$ need not be dense. It is **not** a witness for the completeness failures of [[fs-nested-intervals-implies-lub]] or [[fs-cauchy-complete-implies-lub]]: nothing in this library proves that $\mathbb{R}(t)$ is Cauchy complete or that it has any nested interval property, and in fact it is neither. Those two need the larger field $\mathbb{R}((t^{-1}))$, which is why that field was built ([[ex-cauchy-complete-not-complete-field]]).

- **The order is the one induced from $\mathbb{R}((t^{-1}))$ in spirit but not by any embedding proved here.** Both fields order an element by its behaviour at infinity, and in both the comparison looks at a single coefficient. This library constructs no embedding of one into the other and never uses one.
````

## Wave 7 provenance row for the target

```json
{
  "id": "ex-rational-function-field-order",
  "statement": "literature-derived",
  "proof": "ai-generated",
  "evidence": "exact-source",
  "urls": [
    "https://math.hws.edu/eck/math331/guide2020/04-axioms-for-R.html"
  ],
  "rationale": "The source defines positivity in the real rational-function field by the sign of the leading coefficient after normalizing the denominator, proves closure under addition and multiplication, and shows that t exceeds every canonical natural. This is exactly the local eventual-positive-infinity order; the local proof expands representative independence and the infinitesimal 1/t.",
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
      "source": "cex-ordered-field-not-archimedean",
      "source_section": "Statement refuted",
      "quote": "**Refuted claim:** every ordered field is Archimedean, that is, in every ordered\nfield $F$ each $x \\in F$ satisfies $x < n \\cdot 1_F$ for some natural number $n$.\n\nThe witness is $\\mathbb{R}(t)$, the field of rational functions over $\\mathbb{R}$,\nordered so that $f > 0$ exactly when $f(x) > 0$ for all sufficiently large real\n$x$. In this ordered field the element $t$ exceeds every canonical natural\nnumber, so the naturals are not cofinal.",
      "uses": [
        "2.1",
        "4.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-ordered-field",
      "source_section": "Definition",
      "quote": "An **ordered field** is a field $F$ ([[def-field]]) together with a subset\n$P \\subseteq F$, the set of **positive** elements (the *positive cone*),\nsatisfying:\n\n- **(O1) Trichotomy.** For each $x \\in F$, exactly one of the following holds:\n  $x \\in P$, or $x = 0$, or $-x \\in P$.\n- **(O2) Closure.** If $x, y \\in P$ then $x + y \\in P$ and $x \\cdot y \\in P$.\n\nWe write $x > 0$ for $x \\in P$ (read \"$x$ is positive\"), and define the order by\n\n$$a < b \\;:\\Longleftrightarrow\\; b - a \\in P, \\qquad a \\le b \\;:\\Longleftrightarrow\\; a < b \\text{ or } a = b.$$\n\nThus $a > b$ means $b < a$, and $a \\ge b$ means $b \\le a$. An element $x$ with\n$-x \\in P$ (equivalently $x < 0$) is called **negative**.",
      "uses": [
        "2.1",
        "4.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-archimedean-field",
      "source_section": "Definition",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]). For a natural number\n$n \\ge 1$, write $n \\cdot 1_F := \\underbrace{1_F + \\cdots + 1_F}_{n}$ for the\n$n$-fold sum of the multiplicative identity, and $0 \\cdot 1_F := 0$. These are\nthe **canonical natural numbers** of $F$.\n\n$F$ is **Archimedean** if for every $x \\in F$ there is a natural number $n$ with\n\n$$x < n \\cdot 1_F.$$\n\nEquivalently, the canonical naturals $(n \\cdot 1_F)_{n \\ge 1}$ are **cofinal**:\nno single element of $F$ is an upper bound for all of them.",
      "uses": [
        "2.1",
        "4.1"
      ]
    },
    {
      "fact": "L2",
      "source": "cex-ordered-field-not-archimedean",
      "source_section": "Statement refuted",
      "quote": "**Refuted claim:** every ordered field is Archimedean, that is, in every ordered\nfield $F$ each $x \\in F$ satisfies $x < n \\cdot 1_F$ for some natural number $n$.\n\nThe witness is $\\mathbb{R}(t)$, the field of rational functions over $\\mathbb{R}$,\nordered so that $f > 0$ exactly when $f(x) > 0$ for all sufficiently large real\n$x$. In this ordered field the element $t$ exceeds every canonical natural\nnumber, so the naturals are not cofinal.",
      "uses": [
        "1.1",
        "1.2",
        "3.2"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-reals-ordered-field",
      "source_section": "Statement",
      "quote": "The relation of [[def-real-order]] is well defined and makes $\\mathbb{R}$\n([[thm-reals-field]]) a totally ordered field.",
      "uses": [
        "1.1",
        "1.2",
        "3.2"
      ]
    },
    {
      "fact": "L2",
      "source": "def-field",
      "source_section": "Definition",
      "quote": "A **field** is a set $F$ equipped with two binary operations $+$ (addition) and\n$\\cdot$ (multiplication) and two distinguished elements $0 \\ne 1$ of $F$,\nsatisfying:\n\n- **(A)** $(F, +)$ is an abelian group with identity $0$: addition is\n  associative and commutative, $x + 0 = x$ for all $x$, and every $x$ has an\n  additive inverse $-x$ with $x + (-x) = 0$.\n- **(M)** Multiplication is associative and commutative **on all of $F$**, and\n  $x \\cdot 1 = x$ for every $x \\in F$; moreover $(F \\setminus \\{0\\}, \\cdot)$ is an\n  abelian group with identity $1$, so every $x \\ne 0$ has a multiplicative inverse\n  $x^{-1}$ with $x \\cdot x^{-1} = 1$.\n- **(D)** Multiplication distributes over addition: $x \\cdot (y + z) = x\\cdot y + x\\cdot z$.\n\nWe write $x - y := x + (-y)$ and $x/y := x \\cdot y^{-1}$ (for $y \\ne 0$), and\nabbreviate $x \\cdot y$ as $xy$.",
      "uses": [
        "1.1",
        "1.2",
        "3.2"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-of-square-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$. For\nevery $a \\in F$ with $a \\neq 0$ we have $a^2 > 0$, where $a^2 = a \\cdot a$. In\nparticular, every nonzero square is positive.",
      "uses": [
        "1.1",
        "1.2",
        "2.2",
        "3.1",
        "3.2"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-of-sign-rules",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and\nlet $a, b, c \\in F$.\n\n1. If $a > 0$ and $b > 0$ then $ab > 0$.\n2. If $a > 0$ and $b < 0$ then $ab < 0$.\n3. If $a < 0$ and $b < 0$ then $ab > 0$.\n4. If $c > 0$ then $a < b \\iff ac < bc$.\n5. If $c < 0$ then $a < b \\iff bc < ac$ (multiplication by a negative reverses order).",
      "uses": [
        "1.1",
        "1.2",
        "2.2",
        "3.1",
        "3.2"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-of-inverse-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and\nlet $a, b \\in F$.\n\n1. If $a > 0$ then $a^{-1} > 0$.\n2. If $0 < a < b$ then $0 < b^{-1} < a^{-1}$.",
      "uses": [
        "2.1",
        "2.2"
      ]
    },
    {
      "fact": "L4",
      "source": "def-ordered-field",
      "source_section": "Definition",
      "quote": "An **ordered field** is a field $F$ ([[def-field]]) together with a subset\n$P \\subseteq F$, the set of **positive** elements (the *positive cone*),\nsatisfying:\n\n- **(O1) Trichotomy.** For each $x \\in F$, exactly one of the following holds:\n  $x \\in P$, or $x = 0$, or $-x \\in P$.\n- **(O2) Closure.** If $x, y \\in P$ then $x + y \\in P$ and $x \\cdot y \\in P$.\n\nWe write $x > 0$ for $x \\in P$ (read \"$x$ is positive\"), and define the order by\n\n$$a < b \\;:\\Longleftrightarrow\\; b - a \\in P, \\qquad a \\le b \\;:\\Longleftrightarrow\\; a < b \\text{ or } a = b.$$\n\nThus $a > b$ means $b < a$, and $a \\ge b$ means $b \\le a$. An element $x$ with\n$-x \\in P$ (equivalently $x < 0$) is called **negative**.",
      "uses": [
        "2.1",
        "2.2"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-of-q-embeds",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]). There is a unique field\nhomomorphism $\\iota : \\mathbb{Q} \\to F$ ([[def-field-homomorphism]]). On the\nintegers it is given by $n \\mapsto n \\cdot 1_F$ (with $-n \\mapsto -(n \\cdot 1_F)$\nand $0 \\mapsto 0$), and on a rational written as $p/q$ with $q \\ge 1$ by\n$\\iota(p/q) = \\iota(p)\\,(q \\cdot 1_F)^{-1}$. Moreover $\\iota$ is injective and\norder-preserving, so it is an embedding of $\\mathbb{Q}$ as an ordered subfield of\n$F$, and it is the only field homomorphism $\\mathbb{Q} \\to F$.",
      "uses": [
        "3.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "For nonzero $p, q \\in \\mathbb{R}[t]$ there is a real $X$ beyond which neither $p$ nor $q$ vanishes, so $f = p/q$ has a value $f(x) = p(x)/q(x)$ for every $x > X$, and the sign of that value is the sign of $\\operatorname{lc}(p)\\operatorname{lc}(q)$; hence $f \\in P$ exactly when $\\operatorname{lc}(p)\\operatorname{lc}(q) > 0$.",
      "step": "1.1",
      "inputs": [
        "L2",
        "L3"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "If $p/q = p'/q'$ then $pq' = p'q$, so $\\operatorname{lc}(p)\\operatorname{lc}(q') = \\operatorname{lc}(p')\\operatorname{lc}(q)$; multiplying both sides by $\\operatorname{lc}(q)\\operatorname{lc}(q')$ gives $\\operatorname{lc}(p)\\operatorname{lc}(q)\\cdot\\operatorname{lc}(q')^2 = \\operatorname{lc}(p')\\operatorname{lc}(q')\\cdot \\operatorname{lc}(q)^2$, and both squares are positive, so $\\operatorname{lc}(p)\\operatorname{lc}(q)$ and $\\operatorname{lc}(p')\\operatorname{lc}(q')$ have the same sign.",
      "step": "1.2",
      "inputs": [
        "L2",
        "L3"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "The rule of step 1.1 is therefore independent of the representative and computes membership in $P$; combined with [L1] it computes the order: $p/q < p'/q'$ exactly when the numerator and denominator of $p'/q' - p/q$, written in any representative, have leading coefficients of positive product.",
      "step": "2.1",
      "inputs": [
        "1.1",
        "L1",
        "1.2",
        "L4"
      ]
    },
    {
      "id": "step-2-2",
      "claim": "$1/t \\in P$, since $\\operatorname{lc}(1)\\operatorname{lc}(t) = 1 > 0$; equivalently, $t \\in P$ and inverses of positives are positive.",
      "step": "2.2",
      "inputs": [
        "1.1",
        "L3",
        "L4"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "For every rational $q > 0$: $q \\cdot 1 - 1/t = (qt - 1)/t$, whose leading coefficients have product $q \\cdot 1 = q > 0$, so $1/t < q \\cdot 1$. Together with step 2.2, $0 < 1/t < q\\cdot 1$ for every positive rational $q$.",
      "step": "3.1",
      "inputs": [
        "2.2",
        "1.1",
        "2.1",
        "L3",
        "L5"
      ]
    },
    {
      "id": "step-3-2",
      "claim": "For every natural $n$: $t - n \\cdot 1$ has leading coefficients with product $1 > 0$, so $n \\cdot 1 < t$; and $t^2 - t = t(t-1)$ likewise gives $t < t^2$.",
      "step": "3.2",
      "inputs": [
        "1.1",
        "2.1",
        "L2",
        "L3"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "So $\\mathbb{R}(t)$ is an ordered field, computed by a single product of leading coefficients, in which $t$ is larger than every canonical natural and $1/t$ is a positive infinitesimal.",
      "step": "4.1",
      "inputs": [
        "2.1",
        "3.1",
        "3.2",
        "L1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The Statement quantifies over fixed nonempty data and introduces no empty-set or empty-family boundary."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "step 1.1: For nonzero $p, q \\in \\mathbb{R}[t]$ there is a real $X$ beyond which neither $p$ nor $q$ vanishes, so $f = p/q$ has a value $f(x) = p(x)/q(x)$ for every $x > X$, and the sign of that value is the sign of $\\operatorname{lc}(p)\\operatorname{lc}(q)$; hence $f \\i"
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "step 2.1: The rule of step 1.1 is therefore independent of the representative and computes membership in $P$; combined with [L1] it computes the order: $p/q < p'/q'$ exactly when the numerator and denominator of $p'/q' - p/q$, written in any representative, have leading"
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "step 1.1: For nonzero $p, q \\in \\mathbb{R}[t]$ there is a real $X$ beyond which neither $p$ nor $q$ vanishes, so $f = p/q$ has a value $f(x) = p(x)/q(x)$ for every $x > X$, and the sign of that value is the sign of $\\operatorname{lc}(p)\\operatorname{lc}(q)$; hence $f \\i"
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "The Statement has no interval endpoint or finite-index endpoint boundary."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "step 1.1: all existence or selection moves were checked; any countable-choice use is explicitly tagged in the cited step."
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
    "status": "complete",
    "reviewer": "Audit-Alpha wave 7 (owner-delegated); DeepSeek V4 Pro audit-refuter",
    "notes": "critical risk (10): 9 declared dependencies; 11 cited facts; 7 numbered proof steps; boundary-sensitive language; analytic limiting/completeness language, routed by risk-report.mjs. The read-only DeepSeek V4 Pro audit-refuter received the complete target and every cited dependency and returned CLEAN. Boundary evidence: The positive cone excludes zero. All polynomials are nonzero, so leading coefficients are nonzero and the product sign is well-defined. Step 1.2 ensures representative invariance, covering cancellation. The elements t and 1/t are nonzero and their order comparisons are correctly computed. The Remarks' assertion that ℝ(t) is neither Cauchy complete nor has the shrinking nested interval property is mathematically correct (e.g., the sequence of partial sums of a non-rational formal power series is Cauchy but does not converge in ℝ(t)). No degenerate, empty, or endpoint boundary is violated. Checked surface: The title, the three public claims in the Example section, every numbered proof step (1.1, 1.2, 2.1, 2.2, 3.1, 3.2, 4.1), and all Remarks were read and verified. Alpha adjudicated the return against the current item and cited dependencies on disk and found no fatal mathematical or dependency-citation defect. Evidence: research/audit/wave7-preserved-refuters/ex-rational-function-field-order--b989c79b2d9bf7a0.result.json."
  }
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "ex-rational-function-field-order",
    "sourcePage": "equivalent-forms-of-completeness-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "cex-ordered-field-not-archimedean",
    "declared_target": "cex-ordered-field-not-archimedean",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-rational-function-field-order",
    "sourcePage": "equivalent-forms-of-completeness-examples",
    "batch": "wave7-real-analysis-completeness-limits",
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
    "source": "ex-rational-function-field-order",
    "sourcePage": "equivalent-forms-of-completeness-examples",
    "batch": "wave7-real-analysis-completeness-limits",
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
    "source": "ex-rational-function-field-order",
    "sourcePage": "equivalent-forms-of-completeness-examples",
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
    "source": "ex-rational-function-field-order",
    "sourcePage": "equivalent-forms-of-completeness-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "lem-of-square-positive",
    "declared_target": "lem-of-square-positive",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-rational-function-field-order",
    "sourcePage": "equivalent-forms-of-completeness-examples",
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
    "source": "ex-rational-function-field-order",
    "sourcePage": "equivalent-forms-of-completeness-examples",
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
    "source": "ex-rational-function-field-order",
    "sourcePage": "equivalent-forms-of-completeness-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "lem-of-q-embeds",
    "declared_target": "lem-of-q-embeds",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-rational-function-field-order",
    "sourcePage": "equivalent-forms-of-completeness-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "thm-reals-ordered-field",
    "declared_target": "thm-reals-ordered-field",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-r-via-cauchy-sequences",
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

## Full text of every cited or declared item (13)

### `cex-ordered-field-not-archimedean`

````markdown
---
id: cex-ordered-field-not-archimedean
kind: counterexample
title: "Not every ordered field is Archimedean"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-ordered-field, def-archimedean-field, thm-of-archimedean, thm-reals-ordered-field]
aliases: []
landmark: false
proof_strategy: direct
cx_machine_verified: false
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Non-Archimedean ordered field (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Non-Archimedean_ordered_field"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** every ordered field is Archimedean, that is, in every ordered
field $F$ each $x \in F$ satisfies $x < n \cdot 1_F$ for some natural number $n$.

The witness is $\mathbb{R}(t)$, the field of rational functions over $\mathbb{R}$,
ordered so that $f > 0$ exactly when $f(x) > 0$ for all sufficiently large real
$x$. In this ordered field the element $t$ exceeds every canonical natural
number, so the naturals are not cofinal.

## Facts & Assumptions

**Given:** $\mathbb{R}(t)$, the field of fractions of the polynomial ring $\mathbb{R}[t]$, and the set $P = \{f \in \mathbb{R}(t) : f \ne 0 \text{ and } f(x) > 0 \text{ for all sufficiently large real } x\}$.

[L1] An ordered field is a field with a positive cone $P$ satisfying trichotomy (for each nonzero $x$, exactly one of $x \in P$, $-x \in P$) and closure of $P$ under addition and multiplication; then $a < b$ means $b - a \in P$ ([[def-ordered-field]]).

[L2] An ordered field $F$ is Archimedean when for every $x \in F$ there is a natural number $n$ with $x < n \cdot 1_F$, equivalently the canonical naturals $n \cdot 1_F$ are cofinal ([[def-archimedean-field]]).

[L3] Every complete ordered field is Archimedean ([[thm-of-archimedean]]).

[L4] $\mathbb{R}$ is a totally ordered field ([[thm-reals-ordered-field]]).

## Counterexample

**Proof technique:** direct.

1.1 Let $f=p/q\ne0$, where $p(x)=a_mx^m+\cdots+a_0$ and $q(x)=b_nx^n+\cdots+b_0$ have nonzero leading coefficients. For $x>1$, dividing by the leading terms gives $p(x)=a_mx^m(1+\sum_{i<m}(a_i/a_m)x^{i-m})$ and the analogous formula for $q$. If $x$ is larger than $1$ plus the sums of the absolute values of the lower coefficient ratios, then both lower-term sums have absolute value less than $1$. Thus $p(x)$ and $q(x)$ eventually have the signs of $a_m$ and $b_n$, respectively, and $f(x)$ has the constant nonzero eventual sign of $a_m/b_n$. Hence exactly one of $f\in P$ and $-f\in P$ holds. [given, L4, algebra]

1.2 If $f, g \in P$ then $f(x) > 0$ and $g(x) > 0$ for all large $x$, so $(f + g)(x) > 0$ and $(fg)(x) > 0$ for all large $x$, giving $f + g \in P$ and $fg \in P$. [given, algebra]

1.3 For each natural number $n$ the rational function $t - n \cdot 1 = t - n$ satisfies $(t - n)(x) = x - n > 0$ for all $x > n$, so $t - n \in P$. [given, algebra]

2.1 By the trichotomy of step 1.1 and the closure of step 1.2, $P$ is a positive cone, so $\mathbb{R}(t)$ is an ordered field. [step 1.1, step 1.2, L1]

2.2 By step 1.3, $t - n \cdot 1 \in P$ for every natural $n$, which by [L1] means $n \cdot 1 < t$ for every natural $n$. [step 1.3, L1]

3.1 In the ordered field $\mathbb{R}(t)$ the element $t$ satisfies $n \cdot 1 < t$ for every natural $n$ (step 2.2), so no natural $n$ has $t < n \cdot 1$; the canonical naturals are not cofinal and $\mathbb{R}(t)$ is not Archimedean, refuting the claim that every ordered field is Archimedean. [step 2.1, step 2.2, L2]

4.1 This is consistent with [L3], whose contrapositive states that a non-Archimedean ordered field cannot be complete: $\mathbb{R}(t)$ is an ordered field that is not complete. [step 3.1, L3] ∎
````

### `cex-q-not-dense-in-an-ordered-field`

````markdown
---
id: cex-q-not-dense-in-an-ordered-field
kind: counterexample
title: "In $\\mathbb{R}(t)$ the rationals are not dense: no rational lies strictly between $0$ and $1/t$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cex-ordered-field-not-archimedean, ex-rational-function-field-order, lem-of-q-dense, lem-of-q-embeds, def-archimedean-field, lem-of-inverse-positive, def-ordered-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
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
    - title: "Ordered field (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordered_field"
    - title: "Dense order (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dense_order"
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** in every ordered field $F$ the image of $\mathbb{Q}$ is
dense, that is, for all $x < y$ in $F$ there is a rational $q$ with
$x < q \cdot 1_F < y$.

The witness is $\mathbb{R}(t)$ with the eventual-sign order
([[cex-ordered-field-not-archimedean]], [[ex-rational-function-field-order]]),
and the pair $x = 0$, $y = 1/t$: the interval between them contains no rational
at all.

The true statement requires the Archimedean property and is
[[lem-of-q-dense]]; $\mathbb{R}(t)$ is not Archimedean, and this counterexample
is exactly the failure that the Archimedean hypothesis rules out.

## Facts & Assumptions

**Given:** The ordered field $\mathbb{R}(t)$ with positive cone $P = \{f \ne 0 : f(x) > 0 \text{ for all sufficiently large real } x\}$, and its element $1/t$.

[L1] $\mathbb{R}(t)$ is an ordered field and is not Archimedean ([[cex-ordered-field-not-archimedean]], [[def-archimedean-field]]).

[L2] $0 < 1/t$, and $1/t < q \cdot 1$ for every rational $q > 0$ ([[ex-rational-function-field-order]]).

[L3] The canonical embedding of $\mathbb{Q}$ into an ordered field is an embedding of ordered fields, so $q \cdot 1 > 0$ if and only if $q > 0$, and $q \cdot 1 \le 0$ when $q \le 0$ ([[lem-of-q-embeds]]).

[L4] $\mathbb{Q}$ is dense in every Archimedean ordered field ([[lem-of-q-dense]]).

[L5] In an ordered field the order is total and transitive, exactly one of $u < v$, $u = v$, $v < u$ holds, and a positive element has a positive inverse ([[def-ordered-field]], [[lem-of-inverse-positive]]).

## Counterexample

**Proof technique:** direct.

1.1 $\mathbb{R}(t)$ is an ordered field, it is not Archimedean, and $0 < 1/t$ in it. [L1, L2, L5]

1.2 For every rational $q > 0$ one has $1/t < q \cdot 1$. [L2]

2.1 No rational $q$ satisfies $0 < q \cdot 1 < 1/t$: if $q \le 0$ then $q \cdot 1 \le 0$ and the left inequality fails, while if $q > 0$ then $1/t < q \cdot 1$ by step 1.2, so $q \cdot 1 < 1/t$ fails by trichotomy. [step 1.1, step 1.2, L3, L5]

3.1 So $0 < 1/t$ in $\mathbb{R}(t)$ with no rational strictly between them: the image of $\mathbb{Q}$ is not dense in $\mathbb{R}(t)$, and the claim is false. [step 1.1, step 2.1]

4.1 The hypothesis the claim omitted is the Archimedean property, which $\mathbb{R}(t)$ lacks and under which the conclusion does hold. [step 1.1, L1, L4] ∎

## Remarks

- **What density really needs.** Given $0 < x < y$ in an Archimedean field one
  finds $n$ with $1/n < y - x$ and then a multiple of $1/n$ in the gap; the
  Archimedean property is used precisely to make the mesh $1/n$ finer than the
  gap. In $\mathbb{R}(t)$ the gap $1/t - 0$ is smaller than every $1/n$, so no
  mesh built from rationals is ever fine enough.

- **An element like $1/t$ is called an infinitesimal**: positive, and below
  every positive rational. A non-Archimedean ordered field always has one, since
  if $x$ exceeds every canonical natural then $1/x$ is below every $1/n$
  ([[lem-of-inverse-positive]]). So the failure of density is not special to
  this field; it happens in every non-Archimedean ordered field, including
  $\mathbb{R}((t^{-1}))$.

- **Density is not the same as completeness.** $\mathbb{Q}$ is dense in itself
  and in $\mathbb{R}$, and $\mathbb{Q}$ is not complete. What this counterexample
  shows is only that density of $\mathbb{Q}$ needs the Archimedean property,
  which is also the hypothesis missing from
  [[fs-nested-intervals-implies-lub]] and [[fs-cauchy-complete-implies-lub]].
````

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

### `ex-cauchy-complete-not-complete-field`

````markdown
---
id: ex-cauchy-complete-not-complete-field
kind: example
title: "$\\mathbb{R}((t^{-1}))$, the formal Laurent series field, is Cauchy complete, non-Archimedean, and lacks the least-upper-bound property"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [fs-cauchy-complete-implies-lub, def-sequences-in-an-ordered-field, def-completeness-properties, def-archimedean-field, def-formal-laurent-series, lem-laurent-series-ring, thm-laurent-ordered-field, thm-laurent-cauchy-complete, lem-laurent-non-archimedean, cor-laurent-not-lub-complete, cor-laurent-nested-intervals, lem-bw-implies-archimedean, lem-mct-implies-archimedean, thm-completeness-equivalences]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-09
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Formal power series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Formal_power_series"
    - title: "Completeness of the real numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Completeness_of_the_real_numbers"
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
pipeline_run: null
---

## Example

Let $K = \mathbb{R}((t^{-1}))$ be the field of formal Laurent series in
$t^{-1}$ over $\mathbb{R}$ ([[def-formal-laurent-series]]), ordered by the sign
of the leading coefficient ([[thm-laurent-ordered-field]]). This example
assembles, in one place and against the five properties of
[[def-completeness-properties]], what the field does and does not satisfy:

| property | holds in $K$ | reference |
|---|---|---|
| ordered field | yes | [[thm-laurent-ordered-field]] |
| Archimedean | **no** | [[lem-laurent-non-archimedean]] |
| (CC) Cauchy completeness | yes | [[thm-laurent-cauchy-complete]] |
| (NIP) nested intervals, shrinking | yes | [[cor-laurent-nested-intervals]] |
| (LUB) least upper bound | **no** | [[cor-laurent-not-lub-complete]] |
| (BW) Bolzano-Weierstrass | **no** | below |
| (MCT) monotone convergence | **no** | below |

$K$ is therefore the witness for [[fs-cauchy-complete-implies-lub]], and a
worked illustration of how far apart the two things called "completeness" can
be. A concrete convergent Cauchy sequence is exhibited at the end.

## Facts & Assumptions

**Given:** $K = \mathbb{R}((t^{-1}))$, whose elements are the functions $\mathbb{Z} \to \mathbb{R}$ with support bounded below, with $t^{-a}$ the function taking the value $1$ at $a$ and $0$ elsewhere.

[L1] $K$ is an ordered field, in which $f > 0$ exactly when $f \ne 0$ and its lowest-index nonzero coefficient is a positive real ([[thm-laurent-ordered-field]], [[def-formal-laurent-series]]); and $(g-h)(j) = g(j) - h(j)$ ([[lem-laurent-series-ring]]).

[L2] $n \cdot 1_K < t$ for every natural $n$, so $K$ is not Archimedean; $0_K < t^{-(k+1)} < t^{-k}$; for every $\varepsilon > 0$ in $K$ there is $k \in \mathbb{N}$ with $t^{-k} < \varepsilon$; and if $h(j) = 0$ for every $j \le k$ then $|h| < t^{-k}$ ([[lem-laurent-non-archimedean]], [[def-archimedean-field]]).

[L3] Every Cauchy sequence in $K$ converges in $K$ ([[thm-laurent-cauchy-complete]]), which is (CC) ([[def-completeness-properties]], [[def-sequences-in-an-ordered-field]]).

[L4] The set $A = \{\, n \cdot 1_K : n \in \mathbb{N}\,\}$ is nonempty, bounded above by $t$, and has no least upper bound in $K$, so (LUB) fails ([[cor-laurent-not-lub-complete]]).

[L5] Every nested sequence of closed intervals of $K$ whose lengths tend to $0$ in $K$ has exactly one common point, so (NIP) holds ([[cor-laurent-nested-intervals]]).

[L6] (BW) implies the Archimedean property ([[lem-bw-implies-archimedean]]) and so does (MCT) ([[lem-mct-implies-archimedean]]); and the five properties are equivalent once the Archimedean property is supplied where needed ([[thm-completeness-equivalences]]).

## Verification

**Proof technique:** direct.

1.1 $K$ is an ordered field. [L1]

1.2 $K$ is not Archimedean: $t$ exceeds every canonical natural. [L2]

1.3 $K$ has (CC). [L3]

1.4 $K$ does not have (LUB): the canonical naturals are nonempty and bounded above and have no supremum in $K$. [L4]

1.5 $K$ has (NIP) in the shrinking form of [[def-completeness-properties]]. [L5]

2.1 So $K$ is a Cauchy complete, non-Archimedean ordered field without the least-upper-bound property, which is what this example asserts, and it is the witness used in [[fs-cauchy-complete-implies-lub]] and in [[fs-nested-intervals-implies-lub]]. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5]

2.2 $K$ has neither (BW) nor (MCT), since either would force $K$ to be Archimedean, which step 1.2 denies. [step 1.2, L6]

2.3 A concrete convergent Cauchy sequence: let $f^{(n)} := \sum_{k=0}^{n} t^{-k}$, the function taking the value $1$ at each index $0 \le j \le n$ and $0$ elsewhere. For $n > m$ the difference $f^{(n)} - f^{(m)}$ vanishes at every index $j \le m$, so $|f^{(n)} - f^{(m)}| < t^{-m}$; since the monomials $t^{-m}$ get below every positive element of $K$, the sequence is Cauchy in $K$. Its limit is the element $L$ with $L(j) = 1$ for $j \ge 0$ and $L(j) = 0$ for $j < 0$, which lies in $K$ because its support is bounded below, and $f^{(n)} - L$ vanishes at every index $j \le n$, so $|f^{(n)} - L| < t^{-n}$ and $f^{(n)} \to L$ in $K$. [step 1.1, step 1.3, L1, L2]

3.1 The table of the Example is therefore established in every row, and $K$ separates Cauchy completeness from the least-upper-bound property. [step 2.1, step 2.2, step 2.3] ∎

## Remarks

- **The one-line reason.** Comparison in $K$ looks only at the first coefficient at which two elements differ, so $t$ is bigger than every real constant and $t^{-1}$ is smaller than every positive real constant. The naturals are therefore bounded, which kills (LUB), (BW) and (MCT) at a stroke. Meanwhile a Cauchy sequence in $K$ must have each of its coefficients eventually constant, and reading off those eventual values builds the limit; nothing about the naturals being cofinal is needed for that.

- **Why the limit above is not a sum.** The notation $\sum_{k \ge 0} t^{-k}$ for $L$ is a name for a function, not an infinite sum ([[def-formal-laurent-series]]). What step 2.3 proves is a genuine limit in the order of $K$, and it happens to agree with that notation; no notion of convergence is presupposed by the notation itself.

- **What this example does not give.** It says nothing about $\mathbb{R}(t)$, the other non-Archimedean field in this library ([[ex-rational-function-field-order]]), which is neither Cauchy complete nor nested-interval complete and cannot replace $K$ in any of these roles.

- **Uniqueness of the complete ordered field is untouched.** $K$ is not a complete ordered field, so it is no counterexample to that uniqueness; it is a counterexample only to the habit of calling (CC) completeness.
````

### `fs-cauchy-complete-implies-lub`

````markdown
---
id: fs-cauchy-complete-implies-lub
kind: false-statement
title: "FALSE: an ordered field in which every Cauchy sequence converges has the least-upper-bound property"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-completeness-equivalences, def-completeness-properties, def-archimedean-field, def-sequences-in-an-ordered-field, def-complete-ordered-field, thm-laurent-cauchy-complete, cor-laurent-not-lub-complete, lem-laurent-non-archimedean, thm-laurent-ordered-field]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
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
    - title: "Complete metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Complete_metric_space"
    - title: "Completeness of the real numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Completeness_of_the_real_numbers"
    - title: "Formal power series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Formal_power_series"
pipeline_run: null
---

## Statement

**False claim:** every ordered field in which every Cauchy sequence converges,
that is, every ordered field with (CC) as in [[def-completeness-properties]],
has the least-upper-bound property (LUB).

This is clause 4 of [[thm-completeness-equivalences]] with its Archimedean
hypothesis deleted. The witness is again the formal Laurent series field
$K = \mathbb{R}((t^{-1}))$: every Cauchy sequence in $K$ converges in $K$, and
$K$ has no least upper bound for the set of its own canonical naturals.

**This is the sharpest of the failures on this page**, because "complete" is the
word most often used loosely for both properties at once. In $\mathbb{R}$ they
coincide; in an ordered field they do not, and the difference is exactly the
Archimedean property.

## Facts & Assumptions

**Given:** The formal Laurent series field $K = \mathbb{R}((t^{-1}))$.

[L1] $K$ is an ordered field ([[thm-laurent-ordered-field]]).

[L2] Every sequence in $K$ that is Cauchy in $K$ converges in $K$ ([[thm-laurent-cauchy-complete]]); Cauchyness and convergence in an ordered field are as in [[def-sequences-in-an-ordered-field]], and that is exactly (CC) ([[def-completeness-properties]]).

[L3] $K$ is not a complete ordered field: the set $A = \{\, n \cdot 1_K : n \in \mathbb{N}\,\}$ is nonempty and bounded above by $t$ and has no least upper bound in $K$ ([[cor-laurent-not-lub-complete]], [[def-complete-ordered-field]]).

[L4] $K$ is not Archimedean, since $n \cdot 1_K < t$ for every natural $n$ ([[lem-laurent-non-archimedean]], [[def-archimedean-field]]).

[L5] For an ordered field, the Archimedean property together with (CC) does imply (LUB) ([[thm-completeness-equivalences]], clause 4 implies clause 1).

## Refutation

**Proof technique:** direct.

1.1 $K$ is an ordered field. [L1]

1.2 $K$ has (CC): every Cauchy sequence in $K$ converges in $K$. [L2]

1.3 $K$ does not have (LUB), the set of its canonical naturals being nonempty, bounded above and without a least upper bound. [L3]

2.1 So $K$ is an ordered field with (CC) and without (LUB), and the claim is false. [step 1.1, step 1.2, step 1.3]

3.1 What fails in $K$ is precisely the hypothesis that the claim deleted: $K$ is not Archimedean, and with that hypothesis restored the implication is true. [step 1.1, L4, L5] ∎

## Remarks

- **Where the thresholds are read is what makes this possible.** Cauchyness in
  $K$ is tested against every positive element of $K$, including the
  infinitesimals ([[def-sequences-in-an-ordered-field]]), so the condition is
  much stronger in $K$ than the same words read with rational thresholds. It is
  strong enough that only sequences whose coefficients freeze can satisfy it,
  and those all converge. Meanwhile the canonical naturals, which are what (LUB)
  fails on, are not Cauchy at all, so (CC) never gets a chance to see them.

- **The three properties $K$ has and the three it lacks.** It has (CC) and (NIP)
  in the shrinking form ([[cor-laurent-nested-intervals]]) and it is an ordered
  field; it lacks (LUB), and hence also (BW) and (MCT), each of which would force
  it to be Archimedean ([[lem-bw-implies-archimedean]],
  [[lem-mct-implies-archimedean]]).

- **A reader who wants a single sentence:** Cauchy completeness says the field
  has no holes that a sequence can point at; the least-upper-bound property says
  it has no holes at all. In a non-Archimedean field a sequence indexed by
  $\mathbb{N}$ is too short to point at the holes.
````

### `fs-nested-intervals-implies-lub`

````markdown
---
id: fs-nested-intervals-implies-lub
kind: false-statement
title: "FALSE: the nested interval property alone implies the least-upper-bound property"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-completeness-equivalences, def-completeness-properties, def-archimedean-field, def-sequences-in-an-ordered-field, def-complete-ordered-field, cor-laurent-nested-intervals, cor-laurent-not-lub-complete, lem-laurent-non-archimedean, thm-laurent-ordered-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-09
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "J. F. Hall, Completeness of Ordered Fields"
      url: "https://arxiv.org/abs/1101.5652"
    - title: "Nested intervals (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nested_intervals"
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
    - title: "Formal power series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Formal_power_series"
pipeline_run: null
---

## Statement

**False claim:** every ordered field with the nested interval property (NIP) of
[[def-completeness-properties]] has the least-upper-bound property (LUB).

This is clause 2 of [[thm-completeness-equivalences]] with its Archimedean
hypothesis deleted, and the deletion is exactly what makes it false. The witness
is the formal Laurent series field $K = \mathbb{R}((t^{-1}))$, which satisfies
(NIP) and has no least upper bound for the set of its own canonical naturals.

Note that the false claim is being refuted in the *shrinking* form of (NIP),
which is the weaker hypothesis and therefore makes the implication stronger.

## Facts & Assumptions

**Given:** The formal Laurent series field $K = \mathbb{R}((t^{-1}))$.

[L1] $K$ is an ordered field ([[thm-laurent-ordered-field]]).

[L2] Every nested sequence of closed intervals of $K$ whose lengths tend to $0$ in $K$ has exactly one point in its intersection ([[cor-laurent-nested-intervals]]); intervals, nesting and lengths tending to $0$ in an ordered field are as in [[def-sequences-in-an-ordered-field]], and (NIP) asks exactly that such an intersection be nonempty ([[def-completeness-properties]]).

[L3] $K$ is not a complete ordered field: the set $A = \{\, n \cdot 1_K : n \in \mathbb{N}\,\}$ is nonempty and bounded above by $t$ and has no least upper bound in $K$ ([[cor-laurent-not-lub-complete]], [[def-complete-ordered-field]]).

[L4] $K$ is not Archimedean, since $n \cdot 1_K < t$ for every natural $n$ ([[lem-laurent-non-archimedean]], [[def-archimedean-field]]).

[L5] For an ordered field, the Archimedean property together with (NIP) does imply (LUB) ([[thm-completeness-equivalences]], clause 2 implies clause 1).

## Refutation

**Proof technique:** direct.

1.1 $K$ is an ordered field. [L1]

1.2 $K$ has (NIP): any nested sequence of closed intervals of $K$ whose lengths tend to $0$ in $K$ has a point in its intersection, indeed exactly one. [L2]

1.3 $K$ does not have (LUB), the set of its canonical naturals being nonempty, bounded above and without a least upper bound. [L3]

2.1 So $K$ is an ordered field with (NIP) and without (LUB), and the claim is false. [step 1.1, step 1.2, step 1.3]

3.1 What fails in $K$ is precisely the hypothesis that the claim deleted: $K$ is not Archimedean, and with that hypothesis restored the implication is true. [step 1.1, L4, L5] ∎

## Remarks

- **The failure is not an accident of one field.** By [[lem-lub-implies-nested-intervals]] every field with (LUB) is Archimedean, so any witness at all must be non-Archimedean; and in a non-Archimedean field the shrinking hypothesis in (NIP) is a severe restriction, because a length that tends to $0$ in the order of the field must get below every infinitesimal. That is why checking shrinking (NIP) in $K$ is substantive, and why $K$ can satisfy (NIP) while failing (LUB) at all.

- **$\mathbb{R}(t)$ will not do as a witness**, although it is the library's other non-Archimedean ordered field ([[cex-ordered-field-not-archimedean]]). Nothing in this library establishes any nested interval property for it, and the page that built $K$ says why a new field was constructed rather than reusing that one.

- **The companion failure** is [[fs-cauchy-complete-implies-lub]], refuted by the same field. Together they are the exact content of the Archimedean hypotheses in clauses 2 and 4 of [[thm-completeness-equivalences]].
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

### `lem-of-q-embeds`

````markdown
---
id: lem-of-q-embeds
kind: lemma
title: "The unique embedding of ℚ into an ordered field"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-of-naturals-positive, lem-of-inverse-positive, lem-of-sign-rules, def-field-homomorphism, def-ordered-field, thm-rat-ordered-field]
aliases: []
landmark: false
short: "ℚ embeds"
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
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "E. Landau, Foundations of Analysis"
      url: "https://bookstore.ams.org/chel-79"
    - title: "University of Wisconsin Math 521 notes: Real analysis"
      url: "https://people.math.wisc.edu/~jwrobbin/521dir/521.pdf"
pipeline_run: null
---

## Statement

Let $F$ be an ordered field ([[def-ordered-field]]). There is a unique field
homomorphism $\iota : \mathbb{Q} \to F$ ([[def-field-homomorphism]]). On the
integers it is given by $n \mapsto n \cdot 1_F$ (with $-n \mapsto -(n \cdot 1_F)$
and $0 \mapsto 0$), and on a rational written as $p/q$ with $q \ge 1$ by
$\iota(p/q) = \iota(p)\,(q \cdot 1_F)^{-1}$. Moreover $\iota$ is injective and
order-preserving, so it is an embedding of $\mathbb{Q}$ as an ordered subfield of
$F$, and it is the only field homomorphism $\mathbb{Q} \to F$.

## Facts & Assumptions

**Given:** An ordered field $F$; the field $\mathbb{Q}$ of [[thm-rat-ordered-field]], every element of which is $0$ or $\pm p/q$ with integers $p, q \ge 1$. For an integer $p$ write $\iota(p)$ for $p \cdot 1_F$ if $p \ge 0$ and $-(|p| \cdot 1_F)$ if $p < 0$.

[L1] $\mathbb{Q}$ is an ordered field; a nonzero $p/q$ with $q \ge 1$ is positive exactly when $p \ge 1$ ([[thm-rat-ordered-field]]).

[L2] The canonical naturals satisfy $n \cdot 1_F > 0$ for $n \ge 1$, $n \mapsto n \cdot 1_F$ is injective, $(m+n) \cdot 1_F = m \cdot 1_F + n \cdot 1_F$, and $(mn) \cdot 1_F = (m \cdot 1_F)(n \cdot 1_F)$ ([[lem-of-naturals-positive]]).

[L3] If $a > 0$ then $a^{-1} > 0$ ([[lem-of-inverse-positive]]).

[L4] Sign rules: a product of positives is positive, and for $c > 0$ one has $a < b$ iff $ac < bc$ ([[lem-of-sign-rules]]).

[L5] A field homomorphism preserves $+$, $\cdot$, and $1$, and hence $0$, negation, and inverses ([[def-field-homomorphism]]).

## Proof

**Proof technique:** direct.

1.1 Define $\iota$ on the integers by $\iota(n) = n \cdot 1_F$ for $n \ge 0$ and $\iota(-n) = -(n \cdot 1_F)$; by [L2] this is additive and multiplicative on $\mathbb{Z}$ and sends $1 \mapsto 1_F$. [L2]

1.2 For a rational $x = p/q$ with $q \ge 1$ define $\iota(x) = \iota(p)\,(q \cdot 1_F)^{-1}$, which makes sense because $q \cdot 1_F > 0 \ne 0$ has an inverse. [L2]

2.1 Well-defined: if $p/q = p'/q'$ with $q, q' \ge 1$, then $p q' = p' q$ in $\mathbb{Z}$, so [L2] gives $\iota(p)(q' \cdot 1_F) = \iota(p')(q \cdot 1_F)$, and multiplying by the positive $(q \cdot 1_F)^{-1}(q' \cdot 1_F)^{-1}$ yields $\iota(p)(q \cdot 1_F)^{-1} = \iota(p')(q' \cdot 1_F)^{-1}$; thus $\iota(x)$ is independent of the representative. [step 1.1, step 1.2, L2, L3]

2.2 Multiplicativity: for $x = p/q$, $y = r/s$ one has $xy = (pr)/(qs)$, and $\iota(xy) = \iota(pr)((qs) \cdot 1_F)^{-1} = \iota(p)\iota(r)(q \cdot 1_F)^{-1}(s \cdot 1_F)^{-1} = \iota(x)\iota(y)$, using $(mn) \cdot 1_F = (m \cdot 1_F)(n \cdot 1_F)$ and $(uv)^{-1} = u^{-1} v^{-1}$. [step 1.2, L2]

2.3 Additivity: with $x + y = (ps + rq)/(qs)$, $\iota(x+y) = (\iota(p)(s \cdot 1_F) + \iota(r)(q \cdot 1_F))(q \cdot 1_F)^{-1}(s \cdot 1_F)^{-1} = \iota(p)(q \cdot 1_F)^{-1} + \iota(r)(s \cdot 1_F)^{-1} = \iota(x) + \iota(y)$, using the additive and multiplicative identities of [L2]. [step 1.2, L2]

2.4 Positivity: if $x = p/q > 0$ in $\mathbb{Q}$ with $q \ge 1$, then $p \ge 1$ by [L1], so $\iota(p) = p \cdot 1_F > 0$ and $q \cdot 1_F > 0$ by [L2], whence $(q \cdot 1_F)^{-1} > 0$ by [L3] and $\iota(x) = \iota(p)(q \cdot 1_F)^{-1} > 0$ by [L4]. [step 1.2, L1, L2, L3, L4]

2.5 Uniqueness on $\mathbb{Z}$: let $\psi : \mathbb{Q} \to F$ be any field homomorphism; then $\psi(1) = 1_F$, additivity forces $\psi(n) = n \cdot 1_F = \iota(n)$ for $n \ge 1$, and $\psi(0) = 0$, $\psi(-n) = -(n \cdot 1_F)$, so $\psi = \iota$ on $\mathbb{Z}$. [step 1.1, L5]

3.1 Unit: $\iota(1) = \iota(1/1) = \iota(1)(1 \cdot 1_F)^{-1} = 1_F$; hence $\iota$ is a field homomorphism $\mathbb{Q} \to F$. [step 2.2, step 2.3, L2, L5]

3.2 Order: for $x < y$ in $\mathbb{Q}$ we have $y - x > 0$, so $\iota(y) - \iota(x) = \iota(y - x) > 0$ by 2.3 and 2.4, that is $\iota(x) < \iota(y)$; thus $\iota$ is order-preserving. [step 2.3, step 2.4]

4.1 Injectivity: if $x \ne y$ then $x < y$ or $y < x$, and 3.2 forces $\iota(x) \ne \iota(y)$; so $\iota$ is injective, an embedding of ordered fields. [step 3.2]

5.1 Uniqueness on $\mathbb{Q}$: for $p/q \in \mathbb{Q}$, $\psi(p/q) = \psi(p)\psi(q)^{-1} = \iota(p)(q \cdot 1_F)^{-1} = \iota(p/q)$ since $\psi$ preserves products and inverses; hence $\psi = \iota$, so $\iota$ is the unique field homomorphism $\mathbb{Q} \to F$. [step 2.5, step 1.2, L5] ∎
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

### `lem-of-square-positive`

````markdown
---
id: lem-of-square-positive
kind: lemma
title: "Squares of nonzero elements are positive"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-ordered-field, lem-of-mult-neg]
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
proof_strategy: cases
---

## Statement

Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$. For
every $a \in F$ with $a \neq 0$ we have $a^2 > 0$, where $a^2 = a \cdot a$. In
particular, every nonzero square is positive.

## Facts & Assumptions

**Given:** An ordered field $F$ with positive cone $P$, and an element $a \in F$ with $a \neq 0$.

[L1] $x > 0 \iff x \in P$, and by trichotomy for $a \neq 0$ exactly one of $a \in P$, $-a \in P$ holds ([[def-ordered-field]]).

[L2] $P$ is closed under multiplication: if $u, v \in P$ then $uv \in P$ (axiom O2 of [[def-ordered-field]]).

[L3] In any field, $(-u)(-v) = uv$ ([[lem-of-mult-neg]]).

## Proof

**Proof technique:** cases.

1.1 Since $a \neq 0$, trichotomy leaves exactly two possibilities: $a \in P$ or $-a \in P$. [L1]

2.1 Case $a > 0$: then $a \in P$, so closure gives $a \cdot a \in P$, i.e. $a^2 > 0$. [assume-case pos, step 1.1, L2, L1]

2.2 Case $a < 0$: then $-a \in P$, so closure gives $(-a)(-a) \in P$; since $(-a)(-a) = a \cdot a = a^2$ by L3, we get $a^2 \in P$, i.e. $a^2 > 0$. [assume-case neg, step 1.1, L2, L3, L1]

3.1 The cases $a > 0$ and $a < 0$ exhaust all of $a \neq 0$ by trichotomy, and both yield $a^2 > 0$. [cases-exhaustive, step 2.1, step 2.2] ∎
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

