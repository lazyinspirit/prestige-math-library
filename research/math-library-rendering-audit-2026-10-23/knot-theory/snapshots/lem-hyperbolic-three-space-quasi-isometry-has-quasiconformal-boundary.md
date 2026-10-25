---
id: lem-hyperbolic-three-space-quasi-isometry-has-quasiconformal-boundary
kind: lemma
title: A quasi-isometry of hyperbolic three-space has a quasiconformal boundary map
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - thm-morse-stability-with-explicit-parameter-dependence
  - lem-quasi-isometries-extend-to-boundary-homeomorphisms
  - lem-hg-toolkit-proper-ray-compactness-and-sequence-comparison
  - prop-christoffel-formula-for-the-levi-civita-connection
  - thm-gauss-bonnet-for-a-geodesic-triangle
  - lem-uniform-circular-distortion-gives-planar-quasiconformality
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Gopal Prasad, Strong Rigidity of Q-Rank 1 Lattices
      url: https://www.maths.gla.ac.uk/~mpowell/Prasad-on-Mostow-rigidity.pdf
      locator: Printed pp. 256–257 and Theorem C; the specialized passage from a quasi-isometry to a quasiconformal sphere map is proved independently here
    - title: Druţu and Kapovich, Geometric Group Theory
      url: https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf
      locator: Boundary extension context; only the complete local Morse and boundary-homeomorphism suppliers are invoked below
dependency_level: 1
---

## Statement

Assume the Axiom of Choice. On $\mathbb H^3=\{(z,s):z\in\mathbb C,\ s>0\}$ use the metric $s^{-2}(|dz|^2+ds^2)$. Suppose $f:\mathbb H^3\to\mathbb H^3$ is a quasi-isometry with constants $\lambda\ge1$, $\varepsilon\ge0$:
$$\lambda^{-1}d(x,y)-\varepsilon\le d(f(x),f(y))\le\lambda d(x,y)+\varepsilon,$$
and with coarsely dense image. Then it induces an ideal-boundary homeomorphism $h:\widehat{\mathbb C}\to\widehat{\mathbb C}$. There is $H=H(\lambda,\varepsilon)<\infty$ such that, after postcomposition by any Möbius transformation carrying $h(\infty)$ to $\infty$, its plane restriction satisfies
$$\max_{|a-z|=r}|h(a)-h(z)|\le H\min_{|a-z|=r}|h(a)-h(z)|\qquad(z\in\mathbb C,\ r>0).$$
Here $h$ in that inequality denotes the normalized map. If the boundary homeomorphism preserves orientation, it is analytically quasiconformal in sphere charts, with constant at most $H$. If it reverses orientation, postcomposition with complex conjugation is quasiconformal with that constant. If $f$ is equivariant for a homomorphism between groups of hyperbolic isometries, its boundary map is equivariant for their boundary actions.

## Statement references

[[def-axiom-of-choice]]

[[thm-morse-stability-with-explicit-parameter-dependence]]

[[lem-quasi-isometries-extend-to-boundary-homeomorphisms]]

[[prop-christoffel-formula-for-the-levi-civita-connection]]

[[thm-gauss-bonnet-for-a-geodesic-triangle]]

[[lem-uniform-circular-distortion-gives-planar-quasiconformality]]

## Facts & Assumptions

**Given:** The Axiom of Choice, upper-half-space metric, quasi-isometry and its constants and coarse density.

[A1] The Axiom of Choice is retained for the local Morse, boundary extension and planar Sobolev suppliers. [[def-axiom-of-choice]]

[F1] In a geodesic $\delta$-slim space, finite-interval $(\lambda,\varepsilon)$-quasi-geodesics are within Hausdorff distance $M=92\lambda^2(\varepsilon+3\delta)$ of every specified endpoint geodesic. [[thm-morse-stability-with-explicit-parameter-dependence]]

[F2] A quasi-isometry of geodesic hyperbolic spaces induces a boundary homeomorphism, bounded-distance maps give the same map, and extensions commute with composition. In a proper geodesic hyperbolic space every sequence-boundary class has a ray representative and its topology is the quotient of uniform convergence on bounded ray intervals. [[lem-quasi-isometries-extend-to-boundary-homeomorphisms]], [[lem-hg-toolkit-proper-ray-compactness-and-sequence-comparison]]

