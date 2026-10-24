---
id: cex-unrestricted-graded-natural-transformations-are-not-determined-by-the-regular-module
kind: counterexample
title: Unrestricted graded natural transformations are not determined by the regular module
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [cor-graded-bimodule-maps-classify-shift-compatible-transformations, def-coherently-shift-compatible-functor-and-natural-transformation, def-graded-ring-module-bimodule-and-internal-shift, def-natural-transformation, thm-unit-isomorphisms-for-module-tensor-products, def-field]
justified_by: []
aliases: []
dependency_level: 8
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references: []
---

## Statement refuted

Let $k$ be a field and $A=B=k$ the graded $k$-algebra concentrated in degree $0$. The following
over-generalisation is **false**:

> **Refuted claim.** Every natural transformation between graded tensor functors on
> $\operatorname{GrMod}_0(k)$ is determined by its component on the regular module, so that the
> map $\eta\mapsto\eta_A$ is injective on the full hom-collection of natural transformations
> $T_M\Rightarrow T_{M'}$.

It is not so: on the identity functor there are natural transformations with the same component at
$k$ and different components elsewhere, and only the constant scalar families satisfy the
equivariance square of
[[def-coherently-shift-compatible-functor-and-natural-transformation]]. The equivariance
restriction is therefore not vacuous, and dropping it would make the classification of
[[cor-graded-bimodule-maps-classify-shift-compatible-transformations]] false.

## Facts & Assumptions

**Given:** A field $k$, the graded $k$-algebra $k$ concentrated in degree $0$, a family of scalars $(\lambda_d)_{d\in\mathbb Z}$, graded left $k$-modules $X,Y$ with a degree-zero $k$-linear map $u:X\to Y$ and an element $x\in X_d$, and integers $d,r$.

[L1] The map $\eta\mapsto\eta_A$ is a bijection from coherent transformations between graded tensor functors onto the degree-zero bimodule maps, the coherent endomorphisms of the identity functor correspond bijectively to the scalars $k$, and a coherent transformation is exactly one satisfying the equivariance square for the comparisons of its source and target ([[cor-graded-bimodule-maps-classify-shift-compatible-transformations]]).

[L2] For the identity functor the canonical comparisons are the identities $\theta_{X,r}=1_{X\{r\}}$ and coherence is the condition $\theta_{X,r}\eta_{X\{r\}}=(\eta_X\{r\})\theta_{X,r}$ ([[def-coherently-shift-compatible-functor-and-natural-transformation]]).

[L3] Graded $k$-modules have homogeneous pieces $X_d$ with $X=\bigoplus_dX_d$, degree-zero maps preserve degrees, the internal shift has $(X\{r\})_d=X_{d-r}$ and distinct homogeneous pieces intersect trivially, so for each $e$ the module $k\{e\}$ with its generator in degree $e$ has $(k\{e\})_e\ne0$ ([[def-graded-ring-module-bimodule-and-internal-shift]]).

[L4] A natural transformation $\eta:F\Rightarrow G$ satisfies $Gf\circ\eta_X=\eta_Y\circ Ff$ for every morphism $f:X\to Y$ ([[def-natural-transformation]]).

[L5] The tensor-unit map $k\otimes_kX\to X$, $c\otimes x\mapsto cx$, is a natural isomorphism, so $T_k=k\otimes_k-$ is naturally isomorphic to the identity functor ([[thm-unit-isomorphisms-for-module-tensor-products]]).

[L6] A field has distinguished $0\ne1$ ([[def-field]]).

## Proof

**Proof technique:** direct.

1.1 For every family $(\lambda_d)$ the components $\eta_X(x):=\lambda_dx$ for $x\in X_d$ extend uniquely over finite homogeneous sums to degree-zero $k$-linear maps $\eta_X:X\to X$, and these define a natural transformation $\eta:\mathrm{id}\Rightarrow\mathrm{id}$: for a degree-zero $u:X\to Y$ and $x\in X_d$ one has $u(x)\in Y_d$, so $\eta_Y(u(x))=\lambda_du(x)=u(\lambda_dx)=u(\eta_X(x))$. [L3, L4]

2.1 Such an $\eta$ is coherent for the canonical comparisons of the identity functor if and only if $\lambda_{d+r}=\lambda_d$ for all $d,r$: coherence reads $\eta_{X\{r\}}=\eta_X\{r\}$ as underlying maps by [L2], and on $x\in X_{e-r}=(X\{r\})_e$ this is $\lambda_ex=\lambda_{e-r}x$; taking $X=k\{e-r\}$, whose degree-$(e-r)$ piece is nonzero [L3], gives $\lambda_e=\lambda_{e-r}$ for all $e,r$, while a constant family clearly satisfies the square. [step 1.1, L2, L3]

3.1 Hence the coherent endomorphisms of the identity functor are exactly the constant families, and they correspond bijectively to $k$ via $\eta\mapsto\eta_k$, in agreement with [L1], where the coherent endomorphisms correspond to $\operatorname{Hom}_{k\text{-}k}(k,k)\cong k$: the constant family with scalar $\lambda$ has component $\lambda\,\mathrm{id}_X$ at every $X$, and since $T_k\cong\mathrm{id}$ by the unit isomorphism [L5] the two descriptions agree. [step 2.1, L1, L5, L6]

3.2 The family $\lambda_d=1$ for $d=1$ and $\lambda_d=0$ for $d\ne1$ is nonconstant, so by step 2.1 it is not coherent, but by step 1.1 it is a nonzero natural endomorphism of the identity functor: its component at $k$ is $\lambda_0\,\mathrm{id}_k=0$, the same as that of the zero transformation, while its component at $k\{1\}$ is $\lambda_1\,\mathrm{id}_{k\{1\}}=\mathrm{id}_{k\{1\}}\ne0$ because $(k\{1\})_1\ne0$ [L3]; hence two distinct natural transformations of $\mathrm{id}$ have the same component at the regular module, and after transporting along $T_k\cong\mathrm{id}$ [L5] there are distinct natural transformations $T_k\Rightarrow T_k$ with the same image under $\eta\mapsto\eta_k$. [step 1.1, step 2.1, L3, L5]

4.1 Collecting steps 1.1 to 3.2: the unconstrained natural endomorphisms of the identity form a family strictly larger than the coherent ones, they are not determined by their component on the regular module, and only the constant families satisfy the equivariance square; so the restriction on 2-cells in [[def-coherently-shift-compatible-functor-and-natural-transformation]] is genuinely needed for the classification of [[cor-graded-bimodule-maps-classify-shift-compatible-transformations]], exactly as Hazrat's remark on transformations between shift-commuting functors warns, and no choice is used. [step 1.1, step 3.1, step 3.2, L1, L6] ∎
