---
id: lem-the-kernel-of-a-function-is-an-equivalence-relation
kind: lemma
title: "For a function $f : A \\to B$ the relation $\\ker f := \\{\\,(a,a') \\in A \\times A : f(a) = f(a')\\,\\}$ is an equivalence relation on $A$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-function, def-equivalence-relation, def-cartesian-product, def-axiom-schema-of-separation, def-properties-of-a-relation-on-a-set, def-relation-domain-range-and-field]
justified_by: []
aliases: [def-kernel-of-a-function]
landmark: false
short: "the kernel of a function"
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

## Statement

Let $f : A \to B$ be a function. Then

$$\ker f \;:=\; \{\,(a,a') \in A \times A : f(a) = f(a')\,\}$$

is a set, is a relation on $A$, and is an equivalence relation on $A$.

## Facts & Assumptions

**Given:** a function $f : A \to B$.

[L1] We write $f : A \to B$, and say $f$ is a **function from $A$ to $B$**, when $f$ is a function with $\operatorname{dom} f = A$ and $\operatorname{ran} f \subseteq B$ ([[def-function]]).

[L2] For any parameters $\bar p$ and any set $x$, there is a set $y$ whose elements are exactly the elements $z$ of $x$ for which $\varphi(z,\bar p)$ holds ([[def-axiom-schema-of-separation]]).

[L3] $z \in A \times B$ holds if and only if $z = (a,b)$ for some $a \in A$ and some $b \in B$ ([[def-cartesian-product]]).

[L4] $R$ is a **relation on $A$** when $R \subseteq A \times A$ ([[def-relation-domain-range-and-field]]).

[L5] **reflexive**: $a \sim a$ for every $a \in A$ ([[def-equivalence-relation]]).

[L6] **symmetric**: $a \sim b$ implies $b \sim a$, for all $a, b \in A$ ([[def-equivalence-relation]]).

[L7] **transitive**: $a \sim b$ and $b \sim c$ imply $a \sim c$, for all $a, b, c \in A$ ([[def-equivalence-relation]]).

[L8] $R$ is **transitive** when $(a,b) \in R$ and $(b,c) \in R$ imply $(a,c) \in R$, for all $a, b, c \in A$ ([[def-properties-of-a-relation-on-a-set]]).

## Proof

**Proof technique:** direct.

1.1 $\ker f$ is a set and a relation on $A$: it is obtained by separating inside $A \times A$ with the formula $\exists a\,\exists a'\,(z = (a,a') \wedge f(a) = f(a'))$ and the parameters $A$ and $f$, so it is a subset of $A \times A$ and each of its elements is an ordered pair. [L1, L2, L3, L4]

2.1 It is reflexive on $A$: for $a \in A$ the value $f(a)$ is a single set, so $f(a) = f(a)$ and $(a,a) \in \ker f$. [L1, L5, step 1.1]

2.2 It is symmetric: if $(a,a') \in \ker f$ then $f(a) = f(a')$, hence $f(a') = f(a)$ and $(a',a) \in \ker f$. [L6, step 1.1]

2.3 It is transitive: if $(a,a') \in \ker f$ and $(a',a'') \in \ker f$ then $f(a) = f(a')$ and $f(a') = f(a'')$, hence $f(a) = f(a'')$ and $(a,a'') \in \ker f$. [L7, L8, step 1.1]

3.1 $\ker f$ is a relation on $A$ that is reflexive on $A$, symmetric and transitive, which is what it means to be an equivalence relation on $A$. [step 1.1, step 2.1, step 2.2, step 2.3] ∎
