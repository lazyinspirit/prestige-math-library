# Audit proof-refuter brief — Wave 10, A6

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
For an `ai-generated` proof, actively search for a counterexample. A false
public claim, invalid proof, missing necessary hypothesis, circularity, or
materially inaccurate load-bearing citation is fatal; a quickly closable gap is
nonfatal.

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

## Wave 10 target — `thm-caratheodory-characterisation`

Selection: mandatory Wave 10 high/critical proof-bearing route (risk report classifies all 49 contracts critical).

Normalized current SHA-256: `ee1be97ef094e41df32105afdd2274393500ba6df88f5713e5418da2a8e1aa45`

## Complete current target

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

## Current Wave 10 provenance determination

```json
{
  "id": "thm-caratheodory-characterisation",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://www.math.mcgill.ca/gantumur/math248f19/differentiation.pdf"
  ],
  "rationale": "The notes state Carathéodory’s characterization with the same continuous-factor equivalence and value at the base point. The item adds global uniqueness of the factor and arbitrary relative-domain bookkeeping, so it is a semantic adaptation; the proof is likewise locally expanded.",
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
      "source": "def-derivative",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]]), neighbourhoods are those of\n[[def-neighbourhood-r]] and limit points those of [[def-limit-point-r]].\n\nLet $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$ and let $c \\in A$ be a\n**limit point of $A$**. The **difference quotient of $f$ at $c$** is the function\n\n$$q_{f,c} : A \\setminus \\{c\\} \\to \\mathbb{R}, \\qquad q_{f,c}(x) := \\frac{f(x) - f(c)}{x - c} .$$\n\nThe division is legitimate at every point of the domain, since $x \\ne c$ gives\n$x - c \\ne 0$.\n\n**The point $c$ is a limit point of $A \\setminus \\{c\\}$, not merely of $A$.**\nFor every real $\\varepsilon > 0$ the punctured neighbourhood\n$N^{*}_{\\varepsilon}(c)$ omits $c$, so\n\n$$N^{*}_{\\varepsilon}(c) \\cap A \\;=\\; N^{*}_{\\varepsilon}(c) \\cap (A \\setminus \\{c\\}) ,$$\n\nand the left-hand side is nonempty because $c$ is a limit point of $A$. So\n$q_{f,c}$ is a function on a set having $c$ as a limit point, and\n$\\lim_{x \\to c} q_{f,c}(x)$ is a notion that [[def-function-limit]] defines.\n\n$f$ is **differentiable at $c$** when that limit exists, and then the\n**derivative of $f$ at $c$** is\n\n$$f'(c) \\;:=\\; \\lim_{x \\to c} q_{f,c}(x) \\;=\\; \\lim_{x \\to c} \\frac{f(x) - f(c)}{x - c} .$$\n\n**Two obligations are carried by that notation, and both are discharged here.**\n\n1. **Uniqueness.** Writing $f'(c)$ treats the right-hand side as a name for a\n   single real number. That is legitimate: $c$ is a limit point of the domain\n   $A \\setminus \\{c\\}$ of $q_{f,c}$, so at most one real can satisfy the\n   $\\varepsilon$-$\\delta$ condition, by [[lem-function-limit-unique]] applied to\n   $q_{f,c}$. Two reals both meeting the condition are therefore equal, and the\n   symbol denotes.\n2. **Meaningfulness.** The hypothesis that $c$ is a limit point of $A$ is not\n   decoration. At an **isolated** point of $A$ the punctured condition\n   $0 < |x - c| < \\delta$ is met by no point of the domain at all, so the\n   $\\varepsilon$-$\\delta$ formula is satisfied vacuously by *every* real at\n   once; this is why [[def-function-limit]] leaves the limit undefined there,\n   and it is why this library defines $f'(c)$ only at a limit point of $A$. At\n   an isolated point of its domain a function is neither differentiable nor\n   non-differentiable here: the question is not posed.\n\n**The limit sees only $A \\setminus \\{c\\}$, so how the difference quotient is\nextended to $c$ is irrelevant.** Let $Q : A \\to \\mathbb{R}$ agree with\n$q_{f,c}$ at every point of $A \\setminus \\{c\\}$, and let $L \\in \\mathbb{R}$.\nThen $\\lim_{x \\to c} Q(x) = L$ if and only if $\\lim_{x \\to c} q_{f,c}(x) = L$.\nBoth conditions read: for every real $\\varepsilon > 0$ there is a real\n$\\delta > 0$ such that every point $x$ of the relevant domain with\n$0 < |x - c| < \\delta$ satisfies $|{\\cdot} - L| < \\varepsilon$\n([[def-function-limit]]). The clause $0 < |x - c|$ removes $x = c$ from both\nquantifiers, so in both cases the points quantified over are exactly the\n$x \\in A \\setminus \\{c\\}$ with $0 < |x - c| < \\delta$, at which $Q$ and\n$q_{f,c}$ take the same value. The two conditions are the same condition.\n\n**Differentiability on a set.** For $S \\subseteq A$, $f$ is **differentiable on\n$S$** when it is differentiable at every $c \\in S$; implicit in that phrase is\nthat every point of $S$ is a limit point of $A$. $f$ is **differentiable** when\nit is differentiable on the whole of $A$.\n\n**Restriction of the domain.** Let $B \\subseteq A$, let $c \\in B$ and suppose\n$c$ is a limit point of $B$. If $f$ is differentiable at $c$, then so is the\nrestriction $f|_B : B \\to \\mathbb{R}$, and\n\n$$(f|_B)'(c) \\;=\\; f'(c) .$$\n\nIndeed $B \\setminus \\{c\\} \\subseteq A \\setminus \\{c\\}$; the displayed identity\nof punctured neighbourhoods above, applied to $B$, shows that $c$ is a limit\npoint of $B \\setminus \\{c\\}$; the difference quotient $q_{f|_B, c}$ is the\nrestriction of $q_{f,c}$ to $B \\setminus \\{c\\}$, since $f|_B(c) = f(c)$; and\nclaim 2 of [[lem-limit-is-local]] carries the limit to that restriction.\n\n**Every point of a nondegenerate interval is a limit point of it.** Let\n$J \\subseteq \\mathbb{R}$ be order-convex ([[def-interval]]) with at least two\nelements and let $p \\in J$. Choose $q \\in J$ with $q \\ne p$, and let a real\n$\\varepsilon > 0$ be given. If $p < q$, put $y := p + \\tfrac{1}{2}\\min\\{\\varepsilon,\\ q - p\\}$;\nthen $p < y$, and $y - p \\le \\tfrac{1}{2}(q-p) < q - p$, so $p < y < q$ and\norder-convexity gives $y \\in J$, while $0 < |y - p| < \\varepsilon$. If $q < p$,\nthe point $y := p - \\tfrac{1}{2}\\min\\{\\varepsilon,\\ p - q\\}$ serves in the same\nway. So $N^{*}_{\\varepsilon}(p) \\cap J \\ne \\varnothing$ for every real\n$\\varepsilon > 0$, that is, $p$ is a limit point of $J$\n([[def-limit-point-r]]).\n\nConsequently, for $f$ defined on a nondegenerate interval $I$, the symbol\n$f'(c)$ is meaningful at **every** $c \\in I$, endpoints included. At an endpoint\nthe difference quotient is taken over the points of $I$ lying on the one side\nthat is available, so what other texts call a one-sided derivative is, here,\nsimply the derivative of $f$ on $I$.",
      "uses": [
        "1.1",
        "2.2",
        "3.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-function-limit",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]]) with its order and absolute value\n([[def-real-order]]).\n\nLet $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$, let $c \\in \\mathbb{R}$\nbe a **limit point** of $A$ ([[def-limit-point-r]]), and let $L \\in \\mathbb{R}$.\nWe say that **$f(x)$ tends to $L$ as $x$ tends to $c$**, and write\n\n$$\\lim_{x \\to c} f(x) = L ,$$\n\nwhen\n\n$$(\\forall \\varepsilon > 0)\\ (\\exists \\delta > 0)\\ (\\forall x \\in A)\\ \\bigl[\\ 0 < |x - c| < \\delta \\ \\Longrightarrow\\ |f(x) - L| < \\varepsilon\\ \\bigr],$$\n\nwhere $\\varepsilon$ and $\\delta$ range over the **positive reals**.\n\nIn the language of neighbourhoods ([[def-neighbourhood-r]]) the condition reads:\nfor every real $\\varepsilon > 0$ there is a real $\\delta > 0$ with\n\n$$f\\bigl(A \\cap N^{*}_{\\delta}(c)\\bigr) \\;\\subseteq\\; N_{\\varepsilon}(L),$$\n\n$N^{*}_{\\delta}(c) = \\{\\, y : 0 < |y - c| < \\delta \\,\\}$ being the punctured\n$\\delta$-neighbourhood of $c$ and $N_{\\varepsilon}(L) = (L - \\varepsilon,\\ L +\n\\varepsilon)$ the open interval of [[def-interval]]. The two forms agree because\n$|f(x) - L| < \\varepsilon$ says exactly $f(x) \\in N_\\varepsilon(L)$, and\n$0 < |x - c| < \\delta$ says exactly $x \\in N^{*}_\\delta(c)$.\n\n**Three features of this definition are load bearing, not decoration.**\n\n1. **$c$ is required to be a limit point of $A$.** By [[def-limit-point-r]] that\n   says every punctured neighbourhood of $c$ meets $A$, so for every $\\delta > 0$\n   the set $A \\cap N^{*}_\\delta(c)$ over which the implication quantifies is\n   nonempty. Drop the requirement and the implication can be satisfied\n   vacuously by *every* real $L$ at once, which is exactly what\n   [[fs-limit-unique-at-every-point-of-the-domain]] records. At a point of $A$\n   that is not a limit point of $A$ — an isolated point — the symbol\n   $\\lim_{x \\to c} f(x)$ is therefore **not defined** in this library.\n\n2. **$c \\in A$ is not required.** A limit point of $A$ need not belong to $A$\n   ([[def-limit-point-r]]), and the definition never evaluates $f$ at $c$. This\n   is what allows a limit to be taken at a point where the function is not\n   defined at all, as at $0$ for $x \\mapsto x\\,\\psi(1/x)$.\n\n3. **The value $f(c)$, when it exists, is irrelevant.** The hypothesis\n   $0 < |x - c|$ excludes $x = c$ from the quantifier, so changing $f$ at the\n   single point $c$ changes nothing. Equality of the limit with the value is an\n   extra condition, not a consequence: [[fs-limit-equals-value]].\n\n**The notation presumes uniqueness.** Writing $\\lim_{x \\to c} f(x) = L$ treats\nthe left-hand side as a name for a single real number, which is legitimate only\nbecause at a limit point at most one $L$ can satisfy the displayed condition.\nThat obligation is discharged by [[lem-function-limit-unique]], recorded in this\nitem's `justified_by`. As with $\\sup S$ ([[rem-sup-conventions]]) and\n$\\lim_k x_k$ ([[lem-limit-unique]]), the symbol is written only for a function\nalready known to have a limit at $c$.\n\n**Real and rational $\\varepsilon$ define the same relation.** Above,\n$\\varepsilon$ and $\\delta$ range over the positive reals. Restricting either\nquantifier to the positive rationals gives the same relation: every positive\nrational is a positive real, and below every positive real lies a positive\nrational ([[lem-rat-embeds-dense]]), so an $\\varepsilon$-condition verified for\nall positive rationals is verified for an arbitrary positive real $\\eta$ by\nrunning it at a rational $\\varepsilon$ with $0 < \\varepsilon < \\eta$, and a\n$\\delta$ produced as a real may be shrunk to a rational one below it. This is\nthe passage sanctioned in the remarks of [[def-sequence]], and it is what lets\nthis definition be compared with [[def-real-limit]], whose $\\varepsilon$ is\nrational, in [[thm-sequential-criterion-for-function-limits]].",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-continuity-real",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field with its order and\nabsolute value ([[def-complete-ordered-field]], [[lem-of-abs-value]]), and\nneighbourhoods are those of [[def-neighbourhood-r]].\n\nLet $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$ and let $c \\in A$. Then\n$f$ is **continuous at $c$** when\n\n$$(\\forall \\varepsilon > 0)\\ (\\exists \\delta > 0)\\ (\\forall x \\in A)\\ \\bigl[\\ |x - c| < \\delta \\ \\Longrightarrow\\ |f(x) - f(c)| < \\varepsilon\\ \\bigr],$$\n\nwith $\\varepsilon$ and $\\delta$ ranging over the **positive reals**. In the\nlanguage of neighbourhoods: for every real $\\varepsilon > 0$ there is a real\n$\\delta > 0$ with\n\n$$f\\bigl(A \\cap N_{\\delta}(c)\\bigr) \\;\\subseteq\\; N_{\\varepsilon}\\bigl(f(c)\\bigr).$$\n\n$f$ is **continuous on $A$** when it is continuous at every point of $A$.\n\n**The point $c$ is required to lie in $A$, and the condition is unpunctured.**\nBoth differ from [[def-function-limit]], and deliberately. There the quantifier\nruns over $0 < |x - c| < \\delta$, which removes $x = c$; here $x = c$ is allowed,\nand at $x = c$ the implication reads $|f(c) - f(c)| = 0 < \\varepsilon$, which is\nautomatic. So allowing $x = c$ costs nothing, and it is what lets the definition\nbe stated at every point of $A$, including the points where no limit exists.\n\n**Three clauses, and all three are part of the definition.**\n\n1. **At a limit point.** Suppose $c \\in A$ is a limit point of $A$\n   ([[def-limit-point-r]]). Then $f$ is continuous at $c$ if and only if the\n   limit of $f$ at $c$ exists and\n   $$\\lim_{x \\to c} f(x) \\;=\\; f(c)$$\n   ([[def-function-limit]]). Indeed, for a given $\\varepsilon > 0$ a $\\delta$\n   witnessing continuity witnesses the limit condition, because the limit\n   condition quantifies over a subset of the points continuity quantifies over;\n   and conversely a $\\delta$ witnessing $\\lim_{x \\to c} f(x) = f(c)$ witnesses\n   continuity, because the one point it omits, $x = c$, satisfies\n   $|f(c) - f(c)| < \\varepsilon$ anyway.\n\n2. **At an isolated point.** Suppose $c \\in A$ is an isolated point of $A$\n   ([[def-limit-point-r]]), so that $N_{\\eta}(c) \\cap A = \\{c\\}$ for some real\n   $\\eta > 0$. Then **every** $f : A \\to \\mathbb{R}$ is continuous at $c$: take\n   $\\delta := \\eta$, so that the only $x \\in A$ with $|x - c| < \\delta$ is $c$\n   itself, and $|f(c) - f(c)| = 0 < \\varepsilon$.\n\n3. **On a set.** Continuity on $A$ is continuity at each point of $A$, and\n   nothing more. It is not a condition relating $f$ to points outside $A$.\n\nEvery point of $A$ is either a limit point of $A$ or an isolated point of $A$,\nand never both ([[def-limit-point-r]]), so clauses 1 and 2 between them describe\ncontinuity at every point of $A$.\n\n**This is not the raw $\\varepsilon$-$\\delta$ formula of\n[[fs-limit-unique-at-every-point-of-the-domain]].** That item records what goes\nwrong when the *punctured* formula of [[def-function-limit]] is written down at\nan arbitrary point of the domain: at an isolated point it is satisfied\nvacuously by every real $L$ at once, so it defines nothing, and this library\ntherefore leaves $\\lim_{x \\to c} f(x)$ **undefined** at an isolated point.\nContinuity at an isolated point is a different matter: the formula above is not\nvacuous — it is a genuine condition on $f(c)$, satisfied because $f(c)$ is the\nonly value being compared with itself — and it names a single, well-defined\nproperty. The limit is undefined there; the continuity is defined, and is\nautomatic. Clause 1 is the only place where the two notions meet, and it is\nstated only where the limit exists as a notion.\n\n**Where the distinction disappears.** If $A$ is an open subset of $\\mathbb{R}$\n([[def-open-and-closed-in-r]]), then every $c \\in A$ has some\n$N_{\\eta}(c) \\subseteq A$, and a punctured neighbourhood is never empty\n([[def-neighbourhood-r]]), so every point of $A$ is a limit point of $A$ and\nclause 1 covers the whole of $A$. The same holds when $A$ is a nondegenerate\ninterval ([[def-interval]]). Isolated points are what force clause 2 to exist at\nall, and they occur as soon as $A$ is allowed to be an arbitrary subset of\n$\\mathbb{R}$, as in $A = \\{0\\} \\cup [1,2]$.",
      "uses": [
        "1.3",
        "2.2",
        "2.4"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-function-limit-unique",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$, let $c$ be a limit\npoint of $A$ ([[def-limit-point-r]]) and let $L, L' \\in \\mathbb{R}$. If\n\n$$\\lim_{x \\to c} f(x) = L \\qquad \\text{and} \\qquad \\lim_{x \\to c} f(x) = L'$$\n\n([[def-function-limit]]), then $L = L'$.\n\nA function therefore has **at most one** limit at a limit point of its domain,\nwhich is what licenses the notation $\\lim_{x \\to c} f(x)$ for a single real\nnumber. This lemma is recorded in the `justified_by` field of\n[[def-function-limit]] for exactly that reason.\n\n**The hypothesis that $c$ is a limit point is not removable.** At an isolated\npoint of the domain the same $\\varepsilon$-$\\delta$ formula is satisfied\nvacuously by every real at once, which is the content of\n[[fs-limit-unique-at-every-point-of-the-domain]].",
      "uses": [
        "1.3"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-limit-is-local",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$ and let $c$ be a limit point of $A$\n([[def-limit-point-r]]).\n\n1. **Locality.** Let $f, g : A \\to \\mathbb{R}$ and $L \\in \\mathbb{R}$, and\n   suppose there is a real $\\eta > 0$ with $f(x) = g(x)$ for every $x \\in A$\n   satisfying $0 < |x - c| < \\eta$. Then\n   $$\\lim_{x \\to c} f(x) = L \\iff \\lim_{x \\to c} g(x) = L$$\n   ([[def-function-limit]]).\n\n2. **Restriction.** Let $B \\subseteq A$ with $c$ a limit point of $B$, let\n   $f : A \\to \\mathbb{R}$ and suppose $\\lim_{x \\to c} f(x) = L$. Then $c$ is a\n   limit point of $A$ as well, and $\\lim_{x \\to c} f|_B(x) = L$, where\n   $f|_B : B \\to \\mathbb{R}$ is the restriction of $f$.\n\nSo the limit at $c$ sees only the values of $f$ on an arbitrarily small\npunctured neighbourhood of $c$, and it survives shrinking the domain, provided\nthe smaller domain still accumulates at $c$. Together with\n[[lem-function-limit-unique]] this is what makes the phrase *the* limit at $c$ a\nlocal notion.\n\n**The converse of claim 2 is false in general**: a restriction may have a limit\nwhere the function has none, as the one-sided limits of the sign function on the\ncompanion page show.",
      "uses": [
        "1.3"
      ]
    }
  ],
  "derivations": [
    {
      "id": "thm-caratheodory-characterisation-step-1-1",
      "claim": "**Claim 1 implies claim 2: the factor.** Assume $f$ is differentiable at $c$, and define $\\varphi : A \\to \\mathbb{R}$ by $\\varphi(x) := (f(x) - f(c))/(x - c)$ for $x \\in A$ with $x \\ne c$, and $\\varphi(c) := f'(c)$. This is a function on the whole of $A$, since every $x \\in A$ falls under exactly one of the two clauses and the division is by a nonzero number. [L1, construct]",
      "step": "1.1",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "thm-caratheodory-characterisation-step-1-2",
      "claim": "**Claim 2 implies claim 1: the hypothesis.** Assume instead that some $\\varphi : A \\to \\mathbb{R}$ is continuous at $c$ and satisfies $f(x) - f(c) = \\varphi(x)(x - c)$ for every $x \\in A$. [assume-hyp]",
      "step": "1.2",
      "inputs": [
        "given"
      ]
    },
    {
      "id": "thm-caratheodory-characterisation-step-1-3",
      "claim": "**Uniqueness.** Let $\\varphi$ and $\\psi$ both be as in claim 2. For $x \\in A$ with $x \\ne c$ the identity gives $\\varphi(x)(x - c) = f(x) - f(c) = \\psi(x)(x - c)$, and dividing by $x - c \\ne 0$ gives $\\varphi(x) = \\psi(x)$; so the two agree on $A \\setminus \\{c\\}$, hence at every $x \\in A$ with $0 < |x - c| < 1$. By [L3] each has a limit at $c$, equal to its own value there; by [L5] those two limits are limits of functions agreeing near $c$, so by [L4] they are equal, that is $\\varphi(c) = \\psi(c)$. Hence $\\varphi = \\psi$. [L3, L4, L5]",
      "step": "1.3",
      "inputs": [
        "L3",
        "L5",
        "L4"
      ]
    },
    {
      "id": "thm-caratheodory-characterisation-step-2-1",
      "claim": "**The identity holds for the factor built in step 1.1.** For $x \\in A$ with $x \\ne c$, multiplying the defining equation $\\varphi(x) = (f(x) - f(c))/(x - c)$ by $x - c$ gives $\\varphi(x)(x - c) = f(x) - f(c)$; and at $x = c$ both sides are $0$, since $f(c) - f(c) = 0$ and $\\varphi(c)(c - c) = 0$. So the identity of claim 2 holds for every $x \\in A$. [step 1.1]",
      "step": "2.1",
      "inputs": [
        "1.1"
      ]
    },
    {
      "id": "thm-caratheodory-characterisation-step-2-2",
      "claim": "**The factor built in step 1.1 is continuous at $c$.** That $\\varphi$ agrees with the difference quotient $q$ at every point of $A \\setminus \\{c\\}$ is its definition, so by [L1] the limit $\\lim_{x \\to c} \\varphi(x)$ exists and equals $f'(c)$, which is $\\varphi(c)$. Since $c$ is a limit point of $A$, [L3] turns that into continuity of $\\varphi$ at $c$. [step 1.1, L1, L3]",
      "step": "2.2",
      "inputs": [
        "1.1",
        "L1",
        "L3"
      ]
    },
    {
      "id": "thm-caratheodory-characterisation-step-2-3",
      "claim": "**Under the hypothesis of step 1.2, $\\varphi$ extends the difference quotient.** For $x \\in A$ with $x \\ne c$, dividing the identity by $x - c \\ne 0$ gives $q(x) = \\varphi(x)(x-c)/(x-c) = \\varphi(x)$. So $\\varphi$ agrees with $q$ at every point of $A \\setminus \\{c\\}$. [step 1.2]",
      "step": "2.3",
      "inputs": [
        "1.2"
      ]
    },
    {
      "id": "thm-caratheodory-characterisation-step-2-4",
      "claim": "**Under the hypothesis of step 1.2, $\\varphi$ has a limit at $c$.** Continuity of $\\varphi$ at the limit point $c$ gives, by [L3], that $\\lim_{x \\to c} \\varphi(x)$ exists and equals $\\varphi(c)$. [step 1.2, L3]",
      "step": "2.4",
      "inputs": [
        "1.2",
        "L3"
      ]
    },
    {
      "id": "thm-caratheodory-characterisation-step-3-1",
      "claim": "**Claim 2 implies claim 1.** By step 2.3 the function $\\varphi$ agrees with $q$ off $c$, so the last clause of [L1] applies with $Q := \\varphi$ and $L := \\varphi(c)$: from $\\lim_{x \\to c} \\varphi(x) = \\varphi(c)$, given by step 2.4, it follows that $\\lim_{x \\to c} q(x) = \\varphi(c)$. By [L1] again, $f$ is differentiable at $c$ and $f'(c) = \\varphi(c)$. [step 2.3, step 2.4, L1, L2]",
      "step": "3.1",
      "inputs": [
        "2.3",
        "L1",
        "2.4",
        "L2"
      ]
    },
    {
      "id": "thm-caratheodory-characterisation-step-4-1",
      "claim": "Both implications and both supplementary claims are proved: claim 1 gives claim 2 by steps 1.1, 2.1 and 2.2, with $\\varphi(c) = f'(c)$ by construction; claim 2 gives claim 1 by step 3.1, with $\\varphi(c) = f'(c)$ established there; and the factor is unique by step 1.3. [step 1.1, step 1.3, step 2.1, step 2.2, step 3.1] ∎",
      "step": "4.1",
      "inputs": [
        "1.1",
        "2.1",
        "2.2",
        "3.1",
        "1.3"
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
      "status": "checked",
      "evidence": "Step 1.3 explicitly includes the zero-valued, vanishing, or zero-index case."
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
      "status": "not_applicable",
      "reason": "The proof introduces no witness selected from a merely asserted nonempty family."
    },
    {
      "case": "iff-forward",
      "status": "checked",
      "evidence": "Statement; steps 1.1, 2.1, and 2.2 construct the continuous factor from differentiability."
    },
    {
      "case": "iff-reverse",
      "status": "checked",
      "evidence": "Statement; steps 1.2, 2.3, 2.4, and 3.1 recover the derivative from the factor identity."
    }
  ]
}
```

