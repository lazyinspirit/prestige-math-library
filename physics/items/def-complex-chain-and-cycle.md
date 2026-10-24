---
id: def-complex-chain-and-cycle
kind: definition
title: "Complex chains, their traces, and cycles"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-complex-contours-reversal-concatenation-and-closedness, def-finite-sum, lem-finite-sum-laws, def-finite-sum-in-a-commutative-monoid, def-complex-domain, def-integers, def-finite-cardinality, thm-int-comm-ring]
justified_by: []
aliases: []
landmark: true
verification:
  audited: 2026-08-26
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 4 §4.4"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "M. Weber, Complex Analysis (Indiana University), Ch. 4 §4.1"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
pipeline_run: null
---

## Definition

Let $\Omega\subseteq\mathbb C$ be open. A **complex chain in $\Omega$** is a
finite list

$$\Gamma=\bigl((m_0,\gamma_0),\dots,(m_{r-1},\gamma_{r-1})\bigr),\qquad r\in\mathbb N,$$

each $m_k$ an integer ([[def-integers]]) and each
$\gamma_k:[a_k,b_k]\to\mathbb C$ a complex contour
([[def-complex-contours-reversal-concatenation-and-closedness]]) whose trace
lies in $\Omega$. It is written $\sum_{k<r}m_k\gamma_k$. The list of length $r=0$
is the **empty chain**.

Its **trace** is the set

$$\Gamma^\ast:=\bigcup\{\,\gamma_k^\ast\ :\ k<r\text{ and }m_k\ne0\,\},$$

a subset of $\Omega$; a term with $m_k=0$ contributes nothing to it.

Its **boundary** is the function $\partial\Gamma:\mathbb C\to\mathbb Z$ given by

$$\partial\Gamma(q):=\sum_{\substack{k<r\\ \gamma_k(b_k)=q}}m_k\ -\ \sum_{\substack{k<r\\ \gamma_k(a_k)=q}}m_k,$$

each sum being a finite sum over a subset of $\{k:k<r\}$
([[def-finite-sum-in-a-commutative-monoid]], [[def-finite-cardinality]]), and
the subtraction is that of the commutative ring $\mathbb Z$
([[thm-int-comm-ring]]). The chain $\Gamma$ is a **cycle** when $\partial\Gamma(q)=0$ for every
$q\in\mathbb C$.

**Sum and negation.** For chains $\Gamma_1$ and $\Gamma_2$ in $\Omega$, the sum
$\Gamma_1+\Gamma_2$ is the concatenated list, and $-\Gamma$ is the list with
every coefficient replaced by $-m_k$ and every contour unchanged. Write
$\Gamma_1-\Gamma_2:=\Gamma_1+(-\Gamma_2)$. The **reversal** $\Gamma^-$ is the
list with every coefficient unchanged and every contour replaced by its
reversal; the additive inverse $-m_k$ is taken in $\mathbb Z$
([[thm-int-comm-ring]]).

## Remarks

**A chain is a list, and equality of chains is equality of lists.** No free
abelian group on the set of contours is introduced here, and no result on this
page asserts that two differently presented chains are equal: every statement
below is about a given list, and the operations above produce lists. This is a
deliberate departure from the presentations that define a chain as a group
element, and it is what removes the obligation to say when two chains coincide.

**Which lists are cycles.** The empty chain is a cycle, both boundary sums being
empty and hence $0$ ([[def-finite-sum-in-a-commutative-monoid]]). A list all of
whose contours are closed is a cycle: for such a $\gamma_k$ the two endpoint
values coincide, so $m_k$ enters the sum at $q=\gamma_k(a_k)$ once positively and
once negatively and cancels there, and enters neither sum at any other point. In
particular a single closed contour, taken as the list of length $1$ with
$m_0=1$, is a cycle. Terms with $m_k=0$ add $0$ to both sums and so never affect
$\partial\Gamma$.

**Cycles are more general than lists of closed contours.** The condition is that
the endpoints cancel *after* the coefficients are counted, not that each piece
closes up: two contours with the same initial point and the same terminal point,
carried with coefficients $+1$ and $-1$, form a cycle although neither is
closed. The distinction is what the integral results below actually use: the
vanishing of the boundary function is exactly the hypothesis under which the
integral of a continuous derivative over $\Gamma$ is zero.

**Ambient set.** A chain is a chain *in* $\Omega$; the same list is a chain in
every open set containing all the $\gamma_k^\ast$, and in particular in
$\mathbb C$. When a nonempty connected $\Omega$ is wanted it is called a complex
domain ([[def-complex-domain]]). Finite sums of integers and of complex numbers
are finite sums in their additive commutative monoids, as in
[[def-finite-sum-in-a-commutative-monoid]].
