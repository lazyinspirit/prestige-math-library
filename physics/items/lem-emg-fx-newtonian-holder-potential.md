---
id: lem-emg-fx-newtonian-holder-potential
kind: lemma
title: Newtonian cancellation and the three-dimensional Holder bound
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 0
proof_strategy: direct
deps:
  - def-newtonian-potential
  - def-laplace-fundamental-solution-with-positive-minus-laplacian-sign
  - thm-polar-coordinates-formula-for-lebesgue-measure
  - thm-divergence-theorem-for-bounded-c-one-euclidean-domains
  - thm-differentiation-under-the-integral-sign
  - thm-uniform-derivative-limit-on-a-closed-interval
  - thm-newtonian-potential-solves-poisson-distributionally
  - thm-locally-integrable-functions-embed-in-distributions
  - def-countable-choice
  - lem-smooth-bump-between-concentric-euclidean-balls
dependency_roles:
  def-newtonian-potential: mathematical-premise
  def-laplace-fundamental-solution-with-positive-minus-laplacian-sign: mathematical-premise
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
  thm-divergence-theorem-for-bounded-c-one-euclidean-domains: mathematical-premise
  thm-differentiation-under-the-integral-sign: mathematical-premise
  thm-uniform-derivative-limit-on-a-closed-interval: mathematical-premise
  thm-newtonian-potential-solves-poisson-distributionally: mathematical-premise
  thm-locally-integrable-functions-embed-in-distributions: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-smooth-bump-between-concentric-euclidean-balls: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (2014), Section 2.7, Newtonian cancellation and Holder estimates"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
verification:
  precheck: pending
---

## Statement

Assume Countable Choice. For a set $A\subseteq\mathbb R^3$ with at least two points, write $[q]_{\alpha;A}:=\sup_{x,y\in A,\,x\ne y}|q(x)-q(y)|/|x-y|^\alpha$, using absolute value for scalar $q$ and Euclidean array norm for finite-dimensional vector- or tensor-valued $q$; set $[q]_{\alpha;A}:=0$ when $A$ has at most one point. For nonempty $A$, put $\|q\|_{\infty;A}:=\sup_A|q|$. Globally $\alpha$-Hölder means continuous on $\mathbb R^3$ with $[g]_{\alpha;\mathbb R^3}<\infty$; set $[g]_\alpha:=[g]_{\alpha;\mathbb R^3}$, $\|g\|_\infty:=\|g\|_{\infty;\mathbb R^3}$, and $\|g\|_{0,\alpha;\mathbb R^3}:=\|g\|_{\infty;\mathbb R^3}+[g]_{\alpha;\mathbb R^3}$. For an open set $V\subseteq\mathbb R^3$, $C^{2,\alpha}(V)$ means that the function has continuous partial derivatives through order $2$ on $V$ and $[D^2q]_{\alpha;K}<\infty$ for every compact $K\subset V$; $C^{2,\alpha}_{\mathrm{loc}}(\mathbb R^3)$ means this property on every such $V$. In derivative-array norms below, $|D^jq|$ is the Euclidean norm of the array of order-$j$ partial derivatives and $\|D^jq\|_{\infty;B_R}:=\sup_{B_R}|D^jq|$. Let $0<\alpha<1$, $R>0$, and let $g:\mathbb R^3\to\mathbb R$ be globally $\alpha$-Hölder with support in $B_{2R}(0)$. Put $Ng(x)=\int_{\mathbb R^3}g(y)/(4\pi|x-y|)\,dy$. Then $Ng\in C^{2,\alpha}_{\mathrm{loc}}(\mathbb R^3)$, $-\Delta Ng=g$, and

$$\sum_{j=0}^2R^j\|D^jNg\|_{\infty;B_R}+R^{2+\alpha}[D^2Ng]_{\alpha;B_R}\le C_\alpha R^2\bigl(\|g\|_\infty+R^\alpha[g]_\alpha\bigr).$$

The estimate uses the displayed scaled norms and is uniform in $R$ and $g$.

## Statement references

[[def-newtonian-potential]]

## Facts & Assumptions

**Given:** The exponent, radius, datum and potential in the Statement.

[A1] Countable Choice is retained for the measure and distribution interfaces. [[def-countable-choice]]

[F1] The positive-minus-Laplacian kernel in dimension three is $\Phi(z)=1/(4\pi|z|)$, and $Ng=\Phi*g$. [[def-laplace-fundamental-solution-with-positive-minus-laplacian-sign]] [[def-newtonian-potential]]

[F2] Polar integration in dimension three uses $r^2\,dr\,d\sigma$; the divergence theorem applies on balls and spherical annuli. [[thm-polar-coordinates-formula-for-lebesgue-measure]] [[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]]

[F3] An integral with a common integrable derivative majorant can be differentiated. Uniform convergence of functions and their derivatives on coordinate segments identifies the derivatives of the limit. [[thm-differentiation-under-the-integral-sign]] [[thm-uniform-derivative-limit-on-a-closed-interval]]

[F4] The potential of compactly supported integrable data solves $-\Delta Ng=g$ distributionally; locally integrable functions embed injectively in distributions. [[thm-newtonian-potential-solves-poisson-distributionally]] [[thm-locally-integrable-functions-embed-in-distributions]]

[F5] Smooth radial cutoffs between concentric balls exist and their rescalings have derivative bounds of order $\varepsilon^{-j}$. [[lem-smooth-bump-between-concentric-euclidean-balls]]

## Proof

