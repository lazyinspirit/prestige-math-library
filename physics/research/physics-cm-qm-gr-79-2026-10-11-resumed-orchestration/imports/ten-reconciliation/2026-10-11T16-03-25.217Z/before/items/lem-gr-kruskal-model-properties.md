---
id: lem-gr-kruskal-model-properties
kind: lemma
title: "Kruskal model properties: smooth radial function, Lorentzian metric, four-region isometries, vacuum and Kretschmann scalar"
status: draft
origin: session
domain: mathematics
dependency_level: 14
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-kruskal-model-data, def-gr-schwarzschild-exterior-model, lem-gr-schwarzschild-metric-properties, lem-gr-schwarzschild-christoffel-symbols, lem-gr-schwarzschild-ricci-and-einstein-tensors, lem-gr-schwarzschild-curvature-and-kretschmann-scalar, lem-gr-schwarzschild-extension-chart, def-gr-smooth-lorentzian-objects, def-gr-smooth-covariant-two-tensor-field, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-metric-selected-connection, lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space, cor-intermediate-value-theorem-topological, cor-two-continuous-maps-into-a-hausdorff-space-agreeing-on-a-dense-set-are-equal, def-c-r-and-smooth-maps-between-smooth-manifolds, def-derivative, thm-chain-rule, def-rational-power, def-interval, def-countable-choice, def-euclidean-spheres-and-closed-balls, ex-the-round-metric-on-the-sphere-as-an-induced-metric]
dependency_roles:
  def-gr-kruskal-model-data: mathematical-premise
  def-gr-schwarzschild-exterior-model: mathematical-premise
  lem-gr-schwarzschild-metric-properties: mathematical-premise
  lem-gr-schwarzschild-christoffel-symbols: mathematical-premise
  lem-gr-schwarzschild-ricci-and-einstein-tensors: mathematical-premise
  lem-gr-schwarzschild-curvature-and-kretschmann-scalar: mathematical-premise
  lem-gr-schwarzschild-extension-chart: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space: mathematical-premise
  cor-intermediate-value-theorem-topological: mathematical-premise
  cor-two-continuous-maps-into-a-hausdorff-space-agreeing-on-a-dense-set-are-equal: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-derivative: mathematical-premise
  thm-chain-rule: mathematical-premise
  def-rational-power: mathematical-premise
  def-interval: mathematical-premise
  def-countable-choice: mathematical-premise
  def-euclidean-spheres-and-closed-balls: mathematical-premise
  ex-the-round-metric-on-the-sphere-as-an-induced-metric: mathematical-premise
sources:
  references:
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 6.1.4 (6.13)-(6.15): UV = -(r-2GM)exp(r/2GM)/2GM defines r(U,V), the metric ds^2 = -32(GM)^3 exp(-r/2GM)/r dU dV + r^2 dOmega^2 is smooth and non-degenerate at r = 2GM, and the extension is analytic, printed pp. 246-247 (PDF pp. 253-254)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "P. K. Townsend, Black Holes, arXiv:gr-qc/9707012v1 (1997), section 2.3.2: the Kruskal metric (2.56) and the implicit relation (2.57), the extension of the range to U > 0, V < 0 and the four regions, printed pp. 20-22"
      url: "https://arxiv.org/pdf/gr-qc/9707012"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 7 (7.77)-(7.81): the nonsingular Kruskal form of the Schwarzschild metric and the implicit definition of r, printed pp. 186-187 (PDF pp. 193-194)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: pass
---

## Statement

Let $\mathcal K=\{(U,V):UV<1\}\times S^2$, $r$, $g_{\mathcal K}$ and
$N_{\mathcal K}=\partial_U+\partial_V$ be the Kruskal model datum of mass
parameter $m_*$ and Schwarzschild radius $s=2G_Nm_*/c^2>0$
([[def-gr-kruskal-model-data]]). Then:

**(a) The radial function.** The function
$\varphi(r):=-(r/s-1)e^{r/s}$ is a smooth strictly decreasing bijection of
$(0,\infty)$ onto $(-\infty,1)$ with
$\varphi'(r)=-\frac{r}{s^2}e^{r/s}<0$; consequently the relation
$\varphi(r(U,V))=UV$ defines exactly one function
$r:\mathcal K\to(0,\infty)$, and this function is smooth. Moreover
$r(p)=s$ exactly when $U(p)V(p)=0$, and $r(p)\to0$ corresponds to
$U(p)V(p)\to1$; the value $r=0$ is not attained on $\mathcal K$.

