---
id: ex-r5-s-brane-and-bubble-of-nothing-cosmological-channels
kind: example
title: S-brane and bubble-of-nothing cosmological channels
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
dependency_level: 2
deps:
- def-r5-alternative-cosmology-model-data
dependency_roles:
  def-r5-alternative-cosmology-model-data: formulation-prerequisite
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
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
  - title: 'M. Cicoli, J. P. Conlon, A. Maharana, S. Parameswaran, F. Quevedo and I. Zavala, String Cosmology: from the Early
      Universe to Today, arXiv:2303.04819v2'
    url: https://arxiv.org/pdf/2303.04819v2
    locator: §7.6, PDF pp. 142–144, for the S-brane definition and source-reported time-dependent solutions; §7.8, PDF pp.
      148–150, for Witten’s five-dimensional bubble-of-nothing instanton, its asymptotic Kaluza-Klein vacuum and the source-stated
      analytic continuation and limitations.
physical_scope: A source-reported Euclidean five-dimensional Kaluza-Klein bubble instanton with a locally checked smooth cap
  and asymptotic circle, alongside a distinct spacelike S-brane channel. It gives no nucleation rate, universal vacuum-decay
  conclusion, or global string solution.
---

## Example

On a time-oriented Lorentzian manifold $(\mathcal X,g_L)$, an S-brane here is a smooth embedding $\iota:\mathcal W\hookrightarrow\mathcal X$ of a positive-dimensional worldvolume whose induced metric $\iota^*g_L$ is positive definite; it is spacelike and has no timelike worldvolume direction. A bubble-of-nothing instanton here is instead the Euclidean five-manifold $\mathcal M_E\cong\mathbb R^2\times S^3$ with metric $ds_E^2=dr^2/(1-R^2/r^2)+r^2d\Omega_3^2+R^2(1-R^2/r^2)d\phi^2$, where $d\Omega_3^2=d\theta^2+\cos^2\theta\,d\Omega_2^2$ and $d\Omega_2^2$ is the unit round metric, $r\geq R>0$, and $\phi\sim\phi+2\pi$. Here $R,r$ have units of length and $\theta,\phi$ and the $S^2$ coordinates are dimensionless. The circle closes smoothly at $r=R$; a Lorentzian continuation is a separate prescription. These distinct spacelike-source and end-of-spacetime channels require model-specific boundary conditions, source actions, stability and semiclassical control; neither is a universal vacuum-decay result.

Two distinct source-backed channels illustrate why the background, boundary data, and continuation must be stated separately. In the first, the S-brane is a localized topological defect with the spacelike embedded worldvolume defined above; for a codimension-one example this means the induced metric is positive definite and the defect is localized in time. In the second, $(\mathcal M_E,g_E)$ is the Euclidean instanton manifold in a five-dimensional Kaluza-Klein model with one compact circle.

For the bubble take $R>0$, $r\geq R$, $\phi\sim\phi+2\pi$, $\theta\in[-\pi/2,\pi/2]$, and $d\Omega_2^2$ the unit round metric on $S^2$, so $d\Omega_3^2:=d\theta^2+\cos^2\theta\,d\Omega_2^2$ is the unit round metric on $S^3$. The quantities $r,R,\rho$ have units of length; $\theta,\phi$ and the coordinates on $S^2$ are dimensionless. Adopt the source instanton metric [A1]. For this source record the S-brane source action, Lorentzian continuation, stability and semiclassical control as model-specific missing data; the metric supplies the Euclidean boundary and cap geometry only. Neither channel is a universal vacuum-decay law.

## Example references

[[def-r5-alternative-cosmology-model-data]]

[M. Cicoli, J. P. Conlon, A. Maharana, S. Parameswaran, F. Quevedo and I. Zavala, String Cosmology: from the Early Universe to Today, arXiv:2303.04819v2](https://arxiv.org/pdf/2303.04819v2)

## Facts & Assumptions

[F1] [[def-r5-alternative-cosmology-model-data]]: Each cosmological datum must state its source, boundary and transition prescriptions, perturbation transfer, and control regime; an absent continuation is not inferred.

[A1] Adopt the source-reported five-dimensional Euclidean Kaluza-Klein instanton $ds_E^2=\frac{dr^2}{1-R^2/r^2}+r^2(d\theta^2+\cos^2\theta\,d\Omega_2^2)+R^2(1-R^2/r^2)d\phi^2$ on the smooth manifold obtained from $[R,\infty)\times S^3\times S^1$ by collapsing the $\phi$-circle at $r=R$. Here $R,r$ are lengths, $\phi$ has period $2\pi$, $\theta$ and the $S^2$ coordinates are dimensionless, and $d\Omega_2^2$ is the unit round metric. The circle cap is smooth with this period; the configuration is not by itself a decay probability or a full string compactification.

## Verification

**Given:** [A1] and the source's distinct S-brane and bubble-of-nothing interpretations.

1.1 Near $r=R$, set $\rho^2=2R(r-R)$, so $\rho$ has units of length. Then $1-R^2/r^2=\rho^2/R^2+O(\rho^4/R^4)$ and $dr^2/(1-R^2/r^2)=d\rho^2+O(\rho^2/R^2)d\rho^2$. The last metric term is $\rho^2d\phi^2+O(\rho^4/R^2)d\phi^2$. Thus the $(r,\phi)$ part extends as a smooth polar disk at $\rho=0$ precisely with the stated $2\pi$ period; the remaining factor tends to $R^2d\Omega_3^2$. [given, A1, algebra]

2.1 As $r\to\infty$, $1-R^2/r^2\to1$, so the metric approaches $dr^2+r^2d\Omega_3^2+R^2d\phi^2$, the Euclidean Kaluza-Klein vacuum with circle radius $R$. The instanton therefore has the source's stated asymptotic boundary geometry and a smooth circle cap. [A1, step 1.1, algebra]

2.2 The S-brane datum in this example is a spacelike defect worldvolume; the bubble datum in [A1] is a Euclidean instanton with a compact circle that degenerates at a smooth cap. Their geometric supports and continuation data differ, so identifying either one with the other would add an unstated premise. [F1, A1, step 1.1]

3.1 An analytic continuation of the Euclidean saddle is a separately chosen prescription for obtaining a Lorentzian expanding bubble. Steps 1.1–2.1 establish only the cap and asymptotic geometry; they do not compute a nucleation rate, prove stability, specify a universal path-integral measure, or establish a global string solution. [F1, A1, step 2.1, step 2.2] ∎