1.1 By scaling it suffices to prove the estimate for $R=1$. Direct differentiation gives $D_i\Phi(z)=-z_i/(4\pi|z|^3)$ and $K_{ij}(z)=D_{ij}\Phi(z)=(3z_iz_j|z|^{-5}-\delta_{ij}|z|^{-3})/(4\pi)$. Therefore $|D\Phi|\le C|z|^{-2}$, $|K|\le C|z|^{-3}$ and $|DK|\le C|z|^{-4}$. The spherical integrals satisfy $\int_{S^2}\theta_i\theta_j\,d\sigma=4\pi\delta_{ij}/3$ by coordinate reflections, permutations and $\sum_i\theta_i^2=1$. The divergence theorem consequently gives zero integral of $K_{ij}$ on every concentric annulus and the correction $-\delta_{ij}/3$ for the inner-sphere Hessian flux. [given, A1, F1, F2, algebra]

2.1 To justify the second derivatives for merely Hölder data, choose from [F5] a smooth radial cutoff $\chi_\varepsilon$ equal to zero in $B_\varepsilon$ and one outside $B_{2\varepsilon}$, with derivatives bounded by $C\varepsilon^{-j}$, and put $q_\varepsilon=\Phi\chi_\varepsilon$. For each fixed $\varepsilon>0$, [F3] differentiates $q_\varepsilon*g$. On any fixed compact set choose one large containing radius $M$ for all translated supports. Splitting off $g(x)$ inside $B_M(x)$ and using the boundary flux from step 1.1 gives
$$D_{ij}(q_\varepsilon*g)(x)=\int_{B_M(x)}D_{ij}q_\varepsilon(x-y)(g(y)-g(x))\,dy-\frac{\delta_{ij}}3g(x).$$
The integral converges uniformly on that compact set to the same expression with $D_{ij}q_\varepsilon$ replaced by $K_{ij}$: the omitted ball and transition annulus are bounded by $C_\alpha[g]_\alpha\varepsilon^\alpha$, using $|g(y)-g(x)|\le[g]_\alpha|x-y|^\alpha$ and $\int_0^{2\varepsilon}r^{\alpha-1}\,dr$. The potentials and first derivatives likewise converge uniformly, with errors $O(\varepsilon^2\|g\|_\infty)$ and $O(\varepsilon\|g\|_\infty)$. Apply [F3] first to the functions and their first derivatives, then to the first and second derivatives on coordinate segments. This proves $Ng\in C^2$ and the absolutely convergent cancellation formula
$$D_{ij}Ng(x)=\int_{B_M(x)}K_{ij}(x-y)(g(y)-g(x))\,dy-\frac{\delta_{ij}}3g(x).$$
[A1, F1, F2, F3, F5, step 1.1, construct, algebra]

3.1 For the Hölder estimate take $x\ne x'$ in a fixed compact box, $d=|x-x'|$, and $m=(x+x')/2$. Choose a large ball $B_M(m)$ containing the support and both points with a positive margin and $M\ge2d$. The same divergence calculation on this fixed ball writes each Hessian as $\int_{B_M(m)}K_{ij}(x-y)(g(y)-g(x))\,dy-g(x)b(x)$, where $b(x)=\int_{\partial B_M(m)}D_i\Phi(x-y)\nu_j(y)\,dS(y)$. Reflection in $m$ and oddness of $D_i\Phi$ show $b(x)=b(x')$; its magnitude is bounded by a dimension constant since both poles remain a fixed fraction of $M$ away from the sphere. [F1, F2, step 1.1, step 2.1, algebra]

4.1 Split the difference into $B_d(m)$ and its complement. The near integrals are at most $C_\alpha[g]_\alpha d^\alpha$. On the complement, $|K(x-y)-K(x'-y)|\le Cd|y-m|^{-4}$, so the part multiplied by $g(y)-g(x)$ is at most $C[g]_\alpha d\int_d^M r^{\alpha-2}\,dr\le C_\alpha[g]_\alpha d^\alpha$. The remaining part is $(g(x')-g(x))\int_{B_M(m)\setminus B_d(m)}K_{ij}(x'-y)\,dy$. This kernel integral is bounded uniformly: the divergence theorem expresses it as the difference of two $D_i\Phi$ boundary fluxes; each sphere stays at least half its radius from the pole and has area proportional to its radius squared. The boundary correction from step 3.1 is also at most $C[g]_\alpha d^\alpha$. Hence $[D^2Ng]_{\alpha}\le C_\alpha[g]_\alpha$ on the box. The convergent far radial integral uses $\alpha<1$. [A1, F2, step 1.1, step 3.1, algebra]

5.1 For $x\in B_1$, the support is in $B_3(x)$. Integrating $|\Phi|$ and $|D\Phi|$ over that ball bounds $|Ng|$ and $|DNg|$ by $C\|g\|_\infty$. Step 2.1 with $M=3$ bounds $|D^2Ng|$ by $C_\alpha([g]_\alpha+\|g\|_\infty)$; step 4.1 supplies the seminorm. These are precisely the unit-radius scaled bounds. The identity $Ng(Rx)=R^2N(g(R\cdot))(x)$ proves the displayed estimate for arbitrary $R$. [F1, F2, step 2.1, step 4.1, algebra]

6.1 By [F4] the distribution of $-\Delta Ng-g$ vanishes. Step 2.1 makes this difference continuous, so it vanishes everywhere: a nonzero value would persist on a ball of positive measure. Thus $-\Delta Ng=g$ classically. Empty support and zero data give the zero potential, and all bounds remain valid. [A1, F4, step 2.1, step 5.1, algebra] ∎
