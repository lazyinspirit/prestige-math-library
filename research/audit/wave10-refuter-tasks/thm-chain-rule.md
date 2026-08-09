## Wave 10 target — `thm-chain-rule`

Selection: mandatory Wave 10 high/critical proof-bearing route (risk report classifies all 49 contracts critical).

Normalized current SHA-256: `1719569e6f03d8f325fe61ad8fd7307bb114a8cca8deb761d718f8d9534d7e41`

## Complete current target

````markdown
---
id: thm-chain-rule
kind: theorem
title: "The chain rule, in one line from Carathéodory: if $g$ is differentiable at $c$ and $f$ is differentiable at $g(c)$, then $f \\circ g$ is differentiable at $c$ with $(f \\circ g)'(c) = f'(g(c))\\,g'(c)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-derivative, thm-caratheodory-characterisation, thm-composition-of-continuous-functions, cor-differentiable-implies-continuous, thm-algebra-of-continuous-functions, def-continuity-real, def-limit-point-r]
justified_by: []
aliases: []
landmark: true
short: "the chain rule"
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
    - title: "Chain rule (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Chain_rule"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 5 (Thm 5.5)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §4.1"
      url: "https://www.jirka.org/ra/"
    - title: "J. Lebl, Basic Analysis I, The Derivative"
      url: "https://www.jirka.org/ra/html/der_chapter.html"
    - title: "J. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $A, B \subseteq \mathbb{R}$, let $g : A \to \mathbb{R}$ with
$g[A] \subseteq B$ and let $f : B \to \mathbb{R}$, so that the composite
$f \circ g : A \to \mathbb{R}$ is defined. Let $c \in A$ be a limit point of
$A$ ([[def-limit-point-r]]) at which $g$ is differentiable
([[def-derivative]]), put $b := g(c)$, and suppose $b$ is a limit point of $B$
at which $f$ is differentiable. Then $f \circ g$ is differentiable at $c$ and

$$(f \circ g)'(c) \;=\; f'\bigl(g(c)\bigr)\,g'(c) .$$

**Both limit-point hypotheses are needed, and neither is automatic.** That $c$
is a limit point of $A$ is what makes $g'(c)$ and $(f \circ g)'(c)$ defined
symbols; that $b = g(c)$ is a limit point of $B$ is what makes $f'(b)$ one.
Nothing forces the second: $g$ may be differentiable at $c$ and send $c$ to an
isolated point of $B$, and there $f'(b)$ is not defined and the formula asserts
nothing.

**No case analysis appears anywhere.** The naive difference-quotient proof
writes $\frac{f(g(x)) - f(g(c))}{g(x) - g(c)} \cdot \frac{g(x) - g(c)}{x - c}$
and then has to say what happens where $g(x) = g(c)$, which may occur at points
arbitrarily close to $c$. Carathéodory's factorisation never divides by the
inner increment, so the difficulty does not arise.

## Facts & Assumptions

**Given:** Sets $A, B \subseteq \mathbb{R}$, functions $g : A \to \mathbb{R}$ with $g[A] \subseteq B$ and $f : B \to \mathbb{R}$, a point $c \in A$ that is a limit point of $A$ at which $g$ is differentiable, and the point $b := g(c) \in B$, a limit point of $B$ at which $f$ is differentiable ([[def-derivative]], [[def-limit-point-r]]).

[L1] Carathéodory's characterisation ([[thm-caratheodory-characterisation]]), used in both directions: for $D \subseteq \mathbb{R}$, a point $p \in D$ that is a limit point of $D$ and $h : D \to \mathbb{R}$, the function $h$ is differentiable at $p$ if and only if there is $\eta : D \to \mathbb{R}$, continuous at $p$, with $h(y) - h(p) = \eta(y)(y - p)$ for every $y \in D$, and then $\eta(p) = h'(p)$.

[L2] Algebra of continuous functions ([[thm-algebra-of-continuous-functions]], claim 1): a product of two functions continuous at a point of their common domain is continuous there.

[L3] Composition of continuous functions ([[thm-composition-of-continuous-functions]]): if $g : A \to \mathbb{R}$ has $g[A] \subseteq B$ and is continuous at $c \in A$, and if $\eta : B \to \mathbb{R}$ is continuous at $g(c)$, then $\eta \circ g$ is continuous at $c$ ([[def-continuity-real]]).

