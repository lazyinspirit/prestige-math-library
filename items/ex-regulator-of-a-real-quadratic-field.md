---
id: ex-regulator-of-a-real-quadratic-field
kind: example
title: "Regulator of a real quadratic field"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-unit-ranks-by-number-field-signature
  - def-axiom-of-choice
  - def-fundamental-units
  - def-logarithmic-unit-embedding
  - def-number-field-regulator
  - ex-real-quadratic-units-and-pell
  - lem-algebraic-integer-is-a-unit-iff-norm-is-plus-or-minus-one
  - thm-natural-logarithm-laws
  - thm-number-field-regulator-is-well-defined
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-10-02
  precheck: pass
sources:
  references:
    - title: "Andrew V. Sutherland, MIT 18.785 Lecture 15: Dirichlet's Unit Theorem (Fall 2021)"
      url: "https://math.mit.edu/classes/18.785/2021fa/LectureNotes15.pdf"
      locator: "Example 15.17 pp.9-10 (R_K=log epsilon for real quadratic K)."
    - title: "J. S. Milne, Algebraic Number Theory v3.08"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
      locator: "Ch. 5 Regulators p.94 (regulator of a set of independent units)."
---

## Example

Assume the Axiom of Choice. Let $K=\mathbb Q(\sqrt d)$ be a real quadratic field
with fundamental unit $\varepsilon>1$ (the least unit of $\mathcal O_K$ greater
than $1$). Then $K$ has signature $(2,0)$, so its unit rank is
$r_1+r_2-1=1$ and $\varepsilon$ is a system of fundamental units; its
logarithmic vector is
$$\lambda(\varepsilon)=(\log\varepsilon,\log|\sigma_2\varepsilon|)=(\log\varepsilon,-\log\varepsilon),$$
and the absolute deleted-row determinant of the $2\times1$ logarithmic matrix is
$\log\varepsilon$, so $R_K=\log\varepsilon$. The factor $2$ of the
doubled-complex convention never enters, since a real quadratic field has no
complex place. For $K=\mathbb Q(\sqrt5)$ the fundamental unit is
$\varepsilon=(1+\sqrt5)/2$ and $R_K=\log\bigl((1+\sqrt5)/2\bigr)\approx0.4812118251$;
the positive generator $9+4\sqrt5=\varepsilon^6$ of the norm-one Pell subgroup of the order $\mathbb Z[\sqrt5]$
has $\log(9+4\sqrt5)=6R_K\approx2.8872709504$, so using that generator of the
nonmaximal order as if it were the fundamental unit of the maximal order would
multiply the regulator by six.

## Facts & Assumptions

**Given:** The Axiom of Choice, a squarefree integer $d>1$, the field $K=\mathbb Q(\sqrt d)$, its fundamental unit $\varepsilon$ (the least unit of $\mathcal O_K$ greater than $1$), and its two real embeddings $\sigma_1,\sigma_2$ ([[ex-real-quadratic-units-and-pell]], [[def-logarithmic-unit-embedding]]).

[F1] The logarithmic embedding is $$\lambda(x)=\bigl(\log|\sigma_1x|,\dots,\log|\sigma_{r_1}x|,2\log|\tau_1x|,\dots,2\log|\tau_{r_2}x|\bigr)$$ on $K^\times$, with one coordinate for each real embedding and one doubled coordinate for each complex place, and it is well defined ([[def-logarithmic-unit-embedding]]).

[F2] $\log:(0,\infty)\to\mathbb R$ is strictly increasing with $\log1=0$, and $\log(xy)=\log x+\log y$, $\log(1/x)=-\log x$ for $x,y>0$ ([[thm-natural-logarithm-laws]]).

[F3] A quadratic field $K=\mathbb Q(\sqrt d)$ with $d>0$ has two real embeddings $a+b\sqrt d\mapsto a\pm b\sqrt d$ and no complex place, so its signature is $(2,0)$; its unit rank is $1$, and $\mathcal O_K^\times\cong\{\pm1\}\times\mathbb Z$ with torsion subgroup $\mu(K)=\{\pm1\}$ ([[cor-unit-ranks-by-number-field-signature]]).

[F4] For $u\in\mathcal O_K$, $u$ is a unit of $\mathcal O_K$ if and only if $N_{K/\mathbb Q}(u)=\pm1$; for the real quadratic field $N_{K/\mathbb Q}(x)=x\,\sigma_2(x)$ ([[lem-algebraic-integer-is-a-unit-iff-norm-is-plus-or-minus-one]], [[ex-real-quadratic-units-and-pell]]).

[F5] A system of fundamental units of $K$ is a tuple $(\varepsilon_1,\dots,\varepsilon_r)$ of units with $\lambda(\mathcal O_K^\times)=\mathbb Z\lambda(\varepsilon_1)\oplus\cdots\oplus\mathbb Z\lambda(\varepsilon_r)$ ([[def-fundamental-units]]).

[F6] The regulator is $R_K=\lvert\det A_k\rvert$, where the columns of $A$ are the logarithmic vectors of a system of fundamental units and $A_k$ is obtained by deleting row $k$; $R_K$ is independent of the deleted row and of the chosen system and is positive. The definition records that for a real quadratic field the regulator is $\log\varepsilon$ for its fundamental unit $\varepsilon>1$ ([[def-number-field-regulator]], [[thm-number-field-regulator-is-well-defined]]).

