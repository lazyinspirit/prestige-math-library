---
id: lem-numerical-nef-intersections-on-projective-surfaces-are-nonnegative-in-zf
kind: lemma
title: Numerically nef intersections on integral projective surfaces are nonnegative without Choice
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - lem-projective-finite-difference-intersections-and-generated-positivity-in-zf
  - lem-mixed-euler-component-and-birational-projection-formulas-in-zf
  - lem-projective-curve-degrees-and-projection-formula-in-zf
  - lem-finite-graded-resolutions-and-projective-cech-cohomology-in-zf
  - lem-finite-projection-top-cech-duality-and-polarization-degree-in-zf
justified_by: []
proof_strategy: direct
axiom_use: Work in ZF over an infinite field. Finite Euler differences, the completed fixed-projection top pairing, one effective Cartier section at a time and explicit rational numbers suffice; no family of sections is selected.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: The Stacks Project, Numerical intersections
      url: https://stacks.math.columbia.edu/tag/0BEL
      locator: Section33.45, full online statements and proofs read; Lemmas33.45.1–33.45.8 supply the numerical-polynomial, component and Cartier-restriction conventions. The numerical-nef surface proof below uses the completed local ZF suppliers, not an imported Nakai, Hodge-index or general duality theorem.
---

## Statement

Work in ZF. Let $k$ be an infinite field and $X/k$ an integral projective surface. For line bundles $D,E$ write
$$D\cdot E=\chi(D\otimes E)-\chi(D)-\chi(E)+\chi(O_X),\qquad D^2=D\cdot D.$$
Call a line bundle numerically nef when its restriction to every integral projective curve $C\subseteq X$ has degree $\deg_C L=\chi(C,L)-\chi(C,O_C)\geq0$. If $D,E$ are numerically nef, then
$$D^2\geq0,\qquad E^2\geq0,\qquad D\cdot E\geq0.$$
These assertions hold without normality, smoothness, separability or Cohen–Macaulay assumptions on $X$.

In addition, for any very ample $H$ on $X$, a line bundle $M$ satisfying $M^2>0$ and $M\cdot H>0$ has $H^0(X,M^n)\ne0$ for every sufficiently large integer $n$. The intersection products use exactly the finite Euler-difference convention displayed above; nefness is the curve-degree condition, with no approximate-ampleness premise added.

## Statement references

[[lem-projective-finite-difference-intersections-and-generated-positivity-in-zf]]

[[lem-finite-projection-top-cech-duality-and-polarization-degree-in-zf]]

