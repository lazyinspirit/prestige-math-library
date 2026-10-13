---
id: lem-gr-kruskal-model-properties
kind: lemma
title: "Kruskal model properties: smooth radial function, Lorentzian metric, four-region isometries, vacuum and Kretschmann scalar"
status: draft
origin: session
domain: mathematics
dependency_level: 15
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-kruskal-model-data, def-gr-schwarzschild-exterior-model, lem-gr-schwarzschild-metric-properties, lem-gr-schwarzschild-christoffel-symbols, lem-gr-schwarzschild-ricci-and-einstein-tensors, lem-gr-schwarzschild-curvature-and-kretschmann-scalar, lem-gr-schwarzschild-extension-chart, def-gr-smooth-lorentzian-objects, def-gr-smooth-covariant-two-tensor-field, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-metric-selected-connection, lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space, cor-intermediate-value-theorem-topological, cor-two-continuous-maps-into-a-hausdorff-space-agreeing-on-a-dense-set-are-equal, def-c-r-and-smooth-maps-between-smooth-manifolds, def-derivative, thm-chain-rule, def-rational-power, def-interval, def-countable-choice, def-euclidean-spheres-and-closed-balls, ex-the-round-metric-on-the-sphere-as-an-induced-metric, def-real-exponential-function-and-e, thm-derivative-of-exponential, thm-exponential-addition-formula, cor-exponential-is-a-bijection-onto-positive-reals, def-natural-logarithm, thm-logarithm-derivative-and-integral, cor-mean-value-theorem, thm-algebra-of-derivatives]
dependency_roles:
  thm-algebra-of-derivatives: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
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
  def-real-exponential-function-and-e: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  thm-exponential-addition-formula: mathematical-premise
  cor-exponential-is-a-bijection-onto-positive-reals: mathematical-premise
  def-natural-logarithm: mathematical-premise
  thm-logarithm-derivative-and-integral: mathematical-premise
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
$g_{\mathcal K}$ is the global smooth tensor of [L1] and is nondegenerate with
inertia $(3,1,0)$ at every point; hence
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
the metric $-f\,d(x^0)^2+f^{-1}dr^2+r^2\gamma_{S^2}$ with $f<0$) onto the
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

[L1] The domain $\Omega=\{UV<1\}$ is open in $\mathbb R^2$ and $\mathcal K=\Omega\times S^2$ is a smooth four-manifold without boundary. The global tensor is $g_{\mathcal K}=-2s^3e^{-r/s}r^{-1}(dU\otimes dV+dV\otimes dU)+r^2\iota^*\gamma_{S^2}$; in a spherical-polar chart its angular components are $r^2\operatorname{diag}(1,\sin^2\vartheta)$, while pole charts use the smooth round metric ([[def-gr-kruskal-model-data]], [[def-euclidean-spheres-and-closed-balls]], [[ex-the-round-metric-on-the-sphere-as-an-induced-metric]]). A smooth nondegenerate symmetric tensor with inertia $(3,1,0)$ is Lorentzian ([[def-gr-smooth-lorentzian-objects]]).

[L2] The exterior datum has global angular term $r^2\iota^*\gamma_{S^2}$ and base metric $-f\,d(x^0)^2+f^{-1}dr^2$ with $f=1-s/r$ on $r>s$; on either tortoise branch, $r_*'=1/f$ and $r_*=r+s\log|r/s-1|$ ([[def-gr-schwarzschild-exterior-model]], [[lem-gr-schwarzschild-metric-properties]], [[lem-gr-schwarzschild-extension-chart]]).

[L3] The advanced extension on $M_{\mathrm{ext}}=\mathbb R\times(0,\infty)\times S^2$ has metric $g_{\mathrm{ext}}=-f\,dv^2+2\,dv\,dr+r^2\gamma_{S^2}$, $\operatorname{Ric}=S=G=0$ and Kretschmann scalar $12s^2/r^6$ for every $r>0$ ([[lem-gr-schwarzschild-extension-chart]] clauses (a), (d)). On either nonhorizon branch, the smooth map $\Phi_b(x^0,r,\omega)=(x^0+r_*(r),r,\omega)$ has inverse $(v,r,\omega)\mapsto(v-r_*(r),r,\omega)$, and $dv=dx^0+f^{-1}dr$ gives $\Phi_b^*g_{\mathrm{ext}}=-f\,d(x^0)^2+f^{-1}dr^2+r^2\gamma_{S^2}$ directly. Thus its domain and curvature conclusion include $0<r<s$, unlike the exterior-only suppliers.

