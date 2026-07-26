---
id: ex-sorgenfrey-line
kind: example
title: "The Sorgenfrey line: $\\mathbb{R}$ with the half-open intervals $[a,b)$ as a basis is strictly finer than the usual topology, is first countable, has a countable dense subset, and its sequences converge only from the right"
status: draft
origin: session
deps: [thm-basis-criterion, def-topology-basis-subbasis, def-topological-space, def-first-countable-top,
       def-dense-top, def-sequence-convergence-top, lem-rat-embeds-dense, def-interval,
       lem-real-line-is-a-metric-space, cor-archimedean-reciprocal, lem-of-inverse-positive,
       def-countable, thm-rationals-countable, def-metric-topology, def-metrizable-space, def-metric-ball,
       thm-metric-open-set-algebra, lem-countable-iff-surjection-from-n, def-max-min,
       lem-of-naturals-positive, lem-of-add-order, cor-of-one-positive, lem-nat-nonzero-is-successor,
       def-neighbourhood-top]
justified_by: []
aliases: [ex-lower-limit-topology]
landmark: false
short: "the Sorgenfrey line"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Lower limit topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lower_limit_topology"
    - title: "J. Munkres, Topology, 2nd ed., §13 and §30"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Example

Let $\mathcal{B} := \{\, [a,b) : a, b \in \mathbb{R},\ a < b \,\}$ be the family
of bounded half-open intervals of $\mathbb{R}$ ([[def-interval]]). Then:

1. **$\mathcal{B}$ is a basis** ([[thm-basis-criterion]]) for a topology
   $\mathcal{T}_{\mathrm{S}}$ on $\mathbb{R}$. The space
   $(\mathbb{R}, \mathcal{T}_{\mathrm{S}})$ is the **Sorgenfrey line**, also
   called the lower limit topology.
2. **$\mathcal{T}_{\mathrm{S}}$ is strictly finer than the usual topology**
   ([[def-metrizable-space]], [[lem-real-line-is-a-metric-space]]): every set
   open in the usual topology is in $\mathcal{T}_{\mathrm{S}}$, and $[0,1)$ is in
   $\mathcal{T}_{\mathrm{S}}$ and is not open in the usual topology.
3. **The Sorgenfrey line is first countable** ([[def-first-countable-top]]): for
   $x \in \mathbb{R}$ the family
   $\{\, [x,\ x + 1/(k+1)) : k \in \mathbb{N} \,\}$ is an at most countable
   neighbourhood base at $x$.
4. **It has an at most countable dense subset**, namely the rationals: $\mathbb{Q}$
   is dense in $(\mathbb{R}, \mathcal{T}_{\mathrm{S}})$ ([[def-dense-top]]) and is
   at most countable ([[thm-rationals-countable]], [[def-countable]]).
5. **Sequences converge only from the right.** For a sequence $(x_k)$ in
   $\mathbb{R}$ and $x \in \mathbb{R}$, $x_k \to x$ in $\mathcal{T}_{\mathrm{S}}$
   ([[def-sequence-convergence-top]]) if and only if for every real
   $\varepsilon > 0$ there is $K \in \mathbb{N}$ with
   $x \le x_k < x + \varepsilon$ for all $k \ge K$. In particular the sequence
   $y_k := x - 1/(k+1)$ converges to $x$ in the usual topology and does not
   converge to $x$ in $\mathcal{T}_{\mathrm{S}}$.

The word *separable* is not used here: no item in this library defines it, and
claim 4 says in full what it would abbreviate.

## Facts & Assumptions

**Given:** $\mathbb{R}$ with its order and its usual metric $d_{\mathbb{R}}(x,y) = |x-y|$, the family $\mathcal{B}$ above, points $x, a, b, c, d \in \mathbb{R}$ and a sequence $(x_k)$ in $\mathbb{R}$. Here $1/(k+1)$ abbreviates the inverse of the canonical natural $(k+1) \cdot 1_{\mathbb{R}}$.

[A1] $[a,b) = \{\, t \in \mathbb{R} : a \le t < b \,\}$ ([[def-interval]]).

[L1] A family is a basis for a topology on $\mathbb{R}$ exactly when it covers $\mathbb{R}$ and every point of an intersection of two members lies in a member inside that intersection; the topology is then $\{\, U : \text{every } x \in U \text{ has a member } B \text{ with } x \in B \subseteq U \,\}$ ([[thm-basis-criterion]], [[def-topology-basis-subbasis]]).

[L2] In the usual topology $B(x,r) = (x-r,\ x+r)$, balls are open, and $U$ is open exactly when every $x \in U$ has some $r > 0$ with $(x-r,x+r) \subseteq U$ ([[lem-real-line-is-a-metric-space]], [[def-metric-ball]], [[def-metric-topology]], [[thm-metric-open-set-algebra]], [[def-metrizable-space]]).

