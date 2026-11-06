---
id: def-gts-cohomological-differential-graded-lie-algebra
kind: definition
title: Cohomological differential graded Lie algebra
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: physics
deps:
- def-differential-graded-algebra
- def-field
dependency_roles:
  def-differential-graded-algebra: mathematical-premise
  def-field: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
  - title: 'Jacob Lurie, Derived Algebraic Geometry X: Formal Moduli Problems'
    url: https://www.math.ias.edu/~lurie/papers/DAG-X.pdf
    locator: Definitions 2.1.3 and 2.1.5 and Remark 2.1.4 (PDF pp. 32–33), with homological degrees reversed for the cohomological convention. No proof of Theorem 2.0.2 is invoked.
  - title: J. P. Pridham, Unifying derived deformation theories
    url: https://arxiv.org/pdf/0705.0344
    locator: Definition 3.4 (PDF pp. 29–30), cohomological dg Lie identities; Definition 3.5 for morphisms.
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Let $k$ be a characteristic-zero field (so $n1_k\ne0$ for every integer
$n>0$), and let $(\mathfrak g,d)$ be a cochain complex of
$k$-vector spaces, with $d:\mathfrak g^i\to\mathfrak g^{i+1}$. A
**cohomological differential graded Lie algebra** (dg Lie algebra) over $k$
is such a complex together with $k$-bilinear maps
$$[-,-]:\mathfrak g^p\otimes_k\mathfrak g^q\to\mathfrak g^{p+q}$$
for all integers $p,q$, such that for homogeneous $x\in\mathfrak g^p$,
$y\in\mathfrak g^q$, and $z\in\mathfrak g^r$,
$$[x,y]=-(-1)^{pq}[y,x],$$
$$(-1)^{pr}[x,[y,z]]+(-1)^{pq}[y,[z,x]]+(-1)^{qr}[z,[x,y]]=0,$$
and
$$d[x,y]=[dx,y]+(-1)^p[x,dy].$$
A morphism of dg Lie algebras is a degree-zero cochain map preserving the
bracket. It is a quasi-isomorphism when its underlying cochain map induces
isomorphisms on all cohomology groups. This cohomological convention places
first-order deformations, infinitesimal automorphisms, and primary obstructions
in $H^1(\mathfrak g)$, $H^0(\mathfrak g)$, and $H^2(\mathfrak g)$ only after
the particular deformation problem has been identified with $\mathfrak g$.

For the coefficient construction, a **nonpositive augmented commutative dg
$k$-algebra** is a cochain complex $R=\bigoplus_{i\le 0}R^i$ with a unital,
associative, degree-zero multiplication, differential $d_R:R^i\to R^{i+1}$,
and augmentation $\epsilon:R\to k$ which is a unital chain-algebra map,
such that for homogeneous $a,b\in R$,
$$ab=(-1)^{|a||b|}ba,\qquad d_R(ab)=d_R(a)b+(-1)^{|a|}a d_R(b).$$
Its augmentation ideal is $\mathfrak m_R:=\ker\epsilon$, a differential
graded ideal. This is a commutative subclass of the differential graded
algebras of [[def-differential-graded-algebra]]; that supplier alone imposes
no graded-commutativity condition. The tensor product
$\mathfrak g\otimes_k\mathfrak m_R$ has differential
$d(x\otimes a)=dx\otimes a+(-1)^{|x|}x\otimes d_Ra$ and bracket
$$[x\otimes a,y\otimes b]=(-1)^{|a||y|}[x,y]\otimes ab.$$
This is the coefficient dg Lie algebra used in the Maurer–Cartan presentation
of a derived deformation functor; the definition alone does not identify an
arbitrary geometric deformation functor with that presentation.

## Definition references

[[def-differential-graded-algebra]]

[[def-field]]
