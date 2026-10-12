---
id: lem-gr-schwarzschild-extension-chart
kind: lemma
title: "Smooth horizon-crossing extension of the Schwarzschild exterior metric in the advanced chart"
status: draft
origin: session
domain: mathematics
dependency_level: 13
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-schwarzschild-exterior-model, lem-gr-schwarzschild-metric-properties, lem-gr-schwarzschild-christoffel-symbols, lem-gr-schwarzschild-ricci-and-einstein-tensors, lem-gr-schwarzschild-curvature-and-kretschmann-scalar, def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure, def-euclidean-spheres-and-closed-balls, ex-the-round-metric-on-the-sphere-as-an-induced-metric, lem-gr-timelike-fields-define-equal-or-opposite-future-cones, def-c-r-and-smooth-maps-between-smooth-manifolds, def-derivative, thm-chain-rule, def-rational-power, cor-two-continuous-maps-into-a-hausdorff-space-agreeing-on-a-dense-set-are-equal, def-smooth-manifold, def-countable-choice, def-lorentz-form-and-inertia, def-gr-smooth-covariant-two-tensor-field, lem-gr-covariant-two-tensor-transformation-law]
dependency_roles:
  def-gr-schwarzschild-exterior-model: mathematical-premise
  lem-gr-schwarzschild-metric-properties: mathematical-premise
  lem-gr-schwarzschild-christoffel-symbols: mathematical-premise
  lem-gr-schwarzschild-ricci-and-einstein-tensors: mathematical-premise
  lem-gr-schwarzschild-curvature-and-kretschmann-scalar: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure: mathematical-premise
  def-euclidean-spheres-and-closed-balls: mathematical-premise
  ex-the-round-metric-on-the-sphere-as-an-induced-metric: mathematical-premise
  lem-gr-timelike-fields-define-equal-or-opposite-future-cones: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-derivative: mathematical-premise
  thm-chain-rule: mathematical-premise
  def-rational-power: mathematical-premise
  cor-two-continuous-maps-into-a-hausdorff-space-agreeing-on-a-dense-set-are-equal: mathematical-premise
  def-smooth-manifold: mathematical-premise
  def-countable-choice: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  lem-gr-covariant-two-tensor-transformation-law: mathematical-premise
sources:
  references:
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 6.1.3 (6.6)-(6.8): the tortoise coordinate r_* = r + 2GM log((r-2GM)/2GM) and the ingoing Eddington-Finkelstein form ds^2 = -(1-2GM/r)dv^2 + 2dvdr + r^2 dOmega^2, smooth and non-degenerate at r = 2GM, with det g = -r^4 sin^2 theta, printed pp. 238-240 (PDF pp. 245-247)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 7: the tortoise coordinate and Eddington-Finkelstein coordinates, printed pp. 186-190 (PDF pp. 193-197)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "P. K. Townsend, Black Holes, arXiv:gr-qc/9707012v1 (1997), section 2.3.1 (2.50)-(2.51): the null coordinates u = t - r_* and the Eddington-Finkelstein form ds^2 = -(1-2M/r)du^2 - 2drdu + r^2 dOmega^2 continued to all r > 0, printed p. 19"
      url: "https://arxiv.org/pdf/gr-qc/9707012"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be the Schwarzschild exterior datum with Schwarzschild radius
$s>0$ and $f(r)=1-s/r$
([[def-gr-schwarzschild-exterior-model]]). Let
$M_{\mathrm{ext}}:=\mathbb R\times(0,\infty)\times S^2$ carry the product
smooth structure and let $(v,r,\vartheta,\varphi)$ be its product charts
([[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]]).
Define the **tortoise function**

$$r_*(r):=r+s\log\left|\frac{r}{s}-1\right|,\qquad r>0,\ r\ne s,$$

on each of the two intervals $(0,s)$ and $(s,\infty)$, and define the
**advanced-chart metric** $g_{\mathrm{ext}}$ on $M_{\mathrm{ext}}$ by the
components

$$g_{\mathrm{ext}}=-f(r)\,dv^2+2\,dv\,dr+r^2\,d\Omega^2,$$

meaning the symmetric tensor with $g_{vv}=-f$, $g_{vr}=g_{rv}=1$,
$g_{\vartheta\vartheta}=r^2$, $g_{\varphi\varphi}=r^2\sin^2\vartheta$ and all
other components zero in every product chart. Then:

**(a) Smooth Lorentzian metric.** $g_{\mathrm{ext}}$ is a smooth symmetric
covariant $2$-tensor field on $M_{\mathrm{ext}}$, and at every point it is
nondegenerate with inertia $(3,1,0)$; hence $(M_{\mathrm{ext}},g_{\mathrm{ext}})$
is a smooth Lorentzian four-manifold of signature $(-,+,+,+)$ on all of
$r>0$, including $r=s$.

