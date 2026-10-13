---
id: lem-gr-schwarzschild-extension-chart
kind: lemma
title: "Smooth horizon-crossing extension of the Schwarzschild exterior metric in the advanced chart"
status: draft
origin: session
domain: mathematics
dependency_level: 14
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-schwarzschild-exterior-model, lem-gr-schwarzschild-metric-properties, lem-gr-schwarzschild-christoffel-symbols, lem-gr-schwarzschild-ricci-and-einstein-tensors, lem-gr-schwarzschild-curvature-and-kretschmann-scalar, def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure, def-euclidean-spheres-and-closed-balls, ex-the-round-metric-on-the-sphere-as-an-induced-metric, lem-gr-timelike-fields-define-equal-or-opposite-future-cones, def-c-r-and-smooth-maps-between-smooth-manifolds, def-derivative, thm-chain-rule, def-rational-power, cor-two-continuous-maps-into-a-hausdorff-space-agreeing-on-a-dense-set-are-equal, def-smooth-manifold, def-countable-choice, def-lorentz-form-and-inertia, def-gr-smooth-covariant-two-tensor-field, lem-gr-covariant-two-tensor-transformation-law, def-natural-logarithm, thm-logarithm-derivative-and-integral, def-real-exponential-function-and-e, thm-derivative-of-exponential, lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]
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
  def-natural-logarithm: mathematical-premise
  thm-logarithm-derivative-and-integral: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space: mathematical-premise
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
smooth structure and let $\iota_{\mathrm{ext}}:M_{\mathrm{ext}}\to S^2$ be the
third projection. Its product atlas includes ordinary sphere charts at the
poles ([[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]]).
Define the **tortoise function**

$$r_*(r):=r+s\log\left|\frac{r}{s}-1\right|,\qquad r>0,\ r\ne s,$$

on each of the two intervals $(0,s)$ and $(s,\infty)$, and define the
**advanced-chart metric** globally on $M_{\mathrm{ext}}$ by

$$g_{\mathrm{ext}}=-f(r)\,dv\otimes dv+dv\otimes dr+dr\otimes dv+r^2\,\iota_{\mathrm{ext}}^*\gamma_{S^2}.$$

In spherical-polar product charts its components are

$$g_{\mathrm{ext}}=-f(r)\,dv^2+2\,dv\,dr+r^2\,d\Omega^2,$$

namely $g_{vv}=-f$, $g_{vr}=g_{rv}=1$,
$g_{\vartheta\vartheta}=r^2$, $g_{\varphi\varphi}=r^2\sin^2\vartheta$ and all
other components zero. In another sphere chart the angular block is
$r^2(\gamma_{ij})$. Then:

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
generator direction is $\partial_v$; every smooth product-chart frame remains
a basis across $r=s$. In spherical-polar charts
$\det(g_{\mathrm{ext}})=-r^4\sin^2\vartheta$; in an arbitrary sphere chart
the determinant is $-r^4\det(\gamma_{ij})$, which is nonzero.

**(f) Scope.** The extension constructed here is a smooth Lorentzian
manifold containing the exterior isometrically and regular across $r=s$; it
is not claimed to be maximal, and no uniqueness or global structure theorem
is asserted. The region $r\le0$ and the surfaces relevant to the Kruskal
model of this page are outside this statement.

## Facts & Assumptions

**Given:** The Schwarzschild exterior datum with $s>0$, $f=1-s/r$; the product manifold $M_{\mathrm{ext}}=\mathbb R\times(0,\infty)\times S^2$; the function $r_*$ of the statement; the assigned components of $g_{\mathrm{ext}}$; and the maps $\Phi$ and $N_{\mathrm{ext}}$.

[L1] On each of $(0,s)$ and $(s,\infty)$ the positive function $|r/s-1|$ is smooth. The natural logarithm is smooth on $(0,\infty)$ because it is the inverse of the smooth exponential with nonzero derivative, and its derivative is $1/x$; hence $r_*(r)=r+s\log|r/s-1|$ is smooth on each branch and $r_*'=1+s/(r-s)=r/(r-s)=1/f(r)$ there ([[def-natural-logarithm]], [[thm-logarithm-derivative-and-integral]], [[def-real-exponential-function-and-e]], [[thm-derivative-of-exponential]], [[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]], [[def-derivative]], [[thm-chain-rule]], [[def-rational-power]]). The function $f$ is smooth on $(0,\infty)$ and is positive exactly for $r>s$.

