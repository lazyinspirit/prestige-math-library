---
id: lem-graded-section-module-finite-projective
kind: lemma
title: "High-degree section module is finite graded"
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - cor-finite-variable-polynomial-ring-noetherian
  - cor-free-modules-are-projective-and-flat
  - def-ample-invertible-sheaf
  - def-axiom-of-choice
  - def-coherent-module-scheme
  - def-commutative-ring
  - def-direct-image-sheaf
  - def-generated-cyclic-finitely-generated-and-free-modules
  - def-globally-generated-sheaf
  - def-invertible-sheaf
  - def-locally-noetherian-and-noetherian-scheme
  - def-noetherian-ring-and-module
  - def-polynomial-ring-on-a-family-of-indeterminates
  - def-quasi-coherent-module-scheme
  - def-quasi-compact-and-quasi-separated-scheme
  - def-relative-projective-space-standard-charts
  - def-sheaf-tensor-product
  - def-twist-quasi-coherent-sheaf-projective
  - def-twisting-sheaf-proj
  - def-very-ample-invertible-sheaf-relative
  - lem-closed-immersion-affine-quotient-and-base-change
  - lem-closed-immersion-cohomology-pushforward
  - lem-eventual-global-generation-coherent-twists
  - lem-projective-coherent-cohomology-finite-and-vanishing
  - lem-stalk-tensor-product
  - lem-very-ample-implies-ample
  - thm-coherent-sheaves-abelian-noetherian-scheme
  - thm-cohomological-dimension-projective-n-space
  - thm-cohomology-projective-space-twisting-sheaves
  - thm-exactness-of-sheaves-stalkwise
  - thm-hilbert-basis-theorem
  - thm-long-exact-sequence-sheaf-cohomology
  - thm-projective-space-as-proj
  - thm-support-finite-type-qc-closed
  - thm-twisting-sheaf-invertible-standard-graded
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Cohomology of Schemes, Section 30.16 (Tag 01YS) and Section 30.15"
      url: "https://stacks.math.columbia.edu/tag/01YS"
    - title: "Ravi Vakil, The Rising Sea (29 August 2022), Sections 18.6 and 19.2"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume the Axiom of Choice as inherited from the cited suppliers
([[def-axiom-of-choice]]). Let $A$ be a Noetherian commutative ring with $1$
([[def-noetherian-ring-and-module]]), let $n\ge0$, write
$S=A[x_0,\dots,x_n]$ for the polynomial ring in the total-degree grading
([[def-polynomial-ring-on-a-family-of-indeterminates]]), let
$X=\mathbb P^n_A$ with twisting sheaves $\mathcal O(m)$
([[def-relative-projective-space-standard-charts]],
[[thm-projective-space-as-proj]]), and let $\mathcal F$ be a coherent
$\mathcal O_X$-module ([[def-coherent-module-scheme]]). For every $m$ put
$$\mathcal F(m)=\mathcal F\otimes_{\mathcal O_X}\mathcal O(m)$$
([[def-twist-quasi-coherent-sheaf-projective]]), so that
$$\Gamma_*(\mathcal F)=\bigoplus_{m\ge0}\Gamma(X,\mathcal F(m))$$
is a graded $S$-module with the multiplication induced by the maps
$\mathcal O(m)\otimes_{\mathcal O_X}\mathcal O(k)\to\mathcal O(m+k)$ of the
twisting sheaves ([[def-twisting-sheaf-proj]],
[[thm-twisting-sheaf-invertible-standard-graded]]).

Then there is an integer $m_0\ge0$ such that the truncated graded module
$$\Gamma_{\ge m_0}(\mathcal F)=\bigoplus_{m\ge m_0}\Gamma(X,\mathcal F(m))$$
is a finitely generated $S$-module
([[def-generated-cyclic-finitely-generated-and-free-modules]]).

