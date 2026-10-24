---
id: cor-a-function-with-nonempty-domain-is-injective-exactly-when-it-has-a-left-inverse
kind: corollary
title: "For $f : A \\to B$ with $A \\neq \\varnothing$: $f$ is injective if and only if there is $g : B \\to A$ with $g \\circ f = \\Delta_A$; for $A = \\varnothing$ the empty function is injective and has a left inverse if and only if $B = \\varnothing$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-injection-surjection-bijection, def-function, lem-the-composite-of-two-functions-is-a-function, def-the-identity-and-membership-relations-on-a-set, def-axiom-schema-of-separation, def-image-and-preimage-under-a-relation, thm-the-empty-set-exists-and-is-unique, def-cartesian-product, prop-cartesian-products-and-set-operations, def-relation-domain-range-and-field]
justified_by: []
aliases: [cor-left-inverse-criterion]
landmark: false
short: "injective iff a left inverse exists"
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
    - title: "Inverse function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Inverse_function"
    - title: "B. Kaya, MATH 320 Set Theory (METU), §2.2"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
pipeline_run: null
---

## Statement

Let $f : A \to B$.

- (i) If $A \neq \varnothing$, then $f$ is injective if and only if there is a function $g : B \to A$ with $g \circ f = \Delta_A$.
- (ii) If $A = \varnothing$, then $f = \varnothing$ and $f$ is injective; and there is a function $g : B \to A$ with $g \circ f = \Delta_A$ if and only if $B = \varnothing$.

The hypothesis $A \neq \varnothing$ in (i) is not removable: for
$A = \varnothing$ and $B \neq \varnothing$ the empty function is injective and
has no left inverse at all.

## Facts & Assumptions

**Given:** a function $f : A \to B$.

[L1] $f$ is **injective** (one-to-one) if $f(x) = f(y)$ implies $x = y$, for all $x, y \in A$ ([[def-injection-surjection-bijection]]).

[L2] We write $f : A \to B$, and say $f$ is a **function from $A$ to $B$**, when $f$ is a function with $\operatorname{dom} f = A$ and $\operatorname{ran} f \subseteq B$ ([[def-function]]).

[L3] $g \circ f$ is a function, $\operatorname{dom}(g \circ f) = f^{-1}[\operatorname{dom} g]$, and $(g \circ f)(x) = g(f(x))$ for every $x$ in that domain ([[lem-the-composite-of-two-functions-is-a-function]]).

[L4] $\Delta_A$ is a function with $\operatorname{dom} \Delta_A = A$ and $\Delta_A(a) = a$ for every $a \in A$ ([[lem-the-composite-of-two-functions-is-a-function]]).

[L5] $(a,b) \in \Delta_A$ holds if and only if $a = b$ and $a \in A$ ([[def-the-identity-and-membership-relations-on-a-set]]).

[L6] For any parameters $\bar p$ and any set $x$, there is a set $y$ whose elements are exactly the elements $z$ of $x$ for which $\varphi(z,\bar p)$ holds ([[def-axiom-schema-of-separation]]).

[L7] $b \in R[A]$ holds if and only if $(a,b) \in R$ for some $a \in A$ ([[def-image-and-preimage-under-a-relation]]).

[L8] There is exactly one set with no elements, written $\varnothing$ ([[thm-the-empty-set-exists-and-is-unique]]).

[L9] $z \in A \times B$ holds if and only if $z = (a,b)$ for some $a \in A$ and some $b \in B$ ([[def-cartesian-product]]).

[L10] $A \times B = \varnothing$ if and only if $A = \varnothing$ or $B = \varnothing$ ([[prop-cartesian-products-and-set-operations]]).

[L11] $\operatorname{dom} R := \{\, a : \exists b\ (a,b) \in R \,\}, \qquad \operatorname{ran} R := \{\, b : \exists a\ (a,b) \in R \,\}$ ([[def-relation-domain-range-and-field]]).

## Proof

**Proof technique:** direct.

1.1 Claim (i), from right to left: if $g \circ f = \Delta_A$ and $f(a) = f(a')$ for $a, a' \in A$, then $a = \Delta_A(a) = g(f(a)) = g(f(a')) = \Delta_A(a') = a'$. [L1, L3, L4]

1.2 Claim (i), from left to right: assume $f$ injective and $A \neq \varnothing$, and fix $a_{0} \in A$. Separating inside $B \times A$ gives the set $g := \{\, (b,a) \in B \times A : (a,b) \in f \ \text{or}\ (b \notin f[A] \ \text{and}\ a = a_{0}) \,\}$. For $b \in f[A]$ the first alternative supplies exactly one $a$, by injectivity, and the second supplies none; for $b \in B$ with $b \notin f[A]$ the first supplies none, since $\operatorname{ran} f = f[A]$, and the second supplies $a_{0}$ alone. Hence $g$ is a function with domain $B$ and range inside $A$, so $g : B \to A$. [L1, L2, L6, L7, L8, L9, L11]

1.3 Claim (ii): if $A = \varnothing$ then $\operatorname{dom} f = \varnothing$, so $f$ has no element and $f = \varnothing$; the injectivity condition quantifies over elements of $A$ and holds vacuously. [L1, L2, L8, L11]

2.1 Claim (i) concluded: with $g$ as in step 1.2, $g \circ f$ and $\Delta_A$ are functions with domain $A$, and $g(f(a)) = a$ for every $a \in A$, since $f(a) \in f[A]$ selects the first alternative; so the two functions are equal. [L3, L4, L5, L7, step 1.2]

2.2 Claim (ii) concluded: a function $g : B \to \varnothing$ has $\operatorname{ran} g \subseteq \varnothing$, so $g \subseteq B \times \varnothing = \varnothing$, giving $g = \varnothing$ and $B = \operatorname{dom} g = \varnothing$. Conversely, if $B = \varnothing$ then $g := \varnothing$ is a function $\varnothing \to \varnothing$, and $g \circ f$ and $\Delta_{\varnothing}$ are both $\varnothing$, so the identity holds. [L2, L3, L5, L8, L9, L10, L11, step 1.3]

3.1 Claims (i) and (ii) are established, which is the statement. [step 1.1, step 1.2, step 1.3, step 2.1, step 2.2] ∎

## Remarks

- **Why the surjective analogue is missing.** The corresponding statement, that every surjection has a right inverse, is not proved on this page: it is equivalent to the Axiom of Choice, which this page states at [[def-axiom-of-choice]] and assumes in no proof, and choosing one preimage for each point of the codomain is exactly the simultaneous selection no proof here makes. [[rem-where-a-choice-principle-would-be-needed]] records where that boundary falls.
