---
id: lem-effective-reduced-divisor-finite-stabilizer-implies-ample
kind: lemma
title: Finite Translation Stabilizer Forces an Effective Divisor to Be Ample
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-abelian-variety-over-a-field
  - def-ample-invertible-sheaf
  - lem-theorem-of-the-square-and-mumford-homomorphism
  - lem-ample-pullback-finite-morphism
  - lem-ample-stable-positive-power
  - lem-av7-proper-quasi-finite-factor-is-finite
  - cor-euler-characteristic-locally-constant-flat-proper-family
  - cor-normalization-resolves-singularities-of-curves
  - thm-full-riemann-roch-divisor
  - def-axiom-of-choice
  - def-dependent-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: J. S. Milne, Abelian Varieties, version 2.0, Chapter I §8, printed pp. 33–35
      url: https://www.jmilne.org/math/CourseNotes/AV.pdf
    - title: Brian Conrad, Abelian Varieties, Stanford Math 249C course notes, §3.4, Proposition 3.4.8 and proof, printed pp. 32–35
      url: https://math.stanford.edu/~conrad/249CS15Page/handouts/abvarnotes.pdf
---

## Statement

Assume the Axiom of Choice and the Axiom of Dependent Choice, and let $A$ be an abelian variety over an algebraically closed field $k$. Let $\Delta$ be a nonempty irreducible effective Cartier divisor on $A$, put $L=\mathcal O_A(\Delta)$, and define its translation stabilizer $S_\Delta=\{a\in A(k):t_a(\Delta)=\Delta\}$, where $t_a(x)=a+x$. If $S_\Delta$ is finite, then $L$ is ample.

## Statement references