[L3] For every real $\varepsilon > 0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$ ([[cor-archimedean-reciprocal]]); for $n \ge 1$ the canonical natural is positive ([[lem-of-naturals-positive]]) and $0 < u < v$ gives $0 < 1/v < 1/u$ ([[lem-of-inverse-positive]]); every nonzero natural is a successor ([[lem-nat-nonzero-is-successor]]).

[L4] $0 < 1$ ([[cor-of-one-positive]]), and adding a constant preserves strict inequality ([[lem-of-add-order]]); the order of $\mathbb{R}$ is total, so a two-element set of reals has a maximum and a minimum ([[def-max-min]]).

[L5] Strictly between any two reals lies a rational ([[lem-rat-embeds-dense]]); $\mathbb{Q}$ is at most countable ([[thm-rationals-countable]], [[def-countable]]).

[L6] $A$ is dense exactly when it meets every nonempty basic open set ([[def-dense-top]]); a neighbourhood of $x$ contains a basic open set containing $x$, and every point lies in each of its neighbourhoods ([[def-neighbourhood-top]]).

[L7] $x_k \to x$ means that for every neighbourhood $N$ of $x$ there is $K$ with $x_k \in N$ for all $k \ge K$ ([[def-sequence-convergence-top]]); a nonempty set admitting a surjection from $\mathbb{N}$ is at most countable ([[lem-countable-iff-surjection-from-n]]).

## Verification

**Proof technique:** direct.

1.1 $\mathcal{B}$ covers $\mathbb{R}$: for $x \in \mathbb{R}$ one has $x < x + 1$ by [L4], so $[x,\ x+1) \in \mathcal{B}$ and $x \in [x, x+1)$. [A1, L4]

1.2 Let $x \in [a,b) \cap [c,d)$ and put $a' := \max\{a,c\}$ and $b' := \min\{b,d\}$, which exist by [L4]. Then $[a,b) \cap [c,d) = [a',b')$, since $a \le t$ and $c \le t$ together say $a' \le t$ and $t < b$ with $t < d$ says $t < b'$; and $a' \le x < b'$ gives $a' < b'$, so $[a',b') \in \mathcal{B}$ and $x \in [a',b') \subseteq [a,b) \cap [c,d)$. [A1, L4]

1.3 For $x \in \mathbb{R}$ and real $r > 0$: $x < x + r$ by [L4], and $[x,\ x+r) \subseteq (x-r,\ x+r)$, since $x - r < x \le t < x + r$. [A1, L2, L4]

1.4 For every $k \in \mathbb{N}$ the real $1/(k+1)$ is positive by [L3], so $[x,\ x + 1/(k+1)) \in \mathcal{B}$ by [L4] and contains $x$. [A1, L3, L4]

1.5 $[0,1) \in \mathcal{B}$, since $0 < 1$ by [L4]. [A1, L4]

1.6 Every nonempty member $[a,b)$ of $\mathcal{B}$ meets $\mathbb{Q}$: by [L5] there is a rational $q$ with $a < q < b$, and then $q \in [a,b)$. [A1, L5]

1.7 The same sequence converges to $x$ in the usual topology: given $r > 0$, [L3] gives $n \ge 1$ with $1/n < r$ and $n = m+1$; for $k \ge m$ the canonical naturals satisfy $0 < (m+1) \cdot 1_{\mathbb{R}} \le (k+1) \cdot 1_{\mathbb{R}}$, so $1/(k+1) \le 1/(m+1) < r$ by [L3], and $|y_k - x| = 1/(k+1) < r$, that is $y_k \in B(x,r)$. [L2, L3, L4]

2.1 By steps 1.1 and 1.2 the family $\mathcal{B}$ satisfies the two basis conditions of [L1], so it is a basis for the topology $\mathcal{T}_{\mathrm{S}}$ described there; this is claim 1. [step 1.1, step 1.2, L1]

2.2 $[0,1)$ is not open in the usual topology: for any $r > 0$, [L3] gives a natural $n \ge 1$ with $1/n < r$, and $-1/n$ satisfies $-r < -1/n < 0$, so $-1/n \in (-r, r)$ while $-1/n \notin [0,1)$; hence no ball around $0$ lies inside $[0,1)$. [step 1.5, L2, L3, L4]

2.3 The family $\{\, [x,\ x+1/(k+1)) : k \in \mathbb{N} \,\}$ is nonempty and is the image of the surjection $k \mapsto [x,\ x+1/(k+1))$ from $\mathbb{N}$, hence at most countable. [step 1.4, L7]

