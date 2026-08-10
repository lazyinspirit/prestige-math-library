## Selection reasons

- high risk (7): 4 declared dependencies; 3 cited facts; boundary-sensitive language; induction, recursion, or minimality

## Target item — `lem-higher-order-rolle`

Normalized current SHA-256: `dd80617d7d5b18889e6c49514013661b7075bdf629da2748b3c0b8bb06f76362`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: lem-higher-order-rolle
kind: lemma
title: "Higher-order Rolle theorem"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-higher-derivatives-and-smoothness, thm-rolle, cor-differentiable-implies-continuous, thm-induction-principle]
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
    - title: "University of Florida note, Generalized Rolle's theorem"
      url: "https://people.clas.ufl.edu/bruceedwards/files/GeneralRolle.pdf"
pipeline_run: null
---

## Statement

Let $n\in\mathbb N$ with $n\ge1$, let $x_0<\cdots<x_n$, and let $f$ be continuous on $[x_0,x_n]$ and $n$-times differentiable on $(x_0,x_n)$. If $f(x_j)=0$ for every $j\le n$, then some $c\in(x_0,x_n)$ satisfies $f^{(n)}(c)=0$.

## Facts & Assumptions

**Given:** The ordered zeros and the stated regularity.

[L1] Rolle's theorem produces a zero of $h'$ between two zeros of a continuous, interior-differentiable function $h$ ([[thm-rolle]]).

[L2] Differentiability at a point implies continuity there ([[cor-differentiable-implies-continuous]]), and induction applies to natural numbers ([[thm-induction-principle]]).

## Proof

**Proof technique:** induction.

1.1 For $n=1$, Rolle's theorem on $[x_0,x_1]$ gives $c\in(x_0,x_1)$ with $f'(c)=0$. [base, L1]

1.2 For $n\ge2$, apply Rolle on each $[x_{j-1},x_j]$ to obtain $y_j\in(x_{j-1},x_j)$ with $f'(y_j)=0$, so $y_1<\cdots<y_n$. [given, L1, choose]

