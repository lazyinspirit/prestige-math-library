## Selection reasons

- high risk (6): 4 declared dependencies; 4 cited facts; boundary-sensitive language

## Target item — `lem-products-preserve-t0-t1-and-hausdorff`

Normalized current SHA-256: `4eef89f3361fd183a83826fa61650c6429c6c2152f3b0ab47bb2e140dbc6dd14`

The complete current item follows, including frontmatter:

````markdown
---
id: lem-products-preserve-t0-t1-and-hausdorff
kind: lemma
title: "Arbitrary products preserve $T_0$, $T_1$, and Hausdorffness"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-product-topology, thm-product-universal-property, def-t0-and-t1-spaces, def-hausdorff-space]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "J. P. May, An Outline Summary of Basic Point Set Topology, §6"
      url: "https://math.uchicago.edu/~may/FINITE/REUNotes2010/Topology10.pdf"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
pipeline_run: null
---

## Statement

For any family $(X_i)_{i\in I}$, if every $X_i$ is $T_0$, respectively $T_1$, respectively Hausdorff, then $\prod_{i\in I}X_i$ is respectively $T_0$, $T_1$, respectively Hausdorff. The empty product is included.

## Facts & Assumptions

**Given:** A family of spaces with the indicated separation property and two distinct points $x,y$ of its product $P$.

[F1] Distinct product points differ at a coordinate, and $\pi_i^{-1}[U]$ is open whenever $U$ is open in $X_i$ ([[def-product-topology]], [[thm-product-universal-property]]).

[F2] The $T_0$, $T_1$, and Hausdorff conditions are respectively the stated one-sided, two-sided, and disjoint-open separations of distinct points ([[def-t0-and-t1-spaces]], [[def-hausdorff-space]]).

## Proof

**Proof technique:** direct.

1.1 If $I=\varnothing$, the product has one point and all three conditions hold vacuously. [F2]

1.2 Otherwise choose $i\in I$ with $x_i\ne y_i$. For a $T_0$ factor, the inverse image under $\pi_i$ of an open set distinguishing $x_i,y_i$ distinguishes $x,y$. [F1, F2]

1.3 For a $T_1$ factor, pull back the two open sets separating $x_i$ from $y_i$ and $y_i$ from $x_i$. [F1, F2]

1.4 For a Hausdorff factor, pull back disjoint open neighbourhoods of $x_i,y_i$; their inverse images remain disjoint. [F1, F2]

2.1 Thus the product has the relevant property in every case. [step 1.1, step 1.2, step 1.3, step 1.4] ∎
````

## Wave 7 provenance row for the target

