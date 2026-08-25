---
id: lem-monotone-and-diagonal-lattice-paths-correspond
kind: lemma
title: "The two step sets describe the same objects: $U\\mapsto N$, $D\\mapsto E$ is a bijection matching the diagonal $y=x$ with the level $0$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-monotone-lattice-path, def-diagonal-lattice-path-and-its-height, thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse, lem-lattice-paths-are-determined-by-their-step-words]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'C. Krattenthaler, "Lattice Path Enumeration", ch. 10 of the Handbook of Enumerative Combinatorics, §§10.2–10.3'
      url: "https://arxiv.org/pdf/1503.05930"
pipeline_run: null
---

## Statement

Let $u,d\in\mathbb{N}$ and put $n:=u+d$. Replacing each letter $U$ of a step word
by $N$ and each letter $D$ by $E$ induces a bijection

$$\Lambda : \mathcal{W}((0,0),(n,u-d)) \longrightarrow \mathcal{M}((0,0),(d,u))$$

from the diagonal paths of length $n$ from $(0,0)$ ending at height $u-d$
([[def-diagonal-lattice-path-and-its-height]]) onto the monotone paths from
$(0,0)$ to $(d,u)$ ([[def-monotone-lattice-path]]).

Moreover the two pictures agree step by step: if $v$ has height function $h$ and
$\Lambda(v)(i)=(x_i,y_i)$, then

$$h(i) = y_i-x_i \qquad (0\le i\le n).$$

Consequently, for every $c\in\mathbb{Z}$ and every $i$, the height inequality
$h(i)\ge c$ holds if and only if $y_i-x_i\ge c$; in particular staying weakly
above the level $0$ corresponds to staying weakly above the diagonal $y=x$.

## Facts & Assumptions

**Given:** natural numbers $u$ and $d$, and $n=u+d$.

[F1] A diagonal lattice path is a lattice path whose steps lie in the step set $\{U,D\}$ with $U=(1,1)$, $D=(1,-1)$; a diagonal path of length $n$ from $(0,0)$ has $v(i)=(i,h(i))$, and with $\mu(i)$ the number of up-steps among the first $i$ its height is $h(i)=2\mu(i)-i$ when $a=0$ ([[def-diagonal-lattice-path-and-its-height]]).

[F2] A monotone lattice path is a lattice path whose steps lie in the step set $\{E,N\}$ with $E=(1,0)$ and $N=(0,1)$; for such a path from $(a,b)$ with step word $w$ and $\nu(i)$ the number of $N$ letters among the first $i$, one has $v(i)=(a+i-\nu(i),\ b+\nu(i))$ ([[def-monotone-lattice-path]]).

[L1] For $f:A\to B$: $f$ is a bijection if and only if there is a function $g:B\to A$ with $g\circ f=\Delta_A$ and $f\circ g=\Delta_B$ ([[thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse]]).

[L2] For a step set $S$, a point $P$ and $\ell\in\mathbb{N}$, the map sending a lattice path to its step word is a bijection $\mathcal{L}_S(P;\ell)\to S^{\ell}$ ([[lem-lattice-paths-are-determined-by-their-step-words]]).

## Proof

**Proof technique:** direct.

1.1 The letter map $\lambda:\{U,D\}\to\{E,N\}$ with $\lambda(U)=N$ and $\lambda(D)=E$ has the two-sided inverse $N\mapsto U$, $E\mapsto D$, so composing a word with $\lambda$ carries $\{U,D\}^{n}$ to $\{E,N\}^{n}$ and composing with the inverse letter map carries it back; a word $w$ with $\mu(n)=u$ up-steps is carried to a word with $\nu(n)=u$ letters $N$ and $d$ letters $E$. Hence a diagonal path of length $n$ from $(0,0)$ ending at height $u-d$ is carried to a monotone path from $(0,0)$ ending at $(d,u)$, and conversely. [F1, F2]

2.1 Define $\Lambda$ as the composite: take the step word of a diagonal path by [L2], compose it with $\lambda$, and trace the resulting word from $(0,0)$; define $\Lambda'$ the same way with the inverse letter map. Each of the three constituents of $\Lambda$ is a bijection with the corresponding constituent of $\Lambda'$ as inverse, by [L2] and step 1.1, so $\Lambda'\circ\Lambda$ and $\Lambda\circ\Lambda'$ are the respective identities and $\Lambda$ is a bijection. [L1, L2, step 1.1]

3.1 For $0\le i\le n$ the count of up-steps among the first $i$ letters of $w$ equals the count of letters $N$ among the first $i$ letters of $\lambda\circ w$, that is $\mu(i)=\nu(i)$; so $y_i-x_i=\nu(i)-(i-\nu(i))=2\mu(i)-i=h(i)$, and the two sides of the height inequality are the same integer, whence each holds exactly when the other does. Taking $c=0$ gives the statement about the diagonal $y=x$, and at $i=0$ both sides are $0$. [F1, F2, step 1.1, algebra] ∎

## Remarks

- **Why this is a lemma and not a convention.** The page uses the rectangular
  picture for the binomial count and the diagonal picture for heights, levels and
  reflections. The sources use one or the other and state no correspondence, so a
  page using both must prove they agree once. Every later statement that moves
  between the pictures cites this lemma and does not restate it.

- **What the correspondence does not do.** It matches the two step sets and the
  two positions, and nothing else. The number of steps is preserved and the two
  endpoints determine each other, but a level in one picture is a diagonal line
  in the other, which is why the level statements below are made in the diagonal
  picture only.
