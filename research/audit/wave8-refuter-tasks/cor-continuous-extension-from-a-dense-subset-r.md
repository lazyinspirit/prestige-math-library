## Selection reasons

- high risk (7): 17 declared dependencies; 17 cited facts; boundary-sensitive language

## Target item — `cor-continuous-extension-from-a-dense-subset-r`

Normalized current SHA-256: `6f7ad097348c8b0b963e83ff4035bc8c925d7dbf40fa0cd6710946de5f01ba8c`

The complete current item follows, including frontmatter:

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

## Wave 8 provenance row for the target

```json
{
  "id": "cor-continuous-extension-from-a-dense-subset-r",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://math.mit.edu/classes/18.100/Practice-Final-3.18.100.pdf"
  ],
  "rationale": "The MIT problem states the unique extension of a uniformly continuous map from a dense subset into a complete target. The local corollary specializes to real subspaces and records that the extension remains uniformly continuous.",
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
      "source": "lem-real-line-is-a-metric-space",
      "source_section": "Statement",
      "quote": "1. $d_{\\mathbb{R}}$ is a metric on $\\mathbb{R}$ ([[def-metric-space]]); it is called the **usual metric** of $\\mathbb{R}$. 2. For $x \\in \\mathbb{R}$ and $r > 0$ the open ball is the bounded open interval ([[def-interval]], [[def-metric-ball]]) $$B(x,r) = (x-r,\\ x+r),$$ and the closed ball is $\\bar B(x,r) = [x-r,\\ x+r]$. 3. Consequently $U \\subseteq \\mathbb{R}$ is open in the metric topology of $d_{\\mathbb{R}}$ ([[def-metric-topology]]) exactly when for every $x \\in U$ there is $r > 0$ with $(x-r, x+r) \\subseteq U$. This topology is called the **usual topology** of $\\mathbb{R}$. 4. $(\\mathbb{R}, d_{\\mathbb{R}})$ is not a bounded metric space ([[def-metric-bounded-diameter]]): no ball contains $\\mathbb{R}$, so $\\operatorname{diam}(\\mathbb{R})$ is not defined.",
      "uses": [
        "1.1",
        "2.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-isometry-and-metric-embedding",
      "source_section": "Definition",
      "quote": "Subspace metric.",
      "uses": [
        "1.1",
        "2.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-metric-ball",
      "source_section": "Definition",
      "quote": "Let $(X,d)$ be a metric space ([[def-metric-space]]), let $x \\in X$ and let $r \\in \\mathbb{R}$ with $r > 0$ ([[def-real-order]]). Define",
      "uses": [
        "1.1",
        "2.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-metric-space",
      "source_section": "Definition",
      "quote": "metric",
      "uses": [
        "1.1",
        "2.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-neighbourhood-r",
      "source_section": "Definition",
      "quote": "**A neighbourhood is an open interval.** For every $x$ and every $\\varepsilon > 0$,",
      "uses": [
        "1.1",
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-closure-characterisations-r",
      "source_section": "Statement",
      "quote": "$$E \\;:=\\; \\{\\, x \\in \\mathbb{R} : N_\\varepsilon(x) \\cap A \\ne \\varnothing \\text{ for every real } \\varepsilon > 0 \\,\\}$$",
      "uses": [
        "1.1",
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-interior-closure-boundary-r",
      "source_section": "Definition",
      "quote": "- The **interior** of $A$ is the union of all open subsets of $A$: $$A^{\\circ} \\;:=\\; \\bigcup \\{\\, U \\subseteq \\mathbb{R} : U \\text{ open and } U \\subseteq A \\,\\}.$$ - The **closure** of $A$ is the intersection of all closed supersets of $A$: $$\\overline{A} \\;:=\\; \\bigcap \\{\\, F \\subseteq \\mathbb{R} : F \\text{ closed and } A \\subseteq F \\,\\}.$$ - The **boundary** of $A$ is $\\partial A := \\overline{A} \\setminus A^{\\circ}$. - The **exterior** of $A$ is $\\operatorname{ext} A := (\\mathbb{R} \\setminus A)^{\\circ}$.",
      "uses": [
        "1.1",
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-open-and-closed-in-r",
      "source_section": "Definition",
      "quote": "$U$ is **open** when for every $x \\in U$ there is a real $\\varepsilon > 0$",
      "uses": [
        "1.1",
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-metric-interior-closure-boundary",
      "source_section": "Definition",
      "quote": "Let $(X,d)$ be a metric space ([[def-metric-space]]), let $A \\subseteq X$ and let $x \\in X$. Balls are as in [[def-metric-ball]] and open sets as in [[def-metric-topology]]; recall that a real $r$ written as a radius is always $> 0$. - $x$ is an **interior point** of $A$ if $B(x,r) \\subseteq A$ for some $r$. The set of interior points is the **interior** $\\operatorname{int}(A)$. - $x$ is an **adherent point** of $A$ if $B(x,r) \\cap A \\ne \\emptyset$ for every $r$. The set of adherent points is the **closure** $\\overline{A}$. - $x$ is a **limit point** (accumulation point) of $A$ if $B(x,r) \\cap (A \\setminus \\{x\\}) \\ne \\emptyset$ for every $r$. The set of limit points is the **derived set** $A'$. - $x$ is an **isolated point** of $A$ if $x \\in A$ and $B(x,r) \\cap A = \\{x\\}$ for some $r$. - The **boundary** of $A$ is $\\partial A := \\overline{A} \\setminus \\operatorname{int}(A)$. - $A$ is **dense** in $X$ if $\\overline{A} = X$.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-euclidean-space-complete",
      "source_section": "Statement",
      "quote": "is a complete metric space",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-complete-metric-space",
      "source_section": "Definition",
      "quote": "complete",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L5",
      "source": "thm-uniformly-continuous-extension-from-dense",
      "source_section": "Statement",
      "quote": "Let $(X,d_X)$ be a metric space ([[def-metric-space]]), let $A \\subseteq X$ be dense in $X$ ([[def-metric-interior-closure-boundary]]) and carry the subspace metric ([[def-isometry-and-metric-embedding]]), let $(Y,d_Y)$ be a **complete** metric space ([[def-complete-metric-space]]), and let $f : A \\to Y$ be uniformly continuous ([[def-metric-uniform-continuity]]). Then: 1. There is a uniformly continuous $g : X \\to Y$ with $g(a) = f(a)$ for every $a \\in A$. 2. $g$ is the **only** continuous map $X \\to Y$ extending $f$ ([[def-metric-continuity]]). The map $g$ is constructed explicitly below, as the unique point common to the closures of the images of the shrinking balls around $x$; no value of $g$ is selected, each is determined.",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-metric-uniform-continuity",
      "source_section": "Definition",
      "quote": "uniformly continuous",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-metric-continuity",
      "source_section": "Definition",
      "quote": "$f$ is **continuous at $a$** if for every real $\\varepsilon > 0$ there is a real $\\delta > 0$ such that $$d_X(x,a) < \\delta \\;\\Longrightarrow\\;",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-continuity-real",
      "source_section": "Definition",
      "quote": "**This is not the raw $\\varepsilon$-$\\delta$ formula of [[fs-limit-unique-at-every-point-of-the-domain]].** That item records what goes wrong when the *punctured* formula of [[def-function-limit]] is written down at an arbitrary point of the domain: at an isolated point it is satisfied vacuously by every real $L$ at once, so it defines nothing, and this library therefore leaves $\\lim_{x \\to c} f(x)$ **undefined** at an isolated point. Continuity at an isolated point is a different matter: the formula above is not vacuous — it is a genuine condition on $f(c)$, satisfied because $f(c)$ is the only value being compared with itself — and it names a single, well-defined property. The limit is undefined there; the continuity is defined, and is automatic. Clause 1 is the only place where the two notions meet, and it is stated only where the limit exists as a notion.",
      "uses": [
        "2.2",
        "4.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-uniform-continuity-real",
      "source_section": "Definition",
      "quote": "and uniform continuity is",
      "uses": [
        "2.2",
        "4.1"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-real-and-metric-notions-agree",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$ carry the subspace metric of the usual metric $d_{\\mathbb{R}}(x,y) = |x-y|$ of $\\mathbb{R}$, that is $d_A(x,y) = |x - y|$ for $x, y \\in A$ ([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]]), and let $f : A \\to \\mathbb{R}$, regarded also as a map of metric spaces $(A, d_A) \\to (\\mathbb{R}, d_{\\mathbb{R}})$. Then the $\\mathbb{R}$-native notions of this page and the metric-space notions of the earlier pages are the **same notions**, in the following five senses.",
      "uses": [
        "2.2",
        "4.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "Put $X := \\overline{D}$ with the subspace metric $d_X$, so $d_X(x,y) = |x-y|$ for $x,y \\in X$; then $D \\subseteq X$, and the subspace metric that $D$ inherits from $X$ is again $d(x,y) = |x-y|$, the same one it inherits from $\\mathbb{R}$. $X$ is nonempty, sinc",
      "step": "1.1",
      "inputs": [
        "L1",
        "L2"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "**$D$ is dense in the metric space $X$.** Let $x \\in X$ and let $r > 0$ be real. By [L2] there is $t \\in N_r(x) \\cap D$, and $t \\in D \\subseteq X$, so $t$ lies in the ball $B_X(x,r) = N_r(x) \\cap X$ of $X$ ([L1]) and in $D$. Hence every ball of $X$ around a po",
      "step": "2.1",
      "inputs": [
        "L2",
        "L1",
        "L3",
        "1.1"
      ]
    },
    {
      "id": "step-2-2",
      "claim": "**Transport of the hypothesis.** By [L6], applied to $S := D$, the uniform continuity of $f$ on $D$ in the sense of [[def-uniform-continuity-real]] is uniform continuity of $f : (D, d_D) \\to (\\mathbb{R}, d_{\\mathbb{R}})$ as a map of metric spaces.",
      "step": "2.2",
      "inputs": [
        "L6",
        "1.1"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "By [L4] the target $(\\mathbb{R}, d_{\\mathbb{R}})$ is complete, so [L5] applies with $A := D$, this $X$, $Y := \\mathbb{R}$ and $h := f$: there is a uniformly continuous $g : X \\to \\mathbb{R}$ with $g(x) = f(x)$ for every $x \\in D$, and $g$ is the only continuou",
      "step": "3.1",
      "inputs": [
        "L4",
        "L5",
        "2.1",
        "2.2"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "**Transport of the conclusion.** By [L6], applied to $S := X = \\overline{D}$, uniform continuity of $g$ as a map of metric spaces is uniform continuity of $g$ on $\\overline{D}$ in the sense of [[def-uniform-continuity-real]], and continuity as a map of metric ",
      "step": "4.1",
      "inputs": [
        "L6",
        "3.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "The Statement explicitly assumes D≠∅, and step 1.1 uses it to prove the closure X is nonempty."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Steps 2.1–2.2 preserve zero distances and the exact ε–δ definitions under the subspace metric."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "For singleton D, step 2.1 shows D is dense in its singleton closure and steps 3.1–4.1 return the same function."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "Step 3.1 includes the unique-extension case X=D and step 4.1 permits a constant extension."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "The closure of an arbitrary subset is used; no interval endpoints are assumed."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "The extension and its uniqueness are supplied by the cited complete-target theorem; this local proof only transports the definitions."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The Statement of `cor-continuous-extension-from-a-dense-subset-r` is not an equivalence, so it has no forward iff direction."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The Statement of `cor-continuous-extension-from-a-dense-subset-r` is not an equivalence, so it has no reverse iff direction."
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
    "source": "cor-continuous-extension-from-a-dense-subset-r",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "lem-real-and-metric-notions-agree",
    "declared_target": "lem-real-and-metric-notions-agree",
    "target_statement_provenance": "ai-altered",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-continuous-extension-from-a-dense-subset-r",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "thm-uniformly-continuous-extension-from-dense",
    "declared_target": "thm-uniformly-continuous-extension-from-dense",
    "target_statement_provenance": "ai-altered",
    "targetPage": "completeness-and-uniform-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-continuous-extension-from-a-dense-subset-r",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "thm-euclidean-space-complete",
    "declared_target": "thm-euclidean-space-complete",
    "target_statement_provenance": "ai-altered",
    "targetPage": "completeness-and-uniform-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-continuous-extension-from-a-dense-subset-r",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-complete-metric-space",
    "declared_target": "def-complete-metric-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "completeness-and-uniform-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-continuous-extension-from-a-dense-subset-r",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
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
    "source": "cor-continuous-extension-from-a-dense-subset-r",
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
    "source": "cor-continuous-extension-from-a-dense-subset-r",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-metric-interior-closure-boundary",
    "declared_target": "def-metric-interior-closure-boundary",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-continuous-extension-from-a-dense-subset-r",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-interior-closure-boundary-r",
    "declared_target": "def-interior-closure-boundary-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-continuous-extension-from-a-dense-subset-r",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "thm-closure-characterisations-r",
    "declared_target": "thm-closure-characterisations-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-continuous-extension-from-a-dense-subset-r",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
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
    "source": "cor-continuous-extension-from-a-dense-subset-r",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-isometry-and-metric-embedding",
    "declared_target": "def-isometry-and-metric-embedding",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-continuous-extension-from-a-dense-subset-r",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "lem-real-line-is-a-metric-space",
    "declared_target": "lem-real-line-is-a-metric-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-continuous-extension-from-a-dense-subset-r",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-metric-ball",
    "declared_target": "def-metric-ball",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-continuous-extension-from-a-dense-subset-r",
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
    "source": "cor-continuous-extension-from-a-dense-subset-r",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-metric-space",
    "declared_target": "def-metric-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-continuous-extension-from-a-dense-subset-r",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-metric-uniform-continuity",
    "declared_target": "def-metric-uniform-continuity",
    "target_statement_provenance": "ai-altered",
    "targetPage": "completeness-and-uniform-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-continuous-extension-from-a-dense-subset-r",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-metric-continuity",
    "declared_target": "def-metric-continuity",
    "target_statement_provenance": "literature-derived",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-continuous-extension-from-a-dense-subset-r",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval",
    "declared_target": "cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval",
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

## Full text of every cited or declared item (19)

### `cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval`

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

### `def-complete-metric-space`

````markdown
---
id: def-complete-metric-space
kind: definition
title: "Complete metric space: every Cauchy sequence converges in the space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-cauchy-in-metric, def-metric-convergence, def-metric-space,
       lem-metric-limits-unique, def-isometry-and-metric-embedding,
       def-complete-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "complete metric space"
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
    - title: "Complete metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Complete_metric_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]).

$(X,d)$ is **complete** if every Cauchy sequence in $(X,d)$
([[def-cauchy-in-metric]]) converges to a point of $X$
([[def-metric-convergence]]).

A subset $A \subseteq X$ is called **complete** when the metric subspace
$(A, d_A)$ is complete ([[def-isometry-and-metric-embedding]]); as always, the
metric is part of the data, and $d_A$ is the restriction of $d$ to $A \times A$.

**The limit is unique when it exists**, since limits in a metric space are unique
([[lem-metric-limits-unique]]), so a complete space assigns to each of its Cauchy
sequences one point and not a set of points.

**Completeness is a property of the pair $(X,d)$, not of $X$ and not of the
topology of $d$.** Both quantifiers in the definition are about the metric: the
Cauchy condition is stated with distances, and so is convergence. Two metrics on
the same set can have the same open sets while exactly one of them is complete,
which is the content of [[fs-completeness-is-a-topological-property]] and its
witness. Read the word *complete* as an abbreviation for *complete with respect
to this metric*, always.

## Remarks

- **Do not confuse this with Dedekind completeness.** The least-upper-bound
  property of [[def-complete-ordered-field]] is an order condition on an ordered
  field and is what defines $\mathbb{R}$; the condition here is a metric
  condition and makes sense in any metric space, with no order in sight. On
  $\mathbb{R}$ the first implies the second ([[thm-cauchy-criterion-via-lub]],
  [[thm-euclidean-space-complete]]) and the two are not the same statement: the
  rationals with the usual metric are an ordered field that fails both, while
  there are complete metric spaces with no field structure at all.
- **Every convergent sequence is Cauchy** ([[lem-metric-convergent-implies-cauchy]]),
  so completeness is exactly the assertion that the two classes of sequences
  coincide. It is the converse inclusion that carries all the content.
- **Three sources of completeness are proved on this page.** The real line and
  $\mathbb{R}^n$ are complete ([[thm-euclidean-space-complete]]); a closed subset
  of a complete space is complete ([[thm-complete-subspace-iff-closed]]); and
  every metric space sits densely and isometrically inside a complete one
  ([[thm-metric-completion-exists]]).
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

### `def-interior-closure-boundary-r`

````markdown
---
id: def-interior-closure-boundary-r
kind: definition
title: "Interior, closure, boundary and exterior of a subset of $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-open-and-closed-in-r, def-neighbourhood-r, thm-open-set-algebra-r]
justified_by: []
aliases: []
landmark: true
short: "$A^{\\circ}$, $\\overline{A}$, $\\partial A$"
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
    - title: "Interior (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Interior_(topology)"
    - title: "Closure (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closure_(topology)"
    - title: "Boundary (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Boundary_(topology)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Let $A \subseteq \mathbb{R}$, with open and closed sets as in
[[def-open-and-closed-in-r]].

- The **interior** of $A$ is the union of all open subsets of $A$:
  $$A^{\circ} \;:=\; \bigcup \{\, U \subseteq \mathbb{R} : U \text{ open and } U \subseteq A \,\}.$$
- The **closure** of $A$ is the intersection of all closed supersets of $A$:
  $$\overline{A} \;:=\; \bigcap \{\, F \subseteq \mathbb{R} : F \text{ closed and } A \subseteq F \,\}.$$
- The **boundary** of $A$ is $\partial A := \overline{A} \setminus A^{\circ}$.
- The **exterior** of $A$ is $\operatorname{ext} A := (\mathbb{R} \setminus A)^{\circ}$.

**Both operators are well defined and deliver what their names claim.** The
family whose union defines $A^{\circ}$ always contains $\varnothing$, and the
family whose intersection defines $\overline{A}$ always contains $\mathbb{R}$,
so the second family is nonempty and both expressions denote subsets of
$\mathbb{R}$ without appeal to any convention about empty unions or
intersections. Moreover:

- $A^{\circ}$ is **open**, being a union of open sets
  ([[thm-open-set-algebra-r]], claim 1), and $A^{\circ} \subseteq A$, since
  every set in the family is a subset of $A$. It is therefore the **largest**
  open subset of $A$: any open $U \subseteq A$ is a member of the family and so
  $U \subseteq A^{\circ}$.
- $\overline{A}$ is **closed**, being an intersection of a nonempty family of
  closed sets ([[thm-open-set-algebra-r]], claim 3), and $A \subseteq
  \overline{A}$, since every set in the family contains $A$. It is therefore the
  **smallest** closed superset of $A$: any closed $F \supseteq A$ is a member of
  the family and so $\overline{A} \subseteq F$.

**Pointwise description of the interior.** For $x \in \mathbb{R}$,

$$x \in A^{\circ} \iff \text{there is } \varepsilon > 0 \text{ with } N_\varepsilon(x) \subseteq A .$$

If $x \in A^{\circ}$ then, $A^{\circ}$ being open and containing $x$, there is
$\varepsilon > 0$ with $N_\varepsilon(x) \subseteq A^{\circ} \subseteq A$.
Conversely if $N_\varepsilon(x) \subseteq A$ then $N_\varepsilon(x)$ is an open
subset of $A$ ([[def-open-and-closed-in-r]]) containing $x$, hence
$x \in N_\varepsilon(x) \subseteq A^{\circ}$ ([[def-neighbourhood-r]]).

The corresponding pointwise description of the closure is not a definitional
matter and is proved separately, as [[thm-closure-characterisations-r]].

## Remarks

- **The four sets partition nothing by themselves, but three of them do.** For
  every $A$ the three sets $A^{\circ}$, $\partial A$ and $\operatorname{ext} A$
  are pairwise disjoint with union $\mathbb{R}$. This is not proved here and is
  not used on this page; what is used is only the definitions above and the
  characterisations of [[thm-closure-characterisations-r]].

- **Interior and closure are dual.** Complementation exchanges the two families
  above, since $U$ is open exactly when $\mathbb{R} \setminus U$ is closed, so
  $\mathbb{R} \setminus A^{\circ} = \overline{\mathbb{R} \setminus A}$ and
  $\mathbb{R} \setminus \overline{A} = (\mathbb{R} \setminus A)^{\circ} =
  \operatorname{ext} A$. The second identity is the reason the exterior is
  usually described as "the complement of the closure".

- **$A$ is open exactly when $A = A^{\circ}$, and closed exactly when
  $A = \overline{A}$.** For the first: $A^{\circ} \subseteq A$ always, and
  $A \subseteq A^{\circ}$ holds exactly when $A$ is one of the open subsets of
  $A$, that is, exactly when $A$ is open. The closure half is the same argument
  read the other way, and it is recorded as a claim of
  [[thm-closure-characterisations-r]] because the rest of that theorem needs it.

- **Boundary points may or may not belong to the set.** $\partial (0,1) =
  \partial [0,1] = \{0,1\}$, and the two boundary points lie outside the first
  set and inside the second; the boundary sees only the way the set meets its
  complement, not which side the edge is assigned to.
````

### `def-isometry-and-metric-embedding`

````markdown
---
id: def-isometry-and-metric-embedding
kind: definition
title: "Isometry, isometric embedding, and the subspace metric on a subset"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-metric-space, def-metric-topology, def-injection-surjection-bijection,
       def-metric-ball]
justified_by: []
aliases: [def-subspace-metric, def-isometry]
landmark: false
short: "isometry, subspace metric"
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
    - title: "Isometry (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Isometry"
    - title: "Subspace topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subspace_topology"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Let $(X,d_X)$ and $(Y,d_Y)$ be metric spaces ([[def-metric-space]]).

**Isometric embedding and isometry.** A function $f : X \to Y$ is an
**isometric embedding** if

$$d_Y\big(f(x), f(x')\big) = d_X(x,x') \qquad \text{for all } x, x' \in X ,$$

and an **isometry** if it is in addition bijective
([[def-injection-surjection-bijection]]). Two metric spaces are **isometric** if
some isometry between them exists.

**Subspace metric.** Let $A \subseteq X$ and let

$$d_A := d_X \restriction (A \times A)$$

be the restriction of $d_X$ to pairs from $A$. Then $d_A$ is a metric on $A$:
the three axioms (M1), (M2), (M3) of [[def-metric-space]] are conditions on
triples of points, and each holds for points of $A$ because it holds for points
of $X$. The pair $(A, d_A)$ is the **metric subspace** $A$ of $X$, and the
inclusion $A \to X$ is an isometric embedding by construction. The metric
topology of $d_A$ ([[def-metric-topology]]) is the **subspace topology** of $A$.

**Balls of a subspace are traces of balls of the ambient space.** For $a \in A$
and $r > 0$,

$$B_A(a,r) = B_X(a,r) \cap A ,$$

directly from the definitions: a point $z$ lies in the left side exactly when
$z \in A$ and $d_A(a,z) = d_X(a,z) < r$ ([[def-metric-ball]]). This is why the
ambient space is always written into the ball notation, and it is the source of
every apparent paradox about balls in subspaces.

## Remarks

- **An isometric embedding is automatically injective**, and it identifies $X$
  with the subspace $f[X]$ of $Y$, topology and all; that is
  [[lem-isometry-is-an-embedding]]. The word *embedding* is therefore justified
  rather than merely suggestive.
- **A bijective isometric embedding has an isometric inverse.** If $f$ is an
  isometry then $f^{-1}$ satisfies
  $d_X(f^{-1}(y), f^{-1}(y')) = d_Y(y,y')$, because writing $y = f(x)$ and
  $y' = f(x')$ turns that into the defining identity of $f$. So "isometric" is a
  symmetric relation between metric spaces, and it is transitive because a
  composite of isometries is one.
- **Isometry is much finer than having the same topology.** Isometric spaces are
  homeomorphic, but $\mathbb{R}$ with $d(x,y) = |x-y|$ and $\mathbb{R}$ with
  $\min\{|x-y|, 1\}$ have the same topology and are not isometric, the second
  being bounded and the first not
  ([[lem-bounded-remetrisation]], [[lem-real-line-is-a-metric-space]]).
````

### `def-metric-ball`

````markdown
---
id: def-metric-ball
kind: definition
title: "Open ball, closed ball and sphere in a metric space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-metric-space, def-real-order, lem-metric-nonnegativity,
       def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: [def-open-ball, def-closed-ball, def-sphere]
landmark: true
short: "$B(x,r)$"
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
    - title: "Ball (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ball_(mathematics)"
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 20: The Metric Topology (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-20.pdf"
pipeline_run: null
---

## Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]), let $x \in X$ and let
$r \in \mathbb{R}$ with $r > 0$ ([[def-real-order]]). Define

$$B(x,r) := \{\, y \in X : d(x,y) < r \,\}, \qquad \bar B(x,r) := \{\, y \in X : d(x,y) \le r \,\}, \qquad S(x,r) := \{\, y \in X : d(x,y) = r \,\}.$$

$B(x,r)$ is the **open ball**, $\bar B(x,r)$ the **closed ball** and $S(x,r)$ the
**sphere** of **centre** $x$ and **radius** $r$. The radius is always a strictly
positive real; a ball of radius $0$ or of negative radius is never written in
this library.

**Immediate consequences of the definitions.** For every $x \in X$ and $r > 0$:

- $x \in B(x,r)$, because $d(x,x) = 0 < r$ (axiom (M1) of [[def-metric-space]]);
  in particular open and closed balls are nonempty.
- $B(x,r) \subseteq \bar B(x,r)$ and $S(x,r) \subseteq \bar B(x,r)$, and
  $\bar B(x,r)$ is the disjoint union of $B(x,r)$ and $S(x,r)$, by trichotomy of
  the order of $\mathbb{R}$ ([[def-complete-ordered-field]], [[def-ordered-field]]):
  each $y$ satisfies exactly one of $d(x,y) < r$, $d(x,y) = r$, $d(x,y) > r$.
- If $0 < s \le r$ then $B(x,s) \subseteq B(x,r)$ and
  $\bar B(x,s) \subseteq \bar B(x,r)$, by transitivity of the order.
- Nonnegativity of the metric ([[lem-metric-nonnegativity]]) is what forces the
  radius convention, and it forces it for the **open** ball only: if $r \le 0$
  then $B(x,r) = \{y : d(x,y) < r\}$ is empty, because $d(x,y) \ge 0 \ge r$
  for every $y$. The other two sets behave differently at $r = 0$, and the
  convention $r > 0$ excludes them for uniformity rather than for emptiness:
  $\bar B(x,0) = S(x,0) = \{x\}$, since $d(x,y) \le 0$ together with
  $d(x,y) \ge 0$ gives $d(x,y) = 0$ and hence $y = x$ by (M1). For $r < 0$ all
  three sets are empty.

**A sphere may be empty, and so the three sets are not on a par.** For $r > 0$
the open and closed balls always contain $x$, but nothing in the definition
produces a point at distance exactly $r$ from $x$. If a metric takes only the
values $0$ and $1$, as the discrete metric on the companion page does, then
$S(x,2) = \emptyset$ while $B(x,2) = \bar B(x,2)$ is the whole space. So
nonemptiness of a sphere is never available by convention: where it is used, it
is proved.

**The ambient space is part of the notation.** $B(x,r)$ depends on $(X,d)$ and
not on $x$ and $r$ alone. When more than one space or more than one metric is in
play we write $B_X(x,r)$, or $B_d(x,r)$, and likewise for $\bar B$ and $S$. This
matters as soon as subspaces appear ([[def-isometry-and-metric-embedding]]): a
ball of a subspace is the trace on it of a ball of the ambient space, and the two
are different sets.

## Remarks

- **The names "open ball" and "closed ball" are justified, not merely
  suggestive.** That $B(x,r)$ is an open set and $\bar B(x,r)$ a closed set in
  the metric topology is proved in [[thm-metric-open-set-algebra]]; the words are
  used here only as names for the three sets displayed above.
- **The closed ball is not in general the closure of the open ball**, and the
  sphere is not in general the boundary of either. Both failures are recorded on
  this page as [[fs-closed-ball-is-the-closure-of-the-open-ball]] and witnessed
  on the companion page. The safe reading of the three names is the displayed
  one and nothing more.
````

### `def-metric-continuity`

````markdown
---
id: def-metric-continuity
kind: definition
title: "Continuity of a map between metric spaces, at a point and globally, in the $\\varepsilon$-$\\delta$ form"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-metric-space, def-metric-ball]
justified_by: []
aliases: [def-continuous-map-metric]
landmark: true
short: "$\\varepsilon$-$\\delta$ continuity"
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
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Let $(X, d_X)$ and $(Y, d_Y)$ be metric spaces ([[def-metric-space]]), let
$f : X \to Y$ be a function and let $a \in X$.

$f$ is **continuous at $a$** if for every real $\varepsilon > 0$ there is a real
$\delta > 0$ such that

$$d_X(x,a) < \delta \;\Longrightarrow\; d_Y\big(f(x), f(a)\big) < \varepsilon \qquad \text{for all } x \in X .$$

$f$ is **continuous** (globally, or on $X$) if it is continuous at every point of
$X$.

**The same condition in balls.** Since $d_X(x,a) < \delta$ says $x \in B_X(a,\delta)$
and $d_Y(f(x),f(a)) < \varepsilon$ says $f(x) \in B_Y(f(a),\varepsilon)$
([[def-metric-ball]]), continuity at $a$ reads: for every $\varepsilon > 0$ there
is $\delta > 0$ with

$$f\big[B_X(a,\delta)\big] \subseteq B_Y\big(f(a), \varepsilon\big).$$

Both forms are used below and are the same statement written twice.

**Both metrics matter, and both are named.** Continuity is a property of the
triple $(d_X, d_Y, f)$, not of $f$ alone. When several metrics on the same
underlying sets are in play, as in [[def-equivalent-metrics]], the metrics are
always written out.

**Quantifier order.** The $\delta$ is allowed to depend on $\varepsilon$ **and on
the point $a$**. Requiring one $\delta$ to work at every point simultaneously is
a strictly stronger condition, uniform continuity; it is defined on a later page
of this library, and at this point in the reading order it is written out in full
where needed ([[def-equivalent-metrics]]).

## Remarks

- **Nothing is claimed here beyond the definition.** That continuity is
  equivalent to preimages of open sets being open, to preimages of closed sets
  being closed, to sequential continuity, and to
  $f[\overline{A}] \subseteq \overline{f[A]}$, is the theorem
  [[thm-metric-continuity-characterisations]].
- **Continuity at a point is a local condition**: it depends only on the values
  of $f$ on any one ball around $a$, since the condition may always be tested
  with a smaller $\delta$.
- Every isometric embedding is continuous, with $\delta = \varepsilon$
  ([[def-isometry-and-metric-embedding]], [[lem-isometry-is-an-embedding]]), and
  so is every map that does not increase distances, such as $u \mapsto d(u,A)$
  ([[lem-distance-to-set-is-lipschitz]]).
````

### `def-metric-interior-closure-boundary`

````markdown
---
id: def-metric-interior-closure-boundary
kind: definition
title: "Interior, closure, boundary, limit point, isolated point and dense subset of a metric space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-metric-topology, def-metric-ball, thm-metric-open-set-algebra, def-metric-space]
justified_by: []
aliases: [def-closure, def-interior, def-boundary, def-limit-point, def-dense]
landmark: true
short: "$\\operatorname{int} A$, $\\overline{A}$, $\\partial A$"
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
    - title: "Closure (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closure_(topology)"
    - title: "Interior (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Interior_(topology)"
    - title: "Limit point (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_point"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Boundary (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Boundary_(topology)"
    - title: "Isolated point (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Isolated_point"
pipeline_run: null
---

## Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]), let $A \subseteq X$ and let
$x \in X$. Balls are as in [[def-metric-ball]] and open sets as in
[[def-metric-topology]]; recall that a real $r$ written as a radius is always
$> 0$.

- $x$ is an **interior point** of $A$ if $B(x,r) \subseteq A$ for some $r$. The
  set of interior points is the **interior** $\operatorname{int}(A)$.
- $x$ is an **adherent point** of $A$ if $B(x,r) \cap A \ne \emptyset$ for every
  $r$. The set of adherent points is the **closure** $\overline{A}$.
- $x$ is a **limit point** (accumulation point) of $A$ if
  $B(x,r) \cap (A \setminus \{x\}) \ne \emptyset$ for every $r$. The set of limit
  points is the **derived set** $A'$.
- $x$ is an **isolated point** of $A$ if $x \in A$ and $B(x,r) \cap A = \{x\}$
  for some $r$.
- The **boundary** of $A$ is $\partial A := \overline{A} \setminus \operatorname{int}(A)$.
- $A$ is **dense** in $X$ if $\overline{A} = X$.

**The interior is open, and it is the largest open subset of $A$.** If
$x \in \operatorname{int}(A)$, fix $r$ with $B(x,r) \subseteq A$; the ball
$B(x,r)$ is itself open ([[thm-metric-open-set-algebra]]), so every
$y \in B(x,r)$ has some $s$ with $B(y,s) \subseteq B(x,r) \subseteq A$, which
puts $y$ in $\operatorname{int}(A)$. Hence $B(x,r) \subseteq \operatorname{int}(A)$
and $\operatorname{int}(A)$ is open. It is contained in $A$, since
$x \in B(x,r) \subseteq A$ for an interior point $x$; and if $V \subseteq A$ is
open then every $v \in V$ has a ball inside $V \subseteq A$, so
$V \subseteq \operatorname{int}(A)$.

**Two descriptions of the boundary agree.** $x \in \partial A$ says that every
ball around $x$ meets $A$ and that no ball around $x$ is contained in $A$; the
second half says exactly that every ball around $x$ meets $X \setminus A$. So

$$\partial A = \{\, x \in X : B(x,r) \cap A \ne \emptyset \text{ and } B(x,r) \cap (X \setminus A) \ne \emptyset \text{ for every } r \,\},$$

from which $\partial A = \partial(X \setminus A)$ is immediate.

**Elementary containments, straight from the definitions.** $A \subseteq \overline{A}$,
because $x \in A$ lies in every $B(x,r) \cap A$; $A' \subseteq \overline{A}$,
because a ball meeting $A \setminus \{x\}$ meets $A$; and
$\operatorname{int}(A) \subseteq A \subseteq \overline{A}$. A point of $A$ is
either isolated in $A$ or a limit point of $A$, and not both, according to
whether some ball meets $A$ only in $x$.

## Remarks

- **The closure is defined here by adherent points and by nothing else.** That it
  is closed, that it is the smallest closed set containing $A$, that for nonempty
  $A$ it is $\{x : d(x,A) = 0\}$, and that it consists of the limits of sequences
  from $A$, are theorems ([[thm-metric-closure-characterisation]],
  [[thm-metric-sequential-closure]]) and are proved from this definition.
- **Limit point of a set is not the same notion as subsequential limit of a
  sequence** ([[def-subsequential-limit]]), which this library deliberately keeps
  under a different name: the constant sequence $x_k = 0$ has $0$ as a
  subsequential limit, while its set of values $\{0\}$ has no limit point at all.
- **Dense is relative to the ambient space**, and the ambient space is part of
  the data: $A$ is dense in $X$ when $\overline{A} = X$, with $\overline{A}$
  computed in $(X,d)$. The same $A$ inside a larger space is a different
  question.
````

### `def-metric-space`

````markdown
---
id: def-metric-space
kind: definition
title: "Metric space: $d(x,y) = 0$ iff $x = y$, symmetry, and the triangle inequality; pseudometric and ultrametric"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-real-numbers, def-real-order, def-complete-ordered-field, def-ordered-field,
       def-max-min, lem-finite-set-has-max]
justified_by: []
aliases: [def-metric, def-pseudometric, def-ultrametric]
landmark: true
short: "metric space $(X,d)$"
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
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "Ultrametric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ultrametric_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis II, 3rd ed., Ch. 1"
      url: "https://terrytao.wordpress.com/books/analysis-ii/"
    - title: "Pseudometric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Pseudometric_space"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 20: The Metric Topology (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-20.pdf"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]], [[def-ordered-field]]) constructed in this
library ([[def-real-numbers]]) and carrying its order ([[def-real-order]]).

Let $X$ be a set. A **metric** on $X$ is a function
$d : X \times X \to \mathbb{R}$ such that for all $x, y, z \in X$:

- **(M1) Separation.** $d(x,y) = 0$ if and only if $x = y$.
- **(M2) Symmetry.** $d(x,y) = d(y,x)$.
- **(M3) Triangle inequality.** $d(x,z) \le d(x,y) + d(y,z)$.

A **metric space** is a pair $(X,d)$ consisting of a set $X$ and a metric $d$ on
it. The elements of $X$ are its **points** and $d(x,y)$ is the **distance** from
$x$ to $y$. When only one metric is in play we write $X$ for $(X,d)$; when
several are, the metric is always named.

**The values of a metric are real numbers.** The codomain is $\mathbb{R}$, so
$d(x,y)$ is an honest element of the complete ordered field and every
inequality above is an inequality there. No infinite value is permitted;
[[rem-metric-axiom-conventions]] records why extended metrics are not treated in
this library.

**Nonnegativity is deliberately absent from the axiom list.** Many texts add a
fourth axiom $d(x,y) \ge 0$. It is redundant: (M1), (M2) and (M3) already force
it, as [[lem-metric-nonnegativity]] proves. Nothing below assumes it before that
lemma is available.

**Pseudometric.** A **pseudometric** on $X$ is a function
$p : X \times X \to \mathbb{R}$ satisfying (M2), (M3) and the weakening

- **(M1') Reflexivity.** $p(x,x) = 0$ for every $x \in X$

of (M1). A pseudometric may therefore assign distance $0$ to two distinct
points. Every metric is a pseudometric, and a pseudometric is a metric exactly
when $p(x,y) = 0$ forces $x = y$.

**Ultrametric.** An **ultrametric** on $X$ is a metric $d$ that in addition
satisfies

- **(M3') Strong triangle inequality.** $d(x,z) \le \max\{d(x,y), d(y,z)\}$

for all $x, y, z \in X$, where the maximum is that of a two-element subset of
$\mathbb{R}$, which exists and is one of the two elements
([[def-max-min]], [[lem-finite-set-has-max]]). An **ultrametric space** is a pair
$(X,d)$ with $d$ an ultrametric.

## Remarks

- **(M3') is a genuine strengthening of (M3), not an independent axiom on top of
  it.** A function satisfying (M1), (M2) and (M3') automatically satisfies (M3):
  by [[lem-metric-nonnegativity]] such a function is nonnegative, and for
  nonnegative reals $a, b$ one has $\max\{a,b\} \le a + b$, since the maximum is
  one of $a, b$ and the other summand is $\ge 0$. So "a metric satisfying (M3')"
  and "a function satisfying (M1), (M2), (M3')" describe the same objects, and
  the definition above may be read either way.

- **Why the biconditional form of (M1).** Splitting (M1) into "$d(x,x) = 0$" and
  "$d(x,y) = 0 \Rightarrow x = y$" gives the same notion; the split form is what
  makes the pseudometric weakening above a matter of deleting one clause. The
  naming fork between *pseudometric* and *semimetric*, which is live in the
  literature, is settled for this library in
  [[rem-metric-axiom-conventions]].

- **The metric is part of the data.** Two different metrics on the same set are
  two different metric spaces, even when they have the same open sets. That is
  why [[def-equivalent-metrics]] compares metrics at three separate strengths
  rather than one, and why a property can be invariant under one of them and not
  under another ([[fs-boundedness-is-a-topological-property]]).
````

### `def-metric-uniform-continuity`

````markdown
---
id: def-metric-uniform-continuity
kind: definition
title: "Uniform continuity of a map of metric spaces: one $\\delta$ serving every point"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-metric-continuity, def-metric-space, def-equivalent-metrics,
       def-metric-ball]
justified_by: []
forward_refs: [cex-continuous-map-destroying-cauchyness]
aliases: []
landmark: true
short: "uniform continuity"
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
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Let $(X,d_X)$ and $(Y,d_Y)$ be metric spaces ([[def-metric-space]]) and let
$f : X \to Y$ be a function.

$f$ is **uniformly continuous** if for every real $\varepsilon > 0$ there is a
real $\delta > 0$ such that

$$d_X(x,x') < \delta \;\Longrightarrow\; d_Y\big(f(x), f(x')\big) < \varepsilon \qquad \text{for all } x, x' \in X .$$

**The whole content is in the quantifier order.** Continuity at a point $a$
allows $\delta$ to depend on $\varepsilon$ *and on $a$*
([[def-metric-continuity]]); uniform continuity demands one $\delta$ that works
for every pair of points at once. Written with the quantifiers in order,
continuity on $X$ is
$\forall \varepsilon\, \forall a\, \exists \delta\, \forall x$ and uniform
continuity is $\forall \varepsilon\, \exists \delta\, \forall a\, \forall x$;
moving $\exists \delta$ to the left is the entire difference, and it is a
strictly stronger condition.

**Uniform continuity is a property of the triple $(d_X, d_Y, f)$.** Both metrics
are named, and neither may be replaced by a merely topologically equivalent one
without changing the notion.

**This definition was promised earlier and is now discharged.**
[[def-metric-continuity]] records that uniform continuity is not defined there,
and [[def-equivalent-metrics]] writes the condition out in full for the identity
maps of two metrics on one set rather than naming it. With the definition above,
*uniform equivalence* of $d$ and $d'$ says exactly that
$\mathrm{id} : (X,d) \to (X,d')$ and $\mathrm{id} : (X,d') \to (X,d)$ are both
uniformly continuous, which is how that condition is read from here on.

## Remarks

- **Uniform continuity implies continuity, and the converse fails.** The
  implication is immediate, since a $\delta$ serving every point serves each
  point; it is recorded with the rest of the hierarchy in
  [[thm-metric-regularity-hierarchy]]. The failure of the converse is witnessed
  by $x \mapsto 1/x$ on $(0,1)$
  ([[cex-continuous-map-destroying-cauchyness]]).
- **The condition is symmetric in $x$ and $x'$** and says nothing about a
  distinguished point, which is why it is stated with two free variables and no
  base point. In ball language it reads: for every $\varepsilon > 0$ there is
  $\delta > 0$ with $f[B_X(x,\delta)] \subseteq B_Y(f(x),\varepsilon)$ for
  **every** $x \in X$ simultaneously ([[def-metric-ball]]).
- **What uniform continuity buys.** It transports Cauchy sequences
  ([[thm-uniform-continuity-preserves-cauchy]]), which ordinary continuity does
  not, and that single property is what makes extension from a dense subspace
  possible ([[thm-uniformly-continuous-extension-from-dense]]) and what makes
  completion functorial enough to be unique
  ([[thm-metric-completion-unique]]).
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

### `lem-real-line-is-a-metric-space`

````markdown
---
id: lem-real-line-is-a-metric-space
kind: lemma
title: "The absolute value makes $\\mathbb{R}$ a metric space: $d(x,y) = |x-y|$ is a metric, its open balls are the intervals $(x-r, x+r)$, and it is unbounded"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-metric-space, def-metric-ball, def-metric-topology, def-metric-bounded-diameter,
       def-abs-value, lem-of-abs-value, lem-of-triangle-inequality, def-interval,
       thm-of-archimedean, def-complete-ordered-field, def-ordered-field,
       lem-of-add-order, lem-of-naturals-positive]
justified_by: []
aliases: [def-usual-metric-on-r]
landmark: true
short: "$(\\mathbb{R}, |x-y|)$"
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
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "Real line (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Real_line"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 20: The Metric Topology (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-20.pdf"
pipeline_run: null
---

## Statement

Define $d_{\mathbb{R}} : \mathbb{R} \times \mathbb{R} \to \mathbb{R}$ by
$d_{\mathbb{R}}(x,y) := |x - y|$ ([[def-abs-value]]). Then:

1. $d_{\mathbb{R}}$ is a metric on $\mathbb{R}$ ([[def-metric-space]]); it is
   called the **usual metric** of $\mathbb{R}$.
2. For $x \in \mathbb{R}$ and $r > 0$ the open ball is the bounded open interval
   ([[def-interval]], [[def-metric-ball]])
   $$B(x,r) = (x-r,\ x+r),$$
   and the closed ball is $\bar B(x,r) = [x-r,\ x+r]$.
3. Consequently $U \subseteq \mathbb{R}$ is open in the metric topology of
   $d_{\mathbb{R}}$ ([[def-metric-topology]]) exactly when for every $x \in U$
   there is $r > 0$ with $(x-r, x+r) \subseteq U$. This topology is called the
   **usual topology** of $\mathbb{R}$.
4. $(\mathbb{R}, d_{\mathbb{R}})$ is not a bounded metric space
   ([[def-metric-bounded-diameter]]): no ball contains $\mathbb{R}$, so
   $\operatorname{diam}(\mathbb{R})$ is not defined.

## Facts & Assumptions

**Given:** The complete ordered field $\mathbb{R}$ ([[def-complete-ordered-field]], [[def-ordered-field]]) with its absolute value ([[def-abs-value]]), and the function $d_{\mathbb{R}}(x,y) = |x-y|$; points $x, y, z \in \mathbb{R}$ and a real $r > 0$.

[L1] Absolute value: $|u| \ge 0$; $|u| = 0$ if and only if $u = 0$; $|-u| = |u|$; and for $c > 0$ one has $|u| < c$ if and only if $-c < u < c$ ([[lem-of-abs-value]], [[def-abs-value]]).

[L2] Triangle inequality in an ordered field: $|u + v| \le |u| + |v|$ ([[lem-of-triangle-inequality]]).

[L3] Intervals: $(a,b) = \{t : a < t < b\}$ and $[a,b] = \{t : a \le t \le b\}$ ([[def-interval]]).

[L4] Archimedean property: for every $w \in \mathbb{R}$ there is a natural $n \ge 1$ with $w < n \cdot 1_{\mathbb{R}}$ ([[thm-of-archimedean]]); and $n \cdot 1_{\mathbb{R}} > 0$ for $n \ge 1$ ([[lem-of-naturals-positive]]).

[L5] Adding a constant to an inequality, in strict and nonstrict form: the strict form is [[lem-of-add-order]] and the nonstrict form is that together with the case of equality, the order being total ([[def-ordered-field]]).

[L6] Trichotomy: for reals $a,b$ exactly one of $a < b$, $a = b$, $b < a$ holds ([[def-complete-ordered-field]], [[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Separation (M1): $d_{\mathbb{R}}(x,y) = |x-y| = 0$ holds if and only if $x - y = 0$, that is if and only if $x = y$. [L1]

1.2 Symmetry (M2): $d_{\mathbb{R}}(y,x) = |y-x| = |-(x-y)| = |x-y| = d_{\mathbb{R}}(x,y)$. [L1]

1.3 Triangle inequality (M3): $d_{\mathbb{R}}(x,z) = |x - z| = |(x-y) + (y-z)| \le |x-y| + |y-z| = d_{\mathbb{R}}(x,y) + d_{\mathbb{R}}(y,z)$. [L2]

1.4 For $y \in \mathbb{R}$ and $r > 0$: $y \in B(x,r)$ means $|x - y| < r$, which by [L1] holds if and only if $-r < x - y < r$, and adding $y - r$ respectively $y + r$ to the two halves shows this is equivalent to $x - r < y < x + r$. [L1, L5]

1.5 For $y \in \mathbb{R}$ and $r > 0$: $y \in \bar B(x,r)$ means $|x-y| \le r$, which by the same equivalence read with $\le$ in place of $<$ holds if and only if $x - r \le y \le x + r$. [L1, L5]

1.6 Let $x_0 \in \mathbb{R}$ and $r > 0$ be arbitrary, and use [L4] to fix a natural $n \ge 1$ with $x_0 + r < n \cdot 1_{\mathbb{R}}$; write $w := n \cdot 1_{\mathbb{R}}$. [L4, choose]

2.1 By steps 1.1, 1.2 and 1.3 the function $d_{\mathbb{R}}$ satisfies (M1), (M2) and (M3), so it is a metric on $\mathbb{R}$, which is claim 1. [step 1.1, step 1.2, step 1.3]

2.2 By step 1.4 and [L3] the set $B(x,r)$ has exactly the elements of $(x-r,x+r)$, and by step 1.5 and [L3] the set $\bar B(x,r)$ has exactly the elements of $[x-r,x+r]$; this is claim 2. [step 1.4, step 1.5, L3]

2.3 Since $r > 0$ we have $x_0 < x_0 + r < w$, so $w - x_0 > r > 0$ and hence $d_{\mathbb{R}}(x_0, w) = |x_0 - w| = |-(w - x_0)| = w - x_0 > r$; therefore $w \notin B(x_0,r)$. [step 1.6, L1, L5, L6]

3.1 Substituting claim 2 into the definition of open in the metric topology gives claim 3: $U$ is open exactly when every $x \in U$ admits $r > 0$ with $(x-r,x+r) = B(x,r) \subseteq U$. [step 2.2]

4.1 Since $x_0$ and $r$ were arbitrary, step 2.3 exhibits for every ball $B(x_0,r)$ a real not in it, so no ball contains $\mathbb{R}$; hence $\mathbb{R}$ is not a bounded subset of itself and $\operatorname{diam}(\mathbb{R})$ is not defined, which is claim 4. [step 2.1, step 2.3] ∎

## Remarks

- **This is the metric every later ceiling rests on.** Every real-line example on the companion page, and every subspace of $\mathbb{R}$ used there, takes its metric from $d_{\mathbb{R}}$ through the subspace construction of [[def-isometry-and-metric-embedding]].
- **Unboundedness needs no Archimedean input, and no completeness either.** No ordered field is bounded under $d(u,v) = |u-v|$, and the reason is a single element rather than any cofinality property: given a centre $c$ and a radius $r > 0$, the element $c + r + 1$ satisfies $d(c,\, c + r + 1) = |{-(r+1)}| = r + 1 > r$, because $1 > 0$ and $r + 1 > 0$ ([[lem-of-abs-value]], [[cor-of-one-positive]], [[lem-of-add-order]]); so it lies outside $B(c,r)$ and no ball contains the field. Step 1.6 above chooses its witness with [[thm-of-archimedean]] instead, which is a convenience and not a necessity: it delivers a witness that is a canonical natural, and claim 4 needs no such thing. Claim 4 therefore holds verbatim in every ordered field with this $d$, Archimedean or not. Note also that a radius is an element of $\mathbb{R}$, so "a ball of infinite radius" is not something that can be written here.
- **The claim that $\operatorname{diam}(\mathbb{R})$ is "not defined" is a claim about the conventions of this development** ([[rem-sup-conventions]], [[def-metric-bounded-diameter]]): suprema here are real numbers and the extended real line, which is introduced on a later page, is not used for them, so an unbounded set has no diameter at all rather than a diameter $+\infty$.
````

### `thm-closure-characterisations-r`

````markdown
---
id: thm-closure-characterisations-r
kind: theorem
title: "The closure equals the set together with its limit points, equals the set of points every neighbourhood of which meets it, and is the smallest closed superset; a set is closed iff it contains its limit points"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-interior-closure-boundary-r, def-limit-point-r, def-open-and-closed-in-r, thm-open-set-algebra-r, def-neighbourhood-r]
justified_by: []
aliases: []
landmark: true
short: "$\\overline{A} = A \\cup A'$"
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
    - title: "Closure (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closure_(topology)"
    - title: "Limit point (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_point"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Thm 2.27)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §7.2"
      url: "https://www.jirka.org/ra/"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, with closure $\overline{A}$ as in
[[def-interior-closure-boundary-r]] and derived set $A'$ as in
[[def-limit-point-r]]. Write

$$E \;:=\; \{\, x \in \mathbb{R} : N_\varepsilon(x) \cap A \ne \varnothing \text{ for every real } \varepsilon > 0 \,\}$$

for the set of adherent points of $A$ ([[def-neighbourhood-r]]). Then:

1. $\overline{A} = E$.
2. $\overline{A} = A \cup A'$.
3. $\overline{A}$ is the smallest closed superset of $A$: it is closed, it
   contains $A$, and it is contained in every closed $F$ with $A \subseteq F$.
4. $A$ is closed if and only if $A = \overline{A}$, if and only if
   $A' \subseteq A$.

Claim 3 is the content of the definition of $\overline{A}$ and is restated here
so that the four descriptions stand together; claims 1, 2 and 4 are the ones
that carry work.

## Facts & Assumptions

**Given:** A subset $A \subseteq \mathbb{R}$, and the set $E$ of adherent points of $A$ as displayed in the Statement.

[L1] $U$ is open when every $x \in U$ admits $\varepsilon > 0$ with $N_\varepsilon(x) \subseteq U$; $F$ is closed when $\mathbb{R} \setminus F$ is open ([[def-open-and-closed-in-r]]).

[L2] $x \in N_\varepsilon(x)$; $N^{*}_\varepsilon(x) = N_\varepsilon(x) \setminus \{x\} \subseteq N_\varepsilon(x)$; and if $y \in N_\varepsilon(x)$ then $\delta := \varepsilon - |y - x| > 0$ and $N_\delta(y) \subseteq N_\varepsilon(x)$ ([[def-neighbourhood-r]]).

[L3] $\overline{A}$ is the intersection of the nonempty family of closed supersets of $A$; it is closed, it contains $A$, and it is contained in every closed superset of $A$ ([[def-interior-closure-boundary-r]], [[thm-open-set-algebra-r]]).

[L4] $x$ is an adherent point of $A$ when every $N_\varepsilon(x)$ meets $A$, a limit point when every $N^{*}_\varepsilon(x)$ meets $A$, and $A'$ is the set of limit points ([[def-limit-point-r]]).

## Proof

**Proof technique:** direct.

1.1 $A \subseteq E$: for $x \in A$ and any $\varepsilon > 0$ one has $x \in N_\varepsilon(x) \cap A$, so that intersection is nonempty. [L2, L4]

1.2 Let $x \in \mathbb{R} \setminus E$; by the definition of $E$ there is a real $\varepsilon > 0$ with $N_\varepsilon(x) \cap A = \varnothing$. [L4, choose]

1.3 Let $F$ be closed with $A \subseteq F$, and let $x \in \mathbb{R} \setminus F$; since $\mathbb{R} \setminus F$ is open there is a real $\eta > 0$ with $N_\eta(x) \subseteq \mathbb{R} \setminus F$. [L1, choose]

2.1 For every $y \in N_\varepsilon(x)$ the radius $\delta := \varepsilon - |y - x|$ is positive and $N_\delta(y) \subseteq N_\varepsilon(x)$, so $N_\delta(y) \cap A = \varnothing$ and $y \notin E$; hence $N_\varepsilon(x) \subseteq \mathbb{R} \setminus E$, and since $x$ was an arbitrary point of $\mathbb{R} \setminus E$ that set is open, that is, $E$ is closed. [step 1.2, L1, L2, L4]

2.2 From $N_\eta(x) \subseteq \mathbb{R} \setminus F \subseteq \mathbb{R} \setminus A$ we get $N_\eta(x) \cap A = \varnothing$, so $x \notin E$; hence $\mathbb{R} \setminus F \subseteq \mathbb{R} \setminus E$, that is, $E \subseteq F$, for every closed $F \supseteq A$. [step 1.3, L4]

3.1 By steps 1.1 and 2.1 the set $E$ is a closed superset of $A$, so $\overline{A} \subseteq E$ by the leastness in [L3]; and $\overline{A}$ is itself a closed superset of $A$ by [L3], so step 2.2 applied to $F = \overline{A}$ gives $E \subseteq \overline{A}$. Hence $\overline{A} = E$, which is claim 1. [step 1.1, step 2.1, step 2.2, L3]

4.1 $E = A \cup A'$: if $x \in E$ and $x \notin A$ then for every $\varepsilon > 0$ some $a \in N_\varepsilon(x) \cap A$ exists, and $a \ne x$ because $x \notin A$, so $a \in N^{*}_\varepsilon(x) \cap A$ and $x \in A'$; conversely $A \subseteq E$ by step 1.1, and $A' \subseteq E$ because $N^{*}_\varepsilon(x) \subseteq N_\varepsilon(x)$. Combining with step 3.1 gives $\overline{A} = A \cup A'$, which is claim 2. [step 1.1, step 3.1, L2, L4]

5.1 Claim 4: if $A$ is closed then $A$ is a closed superset of itself, so $\overline{A} \subseteq A$ by [L3], while $A \subseteq \overline{A}$ by [L3], whence $A = \overline{A}$; conversely if $A = \overline{A}$ then $A$ is closed because $\overline{A}$ is. Finally $A = \overline{A}$ says $A = A \cup A'$ by step 4.1, and $A = A \cup A'$ holds exactly when $A' \subseteq A$. [step 4.1, L3]

6.1 Claim 3 is [L3] restated, and claims 1, 2 and 4 are steps 3.1, 4.1 and 5.1, so all four hold. [step 3.1, step 4.1, step 5.1, L3] ∎

## Remarks

- **Which claim does the work in practice.** Claim 1 is the one used almost
  everywhere below: to show a point lies in $\overline{A}$ one exhibits, for each
  $\varepsilon > 0$, a point of $A$ within $\varepsilon$ of it. Claim 2 is what
  separates the two ways a point can be adherent, by membership or by
  accumulation, and it is what makes the notion of an isolated point visible.

- **No special property of $\mathbb{R}$ is used.** The argument uses the
  definitions of open, closed, neighbourhood and closure, and the order enters
  only through the nesting property of neighbourhoods; neither the
  least-upper-bound property nor the Archimedean property appears at any step.
  The results of this page that do use them are flagged in
  [[rem-r-native-topology-scope]].

- **The sequential form is a separate theorem and costs more.** Replacing
  "every neighbourhood meets $A$" by "some sequence in $A$ converges to $x$" is
  [[lem-sequential-characterisation-of-closure-r]], and the passage from the
  first to the second spends the axiom of countable choice, since it selects one
  point of $A$ from each of infinitely many neighbourhoods. The characterisation
  proved above is choice free.
````

### `thm-euclidean-space-complete`

````markdown
---
id: thm-euclidean-space-complete
kind: theorem
title: "$\\mathbb{R}$ and $\\mathbb{R}^n$ for $n \\ge 1$ with the Euclidean metric are complete, componentwise from the Cauchy criterion in $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-complete-metric-space, thm-cauchy-criterion-via-lub, def-cauchy-in-metric,
       def-metric-space, def-metric-convergence, def-finite-sum, thm-of-square-roots,
       lem-metrics-on-rn, lem-real-line-is-a-metric-space, lem-finite-set-has-max,
       def-max-min, lem-finite-sum-laws, def-real-limit, lem-of-square-monotone,
       lem-of-abs-value, lem-of-inverse-positive, thm-well-ordering-principle, lem-limit-unique]
justified_by: []
aliases: []
landmark: true
short: "$\\mathbb{R}$ and $\\mathbb{R}^n$ are complete"
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
    - title: "Complete metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Complete_metric_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

1. $(\mathbb{R}, d_{\mathbb{R}})$ with the usual metric $d_{\mathbb{R}}(x,y) = |x-y|$
   ([[lem-real-line-is-a-metric-space]]) is a complete metric space
   ([[def-complete-metric-space]]).
2. Let $n \in \mathbb{N}$ with $n \ge 1$ and let $d_2$ be the Euclidean metric on
   $\mathbb{R}^n$ ([[lem-metrics-on-rn]]). Then $(\mathbb{R}^n, d_2)$ is complete.

**The hypothesis $n \ge 1$ is inherited and is not decoration.**
[[lem-metrics-on-rn]] defines $\mathbb{R}^n$ and its three metrics only for
$n \ge 1$, because at $n = 0$ the metric $d_\infty$ would be a maximum over the
empty index set. Every statement about $\mathbb{R}^n$ in this library carries the
hypothesis, and this one does too.

## Facts & Assumptions

**Given:** A natural $n \ge 1$; $\mathbb{R}^n$ is the set of functions $n \to \mathbb{R}$ with $d_2(x,y) = \sqrt{\sum_{k<n}(x_k-y_k)^2}$; a real $\varepsilon > 0$.

[A1] Cauchy criterion in $\mathbb{R}$: every Cauchy sequence of reals converges to a real ([[thm-cauchy-criterion-via-lub]], [[def-real-limit]]).

[L1] The usual metric of $\mathbb{R}$ is $d_{\mathbb{R}}(x,y) = |x-y|$ ([[lem-real-line-is-a-metric-space]]).

[L2] Convergence in a metric space: $x_k \to p$ in $(X,d)$ means $d(x_k,p) \to 0$ in $\mathbb{R}$; Cauchyness means $d(x_m,x_n) < \varepsilon$ for $m,n$ beyond an index ([[def-metric-convergence]], [[def-cauchy-in-metric]], [[def-metric-space]]).

[L3] $d_2$ is a metric on $\mathbb{R}^n$ for $n \ge 1$, its defining sum is a finite sum, and the sum of squares is nonnegative with a unique nonnegative square root ([[lem-metrics-on-rn]], [[def-finite-sum]], [[thm-of-square-roots]]).

[L4] Finite sums of nonnegative terms dominate each term and are monotone, and $\sum_{k<n} \lambda = n\lambda$ ([[lem-finite-sum-laws]], claims 2 and 4).

[L5] For $a, b \ge 0$: $a \le b \iff a^2 \le b^2$ and $a < b \iff a^2 < b^2$ ([[lem-of-square-monotone]]); and $|t|^2 = t^2$ for every real $t$ ([[lem-of-abs-value]]).

[L6] A nonempty finite set of naturals has a maximum, and every nonempty set of naturals has a least element ([[lem-finite-set-has-max]], [[def-max-min]], [[thm-well-ordering-principle]]).

[L7] $n \ge 1$ gives $0 < 1/n \le 1$ and $0 < \varepsilon/(2n)$ ([[lem-of-inverse-positive]]).

[L8] Limits of real sequences are unique, which is what licenses writing $\lim_k x_k$ for a sequence already known to converge ([[lem-limit-unique]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] a sequence $(x_k)$ of reals is Cauchy in $(\mathbb{R}, d_{\mathbb{R}})$ exactly when $|x_m - x_n| < \varepsilon$ for all $m,n$ beyond an index and every rational $\varepsilon > 0$, which is verbatim the Cauchy condition of [[def-real-limit]]; and $x_k \to p$ in $(\mathbb{R}, d_{\mathbb{R}})$ exactly when $|x_k - p| \to 0$, which is verbatim convergence to $p$ there. [L1, L2]

1.2 Let $x, y \in \mathbb{R}^n$ and $j < n$. The terms $(x_k - y_k)^2$ are nonnegative, so $(x_j - y_j)^2 \le \sum_{k<n}(x_k-y_k)^2 = d_2(x,y)^2$; both $|x_j - y_j|$ and $d_2(x,y)$ are nonnegative and $|x_j-y_j|^2 = (x_j-y_j)^2$, so $|x_j - y_j| \le d_2(x,y)$. [L3, L4, L5]

1.3 Let $x, y \in \mathbb{R}^n$ satisfy $|x_j - y_j| < \varepsilon/(2n)$ for every $j < n$. Then $(x_j-y_j)^2 \le (\varepsilon/(2n))^2$ for every $j < n$, so $d_2(x,y)^2 \le n \cdot \varepsilon^2/(4n^2) = \varepsilon^2/(4n) \le \varepsilon^2/4 < \varepsilon^2$, and therefore $d_2(x,y) < \varepsilon$. [L3, L4, L5, L7]

2.1 Claim 1: let $(x_k)$ be a Cauchy sequence in $(\mathbb{R}, d_{\mathbb{R}})$. By step 1.1 it is a Cauchy sequence of reals, so by [A1] it converges to some $x \in \mathbb{R}$, and by step 1.1 again $x_k \to x$ in $(\mathbb{R}, d_{\mathbb{R}})$. Hence every Cauchy sequence in $(\mathbb{R}, d_{\mathbb{R}})$ converges in it. [step 1.1, A1, L2]

2.2 Now let $(x^{(k)})$ be a Cauchy sequence in $(\mathbb{R}^n, d_2)$ and fix $j < n$. By step 1.2, $|x^{(m)}_j - x^{(l)}_j| \le d_2(x^{(m)}, x^{(l)})$ for all $m, l$, so the real sequence $(x^{(k)}_j)_{k}$ is Cauchy, and by [A1] it converges; its limit is unique, so the notation $y_j := \lim_{k} x^{(k)}_j$ denotes a single real. [step 1.2, A1, L2, L8]

3.1 The assignment $j \mapsto y_j$ is a function $n \to \mathbb{R}$, hence an element $y \in \mathbb{R}^n$; no choice is used, because $y_j$ is the unique limit of the $j$-th coordinate sequence. [step 2.2, L3, construct]

3.2 For each $j < n$ let $K_j$ be the least natural such that $|x^{(k)}_j - y_j| < \varepsilon/(2n)$ for all $k \ge K_j$, which exists because the coordinate sequence converges to $y_j$ and every nonempty set of naturals has a least element; and put $K := \max\{K_j : j < n\}$, a maximum of a nonempty finite set of naturals since $n \ge 1$. [step 2.2, L6, L7, choose]

4.1 For every $k \ge K$ and every $j < n$ we have $k \ge K_j$, hence $|x^{(k)}_j - y_j| < \varepsilon/(2n)$, and therefore $d_2(x^{(k)}, y) < \varepsilon$ by step 1.3. [step 1.3, step 3.1, step 3.2]

5.1 Since $\varepsilon > 0$ was an arbitrary real, $x^{(k)} \to y$ in $(\mathbb{R}^n, d_2)$ with $y \in \mathbb{R}^n$; so every Cauchy sequence in $(\mathbb{R}^n, d_2)$ converges in it, which with step 2.1 gives claims 1 and 2. [step 2.1, step 4.1, L2] ∎

## Remarks

- **The proof is the Cauchy criterion plus two inequalities.** Step 1.2 says a coordinate difference is at most the Euclidean distance, which turns a Cauchy sequence of points into $n$ Cauchy sequences of reals; step 1.3 says that coordinates uniformly below $\varepsilon/(2n)$ force the Euclidean distance below $\varepsilon$, which turns $n$ convergent coordinate sequences back into one convergent sequence of points. Nothing else about $\mathbb{R}^n$ is used, and in particular the Cauchy-Schwarz inequality is not needed here.
- **The same two inequalities hold for $d_1$ and $d_\infty$**, with the same proof of completeness. For $d_1(x,y) = \sum_{k<n}|x_k-y_k|$: each term is at most the sum ([[lem-finite-sum-laws]]), so $|x_j-y_j| \le d_1(x,y)$; and $|x_j-y_j| < \varepsilon/(2n)$ for all $j < n$ gives $d_1(x,y) \le n\varepsilon/(2n) = \varepsilon/2 < \varepsilon$. For $d_\infty(x,y) = \max\{|x_k-y_k| : k<n\}$: the maximum dominates each entry and is one of them ([[lem-finite-set-has-max]]), so $|x_j-y_j| \le d_\infty(x,y)$, and entries all below $\varepsilon/2$ make the maximum at most $\varepsilon/2$. Substituting either pair of inequalities for steps 1.2 and 1.3 leaves the rest of the proof unchanged, so $(\mathbb{R}^n, d_1)$ and $(\mathbb{R}^n, d_\infty)$ are complete as well. Nothing later on this page uses that.
- **No choice is spent.** The limit point $y$ is assembled coordinatewise in step 3.1 from limits that are unique, and the finitely many indices $K_j$ of step 3.2 are made canonical by taking the least one. This matters because completeness proofs elsewhere on this page do spend $\mathrm{AC}_\omega$, and the contrast is worth keeping visible.
- **Where the least-upper-bound property is.** Entirely inside [[thm-cauchy-criterion-via-lub]]. This theorem is a transfer result: it moves completeness from $\mathbb{R}$ to $\mathbb{R}^n$ and adds no new content about the reals.
````

### `thm-uniformly-continuous-extension-from-dense`

````markdown
---
id: thm-uniformly-continuous-extension-from-dense
kind: theorem
title: "A uniformly continuous map from a dense subspace into a complete metric space extends uniquely to a uniformly continuous map on the whole space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-cantor-intersection-metric, def-complete-metric-space,
       def-metric-interior-closure-boundary, thm-metric-sequential-closure,
       def-metric-uniform-continuity, def-countable-choice, lem-metric-limits-unique,
       def-metric-convergence, thm-metric-continuity-characterisations,
       def-isometry-and-metric-embedding, def-metric-bounded-diameter,
       def-metric-ball, def-metric-topology, def-metric-space,
       thm-metric-closure-characterisation, cor-archimedean-reciprocal,
       def-metric-continuity, thm-metric-regularity-hierarchy,
       def-complete-ordered-field, lem-of-inverse-positive]
justified_by: []
forward_refs: [ex-lipschitz-extension-from-the-rationals]
aliases: []
landmark: true
short: "extension from a dense subspace"
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
    - title: "Uniform continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Uniform_continuity"
    - title: "Continuous linear extension (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_linear_extension"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(X,d_X)$ be a metric space ([[def-metric-space]]), let $A \subseteq X$ be
dense in $X$ ([[def-metric-interior-closure-boundary]]) and carry the subspace
metric ([[def-isometry-and-metric-embedding]]), let $(Y,d_Y)$ be a **complete**
metric space ([[def-complete-metric-space]]), and let $f : A \to Y$ be uniformly
continuous ([[def-metric-uniform-continuity]]). Then:

1. There is a uniformly continuous $g : X \to Y$ with $g(a) = f(a)$ for every
   $a \in A$.
2. $g$ is the **only** continuous map $X \to Y$ extending $f$
   ([[def-metric-continuity]]).

The map $g$ is constructed explicitly below, as the unique point common to the
closures of the images of the shrinking balls around $x$; no value of $g$ is
selected, each is determined.

## Facts & Assumptions

**Given:** A metric space $(X,d_X)$, a dense $A \subseteq X$, a complete metric space $(Y,d_Y)$, a uniformly continuous $f : A \to Y$, and a real $\varepsilon > 0$. For $x \in X$ and $n \in \mathbb{N}$ write $U_n(x) := B_X\big(x, 1/(n+1)\big) \cap A$, $S_n(x) := f[U_n(x)]$ and $T_n(x) := \overline{S_n(x)}$, the closure taken in $Y$.

[A1] Density: $\overline{A} = X$, so $B_X(x,r) \cap A \ne \emptyset$ for every $x \in X$ and every real $r > 0$ ([[def-metric-interior-closure-boundary]], [[def-metric-ball]]).

[A2] Uniform continuity of $f$: for every real $\varepsilon > 0$ there is a real $\delta > 0$ with $d_Y(f(a),f(a')) < \varepsilon$ for all $a,a' \in A$ with $d_X(a,a') < \delta$; distances inside $A$ are those of $X$ ([[def-metric-uniform-continuity]], [[def-isometry-and-metric-embedding]]).

[A3] Completeness of $(Y,d_Y)$ ([[def-complete-metric-space]]).

[L1] Cantor's intersection theorem in a complete space: a sequence of nonempty closed bounded sets, nested and with diameters tending to $0$, has exactly one common point ([[thm-cantor-intersection-metric]]).

[L2] Closure by adherent points: $u \in \overline{S}$ means every ball around $u$ meets $S$; $S \subseteq \overline{S}$; $\overline{S}$ is closed and is the smallest closed superset of $S$ ([[def-metric-interior-closure-boundary]], [[thm-metric-closure-characterisation]], [[def-metric-topology]]).

[L3] Diameter: for nonempty bounded $S$, $\operatorname{diam}(S) = \sup\{d(u,v) : u,v \in S\}$, so any upper bound of those distances dominates the diameter; a nonempty set all of whose pairwise distances are below a real $\beta$ lies in a ball of radius $\beta + 1$ around any of its points, hence is bounded ([[def-metric-bounded-diameter]], [[def-complete-ordered-field]], [[def-metric-ball]]).

[L4] Reciprocals of naturals: $1/(n+1)$ is a positive real, decreasing in $n$, and below every positive real from some index on ([[cor-archimedean-reciprocal]], [[lem-of-inverse-positive]]).

[L5] A point lies in the closure of $A$ exactly when some sequence in $A$ converges to it; this direction spends $\mathrm{AC}_\omega$ ([[thm-metric-sequential-closure]], [[def-countable-choice]], [[def-metric-convergence]]).

[L6] A continuous map is sequentially continuous ([[thm-metric-continuity-characterisations]]), limits in a metric space are unique ([[lem-metric-limits-unique]]), and a uniformly continuous map is continuous ([[thm-metric-regularity-hierarchy]]).

[L7] Triangle inequality (M3) and symmetry (M2) of a metric ([[def-metric-space]]).

## Proof

**Proof technique:** constructive.

1.1 For every $x \in X$ and $n \in \mathbb{N}$ the set $U_n(x)$ is nonempty by [A1], so $S_n(x)$ is nonempty and $T_n(x)$ is a nonempty closed subset of $Y$. [A1, L2, construct]

1.2 The radii decrease, so $U_{n+1}(x) \subseteq U_n(x)$ and $S_{n+1}(x) \subseteq S_n(x)$; since $T_n(x)$ is a closed superset of $S_{n+1}(x)$, minimality of the closure gives $T_{n+1}(x) \subseteq T_n(x)$. [L2, L4]

1.3 Fix a real $\varepsilon > 0$, let $\delta > 0$ be as in [A2] for $\varepsilon/3$, and let $N$ be a natural with $2/(N+1) < \delta$; note that $N$ depends on $\varepsilon$ alone and not on $x$. [A2, L4, choose]

1.4 Towards uniform continuity, let $\varepsilon > 0$ be real, let $\delta > 0$ be as in [A2] for $\varepsilon/3$, and put $\delta' := \delta/3 > 0$. Fix a natural $m$ with $1/(m+1) < \delta/3$. [A2, L4, choose]

1.5 For claim 2, let $h : X \to Y$ be continuous with $h(a) = f(a)$ for all $a \in A$, and let $x \in X$. Since $\overline{A} = X$ there is a sequence $(a_k)$ in $A$ with $a_k \to x$ in $X$. [A1, L5]

2.1 Let $n \ge N$ and $a, a' \in U_n(x)$. Then $d_X(a,a') \le d_X(a,x) + d_X(x,a') < 2/(n+1) \le 2/(N+1) < \delta$, so $d_Y(f(a),f(a')) < \varepsilon/3$. Hence all pairwise distances in $S_n(x)$ are below $\varepsilon/3$, so $S_n(x)$ is bounded and $\operatorname{diam}(S_n(x)) \le \varepsilon/3$. [step 1.3, A2, L3, L4, L7]

3.1 Let $n \ge N$, let $u,v \in T_n(x)$ and let $\eta > 0$ be real. The balls $B_Y(u,\eta)$ and $B_Y(v,\eta)$ meet $S_n(x)$, so there are $s,s' \in S_n(x)$ with $d_Y(u,s) < \eta$ and $d_Y(v,s') < \eta$, whence $d_Y(u,v) \le d_Y(u,s) + d_Y(s,s') + d_Y(s',v) < \varepsilon/3 + 2\eta$. As $\eta > 0$ was arbitrary, $d_Y(u,v) \le \varepsilon/3$: were $d_Y(u,v) > \varepsilon/3$, the value $\eta := (d_Y(u,v) - \varepsilon/3)/3$ would be positive and would give $d_Y(u,v) < d_Y(u,v)$. [step 2.1, L2, L3, L7]

4.1 So for $n \ge N$ the set $T_n(x)$ is nonempty, closed and bounded with $\operatorname{diam}(T_n(x)) \le \varepsilon/3 < \varepsilon$. [step 1.1, step 3.1, L3]

5.1 Apply steps 1.3 to 4.1 with $\varepsilon = 1$ to get a natural $N_1$ such that $T_n(x)$ is nonempty, closed and bounded for every $n \ge N_1$ and every $x \in X$. Then $\big(T_{N_1+j}(x)\big)_{j \in \mathbb{N}}$ is nested by step 1.2, and its diameters tend to $0$: given a real $\varepsilon > 0$, the $N$ of step 1.3 satisfies $\operatorname{diam}(T_{N_1+j}(x)) < \varepsilon$ for every $j \ge N$, since then $N_1 + j \ge N$. [step 1.2, step 4.1]

6.1 By [L1] and [A3] the intersection $\bigcap_{j \in \mathbb{N}} T_{N_1+j}(x)$ has exactly one element; and because the family $(T_n(x))_n$ is nested this intersection equals $\bigcap_{n \in \mathbb{N}} T_n(x)$, a set defined without reference to $N_1$. Define $g(x)$ to be its unique element; this determines a function $g : X \to Y$, and no choice is made, since the value is unique. [step 1.2, step 5.1, A3, L1, construct]

7.1 $g$ extends $f$: for $a \in A$ and every $n$ we have $a \in U_n(a)$, so $f(a) \in S_n(a) \subseteq T_n(a)$; hence $f(a) \in \bigcap_n T_n(a)$, and by uniqueness $g(a) = f(a)$. [step 6.1, L2]

7.2 Let $x,x' \in X$ with $d_X(x,x') < \delta'$. Since $g(x) \in T_m(x) = \overline{S_m(x)}$, the ball $B_Y(g(x), \varepsilon/3)$ meets $S_m(x)$, so there is $a \in U_m(x)$ with $d_Y(g(x), f(a)) < \varepsilon/3$; likewise there is $a' \in U_m(x')$ with $d_Y(g(x'), f(a')) < \varepsilon/3$. [step 6.1, step 1.4, L2]

8.1 Then $d_X(a,a') \le d_X(a,x) + d_X(x,x') + d_X(x',a') < \delta/3 + \delta/3 + \delta/3 = \delta$, so $d_Y(f(a),f(a')) < \varepsilon/3$, and therefore $d_Y(g(x),g(x')) \le d_Y(g(x),f(a)) + d_Y(f(a),f(a')) + d_Y(f(a'),g(x')) < \varepsilon$. [step 1.4, step 7.2, A2, L7]

9.1 The real $\delta'$ depended on $\varepsilon$ alone, so $g$ is uniformly continuous; together with step 7.1 this establishes claim 1. [step 7.1, step 1.4, step 8.1]

10.1 The map $g$ is continuous, being uniformly continuous, so $g(a_k) \to g(x)$ and $h(a_k) \to h(x)$; but $g(a_k) = f(a_k) = h(a_k)$ for every $k$, so one sequence in $Y$ converges to both $g(x)$ and $h(x)$, whence $g(x) = h(x)$ by uniqueness of limits. As $x$ was arbitrary, $h = g$. [step 7.1, step 9.1, step 1.5, L6]

11.1 The map $g$ of step 6.1 is a uniformly continuous extension of $f$ and is the only continuous one, which is claims 1 and 2. [step 9.1, step 10.1, discharge-construct] ∎

## Remarks

- **Why the construction avoids the Axiom of Choice, and where choice reappears.** The obvious construction sets $g(x) := \lim_k f(a_k)$ for a sequence $(a_k)$ in $A$ converging to $x$. That defines $g$ only after a sequence has been selected at every point of $X$ at once, which is a choice over a set that need not be countable. The construction above never selects: $g(x)$ is defined as the unique element of a set built from $x$ by a formula. Choice does appear, twice, and both times only inside a proof: $\mathrm{AC}_\omega$ is spent by [[thm-cantor-intersection-metric]] in step 6.1, and again by [[thm-metric-sequential-closure]] in step 1.5, which produces one sequence for one point at a time.
- **Completeness of the target is what makes the intersection nonempty**, and it cannot be weakened. Without it the shrinking closed sets $T_n(x)$ can have empty intersection, and there is then nothing to define $g(x)$ to be; the inclusion $\mathbb{Q} \hookrightarrow \mathbb{Q}$ read as a uniformly continuous map from the dense subspace $\mathbb{Q}$ of $\mathbb{R}$ into $\mathbb{Q}$ has no continuous extension to $\mathbb{R}$ for exactly that reason.
- **Uniform continuity of $f$ is what makes the diameters shrink**, and ordinary continuity does not suffice: step 1.3 chooses one $\delta$ before any point $x$ is fixed, and step 5.1 needs that same $\delta$ at every $x$ simultaneously. This is the same pressure point as in [[thm-uniform-continuity-preserves-cauchy]].
- **The extension inherits the modulus, not the constants.** The proof produces $\delta' = \delta/3$ from the $\delta$ that $f$ supplies for $\varepsilon/3$, so a Lipschitz $f$ extends to a uniformly continuous $g$; that $g$ is in fact Lipschitz with the same constant is a separate argument, carried out for a concrete case in [[ex-lipschitz-extension-from-the-rationals]].
````

