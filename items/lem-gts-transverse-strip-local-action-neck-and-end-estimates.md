---
id: lem-gts-transverse-strip-local-action-neck-and-end-estimates
kind: lemma
title: Transverse strip action inequality, exponential ends and neck collapse
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
proof_strategy: direct
axiom_strength: Countable Choice inherited from the local epsilon and higher-regularity suppliers.
deps:
  - def-countable-choice
  - def-gts-symplectic-and-almost-complex-curve-data
  - def-gts-lagrangian-intersection-and-hamiltonian-chord-data
  - lem-interior-energy-regularity-for-smooth-almost-complex-strips
  - lem-boundary-energy-regularity-for-totally-real-strips
  - lem-local-sobolev-bootstrap-for-almost-complex-strips
  - thm-euclidean-inverse-function-theorem
dependency_roles:
  def-countable-choice: mathematical-premise
  def-gts-symplectic-and-almost-complex-curve-data: mathematical-premise
  def-gts-lagrangian-intersection-and-hamiltonian-chord-data: mathematical-premise
  lem-interior-energy-regularity-for-smooth-almost-complex-strips: mathematical-premise
  lem-boundary-energy-regularity-for-totally-real-strips: mathematical-premise
  lem-local-sobolev-bootstrap-for-almost-complex-strips: mathematical-premise
  thm-euclidean-inverse-function-theorem: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Dietmar Salamon, Lectures on Floer Homology
      url: https://www.math.utoronto.ca/mgualt/Morse%20Theory/Salamon%20floer.pdf
      locator: Strip action/energy convention; the transverse local inequality and all end/neck estimates are proved below without exact integrable generator charts.
dependency_level: 3
---

## Statement

Assume Countable Choice. Let $(X,\omega)$ be compact without boundary, let $K_0,K_1$ be compact embedded transverse Lagrangians, and let $J_t$, $0\le t\le1$, be any smooth compatible family. Put $g_t=\omega(\cdot,J_t\cdot)$ and let $v$ solve $v_s+J_t(v)v_t=0$ with $v(s,j)\in K_j$. Its energy on a region is $\int|v_s|_{g_t}^2dsdt=\int v^*\omega$. No integrability or exact linear generator-chart condition is assumed.

There are uniform $\delta,C,c>0$ with the following properties. Every finite-energy whole strip converges at each end to a unique point of the finite set $K=K_0\cap K_1$, exponentially with all derivatives. A nonconstant whole strip has a length-four longitudinal window of energy at least $\delta$, hence energy at least $\delta$.

If $v$ is defined on a two-unit-buffered strip interval and every length-four window centered in $[a,b]$ has energy less than $\delta$ (the windows are required to be in its domain), its image on $[a,b]\times[0,1]$ lies in one fixed intersection chart, and
$$E(v;[a+R,b-R]\times[0,1])\le C\delta e^{-cR}\quad(0\le R\le(b-a)/2).$$
For $R\ge1$ the image of this central region has distance and diameter at most $C\sqrt\delta e^{-cR/2}$ from its one intersection point. The analogous one-sided estimates hold on buffered half-infinite intervals. If every length-four window of a whole strip is small, the strip is constant. If $K$ is empty there is no finite-energy whole strip. All assertions also hold for strips whose path traces stay in one specified path-space component, assuming transversality only at the intersections whose constant paths belong to that component; other intersections may be degenerate.

## Facts & Assumptions

**Given:** The exact compact transverse symplectic geometry, smooth compatible coefficient family, and actual smooth homogeneous strip solutions in the Statement.

[F1] Actual interior and totally real boundary small-energy estimates apply to $J_t$: on the physical edges its restriction is fixed in the longitudinal coordinate, namely $J_0$ or $J_1$. Uniform coefficient bounds and compactness give uniform constants. [[lem-interior-energy-regularity-for-smooth-almost-complex-strips]] [[lem-boundary-energy-regularity-for-totally-real-strips]]

