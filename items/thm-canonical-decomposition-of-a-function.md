---
id: thm-canonical-decomposition-of-a-function
kind: theorem
title: "Every function $f : A \\to B$ factors as $f = \\iota \\circ \\bar f \\circ \\pi$ with $\\pi : A \\to A/{\\ker f}$ the surjective quotient map, $\\bar f : A/{\\ker f} \\to f[A]$ the bijection $[a] \\mapsto f(a)$, and $\\iota : f[A] \\to B$ the inclusion injection; $\\bar f$ is the only function making the factorisation hold"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-the-kernel-of-a-function-is-an-equivalence-relation, thm-universal-property-of-the-quotient, def-equivalence-relation, lem-equivalence-classes-partition, def-injection-surjection-bijection, def-function, def-image-and-preimage-under-a-relation, lem-the-composite-of-two-functions-is-a-function, lem-two-functions-are-equal-exactly-when-they-agree-at-every-point, def-relation-domain-range-and-field, def-the-identity-and-membership-relations-on-a-set, prop-composition-of-relations-is-associative, def-subset-and-proper-subset]
justified_by: []
aliases: [thm-first-isomorphism-theorem-for-sets]
landmark: true
short: "canonical decomposition"
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
    - title: "Image (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Image_(mathematics)"
pipeline_run: null
---

## Statement

Let $f : A \to B$, write $\sim$ for $\ker f$ and let
$\pi : A \to A/{\sim}$ be the quotient map. Put
$\iota := \Delta_{f[A]}$, the identity relation on $f[A]$. Then

- (i) $\pi$ is surjective;
- (ii) there is a function $\bar f : A/{\sim} \to f[A]$ with $\bar f([a]) = f(a)$ for every $a \in A$, and it is a bijection;
- (iii) $\iota$ is an injective function $f[A] \to B$ with $\iota(y) = y$;
- (iv) $\iota \circ \bar f \circ \pi = f$;
- (v) $\bar f$ is the only function $A/{\sim} \to f[A]$ satisfying (iv).

## Facts & Assumptions

**Given:** a function $f : A \to B$, with $\sim$ denoting $\ker f$.

[L1] $\ker f$ is a set, is a relation on $A$, and is an equivalence relation on $A$ ([[lem-the-kernel-of-a-function-is-an-equivalence-relation]]).

[L2] $\pi$ is a surjective function $A \to A/{\sim}$ with $\pi(a) = [a]$ ([[thm-universal-property-of-the-quotient]]).

[L3] there is a function $g : A/{\sim} \to B$ with $g \circ \pi = f$ if and only if $f(a) = f(a')$ whenever $a \sim a'$ ([[thm-universal-property-of-the-quotient]]).

[L4] when such a $g$ exists it is unique, and it satisfies $g([a]) = f(a)$ for every $a \in A$ ([[thm-universal-property-of-the-quotient]]).

[L5] $A/{\sim} \;:=\; \{\, [a] \;:\; a \in A \,\}$ ([[def-equivalence-relation]]).

[L6] $f$ is **injective** (one-to-one) if $f(x) = f(y)$ implies $x = y$, for all $x, y \in A$ ([[def-injection-surjection-bijection]]).

[L7] $f$ is **surjective** (onto) if for every $b \in B$ there is some $x \in A$ with $f(x) = b$ ([[def-injection-surjection-bijection]]).

[L8] We write $f : A \to B$, and say $f$ is a **function from $A$ to $B$**, when $f$ is a function with $\operatorname{dom} f = A$ and $\operatorname{ran} f \subseteq B$ ([[def-function]]).

[L9] $b \in R[A]$ holds if and only if $(a,b) \in R$ for some $a \in A$ ([[def-image-and-preimage-under-a-relation]]).

[L10] $\Delta_A$ is a function with $\operatorname{dom} \Delta_A = A$ and $\Delta_A(a) = a$ for every $a \in A$ ([[lem-the-composite-of-two-functions-is-a-function]]).

[L11] $g \circ f$ is a function, $\operatorname{dom}(g \circ f) = f^{-1}[\operatorname{dom} g]$, and $(g \circ f)(x) = g(f(x))$ for every $x$ in that domain ([[lem-the-composite-of-two-functions-is-a-function]]).

[L12] $f = g$ if and only if $\operatorname{dom} f = \operatorname{dom} g$ and $f(x) = g(x)$ for every $x \in \operatorname{dom} f$ ([[lem-two-functions-are-equal-exactly-when-they-agree-at-every-point]]).

[L13] $\operatorname{ran} R := \{\, b : \exists a\ (a,b) \in R \,\}$ ([[def-relation-domain-range-and-field]]).

[L14] $(a,b) \in \Delta_A$ holds if and only if $a = b$ and $a \in A$ ([[def-the-identity-and-membership-relations-on-a-set]]).

[L15] $T \circ (S \circ R) = (T \circ S) \circ R$ ([[prop-composition-of-relations-is-associative]]).

[L16] $x \subseteq y$ means that every element of $x$ is an element of $y$ ([[def-subset-and-proper-subset]]).

[L17] $a \sim b$ if and only if $[a] = [b]$ ([[lem-equivalence-classes-partition]]).

## Proof

**Proof technique:** direct.

1.1 $\sim$ is an equivalence relation on $A$ and $a \sim a'$ says exactly $f(a) = f(a')$; so the hypothesis of the universal property is satisfied, and clause (i) is the surjectivity already recorded for the quotient map. [L1, L2, L3]

1.2 Claim (iii): $\iota = \Delta_{f[A]}$ is a function with domain $f[A]$ and $\iota(y) = y$; its range is $f[A]$, which is contained in $B$ because every element of $f[A]$ is a value of $f$ and $\operatorname{ran} f \subseteq B$. It is injective, since $\iota(y) = \iota(y')$ reads $y = y'$. [L6, L8, L9, L10, L13, L14, L16]

2.1 Claim (ii): the universal property gives a function $g : A/{\sim} \to B$ with $g \circ \pi = f$ and $g([a]) = f(a)$ for every $a \in A$. Every value of $g$ is therefore a value of $f$, so $\operatorname{ran} g \subseteq f[A]$, and the same set $g$ is a function $A/{\sim} \to f[A]$; call it $\bar f$. It is onto $f[A]$, because each element of $f[A]$ is $f(a) = \bar f([a])$ for some $a \in A$; and it is injective, because $\bar f([a]) = \bar f([a'])$ gives $f(a) = f(a')$, that is $a \sim a'$, and therefore $[a] = [a']$. Hence $\bar f$ is a bijection. [L3, L4, L5, L6, L7, L8, L9, L13, L17, step 1.1]

3.1 Claim (iv): $\iota \circ \bar f \circ \pi$ is unambiguous by associativity, it is a function with domain $A$, and for $a \in A$ its value is $\iota(\bar f(\pi(a))) = \iota(f(a)) = f(a)$; so it equals $f$. [L11, L12, L15, step 1.2, step 2.1]

3.2 Claim (v): if $h : A/{\sim} \to f[A]$ also satisfies $\iota \circ h \circ \pi = f$, then for $C \in A/{\sim}$ choose $a$ with $C = [a]$ and compute $h(C) = \iota(h(\pi(a))) = f(a) = \bar f(C)$; both have domain $A/{\sim}$, so $h = \bar f$. [L5, L10, L11, L12, step 1.2, step 2.1]

4.1 Claims (i) to (v) are established, which is the statement. [step 1.1, step 1.2, step 2.1, step 3.1, step 3.2] ∎