**(b) Time orientation.** The smooth vector field

$$N_{\mathrm{ext}}:=A(r)\,\partial_v-\partial_r,\qquad A(r):=\frac{f(r)+\sqrt{f(r)^2+4}}{2}>0,$$

satisfies $g_{\mathrm{ext}}(N_{\mathrm{ext}},N_{\mathrm{ext}})<0$ everywhere
and $g_{\mathrm{ext}}(N_{\mathrm{ext}},\partial_v)<0$ everywhere; hence
$N_{\mathrm{ext}}$ is a time orientation of $g_{\mathrm{ext}}$, and on the
region $r>s$ it determines the same future cone as the datum's time
orientation $\partial_v=\partial_0$.

**(c) Isometric embedding of the exterior.** The map
$\Phi:M\to M_{\mathrm{ext}}$, $(x^0,r,\omega)\mapsto(x^0+r_*(r),r,\omega)$
restricts to a diffeomorphism of $M$ onto the open subset $\{r>s\}$ of
$M_{\mathrm{ext}}$, and $\Phi^*g_{\mathrm{ext}}=g$; the exterior datum is
therefore isometric to the region $r>s$ of the extension.

**(d) Vacuum and Kretschmann scalar of the extension.** The
metric-selected connection of $g_{\mathrm{ext}}$ exists and is unique, its
Ricci tensor, scalar curvature and Einstein tensor vanish identically on
$M_{\mathrm{ext}}$, and its Kretschmann scalar equals

$$R_{abcd}R^{abcd}=\frac{12s^2}{r^6}$$

on all of $M_{\mathrm{ext}}$. In particular the scalar is smooth and finite on
the horizon $r=s$, where it takes the value $12/s^4$.

**(e) The horizon is a null hypersurface.** The level set $\{r=s\}$ is a
smooth null hypersurface of $(M_{\mathrm{ext}},g_{\mathrm{ext}})$ whose null
generator direction is $\partial_v$; the frame of the advanced chart remains a
basis of every tangent space across $r=s$, and $\det(g_{\mathrm{ext}})=-r^4\sin^2\vartheta$
in every product chart.

**(f) Scope.** The extension constructed here is a smooth Lorentzian
manifold containing the exterior isometrically and regular across $r=s$; it
is not claimed to be maximal, and no uniqueness or global structure theorem
is asserted. The region $r\le0$ and the surfaces relevant to the Kruskal
model of this page are outside this statement.

## Facts & Assumptions

**Given:** The Schwarzschild exterior datum with $s>0$, $f=1-s/r$; the product manifold $M_{\mathrm{ext}}=\mathbb R\times(0,\infty)\times S^2$; the function $r_*$ of the statement; the assigned components of $g_{\mathrm{ext}}$; and the maps $\Phi$ and $N_{\mathrm{ext}}$.

[L1] On each of $(0,s)$ and $(s,\infty)$ the function $\log\lvert r/s-1\rvert$ is smooth, and $\frac{d}{dr}r_*=1+\frac{s}{r-s}=\frac{r}{r-s}=\frac{1}{f(r)}$ on each interval; the function $f$ is smooth on $(0,\infty)$ and $f>0$ exactly for $r>s$ ([[def-derivative]], [[thm-chain-rule]], [[def-rational-power]], [[def-c-r-and-smooth-maps-between-smooth-manifolds]]).

[L2] The exterior metric $g$ has components $g_{00}=-f$, $g_{11}=f^{-1}$, $g_{22}=r^2$, $g_{33}=r^2\sin^2\vartheta$ in its product charts, and the round sphere metric has components $\gamma_{22}=1$, $\gamma_{33}=\sin^2\vartheta$; these expressions agree with the corresponding components of $g_{\mathrm{ext}}$ in the coordinates $(x^0,r,\vartheta,\varphi)$ on the region $r>s$ ([[lem-gr-schwarzschild-metric-properties]], [[ex-the-round-metric-on-the-sphere-as-an-induced-metric]]).

[L3] For the diagonal-free $2\times2$ block $\begin{pmatrix}-f&1\\1&0\end{pmatrix}$ the inverse is $\begin{pmatrix}0&1\\1&f\end{pmatrix}$, its determinant is $-1$, and its characteristic polynomial is $\lambda^2+f\lambda-1$, whose two roots have product $-1$ and hence opposite signs; appending the positive-definite sphere block $r^2\operatorname{diag}(1,\sin^2\vartheta)$ therefore produces a nondegenerate form with inertia $(3,1,0)$ at every $r>0$ ([[def-gr-smooth-lorentzian-objects]], [[def-lorentz-form-and-inertia]]).

