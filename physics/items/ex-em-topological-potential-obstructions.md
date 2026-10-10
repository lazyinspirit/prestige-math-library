---
id: ex-em-topological-potential-obstructions
kind: example
title: "Topological obstructions to global potentials: a curl-free loop field and a divergence-free sphere-flux field"
domain: physics
status: draft
origin: pipeline
dependency_level: 15
deps: [pthm-em-spacetime-potentials, post-em-vacuum-maxwell, def-vector-potential-of-a-c1-vector-field, def-closed-and-exact-c1-vector-fields, def-divergence-and-curl-of-a-c1-vector-field, def-scalar-and-vector-line-integrals-along-piecewise-c1-paths, lem-a-vector-line-integral-pulls-back-to-the-parameter-region, thm-gradient-theorem-for-line-integrals, thm-ftc-second-part, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity, thm-sine-cosine-signs-monotonicity-and-ranges, thm-quarter-turn-values-and-shift-formulas, thm-sine-and-cosine-parametrize-the-unit-circle, thm-sine-cosine-zero-sets-and-fundamental-period, def-admissible-regular-parametrized-surface-patch, def-oriented-unit-normal-and-flux-of-a-surface-patch, def-cross-product-in-r3, lem-cross-product-is-bilinear-alternating-and-orthogonal, thm-jordan-fubini-by-sections, def-riemann-integral-over-a-jordan-set, def-type-i-type-ii-and-elementary-green-regions, def-positive-orientation-for-elementary-region-boundaries, def-the-induced-boundary-chain-of-a-c2-surface-patch, thm-the-classical-stokes-theorem-for-a-c2-surface-patch, thm-line-integrals-under-reversal-and-concatenation, thm-radial-straight-line-map-on-punctured-rn, lem-radial-normalisation-is-continuous, thm-higher-dimensional-spheres-are-simply-connected, def-simply-connected, def-path-connected, cor-euclidean-spheres-are-path-connected, def-homotopy-relative-and-path-homotopy, def-based-loops-and-fundamental-group, cor-homotopy-relative-and-path-homotopy-are-equivalence-relations, cor-linear-maps-with-finite-dimensional-domain-are-bounded, thm-bounded-linear-operator-equivalences, lem-algebra-of-continuous-real-maps-on-a-space, thm-path-connected-implies-connected, thm-algebra-of-derivatives, thm-chain-rule-for-total-derivatives, thm-real-power-continuity-and-derivatives, def-ck-euclidean-maps-and-diffeomorphisms, def-star-shaped-open-subset-of-rn, def-euclidean-inner-product, def-interval]
dependency_roles:
  pthm-em-spacetime-potentials: physical-result
  post-em-vacuum-maxwell: physical-assumption
  def-vector-potential-of-a-c1-vector-field: mathematical-premise
  def-closed-and-exact-c1-vector-fields: mathematical-premise
  def-divergence-and-curl-of-a-c1-vector-field: mathematical-premise
  def-scalar-and-vector-line-integrals-along-piecewise-c1-paths: mathematical-premise
  lem-a-vector-line-integral-pulls-back-to-the-parameter-region: mathematical-premise
  thm-gradient-theorem-for-line-integrals: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  thm-sine-cosine-signs-monotonicity-and-ranges: mathematical-premise
  thm-quarter-turn-values-and-shift-formulas: mathematical-premise
  thm-sine-and-cosine-parametrize-the-unit-circle: mathematical-premise
  thm-sine-cosine-zero-sets-and-fundamental-period: mathematical-premise
  def-admissible-regular-parametrized-surface-patch: mathematical-premise
  def-oriented-unit-normal-and-flux-of-a-surface-patch: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  lem-cross-product-is-bilinear-alternating-and-orthogonal: mathematical-premise
  thm-jordan-fubini-by-sections: mathematical-premise
  def-riemann-integral-over-a-jordan-set: mathematical-premise
  def-type-i-type-ii-and-elementary-green-regions: mathematical-premise
  def-positive-orientation-for-elementary-region-boundaries: mathematical-premise
  def-the-induced-boundary-chain-of-a-c2-surface-patch: mathematical-premise
  thm-the-classical-stokes-theorem-for-a-c2-surface-patch: mathematical-premise
  thm-line-integrals-under-reversal-and-concatenation: mathematical-premise
  thm-radial-straight-line-map-on-punctured-rn: mathematical-premise
  lem-radial-normalisation-is-continuous: mathematical-premise
  thm-higher-dimensional-spheres-are-simply-connected: mathematical-premise
  def-simply-connected: mathematical-premise
  def-path-connected: mathematical-premise
  cor-euclidean-spheres-are-path-connected: mathematical-premise
  def-homotopy-relative-and-path-homotopy: mathematical-premise
  def-based-loops-and-fundamental-group: mathematical-premise
  cor-homotopy-relative-and-path-homotopy-are-equivalence-relations: mathematical-premise
  cor-linear-maps-with-finite-dimensional-domain-are-bounded: mathematical-premise
  thm-bounded-linear-operator-equivalences: mathematical-premise
  lem-algebra-of-continuous-real-maps-on-a-space: mathematical-premise
  thm-path-connected-implies-connected: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-star-shaped-open-subset-of-rn: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A mathematical example delimiting the hypotheses of the framework's potential-existence theorem: curl-free and divergence-free smooth fields on two explicit punctured spatial regions that admit no global scalar, respectively vector, potential, showing that the star-shaped hypothesis is substantive and that simple connectivity is not sufficient for a vector potential. The fields are mathematical witnesses on the punctured regions; the framework's postulate excludes magnetic charge, and no physical source, no physical singularity and no empirical claim is asserted."
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "§3.2.1 printed p. 47 (magnetic monopoles and the inverse-square field) and §3.2.4 printed pp. 52-53 (the linking-number discussion of the curl-free field near a line), §3.2.2 printed pp. 48-49 (the vector potential and gauge freedom)"
    - title: "L. D. Landau and E. M. Lifshitz, The Classical Theory of Fields, Third Revised English Edition (Course of Theoretical Physics vol. 2, Pergamon Press 1971, 387 pp.)"
      url: "http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf"
      locator: "§16 printed pp. 44-45 and §18 printed p. 49: the potential representation of the fields and the non-uniqueness of the potentials"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Example

