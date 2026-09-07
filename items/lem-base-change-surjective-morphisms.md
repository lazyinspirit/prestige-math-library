---
id: "lem-base-change-surjective-morphisms"
kind: "lemma"
title: "Surjectivity survives arbitrary base change"
status: published
origin: "pipeline"
deps: ["lem-points-of-scheme-fibre-product-residue-tensors", "thm-tensor-product-basis-from-bases", "thm-proper-ideal-contained-in-maximal-ideal"]
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Vakil 10.4.D"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf"
proof_strategy: direct
---

## Statement

Assuming the Axiom of Choice, a surjective scheme morphism $f:X\to S$ remains surjective after every base change $S'\to S$. In particular, for a field extension $K/k$, a nonempty $k$-scheme $X$ has nonempty $X_K$.

## Facts & Assumptions

**Given:** The objects, hypotheses and conventions in the statement above.

[F1] For scheme morphisms $f:X\to S$ and $g:Y\to S$, points of $P=X\times_S Y$ are in bijection with quadruples $(x,y,s,\mathfrak r)$ where $f(x)=g(y)=s$ and $$\mathfrak r\in\operatorname{Spec}(\kappa(x)\otimes_{\kappa(s)}\kappa(y)).$$ The residue field at the corresponding point of $P$ is canonically $\kappa(\mathfrak r)$. ([[lem-points-of-scheme-fibre-product-residue-tensors]])

[F2] Let $R$ be a commutative ring. If $M$ is free with basis $(e_i)_{i\in I}$ and $N$ is free with basis $(f_j)_{j\in J}$, then $M\otimes_RN$ is free with basis $$\bigl(e_i\otimes f_j\bigr)_{(i,j)\in I\times J}.$$ Equivalently, the canonical map $R^{(I\times J)}\to M\otimes_RN$ sending the standard basis vector at $(i,j)$ to $e_i\otimes f_j$ is an isomorphism. This includes an empty basis in either factor. ([[thm-tensor-product-basis-from-bases]])

[F3] Assume the Axiom of Choice (def-axiom-of-choice). In a nonzero commutative ring, every proper ideal is contained in a maximal ideal. ([[thm-proper-ideal-contained-in-maximal-ideal]])

## Proof

1.1 Let $s^{\prime}\in S^{\prime}$ and let $s$ be its image. Surjectivity gives $x\in X$ with $f(x)=s$. The residue fields $\kappa(x)$ and $\kappa(s^{\prime})$ are nonzero vector spaces over $\kappa(s)$. Under Choice choose bases containing the element 1; F2 makes their tensor product free on the nonempty product of those bases, so it is a nonzero ring. The same basis argument shows that $A\to A\otimes_kK$, $a\mapsto a\otimes1$, is injective for any $k$-algebra and field extension $K/k$: choosing a basis of $K$ containing 1 identifies this map with inclusion of one summand (or use bases of both vector spaces). [given, F2]

2.1 By F3 the zero ideal of that nonzero ring lies in a maximal ideal, which is prime. F1 then supplies a point of $X\times_S S^{\prime}$ projecting to $s^{\prime}$. This proves surjectivity. If $S^{\prime}$ is empty the assertion is vacuous; if $S$ is empty both sources are empty. [F1, F3, step 1.1]

3.1 A nonempty $X$ maps surjectively to the one-point scheme $\operatorname{Spec}k$. Applying the result to $\operatorname{Spec}K\to\operatorname{Spec}k$ gives a point of $X_K$. Identity extensions also satisfy the argument; no algebraicity or reducedness hypothesis is used. [step 2.1, given] ∎
