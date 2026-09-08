---
id: ex-punctured-domains-and-truncated-cones-with-explicit-faces
kind: example
title: Holes and truncated space-time cones
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: Hunter, Notes on Partial Differential Equations
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: Hunter §1.12, Theorem 1.46 and piecewise-boundary discussion, printed pp. 17–18 (PDF pp. 23–24). The hole orientation, cone presentation, and all three tip estimates are explicitly derived here, rather than attributed to an unstated rough-boundary theorem.
status: draft
origin: pipeline
proof_strategy: direct
deps: ["def-bounded-piecewise-c-one-euclidean-domain", "thm-divergence-theorem-for-bounded-piecewise-c-one-domains", "lem-euclidean-chart-measure-agrees-with-polar-surface-measure", "thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces"]
---

## Example

Assume $\mathrm{AC}_\omega$. Removing $\overline B_r(a)\subset\Omega$ from a bounded $C^1$ domain, with positive distance from $\partial\Omega$ and r>0, adds the boundary normal $-(x-a)/r$ on the hole. In spatial dimension $d\ge1$, let $a_0<b_0$ and $R(t)=R_0+c(t-a_0)>0$ on $[a_0,b_0]$. The space-time region $K=\{(x,t):a_0<t<b_0,\ |x|<R(t)\}$ has a specified finite piecewise $C^1$ presentation with bottom, top, and lateral faces. The lateral outward normal is $(x/|x|,-c)/\sqrt{1+c^2}$. Its divergence formula passes to a conical tip by truncation for fields whose values and first interior derivatives extend continuously and boundedly to the tip.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$. Use the positively separated spherical hole, and the positive-radius truncated cone parameters, specified in the Example. For the tip limit assume bounded continuous field values and first derivatives up to the tip.

[F1] A presentation specifies compact regular faces, surface-null edges, and actual one-sided normals. ([[def-bounded-piecewise-c-one-euclidean-domain]]).

[F2] The finite-face divergence formula holds. ([[thm-divergence-theorem-for-bounded-piecewise-c-one-domains]]).

[F3] Sphere density scales and its area is d times unit-ball volume. ([[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]]).

[F4] Absolutely integrable functions can be integrated by slices. ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

## Verification

1.1 Write $\Omega^*=\Omega\setminus\overline B_r(a)$. Its two boundary parts are separated by a positive distance, so their original graph neighborhoods can be shrunk to exclude the other part. The old outward normals are unchanged. At the new sphere the side belonging to $\Omega^*$ is $|x-a|>r$, so its outward direction points into the deleted ball and its normal is $-(x-a)/r$. A finite subdivision of its compact C1 boundary into chart faces gives the presentation F1: choose finitely many small closed graph-coordinate boxes covering the boundary, remove previous box interiors in their order, and include their boundaries in E. Each such boundary is a Lipschitz image of parameter-box sides, hence surface-null in overlapping charts; the transition maps are C1 with bounded derivatives on these compact boxes. F2 then applies. For an explicit instance take concentric balls $\Omega^*=B_R(0)\setminus\overline B_r(0)$ and $F=x$, $0<r<R$. The outer flux is $R|\partial B_R|=n|B_R|$ and the inner flux is $-r|\partial B_r|=-n|B_r|$ by F3, giving $n(|B_R|-|B_r|)=\int_{\Omega^*}\operatorname{div}F$. [given, F1, F2, F3, algebra]