[L2] Globally $g=-f\,d(x^0)\otimes d(x^0)+f^{-1}\,dr\otimes dr+r^2\iota^*\gamma_{S^2}$; in a spherical-polar product chart its angular components are $\gamma_{22}=1$, $\gamma_{33}=\sin^2\vartheta$. The map $\Phi$ is the identity on the sphere factor, so its pullback preserves $r^2\gamma_{S^2}$ ([[def-gr-schwarzschild-exterior-model]] clauses (b)-(c), [[lem-gr-schwarzschild-metric-properties]], [[ex-the-round-metric-on-the-sphere-as-an-induced-metric]]).

[L3] The base block $\begin{pmatrix}-f&1\\1&0\end{pmatrix}$ has determinant $-1$, inverse $\begin{pmatrix}0&1\\1&f\end{pmatrix}$, and one positive and one negative eigenvalue; the sphere block is $r^2\gamma_{S^2}$, positive definite at every sphere point. Their orthogonal product therefore has inertia $(3,1,0)$ everywhere. In a polar chart the full determinant is $-r^4\sin^2\vartheta$, while in any angular chart it is $-r^4\det(\gamma_{ij})$ ([[def-gr-smooth-lorentzian-objects]], [[def-lorentz-form-and-inertia]], [[ex-the-round-metric-on-the-sphere-as-an-induced-metric]]).

[L4] A smooth vector field $N$ with $g(N,N)<0$ everywhere is a time orientation; if two timelike fields $N,N'$ satisfy $g(N,N')<0$ at every point of a connected set, they determine the same future cone there ([[def-gr-smooth-lorentzian-objects]] clause (c), [[lem-gr-timelike-fields-define-equal-or-opposite-future-cones]]).

[L5] The global tensor $g_{\mathrm{ext}}=-f\,dv\otimes dv+dv\otimes dr+dr\otimes dv+r^2\iota_{\mathrm{ext}}^*\gamma_{S^2}$ is smooth because all scalar functions, one-forms and the round metric are smooth; thus the product chart atlas, including pole charts, gives continuous Ricci and curvature-scalar components ([[def-gr-smooth-covariant-two-tensor-field]], [[lem-gr-covariant-two-tensor-transformation-law]], [[def-c-r-and-smooth-maps-between-smooth-manifolds]], [[ex-the-round-metric-on-the-sphere-as-an-induced-metric]]).

[L6] If two continuous maps from a topological space into a Hausdorff space agree on a dense subset, they agree everywhere ([[cor-two-continuous-maps-into-a-hausdorff-space-agreeing-on-a-dense-set-are-equal]]).

[L7] The Ricci tensor, scalar curvature and Einstein tensor of the metric $g_f=-f\,d(x^0)^2+f^{-1}dr^2+r^2\,d\Omega^2$ with $f=1-s/r$ vanish identically on $r>s$; the computation of (a)-(c) of [[lem-gr-schwarzschild-ricci-and-einstein-tensors]] is algebraic in $f,f',f''$ and the identities $f''/2+f'/r=0$, $1-f-rf'=0$ hold for $f=1-s/r$ at every $r\ne0$ ([[lem-gr-schwarzschild-ricci-and-einstein-tensors]], [[lem-gr-schwarzschild-christoffel-symbols]]).

[L8] The Kretschmann scalar of the exterior metric is $12s^2/r^6$ on $r>s$ ([[lem-gr-schwarzschild-curvature-and-kretschmann-scalar]]); a fully contracted curvature scalar of a smooth nondegenerate metric is a smooth function in every chart.

## Proof

**Proof technique:** verify smoothness and signature from the explicit component matrix, verify the pullback identity by the chain rule, obtain the vacuum property on $r\ne s$ algebraically and extend by continuity, and verify the horizon and orientation claims directly.

1.1 (Smoothness and signature.) The global tensor expression in [L5] is smooth on the product manifold. At any point its base block on the $(v,r)$ factor is $\begin{pmatrix}-f&1\\1&0\end{pmatrix}$, with determinant $-1$ and inertia $(1,1,0)$, while its angular block is $r^2\gamma_{S^2}$, positive definite on the entire sphere including the poles. The product splitting therefore gives a smooth nondegenerate metric of inertia $(3,1,0)$ everywhere. In a spherical-polar chart the determinant is $-r^4\sin^2\vartheta$; in an arbitrary sphere chart it is $-r^4\det(\gamma_{ij})\ne0$. This proves (a) and the determinant claims of (e). [L3, L5, L1, algebra]

