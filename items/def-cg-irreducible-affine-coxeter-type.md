---
id: def-cg-irreducible-affine-coxeter-type
kind: definition
title: "Irreducible affine Coxeter type: the corank-one form, the radical quotient, and the affine slice"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 2
deps: [def-hh-coxeter-matrix-word-group-and-length, def-cg-real-coxeter-form-and-reflection, def-cg-coxeter-diagram-components-and-finite-type, def-definiteness-inertia-and-signature-data-over-the-reals, def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form, def-quotient-vector-space-and-canonical-projection, def-real-and-complex-inner-product-space, def-algebraic-dual-and-linear-functional, def-affine-subspace-of-a-vector-space, def-linear-subspace, def-linear-basis, thm-bilinear-forms-correspond-to-linear-maps-into-the-dual, def-dimension]
justified_by: [lem-cg-positive-radical-and-affine-gram-exclusions, thm-cg-affine-gram-classification-and-euclidean-realization]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "M. W. Davis, The Geometry and Topology of Coxeter Groups (first-edition author manuscript, Princeton University Press, 2008; 600 PDF pages)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Section 6.8, Definition 6.8.11 (cosine matrix, including the m=infinity convention) and Theorem 6.8.12(ii) (Euclidean realization only when no Coxeter label is infinity), printed pp. 101-102; Section 6.9, Table 6.1 right column, printed p. 104; Appendix C, Definition C.1.1 and Theorem C.1.3, printed pp. 433-434. Theorem 6.8.12(ii) is not used for diagrams with an infinite label."
    - title: "M. W. Davis and G. Moussong, Notes on nonpositively curved polyhedra (Turan Workshop lecture notes, 1998/1999; 65 PDF pages)"
      url: "https://people.math.osu.edu/davis.12/notes.pdf"
      locator: "Section 6.1, the definition of a Coxeter diagram and the simplicial Coxeter criterion (Example 6.1.4), PDF pp. 33-34"
    - title: "R. Xiong, Lectures on Affine Weyl Groups (complete lecture notes, October 2024; 77 PDF pages)"
      url: "https://cubicbear.github.io/doc/affineNotes.pdf"
      locator: "Chapter 1, Sections 1.1-1.2 (Coxeter systems and the geometric representation) and 1.6 (finite Weyl group classification), PDF pp. 1-5; Chapter 2, Section 2.12 (affine Dynkin diagrams), PDF p. 14"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Definition

Let $S$ be finite, let $m$ be a Coxeter matrix on $S$, let $W$ be the presented
Coxeter group ([[def-hh-coxeter-matrix-word-group-and-length]]), let $\Gamma$ be
its Coxeter diagram ([[def-cg-coxeter-diagram-components-and-finite-type]]), and
let $V=\mathbb R^S$ carry the real Coxeter form $B$ ([[def-cg-real-coxeter-form-and-reflection]]):
$B(e_s,e_s)=1$, $B(e_s,e_t)=-\cos(\pi/m(s,t))$ for finite labels, and
$B(e_s,e_t)=-1$ when $m(s,t)=\infty$. Put
$\operatorname{rad}(B):=\{v\in V:B(v,w)=0\text{ for every }w\in V\}$
([[def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form]]).

**(1) Affine form type.** The system $(W,S)$, and with it $m$, $\Gamma$ and $B$,
is of **affine form type** when $\Gamma$ is connected and $B$ is positive
semidefinite (meaning $B(v,v)\ge0$ for every $v\in V$) of corank one, that is,
$\dim_{\mathbb R}\operatorname{rad}(B)=1$
([[def-definiteness-inertia-and-signature-data-over-the-reals]],
[[def-dimension]]). By
[[lem-cg-positive-radical-and-affine-gram-exclusions]] (1), this is equivalent
to requiring that $\Gamma$ be connected, $B$ positive semidefinite, and $B$
not positive definite. This is the only notion called *affine* on this page.
It is a condition on the Coxeter form, not a synonym for an infinite abstract
Coxeter group. Disconnected systems are outside this definition; the companion
examples page treats reducible forms separately.

**(2) Positive radical vector.** A **positive radical vector** for affine form
type is a vector $\delta=\sum_{s\in S}\delta_se_s\in\operatorname{rad}(B)$
with $\delta_s>0$ for every $s\in S$. For affine form type such a vector
exists and $\operatorname{rad}(B)=\mathbb R\delta$, by
[[lem-cg-positive-radical-and-affine-gram-exclusions]] (1); this clause names
the object and records the property supplied by that lemma.

**(3) Radical quotient.** Let $U:=V/\operatorname{rad}(B)$
([[def-quotient-vector-space-and-canonical-projection]]), and define
$b(\bar v,\bar w):=B(v,w)$. The form $b$ is well-defined, symmetric and
positive definite. Thus $U$ is a Euclidean vector space
([[def-real-and-complex-inner-product-space]]) of dimension $|S|-1$
([[def-linear-subspace]], [[def-linear-basis]], [[def-dimension]]).

