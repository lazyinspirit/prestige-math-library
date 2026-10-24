---
id: lem-nonaffine-finite-galois-descent-of-morphisms
kind: lemma
title: "Finite Galois descent of morphisms of schemes"
status: published
origin: pipeline
deps: [thm-fundamental-theorem-of-finite-galois-theory, thm-affine-fibre-product-tensor-ring, thm-morphisms-into-affine-scheme-global-sections]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-24.md"
      - "research/frontier-38-owner-30-alpha-batch-24-5a.md"
      - "research/frontier-38-owner-30-step5-hash-24-post-5a.json"
    content_sha256: "1d20dc814b07b066e516d38fbbadc1493d2303e1acaeb3825106b6660b9ffa6f"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Milne, Algebraic Groups (2022), Appendix A, Galois descent A.64-A.66"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
    - title: "Stacks Project, Descent, descent of morphisms of schemes"
      url: https://stacks.math.columbia.edu/tag/023Q
---

## Statement

Let $K/k$ be a finite Galois extension with group $\Gamma$, and let $X$ and $Z$ be $k$-schemes. A $K$-morphism $f:X_K\to Z_K$ descends to a unique $k$-morphism $X\to Z$ if and only if it commutes with the canonical semilinear $\Gamma$-actions.

## Facts & Assumptions

[F1] The fixed field of $\Gamma$ is $k$. ([[thm-fundamental-theorem-of-finite-galois-theory]])

[F2] Affine scalar extensions have coordinate rings $A\otimes_kK$, and morphisms into affine schemes are determined by ring maps on global sections. ([[thm-affine-fibre-product-tensor-ring]], [[thm-morphisms-into-affine-scheme-global-sections]])

## Proof

**Given:** $K/k$, $\Gamma$, $X$, $Z$, and a semilinearly equivariant $f$.

1.1 For every $k$-algebra $A$, $(A\otimes_kK)^\Gamma=A$: express a given tensor using finitely many $k$-linearly independent coefficients in $A$, then equivariance says its coefficients in $K$ are fixed and hence lie in $k$ by [F1]. The projection $p:X_K\to X$ is finite and surjective: on affine charts $A\otimes_kK$ is a finite free faithfully flat $A$-module. In each fibre $\operatorname{Spec}(\kappa(x)\otimes_kK)$ the group $\Gamma$ acts transitively on points. Indeed this tensor product is finite étale over the field $\kappa(x)$ and thus a product of fields; a union of orbits of its factors gives an invariant idempotent. The invariant-ring calculation, with $A=\kappa(x)$, says that only the empty and full unions are possible. [F1, F2, algebra]

2.1 Let $V\subset Z$ be affine. The open subset $W=f^{-1}(V_K)$ of $X_K$ is $\Gamma$-stable. Step 1.1 shows that each fibre of $p$ is either contained in $W$ or disjoint from it. Since a finite morphism is closed (on an affine chart this follows from lying-over for the integral ring extension, including after passage to quotient ideals), $U=X\setminus p(X_K\setminus W)$ is open and $W=p^{-1}(U)$. As $V$ ranges over an affine cover of $Z$, these opens $U$ cover $X$. [step 1.1, construct]

3.1 Cover each such $U$ by affine opens $T=\operatorname{Spec}A$. Write $V=\operatorname{Spec}B$. The restriction $f:T_K\to V_K$ corresponds to a $K$-algebra map $B\otimes_kK\to A\otimes_kK$. Equivariance and step 1.1 show that its restriction to $B$ takes values in $A$. This gives a $k$-morphism $T\to V$ whose base extension is the restriction of $f$. It is unique, since $A\to A\otimes_kK$ is injective. [F2, step 1.1, step 2.1]

4.1 The local morphisms glue. On an overlap their base extensions coincide with $f$; equality can be checked after this faithfully flat scalar extension by covering inverse images of affine target opens and using the injectivity of the corresponding coordinate-ring map, exactly as in step 3.1. They therefore agree on the overlap. The glued $k$-morphism has base extension $f$, is unique by the same argument, and every base extension is semilinearly equivariant by construction. No arbitrary choice is used. [step 2.1, step 3.1, construct] ∎
