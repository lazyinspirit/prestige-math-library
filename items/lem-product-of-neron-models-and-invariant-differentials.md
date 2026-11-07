---
id: lem-product-of-neron-models-and-invariant-differentials
kind: lemma
title: "Products of Néron models and their invariant cotangent modules"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - cor-base-change-finite-type-and-products
  - def-axiom-of-choice
  - def-dedekind-domain
  - def-locally-finite-type-and-finite-type-morphism
  - def-neron-model-and-mapping-property
  - def-pullback-module-ringed-spaces
  - def-quasi-compact-and-quasi-separated-morphism
  - def-sheaf-relative-differentials
  - lem-separated-stable-under-base-change
  - lem-separated-stable-under-composition
  - lem-sheaf-differentials-affine-compatibility
  - thm-fibre-products-of-schemes-exist
  - thm-affine-fibre-product-tensor-ring
  - thm-sheaf-differentials-universal-property
  - thm-smooth-morphisms-stable-base-change-composition
justified_by: []
proof_strategy: direct
axiom_use: "AC is assumed because the supplied smoothness stability theorem uses it; no DC or Countable Choice is used. The Néron extensions themselves are unique."
provenance:
  statement: locally-derived
  proof: ai-generated
sources:
  references:
    - title: "G. Faltings, ‘Endlichkeitssätze für abelsche Varietäten über Zahlkörpern,’ §2"
      url: "https://archive.ymsc.tsinghua.edu.cn/pacm_download/355/9132-elc.pdf"
      locator: "Printed pp. 355–356, invariant differential modules in the Faltings-height construction; the product-model property is proved here from the Néron mapping property."
verification:
  precheck: pending
---

## Statement

Assume AC. Let $R$ be a Dedekind domain with fraction field $K$, and put $S=\operatorname{Spec}R$. Let $X_K,Y_K$ be smooth separated finite-type $K$-schemes, and let $\mathcal X,\mathcal Y$ be their Néron models over $S$. Then $\mathcal X\times_S\mathcal Y$ is a Néron model of $X_K\times_KY_K$. Suppose also that $\mathcal X,\mathcal Y$ have sections $e_X,e_Y:S\to\mathcal X,\mathcal Y$ and are smooth of relative dimensions $g,h$. Put $E_X=e_X^*\Omega^1_{\mathcal X/S}$, $E_Y=e_Y^*\Omega^1_{\mathcal Y/S}$, and $e=(e_X,e_Y)$. Then
$$e^*\Omega^1_{(\mathcal X\times_S\mathcal Y)/S}\cong E_X\oplus E_Y,$$
and the induced determinant line isomorphism is
$$e^*\!\left(\bigwedge^{g+h}\Omega^1_{(\mathcal X\times_S\mathcal Y)/S}\right)\cong\left(e_X^*\bigwedge^g\Omega^1_{\mathcal X/S}\right)\otimes_{\mathcal O_S}\left(e_Y^*\bigwedge^h\Omega^1_{\mathcal Y/S}\right),$$
with the factors ordered $X$ then $Y$.

## Statement references

[[def-neron-model-and-mapping-property]]

[[def-axiom-of-choice]]

[[def-dedekind-domain]]

[[thm-smooth-morphisms-stable-base-change-composition]]

[[lem-separated-stable-under-base-change]]

[[lem-separated-stable-under-composition]]

[[cor-base-change-finite-type-and-products]]

[[def-sheaf-relative-differentials]]

[[thm-sheaf-differentials-universal-property]]

[[lem-sheaf-differentials-affine-compatibility]]

[[def-pullback-module-ringed-spaces]]

