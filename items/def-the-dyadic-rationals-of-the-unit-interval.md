---
id: def-the-dyadic-rationals-of-the-unit-interval
kind: definition
title: "The dyadic rationals of $[0,1]$, their finite levels $D_n$, and their density in $[0,1]$"
status: draft
origin: session
deps: [def-interval, def-integer-power, def-canonical-natural, def-nat-power,
       cor-archimedean-reciprocal, def-ordered-field, def-natural-numbers,
       def-nat-order, thm-induction-principle, thm-well-ordering-principle,
       lem-of-naturals-positive, lem-of-inverse-positive, def-countable,
       lem-nat-nonzero-is-successor]
justified_by: []
aliases: [def-dyadic-rationals]
landmark: true
short: "dyadic rationals of $[0,1]$"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Dyadic rational (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dyadic_rational"
    - title: "Urysohn's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Urysohn%27s_lemma"
    - title: "J. Munkres, Topology, 2nd ed., §33"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Throughout, $\iota$ is the canonical natural of $\mathbb{R}$ ([[def-canonical-natural]]),
and as is standard $\iota(k)$ is abbreviated to $k$ once no ambiguity results
([[cor-archimedean-reciprocal]]). For $m, n \in \mathbb{N}$, $m^n \in \mathbb{N}$ is the
natural-number power of [[def-nat-power]], distinct from but agreeing with the
real (integer) power $a^n$ of [[def-integer-power]] by that item's clause (d):
$\iota(m^n) = \iota(m)^n$. Writing $2$ for $\iota(2)$ as just agreed, this lets
$2^n$ be read as a natural number **or** as the real $\iota(2)^n$ interchangeably.

For $n \in \mathbb{N}$ put

$$D_n \;:=\; \Big\{\, \frac{k}{2^n} \;:\; k \in \mathbb{N},\ k \le 2^n \,\Big\} \;\subseteq\; [0,1],$$

the order $\le$ on the naturals $k$ and $2^n$ being that of [[def-nat-order]].
Each $D_n$ is
a finite subset of $[0,1]$ ([[def-interval]]) with $0, 1 \in D_n$ (the cases
$k=0$ and $k=2^n$); it has at most $2^n+1$ elements, so is finite in the sense
of [[def-countable]]. The **dyadic rationals of $[0,1]$** are

$$D \;:=\; \bigcup_{n \in \mathbb{N}} D_n \;\subseteq\; [0,1],$$

a countable union of finite sets. Each **level** $D_n$ is nested in the next:
if $k \le 2^n$ then $2k \le 2^{n+1}$ (multiplying the natural inequality by $2$),
and $\dfrac{k}{2^n} = \dfrac{2k}{2^{n+1}}$ in $\mathbb{R}$ (clearing the common
factor $\iota(2)$, licensed by [[def-ordered-field]]), so every element of $D_n$
is exhibited as an element of $D_{n+1}$; hence $D_0 \subseteq D_1 \subseteq
D_2 \subseteq \cdots$ and $D = \bigcup_n D_n$ is genuinely increasing, not
merely a union.

**The level decomposition, stated and discharged here because the recursion of
[[thm-urysohn-lemma]] consumes it.** For $n \in \mathbb{N}$,

$$D_{n+1} \;=\; D_n \,\cup\, \Big\{\, t_j := \frac{2j+1}{2^{n+1}} \;:\; j \in \mathbb{N},\ j < 2^n \,\Big\},$$

and the new points $t_j$ are pairwise distinct, none lies in $D_n$, and each
lies strictly between the $D_n$-consecutive pair $r_j := j/2^n$ and
$s_j := (j+1)/2^n$. *Strict betweenness:* $2j < 2j+1 < 2j+2$, and dividing by
the positive $2^{n+1}$ preserves strict order ([[def-ordered-field]]), so
$r_j = 2j/2^{n+1} < t_j < (2j+2)/2^{n+1} = s_j$. *Distinctness:* $j \mapsto
2j+1$ is injective. *Disjointness from $D_n$:* $t_j = k/2^n$ with
$k \le 2^n$ would give $2j+1 = 2k$ after clearing the positive factor
$1/2^{n+1}$ and applying injectivity of $\iota$; but $k \le j$ gives
$2k \le 2j < 2j+1$, and $k \ge j+1$ gives $2k \ge 2j+2 > 2j+1$, so no such $k$
exists. *The union is all of $D_{n+1}$:* given $k/2^{n+1}$ with
$k \le 2^{n+1}$, the set $\{\, i \in \mathbb{N} : 2i > k \,\}$ is nonempty
($2(k+1) = 2k+2 > k$), so by [[thm-well-ordering-principle]] it has a least
element $i_0$, and $i_0 \ge 1$ since $2 \cdot 0 = 0 \le k$; writing
$i_0 = j+1$ ([[lem-nat-nonzero-is-successor]]) gives $2j \le k < 2j+2$, so
$k = 2j$ or $k = 2j+1$. In the first case $k/2^{n+1} = j/2^n \in D_n$ (with
$j \le 2^n$ since $2j \le 2^{n+1}$); in the second it is $t_j$ (with $j < 2^n$
since $2j+1 \le 2^{n+1}$ forces $2j < 2^{n+1}$). Finally, **any two elements of
$D$ lie together in a common level**: one lies in some $D_m$ and the other in
some $D_{m'}$, and both then lie in $D_{\max(m,m')}$ by the nesting just
proved.

