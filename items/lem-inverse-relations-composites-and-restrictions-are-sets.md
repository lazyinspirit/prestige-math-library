---
id: lem-inverse-relations-composites-and-restrictions-are-sets
kind: lemma
title: "For relations $R$ and $S$ and a set $A$, the collections $\\{\\,(b,a) : (a,b) \\in R\\,\\}$, $\\{\\,(a,c) : \\exists b\\ ((a,b) \\in R \\wedge (b,c) \\in S)\\,\\}$ and $\\{\\,(a,b) \\in R : a \\in A\\,\\}$ are sets"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-relation-domain-range-and-field, def-cartesian-product, def-axiom-schema-of-separation, lem-a-relation-is-included-in-the-product-of-its-domain-and-range, def-ordered-pair, def-subset-and-proper-subset]
justified_by: []
aliases: []
landmark: false
short: "inverses, composites, restrictions are sets"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-06
    scope: page
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "B. Kaya, MATH 320 Set Theory (METU), Def. 9, Def. 12 and Def. 19"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Composition of relations (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Composition_of_relations"
    - title: "Binary relation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Binary_relation"
pipeline_run: null
---

## Statement

Let $R$ and $S$ be relations and $A$ a set. Then each of

$$\{\,(b,a) : (a,b) \in R\,\}, \qquad \{\,(a,c) : \exists b\ ((a,b) \in R \wedge (b,c) \in S)\,\}, \qquad \{\,(a,b) \in R : a \in A\,\}$$

is a set; the first is included in
$\operatorname{ran} R \times \operatorname{dom} R$, the second in
$\operatorname{dom} R \times \operatorname{ran} S$, and the third in $R$.

## Facts & Assumptions

**Given:** relations $R$ and $S$ and a set $A$.

[L1] A **relation** is a set $R$ every element of which is an ordered pair ([[def-relation-domain-range-and-field]]).

[L2] $\operatorname{dom} R := \{\, a : \exists b\ (a,b) \in R \,\}, \qquad \operatorname{ran} R := \{\, b : \exists a\ (a,b) \in R \,\}$ ([[def-relation-domain-range-and-field]]).

[L3] $z \in A \times B$ holds if and only if $z = (a,b)$ for some $a \in A$ and some $b \in B$ ([[def-cartesian-product]]).

[L4] For any parameters $\bar p$ and any set $x$, there is a set $y$ whose elements are exactly the elements $z$ of $x$ for which $\varphi(z,\bar p)$ holds ([[def-axiom-schema-of-separation]]).

[L5] $R \subseteq \operatorname{dom} R \times \operatorname{ran} R$ ([[lem-a-relation-is-included-in-the-product-of-its-domain-and-range]]).

[L6] $x \subseteq y$ means that every element of $x$ is an element of $y$ ([[def-subset-and-proper-subset]]).

[L7] $(a,b) := \{\{a\},\{a,b\}\}$ ([[def-ordered-pair]]).

## Proof

**Proof technique:** direct.

1.1 If $(a,b) \in R$ then $a \in \operatorname{dom} R$ and $b \in \operatorname{ran} R$, so $(b,a) \in \operatorname{ran} R \times \operatorname{dom} R$; separating inside that product with the formula $\exists a\,\exists b\,(z = (b,a) \wedge (a,b) \in R)$ and the parameter $R$ therefore yields exactly the first collection. [L2, L3, L4, L6, L7]

1.2 If $(a,b) \in R$ and $(b,c) \in S$ then $a \in \operatorname{dom} R$ and $c \in \operatorname{ran} S$, so $(a,c) \in \operatorname{dom} R \times \operatorname{ran} S$; separating inside that product with the formula $\exists a\,\exists c\,\bigl(z = (a,c) \wedge \exists b\,((a,b) \in R \wedge (b,c) \in S)\bigr)$ and the parameters $R$ and $S$ yields exactly the second collection. [L2, L3, L4, L6, L7]

1.3 The third collection consists of elements of $R$, and separating inside $R$ with the formula $\exists a\,\exists b\,(z = (a,b) \wedge a \in A)$ and the parameters $A$ and $R$ yields exactly it; every element of $R$ is an ordered pair, so the formula selects the intended pairs. [L1, L4, L5, L6, L7]

2.1 All three collections are therefore sets, with the stated inclusions. [step 1.1, step 1.2, step 1.3] ∎
