---
id: thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse
kind: theorem
title: "$f : A \\to B$ is a bijection if and only if there is a function $g : B \\to A$ with $g \\circ f = \\Delta_A$ and $f \\circ g = \\Delta_B$; such a $g$ is unique, equals the inverse relation $f^{-1}$, and is itself a bijection"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-injection-surjection-bijection, def-function, def-inverse-relation-composition-and-restriction, lem-the-composite-of-two-functions-is-a-function, def-the-identity-and-membership-relations-on-a-set, lem-two-functions-are-equal-exactly-when-they-agree-at-every-point, def-relation-domain-range-and-field, prop-composition-of-relations-is-associative]
justified_by: []
aliases: [thm-two-sided-inverse]
landmark: true
short: "bijections and two-sided inverses"
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
    - title: "Bijection, injection and surjection (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bijection,_injection_and_surjection"
    - title: "B. Kaya, MATH 320 Set Theory (METU), §2.2"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Inverse function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Inverse_function"
pipeline_run: null
---

## Statement

Let $f : A \to B$. Then $f$ is a bijection if and only if there is a function
$g : B \to A$ with $g \circ f = \Delta_A$ and $f \circ g = \Delta_B$. When such a
$g$ exists it is unique, it is the inverse relation $f^{-1}$, and it is itself a
bijection $B \to A$.

No choice principle is used: the value $g(b)$ is the unique $a$ with $f(a) = b$,
so it is determined rather than selected.

## Facts & Assumptions

**Given:** a function $f : A \to B$.

[L1] $f$ is **injective** (one-to-one) if $f(x) = f(y)$ implies $x = y$, for all $x, y \in A$ ([[def-injection-surjection-bijection]]).

[L2] $f$ is **surjective** (onto) if for every $b \in B$ there is some $x \in A$ with $f(x) = b$ ([[def-injection-surjection-bijection]]).

[L3] We write $f : A \to B$, and say $f$ is a **function from $A$ to $B$**, when $f$ is a function with $\operatorname{dom} f = A$ and $\operatorname{ran} f \subseteq B$ ([[def-function]]).

[L4] $(b,a) \in R^{-1}$ holds if and only if $(a,b) \in R$ ([[def-inverse-relation-composition-and-restriction]]).

[L5] $\operatorname{dom}(R^{-1}) = \operatorname{ran} R$ and $\operatorname{ran}(R^{-1}) = \operatorname{dom} R$ ([[prop-composition-of-relations-is-associative]]).

[L6] $g \circ f$ is a function, $\operatorname{dom}(g \circ f) = f^{-1}[\operatorname{dom} g]$, and $(g \circ f)(x) = g(f(x))$ for every $x$ in that domain ([[lem-the-composite-of-two-functions-is-a-function]]).

[L7] $\Delta_A$ is a function with $\operatorname{dom} \Delta_A = A$ and $\Delta_A(a) = a$ for every $a \in A$ ([[lem-the-composite-of-two-functions-is-a-function]]).

[L8] $f = g$ if and only if $\operatorname{dom} f = \operatorname{dom} g$ and $f(x) = g(x)$ for every $x \in \operatorname{dom} f$ ([[lem-two-functions-are-equal-exactly-when-they-agree-at-every-point]]).

[L9] $\operatorname{ran} R := \{\, b : \exists a\ (a,b) \in R \,\}$ ([[def-relation-domain-range-and-field]]).

[L10] $(a,b) \in \Delta_A$ holds if and only if $a = b$ and $a \in A$ ([[def-the-identity-and-membership-relations-on-a-set]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $f$ is a bijection. The inverse relation $f^{-1}$ is a function: if $(b,a)$ and $(b,a')$ lie in it then $f(a) = b = f(a')$, so $a = a'$ by injectivity. Its domain is $\operatorname{ran} f$, which is $B$ by surjectivity, and its range is $\operatorname{dom} f = A$; hence $f^{-1} : B \to A$. [L1, L2, L3, L4, L5, L9]

1.2 Conversely, suppose $g : B \to A$ satisfies $g \circ f = \Delta_A$ and $f \circ g = \Delta_B$. If $f(a) = f(a')$ then $a = g(f(a)) = g(f(a')) = a'$, so $f$ is injective; and any $b \in B$ satisfies $b = \Delta_B(b) = f(g(b))$, so $b$ is a value of $f$ and $f$ is surjective. Hence $f$ is a bijection. [L1, L2, L6, L7, L10]

1.3 Any two such functions agree: if $g$ and $g'$ both satisfy the two identities then, for $b \in B$, $f(g'(b)) = b$, so $g(b) = g(f(g'(b))) = \Delta_A(g'(b)) = g'(b)$; both have domain $B$, so $g = g'$. [L6, L7, L8]

2.1 For a bijection $f$, the function $f^{-1}$ of step 1.1 satisfies the two identities: $f^{-1} \circ f$ and $\Delta_A$ are functions with domain $A$, and $f^{-1}(f(a)) = a = \Delta_A(a)$ for $a \in A$; likewise $f \circ f^{-1}$ and $\Delta_B$ are functions with domain $B$ agreeing at every point. [L4, L6, L7, L8, step 1.1]

2.2 Such a $g$ is itself a bijection: $f$ is a function $A \to B$ with $f \circ g = \Delta_B$ and $g \circ f = \Delta_A$, which is the hypothesis of step 1.2 applied to $g$ in place of $f$. [step 1.2]

3.1 Such a $g$ is the inverse relation: $f^{-1}$ satisfies the two identities by step 2.1, and step 1.3 says there is only one function that does. [step 1.3, step 2.1]

4.1 The two directions, the uniqueness, the identification with $f^{-1}$ and the bijectivity of $g$ are established, which is the statement. [step 1.1, step 1.2, step 1.3, step 2.1, step 2.2, step 3.1] ∎
