## Selection reasons

- critical risk (15): 13 declared dependencies; 14 cited facts; 10 numbered proof steps; boundary-sensitive language; induction, recursion, or minimality; quotient or equivalence-class construction; analytic limiting/completeness language

## Target item — `thm-algebra-of-continuous-functions`

Normalized current SHA-256: `7b4af238f4d29f7fec3516cf44d22240abe57f0a86531177334e6204b6cf9e10`

The complete current item follows, including frontmatter:

````markdown
---
id: thm-algebra-of-continuous-functions
kind: theorem
title: "Sums, scalar multiples, products, absolute values, maxima, minima and quotients with nonvanishing denominator of continuous functions are continuous, as are constants, the identity and every polynomial function"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-continuity-real, thm-algebra-of-function-limits, lem-sign-preservation-near-a-limit, def-function-limit, def-limit-point-r, def-neighbourhood-r, lem-of-abs-value, cor-of-reverse-triangle, def-max-min, lem-finite-set-has-max, def-integer-power, def-ordered-field, def-field]
justified_by: []
aliases: [thm-continuity-algebra]
forward_refs: [cex-dirichlet-is-nowhere-continuous]
landmark: true
short: "algebra of continuous functions"
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
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Thm 4.4, 4.9)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.2"
      url: "https://www.jirka.org/ra/"
    - title: "MIT 18.100B lecture notes"
      url: "https://math.mit.edu/classes/18.100/100B.S1-Lects.html"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $f, g : A \to \mathbb{R}$, let
$\alpha \in \mathbb{R}$ and let $c \in A$. Suppose $f$ and $g$ are continuous at
$c$ ([[def-continuity-real]]). Then:

1. $f + g$, $\alpha f$ and $fg$ are continuous at $c$;
2. $|f|$, the function $x \mapsto |f(x)|$, is continuous at $c$;
3. $\max\{f,g\}$ and $\min\{f,g\}$, defined pointwise by
   $x \mapsto \max\{f(x), g(x)\}$ and $x \mapsto \min\{f(x), g(x)\}$
   ([[def-max-min]]), are continuous at $c$;
4. if $g(c) \ne 0$ then, writing $A_0 := \{\, x \in A : g(x) \ne 0 \,\}$, the
   point $c$ lies in $A_0$ and the quotient
   $(f/g)|_{A_0} : A_0 \to \mathbb{R}$, $x \mapsto f(x)/g(x)$, is continuous at
   $c$ as a function on $A_0$.

Moreover, with no hypothesis at all:

5. every constant function $A \to \mathbb{R}$ and the identity
   $\mathrm{id} : A \to \mathbb{R}$, $x \mapsto x$, are continuous on $A$; hence
   so is $x \mapsto x^{n}$ for every $n \in \mathbb{N}$
   ([[def-integer-power]]), and hence so is every **polynomial function**
   $x \mapsto a_0 + a_1 x + \dots + a_n x^{n}$ with real coefficients.

Consequently, if $f$ and $g$ are continuous **on** $A$ then so are $f+g$,
$\alpha f$, $fg$, $|f|$, $\max\{f,g\}$ and $\min\{f,g\}$, and
$(f/g)|_{A_0}$ is continuous on $A_0$.

**Claim 4 is stated on $A_0$ because $f/g$ is not defined where $g$ vanishes**,
and $g$ may well vanish at points of $A$ far from $c$. The hypothesis is
$g(c) \ne 0$, not "$g$ nowhere zero"; what it buys is that $c$ itself lies in
the smaller domain, which is what makes continuity there mean anything.

**Nothing here is proved through a sequence.** Claims 1 and 4 are read off from
[[thm-algebra-of-function-limits]], which is itself proved from $\varepsilon$
and $\delta$, and claims 2, 3 and 5 are proved directly below. So no choice
principle is used anywhere in this item.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, functions $f, g : A \to \mathbb{R}$, a real $\alpha$, a point $c \in A$ at which $f$ and $g$ are continuous, and, for claim 4, the hypothesis $g(c) \ne 0$ together with $A_0 := \{\, x \in A : g(x) \ne 0 \,\}$.

[L1] Continuity at $c$: for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x \in A$ with $|x - c| < \delta$ satisfies $|f(x) - f(c)| < \varepsilon$ ([[def-continuity-real]]).

[L2] A point of $A$ is either a limit point of $A$ or an isolated point of $A$, and never both; at an isolated point of its domain every function is continuous; at a limit point $c$ of $A$, continuity of $f$ at $c$ is exactly the statement that the limit of $f$ at $c$ exists and equals $f(c)$ ([[def-continuity-real]], [[def-limit-point-r]], [[def-neighbourhood-r]], [[def-function-limit]]).

[L3] Algebra of function limits at a limit point $c$ of $A$: if the limits of $f$ and $g$ at $c$ exist with values $L$ and $M$, then the limits of $f+g$, $\alpha f$ and $fg$ at $c$ exist with values $L+M$, $\alpha L$ and $LM$; and if $M \ne 0$ then $c$ is a limit point of $A_0$, and the limit of $(f/g)|_{A_0}$ at $c$ exists and equals $L/M$ ([[thm-algebra-of-function-limits]]).

[L4] Sign preservation: if the limit of $g$ at a limit point $c$ of $A$ exists and is nonzero, then $c$ is a limit point of $A_0 = \{\, x \in A : g(x) \ne 0 \,\}$ ([[lem-sign-preservation-near-a-limit]]).

[L5] Reverse triangle inequality: $\bigl||u| - |v|\bigr| \le |u - v|$ ([[cor-of-reverse-triangle]]); and $|u| \ge 0$, $|u| = 0$ exactly when $u = 0$, $|uv| = |u||v|$ ([[lem-of-abs-value]]).

[L6] Maximum and minimum of a two-element set of reals exist ([[lem-finite-set-has-max]], [[def-max-min]]), and for all reals $u, v$ one has $\max\{u,v\} = \tfrac{1}{2}\bigl(u + v + |u-v|\bigr)$ and $\min\{u,v\} = \tfrac{1}{2}\bigl(u + v - |u-v|\bigr)$.

[L7] Ordered-field arithmetic in $\mathbb{R}$: trichotomy and totality of the order, the field identities, and $0 < 1$ so that $2 \ne 0$ and $t/2$ is defined ([[def-ordered-field]], [[def-field]]).

[L8] Integer powers: $a^{0} = 1$ and $a^{n+1} = a^{n} \cdot a$ ([[def-integer-power]]).

## Proof

**Proof technique:** direct.

1.1 **Justification of the identity in [L6].** Let $u, v \in \mathbb{R}$. By totality either $u \ge v$ or $v \ge u$. If $u \ge v$ then $u - v \ge 0$, so $|u-v| = u-v$ and $\tfrac{1}{2}(u+v+|u-v|) = \tfrac{1}{2}(2u) = u = \max\{u,v\}$, while $\tfrac{1}{2}(u+v-|u-v|) = v = \min\{u,v\}$. If $v \ge u$ the same computation with the roles exchanged applies, since $|u-v| = v-u$ there. [L5, L6, L7]

1.2 **The isolated case.** Suppose $c$ is an isolated point of $A$, say $N_{\eta}(c) \cap A = \{c\}$ with $\eta > 0$ real. Then every function on $A$ is continuous at $c$ by [L2], which gives claims 1, 2 and 3 at once. For claim 4, assume $g(c) \ne 0$; then $c \in A_0$, and $N_{\eta}(c) \cap A_0 \subseteq N_{\eta}(c) \cap A = \{c\}$ with $c$ in the left-hand side, so $c$ is an isolated point of $A_0$ and every function on $A_0$, in particular $(f/g)|_{A_0}$, is continuous at $c$. [L2]

1.3 **Claim 2, at any point of $A$.** Let a real $\varepsilon > 0$ be given and let $\delta > 0$ be as in [L1] for $f$ and this $\varepsilon$. For $x \in A$ with $|x - c| < \delta$ the reverse triangle inequality gives $\bigl||f(x)| - |f(c)|\bigr| \le |f(x) - f(c)| < \varepsilon$. So $|f|$ is continuous at $c$, and no case distinction was needed. [L1, L5]

1.4 **Claim 5, constants and the identity.** If $f$ is constant then $|f(x) - f(c)| = 0 < \varepsilon$ for every $x \in A$ and every real $\varepsilon > 0$, so any $\delta > 0$ serves. For the identity, given a real $\varepsilon > 0$ take $\delta := \varepsilon$: every $x \in A$ with $|x - c| < \delta$ has $|\mathrm{id}(x) - \mathrm{id}(c)| = |x - c| < \varepsilon$. Both are continuous at every point of $A$. [L1, L5, L7]

1.5 **The limit-point case, claim 1.** Suppose $c$ is a limit point of $A$. By [L2] the limits of $f$ and of $g$ at $c$ exist and equal $f(c)$ and $g(c)$. By [L3] the limits of $f+g$, $\alpha f$ and $fg$ at $c$ exist and equal $f(c)+g(c)$, $\alpha f(c)$ and $f(c)g(c)$, which are exactly the values of those three functions at $c$; by [L2] again, each of them is continuous at $c$. [L2, L3]

