---
id: lem-first-return-decomposition-of-a-nonempty-dyck-path
kind: lemma
title: "Every Dyck path of semilength $n+1$ factors uniquely as $U\\,P\\,D\\,Q$ with $P\\in\\mathcal{D}_i$ and $Q\\in\\mathcal{D}_{n-i}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-dyck-path-and-semilength, def-diagonal-lattice-path-and-its-height, lem-lattice-paths-are-determined-by-their-step-words, thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse, thm-well-ordering-principle]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "A. Postnikov (notes by A. Lin), MIT 18.212 Algebraic Combinatorics, Spring 2019, Proposition 5"
      url: "https://web.stanford.edu/~lindrew/18.212.pdf"
    - title: "D. Guichard, An Introduction to Combinatorics and Graph Theory, §3.5"
      url: "https://www.whitman.edu/mathematics/cgt_online/cgt.pdf"
pipeline_run: null
---

## Statement

Let $n\in\mathbb{N}$ and put

$$Z_n := \{\, (i,P,Q) : i\in\mathbb{N},\ i\le n,\ P\in\mathcal{D}_i,\ Q\in\mathcal{D}_{n-i} \,\}.$$

The map $\Theta$ sending $(i,P,Q)$ to the diagonal path of length $2n+2$ from
$(0,0)$ whose step word is $U$, then the step word of $P$, then $D$, then the
step word of $Q$, is a bijection

$$\Theta : Z_n \longrightarrow \mathcal{D}_{n+1}$$

onto the Dyck paths of semilength $n+1$ ([[def-dyck-path-and-semilength]]). The
index $i$ is recovered from the image as the **first return**: $2i+2$ is the least
positive index at which the height of $\Theta(i,P,Q)$ is $0$.

## Facts & Assumptions

**Given:** a natural number $n$, and the set $Z_n$ above.

[F1] $\mathcal{D}_m$ is the set of diagonal paths of length $2m$ from $(0,0)$ to $(2m,0)$ whose height function satisfies $h(j)\ge0$ for every $j\le 2m$ ([[def-dyck-path-and-semilength]]).

[F2] A diagonal path of length $\ell$ from $(0,\alpha)$ is the same datum as a function $h:\{0,\dots,\ell\}\to\mathbb{Z}$ with $h(0)=\alpha$ and $h(j)-h(j-1)\in\{1,-1\}$ for $1\le j\le\ell$; with $\mu(j)$ the number of up-steps among the first $j$ its height is $h(j)=\alpha+2\mu(j)-j$ ([[def-diagonal-lattice-path-and-its-height]]).

[L1] For a step set $S$, a point $P'$ and $\ell\in\mathbb{N}$, the map sending a lattice path to its step word is a bijection $\mathcal{L}_S(P';\ell)\to S^{\ell}$ ([[lem-lattice-paths-are-determined-by-their-step-words]]).

[L2] For $f:A\to B$: $f$ is a bijection if and only if there is a function $g:B\to A$ with $g\circ f=\Delta_A$ and $f\circ g=\Delta_B$ ([[thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse]]).

[L3] Every nonempty subset $S\subseteq\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

## Proof

**Proof technique:** direct.

1.1 $\Theta$ lands in $\mathcal{D}_{n+1}$, and for its image the first return to height $0$ is at the index $2i+2$. The concatenated word has length $1+2i+1+2(n-i)=2n+2$, so by [L1] it is the step word of exactly one diagonal path $v$ of length $2n+2$ from $(0,0)$. Writing $h$, $h_P$, $h_Q$ for the three height functions, [F2] gives $h(0)=0$, $h(1+j)=1+h_P(j)$ for $0\le j\le 2i$, and $h(2i+2+j)=h(2i+2)+h_Q(j)$ for $0\le j\le 2(n-i)$; since $h_P(2i)=0$ we get $h(2i+1)=1$ and $h(2i+2)=0$, so $h(2i+2+j)=h_Q(j)$. Hence $h\ge0$ throughout and $h(2n+2)=h_Q(2(n-i))=0$, so $v\in\mathcal{D}_{n+1}$ by [F1]; and $h(1+j)=1+h_P(j)\ge1$ for $0\le j\le 2i$, so no index in the range from $1$ to $2i+1$ has height $0$ and the first return is exactly at $2i+2$. [F1, F2, L1]

1.2 $\Theta$ is surjective. Let $v\in\mathcal{D}_{n+1}$ have height $h$ and step word $w$. Since $h(1)\ge0$ and $h(1)-h(0)\in\{1,-1\}$, the first step is up and $h(1)=1$. The set of positive indices $j\le 2n+2$ with $h(j)=0$ contains $2n+2$, so by [L3] it has a least element $\tau$, and $\tau\ge2$ because $h(1)=1$. By [F2] the number $h(j)+j=2\mu(j)$ is even for every $j$, so $h(\tau)=0$ forces $\tau$ even, say $\tau=2i+2$ with $i\in\mathbb{N}$ and $i\le n$. For $1\le j\le\tau-1$ we have $h(j)\ne0$ and $h(j)\ge0$, hence $h(j)\ge1$; in particular $h(2i+1)\ge1$, and since $h(2i+2)=0$ the step at $2i+2$ is down and $h(2i+1)=1$. Let $P$ be the diagonal path of length $2i$ from $(0,0)$ with step word $w_1\cdots w_{2i}$ and $Q$ the one of length $2(n-i)$ with step word $w_{2i+2}\cdots w_{2n+1}$, both supplied by [L1]. Then $h_P(j)=h(1+j)-1\ge0$ with $h_P(2i)=h(2i+1)-1=0$, so $P\in\mathcal{D}_i$; and $h_Q(j)=h(2i+2+j)\ge0$ with $h_Q(2(n-i))=h(2n+2)=0$, so $Q\in\mathcal{D}_{n-i}$. The word of $v$ is $U$, then that of $P$, then $D$, then that of $Q$, so $v=\Theta(i,P,Q)$. [F1, F2, L1, L3]

2.1 $\Theta$ is injective. If $\Theta(i,P,Q)=\Theta(i',P',Q')$ then by step 1.1 the common image has first return at $2i+2$ and at $2i'+2$, so $i=i'$; the three blocks of the step word are then determined by their positions, so $P$ and $P'$ have the same step word and likewise $Q$ and $Q'$, whence $P=P'$ and $Q=Q'$ by [L1]. [L1, step 1.1]

3.1 By steps 2.1 and 1.2 the map $\Theta$ is injective and surjective, so it is a bijection, and by [L2] it has a two-sided inverse, namely the map sending $v$ to the triple built in step 1.2. At $n=0$ the set $Z_0$ has the single element $(0,\varepsilon,\varepsilon)$ with both factors the empty path, and $\Theta$ sends it to the path with step word $UD$, which is the unique member of $\mathcal{D}_1$. [L2, step 1.1, step 2.1, step 1.2] ∎

## Remarks

- **Why the first return and not the last.** The decomposition is forced by
  reading the path from the left: the first step is up, and the index at which the
  height first comes back to $0$ is the only place the path can be cut so that the
  inner block is a Dyck path after a shift and the outer remainder is one
  outright. Cutting at the last return also gives a decomposition, of a different
  shape, and the two must not be mixed.

- **Three later theorems on this page are this lemma applied elsewhere.** The
  Motzkin and Schröder equations and the recursion for binary trees are the same
  first-return argument run over a different step set or a different recursive
  family, and each states the analogue rather than reusing this statement.
