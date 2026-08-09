## Wave 9 target — `ex-hamel-basis-additive-function`

Selection: mandatory Wave 9 high/critical proof-bearing route.

Normalized current SHA-256: `203b3e322382e59032699fd9237bafea6dfc566c1a91d29d2ba9af0796a71bc3`

## Complete current target

````markdown
---
id: ex-hamel-basis-additive-function
kind: example
title: "An additive $f : \\mathbb{R} \\to \\mathbb{R}$ that is not $x \\mapsto cx$: the coefficient of one fixed Hamel basis vector. It is unbounded above and below on every nondegenerate interval, its graph is dense in $\\mathbb{R}^{2}$, and every nonempty level set is dense in $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
  evidence: semantic-source
deps: [lem-hamel-basis-exists, fs-additive-implies-linear, def-additive-function, lem-additive-is-q-linear, thm-cauchy-functional-equation-regularity, def-vector-space, lem-restriction-of-scalars, def-linear-combination-and-span, def-linear-subspace, lem-metrics-on-rn, def-metric-interior-closure-boundary, thm-metric-closure-characterisation, def-metric-ball, def-axiom-of-choice, thm-zorn, def-bounded-set, def-interval, lem-rat-embeds-dense, lem-q-and-irrationals-dense-r, def-complete-ordered-field, def-continuity-real, def-monotone-function]
justified_by: []
aliases: []
landmark: false
short: "a Hamel coefficient is additive and wild"
proof_strategy: constructive
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
    - title: "Cauchy's functional equation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy%27s_functional_equation"
    - title: "Hamel basis, in Basis (linear algebra) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Basis_(linear_algebra)"
    - title: "On Functions Whose Graph Is a Hamel Basis"
      url: "https://www.scranton.edu/faculty/plotka/pdfs/5.pdf"
pipeline_run: null
---

## Example

**Assume the Axiom of Choice** ([[def-axiom-of-choice]]), which enters through
[[lem-hamel-basis-exists]] and hence through [[thm-zorn]]. Fix a Hamel basis
$B$ of $\mathbb{R}$ over the canonical copy $\mathbb{Q} \subseteq \mathbb{R}$ of
the rationals ([[lem-rat-embeds-dense]], [[lem-restriction-of-scalars]],
[[def-vector-space]]), fix $b_{\star} \in B$, and let

$$f \;:=\; \Lambda_{b_{\star}} : \mathbb{R} \to \mathbb{R}$$

be the coefficient map of $b_{\star}$ ([[lem-hamel-basis-exists]], claim 4).
Write $W := W_{b_{\star}} = \operatorname{span}(B \setminus \{b_{\star}\})$
([[def-linear-combination-and-span]]). Then:

1. $f$ is additive ([[def-additive-function]]) and is **not** of the form
   $x \mapsto cx$ for any real $c$ ([[fs-additive-implies-linear]]);
2. $f$ is bounded neither above nor below on any nondegenerate interval
   ([[def-bounded-set]], [[def-interval]]), is monotone on no nondegenerate
   interval ([[def-monotone-function]]), is of constant sign on none, and is
   continuous at no point of $\mathbb{R}$ ([[def-continuity-real]]);
3. the graph $\{(x,f(x)) : x \in \mathbb{R}\}$ is dense in $\mathbb{R}^{2}$ for
   the metric $d_\infty$ ([[lem-metrics-on-rn]],
   [[def-metric-interior-closure-boundary]]);
4. the values of $f$ are exactly the rationals, and for every rational $r$ the
   level set $f^{-1}(\{r\}) = \{\, x \in \mathbb{R} : f(x) = r \,\}$ is **dense
   in $\mathbb{R}$**; for an irrational $v$ the level set $f^{-1}(\{v\})$ is
   empty.

Claim 2 is the contrapositive of [[thm-cauchy-functional-equation-regularity]]
applied to claim 1, clause by clause, and claim 3 is the contrapositive of its
sixth clause.

## Facts & Assumptions

**Given:** The Axiom of Choice; a Hamel basis $B$ of $\mathbb{R}$ over $\mathbb{Q}$; a fixed $b_{\star} \in B$; the coefficient map $f = \Lambda_{b_{\star}}$ and $W = \operatorname{span}(B \setminus \{b_{\star}\})$.

[A1] The Axiom of Choice ([[def-axiom-of-choice]], [[thm-zorn]]).

[L1] **Assume the Axiom of Choice.** Then a Hamel basis $B$ exists; for $b_{\star} \in B$ the coefficient map $\Lambda_{b_{\star}} : \mathbb{R} \to \mathbb{Q}$ is well defined, additive, $\mathbb{Q}$-homogeneous, has range all of $\mathbb{Q}$, has $\{x : \Lambda_{b_{\star}}(x) = 0\} = W$, and $W \ne \{0\}$ ([[lem-hamel-basis-exists]], claims 1, 4 and 5, [[def-linear-combination-and-span]], [[def-linear-subspace]]).

[L2] There is an additive $\mathbb{R} \to \mathbb{R}$ that is not of the form $x \mapsto cx$, namely a coefficient map $\Lambda_{b_{\star}}$: it takes only rational values while $c \ne 0$ would force irrational values ([[fs-additive-implies-linear]], [[lem-q-and-irrationals-dense-r]]).

[L3] If an additive $g : \mathbb{R} \to \mathbb{R}$ is bounded above on a nondegenerate interval, or bounded below on one, or monotone on one, or of constant sign on one, or continuous at a single point, or has non-dense graph in $\mathbb{R}^{2}$, then $g(x) = g(1)x$ for every real $x$ ([[thm-cauchy-functional-equation-regularity]]).

[L4] $d_\infty$ is a metric on $\mathbb{R}^{2}$ and a subset is dense exactly when every open ball meets it ([[lem-metrics-on-rn]], [[def-metric-ball]], [[def-metric-interior-closure-boundary]], [[thm-metric-closure-characterisation]]).

[L5] $W$ is a linear subspace of $\mathbb{R}$ over $\mathbb{Q}$, so $w \in W$ and $q \in \mathbb{Q}$ give $qw \in W$, and $W$ is closed under addition ([[def-linear-subspace]], [[def-linear-combination-and-span]]).

[L6] Strictly between any two distinct reals there lies a rational, and $\mathbb{R}$ is an ordered field ([[lem-rat-embeds-dense]], [[def-complete-ordered-field]]).

[L7] An additive $g$ satisfies $g(qx) = q g(x)$ for rational $q$ ([[lem-additive-is-q-linear]]).

## Verification

**Proof technique:** constructive.

1.1 Assume the Axiom of Choice, fix $B$ and $b_{\star} \in B$, and put $f := \Lambda_{b_{\star}}$ and $W := W_{b_{\star}}$. [A1, L1, construct]

2.1 Claim 1: $f$ is additive, and it is not of the form $x \mapsto cx$ for any real $c$. [step 1.1, L1, L2]

2.2 Claim 4, the range: the range of $f$ is exactly $\mathbb{Q}$, so $f^{-1}(\{v\}) = \varnothing$ for every irrational $v$ and $f^{-1}(\{r\}) \ne \varnothing$ for every rational $r$. [step 1.1, L1]

2.3 $W$ is dense in $\mathbb{R}$: by [L1] there is $w_{0} \in W$ with $w_{0} \ne 0$, and $q w_{0} \in W$ for every rational $q$; given reals $u < v$, the two reals $u/w_{0}$ and $v/w_{0}$ are distinct, so a rational $q$ lies strictly between them, and then $q w_{0}$ lies strictly between $u$ and $v$ if $w_{0} > 0$, and strictly between $v$ and $u$ if $w_{0} < 0$. Either way $W$ meets $(u,v)$. [step 1.1, L1, L5, L6]

3.1 Claim 2, clause by clause. Were $f$ bounded above on a nondegenerate interval, or bounded below on one, or monotone on one, or of constant sign on one, or continuous at a single point, the regularity theorem would give $f(x) = f(1)x$ for every real $x$, contradicting step 2.1. So none of the five holds. [step 2.1, L3]

3.2 Claim 3: were the graph of $f$ not dense in $\mathbb{R}^{2}$, the sixth clause of the regularity theorem would give the same contradiction. So the graph is dense. [step 2.1, L3, L4]

3.3 For a rational $r$ the level set $f^{-1}(\{r\})$ is $x_{r} + W$ for any $x_{r}$ with $f(x_{r}) = r$: indeed $f(y) = r$ holds exactly when $f(y - x_{r}) = f(y) - f(x_{r}) = 0$, that is exactly when $y - x_{r} \in W$. Here $f(-x) = -f(x)$ follows from additivity. [step 1.1, step 2.2, L1, L7]

4.1 Each such level set is dense in $\mathbb{R}$: given reals $u < v$, the interval $(u - x_{r},\ v - x_{r})$ meets $W$ by step 2.3, say in $w$, and then $x_{r} + w \in f^{-1}(\{r\})$ lies in $(u,v)$. Claim 4 is proved, and with steps 2.1, 3.1 and 3.2 so are claims 1, 2 and 3. [step 2.1, step 3.1, step 3.2, step 2.2, step 2.3, step 3.3, discharge-construct] ∎

## Remarks

- **The pathology is entirely a consequence of the two facts in claim 1.** The
  proof uses nothing about $f$ except that it is additive and not linear; every
  other property is read off [[thm-cauchy-functional-equation-regularity]] by
  contraposition. A single such function therefore witnesses the failure of all
  six regularity conditions at once.

- **What the level sets look like.** They are the cosets of the
  $\mathbb{Q}$-subspace $W = \ker f$, one for each rational value, and each is
  dense. So $\mathbb{R}$ is partitioned into countably many dense sets, on each
  of which $f$ is constant. The companion function of
  [[ex-bounded-with-no-local-extremum-and-nowhere-semicontinuous]] is built by
  relabelling those values.

- **No measurability claim is made.** The classical statement that a Hamel
  coefficient map is not Lebesgue measurable is not asserted here: this library
  develops no measure as it stands, so the statement is not expressible, and
  nothing above depends on it.
````

## Current Wave 9 provenance determination

