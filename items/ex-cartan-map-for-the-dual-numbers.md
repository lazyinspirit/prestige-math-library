---
id: ex-cartan-map-for-the-dual-numbers
kind: example
title: "The dual numbers have Cartan map multiplication by two"
status: published
origin: pipeline
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
deps:
  - thm-finite-length-grothendieck-groups-have-simple-class-bases
  - thm-finite-dimensional-algebra-projective-classes-form-a-split-k-zero-basis
  - def-graded-grothendieck-group-shift-module-and-cartan-map
  - def-polynomial-ring-over-a-commutative-ring
  - def-quotient-ring
  - def-simple-module
  - def-projective-module
  - def-essential-epimorphism-and-projective-cover
  - thm-modules-over-a-ring-form-an-abelian-category
  - thm-polynomial-ring-is-a-commutative-ring
  - thm-quotient-ring-multiplication-well-defined-iff-ideal
  - thm-quotient-ring-laws
  - def-left-right-and-two-sided-ideal
  - def-algebra-over-a-commutative-ring
  - def-grothendieck-group-of-an-essentially-small-abelian-category
justified_by: []
forward_refs: []
aliases: []
landmark: false
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: "Charles Weibel, The K-book, Chapter II, §§1–2, 5–6"
      url: "https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.II.pdf"
generation:
  role: example
pipeline_run: frontier-36-complete
---

## Example

Let $k$ be any field and let $A=k[\varepsilon]/(\varepsilon^2)$, viewed as an
ungraded $k$-algebra. Then

$$K_0(A)\cong\mathbb Z[A],\qquad G_0(A)\cong\mathbb Z[k],\qquad c_A([A])=2[k].$$

In particular, the Cartan map $c_A:K_0(A)\to G_0(A)$ is not an isomorphism.

## Facts & Assumptions

**Given:** A field $k$, the dual-number algebra $A=k[\varepsilon]/(\varepsilon^2)$, and unital left modules. All Grothendieck groups in this example are the ungraded groups on finite-dimensional modules and finite-dimensional projectives. No axiom of choice is assumed or used.

[F1] $G_0(A)$ is the short-exact-sequence group of finite-dimensional left $A$-modules, $K_0(A)$ is the split group of finite-dimensional projective left $A$-modules, and $c_A$ sends a projective class to its module class ([[def-graded-grothendieck-group-shift-module-and-cartan-map]]).

[F2] In an essentially small abelian category in which every object has finite length, simple-object classes form a free abelian basis of $G_0$ ([[thm-finite-length-grothendieck-groups-have-simple-class-bases]]).

[F3] For a finite-dimensional algebra over a field, projective-cover classes, one for each simple isomorphism class, form a free abelian basis of the split projective $K_0$ ([[thm-finite-dimensional-algebra-projective-classes-form-a-split-k-zero-basis]]).

[F4] The polynomial ring $k[x]$ consists of finitely supported coefficient sequences, with convolution multiplication ([[def-polynomial-ring-over-a-commutative-ring]]).

[F5] In a quotient ring by a two-sided ideal $I$, multiplication is $(r+I)(s+I)=rs+I$ ([[def-quotient-ring]]).

[F6] In a commutative ring, a left ideal, a right ideal, and a two-sided ideal are the same notion ([[def-left-right-and-two-sided-ideal]]).

[F7] With its coefficientwise addition and convolution multiplication, $k[x]$ is a commutative ring containing $k$ by the constant-polynomial map ([[thm-polynomial-ring-is-a-commutative-ring]]).

[F8] The quotient multiplication is well defined when the additive subgroup is a two-sided ideal ([[thm-quotient-ring-multiplication-well-defined-iff-ideal]]).

[F9] The additive cosets modulo a two-sided ideal form a ring with identity ([[thm-quotient-ring-laws]]).

[F10] The category of left modules over any ring is abelian ([[thm-modules-over-a-ring-form-an-abelian-category]]).

[F11] A left module is simple when it is nonzero and has no proper nonzero submodule ([[def-simple-module]]).

[F12] A module is projective when maps from it lift across every surjective module homomorphism ([[def-projective-module]]).

[F13] A projective cover is a surjection with projective source and superfluous kernel; superfluity means $N+\ker\pi=P$ forces $N=P$ ([[def-essential-epimorphism-and-projective-cover]]).

[F14] A $k$-algebra has a unital structure map from $k$ whose image is central; this defines its $k$-vector-space structure ([[def-algebra-over-a-commutative-ring]]).

[F15] $G_0(\mathcal C)$ imposes $[Y]=[X]+[Z]$ for each short exact sequence $0\to X\to Y\to Z\to0$ ([[def-grothendieck-group-of-an-essentially-small-abelian-category]]).

## Verification

**Proof technique:** direct.

1.1 Write a polynomial as $p(x)=\sum_{n\ge0}a_nx^n$, with only finitely many nonzero coefficients, and let $I=x^2k[x]$. Multiplication by $x^2$ shifts coefficients two places, so elements of $I$ have zero constant and linear coefficients; conversely, any polynomial with those two coefficients zero is in $I$. Sums and differences remain multiples of $x^2$, and multiplying by any polynomial on either side again gives a multiple of $x^2$; thus $I$ is a two-sided ideal. Modulo $I$ every polynomial has the representative $a_0+a_1x$, since $p(x)-(a_0+a_1x)=x^2\sum_{n\ge2}a_nx^{n-2}$, and that representative is unique. By [F5]–[F9], $A=k[x]/I$ is the quotient $k$-algebra with this multiplication. Thus $1,\varepsilon$ form a $k$-basis, $\dim_kA=2$, and $\varepsilon^2=0$. [F4, F5, F6, F7, F8, F9, F14, given, algebra]

