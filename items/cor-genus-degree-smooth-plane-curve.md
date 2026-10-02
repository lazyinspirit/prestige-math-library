---
id: cor-genus-degree-smooth-plane-curve
kind: corollary
title: "The genus of a smooth plane curve in terms of its degree"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-canonical-degree-two-g-minus-two
  - cor-projective-plane-bezout-length-form
  - cor-smooth-variety-classical-scheme-conventions-agree
  - def-axiom-of-choice
  - def-degree-divisor-proper-curve
  - def-divisor-smooth-proper-curve
  - def-genus-euler-characteristic-curve
  - def-rational-section-line-bundle
  - def-twisting-sheaf-proj
  - lem-chain-dimension-open-cover
  - lem-closed-immersion-proper
  - lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct
  - lem-finite-variable-polynomial-rings-over-fields-are-ufds
  - lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite
  - lem-projective-hypersurface-affine-pieces
  - lem-proper-stable-composition
  - lem-smooth-fibres-smooth
  - thm-affine-domain-dimension-transcendence-degree
  - thm-cartier-weil-divisors-curves-agree
  - thm-dimension-formula-for-affine-domains
  - thm-dvr-element-normal-form
  - thm-dvr-ideal-and-module-length
  - thm-jacobian-criterion-affine-variety
  - thm-krull-principal-ideal-theorem
  - thm-line-bundle-rational-section-cartier-divisor
  - thm-local-ring-smooth-curve-dvr
  - thm-principal-divisor-degree-zero-proper-curve
  - thm-projective-space-proper-over-base
  - thm-twisting-sheaf-invertible-standard-graded
  - thm-adjunction-smooth-plane-curve
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Ch. 8"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025)"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
    - title: "MIT 18.725 Algebraic Geometry (Fall 2015) course notes, Lectures 24-25"
      url: "https://ocw.mit.edu/courses/18-725-algebraic-geometry-fall-2015/ec341c7a2524e5dba7c3e939f322613a_MIT18_725F15_notes.pdf"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice as inherited from curve divisor and DVR theory,
duality and adjunction, projective properness, dimension, Jacobian, and Bezout
suppliers. Let
$C=V_+(F)\subseteq\mathbf P^2_k$ be a smooth plane curve of degree $d\ge1$ over
a field $k$. Then the genus of $C$ is
$$g(C)=\frac{(d-1)(d-2)}{2};$$
in particular a smooth plane cubic has genus one and a smooth plane quartic has
genus three.

## Facts & Assumptions

**Given:** A field $k$, an integer $d\ge1$, and a nonzero homogeneous form
$F\in k[x_0,x_1,x_2]$ of degree $d$ such that
$C=V_+(F)\subseteq\mathbf P^2_k$ is smooth of pure dimension one.

[F1] Smoothness survives extension to an algebraic closure. Over an
algebraically closed field, a smooth finite-type scheme has regular local
rings. ([[lem-smooth-fibres-smooth]],
[[cor-smooth-variety-classical-scheme-conventions-agree]])

[F2] On a closed chart point of a plane hypersurface, use the actual one
equation ideal $(f)$ in the affine plane. If the local ring has dimension one,
the affine Jacobian criterion says it is regular exactly when the one-row
Jacobian has rank $2-1=1$; this applies even if $(f)$ is not radical.
([[thm-jacobian-criterion-affine-variety]])

[F3] In a projective hypersurface chart the scheme is the affine hypersurface
of its dehomogenized equation ([[lem-projective-hypersurface-affine-pieces]]).
At a closed point $p$ with local equation $f\ne0$, the local ring
$\bar k[u,v]_{\mathfrak m_p}/(f)$ has dimension one. The residue field of
$\mathfrak m_p$ is finite over $\bar k$, hence equals $\bar k$; the affine
dimension formula gives $\dim\bar k[u,v]_{\mathfrak m_p}=2$. In this
Noetherian local ring a minimal prime over the nonzero nonunit $f$ has height
one by the principal ideal theorem. A prime strictly between it and
$\mathfrak m_p$ would create a chain of length at least three, impossible in
a two-dimensional local ring. For each component in a chart, its minimal
prime over $f$ has height one, so the affine-domain dimension formula gives
component dimension one. Every component of the projective hypersurface meets
a standard chart, where its nonempty open part is a chart component; hence
each projective component has dimension one. The standard chart cover also
computes the scheme dimension ([[lem-chain-dimension-open-cover]]). A
polynomial ring over a field is a UFD, so its irreducible elements are prime.
([[lem-finite-variable-polynomial-rings-over-fields-are-ufds]])
([[lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct]],
[[thm-dimension-formula-for-affine-domains]],
[[thm-krull-principal-ideal-theorem]],
[[thm-affine-domain-dimension-transcendence-degree]],
[[lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite]])

