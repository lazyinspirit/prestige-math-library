---
id: def-modular-group-action-on-the-upper-half-plane
kind: definition
title: "The modular group and its action on the upper half-plane"
status: published
origin: pipeline
deps:
  - def-integers
  - def-matrix-product-and-identity-matrix
  - def-invertible-matrix-and-general-linear-group
  - cor-general-linear-group-is-a-group
  - thm-determinant-multiplicative
  - cor-determinant-of-an-inverse
  - thm-real-square-matrix-invertible-iff-determinant-nonzero
  - def-group-action
  - def-group-homomorphism
  - thm-group-actions-correspond-to-homomorphisms
  - def-normal-subgroup
  - lem-center-is-normal
  - def-quotient-group
  - thm-quotient-group-laws
  - prop-canonical-quotient-map
  - thm-first-isomorphism-theorem-groups
  - def-mobius-transformation
  - thm-mobius-group-and-projective-linear-identification
  - thm-mobius-transformations-biholomorphic-sphere
  - thm-three-point-transitivity-mobius-transformations
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - lem-complex-conjugation-and-modulus-laws
  - def-complex-differentiability-holomorphic-and-entire
  - def-unit-disc-upper-half-plane-and-blaschke-factor
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "Whole authored item, including statement or definition, every proof or verification step, and used direct supplier interfaces; completed prior Step5 reader/adjudicator evidence reconciled to the current mathematics. Transitive supplier proofs were not audited in full."
    delegated_by: "owner via tools/autopilot (frontier-38-owner-30)"
    evidence:
      - "research/frontier-38-owner-30-reader-21.md"
      - "research/frontier-38-owner-30-alpha-batch-21-5a.md"
      - "research/frontier-38-owner-30-step5-hash-21-post.json"
    reviewed_raw_sha256: "836357dc0635f790faafaf5df0a419c4eb28183b6217492e4fa4ab9201318d77"
    content_sha256: "b0f454905b49f0a04a55347400c8ea80b49bf3758eb2fe3dba664a5ac227a182"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "J. S. Milne, Modular Functions and Modular Forms (v1.31, 2017)"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "Ch. 2 §1 'The upper-half plane as a quotient of SL2(R)', printed pp. 25-28: the Möbius action, its kernel and the modular group."
    - title: "D. Zagier, Elliptic Modular Forms and Their Applications, in The 1-2-3 of Modular Forms (Universitext, Springer, 2008)"
      url: "https://people.mpim-bonn.mpg.de/zagier/files/doi/10.1007/978-3-540-74119-0_1/fulltext.pdf"
      locator: "Sections 1.1–1.2, printed pp. 3 and 5–6: the action, the quotient by scalars, and S,T."
    - title: "C. T. McMullen, Advanced Complex Analysis, Math 213a course notes (Harvard, 2010)"
      url: "https://people.math.harvard.edu/~ctm/home/text/class/harvard/213a/10/html/home/course/course.pdf"
      locator: "Ch. 5, 'SL2(Z) and its action', printed pp. 92-94: the action of SL2(Z) on the upper half-plane and the generators."
---

## Definition

Let

$$SL_2(\mathbb Z)=\Bigl\{\gamma=\begin{pmatrix}a&b\\ c&d\end{pmatrix}:a,b,c,d\in\mathbb Z,\ ad-bc=1\Bigr\},$$

a subgroup of $GL_2(\mathbb R)\subseteq GL_2(\mathbb C)$
([[def-invertible-matrix-and-general-linear-group]],
[[cor-general-linear-group-is-a-group]], [[def-integers]],
[[thm-determinant-multiplicative]]). Its centre is $\{\pm I\}$: the inclusion
$\{\pm I\}\subseteq Z(SL_2(\mathbb Z))$ is immediate, $\{\pm I\}$ is normal
([[lem-center-is-normal]], [[def-normal-subgroup]]), and conversely every
$2\times2$ matrix commuting with all of $SL_2(\mathbb Z)$ is scalar — in
particular a matrix $A=\bigl(\begin{smallmatrix}a&b\\c&d\end{smallmatrix}\bigr)$
commuting with both $U=\bigl(\begin{smallmatrix}1&1\\0&1\end{smallmatrix}\bigr)$
and $L=\bigl(\begin{smallmatrix}1&0\\1&1\end{smallmatrix}\bigr)$ satisfies
$c=0$ and $a=d$ from $AU=UA$, and then $b=0$ from $AL=LA$, by comparing
entries of the two products, so $A=aI$ is scalar; a scalar matrix $\lambda I$ of
determinant $1$ has $\lambda^2=1$, so $\lambda=\pm1$
([[def-matrix-product-and-identity-matrix]]). The **modular group** is the
quotient

