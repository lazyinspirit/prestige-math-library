---
id: lem-hp-weighted-analytic-corner-pointwise-control
kind: lemma
title: Weighted analytic polygon functions have corner decay and scaled analytic bounds
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  - def-countable-choice
  - def-sobolev-space-wkp-and-its-norm
  - def-matching-affine-simplicial-meshes
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-cauchy-schwarz-in-an-inner-product-space
  - lem-shape-regular-affine-simplex-scaling
  - lem-smooth-bump-between-concentric-euclidean-balls
  - def-mollifier-family-generated-by-a-unit-mass-smooth-bump
  - def-l-one-approximate-identity-on-rn
  - prop-mollifier-families-are-l-one-approximate-identities
  - thm-l-one-approximate-identities-converge-in-l-p
  - thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign
  - thm-lebesgue-measure-of-a-box-of-every-kind
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
axiom_use: Countable Choice is used for the stated mollifier/measure interfaces and to choose compatible representatives for the countable family of weak derivatives; no full Choice, arbitrary-index selection, or Sobolev extension theorem is used.
sources:
  references:
    - title: Yanchen He, Paul Houston, Christoph Schwab, and Thomas P. Wihler, Exponential Convergence of hp-ILGFEM, version 1
      url: https://arxiv.org/pdf/2404.18569
      locator: "§2.3, equation (12), Definition 1, and the continuity assertion preceding it, PDF pp. 5–6: weighted corner regularity and its continuity context. The quantitative pointwise bounds are proved locally here."
    - title: "Martin Vohralík, Finite Element Methods, Chapter 6: hp finite elements"
      url: https://who.rocq.inria.fr/Martin.Vohralik/Enseig/FEM/FEM.pdf
      locator: "§6.4, printed pp. 56–58: polygon-corner hp convergence context. The weighted pointwise estimates needed by the local proof are supplied here."
---

## Statement

Assume Countable Choice. Let $\Omega\subset\mathbb R^2$ be a bounded open polygonal domain with finitely many straight sides and corner set $\mathcal C=\{c_1,\ldots,c_m\}$, with interior angle at each corner strictly between $0$ and $2\pi$. Let $0\le\beta_i<1$ and write $\Phi_\gamma(x)=\prod_{i=1}^m|x-c_i|^{\gamma_i}$ for a vector $\gamma\in[0,\infty)^m$. For integer $k\ge2$, define

$$
\|v\|_{H^{k,2}_\beta(\Omega)}^2=\|v\|_{H^1(\Omega)}^2+\sum_{j=2}^k\sum_{|\alpha|=j}\|\Phi_{\beta+j-2}D^\alpha v\|_{L^2(\Omega)}^2,
$$

where $(\beta+j-2)_i=\beta_i+j-2$ and a zero exponent contributes the factor one. Let $u\in H^{k,2}_\beta(\Omega)$ for every integer $k\ge2$, with real-valued weak derivatives, and suppose constants $C_u,d_u>0$ satisfy

$$
\left\|\Phi_{\beta+j-2}\sum_{|\alpha|=j}|D^\alpha u|\right\|_{L^2(\Omega)}\le C_ud_u^{j-2}(j-2)!\qquad(j\ge2).
$$

For each fixed $0<a<\min_i(1-\beta_i)$ there are constants $C,A,R>0$ such that the weak class of $u$ has a unique representative $\widetilde u\in C(\overline\Omega)$, smooth up to every open side away from corners, and for $0<r=|x-c_i|<R$,

$$
|\widetilde u(x)-\widetilde u(c_i)|\le Cr^a,\qquad |D^\alpha\widetilde u(x)|\le CA^{|\alpha|}|\alpha|!r^{a-|\alpha|}\quad(|\alpha|\ge1).
$$

On every compact subset of $\overline\Omega\setminus\mathcal C$, the derivatives satisfy ordinary factorial bounds $|D^\alpha u|\le C_0A_0^{|\alpha|}|\alpha|!$. On every shape-regular affine triangle $K\subset\Omega$ whose closure avoids $\mathcal C$ and whose ratio $h_K/\operatorname{dist}(K,\mathcal C)$ is bounded above and below by fixed positive constants, where $\operatorname{dist}(K,\mathcal C)=\inf_{x\in K,c\in\mathcal C}|x-c|$, set $r_K=\min(R,\operatorname{dist}(K,\mathcal C))$. After subtracting a suitable constant from the pullback $\widehat u$ to the reference triangle of [[def-matching-affine-simplicial-meshes]], $\|D^\alpha\widehat u\|_\infty\le C A_1^{|\alpha|}|\alpha|!r_K^a$ for every multi-index $\alpha$, with constants uniform over this family. If a shape-regular triangle $K\subset\Omega$ of diameter $h<R$ has a corner $c_i$ as a vertex, its vertex affine interpolant $a_K$ satisfies

$$
|u-a_K|_{H^1(K)}\le Ch^a,\qquad \|u-a_K\|_{L^2(K)}\le Ch^{a+1}.
$$


## Facts & Assumptions