```json
{
  "id": "lem-products-preserve-t0-t1-and-hausdorff",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://math.uchicago.edu/~may/FINITE/REUNotes2010/Topology10.pdf",
    "https://en.wikipedia.org/wiki/Separation_axiom"
  ],
  "rationale": "The literature states product preservation of the separation axioms; the library spells out arbitrary indexing and the empty-product boundary.",
  "alpha_concurred": false,
  "at": "2026-08-08",
  "ledger": "wave7-topology-separation-urysohn.provenance.jsonl"
}
```

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "F1",
      "source": "def-product-topology",
      "source_section": "Definition",
      "quote": "**The product set.** Let $I$ be a set and let $X_i$ be a set for each $i \\in I$.\nThe **product** is\n\n$$\\prod_{i \\in I} X_i \\;:=\\; \\Big\\{\\, x : x \\text{ is a function with domain } I \\text{ and } x(i) \\in X_i \\text{ for every } i \\in I \\,\\Big\\},$$\n\nand we write $x_i := x(i)$, the $i$-th **coordinate** of $x$. Two elements of the\nproduct are equal exactly when they agree at every index, functions being equal\nwhen they have the same domain and the same values. For $j \\in I$ the $j$-th\n**projection** is\n\n$$\\pi_j : \\prod_{i \\in I} X_i \\to X_j, \\qquad \\pi_j(x) := x_j .$$\n\n**Notation for a finite product.** For $I = n$ a natural number, which is the set\n$\\{0, 1, \\dots, n-1\\}$ of its predecessors, an element of $\\prod_{k<n} X_k$ is a\nfunction on $n$ and we write it $(x_0, \\dots, x_{n-1})$. In particular $I = 2$\ngives the **binary product**, written $X \\times Y$ for $\\prod_{i<2} X_i$ with\n$X_0 = X$ and $X_1 = Y$, whose elements are written $(u,v)$ for the function\n$0 \\mapsto u$, $1 \\mapsto v$. This is the only meaning the symbol $X \\times Y$\ncarries on this page.\n\n**Two facts about when the product is nonempty, stated because they are used and\nbecause they cost something.** If some $X_{i_0}$ is empty then the product is\nempty, since no function can take a value in $X_{i_0}$. Conversely, suppose every\n$X_i$ is nonempty.\n\n- For $I = n$ a natural number, the product is nonempty, and this is a theorem of\n  ZF: [[lem-finite-choice]] applied to the function $i \\mapsto X_i$ on $n$\n  supplies a choice function $g$ for the family of values, and\n  $x(i) := g(X_i)$ defines a member of $\\prod_{k<n} X_k$.\n- For an arbitrary $I$ the assertion \"$\\prod_{i \\in I} X_i \\ne \\varnothing$\n  whenever every $X_i$ is nonempty\" **is** the Axiom of Choice: it is the\n  formulation recorded in [[def-axiom-of-choice]], and the choice function of\n  [[def-choice-function]] is exactly a point of the product of a family by\n  itself. Every use of it below is flagged at the step that spends it.\n\n**The box topology.** Now let each $X_i$ carry a topology $\\mathcal{T}_i$\n([[def-topological-space]]). Put\n\n$$\\mathcal{R} \\;:=\\; \\Big\\{\\, \\prod_{i \\in I} U_i \\;:\\; U_i \\in \\mathcal{T}_i \\text{ for every } i \\in I \\,\\Big\\},$$\n\nthe family of **boxes**. $\\mathcal{R}$ is a basis for a topology\n([[thm-basis-criterion]]): it contains $\\prod_i X_i$, so it covers the product,\nand it is closed under binary intersections, since\n\n$$\\Big(\\prod_i U_i\\Big) \\cap \\Big(\\prod_i V_i\\Big) = \\prod_i (U_i \\cap V_i)$$\n\nand each $U_i \\cap V_i$ is open by (T3). The topology it generates is the **box\ntopology** $\\mathcal{T}^{\\square}$, and $\\mathcal{R}$ is a basis for it\n([[def-topology-basis-subbasis]]).\n\n**The product topology.** The **product topology** $\\mathcal{T}^{\\Pi}$ on\n$\\prod_i X_i$ is the initial topology of the family of projections\n$(\\pi_i)_{i \\in I}$ ([[def-initial-and-final-topology]]): the topology generated\nby the subbasis\n\n$$\\mathcal{G} \\;:=\\; \\{\\, \\pi_i^{-1}[U] : i \\in I,\\ U \\in \\mathcal{T}_i \\,\\}, \\qquad \\pi_i^{-1}[U] = \\prod_{j \\in I} W_j \\ \\text{ with } W_i = U \\text{ and } W_j = X_j \\text{ for } j \\ne i .$$\n\nBy [[thm-basis-criterion]] the finite intersections of members of $\\mathcal{G}$\nform a basis for $\\mathcal{T}^{\\Pi}$, and those finite intersections are exactly\nthe boxes with all but finitely many factors unrestricted:\n\n$$\\mathcal{R}^{\\Pi} \\;=\\; \\Big\\{\\, \\prod_{i \\in I} U_i \\;:\\; U_i \\in \\mathcal{T}_i \\text{ for every } i, \\text{ and } U_i = X_i \\text{ for all but finitely many } i \\,\\Big\\}.$$\n\nIndeed the intersection of $\\pi_{i_1}^{-1}[U_1], \\dots, \\pi_{i_n}^{-1}[U_n]$ is\nthe box whose factor at $i$ is the intersection of those $U_m$ with $i_m = i$ and\nis $X_i$ when no $i_m$ equals $i$; and the intersection of no members is the\nwhole product, the box with every factor $X_i$. Conversely a box with\n$U_i = X_i$ off a finite set is such an intersection. Members of\n$\\mathcal{R}^{\\Pi}$ are called **basic product-open** sets, and members of\n$\\mathcal{R}$ **boxes**. So $\\mathcal{R}^{\\Pi} \\subseteq \\mathcal{R}$, with\nequality when $I$ is a natural number.\n\n**The empty product.** For $I = \\varnothing$ there is exactly one function with\ndomain $\\varnothing$, the empty function, so $\\prod_{i \\in \\varnothing} X_i$ is a\none-point set. A one-point set carries exactly one topology, namely\n$\\{\\varnothing, \\{\\varnothing\\}\\}$, since a topology must contain the empty set\nand the whole set and there is nothing else to contain\n([[def-topological-space]]); so the box topology and the product topology agree\nthere, and both equal the discrete topology and the indiscrete topology\n([[def-standard-topologies]]), which coincide on a one-point set. There are no\nprojections to speak of, and the initial topology of the empty family is indeed\nthe indiscrete one ([[def-initial-and-final-topology]]).\n\n**Convention.** Unless the box topology is named explicitly, $\\prod_i X_i$ always\ncarries the product topology in this library. That is not a matter of taste: the\nproduct topology is the one with the characteristic property of the next item,\nand the box topology has no such property.",
      "uses": [
        "1.2",
        "1.3",
        "1.4"
      ]
    },
    {
      "fact": "F1",
      "source": "thm-product-universal-property",
      "source_section": "Statement",
      "quote": "Let $(X_i, \\mathcal{T}_i)_{i \\in I}$ be topological spaces and let\n$P := \\prod_{i \\in I} X_i$ carry the product topology, with projections $\\pi_j$\n([[def-product-topology]]). Then:\n\n1. **The projections are continuous**, and the product topology is the coarsest\n   topology on $P$ making all of them continuous.\n2. **Characteristic property.** For every space $Z$ and every function\n   $h : Z \\to P$,\n   $$h \\text{ is continuous } \\iff \\pi_i \\circ h \\text{ is continuous for every } i \\in I .$$\n   The functions $\\pi_i \\circ h$ are the **components** of $h$, and every family\n   of functions $h_i : Z \\to X_i$ arises from exactly one $h$, namely\n   $h(z)(i) := h_i(z)$.\n3. **The projections are open maps** ([[def-homeomorphism-and-open-maps]]), for\n   the product topology and for the box topology alike. They need not be closed;\n   that failure is recorded on this page as a false statement.\n4. **Surjectivity.** If every $X_i$ is nonempty then every $\\pi_j$ is surjective.\n   For $I$ a natural number this is a theorem of ZF ([[lem-finite-choice]]); for\n   an arbitrary $I$ it is the Axiom of Choice ([[def-axiom-of-choice]]), and this\n   is the only place in the item where a choice principle is used.",
      "uses": [
        "1.2",
        "1.3",
        "1.4"
      ]
    },
    {
      "fact": "F2",
      "source": "def-t0-and-t1-spaces",
      "source_section": "Definition",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space ([[def-topological-space]]).\n\n- $X$ is **$T_0$**, or a **Kolmogorov space**, when any two distinct points are\n  *topologically distinguishable*: for all $x, y \\in X$ with $x \\ne y$ there is\n  an open set containing exactly one of $x$ and $y$.\n- $X$ is **$T_1$**, or a **Frechet space**, when each of any two distinct points\n  has an open set containing it and missing the other: for all $x, y \\in X$ with\n  $x \\ne y$ there are $U, V \\in \\mathcal{T}$ with\n\n$$x \\in U, \\quad y \\notin U, \\qquad y \\in V, \\quad x \\notin V .$$\n\nNothing is asserted about a pair of equal points, so a space with at most one\npoint satisfies both conditions vacuously.\n\nSince an open set containing a point is an open neighbourhood of it\n([[def-neighbourhood-top]]), both conditions may be read with \"open\nneighbourhood\" in place of \"open set\"; and by the same equivalence recorded in\n[[def-neighbourhood-top]] they may be read with arbitrary neighbourhoods, since\na neighbourhood of $x$ contains an open one and an open neighbourhood is a\nneighbourhood.\n\n**Every $T_1$ space is $T_0$, and this is discharged here** rather than left to\nthe reader, because it is the bottom arrow of the whole hierarchy on this page.\nLet $x \\ne y$ and take $U, V$ as in the $T_1$ condition. Then $U$ is an open set\ncontaining $x$ and not $y$, so it contains exactly one of the two points, which\nis the $T_0$ condition. Only the first half of the $T_1$ condition is used, so\nthe implication does not reverse formally, and it does not reverse in fact:\nSierpinski space is a witness, recorded on the companion page.\n\n**The two conditions differ exactly in symmetry.** $T_0$ asks for *one* open set\nthat tells the pair apart, with no control over which of the two it contains;\n$T_1$ asks for *both* separations at once. In Sierpinski space\n$(\\{a,b\\}, \\{\\varnothing, \\{b\\}, \\{a,b\\}\\})$ of [[def-standard-topologies]] the\nopen set $\\{b\\}$ contains $b$ and not $a$, so the space is $T_0$; but the only\nopen set containing $a$ is the whole space, which also contains $b$, so it is\nnot $T_1$.\n\n**Neither condition is a property of a set alone.** Both are properties of the\npair $(X, \\mathcal{T})$, and both are inherited upwards along the comparison\norder of [[def-topological-space]]: if $\\mathcal{T}_1 \\subseteq \\mathcal{T}_2$\nand $(X,\\mathcal{T}_1)$ is $T_0$, respectively $T_1$, then so is\n$(X,\\mathcal{T}_2)$, since the separating open sets of the coarser topology lie\nin the finer one. In particular the discrete topology satisfies both, and the\nindiscrete topology on a set with at least two points satisfies neither.",
      "uses": [
        "1.1",
        "1.2",
        "1.3",
        "1.4"
      ]
    },
    {
      "fact": "F2",
      "source": "def-hausdorff-space",
      "source_section": "Definition",
      "quote": "A topological space $(X, \\mathcal{T})$ ([[def-topological-space]]) is\n**Hausdorff** when any two distinct points are separated by disjoint open sets:\nfor all $x, y \\in X$ with $x \\ne y$ there are $U, V \\in \\mathcal{T}$ with\n\n$$x \\in U, \\qquad y \\in V, \\qquad U \\cap V = \\varnothing .$$\n\nSince an open set containing a point is an open neighbourhood of it\n([[def-neighbourhood-top]]), the condition reads: distinct points have disjoint\nopen neighbourhoods. Nothing is asserted about points that are equal, and the\ncondition is vacuous for a space with at most one point, so every such space is\nHausdorff.\n\n**Every metrizable space is Hausdorff.** This is not proved here, because it is\nalready discharged: [[def-metrizable-space]] records it among the two things\nevery metrizable space has, deriving it from\n[[thm-metric-hausdorff-separation]], which separates $p \\ne q$ in a metric space\nby the disjoint open balls $B(p,r)$ and $B(q,r)$ with $r = d(p,q)/2 > 0$. In\nparticular $\\mathbb{R}$ with its usual topology, every $\\mathbb{R}^n$, and every\nsubspace of a metrizable space are Hausdorff.\n\n**Not every space is Hausdorff.** The indiscrete topology\n$\\mathcal{T}_{\\mathrm{ind}} = \\{\\varnothing, X\\}$ on a set $X = \\{a,b\\}$ with\n$a \\ne b$ ([[def-standard-topologies]]) is not: the only open set containing $a$\nis $X$, the only one containing $b$ is $X$, and $X \\cap X = X \\ne \\varnothing$.\nThis is the same two-point space that [[def-metrizable-space]] uses to exhibit a\ntopology induced by no metric, and the reason is the same one: failure of the\nHausdorff condition is an obstruction to metrizability.\n\n**Being Hausdorff is a topological property** ([[def-homeomorphism-and-open-maps]]).\nIf $h : X \\to Z$ is a homeomorphism and $X$ is Hausdorff, then for $z \\ne z'$ in\n$Z$ the points $h^{-1}(z)$ and $h^{-1}(z')$ are distinct, so they have disjoint\nopen $U, V$; the images $h[U]$ and $h[V]$ are open, disjoint, and contain $z$ and\n$z'$ respectively, a homeomorphism carrying the open sets of one space\nbijectively onto those of the other. So no space homeomorphic to a Hausdorff\nspace fails the condition.\n\n**Scope of this item.** Only the definition, the metrizable case and the\ntwo-point failure are recorded here, because that is all this page uses. The\nHausdorff condition is one of a graded family of separation axioms; that family,\nits ordering, and the questions of which of its members are hereditary or\npreserved by products, are not available at this point in the reading order and\nnothing here anticipates them. What this page does use is a single negative\nresult: a quotient of a Hausdorff space need not be Hausdorff, which is recorded\nbelow as a false statement and witnessed on the companion page.",
      "uses": [
        "1.1",
        "1.2",
        "1.3",
        "1.4"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "If $I=\\varnothing$, the product has one point and all three conditions hold vacuously. [F2]",
      "step": "1.1",
      "inputs": [
        "F2"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "Otherwise choose $i\\in I$ with $x_i\\ne y_i$. For a $T_0$ factor, the inverse image under $\\pi_i$ of an open set distinguishing $x_i,y_i$ distinguishes $x,y$. [F1, F2]",
      "step": "1.2",
      "inputs": [
        "F1",
        "F2"
      ]
    },
    {
      "id": "step-1.3",
      "claim": "For a $T_1$ factor, pull back the two open sets separating $x_i$ from $y_i$ and $y_i$ from $x_i$. [F1, F2]",
      "step": "1.3",
      "inputs": [
        "F1",
        "F2"
      ]
    },
    {
      "id": "step-1.4",
      "claim": "For a Hausdorff factor, pull back disjoint open neighbourhoods of $x_i,y_i$; their inverse images remain disjoint. [F1, F2]",
      "step": "1.4",
      "inputs": [
        "F1",
        "F2"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Thus the product has the relevant property in every case. [step 1.1, step 1.2, step 1.3, step 1.4] ∎",
      "step": "2.1",
      "inputs": [
        "step 1.1",
        "step 1.2",
        "step 1.3",
        "step 1.4",
        "1.1",
        "1.2",
        "1.3",
        "1.4"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "statement and step 1.1: empty-set or empty-family case was inspected and introduces no illicit witness"
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "statement and step 1.2: zero or base-value case was inspected under the displayed definitions"
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "statement and step 1.2: unit, singleton, or one-term case was inspected"
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "statement: degenerate or equality case was inspected"
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "The statement has no distinguished endpoint and codomain-boundary behavior parameter or case."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "statement and step 1.2: nonempty-choice obligations were checked against the stated hypothesis or explicit construction"
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The statement is not an equivalence and has no forward iff direction."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The statement is not an equivalence and has no reverse iff direction."
    }
  ],
  "finite_smoke": [],
  "risk_review": {
    "status": "complete",
    "reviewer": "Audit-Alpha wave 7 (owner-delegated); DeepSeek V4 Pro audit-refuter",
    "notes": "high risk (6): 4 declared dependencies; 4 cited facts; boundary-sensitive language, routed by risk-report.mjs. The read-only DeepSeek V4 Pro audit-refuter received the complete target and every cited dependency and returned CLEAN. Boundary evidence: - **Empty index set (I=∅):** handled explicitly in step 1.1; the product is a one‑point space, which vacuously satisfies all three separation conditions. - **Nonempty I but empty product (some factor empty):** the product is empty, so there are no distinct points; the separation axioms hold vacuously. The proof’s assumption “given … two distinct points” is never satisfied, and the logical implication remains true. No special case is needed. - **Singleton product (all factors singletons, or I=∅):** again a one‑point space, trivially T₀, T₁, Hausdorff. - **Choice principles:** the step “choose i∈I with xᵢ≠yᵢ” is an existential instantiation from a non‑empty set, not AC. Selecting the separating open sets in the factor is likewise a finite existential instantiation. No use of the Axiom of Choice is required. - **Product topology convention:** the target relies on the library’s convention that the product carries the product topology; the preimages πᵢ⁻¹[U] are open by definition of that topology. No box‑topology subtleties arise. Checked surface: The title, the public statement (including the three separate preservation claims and the remark about the empty product), the Facts & Assumptions section, all five numbered proof steps (1.1, 1.2, 1.3, 1.4, 2.1), and the (absent) Remarks were read. No mathematical defects were found. ``` Alpha adjudicated the return against the current item and cited dependencies on disk and found no fatal mathematical or dependency-citation defect. Evidence: research/audit/wave7-preserved-refuters/lem-products-preserve-t0-t1-and-hausdorff--35f54b4a1a5f506a.result.json."
  }
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "lem-products-preserve-t0-t1-and-hausdorff",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-product-topology",
    "declared_target": "def-product-topology",
    "target_statement_provenance": "ai-altered",
    "targetPage": "subspaces-products-and-quotients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-products-preserve-t0-t1-and-hausdorff",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-product-universal-property",
    "declared_target": "thm-product-universal-property",
    "target_statement_provenance": "ai-altered",
    "targetPage": "subspaces-products-and-quotients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-products-preserve-t0-t1-and-hausdorff",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-t0-and-t1-spaces",
    "declared_target": "def-t0-and-t1-spaces",
    "target_statement_provenance": "literature-derived",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-products-preserve-t0-t1-and-hausdorff",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-hausdorff-space",
    "declared_target": "def-hausdorff-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "subspaces-products-and-quotients",
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

## Full text of every cited or declared item (4)

### `def-hausdorff-space`

````markdown
---
id: def-hausdorff-space
kind: definition
title: "Hausdorff space: distinct points have disjoint open neighbourhoods; every metrizable space is Hausdorff and the indiscrete topology on two points is not"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-neighbourhood-top, def-standard-topologies,
       def-metrizable-space, thm-metric-hausdorff-separation,
       def-homeomorphism-and-open-maps]
justified_by: []
aliases: [def-hausdorff, def-t2-space]
landmark: true
short: "Hausdorff space"
verification:
  precheck: n/a
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Hausdorff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_space"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
    - title: "J. Munkres, Topology, 2nd ed., §17"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

A topological space $(X, \mathcal{T})$ ([[def-topological-space]]) is
**Hausdorff** when any two distinct points are separated by disjoint open sets:
for all $x, y \in X$ with $x \ne y$ there are $U, V \in \mathcal{T}$ with

$$x \in U, \qquad y \in V, \qquad U \cap V = \varnothing .$$

Since an open set containing a point is an open neighbourhood of it
([[def-neighbourhood-top]]), the condition reads: distinct points have disjoint
open neighbourhoods. Nothing is asserted about points that are equal, and the
condition is vacuous for a space with at most one point, so every such space is
Hausdorff.

**Every metrizable space is Hausdorff.** This is not proved here, because it is
already discharged: [[def-metrizable-space]] records it among the two things
every metrizable space has, deriving it from
[[thm-metric-hausdorff-separation]], which separates $p \ne q$ in a metric space
by the disjoint open balls $B(p,r)$ and $B(q,r)$ with $r = d(p,q)/2 > 0$. In
particular $\mathbb{R}$ with its usual topology, every $\mathbb{R}^n$, and every
subspace of a metrizable space are Hausdorff.

**Not every space is Hausdorff.** The indiscrete topology
$\mathcal{T}_{\mathrm{ind}} = \{\varnothing, X\}$ on a set $X = \{a,b\}$ with
$a \ne b$ ([[def-standard-topologies]]) is not: the only open set containing $a$
is $X$, the only one containing $b$ is $X$, and $X \cap X = X \ne \varnothing$.
This is the same two-point space that [[def-metrizable-space]] uses to exhibit a
topology induced by no metric, and the reason is the same one: failure of the
Hausdorff condition is an obstruction to metrizability.

**Being Hausdorff is a topological property** ([[def-homeomorphism-and-open-maps]]).
If $h : X \to Z$ is a homeomorphism and $X$ is Hausdorff, then for $z \ne z'$ in
$Z$ the points $h^{-1}(z)$ and $h^{-1}(z')$ are distinct, so they have disjoint
open $U, V$; the images $h[U]$ and $h[V]$ are open, disjoint, and contain $z$ and
$z'$ respectively, a homeomorphism carrying the open sets of one space
bijectively onto those of the other. So no space homeomorphic to a Hausdorff
space fails the condition.

**Scope of this item.** Only the definition, the metrizable case and the
two-point failure are recorded here, because that is all this page uses. The
Hausdorff condition is one of a graded family of separation axioms; that family,
its ordering, and the questions of which of its members are hereditary or
preserved by products, are not available at this point in the reading order and
nothing here anticipates them. What this page does use is a single negative
result: a quotient of a Hausdorff space need not be Hausdorff, which is recorded
below as a false statement and witnessed on the companion page.

## Remarks

- **Hausdorff spaces have closed singletons.** Fix $x \in X$ and take the union
  of all open subsets of $X$ that avoid $x$. Every $y \ne x$ belongs to one of
  them, by Hausdorff separation of $x$ and $y$, while $x$ belongs to none. The
  union is therefore exactly $X \setminus \{x\}$, so $\{x\}$ is closed.
  Thus the Hausdorff property implies the singleton-closed ($T_1$) property.
  The converse fails: closed singletons need not give disjoint neighbourhoods
  of distinct points.

- **What the Hausdorff condition buys, in the one place this page needs it.**
  Separation of distinct points by disjoint open sets is exactly what a quotient
  map can destroy: identifying points of a Hausdorff space can leave two classes
  every pair of whose open neighbourhoods meet, and the companion page exhibits
  such a quotient of a metrizable space. Nothing weaker than an explicit witness
  settles that, since the condition is a statement about all pairs of open sets.

- **The name.** Hausdorff's own 1914 axiom system for a topological space
  included this condition, so "topological space" once meant what is now called a
  Hausdorff space; this library follows the modern convention in which
  [[def-topological-space]] assumes no separation at all and every separation
  hypothesis is stated where it is used.
````

### `def-product-topology`

````markdown
---
id: def-product-topology
kind: definition
title: "The product set $\\prod_{i \\in I} X_i$ of functions choosing a point in each factor, the projections, the box topology, and the product topology as the initial topology of the projections; the empty product is a one-point space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-initial-and-final-topology, def-topological-space, def-topology-basis-subbasis,
       thm-basis-criterion, def-choice-function, def-axiom-of-choice, lem-finite-choice,
       def-standard-topologies]
justified_by: []
aliases: [def-product-top, def-box-topology, def-projection-top]
landmark: true
short: "product topology, box topology, projections"
verification:
  precheck: n/a
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Product topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Product_topology"
    - title: "Box topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Box_topology"
    - title: "J. Munkres, Topology, 2nd ed., §19"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

**The product set.** Let $I$ be a set and let $X_i$ be a set for each $i \in I$.
The **product** is

$$\prod_{i \in I} X_i \;:=\; \Big\{\, x : x \text{ is a function with domain } I \text{ and } x(i) \in X_i \text{ for every } i \in I \,\Big\},$$

and we write $x_i := x(i)$, the $i$-th **coordinate** of $x$. Two elements of the
product are equal exactly when they agree at every index, functions being equal
when they have the same domain and the same values. For $j \in I$ the $j$-th
**projection** is

$$\pi_j : \prod_{i \in I} X_i \to X_j, \qquad \pi_j(x) := x_j .$$

**Notation for a finite product.** For $I = n$ a natural number, which is the set
$\{0, 1, \dots, n-1\}$ of its predecessors, an element of $\prod_{k<n} X_k$ is a
function on $n$ and we write it $(x_0, \dots, x_{n-1})$. In particular $I = 2$
gives the **binary product**, written $X \times Y$ for $\prod_{i<2} X_i$ with
$X_0 = X$ and $X_1 = Y$, whose elements are written $(u,v)$ for the function
$0 \mapsto u$, $1 \mapsto v$. This is the only meaning the symbol $X \times Y$
carries on this page.

**Two facts about when the product is nonempty, stated because they are used and
because they cost something.** If some $X_{i_0}$ is empty then the product is
empty, since no function can take a value in $X_{i_0}$. Conversely, suppose every
$X_i$ is nonempty.

- For $I = n$ a natural number, the product is nonempty, and this is a theorem of
  ZF: [[lem-finite-choice]] applied to the function $i \mapsto X_i$ on $n$
  supplies a choice function $g$ for the family of values, and
  $x(i) := g(X_i)$ defines a member of $\prod_{k<n} X_k$.
- For an arbitrary $I$ the assertion "$\prod_{i \in I} X_i \ne \varnothing$
  whenever every $X_i$ is nonempty" **is** the Axiom of Choice: it is the
  formulation recorded in [[def-axiom-of-choice]], and the choice function of
  [[def-choice-function]] is exactly a point of the product of a family by
  itself. Every use of it below is flagged at the step that spends it.

**The box topology.** Now let each $X_i$ carry a topology $\mathcal{T}_i$
([[def-topological-space]]). Put

$$\mathcal{R} \;:=\; \Big\{\, \prod_{i \in I} U_i \;:\; U_i \in \mathcal{T}_i \text{ for every } i \in I \,\Big\},$$

the family of **boxes**. $\mathcal{R}$ is a basis for a topology
([[thm-basis-criterion]]): it contains $\prod_i X_i$, so it covers the product,
and it is closed under binary intersections, since

$$\Big(\prod_i U_i\Big) \cap \Big(\prod_i V_i\Big) = \prod_i (U_i \cap V_i)$$

and each $U_i \cap V_i$ is open by (T3). The topology it generates is the **box
topology** $\mathcal{T}^{\square}$, and $\mathcal{R}$ is a basis for it
([[def-topology-basis-subbasis]]).

**The product topology.** The **product topology** $\mathcal{T}^{\Pi}$ on
$\prod_i X_i$ is the initial topology of the family of projections
$(\pi_i)_{i \in I}$ ([[def-initial-and-final-topology]]): the topology generated
by the subbasis

$$\mathcal{G} \;:=\; \{\, \pi_i^{-1}[U] : i \in I,\ U \in \mathcal{T}_i \,\}, \qquad \pi_i^{-1}[U] = \prod_{j \in I} W_j \ \text{ with } W_i = U \text{ and } W_j = X_j \text{ for } j \ne i .$$

By [[thm-basis-criterion]] the finite intersections of members of $\mathcal{G}$
form a basis for $\mathcal{T}^{\Pi}$, and those finite intersections are exactly
the boxes with all but finitely many factors unrestricted:

$$\mathcal{R}^{\Pi} \;=\; \Big\{\, \prod_{i \in I} U_i \;:\; U_i \in \mathcal{T}_i \text{ for every } i, \text{ and } U_i = X_i \text{ for all but finitely many } i \,\Big\}.$$

Indeed the intersection of $\pi_{i_1}^{-1}[U_1], \dots, \pi_{i_n}^{-1}[U_n]$ is
the box whose factor at $i$ is the intersection of those $U_m$ with $i_m = i$ and
is $X_i$ when no $i_m$ equals $i$; and the intersection of no members is the
whole product, the box with every factor $X_i$. Conversely a box with
$U_i = X_i$ off a finite set is such an intersection. Members of
$\mathcal{R}^{\Pi}$ are called **basic product-open** sets, and members of
$\mathcal{R}$ **boxes**. So $\mathcal{R}^{\Pi} \subseteq \mathcal{R}$, with
equality when $I$ is a natural number.

**The empty product.** For $I = \varnothing$ there is exactly one function with
domain $\varnothing$, the empty function, so $\prod_{i \in \varnothing} X_i$ is a
one-point set. A one-point set carries exactly one topology, namely
$\{\varnothing, \{\varnothing\}\}$, since a topology must contain the empty set
and the whole set and there is nothing else to contain
([[def-topological-space]]); so the box topology and the product topology agree
there, and both equal the discrete topology and the indiscrete topology
([[def-standard-topologies]]), which coincide on a one-point set. There are no
projections to speak of, and the initial topology of the empty family is indeed
the indiscrete one ([[def-initial-and-final-topology]]).

**Convention.** Unless the box topology is named explicitly, $\prod_i X_i$ always
carries the product topology in this library. That is not a matter of taste: the
product topology is the one with the characteristic property of the next item,
and the box topology has no such property.

## Remarks

- **Where the two topologies actually differ.** The box topology is finer than
  the product topology by construction, since $\mathcal{R}^{\Pi} \subseteq
  \mathcal{R}$. They agree whenever $I$ is finite; and, assuming the Axiom of Choice, for a
  family of **nonempty** spaces they differ for infinite $I$ as soon as infinitely
  many factors have a nonempty proper open subset. Nonemptiness is not decoration: if one factor is
  empty then the product is empty and carries exactly one topology, so the two
  agree however the other factors are chosen. Both statements are proved two items
  below, with that hypothesis, and the failure is recorded on this page as a false
  statement.

- **The product set is a set of functions, and that is not a technicality.** The
  factors are indexed by an arbitrary set, so there is no "list" to write down;
  writing $x = (x_i)_{i \in I}$ is notation for the function $x$. The finite case
  recovers the familiar tuple, and the identification of $\prod_{k<n}\mathbb{R}$
  with the $\mathbb{R}^n$ of [[lem-metrics-on-rn]] is literal, that item defining
  $\mathbb{R}^n$ as the set of functions $n \to \mathbb{R}$.

- **The projections carry no hypothesis.** They are defined for every product,
  including the empty one and products with an empty factor; what does need a
  hypothesis is their *surjectivity*, which is the point at which choice enters
  and which is stated separately in the next item.
````

### `def-t0-and-t1-spaces`

````markdown
---
id: def-t0-and-t1-spaces
kind: definition
title: "$T_0$ (Kolmogorov) and $T_1$ (Frechet) spaces"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-topological-space, def-neighbourhood-top, def-interior-closure-boundary-top,
       def-standard-topologies]
justified_by: []
aliases: [def-t0-space, def-t1-space, def-kolmogorov-space, def-frechet-space]
landmark: true
short: "$T_0$ and $T_1$ spaces"
verification:
  precheck: n/a
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Kolmogorov space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Kolmogorov_space"
    - title: "T1 space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/T1_space"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
    - title: "J. Munkres, Topology, 2nd ed., §17"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

- $X$ is **$T_0$**, or a **Kolmogorov space**, when any two distinct points are
  *topologically distinguishable*: for all $x, y \in X$ with $x \ne y$ there is
  an open set containing exactly one of $x$ and $y$.
- $X$ is **$T_1$**, or a **Frechet space**, when each of any two distinct points
  has an open set containing it and missing the other: for all $x, y \in X$ with
  $x \ne y$ there are $U, V \in \mathcal{T}$ with

$$x \in U, \quad y \notin U, \qquad y \in V, \quad x \notin V .$$

Nothing is asserted about a pair of equal points, so a space with at most one
point satisfies both conditions vacuously.

Since an open set containing a point is an open neighbourhood of it
([[def-neighbourhood-top]]), both conditions may be read with "open
neighbourhood" in place of "open set"; and by the same equivalence recorded in
[[def-neighbourhood-top]] they may be read with arbitrary neighbourhoods, since
a neighbourhood of $x$ contains an open one and an open neighbourhood is a
neighbourhood.

**Every $T_1$ space is $T_0$, and this is discharged here** rather than left to
the reader, because it is the bottom arrow of the whole hierarchy on this page.
Let $x \ne y$ and take $U, V$ as in the $T_1$ condition. Then $U$ is an open set
containing $x$ and not $y$, so it contains exactly one of the two points, which
is the $T_0$ condition. Only the first half of the $T_1$ condition is used, so
the implication does not reverse formally, and it does not reverse in fact:
Sierpinski space is a witness, recorded on the companion page.

**The two conditions differ exactly in symmetry.** $T_0$ asks for *one* open set
that tells the pair apart, with no control over which of the two it contains;
$T_1$ asks for *both* separations at once. In Sierpinski space
$(\{a,b\}, \{\varnothing, \{b\}, \{a,b\}\})$ of [[def-standard-topologies]] the
open set $\{b\}$ contains $b$ and not $a$, so the space is $T_0$; but the only
open set containing $a$ is the whole space, which also contains $b$, so it is
not $T_1$.

**Neither condition is a property of a set alone.** Both are properties of the
pair $(X, \mathcal{T})$, and both are inherited upwards along the comparison
order of [[def-topological-space]]: if $\mathcal{T}_1 \subseteq \mathcal{T}_2$
and $(X,\mathcal{T}_1)$ is $T_0$, respectively $T_1$, then so is
$(X,\mathcal{T}_2)$, since the separating open sets of the coarser topology lie
in the finer one. In particular the discrete topology satisfies both, and the
indiscrete topology on a set with at least two points satisfies neither.

## Remarks

- **The names.** The numbering $T_0, T_1, T_2, \dots$ is Alexandroff and Hopf's
  *Trennungsaxiome*; the individual names honour Kolmogorov and Frechet. This
  page fixes each axiom by its condition and treats the numeral as an
  abbreviation, because the numerals above $T_3$ are used inconsistently in the
  literature ([[rem-separation-axiom-conventions]]).

- **What $T_1$ says about closures.** $T_1$ is equivalent to the closedness of
  every singleton, and hence to $\overline{\{x\}} = \{x\}$ for every point
  ([[def-interior-closure-boundary-top]]); that equivalence is the next item and
  is a theorem, not a restatement. The corresponding characterisation of $T_0$,
  that distinct points have distinct closures, is not needed on this page and is
  not proved here.

- **No separation is built into the word *space*.** [[def-topological-space]]
  assumes none; every separation property on this page is a hypothesis written
  out where it is used.
````

### `thm-product-universal-property`

````markdown
---
id: thm-product-universal-property
kind: theorem
title: "A map into a product is continuous iff each of its components is; the projections are continuous and open; and each projection is surjective when every factor is nonempty, which for an infinite index set uses the Axiom of Choice"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-product-topology, thm-initial-and-final-characteristic-properties,
       def-initial-and-final-topology, def-continuous-map-top,
       def-homeomorphism-and-open-maps, def-axiom-of-choice, def-choice-function,
       lem-finite-choice, def-topological-space, def-topology-basis-subbasis]