[L4] A smooth function on an open real interval with nonzero derivative at a point has a smooth local inverse there ([[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]], $n=1$). For a bijection, these local inverses agree with its set-theoretic inverse. The mean value theorem gives strict decrease from a negative derivative on every compact subinterval ([[cor-mean-value-theorem]]); a continuous strictly monotone function on an interval attains every value between its endpoint limits ([[cor-intermediate-value-theorem-topological]]).

[L5] Two continuous maps into a Hausdorff space agreeing on a dense subset agree everywhere. The Ricci tensor and the Kretschmann scalar of a smooth nondegenerate metric are smooth tensor/scalar fields, so their components in every smooth chart are continuous ([[cor-two-continuous-maps-into-a-hausdorff-space-agreeing-on-a-dense-set-are-equal]], [[def-c-r-and-smooth-maps-between-smooth-manifolds]]).

[L6] The real exponential is smooth, has derivative $\exp$, satisfies $\exp(a+b)=\exp(a)\exp(b)$, and is a bijection $\mathbb R\to(0,\infty)$; the natural logarithm is its smooth inverse with derivative $1/x$. Product and chain rules apply, and $\varphi'(r)=-\frac{r}{s^2}e^{r/s}$ ([[def-real-exponential-function-and-e]], [[thm-derivative-of-exponential]], [[thm-exponential-addition-formula]], [[cor-exponential-is-a-bijection-onto-positive-reals]], [[def-natural-logarithm]], [[thm-logarithm-derivative-and-integral]], [[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]], [[def-derivative]], [[thm-chain-rule]], [[def-rational-power]]).

## Proof

**Proof technique:** establish the bijectivity and smoothness of the implicit radial function, verify the metric's matrix structure in the Kruskal chart, compute the two pullbacks explicitly, and transfer the vacuum and Kretschmann results by isometry and continuity.

1.1 (The radial function.) By [L6], $\varphi(r)=(1-r/s)e^{r/s}$ is smooth with $\varphi'(r)=-\frac{r}{s^2}e^{r/s}<0$ for $r>0$, so $\varphi$ is strictly decreasing by [L4], applied on every compact subinterval of $(0,\infty)$. Its limits are $1$ as $r\downarrow0$ and $-\infty$ as $r\to\infty$: for $x=r/s>1$, the defining exponential series gives $e^x\ge1+x$, so $(x-1)e^x\ge(x-1)(1+x)\to\infty$. By [L4] its image is exactly $(-\infty,1)$, hence it is a bijection. Its derivative never vanishes; the smooth inverse-function theorem gives a smooth local inverse at each point of the image, and bijectivity makes those local inverses agree with the global inverse. Thus $r=\varphi^{-1}\circ(UV)$ is defined and smooth on all of $\Omega$, justifying clause (c) of the datum. The level relation gives $r=s$ exactly when $UV=0$ and $r\downarrow0$ as $UV\uparrow1$. This proves (a). [L1, L4, L6, algebra]

1.2 (The metric and time orientation, including the poles.) The base block of the global tensor [L1] in $(U,V)$ is $\begin{pmatrix}0&b\\b&0\end{pmatrix}$ with $b=-2s^3e^{-r/s}/r<0$, so it is nondegenerate with one positive and one negative eigenvalue. The angular block $r^2\gamma_{S^2}$ is positive definite at every sphere point, including both poles. Thus the global metric has inertia $(3,1,0)$. For $N_{\mathcal K}=\partial_U+\partial_V$, $g_{\mathcal K}(N_{\mathcal K},N_{\mathcal K})=2b=-4s^3e^{-r/s}/r<0$ everywhere, so it is a time orientation. This proves (b). [L1, algebra]

