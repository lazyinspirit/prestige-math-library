---
id: ex-plane-quartic-genus-three-smooth
kind: example
title: "Smooth plane quartic has genus three"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-dimension-affine-and-projective-space
  - cor-plane-curve-geometric-genus-delta-correction
  - cor-projective-plane-bezout-length-form
  - def-algebraic-curve-over-field
  - def-arithmetic-genus-proper-curve
  - def-axiom-of-choice
  - def-delta-invariant-curve-singularity
  - def-geometric-genus-singular-curve
  - def-integral-scheme
  - def-projective-scheme-from-a-homogeneous-quotient
  - def-relative-projective-space-standard-charts
  - def-smooth-morphism-to-field-classical
  - def-weil-divisor-normal-noetherian-scheme
  - lem-affine-local-dimension-residue-transcendence
  - lem-curve-closed-subsets-finite
  - lem-finite-type-jacobson-residue-extension
  - lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct
  - lem-finite-variable-polynomial-rings-over-fields-are-ufds
  - lem-projective-hypersurface-affine-pieces
  - lem-projective-hypersurface-dimension-drop
  - lem-standard-projective-opens-are-affine-spaces
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-jacobian-criterion-affine-variety
  - thm-normalization-glues-integral-finite-type-curves
  - thm-plane-curve-arithmetic-genus
  - thm-regular-local-rings-are-normal
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Chs. 6-8"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025), Chs. 19 and 21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
---

## Example

Let $k$ be algebraically closed and let $X=V_+(F)\subseteq\mathbb P^2_k$ be a
smooth plane quartic, so $\deg F=4$. Then
$$p_a(X)=\frac{(4-1)(4-2)}2=3,$$
every point of $X$ is regular so every delta invariant vanishes, and the
geometric genus is $g(X)=3$. This realizes the triangular-number genus
sequence $\frac{(d-1)(d-2)}2$ for smooth plane curves of degree $d$.

## Facts & Assumptions

**Given:** An algebraically closed field $k$, a nonzero homogeneous form $F$ of
degree $4$, and the smooth plane hypersurface
$X=V_+(F)\subseteq\mathbb P^2_k$. We work under the Axiom of Choice [A1].

[A1] The Axiom of Choice is assumed ([[def-axiom-of-choice]]).

[A2] In ZF, AC implies Dependent Choice
([[thm-choice-implies-dependent-implies-countable-choice]]). This supplies
the DC use in the curve closed-subset finiteness route used by the
delta-correction formula.

[F1] If $X=V_+(F)$ is an integral plane curve of degree $d$, then it is proper
and has $H^0(X,\mathcal O_X)=k$ and
$p_a(X)=1-\chi(\mathcal O_X)=\frac{(d-1)(d-2)}2$.
([[thm-plane-curve-arithmetic-genus]])

[F11] A curve over $k$ is nonempty, geometrically integral, separated, finite
type, and of chain dimension one. ([[def-algebraic-curve-over-field]],
[[def-integral-scheme]])

[F2] For an integral proper curve, the arithmetic genus is
$p_a(X)=1-\chi(\mathcal O_X)$; over algebraically closed $k$, the geometric
genus is $g(X)=g(X^{\mathrm{nu}})$, and the delta invariant vanishes exactly
at regular points. ([[def-arithmetic-genus-proper-curve]],
[[def-geometric-genus-singular-curve]],
[[def-delta-invariant-curve-singularity]])

[F3] For an integral plane curve over algebraically closed $k$ with isolated
singularities,
$$g(X^{\mathrm{nu}})=\frac{(d-1)(d-2)}2-\sum_x\delta_x(X),$$
where the finite sum is over the singular points. The finiteness route uses
DC under AC [A2] through the proper-closed-subset lemma for curves.
([[cor-plane-curve-geometric-genus-delta-correction]],
[[lem-curve-closed-subsets-finite]])

[F4] Smoothness over $k$ makes every local ring regular. For a closed
$k$-point on an affine hypersurface chart with one actual equation in two
variables and local dimension one, the Jacobian criterion says the local ring
is regular exactly when the one-row Jacobian has rank one.
([[def-smooth-morphism-to-field-classical]],
[[thm-jacobian-criterion-affine-variety]])

[F5] A finite-variable polynomial ring over a field is a UFD, and every
irreducible element is prime. ([[lem-finite-variable-polynomial-rings-over-fields-are-ufds]])

[F6] Two positive-degree homogeneous forms in three variables with no common
nonconstant factor have a nonempty finite projective intersection; over
algebraically closed $k$ its closed points have residue field $k$.
([[cor-projective-plane-bezout-length-form]])

[F7] The standard charts of $\mathbb P^2_k$ are affine planes and their
pairwise overlaps are nonempty, so $\mathbb P^2_k$ is irreducible; its
projective dimension is two. A nonzero homogeneous form of positive degree
cuts out a nonempty projective hypersurface whose irreducible components all
have dimension one. ([[def-relative-projective-space-standard-charts]],
[[lem-standard-projective-opens-are-affine-spaces]],
[[cor-dimension-affine-and-projective-space]],
[[lem-projective-hypersurface-dimension-drop]])

