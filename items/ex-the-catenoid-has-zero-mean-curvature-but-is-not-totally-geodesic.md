---
id: ex-the-catenoid-has-zero-mean-curvature-but-is-not-totally-geodesic
kind: example
title: The catenoid has zero mean curvature but is not totally geodesic
status: published
origin: pipeline
deps: ["def-countable-choice", "prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions", "thm-a-regular-level-set-is-an-embedded-submanifold", "def-induced-connection-and-second-fundamental-form", "thm-weingarten-equation-and-adjointness-of-the-shape-operator", "def-mean-curvature-vector", "def-totally-geodesic-submanifold", "def-principal-curvatures-gaussian-curvature-and-mean-curvature-of-an-oriented-hypersurface", "prop-christoffel-formula-for-the-levi-civita-connection", "prop-connection-laws-in-directional-form"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Danny Calegari, Minimal Surfaces
      url: https://web.archive.org/web/20190618171523if_/http://math.uchicago.edu/~dannyc/courses/minimal_surfaces_2014/minimal_surfaces_notes.pdf
      locator: Lemma 1.2 and Example 1.6, printed pages 4–7
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: Parametrized Euclidean shape formulas, printed pages 142–143, and Problem 8-4, printed page 150
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$ and let $a>0$. On
$S^1\times\mathbb R$, with $u$ the angular coordinate, consider the catenoid
immersion

$$X(u,v)=\bigl(a\cosh(v/a)\cos u,a\cosh(v/a)\sin u,v\bigr).$$

For the unit normal chosen below, its principal curvatures are

$$\kappa_u=-\frac{1}{a\cosh^2(v/a)},\qquad \kappa_v=\frac{1}{a\cosh^2(v/a)}.$$

Thus its scalar mean curvature and averaged mean-curvature vector both vanish,
but its second fundamental form is nonzero at every point. In particular, the
catenoid is not totally geodesic. The countable-choice assumption is inherited
exactly from the general submanifold constructions.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, $a>0$, the displayed immersion, and the
standard Euclidean metric.

[F1] Countable choice permits a choice from every sequence of nonempty sets, and a pullback metric is Riemannian exactly for an immersion. [[def-countable-choice]], [[prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions]].

[F2] The second fundamental form is the normal component of the ambient derivative, and $g(S_NY,Z)=\langle\mathrm{II}(Y,Z),N\rangle$. [[def-induced-connection-and-second-fundamental-form]], [[thm-weingarten-equation-and-adjointness-of-the-shape-operator]].

[F3] Principal curvatures are the eigenvalues of the shape operator and scalar mean curvature is one half of their sum on a surface. [[def-principal-curvatures-gaussian-curvature-and-mean-curvature-of-an-oriented-hypersurface]].

[F4] The averaged mean-curvature vector of a surface is $\mathbf H=\frac12\sum_i\mathrm{II}(e_i,e_i)$ in any orthonormal tangent basis. [[def-mean-curvature-vector]].

[F5] Total geodesicity means $\mathrm{II}=0$. [[def-totally-geodesic-submanifold]].

[F6] The Christoffel formula and connection Leibniz rule compute Euclidean ambient derivatives in Cartesian coordinates. [[prop-christoffel-formula-for-the-levi-civita-connection]], [[prop-connection-laws-in-directional-form]].

[F7] A nonempty regular level set is an embedded submanifold.
[[thm-a-regular-level-set-is-an-embedded-submanifold]].

## Verification

**Proof technique:** direct first- and second-form calculation.

1.1 Put $t=v/a$, $c=\cosh t$, and $s=\sinh t$. Then $X_u=(-ac\sin u,ac\cos u,0)$ and $X_v=(s\cos u,s\sin u,1)$, so the first fundamental coefficients are $E=\langle X_u,X_u\rangle=a^2c^2$, $F=\langle X_u,X_v\rangle=0$, and $G=\langle X_v,X_v\rangle=s^2+1=c^2$. Since $a,c>0$, these vectors are independent; [F1] therefore gives the induced Riemannian metric. [F1, given, algebra]

1.2 The image of $X$ is the level set
$$C_a=\{(x,y,z):x^2+y^2-a^2\cosh^2(z/a)=0\}.$$
On this level set $(x,y)\ne(0,0)$, so the differential of the defining function is nonzero; [F7] makes $C_a$ an embedded surface. The map $X:S^1\times\mathbb R\to C_a$ is bijective, with smooth inverse
$$ (x,y,z)\longmapsto\left(\frac{(x,y)}{a\cosh(z/a)},z\right)\in S^1\times\mathbb R.$$
Thus $X$ is an embedding and the submanifold interfaces below apply to its image. [F7, step 1.1, algebra]

2.1 Their cross product is $X_u\times X_v=ac(\cos u,\sin u,-s)$ and has norm $ac^2$. Hence $N=c^{-1}(\cos u,\sin u,-s)$ is a smooth unit normal for the displayed orientation. [step 1.1, algebra]

3.1 The second derivatives are $X_{uu}=(-ac\cos u,-ac\sin u,0)$, $X_{uv}=(-s\sin u,s\cos u,0)$, and $X_{vv}=(c\cos u/a,c\sin u/a,0)$. The Cartesian Euclidean symbols vanish by [F6], so the scalar second fundamental coefficients obtained from [F2] are $h_{uu}=\langle X_{uu},N\rangle=-a$, $h_{uv}=0$, and $h_{vv}=1/a$. [F2, F6, step 2.1, algebra]

4.1 Because both $(g_{ij})=\operatorname{diag}(a^2c^2,c^2)$ and $(h_{ij})=\operatorname{diag}(-a,1/a)$ are diagonal, the orthonormal fields $e_u=X_u/(ac)$ and $e_v=X_v/c$ are principal directions. The identity in [F2] gives $g(S_Ne_u,e_u)=-1/(ac^2)$, $g(S_Ne_v,e_v)=1/(ac^2)$, and the mixed entries zero; hence [F3] gives exactly the two displayed principal curvatures. [F2, F3, step 1.1, step 3.1, algebra]

5.1 Their average is zero, so [F3] gives scalar mean curvature $H_N=0$. Since the normal space is spanned by $N$, step 3.1 gives $\mathrm{II}(e_u,e_u)=\kappa_uN$ and $\mathrm{II}(e_v,e_v)=\kappa_vN$; [F4] therefore gives $\mathbf H=\frac12(\kappa_u+\kappa_v)N=0$. [F2, F3, F4, step 3.1, step 4.1, algebra]

6.1 Because $a>0$ and $c=\cosh(v/a)>0$, $\kappa_u$ and $\kappa_v$ are nonzero at every point. In particular, $\mathrm{II}(e_u,e_u)=\kappa_uN\ne0$, so $\mathrm{II}$ is not the zero tensor; [F5] says the catenoid is not totally geodesic. [F5, step 4.1, step 5.1, algebra]

7.1 The domain and embedded image from step 1.2 are nonempty fixed two-manifolds, so zero- and one-dimensional cases are inapplicable. The condition $a>0$ excludes the collapsed scale and steps 1.1–2.1 prove nondegeneracy; $\cosh t$ never vanishes. Neither factor has a boundary endpoint. The displayed normal and principal frame are explicit. The only choice assumption is the stated $\mathrm{AC}_\omega$ inherited through [F2]–[F5], and the finite coordinate calculation adds none. Reversing $N$ reverses both principal curvatures but leaves both zero-mean conclusions and $\mathrm{II}\ne0$ unchanged. No biconditional is asserted. [F1, F2, F3, F4, F5, F6, F7, step 1.1, step 1.2, step 2.1, step 3.1, step 4.1, step 5.1, step 6.1] ∎
