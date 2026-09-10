---
id: lem-group-algebra-bimodule-is-induced-from-the-diagonal
kind: lemma
title: Group algebra bimodule is induced from the diagonal
deps: [def-block-bimodule-for-the-double-group]
provenance:
  statement: literature-derived
  proof: ai-altered
status: draft
origin: pipeline
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Webb, A Course in Finite Group Representation Theory, §§5.2, 11.3, 11.6, 12.3–12.5; especially Lemma 12.4.4 and Theorem 12.4.5, pp.240–241
      url: https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf
proof_strategy: direct
---

## Statement

With the double action above, $kG\cong\operatorname{Ind}_{\Delta G}^{G\times G}k$, where $k$ is the trivial diagonal module.

## Facts & Assumptions

**Given:** A finite group $G$ over the field $k$.

[F1] The double action is $(x,y)v=xvy^{-1}$. ([[def-block-bimodule-for-the-double-group]])

## Proof

**Proof technique:** direct.

1.1 The map from left cosets $(x,y)\Delta G\mapsto xy^{-1}$ is well-defined, since $(xh)(yh)^{-1}=xy^{-1}$. It is surjective using $(g,1)$. If $xy^{-1}=x\prime(y\prime)^{-1}$, then $x^{-1}x\prime=y^{-1}y\prime=h$, so $(x\prime,y\prime)=(x,y)(h,h)$ and the cosets agree. Thus it is bijective. [F1]

2.1 The induced module $k[G\times G]\otimes_{k\Delta G}k$ has the cosets as a basis: the tensor relation identifies precisely multiplication on the right by a diagonal element. Extending the bijection linearly gives an isomorphism; $(a,b)$ sends its image to $axy^{-1}b^{-1}$, the image of $(ax,by)\Delta G$, proving equivariance. [F1, step 1.1] ∎

## Sources

Webb, A Course in Finite Group Representation Theory, §§5.2, 11.3, 11.6, 12.3–12.5; especially Lemma 12.4.4 and Theorem 12.4.5, pp.240–241. Local argument and conventions as displayed above.
