---
id: thm-marked-quasiconformal-surfaces-have-cofinite-fuchsian-models
kind: theorem
title: Marked quasiconformal finite-type surfaces have cofinite Fuchsian models
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - thm-measurable-riemann-mapping-sphere
  - lem-invariant-beltrami-coefficients-deform-kleinian-groups
  - thm-composition-and-inverse-quasiconformal
  - thm-one-quasiconformal-is-conformal
  - thm-schwarz-pick-lemma-on-the-unit-disc
  - thm-covering-space-lifting-criterion
  - prop-christoffel-formula-for-the-levi-civita-connection
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Michael Kapovich, Hyperbolic Manifolds and Discrete Groups
      url: https://www.math.ucdavis.edu/~kapovich/RFG/book.pdf
      locator: Symmetric coefficient deformation context; the reflected solution, finite area and complete cusp geometry required here are proved directly
---

## Statement

Assume AC. Supply a discrete torsion-free cofinite group $\Gamma\le\mathrm{PSU}(1,1)$ acting on the unit disk $D$, the holomorphic quotient cover $\pi:D\to X=D/\Gamma$, and a finite-type compactification $\overline X$ with labeled punctures. Supply the correspondence of its punctures with all conjugacy classes of maximal parabolic subgroups of $\Gamma$, including a primitive peripheral generator at each label. Let $Y=\overline Y\setminus P_Y$ be another compact Riemann surface with finitely many labeled points removed, and let $m:X\to Y$ be an orientation-preserving quasiconformal homeomorphism extending to those labeled compactifications.

There is an orientation-preserving quasiconformal sphere homeomorphism $F$ preserving $D$, and a discrete faithful representation $\rho:\Gamma\to\mathrm{PSU}(1,1)$ with $\rho(\gamma)=F\gamma F^{-1}$. The quotient $D/\rho(\Gamma)$ is biholomorphic to $Y$ by a biholomorphism $I$ satisfying $I\overline F=m$ on the quotients. Its disk metric $2|dz|/(1-|z|^2)$ descends to a complete curvature-minus-one metric of finite area. Its puncture ends are exactly the labeled standard parabolic cusps. More precisely each has a tail isometric to $\{\operatorname{Im}z\ge R\}/\langle z\mapsto z+1\rangle$, with area $1/R$, and its holomorphic puncture coordinate is $q=e^{2\pi iz}$. Deep enough tails at all labels are disjoint and have compact complement. The primitive peripheral marking is preserved, not replaced by a proper power.

The statement includes compact $X,Y$ (no punctures), when it asserts a compact cofinite disk quotient and there are no cusp tails. It constructs a new Fuchsian model for every supplied marked quasiconformal target; no closed-only uniformization interface is used to generate punctured models.

## Facts & Assumptions

**Given:** AC, the supplied reference disk quotient and its complete peripheral labeling, and the marked quasiconformal target.

[A1] Full choice is [[def-axiom-of-choice]].

[F1] Sphere measurable coefficients of norm less than one have normalized quasiconformal solutions, unique up to Möbius postcomposition. [[thm-measurable-riemann-mapping-sphere]]

[F2] An invariant coefficient solution conjugates a discrete Möbius group faithfully to a discrete Möbius group. [[lem-invariant-beltrami-coefficients-deform-kleinian-groups]]

[F3] Equal coefficients cancel under quasiconformal composition; a coefficient-zero homeomorphism is biholomorphic. [[thm-composition-and-inverse-quasiconformal]], [[thm-one-quasiconformal-is-conformal]]

[F4] Holomorphic disk maps contract the disk metric. A map from a simply connected plane domain to a covered surface lifts after specifying one initial point, and a lift of a holomorphic map through a holomorphic unbranched cover is holomorphic in its local sheet charts. [[thm-schwarz-pick-lemma-on-the-unit-disc]], [[thm-covering-space-lifting-criterion]]

[F5] The metric coordinate formula is $\Gamma^k_{ij}=\tfrac12g^{k\ell}(\partial_i g_{j\ell}+\partial_j g_{i\ell}-\partial_\ell g_{ij})$. [[prop-christoffel-formula-for-the-levi-civita-connection]]

## Proof