**$D$ is dense in $[0,1]$: for every $x \in [0,1]$ and every real
$\varepsilon > 0$ there is $r \in D$ with $|x - r| < \varepsilon$.** First, a
growth fact about natural-number powers, proved by induction on $n$
([[thm-induction-principle]]): $2^n \ge n+1$ for every $n \in \mathbb{N}$. At
$n=0$, $2^0 = 1 = 0+1$. If $2^n \ge n+1$, then $2^{n+1} = 2^n \cdot 2 = 2^n + 2^n
\ge (n+1) + (n+1) = 2n+2 \ge n+2 = (n+1)+1$, the middle inequality adding the
inductive hypothesis to itself and the last holding since $n \ge 0$; both steps
use only that the order of $\mathbb{N}$ is compatible with addition
([[def-nat-order]]). Transporting the inequality into $\mathbb{R}$ by the
order-preserving $\iota$ ([[lem-of-naturals-positive]]) gives $\iota(2^n) \ge
\iota(n+1) = \iota(n)+1$ for every $n$.

Now fix $x \in [0,1]$ and a real $\varepsilon > 0$. By
[[cor-archimedean-reciprocal]] fix a natural $m \ge 1$ with $1/m < \varepsilon$.
Put $n := m$; then $\iota(2^n) \ge \iota(n)+1 = \iota(m)+1 > \iota(m) > 0$, so by
[[lem-of-inverse-positive]] $0 < 1/2^n < 1/m < \varepsilon$. Consider
$S := \{\, k \in \mathbb{N} : x \le k/2^n \,\}$. It is nonempty, since $k=2^n$
satisfies $x \le 1 = 2^n/2^n$ because $x \in [0,1]$; so by
[[thm-well-ordering-principle]] $S$ has a least element $k_0$, and $k_0 \le 2^n$
because $2^n \in S$. If $k_0 = 0$ then $x \le 0$, and $x \ge 0$ since $x \in
[0,1]$, so $x = 0 = 0/2^n \in D_n \subseteq D$, within distance $0 < \varepsilon$
of itself. If $k_0 \ge 1$ then $k_0 - 1 \in \mathbb{N}$ and, by minimality of
$k_0$, $k_0 - 1 \notin S$, that is $x > (k_0-1)/2^n = k_0/2^n - 1/2^n$; combined
with $x \le k_0/2^n$ this gives $|x - k_0/2^n| \le 1/2^n < \varepsilon$, and
$r := k_0/2^n \in D_n \subseteq D$ since $k_0 \le 2^n$. Either way some $r \in D$
satisfies $|x-r| < \varepsilon$.

## Remarks

- **Every dyadic rational of $[0,1]$ other than $0$ and $1$ lies strictly
  between them**, since $0 < k/2^n < 1$ exactly when $0 < k < 2^n$.

- **The finite levels, not $D$ itself, are what the construction of Urysohn's
  lemma recurses on.** $D$ is presented here as the increasing union
  $\bigcup_n D_n$ precisely so that a family indexed by $D$ can be built one
  finite level at a time, each level adding only finitely many new indices to
  the one before.
