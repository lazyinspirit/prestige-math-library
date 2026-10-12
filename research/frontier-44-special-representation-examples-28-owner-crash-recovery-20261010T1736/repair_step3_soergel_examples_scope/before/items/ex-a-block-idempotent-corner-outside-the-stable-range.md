---
id: ex-a-block-idempotent-corner-outside-the-stable-range
kind: example
title: "A block idempotent corner outside the stable range"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 36
deps: [def-stable-range-and-block-idempotent-for-higher-level-schur-weyl-duality,
       thm-the-finite-w-and-degenerate-cyclotomic-hecke-actions-satisfy-double-centralizer,
       thm-higher-level-schur-weyl-endomorphism-isomorphism,
       thm-complex-irreducibles-of-symmetric-groups-are-specht-modules,
       thm-group-algebra-decomposes-as-a-product-of-matrix-algebras-over-an-algebraically-closed-field,
       thm-schur-weyl-double-centralizer]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, Schur-Weyl duality for higher levels, Selecta Math. (N.S.) 14 (2008) 1-57 (complete 50-page arXiv article)"
      url: "https://arxiv.org/pdf/math/0605217"
      locator: "Section 3.5, Lemma 3.5, and Section 6.2, Theorem 6.6 and Corollary 6.7, printed pp. 15 and 38-41: the stable range condition (at least d parts of lambda equal to l) and the idempotent corner outside it; the example instantiates them at lambda=(1,1), d=3."
    - title: "Jonathan Brundan and Alexander Kleshchev, The degenerate analogue of Ariki's categorification theorem, Math. Z. 266 (2010) 877-919 (complete 44-page arXiv article)"
      url: "https://arxiv.org/pdf/0901.0057"
      locator: "Section 3.2, (3.7)-(3.14), and Section 4.2, printed pp. 23-24 and 35-36: the blocks and central idempotents of the level-one quotient H_3(Λ)=C[S_3]."
verification:
  precheck: pass
---

## Example

Take the pyramid $\lambda=(1,1)$, so $n=2$, $l=1$, $q_1=2$ and $N=2$, and let
$d=3$. The stable range $q_l\ge d$ fails, since $2<3$; the equivalent source
condition is that at least $3$ parts of $\lambda$ are equal to $l=1$, which is
false. With the origin $c=(0,0)$ one has $a_1=c_1+q_1-n=0$, so the level-one
cyclotomic quotient is $H_3(\Lambda)=\mathbb C[S_3]$, of dimension $6$, while
the image $H_3(\lambda,c)$ in
$\operatorname{End}_{\mathbb C}(V^{\otimes3})^{\mathrm{op}}$, $V=\mathbb C^2$,
has dimension $5$. The example identifies the image as a block idempotent
corner $f\mathbb C[S_3]f$, verifying the central-corner statement of
[[def-stable-range-and-block-idempotent-for-higher-level-schur-weyl-duality]]
in the smallest non-stable case.

## Facts & Assumptions

**Given:** The pyramid $\lambda=(1,1)$, the natural $\mathfrak{gl}_2$-module $V=\mathbb C^2$, the tensor space $V^{\otimes3}$, and the group algebra $\mathbb C[S_3]$.

[F1] For this pyramid $l=1$, $q_1=2$, $e=0$, $\mathfrak g^e=\mathfrak{gl}_2$ and the level-one cyclotomic quotient is $H_3(\Lambda)=\mathbb C[S_3]$ with its place-permutation action on $V^{\otimes3}$; the stable range $q_l\ge d$ becomes $2\ge3$, which fails ([[def-stable-range-and-block-idempotent-for-higher-level-schur-weyl-duality]], [[thm-the-finite-w-and-degenerate-cyclotomic-hecke-actions-satisfy-double-centralizer]]).

[F2] Classical Schur-Weyl duality: $V^{\otimes3}=L(3)\oplus L(2,1)^{\oplus2}$ for $\mathfrak{gl}_2$, and $\operatorname{End}_{\mathfrak{gl}_2}(V^{\otimes3})=\psi_3(\mathbb C[S_3])$, so the image of the group algebra is $\mathbb C\times M_2(\mathbb C)$, of dimension $1+4=5$ ([[thm-schur-weyl-double-centralizer]], [[thm-higher-level-schur-weyl-endomorphism-isomorphism]]).

