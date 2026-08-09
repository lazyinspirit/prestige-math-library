## Selection reasons

- critical risk (16): 10 declared dependencies; 12 cited facts; 8 numbered proof steps; existence, choice, uniqueness, or well-definedness; boundary-sensitive language; induction, recursion, or minimality; quotient or equivalence-class construction; analytic limiting/completeness language

## Target item — `ex-limit-of-a-polynomial`

Normalized current SHA-256: `39c1ee8e368be2611e5503492a19644f47f8822a4ea10734a42a4942dc0cc4df`

The complete current item follows, including frontmatter:

````markdown
---
id: ex-limit-of-a-polynomial
kind: example
title: "Every polynomial has $\\lim_{x \\to c} p(x) = p(c)$, and rational functions do so away from the zeros of the denominator"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-algebra-of-function-limits, lem-sign-preservation-near-a-limit, def-function-limit, def-limit-point-r, def-neighbourhood-r, def-finite-sum, def-integer-power, thm-induction-principle, lem-of-abs-value, def-field]
justified_by: []
aliases: []
landmark: false
short: "limits of polynomials"
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
    - title: "J. Lebl, Basic Analysis I, §3.1: Limits of functions"
      url: "https://www.jirka.org/ra/html/sec_limoffunc.html"
    - title: "Polynomial (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Polynomial"
    - title: "Limit of a function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_function"
    - title: "J. Lebl, Basic Analysis I, §3.1"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Example

For a list $a_0, \dots, a_{n-1}$ of reals write

$$p(x) \;:=\; \sum_{j < n} a_j x^j$$

for the finite sum of [[def-finite-sum]] applied to the list
$j \mapsto a_j x^j$, with powers as in [[def-integer-power]]. So
$\sum_{j < 0}$ is the empty sum $0$, and $p$ is a function $\mathbb{R} \to
\mathbb{R}$; these are the **polynomial functions**.

**Claim 1.** For every polynomial function $p$ and every $c \in \mathbb{R}$, the
limit of $p$ at $c$ exists and

$$\lim_{x \to c} p(x) \;=\; p(c) .$$

**Claim 2.** Let $p$ and $q$ be polynomial functions and let $c \in \mathbb{R}$
satisfy $q(c) \ne 0$. Put $A_q := \{\, x \in \mathbb{R} : q(x) \ne 0 \,\}$. Then
$c \in A_q$, the point $c$ is a limit point of $A_q$, the quotient $p/q$ is
defined on $A_q$, its limit at $c$ exists, and

$$\lim_{x \to c} (p/q)|_{A_q}(x) \;=\; \frac{p(c)}{q(c)} .$$

Everything is read off from [[thm-algebra-of-function-limits]] once two trivial
limits are in hand: that of a constant function and that of the identity. Note
that claim 1 is exactly the statement that $\lim_{x \to c} p(x) = p(c)$, the
equality that [[fs-limit-equals-value]] shows is *not* automatic; for polynomials
it is a theorem, and the algebra of limits is what proves it.

## Facts & Assumptions

**Given:** A list $a_0, \dots, a_{n-1}$ of reals and the polynomial function $p(x) = \sum_{j<n} a_j x^j$; a second polynomial function $q$; and a real $c$ ([[def-finite-sum]], [[def-integer-power]]).

[L1] The limit condition ([[def-function-limit]]): $\lim_{x \to c} h(x) = P$ means that for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x$ in the domain of $h$ with $0 < |x - c| < \delta$ satisfies $|h(x) - P| < \varepsilon$.

[L2] Algebra of function limits: at a limit point $c$ of the common domain, the limits of $f + g$, of $\alpha f$ and of $fg$ exist and equal $L + M$, $\alpha L$ and $LM$; and if $M \ne 0$ the limit of $(f/g)$ restricted to $\{g \ne 0\}$ exists and equals $L/M$ ([[thm-algebra-of-function-limits]]).

[L3] Every real is a limit point of $\mathbb{R}$, punctured neighbourhoods being never empty ([[def-limit-point-r]], [[def-neighbourhood-r]]).

[L4] Finite sums: $\sum_{j<0} a_j = 0$ and $\sum_{j<n+1} a_j = \bigl(\sum_{j<n} a_j\bigr) + a_n$ ([[def-finite-sum]]).

[L5] Powers: $x^0 = 1$ and $x^{j+1} = x^j \cdot x$ for every $x \in \mathbb{R}$ and $j \in \mathbb{N}$ ([[def-integer-power]]).

[L6] Induction principle on $\mathbb{N}$ ([[thm-induction-principle]]).

[L7] Sign preservation: if the limit of $g$ at $c$ is nonzero then $c$ is a limit point of $\{\, x : g(x) \ne 0 \,\}$ ([[lem-sign-preservation-near-a-limit]]).

[L8] Absolute value: $|0| = 0$; and field arithmetic ([[lem-of-abs-value]], [[def-field]]).

## Verification

**Proof technique:** direct.

1.1 Every $c \in \mathbb{R}$ is a limit point of $\mathbb{R}$, so [L1] and [L2] apply at $c$ to functions defined on $\mathbb{R}$. [L3]

1.2 A constant function $x \mapsto a$ has limit $a$ at $c$: $|a - a| = |0| = 0 < \varepsilon$ for every real $\varepsilon > 0$, any $\delta$ serving. [L1, L8]

1.3 The identity function $x \mapsto x$ has limit $c$ at $c$: given a real $\varepsilon > 0$, take $\delta := \varepsilon$; then $0 < |x - c| < \delta$ gives $|x - c| < \varepsilon$. [L1]

2.1 For every $j \in \mathbb{N}$ the function $x \mapsto x^j$ has limit $c^j$ at $c$. This is an induction on $j$ [L6]. For $j = 0$ the function is the constant $1$ by [L5], and step 1.2 applies with $a = 1 = c^0$. If the claim holds for $j$, then $x^{j+1} = x^j \cdot x$ by [L5], and the product rule of [L2] applied to $x \mapsto x^j$ and the identity gives limit $c^j \cdot c = c^{j+1}$. [step 1.2, step 1.3, L2, L5, L6]

3.1 For every $j \in \mathbb{N}$ the function $x \mapsto a_j x^j$ has limit $a_j c^j$ at $c$, by the scalar rule of [L2] applied to step 2.1 with $\alpha = a_j$. [step 2.1, L2]

4.1 For every $n \in \mathbb{N}$ the function $x \mapsto \sum_{j<n} a_j x^j$ has limit $\sum_{j<n} a_j c^j$ at $c$. This is an induction on $n$ [L6]. For $n = 0$ both the function and the asserted limit are the empty sum $0$ by [L4], and step 1.2 applies. If the claim holds for $n$, then $\sum_{j<n+1} a_j x^j = \bigl(\sum_{j<n} a_j x^j\bigr) + a_n x^n$ by [L4], and the sum rule of [L2] applied to the inductive hypothesis and step 3.1 gives limit $\bigl(\sum_{j<n} a_j c^j\bigr) + a_n c^n = \sum_{j<n+1} a_j c^j$. Taking the given $n$, the limit of $p$ at $c$ exists and equals $p(c)$: claim 1. [step 1.2, step 3.1, L2, L4, L6]

5.1 Now let $q$ be a polynomial function with $q(c) \ne 0$ and put $A_q := \{\, x \in \mathbb{R} : q(x) \ne 0 \,\}$. By step 4.1 the limit of $q$ at $c$ exists and equals $q(c) \ne 0$, so [L7] gives that $c$ is a limit point of $A_q$; and $c \in A_q$ because $q(c) \ne 0$. [step 4.1, L7]

6.1 The quotient rule of [L2], applied on $\mathbb{R}$ to $p$ and $q$ with $\lim_{x \to c} q(x) = q(c) \ne 0$, gives that the limit of $(p/q)|_{A_q}$ at $c$ exists and equals $p(c)/q(c)$: claim 2. [step 1.1, step 4.1, step 5.1, L2] ∎

## Remarks

- **Two inductions, and why they are separate.** The first builds the monomials from the identity by repeated multiplication; the second builds the polynomial from the monomials by repeated addition. Each is an induction on the recursion clause of the object it builds ([[def-integer-power]] and [[def-finite-sum]] respectively), and neither can be replaced by dots.

- **Index hygiene.** The sum is written $\sum_{j<n}$, whose first index is $j = 0$ and whose empty case $n = 0$ is the zero function; the base case of step 4.1 is that empty case, and $x^0 = 1$ holds for **every** real $x$ including $0$ ([[def-integer-power]]), so no index or value is left undefined.

- **What claim 2 does not say.** It says nothing at a zero of $q$. There the quotient is undefined, and whether it has a limit depends on $p$ as well. It may have one: on $\{\, x : x \ne 0 \,\}$ the quotient $x^2/x$ equals $x$, whose limit at $0$ is $0$ by step 1.3 and [[lem-limit-is-local]]. It may also fail to have one. Nothing on this page decides such cases in general.
````

## Wave 7 provenance row for the target