[F2] The actual local bootstrap gives all derivative bounds from an already smooth solution with bounded first derivative, in adapted target charts. Its proof is local and applies to both physical edges and interior disks. [[lem-local-sobolev-bootstrap-for-almost-complex-strips]]

[F3] The Euclidean inverse theorem gives simultaneous coordinates straightening two transverse submanifolds. [[thm-euclidean-inverse-function-theorem]]

[A1] Countable Choice is used only through [F1]–[F2]. [[def-countable-choice]]

## Proof

1.1 The transverse intersection is discrete and compact, hence finite. Near $p\in K$, choose parametrizations $\ell_j$ of the two submanifolds in an ambient chart and use $F(x,y)=\ell_0(x)+\ell_1(y)-p$. Transversality makes its derivative invertible. By [F3] its inverse is a chart taking $K_0,K_1$ to the complementary coordinate planes $V_0=\mathbb R^n\times0$, $V_1=0\times\mathbb R^n$. Shrink to disjoint charts for the finitely many $p$. Write $\Omega$ for the pulled-back symplectic form. The radial primitive $\beta_z(\xi)=\int_0^1t\Omega_{tz}(z,\xi)dt$ satisfies $d\beta=\Omega$, $|\beta_z(\xi)|\le C|z||\xi|$, and $\beta|_{V_j}=0$, since each radial axis lies in its Lagrangian. The primitive identity follows by differentiating the radial pullback and integrating from0 to1. [F3, given, construct, algebra]

2.1 For a path $\gamma:[0,1]\to\mathbb R^{2n}$ in this chart, with endpoints in $V_0,V_1$, the fundamental theorem and complementarity give $|\gamma(0)|\le|\gamma(1)-\gamma(0)|\le\|\dot\gamma\|_2$ and $\sup_t|\gamma(t)|\le2\|\dot\gamma\|_2$. Define its local action $a(\gamma)=-\int\beta(\dot\gamma)dt$. Thus $|a(\gamma)|\le C\|\dot\gamma\|_2^2$. On an actual strip trace, $v_t=J_t(v)v_s$ and uniform coordinate/metric comparison give $$|a(s)|\le C e(s),\qquad e(s)=\int_0^1|v_s(s,t)|_{g_t}^2dt.$$ Also $a'(s)=-\int\Omega(v_s,v_t)dt=-e(s)$: differentiate the primitive integral, integrate the total $t$ derivative, and use $\beta|_{V_j}=0$ at both ends. The same calculation gives $\sup_t d(v(s,t),p)^2\le C e(s)$. All constants are uniform over the finite chart set. This is the required isoperimetric/gradient inequality; no spectral or exact-complex-coordinate hypothesis is hidden in it. [given, step 1.1, construct, algebra]

2.2 Fix any background target metric. Compactness makes its Dirichlet density uniformly comparable with $|v_s|_{g_t}^2$, because $v_t=J_tv_s$. Cover the strip width by fixed-radius interior disks and physical-boundary half-disks. A length-four window of energy below $\delta$ therefore gives $\sup_t|dv(s,t)|^2\le C\delta$ at its center by [F1], after reducing $\delta$ below the finitely many epsilon thresholds. In particular its path trace has diameter at most $C\sqrt\delta$. For sufficiently small trace diameter, its two boundary points must be near the SAME intersection point: otherwise compactness would give arbitrarily close pairs in $K_0,K_1$ whose common limit lies outside the chosen intersection neighborhoods. The entire trace is then in that intersection chart, after decreasing $\delta$ again. Along any connected interval of small windows the chosen chart cannot change, because the charts are disjoint and the map continuous. If $K$ is empty the two compact boundary sets have positive distance, making such a trace impossible. [F1, given, step 1.1, construct, algebra]

