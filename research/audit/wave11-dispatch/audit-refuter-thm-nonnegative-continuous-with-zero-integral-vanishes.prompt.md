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

- critical risk (10): 12 declared dependencies; 12 cited facts; 8 numbered proof steps; boundary-sensitive language; analytic limiting/completeness language

## Target item — `thm-nonnegative-continuous-with-zero-integral-vanishes`

Normalized current SHA-256: `57140816eac74e2fa7a33088bb41da566f07bd5bd4efaa324124c5602260e4f3`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: thm-nonnegative-continuous-with-zero-integral-vanishes
kind: theorem
title: "A continuous $f \\ge 0$ on $[a,b]$ with $\\int_a^b f = 0$ is identically $0$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-additivity-over-subintervals, thm-monotonicity-of-the-integral, lem-integral-elementary-bounds, thm-continuous-implies-integrable, lem-integrability-on-a-subinterval, def-continuity-real, def-darboux-integral, def-oriented-integral, def-max-min, def-interval, def-ordered-field, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "zero integral forces vanishing, for continuous $f \\ge 0$"
proof_strategy: contradiction
verification:
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  precheck: pass
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "MIT 18.100, problem-set solutions on the Riemann integral"
      url: "https://math.mit.edu/~rbm/18.100-F02.HMW/HMW7s.pdf"
    - title: "J. Lebl, Basic Analysis I, Properties of the Riemann integral"
      url: "https://www.jirka.org/ra/html/sec_rintprop.html"
pipeline_run: null
---

## Statement

Let $a < b$ be reals and let $f : [a,b] \to \mathbb{R}$ be continuous on $[a,b]$
([[def-continuity-real]]) with $f(x) \ge 0$ for every $x \in [a,b]$ and

$$\int_a^b f \;=\; 0 .$$

Then $f(x) = 0$ for every $x \in [a,b]$.

**This is the exact repair of a published false statement.** Without continuity
the conclusion fails: [[fs-nonnegative-integrable-with-zero-integral-vanishes]],
on the companion page of *The Riemann Integral*, exhibits a nonnegative
integrable function with integral $0$ that is positive at every rational point.
The remark there says that the continuous case is true and that its proof was
not available at that point in the reading order, because additivity over
subintervals had not been proved. It is proved now
([[thm-additivity-over-subintervals]]), and this item is that proof.

## Facts & Assumptions

**Given:** Reals $a<b$ and a continuous $f : [a,b] \to \mathbb{R}$ with $f \ge 0$ on $[a,b]$ and $\int_a^b f = 0$.

[A1] There is $c \in [a,b]$ with $f(c) > 0$.

[L1] $f$ is integrable on $[a,b]$ and on every closed subinterval with distinct endpoints ([[thm-continuous-implies-integrable]], [[lem-integrability-on-a-subinterval]], [[def-darboux-integral]]).

[L2] Continuity at $c$: for every real $\eta>0$ there is a real $\delta>0$ such that every $x \in [a,b]$ with $|x-c|<\delta$ satisfies $|f(x)-f(c)| < \eta$ ([[def-continuity-real]]).

[L3] Additivity: for $a \le p \le q \le b$, $\int_a^b f = \int_a^p f + \int_p^q f + \int_q^b f$, the degenerate pieces being $0$ ([[thm-additivity-over-subintervals]], claim 3, [[def-oriented-integral]]).

[L4] If $u \ge 0$ is integrable on $[p,q]$ with $p<q$ then $\int_p^q u \ge 0$; and if $u \ge \kappa$ there then $\int_p^q u \ge \kappa(q-p)$ ([[thm-monotonicity-of-the-integral]], [[lem-integral-elementary-bounds]]).

