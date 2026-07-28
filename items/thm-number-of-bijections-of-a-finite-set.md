---
id: thm-number-of-bijections-of-a-finite-set
kind: theorem
title: "A finite set $A$ with $\\lvert A\\rvert = n$ has exactly $n!$ bijections onto itself, and $n!$ bijections onto any set of the same cardinality"
status: published
origin: session
deps: [thm-number-of-injections, thm-subset-of-a-finite-set, def-factorial-and-falling-factorial,
       def-finite-cardinality, def-injection-surjection-bijection, def-equinumerous]
justified_by: []
forward_refs: [def-symmetric-group]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Permutation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Permutation"
    - title: "Factorial (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Factorial"
    - title: "R. Stanley, Enumerative Combinatorics, Vol. 1, Ch. 1"
      url: "https://en.wikipedia.org/wiki/Enumerative_Combinatorics"
pipeline_run: null
---

## Statement

Let $A$ be a finite set with $n := \lvert A\rvert$ and write

$$\operatorname{Bij}(A) := \{\, f : A \to A \ :\ f \text{ is a bijection} \,\}.$$

Then $\operatorname{Bij}(A)$ is finite and $\lvert\operatorname{Bij}(A)\rvert = n!$
([[def-factorial-and-falling-factorial]]).

More generally, for finite sets $X$ and $Y$ write $\operatorname{Bij}(X,Y)$ for
the set of bijections $X \to Y$. If $\lvert X\rvert = \lvert Y\rvert = n$ then
$\operatorname{Bij}(X,Y)$ is finite with $n!$ elements, and if
$\lvert X\rvert \ne \lvert Y\rvert$ then $\operatorname{Bij}(X,Y) = \varnothing$.

## Facts & Assumptions

**Given:** Finite sets $A$, $X$, $Y$, with $n = \lvert A\rvert$.

[L1] $\lvert\operatorname{Inj}(B,A)\rvert = \lvert A\rvert^{\underline{\lvert B\rvert}}$, and $\operatorname{Inj}(B,A)$ is finite ([[thm-number-of-injections]]).

[L2] Every injection of a finite set into itself is a bijection ([[thm-subset-of-a-finite-set]], clause 4).

[L3] $n^{\underline{n}} = n!$ ([[def-factorial-and-falling-factorial]], clause (d)).

[L4] Cardinality ([[def-finite-cardinality]]): a bijection transports finiteness and cardinality, and for finite $X$, $Y$ one has $\lvert X\rvert = \lvert Y\rvert$ if and only if $X \approx Y$.

[L5] Maps ([[def-injection-surjection-bijection]], [[def-equinumerous]]): composites and inverses of bijections are bijections, and every bijection is an injection.

## Proof

**Proof technique:** direct.

1.1 The two sets coincide: $\operatorname{Bij}(A) = \operatorname{Inj}(A,A)$. Every bijection is an injection, and by [L2] every injection $A \to A$ is a bijection, $A$ being finite. [L2, L5]

2.1 Hence $\operatorname{Bij}(A)$ is finite with $\lvert\operatorname{Bij}(A)\rvert = \lvert\operatorname{Inj}(A,A)\rvert = n^{\underline{n}} = n!$, by [L1] with $B = A$ and by [L3]. [step 1.1, L1, L3]

3.1 The two-set form. Suppose $\lvert X\rvert = \lvert Y\rvert = n$. Then $X \approx Y$ by [L4], so fix a bijection $u : Y \to X$. The map $g \mapsto u \circ g$ sends $\operatorname{Bij}(X,Y)$ into $\operatorname{Bij}(X,X) = \operatorname{Bij}(X)$ and has the two-sided inverse $h \mapsto u^{-1}\circ h$, so it is a bijection; hence $\operatorname{Bij}(X,Y)$ is finite with $\lvert\operatorname{Bij}(X,Y)\rvert = \lvert\operatorname{Bij}(X)\rvert = n!$ by step 2.1 and [L4]. If instead $\lvert X\rvert \ne \lvert Y\rvert$ then $X \not\approx Y$ by [L4], so no bijection $X \to Y$ exists at all. [step 2.1, L4, L5]

4.1 The first assertion is step 2.1 and the second is step 3.1. [step 2.1, step 3.1] ∎

## Remarks

- **No group vocabulary is used or needed.** $\operatorname{Bij}(A)$ is written
  here as a **set** of bijections. Composition makes it a group, and that
  structure, together with the name *symmetric group*, is introduced in
  [[def-symmetric-group]] later in the reading order; the pointer is orientation
  only and nothing above rests on it. The count $n!$ proved here is what a later
  page needs in order to say that the symmetric group on $n$ letters has $n!$
  elements.

- **Why this is on the main page and not among the examples.** Later pages
  consume this count, and an examples page is a leaf that nothing else may
  depend on.

- **The two-set form costs one line and is used immediately.** The closed formula
  for $\binom{n}{k}$ counts the bijections between an initial segment and an
  arbitrary $k$-element subset, which is exactly $\operatorname{Bij}(X,Y)$ with
  $X \ne Y$.
