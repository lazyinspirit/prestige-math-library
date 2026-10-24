---
id: lem-canonical-fusion-category-algebra-is-separable
kind: lemma
title: The canonical algebra of a characteristic-zero fusion category is separable
status: published
dependency_level: 3
origin: session
deps:
  - lem-canonical-fusion-category-algebra-is-frobenius
  - lem-fusion-category-global-dimension-is-nonzero
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Etingof, Gelaki, Nikshych, and Ostrik, Tensor Categories, Sections 7.20–7.21
      url: https://math.mit.edu/~etingof/egnobookfinal.pdf
---

## Statement

Let $\mathcal C$ be a fusion category over an algebraically closed field of characteristic zero. For the canonical Frobenius algebra $(K,\mu,\eta,\Delta,\lambda)$ constructed in [[lem-canonical-fusion-category-algebra-is-frobenius]], set $t=\lambda\mu\Delta\eta$. Then $t\ne0$ and $s=t^{-1}\Delta$ is a $K$-bimodule section of multiplication. In particular $K$ is separable, and $e=s\eta$ satisfies
$$\mu e=\eta,\qquad(\mu\otimes\mathrm{id})(\mathrm{id}\otimes e)=(\mathrm{id}\otimes\mu)(e\otimes\mathrm{id}).$$

## Facts & Assumptions

[F1] The canonical Frobenius algebra and its displayed bimodule identities are supplied by [[lem-canonical-fusion-category-algebra-is-frobenius]].

[F2] The squared-norm computation in [[lem-fusion-category-global-dimension-is-nonzero]] identifies $\lambda\mu\Delta\eta$ with the nonzero global dimension of $\mathcal C$; no pivotal structure is assumed.

## Proof

**Given:** The Frobenius algebra and field hypotheses in the statement.

1.1 The bimodule equations imply that $u=\mu\Delta$ is a $K$-bimodule endomorphism and $u=\mu(\mathrm{id}\otimes u\eta)$. Because $\operatorname{Hom}_{\mathcal D}(\mathbf1,K)=k\eta$, write $u\eta=t\eta$. Thus $u=t\mathrm{id}_K$; applying $\lambda$ gives $t=\lambda\mu\Delta\eta$ since $\lambda\eta=1$. [F1, given, algebra]

2.1 Fact [F2] gives $t\ne0$. Therefore $s=t^{-1}\Delta$ is a bimodule map and $\mu s=\mathrm{id}_K$. Its value $e=s\eta$ obeys $\mu e=\eta$. Applying the left and right bimodule equations for $s$ to the unit identifies $(\mu\otimes\mathrm{id})(\mathrm{id}\otimes e)$ and $(\mathrm{id}\otimes\mu)(e\otimes\mathrm{id})$ with $s$, proving centrality. [F1, F2, step 1.1, algebra] ∎