Moreover, if $i:Y\hookrightarrow X$ is a closed subscheme and $\mathcal G$ a
coherent $\mathcal O_Y$-module, then the extension by zero $i_*\mathcal G$ is a
coherent $\mathcal O_X$-module and the same conclusion holds for it; that is,
for a suitable $m_0$ the graded module
$$\bigoplus_{m\ge m_0}H^0\bigl(Y,\mathcal G\otimes_{\mathcal O_Y}i^*\mathcal O(m)\bigr)$$
is finitely generated over $S$. The zero module, the zero ring $A=0$, the empty
projective space and the case $n=0$ are included.

## Facts & Assumptions
**Given:** The Axiom of Choice as inherited, a Noetherian commutative ring $A$, an integer $n\ge0$, the graded polynomial ring $S=A[x_0,\dots,x_n]$, the projective space $X=\mathbb P^n_A$, and a coherent module $\mathcal F$ on $X$.

[F1] The twisting sheaves satisfy $\mathcal O(m)=\widetilde{S(m)}$
([[def-twisting-sheaf-proj]]), each $\mathcal O(m)$ is invertible with
$\mathcal O(m)\otimes_{\mathcal O_X}\mathcal O(k)\cong\mathcal O(m+k)$ and
$\mathcal F(m)=\mathcal F\otimes_{\mathcal O_X}\mathcal O(m)$
([[thm-twisting-sheaf-invertible-standard-graded]],
[[def-twist-quasi-coherent-sheaf-projective]]); on a standard chart
$D_+(x_i)$ the twist is trivial, so a twist of a finite type or quasi-coherent
module is again of the same kind. Tensoring a short exact sequence of
$\mathcal O_X$-modules by an invertible sheaf preserves exactness: on stalks the
invertible sheaf is free of rank one over the local ring, tensoring with a free
module is exact, and exactness is stalkwise.
([[def-sheaf-tensor-product]], [[lem-stalk-tensor-product]],
[[cor-free-modules-are-projective-and-flat]],
[[thm-exactness-of-sheaves-stalkwise]], [[def-invertible-sheaf]])

[F2] $\mathcal O(1)$ is ample on $\mathbb P^n_A$ in the absolute sense: the
identity $\mathbb P^n_A\to\mathbb P^n_A$ is a quasi-compact closed immersion
over $\operatorname{Spec}A$ pulling $\mathcal O(1)$ back to $\mathcal O(1)$, so
$\mathcal O(1)$ is closed H-very ample relative to the affine base and hence
ample. ([[def-very-ample-invertible-sheaf-relative]],
[[lem-very-ample-implies-ample]], [[def-ample-invertible-sheaf]])

[F3] Since $\mathbb P^n_A$ is projective over the Noetherian ring $A$ in the
H-projective convention (the identity is a closed immersion over
$\operatorname{Spec}A$) and $\mathcal O(1)$ is ample, there is $m_1$ such that
$\mathcal F(m)$ is globally generated for every $m\ge m_1$.
([[lem-eventual-global-generation-coherent-twists]],
[[def-globally-generated-sheaf]])

[F4] A globally generated quasi-coherent module $\mathcal H$ of finite type on
a quasi-compact scheme is a quotient of $\mathcal O^{\oplus N}$ for some finite
$N$: for every point $x$ there are finitely many global sections generating the
stalk at $x$, the locus where a fixed finite family of global sections generates
is the complement of the support of the cokernel of $\mathcal O^{\oplus N}\to\mathcal H$,
which is closed because that cokernel is quasi-coherent of finite type, and a
finite subcover of the quasi-compact space is extracted from these loci.
([[def-globally-generated-sheaf]], [[thm-support-finite-type-qc-closed]],
[[def-quasi-compact-and-quasi-separated-scheme]])

[F5] On the locally Noetherian scheme $\mathbb P^n_A$ the kernel of a morphism
of coherent modules is coherent, and the same holds for twists of coherent
modules.
([[thm-coherent-sheaves-abelian-noetherian-scheme]],
[[def-locally-noetherian-and-noetherian-scheme]], [[def-coherent-module-scheme]])