[F4] If two positive-degree homogeneous forms in three variables have no
common nonconstant factor, the projective scheme they cut out is finite and
nonempty, and its local lengths weighted by residue degrees sum to the product
of their degrees. ([[cor-projective-plane-bezout-length-form]])

[F5] On a smooth proper curve, divisors are finite sums of closed points with
degree $\deg_k(D)=\sum_xn_x[\kappa(x):k]$. A nonzero rational section of an
invertible sheaf defines its divisor; the coefficient at a closed point is
its order in the local DVR; and the degree of the line bundle is the degree
of this associated divisor. In a DVR, a nonzero local equation is a unit
times a uniformizer power, and the length of its quotient is that exponent.
Principal divisors have degree zero.
([[def-degree-divisor-proper-curve]], [[def-divisor-smooth-proper-curve]],
[[def-rational-section-line-bundle]],
[[thm-cartier-weil-divisors-curves-agree]],
[[thm-line-bundle-rational-section-cartier-divisor]],
[[thm-local-ring-smooth-curve-dvr]],
[[thm-principal-divisor-degree-zero-proper-curve]],
[[thm-dvr-element-normal-form]], [[thm-dvr-ideal-and-module-length]])

[F6] On projective space the degree-one-generated standard graded coordinate
ring makes every twisting sheaf invertible and all twist multiplication maps
isomorphisms; after restriction to $C$,
$\mathcal O_C(m)=\mathcal O_C(1)^{\otimes m}$ for every integer $m$. The
canonical bundle of a smooth plane curve of degree $d$ is
$\omega_C=\Omega^1_{C/k}\cong\mathcal O_C(d-3)$, where
$\mathcal O_C(m)=\mathcal O_{\mathbf P^2_k}(m)|_C$; a canonical divisor is
the divisor of a nonzero rational section of this twist, not necessarily a
global section. ([[thm-twisting-sheaf-invertible-standard-graded]],
[[def-twisting-sheaf-proj]], [[thm-adjunction-smooth-plane-curve]])

[F7] For a smooth proper geometrically integral curve of genus $g$ and
canonical divisor $K_C$, $\deg_k(K_C)=2g-2$.
([[cor-canonical-degree-two-g-minus-two]])

[F8] The genus is $g(C)=h^1(C,\mathcal O_C)$.
([[def-genus-euler-characteristic-curve]])

[F9] The Axiom of Choice is inherited through the cohomology, dimension,
Jacobian, and Bezout suppliers above. ([[def-axiom-of-choice]])

[F10] Projective space over a field is proper; closed immersions and
compositions of proper morphisms are proper. Hence a closed subscheme of
$\mathbf P^2_k$ is proper over $k$.
([[thm-projective-space-proper-over-base]],
[[lem-closed-immersion-proper]], [[lem-proper-stable-composition]])

## Proof

**Proof technique:** derive geometric integrality from smoothness using the
actual local hypersurface equations, compute the hyperplane degree by weighted
Bezout, and then apply adjunction and $\deg\omega_C=2g-2$.

1.1 (Local scheme dimension.) Work over $\bar k$. Smoothness of $C_{\bar k}$ follows from [F1]. In a standard projective chart containing a closed point $p$, the actual equation is the dehomogenization $f$ of $F$; because $F$ is nonzero, $f$ is nonzero. If $\mathfrak m_p$ is the maximal ideal of $p$ in $\bar k[u,v]$, then $f\in\mathfrak m_p$ and the local ring $\bar k[u,v]_{\mathfrak m_p}/(f)$ has dimension one by [F3]. The same calculation on all three charts shows every projective component has dimension one. This keeps the dimension argument at the level of affine scheme local rings. [F1, F3, given]