2.4 By step 1.6 the set $\mathbb{Q}$ meets every nonempty basic open set, so it is dense by [L6]; with [L5] it is at most countable, which is claim 4. [step 1.6, L5, L6]

3.1 Every set $U$ open in the usual topology lies in $\mathcal{T}_{\mathrm{S}}$: for $x \in U$ take $r > 0$ with $(x-r,x+r) \subseteq U$, and then $x \in [x,\ x+r) \subseteq U$ by step 1.3, with $[x,x+r) \in \mathcal{B}$. [step 1.3, step 2.1, L1, L2]

3.2 Let $N$ be a neighbourhood of $x$ in $\mathcal{T}_{\mathrm{S}}$ and take $[a,b) \in \mathcal{B}$ with $x \in [a,b) \subseteq N$, so $a \le x < b$ and $b - x > 0$; by [L3] fix a natural $n \ge 1$ with $1/n < b - x$ and write $n = m+1$ with $m \in \mathbb{N}$. Then $x + 1/(m+1) < b$, so $[x,\ x+1/(m+1)) \subseteq [x, b) \subseteq [a,b) \subseteq N$. [step 2.1, A1, L3, L4, L6]

3.3 For every real $\varepsilon > 0$ the set $[x,\ x+\varepsilon)$ is a member of $\mathcal{B}$ containing $x$, hence a neighbourhood of $x$ in $\mathcal{T}_{\mathrm{S}}$. [step 2.1, A1, L4, L6]

4.1 By steps 3.1 and 2.2 the topology $\mathcal{T}_{\mathrm{S}}$ contains the usual topology and contains $[0,1)$, which the usual topology does not; so $\mathcal{T}_{\mathrm{S}}$ is strictly finer, which is claim 2. [step 1.5, step 3.1, step 2.2]

4.2 By steps 1.4, 3.2 and 2.3 the family of claim 3 consists of neighbourhoods of $x$, is at most countable, and has a member inside every neighbourhood of $x$; so it is an at most countable neighbourhood base at $x$, and $x$ was arbitrary. This is claim 3. [step 1.4, step 3.2, step 2.3, L6]

4.3 If $x_k \to x$ in $\mathcal{T}_{\mathrm{S}}$ and $\varepsilon > 0$, then by step 3.3 the set $[x, x+\varepsilon)$ is a neighbourhood of $x$, so there is $K$ with $x_k \in [x, x+\varepsilon)$, that is $x \le x_k < x + \varepsilon$, for all $k \ge K$. [step 3.3, L7]

4.4 Conversely, assume the $\varepsilon$ condition and let $N$ be a neighbourhood of $x$; take $[a,b) \in \mathcal{B}$ with $x \in [a,b) \subseteq N$ and apply the condition with $\varepsilon := b - x > 0$, obtaining $K$ with $x \le x_k < b$ for all $k \ge K$; since $a \le x \le x_k$, this gives $x_k \in [a,b) \subseteq N$ for all $k \ge K$. So $x_k \to x$. [step 2.1, step 3.2, A1, L6, L7]

5.1 The sequence $y_k = x - 1/(k+1)$ satisfies $y_k < x$ for every $k$, since $1/(k+1) > 0$; so no term lies in $[x, x+1)$, and by step 4.3 with $\varepsilon = 1$ the sequence does not converge to $x$ in $\mathcal{T}_{\mathrm{S}}$. [step 4.3, L3, L4]

6.1 Steps 4.3 and 4.4 give the equivalence of claim 5, and steps 5.1 and 1.7 give the sequence it names; with steps 4.1, 4.2, 2.4 and 2.1 all five claims are proved. [step 2.1, step 4.1, step 4.2, step 2.4, step 4.3, step 4.4, step 5.1, step 1.7] ∎

## Remarks

- **The Sorgenfrey line is first countable and has an at most countable dense subset, and it is nevertheless not metrizable.** That is not proved here: the standard argument uses a second countability or a Baire-type input that this library does not have. Claims 3 and 4 are stated for what they are, and no metrizability verdict is drawn from them.

- **Where the asymmetry comes from.** The basis members are closed on the left and open on the right, so a neighbourhood of $x$ always contains a whole interval to the right of $x$ and need contain nothing to its left. Claim 5 is the exact expression of that, and it is why $[0,1)$, which is neither open nor closed in the usual topology, is open here — and also closed, its complement being the union of the basic sets $[b, b+1)$ for $b \ge 1$ together with $[a, 0)$ for $a < 0$.

- **The index shift is the usual one.** The neighbourhood base uses radii $1/(k+1)$ for $k \in \mathbb{N}$ rather than $1/k$, because $\mathbb{N}$ contains $0$ ([[rem-topology-conventions]]).
