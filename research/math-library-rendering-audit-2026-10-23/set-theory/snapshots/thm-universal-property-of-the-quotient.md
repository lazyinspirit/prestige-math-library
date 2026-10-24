---
id: thm-universal-property-of-the-quotient
kind: theorem
title: "Let $\\sim$ be an equivalence relation on $A$ with quotient map $\\pi : A \\to A/{\\sim}$, and let $f : A \\to B$. There is a function $g : A/{\\sim} \\to B$ with $g \\circ \\pi = f$ if and only if $a \\sim a'$ implies $f(a) = f(a')$; and such a $g$ is then unique"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-equivalence-relation, def-function, lem-two-functions-are-equal-exactly-when-they-agree-at-every-point, def-injection-surjection-bijection, def-cartesian-product, def-axiom-schema-of-separation, lem-the-composite-of-two-functions-is-a-function, def-relation-domain-range-and-field, def-power-set, def-subset-and-proper-subset]
justified_by: []
aliases: [thm-quotient-universal-property]
landmark: true
short: "universal property of the quotient"
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
    - title: "Quotient set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Equivalence_class"
    - title: "B. Kaya, MATH 320 Set Theory (METU), §3.2"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
pipeline_run: null
---

## Statement

Let $\sim$ be an equivalence relation on a set $A$, let $A/{\sim}$ be its
quotient set and let $\pi := \{\,(a,C) \in A \times (A/{\sim}) : C = [a]\,\}$,
the quotient map. Let $f : A \to B$. Then $\pi$ is a surjective function
$A \to A/{\sim}$ with $\pi(a) = [a]$, and:

- (i) there is a function $g : A/{\sim} \to B$ with $g \circ \pi = f$ if and only if $f(a) = f(a')$ whenever $a \sim a'$;
- (ii) when such a $g$ exists it is unique, and it satisfies $g([a]) = f(a)$ for every $a \in A$.

## Facts & Assumptions

**Given:** an equivalence relation $\sim$ on a set $A$ and a function $f : A \to B$.

[L1] **reflexive**: $a \sim a$ for every $a \in A$ ([[def-equivalence-relation]]).

[L2] **symmetric**: $a \sim b$ implies $b \sim a$, for all $a, b \in A$ ([[def-equivalence-relation]]).

[L3] **transitive**: $a \sim b$ and $b \sim c$ imply $a \sim c$, for all $a, b, c \in A$ ([[def-equivalence-relation]]).

[L4] $[a] \;:=\; \{\, b \in A \;:\; a \sim b \,\} \;\subseteq\; A$ ([[def-equivalence-relation]]).

[L5] $A/{\sim} \;:=\; \{\, [a] \;:\; a \in A \,\}$ ([[def-equivalence-relation]]).

[L6] We write $f : A \to B$, and say $f$ is a **function from $A$ to $B$**, when $f$ is a function with $\operatorname{dom} f = A$ and $\operatorname{ran} f \subseteq B$ ([[def-function]]).

[L7] $f = g$ if and only if $\operatorname{dom} f = \operatorname{dom} g$ and $f(x) = g(x)$ for every $x \in \operatorname{dom} f$ ([[lem-two-functions-are-equal-exactly-when-they-agree-at-every-point]]).

[L8] $f$ is **surjective** (onto) if for every $b \in B$ there is some $x \in A$ with $f(x) = b$ ([[def-injection-surjection-bijection]]).

[L9] $z \in A \times B$ holds if and only if $z = (a,b)$ for some $a \in A$ and some $b \in B$ ([[def-cartesian-product]]).

[L10] For any parameters $\bar p$ and any set $x$, there is a set $y$ whose elements are exactly the elements $z$ of $x$ for which $\varphi(z,\bar p)$ holds ([[def-axiom-schema-of-separation]]).

[L11] $g \circ f$ is a function, $\operatorname{dom}(g \circ f) = f^{-1}[\operatorname{dom} g]$, and $(g \circ f)(x) = g(f(x))$ for every $x$ in that domain ([[lem-the-composite-of-two-functions-is-a-function]]).

[L12] $\operatorname{dom} R := \{\, a : \exists b\ (a,b) \in R \,\}, \qquad \operatorname{ran} R := \{\, b : \exists a\ (a,b) \in R \,\}$ ([[def-relation-domain-range-and-field]]).

[L13] $z \in \mathcal{P}(x)$ holds if and only if $z \subseteq x$ ([[def-power-set]]).

[L14] $x \subseteq y$ means that every element of $x$ is an element of $y$ ([[def-subset-and-proper-subset]]).

## Proof

**Proof technique:** direct.

1.1 $[a] = [a']$ holds if and only if $a \sim a'$. If $a \sim a'$, then for $b \in A$ we get $b \in [a]$ exactly when $a \sim b$, and symmetry with transitivity turns that into $a' \sim b$, so $[a] \subseteq [a']$; the same argument with $a$ and $a'$ exchanged gives the reverse inclusion. Conversely $a \in [a]$ by reflexivity, so $[a] = [a']$ gives $a \in [a']$, that is $a' \sim a$, and symmetry gives $a \sim a'$. [L1, L2, L3, L4, L14]

1.2 $\pi$ is a surjective function $A \to A/{\sim}$ with $\pi(a) = [a]$: it is a set by separation inside $A \times (A/{\sim})$, it is single valued because $[a]$ is determined by $a$, its domain is $A$ since $[a] \in A/{\sim}$ for every $a \in A$, and every element of $A/{\sim}$ is $[a]$ for some $a \in A$, so it is onto. [L4, L5, L6, L8, L9, L10, L12]

1.3 Uniqueness in (ii): if $g$ and $g'$ are functions $A/{\sim} \to B$ with $g \circ \pi = f = g' \circ \pi$, then for $C \in A/{\sim}$ choose $a \in A$ with $C = [a]$; then $g(C) = g(\pi(a)) = f(a) = g'(\pi(a)) = g'(C)$. Both have domain $A/{\sim}$, so $g = g'$. [L5, L6, L7, L11]

2.1 Claim (i), from left to right: suppose $g : A/{\sim} \to B$ satisfies $g \circ \pi = f$, and let $a \sim a'$. Then $[a] = [a']$, so $f(a) = g(\pi(a)) = g([a]) = g([a']) = g(\pi(a')) = f(a')$. [L11, step 1.1, step 1.2]

2.2 Claim (i), from right to left: suppose $f(a) = f(a')$ whenever $a \sim a'$, and separate inside $(A/{\sim}) \times B$ to obtain $g := \{\,(C,y) \in (A/{\sim}) \times B : \exists a\,(a \in A \wedge C = [a] \wedge y = f(a))\,\}$. It is single valued: if $C = [a] = [a']$ with values $f(a)$ and $f(a')$, then $a \sim a'$ and the hypothesis gives $f(a) = f(a')$. Its domain is $A/{\sim}$, since every class is some $[a]$ and then $(C,f(a)) \in g$, and its range lies in $B$; so $g : A/{\sim} \to B$ with $g([a]) = f(a)$. Finally $g \circ \pi$ and $f$ are functions with domain $A$ and $(g \circ \pi)(a) = g([a]) = f(a)$, so $g \circ \pi = f$. [L5, L6, L7, L9, L10, L11, L12, L13, step 1.1, step 1.2]

3.1 Both directions of (i) hold, and step 1.3 supplies the uniqueness in (ii) while step 2.2 supplies the formula $g([a]) = f(a)$, which is the statement. [step 1.1, step 1.2, step 1.3, step 2.1, step 2.2] ∎
