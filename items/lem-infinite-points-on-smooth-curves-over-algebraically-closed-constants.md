---
dependency_level: 5
id: lem-infinite-points-on-smooth-curves-over-algebraically-closed-constants
kind: lemma
title: Infinite points on smooth high-genus curves over algebraically closed constants
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - lem-smooth-pointed-function-field-curve-spreads-to-good-model
  - lem-horizontal-curve-splitting-descends-projective-equations
  - lem-iterated-power-orbits-contain-a-constant-point
  - cor-canonical-degree-two-g-minus-two
  - thm-degree-two-g-plus-one-line-bundle-very-ample
  - lem-proper-cohomology-field-extension
  - thm-differentials-smooth-locally-free
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - thm-closed-subschemes-projective-space-homogeneous-ideals
  - lem-exterior-algebra-basis-monomials
  - def-kth-exterior-power-of-a-linear-map
  - thm-gauss-jordan-elimination-produces-reduced-row-echelon-form
  - lem-ag-geometric-regularity-field-tests
  - thm-ag-standard-smooth-geometric-regularity
  - thm-projective-space-proper-over-base
  - lem-closed-immersion-proper
  - cor-noether-normalisation-module-finiteness
  - cor-dimension-preserved-by-integral-extensions
  - thm-proper-ideal-contained-in-maximal-ideal
  - lem-proper-stable-composition
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "P. Samuel, Lectures On Old And New Results On Algebraic Curves, Chapter III §§2–3, printed pp. 63–78; finite homogeneous-equation orbit reconstruction"
      url: https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr36.pdf
    - title: "Hans Grauert, Mordells Vermutung, §§3–4, printed pp. 140–146"
      url: https://numdam.org/item/PMIHES_1965__25__131_0.pdf
verification: {}
---

## Statement

Assume AC. Let $k$ be algebraically closed and let $K/k$ be a finitely
generated extension of positive transcendence degree. Let $C/K$ be a
smooth proper geometrically integral curve of genus $g\ge2$ with
$C(K)$ infinite. In characteristic zero, there is a smooth proper
geometrically integral curve $C_0/k$ with $C\cong(C_0)_K$ over $K$.
In positive characteristic, there are a finite extension $L/K$ and
a smooth proper geometrically integral curve $C_0/k$ with
$C_L\cong(C_0)_L$. The extension $L/K$ is allowed to be inseparable.
Both constant curves have genus $g$. Smoothness of the input is an
explicit hypothesis; no conclusion for regular nonsmooth curves is
included.

## Facts & Assumptions

**Given:** AC and the fields, smooth curve and infinite point set of the Statement.

[A1] AC implies DC, so successive choices of a countable sequence of
one-step models are available.
[[def-axiom-of-choice]] [[thm-choice-implies-dependent-implies-countable-choice]]

[F1] A smooth proper geometrically integral pointed curve over a
finitely generated field over perfect constants has a smooth projective
good model over a smooth affine integral base. If its genus is at least
two and its rational point set is infinite, horizontal projective-equation
descent gives a smooth proper geometrically integral genus-preserving
model with infinitely many points over $k$ in characteristic zero and
over $K^p$ in characteristic $p$.
[[lem-smooth-pointed-function-field-curve-spreads-to-good-model]]
[[lem-horizontal-curve-splitting-descends-projective-equations]]

[F2] For a finite-dimensional $k$-defined algebraic representation of
$\mathrm{GL}_q$ in characteristic $p$, a projective $K$-point whose
$\mathrm{GL}_q(K)$-orbit has a representative over every $K^{p^e}$ is
equivalent, over some finite extension of $K$, to a $k$-point.
[[lem-iterated-power-orbits-contain-a-constant-point]]

[F3] The canonical degree is $2g-2$, and a line bundle of degree at
least $2g+1$ embeds a smooth proper geometrically integral curve.
Proper coherent cohomology commutes with field extension, and smooth
differentials are locally free. The formation of relative differentials
commutes with field extension by the generators-and-relations definition.
[[cor-canonical-degree-two-g-minus-two]]
[[thm-degree-two-g-plus-one-line-bundle-very-ample]]
[[lem-proper-cohomology-field-extension]]
[[thm-differentials-smooth-locally-free]]

[F4] Polynomial rings over fields are Noetherian, and homogeneous ideals
define closed projective subschemes through their standard charts.
[[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]]
[[thm-closed-subschemes-projective-space-homogeneous-ideals]]

[F5] For a basis $e_1,\ldots,e_s$, the increasing wedges are a basis
of every exterior power; a linear map acts on them by its minors. In
particular exterior powers commute with field extension and respect
composition. For a nonzero decomposable $h$-vector $w$, the subspace
$\{v:v\wedge w=0\}$ is its $h$-dimensional span, as is seen after
extending its factors to a basis. Finite linear equations and their ranks
are preserved by field extension.
[[lem-exterior-algebra-basis-monomials]]
[[def-kth-exterior-power-of-a-linear-map]]
[[thm-gauss-jordan-elimination-produces-reduced-row-echelon-form]]

[F6] Smoothness descends from one field extension by the local
geometric-regularity test. Projective field schemes are proper; proper
cohomology commutes with field extension.
[[lem-ag-geometric-regularity-field-tests]]
[[thm-ag-standard-smooth-geometric-regularity]]
[[thm-projective-space-proper-over-base]] [[lem-proper-stable-composition]]
[[lem-closed-immersion-proper]]
Noether normalization and integral dimension preservation show that
affine-domain dimensions persist under field extension; AC supplies a
prime of a nonzero ring by a maximal ideal.
[[cor-noether-normalisation-module-finiteness]]
[[cor-dimension-preserved-by-integral-extensions]]
[[thm-proper-ideal-contained-in-maximal-ideal]]
[[lem-proper-cohomology-field-extension]]

