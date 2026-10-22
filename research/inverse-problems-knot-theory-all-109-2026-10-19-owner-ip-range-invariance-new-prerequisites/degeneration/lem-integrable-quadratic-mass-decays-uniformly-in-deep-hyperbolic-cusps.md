---
id: lem-integrable-quadratic-mass-decays-uniformly-in-deep-hyperbolic-cusps
kind: lemma
title: Integrable quadratic mass decays uniformly in deep hyperbolic cusps
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - thm-laurent-expansion-annulus
  - thm-laurent-coefficient-formula-and-uniqueness
  - lem-radial-derivative-of-a-spherical-average
  - thm-polar-coordinates-formula-for-lebesgue-measure
  - thm-monotone-convergence-for-the-integral
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - lem-local-thin-components-of-torsion-free-kleinian-quotients
  - lem-complete-curvature-minus-one-manifolds-are-kleinian-quotients
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Curtis T. McMullen, Iteration on Teichmuller space
      url: https://people.math.harvard.edu/~ctm/papers/home/text/papers/iter/iter.pdf
      locator: Corollary2.6, printed432, actual complete Section2.3 and its proof read; the proof below replaces its ramified-cover/metric-comparison import by a direct cusp-coordinate estimate
---

## Statement

Assume AC, hence Countable Choice. If $f(\zeta)d\zeta^2$ is a holomorphic integrable quadratic differential on $0<|\zeta|<R$, where $0<R<\infty$, then $\zeta f(\zeta)$ extends holomorphically to $|\zeta|<R$, and for $0<r<R$,
$$\int_{|\zeta|<r}|f(\zeta)|\,dA(\zeta)\le\frac rR\int_{|\zeta|<R}|f(\zeta)|\,dA(\zeta).$$

Consequently let $X$ be ANY complete oriented torsion-free hyperbolic surface, with no finite-area or finite-type assumption, and let $q$ be an integrable holomorphic quadratic differential on $X$. For $0<e<a<\eta_*/2$, let $X_{\mathrm{cusp}}(e)$ be the union of the parabolic components of $\{\operatorname{inj}_X<e\}$, where $\eta_*$ is the universal local thin displacement threshold. Then
$$\int_{X_{\mathrm{cusp}}(e)}|q|\le\exp\!\left(-\frac\pi{\sinh e}+\frac\pi{\sinh a}\right)\int_{X_{\mathrm{cusp}}(a)}|q|\le\exp\!\left(-\frac\pi{\sinh e}+\frac\pi{\sinh a}\right)\|q\|_1.$$
In particular, for any fixed such $a$, the mass of every unit integrable quadratic in the $e$-cuspidal thin part tends to zero uniformly over all these surfaces as $e\downarrow0$. The estimate allows any finite or countable number of cusps and needs no genus-dependent constant, projective compactness, ramified compactification or metric comparison after filling punctures.

## Facts & Assumptions

**Given:** AC, the punctured-disc integrable quadratic, or the arbitrary complete surface, integrable quadratic and two small thresholds, for the respective conclusions.

[A1] Full choice and its Countable Choice consequence are [[def-axiom-of-choice]] and [[def-countable-choice]].

[F1] Holomorphic functions on an annulus have locally uniformly convergent Laurent expansions and the coefficients are their contour integrals. [[thm-laurent-expansion-annulus]], [[thm-laurent-coefficient-formula-and-uniqueness]]

[F2] Under Countable Choice, the radial mean of a $C^2$ function satisfies $m'(r)=\frac r2|B_r|^{-1}\int_{B_r}\Delta u$ in the plane; polar coordinates integrate nonnegative densities with the usual factor $r\,dr\,d\theta$. [[lem-radial-derivative-of-a-spherical-average]], [[thm-polar-coordinates-formula-for-lebesgue-measure]]

[F3] Smooth conformal coordinate changes carry quadratic absolute-value densities by their real Jacobian $|h'|^2$, with the measurable change-of-variables formula under Countable Choice. [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]

[F4] The arbitrary-quotient thin classifier at $2a<\eta_*$ gives precisely invariant disjoint embedded thin components. In a real Fuchsian group a parabolic stabilizer is cyclic; normalizing its full primitive generator to $z\mapsto z+\ell$ gives the cusp $\{y>\ell/(2\sinh a)\}/\ell\mathbb Z$. The injectivity radius there is $\operatorname{arsinh}(\ell/(2y))$. The complete hyperbolic model and its conformal structure are actual local suppliers. [[lem-local-thin-components-of-torsion-free-kleinian-quotients]], [[lem-complete-curvature-minus-one-manifolds-are-kleinian-quotients]]

[F5] Increasing nonnegative measurable functions have integral tending to the integral of their limit. [[thm-monotone-convergence-for-the-integral]]

## Proof

