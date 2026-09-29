---
id: rem-proper-cohomology-finiteness-needs-coherence
kind: remark
title: "Coherence is essential for proper finiteness"
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - cor-h0-projective-space-o-d-homogeneous-polynomials
  - def-coherent-module-scheme
  - def-direct-sum-of-a-family-of-modules
  - def-finite-type-finite-presentation-module-sheaf
  - def-module-on-ringed-space
  - def-proper-morphism
  - def-quasi-coherent-module-scheme
  - def-relative-projective-space-standard-charts
  - lem-projective-space-diagonal-closed
  - lem-projective-space-finite-type-over-base
  - lem-relative-projective-space-universally-closed
  - thm-associated-module-sheaf-exists
  - thm-localisation-of-modules-commutes-with-quotients-and-sums
  - thm-proper-pushforward-coherent
  - thm-zero-sheaf-cohomology-global-sections
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "The Stacks Project, Cohomology of Schemes, Chapter 30, Sections 30.2-30.22"
      url: "https://stacks.math.columbia.edu/download/coherent.pdf"
    - title: "Ravi Vakil, The Rising Sea (29 August 2022), Sections 19.1, 19.6, 19.9, 28.1-28.2"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
verification:
  audited: 2026-09-30
---

## Remark

Assume the Axiom of Choice ([[def-axiom-of-choice]]), used here through the
universal-closedness of projective space and the associated-sheaf construction.

The finiteness theorem [[thm-proper-pushforward-coherent]] is a coherence
assertion, and coherence cannot be weakened to quasi-coherence: the conclusion
fails already for the projective line over a field. Let $k$ be a field and let
$X=\mathbb P^1_k$ with structure morphism $\pi:X\to\operatorname{Spec}k$. The
morphism $\pi$ is proper: it is separated
([[lem-projective-space-diagonal-closed]]), of finite type
([[lem-projective-space-finite-type-over-base]]) and universally closed
([[lem-relative-projective-space-universally-closed]]), and these three
properties are what properness means ([[def-proper-morphism]]). Let
$$\mathcal F=\bigoplus_{m\ge1}\mathcal O_X$$
be the direct sum of countably many copies of the structure sheaf, formed in
the category of $\mathcal O_X$-modules ([[def-module-on-ringed-space]]): over a
quasi-compact open these are the finite-support families of sections of
$\mathcal O_X$, over a general open the locally finite such families, and the
coprojections into the slots exhibit the sheaf as the direct sum
([[def-direct-sum-of-a-family-of-modules]]).

Then $\mathcal F$ is quasi-coherent
([[def-quasi-coherent-module-scheme]]). Indeed, on the standard chart
$U_0=\operatorname{Spec}k[x_1]$ the restriction $\mathcal F|_{U_0}$ is the
direct sum of countably many copies of the structure sheaf of $U_0$, and
direct sums of modules commute with localisation by
[[thm-localisation-of-modules-commutes-with-quotients-and-sums]], so on the
distinguished-open basis of $U_0$ this restriction is described by
$\bigl(\bigoplus_{m\ge1}k[x_1]\bigr)_f\cong\bigoplus_{m\ge1}k[x_1]_f$, which
is the associated sheaf of $\bigoplus_{m\ge1}k[x_1]$
([[thm-associated-module-sheaf-exists]]); the same holds on the second chart
$U_1$ with $k[x_1^{-1}]$ in place of $k[x_1]$, and the two charts cover $X$.

The sheaf $\mathcal F$ is not coherent ([[def-coherent-module-scheme]]),
indeed not even of finite type
([[def-finite-type-finite-presentation-module-sheaf]]): its sections over the
affine chart $U_0$ are $\mathcal F(U_0)\cong\bigoplus_{m\ge1}k[x_1]$, and the
unit elements of the successive summands form an infinite family that is
linearly independent over $k[x_1]$, so no finite set of sections generates.

Its degree-zero cohomology is
$$H^0(X,\mathcal F)\cong\Gamma(X,\mathcal F)\cong\bigoplus_{m\ge1}k,$$
computed on the two-chart cover ([[thm-zero-sheaf-cohomology-global-sections]]):
the sheaf axiom identifies global sections with the pairs of finite-support
families $(s_0,s_1)$, with $s_0$ over $U_0$, $s_1$ over $U_1$ and equal images
in $\bigoplus_{m\ge1}k[x_1,x_1^{-1}]$ on the overlap; agreement in a direct sum
is componentwise, and a polynomial in $x_1$ that equals a polynomial in
$x_1^{-1}$ is constant, so each summand contributes one copy of $k$, identified
with the constants $\Gamma(\mathbb P^1_k,\mathcal O_X)=H^0(\mathbb P^1_k,\mathcal O_X)\cong k$
([[cor-h0-projective-space-o-d-homogeneous-polynomials]]). This module is not
finitely generated over $k$, so $H^0(X,\mathcal F)$ is infinite-dimensional
even though $\pi$ is proper and $\mathcal F$ is quasi-coherent: the
coherence hypothesis on the coefficient sheaf in
[[thm-proper-pushforward-coherent]] is essential and not a technical
convenience, and the failure is caused by the coefficient sheaf alone, the
morphism being as good as a proper morphism over a field can be.

The companion examples page develops this witness in full detail, including
the locally finite family model of the direct sum, the computation of its
stalks and the verification that it is not of finite type.
