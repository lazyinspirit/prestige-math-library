---
id: ex-hook-lengths-for-row-column-and-hook-shapes
kind: example
title: Hook lengths for one-row, one-column and hook shapes
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-hook-arm-leg-and-hook-length, thm-hook-length-formula]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "David A. Craven, Groups, Geometries and Representation Theory (Spring Term 2013 lecture notes, 42 pp.)"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf"
      locator: "§1.4, printed pp. 7-11: the hook table conventions and Theorem 1.13; read in the full text."
    - title: "Jeremy L. Martin, Lecture Notes on Algebraic Combinatorics (263 pp.)"
      url: "https://jeremymartinmath.github.io/CombinatoricsNotes.pdf"
      locator: "§9.10, Examples 9.10.7-9.10.8: row and column counts at n=3,4, and f^(2,1)=2=3-1; read in the full 263-page notes as an independent check."
    - title: "Charlotte Chan, Representation Theory of Symmetric Groups (Oxford Hilary Term 2011 lecture notes, 40 PDF pp.)"
      url: "https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf"
      locator: "§7, printed p. 27: hook formula statement; read in the full text."
---

## Example

For $n\ge1$, under the hook length formula: (i) for $\lambda=(n)$ the hooks are
$h(1,j)=n-j+1$ ($1\le j\le n$), the product is $n!$, and $f^{(n)}=1$; (ii)
for $\lambda=(1^n)$ the hooks are again $1,2,\dots,n$, the product is $n!$,
and $f^{(1^n)}=1$; (iii) for $n\ge2$ and $\lambda=(n-1,1)$ the hooks are
$h(1,1)=n$, $h(1,j)=n-j$ for $2\le j\le n-1$, and $h(2,1)=1$, so the product
is $n(n-2)!$ and $f^{(n-1,1)}=n!/(n(n-2)!)=n-1$. For $n=1$ the shape
$(0,1)$ is not a partition; the smallest member of this hook-shape family is $(1,1)$ for $n=2$, where
$f^{(1,1)}=1$ agrees with $n-1=1$ computed in the one-column case.

## Facts & Assumptions

**Given:** Integers $n\ge1$ and the partitions $(n)$, $(1^n)$ and, for $n\ge2$, $(n-1,1)$ of $n$, with their Young diagrams and conjugates.

[F1] $h(i,j)=\lambda_i-j+\lambda'_j-i+1$ for $(i,j)\in[\lambda]$ and $P(\lambda)=\prod h$; in particular $h(1,j)=\lambda_1-j+\lambda'_j$ and $h(i,1)=\lambda_i-1+\lambda'_1-i+1$ ([[def-hook-arm-leg-and-hook-length]]).

[F2] $f^\lambda=n!/P(\lambda)$ for $\lambda\vdash n\ge1$, so $f^\lambda$ is determined by the multiset of hook lengths ([[thm-hook-length-formula]]).



## Verification

**Proof technique:** direct.

1.1 (One row.) For $\lambda=(n)$ one has $\lambda'_j=1$ for $1\le j\le n$, so $h(1,j)=n-j+1-1+1=n-j+1$, the hooks are $n,n-1,\dots,1$, the product is $n!$, and [F2] gives $f^{(n)}=n!/n!=1$; this includes $n=1$ with the single hook $h(1,1)=1$. [F1, F2, algebra]

1.2 (One column.) For $\lambda=(1^n)$ one has $\lambda'_1=n$ and $\lambda'_j=0$ for $j\ge2$, so $h(i,1)=1-1+n-i+1=n-i+1$ for $1\le i\le n$ and there are no other boxes; the hooks are again $n,n-1,\dots,1$, the product is $n!$, and [F2] gives $f^{(1^n)}=1$. [F1, F2, algebra]

1.3 (Hook shape, $n\ge3$.) For $\lambda=(n-1,1)$ the conjugate is $\lambda'=(2,1,\dots,1)$ with $\lambda'_1=2$ and $\lambda'_j=1$ for $2\le j\le n-1$: $h(1,1)=(n-1)-1+2-1+1=n$; for $2\le j\le n-1$, $h(1,j)=(n-1)-j+1-1+1=n-j$, giving the values $n-2,n-3,\dots,1$; and $h(2,1)=1-1+2-2+1=1$. [F1, given, algebra]

2.1 (Hook shape, product and count.) The product of the hooks of step 1.3 is $n\cdot(n-2)!\cdot1=n(n-2)!$ (the factors $n-2,\dots,1$ contribute $(n-2)!$); hence [F2] gives $f^{(n-1,1)}=n!/(n(n-2)!)=(n-1)!/(n-2)!=n-1$. [F2, step 1.3, algebra]

3.1 (The case $n=2$.) Here $(n-1,1)=(1,1)=(1^2)$ is the one-column shape of step 1.2: the formula of step 2.1 reads $n(n-2)!=2\cdot0!=2$, the hook product is indeed $2$, and $f^{(1,1)}=1=n-1$; the intermediate range $2\le j\le n-1$ is empty and contributes the empty product $1$. [step 1.2, step 1.3, step 2.1, algebra]

4.1 (Endpoint $n=1$.) The shape $(n-1,1)=(0,1)$ is not a partition, so the hook-shape family begins at $n=2$; for $n=1$ the only partitions are $(1)=(1^1)$, covered by steps 1.1 and 1.2 with $f^{(1)}=1$. [F1, step 1.1, step 1.2, given] ∎