Write points of $\mathbb R^3$ as $x=(x,y,z)$ with the Euclidean inner product and norm of [[def-euclidean-inner-product]], and let $U_1:=\mathbb R^3\setminus\{(0,0,z):z\in\mathbb R\}$ and $U_2:=\mathbb R^3\setminus\{0\}$ be the complements of the $z$-axis and of the origin, two open sets.

(a) [Scalar obstruction] On $U_1$ the field

$$F(x,y,z):=\frac{(-y,\,x,\,0)}{x^2+y^2}$$

is of class $C^\infty$, satisfies $\operatorname{curl}F=0$ on $U_1$ with the curl of [[def-divergence-and-curl-of-a-c1-vector-field]], and is not the gradient of any $C^2$ function on $U_1$, in the sense of exactness of [[def-closed-and-exact-c1-vector-fields]]. Its circulation around the positively oriented unit circle $\gamma(t)=(\cos t,\sin t,0)$, $t\in[0,2\pi]$, in the sense of [[def-scalar-and-vector-line-integrals-along-piecewise-c1-paths]], equals $2\pi$; the gradient theorem would force circulation zero for a gradient of a $C^2$ function. Hence a curl-free smooth field on a connected open set need not have a global scalar potential, and the star-shaped hypothesis of [[pthm-em-spacetime-potentials]] cannot be dropped.

(b) [Vector obstruction] On $U_2$ the field

$$B(x):=\frac{x}{\lVert x\rVert_2^{\,3}}$$

is of class $C^\infty$ and satisfies $\operatorname{div}B=0$, but there is no vector potential $A$ of class $C^1$ on $U_2$ with $\operatorname{curl}A=B$ in the sense of [[def-vector-potential-of-a-c1-vector-field]]. Indeed the flux of $B$ through the unit sphere in the orientation of the spherical parametrization $\Phi(\phi,\theta):=(\sin\phi\cos\theta,\ \sin\phi\sin\theta,\ \cos\phi)$ is $4\pi$, while the classical Stokes theorem applied to the two closed hemispherical $C^2$ patches with induced boundary chains forces that flux to equal a sum of boundary circulations which cancels to zero.

