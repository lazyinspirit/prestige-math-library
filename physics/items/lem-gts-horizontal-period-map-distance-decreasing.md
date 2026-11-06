---
id: lem-gts-horizontal-period-map-distance-decreasing
kind: lemma
title: "Horizontal period maps have bounded metric differential"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
domain: mathematics
library: physics
category: string-theory
axiom_strength: "ZF + full AC through the analytic Hodge and Schwarz suppliers."
deps:
  - def-gts-polarized-variation-of-hodge-structure-and-period-map
  - def-rational-mixed-hodge-structure
  - def-axiom-of-choice
dependency_roles:
  def-gts-polarized-variation-of-hodge-structure-and-period-map: mathematical-premise
  def-rational-mixed-hodge-structure: mathematical-premise
  def-axiom-of-choice: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Claire Voisin, Hodge Structures and the Topology of Algebraic Varieties, Harvard CMSA revision"
      url: "https://cmsa.fas.harvard.edu/media/Voisin_HSTAVharvardrevision.pdf"
      locator: "§3.4.2, Theorem 3.17, printed p.48, and §3.4.3, printed p.49: the induced Hodge metric up to scalar and the curvature/Schwarz route. The complete curvewise estimate and comparison are reconstructed locally below."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $\Phi:\mathfrak H\to D$ be the horizontal period map of a polarized variation of Hodge structure on the punctured disk, lifted to the upper half-plane $\mathfrak H=\{z=x+iy:y>0\}$. Equip $\mathfrak H$ with the Poincaré metric and $D$ with the Hodge metric. There is a constant $C$ depending only on the fixed polarized Hodge numbers such that the differential of $\Phi$ has operator norm at most $C$ everywhere.

## Statement references

[[def-gts-polarized-variation-of-hodge-structure-and-period-map]]

[[def-rational-mixed-hodge-structure]]

