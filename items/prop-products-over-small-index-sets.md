---
id: prop-products-over-small-index-sets
kind: proposition
title: "$\\prod_{i \\in \\varnothing} A_i = \\{\\varnothing\\}$; if $A_j = \\varnothing$ for some $j \\in I$ then $\\prod_{i \\in I} A_i = \\varnothing$; and for $I = \\{j\\}$ the evaluation $f \\mapsto f(j)$ is a bijection $\\prod_{i \\in I} A_i \\to A_j$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-product-of-an-indexed-family, def-function, def-injection-surjection-bijection, thm-the-empty-set-exists-and-is-unique, def-relation-domain-range-and-field, def-unordered-pair-and-singleton, def-axiom-schema-of-separation, def-cartesian-product, lem-two-functions-are-equal-exactly-when-they-agree-at-every-point, def-indexed-union-and-intersection, def-axiom-of-extensionality]
justified_by: []
forward_refs: []
aliases: []
landmark: false
short: "products over small index sets"
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
    - title: "B. Kaya, MATH 320 Set Theory (METU), Def. 21 and Exercise 13"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Cartesian product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cartesian_product"
    - title: "Empty product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Empty_product"
pipeline_run: null
---

## Statement

Let $(A_i)_{i \in I}$ be an indexed family. Then

- (i) if $I = \varnothing$ then $\prod_{i \in I} A_i = \{\varnothing\}$;
- (ii) if $A_j = \varnothing$ for some $j \in I$ then $\prod_{i \in I} A_i = \varnothing$;
- (iii) if $I = \{j\}$ then the evaluation $e := \{\,(f,a) \in (\prod_{i \in I} A_i) \times A_j : a = f(j)\,\}$ is a bijection $\prod_{i \in I} A_i \to A_j$.

Clauses (i) and (ii) pull in opposite directions and are the two cases most often
mis-stated: an empty index set gives a product with one element, while a single
empty member collapses the product entirely.

## Facts & Assumptions

**Given:** an indexed family $(A_i)_{i \in I}$.

[L1] an element of $\prod_{i \in I} A_i$ is a function with domain $I$ that takes its value at each index inside the member carried by that index ([[def-product-of-an-indexed-family]]).

[L2] A **function** is a relation $f$ such that $(a,b) \in f$ and $(a,c) \in f$ imply $b = c$ ([[def-function]]).

[L3] $\operatorname{dom} R := \{\, a : \exists b\ (a,b) \in R \,\}, \qquad \operatorname{ran} R := \{\, b : \exists a\ (a,b) \in R \,\}$ ([[def-relation-domain-range-and-field]]).

[L4] $f$ is **injective** (one-to-one) if $f(x) = f(y)$ implies $x = y$, for all $x, y \in A$ ([[def-injection-surjection-bijection]]).

[L5] $f$ is **surjective** (onto) if for every $b \in B$ there is some $x \in A$ with $f(x) = b$ ([[def-injection-surjection-bijection]]).

[L6] $f = g$ if and only if $\operatorname{dom} f = \operatorname{dom} g$ and $f(x) = g(x)$ for every $x \in \operatorname{dom} f$ ([[lem-two-functions-are-equal-exactly-when-they-agree-at-every-point]]).

[L7] There is exactly one set with no elements, written $\varnothing$ ([[thm-the-empty-set-exists-and-is-unique]]).

[L8] $\{x,y\}$ is the set whose elements are exactly $x$ and $y$, and $\{x\} := \{x,x\}$ ([[def-unordered-pair-and-singleton]]).

[L9] For any parameters $\bar p$ and any set $x$, there is a set $y$ whose elements are exactly the elements $z$ of $x$ for which $\varphi(z,\bar p)$ holds ([[def-axiom-schema-of-separation]]).

[L10] $z \in A \times B$ holds if and only if $z = (a,b)$ for some $a \in A$ and some $b \in B$ ([[def-cartesian-product]]).

[L11] $z \in \bigcup_{i \in I} A_i$ holds if and only if $z \in A_i$ for some $i \in I$ ([[def-indexed-union-and-intersection]]).

[L12] If every $z$ satisfies $z \in x$ if and only if $z \in y$, then $x = y$ ([[def-axiom-of-extensionality]]).

## Proof

**Proof technique:** direct.

1.1 Claim (i): let $I = \varnothing$. A function with domain $\varnothing$ has no elements, since each of its elements would be a pair whose first coordinate lies in its domain, so the only such function is $\varnothing$; and it satisfies the condition "$f(i) \in A_i$ for every $i \in I$" vacuously. Hence $\varnothing$ is the only element of the product, and the product is $\{\varnothing\}$. [L1, L2, L3, L7, L8, L12]

1.2 Claim (ii): let $j \in I$ with $A_j = \varnothing$. An element $f$ of the product would satisfy $f(j) \in A_j$, and $\varnothing$ has no elements; so the product has no elements. [L1, L7, L12]

1.3 Claim (iii), the map: let $I = \{j\}$ and write $P := \prod_{i \in I} A_i$. Each $f \in P$ has $f(j) \in A_j$, so $e$ as displayed is a set by separation inside $P \times A_j$, is single valued because $f(j)$ is, has domain $P$, and has range inside $A_j$; thus $e : P \to A_j$ with $e(f) = f(j)$. [L1, L2, L3, L9, L10]

2.1 Claim (iii), injectivity: if $e(f) = e(g)$ for $f, g \in P$, then $f$ and $g$ have the same domain $\{j\}$ and agree at $j$, hence are equal. [L4, L6, L8, step 1.3]

2.2 Claim (iii), surjectivity: let $a \in A_j$ and put $f := \{(j,a)\}$. This is a function with domain $\{j\}$ and $f(j) = a \in A_j$, and $a$ lies in $\bigcup_{i \in I} A_i$, so $f \in P$ and $e(f) = a$. [L1, L2, L3, L5, L8, L11, step 1.3]

3.1 Claims (i), (ii) and (iii) are established, which is the statement. [step 1.1, step 1.2, step 1.3, step 2.1, step 2.2] ∎

## Remarks

- **Where the general question is settled, and where it is not.** These three computations use no choice principle: in (i) and (ii) nothing is selected, and in (iii) the single value $f(j)$ is determined. None of them is an instance of the general question, because each names its elements outright. Whether a product of nonempty members over an arbitrary index set is nonempty is that general question, and it is exactly the product formulation of the Axiom of Choice, stated earlier on this page at [[def-axiom-of-choice]]; clause (ii) is the reason that formulation carries the hypothesis that every member is nonempty.