**Given:** Countable Choice; the bounded polygon and its finite corner set; the weights $\beta_i$; the ordinary Sobolev class conventions of [[def-sobolev-space-wkp-and-its-norm]]; the stated weighted factorial bounds; and a fixed exponent $a$ as above.

[F1] Fubini applies to integrable functions on the finite rectangle patches used below. ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]])

[F2] Cauchy–Schwarz controls rectangle integrals, and the affine shape-regular bounds control pullbacks to triangles. ([[thm-cauchy-schwarz-in-an-inner-product-space]], [[lem-shape-regular-affine-simplex-scaling]])

[F3] A nonnegative smooth compactly supported bump equal to one on a smaller ball has finite positive integral; after normalization its dilates form an $L^1$ approximate identity. Convolution with each dilate is smooth and converges in $L^2$ together with weak derivatives through order two. ([[lem-smooth-bump-between-concentric-euclidean-balls]], [[def-mollifier-family-generated-by-a-unit-mass-smooth-bump]], [[def-l-one-approximate-identity-on-rn]], [[prop-mollifier-families-are-l-one-approximate-identities]], [[thm-l-one-approximate-identities-converge-in-l-p]], [[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]])

[A1] Countable Choice is exactly the choice assumption in the mollifier measure interfaces and the selection of the compatible representatives of the countable family of weak derivatives. ([[def-countable-choice]])

[F4] A nonempty open rectangle has positive Lebesgue measure; hence continuous representatives that agree almost everywhere agree on the interior and then on the closure. ([[thm-lebesgue-measure-of-a-box-of-every-kind]])

## Proof

1.1 On the unit square, for smooth $v$ the one-dimensional identity $|g(t)|\le\int_0^1|g(s)|ds+\int_0^1|g'(s)|ds$ applied first in $x$ and then in $y$ gives $\|v\|_\infty\le\|v\|_{L^1}+\|v_x\|_{L^1}+\|v_y\|_{L^1}+\|v_{xy}\|_{L^1}\le\sum_{i,j=0}^1\|\partial_x^i\partial_y^jv\|_{L^2}$ by [F2]. For $v\in H^2((0,1)^2)$ extend across $x=0$ by $Ev(x,y)=3v(-x,y)-2v(-2x,y)$ for small $x<0$, and across $x=1$ by $Ev(x,y)=3v(2-x,y)-2v(3-2x,y)$ for small $x>1$; use the same two formulas in $y$. The coefficients satisfy $3-2=1$ for values and $-3+4=1$ for first normal derivatives. For a smooth test $\phi$ across $x=0$, changing variables in the zeroth-order pairing gives $\psi_0(t)=\phi(t)-3\phi(-t)+2\phi(-t/2)$, so $\psi_0(0)=0$. For the first normal derivative, the corresponding test combination is $\psi_1(t)=\phi(t)+3\phi(-t)-4\phi(-t/2)$, also with $\psi_1(0)=0$. These formulas follow by rewriting the reflected integrals over $t>0$ and applying the chain rule. Multiply each combined test by a cutoff that is zero on $(0,\varepsilon)$ and one on $(2\varepsilon,\infty)$ before using the weak derivative identity on the original open square. If $|\chi_\varepsilon\prime|\le C/\varepsilon$, then $|\psi_j\chi_\varepsilon\prime|\le C$ on the strip because $\psi_j(t)=O(t)$; for any relevant $g\in L^2$, Cauchy--Schwarz bounds the cutoff error by $C\sqrt{2\varepsilon}\|g\|_{L^2(0,2\varepsilon)}\le C\sqrt{2\varepsilon}\|g\|_{L^2(0,1)}\to0$. Thus the reflected piecewise formulas are the weak derivatives through order two, including mixed derivatives. Changes of variables bound each derivative norm by a fixed multiple of $\|v\|_{H^2}$. Reflect successively across the four sides, cut off in the enlarged square, and mollify. For every weak derivative through order two, inserting a translated compactly supported kernel into its weak derivative identity gives $D^\alpha(v*\varphi_\varepsilon)=(D^\alpha v)*\varphi_\varepsilon$ on the original square: the sign from integration by parts cancels the sign from differentiating the kernel in its integration variable. Thus [F3] gives smooth approximants converging in $H^2$. The smooth inequality makes them uniformly Cauchy, yielding a continuous representative and the same bound for every $H^2$ class. Scaling gives $\|v\|_{L^\infty(Q)}\le C(r^{-1}\|v\|_2+\|Dv\|_2+r\|D^2v\|_2)$ on a rectangle of side comparable to $r$; a parallelogram with fixed aspect ratio has the same estimate after an affine change of variables. [A1, F1, F2, F3, given, construct]

