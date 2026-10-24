---
id: prop-killing-fields-restrict-to-jacobi-fields-along-geodesics
kind: proposition
title: Killing fields restrict to Jacobi fields along geodesics
status: published
origin: pipeline
deps:
  - def-local-and-global-flow
  - def-lie-derivative-of-a-tensor-field
  - prop-a-tensor-field-is-invariant-under-a-flow-if-and-only-if-its-lie-derivative-vanishes
  - thm-fundamental-theorem-on-flows
  - thm-unique-maximal-integral-curve-through-each-point
  - def-riemannian-isometry-and-local-isometry
  - lem-local-isometries-send-geodesics-to-geodesics
  - def-geodesic-variation
  - thm-variation-field-of-a-geodesic-variation-is-a-jacobi-field
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: "Jeffrey M. Lee, Differential and Physical Geometry (draft)"
      url: "https://eclass.upatras.gr/modules/document/file.php/MATH902/NOTES/Lee_Differential%20Geometry.pdf"
      locator: "Chapter 18, Theorem 18.2 and Proposition 18.1, printed pp.454-456 (PDF labels P465-467)"
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf"
      locator: "Proposition 22.2.1 forward proof, printed pp.162-163 (PDF labels P169-170), for the geodesic-variation implication"
---

## Statement

Let $(M,g)$ be a smooth Riemannian manifold without boundary, and let $X$ be
a smooth vector field with maximal local flow $\Phi:\mathcal D\to M$. For this
proposition, call $X$ a **Killing field** when
$$\mathcal L_Xg=0.$$
If $I\subseteq\mathbb R$ is a nondegenerate interval and
$\gamma:I\to M$ is an affinely parametrized geodesic, then
$$J(t):=X_{\gamma(t)}$$
is a Jacobi field along $\gamma$. The claim is local along the parameter
interval: each compact nondegenerate subinterval is treated on a common
flow-time interval, and included endpoints use one-sided derivatives. No
completeness assumption is imposed.

## Facts & Assumptions

**Given:** The boundaryless Riemannian manifold $(M,g)$, the smooth vector
field $X$, its maximal local flow $\Phi$, and the affinely parametrized
geodesic $\gamma$ on the nondegenerate interval $I$.

[F1] A local flow has open domain $\mathcal D\subseteq\mathbb R\times M$
containing $\{0\}\times M$ ([[def-local-and-global-flow]]).

[F2] It satisfies $\Phi(0,p)=p$, and for each $p$ the time curve
$s\mapsto\Phi(s,p)$ is an integral curve of $X$
([[def-local-and-global-flow]]).

[F3] The maximal local flow is the smooth map assembled from the maximal
integral curves of $X$ on an open domain
([[thm-fundamental-theorem-on-flows]]).

[F4] Through each point there is a unique maximal integral curve of $X$
([[thm-unique-maximal-integral-curve-through-each-point]]).

[F5] The Lie derivative of a smooth tensor field $T$ is the derivative of its
pullback along the flow,
$$\mathcal L_XT=\left.\frac{d}{ds}\right|_{s=0}\Phi_s^*T$$
([[def-lie-derivative-of-a-tensor-field]]).

[F6] On every common local flow domain, $\Phi_s^*T=T$ for all defined $s$ if
and only if $\mathcal L_XT=0$
([[prop-a-tensor-field-is-invariant-under-a-flow-if-and-only-if-its-lie-derivative-vanishes]]).

[F7] A local Riemannian isometry is a smooth local diffeomorphism $F$ with
$F^*h=g$ ([[def-riemannian-isometry-and-local-isometry]]).

[F8] A local Riemannian isometry between boundaryless Riemannian manifolds
sends every affinely parametrized geodesic to an affinely parametrized
geodesic ([[lem-local-isometries-send-geodesics-to-geodesics]]).

[F9] A smooth map whose longitudinal curves are affinely parametrized
geodesics is a geodesic variation, and its variation field is
$\partial_sF|_{s=0}$ ([[def-geodesic-variation]]).

[F10] The variation field of a smooth geodesic variation is a Jacobi field
([[thm-variation-field-of-a-geodesic-variation-is-a-jacobi-field]]).

## Proof

**Proof technique:** differentiate the isometry flow applied to a geodesic.

1.1 Fix any compact nondegenerate subinterval $[a,b]\subseteq I$ and put $K=\gamma([a,b])$. Since $K$ is compact and the flow domain $\mathcal D$ is open with $\{0\}\times M\subseteq\mathcal D$ by [F1, F3], a finite product-neighborhood cover of $\{0\}\times K$ gives $\varepsilon>0$ and an open neighborhood $U\supseteq K$ with $(-\varepsilon,\varepsilon)\times U\subseteq\mathcal D$. Set $\Gamma(s,t)=\Phi(s,\gamma(t))$ on $(-\varepsilon,\varepsilon)\times[a,b]$; it is smooth up to the time endpoints. This finite compactness argument makes no countable selection. [F1, F3, given]

2.1 Fix $|s|<\varepsilon$ and $p\in\mathcal D_s$, and set $q=\Phi(s,p)$. The translated curve $r\mapsto\Phi(r+s,p)$ is an integral curve through $q$ on the shifted interval $\mathcal D_p-s$, which contains $-s$. By maximality and uniqueness of integral curves [F3, F4], $-s\in\mathcal D_q$ and $\Phi(-s,q)=p$. Reversing $s$ gives the inverse identity on $\mathcal D_{-s}$. Since both slices are smooth and their domains are open, $\Phi_s:\mathcal D_s\to\mathcal D_{-s}$ is a diffeomorphism with inverse $\Phi_{-s}$. Restricting to $U$ makes each $\Phi_s$ a local diffeomorphism. [F2, F3, F4, step 1.1]

3.1 The hypothesis $\mathcal L_Xg=0$ and [F6] give $\Phi_s^*g=g$ on $U$ for every $|s|<\varepsilon$. Thus each $\Phi_s|_U$ is a local Riemannian isometry by [F7]. [F5, F6, F7, step 1.1, step 2.1, given]

4.1 For each fixed $s$, [F8] applied to the local isometry from step 3.1 shows that $t\mapsto\Phi(s,\gamma(t))$ is an affinely parametrized geodesic. Hence $\Gamma$ is a geodesic variation by [F9], with variation field $V(t)=\partial_s\Gamma(0,t)$. [F8, F9, step 1.1, step 3.1]

5.1 The integral-curve property [F2] gives $V(t)=\left.\partial_s\Phi(s,\gamma(t))\right|_{s=0}=X_{\Phi(0,\gamma(t))}=X_{\gamma(t)}=J(t)$. The geodesic-variation theorem [F10] therefore makes $J$ Jacobi on $[a,b]$. [F2, F10, step 4.1]

6.1 Since $[a,b]$ was arbitrary, the Jacobi equation holds throughout $I$, with one-sided derivatives at included endpoints. If $\gamma$ is constant, every longitudinal curve of $\Gamma$ is constant in $t$, so [F10] still applies; if $X=0$, then $J=0$. The empty manifold has no supplied geodesic, dimension zero has only the zero field, and dimension one is covered by the same argument. Only finite compactness arguments are used, so neither $\mathrm{AC}_\omega$ nor full AC is invoked. The proposition is one-way, not an iff claim. [F1, F10, step 1.1, step 5.1] ∎
