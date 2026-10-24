---
id: lem-parity-map-of-a-finite-contracted-complex-is-invertible
kind: lemma
title: "A chain contraction makes the odd-to-even parity map invertible"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-contractible-complex, def-left-and-right-modules, def-chain-homotopy, def-direct-sum-of-a-family-of-modules, def-k-one-of-a-ring-and-the-whitehead-group-of-a-discrete-group, def-chain-complex-in-an-abelian-category, lem-the-stable-elementary-subgroup-is-normal-and-contains-the-commutator-subgroup, def-stable-general-linear-group-and-elementary-subgroup-of-a-ring]
proof_strategy: direct
verification:
  audited: 2026-09-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Lück, §2.2, equation (2.7), pp.27–28"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "§2.2, equation (2.7), pp.27–28"
---
## Statement

Let $R$ be an associative unital ring and let $C$ be a bounded free right $R$-chain complex, so that $C_n=0$ for all but finitely many $n$ and each $C_n$ is a free right $R$-module. A **chain contraction** of $C$ is a family of right-linear maps $s_n:C_n\to C_{n+1}$ with $d_{n+1}s_n+s_{n-1}d_n=\mathrm{id}_{C_n}$ for every $n$, that is, the identity of $C$ is null-homotopic and $C$ is contractible; equivalently $ds+sd=\mathrm{id}$ as maps of graded modules. Write $C_{\mathrm{odd}}=\bigoplus_nC_{2n+1}$ and $C_{\mathrm{even}}=\bigoplus_nC_{2n}$, and let $(d+s)_{\mathrm{odd}}:C_{\mathrm{odd}}\to C_{\mathrm{even}}$ and $(d+s)_{\mathrm{even}}:C_{\mathrm{even}}\to C_{\mathrm{odd}}$ be the odd-to-even and even-to-odd components of the degree-one perturbation $d+s$ of the differential.

Then:

For the matrix assertions in clause 2, choose a finite ordered basis $B_n$ of each $C_n$ and suppose that the concatenated bases $B_{\mathrm{odd}}$ and $B_{\mathrm{even}}$ have equal size. Use these same bases for every parity map and every contraction below. A bracket on a parity map means the $K_1(R)$ class of its square matrix in these source and target bases. The triangular assertions use decreasing degree order; the equality of classes holds in any fixed ordering of these bases.

1. $(d+s)_{\mathrm{odd}}$ and $(d+s)_{\mathrm{even}}$ are isomorphisms of right $R$-modules, mutually inverse up to the unipotent correction $\mathrm{id}+s^2$: one has $(d+s)_{\mathrm{even}}(d+s)_{\mathrm{odd}}=\mathrm{id}+s^2$ on $C_{\mathrm{odd}}$ and $(d+s)_{\mathrm{odd}}(d+s)_{\mathrm{even}}=\mathrm{id}+s^2$ on $C_{\mathrm{even}}$, where $s^2$ raises degrees by two and is nilpotent. This holds over an arbitrary unital $R$ and uses no rank, freeness, commutativity or invariant-basis-number hypothesis.
2. If $t$ is a second chain contraction, $u=s-t$, $\mu_n=(s_{n+1}-t_{n+1})t_n$ and $\nu_n=(t_{n+1}-s_{n+1})s_n$, then $(\mathrm{id}+\mu)_{\mathrm{odd}}$, $(\mathrm{id}+\nu)_{\mathrm{even}}$ and the composites $$(d+s)_{\mathrm{odd}}\,(\mathrm{id}+\mu)_{\mathrm{odd}}\,(d+t)_{\mathrm{even}},\qquad (d+t)_{\mathrm{even}}\,(\mathrm{id}+\nu)_{\mathrm{even}}\,(d+s)_{\mathrm{odd}}$$ are the identity plus maps that strictly raise degrees by even positive amounts. In particular, when the two displayed bases are finite and of the same size and ordered by decreasing degree, all four matrices are unipotent upper triangular and hence have class $0$ in $K_1(R)$, and $$\bigl[(d+s)_{\mathrm{odd}}\bigr]=-\bigl[(d+t)_{\mathrm{even}}\bigr]\in K_1(R).$$

## Facts & Assumptions

**Given:** A bounded free right $R$-chain complex $C$ over a unital ring $R$, a chain contraction $s$, and a second chain contraction $t$.

[F1] A complex is contractible exactly when its identity is null-homotopic, and a null-homotopy of the identity is a degree-one family $s$ with $ds+sd=1$ ([[def-contractible-complex]], [[def-chain-homotopy]]).

[F2] Odd and even parts of a graded module are the direct sums of the modules of the corresponding degrees, and maps add by components ([[def-direct-sum-of-a-family-of-modules]]).

[F3] For a right $R$-module $C_n$ and right-linear maps, the composite $(d+s)^2$ is computed by composing the components; $d^2=0$ and $s$ raises degree by one ([[def-chain-complex-in-an-abelian-category]]).