1.2 (Time orientation.) For $N_{\mathrm{ext}}=A\partial_v-\partial_r$ with $A=(f+\sqrt{f^2+4})/2$, one has $g_{\mathrm{ext}}(N_{\mathrm{ext}},N_{\mathrm{ext}})=-fA^2-2A=-A(fA+2)$ and $g_{\mathrm{ext}}(N_{\mathrm{ext}},\partial_v)=-fA-1$. By [L1], $A>0$ because $\sqrt{f^2+4}>\lvert f\rvert\ge-f$. Next $fA+1=\tfrac{f^2+f\sqrt{f^2+4}+2}{2}>0$: for $f\ge0$ its numerator is at least $2$; for $f<0$, writing $u=-f>0$, the inequality $u\sqrt{u^2+4}<u^2+2$ follows by squaring the two positive sides, $u^2(u^2+4)<(u^2+2)^2$, so the numerator is positive again. Hence $fA+2>fA+1>0$, and therefore $g_{\mathrm{ext}}(N_{\mathrm{ext}},N_{\mathrm{ext}})=-A(fA+2)<0$ and $g_{\mathrm{ext}}(N_{\mathrm{ext}},\partial_v)=-(fA+1)<0$. Thus $N_{\mathrm{ext}}$ is a smooth nowhere-zero timelike field; by [L4] it is a time orientation of $g_{\mathrm{ext}}$, and on the region $r>s$, where $f>0$ and $\partial_v=\partial_0$, the negative pairing $g_{\mathrm{ext}}(N_{\mathrm{ext}},\partial_v)<0$ shows by [L4] that it determines the same future cone as the datum's orientation. This proves (b). [L1, L3, L4, algebra]

1.3 (Pullback identity.) The map $\Phi$ and its inverse $(v,r,\omega)\mapsto(v-r_*(r),r,\omega)$ are smooth on $r>s$ by [L1], so $\Phi$ is a diffeomorphism onto that open subset. Pull back the base terms using $dv=d(x^0)+f^{-1}dr$: the cross terms cancel and the $dr^2$ coefficient becomes $-f(f^{-1})^2+2f^{-1}=f^{-1}$. The map is the identity on the sphere factor, so it pulls $r^2\iota_{\mathrm{ext}}^*\gamma_{S^2}$ back to $r^2\iota^*\gamma_{S^2}$. Thus $\Phi^*g_{\mathrm{ext}}=-f\,d(x^0)\otimes d(x^0)+f^{-1}\,dr\otimes dr+r^2\iota^*\gamma_{S^2}=g$ by [L2], proving (c). [L1, L2, algebra]

2.1 (Vacuum property on $r\ne s$.) On $r>s$ the pullback identity of step 1.3 expresses $g_{\mathrm{ext}}$ as the datum metric of [L7], which is Ricci-flat there. On $0<r<s$ the same coordinate calculation applies on the other branch of $r_*$; its Christoffel and Ricci formulas are algebraic in $f,f',f''$ and $r$ and do not use the sign of $f$, so the metric is Ricci-flat there too. Thus the Ricci tensor vanishes on the dense open set $D=\mathbb R\times((0,s)\cup(s,\infty))\times(S^2\setminus\{\text{two poles}\})$. The global metric is smooth and nondegenerate by step 1.1, so its Ricci tensor is smooth. In any smooth product chart, each Ricci component is continuous and vanishes on the dense subset $D$ of that chart; it therefore vanishes on the chart, including at $r=s$ and at the sphere poles. The scalar curvature and Einstein tensor vanish by their definitions. This proves the first part of (d). [L6, L7, step 1.1, step 1.3, algebra]

3.1 (Kretschmann scalar of the extension.) By [L8] and the algebraic calculation on the two non-horizon branches, the global scalar $K=R_{abcd}R^{abcd}$ equals $12s^2/r^6$ on $D$ defined in step 2.1. Both sides are smooth on all of $M_{\mathrm{ext}}$: the left by the smooth nondegenerate global metric and the right because $r>0$. They therefore agree everywhere by continuity and density, including at the horizon, the sphere poles, and $r=s$, where the value is $12/s^4$. This proves the remaining part of (d). [L6, L8, step 2.1, algebra]

4.1 (The horizon and the conclusion.) At $r=s$ one has $f=0$, so the inverse base block of [L3] is $\begin{pmatrix}0&1\\1&0\end{pmatrix}$ and the covector $dr$ has squared norm $g_{\mathrm{ext}}^{-1}(dr,dr)=0$. Since $dr\ne0$ and the level set $\{r=s\}$ has codimension one, it is a null hypersurface. Its tangent space is spanned by $\partial_v$ and the sphere tangent space; $\partial_v$ is null at $r=s$ because $g_{\mathrm{ext}}(\partial_v,\partial_v)=-f=0$, and it is the null generator direction. The global block decomposition of step 1.1 is nondegenerate at the horizon, so every smooth chart frame there is a basis; in polar charts the determinant is $-s^4\sin^2\vartheta$, and in pole charts it is $-s^4\det(\gamma_{ij})\ne0$. Clause (f) records that no maximality or uniqueness is claimed. This proves (e) and completes the proof. [step 1.1, L3, L5, given] ∎

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
