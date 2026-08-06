---
id: fs-every-surjection-has-a-right-inverse-in-zf
kind: false-statement
title: "FALSE: assuming ZF is consistent, ZF proves that every surjection $f : A \\to B$ has a right inverse $g : B \\to A$ with $f \\circ g = \\Delta_B$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [rem-cohen-forcing-ac-independent, def-axiom-of-choice, def-injection-surjection-bijection, def-function, def-product-of-an-indexed-family, prop-products-over-small-index-sets, lem-the-composite-of-two-functions-is-a-function, def-the-identity-and-membership-relations-on-a-set, def-cartesian-product, def-indexed-family, def-axiom-schema-of-separation, def-relation-domain-range-and-field, def-indexed-union-and-intersection, thm-the-characterising-property-of-ordered-pairs]
justified_by: []
forward_refs: []
aliases: []
landmark: false
short: "right inverses in ZF (false)"
proof_strategy: contradiction
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
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
    - title: "P. J. Cohen, The independence of the continuum hypothesis (PNAS 1963)"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC221287/"
    - title: "B. Kaya, MATH 320 Set Theory (METU), §5"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
pipeline_run: null
---

## Statement

**False statement.** Assume ZF is consistent. Then ZF proves that every
surjection $f : A \to B$ has a right inverse, that is, a function
$g : B \to A$ with $f \circ g = \Delta_B$.

The consistency assumption is not decoration: an inconsistent ZF proves
everything, so without it the claim would be unrefutable.

## Facts & Assumptions

**Given:** ZF is consistent, and the claim above.

[A1] **If** ZF is consistent, **then** ZF does not prove the Axiom of Choice (Cohen 1963, [[rem-cohen-forcing-ac-independent]]). This is an external result, established by forcing and quoted rather than proved here.

[L1] $f$ is **surjective** (onto) if for every $b \in B$ there is some $x \in A$ with $f(x) = b$ ([[def-injection-surjection-bijection]]).

[L2] We write $f : A \to B$, and say $f$ is a **function from $A$ to $B$**, when $f$ is a function with $\operatorname{dom} f = A$ and $\operatorname{ran} f \subseteq B$ ([[def-function]]).

[L3] an element of $\prod_{i \in I} A_i$ is a function with domain $I$ that takes its value at each index inside the member carried by that index ([[def-product-of-an-indexed-family]]).

[L4] if $A_j = \varnothing$ for some $j \in I$ then $\prod_{i \in I} A_i = \varnothing$ ([[prop-products-over-small-index-sets]]).

[L5] $g \circ f$ is a function, $\operatorname{dom}(g \circ f) = f^{-1}[\operatorname{dom} g]$, and $(g \circ f)(x) = g(f(x))$ for every $x$ in that domain ([[lem-the-composite-of-two-functions-is-a-function]]).

[L6] $\Delta_A$ is a function with $\operatorname{dom} \Delta_A = A$ and $\Delta_A(a) = a$ for every $a \in A$ ([[lem-the-composite-of-two-functions-is-a-function]]).

[L7] $(a,b) \in \Delta_A$ holds if and only if $a = b$ and $a \in A$ ([[def-the-identity-and-membership-relations-on-a-set]]).

[L8] $z \in A \times B$ holds if and only if $z = (a,b)$ for some $a \in A$ and some $b \in B$ ([[def-cartesian-product]]).

[L9] An **indexed family** with **index set** $I$ is a function $A$ with $\operatorname{dom} A = I$ ([[def-indexed-family]]).

[L10] For any parameters $\bar p$ and any set $x$, there is a set $y$ whose elements are exactly the elements $z$ of $x$ for which $\varphi(z,\bar p)$ holds ([[def-axiom-schema-of-separation]]).

[L11] $\operatorname{dom} R := \{\, a : \exists b\ (a,b) \in R \,\}, \qquad \operatorname{ran} R := \{\, b : \exists a\ (a,b) \in R \,\}$ ([[def-relation-domain-range-and-field]]).

[L12] $(a,b) = (c,d)$ if and only if $a = c$ and $b = d$ ([[thm-the-characterising-property-of-ordered-pairs]]).

[L13] $z \in \bigcup_{i \in I} A_i$ holds if and only if $z \in A_i$ for some $i \in I$ ([[def-indexed-union-and-intersection]]).

[L14] An equivalent formulation of the **Axiom of Choice** is that a product of nonempty sets is nonempty: if $X_i \ne \varnothing$ for every $i \in I$, then $\prod_{i \in I} X_i \ne \varnothing$ ([[def-axiom-of-choice]]).

## Refutation

**Proof technique:** contradiction.

1.1 Suppose ZF proves that every surjection has a right inverse. [assume-contra]

1.2 Let $(X_i)_{i \in I}$ be any indexed family with $X_i \neq \varnothing$ for every $i \in I$. Separating inside $I \times \bigcup_{i \in I} X_i$ gives the set $E := \{\,(i,x) : i \in I \wedge x \in X_i\,\}$, and separating inside $E \times I$ gives $f := \{\,(z,i) \in E \times I : \exists x\,(z = (i,x))\,\}$, which is a function $E \to I$ sending $(i,x)$ to $i$. [L2, L8, L9, L10, L11, L12, L13]

2.1 $f$ is surjective: for $i \in I$ the set $X_i$ has an element $x$, so $(i,x) \in E$ and $f((i,x)) = i$. [L1, step 1.2]

3.1 By the supposition $f$ has a right inverse $g : I \to E$ with $f \circ g = \Delta_I$. For $i \in I$ we get $f(g(i)) = i$, so $g(i) = (i,x)$ for some $x \in X_i$; hence $\operatorname{ran} g$ is a set of pairs, one for each $i \in I$, which is a function with domain $I$ whose value at $i$ lies in $X_i$. That function is an element of $\prod_{i \in I} X_i$, so that product is nonempty. [L3, L5, L6, L7, L11, L12, step 1.1, step 1.2, step 2.1]

4.1 So ZF would prove that a product of nonempty sets is nonempty, over an arbitrary index set, which is the product formulation of the Axiom of Choice ([[def-axiom-of-choice]]); note that the hypothesis $X_i \neq \varnothing$ is exactly what rules out the collapse of the product recorded in the cited computation of small products. Under the assumption that ZF is consistent, ZF does not prove the Axiom of Choice, so the supposition is untenable and the claim is false. [A1, L4, L14, step 3.1, discharge-contradiction] ∎

## Remarks

- **What is true, and where the line falls.** A *two-sided* inverse is available without any choice principle, because it is determined rather than selected: that is [[thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse]]. So is a left inverse for an injection with nonempty domain, [[cor-a-function-with-nonempty-domain-is-injective-exactly-when-it-has-a-left-inverse]]. Only the right inverse of a surjection requires choosing one preimage at each point at once.

- **The external ingredient.** The refutation quotes one result it does not prove, the unprovability of Choice in ZF, and everything else in it is proved on this page's own material.