[F3] Wedderburn decomposition $\mathbb C[S_3]\cong\mathbb C\times\mathbb C\times M_2(\mathbb C)$ with the trivial, sign and standard blocks, indexed by the partitions $(3)$, $(1,1,1)$ and $(2,1)$ ([[thm-group-algebra-decomposes-as-a-product-of-matrix-algebras-over-an-algebraically-closed-field]], [[thm-complex-irreducibles-of-symmetric-groups-are-specht-modules]]).

[F4] For $\dim V=2$ one has $\Lambda^3V=0$, so the antisymmetrizer $a=\sum_{w\in S_3}\operatorname{sgn}(w)w$ acts on $V^{\otimes3}$ as the antisymmetrization, which is $3!=6$ times the projection onto $\Lambda^3V=0$; hence $a$ acts by $0$.

## Proof

**Proof technique:** direct.

**Given:** The image $\psi_3(\mathbb C[S_3])\subseteq\operatorname{End}(V^{\otimes3})^{\mathrm{op}}$ and the Wedderburn blocks of [F3].

1.1 The Schur-Weyl decomposition and the dimension count. By [F2] the tensor space decomposes as $V^{\otimes3}=L(3)\oplus L(2,1)^{\oplus2}$; since $L(3)$ is four-dimensional with multiplicity one and $L(2,1)$ is two-dimensional with multiplicity two, Schur's lemma gives $\operatorname{End}_{\mathfrak{gl}_2}(V^{\otimes3})\cong\mathbb C\times M_2(\mathbb C)$ of dimension $5$. By the duality clause of [F2] this endomorphism algebra is exactly $\psi_3(\mathbb C[S_3])$, so the image of $\mathbb C[S_3]$ has dimension $5$ while $\dim\mathbb C[S_3]=6$. [F2, algebra]

2.1 The killed sign block. By [F3] the block decomposition of $\mathbb C[S_3]$ is $\mathbb C\times\mathbb C\times M_2(\mathbb C)$; the one-dimensional sign block is spanned by the antisymmetrizer $a$ of [F4], which acts on $V^{\otimes3}$ by $0$. Hence the kernel of $\psi_3$ contains the sign block; since the image has dimension $5$ by step 1.1, the kernel has dimension $1$ and is exactly the sign block. So $\psi_3$ kills precisely the sign block and is injective on the direct sum of the trivial and standard blocks. [F3, F4, step 1.1, algebra]

3.1 The block idempotent corner. Let $f$ be the central idempotent of the trivial and standard blocks, so that $\mathbb C[S_3]f=\mathbb C[S_3]f^2$ is the corresponding two-sided ideal; its corner $f\mathbb C[S_3]f$ has dimension $1+4=5$ by [F3]. Multiplication by $f$, $x\mapsto fxf$, is an algebra surjection $\mathbb C[S_3]\twoheadrightarrow f\mathbb C[S_3]f$ whose kernel contains the sign block and has dimension $6-5=1$, hence is exactly the sign block; therefore $\mathbb C[S_3]/\!\ker\psi_3\cong f\mathbb C[S_3]f$ and the image $H_3(\lambda,c)=\psi_3(\mathbb C[S_3])$ is isomorphic to the block idempotent corner $f\mathbb C[S_3]f$, which is the central-corner form $fH_3(\mathbf a)f$ of the Definition. [F3, step 2.1, algebra]

4.1 The stable-range check. Here $q_l=q_1=2$ while $d=3$, so the stable range fails and the image is not the full algebra $H_3(\mathbf a)=\mathbb C[S_3]$ (which has dimension $6$); the corner of step 3.1 realizes the boundary case of the Definition, and the missing dimension $1$ is precisely the killed sign block. [F1, step 1.1, step 3.1, algebra] ∎

## Remarks

- The example is the level-one, two-dimensional instance of the general corner statement: the stable range fails by one step, and the failure is visible as the dimension drop $6-5=1$ caused by the vanishing $\Lambda^3\mathbb C^2=0$.
- The two equal-charge nonadmissible example of [[thm-the-finite-w-and-degenerate-cyclotomic-hecke-actions-satisfy-double-centralizer]] is a different boundary: here the origin is admissible and the corner is a sum of entire central blocks, as required.
