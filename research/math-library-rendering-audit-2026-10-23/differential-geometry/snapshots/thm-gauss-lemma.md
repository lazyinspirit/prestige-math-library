---
id: "thm-gauss-lemma"
kind: "theorem"
title: "Gauss lemma"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["thm-fundamental-theorem-of-riemannian-geometry","prop-exponential-map-scales-geodesic-time","thm-the-exponential-domain-is-open-and-the-exponential-map-is-smooth","prop-geodesics-have-constant-speed-for-a-metric-compatible-connection","def-levi-civita-connection","def-metric-compatible-connection-on-a-riemannian-vector-bundle","prop-torsion-free-is-equivalent-to-symmetric-christoffel-symbols-in-coordinate-frames","cor-zero-derivative-implies-constant","def-countable-choice"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry, Lemma 18.1.2 and complete proof, pp.134--135
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $p$ lie in a Riemannian manifold without boundary, let $v\in\mathcal E_p$, and let $w\in T_pM$. Then
$$d(\exp_p)_v(v)=\dot\gamma_{p,v}(1),\qquad g_{\exp_p(v)}\bigl(d(\exp_p)_v(v),d(\exp_p)_v(w)\bigr)=g_p(v,w).$$
Consequently $|d(\exp_p)_v(v)|_g^2=|v|_g^2$. If $v\ne0$ and $w$ is tangent at $v$ to the sphere of radius $|v|_g$ in $T_pM$, equivalently $g_p(v,w)=0$, then the images of the radial and spherical directions are orthogonal.

## Facts & Assumptions

**Given:** The point and tangent vectors in the statement, and the Levi--Civita connection supplied by the metric.

[A1] [[def-countable-choice]] is the assumed $\mathrm{AC}_\omega$.

[F1] Under [A1], [[thm-the-exponential-domain-is-open-and-the-exponential-map-is-smooth]] makes $\mathcal E_p$ open and $\exp_p$ smooth; [[prop-exponential-map-scales-geodesic-time]] makes it star-shaped and identifies $\exp_p(tz)=\gamma_{p,z}(t)$ whenever $z\in\mathcal E_p$ and $0\le t\le1$.

[F2] [[thm-fundamental-theorem-of-riemannian-geometry]] supplies the unique Levi--Civita connection. By [[def-levi-civita-connection]], [[def-metric-compatible-connection-on-a-riemannian-vector-bundle]], and [[prop-torsion-free-is-equivalent-to-symmetric-christoffel-symbols-in-coordinate-frames]], it obeys the metric product rule and has symmetric lower Christoffel indices.

[F3] [[prop-geodesics-have-constant-speed-for-a-metric-compatible-connection]] gives $|\dot\gamma_{p,z}(t)|_g^2=|z|_g^2$. A continuous real function on an interval whose derivative is zero is constant by [[cor-zero-derivative-implies-constant]].

## Proof

**Proof technique:** direct.

1.1 Openness in [F1] gives $\eta>0$ such that $v+sw\in\mathcal E_p$ for $|s|<\eta$. Star-shapedness then makes $$F(s,t)=\exp_p(t(v+sw))=\gamma_{p,v+sw}(t)$$ a smooth map for $|s|<\eta$ and $0\le t\le1$. Put $J=\partial_sF|_{s=0}$ and $R=\partial_tF|_{s=0}$. Then $J(1)=d(\exp_p)_v(w)$ and $R(t)=\dot\gamma_{p,v}(t)$. [F1, given]

2.1 For $f(t)=g(J(t),R(t))$, metric compatibility gives $$f'=g(D_tJ,R)+g(J,D_tR).$$ Each longitudinal curve of $F$ is a geodesic, so the second term is zero. In local coordinates, mixed-partial equality and the Christoffel symmetry in [F2] give $D_t\partial_sF=D_s\partial_tF$. Therefore [F3] yields $$f'(t)=g(D_s\partial_tF,R)|_{s=0}=\left.\frac12\partial_s\right|_0|\partial_tF|_g^2=\left.\frac12\partial_s\right|_0|v+sw|_g^2=g_p(v,w).$$ [F2, F3, step 1.1]

3.1 Since $F(s,0)=p$, one has $J(0)=0$ and hence $f(0)=0$. Subtracting $t\,g_p(v,w)$ from $f$ gives a function with zero derivative, so [F3] gives $f(t)=t\,g_p(v,w)$. At $t=1$ this is $$g_{\exp_p(v)}\bigl(d(\exp_p)_v(w),\dot\gamma_{p,v}(1)\bigr)=g_p(v,w).$$ [F3, step 1.1, step 2.1]

4.1 Differentiating the scaling identity $\exp_p((1+s)v)=\gamma_{p,v}(1+s)$ at $s=0$ gives $d(\exp_p)_v(v)=\dot\gamma_{p,v}(1)$. Substitution in step 3.1 proves the asserted bilinear identity. Taking $w=v$ proves $|d(\exp_p)_v(v)|_g^2=|v|_g^2$. [F1, step 3.1]

5.1 Let $v\ne0$ and $r=|v|_g$. If a smooth curve $c(s)$ in the radius-$r$ sphere has $c(0)=v$ and $c'(0)=w$, differentiating $|c(s)|_g^2=r^2$ gives $g_p(v,w)=0$. Conversely, when $g_p(v,w)=0$, the curve $c(s)=r(v+sw)/|v+sw|_g$ is defined near zero, lies in that sphere, and has derivative $w$ at zero. Thus the tangent space is exactly $v^\perp$, and step 4.1 proves the orthogonality assertion. [step 4.1, algebra]

6.1 At $v=0$ the radial vector and its image are zero, so both identities hold; the radius-zero sphere claim was explicitly restricted to $v\ne0$. In dimension zero only this case occurs; in dimension one a positive-radius sphere has zero tangent space. An empty manifold has no $p$. The parameter endpoints $t=0,1$ lie in the smooth variation supplied by star-shapedness, and no exponential-domain boundary point is used. Assumption [A1] is used exactly through [F1] for the global exponential construction; the finite-dimensional calculation adds no choice. [A1, F1, F2, F3, step 1.1, step 3.1, step 4.1, step 5.1] ∎