[F7] For $K=\mathbb Q(\sqrt5)$: the element $\varepsilon=(1+\sqrt5)/2$ has norm $-1$, so it is a unit; it is the least unit $>1$ of $\mathcal O_K$ and $\mathcal O_K^\times=\{\pm\varepsilon^n:n\in\mathbb Z\}$; moreover $2+\sqrt5=\varepsilon^3$, the fundamental Pell solution is $9+4\sqrt5=\varepsilon^6$, and $\mathbb Z[\sqrt5]^\times=\pm\langle2+\sqrt5\rangle=\pm\langle\varepsilon^3\rangle$ ([[ex-real-quadratic-units-and-pell]]).

[A1] The Axiom of Choice is assumed; it is used only through the rank-one structure [F3] and the unit-theoretic inputs of [F7] ([[def-axiom-of-choice]]).

## Verification

**Proof technique:** identify the fundamental unit as a system of fundamental units for the rank-one real quadratic field, compute its logarithmic vector from $|N(\varepsilon)|=1$, read off the deleted-row determinant, and specialize to $\mathbb Q(\sqrt5)$ where the maximal-order fundamental unit and the Pell generator of $\mathbb Z[\sqrt5]$ differ by a sixth power.

1.1 $K$ has signature $(2,0)$ and $\lambda(x)=(\log|\sigma_1x|,\log|\sigma_2x|)$ for $x\in K^\times$: there are two real embeddings and no complex place by [F3], so [F1] has no doubled coordinate, and no logarithm of a nonzero element is undefined. [F1, F3]

1.2 The fundamental unit generates the unit group: by [F3] the group $\mathcal O_K^\times$ has torsion subgroup $\{\pm1\}$ and free part of rank $1$, so there is a unit $\gamma>1$ with $\mathcal O_K^\times=\{\pm\gamma^n:n\in\mathbb Z\}$; every unit $v>1$ is then $\gamma^n$ with $n\ge1$, and $\gamma^n=\gamma\cdot\gamma^{n-1}\ge\gamma$ because $\gamma^{n-1}\ge1$ for $n\ge1$, so $\gamma$ is the least unit $>1$ and hence $\gamma=\varepsilon$; therefore $\mathcal O_K^\times=\{\pm\varepsilon^n\}$ and, by [F2] and [F1], $\lambda(-1)=0$ and $\lambda(\varepsilon^n)=n\lambda(\varepsilon)$ for every $n\in\mathbb Z$, so $$\lambda(\mathcal O_K^\times)=\mathbb Z\lambda(\varepsilon).$$ Thus $(\varepsilon)$ is a system of fundamental units of $K$ in the sense of [F5]. [F1, F2, F3, F5, algebra]

2.1 Logarithmic vector: $\sigma_1$ may be taken to be the identity, so $|\sigma_1\varepsilon|=\varepsilon>0$; and $|\sigma_2\varepsilon|=1/\varepsilon$, because $\varepsilon$ is a unit and $N_{K/\mathbb Q}(\varepsilon)=\varepsilon\,\sigma_2(\varepsilon)=\pm1$ by [F4], so $\sigma_2(\varepsilon)=\pm1/\varepsilon$. Hence $$\lambda(\varepsilon)=(\log\varepsilon,\log(1/\varepsilon))=(\log\varepsilon,-\log\varepsilon)$$ by [F2], a nonzero vector in the hyperplane $\{(\xi_1,\xi_2):\xi_1+\xi_2=0\}$. [F1, F2, F4, step 1.1, algebra]

3.1 Regulator: the logarithmic matrix of the system $(\varepsilon)$ is the $2\times1$ matrix $A$ with entries $\log\varepsilon$ and $-\log\varepsilon$, so deleting row $1$ gives the $1\times1$ determinant $-\log\varepsilon$ and deleting row $2$ gives $\log\varepsilon$; by [F6] and step 1.2, $$R_K=\lvert\det A_k\rvert=\log\varepsilon,$$ which is positive because $\varepsilon>1$ and $\log$ is strictly increasing with $\log1=0$ by [F2]. In particular the two deleted rows give the same absolute value, and the factor $2$ of the complex coordinates of [F1] is absent. [F2, F6, step 1.2, step 2.1, algebra]

4.1 For $K=\mathbb Q(\sqrt5)$: by [F7] the fundamental unit is $\varepsilon=(1+\sqrt5)/2\approx1.6180339887$, so $$R_K=\log\bigl((1+\sqrt5)/2\bigr)\approx0.4812118251 .$$ [F7, step 3.1, algebra]

5.1 By [F7], the full order unit group is $\mathbb Z[\sqrt5]^\times=\pm\langle\varepsilon^3\rangle$, and its norm-one Pell subgroup is $\pm\langle\varepsilon^6\rangle=\pm\langle9+4\sqrt5\rangle$. The Pell generator has logarithmic coordinate $$\log(9+4\sqrt5)=\log(\varepsilon^6)=6\log\varepsilon=6R_K\approx2.8872709504,$$ so its rank-one deleted-row determinant is six times the field regulator, which is defined using the maximal-order fundamental unit $\varepsilon$. [F2, F5, F7, step 3.1, step 4.1, algebra]

6.1 Conclusion and choice accounting: for every real quadratic field the fundamental unit $\varepsilon>1$ is a system of fundamental units, its logarithmic vector is $(\log\varepsilon,-\log\varepsilon)$, and $R_K=\log\varepsilon$; the doubled-complex normalization is vacuous here, and for $K=\mathbb Q(\sqrt5)$ the value is $R_K=\log((1+\sqrt5)/2)\approx0.4812118251$, six times smaller than the determinant $6R_K$ obtained from the Pell generator $9+4\sqrt5$ of the order $\mathbb Z[\sqrt5]$. Choice enters only through the rank-one unit structure [F3] and the $d=5$ input [F7]; the logarithm computations and the determinant of the $2\times1$ matrix use no choice. [A1, F3, F6, F7, step 3.1, step 5.1] ∎