[F6] For a coherent module $\mathcal H$ on $\mathbb P^n_A$ with $A$ Noetherian
there is $m_2$ such that $H^q(X,\mathcal H(m))=0$ for every $q>0$ and every
$m\ge m_2$. Indeed [[lem-projective-coherent-cohomology-finite-and-vanishing]] gives a bound for each $q=1,\ldots,n$; take the maximum of these finitely many bounds and $0$. For $q>n$ all twists vanish by [[thm-cohomological-dimension-projective-n-space]], so this maximum works for every $q>0$, also for $n=0$.

[F7] For $k\ge0$ the canonical map $S_k\to H^0(X,\mathcal O(k))$ is an
isomorphism, and these identifications are compatible with the multiplication
maps, so that $\Gamma_*(\mathcal O)$ is the graded ring $S$; consequently for
each fixed $a$ and all large $m$, $\Gamma(X,\mathcal O(m+a))$ is identified
with $S_{m+a}$. ([[thm-cohomology-projective-space-twisting-sheaves]],
[[def-twisting-sheaf-proj]])

[F8] For a fixed integer $c$ and $m_0+c\ge0$, the shifted graded $S$-module
$\bigoplus_{m\ge m_0}S_{m+c}$ is generated in degree $m_0$ by the finitely
many monomials of polynomial degree $m_0+c$, so it is finitely generated; the
ring $S$ is Noetherian, and a quotient of a finitely generated graded module
over $S$ is finitely generated.
([[cor-finite-variable-polynomial-ring-noetherian]],
[[thm-hilbert-basis-theorem]],
[[def-generated-cyclic-finitely-generated-and-free-modules]])

[F9] For a closed immersion $i:Y\to X$ into the locally Noetherian scheme $X$
and a coherent $\mathcal O_Y$-module $\mathcal G$, the pushforward
$i_*\mathcal G$ is coherent ([[lem-closed-immersion-cohomology-pushforward]]),
and on an affine chart $U=\operatorname{Spec}R\subseteq X$ with
$i^{-1}(U)=\operatorname{Spec}(R/K)$ the identity
$i_*\bigl(\mathcal G\otimes_{\mathcal O_Y}i^*\mathcal O(m)\bigr)
\cong(i_*\mathcal G)\otimes_{\mathcal O_X}\mathcal O(m)$ holds, because both
sides are, on the basic opens of the chart, the localisations of the same
$R/K$-module; hence
$\Gamma(X,(i_*\mathcal G)(m))\cong H^0(Y,\mathcal G\otimes_{\mathcal O_Y}i^*\mathcal O(m))$.
([[lem-closed-immersion-affine-quotient-and-base-change]],
[[def-direct-image-sheaf]], [[def-sheaf-tensor-product]])



## Proof

**Proof technique:** direct: global-generation at a high twist gives a finite surjection from a finite sum of line bundles with coherent kernel, Serre vanishing makes the section map onto the section module of the image sheaf, and the tail of the finite sum of shifted polynomial tails is finitely generated, so its quotient is too.

1.1 Ampleness and eventual global generation. By [F2] the twisting sheaf $\mathcal O(1)$ is ample on $\mathbb P^n_A$; the identity exhibits $\mathbb P^n_A$ as closed H-projective over the Noetherian ring $A$, so [F3] produces $m_1$ with $\mathcal F(m)$ globally generated for all $m\ge m_1$. [F2, F3]

2.1 A finite surjection from a finite sum of twists. Since $\mathcal F(m_1)$ is globally generated and of finite type on the quasi-compact scheme $\mathbb P^n_A$, [F4] gives a surjection $\mathcal O^{\oplus N}\to\mathcal F(m_1)$ for some finite $N$. Twisting by $\mathcal O(-m_1)$ and using [F1] and its inverse, this yields a surjection $E\to\mathcal F$ where $E=\mathcal O(-m_1)^{\oplus N}$ is a finite direct sum of twists of $\mathcal O$. [F1, F4, step 1.1]

3.1 The kernel is coherent. Let $\mathcal K=\ker(E\to\mathcal F)$. Since $A$ is Noetherian, $\mathbb P^n_A$ is locally Noetherian, and $\mathcal K$ is coherent by [F5]; by [F1] every twist $\mathcal K(m)$ is coherent as well. [F5, step 2.1]

