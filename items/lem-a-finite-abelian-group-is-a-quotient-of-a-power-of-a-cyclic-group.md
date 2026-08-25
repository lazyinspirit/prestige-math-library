---
id: lem-a-finite-abelian-group-is-a-quotient-of-a-power-of-a-cyclic-group
kind: lemma
title: "Every finite abelian group is a quotient of $(\\mathbb Z/n)^{k}$ for some $n$ and $k$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-fundamental-theorem-of-finite-abelian-groups-invariant-factor-form, def-invariant-factor-data-for-a-finite-abelian-group, thm-classification-of-cyclic-groups, def-integers-modulo-n, def-congruence-modulo-an-integer, thm-integers-modulo-n-basic-algebra, thm-first-isomorphism-theorem-groups, def-quotient-group, def-divides-in-z]
justified_by: []
aliases: []
landmark: false
proof_strategy: cases
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory (course notes/monograph), Lemma 9.11"
      url: "https://web.archive.org/web/2023/http://alpha.math.uga.edu/~pete/FieldTheory.pdf"
    - title: "K. Conrad, Cyclotomic Extensions (expository blurb), Section 5"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/cyclotomic.pdf"
pipeline_run: null
---

## Statement

For every finite abelian group $G$ there are positive integers $n$ and $k$ and a
surjective group homomorphism

$$(\mathbb Z/n)^{k}\longrightarrow G,$$

where $(\mathbb Z/n)^{k}$ denotes the set of $k$-tuples of classes in
$\mathbb Z/n$, with componentwise addition, for the additive group
$\mathbb Z/n$ ([[def-integers-modulo-n]], [[thm-integers-modulo-n-basic-algebra]]).
Equivalently, $G\cong(\mathbb Z/n)^{k}/H$ for a subgroup $H$
([[def-quotient-group]], [[thm-first-isomorphism-theorem-groups]]).

## Facts & Assumptions

**Given:** A finite abelian group $G$.

[L1] For every finite abelian group $G$ there is a unique list $1<n_1\mid n_2\mid\cdots\mid n_r$ with $G\cong C_{n_1}\times\cdots\times C_{n_r}$; the trivial group corresponds to the empty list ([[thm-fundamental-theorem-of-finite-abelian-groups-invariant-factor-form]], [[def-invariant-factor-data-for-a-finite-abelian-group]]).

[L2] A cyclic group of finite order $m$ is isomorphic to $(\mathbb Z/m,+)$ ([[thm-classification-of-cyclic-groups]]).

[L3] For every natural number $m$, one has $[a]_m=[b]_m$ exactly when $m\mid a-b$ ([[def-integers-modulo-n]], [[def-congruence-modulo-an-integer]], [[def-divides-in-z]]), addition of classes is represented by addition of representatives, and $(\mathbb Z/m,+)$ is an abelian group ([[thm-integers-modulo-n-basic-algebra]]).

[L4] For a homomorphism $f:A\to B$, the rule $a\ker f\mapsto f(a)$ is an isomorphism $A/\ker f\to\operatorname{im}f$ ([[thm-first-isomorphism-theorem-groups]], [[def-quotient-group]]).

## Proof

**Proof technique:** cases.

1.1 In the case that the invariant-factor list of [L1] is empty, $G$ is trivial; take $n=1$ and $k=1$, so that $(\mathbb Z/1)^{1}$ is a one-element group and the unique map to $G$ is a surjective homomorphism. [assume-case trivial, L1]

1.2 In the case $r\ge1$, put $n:=n_r$ and $k:=r$. Each $n_i$ divides $n$, the list being a divisibility chain by [L1]. [assume-case nontrivial, L1]

2.1 For each $i$ the rule $[a]_{n}\mapsto[a]_{n_i}$ is a well-defined surjective group homomorphism $\mathbb Z/n\to\mathbb Z/n_i$: if $[a]_n=[b]_n$ then $n\mid a-b$, hence $n_i\mid a-b$ because $n_i\mid n$, so $[a]_{n_i}=[b]_{n_i}$ by [L3]; it respects addition by [L3]; and every class $[a]_{n_i}$ is the image of $[a]_n$. [step 1.2, L3]

3.1 Let $P:=(\mathbb Z/n)^{r}$ and $Q:=(\mathbb Z/n_1)\times\cdots\times(\mathbb Z/n_r)$, both with componentwise addition. By [L3] each coordinate $(\mathbb Z/n,+)$ and $(\mathbb Z/n_i,+)$ is an abelian group, so $P$ and $Q$ are abelian groups under these coordinatewise operations. Define $\pi\colon P\to Q$ by $\pi\bigl([a_1]_n,\ldots,[a_r]_n\bigr):=\bigl([a_1]_{n_1},\ldots,[a_r]_{n_r}\bigr)$. Step 2.1 gives each coordinate map $\mathbb Z/n\to\mathbb Z/n_i$ as a well-defined surjective homomorphism, so $\pi$ is a well-defined surjective group homomorphism. Fact [L2] identifies each coordinate group $(\mathbb Z/n_i,+)$ with $C_{n_i}$, and [L1] identifies $C_{n_1}\times\cdots\times C_{n_r}$ with $G$ up to isomorphism. Composing with that isomorphism gives a surjective homomorphism $(\mathbb Z/n)^{k}\to G$. [step 1.2, step 2.1, L1, L2, L3]

4.1 The two cases are exhaustive, the invariant-factor list being empty or not, so such $n$ and $k$ exist for every finite abelian $G$; and [L4] turns any such surjection into an isomorphism $G\cong(\mathbb Z/n)^{k}/H$ with $H$ its kernel. [step 1.1, step 3.1, L4, cases-exhaustive] ∎

## Remarks

- **Why the invariant-factor form is convenient.** The invariant factors form a divisibility chain, so the single modulus $n=n_r$ works immediately. A primary decomposition also proves the statement: take $n$ to be the least common multiple of the finitely many prime-power orders and reduce $\mathbb Z/n$ onto each cyclic factor. The invariant-factor form simply avoids that extra choice of modulus.
