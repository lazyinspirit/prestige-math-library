---
id: lem-the-composite-of-two-functions-is-a-function
kind: lemma
title: "If $f$ and $g$ are functions then $g \\circ f$ is a function with domain $f^{-1}[\\operatorname{dom} g]$ and $(g \\circ f)(x) = g(f(x))$ there; $\\Delta_A$ is a function with $\\Delta_A(a) = a$; and $f \\circ \\Delta_A = f = \\Delta_B \\circ f$ for $f : A \\to B$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-function, def-inverse-relation-composition-and-restriction, def-image-and-preimage-under-a-relation, def-relation-domain-range-and-field, def-the-identity-and-membership-relations-on-a-set, prop-composition-of-relations-is-associative]
justified_by: []
aliases: []
landmark: false
short: "composites of functions"
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
    - title: "B. Kaya, MATH 320 Set Theory (METU), Lemma 5 and Exercise 11"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Function composition (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Function_composition"
    - title: "Function (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Function_(mathematics)"
pipeline_run: null
---

## Statement

Let $f$ and $g$ be functions and let $A$, $B$ be sets. Then

- (i) $g \circ f$ is a function, $\operatorname{dom}(g \circ f) = f^{-1}[\operatorname{dom} g]$, and $(g \circ f)(x) = g(f(x))$ for every $x$ in that domain;
- (ii) $\Delta_A$ is a function with $\operatorname{dom} \Delta_A = A$ and $\Delta_A(a) = a$ for every $a \in A$;
- (iii) if $f : A \to B$ then $f \circ \Delta_A = f$ and $\Delta_B \circ f = f$.

## Facts & Assumptions

**Given:** functions $f$ and $g$, and sets $A$, $B$.

[L1] A **function** is a relation $f$ such that $(a,b) \in f$ and $(a,c) \in f$ imply $b = c$ ([[def-function]]).

[L2] $(a,c) \in S \circ R$ holds if and only if $(a,b) \in R$ and $(b,c) \in S$ for some $b$ ([[def-inverse-relation-composition-and-restriction]]).

[L3] $\operatorname{dom} R := \{\, a : \exists b\ (a,b) \in R \,\}$ ([[def-relation-domain-range-and-field]]).

[L4] $a \in R^{-1}[B]$ holds if and only if $(a,b) \in R$ for some $b \in B$ ([[def-image-and-preimage-under-a-relation]]).

[L5] $(a,b) \in \Delta_A$ holds if and only if $a = b$ and $a \in A$ ([[def-the-identity-and-membership-relations-on-a-set]]).

[L6] if $R$ is a relation from $A$ to $B$, then $\Delta_B \circ R = R$ and $R \circ \Delta_A = R$ ([[prop-composition-of-relations-is-associative]]).

## Proof

**Proof technique:** direct.

1.1 Claim (i), single-valuedness: $g \circ f$ is a relation, and if $(a,c)$ and $(a,c')$ both lie in it, there are $b$ and $b'$ with $(a,b),(a,b') \in f$ and $(b,c),(b',c') \in g$; single-valuedness of $f$ gives $b = b'$, and then single-valuedness of $g$ gives $c = c'$. [L1, L2]

1.2 Claim (ii): if $(a,b)$ and $(a,c)$ lie in $\Delta_A$ then $b = a = c$, so $\Delta_A$ is a function; its domain is $A$, because $(a,a) \in \Delta_A$ exactly for $a \in A$, and its value at $a$ is $a$. [L1, L3, L5]

1.3 Claim (iii): a function $f : A \to B$ has $\operatorname{dom} f = A$ and $\operatorname{ran} f \subseteq B$, so it is a relation from $A$ to $B$, and the identity laws for relations apply verbatim. [L6]

2.1 Claim (i), domain and values: $a \in \operatorname{dom}(g \circ f)$ holds exactly when there are $b$ and $c$ with $(a,b) \in f$ and $(b,c) \in g$, that is, exactly when $a \in \operatorname{dom} f$ and $f(a) \in \operatorname{dom} g$; and that is exactly the condition $a \in f^{-1}[\operatorname{dom} g]$. For such an $a$ the pair $(a, g(f(a)))$ lies in $g \circ f$, so $(g \circ f)(a) = g(f(a))$ by step 1.1. [L1, L2, L3, L4, step 1.1]

3.1 Claims (i), (ii) and (iii) are established, which is the statement. [step 1.1, step 1.2, step 1.3, step 2.1] ∎
