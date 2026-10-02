---
id: ex-units-in-a-real-cubic-field
kind: example
title: Two independent units in a real cubic field
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-fundamental-theorem-of-finitely-generated-abelian-groups-from-pid-modules
  - cor-index-of-a-full-rank-integer-sublattice-is-the-absolute-determinant
  - cor-trace-and-norm-of-an-algebraic-integer
  - cor-trigonometric-parity-and-pythagorean-identity
  - cor-unit-ranks-by-number-field-signature
  - cor-vietas-formulas-for-a-split-monic-polynomial
  - def-archimedean-embeddings-and-number-field-signature
  - def-axiom-of-choice
  - def-fundamental-units
  - def-integral-element-and-algebraic-integer
  - def-logarithmic-unit-embedding
  - def-number-field
  - def-pi-via-first-positive-cosine-zero
  - def-ring-of-integers-of-a-number-field
  - def-sine-and-cosine-by-power-series
  - lem-algebraic-integer-is-a-unit-iff-norm-is-plus-or-minus-one
  - lem-unit-logarithms-lie-in-the-product-formula-hyperplane
  - thm-dirichlet-unit-theorem
  - thm-double-angle-and-power-reduction-identities
  - thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots
  - thm-field-norm-and-trace-by-embeddings
  - thm-intermediate-value
  - thm-natural-logarithm-laws
  - thm-quadratic-and-cubic-irreducibility-test
  - thm-quarter-turn-values-and-shift-formulas
  - thm-rational-root-theorem
  - thm-sine-and-cosine-derivatives
  - thm-sine-cosine-signs-monotonicity-and-ranges
  - thm-triple-angle-identities
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Brian Conrad and Aaron Landesman, Math 154 Algebraic Number Theory"
      url: "https://people.math.harvard.edu/~landesman/assets/undergraduate-number-theory.pdf"
      locator: "Example 29.1 p.149 (the rank-two cubic Q(alpha), alpha^3-3alpha+1 = 0; the displayed generator list there is not used verbatim)."
    - title: "J. S. Milne, Algebraic Number Theory v3.08"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
      locator: "Ch. 5 Example 5.3 p.86 and Exercise 6-1 p.113 (X^3-3X+1 has three real roots), regulator discussion p.94."
    - title: "Andrew V. Sutherland, MIT 18.785 Lecture 15: Dirichlet's Unit Theorem (Fall 2021)"
      url: "https://math.mit.edu/classes/18.785/2021fa/LectureNotes15.pdf"
      locator: "Section 15.3 pp.9-10 (rank computations from the signature; same method)."
verification:
  audited: 2026-10-02
  precheck: pass
---

## Example

Assume the Axiom of Choice. Let $\alpha=2\cos(2\pi/9)$, the root in $(1,2)$ of
$f(X)=X^3-3X+1$. Then $K=\mathbb Q(\alpha)$ is a totally real cubic field
with signature $(r_1,r_2)=(3,0)$, so the unit rank is
$r_1+r_2-1=2$. The elements $\alpha$ (norm $-1$) and $\alpha-1$ (norm $1$)
are units of $\mathcal O_K$ whose logarithmic vectors
$\lambda(\alpha),\lambda(\alpha-1)\in H$ are linearly independent over
$\mathbb R$; hence $\langle\alpha,\alpha-1\rangle$ is a rank-$2$ subgroup of
$\mathcal O_K^\times$ of finite index, confirming the rank.

## Facts & Assumptions

**Given:** The Axiom of Choice, the real number $\theta:=2\pi/9$, the element $\alpha:=2\cos\theta$, and the polynomial $f(X)=X^3-3X+1$ ([[def-sine-and-cosine-by-power-series|cosine]], [[def-number-field|number field]]).

[F1] $\pi>0$ and $\pi/2$ is the smallest positive zero of cosine ([[def-pi-via-first-positive-cosine-zero]]).