1.1 Pull the coefficient of $m$ back under $\pi$ to a $\Gamma$-invariant coefficient $\mu$ on $D$, with norm $k<1$. Let $r(z)=1/\overline z$. Extend it to the sphere by $\widehat\mu(z)=\overline{\mu(1/\overline z)}z^2/\overline z^2$ on the exterior disk, and give the unit circle the immaterial value zero. This formula is the coefficient of reflection-conjugation $rfr$ when $f$ has coefficient $\mu$ on $D$: direct Wirtinger differentiation gives precisely the displayed factor. Every disk Möbius transformation commutes with $r$, as follows by substituting its formula $(az+b)/(\overline bz+\overline a)$, $|a|^2-|b|^2=1$. Hence the extended coefficient is invariant under $\Gamma$. By [F1] choose its solution $F$ fixing $0,1,\infty$. Reflection-conjugation has the same coefficient and the same three normalizations, since $r$ exchanges $0$ and infinity and fixes $1$. Uniqueness gives $rFr=F$. Thus $F$ preserves the unit circle and, since $F(0)=0$, preserves its disk component. By [F2], $\rho=F\Gamma F^{-1}$ is discrete faithful; its maps preserve $D$, so lie in $\mathrm{PSU}(1,1)$. Orders and fixed-point sets are preserved, including the parabolic one-fixed-point characterization. [A1, F1, F2, F3, given, construct, algebra]

2.1 The free properly discontinuous disk action descends to an unbranched quotient cover with holomorphic sheet charts. The map $F$ descends to a marked quotient homeomorphism $\overline F$. Locally the maps $m\pi$ and $F$ have the same coefficient; [F3] makes $m\pi F^{-1}$ holomorphic with holomorphic inverse in quotient sheets. They patch to the claimed biholomorphism $I$ and give $I\overline F=m$. In particular this quotient has the supplied finite-type compactification and labeled ends, and all its maximal parabolic classes and primitive generators correspond exactly to the given ones. A maximal stabilizer is preserved under the group isomorphism and a primitive generator cannot become a proper power under an isomorphism. [F2, F3, step 1.1, given, construct, algebra]

3.1 The disk metric is invariant under its Möbius automorphisms by [F4] applied in both directions, so it descends to the quotient. It is complete: radial integration gives $d_D(0,z)=\log((1+|z|)/(1-|z|))$, and every competing curve has at least its radial integral, so bounded disk balls are relatively compact and disk Cauchy sequences converge. For quotient completeness choose a subsequence of a quotient Cauchy sequence with consecutive distances less than $2^{-j}$. Join consecutive points by piecewise smooth paths of length less than $2^{1-j}$, and lift successive paths to $D$. Their endpoints are a Cauchy sequence in the complete disk, hence converge, and projecting proves convergence of the subsequence and then of the original Cauchy sequence. For curvature, the Cayley-conjugate metric is $y^{-2}(dx^2+dy^2)$. Formula [F5] gives $\Gamma^x_{xy}=\Gamma^x_{yx}=-1/y$, $\Gamma^y_{xx}=1/y$, $\Gamma^y_{yy}=-1/y$ and all other symbols zero. For the orthonormal frame $e_1=y\partial_x,e_2=y\partial_y$, this gives $\nabla_{e_1}e_1=e_2$, $\nabla_{e_1}e_2=-e_1$, $\nabla_{e_2}e_1=\nabla_{e_2}e_2=0$ and $[e_1,e_2]=-e_1$. Consequently $R(e_1,e_2)e_2=-e_1$ and $K=-1$. [F4, F5, step 2.1, given, construct, algebra]