[Faltings 1983, §2, printed pp. 355–356](https://archive.ymsc.tsinghua.edu.cn/pacm_download/355/9132-elc.pdf)

## Facts & Assumptions

**Given:** AC; the Dedekind domain $R$, its fraction field $K$, the schemes $X_K,Y_K$, their Néron models over $S=\operatorname{Spec}R$, and sections $e_X,e_Y$ as in the Statement.

[A1] [[def-axiom-of-choice]]: AC holds; it is required by the smoothness-stability supplier [F2].

[F1] [[def-neron-model-and-mapping-property]]: each Néron model is smooth, separated, and of finite type over $S$, and every morphism from a smooth $S$-scheme on the generic fibre extends uniquely.

[F2] [[thm-smooth-morphisms-stable-base-change-composition]]: smoothness is preserved by base change and composition.

[F3] [[lem-separated-stable-under-base-change]] and [[lem-separated-stable-under-composition]]: separatedness is preserved by base change and composition.

[F4] [[cor-base-change-finite-type-and-products]] and [[def-locally-finite-type-and-finite-type-morphism]]: finite type is preserved by base change; it means quasi-compact and locally of finite type.

[F5] [[def-quasi-compact-and-quasi-separated-morphism]]: a morphism is quasi-compact when inverse images of quasi-compact opens are quasi-compact.

[F6] [[thm-fibre-products-of-schemes-exist]]: the products used in the Statement and Proof exist.

[F7] [[def-sheaf-relative-differentials]] and [[thm-sheaf-differentials-universal-property]]: relative differentials represent derivations that vanish on the base.

[F8] [[lem-sheaf-differentials-affine-compatibility]]: on affine charts, the sheaf of relative differentials is the sheaf associated to the Kähler differential module.

[F9] [[def-pullback-module-ringed-spaces]]: pulling a module back along a section is tensor product with the section's structure map.

[F10] [[def-dedekind-domain]]: $R$ is a Noetherian integrally closed domain of dimension one, so $S=\operatorname{Spec}R$ is a Dedekind scheme in the Néron-model convention.

[F11] [[thm-affine-fibre-product-tensor-ring]]: affine fibre products have coordinate ring the tensor product of the coordinate rings over the base.

## Proof

**Proof technique:** verify the Néron mapping property componentwise and compute the cotangent module on affine tensor-product charts.

**Given:** [A1], [F1]–[F11] and the data in the Statement.

1.1 The generic fibre of $\mathcal X\times_S\mathcal Y$ is $X_K\times_KY_K$ by base change. The projection $p:\mathcal X\times_S\mathcal Y\to\mathcal X$ is the base change of $\mathcal Y\to S$, so it is smooth and finite type by [F2] and [F4]. Its composite with $q=\mathcal X\to S$ is smooth by [F2] and separated by [F3]. The composite is locally of finite type: around any point of the product, choose affine neighborhoods $U=\operatorname{Spec}C$, $V=\operatorname{Spec}B$, and $W=\operatorname{Spec}A$ such that $A\to B$ and $B\to C$ are finite-type algebra maps; concatenating their finite generating lists shows $A\to C$ is finite type. It is quasi-compact because for every quasi-compact open $W\subseteq S$, its inverse image is $p^{-1}(q^{-1}(W))$, which is quasi-compact since $p$ is quasi-compact by [F4] and $q$ is quasi-compact by [F1] and [F5]. Thus the composite is finite type, and the product is smooth, separated, and of finite type over $S$. [A1, F1, F2, F3, F4, F5, F6, algebra]

1.2 Let $T$ be a smooth $S$-scheme and let $u_K:T_K\to X_K\times_KY_K$ be a $K$-morphism. Its two projections extend uniquely to $u_X:T\to\mathcal X$ and $u_Y:T\to\mathcal Y$ by [F1]. The product universal property gives a unique $u:T\to\mathcal X\times_S\mathcal Y$ with projections $u_X,u_Y$; its generic fibre is the given $u_K$. Any other extension has the same two projections by uniqueness in [F1], hence equals $u$. Therefore the product is a Néron model. [F1, F6, given, algebra]

2.1 Choose affine opens $\operatorname{Spec}B\subseteq\mathcal X$, $\operatorname{Spec}C\subseteq\mathcal Y$, and $\operatorname{Spec}A\subseteq S$ containing the relevant images. By [F11], their fibre product has ring $B\otimes_A C$. For any $B\otimes_A C$-module $M$, an $A$-derivation $D:B\otimes_A C\to M$ is determined by its restrictions $D_X(b)=D(b\otimes1)$ and $D_Y(c)=D(1\otimes c)$. Conversely, any pair of $A$-derivations $D_X:B\to M$ and $D_Y:C\to M$ defines $D(b\otimes c)=cD_X(b)+bD_Y(c)$; the formula respects the relation $ab\otimes c=b\otimes ac$ for $a\in A$ and satisfies Leibniz. By [F7]–[F8], this natural bijection of derivations gives
$$\Omega_{(B\otimes_A C)/A}\cong(\Omega_{B/A}\otimes_B(B\otimes_A C))\oplus((B\otimes_A C)\otimes_C\Omega_{C/A}).$$
[F7, F8, F11, given, algebra]

2.2 These affine isomorphisms agree on overlaps because they are characterized by the two projections and their universal derivations. They therefore give the relative cotangent sheaf splitting on $\mathcal X\times_S\mathcal Y$. Pulling back along $e=(e_X,e_Y)$ using [F9] gives $e^*\Omega^1_{(\mathcal X\times_S\mathcal Y)/S}\cong E_X\oplus E_Y$. [F6, F8, F9, step 2.1, algebra]

3.1 For locally free modules of ranks $g,h$, the exterior-power decomposition of $E_X\oplus E_Y$ identifies its top exterior power with $\bigwedge^g E_X\otimes\bigwedge^h E_Y$: in a local basis, the ordered wedge of the $X$-basis followed by the $Y$-basis gives the isomorphism, and change of either basis multiplies both sides by the same determinant. Pulling this identity back to $S$ gives the determinant-line formula in the Statement. [step 2.2, given, algebra] ∎
