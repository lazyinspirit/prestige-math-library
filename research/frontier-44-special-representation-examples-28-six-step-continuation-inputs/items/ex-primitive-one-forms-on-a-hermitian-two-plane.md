---
id: ex-primitive-one-forms-on-a-hermitian-two-plane
kind: example
title: "Primitive one-forms and the Weil star sign"
status: draft
origin: pipeline
dependency_level: 4
deps:
  - def-compact-kahler-manifold-and-hodge-polarization-conventions
  - lem-hermitian-exterior-lefschetz-decomposition-and-weil-star-identity
  - thm-hodge-star-exists-uniquely-and-has-the-orthonormal-basis-formula
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Christian Schnell, Complex Manifolds, MAT 545 (Stony Brook, Fall 2024), Class 17 'Proof of the Kähler identities' (October 29), 4 pp.; Proposition 17.3 (Weil's identity) with its n=1 two-plane verification"
      url: "https://www.math.stonybrook.edu/~cschnell/mat545/class17.pdf"
    - title: "Christian Schnell, Complex Manifolds, MAT 545 (Stony Brook, Fall 2024), Class 18 'The Hodge decomposition' (October 31), 6 pp.; Theorem 18.15 (Hodge–Riemann bilinear relations)"
      url: "https://www.math.stonybrook.edu/~cschnell/mat545/class18.pdf"
proof_strategy: direct
verification:
  precheck: pass
---

## Example

With the form-side conventions of
[[def-compact-kahler-manifold-and-hodge-polarization-conventions]]: let $V$ be
the oriented Euclidean two-plane with positively oriented orthonormal basis
$e,f$, Kähler form $\omega=e\wedge f$, and compatible complex structure $J$,
acting by pullback on forms, with
$$Je=-f,\qquad Jf=e$$
(equivalently $f=-Je$). Then the type-$(1,0)$ form $u=e+if$ is primitive and
satisfies $*u=-iu$. Its positive norm density is
$$u\wedge*\bar u=2\,e\wedge f .$$

## Facts & Assumptions

**Given:** The oriented Euclidean two-plane $V$ with its positively oriented
orthonormal basis $e,f$, the form $\omega=e\wedge f$, the compatible complex
structure $J$ with $Je=-f$, $Jf=e$, and $u=e+if$.

[F1] These are the form-side conventions of
[[def-compact-kahler-manifold-and-hodge-polarization-conventions]]: $J$ acts on
forms by pullback, the $(p,q)$ decomposition is by the eigenspaces of $J$,
$\omega$ is the fundamental form, and the orientation is the one for which
$\omega$ is positive; for $n=k=1$ every $1$-form is primitive because
$\Lambda$ lowers degree by two.

[F2] The complementary-basis formula for the Hodge star on a positively
oriented orthonormal basis, and the characterization of the star by
$\alpha\wedge*\beta=h(\alpha,\beta)\operatorname{vol}$, are those of
[[thm-hodge-star-exists-uniquely-and-has-the-orthonormal-basis-formula]].

[F3] For a primitive form of type $(p,q)$ and degree $k$, the pointwise Weil
star identity reads
$*u=\epsilon(k)i^{q-p}L^{n-k}u/(n-k)!$
([[lem-hermitian-exterior-lefschetz-decomposition-and-weil-star-identity]]),
with $L=\omega\wedge$ and $\epsilon(k)=(-1)^{k(k-1)/2}$.

## Verification

1.1 Since $J$ is complex-linear on the complexification and $Je=-f$, $Jf=e$, one has $Ju=Je+i\,Jf=-f+ie=i(e+if)=iu$, so $u$ lies in the $(1,0)$-eigenspace of $J$ and is of type $(1,0)$; also $\Lambda u=0$ because $\Lambda$ lowers degree by two and $u$ has degree one, so $u$ is primitive, equivalently $Lu=\omega\wedge u=0$ in degree three. [F1, given, algebra]

1.2 On the positively oriented orthonormal basis $e,f$ the complementary-basis formula gives $*e=f$ (sign $+1$) and $*f=-e$ (sign $-1$), hence $*u=*e+i\,*f=f-ie=-i(e+if)=-iu$. [F2, given, algebra]

2.1 This agrees with the primitive-star formula of [F3] at $n=k=1$, $(p,q)=(1,0)$, where it reads $*u=\epsilon(1)i^{0-1}L^{0}u/0!=-iu$; since $\bar u=e-if$ is primitive of type $(0,1)$, the same formula gives $*\bar u=i\bar u$, and $u\wedge\bar u=(e+if)\wedge(e-if)=-2i\,e\wedge f$, so $u\wedge*\bar u=i\,u\wedge\bar u=2\,e\wedge f$, which is positive for the orientation in which $e\wedge f>0$ [F3, step 1.2, given, algebra] ∎
