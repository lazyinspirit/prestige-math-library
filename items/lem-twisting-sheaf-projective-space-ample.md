---
id: lem-twisting-sheaf-projective-space-ample
kind: lemma
title: "The twisting sheaf of projective space is very ample and ample"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-ample-invertible-sheaf
  - def-axiom-of-choice
  - def-closed-immersion-schemes
  - def-finite-morphism-schemes
  - def-invertible-sheaf
  - def-pullback-module-ringed-spaces
  - def-relative-projective-space-standard-charts
  - def-sheaf-tensor-product
  - def-twisting-sheaf-proj
  - def-very-ample-invertible-sheaf-relative
  - lem-ample-pullback-finite-morphism
  - lem-ample-stable-positive-power
  - lem-very-ample-implies-ample
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025)"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume the Axiom of Choice as inherited from the projective-space suppliers.
Let $k$ be a field and let $n\ge0$, and write
$\mathbf P^n_k=\mathbb P^n_{\operatorname{Spec}k}$ for the relative projective
space with its standard charts and twisting sheaf $\mathcal O(1)$
([[def-relative-projective-space-standard-charts]],
[[def-very-ample-invertible-sheaf-relative]]). Then
$\mathcal O_{\mathbf P^n_k}(1)$ is closed H-very ample relative to
$\operatorname{Spec}k$: the identity morphism of $\mathbf P^n_k$ is a closed
immersion over $\operatorname{Spec}k$ and pulls $\mathcal O(1)$ back to a sheaf
isomorphic to $\mathcal O(1)$. Consequently

1. $\mathcal O(1)$ is ample on $\mathbf P^n_k$
   ([[def-ample-invertible-sheaf]]);
2. for every integer $d\ge1$ the tensor power
   $\mathcal O(d)=\mathcal O(1)^{\otimes d}$ is ample on $\mathbf P^n_k$;
3. for every finite morphism $g:Y\to\mathbf P^n_k$ the pullback
   $g^*\mathcal O(1)$ is an ample invertible $\mathcal O_Y$-module.

## Facts & Assumptions

**Given:** a field $k$, an integer $n\ge0$, the relative projective space
$\mathbf P^n_k$ over $\operatorname{Spec}k$ with standard charts
$U_0,\dots,U_n$ and twisting sheaf $\mathcal O(1)$.

[F1] On relative projective space the charts $U_i$ are affine over the base and
form an open cover, $\mathcal O(1)$ is the invertible sheaf glued from free
rank-one modules with transition $e_i\mapsto x^{(j)}_ie_j$ on $U_i\cap U_j$
(so that $e_i$ is a frame on $U_i$), and for $d\ge0$ one sets
$\mathcal O(d)=\mathcal O(1)^{\otimes d}$, with $\mathcal O(0)=\mathcal O$; for
$S=\operatorname{Spec}A$ each chart is $\operatorname{Spec}A[x^{(i)}_\ell]$ and
$\mathbb P^0_S\cong S$. An invertible $\mathcal O_X$-module $L$ is H-very ample
relative to $S$ when there are $m\ge0$ and a quasi-compact $S$-immersion
$i:X\to\mathbb P^m_S$ with $L\cong i^*\mathcal O(1)$; it is closed H-very
ample when $i$ can be chosen a closed immersion
([[def-relative-projective-space-standard-charts]],
[[def-very-ample-invertible-sheaf-relative]], [[def-invertible-sheaf]]).

[F2] A morphism $i:Z\to X$ is a closed immersion when its underlying map is a
homeomorphism onto a closed subset and the morphism
$\mathcal O_X\to i_*\mathcal O_Z$ is surjective
([[def-closed-immersion-schemes]]).

[F3] For a morphism of ringed spaces $f:X\to Y$ and an $\mathcal O_Y$-module
$\mathcal G$ the pullback is $f^*\mathcal G=\mathcal O_X\otimes_{f^{-1}\mathcal O_Y}f^{-1}\mathcal G$,
and for the identity morphism $f=\operatorname{id}_X$ one has
$f^{-1}\mathcal O_X=\mathcal O_X$ and $f^{-1}\mathcal G=\mathcal G$; the tensor
product of an $\mathcal O_X$-module with the structure sheaf is canonically that
module ([[def-pullback-module-ringed-spaces]], [[def-sheaf-tensor-product]]).

[F4] If $f:X\to S$ is quasi-compact and $L$ is H-very ample relative to $S$,
then $L$ is $f$-ample; if $S=\operatorname{Spec}R$ is affine, $L$ is ample in
the absolute sense ([[lem-very-ample-implies-ample]],
[[def-ample-invertible-sheaf]]).

