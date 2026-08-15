---
id: prop-legendre-symbol-on-units-is-homomorphism
kind: proposition
title: 'On the units, the Legendre symbol is the unique nontrivial homomorphism to $\{\pm1\}$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-legendre-symbol-well-defined, thm-quadratic-residues-subgroup-modulo-prime, cor-unit-group-modulo-prime-is-cyclic, def-group-homomorphism, def-kernel-and-image-of-group-homomorphism, lem-group-homomorphism-basic-properties]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "W. Stein, Elementary Number Theory, Section 4.1"
      url: "https://wstein.org/ent/ent.pdf"
pipeline_run: null
---

## Statement

Let $p$ be an odd prime. Restricted to $(\mathbb Z/p)^\times$, the Legendre symbol is the unique nontrivial homomorphism

$$\chi_p:(\mathbb Z/p)^\times\longrightarrow\{\pm1\}.$$

It is surjective, and its kernel is the subgroup of nonzero square classes.

## Facts & Assumptions

**Given:** An odd prime $p$, the unit group $G=(\mathbb Z/p)^\times$, and the multiplicative group $\{\pm1\}$.

[L1] On unit classes, the Legendre symbol takes values in $\{\pm1\}$ and is representative-independent ([[prop-legendre-symbol-well-defined]]).

[L2] The nonzero square classes form an index-two subgroup $Q$ of $G$ ([[thm-quadratic-residues-subgroup-modulo-prime]]).

[L3] For a group homomorphism $f:G\to H$, $\ker f=\{g:f(g)=e_H\}$ and $f$ is surjective exactly when its image is $H$ ([[def-kernel-and-image-of-group-homomorphism]]).

[L4] A group homomorphism satisfies $f(xy)=f(x)f(y)$ for every $x,y$ in its domain ([[def-group-homomorphism]]).

[L5] The group $G$ is cyclic of order $p-1$ ([[cor-unit-group-modulo-prime-is-cyclic]]).

[L6] Every group homomorphism preserves integer powers: $f(g^n)=f(g)^n$ ([[lem-group-homomorphism-basic-properties]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], the Legendre symbol is $1$ on $Q$ and $-1$ on the other coset. Thus its value-one set is exactly $Q$, and both values occur. [L1, L2, L3, given]

2.1 Choose $h\in G\setminus Q$, which is possible because [L2] gives index two. The two left cosets are $Q$ and $hQ$, so every element outside $Q$ has the form $hq$ with $q\in Q$. The cyclic group $G$ from [L5] is abelian, and $h^2$ is a square, hence belongs to $Q$ by [L2]. It follows that products from $Q\cdot Q$, $Q\cdot hQ$, and $hQ\cdot hQ$ lie respectively in $Q$, $hQ$, and $Q$. The corresponding signs multiply as $1\cdot1=1$, $1\cdot(-1)=-1$, and $(-1)^2=1$. Hence $\chi_p(xy)=\chi_p(x)\chi_p(y)$, so [L4] makes $\chi_p$ a homomorphism; step 1.1 and [L3] give its kernel and surjectivity. [L2, L3, L4, L5, step 1.1, choose]

3.1 Choose a generator $g$ of $G$ by [L5]. If a homomorphism $\psi:G\to\{\pm1\}$ sent $g$ to $1$, then [L6] would make $\psi(g^n)=1$ for every integer $n$, so $\psi$ would be trivial. Every nontrivial $\psi$ therefore sends $g$ to $-1$, and [L6] gives $\psi(g^n)=(-1)^n=\chi_p(g^n)$ for every $n$. Since $g$ generates $G$, $\psi=\chi_p$. [L5, L6, step 2.1, choose] ∎
