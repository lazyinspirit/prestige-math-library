---
id: prop-rigidity-in-rauch-comparison
kind: proposition
title: Rigidity in rauch comparison
status: published
origin: pipeline
deps:
  - thm-algebraic-symmetries-of-the-riemann-tensor
  - thm-rauch-comparison-theorem-first-form
  - thm-rauch-comparison-theorem-second-form
  - prop-model-functions-solve-the-constant-curvature-jacobi-equation
  - def-countable-choice
  - thm-index-lemma
  - def-index-form-of-a-geodesic-segment
  - lem-integration-by-parts-for-the-index-form
  - def-radial-riccati-operator
  - thm-radial-riccati-equation
  - def-radial-jacobi-tensor
  - def-sectional-curvature
  - def-riemann-curvature-four-tensor
  - prop-curvature-tensor-of-constant-sectional-curvature
  - def-constant-sectional-curvature-and-space-form
  - thm-existence-and-uniqueness-of-parallel-sections
  - prop-levi-civita-parallel-transport-preserves-lengths-angles-and-volume
  - lem-riccati-comparison-for-scalar-initial-shape
  - def-comparison-sine-cosine-and-cotangent-functions
  - thm-existence-and-uniqueness-of-jacobi-fields-from-initial-data
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - def-jacobi-field
  - def-conjugate-points-along-a-geodesic-and-their-multiplicity
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  repair: research/frontier-38-owner-30-published-format-misc-prop-rigidity-in-rauch-comparison.receipt.json
sources:
  scraped: []
  references:
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "§§24.2, 25.3, 26.2, pp.176–177, 188–189, 194–197: Rauch comparison and the equality discussion of the index comparison"
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "§3, pp.12–14: Rauch comparison for Jacobi tensors and the equality case of the Riccati comparison"
---

## Statement

Assume the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$. Let
$(M,g)$ be a Riemannian manifold of dimension $n\ge2$ and let
$\gamma:[0,T]\to M$ be a unit-speed geodesic with $T>0$.

**First form.** Let $J\ne0$ be a normal Jacobi field along $\gamma$ with
$$J(0)=0,\qquad a:=|D_tJ(0)|>0,$$
and suppose every radial sectional curvature satisfies
$$\sec_M(v\wedge\dot\gamma(t))\ge k\qquad(0\le t\le T,\ 0\ne v\perp\dot\gamma(t)),$$
while $\gamma(0)$ has no conjugate point along $\gamma$ in $(0,T]$
([[def-conjugate-points-along-a-geodesic-and-their-multiplicity]]). Let $M_k$
be the simply connected space form of constant sectional curvature $k$, let
$\gamma_k$ be a unit-speed geodesic in $M_k$, and choose a linear isometry
$\mathcal I:T_{\gamma(0)}M\to T_{\gamma_k(0)}M_k$ carrying
$\dot\gamma(0)$ to $\dot\gamma_k(0)$. Its restriction maps
$N_0:=\{\dot\gamma(0)\}^{\perp}$ isometrically to
$N_{k,0}:=\{\dot\gamma_k(0)\}^{\perp}$. Put
$w_0:=D_tJ(0)\in N_0$, $w_k:=\mathcal I w_0$, and let $\Phi_t$ be parallel
transport along $\gamma_k$; define
$$J_k(t):=\operatorname{sn}_k(t)\,\Phi_t w_k.$$
If
$$|J(t)|=|J_k(t)|=a\operatorname{sn}_k(t)\qquad(0<t\le T),$$
then
$$J(t)=\operatorname{sn}_k(t)\,P_t\bigl(D_tJ(0)\bigr)\qquad(0\le t\le T),$$
where $P_t$ is parallel transport along $\gamma$, and
$$\sec_M\bigl(\operatorname{span}\{J(t),\dot\gamma(t)\}\bigr)=k\qquad(0<t\le T);$$
in particular the radial curvature is the model curvature wherever $J$ is
nonzero, and for $k>0$ necessarily $T<\pi/\sqrt k$.

