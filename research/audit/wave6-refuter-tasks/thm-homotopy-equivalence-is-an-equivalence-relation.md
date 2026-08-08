## Target item — `thm-homotopy-equivalence-is-an-equivalence-relation`

Normalized current SHA-256: `fca333e796b47e2a1711ec52ea8a9edf94cd43681dfb9ea664476203bc05712d`

The complete current item follows, including frontmatter:

````markdown
---
id: thm-homotopy-equivalence-is-an-equivalence-relation
kind: theorem
title: "Having the same homotopy type is an equivalence relation on topological spaces"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-homotopy-equivalence, thm-composition-respects-homotopy, cor-homotopy-relative-and-path-homotopy-are-equivalence-relations, def-equivalence-relation]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "A. Hatcher, Algebraic Topology, Section 0"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
pipeline_run: null
---

## Statement

The relation “has the same homotopy type as” is reflexive, symmetric and transitive on topological spaces, hence is an equivalence relation.

## Facts & Assumptions

**Given:** Topological spaces $X,Y,Z$ and homotopy equivalences $f:X\to Y$ and $p:Y\to Z$ with homotopy inverses $g:Y\to X$ and $q:Z\to Y$.

[A1] A homotopy equivalence has a continuous homotopy inverse whose two composites are homotopic to the appropriate identity maps ([[def-homotopy-equivalence]]).

[L1] Precomposition and postcomposition by continuous maps preserve homotopies ([[thm-composition-respects-homotopy]]).

[L2] Homotopy is symmetric and transitive ([[cor-homotopy-relative-and-path-homotopy-are-equivalence-relations]]).

[L3] A relation is an equivalence relation exactly when it is reflexive, symmetric and transitive ([[def-equivalence-relation]]).

## Proof

**Proof technique:** direct.

1.1 The identity $\operatorname{id}_X:X\to X$ is a homotopy equivalence with itself as homotopy inverse, since both composites equal, and hence are homotopic to, $\operatorname{id}_X$. [A1, L2]

1.2 If $f:X\to Y$ has homotopy inverse $g:Y\to X$, the same two homotopies show that $g$ has homotopy inverse $f$. Thus the relation is symmetric. [A1]

1.3 For transitivity, the composite $p\circ f:X\to Z$ has candidate homotopy inverse $g\circ q:Z\to X$. By [A1], $q\circ p\simeq\operatorname{id}_Y$ and $g\circ f\simeq\operatorname{id}_X$. [A1]

1.4 Similarly, $f\circ g\simeq\operatorname{id}_Y$ gives $p\circ(f\circ g)\circ q\simeq p\circ q$, and $p\circ q\simeq\operatorname{id}_Z$ then gives $(p\circ f)\circ(g\circ q)\simeq\operatorname{id}_Z$. [A1, L1, L2]

2.1 Applying [L1] to $q\circ p\simeq\operatorname{id}_Y$ gives $g\circ(q\circ p)\circ f\simeq g\circ f$, and [L2] with $g\circ f\simeq\operatorname{id}_X$ gives $(g\circ q)\circ(p\circ f)\simeq\operatorname{id}_X$. [step 1.3, L1, L2]

