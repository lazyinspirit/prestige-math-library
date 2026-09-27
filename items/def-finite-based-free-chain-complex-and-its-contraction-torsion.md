---
id: def-finite-based-free-chain-complex-and-its-contraction-torsion
kind: definition
title: "Finite based free complexes and contraction torsion"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-stable-general-linear-group-and-elementary-subgroup-of-a-ring, def-k-one-of-a-ring-and-the-whitehead-group-of-a-discrete-group, lem-group-rings-have-invariant-basis-number-via-augmentation, lem-parity-map-of-a-finite-contracted-complex-is-invertible, def-chain-complex-in-an-abelian-category, def-left-and-right-modules]
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Lück, §2.2, equation (2.7), pp.27–28"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "§2.2, equation (2.7), pp.27–28"
---
## Definition

Let $R$ be an associative unital ring. A **finite based free right $R$-chain complex** is a chain complex $C$ of right $R$-modules ([[def-chain-complex-in-an-abelian-category]], [[def-left-and-right-modules]]) which is bounded, so that $C_n=0$ for all but finitely many $n$, together with a preferred finite basis $B_n$ of the free right $R$-module $C_n$ for every $n$; the union $B=\bigsqcup_nB_n$ is the **displayed basis** and the elements of $B_n$ are the displayed basis vectors of degree $n$. The **degree-ordered** bases are
$$B_{\mathrm{odd}}=(b\in B_n:n\ \text{odd},\ n\ \text{increasing}),\qquad B_{\mathrm{even}}=(b\in B_n:n\ \text{even},\ n\ \text{increasing}),$$
each written as a finite list by increasing degree and, within a degree, in the order fixed by $B_n$. A chain contraction $s$ of $C$ is a right-linear family with $ds+sd=\mathrm{id}$ ([[lem-parity-map-of-a-finite-contracted-complex-is-invertible]]).

Assume now that
$$\#B_{\mathrm{odd}}=\#B_{\mathrm{even}} .$$
By the parity lemma ([[lem-parity-map-of-a-finite-contracted-complex-is-invertible]]) the odd-to-even component $\Phi_s:=(d+s)_{\mathrm{odd}}:C_{\mathrm{odd}}\to C_{\mathrm{even}}$ is an isomorphism of right $R$-modules, so its matrix $A_s$ in the displayed bases $B_{\mathrm{odd}}$, $B_{\mathrm{even}}$ is an invertible square matrix over $R$, and the **contraction torsion** of $(C,s)$ is the class
$$\tau_s(C):=[A_s]\in\tilde K_1(R)$$
of [[def-k-one-of-a-ring-and-the-whitehead-group-of-a-discrete-group]]. The displayed bases fix the sign convention: the odd-to-even parity is used, not the even-to-odd one.

**Automatic equality of basis sizes.** If $R$ has invariant basis number, then $\#B_{\mathrm{odd}}=\#B_{\mathrm{even}}$ always holds, because $\Phi_s$ is an isomorphism of free right $R$-modules $C_{\mathrm{odd}}\to C_{\mathrm{even}}$; in particular this applies to every group ring $R=\mathbb Z[\pi]$ by [[lem-group-rings-have-invariant-basis-number-via-augmentation]]. Over a ring without invariant basis number the matrix formula is asserted only when the two displayed finite basis sizes agree, as above; the parity lemma itself needs no such hypothesis.

**The two-term case.** Let $q\ge1$, let $u\in R$ be a unit, and let $C$ be the complex $0\to C_q=R\xrightarrow{u}C_{q-1}=R\to0$ with the displayed single basis vector in each of the degrees $q$ and $q-1$ and zero elsewhere. The contraction identity forces $u$ to be a unit and $s_{q-1}=u^{-1}$, $s_q=0$, so the complex is contractible with that contraction. If $q$ is odd the map $(d+s)_{\mathrm{odd}}$ contains the component $C_q\to C_{q-1}$ with matrix $(u)$ and no other nonzero component, so $\tau(C)=[u]$; if $q$ is even the same component belongs to the even-to-odd map, $(d+s)_{\mathrm{odd}}=u^{-1}$ on the remaining degree, and $\tau(C)=[u^{-1}]=-[u]$. Thus
$$\tau(C)=(-1)^{q+1}[u]\in\tilde K_1(R),$$
which is the parity sign used throughout this page.