(c) [The punctured space is simply connected] $\mathbb R^3\setminus\{0\}$ is simply connected in the sense of [[def-simply-connected]]: it is path-connected and every based loop in it is null-homotopic. Consequently simple connectivity of the domain is by itself not sufficient for the existence of a vector potential.

(d) [Scope] The two obstructions have different characters: (a) is detected by the circulation of a closed loop, (b) by the flux through a closed surface. The fields displayed are smooth mathematical witnesses on the punctured open sets; the framework's postulate [[post-em-vacuum-maxwell]] excludes magnetic charge, and no physical source, physical singularity or empirical claim is attached to them.

## Facts & Assumptions

**Given:** The open sets $U_1,U_2\subseteq\mathbb R^3$, the fields $F$ and $B$ displayed above, the unit circle $\gamma(t)=(\cos t,\sin t,0)$ on $[0,2\pi]$, the spherical parametrization $\Phi$ and the rectangles $D:=[0,\pi]\times[0,2\pi]$, $D_N:=[0,\pi/2]\times[0,2\pi]$, $D_S:=[\pi/2,\pi]\times[0,2\pi]$ with their elementary Green region structures, and the punctured space $P:=\mathbb R^3\setminus\{0\}$ ([[def-interval]], [[def-euclidean-inner-product]]).

[F1] Vector line integrals along piecewise-$C^1$ paths are sums of parameter integrals against a continuous derivative extension, the pullback identity expresses the integral along a composited path as the parameter integral of the pulled-back pair, reversal negates a vector line integral while concatenation adds, and for a $C^1$ scalar the gradient theorem gives $\int_\gamma\nabla\phi\cdot d\mathbf r=\phi(\gamma(b))-\phi(\gamma(a))$ ([[def-scalar-and-vector-line-integrals-along-piecewise-c1-paths]], [[lem-a-vector-line-integral-pulls-back-to-the-parameter-region]], [[thm-line-integrals-under-reversal-and-concatenation]], [[thm-gradient-theorem-for-line-integrals]]).

[F2] A $C^1$ field on an open $U\subseteq\mathbb R^n$ is exact when it is the gradient of a $C^2$ scalar function on $U$, and a vector potential for a continuous field $B$ on an open $U\subseteq\mathbb R^3$ is a $C^1$ field $A$ with $\operatorname{curl}A=B$ ([[def-closed-and-exact-c1-vector-fields]], [[def-vector-potential-of-a-c1-vector-field]]).

[F3] Fundamental theorem of calculus: if $G$ is differentiable on $[a,b]$ with integrable derivative $G'$, then $\int_a^bG'=G(b)-G(a)$ ([[thm-ftc-second-part]]).

[F4] Derivatives and basic values of sine and cosine: $(\sin t)'=\cos t$, $(\cos t)'=-\sin t$, $\sin0=0$, $\cos0=1$; the Pythagorean identity $\sin^2t+\cos^2t=1$; the quarter-turn shifts $\sin(t+\pi/2)=\cos t$, $\cos(t+\pi/2)=-\sin t$, $\sin\pi=0$, $\cos\pi=-1$; and $t\mapsto(\cos t,\sin t)$ is a bijection $[0,2\pi)\to S^1$ with the trace conventions recorded there ([[thm-sine-and-cosine-derivatives]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-quarter-turn-values-and-shift-formulas]], [[thm-sine-and-cosine-parametrize-the-unit-circle]]).

[F5] Periodicity and zeros: sine and cosine have period $2\pi$, and their zero sets are $\pi\mathbb Z$ and $(\mathbb Z+1/2)\pi$ respectively; monotonicity and ranges are as recorded ([[thm-sine-cosine-zero-sets-and-fundamental-period]], [[thm-sine-cosine-signs-monotonicity-and-ranges]]).