[F4] In $K_1(R)=\mathrm{GL}(R)/\mathrm E(R)$ the class is additive over products, $[AB]=[A]+[B]$, and every matrix that is unipotent and upper triangular in a finite ordered basis lies in $\mathrm E(R)$, hence has class $0$ ([[def-k-one-of-a-ring-and-the-whitehead-group-of-a-discrete-group]], [[lem-the-stable-elementary-subgroup-is-normal-and-contains-the-commutator-subgroup]]).

[F5] A matrix is unipotent upper triangular in the degree-ordered basis when it is the identity plus a map raising degrees, and a product of matrices with a degree-raising factor has matrix computed by the block decomposition of [F2] ([[def-stable-general-linear-group-and-elementary-subgroup-of-a-ring]]).

## Proof

**Proof technique:** direct.

1.1 As a map of the graded module $C$, $(d+s)^2=d^2+ds+sd+s^2=\mathrm{id}+s^2$ by [F1] and $d^2=0$; restricting to $C_{\mathrm{odd}}$ and $C_{\mathrm{even}}$ gives $(d+s)_{\mathrm{even}}(d+s)_{\mathrm{odd}}=\mathrm{id}+s^2$ and $(d+s)_{\mathrm{odd}}(d+s)_{\mathrm{even}}=\mathrm{id}+s^2$. [given, F1, F2, F3, algebra]

1.2 The map $s^2$ raises degrees by two, and on the bounded complex $C$ it is nilpotent: $(s^2)^kC_n\subseteq C_{n+2k}=0$ for $k$ large. Hence $\mathrm{id}+s^2$ is invertible on each of $C_{\mathrm{odd}}$ and $C_{\mathrm{even}}$ with inverse $\sum_{k\ge0}(-s^2)^k$, a finite sum. If the homogeneous bases are finite, its matrix in decreasing degree order is upper unitriangular and has class $0$ in $K_1(R)$ by [F4]; no $K_1$ class is asserted for infinite bases. [given, F1, F4, F5]

1.3 For a homogeneous $x$ of even degree one computes $(d+t)x=dx+tx$ and then $(\mathrm{id}+ut)(d+t)x=dx+tx+utdx+ut^2x$; applying $d+s$ and collecting the part of degree $\deg x$ gives $sdx+dtx+dutdx$, and using $du=-ud$, $dtd=d$ and $ds+sd=\mathrm{id}$ this equals $(x-dsx)+(x-tdx)-udx=x$, while every remaining term lies in degree $\deg x+2$ or $\deg x+4$. Hence $(d+s)(\mathrm{id}+\mu)(d+t)=\mathrm{id}+N$ with $N$ strictly raising degree by an even positive amount and $\mu=ut$. [given, F1, algebra]

2.1 From step 1.1, $(d+s)_{\mathrm{even}}\circ(d+s)_{\mathrm{odd}}$ is invertible, so $(d+s)_{\mathrm{odd}}$ is injective; its composite in the other order is invertible, so it is surjective. Hence $(d+s)_{\mathrm{odd}}$ is an isomorphism, and by symmetry so is $(d+s)_{\mathrm{even}}$; this used no finiteness or rank hypothesis beyond boundedness. [given, step 1.1, step 1.2]

2.2 The same computation with $s$ and $t$ interchanged and $u$ replaced by $-u$ gives $(d+t)(\mathrm{id}+\nu)(d+s)=\mathrm{id}+N'$ with $N'$ strictly raising degree by an even positive amount and $\nu=-us$. The maps $\mu=ut$ and $\nu=-us$ themselves raise degree by two, so their identity-plus maps are unipotent on the bounded complex; no square-zero assertion about $u=s-t$ is needed. [given, step 1.3, algebra]

3.1 Assume now that the displayed bases are finite and of the same size, so that the matrices of $(d+s)_{\mathrm{odd}}$, $(d+t)_{\mathrm{even}}$ and the four corrections are defined; by steps 1.3 and 2.2 the four correction matrices are unipotent upper triangular in the degree-ordered bases, hence have class $0$ in $K_1(R)$ by [F4], and additivity of the class gives $[(d+s)_{\mathrm{odd}}]+[(d+t)_{\mathrm{even}}]=0$. [F4, F5, step 1.3, step 2.2]

4.1 Therefore $[(d+s)_{\mathrm{odd}}]=-[(d+t)_{\mathrm{even}}]$ in $K_1(R)$; taking $t=s$ gives in addition $[(d+s)_{\mathrm{odd}}]=-[(d+s)_{\mathrm{even}}]$, and the module-isomorphism assertions hold over an arbitrary associative unital ring without a rank or invariant-basis-number assumption. The $K_1$ equalities in this step retain the finite, equal-size basis hypothesis of step 3.1. [step 2.1, step 3.1] ∎