1.6 **The limit-point case, claim 4.** Suppose $c$ is a limit point of $A$ and $g(c) \ne 0$. Then $c \in A_0$, and by [L4] the point $c$ is a limit point of $A_0$. By [L3] the limit of $(f/g)|_{A_0}$ at $c$ exists and equals $f(c)/g(c)$, which is the value of $(f/g)|_{A_0}$ at $c$; by [L2] applied on the domain $A_0$, that function is continuous at $c$. [L2, L3, L4]

2.1 **Claims 1 and 4 in general.** By [L2] the point $c$ is either isolated in $A$ or a limit point of $A$; step 1.2 settles the first case and steps 1.5 and 1.6 the second. So claims 1 and 4 hold as stated. [step 1.2, step 1.5, step 1.6, L2]

3.1 **Claim 3.** By claim 1 the function $f - g = f + (-1)g$ is continuous at $c$, by step 1.3 so is $|f-g|$, and by claim 1 again so are $f + g + |f-g|$ and its scalar multiple by $1/2$. By step 1.1 that scalar multiple is the function $x \mapsto \max\{f(x), g(x)\}$, so the maximum is continuous at $c$; the same argument with $-|f-g|$ gives the minimum. [step 1.1, step 1.3, step 2.1, L6, L7]

3.2 **Claim 5, powers and polynomials.** The map $x \mapsto x^{0}$ is the constant $1$ and $x \mapsto x^{1}$ is the identity, both continuous on $A$ by step 1.4; and if $x \mapsto x^{n}$ is continuous on $A$ then so is $x \mapsto x^{n+1} = x^{n} \cdot x$, being a product of two functions continuous on $A$ by step 2.1. By induction on $n$, $x \mapsto x^{n}$ is continuous on $A$ for every $n \in \mathbb{N}$. A polynomial function $a_0 + a_1x + \dots + a_nx^{n}$ is obtained from these by finitely many scalar multiplications and additions, each of which preserves continuity by step 2.1. [step 1.4, step 2.1, L8]

4.1 Claims 1 to 5 are proved, all of them at an arbitrary point $c$ of $A$ and therefore, applied at every point, on the whole of $A$; and no sequence and no choice principle was used. [step 1.3, step 2.1, step 3.1, step 3.2] ∎

## Remarks

- **Why the two-case shape, and why it is not an inconvenience.** Continuity is defined at every point of the domain, including isolated points, where no limit exists ([[def-continuity-real]]). The algebra of limits therefore cannot be applied blindly; but at an isolated point every function is continuous, so the case is settled before it is opened. Claims 2 and 5 are proved directly from $\varepsilon$ and $\delta$ and need no case distinction at all.

- **Absolute value, maximum and minimum are not in [[thm-algebra-of-function-limits]]**, and the reason is that they are not needed there. They are needed here: the extreme value theorem and the one-dimensional fixed point theorem both build auxiliary functions out of maxima, minima and differences, and [[thm-compactness-is-necessary-for-evt-and-uniform-continuity]] builds its witnesses out of $|x - x_0|$ and quotients.

- **The converse of claim 2 is false**: $|f|$ may be continuous while $f$ is continuous nowhere. The function equal to $1$ on $\mathbb{Q}$ and to $-1$ elsewhere has constant absolute value; that it is nowhere continuous follows from the argument of [[cex-dirichlet-is-nowhere-continuous]] applied verbatim, since that argument uses only that the two values are distinct.
````

## Wave 8 provenance row for the target

