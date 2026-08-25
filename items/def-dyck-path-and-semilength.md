---
id: def-dyck-path-and-semilength
kind: definition
title: "Dyck paths of semilength $n$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-diagonal-lattice-path-and-its-height, lem-lattice-paths-are-determined-by-their-step-words]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "A. Postnikov (notes by A. Lin), MIT 18.212 Algebraic Combinatorics, Spring 2019, Example 4"
      url: "https://web.stanford.edu/~lindrew/18.212.pdf"
    - title: 'C. Krattenthaler, "Lattice Path Enumeration", ch. 10 of the Handbook of Enumerative Combinatorics, §10.3'
      url: "https://arxiv.org/pdf/1503.05930"
pipeline_run: null
---

## Definition

Let $n\in\mathbb{N}$. A **Dyck path of semilength $n$** is a diagonal lattice
path of length $2n$ from $(0,0)$ to $(2n,0)$ whose height function satisfies
$h(i)\ge0$ for every $i$ with $0\le i\le 2n$
([[def-diagonal-lattice-path-and-its-height]]). Write

$$\mathcal{D}_n := \{\, v\in\mathcal{W}((0,0),(2n,0)) : h(i)\ge0 \text{ for } 0\le i\le 2n \,\}$$

for the set of them. The word *semilength* records that the path has $2n$ steps:
its length is $2n$ and its semilength is $n$.

**Small cases, read off the definition.** For $n=0$ the path has length $0$, so
$\mathcal{D}_0$ consists of the empty path at $(0,0)$ and has exactly one
element. For $n=1$ there are two diagonal paths of length $2$ from $(0,0)$ to
$(2,0)$, with step words $UD$ and $DU$ and height sequences $0,1,0$ and
$0,-1,0$; only the first has $h\ge0$, so $\mathcal{D}_1$ has exactly one element.

**Ballot words.** A **ballot word of length $2n$** is a word
$w\in\{U,D\}^{2n}$ in which the number of letters $U$ equals the number of
letters $D$ and, for every $i\le 2n$, the number of letters $U$ among the first
$i$ is at least the number of letters $D$ among them. Step words identify the two
notions: by [[lem-lattice-paths-are-determined-by-their-step-words]] the map
$v\mapsto$ (step word of $v$) is a bijection from the diagonal paths of length
$2n$ starting at $(0,0)$ onto $\{U,D\}^{2n}$, and under it the two conditions
defining $\mathcal{D}_n$ become the two conditions defining a ballot word. For
with $\mu(i)$ the number of letters $U$ among the first $i$, the height formula
$h(i)=2\mu(i)-i$ of [[def-diagonal-lattice-path-and-its-height]] gives

$$h(i)\ge0 \iff \mu(i)\ge i-\mu(i), \qquad h(2n)=0 \iff \mu(2n)=n,$$

and $i-\mu(i)$ is the number of letters $D$ among the first $i$. **So
$\mathcal{D}_n$ and the set of ballot words of length $2n$ correspond
bijectively**, and either may be used to compute the other's size.

## Remarks

- **Why the height condition is weak and not strict.** A diagonal path from
  $(0,0)$ has $h(0)=0$, so a strict condition $h>0$ would be satisfied by nothing
  at all. The condition that bites is at the interior indices, and the two
  endpoints are on the boundary of it by construction.

- **Semilength, not length, is the index.** Every count below is stated in terms
  of $n$, and the path it counts has $2n$ steps. A statement about $\mathcal{D}_n$
  is never a statement about paths of length $n$; the odd lengths carry no Dyck
  paths at all, since a path of odd length from $(0,0)$ cannot return to height
  $0$.
