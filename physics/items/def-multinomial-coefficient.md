---
id: def-multinomial-coefficient
kind: definition
title: "The multinomial coefficient $\\binom{n}{k_0,\\dots,k_{m-1}}$ as the number of ordered partitions of an $n$-set into blocks of prescribed sizes"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-binomial-coefficient, thm-cardinality-of-a-set-of-functions, thm-subset-of-a-finite-set,
       thm-sum-rule, def-sum-over-a-finite-index-set, def-nat-finite-sum-and-product,
       lem-nat-finite-sum-laws-and-the-canonical-embedding, def-finite-cardinality,
       def-injection-surjection-bijection, def-equinumerous, def-nat-order,
       lem-nat-add-cancellative, def-natural-numbers]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Multinomial theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Multinomial_theorem"
    - title: "Multinomial distribution (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Multinomial_distribution"
    - title: "R. Stanley, Enumerative Combinatorics, Vol. 1, Ch. 1"
      url: "https://en.wikipedia.org/wiki/Enumerative_Combinatorics"
pipeline_run: null
---

## Definition

Let $m, n \in \mathbb{N}$. Write

$$\mathcal{W}(n,m) := \Big\{\, k : m \to \mathbb{N} \ \Big|\ \sum_{i<m} k_i = n \,\Big\},$$

the set of $m$-tuples of naturals summing to $n$, the sum being the
$\mathbb{N}$-valued one of [[def-nat-finite-sum-and-product]].

**$\mathcal{W}(n,m)$ is finite.** If $\sum_{i<m}k_i = n$ then each $k_i \le n$ by
the monotonicity clause of
[[lem-nat-finite-sum-laws-and-the-canonical-embedding]] (a term of a sum of
naturals is at most the sum), so $\mathcal{W}(n,m)$ is a subset of the set of
functions $m \to \sigma(n)$, which is finite by
[[thm-cardinality-of-a-set-of-functions]]; now apply
[[thm-subset-of-a-finite-set]].

**Block decompositions as colourings.** For a finite set $A$ and $k : m \to
\mathbb{N}$ put

$$\mathcal{B}(A,k) := \big\{\, c : A \to m \ \big|\ \lvert c^{-1}[\{i\}]\rvert = k_i \text{ for every } i < m \,\big\}.$$

A colouring $c$ is the same thing as an ordered decomposition of $A$ into the $m$
blocks $c^{-1}[\{0\}], \dots, c^{-1}[\{m-1\}]$; presenting it as a function makes
the blocks a partition of $A$ automatically, so that
[[thm-sum-rule]] and [[thm-cardinality-of-a-set-of-functions]] apply verbatim.
$\mathcal{B}(A,k)$ is a subset of the finite set $m^{A}$, hence finite.

```tikz
\begin{tikzpicture}[x=1cm,y=0.72cm]
  \draw (0,1.75) ellipse (0.9 and 2.25);
  \draw (4.4,1.75) ellipse (0.9 and 1.65);
  \node at (0,4.35) {$A$};
  \node at (4.4,3.8) {$m=3$};
  \node (a1) at (0,3.25) {$a_1$};
  \node (a2) at (0,2.65) {$a_2$};
  \node (b1) at (0,1.75) {$b_1$};
  \node (c1) at (0,0.85) {$c_1$};
  \node (c2) at (0,0.25) {$c_2$};
  \node (c3) at (0,-0.35) {$c_3$};
  \node (z0) at (4.4,2.75) {$0$};
  \node (z1) at (4.4,1.75) {$1$};
  \node (z2) at (4.4,0.75) {$2$};
  \draw[->] (a1) -- (z0);
  \draw[->] (a2) -- (z0);
  \draw[->] (b1) -- (z1);
  \draw[->] (c1) -- (z2);
  \draw[->] (c2) -- (z2);
  \draw[->] (c3) -- (z2);
  \node at (2.2,-1.05) {$(|c^{-1}(0)|,|c^{-1}(1)|,|c^{-1}(2)|)=(2,1,3)$};
\end{tikzpicture}
```