```json
{
  "id": "ex-limit-of-a-polynomial",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://en.wikipedia.org/wiki/Polynomial",
    "https://www.jirka.org/ra/html/sec_limoffunc.html"
  ],
  "rationale": "The sources state that every real polynomial is continuous and give the algebra and quotient laws for limits. The local item combines those clauses into a two-claim package: the polynomial limit equals p(c), and p/q on its nonzero-denominator domain has limit p(c)/q(c). That composition is semantically sourced but not one exact source statement.",
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
      "source": "def-function-limit",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]]) with its order and absolute value\n([[def-real-order]]).\n\nLet $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$, let $c \\in \\mathbb{R}$\nbe a **limit point** of $A$ ([[def-limit-point-r]]), and let $L \\in \\mathbb{R}$.\nWe say that **$f(x)$ tends to $L$ as $x$ tends to $c$**, and write\n\n$$\\lim_{x \\to c} f(x) = L ,$$\n\nwhen\n\n$$(\\forall \\varepsilon > 0)\\ (\\exists \\delta > 0)\\ (\\forall x \\in A)\\ \\bigl[\\ 0 < |x - c| < \\delta \\ \\Longrightarrow\\ |f(x) - L| < \\varepsilon\\ \\bigr],$$\n\nwhere $\\varepsilon$ and $\\delta$ range over the **positive reals**.\n\nIn the language of neighbourhoods ([[def-neighbourhood-r]]) the condition reads:\nfor every real $\\varepsilon > 0$ there is a real $\\delta > 0$ with\n\n$$f\\bigl(A \\cap N^{*}_{\\delta}(c)\\bigr) \\;\\subseteq\\; N_{\\varepsilon}(L),$$\n\n$N^{*}_{\\delta}(c) = \\{\\, y : 0 < |y - c| < \\delta \\,\\}$ being the punctured\n$\\delta$-neighbourhood of $c$ and $N_{\\varepsilon}(L) = (L - \\varepsilon,\\ L +\n\\varepsilon)$ the open interval of [[def-interval]]. The two forms agree because\n$|f(x) - L| < \\varepsilon$ says exactly $f(x) \\in N_\\varepsilon(L)$, and\n$0 < |x - c| < \\delta$ says exactly $x \\in N^{*}_\\delta(c)$.\n\n**Three features of this definition are load bearing, not decoration.**\n\n1. **$c$ is required to be a limit point of $A$.** By [[def-limit-point-r]] that\n   says every punctured neighbourhood of $c$ meets $A$, so for every $\\delta > 0$\n   the set $A \\cap N^{*}_\\delta(c)$ over which the implication quantifies is\n   nonempty. Drop the requirement and the implication can be satisfied\n   vacuously by *every* real $L$ at once, which is exactly what\n   [[fs-limit-unique-at-every-point-of-the-domain]] records. At a point of $A$\n   that is not a limit point of $A$ — an isolated point — the symbol\n   $\\lim_{x \\to c} f(x)$ is therefore **not defined** in this library.\n\n2. **$c \\in A$ is not required.** A limit point of $A$ need not belong to $A$\n   ([[def-limit-point-r]]), and the definition never evaluates $f$ at $c$. This\n   is what allows a limit to be taken at a point where the function is not\n   defined at all, as at $0$ for $x \\mapsto x\\,\\psi(1/x)$.\n\n3. **The value $f(c)$, when it exists, is irrelevant.** The hypothesis\n   $0 < |x - c|$ excludes $x = c$ from the quantifier, so changing $f$ at the\n   single point $c$ changes nothing. Equality of the limit with the value is an\n   extra condition, not a consequence: [[fs-limit-equals-value]].\n\n**The notation presumes uniqueness.** Writing $\\lim_{x \\to c} f(x) = L$ treats\nthe left-hand side as a name for a single real number, which is legitimate only\nbecause at a limit point at most one $L$ can satisfy the displayed condition.\nThat obligation is discharged by [[lem-function-limit-unique]], recorded in this\nitem's `justified_by`. As with $\\sup S$ ([[rem-sup-conventions]]) and\n$\\lim_k x_k$ ([[lem-limit-unique]]), the symbol is written only for a function\nalready known to have a limit at $c$.\n\n**Real and rational $\\varepsilon$ define the same relation.** Above,\n$\\varepsilon$ and $\\delta$ range over the positive reals. Restricting either\nquantifier to the positive rationals gives the same relation: every positive\nrational is a positive real, and below every positive real lies a positive\nrational ([[lem-rat-embeds-dense]]), so an $\\varepsilon$-condition verified for\nall positive rationals is verified for an arbitrary positive real $\\eta$ by\nrunning it at a rational $\\varepsilon$ with $0 < \\varepsilon < \\eta$, and a\n$\\delta$ produced as a real may be shrunk to a rational one below it. This is\nthe passage sanctioned in the remarks of [[def-sequence]], and it is what lets\nthis definition be compared with [[def-real-limit]], whose $\\varepsilon$ is\nrational, in [[thm-sequential-criterion-for-function-limits]].",
      "uses": [
        "1.1",
        "1.2",
        "1.3"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-algebra-of-function-limits",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$, let $c$ be a limit point of $A$\n([[def-limit-point-r]]), let $f, g : A \\to \\mathbb{R}$ and let $\\alpha \\in\n\\mathbb{R}$. Suppose the limits of $f$ and of $g$ at $c$ exist, and write\n$L := \\lim_{x \\to c} f(x)$ and $M := \\lim_{x \\to c} g(x)$\n([[def-function-limit]]). Then:\n\n1. the limit of $f + g$ at $c$ exists, and\n   $$\\lim_{x \\to c} (f + g)(x) \\;=\\; \\lim_{x \\to c} f(x) + \\lim_{x \\to c} g(x) \\;=\\; L + M ;$$\n2. the limit of $\\alpha f$ at $c$ exists, and\n   $$\\lim_{x \\to c} (\\alpha f)(x) \\;=\\; \\alpha \\lim_{x \\to c} f(x) \\;=\\; \\alpha L ;$$\n3. the limit of $fg$ at $c$ exists, and\n   $$\\lim_{x \\to c} (fg)(x) \\;=\\; \\Bigl(\\lim_{x \\to c} f(x)\\Bigr)\\Bigl(\\lim_{x \\to c} g(x)\\Bigr) \\;=\\; LM ;$$\n4. if $M \\ne 0$, then, writing $A_0 := \\{\\, x \\in A : g(x) \\ne 0 \\,\\}$, the point\n   $c$ is a limit point of $A_0$, the quotient $f/g$ is defined on $A_0$ by\n   $(f/g)(x) = f(x) / g(x)$, the limit of $(f/g)|_{A_0}$ at $c$ exists, and\n   $$\\lim_{x \\to c} (f/g)|_{A_0}(x) \\;=\\; \\frac{\\lim_{x \\to c} f(x)}{\\lim_{x \\to c} g(x)} \\;=\\; \\frac{L}{M} .$$\n\nEach equation asserts two things at once: that the limit on the left exists, and\nthat it has the stated value. Both are proved. The symbols denote by\n[[lem-function-limit-unique]].\n\n**Everything below is proved directly from $\\varepsilon$ and $\\delta$.** No\nsequence is constructed and no choice principle is used, so all four claims are\ntheorems of ZF. Passing through\n[[thm-sequential-criterion-for-function-limits]] instead would import the\ncountable choice spent in that theorem's converse direction, for no gain; see\n[[rem-heine-criterion-choice-cost]].\n\n**Why the quotient is stated on $A_0$.** The function $f/g$ is simply not defined\nwhere $g$ vanishes, and $g$ may well vanish at points of $A$ arbitrarily far from\n$c$; restricting to $A_0$ is therefore forced. That this restriction still has\n$c$ as a limit point, so that the limit there means anything at all, is the last\nclaim of [[lem-sign-preservation-near-a-limit]]. The sequential analogue\n[[thm-algebra-of-limits]] needs the corresponding hypothesis in the form \"the\ndenominator sequence is nonzero at every index\".",
      "uses": [
        "1.1",
        "2.1",
        "3.1",
        "4.1",
        "6.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-limit-point-r",
      "source_section": "Definition",
      "quote": "Let $A \\subseteq \\mathbb{R}$ and $x \\in \\mathbb{R}$, with neighbourhoods as in\n[[def-neighbourhood-r]] and closure as in\n[[def-interior-closure-boundary-r]].\n\n- $x$ is an **adherent point** of $A$ when $N_\\varepsilon(x) \\cap A \\ne\n  \\varnothing$ for every real $\\varepsilon > 0$.\n- $x$ is a **limit point** (or *accumulation point*) of $A$ when\n  $N^{*}_\\varepsilon(x) \\cap A \\ne \\varnothing$ for every real\n  $\\varepsilon > 0$: every punctured neighbourhood of $x$ meets $A$.\n- $x$ is an **isolated point** of $A$ when $x \\in A$ and there is a real\n  $\\varepsilon > 0$ with $N_\\varepsilon(x) \\cap A = \\{x\\}$.\n- The **derived set** of $A$ is\n  $$A' \\;:=\\; \\{\\, x \\in \\mathbb{R} : x \\text{ is a limit point of } A \\,\\}.$$\n- $A$ is **dense in $\\mathbb{R}$** when $\\overline{A} = \\mathbb{R}$.\n\n**A limit point is an adherent point**, since $N^{*}_\\varepsilon(x) \\subseteq\nN_\\varepsilon(x)$; and an element of $A$ is an adherent point of $A$, since\n$x \\in N_\\varepsilon(x) \\cap A$ ([[def-neighbourhood-r]]). So the adherent\npoints of $A$ are exactly the points of $A \\cup A'$, a statement proved as part\nof [[thm-closure-characterisations-r]].\n\n**Limit point and isolated point are exact opposites inside $A$.** For\n$x \\in A$: $x$ is an isolated point of $A$ exactly when it is not a limit point\nof $A$. Indeed $N_\\varepsilon(x) \\cap A = \\{x\\}$ says precisely that\n$N^{*}_\\varepsilon(x) \\cap A = \\varnothing$, because $x$ itself always lies in\n$N_\\varepsilon(x) \\cap A$ when $x \\in A$; so the existence of an $\\varepsilon$\nwitnessing isolation is the negation of the condition defining a limit point.\nA point of $A$ is therefore either isolated in $A$ or a limit point of $A$, and\nnever both.\n\n**A limit point need not belong to the set, and a point of the set need not be a\nlimit point.** Both possibilities occur, and the two examples that matter later\nare $0$, which is a limit point of $\\{\\, 1/k : k \\ge 1 \\,\\}$ without belonging\nto it, and $0$ again, which belongs to $\\{0\\} \\cup [1,2]$ as an isolated point.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-neighbourhood-r",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]], [[def-ordered-field]]) with its order\n([[def-real-order]]) and its absolute value ([[def-abs-value]]).\n\nLet $x \\in \\mathbb{R}$ and let $\\varepsilon \\in \\mathbb{R}$ with\n$\\varepsilon > 0$. The **$\\varepsilon$-neighbourhood of $x$** is\n\n$$N_\\varepsilon(x) \\;:=\\; \\{\\, y \\in \\mathbb{R} : |y - x| < \\varepsilon \\,\\},$$\n\nand the **punctured $\\varepsilon$-neighbourhood of $x$** is\n\n$$N^{*}_\\varepsilon(x) \\;:=\\; N_\\varepsilon(x) \\setminus \\{x\\} \\;=\\; \\{\\, y \\in \\mathbb{R} : 0 < |y - x| < \\varepsilon \\,\\}.$$\n\nThe two descriptions of $N^{*}_\\varepsilon(x)$ agree because $|y - x| = 0$ holds\nexactly when $y = x$ ([[lem-of-abs-value]]).\n\n**A neighbourhood is an open interval.** For every $x$ and every\n$\\varepsilon > 0$,\n\n$$N_\\varepsilon(x) \\;=\\; (x - \\varepsilon,\\ x + \\varepsilon),$$\n\nthe interval of [[def-interval]]. Indeed [[lem-of-abs-value]] gives, for\n$\\varepsilon > 0$, the equivalence $|y - x| < \\varepsilon \\iff -\\varepsilon <\ny - x < \\varepsilon$, and adding $x$ throughout turns the right-hand side into\n$x - \\varepsilon < y < x + \\varepsilon$ ([[def-ordered-field]]).\n\n**The centre lies in its own neighbourhoods.** $x \\in N_\\varepsilon(x)$, since\n$|x - x| = |0| = 0 < \\varepsilon$ ([[lem-of-abs-value]]).\n\n**Punctured neighbourhoods are never empty.** The element\n$y := x + \\varepsilon/2$ satisfies $|y - x| = \\varepsilon/2$, which is\n$> 0$ and $< \\varepsilon$, so $y \\in N^{*}_\\varepsilon(x)$\n([[lem-of-abs-value]], [[def-ordered-field]]).\n\n**Monotonicity in the radius.** If $0 < \\delta \\le \\varepsilon$ then\n$N_\\delta(x) \\subseteq N_\\varepsilon(x)$, because $|y - x| < \\delta \\le\n\\varepsilon$ ([[def-ordered-field]]).\n\n**Nesting at an interior point.** If $y \\in N_\\varepsilon(x)$ and\n$0 < \\delta \\le \\varepsilon - |y - x|$, then\n\n$$N_\\delta(y) \\;\\subseteq\\; N_\\varepsilon(x).$$\n\nIndeed for $z \\in N_\\delta(y)$ the triangle inequality\n([[lem-of-triangle-inequality]]) gives\n$|z - x| = |(z - y) + (y - x)| \\le |z - y| + |y - x| < \\delta + |y - x| \\le\n\\varepsilon$. Note that $\\varepsilon - |y - x| > 0$ precisely because\n$y \\in N_\\varepsilon(x)$, so such a $\\delta$ always exists.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-finite-sum",
      "source_section": "Definition",
      "quote": "Throughout this page $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]]), in particular an ordered field\n([[def-ordered-field]]) and a field ([[def-field]]), and $\\mathbb{N}$ is the set\nof natural numbers ([[def-natural-numbers]]) with successor $\\sigma(n) = n + 1$\n([[def-nat-addition]]).\n\nLet $a : \\mathbb{N} \\to \\mathbb{R}$ be a sequence of reals, written $a_k$ for\n$a(k)$. **Finite sums and finite products of $a$ are defined by recursion on the\nupper index**, which is legitimate because of the recursion theorem\n([[thm-recursion]]). That theorem produces a function of one variable, so the\nrunning index has to be carried along inside the value: applying it to the set\n$A = \\mathbb{N} \\times \\mathbb{R}$, the starting element $(0, 0)$ and the function\n$f(n, s) = (\\sigma(n),\\, s + a_n)$ gives a unique\n$g : \\mathbb{N} \\to \\mathbb{N} \\times \\mathbb{R}$ with\n\n$$g(0) = (0, 0), \\qquad g(\\sigma(n)) = f(g(n)) \\quad (n \\in \\mathbb{N}).$$\n\nWrite $g(n) = \\big(\\pi_1(g(n)),\\, \\Sigma_n\\big)$ for its two coordinates.\n\n**The first coordinate is the index itself, and that is a small induction, not an\nobservation** ([[thm-induction-principle]]). Indeed $\\pi_1(g(0)) = 0$; and if\n$\\pi_1(g(n)) = n$, then\n$g(\\sigma(n)) = f\\big(\\pi_1(g(n)), \\Sigma_n\\big) = \\big(\\sigma(\\pi_1(g(n))),\\, \\Sigma_n + a_{\\pi_1(g(n))}\\big) = \\big(\\sigma(n),\\, \\Sigma_n + a_n\\big)$,\nso $\\pi_1(g(\\sigma(n))) = \\sigma(n)$. By induction $\\pi_1(g(n)) = n$ for every\n$n \\in \\mathbb{N}$. Only now may the second coordinate of the two displayed\nclauses be read off, and doing so gives\n\n$$\\Sigma_0 = 0, \\qquad \\Sigma_{\\sigma(n)} = \\Sigma_n + a_n .$$\n\n$\\Sigma$ is moreover the **unique** function $\\mathbb{N} \\to \\mathbb{R}$ with those\ntwo properties: if $\\Sigma'$ also has them then $n \\mapsto (n, \\Sigma'_n)$ satisfies\nthe two clauses defining $g$, hence equals $g$ by the uniqueness clause of\n[[thm-recursion]], so $\\Sigma' = \\Sigma$.\n\nWe write $\\sum_{k < n} a_k := \\Sigma_n$. The same construction with starting\nelement $(0, 1)$ and $f(n, p) = (\\sigma(n),\\, p \\cdot a_n)$, with the same\ninduction on the first coordinate and the same uniqueness argument, gives the\nunique $\\Pi : \\mathbb{N} \\to \\mathbb{R}$ with\n\n$$\\Pi_0 = 1, \\qquad \\Pi_{\\sigma(n)} = \\Pi_n \\cdot a_n ,$$\n\nand we write $\\prod_{k < n} a_k := \\Pi_n$.\n\n**Notation.** For $m, n \\in \\mathbb{N}$ we abbreviate\n\n$$\\sum_{k=0}^{n} a_k := \\sum_{k < n+1} a_k, \\qquad \\prod_{k=0}^{n} a_k := \\prod_{k < n+1} a_k,$$\n\nand, for a general lower index $m$ with $m \\le n + 1$, writing $d = n + 1 - m$\nfor the number of terms,\n\n$$\\sum_{k=m}^{n} a_k := \\sum_{j < d} a_{m+j}, \\qquad \\prod_{k=m}^{n} a_k := \\prod_{j < d} a_{m+j} .$$\n\nWhen $m = n + 1$ we have $d = 0$ and the sum is **empty**, with value $0$, while\nthe empty product has value $1$. In the same spirit $\\sum_{k=0}^{-1} a_k$ is\nnotation for the empty sum $\\Sigma_0 = 0$ and $\\prod_{k=0}^{-1} a_k$ for the\nempty product $\\Pi_0 = 1$; the index $-1$ never occurs as an element of\n$\\mathbb{N}$ and is only a way of writing \"no terms\".\n\nOnly finitely many values of $a$ enter $\\sum_{k<n} a_k$, so the notation\n$\\sum_{k<n} a_k$ and $\\prod_{k<n} a_k$ is also used for a list\n$a_0, \\dots, a_{n-1}$ of reals given without reference to any extension of the\nlist to all of $\\mathbb{N}$: extend the list by $a_k = 0$ (respectively\n$a_k = 1$) for $k \\ge n$ and apply the definition above.",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-integer-power",
      "source_section": "Definition",
      "quote": "Let $a \\in \\mathbb{R}$, where $\\mathbb{R}$ is the ambient ordered field\n([[def-ordered-field]], [[def-field]]).\n\n**Natural exponents.** By the recursion theorem ([[thm-recursion]]) applied to\nthe set $\\mathbb{R}$, the starting element $1$ and the function\n$f(x) = x \\cdot a$, there is a unique function $\\mathbb{N} \\to \\mathbb{R}$,\nwritten $n \\mapsto a^n$, with\n\n$$a^0 = 1, \\qquad a^{n+1} = a^n \\cdot a \\quad (n \\in \\mathbb{N}).$$\n\nThus $a^1 = a$, $a^2 = a \\cdot a$, and so on. Note that this is defined for\n**every** $a$, including $a = 0$.\n\n**Negative exponents.** If $a \\ne 0$ and $n \\in \\mathbb{N}$ with $n \\ge 1$, set\n\n$$a^{-n} := (a^n)^{-1}.$$\n\n**Why that is legitimate.** The right-hand side presupposes that $a^n$ is\ninvertible, that is, that $a^n \\ne 0$. This is a proof obligation and not an\nobservation, and it is discharged by claim 2 of [[lem-power-laws]]: for $a \\ne 0$\nin a field, $a^n \\ne 0$ for every $n \\in \\mathbb{N}$, proved there by induction on\n$n$ from the fact that a field has no zero divisors ([[lem-of-no-zero-divisors]]).\nThat lemma is a statement *about* the operation introduced here, so it depends on\nthis definition and is recorded in this item's `justified_by` rather than in its\n`deps` (SCHEMA §3). Given $a^n \\ne 0$, the value $(a^n)^{-1}$ is a single\nwell-determined element, because multiplicative inverses in a field are unique\n([[lem-of-inverse-unique]]).\n\n**Integer exponents.** Every integer $m$ ([[def-integers]]) is either\n$\\iota(n)$ or $-\\iota(n)$ for a unique natural $n$, where $\\iota$ is the\nembedding $\\mathbb{N} \\to \\mathbb{Z}$ ([[lem-nat-embeds-int]],\n[[def-int-operations]]). This too is a citation and not a slogan: the order on\n$\\mathbb{Z}$ is total ([[thm-int-ordered-ring]]), so $m \\ge 0$ or $m < 0$; the\nimage of $\\iota$ is exactly the set of nonnegative integers, and each of them is\n$\\iota(n)$ for a unique natural $n$ ([[lem-nat-embeds-int]]); and if $m < 0$ then\n$-m > 0$, by compatibility of the order with addition ([[thm-int-ordered-ring]]),\nso $-m = \\iota(n)$ and $m = -\\iota(n)$, with $n$ unique because $\\iota$ is\ninjective. The two clauses above therefore define $a^m$ for every\n$m \\in \\mathbb{Z}$ whenever $a \\ne 0$, and for every $m \\in \\mathbb{N}$ for\narbitrary $a$. The clauses are consistent where they overlap: the only overlap is\n$m = 0$, where $-\\iota(0) = \\iota(0)$ and $(a^0)^{-1} = 1^{-1} = 1 = a^0$.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L6",
      "source": "thm-induction-principle",
      "source_section": "Statement",
      "quote": "Let $S \\subseteq \\mathbb{N}$. If $0 \\in S$ and $\\sigma(n) \\in S$ whenever $n \\in S$, then $S = \\mathbb{N}$. Equivalently (property form): if a property $P$ satisfies $P(0)$ and ($P(n) \\Rightarrow P(\\sigma(n))$) for all $n$, then $P(n)$ holds for all $n \\in \\mathbb{N}$. This is the induction principle, the basis of proof by induction.",
      "uses": [
        "2.1",
        "4.1"
      ]
    },
    {
      "fact": "L7",
      "source": "lem-sign-preservation-near-a-limit",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$, let $c$ be a limit point of $A$\n([[def-limit-point-r]]), let $f : A \\to \\mathbb{R}$ and suppose the limit of $f$\nat $c$ exists with $\\lim_{x \\to c} f(x) = L$ and $L \\ne 0$\n([[def-function-limit]]). Then there is a real $\\delta > 0$ such that every\n$x \\in A$ with $0 < |x - c| < \\delta$ satisfies\n\n$$|f(x)| \\;>\\; \\frac{|L|}{2} \\;>\\; 0 ;$$\n\nin particular $f(x) \\ne 0$ for every such $x$. Moreover:\n\n- if $L > 0$ then $f(x) > L/2 > 0$ for every such $x$;\n- if $L < 0$ then $f(x) < L/2 < 0$ for every such $x$.\n\nConsequently, writing\n\n$$A_0 := \\{\\, x \\in A \\ : \\ f(x) \\ne 0 \\,\\},$$\n\nthe point $c$ is a limit point of $A_0$.\n\n**The bound $|L|/2$, and not merely \"$f \\ne 0$\", is what later proofs need.** The\nquotient case of [[thm-algebra-of-function-limits]] estimates $1/|f|$ near $c$\nand therefore needs a *positive lower* bound on $|f|$ there, and the last claim\nis what lets a limit be taken on the smaller domain $A_0$ at all.",
      "uses": [
        "5.1"
      ]
    },
    {
      "fact": "L8",
      "source": "lem-of-abs-value",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \\in F$, with\n$|x|$ the absolute value ([[def-abs-value]]). Then\n\n$$|x| \\ge 0; \\quad |x| = 0 \\iff x = 0; \\quad -|x| \\le x \\le |x|; \\quad |-x| = |x|; \\quad |xy| = |x|\\,|y|;$$\n\nand, for every $c > 0$, one has $|x| < c \\iff -c < x < c$.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L8",
      "source": "def-field",
      "source_section": "Definition",
      "quote": "A **field** is a set $F$ equipped with two binary operations $+$ (addition) and\n$\\cdot$ (multiplication) and two distinguished elements $0 \\ne 1$ of $F$,\nsatisfying:\n\n- **(A)** $(F, +)$ is an abelian group with identity $0$: addition is\n  associative and commutative, $x + 0 = x$ for all $x$, and every $x$ has an\n  additive inverse $-x$ with $x + (-x) = 0$.\n- **(M)** Multiplication is associative and commutative **on all of $F$**, and\n  $x \\cdot 1 = x$ for every $x \\in F$; moreover $(F \\setminus \\{0\\}, \\cdot)$ is an\n  abelian group with identity $1$, so every $x \\ne 0$ has a multiplicative inverse\n  $x^{-1}$ with $x \\cdot x^{-1} = 1$.\n- **(D)** Multiplication distributes over addition: $x \\cdot (y + z) = x\\cdot y + x\\cdot z$.\n\nWe write $x - y := x + (-y)$ and $x/y := x \\cdot y^{-1}$ (for $y \\ne 0$), and\nabbreviate $x \\cdot y$ as $xy$.",
      "uses": [
        "1.2"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "Every $c \\in \\mathbb{R}$ is a limit point of $\\mathbb{R}$, so [L1] and [L2] apply at $c$ to functions defined on $\\mathbb{R}$.",
      "step": "1.1",
      "inputs": [
        "L1",
        "L2",
        "L3"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "A constant function $x \\mapsto a$ has limit $a$ at $c$: $|a - a| = |0| = 0 < \\varepsilon$ for every real $\\varepsilon > 0$, any $\\delta$ serving.",
      "step": "1.2",
      "inputs": [
        "L1",
        "L8"
      ]
    },
    {
      "id": "step-1-3",
      "claim": "The identity function $x \\mapsto x$ has limit $c$ at $c$: given a real $\\varepsilon > 0$, take $\\delta := \\varepsilon$; then $0 < |x - c| < \\delta$ gives $|x - c| < \\varepsilon$.",
      "step": "1.3",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "For every $j \\in \\mathbb{N}$ the function $x \\mapsto x^j$ has limit $c^j$ at $c$. This is an induction on $j$ [L6]. For $j = 0$ the function is the constant $1$ by [L5], and step 1.2 applies with $a = 1 = c^0$. If the claim holds for $j$, then $x^{j+1} = x^j \\cdot x$ by [L5], and the product rule of [L2] applied to $x \\mapsto x^j$ and the identity gives limit $c^j \\cdot c = c^{j+1}$.",
      "step": "2.1",
      "inputs": [
        "L6",
        "L5",
        "1.2",
        "L2",
        "1.3"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "For every $j \\in \\mathbb{N}$ the function $x \\mapsto a_j x^j$ has limit $a_j c^j$ at $c$, by the scalar rule of [L2] applied to step 2.1 with $\\alpha = a_j$.",
      "step": "3.1",
      "inputs": [
        "L2",
        "2.1"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "For every $n \\in \\mathbb{N}$ the function $x \\mapsto \\sum_{j<n} a_j x^j$ has limit $\\sum_{j<n} a_j c^j$ at $c$. This is an induction on $n$ [L6]. For $n = 0$ both the function and the asserted limit are the empty sum $0$ by [L4], and step 1.2 applies. If the claim holds for $n$, then $\\sum_{j<n+1} a_j x^j = \\bigl(\\sum_{j<n} a_j x^j\\bigr) + a_n x^n$ by [L4], and the sum rule of [L2] applied to the inductive hypothesis and step 3.1 gives limit $\\bigl(\\sum_{j<n} a_j c^j\\bigr) + a_n c^n = \\sum_{j<n+1} a_j c^j$. Taking the given $n$, the limit of $p$ at $c$ exists and equals $p(c)$: claim 1.",
      "step": "4.1",
      "inputs": [
        "L6",
        "L4",
        "1.2",
        "L2",
        "3.1"
      ]
    },
    {
      "id": "step-5-1",
      "claim": "Now let $q$ be a polynomial function with $q(c) \\ne 0$ and put $A_q := \\{\\, x \\in \\mathbb{R} : q(x) \\ne 0 \\,\\}$. By step 4.1 the limit of $q$ at $c$ exists and equals $q(c) \\ne 0$, so [L7] gives that $c$ is a limit point of $A_q$; and $c \\in A_q$ because $q(c) \\ne 0$.",
      "step": "5.1",
      "inputs": [
        "4.1",
        "L7"
      ]
    },
    {
      "id": "step-6-1",
      "claim": "The quotient rule of [L2], applied on $\\mathbb{R}$ to $p$ and $q$ with $\\lim_{x \\to c} q(x) = q(c) \\ne 0$, gives that the limit of $(p/q)|_{A_q}$ at $c$ exists and equals $p(c)/q(c)$: claim 2.",
      "step": "6.1",
      "inputs": [
        "L2",
        "1.1",
        "4.1",
        "5.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "step 4.1: For every $n \\in \\mathbb{N}$ the function $x \\mapsto \\sum_{j<n} a_j x^j$ has limit $\\sum_{j<n} a_j c^j$ at $c$. This is an induction on $n$ [L6]. For $n = 0$ both the function and the asserted limit are the empty sum $0$ by [L4], and step 1.2 applies. If the c"
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "step 1.2: A constant function $x \\mapsto a$ has limit $a$ at $c$: $|a - a| = |0| = 0 < \\varepsilon$ for every real $\\varepsilon > 0$, any $\\delta$ serving."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "step 1.1: Every $c \\in \\mathbb{R}$ is a limit point of $\\mathbb{R}$, so [L1] and [L2] apply at $c$ to functions defined on $\\mathbb{R}$."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "step 1.2: A constant function $x \\mapsto a$ has limit $a$ at $c$: $|a - a| = |0| = 0 < \\varepsilon$ for every real $\\varepsilon > 0$, any $\\delta$ serving."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "The Statement has no interval endpoint or finite-index endpoint boundary."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "step 1.1: the proof begins from named data and uses only explicit witnesses or deterministic constructions; no selection from an unindexed nonempty family is hidden."
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
    "notes": "critical risk (16): 10 declared dependencies; 12 cited facts; 8 numbered proof steps; existence, choice, uniqueness, or well-definedness; boundary-sensitive language; induction, recursion, or minimality; quotient or equivalence-class construction; analytic limiting/completeness language, routed by risk-report.mjs. The read-only DeepSeek V4 Pro audit-refuter received the complete target and every cited dependency and returned CLEAN. Boundary evidence: Boundary cases checked: empty polynomial (n=0) gives constant zero function, limit 0 = empty sum; exponent j=0 yields x⁰=1, consistent with 0⁰=1 convention, limit 1 = c⁰; c=0 handled correctly, powers xʲ (j≥1) give limit 0; quotient domain A_q = {x : q(x)≠0} is nonempty and c is a limit point via L7, so limit defined; induction bases (n=0, j=0) correctly set; no division by zero; no interval endpoints or extended-real values arise. All boundary conditions satisfied. Checked surface: The title, public claims (Claim 1 and Claim 2), every numbered proof step (1.1–6.1), and all three Remarks were read and verified. Alpha adjudicated the return against the current item and cited dependencies on disk and found no fatal mathematical or dependency-citation defect. Evidence: research/audit/wave7-preserved-refuters/ex-limit-of-a-polynomial--5458f5ab1317a74c.result.json."
  }
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "ex-limit-of-a-polynomial",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "thm-algebra-of-function-limits",
    "declared_target": "thm-algebra-of-function-limits",
    "target_statement_provenance": "literature-derived",
    "targetPage": "limits-of-real-functions",
    "targetBatch": "wave7-real-analysis-completeness-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-limit-of-a-polynomial",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "lem-sign-preservation-near-a-limit",
    "declared_target": "lem-sign-preservation-near-a-limit",
    "target_statement_provenance": "ai-altered",
    "targetPage": "limits-of-real-functions",
    "targetBatch": "wave7-real-analysis-completeness-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-limit-of-a-polynomial",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "def-function-limit",
    "declared_target": "def-function-limit",
    "target_statement_provenance": "literature-derived",
    "targetPage": "limits-of-real-functions",
    "targetBatch": "wave7-real-analysis-completeness-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-limit-of-a-polynomial",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "def-limit-point-r",
    "declared_target": "def-limit-point-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-limit-of-a-polynomial",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "def-neighbourhood-r",
    "declared_target": "def-neighbourhood-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-limit-of-a-polynomial",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
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
    "source": "ex-limit-of-a-polynomial",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "def-integer-power",
    "declared_target": "def-integer-power",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-limit-of-a-polynomial",
    "sourcePage": "limits-of-real-functions-examples",
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
    "source": "ex-limit-of-a-polynomial",
    "sourcePage": "limits-of-real-functions-examples",
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
    "source": "ex-limit-of-a-polynomial",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "def-field",
    "declared_target": "def-field",
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

## Full text of every cited or declared item (12)

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

### `def-function-limit`

````markdown
---
id: def-function-limit
kind: definition
title: "The $\\varepsilon$-$\\delta$ limit $\\lim_{x \\to c} f(x) = L$ of $f : A \\to \\mathbb{R}$ at a limit point $c$ of $A$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-limit-point-r, def-neighbourhood-r, def-interval, def-real-order, def-complete-ordered-field, lem-of-abs-value, lem-rat-embeds-dense]
justified_by: [lem-function-limit-unique]
aliases: [def-epsilon-delta-limit, def-limit-of-a-function]
landmark: true
short: "the $\\varepsilon$-$\\delta$ limit of a function"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, §3.1: Limits of functions"
      url: "https://www.jirka.org/ra/html/sec_limoffunc.html"
    - title: "Limit of a function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Def. 4.1)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §9.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "J. Lebl, Basic Analysis I, §3.1"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]]) with its order and absolute value
([[def-real-order]]).

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$, let $c \in \mathbb{R}$
be a **limit point** of $A$ ([[def-limit-point-r]]), and let $L \in \mathbb{R}$.
We say that **$f(x)$ tends to $L$ as $x$ tends to $c$**, and write

$$\lim_{x \to c} f(x) = L ,$$

when

$$(\forall \varepsilon > 0)\ (\exists \delta > 0)\ (\forall x \in A)\ \bigl[\ 0 < |x - c| < \delta \ \Longrightarrow\ |f(x) - L| < \varepsilon\ \bigr],$$

where $\varepsilon$ and $\delta$ range over the **positive reals**.

In the language of neighbourhoods ([[def-neighbourhood-r]]) the condition reads:
for every real $\varepsilon > 0$ there is a real $\delta > 0$ with

$$f\bigl(A \cap N^{*}_{\delta}(c)\bigr) \;\subseteq\; N_{\varepsilon}(L),$$

$N^{*}_{\delta}(c) = \{\, y : 0 < |y - c| < \delta \,\}$ being the punctured
$\delta$-neighbourhood of $c$ and $N_{\varepsilon}(L) = (L - \varepsilon,\ L +
\varepsilon)$ the open interval of [[def-interval]]. The two forms agree because
$|f(x) - L| < \varepsilon$ says exactly $f(x) \in N_\varepsilon(L)$, and
$0 < |x - c| < \delta$ says exactly $x \in N^{*}_\delta(c)$.

**Three features of this definition are load bearing, not decoration.**

1. **$c$ is required to be a limit point of $A$.** By [[def-limit-point-r]] that
   says every punctured neighbourhood of $c$ meets $A$, so for every $\delta > 0$
   the set $A \cap N^{*}_\delta(c)$ over which the implication quantifies is
   nonempty. Drop the requirement and the implication can be satisfied
   vacuously by *every* real $L$ at once, which is exactly what
   [[fs-limit-unique-at-every-point-of-the-domain]] records. At a point of $A$
   that is not a limit point of $A$ — an isolated point — the symbol
   $\lim_{x \to c} f(x)$ is therefore **not defined** in this library.

2. **$c \in A$ is not required.** A limit point of $A$ need not belong to $A$
   ([[def-limit-point-r]]), and the definition never evaluates $f$ at $c$. This
   is what allows a limit to be taken at a point where the function is not
   defined at all, as at $0$ for $x \mapsto x\,\psi(1/x)$.

3. **The value $f(c)$, when it exists, is irrelevant.** The hypothesis
   $0 < |x - c|$ excludes $x = c$ from the quantifier, so changing $f$ at the
   single point $c$ changes nothing. Equality of the limit with the value is an
   extra condition, not a consequence: [[fs-limit-equals-value]].

**The notation presumes uniqueness.** Writing $\lim_{x \to c} f(x) = L$ treats
the left-hand side as a name for a single real number, which is legitimate only
because at a limit point at most one $L$ can satisfy the displayed condition.
That obligation is discharged by [[lem-function-limit-unique]], recorded in this
item's `justified_by`. As with $\sup S$ ([[rem-sup-conventions]]) and
$\lim_k x_k$ ([[lem-limit-unique]]), the symbol is written only for a function
already known to have a limit at $c$.

**Real and rational $\varepsilon$ define the same relation.** Above,
$\varepsilon$ and $\delta$ range over the positive reals. Restricting either
quantifier to the positive rationals gives the same relation: every positive
rational is a positive real, and below every positive real lies a positive
rational ([[lem-rat-embeds-dense]]), so an $\varepsilon$-condition verified for
all positive rationals is verified for an arbitrary positive real $\eta$ by
running it at a rational $\varepsilon$ with $0 < \varepsilon < \eta$, and a
$\delta$ produced as a real may be shrunk to a rational one below it. This is
the passage sanctioned in the remarks of [[def-sequence]], and it is what lets
this definition be compared with [[def-real-limit]], whose $\varepsilon$ is
rational, in [[thm-sequential-criterion-for-function-limits]].

## Remarks

- **Terminology.** *Limit point* here is a property of the set $A$ and the point
  $c$, in the sense of [[def-limit-point-r]]; it has nothing to do with
  subsequential limits ([[def-subsequential-limit]]), and the distinction is the
  one that item records.

- **Why the punctured condition, and not $|x - c| < \delta$.** With the
  unpunctured condition the definition would force $f$ to be defined at $c$ and
  would force $|f(c) - L| < \varepsilon$ for every $\varepsilon$, that is,
  $L = f(c)$. The resulting notion is continuity at $c$, a strictly stronger
  condition, and conflating the two is the error catalogued in
  [[fs-limit-equals-value]].

- **One-sided and infinite variants.** Restricting the domain to one side of $c$
  gives the one-sided limits of [[def-one-sided-limits]]; replacing the
  conditions on $x$ or on $f(x)$ by unboundedness conditions gives the limits at
  and to infinity of [[def-limits-at-infinity]]. Both are built on this
  definition rather than beside it.
````

### `def-integer-power`

````markdown
---
id: def-integer-power
kind: definition
title: "Integer powers $a^m$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-recursion, def-ordered-field, def-integers, def-field, def-int-operations, lem-nat-embeds-int, lem-of-inverse-unique, lem-of-no-zero-divisors, lem-of-zero-mult, thm-int-ordered-ring]
justified_by: [lem-power-laws]
aliases: [def-power]
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
    - title: "Exponentiation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Exponentiation"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §4.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Definition

Let $a \in \mathbb{R}$, where $\mathbb{R}$ is the ambient ordered field
([[def-ordered-field]], [[def-field]]).

**Natural exponents.** By the recursion theorem ([[thm-recursion]]) applied to
the set $\mathbb{R}$, the starting element $1$ and the function
$f(x) = x \cdot a$, there is a unique function $\mathbb{N} \to \mathbb{R}$,
written $n \mapsto a^n$, with

$$a^0 = 1, \qquad a^{n+1} = a^n \cdot a \quad (n \in \mathbb{N}).$$

Thus $a^1 = a$, $a^2 = a \cdot a$, and so on. Note that this is defined for
**every** $a$, including $a = 0$.

**Negative exponents.** If $a \ne 0$ and $n \in \mathbb{N}$ with $n \ge 1$, set

$$a^{-n} := (a^n)^{-1}.$$

**Why that is legitimate.** The right-hand side presupposes that $a^n$ is
invertible, that is, that $a^n \ne 0$. This is a proof obligation and not an
observation, and it is discharged by claim 2 of [[lem-power-laws]]: for $a \ne 0$
in a field, $a^n \ne 0$ for every $n \in \mathbb{N}$, proved there by induction on
$n$ from the fact that a field has no zero divisors ([[lem-of-no-zero-divisors]]).
That lemma is a statement *about* the operation introduced here, so it depends on
this definition and is recorded in this item's `justified_by` rather than in its
`deps` (SCHEMA §3). Given $a^n \ne 0$, the value $(a^n)^{-1}$ is a single
well-determined element, because multiplicative inverses in a field are unique
([[lem-of-inverse-unique]]).

**Integer exponents.** Every integer $m$ ([[def-integers]]) is either
$\iota(n)$ or $-\iota(n)$ for a unique natural $n$, where $\iota$ is the
embedding $\mathbb{N} \to \mathbb{Z}$ ([[lem-nat-embeds-int]],
[[def-int-operations]]). This too is a citation and not a slogan: the order on
$\mathbb{Z}$ is total ([[thm-int-ordered-ring]]), so $m \ge 0$ or $m < 0$; the
image of $\iota$ is exactly the set of nonnegative integers, and each of them is
$\iota(n)$ for a unique natural $n$ ([[lem-nat-embeds-int]]); and if $m < 0$ then
$-m > 0$, by compatibility of the order with addition ([[thm-int-ordered-ring]]),
so $-m = \iota(n)$ and $m = -\iota(n)$, with $n$ unique because $\iota$ is
injective. The two clauses above therefore define $a^m$ for every
$m \in \mathbb{Z}$ whenever $a \ne 0$, and for every $m \in \mathbb{N}$ for
arbitrary $a$. The clauses are consistent where they overlap: the only overlap is
$m = 0$, where $-\iota(0) = \iota(0)$ and $(a^0)^{-1} = 1^{-1} = 1 = a^0$.

## Remarks

- **The convention $0^0 = 1$ is adopted here**, and it is not a matter of taste
  but of agreement with the recursion above: $a^0 = 1$ is the starting value for
  every $a$, exactly as the empty product is $1$ ([[def-finite-sum]]). This is
  the convention that makes the empty product, the binomial theorem, and
  polynomial notation $\sum_k c_k x^k$ work at $x = 0$ without an exception. The
  competing convention "$0^0$ undefined" belongs to contexts where $x^y$ is
  studied as a function of two *real* variables and one wants continuity, which
  is unavailable and irrelevant here: the exponent in $a^m$ is an integer, never
  a real.
- $0^n = 0$ for every $n \ge 1$, since $0^{n} = 0^{n-1} \cdot 0 = 0$, a product
  with a zero factor ([[lem-of-zero-mult]]); and
  $0^{-n}$ is not defined for $n \ge 1$, since $0$ has no inverse.
- The exponent is an integer and stays an integer. Rational exponents are a
  separate construction resting on the existence of roots
  ([[thm-nth-roots-exist]], [[def-rational-power]]), and real exponents do not
  exist in this library yet ([[rem-real-exponents-deferred]]).
- The laws $a^{m+n} = a^m a^n$, $(a^m)^n = a^{mn}$ and $(ab)^n = a^n b^n$ are
  proved, not assumed, in [[lem-power-laws]]; the order behaviour of $a \mapsto a^n$
  is [[lem-power-monotone]].
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

### `fs-limit-equals-value`

````markdown
---
id: fs-limit-equals-value
kind: false-statement
title: "FALSE: $\\lim_{x \\to c} f(x) = f(c)$ whenever both sides exist"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-function-limit, lem-function-limit-unique, def-limit-point-r, def-neighbourhood-r, lem-of-abs-value, cor-of-one-positive, def-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "FALSE: limit equals value"
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
    - title: "J. Lebl, Basic Analysis I, §3.1: Limits of functions"
      url: "https://www.jirka.org/ra/html/sec_limoffunc.html"
    - title: "Limit of a function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_function"
    - title: "Classification of discontinuities (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Classification_of_discontinuities"
    - title: "J. Lebl, Basic Analysis I, §3.1"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement

**False claim:** if $A \subseteq \mathbb{R}$, if $f : A \to \mathbb{R}$, if
$c \in A$ is a limit point of $A$ ([[def-limit-point-r]]) and if the limit of $f$
at $c$ exists ([[def-function-limit]]), then

$$\lim_{x \to c} f(x) = f(c) .$$

Both sides of the asserted equation are defined under the stated hypotheses: the
left because the limit is assumed to exist and is single valued
([[lem-function-limit-unique]]), the right because $c \in A$. The claim is that
they always agree, and that is false.

**Why it is tempting.** The condition $|f(x) - L| < \varepsilon$ is imposed on
points $x$ arbitrarily close to $c$, and it feels as though $x = c$ were the
limiting case of that. It is not: [[def-function-limit]] quantifies over
$0 < |x - c| < \delta$, and the strict inequality on the left removes $x = c$
from the quantifier entirely. Changing the value of $f$ at the single point $c$
therefore changes nothing on the left-hand side and everything on the right.

**What is true.** The equation above is not a theorem but a *condition*, and it
is the condition the next page of this track takes as the definition of
continuity at $c$. This library states it as a hypothesis and never as a
consequence; hypothesis (i) of [[thm-composition-of-function-limits]] is exactly
this condition for the outer function.

## Facts & Assumptions

**Given:** The set $A := \mathbb{R}$, the point $c := 0$, and the function $f : \mathbb{R} \to \mathbb{R}$ defined by $f(x) := 0$ for $x \ne 0$ and $f(0) := 1$.

[L1] The limit condition: $\lim_{x \to c} h(x) = L$ means that for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x$ in the domain of $h$ with $0 < |x - c| < \delta$ satisfies $|h(x) - L| < \varepsilon$ ([[def-function-limit]]).

[L2] Limit point: $c$ is a limit point of $S$ when every punctured neighbourhood $N^{*}_{\varepsilon}(c)$ meets $S$; and punctured neighbourhoods in $\mathbb{R}$ are never empty ([[def-limit-point-r]], [[def-neighbourhood-r]]).

[L3] Absolute value: $|0| = 0$, and $|u| \ge 0$ ([[lem-of-abs-value]]).

[L4] Order in $\mathbb{R}$: trichotomy, so every real either equals $0$ or does not, and never both; and $0 < 1$, so $1 \ne 0$ ([[cor-of-one-positive]], [[def-ordered-field]]).

## Refutation

**Proof technique:** direct.

1.1 The point $c = 0$ lies in $A = \mathbb{R}$ and is a limit point of $\mathbb{R}$: for every real $\varepsilon > 0$ the punctured neighbourhood $N^{*}_{\varepsilon}(0)$ is nonempty and is contained in $\mathbb{R}$, so it meets $\mathbb{R}$. [L2]

1.2 $f$ is a well-defined function on $\mathbb{R}$, since by trichotomy every real either equals $0$ or does not, exclusively; and the reals $0$ and $1$ are distinct. [L4]

2.1 The limit of $f$ at $0$ exists and equals $0$: given an arbitrary real $\varepsilon > 0$, take $\delta := 1 > 0$; every $x \in \mathbb{R}$ with $0 < |x - 0| < 1$ has $|x| \ne 0$, hence $x \ne 0$, hence $f(x) = 0$ and $|f(x) - 0| = |0| = 0 < \varepsilon$. [step 1.1, step 1.2, L1, L3, L4]

3.1 Yet $f(0) = 1$, and $1 \ne 0 = \lim_{x \to 0} f(x)$. So at the point $c = 0$ of the domain, which is a limit point of the domain, the limit exists and differs from the value: the claim is false. [step 1.2, step 2.1, L4] ∎

## Remarks

- **The witness is the smallest possible one.** It differs from a constant function at exactly one point, and the limit cannot see that point. Any function agreeing with a constant off $c$ and taking a different value at $c$ would serve equally well; the companion page works this witness out in full, computes its one-sided limits, and shows that redefining the single value repairs the equality.

- **Where the false claim does hold.** Under the extra hypothesis that $\lim_{x \to c} f(x) = f(c)$ — which is what continuity at $c$ will mean — it holds trivially, and that is the only sense in which it is ever true. It is emphatically not a consequence of the limit existing.

- **The consequence for composition.** Because $f(c)$ is invisible to the limit, substituting an inner function that takes the value $c$ is not licensed by the limits alone; that is the content of [[fs-naive-composition-of-limits]], whose witness is built from this one.
````

### `lem-limit-is-local`

````markdown
---
id: lem-limit-is-local
kind: lemma
title: "The limit at $c$ depends only on the restriction of $f$ to a punctured neighbourhood of $c$, and passes to any subset of the domain having $c$ as a limit point"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-function-limit, def-neighbourhood-r, def-limit-point-r, lem-function-limit-unique, lem-of-abs-value, def-ordered-field]
justified_by: []
aliases: [lem-locality-of-function-limits]
landmark: false
short: "locality and restriction"
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
    - title: "J. Lebl, Basic Analysis I, §3.1: Limits of functions"
      url: "https://www.jirka.org/ra/html/sec_limoffunc.html"
    - title: "Limit of a function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_function"
    - title: "J. Lebl, Basic Analysis I, §3.1"
      url: "https://www.jirka.org/ra/"
    - title: "T. Tao, Analysis I, 3rd ed., §9.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$ and let $c$ be a limit point of $A$
([[def-limit-point-r]]).

1. **Locality.** Let $f, g : A \to \mathbb{R}$ and $L \in \mathbb{R}$, and
   suppose there is a real $\eta > 0$ with $f(x) = g(x)$ for every $x \in A$
   satisfying $0 < |x - c| < \eta$. Then
   $$\lim_{x \to c} f(x) = L \iff \lim_{x \to c} g(x) = L$$
   ([[def-function-limit]]).

2. **Restriction.** Let $B \subseteq A$ with $c$ a limit point of $B$, let
   $f : A \to \mathbb{R}$ and suppose $\lim_{x \to c} f(x) = L$. Then $c$ is a
   limit point of $A$ as well, and $\lim_{x \to c} f|_B(x) = L$, where
   $f|_B : B \to \mathbb{R}$ is the restriction of $f$.

So the limit at $c$ sees only the values of $f$ on an arbitrarily small
punctured neighbourhood of $c$, and it survives shrinking the domain, provided
the smaller domain still accumulates at $c$. Together with
[[lem-function-limit-unique]] this is what makes the phrase *the* limit at $c$ a
local notion.

**The converse of claim 2 is false in general**: a restriction may have a limit
where the function has none, as the one-sided limits of the sign function on the
companion page show.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$ and a limit point $c$ of $A$; for claim 1 functions $f, g : A \to \mathbb{R}$, a real $L$ and a real $\eta > 0$ with $f(x) = g(x)$ for every $x \in A$ satisfying $0 < |x - c| < \eta$; for claim 2 a subset $B \subseteq A$ having $c$ as a limit point, a function $f : A \to \mathbb{R}$ and a real $L$ with $\lim_{x \to c} f(x) = L$ ([[def-function-limit]], [[def-limit-point-r]]).

[L1] The limit condition: $\lim_{x \to c} h(x) = L$ means that for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x$ in the domain of $h$ with $0 < |x - c| < \delta$ satisfies $|h(x) - L| < \varepsilon$ ([[def-function-limit]]).

[L2] Limit point: $c$ is a limit point of a set $S$ when for every real $\delta > 0$ there is $x \in S$ with $0 < |x - c| < \delta$ ([[def-limit-point-r]], [[def-neighbourhood-r]]).

[L3] Order arithmetic: of two positive reals the smaller is positive, the order being total; and $u < v \le w$ gives $u < w$ ([[def-ordered-field]]).

[L4] Absolute value ([[lem-of-abs-value]]); and uniqueness of the limit at a limit point ([[lem-function-limit-unique]]), which is what makes the phrase "the limit" in the statement denote.

## Proof

**Proof technique:** direct.

1.1 For claim 1, assume $\lim_{x \to c} f(x) = L$ and let $\varepsilon > 0$ be an arbitrary real. [assume-hyp, L1]

1.2 For claim 2, $B \subseteq A$ and $c$ is a limit point of $B$; hence $c$ is a limit point of $A$, since for every real $\delta > 0$ a point $x \in B$ with $0 < |x - c| < \delta$ is also a point of $A$ with $0 < |x - c| < \delta$. [L2]

1.3 For claim 2, assume $\lim_{x \to c} f(x) = L$ and let $\varepsilon > 0$ be an arbitrary real. [assume-hyp, L1]

2.1 By [L1] fix a real $\delta_0 > 0$ such that every $x \in A$ with $0 < |x - c| < \delta_0$ satisfies $|f(x) - L| < \varepsilon$, and put $\delta$ to be the smaller of $\delta_0$ and $\eta$, so $\delta > 0$. [step 1.1, L1, L3, choose]

2.2 By [L1] fix a real $\delta > 0$ such that every $x \in A$ with $0 < |x - c| < \delta$ satisfies $|f(x) - L| < \varepsilon$. [step 1.3, L1, choose]

3.1 Every $x \in A$ with $0 < |x - c| < \delta$ satisfies both $0 < |x - c| < \delta_0$ and $0 < |x - c| < \eta$, so $g(x) = f(x)$ and $|g(x) - L| = |f(x) - L| < \varepsilon$; as $\varepsilon > 0$ was arbitrary, $\lim_{x \to c} g(x) = L$. [step 2.1, L1, L3, L4]

3.2 Every $x \in B$ with $0 < |x - c| < \delta$ lies in $A$ and satisfies $0 < |x - c| < \delta$, so $f|_B(x) = f(x)$ and therefore $|f(x) - L| < \varepsilon$; as $\varepsilon > 0$ was arbitrary, and $c$ is a limit point of $B$, $\lim_{x \to c} f|_B(x) = L$. [step 2.2, L1, L4]

4.1 The hypothesis of claim 1 is symmetric in $f$ and $g$, so interchanging their roles in steps 1.1, 2.1 and 3.1 gives the implication in the other direction, and claim 1 is proved; claim 2 is steps 1.2 and 3.2. [step 1.2, step 3.1, step 3.2] ∎

## Remarks

- **What claim 1 is used for.** It is the licence to modify a function outside a punctured neighbourhood of $c$, or at $c$ itself, without changing the limit; the change at $c$ alone is already invisible to [[def-function-limit]], since the condition $0 < |x - c|$ excludes that point.

- **What claim 2 is used for.** It is the step that lets a statement proved on $A$ be transported to a smaller domain: the one-sided limits of [[def-one-sided-limits]] are exactly limits of restrictions, and the quotient case of [[thm-algebra-of-function-limits]] is proved on the smaller domain where the denominator does not vanish.

- **Both claims are choice free.** Only the $\varepsilon$-$\delta$ definition is used; no sequence is constructed anywhere in the proof.
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

### `lem-sign-preservation-near-a-limit`

````markdown
---
id: lem-sign-preservation-near-a-limit
kind: lemma
title: "If $\\lim_{x \\to c} f(x) = L \\ne 0$ then $|f| > |L|/2$ on a punctured neighbourhood of $c$; in particular if $L > 0$ then $f > L/2 > 0$ there"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-function-limit, def-neighbourhood-r, def-limit-point-r, cor-of-reverse-triangle, lem-of-abs-value, lem-of-add-order, lem-of-sign-rules, lem-of-inverse-positive, cor-of-one-positive, def-ordered-field]
justified_by: []
aliases: [lem-sign-preservation-for-function-limits]
landmark: true
short: "sign preservation, $|f| > |L|/2$"
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
    - title: "J. Lebl, Basic Analysis I, §3.1: Limits of functions"
      url: "https://www.jirka.org/ra/html/sec_limoffunc.html"
    - title: "Limit of a function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_function"
    - title: "J. Lebl, Basic Analysis I, §3.1"
      url: "https://www.jirka.org/ra/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $c$ be a limit point of $A$
([[def-limit-point-r]]), let $f : A \to \mathbb{R}$ and suppose the limit of $f$
at $c$ exists with $\lim_{x \to c} f(x) = L$ and $L \ne 0$
([[def-function-limit]]). Then there is a real $\delta > 0$ such that every
$x \in A$ with $0 < |x - c| < \delta$ satisfies

$$|f(x)| \;>\; \frac{|L|}{2} \;>\; 0 ;$$

in particular $f(x) \ne 0$ for every such $x$. Moreover:

- if $L > 0$ then $f(x) > L/2 > 0$ for every such $x$;
- if $L < 0$ then $f(x) < L/2 < 0$ for every such $x$.

Consequently, writing

$$A_0 := \{\, x \in A \ : \ f(x) \ne 0 \,\},$$

the point $c$ is a limit point of $A_0$.

**The bound $|L|/2$, and not merely "$f \ne 0$", is what later proofs need.** The
quotient case of [[thm-algebra-of-function-limits]] estimates $1/|f|$ near $c$
and therefore needs a *positive lower* bound on $|f|$ there, and the last claim
is what lets a limit be taken on the smaller domain $A_0$ at all.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, a limit point $c$ of $A$, a function $f : A \to \mathbb{R}$ and a real $L \ne 0$ with $\lim_{x \to c} f(x) = L$; and $A_0 := \{\, x \in A : f(x) \ne 0 \,\}$ ([[def-function-limit]], [[def-limit-point-r]]).

[L1] The limit condition: for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x \in A$ with $0 < |x - c| < \delta$ satisfies $|f(x) - L| < \varepsilon$ ([[def-function-limit]]).

[L2] Absolute value: $|u| \ge 0$; $|u| = 0$ if and only if $u = 0$; $|u| = u$ for $u \ge 0$ and $|u| = -u$ for $u \le 0$; and for $t > 0$, $|u| < t$ is equivalent to $-t < u < t$ ([[lem-of-abs-value]]).

[L3] Reverse triangle inequality: $\bigl| |u| - |v| \bigr| \le |u - v|$ ([[cor-of-reverse-triangle]]).

[L4] Limit point: for every real $\rho > 0$ there is $x \in A$ with $0 < |x - c| < \rho$ ([[def-limit-point-r]], [[def-neighbourhood-r]]).

[L5] Order arithmetic in $\mathbb{R}$: trichotomy, so $u \ne 0$ with $|u| \ge 0$ and $|u| \ne 0$ forces $|u| > 0$; $0 < 1$ ([[cor-of-one-positive]]), hence $2 > 0$ and $2^{-1} > 0$ ([[lem-of-inverse-positive]]), so $t/2 > 0$ and $t - t/2 = t/2$ for $t > 0$ ([[lem-of-sign-rules]]); adding a constant to an inequality ([[lem-of-add-order]]); and of two positive reals the smaller is positive, the order being total ([[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Since $L \ne 0$ we have $|L| \ne 0$ while $|L| \ge 0$, so trichotomy gives $|L| > 0$, and $\varepsilon := |L|/2 > 0$ with $|L| - |L|/2 = |L|/2$. [given, L2, L5]

2.1 Apply [L1] with this $\varepsilon$: fix a real $\delta > 0$ such that every $x \in A$ with $0 < |x - c| < \delta$ satisfies $|f(x) - L| < |L|/2$. [step 1.1, L1, choose]

3.1 For every such $x$ the reverse triangle inequality gives $\bigl| |f(x)| - |L| \bigr| \le |f(x) - L| < |L|/2$, hence $|f(x)| - |L| > -|L|/2$ and so $|f(x)| > |L| - |L|/2 = |L|/2 > 0$; in particular $|f(x)| \ne 0$ and therefore $f(x) \ne 0$. [step 2.1, L2, L3, L5]

3.2 If $L > 0$ then $|L| = L$, and for every such $x$ the estimate $|f(x) - L| < L/2$ gives $-L/2 < f(x) - L$, that is $f(x) > L - L/2 = L/2 > 0$. [step 2.1, L2, L5]

3.3 If $L < 0$ then $|L| = -L$, and for every such $x$ the estimate $|f(x) - L| < -L/2$ gives $f(x) - L < -L/2$, that is $f(x) < L - L/2 = L/2 < 0$. [step 2.1, L2, L5]

4.1 Let $\eta > 0$ be an arbitrary real and let $\rho$ be the smaller of $\delta$ and $\eta$, so $\rho > 0$. Since $c$ is a limit point of $A$ there is $x \in A$ with $0 < |x - c| < \rho$; that $x$ satisfies $0 < |x - c| < \delta$, hence $f(x) \ne 0$ by step 3.1, so $x \in A_0$ and $0 < |x - c| < \eta$. As $\eta$ was arbitrary, $c$ is a limit point of $A_0$. [step 3.1, L4, L5]

5.1 So on $A \cap N^{*}_{\delta}(c)$ the function is bounded away from $0$ by $|L|/2$ and carries the sign of $L$, and $c$ remains a limit point of the set $A_0$ where $f$ does not vanish. [step 3.1, step 3.2, step 3.3, step 4.1] ∎

## Remarks

- **Why $|L|/2$ and not some other fraction.** Any $\varepsilon$ strictly between $0$ and $|L|$ gives a positive lower bound $|L| - \varepsilon$; the choice $\varepsilon = |L|/2$ makes the bound $|L|/2$, which is the form used downstream and needs only that $2$ is invertible and positive ([[cor-of-one-positive]], [[lem-of-inverse-positive]]).

- **The last claim is the one that is easy to forget.** Restricting a quotient to the set where the denominator does not vanish is useless unless $c$ is still a limit point of that set, since [[def-function-limit]] is stated only at a limit point. Step 4.1 is exactly that check, and it is what [[thm-algebra-of-function-limits]] cites when it forms $A_0$.

- **Nothing here says anything about $f(c)$.** As always the point $c$ itself is excluded by $0 < |x - c|$, so $f(c)$ may be $0$ even when $L \ne 0$; the function of [[fs-limit-equals-value]], read with the roles of $0$ and $1$ exchanged, is such an example.
````

### `thm-algebra-of-function-limits`

````markdown
---
id: thm-algebra-of-function-limits
kind: theorem
title: "Sums, scalar multiples, products and quotients of function limits, the quotient under the hypothesis that the denominator limit is nonzero"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-function-limit, lem-function-limit-unique, def-limit-point-r, def-neighbourhood-r, lem-limit-is-local, lem-limit-implies-local-boundedness, lem-sign-preservation-near-a-limit, lem-of-triangle-inequality, lem-of-abs-value, lem-of-add-order, lem-of-sign-rules, lem-of-inverse-positive, cor-of-one-positive, def-ordered-field, def-field]
justified_by: []
aliases: [thm-limit-laws-for-functions]
landmark: true
short: "algebra of function limits"
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
    - title: "J. Lebl, Basic Analysis I, §3.1: Limits of functions"
      url: "https://www.jirka.org/ra/html/sec_limoffunc.html"
    - title: "Limit of a function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Thm 4.4)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.1"
      url: "https://www.jirka.org/ra/"
    - title: "T. Tao, Analysis I, 3rd ed., §9.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $c$ be a limit point of $A$
([[def-limit-point-r]]), let $f, g : A \to \mathbb{R}$ and let $\alpha \in
\mathbb{R}$. Suppose the limits of $f$ and of $g$ at $c$ exist, and write
$L := \lim_{x \to c} f(x)$ and $M := \lim_{x \to c} g(x)$
([[def-function-limit]]). Then:

1. the limit of $f + g$ at $c$ exists, and
   $$\lim_{x \to c} (f + g)(x) \;=\; \lim_{x \to c} f(x) + \lim_{x \to c} g(x) \;=\; L + M ;$$
2. the limit of $\alpha f$ at $c$ exists, and
   $$\lim_{x \to c} (\alpha f)(x) \;=\; \alpha \lim_{x \to c} f(x) \;=\; \alpha L ;$$
3. the limit of $fg$ at $c$ exists, and
   $$\lim_{x \to c} (fg)(x) \;=\; \Bigl(\lim_{x \to c} f(x)\Bigr)\Bigl(\lim_{x \to c} g(x)\Bigr) \;=\; LM ;$$
4. if $M \ne 0$, then, writing $A_0 := \{\, x \in A : g(x) \ne 0 \,\}$, the point
   $c$ is a limit point of $A_0$, the quotient $f/g$ is defined on $A_0$ by
   $(f/g)(x) = f(x) / g(x)$, the limit of $(f/g)|_{A_0}$ at $c$ exists, and
   $$\lim_{x \to c} (f/g)|_{A_0}(x) \;=\; \frac{\lim_{x \to c} f(x)}{\lim_{x \to c} g(x)} \;=\; \frac{L}{M} .$$

Each equation asserts two things at once: that the limit on the left exists, and
that it has the stated value. Both are proved. The symbols denote by
[[lem-function-limit-unique]].

**Everything below is proved directly from $\varepsilon$ and $\delta$.** No
sequence is constructed and no choice principle is used, so all four claims are
theorems of ZF. Passing through
[[thm-sequential-criterion-for-function-limits]] instead would import the
countable choice spent in that theorem's converse direction, for no gain; see
[[rem-heine-criterion-choice-cost]].

**Why the quotient is stated on $A_0$.** The function $f/g$ is simply not defined
where $g$ vanishes, and $g$ may well vanish at points of $A$ arbitrarily far from
$c$; restricting to $A_0$ is therefore forced. That this restriction still has
$c$ as a limit point, so that the limit there means anything at all, is the last
claim of [[lem-sign-preservation-near-a-limit]]. The sequential analogue
[[thm-algebra-of-limits]] needs the corresponding hypothesis in the form "the
denominator sequence is nonzero at every index".

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, a limit point $c$ of $A$, functions $f, g : A \to \mathbb{R}$, a real $\alpha$, and reals $L, M$ with $\lim_{x \to c} f(x) = L$ and $\lim_{x \to c} g(x) = M$; for claim 4 also $M \ne 0$ and $A_0 := \{\, x \in A : g(x) \ne 0 \,\}$ ([[def-function-limit]], [[def-limit-point-r]]).

[L1] The limit condition: $\lim_{x \to c} h(x) = P$ means that for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x$ in the domain of $h$ with $0 < |x - c| < \delta$ satisfies $|h(x) - P| < \varepsilon$ ([[def-function-limit]]).

[L2] Absolute value: $|u| \ge 0$; $|u| = 0$ if and only if $u = 0$; $|uv| = |u|\,|v|$; and $|{-u}| = |u|$ ([[lem-of-abs-value]]).

[L3] Triangle inequality: $|u + v| \le |u| + |v|$ ([[lem-of-triangle-inequality]]).

[L4] Order and field arithmetic in $\mathbb{R}$: adding two strict inequalities ([[lem-of-add-order]]); for $t > 0$, $u < v$ is equivalent to $ut < vt$, and $0 \le u \le v$ with $0 \le s \le t$ gives $us \le vt$ ([[lem-of-sign-rules]]); positive elements have positive inverses and $0 < a < b$ gives $0 < 1/b < 1/a$ ([[lem-of-inverse-positive]]); $0 < 1$ ([[cor-of-one-positive]]), so $2 > 0$ and $t/2 > 0$ for $t > 0$; inverses and the field identities ([[def-field]]); trichotomy and totality, so of finitely many positive reals the smallest is positive ([[def-ordered-field]]).

[L5] Local boundedness: there are a real $\delta_0 > 0$ and a real $K \ge 0$ with $|f(x)| \le K$ for every $x \in A$ satisfying $0 < |x - c| < \delta_0$ ([[lem-limit-implies-local-boundedness]]).

[L6] Sign preservation: if $M \ne 0$ there is a real $\delta_s > 0$ with $|g(x)| > |M|/2 > 0$ for every $x \in A$ satisfying $0 < |x - c| < \delta_s$, and $c$ is a limit point of $A_0$ ([[lem-sign-preservation-near-a-limit]]).

[L7] Restriction: if $B \subseteq A$ has $c$ as a limit point and $\lim_{x \to c} f(x) = L$, then $\lim_{x \to c} f|_B(x) = L$ (claim 2 of [[lem-limit-is-local]]).

[L8] Neighbourhoods ([[def-neighbourhood-r]]).

## Proof

**Proof technique:** direct.

1.1 **Sum.** Let $\varepsilon > 0$ be an arbitrary real. By [L1] fix reals $\delta_1, \delta_2 > 0$ with $|f(x) - L| < \varepsilon/2$ for every $x \in A$ satisfying $0 < |x - c| < \delta_1$ and $|g(x) - M| < \varepsilon/2$ for every $x \in A$ satisfying $0 < |x - c| < \delta_2$, and let $\delta$ be the smaller of the two, so $\delta > 0$. For $x \in A$ with $0 < |x - c| < \delta$ we get $|(f+g)(x) - (L+M)| = |(f(x) - L) + (g(x) - M)| \le |f(x) - L| + |g(x) - M| < \varepsilon$. As $\varepsilon$ was arbitrary, the limit of $f + g$ at $c$ exists and equals $L + M$: claim 1. [L1, L2, L3, L4, choose]

1.2 **Scalar multiple.** If $\alpha = 0$ then $\alpha f$ is the constant function $0$ and $\alpha L = 0$, so $|(\alpha f)(x) - \alpha L| = 0 < \varepsilon$ for every $x$ and every $\varepsilon > 0$, any $\delta$ serving. If $\alpha \ne 0$ then $|\alpha| > 0$; given a real $\varepsilon > 0$, [L1] supplies $\delta > 0$ with $|f(x) - L| < \varepsilon/|\alpha|$ on $A \cap N^{*}_{\delta}(c)$, and there $|(\alpha f)(x) - \alpha L| = |\alpha|\,|f(x) - L| < \varepsilon$. So the limit of $\alpha f$ at $c$ exists and equals $\alpha L$: claim 2. [L1, L2, L4, L8, choose]

1.3 **A working bound for $f$ near $c$.** By [L5] fix a real $\delta_0 > 0$ and a real $K \ge 0$ with $|f(x)| \le K$ for every $x \in A$ satisfying $0 < |x - c| < \delta_0$, and put $K' := K + 1$, so $K' > 0$ and $|f(x)| \le K'$ for all those $x$. [L4, L5, choose]

1.4 **The denominator near $c$.** Assume $M \ne 0$. By [L6] fix a real $\delta_s > 0$ with $|g(x)| > |M|/2 > 0$ for every $x \in A$ satisfying $0 < |x - c| < \delta_s$; every such $x$ has $g(x) \ne 0$, hence lies in $A_0$, and $c$ is a limit point of $A_0$. [L2, L4, L6]

2.1 **Product.** Let $\varepsilon > 0$ be an arbitrary real. By [L1] fix reals $\delta_1, \delta_2 > 0$ with $|g(x) - M| < \varepsilon/(2K')$ on $A \cap N^{*}_{\delta_1}(c)$ and $|f(x) - L| < \varepsilon / \bigl(2(|M| + 1)\bigr)$ on $A \cap N^{*}_{\delta_2}(c)$, and let $\delta$ be the smallest of $\delta_0, \delta_1, \delta_2$, which is positive. For $x \in A$ with $0 < |x - c| < \delta$, $|f(x)g(x) - LM| = |f(x)(g(x) - M) + M(f(x) - L)| \le |f(x)|\,|g(x) - M| + |M|\,|f(x) - L| \le K'\,|g(x) - M| + (|M|+1)\,|f(x) - L| < \varepsilon/2 + \varepsilon/2 = \varepsilon$. As $\varepsilon$ was arbitrary, the limit of $fg$ at $c$ exists and equals $LM$: claim 3. [step 1.3, L1, L2, L3, L4, L8, choose]

2.2 **Reciprocal.** Assume $M \ne 0$ and let $\varepsilon > 0$ be an arbitrary real. By [L1] fix a real $\delta_3 > 0$ with $|g(x) - M| < \varepsilon |M|^2 / 2$ on $A \cap N^{*}_{\delta_3}(c)$, and let $\delta$ be the smaller of $\delta_s$ and $\delta_3$. For $x \in A_0$ with $0 < |x - c| < \delta$ we have $|g(x)| > |M|/2 > 0$, hence $|g(x)|\,|M| > |M|^2/2 > 0$ and so $1/(|g(x)|\,|M|) < 2/|M|^2$; therefore $\bigl| 1/g(x) - 1/M \bigr| = |M - g(x)| \big/ \bigl(|g(x)|\,|M|\bigr) < (\varepsilon |M|^2/2)\cdot(2/|M|^2) = \varepsilon$. As $\varepsilon$ was arbitrary, the limit of $(1/g)|_{A_0}$ at $c$ exists and equals $1/M$. [step 1.4, L1, L2, L4, L8, choose]

2.3 **The numerator on the smaller domain.** Assume $M \ne 0$. Since $A_0 \subseteq A$ and $c$ is a limit point of $A_0$ by step 1.4, [L7] gives that the limit of $f|_{A_0}$ at $c$ exists and equals $L$. [step 1.4, L7]

3.1 **Quotient.** Assume $M \ne 0$. On the domain $A_0$, which has $c$ as a limit point, the two functions $f|_{A_0}$ and $(1/g)|_{A_0}$ have limits $L$ and $1/M$ at $c$ by steps 2.3 and 2.2, and their product is $(f/g)|_{A_0}$ by the field identities; so claim 3, applied on the domain $A_0$, gives that the limit of $(f/g)|_{A_0}$ at $c$ exists and equals $L \cdot (1/M) = L/M$. [step 2.1, step 2.2, step 2.3, L2, L4]

4.1 Claims 1 to 4 are proved, each directly from the $\varepsilon$-$\delta$ definition and none of them through a sequence. [step 1.1, step 1.2, step 2.1, step 3.1] ∎

## Remarks

- **The product estimate in one line.** The identity $fg - LM = f\,(g - M) + M\,(f - L)$ turns the problem into two products, one with a factor that is merely bounded near $c$ (that is $f$, and [[lem-limit-implies-local-boundedness]] is what bounds it) and one with a constant factor. The two constants $K'$ and $|M| + 1$ are used in place of $K$ and $|M|$ only so that they are strictly positive and may be divided by; that is the sole reason for adding $1$.

- **The reciprocal estimate in one line.** The identity $1/g - 1/M = (M - g)/(gM)$ turns the problem into a numerator that is small and a denominator that must be kept away from $0$; the lower bound $|g| > |M|/2$ from [[lem-sign-preservation-near-a-limit]] does exactly that, and gives the working factor $2/|M|^2$.

- **Nothing here extends to $\pm\infty$.** The statement is about a finite limit point $c$ and finite values $L, M$; [[def-limits-at-infinity]] introduces limits at and to infinity, but no algebra of such limits is proved in this library, and none may be assumed. The companion page's limit at $+\infty$ is computed by a direct estimate for precisely that reason.

- **The sequential analogue** is [[thm-algebra-of-limits]]. Neither implies the other for free: this theorem is about a function on a subset of $\mathbb{R}$ and is proved from $\varepsilon$ and $\delta$; that one is about sequences.
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