**Second form.** Let $J\ne0$ be a normal Jacobi field along $\gamma$ with
$$D_tJ(0)=\lambda J(0)\qquad(\lambda\in\mathbb R),$$
let $Y$ be the normal Jacobi tensor with
$$Y(0)=\operatorname{id},\qquad Y'(0)=\lambda\operatorname{id},$$
and let $t_f\in(0,T]\cup\{+\infty\}$ be its first singular time in
$[0,T]$, with $t_f=+\infty$ if none occurs. Suppose every radial sectional
curvature along $\gamma$ is at least $k$. Let $M_k$ be the simply connected
space form of curvature $k$ and let $\gamma_k$ be a unit-speed model geodesic.
Put $u:=J(0)\ne0$, choose a linear
isometry $\mathcal I:T_{\gamma(0)}M\to T_{\gamma_k(0)}M_k$ carrying
$\dot\gamma(0)$ to $\dot\gamma_k(0)$, and set $u_k:=\mathcal I u$. Let $\Phi_t$
be parallel transport along $\gamma_k$ and define
$$f_k:=\operatorname{cs}_k+\lambda\operatorname{sn}_k,\qquad J_k(t):=f_k(t)\,\Phi_tu_k.$$
If
$$|J(t)|=|J_k(t)|=f_k(t)|u|\qquad(0<t\le T,\ t<t_f),$$
then $f_k(t)>0$ for every $t\in[0,T]$ with $t<t_f$ and
$$J(t)=f_k(t)\,P_tu\qquad(0\le t\le T,\ t<t_f),$$
while the actual curvature operator satisfies
$$R(J(t),\dot\gamma(t))\dot\gamma(t)=kJ(t)\qquad(0<t\le T,\ t<t_f).$$
Equivalently, the radial sectional curvature of
$\operatorname{span}\{J(t),\dot\gamma(t)\}$ is $k$ there. If $t_f\le T$,
the field formula and curvature-vector equation extend to $t=t_f$ by
continuity. The sectional-curvature conclusion extends there only if
$J(t_f)\ne0$; when $J(t_f)=0$, its displayed span is not a two-plane.
The limiting parallel normal direction $P_{t_f}u$ still spans a two-plane
with $\dot\gamma(t_f)$ of curvature $k$. No comparison is made past $t_f$.

## Facts & Assumptions

**Given:** The inherited $\mathrm{AC}_\omega$ of [A1]; a Riemannian manifold $(M,g)$ of dimension $n\ge2$ and a unit-speed geodesic $\gamma:[0,T]\to M$; in the first form a normal Jacobi field $J$ with $J(0)=0$, $|D_tJ(0)|=a>0$, radial sectional curvatures at least $k$ and no conjugate point of $\gamma(0)$ along $\gamma$ in $(0,T]$; in the second form a normal Jacobi field $J\ne0$ with $D_tJ(0)=\lambda J(0)$, the initial-shape tensor $Y$ of $Y(0)=\operatorname{id}$, $Y'(0)=\lambda\operatorname{id}$, its first focal time $t_f$ on $[0,T]$ (or $+\infty$ if none occurs there), and radial sectional curvatures at least $k$.

[A1] The countable-choice premise is the inherited $\mathrm{AC}_\omega$ ([[def-countable-choice]]), carried through the curvature and index-form suppliers; the Jacobi and
parallel initial-value suppliers require no choice; no further selection is made below.

[F1] Rauch comparison, first form: under exactly the hypotheses of the first form above (with the model manifold $M_k$, its geodesic $\gamma_k$ and the normal Jacobi field $J_k$ of the statement), $|J(t)|\le|J_k(t)|$ for $0\le t\le T$, and $J_k$ has no zero in $(0,T]$ ([[thm-rauch-comparison-theorem-first-form]]).

