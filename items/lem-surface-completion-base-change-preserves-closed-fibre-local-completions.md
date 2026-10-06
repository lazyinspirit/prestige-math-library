---
id: lem-surface-completion-base-change-preserves-closed-fibre-local-completions
kind: lemma
title: "Completion base change preserves completed local rings on the closed fibre"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
deps: [
          def-axiom-of-choice, thm-completion-of-a-noetherian-local-ring,
                    cor-completion-commutes-with-finite-quotients-and-submodules,
                    thm-affine-fibre-product-tensor-ring]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Resolution of Surfaces, Lemmas 54.11.1 and 54.11.2 (complete proof read)"
      url: "https://stacks.math.columbia.edu/download/resolve.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC. Let $(A,\mathfrak m)$ be a Noetherian local ring, $\widehat A$ its maximal-adic completion, and $X$ a scheme locally of finite type over $A$. Put $Y=X\times_{\operatorname{Spec}A}\operatorname{Spec}\widehat A$. The closed fibres of $X$ and $Y$ are canonically isomorphic. If $y\in Y$ lies on this fibre and $x$ is its corresponding point, then the local homomorphism $\mathcal O_{X,x}\to\mathcal O_{Y,y}$ induces an isomorphism of maximal-adic completions.

## Facts & Assumptions

**Given:** A Noetherian local ring $(A,\mathfrak m)$, its completion $\widehat A$, a scheme $X$ locally of finite type over $A$, the base change $Y=X\times_{\operatorname{Spec}A}\operatorname{Spec}\widehat A$, and corresponding points $x\in X$, $y\in Y$ on the closed fibre.

[F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F2] *thm-completion-of-a-noetherian-local-ring.* Assume the Axiom of Choice. Let $(R,\mathfrak m)$ be a Noetherian local ring, and let $\widehat R$ be its $\mathfrak m$-adic completion. 1. $\widehat R$ is a Noetherian local ring with maximal ideal $\mathfrak m\widehat R$. 2. The residue field is unchanged: $ \widehat R/\mathfrak m\widehat R \cong R/\mathfrak m. $ 3. The completion map $R \to \widehat R$ is faithfully flat. ([[thm-completion-of-a-noetherian-local-ring]])

[F3] *cor-completion-commutes-with-finite-quotients-and-submodules.* Assume the Axiom of Choice. Let $R$ be a Noetherian commutative ring, let $I \subseteq R$ be an ideal, and let $N \subseteq M$ be finitely generated $R$-modules. 1. The natural map $ \widehat M/\widehat N \longrightarrow \widehat{M/N} $ is an isomorphism. 2. ([[cor-completion-commutes-with-finite-quotients-and-submodules]])

[F4] *thm-affine-fibre-product-tensor-ring.* Let $A\to B$ and $A\to C$ be maps of commutative unital rings, allowing the zero ring. In the category of all schemes, $\operatorname{Spec}B\times_{\operatorname{Spec}A}\operatorname{Spec}C\cong\operatorname{Spec}(B\otimes_A C).$ The projections correspond to $b\mapsto b\otimes1$ and $c\mapsto1\otimes c$. ([[thm-affine-fibre-product-tensor-ring]])

## Proof

1.1 The assertion is local on $X$, so write $X=\operatorname{Spec}B$; then $Y=\operatorname{Spec}C$ with $C=B\otimes_A\widehat A$, because the fibre product of affine schemes is the spectrum of the tensor product. [F4, given]

2.1 The completion of quotients identifies $C/\mathfrak m^nC=B\otimes_A(\widehat A/\mathfrak m^n\widehat A)$ with $B/\mathfrak m^nB$ for every $n\ge1$; for $n=1$ this is the canonical identification of the closed fibres of $X$ and $Y$. [F3, step 1.1]

3.1 Let $\mathfrak p\subset B$ and $\mathfrak q\subset C$ correspond under the closed-fibre identification, so that $\mathfrak m B\subseteq\mathfrak p$, $\mathfrak m C\subseteq\mathfrak q$ and the two primes have the same image in the common quotient $B/\mathfrak m B=C/\mathfrak m C$. Since $\mathfrak m^nB\subseteq\mathfrak p^n$ and $\mathfrak m^nC\subseteq\mathfrak q^n$, the isomorphism of step 2.1 passes to the quotients and gives compatible isomorphisms $B/\mathfrak p^n\cong C/\mathfrak q^n$ for every $n$. [F3, F4, step 2.1]

4.1 Localizing the compatible isomorphisms of step 3.1 at the corresponding primes gives compatible isomorphisms $B_{\mathfrak p}/\mathfrak p^nB_{\mathfrak p}\cong C_{\mathfrak q}/\mathfrak q^nC_{\mathfrak q}$; passing to inverse limits produces an isomorphism of the maximal-adic completions $\widehat{B_{\mathfrak p}}\cong\widehat{C_{\mathfrak q}}$, which are the completed local rings of $X$ at $x$ and of $Y$ at $y$, and the map is induced by the local homomorphism $\mathcal O_{X,x}\to\mathcal O_{Y,y}$. [F2, step 3.1]

5.1 The Axiom of Choice is inherited from the completion suppliers; no further choice enters, and the identification is canonical once the points are matched. [F1, step 4.1] ∎

## Remarks

- The proof is the local computation behind the statement that completion of a Noetherian local ring commutes with base change for schemes locally of finite type.
- The corresponding-points hypothesis is exactly the identification of the closed fibres in step 1.2; no separability or finiteness over the residue field is used.
