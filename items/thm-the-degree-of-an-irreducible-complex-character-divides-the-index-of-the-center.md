---
id: thm-the-degree-of-an-irreducible-complex-character-divides-the-index-of-the-center
kind: theorem
title: "The degree of an irreducible complex character divides $[G:Z(G)]$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-a-complex-character-is-irreducible-iff-its-self-inner-product-is-one, def-center-of-a-group, def-standard-inner-product-on-complex-class-functions, prop-class-sums-act-by-central-character-scalars, thm-the-degree-of-an-irreducible-complex-character-divides-the-group-order]
justified_by: []
aliases: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "K. Conrad, Degrees of irreducible representations"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/charthy.pdf"
    - title: "John Tate's tensor-power argument, as summarized in expository sources"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
  audited: 2026-08-30
  precheck: pass
---

## Statement

Let $G$ be a finite group and let $\chi$ be an irreducible complex character of
$G$. Then $\chi(1)$ divides $[G:Z(G)]$.

## Facts & Assumptions

**Given:** A finite group $G$, an irreducible complex character $\chi$ of $G$,
and an irreducible complex representation $V$ of $G$ affording $\chi$.

[F1] An irreducible complex character has self-inner-product $1$
([[cor-a-complex-character-is-irreducible-iff-its-self-inner-product-is-one]]).

[F2] The class-function inner product is
$\langle \varphi,\psi\rangle=\frac1{|G|}\sum_{g\in G}\varphi(g)\overline{\psi(g)}$
([[def-standard-inner-product-on-complex-class-functions]]).

[F3] A central class sum acts on an irreducible representation by a scalar
([[prop-class-sums-act-by-central-character-scalars]]).

[F4] The degree of an irreducible complex character divides the order of the
group ([[thm-the-degree-of-an-irreducible-complex-character-divides-the-group-order]]).

[F5] The center is $Z(G)=\{z\in G:zg=gz\text{ for every }g\in G\}$
([[def-center-of-a-group]]).

## Proof

**Proof technique:** direct.

1.1 Let $n=\chi(1)$. For each integer $N\ge 1$, let $G^N$ act on $V^{\otimes N}$ by $(g_1,\dots,g_N)\cdot(v_1\otimes\cdots\otimes v_N)=(g_1v_1)\otimes\cdots\otimes(g_Nv_N)$. Its character is $\Xi_N(g_1,\dots,g_N)=\prod_{i=1}^N \chi(g_i)$, so by [F2] and [F1] its self-inner-product is $\langle \Xi_N,\Xi_N\rangle_{G^N}=\langle \chi,\chi\rangle_G^N=1$. Hence $\Xi_N$ is irreducible by [F1]. [F1, F2, given, algebra]

2.1 If $z\in Z(G)$, then the conjugacy class of $z$ is the singleton $\{z\}$ by [F5], so [F3] gives $\rho_V(z)=\lambda(z)\operatorname{id}_V$ for some scalar $\lambda(z)\in\mathbb C^\times$. Therefore $(z_1,\dots,z_N)\in Z(G)^N$ acts on $V^{\otimes N}$ as the scalar $\lambda(z_1)\cdots\lambda(z_N)$. [F3, F5, step 1.1, algebra]

3.1 Let $T_N:=\{(z_1,\dots,z_N)\in Z(G)^N:z_1\cdots z_N=e\}$. Since $\lambda$ is multiplicative, step 2.1 shows that every element of $T_N$ acts trivially on $V^{\otimes N}$. Thus the irreducible representation of step 1.1 descends to an irreducible representation of the quotient $G^N/T_N$, still of degree $n^N$. [step 1.1, step 2.1, algebra]

4.1 The map $Z(G)^{N-1}\to T_N$, $(z_1,\dots,z_{N-1})\mapsto (z_1,\dots,z_{N-1},(z_1\cdots z_{N-1})^{-1})$, is bijective, so $|T_N|=|Z(G)|^{N-1}$. Hence $|G^N/T_N|=|G|^N/|Z(G)|^{N-1}=|G|([G:Z(G)])^{N-1}$. Applying [F4] to the irreducible quotient representation from step 3.1 yields $n^N\mid |G|([G:Z(G)])^{N-1}$ for every $N\ge1$. [F4, step 3.1, algebra]

5.1 Fix a prime $p$ and write $n=p^a u$ and $[G:Z(G)]=p^b v$ with $p\nmid uv$. If $a>b$, then choosing $N$ so large that $N(a-b)>v_p(|G|)-b$ makes $p^{Na}$ too large to divide $|G|p^{(N-1)b}$, contradicting step 4.1. Therefore $a\le b$ for every prime $p$, so $n$ divides $[G:Z(G)]$. [step 4.1, choose, algebra]

6.1 Since $n=\chi(1)$, the degree of the irreducible character divides the index of the center. [step 5.1] ∎