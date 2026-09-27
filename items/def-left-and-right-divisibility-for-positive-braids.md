---
id: def-left-and-right-divisibility-for-positive-braids
kind: definition
title: "Left and right divisibility for positive braids"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-positive-braid-monoid, lem-positive-artin-relations-preserve-homogeneous-length,
       lem-the-positive-braid-monoid-is-left-and-right-cancellative]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "J. Gonzalez-Meneses, Basic results on braid groups, Section 4, printed pp. 26-27 (prefix order and suffix order)"
      url: "https://arxiv.org/abs/1010.0321"
verification:
  precheck: n/a
---

## Definition

Let $n\in\mathbb N$, let $B_n^{+}$ be the positive braid monoid of
[[def-positive-braid-monoid]] with its homogeneous length
$\ell\colon B_n^{+}\to\mathbb N$ of
[[lem-positive-artin-relations-preserve-homogeneous-length]] and its two
cancellation laws of
[[lem-the-positive-braid-monoid-is-left-and-right-cancellative]]. For
$a,b\in B_n^{+}$ put

$$a\preccurlyeq_L b\ :\Longleftrightarrow\ \exists\,c\in B_n^{+}\ (b=ac),\qquad a\preccurlyeq_R b\ :\Longleftrightarrow\ \exists\,c\in B_n^{+}\ (b=ca).$$

In words: $a$ is a **left divisor** (a prefix) of $b$, respectively a **right
divisor** (a suffix) of $b$, if $b$ can be written as a product with $a$ on the
left, respectively on the right. The corresponding **strict** relations are
$a\prec_L b\Longleftrightarrow a\preccurlyeq_L b$ and $a\ne b$, and
$a\prec_R b\Longleftrightarrow a\preccurlyeq_R b$ and $a\ne b$.

**Basic properties.** All of the following are immediate from the definition,
the multiplicativity of $\ell$ and the fact that $\ell(x)=0$ forces $x=1$:

(i) $\preccurlyeq_L$ and $\preccurlyeq_R$ are **partial orders** on
$B_n^{+}$. Reflexivity uses $b=b\cdot 1$; transitivity uses associativity:
if $b=au$ and $c=bv$, then $c=a(uv)$, and if $b=ua$ and $c=vb$, then
$c=(vu)a$; antisymmetry uses additivity of the length in
$\mathbb N$: if $b=ac$ and $a=bd$ then $\ell(b)=\ell(a)+\ell(c)$ and
$\ell(a)=\ell(b)+\ell(d)$, whence $\ell(c)+\ell(d)=0$ in $\mathbb N$, so
$\ell(c)=\ell(d)=0$, hence $c=d=1$ and $a=b=ac=b$ (here $\ell(x)=0$ happens
only for $x=1$).

(ii) Each order is compatible with multiplication on its matching side: for
every $x\in B_n^{+}$,
$$a\preccurlyeq_L b\quad\Longleftrightarrow\quad xa\preccurlyeq_L xb,\qquad a\preccurlyeq_R b\quad\Longleftrightarrow\quad ax\preccurlyeq_R bx.$$
For the forward implications, write $b=ac$ or $b=ca$ and use the same witness
$c$ after multiplying on the left or right, respectively. The reverse
implications follow by left or right cancellation, respectively. Left
cancellation makes the witness $c$ in $b=ac$ unique, and right cancellation
makes the witness in $b=ca$ unique.

(iii) Length is monotone for both orders: $a\preccurlyeq_L b$ or
$a\preccurlyeq_R b$ implies $\ell(a)\le\ell(b)$, with equality if and only if
$a=b$. Hence $\prec_L$ and $\prec_R$ are well founded by length, and the
strict relations are exactly the relations $b=ac$ with $c\ne1$, respectively
$b=ca$ with $c\ne1$.

(iv) **Reversal exchanges the two orders.** With $\rho$ the reversal
anti-automorphism of
[[lem-the-positive-braid-monoid-is-left-and-right-cancellative]],
$b=ac\Longleftrightarrow \rho(b)=\rho(c)\rho(a)$; hence
$a\preccurlyeq_L b\Longleftrightarrow\rho(a)\preccurlyeq_R\rho(b)$ and
$a\preccurlyeq_R b\Longleftrightarrow\rho(a)\preccurlyeq_L\rho(b)$. This is the
only tool by which statements about $\preccurlyeq_L$ are transported to
$\preccurlyeq_R$ below; the two orders are nevertheless distinct in general
(the companion page computes a positive braid pair with different left and
right meets), so neither order may be silently replaced by the other.

(v) **Normalisation.** Since $B_n^{+}$ has no nontrivial invertible element
($\ell(x)=0$ only for $x=1$), the relation $\preccurlyeq_L$ has the
"divisibility" reading fixed in the source: $a\preccurlyeq_L b$ means that $a$
occurs as a prefix of the positive braid $b$, and the set of left divisors of
$b$ is finite — indeed contained in the classes of words of length at most
$\ell(b)$, and there are only finitely many such classes because there are
finitely many words of any fixed length over the finite alphabet $\Sigma_n$.

**Least common multiples and greatest common divisors.** For a nonempty
subfamily $X\subseteq B_n^{+}$, a **common left multiple** of $X$ is an element
$m$ with $x\preccurlyeq_L m$ for every $x\in X$, and a **left-lcm** of $X$ is a
common left multiple $m$ such that $m\preccurlyeq_L m'$ for every common left
multiple $m'$ of $X$; **common right multiples** and **right-lcms** are defined
in the same way with $\preccurlyeq_R$. Dually, a **common left divisor** of $X$
is an element $d$ with $d\preccurlyeq_L x$ for every $x\in X$, and a
**left-gcd** of $X$ is a common left divisor $d$ with $d'\preccurlyeq_L d$ for
every common left divisor $d'$; the right-hand notions are analogous. Because
both orders are antisymmetric, lcms and gcds are unique when they exist, and we
then write $\bigvee_L X$, $\bigwedge_L X$, $\bigvee_R X$,
$\bigwedge_R X$; for two elements we write $a\vee_L b$, $a\wedge_L b$, and so
on.

**Conventions.** The letters $L$ and $R$ always refer to the side on which the
smaller element is written: $a\preccurlyeq_L b$ if $b=ac$, and
$a\preccurlyeq_R b$ if $b=ca$. For $n\le1$ the monoid $B_n^{+}$ has one element
and both orders are the equality relation. No choice principle is used: the
witnesses $c$ are elements of a monoid of words, and uniqueness of the witnesses
is proved by cancellation, not chosen.

## Remarks

- These are the orders of GM Section 4, printed pp. 26--27 ("a is a prefix of
  b"), restricted to the positive monoid. GM writes $\preccurlyeq$ for the
  prefix order and $\succcurlyeq$ for its mirror image; because this page also
  needs the right-hand version systematically, both orders are named here, and
  the letters $L,R$ record which side the smaller element sits on.
- Antisymmetry is proved *without* cancellation, from $\ell\ge0$ and
  $\ell(x)=0\Rightarrow x=1$ alone; cancellation enters only through the
  uniqueness of the witness and the converse implications in (ii).
- Nothing here extends the orders to the braid group $B_n$; that extension is
  [[thm-left-and-right-divisibility-extend-to-lattice-orders-on-the-braid-group]]
  and needs the Ore embedding
  ([[thm-the-ore-fraction-group-of-positive-braids-is-the-artin-braid-group]]).
