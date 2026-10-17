---
id: thm-dirichlet-leapfrog-discrete-energy
kind: theorem
title: Coercive discrete energy for the Dirichlet leapfrog wave scheme
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps: [def-centered-leapfrog-wave-scheme, lem-dirichlet-grid-summation-by-parts, lem-dirichlet-grid-poincare-inequality]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Endre Süli, B6.1 Numerical Solution of Partial Differential Equations"
      url: "https://people.maths.ox.ac.uk/suli/nspdes.pdf"
      locator: "§6.3, PDF pp. 85–89: discrete wave-energy identity, summation by parts, positivity for cΔt/Δx<1, and endpoint loss of uniform coercivity."
---

## Statement

For the homogeneous Dirichlet recurrence of [[def-centered-leapfrog-wave-scheme]], let $0<\nu=ck/h<1$, $V^n=(U^{n+1}-U^n)/k$, and $\bar U^n=(U^{n+1}+U^n)/2$. Define
$$ E^{n+1/2}=\frac12\|V^n\|_h^2+\frac{c^2}{2}\langle D_+U^{n+1},D_+U^n\rangle_{e,h}. $$
Then $E^{n+1/2}$ is independent of $n$ and
$$ E^{n+1/2}\ge\frac{1-\nu^2}{2}\|V^n\|_h^2+\frac{c^2}{2}\|D_+\bar U^n\|_{e,h}^2. $$
Consequently it is a positive quadratic form on adjacent zero-boundary states. For mesh families with fixed wave speed $c>0$, fixed interval length $L$, and $\nu\le\nu_0<1$, it controls the interior state and its discrete velocity with constants independent of $h$.

## Facts & Assumptions

**Given:** A fixed wave speed $c>0$, mesh sizes $h,k>0$, homogeneous Dirichlet endpoint values, and the source-free centered leapfrog recurrence.

[F1] The recurrence is $\delta_t^2U^n=c^2\Delta_hU^n$, with $U_0^n=U_N^n=0$ ([[def-centered-leapfrog-wave-scheme]]).

[F2] For zero endpoint values, $\langle u,-\Delta_hv\rangle_h=\langle D_+u,D_+v\rangle_{e,h}$; this is symmetric in $u,v$ ([[lem-dirichlet-grid-summation-by-parts]]).

[F3] If $w_0=w_N=0$ on length $L=Nh$, then $\|w\|_h\le L\|D_+w\|_{e,h}$ ([[lem-dirichlet-grid-poincare-inequality]]).

## Proof

1.1 In the quadratic term, $D_+U^{n+1}=D_+\bar U^n+\frac{k}{2}D_+V^n$ and $D_+U^n=D_+\bar U^n-\frac{k}{2}D_+V^n$. Expanding their real edge inner product gives $$ E^{n+1/2}=\frac12\|V^n\|_h^2+\frac{c^2}{2}\|D_+\bar U^n\|_{e,h}^2-\frac{c^2k^2}{8}\|D_+V^n\|_{e,h}^2. $$ [F1, algebra]

2.1 For any zero-endpoint grid function $v$, $(v_{j+1}-v_j)^2\le2v_{j+1}^2+2v_j^2$ and summing over edges gives $$ \|D_+v\|_{e,h}^2=\frac1h\sum_{j=0}^{N-1}(v_{j+1}-v_j)^2\le\frac4{h^2}\|v\|_h^2. $$ Apply this to $V^n$, and use $\nu=ck/h$, in step 1.1 to obtain the asserted lower bound. Since $1-\nu^2>0$, zero energy forces $V^n=0$ and $D_+\bar U^n=0$. [given, step 1.1, algebra]

3.1 A zero-endpoint grid function with $D_+w=0$ is constant across all edges and therefore zero. Hence step 2.1 shows $E^{n+1/2}=0$ only when $V^n=0$ and $\bar U^n=0$, equivalently $U^{n+1}=U^n=0$. For uniform state control, [F3] bounds $\|\bar U^n\|_h$ by $L\|D_+\bar U^n\|_{e,h}$, and $U^{n+1},U^n=\bar U^n\pm(k/2)V^n$; when $\nu\le\nu_0<1$, the lower-bound coefficients and $k\le\nu_0L/(Nc)\le\nu_0L/c$ are uniform in the mesh. [F3, step 2.1, algebra]

4.1 Let $\delta_t^0U^n=(U^{n+1}-U^{n-1})/(2k)$. Taking the interior inner product of $\delta_t^2U^n+c^2(-\Delta_h)U^n=0$ with $\delta_t^0U^n$, the first term is $(\|V^n\|_h^2-\|V^{n-1}\|_h^2)/(2k)$. By [F2], the second is $$ \frac{c^2}{2k}\left(\langle D_+U^{n+1},D_+U^n\rangle_{e,h}-\langle D_+U^n,D_+U^{n-1}\rangle_{e,h}\right). $$ Their sum is $(E^{n+1/2}-E^{n-1/2})/k=0$. Thus the energy is conserved. [F1, F2, step 1.1, algebra] ∎