[F2] For every real $x$ one has $\cos(x+\pi)=-\cos x$ and $\cos\pi=-1$ ([[thm-quarter-turn-values-and-shift-formulas]]).

[F3] For every real $x$ one has $\cos(-x)=\cos x$ ([[cor-trigonometric-parity-and-pythagorean-identity]]).

[F4] For every real $x$ one has $\cos3x=4\cos^3x-3\cos x$ ([[thm-triple-angle-identities]]).

[F5] For every real $x$ one has $\cos2x=2\cos^2x-1$ ([[thm-double-angle-and-power-reduction-identities]]).

[F6] $\cos0=1$ ([[thm-sine-and-cosine-derivatives]]).

[F7] Cosine is strictly decreasing on $[0,\pi]$, with range $[-1,1]$ ([[thm-sine-cosine-signs-monotonicity-and-ranges]]).

[F8] If a rational number $p/q$ in lowest terms is a root of a polynomial with integer coefficients $a_nX^n+\cdots+a_0$, then $p$ divides $a_0$ and $q$ divides $a_n$ ([[thm-rational-root-theorem]]).

[F9] A polynomial of degree $2$ or $3$ over a field is irreducible if and only if it has no root in that field ([[thm-quadratic-and-cubic-irreducibility-test]]).

[F10] A continuous real function on a closed bounded interval attains every value between its endpoint values ([[thm-intermediate-value]]).

[F11] Sending an embedding of $F(\alpha)$ into an algebraically closed field to the image of $\alpha$ is a bijection onto the set of distinct roots of the minimal polynomial of $\alpha$; in particular the number of embeddings equals the number of distinct roots ([[thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots]]).

[F12] For a separable finite extension the field norm is the product of the images under the distinct embeddings: $N_{K/\mathbb Q}(u)=\prod_\sigma\sigma(u)$ ([[thm-field-norm-and-trace-by-embeddings]]).

[F13] If $f(t)=t^n+a_1t^{n-1}+\cdots+a_n$ splits over a commutative ring as $f(t)=\prod_{i=1}^n(t-\alpha_i)$, then $a_k=(-1)^ke_k(\alpha_1,\dots,\alpha_n)$ for each $k$; in particular $a_n=(-1)^n\alpha_1\cdots\alpha_n$ ([[cor-vietas-formulas-for-a-split-monic-polynomial]]).

[F14] For $u\in\mathcal O_K$, the element $u$ is a unit of $\mathcal O_K$ if and only if $N_{K/\mathbb Q}(u)=\pm1$ ([[lem-algebraic-integer-is-a-unit-iff-norm-is-plus-or-minus-one]]).

[F15] $\mathcal O_K$ is the integral closure of $\mathbb Z$ in $K$; an element of $K$ that is a root of a monic polynomial in $\mathbb Z[X]$ is integral over $\mathbb Z$ and hence lies in $\mathcal O_K$, and $\mathcal O_K$ is a subring of $K$ containing $1$ ([[def-integral-element-and-algebraic-integer]], [[def-ring-of-integers-of-a-number-field]]).

[F16] The unit rank of $K$ is $r_1+r_2-1$, where $(r_1,r_2)$ is the signature; a totally real cubic field has signature $(3,0)$ and unit rank $2$ ([[cor-unit-ranks-by-number-field-signature]], [[def-archimedean-embeddings-and-number-field-signature]]).

[F17] The logarithmic embedding is the map $\lambda(x)=(\log|\sigma_1x|,\dots,2\log|\tau x|,\dots)$ on $K^\times$, and $\lambda(uv)=\lambda(u)+\lambda(v)$ for $u,v\in K^\times$ ([[def-logarithmic-unit-embedding]], [[thm-natural-logarithm-laws]]); for a totally real field its values are the vectors of the logarithms of the absolute values of the conjugates.

[F18] The image $\lambda(\mathcal O_K^\times)$ is contained in the hyperplane $H=\{x:\sum_ix_i=0\}$ ([[lem-unit-logarithms-lie-in-the-product-formula-hyperplane]]).