3.1 On a finite interval of small windows, step 2.2 puts the entire strip piece in one chart. For $0\le R<(b-a)/2$, set $F(R)=\int_{a+R}^{b-R}e(s)ds$. Step 2.1 gives $F(R)=a(a+R)-a(b-R)\le C(e(a+R)+e(b-R))=-CF'(R)$. Hence $F(R)\le F(0)e^{-R/C}$. The endpoint gradient estimates in step 2.2 give $F(0)\le C(e(a)+e(b))\le C\delta$. This proves the central energy estimate. If $R\ge1$, apply [F1] on fixed disks or half-disks around each central point, whose energies are bounded by the estimate with $R-1$; it gives $e(s)\le C\delta e^{-cR}$. The last inequality of step 2.1 now puts all those image points within $C\sqrt\delta e^{-cR/2}$ of the same $p$, and bounds their diameter by twice that number. The conclusion is empty if the central interval is empty. [F1, step 2.1, step 2.2, construct, algebra]

4.1 On a finite-energy positive end, every far-out window energy tends to zero, uniformly in its center, by integrability. Step 2.2 gives $|dv|\to0$ there and puts all far-out traces in one chart. Then $e(s)\to0$, so $a(s)\to0$ by step 2.1 and $E([s,\infty))=a(s)$. The same inequality yields $E([s,\infty))\le-C\frac d{ds}E([s,\infty))$, proving exponential tail energy. The gradient and distance argument of step 3.1 gives exponential convergence to its one $p$. The negative end is identical with reversed longitudinal coordinate and action sign. For a buffered half-infinite interval of small windows, its initial slice energy is at most $C\delta$; the same argument gives precisely the stated one-ended estimates. If every window on a whole strip is small, both action limits are zero, so its total energy is zero and it is constant. Contrapositively a nonconstant strip has a window of energy at least $\delta$. [F1, step 2.1, step 2.2, step 3.1, construct, algebra]

5.1 Convergence is exponential with EVERY derivative, not only in distance. On a unit patch centered far into a tail, steps 3.1–4.1 bound the coordinate map and first derivative by $C\alpha$, $\alpha=e^{-c|s|/2}$. Rescale its target amplitude by writing $v=p+\alpha w$ in an adapted chart. The functions $w$ and $dw$ are uniformly bounded, and the rescaled coefficient $J_t(p+\alpha w)$ has uniform derivatives of all fixed orders. In smaller source patches its principal coefficient is within one half of a constant complex structure after one fixed linear change, uniformly by compactness; at a physical edge use the adapted totally real coordinates from [F1]. Rescaling the target amplitude keeps that flat boundary plane fixed. Apply [F2] to $w$ to obtain uniform bounds for every derivative, and multiply by $\alpha$ to recover the same exponential rate for derivatives of $v-p$. Smooth changes from adapted to intersection coordinates preserve the estimates. This completes the end and neck assertions without exact integrable generator charts. [F1, F2, step 3.1, step 4.1, construct, algebra]

6.1 For the component extension let $\mathcal P$ be the fixed component. Smooth paths with sufficiently close $C^0$ values are homotopic through paths with their endpoints on the same boundary submanifolds: choose coordinate balls along the compact reference path and local charts on its boundary endpoint submanifolds, interpolate the endpoint arcs there, and extend that interpolation over the adjacent short path intervals and then the interior by coordinate interpolation. Thus every path component is open in this $C^0$ neighborhood topology, and its complement is the union of the other open components. The intersection subset $K_{\mathcal P}$ whose constant paths lie in $\mathcal P$ is consequently closed in compact $K_0\cap K_1$. Transversality there makes it finite, even if other intersections are degenerate. The proof of step 2.2 still puts every sufficiently small trace in one of its charts: a hypothetical sequence of small traces in $\mathcal P$ outside those charts has, by compact boundary geometry, a limiting intersection $p$. Both boundary submanifolds are locally contractible near $p$ and a small ambient coordinate ball is contractible. Join its two trace endpoints to $p$ within their respective local boundary pieces and contract the remaining loop in that ball; this is a path homotopy to the constant path $p$. Hence $p\in K_{\mathcal P}$, contradiction. All subsequent action, end, neck and quantum arguments are local in exactly these finite transverse charts and therefore unchanged. If this relevant set is empty, a finite-energy end would give the same contradiction. [F1, F3, step 1.1, step 2.1, step 2.2, step 3.1, step 4.1, step 5.1, construct, algebra] ∎