[F6] Euclidean calculus: the $C^k$ class is componentwise, sums, products, quotients with nonvanishing denominator and compositions of differentiable maps obey the usual rules, and $t\mapsto t^\alpha$ is differentiable on $(0,\infty)$ with derivative $\alpha t^{\alpha-1}$ ([[def-ck-euclidean-maps-and-diffeomorphisms]], [[thm-algebra-of-derivatives]], [[thm-chain-rule-for-total-derivatives]], [[thm-real-power-continuity-and-derivatives]]).

[F7] Divergence and curl are computed from first partial derivatives by the coordinate formulas of [[def-divergence-and-curl-of-a-c1-vector-field]].

[F8] Surface vocabulary and integral theorems: admissible regular parametrized patches, their oriented flux, finite elementary Green regions with positive boundary chains, the induced boundary chain of a $C^2$ patch, and the classical Stokes theorem expressing the circulation around the induced boundary chain of a $C^2$ patch over a finite elementary Green region as the flux of the curl ([[def-admissible-regular-parametrized-surface-patch]], [[def-oriented-unit-normal-and-flux-of-a-surface-patch]], [[def-type-i-type-ii-and-elementary-green-regions]], [[def-positive-orientation-for-elementary-region-boundaries]], [[def-the-induced-boundary-chain-of-a-c2-surface-patch]], [[thm-the-classical-stokes-theorem-for-a-c2-surface-patch]]).

[F9] The Euclidean inner product is $\langle u,v\rangle=\sum_i u_iv_i$ ([[def-euclidean-inner-product]]). The cross product of vectors in $\mathbb R^3$ is bilinear and alternating with the coordinate formula, vanishing on parallel pairs ([[def-cross-product-in-r3]], [[lem-cross-product-is-bilinear-alternating-and-orthogonal]]).

[F10] Riemann integrals over Jordan sets and the section formula: a rectangle is a bounded Jordan set, continuous functions are Riemann integrable over it, and integration by sections reduces a double integral over a rectangle to an iterated integral ([[def-riemann-integral-over-a-jordan-set]], [[thm-jordan-fubini-by-sections]]).

[F11] Topology and homotopy vocabulary: paths, path-connectedness, the unit interval, based loops and the fundamental group, homotopies relative to a subspace and path homotopies, their equivalence-relation property, the radial straight-line homotopy on $\mathbb R^n\setminus\{0\}$ with the continuous normalization $\rho(x)=x/\lVert x\rVert_2$, simple connectedness, the simple connectivity of $S^n$ for $n\ge2$, the path-connectedness of $S^{n-1}$ for $n\ge2$, the implication path-connected implies connected, and the boundedness of linear maps with finite-dimensional domain together with the equivalence of boundedness, continuity and Lipschitz continuity ([[def-path-connected]], [[def-based-loops-and-fundamental-group]], [[def-homotopy-relative-and-path-homotopy]], [[cor-homotopy-relative-and-path-homotopy-are-equivalence-relations]], [[thm-radial-straight-line-map-on-punctured-rn]], [[lem-radial-normalisation-is-continuous]], [[def-simply-connected]], [[thm-higher-dimensional-spheres-are-simply-connected]], [[cor-euclidean-spheres-are-path-connected]], [[thm-path-connected-implies-connected]], [[cor-linear-maps-with-finite-dimensional-domain-are-bounded]], [[thm-bounded-linear-operator-equivalences]], [[lem-algebra-of-continuous-real-maps-on-a-space]]).

[F12] Scope: the smooth branch of the vacuum Maxwell equations contains the source-free pair, the star-shaped existence theorem supplies potentials only under its stated domain hypothesis, and star-shapedness is defined by radial segments ([[post-em-vacuum-maxwell]], [[pthm-em-spacetime-potentials]], [[def-star-shaped-open-subset-of-rn]]).

## Verification

**Proof technique:** direct; compute the two obstruction integrals, encode the two hemispheres as elementary Green regions for Stokes, and prove simple connectivity by the radial deformation and the simple connectivity of the unit sphere.

