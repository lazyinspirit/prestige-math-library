---
id: prop-emg-xs-mp-multicenter
kind: proposition
title: Finite positive multicenter MP exterior and fluxes
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 4
deps:
  - def-emg-xs-harmonic-mp
  - thm-emg-xs-mp-verification
  - def-emg-xs-geometric-electrovac
  - lem-emg-lorentz-hodge-calculus
dependency_roles:
  def-emg-xs-harmonic-mp: mathematical-premise
  thm-emg-xs-mp-verification: mathematical-premise
  def-emg-xs-geometric-electrovac: mathematical-premise
  lem-emg-lorentz-hodge-calculus: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: David Tong, General Relativity, complete author-hosted lecture notes
      url: https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf
      locator: Section 6, “Multi-Black Hole Solutions”; the local proof gives the precise exterior domain, signs, finite-sphere fluxes, and limitations.
    - title: Reinhard Meinel and Moritz Hütten, On the black hole limit of electrically counterpoised dust configurations, arXiv:1105.3807v3
      url: https://arxiv.org/pdf/1105.3807
      locator: Section 2, equations (1)-(4), PDF pages 2-3, for the Papapetrou-Majumdar ansatz; the article’s matter model and units are not imported.
    - title: Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1, complete 238-page lecture notes
      url: https://arxiv.org/pdf/gr-qc/9712019v1
      locator: Chapter 3, exterior calculus and curvature conventions; the flux calculation below is local.
verification:
  precheck: pass
---

## Statement

Let $N\ge1$ be an integer, let $a_1,\ldots,a_N\in\mathbb R^3$ be distinct, let $m_A>0$ have length units, and let $\sigma\in\{-1,+1\}$. On $D=\mathbb R^3\setminus\{a_1,\ldots,a_N\}$ define

$$H(x)=1+\sum_{A=1}^N\frac{m_A}{|x-a_A|}.$$

Then $H$ is smooth, positive and Euclidean harmonic on $D$, so [[def-emg-xs-harmonic-mp]] and [[thm-emg-xs-mp-verification]] give a smooth source-free geometric electrovac datum on $\mathbb R_{x^0}\times D$. For any fixed $s\in\mathbb R_{x^0}$ and any outward-oriented Euclidean sphere $S\subset D$, use the inclusion $i_{s,S}:S\to\mathbb R_{x^0}\times D$, $i_{s,S}(x)=(s,x)$, and give its image the transported sphere orientation. In the flux notation below, $q_e(S)$ and $q_m(S)$ mean the fluxes through $i_{s,S}(S)$, equivalently $(4\pi)^{-1}\int_S i_{s,S}^*(\star_g\mathcal F_\sigma)$ and $(4\pi)^{-1}\int_S i_{s,S}^*\mathcal F_\sigma$; the values are independent of $s$. For each $A$ and $r>0$, every coordinate sphere $S_A(r)=\{x:|x-a_A|=r\}$ whose closed ball contains no other center has electric flux $q_e(S_A(r))=\sigma m_A$ and magnetic flux $q_m(S_A(r))=0$. If a coordinate sphere with $R>0$, $S_R=\{x:|x|=R\}$ strictly encloses all centers, its fluxes are $q_e(S_R)=\sigma\sum_A m_A$ and $q_m(S_R)=0$. No center is included in the manifold; these are fluxes through regular spheres, not matter-source, horizon-extension, stability, or completeness claims.

## Facts & Assumptions

**Given:** The Euclidean coordinate domain, finitely many distinct centers, positive length parameters, and the data definitions and flux conventions below.

[F1] [[def-emg-xs-harmonic-mp]] defines the metric, global potential, field $\mathcal F_\sigma$, orientation, and units for any smooth positive harmonic $H$.

[F2] [[thm-emg-xs-mp-verification]] proves that these data satisfy $d\mathcal F_\sigma=d(\star_g\mathcal F_\sigma)=0$ and $\operatorname{Ric}=2Q(\mathcal F_\sigma)$.

[F3] [[def-emg-xs-geometric-electrovac]] defines $q_e(S)=(4\pi)^{-1}\int_S\star_g\mathcal F$ and $q_m(S)=(4\pi)^{-1}\int_S\mathcal F$ for oriented embedded spheres.

[F4] [[lem-emg-lorentz-hodge-calculus]] gives $(\star_gF)_{ab}=\tfrac12(\mathrm{vol}_g)_{abcd}F^{cd}$ in a positively oriented chart.

[A1] All radii $r,R$ used below are positive, and every coordinate sphere is oriented by the outward Euclidean orientation from its bounded ball. The centers are distinct, $m_A>0$, every isolated sphere has a closed ball containing no other center, and every outer sphere considered strictly encloses all centers.

## Proof

1.1 For $z\ne0$, direct differentiation gives $\partial_i|z|^{-1}=-z_i|z|^{-3}$ and $\partial_i^2|z|^{-1}=-|z|^{-3}+3z_i^2|z|^{-5}$. Summing over $i$ yields $\Delta_\delta|z|^{-1}=-3|z|^{-3}+3|z|^2|z|^{-5}=0$. Every term in $H$ is smooth on $D$, and every term is positive there, so $H>0$ and $\Delta_\delta H=0$ on $D$. [given, A1, algebra]