$$PSL_2(\mathbb Z):=SL_2(\mathbb Z)/\{\pm I\},$$

a group by [[thm-quotient-group-laws]], [[def-quotient-group]],
[[prop-canonical-quotient-map]].

For $\gamma\in SL_2(\mathbb R)$ and $\tau\in\mathfrak H$ set
$\gamma\cdot\tau:=\frac{a\tau+b}{c\tau+d}$, the Möbius transformation attached
to $\gamma$ ([[def-mobius-transformation]],
[[def-unit-disc-upper-half-plane-and-blaschke-factor]]). The denominator does
not vanish: $c\tau+d=0$ would give $\tau=-d/c\in\mathbb R$ when $c\neq0$, and
when $c=0$ invertibility gives $d\neq0$. Writing
$c\tau+d=(c\operatorname{Re}\tau+d)+ic\operatorname{Im}\tau$ and using
$\overline{c\tau+d}=c\bar\tau+d$, a direct computation gives

$$\operatorname{Im}(\gamma\cdot\tau)=\frac{\operatorname{Im}\tau}{|c\tau+d|^2}>0,$$

so $\mathfrak H$ is stable under each $\gamma$, and $\gamma\mapsto\gamma\cdot$
is the restriction of the matrix-to-Möbius map, a group homomorphism
([[thm-mobius-group-and-projective-linear-identification]],
[[thm-group-actions-correspond-to-homomorphisms]]); hence $\gamma\mapsto
(\tau\mapsto\gamma\cdot\tau)$ is a left action of $SL_2(\mathbb R)$ on
$\mathfrak H$ by biholomorphisms
([[def-group-action]], [[thm-mobius-transformations-biholomorphic-sphere]],
[[def-complex-differentiability-holomorphic-and-entire]],
[[lem-complex-conjugation-and-modulus-laws]],
[[def-complex-conjugate-real-imaginary-part-and-modulus]])).

The kernel of the restricted action of $SL_2(\mathbb Z)$ is exactly
$\{\pm I\}$: $\pm I$ act trivially, while a matrix acting trivially fixes the
three distinct points $i$, $i+1$, $2i\in\mathfrak H$, so it is the identity
Möbius transformation and hence scalar — knowing that a Möbius transformation
is determined by its values at three distinct points and that the kernel of the
matrix-to-Möbius map is the scalar subgroup
([[thm-three-point-transitivity-mobius-transformations]],
[[thm-mobius-group-and-projective-linear-identification]]) — and a scalar in
$SL_2(\mathbb Z)$ is $\pm I$. The action therefore descends to a faithful
action of $PSL_2(\mathbb Z)$, the quotient by the normal subgroup $\{\pm I\}$
([[thm-first-isomorphism-theorem-groups]]).

The elements $S=\bigl(\begin{smallmatrix}0&-1\\1&0\end{smallmatrix}\bigr)$ and
$T=\bigl(\begin{smallmatrix}1&1\\0&1\end{smallmatrix}\bigr)$ act by
$S\cdot\tau=-1/\tau$ and $T\cdot\tau=\tau+1$. In $SL_2(\mathbb Z)$ one computes
$S^2=-I$ and $(ST)^3=-I$: $ST=\bigl(\begin{smallmatrix}0&-1\\1&1\end{smallmatrix}\bigr)$
has $(ST)^2-ST+I=0$ by direct multiplication, whence
$(ST)^3=(ST)(ST-I)=-I$. Hence $S$ and $ST$ have order $2$ and $3$ in
$PSL_2(\mathbb Z)$, so $S^2=1$ and $(ST)^3=1$ there.