1.1 The scalar witness is smooth and curl-free. On $U_1$ the denominator $x^2+y^2$ is strictly positive, so each component of $F$ is a quotient of smooth functions with nonvanishing denominator and $F$ is of class $C^\infty$ by [F6]. By [F7] the coordinates of $\operatorname{curl}F$ are the differences $\partial_yF_z-\partial_zF_y$, $\partial_zF_x-\partial_xF_z$ and $\partial_xF_y-\partial_yF_x$. The first two vanish because $F_z=0$ and the first two components of $F$ do not depend on $z$. For the third, the quotient rule of [F6] gives $\partial_xF_y=\partial_x\bigl(x/(x^2+y^2)\bigr)=\bigl((x^2+y^2)-2x^2\bigr)/(x^2+y^2)^2=(y^2-x^2)/(x^2+y^2)^2$ and $\partial_yF_x=\partial_y\bigl(-y/(x^2+y^2)\bigr)=-\bigl((x^2+y^2)-2y^2\bigr)/(x^2+y^2)^2=(y^2-x^2)/(x^2+y^2)^2$, so their difference is zero. Hence $\operatorname{curl}F=0$ on $U_1$. [given, F6, F7]

1.2 The vector witness is smooth and divergence-free. On $U_2$ the norm $\lVert x\rVert_2$ is strictly positive, so $B$ is of class $C^\infty$ by [F6]. By [F7], $\operatorname{div}B=\sum_{i=1}^3\partial_i\bigl(x_i\lVert x\rVert_2^{-3}\bigr)$; the product and chain rules of [F6] together with $\partial_i\lVert x\rVert_2=x_i/\lVert x\rVert_2$ and the power rule of [F6] give $\partial_i\bigl(x_i\lVert x\rVert_2^{-3}\bigr)=\lVert x\rVert_2^{-3}+x_i\cdot(-3)\lVert x\rVert_2^{-4}\cdot x_i/\lVert x\rVert_2=\lVert x\rVert_2^{-3}-3x_i^2\lVert x\rVert_2^{-5}$. Summing over $i$ and using $\sum_ix_i^2=\lVert x\rVert_2^2$ yields $\operatorname{div}B=3\lVert x\rVert_2^{-3}-3\lVert x\rVert_2^{-5}\lVert x\rVert_2^{2}=0$. [given, F6, F7]

1.3 The scalar domain is a connected open set. Let $p=(p_1,p_2,p_3)$ and $q=(q_1,q_2,q_3)$ be points of $U_1$; then $\rho_p:=\sqrt{p_1^2+p_2^2}>0$ and $\rho_q>0$. By the radial straight-line homotopy of [F11] applied in the plane, the maps $t\mapsto H_{\rho_p}(t):=\bigl((1-t)+t/\rho_p\bigr)(p_1,p_2)$ and $t\mapsto H_{\rho_q}(t)$ are continuous and never vanish, so they join $(p_1,p_2)$ to $u_p:=(p_1,p_2)/\rho_p$ and $(q_1,q_2)$ to $u_q$ in $\mathbb R^2\setminus\{0\}$; both $u_p,u_q$ lie on $S^1$, which is path-connected by [F11] applied with $n=2$, so fix a path $\sigma$ in $S^1$ from $u_p$ to $u_q$. The concatenation of the three paths $t\mapsto(H_{\rho_p}(t),p_3)$, $t\mapsto(\sigma(t),(1-t)p_3+tq_3)$ and $t\mapsto(H_{\rho_q}(1-t),q_3)$ is a path in $U_1$ from $p$ to $q$: the first two coordinates never vanish, because $H_{\rho_p}$ and $H_{\rho_q}$ take values in $\mathbb R^2\setminus\{0\}$ and $\sigma$ takes values in $S^1$, while the continuity of the three maps and of their concatenation follows from the continuity and finite-pasting suppliers in [F11]. Hence $U_1$ is path-connected by [F11], and therefore connected by [F11]. [given, F11]