2.1 Choose $R>0$ so distinct corner balls of radius $4R$ are disjoint and each meets only the two sides at its corner. For a point $x$ with $r=|x-c_i|<R$, choose an interior rectangle, or near one straight side an inward rectangle, of diameter comparable to $r$ and lying in $r/2<|z-c_i|<2r$. A finite angular cover gives aspect ratios and widths bounded in terms of the fixed corner angles. For each individual weak derivative $g_\alpha=D^\alpha u$ with $|\alpha|=j\ge2$, the weighted hypotheses imply $g_\alpha\in H^2$ on this rectangle. Apply the fixed second-order rectangle extension and estimate of step 1.1 to $g_\alpha$ itself. In particular, the coefficients $3,-2$ are not used to extend $u$ in arbitrary Sobolev orders and then differentiated across a reflecting side. The extension of each $g_\alpha$ is needed only through order two, so its bound is fixed, independently of $j$. On the annulus the other corner distances are bounded above and below, so at derivative order $s\ge2$, $\Phi_{\beta+s-2}\ge C^{-s}r^{\beta_i+s-2}$. The weighted hypotheses at orders $j,j+1,j+2$ therefore bound $\|g_\alpha\|_2$, $\|Dg_\alpha\|_2$, and $\|D^2g_\alpha\|_2$ respectively by $CA^j j!r^{2-\beta_i-j}$, $CA^j j!r^{1-\beta_i-j}$, and $CA^j j!r^{-\beta_i-j}$. Fixed affine changes of coordinates contribute at most another fixed base to the power $j$; the boundedly many extra derivatives and their factorial factors are absorbed into $A^j$. Multiplying these three norms by $r^{-1},1,r$ as in step 1.1 gives $|D^\alpha u(x)|\le CA^jj!r^{1-\beta_i-j}\le CA^jj!r^{a-j}$, uniformly up to an open side. On compact patches away from corners the same argument gives ordinary factorial derivative bounds. There apply step 1.1 also to $g=u$ and to each first derivative: their lower-order $L^2$ terms come from $u\in H^1$, while derivative orders two and three are bounded by the weighted hypotheses since the weights are bounded below on those patches. Thus $u$ and its gradient are bounded there, in particular on the fixed radius-$R$ arcs. These separately constructed continuous representatives of the weak derivatives agree on overlaps by [F4]. They are compatible as derivatives: on a smaller interior patch mollify $u$ itself, so each derivative converges locally in $H^2$ and therefore uniformly by step 1.1 to the representative of that weak derivative; the fundamental theorem along interior line segments passes to these uniform limits. All derivative identities then extend to an open side by continuity. Thus $u$ is smooth up to sides away from corners without an arbitrary-order reflected extension. [A1, F1, F2, F3, F4, step 1.1, given, algebra]

3.1 On the fixed arc of radius $R$ about $c_i$, step 2.1 bounds $\nabla u$. Along every ray, the Hessian bound in step 2.1 gives $|\nabla u(r,\theta)|\le C+C\int_r^R t^{-1-\beta_i}dt$. If $\beta_i>0$ this is at most $Cr^{-\beta_i}$; if $\beta_i=0$ it is at most $C(1+|\log r|)$. Since $a<1-\beta_i$, both are bounded by $Cr^{a-1}$ for $r<R$ after decreasing $R$ if needed. Integrating radially shows that $u(r,\theta)$ has a limit as $r\downarrow0$ and differs from it by at most $Cr^a$. Variation along the circular arc of radius $r$ is at most $Cr\cdot r^{a-1}=Cr^a$, so the radial limits agree for all angles; call the common value $u(c_i)$. This also proves continuity at the corner. The first-derivative estimate gives the claimed bound for $|\alpha|=1$, while step 2.1 gives it for higher orders because $r^{1-\beta_i-j}\le r^{a-j}$. [step 2.1, algebra]

4.1 For a regular triangle $K$ in the stated family, when its corner distance is sufficiently small compared with $R$ and the fixed upper bound for $h_K/\operatorname{dist}(K,\mathcal C)$, all its points lie in a single corner neighborhood; choose the constant $u(c_i)$ there; the pointwise derivative estimate and $h_K/\operatorname{dist}(K,\mathcal C)\asymp1$ give $h_K^{|\alpha|}\|D^\alpha u\|_\infty\le CA_1^{|\alpha|}|\alpha|!r_K^a$ after affine pullback and the chain rule. For the remaining triangles, their distance from all corners is bounded below by a fixed positive constant; choose the value at one point of $K$ as the constant; the compact-patch derivative bounds and bounded diameter give the same estimate after increasing $C,A_1$. The affine geometry factors are controlled by [F2]. [F2, step 2.1, step 3.1, algebra]

5.1 Let $K$ have vertex $c_i$ and diameter $h<R$. On dyadic annuli $2^{-j-1}h\le|x-c_i|\le2^{-j}h$, step 3.1 bounds $|\nabla u|^2$ by $C(2^{-j-1}h)^{2a-2}$, while the area of each annulus is at most $C(2^{-j}h)^2$. Summing the resulting geometric series gives $\|\nabla u\|_{L^2(K)}^2\le Ch^{2a}$, hence $\|\nabla u\|_2\le Ch^a$. Every vertex value differs from $u(c_i)$ by at most $Ch^a$; the barycentric gradients are bounded by $C/h$ and $|K|\le Ch^2$ by shape regularity, so the vertex affine interpolant has gradient norm at most $Ch^a$. The pointwise value estimate gives both $L^2$ errors at most $Ch^{a+1}$. The triangle inequality proves the stated seminorm and full $L^2$ bounds. [F2, step 3.1, given, algebra] ∎