[F3] The Levi–Civita symbols are $\Gamma^k_{ij}=\tfrac12 g^{k\ell}(\partial_i g_{j\ell}+\partial_jg_{i\ell}-\partial_\ell g_{ij})$. For a positively oriented compact regular geodesic triangular disk in a frameable surface neighbourhood, AC gives $\int_TK\,dA=\alpha+\beta+\gamma-\pi$. [[prop-christoffel-formula-for-the-levi-civita-connection]], [[thm-gauss-bonnet-for-a-geodesic-triangle]]

[F4] An orientation-preserving plane homeomorphism with a fixed all-circle ratio bound $H$ is analytically $H$-quasiconformal. This local supplier proves Sobolev regularity by difference quotients and total differentiability by the independent general-homeomorphism interface; it does not invoke an unproved qualitative metric criterion. [[lem-uniform-circular-distortion-gives-planar-quasiconformality]]

## Proof

1.1 We first give the model geometry used below. Translations, complex rotations and positive dilations act by $(z,s)\mapsto(az+b,|a|s)$ and preserve the metric by substitution. Euclidean inversion in the unit sphere, followed by reflection in a vertical plane, is $(z,s)\mapsto(-\overline z/(|z|^2+s^2),s/(|z|^2+s^2))$ and extends $z\mapsto-1/z$. Its Euclidean differential scales lengths by $(|z|^2+s^2)^{-1}$, while its height scales by the same factor, so it also preserves the hyperbolic metric. These maps generate all Möbius transformations: a matrix with nonzero lower-left entry gives a translation, an inversion, a complex dilation and a translation by elementary fraction division; a zero lower-left entry gives an affine map. Thus every boundary Möbius transformation extends to an isometry. The Cayley map $T(z,s)=(2\operatorname{Re}z,2\operatorname{Im}z,|z|^2+s^2-1)/(|z|^2+(s+1)^2)$ is a bijection onto the unit ball, with inverse $z=2(u_1+iu_2)/Q$, $s=(1-|u|^2)/Q$, $Q=u_1^2+u_2^2+(1-u_3)^2$. It carries $(0,1)$ to the origin and gives metric $4|du|^2/(1-|u|^2)^2$: its Euclidean length factor is $2/(|z|^2+(s+1)^2)$ and $1-|T|^2=4s/(|z|^2+(s+1)^2)$. Radial integration in the ball, together with $|(|u|)'|\le|u'|$ on every competing path, gives distance $2\operatorname{artanh}|u|$ from the origin. Applying the affine normalization of a general basepoint yields $\cosh d((z,s),(w,t))=\frac{|z-w|^2+s^2+t^2}{2st}.$ Equality in that radial length argument characterizes the radial segment. Its inverse Cayley image shows that geodesics are the vertical lines and the Euclidean semicircles orthogonal to the boundary. In particular geodesics are unique, closed bounded hyperbolic balls are compact by the displayed formula, and the ideal endpoints of a complete geodesic are its distinct Euclidean boundary endpoints. A complete geodesic is uniquely determined by those endpoints. Consequently an isometry with identity boundary action preserves every complete geodesic and fixes the intersection of two distinct complete geodesics through each point; it is the identity. Thus the Möbius extension constructed above is unique. [given, algebra]