[Voisin, §3.4.3](https://cmsa.fas.harvard.edu/media/Voisin_HSTAVharvardrevision.pdf)

## Facts & Assumptions

**Given:** A polarized variation of Hodge structure on $\Delta^*$ and its
horizontal lifted period map $\Phi$ on $\mathfrak H$. Fix the Poincaré
line element $|dz|^2/y^2$, $z=x+iy$. For each pure weight $k$ write
$E^p=H^{p,k-p}$. For a finite direct sum of weights use the direct sum
of the corresponding Hodge summands and polarization metrics.

[F1] [[def-gts-polarized-variation-of-hodge-structure-and-period-map]]
gives a finite-rank flat real connection $\nabla$, holomorphic Hodge
filtration $F$, fixed Hodge numbers and the horizontal condition
$\nabla F^p\subset\Omega^1\otimes F^{p-1}$. These analytic data are
assumed for the variation itself; no geometric realization is required.

[F2] [[def-rational-mixed-hodge-structure]] fixes the positive polarization
metric $h(u,v)=Q(Cu,\bar v)$, linear in the first argument, with
$C|_{E^p}=i^{2p-k}I$ and pairwise orthogonal Hodge summands. The
polarization and real conjugation are flat.

[L1] To fix the metric normalization, represent a tangent vector to the
period-domain filtration by its unique strictly Hodge-degree-lowering
endomorphism, using the Hodge splitting to identify the quotient blocks.
Give it the Hilbert–Schmidt squared norm $\operatorname{tr}(XX^\dagger)$
from $h$. On the horizontal tangent this is the sum of squared norms of
its blocks $E^p\to E^{p-1}$. This is the induced Hodge metric used
here; a different fixed positive scalar normalization multiplies the final
bound by that scalar's square root. The uniqueness follows because a
filtration-preserving endomorphism has no strictly lowering component. A real polarization-preserving marking change $g$ transports $C$ to $gCg^{-1}$ and $h$ isometrically; conjugating $X$ therefore preserves this tangent norm.

## Proof

1.1 Pull the flat bundle and its Hodge splitting back to $\mathfrak H$.
The bundles $E^p=F^p\cap\bar F^{k-p}$ are smooth: opposition makes
the finite matrix of a local splitting invertible, so its projections
are smooth functions of holomorphic frames and their conjugates.
Holomorphicity, transversality and their conjugates give
$\nabla^{1,0}E^p\subset E^p\oplus E^{p-1}$ and
$\nabla^{0,1}E^p\subset E^p\oplus E^{p+1}$: intersect
$F^{p-1}$ with $\bar F^{k-p}$ in the first case, and $F^p$
with $\bar F^{k-p-1}$ in the second. Write
$\nabla=D+\theta+\eta$ for its diagonal, lowering $(1,0)$ and
raising $(0,1)$ parts. The diagonal connection $D$ preserves $h$:
on a fixed Hodge block $C$ is a constant scalar and off-diagonal
terms pair to zero, while $\nabla Q=0$. For adjacent blocks put
$B_Q(u,v)=Q(u,\bar v)$, $u\in E^p$, $v\in E^{p-1}$.
Differentiating their zero $B_Q$ pairing gives
$B_Q(\theta_z u,v)+B_Q(u,\eta_{\bar z}v)=0$.
Since the two Weil scalars satisfy $i^{2p-k}=-i^{2(p-1)-k}$,
this is $h(\theta_z u,v)=h(u,\eta_{\bar z}v)$. Thus
$\eta=\theta^\dagger$ and $\nabla=D+\theta+\theta^\dagger$.
[given, F1, F2, algebra]

2.1 In a curve coordinate write $\theta=A\,dz$. The Hodge-degree
minus-one component of flatness $\nabla^2=0$ gives
$D_{\bar z}A=0$; its degree-zero component gives
$F_D(\partial_z,\partial_{\bar z})=-[A,A^\dagger]$.
Products of two $(1,0)$ or two $(0,1)$ forms vanish on the curve,
so these are exact identities. In a flat marking, differentiating a
section of $E^p\subset F^p$ and projecting modulo $F^p$ leaves
exactly its $E^{p-1}$ component $A|_{E^p}$. Consequently $A$
is $d\Phi(\partial_z)$ under the tangent-space identification in
[L1], and the pullback metric coefficient is
$e=\|A\|^2=\operatorname{tr}(AA^\dagger)\ge0$.
[F1, L1, step 1.1, algebra]

3.1 If the rank $N$ is zero the map is constant. Otherwise let
$\mu=N^{-1}\sum_p p\dim E^p$, let the self-adjoint grading
operator $H$ act by $p-\mu$ on $E^p$, and put
$M^2=\operatorname{tr}(H^2)=\sum_p\dim E^p(p-\mu)^2$.
For several weights the sums run over their Hodge summands; $A$
preserves the weight summands and still satisfies $[H,A]=-A$.
If $M=0$, every nonzero summand has the same first index and
$A=0$, again proving the claim. Otherwise put $B=[A,A^\dagger]$.
It is self-adjoint, and cyclicity of the finite trace gives
$\operatorname{tr}(BH)=\operatorname{tr}(A^\dagger[H,A])=-e$.
Cauchy–Schwarz for finite matrix entries implies
$\|B\|^2M^2\ge e^2$. This constant depends only on the fixed
Hodge numbers. [given, F1, F2, step 2.1, algebra]

4.1 On the open set $e>0$, use the connection induced by $D$ on
endomorphisms and its Hilbert–Schmidt metric. Metric compatibility
and $D_{\bar z}A=0$ give
$e_z=\langle D_zA,A\rangle$ and
$e_{z\bar z}=\|D_zA\|^2+\langle D_{\bar z}D_zA,A\rangle$.
The curvature equation in step 2.1 gives
$[D_z,D_{\bar z}]A=-[B,A]$, so
$D_{\bar z}D_zA=[B,A]$.
Cyclicity of trace yields
$\langle[B,A],A\rangle=\operatorname{tr}(B(AA^\dagger-A^\dagger A))=\|B\|^2$.
It follows that
$$\partial_z\partial_{\bar z}\log e=\frac{\|D_zA\|^2+\|B\|^2}{e}-\frac{|\langle D_zA,A\rangle|^2}{e^2}\ge\frac{\|B\|^2}{e}\ge\frac e{M^2}.$$
The first inequality is finite-dimensional Cauchy–Schwarz. This is
the required negative horizontal curvewise curvature bound, derived
on the actual pulled-back variation without assuming an ambient
period-domain curvature formula. [F2, step 1.1, step 2.1, step 3.1, algebra]

5.1 Transfer to the unit disk by a Cayley transform. Under a holomorphic
coordinate change $A$ multiplies by its derivative and $e$ by the
absolute square, so step 4.1 has the same form. For $0<r<1$ put
$\lambda_r(\zeta)=4r^2/(r^2-|\zeta|^2)^2$; direct differentiation
gives $\partial_\zeta\partial_{\bar\zeta}\log\lambda_r=\lambda_r/2$.
The smooth function $e$ is bounded on the closed radius-$r$ disk,
so $e/\lambda_r$ extends by zero on its boundary and attains its
maximum. If positive, this maximum occurs where $e>0$, and the
second derivative test for its logarithm gives
$0\ge\partial\bar\partial\log(e/\lambda_r)\ge e/M^2-\lambda_r/2$.
Thus its maximum is at most $M^2/2$; the same bound is immediate
if its maximum is zero. Let $r\uparrow1$, obtaining
$e(\zeta)\le (M^2/2)4/(1-|\zeta|^2)^2$ throughout the unit disk.
No assertion was made about $\log e$ at a zero of $A$.
[step 3.1, step 4.1, algebra]

6.1 In the upper-half-plane coordinate this is
$e(z)\le M^2/(2y^2)$. By [L1] and step 2.1, the squared operator
norm of $d\Phi$ relative to $|dz|^2/y^2$ is $e(z)y^2$;
hence it is at most $M^2/2$. The constant $C=M/\sqrt2$ therefore
works in this normalization, and the appropriate fixed scalar
multiple works for any fixed scalar Hodge-metric normalization.
The constant-map cases of step 3.1 also satisfy the conclusion.
This proves the original bound everywhere for every admitted
polarized variation, including ramification points.
[given, L1, step 2.1, step 3.1, step 5.1, algebra] ∎

## Remarks

The proof reconstructs both the finite-dimensional horizontal curvature
estimate and the required Schwarz comparison. It uses the analytic
polarized-VHS data directly and adds no geometric-realization or immersion
hypothesis. The Hodge-metric normalization is made explicit in [L1]; it
changes only the allowed constant. The proof does not require a separate
Schwarz theorem or an external period-domain curvature input.
