---
id: rem-the-winding-number-and-the-planar-vortex-field
kind: remark
title: "The winding number is the circulation of the planar vortex field divided by $2\\pi$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-winding-number-closed-complex-contour, thm-winding-number-circle-traversed-k-times, def-closed-and-exact-c1-vector-fields, thm-exact-c1-vector-fields-are-closed, rem-domain-hypotheses-for-closed-versus-exact, def-scalar-and-vector-line-integrals-along-piecewise-c1-paths, thm-riemann-stieltjes-and-parametric-contour-integrals-agree, cor-conservative-fields-are-path-independent-and-have-zero-circulation, thm-gradient-theorem-for-line-integrals, rem-complex-plane-euclidean-dictionary, def-complex-conjugate-real-imaginary-part-and-modulus]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 4 §2.1"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
pipeline_run: null
---

## Remark

**The hypothesis of this remark is piecewise $C^1$, not merely rectifiable.**
The real line integrals it quotes are those of
[[def-scalar-and-vector-line-integrals-along-piecewise-c1-paths]], which are
defined through a derivative of the path; a general complex contour is only
rectifiable and has no derivative, so the identification below is asserted only
for a **piecewise-$C^1$ closed contour** $\gamma:[a,b]\to\mathbb C\setminus\{0\}$.
Read the plane as $\mathbb R^2$ through
[[rem-complex-plane-euclidean-dictionary]] and write $\gamma=(x,y)$ for the
corresponding planar path.

**The split.** With $\operatorname{Re}$, $\operatorname{Im}$ and the modulus as
in [[def-complex-conjugate-real-imaginary-part-and-modulus]], the identity
$1/z=\overline z/|z|^2$ turns the integrand into

$$\frac{dz}{z}=\frac{(x-iy)(dx+i\,dy)}{x^2+y^2} =\frac{x\,dx+y\,dy}{x^2+y^2}+i\,\frac{x\,dy-y\,dx}{x^2+y^2},$$

and [[thm-riemann-stieltjes-and-parametric-contour-integrals-agree]] identifies
the two real parts of $\int_\gamma dz/z$ with the vector line integrals of

$$P(x,y)=\Bigl(\frac{x}{x^2+y^2},\frac{y}{x^2+y^2}\Bigr),\qquad V(x,y)=\Bigl(\frac{-y}{x^2+y^2},\frac{x}{x^2+y^2}\Bigr)$$

along $\gamma$.

**The first field contributes nothing.** $P$ is the gradient of
$\phi(x,y)=\tfrac12\log(x^2+y^2)$ on the punctured plane, so
[[thm-gradient-theorem-for-line-integrals]] evaluates its line integral as
$\phi(\gamma(b))-\phi(\gamma(a))$, which is $0$ for a closed path; the same
conclusion is what
[[cor-conservative-fields-are-path-independent-and-have-zero-circulation]]
records for a conservative field.

**The second field is the vortex field.** $V$ is the $C^1$ field on
$\mathbb R^2\setminus\{(0,0)\}$ whose partial derivatives satisfy the closedness
condition of [[def-closed-and-exact-c1-vector-fields]] while admitting no global
potential there. Since
$\int_\gamma\frac{dz}{z}=2\pi i\,n(\gamma,0)$ by
[[def-winding-number-closed-complex-contour]], the circulation of $V$ around
$\gamma$ is $2\pi\,n(\gamma,0)$.

**What the two statements share.** A nonzero winding number and the failure of
$V$ to be exact on the punctured plane are the same fact recorded in two
vocabularies: if $V$ had a $C^2$ potential on the punctured plane, then
[[thm-gradient-theorem-for-line-integrals]] would force its circulation, and
hence $n(\gamma,0)$, to vanish around every closed piecewise-$C^1$ path there;
[[thm-winding-number-circle-traversed-k-times]] exhibits circles with index $k$
about the origin for every integer $k$. That exactness needs more than closedness
on a domain of this shape is the point recorded in
[[rem-domain-hypotheses-for-closed-versus-exact]], and
[[thm-exact-c1-vector-fields-are-closed]] is the implication that does hold on
every open set.
