---
id: thm-a-yang-baxter-operator-gives-braid-group-representations
kind: theorem
title: "A Yang–Baxter operator gives braid-group representations"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 3
deps: [lem-local-yang-baxter-operators-satisfy-the-artin-relations, def-local-yang-baxter-operators-on-tensor-powers, def-braid-group-by-the-artin-presentation, thm-von-dyck]
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
      locator: "§8.2 Remark 8.2.5, printed p. 198"
    - title: "V. G. Turaev, Quantum Invariants of Knots and 3-Manifolds (de Gruyter Studies in Mathematics 18, 1994)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/turaev5.pdf"
      locator: "Chapter I §2.3 and Theorem I.2.5, printed pp. 36--40"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $\mathcal C$ be a monoidal category, let $X\in\mathcal C$, and let $R$ be a
Yang–Baxter operator on $X$. For every $n\ge2$ there is a unique group
homomorphism

$$\rho_n\colon B_n\longrightarrow\operatorname{Aut}_{\mathcal C}(X^{\otimes n}),\qquad \rho_n(\sigma_i)=R_i ,$$

where $B_n$ is the braid group of
[[def-braid-group-by-the-artin-presentation]] and
$R_1,\dots,R_{n-1}$ are the local operators of
[[def-local-yang-baxter-operators-on-tensor-powers]]. The family
$(\rho_n)_{n\ge2}$ is compatible with the standard inclusions
$\iota_n\colon B_n\to B_{n+1}$, $\iota_n(\sigma_i)=\sigma_i$, in the sense that

$$\rho_{n+1}(\iota_n(\beta))=\rho_n(\beta)\otimes1_X\qquad\text{for all }\beta\in B_n .$$

## Facts & Assumptions

**Given:** a monoidal category $\mathcal C$, an object $X$, a Yang–Baxter
operator $R$ on $X$, an integer $n\ge2$, and the local operators
$R_1,\dots,R_{n-1}$ on $X^{\otimes n}$.

[L1] Each $R_i$ is an automorphism of $X^{\otimes n}$, equal in a strict model to $1_X^{\otimes(i-1)}\otimes R\otimes1_X^{\otimes(n-i-1)}$ and in general to its bracket-corrected conjugate; the correction is independent of the chosen canonical isomorphisms by coherence ([[def-local-yang-baxter-operators-on-tensor-powers]]).

[L2] The local operators satisfy $R_iR_j=R_jR_i$ for $|i-j|>1$ and $R_iR_{i+1}R_i=R_{i+1}R_iR_{i+1}$ for $1\le i\le n-2$, with the bracket-corrected readings in the non-strict model ([[lem-local-yang-baxter-operators-satisfy-the-artin-relations]]).

[L3] For $n\ge2$ the braid group $B_n$ is presented by generators $\sigma_1,\dots,\sigma_{n-1}$ subject to the braid relations $\sigma_i\sigma_{i+1}\sigma_i=\sigma_{i+1}\sigma_i\sigma_{i+1}$ and the distant-commutativity relations $\sigma_i\sigma_j=\sigma_j\sigma_i$ for $|i-j|>1$ ([[def-braid-group-by-the-artin-presentation]]).

[L4] A map from the generators of a presented group to a group extends uniquely to a homomorphism if and only if the evaluation of every relator is the identity, and the extension is onto precisely when the images generate the target ([[thm-von-dyck]]).

## Proof

**Proof technique:** direct.

1.1 **The assignment lands in the automorphism group.** By [L1] each $R_i$ is an automorphism of $X^{\otimes n}$, so the assignment $\sigma_i\mapsto R_i$ is a map from the generating set $\{\sigma_1,\dots,\sigma_{n-1}\}$ of $B_n$ into the group $\operatorname{Aut}_{\mathcal C}(X^{\otimes n})$. [L1, given]

1.2 **The relators evaluate to the identity.** By [L2] the values $R_i$ satisfy $\sigma_i\sigma_{i+1}\sigma_i=\sigma_{i+1}\sigma_i\sigma_{i+1}$ and $\sigma_i\sigma_j=\sigma_j\sigma_i$ for $|i-j|>1$ with the bracket-corrected readings in the non-strict model. Since identities of morphisms in a strict model are preserved by the bracket correction of [L1] (the correction is by a common canonical isomorphism for the fixed tensor power), both families of defining relators of $B_n$ evaluate to the identity in $\operatorname{Aut}_{\mathcal C}(X^{\otimes n})$. [L1, L2, L3, algebra]

2.1 **Extension and uniqueness.** By [L4] applied to the presentation [L3] and the map of step 1.1, whose relators evaluate to the identity by step 1.2, there is a unique homomorphism $\rho_n\colon B_n\to\operatorname{Aut}_{\mathcal C}(X^{\otimes n})$ with $\rho_n(\sigma_i)=R_i$. Uniqueness is the uniqueness clause of [L4]: the generators generate $B_n$, so a homomorphism is determined by its values on them. [L3, L4, step 1.1, step 1.2, construct]

3.1 **Compatibility with the standard inclusions.** Fix $n\ge2$ and consider the two maps $B_n\to\operatorname{Aut}_{\mathcal C}(X^{\otimes n+1})$ given by $\beta\mapsto\rho_{n+1}(\iota_n(\beta))$ and by $\beta\mapsto\rho_n(\beta)\otimes1_X$. In the strict model the local operator at position $i$ for $n+1$ strands is $1_X^{\otimes(i-1)}\otimes R\otimes1_X^{\otimes(n-i)}=\bigl(1_X^{\otimes(i-1)}\otimes R\otimes1_X^{\otimes(n-i-1)}\bigr)\otimes1_X$, the local operator at position $i$ for $n$ strands tensored with $1_X$; in the non-strict model the same identity holds for the bracket-corrected operators by coherence, as in [L1]. Both displayed maps are homomorphisms and they agree on every generator $\sigma_i$ by this identity, so by the uniqueness clause of [L4] applied to the presentation [L3] they agree on all of $B_n$. [L1, L3, L4, step 2.1, algebra]

4.1 **Conclusion.** Steps 2.1 and 3.1 give, for every $n\ge2$, the unique homomorphism $\rho_n$ with $\rho_n(\sigma_i)=R_i$, compatible with the inclusions $\iota_n$. The construction uses only the Yang–Baxter relations and von Dyck's theorem; no choice principle is used. [step 2.1, step 3.1] ∎ 