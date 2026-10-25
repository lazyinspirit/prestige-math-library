---
id: lem-local-yang-baxter-operators-satisfy-the-artin-relations
kind: lemma
title: "Local Yang–Baxter operators satisfy the Artin relations"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 2
deps: [def-local-yang-baxter-operators-on-tensor-powers, def-yang-baxter-operator-on-an-object]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories (AMS Mathematical Surveys and Monographs 205), author's final version"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "§8.2 Remark 8.2.5 and the proof of Proposition 8.1.10, printed pp. 196--198"
    - title: "V. G. Turaev, Quantum Invariants of Knots and 3-Manifolds (de Gruyter Studies in Mathematics 18, 1994)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/turaev5.pdf"
      locator: "Chapter I relations (3.2.a) and adjacent disjointness, printed pp. 50--51"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $\mathcal C$ be a monoidal category, let $X\in\mathcal C$, let $R$ be a
Yang–Baxter operator on $X$, let $n\ge2$, and let $R_1,\dots,R_{n-1}$ be the
local operators of [[def-local-yang-baxter-operators-on-tensor-powers]], so
that $R_i\in\operatorname{Aut}_{\mathcal C}(X^{\otimes n})$ is the local
operator acting on the $i$-th and $(i+1)$-st tensor factors. Then

$$R_iR_j=R_jR_i\qquad\text{whenever }|i-j|>1,$$

$$R_iR_{i+1}R_i=R_{i+1}R_iR_{i+1}\qquad\text{for }1\le i\le n-2 .$$

In the non-strict model the identities are those of the bracket-corrected local
operators defined in [[def-local-yang-baxter-operators-on-tensor-powers]].

## Facts & Assumptions

**Given:** a monoidal category $\mathcal C$, an object $X$, a Yang–Baxter operator $R$ on $X$, an integer $n\ge2$, and the local operators $R_1,\dots,R_{n-1}$.

[L1] In a strict model the local operator is $R_i=1_X^{\otimes(i-1)}\otimes R\otimes1_X^{\otimes(n-i-1)}$, and in general it is the bracket-corrected conjugate of that word; every $R_i$ is invertible ([[def-local-yang-baxter-operators-on-tensor-powers]]).

[L2] The Yang–Baxter operator satisfies the cubic equation $(R\otimes1_X)(1_X\otimes R)(R\otimes1_X)=(1_X\otimes R)(R\otimes1_X)(1_X\otimes R)$ ([[def-yang-baxter-operator-on-an-object]]).

## Proof

**Proof technique:** direct.

1.1 **Far commutativity in the strict model.** Suppose first that $\mathcal C$ is strict and $|i-j|>1$. The endomorphisms $R_i$ and $R_j$ are tensor products of the identity with the single factor $R$ inserted at positions $\{i,i+1\}$ respectively $\{j,j+1\}$; these supports are disjoint because $|i-j|>1$. Tensoring the two words and using functoriality of the tensor product, both $R_iR_j$ and $R_jR_i$ are the same tensor product of identities with two copies of $R$ at positions $\{i,i+1\}$ and $\{j,j+1\}$ (in the two possible orders of composition); hence $R_iR_j=R_jR_i$. [L1, given, algebra]

1.2 **The adjacent relation in the strict model.** Suppose $\mathcal C$ is strict and $1\le i\le n-2$. Every tensor factor outside positions $i,i+1,i+2$ carries only identities in each of the words $R_iR_{i+1}R_i$ and $R_{i+1}R_iR_{i+1}$, so both sides are $1_X^{\otimes(i-1)}$ tensored with an endomorphism of the three middle factors tensored with $1_X^{\otimes(n-i-2)}$. On those three middle factors the two sides are $(R\otimes1_X)(1_X\otimes R)(R\otimes1_X)$ and $(1_X\otimes R)(R\otimes1_X)(1_X\otimes R)$, which are equal by the cubic equation [L2]. Since tensoring equal morphisms with identities gives equal morphisms, $R_iR_{i+1}R_i=R_{i+1}R_iR_{i+1}$. [L1, L2, given, algebra]

2.1 **The non-strict model.** Let $E:\mathcal C\to\mathcal C'$ be the strong monoidal equivalence used in [L1], put $X'=E(X)$, and let $J_n:X'^{\otimes n}\to E(X^{\otimes n})$ be its iterated tensor constraint. Transport $R$ as $R'=J_2^{-1}E(R)J_2$. Naturality and associativity coherence of the constraints give $E(R_i)=J_nR_i^{\mathrm{str}}J_n^{-1}$: apply $E$ to the bracket-corrected composite of [L1] and use the strong monoidal constraint at each tensor product. Thus $E$ sends each proposed Artin identity to the corresponding identity of steps 1.1 and 1.2, conjugated by the single isomorphism $J_n$. Since an equivalence is faithful, the two identities hold in $\mathcal C$. Every comparison here is a morphism in $\mathcal C'$. [L1, step 1.1, step 1.2, algebra]

3.1 **Conclusion.** Steps 1.1 and 1.2 prove the two families of identities in the strict model, and step 2.1 transports them to the bracket-corrected operators of the non-strict model. This proves the lemma. The argument is a finite computation in the tensor product and uses no choice principle. [step 1.1, step 1.2, step 2.1] ∎ 
