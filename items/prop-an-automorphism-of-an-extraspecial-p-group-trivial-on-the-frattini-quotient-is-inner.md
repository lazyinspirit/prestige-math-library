---
id: prop-an-automorphism-of-an-extraspecial-p-group-trivial-on-the-frattini-quotient-is-inner
kind: proposition
title: "An automorphism of an extraspecial $p$-group acting trivially on its Frattini quotient is inner"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-equivalent-characterisations-of-an-extraspecial-p-group, cor-the-order-of-an-extraspecial-p-group-is-p-to-one-plus-an-even-number, cor-the-generator-rank-of-an-extraspecial-p-group-is-twice-its-symplectic-rank, def-group-isomorphism-and-automorphism, def-inner-automorphism-group, cor-group-mod-center-is-inner-automorphism-group, thm-automorphisms-act-linearly-on-the-frattini-quotient, thm-burnside-basis-theorem, def-generator-rank-of-a-finite-p-group, def-finite-cardinality, def-frattini-subgroup-of-a-finite-group, thm-product-rule, def-center-of-a-group, def-commutator-and-commutator-subgroup]
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "D. A. Craven, The Theory of p-Groups, Theorem 3.15(i)"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf"
pipeline_run: null
---

## Statement

Let $P$ be an extraspecial $p$-group of order $p^{1+2n}$ and let
$\rho_P:\operatorname{Aut}(P)\to\operatorname{Aut}_{\mathbb F_p}(P/\Phi(P))$ be
the induced-action homomorphism. Then
$\ker\rho_P=\operatorname{Inn}(P)$: an automorphism of $P$ acting trivially on
the Frattini quotient is inner.

## Facts & Assumptions

**Given:** An extraspecial $p$-group $P$ of order $p^{1+2n}$.

[F1] $\operatorname{Inn}(G):=\{c_g:g\in G\}$ with $c_g(x)=gxg^{-1}$ ([[def-inner-automorphism-group]]).

[F2] For a finite $p$-group $P$, the generator rank $d(P)$ is the common size of a basis of $P/\Phi(P)$ ([[def-generator-rank-of-a-finite-p-group]]).

[F3] $\Phi(G)$ is the intersection of the maximal proper subgroups of $G$ ([[def-frattini-subgroup-of-a-finite-group]]).

[F4] An isomorphism is a bijective group homomorphism, and $\operatorname{Aut}(G)$ is the set of automorphisms of $G$ ([[def-group-isomorphism-and-automorphism]]).

[L1] For a finite $p$-group $P$ the following are equivalent: $P$ is extraspecial; $P$ is nonabelian, $|Z(P)|=p$ and $P/Z(P)$ is elementary abelian; $P$ is nonabelian and $Z(P)=P'=\Phi(P)$ has order $p$ ([[prop-equivalent-characterisations-of-an-extraspecial-p-group]]).

[L2] An extraspecial $p$-group has $\lvert P\rvert=p^{1+2n}$ with $n\ge1$ and $\lvert P/Z(P)\rvert=p^{2n}$ ([[cor-the-order-of-an-extraspecial-p-group-is-p-to-one-plus-an-even-number]]).

[L3] An extraspecial $p$-group of order $p^{1+2n}$ has $\Phi(P)=Z(P)$ of order $p$ and generator rank $d(P)=2n$, and every minimal generating set has $2n$ elements ([[cor-the-generator-rank-of-an-extraspecial-p-group-is-twice-its-symplectic-rank]]).

[L4] Every automorphism of a finite $p$-group induces an $\mathbb F_p$-linear automorphism of $P/\Phi(P)$, and these form a homomorphism $\rho_P$ ([[thm-automorphisms-act-linearly-on-the-frattini-quotient]]).

[L5] A subset $X$ of a finite $p$-group $P$ is a minimal generating set if and only if the quotient map restricts to a bijection from $X$ onto a basis of $P/\Phi(P)$ ([[thm-burnside-basis-theorem]]).

[L6] $G/Z(G)\cong\operatorname{Inn}(G)$ ([[cor-group-mod-center-is-inner-automorphism-group]]).

[L7] If $A$ and $B$ are finite then $A\times B$ is finite and $\lvert A\times B\rvert=\lvert A\rvert\cdot\lvert B\rvert$ ([[thm-product-rule]]).

[L8] $\lvert A\rvert$ is the unique natural number $n$ with $A\approx n$ ([[def-finite-cardinality]]).

## Proof

**Proof technique:** direct.

1.1 The Frattini subgroup is $\Phi(P)=Z(P)$ of order $p$, the Frattini quotient has order $p^{2n}$, and every minimal generating set of $P$ has exactly $2n$ elements. [F2, F3, L1, L2, L3]

2.1 Fix a minimal generating set $X=\{g_1,\dots,g_{2n}\}$, which exists because the Burnside basis theorem matches minimal generating sets with bases of the Frattini quotient. An automorphism of $P$ is determined by its values on $X$, since $X$ generates $P$. [F4, L5, step 1.1]

2.2 Every inner automorphism lies in $\ker\rho_P$: for $g,x\in P$ one has $c_g(x)x^{-1}=gxg^{-1}x^{-1}\in[P,P]=\Phi(P)$, so $c_g$ fixes every coset of $\Phi(P)$. [F1, L1, L4, step 1.1]

2.3 The inner automorphism group has order $\lvert P/Z(P)\rvert=p^{2n}$. [F1, L2, L6, step 1.1]

3.1 If $\theta$ lies in $\ker\rho_P$ then $\theta(g_i)\Phi(P)=g_i\Phi(P)$ for each $i$, so $\theta(g_i)=g_iu_i$ with $u_i\in\Phi(P)=Z(P)$, a set of $p$ elements. Hence $\theta$ is determined by the tuple $(u_1,\dots,u_{2n})$, and there are at most $p^{2n}$ such tuples, so $\lvert\ker\rho_P\rvert\le p^{2n}$. [F3, L4, L7, L8, step 1.1, step 2.1]

4.1 So $\operatorname{Inn}(P)$ is a subset of $\ker\rho_P$ of size $p^{2n}$, while $\ker\rho_P$ has at most $p^{2n}$ elements; hence the two coincide. [L8, step 3.1, step 2.2, step 2.3] ∎

## Remarks

The equality is forced by two counts that happen to agree, and each uses the
extraspecial hypothesis: the upper bound uses $\Phi(P)=Z(P)$ of order $p$
together with the generator rank $2n$, and the lower bound uses
$\lvert P/Z(P)\rvert=p^{2n}$. For a general finite $p$-group the kernel can be
larger than the inner automorphism group; equality is not asserted or excluded
without additional hypotheses.
