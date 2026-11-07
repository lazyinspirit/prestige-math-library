---
dependency_level: 2
id: lem-iterated-power-orbits-contain-a-constant-point
kind: lemma
title: An orbit defined over all iterated power fields contains a constant point
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-axiom-of-choice
  - lem-function-field-iterated-powers-have-only-perfect-constants
  - thm-gauss-jordan-elimination-produces-reduced-row-echelon-form
  - thm-reduced-row-echelon-form-is-unique
  - thm-chevalley-constructible-image-varieties
  - lem-constructible-dense-contains-open
  - thm-closed-subschemes-projective-space-homogeneous-ideals
  - thm-proper-ideal-contained-in-maximal-ideal
  - lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite
  - thm-existence-of-algebraic-closures
  - thm-finitely-generated-algebraic-extensions-are-finite
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "P. Samuel, Lectures On Old And New Results On Algebraic Curves, Chapter I §1(b–d) and Chapter III §3, printed pp. 74–78; finite linear-representation formulation"
      url: https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr36.pdf
    - title: "Hans Grauert, Mordells Vermutung, §4, printed pp. 143–146; orbit-closure descent refinement"
      url: https://numdam.org/item/PMIHES_1965__25__131_0.pdf
verification: {}
---

## Statement

Assume AC. Let $k$ be algebraically closed of characteristic $p>0$ and
$K/k$ a finitely generated field extension. Let $V$ be a nonzero
finite-dimensional $k$-vector space, let $q\ge1$, and let
$\rho:\mathrm{GL}_{q,k}\to\mathrm{GL}(V)$ be a morphism of algebraic
groups, given by regular matrix coefficients. Suppose
$x\in\mathbf P(V)(K)$ has the following property: for every $e\ge0$
there are $x_e\in\mathbf P(V)(K^{p^e})$ and
$g_e\in\mathrm{GL}_q(K)$ with $x=\rho(g_e)x_e$.

Then there is $y\in\mathbf P(V)(k)$ and a finite extension $L/K$ such
that $x=\rho(g)y$ for some $g\in\mathrm{GL}_q(L)$. In particular the
geometric orbit of $x$ contains a constant point. No quotient or moduli
space is assumed.

## Facts & Assumptions

**Given:** AC and the fields, representation and projective orbit data
of the Statement.

[A1] AC is assumed. [[def-axiom-of-choice]]

[F1] For a finitely generated function field with relatively algebraically
closed perfect constants $k$, $\bigcap_e K^{p^e}=k$.
[[lem-function-field-iterated-powers-have-only-perfect-constants]]

[F2] Every finite-dimensional row space has a row-reduced basis, and
the reduced row echelon form is unique. In particular the nonzero reduced
rows are determined by the subspace, independently of its chosen basis.
[[thm-gauss-jordan-elimination-produces-reduced-row-echelon-form]]
[[thm-reduced-row-echelon-form-is-unique]]

[F3] Over an algebraically closed field the image of a morphism of
classical varieties is constructible, and a constructible set with nonempty
irreducible closure contains a nonempty open of that closure. These
suppliers concern classical closed points, which is precisely their use
in step 4.1.
[[thm-chevalley-constructible-image-varieties]]
[[lem-constructible-dense-contains-open]]

[F4] Homogeneous ideals specify closed projective subschemes through
their homogeneous coordinate rings, compatibly with the standard charts.
[[thm-closed-subschemes-projective-space-homogeneous-ideals]]

[F5] A nonempty affine scheme of finite type over an algebraically
closed field has a rational point: choose a maximal ideal, whose residue
field is finite over that field. Thus on a reduced affine variety a
regular function vanishing at all rational points is zero, since any
nonzero function has a nonempty principal open with a rational point.
[[thm-proper-ideal-contained-in-maximal-ideal]]
[[lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite]]

[F6] Under AC every field has an algebraic closure.
[[thm-existence-of-algebraic-closures]]
Finitely many elements algebraic over a field generate a finite
extension. [[thm-finitely-generated-algebraic-extensions-are-finite]]

## Axiom use

AC is inherited through the constructible-image and rational-point
suppliers. Only finite matrices and finite coefficient spans occur in the
descent; no simultaneous choice of an infinite vector-space basis is used.

## Proof

**Proof technique:** direct; descend the orbit closure degree by degree
and find a constant point in its open geometric orbit.