1.1 By [F1], write $f(\zeta)=\sum_{k\in\mathbb Z}c_k\zeta^k$ on the punctured disc. For every $0<t<R$, the coefficient formula gives $$|c_{-m}|t^{-m}\le\frac1{2\pi}\int_0^{2\pi}|f(te^{i\theta})|\,d\theta=:M_f(t).$$ If $m\ge2$ and $c_{-m}\ne0$, [F2]'s polar formula would give $$\int_{0<|\zeta|<R}|f|\,dA=2\pi\int_0^RM_f(t)t\,dt\ge2\pi|c_{-m}|\int_0^Rt^{1-m}\,dt=\infty,$$ contrary to integrability. Thus all $c_{-m}$ with $m\ge2$ vanish. The positive Laurent part extends across zero: on each fixed circle $t_0<R$ the same coefficient formula bounds $|c_k|\le M_f(t_0)t_0^{-k}$ for $k\ge0$, giving convergence on $|\zeta|<t_0$. Hence $h(\zeta)=\zeta f(\zeta)$ extends holomorphically across zero throughout the disc. This proves the precise simple-pole assertion rather than assuming it from a finite-type compactification. [A1, F1, F2, given, construct, algebra]

2.1 The circular mean $M_h(t)=(2\pi)^{-1}\int_0^{2\pi}|h(te^{i\theta})|\,d\theta$ is nondecreasing on $(0,R)$. To justify this even at zeros, for $s>0$ put $u_s=(|h|^2+s^2)^{1/2}$. Holomorphicity and the real chain rule give $$\Delta u_s=\frac{(|h|^2+2s^2)|h'|^2}{(|h|^2+s^2)^{3/2}}\ge0.$$ The derivative formula [F2] therefore makes the circular mean of $u_s$ nondecreasing. Since $0\le u_s-|h|\le s$, those means converge uniformly to $M_h$ as $s\downarrow0$. Their pointwise inequalities pass to the limit, proving the assertion for $|h|$ without an unproved subharmonic regularity premise. [F2, step 1.1, construct, algebra]

3.1 For every $0<r<R$, polar integration and $f=h/\zeta$ give $$F(r):=\int_{|\zeta|<r}|f|\,dA=2\pi\int_0^rM_h(t)\,dt.$$ If $r<b<R$, step 2.1 implies $$F(r)=2\pi r\int_0^1M_h(rs)\,ds\le2\pi r\int_0^1M_h(bs)\,ds=\frac rbF(b).$$ Let $b\uparrow R$. The integrability assumption and the same nonnegative integral formula give $F(b)\uparrow F(R)$ by [F5] applied to the increasing radial-cutoff integrands. Thus $F(r)\le(r/R)F(R)$, proving the full punctured-disc mass estimate. Values at the puncture itself make no difference to these integrals. [F2, F5, step 1.1, step 2.1, given, construct, algebra]

4.1 Now take a full primitive parabolic cusp of the $a$-thin part. In [F4]'s coordinate let $T_a=\ell/(2\sinh a)$ and $T_e=\ell/(2\sinh e)>T_a$. Its conformal parameter $\zeta=\exp(2\pi iz/\ell)$ maps its quotient biholomorphically to $0<|\zeta|<R_a$, with $R_a=\exp(-2\pi T_a/\ell)$. Its $e$-thin subcusp is $0<|\zeta|<R_e$, with $R_e=\exp(-2\pi T_e/\ell)$. The integral of the quadratic is invariant under this coordinate by [F3], so its coefficient is an integrable holomorphic $f(\zeta)$ on that punctured disc. Apply step 3.1 to obtain $$\int_{U_e}|q|\le\frac{R_e}{R_a}\int_{U_a}|q|,\qquad\frac{R_e}{R_a}=\exp\!\left(-\frac\pi{\sinh e}+\frac\pi{\sinh a}\right).$$ The lattice length cancels exactly. This computation uses actual full-stabilizer embedded cusp coordinates, not a possibly multiply covered cusp chart. [F3, F4, step 3.1, given, construct, algebra]

5.1 Every parabolic $e$-thin component is contained in the unique $a$-thin component with the same full parabolic stabilizer: its defining horoball is nested in the latter one in the normalization of step 4.1. That larger component is still parabolic by [F4]. Conversely the $e$-thin part within each parabolic $a$-cusp is precisely the subcusp just calculated; the primitive stabilizer gives its minimum displacement, so no extra sheet or region is lost. The distinct $a$-cusp components are disjoint and form a countable family, because each is open and the surface is second countable. Summing step 4.1 over them gives the first claimed surface inequality. Their total mass is at most $\|q\|_1$, giving the second. Empty cusp families satisfy it as well. [A1, F4, step 4.1, given, construct, algebra]

6.1 Fix $a$ and normalize $\|q\|_1=1$. The common upper bound is the displayed exponential factor, which tends to zero as $e\downarrow0$, since $\sinh e\downarrow0$. It is independent of the surface, the number of cusps, genus and all period lengths. This proves the stated uniform cuspidal mass exclusion on the entire supplied scope. It is one analytic ingredient for a thin-part degeneration argument, not a claim that the separate geodesic-thin inefficiency or three-manifold gluing geometry is already established. [step 5.1, given, algebra] ∎

## Actual reading and remaining operation

The complete actual Iteration Section2.3, including Corollary2.6 and its proof, was read from the authentic author PDF text; Sections5–6 were already fully read. The full local arbitrary-quotient thin and model suppliers, the full actual Laurent expansion/coefficient proofs, radial derivative and polar-coordinate proofs, and measurable change-of-variables proof were read. This does not claim full reading of the primary complex-analysis or PDE books cited by those local suppliers.

The proof gives the actual uniform cusp-mass operation needed after amenable-mass concentration. The remaining geodesic-thin pairing inefficiency and the general cylindrical/gluing obstruction require their own complete proofs; none is inferred from the cusp estimate.