[L4] A function differentiable at a point is continuous there ([[cor-differentiable-implies-continuous]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], applied to $g$ on $A$ at $c$, fix $\psi : A \to \mathbb{R}$, continuous at $c$, with $g(x) - g(c) = \psi(x)(x - c)$ for every $x \in A$ and $\psi(c) = g'(c)$. [L1, choose]

1.2 By [L1], applied to $f$ on $B$ at $b$, fix $\varphi : B \to \mathbb{R}$, continuous at $b$, with $f(y) - f(b) = \varphi(y)(y - b)$ for every $y \in B$ and $\varphi(b) = f'(b)$. [L1, choose]

2.1 **The factorisation.** Let $x \in A$. Then $g(x) \in B$, so taking $y := g(x)$ in step 1.2 gives $f(g(x)) - f(b) = \varphi(g(x))\bigl(g(x) - b\bigr)$, and $g(x) - b = g(x) - g(c) = \psi(x)(x-c)$ by step 1.1. Since $(f \circ g)(c) = f(g(c)) = f(b)$, this reads $(f \circ g)(x) - (f \circ g)(c) = \chi(x)(x - c)$ for every $x \in A$, where $\chi : A \to \mathbb{R}$ is the pointwise product $\chi := (\varphi \circ g)\,\psi$. [step 1.1, step 1.2]

2.2 **The outer factor is continuous at $c$.** By [L4] the function $g$ is continuous at $c$; by step 1.2 the function $\varphi$ is continuous at $b = g(c)$; and $g[A] \subseteq B$. So $\varphi \circ g$ is continuous at $c$ by [L3]. [step 1.2, L3, L4]

3.1 **The factor is continuous at $c$, with the right value.** $\chi$ is the product of $\varphi \circ g$, continuous at $c$ by step 2.2, with $\psi$, continuous at $c$ by step 1.1, so $\chi$ is continuous at $c$ by [L2]; and $\chi(c) = \varphi(g(c))\,\psi(c) = \varphi(b)\,\psi(c) = f'(b)\,g'(c)$. [step 1.1, step 2.2, L2]

4.1 By step 2.1 the function $\chi : A \to \mathbb{R}$ factors the increment of $f \circ g$ at $c$, and by step 3.1 it is continuous at $c$. So [L1], applied to $f \circ g$ on $A$ at the limit point $c$, gives that $f \circ g$ is differentiable at $c$ with $(f \circ g)'(c) = \chi(c) = f'(g(c))\,g'(c)$. [step 2.1, step 3.1, L1] ∎

## Remarks

- **Where the classical proof goes wrong, precisely.** It divides by $g(x) - g(c)$, which may vanish at points arbitrarily close to $c$ even when $g$ is differentiable at $c$ with $g'(c) = 0$; the usual repair defines an auxiliary function equal to the outer quotient off the bad set and to $f'(b)$ on it, and then proves that auxiliary function continuous. That auxiliary function is $\varphi \circ g$, and [[thm-caratheodory-characterisation]] is the observation that it exists before any repair is attempted.

- **What is composed is continuity, not differentiability.** The only theorem about composites used above is [[thm-composition-of-continuous-functions]], and it needs no side hypothesis, unlike the corresponding statement for limits. That is the whole reason the proof has no cases.

- **The formula is about the point $g(c)$, not about $g$ near $c$.** Both derivatives on the right are taken at single points, and the theorem says nothing about $f$ on the image of any neighbourhood of $c$. In particular no hypothesis is placed on $g[A]$ beyond its lying in $B$.
````

## Current Wave 10 provenance determination

```json
{
  "id": "thm-chain-rule",
  "statement": "literature-derived",
  "proof": "ai-altered",
  "evidence": "exact-source",
  "urls": [
    "https://www.jirka.org/ra/html/der_chapter.html",
    "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
  ],
  "rationale": "The sources state the real chain rule with the same derivative product. The proof is an adapted continuous-factor argument that handles relative domains.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

## Current Wave 10 proof contract

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "thm-caratheodory-characterisation",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$ and let $c \\in A$ be a\nlimit point of $A$ ([[def-limit-point-r]]). The following are equivalent.\n\n1. $f$ is differentiable at $c$ ([[def-derivative]]).\n2. There is a function $\\varphi : A \\to \\mathbb{R}$, continuous at $c$\n   ([[def-continuity-real]]), with\n   $$f(x) - f(c) \\;=\\; \\varphi(x)\\,(x - c) \\qquad \\text{for every } x \\in A .$$\n\nWhen they hold, the function $\\varphi$ of claim 2 is **unique** and satisfies\n$\\varphi(c) = f'(c)$.\n\n**What the reformulation buys.** Claim 2 contains no quotient and no limit: it\nis an algebraic identity plus a continuity hypothesis at one point. Every\ndifferentiation rule on this page is proved by exhibiting the factor $\\varphi$\nfor the new function and reading its continuity off the algebra and composition\ntheorems for continuous functions. In particular the chain rule becomes a\none-line substitution, with none of the case analysis that the\ndifference-quotient proof needs where the inner increment vanishes.\n\n**The hypothesis that $c$ is a limit point of $A$ is used in both directions.**\nIt is what makes $f'(c)$ a defined symbol at all ([[def-derivative]]), and it is\nwhat makes continuity of $\\varphi$ at $c$ equivalent to a statement about the\nlimit of $\\varphi$ there ([[def-continuity-real]], clause 1). At an isolated\npoint of $A$ claim 2 holds for *every* $f$, with $\\varphi$ arbitrary off $c$,\nbecause every function is continuous at an isolated point; claim 1 is not even a\nstatement there.",
      "uses": [
        "1.1",
        "1.2",
        "4.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-algebra-of-continuous-functions",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$, let $f, g : A \\to \\mathbb{R}$, let\n$\\alpha \\in \\mathbb{R}$ and let $c \\in A$. Suppose $f$ and $g$ are continuous at\n$c$ ([[def-continuity-real]]). Then:\n\n1. $f + g$, $\\alpha f$ and $fg$ are continuous at $c$;\n2. $|f|$, the function $x \\mapsto |f(x)|$, is continuous at $c$;\n3. $\\max\\{f,g\\}$ and $\\min\\{f,g\\}$, defined pointwise by\n   $x \\mapsto \\max\\{f(x), g(x)\\}$ and $x \\mapsto \\min\\{f(x), g(x)\\}$\n   ([[def-max-min]]), are continuous at $c$;\n4. if $g(c) \\ne 0$ then, writing $A_0 := \\{\\, x \\in A : g(x) \\ne 0 \\,\\}$, the\n   point $c$ lies in $A_0$ and the quotient\n   $(f/g)|_{A_0} : A_0 \\to \\mathbb{R}$, $x \\mapsto f(x)/g(x)$, is continuous at\n   $c$ as a function on $A_0$.\n\nMoreover, with no hypothesis at all:\n\n5. every constant function $A \\to \\mathbb{R}$ and the identity\n   $\\mathrm{id} : A \\to \\mathbb{R}$, $x \\mapsto x$, are continuous on $A$; hence\n   so is $x \\mapsto x^{n}$ for every $n \\in \\mathbb{N}$\n   ([[def-integer-power]]), and hence so is every **polynomial function**\n   $x \\mapsto a_0 + a_1 x + \\dots + a_n x^{n}$ with real coefficients.\n\nConsequently, if $f$ and $g$ are continuous **on** $A$ then so are $f+g$,\n$\\alpha f$, $fg$, $|f|$, $\\max\\{f,g\\}$ and $\\min\\{f,g\\}$, and\n$(f/g)|_{A_0}$ is continuous on $A_0$.\n\n**Claim 4 is stated on $A_0$ because $f/g$ is not defined where $g$ vanishes**,\nand $g$ may well vanish at points of $A$ far from $c$. The hypothesis is\n$g(c) \\ne 0$, not \"$g$ nowhere zero\"; what it buys is that $c$ itself lies in\nthe smaller domain, which is what makes continuity there mean anything.\n\n**Nothing here is proved through a sequence.** Claims 1 and 4 are read off from\n[[thm-algebra-of-function-limits]], which is itself proved from $\\varepsilon$\nand $\\delta$, and claims 2, 3 and 5 are proved directly below. So no choice\nprinciple is used anywhere in this item.",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-composition-of-continuous-functions",
      "source_section": "Statement",
      "quote": "Let $A, B \\subseteq \\mathbb{R}$, let $g : A \\to \\mathbb{R}$ with\n$g(A) \\subseteq B$, and let $f : B \\to \\mathbb{R}$, so that the composite\n$f \\circ g : A \\to \\mathbb{R}$ is defined. Let $c \\in A$. If $g$ is continuous\nat $c$ and $f$ is continuous at $g(c) \\in B$, then $f \\circ g$ is continuous at\n$c$ ([[def-continuity-real]]).\n\nConsequently, if $g$ is continuous on $A$ and $f$ is continuous on $B$, then\n$f \\circ g$ is continuous on $A$.\n\n**No side hypothesis is needed, and that is the whole point.** The composition\ntheorem for limits, [[thm-composition-of-function-limits]], must assume one of\ntwo extra conditions: either $L \\in B$ with $f(L) = M$, or $g \\ne L$ on a\npunctured neighbourhood of $c$; with both dropped the statement is false, which\nis [[fs-naive-composition-of-limits]]. The first of those conditions is exactly\n*continuity of $f$ at $L$* written out, so under the hypotheses above it holds\nautomatically and nothing has to be assumed. The mechanism is visible in the\nproof: [[def-continuity-real]] quantifies over $|y - b| < \\rho$ rather than over\n$0 < |y - b| < \\rho$, so the value $y = b$ that the limit version cannot control\nis precisely the one the continuity hypothesis does control.",
      "uses": [
        "2.2"
      ]
    },
    {
      "fact": "L3",
      "source": "def-continuity-real",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field with its order and\nabsolute value ([[def-complete-ordered-field]], [[lem-of-abs-value]]), and\nneighbourhoods are those of [[def-neighbourhood-r]].\n\nLet $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$ and let $c \\in A$. Then\n$f$ is **continuous at $c$** when\n\n$$(\\forall \\varepsilon > 0)\\ (\\exists \\delta > 0)\\ (\\forall x \\in A)\\ \\bigl[\\ |x - c| < \\delta \\ \\Longrightarrow\\ |f(x) - f(c)| < \\varepsilon\\ \\bigr],$$\n\nwith $\\varepsilon$ and $\\delta$ ranging over the **positive reals**. In the\nlanguage of neighbourhoods: for every real $\\varepsilon > 0$ there is a real\n$\\delta > 0$ with\n\n$$f\\bigl(A \\cap N_{\\delta}(c)\\bigr) \\;\\subseteq\\; N_{\\varepsilon}\\bigl(f(c)\\bigr).$$\n\n$f$ is **continuous on $A$** when it is continuous at every point of $A$.\n\n**The point $c$ is required to lie in $A$, and the condition is unpunctured.**\nBoth differ from [[def-function-limit]], and deliberately. There the quantifier\nruns over $0 < |x - c| < \\delta$, which removes $x = c$; here $x = c$ is allowed,\nand at $x = c$ the implication reads $|f(c) - f(c)| = 0 < \\varepsilon$, which is\nautomatic. So allowing $x = c$ costs nothing, and it is what lets the definition\nbe stated at every point of $A$, including the points where no limit exists.\n\n**Three clauses, and all three are part of the definition.**\n\n1. **At a limit point.** Suppose $c \\in A$ is a limit point of $A$\n   ([[def-limit-point-r]]). Then $f$ is continuous at $c$ if and only if the\n   limit of $f$ at $c$ exists and\n   $$\\lim_{x \\to c} f(x) \\;=\\; f(c)$$\n   ([[def-function-limit]]). Indeed, for a given $\\varepsilon > 0$ a $\\delta$\n   witnessing continuity witnesses the limit condition, because the limit\n   condition quantifies over a subset of the points continuity quantifies over;\n   and conversely a $\\delta$ witnessing $\\lim_{x \\to c} f(x) = f(c)$ witnesses\n   continuity, because the one point it omits, $x = c$, satisfies\n   $|f(c) - f(c)| < \\varepsilon$ anyway.\n\n2. **At an isolated point.** Suppose $c \\in A$ is an isolated point of $A$\n   ([[def-limit-point-r]]), so that $N_{\\eta}(c) \\cap A = \\{c\\}$ for some real\n   $\\eta > 0$. Then **every** $f : A \\to \\mathbb{R}$ is continuous at $c$: take\n   $\\delta := \\eta$, so that the only $x \\in A$ with $|x - c| < \\delta$ is $c$\n   itself, and $|f(c) - f(c)| = 0 < \\varepsilon$.\n\n3. **On a set.** Continuity on $A$ is continuity at each point of $A$, and\n   nothing more. It is not a condition relating $f$ to points outside $A$.\n\nEvery point of $A$ is either a limit point of $A$ or an isolated point of $A$,\nand never both ([[def-limit-point-r]]), so clauses 1 and 2 between them describe\ncontinuity at every point of $A$.\n\n**This is not the raw $\\varepsilon$-$\\delta$ formula of\n[[fs-limit-unique-at-every-point-of-the-domain]].** That item records what goes\nwrong when the *punctured* formula of [[def-function-limit]] is written down at\nan arbitrary point of the domain: at an isolated point it is satisfied\nvacuously by every real $L$ at once, so it defines nothing, and this library\ntherefore leaves $\\lim_{x \\to c} f(x)$ **undefined** at an isolated point.\nContinuity at an isolated point is a different matter: the formula above is not\nvacuous — it is a genuine condition on $f(c)$, satisfied because $f(c)$ is the\nonly value being compared with itself — and it names a single, well-defined\nproperty. The limit is undefined there; the continuity is defined, and is\nautomatic. Clause 1 is the only place where the two notions meet, and it is\nstated only where the limit exists as a notion.\n\n**Where the distinction disappears.** If $A$ is an open subset of $\\mathbb{R}$\n([[def-open-and-closed-in-r]]), then every $c \\in A$ has some\n$N_{\\eta}(c) \\subseteq A$, and a punctured neighbourhood is never empty\n([[def-neighbourhood-r]]), so every point of $A$ is a limit point of $A$ and\nclause 1 covers the whole of $A$. The same holds when $A$ is a nondegenerate\ninterval ([[def-interval]]). Isolated points are what force clause 2 to exist at\nall, and they occur as soon as $A$ is allowed to be an arbitrary subset of\n$\\mathbb{R}$, as in $A = \\{0\\} \\cup [1,2]$.",
      "uses": [
        "2.2"
      ]
    },
    {
      "fact": "L4",
      "source": "cor-differentiable-implies-continuous",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$ and let $c \\in A$ be a\nlimit point of $A$ ([[def-limit-point-r]]). If $f$ is differentiable at $c$\n([[def-derivative]]) then $f$ is continuous at $c$ ([[def-continuity-real]]).\n\nConsequently, if $f$ is differentiable on a set $S \\subseteq A$ then $f$ is\ncontinuous at every point of $S$.\n\n**No converse is asserted, and none holds.** Continuity at $c$ does not give\ndifferentiability at $c$, and the standard witness is worked out on the\ncompanion page.",
      "uses": [
        "2.2"
      ]
    }
  ],
  "derivations": [
    {
      "id": "thm-chain-rule-step-1-1",
      "claim": "By [L1], applied to $g$ on $A$ at $c$, fix $\\psi : A \\to \\mathbb{R}$, continuous at $c$, with $g(x) - g(c) = \\psi(x)(x - c)$ for every $x \\in A$ and $\\psi(c) = g'(c)$. [L1, choose]",
      "step": "1.1",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "thm-chain-rule-step-1-2",
      "claim": "By [L1], applied to $f$ on $B$ at $b$, fix $\\varphi : B \\to \\mathbb{R}$, continuous at $b$, with $f(y) - f(b) = \\varphi(y)(y - b)$ for every $y \\in B$ and $\\varphi(b) = f'(b)$. [L1, choose]",
      "step": "1.2",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "thm-chain-rule-step-2-1",
      "claim": "**The factorisation.** Let $x \\in A$. Then $g(x) \\in B$, so taking $y := g(x)$ in step 1.2 gives $f(g(x)) - f(b) = \\varphi(g(x))\\bigl(g(x) - b\\bigr)$, and $g(x) - b = g(x) - g(c) = \\psi(x)(x-c)$ by step 1.1. Since $(f \\circ g)(c) = f(g(c)) = f(b)$, this reads $(f \\circ g)(x) - (f \\circ g)(c) = \\chi(x)(x - c)$ for every $x \\in A$, where $\\chi : A \\to \\mathbb{R}$ is the pointwise product $\\chi := (\\varphi \\circ g)\\,\\psi$. [step 1.1, step 1.2]",
      "step": "2.1",
      "inputs": [
        "1.2",
        "1.1"
      ]
    },
    {
      "id": "thm-chain-rule-step-2-2",
      "claim": "**The outer factor is continuous at $c$.** By [L4] the function $g$ is continuous at $c$; by step 1.2 the function $\\varphi$ is continuous at $b = g(c)$; and $g[A] \\subseteq B$. So $\\varphi \\circ g$ is continuous at $c$ by [L3]. [step 1.2, L3, L4]",
      "step": "2.2",
      "inputs": [
        "L4",
        "1.2",
        "L3"
      ]
    },
    {
      "id": "thm-chain-rule-step-3-1",
      "claim": "**The factor is continuous at $c$, with the right value.** $\\chi$ is the product of $\\varphi \\circ g$, continuous at $c$ by step 2.2, with $\\psi$, continuous at $c$ by step 1.1, so $\\chi$ is continuous at $c$ by [L2]; and $\\chi(c) = \\varphi(g(c))\\,\\psi(c) = \\varphi(b)\\,\\psi(c) = f'(b)\\,g'(c)$. [step 1.1, step 2.2, L2]",
      "step": "3.1",
      "inputs": [
        "2.2",
        "1.1",
        "L2"
      ]
    },
    {
      "id": "thm-chain-rule-step-4-1",
      "claim": "By step 2.1 the function $\\chi : A \\to \\mathbb{R}$ factors the increment of $f \\circ g$ at $c$, and by step 3.1 it is continuous at $c$. So [L1], applied to $f \\circ g$ on $A$ at the limit point $c$, gives that $f \\circ g$ is differentiable at $c$ with $(f \\circ g)'(c) = \\chi(c) = f'(g(c))\\,g'(c)$. [step 2.1, step 3.1, L1] ∎",
      "step": "4.1",
      "inputs": [
        "2.1",
        "3.1",
        "L1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The statement fixes concrete points/functions and has no empty family or empty-domain branch."
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "No zero parameter or zero-sized construction is a boundary of the stated claim."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Step 1.1 explicitly includes the unit, singleton, or first-index case."
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "The claim is local or algebraic and has no interval-length or repeated-endpoint boundary."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "The claim has no closed-interval endpoint or one-sided endpoint issue."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Step 1.1 supplies each displayed witness by formula or by the cited existence premise before using it."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The stated result is not a biconditional."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The stated result is not a biconditional."
    }
  ]
}
```

## Generated cross-batch/cross-level relationships sourced by this target

```json
[
  {
    "source": "thm-chain-rule",
    "sourcePage": "the-derivative-and-mean-value-theorems",
    "batch": "wave10-real-analysis",
    "target": "def-derivative",
    "declared_target": "def-derivative",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-derivative-and-mean-value-theorems",
    "targetBatch": "wave10-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-chain-rule",
    "sourcePage": "the-derivative-and-mean-value-theorems",
    "batch": "wave10-real-analysis",
    "target": "thm-caratheodory-characterisation",
    "declared_target": "thm-caratheodory-characterisation",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-derivative-and-mean-value-theorems",
    "targetBatch": "wave10-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-chain-rule",
    "sourcePage": "the-derivative-and-mean-value-theorems",
    "batch": "wave10-real-analysis",
    "target": "thm-composition-of-continuous-functions",
    "declared_target": "thm-composition-of-continuous-functions",
    "target_statement_provenance": "literature-derived",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-chain-rule",
    "sourcePage": "the-derivative-and-mean-value-theorems",
    "batch": "wave10-real-analysis",
    "target": "cor-differentiable-implies-continuous",
    "declared_target": "cor-differentiable-implies-continuous",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-derivative-and-mean-value-theorems",
    "targetBatch": "wave10-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-chain-rule",
    "sourcePage": "the-derivative-and-mean-value-theorems",
    "batch": "wave10-real-analysis",
    "target": "thm-algebra-of-continuous-functions",
    "declared_target": "thm-algebra-of-continuous-functions",
    "target_statement_provenance": "ai-altered",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-chain-rule",
    "sourcePage": "the-derivative-and-mean-value-theorems",
    "batch": "wave10-real-analysis",
    "target": "def-continuity-real",
    "declared_target": "def-continuity-real",
    "target_statement_provenance": "ai-altered",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-chain-rule",
    "sourcePage": "the-derivative-and-mean-value-theorems",
    "batch": "wave10-real-analysis",
    "target": "def-limit-point-r",
    "declared_target": "def-limit-point-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Complete current text of every declared or cited item (7)

### `cor-differentiable-implies-continuous`

````markdown
---
id: cor-differentiable-implies-continuous
kind: corollary
title: "A function differentiable at $c$ is continuous at $c$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-derivative, thm-caratheodory-characterisation, def-continuity-real, thm-algebra-of-continuous-functions, def-limit-point-r]
justified_by: []
forward_refs: [cex-absolute-value-is-not-differentiable-at-zero]
aliases: []
landmark: true
short: "differentiable implies continuous"
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
    - title: "Differentiable function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Differentiable_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 5 (Thm 5.2)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §4.1"
      url: "https://www.jirka.org/ra/"
    - title: "J. Lebl, Basic Analysis I, The Derivative"
      url: "https://www.jirka.org/ra/html/der_chapter.html"
    - title: "T. Gantumur, Differentiation"
      url: "https://www.math.mcgill.ca/gantumur/math248f19/differentiation.pdf"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ and let $c \in A$ be a
limit point of $A$ ([[def-limit-point-r]]). If $f$ is differentiable at $c$
([[def-derivative]]) then $f$ is continuous at $c$ ([[def-continuity-real]]).

Consequently, if $f$ is differentiable on a set $S \subseteq A$ then $f$ is
continuous at every point of $S$.

**No converse is asserted, and none holds.** Continuity at $c$ does not give
differentiability at $c$, and the standard witness is worked out on the
companion page.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, a function $f : A \to \mathbb{R}$ and a point $c \in A$ that is a limit point of $A$ at which $f$ is differentiable ([[def-derivative]], [[def-limit-point-r]]).

[L1] Carathéodory's characterisation ([[thm-caratheodory-characterisation]]): since $f$ is differentiable at the limit point $c$ of $A$, there is $\varphi : A \to \mathbb{R}$, continuous at $c$, with $f(x) - f(c) = \varphi(x)(x - c)$ for every $x \in A$, and $\varphi(c) = f'(c)$.

[L2] Algebra of continuous functions ([[thm-algebra-of-continuous-functions]]): sums, scalar multiples and products of functions continuous at a point of the common domain are continuous there (claim 1); and every constant function on $A$ and the identity $x \mapsto x$ on $A$ are continuous at every point of $A$ (claim 5).

[L3] Continuity of $f$ at $c$ is the $\varepsilon$-$\delta$ condition of [[def-continuity-real]], and continuity on a set is continuity at each of its points.

## Proof

**Proof technique:** direct.

1.1 Fix a function $\varphi : A \to \mathbb{R}$, continuous at $c$, with $f(x) - f(c) = \varphi(x)(x - c)$ for every $x \in A$. [L1, choose]

1.2 The identity $x \mapsto x$ on $A$ and every constant function on $A$ are continuous at $c$; hence so is $x \mapsto x - c$, which is the sum of the identity and the constant function with value $-c$. [L2]

2.1 The pointwise product $x \mapsto \varphi(x)(x - c)$ is continuous at $c$, being the product of two functions on $A$ continuous at $c$. [step 1.1, step 1.2, L2]

3.1 For every $x \in A$ one has $f(x) = f(c) + \varphi(x)(x - c)$, so $f$ is the sum of the constant function with value $f(c)$ and the product of step 2.1. [step 1.1, L1]

4.1 A sum of two functions continuous at $c$ is continuous at $c$, so $f$ is continuous at $c$. [step 2.1, step 3.1, L2, L3]

5.1 The point $c$ was an arbitrary point of $A$, a limit point of $A$, at which $f$ is differentiable; applying step 4.1 at every point of a set $S \subseteq A$ on which $f$ is differentiable gives continuity of $f$ at every point of $S$. [step 3.1, L3] ∎

## Remarks

- **Where the work actually is.** None of it is here. Carathéodory's characterisation already replaces the quotient by a product, and a product is visibly small when one factor is bounded near $c$ and the other tends to $0$; the algebra of continuous functions packages exactly that. A direct proof from the quotient would multiply and divide by $x - c$ and would have to say why that is legal, which is the same observation in a less convenient place.

- **The converse fails.** $x \mapsto |x|$ is continuous at $0$ and not differentiable there, which is [[cex-absolute-value-is-not-differentiable-at-zero]] on the companion page. So continuity is strictly weaker, and the gap is not exotic: it opens at a single corner.

- **What is *not* claimed.** Nothing here says that a function differentiable on a set has a continuous derivative, and nothing here says that $f'$ is defined anywhere except where it was assumed to be. Both are separate questions, and neither is settled on this page.
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

### `def-derivative`

````markdown
---
id: def-derivative
kind: definition
title: "The derivative $f'(c) = \\lim_{x \\to c} \\frac{f(x) - f(c)}{x - c}$ of $f : A \\to \\mathbb{R}$ at a point $c \\in A$ that is a limit point of $A$, and differentiability on a set"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-function-limit, lem-function-limit-unique, def-limit-point-r, def-interval, def-neighbourhood-r, def-complete-ordered-field, def-continuity-real, lem-limit-is-local]
justified_by: []
forward_refs: [cex-absolute-value-is-not-differentiable-at-zero]
aliases: [def-differentiable, def-differentiability]
landmark: true
short: "the derivative at a point"
verification:
  audited: 2026-07-28
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Derivative (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Derivative"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 5 (Def. 5.1)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §4.1"
      url: "https://www.jirka.org/ra/"
    - title: "T. Tao, Analysis I, 3rd ed., §10.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "T. Gantumur, Differentiation"
      url: "https://www.math.mcgill.ca/gantumur/math248f19/differentiation.pdf"
    - title: "J. Lebl, Basic Analysis I, The Derivative"
      url: "https://www.jirka.org/ra/html/der_chapter.html"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]]), neighbourhoods are those of
[[def-neighbourhood-r]] and limit points those of [[def-limit-point-r]].

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ and let $c \in A$ be a
**limit point of $A$**. The **difference quotient of $f$ at $c$** is the function

$$q_{f,c} : A \setminus \{c\} \to \mathbb{R}, \qquad q_{f,c}(x) := \frac{f(x) - f(c)}{x - c} .$$

The division is legitimate at every point of the domain, since $x \ne c$ gives
$x - c \ne 0$.

**The point $c$ is a limit point of $A \setminus \{c\}$, not merely of $A$.**
For every real $\varepsilon > 0$ the punctured neighbourhood
$N^{*}_{\varepsilon}(c)$ omits $c$, so

$$N^{*}_{\varepsilon}(c) \cap A \;=\; N^{*}_{\varepsilon}(c) \cap (A \setminus \{c\}) ,$$

and the left-hand side is nonempty because $c$ is a limit point of $A$. So
$q_{f,c}$ is a function on a set having $c$ as a limit point, and
$\lim_{x \to c} q_{f,c}(x)$ is a notion that [[def-function-limit]] defines.

$f$ is **differentiable at $c$** when that limit exists, and then the
**derivative of $f$ at $c$** is

$$f'(c) \;:=\; \lim_{x \to c} q_{f,c}(x) \;=\; \lim_{x \to c} \frac{f(x) - f(c)}{x - c} .$$

**Two obligations are carried by that notation, and both are discharged here.**

1. **Uniqueness.** Writing $f'(c)$ treats the right-hand side as a name for a
   single real number. That is legitimate: $c$ is a limit point of the domain
   $A \setminus \{c\}$ of $q_{f,c}$, so at most one real can satisfy the
   $\varepsilon$-$\delta$ condition, by [[lem-function-limit-unique]] applied to
   $q_{f,c}$. Two reals both meeting the condition are therefore equal, and the
   symbol denotes.
2. **Meaningfulness.** The hypothesis that $c$ is a limit point of $A$ is not
   decoration. At an **isolated** point of $A$ the punctured condition
   $0 < |x - c| < \delta$ is met by no point of the domain at all, so the
   $\varepsilon$-$\delta$ formula is satisfied vacuously by *every* real at
   once; this is why [[def-function-limit]] leaves the limit undefined there,
   and it is why this library defines $f'(c)$ only at a limit point of $A$. At
   an isolated point of its domain a function is neither differentiable nor
   non-differentiable here: the question is not posed.

**The limit sees only $A \setminus \{c\}$, so how the difference quotient is
extended to $c$ is irrelevant.** Let $Q : A \to \mathbb{R}$ agree with
$q_{f,c}$ at every point of $A \setminus \{c\}$, and let $L \in \mathbb{R}$.
Then $\lim_{x \to c} Q(x) = L$ if and only if $\lim_{x \to c} q_{f,c}(x) = L$.
Both conditions read: for every real $\varepsilon > 0$ there is a real
$\delta > 0$ such that every point $x$ of the relevant domain with
$0 < |x - c| < \delta$ satisfies $|{\cdot} - L| < \varepsilon$
([[def-function-limit]]). The clause $0 < |x - c|$ removes $x = c$ from both
quantifiers, so in both cases the points quantified over are exactly the
$x \in A \setminus \{c\}$ with $0 < |x - c| < \delta$, at which $Q$ and
$q_{f,c}$ take the same value. The two conditions are the same condition.

**Differentiability on a set.** For $S \subseteq A$, $f$ is **differentiable on
$S$** when it is differentiable at every $c \in S$; implicit in that phrase is
that every point of $S$ is a limit point of $A$. $f$ is **differentiable** when
it is differentiable on the whole of $A$.

**Restriction of the domain.** Let $B \subseteq A$, let $c \in B$ and suppose
$c$ is a limit point of $B$. If $f$ is differentiable at $c$, then so is the
restriction $f|_B : B \to \mathbb{R}$, and

$$(f|_B)'(c) \;=\; f'(c) .$$

Indeed $B \setminus \{c\} \subseteq A \setminus \{c\}$; the displayed identity
of punctured neighbourhoods above, applied to $B$, shows that $c$ is a limit
point of $B \setminus \{c\}$; the difference quotient $q_{f|_B, c}$ is the
restriction of $q_{f,c}$ to $B \setminus \{c\}$, since $f|_B(c) = f(c)$; and
claim 2 of [[lem-limit-is-local]] carries the limit to that restriction.

**Every point of a nondegenerate interval is a limit point of it.** Let
$J \subseteq \mathbb{R}$ be order-convex ([[def-interval]]) with at least two
elements and let $p \in J$. Choose $q \in J$ with $q \ne p$, and let a real
$\varepsilon > 0$ be given. If $p < q$, put $y := p + \tfrac{1}{2}\min\{\varepsilon,\ q - p\}$;
then $p < y$, and $y - p \le \tfrac{1}{2}(q-p) < q - p$, so $p < y < q$ and
order-convexity gives $y \in J$, while $0 < |y - p| < \varepsilon$. If $q < p$,
the point $y := p - \tfrac{1}{2}\min\{\varepsilon,\ p - q\}$ serves in the same
way. So $N^{*}_{\varepsilon}(p) \cap J \ne \varnothing$ for every real
$\varepsilon > 0$, that is, $p$ is a limit point of $J$
([[def-limit-point-r]]).

Consequently, for $f$ defined on a nondegenerate interval $I$, the symbol
$f'(c)$ is meaningful at **every** $c \in I$, endpoints included. At an endpoint
the difference quotient is taken over the points of $I$ lying on the one side
that is available, so what other texts call a one-sided derivative is, here,
simply the derivative of $f$ on $I$.

## Remarks

- **Notation.** $f'(c)$ and $\frac{df}{dx}(c)$ denote the same real number, and
  this library uses the first. Neither is an operation performed on a symbol
  $x$: the variable in the second is a name for the argument and nothing more.

- **Differentiability is a property of the pair $(f, A)$ at $c$, not of $f$
  alone.** The restriction clause above goes in one direction only, and the
  converse fails. Take $A := \mathbb{R}$, $f(x) := |x|$, $B := [0,\infty)$ and
  $c := 0$. Then $f|_B$ is the identity on $B$, whose difference quotient at $0$
  is constantly $1$, so $f|_B$ is differentiable at $0$ with derivative $1$;
  that $f$ itself is not differentiable at $0$ is
  [[cex-absolute-value-is-not-differentiable-at-zero]] on the companion page.
  So enlarging the domain can destroy differentiability, and the phrase
  "$f$ is differentiable at $c$" always carries the domain with it.

- **The relation to continuity is not definitional.** [[def-continuity-real]]
  is a condition on $f$ near $c$ that does not mention a quotient, and it is
  defined at every point of $A$, isolated points included, whereas
  differentiability is defined only at limit points of $A$. That
  differentiability implies continuity is a theorem on this page and not a
  reading of the definitions.

- **No second derivative and no one-sided derivative is introduced here.**
  Both are standard, and both are absent from this page on purpose;
  [[rem-derivative-conventions]] records exactly what is fixed and what is left
  open at this point in the reading order.
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

### `thm-algebra-of-continuous-functions`

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

### `thm-caratheodory-characterisation`

````markdown
---
id: thm-caratheodory-characterisation
kind: theorem
title: "Carathéodory's characterisation: $f$ is differentiable at $c$ if and only if there is $\\varphi : A \\to \\mathbb{R}$, continuous at $c$, with $f(x) - f(c) = \\varphi(x)(x - c)$ for every $x \\in A$, and then $\\varphi$ is unique and $\\varphi(c) = f'(c)$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-derivative, def-continuity-real, def-function-limit, lem-function-limit-unique, def-limit-point-r, lem-limit-is-local]
justified_by: []
aliases: [thm-caratheodory-derivative]
landmark: true
short: "Carathéodory's characterisation"
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
    - title: "Carathéodory's theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Carath%C3%A9odory%27s_theorem"
    - title: "Derivative (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Derivative"
    - title: "S. Kuhn, The Derivative à la Carathéodory, Amer. Math. Monthly 98 (1991)"
      url: "https://en.wikipedia.org/wiki/Constantin_Carath%C3%A9odory"
    - title: "J. Lebl, Basic Analysis I, §4.1"
      url: "https://www.jirka.org/ra/"
    - title: "T. Gantumur, Differentiation"
      url: "https://www.math.mcgill.ca/gantumur/math248f19/differentiation.pdf"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ and let $c \in A$ be a
limit point of $A$ ([[def-limit-point-r]]). The following are equivalent.

1. $f$ is differentiable at $c$ ([[def-derivative]]).
2. There is a function $\varphi : A \to \mathbb{R}$, continuous at $c$
   ([[def-continuity-real]]), with
   $$f(x) - f(c) \;=\; \varphi(x)\,(x - c) \qquad \text{for every } x \in A .$$

When they hold, the function $\varphi$ of claim 2 is **unique** and satisfies
$\varphi(c) = f'(c)$.

**What the reformulation buys.** Claim 2 contains no quotient and no limit: it
is an algebraic identity plus a continuity hypothesis at one point. Every
differentiation rule on this page is proved by exhibiting the factor $\varphi$
for the new function and reading its continuity off the algebra and composition
theorems for continuous functions. In particular the chain rule becomes a
one-line substitution, with none of the case analysis that the
difference-quotient proof needs where the inner increment vanishes.

**The hypothesis that $c$ is a limit point of $A$ is used in both directions.**
It is what makes $f'(c)$ a defined symbol at all ([[def-derivative]]), and it is
what makes continuity of $\varphi$ at $c$ equivalent to a statement about the
limit of $\varphi$ there ([[def-continuity-real]], clause 1). At an isolated
point of $A$ claim 2 holds for *every* $f$, with $\varphi$ arbitrary off $c$,
because every function is continuous at an isolated point; claim 1 is not even a
statement there.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, a function $f : A \to \mathbb{R}$ and a point $c \in A$ that is a limit point of $A$ ([[def-limit-point-r]]).

[L1] Differentiability at $c$ ([[def-derivative]]): the difference quotient $q(x) := (f(x) - f(c))/(x - c)$ is a function on $A \setminus \{c\}$, the point $c$ is a limit point of $A \setminus \{c\}$, and $f$ is differentiable at $c$ exactly when $\lim_{x \to c} q(x)$ exists, its value then being $f'(c)$; moreover, for any $Q : A \to \mathbb{R}$ agreeing with $q$ on $A \setminus \{c\}$ and any real $L$, the conditions $\lim_{x \to c} Q(x) = L$ and $\lim_{x \to c} q(x) = L$ are the same condition, since the clause $0 < |x - c|$ removes $x = c$ from both quantifiers.

[L2] The limit condition ([[def-function-limit]]): $\lim_{x \to c} h(x) = L$ means that for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x$ in the domain of $h$ with $0 < |x - c| < \delta$ satisfies $|h(x) - L| < \varepsilon$.

[L3] Continuity at a limit point ([[def-continuity-real]], clause 1): for $c \in A$ a limit point of $A$, a function $\psi : A \to \mathbb{R}$ is continuous at $c$ if and only if $\lim_{x \to c} \psi(x)$ exists and equals $\psi(c)$.

[L4] At a limit point of its domain a function has at most one limit ([[lem-function-limit-unique]]).

[L5] Locality (claim 1 of [[lem-limit-is-local]]): if two functions on $A$ agree at every $x \in A$ with $0 < |x - c| < \eta$ for some real $\eta > 0$, then for every real $L$ one has $\lim_{x \to c} = L$ for the first exactly when it holds for the second.

## Proof

**Proof technique:** direct.

1.1 **Claim 1 implies claim 2: the factor.** Assume $f$ is differentiable at $c$, and define $\varphi : A \to \mathbb{R}$ by $\varphi(x) := (f(x) - f(c))/(x - c)$ for $x \in A$ with $x \ne c$, and $\varphi(c) := f'(c)$. This is a function on the whole of $A$, since every $x \in A$ falls under exactly one of the two clauses and the division is by a nonzero number. [L1, construct]

1.2 **Claim 2 implies claim 1: the hypothesis.** Assume instead that some $\varphi : A \to \mathbb{R}$ is continuous at $c$ and satisfies $f(x) - f(c) = \varphi(x)(x - c)$ for every $x \in A$. [assume-hyp]

1.3 **Uniqueness.** Let $\varphi$ and $\psi$ both be as in claim 2. For $x \in A$ with $x \ne c$ the identity gives $\varphi(x)(x - c) = f(x) - f(c) = \psi(x)(x - c)$, and dividing by $x - c \ne 0$ gives $\varphi(x) = \psi(x)$; so the two agree on $A \setminus \{c\}$, hence at every $x \in A$ with $0 < |x - c| < 1$. By [L3] each has a limit at $c$, equal to its own value there; by [L5] those two limits are limits of functions agreeing near $c$, so by [L4] they are equal, that is $\varphi(c) = \psi(c)$. Hence $\varphi = \psi$. [L3, L4, L5]

2.1 **The identity holds for the factor built in step 1.1.** For $x \in A$ with $x \ne c$, multiplying the defining equation $\varphi(x) = (f(x) - f(c))/(x - c)$ by $x - c$ gives $\varphi(x)(x - c) = f(x) - f(c)$; and at $x = c$ both sides are $0$, since $f(c) - f(c) = 0$ and $\varphi(c)(c - c) = 0$. So the identity of claim 2 holds for every $x \in A$. [step 1.1]

2.2 **The factor built in step 1.1 is continuous at $c$.** That $\varphi$ agrees with the difference quotient $q$ at every point of $A \setminus \{c\}$ is its definition, so by [L1] the limit $\lim_{x \to c} \varphi(x)$ exists and equals $f'(c)$, which is $\varphi(c)$. Since $c$ is a limit point of $A$, [L3] turns that into continuity of $\varphi$ at $c$. [step 1.1, L1, L3]

2.3 **Under the hypothesis of step 1.2, $\varphi$ extends the difference quotient.** For $x \in A$ with $x \ne c$, dividing the identity by $x - c \ne 0$ gives $q(x) = \varphi(x)(x-c)/(x-c) = \varphi(x)$. So $\varphi$ agrees with $q$ at every point of $A \setminus \{c\}$. [step 1.2]

2.4 **Under the hypothesis of step 1.2, $\varphi$ has a limit at $c$.** Continuity of $\varphi$ at the limit point $c$ gives, by [L3], that $\lim_{x \to c} \varphi(x)$ exists and equals $\varphi(c)$. [step 1.2, L3]

3.1 **Claim 2 implies claim 1.** By step 2.3 the function $\varphi$ agrees with $q$ off $c$, so the last clause of [L1] applies with $Q := \varphi$ and $L := \varphi(c)$: from $\lim_{x \to c} \varphi(x) = \varphi(c)$, given by step 2.4, it follows that $\lim_{x \to c} q(x) = \varphi(c)$. By [L1] again, $f$ is differentiable at $c$ and $f'(c) = \varphi(c)$. [step 2.3, step 2.4, L1, L2]

4.1 Both implications and both supplementary claims are proved: claim 1 gives claim 2 by steps 1.1, 2.1 and 2.2, with $\varphi(c) = f'(c)$ by construction; claim 2 gives claim 1 by step 3.1, with $\varphi(c) = f'(c)$ established there; and the factor is unique by step 1.3. [step 1.1, step 1.3, step 2.1, step 2.2, step 3.1] ∎

## Remarks

- **The identity at $x = c$ is empty, and that is the point.** Both sides vanish there whatever $\varphi(c)$ is, so the identity alone determines $\varphi$ only off $c$; it is the *continuity* hypothesis that pins the remaining value, and it pins it to $f'(c)$. Drop continuity and claim 2 becomes true for every $f$ whatsoever, with $\varphi(c)$ arbitrary.

- **Why this is not circular.** The proof of claim 2 from claim 1 builds $\varphi$ out of the very quotient whose limit is $f'(c)$, so nothing new is asserted in that direction. The content is the other direction: a factorisation with a factor merely continuous at one point already forces the quotient to converge. That is the direction every rule on this page uses.

- **The factor is a genuinely useful object, not a device.** For $f(x) = x^{n}$ it can be written down in closed form, as the polynomial $\varphi(x) = \sum_{k < n} c^{k} x^{\,n-1-k}$ supplied by [[lem-power-difference-factorisation]]; the companion page writes that factor out and differentiates a composite with it.
````

### `thm-composition-of-continuous-functions`

````markdown
---
id: thm-composition-of-continuous-functions
kind: theorem
title: "A composite of continuous functions is continuous, with no side hypothesis of the kind the composition of limits needs"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-continuity-real, thm-composition-of-function-limits, fs-naive-composition-of-limits, def-function-limit, def-neighbourhood-r]
justified_by: []
aliases: []
landmark: true
short: "composition of continuous functions"
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
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Thm 4.7)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.2"
      url: "https://www.jirka.org/ra/"
    - title: "MIT 18.100B lecture notes"
      url: "https://math.mit.edu/classes/18.100/100B.S1-Lects.html"
pipeline_run: null
---

## Statement

Let $A, B \subseteq \mathbb{R}$, let $g : A \to \mathbb{R}$ with
$g(A) \subseteq B$, and let $f : B \to \mathbb{R}$, so that the composite
$f \circ g : A \to \mathbb{R}$ is defined. Let $c \in A$. If $g$ is continuous
at $c$ and $f$ is continuous at $g(c) \in B$, then $f \circ g$ is continuous at
$c$ ([[def-continuity-real]]).

Consequently, if $g$ is continuous on $A$ and $f$ is continuous on $B$, then
$f \circ g$ is continuous on $A$.

**No side hypothesis is needed, and that is the whole point.** The composition
theorem for limits, [[thm-composition-of-function-limits]], must assume one of
two extra conditions: either $L \in B$ with $f(L) = M$, or $g \ne L$ on a
punctured neighbourhood of $c$; with both dropped the statement is false, which
is [[fs-naive-composition-of-limits]]. The first of those conditions is exactly
*continuity of $f$ at $L$* written out, so under the hypotheses above it holds
automatically and nothing has to be assumed. The mechanism is visible in the
proof: [[def-continuity-real]] quantifies over $|y - b| < \rho$ rather than over
$0 < |y - b| < \rho$, so the value $y = b$ that the limit version cannot control
is precisely the one the continuity hypothesis does control.

## Facts & Assumptions

**Given:** Sets $A, B \subseteq \mathbb{R}$, functions $g : A \to \mathbb{R}$ with $g(A) \subseteq B$ and $f : B \to \mathbb{R}$, a point $c \in A$ at which $g$ is continuous, and the hypothesis that $f$ is continuous at $b := g(c) \in B$.

[L1] Continuity of $g$ at $c$: for every real $\rho > 0$ there is a real $\delta > 0$ such that every $x \in A$ with $|x - c| < \delta$ satisfies $|g(x) - g(c)| < \rho$ ([[def-continuity-real]]).

[L2] Continuity of $f$ at $b$: for every real $\varepsilon > 0$ there is a real $\rho > 0$ such that every $y \in B$ with $|y - b| < \rho$ satisfies $|f(y) - f(b)| < \varepsilon$ ([[def-continuity-real]]).

[L3] Neighbourhoods and the unpunctured quantifier: the condition in [L2] is imposed at every $y \in B$ with $|y - b| < \rho$, the value $y = b$ included ([[def-neighbourhood-r]], [[def-continuity-real]]).

## Proof

**Proof technique:** direct.

1.1 Write $b := g(c)$; by hypothesis $b \in B$, since $g(A) \subseteq B$ and $c \in A$. Also $(f \circ g)(c) = f(b)$. [given]

1.2 Let a real $\varepsilon > 0$ be given. By [L2] fix a real $\rho > 0$ such that every $y \in B$ with $|y - b| < \rho$ satisfies $|f(y) - f(b)| < \varepsilon$. [L2, choose]

2.1 By [L1], applied with this $\rho$, fix a real $\delta > 0$ such that every $x \in A$ with $|x - c| < \delta$ satisfies $|g(x) - b| < \rho$. [step 1.2, L1, choose]

3.1 Let $x \in A$ with $|x - c| < \delta$. Then $g(x) \in B$ and $|g(x) - b| < \rho$ by step 2.1, so $y := g(x)$ is admissible in step 1.2 and gives $\bigl|f(g(x)) - f(b)\bigr| < \varepsilon$, that is $\bigl|(f \circ g)(x) - (f \circ g)(c)\bigr| < \varepsilon$. Note that the case $g(x) = b$ is included, by [L3]. [step 1.1, step 1.2, step 2.1, L3]

4.1 The real $\varepsilon > 0$ was arbitrary and a $\delta > 0$ was produced for it, so $f \circ g$ is continuous at $c$; applying this at every point of $A$ gives continuity of $f \circ g$ on $A$ whenever $g$ is continuous on $A$ and $f$ on $B$. [step 3.1, L1, L2] ∎

## Remarks

- **The contrast with limits, in one sentence.** [[thm-composition-of-function-limits]] cannot control $f$ at the single value $L$, because [[def-function-limit]] never evaluates $f$ there; continuity of $f$ at that value is exactly the missing information, and it is hypothesis (i) of that theorem. So the present theorem is not a strengthening obtained by cleverness: it is the composition theorem under the hypothesis that makes the obstruction vanish.

- **What is not claimed.** Continuity of $f \circ g$ at $c$ does not follow from continuity of $g$ at $c$ alone together with $f$ merely having a limit at $b$; nor does it follow from continuity of $f$ at $b$ together with $g$ merely having a limit at $c$, since then $g(c)$ need not be $b$ at all. Both hypotheses above are hypotheses about the same two points, $c$ and $g(c)$.
````

