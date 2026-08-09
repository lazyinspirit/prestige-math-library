## Selection reasons

- high risk (7): 16 declared dependencies; 15 cited facts; boundary-sensitive language

## Target item — `cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval`

Normalized current SHA-256: `7f76ece5976bdefd4d3cd0ff807bbfd19bfc16ff82e829d913452e762c261cf4`

The complete current item follows, including frontmatter:

````markdown
---
id: cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval
kind: counterexample
title: "$x \\mapsto 1/x$ is continuous on $(0,1)$ and not uniformly continuous there, the pairs $1/(k+2)$ and $1/(k+3)$ defeating every $\\delta$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [fs-continuity-implies-uniform-continuity, def-uniform-continuity-real, def-continuity-real, thm-algebra-of-continuous-functions, thm-heine-cantor-r, def-open-cover-r, thm-heine-borel-characterisation-r, def-interval, def-sequence, def-bounded-set, def-open-and-closed-in-r, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, lem-of-abs-value, def-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "$1/x$ not uniformly continuous on $(0,1)$"
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
    - title: "Uniform continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Uniform_continuity"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.4"
      url: "https://www.jirka.org/ra/"
    - title: "J. Lebl, Basic Analysis I, §3.3: Uniform continuity"
      url: "https://www.jirka.org/ra/html/sec_unifcont.html"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** the function $f : (0,1) \to \mathbb{R}$, $f(x) := 1/x$, is
uniformly continuous on $(0,1)$ ([[def-uniform-continuity-real]],
[[def-interval]]).

$f$ is continuous on $(0,1)$ ([[def-continuity-real]]) and its domain is
bounded, so this is the sharpest simple instance of
[[fs-continuity-implies-uniform-continuity]]: neither continuity nor
boundedness of the domain implies uniform continuity, and what
[[thm-heine-cantor-r]] actually needs is compactness, which $(0,1)$ does not
have because it is not closed ([[thm-heine-borel-characterisation-r]]).

The refutation exhibits, for every $\delta > 0$, a pair of points of $(0,1)$
closer than $\delta$ whose $f$-values differ by exactly $1$. The pairs are

$$x_k := \frac{1}{k+2}, \qquad y_k := \frac{1}{k+3} \qquad (k \in \mathbb{N}),$$

and the shift by $2$ and $3$ is not cosmetic: $\mathbb{N}$ contains $0$ here
([[def-sequence]] is $0$-indexed), so $1/k$ is undefined at $k = 0$ and
$1/(k+1)$ leaves $(0,1)$ at $k = 0$.

## Facts & Assumptions

**Given:** The interval $A := (0,1)$ and the function $f : A \to \mathbb{R}$, $f(x) := 1/x$. Naturals are identified with their canonical images in $\mathbb{R}$.

[L1] Uniform continuity on $A$ fails as soon as some real $\varepsilon_0 > 0$ admits, for every real $\delta > 0$, a pair $x, x' \in A$ with $|x - x'| < \delta$ and $|f(x) - f(x')| \ge \varepsilon_0$ ([[def-uniform-continuity-real]], [[def-ordered-field]]).

[L2] Algebra of continuous functions: the identity is continuous on $A$, and the reciprocal of a continuous nowhere-vanishing function is continuous ([[thm-algebra-of-continuous-functions]], [[def-continuity-real]]).

[L3] Archimedean property in reciprocal form: for every real $\eta > 0$ there is a natural $m \ge 1$ with $1/m < \eta$; and $0 < s < t$ implies $0 < 1/t < 1/s$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[lem-of-inverse-positive]]).

[L4] Ordered-field arithmetic: for $k \in \mathbb{N}$ one has $k + 3 > k + 2 \ge 2 > 1 > 0$, so $0 < 1/(k+3) < 1/(k+2) < 1$ and both lie in $(0,1)$; and $(k+2)(k+3) \ge k+2 > 0$ ([[def-ordered-field]], [[def-interval]], [[lem-of-abs-value]]).

[L5] $(0,1)$ is bounded but not closed, hence not compact, so [[thm-heine-cantor-r]] does not apply to it ([[def-bounded-set]], [[def-open-and-closed-in-r]], [[thm-heine-borel-characterisation-r]], [[def-open-cover-r]]).

## Counterexample

**Proof technique:** direct.

1.1 $f$ is continuous on $A = (0,1)$: the identity is continuous there by [L2] and satisfies $x > 0 \ne 0$ for every $x \in A$, so its reciprocal is continuous on $A$ by [L2]. [L2, L4]

1.2 For $k \in \mathbb{N}$ put $x_k := 1/(k+2)$ and $y_k := 1/(k+3)$. By [L4] both lie in $A$, and $f(x_k) = k+2$, $f(y_k) = k+3$. At the first index, $k = 0$, this reads $x_0 = 1/2$ and $y_0 = 1/3$, both in $(0,1)$. [L4]

2.1 The separation of the arguments is $|x_k - y_k| = \dfrac{1}{k+2} - \dfrac{1}{k+3} = \dfrac{1}{(k+2)(k+3)} \le \dfrac{1}{k+2}$, using $(k+2)(k+3) \ge k+2 > 0$ and [L3]; the separation of the values is $|f(x_k) - f(y_k)| = |(k+2) - (k+3)| = 1$. [step 1.2, L3, L4]

3.1 Put $\varepsilon_0 := 1 > 0$ and let a real $\delta > 0$ be given. By [L3] fix a natural $m \ge 1$ with $1/m < \delta$, and take $k := m$. Then $k + 2 > m > 0$, so $1/(k+2) < 1/m < \delta$ by [L3], and step 2.1 gives $|x_k - y_k| \le 1/(k+2) < \delta$ while $|f(x_k) - f(y_k)| = 1 \ge \varepsilon_0$. [step 2.1, L3, choose]

4.1 So no real $\delta > 0$ serves $\varepsilon_0 = 1$, and by [L1] the function $f$ is not uniformly continuous on $(0,1)$, although by step 1.1 it is continuous there: the refuted claim is false. [step 1.1, step 3.1, L1, L5] ∎

## Remarks

- **What this witnesses in the regularity hierarchy.** [[thm-metric-regularity-hierarchy]], transported to real functions by [[lem-real-and-metric-notions-agree]], gives uniformly continuous $\Rightarrow$ continuous and asserts no converse. This item is the witness that the converse fails, and it is one of the two named in the remarks of [[lem-real-and-metric-notions-agree]]; the other, [[ex-x-to-the-beta-separates-the-holder-classes]], separates the Hölder classes below it.

