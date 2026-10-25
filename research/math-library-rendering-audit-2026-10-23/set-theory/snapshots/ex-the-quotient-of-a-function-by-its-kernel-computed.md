---
id: ex-the-quotient-of-a-function-by-its-kernel-computed
kind: example
title: "A two-to-one function on a four-element set, its kernel, the quotient, and the canonical factorisation computed explicitly"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-the-kernel-of-a-function-is-an-equivalence-relation, thm-canonical-decomposition-of-a-function, def-function, def-equivalence-relation, def-image-and-preimage-under-a-relation, def-unordered-pair-and-singleton, thm-the-empty-set-exists-and-is-unique, def-injection-surjection-bijection, lem-unions-and-intersections-of-small-families, def-union-of-a-set-and-binary-union, thm-the-characterising-property-of-ordered-pairs, def-relation-domain-range-and-field]
justified_by: []
aliases: []
landmark: false
short: "a quotient computed"
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
    - title: "Equivalence relation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Equivalence_relation"
    - title: "B. Kaya, MATH 320 Set Theory (METU), §3.2"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Kernel (set theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Kernel_(set_theory)"
pipeline_run: null
---

## Example

Write $u := \varnothing$, $v := \{\varnothing\}$,
$w := \{\varnothing,\{\varnothing\}\}$ and $x := \{\{\varnothing\}\}$; these four
are pairwise distinct. Put $A := \{u,v\} \cup \{w,x\}$ and $B := \{u,v\}$, and
let

$$f := \{(u,u),(v,u)\} \cup \{(w,v),(x,v)\},$$

so $f : A \to B$ takes the value $u$ twice and the value $v$ twice. Then

$$\ker f = \{(u,u),(u,v)\} \cup \{(v,u),(v,v)\} \cup \{(w,w),(w,x)\} \cup \{(x,w),(x,x)\},$$

$$A/{\ker f} = \{\{u,v\},\{w,x\}\}, \qquad f[A] = B,$$

and the canonical factorisation $f = \iota \circ \bar f \circ \pi$ has
$\pi(u) = \pi(v) = \{u,v\}$, $\pi(w) = \pi(x) = \{w,x\}$,
$\bar f(\{u,v\}) = u$, $\bar f(\{w,x\}) = v$, and $\iota = \Delta_{B}$.

## Facts & Assumptions

**Given:** $u,v,w,x$, $A$, $B$ and $f$ as displayed.

[L1] $\ker f$ is a set, is a relation on $A$, and is an equivalence relation on $A$ ([[lem-the-kernel-of-a-function-is-an-equivalence-relation]]).

[L2] there is a function $\bar f : A/{\sim} \to f[A]$ with $\bar f([a]) = f(a)$ for every $a \in A$, and it is a bijection ([[thm-canonical-decomposition-of-a-function]]).

[L3] A **function** is a relation $f$ such that $(a,b) \in f$ and $(a,c) \in f$ imply $b = c$ ([[def-function]]).

[L4] $[a] \;:=\; \{\, b \in A \;:\; a \sim b \,\} \;\subseteq\; A$ ([[def-equivalence-relation]]).

[L5] $A/{\sim} \;:=\; \{\, [a] \;:\; a \in A \,\}$ ([[def-equivalence-relation]]).

[L6] $b \in R[A]$ holds if and only if $(a,b) \in R$ for some $a \in A$ ([[def-image-and-preimage-under-a-relation]]).

[L7] $\{x,y\}$ is the set whose elements are exactly $x$ and $y$, and $\{x\} := \{x,x\}$ ([[def-unordered-pair-and-singleton]]).

[L8] There is exactly one set with no elements, written $\varnothing$ ([[thm-the-empty-set-exists-and-is-unique]]).

[L9] $f$ is **surjective** (onto) if for every $b \in B$ there is some $x \in A$ with $f(x) = b$ ([[def-injection-surjection-bijection]]).

[L10] $z \in a \cup b$ holds if and only if $z \in a$ or $z \in b$ ([[lem-unions-and-intersections-of-small-families]]).

[L11] $a \cup b := \bigcup\{a,b\}$ ([[def-union-of-a-set-and-binary-union]]).

[L12] $(a,b) = (c,d)$ if and only if $a = c$ and $b = d$ ([[thm-the-characterising-property-of-ordered-pairs]]).

[L13] $\operatorname{dom} R := \{\, a : \exists b\ (a,b) \in R \,\}, \qquad \operatorname{ran} R := \{\, b : \exists a\ (a,b) \in R \,\}$ ([[def-relation-domain-range-and-field]]).

## Verification

**Proof technique:** direct.

1.1 The four sets are pairwise distinct: $u$ has no element; $v$ and $x$ each have exactly one, namely $u$ and $v$ respectively, which differ; and $w$ has both $u$ and $v$, so it differs from all three. Hence $A$ has exactly four elements and $B$ exactly two. [L7, L8, L10, L11]

2.1 $f$ is a function $A \to B$: its four pairs have distinct first coordinates, so it is single valued; its domain is $A$ and its range is $B$. It is surjective, since $u = f(u)$ and $v = f(w)$, so $f[A] = B$. [L3, L6, L9, L12, L13, step 1.1]

3.1 $\ker f$ is as displayed: a pair $(a,a')$ of elements of $A$ lies in it exactly when $f(a) = f(a')$, and $f$ takes the value $u$ exactly at $u$ and $v$, and the value $v$ exactly at $w$ and $x$; so the pairs are those with both coordinates in $\{u,v\}$ or both in $\{w,x\}$. By the general lemma it is an equivalence relation on $A$. [L1, L12, step 1.1, step 2.1]

4.1 The classes are $[u] = [v] = \{u,v\}$ and $[w] = [x] = \{w,x\}$, so $A/{\ker f}$ has exactly the two elements $\{u,v\}$ and $\{w,x\}$, and the quotient map sends $u$ and $v$ to the first and $w$ and $x$ to the second. [L4, L5, L7, step 3.1]

5.1 The canonical factorisation is as displayed: $\bar f$ sends $\{u,v\} = [u]$ to $f(u) = u$ and $\{w,x\} = [w]$ to $f(w) = v$, and it is a bijection onto $f[A] = B$; the inclusion $\iota$ is the identity on $B$ because $f[A] = B$; and composing gives back $f$. [L2, L6, step 2.1, step 3.1, step 4.1] ∎
