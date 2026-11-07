---
id: lem-quaternion-symbol-bilinearity-over-a-field
kind: lemma
title: "Quaternion symbols are bilinear in their square-class parameters"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
deps:
  - def-quaternion-symbol-over-a-field
  - lem-quaternion-algebra-splits-iff-quadratic-norm
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Alexei Skorobogatov, Arithmetic Geometry: Rational Points, §§1.1 and 1.3"
      url: "https://www.ma.imperial.ac.uk/~anskor/arith_geom_files/TCCnotes.pdf"
      locator: "§1.3, tensor-product properties 2–3, including the explicit pair of quaternion subalgebras in their proof."
    - title: "Bjorn Poonen, Rational Points on Varieties, §1.5.7.4"
      url: "https://math.mit.edu/~poonen/papers/Qpoints.pdf"
      locator: "Quaternion cyclic algebras, norm splitting, and their Brauer-class conventions."
verification: {}
---

## Statement

Let $F$ be a field of characteristic different from $2$, and let
$a,b,c\in F^\times$. In the classical Brauer group of $F$, write
$(a,b)=[Q_F(a,b)]$ for the similarity class of the quaternion algebra. Then
$$
(a,b)+(a,c)=(a,bc),\qquad (a,b)+(c,b)=(ac,b).
$$

## Statement references

[[def-quaternion-symbol-over-a-field|Quaternion algebra classes]]

[[lem-quaternion-algebra-splits-iff-quadratic-norm|Quadratic norm splitting criterion]]

[Skorobogatov, §1.3](https://www.ma.imperial.ac.uk/~anskor/arith_geom_files/TCCnotes.pdf)

[Poonen, §1.5.7.4](https://math.mit.edu/~poonen/papers/Qpoints.pdf)

## Facts & Assumptions

**Given:** A field $F$ of characteristic different from $2$ and nonzero
$a,b,c\in F$.

[F1] The quaternion algebras have generators and bases
$1,i,j,ij$, with the defining square and anticommutation relations.
[[def-quaternion-symbol-over-a-field]]

[F2] Similarity classes use tensor product for addition, and a matrix algebra
represents the zero class. [[def-quaternion-symbol-over-a-field]]

[F3] A quaternion algebra $Q_F(d,e)$ is split when $e$ is a norm from
$F(\sqrt d)$, including the split quadratic algebra when $d$ is a square.
[[lem-quaternion-algebra-splits-iff-quadratic-norm]]

## Proof

**Proof technique:** factor the tensor product of two quaternion algebras as
the tensor product of the required quaternion algebra and a split quaternion.

**Given:** The data above.

1.1 Write $Q_1=Q_F(a,b)$ with generators $i,j$, write $Q_2=Q_F(a,c)$ with
generators $i',k$, and put $A=Q_1\otimes_FQ_2$. In $A$, set
$$I=i\otimes1,\qquad J=j\otimes k,\qquad U=1\otimes k,
\qquad V=(i\otimes i')U=i\otimes i'k.$$
Then $I^2=a$, $J^2=bc$, and $IJ=-JI$. The four elements
$1,I,J,IJ$ are distinct members of the tensor-product basis supplied by
[F1], so they span a subalgebra $A_1\cong Q_F(a,bc)$.
[F1, given, algebra]

1.2 The elements $U,V$ satisfy $U^2=c$, $V^2=-a^2c$, and $UV=-VU$:
indeed, $X=i\otimes i'$ has square $a^2$ and anticommutes with $U$, while
$V=XU$. The elements $1,U,V,UV$ are linearly independent members of the
same tensor-product basis. Hence they span a second subalgebra
$A_2\cong Q_F(c,-a^2c)$. Since
$$N_{F(\sqrt c)/F}(a\sqrt c)=-a^2c,$$
[F3] shows that $A_2\cong M_2(F)$.
[F1, F3, step 1.1, algebra]

2.1 The subalgebras $A_1$ and $A_2$ commute. For the generators, $I$ commutes
with $U$ and $V$, and $J$ commutes with $U$ because
$JU=c(j\otimes1)=UJ$. Also
$$JV=(ji)\otimes(ki'k)=c(ij\otimes i')=VJ,$$
using $ji=-ij$ and $ki'k=-ci'$. The multiplication map
$A_1\otimes_FA_2\to A$ is therefore an algebra homomorphism. Its image
contains $I$, $U$, $j\otimes1=c^{-1}JU$, and
$1\otimes i'=I^{-1}VU^{-1}$; hence it contains $i\otimes1$, $j\otimes1$,
$1\otimes i'$, and $1\otimes k$, which generate
$A$. Thus the map is surjective. Both sides have dimension $16$ over $F$,
so it is an isomorphism. [step 1.1, step 1.2, algebra]

3.1 Since $A_2$ is a matrix algebra by step 1.2, [F2] identifies its class
with zero. Step 2.1 therefore gives
$$[Q_F(a,b)]+[Q_F(a,c)]=[Q_F(a,bc)],$$
which is the first identity in the Statement. [F2, step 1.2, step 2.1]

3.2 Exchanging the two generators identifies $Q_F(d,e)$ with $Q_F(e,d)$.
Apply the first identity with the first argument fixed at $b$ to obtain
$$[Q_F(a,b)]+[Q_F(c,b)]=[Q_F(b,a)]+[Q_F(b,c)]
=[Q_F(b,ac)]=[Q_F(ac,b)].$$
This is the second identity. [F1, step 3.1, algebra] ∎
