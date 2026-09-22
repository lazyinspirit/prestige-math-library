---
id: lem-complex-tautological-euler-class-restricts-to-the-projective-fiber-generator
kind: lemma
title: The complex tautological Euler class restricts to the projective-fiber generator
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: ["def-complex-projective-bundle-and-tautological-complex-line", "thm-gysin-long-exact-sequence-of-an-oriented-sphere-bundle", "thm-naturality-orientation-sign-and-whitney-product-for-euler-classes", "def-schubert-cells-in-real-and-complex-grassmannians", "thm-schubert-cells-give-the-stable-grassmannian-cw-structure", "thm-cellular-cochains-compute-cohomology-with-local-coefficients", "cor-homology-of-spheres", "thm-universal-coefficient-theorem-for-cohomology-over-a-pid", "def-axiom-of-choice"]
proof_strategy: direct
axiom_strength: "ZF + AC; inherited from the Gysin, cellular cohomology and the Euler-class supplier."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, section 3.1"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Projective-bundle generator and splitting principle, printed pp.77-82"
    - title: "Miller, MIT 18.906 Algebraic Topology II, Lectures 34-35"
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: "Universal oriented two-plane and projective fiber generator, printed pp.123-132"
---

## Statement

Assume AC. Let $E\to B$ be a numerable complex rank-$n$ bundle over a
paracompact Hausdorff CW complex, with $n\geq1$. Let $P(E)$, $\gamma_E$,
and $x=e((\gamma_E)_{\mathbb R})$ have the conventions of
[[def-complex-projective-bundle-and-tautological-complex-line]].
For each $b\in B$, choose a complex-linear identification $E_b\cong\mathbb C^n$
and denote the resulting fiber inclusion by
$j_b:\mathbb{CP}^{n-1}\to P(E)$.

With the complex orientation on both tautological lines,
$j_b^*x=e(\gamma_{\mathbb R})=:x_{\mathrm{taut}}$. For $n\geq2$ this is a
generator of $H^2(\mathbb{CP}^{n-1};\mathbb Z)$, and
$1,j_b^*x,\ldots,(j_b^*x)^{n-1}$ is an integral cohomology basis. Its
coefficient reductions are a basis over every prime field $\mathbb F_p$.
For $n=1$ the fiber is a point, $j_b^*x=0$, and the basis is $1$.
A comparison with a generator given the opposite normalization introduces
one fixed sign; with the tautological Euler normalization above the sign is
$+1$, independently of $b$ and the chosen complex-linear identification.

## Facts & Assumptions

**Given:** AC and the bundle, orientations and fiber inclusion of the statement.

[A1] AC is assumed through the bundle and cohomology suppliers ([[def-axiom-of-choice]]).

[F1] The projective bundle and its tautological complex line have the displayed fiberwise descriptions, the line has the orientation $(v,iv)$, and its real rank-two Euler class is defined on its paracompact Hausdorff CW-type base ([[def-complex-projective-bundle-and-tautological-complex-line]]).

[F2] For an oriented rank-two bundle in general Thom scope, the Gysin sequence contains $H^{k-1}(S(\xi);\mathbb Z)\to H^{k-2}(B;\mathbb Z)\xrightarrow{\smile e(\xi)}H^k(B;\mathbb Z)\to H^k(S(\xi);\mathbb Z)$ ([[thm-gysin-long-exact-sequence-of-an-oriented-sphere-bundle]]).

[F3] Euler classes are natural under oriented pullback, with both bases in general Thom scope ([[thm-naturality-orientation-sign-and-whitney-product-for-euler-classes]]).

[F4] Complex projective $N$-space has a finite Schubert CW structure with one cell in each dimension $0,2,\ldots,2N$ ([[def-schubert-cells-in-real-and-complex-grassmannians]], [[thm-schubert-cells-give-the-stable-grassmannian-cw-structure]]). Its cellular cochains compute singular cohomology naturally for coefficient maps ([[thm-cellular-cochains-compute-cohomology-with-local-coefficients]]).

[F5] Integral sphere homology, together with the cohomological universal coefficient sequence for a free complex over $\mathbb Z$, gives $H^k(S^d;\mathbb Z)=0$ for $0<k<d$, $d\geq1$ ([[cor-homology-of-spheres]], [[thm-universal-coefficient-theorem-for-cohomology-over-a-pid]]).

## Proof

1.1 Put $N=n-1$. The pullback $j_b^*\gamma_E$ has fiber precisely the line represented by each point of $P(E_b)$. The chosen complex-linear identification therefore identifies it with the usual tautological line over $\mathbb{CP}^N$. The identification preserves the frames $(v,iv)$; changing a complex line frame by $a+ib\ne0$ has positive real determinant $a^2+b^2$. Both bases are in Thom scope by [F1], also applied to the trivial rank-$n$ bundle over a point. Thus [F3] gives $j_b^*x=x_{\mathrm{taut}}$ with exactly the stated orientation. [F1, F3, given]

1.2 The integral cellular cochain complex of $\mathbb{CP}^N$ has one copy of $\mathbb Z$ in each even degree $0,2,\ldots,2N$ and zero in every other degree. Every differential is zero. Hence its integral cohomology is $\mathbb Z$ in those degrees and zero elsewhere, including all degrees above $2N$. Its degree-zero unit is a generator. [F4]

2.1 For $N\geq1$, the sphere bundle of its tautological complex line is $S^{2N+1}$: the homeomorphism sends $(\ell,v)$ with $v\in\ell$ of unit length to $v$, and its inverse sends $v$ to $(\mathbb Cv,v)$. Both maps are continuous in the quotient and bundle charts of [F1]. For $2\leq k\leq2N$, both flanking groups in [F2] vanish by [F5], since $1\leq k-1<k<2N+1$. Thus multiplication by $x_{\mathrm{taut}}$ is an isomorphism $H^{k-2}\to H^k$ in this range. Starting at the unit, its powers generate all the even groups in step 1.2. This proves the integral basis assertion and degree-two generation; vanishing above the top degree comes from step 1.2, not from an induction through the exceptional top sphere group. [F1, F2, F5, step 1.2]

3.1 With $\mathbb F_p$ coefficients the same cellular cochain complex has one copy of $\mathbb F_p$ in each even degree and zero differentials. The natural coefficient map reduces each integral cell coordinate modulo $p$. Each power in step 2.1 is an integral generator, hence has coordinate $+1$ or $-1$ and reduces to a basis vector over $\mathbb F_p$. Together with step 1.1 this proves the reduction assertion. [F4, step 1.1, step 2.1]

4.1 When $n=1$, step 1.2 with $N=0$ gives $H^2=0$ and the single basis element $1$, integrally and after reduction. No use of step 2.1 is needed. An empty base contributes no fibers. Rank zero is excluded; the separate convention in [F1] gives empty projectivization with no $x$. The determinant argument in step 1.1 proves independence of each complex-linear identification, so no varying sign is introduced across components. AC is inherited from the stated suppliers; choosing a frame for one fixed fiber introduces no further choice assumption. [A1, F1, F4, step 1.1, step 1.2, step 3.1] ∎
