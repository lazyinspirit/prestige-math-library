---
id: cor-cross-product-is-hodge-star-of-the-wedge
kind: corollary
title: "In oriented Euclidean three-space, the cross product is $\\star(u\\wedge v)$"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-hodge-star-exists-uniquely-and-has-the-orthonormal-basis-formula, cor-hodge-star-is-an-isometry-and-squares-to-a-sign, thm-interior-product-is-adjoint-to-exterior-multiplication]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Reyer Sjamaar, Manifolds and Differential Forms, §2.5"
      url: "https://pi.math.cornell.edu/~sjamaar/manifolds/manifold.pdf"
---

## Statement

In $\mathbb R^3$ with the standard inner product and the standard orientation (the class of the ordered basis $(e_1,e_2,e_3)$), define the cross product in the oriented orthonormal basis by

$$u\times v:=(u_2v_3-u_3v_2,\ u_3v_1-u_1v_3,\ u_1v_2-u_2v_1).$$

Then $u\times v=\star(u\wedge v)$. Equivalently, with the unit volume form $\omega=e_1\wedge e_2\wedge e_3$, one has $u\times v=\iota_v\iota_u\omega$, and $u\times v$ is orthogonal to both $u$ and $v$.

## Facts & Assumptions

**Given:** Vectors $u,v\in\mathbb R^3$, the oriented orthonormal basis $(e_1,e_2,e_3)$, and the unit volume form $\omega$.

[L1] In an oriented orthonormal basis, $\star e_I=\varepsilon_Ie_{I^c}$, and the star is characterized by $\alpha\wedge\star\beta=\langle\alpha,\beta\rangle\omega$ ([[thm-hodge-star-exists-uniquely-and-has-the-orthonormal-basis-formula]]).

[L2] On $\Lambda^2\mathbb R^3$, one has $\star^2=\operatorname{id}$ because $(-1)^{2\cdot1}=1$ ([[cor-hodge-star-is-an-isometry-and-squares-to-a-sign]]).

[L3] The interior product contracts by $\iota_v(v_1\wedge\cdots\wedge v_k)=\sum_{r=1}^k(-1)^{r-1}\langle v,v_r\rangle\,v_1\wedge\cdots\wedge\widehat{v_r}\wedge\cdots\wedge v_k$ ([[thm-interior-product-is-adjoint-to-exterior-multiplication]]).

## Proof

**Proof technique:** direct.


1.1 Every bilinear alternating map $B:\mathbb R^3\times\mathbb R^3\to\mathbb R^3$ is determined by its values on the three pairs $(e_1,e_2),(e_2,e_3),(e_3,e_1)$: expanding in coordinates, $B(u,v)=\sum_{i<j}(u_iv_j-u_jv_i)B(e_i,e_j)$. [algebra]

1.2 By [L1], $\star(e_1\wedge e_2)=e_3$, $\star(e_2\wedge e_3)=e_1$, and $\star(e_3\wedge e_1)=e_2$; the map $(u,v)\mapsto\star(u\wedge v)$ is bilinear and alternating because the wedge is and $\star$ is linear. [L1, algebra]

1.3 The coordinate cross product is bilinear and alternating, and satisfies $e_1\times e_2=e_3$, $e_2\times e_3=e_1$, $e_3\times e_1=e_2$. [algebra]

2.1 By step 1.1, the two bilinear alternating maps of steps 1.2 and 1.3 agree on the three generating pairs, hence agree everywhere: $\star(u\wedge v)=u\times v$. [step 1.1, step 1.2, step 1.3]

3.1 The interior-product form: by [L3], $\iota_u\omega=\langle u,e_1\rangle e_2\wedge e_3-\langle u,e_2\rangle e_1\wedge e_3+\langle u,e_3\rangle e_1\wedge e_2$, and applying $\iota_v$ to that expansion collects the $e_1,e_2,e_3$ coordinates $u_2v_3-u_3v_2$, $u_3v_1-u_1v_3$, $u_1v_2-u_2v_1$, so $\iota_v\iota_u\omega=u\times v=\star(u\wedge v)$ by step 2.1. [L3, step 2.1, algebra]

3.2 Orthogonality: by the defining relation of [L1] and the square law of [L2], $\langle u,\star(u\wedge v)\rangle\omega=u\wedge\star(\star(u\wedge v))=u\wedge u\wedge v=0$, and $\omega\ne0$, so $\langle u,u\times v\rangle=0$; the same argument with $v$ gives $\langle v,u\times v\rangle=0$. [L1, L2, step 2.1, algebra]

4.1 Steps 2.1, 3.1 and 3.2 establish the three equivalent descriptions and the orthogonality. [step 2.1, step 3.1, step 3.2] ∎
