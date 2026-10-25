---
id: prop-images-and-preimages-under-a-relation-and-set-operations
kind: proposition
title: "$R[A \\cup B] = R[A] \\cup R[B]$, $R[A \\cap B] \\subseteq R[A] \\cap R[B]$, $R[A] \\setminus R[B] \\subseteq R[A \\setminus B]$, $A \\subseteq B$ implies $R[A] \\subseteq R[B]$, and $(S \\circ R)[A] = S[R[A]]$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-image-and-preimage-under-a-relation, def-inverse-relation-composition-and-restriction, lem-unions-and-intersections-of-small-families, def-set-difference-and-symmetric-difference, def-subset-and-proper-subset, def-axiom-of-extensionality, def-relation-domain-range-and-field]
justified_by: []
aliases: []
landmark: false
short: "images and set operations"
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
    - title: "B. Kaya, MATH 320 Set Theory (METU), Def. 7 and Lemma 2"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Image (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Image_(mathematics)"
    - title: "Composition of relations (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Composition_of_relations"
pipeline_run: null
---

## Statement

Let $R$ and $S$ be relations and $A$, $B$ sets. Then

- (i) $R[A \cup B] = R[A] \cup R[B]$;
- (ii) $R[A \cap B] \subseteq R[A] \cap R[B]$;
- (iii) $R[A] \setminus R[B] \subseteq R[A \setminus B]$;
- (iv) if $A \subseteq B$ then $R[A] \subseteq R[B]$;
- (v) $(S \circ R)[A] = S[R[A]]$.

## Facts & Assumptions

**Given:** relations $R$ and $S$ and sets $A$, $B$.

[L1] $b \in R[A]$ holds if and only if $(a,b) \in R$ for some $a \in A$ ([[def-image-and-preimage-under-a-relation]]).

[L2] $(a,c) \in S \circ R$ holds if and only if $(a,b) \in R$ and $(b,c) \in S$ for some $b$ ([[def-inverse-relation-composition-and-restriction]]).

[L3] $z \in a \cup b$ holds if and only if $z \in a$ or $z \in b$ ([[lem-unions-and-intersections-of-small-families]]).

[L4] $z \in a \cap b$ holds if and only if $z \in a$ and $z \in b$ ([[lem-unions-and-intersections-of-small-families]]).

[L5] $z \in a \setminus b$ holds exactly when $z \in a$ and $z \notin b$ ([[def-set-difference-and-symmetric-difference]]).

[L6] $x \subseteq y$ means that every element of $x$ is an element of $y$ ([[def-subset-and-proper-subset]]).

[L7] If every $z$ satisfies $z \in x$ if and only if $z \in y$, then $x = y$ ([[def-axiom-of-extensionality]]).

[L8] A **relation** is a set $R$ every element of which is an ordered pair ([[def-relation-domain-range-and-field]]).

## Proof

**Proof technique:** direct.

1.1 Claim (i): $c \in R[A \cup B]$ exactly when $(a,c) \in R$ for some $a$ with $a \in A$ or $a \in B$; that is exactly when $(a,c) \in R$ for some $a \in A$, or $(a,c) \in R$ for some $a \in B$, which is $c \in R[A] \cup R[B]$. [L1, L3, L7]

1.2 Claim (ii): if $c \in R[A \cap B]$ then $(a,c) \in R$ for some $a$ lying in both $A$ and $B$; that same $a$ witnesses $c \in R[A]$ and $c \in R[B]$. [L1, L4, L6]

1.3 Claim (iii): if $c \in R[A] \setminus R[B]$ then $(a,c) \in R$ for some $a \in A$, and no element of $B$ is related to $c$; in particular that $a$ is not in $B$, so $a \in A \setminus B$ and $c \in R[A \setminus B]$. [L1, L5, L6]

1.4 Claim (iv): if $A \subseteq B$ and $c \in R[A]$ then $(a,c) \in R$ for some $a \in A$, and that $a$ lies in $B$. [L1, L6]

1.5 Claim (v): $c \in (S \circ R)[A]$ exactly when $(a,c) \in S \circ R$ for some $a \in A$, that is, exactly when there are $a \in A$ and $b$ with $(a,b) \in R$ and $(b,c) \in S$; and that says exactly that $(b,c) \in S$ for some $b \in R[A]$, which is $c \in S[R[A]]$. [L1, L2, L7, L8]

2.1 Claims (i) to (v) are established, which is the statement. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5] ∎
