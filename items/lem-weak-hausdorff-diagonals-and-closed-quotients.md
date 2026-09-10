---
id: lem-weak-hausdorff-diagonals-and-closed-quotients
kind: lemma
title: Weak Hausdorff diagonals and closed quotients
deps: ["lem-kification-compact-tests-and-finite-constructions", "lem-compact-test-exponential-law-and-products-of-quotients", "def-compactly-generated-conventions-for-based-homotopy", "thm-a-compact-hausdorff-space-is-regular-and-normal", "thm-compactness-under-continuous-maps", "thm-finite-products-of-compact-spaces", "thm-closed-subspace-of-a-compact-space-is-compact", "thm-compact-subset-of-a-hausdorff-space-is-closed"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: N. P. Strickland, The category of CGWH spaces
      url: https://www.math.ksu.edu/~dav/diffeos/StricklandCGHWSpaces.pdf
      locator: Lemma1.4, Proposition2.14, Corollaries2.15–2.16 and2.21, Proposition2.24, pp.1–2,6–7
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

A CG space $X$ is WH if and only if its diagonal is closed in $X\times_k X$. For an ordinary quotient $q:X\to Q$ with $X$ CG, $Q$ is CGWH if and only if $\{(x,x'):q(x)=q(x')\}$ is closed in $X\times_k X$. Compact Hausdorff test images in WH spaces are closed compact Hausdorff subspaces. WH passes to subspaces and kification. Finite k-products, finite coproducts and closed subspaces of CGWH spaces are CGWH. If $X$ is CG and $Y$ is CGWH, then $C(X,Y)$ and its kified based mapping and loop subspaces are CGWH.

## Facts & Assumptions

[F1] WH is the compact-test closed-image condition. [[def-compactly-generated-conventions-for-based-homotopy]]

[F2] Kification preserves tests; closed subspaces, finite products and coproducts, and quotients have the stated CG properties. [[lem-kification-compact-tests-and-finite-constructions]]

[F3] Products of CG quotient maps are quotient. [[lem-compact-test-exponential-law-and-products-of-quotients]]

[F4] Compact Hausdorff tests are regular and normal. [[thm-a-compact-hausdorff-space-is-regular-and-normal]]

[F5] Closed test subsets remain compact. [[thm-closed-subspace-of-a-compact-space-is-compact]]

[F6] Compactness is preserved by continuous images. [[thm-compactness-under-continuous-maps]]

[F7] Finite products of compact spaces are compact. [[thm-finite-products-of-compact-spaces]]

[F8] Compact subsets of Hausdorff spaces are closed. [[thm-compact-subset-of-a-hausdorff-space-is-closed]]


## Proof

**Given:** The spaces, maps, and hypotheses in the statement above.

1.1 If $X$ is WH, its points are closed by singleton tests. For $u:K\to X$ compact Hausdorff, $L=u(K)$ is closed and compact. The surjection $u:K\to L$ is closed: any closed subset of $K$ is compact Hausdorff and its image is closed by WH. For distinct $a,b\in L$, the disjoint closed fibres can be separated by disjoint open $U,V\subseteq K$. The sets $L\setminus u(K\setminus U)$ and $L\setminus u(K\setminus V)$ are disjoint open neighbourhoods of $a,b$. Therefore $L$ is Hausdorff. [F1, F4, F5, F6]

1.2 Conversely suppose the diagonal is closed. For tests $u:K\to X$ and $v:L\to X$, the set $E=\{(a,b):u(a)=v(b)\}$ is closed in the compact Hausdorff $K\times L$, hence compact. Its projection to $L$ is compact and closed and is exactly $v^{-1}(u(K))$. Thus $u(K)$ is k-closed in $X$ and therefore closed. This proves WH. [F1, F2, F5, F6, F7, F8]

2.1 A test into a subspace composed with its inclusion has image closed in the ambient WH space, hence closed in the subspace. Kification preserves tests and has finer topology, so it preserves WH. Step 1.1 also shows that each test-image mapping subbasic open is a compact-Hausdorff-subspace subbasic open; the converse uses the inclusion as test. [F1, F2, step 1.1]

2.2 If CG $X$ is WH, test its diagonal by $(v,w):K\to X\times_k X$. At $a$ with $v(a)\ne w(a)$, regularity provides a closed neighbourhood $L$ of $a$ inside $v^{-1}(X\setminus\{w(a)\})$. Then $v(L)$ is closed by WH, and $\operatorname{int}L\cap w^{-1}(X\setminus v(L))$ is a neighbourhood of $a$ on which $v\ne w$. Each test equality set is closed; compact generation makes the diagonal closed. [F1, F2, F4, F5, step 1.1]

3.1 The diagonal of a finite k-product is the intersection of the inverse images of the factor diagonals. Hence it is closed and the product is WH. A compact test into a finite coproduct has compact Hausdorff clopen inverse-image pieces; their images are closed in their summands, so their finite union is closed in the coproduct. Closed subspaces are CG by F2 and WH by step 2.1. These prove the asserted finite closure properties, including the empty product and coproduct. [F2, F5, step 2.1, step 2.2, step 1.2]

3.2 For $q:X\to Q$, the quotient $Q$ is CG and $q\times q$ is quotient. Therefore its diagonal is closed exactly when its inverse image, the stated fibre equivalence relation, is closed. Steps 2.2–1.2 identify this condition with WH of $Q$. [F2, F3, step 2.2, step 1.2]

4.1 Each point evaluation $e_x:C(X,Y)\to Y$ is continuous since inverse images of opens are singleton-test subbasic opens. The diagonal of $C(X,Y)$ is $\bigcap_{x\in X}(e_x\times e_x)^{-1}\Delta_Y$, hence closed. This mapping space is CG by definition, so is WH. Requiring a basepoint or either interval endpoint to map to the closed point $y_0$ cuts out a closed subspace. Such subspaces are CGWH by step 3.1. The empty intersection when $X$ is empty gives the one-point mapping space. [F1, F2, step 1.1, step 2.2, step 1.2, step 3.1] ∎
