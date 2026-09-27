---
id: ex-torsion-of-a-two-term-based-contractible-complex
kind: example
title: "Torsion of a two-term based contractible complex"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-finite-based-free-chain-complex-and-its-contraction-torsion, lem-contraction-torsion-is-independent-of-the-contracting-homotopy, lem-parity-map-of-a-finite-contracted-complex-is-invertible, def-k-one-of-a-ring-and-the-whitehead-group-of-a-discrete-group]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Lück, §2.2, equation (2.7), pp.27–28"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "§2.2, equation (2.7), pp.27–28"
    - title: "Cohen, §19, pp.62–65"
      url: "https://math.uchicago.edu/~shmuel/tom-readings/Cohen%2C%20simple-htpy-thry.pdf"
      locator: "§19, pp.62–65"
---
## Statement

Let $R$ be a unital ring, let $u\in R^{\times}$, and let $C_\bullet$ be the based right $R$-chain complex
$$0\to C_q=R\xrightarrow{\ u\ }C_{q-1}=R\to0$$
for some $q\ge1$, with the displayed ordered right bases consisting of one vector in each of the degrees $q$ and $q-1$. Then:
1. $C_\bullet$ is contractible;
2. with the odd-to-even convention,
$$\tau(C_\bullet)=(-1)^{q+1}[u]\in\tilde K_1(R),$$
that is, $\tau(C_\bullet)=[u]$ for odd $q$ and $\tau(C_\bullet)=-[u]$ for even $q$;
3. after passing to $\mathrm{Wh}(\pi)$ the same formula holds for $R=\mathbb Z[\pi]$.

## Facts & Assumptions

**Given:** A unital ring $R$, a unit $u\in R^\times$ and the two-term based right $R$-complex $C_\bullet$ concentrated in degrees $q-1$ and $q$ with $q\ge1$ and one basis vector per degree.

[F1] A chain contraction of $C_\bullet$ is a right-linear family $s$ with $ds+sd=\mathrm{id}$, the displayed right $R$-bases make $C_\bullet$ a finite based free right $R$-complex, and when the numbers of odd and even basis vectors agree the contraction torsion is the class $\tau_s(C)=[A_s]\in\tilde K_1(R)$ of the matrix of $(d+s)_{\mathrm{odd}}$ in the degree-ordered displayed bases ([[def-finite-based-free-chain-complex-and-its-contraction-torsion]]).

[F2] The torsion class does not depend on the choice of contraction, so it is written $\tau(C)$, and the parity map $(d+s)_{\mathrm{odd}}:C_{\mathrm{odd}}\to C_{\mathrm{even}}$ is an isomorphism of right $R$-modules for every contraction ([[lem-contraction-torsion-is-independent-of-the-contracting-homotopy]], [[lem-parity-map-of-a-finite-contracted-complex-is-invertible]]).

[F3] $K_1(R)=\mathrm{GL}(R)/\mathrm E(R)$ is written additively, so $[AB]=[A]+[B]$, $[I]=0$ and $[A^{-1}]=-[A]$; $\tilde K_1(R)=K_1(R)/\langle[-1]\rangle$; and $\mathrm{Wh}(\pi)=K_1(\mathbb Z[\pi])/\langle[\pm g]:g\in\pi\rangle$ receives the quotient map from $K_1(\mathbb Z[\pi])$ ([[def-k-one-of-a-ring-and-the-whitehead-group-of-a-discrete-group]]).

## Proof

**Proof technique:** direct.

1.1 Write $e_q,e_{q-1}$ for the displayed right-module basis vectors, so the matrix convention means $d(e_q)=e_{q-1}\cdot u$. Define the right-linear map $s$ by $s(e_{q-1})=e_q\cdot u^{-1}$ and set its other components to zero. Then $ds(e_{q-1})=d(e_q)\cdot u^{-1}=e_{q-1}\cdot uu^{-1}=e_{q-1}$, while $sd(e_q)=s(e_{q-1}\cdot u)=e_q\cdot u^{-1}u=e_q$. Thus $ds+sd=1$ in both nonzero degrees, so $C_\bullet$ is contractible with one odd and one even displayed basis vector. [F1]

1.2 If $q$ is odd then $C_{\mathrm{odd}}=C_q$, $C_{\mathrm{even}}=C_{q-1}$ and $s$ vanishes on $C_q$, so $(d+s)_{\mathrm{odd}}=d$ has the $1\times1$ matrix $u$ in the displayed bases and $\tau(C_\bullet)=[u]$ by [F1] and [F2]. If $q$ is even then $C_{\mathrm{odd}}=C_{q-1}$, $C_{\mathrm{even}}=C_q$ and $d$ vanishes on $C_{q-1}$, so $(d+s)_{\mathrm{odd}}=s$ has the $1\times1$ matrix $u^{-1}$ and $\tau(C_\bullet)=[u^{-1}]=-[u]$ by [F3]. This proves assertions 1 and 2, with the single formula $\tau(C_\bullet)=(-1)^{q+1}[u]$. [F1, F2, F3]

2.1 For $R=\mathbb Z[\pi]$, apply the quotient homomorphism $K_1(R)\to\mathrm{Wh}(\pi)$ to the torsion class $(-1)^{q+1}[u]$ computed in step 1.2. Its image is $(-1)^{q+1}$ times the image of $[u]$, which proves the same formula in the Whitehead group. [F3, step 1.2] ∎