[F2] Index form: for an affinely parametrized geodesic segment $\gamma:[0,b]\to M$, the index form of [[def-index-form-of-a-geodesic-segment]] is $$I_\gamma(V,W)=\int_0^b\Bigl(g(D_tV,D_tW)-g\bigl(R(V,\dot\gamma)\dot\gamma,W\bigr)\Bigr)dt .$$ For a $C^2$ field $V$, integration by parts ([[lem-integration-by-parts-for-the-index-form]]) gives $$I_\gamma(V,W)=\bigl[g(D_tV,W)\bigr]_0^b -\int_0^bg\bigl(D_t^2V+R(V,\dot\gamma)\dot\gamma,W\bigr)dt,$$ so if $V$ is a Jacobi field ([[def-jacobi-field]]) the integral term vanishes and $I_\gamma(V,V)=g(D_tV(b),V(b))-g(D_tV(0),V(0))$.

[F3] Index lemma: if $\gamma:[0,b]\to M$ is a geodesic with no conjugate point of $\gamma(0)$ in $(0,b]$, and $V$ is a continuous field that is $C^1$ on each piece of a finite subdivision with $V(0)=J(0)$, $V(b)=J(b)$ for the unique Jacobi field $J$ with those endpoint values, then $I_\gamma(J,J)\le I_\gamma(V,V)$, with equality if and only if $V=J$ ([[thm-index-lemma]]).

