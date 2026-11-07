---
dependency_level: 4
id: lem-berkovich-dynamical-green-kernel-continuous-extension
kind: lemma
title: "Continuous dynamical potentials and the Berkovich Green-kernel extension"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-axiom-of-choice
  - def-local-dynamical-green-function
  - lem-local-homogeneous-dynamical-height-and-filled-julia-set
  - lem-binary-form-resultant-bezout-identities
  - def-berkovich-projective-line-by-polynomial-seminorms
  - lem-berkovich-projective-line-compactness-and-classical-density
  - lem-berkovich-disc-nested-balls-and-hsia-kernel
  - lem-binary-map-resultant-linear-conjugacy
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Robert Rumely and Matthew Baker, Analysis and dynamics on the Berkovich projective line, §§3 and7.5; Matthew Baker, Finiteness theorem, §3.2"
      url: "https://arxiv.org/pdf/math/0407433v1"
    - title: "Matthew Baker, A Finiteness Theorem for Canonical Heights Attached to Rational Maps over Function Fields, §3.2"
      url: "https://arxiv.org/pdf/math/0601046v2"
verification: {}
---
## Statement

Assume the Axiom of Choice. Let $L$ be a complete algebraically closed nontrivially nonarchimedean valued field, let $F$ be a nondegenerate homogeneous lift of a degree-$d$ rational map $\phi$, $d\ge2$, and let $X=\mathbb P^{1,\mathrm{an}}_L$ be its seminorm projective line. There is a continuous real function $q_F$ on $X$ whose value at a classical point represented by $z\ne0$ is $H_F(z)-\log\|z\|$. There is a symmetric spherical kernel $\delta:X^2\to[0,1]$ extending the classical chordal distance, jointly upper semicontinuous and continuous off the diagonal, and continuous in each variable separately. On either unit-disc chart it is the unit-disc Hsia kernel. For representatives in different charts it is $1$ unless both representatives are on their circles, where either chart computes it by inversion. Its diagonal vanishes exactly at classical points. The formula
$$g_\phi(x,y)=-\log\delta(x,y)+q_F(x)+q_F(y)-\frac{\log|R_F|}{d(d-1)}$$
with $-\log0=+\infty$ is a lift-independent symmetric extension of the classical Green kernel. It is bounded below, jointly lower semicontinuous, continuous off the diagonal, and continuous in each variable with the extended-real topology. If one argument is nonclassical it is finite and continuous everywhere in the other argument. This lemma asserts no positivity, normalization against a measure, or reduction criterion.

## Statement references

[[def-axiom-of-choice]]

[[def-local-dynamical-green-function]]

[[def-berkovich-projective-line-by-polynomial-seminorms]]

## Facts & Assumptions

**Given:** The field, lift, map and projective line of the statement.

[F1] The two-chart projective line is compact Hausdorff, with closed chart embeddings and dense classical points. ([[lem-berkovich-projective-line-compactness-and-classical-density]], [[def-berkovich-projective-line-by-polynomial-seminorms]])

[F2] On a unit disc, $\delta_D(x,y)=\inf_a\max(x(T-a),y(T-a))$ is symmetric, upper semicontinuous, continuous off the diagonal and separately continuous; its diagonal is positive exactly at nonclassical points. If two linear-coordinate seminorm values differ, their maximum equals $\delta_D$. ([[lem-berkovich-disc-nested-balls-and-hsia-kernel]])

[F3] The local homogeneous-height proof gives constants $b,B>0$ with $b\|z\|^d\le\|F(z)\|\le B\|z\|^d$, using resultant Bezout identities. The same polynomial identities can be evaluated in a multiplicative nonarchimedean seminorm. ([[lem-local-homogeneous-dynamical-height-and-filled-julia-set]], [[lem-binary-form-resultant-bezout-identities]])

[F4] The classical Green kernel is the resultant-normalized wedge expression. ([[def-local-dynamical-green-function]])

[F5] Scaling a degree-$d$ binary lift by $c$ scales its resultant by $c^{2d}$. ([[lem-binary-map-resultant-linear-conjugacy]])

[A1] Full Choice is inherited from the compactness and nested-disc constructions. ([[def-axiom-of-choice]])

## Proof