1.4 Basepoint reduction for loops in the punctured space. Let $\gamma_0$ be a based loop in $P$ at $x_0\in P$ and put $\rho:=\lVert x_0\rVert_2>0$. The maps $L(x):=x/\rho$ and $L^{-1}(x)=\rho x$ are linear maps of $\mathbb R^3$, hence bounded and continuous by [F11], and $L^{-1}\circ L=\mathrm{id}=L\circ L^{-1}$. If $L\circ\gamma_0$ is null-homotopic as a loop at $x_1:=x_0/\rho$, then composing that null-homotopy with the continuous map $L^{-1}$ gives a null-homotopy of $L^{-1}\circ L\circ\gamma_0=\gamma_0$; conversely composing a null-homotopy of $\gamma_0$ with $L$ gives one of $L\circ\gamma_0$. Hence a loop at $x_0$ is null-homotopic if and only if its image under $L$ is, and $x_1$ lies on the unit sphere $S^2$; it therefore suffices to treat loops based on $S^2$. [given, F11]

1.5 The circulation of the scalar witness. The map $\gamma(t)=(\cos t,\sin t,0)$, $t\in[0,2\pi]$, is a piecewise-$C^1$ path in $U_1$ by [F4], and $F$ is continuous on its trace. By the definition of the vector line integral in [F1], the integral along $\gamma$ is $\int_0^{2\pi}\langle F(\gamma(t)),\gamma'(t)\rangle\,dt$ with the derivative extension $\gamma'(t)=(-\sin t,\cos t,0)$ from [F4]. Since $x^2+y^2=\cos^2t+\sin^2t=1$ on the trace by the Pythagorean identity [F4], one has $F(\gamma(t))=(-\sin t,\cos t,0)$, so the integrand is $\langle(-\sin t,\cos t,0),(-\sin t,\cos t,0)\rangle=\sin^2t+\cos^2t=1$ by the inner product formula of [F9] and the Pythagorean identity [F4]. The fundamental theorem [F3] with $G(t)=t$ gives $\int_0^{2\pi}1\,dt=2\pi-0=2\pi$. The trace is the positively oriented unit circle by the parametrization statement of [F4]. [given, F1, F3, F4, F9]

1.6 The flux of the vector witness through the unit sphere. By [F4] the two parameter derivatives of $\Phi$ are $\Phi_\phi=(\cos\phi\cos\theta,\cos\phi\sin\theta,-\sin\phi)$ and $\Phi_\theta=(-\sin\phi\sin\theta,\sin\phi\cos\theta,0)$, computed with the derivative, chain and product rules of [F6]. By the coordinate formula for the cross product [F9], $\Phi_\phi\times\Phi_\theta=(\sin^2\phi\cos\theta,\ \sin^2\phi\sin\theta,\ \sin\phi\cos\phi)=\sin\phi\,\Phi$, using the Pythagorean identity [F4] in the third coordinate; since $\lVert\Phi\rVert_2=1$ by [F4], one has $B(\Phi)=\Phi/\lVert\Phi\rVert_2^3=\Phi$. Hence the integrand of the flux of [F8] is $\langle B(\Phi),\Phi_\phi\times\Phi_\theta\rangle=\sin\phi\,\langle\Phi,\Phi\rangle=\sin\phi$. The rectangle $D$ is a bounded Jordan set and the integrand is continuous, so [F10] applies and the section formula evaluates the flux as $\int_0^{2\pi}\bigl(\int_0^\pi\sin\phi\,d\phi\bigr)d\theta$; the fundamental theorem [F3] with $G=-\cos$ and the derivative of cosine [F4] gives $\int_0^\pi\sin\phi\,d\phi=-\cos\pi+\cos0=2$, so the flux is $\int_0^{2\pi}2\,d\theta=4\pi$. The patch $(D,\Phi)$ is admissible: on the interior of $D$ the cross product is nonzero (as $\sin\phi>0$ and $\Phi\ne0$ there) and the interior parametrization is injective, while the seam $\theta=0$ and $\theta=2\pi$ and the poles lie on the parameter boundary, all in the sense of [F8]. [given, F4, F6, F8, F9, F10]