[Stacks, Section33.45](https://stacks.math.columbia.edu/tag/0BEL)

## Facts & Assumptions

**Given:** The infinite field, integral projective surface and line bundles with exactly the curve-degree conditions in the Statement. For the additional assertion, $H$ is very ample and $M$ satisfies its two stated numerical inequalities.

[F1] Mixed Euler differences vanish above support dimension, are symmetric and tensor multilinear at the top, are additive in coherent short exact sequences and invariant under twisting the coherent argument by a line bundle. [[lem-projective-finite-difference-intersections-and-generated-positivity-in-zf]]

[F2] The top mixed Euler value of a coherent sheaf is the sum of its reduced top-dimensional component values with nonnegative generic lengths; lower-dimensional and embedded supports contribute zero. On integral projective curves the Euler difference is the degree, and a globally generated line bundle has nonnegative degree. [[lem-mixed-euler-component-and-birational-projection-formulas-in-zf]] [[lem-projective-curve-degrees-and-projection-formula-in-zf]]

[F3] On this surface with a specified very ample $H$, one has $H^2>0$ and a coherent torsion-free generic-rank-one sheaf $W$ with an injection $W\hookrightarrow H^c$ for some $c\geq0$. For every line bundle $L$, the finite-dimensional groups $H^2(X,L)$ and $H^0(X,L^{-1}\otimes W)$ are perfectly dual, and $H^q(X,L)=0$ for $q>2$. No regularity hypothesis on $X$ is imposed. [[lem-finite-projection-top-cech-duality-and-polarization-degree-in-zf]]

[F4] Coherent projective cohomology and Euler characteristics are intrinsic and finite, are computed by finite affine Cech comparisons, and have the usual exact-sequence additivity from the finite cohomology long exact sequence. In particular $H^0$ is the actual section space. [[lem-finite-graded-resolutions-and-projective-cech-cohomology-in-zf]]

## Proof

1.1 First let $N$ be numerically nef and let $A$ be a line bundle with a nonzero global section. Integrality of $X$ makes multiplication by this section injective, with exact sequence $0\to O_X\to A\to O_Z\otimes A\to0$, where $Z$ is its effective Cartier zero scheme, possibly empty. Its support has dimension at most one: it misses the generic point of the integral surface, and any chain of proper irreducible closed subsets in it can be lengthened by adjoining $X$. Tensor the sequence by $N$ and use Euler additivity [F4]. It gives $N\cdot A=J_{O_Z\otimes A}(N)$. By coherent twist invariance [F1] this equals $J_{O_Z}(N)$. The component formula and curve-degree convention [F2] make it $\sum_C m_C\deg_C(N|_C)\geq0$, over the finitely many one-dimensional components of $Z$. Empty and zero-dimensional support contribute zero. Choose a very ample $H$ from a projective embedding for the rest of the proof. It is globally generated, so is numerically nef by [F2]; it has a nonzero coordinate section on the nonempty integral $X$. Thus $N\cdot H\geq0$ for every numerically nef $N$ by what was just proved, and $h=H^2>0$ by [F3]. [F1, F2, F3, F4, given, construct, algebra]

1.2 For any line bundle $M$, put $u(n)=\chi(M^n)$. Its third forward difference is $J_{M^n}(M,M,M)=0$ by [F1], and its second forward difference is the constant $M^2$ by top coherent twist invariance. Finite induction therefore gives, for every $n\geq0$, $u(n)=u(0)+n(u(1)-u(0))+\binom n2 M^2$. In particular if $M^2>0$, then $\chi(M^n)>0$ for all sufficiently large $n$. This is the explicit quadratic finite-difference identity; no Riemann–Roch formula is needed. [F1, F4, construct, algebra]

2.1 Suppose also $M\cdot H>0$. The injection in [F3] gives an injection $H^0(X,M^{-n}\otimes W)\hookrightarrow H^0(X,H^c\otimes M^{-n})$. If the latter has a nonzero section, step 1.1 applied with the numerically nef $H$ implies $H\cdot(H^c\otimes M^{-n})\geq0$. By [F1] this number is $ch-n(M\cdot H)$, negative for all sufficiently large $n$. Thus both section spaces vanish there. The perfect pairing [F3] makes $H^2(X,M^n)=0$. Since groups above degree two vanish, [F4] gives $\chi(M^n)=h^0(M^n)-h^1(M^n)$, hence $h^0(M^n)\geq\chi(M^n)>0$ for large $n$ by step 1.2. This proves the extra effectivity assertion at the full integral-surface scope. [F1, F3, F4, step 1.1, step 1.2, algebra]

3.1 Let $D$ be numerically nef and put $a=D\cdot H\geq0$. Suppose for contradiction that $D^2=-b<0$. The pairing [F1] extends rationally for numerical computations. We find a positive rational $\epsilon$ with $-b+2a\epsilon+h\epsilon^2>0$ and $-b+a\epsilon<0$. If $a=0$, choose a positive integer $\epsilon$ with $h\epsilon^2>b$, which has the required properties. If $a>0$, put $e=b/a$, $Q=b+he^2>0$, $C=2a+2he>0$, and $\delta=\min(e/2,Q/(2C))>0$. For $\epsilon=e-\delta$ one has $-b+a\epsilon=-a\delta<0$ and $-b+2a\epsilon+h\epsilon^2=Q-C\delta+h\delta^2\geq Q/2>0$. Write $\epsilon=p/q$ with positive integers $p,q$ and form the actual line bundle $M=D^q\otimes H^p$. Then $M^2=q^2(-b+2a\epsilon+h\epsilon^2)>0$, $M\cdot H=q(a+\epsilon h)>0$, and $D\cdot M=q(-b+a\epsilon)<0$. Step 2.1 gives a nonzero section of some $M^n$, but step 1.1 gives $D\cdot M^n\geq0$, contradicting $D\cdot M^n=n(D\cdot M)<0$. Therefore $D^2\geq0$. The same reasoning applies to $E$. [F1, step 1.1, step 2.1, construct, algebra]

4.1 Now let both $D,E$ be numerically nef. By steps 1.1 and 3.1, $D\cdot H,E\cdot H,D^2,E^2$ are nonnegative. For any positive rational $\epsilon=p/q$, the actual bundle $M=E^q\otimes H^p$ has $M^2=q^2(E^2+2\epsilon E\cdot H+\epsilon^2h)>0$ and $M\cdot H=q(E\cdot H+\epsilon h)>0$. Step 2.1 makes a positive power effective. Applying step 1.1 to $D$ yields $D\cdot E+\epsilon D\cdot H\geq0$. If $D\cdot E<0$ and $D\cdot H=0$, this is already impossible. If $D\cdot H>0$, take the explicit positive rational $\epsilon=-(D\cdot E)/(2D\cdot H)$, for which the same expression is $(D\cdot E)/2<0$, again impossible. Hence $D\cdot E\geq0$. This uses one rational and one section witness for the contradiction, not a choice of sections for a family of rational perturbations. [F1, step 1.1, step 2.1, step 3.1, construct, algebra]

5.1 Trivial or numerically zero line bundles have the expected zero intersection by tensor multilinearity. The cases $D\cdot H=0$ and $E\cdot H=0$ were explicitly permitted, empty effective divisors contribute the empty sum in step 1.1, and no positivity was inferred from an assumed section of a nef bundle. An integral surface has dimension two and is nonempty, so there is no missing empty-surface assertion. All coherent components, powers, coefficient choices and section witnesses used in the proof are finite. The completed pairing in [F3] applies to every integral projective surface, so no normality, smoothness or Cohen–Macaulay restriction has entered. [F1, F3, step 1.1, step 3.1, step 4.1, algebra] ∎
