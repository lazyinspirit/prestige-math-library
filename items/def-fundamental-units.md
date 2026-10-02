---
id: def-fundamental-units
kind: definition
title: System of fundamental units
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-axiom-of-choice
  - def-free-abelian-group
  - def-logarithmic-unit-embedding
  - def-roots-of-unity-in-a-field
  - lem-kernel-of-the-unit-logarithm-is-the-roots-of-unity
  - lem-ring-units-form-a-group
  - thm-dirichlet-unit-theorem
  - thm-logarithmic-unit-image-is-a-full-lattice
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory v3.08"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
      locator: "Ch. 5 p.85 (fundamental system of units)."
    - title: "Andrew V. Sutherland, MIT 18.785 Lecture 15: Dirichlet's Unit Theorem (Fall 2021)"
      url: "https://math.mit.edu/classes/18.785/2021fa/LectureNotes15.pdf"
      locator: "§15.2-15.3 pp.8-9 (fundamental system of units)."
    - title: "William A. Stein, Algebraic Number Theory: A Computational Approach"
      url: "https://wstein.org/books/ant/ant.pdf"
      locator: "§8.1 p.89 (free part of U_K)."
verification:
  precheck: pass
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $K$ be a number field
of signature $(r_1,r_2)$ and unit rank $r=r_1+r_2-1$
([[thm-dirichlet-unit-theorem]]). By the full-lattice theorem the image
$\lambda(\mathcal O_K^\times)$ is a free abelian subgroup of the hyperplane $H$
of rank $r$ ([[thm-logarithmic-unit-image-is-a-full-lattice]],
[[def-free-abelian-group]]). A **system of fundamental units** of $K$ is a
tuple $(\varepsilon_1,\dots,\varepsilon_r)$ of units of $\mathcal O_K$ such
that $\lambda(\varepsilon_1),\dots,\lambda(\varepsilon_r)$ is a
$\mathbb Z$-basis of $\lambda(\mathcal O_K^\times)$, that is

$$\lambda(\mathcal O_K^\times)=\mathbb Z\lambda(\varepsilon_1)\oplus\cdots\oplus\mathbb Z\lambda(\varepsilon_r).$$

**Existence.** The unit theorem gives
$\mathcal O_K^\times\cong\mu(K)\times\mathbb Z^r$
([[thm-dirichlet-unit-theorem]]), so $\lambda(\mathcal O_K^\times)$ is a free
abelian group of rank $r$ and has a $\mathbb Z$-basis; since $\lambda$ maps
$\mathcal O_K^\times$ onto its image, each basis vector is $\lambda(\varepsilon_i)$
for some unit $\varepsilon_i$. This exhibits a system of fundamental units,
and the construction makes only the finitely many choices of preimages of a
finite basis, so the Axiom of Choice is used here only through the unit
theorem. In rank $r=0$ the empty tuple is the unique system of fundamental
units.

**The equivalent product description.** A tuple
$(\varepsilon_1,\dots,\varepsilon_r)$ is a system of fundamental units if and
only if every unit $u\in\mathcal O_K^\times$ admits a unique expression

$$u=\zeta\,\varepsilon_1^{m_1}\cdots\varepsilon_r^{m_r},\qquad \zeta\in\mu(K),\quad m_1,\dots,m_r\in\mathbb Z .$$

Indeed, if the $\lambda(\varepsilon_i)$ form a $\mathbb Z$-basis and
$u\in\mathcal O_K^\times$, then $\lambda(u)=\sum_im_i\lambda(\varepsilon_i)=\lambda(\varepsilon_1^{m_1}\cdots\varepsilon_r^{m_r})$
for unique integers $m_i$, so $u(\varepsilon_1^{m_1}\cdots\varepsilon_r^{m_r})^{-1}$
lies in the kernel of $\lambda$ on $\mathcal O_K^\times$, which is $\mu(K)$
([[lem-kernel-of-the-unit-logarithm-is-the-roots-of-unity]]); uniqueness of
the exponents follows from the $\mathbb Z$-independence of the basis and then
uniqueness of $\zeta$ from cancellation in the group
$\mathcal O_K^\times$ ([[lem-ring-units-form-a-group]]). Conversely, if every
unit has such a unique expression, then $\sum_im_i\lambda(\varepsilon_i)=0$
forces the unit $\varepsilon_1^{m_1}\cdots\varepsilon_r^{m_r}$ to lie in
$\mu(K)$, hence by uniqueness all $m_i=0$, so the
$\lambda(\varepsilon_i)$ are $\mathbb Z$-independent; and applying $\lambda$
to the expression of an arbitrary unit shows that they generate
$\lambda(\mathcal O_K^\times)$. Thus the two descriptions of the definition
agree.

**A system is auxiliary data, not canonical field data.** Different systems of
fundamental units are related by a unimodular integer change of coordinates:
the tuples $(\lambda(\varepsilon_i))$ and $(\lambda(\varepsilon_i'))$ are two
$\mathbb Z$-bases of the same free abelian group, so
$\lambda(\varepsilon_i')=\sum_jc_{ij}\lambda(\varepsilon_j)$ with
$(c_{ij})\in\operatorname{GL}_r(\mathbb Z)$. No system is singled out by the
field, and the definition introduces no sign or ordering convention: the
regulator constructed from these units is independent of the system, a fact
proved separately.