2.1 The function $f'$ is continuous on $[y_1,y_n]$, because those points lie in $(x_0,x_n)$ and the existence of $f''$ gives continuity there; it is $(n-1)$-times differentiable on $(y_1,y_n)$. Apply the induction hypothesis of order $n-1$ to $f'$ and the $n$ ordered zeros $y_1,\ldots,y_n$. This gives $c\in(y_1,y_n)\subset(x_0,x_n)$ with $(f')^{(n-1)}(c)=f^{(n)}(c)=0$. [step 1.2, L2, ih]

3.1 The claim follows for every $n\ge1$. [step 1.1, step 2.1, L2, discharge-induction] ∎
````

## Wave 11 provenance row

```json
{
  "id": "lem-higher-order-rolle",
  "statement": "literature-derived",
  "proof": "ai-generated",
  "evidence": "exact-source",
  "urls": [
    "https://people.clas.ufl.edu/bruceedwards/files/GeneralRolle.pdf"
  ],
  "rationale": "The source states the same higher-order Rolle theorem: continuity on the closed interval, n differentiability in the interior, n+1 ordered zeros, and a zero of the nth derivative between the extreme zeros. The numbered iterative proof is local.",
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
      "source": "thm-rolle",
      "source_section": "Statement",
      "quote": "Let $a, b \\in \\mathbb{R}$ with $a < b$, let $f : [a,b] \\to \\mathbb{R}$ be\ncontinuous on $[a,b]$ ([[def-continuity-real]], [[def-interval]]) and\ndifferentiable at every point of $(a,b)$ as a function on $[a,b]$\n([[def-derivative]]), and suppose\n\n$$f(a) \\;=\\; f(b) .$$\n\nThen there is $c \\in (a,b)$ with $f'(c) = 0$.\n\n**Three hypotheses, three different jobs.** Continuity on the **closed**\ninterval is what the extreme value theorem consumes; differentiability on the\n**open** interval is what Fermat's theorem consumes, and it is asked for\nnowhere else; and $f(a) = f(b)$ is what forces the extremum inside when neither\nextremum is attained in the interior. Continuity at the two endpoints cannot be\ndropped, and a false statement later on this page records a witness for that.\n\n**Differentiability is meant with respect to the domain $[a,b]$.** For $c$ in\nthe open interval that is the same condition as differentiability of any\nrestriction of $f$ to a subinterval around $c$, since only points near $c$\nenter, but the phrase is fixed here so that the citation of\n[[thm-fermat-interior-extremum]], whose hypothesis is interiority in the\ndomain, is exact.",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L2",
      "source": "cor-differentiable-implies-continuous",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$ and let $c \\in A$ be a\nlimit point of $A$ ([[def-limit-point-r]]). If $f$ is differentiable at $c$\n([[def-derivative]]) then $f$ is continuous at $c$ ([[def-continuity-real]]).\n\nConsequently, if $f$ is differentiable on a set $S \\subseteq A$ then $f$ is\ncontinuous at every point of $S$.\n\n**No converse is asserted, and none holds.** Continuity at $c$ does not give\ndifferentiability at $c$, and the standard witness is worked out on the\ncompanion page.",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-induction-principle",
      "source_section": "Statement",
      "quote": "Let $S \\subseteq \\mathbb{N}$. If $0 \\in S$ and $\\sigma(n) \\in S$ whenever $n \\in S$, then $S = \\mathbb{N}$. Equivalently (property form): if a property $P$ satisfies $P(0)$ and ($P(n) \\Rightarrow P(\\sigma(n))$) for all $n$, then $P(n)$ holds for all $n \\in \\mathbb{N}$. This is the induction principle, the basis of proof by induction.",
      "uses": [
        "2.1",
        "3.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "lem-higher-order-rolle-step-1-1",
      "claim": "For $n=1$, Rolle's theorem on $[x_0,x_1]$ gives $c\\in(x_0,x_1)$ with $f'(c)=0$. [base, L1]",
      "step": "1.1",
      "inputs": [
        "base",
        "L1"
      ]
    },
    {
      "id": "lem-higher-order-rolle-step-1-2",
      "claim": "For $n\\ge2$, apply Rolle on each $[x_{j-1},x_j]$ to obtain $y_j\\in(x_{j-1},x_j)$ with $f'(y_j)=0$, so $y_1<\\cdots<y_n$. [given, L1, choose]",
      "step": "1.2",
      "inputs": [
        "given",
        "L1",
        "choose"
      ]
    },
    {
      "id": "lem-higher-order-rolle-step-2-1",
      "claim": "The function $f'$ is continuous on $[y_1,y_n]$, because those points lie in $(x_0,x_n)$ and the existence of $f''$ gives continuity there; it is $(n-1)$-times differentiable on $(y_1,y_n)$. Apply the induction hypothesis of order $n-1$ to $f'$ and the $n$ ordered zeros $y_1,\\ldots,y_n$. This gives $c\\in(y_1,y_n)\\subset(x_0,x_n)$ with $(f')^{(n-1)}(c)=f^{(n)}",
      "step": "2.1",
      "inputs": [
        "step 1.2",
        "L2",
        "ih"
      ]
    },
    {
      "id": "lem-higher-order-rolle-step-3-1",
      "claim": "The claim follows for every $n\\ge1$. [step 1.1, step 2.1, L2, discharge-induction] ∎",
      "step": "3.1",
      "inputs": [
        "step 1.1",
        "step 2.1",
        "L2",
        "discharge-induction"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "lem-higher-order-rolle concerns stipulated functions and points; no empty family, empty sum, or empty choice domain changes its assertion."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Statement includes the zero boundary, and step 1.1 treats or preserves that case."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Statement includes the unit/first-index boundary, and step 1.1 treats or preserves that case."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "Statement fixes the concrete interval, and step 1.1 uses that nondegenerate domain."
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
      "reason": "The Statement of lem-higher-order-rolle is not a biconditional, so it has no forward iff direction."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The Statement of lem-higher-order-rolle is not a biconditional, so it has no reverse iff direction."
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
    "source": "lem-higher-order-rolle",
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
    "source": "lem-higher-order-rolle",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
    "target": "thm-rolle",
    "declared_target": "thm-rolle",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-derivative-and-mean-value-theorems",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-higher-order-rolle",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
    "target": "cor-differentiable-implies-continuous",
    "declared_target": "cor-differentiable-implies-continuous",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-derivative-and-mean-value-theorems",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-higher-order-rolle",
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

## Full exact-current text of every cited or declared item (4)

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

### `thm-rolle`

````markdown
---
id: thm-rolle
kind: theorem
title: "Rolle's theorem: if $a < b$, $f$ is continuous on $[a,b]$, differentiable at every point of $(a,b)$, and $f(a) = f(b)$, then $f'(c) = 0$ for some $c \\in (a,b)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-derivative, thm-fermat-interior-extremum, def-local-extremum, thm-extreme-value-r, thm-heine-borel-characterisation-r, def-open-cover-r, def-continuity-real, def-interval, def-max-min, def-interior-closure-boundary-r, def-open-and-closed-in-r, def-neighbourhood-r, def-bounded-set, def-function-limit]
justified_by: []
aliases: []
landmark: true
short: "Rolle's theorem"
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
    - title: "Rolle's theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Rolle%27s_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 5"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §4.2"
      url: "https://www.jirka.org/ra/"
    - title: "J. Lebl, Basic Analysis I, Mean Value Theorem"
      url: "https://www.jirka.org/ra/html/sec_mvt.html"
    - title: "J. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $a, b \in \mathbb{R}$ with $a < b$, let $f : [a,b] \to \mathbb{R}$ be
continuous on $[a,b]$ ([[def-continuity-real]], [[def-interval]]) and
differentiable at every point of $(a,b)$ as a function on $[a,b]$
([[def-derivative]]), and suppose

$$f(a) \;=\; f(b) .$$

Then there is $c \in (a,b)$ with $f'(c) = 0$.

**Three hypotheses, three different jobs.** Continuity on the **closed**
interval is what the extreme value theorem consumes; differentiability on the
**open** interval is what Fermat's theorem consumes, and it is asked for
nowhere else; and $f(a) = f(b)$ is what forces the extremum inside when neither
extremum is attained in the interior. Continuity at the two endpoints cannot be
dropped, and a false statement later on this page records a witness for that.

**Differentiability is meant with respect to the domain $[a,b]$.** For $c$ in
the open interval that is the same condition as differentiability of any
restriction of $f$ to a subinterval around $c$, since only points near $c$
enter, but the phrase is fixed here so that the citation of
[[thm-fermat-interior-extremum]], whose hypothesis is interiority in the
domain, is exact.

## Facts & Assumptions

**Given:** Reals $a < b$, a function $f : [a,b] \to \mathbb{R}$ continuous on $[a,b]$ and differentiable at every point of $(a,b)$, with $f(a) = f(b)$.

[L1] $[a,b]$ is closed ([[def-open-and-closed-in-r]]) and bounded ([[def-interval]], [[def-bounded-set]]), hence compact ([[thm-heine-borel-characterisation-r]], [[def-open-cover-r]]); and it is nonempty, since $a \le a \le b$ gives $a \in [a,b]$.

[L2] Extreme value theorem ([[thm-extreme-value-r]]): for $f$ continuous on $A$ and $K \subseteq A$ nonempty and compact there are $p, q \in K$ with $f(q) \le f(x) \le f(p)$ for every $x \in K$, so that $f(p) = \max f[K]$ and $f(q) = \min f[K]$ ([[def-max-min]]).

[L3] Every point of $(a,b)$ is interior to $[a,b]$: for $c$ with $a < c < b$ put $\varepsilon := \min\{c - a,\ b - c\}$, a positive real; every $y$ with $|y - c| < \varepsilon$ satisfies $y > c - \varepsilon \ge a$ and $y < c + \varepsilon \le b$, so $N_{\varepsilon}(c) \subseteq (a,b) \subseteq [a,b]$ ([[def-neighbourhood-r]], [[def-interval]], [[def-interior-closure-boundary-r]]).

[L4] A value $f(c)$ that is a greatest value of $f$ over the whole of its domain is a local maximum at $c$, and a least value is a local minimum at $c$ ([[def-local-extremum]], claim 4 of its body).

[L5] Fermat's interior extremum theorem ([[thm-fermat-interior-extremum]]): a local extremum at a point interior to the domain, at which the function is differentiable, forces the derivative there to vanish.

[L6] $(a,b)$ is nonempty when $a < b$, since $a < (a+b)/2 < b$ ([[def-interval]]).

[L7] A constant function $h$ on $[a,b]$ is differentiable at every point $c$ of $[a,b]$ with $h'(c) = 0$: every point of the nondegenerate order-convex set $[a,b]$ is a limit point of it, and the difference quotient of $h$ at $c$ is the constant $0$ on $[a,b] \setminus \{c\}$, whose limit at $c$ is $0$ ([[def-derivative]], [[def-function-limit]]).

## Proof

**Proof technique:** direct.

1.1 The set $[a,b]$ is nonempty and compact, and $f$ is continuous on it. [L1]

1.2 Since $a < b$, the open interval $(a,b)$ is nonempty; fix $m := (a+b)/2 \in (a,b)$. [L6, choose]

2.1 By [L2], applied with $A := K := [a,b]$, fix $p, q \in [a,b]$ with $f(q) \le f(x) \le f(p)$ for every $x \in [a,b]$. [step 1.1, L2, choose]

3.1 **Case A: at least one of $p, q$ lies in $(a,b)$.** Fix such a point and call it $c$. By [L3] the point $c$ is interior to $[a,b]$, and $f$ is differentiable at $c$ because $c \in (a,b)$. By step 2.1 and [L4], $f$ has a local maximum at $c$ if $c$ is the point $p$, and a local minimum at $c$ if it is the point $q$; either way a local extremum. So [L5] gives $f'(c) = 0$, and $c \in (a,b)$. [step 2.1, L3, L4, L5]

3.2 **Case B: neither $p$ nor $q$ lies in $(a,b)$.** A point of $[a,b]$ outside $(a,b)$ satisfies $a \le x \le b$ and not $a < x < b$, hence equals $a$ or $b$; so $p, q \in \{a, b\}$ and, since $f(a) = f(b)$, both $f(p)$ and $f(q)$ equal $f(a)$. By step 2.1, every $x \in [a,b]$ satisfies $f(a) = f(q) \le f(x) \le f(p) = f(a)$, so $f(x) = f(a)$. Thus $f$ is the constant function with value $f(a)$ on $[a,b]$. [step 2.1]

4.1 In case B, [L7] gives that $f$ is differentiable at every point of $[a,b]$ with derivative $0$; in particular $f'(m) = 0$, and $m \in (a,b)$ by step 1.2. [step 1.2, step 3.2, L7]

5.1 The two cases are exhaustive, since either at least one of $p, q$ lies in $(a,b)$ or neither does. Case A supplies a point $c \in (a,b)$ with $f'(c) = 0$ by step 3.1, and case B supplies the point $m$ by step 4.1. [step 3.1, step 4.1] ∎

## Remarks

- **The constant case is not a degenerate nuisance, it is the case where the extremum sits on the boundary.** When $f$ is constant the greatest and least values are attained at the endpoints as well as everywhere else, so nothing forces the extreme value theorem to hand back an interior point; the argument has to produce a point of $(a,b)$ by hand, and any point will do.

- **Why compactness enters at all.** Only through [[thm-extreme-value-r]], and only to know that the greatest and least values are **attained**. A supremum that is not attained is useless here: Fermat's theorem is a statement about a point, not about a bound. That is precisely the hypothesis the companion page's witness removes.

- **Nothing is claimed about how many such $c$ there are, or where.** A single $c$ is produced, and the proof gives no way to locate it; the theorem is an existence statement and is used only as one.
````