justified_by: []
aliases: []
landmark: true
short: "universal property of the product; projections are open"
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
    - title: "Product topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Product_topology"
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
    - title: "J. Munkres, Topology, 2nd ed., §19"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $(X_i, \mathcal{T}_i)_{i \in I}$ be topological spaces and let
$P := \prod_{i \in I} X_i$ carry the product topology, with projections $\pi_j$
([[def-product-topology]]). Then:

1. **The projections are continuous**, and the product topology is the coarsest
   topology on $P$ making all of them continuous.
2. **Characteristic property.** For every space $Z$ and every function
   $h : Z \to P$,
   $$h \text{ is continuous } \iff \pi_i \circ h \text{ is continuous for every } i \in I .$$
   The functions $\pi_i \circ h$ are the **components** of $h$, and every family
   of functions $h_i : Z \to X_i$ arises from exactly one $h$, namely
   $h(z)(i) := h_i(z)$.
3. **The projections are open maps** ([[def-homeomorphism-and-open-maps]]), for
   the product topology and for the box topology alike. They need not be closed;
   that failure is recorded on this page as a false statement.
4. **Surjectivity.** If every $X_i$ is nonempty then every $\pi_j$ is surjective.
   For $I$ a natural number this is a theorem of ZF ([[lem-finite-choice]]); for
   an arbitrary $I$ it is the Axiom of Choice ([[def-axiom-of-choice]]), and this
   is the only place in the item where a choice principle is used.