[L4] A smooth vector field $N$ with $g(N,N)<0$ everywhere is a time orientation; if two timelike fields $N,N'$ satisfy $g(N,N')<0$ at every point of a connected set, they determine the same future cone there ([[def-gr-smooth-lorentzian-objects]] clause (c), [[lem-gr-timelike-fields-define-equal-or-opposite-future-cones]]).

[L5] The tensor $g_{\mathrm{ext}}$ is built from the smooth functions $f$, $r$, $\sin^2\vartheta$ and the smooth one-forms $dv$, $dr$, and the round sphere metric, so its components are smooth in every product chart; a covariant tensor identity proved in the coordinates of one chart on an open set holds on that set ([[def-gr-smooth-covariant-two-tensor-field]], [[lem-gr-covariant-two-tensor-transformation-law]], [[def-c-r-and-smooth-maps-between-smooth-manifolds]]).

[L6] If two continuous maps from a topological space into a Hausdorff space agree on a dense subset, they agree everywhere ([[cor-two-continuous-maps-into-a-hausdorff-space-agreeing-on-a-dense-set-are-equal]]).

[L7] The Ricci tensor, scalar curvature and Einstein tensor of the metric $g_f=-f\,d(x^0)^2+f^{-1}dr^2+r^2\,d\Omega^2$ with $f=1-s/r$ vanish identically on $r>s$; the computation of (a)-(c) of [[lem-gr-schwarzschild-ricci-and-einstein-tensors]] is algebraic in $f,f',f''$ and the identities $f''/2+f'/r=0$, $1-f-rf'=0$ hold for $f=1-s/r$ at every $r\ne0$ ([[lem-gr-schwarzschild-ricci-and-einstein-tensors]], [[lem-gr-schwarzschild-christoffel-symbols]]).

[L8] The Kretschmann scalar of the exterior metric is $12s^2/r^6$ on $r>s$ ([[lem-gr-schwarzschild-curvature-and-kretschmann-scalar]]); a fully contracted curvature scalar of a smooth nondegenerate metric is a smooth function in every chart.

## Proof

**Proof technique:** verify smoothness and signature from the explicit component matrix, verify the pullback identity by the chain rule, obtain the vacuum property on $r\ne s$ algebraically and extend by continuity, and verify the horizon and orientation claims directly.

1.1 (Smoothness and signature.) In a product chart the matrix of $g_{\mathrm{ext}}$ is block diagonal with the $2\times2$ block $\begin{pmatrix}-f&1\\1&0\end{pmatrix}$ in the $(v,r)$ coordinates and the block $r^2\operatorname{diag}(1,\sin^2\vartheta)$ in the angular coordinates; all entries are smooth functions of $r$ and $\vartheta$ on the chart domain by [L1] and [L5]. The determinant of the full matrix is $-r^4\sin^2\vartheta\ne0$ by [L3], so $g_{\mathrm{ext}}$ is nondegenerate everywhere; by [L3] its inertia is $(3,1,0)$. This proves (a) and the determinant formula of (e). [L3, L5, L1, algebra]

1.2 (Time orientation.) For $N_{\mathrm{ext}}=A\partial_v-\partial_r$ with $A=(f+\sqrt{f^2+4})/2$, one has $g_{\mathrm{ext}}(N_{\mathrm{ext}},N_{\mathrm{ext}})=-fA^2-2A=-A(fA+2)$ and $g_{\mathrm{ext}}(N_{\mathrm{ext}},\partial_v)=-fA-1$. By [L1], $A>0$ because $\sqrt{f^2+4}>\lvert f\rvert\ge-f$. Next $fA+1=\tfrac{f^2+f\sqrt{f^2+4}+2}{2}>0$: for $f\ge0$ its numerator is at least $2$; for $f<0$, writing $u=-f>0$, the inequality $u\sqrt{u^2+4}<u^2+2$ follows by squaring the two positive sides, $u^2(u^2+4)<(u^2+2)^2$, so the numerator is positive again. Hence $fA+2>fA+1>0$, and therefore $g_{\mathrm{ext}}(N_{\mathrm{ext}},N_{\mathrm{ext}})=-A(fA+2)<0$ and $g_{\mathrm{ext}}(N_{\mathrm{ext}},\partial_v)=-(fA+1)<0$. Thus $N_{\mathrm{ext}}$ is timelike and future-directed with respect to $\partial_v$; by [L4] it is a time orientation of $g_{\mathrm{ext}}$, and on the region $r>s$, where $f>0$ and $\partial_v=\partial_0$, the negative pairing $g_{\mathrm{ext}}(N_{\mathrm{ext}},\partial_v)<0$ shows by [L4] that it determines the same future cone as the datum's orientation. This proves (b). [L1, L3, L4, algebra]