```json
{
  "id": "thm-algebra-of-continuous-functions",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://math.mit.edu/classes/18.100/100B.S1-Lects.html"
  ],
  "rationale": "The MIT notes list sums, products, quotients, composites, and polynomial continuity as the standard continuity algebra. The local theorem bundles absolute value, max, and min and expands epsilon-delta proofs in its dependency vocabulary.",
  "alpha_concurred": false,
  "at": "2026-08-09",
  "ledger": "wave8-real-analysis-cantor-continuity.provenance.jsonl"
}
```

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "def-continuity-real",
      "source_section": "Definition",
      "quote": "In the language of neighbourhoods: for every real $\\varepsilon > 0$ there is a real $\\delta > 0$ with $$f\\bigl(A \\cap N_{\\delta}(c)\\bigr) \\;\\subseteq\\; N_{\\varepsilon}\\bigl(f(c)\\bigr).$$ $f$ is **continuous on $A$** when it is continuous at every point of $A$.",
      "uses": [
        "1.3",
        "1.4"
      ]
    },
    {
      "fact": "L2",
      "source": "def-continuity-real",
      "source_section": "Definition",
      "quote": "2. **At an isolated point.** Suppose $c \\in A$ is an isolated point of $A$ ([[def-limit-point-r]]), so that $N_{\\eta}(c) \\cap A = \\{c\\}$ for some real $\\eta > 0$. Then **every** $f : A \\to \\mathbb{R}$ is continuous at $c$: take $\\delta := \\eta$, so that the only $x \\in A$ with $|x - c| < \\delta$ is $c$ itself, and $|f(c) - f(c)| = 0 < \\varepsilon$.",
      "uses": [
        "1.2",
        "1.5",
        "1.6",
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-limit-point-r",
      "source_section": "Definition",
      "quote": "- $x$ is an **adherent point** of $A$ when $N_\\varepsilon(x) \\cap A \\ne \\varnothing$ for every real $\\varepsilon > 0$. - $x$ is a **limit point** (or *accumulation point*) of $A$ when $N^{*}_\\varepsilon(x) \\cap A \\ne \\varnothing$ for every real $\\varepsilon > 0$: every punctured neighbourhood of $x$ meets $A$. - $x$ is an **isolated point** of $A$ when $x \\in A$ and there is a real $\\varepsilon > 0$ with $N_\\varepsilon(x) \\cap A = \\{x\\}$. - The **derived set** of $A$ is $$A' \\;:=\\; \\{\\, x \\in \\mathbb{R} : x \\text{ is a limit point of } A \\,\\}.$$ - $A$ is **dense in $\\mathbb{R}$** when $\\overline{A} = \\mathbb{R}$.",
      "uses": [
        "1.2",
        "1.5",
        "1.6",
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-neighbourhood-r",
      "source_section": "Definition",
      "quote": "Let $x \\in \\mathbb{R}$ and let $\\varepsilon \\in \\mathbb{R}$ with $\\varepsilon > 0$. The **$\\varepsilon$-neighbourhood of $x$** is",
      "uses": [
        "1.2",
        "1.5",
        "1.6",
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-function-limit",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]]) with its order and absolute value ([[def-real-order]]). Let $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$, let $c \\in \\mathbb{R}$ be a **limit point** of $A$ ([[def-limit-point-r]]), and let $L \\in \\mathbb{R}$. We say that **$f(x)$ tends to $L$ as $x$ tends to $c$**, and write $$\\lim_{x \\to c} f(x) = L ,$$ when $$(\\forall \\varepsilon > 0)\\ (\\exists \\delta > 0)\\ (\\forall x \\in A)\\ \\bigl[\\ 0 < |x - c| < \\delta \\ \\Longrightarrow\\ |f(x) - L| < \\varepsilon\\ \\bigr],$$ where $\\varepsilon$ and $\\delta$ range over the **positive reals**. In the language of neighbourhoods ([[def-neighbourhood-r]]) the condition reads: for every real $\\varepsilon > 0$ there is a real $\\delta > 0$ with $$f\\bigl(A \\cap N^{*}_{\\delta}(c)\\bigr) \\;\\subseteq\\; N_{\\varepsilon}(L),$$ $N^{*}_{\\delta}(c) = \\{\\, y : 0 < |y - c| < \\delta \\,\\}$ being the punctured $\\delta$-neighbourhood of $c$ and $N_{\\varepsilon}(L) = (L - \\varepsilon,\\ L + \\varepsilon)$ the open interval of [[def-interval]]. The two forms agree because $|f(x) - L| < \\varepsilon$ says exactly $f(x) \\in N_\\varepsilon(L)$, and $0 < |x - c| < \\delta$ says exactly $x \\in N^{*}_\\delta(c)$. **Three features of this definition are load bearing, not decoration.** 1. **$c$ is required to be a limit point of $A$.** By [[def-limit-point-r]] that says every punctured neighbourhood of $c$ meets $A$, so for every $\\delta > 0$ the set $A \\cap N^{*}_\\delta(c)$ over which the implication quantifies is nonempty. Drop the requirement and the implication can be satisfied vacuously by *every* real $L$ at once, which is exactly what [[fs-limit-unique-at-every-point-of-the-domain]] records. At a point of $A$ that is not a limit point of $A$ — an isolated point — the symbol $\\lim_{x \\to c} f(x)$ is therefore **not defined** in this library. 2. **$c \\in A$ is not required.** A limit point of $A$ need not belong to $A$ ([[def-limit-point-r]]), and the definition never evaluates $f$ at $c$. This is what allows a limit to be taken at a point where the function is not defined at all, as at $0$ for $x \\mapsto x\\,\\psi(1/x)$. 3. **The value $f(c)$, when it exists, is irrelevant.** The hypothesis $0 < |x - c|$ excludes $x = c$ from the quantifier, so changing $f$ at the single point $c$ changes nothing. Equality of the limit with the value is an extra condition, not a consequence: [[fs-limit-equals-value]]. **The notation presumes uniqueness.** Writing $\\lim_{x \\to c} f(x) = L$ treats the left-hand side as a name for a single real number, which is legitimate only because at a limit point at most one $L$ can satisfy the displayed condition. That obligation is discharged by [[lem-function-limit-unique]], recorded in this item's `justified_by`. As with $\\sup S$ ([[rem-sup-conventions]]) and $\\lim_k x_k$ ([[lem-limit-unique]]), the symbol is written only for a function already known to have a limit at $c$. **Real and rational $\\varepsilon$ define the same relation.** Above, $\\varepsilon$ and $\\delta$ range over the positive reals. Restricting either quantifier to the positive rationals gives the same relation: every positive rational is a positive real, and below every positive real lies a positive rational ([[lem-rat-embeds-dense]]), so an $\\varepsilon$-condition verified for all positive rationals is verified for an arbitrary positive real $\\eta$ by running it at a rational $\\varepsilon$ with $0 < \\varepsilon < \\eta$, and a $\\delta$ produced as a real may be shrunk to a rational one below it. This is the passage sanctioned in the remarks of [[def-sequence]], and it is what lets this definition be compared with [[def-real-limit]], whose $\\varepsilon$ is rational, in [[thm-sequential-criterion-for-function-limits]].",
      "uses": [
        "1.2",
        "1.5",
        "1.6",
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-algebra-of-function-limits",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$, let $c$ be a limit point of $A$ ([[def-limit-point-r]]), let $f, g : A \\to \\mathbb{R}$ and let $\\alpha \\in \\mathbb{R}$. Suppose the limits of $f$ and of $g$ at $c$ exist, and write $L := \\lim_{x \\to c} f(x)$ and $M := \\lim_{x \\to c} g(x)$ ([[def-function-limit]]). Then: 1. the limit of $f + g$ at $c$ exists, and $$\\lim_{x \\to c} (f + g)(x) \\;=\\; \\lim_{x \\to c} f(x) + \\lim_{x \\to c} g(x) \\;=\\; L + M ;$$ 2. the limit of $\\alpha f$ at $c$ exists, and $$\\lim_{x \\to c} (\\alpha f)(x) \\;=\\; \\alpha \\lim_{x \\to c} f(x) \\;=\\; \\alpha L ;$$ 3. the limit of $fg$ at $c$ exists, and $$\\lim_{x \\to c} (fg)(x) \\;=\\; \\Bigl(\\lim_{x \\to c} f(x)\\Bigr)\\Bigl(\\lim_{x \\to c} g(x)\\Bigr) \\;=\\; LM ;$$ 4. if $M \\ne 0$, then, writing $A_0 := \\{\\, x \\in A : g(x) \\ne 0 \\,\\}$, the point $c$ is a limit point of $A_0$, the quotient $f/g$ is defined on $A_0$ by $(f/g)(x) = f(x) / g(x)$, the limit of $(f/g)|_{A_0}$ at $c$ exists, and $$\\lim_{x \\to c} (f/g)|_{A_0}(x) \\;=\\; \\frac{\\lim_{x \\to c} f(x)}{\\lim_{x \\to c} g(x)} \\;=\\; \\frac{L}{M} .$$ Each equation asserts two things at once: that the limit on the left exists, and that it has the stated value. Both are proved. The symbols denote by [[lem-function-limit-unique]]. **Everything below is proved directly from $\\varepsilon$ and $\\delta$.** No sequence is constructed and no choice principle is used, so all four claims are theorems of ZF. Passing through [[thm-sequential-criterion-for-function-limits]] instead would import the countable choice spent in that theorem's converse direction, for no gain; see [[rem-heine-criterion-choice-cost]]. **Why the quotient is stated on $A_0$.** The function $f/g$ is simply not defined where $g$ vanishes, and $g$ may well vanish at points of $A$ arbitrarily far from $c$; restricting to $A_0$ is therefore forced. That this restriction still has $c$ as a limit point, so that the limit there means anything at all, is the last claim of [[lem-sign-preservation-near-a-limit]]. The sequential analogue [[thm-algebra-of-limits]] needs the corresponding hypothesis in the form \"the denominator sequence is nonzero at every index\".",
      "uses": [
        "1.5",
        "1.6"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-sign-preservation-near-a-limit",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$, let $c$ be a limit point of $A$ ([[def-limit-point-r]]), let $f : A \\to \\mathbb{R}$ and suppose the limit of $f$ at $c$ exists with $\\lim_{x \\to c} f(x) = L$ and $L \\ne 0$ ([[def-function-limit]]). Then there is a real $\\delta > 0$ such that every $x \\in A$ with $0 < |x - c| < \\delta$ satisfies $$|f(x)| \\;>\\; \\frac{|L|}{2} \\;>\\; 0 ;$$ in particular $f(x) \\ne 0$ for every such $x$. Moreover: - if $L > 0$ then $f(x) > L/2 > 0$ for every such $x$; - if $L < 0$ then $f(x) < L/2 < 0$ for every such $x$. Consequently, writing $$A_0 := \\{\\, x \\in A \\ : \\ f(x) \\ne 0 \\,\\},$$ the point $c$ is a limit point of $A_0$. **The bound $|L|/2$, and not merely \"$f \\ne 0$\", is what later proofs need.** The quotient case of [[thm-algebra-of-function-limits]] estimates $1/|f|$ near $c$ and therefore needs a *positive lower* bound on $|f|$ there, and the last claim is what lets a limit be taken on the smaller domain $A_0$ at all.",
      "uses": [
        "1.6"
      ]
    },
    {
      "fact": "L5",
      "source": "cor-of-reverse-triangle",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \\in F$. Then $$\\bigl| |x| - |y| \\bigr| \\le |x - y|.$$",
      "uses": [
        "1.1",
        "1.3",
        "1.4"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-of-abs-value",
      "source_section": "Statement",
      "quote": "$|x|$ the absolute value ([[def-abs-value]]). Then",
      "uses": [
        "1.1",
        "1.3",
        "1.4"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-finite-set-has-max",
      "source_section": "Statement",
      "quote": "For every $n \\in \\mathbb{N}$ and all $a_0, a_1, \\dots, a_n \\in \\mathbb{R}$, the set $\\{a_0, a_1, \\dots, a_n\\}$ has a maximum and a minimum ([[def-max-min]]).",
      "uses": [
        "1.1",
        "3.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-max-min",
      "source_section": "Definition",
      "quote": "- $m$ is a **maximum** (or *greatest element*) of $S$ if $m \\in S$ and $s \\le m$ for every $s \\in S$. - $m$ is a **minimum** (or *least element*) of $S$ if $m \\in S$ and $m \\le s$ for every $s \\in S$.",
      "uses": [
        "1.1",
        "3.1"
      ]
    },
    {
      "fact": "L7",
      "source": "def-ordered-field",
      "source_section": "Definition",
      "quote": "ordered field",
      "uses": [
        "1.1",
        "1.4",
        "3.1"
      ]
    },
    {
      "fact": "L7",
      "source": "def-field",
      "source_section": "Definition",
      "quote": "A **field** is a set $F$ equipped with two binary operations $+$ (addition) and $\\cdot$ (multiplication) and two distinguished elements $0 \\ne 1$ of $F$, satisfying:",
      "uses": [
        "1.1",
        "1.4",
        "3.1"
      ]
    },
    {
      "fact": "L8",
      "source": "def-integer-power",
      "source_section": "Definition",
      "quote": "**Integer exponents.** Every integer $m$ ([[def-integers]]) is either",
      "uses": [
        "3.2"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "**Justification of the identity in [L6].** Let $u, v \\in \\mathbb{R}$. By totality either $u \\ge v$ or $v \\ge u$. If $u \\ge v$ then $u - v \\ge 0$, so $|u-v| = u-v$ and $\\tfrac{1}{2}(u+v+|u-v|) = \\tfrac{1}{2}(2u) = u = \\max\\{u,v\\}$, while $\\tfrac{1}{2}(u+v-|u-v|",
      "step": "1.1",
      "inputs": [
        "L6",
        "L5",
        "L7"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "**The isolated case.** Suppose $c$ is an isolated point of $A$, say $N_{\\eta}(c) \\cap A = \\{c\\}$ with $\\eta > 0$ real. Then every function on $A$ is continuous at $c$ by [L2], which gives claims 1, 2 and 3 at once. For claim 4, assume $g(c) \\ne 0$; then $c \\in",
      "step": "1.2",
      "inputs": [
        "L2"
      ]
    },
    {
      "id": "step-1-3",
      "claim": "**Claim 2, at any point of $A$.** Let a real $\\varepsilon > 0$ be given and let $\\delta > 0$ be as in [L1] for $f$ and this $\\varepsilon$. For $x \\in A$ with $|x - c| < \\delta$ the reverse triangle inequality gives $\\bigl||f(x)| - |f(c)|\\bigr| \\le |f(x) - f(c)",
      "step": "1.3",
      "inputs": [
        "L1",
        "L5"
      ]
    },
    {
      "id": "step-1-4",
      "claim": "**Claim 5, constants and the identity.** If $f$ is constant then $|f(x) - f(c)| = 0 < \\varepsilon$ for every $x \\in A$ and every real $\\varepsilon > 0$, so any $\\delta > 0$ serves. For the identity, given a real $\\varepsilon > 0$ take $\\delta := \\varepsilon$: ",
      "step": "1.4",
      "inputs": [
        "L1",
        "L5",
        "L7"
      ]
    },
    {
      "id": "step-1-5",
      "claim": "**The limit-point case, claim 1.** Suppose $c$ is a limit point of $A$. By [L2] the limits of $f$ and of $g$ at $c$ exist and equal $f(c)$ and $g(c)$. By [L3] the limits of $f+g$, $\\alpha f$ and $fg$ at $c$ exist and equal $f(c)+g(c)$, $\\alpha f(c)$ and $f(c)g",
      "step": "1.5",
      "inputs": [
        "L2",
        "L3"
      ]
    },
    {
      "id": "step-1-6",
      "claim": "**The limit-point case, claim 4.** Suppose $c$ is a limit point of $A$ and $g(c) \\ne 0$. Then $c \\in A_0$, and by [L4] the point $c$ is a limit point of $A_0$. By [L3] the limit of $(f/g)|_{A_0}$ at $c$ exists and equals $f(c)/g(c)$, which is the value of $(f/",
      "step": "1.6",
      "inputs": [
        "L4",
        "L3",
        "L2"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "**Claims 1 and 4 in general.** By [L2] the point $c$ is either isolated in $A$ or a limit point of $A$; step 1.2 settles the first case and steps 1.5 and 1.6 the second. So claims 1 and 4 hold as stated.",
      "step": "2.1",
      "inputs": [
        "L2",
        "1.2",
        "1.5",
        "1.6"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "**Claim 3.** By claim 1 the function $f - g = f + (-1)g$ is continuous at $c$, by step 1.3 so is $|f-g|$, and by claim 1 again so are $f + g + |f-g|$ and its scalar multiple by $1/2$. By step 1.1 that scalar multiple is the function $x \\mapsto \\max\\{f(x), g(x)",
      "step": "3.1",
      "inputs": [
        "1.3",
        "1.1",
        "2.1",
        "L6",
        "L7"
      ]
    },
    {
      "id": "step-3-2",
      "claim": "**Claim 5, powers and polynomials.** The map $x \\mapsto x^{0}$ is the constant $1$ and $x \\mapsto x^{1}$ is the identity, both continuous on $A$ by step 1.4; and if $x \\mapsto x^{n}$ is continuous on $A$ then so is $x \\mapsto x^{n+1} = x^{n} \\cdot x$, being a ",
      "step": "3.2",
      "inputs": [
        "1.4",
        "2.1",
        "L8"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "Claims 1 to 5 are proved, all of them at an arbitrary point $c$ of $A$ and therefore, applied at every point, on the whole of $A$; and no sequence and no choice principle was used.",
      "step": "4.1",
      "inputs": [
        "1.3",
        "2.1",
        "3.1",
        "3.2"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "Every clause is pointwise on A; if A=∅ the final universal continuity statements are vacuous, and step 4.1 assembles them without selecting a point."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Steps 1.1–1.6 permit zero values and zero scalar; step 3.2 treats the n=0 constant power in the polynomial induction."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Step 3.2 includes the identity/power-one case and the one-term polynomial base."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "The pointwise estimates remain valid when f(c)=g(c), and step 2.1 handles max/min equality through the absolute-value formulas."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "The Statement concerns an arbitrary subset A, not an interval with endpoint conventions."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Steps 1.1–1.6 fix only finitely many local radii after continuity supplies them; no family-indexed choice is used."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The Statement of `thm-algebra-of-continuous-functions` is not an equivalence, so it has no forward iff direction."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The Statement of `thm-algebra-of-continuous-functions` is not an equivalence, so it has no reverse iff direction."
    }
  ],
  "finite_smoke": [],
  "risk_review": {
    "status": "pending",
    "reviewer": "Alpha",
    "notes": "Audit-Beta captured this A2 contract by reading the item and each cited target from disk. Independent risk review occurs after A3/A4."
  }
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "thm-algebra-of-continuous-functions",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-continuity-real",
    "declared_target": "def-continuity-real",
    "target_statement_provenance": "ai-altered",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-algebra-of-continuous-functions",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "thm-algebra-of-function-limits",
    "declared_target": "thm-algebra-of-function-limits",
    "target_statement_provenance": "literature-derived",
    "targetPage": "limits-of-real-functions",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-algebra-of-continuous-functions",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "lem-sign-preservation-near-a-limit",
    "declared_target": "lem-sign-preservation-near-a-limit",
    "target_statement_provenance": "ai-altered",
    "targetPage": "limits-of-real-functions",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-algebra-of-continuous-functions",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-function-limit",
    "declared_target": "def-function-limit",
    "target_statement_provenance": "literature-derived",
    "targetPage": "limits-of-real-functions",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-algebra-of-continuous-functions",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "thm-algebra-of-continuous-functions",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "thm-algebra-of-continuous-functions",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "thm-algebra-of-continuous-functions",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "cor-of-reverse-triangle",
    "declared_target": "cor-of-reverse-triangle",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-algebra-of-continuous-functions",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-max-min",
    "declared_target": "def-max-min",
    "target_statement_provenance": "ai-altered",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-algebra-of-continuous-functions",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "lem-finite-set-has-max",
    "declared_target": "lem-finite-set-has-max",
    "target_statement_provenance": "ai-altered",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-algebra-of-continuous-functions",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "thm-algebra-of-continuous-functions",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "thm-algebra-of-continuous-functions",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "thm-algebra-of-continuous-functions",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "cex-dirichlet-is-nowhere-continuous",
    "declared_target": "cex-dirichlet-is-nowhere-continuous",
    "target_statement_provenance": "literature-derived",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "forward_ref",
    "kind": "forward",
    "requires_semantic_audit": true
  }
]
```

## Relevant pending generated-risk rows

```json
[]
```

## Full text of every cited or declared item (15)

### `cex-dirichlet-is-nowhere-continuous`

````markdown
---
id: cex-dirichlet-is-nowhere-continuous
kind: counterexample
title: "The indicator of $\\mathbb{Q}$ is continuous at no point of $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-continuity-real, lem-q-and-irrationals-dense-r, thm-closure-characterisations-r, def-limit-point-r, def-interior-closure-boundary-r, def-neighbourhood-r, def-open-and-closed-in-r, lem-rat-embeds-dense, lem-of-abs-value, def-ordered-field]
justified_by: []
aliases: [cex-dirichlet-function]
landmark: true
short: "Dirichlet function is nowhere continuous"
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
    - title: "Dirichlet function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dirichlet_function"
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "E. Zakon, Mathematical Analysis, §4.1: Basic Definitions"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/04%3A_Function_Limits_and_Continuity/4.01%3A_Basic_Definitions"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** every function $\mathbb{R} \to \mathbb{R}$ is continuous at
at least one point ([[def-continuity-real]]).

The witness is the **Dirichlet function**, the indicator of the rationals:
writing $\mathbb{Q}$ for the canonical copy of the rationals inside $\mathbb{R}$
([[lem-rat-embeds-dense]]),

$$\mathbf{1}_{\mathbb{Q}} : \mathbb{R} \to \mathbb{R}, \qquad \mathbf{1}_{\mathbb{Q}}(x) := \begin{cases} 1 & \text{if } x \in \mathbb{Q},\\ 0 & \text{if } x \notin \mathbb{Q}. \end{cases}$$

It is continuous at **no** point of $\mathbb{R}$. The mechanism is that both
$\mathbb{Q}$ and its complement are dense ([[lem-q-and-irrationals-dense-r]]),
so every neighbourhood of every real contains a point of each, and the two
values differ by $1$.

**The argument is choice free.** Density is used in the form "every
neighbourhood of every point meets the set", which is
[[thm-closure-characterisations-r]] applied to a closure equal to $\mathbb{R}$;
no sequence is built, so neither
[[lem-sequential-characterisation-of-closure-r]] nor
[[thm-sequential-criterion-for-continuity]] is invoked, and the countable choice
those two spend is not spent here.

## Facts & Assumptions

**Given:** The canonical copy $\mathbb{Q} \subseteq \mathbb{R}$ of the rationals, its complement $X := \mathbb{R} \setminus \mathbb{Q}$, and the function $\mathbf{1}_{\mathbb{Q}} : \mathbb{R} \to \mathbb{R}$ taking the value $1$ on $\mathbb{Q}$ and $0$ on $X$.

[L1] Continuity at $c$: for every real $\varepsilon > 0$ there is a real $\delta > 0$ with $|\mathbf{1}_{\mathbb{Q}}(x) - \mathbf{1}_{\mathbb{Q}}(c)| < \varepsilon$ for every real $x$ with $|x - c| < \delta$. So continuity at $c$ fails as soon as some real $\varepsilon_0 > 0$ admits, for every real $\delta > 0$, a real $x$ with $|x - c| < \delta$ and $|\mathbf{1}_{\mathbb{Q}}(x) - \mathbf{1}_{\mathbb{Q}}(c)| \ge \varepsilon_0$ ([[def-continuity-real]], [[def-neighbourhood-r]]).

[L2] Both $\mathbb{Q}$ and $X$ are dense in $\mathbb{R}$, that is, each has closure $\mathbb{R}$ ([[lem-q-and-irrationals-dense-r]], [[def-limit-point-r]], [[lem-rat-embeds-dense]]).

[L3] A point lies in the closure of $S$ exactly when every neighbourhood $N_{\delta}$ of it meets $S$; so a set with closure $\mathbb{R}$ meets every $N_{\delta}(c)$, for every real $c$ and every real $\delta > 0$ ([[thm-closure-characterisations-r]], [[def-interior-closure-boundary-r]], [[def-open-and-closed-in-r]], [[def-neighbourhood-r]]).

[L4] $\mathbf{1}_{\mathbb{Q}}$ is a well-defined function: $X$ is by definition the complement $\mathbb{R} \setminus \mathbb{Q}$, so every real either lies in $\mathbb{Q}$ or does not, exclusively; and $|1 - 0| = |0 - 1| = 1$, with $1/2 > 0$ and $1/2 < 1$ ([[lem-of-abs-value]], [[def-ordered-field]]).

## Counterexample

**Proof technique:** direct.

1.1 $\mathbf{1}_{\mathbb{Q}}$ is a well-defined function on $\mathbb{R}$ taking only the values $0$ and $1$, and $\mathbb{R}$ is the disjoint union of $\mathbb{Q}$ and $X$. [L4]

1.2 Let $c \in \mathbb{R}$ be arbitrary, put $\varepsilon_0 := 1/2 > 0$, and let a real $\delta > 0$ be given. [L4]

2.1 By [L2] and [L3] the neighbourhood $N_{\delta}(c)$ meets $\mathbb{Q}$ and it meets $X$: there are reals $p \in N_{\delta}(c) \cap \mathbb{Q}$ and $z \in N_{\delta}(c) \cap X$, so $|p - c| < \delta$ and $|z - c| < \delta$, with $\mathbf{1}_{\mathbb{Q}}(p) = 1$ and $\mathbf{1}_{\mathbb{Q}}(z) = 0$. [step 1.2, L2, L3, choose]

3.1 If $c \in \mathbb{Q}$ then $\mathbf{1}_{\mathbb{Q}}(c) = 1$ and the point $x := z$ satisfies $|x - c| < \delta$ and $|\mathbf{1}_{\mathbb{Q}}(x) - \mathbf{1}_{\mathbb{Q}}(c)| = |0 - 1| = 1 \ge \varepsilon_0$. If $c \notin \mathbb{Q}$ then $\mathbf{1}_{\mathbb{Q}}(c) = 0$ and the point $x := p$ satisfies $|x - c| < \delta$ and $|\mathbf{1}_{\mathbb{Q}}(x) - \mathbf{1}_{\mathbb{Q}}(c)| = |1 - 0| = 1 \ge \varepsilon_0$. By [L4] these two possibilities are exhaustive and exclusive. [step 1.1, step 2.1, L4]

4.1 So for the fixed $\varepsilon_0 = 1/2$ no real $\delta > 0$ serves at $c$, and by [L1] the function $\mathbf{1}_{\mathbb{Q}}$ is not continuous at $c$. As $c$ was an arbitrary real, it is continuous at no point of $\mathbb{R}$, and the refuted claim is false. [step 1.2, step 3.1, L1] ∎

## Remarks

- **Why $\varepsilon_0 = 1/2$ and not $1$.** Any $\varepsilon_0 \le 1$ works, since the discrepancy produced is exactly $1$. Taking $1/2$ leaves the inequality strict and makes it visible that the failure is not a boundary effect.

- **Restricting the domain repairs it completely.** The restriction of $\mathbf{1}_{\mathbb{Q}}$ to $\mathbb{Q}$ is constantly $1$ and the restriction to the irrationals is constantly $0$; both are continuous. This is the standard warning that continuity is a property of the pair (function, domain), recorded in [[def-continuity-real]]: continuity passes to subsets of the domain, never up from them.

- **A near miss worth naming.** Multiplying by $x$ repairs continuity at exactly one point: $x \mapsto x\,\mathbf{1}_{\mathbb{Q}}(x)$ is continuous at $0$ and nowhere else, which is [[ex-x-times-dirichlet-is-continuous-exactly-at-zero]]. The same argument as above, applied to any function taking two distinct values densely, shows nowhere-continuity; in particular the function equal to $1$ on $\mathbb{Q}$ and $-1$ elsewhere is nowhere continuous while its absolute value is constant.
````

### `cor-of-reverse-triangle`

````markdown
---
id: cor-of-reverse-triangle
kind: corollary
title: "The reverse triangle inequality"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-of-triangle-inequality, lem-of-abs-value, def-ordered-field]
aliases: []
landmark: false
short: "Reverse triangle ineq."
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
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Purdue University analysis notes: Ordered fields and absolute value"
      url: "https://www.math.purdue.edu/~gcavigli/Swanson.pdf"
pipeline_run: null
---

## Statement

Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \in F$. Then

$$\bigl| |x| - |y| \bigr| \le |x - y|.$$

## Facts & Assumptions

**Given:** An ordered field $F$ and elements $x, y \in F$.

[L1] Triangle inequality: $|a + b| \le |a| + |b|$ for all $a, b \in F$ ([[lem-of-triangle-inequality]]).

[L2] For every $u \in F$, $|-u| = |u|$, and $|w|$ equals $w$ or $-w$ ([[lem-of-abs-value]]).

## Proof

**Proof technique:** direct.

1.1 Applying [L1] with $a = x - y$ and $b = y$ gives $|x| = |(x - y) + y| \le |x - y| + |y|$, so $|x| - |y| \le |x - y|$. [L1]

1.2 Applying [L1] with $a = y - x$ and $b = x$, and using $|y - x| = |x - y|$ from [L2], gives $|y| \le |y - x| + |x| = |x - y| + |x|$, so $|y| - |x| \le |x - y|$. [L1, L2]

2.1 By [L2] the value $\bigl| |x| - |y| \bigr|$ equals $|x| - |y|$ or $-(|x| - |y|) = |y| - |x|$, and each of these is $\le |x - y|$ by steps 1.1 and 1.2, so $\bigl| |x| - |y| \bigr| \le |x - y|$. [step 1.1, step 1.2, L2, algebra] ∎
````

### `def-continuity-real`

````markdown
---
id: def-continuity-real
kind: definition
title: "Continuity of $f : A \\to \\mathbb{R}$ at a point of $A$ and on $A$: the $\\varepsilon$-$\\delta$ condition, its agreement with $\\lim_{x \\to c} f(x) = f(c)$ at a limit point, and continuity at an isolated point"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-function-limit, def-limit-point-r, def-neighbourhood-r, def-open-and-closed-in-r, def-interval, lem-of-abs-value, def-complete-ordered-field]
justified_by: []
aliases: [def-continuity-at-a-point-r]
forward_refs: [cex-dirichlet-is-nowhere-continuous]
landmark: true
short: "continuity of a real function"
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
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.2"
      url: "https://www.jirka.org/ra/"
    - title: "E. Zakon, Mathematical Analysis, §4.1: Basic Definitions"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/04%3A_Function_Limits_and_Continuity/4.01%3A_Basic_Definitions"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field with its order and
absolute value ([[def-complete-ordered-field]], [[lem-of-abs-value]]), and
neighbourhoods are those of [[def-neighbourhood-r]].

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ and let $c \in A$. Then
$f$ is **continuous at $c$** when

$$(\forall \varepsilon > 0)\ (\exists \delta > 0)\ (\forall x \in A)\ \bigl[\ |x - c| < \delta \ \Longrightarrow\ |f(x) - f(c)| < \varepsilon\ \bigr],$$

with $\varepsilon$ and $\delta$ ranging over the **positive reals**. In the
language of neighbourhoods: for every real $\varepsilon > 0$ there is a real
$\delta > 0$ with

$$f\bigl(A \cap N_{\delta}(c)\bigr) \;\subseteq\; N_{\varepsilon}\bigl(f(c)\bigr).$$

$f$ is **continuous on $A$** when it is continuous at every point of $A$.

**The point $c$ is required to lie in $A$, and the condition is unpunctured.**
Both differ from [[def-function-limit]], and deliberately. There the quantifier
runs over $0 < |x - c| < \delta$, which removes $x = c$; here $x = c$ is allowed,
and at $x = c$ the implication reads $|f(c) - f(c)| = 0 < \varepsilon$, which is
automatic. So allowing $x = c$ costs nothing, and it is what lets the definition
be stated at every point of $A$, including the points where no limit exists.

**Three clauses, and all three are part of the definition.**

1. **At a limit point.** Suppose $c \in A$ is a limit point of $A$
   ([[def-limit-point-r]]). Then $f$ is continuous at $c$ if and only if the
   limit of $f$ at $c$ exists and
   $$\lim_{x \to c} f(x) \;=\; f(c)$$
   ([[def-function-limit]]). Indeed, for a given $\varepsilon > 0$ a $\delta$
   witnessing continuity witnesses the limit condition, because the limit
   condition quantifies over a subset of the points continuity quantifies over;
   and conversely a $\delta$ witnessing $\lim_{x \to c} f(x) = f(c)$ witnesses
   continuity, because the one point it omits, $x = c$, satisfies
   $|f(c) - f(c)| < \varepsilon$ anyway.

2. **At an isolated point.** Suppose $c \in A$ is an isolated point of $A$
   ([[def-limit-point-r]]), so that $N_{\eta}(c) \cap A = \{c\}$ for some real
   $\eta > 0$. Then **every** $f : A \to \mathbb{R}$ is continuous at $c$: take
   $\delta := \eta$, so that the only $x \in A$ with $|x - c| < \delta$ is $c$
   itself, and $|f(c) - f(c)| = 0 < \varepsilon$.

3. **On a set.** Continuity on $A$ is continuity at each point of $A$, and
   nothing more. It is not a condition relating $f$ to points outside $A$.

Every point of $A$ is either a limit point of $A$ or an isolated point of $A$,
and never both ([[def-limit-point-r]]), so clauses 1 and 2 between them describe
continuity at every point of $A$.

**This is not the raw $\varepsilon$-$\delta$ formula of
[[fs-limit-unique-at-every-point-of-the-domain]].** That item records what goes
wrong when the *punctured* formula of [[def-function-limit]] is written down at
an arbitrary point of the domain: at an isolated point it is satisfied
vacuously by every real $L$ at once, so it defines nothing, and this library
therefore leaves $\lim_{x \to c} f(x)$ **undefined** at an isolated point.
Continuity at an isolated point is a different matter: the formula above is not
vacuous — it is a genuine condition on $f(c)$, satisfied because $f(c)$ is the
only value being compared with itself — and it names a single, well-defined
property. The limit is undefined there; the continuity is defined, and is
automatic. Clause 1 is the only place where the two notions meet, and it is
stated only where the limit exists as a notion.

**Where the distinction disappears.** If $A$ is an open subset of $\mathbb{R}$
([[def-open-and-closed-in-r]]), then every $c \in A$ has some
$N_{\eta}(c) \subseteq A$, and a punctured neighbourhood is never empty
([[def-neighbourhood-r]]), so every point of $A$ is a limit point of $A$ and
clause 1 covers the whole of $A$. The same holds when $A$ is a nondegenerate
interval ([[def-interval]]). Isolated points are what force clause 2 to exist at
all, and they occur as soon as $A$ is allowed to be an arbitrary subset of
$\mathbb{R}$, as in $A = \{0\} \cup [1,2]$.

## Remarks

- **Continuity is local.** If $\eta > 0$ and $g : A \to \mathbb{R}$ agrees with
  $f$ on $A \cap N_{\eta}(c)$, then $f$ is continuous at $c$ if and only if $g$
  is: any $\delta$ may be replaced by $\min\{\delta, \eta\}$, after which the
  condition only ever evaluates the two functions where they agree. So
  continuity at $c$ sees only an arbitrarily small neighbourhood of $c$, exactly
  as the limit does ([[lem-limit-is-local]]).

- **Continuity passes to subsets of the domain.** If $B \subseteq A$ and
  $c \in B$, then continuity of $f$ at $c$ gives continuity of the restriction
  $f|_B$ at $c$, with the same $\delta$: the condition on $f|_B$ quantifies over
  fewer points. The converse fails, and the standard witness is the indicator of
  $\mathbb{Q}$ restricted to $\mathbb{Q}$, which is constant and hence
  continuous, while the indicator itself is continuous nowhere
  ([[cex-dirichlet-is-nowhere-continuous]]).

- **The radius is a real number.** As in [[def-neighbourhood-r]], $\varepsilon$
  and $\delta$ range over the positive reals here. Restricting either quantifier
  to the positive rationals defines the same relation, by the passage recorded
  in [[def-function-limit]]: below every positive real lies a positive rational
  ([[lem-rat-embeds-dense]]), and a real $\delta$ may be shrunk to a rational
  one below it.

- **The word *continuous* is used for two things in this library, and they
  agree.** [[def-metric-continuity]] defines continuity of a map between metric
  spaces, and $A \subseteq \mathbb{R}$ carries the metric $d(x,y) = |x-y|$. The
  two notions coincide, and that is proved, not assumed:
  [[lem-real-and-metric-notions-agree]] is the dictionary, and it is stated on
  this page precisely so that no later item has to guess.
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

### `def-max-min`

````markdown
---
id: def-max-min
kind: definition
title: "Maximum and minimum of a set"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-complete-ordered-field, def-ordered-field]
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
    - title: "Maximum and minimum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Maximum_and_minimum"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "David H. Ernst, An Introduction to Proof via Inquiry-Based Learning, Section 5.1"
      url: "https://math.libretexts.org/Bookshelves/Mathematical_Logic_and_Proof/An_Introduction_to_Proof_via_Inquiry-Based_Learning_%28Ernst%29/05%253A_New_Page/5.01%253A_New_Page"
pipeline_run: null
---

## Definition

Let $S \subseteq \mathbb{R}$ and $m \in \mathbb{R}$.

- $m$ is a **maximum** (or *greatest element*) of $S$ if $m \in S$ and $s \le m$
  for every $s \in S$.
- $m$ is a **minimum** (or *least element*) of $S$ if $m \in S$ and $m \le s$
  for every $s \in S$.

A set has at most one maximum: if $m_1$ and $m_2$ are both maxima then
$m_1 \in S$ gives $m_1 \le m_2$ and $m_2 \in S$ gives $m_2 \le m_1$, so
$m_1 = m_2$ by antisymmetry of the order, which is immediate from the trichotomy
axiom of an ordered field ([[def-ordered-field]], [[def-complete-ordered-field]]).
The same argument applies to minima, so we may write $\max S$ and $\min S$.

## Remarks

- A maximum is precisely an upper bound of $S$ ([[def-complete-ordered-field]])
  that happens to lie in $S$; a minimum is a lower bound of $S$
  ([[def-bounded-set]]) that lies in $S$. In particular a set with a maximum is
  bounded above and a set with a minimum is bounded below.
- The empty set has neither a maximum nor a minimum, because the requirement
  $m \in S$ cannot be met.
- The membership requirement $m \in S$ is exactly what separates a maximum from a
  supremum, and it is the theme of this page. A supremum is a bound on the set
  and is not asked to belong to it; a maximum is an element of the set. The two
  agree exactly when the supremum happens to be attained ([[lem-max-is-sup]]),
  and they genuinely differ in general ([[fs-sup-belongs-to-set]]).
- Every nonempty finite subset of $\mathbb{R}$ has both a maximum and a minimum
  ([[lem-finite-set-has-max]]), which is what licenses the notation
  $\max\{a_1, \dots, a_n\}$. Infinite sets need not: the failure of attainment is
  an infinitary phenomenon.
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

### `lem-finite-set-has-max`

````markdown
---
id: lem-finite-set-has-max
kind: lemma
title: "Every nonempty finite set of reals has a maximum and a minimum"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-max-min, thm-induction-principle, def-nat-addition, def-complete-ordered-field, def-ordered-field]
justified_by: [lem-finite-subsets-listable]
forward_refs: [def-countable]
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Maximum and minimum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Maximum_and_minimum"
    - title: "Mathematical induction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mathematical_induction"
    - title: "Finite set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Finite_set"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

For every $n \in \mathbb{N}$ and all $a_0, a_1, \dots, a_n \in \mathbb{R}$, the
set $\{a_0, a_1, \dots, a_n\}$ has a maximum and a minimum ([[def-max-min]]).

What is proved below is exactly the displayed statement, by induction on $n$.

The usual reading, that *every nonempty finite subset of $\mathbb{R}$ has a
maximum and a minimum*, follows once one identifies the nonempty finite subsets
of $\mathbb{R}$ with the sets listable as $\{a_0, \dots, a_n\}$. That
identification is recorded as a stipulation in the Given below, because this page
has no definition of finiteness to prove it against. **It is discharged, not
merely assumed**: [[lem-finite-subsets-listable]] proves that the two
descriptions of a nonempty finite subset of $\mathbb{R}$ agree. That lemma is
recorded in `justified_by` rather than in `deps`, since it is about the sets this
lemma quantifies over and therefore depends on this one. This is what licenses
the notation
$\max\{a_1, \dots, a_n\}$ and $\min\{a_1, \dots, a_n\}$ for finite sets of
**real** numbers from this page onwards.

## Facts & Assumptions

**Given:** Real numbers $a_0, a_1, a_2, \dots$; for $n \in \mathbb{N}$ write $F_n := \{a_0, \dots, a_n\}$, so that $F_{n+1} = F_n \cup \{a_{n+1}\}$. A subset of $\mathbb{R}$ is nonempty and finite exactly when it equals $F_n$ for some $n \in \mathbb{N}$ and some choice of $a_0, \dots, a_n$.

[A1] $P(n)$ denotes the statement: for all $a_0, \dots, a_n \in \mathbb{R}$, the set $F_n$ has a maximum and a minimum.

[L1] Maximum and minimum: $m = \max X$ means $m \in X$ and $x \le m$ for all $x \in X$; $m = \min X$ means $m \in X$ and $m \le x$ for all $x \in X$; each is unique when it exists ([[def-max-min]]).

[L2] Induction principle: if $P(0)$ holds and $P(n)$ implies $P(n+1)$ for every $n \in \mathbb{N}$, then $P(n)$ holds for every $n \in \mathbb{N}$, where $n + 1$ denotes the successor $\sigma(n)$ ([[thm-induction-principle]], [[def-nat-addition]]).

[L3] The order on $\mathbb{R}$ is reflexive, total and transitive: $a \le a$; for all $a, b$ exactly one of $a < b$, $a = b$, $b < a$ holds, so at least one of $a \le b$ and $b \le a$ holds; and $a \le b$ with $b \le c$ gives $a \le c$ ([[def-complete-ordered-field]], [[def-ordered-field]]).

## Proof

**Proof technique:** induction.

1.1 Base case: $F_0 = \{a_0\}$, and $a_0 \in F_0$ with $a_0 \le a_0$ by reflexivity, so $a_0$ is both a maximum and a minimum of $F_0$; hence $P(0)$ holds. [base, A1, L1, L3]

1.2 Inductive hypothesis: fix $n \in \mathbb{N}$ and assume $P(n)$, that is, for all reals $a_0, \dots, a_n$ the set $F_n$ has a maximum and a minimum. [ih, A1]

2.1 Let $a_0, \dots, a_{n+1} \in \mathbb{R}$ be arbitrary; by the inductive hypothesis the set $F_n$ has a maximum $M$ and a minimum $m$, and $F_{n+1} = F_n \cup \{a_{n+1}\}$. [step 1.2, L1]

3.1 By totality at least one of $a_{n+1} \le M$ and $M \le a_{n+1}$ holds. If $a_{n+1} \le M$, then $M \in F_n \subseteq F_{n+1}$, every element of $F_n$ is $\le M$ because $M = \max F_n$, and $a_{n+1} \le M$ as well, so $M$ is a maximum of $F_{n+1}$. If $M \le a_{n+1}$, then $a_{n+1} \in F_{n+1}$, every $x \in F_n$ satisfies $x \le M \le a_{n+1}$ hence $x \le a_{n+1}$ by transitivity, and $a_{n+1} \le a_{n+1}$, so $a_{n+1}$ is a maximum of $F_{n+1}$. Either way $F_{n+1}$ has a maximum. [step 2.1, L1, L3]

3.2 Dually, at least one of $m \le a_{n+1}$ and $a_{n+1} \le m$ holds. If $m \le a_{n+1}$, then $m \in F_{n+1}$ and every element of $F_{n+1}$ is $\ge m$, so $m$ is a minimum of $F_{n+1}$. If $a_{n+1} \le m$, then $a_{n+1} \in F_{n+1}$ and every $x \in F_n$ satisfies $a_{n+1} \le m \le x$ hence $a_{n+1} \le x$ by transitivity, so $a_{n+1}$ is a minimum of $F_{n+1}$. Either way $F_{n+1}$ has a minimum. [step 2.1, L1, L3]

4.1 Since $a_0, \dots, a_{n+1}$ were arbitrary, $F_{n+1}$ has a maximum and a minimum for every such list, that is, $P(n)$ implies $P(n+1)$. [step 3.1, step 3.2, A1]

5.1 The base case and the inductive step give $P(n)$ for every $n \in \mathbb{N}$ by the induction principle; since a nonempty finite subset of $\mathbb{R}$ is exactly a set of the form $F_n$, every nonempty finite subset of $\mathbb{R}$ has both a maximum and a minimum. [step 1.1, step 4.1, given, L2, discharge-induction] ∎

## Remarks

- **Where the stipulation is discharged.** Finiteness itself is defined later, in [[def-countable]], as equinumerosity with a von Neumann natural; with that definition in hand [[lem-finite-subsets-listable]] proves that a subset of $\mathbb{R}$ is nonempty and finite exactly when it is listable as $\{a_0, \dots, a_n\}$, which is the Given below. So nothing on this page rests on an assumption that is never paid for; it is paid for later, and the payment is recorded in `justified_by`.
- **Only the total order is used, never completeness.** The base case needs reflexivity, the inductive step needs totality and transitivity, and the induction itself runs over $\mathbb{N}$. The same induction works in any totally ordered field; what is recorded here is its specialisation to $\mathbb{R}$.
- Nonemptiness is essential: $\emptyset$ is finite and has no maximum ([[def-max-min]]). Finiteness is essential too: $\{x \in \mathbb{R} : 0 < x < 1\}$ is bounded and has no maximum ([[fs-sup-belongs-to-set]]).
- Combined with claim 1 of [[lem-max-is-sup]], this says every nonempty finite subset of $\mathbb{R}$ has a supremum, and that the supremum is attained, because it equals the maximum. The infimum half is *not* part of [[lem-max-is-sup]], which speaks only of maxima and suprema; it follows from the minimum proved here together with the reflection identity $\inf X = -\sup(-X)$ ([[lem-reflection]], [[thm-infimum-property]]).
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

### `thm-compactness-is-necessary-for-evt-and-uniform-continuity`

````markdown
---
id: thm-compactness-is-necessary-for-evt-and-uniform-continuity
kind: theorem
title: "Rudin 4.20, the sharp converse: on a noncompact $E \\subseteq \\mathbb{R}$ there is an unbounded continuous function and a bounded continuous function with no greatest value, and if $E$ is bounded there is a continuous function on $E$ that is not uniformly continuous"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-heine-borel-characterisation-r, def-open-cover-r, thm-extreme-value-r, thm-heine-cantor-r, cor-boundedness-theorem-r, cor-continuous-extension-from-a-dense-subset-r, thm-algebra-of-continuous-functions, def-continuity-real, def-uniform-continuity-real, def-open-and-closed-in-r, def-interior-closure-boundary-r, thm-closure-characterisations-r, def-bounded-set, def-max-min, lem-finite-set-has-max, lem-sup-epsilon, def-complete-ordered-field, def-interval, def-neighbourhood-r, def-integer-power, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, lem-power-monotone, lem-of-abs-value, def-ordered-field]
justified_by: []
aliases: [thm-rudin-4-20]
forward_refs: [cex-evt-fails-on-the-open-interval-and-on-the-half-line]
landmark: true
short: "compactness is necessary"
proof_strategy: constructive
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
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Thm 4.20)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Extreme value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Extreme_value_theorem"
    - title: "Uniform continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Uniform_continuity"
    - title: "W. Rudin, Principles of Mathematical Analysis"
      url: "https://www.lehman.edu/faculty/rbettiol/lehman_teaching/2020mat320/baby_Rudin.pdf"
pipeline_run: null
---

## Statement

Let $E \subseteq \mathbb{R}$ be nonempty and **not** compact
([[def-open-cover-r]]). Then:

1. there is a function $f : E \to \mathbb{R}$, continuous on $E$
   ([[def-continuity-real]]), that is **unbounded** on $E$;
2. there is a function $g : E \to \mathbb{R}$, continuous and bounded on $E$,
   such that $\sup g[E]$ exists and is **not attained**; in particular $g$ has
   no greatest value on $E$ ([[def-max-min]]);
3. if in addition $E$ is **bounded** ([[def-bounded-set]]), there is a function
   $h : E \to \mathbb{R}$, continuous on $E$, that is **not uniformly
   continuous** on $E$ ([[def-uniform-continuity-real]]).

Together with [[cor-boundedness-theorem-r]], [[thm-extreme-value-r]] and
[[thm-heine-cantor-r]] this says that **compactness is exactly the hypothesis
those three theorems need**: on a compact set every continuous function is
bounded, attains its extrema and is uniformly continuous, and on a set that is
not compact each of those three conclusions fails for some continuous function.

**Claim 3 carries the boundedness hypothesis because it must.** On an unbounded
closed set every uniformly continuous function is still uniformly continuous,
and a noncompact set may well carry only uniformly continuous functions of
interest; what claim 3 asserts is the sharp statement for the bounded case, which
is the case Heine-Cantor leaves open. The unbounded case is covered by claims 1
and 2, which hold with no extra hypothesis.

**Every witness is exhibited, not merely asserted to exist.** Four functions do
the work: $x$ and $-1/(1+x^{2})$ when $E$ is unbounded, and $1/(x-x_0)$ and
$-|x - x_0|$ when $E$ is bounded, where $x_0$ is then a point of
$\overline{E} \setminus E$.

## Facts & Assumptions

**Given:** A nonempty set $E \subseteq \mathbb{R}$ that is not compact.

[L1] A subset of $\mathbb{R}$ is compact if and only if it is closed and bounded; so $E$ is not closed or not bounded ([[thm-heine-borel-characterisation-r]], [[def-open-cover-r]], [[def-open-and-closed-in-r]], [[def-bounded-set]]).

[L2] Boundedness: $S$ is bounded when there are reals $\ell, u$ with $\ell \le s \le u$ for every $s \in S$; equivalently when there is a real $M \ge 0$ with $|s| \le M$ for every $s \in S$. So if $S$ is unbounded then for every real $M > 0$ some $s \in S$ has $|s| > M$ ([[def-bounded-set]], [[lem-of-abs-value]], [[lem-finite-set-has-max]], [[def-max-min]]).

[L3] Closure: $\overline{E}$ is the set of points every neighbourhood of which meets $E$, it contains $E$, and $E$ is closed exactly when $E = \overline{E}$ ([[thm-closure-characterisations-r]], [[def-interior-closure-boundary-r]], [[def-neighbourhood-r]]).

[L4] Algebra of continuous functions: constants, the identity and polynomial functions are continuous on any subset of $\mathbb{R}$; sums, scalar multiples, products and absolute values of continuous functions are continuous; and if $q$ is continuous on $S$ and $q(x) \ne 0$ for every $x \in S$, then $p/q$ is continuous on $S$ ([[thm-algebra-of-continuous-functions]], [[def-continuity-real]], [[def-integer-power]]).

[L5] Suprema: a nonempty subset of $\mathbb{R}$ bounded above has a least upper bound ([[def-complete-ordered-field]]), and for $u = \sup S$ every real $\varepsilon > 0$ admits $s \in S$ with $u - \varepsilon < s$ ([[lem-sup-epsilon]]).

[L6] Archimedean property in reciprocal form, reciprocals, and squares: for every real $\eta > 0$ there is a natural $n \ge 1$ with $1/n < \eta$; $0 < s < t$ implies $0 < 1/t < 1/s$; $0 \le a < b$ implies $a^{2} < b^{2}$; and $t \ge 1$ implies $t^{2} \ge t$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[lem-of-inverse-positive]], [[lem-power-monotone]], [[def-integer-power]]).

[L7] Extension theorem: a uniformly continuous real function on a nonempty $D \subseteq \mathbb{R}$ extends to a continuous function on $\overline{D}$ ([[cor-continuous-extension-from-a-dense-subset-r]], [[def-uniform-continuity-real]]).

[L8] Ordered-field arithmetic in $\mathbb{R}$: totality and trichotomy; $|u| > 0$ exactly when $u \ne 0$; $1 + t^{2} \ge 1 > 0$ for every real $t$; and the minimum of a two-element set of reals ([[def-ordered-field]], [[lem-of-abs-value]], [[lem-finite-set-has-max]], [[def-max-min]], [[def-interval]]).

## Proof

**Proof technique:** constructive.

1.1 By [L1] the set $E$ is not closed or not bounded, and these two possibilities are exhaustive: if $E$ is bounded then it is not closed. The two cases below are treated separately, and claim 3 arises only in the second. [L1]

1.2 **First case: $E$ is unbounded. Claim 1.** Put $f(x) := x$, continuous on $E$ by [L4]. Given a real $M > 0$, [L2] supplies $x \in E$ with $|x| > M$, that is $|f(x)| > M$; so $f$ is unbounded on $E$. [L2, L4, construct]

1.3 **First case, claim 2.** Put $g(x) := -1/(1+x^{2})$. The denominator is a polynomial function, continuous by [L4], and satisfies $1 + x^{2} \ge 1 > 0$ by [L8], so $g$ is continuous on $E$ by [L4]; moreover $0 < 1/(1+x^{2}) \le 1$, so $-1 \le g(x) < 0$ for every $x \in E$ and $g$ is bounded. Hence $g[E]$ is nonempty and bounded above by $0$, so $u := \sup g[E]$ exists by [L5] and $u \le 0$. [L4, L5, L8, construct]

2.1 **First case: the supremum is $0$ and is not attained.** Let a real $\varepsilon > 0$ be given and put $M := \max\{1, 1/\varepsilon\} \ge 1$. By [L2] there is $x \in E$ with $|x| > M$, so $x^{2} > M^{2} \ge M \ge 1/\varepsilon$ by [L6] and [L8], hence $1 + x^{2} > 1/\varepsilon > 0$ and $1/(1+x^{2}) < \varepsilon$ by [L6], that is $g(x) > -\varepsilon$. So no real below $0$ is an upper bound of $g[E]$, and $0$ is one; therefore $u = 0$. Since $g(x) < 0$ for every $x \in E$ by step 1.3, the value $0$ is not attained, and for each $x \in E$ the number $\varepsilon := -g(x) > 0$ produces by [L5] some $x' \in E$ with $g(x') > -\varepsilon = g(x)$, so $g$ has no greatest value. [step 1.3, L2, L5, L6, L8]

2.2 **Second case: $E$ is bounded, hence not closed.** By [L3] we have $E \subseteq \overline{E}$ and $E \ne \overline{E}$, so there is $x_0 \in \overline{E} \setminus E$. Every neighbourhood of $x_0$ meets $E$ by [L3]; and $x - x_0 \ne 0$ for every $x \in E$, since $x_0 \notin E$, so $|x - x_0| > 0$ there by [L8]. [step 1.1, L3, L8, choose]

3.1 **Second case, claim 1.** Put $f(x) := 1/(x - x_0)$ for $x \in E$. The denominator is a polynomial function, continuous by [L4], and does not vanish on $E$ by step 2.2, so $f$ is continuous on $E$ by [L4]. Given a real $M > 0$, step 2.2 supplies $x \in E$ with $|x - x_0| < 1/M$, and $|x - x_0| > 0$, so $|f(x)| = 1/|x - x_0| > M$ by [L6]. Hence $f$ is unbounded on $E$. [step 2.2, L4, L6, construct]

3.2 **Second case, claim 2.** Put $g(x) := -|x - x_0|$ for $x \in E$, continuous on $E$ by [L4]. Since $E$ is bounded, [L2] gives a real $M \ge 0$ with $|x| \le M$ on $E$, so $|x - x_0| \le M + |x_0|$ and $-(M + |x_0|) \le g(x) < 0$ for every $x \in E$: $g$ is bounded, and $g[E]$ is nonempty and bounded above by $0$. For a real $\varepsilon > 0$, step 2.2 supplies $x \in E$ with $|x - x_0| < \varepsilon$, that is $g(x) > -\varepsilon$; so $\sup g[E] = 0$ by [L5], and it is not attained because $g(x) < 0$ everywhere on $E$. As in step 2.1, $g$ therefore has no greatest value on $E$. [step 2.1, step 2.2, L2, L4, L5, L8, construct]

4.1 **Second case, claim 3.** Put $h := f$ of step 3.1, continuous on $E$. Suppose $h$ were uniformly continuous on $E$. By [L7] there would be a continuous $H : \overline{E} \to \mathbb{R}$ with $H(x) = h(x)$ for $x \in E$, and $x_0 \in \overline{E}$. Continuity of $H$ at $x_0$ with $\varepsilon := 1$ gives a real $\delta > 0$ such that every $z \in \overline{E}$ with $|z - x_0| < \delta$ satisfies $|H(z) - H(x_0)| < 1$, hence $|H(z)| < |H(x_0)| + 1 =: B$, a real with $B > 0$. Put $r := \min\{\delta, 1/B\} > 0$; by step 2.2 there is $x \in E$ with $|x - x_0| < r$, and then $0 < |x - x_0| < 1/B$ gives $|h(x)| = 1/|x - x_0| > B$ by [L6], while $x \in \overline{E}$ with $|x - x_0| < \delta$ gives $|h(x)| = |H(x)| < B$. That is impossible, so $h$ is not uniformly continuous on $E$. [step 2.2, step 3.1, L6, L7, L8]

5.1 The two cases of step 1.1 are exhaustive, and in each of them claims 1 and 2 have been established by exhibiting the functions named, while claim 3, whose hypothesis places $E$ in the second case, is step 4.1. [step 1.2, step 1.3, step 2.1, step 3.1, step 3.2, step 4.1, discharge-construct: the four witnesses x and -1/(1+x^2) and 1/(x-x_0) and -|x-x_0|] ∎

## Remarks

- **The bounded non-closed case is where all three failures happen at once.** There $x_0 \in \overline{E} \setminus E$ is a hole in the domain, and $1/(x-x_0)$ blows up at it: it is unbounded, it is not uniformly continuous, and $-|x-x_0|$ approaches its supremum $0$ without reaching it. The unbounded case needs a different witness for claim 2, because $-|x - x_0|$ need not be bounded there, and $-1/(1+x^{2})$ is the standard substitute.

- **Claim 3 is proved through the extension theorem rather than through sequences.** The textbook route takes a sequence in $E$ converging to $x_0$, notes that it is Cauchy, and observes that a uniformly continuous function must carry it to a Cauchy, hence bounded, sequence. Producing that sequence from adherence spends countable choice ([[lem-sequential-characterisation-of-closure-r]]). The argument above spends none: [[cor-continuous-extension-from-a-dense-subset-r]] constructs the extension without selecting anything, and the contradiction is then a single $\varepsilon$-$\delta$ estimate at the point $x_0$.

- **What "not attained" means here, precisely.** The supremum of $g[E]$ exists as a real number and equals $0$, and no point of $E$ has $g$-value $0$. That is stronger than saying $g$ has no maximum: it identifies the value the function fails to reach. The companion page works both witnesses out concretely in [[cex-evt-fails-on-the-open-interval-and-on-the-half-line]].
````

