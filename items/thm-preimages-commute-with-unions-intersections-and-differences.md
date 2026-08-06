---
id: thm-preimages-commute-with-unions-intersections-and-differences
kind: theorem
title: "For $f : A \\to B$ and $T, U \\subseteq B$: $f^{-1}[T \\cup U] = f^{-1}[T] \\cup f^{-1}[U]$, $f^{-1}[T \\cap U] = f^{-1}[T] \\cap f^{-1}[U]$, $f^{-1}[T \\setminus U] = f^{-1}[T] \\setminus f^{-1}[U]$, and $f^{-1}[B \\setminus T] = A \\setminus f^{-1}[T]$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-function, def-image-and-preimage-under-a-relation, lem-unions-and-intersections-of-small-families, def-set-difference-and-symmetric-difference, def-axiom-of-extensionality, def-relation-domain-range-and-field, def-subset-and-proper-subset]
justified_by: []
aliases: []
landmark: false
short: "preimages commute with everything"
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
    - title: "Image (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Image_(mathematics)"
    - title: "B. Kaya, MATH 320 Set Theory (METU), §2.2"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Algebra of sets (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Algebra_of_sets"
pipeline_run: null
---

## Statement

Let $f : A \to B$ and let $T, U \subseteq B$. Then

$$f^{-1}[T \cup U] = f^{-1}[T] \cup f^{-1}[U], \qquad f^{-1}[T \cap U] = f^{-1}[T] \cap f^{-1}[U],$$

$$f^{-1}[T \setminus U] = f^{-1}[T] \setminus f^{-1}[U], \qquad f^{-1}[B \setminus T] = A \setminus f^{-1}[T].$$

## Facts & Assumptions

**Given:** a function $f : A \to B$ and subsets $T, U$ of $B$.

[L1] $a \in R^{-1}[B]$ holds if and only if $(a,b) \in R$ for some $b \in B$ ([[def-image-and-preimage-under-a-relation]]).

[L2] We write $f : A \to B$, and say $f$ is a **function from $A$ to $B$**, when $f$ is a function with $\operatorname{dom} f = A$ and $\operatorname{ran} f \subseteq B$ ([[def-function]]).

[L3] $z \in a \cup b$ holds if and only if $z \in a$ or $z \in b$ ([[lem-unions-and-intersections-of-small-families]]).

[L4] $z \in a \cap b$ holds if and only if $z \in a$ and $z \in b$ ([[lem-unions-and-intersections-of-small-families]]).

[L5] $z \in a \setminus b$ holds exactly when $z \in a$ and $z \notin b$ ([[def-set-difference-and-symmetric-difference]]).

[L6] If every $z$ satisfies $z \in x$ if and only if $z \in y$, then $x = y$ ([[def-axiom-of-extensionality]]).

[L7] $\operatorname{dom} R := \{\, a : \exists b\ (a,b) \in R \,\}$ ([[def-relation-domain-range-and-field]]).

[L8] $x \subseteq y$ means that every element of $x$ is an element of $y$ ([[def-subset-and-proper-subset]]).

## Proof

**Proof technique:** direct.

1.1 Membership criterion: for any $S \subseteq B$, $a \in f^{-1}[S]$ holds exactly when $a \in A$ and $f(a) \in S$. Indeed $a \in f^{-1}[S]$ says $(a,b) \in f$ for some $b \in S$, and $(a,b) \in f$ says $a \in \operatorname{dom} f = A$ and $b = f(a)$. [L1, L2, L7, L8]

2.1 First identity: $a \in f^{-1}[T \cup U]$ exactly when $a \in A$ and $f(a) \in T$ or $f(a) \in U$, which is exactly $a \in f^{-1}[T]$ or $a \in f^{-1}[U]$. [L3, L6, step 1.1]

2.2 Second identity: $a \in f^{-1}[T \cap U]$ exactly when $a \in A$ and $f(a)$ lies in both $T$ and $U$, which is exactly $a \in f^{-1}[T]$ and $a \in f^{-1}[U]$. [L4, L6, step 1.1]

2.3 Third identity: $a \in f^{-1}[T \setminus U]$ exactly when $a \in A$, $f(a) \in T$ and $f(a) \notin U$; the last two conditions say $a \in f^{-1}[T]$ and $a \notin f^{-1}[U]$, since for $a \in A$ membership in $f^{-1}[U]$ is exactly $f(a) \in U$. [L5, L6, step 1.1]

2.4 Fourth identity: $a \in f^{-1}[B \setminus T]$ exactly when $a \in A$, $f(a) \in B$ and $f(a) \notin T$; the condition $f(a) \in B$ is automatic because $\operatorname{ran} f \subseteq B$, so this says $a \in A$ and $a \notin f^{-1}[T]$. [L2, L5, L6, step 1.1]

3.1 The four identities are established, which is the statement. [step 2.1, step 2.2, step 2.3, step 2.4] ∎
