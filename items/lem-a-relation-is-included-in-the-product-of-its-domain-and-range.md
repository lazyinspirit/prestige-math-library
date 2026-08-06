---
id: lem-a-relation-is-included-in-the-product-of-its-domain-and-range
kind: lemma
title: "Every relation $R$ satisfies $R \\subseteq \\operatorname{dom} R \\times \\operatorname{ran} R$, and $R$ is a relation from $A$ to $B$ if and only if $\\operatorname{dom} R \\subseteq A$ and $\\operatorname{ran} R \\subseteq B$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-relation-domain-range-and-field, def-cartesian-product, def-subset-and-proper-subset, thm-the-characterising-property-of-ordered-pairs]
justified_by: []
aliases: []
landmark: false
short: "a relation sits in dom times ran"
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
    - title: "B. Kaya, MATH 320 Set Theory (METU), §2.1"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Binary relation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Binary_relation"
    - title: "Cartesian product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cartesian_product"
pipeline_run: null
---

## Statement

Let $R$ be a relation and let $A$ and $B$ be sets. Then

- (i) $R \subseteq \operatorname{dom} R \times \operatorname{ran} R$;
- (ii) $R \subseteq A \times B$ if and only if $\operatorname{dom} R \subseteq A$ and $\operatorname{ran} R \subseteq B$.

## Facts & Assumptions

**Given:** a relation $R$ and sets $A$, $B$.

[L1] A **relation** is a set $R$ every element of which is an ordered pair ([[def-relation-domain-range-and-field]]).

[L2] $\operatorname{dom} R := \{\, a : \exists b\ (a,b) \in R \,\}, \qquad \operatorname{ran} R := \{\, b : \exists a\ (a,b) \in R \,\}$ ([[def-relation-domain-range-and-field]]).

[L3] $z \in A \times B$ holds if and only if $z = (a,b)$ for some $a \in A$ and some $b \in B$ ([[def-cartesian-product]]).

[L4] $(a,b) = (c,d)$ if and only if $a = c$ and $b = d$ ([[thm-the-characterising-property-of-ordered-pairs]]).

[L5] $x \subseteq y$ means that every element of $x$ is an element of $y$ ([[def-subset-and-proper-subset]]).

## Proof

**Proof technique:** direct.

1.1 Claim (i): let $z \in R$. Since $R$ is a relation, $z = (a,b)$ for some sets $a$ and $b$; then $a \in \operatorname{dom} R$ and $b \in \operatorname{ran} R$ by the defining conditions, so $z \in \operatorname{dom} R \times \operatorname{ran} R$. [L1, L2, L3, L5]

1.2 Claim (ii), from left to right: assume $R \subseteq A \times B$. If $a \in \operatorname{dom} R$ then $(a,b) \in R$ for some $b$, so $(a,b) \in A \times B$, so $(a,b) = (a',b')$ with $a' \in A$ and $b' \in B$, and the characterising property gives $a = a' \in A$. The argument for $\operatorname{ran} R \subseteq B$ is the same on the second coordinate. [L2, L3, L4, L5]

1.3 Claim (ii), from right to left: assume $\operatorname{dom} R \subseteq A$ and $\operatorname{ran} R \subseteq B$, and let $z \in R$. Then $z = (a,b)$ with $a \in \operatorname{dom} R \subseteq A$ and $b \in \operatorname{ran} R \subseteq B$, so $z \in A \times B$. [L1, L2, L3, L5]

2.1 Claims (i) and (ii) are established, which is the statement. [step 1.1, step 1.2, step 1.3] ∎