[F19] $\mathcal O_K^\times\cong\mu(K)\times\mathbb Z^{r_1+r_2-1}$; in particular the unit group is finitely generated of rank $r_1+r_2-1$ with finite torsion subgroup $\mu(K)$ ([[thm-dirichlet-unit-theorem]]).

[F20] A system of fundamental units $(\varepsilon_1,\dots,\varepsilon_r)$ of $K$ exists, its logarithms $\lambda(\varepsilon_i)$ form a $\mathbb Z$-basis of $\lambda(\mathcal O_K^\times)$, and every unit has a unique expression $u=\zeta\varepsilon_1^{m_1}\cdots\varepsilon_r^{m_r}$ with $\zeta\in\mu(K)$ and $m_i\in\mathbb Z$ ([[def-fundamental-units]]).

[F21] For $n\ge1$ and $A\in M_n(\mathbb Z)$ with $\det A\ne0$, the subgroup $L=A\mathbb Z^n$ generated by the columns has finite index $\lvert\det A\rvert$ in $\mathbb Z^n$ ([[cor-index-of-a-full-rank-integer-sublattice-is-the-absolute-determinant]]).

[A1] The Axiom of Choice is assumed; it is used only through the unit theorem [F19] and the existence of a system of fundamental units [F20] ([[def-axiom-of-choice]]).

## Verification

**Proof technique:** verify by the triple-angle identity that $2\cos(2\pi/9)$ is the root of $X^3-3X+1$ in $(1,2)$, locate the three real conjugates by the intermediate value theorem, read the norms off Vieta's formulas, and detect the linear independence of the two logarithmic vectors through exact signs of the logarithms of the conjugates; finite index follows from the integrality of the coordinates in a fundamental system.

1.1 $\pi>0$, hence $0<\theta<\pi/3<\pi$ for $\theta=2\pi/9$. [F1, algebra]

1.2 With $c:=\cos(\pi/3)$ one has $\cos(2\pi/3)=\cos(\pi-\pi/3)=\cos((-\pi/3)+\pi)=-\cos(-\pi/3)=-\cos(\pi/3)=-c$ by the shift and parity identities, while the double-angle identity gives $\cos(2\pi/3)=2c^2-1$; hence $2c^2-1=-c$, that is $(2c-1)(c+1)=0$. Since $\pi/3<\pi$ and cosine is strictly decreasing on $[0,\pi]$ with $\cos\pi=-1$, one has $c>-1$, so $c=1/2$. [F2, F3, F5, F7, algebra]

1.3 Values of $f$: $f(2)=3$, $f(1)=-1$, $f(0)=1$, $f(-1)=3$, $f(-2)=-1$. [algebra]

2.1 Hence $\cos(2\pi/3)=-1/2$. [step 1.2]

2.2 Moreover $1<\alpha<2$: from $0<\theta<\pi/3$ and strict decrease of cosine on $[0,\pi]$ together with $\cos0=1$ and $\cos(\pi/3)=1/2$ one gets $1/2<\cos\theta<1$, hence $1<\alpha<2$. [F6, F7, step 1.1, step 1.2, algebra]

2.3 The polynomial $f$ is irreducible over $\mathbb Q$: by [F8] a rational root of the monic integer polynomial $f$ must be an integer dividing the constant term $1$, hence equal to $1$ or $-1$; but $f(1)=-1\ne0$ and $f(-1)=3\ne0$, so $f$ has no rational root, and since $\deg f=3$ it is irreducible by [F9]. [F8, F9, step 1.3]

3.1 The triple-angle identity gives $\alpha^3-3\alpha=(2\cos\theta)^3-3(2\cos\theta)=2(4\cos^3\theta-3\cos\theta)=2\cos(3\theta)=2\cos(2\pi/3)=-1$, so $f(\alpha)=\alpha^3-3\alpha+1=0$. [F4, step 2.1, algebra]

