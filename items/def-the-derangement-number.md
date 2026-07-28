---
id: def-the-derangement-number
kind: definition
title: "The derangement number $D_n$: the number of bijections of an $n$-element set with no fixed point"
status: draft
origin: session
deps: [thm-number-of-bijections-of-a-finite-set, def-finite-cardinality, thm-subset-of-a-finite-set,
       def-injection-surjection-bijection, def-natural-numbers, def-factorial-and-falling-factorial]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Derangement (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Derangement"
    - title: "Rencontres numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Rencontres_numbers"
    - title: "Inclusion-exclusion principle (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Inclusion%E2%80%93exclusion_principle"
pipeline_run: null
---

## Definition

Let $A$ be a finite set. A **derangement** of $A$ is a bijection $f : A \to A$
with $f(a) \ne a$ for every $a \in A$ ([[def-injection-surjection-bijection]]).
Write

$$\operatorname{Der}(A) := \{\, f \in \operatorname{Bij}(A) \ :\ f(a) \ne a \text{ for every } a \in A \,\},$$

where $\operatorname{Bij}(A)$ is the set of bijections of $A$ onto itself.

**$\operatorname{Der}(A)$ is finite.** $\operatorname{Bij}(A)$ is finite with
$\lvert\operatorname{Bij}(A)\rvert = \lvert A\rvert!$
([[thm-number-of-bijections-of-a-finite-set]],
[[def-factorial-and-falling-factorial]]), and $\operatorname{Der}(A)$ is a subset
of it, hence finite ([[thm-subset-of-a-finite-set]], clause 1). So
$\lvert\operatorname{Der}(A)\rvert$ is a natural number
([[def-finite-cardinality]]).

**The count depends only on $\lvert A\rvert$.** Let $h : A \to A'$ be a bijection
of finite sets. The map $f \mapsto h \circ f \circ h^{-1}$ sends
$\operatorname{Bij}(A)$ into $\operatorname{Bij}(A')$, since composites and
inverses of bijections are bijections, and it sends $\operatorname{Der}(A)$ into
$\operatorname{Der}(A')$: if $h(f(h^{-1}(a'))) = a'$ for some $a' \in A'$ then,
applying $h^{-1}$ and writing $a := h^{-1}(a')$, we get $f(a) = a$. The map
$g \mapsto h^{-1} \circ g \circ h$ is a two-sided inverse, so
$\operatorname{Der}(A) \approx \operatorname{Der}(A')$ and the two sets have the
same cardinality by the transport clause (c) of [[def-finite-cardinality]].

**Definition.** For $n \in \mathbb{N}$ ([[def-natural-numbers]]) set

$$D_n \;:=\; \big\lvert \operatorname{Der}(n) \big\rvert \in \mathbb{N},$$

the **derangement number**. Since $\lvert n\rvert = n$, the previous paragraph
gives $\lvert\operatorname{Der}(A)\rvert = D_{\lvert A\rvert}$ for every finite
set $A$.

**Three values, read off the definition and not stipulated.**

- $D_0 = 1$. Here $0 = \varnothing$, the only function $\varnothing \to \varnothing$
  is the empty function, it is a bijection, and the condition "$f(a) \ne a$ for
  every $a \in \varnothing$" holds vacuously. So
  $\operatorname{Der}(\varnothing) = \{\varnothing\}$.
- $D_1 = 0$. Here $1 = \{0\}$ and the only bijection of $\{0\}$ is the identity,
  which fixes $0$.
- $D_2 = 1$. Here $2 = \{0,1\}$, the two bijections are the identity and the
  exchange of $0$ and $1$, and only the second is fixed-point free.

## Remarks

- **A set of bijections, with no group vocabulary.** The object counted is a set
  of functions. Nothing among this page's declared prerequisites defines a
  symmetric group, a permutation cycle or a conjugacy class, and no result about
  $D_n$ stated here needs one.

- **$D_0 = 1$ is not a convention.** It is what the definition returns at
  $n = 0$, and it is the value that makes the closed formula and the first
  recurrence true at their first legal index. A text that sets $D_0 = 1$ "by
  convention" is stipulating what is here computed.