[F4] Parallel frames: parallel transport along $\gamma$ is an isometry of tangent spaces preserving the metric and its parallel sections are uniquely determined by one value ([[thm-existence-and-uniqueness-of-parallel-sections]], [[prop-levi-civita-parallel-transport-preserves-lengths-angles-and-volume]]). In particular a parallel orthonormal frame along a geodesic can be prescribed by any orthonormal basis of one tangent space, and coefficients of normal fields in such a frame satisfy $\bigl|\sum_i x_iE_i\bigr|^2=\sum_ix_i^2$ and $\bigl|D_t\sum_ix_iE_i\bigr|^2=\sum_i(x_i')^2$.

[F5] Radial curvature and sectional curvature: $R_\gamma(t)w =P_t^{-1}\bigl(R(P_tw,\dot\gamma(t))\dot\gamma(t)\bigr)$ on the normal space ([[def-radial-jacobi-tensor]]), and for $0\ne X\perp\dot\gamma(t)$ $$\sec_M\bigl(\operatorname{span}\{X,\dot\gamma(t)\}\bigr) =\frac{\operatorname{Rm}(X,\dot\gamma(t),\dot\gamma(t),X)}{|X|^2} =\frac{\langle R_\gamma(t)P_t^{-1}X,P_t^{-1}X\rangle}{|X|^2},$$ with $\operatorname{Rm}(X,Y,Z,W)=g(R(X,Y)Z,W)$ ([[def-sectional-curvature]], [[def-riemann-curvature-four-tensor]]). Hence the radial curvature hypothesis is the Loewner inequality $R_\gamma(t)\ge k\operatorname{id}$ on the normal space.

[F6] Rauch comparison, second form: under the hypotheses of the second form above, $f_k(t)>0$ and $|J(t)|\le|J_k(t)|=f_k(t)|u|$ for every $t\in[0,T]$ with $t<t_f$, with extension to $t=t_f$ by continuity when $t_f\le T$ ([[thm-rauch-comparison-theorem-second-form]]).

[F7] Riccati comparison for scalar initial shape: if $R_1,R_2:[0,T]\to \operatorname{End}(E)$ are continuous self-adjoint families with $R_1\ge R_2$ in the Loewner order and $Y_i''+R_iY_i=0$ with $Y_i(0)=\operatorname{id}$, $Y_i'(0)=\lambda\operatorname{id}$, then on the interval before the first singular time of $Y_1$ the operators $S_i=Y_i'Y_i^{-1}$ are self-adjoint and satisfy $S_i'+S_i^2+R_i=0$, and $S_1\le S_2$ in the Loewner order ([[lem-riccati-comparison-for-scalar-initial-shape]]).

[F8] Model functions: $\operatorname{sn}_k''+k\operatorname{sn}_k=0$, $\operatorname{cs}_k''+k\operatorname{cs}_k=0$, with $\operatorname{sn}_k(0)=0$, $\operatorname{sn}_k'(0)=\operatorname{cs}_k(0)=1$, $\operatorname{cs}_k'(0)=0$, and $\operatorname{cs}_k^2+k\operatorname{sn}_k^2=1$ ([[prop-model-functions-solve-the-constant-curvature-jacobi-equation]]); the domain conventions of [[def-comparison-sine-cosine-and-cotangent-functions]] give $\operatorname{sn}_k(t)>0$ for $0<t<\pi/\sqrt k$ when $k>0$ and for all $t>0$ when $k\le0$. For every $\lambda\in\mathbb R$ the function $f_k=\operatorname{cs}_k+\lambda\operatorname{sn}_k$ satisfies $f_k''+kf_k=0$, $f_k(0)=1$, $f_k'(0)=\lambda$.

[F9] Constant curvature: a Riemannian manifold has constant sectional curvature $k$ exactly when $R(X,Y)Z=k(g(Y,Z)X-g(X,Z)Y)$ ([[prop-curvature-tensor-of-constant-sectional-curvature]]); a space form means a connected, boundaryless, geodesically complete Riemannian manifold of constant sectional curvature ([[def-constant-sectional-curvature-and-space-form]]). The simply connected model $M_k$, its geodesic $\gamma_k$ and the comparison isometry are the data stipulated in the Statement; the definition supplies the space-form predicate, not an existence theorem.

[F10] Real spectral theorem: a self-adjoint endomorphism of a finite-dimensional real inner product space has an orthonormal basis of eigenvectors with real eigenvalues ([[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]).

[F11] Existence and uniqueness of Jacobi fields: along a geodesic, for prescribed values of $J(0)$ and $D_tJ(0)$ in the tangent space there is exactly one Jacobi field with those initial data ([[thm-existence-and-uniqueness-of-jacobi-fields-from-initial-data]]).

## Proof

**Proof technique:** direct: in the first form, equality of the two norms forces equality at every stage of the index-form comparison, the index lemma identifies the transferred model field with $J$, and the curvature integrand collapses; in the second form the Riccati difference $g_k\operatorname{id}-S$ is positive semidefinite and annihilates the parallel-transported field by the log-derivative equality.

1.1 First form: the equality hypothesis meets the Rauch comparison. By [F5] the radial sectional hypothesis is $R_\gamma(t)\ge k\operatorname{id}$ on $N_t$ for $0\le t\le T$. The model field $J_k(t)=\operatorname{sn}_k(t)\Phi_tw_k$ is a normal Jacobi field along $\gamma_k$: it is normal because $\Phi_t$ is isometric and $w_k=\mathcal I w_0\perp\dot\gamma_k(0)$ and $|w_k|=|w_0|=a$ [F4], and by [F9] and [F8] $$D_t^2J_k+R(J_k,\dot\gamma_k)\dot\gamma_k =\operatorname{sn}_k''\Phi_tw_k+k\bigl(g(\dot\gamma_k,\dot\gamma_k)J_k-g(J_k,\dot\gamma_k)\dot\gamma_k\bigr) =(\operatorname{sn}_k''+k\operatorname{sn}_k)\Phi_tw_k=0,$$ since $g(J_k,\dot\gamma_k)=0$. Its initial data are $J_k(0)=0$ and $D_tJ_k(0)=w_k=\mathcal I(D_tJ(0))$, so the initial derivatives correspond under the chosen isometry and both have norm $a>0$. All hypotheses of [F1] are met, and [F1] gives $|J(t)|\le|J_k(t)|$ on $[0,T]$ together with $J_k(t)\ne0$ for $0<t\le T$. The equality hypothesis says $$|J(t)|=|J_k(t)|=a\operatorname{sn}_k(t)\ne0\qquad(0<t\le T),$$ so $\operatorname{sn}_k(b)>0$ for every $b\in(0,T]$. For $k>0$ this forces $T<\pi/\sqrt k$: at $t_0=\pi/\sqrt k$ the model sine vanishes, so were $t_0\le T$ the equality $|J(t_0)|=a\operatorname{sn}_k(t_0)=0$ would make $t_0$ a conjugate instant of $\gamma(0)$ along $\gamma$, contrary to the hypothesis that there is none in $(0,T]$; hence $T<\pi/\sqrt k$ and in particular $\operatorname{sn}_k>0$ on all of $(0,T]$, which makes every division below legitimate. [A1, F1, F5, F8, F9, F4, given]

1.2 First form: index forms of the normalized Jacobi fields. Fix $b\in(0,T]$. By the equality hypothesis and [F1], $|J(b)|=|J_k(b)|=a\operatorname{sn}_k(b)>0$; normalize $$J^b:=\frac{J}{|J(b)|},\qquad J_k^b:=\frac{J_k}{|J_k(b)|},$$ normal Jacobi fields along $\gamma$ and $\gamma_k$ with $J^b(0)=J_k^b(0)=0$ and $|J^b(b)|=|J_k^b(b)|=1$; a scalar multiple of a Jacobi field is a Jacobi field by [F2] and [F11], and $|J^b|>0$ on $(0,b]$. By [F2], applied on the segment $[0,b]$ to the Jacobi fields $J^b$ and $J_k^b$, $$I_\gamma(J^b,J^b)=\bigl[g(D_tJ^b,J^b)\bigr]_0^b =\frac{g\bigl(D_tJ(b),J(b)\bigr)}{|J(b)|^2} =\frac12\bigl(\log|J|^2\bigr)'(b),$$ and likewise $I_{\gamma_k}(J_k^b,J_k^b) =\frac12(\log|J_k|^2)'(b)$ on $[0,b]$ along $\gamma_k$; the lower boundary terms vanish because $J^b(0)=J_k^b(0)=0$. The equality hypothesis $|J|^2=|J_k|^2$ on $(0,T]$ makes the two logarithmic derivatives equal at every $b\in(0,T]$, so $$ I_\gamma(J^b,J^b)=I_{\gamma_k}(J_k^b,J_k^b)\qquad(0<b\le T).\tag{*} $$ [F2, F3, given]

1.3 Second form: the Riccati setup and its comparison. Transport the given field to $N_0$: $y(t):=P_t^{-1}J(t)$ satisfies $y''+R_\gamma y=0$ with $y(0)=u\ne0$ and $y'(0)=D_tJ(0)=\lambda u$; the operator family $R_\gamma$ is continuous and self-adjoint by [[thm-algebraic-symmetries-of-the-riemann-tensor]] under [A1], and by the curvature hypothesis $R_\gamma(t)\ge k\operatorname{id}$ in the Loewner order. By definition $Y$ is the endomorphism-valued solution of the same matrix initial value problem, so $y(t)=Y(t)u$ and $J(t)=P_ty(t)$, with $|J(t)|=|y(t)|$. The first focal time $t_f$ is the first singular time of $Y$ in $[0,T]$ (or $+\infty$ if none occurs there). Applying [F7] with $E=N_0$, $R_1=R_\gamma$, $R_2= k\operatorname{id}$, $Y_1=Y$, $Y_2=f_k\operatorname{id}$, and using [F8], gives for $0<t\le T$ with $t<t_f$: the operator $S:=Y'Y^{-1}$ is self-adjoint and solves $$S'+S^2+R_\gamma=0,$$ and, with $g_k:=f_k'/f_k$, $$S(t)\le g_k(t)\operatorname{id},\qquad\text{that is}\qquad \tilde U(t):=g_k(t)\operatorname{id}-S(t)\ge0$$ in the Loewner order. Moreover $Y(t)$ is invertible and $J(t)=P_tY(t)u\ne0$ for $0<t\le T$ with $t<t_f$, and $f_k(t)>0$ there by [F6], so $g_k$ is defined and smooth on the compared interval with $$g_k'=-k-g_k^2,$$ which follows by differentiating $g_k=f_k'/f_k$ with [F8]. [F5, F6, F7, F8, given]

2.1 First form: transferring the model field. Fix $b\in(0,T]$ and choose parallel orthonormal frames $(E_1,\dots,E_n)$ along $\gamma$ and $(\tilde E_1,\dots,\tilde E_n)$ along $\gamma_k$ with $E_1=\dot\gamma$, $\tilde E_1=\dot\gamma_k$ and $$E_2(b)=J^b(b),\qquad \tilde E_2(b)=J_k^b(b);$$ this is possible because the two vectors are normal and of unit length, and a parallel frame is determined by its value at the single point $b$ [F4]. Writing $$J_k^b(t)=\sum_{i=2}^n\tilde a_i(t)\tilde E_i(t),\qquad \sum_{i=2}^n\tilde a_i(t)^2=|J_k^b(t)|^2,$$ define the transferred field $X(t):=\sum_{i=2}^n\tilde a_i(t)E_i(t)$ along $\gamma$. Then $X$ is a continuous field that is $C^\infty$ on $[0,b]$, $X(0)=J^b(0)=0$, and $X(b)=J^b(b)$ because the coefficient vector $(\tilde a_2(b),\dots,\tilde a_n(b))=(1,0,\dots,0)$ of $J_k^b(b)$ is also the coefficient vector of $J^b(b)$ in the frame $(E_i)$; and by [F4] $$|X(t)|^2=|J_k^b(t)|^2,\qquad |D_tX(t)|^2=|D_tJ_k^b(t)|^2 \qquad(0\le t\le b),$$ because the frames are parallel orthonormal and the coefficients transfer verbatim. The index lemma [F3] applies on the conjugate-free segment $[0,b]$ from step 1.1 and gives $$I_\gamma(J^b,J^b)\le I_\gamma(X,X).$$ Where $X(t)\ne0$, [F5] and the curvature hypothesis give $$\sec_M\bigl(\operatorname{span}\{X(t),\dot\gamma(t)\}\bigr)\ge k =\sec_{M_k}\bigl(\operatorname{span}\{J_k^b(t),\dot\gamma_k(t)\}\bigr),$$ and where $X(t)=0$ the curvature term of the integrand vanishes; since $|X|=|J_k^b|$ and $|D_tX|=|D_tJ_k^b|$, multiplying the two curvature terms by the common squared norm and integrating over $[0,b]$ yields $$I_\gamma(X,X)\le I_{\gamma_k}(J_k^b,J_k^b).$$ Chaining with [F3] and the display of step 1.2, $$I_\gamma(J^b,J^b)\le I_\gamma(X,X)\le I_{\gamma_k}(J_k^b,J_k^b) =I_\gamma(J^b,J^b),$$ so both inequalities are equalities. [F4, F5, F3, step 1.2, given]

2.2 Second form: equality annihilates the Riccati difference. For $0<t\le T$ with $t<t_f$, put $y:=Y(t)u$. Then $y'=Sy$ and $|y|=|J|=f_k|u|$, with $f_k>0$. Hence $$\frac{d}{dt}\log|y|=\frac{\langle Sy,y\rangle}{|y|^2}=\frac{f_k'}{f_k}=:g_k,$$ so $\langle\tilde U y,y\rangle=0$ for $\tilde U:=g_k\operatorname{id}-S$. Since $\tilde U$ is self-adjoint and positive semidefinite by step 1.3, the spectral theorem gives $\tilde U y=0$. [F2, F10, step 1.3, given]

3.1 First form: equality in the index lemma identifies the fields.  The first equality of step 2.1, $I_\gamma(J^b,J^b)=I_\gamma(X,X)$, is the equality case of the index lemma [F3] for the Jacobi field $J^b$ and the admissible field $X$ with the same endpoints; hence $X=J^b$ on $[0,b]$. By step 2.1 the transferred model field $X$ is the parallel transfer of $J_k^b$, so for every $t\in[0,b]$ $$J^b(t)=X(t)=\sum_{i=2}^n\tilde a_i(t)E_i(t).$$ [F3, step 2.1, given]

3.2 Second form: differentiating the vanishing. On $0<t\le T$ with $t<t_f$, $g_k'=-k-g_k^2$ and the Riccati equation gives $$\tilde U'=g_k'\operatorname{id}-S'=(S-g_k\operatorname{id})(S+g_k\operatorname{id})+(R_\gamma-k\operatorname{id}).$$ The operators $S$ and $\tilde U=g_k\operatorname{id}-S$ commute. Since $\tilde U y=0$ and $y'=Sy$, differentiating yields $$0=(\tilde U y)'=\tilde U' y+\tilde U S y=(R_\gamma-k\operatorname{id})y,$$ because $(S-g_k\operatorname{id})(S+g_k\operatorname{id})y=0$ and $\tilde U S y=S\tilde U y=0$. Thus $R_\gamma y=ky$ on the compared interval. [step 1.3, step 2.2, given]

4.1 First form: equality in the curvature comparison. Write the difference of the two index forms of step 2.1 as a single integral. Using $|D_tX|=|D_tJ_k^b|$, $\operatorname{Rm}(X,\dot\gamma,\dot\gamma,X) =\sec_M(\dots)|X|^2$ and $\operatorname{Rm}(J_k^b,\dot\gamma_k,\dot\gamma_k,J_k^b) =k|J_k^b|^2$ from [F5], $$0=I_\gamma(X,X)-I_{\gamma_k}(J_k^b,J_k^b) =\int_0^b |X(t)|^2\Bigl(k-\sec_M\bigl(\operatorname{span} \{X(t),\dot\gamma(t)\}\bigr)\Bigr)dt ,$$ the integrand at points $X(t)=0$ being $0$ by the same conventions. The integrand is continuous on $[0,b]$ and nonpositive, and its integral vanishes, so it vanishes identically; hence $$\sec_M\bigl(\operatorname{span}\{X(t),\dot\gamma(t)\}\bigr)=k \qquad(0<t\le b),$$ at every $t$ where $X(t)\ne0$; and $X(t)\ne0$ for all $t\in(0,b]$, as shown in step 3.1 above together with $|J^b|>0$ on $(0,b]$. [F5, step 2.1, given]

5.1 First form: conclusion.  By step 3.1 and step 4.1, for every $b\in(0,T]$ and every $t\in(0,b]$ $$J^b(t)=\frac{\operatorname{sn}_k(t)}{\operatorname{sn}_k(b)}\, P_tw_b,\qquad |w_b|=1,$$ for a unit vector $w_b\in N_0$: indeed $J_k^b$ is the normal Jacobi field along $\gamma_k$ with $J_k^b(0)=0$ and $\Phi_b^{-1}J_k^b(b)=w_b$, hence equals $\operatorname{sn}_k(t)\Phi_tw_b/\operatorname{sn}_k(b)$ by [F11] and [F8], and the transfer of this field is $\operatorname{sn}_k(t)P_tw_b/\operatorname{sn}_k(b)$. Multiplying by $|J(b)|=a\operatorname{sn}_k(b)$ from step 1.1, $$J(t)=a\operatorname{sn}_k(t)P_tw_b\qquad(0<t\le b\le T).$$ The left side is independent of $b$, so for fixed $t$ and two parameters $b,b'\ge t$ the unit vectors $w_b,w_{b'}$ satisfy $P_tw_b=P_tw_{b'}$, hence $w_b=w_{b'}$. Writing $w\in N_0$ for this common unit vector, $J(t)=a\operatorname{sn}_k(t)P_tw$ for every $t\in(0,T]$, and passing to the derivative at $t=0$ (the expansion $\operatorname{sn}_k(t)=t+O(t^2)$ and $P_tw\to w$ as $t\downarrow0$) gives $D_tJ(0)=aw$, so $w=D_tJ(0)/a$ and therefore $$J(t)=\operatorname{sn}_k(t)P_t\bigl(D_tJ(0)\bigr)\qquad(0\le t\le T),$$ the formula also holding at $t=0$ where both sides vanish. Finally the conclusion of step 4.1, applied to the span of $X(t)=J^b(t)\propto J(t)$, gives $$\sec_M\bigl(\operatorname{span}\{J(t),\dot\gamma(t)\}\bigr)=k \qquad(0<t\le T),$$ which is the asserted radial curvature equality wherever $J$ is nonzero. [step 1.1, step 3.1, step 4.1, F8, F11, given]