2.1 The category $A\text{-}\mathbf{Mod}$ is abelian by [F10]. Its full subcategory $\mathcal M_{\mathrm{fd}}(A)$ of finite-dimensional modules is closed under kernels and cokernels, since kernels are subspaces and cokernels are quotients of finite-dimensional vector spaces. Finite biproducts are finite-dimensional, and the coimage-to-image isomorphism remains in this full subcategory; hence $\mathcal M_{\mathrm{fd}}(A)$ is abelian. It is essentially small: on $k^n$, an unital $A$-action is determined by a matrix $T\in M_n(k)$ with $T^2=0$. For each $n$ these matrices form a set, and every $n$-dimensional module is isomorphic to one of these models after choosing a basis. Their union over $n\ge0$ is a set, so the isomorphism classes form a set. This object-by-object argument makes no simultaneous choice of bases. [F1, F10, step 1.1, given, construct, algebra]

2.2 By step 1.1, every element of $A$ is $a+b\varepsilon$. If $a\ne0$, then $a+b\varepsilon$ is a unit, with inverse $a^{-1}-a^{-2}b\varepsilon$; if $a=0$, the element is nilpotent or zero and is not a unit. Hence the nonunits are exactly the proper ideal $(\varepsilon)$, and every maximal left ideal is $(\varepsilon)$, since a proper left ideal contains no unit. The quotient $A/(\varepsilon)\cong k$ is a field, so $(\varepsilon)$ is maximal. Any simple left module $S$ is cyclic: for $0\ne s\in S$, the map $A\to S$, $a\mapsto as$, is onto, and its kernel is a maximal left ideal. It follows that $S\cong A/(\varepsilon)\cong k$. Thus $k$ is the unique simple isomorphism class. [F5, F6, F7, F11, step 1.1, given, choose, algebra]

3.1 Every object $M$ of $\mathcal M_{\mathrm{fd}}(A)$ has finite length. The zero module has the empty composition series. For nonzero $M$, choose a proper submodule $N$ of maximal $k$-dimension; it exists because $0$ is proper and possible dimensions lie in a finite set. The quotient $M/N$ is nonzero, and a proper nonzero submodule of it would lift to a proper submodule of $M$ strictly containing $N$. Thus $M/N$ is simple. Induction on $\dim_kM$ gives a finite composition series for $N$; appending $M/N$ gives one for $M$. [F10, F11, step 2.1, given, induction, choose, algebra]

3.2 Define the augmentation $\pi:A\twoheadrightarrow k$ by $\pi(a+b\varepsilon)=a$; its kernel is $(\varepsilon)$. The source $A$ is projective: given a surjection $q:E\twoheadrightarrow M$ and $f:A\to M$, choose $e\in E$ with $q(e)=f(1)$ and define $\widetilde f(a)=ae$; then $q\widetilde f(a)=a f(1)=f(a)$. If a submodule $N\le A$ satisfies $N+(\varepsilon)=A$, write $1=n+c\varepsilon$ with $n\in N$. Then $n=1-c\varepsilon$ is a unit, with inverse $1+c\varepsilon$, so $N=A$. Thus the kernel is superfluous and [F13] makes $\pi$ a projective cover of the unique simple $k$. [F5, F12, F13, step 1.1, step 2.2, given, choose, algebra]

4.1 Steps 2.1, 3.1 and 2.2 verify that $\mathcal M_{\mathrm{fd}}(A)$ is an essentially small abelian category of finite-length objects with exactly one simple isomorphism class, represented by $k$. By [F2], its Grothendieck group is the free abelian group on $[k]$: $G_0(A)\cong\mathbb Z[k]$. [F1, F2, step 2.1, step 3.1, step 2.2, construct]

4.2 The algebra $A$ is finite-dimensional by step 1.1, and its only simple isomorphism class is $k$ by step 2.2. The cover in step 3.2 is $A\twoheadrightarrow k$. Applying [F3] to this one representative shows that $K_0(A)\cong\mathbb Z[A]$. [F3, step 1.1, step 2.2, step 3.2, construct]

5.1 The ideal $(\varepsilon)=k\varepsilon$ is a submodule of $A$. The map $k\to k\varepsilon$, $c\mapsto c\varepsilon$, is an $A$-module isomorphism, because $\varepsilon$ acts by zero on both modules. The quotient $A/(\varepsilon)$ is also isomorphic to $k$. Therefore $0\to k\varepsilon\to A\to A/(\varepsilon)\to0$ is short exact, and [F15] gives $[A]=[k\varepsilon]+[A/(\varepsilon)]=2[k]$ in $G_0(A)$. The Cartan map of [F1] sends the projective class $[A]$ to this same module class. By steps 4.1–4.2, this is multiplication by $2$ from $\mathbb Z[A]$ to $\mathbb Z[k]$; its image is $2\mathbb Z[k]$, which is proper. Hence the Cartan map is not an isomorphism. [F1, F5, F6, F7, F15, step 1.1, step 2.2, step 4.1, step 4.2, algebra] $\square$
