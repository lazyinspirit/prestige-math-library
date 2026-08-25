---
id: lem-a-finite-cyclic-group-has-euler-totient-many-generators
kind: lemma
title: "A cyclic group of order $n$ has exactly $\\varphi(n)$ generators"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-order-characterisation, lem-cyclic-subgroup-is-the-set-of-powers, def-generated-subgroup, def-order-in-a-group, thm-bezout-identity, def-common-divisor-and-gcd, def-coprime, thm-standard-representatives-modulo-n, thm-unit-criterion-modulo-n, def-unit-group-modulo-n-and-euler-totient]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "K. Conrad, Cyclotomic Extensions (expository blurb), Section 1"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/cyclotomic.pdf"
    - title: "P. L. Clark, Field Theory (course notes/monograph), Chapter 9, Section 1"
      url: "https://web.archive.org/web/2023/http://alpha.math.uga.edu/~pete/FieldTheory.pdf"
pipeline_run: null
---

## Statement

Let $G=\langle g\rangle$ be a cyclic group of finite order $n\ge1$
([[def-generated-subgroup]]). For an integer $a$,

$$\langle g^{a}\rangle = G \quad\Longleftrightarrow\quad \gcd(a,n)=1,$$

that is, $g^{a}$ generates $G$ exactly when $a$ and $n$ are coprime
([[def-coprime]]). Consequently $G$ has exactly $\varphi(n)$ generators
([[def-unit-group-modulo-n-and-euler-totient]]).

At $n=1$ the group is trivial, every integer is coprime to $1$, and the single
element is its own generator, in agreement with $\varphi(1)=1$.

## Facts & Assumptions

**Given:** A cyclic group $G=\langle g\rangle$ whose underlying set is finite of order $n\ge1$.

[A1] $|G|=n$, and since $G=\langle g\rangle$, [L1] gives $\operatorname{ord}(g)=|\langle g\rangle|=n$; in particular $g^{n}=e$.

[L1] For an element $x$ of finite order $m$ in a group: $x^{k}=e$ if and only if $m\mid k$; the powers $x^{0},x^{1},\dots,x^{m-1}$ are pairwise distinct; and $\langle x\rangle=\{\,x^{s}:s\in\mathbb N,\ s<m\,\}$, so $|\langle x\rangle|=m=\operatorname{ord}(x)$ ([[lem-order-characterisation]], [[def-order-in-a-group]]).

[L2] $\langle x\rangle=\{\,x^{k}:k\in\mathbb Z\,\}$ ([[lem-cyclic-subgroup-is-the-set-of-powers]]); and $\langle S\rangle$ is the smallest subgroup containing $S$ ([[def-generated-subgroup]]).

[L3] For $a,b\in\mathbb Z$ not both $0$ there are integers $x_0,y_0$ with $ax_0+by_0=\gcd(a,b)$ ([[thm-bezout-identity]]).

[L4] $\gcd(a,b)$ is a common divisor of $a$ and $b$, and $\gcd(a,b)\ge1$ whenever $(a,b)\ne(0,0)$ ([[def-common-divisor-and-gcd]]).

[L5] For $n\ge1$, every class in $\mathbb Z/n$ contains exactly one integer $r$ with $0\le r<n$, and $r\mapsto[r]_n$ is a bijection from $\{0,\dots,n-1\}$ onto $\mathbb Z/n$ ([[thm-standard-representatives-modulo-n]]).

[L6] For $n\ge1$ and $a\in\mathbb Z$, the class $[a]_n$ is a unit of $\mathbb Z/n$ if and only if $\gcd(a,n)=1$ ([[thm-unit-criterion-modulo-n]]).

[L7] $\varphi(n)=\bigl|(\mathbb Z/n)^{\times}\bigr|$ ([[def-unit-group-modulo-n-and-euler-totient]]).

## Proof

**Proof technique:** direct.

1.1 Put $m:=\gcd(a,n)$. Since $n\ge1$ the pair $(a,n)$ is not $(0,0)$, so $m\ge1$, $m\mid a$ and $m\mid n$ by [L4]. [L4, given]

2.1 If $m=1$ then $g^{a}$ generates $G$: by [L3] there are integers $u,v$ with $au+nv=1$, whence $g=g^{au+nv}=(g^{a})^{u}(g^{n})^{v}=(g^{a})^{u}$ using $g^{n}=e$ from [A1]; so $g\in\langle g^{a}\rangle$ by [L2], and $\langle g^{a}\rangle$ is then a subgroup containing $g$, so it contains $\langle g\rangle=G$ by [L2] and equals $G$. [step 1.1, A1, L2, L3]

2.2 Conversely, if $g^{a}$ generates $G$ then $m=1$: from $m\mid a$ and $m\mid n$ the integer $n/m$ is at least $1$ and $(g^{a})^{n/m}=(g^{n})^{a/m}=e$ by [A1], so $\operatorname{ord}(g^{a})\le n/m$ and hence $|\langle g^{a}\rangle|\le n/m$ by [L1]; but $\langle g^{a}\rangle=G$ has $n$ elements, so $n\le n/m$ and therefore $m=1$. [step 1.1, A1, L1, algebra]

3.1 By [A1] and [L1] the powers $g^{0},g^{1},\dots,g^{n-1}$ are pairwise distinct and exhaust $G$, so the generators of $G$ are exactly the elements $g^{r}$ with $0\le r<n$ and $\gcd(r,n)=1$, one for each such $r$. [step 2.1, step 2.2, A1, L1]

4.1 By [L5] the map $r\mapsto[r]_n$ is a bijection from $\{0,\dots,n-1\}$ onto $\mathbb Z/n$, and by [L6] it carries the $r$ with $\gcd(r,n)=1$ onto the units of $\mathbb Z/n$; so the number of such $r$ is $\bigl|(\mathbb Z/n)^{\times}\bigr|=\varphi(n)$ by [L7], and by step 3.1 that is the number of generators of $G$. [step 3.1, L5, L6, L7] ∎

## Remarks

- **Why the criterion is stated and not only the count.** The count answers "how many", but the development below repeatedly needs "which": that $\zeta^{a}$ is again a primitive $n$-th root of unity exactly when $a$ is coprime to $n$ is the criterion, and it is what makes the exponent of a cyclotomic automorphism a unit modulo $n$ ([[thm-the-cyclotomic-galois-group-embeds-in-the-unit-group-modulo-n]]).
