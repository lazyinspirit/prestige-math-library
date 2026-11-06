---
id: def-cft-pz-compatibility-subspace
kind: definition
title: "P(z)-compatibility subspace and local grading restriction"
status: published
origin: pipeline
domain: mathematics
library: mathematics
proof_strategy: direct
deps:
  - def-conformal-vertex-algebra
  - def-grading-restricted-generalized-vertex-module
  - def-vertex-algebra-module
  - def-cft-contragredient-module
  - thm-cft-strongly-graded-contragredient-duality
  - def-cft-pz-intertwining-map
  - def-cft-hlz-strongly-graded-generalized-module
dependency_roles:
  "def-cft-hlz-strongly-graded-generalized-module": mathematical-premise
  "def-conformal-vertex-algebra": mathematical-premise
  "def-grading-restricted-generalized-vertex-module": mathematical-premise
  "def-vertex-algebra-module": mathematical-premise
  "def-cft-contragredient-module": mathematical-premise
  "thm-cft-strongly-graded-contragredient-duality": mathematical-premise
  "def-cft-pz-intertwining-map": mathematical-premise
sources:
  references:
    - title: "Huang, Lepowsky, and Zhang, Logarithmic tensor category theory, Part IV, Section 5.2, Proposition 5.33, P(z)-local grading restriction condition and Notation 5.43"
      url: "https://arxiv.org/pdf/1012.4198v2"
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
dependency_level: 3
---

## Definition

Let A be an abelian group, let Ã contain A as a subgroup, and let V be a strongly A-graded Möbius or conformal vertex algebra. Fix z∈C× and strongly Ã-graded generalized V-modules W1,W2, using the decompositions and operators of def-cft-hlz-strongly-graded-generalized-module. Fix a full category C of strongly Ã-graded generalized V-modules, with morphisms preserving both gradings and, in the Möbius case, all three L(j). For any strongly $\widetilde A$-graded module $M$, give its restricted dual the grading $M'{}^{(\beta)}_{[h]}=(M^{(-\beta)}_{[h]})^*$. A functional in $(W_1\otimes W_2)^*$ is homogeneous of degree $\beta$ when it vanishes on every input component except those of total degree $-\beta$. For λ∈(W1⊗W2)* define the transported field by

