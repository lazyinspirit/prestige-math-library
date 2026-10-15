---
id: lem-hh-formal-deformation-matrix-unit-lifting
kind: lemma
title: "Matrix units lift through a finite free split formal deformation"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 2
deps: [def-algebra-over-a-commutative-ring, def-field, def-free-module-on-a-set-and-standard-basis, lem-hh-finite-direct-summands-over-khh-are-free, lem-hh-idempotents-lift-over-formal-power-series-rings, lem-hh-one-parameter-formal-series-local-ring, thm-formal-power-series-unit-criterion]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Pavel Etingof, Structure of Finite Dimensional Algebras, MIT OpenCourseWare 18.712, Chapter 7"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/70961c084499052681efb7485af37858_MIT18_712F10_ch7.pdf"
      locator: "§7.2, Proposition 7.3, Corollary 7.5 and §7.3, Theorem 7.6, PDF pp. 1–2: orthogonal idempotent lifting and matrix-block organization; the local proof constructs the full matrix units over a one-parameter formal-series ring."
axiom_use: "No arbitrary Choice. Only finitely many matrix units, corner bases and coordinates are selected."
---

## Statement

Let $k$ be a field, $R:=k\llbracket h\rrbracket$, and $A$ a unital $R$-algebra free of finite rank as an $R$-module. Suppose that

$$A/hA\cong\prod_{\lambda\in\Lambda}\operatorname{Mat}_{d_\lambda}(k)$$

for a finite set $\Lambda$ and positive integers $d_\lambda$. Then there is an $R$-algebra isomorphism

$$A\cong\prod_{\lambda\in\Lambda}\operatorname{Mat}_{d_\lambda}(R)$$

whose reduction modulo $h$ is the given block decomposition. In particular, the diagonal matrix idempotents and all matrix units can be lifted exactly; centrality of the lifted block sums follows from the resulting matrix-unit basis and is not assumed during idempotent lifting.

## Facts & Assumptions

**Given:** A field $k$, $R=k\llbracket h\rrbracket$, a finite free unital $R$-algebra $A$, and a specified isomorphism $A/hA\cong\prod_{\lambda\in\Lambda}\operatorname{Mat}_{d_\lambda}(k)$.

[F1] A finite complete orthogonal family of idempotents in $A/hA$ lifts to a complete orthogonal family in $A$ ([[lem-hh-idempotents-lift-over-formal-power-series-rings]]).

[F2] The image of an idempotent endomorphism of $R^n$ is free of rank equal to the dimension of its reduction modulo $h$ ([[lem-hh-finite-direct-summands-over-khh-are-free]]).

[F3] The ring $R$ is complete and separated for the $h$-adic topology, $R/hR\cong k$, and $k$ is a field ([[lem-hh-one-parameter-formal-series-local-ring]]).

[F4] A finite free module has a basis with unique finite coordinates ([[def-free-module-on-a-set-and-standard-basis]]).

[F5] A formal power series is a unit exactly when its constant coefficient is a unit ([[thm-formal-power-series-unit-criterion]]).

## Proof

**Proof technique:** direct.

1.1 If $\Lambda$ is empty, then $A/hA=0$; since a finite free module of rank $n$ reduces to $k^n$ and $k\ne0$ by [F3, F4], this forces $n=0$ and hence $A=0$, so the empty product conclusion holds. Otherwise, for each standard diagonal matrix idempotent $\bar e_{\lambda,a}$ in the given reduction choose the finite complete orthogonal family of all such idempotents. By [F1] it lifts to pairwise orthogonal idempotents $e_{\lambda,a}\in A$ whose sum is $1$. [given, F1, F3, F4, algebra, choose]

2.1 For any two lifted diagonal idempotents $e_i,e_j$, the map $p_{ij}:A\to A$, $x\mapsto e_i x e_j$, is an idempotent $R$-linear projection with image $e_iAe_j$. The decomposition $A=\operatorname{im}(p_{ij})\oplus\ker(p_{ij})$ reduces modulo $h$ to the corresponding image/kernel decomposition of $\bar p_{ij}$; hence $(e_iAe_j)/h(e_iAe_j)\cong\bar e_i(A/hA)\bar e_j$. In the specified product of matrix algebras this corner has dimension $1$ when $i,j$ belong to the same block and dimension $0$ when they belong to different blocks. Applying [F2] after identifying the finite free module $A$ with $R^n$ shows that same-block corners are free of rank $1$ and cross-block corners are zero. [given, step 1.1, F2, algebra]

3.1 Fix one block $\lambda$ and its first diagonal idempotent $e_{\lambda,1}$. For each $a$ choose lifts $x_{\lambda,a}\in e_{\lambda,a}Ae_{\lambda,1}$ and $y_{\lambda,a}\in e_{\lambda,1}Ae_{\lambda,a}$ of the standard matrix units $E_{a1}$ and $E_{1a}$. Each corner is free of rank $1$ by step 2.1; an element whose reduction is nonzero is a basis, because its coefficient relative to any basis has nonzero constant term and is therefore a unit by [F5]. Thus $y_{\lambda,a}x_{\lambda,a}=c_a e_{\lambda,1}$ with $c_a\equiv1\pmod h$; replacing $y_{\lambda,a}$ by $c_a^{-1}y_{\lambda,a}$ gives $y_{\lambda,a}x_{\lambda,a}=e_{\lambda,1}$. Also $x_{\lambda,a}y_{\lambda,a}=d_a e_{\lambda,a}$ with $d_a\equiv1\pmod h$. This product is idempotent because $y_{\lambda,a}x_{\lambda,a}=e_{\lambda,1}$, so $d_a^2=d_a$; since $d_a\equiv1\pmod h$ is a unit by [F5], $d_a=1$. Hence $x_{\lambda,a}y_{\lambda,a}=e_{\lambda,a}$. [step 2.1, F5, given, algebra, choose]

4.1 Define $E_{\lambda,ab}:=x_{\lambda,a}y_{\lambda,b}$. If $b=c$ then $y_{\lambda,b}x_{\lambda,c}=e_{\lambda,1}$, and if $b\ne c$ then this product is zero by orthogonality of $e_{\lambda,b},e_{\lambda,c}$. Therefore $E_{\lambda,ab}E_{\lambda,cd}=\delta_{bc}E_{\lambda,ad}$. Products between distinct blocks vanish by the zero cross-block corners of step 2.1, and $\sum_{\lambda,a}E_{\lambda,aa}=\sum_{\lambda,a}e_{\lambda,a}=1$. Their reductions are exactly all standard matrix units. [step 1.1, step 2.1, step 3.1, algebra]

5.1 The total number of elements $E_{\lambda,ab}$ is $\dim_k(A/hA)=\operatorname{rank}_R(A)$ by [F3, F4]. Relative to an $R$-basis of $A$, their coordinate matrix $C$ reduces to an invertible matrix $C_0$ over $k$, so $C=C_0+hC_1$ for some matrix $C_1$. The factorization $C=C_0(I+hC_0^{-1}C_1)$ is invertible: the partial sums of $\sum_{m\ge0}(-hC_0^{-1}C_1)^m$ converge entrywise by completeness in [F3], and the finite geometric identity plus separatedness in [F3] makes the limit the two-sided inverse of the second factor. Thus the lifted matrix units form an $R$-basis by [F4]. The linear map from the product of matrix algebras sending standard matrix units to $E_{\lambda,ab}$ is multiplicative by step 4.1, is unital, and maps a basis to a basis; it is the claimed algebra isomorphism. [step 4.1, F3, F4, given, algebra] ∎
