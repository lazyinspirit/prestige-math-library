---
id: prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality
kind: proposition
title: p-regular and p-restricted labels under transpose and sign
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
landmark: false
proof_strategy: direct
deps:
  - def-splitting-p-modular-system-for-a-finite-group
  - def-p-regular-and-p-restricted-partitions
  - lem-conjugate-specht-sign-duality-over-fields
  - thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads
  - def-modular-specht-form-and-radical-quotient
  - def-integral-specht-lattice-and-base-change
  - def-sign-representation-and-restriction-of-a-representation
  - def-module-radical-socle-head-and-loewy-series
  - def-tensor-product-of-modules-by-generators-and-relations
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "G. D. James, The Representation Theory of the Symmetric Groups, Lecture Notes in Mathematics 682, Theorem 8.15 and Theorem 11.5, printed pp. 33 and 40"
      url: "https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf"
    - title: "Alexander Kleshchev, Representation Theory of Symmetric Groups and Related Hecke Algebras, Remark 5.5 (q=1 dictionary D^mu = D(mu^t) tensor sgn), PDF p. 25"
      url: "https://arxiv.org/pdf/0909.4844"
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Let $p$ be a prime, let $n\ge0$, and let $(K,\mathcal O,k)$ be a splitting
$p$-modular system for $S_n$, so that $k$ is a splitting field of
characteristic $p$ for $S_n$
([[def-splitting-p-modular-system-for-a-finite-group]]). For $\mu\vdash n$
write $S^\mu_k=k\otimes_{\mathbb Z}S^\mu_{\mathbb Z}$ for the field-valued
Specht module, $D^\mu=S^\mu_k/R^\mu$ for its modular form quotient
([[def-modular-specht-form-and-radical-quotient]]), and let
$$S(\mu):=(S^\mu_k)^*=\operatorname{Hom}_k(S^\mu_k,k),\qquad (\sigma\cdot f)(x):=f(\sigma^{-1}x)$$
be the **dual Specht module**, with
$$D(\mu):=\operatorname{hd}\bigl(S(\mu)\bigr) =S(\mu)/\operatorname{rad}\bigl(S(\mu)\bigr)$$
its head ([[def-module-radical-socle-head-and-loewy-series]]). Let
$\mu'$ be the conjugate partition, and let
$S^{\mu'}_k\otimes\operatorname{sgn}$ be the tensor product of
$k[S_n]$-modules with the diagonal action
$\sigma\cdot(x\otimes w)=(\sigma\cdot x)\otimes(\sigma\cdot w)$, where
$\operatorname{sgn}$ is the one-dimensional sign representation
([[def-sign-representation-and-restriction-of-a-representation]],
[[def-tensor-product-of-modules-by-generators-and-relations]]).

1. **Dual Specht versus sign-twisted conjugate.** If $\mu$ is $p$-restricted
   (equivalently, by
   [[def-p-regular-and-p-restricted-partitions]], $\mu'$ is $p$-regular),
   then $S(\mu)\cong S^{\mu'}_k\otimes\operatorname{sgn}$; consequently
   $S(\mu)$ is nonzero with simple head
   $$D(\mu)\cong D^{\mu'}\otimes\operatorname{sgn},$$
   a nonzero simple $k[S_n]$-module that is self-dual and absolutely
   irreducible.
2. **Equivalent form for $p$-regular labels.** If $\lambda\vdash n$ is
   $p$-regular, then $\lambda'$ is $p$-restricted and
   $$D^\lambda\cong D(\lambda')\otimes\operatorname{sgn}.$$
3. **The two labellings.** The map $\mu\mapsto D(\mu)$ is a bijection from
   the set of $p$-restricted partitions of $n$ to the set of isomorphism
   classes of simple $k[S_n]$-modules; that is, every simple
   $k[S_n]$-module is isomorphic to $D(\mu)$ for exactly one $p$-restricted
   $\mu\vdash n$.

In characteristic $2$ the sign representation is the trivial representation,
so the formulas read $D(\mu)\cong D^{\mu'}$ and $D^\lambda\cong D(\lambda')$;
the transposition is still required, and the two labellings coincide only
for self-conjugate partitions. No step divides by a group order or uses
averaging, and $n=0$ is included.

## Facts & Assumptions

**Given:** A prime $p$, an integer $n\ge0$, a splitting $p$-modular system $(K,\mathcal O,k)$ for $S_n$, and the definitions above.

[F1] $\mu\vdash n$ is $p$-restricted if and only if $\mu'$ is $p$-regular, and transposition is an involution on partitions, so conjugation is a bijection between the $p$-restricted and the $p$-regular partitions of $n$ ([[def-p-regular-and-p-restricted-partitions]]).

[F2] For every field $F$ and every partition $\lambda\vdash n$ there is an $F[S_n]$-isomorphism $S^\lambda_F\otimes\operatorname{sgn}\cong (S^{\lambda'}_F)^*$ ([[lem-conjugate-specht-sign-duality-over-fields]]).

[F3] For $p$-regular $\lambda\vdash n$, the module $D^\lambda$ is nonzero, self-dual and absolutely irreducible, $R^\lambda$ is the unique maximal submodule of $S^\lambda_k$ and equals $\operatorname{rad}(S^\lambda_k)$, and $D^\lambda$ is the simple head of $S^\lambda_k$; distinct $p$-regular partitions give non-isomorphic simples ([[thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads]], [[def-modular-specht-form-and-radical-quotient]]).

[F4] The sign representation is one-dimensional, self-dual, and $\operatorname{sgn}\otimes\operatorname{sgn}\cong k$ with the trivial action; in characteristic $2$ it is the trivial representation ([[def-sign-representation-and-restriction-of-a-representation]]).

[F5] For a finite-dimensional left $A$-module $M$ over a finite-dimensional $k$-algebra $A$, the radical $\operatorname{rad}(M)$ is the intersection of the maximal submodules and the head is $M/\operatorname{rad}(M)$ ([[def-module-radical-socle-head-and-loewy-series]]).

[F6] Tensor products of $k[S_n]$-modules are $k[S_n]$-modules under the diagonal action, and the tensor product with a one-dimensional module is associative with the natural isomorphisms ([[def-tensor-product-of-modules-by-generators-and-relations]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $\mu$ is $p$-restricted, so that $\mu'$ is $p$-regular by [F1]. Applying [F2] with $\lambda:=\mu'$ gives a $k[S_n]$-isomorphism $S^{\mu'}_k\otimes\operatorname{sgn}\cong(S^{(\mu')'}_k)^*=(S^\mu_k)^*=S(\mu)$, because transposition is an involution. [given, F1, F2, algebra]

1.2 Let $M$ be a $k[S_n]$-module and let $L$ be a one-dimensional $k[S_n]$-module with basis $w$ and character $\varepsilon(\sigma)\in k^\times$, so that $\sigma\cdot(x\otimes w)=\varepsilon(\sigma)\,(\sigma x)\otimes w$. Identifying $M\otimes L$ with $M$ by the linear isomorphism $x\otimes w\mapsto x$, the action becomes $\sigma\cdot x=\varepsilon(\sigma)\,\sigma x$. Since every $\varepsilon(\sigma)$ is a nonzero scalar, a subspace $W\le M$ is $S_n$-stable for the twisted action if and only if it is $S_n$-stable for the original action; hence the two actions have the same submodule lattice, the same maximal submodules and the same radical, the radical being their intersection and the head the quotient by it [F5]. Consequently $\operatorname{hd}(M\otimes L)\cong\operatorname{hd}(M)\otimes L$, and if $M$ is simple (respectively absolutely irreducible) then so is $M\otimes L$. For $L=\operatorname{sgn}$ one has $\varepsilon^2=1$ by [F4], so twisting twice returns the original action and $(M\otimes\operatorname{sgn})\otimes\operatorname{sgn}\cong M$. [given, F4, F5, F6, algebra]

2.1 By [F3] the $p$-regular partition $\mu'$ satisfies $\operatorname{hd}(S^{\mu'}_k)=D^{\mu'}$ with $R^{\mu'}=\operatorname{rad}(S^{\mu'}_k)$ the unique maximal submodule. Using step 1.1 and step 1.2 with $L=\operatorname{sgn}$, $$D(\mu)=\operatorname{hd}\bigl(S(\mu)\bigr) \cong\operatorname{hd}\bigl(S^{\mu'}_k\otimes\operatorname{sgn}\bigr) \cong\operatorname{hd}(S^{\mu'}_k)\otimes\operatorname{sgn} =D^{\mu'}\otimes\operatorname{sgn},$$ which is nonzero, simple, self-dual and absolutely irreducible by [F3] and step 1.2. This proves assertion 1. [given, F3, step 1.1, step 1.2]

3.1 Let $\lambda$ be $p$-regular. By [F1] the conjugate $\lambda'$ is $p$-restricted, so step 2.1 applies to $\mu:=\lambda'$ and gives $D(\lambda')\cong D^{(\lambda')'}\otimes\operatorname{sgn}=D^\lambda\otimes\operatorname{sgn}$. By step 1.2, tensoring this isomorphism with $\operatorname{sgn}$ and using $(M\otimes\operatorname{sgn})\otimes\operatorname{sgn}\cong M$ yields $D(\lambda')\otimes\operatorname{sgn}\cong D^\lambda$. This is assertion 2. [given, F1, step 1.2, step 2.1]

4.1 For assertion 3, first note that $\mu\mapsto D(\mu)$ is injective on $p$-restricted partitions: if $D(\mu_1)\cong D(\mu_2)$, then step 2.1 gives $D^{\mu_1'}\otimes\operatorname{sgn}\cong D^{\mu_2'}\otimes\operatorname{sgn}$, and tensoring with $\operatorname{sgn}$ and using step 1.2 gives $D^{\mu_1'}\cong D^{\mu_2'}$; by [F3] the $p$-regular partitions $\mu_1',\mu_2'$ are equal, hence $\mu_1=\mu_2$ by [F1]. It is surjective as well: if $X$ is a simple $k[S_n]$-module, then $X\otimes\operatorname{sgn}$ is simple by step 1.2, so by [F3] it is isomorphic to $D^\lambda$ for some $p$-regular $\lambda$; taking $\mu:=\lambda'$, which is $p$-restricted by [F1], step 3.1 gives $X\cong(X\otimes\operatorname{sgn})\otimes\operatorname{sgn}\cong D^\lambda\otimes\operatorname{sgn}\cong D(\mu)$, where the first isomorphism is the canonical one of step 1.2. Hence $\mu\mapsto D(\mu)$ is a bijection. [given, F1, F3, step 1.2, step 2.1, step 3.1]

5.1 Assertions 1, 2 and 3 are steps 2.1, 3.1 and 4.1. For $n=0$ the unique partition $\varnothing$ is $p$-restricted and $p$-regular by [F1], $S(\varnothing)\cong k^*\cong k$ is the trivial module, and $D(\varnothing)\cong D^\varnothing\otimes\operatorname{sgn}\cong k$ is the unique simple module, so all statements hold. In characteristic $2$ the sign representation is trivial by [F4], so assertions 1-3 read $D(\mu)\cong D^{\mu'}$ and $D^\lambda\cong D(\lambda')$, with the transposition still present; if additionally $\mu=\mu'$ then the two labellings agree on $\mu$, and otherwise they differ. The argument nowhere divides by $p$ or by a group order and never averages over $S_n$. [given, F1, F4, step 2.1, step 3.1, step 4.1] ∎