2.1 Every geodesic triangle lies in a totally geodesic hyperbolic plane. To see this, send one vertex to the center of the ball by the isometries in step 1.1; the two other vertices and that center lie in a Euclidean plane through the center. Reflection in that plane is a ball isometry, and uniqueness of geodesics makes its fixed plane totally geodesic. In its upper-half-plane coordinates $(x,y)$, the Christoffel formula [F3] gives $\Gamma^x_{xy}=\Gamma^x_{yx}=-1/y$, $\Gamma^y_{xx}=1/y$, $\Gamma^y_{yy}=-1/y$, and all other symbols zero. Thus for the global positive orthonormal frame $e_1=y\partial_x$, $e_2=y\partial_y$, one has $\nabla_{e_1}e_1=e_2$, $\nabla_{e_1}e_2=-e_1$, $\nabla_{e_2}e_1=\nabla_{e_2}e_2=0$ and $[e_1,e_2]=-e_1$. Consequently $R(e_1,e_2)e_2=-e_1$ and $K=-1$. A noncollinear finite triangle bounds a compact regular disk with three embedded geodesic edges and ordinary corners: its sides are the unique segments in the three geodesic half-planes, and distinct sides meet transversely at their vertices. The global frame supplies the neighbourhood required by [F3]. Gauss–Bonnet therefore gives its area $A=\pi-(\alpha+\beta+\gamma)<\pi$, since all three interior angles are positive. The area density of the displayed metric is $y^{-2}dx\,dy$. On this plane a radius-$r$ hyperbolic disk has area $2\pi(\cosh r-1)$: in the disk metric the Euclidean radius is $R=\tanh(r/2)$, and integrating $4\rho(1-\rho^2)^{-2}\,d\rho\,d\theta$ gives $4\pi R^2/(1-R^2)=2\pi(\cosh r-1)$. Fix a point $p$ on one side of a nondegenerate finite triangle, and let $d_0$ be its distance to the union of the other sides. If $r<d_0$, the half-disk of radius $r$ on the interior side of the first edge is contained in the triangle. Indeed, a radial geodesic from $p$ to a point of that half-disk stays in the interior edge half-plane and would otherwise first exit across one of the other two actual edges at distance less than $d_0$. Its area is $\pi(\cosh r-1)$, while the triangle has area less than $\pi$ by [F3]. Hence $r\le\operatorname{arcosh}2$ for every $r<d_0$, giving $d_0\le\delta:=\operatorname{arcosh}2$. Degenerate triangles are $0$-slim. This proves uniform $\delta$-slimness of $\mathbb H^3$ locally, without using an external hyperbolicity assertion. [A1, F3, step 1.1, algebra]

3.1 By [F2] and step 2.1, $f$ induces a homeomorphism of sequence boundaries. In this model that boundary is the ordinary ideal sphere. For precision, in the ball every geodesic ray from the origin is radial by step 1.1 and is parameterized as $u(r)=\tanh(r/2)\omega$, $|\omega|=1$. Substitution in the distance formula gives the product limit $(\omega|\omega')_0=-\log(|\omega-\omega'|/2)$ for distinct unit vectors and infinity for equal ones. Thus its product topology is the ordinary sphere topology, and finite-distance asymptotic rays have the same endpoint. By properness and [F2], every sequence-boundary class has a ray representative, and the uniform-on-bounded-interval topology of the radial rays is the ordinary topology of their unit endpoints. Consequently [F2]'s extension is exactly the ideal-boundary homeomorphism, and $x_n\to a$ ideally implies $f(x_n)\to h(a)$ whenever $(x_n)$ runs to infinity along a geodesic ray. [A1, F2, step 1.1, step 2.1, algebra]

4.1 Put $M=92\lambda^2(\varepsilon+3\delta)$. If $\ell$ is a complete source geodesic with endpoints $a,b$, then $f(\ell)$ lies within distance $M$ of the target complete geodesic $\ell'$ with endpoints $h(a),h(b)$. Fix a point $x=\ell(0)$ and apply [F1] to $f\circ\ell$ on $[-n,n]$. There is a point $y_n$ of the target endpoint segment within $M+1/n$ of $f(x)$. Properness from step 1.1 gives a convergent subsequence of these witnesses. By step 3.1, the segment endpoints tend ideally to $h(a),h(b)$. The orthogonal-circle or vertical-line formulas from step 1.1 show that these segments converge on compact subsets to $\ell'$: an orthogonal circle is determined continuously by its two endpoints and its Euclidean plane, with a vertical line the limit when one endpoint is infinite. Equivalently normalize the two limiting endpoints to $0,\infty$ and use their orthogonal-circle formulas there. The witness limit therefore belongs to $\ell'$, proving the distance bound. The same argument applies to every fixed $x\in\ell$. [A1, F1, step 1.1, step 3.1, algebra]

5.1 For an ordered ideal triangle $\tau=(a,b,c)$ define $c_\tau$ by applying the unique boundary Möbius transformation taking $(0,1,\infty)$ to $(a,b,c)$ to $c_0=(1/2,\sqrt3/2)$ in the real vertical plane; use its isometric extension from step 1.1. Existence and uniqueness follow explicitly from the fractional linear expression sending $a,b,c$ to $0,1,\infty$. The center $c_0$ is at distance $r_0=\log\sqrt3$ from each of its three complete sides: for the vertical lines the distance formula minimizes to $\operatorname{arsinh}((1/2)/(\sqrt3/2))=\log\sqrt3$, and for the semicircle with endpoints $0,1$ the normal is the vertical line through $1/2$, giving $\log((\sqrt3/2)/(1/2))=\log\sqrt3$. Thus every $c_\tau$ has distance $r_0$ from each side. By step 4.1 and the upper quasi-isometry bound, $f(c_\tau)$ is within $D=\max\{1,\lambda r_0+\varepsilon+M\}$ of each side of the target triangle $h\tau$. [step 1.1, step 4.1, construct, algebra]