**(b) Lorentzian metric and time orientation.**
$g_{\mathcal K}$ is a smooth symmetric covariant $2$-tensor field on
$\mathcal K$ and is nondegenerate with inertia $(3,1,0)$ at every point; hence
$(\mathcal K,g_{\mathcal K})$ is a smooth Lorentzian four-manifold of
signature $(-,+,+,+)$. The field $N_{\mathcal K}=\partial_U+\partial_V$
satisfies $g_{\mathcal K}(N_{\mathcal K},N_{\mathcal K})=-\frac{4s^3}{r}e^{-r/s}<0$
and is a time orientation.

**(c) The four regions and the isometries.** The set $\{UV\ne0\}$ has four
connected components. Let $r_*$ be the tortoise function of
[[lem-gr-schwarzschild-extension-chart]] on the branch $r>s$ and define
$\Psi_+:M\to\mathcal K$ by
$\Psi_+(x^0,r,\omega)=\bigl(-e^{-(x^0-r_*(r))/(2s)},\,e^{(x^0+r_*(r))/(2s)},\,\omega\bigr)$.
Then $\Psi_+$ is a diffeomorphism of the exterior datum onto the component
$\{U<0,\ V>0\}$ and $\Psi_+^*g_{\mathcal K}=g$. Similarly, on the branch
$0<r<s$ with $r_*=r+s\log(1-r/s)$ the map
$\Psi_-(x^0,r,\omega)=\bigl(e^{(r_*(r)-x^0)/(2s)},\,e^{(r_*(r)+x^0)/(2s)},\,\omega\bigr)$
is a diffeomorphism of the domain $\mathbb R\times(0,s)\times S^2$ (carrying
the metric $-f\,d(x^0)^2+f^{-1}dr^2+r^2d\Omega^2$ with $f<0$) onto the
component $\{U>0,\ V>0\}$ and pulls $g_{\mathcal K}$ back to that metric. The
map $(U,V,\omega)\mapsto(-U,-V,\omega)$ is an isometry of $g_{\mathcal K}$
fixing $r$, exchanging the components $\{U<0,V>0\}\leftrightarrow\{U>0,V<0\}$
and $\{U>0,V>0\}\leftrightarrow\{U<0,V<0\}$; hence every component of
$\{UV\ne0\}$ is isometric to one of the two branches
$-f\,d(x^0)^2+f^{-1}dr^2+r^2d\Omega^2$ with $f=1-s/r$.

**(d) Vacuum and Kretschmann scalar.** The metric-selected connection of
$g_{\mathcal K}$ exists and is unique; its Ricci tensor, scalar curvature and
Einstein tensor vanish identically on $\mathcal K$, and its Kretschmann
scalar equals $R_{abcd}R^{abcd}=12s^2/r^6$ at every point of $\mathcal K$. In
particular the curvature invariant is smooth on $\mathcal K$ and grows
without bound as $UV\to1$ (that is, as $r\downarrow0$ at fixed angles), while
it equals $12/s^4$ on the axes $r=s$.

**(e) Scope.** The statements are geometric. No maximality of the extension,
no geodesic completeness, no uniqueness theorem and no global causal
statement beyond those proved here are asserted. The manifold
$\mathcal K$ contains a copy of the exterior datum and, on the components
with $UV>0$, points at $0<r<s$; the set $\{UV=1\}$ is not part of
$\mathcal K$.

## Facts & Assumptions

**Given:** The Kruskal model datum of mass parameter $m_*$ with $s>0$, the functions $U,V$, the metric $g_{\mathcal K}$ and the field $N_{\mathcal K}$.

[L1] The domain $\Omega=\{UV<1\}$ is open in $\mathbb R^2$ and $\mathcal K=\Omega\times S^2$ is a smooth four-manifold without boundary; in every Kruskal chart the assigned components of $g_{\mathcal K}$ are $g_{UV}=g_{VU}=-2s^3e^{-r/s}/r$, $g_{\vartheta\vartheta}=r^2$, $g_{\varphi\varphi}=r^2\sin^2\vartheta$ and all others zero, with $r$ as in clause (c) of the datum ([[def-gr-kruskal-model-data]], [[def-euclidean-spheres-and-closed-balls]], [[ex-the-round-metric-on-the-sphere-as-an-induced-metric]]); a field $g$ with these components is Lorentzian of signature $(-,+,+,+)$ precisely when it is smooth and nondegenerate with inertia $(3,1,0)$ at every point ([[def-gr-smooth-lorentzian-objects]]).

[L2] The exterior datum and its tortoise function are as on this page: $g=-f\,d(x^0)^2+f^{-1}dr^2+r^2d\Omega^2$ with $f=1-s/r$ on $r>s$, and $r_*'=1/f$ on each branch, where $r_*=r+s\log\lvert r/s-1\rvert$ ([[def-gr-schwarzschild-exterior-model]], [[lem-gr-schwarzschild-metric-properties]], [[lem-gr-schwarzschild-extension-chart]]).

