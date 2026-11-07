---
id: thm-absolute-galois-group-of-finite-field-is-procyclic
kind: theorem
title: "The absolute Galois group of a finite field is procyclic"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-absolute-galois-group-of-a-field
  - def-separable-closure-in-an-algebraic-extension
  - def-algebraic-closure
  - def-finite-field-and-its-order
  - thm-characteristic-of-a-field-is-zero-or-prime
  - thm-prime-subfield-classification
  - thm-z-mod-p-is-a-field
  - def-extension-degree-and-finite-extension
  - def-linear-basis
  - def-linear-independence
  - def-linear-combination-and-span
  - thm-unique-coordinates-with-respect-to-an-ordered-basis
  - thm-cardinality-of-a-set-of-functions
  - def-nat-power
  - lem-roots-of-x-q-minus-x-form-a-field
  - thm-frobenius-endomorphism-and-finite-field-automorphism
  - prop-finite-fields-are-splitting-fields-of-x-q-minus-x
  - thm-root-bound-for-polynomials-over-a-domain
  - def-finite-galois-extension-and-galois-group
  - def-polynomials-that-split-and-splitting-fields
  - thm-finite-galois-extension-characterizations
  - thm-tower-law-for-finite-field-extensions
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "J. S. Milne, Fields and Galois Theory, version 5.10, Chapter IV, Propositions 4.20 and 4.23, and Chapter VII, Example 7.17"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
    - title: "Romyar Sharifi, Group and Galois Cohomology, Chapter 2, Example 2.3.12"
      url: "https://www.math.ucla.edu/~sharifi/notes/groupcoh-ch02.html"
verification: {}
---

## Statement

Let $k$ be a finite field of order $q$, fix an algebraic closure
$\overline{k}$, and give $G_k=\operatorname{Gal}(\overline{k}/k)$ the
inverse-limit topology from its finite Galois subextensions with discrete
topology. Define the arithmetic Frobenius by $\varphi_q(x)=x^q$ for
$x\in\overline{k}$. For
$$\widehat{\mathbb Z}:=\varprojlim_{n\mid m}\mathbb Z/n\mathbb Z,$$
where the limit ranges over positive integers ordered by divisibility and the
transition maps are reduction, there is a unique topological group
isomorphism $G_k\to\widehat{\mathbb Z}$ carrying $\varphi_q$ to $1$. In
particular, $\varphi_q$ is a topological generator of $G_k$.

## Statement references

[[def-absolute-galois-group-of-a-field|Absolute Galois group of a field]]

