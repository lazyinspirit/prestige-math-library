---
id: rem-schauder-and-sobolev-estimates-are-different-scales
kind: remark
title: The Schauder and $W^{2,p}$ scales are different, not interchangeable
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
proof_strategy: direct
dependency_level: 6
deps: [thm-interior-schauder-estimate-for-uniformly-elliptic-equations, thm-interior-w-two-p-estimate-for-uniformly-elliptic-equations, cor-w-two-p-regularity-implies-classical-or-holder-regularity-when-p-is-large, def-holder-spaces-c-k-alpha-and-their-scaled-norms, def-sobolev-space-wkp-and-its-norm, def-axiom-of-choice]
forward_refs: [cex-schauder-estimates-fail-at-the-holder-endpoint-alpha-one, ex-schauder-scaling-on-a-quadratic-poisson-solution, cex-boundary-w-two-p-regularity-needs-c-one-one-type-control]
sources:
  references:
    - title: "Armin Schikorra, Partial Differential Equations I & II (version October 1, 2025; complete 281-page graduate lecture notes)"
      url: "https://sites.pitt.edu/~armin/pde2022/pde.pdf"
      locator: "Chapter 9 and §8.9, the comparison of the higher Schauder and Sobolev scales, printed pp. 151-156 (read for the comparison)"
    - title: "John Villavert, Elementary Theory and Methods for Elliptic Partial Differential Equations (2017; complete 220-page lecture notes)"
      url: "http://www2.math.ou.edu/~villavert/research%20papers/elementary%20theory%20and%20methods%20for%20elliptic%20partial%20differential%20equations.pdf"
      locator: "§3.4.4-3.5, Sobolev versus Schauder regularity, printed pp. 125-128 (read in full)"
    - title: "Xu-Jia Wang, Schauder Estimates for Elliptic and Parabolic Equations (Australian National University, 2006; complete 7-page note)"
      url: "https://maths-people.anu.edu.au/~wang/publications/3-Schauder-esti.pdf"
      locator: "§1, the sharp modulus statement (1.2)-(1.4) and its contrast with the $L^p$ theory, printed pp. 1-2 (read in full)"
---

## Remarks

On a bounded domain, $C^{2,\alpha}(\bar\Omega)$ embeds strictly into $W^{2,p}(\Omega)$ for every finite $p$, and there is no reverse inclusion. Thus the spaces are not equivalent at top order. The estimate theorems on this page also use different forcing-data hypotheses, as item (iii) records.

- (i) **Inclusion $C^{2,\alpha}\subseteq W^{2,p}$ for all finite $p$.** If $\Omega$ is bounded and $u\in C^{2,\alpha}(\bar\Omega)$, then each derivative $D^\beta u$ with $|\beta|\le2$ is continuous on the compact set $\bar\Omega$, and
  $$\|u\|_{W^{2,p}(\Omega)}\le|\Omega|^{1/p}\sum_{|\beta|\le2}\sup_\Omega|D^\beta u|\le C(\Omega)\|u\|_{C^{2,\alpha}(\bar\Omega)},$$
  so $C^{2,\alpha}(\bar\Omega)\subseteq W^{2,p}(\Omega)$ with a norm bound depending on the volume and on $p$ through $|\Omega|^{1/p}$; the inclusion is strict, and the Schauder scale is the stronger hypothesis at the top order.
- (ii) **No reverse inclusion for any finite $p$.** For every $1<p<\infty$ the space $W^{2,p}(\Omega)$ is not contained in $C^{2,\alpha}(\bar\Omega)$: on the unit ball the function $u(x)=(x_1)_+^2$ belongs to $W^{2,p}$ for every finite $p$ while $D_{11}u=2\mathbf 1_{\{x_1>0\}}$ is discontinuous, as recorded with proof in [[cor-w-two-p-regularity-implies-classical-or-holder-regularity-when-p-is-large]]. More generally, under the Axiom of Choice, for $n\ge2$, and on a bounded $W^{2,p}$-extension domain, the Sobolev embedding gives at most one H\"older derivative, with exponent strictly below $1-n/p$ when $p>n$; finite $p$ never gives the two-derivative H\"older estimate.
- (iii) **The data classes differ in the same direction.** The $W^{2,p}$ estimate of [[thm-interior-w-two-p-estimate-for-uniformly-elliptic-equations]] accepts forcing $Lu\in L^p$ and concludes an $L^p$ bound for $D^2u$, while the Schauder estimate of [[thm-interior-schauder-estimate-for-uniformly-elliptic-equations]] requires $Lu\in C^{0,\alpha}$ and concludes a H\"older bound; since $C^{0,\alpha}(\bar\Omega)\subseteq L^p(\Omega)$ on a bounded domain with equality false, the Schauder theorem assumes strictly more on the data and concludes strictly more on the solution.
- (iv) **The endpoints are genuine restrictions of the two theories.** The strict range $0<\alpha<1$ in the Schauder scale is not a technicality: at the endpoint $\alpha=1$ the interior estimate fails, and the sharp modulus of $D^2Nf$ for a Lipschitz source is $|x||\log|x||$ rather than $|x|$, with the explicit witness recorded on the companion page ([[cex-schauder-estimates-fail-at-the-holder-endpoint-alpha-one]]). The range $1<p<\infty$ is the range of the Riesz-multiplier and singular-integral arguments used on this page for the Sobolev estimates; no endpoint $p=1$ or $p=\infty$ version is asserted here.
- (v) **Neither scale is a boundary regularity theorem by itself.** The $W^{2,p}$ estimate is a priori and assumes $u\in W^{2,p}$; a weak solution on a merely Lipschitz domain can fail to reach $W^{2,p}$ altogether at a reentrant corner ([[cex-boundary-w-two-p-regularity-needs-c-one-one-type-control]]), and the radius bookkeeping of both estimates is exercised by [[ex-schauder-scaling-on-a-quadratic-poisson-solution]].

Thus the two scales should be used according to the data: rough $L^p$ forcing is treated by the Sobolev scale at the price of losing H\"older regularity at the top order, while $C^{0,\alpha}$ forcing with controlled coefficients is treated by the Schauder scale, which gives two H\"older derivatives but no improvement at the endpoint $\alpha=1$ and no statement for rough coefficients.

- The comparison is local in nature: on an infinite-volume domain, boundedness of $u$ and its derivatives does not imply $L^p$ integrability: $u\equiv1$ on $\mathbb R^n$ is a counterexample. An inclusion there requires additional integrability, and on domains with corners both scales require corresponding boundary hypotheses.
- The statement of this remark carries no proof obligation of its own: each itemized claim is proved or witnessed in the cited item, and the companion examples page holds the endpoint counterexamples for both scales.