[F8] The equation on each standard affine chart of $V_+(F)$ is the
dehomogenization of $F$. At a closed point on a pure one-dimensional
finite-type scheme over algebraically closed $k$, the residue field is $k$,
and the affine local-dimension formula then gives local-ring dimension one.
([[lem-projective-hypersurface-affine-pieces]],
[[lem-finite-type-jacobson-residue-extension]],
[[lem-affine-local-dimension-residue-transcendence]],
[[lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct]])

[F9] Every regular local ring is normal. A normal integral curve is its own
normalization by the normalization theorem's initiality.
([[thm-regular-local-rings-are-normal]],
[[def-weil-divisor-normal-noetherian-scheme]],
[[thm-normalization-glues-integral-finite-type-curves]])

[F12] If $S$ is a standard graded domain with $S_+\ne0$, then $(0)$ is a
homogeneous prime not containing $S_+$ and is the generic point of
$\operatorname{Proj}S$. Each nonempty standard chart ring is a degree-zero subring of a
localization of $S$ at a nonzero homogeneous element, hence a domain; therefore $\operatorname{Proj}S$ is
integral. ([[def-projective-scheme-from-a-homogeneous-quotient]],
[[def-integral-scheme]])

## Verification

**Proof technique:** establish that smoothness forces the quartic form to be square-free and irreducible, then compute the arithmetic and geometric genera.

1.1 Dimension of the hypersurface. The nonzero quartic $F$ does not vanish identically on the irreducible surface $\mathbb P^2_k$. By [F7], $X=V_+(F)$ is nonempty and each of its irreducible components has dimension one. Thus every closed point used below has local dimension one by [F8]. [F7, F8]

2.1 No repeated factor. Factor $F$ into irreducible homogeneous forms in the UFD $k[x_0,x_1,x_2]$ [F5]; homogeneous factors can be taken homogeneous because the lowest and highest graded degrees of a product add. Suppose an irreducible factor $G$ occurs with multiplicity at least two, so $F=G^2H$. By [F7], $V_+(G)$ is nonempty; choose a closed point $P\in V_+(G)$. In a standard affine chart through $P$, the actual equation is $f=g^2h$, so its first partial derivatives all vanish at $P$. This remains true in every characteristic because each derivative is divisible by $g$. By [F8] the local dimension is one, so [F4] says the zero Jacobian row makes the local ring nonregular. This contradicts smoothness. Thus $F$ is square-free. [F4, F5, F7, F8, step 1.1]

3.1 No reducible square-free factorization. If square-free $F$ were reducible, write $F=GH$ with coprime homogeneous forms $G,H$ of positive degree. By [F6], their projective intersection is nonempty; choose a closed point $P$ in it. On a standard chart through $P$, the equation is $f=gh$ with $g(P)=h(P)=0$, so every first partial derivative $h\,\partial g+g\,\partial h$ vanishes at $P$. Its local ring has dimension one [F8] and is nonregular by [F4], contradicting smoothness again. Therefore $F$ is irreducible. [F4, F5, F6, F8, step 1.1, step 2.1]

4.1 The curve hypothesis. By [F5], irreducible $F$ is prime, so the homogeneous coordinate ring $k[x_0,x_1,x_2]/(F)$ is a domain. The nonempty standard projective charts are spectra of domains, so [F12] makes its Proj reduced and irreducible; it is nonempty and one-dimensional by [F7]. Since $k$ is algebraically closed, its algebraic-closure fibre is itself, so $X$ is geometrically integral. As a closed subscheme of projective space, $X$ is separated and finite type. Hence $X$ is a curve over $k$ by [F11]. [F5, F7, F11, F12, step 1.1, step 3.1]

5.1 The arithmetic genus and delta invariants. Smoothness makes every local ring regular [F4], so every delta invariant is zero [F2] and the sum in [F3] is empty. Applying [F1] with $d=4$ gives $H^0(X,\mathcal O_X)=k$ and $p_a(X)=\frac{(4-1)(4-2)}2=3$. The Axiom of Choice [A1] supplies the DC needed in [F3] through [A2]. [A1, A2, F1, F2, F3, F4, step 4.1]

6.1 The geometric genus. Applying [F3] to the integral quartic and using step 5.1 gives $g(X^{\mathrm{nu}})=3$. By [F9], smoothness makes $X$ normal, so its normalization is isomorphic to $X$; therefore $g(X)=g(X^{\mathrm{nu}})=3$, agreeing with $p_a(X)$. More generally, the same square-free and irreducibility argument of steps 2.1 and 3.1 applies to any smooth plane curve of degree $d\ge1$ over this algebraically closed field, so it is integral. Then [F1] gives $p_a=(d-1)(d-2)/2$, smoothness makes every delta invariant zero by [F2], and [F3] and [F9] give $g=p_a$. Thus the displayed quartic is the $d=4$ case of the triangular-number formula, without using a separate general-genus supplier. [F1, F2, F3, F9, step 2.1, step 3.1, step 4.1, step 5.1] ∎
