---
id: lem-line-bundles-on-a-projective-generic-fiber-extend-to-curve-models
kind: lemma
title: Extending finitely many generic line bundles to a projective curve model
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-projective-morphism-pre-proj
  - def-invertible-sheaf
  - thm-sections-basic-open-affine-scheme
  - thm-over-a-pid-flat-is-equivalent-to-torsion-free
  - lem-projective-flat-models-over-a-regular-curve-have-common-refinements
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is added; only finite covers, finite denominator clearing and one-point local flatness tests are used.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Alexander Carney, The Arithmetic Hodge Index Theorem and Rigidity of Dynamical Systems over Function Fields
      url: https://arxiv.org/pdf/1810.06342v2
      locator: Sections2.1–2.4 model-metric setup; finite graph construction supplied locally, not imported.
---

## Statement

Let $B$ be a Noetherian regular integral scheme of dimension one with function field $K$, let $X/K$ be integral and projective, and let $L_1,\ldots,L_s$ be a finite family of invertible sheaves on $X$, including the case $s=0$. There exist an integral projective flat model $\mathcal X\to B$ of $X$ and invertible sheaves $\mathcal L_i$ on $\mathcal X$ with specified generic restrictions $\mathcal L_i|_X\cong L_i$. If a projective flat model $\mathcal Y\to B$ of $X$ is already specified, $\mathcal X$ can be chosen with a projective morphism to $\mathcal Y$ inducing the identity on $X$. This proves existence of the geometric models and extensions; it asserts no nefness, intersection product or convergence of metrics.

## Facts & Assumptions

**Given:** The base, integral projective generic fiber and finite family of line bundles in the Statement.

[F1] Projectivity supplies a closed immersion into a finite projective space. [[def-projective-morphism-pre-proj]]

[F2] An invertible sheaf has local rank-one frames; tensor products, inverses and pullbacks of these frames give the corresponding invertible sheaves. [[def-invertible-sheaf]]

[F3] On an affine scheme $\operatorname{Spec}A$, the regular functions on $D(f)$ are $A_f$. [[thm-sections-basic-open-affine-scheme]]

[F4] A torsion-free module over a PID is flat. [[thm-over-a-pid-flat-is-equivalent-to-torsion-free]]

[F5] Finitely many projective flat models of an integral generic fiber over this base admit a common projective flat refinement, and supplied model line bundles pull back compatibly. [[lem-projective-flat-models-over-a-regular-curve-have-common-refinements]]

## Proof

1.1 First let $U=\operatorname{Spec}A$ be integral and quasi-compact, let $L$ be invertible on $U$, let $f\in A$ be nonzero, and let $u$ be a section of $L$ on $D(f)$. Choose a finite principal-open cover $D(a_j)$ trivializing $L$, with frames $e_j$. On $D(a_jf)$ write $u=r_j e_j$ with $r_j\in A_{a_jf}$ by [F3]. For some common finite $N$, every $f^Nr_j$ lies in $A_{a_j}$. These regular extensions of $f^Nu$ agree on overlaps, since they agree on the dense open $D(f)$ and a section of a line bundle on an integral scheme vanishing on a dense open is zero in each local frame. They glue to a global section. If $D(f)$ is empty there is nothing to extend. Thus a power of $f$ clears denominators of any such section. [F2, F3, given, construct, algebra]

2.1 This also supplies finite global generators of $L$ on integral affine $U$. Take a finite principal-open frame cover $D(a_j)$ as above. Apply step 1.1 with $f=a_j$ to the frame $e_j$ itself and extend $a_j^{N_j}e_j$ to $U$. On $D(a_j)$ this extended section generates $L$, because $a_j$ is a unit there. Consequently the resulting finite collection generates $L$ everywhere. Every cover and collection used here is finite; no simultaneous choice over all points is required. [F2, step 1.1, construct, algebra]

3.1 Fix a projective embedding $X\hookrightarrow\mathbb P^n_K$ and put $A=O_X(1)$. On each nonempty standard affine chart $U_j=\{x_j\ne0\}$ choose finite generators $u_{ja}$ of $L_i$ by step 2.1. On $U_h$, the intersection with $U_j$ is the principal open for $f=x_j/x_h$. Step 1.1 therefore extends $(x_j/x_h)^N u_{ja}$ over $U_h$ once $N$ is large enough. A single $N_i$ works for every one of the finitely many $j,a,h$. With the frame $x_h^{N_i}$ of $A^{N_i}$ these extensions glue, by dense agreement, to sections of $L_i\otimes A^{N_i}$. On $U_j$ their values are $u_{ja}\otimes x_j^{N_i}$, so they generate this twist. [F1, F2, step 1.1, step 2.1, construct, algebra]

4.1 These finite generators define a morphism $f_i:X\to\mathbb P^{r_i}_K$: in any frame of the line bundle, use the generator functions as homogeneous coordinates. At least one is nonzero at every point, and changing a frame multiplies all coordinates by the same unit, so the affine ratio maps glue. The same coordinate calculation identifies $f_i^*O(1)$ with $L_i\otimes A^{N_i}$. The combined map into $\mathbb P^n_K\times\prod_i\mathbb P^{r_i}_K$ is a closed immersion: its first component is the fixed closed embedding, and the graph of the remaining maps is closed because projective space is separated, as the equations equating its homogeneous ratios show. [F1, F2, step 3.1, construct, algebra]

5.1 Take the closure of this generic graph in $\mathbb P^n_B\times_B\prod_i\mathbb P^{r_i}_B$. Explicitly, on an affine chart over an integral base ring $R$, contract the generic graph ideal from $A_R\otimes_RK$ to $A_R$. Localization commutes with these kernels, so they glue. Every nonempty quotient chart injects its generic graph domain; hence this closure $\mathcal X$ is integral with dense generic fiber $X$, and is projective by the Segre embedding. At a closed base point the regular local domain has maximal ideal generated by one element $t$, by finite Nakayama. Its finitely generated ideal $I=\bigcap t^aR$ satisfies $I=tI$ by cancellation and hence is zero by the determinant trick. Thus the local ring is a DVR. The closure chart rings are torsion-free over it by their generic injection and are flat by [F4]. Flatness at the generic point is automatic over $K$. This proves that $\mathcal X$ is a projective flat model. [F1, F4, step 4.1, construct, algebra]

6.1 Let $p_0$ and $p_i$ be the projections from this model to its projective-space factors and set $\mathcal L_i=p_i^*O(1)\otimes(p_0^*O(1))^{-N_i}$. These are invertible by [F2], and step 4.1 identifies their generic restrictions with $L_i$. If a model $\mathcal Y$ was specified, apply [F5] to $\mathcal X$ and $\mathcal Y$ and pull back these line bundles to the common refinement. If $s=0$, the same construction is just the closure of the initial projective embedding. All dimensions, characteristics and finite family sizes in the Statement have been covered. [F2, F5, step 4.1, step 5.1, construct, algebra] ∎