4.1 Serre vanishing for the kernel. Apply [F6] to the coherent module $\mathcal K$: there is $m_2\ge\max(m_1,0)$ such that $H^q(X,\mathcal K(m))=0$ for every $q>0$ and every $m\ge m_2$; in particular $H^1(X,\mathcal K(m))=0$ for those $m$. [F6, step 3.1]

5.1 The section maps are surjective. For $m\ge m_2$ tensoring $0\to\mathcal K\to E\to\mathcal F\to0$ by the invertible sheaf $\mathcal O(m)$ keeps the sequence exact by [F1]. The long exact cohomology sequence of the underlying abelian sheaves ([[thm-long-exact-sequence-sheaf-cohomology]]) contains $\Gamma(E(m))\to\Gamma(\mathcal F(m))\to H^1(\mathcal K(m))=0$; hence the degree-$m$ component $\Gamma(E(m))\to\Gamma(\mathcal F(m))$ is surjective for every $m\ge m_2$. These maps are compatible with the $S$-module structure because they are induced by the morphism $E\to\mathcal F$ and the multiplication maps of the twisting sheaves. [F1, step 4.1]

6.1 The tail of $E$ is finitely generated. For $m\ge m_2$ the module $E(m)$ is the direct sum of $N$ copies of $\mathcal O(m-m_1)$, and by [F7] its sections are identified with the direct sum of $N$ copies of $S_{m-m_1}$; here $m_2-m_1\ge0$ by step 4.1. The resulting tail $\bigoplus_{m\ge m_2}\Gamma(E(m))$ is therefore a finite direct sum of shifted tails of $S$, each finitely generated by [F8]. [F7, F8, step 4.1, step 5.1]

7.1 The tail of $\mathcal F$ is finitely generated. By [step 5.1] the $S$-module homomorphism of tails $\bigoplus_{m\ge m_2}\Gamma(E(m))\to\bigoplus_{m\ge m_2}\Gamma(\mathcal F(m))$ is surjective, and the source is finitely generated by [step 6.1]; the quotient is finitely generated over the Noetherian ring $S$ by [F8]. This proves the first assertion with $m_0=m_2$. [F8, step 5.1, step 6.1]

8.1 Extension by zero from a closed subscheme. Let $i:Y\hookrightarrow X$ be a closed subscheme with $X$ locally Noetherian and $\mathcal G$ coherent on $Y$. By [F9] the pushforward $i_*\mathcal G$ is coherent on $X$, so [step 7.1] applied to $\mathcal F=i_*\mathcal G$ gives $m_0$ with $\bigoplus_{m\ge m_0}\Gamma(X,(i_*\mathcal G)(m))$ finitely generated, and by the identification of [F9] this graded module is $\bigoplus_{m\ge m_0}H^0(Y,\mathcal G\otimes_{\mathcal O_Y}i^*\mathcal O(m))$; this proves the second assertion. [F9, step 7.1]

9.1 Boundary and choice accounting. If $\mathcal F=0$ then every $\Gamma(X,\mathcal F(m))=0$ and the tail is the zero module, which is finitely generated (by the empty family). If $A=0$ then $S=0$ and $X=\varnothing$, all coherent modules are zero and the tail is zero; the Noetherian hypotheses hold for the zero ring and $S$ is Noetherian by [F8]. If $n=0$ then $X=\operatorname{Spec}A$ is affine, $\mathcal F$ is the associated sheaf of a finitely generated $A$-module and one checks directly that the tail of $\bigoplus_{m\ge0}\Gamma(X,\mathcal F(m))$ is generated by a finite generating set of $\Gamma(X,\mathcal F)$ in degree $m_0$, since the twisting by $\mathcal O(1)$ is an isomorphism on the single chart; this agrees with the general argument, which also applies because $\mathcal O(1)$ is ample by [F2]. The Axiom of Choice is consumed through the global-generation theorem [F3], the coherence theorem [F5] and the finiteness theorem [F6]; no chart, resolution or generating family is chosen here beyond the finitely many sections of [step 2.1]. [F2, F3, F5, F6, F8, step 2.1, step 7.1, cases: zero module and zero ring and n=0] ∎
