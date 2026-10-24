---
id: cex-the-image-of-an-intersection-is-smaller-than-the-intersection-of-the-images
kind: counterexample
title: "A function $f$ and sets $S, T$ with $f[S \\cap T] \\subsetneq f[S] \\cap f[T]$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [prop-images-of-unions-and-intersections-under-a-function, def-function, def-image-and-preimage-under-a-relation, lem-unions-and-intersections-of-small-families, def-unordered-pair-and-singleton, thm-the-empty-set-exists-and-is-unique, def-injection-surjection-bijection, def-ordered-pair, def-relation-domain-range-and-field, def-union-of-a-set-and-binary-union]
justified_by: []
aliases: []
landmark: false
short: "image of an intersection"
proof_strategy: direct
cx_machine_verified: false
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

## Statement refuted

**Refuted claim:** $f[S \cap T] = f[S] \cap f[T]$ for every function
$f : A \to B$ and all $S, T \subseteq A$. Write $u := \varnothing$ and
$v := \{\varnothing\}$, and take

$$A := \{u,v\}, \qquad B := \{u\}, \qquad f := \{(u,u),(v,u)\}, \qquad S := \{u\}, \qquad T := \{v\}.$$

Then $S \cap T = \varnothing$, so $f[S \cap T] = \varnothing$, while
$f[S] = f[T] = \{u\}$ and therefore $f[S] \cap f[T] = \{u\}$. The inclusion
$f[S \cap T] \subseteq f[S] \cap f[T]$ of
[[prop-images-of-unions-and-intersections-under-a-function]] is proper here, and
it is proper exactly because $f$ is not injective.

## Facts & Assumptions

**Given:** $u := \varnothing$, $v := \{\varnothing\}$, $A := \{u,v\}$, $B := \{u\}$, $f := \{(u,u),(v,u)\}$, $S := \{u\}$ and $T := \{v\}$.

[L1] $f[S \cap T] \subseteq f[S] \cap f[T]$ ([[prop-images-of-unions-and-intersections-under-a-function]]).

[L2] $b \in R[A]$ holds if and only if $(a,b) \in R$ for some $a \in A$ ([[def-image-and-preimage-under-a-relation]]).

[L3] We write $f : A \to B$, and say $f$ is a **function from $A$ to $B$**, when $f$ is a function with $\operatorname{dom} f = A$ and $\operatorname{ran} f \subseteq B$ ([[def-function]]).

[L4] $f$ is **injective** (one-to-one) if $f(x) = f(y)$ implies $x = y$, for all $x, y \in A$ ([[def-injection-surjection-bijection]]).

[L5] $z \in a \cap b$ holds if and only if $z \in a$ and $z \in b$ ([[lem-unions-and-intersections-of-small-families]]).

[L6] $\{x,y\}$ is the set whose elements are exactly $x$ and $y$, and $\{x\} := \{x,x\}$ ([[def-unordered-pair-and-singleton]]).

[L7] There is exactly one set with no elements, written $\varnothing$ ([[thm-the-empty-set-exists-and-is-unique]]).

[L8] $(a,b) := \{\{a\},\{a,b\}\}$ ([[def-ordered-pair]]).

[L9] $\operatorname{dom} R := \{\, a : \exists b\ (a,b) \in R \,\}, \qquad \operatorname{ran} R := \{\, b : \exists a\ (a,b) \in R \,\}$ ([[def-relation-domain-range-and-field]]).

[L10] $z \in a \cup b$ holds if and only if $z \in a$ or $z \in b$ ([[lem-unions-and-intersections-of-small-families]]).

[L11] $a \cup b := \bigcup\{a,b\}$ ([[def-union-of-a-set-and-binary-union]]).

## Counterexample

**Proof technique:** direct.

1.1 $u \neq v$, since $v$ has an element and $u$ has none; so $A$ has exactly the two elements $u$ and $v$, and $S$ and $T$ are the two singletons inside it. [L6, L7]

2.1 $f$ is a function $A \to B$: its two pairs have distinct first coordinates, so it is single valued; its domain is $A$ and its range is $\{u\} = B$. It is not injective, since $f(u) = u = f(v)$ while $u \neq v$. [L3, L4, L8, L9, step 1.1]

2.2 $S \cap T$ has no element, since an element would have to equal both $u$ and $v$; so $S \cap T = \varnothing$ and $f[S \cap T] = \varnothing$, no element of $\varnothing$ being related to anything. [L2, L5, L6, L7, step 1.1]

3.1 $f[S] = \{u\}$ and $f[T] = \{u\}$, since $f(u) = u$ and $f(v) = u$; hence $f[S] \cap f[T] = \{u\}$. [L2, L5, L6, step 2.1]

4.1 The general inclusion holds and is proper here: $u$ lies in $f[S] \cap f[T]$ and not in $f[S \cap T]$, which has no element at all. [L1, L7, L10, L11, step 2.2, step 3.1] ∎
