---
id: thm-hook-length-formula
kind: theorem
title: The hook length formula
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-hook-arm-leg-and-hook-length, lem-hook-product-branching-identity, lem-hook-product-change-under-corner-removal, lem-standard-tableau-removal-recursion, thm-standard-polytabloid-basis]
proof_strategy: induction
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
      locator: "§1.4, printed pp. 7-11: Lemma 1.11, Proposition 1.12, and Theorem 1.13 (Frame-Robinson-Thrall) with the completed removable-node induction; read in the full text."
    - title: "Charlotte Chan, Representation Theory of Symmetric Groups (Oxford Hilary Term 2011 lecture notes, 40 PDF pp.)"
      url: "https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf"
      locator: "§7, printed pp. 27-28: the recalled Young-Frobenius and hook formulas on p. 27 and the hook-product identity stated in Theorem 7.3(b) on p. 28; used as an independent statement check."
    - title: "Pavel Etingof et al., Introduction to Representation Theory, MIT 18.712 Chapter 4 (OCW Chapter 4 file, 32 pp.)"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/84358595a02a73bced2c4e363a5d66f0_MIT18_712F10_ch4.pdf"
      locator: "§4.17, PDF p. 18: Theorem 4.53 (the hook length formula) with the first-row deletion induction; read in the Chapter 4 file as an independent statement check."
---

## Statement

For every $n\ge0$ and every $\lambda\vdash n$, the number $f^\lambda$ of
standard $\lambda$-tableaux is
$$f^\lambda=\frac{n!}{\prod_{x\in[\lambda]}h(x)},$$
the empty product for $\lambda=\varnothing$ being $1$, so that
$f^\varnothing=1$ and, for $n\ge1$, $f^\lambda=1$ for $\lambda=(n)$ and $\lambda=(1^n)$. In
particular, over $\mathbb C$,
$$\dim_{\mathbb C}S^\lambda=\frac{n!}{\prod_{x\in[\lambda]}h(x)}$$
for the Specht module $S^\lambda$, including $\dim_{\mathbb C}S^\varnothing=1$.

## Facts & Assumptions

**Given:** An integer $n\ge0$ and a partition $\lambda\vdash n$, with $f^\lambda$ the number of standard $\lambda$-tableaux and $P(\lambda)=\prod_{x\in[\lambda]}h(x)$ the hook product.

[F1] $f^\lambda=\sum_{x\in\operatorname{Rem}(\lambda)}f^{\lambda-x}$ for $n\ge1$, and $f^\varnothing=1$; the boxes of $[\lambda]$ are the boxes of $[\lambda-x]$ together with $x$ for $x\in\operatorname{Rem}(\lambda)$ ([[lem-standard-tableau-removal-recursion]]).

[F2] For $x\in\operatorname{Rem}(\lambda)$ with $\lambda\vdash n\ge1$: $P(\lambda)/P(\lambda-x)=R(x):=\prod_{y\in R_x}h_\lambda(y)/(h_\lambda(y)-1)$ ([[lem-hook-product-change-under-corner-removal]]).

[F3] $\sum_{x\in\operatorname{Rem}(\lambda)}R(x)=n$, the empty sum being $0$ ([[lem-hook-product-branching-identity]]).

[F4] The family of standard polytabloids is a $\mathbb C$-basis of the Specht module $S^\lambda$, so $\dim_{\mathbb C}S^\lambda=f^\lambda$ for every $\lambda\vdash n$, including $n=0$ ([[thm-standard-polytabloid-basis]]).

[F5] $P(\lambda)$ is the product of the $n$ positive integers $h(x)$, one for each box of $[\lambda]$; for $\lambda=\varnothing$ it is the empty product $1$, for $\lambda=(n)$ the product is $n!$, and for $\lambda=(1^n)$ the conjugate diagram gives the same multiset of hooks ([[def-hook-arm-leg-and-hook-length]]).



## Proof

**Proof technique:** strong induction on $n$.

1.1 Base cases: for $n=0$ the only partition is $\varnothing$, whose set of standard tableaux is the singleton consisting of the empty tableau, so $f^\varnothing=1=0!/1$ with empty product $1$; for $n=1$ the only partition is $(1)$, whose single box has $h=1$ and exactly one standard tableau, so $f^{(1)}=1=1!/1$. [base, F1, F5, given]

1.2 Induction hypothesis: for every $m$ with $0\le m<n$ and every partition $\mu\vdash m$, $f^\mu=m!/P(\mu)$. [ih, given]

1.3 The dimension clause: by [F4], $\dim_{\mathbb C}S^\lambda=f^\lambda$ for every $\lambda\vdash n$, including $\lambda=\varnothing$ where both sides are $1$; this holds for all $n$ because [F4] covers every $n\ge0$. [F4, given]

2.1 For $n\ge2$ and $\lambda\vdash n$, [F1] gives $f^\lambda=\sum_{x\in\operatorname{Rem}(\lambda)}f^{\lambda-x}$; each $\lambda-x$ is a partition of $n-1<n$, so step 1.2 gives $f^{\lambda-x}=(n-1)!/P(\lambda-x)$, and [F2] turns this into $(n-1)!R(x)/P(\lambda)$. Summing over the removable nodes and using [F3], $f^\lambda=\frac{(n-1)!}{P(\lambda)}\sum_{x}R(x)=\frac{(n-1)!\,n}{P(\lambda)}=\frac{n!}{P(\lambda)}$. [step 1.2, F1, F2, F3, algebra]

3.1 The two identities $f^{(n)}=1=f^{(1^n)}$ follow because the hook multiset of $(n)$ and of $(1^n)$ is $\{1,2,\dots,n\}$ by [F5], so the formula gives $n!/n!=1$ in both cases. [step 2.1, F5, given]

4.1 Strong induction on $n$: the base cases are step 1.1, the inductive step is step 2.1 with the hypothesis step 1.2, and steps 1.3 and 3.1 record the dimension and endpoint clauses; hence $f^\lambda=n!/\prod_{x\in[\lambda]}h(x)$ and $\dim_{\mathbb C}S^\lambda=f^\lambda$ hold for every $n\ge0$ and every $\lambda\vdash n$. [step 1.1, step 1.2, step 2.1, step 1.3, step 3.1, discharge-induction] ∎