## Facts & Assumptions

**Given:** Topological spaces $(X_i,\mathcal{T}_i)_{i \in I}$, the product $P = \prod_{i \in I} X_i$ with the product topology and the projections $\pi_j(x) = x_j$, a space $Z$ and a function $h : Z \to P$, and an index $j \in I$.

[A1] The product topology on $P$ is the initial topology of $(\pi_i)_{i \in I}$, and a basis for it is the family of boxes $\prod_i U_i$ with every $U_i$ open and $U_i = X_i$ for all but finitely many $i$; a basis for the box topology is the family of all boxes $\prod_i U_i$ with every $U_i$ open ([[def-product-topology]], [[def-topology-basis-subbasis]]).

[A2] $f$ is an open map when $f[U]$ is open in the target for every open $U$ in the source ([[def-homeomorphism-and-open-maps]]).

[L1] For a topology given as an initial topology of a family $(f_i)$: each $f_i$ is continuous, the topology is the coarsest with that property, and a map $h$ into it is continuous exactly when every $f_i \circ h$ is ([[thm-initial-and-final-characteristic-properties]], claims 1 and 2; [[def-initial-and-final-topology]], [[def-continuous-map-top]]).

[L2] If $F$ is a function with domain a natural number $n$ whose values are nonempty sets, then the family of its values has a choice function ([[lem-finite-choice]], [[def-choice-function]]).

