---
id: cex-degree-zero-projection-is-exact-cocontinuous-but-not-graded-tensor
kind: counterexample
title: The degree-zero projection is exact and cocontinuous but not a graded tensor functor
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [thm-graded-eilenberg-watts-with-coherent-shifts, def-coherently-shift-compatible-functor-and-natural-transformation, def-graded-ring-module-bimodule-and-internal-shift, lem-internal-shift-endofunctors-and-tensor-compatibility, lem-graded-degreewise-direct-sums-and-homogeneous-free-covers, lem-graded-module-kernels-cokernels-and-biproducts-are-degreewise, lem-graded-tensor-functor-is-k-linear-right-exact-coproduct-preserving-and-shift-coherent, lem-graded-additive-functor-preserves-colimits-iff-right-exact-and-coproduct-preserving, def-left-exact-and-right-exact-functor, def-exact-functor-between-abelian-categories, def-preservation-reflection-creation-continuity-and-cocontinuity, thm-unit-isomorphisms-for-module-tensor-products, def-field, def-additive-functor, def-k-linear-category-and-k-linear-functor, thm-an-additive-functor-is-exact-exactly-when-it-preserves-kernels-and-cokernels]
justified_by: []
aliases: []
dependency_level: 7
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references: []
---

## Statement refuted

Let $k$ be a field. An additive $k$-linear functor
$F:\operatorname{GrMod}_0(k)\to\operatorname{GrMod}_0(k)$ that is exact and preserves all
coproducts and satisfies $F(k)=k$ need not be a graded tensor functor: it need not be isomorphic to
$k\otimes_k-$, and it need not admit coherent shift-comparison data at all. So right exactness,
coproduct preservation and even the value on the regular module do not by themselves put a graded
functor into the class classified by
[[thm-graded-eilenberg-watts-with-coherent-shifts]]; the shift-coherence hypothesis of
[[def-coherently-shift-compatible-functor-and-natural-transformation]] is load-bearing.

Let $k$ be a field and let $A=B=k$ be the graded $k$-algebra concentrated in degree $0$
($k_0=k$ and $k_d=0$ for $d\ne0$). Define
$$F:\operatorname{GrMod}_0(k)\longrightarrow\operatorname{GrMod}_0(k),\qquad F(X):=X_0,$$
where $X_0$ is placed in degree $0$ (so $F(X)_0=X_0$ and $F(X)_d=0$ for $d\ne0$), with the evident
$k$-action. Then:

1. $F$ is $k$-linear, exact (left and right exact) and preserves every coproduct, so it satisfies
every hypothesis of the graded Eilenberg-Watts class except shift coherence;
2. $F(k)=k$, so its value at the regular module coincides with that of the tensor functor
$T_k=k\otimes_k-$, which is the identity functor up to the unit isomorphism;
3. nevertheless $F$ is not isomorphic as a functor — hence not coherently isomorphic — to $T_k$: on
the internal shift $k\{1\}$ one has $F(k\{1\})=(k\{1\})_0=k_{-1}=0$, whereas
$T_k(k\{1\})=k\otimes_kk\{1\}\cong k\{1\}\ne0$;
4. consequently $F$ admits no coherent shift-comparison data at all: coherence would require a
degree-zero isomorphism $F(k\{1\})\to F(k)\{1\}=k\{1\}$, impossible because
$F(k\{1\})=0$.

Hence the shift-coherence hypothesis in
[[def-coherently-shift-compatible-functor-and-natural-transformation]] and
[[thm-graded-eilenberg-watts-with-coherent-shifts]] is load-bearing: right exactness, coproduct
preservation and even the value $F(k)=k$ do not classify graded functors by graded bimodules. The
witness is defined without choice. Hazrat's Example 2.3.9 distinguishes equivalences of graded module categories from
shift-commuting equivalences; his Remark 2.3.4 instead concerns natural transformations.
The present witness directly proves failure of shift compatibility without asserting that a
graded tensor functor can fail it.

## Facts & Assumptions

**Given:** A field $k$, the graded $k$-algebra $k$ concentrated in degree $0$, graded left $k$-modules $X,Y$ and a degree-zero $k$-linear map $u:X\to Y$, a family $(X_i)_{i\in I}$ of graded left $k$-modules, and the functor $F(X)=X_0$, with $X_0$ placed in degree $0$.

[L1] Graded modules over the graded $k$-algebra $k$ have homogeneous pieces $X_d$ with $X=\bigoplus_dX_d$, degree-zero maps are the $k$-linear maps with $u(X_d)\subseteq Y_d$, and the internal shift has pieces $(X\{r\})_d=X_{d-r}$ ([[def-graded-ring-module-bimodule-and-internal-shift]]).

[L2] The internal shift is an autoequivalence with $\{0\}=\mathrm{id}$ acting as the identity on underlying sets, and it preserves degreewise coproducts, kernels and cokernels ([[lem-internal-shift-endofunctors-and-tensor-compatibility]]).

[L3] Kernels, images, cokernels and finite biproducts in $\operatorname{GrMod}_0(k)$ are computed in each homogeneous degree, and exactness is equivalent to exactness degreewise ([[lem-graded-module-kernels-cokernels-and-biproducts-are-degreewise]]).

[L4] The degreewise direct sum is the coproduct in $\operatorname{GrMod}_0(k)$, with $(\bigoplus_iX_i)_d=\bigoplus_i(X_i)_d$ ([[lem-graded-degreewise-direct-sums-and-homogeneous-free-covers]]).