2.1 (Square-freeness.) Suppose over $\bar k$ that an irreducible homogeneous factor $G$ occurs in $F$ with multiplicity at least two. Choose a linear form $\ell$ not divisible by $G$. By [F4], $V_+(G,\ell)$ is nonempty, so choose a closed point $p$ in that scheme. In a projective chart through $p$, the local equation $f$ of $C_{\bar k}$ is divisible by the square of the local equation $g$ of $G$, hence $f\in\mathfrak m_p^2$. Its two partial derivatives vanish in the residue field at $p$. The local ring has dimension one by [F3], so [F2] says this actual one-equation presentation is not regular. But it is a local ring of the smooth scheme $C_{\bar k}$, which is regular by [F1], a contradiction. Thus $F$ is square-free over $\bar k$. [F1, F2, F3, F4, step 1.1]

3.1 (Geometric irreducibility.) If this square-free $F$ were reducible over $\bar k$, write it as $F=GH$ with $G,H$ coprime nonconstant homogeneous forms. [F4] gives a closed point $p\in V_+(G,H)$. In a chart through $p$, the local equation is $f=gh$ with $g,h\in\mathfrak m_p$, so again $f\in\mathfrak m_p^2$ and its Jacobian row has rank zero. The dimension-one local ring is not regular by [F2], contradicting [F1]. Thus $F$ is irreducible over $\bar k$. Since a polynomial ring over a field is a UFD, this irreducible form is prime; $(F)$ is prime over $\bar k$ and $C_{\bar k}$ is integral. Therefore $C$ is geometrically integral. It is proper because it is a closed subscheme of $\mathbf P^2_k$: by [F10], the closed immersion and projective-space structure morphism are proper, as is their composite. [F1, F2, F3, F4, F10, step 1.1, step 2.1]

4.1 (The hyperplane degree.) Over $k$, choose a linear form $\ell$ coprime to $F$: if $d=1$ choose a nonproportional form, and if $d>1$ any nonzero linear form is coprime to the geometrically irreducible $F$. Its restriction $s=\ell|_C$ is a nonzero section of $\mathcal O_C(1)$, whose zero scheme is the scheme-theoretic intersection $C\cap V_+(\ell)$. At each closed point $x$ of this finite intersection, [F5] identifies the local intersection length with the order of $s$ in the DVR $\mathcal O_{C,x}$: the DVR normal form and quotient-length theorem give $\operatorname{length}(\mathcal O_{C,x}/(s))=n$ when $s=u t^n$ with $t$ a uniformizer. Thus the weighted sum of the local lengths is the degree of the divisor of $s$, namely $\deg(\mathcal O_C(1))$. By [F4] the same weighted sum is $d\cdot1=d$. Therefore $\deg(\mathcal O_C(1))=d$. [F4, F5, step 3.1]

5.1 (All twists, with the negative case rational.) By [F6], the twisting identities give $\mathcal O_C(m)=\mathcal O_C(1)^{\otimes m}$ for every integer $m$, using dual powers when $m<0$. Let $D$ be the divisor of the rational section $s=\ell|_C$ from step 4.1. The rational section $s^{\otimes m}$ of $\mathcal O_C(m)$ has divisor $mD$ for every integer $m$. If $m>0$ it is also a global section; for $m<0$ it is only a rational section and is not asserted to be global. By [F5] and step 4.1, $\deg(\mathcal O_C(m))=\deg_k(mD)=md$ for every integer $m$. [F5, step 4.1]

6.1 (Adjunction and the canonical degree.) By [F6], $\omega_C\cong\mathcal O_C(d-3)$, and a canonical divisor is the divisor of a nonzero rational section of this line bundle. Applying [F7] and step 5.1 gives $2g-2=\deg_k(K_C)=\deg(\mathcal O_C(d-3))=d(d-3)$. [F6, F7, step 5.1]

7.1 Solving the identity of step 6.1 yields $g=(d^2-3d+2)/2=(d-1)(d-2)/2$. Substitution gives genus one for $d=3$ and genus three for $d=4$. The Axiom of Choice [F9] is inherited from the duality, dimension, Jacobian, and Bezout suppliers used above. The proof preserves the original arbitrary-field and all-characteristic scope; the negative twist in adjunction is handled by a rational section. [F1, F4, F6, F7, F8, F9, step 3.1, step 6.1] ∎