1.7 The two hemispheres as $C^2$ patches and their induced boundaries. The rectangles $D_N=[0,\pi/2]\times[0,2\pi]$ and $D_S=[\pi/2,\pi]\times[0,2\pi]$ are Type I and Type II regions, hence elementary Green regions with their positive boundary chains in the sense of [F8], and the restrictions of $\Phi$ to them are $C^2$ on an open neighbourhood with cross product nonzero on the parameter interior and no interior image shared with a distinct parameter point, while poles and seam identifications lie only on the boundary, so they are $C^2$ patches over finite elementary Green regions with induced boundary chains as in [F8]. For a rectangle $[a,b]\times[c,d]$ the positive boundary chain runs along the lower graph from left to right, up the right side, back along the upper graph and down the left side [F8]. Under $\Phi$ and using the periods of sine and cosine from [F5], the lower and upper graphs have the same image, namely the meridian $\phi\mapsto(\sin\phi,0,\cos\phi)$ on $[a,b]$, traversed in opposite directions; the left side of $D_N$ lies at $\phi=0$, where $\Phi(0,\theta)=(0,0,1)$ is constant, and the right side of $D_S$ lies at $\phi=\pi$, where $\Phi(\pi,\theta)=(0,0,-1)$ is constant; the right side of $D_N$ and the left side of $D_S$ both equal the equator $\theta\mapsto(\cos\theta,\sin\theta,0)$, traversed in the positive and in the reverse direction respectively. Thus the north induced boundary chain consists of a meridian arc, the equator, the reversed meridian arc and a degenerate polar arc, and the south induced boundary chain consists of a meridian arc, a degenerate polar arc, the reversed meridian arc and the reversed equator. [given, F5, F8]

1.8 The radial deformation to the unit sphere. By [F11] the map $H(x,t)=\bigl((1-t)+t/\lVert x\rVert_2\bigr)x$ is continuous on $P\times[0,1]$, satisfies $H(x,1)=x/\lVert x\rVert_2=\rho(x)$, and fixes every point of $S^2$ for all $t$. Let $\gamma_0$ be a based loop at a point $x_1\in S^2$; then $(s,t)\mapsto H(\gamma_0(s),t)$ is continuous by [F11], equal to $\gamma_0(s)$ at $t=0$, equal to $\rho\circ\gamma_0$ at $t=1$, and constant equal to $x_1$ along the basepoint for every $t$; hence it is a path homotopy from $\gamma_0$ to the loop $\rho\circ\gamma_0$, which takes values in $S^2$ by [F11]. In the vocabulary of [F11] this says that $\gamma_0$ and $\rho\circ\gamma_0$ are path-homotopic loops at $x_1$. [given, F11]

2.1 No global $C^2$ scalar potential on $U_1$. Suppose $\phi:U_1\to\mathbb R$ were $C^2$ with $F=\nabla\phi$, exactness in the sense of [F2]. Since $\phi$ is $C^1$ and $\gamma$ is a piecewise-$C^1$ path in $U_1$, the gradient theorem of [F1] gives $\int_\gamma F\cdot d\mathbf r=\phi(\gamma(2\pi))-\phi(\gamma(0))$. By the periodicity of sine and cosine from [F5] and the values at zero from [F4], $\gamma(2\pi)=(\cos 2\pi,\sin 2\pi,0)=(1,0,0)=\gamma(0)$, so the right-hand side is zero, whereas step 1.5 computed the same integral as $2\pi\ne0$, a contradiction. Hence no such $\phi$ exists on $U_1$, while $U_1$ is a connected open set by step 1.3. [step 1.3, step 1.5, F1, F2, F4, F5]

2.2 No global $C^1$ vector potential on $U_2$. Suppose $A$ were a $C^1$ field on the open set $U_2$ with $\operatorname{curl}A=B$, a vector potential in the sense of [F2]. The image of each closed hemisphere under $\Phi$ is contained in $S^2\subseteq U_2$, and $A$ is $C^1$ on the open set $U_2$ containing it, so the classical Stokes theorem of [F8] applies to the two $C^2$ patches of step 1.7 and gives, with the flux of [F8], $\oint_{\Phi(\partial D_N)}A\cdot d\mathbf r=\int_{D_N}\langle(\operatorname{curl}A)\circ\Phi,\Phi_\phi\times\Phi_\theta\rangle$ and the analogous identity over $D_S$. Replacing $\operatorname{curl}A$ by $B$, the right-hand sides are the fluxes of $B$ over the two hemispheres, whose sum is the total flux $4\pi$ of step 1.6 because the two patches share only the boundary seam and together cover the sphere in the same orientation. On the left-hand sides, the induced boundary chains of step 1.7 have the structure described there: in the north chain the two meridian arcs have the same image with opposite orientations, so their integrals cancel by reversal [F1], and the degenerate polar arc has constant image, so its integral is zero [F1]; the north circulation therefore equals the equator integral, and the south circulation equals the reverse equator integral by the same cancellation, so their sum is zero. Adding the two Stokes identities then gives $0=4\pi$, a contradiction; hence no such $A$ exists. [step 1.6, step 1.7, F1, F2, F8]