- **The failure is at the missing endpoint, and it is repaired by restoring it.** On $[a,1]$ with $0 < a < 1$ the same formula is uniformly continuous, by [[thm-heine-cantor-r]], since $[a,1]$ is closed and bounded. It is also repaired by an explicit estimate: on $[a,1]$ one has $|1/x - 1/x'| = |x - x'|/(xx') \le |x-x'|/a^{2}$, so $f$ is even Lipschitz there.

- **A second reading of the same fact.** By [[cor-continuous-extension-from-a-dense-subset-r]], a uniformly continuous function on $(0,1)$ would extend continuously to $[0,1]$ and hence be bounded there ([[cor-boundedness-theorem-r]]); $1/x$ is unbounded on $(0,1)$, so it cannot be uniformly continuous. That route is shorter but rests on more, and the computation above is the elementary one.
````

## Wave 8 provenance row for the target

```json
{
  "id": "cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval",
  "statement": "literature-derived",
  "proof": "ai-altered",
  "evidence": "exact-source",
  "urls": [
    "https://www.jirka.org/ra/html/sec_unifcont.html"
  ],
  "rationale": "Lebl states exactly that one over x on (0,1) is not uniformly continuous. The local item uses an explicit zero-based pair sequence.",
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
      "source": "def-uniform-continuity-real",
      "source_section": "Definition",
      "quote": "and uniform continuity is",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-ordered-field",
      "source_section": "Definition",
      "quote": "ordered field",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-algebra-of-continuous-functions",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$, let $f, g : A \\to \\mathbb{R}$, let $\\alpha \\in \\mathbb{R}$ and let $c \\in A$. Suppose $f$ and $g$ are continuous at $c$ ([[def-continuity-real]]). Then:",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-continuity-real",
      "source_section": "Definition",
      "quote": "In the language of neighbourhoods: for every real $\\varepsilon > 0$ there is a real $\\delta > 0$ with $$f\\bigl(A \\cap N_{\\delta}(c)\\bigr) \\;\\subseteq\\; N_{\\varepsilon}\\bigl(f(c)\\bigr).$$ $f$ is **continuous on $A$** when it is continuous at every point of $A$.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L3",
      "source": "cor-archimedean-reciprocal",
      "source_section": "Statement",
      "quote": "Let $F$ be a complete ordered field ([[def-complete-ordered-field]]) and let $\\varepsilon \\in F$ with $\\varepsilon > 0$. Then there is a natural number $n \\ge 1$ such that $$\\frac{1}{n \\cdot 1_F} < \\varepsilon ,$$ where $n \\cdot 1_F$ is the canonical natural of $F$ ([[thm-of-archimedean]]) and $1/(n \\cdot 1_F)$ is its multiplicative inverse ([[def-field]]). As is standard we abbreviate $n \\cdot 1_F$ to $n$ and write the conclusion $1/n < \\varepsilon$. This is the **reciprocal form** of the Archimedean property. [[thm-of-archimedean]] on its own delivers only the assertion that the canonical naturals are cofinal, $x < n \\cdot 1_F$; the form actually used in analysis, that the reciprocals of the naturals get below every positive bound, is the statement above, and it is recorded separately so that no proof has to reconstruct the inversion step in passing.",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-of-archimedean",
      "source_section": "Statement",
      "quote": "for every $x \\in F$ there is a natural number $n \\ge 1$ with $x < n \\cdot 1_F$",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-of-inverse-positive",
      "source_section": "Statement",
      "quote": "positive",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-ordered-field",
      "source_section": "Definition",
      "quote": "ordered field",
      "uses": [
        "1.1",
        "1.2",
        "2.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-interval",
      "source_section": "Definition",
      "quote": "interval",
      "uses": [
        "1.1",
        "1.2",
        "2.1"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-of-abs-value",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \\in F$, with $|x|$ the absolute value ([[def-abs-value]]). Then $$|x| \\ge 0; \\quad |x| = 0 \\iff x = 0; \\quad -|x| \\le x \\le |x|; \\quad |-x| = |x|; \\quad |xy| = |x|\\,|y|;$$ and, for every $c > 0$, one has $|x| < c \\iff -c < x < c$.",
      "uses": [
        "1.1",
        "1.2",
        "2.1"
      ]
    },
    {
      "fact": "L5",
      "source": "thm-heine-cantor-r",
      "source_section": "Statement",
      "quote": "Let $K \\subseteq \\mathbb{R}$ be compact ([[def-open-cover-r]]) and let $f : K \\to \\mathbb{R}$ be continuous on $K$ ([[def-continuity-real]]). Then $f$ is uniformly continuous on $K$ ([[def-uniform-continuity-real]]).",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-bounded-set",
      "source_section": "Definition",
      "quote": "bounded",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-open-and-closed-in-r",
      "source_section": "Definition",
      "quote": "- $U$ is **open** when for every $x \\in U$ there is a real $\\varepsilon > 0$ with $N_\\varepsilon(x) \\subseteq U$. - $F$ is **closed** when its complement $\\mathbb{R} \\setminus F$ is open. - A set is **clopen** when it is both open and closed.",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L5",
      "source": "thm-heine-borel-characterisation-r",
      "source_section": "Statement",
      "quote": "Let $K \\subseteq \\mathbb{R}$. Then $K$ is compact ([[def-open-cover-r]]) if and only if $K$ is closed ([[def-open-and-closed-in-r]]) and bounded ([[def-bounded-set]]).",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-open-cover-r",
      "source_section": "Definition",
      "quote": "Let $K \\subseteq \\mathbb{R}$, with open sets as in [[def-open-and-closed-in-r]]. - An **open cover** of $K$ is a family $\\mathcal{U}$ of open subsets of $\\mathbb{R}$ with $K \\subseteq \\bigcup \\mathcal{U}$. - A **subcover** of $\\mathcal{U}$ is a subfamily $\\mathcal{V} \\subseteq \\mathcal{U}$ that is still an open cover of $K$. - A subfamily $\\mathcal{V} \\subseteq \\mathcal{U}$ is **finite** when $\\mathcal{V} = \\varnothing$ or there are $n \\in \\mathbb{N}$ and members $U_0, \\dots, U_n$ of $\\mathcal{U}$ with $\\mathcal{V} = \\{U_0, \\dots, U_n\\}$; repetitions in the list are allowed and harmless. - $K$ is **compact** when every open cover of $K$ has a finite subcover: for every open cover $\\mathcal{U}$ of $K$, either $K = \\varnothing$ and the empty subfamily covers it, or there are $n \\in \\mathbb{N}$ and $U_0, \\dots, U_n \\in \\mathcal{U}$ with $$K \\subseteq U_0 \\cup \\dots \\cup U_n .$$ - $K$ is **sequentially compact** when every sequence $(x_k)$ of reals with $x_k \\in K$ for all $k \\in \\mathbb{N}$ ([[def-sequence]]) has a subsequence converging ([[def-real-limit]]) to some point of $K$; equivalently, when every such sequence has a subsequential limit ([[def-subsequential-limit]]) that lies in $K$. **Compactness is a property of $K$ alone.** The covering families range over open subsets of $\\mathbb{R}$, not over sets open in some other ambient space, so the notion defined here is compactness of $K$ as a subset of $\\mathbb{R}$. Nothing below relativises it to a smaller ambient field; where an ordered field other than $\\mathbb{R}$ is meant, as in [[fs-closed-bounded-compact-without-completeness]], the whole vocabulary is set up again there for that field. **$\\varnothing$ is compact and sequentially compact.** The empty subfamily covers it, and there is no sequence with all terms in $\\varnothing$, so both conditions hold vacuously.",
      "uses": [
        "4.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "$f$ is continuous on $A = (0,1)$: the identity is continuous there by [L2] and satisfies $x > 0 \\ne 0$ for every $x \\in A$, so its reciprocal is continuous on $A$ by [L2].",
      "step": "1.1",
      "inputs": [
        "L2",
        "L4"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "For $k \\in \\mathbb{N}$ put $x_k := 1/(k+2)$ and $y_k := 1/(k+3)$. By [L4] both lie in $A$, and $f(x_k) = k+2$, $f(y_k) = k+3$. At the first index, $k = 0$, this reads $x_0 = 1/2$ and $y_0 = 1/3$, both in $(0,1)$.",
      "step": "1.2",
      "inputs": [
        "L4"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "The separation of the arguments is $|x_k - y_k| = \\dfrac{1}{k+2} - \\dfrac{1}{k+3} = \\dfrac{1}{(k+2)(k+3)} \\le \\dfrac{1}{k+2}$, using $(k+2)(k+3) \\ge k+2 > 0$ and [L3]; the separation of the values is $|f(x_k) - f(y_k)| = |(k+2) - (k+3)| = 1$.",
      "step": "2.1",
      "inputs": [
        "L3",
        "1.2",
        "L4"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "Put $\\varepsilon_0 := 1 > 0$ and let a real $\\delta > 0$ be given. By [L3] fix a natural $m \\ge 1$ with $1/m < \\delta$, and take $k := m$. Then $k + 2 > m > 0$, so $1/(k+2) < 1/m < \\delta$ by [L3], and step 2.1 gives $|x_k - y_k| \\le 1/(k+2) < \\delta$ while $|",
      "step": "3.1",
      "inputs": [
        "L3",
        "2.1"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "So no real $\\delta > 0$ serves $\\varepsilon_0 = 1$, and by [L1] the function $f$ is not uniformly continuous on $(0,1)$, although by step 1.1 it is continuous there: the refuted claim is false.",
      "step": "4.1",
      "inputs": [
        "L1",
        "1.1",
        "3.1",
        "L5"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The item uses a fixed nonempty real domain or fixed numerical witness, so no empty-domain branch is part of its claim."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "The zero-based witness uses denominators k+2 and k+3, so step 2.1 is defined at k=0."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Step 1.2 proves continuity throughout (0,1) while respecting the excluded endpoint 1."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "Step 2.1 gives distinct positive pairs for every k; their distance tends to zero without ever becoming zero."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "Steps 2.1–4.1 approach the excluded endpoint 0 from inside (0,1), which is exactly the source of non-uniformity."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Step 3.1 chooses k from an Archimedean bound and then uses the explicit pair from step 2.1."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The Statement of `cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval` is not an equivalence, so it has no forward iff direction."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The Statement of `cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval` is not an equivalence, so it has no reverse iff direction."
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
    "source": "cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "fs-continuity-implies-uniform-continuity",
    "declared_target": "fs-continuity-implies-uniform-continuity",
    "target_statement_provenance": "ai-altered",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-uniform-continuity-real",
    "declared_target": "def-uniform-continuity-real",
    "target_statement_provenance": "literature-derived",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity-examples",
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
    "source": "cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "thm-algebra-of-continuous-functions",
    "declared_target": "thm-algebra-of-continuous-functions",
    "target_statement_provenance": "ai-altered",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "thm-heine-cantor-r",
    "declared_target": "thm-heine-cantor-r",
    "target_statement_provenance": "literature-derived",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-open-cover-r",
    "declared_target": "def-open-cover-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "thm-heine-borel-characterisation-r",
    "declared_target": "thm-heine-borel-characterisation-r",
    "target_statement_provenance": "literature-derived",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-bounded-set",
    "declared_target": "def-bounded-set",
    "target_statement_provenance": "literature-derived",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-open-and-closed-in-r",
    "declared_target": "def-open-and-closed-in-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "cor-archimedean-reciprocal",
    "declared_target": "cor-archimedean-reciprocal",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "thm-of-archimedean",
    "declared_target": "thm-of-archimedean",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity-examples",
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
    "source": "cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
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

## Full text of every cited or declared item (21)

### `cor-archimedean-reciprocal`

````markdown
---
id: cor-archimedean-reciprocal
kind: corollary
title: "For every $\\varepsilon > 0$ in a complete ordered field there is a natural $n \\ge 1$ with $1/n < \\varepsilon$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-of-archimedean, lem-of-inverse-positive, def-complete-ordered-field, def-ordered-field, def-field]
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
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 (Thm 1.20(a) and its corollaries)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §5.4 (Prop. 5.4.12, the Archimedean property)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
    - title: "UTSA Mathematics: The Archimedean property"
      url: "https://mathresearch.utsa.edu/wiki/index.php?title=Real_Numbers%3AArchimedean_Property"
---

## Statement

Let $F$ be a complete ordered field ([[def-complete-ordered-field]]) and let
$\varepsilon \in F$ with $\varepsilon > 0$. Then there is a natural number
$n \ge 1$ such that

$$\frac{1}{n \cdot 1_F} < \varepsilon ,$$

where $n \cdot 1_F$ is the canonical natural of $F$ ([[thm-of-archimedean]]) and
$1/(n \cdot 1_F)$ is its multiplicative inverse ([[def-field]]). As is standard
we abbreviate $n \cdot 1_F$ to $n$ and write the conclusion $1/n < \varepsilon$.

This is the **reciprocal form** of the Archimedean property.
[[thm-of-archimedean]] on its own delivers only the assertion that the canonical
naturals are cofinal, $x < n \cdot 1_F$; the form actually used in analysis, that
the reciprocals of the naturals get below every positive bound, is the statement
above, and it is recorded separately so that no proof has to reconstruct the
inversion step in passing.

## Facts & Assumptions

**Given:** A complete ordered field $F$ and an element $\varepsilon \in F$ with $\varepsilon > 0$.

[L1] Archimedean property: for every $x \in F$ there is a natural number $n \ge 1$ with $x < n \cdot 1_F$ ([[thm-of-archimedean]], [[def-complete-ordered-field]]).

[L2] Inverses and order: if $a > 0$ then $a^{-1} > 0$, and if $0 < a < b$ then $0 < b^{-1} < a^{-1}$ ([[lem-of-inverse-positive]], [[def-ordered-field]]).

[L3] Field arithmetic: an element $a$ with $a > 0$ is nonzero by trichotomy, hence has a multiplicative inverse $a^{-1}$, and $(a^{-1})^{-1} = a$ ([[def-field]], [[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Since $\varepsilon > 0$, trichotomy gives $\varepsilon \ne 0$, so $\varepsilon^{-1}$ exists, and $\varepsilon^{-1} > 0$. [given, L2, L3]

2.1 Apply [L1] to $x = \varepsilon^{-1}$: fix a natural number $n \ge 1$ with $\varepsilon^{-1} < n \cdot 1_F$. [step 1.1, L1, choose]

3.1 Chaining the two displayed inequalities gives $0 < \varepsilon^{-1} < n \cdot 1_F$; in particular $n \cdot 1_F > 0$, so $n \cdot 1_F \ne 0$ and $1/(n \cdot 1_F)$ is defined. [step 1.1, step 2.1, L3]

4.1 Apply the second claim of [L2] with $a = \varepsilon^{-1}$ and $b = n \cdot 1_F$: $0 < (n \cdot 1_F)^{-1} < (\varepsilon^{-1})^{-1}$. [step 3.1, L2]

5.1 By [L3], $(\varepsilon^{-1})^{-1} = \varepsilon$, so the natural number $n \ge 1$ fixed in step 2.1 satisfies $1/(n \cdot 1_F) < \varepsilon$, which is the assertion. [step 4.1, L3] ∎

## Remarks

- **Monotonicity gives the eventual form for free.** If $m \ge n \ge 1$ then
  $m \cdot 1_F \ge n \cdot 1_F > 0$, because $k \mapsto k \cdot 1_F$ is strictly
  increasing on the naturals $\ge 1$ ([[lem-of-naturals-positive]]), and so
  $1/(m \cdot 1_F) \le 1/(n \cdot 1_F) < \varepsilon$ by [[lem-of-inverse-positive]]
  again. So the corollary yields not merely one index but a threshold: every
  $m \ge n$ satisfies $1/m < \varepsilon$. That one extra line is what a
  convergence proof needs, and it is left to the caller rather than folded into
  the statement, because the caller usually has a threshold of its own to combine
  it with.

- **Completeness is used only through [[thm-of-archimedean]].** Nothing here
  needs the least-upper-bound property directly. The corollary therefore holds
  verbatim in any Archimedean ordered field, in particular in $\mathbb{Q}$, and
  it fails in a non-Archimedean ordered field, where an infinitesimal
  $\varepsilon > 0$ is below every $1/n$ by construction.

- The equivalence is exact: the reciprocal form implies the cofinal form back
  again, since given $x > 0$ one applies it to $\varepsilon = 1/x$. The two are
  the same property written on the two sides of the inversion, and only the
  direction proved above is used in this library.
````

### `cor-boundedness-theorem-r`

````markdown
---
id: cor-boundedness-theorem-r
kind: corollary
title: "A continuous real function on a compact subset of $\\mathbb{R}$ is bounded"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-continuous-image-of-a-compact-set-r, thm-heine-borel-characterisation-r, def-open-cover-r, def-bounded-set, def-continuity-real, def-max-min, lem-finite-set-has-max, lem-of-abs-value, def-ordered-field]
justified_by: []
aliases: [cor-continuous-on-compact-is-bounded]
landmark: false
short: "boundedness theorem"
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
    - title: "Extreme value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Extreme_value_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Thm 4.15)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.3"
      url: "https://www.jirka.org/ra/"
    - title: "Compact space (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Compact_space"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ be continuous on $A$
([[def-continuity-real]]) and let $K \subseteq A$ be compact
([[def-open-cover-r]]). Then $f$ is **bounded on $K$**: there is a real
$M \ge 0$ with

$$|f(x)| \le M \qquad \text{for every } x \in K .$$

Equivalently, $f[K]$ is a bounded subset of $\mathbb{R}$
([[def-bounded-set]]).

**The hypothesis is compactness of $K$, not of $A$**, and it cannot be relaxed
to boundedness of $K$ or to closedness of $K$ alone: the identity is unbounded
on the closed set $[0,\infty)$, and $x \mapsto 1/x$ is unbounded on the bounded
set $(0,1)$. The general statement of that is
[[thm-compactness-is-necessary-for-evt-and-uniform-continuity]], later on this
page.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, a function $f : A \to \mathbb{R}$ continuous on $A$, and a compact set $K \subseteq A$.

[L1] The image $f[K]$ is compact ([[thm-continuous-image-of-a-compact-set-r]], [[def-continuity-real]], [[def-open-cover-r]]).

[L2] A subset of $\mathbb{R}$ is compact if and only if it is closed and bounded ([[thm-heine-borel-characterisation-r]]).

[L3] A set $S \subseteq \mathbb{R}$ is bounded when there are reals $\ell, u$ with $\ell \le s \le u$ for every $s \in S$ ([[def-bounded-set]]).

[L4] A nonempty finite set of reals has a maximum ([[lem-finite-set-has-max]], [[def-max-min]]), and the order of $\mathbb{R}$ is total ([[def-ordered-field]]).

[L5] Absolute value: $|u| \ge 0$; $|u| = u$ when $u \ge 0$ and $|u| = -u$ when $u \le 0$; and $t \le |t|$ for every real $t$ ([[lem-of-abs-value]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] the set $f[K]$ is compact, and by [L2] it is therefore closed and bounded. [L1, L2]

2.1 By [L3] fix reals $\ell$ and $u$ with $\ell \le z \le u$ for every $z \in f[K]$, and put $M := \max\{\,|\ell|,\ |u|\,\}$, which exists by [L4] and satisfies $M \ge 0$ by [L5]. [step 1.1, L3, L4, L5, choose]

3.1 Let $x \in K$ and put $z := f(x) \in f[K]$, so $\ell \le z \le u$. If $z \ge 0$ then $|z| = z \le u \le |u| \le M$; if $z < 0$ then $|z| = -z \le -\ell \le |\ell| \le M$, using $\ell \le z$ and $-\ell \le |{-\ell}| = |\ell|$. In both cases $|f(x)| \le M$. [step 2.1, L4, L5]

4.1 So $|f(x)| \le M$ for every $x \in K$, with $M \ge 0$ a real; equivalently $f[K]$ is bounded, which is what step 1.1 already recorded. [step 2.1, step 3.1, L3] ∎

## Remarks

- **Boundedness is the weak half of the extreme value theorem.** What compactness gives in addition is that the two bounds are *attained*, which is [[thm-extreme-value-r]]; the supremum of $f[K]$ exists as soon as $f[K]$ is nonempty and bounded above, and the work is entirely in showing that it belongs to $f[K]$.

- **Boundedness of the domain is not what is used.** The proof never looks at $K$ after the first line: the whole content is that the *image* is compact, hence bounded. That is why the same one-line argument gives boundedness of a continuous function on any compact set, however complicated.
````

### `cor-continuous-extension-from-a-dense-subset-r`

````markdown
---
id: cor-continuous-extension-from-a-dense-subset-r
kind: corollary
title: "A uniformly continuous real function on a subset $D \\subseteq \\mathbb{R}$ extends uniquely to a uniformly continuous function on the closure of $D$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-real-and-metric-notions-agree, thm-uniformly-continuous-extension-from-dense, thm-euclidean-space-complete, def-complete-metric-space, def-uniform-continuity-real, def-continuity-real, def-metric-interior-closure-boundary, def-interior-closure-boundary-r, thm-closure-characterisations-r, def-open-and-closed-in-r, def-isometry-and-metric-embedding, lem-real-line-is-a-metric-space, def-metric-ball, def-neighbourhood-r, def-metric-space, def-metric-uniform-continuity, def-metric-continuity]
justified_by: []
aliases: [cor-dense-extension-r]
forward_refs: [cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval]
landmark: true
short: "continuous extension from a dense subset"
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
    - title: "Uniform continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Uniform_continuity"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Exercise 4.13)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.4"
      url: "https://www.jirka.org/ra/"
    - title: "MIT 18.100, Practice Final 3"
      url: "https://math.mit.edu/classes/18.100/Practice-Final-3.18.100.pdf"
pipeline_run: null
---

## Statement

Let $D \subseteq \mathbb{R}$ be nonempty and let $f : D \to \mathbb{R}$ be
uniformly continuous on $D$ ([[def-uniform-continuity-real]]). Write
$\overline{D}$ for the closure of $D$ in $\mathbb{R}$
([[def-interior-closure-boundary-r]]). Then:

1. there is a **uniformly continuous** $g : \overline{D} \to \mathbb{R}$ with
   $g(x) = f(x)$ for every $x \in D$;
2. $g$ is the **only** continuous function $\overline{D} \to \mathbb{R}$
   extending $f$ ([[def-continuity-real]]).

**Uniform continuity is what is needed, and continuity is not enough.** The
function $x \mapsto 1/x$ is continuous on $D = (0,1)$, whose closure is $[0,1]$,
and no continuous $g : [0,1] \to \mathbb{R}$ extends it, since a continuous
function on the compact set $[0,1]$ is bounded ([[cor-boundedness-theorem-r]])
while $1/x$ is not bounded on $(0,1)$. By this corollary, $x \mapsto 1/x$ is
therefore not uniformly continuous on $(0,1)$.

**This is the metric extension theorem, read through the dictionary.** The work
is done by [[thm-uniformly-continuous-extension-from-dense]], applied to the
metric space $X := \overline{D}$ with the subspace metric, its dense subset $D$,
and the complete target $(\mathbb{R}, d_{\mathbb{R}})$
([[thm-euclidean-space-complete]]); [[lem-real-and-metric-notions-agree]]
translates the hypothesis and the conclusion between the two vocabularies. The
extension is *constructed* there and not selected, so no choice principle enters
through it.

**Why later pages need exactly this.** The exponential and the power functions
are defined on $\mathbb{Q}$ first and then extended to $\mathbb{R}$, and the
extension step is this corollary with $D$ the rationals of an interval; that is
the use for which it is stated here rather than inside an example.

## Facts & Assumptions

**Given:** A nonempty set $D \subseteq \mathbb{R}$ and a function $f : D \to \mathbb{R}$ uniformly continuous on $D$; $X := \overline{D}$ with the subspace metric $d_X$ of $d_{\mathbb{R}}(x,y) = |x-y|$.

[L1] The usual metric of $\mathbb{R}$, its subspace metrics, and its open balls $B(x,r) = (x-r,x+r) = N_r(x)$ ([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]], [[def-metric-ball]], [[def-metric-space]], [[def-neighbourhood-r]]).

[L2] Closure in $\mathbb{R}$: $x \in \overline{D}$ exactly when $N_r(x) \cap D \ne \varnothing$ for every real $r > 0$ ([[thm-closure-characterisations-r]], [[def-interior-closure-boundary-r]], [[def-open-and-closed-in-r]]).

[L3] Density in a metric space: $A \subseteq X$ is dense in $X$ when every point of $X$ is adherent to $A$, that is when every ball of $X$ around a point of $X$ meets $A$ ([[def-metric-interior-closure-boundary]]).

[L4] $(\mathbb{R}, d_{\mathbb{R}})$ is a complete metric space ([[thm-euclidean-space-complete]], [[def-complete-metric-space]]).

[L5] Extension theorem: if $A$ is dense in a metric space $X$, if $Y$ is complete and if $h : A \to Y$ is uniformly continuous, then there is a uniformly continuous $g : X \to Y$ with $g|_A = h$, and $g$ is the only continuous map $X \to Y$ extending $h$ ([[thm-uniformly-continuous-extension-from-dense]], [[def-metric-uniform-continuity]], [[def-metric-continuity]]).

[L6] Dictionary: for $S \subseteq \mathbb{R}$ with the subspace metric, continuity and uniform continuity of a function $S \to \mathbb{R}$ in the senses of [[def-continuity-real]] and [[def-uniform-continuity-real]] coincide with the metric-space senses ([[lem-real-and-metric-notions-agree]], clauses 1 and 2).

## Proof

**Proof technique:** direct.

1.1 Put $X := \overline{D}$ with the subspace metric $d_X$, so $d_X(x,y) = |x-y|$ for $x,y \in X$; then $D \subseteq X$, and the subspace metric that $D$ inherits from $X$ is again $d(x,y) = |x-y|$, the same one it inherits from $\mathbb{R}$. $X$ is nonempty, since $D$ is and $D \subseteq \overline{D}$. [L1, L2]

2.1 **$D$ is dense in the metric space $X$.** Let $x \in X$ and let $r > 0$ be real. By [L2] there is $t \in N_r(x) \cap D$, and $t \in D \subseteq X$, so $t$ lies in the ball $B_X(x,r) = N_r(x) \cap X$ of $X$ ([L1]) and in $D$. Hence every ball of $X$ around a point of $X$ meets $D$, which by [L3] says $D$ is dense in $X$. [step 1.1, L1, L2, L3]

2.2 **Transport of the hypothesis.** By [L6], applied to $S := D$, the uniform continuity of $f$ on $D$ in the sense of [[def-uniform-continuity-real]] is uniform continuity of $f : (D, d_D) \to (\mathbb{R}, d_{\mathbb{R}})$ as a map of metric spaces. [step 1.1, L6]

3.1 By [L4] the target $(\mathbb{R}, d_{\mathbb{R}})$ is complete, so [L5] applies with $A := D$, this $X$, $Y := \mathbb{R}$ and $h := f$: there is a uniformly continuous $g : X \to \mathbb{R}$ with $g(x) = f(x)$ for every $x \in D$, and $g$ is the only continuous map $X \to \mathbb{R}$ extending $f$. [step 2.1, step 2.2, L4, L5]

4.1 **Transport of the conclusion.** By [L6], applied to $S := X = \overline{D}$, uniform continuity of $g$ as a map of metric spaces is uniform continuity of $g$ on $\overline{D}$ in the sense of [[def-uniform-continuity-real]], and continuity as a map of metric spaces is continuity on $\overline{D}$ in the sense of [[def-continuity-real]]. So $g$ is uniformly continuous on $\overline{D}$, extends $f$, and is the unique continuous extension of $f$ to $\overline{D}$: claims 1 and 2. [step 3.1, L6] ∎

## Remarks

- **Uniqueness needs only continuity, and it needs density.** Two continuous functions on $\overline{D}$ agreeing on $D$ agree everywhere, because $D$ is dense; that is the uniqueness half of [[thm-uniformly-continuous-extension-from-dense]] and it is why claim 2 quantifies over continuous extensions rather than over uniformly continuous ones. On a set where $D$ is not dense the conclusion is simply false: any values may be assigned off $\overline{D}$.

- **The extension is uniformly continuous, not merely continuous**, and with the same modulus in the following sense: any $\delta$ that works for $f$ on $D$ and a given $\varepsilon$ works for $g$ on $\overline{D}$ and any $\varepsilon' > \varepsilon$. That refinement is not asserted here; what is asserted is what [[thm-uniformly-continuous-extension-from-dense]] proves.

- **The same conclusion, reached directly.** That $x \mapsto 1/x$ is not uniformly continuous on $(0,1)$ is proved on the companion page by exhibiting the pairs of points that defeat every $\delta$ ([[cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval]]); that item is named here for orientation only, and nothing in this corollary rests on it.

- **A special case worth naming.** If $D$ is already closed then $\overline{D} = D$ ([[thm-closure-characterisations-r]]) and the corollary says nothing. Its content is entirely about the points of $\overline{D} \setminus D$, which is where the values have to be created.
````

### `def-bounded-set`

````markdown
---
id: def-bounded-set
kind: definition
title: "Lower bound, bounded below, bounded set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-complete-ordered-field]
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
    - title: "Upper and lower bounds (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Upper_and_lower_bounds"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ denotes the complete ordered field
([[def-complete-ordered-field]]) and $S \subseteq \mathbb{R}$ is a subset of it.

The notions **upper bound** and **bounded above** are already fixed by
[[def-complete-ordered-field]] and are only recalled here, never redefined:
$u \in \mathbb{R}$ is an *upper bound* of $S$ if $s \le u$ for all $s \in S$, and
$S$ is *bounded above* if it has at least one upper bound. The dual notions are:

- $\ell \in \mathbb{R}$ is a **lower bound** of $S$ if $\ell \le s$ for all $s \in S$.
- $S$ is **bounded below** if it has at least one lower bound.
- $S$ is **bounded** if it is both bounded above and bounded below, that is, if
  there are $\ell, u \in \mathbb{R}$ with $\ell \le s \le u$ for every $s \in S$.

## Remarks

- A bound is an element of $\mathbb{R}$ and is not required to lie in $S$. A
  bound that does lie in $S$ is a maximum or a minimum ([[def-max-min]]), and
  that is a strictly stronger condition ([[fs-sup-belongs-to-set]]).
- Bounds come in half-lines: if $\ell$ is a lower bound of $S$ then so is every
  $\ell'' \le \ell$, and if $u$ is an upper bound then so is every $u'' \ge u$.
  Consequently a set that has one bound of a given kind has infinitely many, and
  the interesting question is whether the collection of them has a best element,
  which is what a supremum ([[def-complete-ordered-field]]) or an infimum
  ([[def-infimum]]) is.
- Bounded above and bounded below are independent conditions. The set
  $A = \{\, n \cdot 1_{\mathbb{R}} : n \ge 1 \,\}$ of canonical naturals of
  $\mathbb{R}$ is bounded below by $0$ ([[lem-of-naturals-positive]]) and is not
  bounded above ([[thm-of-archimedean]]); its reflection $-A$ is bounded above
  and not bounded below ([[lem-reflection]]).
- The empty set is bounded, and vacuously so: every real number is both an upper
  bound and a lower bound of $\emptyset$, since the defining condition quantifies
  over no elements. Having bounds is therefore much weaker than having a least
  upper bound or a greatest lower bound ([[fs-every-set-has-sup]]).
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

### `def-open-and-closed-in-r`

````markdown
---
id: def-open-and-closed-in-r
kind: definition
title: "Open subset of $\\mathbb{R}$ (every point has a neighbourhood inside it), closed subset (complement open), and clopen"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-neighbourhood-r, def-interval, def-complete-ordered-field, def-ordered-field, def-real-order, lem-finite-set-has-max, def-max-min]
justified_by: []
aliases: []
landmark: true
short: "open, closed, clopen in $\\mathbb{R}$"
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
    - title: "Open set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Open_set"
    - title: "Closed set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closed_set"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Def. 2.18)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §7.2"
      url: "https://www.jirka.org/ra/"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Let $U, F \subseteq \mathbb{R}$, with neighbourhoods as in
[[def-neighbourhood-r]].

- $U$ is **open** when for every $x \in U$ there is a real $\varepsilon > 0$
  with $N_\varepsilon(x) \subseteq U$.
- $F$ is **closed** when its complement $\mathbb{R} \setminus F$ is open.
- A set is **clopen** when it is both open and closed.

The whole of the topology of $\mathbb{R}$ developed on this page rests on this
one definition: closedness is *defined* as openness of the complement, and every
other description of a closed set on this page is a theorem
([[thm-closure-characterisations-r]], [[lem-sequential-characterisation-of-closure-r]]).

**$\varnothing$ and $\mathbb{R}$ are clopen.** The condition defining openness
quantifies over the elements of the set, so it holds vacuously for
$\varnothing$; and for $x \in \mathbb{R}$ one has $N_1(x) \subseteq \mathbb{R}$,
so $\mathbb{R}$ is open. Since each of the two is the complement of the other,
each is also closed.

**Every neighbourhood is open.** Let $y \in N_\varepsilon(x)$ and put
$\delta := \varepsilon - |y - x|$, which is $> 0$ because
$y \in N_\varepsilon(x)$. The nesting property of [[def-neighbourhood-r]] gives
$N_\delta(y) \subseteq N_\varepsilon(x)$. So every point of $N_\varepsilon(x)$
has a neighbourhood inside it.

**The four open forms of [[def-interval]] are open sets.** Let $a, b \in
\mathbb{R}$.

- $(a,b)$: for $x$ with $a < x < b$, both $x - a > 0$ and $b - x > 0$, so
  $\delta := \min\{x - a,\ b - x\}$ is a positive real (the minimum of a
  two-element set of reals exists, [[lem-finite-set-has-max]], [[def-max-min]]).
  If $|y - x| < \delta$ then $y > x - \delta \ge x - (x - a) = a$ and
  $y < x + \delta \le x + (b - x) = b$, so $y \in (a,b)$; hence
  $N_\delta(x) \subseteq (a,b)$.
- $(a,\infty)$: for $x > a$ take $\delta := x - a > 0$; then $|y - x| < \delta$
  gives $y > x - \delta = a$.
- $(-\infty,b)$: for $x < b$ take $\delta := b - x > 0$; then $|y - x| < \delta$
  gives $y < x + \delta = b$.
- $(-\infty,\infty) = \mathbb{R}$: already treated above.

**The four closed forms of [[def-interval]] are closed sets.** In each case the
complement is shown open directly.

- $[a,b]$: if $x \notin [a,b]$ then $x < a$ or $x > b$ by trichotomy
  ([[def-ordered-field]]). If $x < a$, take $\delta := a - x > 0$; every
  $y \in N_\delta(x)$ has $y < x + \delta = a$, hence $y \notin [a,b]$. If
  $x > b$, take $\delta := x - b > 0$; every $y \in N_\delta(x)$ has
  $y > x - \delta = b$, hence $y \notin [a,b]$. So
  $\mathbb{R} \setminus [a,b]$ is open.
- $[a,\infty)$: its complement is $(-\infty,a)$, which is open by the previous
  paragraph.
- $(-\infty,b]$: its complement is $(b,\infty)$, which is open.
- $(-\infty,\infty) = \mathbb{R}$: its complement is $\varnothing$, which is
  open.

## Remarks

- **Open and closed are not opposites, and not exhaustive.** A set may be
  neither: the half-open interval $[0,1)$ is neither open nor closed
  ([[fs-every-set-is-open-or-closed]]). A set may be both: $\varnothing$ and
  $\mathbb{R}$ are clopen. The words are inherited from the interval terminology
  of [[def-interval]], and the agreement between the two usages is exactly the
  two lists verified above: an interval called open there is an open set here,
  and an interval called closed there is a closed set here.

- **A clopen set is a disconnection waiting to happen.** If $A$ is clopen and
  both $A$ and $\mathbb{R} \setminus A$ are nonempty, then each of the two is
  its own closure, so the two are separated in the sense of
  [[def-connected-r]] and $\mathbb{R} = A \cup (\mathbb{R} \setminus A)$ is a
  disconnection. Since $\mathbb{R}$ is order-convex it is connected
  ([[thm-connected-subsets-of-r-are-intervals]]), so no such $A$ exists:
  $\varnothing$ and $\mathbb{R}$ are the only clopen subsets of $\mathbb{R}$.

- **The half-open forms are the ones the two lists omit**, and deliberately so:
  $[a,b)$ and $(a,b]$ with $a < b$ are neither open nor closed as subsets of
  $\mathbb{R}$.

- **The radius depends on the point.** Openness asks for *some* $\varepsilon$
  at each point, and that $\varepsilon$ may shrink to nothing as the point
  approaches the edge of the set, as the computation for $(a,b)$ shows: there
  $\delta = \min\{x - a,\ b - x\}$ tends to $0$ as $x$ tends to either endpoint.
  Asking instead for a single $\varepsilon$ that works simultaneously at every
  point of the set is a strictly stronger condition, and it is not what is
  defined here; nothing on this page uses it.
````

### `def-open-cover-r`

````markdown
---
id: def-open-cover-r
kind: definition
title: "Open cover, subcover, compact subset of $\\mathbb{R}$ (every open cover has a finite subcover), and sequentially compact subset"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-open-and-closed-in-r, def-sequence, def-subsequential-limit, def-real-limit]
justified_by: []
aliases: [def-compact-in-r, def-sequentially-compact-in-r]
landmark: true
short: "open cover, compact, sequentially compact"
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
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "Sequentially compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sequentially_compact_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Def. 2.31, 2.32)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §7.4"
      url: "https://www.jirka.org/ra/"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Let $K \subseteq \mathbb{R}$, with open sets as in
[[def-open-and-closed-in-r]].

- An **open cover** of $K$ is a family $\mathcal{U}$ of open subsets of
  $\mathbb{R}$ with $K \subseteq \bigcup \mathcal{U}$.
- A **subcover** of $\mathcal{U}$ is a subfamily $\mathcal{V} \subseteq
  \mathcal{U}$ that is still an open cover of $K$.
- A subfamily $\mathcal{V} \subseteq \mathcal{U}$ is **finite** when
  $\mathcal{V} = \varnothing$ or there are $n \in \mathbb{N}$ and members
  $U_0, \dots, U_n$ of $\mathcal{U}$ with $\mathcal{V} = \{U_0, \dots, U_n\}$;
  repetitions in the list are allowed and harmless.
- $K$ is **compact** when every open cover of $K$ has a finite subcover:
  for every open cover $\mathcal{U}$ of $K$, either $K = \varnothing$ and the
  empty subfamily covers it, or there are $n \in \mathbb{N}$ and
  $U_0, \dots, U_n \in \mathcal{U}$ with
  $$K \subseteq U_0 \cup \dots \cup U_n .$$
- $K$ is **sequentially compact** when every sequence $(x_k)$ of reals with
  $x_k \in K$ for all $k \in \mathbb{N}$ ([[def-sequence]]) has a subsequence
  converging ([[def-real-limit]]) to some point of $K$; equivalently, when every
  such sequence has a subsequential limit ([[def-subsequential-limit]]) that
  lies in $K$.

**Compactness is a property of $K$ alone.** The covering families range over open
subsets of $\mathbb{R}$, not over sets open in some other ambient space, so the
notion defined here is compactness of $K$ as a subset of $\mathbb{R}$. Nothing
below relativises it to a smaller ambient field; where an ordered field other
than $\mathbb{R}$ is meant, as in
[[fs-closed-bounded-compact-without-completeness]], the whole vocabulary is set
up again there for that field.

**$\varnothing$ is compact and sequentially compact.** The empty subfamily covers
it, and there is no sequence with all terms in $\varnothing$, so both conditions
hold vacuously.

## Remarks

- **Why "finite" is spelled out by listing.** A finite subfamily is described
  here as one that can be written $\{U_0, \dots, U_n\}$ with $n \in \mathbb{N}$,
  which is exactly the form every proof on this page produces or consumes: the
  bisection argument of [[thm-heine-borel-r]] produces a one-member list, and
  the arguments of [[lem-compact-implies-closed-and-bounded-r]] consume a list by
  taking a maximum over it ([[lem-finite-set-has-max]]). Since $\mathbb{N}$
  contains $0$, the shortest nonempty list is $\{U_0\}$.

- **The two notions are not defined to be equivalent, and their equivalence is a
  theorem.** For subsets of $\mathbb{R}$ it is
  [[thm-compact-iff-sequentially-compact-r]]; both of its implications run
  through the characterisation of compactness by closed and bounded, and its
  forward implication additionally uses Bolzano-Weierstrass. Neither implication
  is formal.

- **Compactness is not inherited by subsets, but by closed subsets.** A closed
  subset of a compact set is compact, which is immediate from
  [[thm-heine-borel-characterisation-r]] once that is available, whereas
  $(0,1) \subseteq [0,1]$ shows that an arbitrary subset of a compact set need
  not be compact.

- **The empty cover.** If $K \ne \varnothing$ then no open cover of $K$ is
  empty, so the case distinction in the definition of compactness only ever
  matters for $K = \varnothing$; it is written out so that the definition does
  not quietly assume $K$ nonempty.
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

### `def-uniform-continuity-real`

````markdown
---
id: def-uniform-continuity-real
kind: definition
title: "Uniform continuity of $f : A \\to \\mathbb{R}$: one $\\delta$ serving every pair of points of $A$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-continuity-real, def-interval, def-neighbourhood-r, lem-of-abs-value]
justified_by: []
aliases: []
forward_refs: [cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval, cex-x-squared-is-not-uniformly-continuous-on-r]
landmark: true
short: "uniform continuity of a real function"
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
    - title: "Uniform continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Uniform_continuity"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Def. 4.18)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.4"
      url: "https://www.jirka.org/ra/"
    - title: "J. Lebl, Basic Analysis I, §3.3: Uniform continuity"
      url: "https://www.jirka.org/ra/html/sec_unifcont.html"
pipeline_run: null
---

## Definition

Let $A \subseteq \mathbb{R}$ and let $f : A \to \mathbb{R}$. Then $f$ is
**uniformly continuous on $A$** when

$$(\forall \varepsilon > 0)\ (\exists \delta > 0)\ (\forall x, x' \in A)\ \bigl[\ |x - x'| < \delta \ \Longrightarrow\ |f(x) - f(x')| < \varepsilon\ \bigr],$$

with $\varepsilon$ and $\delta$ ranging over the positive reals.

**The whole content is in the order of the quantifiers.** Written out,
continuity on $A$ ([[def-continuity-real]]) is

$$\forall \varepsilon\ \forall c \in A\ \exists \delta\ \forall x \in A ,$$

and uniform continuity is

$$\forall \varepsilon\ \exists \delta\ \forall x' \in A\ \forall x \in A .$$

Moving $\exists \delta$ to the left of the point quantifier is the entire
difference: for continuity the radius may shrink from point to point, for
uniform continuity one radius must serve the whole of $A$ at once. This is the
same distinction, for the same reason, that [[def-metric-uniform-continuity]]
draws for maps of metric spaces.

**Uniform continuity implies continuity.** Given $\varepsilon > 0$, take the
$\delta$ supplied by uniform continuity and, at a point $c \in A$, apply the
condition with $x' := c$: every $x \in A$ with $|x - c| < \delta$ satisfies
$|f(x) - f(c)| < \varepsilon$. So the same $\delta$ witnesses continuity at
every point of $A$ simultaneously. The converse fails, and the failure is not
marginal: [[fs-continuity-implies-uniform-continuity]] refutes it on this page,
and the companion page works two witnesses out in full.

**Uniform continuity is a property of the pair $(f, A)$, not of $f$ alone.** The
same formula may be uniformly continuous on one set and not on another:
$x \mapsto 1/x$ is uniformly continuous on $[1,\infty)$ and not on $(0,1)$, and
$x \mapsto x^{2}$ is uniformly continuous on every bounded interval and not on
$\mathbb{R}$. Restricting the domain therefore never destroys uniform
continuity, since the condition then quantifies over fewer pairs; enlarging it
may.

**The two points are unordered and may coincide.** Nothing above excludes
$x = x'$, at which the implication reads $|f(x) - f(x)| = 0 < \varepsilon$
([[lem-of-abs-value]]) and is automatic, and the condition is symmetric in the
two points because $|x - x'| = |x' - x|$.

## Remarks

- **A single $\delta$, and a picture.** For a uniformly continuous $f$ one may
  slide a rectangle of width $\delta$ and height $2\varepsilon$ along the graph
  and never have the graph leave it through the top or bottom. For a merely
  continuous $f$ the rectangle must be narrowed as one moves, and on
  $x \mapsto 1/x$ over $(0,1)$ it must be narrowed without limit.

- **Neighbourhood form.** The condition says
  $f\bigl(A \cap N_{\delta}(x')\bigr) \subseteq N_{\varepsilon}(f(x'))$ for
  every $x' \in A$, with one $\delta$ ([[def-neighbourhood-r]]). That is
  continuity on $A$ with the radius independent of the centre.

- **On an interval this is the notion the extension theorem needs.** A
  uniformly continuous function on a set $D$ extends to one on the closure of
  $D$ ([[cor-continuous-extension-from-a-dense-subset-r]]); mere continuity does
  not suffice, since $x \mapsto 1/x$ on $(0,1)$ has no continuous extension to
  $[0,1]$ ([[def-interval]]).

- **The two standard witnesses, for orientation.** The converse fails in two
  independent ways, each worked out on the companion page:
  [[cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval]] on a
  bounded domain that is not closed, and
  [[cex-x-squared-is-not-uniformly-continuous-on-r]] on a closed domain that is
  not bounded. Both are named here for orientation only; nothing in this
  definition rests on them.

- **Lipschitz and Hölder conditions are stronger still, and are not redefined
  here.** They are [[def-lipschitz-holder-contraction]] instantiated at
  $A \subseteq \mathbb{R}$ with $d(x,y) = |x-y|$; the dictionary that makes that
  instantiation legitimate, and that transports the implications of
  [[thm-metric-regularity-hierarchy]] to real functions, is
  [[lem-real-and-metric-notions-agree]], immediately below.
````

### `ex-x-to-the-beta-separates-the-holder-classes`

````markdown
---
id: ex-x-to-the-beta-separates-the-holder-classes
kind: example
title: "On $[0,1]$ the function $x^{\\beta}$ is $\\beta$-Hölder and is $\\alpha$-Hölder for no rational $\\alpha > \\beta$, so the Hölder classes are strictly nested"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-lipschitz-holder-contraction, lem-real-and-metric-notions-agree, thm-metric-regularity-hierarchy, def-rational-power, lem-rational-power-monotone, lem-rational-power-laws, thm-nth-roots-exist, def-integer-power, def-uniform-continuity-real, def-continuity-real, def-interval, def-rat-order, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, lem-of-abs-value, def-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "$x^{\\beta}$ separates the Hölder classes"
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
    - title: "Hölder condition (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/H%C3%B6lder_condition"
    - title: "Lipschitz continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lipschitz_continuity"
    - title: "Uniform continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Uniform_continuity"
    - title: "University of Zaragoza thesis on Hölder continuity"
      url: "https://zaguan.unizar.es/record/125531/files/TAZ-TFG-2022-2652.pdf"
    - title: "University of Wisconsin Math 521 exercises"
      url: "https://people.math.wisc.edu/~angenent/521.2016s/index.html"
pipeline_run: null
---

## Example

Let $\beta \in \mathbb{Q}$ with $0 < \beta \le 1$ ([[def-rat-order]]) and let

$$f_{\beta} : [0,1] \to \mathbb{R}, \qquad f_{\beta}(x) := x^{\beta}$$

be the rational power of a nonnegative base ([[def-rational-power]], with the
convention $0^{\beta} = 0$), on the closed bounded interval $[0,1]$
([[def-interval]]). Hölder conditions for a real function on $[0,1]$ are the
metric ones instantiated, by [[lem-real-and-metric-notions-agree]], clause 4:
$g$ is **$\gamma$-Hölder with constant $C$** when
$|g(x) - g(y)| \le C\,|x-y|^{\gamma}$ for all $x, y \in [0,1]$
([[def-lipschitz-holder-contraction]]). Then:

1. **$f_{\beta}$ is $\beta$-Hölder with constant $1$:**
   $$\bigl|x^{\beta} - y^{\beta}\bigr| \;\le\; |x-y|^{\beta} \qquad \text{for all } x, y \in [0,1].$$
2. **$f_{\beta}$ is $\alpha$-Hölder for no rational $\alpha$ with
   $\beta < \alpha \le 1$**: for such an $\alpha$ there is no real $C \ge 0$
   with $|x^{\beta} - y^{\beta}| \le C|x-y|^{\alpha}$ throughout $[0,1]$.
3. **The classes are nested:** if $0 < \beta < \alpha \le 1$ are rational and
   $g : [0,1] \to \mathbb{R}$ is $\alpha$-Hölder with constant $C$, then $g$ is
   $\beta$-Hölder with the same constant $C$.
4. **Hence the nesting is strict**, at every pair of rational exponents
   $0 < \beta < \alpha \le 1$: the $\alpha$-Hölder functions on $[0,1]$ form a
   **proper** subclass of the $\beta$-Hölder ones, $f_{\beta}$ lying in the
   second and not the first. Taking $\alpha = 1$: for rational $0 < \beta < 1$
   the function $f_{\beta}$ is uniformly continuous on $[0,1]$
   ([[def-uniform-continuity-real]]) and is **not** Lipschitz.

**What this witnesses.** [[thm-metric-regularity-hierarchy]] asserts Lipschitz
$\Rightarrow$ uniformly continuous $\Rightarrow$ continuous and $\alpha$-Hölder
$\Rightarrow$ uniformly continuous, and claims no converse; it says so
explicitly. This item supplies the missing witnesses on the real line, and it is
one of the two named in the remarks of [[lem-real-and-metric-notions-agree]].
The other is
[[cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval]], which
separates continuity from uniform continuity.

**Why the exponents are rational.** [[def-rational-power]] defines $a^{r}$ for
rational $r$ only, so this library has no real exponents; that is a limitation
of the ambient toolkit, recorded in [[def-lipschitz-holder-contraction]], and
not of the notion. Exponents above $1$ are excluded there for a reason of
substance: they force constancy
([[thm-holder-exponent-above-one-forces-constancy]]).

## Facts & Assumptions

**Given:** A rational $\beta$ with $0 < \beta \le 1$, the interval $[0,1]$, and $f_{\beta}(x) = x^{\beta}$. Naturals are identified with their canonical images in $\mathbb{R}$.

[L1] Rational powers: $a^{r}$ is defined for $a > 0$ and $r \in \mathbb{Q}$, with $a^{1} = a$ and $a^{q/1} = a^{q}$ agreeing with the integer power; $0^{r} = 0$ for rational $r > 0$; and $1^{r} = 1$ ([[def-rational-power]], [[thm-nth-roots-exist]], [[def-integer-power]], [[lem-rational-power-monotone]]).

[L2] Laws of rational exponents for $a, b > 0$ and $r, s \in \mathbb{Q}$: $a^{r} > 0$; $a^{r+s} = a^{r}a^{s}$; $(ab)^{r} = a^{r}b^{r}$; $a^{-r} = 1/a^{r}$; $(a^{r})^{s} = a^{rs}$. The product law persists for $a, b \ge 0$ when $r > 0$ ([[lem-rational-power-laws]]).

[L3] Monotonicity: for $0 < a < 1$ and rationals $r < s$ one has $a^{r} > a^{s}$; for $a > 1$ and $r < s$ one has $a^{r} < a^{s}$; for $a = 1$ all powers are $1$; and for rational $r > 0$ and $0 < a < b$ one has $a^{r} < b^{r}$ ([[lem-rational-power-monotone]]).

[L4] Hölder conditions for real functions on $[0,1]$ are $|g(x) - g(y)| \le C|x-y|^{\gamma}$ for all $x,y$, and an $\alpha$-Hölder real function with rational $0 < \alpha \le 1$ is uniformly continuous, hence continuous; "Lipschitz" is the case $\gamma = 1$ ([[lem-real-and-metric-notions-agree]], [[def-lipschitz-holder-contraction]], [[thm-metric-regularity-hierarchy]], [[def-uniform-continuity-real]], [[def-continuity-real]]).

[L5] Archimedean property: for every real $\eta > 0$ there is a natural $q \ge 1$ with $1/q < \eta$, and for every real $t$ a natural $n$ with $t < n$; and $0 < s < t$ implies $0 < 1/t < 1/s$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[lem-of-inverse-positive]]).

[L6] Absolute value and order in $\mathbb{R}$: $|u| \ge 0$; $|u| = u$ for $u \ge 0$; the order is total, so two points of $[0,1]$ may be named so that one is $\le$ the other; and $[0,1] = \{\, x : 0 \le x \le 1 \,\}$ ([[lem-of-abs-value]], [[def-ordered-field]], [[def-interval]]).

## Verification

**Proof technique:** direct.

1.1 **For $0 \le t \le 1$ one has $t^{\beta} \ge t$.** If $t = 0$ then $t^{\beta} = 0 = t$ by [L1]; if $t = 1$ then $t^{\beta} = 1 = t$ by [L1]. If $0 < t < 1$ then, when $\beta < 1$, [L3] with $r := \beta < s := 1$ gives $t^{\beta} > t^{1} = t$, and when $\beta = 1$ it is an equality. [L1, L3, L6]

1.2 **Claim 3.** Let $0 < \beta < \alpha \le 1$ be rational and let $g$ satisfy $|g(x) - g(y)| \le C|x-y|^{\alpha}$ on $[0,1]$. For $x, y \in [0,1]$ put $a := |x-y|$, so $0 \le a \le 1$ by [L6]. If $a = 0$ then $a^{\alpha} = a^{\beta} = 0$ by [L1]; if $a = 1$ then both are $1$ by [L1]; and if $0 < a < 1$ then [L3] with $r := \beta < s := \alpha$ gives $a^{\alpha} < a^{\beta}$. In every case $a^{\alpha} \le a^{\beta}$, so $|g(x) - g(y)| \le C a^{\alpha} \le C a^{\beta}$ and $g$ is $\beta$-Hölder with the same constant. [L1, L3, L4, L6]

1.3 **Claim 2, the setup.** Let $\alpha \in \mathbb{Q}$ with $\beta < \alpha \le 1$ and suppose, for contradiction, that some real $C \ge 0$ satisfies $|x^{\beta} - y^{\beta}| \le C|x-y|^{\alpha}$ for all $x, y \in [0,1]$. Taking $x := 1$ and $y := 0$ gives $1 = |1 - 0| \le C \cdot 1 = C$ by [L1], so $C \ge 1 > 0$. Taking $y := 0$ and an arbitrary $x$ with $0 < x \le 1$ gives $x^{\beta} \le C x^{\alpha}$. [L1, L6]

2.1 **Subadditivity: $(u+v)^{\beta} \le u^{\beta} + v^{\beta}$ for all reals $u, v \ge 0$.** If $u + v = 0$ then $u = v = 0$ and both sides are $0$ by [L1]. Otherwise put $s := u+v > 0$, $p := u/s$ and $q := v/s$, so $p, q \ge 0$ and $p + q = 1$, whence $0 \le p \le 1$ and $0 \le q \le 1$. By step 1.1, $p^{\beta} \ge p$ and $q^{\beta} \ge q$, so $p^{\beta} + q^{\beta} \ge p + q = 1$. By the product law of [L2], valid for nonnegative bases since $\beta > 0$, $u^{\beta} = (p s)^{\beta} = p^{\beta}s^{\beta}$ and $v^{\beta} = q^{\beta}s^{\beta}$; hence $u^{\beta} + v^{\beta} = (p^{\beta} + q^{\beta})s^{\beta} \ge s^{\beta} = (u+v)^{\beta}$, using $s^{\beta} > 0$ from [L2]. [step 1.1, L1, L2, L6]

2.2 **Claim 2, the estimate.** Put $\gamma := \alpha - \beta$, a rational with $\gamma > 0$. For $0 < x \le 1$, dividing the inequality of step 1.3 by $x^{\alpha} > 0$ and using [L2] gives $x^{\beta - \alpha} = x^{\beta}x^{-\alpha} \le C$, that is $1/x^{\gamma} \le C$ and hence $x^{\gamma} \ge 1/C > 0$ by [L5]. Applying this at $x := 1/n$ for a natural $n \ge 1$, and using $(1/n)^{\gamma} = 1/n^{\gamma}$ from [L2], gives $n^{\gamma} \le C$ for every natural $n \ge 1$. [step 1.3, L2, L5]

3.1 **Claim 1.** Let $x, y \in [0,1]$; by [L6] name them so that $y \le x$. Put $u := y \ge 0$ and $v := x - y \ge 0$, so $x = u + v$. By step 2.1, $x^{\beta} \le y^{\beta} + (x-y)^{\beta}$, that is $x^{\beta} - y^{\beta} \le (x-y)^{\beta} = |x-y|^{\beta}$. Also $y^{\beta} \le x^{\beta}$: for $y = 0$ this reads $0 \le x^{\beta}$ by [L1] and [L2], and for $0 < y \le x$ it is [L3] with the exponent $\beta > 0$, together with equality when $y = x$. Hence $|x^{\beta} - y^{\beta}| = x^{\beta} - y^{\beta} \le |x-y|^{\beta}$, so $f_{\beta}$ is $\beta$-Hölder with constant $1$. [step 2.1, L1, L2, L3, L4, L6]

3.2 **Claim 2, the contradiction.** By [L5] fix a natural $q \ge 1$ with $1/q < \gamma$, and then a natural $n$ with $C^{q} < n$; since $C^{q} > 0$ we have $n \ge 1$, and since $C \ge 1$ we have $C^{q} \ge 1$ and so $n > 1$. By [L3] with the exponent $1/q > 0$ applied to the bases $C^{q} < n$, and by $(C^{q})^{1/q} = C^{q \cdot (1/q)} = C^{1} = C$ from [L1] and [L2], we get $n^{1/q} > C$; and by [L3] with the base $n > 1$ and the exponents $1/q < \gamma$ we get $n^{\gamma} > n^{1/q} > C$. That contradicts step 2.2, so no such $C$ exists and claim 2 holds. [step 2.2, L1, L2, L3, L5]

4.1 **Claim 4.** Let $0 < \beta < \alpha \le 1$ be rational. Every $\alpha$-Hölder function on $[0,1]$ is $\beta$-Hölder by step 1.2, and $f_{\beta}$ is $\beta$-Hölder by step 3.1 and not $\alpha$-Hölder by step 3.2; so the inclusion of classes is proper. With $\alpha := 1$ and $0 < \beta < 1$: $f_{\beta}$ is $\beta$-Hölder, hence uniformly continuous on $[0,1]$ by [L4], and it is not $1$-Hölder, that is not Lipschitz. [step 3.1, step 1.2, step 3.2, L4] ∎

## Remarks

- **The witness is as concrete as it can be here.** For $\beta = 1/2$ the function is $\sqrt{x}$, and the failure of the Lipschitz condition is the familiar one: $|\sqrt{x} - \sqrt{0}| = \sqrt{x}$ exceeds $C x$ for every $C$ once $x < 1/C^{2}$. Step 2.2 is that computation written for a general rational exponent.

- **Subadditivity is the whole of claim 1**, and it is proved by normalising to $p + q = 1$ and using $t^{\beta} \ge t$ on $[0,1]$. No derivative and no convexity argument is used; neither is available at this point in the reading order.

- **What happens at the two ends of the range.** At $\beta = 1$ the function is the identity, Lipschitz and not $\alpha$-Hölder for any rational $\alpha > 1$ — indeed no nonconstant function is, by [[thm-holder-exponent-above-one-forces-constancy]], which is why [[def-lipschitz-holder-contraction]] stops at $1$. As $\beta$ decreases the class grows, and claim 4 says it grows strictly at every rational step.
````

### `fs-continuity-implies-uniform-continuity`

````markdown
---
id: fs-continuity-implies-uniform-continuity
kind: false-statement
title: "FALSE: every continuous real function is uniformly continuous on its domain"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-continuity-real, def-uniform-continuity-real, thm-heine-cantor-r, thm-algebra-of-continuous-functions, def-interval, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, lem-of-abs-value, def-ordered-field, def-integer-power]
justified_by: []
aliases: []
forward_refs: [cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval, cex-x-squared-is-not-uniformly-continuous-on-r]
landmark: false
short: "FALSE: continuity implies uniform continuity"
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
    - title: "Uniform continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Uniform_continuity"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.4"
      url: "https://www.jirka.org/ra/"
    - title: "J. Lebl, Basic Analysis I, §3.3: Uniform continuity"
      url: "https://www.jirka.org/ra/html/sec_unifcont.html"
pipeline_run: null
---

## Statement

**False claim:** if $A \subseteq \mathbb{R}$ and $f : A \to \mathbb{R}$ is
continuous on $A$ ([[def-continuity-real]]), then $f$ is uniformly continuous on
$A$ ([[def-uniform-continuity-real]]).

**Why it is tempting.** Continuity says that for every $\varepsilon > 0$ and
every point $c$ there is a $\delta > 0$ that works at $c$. It is easy to read
that as producing "a $\delta$", forgetting that the $\delta$ was produced after
$c$ was fixed and may depend on it. Uniform continuity demands one $\delta$
before any point is named, and the two quantifier orders are genuinely
different.

**What is true.** On a **compact** domain the implication does hold, and that is
[[thm-heine-cantor-r]]; the metric-space form is [[thm-heine-cantor-metric]].
Compactness is not a convenience there: for every noncompact bounded
$E \subseteq \mathbb{R}$ there is a continuous function on $E$ that is not
uniformly continuous, which is
[[thm-compactness-is-necessary-for-evt-and-uniform-continuity]]. The witness
below is the smallest familiar instance of that theorem.

## Facts & Assumptions

**Given:** The domain $A := (0,1) = \{\, x \in \mathbb{R} : 0 < x < 1 \,\}$ ([[def-interval]]) and the function $f : A \to \mathbb{R}$, $f(x) := 1/x$. Natural numbers are identified with their canonical images in $\mathbb{R}$.

[L1] Continuity on $A$ and uniform continuity on $A$, in the forms of [[def-continuity-real]] and [[def-uniform-continuity-real]]; in particular, $f$ fails to be uniformly continuous on $A$ as soon as some real $\varepsilon_0 > 0$ admits, for every real $\delta > 0$, a pair $x, x' \in A$ with $|x - x'| < \delta$ and $|f(x) - f(x')| \ge \varepsilon_0$.

[L2] Algebra of continuous functions: the identity is continuous on $A$, and if $q$ is continuous on $A$ and does not vanish there then $1/q$ is continuous on $A$ ([[thm-algebra-of-continuous-functions]]).

[L3] Archimedean property in reciprocal form: for every real $\eta > 0$ there is a natural $k \ge 1$ with $1/k < \eta$; and $0 < s < t$ implies $0 < 1/t < 1/s$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[lem-of-inverse-positive]]).

[L4] Ordered-field arithmetic in $\mathbb{R}$: for a natural $k$, $0 < 1/(k+3) < 1/(k+2) < 1$, so both lie in $(0,1)$; the product $(k+2)(k+3) \ge k+2 \ge 2$; and $|u| \ge 0$ with $|u| = u$ for $u \ge 0$ ([[def-ordered-field]], [[lem-of-abs-value]], [[def-integer-power]]).

## Refutation

**Proof technique:** direct.

1.1 $f$ is continuous on $A$. The identity is continuous on $A$ by [L2] and does not vanish on $A$, since $x > 0$ for $x \in (0,1)$; so $f(x) = 1/x$ is continuous on $A$ by [L2]. [L2, L4]

1.2 For $k \in \mathbb{N}$ put $x_k := 1/(k+2)$ and $y_k := 1/(k+3)$. By [L4] both lie in $(0,1) = A$, and $f(x_k) = k+2$, $f(y_k) = k+3$. Note that $\mathbb{N}$ contains $0$, so the smallest pair is $x_0 = 1/2$ and $y_0 = 1/3$, and no index $k$ produces a point outside $A$. [L4]

2.1 The gap between the arguments is $|x_k - y_k| = 1/(k+2) - 1/(k+3) = 1/\bigl((k+2)(k+3)\bigr) \le 1/(k+2)$, using $(k+2)(k+3) \ge k+2 > 0$ and [L3]. The gap between the values is $|f(x_k) - f(y_k)| = |(k+2) - (k+3)| = 1$. [step 1.2, L3, L4]

3.1 Take $\varepsilon_0 := 1$ and let a real $\delta > 0$ be given. By [L3] there is a natural $m \ge 1$ with $1/m < \delta$; put $k := m$, so $k + 2 > m > 0$ and hence $1/(k+2) < 1/m < \delta$ by [L3]. Then $|x_k - y_k| \le 1/(k+2) < \delta$ while $|f(x_k) - f(y_k)| = 1 \ge \varepsilon_0$. [step 2.1, L3, choose]

4.1 So no $\delta > 0$ serves $\varepsilon_0 = 1$: by [L1] the function $f$ is continuous on $A$ and not uniformly continuous on $A$, and the claim is false. [step 1.1, step 3.1, L1] ∎

## Remarks

- **The domain is bounded, and that is the point.** $(0,1)$ is bounded but not closed, hence not compact ([[thm-heine-borel-characterisation-r]]), so [[thm-heine-cantor-r]] does not apply. The obstruction sits at the missing endpoint $0$: the pairs above crowd towards it, their separation shrinking while the values they take diverge.

- **Unboundedness produces the same failure for a different reason.** $x \mapsto x^{2}$ is continuous on the closed set $\mathbb{R}$ and not uniformly continuous there, the pairs $k+1$ and $k+1+1/(k+1)$ defeating every $\delta$; that witness is [[cex-x-squared-is-not-uniformly-continuous-on-r]] on the companion page, and it shows that closedness alone is no more sufficient than boundedness alone.

- **The witness is worked out in full on the companion page.** [[cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval]] repeats the computation above with the estimates spelled out and records what it witnesses about the regularity hierarchy of [[lem-real-and-metric-notions-agree]].
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

### `lem-real-and-metric-notions-agree`

````markdown
---
id: lem-real-and-metric-notions-agree
kind: lemma
title: "Dictionary: for $A \\subseteq \\mathbb{R}$ with the metric $d(x,y) = |x-y|$, continuity and uniform continuity of $f : A \\to \\mathbb{R}$ agree with the metric-space notions, the Lipschitz and Hölder conditions are the metric ones instantiated, and a subset of $\\mathbb{R}$ is compact in the open-cover sense of $\\mathbb{R}$ exactly when it is a compact metric subspace"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-continuity-real, def-uniform-continuity-real, def-metric-continuity, def-metric-uniform-continuity, def-lipschitz-holder-contraction, thm-metric-regularity-hierarchy, thm-uniform-continuity-preserves-cauchy, lem-real-line-is-a-metric-space, def-isometry-and-metric-embedding, def-metric-space, def-metric-ball, def-metric-topology, def-metric-compactness, lem-compactness-is-intrinsic, def-metric-compactness-variants, def-metric-convergence, def-cauchy-in-metric, def-open-cover-r, def-open-and-closed-in-r, def-real-limit, def-sequence, def-rational-power, lem-of-abs-value, lem-metric-nonnegativity]
justified_by: []
aliases: [lem-metric-dictionary-for-r]
forward_refs: [ex-x-to-the-beta-separates-the-holder-classes, cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval]
landmark: true
short: "real and metric notions agree"
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
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 and Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "W. Trench, Introduction to Real Analysis, Ch. 8: Metric Spaces"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Introduction_to_Real_Analysis_%28Trench%29/08%3A_Metric_Spaces/8.00%3A_Introduction_to_Metric_Spaces"
    - title: "J. Lebl, Basic Analysis I, §3.3: Uniform continuity"
      url: "https://www.jirka.org/ra/html/sec_unifcont.html"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$ carry the subspace metric of the usual metric
$d_{\mathbb{R}}(x,y) = |x-y|$ of $\mathbb{R}$, that is
$d_A(x,y) = |x - y|$ for $x, y \in A$
([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]]),
and let $f : A \to \mathbb{R}$, regarded also as a map of metric spaces
$(A, d_A) \to (\mathbb{R}, d_{\mathbb{R}})$. Then the $\mathbb{R}$-native
notions of this page and the metric-space notions of the earlier pages are the
**same notions**, in the following five senses.

1. **Continuity.** For every $c \in A$: $f$ is continuous at $c$ in the sense of
   [[def-continuity-real]] if and only if $f$ is continuous at $c$ in the sense
   of [[def-metric-continuity]]. Consequently $f$ is continuous on $A$ if and
   only if it is continuous as a map of metric spaces.
2. **Uniform continuity.** $f$ is uniformly continuous on $A$ in the sense of
   [[def-uniform-continuity-real]] if and only if it is uniformly continuous as
   a map of metric spaces ([[def-metric-uniform-continuity]]).
3. **Lipschitz.** For a real $L \ge 0$: $f$ is Lipschitz with constant $L$ as a
   map of metric spaces ([[def-lipschitz-holder-contraction]]) if and only if
   $$|f(x) - f(x')| \le L\,|x - x'| \qquad \text{for all } x, x' \in A .$$
   This displayed condition is what "$f$ is Lipschitz with constant $L$" means
   for a real function on $A$ in this library; no second definition is made.
4. **Hölder.** For a rational $\alpha$ with $0 < \alpha \le 1$ and a real
   $C \ge 0$: $f$ is $\alpha$-Hölder with constant $C$ as a map of metric spaces
   if and only if
   $$|f(x) - f(x')| \le C\,|x - x'|^{\alpha} \qquad \text{for all } x, x' \in A ,$$
   the power being the rational power of a nonnegative base
   ([[def-rational-power]]).
5. **Compactness, in both senses used in this library.** For $K \subseteq
   \mathbb{R}$ with the subspace metric $d_K$:
   - $K$ is compact in the open-cover sense of [[def-open-cover-r]] — every
     family of open subsets of $\mathbb{R}$ covering $K$ has a finite subfamily
     covering $K$ — if and only if the metric space $(K, d_K)$ is compact
     ([[def-metric-compactness]]);
   - $K$ is sequentially compact in the sense of [[def-open-cover-r]] if and
     only if $(K, d_K)$ is sequentially compact as a metric space
     ([[def-metric-compactness-variants]]).

Two consequences are recorded, since they are the reason the dictionary is
stated as a lemma rather than as a remark.

6. **The regularity hierarchy transfers verbatim.** By clauses 1 to 4 and
   [[thm-metric-regularity-hierarchy]]: a Lipschitz $f : A \to \mathbb{R}$ is
   uniformly continuous on $A$; an $\alpha$-Hölder $f$ with rational
   $0 < \alpha \le 1$ is uniformly continuous on $A$; a uniformly continuous $f$
   is continuous on $A$; and if $A$ is nonempty and bounded, a Lipschitz $f$ is
   $\alpha$-Hölder for every rational $\alpha$ with $0 < \alpha \le 1$. No
   strictness is claimed here, and none is claimed there.
7. **Cauchy sequences transfer.** A sequence $(x_k)$ with terms in $A$ is Cauchy
   in $(A, d_A)$ ([[def-cauchy-in-metric]]) if and only if it is Cauchy as a
   sequence of reals ([[def-real-limit]]); so by clause 2 and
   [[thm-uniform-continuity-preserves-cauchy]], a uniformly continuous
   $f : A \to \mathbb{R}$ carries Cauchy sequences of $A$ to Cauchy sequences of
   $\mathbb{R}$.

**Why this lemma exists, and why it is a lemma.** Three results of this page —
[[thm-continuous-image-of-a-compact-set-r]], [[thm-extreme-value-r]] and
[[thm-heine-cantor-r]] — are stated a second time here, having already been
proved metric-generally as
[[thm-continuous-image-of-a-compact-space-is-compact]],
[[thm-extreme-value-metric]] and [[thm-heine-cantor-metric]]. The duplication is
deliberate: the $\mathbb{R}$-native proofs run through
[[thm-heine-borel-characterisation-r]] and
[[thm-compact-iff-sequentially-compact-r]], which are order-based, while the
metric proofs run through the cover machinery of metric spaces. **This item is
the single place in the library where that duplication is acknowledged**, and
clauses 1 and 5 are what make the two families of statements literally the same
statements. It is a lemma, and not a remark, precisely so that later pages can
cite it and move between the two vocabularies.

**Clause 5 closes a second seam.** The phrase *compact subset of $\mathbb{R}$*
is defined twice in this library — metrically, as compactness of the metric
subspace ([[def-metric-compactness]]), and $\mathbb{R}$-natively, by covers by
open subsets of $\mathbb{R}$ ([[def-open-cover-r]]) — and until this clause no
item asserted that the two agree.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$ with the subspace metric $d_A(x,y) = |x-y|$, a function $f : A \to \mathbb{R}$, and a set $K \subseteq \mathbb{R}$ with the subspace metric $d_K$.

[L1] The usual metric: $d_{\mathbb{R}}(x,y) = |x-y|$ is a metric on $\mathbb{R}$; its open balls are the intervals $B(x,r) = (x-r, x+r)$; and a set $U \subseteq \mathbb{R}$ is open in the metric topology of $d_{\mathbb{R}}$ exactly when it is open in the sense of [[def-open-and-closed-in-r]] ([[lem-real-line-is-a-metric-space]], [[def-metric-space]], [[def-metric-ball]], [[def-metric-topology]]).

[L2] Subspace metric: for $S \subseteq \mathbb{R}$ the restriction $d_S$ of $d_{\mathbb{R}}$ to $S \times S$ is a metric on $S$, so $d_S(x,y) = |x-y|$ for $x, y \in S$ ([[def-isometry-and-metric-embedding]]).

[L3] Metric continuity at $a \in X$: for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x \in X$ with $d_X(x,a) < \delta$ satisfies $d_Y(f(x), f(a)) < \varepsilon$ ([[def-metric-continuity]]).

[L4] Metric uniform continuity: for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that all $x, x' \in X$ with $d_X(x,x') < \delta$ satisfy $d_Y(f(x), f(x')) < \varepsilon$ ([[def-metric-uniform-continuity]]).

[L5] Continuity and uniform continuity of a real function on $A$, in the forms of [[def-continuity-real]] and [[def-uniform-continuity-real]].

[L6] Lipschitz and Hölder for a map of metric spaces: $d_Y(f(x),f(x')) \le L\,d_X(x,x')$, respectively $d_Y(f(x),f(x')) \le C\,d_X(x,x')^{\alpha}$ for a rational $\alpha$ with $0 < \alpha \le 1$, the power being that of [[def-rational-power]] with the convention $0^{\alpha} = 0$ ([[def-lipschitz-holder-contraction]]).

[L7] The regularity hierarchy for maps of metric spaces: Lipschitz implies uniformly continuous, uniformly continuous implies continuous, $\alpha$-Hölder implies uniformly continuous, and on a nonempty bounded space Lipschitz implies $\alpha$-Hölder for every rational $\alpha \in (0,1]$ ([[thm-metric-regularity-hierarchy]]).

[L8] Intrinsic character of compactness: a subset $K$ of a metric space $X$ is a compact metric space in its own right, with the subspace metric, exactly when every family of open subsets of $X$ whose union contains $K$ has a finite subfamily whose union contains $K$ ([[lem-compactness-is-intrinsic]], [[def-metric-compactness]]).

[L9] Compactness and sequential compactness of $K \subseteq \mathbb{R}$ in the $\mathbb{R}$-native sense ([[def-open-cover-r]]), and sequential compactness of a metric space ([[def-metric-compactness-variants]]).

[L10] Metric convergence: $x_k \to p$ in $(X,d)$ means $d(x_k,p) \to 0$ in $\mathbb{R}$ ([[def-metric-convergence]]); convergence and the Cauchy condition for real sequences are those of [[def-real-limit]] and [[def-sequence]]; a metric is nonnegative ([[lem-metric-nonnegativity]]); and $|u| \ge 0$ with $\bigl||u|\bigr| = |u|$ ([[lem-of-abs-value]]).

[L11] Cauchy in a metric space: $(x_k)$ is Cauchy in $(X,d)$ when for every rational $\varepsilon > 0$ there is $N$ with $d(x_m,x_n) < \varepsilon$ for all $m,n \ge N$ ([[def-cauchy-in-metric]]).

[L12] A uniformly continuous map of metric spaces sends Cauchy sequences to Cauchy sequences ([[thm-uniform-continuity-preserves-cauchy]]).

## Proof

**Proof technique:** direct.

1.1 **The two distances are the two absolute values.** By [L1] and [L2], for $x, x' \in A$ we have $d_A(x,x') = |x - x'|$, and for $u, v \in \mathbb{R}$ we have $d_{\mathbb{R}}(u,v) = |u - v|$; in particular $d_{\mathbb{R}}(f(x), f(x')) = |f(x) - f(x')|$. [L1, L2]

1.2 **Clause 5, the cover half.** Take the ambient metric space to be $(\mathbb{R}, d_{\mathbb{R}})$ and $K \subseteq \mathbb{R}$ with $d_K$. By [L8], $(K,d_K)$ is a compact metric space exactly when every family of sets open in $(\mathbb{R}, d_{\mathbb{R}})$ whose union contains $K$ has a finite subfamily whose union contains $K$. By [L1] the sets open in $(\mathbb{R}, d_{\mathbb{R}})$ are exactly the open subsets of $\mathbb{R}$ in the sense of [[def-open-and-closed-in-r]]. So the displayed condition is word for word the definition of compactness of $K$ in [L9]. [L1, L8, L9]

2.1 **Clause 1.** Fix $c \in A$. Substituting the identities of step 1.1 into [L3], with $X := (A,d_A)$, $Y := (\mathbb{R}, d_{\mathbb{R}})$ and $a := c$, turns metric continuity at $c$ into: for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x \in A$ with $|x - c| < \delta$ satisfies $|f(x) - f(c)| < \varepsilon$. That is verbatim the condition of [L5] defining continuity of $f$ at $c$ in the sense of [[def-continuity-real]]. The two conditions are therefore the same condition, and each holds at every point of $A$ exactly when the other does. [step 1.1, L3, L5]

2.2 **Clause 2.** The same substitution in [L4] turns metric uniform continuity into: for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that all $x, x' \in A$ with $|x - x'| < \delta$ satisfy $|f(x) - f(x')| < \varepsilon$, which is verbatim [[def-uniform-continuity-real]] as recorded in [L5]. [step 1.1, L4, L5]

2.3 **Clauses 3 and 4.** The same substitution in [L6] turns the Lipschitz condition into $|f(x) - f(x')| \le L\,|x-x'|$ for all $x,x' \in A$, and the $\alpha$-Hölder condition into $|f(x) - f(x')| \le C\,|x-x'|^{\alpha}$, the power being that of [[def-rational-power]] and defined at $x = x'$ by the convention $0^{\alpha} = 0$ recorded in [L6]. Since this library gives no other definition of the two conditions for a real function on $A$, the displayed inequalities are what those words mean here. [step 1.1, L6]

2.4 **Clause 5, the sequential half: convergence first.** Let $(x_j)$ be a sequence with terms in $K$ and let $p \in K$. By [L10] and step 1.1, convergence of $(x_j)$ to $p$ in $(K,d_K)$ says $d_K(x_j,p) = |x_j - p| \to 0$ in $\mathbb{R}$; and $|x_j - p| \to 0$ says that for every rational $\varepsilon > 0$ there is $J$ with $\bigl||x_j - p| - 0\bigr| = |x_j - p| < \varepsilon$ for $j \ge J$, which is verbatim the statement $x_j \to p$ of [L10]. So the two convergences are the same relation. [step 1.1, L10]

3.1 **Clause 5, the sequential half.** A sequence in $(K,d_K)$ is exactly a sequence of reals with all terms in $K$, and by step 2.4 a subsequence of it converges to a point of $K$ in $(K,d_K)$ exactly when it converges to that point in $\mathbb{R}$. Hence "every sequence in $K$ has a subsequence converging in $(K,d_K)$ to a point of $K$" and "every sequence of reals with terms in $K$ has a subsequence converging in $\mathbb{R}$ to a point of $K$" are the same statement, which is the assertion of [L9] and [[def-metric-compactness-variants]]. [step 2.4, L9, L10]

3.2 **Clause 6.** By clauses 1 to 4, the four $\mathbb{R}$-native conditions are the corresponding metric conditions for the map $(A,d_A) \to (\mathbb{R},d_{\mathbb{R}})$, so the implications of [L7] hold between them verbatim; the boundedness hypothesis in the last of them is boundedness of the metric space $(A,d_A)$, which for $A \subseteq \mathbb{R}$ is boundedness of $A$ as a set of reals, since $d_A(x,x') = |x-x'|$. [step 2.1, step 2.2, step 2.3, L7]

3.3 **Clause 7.** By step 1.1 and [L11], a sequence $(x_k)$ with terms in $A$ is Cauchy in $(A,d_A)$ exactly when for every rational $\varepsilon > 0$ there is $N$ with $|x_m - x_n| < \varepsilon$ for all $m,n \ge N$, which is verbatim the Cauchy condition of [L10] for a sequence of reals. Combining this with clause 2 and [L12] gives that a uniformly continuous $f : A \to \mathbb{R}$ carries Cauchy sequences of $A$ to Cauchy sequences of reals. [step 1.1, step 2.2, L10, L11, L12]

4.1 Clauses 1 to 7 are proved, each by rewriting one definition into the other along the identity $d_A(x,x') = |x-x'|$ or, for clause 5, along [L8] and the agreement of the two notions of open subset of $\mathbb{R}$. [step 2.1, step 2.2, step 2.3, step 1.2, step 3.1, step 3.2, step 3.3] ∎

## Remarks

- **Nothing here is a new theorem, and that is the point.** Every clause is an identification of two forms of words, and the only clause with any content beyond substitution is 5, which needs [[lem-compactness-is-intrinsic]] to move between covers by relatively open sets and covers by open subsets of $\mathbb{R}$, and needs [[lem-real-line-is-a-metric-space]] to know that the metric topology of $\mathbb{R}$ is the topology of [[def-open-and-closed-in-r]]. A reader who takes those two identifications for granted is taking for granted exactly what this library refuses to leave unsaid.

- **The hierarchy of clause 6 is not strict by fiat, and the witnesses live on the companion page.** [[thm-metric-regularity-hierarchy]] asserts the four implications and claims no converse. That none of them reverses for real functions is witnessed here: [[ex-x-to-the-beta-separates-the-holder-classes]] gives, for rationals $0 < \beta < \alpha \le 1$, a function on $[0,1]$ that is $\beta$-Hölder and not $\alpha$-Hölder, and in particular ($\alpha = 1$) is uniformly continuous and not Lipschitz; and [[cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval]] gives a continuous function that is not uniformly continuous. Those two items are links, not dependencies: they are examples on the companion page, and nothing on this page rests on them.

- **What the dictionary does *not* say.** It does not say that the two proofs of a duplicated theorem are the same proof, and they are not: the $\mathbb{R}$-native ones use the order of $\mathbb{R}$ and spend no choice beyond what is named in each item, while the metric ones use covers and, where the equivalence of the compactness variants is invoked, countable or dependent choice. What the dictionary establishes is that the two *statements* coincide, so that a later page may use whichever proof it prefers and cite whichever form it needs.
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

### `thm-heine-borel-characterisation-r`

````markdown
---
id: thm-heine-borel-characterisation-r
kind: theorem
title: "A subset of $\\mathbb{R}$ is compact if and only if it is closed and bounded"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-heine-borel-r, lem-compact-implies-closed-and-bounded-r, def-open-cover-r, def-interval, def-bounded-set, def-open-and-closed-in-r]
justified_by: []
forward_refs: [cex-unbounded-closed-set-not-compact, cex-closed-bounded-in-q-not-compact]
aliases: []
landmark: true
short: "compact $\\iff$ closed and bounded"
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
    - title: "Heine-Borel theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Thm 2.41)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §7.4"
      url: "https://www.jirka.org/ra/"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $K \subseteq \mathbb{R}$. Then $K$ is compact ([[def-open-cover-r]]) if and
only if $K$ is closed ([[def-open-and-closed-in-r]]) and bounded
([[def-bounded-set]]).

This is the Heine-Borel theorem in the form used everywhere below. The forward
implication is [[lem-compact-implies-closed-and-bounded-r]] and spends no
completeness, only the Archimedean property and the existence of maxima of
finite sets; the backward implication rests on
[[thm-heine-borel-r]] and therefore on the completeness of $\mathbb{R}$, and the
remarks below record where it fails without completeness.

## Facts & Assumptions

**Given:** A subset $K \subseteq \mathbb{R}$.

[L1] Open cover, finite subfamily and compactness; the empty subfamily covers $\varnothing$ ([[def-open-cover-r]]).

[L2] A compact subset of $\mathbb{R}$ is closed and bounded ([[lem-compact-implies-closed-and-bounded-r]]).

[L3] Every closed bounded interval $[\ell,u]$ with $\ell \le u$ is compact ([[thm-heine-borel-r]]).

[L4] $K$ is closed exactly when $\mathbb{R} \setminus K$ is open ([[def-open-and-closed-in-r]]).

[L5] $K$ is bounded exactly when there are $\ell, u \in \mathbb{R}$ with $\ell \le y \le u$ for every $y \in K$ ([[def-bounded-set]]).

[L6] $[\ell,u] = \{\, z \in \mathbb{R} : \ell \le z \le u \,\}$ ([[def-interval]]).

## Proof

**Proof technique:** direct.

1.1 If $K$ is compact then $K$ is closed and bounded, which is [L2]; this is the forward implication. [L2]

1.2 For the backward implication assume $K$ is closed and bounded. If $K = \varnothing$ then every open cover of $K$ admits the empty subfamily as a finite subcover, so $K$ is compact. [assume-hyp, L1]

1.3 Assume moreover $K \ne \varnothing$; fix $s \in K$ and, by [L5], reals $\ell, u$ with $\ell \le y \le u$ for every $y \in K$. Then $\ell \le s \le u$, so $\ell \le u$, and $K \subseteq [\ell,u]$ by [L6]. [assume-hyp, L5, L6, choose]

2.1 Let $\mathcal{U}$ be an open cover of $K$ and put $\mathcal{W} := \mathcal{U} \cup \{\mathbb{R} \setminus K\}$. Every member of $\mathcal{W}$ is open, since $\mathbb{R} \setminus K$ is open by [L4], and $\mathcal{W}$ covers $[\ell,u]$: a point of $[\ell,u]$ either lies in $K$, hence in some member of $\mathcal{U}$, or lies outside $K$, hence in $\mathbb{R} \setminus K$. [step 1.3, L1, L4]

3.1 By [L3] the interval $[\ell,u]$ is compact, so some finite subfamily $\{W_0, \dots, W_p\}$ of $\mathcal{W}$ covers $[\ell,u]$, where the case of an empty subfamily is possible only when $[\ell,u] = \varnothing$, which is excluded by $\ell \le u$. Put $\mathcal{V} := \{\, W_i : W_i \in \mathcal{U} \,\}$, a finite subfamily of $\mathcal{U}$. Then $K \subseteq \bigcup \mathcal{V}$: a point $y \in K \subseteq [\ell,u]$ lies in some $W_i$, and $W_i$ cannot be a member of $\mathcal{W}$ outside $\mathcal{U}$, because the only such member is $\mathbb{R} \setminus K$ and $y \in K$; so $W_i \in \mathcal{U}$ and $W_i \in \mathcal{V}$. [step 2.1, L1, L3, L6]

4.1 Every open cover of a nonempty closed bounded $K$ therefore has a finite subcover, so such a $K$ is compact; together with the empty case of step 1.2 this proves the backward implication, and step 1.1 is the forward one. [step 1.1, step 1.2, step 3.1, L1] ∎

## Remarks

- **A closed subset of a compact set is compact.** If $C \subseteq K$ with $K$
  compact and $C$ closed, then $C$ is bounded, being a subset of a bounded set,
  and closed by hypothesis, so it is compact by the theorem. The corresponding
  statement for arbitrary subsets is false: $(0,1) \subseteq [0,1]$ is bounded
  and not compact ([[cex-unbounded-closed-set-not-compact]]).

- **Both hypotheses are needed and neither implies the other.**
  [[cex-unbounded-closed-set-not-compact]] exhibits a closed set that is not
  bounded and a bounded set that is not closed, and neither is compact.

- **What the theorem is not.** It characterises compactness *for subsets of
  $\mathbb{R}$*. The two halves are of very different strengths: the forward
  half is elementary and general, while the backward half rests on the
  completeness of $\mathbb{R}$ and fails over $\mathbb{Q}$
  ([[fs-closed-bounded-compact-without-completeness]], witnessed by
  [[cex-closed-bounded-in-q-not-compact]]). Nothing here licenses "closed and
  bounded implies compact" in any other setting.
````

### `thm-heine-cantor-r`

````markdown
---
id: thm-heine-cantor-r
kind: theorem
title: "Heine-Cantor in $\\mathbb{R}$: a continuous real function on a compact subset of $\\mathbb{R}$ is uniformly continuous, proved $\\mathbb{R}$-natively from sequential compactness"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-uniform-continuity-real, def-continuity-real, lem-real-and-metric-notions-agree, thm-sequential-criterion-for-continuity, thm-compact-iff-sequentially-compact-r, def-open-cover-r, def-real-limit, def-sequence, lem-index-map-grows, def-countable-choice, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, lem-of-triangle-inequality, lem-of-abs-value, lem-rat-embeds-dense, def-ordered-field]
justified_by: []
aliases: [thm-uniform-continuity-on-compact-r]
forward_refs: [cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval, cex-x-squared-is-not-uniformly-continuous-on-r]
landmark: true
short: "Heine-Cantor in R"
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
    - title: "Heine-Cantor theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Cantor_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Thm 4.19)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.4"
      url: "https://www.jirka.org/ra/"
    - title: "W. Trench, Introduction to Real Analysis, Ch. 8: Metric Spaces"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Introduction_to_Real_Analysis_%28Trench%29/08%3A_Metric_Spaces/8.00%3A_Introduction_to_Metric_Spaces"
    - title: "J. Lebl, Basic Analysis I, §3.3: Uniform continuity"
      url: "https://www.jirka.org/ra/html/sec_unifcont.html"
pipeline_run: null
---

## Statement

Let $K \subseteq \mathbb{R}$ be compact ([[def-open-cover-r]]) and let
$f : K \to \mathbb{R}$ be continuous on $K$ ([[def-continuity-real]]). Then $f$
is uniformly continuous on $K$ ([[def-uniform-continuity-real]]).

**This theorem is stated twice in this library, on purpose.** Its metric-space
twin is [[thm-heine-cantor-metric]], proved there from the cover machinery of
metric spaces; the proof below is $\mathbb{R}$-native and runs through
[[thm-compact-iff-sequentially-compact-r]], which is order-based. That the two
statements are the same statement in two vocabularies is
[[lem-real-and-metric-notions-agree]], clauses 1, 2 and 5, immediately above.

**The choice cost, named.** The proof invokes the axiom of countable choice
([[def-countable-choice]]) exactly once, at step 3.1, to select one bad pair of
points from each of countably many nonempty sets. The backward implication of
[[thm-compact-iff-sequentially-compact-r]] also spends countable choice, and
that item names its own uses; the forward implication used here, from compact to
sequentially compact, does not. No claim is made that the axiom is necessary
for either.

## Facts & Assumptions

**Given:** A compact set $K \subseteq \mathbb{R}$ and a function $f : K \to \mathbb{R}$ continuous on $K$.

[L1] Uniform continuity on $K$: for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that all $x, x' \in K$ with $|x - x'| < \delta$ satisfy $|f(x) - f(x')| < \varepsilon$. Its negation: there is a real $\varepsilon_0 > 0$ such that for every real $\delta > 0$ some pair $x, x' \in K$ has $|x - x'| < \delta$ and $|f(x) - f(x')| \ge \varepsilon_0$ ([[def-uniform-continuity-real]], [[def-ordered-field]]).

[L2] A compact subset of $\mathbb{R}$ is sequentially compact: every sequence with all terms in $K$ has a subsequence converging to a point of $K$ ([[thm-compact-iff-sequentially-compact-r]], [[def-open-cover-r]], [[def-sequence]], [[def-real-limit]]).

[L3] Countable choice: for a family $(P_k)_{k \in \mathbb{N}}$ of nonempty sets there is a function on $\mathbb{N}$ picking an element of each ([[def-countable-choice]]).

[L4] A strictly increasing index map satisfies $n_j \ge j$ ([[lem-index-map-grows]], [[def-sequence]]).

[L5] Archimedean property in reciprocal form: for every real $\eta > 0$ there is a natural $n \ge 1$ with $1/n < \eta$; and $0 < s \le t$ implies $1/t \le 1/s$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[lem-of-inverse-positive]]).

[L6] Sequential criterion, the choice-free direction: if $f$ is continuous at $p \in K$ and $(z_j)$ has terms in $K$ with $z_j \to p$, then $f(z_j) \to f(p)$ ([[thm-sequential-criterion-for-continuity]], [[def-continuity-real]]).

[L7] Triangle inequality and absolute value: $|u + v| \le |u| + |v|$, $|{-u}| = |u|$, $|u| \ge 0$ ([[lem-of-triangle-inequality]], [[lem-of-abs-value]]).

[L8] Convergence of real sequences is tested at rational $\varepsilon > 0$, and below every positive real lies a positive rational, so the test may equally be run at every real $\varepsilon > 0$ ([[def-real-limit]], [[lem-rat-embeds-dense]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose $f$ is not uniformly continuous on $K$. By [L1] fix a real $\varepsilon_0 > 0$ such that for every real $\delta > 0$ there are $x, x' \in K$ with $|x - x'| < \delta$ and $|f(x) - f(x')| \ge \varepsilon_0$. [L1, assume-contra]

2.1 For $k \in \mathbb{N}$ put $P_k := \{\, (x,x') \in K \times K \ : \ |x - x'| < 1/(k+1) \text{ and } |f(x) - f(x')| \ge \varepsilon_0 \,\}$. Since $1/(k+1) > 0$, step 1.1 makes every $P_k$ nonempty. [step 1.1, L5]

3.1 By [L3] applied to the family $(P_k)_{k \in \mathbb{N}}$ fix a function $k \mapsto (x_k, x'_k)$ with $(x_k, x'_k) \in P_k$ for every $k$. **This is the single use of countable choice in this proof.** [step 2.1, L3, choose]

4.1 $(x_k)$ is a sequence of reals with all terms in $K$, so by [L2] there are a strictly increasing $n : \mathbb{N} \to \mathbb{N}$ and $p \in K$ with $x_{n_j} \to p$. [step 3.1, L2, choose]

5.1 **The second sequence converges to $p$ as well.** Let a rational $\varepsilon > 0$ be given. By [L5] and [L8] fix $J_1$ with $1/(j+1) < \varepsilon/2$ for every $j \ge J_1$, and by step 4.1 fix $J_2$ with $|x_{n_j} - p| < \varepsilon/2$ for every $j \ge J_2$. For $j \ge \max\{J_1, J_2\}$, using $(x_{n_j}, x'_{n_j}) \in P_{n_j}$ and $n_j \ge j$ from [L4], we get $|x'_{n_j} - x_{n_j}| < 1/(n_j+1) \le 1/(j+1) < \varepsilon/2$, hence $|x'_{n_j} - p| \le |x'_{n_j} - x_{n_j}| + |x_{n_j} - p| < \varepsilon$ by [L7]. So $x'_{n_j} \to p$. [step 3.1, step 4.1, L4, L5, L7, L8]

6.1 The point $p$ lies in $K$ and $f$ is continuous at $p$, so [L6] applied to the two sequences of steps 4.1 and 5.1, both with terms in $K$, gives $f(x_{n_j}) \to f(p)$ and $f(x'_{n_j}) \to f(p)$. [step 4.1, step 5.1, L6]

7.1 By [L8] fix a rational $\varepsilon$ with $0 < \varepsilon < \varepsilon_0/2$, and by step 6.1 fix $J$ with $|f(x_{n_j}) - f(p)| < \varepsilon$ and $|f(x'_{n_j}) - f(p)| < \varepsilon$ for every $j \ge J$. For such $j$, [L7] gives $|f(x_{n_j}) - f(x'_{n_j})| \le |f(x_{n_j}) - f(p)| + |f(p) - f(x'_{n_j})| < 2\varepsilon < \varepsilon_0$. [step 6.1, L7, L8, choose]

8.1 But $(x_{n_j}, x'_{n_j}) \in P_{n_j}$ gives $|f(x_{n_j}) - f(x'_{n_j})| \ge \varepsilon_0$ for every $j$, which contradicts step 7.1. The assumption of step 1.1 is therefore false, and $f$ is uniformly continuous on $K$. [step 3.1, step 7.1, discharge-contradiction] ∎

## Remarks

- **Where compactness is used, and where continuity is used.** Compactness is used once, in step 4.1, to extract a convergent subsequence; continuity is used once, in step 6.1, at the single point $p$ that the extraction produces. Neither can be weakened: $x \mapsto 1/x$ on $(0,1)$ is continuous on a bounded non-closed set and not uniformly continuous ([[cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval]]), and $x \mapsto x^{2}$ on $\mathbb{R}$ is continuous on a closed unbounded set and not uniformly continuous ([[cex-x-squared-is-not-uniformly-continuous-on-r]]).

- **The converse is sharp.** For every noncompact $E \subseteq \mathbb{R}$ that is bounded there is a continuous function on $E$ that is not uniformly continuous, and for every noncompact $E$ there is an unbounded continuous function and a bounded continuous one with no greatest value. That is [[thm-compactness-is-necessary-for-evt-and-uniform-continuity]], later on this page, and together with this theorem it says that compactness is exactly the hypothesis these results need.

- **The pairs, not the points, are what is chosen.** A common presentation selects two sequences separately and then extracts twice. Selecting the pair once, as above, keeps the count of choice applications at one and makes the second sequence's convergence a consequence rather than a second extraction.
````

### `thm-metric-regularity-hierarchy`

````markdown
---
id: thm-metric-regularity-hierarchy
kind: theorem
title: "Contraction implies Lipschitz implies uniformly continuous implies continuous; every Hölder map is uniformly continuous, and a Lipschitz map on a bounded space is Hölder for every exponent"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-lipschitz-holder-contraction, def-metric-uniform-continuity,
       def-metric-continuity, def-rational-power, lem-rational-power-monotone,
       def-metric-bounded-diameter, lem-rational-power-laws, def-metric-space,
       lem-metric-nonnegativity, lem-of-inverse-positive, lem-of-sign-rules,
       def-rat-order, thm-of-archimedean, def-complete-ordered-field]
justified_by: []
forward_refs: [ex-square-root-is-half-holder, cex-continuous-map-destroying-cauchyness]
aliases: []
landmark: true
short: "contraction $\\Rightarrow$ Lipschitz $\\Rightarrow$ uniform $\\Rightarrow$ continuous"
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
    - title: "Lipschitz continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lipschitz_continuity"
    - title: "Hölder condition (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/H%C3%B6lder_condition"
    - title: "Uniform continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Uniform_continuity"
pipeline_run: null
---

## Statement

Let $(X,d_X)$ and $(Y,d_Y)$ be metric spaces ([[def-metric-space]]) and let
$f : X \to Y$ be a function, with the three regularity conditions as in
[[def-lipschitz-holder-contraction]]. Then:

1. If $f$ is a contraction, it is Lipschitz.
2. If $f$ is Lipschitz, it is uniformly continuous
   ([[def-metric-uniform-continuity]]).
3. If $f$ is uniformly continuous, it is continuous
   ([[def-metric-continuity]]).
4. If $f$ is $\alpha$-Hölder for some rational $\alpha$ with $0 < \alpha \le 1$,
   it is uniformly continuous.
5. Suppose $X$ is nonempty and bounded, and put
   $R := \operatorname{diam}(X) + 1$, a real with $R > 0$
   ([[def-metric-bounded-diameter]]). If $f$ is Lipschitz with constant $L$, then
   for **every** rational $\alpha$ with $0 < \alpha \le 1$ the map $f$ is
   $\alpha$-Hölder with constant $L\,R^{\,1-\alpha}$.

**Claim 5 carries its boundedness hypothesis for a reason, and no unconditional
"Lipschitz implies Hölder" is asserted anywhere here.** On an unbounded space the
implication is false; the witness and its verification are in the first remark
below.

**Strictness is not claimed.** The five implications are asserted and nothing
more; that none of them reverses is witnessed elsewhere, and those witnesses are
not prerequisites of this theorem. See the second remark.

## Facts & Assumptions

**Given:** Metric spaces $(X,d_X)$, $(Y,d_Y)$, a function $f : X \to Y$, a real $\varepsilon > 0$, and a rational $\alpha$ with $0 < \alpha \le 1$.

[A1] $f$ is a contraction with constant $q$: $f$ is Lipschitz with constant $q$ and $0 \le q < 1$ ([[def-lipschitz-holder-contraction]]).

[A2] $f$ is Lipschitz with constant $L \ge 0$: $d_Y(f(x),f(x')) \le L\,d_X(x,x')$ for all $x,x' \in X$ ([[def-lipschitz-holder-contraction]]).

[A3] $f$ is $\alpha$-Hölder with constant $C \ge 0$: $d_Y(f(x),f(x')) \le C\,d_X(x,x')^{\alpha}$ for all $x,x' \in X$ ([[def-lipschitz-holder-contraction]]).

[A4] $X$ is nonempty and bounded, so $\operatorname{diam}(X)$ exists and $d_X(x,x') \le \operatorname{diam}(X)$ for all $x,x' \in X$ ([[def-metric-bounded-diameter]], [[def-complete-ordered-field]]).

[L1] Uniform continuity: one $\delta > 0$ per $\varepsilon > 0$ serving every pair ([[def-metric-uniform-continuity]]); continuity at a point allows $\delta$ to depend on the point as well ([[def-metric-continuity]]).

[L2] Rational powers of a positive base, with $a^{1} = a$, $a^{0} = 1$, and the supplementary clause $0^{r} = 0$ for rational $r > 0$ ([[def-rational-power]], [[def-rat-order]]).

[L3] Exponent laws for positive bases: $a^{r+s} = a^{r}a^{s}$, $(a^{r})^{s} = a^{rs}$, and $a^{r} > 0$ ([[lem-rational-power-laws]]).

[L4] Monotonicity in the base: for rational $r > 0$ and $0 < a < b$ one has $a^{r} < b^{r}$ ([[lem-rational-power-monotone]]).

[L5] A metric is nonnegative, and $d(x,x') = 0$ forces $x = x'$ ([[lem-metric-nonnegativity]], [[def-metric-space]]).

[L6] Positivity of inverses and multiplication of inequalities by positives ([[lem-of-inverse-positive]], [[lem-of-sign-rules]]).

## Proof

**Proof technique:** direct.

1.1 Claim 1 is immediate from the definitions: a contraction with constant $q$ is Lipschitz with the constant $q$, and $q \ge 0$. [A1, A2]

1.2 Claim 2: assume [A2] and put $\delta := \varepsilon/(L+1)$, a positive real since $L + 1 > 0$. If $d_X(x,x') < \delta$ then, using $d_X(x,x') \ge 0$, $d_Y(f(x),f(x')) \le L\,d_X(x,x') \le (L+1)\,d_X(x,x') < (L+1)\delta = \varepsilon$; the same $\delta$ served every pair, so $f$ is uniformly continuous. [A2, L1, L5, L6]

1.3 Claim 3: assume $f$ uniformly continuous and let $a \in X$; the $\delta$ belonging to $\varepsilon$ satisfies $d_X(x,a) < \delta \Rightarrow d_Y(f(x),f(a)) < \varepsilon$ for all $x$, which is continuity at $a$, and $a$ was arbitrary. [L1]

1.4 Claim 4, the case of equal points: assume [A3]; if $d_X(x,x') = 0$ then $x = x'$, so $d_Y(f(x),f(x')) = 0 < \varepsilon$ whatever $\delta$ is. [A3, L5]

1.5 Claim 4, the main case: put $\eta := \varepsilon/(C+1) > 0$ and $\delta := \eta^{1/\alpha}$, which is a positive real because $1/\alpha$ is a positive rational and $\eta > 0$. [L2, L3, L6, choose]

1.6 Claim 5: assume [A2] and [A4], put $R := \operatorname{diam}(X) + 1$ and $C := L\,R^{\,1-\alpha}$. Since $\operatorname{diam}(X) \ge 0$ we have $R \ge 1 > 0$, so $R^{\,1-\alpha}$ is defined and positive and $C \ge 0$. [A2, A4, L2, L3]

2.1 Let $t := d_X(x,x')$ with $0 < t < \delta$. Then $t^{\alpha} < \delta^{\alpha} = (\eta^{1/\alpha})^{\alpha} = \eta^{(1/\alpha)\alpha} = \eta^{1} = \eta$, so $d_Y(f(x),f(x')) \le C\,t^{\alpha} \le (C+1)\,t^{\alpha} < (C+1)\eta = \varepsilon$. [step 1.5, A3, L2, L3, L4, L6]

2.2 Let $x, x' \in X$ and $t := d_X(x,x')$; then $0 \le t \le \operatorname{diam}(X) < R$. If $t = 0$ then $d_Y(f(x),f(x')) \le L \cdot 0 = 0 = C \cdot 0^{\alpha} = C\,t^{\alpha}$, because $\alpha > 0$. [step 1.6, A2, A4, L2, L5]

2.3 If $t > 0$ then $t = t^{\alpha + (1-\alpha)} = t^{\alpha}\,t^{\,1-\alpha}$ and $t^{\,1-\alpha} \le R^{\,1-\alpha}$: for $\alpha < 1$ the exponent $1-\alpha$ is a positive rational and $0 < t < R$, and for $\alpha = 1$ both sides are $1$. Multiplying by $L\,t^{\alpha} \ge 0$ gives $L t = L\,t^{\alpha}\,t^{\,1-\alpha} \le L\,R^{\,1-\alpha}\,t^{\alpha} = C\,t^{\alpha}$, and hence $d_Y(f(x),f(x')) \le L t \le C\,t^{\alpha}$. [step 1.6, A2, L2, L3, L4, L6]

3.1 Steps 1.4 and 2.1 cover every pair with $d_X(x,x') < \delta$, and $\delta$ did not depend on the pair, so $f$ is uniformly continuous: claim 4 holds. [step 1.4, step 2.1, L1]

4.1 Steps 2.2 and 2.3 give $d_Y(f(x),f(x')) \le C\,d_X(x,x')^{\alpha}$ for every pair, so $f$ is $\alpha$-Hölder with constant $C = L\,R^{\,1-\alpha}$, which is claim 5; claims 1 to 4 are steps 1.1, 1.2, 1.3 and 3.1. [step 1.1, step 1.2, step 1.3, step 3.1, step 2.2, step 2.3] ∎

## Remarks

- **Boundedness in claim 5 cannot be dropped, and here is the witness.** Take $X = Y = \mathbb{R}$ with the usual metric and $f(x) = x$, which is Lipschitz with constant $1$. Suppose $f$ were $\alpha$-Hölder with constant $C \ge 0$ for some rational $\alpha$ with $0 < \alpha < 1$, so that $|x - y| \le C\,|x-y|^{\alpha}$ for all reals $x,y$. Taking $y = 0$ and $x = t$ with $t > 0$, and writing $t = t^{\alpha} t^{\,1-\alpha}$ ([[lem-rational-power-laws]]), division by $t^{\alpha} > 0$ gives $t^{\,1-\alpha} \le C$ for every real $t > 0$. At $t = 1$ this reads $1 \le C$, so $C > 0$; and then choosing a natural $n$ with $n > C^{1/(1-\alpha)}$, which exists by the Archimedean property ([[thm-of-archimedean]]), and raising to the positive rational power $1-\alpha$ ([[lem-rational-power-monotone]], [[lem-rational-power-laws]]) gives $n^{\,1-\alpha} > \big(C^{1/(1-\alpha)}\big)^{1-\alpha} = C$, contradicting $t^{\,1-\alpha} \le C$ at $t = n$. So the identity of $\mathbb{R}$ is Lipschitz and $\alpha$-Hölder for no exponent $\alpha < 1$. A chain reading "Lipschitz implies Hölder implies uniformly continuous" is therefore false as stated, which is why claims 4 and 5 are separated here and why claim 5 carries a hypothesis.
- **No implication reverses, and two of the witnesses are on the companion page.** The square root on $[0,\infty)$ is $1/2$-Hölder and not Lipschitz ([[ex-square-root-is-half-holder]]), and $x \mapsto 1/x$ on $(0,1)$ is continuous and not uniformly continuous ([[cex-continuous-map-destroying-cauchyness]]). Both are read here as orientation only: this theorem does not depend on them and claims nothing about strictness. That a Lipschitz map need not be a contraction is visible already in the identity map, whose only Lipschitz constants are the reals $\ge 1$.
- **The constant $L+1$ and the constant $C+1$ are there to avoid a case split.** Dividing by $L$ or by $C$ would require them to be nonzero, and a Lipschitz constant or a Hölder constant is allowed to be $0$ ([[def-lipschitz-holder-contraction]]). Enlarging the constant by $1$ is harmless, since the defining inequalities are preserved by enlarging the constant.
- **What claim 5 costs.** The constant it produces, $L\,R^{1-\alpha}$, grows with the diameter of $X$, and that dependence is exactly what the unbounded counterexample above exploits: as $R \to \infty$ no single Hölder constant survives.
````

### `thm-of-archimedean`

````markdown
---
id: thm-of-archimedean
kind: theorem
title: "Every complete ordered field is Archimedean"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-complete-ordered-field, lem-of-naturals-positive, cor-of-one-positive, def-ordered-field]
aliases: []
landmark: true
short: "complete ⇒ Archimedean"
proof_strategy: contradiction
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
    - title: "Neil Donaldson, Math 140A notes: Completeness and the Archimedean property"
      url: "https://www.math.uci.edu/~ndonalds/math140a/1complete.html"
pipeline_run: null
---

## Statement

Every complete ordered field $F$ ([[def-complete-ordered-field]]) is Archimedean:
for every $x \in F$ there is a natural number $n \ge 1$ with $x < n \cdot 1_F$,
where $n \cdot 1_F$ is the canonical natural of the ordered field $F$
([[def-ordered-field]]). Equivalently, the canonical naturals are cofinal in $F$.

## Facts & Assumptions

**Given:** A complete ordered field $F$; write $A = \{\, n \cdot 1_F : n \ge 1 \,\}$ for the set of its canonical naturals.

[L1] Least-upper-bound property: every nonempty $S \subseteq F$ that is bounded above has a least upper bound $\sup S \in F$ ([[def-complete-ordered-field]]).

[L2] Each canonical natural satisfies $n \cdot 1_F > 0$, one has $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$, and $(n+1) \cdot 1_F > n \cdot 1_F$ ([[lem-of-naturals-positive]]).

[L3] $0 < 1_F$ ([[cor-of-one-positive]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $F$ is not Archimedean: there is some $x \in F$ with $n \cdot 1_F \le x$ for all $n \ge 1$, that is, $x$ is an upper bound of $A$. [assume-contra]

2.1 The set $A$ is nonempty, since $1 \cdot 1_F = 1_F \in A$, and it is bounded above by $x$. [step 1.1, L2]

3.1 By the least-upper-bound property, $A$ has a least upper bound $s = \sup A \in F$. [step 2.1, L1]

4.1 Since $1_F > 0$, we have $s - 1_F < s$; as $s$ is the least upper bound, $s - 1_F$ is not an upper bound of $A$. [step 3.1, L3]

5.1 Hence there is some $m \ge 1$ with $m \cdot 1_F > s - 1_F$. [step 4.1]

6.1 Adding $1_F$ to both sides, $(m+1) \cdot 1_F = m \cdot 1_F + 1_F > s$. [step 5.1, L2]

7.1 But $(m+1) \cdot 1_F \in A$, so $(m+1) \cdot 1_F \le s$ because $s$ is an upper bound of $A$, contradicting 6.1. [step 6.1, step 3.1, L2]

8.1 The assumption is therefore untenable, so $F$ is Archimedean. [step 7.1, discharge-contradiction] ∎
````