[L5] The graded tensor functor $T_k=k\otimes_k-$ is $k$-linear, right exact, coproduct preserving and coherently shift-compatible ([[lem-graded-tensor-functor-is-k-linear-right-exact-coproduct-preserving-and-shift-coherent]]).

[L6] An additive functor preserves all small colimits if and only if it is right exact and coproduct preserving ([[lem-graded-additive-functor-preserves-colimits-iff-right-exact-and-coproduct-preserving]]).

[L7] A functor is right exact when it preserves every finite colimit existing in its source, and cocontinuous when it preserves all small colimits ([[def-left-exact-and-right-exact-functor]], [[def-preservation-reflection-creation-continuity-and-cocontinuity]]).

[L8] The tensor-unit map $k\otimes_kX\to X$, $c\otimes x\mapsto cx$, is a natural isomorphism ([[thm-unit-isomorphisms-for-module-tensor-products]]).

[L9] A field has $0\ne1$ and a commutative multiplication ([[def-field]]).

[L10] A functor is additive when it induces group homomorphisms on hom-groups, equivalently $F(f+g)=Ff+Fg$, and $k$-linear when those maps are $k$-linear ([[def-additive-functor]], [[def-k-linear-category-and-k-linear-functor]]).

[L11] A functor between abelian categories is exact when it is additive, left exact and right exact ([[def-exact-functor-between-abelian-categories]]), and an additive functor between abelian categories is exact if and only if it preserves kernels and cokernels ([[thm-an-additive-functor-is-exact-exactly-when-it-preserves-kernels-and-cokernels]]).

[L12] The graded Eilenberg-Watts class consists of the $k$-linear right exact coproduct-preserving coherently shift-compatible functors, and coherently shift-compatible functors carry isomorphisms $\theta_{X,r}:F(X\{r\})\to F(X)\{r\}$ ([[thm-graded-eilenberg-watts-with-coherent-shifts]], [[def-coherently-shift-compatible-functor-and-natural-transformation]]).

## Proof

**Given:** A field $k$, the graded $k$-algebra $k$ concentrated in degree $0$, the functor $F(X)=X_0$ in degree $0$, a degree-zero $k$-linear $u:X\to Y$, and a family $(X_i)_{i\in I}$.

**Proof technique:** direct.

1.1 $F$ is a functor: for a degree-zero $k$-linear $u:X\to Y$ one has $u(X_0)\subseteq Y_0$, so the restriction $F(u):=u|_{X_0}$ is a degree-zero $k$-linear map $F(X)\to F(Y)$; restrictions preserve identities and composites, so $F$ is a functor. [L1]

2.1 $F$ is additive and $k$-linear: on hom-groups the assignment $u\mapsto u|_{X_0}$ satisfies $(u+v)|_{X_0}=u|_{X_0}+v|_{X_0}$ and $(\lambda u)|_{X_0}=\lambda u|_{X_0}$, so the induced maps are $k$-linear [L10]. [step 1.1, L10]

2.2 $F$ preserves every coproduct: the identity map gives $F(\bigoplus_iX_i)=(\bigoplus_iX_i)_0=\bigoplus_i(X_i)_0=\bigoplus_iF(X_i)$ with the same coordinate inclusions, so the canonical comparison is an isomorphism [L4]. [step 1.1, L4]

2.3 On the regular module $F(k)=k_0=k$; on the internal shift $F(k\{1\})=(k\{1\})_0=k_{-1}=0$ because $k$ is concentrated in degree $0$ [L1], while $T_k(k\{1\})=k\otimes_kk\{1\}\cong k\{1\}\ne0$ by the unit isomorphism [L8], since $(k\{1\})_1=k_0=k\ne0$; a natural isomorphism $F\cong T_k$ would therefore induce an isomorphism $0\to k\{1\}$, which is impossible [L9]. [step 1.1, L1, L2, L8, L9]

3.1 $F$ preserves kernels and cokernels: for degree-zero $u:X\to Y$ the degreewise descriptions give $F(\ker u)=(\ker u)_0=\ker(u|_{X_0})=\ker(Fu)$ and $F(\operatorname{coker}u)=(\operatorname{coker}u)_0=Y_0/u(X_0)=\operatorname{coker}(Fu)$ with the induced maps [L3], so $F$ preserves the kernel and cokernel of every morphism; hence $F$ is exact, and in particular left and right exact, by [L11]. [step 2.1, L3, L11]

4.1 No coherent shift-comparison data exist for $F$: by [L12] such data would include a degree-zero isomorphism $\theta_{k,1}:F(k\{1\})\to F(k)\{1\}=k\{1\}$, but $F(k\{1\})=0$ while $(k\{1\})_1=k\ne0$ by steps 2.3 and [L2, L9], so no isomorphism exists. More generally, if $F\cong T_M$ for a graded $(k,k)$-bimodule $M$, evaluation at $k$ and [L8] give $M\cong F(k)=k$, whereas $T_M(k\{1\})\cong M\{1\}\ne0$ by [L5], contradicting $F(k\{1\})=0$. With steps 2.1, 2.2 and 3.1 the functor $F$ is additive, right exact and coproduct preserving, hence cocontinuous by [L6, L7]; therefore $F$ is a $k$-linear exact cocontinuous functor with $F(k)=k$ that is not isomorphic to any graded tensor functor [L5] and does not lie in the coherent class, and the witness uses no choice. [step 2.1, step 2.2, step 2.3, step 3.1, L2, L5, L6, L7, L9, L12] ∎