**The hypothesis is part of the definition, and it is forced.** The fibres
$c^{-1}[\{i\}]$, $i < m$, are pairwise disjoint with union $A$, so
[[thm-sum-rule]] gives
$\lvert A\rvert = \sum_{i<m}\lvert c^{-1}[\{i\}]\rvert = \sum_{i<m}k_i$ for any
$c \in \mathcal{B}(A,k)$. Hence $\mathcal{B}(A,k) = \varnothing$ unless
$k \in \mathcal{W}(\lvert A\rvert, m)$, and the coefficient is defined only under
that hypothesis.

**$\lvert\mathcal{B}(A,k)\rvert$ depends only on $\lvert A\rvert$.** If
$h : A \to A'$ is a bijection then $c \mapsto c \circ h^{-1}$ maps
$\mathcal{B}(A,k)$ to $\mathcal{B}(A',k)$, because
$(c\circ h^{-1})^{-1}[\{i\}] = h\big[c^{-1}[\{i\}]\big]$ has the same cardinality
as $c^{-1}[\{i\}]$ ([[def-finite-cardinality]]); and $c' \mapsto c' \circ h$ is
its two-sided inverse.

**Definition.** For $k \in \mathcal{W}(n,m)$ set

$$\binom{n}{k_0,\dots,k_{m-1}} := \big\lvert\mathcal{B}(n,k)\big\rvert \in \mathbb{N},$$

abbreviated $\binom{n}{k}$ when the tuple is named. By the previous paragraph,
$\lvert\mathcal{B}(A,k)\rvert = \binom{\lvert A\rvert}{k}$ for every finite $A$
with $\lvert A\rvert = n$. Like the binomial coefficient, it is **defined as a
count**, so it is a natural number by construction.

**Boundary cases.**

- $m = 0$. The empty sum is $0$, so $\mathcal{W}(n,0)$ is nonempty only for
  $n = 0$, where its single element is the empty tuple. And
  $\mathcal{B}(\varnothing, ())$ contains exactly the empty function, so
  $\binom{0}{\ } = 1$.
- A block of size $0$ is allowed: $k_i = 0$ simply means
  $c^{-1}[\{i\}] = \varnothing$.
- $m = 2$ recovers the binomial coefficient: for $k \le n$,
  $\binom{n}{k,\,n-k} = \binom{n}{k}$. The map $c \mapsto c^{-1}[\{0\}]$ sends
  $\mathcal{B}(A,(k,n-k))$ into $[A]^{k}$, and $S \mapsto$ the colouring taking
  the value $0$ on $S$ and $1$ off it is its two-sided inverse, the second fibre
  having cardinality $n - k$ by [[thm-sum-rule]]. So the two notations do not
  collide.

## Remarks

- **Nonemptiness in the other direction.** Conversely, if
  $k \in \mathcal{W}(n,m)$ then $\mathcal{B}(A,k) \ne \varnothing$. This is not
  proved here and is not needed for the definition: it follows from
  [[thm-multinomial-theorem]], whose clause 1 gives
  $\binom{n}{k}\prod_{i<m}k_i! = n! \ne 0$, so the count $\binom{n}{k}$ is
  nonzero and the set it counts is nonempty.

- **Why a colouring and not a tuple of sets.** An $m$-tuple $(S_0,\dots,S_{m-1})$
  of pairwise disjoint sets with union $A$ carries exactly the same information,
  but the disjointness and the covering would then be side conditions to be
  checked at every use. As fibres of a function they hold by construction.

- **$\mathcal{W}(n,m)$ will get a name.** Its elements are the *weak
  compositions* of $n$ into $m$ parts, and they are counted in
  [[thm-stars-and-bars]]; [[def-composition-of-a-natural-number]] fixes the
  terminology. The set is introduced here because the multinomial coefficient
  cannot be stated without it.