6.1 Second form: conclusion. For $0<t\le T$ with $t<t_f$, step 3.2 gives $R_\gamma y=ky$, where $y=P_t^{-1}J$. By [F5], this is the actual curvature equation $$R(J(t),\dot\gamma(t))\dot\gamma(t)=kJ(t).$$ Also $y=Y(t)u\ne0$, since $Y(t)$ is invertible and $u\ne0$; hence the radial sectional curvature of $\operatorname{span}\{J(t),\dot\gamma(t)\}$ is $k$. In a fixed basis of $N_0$, each coordinate $y_i$ satisfies $y_i''+ky_i=0$, with $y_i(0)=u_i$ and $y_i'(0)=\lambda u_i$. Set $z_i:=y_i-u_i\operatorname{cs}_k-\lambda u_i\operatorname{sn}_k$. Then $z_i''+kz_i=0$ and $z_i(0)=z_i'(0)=0$. The Wronskian $z_i'\operatorname{sn}_k-z_i\operatorname{sn}_k'$ has derivative $(z_i''+kz_i)\operatorname{sn}_k=0$, so it is identically zero. The comparison sine is positive at every $t\in(0,T]$ with $t<t_f$: for $k\le0$ this follows from its formula; for $k>0$, $f_k>0$ on the compared interval and $f_k(\pi/\sqrt{k})=-1$, so that interval lies before the first positive zero of $\operatorname{sn}_k$. Thus $(z_i/\operatorname{sn}_k)'=0$, and its limit at zero is $z_i'(0)=0$, so $z_i=0$. Therefore $$y(t)=f_k(t)u,\qquad J(t)=f_k(t)P_tu\qquad(0\le t\le T,\ t<t_f).$$ If $t_f\le T$, these equalities and the curvature-vector equation extend to $t_f$ by continuity. Before $t_f$, division by $f_k>0$ gives $R(P_tu,T)T=kP_tu$, so this equation also extends to $t_f$. Thus the plane spanned by the nonzero vector $P_{t_f}u$ and $T(t_f)$ has curvature $k$. The plane spanned by $J(t_f)$ and $T(t_f)$ has the same conclusion only when $J(t_f)\ne0$. [F5, F6, F8, F11, step 2.2, step 3.2, given] ∎

## Source locator

The equality case of the Rauch comparison is treated in Eschenburg §3 (pp.12–14): equality of the compared norms at all times forces equality in the Riccati comparison $S_1\le S_2$, hence radial curvature equality and a parallel-transported model field; the same discussion for the scalar initial shape (the tensor $Y$ with $Y(0)=\operatorname{id}$, $Y'(0)=\lambda \operatorname{id}$) is the equality case of the matrix Riccati comparison of that section. Datar §§24.2, 25.3 and 26.2 (pp.176–177, 188–189, 194–197) contains the index-form comparison and the logarithmic-derivative step used for the first form. The proof above is carried out from the in-run Rauch theorems, the index lemma and the Riccati comparison of this page.
