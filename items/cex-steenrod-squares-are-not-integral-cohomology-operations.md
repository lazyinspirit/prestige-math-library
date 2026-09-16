---
id: cex-steenrod-squares-are-not-integral-cohomology-operations
kind: counterexample
title: Steenrod squares do not all lift integrally
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [ex-steenrod-squares-on-real-projective-space, lem-real-projective-space-cellular-homology-and-pinch-map, lem-axiomatic-cellular-boundaries-are-integral-incidence-matrices-with-coefficients, thm-cellular-homology-computes-singular-homology, thm-topological-universal-coefficient-short-exact-sequence-for-cohomology, def-singular-cohomology-with-coefficients, def-bockstein-connecting-operation, prop-bocksteins-are-natural-and-commute-with-suspension, prop-first-steenrod-square-is-the-mod-two-bockstein, def-axiom-of-choice]
proof_strategy: counterexample
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Hatcher, Algebraic Topology
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
      locator: Section 4.L, projective-space formula (*), printed pages 490--491
    - title: Miller, Algebraic Topology notes
      url: https://math.mit.edu/~hrm/papers/notes-905.pdf
      locator: Theorem 27.1 and proof, printed pages 73--74
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Statement refuted

It is false that every Steenrod square has a natural integral-valued lift.
More precisely, assume AC. There is no degree-two cohomology operation

$$\Theta_n:H^n(-;\mathbb F_2)\longrightarrow H^{n+2}(-;\mathbb Z)$$

whose composite with coefficient reduction
$\rho:H^{n+2}(-;\mathbb Z)\to H^{n+2}(-;\mathbb F_2)$ is $Sq^2$ for every
space, degree, and class. In fact, the obstruction below rules out such a
lift even before naturality is used.

This does not apply to $Sq^1$: the integral Bockstein is an
integral-valued lift of $Sq^1$. The failed degree-one scaffold argument is
therefore not used.

## Facts & Assumptions

**Given:** A hypothetical family $\Theta_n$ with the displayed lifting property.

[F1] [[ex-steenrod-squares-on-real-projective-space]] gives, under AC, $H^*(\mathbb {RP}^{\infty};\mathbb F_2)=\mathbb F_2[a]$, $|a|=1$, and $Sq^i(a^j)=\binom ji a^{j+i}$ with coefficients reduced modulo two.

[F2] On each standard finite skeleton from [F1], [[lem-real-projective-space-cellular-homology-and-pinch-map]] gives one cell in every dimension up to its top dimension and integral incidence maps $d_j=2$ for positive even $j$ and $d_j=0$ for odd $j$. [[lem-axiomatic-cellular-boundaries-are-integral-incidence-matrices-with-coefficients]] identifies these incidence matrices with the cellular differential, and [[thm-cellular-homology-computes-singular-homology]] applies to the resulting infinite CW complex.

[F3] [[thm-topological-universal-coefficient-short-exact-sequence-for-cohomology]] gives, under AC, the exact sequence

$$0\longrightarrow\operatorname {Ext}^1_{\mathbb Z}(H_{n-1}(X;\mathbb Z),G)\longrightarrow H^n(X;G)\longrightarrow\operatorname {Hom}_{\mathbb Z}(H_n(X;\mathbb Z),G)\longrightarrow0.$$

[F4] [[def-singular-cohomology-with-coefficients]] makes the coefficient map $\mathbb Z\to\mathbb F_2$ induce the reduction homomorphism $\rho$ used in the statement.

[F5] [[def-bockstein-connecting-operation]] gives the integral and mod-two Bocksteins by canonical cyclic residue lifts.

[F6] Assuming AC, [[prop-bocksteins-are-natural-and-commute-with-suspension]] makes these Bocksteins natural cohomology operations.

[F7] [[prop-first-steenrod-square-is-the-mod-two-bockstein]] identifies the mod-two Bockstein with $Sq^1$.

[A1] [[def-axiom-of-choice]] is used exactly through [F1], [F3], and [F6]. The cellular homology and cyclic residue-lift calculations add no choice.

## Counterexample

1.1 Choose the explicit mod-two input $u=a^3$. It is nonzero in the polynomial ring and has degree three. Substitution of $i=2,j=3$ in [F1] gives [F1]

$$Sq^2(u)=\binom32a^5=a^5\ne0,$$

since $\binom32=3=1$ in $\mathbb F_2$ and every power of the polynomial generator is nonzero.

1.2 The required integral target is zero. The standard skeletal inclusions in [F1] preserve the cells in [F2], and a cellular differential in degree $j$ is already determined on the finite skeleton $\mathbb {RP}^j$. Hence their union gives the infinite integral cellular complex with the same alternating differentials. In particular, $d_4=2$, $d_5=0$, and $d_6=2$. Therefore [F1, F2, F3]

$$H_4(\mathbb {RP}^{\infty};\mathbb Z)=\ker(2:\mathbb Z\to\mathbb Z)=0$$

and

$$H_5(\mathbb {RP}^{\infty};\mathbb Z)=\mathbb Z/2\mathbb Z.$$

At $n=5$ with $G=\mathbb Z$, [F3] therefore becomes

$$0\longrightarrow\operatorname {Ext}^1_{\mathbb Z}(0,\mathbb Z)\longrightarrow H^5(\mathbb {RP}^{\infty};\mathbb Z)\longrightarrow\operatorname {Hom}_{\mathbb Z}(\mathbb Z/2,\mathbb Z)\longrightarrow0.$$

The left group is zero from the zero projective resolution. The right group is zero because the image in the torsion-free group $\mathbb Z$ of an element killed by two must be zero. Exactness therefore gives $H^5(\mathbb {RP}^{\infty};\mathbb Z)=0$.

1.3 The degree-one exception really has an integral natural lift. For a mod-two cocycle $c$, let $\widehat c$ be its canonical valuewise zero/one integer lift and write $\delta\widehat c=2h$. By [F5], the integral Bockstein is $[h]$. The cochain $\widehat c\bmod4$ is a lift through the mod-four coefficient sequence, and its coboundary is $2h\bmod4$. Pulling back along $2:\mathbb F_2\to\mathbb Z/4$ therefore gives $h\bmod2$, so [F4, F5, F6, F7]

$$\beta_2([c])=\rho\widetilde\beta([c]).$$

By [F6] both sides are natural operations, and [F7] identifies the left side with $Sq^1$. Thus the integral Bockstein is precisely the promised integral-valued lift of $Sq^1$.

2.1 The lifting equation fails on $u$. Step 1.2 forces $\Theta_3(u)=0$, so coefficient reduction gives $\rho\Theta_3(u)=0$. Step 1.1 gives $Sq^2(u)=a^5\ne0$. Hence $\rho\Theta_3(u)\ne Sq^2(u)$, contradicting the defining property of $\Theta$. This single value rules out the lift without invoking naturality. [F1, F4, step 1.1, step 1.2]

3.1 The boundary, qualification, and choice cases are explicit. The witness space is nonempty and the input $a^3$ and failed output $a^5$ are nonzero; the zero class and unit are not witnesses. The indices $i=2,j=3$ lie inside the projective-space formula rather than an instability or truncation range, while the integral vanishing is calculated in the exact target degree five. Degenerate singular simplices remain in [F3]--[F5]. AC is inherited exactly from [F1], [F3], and [F6]. The item asserts nonexistence of one kind of lift and makes no biconditional claim; step 1.3 proves rather than merely asserts the integral Bockstein lift of $Sq^1$. [F1, F2, F3, F4, F5, F6, F7, A1, step 1.1, step 1.2, step 1.3, step 2.1] ∎