[L3] If every member of a family of sets is nonempty then the product of the family is nonempty; this is the Axiom of Choice ([[def-axiom-of-choice]], [[def-choice-function]]).

[L4] The image of a union is the union of the images, and an arbitrary union of open sets is open ([[def-topological-space]]).

## Proof

**Proof technique:** direct.

1.1 By [A1] the product topology is an initial topology, so [L1] gives claim 1 and claim 2 at once, the defining family being $(\pi_i)_{i \in I}$. [A1, L1]

1.2 For a family of functions $h_i : Z \to X_i$ the assignment $h(z)(i) := h_i(z)$ defines a function $Z \to P$, since $h(z)$ has domain $I$ and $h(z)(i) = h_i(z) \in X_i$; it satisfies $\pi_i \circ h = h_i$, and any $h'$ with $\pi_i \circ h' = h_i$ for every $i$ satisfies $h'(z)(i) = h_i(z) = h(z)(i)$ for all $z$ and $i$, hence $h' = h$. [given]

1.3 Let $B = \prod_i U_i$ be a box with every $U_i$ open. If $B = \varnothing$ then $\pi_j[B] = \varnothing$. If $B \ne \varnothing$, fix $b \in B$; then $\pi_j[B] = U_j$, since $\pi_j[B] \subseteq U_j$ by definition, and for $u \in U_j$ the function $y$ with $y_j := u$ and $y_i := b_i$ for $i \ne j$ lies in $B$ and has $\pi_j(y) = u$. [A1, choose]

