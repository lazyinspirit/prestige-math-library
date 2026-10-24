---
id: ex-a-normal-basis-of-the-complex-numbers-over-the-reals
kind: example
title: "$\\{1+i,\\,1-i\\}$ is a normal basis of $\\mathbb C/\\mathbb R$ while $\\{1,i\\}$ is not"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-normal-basis, thm-normal-basis-theorem-over-an-infinite-base-field, cor-complex-numbers-are-a-quadratic-real-extension, thm-real-automorphisms-of-the-complex-numbers, lem-complex-conjugation-and-modulus-laws, def-complex-conjugate-real-imaginary-part-and-modulus, def-complex-numbers-and-arithmetic, thm-finite-galois-extension-characterizations, def-finite-galois-extension-and-galois-group, def-relative-field-automorphism-group, thm-unique-coordinates-with-respect-to-an-ordered-basis, thm-rank-nullity, def-linear-basis, def-extension-degree-and-finite-extension]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "K. Conrad, Linear Independence of Characters (expository blurb), Examples 3.1-3.3"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/linearchar.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, the normal basis theorem"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
pipeline_run: null
---

## Example

The extension $\mathbb C/\mathbb R$ ([[def-complex-numbers-and-arithmetic]]) is
finite Galois of degree two with
$\operatorname{Gal}(\mathbb C/\mathbb R)=\{\mathrm{id},\ z\mapsto\overline z\}$
([[def-complex-conjugate-real-imaginary-part-and-modulus]]). For it:

1. the conjugate list $(1+i,\ 1-i)$ is a normal basis
   ([[def-normal-basis]]);
2. $(1,i)$ is an $\mathbb R$-basis of $\mathbb C$ that is not a conjugate list of
   any element;
3. $(i,-i)$ is the conjugate list of $i$ but is not a basis.

The last two show that the two conditions in the definition of a normal basis are
independent of each other.

## Facts & Assumptions

**Given:** The complex field with $i^{2}=-1$ and conjugation $\overline{a+bi}=a-bi$ for $a,b\in\mathbb R$ ([[def-complex-conjugate-real-imaginary-part-and-modulus]]); in $\mathbb R$ one has $2\ne0$.

[L1] $\mathbb C=\mathbb R(i)$ is a simple algebraic extension with power basis $1,i$ and $[\mathbb C:\mathbb R]=2$ ([[cor-complex-numbers-are-a-quadratic-real-extension]], [[def-extension-degree-and-finite-extension]]).

[L2] Every field automorphism of $\mathbb C$ fixing $\mathbb R$ pointwise is either the identity or complex conjugation, and these two are distinct ([[thm-real-automorphisms-of-the-complex-numbers]], [[def-relative-field-automorphism-group]]).

[L3] Complex conjugation is a real-field automorphism ([[lem-complex-conjugation-and-modulus-laws]]).

[L4] A finite extension $K/F$ with $G=\operatorname{Aut}(K/F)$ is Galois exactly when $|G|=[K:F]$ ([[thm-finite-galois-extension-characterizations]], [[def-finite-galois-extension-and-galois-group]]).

[L5] A list $v$ of length $n$ is an ordered basis of $V$ if and only if every $x\in V$ has exactly one coordinate list with respect to it ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]], [[def-linear-basis]]); and $\dim V=\dim\ker T+\dim\operatorname{im}T$ for a linear $T$ on a finite-dimensional $V$ ([[thm-rank-nullity]]).

[L6] Every finite Galois extension of an infinite field has a normal basis ([[thm-normal-basis-theorem-over-an-infinite-base-field]]).

## Verification

**Proof technique:** direct.

1.1 By [L2] and [L3] the group $\operatorname{Aut}(\mathbb C/\mathbb R)$ has exactly the two elements $\mathrm{id}$ and conjugation, so its order is $2=[\mathbb C:\mathbb R]$ by [L1]; hence $\mathbb C/\mathbb R$ is finite Galois with that Galois group by [L4]. [L1, L2, L3, L4]

2.1 The conjugate list of $1+i$ is $(1+i,\ 1-i)$, whose members have coordinate lists $(1,1)$ and $(1,-1)$ in the ordered basis $(1,i)$ of [L1]. For $a,b\in\mathbb R$, $a(1+i)+b(1-i)=(a+b)+(a-b)i$ vanishes exactly when $a+b=0$ and $a-b=0$, hence when $2a=0$, that is $a=0$ and then $b=0$. [step 1.1, L1, given]

2.2 $(1,i)$ is a basis by [L1], but no $z\in\mathbb C$ has conjugate list $(z,\overline z)$ with underlying set $\{1,i\}$: such a $z$ would lie in $\{1,i\}$, and the set for $z=1$ is $\{1\}$ while for $z=i$ it is $\{i,-i\}$, neither of which is $\{1,i\}$. [step 1.1, L1, given]

3.1 So the linear map $\mathbb R^{2}\to\mathbb C$ sending $(a,b)$ to $a(1+i)+b(1-i)$ has trivial kernel; both spaces have dimension two by [L1], so [L5] makes it bijective and $(1+i,1-i)$ an ordered $\mathbb R$-basis of $\mathbb C$. Being the conjugate list of $1+i$, it is a normal basis, in agreement with [L6]. [step 1.1, step 2.1, L1, L5, L6]

4.1 $(i,-i)$ is the conjugate list of $i$, since $\overline i=-i$, and its two members are distinct; but $1\cdot i+1\cdot(-i)=0$ is a vanishing combination with nonzero coefficients, so the list is not independent and by [L5] is not a basis. With steps 3.1 and 2.2 this establishes all three claims. [step 1.1, step 3.1, step 2.2, L5, given] ∎