[L3] On each branch the algebraic Christoffel-symbol and Ricci-tensor computation for the metric $-f\,d(x^0)^2+f^{-1}dr^2+r^2d\Omega^2$ with $f=1-s/r$ gives $\operatorname{Ric}=0$, $S=0$, $G=0$, and the Kretschmann invariant is $12s^2/r^6$; the computation uses only $f'\ne$ algebraic identities, not the sign of $f$ ([[lem-gr-schwarzschild-christoffel-symbols]], [[lem-gr-schwarzschild-ricci-and-einstein-tensors]], [[lem-gr-schwarzschild-curvature-and-kretschmann-scalar]]).

[L4] The inverse function theorem for smooth maps of open subsets of $\mathbb R$: if $f$ is smooth on an open interval and $f'\ne0$ there, then $f$ has a smooth inverse on its image, and on the image the inverse agrees locally with any local smooth inverse ([[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]]); a continuous strictly monotone function on an interval has image the interval between its endpoint limits ([[cor-intermediate-value-theorem-topological]]).

[L5] Two continuous maps into a Hausdorff space agreeing on a dense subset agree everywhere; the $(U,V,\vartheta,\varphi)$-components of the Ricci tensor, scalar curvature and the Kretschmann scalar of a smooth nondegenerate metric are smooth functions on the chart domain ([[cor-two-continuous-maps-into-a-hausdorff-space-agreeing-on-a-dense-set-are-equal]], [[def-c-r-and-smooth-maps-between-smooth-manifolds]]).

[L6] The exponential and logarithmic functions used in $\varphi$ and in the maps $\Psi_\pm$ are smooth, they satisfy $e^a e^b=e^{a+b}$ and $\log$ is inverse to $\exp$; product and chain rules apply, and $\varphi'(r)=-\frac{r}{s^2}e^{r/s}$ ([[def-derivative]], [[thm-chain-rule]], [[def-rational-power]]).

## Proof

roof

**Proof technique:** establish the bijectivity and smoothness of the implicit radial function, verify the metric's matrix structure in the Kruskal chart, compute the two pullbacks explicitly, and transfer the vacuum and Kretschmann results by isometry and continuity.

1.1 (The radial function.) By [L6], $\varphi(r)=(1-r/s)e^{r/s}$ is smooth with $\varphi'(r)=-\frac{r}{s^2}e^{r/s}<0$ for $r>0$, so $\varphi$ is strictly decreasing; its limits are $\varphi(r)\to1$ as $r\downarrow0$ and $\varphi(r)\to-\infty$ as $r\to\infty$, because the factor $1-r/s$ tends to $1$ and $e^{r/s}$ to $1$ at the left end, and the exponential dominates any polynomial at the right end. By [L4] the image of $\varphi$ is exactly $(-\infty,1)$, so $\varphi$ is a bijection onto $(-\infty,1)$ with an inverse that is smooth: at each $r_0>0$ with $\varphi(r_0)=y$ the inverse function theorem gives a local smooth inverse near $y$, and any such local inverse agrees with the global inverse because $y$ is taken by the bijection to exactly one point. The function $r=\varphi^{-1}\circ(UV)$ is therefore defined on all of $\Omega$ and is smooth, since $UV$ is a smooth function with values in $(-\infty,1)$ by the definition of $\Omega$; this justifies clause (c) of the datum. The correspondence of levels is immediate from the relation: $r=s$ if and only if $UV=\varphi(s)=0$, and $r\downarrow0$ if and only if $UV\uparrow1$. This proves (a). [L1, L4, L6, algebra]

