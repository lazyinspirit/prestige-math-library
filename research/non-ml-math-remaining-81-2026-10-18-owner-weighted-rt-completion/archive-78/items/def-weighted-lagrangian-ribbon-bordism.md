---
id: def-weighted-lagrangian-ribbon-bordism
kind: definition
title: "Weighted Lagrangian ribbon bordisms"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [def-modular-ribbon-category-and-hopf-link-data, def-oriented-smooth-cobordism, def-intersection-form-on-the-homology-of-a-closed-oriented-surface, def-isotropic-coisotropic-symplectic-and-lagrangian-subspaces, def-axiom-of-choice, lem-3-manifold-boundary-kernel-is-lagrangian, lem-lagrangian-relation-sends-lagrangian-to-lagrangian, lem-maslov-index-four-lagrangian-cocycle]
justified_by: [lem-3-manifold-boundary-kernel-is-lagrangian, lem-lagrangian-relation-sends-lagrangian-to-lagrangian, lem-maslov-index-four-lagrangian-cocycle]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Walker, On Witten’s 3-Manifold Invariants, §§1 and 18"
      url: "https://canyon23.net/math/1991TQFTNotes.pdf"
    - title: "Bakalov and Kirillov, Lectures on Tensor Categories and Modular Functor, §§4.1 and 5.7"
      url: "https://www.math.stonybrook.edu/~kirillov/tensor/tensor.ps.gz"
---

## Definition

An object is a closed oriented surface $\Sigma$ with a fixed finite collection of marked points carrying simple labels of the complex modular ribbon fusion category, together with a Lagrangian subspace $\lambda\subset H_1(\Sigma;\mathbb R)$ for the signed intersection form. An elementary morphism is an oriented compact smooth 3-bordism $M:\Sigma_0\to\Sigma_1$ with product collars and fixed boundary parametrizations, a properly embedded colored ribbon graph whose ends match the marked labels, and an integer weight $n\in\mathbb Z$. Reversing a boundary orientation dualizes its labels.

For any closed oriented surface $\Sigma$, the intersection convention is $\omega_\Sigma([\alpha],[\beta])=$ the signed intersection number in which the tangent to $\alpha$ followed by the tangent to $\beta$ gives the surface orientation. For a bordism $M:\Sigma_0\to\Sigma_1$, write $j_r$ for the inclusion maps into $H_1(M;\mathbb R)$ and set

$$\Lambda_M=\{(x_0,x_1)\in H_1(\Sigma_0;\mathbb R)\oplus H_1(\Sigma_1;\mathbb R):j_0x_0=j_1x_1\}.$$

Give the product the form $-\omega_{\Sigma_0}\oplus\omega_{\Sigma_1}$. The boundary-kernel lemma applied to $\partial M$ gives the relation with $j_0x_0=-j_1x_1$; changing the sign of the second coordinate is symplectic and gives exactly $\Lambda_M$. Hence $\Lambda_M$ is Lagrangian ([[lem-3-manifold-boundary-kernel-is-lagrangian]]).

For composable bordisms $M_1:\Sigma_0\to\Sigma_1$ and $M_2:\Sigma_1\to\Sigma_2$, write $M=M_2\circ M_1$. Let $j_r:H_1(\Sigma_r;\mathbb R)\to H_1(M;\mathbb R)$ be induced by inclusion, and let the object Lagrangians be $\lambda_0,\lambda_1,\lambda_2$. Define subspaces of $H_1(\Sigma_2;\mathbb R)$ by

$$K_1=\{x:j_2x\in j_0(\lambda_0)\},\qquad K_0=\{x:j_2x\in j_1(\lambda_1)\},\qquad K_2=\lambda_2.$$