1.2 For K the caps are the closed d-dimensional balls in the planes $t=a_0,b_0$, with normals $-e_t,+e_t$. For d at least two, cover the unit sphere by the 2d closed patches on which a chosen signed coordinate has maximal absolute value. Such a patch is parametrized, after coordinate permutation, by $\omega(y)=(y,\pm1)/\sqrt{1+|y|^2}$ for $y\in[-1,1]^{d-1}$, with the corresponding sign in the other coordinates immaterial to its image. The map is regular on an open neighborhood of this cube. Lateral faces are $X(y,t)=(R(t)\omega(y),t)$ on the closed cube times $[a_0,b_0]$. Because R is strictly positive, these are regular compact hypersurface patches. Their overlaps lie on parameter-box boundaries. Put these seams and both rims into E. Parameter-box boundaries are null; C1 transition maps on compact subpatches are Lipschitz, so they preserve these null sets (cover by cubes and multiply their volumes by a fixed Lipschitz bound to the parameter dimension). On a cap its rim is null: enclosing it in annuli of thickness epsilon gives volume tending to zero by ball scaling from F3. For d=1 the caps are intervals and the lateral faces are the two straight segments $(\pm R(t),t)$; E consists of their four endpoints. Off E every face is smooth and K is on the stated one side. This verifies all of F1. [given, F1, F3, algebra]

2.1 On the lateral face $g(x,t)=|x|-R(t)$ vanishes and K is $g<0$; $\nabla g=(\omega,-c)$ is nonzero and points outward. Thus $\nu=(\omega,-c)/\sqrt{1+c^2}$. In the parametrization of step 1.2 the tangential y columns are $(R D\omega,0)$ and the time column is $(c\omega,1)$. Their cross inner products vanish because $\omega\cdot D\omega=0$. The Gram determinant is therefore $(1+c^2)R^{2d-2}\det(D\omega^TD\omega)$, giving $dS=\sqrt{1+c^2}R(t)^{d-1}d\sigma(\omega)dt$ by F3. For d=1 each of the two rays has arclength density $\sqrt{1+c^2}dt$, the same formula with counting measure on $S^0$. F2 now gives the complete cap-plus-side identity for every C1 field on the closure of K. [step 1.2, F2, F3, algebra]

3.1 As a direct calculation take the constant space-time field $F=e_t$, of divergence zero. Put $v_d=|B_1^d|$ (so $v_1=2$). The two cap fluxes sum to $v_d(R(b_0)^d-R(a_0)^d)$. The lateral flux, by step 2.1 and $|S^{d-1}|=dv_d$ from F3 for d at least two (and the two rays for d=1), is $-c d v_d\int_{a_0}^{b_0}R(t)^{d-1}dt=-v_d(R(b_0)^d-R(a_0)^d)$, using $\frac{d}{dt}R(t)^d=dcR(t)^{d-1}$. This equality also holds when c=0 because both expressions vanish; no division by c is required. The total flux is exactly zero. [step 2.1, F3, algebra]

4.1 For a bottom tip let $R(t)=c(t-a_0)$ with c>0, and truncate at $a_0+\delta$. Steps 1.2–2.1 give F2 on the truncated region. If $|F|\le M$ and $|\operatorname{div}F|\le L$ on the full closure, the artificial cap flux is at most $M v_d(c\delta)^d$. F4, applied to the bounded measurable indicator times the bounded divergence on the bounded cylinder, bounds the omitted volume integral by $L v_d c^d\delta^{d+1}/(d+1)$. The omitted lateral flux is bounded by $M\sqrt{1+c^2}d v_d\int_0^\delta(cs)^{d-1}ds=M\sqrt{1+c^2}v_dc^{d-1}\delta^d$, including d=1 via its two rays. Each error tends to zero. The unchanged top cap, the lateral improper integral (absolutely convergent by the same estimate), and the full volume integral therefore satisfy the limiting identity. For a top tip substitute $s=b_0-t$ and replace c by $|c|$ in all three bounds; the artificial cap orientation changes but its absolute bound does not. Thus no regular chart at the apex is assumed. [step 2.1, F2, F4, algebra] ∎

## Source notes

Hunter §1.12, Theorem 1.46 and piecewise-boundary discussion, printed pp. 17–18 (PDF pp. 23–24). The hole orientation, cone presentation, and all three tip estimates are explicitly derived here, rather than attributed to an unstated rough-boundary theorem.

