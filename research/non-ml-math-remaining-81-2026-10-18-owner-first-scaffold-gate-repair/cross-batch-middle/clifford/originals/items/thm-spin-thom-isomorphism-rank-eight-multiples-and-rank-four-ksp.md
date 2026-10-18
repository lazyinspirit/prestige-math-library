---
id: thm-spin-thom-isomorphism-rank-eight-multiples-and-rank-four-ksp
kind: theorem
title: Real Spin Thom isomorphisms with real and quaternionic sources
status: draft
origin: pipeline
deps:
- thm-real-clifford-thom-isomorphism
- lem-real-and-quaternionic-spinor-module-morita-evaluation
- lem-reduced-relative-ko-suspension-exactness-and-product
- def-axiom-of-choice
- def-given-spin-and-spinc-structures-and-associated-spinor-bundles
- def-real-clifford-group-and-normalized-pin-spin
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Eschenburg–Hanke, Bott–Thom isomorphism, Hopf bundles and Morse theory,
      theorem 10.7
    url: https://arxiv.org/pdf/2011.14368v3
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-clifford-modules-ko-and-abs-orientations
dependency_level: 13
---

## Statement

Assume AC. For a given Spin bundle $V\to X$ of positive rank $8m$, the
volume-graded irreducible real spinor symbol $\tau_V$ induces a natural
isomorphism $KO^0(X)\to KO_c^0(V)$ by $a\mapsto\pi^*a\,\tau_V$.
For rank $8m+4$ the natural isomorphism is
$KSp^0(X)\to KO_c^0(V)$, $[E]\mapsto\Phi_V(E\otimes_{\mathbb H}\Sigma)$,
using the balanced convention in the Morita lemma. The latter formula is
not ordinary product of two real KO classes. For rank zero, the canonical framed Spin lift gives the identity; an arbitrary given lift gives tensoring by its associated real line $L$, with $L^{\otimes2}\cong\mathbb R$.
The real branch is compatible with direct sums and products of spinor
symbols; mixed quaternionic branches use their balanced spinor tensors.

## Facts & Assumptions

**Given:** AC, the given Spin bundle and the indicated rank.

[F1] The real Clifford–Thom supplier is
[[thm-real-clifford-thom-isomorphism]] with ungraded source
$K_{C(V)}(X)$ and positive rank $4m$; its map is precisely the
source-minus-target symbol $(\Lambda^+,\Lambda^-,c(v))$. Under EH's
north-section convention this map is the negative of
$[H(\Lambda)]-\pi^*[\Lambda^+]$, as restriction to the south disk shows.
This sign normalization is part of the interface. 

[F2] The Morita equivalences and the balanced scalar convention are proved
in the proposed [[lem-real-and-quaternionic-spinor-module-morita-evaluation]].

[F3] Relative symbols are functorial and their external product is the
total graded symbol ([[lem-reduced-relative-ko-suspension-exactness-and-product]]).

[F4] Given Spin lifts and associated spinor bundles use the repo convention $\operatorname{Spin}(0)=\{\pm1\}$ ([[def-given-spin-and-spinc-structures-and-associated-spinor-bundles]], [[def-real-clifford-group-and-normalized-pin-spin]]).



**Proof technique:** explicit symbols and finite-dimensional bundle constructions.

## Proof

**Proof technique:** direct construction.

1.1 In either positive-rank branch compose the corresponding group isomorphism [F2] with [F1]. On a real bundle $E$, the volume operator on $E\otimes\Sigma$ is $1\otimes\omega$, so its eigenspaces are $E\otimes\Sigma^\pm$ and its clutching is $1\otimes c(v)$. Consequently the composite is exactly product by $\tau_V$, rather than an unspecified isomorphism. For a quaternionic bundle $E$ the same calculation is valid in the balanced tensor product since $\omega$ and $c(v)$ commute with the right scalar action on $\Sigma$. This gives exactly the stated $KSp$ formula. [F1, F2, F3, algebra]


2.1 All constructions in step 1.1 commute with pullback of the Spin lift and of the vector bundle, proving naturality. In rank zero the repo convention is $\operatorname{Spin}(0)=\{\pm1\}$. A given lift is a double cover and its spinor is the associated sign line $L$. Its symbol is $[L]\in KO^0(X)$, so the map is $x\mapsto x[L]$, an isomorphism because the transition signs square to one and $L^{\otimes2}\cong\mathbb R$. For the canonical framed lift $L$ is trivial and this is the identity. This is separate from [F1] and preserves nontrivial rank-zero lifts. [F2, F3, F4, step 1.1, algebra]


3.1 For two real-branch ranks the graded tensor of the irreducible spinors is the irreducible real spinor for the orthogonal sum: its action is $c(v)\otimes1+\Gamma\otimes c(w)$; the square is $-(\lVert v\rVert^2+\lVert w\rVert^2)$ and the dimension is that of the unique simple ungraded matrix-algebra module. The product grading is the volume grading: in ranks divisible by four the product of the grouped Clifford generators gives $\omega_{V\oplus W}=\omega_V\otimes\omega_W$. The relative product rule [F3] therefore identifies the product symbols with the sum-bundle symbol. For quaternionic factors the same computation uses the balanced tensors and conjugation from [F2]. More explicitly, for two quaternionic ranks put $M=\Sigma_V\widehat\otimes\Sigma_W$ and $T=\operatorname{Hom}_{C(V\oplus W)}(\Sigma_{V\oplus W},M)$. Its real rank is four by the simple-module dimensions. The two balancing left-$\mathbb H$ actions on $M$ induce a commuting left-$\mathbb H\otimes\mathbb H$ action on $T$; these are even actions, so they commute with the volume grading. Evaluation in [F2] identifies $M=T\otimes_{\mathbb R}\Sigma_{V\oplus W}$. For right-quaternionic coefficient bundles $E,F$, the real coefficient of the sum is therefore exactly $(E\otimes_{\mathbb R}F)\otimes_{\mathbb H\otimes\mathbb H}T$. Associativity of balanced tensors identifies its spinor symbol with the product of the original symbols. Two quaternionic units accordingly produce real rank four, not rank one. If exactly one rank is quaternionic, the tensor spinor is quaternionic irreducible by the same dimension count, and the real coefficient tensors ordinarily with the quaternionic one. Thus all branches commute with their actual tensor symbols and proper coefficient operations. [F2, F3, step 1.1, algebra] ∎
