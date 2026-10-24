---
id: thm-completion-as-extension-of-scalars
kind: theorem
title: "Completion of a finite module is extension of scalars"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-completion-is-exact-on-finite-modules, thm-universal-property-of-module-tensor-products, thm-right-exactness-of-tensor-products, thm-unit-isomorphisms-for-module-tensor-products]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Corollary 22.20"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, Proposition 24.5"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice.

Let $R$ be a Noetherian commutative ring, let $I \subseteq R$ be an ideal, and let $M$ be a
finitely generated $R$-module. Then the canonical $R$-linear map
$$\theta_M \colon M \otimes_R \widehat R \longrightarrow \widehat M, \qquad m \otimes (r_n)_n \mapsto (mr_n \bmod I^nM)_n,$$
is an isomorphism.

## Facts & Assumptions

**Given:** A Noetherian commutative ring $R$, an ideal $I \subseteq R$, and a finitely generated $R$-module $M$.

[L1] Completion is exact on finitely generated modules over a Noetherian ring ([[thm-completion-is-exact-on-finite-modules]]).

[L2] Tensor products are right exact ([[thm-right-exactness-of-tensor-products]]).

[L3] For every module $N$, the canonical map $N \otimes_R R \to N$ is an isomorphism, and tensor products commute with finite direct sums ([[thm-unit-isomorphisms-for-module-tensor-products]]).

## Proof

**Proof technique:** direct.

1.1 If $M=R$, then $$R \otimes_R \widehat R \cong \widehat R$$ by [L3], and this is exactly $\theta_R$. Therefore $\theta_R$ is an isomorphism. [L3]

1.2 Choose an exact sequence $$F_1 \xrightarrow{u} F_0 \to M \to 0$$ with $F_0$ and $F_1$ finite free. Tensoring with $\widehat R$ and using [L2] gives an exact row $$F_1 \otimes_R \widehat R \xrightarrow{u \otimes 1} F_0 \otimes_R \widehat R \to M \otimes_R \widehat R \to 0.$$ Completing the exact sequence $$F_1 \xrightarrow{u} F_0 \to M \to 0$$ and using [L1] gives another exact row $$\widehat{F_1} \xrightarrow{\widehat u} \widehat{F_0} \to \widehat M \to 0.$$ [L1, L2, choose]

2.1 Since tensor products commute with finite direct sums by [L3], the same is true for finite free modules: $$R^m \otimes_R \widehat R \cong \widehat R^m \cong \widehat{R^m}.$$ Thus $\theta_F$ is an isomorphism for every finite free module $F$. In particular, $\theta_{F_0}$ and $\theta_{F_1}$ are isomorphisms in step 1.2. [step 1.1, L3]

3.1 The maps $\theta_{F_1}$, $\theta_{F_0}$, and $\theta_M$ form a commutative diagram between the two exact rows of step 1.2. Since the first two vertical maps are isomorphisms by step 2.1, the two rows present $$M \otimes_R \widehat R \quad\text{and}\quad \widehat M$$ as cokernels of isomorphic maps. Therefore $\theta_M$ is an isomorphism. [step 1.2, step 2.1]

4.1 So the completion of a finite module is obtained by extension of scalars from $R$ to $\widehat R$. [step 3.1] ∎