1.2 Inverting the diagonal metric in [F1] gives $g^{00}=-H^2$ and $g^{ij}=H^{-2}\delta^{ij}$, so raising $\mathcal F_{i0}=-\sigma H_i/H^2$ gives $\mathcal F^{i0}=\sigma H_i/H^2$. The metric determinant is $(-H^{-2})(H^2)^3=-H^4$, so the oriented volume form is $\mathrm{vol}_g=H^2dx^0\wedge dx^1\wedge dx^2\wedge dx^3$. The Hodge formula [F4], with $\epsilon_{123}=1$ and $\epsilon_{ijk}$ alternating, therefore gives $(\star_g\mathcal F_\sigma)_{ij}=-\sigma\epsilon_{ijk}H_k$. For each sphere $S\subset D$ and fixed $s$, the map $i_{s,S}$ in the Statement is smooth and injective, its differential is $v\mapsto(0,v)$ of rank two, and projection onto $D$ restricts to its continuous inverse on its image. Thus it is a smooth embedding as required by [F3]. The sphere is compact and disjoint from all centers, so both forms are smooth on a neighborhood of its image and their pullbacks are admissible for [F3]. Pulling back to the outward-oriented Euclidean sphere gives $\int_S i_{s,S}^*(\star_g\mathcal F_\sigma)=-\sigma\int_S\partial_\nu H\,dS_\delta$, because $\partial_\nu H=n^kH_k$ and the induced oriented area form has components $\epsilon_{ijk}n^k dS_\delta$. The pullback of $\mathcal F_\sigma$ to each spatial sphere is zero because every term in [F1] contains $dx^0$, which vanishes on its tangent vectors; hence $q_m(S)=0$. All pulled-back coefficients are independent of $s$, so both fluxes are independent of the chosen time slice. [given, F1, F3, F4, algebra]

1.3 Let $S_r(a)$ be a Euclidean sphere with center $a$ and radius $r$, and let $m/|x-b|$ be one term in $H$, where $d:=|b-a|\ne r$. At $x=a+rn$ with $n\in S^2$, its outward normal derivative is $-m(r-n\cdot(b-a))/|rn-(b-a)|^3$. The sphere area element is $r^2d\Omega$, where $d\Omega=\sin\theta\,d\theta\,d\phi$ and $\int_{S^2}d\Omega=2\pi\int_0^\pi\sin\theta\,d\theta=4\pi$. If $d=0$, direct integration gives flux $-4\pi m$. If $d>0$, choose the polar axis along $b-a$; this orthogonal change preserves the induced sphere area. With $u=\cos\theta$ and $n\cdot(b-a)=du$, the flux is $-2\pi mr^2J$, where $$J:=\int_{-1}^{1}\frac{r-du}{(r^2+d^2-2rdu)^{3/2}}\,du.$$ Set $w=r^2+d^2-2rdu$. Then $du=-dw/(2rd)$, the endpoint square roots for $w$ are $r+d$ and $|r-d|$, and $r-du=(r^2-d^2+w)/(2r)$. Therefore $$J=\frac1{4r^2d}\left((r^2-d^2)\int_{(r-d)^2}^{(r+d)^2}w^{-3/2}\,dw+\int_{(r-d)^2}^{(r+d)^2}w^{-1/2}\,dw\right).$$ Using antiderivatives $-2w^{-1/2}$ and $2w^{1/2}$ gives $$J=\frac{(r^2-d^2)\bigl(|r-d|^{-1}-(r+d)^{-1}\bigr)+(r+d-|r-d|)}{2r^2d}.$$ If $d<r$, the numerator is $4d$, so $J=2/r^2$; if $d>r$, the numerator is $0$, so $J=0$. Thus a Coulomb term contributes $-4\pi m$ to the outward flux exactly when its center lies inside the sphere, and zero when its center lies outside. [given, algebra]

2.1 The conditions in [F1] now hold, so the defined data exist on the entire punctured domain. Applying [F2] proves the source-free field equations there; no equation is asserted at a removed center. [given, F1, F2, step 1.1]

2.2 For an isolated sphere $S_A(r)$, its own center has $d=0$, while each other center has distance $d_{AB}>r$ by [A1]. Applying step 1.3 term by term gives $\int_{S_A(r)}\partial_\nu H\,dS_\delta=-4\pi m_A$. Step 1.2 yields $q_e(S_A(r))=\sigma m_A$, and that step also gives $q_m(S_A(r))=0$. [given, A1, F3, step 1.2, step 1.3, algebra]

3.1 On an outer sphere that strictly encloses every center, each term has $d=|a_A|<R$. Step 1.3 gives $\int_{S_R}\partial_\nu H\,dS_\delta=-4\pi\sum_A m_A$. Step 1.2 therefore yields $q_e(S_R)=\sigma\sum_A m_A$ and $q_m(S_R)=0$. [given, A1, F3, step 1.2, step 1.3, algebra] ∎
