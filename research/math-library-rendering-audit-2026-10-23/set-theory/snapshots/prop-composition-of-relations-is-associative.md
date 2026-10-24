---
id: prop-composition-of-relations-is-associative
kind: proposition
title: "$T \\circ (S \\circ R) = (T \\circ S) \\circ R$, $(S \\circ R)^{-1} = R^{-1} \\circ S^{-1}$, $(R^{-1})^{-1} = R$, $\\operatorname{dom}(R^{-1}) = \\operatorname{ran} R$, and $\\Delta_B \\circ R = R = R \\circ \\Delta_A$ for a relation $R$ from $A$ to $B$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-inverse-relation-composition-and-restriction, def-relation-domain-range-and-field, def-the-identity-and-membership-relations-on-a-set, def-ordered-pair, thm-the-characterising-property-of-ordered-pairs, def-axiom-of-extensionality, lem-a-relation-is-included-in-the-product-of-its-domain-and-range]
justified_by: []
aliases: []
landmark: false
short: "composition laws for relations"
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
    - title: "B. Kaya, MATH 320 Set Theory (METU), Exercises 7 and 8"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Composition of relations (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Composition_of_relations"
    - title: "Binary relation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Binary_relation"
pipeline_run: null
---

## Statement

Let $R$, $S$, $T$ be relations and let $A$, $B$ be sets. Then

- (i) $T \circ (S \circ R) = (T \circ S) \circ R$;
- (ii) $(S \circ R)^{-1} = R^{-1} \circ S^{-1}$;
- (iii) $(R^{-1})^{-1} = R$;
- (iv) $\operatorname{dom}(R^{-1}) = \operatorname{ran} R$ and $\operatorname{ran}(R^{-1}) = \operatorname{dom} R$;
- (v) if $R$ is a relation from $A$ to $B$, then $\Delta_B \circ R = R$ and $R \circ \Delta_A = R$.

## Facts & Assumptions

**Given:** relations $R$, $S$, $T$ and sets $A$, $B$.

[L1] $(b,a) \in R^{-1}$ holds if and only if $(a,b) \in R$; $(a,c) \in S \circ R$ holds if and only if $(a,b) \in R$ and $(b,c) \in S$ for some $b$ ([[def-inverse-relation-composition-and-restriction]]).

[L2] A **relation** is a set $R$ every element of which is an ordered pair ([[def-relation-domain-range-and-field]]).

[L3] $\operatorname{dom} R := \{\, a : \exists b\ (a,b) \in R \,\}, \qquad \operatorname{ran} R := \{\, b : \exists a\ (a,b) \in R \,\}$ ([[def-relation-domain-range-and-field]]).

[L4] $(a,b) \in \Delta_A$ holds if and only if $a = b$ and $a \in A$ ([[def-the-identity-and-membership-relations-on-a-set]]).

[L5] $(a,b) = (c,d)$ if and only if $a = c$ and $b = d$ ([[thm-the-characterising-property-of-ordered-pairs]]).

[L6] If every $z$ satisfies $z \in x$ if and only if $z \in y$, then $x = y$ ([[def-axiom-of-extensionality]]).

[L7] $R \subseteq A \times B$ if and only if $\operatorname{dom} R \subseteq A$ and $\operatorname{ran} R \subseteq B$ ([[lem-a-relation-is-included-in-the-product-of-its-domain-and-range]]).

[L8] $(a,b) := \{\{a\},\{a,b\}\}$ ([[def-ordered-pair]]).

## Proof

**Proof technique:** direct.

1.1 Claim (i): every element of either side is an ordered pair, and $(a,d)$ lies in $T \circ (S \circ R)$ exactly when there is $c$ with $(a,c) \in S \circ R$ and $(c,d) \in T$, that is, exactly when there are $b$ and $c$ with $(a,b) \in R$, $(b,c) \in S$ and $(c,d) \in T$. Reading the same condition with the middle pair grouped the other way gives membership in $(T \circ S) \circ R$. [L1, L2, L5, L6, L8]

1.2 Claim (ii): $(c,a) \in (S \circ R)^{-1}$ exactly when $(a,c) \in S \circ R$, that is, exactly when there is $b$ with $(a,b) \in R$ and $(b,c) \in S$; and that says exactly that $(c,b) \in S^{-1}$ and $(b,a) \in R^{-1}$ for some $b$, which is $(c,a) \in R^{-1} \circ S^{-1}$. [L1, L2, L5, L6, L8]

1.3 Claim (iii): every element of $R$ is an ordered pair $(a,b)$, and $(a,b) \in (R^{-1})^{-1}$ exactly when $(b,a) \in R^{-1}$, exactly when $(a,b) \in R$; both sides consist of ordered pairs, so they are equal. [L1, L2, L5, L6, L8]

1.4 Claim (iv): $a \in \operatorname{dom}(R^{-1})$ exactly when $(a,b) \in R^{-1}$ for some $b$, exactly when $(b,a) \in R$ for some $b$, exactly when $a \in \operatorname{ran} R$; the second identity is the same argument with the coordinates exchanged. [L1, L3, L6]

2.1 Claim (v): let $R$ be a relation from $A$ to $B$, so $\operatorname{dom} R \subseteq A$ and $\operatorname{ran} R \subseteq B$. Then $(a,c) \in \Delta_B \circ R$ exactly when there is $b$ with $(a,b) \in R$ and $b = c \in B$, that is, exactly when $(a,c) \in R$ and $c \in B$; and $(a,c) \in R$ already forces $c \in \operatorname{ran} R \subseteq B$, so the two sets are equal. Symmetrically $(a,c) \in R \circ \Delta_A$ exactly when $a \in A$ and $(a,c) \in R$, and $(a,c) \in R$ forces $a \in \operatorname{dom} R \subseteq A$. [L1, L3, L4, L6, L7, step 1.4]

3.1 Claims (i) to (v) are established, which is the statement. [step 1.1, step 1.2, step 1.3, step 1.4, step 2.1] ∎