**(4) Affine slice and walls.** For a positive radical vector $\delta$, put
$$E_\delta:=\{\varphi\in V^*:\varphi(\delta)=1\},$$
where $V^*$ is the algebraic dual ([[def-algebraic-dual-and-linear-functional]]).
This is an affine subspace ([[def-affine-subspace-of-a-vector-space]]) with
direction space
$$K_\delta:=\{\varphi\in V^*:\varphi(\delta)=0\}=\operatorname{Ann}(\operatorname{rad}(B)).$$
Precomposition with the quotient projection identifies $K_\delta$ with $U^*$.
Let $b^\flat:U\to U^*$ be $b^\flat(u):=b(u,\cdot)$ ([[thm-bilinear-forms-correspond-to-linear-maps-into-the-dual]]); it is an isomorphism, as
verified in the remarks, and the dual form is
$$b^*(\alpha,\beta):=b((b^\flat)^{-1}\alpha,(b^\flat)^{-1}\beta).$$
Transporting $b^*$ to the direction space $K_\delta$ makes $E_\delta$ a
Euclidean affine space of dimension $|S|-1$. For $s\in S$, its **wall** is
$H_s:=\{\varphi\in E_\delta:\varphi(e_s)=0\}$, its **open alcove** is
$A:=\{\varphi\in E_\delta:\varphi(e_s)>0\text{ for every }s\in S\}$,
and $\bar A$ denotes the closure of $A$ in $E_\delta$.

**(5) Abstentions and conventions.** Beyond the constructions and properties
above, this definition does not assert that the $H_s$ are affine hyperplanes,
that $A$ is nonempty, bounded or a simplex, that $W$ acts on $E_\delta$ as a
group generated by affine reflections, or that the translates $w\bar A$ cover
$E_\delta$. The phrase *affine form type* refers only to the Coxeter-matrix
condition in (1); extended affine Weyl groups and the directed affine Dynkin
diagrams used in Lie theory are separate conventions and are not defined here.
No choice principle is used in these finite-dimensional constructions.

## Remarks

The quotient-form assertions in (3) follow directly from positive
semidefiniteness. If $r\in\operatorname{rad}(B)$, then replacing either
representative by one differing by a radical vector does not change $B(v,w)$,
so $b$ is well-defined; symmetry is inherited from $B$. If
$b(\bar v,\bar v)=0$, then for every $w\in V$ and every $t\in\mathbb R$,
$$0\le B(v+tw,v+tw)=2tB(v,w)+t^2B(w,w).$$
Both signs of arbitrarily small $t$ force $B(v,w)=0$. This holds for every
$w$, so $v\in\operatorname{rad}(B)$ and $\bar v=0$.

The dimension claim in (3) is also explicit. Since the radical has dimension
one, choose a nonzero $r=\sum_s r_se_s$ in it and an index $s_0$ with
$r_{s_0}\ne0$. The classes $\bar e_s$ for $s\ne s_0$ span $U$, because
$\bar e_{s_0}=-\sum_{s\ne s_0}(r_s/r_{s_0})\bar e_s$. They are independent:
if $\sum_{s\ne s_0}a_se_s$ lies in $\mathbb Rr$, its $s_0$ coordinate forces
that multiple of $r$ to be zero, and then every $a_s=0$. They are therefore a
basis of size $|S|-1$.

For (4), $E_\delta$ is nonempty: choose $s_0$ with $\delta_{s_0}>0$ and use
the coordinate functional $\varphi_0(v):=v_{s_0}/\delta_{s_0}$. Its direction
is $K_\delta$, which equals the annihilator of $\operatorname{rad}(B)$ because
that radical is the line $\mathbb R\delta$. The map
$U^*\to K_\delta$, $\lambda\mapsto\lambda\circ\pi$, with
$\pi:V\to U$ the quotient projection, is injective since $\pi$ is onto; it
is surjective because each functional in $K_\delta$ vanishes on the radical
and therefore factors through $\pi$. A basis of $U$ gives dual coordinate functionals: each functional is determined
by its values on that basis, and arbitrary values extend linearly. Thus they form
a basis of $U^*$ and $\dim U^*=\dim U=|S|-1$. Finally, $b^\flat$ is
injective: if $b^\flat(u)=0$, then $b(u,u)=0$, hence $u=0$ by positive
definiteness. The images under $b^\flat$ of a basis of $U$ are therefore
$|S|-1$ independent vectors in the $|S|-1$ dimensional space $U^*$, so they
form a basis and $b^\flat$ is an isomorphism.
The displayed formula therefore defines a positive-definite
inner product on $U^*$ and hence on $K_\delta$. All selections above are
single finite-dimensional constructions; no arbitrary choice principle is
used.