4.1 The polynomial $f$ has exactly one root in $(1,2)$, namely $\alpha$: by step 1.3 and [F10] the sign change from $f(1)<0$ to $f(2)>0$ gives a root in $(1,2)$, and for $1<x<y$ one has $f(y)-f(x)=(y-x)(x^2+xy+y^2-3)>0$, so $f$ is strictly increasing on $(1,\infty)$ and the root is unique; steps 3.1 and 2.2 show that $\alpha$ is such a root. [F10, step 3.1, step 2.2, step 1.3, algebra]

5.1 By step 1.3 and [F10] there are also roots in $(-2,-1)$ and in $(0,1)$, and these three roots are distinct because the intervals are disjoint; a cubic has at most three roots, so these are all the roots of $f$ and all of them are real. [F10, step 4.1, algebra]

6.1 Therefore $f$ is the minimal polynomial of $\alpha$ over $\mathbb Q$ (monic, irreducible, with $f(\alpha)=0$ by step 3.1), so $K=\mathbb Q(\alpha)$ has degree $3$ over $\mathbb Q$; by [F11] the three embeddings $K\to\mathbb C$ send $\alpha$ to the three roots of $f$, which are all real by step 5.1, so $K$ is totally real with signature $(3,0)$ and unit rank $r_1+r_2-1=2$ by [F16]. [F11, F16, step 3.1, step 5.1, step 2.3]

7.1 By [F12] and [F13] applied to $f(t)=\prod_{i=1}^3(t-\alpha_i)$, where $\alpha_1,\alpha_2,\alpha_3$ are the three conjugates of $\alpha$ given by the embeddings of step 6.1, one has $N_{K/\mathbb Q}(\alpha)=\alpha_1\alpha_2\alpha_3=(-1)^3a_3=-1$ because the constant coefficient of $f$ is $a_3=1$; and $N_{K/\mathbb Q}(\alpha-1)=\prod_{i=1}^3(\alpha_i-1)=(-1)^3\prod_{i=1}^3(1-\alpha_i)=-f(1)=-(-1)=1$, using $f(1)=1-3+1=-1$. [F12, F13, step 6.1, step 1.3, algebra]

7.2 Writing the three real embeddings as $\sigma_1=\mathrm{id},\sigma_2,\sigma_3$, the conjugates satisfy $\sigma_1(\alpha)=\alpha\in(1,2)$, $0<\sigma_2(\alpha)<1$ and $-2<\sigma_3(\alpha)<-1$ by steps 2.2 and 5.1; hence $\log|\sigma_1\alpha|=\log\alpha>0$, $\log|\sigma_1(\alpha-1)|=\log(\alpha-1)<0$, $\log|\sigma_2\alpha|<0$, $\log|\sigma_2(\alpha-1)|=\log(1-\sigma_2\alpha)<0$, $\log|\sigma_3\alpha|>0$ and $\log|\sigma_3(\alpha-1)|>0$. [step 2.2, step 5.1, step 6.1, algebra]

8.1 The elements $\alpha$ and $\alpha-1$ lie in $\mathcal O_K$: $\alpha$ is a root of the monic polynomial $f\in\mathbb Z[X]$, hence integral over $\mathbb Z$ and in $\mathcal O_K$ by [F15], and $\alpha-1\in\mathcal O_K$ because $\mathcal O_K$ is a subring of $K$; by [F14] with the norms of step 7.1, both are units of $\mathcal O_K$. [F14, F15, step 7.1]

8.2 The vectors $\lambda(\alpha)$ and $\lambda(\alpha-1)$ are linearly independent over $\mathbb R$: if $a\lambda(\alpha)+b\lambda(\alpha-1)=0$, then reading the first coordinate and dividing by $\log\alpha\ne0$ gives $a+b\,r_1=0$ with $r_1:=\log(\alpha-1)/\log\alpha<0$ by step 7.2, while reading the second coordinate and dividing by $\log|\sigma_2\alpha|\ne0$ gives $a+b\,r_2=0$ with $r_2:=\log|\sigma_2(\alpha-1)|/\log|\sigma_2\alpha|>0$, a quotient of two negative numbers; subtracting the two equations gives $b(r_1-r_2)=0$, and $r_1\ne r_2$ because their signs differ, so $b=0$ and then $a=0$ from the first equation. [step 7.2, algebra]