1.2 (The metric's matrix and time orientation.) In a Kruskal chart the matrix of $g_{\mathcal K}$ in the ordered frame $(\partial_U,\partial_V,\partial_\vartheta,\partial_\varphi)$ has the block form $\begin{pmatrix}0&g_{UV}\\g_{UV}&0\end{pmatrix}\oplus r^2\operatorname{diag}(1,\sin^2\vartheta)$ with $g_{UV}=-2s^3e^{-r/s}/r<0$. The determinant of the first block is $-g_{UV}^2<0$, so the block has one positive and one negative eigenvalue; the angular block is positive definite; hence the form is nondegenerate with inertia $(3,1,0)$ at every point, so $g_{\mathcal K}$ is Lorentzian by [L1] and the appropriate definition. For $N_{\mathcal K}=\partial_U+\partial_V$: $g_{\mathcal K}(N_{\mathcal K},N_{\mathcal K})=2g_{UV}=-\frac{4s^3}{r}e^{-r/s}<0$, so $N_{\mathcal K}$ is a timelike field at every point, hence a time orientation. This proves (b). [L1, algebra]

2.1 (The isometry with the exterior.) On $\Omega_+=\{U<0,V>0\}$ define $U=-e^{-(x^0-r_*)/(2s)}$, $V=e^{(x^0+r_*)/(2s)}$ with the branch $r>s$ of $r_*$; then $UV=-e^{r_*/s}=-(r/s-1)e^{r/s}$ by [L2] (since $e^{r_*/s}=(r/s-1)e^{r/s}$ on $r>s$), so the function defined implicitly satisfies $r(U,V)=r$ and the map $\Psi_+$ is a diffeomorphism onto $\{U<0,V>0\}$ with inverse $(U,V,\omega)\mapsto(s\log(V/(-U)),\,r(U,V),\,\omega)$. Differentiating, $dU=-\frac{U}{2s}(dx^0-r_*'dr)$ and $dV=\frac{V}{2s}(dx^0+r_*'dr)$, hence $dU\,dV+dV\,dU=-\frac{UV}{2s^2}\bigl(dx^0\otimes dx^0-r_*'^2dr\otimes dr\bigr)$. Substituting into $g_{\mathcal K}$ and using $\frac{sUVe^{-r/s}}{r}=-f$ and $r_*'^2=f^{-2}$, the pulled-back metric is $-f\,d(x^0)^2+f^{-1}dr^2+r^2d\Omega^2=g$; this is the computation of [[lem-gr-schwarzschild-extension-chart]] restricted to the exterior. On the component $\{U>0,V>0\}$ define instead $U=e^{(r_*-x^0)/(2s)}$, $V=e^{(r_*+x^0)/(2s)}$ with the branch $r_*=r+s\log(1-r/s)$ of the interval $(0,s)$; then $UV=e^{r_*/s}=(1-r/s)e^{r/s}=-(r/s-1)e^{r/s}$, so again $r(U,V)=r$, and $dU\,dV+dV\,dU=\frac{UV}{2s^2}\bigl(dr_*^2-dx^0\otimes dx^0\bigr)$; the same substitution with $r_*'=1/f$ (negative there) gives $-f\,d(x^0)^2+f^{-1}dr^2+r^2d\Omega^2$ again, now with $f<0$. Finally the map $(U,V,\omega)\mapsto(-U,-V,\omega)$ leaves both $UV$ and $dU\,dV+dV\,dU$ unchanged and fixes $r$, $g_{\vartheta\vartheta}$ and $g_{\varphi\varphi}$; it is therefore an isometry, and it exchanges the two components with $UV<0$ and the two with $UV>0$. This proves (c). [L1, L2, L6, step 1.1, algebra]

3.1 (Vacuum and Kretschmann scalar.) By step 2.1 every point with $UV\ne0$ lies in a component on which $g_{\mathcal K}$ is isometric to a metric of the form $-f\,d(x^0)^2+f^{-1}dr^2+r^2d\Omega^2$ with $f=1-s/r$; the computation of [L3] is algebraic and gives vanishing Ricci, scalar and Einstein tensors and Kretschmann scalar $12s^2/r^6$ there, and these properties are preserved by isometries. The set $\{UV\ne0\}$ is dense and open in $\mathcal K$, and the components of the Ricci tensor and the scalar $K$ in a Kruskal chart are continuous (indeed smooth) functions of $(U,V,\vartheta,\varphi)$, because $g_{\mathcal K}$ is smooth and nondegenerate by step 1.2; applying [L5] to these functions and to the zero function, respectively to $K$ and to the smooth function $12s^2/r^6$, extends the identities to all of $\mathcal K$. This proves (d), including the evaluations $K=12/s^4$ on the axes and $K\to\infty$ as $UV\to1$. Clause (e) records the scope. [L3, L5, step 1.1, step 2.1, algebra]

4.1 (Conclusion.) Steps 1.1-3.1 prove clauses (a)-(d) from the datum's definitions and the exterior computations; the claims about maximality and completeness are explicitly not made, as recorded in (e). [step 1.1, step 1.2, step 2.1, step 3.1, given] ∎

## Remarks

- **Why continuity suffices.** The Ricci tensor and the Kretschmann scalar
  are defined from the metric by two derivatives; since $g_{\mathcal K}$ is
  smooth in the Kruskal chart across the axes, no singularity can occur
  there, and the isometry computations off the axes propagate the vacuum
  identities by continuity. This is the exact sense in which the extension is
  analytic and non-singular at $r=s$.

- **The implicit relation in the source.** The sources write
  $UV=-(r/s-1)e^{r/s}$ in the form $UV=(2GM-r)e^{r/2GM}/(2GM)$, which is the
  same identity with $s=2GM$; the extraction of $r$ from $UV$ uses only that
  the function is a strictly decreasing bijection of $(0,\infty)$ onto
  $(-\infty,1)$, as proved in step 1.1.