[Conrad, finite stabilizer criterion, Prop. 3.4.8, pp. 32–35](https://math.stanford.edu/~conrad/249CS15Page/handouts/abvarnotes.pdf)

[Milne, ampleness criterion for abelian varieties, Ch. I §8](https://www.jmilne.org/math/CourseNotes/AV.pdf)

## Facts & Assumptions

**Given:** The Axiom of Choice and the Axiom of Dependent Choice, an abelian variety $A/k$, and a nonempty irreducible effective Cartier divisor $\Delta\subset A$ with finite translation stabilizer.

[F1] The theorem of the square states $t_{a+b}^*M\otimes M\cong t_a^*M\otimes t_b^*M$. Taking $a=x$ and $b=-x$ gives $t_x^*M\otimes t_{-x}^*M\cong M^{\otimes2}$, so the corresponding translate-sum divisor is linearly equivalent to $2\Delta$. [[lem-theorem-of-the-square-and-mumford-homomorphism]]

[F2] The normalization of a projective integral curve over the perfect field $k$ is a finite smooth projective curve. For a line bundle in a flat proper family on that normalization, Euler characteristic is locally constant; Riemann–Roch gives $\chi(M)=\deg M+1-g$, so the degree of the family of restrictions is locally constant. [[cor-normalization-resolves-singularities-of-curves]] [[cor-euler-characteristic-locally-constant-flat-proper-family]] [[thm-full-riemann-roch-divisor]]

[F3] A finite pullback of an ample invertible sheaf is ample, and a positive tensor power is ample exactly when the original invertible sheaf is ample. [[lem-ample-pullback-finite-morphism]] [[lem-ample-stable-positive-power]]

[F4] A proper quasi-finite morphism of classical varieties is finite under the Axiom of Choice. [[lem-av7-proper-quasi-finite-factor-is-finite]]

## Proof

**Given:** $A$, $\Delta$, and $L$ as in the Statement.

1.1 For any $a\in A(k)$, the values of $x$ for which $a$ lies in the support of $t_x^*\Delta$ form a proper translate of $\Delta$, and the same is true for $t_{-x}^*\Delta$. Since $A$ is irreducible, two proper closed subsets cannot cover it, so choose $x$ for which $a$ lies on neither translate. By [F1], the effective divisor $D_x=t_x^*\Delta+t_{-x}^*\Delta$ is linearly equivalent to $2\Delta$. Thus for each $a$ some member of $|2\Delta|$ misses $a$, and the complete linear system $|2L|$ has no base point. [given, F1, choose]

2.1 The base-point-free system defines a morphism $\phi:A\to\mathbb P(H^0(A,L^{\otimes2})^\vee)$ with $\phi^*\mathcal O(1)\cong L^{\otimes2}$. Suppose an integral curve $C\subset A$ is contracted. Every divisor in $|2\Delta|$ then either contains all of $C$ or is disjoint from $C$, because all points of $C$ have the same image under $\phi$. [step 1.1, construct]

3.1 If an irreducible divisor $\Gamma$ is disjoint from $C$, normalize $C$ and pull the translated line bundles back to its smooth projective normalization. They form a proper flat family over the connected variety $A$, so [F2] makes their degrees constant, equal to zero at the disjoint translate; a nonempty finite intersection would instead give positive degree on the normalization. Thus for every translate $t_b\Gamma$ either it is disjoint from $C$ or contains $C$. For $c,c'\in C(k)$ and $z\in\Gamma(k)$, the translate $(c'-z)+\Gamma$ contains $c'$, hence contains $C$ by this dichotomy. Therefore $z+(c-c')\in\Gamma$ for every $z\in\Gamma$, and equality of irreducible divisors gives $t_{c-c'}\Gamma=\Gamma$. [F2, step 2.1, construct]

4.1 The curve $C$ has infinitely many $k$-points: on a nonempty affine open $\operatorname{Spec}B$, choose a transcendental $t\in B$; the finitely many generators of the one-dimensional domain $B$ are algebraic over $k(t)$, so after inverting one nonzero $f\in k[t]$ they are integral over $k[t,1/f]$ and the resulting algebra is finite over it. For every $a\in k$ with $f(a)\ne0$, the fiber modulo $t-a$ is nonzero: otherwise $t-a$ is a unit in the integral algebra, and an integral equation for its inverse makes $t-a$ a unit in $k[t,1/f]$, a contradiction. This fiber is a nonzero finite-dimensional $k$-algebra, and a maximal ideal gives a residue field equal to $k$, since $k$ is algebraically closed. There are infinitely many such $a$, as an algebraically closed field is infinite: a root of $1+\prod_{b\in S}(T-b)$ lies outside any finite subset $S$. Fix any $x\in A(k)$. The divisor $D_x$ from step 1.1 cannot be disjoint from $C$, since that would make one translated component $\Gamma$ disjoint from $C$ and step 3.1 would put all differences $c-c'$ in the finite stabilizer of $\Delta$, although fixing $c'$ and varying $c$ gives infinitely many points. Thus $C$ meets every $D_x$; by step 2.1 it must be contained in every $D_x$. Fix $c_0\in C(k)$. Then for every $x$, $c_0$ lies in $t_x^*\Delta$ or $t_{-x}^*\Delta$, so all $x\in A(k)$ lie in the union of two proper translates of $\Delta$. This contradicts irreducibility of $A$. Hence $\phi$ contracts no integral curve. [given, step 2.1, step 3.1, algebra]

5.1 Every positive-dimensional projective fiber contains an integral curve: intersect a positive-dimensional irreducible component successively with hyperplanes in a projective embedding until a curve remains. Step 4.1 therefore implies that $\phi$ has finite fibers, hence is quasi-finite. It is proper because $A$ is projective, so [F4] makes $\phi$ finite. By [F3], $L^{\otimes2}\cong\phi^*\mathcal O(1)$ is ample, and therefore $L$ is ample. [F3, F4, step 4.1, algebra] ∎

## Axiom use

AC and DC are hypotheses consumed through [F2] by the proper-family cohomology supplier and through [F4] by the proper quasi-finite criterion. The translate and degree arguments in steps 1.1–4.1 use no further choice beyond the stated selections of points and curve components.
