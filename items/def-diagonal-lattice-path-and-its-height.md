---
id: def-diagonal-lattice-path-and-its-height
kind: definition
title: "Diagonal lattice paths with steps $U=(1,1)$ and $D=(1,-1)$, and the height function"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-lattice-path-and-step-set, def-integers, lem-lattice-paths-are-determined-by-their-step-words, thm-induction-principle, def-finite-cardinality, def-divides-in-z, def-int-abs]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: 'C. Krattenthaler, "Lattice Path Enumeration", ch. 10 of the Handbook of Enumerative Combinatorics, §10.3'
      url: "https://arxiv.org/pdf/1503.05930"
    - title: "A. Postnikov (notes by A. Lin), MIT 18.212 Algebraic Combinatorics, Spring 2019"
      url: "https://web.stanford.edu/~lindrew/18.212.pdf"
pipeline_run: null
---

## Definition

A **diagonal lattice path** is a lattice path whose steps lie in the step set
$\{U,D\}$ with $U=(1,1)$, $D=(1,-1)$ ([[def-lattice-path-and-step-set]]). Write

$$\mathcal{W}(P;n) := \mathcal{L}_{\{U,D\}}(P;n)$$

for the diagonal paths of length $n$ from $P$.

**Every diagonal path advances one unit in the first coordinate at each step.**
Both steps have first coordinate $1$, so if $v\in\mathcal{W}((0,a);n)$ and $x(i)$
denotes the first coordinate of $v(i)$ then $x(0)=0$ and $x(i)=x(i-1)+1$ for
$1\le i\le n$; induction on $i$ ([[thm-induction-principle]]) gives $x(i)=i$.
Hence

$$v(i) = (i,\ h(i)) \qquad (0\le i\le n)$$

for a unique function $h:\{0,1,\dots,n\}\to\mathbb{Z}$ ([[def-integers]]), the
**height function** of $v$. It satisfies

$$h(0)=a, \qquad h(i)-h(i-1)\in\{1,-1\} \quad (1\le i\le n),$$

and conversely every such $h$ is the height function of exactly one
$v\in\mathcal{W}((0,a);n)$: the word $w$ with $w_{i-1}=U$ when $h(i)-h(i-1)=1$
and $w_{i-1}=D$ otherwise is the only step word producing those heights, and step
words correspond bijectively to paths
([[lem-lattice-paths-are-determined-by-their-step-words]]). **A diagonal path from
$(0,a)$ and its height function are therefore the same datum**, and the two are
used interchangeably below.

**Height after $i$ steps.** With $w$ the step word of $v$ and

$$\mu(i) := \lvert\{\, j\in\mathbb{N} : j<i,\ w_j=U \,\}\rvert$$

the number of up-steps among the first $i$ ([[def-finite-cardinality]]), one has

$$h(i) = a+\mu(i)-(i-\mu(i)) = a+2\mu(i)-i \qquad (0\le i\le n).$$

Indeed $\mu(0)=0$ and $h(0)=a$; and if the formula holds at $i-1$, then
$w_{i-1}=U$ raises $h$ by $1$ and $\mu$ by $1$, while $w_{i-1}=D$ lowers $h$ by
$1$ and leaves $\mu$ unchanged, so it holds at $i$. Induction on $i$ finishes it.

**Prescribing the endpoint.** For $b\in\mathbb{Z}$ put

$$\mathcal{W}((0,a),(n,b)) := \{\, v\in\mathcal{W}((0,a);n) : h(n)=b \,\},$$

which by the previous paragraph is the set of $v$ whose step word has
$2\mu(n)=n+b-a$. It is nonempty exactly when $2$ divides $n+b-a$
([[def-divides-in-z]]) and

$$-n\le b-a\le n,$$

the second condition being $\lvert b-a\rvert\le n$, since $\lvert x\rvert$ is $x$
or $-x$ according as $x\ge 0$ or $x<0$ ([[def-int-abs]]). For if such a $v$
exists then $2\mu(n)=n+b-a$ with $0\le\mu(n)\le n$, giving both conditions; and if
they hold, then $u:=\mu(n)$ is forced to be the natural number with $2u=n+b-a$,
which satisfies $0\le u\le n$, and the word $U^{u}D^{\,n-u}$ traces such a path.

**Levels.** For $c\in\mathbb{Z}$ a diagonal path with height function $h$ **touches
the level $c$** when $h(i)=c$ for some $i$ with $0\le i\le n$; it **stays strictly
above the level $c$** when $h(i)>c$ for every such $i$, and **stays weakly above
$c$** when $h(i)\ge c$ for every such $i$.

## Remarks

- **The two conditions on the endpoint are not interchangeable.** The parity
  condition says which heights are reachable at all after $n$ steps; the range
  condition says the height cannot move further than one unit per step. Dropping
  either leaves an empty set, and the count below is stated so that it returns
  $0$ in both cases rather than being undefined.

- **The height function is the object, the path is the packaging.** Every
  statement below about diagonal paths is a statement about $h$, and the pair
  $(i,h(i))$ is carried only so that the results of
  [[def-lattice-path-and-step-set]] apply unchanged.