3.2 We prove the precise cusp embedding needed here. Work in the upper half-plane and normalize a parabolic primitive generator to a real translation of absolute length one. Its stabilizer consists of translations: an affine real map with multiplier $a>0$, $a\ne1$, conjugates this translation by suitable positive or negative powers to nonidentity translations tending to the identity. Discreteness excludes it. The stabilizer's translation lengths are a discrete subgroup of $\mathbb R$, hence cyclic: select a smallest positive length among the finitely many below any positive candidate, and use division with remainder. Use its primitive generator to normalize the length to one. For any other group matrix $g=\left(\begin{smallmatrix}a&b\\c&d\end{smallmatrix}\right)$ with $c\ne0$, one has $|c|\ge1$. Otherwise define $g_{n+1}=g_nTg_n^{-1}$ with $T=\left(\begin{smallmatrix}1&1\\0&1\end{smallmatrix}\right)$. Then $c_{n+1}=-c_n^2$ and $a_{n+1}=1-a_nc_n$. If $|c_0|=s<1$, $|c_n|=s^{2^n}$ and $|a_n|\le\max(|a_0|,(1-s)^{-1})$. The displayed multiplication also gives $b_{n+1}=a_n^2$, $d_{n+1}=1+a_nc_n$, so these distinct matrices tend to $T$, contradicting discreteness. Finally $\operatorname{Im}(gz)=\operatorname{Im}z/|cz+d|^2\le1/(c^2\operatorname{Im}z)$. For $R>1$ a matrix outside the stabilizer therefore sends $\{y\ge R\}$ into $\{y\le1/R\}$, disjoint from it. This proves precise invariance of the closed horodisk, with strict boundary slack, and injectivity of its cylindrical quotient in the surface. [step 1.1, step 2.1, given, construct, algebra]

4.1 Its area is finite, without yet assuming any cusp classification. On a punctured coordinate disk $U=\{0<|q|<a\}$ in $Y$, the map $q=a e^{2\pi iz}$ from $H^+$ is a holomorphic universal cover. The inclusion $U\to Y$ composed with this cover lifts holomorphically to $D$ by [F4]. Schwarz–Pick, after the Cayley change of variable, bounds the pulled-back quotient metric by $|dz|/\operatorname{Im}z$. Thus on $U$ its density is at most $1/(|q|\log(a/|q|))$. The area of $0<|q|<b<a$ is consequently at most $2\pi/\log(a/b)$, by polar integration. There are finitely many punctures; the remainder is compact and its smooth metric has finite area. If there are no punctures the entire surface is compact and the same conclusion is immediate. This proves cofiniteness. [F4, step 2.1, step 3.1, construct, algebra]

4.2 That closed cusp embedding is proper. Its horizontal coordinate modulo one is compact. An escaping sequence therefore has heights tending to infinity along a subsequence. The horizontal path joining a height-$y$ point to its translate by one has hyperbolic length $1/y$, so the image injectivity radius is at most $1/(2y)$ and tends to zero. Every compact subset of the surface has a positive lower injectivity-radius bound, by finite covering with small evenly covered metric balls. Thus an escaping sequence cannot have image in a compact set, which proves properness. The metric and area on its quotient are exactly $y^{-2}(dx^2+dy^2)$ and $\int_0^1\int_R^\infty y^{-2}dydx=1/R$. The coordinate $q=e^{2\pi iz}$ identifies it holomorphically with a punctured disk. Its boundary is a compact embedded circle and its interior is a component of the complement of that circle: properness makes it closed there as well as open. [step 3.1, step 3.2, construct, algebra]

5.1 Each such proper cylindrical tail eventually lies in one puncture neighborhood of the finite-type surface. Indeed after removing any sufficiently large compact core, its connected sufficiently deep tail avoids that core by properness and lies in one of the finitely many components. It cannot switch components farther down. Its primitive fundamental group specifies exactly the corresponding puncture label by step 2.1 and the supplied complete peripheral correspondence. Once its compact boundary lies outside a smaller connected puncture neighborhood which its tail meets, that smaller neighborhood lies entirely in the cusp image: the image is both open and closed away from its boundary. Thus it contains a whole tail of that labeled end. Distinct labels have disjoint deep neighborhoods; shrink the finitely many cusp tails into these neighborhoods. Their complement is compact because they cover a tail at every puncture. Positive peripheral orientation is preserved by the orientation-preserving marked homeomorphism $m$ and the holomorphic identification $I$; the generator is primitive by step 2.1. This proves every stated cusp and marking conclusion, including the empty collection in the compact case. [step 2.1, step 4.1, step 4.2, given, construct] ∎

## Actual reading and logical scope

The actual measurable sphere mapping, invariant-coefficient deformation, quasiconformal composition and conformality, Schwarz–Pick and covering-lift supplier proofs were read. The Shimizu iteration and proper cusp argument are given locally in the actual two-dimensional setting; a rank-two cusp theorem is not invoked for rank-one surface cusps. The construction starts with the supplied reference disk quotient and constructs cofinite models for all of its marked quasiconformal targets. It does not assume that closed-surface model theorems already include punctured surfaces, and it supplies no three-dimensional geometric finiteness or hyperbolization assertion.