3.1 Steps 2.1 and 1.4 make $g\circ q$ a homotopy inverse of $p\circ f$, so the relation is transitive. With steps 1.1 and 1.2, [L3] makes it an equivalence relation. [step 1.1, step 1.2, step 2.1, step 1.4, A1, L3] ∎
````

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "A1",
      "source": "def-homotopy-equivalence",
      "source_section": "Definition",
      "quote": "The equations required of an ordinary inverse have been weakened to homotopies. Neither composite need equal the corresponding identity map, and a homotopy equivalence need not be bijective.",
      "uses": [
        "1.1",
        "1.2",
        "1.3",
        "1.4",
        "3.1"
      ]
    },
    {
      "fact": "L1",
      "source": "thm-composition-respects-homotopy",
      "source_section": "Statement",
      "quote": "Let $f,g:X\\to Y$ be continuous and suppose $f\\simeq_A g$ for a subspace $A\\subseteq X$. 1. If $u:W\\to X$ is continuous, $B\\subseteq W$, and $u[B]\\subseteq A$, then $f\\circ u\\simeq_B g\\circ u$. 2. If $v:Y\\to Z$ is continuous, then $v\\circ f\\simeq_A v\\circ g$.",
      "uses": [
        "1.4",
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "cor-homotopy-relative-and-path-homotopy-are-equivalence-relations",
      "source_section": "Statement",
      "quote": "For fixed spaces $X,Y$ and a fixed subspace $A\\subseteq X$, the relation $\\simeq_A$ is an equivalence relation on the set of continuous maps $X\\to Y$ that have a prescribed restriction to $A$. In particular ordinary homotopy is an equivalence relation on the continuous maps $X\\to Y$. For fixed endpoints $y_0,y_1\\in Y$, path homotopy relative to the endpoints is an equivalence relation on the set of paths from $y_0$ to $y_1$.",
      "uses": [
        "1.1",
        "1.4",
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-equivalence-relation",
      "source_section": "Definition",
      "quote": "A binary relation $\\sim$ on $A$ is an **equivalence relation** when it is reflexive on $A$, symmetric and transitive ([[def-properties-of-a-relation-on-a-set]]), that is, when it is - **reflexive**: $a \\sim a$ for every $a \\in A$; - **symmetric**: $a \\sim b$ implies $b \\sim a$, for all $a, b \\in A$; - **transitive**: $a \\sim b$ and $b \\sim c$ imply $a \\sim c$, for all $a, b, c \\in A$.",
      "uses": [
        "3.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "The identity $\\operatorname{id}_X:X\\to X$ is a homotopy equivalence with itself as homotopy inverse, since both composites equal, and hence are homotopic to, $\\operatorname{id}_X$. [A1, L2]",
      "step": "1.1",
      "inputs": [
        "A1",
        "L2"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "If $f:X\\to Y$ has homotopy inverse $g:Y\\to X$, the same two homotopies show that $g$ has homotopy inverse $f$. Thus the relation is symmetric. [A1]",
      "step": "1.2",
      "inputs": [
        "A1"
      ]
    },
    {
      "id": "step-1.3",
      "claim": "For transitivity, the composite $p\\circ f:X\\to Z$ has candidate homotopy inverse $g\\circ q:Z\\to X$. By [A1], $q\\circ p\\simeq\\operatorname{id}_Y$ and $g\\circ f\\simeq\\operatorname{id}_X$. [A1]",
      "step": "1.3",
      "inputs": [
        "A1"
      ]
    },
    {
      "id": "step-1.4",
      "claim": "Similarly, $f\\circ g\\simeq\\operatorname{id}_Y$ gives $p\\circ(f\\circ g)\\circ q\\simeq p\\circ q$, and $p\\circ q\\simeq\\operatorname{id}_Z$ then gives $(p\\circ f)\\circ(g\\circ q)\\simeq\\operatorname{id}_Z$. [A1, L1, L2]",
      "step": "1.4",
      "inputs": [
        "A1",
        "L1",
        "L2"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Applying [L1] to $q\\circ p\\simeq\\operatorname{id}_Y$ gives $g\\circ(q\\circ p)\\circ f\\simeq g\\circ f$, and [L2] with $g\\circ f\\simeq\\operatorname{id}_X$ gives $(g\\circ q)\\circ(p\\circ f)\\simeq\\operatorname{id}_X$. [step 1.3, L1, L2]",
      "step": "2.1",
      "inputs": [
        "L1",
        "L2",
        "1.3"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "Steps 2.1 and 1.4 make $g\\circ q$ a homotopy inverse of $p\\circ f$, so the relation is transitive. With steps 1.1 and 1.2, [L3] makes it an equivalence relation. [step 1.1, step 1.2, step 2.1, step 1.4, A1, L3] ∎",
      "step": "3.1",
      "inputs": [
        "2.1",
        "1.4",
        "1.1",
        "1.2",
        "L3",
        "A1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "statement and step 1.1: the empty-domain or empty-space instance is vacuous or formula-defined and selects no point"
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "no independently varying cardinal, dimension, norm, or scalar parameter has a separate zero case"
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "no independently varying cardinal, dimension, or index has a separate one case"
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "step 1.1 explicitly handles the identity-space and identity-map specialization"
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "steps 1.1 through 2.1 compose homotopies only through the endpoint-preserving composition theorem"
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "the proof uses only formula-defined maps, fixed quantified data, and cited implications; it selects from no asserted nonempty family"
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "the statement is not a biconditional"
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "the statement is not a biconditional"
    }
  ],
  "finite_smoke": []
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "thm-homotopy-equivalence-is-an-equivalence-relation",
    "sourcePage": "homotopy-and-homotopy-equivalence",
    "batch": "wave6-topology",
    "target": "def-homotopy-equivalence",
    "declared_target": "def-homotopy-equivalence",
    "target_statement_provenance": null,
    "targetPage": "homotopy-and-homotopy-equivalence",
    "targetBatch": "wave6-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-homotopy-equivalence-is-an-equivalence-relation",
    "sourcePage": "homotopy-and-homotopy-equivalence",
    "batch": "wave6-topology",
    "target": "thm-composition-respects-homotopy",
    "declared_target": "thm-composition-respects-homotopy",
    "target_statement_provenance": null,
    "targetPage": "homotopy-and-homotopy-equivalence",
    "targetBatch": "wave6-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-homotopy-equivalence-is-an-equivalence-relation",
    "sourcePage": "homotopy-and-homotopy-equivalence",
    "batch": "wave6-topology",
    "target": "cor-homotopy-relative-and-path-homotopy-are-equivalence-relations",
    "declared_target": "cor-homotopy-relative-and-path-homotopy-are-equivalence-relations",
    "target_statement_provenance": null,
    "targetPage": "homotopy-and-homotopy-equivalence",
    "targetBatch": "wave6-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-homotopy-equivalence-is-an-equivalence-relation",
    "sourcePage": "homotopy-and-homotopy-equivalence",
    "batch": "wave6-topology",
    "target": "def-equivalence-relation",
    "declared_target": "def-equivalence-relation",
    "target_statement_provenance": "ai-altered",
    "targetPage": "relations-functions-and-quotients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Full text of every cited or declared item (4)

### `cor-homotopy-relative-and-path-homotopy-are-equivalence-relations`

````markdown
---
id: cor-homotopy-relative-and-path-homotopy-are-equivalence-relations
kind: corollary
title: "Homotopy relative to a fixed subspace, and path homotopy relative to endpoints, are equivalence relations"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-homotopy-relative-and-path-homotopy, lem-homotopy-reflexive-and-symmetric, lem-homotopy-transitivity-by-reparametrisation, def-equivalence-relation]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "A. Hatcher, Algebraic Topology, Section 0"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
    - title: "Homotopy lecture notes (University of Padua)"
      url: "https://www.math.unipd.it/~maraston/Topologia2/Topo2_1011_homotopy.pdf"
pipeline_run: null
---

## Statement

For fixed spaces $X,Y$ and a fixed subspace $A\subseteq X$, the relation $\simeq_A$ is an equivalence relation on the set of continuous maps $X\to Y$ that have a prescribed restriction to $A$. In particular ordinary homotopy is an equivalence relation on the continuous maps $X\to Y$.

For fixed endpoints $y_0,y_1\in Y$, path homotopy relative to the endpoints is an equivalence relation on the set of paths from $y_0$ to $y_1$.

## Facts & Assumptions

**Given:** Spaces $X,Y$, a subspace $A\subseteq X$, and the relations defined in [[def-homotopy-relative-and-path-homotopy]].

[L1] Homotopy rel $A$ is reflexive and symmetric ([[lem-homotopy-reflexive-and-symmetric]]).

[L2] Homotopy rel $A$ is transitive by the two-piece reparametrisation construction ([[lem-homotopy-transitivity-by-reparametrisation]]).

[L3] A relation is an equivalence relation exactly when it is reflexive, symmetric and transitive ([[def-equivalence-relation]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], $\simeq_A$ is reflexive, symmetric and transitive, so it is an equivalence relation by [L3]. Taking $A=\varnothing$ gives ordinary homotopy. [L1, L2, L3]

2.1 Paths from $y_0$ to $y_1$ are continuous maps $I\to Y$ with one prescribed restriction to the subspace $\{0,1\}$, and their path homotopies are exactly homotopies rel $\{0,1\}$. Hence step 1.1 applies to them. [step 1.1, given] ∎
````

### `def-equivalence-relation`

````markdown
---
id: def-equivalence-relation
kind: definition
title: "Equivalence relation, equivalence class, and the quotient set $A/{\\sim}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-relation-domain-range-and-field, def-cartesian-product,
       def-properties-of-a-relation-on-a-set, def-power-set, def-function,
       def-axiom-schema-of-separation, def-injection-surjection-bijection]
justified_by: []
forward_refs: [lem-int-add-well-defined, lem-int-mul-well-defined,
               lem-rat-ops-well-defined, lem-int-equivalence, lem-rat-equivalence]
aliases: [def-equivalence-class, def-quotient-set]
landmark: false
short: "equivalence relation, class, quotient"
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
    - title: "Equivalence relation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Equivalence_relation"
    - title: "Equivalence class (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Equivalence_class"
    - title: "T. Tao, Analysis I, 3rd ed., §4.1 (the integers as a quotient)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Definition

A **binary relation** on a set $A$ is a subset $R \subseteq A \times A$
([[def-relation-domain-range-and-field]], [[def-cartesian-product]]); we write
$a \sim b$ for $(a,b) \in R$ and read it "$a$ is related to $b$".

A binary relation $\sim$ on $A$ is an **equivalence relation** when it is reflexive
on $A$, symmetric and transitive ([[def-properties-of-a-relation-on-a-set]]), that
is, when it is

- **reflexive**: $a \sim a$ for every $a \in A$;
- **symmetric**: $a \sim b$ implies $b \sim a$, for all $a, b \in A$;
- **transitive**: $a \sim b$ and $b \sim c$ imply $a \sim c$, for all
  $a, b, c \in A$.

Let $\sim$ be an equivalence relation on $A$. For $a \in A$, the **equivalence
class** of $a$ is the subset

$$[a] \;:=\; \{\, b \in A \;:\; a \sim b \,\} \;\subseteq\; A,$$

and any $b$ with $[b] = C$ is called a **representative** of the class $C$. The
**quotient set** is the set of all classes,

$$A/{\sim} \;:=\; \{\, [a] \;:\; a \in A \,\},$$

a subset of the power set of $A$ ([[def-power-set]]). The map
$\pi : A \to A/{\sim}$ ([[def-function]]) with $\pi(a) = [a]$ is the **quotient
map**; it is surjective by construction ([[def-injection-surjection-bijection]]).

## Remarks

- **What the classes look like** is the content of
  [[lem-equivalence-classes-partition]]: they are nonempty, they cover $A$, and
  any two of them are either equal or disjoint. That lemma also runs the
  converse, so "equivalence relation on $A$" and "partition of $A$" are two names
  for the same data.

- **Well-definedness.** A rule that assigns a value to $[a]$ by a formula in the
  representative $a$ defines a function on $A/{\sim}$ only if the value is the
  same for every representative, that is, only if $a \sim a'$ implies that the
  formula returns the same value at $a$ and at $a'$. The general statement of that
  obligation, with the uniqueness of the induced function, is
  [[thm-universal-property-of-the-quotient]]. The constructions of $\mathbb{Z}$
  and of $\mathbb{Q}$ discharge it for their own operations
  ([[lem-int-add-well-defined]], [[lem-int-mul-well-defined]],
  [[lem-rat-ops-well-defined]]).

- **Where the general notion is used.** The construction of $\mathbb{Z}$ verifies
  the three properties for the concrete relation
  $(a,b) \sim (c,d) \iff a + d = b + c$ ([[lem-int-equivalence]]), and the
  construction of $\mathbb{Q}$ does the same for its own relation
  ([[lem-rat-equivalence]]). Each of those items settles one relation and defines
  no general notion. Cosets, quotient groups, congruence classes and quotient
  rings are further instances of the definition given here.
````

### `def-homotopy-equivalence`

````markdown
---
id: def-homotopy-equivalence
kind: definition
title: "Homotopy equivalences, homotopy inverses and spaces of the same homotopy type"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-homotopy-relative-and-path-homotopy, def-continuous-map-top]
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "A. Hatcher, Algebraic Topology, Section 0"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
pipeline_run: null
---

## Definition

Let $X,Y$ be topological spaces. A continuous map $f:X\to Y$ is a **homotopy equivalence** if there is a continuous map $g:Y\to X$ such that

$$g\circ f\simeq\operatorname{id}_X\qquad\text{and}\qquad f\circ g\simeq\operatorname{id}_Y$$

in the sense of [[def-homotopy-relative-and-path-homotopy]]. Such a $g$ is a **homotopy inverse** of $f$.

The spaces $X$ and $Y$ have the **same homotopy type**, or are **homotopy equivalent**, written $X\simeq Y$, when a homotopy equivalence $X\to Y$ exists.

The equations required of an ordinary inverse have been weakened to homotopies. Neither composite need equal the corresponding identity map, and a homotopy equivalence need not be bijective.
````

### `thm-composition-respects-homotopy`

````markdown
---
id: thm-composition-respects-homotopy
kind: theorem
title: "Precomposition and postcomposition by continuous maps preserve homotopies, including their relative form"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-homotopy-relative-and-path-homotopy, thm-product-universal-property, thm-continuity-characterisations-top]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "A. Hatcher, Algebraic Topology, Section 0"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
    - title: "Algebraic Topology lecture notes (UC Riverside)"
      url: "https://math.ucr.edu/~jbergner/SPWM09.pdf"
pipeline_run: null
---

## Statement

Let $f,g:X\to Y$ be continuous and suppose $f\simeq_A g$ for a subspace $A\subseteq X$.

1. If $u:W\to X$ is continuous, $B\subseteq W$, and $u[B]\subseteq A$, then $f\circ u\simeq_B g\circ u$.
2. If $v:Y\to Z$ is continuous, then $v\circ f\simeq_A v\circ g$.

## Facts & Assumptions

**Given:** A homotopy $H:X\times I\to Y$ from $f$ to $g$ rel $A$, a continuous $u:W\to X$ with $u[B]\subseteq A$, and a continuous $v:Y\to Z$.

[A1] The endpoint and relative conditions are those of [[def-homotopy-relative-and-path-homotopy]].

[L1] Product projections are continuous, and a map into a product is continuous exactly when its components are continuous ([[thm-product-universal-property]]).

[L2] A map is continuous exactly when preimages of open sets are open ([[thm-continuity-characterisations-top]], condition (b)).

## Proof

**Proof technique:** direct.

1.1 Define $U:W\times I\to X\times I$ by $U(w,t)=(u(w),t)$. Its components are $u$ after the first projection and the second projection, so $U$ is continuous by [L1]. [L1]

1.2 The composite $v\circ H:X\times I\to Z$ is continuous by the same preimage calculation, and its endpoints are $v\circ f$ and $v\circ g$; for $a\in A$ it has the fixed value $v(f(a))=v(g(a))$. Thus it is a homotopy from $v\circ f$ to $v\circ g$ rel $A$. [A1, L2]

2.1 The composite $H\circ U$ is continuous: for every open $V\subseteq Y$, $(H\circ U)^{-1}[V]=U^{-1}[H^{-1}[V]]$ is open by [L2]. Its endpoints are $(f\circ u)(w)$ and $(g\circ u)(w)$; if $b\in B$, then $u(b)\in A$, so $(H\circ U)(b,t)=f(u(b))=g(u(b))$. Thus it is a homotopy from $f\circ u$ to $g\circ u$ rel $B$. [step 1.1, A1, L2]

3.1 Steps 2.1 and 1.2 prove the two claims. [step 2.1, step 1.2] ∎
````