1.1 In the $T$ unit-disc chart, put $v_n(x)=d^{-n}\log\max(x(F^{\circ n}_1(T,1)),x(F^{\circ n}_2(T,1)))$. The maximum is positive: the two resultant Bezout identities imply that if both terms vanished then $x(1)=0$. Evaluating the same identities after substituting the two iterate polynomials gives the bounds of [F3] in their seminorm values. Thus for $D=\max(|\log b|,|\log B|)$, one has $|v_{n+1}(x)-v_n(x)|\le Dd^{-n-1}$ uniformly in $x$. Each $v_n$ is continuous in polynomial coordinates, and the geometric tail proves uniform convergence to a finite continuous function $q_F$ on this chart. On classical points it is exactly $H_F(t,1)$, the desired normalized value because $|t|\le1$. [F1, F3, algebra]

1.2 The same construction with $(1,U)$ works on the other chart. On the common circle, $x(T)=1$ and homogeneity gives $F^{\circ n}(T,1)=T^{d^n}F^{\circ n}(1,T^{-1})$. Multiplicativity and inversion make the two maxima equal there. The limits therefore agree on the overlap and define a continuous function on the quotient. It is bounded because $X$ is compact. [F1, step 1.1, algebra]

2.1 Define $\delta$ by the chart rules in the Statement. These rules are consistent on overlaps. On two circle points this follows by approximating each point by classical circle points: such points are dense in the circle by the finite-root argument in the classical-density proof, including the polynomial $T$ among the finite constraints. If the minimum radius is less than $1$, its center has modulus $1$ and the approximating displacements may have modulus less than $1$; if the minimum is $1$, choose a nonzero residue outside the finite forbidden set. In both cases the approximating classical points have modulus exactly $1$. For fixed one variable the disc kernels are continuous by [F2]; equality of chordal distances under inversion on classical circle points thus extends first in one variable and then the other. If $x(T)<1$ and $y(T)=1$, the center $0$ has differing seminorm values, so [F2] gives $\delta_D(x,y)=1$. This proves consistency when the other representative can also be used, and all chart rules agree with the classical chordal formula. [F1, F2, algebra]

2.2 We verify the topological assertions also across charts. A non-Gauss circle point has some unit center $a$ with $x(T-a)<1$: if not, all unit-center values would be $1$, all outside-center values would be $|a|$, and factorization would make this the Gauss seminorm. A neighborhood $x(T-a)<\eta<1$ lies on the circle and is open in the full projective line: its other-chart preimage is $x(1-aU)<\eta$, also open and necessarily on the circle. Hence near a mixed-chart pair with kernel value less than $1$, both points lie in such a common chart neighborhood, and all kernel properties follow from [F2]. At a mixed-chart pair of distinct points with value $1$, either one representative has coordinate modulus less than $1$, an open condition forcing the kernel to stay $1$, or both are distinct circle points. In the latter case choose a unit center with differing linear values, as in [F2]. Their maximum is $1$. For any $\tau<1$ sufficiently close to $1$, neighborhoods keep one linear value less than $\tau$ and the other greater than $\tau$; on circle representatives [F2] then gives kernel value greater than $\tau$, and outside the circle the mixed rule gives $1$. This proves continuity at every such off-diagonal pair. [F1, F2, step 2.1, algebra]

2.3 Joint upper semicontinuity is automatic at mixed-chart points with value $1$, since all values are at most $1$, and follows from the common-chart argument at mixed points with value less than $1$. Together with [F2], this proves it everywhere. Separate continuity follows from the same neighborhoods except possibly at the Gauss point in a circle. But the Gauss point has $\delta_D(x,\zeta_G)=1$ for every point of either unit chart, by factorization or the nested-disc formula in [F2]; its global slice is the constant $1$. At a non-Gauss circle point use its circle neighborhood as above, and at a strict-chart point use that chart and the constant mixed value. Thus all slices are continuous. The diagonal equals the disc radius in any chart and vanishes exactly at classical points, by [F2]. [F1, F2, step 2.1, step 2.2, algebra]

3.1 The stated $g_\phi$ is now symmetric, agrees with [F4] on classical points, and has all the claimed continuity properties: $-\log$ transforms upper semicontinuity of $\delta$ into lower semicontinuity, is continuous into the extended reals at zero, and is finite where $\delta>0$. A nonclassical fixed argument has a positive minimum for its spherical-kernel slice: on its own chart [F2] bounds it below by its positive radius; on mixed representatives either the value is $1$ or the same circle calculation applies. Boundedness below of $g_\phi$ follows from $\delta\le1$ and boundedness of $q_F$. Finally, another lift of the same map has the form $cF$. The scalar-iterate identity gives $q_{cF}=q_F+\log|c|/(d-1)$ and $R_{cF}=c^{2d}R_F$, so the changes cancel in the kernel formula. This proves lift independence without assuming a canonical measure. [F2, F3, F4, F5, step 1.2, step 2.3, algebra] ∎