## Axiom use

AC is inherited from the cited local geometry and cohomology results.
DC from [A1] chooses successive positive-characteristic descents; each
orbit encoding and recovery uses only finite-dimensional linear algebra.

## Proof

**Proof technique:** direct; iterate one-step descent, encode a bounded
space of homogeneous equations by an exterior line, and descend its orbit.

1.1 Choose a point of the infinite set $C(K)$. The good-model assertion in [F1] constructs the family to which its horizontal-equation descent applies. In characteristic zero its output is already the required smooth proper curve over algebraically closed $k$, with the specified $K$-isomorphism and preserved genus. Suppose henceforth the characteristic is $p>0$. The same assertion gives a curve $C_1/K^p$ with infinitely many $K^p$-points and $C\cong(C_1)_K$. Since $k$ is perfect, each $K^{p^e}$ contains $k$ and is finitely generated over $k$ of the same positive transcendence degree: Frobenius gives an isomorphism from $K$ onto it, and carries a finite list of generators to their $p^e$th powers. Reapply [F1] successively, using [A1]. We get smooth proper geometrically integral genus-$g$ curves $C_e/K^{p^e}$ with infinite point sets and compatible isomorphisms $(C_e)_K\cong C$ for every $e\ge0$. [A1, F1, given, construct]

2.1 Embed every $C_e$ by a basis of its complete tricanonical linear system. This is very ample because $3(2g-2)\ge2g+1$ for $g\ge2$, by [F3]. The canonical sheaf and its global sections commute with field extension: for differentials this follows by tensoring their generators $da$ and the additivity/product relations, and for global sections it is [F3]. Each isomorphism $(C_e)_K\cong C$ therefore identifies these complete linear systems over $K$. They have the same dimension $N+1$, and the embedded curves differ by an element of $\mathrm{GL}_{N+1}(K)$ on homogeneous coordinates. Let $I$ be the homogeneous ideal of the chosen embedding of $C$. By [F4] choose $M\ge1$ so that $I$ is generated by homogeneous equations of degrees at most $M$. The same bound works for the ideals $I_e$ of the embeddings of $C_e$: after extending to $K$, a linear change of variables identifies them with $I$ and preserves degree; the quotient of $I_e$ by the ideal generated in these degrees tensors to zero over $K$, and injectivity of scalar extension of vector spaces makes that quotient zero already. [F3, F4, algebra, step 1.1]

3.1 Let $W=\bigoplus_{d=0}^M k[T_0,\ldots,T_N]_d$. The subspaces $(I_e)_{\le M}$ have one common dimension $h$, by extension to $K$. A basis wedge defines a point $x_e$ of $\mathbf P(\bigwedge^h W)(K^{p^e})$, independent of the chosen basis up to nonzero scalar. Under the representation $\rho(g)f(T)=f(g^{-1}T)$ on $W$, and its $h$th exterior power, the coordinate changes of step 2.1 put all $x_e$ in the same $\mathrm{GL}_{N+1}(K)$-orbit after scalar extension. This is a $k$-defined algebraic representation: its entries are polynomials in the matrix entries and inverse determinant, and its exterior entries are minors by [F5]. The space $\bigwedge^h W$ is nonzero because the relation space has dimension $h\le\dim W$; $h=0$ also uses the usual zeroth exterior power. Apply [F2]. There are a finite $L/K$, a point $y\in\mathbf P(\bigwedge^h W)(k)$ and $g\in\mathrm{GL}_{N+1}(L)$ with $x=\rho(g)y$, where $x=x_0$. [F2, F5, construct, algebra, step 2.1]

4.1 Choose a nonzero $k$-vector $w$ representing $y$ and define $A_0=\{v\in W:v\wedge w=0\}$. These are finite linear equations over $k$. Over $L$, the vector $w$ is a nonzero scalar multiple of the image under $\rho(g)^{-1}$ of a decomposable basis wedge for $I_{\le M}$. Hence [F5] gives $(A_0)_L=\rho(g)^{-1}I_{\le M}$ and $\dim_k A_0=h$. The subspace $A_0$ is graded: the coordinate change preserves degrees, so $(A_0)_L$ is stable under every degree projection on $W_L$; the same containment before field extension follows by injectivity of scalar extension, or by the linear equations defining $A_0$. Let $J$ be the homogeneous ideal over $k$ generated by $A_0$. Its extension to $L$ is precisely $\rho(g)^{-1}I$, since the latter ideal is generated in degrees at most $M$ by step 2.1. Thus $C_0=\operatorname{Proj}(k[T]/J)$ is a closed projective $k$-scheme with $(C_0)_L$ projectively isomorphic to $C_L$. This construction uses no Grassmannian or Hilbert scheme. [F4, F5, construct, algebra, step 2.1, step 3.1]

5.1 The constant scheme $C_0$ is a smooth proper geometrically integral curve of genus $g$. Smoothness descends by [F6], and projectivity gives properness. Geometric integrality descends from $C_L$: for any field extension $N/k$, form a common overfield with $L$ from a prime of $N\otimes_k L$; after that faithfully flat field extension the scheme is integral, so reducedness and irreducibility descend. The dimension is one because affine Noether normalization and its finite integral extension preserve dimension under field extension, as in the standard chart argument of the good-model construction. Its genus is $g$ by [F3] and [F6] applied to degree-one cohomology. Together with the projective isomorphism over $L$ from step 4.1 this proves the positive-characteristic conclusion, retaining any inseparability of $L/K$. [F3, F4, F6, given, step 3.1, step 4.1] ∎