2.1 (The isometry with the exterior.) On $\Omega_+=\{U<0,V>0\}$ define $U=-e^{-(x^0-r_*)/(2s)}$, $V=e^{(x^0+r_*)/(2s)}$ with the branch $r>s$ of $r_*$; then $UV=-e^{r_*/s}=-(r/s-1)e^{r/s}$ by [L2] (since $e^{r_*/s}=(r/s-1)e^{r/s}$ on $r>s$), so the function defined implicitly satisfies $r(U,V)=r$ and the map $\Psi_+$ is a diffeomorphism onto $\{U<0,V>0\}$ with inverse $(U,V,\omega)\mapsto(s\log(V/(-U)),\,r(U,V),\,\omega)$. Differentiating, $dU=-\frac{U}{2s}(dx^0-r_*'dr)$ and $dV=\frac{V}{2s}(dx^0+r_*'dr)$, hence $dU\,dV+dV\,dU=-\frac{UV}{2s^2}\bigl(dx^0\otimes dx^0-r_*'^2dr\otimes dr\bigr)$. Substituting into $g_{\mathcal K}$ and using $\frac{sUVe^{-r/s}}{r}=-f$ and $r_*'^2=f^{-2}$, the pulled-back metric is $-f\,d(x^0)^2+f^{-1}dr^2+r^2d\Omega^2=g$; this is the computation of [[lem-gr-schwarzschild-extension-chart]] restricted to the exterior. On the component $\{U>0,V>0\}$ define instead $U=e^{(r_*-x^0)/(2s)}$, $V=e^{(r_*+x^0)/(2s)}$ with the branch $r_*=r+s\log(1-r/s)$ of the interval $(0,s)$; then $UV=e^{r_*/s}=(1-r/s)e^{r/s}=-(r/s-1)e^{r/s}$, so again $r(U,V)=r$, and $dU\,dV+dV\,dU=\frac{UV}{2s^2}\bigl(dr_*^2-dx^0\otimes dx^0\bigr)$; the same substitution with $r_*'=1/f$ (negative there) gives $-f\,d(x^0)^2+f^{-1}dr^2+r^2d\Omega^2$ again, now with $f<0$. Finally the map $(U,V,\omega)\mapsto(-U,-V,\omega)$ leaves both $UV$ and $dU\,dV+dV\,dU$ unchanged and fixes $r$, $g_{\vartheta\vartheta}$ and $g_{\varphi\varphi}$; it is therefore an isometry, and it exchanges the two components with $UV<0$ and the two with $UV>0$. This proves (c). [L1, L2, L6, step 1.1, algebra]

3.1 (The four connected components.) No connected subset of $\{UV\ne0\}$ can change the sign of either continuous nonzero coordinate. Step 2.1 and simultaneous sign reversal identify each sign region with $\mathbb R\times J\times S^2$, where $J=(s,\infty)$ or $(0,s)$. These domains are path connected: interpolate the real and radial coordinates linearly; any two sphere points can be joined by normalized straight segments, inserting an intermediate unit coordinate vector not antipodal to either endpoint when needed (among the six signed coordinate vectors at most two are excluded). All segment normalizations have nonzero denominators. Hence each sign region is connected, and the four are exactly the components asserted in (c). [step 2.1, algebra]

3.2 (Vacuum and Kretschmann scalar.) By step 2.1, on every component with $UV\ne0$ the metric is isometric to a branch of the spherical metric with $f=1-s/r$. By [L3] each branch is isometric to the corresponding open region of the advanced extension, whose curvature identities hold for all $r>0$. Uniqueness of the metric-selected connection transports it under these isometries, and therefore transports its curvature tensor and metric contractions. Thus $\operatorname{Ric}=S=G=0$ and the Kretschmann scalar is $12s^2/r^6$ on both branches and their sign-reversed copies. These identities hold on the dense open subset $D=\{UV\ne0\}\times(S^2\setminus\{\text{two poles}\})$. The global metric is smooth and nondegenerate by step 1.2, so its Ricci tensor and Kretschmann scalar are smooth. In any smooth product chart their components are continuous and agree on the dense subset $D$ with zero and with $12s^2/r^6$, respectively; [L5] extends the identities over the axes and both poles. This proves (d), including $K=12/s^4$ at $r=s$ and $K\to\infty$ as $UV\to1$. Clause (e) records the scope. [L3, L5, step 1.1, step 2.1, algebra]

4.1 (Conclusion.) Steps 1.1-3.2 prove clauses (a)-(d) from the datum's definitions and the all-positive-radius advanced-extension supplier; the claims about maximality and completeness are explicitly not made, as recorded in (e). [step 1.1, step 1.2, step 2.1, step 3.2, given] ∎

## Remarks

- **Why continuity suffices.** The Ricci tensor and the Kretschmann scalar
  are defined from the metric by two derivatives. The global metric is smooth
  across the axes and in pole charts; the isometry calculations on the dense
  regular subset therefore extend the tensor identities by continuity. This
  establishes smoothness across $r=s$, not real analyticity.

- **The implicit relation in the source.** The sources write
  $UV=-(r/s-1)e^{r/s}$ in the form $UV=(2GM-r)e^{r/2GM}/(2GM)$, which is the
  same identity with $s=2GM$; the extraction of $r$ from $UV$ uses only that
  the function is a strictly decreasing bijection of $(0,\infty)$ onto
  $(-\infty,1)$, as proved in step 1.1.
