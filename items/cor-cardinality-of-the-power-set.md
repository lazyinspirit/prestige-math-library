---
id: cor-cardinality-of-the-power-set
kind: corollary
title: "$\\lvert\\mathcal{P}(A)\\rvert = 2^{\\lvert A\\rvert}$ for finite $A$"
status: published
origin: session
deps: [thm-cardinality-of-a-set-of-functions, def-nat-power, def-finite-cardinality,
       thm-cantor-powerset, lem-pigeonhole, lem-nat-trichotomy, def-nat-order,
       def-injection-surjection-bijection, def-equinumerous, def-natural-numbers]
justified_by: []
aliases: []
landmark: false
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
    - title: "Power set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Power_set"
    - title: "Cantor's theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cardinality"
    - title: "P. Halmos, Naive Set Theory, §13"
      url: "https://en.wikipedia.org/wiki/Naive_Set_Theory_(book)"
pipeline_run: null
---

## Statement

Let $A$ be a finite set and $n := \lvert A\rvert$. Then the power set
$\mathcal{P}(A)$ is finite and

$$\lvert\mathcal{P}(A)\rvert = 2^{\,n},$$

the power being the $\mathbb{N}$-valued exponentiation of [[def-nat-power]].
Moreover $n < 2^{\,n}$.

The last inequality is the quantitative form, for finite $A$, of Cantor's
theorem $A \prec \mathcal{P}(A)$ ([[thm-cantor-powerset]]), which holds for every
set whatsoever. The two statements are consistent and the proof below derives the
inequality from Cantor's theorem rather than leaving them side by side.

## Facts & Assumptions

**Given:** A finite set $A$ with $n := \lvert A\rvert$, and $2 = \{0,1\}$ as a von Neumann natural ([[def-natural-numbers]]). Write $2^{A}$ for the set of functions $A \to 2$.

[L1] $\lvert X^{Y}\rvert = \lvert X\rvert^{\lvert Y\rvert}$ for finite $X$, $Y$, and $X^{Y}$ is finite ([[thm-cardinality-of-a-set-of-functions]]).

[L2] Cardinality ([[def-finite-cardinality]]): $\lvert m\rvert = m$ for a natural $m$; a bijection transports finiteness and cardinality; and for finite $X$, $Y$ one has $\lvert X\rvert = \lvert Y\rvert$ if and only if $X \approx Y$.

[L3] Cantor's theorem: $A \prec \mathcal{P}(A)$, that is, there is an injection $A \to \mathcal{P}(A)$ and no bijection ([[thm-cantor-powerset]], [[def-equinumerous]]).

[L4] Pigeonhole, claim 2: if $q < p$ then there is no injection $p \to q$ ([[lem-pigeonhole]]).

[L5] Trichotomy: exactly one of $p < q$, $p = q$, $q < p$ holds ([[lem-nat-trichotomy]], [[def-nat-order]]).

[L6] Maps ([[def-injection-surjection-bijection]]): a map with a two-sided inverse is a bijection; a composite of injections is an injection; and $f^{-1}[T] = \{x : f(x) \in T\}$.

## Proof

**Proof technique:** direct.

1.1 The characteristic function. For $S \subseteq A$ define $\chi_S : A \to 2$ by $\chi_S(x) = 1$ when $x \in S$ and $\chi_S(x) = 0$ otherwise, and let $X : \mathcal{P}(A) \to 2^{A}$ be $S \mapsto \chi_S$. Let $Y : 2^{A} \to \mathcal{P}(A)$ be $f \mapsto f^{-1}[\{1\}]$. Both composites are the identity: $\chi_S^{-1}[\{1\}] = \{x \in A : \chi_S(x) = 1\} = S$; and for $f : A \to 2$ and $x \in A$ the value $f(x)$ is $0$ or $1$, so $\chi_{f^{-1}[\{1\}]}(x) = 1$ exactly when $f(x) = 1$ and $= 0$ otherwise, that is $\chi_{f^{-1}[\{1\}]} = f$. Hence $X$ is a bijection and $\mathcal{P}(A) \approx 2^{A}$. [L6, construct]

2.1 Therefore $\mathcal{P}(A)$ is finite and $\lvert\mathcal{P}(A)\rvert = \lvert 2^{A}\rvert = \lvert 2\rvert^{\lvert A\rvert} = 2^{\,n}$, using [L1] and $\lvert 2\rvert = 2$ from [L2]. [step 1.1, L1, L2]

3.1 The inequality. By [L3] there is an injection $A \to \mathcal{P}(A)$; composing with bijections $n \to A$ and $\mathcal{P}(A) \to 2^{\,n}$, which exist by [L2] and step 2.1, gives an injection $n \to 2^{\,n}$. So $2^{\,n} < n$ is impossible by [L4], and $n \le 2^{\,n}$ by [L5]. Also $n \ne 2^{\,n}$: otherwise $\lvert A\rvert = \lvert\mathcal{P}(A)\rvert$, hence $A \approx \mathcal{P}(A)$ by [L2], contradicting [L3]. [step 2.1, L2, L3, L4, L5, L6]

4.1 The two assertions are step 2.1 and step 3.1, so $\lvert\mathcal{P}(A)\rvert = 2^{n}$ and $n < 2^{n}$. [step 2.1, step 3.1] ∎

## Remarks

- **The finiteness of $\mathcal{P}(A)$ is part of the statement**, and it is what
  makes $[A]^{k}$ finite in the next definition: a set of $k$-element subsets is
  a subset of $\mathcal{P}(A)$.

- **Cantor's theorem is not weakened here.** $A \prec \mathcal{P}(A)$ holds for
  every set, finite or infinite, and needs no counting; what the finite case adds
  is the value of the gap, $2^{n}$ against $n$. The inequality above is deduced
  from Cantor's theorem, so no independent argument can disagree with it.