[J. S. Milne, *Fields and Galois Theory*, Chapter IV, Propositions 4.20 and 4.23, printed pp. 65–67; Chapter VII, Example 7.17, printed p. 128](https://www.jmilne.org/math/Books/FT0.pdf)

[Romyar Sharifi, *Group and Galois Cohomology*, Chapter 2, Example 2.3.12](https://www.math.ucla.edu/~sharifi/notes/groupcoh-ch02.html)

## Facts & Assumptions

**Given:** A finite field $k$ of order $q$ and an algebraic closure
$\overline{k}$.

[F1] [[def-algebraic-closure]]: $\overline{k}$ is algebraic over $k$ and
algebraically closed.

[F2] [[def-separable-closure-in-an-algebraic-extension]] and
[[def-absolute-galois-group-of-a-field]]: $G_k$ is the inverse limit of the
finite Galois groups of intermediate extensions of the relative separable
closure of $k$ in $\overline{k}$, with the inverse-limit topology.

[F3] [[def-finite-field-and-its-order]],
[[thm-characteristic-of-a-field-is-zero-or-prime]],
[[thm-prime-subfield-classification]], and [[thm-z-mod-p-is-a-field]]: a
finite field has positive prime characteristic $p$ and a prime subfield
isomorphic to $\mathbb F_p=\mathbb Z/p\mathbb Z$, which has $p$ elements.

[F4] [[def-extension-degree-and-finite-extension]],
[[def-linear-basis]], [[def-linear-independence]], and
[[def-linear-combination-and-span]]: a finite ordered basis is a finite
linearly independent spanning list; its length is the extension degree.

[F5] [[thm-unique-coordinates-with-respect-to-an-ordered-basis]]: every vector
has exactly one coordinate list with respect to a finite ordered basis.

[F6] [[thm-cardinality-of-a-set-of-functions]] and [[def-nat-power]]: the set
of functions from a $d$-element set to a $q$-element set has cardinality
$q^d$.

[F7] [[lem-roots-of-x-q-minus-x-form-a-field]]: in characteristic $p$, the
roots of $X^{p^r}-X$ form a subfield and all roots are simple.

[F8] [[thm-frobenius-endomorphism-and-finite-field-automorphism]]: on a finite
field of characteristic $p$, $x\mapsto x^p$ is an automorphism, and its
$r$-fold iterate is $x\mapsto x^{p^r}$.

[F9] [[prop-finite-fields-are-splitting-fields-of-x-q-minus-x]]: in a finite
field of order $Q$, every element satisfies $x^Q=x$.

[F10] [[thm-root-bound-for-polynomials-over-a-domain]]: a nonzero polynomial
of degree $d$ has at most $d$ distinct roots in any field extension.

[F11] [[def-finite-galois-extension-and-galois-group]],
[[def-polynomials-that-split-and-splitting-fields]], and
[[thm-finite-galois-extension-characterizations]]: a finite extension is
Galois if and only if it is the splitting field of a separable polynomial;
then its Galois group has order equal to the extension degree.

[F12] [[thm-tower-law-for-finite-field-extensions]]: degrees multiply in a
finite tower of fields.

## Proof

**Given:** The data in the Statement.

1.1 The characteristic of $k$ cannot be zero, since then the integer multiples of $1_k$ would be infinitely many distinct elements. By [F3] its characteristic is a prime $p$, and its prime subfield has $p$ elements. List the finite set $k$ and scan its elements, appending an element exactly when it is not in the span of the elements already retained. A relation with a nonzero coefficient on a newly appended element would solve that element as a linear combination of the earlier ones, contrary to the append condition; a relation with zero coefficient is excluded by the earlier independence. Hence the retained list stays linearly independent. At the end every element was either appended or already in the span, so the list spans $k$. It is a finite ordered basis of $k$ over its prime subfield; let its length be $f$. By [F5] its coordinate map is a bijection with the functions from an $f$-element set to $\mathbb F_p$. Counting with [F6] gives $q=p^f$. This finite scan makes no use of an infinite choice principle. [F3, F4, F5, F6, construct]

2.1 For each $n\ge1$, put $k_n:=\{x\in\overline{k}:x^{q^n}=x\}.$ Since $q^n=p^{fn}$, [F7] says that $k_n$ is a subfield and that the roots of $X^{q^n}-X$ are simple. The polynomial splits in $\overline{k}$ by [F1], so its degree gives exactly $q^n$ roots and $|k_n|=q^n$. Every element of $k$ satisfies $x^q=x$ by [F9], so iteration gives $k\subseteq k_n$. [F1, F3, F7, F9, step 1.1, algebra]

3.1 As a finite set, $k_n$ spans itself over $k$. Scanning its elements by the same finite procedure as in step 1.1 gives a finite ordered basis over $k$. If the length is $d$, [F5] and [F6] give $|k_n|=q^d$. Since $|k_n|=q^n$ and $q\ge2$, $d=n$, so $[k_n:k]=n$. The polynomial $X^{q^n}-X$ has exactly the elements of $k_n$ as its simple roots, hence $k_n$ is its splitting field over $k$; [F11] makes $k_n/k$ Galois. [F4, F5, F6, F7, F11, step 1.1, step 2.1, algebra]

4.1 Let $E/k$ be any finite subextension of $\overline{k}/k$, and put $n=[E:k]$. A finite ordered $k$-basis of $E$ and [F5]–[F6] give $|E|=q^n.$ By [F9], every element of $E$ is a root of $X^{q^n}-X$. These $q^n$ elements already exhaust the roots in $\overline{k}$ by [F10], so $E=k_n$. Since each $k_n/k$ is Galois by step 3.1, this also proves that every finite subextension is Galois. Every element of $\overline{k}$ lies in a finite subextension, so $\overline{k}$ equals the relative separable closure in [F2]. The finite Galois subextensions are exactly the $k_n$. For $n\mid m$, iterating $x\mapsto x^{q^n}$ gives $k_n\subseteq k_m$; conversely, if $k_n\subseteq k_m$, the tower law [F12] gives $n\mid m$. [F2, F4, F5, F6, F9, F10, F12, step 3.1, algebra]

4.2 The map $x\mapsto x^q$ on $k_n$ is the $f$-fold iterate of the $p$-Frobenius from [F8], and [F9] says it fixes $k$, so it is a $k$-automorphism. By the definition $k_n=\{x:x^{q^n}=x\}$, its $n$th power is the identity. If its $j$th power were the identity for some $0<j<n$, every one of the $q^n$ elements of $k_n$ would be a root of the nonzero degree-$q^j$ polynomial $X^{q^j}-X$, contradicting [F10]. Thus this automorphism has order $n$. By step 3.1 and [F11], the whole Galois group has order $n$; it is therefore generated by this Frobenius. [F8, F9, F10, F11, step 3.1, algebra]

5.1 For $n\mid m$, restriction sends $x\mapsto x^q$ on $k_m$ to the same map on $k_n$. The isomorphism $\operatorname{Gal}(k_n/k)\to\mathbb Z/n\mathbb Z$ sending Frobenius to $1$ therefore identifies restriction with reduction. By [F2] and step 4.1, inverse limits give a topological isomorphism $G_k\cong\varprojlim_{n\mid m}\mathbb Z/n\mathbb Z=\widehat{\mathbb Z}$ that sends $\varphi_q$ to $1$. The integers are dense in this inverse limit: for a basic neighborhood of a point determined by finitely many coordinates, choose a common multiple $N$ of their indices and an integer representing that point's $N$th coordinate; its reductions agree with every specified coordinate. The inverse limit is Hausdorff because distinct coherent tuples differ at some finite discrete coordinate. Thus the powers of $\varphi_q$ are dense, and any continuous isomorphism carrying $\varphi_q$ to $1$ agrees on all those powers and therefore everywhere. [F2, step 4.1, step 4.2] ∎

## Remarks

Once an algebraic closure is fixed, this proof uses no choice principle: the
bases needed for finite fields are obtained by finite scans.
