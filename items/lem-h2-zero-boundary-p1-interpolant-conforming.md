---
id: lem-h2-zero-boundary-p1-interpolant-conforming
kind: lemma
title: The nodal P1 interpolant preserves homogeneous boundary values
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-matching-affine-simplicial-meshes
  - def-sobolev-space-wkp-and-its-norm
  - def-wkp-zero-as-a-sobolev-closure
  - lem-affine-pullback-weak-derivatives-and-scaling
  - lem-smooth-bump-between-concentric-euclidean-balls
  - lem-weak-leibniz-rule-with-a-smooth-factor
  - thm-reference-simplex-sobolev-extension
  - thm-higher-order-sobolev-embedding
  - thm-extension-theorem-for-bounded-smooth-domains
  - lem-zero-extension-from-w-one-p-zero
  - thm-trace-estimate-on-the-half-space
  - cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn
  - thm-chain-rule-for-differentials-of-smooth-maps
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-zero-boundary-piecewise-polynomials-in-w10p
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Part III, Chapter 11"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap11.pdf
    - title: "Joachim Schöberl, Numerical Methods for Partial Differential Equations, §4.2"
      url: https://jschoeberl.github.io/iFEM/_downloads/900feda304f95ee42fd24abe742d7564/numpde.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume the Axiom of Choice and Countable Choice. Let
$\Omega=(-1,1)^2$ have a finite matching affine triangular mesh, and let
$u\in H^2(\Omega;\mathbb R)\cap H^1_0(\Omega;\mathbb R)$. On each triangle
take the unique continuous representative of the restriction of $u$. These
representatives give one well-defined value at every mesh vertex. The global
nodal P1 interpolant $I_hu$, affine on each triangle and equal to these values
at its vertices, is continuous, has zero trace on every boundary edge, and
belongs to $H^1_0(\Omega)$.

## Facts & Assumptions

**Given:** The Axiom of Choice and Countable Choice; the open square with its
finite matching triangular mesh; and a real Sobolev class
$u\in H^2(\Omega)\cap H^1_0(\Omega)$.

[F1] Affine pullback and pushforward preserve $W^{2,2}$, with weak derivatives
given by the constant-matrix chain rule.
([[lem-affine-pullback-weak-derivatives-and-scaling]])

[F2] The reference triangle is a $W^{2,2}$ extension domain; since
$2\cdot2>2$, higher-order Sobolev embedding gives a unique continuous
representative on its closure. The same embedding applies on every ball whose
closure is contained in $\Omega$, since a ball is a bounded smooth domain and
therefore an extension domain.
([[thm-reference-simplex-sobolev-extension]],
[[thm-higher-order-sobolev-embedding]],
[[thm-extension-theorem-for-bounded-smooth-domains]])

[F3] Zero extension sends $H^1_0(\Omega)$ into $H^1(\mathbb R^2)$ and has the
zero extended weak gradient.
([[lem-zero-extension-from-w-one-p-zero]])

[F4] The half-space trace is a bounded linear map on $H^1$ and agrees with
classical restriction for compactly supported functions continuous on the
closed half-space. Smooth compactly supported functions are dense in
$H^1(\mathbb R^2)$.
([[thm-trace-estimate-on-the-half-space]],
[[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]])

[F5] Translation and orthogonal coordinate changes preserve $H^1(\mathbb R^2)$
and its norm; weak derivatives transform by the corresponding constant matrix.
This follows by changing variables in the weak-derivative identity and using
the smooth chain rule.
([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]],
[[thm-chain-rule-for-differentials-of-smooth-maps]])

[F6] A nonempty open subset of $\mathbb R^2$ contains a nondegenerate box,
which has positive Lebesgue measure; hence continuous functions agreeing
almost everywhere on an open set agree there everywhere.
([[thm-lebesgue-measure-of-a-box-of-every-kind]])

[F7] A smooth multiplier preserves $H^1$ and obeys the weak product rule.
([[lem-weak-leibniz-rule-with-a-smooth-factor]])

[F8] On a finite matching mesh of a bounded polyhedral domain, a continuous
piecewise polynomial with zero polynomial trace on every boundary facet
belongs to $H^1_0$.
([[thm-zero-boundary-piecewise-polynomials-in-w10p]])