```json
{
  "id": "ex-hamel-basis-additive-function",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://www.scranton.edu/faculty/plotka/pdfs/5.pdf",
    "https://en.wikipedia.org/wiki/Cauchy%27s_functional_equation"
  ],
  "rationale": "The sources construct discontinuous additive maps by prescribing values on a Hamel basis. The item specializes this to one coordinate and adds exact range, kernel, dense-level-set, and dense-graph consequences.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

## Current Wave 9 proof contract

```json
{
  "citations": [
    {
      "fact": "A1",
      "source": "def-axiom-of-choice",
      "source_section": "Definition",
      "quote": "The **Axiom of Choice** (AC) is the following statement.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "A1",
      "source": "thm-zorn",
      "source_section": "Statement",
      "quote": "Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $(P, \\le)$ be a\nnonempty poset in which **every chain has an upper bound**. Then $P$ has a\nmaximal element ([[def-maximal-element]]).",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-hamel-basis-exists",
      "source_section": "Statement",
      "quote": "1. **Existence.** $\\mathbb{R}$ has a basis $B$ over $\\mathbb{Q}$\n   ([[def-linear-basis]]), called a **Hamel basis**.\n2. **Representation.** Every real $x$ is\n   $x = \\sum_{i<n}\\lambda_i b_i$ for some $n \\in \\mathbb{N}$, some **injective**\n   list $b : n \\to B$ ([[def-injection-surjection-bijection]]) and some\n   $\\lambda : n \\to \\mathbb{Q}$ ([[def-linear-combination-and-span]]).\n3. **Uniqueness along a list.** For a fixed $n$ and a fixed injective\n   $b : n \\to B$, if $\\lambda, \\mu : n \\to \\mathbb{Q}$ satisfy\n   $\\sum_{i<n}\\lambda_i b_i = \\sum_{i<n}\\mu_i b_i$, then $\\lambda_i = \\mu_i$ for\n   every $i < n$.\n4. **The coefficient map of a basis vector.** Fix $b_{\\star} \\in B$ and put\n   $W_{b_{\\star}} := \\operatorname{span}(B \\setminus \\{b_{\\star}\\})$. Every real\n   $x$ is $x = \\lambda\\, b_{\\star} + w$ with $\\lambda \\in \\mathbb{Q}$ and\n   $w \\in W_{b_{\\star}}$ in **exactly one** way. Writing\n   $\\Lambda_{b_{\\star}}(x) := \\lambda$ for that unique scalar, the map\n   $\\Lambda_{b_{\\star}} : \\mathbb{R} \\to \\mathbb{Q}$ satisfies\n   $$\\Lambda_{b_{\\star}}(x+y) = \\Lambda_{b_{\\star}}(x) + \\Lambda_{b_{\\star}}(y), \\qquad \\Lambda_{b_{\\star}}(qx) = q\\,\\Lambda_{b_{\\star}}(x) \\ \\ (q \\in \\mathbb{Q}), \\qquad \\Lambda_{b_{\\star}}(b_{\\star}) = 1,$$\n   its range is the whole of $\\mathbb{Q}$, and\n   $\\{\\, x \\in \\mathbb{R} : \\Lambda_{b_{\\star}}(x) = 0 \\,\\} = W_{b_{\\star}}$.\n5. **The complement is not trivial.** $W_{b_{\\star}} \\ne \\{0\\}$ for every\n   $b_{\\star} \\in B$.",
      "uses": [
        "1.1",
        "2.1",
        "2.2",
        "2.3",
        "3.3"
      ]
    },
    {
      "fact": "L1",
      "source": "def-linear-combination-and-span",
      "source_section": "Definition",
      "quote": "By axiom (V1) the triple $(V, +, 0_V)$ is an abelian group ([[def-group]]), hence\nin particular a commutative monoid ([[def-semigroup-and-monoid]]). So the finite\nproducts of [[def-monoid-finite-product]] are available in it, and we write them\n**additively**: for $n \\in \\mathbb{N}$ and a finite list $u : n \\to V$, that is a\nfunction on the von Neumann natural $n = \\{0, \\dots, n-1\\}$\n([[def-natural-numbers]], [[lem-nat-order-is-membership]]),",
      "uses": [
        "1.1",
        "2.1",
        "2.2",
        "2.3",
        "3.3"
      ]
    },
    {
      "fact": "L1",
      "source": "def-linear-subspace",
      "source_section": "Definition",
      "quote": "So $(W,+,0_V)$ is an abelian group, which is axiom (V1), and $W$ is a vector\nspace over $F$ **whose zero vector and whose additive inverses are those of\n$V$**. In the language of [[def-subgroup]], the three displayed conditions\n(S1) $0_V \\in W$, (S2) closure under addition and (S3) closure under additive\ninverses all hold, so $W$ is a subgroup of the abelian group $(V,+,0_V)$\n([[def-group]]); that reading, and its converse, are recorded as\n[[lem-linear-subspace-is-a-subgroup]] and are cited from there rather than\nre-argued below.",
      "uses": [
        "1.1",
        "2.1",
        "2.2",
        "2.3",
        "3.3"
      ]
    },
    {
      "fact": "L2",
      "source": "fs-additive-implies-linear",
      "source_section": "Statement",
      "quote": "**FALSE.** Every additive $f : \\mathbb{R} \\to \\mathbb{R}$\n([[def-additive-function]]) is of the form $x \\mapsto c\\,x$ for a single real\n$c$.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-q-and-irrationals-dense-r",
      "source_section": "Statement",
      "quote": "Write $\\mathbb{Q}_{\\mathbb{R}}$ for the image of $\\mathbb{Q}$ in $\\mathbb{R}$\nunder the canonical embedding $q \\mapsto \\hat q$ ([[lem-rat-embeds-dense]]), the\nset usually written $\\mathbb{Q}$ once the identification is made, and put\n$X := \\mathbb{R} \\setminus \\mathbb{Q}_{\\mathbb{R}}$ for the irrationals. Then:",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-cauchy-functional-equation-regularity",
      "source_section": "Statement",
      "quote": "1. $f$ is continuous at some single point of $\\mathbb{R}$\n   ([[def-continuity-real]]).\n2. $f$ is monotone on some nondegenerate interval\n   ([[def-monotone-function]], [[def-interval]]).\n3. $f$ is bounded above on some nondegenerate interval ([[def-bounded-set]]).\n4. $f$ is bounded below on some nondegenerate interval.\n5. $f$ has constant sign on some nondegenerate interval $I$: either $f(z) \\ge 0$\n   for every $z \\in I$, or $f(z) \\le 0$ for every $z \\in I$.\n6. $\\Gamma$ is **not** dense in $\\mathbb{R}^{2}$\n   ([[def-metric-interior-closure-boundary]]).",
      "uses": [
        "3.1",
        "3.2"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-metrics-on-rn",
      "source_section": "Statement",
      "quote": "and write $x_k$ for $x(k)$, $k < n$. Two elements of $\\mathbb{R}^n$ are equal\nexactly when they agree at every $k < n$, functions being equal when they have\nthe same values. For $x, y \\in \\mathbb{R}^n$ put",
      "uses": [
        "3.2"
      ]
    },
    {
      "fact": "L4",
      "source": "def-metric-ball",
      "source_section": "Definition",
      "quote": "- $x \\in B(x,r)$, because $d(x,x) = 0 < r$ (axiom (M1) of [[def-metric-space]]);\n  in particular open and closed balls are nonempty.\n- $B(x,r) \\subseteq \\bar B(x,r)$ and $S(x,r) \\subseteq \\bar B(x,r)$, and\n  $\\bar B(x,r)$ is the disjoint union of $B(x,r)$ and $S(x,r)$, by trichotomy of\n  the order of $\\mathbb{R}$ ([[def-complete-ordered-field]], [[def-ordered-field]]):\n  each $y$ satisfies exactly one of $d(x,y) < r$, $d(x,y) = r$, $d(x,y) > r$.\n- If $0 < s \\le r$ then $B(x,s) \\subseteq B(x,r)$ and\n  $\\bar B(x,s) \\subseteq \\bar B(x,r)$, by transitivity of the order.\n- Nonnegativity of the metric ([[lem-metric-nonnegativity]]) is what forces the\n  radius convention, and it forces it for the **open** ball only: if $r \\le 0$\n  then $B(x,r) = \\{y : d(x,y) < r\\}$ is empty, because $d(x,y) \\ge 0 \\ge r$\n  for every $y$. The other two sets behave differently at $r = 0$, and the\n  convention $r > 0$ excludes them for uniformity rather than for emptiness:\n  $\\bar B(x,0) = S(x,0) = \\{x\\}$, since $d(x,y) \\le 0$ together with\n  $d(x,y) \\ge 0$ gives $d(x,y) = 0$ and hence $y = x$ by (M1). For $r < 0$ all\n  three sets are empty.",
      "uses": [
        "3.2"
      ]
    },
    {
      "fact": "L4",
      "source": "def-metric-interior-closure-boundary",
      "source_section": "Definition",
      "quote": "**The interior is open, and it is the largest open subset of $A$.** If\n$x \\in \\operatorname{int}(A)$, fix $r$ with $B(x,r) \\subseteq A$; the ball\n$B(x,r)$ is itself open ([[thm-metric-open-set-algebra]]), so every\n$y \\in B(x,r)$ has some $s$ with $B(y,s) \\subseteq B(x,r) \\subseteq A$, which\nputs $y$ in $\\operatorname{int}(A)$. Hence $B(x,r) \\subseteq \\operatorname{int}(A)$\nand $\\operatorname{int}(A)$ is open. It is contained in $A$, since\n$x \\in B(x,r) \\subseteq A$ for an interior point $x$; and if $V \\subseteq A$ is\nopen then every $v \\in V$ has a ball inside $V \\subseteq A$, so\n$V \\subseteq \\operatorname{int}(A)$.",
      "uses": [
        "3.2"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-metric-closure-characterisation",
      "source_section": "Statement",
      "quote": "Claims 2 and 3 hold for every $A$, the empty set included: $\\overline{\\emptyset}$\nis empty because no ball meets $\\emptyset$, and $\\emptyset$ is closed because $X$\nis open ([[def-metric-topology]]). Claim 1 carries the hypothesis $A \\ne \\emptyset$\nbecause $d(x,A)$ is defined only for nonempty $A$\n([[def-metric-bounded-diameter]]).",
      "uses": [
        "3.2"
      ]
    },
    {
      "fact": "L5",
      "source": "def-linear-subspace",
      "source_section": "Definition",
      "quote": "Let $V$ be a vector space over a field $F$ ([[def-vector-space]]). A subset\n$W \\subseteq V$ is a **linear subspace** of $V$ when",
      "uses": [
        "2.3"
      ]
    },
    {
      "fact": "L5",
      "source": "def-linear-combination-and-span",
      "source_section": "Definition",
      "quote": "where $n \\in \\mathbb{N}$, $\\lambda : n \\to F$ is a finite list of scalars and\n$v : n \\to V$ is a finite list of vectors; the sum is the finite sum just\ndescribed, of the list $i \\mapsto \\lambda_i v_i$. For $S \\subseteq V$, a vector\n$w \\in V$ is a **linear combination of elements of $S$** when there are\n$n \\in \\mathbb{N}$, $\\lambda : n \\to F$ and $v : n \\to S$ with\n$w = \\sum_{i<n} \\lambda_i v_i$.",
      "uses": [
        "2.3"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-rat-embeds-dense",
      "source_section": "Statement",
      "quote": "The map $q \\mapsto \\hat q$ ([[def-real-numbers]]) is an embedding of ordered\nfields. Every real is approximated by rationals: for $x \\in \\mathbb{R}$ and\nrational $\\varepsilon > 0$ there is $q \\in \\mathbb{Q}$ with\n$|x - \\hat q| < \\hat\\varepsilon$. Consequently, strictly between any two\nreals lies a rational.",
      "uses": [
        "2.3"
      ]
    },
    {
      "fact": "L6",
      "source": "def-complete-ordered-field",
      "source_section": "Definition",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and $S \\subseteq F$.",
      "uses": [
        "2.3"
      ]
    },
    {
      "fact": "L7",
      "source": "lem-additive-is-q-linear",
      "source_section": "Statement",
      "quote": "In particular, taking $x = 1$ in claim 5, $f(q) = q\\,f(1)$ at every rational $q$:\n**an additive function is determined on $\\mathbb{Q}$ by its value at $1$.**",
      "uses": [
        "3.3"
      ]
    }
  ],
  "derivations": [
    {
      "id": "ex-hamel-basis-additive-function-step-1-1",
      "claim": "Assume the Axiom of Choice, fix $B$ and $b_{\\star} \\in B$, and put $f := \\Lambda_{b_{\\star}}$ and $W := W_{b_{\\star}}$. [A1, L1, construct]",
      "step": "1.1",
      "inputs": [
        "A1",
        "L1"
      ]
    },
    {
      "id": "ex-hamel-basis-additive-function-step-2-1",
      "claim": "Claim 1: $f$ is additive, and it is not of the form $x \\mapsto cx$ for any real $c$. [step 1.1, L1, L2]",
      "step": "2.1",
      "inputs": [
        "1.1",
        "L1",
        "L2"
      ]
    },
    {
      "id": "ex-hamel-basis-additive-function-step-2-2",
      "claim": "Claim 4, the range: the range of $f$ is exactly $\\mathbb{Q}$, so $f^{-1}(\\{v\\}) = \\varnothing$ for every irrational $v$ and $f^{-1}(\\{r\\}) \\ne \\varnothing$ for every rational $r$. [step 1.1, L1]",
      "step": "2.2",
      "inputs": [
        "1.1",
        "L1"
      ]
    },
    {
      "id": "ex-hamel-basis-additive-function-step-2-3",
      "claim": "$W$ is dense in $\\mathbb{R}$: by [L1] there is $w_{0} \\in W$ with $w_{0} \\ne 0$, and $q w_{0} \\in W$ for every rational $q$; given reals $u < v$, the two reals $u/w_{0}$ and $v/w_{0}$ are distinct, so a rational $q$ lies strictly between them, and then $q w_{0}$ lies strictly between $u$ and $v$ if $w_{0} > 0$, and strictly between $v$ and $u$ if $w_{0} < 0$. Either way $W$ meets $(u,v)$. [step 1.1, L1, L5, L6]",
      "step": "2.3",
      "inputs": [
        "L1",
        "1.1",
        "L5",
        "L6"
      ]
    },
    {
      "id": "ex-hamel-basis-additive-function-step-3-1",
      "claim": "Claim 2, clause by clause. Were $f$ bounded above on a nondegenerate interval, or bounded below on one, or monotone on one, or of constant sign on one, or continuous at a single point, the regularity theorem would give $f(x) = f(1)x$ for every real $x$, contradicting step 2.1. So none of the five holds. [step 2.1, L3]",
      "step": "3.1",
      "inputs": [
        "2.1",
        "L3"
      ]
    },
    {
      "id": "ex-hamel-basis-additive-function-step-3-2",
      "claim": "Claim 3: were the graph of $f$ not dense in $\\mathbb{R}^{2}$, the sixth clause of the regularity theorem would give the same contradiction. So the graph is dense. [step 2.1, L3, L4]",
      "step": "3.2",
      "inputs": [
        "2.1",
        "L3",
        "L4"
      ]
    },
    {
      "id": "ex-hamel-basis-additive-function-step-3-3",
      "claim": "For a rational $r$ the level set $f^{-1}(\\{r\\})$ is $x_{r} + W$ for any $x_{r}$ with $f(x_{r}) = r$: indeed $f(y) = r$ holds exactly when $f(y - x_{r}) = f(y) - f(x_{r}) = 0$, that is exactly when $y - x_{r} \\in W$. Here $f(-x) = -f(x)$ follows from additivity. [step 1.1, step 2.2, L1, L7]",
      "step": "3.3",
      "inputs": [
        "1.1",
        "2.2",
        "L1",
        "L7"
      ]
    },
    {
      "id": "ex-hamel-basis-additive-function-step-4-1",
      "claim": "Each such level set is dense in $\\mathbb{R}$: given reals $u < v$, the interval $(u - x_{r},\\ v - x_{r})$ meets $W$ by step 2.3, say in $w$, and then $x_{r} + w \\in f^{-1}(\\{r\\})$ lies in $(u,v)$. Claim 4 is proved, and with steps 2.1, 3.1 and 3.2 so are claims 1, 2 and 3. [step 2.1, step 3.1, step 3.2, step 2.2, step 2.3, step 3.3, discharge-construct] ∎",
      "step": "4.1",
      "inputs": [
        "2.3",
        "2.1",
        "3.1",
        "3.2",
        "2.2",
        "3.3"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "step 2.2: the empty-object convention or its exclusion is explicit in the statement/proof."
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "Zero is not a distinguished parameter or exceptional value in this statement."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "step 1.1: the unit or first-index boundary is included explicitly in the stated construction."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "Statement: interval degeneracy is either excluded by a strict endpoint hypothesis or included by the stated weak endpoint convention."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "step 1.1: domain endpoints and any one-sided interpretation are kept within the stated relative-domain convention."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "step 1.1: each existential witness used here is supplied by the cited existence result or by the displayed formula/construction."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The statement is not a biconditional or equivalence."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The statement is not a biconditional or equivalence."
    }
  ]
}
```

## Generated cross-batch/cross-level relationships sourced by this target

```json
[
  {
    "source": "ex-hamel-basis-additive-function",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "lem-hamel-basis-exists",
    "declared_target": "lem-hamel-basis-exists",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-functions-and-discontinuities",
    "targetBatch": "wave9-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-hamel-basis-additive-function",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "fs-additive-implies-linear",
    "declared_target": "fs-additive-implies-linear",
    "target_statement_provenance": "literature-derived",
    "targetPage": "monotone-functions-and-discontinuities",
    "targetBatch": "wave9-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-hamel-basis-additive-function",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "def-additive-function",
    "declared_target": "def-additive-function",
    "target_statement_provenance": "literature-derived",
    "targetPage": "monotone-functions-and-discontinuities",
    "targetBatch": "wave9-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-hamel-basis-additive-function",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "lem-additive-is-q-linear",
    "declared_target": "lem-additive-is-q-linear",
    "target_statement_provenance": "literature-derived",
    "targetPage": "monotone-functions-and-discontinuities",
    "targetBatch": "wave9-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-hamel-basis-additive-function",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "thm-cauchy-functional-equation-regularity",
    "declared_target": "thm-cauchy-functional-equation-regularity",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-functions-and-discontinuities",
    "targetBatch": "wave9-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-hamel-basis-additive-function",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "def-vector-space",
    "declared_target": "def-vector-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "vector-spaces-and-subspaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-hamel-basis-additive-function",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "lem-restriction-of-scalars",
    "declared_target": "lem-restriction-of-scalars",
    "target_statement_provenance": "ai-altered",
    "targetPage": "vector-spaces-and-subspaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-hamel-basis-additive-function",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "def-linear-combination-and-span",
    "declared_target": "def-linear-combination-and-span",
    "target_statement_provenance": "ai-altered",
    "targetPage": "vector-spaces-and-subspaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-hamel-basis-additive-function",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "def-linear-subspace",
    "declared_target": "def-linear-subspace",
    "target_statement_provenance": "literature-derived",
    "targetPage": "vector-spaces-and-subspaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-hamel-basis-additive-function",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "lem-metrics-on-rn",
    "declared_target": "lem-metrics-on-rn",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-hamel-basis-additive-function",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
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
    "source": "ex-hamel-basis-additive-function",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "thm-metric-closure-characterisation",
    "declared_target": "thm-metric-closure-characterisation",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-hamel-basis-additive-function",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
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
    "source": "ex-hamel-basis-additive-function",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "def-axiom-of-choice",
    "declared_target": "def-axiom-of-choice",
    "target_statement_provenance": "literature-derived",
    "targetPage": "relations-functions-and-quotients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-hamel-basis-additive-function",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "thm-zorn",
    "declared_target": "thm-zorn",
    "target_statement_provenance": "literature-derived",
    "targetPage": "order-zorn-and-the-axiom-of-choice",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-hamel-basis-additive-function",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
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
    "source": "ex-hamel-basis-additive-function",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
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
    "source": "ex-hamel-basis-additive-function",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "lem-rat-embeds-dense",
    "declared_target": "lem-rat-embeds-dense",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-hamel-basis-additive-function",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "lem-q-and-irrationals-dense-r",
    "declared_target": "lem-q-and-irrationals-dense-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-hamel-basis-additive-function",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "def-complete-ordered-field",
    "declared_target": "def-complete-ordered-field",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-hamel-basis-additive-function",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
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
    "source": "ex-hamel-basis-additive-function",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "def-monotone-function",
    "declared_target": "def-monotone-function",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-functions-and-discontinuities",
    "targetBatch": "wave9-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  }
]
```

## Complete current text of every declared or cited item (23)

### `def-additive-function`

````markdown
---
id: def-additive-function
kind: definition
title: "Cauchy's functional equation $f(x+y) = f(x) + f(y)$, and the additive functions $\\mathbb{R} \\to \\mathbb{R}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
  evidence: exact-source
deps: [def-complete-ordered-field, def-ordered-field, def-field]
justified_by: []
aliases: [def-cauchy-functional-equation]
landmark: true
short: "additive function; Cauchy's equation"
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
    - title: "Cauchy's functional equation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy%27s_functional_equation"
pipeline_run: null
---

## Definition

Let $\mathbb{R}$ be the complete ordered field ([[def-complete-ordered-field]],
[[def-ordered-field]], [[def-field]]). A function $f : \mathbb{R} \to \mathbb{R}$
is **additive** when it satisfies **Cauchy's functional equation**

$$f(x + y) \;=\; f(x) + f(y) \qquad \text{for all } x, y \in \mathbb{R}.$$

Equivalently, $f$ is a homomorphism of the additive group of $\mathbb{R}$ into
itself.

**The linear maps are additive.** For a fixed real $c$ the function
$x \mapsto cx$ satisfies $c(x+y) = cx + cy$ by distributivity, so it is
additive. Cauchy's question is whether these are the only additive functions,
and the answer is a genuine dichotomy: with any one of a short list of
regularity conditions the answer is yes
([[thm-cauchy-functional-equation-regularity]]), and without any of them it is
no ([[fs-additive-implies-linear]]).

**No continuity, no monotonicity and no measurability is part of the
definition.** The equation is purely algebraic, and every regularity hypothesis
below is stated explicitly where it is used.

**A first consequence, recorded here because it is used immediately.** An
additive $f$ satisfies $f(0) = 0$: putting $x = y = 0$ gives
$f(0) = f(0) + f(0)$, and subtracting $f(0)$ gives $f(0) = 0$. The remaining
elementary consequences, including $f(-x) = -f(x)$ and $\mathbb{Q}$-homogeneity,
are collected in [[lem-additive-is-q-linear]].
````

### `def-axiom-of-choice`

````markdown
---
id: def-axiom-of-choice
kind: definition
title: "The Axiom of Choice"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-choice-function]
justified_by: []
forward_refs: [ex-russells-socks, rem-choice-strengths, fs-zorn-provable-in-zf,
               lem-finite-choice, rem-choice-ledger]
external_refs: [rem-godel-constructible-universe, rem-cohen-forcing-ac-independent]
aliases: [def-ac]
landmark: true
short: "axiom of choice"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-06
    scope: published-rehoming-repair
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "I. Khatchatourian, The Axiom of Choice (University of Toronto MAT327 notes)"
      url: "https://www.math.utoronto.ca/ivan/mat327/docs/notes/11-choice.pdf"
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
    - title: "Choice function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Choice_function"
pipeline_run: null
---

## Definition

The **Axiom of Choice** (AC) is the following statement.

> Every family of nonempty sets has a choice function
> ([[def-choice-function]]).

Written out: for every set $\mathcal{F}$ all of whose members are nonempty,
there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for
all $S \in \mathcal{F}$.

An equivalent formulation is that a product of nonempty sets is nonempty: if
$X_i \ne \emptyset$ for every $i \in I$, then $\prod_{i \in I} X_i \ne \emptyset$.
Here $\prod_{i \in I} X_i$ is the set of functions $f$ with domain $I$ such that
$f(i) \in X_i$ for every $i \in I$; when a family of nonempty sets is indexed by
itself, such an $f$ is precisely a choice function for it.

## Remarks

- **This is an axiom, not a theorem, and it is deliberately not derived here.**
  **Assume ZF is consistent.** Then AC is independent of the axioms of
  Zermelo–Fraenkel set theory: Gödel (1938) showed that ZF, if consistent, cannot
  refute it ([[rem-godel-constructible-universe]]), and Cohen (1963) showed that
  ZF, if consistent, cannot prove it ([[rem-cohen-forcing-ac-independent]]). The
  consistency hypothesis is not decoration and cannot be dropped: an inconsistent
  ZF proves everything, AC included, so both halves of the independence would
  fail. Nor can the hypothesis be discharged inside ZF. Both directions also
  require machinery (the constructible universe and forcing) that this library
  does not yet contain, so both are recorded with references rather than proved.
  [[fs-zorn-provable-in-zf]] carries the same consistency assumption explicitly
  in its Given; [[rem-choice-ledger]] records the weaker choice principles.
- Being an axiom, AC carries no well-definedness obligation, which is why this
  item has no `justified_by`.
- The case of a family listed by a natural number, which is the finite case once
  finiteness is defined, is a theorem of ZF and needs no axiom
  ([[lem-finite-choice]]). AC is exactly the extension of that theorem to
  arbitrary index sets, and the gap between the two is not a matter of degree:
  [[ex-russells-socks]] exhibits the difference concretely.
- "ZFC" abbreviates ZF together with AC. A result that invokes AC should say so
  where it is stated, so that a reader can tell which theorems are choice-free;
  that bookkeeping is the purpose of [[rem-choice-ledger]].
  [[rem-choice-strengths]] carries the narrower question of what the ultrafilter
  lemma costs, and on cited authority, and under the hypothesis that ZF is
  consistent, places that principle strictly between ZF and AC.
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

### `def-linear-combination-and-span`

````markdown
---
id: def-linear-combination-and-span
kind: definition
title: "Linear combination of a finite list, and the span $\\operatorname{span}(S)$ as the smallest linear subspace containing $S$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-vector-space, def-linear-subspace, lem-intersection-of-linear-subspaces, def-monoid-finite-product, def-semigroup-and-monoid, def-group, def-natural-numbers, lem-nat-order-is-membership, def-field]
justified_by: []
aliases: [def-span, def-linear-combination, def-spanning-set]
landmark: true
short: "linear combination; $\\operatorname{span}(S)$"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Linear span (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Linear_span"
    - title: "Linear combination (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Linear_combination"
    - title: "S. Axler, Linear Algebra Done Right, 4th ed. (free PDF, CC BY-NC)"
      url: "https://linear.axler.net/LADR4e.pdf"
pipeline_run: null
---

## Definition

Let $V$ be a vector space over a field $F$ ([[def-vector-space]]).

### Finite sums of vectors

By axiom (V1) the triple $(V, +, 0_V)$ is an abelian group ([[def-group]]), hence
in particular a commutative monoid ([[def-semigroup-and-monoid]]). So the finite
products of [[def-monoid-finite-product]] are available in it, and we write them
**additively**: for $n \in \mathbb{N}$ and a finite list $u : n \to V$, that is a
function on the von Neumann natural $n = \{0, \dots, n-1\}$
([[def-natural-numbers]], [[lem-nat-order-is-membership]]),

$$\sum_{i<n} u_i \;:=\; \prod_{i<n} u_i \quad \text{computed in } (V,+,0_V),$$

so that $\sum_{i<0} u_i = 0_V$ and $\sum_{i<\sigma(n)} u_i = \bigl(\sum_{i<n} u_i\bigr) + u_n$,
and the value depends only on $u_0, \dots, u_{n-1}$.

### Linear combinations

A **linear combination in $V$** is a vector of the form

$$\sum_{i<n} \lambda_i v_i$$

where $n \in \mathbb{N}$, $\lambda : n \to F$ is a finite list of scalars and
$v : n \to V$ is a finite list of vectors; the sum is the finite sum just
described, of the list $i \mapsto \lambda_i v_i$. For $S \subseteq V$, a vector
$w \in V$ is a **linear combination of elements of $S$** when there are
$n \in \mathbb{N}$, $\lambda : n \to F$ and $v : n \to S$ with
$w = \sum_{i<n} \lambda_i v_i$.

**The empty case is a real case.** $\mathbb{N}$ contains $0$
([[def-natural-numbers]]), and at $n = 0$ the sum is the empty sum, which is
$0_V$. So $0_V$ is a linear combination of elements of every subset of $V$,
including $S = \varnothing$. The lists are indexed from $0$, so a linear
combination of length $n$ is $\lambda_0 v_0 + \dots + \lambda_{n-1}v_{n-1}$; no
statement here is restricted to $n \ge 1$.

### The span

Let $S \subseteq V$. The set of linear subspaces of $V$ containing $S$ is
nonempty, since $V$ itself is one, so its intersection is a linear subspace of
$V$ by [[lem-intersection-of-linear-subspaces]]. That intersection is the **span
of $S$**,

$$\operatorname{span}(S) \;:=\; \bigcap \{\, W \;:\; W \text{ is a linear subspace of } V \text{ and } S \subseteq W \,\} .$$

It contains $S$, being an intersection of sets each of which contains $S$, and it
is contained in every linear subspace of $V$ that contains $S$. So it is the
**smallest** linear subspace of $V$ containing $S$, and those two properties
determine it uniquely: if $W$ and $W'$ both contain $S$ and are each contained in
every linear subspace containing $S$, then each is contained in the other. This
is what licenses the definite article.

A subset $S \subseteq V$ **spans** $V$, or is a **spanning set** of $V$, when
$\operatorname{span}(S) = V$.

## Remarks

- **The definition is the one already used for subgroups.**
  [[def-generated-subgroup]] defines $\langle S \rangle$ as the intersection of
  all subgroups containing $S$, licensed by
  [[lem-intersection-of-subgroups]]. Its Remarks also record a description from
  inside, as a set of products, proved there only for a single generator
  ([[lem-cyclic-subgroup-is-the-set-of-powers]]) with the general case deferred
  to a later page. The span is defined here in exactly that outside shape, and
  the identification from inside, that $\operatorname{span}(S)$ is precisely the
  set of linear combinations of elements of $S$, is proved in full as
  [[lem-span-is-the-set-of-linear-combinations]]. In particular
  $\operatorname{span}(\varnothing) = \{0_V\}$ is proved there, as a consequence
  of the definition, and is not stipulated here.

- **Why the finite sum is [[def-monoid-finite-product]] and not
  [[def-finite-sum]].** The latter is stated for sequences into the complete
  ordered field, so it cannot carry a sum of vectors in an arbitrary vector space
  over an arbitrary field. The monoid finite product is defined by recursion in
  any monoid, its empty value is the identity, and
  [[thm-generalised-associativity]] supplies the splitting, regrouping and
  reordering laws for it. Reading it additively in $(V,+,0_V)$ costs nothing and
  is the only sum of vectors this page uses.

- **A linear combination is a value, not an expression.** Two different lists may
  produce the same vector, and nothing above asserts otherwise. Repetitions are
  allowed in the list $v$, and so are coefficients equal to $0_F$; asking when a
  vector is a linear combination of a set in only one way is the question of
  linear independence, which belongs to a later page and is not raised here.
````

### `def-linear-subspace`

````markdown
---
id: def-linear-subspace
kind: definition
title: "Linear subspace of a vector space"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-vector-space, def-subgroup, def-group, lem-vector-space-elementary-consequences]
justified_by: []
aliases: [def-linear-subspace-of-a-vector-space]
landmark: true
short: "linear subspace $W \\le V$"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Linear subspace (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Linear_subspace"
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Ch. 1"
      url: "https://linear.axler.net/"
pipeline_run: null
---

## Definition

Let $V$ be a vector space over a field $F$ ([[def-vector-space]]). A subset
$W \subseteq V$ is a **linear subspace** of $V$ when

- **(W1)** $0_V \in W$;
- **(W2)** $W$ is closed under the vector addition: $u, v \in W$ implies
  $u + v \in W$;
- **(W3)** $W$ is closed under scalar multiplication: $\lambda \in F$ and
  $v \in W$ imply $\lambda v \in W$.

Every vector space $V$ has the two **trivial linear subspaces** $\{0_V\}$ and $V$
itself; a linear subspace $W$ with $W \ne V$ is called **proper**.

**The restricted operations are the required data, and $W$ is a vector space.**
By (W2) the vector addition of $V$ restricts to a binary operation
$W \times W \to W$, and by (W3) the scalar multiplication restricts to a map
$F \times W \to W$. With these and the element $0_V$, the set $W$ is a vector
space over $F$:

- axioms (V2)–(V5) are equations required of elements of $W$, which are in
  particular elements of $V$, so they are inherited from $V$; likewise
  associativity and commutativity of the restricted addition;
- $0_V$ lies in $W$ by (W1) and is a two-sided identity for the restricted
  addition, since it is one in $V$;
- for $v \in W$ the vector $(-1_F)v$ lies in $W$ by (W3), and
  $(-1_F)v = -v$ ([[lem-vector-space-elementary-consequences]]), so $-v \in W$
  and $v + (-v) = 0_V$ holds in $W$.

So $(W,+,0_V)$ is an abelian group, which is axiom (V1), and $W$ is a vector
space over $F$ **whose zero vector and whose additive inverses are those of
$V$**. In the language of [[def-subgroup]], the three displayed conditions
(S1) $0_V \in W$, (S2) closure under addition and (S3) closure under additive
inverses all hold, so $W$ is a subgroup of the abelian group $(V,+,0_V)$
([[def-group]]); that reading, and its converse, are recorded as
[[lem-linear-subspace-is-a-subgroup]] and are cited from there rather than
re-argued below.

## Remarks

- **"Linear subspace", never bare "subspace", in this library.** The word
  *subspace* is already in use here for the topological notion, a subset of a
  topological space carrying the induced topology, which is an unrelated idea.
  The names on this page therefore all say *linear*: `def-linear-subspace`,
  `lem-linear-subspace-criterion`, `lem-intersection-of-linear-subspaces`,
  `lem-linear-subspace-is-a-subgroup`, `def-sum-of-linear-subspaces`. Where the
  ambient vector space is fixed and no confusion is possible, the surrounding
  prose still writes the full phrase.

- **Closure under negatives is not a fourth condition.** It follows from (W3),
  because the additive inverse of a vector is the scalar multiple $(-1_F)v$. This
  is why the definition asks for three conditions where the definition of a
  subgroup asks for three of its own, and why the one-step test
  ([[lem-linear-subspace-criterion]]) can compress them into one.

- **(W1) cannot be replaced by "$W \ne \varnothing$" while dropping the others.**
  It can be replaced by nonemptiness *given* (W3), since a nonempty $W$ closed
  under scalar multiplication contains $0_F v = 0_V$
  ([[lem-vector-space-elementary-consequences]]) for any of its elements $v$.
  Stated with (W1) the definition is checkable one condition at a time, and the
  economical single test is [[lem-linear-subspace-criterion]].

- **The field matters.** A subset of $V$ may be closed under the scalars of a
  subfield $K \subseteq F$ without being closed under all of $F$, so "linear
  subspace" always means "linear subspace over the field named". Restriction of
  scalars ([[lem-restriction-of-scalars]]) is what makes that distinction
  possible.
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

### `def-monotone-function`

````markdown
---
id: def-monotone-function
kind: definition
title: "Nondecreasing, increasing (strictly increasing), nonincreasing, decreasing, monotone and strictly monotone real functions on a subset of $\\mathbb{R}$, with the dictionary to monotone sequences"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
  evidence: semantic-source
deps: [def-complete-ordered-field, def-real-order, def-interval, def-monotone-sequence, def-sequence, def-ordered-field, def-injection-surjection-bijection]
justified_by: []
aliases: [def-monotone-real-function, def-strictly-monotone]
landmark: true
short: "monotone real function"
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
    - title: "Monotonic function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Monotonic_function"
    - title: "Monotone Functions (Analysis WebNotes)"
      url: "https://mathcs.org/analysis/reals/cont/defs/monofun.html"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]], [[def-ordered-field]]) with its order
([[def-real-order]]). Let $A \subseteq \mathbb{R}$ and let
$f : A \to \mathbb{R}$. Then $f$ is:

- **nondecreasing** when $f(x) \le f(y)$ for all $x, y \in A$ with $x \le y$;
- **increasing**, or *strictly increasing*, when $f(x) < f(y)$ for all
  $x, y \in A$ with $x < y$;
- **nonincreasing** when $f(x) \ge f(y)$ for all $x, y \in A$ with $x \le y$;
- **decreasing**, or *strictly decreasing*, when $f(x) > f(y)$ for all
  $x, y \in A$ with $x < y$;
- **monotone** when it is nondecreasing or nonincreasing;
- **strictly monotone** when it is increasing or decreasing.

The naming follows the convention of [[def-monotone-sequence]], which is the
convention of this library throughout: *increasing* is the strict notion and
*nondecreasing* the weak one.

**An increasing function is nondecreasing, and a decreasing function is
nonincreasing.** For $x \le y$ either $x < y$, and then $f(x) < f(y)$, hence
$f(x) \le f(y)$; or $x = y$, and then $f(x) = f(y)$. The same argument with the
inequalities reversed gives the second claim. So strictly monotone implies
monotone.

**A strictly monotone function is injective**
([[def-injection-surjection-bijection]]). Let $f$ be increasing and let
$x, y \in A$ with $x \ne y$. By trichotomy either $x < y$, and then
$f(x) < f(y)$, or $y < x$, and then $f(y) < f(x)$; in both cases
$f(x) \ne f(y)$. The decreasing case is the same argument. The converse fails,
and the failure is not exotic: a continuous injection on an interval *is*
strictly monotone ([[thm-continuous-injection-on-an-interval-is-strictly-monotone]]),
but on a domain that is not an interval it need not be.

**Negation exchanges the two directions.** For $g := -f$, that is
$g(x) := -f(x)$, the four conditions above are exchanged in pairs: $f$ is
nondecreasing exactly when $g$ is nonincreasing, and $f$ is increasing exactly
when $g$ is decreasing, because $u \le v$ holds exactly when $-v \le -u$
([[def-ordered-field]]). Several proofs below use this to reduce a nonincreasing
case to a nondecreasing one.

**Monotone on a set, not at a point.** All six conditions are conditions on the
whole of $A$; unlike continuity ([[def-continuity-real]]) there is no pointwise
version, and none is used in this library. The domain $A$ is an arbitrary subset
of $\mathbb{R}$; where a result needs $A$ to be an interval
([[def-interval]]) it says so, and the hypothesis is never decoration.

### The dictionary to monotone sequences

A sequence of reals is a function $x : \mathbb{N} \to \mathbb{R}$
([[def-sequence]]), and [[def-monotone-sequence]] calls it nondecreasing when
$x_j \le x_k$ for all $j \le k$, increasing when $x_j < x_k$ for all $j < k$,
and so on. Those are **the same four conditions as above**, read with the
ordered set $\mathbb{N}$ in place of the ordered subset $A \subseteq \mathbb{R}$
and with the comparison of indices in place of the comparison of arguments. So
nothing new is introduced here for sequences, and the two vocabularies may be
used interchangeably: the words *nondecreasing*, *increasing*, *nonincreasing*,
*decreasing*, *monotone* and *strictly monotone* mean the corresponding
condition on the domain at hand.

One consequence is used repeatedly, and it has to be stated carefully because
composition does **not** simply preserve the four words. Let $(x_k)$ be a
**nondecreasing** sequence with $x_k \in A$ for every $k$, so that $j \le k$ gives
$x_j \le x_k$. Then:

- if $f$ is nondecreasing, $(f(x_k))$ is nondecreasing, since $f(x_j) \le f(x_k)$;
- if $f$ is nonincreasing, $(f(x_k))$ is **nonincreasing**, since
  $f(x_j) \ge f(x_k)$.

So along a nondecreasing sequence the composite inherits the direction of $f$;
and with $(x_k)$ increasing and $f$ increasing, $(f(x_k))$ is increasing, while
with $(x_k)$ increasing and $f$ decreasing, $(f(x_k))$ is decreasing.

**Along a nonincreasing sequence the direction is reversed, not inherited.** If
$(x_k)$ is nonincreasing and $f$ is nonincreasing, then $j \le k$ gives
$x_j \ge x_k$ and hence $f(x_j) \le f(x_k)$: the composite is **nondecreasing**.
The witness is $f(x) = -x$ on $A = \mathbb{R}$ with $x_k = -k$, where both $f$ and
$(x_k)$ are decreasing and $f(x_k) = k$ is increasing. Two order-reversing maps
compose to an order-preserving one, exactly as for the four words applied to
functions.
````

### `def-vector-space`

````markdown
---
id: def-vector-space
kind: definition
title: "Vector space over a field"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-field, def-group, def-binary-operation, def-identity-element, def-invertible-element, lem-identity-unique, lem-inverse-unique]
justified_by: []
aliases: [def-vector, def-scalar-multiplication]
landmark: true
short: "vector space over $F$"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Vector space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Vector_space"
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Ch. 1"
      url: "https://linear.axler.net/"
pipeline_run: null
---

## Definition

Let $F$ be a field ([[def-field]]), with additive identity $0_F$, multiplicative
identity $1_F$, and the field axioms as stated there. A **vector space over $F$**,
also called an **$F$-vector space**, consists of

- a set $V$, whose elements are called **vectors**;
- a binary operation $+ : V \times V \to V$ on $V$ ([[def-binary-operation]]),
  the **vector addition**;
- an element $0_V \in V$, the **zero vector**;
- a map $\cdot \,:\, F \times V \to V$, the **scalar multiplication**, written
  $\lambda v := \cdot(\lambda, v)$;

subject to the following axioms, in which $u, v \in V$ and $\lambda, \mu \in F$
are arbitrary.

- **(V1)** $(V, +, 0_V)$ is an abelian group ([[def-group]]): $+$ is associative
  and commutative, $0_V$ is a two-sided identity for $+$
  ([[def-identity-element]]), and every $v \in V$ has an additive inverse
  ([[def-invertible-element]]).
- **(V2)** $\lambda(u + v) = \lambda u + \lambda v$.
- **(V3)** $(\lambda + \mu)v = \lambda v + \mu v$.
- **(V4)** $(\lambda\mu)v = \lambda(\mu v)$.
- **(V5)** $1_F v = v$.

The elements of $F$ are called **scalars**. When several vector spaces are in
play we write $0_V$ for the zero of $V$, and we write $-v$ for the additive
inverse of $v$ and $u - v := u + (-v)$.

**The notation $0_V$ and $-v$ is legitimate.** Axiom (V1) asserts only that some
two-sided identity and some additive inverses exist. That there is at most one
two-sided identity for $+$ is [[lem-identity-unique]], and that an invertible
element of a monoid has exactly one inverse is [[lem-inverse-unique]]; both are
proved before [[def-group]] and are inherited here with the group structure. So
$0_V$ and $-v$ denote well-defined elements, and nothing below re-derives them.

**What (V1) buys, and why it is not restated.** Associativity, commutativity, the
identity law $v + 0_V = v = 0_V + v$, the inverse law $v + (-v) = 0_V$,
cancellation ([[lem-group-cancellation]]) and the inverse identities
([[lem-group-inverse-laws]]) are facts about abelian groups. They are quoted from
the group page wherever they are used and are never proved again for vectors.

## Remarks

- **Scalar multiplication is not a binary operation on a set.** It is a map
  $F \times V \to V$ with arguments from two different sets, so
  [[def-binary-operation]], which is about a map $S \times S \to S$, does not
  apply to it and is never cited for it. The definition above cites that item for
  the vector addition only. In particular "closed under scalar multiplication"
  below always means $\lambda v \in W$ for $\lambda \in F$ and $v \in W$, which is
  not an instance of the closure condition defined there.

- **(V5) is an axiom, not a consequence of (V2)–(V4).** Take any abelian group
  $(V,+,0_V)$ and define $\lambda v := 0_V$ for every $\lambda$ and $v$. Then
  (V2), (V3) and (V4) all hold, both sides of each being $0_V$, while (V5) fails
  as soon as $V \ne \{0_V\}$. So (V5) has to be imposed, and it is what ties the
  scalar action to the identity of $F$.

- **Two structures, one set.** A vector space is data: the set $V$, the addition,
  the zero, and the scalar multiplication, over a fixed field $F$. The same set
  may carry vector-space structures over different fields, and the field is part
  of the statement of every result below. [[lem-restriction-of-scalars]] is the
  first place where that matters.

- **The field is the published one.** No field axiom is restated here; $F$ is a
  field in the sense of [[def-field]], whose axiom (A) already says that $(F,+)$
  is an abelian group and whose axiom (M) says the same of
  $(F \setminus \{0_F\}, \cdot)$. In particular every field is a vector space over
  itself, which is [[lem-restriction-of-scalars]].
````

### `ex-bounded-with-no-local-extremum-and-nowhere-semicontinuous`

````markdown
---
id: ex-bounded-with-no-local-extremum-and-nowhere-semicontinuous
kind: example
title: "A bounded function on $\\mathbb{R}$ with no local maximum and no local minimum at any point, upper semicontinuous at no point and lower semicontinuous at no point: compose the Hamel coefficient with a strictly increasing injection of $\\mathbb{R}$ into $(0,1)$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
  evidence: semantic-source
deps: [ex-hamel-basis-additive-function, lem-hamel-basis-exists, def-additive-function, lem-additive-is-q-linear, def-semicontinuity, thm-semicontinuity-level-set-characterisation, def-max-min, lem-rat-embeds-dense, def-bounded-set, def-interval, lem-q-and-irrationals-dense-r, def-continuity-real, def-complete-ordered-field, def-neighbourhood-r, lem-of-abs-value, def-axiom-of-choice, thm-zorn]
justified_by: []
aliases: []
landmark: false
short: "no local extremum, nowhere semicontinuous"
proof_strategy: constructive
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
    - title: "Semi-continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Semi-continuity"
    - title: "Cauchy's functional equation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy%27s_functional_equation"
pipeline_run: null
---

## Example

**Assume the Axiom of Choice** ([[def-axiom-of-choice]], [[thm-zorn]]), which
enters through [[lem-hamel-basis-exists]]. Let
$f = \Lambda_{b_{\star}} : \mathbb{R} \to \mathbb{R}$ be the Hamel coefficient
map of [[ex-hamel-basis-additive-function]], whose values are exactly the
rationals and each of whose nonempty level sets is dense in $\mathbb{R}$. Define

$$\varphi : \mathbb{R} \to \mathbb{R}, \qquad \varphi(u) \;:=\; \frac{1}{2} + \frac{u}{2\,(1 + |u|)}, \qquad g := \varphi \circ f .$$

Say that $x$ is a **local maximum point** of $g$ when there is a real
$\delta > 0$ with $g(y) \le g(x)$ for every $y \in N_\delta(x)$
([[def-neighbourhood-r]]), and a **local minimum point** when there is a real
$\delta > 0$ with $g(y) \ge g(x)$ for every $y \in N_\delta(x)$. Then:

1. $0 < g(x) < 1$ for every real $x$, so $g$ is bounded
   ([[def-bounded-set]]);
2. $g$ has **no** local maximum point and **no** local minimum point;
3. $g$ is upper semicontinuous at no point of $\mathbb{R}$ and lower
   semicontinuous at no point ([[def-semicontinuity]]); in particular it is
   continuous at no point ([[def-continuity-real]]).

**Why $\varphi$ and not a bijection onto $\mathbb{Q} \cap (0,1)$.** All that is
needed of $\varphi$ is that it be strictly increasing, take values in $(0,1)$,
and send rationals to rationals; the explicit formula above does all three and
costs no countability argument.

## Facts & Assumptions

**Given:** The Axiom of Choice; the Hamel coefficient map $f$; the map $\varphi$ above; and $g = \varphi \circ f$.

[A1] The Axiom of Choice ([[def-axiom-of-choice]], [[thm-zorn]]).

[L1] **Assume the Axiom of Choice.** Then there is an additive $f : \mathbb{R} \to \mathbb{R}$ whose range is exactly the canonical copy $\mathbb{Q} \subseteq \mathbb{R}$ of the rationals and each of whose level sets $f^{-1}(\{r\})$, $r \in \mathbb{Q}$, is dense in $\mathbb{R}$ ([[ex-hamel-basis-additive-function]], claims 1 and 4, [[lem-hamel-basis-exists]], [[def-additive-function]], [[lem-additive-is-q-linear]], [[lem-rat-embeds-dense]]).

[L2] A set $S \subseteq \mathbb{R}$ is dense exactly when $S \cap N_\delta(x) \ne \varnothing$ for every real $x$ and every real $\delta > 0$ ([[lem-q-and-irrationals-dense-r]], [[def-neighbourhood-r]]).

[L3] $g$ is upper semicontinuous at $c$ when for every real $\varepsilon > 0$ there is a real $\delta > 0$ with $g(y) < g(c) + \varepsilon$ for every $y \in N_\delta(c)$, lower semicontinuous at $c$ with $g(y) > g(c) - \varepsilon$, and continuous at $c$ exactly when it is both ([[def-semicontinuity]], [[def-continuity-real]], [[thm-semicontinuity-level-set-characterisation]]).

[L4] $\mathbb{R}$ is an ordered field, and $|u| \ge 0$ with $|u| = u$ for $u \ge 0$ and $|u| = -u$ for $u \le 0$ ([[def-complete-ordered-field]], [[lem-of-abs-value]]).

[L5] $m$ is a maximum of a set when it belongs to it and dominates it, and dually for a minimum ([[def-max-min]]); $N_\delta(x) = (x-\delta, x+\delta)$ is a nondegenerate interval ([[def-neighbourhood-r]], [[def-interval]]).

## Verification

**Proof technique:** constructive.

1.1 Assume the Axiom of Choice and fix $f$ as in [L1]; define $\varphi(u) := 1/2 + u/(2(1+|u|))$ and $g := \varphi \circ f$. [A1, L1, construct]

2.1 $\varphi$ is strictly increasing. For $0 \le u_{1} < u_{2}$: $u_{1}(1+u_{2}) < u_{2}(1+u_{1})$ reduces to $u_{1} < u_{2}$, and dividing by the positive $(1+u_{1})(1+u_{2})$ gives $u_{1}/(1+u_{1}) < u_{2}/(1+u_{2})$. For $u_{1} < u_{2} \le 0$: $u_{1}(1-u_{2}) < u_{2}(1-u_{1})$ reduces to $u_{1} < u_{2}$, and dividing by the positive $(1-u_{1})(1-u_{2})$ gives $u_{1}/(1-u_{1}) < u_{2}/(1-u_{2})$. For $u_{1} < 0 \le u_{2}$ the first quantity is negative and the second is nonnegative. In every case $u_{1}/(1+|u_{1}|) < u_{2}/(1+|u_{2}|)$, and $\varphi$ is an increasing function of that quantity. [step 1.1, L4]

3.1 $0 < \varphi(u) < 1$ for every real $u$, since $|u|/(1+|u|) < 1$ gives $-1 < u/(1+|u|) < 1$; and $\varphi$ takes rationals to rationals, since $|u|$ and $1 + |u| \ne 0$ are rational when $u$ is. Claim 1 follows: $0 < g(x) < 1$ for every real $x$. [step 1.1, step 2.1, L4]

3.2 Let $x$ be real and put $r := f(x)$, a rational, and $v := g(x) = \varphi(r)$. The reals $r - 1$ and $r + 1$ are rational, and $\varphi(r-1) < v < \varphi(r+1)$ by step 2.1. [step 1.1, step 2.1, L1]

4.1 With $r$ and $v$ as in step 3.2, every real $\delta > 0$ gives points $y_{-}, y_{+} \in N_\delta(x)$ with $g(y_{-}) = \varphi(r-1) < v$ and $g(y_{+}) = \varphi(r+1) > v$: the level sets $f^{-1}(\{r-1\})$ and $f^{-1}(\{r+1\})$ are dense in $\mathbb{R}$, hence meet $N_\delta(x)$. [step 3.2, L1, L2]

5.1 Claim 2: $x$ is not a local maximum point, since every $N_\delta(x)$ contains $y_{+}$ with $g(y_{+}) > g(x)$; and $x$ is not a local minimum point, since every $N_\delta(x)$ contains $y_{-}$ with $g(y_{-}) < g(x)$. As $x$ was arbitrary, $g$ has no local maximum point and no local minimum point. [step 4.1, L5]

5.2 Claim 3: put $\varepsilon_{+} := \varphi(r+1) - v > 0$. For every real $\delta > 0$ the point $y_{+}$ of step 4.1 lies in $N_\delta(x)$ and satisfies $g(y_{+}) = v + \varepsilon_{+}$, so the inequality $g(y_{+}) < g(x) + \varepsilon_{+}$ fails; hence no $\delta$ witnesses upper semicontinuity at $x$ for $\varepsilon_{+}$, and $g$ is upper semicontinuous at no point. [step 3.2, step 4.1, L3]

6.1 Symmetrically, with $\varepsilon_{-} := v - \varphi(r-1) > 0$ the point $y_{-}$ satisfies $g(y_{-}) = v - \varepsilon_{-}$, so $g(y_{-}) > g(x) - \varepsilon_{-}$ fails and $g$ is lower semicontinuous at no point; being continuous at a point would require both, so $g$ is continuous at no point. [step 3.2, step 4.1, step 5.2, L3]

7.1 Claims 1, 2 and 3 hold for the function $g$ constructed in step 1.1. [step 3.1, step 5.1, step 5.2, step 6.1, discharge-construct] ∎

## Remarks

- **Boundedness is what makes the example surprising.** A function with no local
  extremum anywhere is easy to arrange if it is allowed to be unbounded; here
  every value lies strictly inside $(0,1)$ and yet no point is even a local
  extremum, because arbitrarily close to any point the function takes both a
  strictly larger and a strictly smaller value.

- **Everything comes from the level sets.** The only property of $f$ used after
  step 1.1 is that its nonempty level sets are dense and indexed by the
  rationals ([[ex-hamel-basis-additive-function]]); $\varphi$ contributes only
  the bounding into $(0,1)$ and the preservation of strict order. Any function
  with countably many dense level sets, relabelled by a strictly increasing
  injection into a bounded interval, would do as well.

- **The additivity of $f$ is not used here.** It was used to prove that the level
  sets are dense, on the companion item; once that is known, $g$ has nothing to
  do with Cauchy's equation. In particular $g$ is not additive: it takes values
  in $(0,1)$ and $g(0) \ne 0$.
````

### `fs-additive-implies-linear`

````markdown
---
id: fs-additive-implies-linear
kind: false-statement
title: "FALSE: every additive $f : \\mathbb{R} \\to \\mathbb{R}$ is of the form $x \\mapsto cx$ for a single real $c$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
  evidence: exact-source
deps: [def-additive-function, lem-additive-is-q-linear, lem-hamel-basis-exists, thm-cauchy-functional-equation-regularity, def-vector-space, def-linear-combination-and-span, lem-restriction-of-scalars, def-axiom-of-choice, thm-zorn, def-complete-ordered-field, lem-rat-embeds-dense, lem-q-and-irrationals-dense-r]
justified_by: []
aliases: []
landmark: true
short: "additive does not imply linear"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Cauchy's functional equation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy%27s_functional_equation"
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
    - title: "Hamel Basis (MathWorld)"
      url: "https://mathworld.wolfram.com/HamelBasis.html"
pipeline_run: null
---

## Statement

**FALSE.** Every additive $f : \mathbb{R} \to \mathbb{R}$
([[def-additive-function]]) is of the form $x \mapsto c\,x$ for a single real
$c$.

What is true is the $\mathbb{Q}$-linear part of it, $f(qx) = q f(x)$ for rational
$q$ ([[lem-additive-is-q-linear]]), and the conditional statements of
[[thm-cauchy-functional-equation-regularity]], each of which adds a regularity
hypothesis. The claim above asserts the conclusion with no hypothesis at all,
and it is false.

**The refutation assumes the Axiom of Choice** ([[def-axiom-of-choice]]), which
it uses through [[lem-hamel-basis-exists]] and hence through [[thm-zorn]]. The
hypothesis is carried explicitly in the Facts below and in every step that needs
it. It is an axiom already adopted in this library, so the refutation is a
refutation and not a conditional one; what it does not settle is whether a
counterexample exists without choice, and nothing here bears on that question.

## Facts & Assumptions

**Given:** The Axiom of Choice, and $\mathbb{Q}$ denoting the canonical copy of the rationals inside $\mathbb{R}$ ([[lem-rat-embeds-dense]]).

[A1] The Axiom of Choice ([[def-axiom-of-choice]], [[thm-zorn]]).

[L1] **Assume the Axiom of Choice.** Then there is $B \subseteq \mathbb{R}$, a basis of $\mathbb{R}$ as a vector space over $\mathbb{Q}$ by restriction of scalars, and for each $b_{\star} \in B$ a map $\Lambda_{b_{\star}} : \mathbb{R} \to \mathbb{Q}$ with $\Lambda_{b_{\star}}(x+y) = \Lambda_{b_{\star}}(x) + \Lambda_{b_{\star}}(y)$ for all reals $x, y$, with $\Lambda_{b_{\star}}(b_{\star}) = 1$, and with range the whole of $\mathbb{Q}$ ([[lem-hamel-basis-exists]], claims 1 and 4, [[lem-restriction-of-scalars]], [[def-vector-space]], [[def-linear-combination-and-span]]).

[L2] A function $f : \mathbb{R} \to \mathbb{R}$ is additive when $f(x+y) = f(x)+f(y)$ for all reals $x, y$ ([[def-additive-function]]).

[L3] There exists an irrational real, that is a real not lying in $\mathbb{Q}$: the irrationals are dense in $\mathbb{R}$ and in particular nonempty ([[lem-q-and-irrationals-dense-r]]).

[L4] $\mathbb{R}$ is a field, so a nonzero real is invertible ([[def-complete-ordered-field]]).

## Refutation

**Proof technique:** direct.

1.1 Assume the Axiom of Choice and fix a Hamel basis $B$ of $\mathbb{R}$ over $\mathbb{Q}$ together with an element $b_{\star} \in B$; such an element exists because $B$ spans $\mathbb{R}$, which is not $\{0\}$, so $B$ is nonempty. Put $f := \Lambda_{b_{\star}}$, regarded as a function $\mathbb{R} \to \mathbb{R}$. [A1, L1, construct]

2.1 $f$ is additive: $\Lambda_{b_{\star}}(x+y) = \Lambda_{b_{\star}}(x) + \Lambda_{b_{\star}}(y)$ for all reals $x, y$ is one of the properties of the coefficient map. [step 1.1, L1, L2]

2.2 Every value of $f$ is rational, and $f(b_{\star}) = 1$. [step 1.1, L1]

3.1 Suppose there were a real $c$ with $f(x) = c\,x$ for every real $x$. Then $c\,b_{\star} = f(b_{\star}) = 1$, so $c \ne 0$ and $c$ is invertible. [step 1.1, step 2.2, L4]

4.1 Take an irrational real $\theta$ and put $x_{0} := c^{-1}\theta$. Then $f(x_{0}) = c\,x_{0} = \theta$, which is irrational; but every value of $f$ is rational by step 2.2. This is impossible, so no such $c$ exists. [step 2.2, step 3.1, L3, L4]

5.1 So $f$ is an additive function $\mathbb{R} \to \mathbb{R}$ that is not of the form $x \mapsto c\,x$ for any real $c$, and the claim in the Statement is false. [step 2.1, step 4.1, discharge-construct] ∎

## Remarks

- **What the witness looks like, by the regularity theorem.** Since $f$ is additive and not of the form $x \mapsto cx$, the contrapositive of each clause of [[thm-cauchy-functional-equation-regularity]] applies: $f$ is continuous at no point of $\mathbb{R}$, is bounded neither above nor below on any nondegenerate interval, is monotone on no nondegenerate interval, is of constant sign on none, and its graph is dense in $\mathbb{R}^{2}$. The companion page states and uses exactly this in full.

- **The cost is the Axiom of Choice, and only that.** The construction uses no other principle, and AC is an axiom this library has adopted, so nothing here is conditional in the sense of resting on unproved material. It is worth being precise about what is *not* claimed: it is not claimed that no explicit non-linear additive function can be written down, only that this one is produced by a proof that exhibits nothing.

- **Every hypothesis that would rescue the claim is already recorded.** Adding any single one of the six conditions of [[thm-cauchy-functional-equation-regularity]] turns the false statement into a theorem. That is the reason the false statement is worth stating: the failure is not marginal, and yet it is repaired by an extremely weak hypothesis, as little as continuity at one single point.
````

### `lem-additive-is-q-linear`

````markdown
---
id: lem-additive-is-q-linear
kind: lemma
title: "An additive $f : \\mathbb{R} \\to \\mathbb{R}$ satisfies $f(0) = 0$, $f(-x) = -f(x)$ and $f(qx) = q\\,f(x)$ for every rational $q$ and every real $x$; in particular $f(q) = q\\,f(1)$ at every rational $q$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
  evidence: exact-source
deps: [def-additive-function, thm-induction-principle, lem-rat-embeds-dense, lem-int-embeds-rat, lem-nat-embeds-int, def-canonical-natural, lem-integer-multiples-agree-with-canonical-natural, def-complete-ordered-field, def-integers, lem-of-naturals-positive]
justified_by: []
aliases: []
landmark: true
short: "additive implies $\\mathbb{Q}$-linear"
proof_strategy: induction
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
    - title: "Cauchy's functional equation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy%27s_functional_equation"
pipeline_run: null
---

## Statement

Let $f : \mathbb{R} \to \mathbb{R}$ be additive ([[def-additive-function]]), and
identify $\mathbb{N} \subseteq \mathbb{Z} \subseteq \mathbb{Q} \subseteq
\mathbb{R}$ along the canonical embeddings ([[lem-nat-embeds-int]],
[[lem-int-embeds-rat]], [[lem-rat-embeds-dense]]), writing $\iota(n)$ for the
canonical natural of $n$ in $\mathbb{R}$ ([[def-canonical-natural]]). Then, for
every real $x$:

1. $f(0) = 0$;
2. $f(-x) = -f(x)$;
3. $f(\iota(n)\,x) = \iota(n)\,f(x)$ for every $n \in \mathbb{N}$;
4. $f(m x) = m\,f(x)$ for every integer $m$;
5. $f(q x) = q\,f(x)$ for every rational $q$.

In particular, taking $x = 1$ in claim 5, $f(q) = q\,f(1)$ at every rational $q$:
**an additive function is determined on $\mathbb{Q}$ by its value at $1$.**

**What this does not say.** Claim 5 is $\mathbb{Q}$-homogeneity, not
$\mathbb{R}$-homogeneity: nothing here gives $f(\lambda x) = \lambda f(x)$ for
irrational $\lambda$, and that is exactly the gap that
[[fs-additive-implies-linear]] shows cannot be closed without a regularity
hypothesis.

## Facts & Assumptions

**Given:** An additive $f : \mathbb{R} \to \mathbb{R}$, so $f(x+y) = f(x) + f(y)$ for all reals $x, y$.

[A1] $f(x + y) = f(x) + f(y)$ for all reals $x, y$ ([[def-additive-function]]).

[L1] Induction on $\mathbb{N}$ ([[thm-induction-principle]]).

[L2] The canonical natural satisfies $\iota(0) = 0$ and $\iota(n+1) = \iota(n) + 1$, and it agrees with the additive multiple $n \cdot 1_{\mathbb{R}}$ ([[def-canonical-natural]], [[lem-integer-multiples-agree-with-canonical-natural]], [[lem-of-naturals-positive]]).

[L3] Every integer is $\iota(n)$ or $-\iota(n)$ for a natural $n$, and every rational is $m/\iota(n)$ with $m$ an integer and $n$ a natural $\ge 1$; the embeddings preserve sums and products, and $\iota(n) \ne 0$ for $n \ge 1$ ([[lem-nat-embeds-int]], [[lem-int-embeds-rat]], [[lem-rat-embeds-dense]], [[def-integers]], [[lem-of-naturals-positive]]).

[L4] $\mathbb{R}$ is a field, so cancellation, distributivity and inverses of nonzero elements are available ([[def-complete-ordered-field]]).

## Proof

**Proof technique:** induction.

1.1 Claim 1: taking $x = y = 0$ in the functional equation gives $f(0) = f(0) + f(0)$, and adding $-f(0)$ to both sides gives $f(0) = 0$. [A1, L4]

1.2 Claim 3, inductive hypothesis: suppose $f(\iota(n)x) = \iota(n)f(x)$ for a given $n \in \mathbb{N}$ and every real $x$. [ih]

2.1 Claim 2: taking $y = -x$ gives $0 = f(0) = f(x) + f(-x)$, so $f(-x) = -f(x)$. [step 1.1, A1, L4]

2.2 Claim 3, base case $n = 0$: $\iota(0) = 0$, so $f(\iota(0)x) = f(0) = 0 = \iota(0)f(x)$. [step 1.1, L2, base]

2.3 Claim 3, inductive step: $\iota(n+1)x = \iota(n)x + x$, so $f(\iota(n+1)x) = f(\iota(n)x) + f(x) = \iota(n)f(x) + f(x) = (\iota(n)+1)f(x) = \iota(n+1)f(x)$. [step 1.2, A1, L2, L4]

3.1 Claim 3 holds for every $n \in \mathbb{N}$ and every real $x$, by induction on $n$ from steps 2.2 and 2.3. [step 2.2, step 2.3, L1]

4.1 Claim 4: an integer $m$ is $\iota(n)$ or $-\iota(n)$ for some natural $n$. In the first case claim 3 applies directly. In the second, $f(mx) = f(-(\iota(n)x)) = -f(\iota(n)x) = -\iota(n)f(x) = m f(x)$. [step 2.1, step 3.1, L3]

5.1 Claim 5: let $q$ be rational and write $q = m/\iota(n)$ with $m$ an integer and $n$ a natural $\ge 1$, so $\iota(n) \ne 0$. Applying claim 4 with the integer $\iota(n)$ to the real $qx$ gives $\iota(n) f(qx) = f(\iota(n) q x) = f(mx) = m f(x)$, and dividing by $\iota(n)$ gives $f(qx) = (m/\iota(n)) f(x) = q f(x)$. [step 4.1, L3, L4]

6.1 Taking $x = 1$ in claim 5 gives $f(q) = q f(1)$ for every rational $q$, and all five claims are proved. [step 1.1, step 2.1, step 3.1, step 4.1, step 5.1, discharge-induction] ∎

## Remarks

- **The induction is on $\mathbb{N}$ and everything else is algebra.** Only
  claim 3 needs induction; claims 4 and 5 are obtained from it by the two field
  operations, and claims 1 and 2 are two substitutions into the equation. The
  base case is $n = 0$, where $\iota(0) = 0$ and the identity reads $f(0) = 0$;
  it is a genuine case and not a convention, since $\mathbb{N}$ contains $0$.

- **This is the whole of the algebraic theory.** Every regularity theorem about
  Cauchy's equation ([[thm-cauchy-functional-equation-regularity]]) works by
  combining claim 5 with density of $\mathbb{Q}$ in $\mathbb{R}$: the value of
  $f$ is pinned on a dense set, and a regularity hypothesis is what forbids the
  values off that set from being arbitrary.
````

### `lem-hamel-basis-exists`

````markdown
---
id: lem-hamel-basis-exists
kind: lemma
title: "Assuming the Axiom of Choice, $\\mathbb{R}$ has a Hamel basis over $\\mathbb{Q}$: there is $B \\subseteq \\mathbb{R}$ such that every real is a finite $\\mathbb{Q}$-linear combination of elements of $B$ in exactly one way, and each basis vector carries a well-defined $\\mathbb{Q}$-linear coefficient map"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
  evidence: semantic-source
deps: [def-vector-space, lem-restriction-of-scalars, def-subfield, def-linear-combination-and-span, lem-span-is-the-set-of-linear-combinations, lem-dependent-iff-a-vector-lies-in-the-span-of-the-others, lem-span-monotone-and-idempotent, lem-span-of-a-single-vector, lem-sum-is-span-of-union, def-sum-of-linear-subspaces, def-internal-direct-sum, lem-direct-sum-criterion, def-linear-subspace, def-linear-independence, def-linear-basis, cor-every-vector-space-has-a-basis, thm-unique-coordinates-with-respect-to-an-ordered-basis, def-axiom-of-choice, thm-zorn, lem-rat-embeds-dense, thm-rationals-countable, thm-r-uncountable, lem-countable-iff-surjection-from-n, def-countable, def-field, def-complete-ordered-field, def-injection-surjection-bijection, def-natural-numbers]
justified_by: []
aliases: [lem-hamel-basis]
landmark: true
short: "a Hamel basis of $\\mathbb{R}$ over $\\mathbb{Q}$"
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
    - title: "Hamel basis, in Basis (linear algebra) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Basis_(linear_algebra)"
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
    - title: "Hamel Basis (MathWorld)"
      url: "https://mathworld.wolfram.com/HamelBasis.html"
pipeline_run: null
---

## Statement

**Assume the Axiom of Choice** ([[def-axiom-of-choice]]). The hypothesis is
genuinely used: it enters through [[cor-every-vector-space-has-a-basis]], whose
own Statement begins "Assume the Axiom of Choice", and which rests on
[[thm-zorn]].

Write $\mathbb{Q}$ for the canonical copy $\{\hat q : q \in \mathbb{Q}\}$ of the
rationals inside $\mathbb{R}$ ([[lem-rat-embeds-dense]]). Then $\mathbb{Q}$ is a
subfield of $\mathbb{R}$ ([[def-subfield]]) and $\mathbb{R}$ is a vector space
over $\mathbb{Q}$ by restriction of scalars ([[lem-restriction-of-scalars]],
[[def-vector-space]]); all spans, linear independence and bases below are taken
in that structure. Then:

1. **Existence.** $\mathbb{R}$ has a basis $B$ over $\mathbb{Q}$
   ([[def-linear-basis]]), called a **Hamel basis**.
2. **Representation.** Every real $x$ is
   $x = \sum_{i<n}\lambda_i b_i$ for some $n \in \mathbb{N}$, some **injective**
   list $b : n \to B$ ([[def-injection-surjection-bijection]]) and some
   $\lambda : n \to \mathbb{Q}$ ([[def-linear-combination-and-span]]).
3. **Uniqueness along a list.** For a fixed $n$ and a fixed injective
   $b : n \to B$, if $\lambda, \mu : n \to \mathbb{Q}$ satisfy
   $\sum_{i<n}\lambda_i b_i = \sum_{i<n}\mu_i b_i$, then $\lambda_i = \mu_i$ for
   every $i < n$.
4. **The coefficient map of a basis vector.** Fix $b_{\star} \in B$ and put
   $W_{b_{\star}} := \operatorname{span}(B \setminus \{b_{\star}\})$. Every real
   $x$ is $x = \lambda\, b_{\star} + w$ with $\lambda \in \mathbb{Q}$ and
   $w \in W_{b_{\star}}$ in **exactly one** way. Writing
   $\Lambda_{b_{\star}}(x) := \lambda$ for that unique scalar, the map
   $\Lambda_{b_{\star}} : \mathbb{R} \to \mathbb{Q}$ satisfies
   $$\Lambda_{b_{\star}}(x+y) = \Lambda_{b_{\star}}(x) + \Lambda_{b_{\star}}(y), \qquad \Lambda_{b_{\star}}(qx) = q\,\Lambda_{b_{\star}}(x) \ \ (q \in \mathbb{Q}), \qquad \Lambda_{b_{\star}}(b_{\star}) = 1,$$
   its range is the whole of $\mathbb{Q}$, and
   $\{\, x \in \mathbb{R} : \Lambda_{b_{\star}}(x) = 0 \,\} = W_{b_{\star}}$.
5. **The complement is not trivial.** $W_{b_{\star}} \ne \{0\}$ for every
   $b_{\star} \in B$.

Claim 2 together with claim 4 is the precise content of the phrase "in exactly
one way" in the title: a real is a finite $\mathbb{Q}$-combination of basis
vectors, and the coefficient attached to each single basis vector is determined
by the real alone.

## Facts & Assumptions

**Given:** The field $\mathbb{R}$, the canonical copy $\mathbb{Q} \subseteq \mathbb{R}$ of the rationals, and the Axiom of Choice.

[A1] The Axiom of Choice, used only through [L4] ([[def-axiom-of-choice]], [[thm-zorn]]).

[L1] The map $q \mapsto \hat q$ is an embedding of ordered fields of $\mathbb{Q}$ into $\mathbb{R}$ ([[lem-rat-embeds-dense]]); a subfield is a subset containing $1$, closed under $a - b$ and $ab$, and containing $x^{-1}$ for each nonzero $x$ in it ([[def-subfield]], [[def-field]], [[def-complete-ordered-field]]).

[L2] A field is a vector space over itself, and an $F$-vector space is a $K$-vector space for every subfield $K \subseteq F$ by restricting the scalars ([[lem-restriction-of-scalars]], [[def-vector-space]]).

[L3] $\operatorname{span}(S)$ is the smallest linear subspace containing $S$; it is extensive, monotone and idempotent; $\operatorname{span}\{v\} = \{\lambda v : \lambda \in F\}$, and for $v \ne 0_V$ the scalar $\lambda$ in $\lambda v$ is determined ([[def-linear-combination-and-span]], [[def-linear-subspace]], [[lem-span-monotone-and-idempotent]], [[lem-span-of-a-single-vector]]).

[L4] **Assume the Axiom of Choice.** Then every vector space over every field has a basis, that is a linearly independent spanning subset ([[cor-every-vector-space-has-a-basis]], [[def-linear-basis]], [[def-linear-independence]]).

[L5] For $S \subseteq V$: $S$ is linearly dependent if and only if some $s \in S$ lies in $\operatorname{span}(S \setminus \{s\})$; and $\operatorname{span}(S)$ is already the set of linear combinations of **injective** finite lists into $S$ ([[lem-dependent-iff-a-vector-lies-in-the-span-of-the-others]], claims 1 and 2, [[lem-span-is-the-set-of-linear-combinations]]).

[L6] A finite list $v : n \to V$ is an ordered basis of $V$ if and only if every $x \in V$ is $\sum_{i<n}\lambda_i v_i$ for exactly one $\lambda : n \to F$; an ordered basis is an injective list whose image is a basis; and for a linear subspace $U \subseteq V$ and $A \subseteq U$ the readings of "$A$ is linearly independent" and "$A$ is a basis" computed in $U$ and in $V$ agree ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]], [[def-linear-basis]], [[def-natural-numbers]]).

[L7] For finitely many linear subspaces, $\sum_{i<n}U_i = \operatorname{span}(\bigcup_{i<n}U_i)$; and $V = \bigoplus_{i<n}U_i$ if and only if every $v \in V$ is $\sum_{i<n}u_i$ with $u_i \in U_i$ in exactly one way, which for $n = 2$ reads $v = u_0 + u_1$ ([[lem-sum-is-span-of-union]], [[def-sum-of-linear-subspaces]], [[def-internal-direct-sum]], [[lem-direct-sum-criterion]]).

[L8] $\mathbb{Q} \approx \mathbb{N}$ and $\mathbb{R}$ is uncountable; a nonempty at most countable set is the image of a surjection from $\mathbb{N}$, and the image of a surjection from $\mathbb{N}$ is at most countable ([[thm-rationals-countable]], [[thm-r-uncountable]], [[lem-countable-iff-surjection-from-n]], [[def-countable]]).

## Proof

**Proof technique:** direct.

1.1 $\mathbb{Q} = \{\hat q : q \in \mathbb{Q}\}$ is a subfield of $\mathbb{R}$: it contains $\hat 1 = 1$; it is closed under differences and products, since $\hat p - \hat q = \widehat{p-q}$ and $\hat p\,\hat q = \widehat{pq}$; and if $\hat q \ne 0$ then $q \ne 0$ and $\hat q^{-1} = \widehat{q^{-1}}$ lies in it. [L1]

2.1 $\mathbb{R}$ is a vector space over itself, so restricting the scalars to the subfield $\mathbb{Q}$ makes $\mathbb{R}$ a vector space over $\mathbb{Q}$, with the field addition as vector addition and the field multiplication restricted to $\mathbb{Q} \times \mathbb{R}$ as scalar multiplication. [step 1.1, L2]

3.1 Claim 1: assuming the Axiom of Choice, that vector space has a basis $B$, a linearly independent subset of $\mathbb{R}$ with $\operatorname{span}(B) = \mathbb{R}$. [step 2.1, A1, L4]

4.1 Claim 2: since $\operatorname{span}(B) = \mathbb{R}$ and the span of a set is already the set of linear combinations of injective finite lists into it, every real $x$ is $\sum_{i<n}\lambda_i b_i$ with $b : n \to B$ injective and $\lambda : n \to \mathbb{Q}$. [step 3.1, L5]

4.2 Claim 3: let $b : n \to B$ be injective and put $U := \operatorname{span}(b[n])$, a linear subspace of $\mathbb{R}$. The list $b$ is linearly independent, since $B$ is a linearly independent subset and $b$ is an injective finite list into $B$; its image $b[n]$ spans $U$ by construction, so $b[n]$ is a basis of $U$ and $b$ is an ordered basis of $U$, independence and spanning being the same conditions read in $U$ as in $\mathbb{R}$. [step 3.1, L3, L6]

4.3 Fix $b_{\star} \in B$ and put $U_{0} := \operatorname{span}\{b_{\star}\} = \{\, \lambda b_{\star} : \lambda \in \mathbb{Q} \,\}$ and $U_{1} := W_{b_{\star}} = \operatorname{span}(B \setminus \{b_{\star}\})$, both linear subspaces of $\mathbb{R}$. [step 3.1, L3, construct]

5.1 With $b$ and $U$ as in step 4.2, the coordinate theorem applied to the vector space $U$ says that every $x \in U$ is $\sum_{i<n}\lambda_i b_i$ for exactly one $\lambda : n \to \mathbb{Q}$; in particular $\sum_{i<n}\lambda_i b_i = \sum_{i<n}\mu_i b_i$ forces $\lambda = \mu$, which is claim 3. [step 4.2, L6]

5.2 $U_{0} + U_{1} = \mathbb{R}$. Indeed $U_{0} + U_{1} = \operatorname{span}(U_{0} \cup U_{1})$; the set $B$ is contained in $U_{0} \cup U_{1}$, since $b_{\star} \in U_{0}$ and $B \setminus \{b_{\star}\} \subseteq U_{1}$ by extensiveness of the span, so $\mathbb{R} = \operatorname{span}(B) \subseteq \operatorname{span}(U_{0} \cup U_{1})$ by monotonicity; and $U_{0} \cup U_{1} \subseteq \operatorname{span}(B)$, again by monotonicity, so $\operatorname{span}(U_{0} \cup U_{1}) \subseteq \operatorname{span}(\operatorname{span}(B)) = \operatorname{span}(B) = \mathbb{R}$ by idempotence. [step 3.1, step 4.3, L3, L7]

5.3 $b_{\star} \ne 0$ and $b_{\star} \notin U_{1}$. If $b_{\star}$ lay in $\operatorname{span}(B \setminus \{b_{\star}\})$ then $B$ would be linearly dependent, contrary to step 3.1; and $0 \in B$ would likewise make $B$ dependent, since $0 \in \operatorname{span}(B \setminus \{0\})$, every span containing the zero vector. [step 3.1, step 4.3, L5]

6.1 $U_{0} \cap U_{1} = \{0\}$. Let $z \in U_{0} \cap U_{1}$ and write $z = \lambda b_{\star}$ with $\lambda \in \mathbb{Q}$. If $\lambda \ne 0$ then $b_{\star} = \lambda^{-1}z \in U_{1}$, because $U_{1}$ is a linear subspace and $\lambda^{-1} \in \mathbb{Q}$, contradicting step 5.3; so $\lambda = 0$ and $z = 0$. [step 4.3, step 5.3, L3]

7.1 Hence $\mathbb{R} = U_{0} \oplus U_{1}$: condition (D1) is step 5.2, and condition (D2) is step 6.1, since for the two-member family the sum of the other summands is $U_{1}$ in the one case and $U_{0}$ in the other. By the direct-sum criterion every real $x$ is $u_{0} + u_{1}$ with $u_{0} \in U_{0}$ and $u_{1} \in U_{1}$ in exactly one way. [step 5.2, step 6.1, L7]

8.1 Writing $u_{0} = \lambda b_{\star}$, the scalar $\lambda \in \mathbb{Q}$ is determined by $u_{0}$, since $b_{\star} \ne 0$; so $\Lambda_{b_{\star}}(x) := \lambda$ is a well-defined map $\mathbb{R} \to \mathbb{Q}$, and $x = \Lambda_{b_{\star}}(x)\,b_{\star} + w$ with $w \in W_{b_{\star}}$ in exactly one way. [step 5.3, step 7.1, L3]

9.1 $\Lambda_{b_{\star}}$ is additive and $\mathbb{Q}$-homogeneous: if $x = \lambda b_{\star} + w$ and $y = \mu b_{\star} + w'$ with $w, w' \in W_{b_{\star}}$, then $x + y = (\lambda + \mu)b_{\star} + (w + w')$ with $w + w' \in W_{b_{\star}}$, and $qx = (q\lambda)b_{\star} + qw$ with $qw \in W_{b_{\star}}$ for $q \in \mathbb{Q}$, both because $W_{b_{\star}}$ is a linear subspace; uniqueness in step 8.1 then identifies the coefficients. [step 8.1, L3]

10.1 $\Lambda_{b_{\star}}(b_{\star}) = 1$, from the representation $b_{\star} = 1\cdot b_{\star} + 0$; the range of $\Lambda_{b_{\star}}$ is all of $\mathbb{Q}$, since $\Lambda_{b_{\star}}(q b_{\star}) = q$ for every $q \in \mathbb{Q}$; and $\Lambda_{b_{\star}}(x) = 0$ holds exactly when $x = 0\cdot b_{\star} + w = w \in W_{b_{\star}}$. Claim 4 is proved. [step 8.1, step 9.1]

11.1 Claim 5: if $W_{b_{\star}} = \{0\}$ then step 8.1 gives $\mathbb{R} = \{\lambda b_{\star} : \lambda \in \mathbb{Q}\}$. That set is the image of $\mathbb{Q}$ under $\lambda \mapsto \lambda b_{\star}$, and $\mathbb{Q}$ is the image of a surjection from $\mathbb{N}$, so composing gives a surjection from $\mathbb{N}$ onto $\mathbb{R}$ and $\mathbb{R}$ would be at most countable, contradicting its uncountability. So $W_{b_{\star}} \ne \{0\}$. [step 8.1, L8] ∎

## Remarks

- **How this differs from [[ex-hamel-basis-of-r-over-q]], exactly.** That item, homed on the examples page of *Linear independence, bases and dimension*, proves three things: that $\mathbb{R}$ is a vector space over the canonical copy of $\mathbb{Q}$, that it has a basis there, and that **every** such basis is infinite, together with the observation that the existence proof exhibits none. The present lemma proves the first two and does **not** prove the third: nothing above says that a Hamel basis is infinite. What it adds instead is claims 2 to 5 — the representation by injective lists, uniqueness of the coefficients along a list, the coefficient map $\Lambda_{b_{\star}}$ of a single basis vector with its kernel, and the fact that $W_{b_{\star}} \ne \{0\}$ — none of which appears there. So neither statement contains the other, and they are **not** the same statement.

The duplication of the two shared clauses is deliberate. An examples page is a leaf of this library and nothing outside it may depend on an item homed there, so a citable Hamel basis had to be built on a page that is not a leaf. The proofs of those clauses are the same proof, and no originality is claimed for them.

- **Where the choice is spent.** Once, in [[cor-every-vector-space-has-a-basis]], which runs through [[thm-zorn]]. Everything after step 3.1 is elementary linear algebra over an arbitrary field, applied to $\mathbb{R}$ over $\mathbb{Q}$. Nothing here exhibits a Hamel basis, and nothing here claims that none can be exhibited; that would be an assertion about definability, and this library has established nothing of the kind.

- **The coefficient map is the source of the pathology.** $\Lambda_{b_{\star}}$ is additive ([[def-additive-function]]) and takes only rational values, so it is not of the form $x \mapsto cx$; that is the whole of [[fs-additive-implies-linear]], and the companion page reads off from it a function unbounded on every interval, with dense graph and dense level sets.
````

### `lem-metrics-on-rn`

````markdown
---
id: lem-metrics-on-rn
kind: lemma
title: "$\\mathbb{R}^n$ as the set of functions $n \\to \\mathbb{R}$, and $d_1$, $d_2$, $d_\\infty$ are metrics on it"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-metric-space, def-natural-numbers, def-finite-sum, thm-minkowski-finite,
       thm-cauchy-schwarz-finite, lem-finite-set-has-max, thm-of-square-roots,
       lem-of-abs-value, lem-finite-sum-laws, def-max-min, lem-of-square-monotone,
       lem-of-square-positive, lem-of-triangle-inequality, def-abs-value,
       def-integer-power, def-ordered-field, def-complete-ordered-field,
       lem-of-add-order]
justified_by: []
aliases: [def-euclidean-space]
landmark: true
short: "$\\mathbb{R}^n$ with $d_1, d_2, d_\\infty$"
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
    - title: "Euclidean space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Euclidean_space"
    - title: "Taxicab geometry (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Taxicab_geometry"
    - title: "Lp space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lp_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 20: The Metric Topology (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-20.pdf"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$ with $n \ge 1$. A von Neumann natural is the set of its
predecessors, $n = \{0, 1, \dots, n-1\}$ ([[def-natural-numbers]]), so it can be
used directly as an index set. Define

$$\mathbb{R}^n := \{\, x : x \text{ is a function } n \to \mathbb{R} \,\},$$

and write $x_k$ for $x(k)$, $k < n$. Two elements of $\mathbb{R}^n$ are equal
exactly when they agree at every $k < n$, functions being equal when they have
the same values. For $x, y \in \mathbb{R}^n$ put

$$d_1(x,y) := \sum_{k<n} |x_k - y_k|, \qquad d_2(x,y) := \sqrt{\ \sum_{k<n} (x_k - y_k)^2\ }, \qquad d_\infty(x,y) := \max\{\, |x_k - y_k| : k < n \,\}.$$

All three are well defined: the finite sums are those of [[def-finite-sum]]; the
sum of squares is nonnegative ([[lem-finite-sum-laws]], [[lem-of-square-positive]])
so it has a unique nonnegative square root ([[thm-of-square-roots]]); and
$\{|x_k - y_k| : k < n\}$ is a nonempty finite subset of $\mathbb{R}$, because
$n \ge 1$, so it has a maximum ([[lem-finite-set-has-max]], [[def-max-min]]).

**Then $d_1$, $d_2$ and $d_\infty$ are metrics on $\mathbb{R}^n$**
([[def-metric-space]]).

**Why $n \ge 1$.** For $n = 0$ the set $\mathbb{R}^0$ has exactly one element,
the empty function, and $d_1$ and $d_2$ are the empty sum $0$ and its root; but
$d_\infty$ would be the maximum of the empty set, which does not exist. The
hypothesis $n \ge 1$ is therefore not decoration, and it is carried by every
statement about $d_\infty$ in this library.

## Facts & Assumptions

**Given:** A natural $n \ge 1$; elements $x, y, z \in \mathbb{R}^n$; and the lists $a_k := x_k - y_k$, $b_k := y_k - z_k$ for $k < n$, so that $a_k + b_k = x_k - z_k$. Write $A := \sum_{k<n} a_k^2$, $C := \sum_{k<n} b_k^2$ and $B := \sum_{k<n} a_k b_k$.

[L1] Laws of finite sums ([[lem-finite-sum-laws]], [[def-finite-sum]]): additivity, scaling, monotonicity; a sum of nonnegative terms is nonnegative, every single term is at most the sum, and a sum of nonnegative terms that vanishes has every term $0$.

[L2] Absolute value ([[lem-of-abs-value]], [[def-abs-value]]): $|u| \ge 0$; $|u| = 0$ if and only if $u = 0$; $|-u| = |u|$; and $u \le |u|$.

[L3] Two-term triangle inequality: $|u + v| \le |u| + |v|$ ([[lem-of-triangle-inequality]]).

[L4] Minkowski's inequality at the rational exponent $p = 1$ ([[thm-minkowski-finite]]): $\sum_{k<n}|a_k + b_k| \le \sum_{k<n}|a_k| + \sum_{k<n}|b_k|$.

[L5] Cauchy-Schwarz in root form ([[thm-cauchy-schwarz-finite]]): $\big|\sum_{k<n} a_k b_k\big| \le \sqrt{\sum_{k<n} a_k^2}\ \sqrt{\sum_{k<n} b_k^2}$.

[L6] Square roots ([[thm-of-square-roots]]): every $c \ge 0$ has a unique $\sqrt{c} \ge 0$ with $(\sqrt{c})^2 = c$; in particular $\sqrt{c} = 0$ if and only if $c = 0$.

[L7] Squares ([[lem-of-square-positive]], [[def-integer-power]]): $u^2 \ge 0$ always, and $u^2 = 0$ only for $u = 0$; and monotonicity of squaring on the nonnegatives, $s \le t \iff s^2 \le t^2$ for $s, t \ge 0$ ([[lem-of-square-monotone]]).

[L8] Maximum of a nonempty finite set of reals: it exists, it belongs to the set, and it is an upper bound of the set ([[lem-finite-set-has-max]], [[def-max-min]]).

[L9] Order arithmetic in $\mathbb{R}$: inequalities may be added and a constant added to both sides, in the strict form of [[lem-of-add-order]] and, together with the case of equality settled by totality ([[def-ordered-field]], [[def-complete-ordered-field]]), in the nonstrict form used below.

## Proof

**Proof technique:** direct.

1.1 Separation for $d_1$: $d_1(x,y) = \sum_{k<n}|a_k|$ is a sum of nonnegative terms, so it vanishes exactly when every $|a_k|$ vanishes, that is exactly when $x_k = y_k$ for all $k < n$, that is exactly when $x = y$. [L1, L2]

1.2 Separation for $d_2$: $d_2(x,y) = \sqrt{A}$ vanishes exactly when $A = 0$; $A$ is a sum of nonnegative terms, so $A = 0$ exactly when $a_k^2 = 0$ for every $k < n$, which happens exactly when every $a_k = 0$, that is exactly when $x = y$. [L1, L6, L7]

1.3 Separation for $d_\infty$: the maximum $d_\infty(x,y)$ belongs to $\{|a_k| : k < n\}$ and bounds it above, so it is $0$ exactly when every $|a_k| = 0$, that is exactly when $x = y$. [L2, L8]

1.4 Symmetry for all three: $|y_k - x_k| = |-(x_k - y_k)| = |x_k - y_k|$ and $(y_k - x_k)^2 = (x_k - y_k)^2$ for every $k < n$, so the three defining expressions are unchanged when $x$ and $y$ are exchanged. [L2, L7]

1.5 Triangle inequality for $d_1$: applying [L4] to the lists $(a_k)$ and $(b_k)$ gives $d_1(x,z) = \sum_{k<n}|a_k + b_k| \le \sum_{k<n}|a_k| + \sum_{k<n}|b_k| = d_1(x,y) + d_1(y,z)$. [L4]

1.6 Expanding with additivity and scaling: $\sum_{k<n}(a_k + b_k)^2 = \sum_{k<n}\big(a_k^2 + 2a_kb_k + b_k^2\big) = A + 2B + C$. [L1, algebra]

1.7 By [L5] and $B \le |B|$: $B \le \sqrt{A}\,\sqrt{C}$, and $A = (\sqrt{A})^2$, $C = (\sqrt{C})^2$ with $\sqrt{A}, \sqrt{C} \ge 0$. [L2, L5, L6]

1.8 Triangle inequality for $d_\infty$: for each $k < n$, $|a_k + b_k| \le |a_k| + |b_k| \le d_\infty(x,y) + d_\infty(y,z)$ because the two maxima bound their sets; so $d_\infty(x,y) + d_\infty(y,z)$ is an upper bound of $\{|a_k + b_k| : k < n\}$, and the maximum $d_\infty(x,z)$ of that set is one of its elements, whence $d_\infty(x,z) \le d_\infty(x,y) + d_\infty(y,z)$. [L3, L8, L9]

2.1 Combining steps 1.6 and 1.7: $\sum_{k<n}(a_k+b_k)^2 = A + 2B + C \le (\sqrt{A})^2 + 2\sqrt{A}\sqrt{C} + (\sqrt{C})^2 = \big(\sqrt{A} + \sqrt{C}\big)^2$. [step 1.6, step 1.7, L9, algebra]

3.1 Both $d_2(x,z) = \sqrt{\sum_{k<n}(a_k+b_k)^2}$ and $\sqrt{A} + \sqrt{C}$ are nonnegative, and by step 2.1 the square of the first is at most the square of the second, so monotonicity of squaring on the nonnegatives gives $d_2(x,z) \le \sqrt{A} + \sqrt{C} = d_2(x,y) + d_2(y,z)$. [step 2.1, L6, L7]

4.1 Each of $d_1$, $d_2$, $d_\infty$ satisfies (M1) by steps 1.1, 1.2 and 1.3, satisfies (M2) by step 1.4, and satisfies (M3) by steps 1.5, 3.1 and 1.8 respectively; hence all three are metrics on $\mathbb{R}^n$. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, step 1.8, step 3.1] ∎

## Remarks

- **$\mathbb{R}^n$ is defined ZFC-natively here**, as the set of functions from
  the von Neumann natural $n$ to $\mathbb{R}$, precisely so that its coordinates
  are indexed by $k < n$ and the finite-sum machinery of [[def-finite-sum]],
  [[thm-minkowski-finite]] and [[thm-cauchy-schwarz-finite]], all of which sum
  over $k < n$, applies without any reindexing.
- **No rational power appears anywhere above.** The triangle inequality for
  $d_2$ is obtained from Cauchy-Schwarz and the existence of square roots, not
  from Minkowski at $p = 2$, so this lemma does not depend on the theory of
  rational exponents. Minkowski is used only at $p = 1$, where its statement is
  the termwise sum of the two-term triangle inequality.
- **The three metrics are Lipschitz equivalent, with explicit constants,** and
  in particular have the same topology; that computation is on the companion
  page and is not needed here.
````

### `lem-q-and-irrationals-dense-r`

````markdown
---
id: lem-q-and-irrationals-dense-r
kind: lemma
title: "Both $\\mathbb{Q}$ and $\\mathbb{R} \\setminus \\mathbb{Q}$ are dense in $\\mathbb{R}$, and every nonempty open subset of $\\mathbb{R}$ is uncountable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-rat-embeds-dense, def-limit-point-r, def-open-and-closed-in-r, def-interval, def-neighbourhood-r, thm-closure-characterisations-r, cor-interval-uncountable, lem-subset-of-countable, def-countable, thm-rationals-countable, def-equinumerous, def-injection-surjection-bijection]
justified_by: []
forward_refs: [ex-closure-interior-boundary-of-q]
aliases: []
landmark: false
short: "$\\mathbb{Q}$ and its complement are dense"
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
    - title: "Dense set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dense_set"
    - title: "Countable set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countable_set"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 and Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §1.2"
      url: "https://www.jirka.org/ra/"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Write $\mathbb{Q}_{\mathbb{R}}$ for the image of $\mathbb{Q}$ in $\mathbb{R}$
under the canonical embedding $q \mapsto \hat q$ ([[lem-rat-embeds-dense]]), the
set usually written $\mathbb{Q}$ once the identification is made, and put
$X := \mathbb{R} \setminus \mathbb{Q}_{\mathbb{R}}$ for the irrationals. Then:

1. $\mathbb{Q}_{\mathbb{R}}$ is dense in $\mathbb{R}$, that is,
   $\overline{\mathbb{Q}_{\mathbb{R}}} = \mathbb{R}$ ([[def-limit-point-r]]);
2. $X$ is dense in $\mathbb{R}$;
3. every nonempty open subset of $\mathbb{R}$ is uncountable
   ([[def-countable]]).

Claim 2 is not a symmetry of claim 1: the rationals are dense because they are
*constructed* to approximate, whereas the irrationals are dense because there are
too many points in any interval for a countable set to exhaust it, which is why
claim 3 is proved alongside and used for it.

## Facts & Assumptions

**Given:** The canonical embedding $q \mapsto \hat q$ of $\mathbb{Q}$ into $\mathbb{R}$, its image $\mathbb{Q}_{\mathbb{R}}$, and the complement $X = \mathbb{R} \setminus \mathbb{Q}_{\mathbb{R}}$.

[L1] $\overline{A}$ is the set of points every neighbourhood of which meets $A$; $A$ is dense in $\mathbb{R}$ when $\overline{A} = \mathbb{R}$ ([[thm-closure-characterisations-r]], [[def-limit-point-r]]).

[L2] $N_\varepsilon(x) = (x - \varepsilon, x + \varepsilon)$ for real $\varepsilon > 0$, and $x - \varepsilon < x + \varepsilon$ ([[def-neighbourhood-r]], [[def-interval]]).

[L3] $U$ is open when every $x \in U$ admits $\varepsilon > 0$ with $N_\varepsilon(x) \subseteq U$ ([[def-open-and-closed-in-r]]).

[L4] Strictly between any two reals lies an element of $\mathbb{Q}_{\mathbb{R}}$, and $q \mapsto \hat q$ is injective ([[lem-rat-embeds-dense]]).

[L5] $\mathbb{Q} \approx \mathbb{N}$ ([[thm-rationals-countable]]); an injection is a bijection onto its image, and $\approx$ is symmetric and transitive ([[def-injection-surjection-bijection]], [[def-equinumerous]]).

[L6] Every subset of an at most countable set is at most countable, and uncountable means not at most countable ([[lem-subset-of-countable]], [[def-countable]]).

[L7] For $a < b$ the interval $(a,b)$ is uncountable ([[cor-interval-uncountable]]).

## Proof

**Proof technique:** direct.

1.1 $\mathbb{Q}_{\mathbb{R}}$ is dense: let $x \in \mathbb{R}$ and let $\varepsilon > 0$ be real; by [L2] one has $x - \varepsilon < x + \varepsilon$, so [L4] supplies $\hat q$ with $x - \varepsilon < \hat q < x + \varepsilon$, that is $\hat q \in N_\varepsilon(x) \cap \mathbb{Q}_{\mathbb{R}}$. Every real is therefore an adherent point of $\mathbb{Q}_{\mathbb{R}}$ and claim 1 follows from [L1]. [L1, L2, L4]

1.2 $\mathbb{Q}_{\mathbb{R}}$ is at most countable: the embedding is an injection of $\mathbb{Q}$ with image $\mathbb{Q}_{\mathbb{R}}$, hence a bijection onto it, so $\mathbb{Q}_{\mathbb{R}} \approx \mathbb{Q} \approx \mathbb{N}$. [L4, L5]

1.3 For all reals $a < b$ the interval $(a,b)$ is uncountable. [L7]

2.1 For all reals $a < b$ the interval $(a,b)$ contains an irrational: if it did not, then $(a,b) \subseteq \mathbb{Q}_{\mathbb{R}}$, so $(a,b)$ would be a subset of an at most countable set by step 1.2 and hence at most countable by [L6], contradicting step 1.3. So some $z \in (a,b)$ lies in $X$. [step 1.2, step 1.3, L6]

2.2 Every nonempty open $U \subseteq \mathbb{R}$ is uncountable: fix $x \in U$ and, by [L3], a real $\varepsilon > 0$ with $N_\varepsilon(x) \subseteq U$; by [L2] the set $N_\varepsilon(x)$ is the interval $(x - \varepsilon, x + \varepsilon)$ with $x - \varepsilon < x + \varepsilon$, hence uncountable by step 1.3. Were $U$ at most countable, its subset $N_\varepsilon(x)$ would be at most countable by [L6], which it is not; so $U$ is uncountable, which is claim 3. [step 1.3, L2, L3, L6, choose]

3.1 $X$ is dense: let $x \in \mathbb{R}$ and let $\varepsilon > 0$ be real; applying step 2.1 with $a = x - \varepsilon$ and $b = x + \varepsilon$ gives $z \in (x - \varepsilon, x + \varepsilon) \cap X$, which is $N_\varepsilon(x) \cap X$ by [L2]. Every real is therefore an adherent point of $X$, so $\overline{X} = \mathbb{R}$ by [L1], which is claim 2. [step 2.1, L1, L2]

4.1 Claims 1, 2 and 3 are steps 1.1, 3.1 and 2.2, so both $\mathbb{Q}_{\mathbb{R}}$ and its complement are dense in $\mathbb{R}$ and every nonempty open subset of $\mathbb{R}$ is uncountable. [step 1.1, step 2.2, step 3.1] ∎

## Remarks

- **Two dense sets can be disjoint.** $\mathbb{Q}_{\mathbb{R}}$ and $X$ partition
  $\mathbb{R}$ and both are dense, so density says nothing about size: one of
  them is countable and the other is not
  ([[cor-irrationals-uncountable]]). What density does say is that neither has
  interior: a set whose complement is dense has empty interior, which is the
  computation carried out for $\mathbb{Q}$ in
  [[ex-closure-interior-boundary-of-q]].

- **Claim 3 is a statement about open sets, not about intervals.** It follows
  from the uncountability of intervals ([[cor-interval-uncountable]]) only
  because openness supplies an interval inside the set at each of its points.
  A nonempty set with empty interior can perfectly well be countable, as
  $\mathbb{Q}_{\mathbb{R}}$ shows.

- **An explicit irrational is not produced here.** Step 2.1 is a counting
  argument and exhibits nothing. The library does exhibit one separately,
  $\sqrt 2$ ([[thm-of-square-roots]], [[fs-sqrt2-rational]]), and an explicit
  irrational in a given interval $(a,b)$ can be built from it as
  $q_1 + (q_2 - q_1)/\sqrt 2$ for suitable rationals $q_1 < q_2$ in the
  interval; that route is longer and is not the one taken above.
````

### `lem-rat-embeds-dense`

````markdown
---
id: lem-rat-embeds-dense
kind: lemma
title: "The rationals embed densely in the reals"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-real-numbers, def-real-order, thm-reals-ordered-field, thm-reals-field, def-rational-cauchy-sequence, thm-rat-ordered-field, thm-rat-field]
aliases: []
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
    - title: "T. Tao, Analysis I, 3rd ed., §5.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Dense set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dense_set"
pipeline_run: null
---

## Statement

The map $q \mapsto \hat q$ ([[def-real-numbers]]) is an embedding of ordered
fields. Every real is approximated by rationals: for $x \in \mathbb{R}$ and
rational $\varepsilon > 0$ there is $q \in \mathbb{Q}$ with
$|x - \hat q| < \hat\varepsilon$. Consequently, strictly between any two
reals lies a rational.

## Facts & Assumptions

**Given:** A real $x = [(a_n)]$ and a rational $\varepsilon > 0$.

[L1] The orders of $\mathbb{Q}$ and $\mathbb{R}$; ordered-field arithmetic ([[thm-rat-ordered-field]], [[thm-reals-ordered-field]]).

[L2] Field arithmetic in $\mathbb{Q}$: $\varepsilon/2, \delta/4$ are positive rationals, and every nonzero rational $q$ has a reciprocal $1/q$ with $q \cdot (1/q) = 1$ ([[thm-rat-field]]).

[L3] Cauchy definition ([[def-rational-cauchy-sequence]]).

[L4] Real positivity via eventual rational lower bounds ([[def-real-order]]).

[L5] $\mathbb{R} = \mathcal{C}/\mathcal{N}$ is a field ([[thm-reals-field]]), and $0_{\mathbb{R}} = \hat 0$, $1_{\mathbb{R}} = \hat 1$ are the classes of the constant sequences ([[def-real-numbers]]). A multiplicative inverse there is unique: if $ab = 1_{\mathbb{R}} = ac$ then $b = b(ac) = (ba)c = c$.

## Proof

**Proof technique:** direct.

1.1 Embedding: constant sequences are Cauchy; $\hat q = \hat r$ iff the constant $q - r$ is null iff $q = r$; operations match termwise; and $q < r$ gives the constant lower bound $r - q > 0$, so $\hat q < \hat r$ and order is preserved and reflected. [L1, L4]

1.2 Fix $N$ with $|a_m - a_n| < \varepsilon/2$ for all $m, n \ge N$, and set $q = a_N$. [L3, L2]

2.1 The difference $\hat q - x$ has representative $(a_N - a_n)$ with $|a_N - a_n| < \varepsilon/2$ for $n \ge N$; hence both $\hat\varepsilon - (x - \hat q)$ and $\hat\varepsilon - (\hat q - x)$ have representatives eventually $> \varepsilon/2$, so both are positive: $|x - \hat q| < \hat\varepsilon$. [step 1.2, L4, L1]

2.2 Inverses: let $q$ be a nonzero rational. Then $\hat q \ne \hat 0 = 0_{\mathbb{R}}$ by the injectivity of step 1.1, and $1/q$ exists in $\mathbb{Q}$ by [L2]; since the operations match termwise (step 1.1), $\hat q \cdot \widehat{1/q} = \widehat{q \cdot (1/q)} = \hat 1 = 1_{\mathbb{R}}$. Inverses in $\mathbb{R}$ are unique by [L5], so $(\hat q)^{-1} = \widehat{1/q}$: the embedding preserves reciprocals. [step 1.1, L2, L5]

3.1 Density: let $x < y$; pick $\delta > 0$ rational and $N$ with the representative of $y - x$ eventually $> \delta$; set $\varepsilon = \delta/4$ and pick $q$ with $|x - \hat q| < \hat\varepsilon$; then $q' = q + 2\varepsilon$ satisfies $\hat q' - x \ge -\hat\varepsilon + 2\hat\varepsilon = \hat\varepsilon > 0$ and $y - \hat q' \ge \hat\delta - \hat\varepsilon - 2\hat\varepsilon = \hat\delta/4 > 0$, so $x < \hat q' < y$. [step 2.1, L4, L1, L2]

4.1 The rationals embed as an ordered subfield — injectively, preserving the order in both directions, the ring operations, and reciprocals — and they approximate every real arbitrarily well and separate any two reals. [step 1.1, step 2.2, step 3.1] ∎
````

### `lem-restriction-of-scalars`

````markdown
---
id: lem-restriction-of-scalars
kind: lemma
title: "A field is a vector space over itself, and over any subfield $K \\subseteq F$ every $F$-vector space is a $K$-vector space by restricting the scalars"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-vector-space, def-subfield, def-field]
justified_by: []
aliases: [lem-field-is-a-vector-space-over-itself]
landmark: false
short: "restriction of scalars"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-28
    scope: page
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Restriction of scalars (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Restriction_of_scalars"
    - title: "Vector space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Vector_space"
pipeline_run: null
---

## Statement

Let $F$ be a field ([[def-field]]).

1. $F$ is a vector space over itself ([[def-vector-space]]): take the set to be
   $F$, the vector addition to be the field addition, the zero vector to be
   $0_F$, and the scalar multiplication $F \times F \to F$ to be the field
   multiplication.
2. Let $K \subseteq F$ be a subfield ([[def-subfield]]) and let $V$ be a vector
   space over $F$. Then $V$, with the same addition and the same zero vector and
   with the scalar multiplication restricted to $K \times V$, is a vector space
   over $K$. This is called **restricting the scalars** from $F$ to $K$.
3. In particular $F$ is a vector space over every subfield $K \subseteq F$, with
   the field multiplication restricted to $K \times F$ as scalar multiplication.

## Facts & Assumptions

**Given:** A field $F$, a subfield $K \subseteq F$, and a vector space $V$ over $F$.

[L1] The vector space axioms (V1)–(V5) ([[def-vector-space]]): $(V,+,0_V)$ is an abelian group; $\lambda(u+v) = \lambda u + \lambda v$; $(\lambda+\mu)v = \lambda v + \mu v$; $(\lambda\mu)v = \lambda(\mu v)$; $1_F v = v$.

[L2] The field axioms of [[def-field]], read as they are read throughout this library: $(F,+,0_F)$ is an abelian group; multiplication on $F$ is associative and commutative with two-sided identity $1_F$; multiplication distributes over addition, so that $x(y+z) = xy+xz$ and $(y+z)x = yx+zx$; and every $x \ne 0_F$ has a multiplicative inverse.

[L3] A subfield $K$ of $F$ is a subring of $F$ closed under inverses of its nonzero elements; equivalently, a subset containing $1_F$ with $a - b \in K$ and $ab \in K$ for all $a, b \in K$ and $x^{-1} \in K$ for every nonzero $x \in K$. With the restricted operations $K$ is itself a field, its addition and multiplication being the restrictions of those of $F$, and $0_K = 0_F$, $1_K = 1_F$, with the negatives and the inverses of $K$ those of $F$ ([[def-subfield]]).

## Proof

**Proof technique:** direct.

1.1 Put $V_F := F$ as a set, let the vector addition be the field addition with zero vector $0_F$, and let the scalar multiplication be the field multiplication, which is a map $F \times F \to F$ as required. [L2]

1.2 Axiom (V1) holds for $V_F$: axiom (A) of a field says exactly that $(F,+,0_F)$ is an abelian group. [L2]

1.3 Axiom (V2) holds for $V_F$: $\lambda(u+v) = \lambda u + \lambda v$ is distributivity of multiplication over addition. [L2]

1.4 Axiom (V3) holds for $V_F$: $(\lambda+\mu)v = \lambda v + \mu v$ is distributivity on the other side. [L2]

1.5 Axiom (V4) holds for $V_F$: $(\lambda\mu)v = \lambda(\mu v)$ is associativity of the field multiplication. [L2]

1.6 Axiom (V5) holds for $V_F$: $1_F v = v$ is the multiplicative identity law. [L2]

1.7 For claim 2: since $K \subseteq F$, restricting the scalar multiplication of $V$ to the subset $K \times V$ of $F \times V$ yields a map $K \times V \to V$, which is the required datum. [L3]

1.8 The set $V$, its addition and its zero vector are unchanged by the restriction, so $(V,+,0_V)$ is still an abelian group; this is axiom (V1) for the $K$-structure. [L1]

1.9 For $\lambda, \mu \in K$ the sum $\lambda + \mu$ and the product $\lambda\mu$ formed in $K$ are the sum and the product formed in $F$, and the multiplicative identity of $K$ is $1_F$. [L3]

2.1 Steps 1.1 to 1.6 verify (V1)–(V5), so $F$ with the operations of step 1.1 is a vector space over itself: claim 1. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, step 1.6, L1]

2.2 Let $\lambda, \mu \in K$ and $u, v \in V$. Then $\lambda(u+v) = \lambda u + \lambda v$ and $(\lambda\mu)v = \lambda(\mu v)$ are the instances of (V2) and (V4) for these elements of $F$, the product $\lambda\mu$ being the same whether formed in $K$ or in $F$; $(\lambda+\mu)v = \lambda v + \mu v$ is the instance of (V3), the sum $\lambda+\mu$ being likewise the same; and the identity of $K$ is $1_F$, so $1_K v = 1_F v = v$ is the instance of (V5). [step 1.7, step 1.9, L1, L3]

3.1 With step 1.8, the restricted structure satisfies (V1)–(V5) over $K$, so $V$ is a vector space over $K$: claim 2. [step 1.8, step 2.2, L1]

4.1 Claim 3 follows by applying claim 2 to the $F$-vector space of claim 1: $F$ is a vector space over $K$, its scalar multiplication being the field multiplication restricted to $K \times F$. [step 2.1, step 3.1] ∎

## Remarks

- **On the field facts in [L2].** Axiom (M) of [[def-field]] asserts that multiplication is associative and commutative on all of $F$ with $x \cdot 1_F = x$ for every $x \in F$, the element $0_F$ included, and right distributivity then follows from axiom (D) by commuting, as [[lem-of-zero-mult]] already records. These unrestricted forms are spent in exactly three of the steps above, where axioms (V3), (V4) and (V5) are read off for arbitrary scalars including $0_F$: step 1.4 needs distributivity on the right; step 1.5 needs associativity of the multiplication at $0_F$ as well; and step 1.6 needs $1_F x = x$ rather than the literal $x \cdot 1_F = x$, which commutativity supplies, and needs it at $x = 0_F$ too. They are used nowhere else: step 1.2 is axiom (A) verbatim, step 1.3 is axiom (D) verbatim, and steps 1.7 to 4.1 use only the vector-space axioms of $V$ and the subfield facts of [L3].

- **Restricting the scalars changes the structure, not the set.** The vectors, the addition and the zero are untouched; only the collection of scalars allowed to act shrinks. Everything that can be said about $V$ as a $K$-vector space is therefore a statement about the same object with fewer operations available, and every $F$-linear subspace of $V$ is in particular a $K$-linear subspace ([[def-linear-subspace]]). The converse fails, and that is the point of the construction.

- **The field is part of the data.** Because of this lemma, a bare phrase like "the vector space $V$" is incomplete: $\mathbb{R}$ is a vector space over $\mathbb{R}$ and also over the embedded copy of $\mathbb{Q}$ inside it, and these are different structures on one set. Every statement on this page names its field.

- **Nothing here is about dimension.** How much smaller $K$ is than $F$, and what that does to $V$, is a question about bases and dimension, which are developed on a later page. This lemma asserts only that the restricted structure satisfies the five axioms.
````

### `thm-cauchy-functional-equation-regularity`

````markdown
---
id: thm-cauchy-functional-equation-regularity
kind: theorem
title: "Six regularity conditions each force an additive $f : \\mathbb{R} \\to \\mathbb{R}$ to be $x \\mapsto f(1)x$: continuity at a single point, monotonicity on a nondegenerate interval, boundedness above on one, boundedness below on one, constancy of sign on one, and a graph that is not dense in $\\mathbb{R}^{2}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
  evidence: semantic-source
deps: [def-additive-function, lem-additive-is-q-linear, lem-additive-bounded-above-on-an-interval-is-linear, def-monotone-function, def-continuity-real, def-interval, def-bounded-set, lem-metrics-on-rn, def-metric-space, def-metric-ball, def-metric-interior-closure-boundary, thm-metric-closure-characterisation, lem-rat-embeds-dense, cor-archimedean-reciprocal, lem-of-abs-value, def-complete-ordered-field, def-neighbourhood-r]
justified_by: []
aliases: [thm-cauchy-equation-regularity]
landmark: true
short: "regularity forces linearity"
proof_strategy: cases
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
    - title: "Cauchy's functional equation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy%27s_functional_equation"
    - title: "Hamel basis (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Basis_(linear_algebra)"
    - title: "Additive operators approximately preserving Birkhoff-James orthogonality (Aequationes mathematicae)"
      url: "https://link.springer.com/article/10.1007/s00010-025-01210-4"
pipeline_run: null
---

## Statement

Let $f : \mathbb{R} \to \mathbb{R}$ be additive ([[def-additive-function]]) and
put $c := f(1)$. Write $\mathbb{R}^{2}$ for the set of functions
$2 \to \mathbb{R}$ with the metric
$d_\infty\bigl((a,b),(a',b')\bigr) = \max\{|a-a'|,\ |b-b'|\}$
([[lem-metrics-on-rn]], [[def-metric-space]]), and let

$$\Gamma \;:=\; \{\, (x, f(x)) \;:\; x \in \mathbb{R} \,\} \;\subseteq\; \mathbb{R}^{2}$$

be the graph of $f$. If **any one** of the following six conditions holds, then
$f(x) = c\,x$ for every real $x$.

1. $f$ is continuous at some single point of $\mathbb{R}$
   ([[def-continuity-real]]).
2. $f$ is monotone on some nondegenerate interval
   ([[def-monotone-function]], [[def-interval]]).
3. $f$ is bounded above on some nondegenerate interval ([[def-bounded-set]]).
4. $f$ is bounded below on some nondegenerate interval.
5. $f$ has constant sign on some nondegenerate interval $I$: either $f(z) \ge 0$
   for every $z \in I$, or $f(z) \le 0$ for every $z \in I$.
6. $\Gamma$ is **not** dense in $\mathbb{R}^{2}$
   ([[def-metric-interior-closure-boundary]]).

**Conditions 3, 4 and 5 are not independent, and the proof does not pretend they
are.** Condition 5 is the special case of 3 or of 4 with the bound $0$, and
condition 4 is condition 3 applied to $-f$; they are listed separately only
because each is the form in which the hypothesis usually arises. Condition 1 and
condition 2 are each reduced to condition 3 in one line. Condition 6 is the only
one that is not, and it is proved in the contrapositive: if $f$ is not of the
form $x \mapsto cx$, then $\Gamma$ is dense.

**Two classical clauses are absent.** *Boundedness on a set of positive measure*
and *Lebesgue measurability* also force linearity, and neither is stated here:
both require a measure, and this library develops none as it stands. Each is an
independent sufficient condition, so restoring them would change nothing else on
this page.

## Facts & Assumptions

**Given:** An additive $f : \mathbb{R} \to \mathbb{R}$ with $c := f(1)$, and its graph $\Gamma = \{(x,f(x)) : x \in \mathbb{R}\}$.

[A1] $f(x+y) = f(x)+f(y)$ for all reals $x, y$ ([[def-additive-function]]).

[L1] An additive $f$ satisfies $f(0)=0$, $f(-x) = -f(x)$ and $f(qx) = qf(x)$ for every rational $q$ and every real $x$ ([[lem-additive-is-q-linear]]).

[L2] If an additive $g$ is bounded above on some $[p,r]$ with $p < r$, then $g(x) = g(1)x$ for every real $x$ ([[lem-additive-bounded-above-on-an-interval-is-linear]]).

[L3] A nondegenerate interval contains a closed $[p,r]$ with $p < r$, by order-convexity ([[def-interval]]).

[L4] $f$ continuous at $c_{0}$ means: for every real $\varepsilon > 0$ there is a real $\delta > 0$ with $|f(x) - f(c_{0})| < \varepsilon$ whenever $|x - c_{0}| < \delta$; and $|u| < \varepsilon$ gives $u < \varepsilon$ ([[def-continuity-real]], [[def-neighbourhood-r]], [[lem-of-abs-value]]).

[L5] $f$ nondecreasing on $I$ means $f(x) \le f(y)$ for $x \le y$ in $I$, and nonincreasing means $f(x) \ge f(y)$; monotone means one of the two ([[def-monotone-function]]).

[L6] $d_\infty$ is a metric on $\mathbb{R}^{2}$ and its open ball of centre $(a,b)$ and radius $\varepsilon$ is $\{(u,v) : |u-a| < \varepsilon \text{ and } |v-b| < \varepsilon\}$; a subset $S$ of a metric space is dense exactly when every open ball meets $S$ ([[lem-metrics-on-rn]], [[def-metric-ball]], [[def-metric-interior-closure-boundary]], [[thm-metric-closure-characterisation]]).

[L7] Strictly between any two distinct reals there lies a rational; $\mathbb{R}$ is a field, so a nonzero real is invertible ([[lem-rat-embeds-dense]], [[def-complete-ordered-field]], [[cor-archimedean-reciprocal]]).

## Proof

**Proof technique:** cases.

1.1 Assume at least one of the six conditions holds. The six steps below treat the six conditions in turn and are exhaustive for that assumption; in each the conclusion reached is $f(x) = cx$ for every real $x$. [construct]

2.1 **Condition 3.** If $f$ is bounded above on a nondegenerate interval, that interval contains a closed $[p,r]$ with $p < r$ on which $f$ is bounded above, and the boundedness lemma gives $f(x) = f(1)x = cx$ for every real $x$. [step 1.1, L2, L3, assume-case above]

2.2 **Condition 6, in the contrapositive: if $f$ is not $x \mapsto cx$ then $\Gamma$ is dense in $\mathbb{R}^{2}$.** Suppose $f(x_{2}) \ne c\,x_{2}$ for some real $x_{2}$. Then $x_{2} \ne 0$, since $f(0) = 0$. Put $x_{1} := 1$, $v_{1} := (x_{1}, f(x_{1})) = (1, c)$ and $v_{2} := (x_{2}, f(x_{2}))$, and put $\Delta := x_{1}f(x_{2}) - x_{2}f(x_{1}) = f(x_{2}) - c\,x_{2}$, which is nonzero by assumption. [step 1.1, L1, assume-case graph]

3.1 **Condition 4.** If $f$ is bounded below on a nondegenerate interval $I$, say $f(z) \ge m$ for $z \in I$, then $-f$ is additive and satisfies $-f(z) \le -m$ on $I$, so $-f$ is bounded above on $I$; by step 2.1 applied to $-f$ we get $-f(x) = (-f)(1)\,x = -cx$, hence $f(x) = cx$. [step 2.1, A1, assume-case below]

3.2 **Condition 2.** Let $f$ be monotone on a nondegenerate interval, which contains $[p,r]$ with $p < r$. If $f$ is nondecreasing there then $f(z) \le f(r)$ for every $z \in [p,r]$, and if $f$ is nonincreasing there then $f(z) \le f(p)$; either way $f$ is bounded above on $[p,r]$ and step 2.1 applies. [step 2.1, L3, L5, assume-case mono]

3.3 **Condition 1.** Let $f$ be continuous at a point $c_{0}$. Taking $\varepsilon := 1$ gives a real $\delta > 0$ with $|f(x) - f(c_{0})| < 1$, hence $f(x) < f(c_{0}) + 1$, for every $x$ with $|x - c_{0}| < \delta$. The set of such $x$ is the nondegenerate interval $(c_{0}-\delta,\ c_{0}+\delta)$, so $f$ is bounded above on a nondegenerate interval and step 2.1 applies. [step 2.1, L3, L4, assume-case cont]

3.4 Let $(a,b) \in \mathbb{R}^{2}$ and let $\varepsilon > 0$ be real. Put $\alpha := (a\,f(x_{2}) - b\,x_{2})/\Delta$ and $\beta := (b\,x_{1} - a\,f(x_{1}))/\Delta$. Then $\alpha x_{1} + \beta x_{2} = a$ and $\alpha f(x_{1}) + \beta f(x_{2}) = b$, as multiplying out and cancelling $\Delta$ shows in each case. [step 2.2, L7]

4.1 **Condition 5.** If $f(z) \ge 0$ for every $z$ in a nondegenerate interval $I$ then $f$ is bounded below on $I$ by $0$ and step 3.1 applies; if $f(z) \le 0$ for every $z \in I$ then $f$ is bounded above on $I$ by $0$ and step 2.1 applies. So sign-constancy is a special case of the two preceding conditions and needs no separate argument. [step 2.1, step 3.1, assume-case sign]

4.2 Choose rationals $q_{1}, q_{2}$ with $|q_{1} - \alpha| < \eta$ and $|q_{2} - \beta| < \eta$, where $\eta > 0$ is a real chosen with $\eta\,(|x_{1}| + |x_{2}|) < \varepsilon$ and $\eta\,(|f(x_{1})| + |f(x_{2})|) < \varepsilon$; such rationals exist because a rational lies strictly between any two distinct reals, and such an $\eta$ exists because for a real $K \ge 0$ the inequality $\eta K < \varepsilon$ holds for all small enough $\eta > 0$. [step 3.4, L7]

5.1 Put $x := q_{1}x_{1} + q_{2}x_{2}$. Then $f(x) = q_{1}f(x_{1}) + q_{2}f(x_{2})$ by additivity and rational homogeneity, so $(x, f(x)) \in \Gamma$. Moreover $|x - a| = |(q_{1}-\alpha)x_{1} + (q_{2}-\beta)x_{2}| \le \eta(|x_{1}| + |x_{2}|) < \varepsilon$ and likewise $|f(x) - b| \le \eta(|f(x_{1})| + |f(x_{2})|) < \varepsilon$. [step 3.4, step 4.2, A1, L1, L7]

6.1 So every open ball of $\mathbb{R}^{2}$ meets $\Gamma$, that is, $\Gamma$ is dense in $\mathbb{R}^{2}$. Reading this contrapositively: if $\Gamma$ is not dense in $\mathbb{R}^{2}$ then $f(x) = cx$ for every real $x$, which is condition 6. [step 2.2, step 5.1, L6]

7.1 Each of the six conditions has now been shown to force $f(x) = cx$ for every real $x$: condition 1 at step 3.3, condition 2 at step 3.2, condition 3 at step 2.1, condition 4 at step 3.1, condition 5 at step 4.1 and condition 6 at step 6.1. [step 2.1, step 3.1, step 4.1, step 3.2, step 3.3, step 6.1, cases-exhaustive] ∎

## Remarks

- **Every clause reduces to one lemma.** The engine is
  [[lem-additive-bounded-above-on-an-interval-is-linear]]; five of the six
  conditions are shown to imply its hypothesis, and the sixth is proved
  separately because a non-dense graph gives no bound on $f$ anywhere. The
  economy is deliberate: proving each clause from scratch would repeat the same
  translation-and-scaling argument five times.

- **The list is not a list of equivalent conditions.** Each of the six implies
  linearity, and linearity implies all six, so over the additive functions they
  are indeed equivalent; but the theorem as stated is six implications in one
  direction, and that is what the proof establishes.

- **None of the six is dispensable in the sense that additivity alone suffices.**
  There is an additive $f$ satisfying none of them
  ([[fs-additive-implies-linear]]), and by the theorem it is unbounded above and
  below on every nondegenerate interval, monotone on none, continuous at no
  point, of constant sign on no nondegenerate interval, and has dense graph. The
  construction costs the Axiom of Choice, and the companion page records what it
  looks like.
````

### `thm-metric-closure-characterisation`

````markdown
---
id: thm-metric-closure-characterisation
kind: theorem
title: "The closure of a nonempty $A$ is $\\{x : d(x,A) = 0\\}$, equals $A$ together with its limit points, and is the smallest closed superset"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-metric-interior-closure-boundary, def-metric-bounded-diameter,
       thm-metric-open-set-algebra, lem-inf-epsilon, def-metric-topology,
       def-metric-ball, def-infimum, lem-metric-nonnegativity, def-metric-space,
       thm-infimum-property, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "closure = zero-distance set = smallest closed superset"
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
    - title: "Hausdorff distance (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_distance"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]) and let $A \subseteq X$,
with closure, derived set and limit points as in
[[def-metric-interior-closure-boundary]]. Then:

1. If $A \ne \emptyset$, then $\overline{A} = \{\, x \in X : d(x,A) = 0 \,\}$,
   where $d(x,A)$ is the distance from a point to a nonempty set
   ([[def-metric-bounded-diameter]]).
2. $\overline{A} = A \cup A'$.
3. $\overline{A}$ is closed, contains $A$, and is contained in every closed
   $F \subseteq X$ with $A \subseteq F$. So $\overline{A}$ is the smallest closed
   superset of $A$, and $A$ is closed if and only if $A = \overline{A}$.

Claims 2 and 3 hold for every $A$, the empty set included: $\overline{\emptyset}$
is empty because no ball meets $\emptyset$, and $\emptyset$ is closed because $X$
is open ([[def-metric-topology]]). Claim 1 carries the hypothesis $A \ne \emptyset$
because $d(x,A)$ is defined only for nonempty $A$
([[def-metric-bounded-diameter]]).

## Facts & Assumptions

**Given:** A metric space $(X,d)$, a subset $A \subseteq X$, a point $x \in X$, and a closed set $F \subseteq X$ with $A \subseteq F$; when $A \ne \emptyset$, the set $E(x) := \{\, d(x,a) : a \in A \,\}$, whose infimum is $d(x,A)$.

[A1] Closure and derived set: $x \in \overline{A}$ means $B(x,r) \cap A \ne \emptyset$ for every $r > 0$; $x \in A'$ means $B(x,r) \cap (A \setminus \{x\}) \ne \emptyset$ for every $r > 0$ ([[def-metric-interior-closure-boundary]]).

[A2] Open and closed: $U$ is open when every point of $U$ has a ball around it inside $U$; $F$ is closed when $X \setminus F$ is open ([[def-metric-topology]]).

[L1] For nonempty $A$, the set $E(x)$ is nonempty and bounded below by $0$, so $d(x,A) = \inf E(x)$ exists and is a lower bound of $E(x)$ ([[def-metric-bounded-diameter]], [[lem-metric-nonnegativity]], [[thm-infimum-property]], [[def-infimum]]).

[L2] Epsilon characterisation of the infimum: for a nonempty $S \subseteq \mathbb{R}$ bounded below and a lower bound $\ell$ of $S$, one has $\ell = \inf S$ if and only if for every $\varepsilon > 0$ there is $s \in S$ with $s < \ell + \varepsilon$ ([[lem-inf-epsilon]]).

[L3] Balls are open, so a point of a ball has a ball around it inside that ball ([[thm-metric-open-set-algebra]], [[def-metric-ball]]).

[L4] Membership in a ball: $a \in B(x,r)$ means $d(x,a) < r$, and $x \in B(x,r)$ always ([[def-metric-ball]]); trichotomy of the order of $\mathbb{R}$ ([[def-complete-ordered-field]], [[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $A \ne \emptyset$ and $x \in \overline{A}$, and let $\varepsilon > 0$ be arbitrary; then $B(x,\varepsilon) \cap A \ne \emptyset$, so there is $a \in A$ with $d(x,a) < \varepsilon = 0 + \varepsilon$, and $0$ is a lower bound of $E(x)$, so $d(x,A) = 0$ by the epsilon characterisation. [A1, L1, L2, L4]

1.2 Conversely suppose $A \ne \emptyset$ and $d(x,A) = 0$, and let $r > 0$ be arbitrary; the epsilon characterisation supplies $a \in A$ with $d(x,a) < 0 + r = r$, that is $a \in B(x,r) \cap A$, so $x \in \overline{A}$. [A1, L1, L2, L4]

1.3 $A \subseteq \overline{A}$ and $A' \subseteq \overline{A}$: a point $a \in A$ lies in $B(a,r) \cap A$ for every $r$, and a ball meeting $A \setminus \{x\}$ meets $A$. [A1, L4]

1.4 If $x \in \overline{A}$ and $x \notin A$, then for every $r$ the nonempty set $B(x,r) \cap A$ equals $B(x,r) \cap (A \setminus \{x\})$, since $x$ is not a member of $A$; hence $x \in A'$. [A1]

1.5 $\overline{A}$ is closed: let $x \in X \setminus \overline{A}$ and fix $r$ with $B(x,r) \cap A = \emptyset$; for $y \in B(x,r)$ there is $s$ with $B(y,s) \subseteq B(x,r)$, so $B(y,s) \cap A = \emptyset$ and $y \notin \overline{A}$, whence $B(x,r) \subseteq X \setminus \overline{A}$ and $X \setminus \overline{A}$ is open. [A1, A2, L3]

1.6 $\overline{A} \subseteq F$ for every closed $F \supseteq A$: if $x \in \overline{A}$ had $x \notin F$, then $X \setminus F$ open would give $r$ with $B(x,r) \subseteq X \setminus F \subseteq X \setminus A$, so $B(x,r) \cap A = \emptyset$, contradicting $x \in \overline{A}$. [A1, A2, given]

2.1 Claim 1 follows: by step 1.1 every adherent point of a nonempty $A$ satisfies $d(x,A) = 0$, and by step 1.2 every $x$ with $d(x,A) = 0$ is adherent. [step 1.1, step 1.2]

2.2 Claim 2 follows: $A \cup A' \subseteq \overline{A}$ by step 1.3, and $\overline{A} \subseteq A \cup A'$ by step 1.4, since a point of $\overline{A}$ either lies in $A$ or, not lying in $A$, lies in $A'$. [step 1.3, step 1.4]

2.3 Claim 3 follows: $\overline{A}$ is closed by step 1.5, contains $A$ by step 1.3, and sits inside every closed superset of $A$ by step 1.6; in particular if $A$ is closed then $\overline{A} \subseteq A \subseteq \overline{A}$, so $A = \overline{A}$, and conversely if $A = \overline{A}$ then $A$ is closed. [step 1.3, step 1.5, step 1.6]

3.1 Claims 1, 2 and 3 are therefore all established. [step 2.1, step 2.2, step 2.3] ∎

## Remarks

- **Claim 1 is where the infimum does the work.** Reading it right to left,
  $d(x,A) = 0$ says that $A$ has points arbitrarily close to $x$ without saying
  that any of them is $x$; reading it left to right, adherence says the same
  thing in the language of balls. The equivalence is exactly the epsilon
  characterisation of the infimum ([[lem-inf-epsilon]]) with the lower bound $0$.
- **The distance function is $1$-Lipschitz** ([[lem-distance-to-set-is-lipschitz]]),
  so claim 1 exhibits $\overline{A}$ as the zero set of a function that does not
  increase distances. That is not used above and is recorded only as
  orientation.
- **Claim 3 is the form that transfers to general topology**, where no metric is
  available and the closure is defined outright as the intersection of all
  closed supersets. Claim 1 is the specifically metric statement, and claim 2
  sits between them.
````

### `thm-zorn`

````markdown
---
id: thm-zorn
kind: theorem
title: "Zorn's lemma"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-bourbaki-witt, def-axiom-of-choice, def-maximal-element, def-upper-bound, def-chain, def-partial-order]
justified_by: []
forward_refs: [cex-zorn-hypothesis-fails]
aliases: [thm-zorns-lemma]
landmark: true
short: "Zorn's lemma"
proof_strategy: contradiction
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
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Encyclopedia of Mathematics, Zorn lemma"
      url: "https://encyclopediaofmath.org/wiki/Zorn_lemma"
    - title: "Bourbaki–Witt theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bourbaki%E2%80%93Witt_theorem"
    - title: "Zorn's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Zorn%27s_lemma"
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $(P, \le)$ be a
nonempty poset in which **every chain has an upper bound**. Then $P$ has a
maximal element ([[def-maximal-element]]).

Note the hypothesis asks only for an upper bound, not a least upper bound, and
the conclusion asserts only that a maximal element exists, never that a greatest
one does.

## Facts & Assumptions

**Given:** A nonempty poset $(P, \le)$ in which every chain has an upper bound, and the Axiom of Choice.

[A1] $P \ne \emptyset$, and every chain $C \subseteq P$ has an upper bound in $P$.

[A2] Every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[L1] A progressive map on a chain-complete poset has a fixed point ([[thm-bourbaki-witt]]).

[L2] $m$ is maximal when there is no $x$ with $m < x$ ([[def-maximal-element]]).

[L3] $u$ is a strict upper bound of $S$ when $s < u$ for every $s \in S$ ([[def-upper-bound]]).

[L4] The empty set is a chain, and a subset is a chain when any two of its elements are comparable ([[def-chain]]).

[L5] $\le$ is a partial order, in particular transitive ($u \le v$ and $v \le w$ imply $u \le w$) and antisymmetric ($u \le v$ and $v \le u$ imply $u = v$); the strict order $u < v$ means $u \le v$ and $u \ne v$, so $<$ is irreflexive ([[def-partial-order]]).

[L6] Inclusion is a partial order on any collection of sets: $A \subseteq A$; $A \subseteq B$ and $B \subseteq A$ give $A = B$ by extensionality; and $A \subseteq B \subseteq C$ gives $A \subseteq C$ ([[def-partial-order]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose $P$ has no maximal element. [assume-contra]

1.2 Let $\mathcal{C}$ be the set of all chains of $P$, a subset of the power set of $P$, partially ordered by inclusion. [L4, L6, construct]

2.1 $(\mathcal{C}, \subseteq)$ is a chain-complete poset: if $\mathcal{D} \subseteq \mathcal{C}$ is a chain under inclusion then $\bigcup \mathcal{D}$ is a chain of $P$, since any two of its elements lie in a common member of $\mathcal{D}$, and it is the least upper bound of $\mathcal{D}$ under inclusion; the empty chain has least upper bound $\bigcup \emptyset = \emptyset$, which is a chain. [step 1.2, L4, L6]

2.2 For $C \in \mathcal{C}$ let $S_C$ be the set of strict upper bounds of $C$ in $P$. [step 1.2, L3, construct]

3.1 Each $S_C$ is nonempty: $C$ has an upper bound $u$ in $P$ by hypothesis, taking any element of the nonempty $P$ when $C = \emptyset$; by assumption $u$ is not maximal, so there is $v$ with $u < v$; then for every $c \in C$ transitivity gives $c \le v$ from $c \le u \le v$, and $c \ne v$, since $c = v$ would give $v \le u$ and $u \le v$, hence $u = v$ by antisymmetry, contradicting $u < v$; so $c < v$ for every $c \in C$ and $v \in S_C$. [step 2.2, step 1.1, A1, L2, L3, L5]

4.1 Apply the Axiom of Choice to the family $\mathcal{S} = \{S_C : C \in \mathcal{C}\}$, every member of which is nonempty, obtaining a choice function $g$ with $g(S) \in S$ for each $S \in \mathcal{S}$; composing with the map $C \mapsto S_C$, which is a function on $\mathcal{C}$, yields a selection $C \mapsto g(S_C) \in S_C$ defined for every chain $C$, and no injectivity of $C \mapsto S_C$ is needed, since two chains with the same set of strict upper bounds simply receive the same chosen element. [step 3.1, A2]

5.1 Define $f(C) = C \cup \{g(S_C)\}$ for $C \in \mathcal{C}$; this is again a chain, because $g(S_C)$ is a strict upper bound of $C$ and so is comparable to every element of $C$. [step 4.1, step 2.2, L3, L4, L5, construct]

6.1 $f$ is progressive for inclusion, since $C \subseteq f(C)$ by construction. [step 5.1]

7.1 By Bourbaki–Witt applied to the chain-complete $\mathcal{C}$ and the progressive $f$, there is $C_0 \in \mathcal{C}$ with $f(C_0) = C_0$, that is $g(S_{C_0}) \in C_0$. [step 2.1, step 6.1, L1]

8.1 But $g(S_{C_0})$ is a strict upper bound of $C_0$, so every element of $C_0$ is strictly below it, giving $g(S_{C_0}) < g(S_{C_0})$, which is impossible because $<$ is irreflexive. [step 7.1, step 4.1, L3, L5, discharge-contradiction] ∎

## Remarks

- **The Axiom of Choice is used exactly once, at step 4.1**, and nowhere else. Everything before it, including Bourbaki–Witt, is a theorem of ZF. That is why the fixed point theorem is kept as a separate item: it marks the boundary between what is free and what is bought.
- The hypothesis is about **all** chains, including the empty one, whose upper bounds are exactly the elements of $P$. So on this library's convention, where $\emptyset$ is a chain ([[def-chain]]), requiring every chain to have an upper bound **already forces** $P \ne \emptyset$, and the nonemptiness hypothesis is stated separately for emphasis rather than as an independent assumption. In particular the empty poset does **not** satisfy the hypothesis: there the empty chain has no upper bound, because there is nothing at all to be one. Under the competing convention, on which chains are required to be nonempty, nonemptiness of $P$ is genuinely independent and cannot be dropped. See [[cex-zorn-hypothesis-fails]] for the failure when unbounded chains exist.
- The conclusion is **maximal, not greatest**, and conflating the two is the most common error in applying the lemma ([[fs-maximal-is-greatest]]).
- The converse holds: Zorn's lemma implies the Axiom of Choice ([[thm-zorn-implies-ac]]), so the two are equivalent over ZF ([[cor-ac-iff-zorn]]).
````