$$(Y'_{P(z)}(v,x_1)λ)(w_1⊗w_2)=λ(w_1⊗Y^o_{W_2}(v,x_1)w_2)+\operatorname{Res}_{x_0}z^{-1}δ\!\left(\frac{x_1^{-1}-x_0}{z}\right)λ\!\left(Y_{W_1}(e^{x_1L(1)}(-x_1^{-2})^{L(0)}v,x_0)w_1⊗w_2\right).$$
The transported action of $x_0^{-1}δ((x_1^{-1}-z)/x_0)Y_t(v,x_1)$ on λ is the formal series whose evaluation at w1⊗w2 is
$$z^{-1}δ\!\left(\frac{x_1^{-1}-x_0}{z}\right)λ\!\left(Y_{W_1}(e^{x_1L(1)}(-x_1^{-2})^{L(0)}v,x_0)w_1⊗w_2\right)+x_0^{-1}δ\!\left(\frac{z-x_1^{-1}}{-x_0}\right)λ(w_1⊗Y^o_{W_2}(v,x_1)w_2),$$
where $Y_t$ is the diagonal field and formal delta expansions follow the module conventions. Let $\mathrm{COMP}_{P(z)}$ consist of λ for which $Y'_{P(z)}(v,x_1)λ$ has finitely many negative powers and the transported series equals $x_0^{-1}δ((x_1^{-1}-z)/x_0)Y'_{P(z)}(v,x_1)λ$ for every v∈V. For $j=-1,0,1$ define the transported operators by $$ (L'_{P(z)}(j)\lambda)(w_1\otimes w_2)=\lambda(w_1\otimes L(-j)w_2)+\sum_{i=0}^{1-j}\binom{1-j}{i}z^i\lambda(L(-j-i)w_1\otimes w_2). $$ In the conformal case these are also the corresponding coefficients in $Y'_{P(z)}(\omega,x)=\sum_{j\in\mathbb Z}L'_{P(z)}(j)x^{-j-2}$. The P(z)-local grading restriction requires λ to be a finite sum of generalized $L'_{P(z)}(0)$-eigenvectors, each homogeneous for the $\widetilde A$-grading. Let Wλ be the smallest doubly graded subspace containing λ and stable under every mode of $Y'_{P(z)}(v,x)$ and the operators $L'_{P(z)}(-1),L'_{P(z)}(0),L'_{P(z)}(1)$. For every $\beta\in\widetilde A$ and generalized weight $h\in\mathbb C$, require $\dim (W_\lambda)^{(\beta)}_{[h]}<\infty$ and $(W_\lambda)^{(\beta)}_{[h+k]}=0$ for all sufficiently negative integers k. For a P(z)-map I with target W, define $I'(w')(w1⊗w2)=⟨w',I(w1⊗w2)⟩$. Define W1 P(z) W2 as the sum of these images I'(W') over all W∈C and all such I; transposed Jacobi and grading conditions put each image in the stated compatibility and local-grading subspace.

## Facts & Assumptions

**Given:** Work over C with the formal-variable, grading, and branch conventions in the linked definitions.

[F1] [[def-conformal-vertex-algebra]]: A **conformal vertex algebra of CFT type** is a complex vertex algebra $V$ in the sense of def-vertex-algebra-state-field, with a specified vector $\omega\in V$ and scalar $c\in\mathbb C$, such that, writing $$ Y(\omega,z)=\sum_{n\in\mathbb Z}L(n)z^{-n-2}, $$ the operators $L(n)$ and scalar central action $c$ satisfy the Virasoro relations of def-virasoro-algebra, and $L(-1)=T$. In addition, $L(0)$ is diagonalizable, $V_n:=\{v\in V:L(0)v=nv\}$ gives $V=\bigoplus_{n\ge0}V_n$, every $V_n$ is finite dimensional, and $V_0=\mathbb C\mathbf1$. Under this page's convention, this is a vertex operator algebra of CFT type. The grading and the CFT-type condition are part of the definition; they do not follow from the vertex-algebra axioms alone. The conformal weight of $v\in V_n$ is $n$. A conformal vector, a grading, and the nonnegative grading condition are additional data beyond an ordinary vertex algebra.

[F2] [[def-grading-restricted-generalized-vertex-module]]: Let $V$ be a conformal vertex algebra of CFT type and $M$ a left $V$-module. Write $L_M(0)$ for the coefficient determined by $$ Y_M(\omega,z)=\sum_{n\in\mathbb Z}L_M(n)z^{-n-2}. $$ For $h\in\mathbb C$, define the generalized $L_M(0)$-eigenspace $$ M_{[h]}=\{m\in M:(L_M(0)-h)^N m=0\text{ for some integer }N\ge1\}. $$ The module is **grading-restricted generalized** if $M=\bigoplus_{h\in\mathbb C}M_{[h]}$, every $M_{[h]}$ is finite dimensional, and the real parts of its nonzero generalized weights are bounded below. The direct sum means each vector has only finitely many generalized-weight components. This convention explicitly adds finite-dimensionality and a lower bound to the generalized-eigenspace decomposition; those conditions are not consequences of the module Jacobi identity.

[F3] [[def-vertex-algebra-module]]: Let $V$ be a vertex algebra over $\mathbb C$ in the ordinary, non-super convention of def-vertex-algebra-state-field. A **left $V$-module** is a complex vector space $M$ and a linear map $$ Y_M(-,z):V\longrightarrow \{\text{formal fields on }M\},\qquad a\longmapsto Y_M(a,z)=\sum_{n\in\mathbb Z}a^M_{(n)}z^{-n-1}, $$ with the following properties: 1. **Lower truncation.** For every $a\in V$ and $m\in M$, $a^M_{(n)}m=0$ for all sufficiently large integers $n$, so $Y_M(a,z)m\in M((z))$ in the support convention of def-formal-distribution-on-a-vector-space. 2. **Vacuum.** $Y_M(\mathbf1,z)=\operatorname{id}_M$. 3. **Module Jacobi identity.** For every $a,b\in V$, $$ z_0^{-1}\delta\!\left(\frac{z_1-z_2}{z_0}\right)Y_M(a,z_1)Y_M(b,z_2)-z_0^{-1}\delta\!\left(\frac{z_2-z_1}{-z_0}\right)Y_M(b,z_2)Y_M(a,z_1)=z_2^{-1}\delta\!\left(\frac{z_1-z_0}{z_2}\right)Y_M(Y(a,z_0)b,z_2). $$ Here $\delta(x)=\sum_{r\in\mathbb Z}x^r$; the first expansion is in nonnegative powers of $z_2$, the second in nonnegative powers of $z_1$, and the right-hand expansion is in nonnegative powers of $z_0$. They use the formal binomial conventions of def-formal-distribution-on-a-vector-space. The $Y$ inside the right-hand side is the state-field map of $V$; it is not the action map $Y_M$. A **$V$-module homomorphism** $f:M\to N$ is a linear map such that $fY_M(a,z)=Y_N(a,z)f$ for every $a\in V$. This definition does not impose a conformal grading, finite-dimensional weight spaces, semisimplicity of $L_0$, a right-module convention, or a twist by an automorphism. For a conformal vertex algebra, write $Y_M(\omega,z)=\sum_{n\in\mathbb Z}L_M(n)z^{-n-2}$ when a conformal vector $\omega$ is specified. A **$V$-submodule** of $M$ is a linear subspace stable under every mode $a^M_{(n)}$. A module is **simple** (or **irreducible**) if it is nonzero and has no proper nonzero $V$-submodule. A module is **completely reducible** (or **semisimple**) if it is an internal direct sum of simple $V$-submodules; the empty direct sum is the zero module.

[F4] [[def-cft-contragredient-module]]: For a grading-restricted generalized module M over a conformal vertex algebra V, its contragredient candidate is $M'=⊕_{h∈C}M_{[h]}^*$, with action defined by $⟨Y_{M'}(v,x)w',w⟩=⟨w',Y_{M}^{o}(v,x)w⟩$, where $Y_{M}^{o}(v,x)=Y_{M}(e^{xL(1)}(-x^{-2})^{L(0)}v,x^{-1})$. On homogeneous integer-weight vectors, $(-x^{-2})^{L(0)}$ contributes $(-1)^{wt(v)}x^{-2wt(v)}$. Whether this formula satisfies all module axioms and gives M''≅M is a separate theorem; this definition alone does not assert it. V is self-contragredient when V≅V' as V-modules.

[F5] [[def-cft-pz-intertwining-map]]: Let z∈C× and W1,W2,W3 be generalized V-modules. A P(z)-intertwining map of type (W3;W1,W2) is a linear map $I:W1⊗W2→W̄3=\prod _{h∈C}W3_{[h]}$ whose Ã-degrees add, for which $π_{h-m}I(w1⊗w2)=0$ for all sufficiently large integers m for each fixed h,w1,w2, and which satisfies the P(z)-Jacobi identity and, for $j=-1,0,1, L(j)I(w1⊗w2)=I(w1⊗L(j)w2)+\sum _{i=0}^{j+1}\binom{j+1}{i}z^{i} I((L(j-i)w1)⊗w2)$. There is no L(-1)-derivative axiom for I. Formal variables x0,x1 are independent; z is a fixed complex number.

[F6] [[def-cft-hlz-strongly-graded-generalized-module]]: Let V be an ordinary non-super vertex algebra in the sense of def-vertex-algebra-state-field. A **Möbius vertex algebra** is V with operators L(-1),L(0),L(1) representing sl(2), with L(-1) equal to translation, and satisfying $[L(j),Y(v,x)]=\sum _{i=0}^{j+1} \binom{j+1}{i}x^{i}Y(L(j-i)v,x)$ for $j=-1,0,1$. A Möbius module has the corresponding sl(2)-action and field commutator identities. A conformal vertex algebra supplies these operators through its Virasoro field. For a generalized module write $L(0)_{s}$ for the diagonal operator acting by h on $W_{[h]}$; the nilpotent part is $L(0)-L(0)_{s}$. Let A be an abelian group and suppose V has compatible integer-weight and A-gradings $V=⊕_{n∈Z,α∈A}V^{(α)}_{(n)}$, each component finite dimensional and lower truncated in n for each α, $1∈V^{(0)}_{(0)}, v_{m}V^{(β)}⊂V^{(α+β)}$, and $L(j)V^{(α)}⊂V^{(α)}$ for $j=-1,0,1$. In the conformal case require $ω∈V^{(0)}_{(2)}$. For an abelian group Ã⊃A, a generalized module $W=⊕_{h∈C,β∈Ã}W^{(β)}_{[h]}$ is strongly Ã-graded when the gradings are compatible, each $W^{(β)}_{[h]}$ is finite dimensional, $W^{(β)}_{[h+k]}=0$ for all sufficiently negative integers k for each h,β, $v_{m}W^{(β)}⊂W^{(α+β)}$, and $L(j)W^{(β)}⊂W^{(β)}$ for $j=-1,0,1$. Morphisms preserve both gradings and the V-action.

[F7] [[thm-cft-strongly-graded-contragredient-duality]] proves the opposite-field restricted dual and double-dual evaluation for arbitrary strongly graded generalized modules over strongly graded Möbius or conformal vertex algebras. Its lower truncation uses a fixed auxiliary-degree integer weight string, and does not assume a globally bounded grading or CFT type.

## Proof

1.1 The residue action is the transpose of the diagonal vertex action together with the opposite second-input field; module truncation and the finite L(1)-sum make its coefficients defined on homogeneous inputs. [given, F1, F2, F3, F4, F6, algebra]

2.1 Let $I:W_1\otimes W_2\to\overline W$ be a P(z)-map with $W\in\mathcal C$, and define $I':W'\to(W_1\otimes W_2)^*$ by transposition. Transposing its P(z)-Jacobi identity gives the defining transported compatibility identity, while the three $L(j)$ identities give compatibility with the transported $L'_{P(z)}(j)$. The transposed field identity makes $I'$ intertwine the contragredient action on $W'$ with the transported action on its image. The strong grading of W then gives finite-dimensional components and lower truncation for W'. Since every $w'\in W'$ is a finite sum of doubly homogeneous generalized-weight vectors, $I'(w')$ is a finite sum of homogeneous generalized $L'_{P(z)}(0)$-eigenvectors. The subspace generated from $I'(w')$ by the transported modes is the image under $I'$ of the submodule generated by $w'$ in $W'$. Its doubly graded components therefore remain finite dimensional and lower truncated. Thus each image lies in the stated compatibility and local-grading subspace, so their sum does also. [given, F1, F2, F3, F4, F5, F6, F7, step 1.1, algebra] ∎
