---
id: def-character-polynomial-in-cycle-counts
kind: definition
title: "Character polynomials in the cycle counts $X_i$"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 0
deps: [def-permutation-support-disjoint-cycles-and-cycle-type,
       def-class-function-and-the-space-of-complex-class-functions,
       def-polynomial-ring-on-a-family-of-indeterminates,
       def-finite-symmetric-group-and-permutation-notation,
       def-monomials-on-an-index-set,
       thm-universal-property-of-a-polynomial-ring-on-a-family,
       thm-root-bound-for-polynomials-over-a-domain,
       def-polynomial-evaluation-and-root,
       def-natural-numbers]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "Thomas Church, Jordan S. Ellenberg and Benson Farb, “FI-modules and stability for representations of symmetric groups”, arXiv:1204.4533v4 (2014); published in Duke Math. J. 164 (2015) 1833–1910"
      url: "https://arxiv.org/pdf/1204.4533"
      locator: "The paragraph “Character polynomials” and Definition 1.4 (Eventually polynomial characters), printed pp. 2–3: $X_i(\\sigma)$ is the number of $i$-cycles, character polynomials are the polynomials in the $X_i$, the expression on one $S_n$ is not unique but agreement on infinitely many $n$ forces equality, and $\\deg X_i:=i$"
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Oxford Mathematical Monographs, 1995 (author-hosted full text)"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
      locator: "Chapter I §7, Example I.7.14, printed pp. 122–124: the classical character-polynomial description of padded Specht characters, with the same cycle-count and uniqueness conventions (the study of character polynomials goes back to Frobenius)"
---

## Definition

For $i\ge1$ and $n\ge0$ let $X_i\colon S_n\to\mathbb N$ be the function
sending a permutation $\sigma\in S_n$ to the number
$X_i(\sigma):=c_i(\sigma)$ of $i$-element orbits in its cycle type
([[def-permutation-support-disjoint-cycles-and-cycle-type]],
[[def-finite-symmetric-group-and-permutation-notation]],
[[def-natural-numbers]]); thus $X_1(\sigma)$ is the number of fixed points of
$\sigma$, and $X_i(\sigma)=0$ whenever $i>n$. Each $X_i$ is a **class
function** on $S_n$ ([[def-class-function-and-the-space-of-complex-class-functions]]):
if $\tau\sigma\tau^{-1}$ is a conjugate of $\sigma$, then $O\mapsto\tau(O)$ is
a bijection from the orbits of $\sigma$ onto the orbits of
$\tau\sigma\tau^{-1}$ that preserves cardinalities, so
$c_i(\tau\sigma\tau^{-1})=c_i(\sigma)$.

Let $\mathbb Q[X_1,X_2,\dots]$ be the polynomial ring on the family of
indeterminates indexed by $i\ge1$
([[def-polynomial-ring-on-a-family-of-indeterminates]]); its elements are
finitely supported coefficient families on the monomials of
[[def-monomials-on-an-index-set]], so every element involves only finitely many
of the indeterminates. A **character polynomial** is an element
$P\in\mathbb Q[X_1,X_2,\dots]$. Setting $\deg X_i:=i$ gives the monomial
$X^a=\prod_iX_i^{a_i}$ the **weighted degree** $\sum_ii\,a_i$ (a finite sum); a
character polynomial has **weighted degree $\le d$** when every monomial
occurring in it has weighted degree at most $d$, and the **weighted degree** of
$P\ne0$ is the largest weighted degree of a monomial of $P$. Products and
rational linear combinations of class functions on $S_n$ are again class
functions, so every character polynomial defines for each $n\ge0$ a class
function

$$P\colon S_n\longrightarrow\mathbb Q,\qquad \sigma\longmapsto P(X_1(\sigma),X_2(\sigma),\dots),$$

the defining sum being finite because $P$ has finite support and
$X_i(\sigma)=0$ for $i>n$; equivalently, the substitution $X_i\mapsto
X_i(\sigma)$ is the ring homomorphism supplied by
[[thm-universal-property-of-a-polynomial-ring-on-a-family]]. In this way a
character polynomial is realized as one class function on each $S_n$. The
realization is not injective on a single $S_n$, since $X_i$ vanishes
identically on $S_n$ for $i>n$. It is injective in the limit:

**Uniqueness.** If $P,Q$ agree as functions on $S_n$ for infinitely many $n$,
then $P=Q$.

Indeed, put $R:=P-Q$ and let $A\subseteq\mathbb N$ be infinite with
$R|_{S_n}=0$ for every $n\in A$. Fix $m\ge0$, $\sigma\in S_m$ and $k\ge0$, and
let $\sigma^{(k)}\in S_{m+k}$ be $\sigma$ extended by $k$ fixed points outside
its domain; then $X_1(\sigma^{(k)})=X_1(\sigma)+k$ and
$X_i(\sigma^{(k)})=X_i(\sigma)$ for $i\ge2$, so
$R(\sigma^{(k)})=\sum_j\bigl(X_1(\sigma)+k\bigr)^jR_j(\sigma)$, where
$R=\sum_jX_1^jR_j$ collects the monomials of $R$ by their $X_1$-exponent $j$,
each $R_j$ involving only $X_2,X_3,\dots$. The right-hand side is given by a
polynomial in $k$ over $\mathbb Q$ of degree at most the largest $j$ with
$R_j\ne0$, and it vanishes for all $k$ with $m+k\in A$, infinitely many $k$;
by the root bound of [[thm-root-bound-for-polynomials-over-a-domain]] that
polynomial is zero, so $R(\sigma)=0$
([[def-polynomial-evaluation-and-root]]). As $\sigma\in S_m$ was arbitrary,
$R$ vanishes on every $S_m$; equivalently, $R(b_1,\dots,b_M)=0$ for every
$M\ge0$ and every tuple $(b_1,\dots,b_M)\in\mathbb N^M$, since a disjoint union
of $b_i$ cycles of length $i$, $1\le i\le M$, is a permutation with $X_i=b_i$
for $i\le M$. If $R\ne0$, then $R$ involves only $X_1,\dots,X_M$ for some $M$,
and induction on $M$ shows that such an $R$ cannot vanish at every point of
$\mathbb N^M$: for $M=0$ the polynomial is a constant evaluated at the empty
tuple; and for $M\ge1$, fixing $(b_1,\dots,b_{M-1})\in\mathbb N^{M-1}$ makes
$b_M\mapsto R(b_1,\dots,b_{M-1},b_M)$ a polynomial in one variable over
$\mathbb Q$ with infinitely many roots, hence the zero polynomial, so every
$X_M$-coefficient of $R$ vanishes at $(b_1,\dots,b_{M-1})$ and the induction
applies to each of those coefficients. Hence $R=0$.

A sequence $(\chi_n)_{n\ge0}$ of class functions with $\chi_n$ a class function
on $S_n$ is **eventually polynomial** when there are $N\ge0$ and a character
polynomial $P$ with

$$\chi_n(\sigma)=P(X_1(\sigma),X_2(\sigma),\dots)$$

for all $n\ge N$ and all $\sigma\in S_n$
([[def-class-function-and-the-space-of-complex-class-functions]]). By
uniqueness in the limit, such a $P$ is determined by $(\chi_n)$ whenever it
exists. No choice principle is used.
