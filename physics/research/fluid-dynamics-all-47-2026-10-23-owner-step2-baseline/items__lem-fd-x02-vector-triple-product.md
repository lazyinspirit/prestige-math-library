---
id: lem-fd-x02-vector-triple-product
kind: lemma
title: "The vector triple-product identity in $\\mathbb R^3$"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
page: fd-x01
deps:
  - def-cross-product-in-r3
  - def-euclidean-inner-product
dependency_roles:
  def-cross-product-in-r3: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
dependency_level: 0
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "David R. Wilkins, MA232A: Euclidean and Non-Euclidean Geometry, Notes on Vector Algebra and Spherical Trigometry, §5.6"
      url: "https://www.maths.tcd.ie/~dwilkins/Courses/MA232A/MA232A_Mich2015/GaussResources/Gauss_VectorAlgebra.pdf"
    - title: "M. E. Taylor, Introduction to Analysis in Several Variables, §1.4 Exercises on the cross product"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf"
verification:
  precheck: pending
---

## Statement

For all $a,b,c\in\mathbb R^3$, the Euclidean cross product satisfies

$$a\times(b\times c)=b\langle a,c\rangle-c\langle a,b\rangle.$$

## Statement references

The vector triple-product identity and its componentwise proof: [Wilkins, *Notes on Vector Algebra and Spherical Trigometry*, §5.6, Proposition 5.6, PDF pp. 10–11](https://www.maths.tcd.ie/~dwilkins/Courses/MA232A/MA232A_Mich2015/GaussResources/Gauss_VectorAlgebra.pdf).

Cross-product determinant convention and related cross-product exercises: [Taylor, *Introduction to Analysis in Several Variables*, §1.4, “Exercises on the cross product,” printed pp. 38–39 (PDF pp. 49–50)](https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf).

The cross-product definition: [[def-cross-product-in-r3]].

The Euclidean inner-product convention: [[def-euclidean-inner-product]].

## Facts & Assumptions

**Given:** Vectors $a,b,c\in\mathbb R^3$ with the standard Euclidean coordinates.

[F1] For $u=(u_1,u_2,u_3)$ and $v=(v_1,v_2,v_3)$, $u\times v=(u_2v_3-u_3v_2,u_3v_1-u_1v_3,u_1v_2-u_2v_1)$ ([[def-cross-product-in-r3]]).

[F2] $\langle u,v\rangle=u_1v_1+u_2v_2+u_3v_3$ ([[def-euclidean-inner-product]]).

## Proof

1.1 Applying [F1] first to $b\times c$ and then to $a\times(b\times c)$ gives the three coordinates
$\bigl(a_2(b_1c_2-b_2c_1)-a_3(b_3c_1-b_1c_3),\ a_3(b_2c_3-b_3c_2)-a_1(b_1c_2-b_2c_1),\ a_1(b_3c_1-b_1c_3)-a_2(b_2c_3-b_3c_2)\bigr).$
[given, F1, algebra]

2.1 Expanding the first coordinate in step 1.1 gives $a_2b_1c_2-a_2b_2c_1-a_3b_3c_1+a_3b_1c_3=b_1(a_2c_2+a_3c_3)-c_1(a_2b_2+a_3b_3)$. Adding the zero term $b_1a_1c_1-c_1a_1b_1=0$ gives $b_1(a_1c_1+a_2c_2+a_3c_3)-c_1(a_1b_1+a_2b_2+a_3b_3)$. Expanding the second coordinate gives $a_3b_2c_3-a_3b_3c_2-a_1b_1c_2+a_1b_2c_1=b_2(a_1c_1+a_3c_3)-c_2(a_1b_1+a_3b_3)$; adding $b_2a_2c_2-c_2a_2b_2=0$ gives $b_2(a_1c_1+a_2c_2+a_3c_3)-c_2(a_1b_1+a_2b_2+a_3b_3)$. Expanding the third coordinate gives $a_1b_3c_1-a_1b_1c_3-a_2b_2c_3+a_2b_3c_2=b_3(a_1c_1+a_2c_2)-c_3(a_1b_1+a_2b_2)$; adding $b_3a_3c_3-c_3a_3b_3=0$ gives $b_3(a_1c_1+a_2c_2+a_3c_3)-c_3(a_1b_1+a_2b_2+a_3b_3)$. By [F2] the three results are the coordinates of $b\langle a,c\rangle-c\langle a,b\rangle$. [given, F2, step 1.1, algebra] ∎
