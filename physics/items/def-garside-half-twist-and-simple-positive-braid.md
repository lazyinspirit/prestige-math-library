---
id: def-garside-half-twist-and-simple-positive-braid
kind: definition
title: "The Garside half twist and simple positive braids"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-positive-braid-monoid, def-left-and-right-divisibility-for-positive-braids,
       lem-positive-artin-relations-preserve-homogeneous-length]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Patrick Dehornoy et al., Foundations of Garside Theory, Chapter I, Reference Structure 2 and formula (1.6), printed pp. 5-7"
      url: "https://dehornoy.lmno.cnrs.fr/Books/Garside/Text.pdf"
    - title: "J. Gonzalez-Meneses, Basic results on braid groups, Section 4, printed pp. 27-28"
      url: "https://arxiv.org/abs/1010.0321"
verification:
  audited: 2026-09-27
  precheck: n/a
---

## Definition

Let $n\in\mathbb N$ and let $B_n^{+}$ be the positive braid monoid of
[[def-positive-braid-monoid]] with its homogeneous length $\ell$
([[lem-positive-artin-relations-preserve-homogeneous-length]]) and its
divisibility orders of
[[def-left-and-right-divisibility-for-positive-braids]]. For $1\le k\le n-1$
put

$$T_k:=\sigma_k\sigma_{k-1}\cdots\sigma_1\in B_n^{+},$$

the word that moves the $k+1$-st strand across the first $k$ strands; for $n=1$
there is no $T_k$ and products below are empty. The **Garside half twist** (or
**fundamental element**) of $B_n^{+}$ is

$$\Delta:=\Delta_n:=T_1T_2\cdots T_{n-1}=\sigma_1\,(\sigma_2\sigma_1)\cdots(\sigma_{n-1}\sigma_{n-2}\cdots\sigma_1),$$

the class in $B_n^{+}$ of the displayed word. Equivalently, by the recursion
$\Delta_1:=1$ and $\Delta_n:=\Delta_{n-1}T_{n-1}$ for $n\ge2$, which expands to
the same word. Its length is

$$\ell(\Delta)=\sum_{k=1}^{n-1}k=\frac{n(n-1)}2=:N,$$

since each block $T_k$ has length $k$ and the product of positive words has
length equal to the sum of the lengths
([[lem-positive-artin-relations-preserve-homogeneous-length]]). For $n=0$ or
$n=1$ the alphabet is empty, $N=0$ and $\Delta=1$.

**The reversed triangular word.** Reversing the displayed word gives

$$\Delta^{\mathrm{rev}}=\bigl(\sigma_1\sigma_2\cdots\sigma_{n-1}\bigr)\bigl(\sigma_1\cdots\sigma_{n-2}\bigr)\cdots\sigma_1,$$

the product of the increasing blocks $U_k:=\sigma_1\sigma_2\cdots\sigma_k$ in
the order $U_{n-1}U_{n-2}\cdots U_1$. This is the word displayed in the plan of
this page; that its class is again $\Delta$ is not a formal triviality but a
consequence of the braid relations, and it is proved together with the
conjugation identity in
[[lem-conjugation-by-delta-reverses-artin-generators]], where reversal is also
used. Until that point $\Delta$ always denotes the class of the word
$T_1\cdots T_{n-1}$ displayed above.

**Simple positive braids.** A **simple** positive braid is an element $s$ of
$B_n^{+}$ that **left-divides** $\Delta$ in the sense of
[[def-left-and-right-divisibility-for-positive-braids]]: $s\preccurlyeq_L\Delta$,
i.e. $\Delta=sc$ for some $c\in B_n^{+}$. The set of simple positive braids is
denoted $\mathrm{Div}_L(\Delta)$. Since $\ell$ is monotone for
$\preccurlyeq_L$ and takes finitely many classes of words of length $\le N$, the
set $\mathrm{Div}_L(\Delta)$ is finite. The atoms
$\sigma_1,\dots,\sigma_{n-1}$ are the first examples of simple braids, and
$\Delta$ itself and $1$ are the largest and smallest; the identification of
$\mathrm{Div}_L(\Delta)$ with the symmetric group is
[[lem-simple-positive-braids-are-indexed-by-permutations]].

**Balanced divisors.** A divisor $s\preccurlyeq_L\Delta$ is called **balanced**
if it is also a **right divisor** of $\Delta$, that is, if
$\Delta=ds$ for some $d\in B_n^{+}$; note that the complementary factor $c$ in
$\Delta=sc$ is a right divisor of $\Delta$ for *every* left divisor $s$, since
$\Delta=sc$ exhibits $c$ as such, so the content of balancedness lies in the
opposite divisibility of $s$ itself, not in that of $c$. The proof that the
simple braids are exactly the balanced divisors of $\Delta$ is
[[lem-simple-positive-braids-are-indexed-by-permutations]], and nothing on this
page uses that equivalence before it. Where the distinction matters, a divisor
of $\Delta$ is called a **left divisor** or a **right divisor** of $\Delta$
according to the side of $\Delta$ on which it is written.

## Remarks

- Conventions: the blocks $T_k$ are written in decreasing index order, so that
  $T_k$ is the positive braid in which the $(k+1)$-st strand crosses the $k$-th,
  then the $(k-1)$-st, and so on. The product $T_1T_2\cdots T_{n-1}$ is the
  half turn of the $n$ strands read from the top strand downwards; the
  recursion $\Delta_n=\Delta_{n-1}T_{n-1}$ is equation (1.6) of Dehornoy et
  al., Chapter I.
- Index reversal $\sigma_j\mapsto\sigma_{n-j}$ preserves the presentation and
  hence induces an automorphism $\tau$ of $B_n^{+}$, and similarly the reversal
  anti-automorphism $\rho$ of
  [[lem-the-positive-braid-monoid-is-left-and-right-cancellative]] is available.
  The two words displayed above are reverses of one another as words:
  $\Delta^{\mathrm{rev}}=U_{n-1}U_{n-2}\cdots U_1$, with
  $U_k=\sigma_1\cdots\sigma_k$; note that $\tau$ sends the block $T_k$ to
  $\sigma_{n-k}\sigma_{n-k+1}\cdots\sigma_{n-1}$, so $\tau$ does *not* simply
  exchange the two displayed words. That the classes of the two words agree, that
  $\tau(\Delta)=\Delta$, and the conjugation identity
  $\sigma_i\Delta=\Delta\sigma_{n-i}$ are all proved in
  [[lem-conjugation-by-delta-reverses-artin-generators]]; until that point only
  the class of the $T$-word is called $\Delta$.
- Nothing in this definition uses a choice principle: $\Delta$ is the class of
  an explicit finite word, and the modularity of the recursion is a finite
  induction on $n$.