1.1 Fix a $k$-basis of $V$, put $s=\dim V$, and let $\Omega$ be an algebraic closure of $K$. The coordinate algebra of $\mathrm{GL}_q$ over any field $F$ is $F[a_{ij},\det(a)^{-1}]$, a domain since it is a localization of a polynomial ring. For a vector $v\in F^s\setminus\{0\}$ representing a projective point, define the graded algebra map
$$F[Y_1,\ldots,Y_s]\longrightarrow F[a_{ij},\det(a)^{-1}][T],\qquad Y_i\longmapsto(\rho(a)v)_iT.$$
Its homogeneous kernel commutes with any extension of the coefficient field, since tensoring vector spaces is exact. After extending $F$ to an algebraic closure, a homogeneous equation vanishes on all orbit points if and only if its substituted regular function on $\mathrm{GL}_q$ vanishes, by the algebraically-closed-field density assertion [F5]. Thus [F4] identifies the extended kernel with the projective geometric orbit closure, and the original kernel defines its model over $F$. In particular formation of this closure commutes with field extension; no density of $F$-rational points for an arbitrary field $F$ is asserted. Multiplying $v$ by a nonzero scalar does not change the kernel. Applying a group element also leaves it unchanged, by translation of the matrix variable $a$. Its extension to $\Omega$ is prime, as the target algebra there is a domain. Thus the geometric orbit closure is integral. [F4, F5, F6, given, construct, algebra]

2.1 Let $I\subseteq K[Y]$ be the kernel for $x$. For each $e$, use the point $x_e$ over $K^{p^e}$. Step 1.1 and $x=\rho(g_e)x_e$ show that $I$ is the extension to $K$ of the kernel $I_e$ over $K^{p^e}$. In degree $r$, its finite coefficient subspace $I_r\subseteq K[Y]_r$ therefore has a basis defined over every $K^{p^e}$. Row-reduce that basis. Uniqueness in [F2] says that the resulting nonzero reduced rows, viewed over $K$, are the same for every $e$. Each of their entries lies in every $K^{p^e}$, hence in $k$ by [F1]; its exact-constant hypothesis holds because $k$ is algebraically closed. Thus $I_r=K\cdot(I_r\cap k[Y]_r)$ for every degree $r$. [F1, F2, algebra, step 1.1]

3.1 Put $I_0=I\cap k[Y]$ and $Z_0=\operatorname{Proj}(k[Y]/I_0)$. Its ideal is homogeneous, and step 2.1 gives $I=I_0K[Y]$. By the standard charts in [F4], $(Z_0)_\Omega$ is the integral orbit closure $Z_\Omega$ of $x$. The set $Z_0(k)$ is dense even in $Z_\Omega$ with its $\Omega$-Zariski topology. To check this, on any nonempty affine $k$-chart write a regular function in its scalar-extended coordinate ring as $f=\sum_{i=1}^r c_if_i$, where the $c_i\in\Omega$ are linearly independent over $k$ and $f_i$ lie in the original $k$-algebra. If $f$ vanishes on all its $k$-points, coefficient independence makes each $f_i$ vanish on them, and [F5] gives $f_i=0$. Hence a proper closed subset of this extended affine chart cannot contain all its $k$-points: take a nonzero element of its defining ideal. The charts cover $Z_\Omega$, proving the density assertion. [F4, F5, construct, algebra, step 1.1, step 2.1]

4.1 The geometric orbit $O=\rho(\mathrm{GL}_q(\Omega))x$ is the image of a morphism of classical varieties over $\Omega$. It is constructible by [F3]. Its closure $Z_\Omega$ is nonempty and irreducible by step 1.1, so [F3] gives a nonempty open $U\subseteq Z_\Omega$ contained in $O$. Every group element preserves $Z_\Omega$, since it preserves $O$ and is an automorphism of the ambient projective space. The translates of $U$ are open subsets contained in $O$, and they cover $O$: choose $u\in U(\Omega)$, and transitivity of the orbit carries $u$ to any chosen orbit point. Therefore $O$ is open in its closure, in the classical topology. By the density proved in step 3.1, this open contains a point $y\in Z_0(k)$. In particular $y\in\mathbf P(V)(k)$ is in the geometric orbit of $x$. [F3, F5, given, step 1.1, step 3.1]

5.1 There is $g\in\mathrm{GL}_q(\Omega)$ with $x=\rho(g)y$. The finitely many entries of $g$ are algebraic over $K$, so [F6] puts them in a finite extension $L/K$ inside $\Omega$. Its determinant is nonzero there, so $g\in\mathrm{GL}_q(L)$ and the projective equality holds over $L$. This proves the Statement, also when $\mathbf P(V)$ is a point or the orbit has dimension zero. [F6, given, step 4.1] ∎