The subspace $K_1$ is the reduction of $\Lambda_M$ along $\lambda_0$, and $K_0$ is the reduction of $\Lambda_{M_2}$ along $\lambda_1$. The boundary-kernel lemma makes these relations Lagrangian; [[lem-lagrangian-relation-sends-lagrangian-to-lagrangian]] therefore proves that $K_1,K_0$ are Lagrangian. Also $K_2=\lambda_2$ is Lagrangian by the object definition. The Maslov index $\mu(K_1,K_0,K_2)$ is the signature convention fixed in [[lem-maslov-index-four-lagrangian-cocycle]]. Composition uses

$$n(M_2\circ M_1)=n_2+n_1+\mu(K_1,K_0,K_2).$$

For mapping cylinders of $f_1:\Sigma_0\to\Sigma_1$ and $f_2:\Sigma_1\to\Sigma_2$, the boundary inclusions identify $K_1=(f_2f_1)_*\lambda_0$, $K_0=(f_2)_*\lambda_1$, and $K_2=\lambda_2$. Thus this convention specializes to Walker’s formula $n_{\rm comp}=n_2+n_1+\mu((f_2f_1)_*\lambda_0,(f_2)_*\lambda_1,\lambda_2)$.

This definition records the data and composition rule; associativity and the full symmetric monoidal structure are proved by [[lem-maslov-index-four-lagrangian-cocycle]] and [[thm-weighted-rt-tqft-and-factorization]]. No unweighted TQFT is asserted.

## Facts & Assumptions

**Given:** A complex modular ribbon fusion category, closed oriented labeled surfaces with Lagrangians, and compact oriented smooth bordisms with the fixed collars and boundary parametrizations.

[F1] For a compact oriented three-manifold, the kernel of the boundary inclusion map is Lagrangian for the signed boundary intersection form ([[lem-3-manifold-boundary-kernel-is-lagrangian]]).

[F2] If $\Lambda\subseteq\overline V\oplus W$ is a Lagrangian relation and $L\subseteq V$ is Lagrangian, its reduction $R_\Lambda(L)$ is Lagrangian in $W$ ([[lem-lagrangian-relation-sends-lagrangian-to-lagrangian]]).

[F3] The signature convention $\mu$ is the Wall form sign, agrees with the cyclic Maslov form after the proved sign conversion, and satisfies the four-Lagrangian cocycle ([[lem-maslov-index-four-lagrangian-cocycle]]).

## Proof

**Given:** The data in the Statement.

1.1 For $M:\Sigma_0\to\Sigma_1$, the boundary inclusion kernel consists of pairs with $j_0x_0+j_1x_1=0$ in $H_1(M;\mathbb R)$. By [F1] it is Lagrangian for $-\omega_{\Sigma_0}\oplus\omega_{\Sigma_1}$. The linear map $(x_0,x_1)\mapsto(x_0,-x_1)$ preserves that form and sends this kernel to $\Lambda_M=\{j_0x_0=j_1x_1\}$. Thus $\Lambda_M$ is Lagrangian. [F1, given, algebra]

1.2 For a composite $M=M_2\circ M_1$, $K_1$ in the Definition is $R_{\Lambda_M}(\lambda_0)$ and $K_0$ is $R_{\Lambda_{M_2}}(\lambda_1)$. Both boundary relations are Lagrangian by step 1.1, so [F2] makes both reductions Lagrangian. $K_2=\lambda_2$ is Lagrangian by the object definition; hence $\mu(K_1,K_0,K_2)$ is defined by [F3]. [F2, F3, step 1.1, given]

2.1 In a mapping cylinder of $f_1$ followed by $f_2$, the boundary relations are graphs of $(f_1)_*$ and $(f_2)_*$. The defining equality $j_2x=j_0y$ therefore gives $K_1=(f_2f_1)_*\lambda_0$, and $j_2x=j_1y$ gives $K_0=(f_2)_*\lambda_1$; the third term is $\lambda_2$. Consequently the composition weight has exactly Walker's stated sign and order. [F3, step 1.2, given, algebra] ∎
