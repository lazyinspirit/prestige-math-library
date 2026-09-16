---
id: def-special-linear-lie-algebra-sl-two
kind: definition
title: The special linear Lie algebra sl_2
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-lie-algebra-over-a-field, def-lie-subalgebra-ideal-and-center, def-representation-of-a-lie-algebra]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19–24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 11, §11.4; Lecture 20"
landmark: false
---

## Definition

Write $\mathfrak{gl}_2(\mathbb C)=M_2(\mathbb C)$ for the Lie algebra of
complex $2\times2$ matrices under the commutator bracket
$[A,B]=AB-BA$ ([[def-representation-of-a-lie-algebra]],
[[def-lie-algebra-over-a-field]]). The **special linear Lie algebra**
$\mathfrak{sl}_2(\mathbb C)$ is the Lie subalgebra
([[def-lie-subalgebra-ideal-and-center]]) of traceless matrices

$$\mathfrak{sl}_2(\mathbb C)=\{A\in M_2(\mathbb C):\operatorname{tr}A=0\},$$

which is closed under the bracket because $\operatorname{tr}(AB-BA)=0$. Put

$$e=\begin{pmatrix}0&1\\0&0\end{pmatrix},\qquad f=\begin{pmatrix}0&0\\1&0\end{pmatrix},\qquad h=\begin{pmatrix}1&0\\0&-1\end{pmatrix}.$$

Direct matrix multiplication gives $he-eh=2e$, $hf-fh=-2f$ and
$ef-fe=h$, that is,

$$[h,e]=2e,\qquad [h,f]=-2f,\qquad [e,f]=h .$$

Since $\{e,f,h\}$ is a basis of the space of traceless matrices, these
relations determine the bracket completely, $\mathfrak{sl}_2(\mathbb C)$ is
three-dimensional, and $h$ spans a one-dimensional abelian subalgebra.
A Lie algebra over $\mathbb C$ is called a **copy of $\mathfrak{sl}_2$** if it
has a basis $(e,f,h)$ satisfying exactly these three bracket relations.
