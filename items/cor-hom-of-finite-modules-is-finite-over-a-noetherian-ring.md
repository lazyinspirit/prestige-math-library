---
id: cor-hom-of-finite-modules-is-finite-over-a-noetherian-ring
kind: corollary
title: "Over a Noetherian ring the homomorphism module between two finitely generated modules is finitely generated"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-hom-module-over-a-commutative-ring, lem-hom-from-a-finite-free-module, thm-finitely-generated-modules-over-noetherian-rings-are-noetherian, def-noetherian-module, cor-finite-direct-sums-preserve-chain-conditions, thm-universal-property-of-free-modules, lem-generated-submodule-as-finite-linear-combinations, def-free-module-on-a-set-and-standard-basis, def-generated-cyclic-finitely-generated-and-free-modules, def-hom-groups-and-induced-hom-maps]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Exercise (16.20)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §1 and §3"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a Noetherian commutative ring and let $M,N$ be finitely generated
$R$-modules. Then $\operatorname{Hom}_R(M,N)$, with the $R$-module structure of
[[lem-hom-module-over-a-commutative-ring]], is a finitely generated $R$-module.

The proof exhibits $\operatorname{Hom}_R(M,N)$ as isomorphic to a **submodule**
of $N^{n}$ for a suitable $n\in\mathbb N$. It does not assert that the
embedding is onto, and in general it is not.

## Facts & Assumptions

**Given:** A Noetherian commutative ring $R$ and finitely generated $R$-modules $M$ and $N$.

[L1] A module is finitely generated when it equals $\langle S\rangle_R$ for some finite subset $S$ ([[def-generated-cyclic-finitely-generated-and-free-modules]]).

[L2] Every set map $u\colon X\to M$ extends uniquely to an $R$-module homomorphism $\bar u\colon R^{(X)}\to M$ with $\bar u(e_x)=u(x)$ ([[thm-universal-property-of-free-modules]]).

[L3] For a ring $R$, a left $R$-module $M$ and $S\subseteq M$, the submodule $\langle S\rangle_R$ is the set of finite sums $\sum_{i=1}^{k}r_is_i$ with $k\in\mathbb N$, $r_i\in R$ and $s_i\in S$ ([[lem-generated-submodule-as-finite-linear-combinations]]).

[L4] For a homomorphism $u\colon M\to N$ and a module $X$, precomposition gives a map $u^*\colon\operatorname{Hom}_R(N,X)\to\operatorname{Hom}_R(M,X)$, $g\mapsto g\circ u$ ([[def-hom-groups-and-induced-hom-maps]]).

[L5] For a commutative ring $R$ and $R$-modules $M,N$, the abelian group $\operatorname{Hom}_R(M,N)$ is an $R$-module under $(rf)(m)=r\,f(m)$ ([[lem-hom-module-over-a-commutative-ring]]).

[L6] For a commutative ring $R$, $n\in\mathbb N$ and an $R$-module $N$, the map $f\mapsto(f(e_1),\ldots,f(e_n))$ is an isomorphism of $R$-modules $\operatorname{Hom}_R(R^n,N)\to N^n$ ([[lem-hom-from-a-finite-free-module]]).

[L7] Every finitely generated left module over a left Noetherian ring is Noetherian ([[thm-finitely-generated-modules-over-noetherian-rings-are-noetherian]]).

[L8] A finite direct sum is Noetherian if and only if every summand is Noetherian ([[cor-finite-direct-sums-preserve-chain-conditions]]).

[L9] In $R^{(X)}$ the standard basis vector $e_x$ has coordinate $1_R$ at $x$ and zero elsewhere, and every element is uniquely a finite $R$-linear combination of them ([[def-free-module-on-a-set-and-standard-basis]]).

[L10] A left $R$-module is **Noetherian** when every submodule of it is finitely generated ([[def-noetherian-module]]).

## Proof

**Proof technique:** direct.

1.1 Fix a finite generating set $m_1,\ldots,m_n$ of $M$, with $n\in\mathbb N$. The universal property of the free module gives $\pi\colon R^n\to M$ with $\pi(e_i)=m_i$, and its image is the set of finite sums $\sum_ir_im_i$, that is $\langle m_1,\ldots,m_n\rangle_R=M$; so $\pi$ is surjective. [L1, L2, L3, L9, given]

2.1 Precomposition with $\pi$ gives $\pi^*\colon\operatorname{Hom}_R(M,N)\to\operatorname{Hom}_R(R^n,N)$, $g\mapsto g\circ\pi$. It is $R$-linear for the module structures above, since $(g+g')\circ\pi=g\circ\pi+g'\circ\pi$ and $(rg)\circ\pi=r(g\circ\pi)$, both by evaluating at a point of $R^n$. It is injective: if $g\circ\pi=0$ then $g$ vanishes on $\operatorname{im}\pi=M$, so $g=0$. [L4, L5, step 1.1]

2.2 The module $\operatorname{Hom}_R(R^n,N)$ is Noetherian. Indeed $N$ is finitely generated over the Noetherian ring $R$, hence a Noetherian module; the finite direct sum $N^n$ of copies of $N$ is then Noetherian; and $\operatorname{Hom}_R(R^n,N)$ is isomorphic to $N^n$, while an isomorphism of modules carries submodules to submodules and finite generating sets to finite generating sets, so the isomorphic module is Noetherian too. [L6, L7, L8, L10, step 1.1]

3.1 The image $\pi^*\big(\operatorname{Hom}_R(M,N)\big)$ is a submodule of the Noetherian module $\operatorname{Hom}_R(R^n,N)$, hence finitely generated; and $\pi^*$ is injective and $R$-linear, so $\operatorname{Hom}_R(M,N)$ is isomorphic to that image and is therefore finitely generated as well. [L10, step 2.1, step 2.2] ∎

## Remarks

- **The injectivity of $\pi^*$ is an instance of left exactness.** [[thm-hom-functors-are-left-exact]] gives it for any exact $A\to B\to C\to0$; step 2.1 writes out the case needed here, which uses only that $\pi$ is surjective and so does not require assembling the exact sequence first.

- **No claim of surjectivity.** A homomorphism $R^n\to N$ descends to $M$ exactly when it kills $\ker\pi$, and most do not; the corollary needs only the embedding.

- **Both hypotheses of finite generation are used, and for different reasons.** Finite generation of $M$ produces the free cover in step 1.1; finite generation of $N$ makes the target Noetherian in step 2.2.
