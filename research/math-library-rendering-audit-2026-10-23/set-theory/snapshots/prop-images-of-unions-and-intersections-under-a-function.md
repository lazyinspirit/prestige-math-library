---
id: prop-images-of-unions-and-intersections-under-a-function
kind: proposition
title: "For $f : A \\to B$ and $S, T \\subseteq A$: $f[S \\cup T] = f[S] \\cup f[T]$, $f[S \\cap T] \\subseteq f[S] \\cap f[T]$ and $f[S] \\setminus f[T] \\subseteq f[S \\setminus T]$; both inclusions are equalities for all $S$ and $T$ if and only if $f$ is injective"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-function, def-image-and-preimage-under-a-relation, def-injection-surjection-bijection, lem-unions-and-intersections-of-small-families, def-set-difference-and-symmetric-difference, def-axiom-of-extensionality, def-unordered-pair-and-singleton, def-subset-and-proper-subset, thm-the-empty-set-exists-and-is-unique]
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
    - title: "Image (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Image_(mathematics)"
    - title: "Bijection, injection and surjection (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bijection,_injection_and_surjection"
    - title: "B. Kaya, MATH 320 Set Theory (METU), §2.2"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
pipeline_run: null
---

## Statement

Let $f : A \to B$ and let $S, T \subseteq A$. Then

- (i) $f[S \cup T] = f[S] \cup f[T]$;
- (ii) $f[S \cap T] \subseteq f[S] \cap f[T]$;
- (iii) $f[S] \setminus f[T] \subseteq f[S \setminus T]$.

Moreover the inclusions in (ii) and (iii) are equalities for all
$S, T \subseteq A$ if and only if $f$ is injective.

## Facts & Assumptions

**Given:** a function $f : A \to B$ and subsets $S, T$ of $A$.

[L1] $b \in R[A]$ holds if and only if $(a,b) \in R$ for some $a \in A$ ([[def-image-and-preimage-under-a-relation]]).

[L2] We write $f : A \to B$, and say $f$ is a **function from $A$ to $B$**, when $f$ is a function with $\operatorname{dom} f = A$ and $\operatorname{ran} f \subseteq B$ ([[def-function]]).

[L3] $f$ is **injective** (one-to-one) if $f(x) = f(y)$ implies $x = y$, for all $x, y \in A$ ([[def-injection-surjection-bijection]]).

[L4] $z \in a \cup b$ holds if and only if $z \in a$ or $z \in b$ ([[lem-unions-and-intersections-of-small-families]]).

[L5] $z \in a \cap b$ holds if and only if $z \in a$ and $z \in b$ ([[lem-unions-and-intersections-of-small-families]]).

[L6] $z \in a \setminus b$ holds exactly when $z \in a$ and $z \notin b$ ([[def-set-difference-and-symmetric-difference]]).

[L7] If every $z$ satisfies $z \in x$ if and only if $z \in y$, then $x = y$ ([[def-axiom-of-extensionality]]).

[L8] $\{x\} := \{x,x\}$, the **singleton** of $x$, is the set whose only element is $x$ ([[def-unordered-pair-and-singleton]]).

[L9] $x \subseteq y$ means that every element of $x$ is an element of $y$ ([[def-subset-and-proper-subset]]).

[L10] There is exactly one set with no elements, written $\varnothing$ ([[thm-the-empty-set-exists-and-is-unique]]).

## Proof

**Proof technique:** direct.

1.1 Membership criterion: for $S \subseteq A$, $y \in f[S]$ holds exactly when $y = f(s)$ for some $s \in S$, since $(s,y) \in f$ with $s \in S \subseteq A$ says $y = f(s)$. [L1, L2, L9]

2.1 Claim (i): $y \in f[S \cup T]$ exactly when $y = f(x)$ for some $x$ lying in $S$ or in $T$, which is exactly $y \in f[S]$ or $y \in f[T]$. [L4, L7, step 1.1]

2.2 Claim (ii): if $y \in f[S \cap T]$ then $y = f(x)$ for some $x$ in both $S$ and $T$, so $y \in f[S]$ and $y \in f[T]$. [L5, L9, step 1.1]

2.3 Claim (iii): if $y \in f[S] \setminus f[T]$ then $y = f(s)$ for some $s \in S$, and no element of $T$ is sent to $y$; in particular $s \notin T$, so $s \in S \setminus T$ and $y \in f[S \setminus T]$. [L6, L9, step 1.1]

2.4 If $f$ is injective, both inclusions are equalities. For (ii): $y \in f[S] \cap f[T]$ gives $y = f(s) = f(t)$ with $s \in S$ and $t \in T$, and injectivity gives $s = t \in S \cap T$, so $y \in f[S \cap T]$. For (iii): $y \in f[S \setminus T]$ gives $y = f(s)$ with $s \in S$ and $s \notin T$; if $y$ were $f(t)$ for some $t \in T$ then injectivity would give $s = t \in T$, so $y \notin f[T]$ and $y \in f[S] \setminus f[T]$. [L3, L5, L6, L7, step 1.1]

2.5 Conversely, suppose $f$ is not injective, so $f(a) = f(a')$ for some $a, a' \in A$ with $a \neq a'$. Take $S := \{a\}$ and $T := \{a'\}$. Then $S \cap T = \varnothing$, so $f[S \cap T] = \varnothing$, while $f(a)$ lies in $f[S] \cap f[T]$; the inclusion in (ii) is therefore proper for this pair. [L3, L5, L8, L10, step 1.1]

3.1 Claims (i), (ii) and (iii) hold in general, and steps 2.4 and 2.5 show that the two inclusions are equalities for all $S$ and $T$ exactly when $f$ is injective. [step 2.1, step 2.2, step 2.3, step 2.4, step 2.5] ∎