2.3 The unit sphere loop is null-homotopic in the unit sphere. Let $\gamma_0$ be a based loop at $x_1\in S^2$. The sphere $S^2$ is simply connected by [F11] (applied with $n=2$), so by the definition of simple connectedness in [F11] its fundamental group at $x_1$ has exactly one element; by the vocabulary of based loops and fundamental groups in [F11] this means that the class of the loop $\rho\circ\gamma_0$ equals the class of the constant loop, that is, there is a path homotopy in $S^2$ from $\rho\circ\gamma_0$ to the constant loop at $x_1$. [step 1.8, F11]

3.1 The punctured space is simply connected. First, $P$ is path-connected: for $x\in P$ the radial homotopy of [F11] gives a continuous path $t\mapsto H(x,t)$ from $x$ to $\rho(x)\in S^2$ that stays in $P$, the sphere $S^2$ is path-connected by [F11] (applied with $n=3$), and concatenating a radial path, a path in $S^2$ and a reversed radial path gives a path between any two points, with continuity and concatenation as in [F11]. Now let $\gamma_0$ be a based loop at $x_0\in P$. By step 1.4 it suffices to treat the case $x_0=x_1\in S^2$; in that case step 1.8 gives a path homotopy in $P$ from $\gamma_0$ to $\rho\circ\gamma_0$, and step 2.3 gives a path homotopy in $S^2$ from $\rho\circ\gamma_0$ to the constant loop, which, composed with the inclusion $S^2\subseteq P$, is a path homotopy in $P$; by the equivalence-relation property of path homotopy in [F11] the loop $\gamma_0$ is path-homotopic to the constant loop, so every based loop of $P$ is null-homotopic and the fundamental group of $P$ at every basepoint has exactly one element. Since $P$ is nonempty and path-connected, [F11] makes it simply connected. [step 1.4, step 1.8, step 2.3, F11]

4.1 Conclusion and scope. Step 1.1 and step 2.1 together say that $U_1$ is a connected open set carrying a $C^\infty$ field $F$ with $\operatorname{curl}F=0$ that is not the gradient of any $C^2$ function; step 1.2 and step 2.2 say that on the open set $U_2$ the $C^\infty$ field $B$ satisfies $\operatorname{div}B=0$ while admitting no $C^1$ vector potential; and step 3.1 shows that the domain of the second obstruction is simply connected, so simple connectivity is not sufficient for a vector potential. Neither region is star-shaped with respect to any of its points, since for $p$ in $U_1$ or $U_2$ the segment from $p$ to $-p$ passes through the removed axis or origin, so star-shapedness fails in the sense of [F12]; the witnesses are therefore smooth fields on non-star-shaped regions, and the star-shaped hypothesis of the existence theorem [F12] is substantive, while the two conclusions (a) and (b) are of different characters, a circulation against the gradient theorem and a flux against Stokes. The fields are mathematical witnesses: the framework's postulate [F12] contains no magnetic charge, and no physical source, singularity or empirical claim is made. [step 1.1, step 1.2, step 2.1, step 2.2, step 3.1, F12] ∎

## Remarks

- **What is and is not claimed.** The computations are exact statements about the displayed smooth fields on punctured open sets. They delimit the domain hypotheses of the potential theorem; they assert no physical configuration, and in particular the inverse-square field $B$ is a mathematical witness, not a magnetic monopole: the framework's postulate sets magnetic charge to zero.
- **Choice accounting.** No choice principle is used: the constructions are explicit, and the topological and calculus suppliers used here are choice-free at the hypotheses cited.
