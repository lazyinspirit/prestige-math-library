---
id: ex-euler-class-of-the-universal-oriented-two-plane
kind: example
title: Euler class of the universal oriented two-plane
status: draft
origin: pipeline
deps: ["def-euler-class-by-zero-section-pullback-of-the-thom-class", "thm-gysin-long-exact-sequence-of-an-oriented-sphere-bundle", "thm-oriented-real-vector-bundles-are-classified-by-bso", "def-oriented-grassmannian-and-tautological-oriented-bundle", "thm-stable-stiefel-space-is-contractible", "lem-mod-two-cohomology-rings-of-complex-projective-spaces", "thm-mod-two-euler-class-is-the-top-stiefel-whitney-class", "def-axiom-of-choice"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Allen Hatcher, Vector Bundles & K-Theory
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "§3.2 Euler class of the universal oriented two-plane, printed pp.88–94"
    - title: Haynes Miller, MIT 18.906 Algebraic Topology II lecture notes
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: "Lecture 35, printed pp.130–132"
    - title: Milnor and Stasheff, Characteristic Classes
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: "§9 the oriented two-plane, printed pp.115–124"
---

## Example

Assume AC. Under the identification
$B\operatorname{SO}(2)=\operatorname{Gr}_2^+(\mathbb R^\infty)\cong
\mathbb{CP}^\infty$, with the tautological oriented two-plane
$\gamma_2^+$ corresponding to the tautological complex line $\gamma_{\mathbb
C}$ regarded as an oriented real two-plane, the Euler class
$$e(\gamma_2^+)\in H^2(B\operatorname{SO}(2);\mathbb Z)\cong\mathbb Z$$
is the chosen generator fixed by the standard complex orientation, and its
mod-two reduction is the top Stiefel–Whitney class:
$$\rho_2\bigl(e(\gamma_2^+)\bigr)=w_2(\gamma_2^+)\in H^2(B\operatorname{SO}(2);\mathbb F_2).$$

## Facts & Assumptions

**Given:** AC, the oriented Grassmannian $\operatorname{Gr}_2^+(\mathbb R^\infty)$ with its tautological oriented rank-two bundle $\gamma_2^+$, and the stable complex projective space $\mathbb{CP}^\infty=\operatorname{Gr}_1(\mathbb C^\infty)$ with its tautological complex line $\gamma_{\mathbb C}$.

[F1] The oriented Grassmannian is the chosen model of $B\operatorname{SO}(2)$, and its tautological bundle $\gamma_2^+$ is numerable with the induced orientation ([[def-oriented-grassmannian-and-tautological-oriented-bundle]], [[thm-oriented-real-vector-bundles-are-classified-by-bso]]).

[F2] An oriented Euclidean two-plane carries a unique complex structure $J$ rotating by a quarter turn in the positive direction, and a complex line in $\mathbb C^\infty$ is an oriented real two-plane with the standard orientation; the two constructions are inverse and compatible with the topologies on the Grassmannians, so $\operatorname{Gr}_2^+(\mathbb R^\infty)\cong\mathbb{CP}^\infty$ and $\gamma_2^+$ corresponds to the underlying oriented real bundle of $\gamma_{\mathbb C}$.

[F3] The unit sphere bundle of $\gamma_2^+$ is the unit circle bundle of the tautological complex line, which is the unit sphere $S^\infty\subset\mathbb C^\infty$; it is contractible ([[thm-stable-stiefel-space-is-contractible]]).

[F4] The mod-two Gysin sequence of an $\mathbb F_2$-oriented bundle in the Thom scope is exact; for $n\geq2$ the Euler class is the transgression of the fiber generator ([[thm-gysin-long-exact-sequence-of-an-oriented-sphere-bundle]]).

[F5] $H^*(\mathbb{CP}^\infty;\mathbb F_2)=\mathbb F_2[c]$ with $|c|=2$, and $H^2(\mathbb{CP}^\infty;\mathbb Z)\cong\mathbb Z$ with the corresponding integral class reducing to $c$ ([[lem-mod-two-cohomology-rings-of-complex-projective-spaces]]).

[F6] For every real bundle with its canonical $\mathbb F_2$-orientation, $e_2=w_n$ in degree $n$ ([[thm-mod-two-euler-class-is-the-top-stiefel-whitney-class]]).

[A1] AC is the Axiom of Choice in the form fixed by [[def-axiom-of-choice]].

## Verification
1.1 The identification. By [F2] the map assigning to an oriented two-plane its complex structure identifies $\operatorname{Gr}_2^+(\mathbb R^\infty)$ with $\mathbb{CP}^\infty$, and under this identification $\gamma_2^+$ is the tautological complex line viewed as an oriented real rank-two bundle; its unit sphere bundle, by [F3], is the unit sphere $S^\infty$ sitting over $\mathbb{CP}^\infty$ as the circle bundle of $\gamma_{\mathbb C}$. In particular the sphere bundle of $\gamma_2^+$ has contractible total space and fiber $S^1$. [F1, F2, F3]

2.1 The Gysin computation. Apply the Gysin sequence [F4] of the oriented bundle $\gamma_2^+$ in degrees near zero: $$0=H^0(S^\infty;\mathbb Z)\leftarrow H^0(\mathbb{CP}^\infty;\mathbb Z)\xrightarrow{\smile e}H^2(\mathbb{CP}^\infty;\mathbb Z)\xrightarrow{p^*}H^2(S^\infty;\mathbb Z)=0$$ is the relevant exact piece, since $H^2(S^\infty;\mathbb Z)=0$ because $S^\infty$ is contractible and $H^0(S^\infty;\mathbb Z)=\mathbb Z$ receives from $H^0$ by the constant map. Exactness at $H^2(\mathbb{CP}^\infty;\mathbb Z)$ says that the image of $\smile e$ is all of $\mathbb Z$, so $e$ is $\pm$ a generator of $H^2\cong\mathbb Z$. [F4, F5, step 1.1]

3.1 The sign. The chosen generator is the one determined by the standard complex orientation: the normalized Thom class restricts to the chosen orientation class on each fiber by definition, and the identification $H^2(\mathbb{CP}^\infty;\mathbb Z)\cong\mathbb Z$ is made so that the first Chern class of the tautological complex line is the positive generator; with this convention [F2] gives that $e(\gamma_2^+)$ is that generator, not its negative. The mod-two reduction is insensitive to the sign, so the computation below does not use this convention. [F2, step 2.1]

4.1 Mod-two reduction. By [F6] applied to the rank-two bundle $\gamma_2^+$ with its canonical $\mathbb F_2$-orientation, the mod-two Euler class equals the top Stiefel–Whitney class: $e_2(\gamma_2^+)=w_2(\gamma_2^+)$. Since reduction of coefficients commutes with the defining zero-section pullback of the Thom class, $\rho_2(e(\gamma_2^+))=e_2(\gamma_2^+)=w_2(\gamma_2^+)$, and by [F5] this is a nonzero element of $H^2(\mathbb{CP}^\infty;\mathbb F_2)=\mathbb F_2\cdot c$. [F5, F6, step 3.1]

5.1 Boundary cases. The bundle has rank two and positive rank, so the Euler class lies in degree two and no rank-zero convention is used; for the trivial oriented two-plane over a point the same Gysin computation would give the unit, matching the general rank comparison. The fiber $S^1$ is connected, so the fiber generator is well defined up to sign, which is exactly the sign convention fixed in step 3.1. The base is nonempty and path-connected, so no componentwise statement is needed. AC is used through the Thom/Gysin supplies, as recorded. [F1, F4, A1, step 1.1, step 4.1] ∎