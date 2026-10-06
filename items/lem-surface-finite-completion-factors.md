---
id: lem-surface-finite-completion-factors
kind: lemma
title: "Surface finite completion factors"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
deps: [
          def-axiom-of-choice, def-dependent-choice, thm-completion-is-exact-on-finite-modules,
                    thm-completion-of-a-noetherian-local-ring]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project: full proof imports for normal-surface resolution, lemma-completion-finite-extension"
      url: "https://stacks.math.columbia.edu/download/algebra.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC. For a finite map $R\to S$ of Noetherian rings and $\mathfrak p\in\operatorname{Spec}R$, $\widehat{R_{\mathfrak p}}\otimes_RS\cong\prod_{\mathfrak q\cap R=\mathfrak p}\widehat{S_{\mathfrak q}}$. The finitely many factors use their maximal-adic completions. Thus formal fibres for finite extensions are factors of residue-field base changes of the original formal fibres.

## Facts & Assumptions

**Given:** A finite map $R\to S$ of Noetherian rings and a prime $\mathfrak p\in\operatorname{Spec}R$.

[F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])

[F3] *thm-completion-is-exact-on-finite-modules.* Assume the Axiom of Choice. Let $R$ be a Noetherian commutative ring, let $I \subseteq R$ be an ideal, and let $ 0 \to M' \to M \to M'' \to 0 $ be a short exact sequence of finitely generated $R$-modules. Then the induced sequence of $I$-adic completions $ 0 \to \widehat{M'} \to \widehat M \to \widehat{M''} \to 0 $ is exact. ([[thm-completion-is-exact-on-finite-modules]])

[F4] *thm-completion-of-a-noetherian-local-ring.* Assume the Axiom of Choice. Let $(R,\mathfrak m)$ be a Noetherian local ring, and let $\widehat R$ be its $\mathfrak m$-adic completion. 1. $\widehat R$ is a Noetherian local ring with maximal ideal $\mathfrak m\widehat R$. 2. The residue field is unchanged: $ \widehat R/\mathfrak m\widehat R \cong R/\mathfrak m. $ 3. The completion map $R \to \widehat R$ is faithfully flat. ([[thm-completion-of-a-noetherian-local-ring]])

## Proof

1.1 For each $n\ge1$ the ring $S_{\mathfrak p}/\mathfrak p^nS_{\mathfrak p}$ is a finite module over the Artinian local ring $R_{\mathfrak p}/\mathfrak p^nR_{\mathfrak p}$, hence Artinian; its finitely many maximal ideals correspond to the primes $\mathfrak q$ of $S$ with $\mathfrak q\cap R=\mathfrak p$, and the Chinese remainder decomposition of an Artinian ring gives $S_{\mathfrak p}/\mathfrak p^nS_{\mathfrak p}\cong\prod_{\mathfrak q}S_{\mathfrak q}/\mathfrak p^nS_{\mathfrak q}$. [F3, given]

2.1 In each factor the radical of $\mathfrak pS_{\mathfrak q}$ is $\mathfrak qS_{\mathfrak q}$, so the $\mathfrak p$-adic and $\mathfrak q$-adic topologies coincide and the inverse limit of the factors is $\prod_{\mathfrak q}\widehat{S_{\mathfrak q}}$, the product of the maximal-adic completions; the product is finite, so it commutes with the inverse limit. [F4, step 1.1]

3.1 The left-hand side of the inverse limit is the $\mathfrak p$-adic completion of the finite $R_{\mathfrak p}$-module $S_{\mathfrak p}$, which by exactness of completion on finite modules is $\widehat{R_{\mathfrak p}}\otimes_{R_{\mathfrak p}}S_{\mathfrak p}=\widehat{R_{\mathfrak p}}\otimes_RS$. [F3, step 1.1, step 2.1]

4.1 Combining the two computations of the inverse limit gives the asserted isomorphism $\widehat{R_{\mathfrak p}}\otimes_RS\cong\prod_{\mathfrak q\cap R=\mathfrak p}\widehat{S_{\mathfrak q}}$, with finitely many factors. [F3, step 2.1, step 3.1]

5.1 Tensoring the isomorphism with the residue field identifies the formal fibre of the finite extension at $\mathfrak q$ as a factor of the base change of the formal fibre of $R$ at $\mathfrak p$; the Axiom of Choice and the Axiom of Dependent Choice are inherited from the completion suppliers. [F1, F2, step 4.1] ∎

## Remarks

- The decomposition is the Chinese remainder decomposition of an Artinian quotient, not a general formal-gluing statement.
- Finiteness of $R\to S$ is used to make the quotients finite and the number of primes over $\mathfrak p$ finite.
