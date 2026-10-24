---
id: prop-composition-preserves-injectivity-surjectivity-and-bijectivity
kind: proposition
title: "For $f : A \\to B$ and $g : B \\to C$: if both are injective so is $g \\circ f$; if both are surjective so is $g \\circ f$; if $g \\circ f$ is injective so is $f$; and if $g \\circ f$ is surjective so is $g$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-injection-surjection-bijection, lem-the-composite-of-two-functions-is-a-function, def-function, def-relation-domain-range-and-field, def-image-and-preimage-under-a-relation]
justified_by: []
aliases: []
landmark: false
short: "composition and the three adjectives"
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
    - title: "Function composition (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Function_composition"
pipeline_run: null
---

## Statement

Let $f : A \to B$ and $g : B \to C$. Then $g \circ f : A \to C$, and

- (i) if $f$ and $g$ are injective then so is $g \circ f$;
- (ii) if $f$ and $g$ are surjective then so is $g \circ f$;
- (iii) if $g \circ f$ is injective then so is $f$;
- (iv) if $g \circ f$ is surjective then so is $g$.

In particular a composite of bijections is a bijection.

## Facts & Assumptions

**Given:** functions $f : A \to B$ and $g : B \to C$.

[L1] $f$ is **injective** (one-to-one) if $f(x) = f(y)$ implies $x = y$, for all $x, y \in A$ ([[def-injection-surjection-bijection]]).

[L2] $f$ is **surjective** (onto) if for every $b \in B$ there is some $x \in A$ with $f(x) = b$ ([[def-injection-surjection-bijection]]).

[L3] $f$ is **bijective** if it is both injective and surjective ([[def-injection-surjection-bijection]]).

[L4] $g \circ f$ is a function, $\operatorname{dom}(g \circ f) = f^{-1}[\operatorname{dom} g]$, and $(g \circ f)(x) = g(f(x))$ for every $x$ in that domain ([[lem-the-composite-of-two-functions-is-a-function]]).

[L5] We write $f : A \to B$, and say $f$ is a **function from $A$ to $B$**, when $f$ is a function with $\operatorname{dom} f = A$ and $\operatorname{ran} f \subseteq B$ ([[def-function]]).

[L6] $\operatorname{ran} R := \{\, b : \exists a\ (a,b) \in R \,\}$ ([[def-relation-domain-range-and-field]]).

[L7] $a \in R^{-1}[B]$ holds if and only if $(a,b) \in R$ for some $b \in B$ ([[def-image-and-preimage-under-a-relation]]).

## Proof

**Proof technique:** direct.

1.1 $g \circ f : A \to C$: its domain is $f^{-1}[\operatorname{dom} g] = f^{-1}[B]$, which is $A$ because $\operatorname{dom} f = A$ and $\operatorname{ran} f \subseteq B$; and its values $g(f(a))$ lie in $\operatorname{ran} g \subseteq C$. [L4, L5, L6, L7]

2.1 Claim (i): assume $f$ and $g$ injective and let $a, a' \in A$ with $g(f(a)) = g(f(a'))$. Injectivity of $g$ gives $f(a) = f(a')$, and injectivity of $f$ gives $a = a'$. [L1, L4, step 1.1]

2.2 Claim (ii): assume $f$ and $g$ surjective and let $c \in C$. Surjectivity of $g$ gives $b \in B$ with $g(b) = c$, and surjectivity of $f$ gives $a \in A$ with $f(a) = b$; then $g(f(a)) = c$. [L2, L4, step 1.1]

2.3 Claim (iii): assume $g \circ f$ injective and let $a, a' \in A$ with $f(a) = f(a')$. Then $g(f(a)) = g(f(a'))$, so $a = a'$. [L1, L4, step 1.1]

2.4 Claim (iv): assume $g \circ f$ surjective and let $c \in C$. There is $a \in A$ with $g(f(a)) = c$, and $f(a)$ is an element of $B$, so $c$ is a value of $g$. [L2, L4, L5, step 1.1]

3.1 Claims (i) to (iv) are established; combining (i) and (ii) gives that a composite of bijections is injective and surjective, hence a bijection. [L3, step 2.1, step 2.2, step 2.3, step 2.4] ∎