1.3 (Pullback identity.) The map $\Phi$ is smooth, and its inverse $(v,r,\omega)\mapsto(v-r_*(r),r,\omega)$ is smooth on $\{r>s\}$ by [L1], so $\Phi$ is a diffeomorphism as asserted. Pull back the metric: $dv=d(x^0)+r_*'(r)\,dr=(d(x^0)+f^{-1}dr)$ by [L1], so $\Phi^*g_{\mathrm{ext}}=-f\,(d(x^0)+f^{-1}dr)^2+2\,(d(x^0)+f^{-1}dr)dr+r^2\,d\Omega^2$; expanding, the cross terms $-2f\cdot f^{-1}d(x^0)dr+2d(x^0)dr$ cancel and the $dr^2$ coefficients are $-f\cdot f^{-2}+2f^{-1}=f^{-1}$, leaving $-f\,d(x^0)^2+f^{-1}dr^2+r^2\,d\Omega^2=g$ by [L2]. This proves (c). [L1, L2, algebra]

2.1 (Vacuum property on $r\ne s$.) On $r>s$ the pullback identity of step 1.3 expresses $g_{\mathrm{ext}}$ as the datum metric of [L7], which is Ricci-flat there; on $0<r<s$ the same computation applies verbatim with the branch of $r_*$ on that interval, and the Christoffel-symbol and Ricci computations of [L7] are algebraic identities in $f$, $f'$, $f''$ and $r$ that do not use the sign of $f$, so the pulled-back metric is Ricci-flat on $0<r<s$ as well. Since the tensor $g_{\mathrm{ext}}$ is smooth and nondegenerate, the components of its Ricci tensor in the advanced chart are continuous functions of $(v,r,\vartheta,\varphi)$ on the whole chart domain; they vanish on the dense open subset $\{r\ne s\}$ and therefore, by [L6] applied componentwise to the comparison with the zero function, vanish identically. The scalar curvature and Einstein tensor vanish because they are built from the Ricci tensor and the metric. This proves the first part of (d). [L6, L7, step 1.1, step 1.3, algebra]

3.1 (Kretschmann scalar of the extension.) By [L8] the invariant $K=R_{abcd}R^{abcd}$ is a smooth function on the chart domain of the extension; on $r>s$ it equals $12s^2/r^6$ because there $g_{\mathrm{ext}}$ is isometric to the exterior metric, and on $0<r<s$ the same value holds because the computation of [L8] is algebraic in $f,f',f'',r$ and uses only the metric components of the two branches and the identity $f=1-s/r$, not the sign of $f$. The function $r\mapsto12s^2/r^6$ is smooth on $r>0$, and $K$ equals it on the dense open subset $\{r\ne s\}$; by [L6] applied to $K$ and this function, the identity $K=12s^2/r^6$ holds on all of $M_{\mathrm{ext}}$, in particular at $r=s$ where it takes the finite value $12/s^4$. This completes (d). [L6, L8, step 2.1, algebra]

4.1 (The horizon and the conclusion.) At $r=s$ one has $f=0$, so the inverse block of [L3] is $\begin{pmatrix}0&1\\1&0\end{pmatrix}$ and the covector $dr$ has squared norm $g_{\mathrm{ext}}^{rr}=f=0$; since $dr\ne0$ and the level set $\{r=s\}$ has codimension one, it is a null hypersurface. Its tangent space is spanned by $\partial_v$ and the two sphere directions; $\partial_v$ is null at $r=s$ because $g_{\mathrm{ext}}(\partial_v,\partial_v)=-f=0$, and the sphere directions are spacelike, so $\partial_v$ is a null generator direction. The determinant computation of step 1.1 holds at $r=s$ with value $-s^4\sin^2\vartheta\ne0$, so the chart frame is a basis there and the metric is regular. Clause (f) records that no maximality or uniqueness is claimed. This proves (e) and completes the proof. [step 1.1, L3, L5, given] ∎

## Remarks

- **What the extension achieves and what it does not.** The construction
  shows that the apparent breakdown of the Schwarzschild chart at $r=s$ is a
  property of that chart: the same metric is smooth and nondegenerate in the
  advanced chart across the horizon, and its curvature invariant is finite
  there. It does not identify the maximal extension of the model; that
  involves the Kruskal model of this page, and it does not show that every
  geodesic extends, a statement requiring global arguments not made here.

- **The two branches.** The tortoise function is defined separately on
  $(0,s)$ and $(s,\infty)$ and is not continuous across $r=s$; it is only its
  derivative $1/f$ that is used in the pullback computation, and the metric
  components of $g_{\mathrm{ext}}$ do not involve $r_*$ at all. This is why
  the extension is smooth even though the auxiliary coordinate $x^0$ is not
  defined across the horizon as a single-valued function (only its
  combinations $v$ and $u=v-2r_*$ are).
