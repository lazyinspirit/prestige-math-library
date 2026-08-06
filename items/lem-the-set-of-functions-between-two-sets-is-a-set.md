---
id: lem-the-set-of-functions-between-two-sets-is-a-set
kind: lemma
title: "For sets $A$ and $B$ the collection of all functions $A \\to B$ is a set, being a subset of $\\mathcal{P}(A \\times B)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-function, def-cartesian-product, def-power-set, def-axiom-schema-of-separation, def-subset-and-proper-subset, lem-a-relation-is-included-in-the-product-of-its-domain-and-range]
justified_by: []
aliases: []
landmark: false
short: "the function set is a set"
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
    - title: "B. Kaya, MATH 320 Set Theory (METU), §2.2"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Function (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Function_(mathematics)"
    - title: "Power set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Power_set"
pipeline_run: null
---

## Statement

Let $A$ and $B$ be sets. Then there is a set whose elements are exactly the
functions $f : A \to B$, and it is a subset of $\mathcal{P}(A \times B)$.

## Facts & Assumptions

**Given:** sets $A$ and $B$.

[L1] We write $f : A \to B$, and say $f$ is a **function from $A$ to $B$**, when $f$ is a function with $\operatorname{dom} f = A$ and $\operatorname{ran} f \subseteq B$ ([[def-function]]).

[L2] For a relation $R$, $R \subseteq A \times B$ if and only if $\operatorname{dom} R \subseteq A$ and $\operatorname{ran} R \subseteq B$ ([[lem-a-relation-is-included-in-the-product-of-its-domain-and-range]]).

[L3] $z \in \mathcal{P}(x)$ holds if and only if $z \subseteq x$ ([[def-power-set]]).

[L4] For any parameters $\bar p$ and any set $x$, there is a set $y$ whose elements are exactly the elements $z$ of $x$ for which $\varphi(z,\bar p)$ holds ([[def-axiom-schema-of-separation]]).

[L5] $x \subseteq y$ means that every element of $x$ is an element of $y$ ([[def-subset-and-proper-subset]]).

[L6] $z \in A \times B$ holds if and only if $z = (a,b)$ for some $a \in A$ and some $b \in B$ ([[def-cartesian-product]]).

## Proof

**Proof technique:** direct.

1.1 A function $f : A \to B$ is a relation with $\operatorname{dom} f = A$ and $\operatorname{ran} f \subseteq B$, so $f \subseteq A \times B$ and therefore $f \in \mathcal{P}(A \times B)$. [L1, L2, L3, L5, L6]

2.1 Separating inside $\mathcal{P}(A \times B)$ with the formula saying that $z$ is a function and $\operatorname{dom} z = A$, with parameters $A$ and $B$, gives a set whose elements are exactly those elements of $\mathcal{P}(A \times B)$ that are functions $A \to B$; by step 1.1 every function $A \to B$ is such an element, so that set has exactly the intended elements and is included in $\mathcal{P}(A \times B)$. [L1, L3, L4, L5, step 1.1] ∎