1.4 Assume every $X_i$ is nonempty and $I$ is a natural number $n$. By [L2] applied to $i \mapsto X_i$ there is a choice function $g$ for the family of values, and $x(i) := g(X_i)$ defines a point of $P$; so $P \ne \varnothing$. [L2]

1.5 Assume every $X_i$ is nonempty and $I$ is arbitrary. By [L3] the product $P$ is nonempty. [L3]

2.1 Both the box topology and the product topology have a basis consisting of boxes, by [A1], and the image of a union of basic sets is the union of their images; so by step 1.3 the image under $\pi_j$ of any open set of either topology is a union of sets each of which is $\varnothing$ or an open $U_j \subseteq X_j$, hence open. This is claim 3. [step 1.3, A1, A2, L4]

2.2 Assume every $X_i$ is nonempty and let $t \in X_j$. By step 1.4 when $I$ is a natural number, and by step 1.5 in general, there is a point $p \in P$; the function $y$ with $y_j := t$ and $y_i := p_i$ for $i \ne j$ then lies in $P$ and satisfies $\pi_j(y) = t$. So $\pi_j$ is surjective, which is claim 4. [step 1.4, step 1.5]

3.1 Step 1.1 gives claims 1 and 2, step 1.2 gives the bijection between maps into $P$ and families of component maps, step 2.1 gives claim 3 and step 2.2 gives claim 4. [step 1.1, step 1.2, step 2.1, step 2.2] ∎

## Remarks

- **Exactly where choice is spent, and where it is not.** Openness of the
  projections (claim 3) is choice free: step 1.3 uses a *single* point of the box
  in question, which is given by the assumption that the box is nonempty, and
  builds the required preimage from it by changing one coordinate. Surjectivity
  (claim 4) is different, because there the point has to be produced from nothing
  but nonemptiness of the factors, and for an infinite index set that is the
  Axiom of Choice itself.

- **The characteristic property is what makes the product topology the right
  one.** The box topology has no analogue of claim 2: a map into a box-topologised
  product may have all components continuous and fail to be continuous, and the
  companion page exhibits the diagonal of $\mathbb{R}^{\mathbb{N}}$ doing exactly
  that.

- **Openness does not survive to closedness.** A projection is always open and is
  in general not closed, and the standard witness, the hyperbola in
  $\mathbb{R}^2$, is worked in the false statement on this page. There is no
  asymmetry of taste here: images of open boxes are computed coordinatewise,
  while a closed set of the product need not be a union of closed boxes at all.
````

