---
id: lem-a-two-element-indexed-product-is-in-bijection-with-a-cartesian-product
kind: lemma
title: "For $I = \\{\\varnothing,\\{\\varnothing\\}\\}$ with $A_{\\varnothing} = A$ and $A_{\\{\\varnothing\\}} = B$, the map $f \\mapsto (f(\\varnothing), f(\\{\\varnothing\\}))$ is a bijection $\\prod_{i \\in I} A_i \\to A \\times B$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-product-of-an-indexed-family, def-cartesian-product, def-injection-surjection-bijection, def-unordered-pair-and-singleton, thm-the-empty-set-exists-and-is-unique, def-function, thm-the-characterising-property-of-ordered-pairs, def-indexed-family, lem-two-functions-are-equal-exactly-when-they-agree-at-every-point, def-relation-domain-range-and-field, def-axiom-schema-of-separation, def-indexed-union-and-intersection, lem-unions-and-intersections-of-small-families]
justified_by: []
aliases: []
landmark: false
short: "a two-factor product"
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
    - title: "B. Kaya, MATH 320 Set Theory (METU), Exercise 12"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Cartesian product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cartesian_product"
    - title: "Indexed family (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Indexed_family"
pipeline_run: null
---

## Statement

Let $A$ and $B$ be sets, put $I := \{\varnothing,\{\varnothing\}\}$ and let
$(A_i)_{i \in I}$ be the family with $A_{\varnothing} = A$ and
$A_{\{\varnothing\}} = B$, that is, the function
$\{(\varnothing, A), (\{\varnothing\}, B)\}$. Write
$P := \prod_{i \in I} A_i$. Then

$$\Phi := \{\,(f,z) \in P \times (A \times B) : z = (f(\varnothing), f(\{\varnothing\}))\,\}$$

is a bijection $P \to A \times B$.

## Facts & Assumptions

**Given:** sets $A$ and $B$, the index set $I := \{\varnothing,\{\varnothing\}\}$, the family $(A_i)_{i \in I}$ above, and $P := \prod_{i \in I} A_i$.

[L1] an element of $\prod_{i \in I} A_i$ is a function with domain $I$ that takes its value at each index inside the member carried by that index ([[def-product-of-an-indexed-family]]).

[L2] $z \in A \times B$ holds if and only if $z = (a,b)$ for some $a \in A$ and some $b \in B$ ([[def-cartesian-product]]).

[L3] $(a,b) = (c,d)$ if and only if $a = c$ and $b = d$ ([[thm-the-characterising-property-of-ordered-pairs]]).

[L4] $f$ is **injective** (one-to-one) if $f(x) = f(y)$ implies $x = y$, for all $x, y \in A$ ([[def-injection-surjection-bijection]]).

[L5] $f$ is **surjective** (onto) if for every $b \in B$ there is some $x \in A$ with $f(x) = b$ ([[def-injection-surjection-bijection]]).

[L6] $f = g$ if and only if $\operatorname{dom} f = \operatorname{dom} g$ and $f(x) = g(x)$ for every $x \in \operatorname{dom} f$ ([[lem-two-functions-are-equal-exactly-when-they-agree-at-every-point]]).

[L7] $\{x,y\}$ is the set whose elements are exactly $x$ and $y$, and $\{x\} := \{x,x\}$ ([[def-unordered-pair-and-singleton]]).

[L8] There is exactly one set with no elements, written $\varnothing$ ([[thm-the-empty-set-exists-and-is-unique]]).

[L9] A **function** is a relation $f$ such that $(a,b) \in f$ and $(a,c) \in f$ imply $b = c$ ([[def-function]]).

[L10] An **indexed family** with **index set** $I$ is a function $A$ with $\operatorname{dom} A = I$ ([[def-indexed-family]]).

[L11] $\operatorname{dom} R := \{\, a : \exists b\ (a,b) \in R \,\}, \qquad \operatorname{ran} R := \{\, b : \exists a\ (a,b) \in R \,\}$ ([[def-relation-domain-range-and-field]]).

[L12] For any parameters $\bar p$ and any set $x$, there is a set $y$ whose elements are exactly the elements $z$ of $x$ for which $\varphi(z,\bar p)$ holds ([[def-axiom-schema-of-separation]]).

[L13] $z \in \bigcup_{i \in I} A_i$ holds if and only if $z \in A_i$ for some $i \in I$ ([[def-indexed-union-and-intersection]]).

[L14] $z \in a \cup b$ holds if and only if $z \in a$ or $z \in b$ ([[lem-unions-and-intersections-of-small-families]]).

## Proof

**Proof technique:** direct.

1.1 The index set has exactly the two elements $\varnothing$ and $\{\varnothing\}$, and they are distinct because the second has an element and the first has none; so $\{(\varnothing, A), (\{\varnothing\}, B)\}$ is single valued, has domain $I$, and is an indexed family with $A_{\varnothing} = A$ and $A_{\{\varnothing\}} = B$. [L7, L8, L9, L10, L11]

2.1 $\Phi$ is a function $P \to A \times B$: for $f \in P$ we have $f(\varnothing) \in A$ and $f(\{\varnothing\}) \in B$, so the pair $(f(\varnothing), f(\{\varnothing\}))$ lies in $A \times B$; separating inside $P \times (A \times B)$ gives $\Phi$, it is single valued because that pair is determined by $f$, its domain is $P$, and its range lies in $A \times B$. [L1, L2, L9, L11, L12, step 1.1]

3.1 $\Phi$ is injective: if $\Phi(f) = \Phi(g)$ then the characterising property gives $f(\varnothing) = g(\varnothing)$ and $f(\{\varnothing\}) = g(\{\varnothing\})$; $f$ and $g$ have the same domain $I$, whose elements are exactly those two, so $f = g$. [L3, L4, L6, L7, step 1.1, step 2.1]

3.2 $\Phi$ is surjective: given $(a,b) \in A \times B$, put $f := \{(\varnothing,a),(\{\varnothing\},b)\}$. It is single valued because $\varnothing \neq \{\varnothing\}$, its domain is $I$, and $f(\varnothing) = a \in A$ with $f(\{\varnothing\}) = b \in B$, so $f \in P$ by the union bound and $\Phi(f) = (a,b)$. [L1, L2, L5, L7, L9, L11, L13, L14, step 1.1, step 2.1]

4.1 $\Phi$ is a function $P \to A \times B$ that is injective and surjective, hence a bijection. [step 2.1, step 3.1, step 3.2] ∎