## Generated cross-batch/cross-level relationships sourced by this target

```json
[
  {
    "source": "thm-caratheodory-characterisation",
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
    "source": "thm-caratheodory-characterisation",
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
    "source": "thm-caratheodory-characterisation",
    "sourcePage": "the-derivative-and-mean-value-theorems",
    "batch": "wave10-real-analysis",
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
    "source": "thm-caratheodory-characterisation",
    "sourcePage": "the-derivative-and-mean-value-theorems",
    "batch": "wave10-real-analysis",
    "target": "lem-function-limit-unique",
    "declared_target": "lem-function-limit-unique",
    "target_statement_provenance": "literature-derived",
    "targetPage": "limits-of-real-functions",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-caratheodory-characterisation",
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
  },
  {
    "source": "thm-caratheodory-characterisation",
    "sourcePage": "the-derivative-and-mean-value-theorems",
    "batch": "wave10-real-analysis",
    "target": "lem-limit-is-local",
    "declared_target": "lem-limit-is-local",
    "target_statement_provenance": "ai-altered",
    "targetPage": "limits-of-real-functions",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Complete current text of every declared or cited item (7)

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

### `lem-function-limit-unique`

````markdown
---
id: lem-function-limit-unique
kind: lemma
title: "At a limit point of the domain a function has at most one limit"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-function-limit, def-limit-point-r, def-neighbourhood-r, lem-of-triangle-inequality, lem-of-abs-value, lem-of-add-order, lem-of-sign-rules, lem-of-inverse-positive, cor-of-one-positive, def-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "uniqueness of the function limit"
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
    - title: "J. Lebl, Basic Analysis I, §3.1: Limits of functions"
      url: "https://www.jirka.org/ra/html/sec_limoffunc.html"
    - title: "Limit of a function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.1"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$, let $c$ be a limit
point of $A$ ([[def-limit-point-r]]) and let $L, L' \in \mathbb{R}$. If

$$\lim_{x \to c} f(x) = L \qquad \text{and} \qquad \lim_{x \to c} f(x) = L'$$

([[def-function-limit]]), then $L = L'$.

A function therefore has **at most one** limit at a limit point of its domain,
which is what licenses the notation $\lim_{x \to c} f(x)$ for a single real
number. This lemma is recorded in the `justified_by` field of
[[def-function-limit]] for exactly that reason.

**The hypothesis that $c$ is a limit point is not removable.** At an isolated
point of the domain the same $\varepsilon$-$\delta$ formula is satisfied
vacuously by every real at once, which is the content of
[[fs-limit-unique-at-every-point-of-the-domain]].

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, a function $f : A \to \mathbb{R}$, a limit point $c$ of $A$, and reals $L, L'$ with $\lim_{x \to c} f(x) = L$ and $\lim_{x \to c} f(x) = L'$ ([[def-function-limit]], [[def-limit-point-r]]).

[L1] The limit condition: for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x \in A$ with $0 < |x - c| < \delta$ satisfies $|f(x) - L| < \varepsilon$, and likewise with $L'$ in place of $L$ ([[def-function-limit]]).

[L2] Limit point: for every real $\delta > 0$ there is $x \in A$ with $0 < |x - c| < \delta$ ([[def-limit-point-r]], [[def-neighbourhood-r]]).

[L3] Triangle inequality: $|u + v| \le |u| + |v|$ in $\mathbb{R}$ ([[lem-of-triangle-inequality]]).

[L4] Absolute value: $|u| \ge 0$; $|u| = 0$ if and only if $u = 0$; and $|-u| = |u|$ ([[lem-of-abs-value]]).

[L5] Order arithmetic in $\mathbb{R}$: trichotomy, so $u \ne 0$ together with $|u| \ge 0$ and $|u| \ne 0$ forces $|u| > 0$, and $t < t$ is impossible; adding two strict inequalities ([[lem-of-add-order]]); $0 < 1$ ([[cor-of-one-positive]]), hence $2 := 1 + 1 > 0$ and $2^{-1} > 0$ ([[lem-of-inverse-positive]]), so $\eta/2 > 0$ and $(\eta/2) \cdot 2 = \eta$ whenever $\eta > 0$ ([[lem-of-sign-rules]], [[def-ordered-field]]); and of two positive reals the smaller is positive, the order being total.

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $L \ne L'$. [assume-contra]

2.1 Then $L - L' \ne 0$, so $|L - L'| \ne 0$ while $|L - L'| \ge 0$, and trichotomy gives $|L - L'| > 0$; hence $\varepsilon := |L - L'|/2 > 0$ and $2\varepsilon = |L - L'|$. [step 1.1, L4, L5]

3.1 Applying [L1] twice with this $\varepsilon$, fix reals $\delta_1 > 0$ and $\delta_2 > 0$ such that every $x \in A$ with $0 < |x - c| < \delta_1$ has $|f(x) - L| < \varepsilon$ and every $x \in A$ with $0 < |x - c| < \delta_2$ has $|f(x) - L'| < \varepsilon$; put $\delta$ to be the smaller of $\delta_1$ and $\delta_2$, so $\delta > 0$. [step 2.1, L1, L5, choose]

4.1 Since $c$ is a limit point of $A$, fix $x \in A$ with $0 < |x - c| < \delta$. [step 3.1, L2, choose]

5.1 That $x$ satisfies $0 < |x - c| < \delta_1$ and $0 < |x - c| < \delta_2$, hence both $|f(x) - L| < \varepsilon$ and $|f(x) - L'| < \varepsilon$. [step 3.1, step 4.1, L1]

6.1 Therefore $|L - L'| = |(L - f(x)) + (f(x) - L')| \le |L - f(x)| + |f(x) - L'| = |f(x) - L| + |f(x) - L'| < \varepsilon + \varepsilon = 2\varepsilon = |L - L'|$. [step 5.1, L3, L4, L5]

7.1 So $|L - L'| < |L - L'|$, which trichotomy forbids; the assumption $L \ne L'$ is untenable, and hence $L = L'$. [step 6.1, L5, discharge-contradiction] ∎

## Remarks

- **Where each hypothesis is spent.** The limit conditions are used only in step 5.1, and the limit-point hypothesis only in step 4.1, to produce a *single* point $x$ of the domain near $c$ at which both estimates can be read. Without such a point the two estimates never meet and nothing forces $L = L'$; that is the whole mechanism, and it is the reason [[fs-limit-unique-at-every-point-of-the-domain]] is false.

- **The sequential analogue** is [[lem-limit-unique]], proved by the same two-estimates-at-one-index argument. Neither statement uses any choice principle.

- **One-sided limits inherit this.** By [[def-one-sided-limits]] a one-sided limit is the limit of a restriction of $f$, so applying this lemma to that restriction gives uniqueness there too; nothing has to be reproved.
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

### `lem-power-difference-factorisation`

````markdown
---
id: lem-power-difference-factorisation
kind: lemma
title: "Factorisation of $b^n - a^n$, and the resulting Lipschitz estimate"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-integer-power, def-finite-sum, lem-finite-sum-laws, thm-induction-principle, lem-power-monotone, lem-power-laws, prop-of-multiply-inequalities, lem-of-sign-rules, lem-of-naturals-positive, lem-of-q-embeds]
justified_by: []
aliases: []
landmark: false
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
    - title: "J. Aspnes, Summation Notation"
      url: "https://www.cs.yale.edu/homes/aspnes/pinewiki/SummationNotation.html"
    - title: "M. Fochler, Recursive sums, products, and powers"
      url: "https://people.math.binghamton.edu/mfochler/bu-mfx/bu-math-arv/math-330-arv/math-330-2019-08/html/lec-notes/bu-ln-330-m330-solns-2019-12-03.pdf"
    - title: "Telescoping series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Telescoping_series"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §7.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $a, b \in \mathbb{R}$ and let $n \in \mathbb{N}$ with $n \ge 1$, with powers
as in [[def-integer-power]] and finite sums as in [[def-finite-sum]]. Then

$$b^n - a^n = (b - a)\sum_{k=0}^{n-1} a^k b^{\,n-1-k}.$$

**Lipschitz estimate.** If $0 \le a \le b \le M$ then

$$0 \le b^n - a^n \le n M^{\,n-1} (b - a),$$

where $n$ denotes the canonical natural $\iota(n) \in \mathbb{R}$
([[lem-of-naturals-positive]], [[lem-of-q-embeds]]). This estimate is the form in
which the factorisation is used, later on this page, to prove that $n$-th roots
exist.

## Facts & Assumptions

**Given:** Elements $a, b, M$ of $\mathbb{R}$ and a natural $n \ge 1$. Define $c : \mathbb{N} \to \mathbb{R}$ by $c_k = a^k b^{\,n-k}$ for $k \le n$ and $c_k = a^n$ for $k > n$; only the values $c_0, \dots, c_n$ occur below.

[L1] Definition of powers ([[def-integer-power]]): $a^0 = 1$ and $a^{j+1} = a^j a$.

[L2] Laws of finite sums ([[lem-finite-sum-laws]], themselves proved by induction, [[thm-induction-principle]]): telescoping $\sum_{k<n}(c_{k+1} - c_k) = c_n - c_0$; scaling $\sum_{k<n}\lambda d_k = \lambda \sum_{k<n} d_k$ and the constant sum $\sum_{k<n}\lambda = n\lambda$; and monotonicity, $d_k \le e_k$ for all $k < n$ implies $\sum_{k<n} d_k \le \sum_{k<n} e_k$.

[L3] Laws of integer exponents ([[lem-power-laws]]): $M^{k} M^{\,n-1-k} = M^{\,n-1}$ for $k \le n-1$.

[L4] Monotonicity of powers ([[lem-power-monotone]]): $0 \le x \le y$ implies $0 \le x^j \le y^j$.

[L5] Multiplying inequalities of nonnegatives: $0 \le x \le y$ and $0 \le u \le v$ imply $xu \le yv$. [[prop-of-multiply-inequalities]] states exactly this nonstrict form, alongside the strict one, and it is the only product-of-inequalities move used below. Two instances occur: in step 1.3 with the four nonnegatives $a^k \le M^k$ and $b^{\,n-1-k} \le M^{\,n-1-k}$, and in step 4.1 with $0 \le \sum_{k<n} a^k b^{\,n-1-k} \le nM^{\,n-1}$ and $0 \le b - a \le b - a$, which yields $\big(\sum_{k<n} a^k b^{\,n-1-k}\big)(b-a) \le nM^{\,n-1}(b-a)$. No instance with a possibly negative factor and no strict instance is needed, so the multiplicative order claims of [[lem-of-sign-rules]], which are strict and require a nonzero multiplier, are not what carries either move.

## Proof

**Proof technique:** direct.

1.1 The consecutive differences of $c$ factor: for $k < n$, $c_{k+1} - c_k = a^{k+1} b^{\,n-k-1} - a^k b^{\,n-k} = a^k b^{\,n-1-k}\,a - a^k b^{\,n-1-k}\,b = a^k b^{\,n-1-k}(a - b)$, using $a^{k+1} = a^k a$ and $b^{\,n-k} = b^{\,n-1-k} b$. [L1, algebra]

1.2 The endpoints of $c$ are $c_0 = a^0 b^{\,n} = b^n$ and $c_n = a^n b^{\,0} = a^n$. [L1, algebra]

1.3 Now assume $0 \le a \le b \le M$; then for every $k < n$, $0 \le a^k \le M^k$ and $0 \le b^{\,n-1-k} \le M^{\,n-1-k}$, so $0 \le a^k b^{\,n-1-k} \le M^k M^{\,n-1-k} = M^{\,n-1}$. [L3, L4, L5]

1.4 Also $b - a \ge 0$ and $M^{\,n-1} \ge 0$, and $b^n - a^n \ge 0$ because $0 \le a \le b$ gives $a^n \le b^n$. [L4, L5]

2.1 Telescoping the differences: $\sum_{k<n}(c_{k+1} - c_k) = c_n - c_0 = a^n - b^n$. [step 1.2, L2]

2.2 Pulling the constant factor out of the same sum: $\sum_{k<n}(c_{k+1} - c_k) = \sum_{k<n} a^k b^{\,n-1-k}(a-b) = (a-b)\sum_{k<n} a^k b^{\,n-1-k}$. [step 1.1, L2]

2.3 Summing the bound of step 1.3 over $k < n$ and using monotonicity and the constant sum: $\sum_{k<n} a^k b^{\,n-1-k} \le \sum_{k<n} M^{\,n-1} = n M^{\,n-1}$. [step 1.3, L2]

3.1 Comparing the two evaluations gives $a^n - b^n = (a - b)\sum_{k<n} a^k b^{\,n-1-k}$, and multiplying both sides by $-1$ gives the stated factorisation $b^n - a^n = (b-a)\sum_{k=0}^{n-1} a^k b^{\,n-1-k}$. [step 2.1, step 2.2, algebra]

4.1 Multiplying the inequality of step 2.3 by the nonnegative factor $b - a$ and substituting into the factorisation gives $b^n - a^n = (b-a)\sum_{k<n} a^k b^{\,n-1-k} \le n M^{\,n-1}(b-a)$; the multiplication is the instance of [L5] with $0 \le \sum_{k<n} a^k b^{\,n-1-k} \le nM^{\,n-1}$ and $0 \le b-a \le b-a$, the left-hand nonnegativity holding because every term is nonnegative by step 1.3 and finite sums are monotone. Together with $b^n - a^n \ge 0$ this is the Lipschitz estimate. [step 3.1, step 1.3, step 1.4, step 2.3, L2, L5] ∎
````