9.1 By [F17] the map $\lambda$ turns products into sums, and by [F18] both $\lambda(\alpha)$ and $\lambda(\alpha-1)$ lie in $H$, since $\alpha$ and $\alpha-1$ are units of $\mathcal O_K$ by step 8.1. [F17, F18, step 8.1]

9.2 Hence the subgroup $\langle\alpha,\alpha-1\rangle$ is free abelian of rank $2$: if $\alpha^m(\alpha-1)^n=1$ for integers $m,n$, then $m\lambda(\alpha)+n\lambda(\alpha-1)=\lambda(1)=0$ by [F17] and step 8.2 forces $m=n=0$; thus the homomorphism $\mathbb Z^2\to\mathcal O_K^\times$, $(m,n)\mapsto\alpha^m(\alpha-1)^n$, has trivial kernel, and its image is exactly $\langle\alpha,\alpha-1\rangle$. [F17, step 8.2]

10.1 The image has finite index in $\lambda(\mathcal O_K^\times)$: by [F20] fix a system of fundamental units $\varepsilon_1,\varepsilon_2$ and write $\alpha=\zeta\varepsilon_1^{m_1}\varepsilon_2^{m_2}$ and $\alpha-1=\zeta'\varepsilon_1^{n_1}\varepsilon_2^{n_2}$ with $\zeta,\zeta'\in\mu(K)$ and integers $m_i,n_i$; since $\lambda$ kills $\mu(K)$, $\lambda(\alpha)=m_1\lambda(\varepsilon_1)+m_2\lambda(\varepsilon_2)$ and $\lambda(\alpha-1)=n_1\lambda(\varepsilon_1)+n_2\lambda(\varepsilon_2)$, so with respect to the $\mathbb Z$-basis $(\lambda(\varepsilon_1),\lambda(\varepsilon_2))$ of $\lambda(\mathcal O_K^\times)$ the two vectors have the integer coordinate columns $(m_1,m_2)^{\mathsf T}$ and $(n_1,n_2)^{\mathsf T}$, and the matrix $A=\begin{pmatrix}m_1&n_1\\m_2&n_2\end{pmatrix}$ has $\det A\ne0$ because a zero determinant would make the two coordinate columns, hence $\lambda(\alpha)$ and $\lambda(\alpha-1)$, linearly dependent over $\mathbb R$, contradicting step 8.2; therefore the subgroup $\mathbb Z\lambda(\alpha)+\mathbb Z\lambda(\alpha-1)=A\mathbb Z^2$ has finite index in $\lambda(\mathcal O_K^\times)$ by [F21]. [F20, F21, step 8.2, step 9.2]

11.1 Consequently $\langle\alpha,\alpha-1\rangle$ has finite index in $\mathcal O_K^\times$: the canonical map $\mathcal O_K^\times/\langle\alpha,\alpha-1\rangle\to\lambda(\mathcal O_K^\times)/(\mathbb Z\lambda(\alpha)+\mathbb Z\lambda(\alpha-1))$ is surjective onto a finite group by step 10.1, and its kernel $(\mu(K)\langle\alpha,\alpha-1\rangle)/\langle\alpha,\alpha-1\rangle\cong\mu(K)/(\mu(K)\cap\langle\alpha,\alpha-1\rangle)$ is a quotient of the finite group $\mu(K)$ of [F19]; hence the quotient is finite, as claimed. [F19, step 10.1]

12.1 Choice accounting: AC is used only through the unit theorem [F19], which supplies the finite generation and rank, and through the existence of the system of fundamental units [F20]; the trigonometric, polynomial, norm and logarithm computations, and the independence argument via signs, are elementary and use no further choice. [A1, F19, F20] ∎
