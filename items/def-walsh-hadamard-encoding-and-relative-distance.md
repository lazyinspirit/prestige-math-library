---
id: def-walsh-hadamard-encoding-and-relative-distance
kind: definition
title: "Walsh–Hadamard encoding and relative Hamming distance"
status: draft
origin: pipeline
deps:
  - def-linearity-test
  - def-hadamard-linearity-constraint-system
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Irit Dinur, The PCP Theorem by Gap Amplification"
      url: https://www.cs.umd.edu/users/gasarch/TOPICS/pcp/dinur.pdf
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: https://theory.cs.princeton.edu/complexity/book.pdf
verification:
  precheck: n/a
---

## Definition

For $n\ge0$ and $u\in\mathbb F_2^n$, the **Walsh–Hadamard encoding**
$\operatorname{WH}_n(u)$ is the truth table of the linear function
$r\mapsto u\cdot r$ on $\mathbb F_2^n$, with coordinates indexed in
lexicographic order by $r$. Thus the table has length $2^n$, including the
one-entry table $\operatorname{WH}_0(())=(0)$ when $n=0$. Its entry at a unit
vector is $\operatorname{WH}_n(u)(e_i)=u\cdot e_i=u_i$.

For two tables $a,b$ with the same nonempty finite coordinate set $I$, their **relative
Hamming distance** is
$$\operatorname{dist}(a,b)=\frac{|\{i\in I:a(i)\ne b(i)\}|}{|I|}.$$
For Walsh–Hadamard tables of dimension $n$, $I=\mathbb F_2^n$ and the
denominator is $2^n>0$. In particular the $n=0$ table has a well-defined
relative distance. The linear functions and their truth-table convention are
those of [[def-linearity-test]], and the coordinates are the cube variables
used by [[def-hadamard-linearity-constraint-system]].