[F9] Given concentric balls with the smaller closure inside the larger ball,
there is a smooth cutoff supported in the larger ball and equal to one on the
smaller ball.
([[lem-smooth-bump-between-concentric-euclidean-balls]])

[F10] A finite matching affine triangular mesh of the square consists of
nondegenerate triangles with disjoint interiors, whose intersections are
whole common edges or vertices; its boundary edges cover $\partial\Omega$.
([[def-matching-affine-simplicial-meshes]])

[A1] The Axiom of Choice is inherited through the simplex and higher-order
Sobolev embedding and the half-space trace interfaces.
([[def-axiom-of-choice]])

[A2] Countable Choice is inherited through affine changes of variables, zero extension, half-space trace and density, the weak multiplier rule, and the zero-boundary finite-element interface.
([[def-countable-choice]])

## Proof


1.1 For each mesh triangle $K$, apply [F1] to pull $u|_K$ back to the reference triangle, and then apply [F2]. This gives a continuous representative on $\overline K$. It is unique: if two continuous representatives differed at one point, continuity would make them differ on a nonempty open subset of $K$, contradicting [F6]. Thus each cellwise nodal value is individually well-defined. [A1, A2, F1, F2, F6, F10, given]

1.2 Put $z=E_0u$, the zero extension from [F3]. On either side of any straight line, the half-space trace is obtained from the positive-half-space trace in [F4] by a translation and, when needed, a reflection; [F5] verifies that these changes preserve the Sobolev class and norm. The two traces of a global $H^1(\mathbb R^2)$ class across such a line agree: choose $z_m\in C_c^\infty(\mathbb R^2)$ converging to $z$ by [F4]; the two traces of each $z_m$ are its same classical restriction, and boundedness of the two trace maps passes this equality to the limit. On the exterior half-space of each side of $\Omega$, $z=0$, so both its exterior trace and its interior trace are zero. [A1, A2, F3, F4, F5, given]

2.1 If $K_+$ and $K_-$ share an interior edge, every point $x$ in the relative interior of that edge has a ball $B\subset\Omega$ meeting only those two cells. By [F2], $u|_B$ has a continuous representative. On each of the two open half-balls $B\cap K_\pm$, this representative and the corresponding representative from step 1.1 agree almost everywhere, hence everywhere by [F6]. Taking limits to $x$ shows the two cell values agree at $x$; continuity along the closed edge gives agreement at its endpoints as well. For an interior mesh vertex, take a ball about the vertex contained in $\Omega$ and repeat this argument for every incident cell. [A1, F2, F6, F10, given, step 1.1]

2.2 Let $x$ lie in the relative interior of a boundary mesh edge $E$. Choose a ball $B$ centered at $x$ small enough that its interior half-ball lies in the unique incident triangle $K$ and its other boundary is disjoint from all mesh edges. By [F9] choose $\chi\in C_c^\infty(B)$ equal to one near $x$. On the interior half-space define $v=\chi u_K$ inside $B$ and zero outside, where $u_K$ is the continuous cell representative from step 1.1. The cutoff vanishes near the circular part of $\partial B$, so the weak test identity shows $v\in H^1$ of that half-space; it is compactly supported and continuous on the closed half-space. Its class is $\chi z$ there. By linearity and boundedness of the trace, and by approximation with the smooth functions in step 1.2, $T(\chi z)=\chi Tz=0$ on the side. The classical-restriction clause of [F4] gives $T v=\chi u_K|_E$, so $u_K=0$ almost everywhere near $x$ on $E$. Continuity from step 1.1 makes this value zero at every point of that edge, including its endpoints. [A1, A2, F4, F5, F7, F9, F10, step 1.1, step 1.2]

3.1 Interior edge values agree by step 2.1. At a boundary vertex, the incident triangles form a connected fan because the square is convex; the fan is a chain under adjacency across edges containing that vertex, and at least one end cell has a boundary edge. Step 2.2 gives zero at the vertex in that end cell, and step 2.1 propagates that value through the fan. Thus all cell values at every shared vertex agree and boundary vertex values are zero. The affine traces of adjacent P1 interpolants agree because they agree at both edge endpoints, so $I_hu$ is continuous; on each boundary edge it is affine with both endpoint values zero, hence its trace is zero. Apply [F8] to conclude $I_hu\in H^1_0(\Omega)$. [A2, F8, F10, given, step 2.1, step 2.2] ∎