6.1 There is $C(D)<\infty$ such that every point within $D$ of all three complete sides of an ideal triangle is within $C(D)$ of its specified center. Normalize to $(0,1,\infty)$ by an isometry. For a point $(w,s)$, the distances to the vertical sides over $0$ and $1$ are $\operatorname{arsinh}(|w|/s)$ and $\operatorname{arsinh}(|w-1|/s)$: minimize the distance formula over the target height. Hence $1\le|w|+|w-1|\le2s\sinh D$ and $s\ge(2\sinh D)^{-1}$. The remaining side is the semicircle with endpoints $0,1$, whose height is at most $1/2$. Along every path, change in $\log s$ has absolute value at most path length, directly from the metric. Its distance bound therefore gives $s\le e^D/2$. Also $|w|\le s\sinh D\le e^D\sinh D/2$. These inequalities place $(w,s)$ in a fixed Euclidean compact subset of upper half-space. The distance formula in step 1.1 is continuous there, so its maximum distance to $c_0$ is a finite number $C(D)$. By normalization this number works for every ordered ideal triangle. Step 5.1 now gives $d(f(c_\tau),c_{h\tau})\le C(D)$. [step 1.1, step 5.1, algebra]

7.1 Postcompose $f$ by the isometry extending a Möbius transformation that sends $h(\infty)$ to $\infty$; its quasi-isometry constants do not change. The normalized boundary map restricts to a plane homeomorphism. For distinct finite $z,a$, the center of $(z,a,\infty)$ is $c(z,a)=((z+a)/2,\sqrt3|a-z|/2),$ by the affine isometry in step 1.1. If $|a-z|=|b-z|=r$, these two source centers have equal height $\sqrt3r/2$ and horizontal separation at most $r$. Their distance is at most $\operatorname{arcosh}(5/3)=\log3$ by the distance formula. Step 6.1 and the quasi-isometry inequality give $d(c(hz,ha),c(hz,hb))\le2C(D)+\lambda\log3+\varepsilon$. Height logarithms differ by at most hyperbolic distance, so $\left|\log\frac{|h(a)-h(z)|}{|h(b)-h(z)|}\right|\le2C(D)+\lambda\log3+\varepsilon.$ The compact source circle maps injectively to a compact curve missing $h(z)$, so its maximum and positive minimum exist. Taking them in this inequality proves the claimed all-circle bound with $H=\exp(2C(D)+\lambda\log3+\varepsilon)$. This establishes a bounded equal-radius distortion, not merely a Hölder bound. [step 1.1, step 6.1, algebra]

8.1 If $h$ preserves orientation, apply [F4] to the plane map in step 7.1 to obtain analytic $H$-quasiconformality. To cover the omitted source point as well, choose a different omitted point $q$ and choose Möbius transformations $S,T$ taking $q,h(q)$ respectively to $\infty$, and replace $f$ by $T\circ f\circ S^{-1}$. The isometries in step 1.1 preserve the same quasi-isometry constants, so steps 4.1–7.1 and [F4] apply in this second plane chart with the same $H$. The two charts cover the sphere. If $h$ reverses orientation, postcompose by complex conjugation; its upper-half-space extension is a reflection isometry, and its composition with $h$ preserves orientation, so the same argument applies. Finally equivariance follows either by taking ideal limits along rays or by the composition property in [F2]; the exact equality $f\gamma=\theta(\gamma)f$ implies $h\gamma=\theta(\gamma)h$. [A1, F2, F4, step 1.1, step 3.1, step 7.1, algebra] ∎

## Source and supplier reading

The complete local Morse supplier and the complete local quasi-isometry boundary-homeomorphism supplier were read, including their actual hypotheses and arguments. The local planar circular-distortion supplier used here proves its Sobolev step independently of the published circular-dilatation item's external qualitative Gehring citation. The proof above also supplies hyperbolic three-space slimness, ideal-triangle center control and the equal-circle comparison locally; none is inferred from a Hölder boundary estimate. Prasad's full cached 32-page text was read in the earlier boundary-rigidity task. This item supplies no cusp or peripheral-group theorem and does not by itself establish Mostow–Prasad rigidity.