[F5] For a scheme $X$, an invertible $\mathcal O_X$-module $L$ is ample if and
only if $L^{\otimes m}$ is ample, for every integer $m\ge1$
([[lem-ample-stable-positive-power]]).

[F6] For a finite morphism $g:Y\to X$ and an ample invertible
$\mathcal O_X$-module $L$ the pullback $g^*L$ is an ample invertible
$\mathcal O_Y$-module, and if $X=\varnothing$ then $Y=\varnothing$ and $g^*L$ is
the unique invertible sheaf on the empty scheme, which is ample
([[lem-ample-pullback-finite-morphism]], [[def-finite-morphism-schemes]]).

[F7] The Axiom of Choice: every family of nonempty sets has a choice function
([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct; exhibit the identity morphism as the witnessing
closed immersion, then apply the very-ample implication, power stability and
finite pullback lemmas.

1.1 (The identity witnesses closed H-very ampleness.) Take $m=n$ and $i=\operatorname{id}_{\mathbf P^n_k}$ in the definition [F1]: the identity is a morphism over $\operatorname{Spec}k$, and it is an isomorphism of schemes, hence a quasi-compact immersion of $\mathbf P^n_k$ into itself; it is a closed immersion by the criterion [F2], because its underlying map is a homeomorphism of $\mathbf P^n_k$ onto the closed subset $\mathbf P^n_k$ and the morphism $\mathcal O_{\mathbf P^n_k}\to(\operatorname{id})_*\mathcal O_{\mathbf P^n_k}$ is the identity of the structure sheaf, which is surjective. [F1, F2, given]

2.1 (The pullback identification.) For $f=\operatorname{id}_{\mathbf P^n_k}$ fact [F3] gives $f^*\mathcal O(1)=\mathcal O\otimes_{f^{-1}\mathcal O}f^{-1}\mathcal O(1)$, and along the identity $f^{-1}\mathcal O=\mathcal O$ and $f^{-1}\mathcal O(1)=\mathcal O(1)$; the tensor product of the $\mathcal O$-module $\mathcal O(1)$ with the structure sheaf is canonically $\mathcal O(1)$ by [F3], so $f^*\mathcal O(1)\cong\mathcal O(1)$, and with step 1.1 this exhibits $\mathcal O(1)$ as closed H-very ample relative to $\operatorname{Spec}k$ in the sense of [F1]. [F1, F3, step 1.1, algebra]

3.1 (Ampleness.) The structure morphism $\mathbf P^n_k\to\operatorname{Spec}k$ is quasi-compact because the finitely many affine charts $U_0,\dots,U_n$ of [F1] cover $\mathbf P^n_k$ and each is affine, and the base $\operatorname{Spec}k$ is affine, so [F4] applies to the H-very ample sheaf $\mathcal O(1)$ of step 2.1 and gives that $\mathcal O(1)$ is ample on $\mathbf P^n_k$ in the absolute sense of [F1]; this is assertion 1. [F1, F4, step 2.1]

4.1 (Positive powers.) Let $d\ge1$. By [F1] the sheaf $\mathcal O(d)$ is $\mathcal O(1)^{\otimes d}$ and is invertible, and by step 3.1 the sheaf $\mathcal O(1)$ is ample, so applying [F5] with $m=d$ gives that $\mathcal O(d)$ is ample; this is assertion 2, and its endpoint $d=1$ is assertion 1 again. [F1, F5, step 3.1, algebra]

4.2 (Finite pullback.) Let $g:Y\to\mathbf P^n_k$ be a finite morphism. By step 3.1 the sheaf $\mathcal O(1)$ is ample, so [F6] gives that $g^*\mathcal O(1)$ is an ample invertible $\mathcal O_Y$-module, and in the empty case $Y=\varnothing$ the same fact [F6] supplies the unique invertible sheaf of the empty scheme, which is ample; this is assertion 3. [F6, step 3.1]

5.1 (Conclusion.) Assertions 1, 2 and 3 are established, and every use of choice above is inherited from the projective-space, very-ampleness and finite-morphism suppliers cited in [F1], [F4], [F5] and [F6] through the Axiom of Choice [F7]; the endpoints $n=0$ and $d=1$ are included, with $\mathbb P^0_k\cong\operatorname{Spec}k$ and $\mathcal O(1)\cong\mathcal O$ by [F1]. [F1, F7, step 1.1, step 4.1, step 4.2] ∎
