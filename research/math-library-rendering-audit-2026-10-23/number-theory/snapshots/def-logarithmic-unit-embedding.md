---
id: def-logarithmic-unit-embedding
kind: definition
title: Logarithmic embedding of a number field
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-archimedean-embeddings-and-number-field-signature
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - def-natural-logarithm
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Andrew V. Sutherland, MIT 18.785 Lecture 15: Dirichlet's Unit Theorem (Fall 2021)"
      url: "https://math.mit.edu/classes/18.785/2021fa/LectureNotes15.pdf"
      locator: "§15.2 pp.5-6: the map Log with the squared modulus |x|_C^2 used at each complex place."
    - title: "J. S. Milne, Algebraic Number Theory v3.08"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
      locator: "Ch. 5 p.87: the map L with doubled complex coordinates; p.94: the regulator built from the same doubled coordinates."
    - title: "William A. Stein, Algebraic Number Theory: A Computational Approach"
      url: "https://wstein.org/books/ant/ant.pdf"
      locator: "§8.1 (8.1.1) p.89: the undoubled map phi, whose halved-coordinate form is the variant this definition does not adopt."
    - title: "Jurgen Neukirch, Algebraic Number Theory (Springer, 1999)"
      url: "https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf"
      locator: "§III.1 p.358: the log map used for S-units."
verification:
  audited: 2026-10-02
  precheck: pass
---

## Definition

Let $K$ be a number field of signature $(r_1,r_2)$, with real embeddings
$\sigma_1,\dots,\sigma_{r_1}:K\to\mathbb R$ and one embedding
$\tau_1,\dots,\tau_{r_2}:K\to\mathbb C$ chosen from each complex conjugate pair
([[def-archimedean-embeddings-and-number-field-signature]]). The **logarithmic
embedding** of $K$ is the map

$$\lambda:K^{\times}\longrightarrow\mathbb R^{r_1+r_2},\qquad\lambda(x)=\bigl(\log|\sigma_1x|,\dots,\log|\sigma_{r_1}x|,\,2\log|\tau_1x|,\dots,2\log|\tau_{r_2}x|\bigr),$$

where $K^{\times}=K\setminus\{0\}$, $\log$ is the natural logarithm
([[def-natural-logarithm]]), and $|\cdot|$ is the complex modulus
([[def-complex-conjugate-real-imaginary-part-and-modulus]]).

**The factor $2$ on the complex coordinates is part of the convention and is not
optional.** A real coordinate carries no factor, while a complex coordinate
enters with weight $2$, matching the squared modulus $|\tau x|^{2}$ that is the
normalized absolute value at a complex place. Taking the doubled coordinate is
what makes the product-formula hyperplane the literal coordinate-sum-zero
hyperplane and what fixes the determinant normalization of the regulator;
for a fixed deleted row, doubling the retained complex rows multiplies the
absolute determinant by $2$ for each such row. Euclidean covolumes in the
corresponding hyperplanes need not change by a power of $2$.

**The map is well defined.** If $x\ne0$ then $\sigma(x)\ne0$ and $\tau(x)\ne0$
for every embedding, since a field homomorphism has trivial kernel, so every
modulus is a strictly positive real number and every logarithm is defined.
Replacing a chosen $\tau_j$ by its complex conjugate does not change
$\lambda$: conjugation fixes the real numbers and replaces $z=a+bi$ by
$\overline z=a-bi$, so $|\overline{\tau_jx}|=|\tau_jx|$ for every
$x\in K^{\times}$. The ordering of the coordinates is auxiliary: reordering them
post-composes $\lambda$ with a linear isometry of $\mathbb R^{r_1+r_2}$, and
every statement about $\lambda$ below is invariant under that reordering.

The coordinates are written in the display with the real embeddings first and
the chosen complex embeddings after them; that ordering is the one used for the
rest of this page.