[L5] Ordered-field arithmetic and minima: the order is total and transitive, $\min\{s,t\}$ and $\max\{s,t\}$ are reals lying appropriately, a product of two positive reals is positive, and adding constants preserves inequalities ([[def-max-min]], [[def-ordered-field]], [[def-complete-ordered-field]], [[def-interval]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $f$ does not vanish identically; since $f \ge 0$, this gives $c \in [a,b]$ with $f(c) > 0$, which is [A1]. [assume-contra, given]

1.2 By [L2] with $\eta := f(c)\cdot 2^{-1} > 0$, fix a real $\delta > 0$ such that every $x \in [a,b]$ with $|x-c| < \delta$ satisfies $|f(x)-f(c)| < f(c)\cdot 2^{-1}$, hence $f(x) > f(c)\cdot 2^{-1}$. [A1, L2, L5, choose]

2.1 Put $p := \max\{a,\ c - \delta\cdot 2^{-1}\}$ and $q := \min\{b,\ c + \delta\cdot2^{-1}\}$. Then $a \le p \le c \le q \le b$, and $[p,q] \subseteq [a,b]$. [step 1.2, A1, L5, construct]

3.1 $p < q$: indeed $p \le c \le q$, and $p = q$ would force $p = c = q$, hence $c = \max\{a, c-\delta\cdot2^{-1}\}$ and $c = \min\{b, c+\delta\cdot 2^{-1}\}$, so $c = a$ and $c = b$, contradicting $a<b$. [step 2.1, L5]

3.2 Every $x \in [p,q]$ satisfies $|x - c| \le \delta\cdot 2^{-1} < \delta$, so $f(x) > f(c)\cdot2^{-1}$ there by step 1.2. [step 1.2, step 2.1, L5]

4.1 Hence $\int_p^q f \ge f(c)\cdot 2^{-1}\,(q-p) > 0$ by [L4] and step 3.1. [step 3.1, step 3.2, L1, L4, L5]

5.1 By [L3] and [L4], $\int_a^b f = \int_a^p f + \int_p^q f + \int_q^b f \ge \int_p^q f > 0$, the first and third pieces being $\ge 0$ because $f \ge 0$ there, or $0$ when degenerate. [step 4.1, L1, L3, L4, L5]

6.1 This contradicts the hypothesis $\int_a^b f = 0$, so no such $c$ exists and $f(x) = 0$ for every $x \in [a,b]$. [step 5.1, given, discharge-contradiction] ∎

## Remarks

- **The nonnegativity on the two outer pieces is cited, not assumed away.** The usual one-line version writes "so $\int_a^b f \ge \int_p^q f$" without saying why; what makes that step legitimate is that $f \ge 0$ on $[a,p]$ and on $[q,b]$ too, so both of those integrals are $\ge 0$ ([[thm-monotonicity-of-the-integral]]). Without a sign hypothesis outside $[p,q]$ the argument would fail.

- **The case where $c$ is an endpoint is covered by the construction, not by a case split.** Taking $p$ and $q$ as a maximum and a minimum with $a$ and $b$ makes $[p,q]$ a one-sided neighbourhood of $c$ when $c = a$ or $c = b$, and step 3.1 is what checks that it is still nondegenerate.

- **Continuity is used only at the single point $c$.** The proof needs no uniform continuity and no continuity anywhere else, so the statement could be sharpened to: a nonnegative integrable $f$ with $\int_a^b f = 0$ vanishes at every point of continuity. That sharpening is not asserted as a separate clause because nothing on this page uses it.
````

## Wave 11 provenance row

```json
{
  "id": "thm-nonnegative-continuous-with-zero-integral-vanishes",
  "statement": "literature-derived",
  "proof": "ai-generated",
  "evidence": "exact-source",
  "urls": [
    "https://math.mit.edu/~rbm/18.100-F02.HMW/HMW7s.pdf",
    "https://www.jirka.org/ra/html/sec_rintprop.html"
  ],
  "rationale": "The sources state that a nonnegative continuous function on a compact interval with zero integral is identically zero. The item's positive-neighbourhood lower-bound proof is local.",
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
      "source": "thm-continuous-implies-integrable",
      "source_section": "Statement",
      "quote": "Let $a < b$ be reals and let $f : [a,b] \\to \\mathbb{R}$ be continuous on $[a,b]$\n([[def-continuity-real]]). Then $f$ is bounded ([[def-bounded-set]]) and Riemann\nintegrable on $[a,b]$ ([[def-darboux-integral]]).\n\n**The proof gives more than integrability: it gives a partition that works.** For\nevery real $\\varepsilon > 0$ the uniform partition into $N$ parts already\nsatisfies $U(f,P) - L(f,P) < \\varepsilon$, as soon as $N$ is large enough that\n$(b-a)/\\iota(N)$ is below the $\\delta$ that uniform continuity supplies for\n$\\varepsilon/\\bigl(2(b-a)\\bigr)$. Uniform continuity is exactly what makes one\n$\\delta$ serve all $N$ subintervals at once, and it is the only place where the\ncompactness of $[a,b]$ is used.",
      "uses": [
        "4.1",
        "5.1"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-integrability-on-a-subinterval",
      "source_section": "Statement",
      "quote": "Let $a < b$ be reals, let $f : [a,b] \\to \\mathbb{R}$ be integrable\n([[def-darboux-integral]]), and let $c, d$ satisfy\n\n$$a \\;\\le\\; c \\;<\\; d \\;\\le\\; b .$$\n\nThen the restriction of $f$ to $[c,d]$ is bounded ([[def-bounded-set]]) and\nintegrable on $[c,d]$.\n\nThe degenerate case $c = d$ is not an omission: there $\\int_c^c f = 0$ by\n[[def-oriented-integral]], and no partition of $[c,d]$ exists to speak of\n([[def-partition-and-refinement]]).",
      "uses": [
        "4.1",
        "5.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-darboux-integral",
      "source_section": "Definition",
      "quote": "Let $a < b$ be reals and let $f : [a,b] \\to \\mathbb{R}$ be bounded\n([[def-bounded-set]]). Write $\\mathcal{P}$ for the set of all partitions of\n$[a,b]$ ([[def-partition-and-refinement]]) and put\n\n$$\\mathcal{L} \\;:=\\; \\{\\, L(f,P) \\ : \\ P \\in \\mathcal{P} \\,\\}, \\qquad \\mathcal{U} \\;:=\\; \\{\\, U(f,P) \\ : \\ P \\in \\mathcal{P} \\,\\}$$\n\nfor the sets of lower and of upper Darboux sums ([[def-darboux-sums]]).\n\n### Both extrema exist\n\n**$\\mathcal{P}$ is nonempty**: the pair $(1, t)$ with $t_0 := a$ and $t_k := b$\nfor $k \\ge 1$ is a partition of $[a,b]$, since $a < b$. So $\\mathcal{L}$ and\n$\\mathcal{U}$ are nonempty.\n\n**$\\mathcal{L}$ is bounded above and $\\mathcal{U}$ is bounded below.** Fix any\n$Q \\in \\mathcal{P}$. By claim 2 of [[lem-refinement-inequalities]],\n$L(f,P) \\le U(f,Q)$ for every $P \\in \\mathcal{P}$, so $U(f,Q)$ is an upper bound\nof $\\mathcal{L}$; and $L(f,Q) \\le U(f,P)$ for every $P$, so $L(f,Q)$ is a lower\nbound of $\\mathcal{U}$.\n\nHence a nonempty set bounded above has a supremum\n([[def-complete-ordered-field]]) and a nonempty set bounded below has an infimum\n([[thm-infimum-property]], [[def-infimum]]), each unique ([[lem-sup-unique]]).\nThe **lower** and **upper Darboux integrals** of $f$ over $[a,b]$ are the real\nnumbers\n\n$$\\underline{\\int_a^b} f \\;:=\\; \\sup \\mathcal{L} \\;=\\; \\sup_{P} L(f,P), \\qquad \\overline{\\int_a^b} f \\;:=\\; \\inf \\mathcal{U} \\;=\\; \\inf_{P} U(f,P) .$$\n\n### The lower integral never exceeds the upper one\n\n$$\\underline{\\int_a^b} f \\;\\le\\; \\overline{\\int_a^b} f .$$\n\nIndeed, for each fixed $Q \\in \\mathcal{P}$ the number $U(f,Q)$ is an upper bound\nof $\\mathcal{L}$, so the least upper bound satisfies\n$\\underline{\\int_a^b} f \\le U(f,Q)$. As $Q$ was arbitrary, $\\underline{\\int_a^b}f$\nis a lower bound of $\\mathcal{U}$, and the greatest lower bound satisfies\n$\\underline{\\int_a^b} f \\le \\overline{\\int_a^b} f$ ([[def-infimum]]).\n\nMoreover, for **every** partition $P$,\n\n$$L(f,P) \\;\\le\\; \\underline{\\int_a^b} f \\;\\le\\; \\overline{\\int_a^b} f \\;\\le\\; U(f,P) ,$$\n\nthe outer inequalities because a member of a set is at most its supremum and at\nleast its infimum.\n\n### Integrability\n\n$f$ is **Darboux integrable on $[a,b]$**, and on this page simply\n**integrable**, when\n\n$$\\underline{\\int_a^b} f \\;=\\; \\overline{\\int_a^b} f ,$$\n\nand then the common value is written\n\n$$\\int_a^b f \\qquad \\text{or} \\qquad \\int_a^b f(x)\\,\\mathrm{d}x ,$$\n\nthe **integral of $f$ over $[a,b]$**. It is a single well-determined real\nnumber, being the common value of two numbers each of which is unique\n([[lem-sup-unique]]). Without the displayed equality the symbol $\\int_a^b f$ is\nnot defined and is never written.\n\n**The inequality above is the whole difficulty.** By the previous paragraph\nintegrability is *never* a question of one integral exceeding the other, only of\nthe gap $\\overline{\\int_a^b} f - \\underline{\\int_a^b} f \\ge 0$ being $0$; and by\n[[thm-riemann-criterion]] that gap is $0$ exactly when a single partition can be\nfound making $U(f,P) - L(f,P)$ small. Whether that is possible is settled\ncompletely, in terms of the discontinuities of $f$, by\n[[thm-lebesgue-criterion]].\n\n**\"Riemann integrable\" means the same thing here.** The definition above is\nDarboux's. Riemann's own definition, in terms of tagged partitions of small\nmesh, is [[def-tagged-partition-and-riemann-sum]], and the two define the same\nclass of functions with the same integral by [[thm-darboux-equals-riemann]].\nUntil that theorem is proved the two phrases are kept apart; after it they are\nused interchangeably, as they are throughout the literature.",
      "uses": [
        "4.1",
        "5.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-continuity-real",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field with its order and\nabsolute value ([[def-complete-ordered-field]], [[lem-of-abs-value]]), and\nneighbourhoods are those of [[def-neighbourhood-r]].\n\nLet $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$ and let $c \\in A$. Then\n$f$ is **continuous at $c$** when\n\n$$(\\forall \\varepsilon > 0)\\ (\\exists \\delta > 0)\\ (\\forall x \\in A)\\ \\bigl[\\ |x - c| < \\delta \\ \\Longrightarrow\\ |f(x) - f(c)| < \\varepsilon\\ \\bigr],$$\n\nwith $\\varepsilon$ and $\\delta$ ranging over the **positive reals**. In the\nlanguage of neighbourhoods: for every real $\\varepsilon > 0$ there is a real\n$\\delta > 0$ with\n\n$$f\\bigl(A \\cap N_{\\delta}(c)\\bigr) \\;\\subseteq\\; N_{\\varepsilon}\\bigl(f(c)\\bigr).$$\n\n$f$ is **continuous on $A$** when it is continuous at every point of $A$.\n\n**The point $c$ is required to lie in $A$, and the condition is unpunctured.**\nBoth differ from [[def-function-limit]], and deliberately. There the quantifier\nruns over $0 < |x - c| < \\delta$, which removes $x = c$; here $x = c$ is allowed,\nand at $x = c$ the implication reads $|f(c) - f(c)| = 0 < \\varepsilon$, which is\nautomatic. So allowing $x = c$ costs nothing, and it is what lets the definition\nbe stated at every point of $A$, including the points where no limit exists.\n\n**Three clauses, and all three are part of the definition.**\n\n1. **At a limit point.** Suppose $c \\in A$ is a limit point of $A$\n   ([[def-limit-point-r]]). Then $f$ is continuous at $c$ if and only if the\n   limit of $f$ at $c$ exists and\n   $$\\lim_{x \\to c} f(x) \\;=\\; f(c)$$\n   ([[def-function-limit]]). Indeed, for a given $\\varepsilon > 0$ a $\\delta$\n   witnessing continuity witnesses the limit condition, because the limit\n   condition quantifies over a subset of the points continuity quantifies over;\n   and conversely a $\\delta$ witnessing $\\lim_{x \\to c} f(x) = f(c)$ witnesses\n   continuity, because the one point it omits, $x = c$, satisfies\n   $|f(c) - f(c)| < \\varepsilon$ anyway.\n\n2. **At an isolated point.** Suppose $c \\in A$ is an isolated point of $A$\n   ([[def-limit-point-r]]), so that $N_{\\eta}(c) \\cap A = \\{c\\}$ for some real\n   $\\eta > 0$. Then **every** $f : A \\to \\mathbb{R}$ is continuous at $c$: take\n   $\\delta := \\eta$, so that the only $x \\in A$ with $|x - c| < \\delta$ is $c$\n   itself, and $|f(c) - f(c)| = 0 < \\varepsilon$.\n\n3. **On a set.** Continuity on $A$ is continuity at each point of $A$, and\n   nothing more. It is not a condition relating $f$ to points outside $A$.\n\nEvery point of $A$ is either a limit point of $A$ or an isolated point of $A$,\nand never both ([[def-limit-point-r]]), so clauses 1 and 2 between them describe\ncontinuity at every point of $A$.\n\n**This is not the raw $\\varepsilon$-$\\delta$ formula of\n[[fs-limit-unique-at-every-point-of-the-domain]].** That item records what goes\nwrong when the *punctured* formula of [[def-function-limit]] is written down at\nan arbitrary point of the domain: at an isolated point it is satisfied\nvacuously by every real $L$ at once, so it defines nothing, and this library\ntherefore leaves $\\lim_{x \\to c} f(x)$ **undefined** at an isolated point.\nContinuity at an isolated point is a different matter: the formula above is not\nvacuous — it is a genuine condition on $f(c)$, satisfied because $f(c)$ is the\nonly value being compared with itself — and it names a single, well-defined\nproperty. The limit is undefined there; the continuity is defined, and is\nautomatic. Clause 1 is the only place where the two notions meet, and it is\nstated only where the limit exists as a notion.\n\n**Where the distinction disappears.** If $A$ is an open subset of $\\mathbb{R}$\n([[def-open-and-closed-in-r]]), then every $c \\in A$ has some\n$N_{\\eta}(c) \\subseteq A$, and a punctured neighbourhood is never empty\n([[def-neighbourhood-r]]), so every point of $A$ is a limit point of $A$ and\nclause 1 covers the whole of $A$. The same holds when $A$ is a nondegenerate\ninterval ([[def-interval]]). Isolated points are what force clause 2 to exist at\nall, and they occur as soon as $A$ is allowed to be an arbitrary subset of\n$\\mathbb{R}$, as in $A = \\{0\\} \\cup [1,2]$.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-additivity-over-subintervals",
      "source_section": "Statement",
      "quote": "Let $a < c < b$ be reals and let $f : [a,b] \\to \\mathbb{R}$ be bounded\n([[def-bounded-set]]). Then:\n\n1. $f$ is integrable on $[a,b]$ ([[def-darboux-integral]]) **if and only if** its\n   restrictions to $[a,c]$ and to $[c,b]$ are integrable;\n2. and in that case\n   $$\\int_a^b f \\;=\\; \\int_a^c f \\;+\\; \\int_c^b f .$$\n3. **Oriented form.** Let $\\alpha < \\beta$ be reals, let $f : [\\alpha,\\beta] \\to\n   \\mathbb{R}$ be integrable, and let $u, v, w \\in [\\alpha,\\beta]$ be arbitrary.\n   Then, with the convention of [[def-oriented-integral]],\n   $$\\int_u^v f \\;+\\; \\int_v^w f \\;=\\; \\int_u^w f .$$\n\nClaim 3 is where [[def-oriented-integral]] earns its place: it holds for every\narrangement of the three points, including the degenerate ones, and it is the\nform used everywhere below.",
      "uses": [
        "5.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-oriented-integral",
      "source_section": "Definition",
      "quote": "**Why this item is first.** The published definition of the integral does not\ncover this page. [[def-darboux-integral]] is stated for reals $a < b$, because\nthe partitions it quantifies over are those of [[def-partition-and-refinement]],\nwhose standing hypothesis is $a < b$: with $a = b$ the chain\n$a = t_0 < \\dots < t_n = b$ is unsatisfiable. So $\\int_a^b f$ is an undefined\nsymbol whenever $a \\ge b$, and every additivity statement below would be\nill-formed as it is usually written. This item extends the notation, and nothing\nelse: the object it names is still the Darboux integral of\n[[def-darboux-integral]].\n\nLet $u, v \\in \\mathbb{R}$ and write\n\n$$[u \\wedge v,\\ u \\vee v] \\;:=\\; \\text{the closed interval with endpoints } u \\text{ and } v$$\n\n([[def-interval]]). Let $f$ be a real-valued function whose domain contains that\ninterval. Say that **$f$ is integrable between $u$ and $v$** when either $u = v$,\nor $u \\ne v$ and the restriction of $f$ to $[u \\wedge v,\\ u \\vee v]$ is bounded\n([[def-bounded-set]]) and Darboux integrable there ([[def-darboux-integral]],\n[[def-darboux-sums]]). For such $f$ define\n\n$$\\int_u^v f \\;:=\\; \\begin{cases} \\text{the Darboux integral of } f \\text{ over } [u,v] & \\text{if } u < v, \\\\[2pt] 0 & \\text{if } u = v, \\\\[2pt] -\\displaystyle\\int_v^u f & \\text{if } u > v. \\end{cases}$$\n\n**There is nothing to check for consistency.** The three clauses are indexed by\nthe three cases of trichotomy, $u < v$, $u = v$ and $u > v$, which are mutually\nexclusive and exhaustive; no pair of them ever applies to the same $(u,v)$. In\nparticular the first clause is untouched, so on $u < v$ this is the published\nintegral verbatim and every published theorem about it applies unchanged.\n\n**The middle clause is a stipulation, not a computation.** It is *not* claimed\nthat $0$ is a value forced by the $u < v$ definition in any limiting sense; that\ndefinition simply says nothing at $u = v$, and $\\int_u^u f := 0$ is what is\nwritten there. It is also unconditional: no hypothesis on $f$ beyond being\ndefined at $u$ is asked for, since the case $u = v$ never refers to a partition.\n\n### The two consequences used throughout the page\n\n**Antisymmetry, for every pair.** For all reals $u, v$ with $f$ integrable\nbetween them,\n\n$$\\int_u^v f \\;=\\; -\\int_v^u f .$$\n\nIndeed if $u < v$ then $v > u$ and the third clause reads\n$\\int_v^u f = -\\int_u^v f$, which rearranges to the display; if $u = v$ both\nsides are $0$; and if $u > v$ the third clause is the display itself.\n\n**Absolute values agree.** Consequently\n$\\bigl|\\int_u^v f\\bigr| = \\bigl|\\int_v^u f\\bigr|$ for every such pair.\n\n**An obligation recorded here and discharged elsewhere.** With this convention\nthe additivity identity\n\n$$\\int_u^v f \\;+\\; \\int_v^w f \\;=\\; \\int_u^w f$$\n\nholds for **every** arrangement of $u, v, w$ in an interval on which $f$ is\nintegrable, not only for $u < v < w$. That is a theorem and not part of this\ndefinition; it is proved as the last clause of\n[[thm-additivity-over-subintervals]], and nothing on this page uses it before it\nis proved there.",
      "uses": [
        "5.1"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-monotonicity-of-the-integral",
      "source_section": "Statement",
      "quote": "Let $a < b$ be reals and let $f, g : [a,b] \\to \\mathbb{R}$ be integrable\n([[def-darboux-integral]]). Then:\n\n1. **Nonnegativity.** If $f(x) \\ge 0$ for every $x \\in [a,b]$ then\n   $\\int_a^b f \\ge 0$.\n2. **Monotonicity.** If $f(x) \\le g(x)$ for every $x \\in [a,b]$ then\n   $$\\int_a^b f \\;\\le\\; \\int_a^b g .$$\n3. **Two-sided bound.** If $m \\le f(x) \\le M$ for every $x \\in [a,b]$, with\n   $m, M$ real, then\n   $$m\\,(b-a) \\;\\le\\; \\int_a^b f \\;\\le\\; M\\,(b-a) .$$\n\n**Equality in claim 1 does not force $f$ to vanish.** A nonnegative integrable\nfunction with integral $0$ may be positive at infinitely many points; that is\n[[fs-nonnegative-integrable-with-zero-integral-vanishes]] on the previous page's\ncompanion. Under the additional hypothesis of continuity the conclusion does\nhold, and that is [[thm-nonnegative-continuous-with-zero-integral-vanishes]]\nbelow.\n\n**Claim 2 is stated for $a < b$ and is not orientation-invariant.** With the\nconvention of [[def-oriented-integral]], $f \\le g$ gives\n$\\int_u^v f \\le \\int_u^v g$ when $u \\le v$ and the reverse inequality when\n$u \\ge v$, since both sides change sign together.",
      "uses": [
        "4.1",
        "5.1"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-integral-elementary-bounds",
      "source_section": "Statement",
      "quote": "Let $a < b$ be reals and let $f : [a,b] \\to \\mathbb{R}$ satisfy\n\n$$m \\;\\le\\; f(x) \\;\\le\\; M \\qquad \\text{for every } x \\in [a,b],$$\n\nwith $m, M$ real. Then $f$ is bounded ([[def-bounded-set]]), so its Darboux sums\nand integrals are defined ([[def-darboux-sums]], [[def-darboux-integral]]), and\nfor **every** partition $P$ of $[a,b]$ ([[def-partition-and-refinement]])\n\n$$m(b-a) \\;\\le\\; L(f,P) \\;\\le\\; \\underline{\\int_a^b} f \\;\\le\\; \\overline{\\int_a^b} f \\;\\le\\; U(f,P) \\;\\le\\; M(b-a) .$$\n\nIn particular, taking $f$ to be the constant function with value $c$:\n\n$$\\int_a^b c \\;=\\; c\\,(b-a) ,$$\n\nthe constant function being integrable, with $L(f,P) = U(f,P) = c(b-a)$ for\nevery partition $P$.",
      "uses": [
        "4.1",
        "5.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-max-min",
      "source_section": "Definition",
      "quote": "Let $S \\subseteq \\mathbb{R}$ and $m \\in \\mathbb{R}$.\n\n- $m$ is a **maximum** (or *greatest element*) of $S$ if $m \\in S$ and $s \\le m$\n  for every $s \\in S$.\n- $m$ is a **minimum** (or *least element*) of $S$ if $m \\in S$ and $m \\le s$\n  for every $s \\in S$.\n\nA set has at most one maximum: if $m_1$ and $m_2$ are both maxima then\n$m_1 \\in S$ gives $m_1 \\le m_2$ and $m_2 \\in S$ gives $m_2 \\le m_1$, so\n$m_1 = m_2$ by antisymmetry of the order, which is immediate from the trichotomy\naxiom of an ordered field ([[def-ordered-field]], [[def-complete-ordered-field]]).\nThe same argument applies to minima, so we may write $\\max S$ and $\\min S$.",
      "uses": [
        "1.2",
        "2.1",
        "3.1",
        "3.2",
        "4.1",
        "5.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-ordered-field",
      "source_section": "Definition",
      "quote": "An **ordered field** is a field $F$ ([[def-field]]) together with a subset\n$P \\subseteq F$, the set of **positive** elements (the *positive cone*),\nsatisfying:\n\n- **(O1) Trichotomy.** For each $x \\in F$, exactly one of the following holds:\n  $x \\in P$, or $x = 0$, or $-x \\in P$.\n- **(O2) Closure.** If $x, y \\in P$ then $x + y \\in P$ and $x \\cdot y \\in P$.\n\nWe write $x > 0$ for $x \\in P$ (read \"$x$ is positive\"), and define the order by\n\n$$a < b \\;:\\Longleftrightarrow\\; b - a \\in P, \\qquad a \\le b \\;:\\Longleftrightarrow\\; a < b \\text{ or } a = b.$$\n\nThus $a > b$ means $b < a$, and $a \\ge b$ means $b \\le a$. An element $x$ with\n$-x \\in P$ (equivalently $x < 0$) is called **negative**.",
      "uses": [
        "1.2",
        "2.1",
        "3.1",
        "3.2",
        "4.1",
        "5.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-complete-ordered-field",
      "source_section": "Definition",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and $S \\subseteq F$.\n\n- $u \\in F$ is an **upper bound** of $S$ if $s \\le u$ for all $s \\in S$; $S$ is\n  **bounded above** if it has an upper bound.\n- $u \\in F$ is a **least upper bound** (or **supremum**, $\\sup S$) of $S$ if $u$\n  is an upper bound of $S$ and $u \\le u'$ for every upper bound $u'$ of $S$.\n\n$F$ is a **complete ordered field** (equivalently, $F$ has the\n**least-upper-bound property**, or is **Dedekind complete**) if every nonempty\n$S \\subseteq F$ that is bounded above has a least upper bound in $F$.",
      "uses": [
        "1.2",
        "2.1",
        "3.1",
        "3.2",
        "4.1",
        "5.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-interval",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]], [[def-ordered-field]]) with its order\n([[def-real-order]]).\n\nA subset $I \\subseteq \\mathbb{R}$ is **order-convex** when\n\n$$x, y \\in I \\text{ and } x \\le z \\le y \\;\\Longrightarrow\\; z \\in I .$$\n\nThe **intervals** of $\\mathbb{R}$ are the sets of the following nine forms, where\n$a, b \\in \\mathbb{R}$:\n\n| | bounded forms | | one-sided and full forms |\n|---|---|---|---|\n| $(a,b)$ | $\\{x : a < x < b\\}$ | $(a,\\infty)$ | $\\{x : a < x\\}$ |\n| $[a,b]$ | $\\{x : a \\le x \\le b\\}$ | $[a,\\infty)$ | $\\{x : a \\le x\\}$ |\n| $[a,b)$ | $\\{x : a \\le x < b\\}$ | $(-\\infty,b)$ | $\\{x : x < b\\}$ |\n| $(a,b]$ | $\\{x : a < x \\le b\\}$ | $(-\\infty,b]$ | $\\{x : x \\le b\\}$ |\n| | | $(-\\infty,\\infty)$ | $\\mathbb{R}$ |\n\nAn interval is **open** when both of its written endpoints are excluded, that is\nfor the forms $(a,b)$, $(a,\\infty)$, $(-\\infty,b)$ and $(-\\infty,\\infty)$; it is\n**closed** when both written endpoints are included, that is for $[a,b]$,\n$[a,\\infty)$, $(-\\infty,b]$ and $(-\\infty,\\infty)$. The forms $[a,b)$ and\n$(a,b]$ are **half-open**.\n\n**The symbols $\\pm\\infty$ are notation and not elements of $\\mathbb{R}$.** They\nmark which side carries no endpoint condition at all; the five forms in the right\ncolumn are defined by the displayed conditions on $x$ alone, and no arithmetic is\never performed with $\\infty$. This is the same refusal to extend $\\mathbb{R}$\nsilently that [[rem-sup-conventions]] records for suprema.\n\n**Every one of the nine forms is order-convex.** Each is defined by a conjunction\nof at most two conditions, each of the shape $a < x$, $a \\le x$, $x < b$ or\n$x \\le b$, and each such condition is inherited by an intermediate point: if\n$a < x$ and $x \\le z$ then $a < z$, and if $z \\le y$ and $y < b$ then $z < b$,\nby transitivity of the order ([[def-ordered-field]]). Applying this to whichever\none or two conditions define the form in question gives $z \\in I$ whenever\n$x, y \\in I$ and $x \\le z \\le y$.\n\n**Bounded intervals.** An interval is **bounded** ([[def-bounded-set]]) exactly\nwhen it is of one of the four forms in the left column: for those, $a$ is a lower\nbound and $b$ an upper bound. The other five forms are unbounded, on the side or\nsides written with $\\infty$; the verification is in the remarks below.\n\n**Nondegeneracy.** An interval is **degenerate** when it has at most one element,\nand **nondegenerate** when it has at least two. For the four bounded forms with\nendpoints $a$ and $b$:\n\n- $[a,b]$ is nonempty exactly when $a \\le b$, and it is nondegenerate exactly\n  when $a < b$. It is the singleton $\\{a\\}$ when $a = b$.\n- $(a,b)$, $[a,b)$ and $(a,b]$ are nonempty exactly when $a < b$, and then each\n  is nondegenerate.\n\nThe only assertion here that is not immediate from the defining conditions is\nthat $a < b$ makes $(a,b)$ nonempty with at least two points. It holds because\n$a < (a+b)/2 < b$, which follows from $a < b$ by adding $a$, respectively $b$, to\nboth sides and halving ([[def-ordered-field]]); repeating the halving inside\n$(a, (a+b)/2)$ produces a second point.\n\n**Closed bounded intervals.** These are the sets $[a,b]$ with $a \\le b$, which is\nexactly the condition making them nonempty. They are the intervals the nested\ninterval property is stated for, and the phrase *closed bounded interval* always\ncarries the hypothesis $a \\le b$ in this library.\n\n**Length.** The **length** of a bounded interval presented by its endpoints\n$a \\le b$ is\n\n$$\\ell = b - a \\;\\ge\\; 0 .$$\n\nLength is attached to the presentation by endpoints and is not recovered from the\nset: $(a,b)$, $[a,b)$ and $(a,b]$ are all empty when $a = b$, and so is\n$(c,c)$ for any other $c$, while each of these presentations has length $0$, so\nnothing inconsistent arises; but the endpoints are named explicitly at every\npoint where a length is used in this library, and never inferred from the set.\nUnbounded intervals are assigned no length.",
      "uses": [
        "1.2",
        "2.1",
        "3.1",
        "3.2",
        "4.1",
        "5.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "thm-nonnegative-continuous-with-zero-integral-vanishes-step-1-1",
      "claim": "Suppose, for contradiction, that $f$ does not vanish identically; since $f \\ge 0$, this gives $c \\in [a,b]$ with $f(c) > 0$, which is [A1]. [assume-contra, given]",
      "step": "1.1",
      "inputs": [
        "assume-contra",
        "given",
        "A1"
      ]
    },
    {
      "id": "thm-nonnegative-continuous-with-zero-integral-vanishes-step-1-2",
      "claim": "By [L2] with $\\eta := f(c)\\cdot 2^{-1} > 0$, fix a real $\\delta > 0$ such that every $x \\in [a,b]$ with $|x-c| < \\delta$ satisfies $|f(x)-f(c)| < f(c)\\cdot 2^{-1}$, hence $f(x) > f(c)\\cdot 2^{-1}$. [A1, L2, L5, choose]",
      "step": "1.2",
      "inputs": [
        "A1",
        "L2",
        "L5",
        "choose"
      ]
    },
    {
      "id": "thm-nonnegative-continuous-with-zero-integral-vanishes-step-2-1",
      "claim": "Put $p := \\max\\{a,\\ c - \\delta\\cdot 2^{-1}\\}$ and $q := \\min\\{b,\\ c + \\delta\\cdot2^{-1}\\}$. Then $a \\le p \\le c \\le q \\le b$, and $[p,q] \\subseteq [a,b]$. [step 1.2, A1, L5, construct]",
      "step": "2.1",
      "inputs": [
        "step 1.2",
        "A1",
        "L5",
        "construct"
      ]
    },
    {
      "id": "thm-nonnegative-continuous-with-zero-integral-vanishes-step-3-1",
      "claim": "$p < q$: indeed $p \\le c \\le q$, and $p = q$ would force $p = c = q$, hence $c = \\max\\{a, c-\\delta\\cdot2^{-1}\\}$ and $c = \\min\\{b, c+\\delta\\cdot 2^{-1}\\}$, so $c = a$ and $c = b$, contradicting $a<b$. [step 2.1, L5]",
      "step": "3.1",
      "inputs": [
        "step 2.1",
        "L5"
      ]
    },
    {
      "id": "thm-nonnegative-continuous-with-zero-integral-vanishes-step-3-2",
      "claim": "Every $x \\in [p,q]$ satisfies $|x - c| \\le \\delta\\cdot 2^{-1} < \\delta$, so $f(x) > f(c)\\cdot2^{-1}$ there by step 1.2. [step 1.2, step 2.1, L5]",
      "step": "3.2",
      "inputs": [
        "step 1.2",
        "step 2.1",
        "L5"
      ]
    },
    {
      "id": "thm-nonnegative-continuous-with-zero-integral-vanishes-step-4-1",
      "claim": "Hence $\\int_p^q f \\ge f(c)\\cdot 2^{-1}\\,(q-p) > 0$ by [L4] and step 3.1. [step 3.1, step 3.2, L1, L4, L5]",
      "step": "4.1",
      "inputs": [
        "step 3.1",
        "step 3.2",
        "L1",
        "L4",
        "L5"
      ]
    },
    {
      "id": "thm-nonnegative-continuous-with-zero-integral-vanishes-step-5-1",
      "claim": "By [L3] and [L4], $\\int_a^b f = \\int_a^p f + \\int_p^q f + \\int_q^b f \\ge \\int_p^q f > 0$, the first and third pieces being $\\ge 0$ because $f \\ge 0$ there, or $0$ when degenerate. [step 4.1, L1, L3, L4, L5]",
      "step": "5.1",
      "inputs": [
        "step 4.1",
        "L1",
        "L3",
        "L4",
        "L5"
      ]
    },
    {
      "id": "thm-nonnegative-continuous-with-zero-integral-vanishes-step-6-1",
      "claim": "This contradicts the hypothesis $\\int_a^b f = 0$, so no such $c$ exists and $f(x) = 0$ for every $x \\in [a,b]$. [step 5.1, given, discharge-contradiction] ∎",
      "step": "6.1",
      "inputs": [
        "step 5.1",
        "given",
        "discharge-contradiction"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "thm-nonnegative-continuous-with-zero-integral-vanishes concerns stipulated functions and points; no empty family, empty sum, or empty choice domain changes its assertion."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Statement includes the zero boundary, and step 1.1 treats or preserves that case."
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "thm-nonnegative-continuous-with-zero-integral-vanishes has no counting, exponent, or unit parameter whose one case changes the proof."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "Statement explicitly assumes distinct ordered endpoints, excluding the degenerate interval before step 1.1."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "Statement specifies the closed or oriented interval convention; step 1.1 handles the endpoint data used by the argument."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Step 1.2 establishes or explicitly fixes the object before the proof chooses or extremizes it."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The Statement of thm-nonnegative-continuous-with-zero-integral-vanishes is not a biconditional, so it has no forward iff direction."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The Statement of thm-nonnegative-continuous-with-zero-integral-vanishes is not a biconditional, so it has no reverse iff direction."
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
    "source": "thm-nonnegative-continuous-with-zero-integral-vanishes",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
    "target": "thm-additivity-over-subintervals",
    "declared_target": "thm-additivity-over-subintervals",
    "target_statement_provenance": "ai-altered",
    "targetPage": "properties-of-the-integral-and-the-working-ftc",
    "targetBatch": "wave11-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-nonnegative-continuous-with-zero-integral-vanishes",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
    "target": "thm-monotonicity-of-the-integral",
    "declared_target": "thm-monotonicity-of-the-integral",
    "target_statement_provenance": "literature-derived",
    "targetPage": "properties-of-the-integral-and-the-working-ftc",
    "targetBatch": "wave11-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-nonnegative-continuous-with-zero-integral-vanishes",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
    "target": "lem-integral-elementary-bounds",
    "declared_target": "lem-integral-elementary-bounds",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-riemann-integral",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-nonnegative-continuous-with-zero-integral-vanishes",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
    "target": "thm-continuous-implies-integrable",
    "declared_target": "thm-continuous-implies-integrable",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-riemann-integral",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-nonnegative-continuous-with-zero-integral-vanishes",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
    "target": "lem-integrability-on-a-subinterval",
    "declared_target": "lem-integrability-on-a-subinterval",
    "target_statement_provenance": "literature-derived",
    "targetPage": "properties-of-the-integral-and-the-working-ftc",
    "targetBatch": "wave11-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-nonnegative-continuous-with-zero-integral-vanishes",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
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
    "source": "thm-nonnegative-continuous-with-zero-integral-vanishes",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
    "target": "def-darboux-integral",
    "declared_target": "def-darboux-integral",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-riemann-integral",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-nonnegative-continuous-with-zero-integral-vanishes",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
    "target": "def-oriented-integral",
    "declared_target": "def-oriented-integral",
    "target_statement_provenance": "literature-derived",
    "targetPage": "properties-of-the-integral-and-the-working-ftc",
    "targetBatch": "wave11-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-nonnegative-continuous-with-zero-integral-vanishes",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
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
    "source": "thm-nonnegative-continuous-with-zero-integral-vanishes",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
    "target": "def-interval",
    "declared_target": "def-interval",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-sequences-and-cauchy-completeness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-nonnegative-continuous-with-zero-integral-vanishes",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
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
    "source": "thm-nonnegative-continuous-with-zero-integral-vanishes",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
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

## Relevant current generated-risk rows

```json
[]
```

## Full exact-current text of every cited or declared item (13)

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

### `def-darboux-integral`

````markdown
---
id: def-darboux-integral
kind: definition
title: "The lower and upper Darboux integrals of a bounded $f$ on $[a,b]$ as $\\sup_P L(f,P)$ and $\\inf_P U(f,P)$, Darboux integrability as their equality, and the notation $\\int_a^b f$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-darboux-sums, lem-refinement-inequalities, def-partition-and-refinement, def-bounded-set, def-complete-ordered-field, def-ordered-field, def-infimum, thm-infimum-property, lem-sup-unique, def-interval]
justified_by: []
aliases: [def-riemann-integrable, def-lower-and-upper-integral]
landmark: true
short: "Darboux integral $\\int_a^b f$"
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
    - title: "Darboux integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Darboux_integral"
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, The Riemann Integral"
      url: "https://www.jirka.org/ra/html/sec_rint.html"
    - title: "J. Hunter, Chapter 11: The Riemann Integral"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch11.pdf"
pipeline_run: null
---

## Definition

Let $a < b$ be reals and let $f : [a,b] \to \mathbb{R}$ be bounded
([[def-bounded-set]]). Write $\mathcal{P}$ for the set of all partitions of
$[a,b]$ ([[def-partition-and-refinement]]) and put

$$\mathcal{L} \;:=\; \{\, L(f,P) \ : \ P \in \mathcal{P} \,\}, \qquad \mathcal{U} \;:=\; \{\, U(f,P) \ : \ P \in \mathcal{P} \,\}$$

for the sets of lower and of upper Darboux sums ([[def-darboux-sums]]).

### Both extrema exist

**$\mathcal{P}$ is nonempty**: the pair $(1, t)$ with $t_0 := a$ and $t_k := b$
for $k \ge 1$ is a partition of $[a,b]$, since $a < b$. So $\mathcal{L}$ and
$\mathcal{U}$ are nonempty.

**$\mathcal{L}$ is bounded above and $\mathcal{U}$ is bounded below.** Fix any
$Q \in \mathcal{P}$. By claim 2 of [[lem-refinement-inequalities]],
$L(f,P) \le U(f,Q)$ for every $P \in \mathcal{P}$, so $U(f,Q)$ is an upper bound
of $\mathcal{L}$; and $L(f,Q) \le U(f,P)$ for every $P$, so $L(f,Q)$ is a lower
bound of $\mathcal{U}$.

Hence a nonempty set bounded above has a supremum
([[def-complete-ordered-field]]) and a nonempty set bounded below has an infimum
([[thm-infimum-property]], [[def-infimum]]), each unique ([[lem-sup-unique]]).
The **lower** and **upper Darboux integrals** of $f$ over $[a,b]$ are the real
numbers

$$\underline{\int_a^b} f \;:=\; \sup \mathcal{L} \;=\; \sup_{P} L(f,P), \qquad \overline{\int_a^b} f \;:=\; \inf \mathcal{U} \;=\; \inf_{P} U(f,P) .$$

### The lower integral never exceeds the upper one

$$\underline{\int_a^b} f \;\le\; \overline{\int_a^b} f .$$

Indeed, for each fixed $Q \in \mathcal{P}$ the number $U(f,Q)$ is an upper bound
of $\mathcal{L}$, so the least upper bound satisfies
$\underline{\int_a^b} f \le U(f,Q)$. As $Q$ was arbitrary, $\underline{\int_a^b}f$
is a lower bound of $\mathcal{U}$, and the greatest lower bound satisfies
$\underline{\int_a^b} f \le \overline{\int_a^b} f$ ([[def-infimum]]).

Moreover, for **every** partition $P$,

$$L(f,P) \;\le\; \underline{\int_a^b} f \;\le\; \overline{\int_a^b} f \;\le\; U(f,P) ,$$

the outer inequalities because a member of a set is at most its supremum and at
least its infimum.

### Integrability

$f$ is **Darboux integrable on $[a,b]$**, and on this page simply
**integrable**, when

$$\underline{\int_a^b} f \;=\; \overline{\int_a^b} f ,$$

and then the common value is written

$$\int_a^b f \qquad \text{or} \qquad \int_a^b f(x)\,\mathrm{d}x ,$$

the **integral of $f$ over $[a,b]$**. It is a single well-determined real
number, being the common value of two numbers each of which is unique
([[lem-sup-unique]]). Without the displayed equality the symbol $\int_a^b f$ is
not defined and is never written.

**The inequality above is the whole difficulty.** By the previous paragraph
integrability is *never* a question of one integral exceeding the other, only of
the gap $\overline{\int_a^b} f - \underline{\int_a^b} f \ge 0$ being $0$; and by
[[thm-riemann-criterion]] that gap is $0$ exactly when a single partition can be
found making $U(f,P) - L(f,P)$ small. Whether that is possible is settled
completely, in terms of the discontinuities of $f$, by
[[thm-lebesgue-criterion]].

**"Riemann integrable" means the same thing here.** The definition above is
Darboux's. Riemann's own definition, in terms of tagged partitions of small
mesh, is [[def-tagged-partition-and-riemann-sum]], and the two define the same
class of functions with the same integral by [[thm-darboux-equals-riemann]].
Until that theorem is proved the two phrases are kept apart; after it they are
used interchangeably, as they are throughout the literature.

## Remarks

- **The supremum is over all partitions, and nothing is selected.** Both
  $\mathcal{L}$ and $\mathcal{U}$ are sets determined by $f$ and $[a,b]$ alone,
  and $\sup$ and $\inf$ are canonical, so no choice principle is involved in
  forming either integral. Where a choice does enter on this page is recorded in
  [[rem-riemann-integral-choice-ledger]].

- **Why the lower integral is a supremum and not an infimum.** Refining a
  partition can only increase a lower sum and decrease an upper sum
  ([[lem-refinement-inequalities]]), so the lower sums push up towards the
  integral and the upper sums push down towards it. Taking $\inf \mathcal{L}$
  would return the sum over the coarsest partition and would carry no
  information about $f$ beyond its infimum on $[a,b]$.

- **A bounded $f$ always has both integrals; only their equality can fail.** The
  Dirichlet function on $[0,1]$ has lower integral $0$ and upper integral $1$
  ([[fs-bounded-implies-riemann-integrable]]), which is the standard witness that
  the definition above is not vacuous in either direction.
````

### `def-interval`

````markdown
---
id: def-interval
kind: definition
title: "Intervals of $\\mathbb{R}$: the nine order-convex forms, nondegeneracy, and length"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-complete-ordered-field, def-ordered-field, def-real-order, def-bounded-set]
justified_by: []
aliases: []
landmark: true
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
    - title: "Interval (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Interval_(mathematics)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (segments and cells)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §0.3 and §1.1"
      url: "https://www.jirka.org/ra/"
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]], [[def-ordered-field]]) with its order
([[def-real-order]]).

A subset $I \subseteq \mathbb{R}$ is **order-convex** when

$$x, y \in I \text{ and } x \le z \le y \;\Longrightarrow\; z \in I .$$

The **intervals** of $\mathbb{R}$ are the sets of the following nine forms, where
$a, b \in \mathbb{R}$:

| | bounded forms | | one-sided and full forms |
|---|---|---|---|
| $(a,b)$ | $\{x : a < x < b\}$ | $(a,\infty)$ | $\{x : a < x\}$ |
| $[a,b]$ | $\{x : a \le x \le b\}$ | $[a,\infty)$ | $\{x : a \le x\}$ |
| $[a,b)$ | $\{x : a \le x < b\}$ | $(-\infty,b)$ | $\{x : x < b\}$ |
| $(a,b]$ | $\{x : a < x \le b\}$ | $(-\infty,b]$ | $\{x : x \le b\}$ |
| | | $(-\infty,\infty)$ | $\mathbb{R}$ |

An interval is **open** when both of its written endpoints are excluded, that is
for the forms $(a,b)$, $(a,\infty)$, $(-\infty,b)$ and $(-\infty,\infty)$; it is
**closed** when both written endpoints are included, that is for $[a,b]$,
$[a,\infty)$, $(-\infty,b]$ and $(-\infty,\infty)$. The forms $[a,b)$ and
$(a,b]$ are **half-open**.

**The symbols $\pm\infty$ are notation and not elements of $\mathbb{R}$.** They
mark which side carries no endpoint condition at all; the five forms in the right
column are defined by the displayed conditions on $x$ alone, and no arithmetic is
ever performed with $\infty$. This is the same refusal to extend $\mathbb{R}$
silently that [[rem-sup-conventions]] records for suprema.

**Every one of the nine forms is order-convex.** Each is defined by a conjunction
of at most two conditions, each of the shape $a < x$, $a \le x$, $x < b$ or
$x \le b$, and each such condition is inherited by an intermediate point: if
$a < x$ and $x \le z$ then $a < z$, and if $z \le y$ and $y < b$ then $z < b$,
by transitivity of the order ([[def-ordered-field]]). Applying this to whichever
one or two conditions define the form in question gives $z \in I$ whenever
$x, y \in I$ and $x \le z \le y$.

**Bounded intervals.** An interval is **bounded** ([[def-bounded-set]]) exactly
when it is of one of the four forms in the left column: for those, $a$ is a lower
bound and $b$ an upper bound. The other five forms are unbounded, on the side or
sides written with $\infty$; the verification is in the remarks below.

**Nondegeneracy.** An interval is **degenerate** when it has at most one element,
and **nondegenerate** when it has at least two. For the four bounded forms with
endpoints $a$ and $b$:

- $[a,b]$ is nonempty exactly when $a \le b$, and it is nondegenerate exactly
  when $a < b$. It is the singleton $\{a\}$ when $a = b$.
- $(a,b)$, $[a,b)$ and $(a,b]$ are nonempty exactly when $a < b$, and then each
  is nondegenerate.

The only assertion here that is not immediate from the defining conditions is
that $a < b$ makes $(a,b)$ nonempty with at least two points. It holds because
$a < (a+b)/2 < b$, which follows from $a < b$ by adding $a$, respectively $b$, to
both sides and halving ([[def-ordered-field]]); repeating the halving inside
$(a, (a+b)/2)$ produces a second point.

**Closed bounded intervals.** These are the sets $[a,b]$ with $a \le b$, which is
exactly the condition making them nonempty. They are the intervals the nested
interval property is stated for, and the phrase *closed bounded interval* always
carries the hypothesis $a \le b$ in this library.

**Length.** The **length** of a bounded interval presented by its endpoints
$a \le b$ is

$$\ell = b - a \;\ge\; 0 .$$

Length is attached to the presentation by endpoints and is not recovered from the
set: $(a,b)$, $[a,b)$ and $(a,b]$ are all empty when $a = b$, and so is
$(c,c)$ for any other $c$, while each of these presentations has length $0$, so
nothing inconsistent arises; but the endpoints are named explicitly at every
point where a length is used in this library, and never inferred from the set.
Unbounded intervals are assigned no length.

## Remarks

- **Why the five unbounded forms really are unbounded.** Take $[a,\infty)$ and
  suppose $u \in \mathbb{R}$ were an upper bound of it. The element
  $x = a + |u - a| + 1$ satisfies $x \ge a$, so $x \in [a,\infty)$, and
  $x \ge a + (u - a) + 1 = u + 1 > u$, since $|t| \ge t$ ([[lem-of-abs-value]])
  and $1 > 0$ ([[cor-of-one-positive]]). That contradicts $x \le u$. The same
  computation with $a$ replaced by any element of $(a,\infty)$ handles the open
  form, and reflecting through the origin handles $(-\infty,b)$ and
  $(-\infty,b]$; $\mathbb{R}$ itself is unbounded on both sides for the same
  reason. Note that this uses no Archimedean property: it is the failure of a
  *single* bound, not the cofinality of the naturals.

- **The converse classification is not asserted here.** It is true that every
  order-convex subset of $\mathbb{R}$ is empty or one of the nine forms, and the
  proof runs through suprema and infima, but nothing in this library needs it and
  it is not proved anywhere here. What is used is only the direction proved
  above: each of the nine forms is order-convex.

- **Degenerate intervals are kept, not excluded.** $[a,a] = \{a\}$ and
  $(a,a) = \emptyset$ are intervals under this definition. Excluding them would
  force a nonemptiness hypothesis into every statement that produces an interval,
  and the nested interval property is a good illustration: its conclusion is that
  the intersection is nonempty, and in the equality case the intersection is the
  degenerate interval $[a,a]$, which is exactly the single point.
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

### `def-oriented-integral`

````markdown
---
id: def-oriented-integral
kind: definition
title: "The integral with oriented limits: $\\int_a^a f := 0$ and $\\int_b^a f := -\\int_a^b f$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-darboux-integral, def-partition-and-refinement, def-darboux-sums, def-bounded-set, def-interval]
justified_by: []
aliases: [def-oriented-limits-of-integration]
landmark: true
short: "oriented limits $\\int_b^a f = -\\int_a^b f$"
verification:
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  precheck: n/a
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Encyclopedia of Mathematics, Integral calculus"
      url: "https://encyclopediaofmath.org/wiki/Integral_calculus"
pipeline_run: null
---

## Definition

**Why this item is first.** The published definition of the integral does not
cover this page. [[def-darboux-integral]] is stated for reals $a < b$, because
the partitions it quantifies over are those of [[def-partition-and-refinement]],
whose standing hypothesis is $a < b$: with $a = b$ the chain
$a = t_0 < \dots < t_n = b$ is unsatisfiable. So $\int_a^b f$ is an undefined
symbol whenever $a \ge b$, and every additivity statement below would be
ill-formed as it is usually written. This item extends the notation, and nothing
else: the object it names is still the Darboux integral of
[[def-darboux-integral]].

Let $u, v \in \mathbb{R}$ and write

$$[u \wedge v,\ u \vee v] \;:=\; \text{the closed interval with endpoints } u \text{ and } v$$

([[def-interval]]). Let $f$ be a real-valued function whose domain contains that
interval. Say that **$f$ is integrable between $u$ and $v$** when either $u = v$,
or $u \ne v$ and the restriction of $f$ to $[u \wedge v,\ u \vee v]$ is bounded
([[def-bounded-set]]) and Darboux integrable there ([[def-darboux-integral]],
[[def-darboux-sums]]). For such $f$ define

$$\int_u^v f \;:=\; \begin{cases} \text{the Darboux integral of } f \text{ over } [u,v] & \text{if } u < v, \\[2pt] 0 & \text{if } u = v, \\[2pt] -\displaystyle\int_v^u f & \text{if } u > v. \end{cases}$$

**There is nothing to check for consistency.** The three clauses are indexed by
the three cases of trichotomy, $u < v$, $u = v$ and $u > v$, which are mutually
exclusive and exhaustive; no pair of them ever applies to the same $(u,v)$. In
particular the first clause is untouched, so on $u < v$ this is the published
integral verbatim and every published theorem about it applies unchanged.

**The middle clause is a stipulation, not a computation.** It is *not* claimed
that $0$ is a value forced by the $u < v$ definition in any limiting sense; that
definition simply says nothing at $u = v$, and $\int_u^u f := 0$ is what is
written there. It is also unconditional: no hypothesis on $f$ beyond being
defined at $u$ is asked for, since the case $u = v$ never refers to a partition.

### The two consequences used throughout the page

**Antisymmetry, for every pair.** For all reals $u, v$ with $f$ integrable
between them,

$$\int_u^v f \;=\; -\int_v^u f .$$

Indeed if $u < v$ then $v > u$ and the third clause reads
$\int_v^u f = -\int_u^v f$, which rearranges to the display; if $u = v$ both
sides are $0$; and if $u > v$ the third clause is the display itself.

**Absolute values agree.** Consequently
$\bigl|\int_u^v f\bigr| = \bigl|\int_v^u f\bigr|$ for every such pair.

**An obligation recorded here and discharged elsewhere.** With this convention
the additivity identity

$$\int_u^v f \;+\; \int_v^w f \;=\; \int_u^w f$$

holds for **every** arrangement of $u, v, w$ in an interval on which $f$ is
integrable, not only for $u < v < w$. That is a theorem and not part of this
definition; it is proved as the last clause of
[[thm-additivity-over-subintervals]], and nothing on this page uses it before it
is proved there.

## Remarks

- **This is notation, and it is a real notation.** Without it the substitution
  theorem could not be stated with the limits $\varphi(c)$ and $\varphi(d)$ in
  the order the map produces them, since a differentiable $\varphi$ need be
  neither injective nor monotone; and the integral function $x \mapsto \int_a^x f$
  would be undefined at $x = a$.

- **One published inequality is not orientation-invariant, and that is a trap.**
  The estimate $\bigl|\int_u^v f\bigr| \le \int_u^v |f|$ is guaranteed only
  for $u \le v$: at $u > v$ the right-hand side is $-\int_v^u |f| \le 0$ while
  the left-hand side is $\ge 0$, so the inequality fails whenever
  $\int_v^u |f| > 0$. The form valid for every pair is
  $\bigl|\int_u^v f\bigr| \le \bigl|\int_u^v |f|\bigr|$, and this is stated where
  it is proved ([[cor-integrability-of-absolute-values-products-and-lattice-operations]]).

- **Integrability is a property of the unordered pair.** By construction, $f$ is
  integrable between $u$ and $v$ if and only if it is integrable between $v$ and
  $u$, since both refer to the same closed interval; only the sign of the value
  remembers the order.
````

### `fs-nonnegative-integrable-with-zero-integral-vanishes`

````markdown
---
id: fs-nonnegative-integrable-with-zero-integral-vanishes
kind: false-statement
title: "FALSE: a nonnegative Riemann integrable function on $[a,b]$ with $\\int_a^b f = 0$ is identically zero"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-darboux-integral, def-darboux-sums, def-partition-and-refinement, def-dirichlet-and-thomae-functions, thm-dirichlet-and-thomae-continuity-sets, cor-countably-many-discontinuities-integrable, thm-rationals-countable, lem-subset-of-countable, def-countable, lem-q-and-irrationals-dense-r, thm-closure-characterisations-r, def-interior-closure-boundary-r, def-neighbourhood-r, def-continuity-real, lem-finite-sum-laws, def-finite-sum, def-interval, def-bounded-set, def-infimum, def-max-min, def-canonical-natural, lem-of-naturals-positive, def-complete-ordered-field, def-ordered-field, lem-of-add-order, lem-of-sign-rules]
justified_by: []
aliases: []
landmark: false
short: "FALSE: zero integral forces vanishing"
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
    - title: "Thomae's function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Thomae%27s_function"
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "MAT 125B Discussion 3 (UC Davis)"
      url: "https://www.math.ucdavis.edu/~gravner/MAT125B/materials/disc3.pdf"
pipeline_run: null
---

## Statement

**False claim:** if $f : [a,b] \to \mathbb{R}$ is Riemann integrable
([[def-darboux-integral]]) with $f(x) \ge 0$ for every $x \in [a,b]$ and
$\int_a^b f = 0$, then $f(x) = 0$ for every $x \in [a,b]$.

The claim is true under the additional hypothesis that $f$ is continuous, and
that is the version worth remembering; without it the integral simply cannot see
a function that is positive on a null set. Thomae's function on $[0,1]$
([[def-dirichlet-and-thomae-functions]]) is nonnegative, integrable, has
integral $0$, and is positive at **every** rational point of $[0,1]$, of which
there are infinitely many.

## Facts & Assumptions

**Given:** Thomae's function restricted to $[0,1]$, that is $t : [0,1] \to \mathbb{R}$ with $t(x) = 1/\iota(q(x))$ at a rational $x$ with least denominator $q(x) \ge 1$, and $t(x) = 0$ at an irrational $x$ ([[def-dirichlet-and-thomae-functions]], [[def-canonical-natural]]).

[A1] The false claim: a nonnegative Riemann integrable function on a closed bounded interval with distinct endpoints whose integral is $0$ vanishes identically.

[L1] $t(x) = 1/\iota(q(x))$ with $\iota(q(x)) \ge 1 > 0$ at a rational $x$, and $t(x) = 0$ at an irrational $x$; hence $0 \le t(x) \le 1$ everywhere and $t(x) > 0$ at every rational $x$ ([[def-dirichlet-and-thomae-functions]], [[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L2] Thomae's function on $\mathbb{R}$ is continuous at every irrational and discontinuous at every rational ([[thm-dirichlet-and-thomae-continuity-sets]]); a restriction of a function continuous at a point of the smaller domain is continuous there, the same $\delta$ serving a condition quantified over fewer points ([[def-continuity-real]]).

[L3] $\mathbb{Q}$ is countably infinite, and every subset of an at most countable set is at most countable ([[thm-rationals-countable]], [[lem-subset-of-countable]], [[def-countable]]).

[L4] A bounded function on $[a,b]$ with an at most countable set of discontinuities is Riemann integrable ([[cor-countably-many-discontinuities-integrable]], [[def-bounded-set]]).

[L5] The irrationals are dense in $\mathbb{R}$, so every nonempty open interval contains an irrational ([[lem-q-and-irrationals-dense-r]], [[thm-closure-characterisations-r]], [[def-interior-closure-boundary-r]], [[def-neighbourhood-r]]).

[L6] For a partition $P = (n,t^{P})$ of $[0,1]$: $n \ge 1$, $t^{P}_i < t^{P}_{i+1}$, $\Delta_i > 0$, and $I_i = [t^{P}_i, t^{P}_{i+1}] \subseteq [0,1]$ ([[def-partition-and-refinement]], [[def-interval]]).

[L7] $L(t,P) = \sum_{i<n}m_i\Delta_i$ with $m_i = \inf t[I_i]$; $\underline{\int_0^1} t$ is the supremum of the lower sums, $\overline{\int_0^1} t$ the infimum of the upper sums, and the integral is their common value when they agree ([[def-darboux-sums]], [[def-darboux-integral]]).

[L8] A set with a least element has it as its infimum; the supremum of $\{0\}$ is $0$ ([[def-infimum]], [[def-max-min]], [[def-complete-ordered-field]]).

[L9] Finite sums: $\sum_{i<n}0 = 0$ ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L10] Ordered-field arithmetic: the order is total and transitive; a reciprocal of a positive quantity is positive; $0 < 1$ ([[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Refutation

**Proof technique:** direct.

1.1 $t$ is nonnegative and bounded on $[0,1]$, with $0 \le t(x) \le 1$ for every $x$, by [L1]. [given, L1, L10]

1.2 $t$ is continuous at every irrational point of $[0,1]$ by [L2], so its set of discontinuities in $[0,1]$ is contained in $\mathbb{Q} \cap [0,1]$, which is at most countable by [L3]; every subset of it is then at most countable by [L3] as well. [given, L2, L3]

1.3 Separately, and independently of everything below, $t$ does not vanish identically: $2^{-1}$ is a rational point of $[0,1]$, so $t(2^{-1}) > 0$ by [L1] and [L10]. [L1, L10]

2.1 By [L4] applied to $[0,1]$, with $0 < 1$, the function $t$ is Riemann integrable on $[0,1]$. [step 1.1, step 1.2, L4]

2.2 Every lower Darboux sum of $t$ is $0$: let $P$ be a partition of $[0,1]$ and $i < n$; the open interval $(t^{P}_i, t^{P}_{i+1})$ is nonempty by [L6] and contains an irrational $y$ by [L5], and $y \in I_i \subseteq [0,1]$, so $t(y) = 0$ by [L1]. Since $t \ge 0$ by [L1], the value $0$ is the least element of $t[I_i]$ and $m_i = 0$ by [L8]. Hence $L(t,P) = \sum_{i<n}0\cdot\Delta_i = 0$ by [L7] and [L9]. [step 1.1, L1, L5, L6, L7, L8, L9]

3.1 The set of lower sums is therefore $\{0\}$, so $\underline{\int_0^1} t = 0$ by [L8], and since $t$ is integrable by step 2.1 its integral is $\int_0^1 t = 0$ by [L7]. [step 2.1, step 2.2, L7, L8]

4.1 So $t$ is a nonnegative Riemann integrable function on $[0,1]$ with $\int_0^1 t = 0$ that is not identically zero; [A1] fails at $t$ and the claim is false. [step 1.1, step 3.1, step 1.3, A1] ∎

## Remarks

- **The correct statement, and the hypothesis that repairs it.** If $f$ is continuous on $[a,b]$, nonnegative and $\int_a^b f = 0$, then $f \equiv 0$: a point with $f(c) > 0$ would, by continuity, force $f > f(c)\cdot 2^{-1}$ on a whole subinterval, and $\int_a^b f$ would then be at least $f(c)\cdot 2^{-1}$ times the length of that subinterval, by [[lem-integral-elementary-bounds]] applied there. That argument is not carried out here, because the additivity of the integral over subintervals is not available at this point in the reading order; what is asserted by this item is only that the hypothesis of continuity cannot simply be dropped.

- **The exceptional set is exactly the rationals.** $t$ is positive precisely on $\mathbb{Q}\cap[0,1]$, a countable dense set, which is null ([[lem-countable-sets-are-null]]). The integral is blind to a null set of positive values, and the Lebesgue criterion explains why: what governs integrability, and here the value, is the size of the set where the function misbehaves, measured by interval covers ([[thm-lebesgue-criterion]]).

- **Every upper sum, by contrast, is positive.** Each subinterval contains a rational, so $M_i > 0$ for every $i$ and $U(t,P) > 0$ for every partition $P$; the upper integral is nevertheless $0$, since the infimum of a set of positive numbers may be $0$. That is the one place where this example is worth pausing over, and it is the reason the lower sums, not the upper ones, are what step 2.2 computes.
````

### `lem-integrability-on-a-subinterval`

````markdown
---
id: lem-integrability-on-a-subinterval
kind: lemma
title: "A function integrable on $[a,b]$ is integrable on every closed subinterval"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-oriented-integral, def-darboux-integral, thm-riemann-criterion, lem-refinement-inequalities, def-darboux-sums, def-partition-and-refinement, lem-finite-sum-laws, def-finite-sum, def-bounded-set, def-interval]
justified_by: []
aliases: []
landmark: false
short: "integrability passes to subintervals"
proof_strategy: direct
verification:
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  precheck: pass
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Darboux integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Darboux_integral"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, Properties of the Riemann integral"
      url: "https://www.jirka.org/ra/html/sec_rintprop.html"
pipeline_run: null
---

## Statement

Let $a < b$ be reals, let $f : [a,b] \to \mathbb{R}$ be integrable
([[def-darboux-integral]]), and let $c, d$ satisfy

$$a \;\le\; c \;<\; d \;\le\; b .$$

Then the restriction of $f$ to $[c,d]$ is bounded ([[def-bounded-set]]) and
integrable on $[c,d]$.

The degenerate case $c = d$ is not an omission: there $\int_c^c f = 0$ by
[[def-oriented-integral]], and no partition of $[c,d]$ exists to speak of
([[def-partition-and-refinement]]).

## Facts & Assumptions

**Given:** Reals $a < b$, an integrable $f : [a,b] \to \mathbb{R}$, and reals $c, d$ with $a \le c < d \le b$. Write $g$ for the restriction of $f$ to $[c,d]$.

[L1] Riemann's criterion: a bounded function on a closed bounded interval with distinct endpoints is integrable if and only if for every real $\varepsilon > 0$ there is a partition $P$ of that interval with $U(\cdot,P) - L(\cdot,P) < \varepsilon$ ([[thm-riemann-criterion]], [[def-darboux-integral]]).

[L2] For a partition $P$ of $[a,b]$ and a point $p \in [a,b]$, the partition $P + p$ satisfies $\operatorname{pts}(P+p) = \operatorname{pts}(P) \cup \{p\}$ and refines $P$; a refinement of a refinement refines the original, since the point-set inclusions compose ([[def-partition-and-refinement]]).

[L3] If $P'$ refines $P$ then $L(f,P) \le L(f,P') \le U(f,P') \le U(f,P)$ ([[lem-refinement-inequalities]], claim 1).

[L4] For a partition $R = (n,t)$ of an interval and bounded $h$ on it: $L(h,R) = \sum_{i<n} m_i \Delta_i$, $U(h,R) = \sum_{i<n} M_i\Delta_i$ with $m_i = \inf h[I_i]$, $M_i = \sup h[I_i]$, $I_i = [t_i,t_{i+1}]$, $\Delta_i = t_{i+1}-t_i > 0$, and $M_i - m_i \ge 0$ ([[def-darboux-sums]], [[def-partition-and-refinement]], [[def-interval]]).

[L5] Finite sums: additivity, scaling, splitting at an intermediate index with $\sum_{k=m}^{n-1}a_k = \sum_{j<n-m}a_{m+j}$, and monotonicity in the terms, so that a sum of nonnegative terms is at most a sum containing those terms among others ([[def-finite-sum]], [[lem-finite-sum-laws]], clauses 1 to 4).

[L6] A partition $P' = (n',t')$ of $[a,b]$ has $t'$ strictly increasing on indices $\le n'$, hence injective there, so a point of $\operatorname{pts}(P')$ is $t'_j$ for exactly one $j \le n'$; and $j < k$ gives $t'_j < t'_k$ ([[def-partition-and-refinement]]).

[L7] A restriction of a bounded function is bounded: the same $M$ serves fewer points ([[def-bounded-set]]).

## Proof

**Proof technique:** direct.

1.1 $g$ is bounded on $[c,d]$, since $[c,d] \subseteq [a,b]$ and $f$ is bounded on $[a,b]$, integrability presupposing boundedness. [given, L7]

1.2 Let a real $\varepsilon > 0$ be given, and fix a partition $P$ of $[a,b]$ with $U(f,P) - L(f,P) < \varepsilon$. [given, L1, choose]

2.1 Put $P' := (P + c) + d$, a partition of $[a,b]$ refining $P$ whose point set contains $c$ and $d$. [step 1.2, L2, construct]

3.1 By [L3] applied to the pair $(P, P')$, $U(f,P') - L(f,P') \le U(f,P) - L(f,P) < \varepsilon$. [step 1.2, step 2.1, L3]

3.2 Write $P' = (n',t')$ and fix the unique indices $p, q \le n'$ with $t'_p = c$ and $t'_q = d$; then $p < q$, because $c < d$ and $t'$ is increasing on those indices. [step 2.1, L6, choose]

4.1 Define $Q := (q-p,\ s)$ by $s_i := t'_{p+i}$ for $i \le q-p$ and $s_k := d$ for $k \ge q-p$. Then $s_0 = t'_p = c$, $s_{q-p} = t'_q = d$, and $s_i < s_{i+1}$ for $i < q-p$ by [L6], with $q - p \ge 1$; so $Q$ is a partition of $[c,d]$, its $i$-th subinterval is $[t'_{p+i}, t'_{p+i+1}] = I'_{p+i}$ and its $i$-th length is $\Delta'_{p+i}$. [step 3.2, L6, construct]

5.1 For $i < q-p$ the $i$-th subinterval of $Q$ is $I'_{p+i} \subseteq [c,d]$, and $g$ agrees with $f$ there, so the extreme values of $g$ on it are $M'_{p+i}$ and $m'_{p+i}$; hence $U(g,Q) - L(g,Q) = \sum_{i<q-p}\bigl(M'_{p+i} - m'_{p+i}\bigr)\Delta'_{p+i}$ by [L4] and [L5]. [step 4.1, L4, L5]

6.1 Every term $\bigl(M'_j - m'_j\bigr)\Delta'_j$ is nonnegative by [L4], and splitting $\sum_{j<n'}$ first at $p$ and then at $q$ exhibits $\sum_{i<q-p}\bigl(M'_{p+i}-m'_{p+i}\bigr)\Delta'_{p+i}$ as one of the three pieces of $\sum_{j<n'}\bigl(M'_j-m'_j\bigr)\Delta'_j$, the other two being nonnegative; so the displayed sum is at most $U(f,P') - L(f,P')$. [step 5.1, L4, L5]

7.1 Combining, $U(g,Q) - L(g,Q) \le U(f,P') - L(f,P') < \varepsilon$. [step 3.1, step 5.1, step 6.1]

8.1 Since $\varepsilon > 0$ was arbitrary and $g$ is bounded, [L1] applies on $[c,d]$ and $g$ is integrable there. [step 1.1, step 1.2, step 7.1, L1] ∎

## Remarks

- **The one step that is not bookkeeping is the re-indexing.** A partition in this library is a pair $(n,t)$ with a tail convention ([[def-partition-and-refinement]]), not a set of points, so "restrict $P'$ to $[c,d]$" is not a defined operation; step 4.1 writes the restricted list out, shifts its index by $p$ and resets its tail to $d$. Everything else follows from the fact that dropping nonnegative terms from a finite sum cannot increase it.

- **The converse is also true, and is proved separately.** Integrability on $[a,c]$ and on $[c,b]$ gives integrability on $[a,b]$; that direction needs a splice rather than a restriction and is the second half of [[thm-additivity-over-subintervals]].
````

### `lem-integral-elementary-bounds`

````markdown
---
id: lem-integral-elementary-bounds
kind: lemma
title: "If $m \\le f \\le M$ on $[a,b]$ then $m(b-a) \\le L(f,P) \\le \\underline{\\int_a^b} f \\le \\overline{\\int_a^b} f \\le U(f,P) \\le M(b-a)$ for every partition $P$; in particular every constant function is integrable, with $\\int_a^b c = c(b-a)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-darboux-sums, def-darboux-integral, def-partition-and-refinement, lem-finite-sum-laws, def-finite-sum, def-bounded-set, def-infimum, def-complete-ordered-field, def-ordered-field, lem-of-add-order, lem-of-sign-rules, def-max-min, lem-of-abs-value, def-interval]
justified_by: []
aliases: []
landmark: false
short: "elementary bounds on the integral"
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
    - title: "Darboux integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Darboux_integral"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, The Riemann Integral"
      url: "https://www.jirka.org/ra/html/sec_rint.html"
    - title: "J. Hunter, Chapter 11: The Riemann Integral"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch11.pdf"
pipeline_run: null
---

## Statement

Let $a < b$ be reals and let $f : [a,b] \to \mathbb{R}$ satisfy

$$m \;\le\; f(x) \;\le\; M \qquad \text{for every } x \in [a,b],$$

with $m, M$ real. Then $f$ is bounded ([[def-bounded-set]]), so its Darboux sums
and integrals are defined ([[def-darboux-sums]], [[def-darboux-integral]]), and
for **every** partition $P$ of $[a,b]$ ([[def-partition-and-refinement]])

$$m(b-a) \;\le\; L(f,P) \;\le\; \underline{\int_a^b} f \;\le\; \overline{\int_a^b} f \;\le\; U(f,P) \;\le\; M(b-a) .$$

In particular, taking $f$ to be the constant function with value $c$:

$$\int_a^b c \;=\; c\,(b-a) ,$$

the constant function being integrable, with $L(f,P) = U(f,P) = c(b-a)$ for
every partition $P$.

## Facts & Assumptions

**Given:** Reals $a < b$, reals $m \le M$, and $f : [a,b] \to \mathbb{R}$ with $m \le f(x) \le M$ for every $x \in [a,b]$. Let $P = (n,t)$ be a partition of $[a,b]$, with subintervals $I_i$ and lengths $\Delta_i$ for $i < n$.

[L1] $\sum_{i<n}\Delta_i = b - a$, every $\Delta_i > 0$, and $n \ge 1$; each $I_i$ is a nonempty subset of $[a,b]$ ([[def-partition-and-refinement]], [[def-interval]]).

[L2] $m_i = \inf f[I_i]$ and $M_i = \sup f[I_i]$ exist, $L(f,P) = \sum_{i<n}m_i\Delta_i$ and $U(f,P) = \sum_{i<n}M_i\Delta_i$, and $m_i \le f(x) \le M_i$ for $x \in I_i$ ([[def-darboux-sums]]).

[L3] $L(f,P) \le \underline{\int_a^b} f \le \overline{\int_a^b} f \le U(f,P)$ for every partition $P$; $f$ is integrable exactly when the two integrals are equal, and then $\int_a^b f$ is their common value ([[def-darboux-integral]]).

[L4] An infimum is the greatest lower bound and a supremum the least upper bound; a set with a single element has that element as both ([[def-infimum]], [[def-complete-ordered-field]], [[def-max-min]]).

[L5] Finite sums: scaling, monotonicity in the terms, and $\sum_{i<n}\lambda\,\Delta_i = \lambda\sum_{i<n}\Delta_i$ ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L6] Ordered-field arithmetic: multiplying an inequality by a positive quantity preserves it, adding a constant preserves it, and the order is transitive; $|x| \le \max\{|m|,|M|\}$ whenever $m \le x \le M$ ([[lem-of-add-order]], [[lem-of-sign-rules]], [[lem-of-abs-value]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Proof

**Proof technique:** direct.

1.1 $f$ is bounded: $|f(x)| \le \max\{|m|,|M|\}$ for every $x \in [a,b]$ by [L6], so the Darboux sums and integrals of [L2] and [L3] are defined. [given, L6]

1.2 For every $i < n$: $m$ is a lower bound of $f[I_i]$ and $M$ an upper bound, since $I_i \subseteq [a,b]$; the set $f[I_i]$ is nonempty by [L1]. Hence $m \le m_i$ and $M_i \le M$ by [L4]. [given, L1, L2, L4]

1.3 **The constant case, treated on its own.** Suppose in addition that $f$ is the constant function with value $c$, that is $f(x) = c$ for every $x \in [a,b]$; the general argument below does not use this supposition. Then $f[I_i] = \{c\}$ for every $i < n$ by [L1], so $m_i = M_i = c$ by [L4], and $L(f,P) = U(f,P) = \sum_{i<n} c\,\Delta_i = c(b-a)$ by [L5] and [L1]. [L1, L2, L4, L5]

2.1 $L(f,P) \ge m(b-a)$: by step 1.2 and $\Delta_i > 0$ one has $m_i\Delta_i \ge m\Delta_i$ for every $i < n$, so monotonicity and scaling in [L5] give $L(f,P) \ge \sum_{i<n} m\,\Delta_i = m\sum_{i<n}\Delta_i = m(b-a)$ by [L1]. [step 1.2, L1, L5, L6]

2.2 $U(f,P) \le M(b-a)$: the same argument with $M_i \le M$ gives $U(f,P) \le \sum_{i<n}M\,\Delta_i = M(b-a)$. [step 1.2, L1, L5, L6]

3.1 Combining steps 2.1 and 2.2 with the chain of [L3] gives the displayed five-term inequality for every partition $P$. [step 2.1, step 2.2, L3]

4.1 Hence, still under the supposition of step 1.3 that $f$ is constant with value $c$, the set of lower sums and the set of upper sums are both $\{c(b-a)\}$, so $\underline{\int_a^b} f = \overline{\int_a^b} f = c(b-a)$ by [L4], $f$ is integrable, and $\int_a^b c = c(b-a)$ by [L3]. [step 1.3, L3, L4] ∎

## Remarks

- **The five-term chain is the only estimate most of this page needs.** Every integrability proof below produces one partition and controls $U(f,P) - L(f,P)$; the chain then locates both integrals inside an interval of that length, and [[thm-riemann-criterion]] turns the observation into an equivalence.

- **The bounds are sharp, but equality does not characterize constants.** Constant functions show that neither outer coefficient can be improved. Nonconstant functions can also attain equality: for the Dirichlet indicator on $[0,1]$, every partition has $L(f,P) = 0$ and $U(f,P) = 1$, so both outer bounds are equalities.

- **Nonnegativity, as a special case.** If $f \ge 0$ on $[a,b]$ then $m$ may be taken to be $0$, so $\int_a^b f \ge 0$ whenever the integral exists. A nonnegative integrand with vanishing integral need not vanish, however; that is [[fs-nonnegative-integrable-with-zero-integral-vanishes]].
````

### `thm-additivity-over-subintervals`

````markdown
---
id: thm-additivity-over-subintervals
kind: theorem
title: "For $a<c<b$: $f$ is integrable on $[a,b]$ if and only if it is integrable on $[a,c]$ and on $[c,b]$, and then $\\int_a^b f = \\int_a^c f + \\int_c^b f$; with the oriented form for arbitrary $a,b,c$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-integrability-on-a-subinterval, def-oriented-integral, def-darboux-integral, def-darboux-sums, thm-riemann-criterion, def-partition-and-refinement, lem-finite-sum-laws, def-finite-sum, def-bounded-set, def-interval, def-ordered-field, def-complete-ordered-field]
justified_by: []
aliases: [thm-integral-additive-in-the-interval]
landmark: true
short: "additivity over subintervals"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, Properties of the Riemann integral"
      url: "https://www.jirka.org/ra/html/sec_rintprop.html"
    - title: "Encyclopedia of Mathematics, Integral calculus"
      url: "https://encyclopediaofmath.org/wiki/Integral_calculus"
pipeline_run: null
---

## Statement

Let $a < c < b$ be reals and let $f : [a,b] \to \mathbb{R}$ be bounded
([[def-bounded-set]]). Then:

1. $f$ is integrable on $[a,b]$ ([[def-darboux-integral]]) **if and only if** its
   restrictions to $[a,c]$ and to $[c,b]$ are integrable;
2. and in that case
   $$\int_a^b f \;=\; \int_a^c f \;+\; \int_c^b f .$$
3. **Oriented form.** Let $\alpha < \beta$ be reals, let $f : [\alpha,\beta] \to
   \mathbb{R}$ be integrable, and let $u, v, w \in [\alpha,\beta]$ be arbitrary.
   Then, with the convention of [[def-oriented-integral]],
   $$\int_u^v f \;+\; \int_v^w f \;=\; \int_u^w f .$$

Claim 3 is where [[def-oriented-integral]] earns its place: it holds for every
arrangement of the three points, including the degenerate ones, and it is the
form used everywhere below.

## Facts & Assumptions

**Given:** Reals $a < c < b$ and a bounded $f : [a,b] \to \mathbb{R}$; and, for claim 3, reals $\alpha < \beta$, an integrable $f : [\alpha,\beta] \to \mathbb{R}$ and points $u,v,w \in [\alpha,\beta]$. Let a real $\varepsilon > 0$ be given.

[L1] Riemann's criterion on any closed bounded interval with distinct endpoints ([[thm-riemann-criterion]]).

[L2] A function integrable on $[p,q]$ is integrable on every $[p',q'] \subseteq [p,q]$ with $p' < q'$ ([[lem-integrability-on-a-subinterval]]).

[L3] For a partition $R = (n,t)$ and bounded $h$: $L(h,R) = \sum_{i<n}m_i\Delta_i$, $U(h,R) = \sum_{i<n}M_i\Delta_i$, and $L(h,R) \le \underline{\int} h \le \overline{\int} h \le U(h,R)$, the integral being the common value of the two when they agree ([[def-darboux-sums]], [[def-darboux-integral]]).

[L4] A partition of $[p,q]$ is a pair $(n,t)$ with $n \ge 1$, $t_0 = p$, $t_i < t_{i+1}$ for $i < n$ and $t_k = q$ for $k \ge n$; its subintervals are $[t_i,t_{i+1}]$ for $i<n$ ([[def-partition-and-refinement]], [[def-interval]]).

[L5] Finite sums split at an intermediate index, with $\sum_{k=p}^{q-1}x_k = \sum_{j<q-p}x_{p+j}$ ([[def-finite-sum]], [[lem-finite-sum-laws]], clause 3).

[L6] With oriented limits, $\int_v^u h = -\int_u^v h$ and $\int_u^u h = 0$ ([[def-oriented-integral]]).

[L7] Ordered-field arithmetic: adding a constant preserves an inequality, the order is total and transitive, and a real of absolute value below every positive real is $0$ ([[def-ordered-field]], [[def-complete-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 **Claim 1, forward.** If $f$ is integrable on $[a,b]$ then, since $a < c$ and $c < b$, [L2] gives integrability on $[a,c]$ and on $[c,b]$. [L2]

1.2 **The splice.** Let $P_1 = (n_1,t^1)$ be a partition of $[a,c]$ and $P_2 = (n_2,t^2)$ one of $[c,b]$. Define $P := (n_1+n_2,\ t)$ by $t_i := t^1_i$ for $i \le n_1$, $t_{n_1+j} := t^2_j$ for $j \le n_2$, and $t_k := b$ for $k \ge n_1+n_2$. The two prescriptions agree at $i = n_1$, where $t^1_{n_1} = c = t^2_0$; and $t_0 = a$, $t_{n_1+n_2} = t^2_{n_2} = b$, with $t_i < t_{i+1}$ for every $i < n_1+n_2$. So $P$ is a partition of $[a,b]$. [L4, construct]

1.3 **Claim 1, converse.** Suppose $f$ is integrable on $[a,c]$ and on $[c,b]$, and use [L1] on each to fix $P_1$ with $U(f,P_1)-L(f,P_1) < \varepsilon\cdot 2^{-1}$ and $P_2$ with $U(f,P_2)-L(f,P_2) < \varepsilon\cdot 2^{-1}$. [L1, choose]

2.1 The first $n_1$ subintervals of $P$ are those of $P_1$ and the last $n_2$ are those of $P_2$, with the matching lengths, so by [L3] and the splitting law [L5], $L(f,P) = L(f,P_1) + L(f,P_2)$ and $U(f,P) = U(f,P_1) + U(f,P_2)$. [step 1.2, L3, L4, L5]

3.1 For the splice $P$ of those two, step 2.1 gives $U(f,P) - L(f,P) < \varepsilon$; as $\varepsilon > 0$ was arbitrary and $f$ is bounded, [L1] makes $f$ integrable on $[a,b]$. [step 1.2, step 2.1, step 1.3, L1, L7]

4.1 **Claim 2.** With $P_1$, $P_2$ and $P$ as above, [L3] puts $\int_a^b f$ between $L(f,P)$ and $U(f,P)$, that is between $L(f,P_1)+L(f,P_2)$ and $U(f,P_1)+U(f,P_2)$ by step 2.1; and [L3] applied on $[a,c]$ and on $[c,b]$ puts $\int_a^c f + \int_c^b f$ between the same two numbers. [step 2.1, step 1.3, step 3.1, L3]

5.1 Those two numbers differ by less than $\varepsilon$ by step 1.3, so $\bigl|\int_a^b f - \int_a^c f - \int_c^b f\bigr| < \varepsilon$; as $\varepsilon > 0$ was arbitrary the difference is $0$, which is claim 2. [step 1.3, step 4.1, L7]

6.1 **Claim 3, first the sorted case.** Let $x \le y$ in $[\alpha,\beta]$. Then $\int_\alpha^y f = \int_\alpha^x f + \int_x^y f$. Indeed if $\alpha < x < y$ this is claim 2 applied on $[\alpha,y]$, where $f$ is integrable by [L2]; if $x = \alpha$ the middle term is $0$ by [L6] and the identity is trivial; and if $x = y$ the last term is $0$ by [L6] and the identity is again trivial. [step 5.1, L2, L6]

7.1 Put $F(x) := \int_\alpha^x f$ for $x \in [\alpha,\beta]$, which is defined by [L2] and [L6]. Then $\int_x^y f = F(y) - F(x)$ for **all** $x,y \in [\alpha,\beta]$: for $x < y$ this is step 6.1 rearranged; for $x = y$ both sides are $0$ by [L6]; and for $x > y$ the case already proved gives $\int_y^x f = F(x)-F(y)$, and [L6] negates both sides. [step 6.1, L2, L6, construct]

8.1 **Claim 3.** For arbitrary $u,v,w \in [\alpha,\beta]$, step 7.1 gives $\int_u^v f + \int_v^w f = \bigl(F(v)-F(u)\bigr) + \bigl(F(w)-F(v)\bigr) = F(w)-F(u) = \int_u^w f$. [step 7.1, algebra] ∎

## Remarks

- **The oriented form is not proved by listing six orderings.** Step 7.1 shows that the oriented integral between two points is a *difference of values of one function of one variable*, after which claim 3 is the cancellation $(F(v)-F(u))+(F(w)-F(v)) = F(w)-F(u)$, valid however the three points are arranged and however many of them coincide. The case analysis is confined to the two lines of step 7.1, and no appeal to symmetry is made anywhere.

- **The function $F$ of step 7.1 is the integral function**, and it is given its own item, [[def-the-integral-function]], because the rest of the page is about it. Nothing there re-proves step 7.1; it cites this theorem.

- **Boundedness on the whole of $[a,b]$ is a hypothesis of claim 1 in both directions.** Boundedness on $[a,c]$ and on $[c,b]$ separately does give boundedness on the union, so the converse could be stated with the hypothesis split; it is stated globally because [[def-darboux-sums]] needs it globally to make $U(f,P)$ meaningful for a partition of $[a,b]$.
````

### `thm-continuous-implies-integrable`

````markdown
---
id: thm-continuous-implies-integrable
kind: theorem
title: "A continuous function on $[a,b]$ is Riemann integrable, by Heine-Cantor and Riemann's criterion"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-riemann-criterion, thm-heine-cantor-r, def-uniform-continuity-real, thm-heine-borel-characterisation-r, def-open-cover-r, def-open-and-closed-in-r, def-continuity-real, cor-boundedness-theorem-r, def-partition-and-refinement, def-darboux-sums, def-darboux-integral, lem-finite-sum-laws, def-finite-sum, cor-archimedean-reciprocal, thm-of-archimedean, def-canonical-natural, lem-of-naturals-positive, def-interval, def-bounded-set, lem-of-abs-value, def-complete-ordered-field, def-ordered-field, lem-of-add-order, lem-of-sign-rules]
justified_by: []
aliases: []
landmark: true
short: "continuous $\\Rightarrow$ integrable"
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
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "Heine-Cantor theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Cantor_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, The Riemann Integral"
      url: "https://www.jirka.org/ra/html/sec_rint.html"
    - title: "J. Hunter, Chapter 11: The Riemann Integral"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch11.pdf"
pipeline_run: null
---

## Statement

Let $a < b$ be reals and let $f : [a,b] \to \mathbb{R}$ be continuous on $[a,b]$
([[def-continuity-real]]). Then $f$ is bounded ([[def-bounded-set]]) and Riemann
integrable on $[a,b]$ ([[def-darboux-integral]]).

**The proof gives more than integrability: it gives a partition that works.** For
every real $\varepsilon > 0$ the uniform partition into $N$ parts already
satisfies $U(f,P) - L(f,P) < \varepsilon$, as soon as $N$ is large enough that
$(b-a)/\iota(N)$ is below the $\delta$ that uniform continuity supplies for
$\varepsilon/\bigl(2(b-a)\bigr)$. Uniform continuity is exactly what makes one
$\delta$ serve all $N$ subintervals at once, and it is the only place where the
compactness of $[a,b]$ is used.

## Facts & Assumptions

**Given:** Reals $a < b$ and a function $f : [a,b] \to \mathbb{R}$ continuous on $[a,b]$.

[L1] $[a,b]$ is closed and bounded, hence compact ([[def-interval]], [[def-open-and-closed-in-r]], [[def-bounded-set]], [[thm-heine-borel-characterisation-r]], [[def-open-cover-r]]).

[L2] A continuous real function on a compact subset of $\mathbb{R}$ is bounded there ([[cor-boundedness-theorem-r]]).

[L3] Heine-Cantor: a continuous real function on a compact subset $K$ of $\mathbb{R}$ is uniformly continuous on $K$, that is, for every real $\eta > 0$ there is a real $\delta > 0$ with $|f(x) - f(y)| < \eta$ for all $x, y \in K$ with $|x - y| < \delta$ ([[thm-heine-cantor-r]], [[def-uniform-continuity-real]]).

[L4] For a partition $P = (n,t)$ of $[a,b]$: $\Delta_i = t_{i+1} - t_i > 0$, $\sum_{i<n}\Delta_i = b-a$, and the uniform partition $U_N$ into $N \ge 1$ parts has every $\Delta_i$ equal to $(b-a)/\iota(N)$ ([[def-partition-and-refinement]]).

[L5] $U(f,P) - L(f,P) = \sum_{i<n}(M_i - m_i)\Delta_i$ and $M_i - m_i = \sup\{|f(x)-f(y)| : x, y \in I_i\}$ for bounded $f$ ([[def-darboux-sums]], [[lem-finite-sum-laws]]).

[L6] Riemann's criterion: a bounded $f$ is integrable if and only if for every real $\varepsilon > 0$ there is a partition $P$ with $U(f,P) - L(f,P) < \varepsilon$ ([[thm-riemann-criterion]]).

[L7] For every real $\eta > 0$ there is a natural $N \ge 1$ with $1/\iota(N) < \eta$, and $\iota(N) > 0$ for $N \ge 1$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L8] Finite sums: scaling and monotonicity in the terms ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L9] Ordered-field arithmetic and the absolute value: adding a constant and multiplying by a positive quantity preserve an inequality; the order is total and transitive; $x, y \in [c,d]$ gives $|x - y| \le d - c$ ([[lem-of-abs-value]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]], [[def-interval]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Proof

**Proof technique:** direct.

1.1 $[a,b]$ is compact by [L1], so $f$ is bounded on $[a,b]$ by [L2] and its Darboux sums and integrals are defined. [given, L1, L2]

1.2 Let a real $\varepsilon > 0$ be given and put $\eta := \varepsilon \cdot \bigl(2(b-a)\bigr)^{-1}$, a positive real by [L9] since $b - a > 0$. [given, L9]

2.1 By [L3] applied to the compact set $[a,b]$ with this $\eta$, fix a real $\delta > 0$ such that $|f(x) - f(y)| < \eta$ for all $x, y \in [a,b]$ with $|x - y| < \delta$. [step 1.1, step 1.2, L1, L3, choose]

3.1 By [L7] fix a natural $N \ge 1$ with $1/\iota(N) < \delta \cdot (b-a)^{-1}$, and put $P := U_N = (N,t)$, the uniform partition of $[a,b]$ into $N$ parts. Then every $\Delta_i$ equals $(b-a)/\iota(N) < \delta$ by [L4] and [L9]. [step 2.1, L4, L7, L9, choose]

4.1 For each $i < N$ and all $x, y \in I_i = [t_i, t_{i+1}]$ one has $|x-y| \le \Delta_i < \delta$ by [L9], hence $|f(x) - f(y)| < \eta$ by step 2.1. So $\eta$ is an upper bound of the set $\{|f(x)-f(y)| : x,y \in I_i\}$, and therefore $M_i - m_i \le \eta$ by [L5]. [step 2.1, step 3.1, L5, L9]

5.1 Consequently $U(f,P) - L(f,P) = \sum_{i<N}(M_i - m_i)\Delta_i \le \sum_{i<N}\eta\,\Delta_i = \eta\,(b-a) = \varepsilon \cdot 2^{-1} < \varepsilon$, using [L5], step 4.1, $\Delta_i > 0$, [L8], [L4] and [L9]. [step 4.1, L4, L5, L8, L9]

6.1 Since the real $\varepsilon > 0$ of step 1.2 was arbitrary and step 5.1 produced a partition with $U(f,P) - L(f,P) < \varepsilon$, criterion [L6] applies and $f$ is Riemann integrable on $[a,b]$; it is bounded by step 1.1. [step 1.1, step 1.2, step 5.1, L6] ∎

## Remarks

- **Continuity is sufficient and very far from necessary.** A monotone function may have infinitely many discontinuities and is still integrable ([[thm-monotone-implies-integrable]]); Thomae's function is discontinuous at every rational and integrable ([[cor-countably-many-discontinuities-integrable]]); and the indicator of the Cantor set is discontinuous at uncountably many points and integrable. The exact frontier is [[thm-lebesgue-criterion]].

- **Where compactness enters, and what it buys.** Only through [L1], and then twice: [[cor-boundedness-theorem-r]] to know that the Darboux sums exist at all, and [[thm-heine-cantor-r]] to get one $\delta$ for the whole interval. On a non-compact interval both can fail: $x \mapsto 1/x$ is continuous on $(0,1)$ and unbounded there, so it has no Darboux sums at all.

- **The choice cost is inherited, not incurred.** Nothing in the proof above selects anything from an infinite family; the single use of countable choice behind this theorem sits inside [[thm-heine-cantor-r]], which names it in its own statement. See [[rem-riemann-integral-choice-ledger]].
````

### `thm-monotonicity-of-the-integral`

````markdown
---
id: thm-monotonicity-of-the-integral
kind: theorem
title: "If $f \\le g$ on $[a,b]$ and both are integrable then $\\int_a^b f \\le \\int_a^b g$; and $m(b-a) \\le \\int_a^b f \\le M(b-a)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-linearity-of-the-integral, def-darboux-integral, def-darboux-sums, lem-integral-elementary-bounds, lem-finite-sum-laws, def-finite-sum, def-oriented-integral, def-infimum, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: [thm-integral-is-monotone]
landmark: true
short: "monotonicity of the integral"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Carnegie Mellon 21-269, Riemann integration notes"
      url: "https://www.math.cmu.edu/~gautam/c/2026-269/notes/rint.html"
    - title: "Encyclopedia of Mathematics, Integral calculus"
      url: "https://encyclopediaofmath.org/wiki/Integral_calculus"
pipeline_run: null
---

## Statement

Let $a < b$ be reals and let $f, g : [a,b] \to \mathbb{R}$ be integrable
([[def-darboux-integral]]). Then:

1. **Nonnegativity.** If $f(x) \ge 0$ for every $x \in [a,b]$ then
   $\int_a^b f \ge 0$.
2. **Monotonicity.** If $f(x) \le g(x)$ for every $x \in [a,b]$ then
   $$\int_a^b f \;\le\; \int_a^b g .$$
3. **Two-sided bound.** If $m \le f(x) \le M$ for every $x \in [a,b]$, with
   $m, M$ real, then
   $$m\,(b-a) \;\le\; \int_a^b f \;\le\; M\,(b-a) .$$

**Equality in claim 1 does not force $f$ to vanish.** A nonnegative integrable
function with integral $0$ may be positive at infinitely many points; that is
[[fs-nonnegative-integrable-with-zero-integral-vanishes]] on the previous page's
companion. Under the additional hypothesis of continuity the conclusion does
hold, and that is [[thm-nonnegative-continuous-with-zero-integral-vanishes]]
below.

**Claim 2 is stated for $a < b$ and is not orientation-invariant.** With the
convention of [[def-oriented-integral]], $f \le g$ gives
$\int_u^v f \le \int_u^v g$ when $u \le v$ and the reverse inequality when
$u \ge v$, since both sides change sign together.

## Facts & Assumptions

**Given:** Reals $a < b$ and integrable $f, g : [a,b] \to \mathbb{R}$, with reals $m \le M$ where claim 3 is concerned.

[A1] $f(x) \ge 0$ for every $x \in [a,b]$.

[A2] $f(x) \le g(x)$ for every $x \in [a,b]$.

[A3] $m \le f(x) \le M$ for every $x \in [a,b]$.

[L1] If $m' \le h \le M'$ on $[a,b]$ then $m'(b-a) \le L(h,P) \le \underline{\int_a^b} h \le \overline{\int_a^b} h \le U(h,P) \le M'(b-a)$ for every partition $P$ ([[lem-integral-elementary-bounds]], [[def-darboux-sums]], [[def-finite-sum]], [[lem-finite-sum-laws]]).

[L2] If $h$ is integrable then $\int_a^b h$ is the common value of the lower and upper integrals ([[def-darboux-integral]], [[def-infimum]]).

[L3] Sums and scalar multiples of integrable functions are integrable, and $\int_a^b(\lambda h + \nu k) = \lambda\int_a^b h + \nu\int_a^b k$ ([[thm-linearity-of-the-integral]]).

[L4] Ordered-field arithmetic: adding a constant to both sides of an inequality preserves it, and the order is total and transitive ([[def-ordered-field]], [[def-complete-ordered-field]]). The nonstrict forms follow from the strict ones by adjoining the case of equality.

## Proof

**Proof technique:** direct.

1.1 **Claim 1.** Under [A1] the constant $0$ is a lower bound of $f$ on $[a,b]$, so [L1] applies with $m' := 0$ and gives $\underline{\int_a^b} f \ge 0$. [A1, L1]

1.2 **Claim 2.** Under [A2] the function $h := g - f$ satisfies $h(x) \ge 0$ for every $x \in [a,b]$, and $h$ is integrable with $\int_a^b h = \int_a^b g - \int_a^b f$ by [L3]. [A2, L3, L4]

2.1 Since $f$ is integrable, $\int_a^b f = \underline{\int_a^b} f \ge 0$ by [L2]. [step 1.1, L2]

3.1 By claim 1 applied to $h$, $\int_a^b g - \int_a^b f \ge 0$, that is $\int_a^b f \le \int_a^b g$. [step 2.1, step 1.2, L4]

4.1 **Claim 3.** Under [A3], [L1] applied to $f$ with $m' := m$ and $M' := M$ gives $m(b-a) \le \underline{\int_a^b} f$ and $\overline{\int_a^b} f \le M(b-a)$, and both integrals equal $\int_a^b f$ by [L2]. [A3, L1, L2] ∎

## Remarks

- **Claim 3 is cited, not reproved.** [[lem-integral-elementary-bounds]] already proves the five-term chain for every partition, and it is the item that also computes the integral of a constant, $\int_a^b c = c(b-a)$. Claim 3 is that chain read at an integrable $f$; nothing new is established here.

- **Claim 2 is proved through claim 1 and linearity, and not by comparing Darboux sums.** Comparing sums works too, since $f \le g$ gives $m_i(f) \le m_i(g)$ and $M_i(f) \le M_i(g)$ on every subinterval, but the route through $g - f$ is shorter and uses only results already available. Either way the hypothesis is a pointwise inequality on the *whole* of $[a,b]$; an inequality holding off a finite set gives the same conclusion, by [[lem-changing-a-function-at-finitely-many-points]], and that is a separate statement.

- **What claim 2 is for.** It is what turns a pointwise estimate on an integrand into an estimate on the integral, and every estimate of that shape on this page and its companion is an application of it. No count of those applications is asserted here; the dependency graph of the page is where that is read off.
````

