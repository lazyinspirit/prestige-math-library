---
id: lem-pe05-hll-depth-flux-decomposition
kind: lemma
title: HLL depth flux is a bounded outflow/inflow combination
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-pe05-hydrostatic-hll-scheme]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "E. Audusse, F. Bouchut, M.-O. Bristeau, R. Klein, and B. Perthame, A Fast and Stable Well-Balanced Scheme with Hydrostatic Reconstruction for Shallow Water Flows"
      url: "https://publications.imp.fu-berlin.de/478/1/file_2004_siam.pdf"
      locator: "Complete 16-page paper; §2.2, Proposition 2.2 and CFL proof, printed pp. 2056–2057; its homogeneous-flux positivity hypothesis is not imported."
    - title: "D. I. Ketcheson, R. J. LeVeque, and M. J. del Razo, Riemann Problems and Jupyter Solutions, Chapter 12"
      url: "https://www.clawpack.org/riemann_book/html/Shallow_water_approximate.html"
      locator: "Complete chapter; §HLL solver, middle-state conservation formula and HLL flux, lines 367–426. Its Roe-derived speed choice is not imported."
---

## Statement

At a face of the scheme in [[def-pe05-hydrostatic-hll-scheme]], write $\alpha=a_R$ and $\beta=-a_L$. There are coefficients $p,q\ge0$ such that
$$\widehat F^h=p h_L^*-q h_R^*,\qquad p\le\alpha,\qquad q\le\beta.$$
If $\alpha>0$ and $h_L^*>0$, then $p<\alpha$; if $\beta>0$ and $h_R^*>0$, then $q<\beta$. These statements include the branches where one speed is zero and the all-dry branch.

## Facts & Assumptions

**Given:** The hydrostatic reconstructed states, physical flux and HLL branch definitions. Derive the mass-flux coefficients and their bounds without assuming exact Riemann speeds.

[F1] [[def-pe05-hydrostatic-hll-scheme]]: $\alpha=\max(0,u_L^*+c_L^*,u_R^*+c_R^*)$, $\beta=\max(0,c_L^*-u_L^*,c_R^*-u_R^*)$, and the middle mass flux is the first component of the displayed HLL formula.

[F2] [[def-pe05-hydrostatic-hll-scheme]]: $F^h(U_s^*)=h_s^*u_s^*$, and $c_s^*=\sqrt{g h_s^*}$; when $h_s^*=0$, both $u_s^*$ and $F(U_s^*)$ are zero.

## Proof

1.1 In the middle branch $\alpha,\beta>0$. Define $p=\alpha(u_L^*+\beta)/(\alpha+\beta)$ and $q=\beta(\alpha-u_R^*)/(\alpha+\beta)$. Substituting $a_L=-\beta$ and $a_R=\alpha$ into [F1], then using [F2], gives $\widehat F^h=(\alpha h_L^*u_L^*+\beta h_R^*u_R^*-\alpha\beta(h_R^*-h_L^*))/(\alpha+\beta)=p h_L^*-q h_R^*$. [given, F1, F2, algebra]

2.1 The speed definitions give $u_L^*+\beta\ge c_L^*\ge0$, $\alpha-u_L^*\ge c_L^*\ge0$, $\alpha-u_R^*\ge c_R^*\ge0$, and $\beta+u_R^*\ge c_R^*\ge0$. Hence the coefficients in step 1.1 satisfy $p,q\ge0$, $p\le\alpha$, and $q\le\beta$. When $h_L^*>0$, $c_L^*>0$ and $\alpha-u_L^*>0$, so $p<\alpha$; when $h_R^*>0$, $c_R^*>0$ and $\beta+u_R^*>0$, so $q<\beta$. [F1, F2, step 1.1, algebra]

3.1 If $a_L=0<a_R$, the first HLL branch gives $\widehat F^h=h_L^*u_L^*$; the speed definitions imply $u_L^*\ge c_L^*\ge0$ and $\alpha\ge u_L^*+c_L^*$, so take $p=u_L^*$ and $q=0$. If $a_L<0=a_R$, the second branch gives $\widehat F^h=h_R^*u_R^*$, with $u_R^*\le-c_R^*\le0$ and $\beta\ge c_R^*-u_R^*$, so take $p=0$ and $q=-u_R^*$. If both speeds vanish, their definitions force $u_s^*-c_s^*\ge0$ and $u_s^*+c_s^*\le0$ on each side, hence $c_s^*=u_s^*=h_s^*=0$ and the first branch returns zero. These choices satisfy the bounds in step 2.1 and cover every equality-speed branch. [F1, F2, step 2.1, algebra] ∎
