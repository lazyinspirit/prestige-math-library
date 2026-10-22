---
id: thm-a-polynomial-boundary-restriction-and-surgery-detector
kind: theorem
title: Boundary restriction and the surgery detector
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 11
deps:
  - thm-knot-wirtinger-presentation-correctness
  - def-knot-exterior
  - def-knot-meridian-and-preferred-longitude
  - thm-knot-exterior-homology-and-longitude
  - def-oriented-slope-and-knot-dehn-filling
  - def-sl-two-character-variety-and-peripheral-eigenvalues
  - lem-sl2-representation-variety-is-affine
  - thm-invariant-ring-finite-generation-and-affine-categorical-quotient
  - def-knot-a-polynomial
  - def-enhanced-a-polynomial
  - lem-sl-two-character-trace-coordinate-model
  - lem-knot-a-polynomial-boundary-elimination
  - def-sl-two-abelian-surgery
  - thm-seifert-van-kampen
  - thm-group-pushout-as-an-amalgamated-quotient
  - prop-retracts-inject-fundamental-groups
  - thm-fundamental-group-of-the-circle
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-collar-neighborhood-theorem
  - def-smooth-collar-of-a-manifold-boundary
justified_by: []
proof_strategy: direct
axiom_use: Full AC is inherited through the exterior/character-quotient branch
  and supplies ACω for the collar theorem via the named implication; the pushout
  algebra is choice-free.
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: D. Cooper, M. Culler, H. Gillet, D. D. Long, and P. B. Shalen, Plane
        curves associated to character varieties of 3-manifolds, §§2–3
      url: https://homepages.math.uic.edu/~culler/papers/PlaneCurves/curves.pdf
    - title: Léo Bénard, François Florens, and Adrien Rodau, A slope invariant and the
        A-polynomial of knots, §§2.1–2.3
      url: https://arxiv.org/pdf/2103.14151
---

## Statement

Assume full AC and let $K\subset S^3$ be a smooth oriented knot with exterior $E_K$, meridian $\mu$, and preferred longitude $\lambda$. Restriction to the peripheral torus induces an algebraic map from the character variety of $E_K$ to that of the torus. Every one-dimensional peripheral eigenvalue image component is contained in the zero set of the ordinary A-polynomial, while isolated image points are not treated as curve factors. For a primitive pair $(p,q)\in\mathbb Z^2$ (with $q=0$ denoting the meridional slope), a representation $\rho:\pi_1(E_K)\to SL_2(\mathbb C)$ descends to the filling that kills $p[\mu]+q[\lambda]$ exactly when $\rho(\mu)^p\rho(\lambda)^q=I_2$. If the peripheral matrices are simultaneously diagonalizable with eigenvalues $(M,L)$ on a common eigenline, this matrix condition is equivalent to $M^pL^q=1$; without that diagonalizability, the eigenvalue equation is only necessary and the matrix relation must be checked.

## Statement references

[[def-knot-a-polynomial|Ordinary A-polynomial and reduced boundary curve]]

[[def-oriented-slope-and-knot-dehn-filling|Slope and Dehn-filling convention]]

[Cooper, Culler, Gillet, Long, and Shalen, §§2–3](https://homepages.math.uic.edu/~culler/papers/PlaneCurves/curves.pdf)

[Bénard, Florens, and Rodau, §§2.1–2.3](https://arxiv.org/pdf/2103.14151)

## Facts & Assumptions

**Given:** Full AC, the marked knot exterior and peripheral basis, a finite presentation of its group, a representation, and coprime integers $p,q$.

[F1] The boundary inclusion induces restriction on representations; evaluation of each fixed peripheral word is regular in matrix entries because inverse letters in $SL_2(\mathbb C)$ are adjugate polynomials ([[lem-sl2-representation-variety-is-affine]]). This restriction is equivariant under simultaneous conjugation, and the character variety is the affine categorical quotient ([[def-sl-two-character-variety-and-peripheral-eigenvalues]]; [[thm-invariant-ring-finite-generation-and-affine-categorical-quotient]]).

[F2] The ordinary A-polynomial defines the reduced union of one-dimensional components of the peripheral eigenvalue image; zero-dimensional image components are omitted ([[def-knot-a-polynomial]]; [[lem-knot-a-polynomial-boundary-elimination]]).

[F3] Dehn filling kills the primitive slope $p[\mu]+q[\lambda]$ and glues a solid torus ([[def-oriented-slope-and-knot-dehn-filling]]).

[F4] Seifert–van Kampen identifies the filled fundamental group with the pushout of the exterior and attached solid-torus groups ([[thm-seifert-van-kampen]]; [[thm-group-pushout-as-an-amalgamated-quotient]]).

[F5] A deformation retraction induces mutually inverse isomorphisms on fundamental groups at each basepoint of the retract ([[prop-retracts-inject-fundamental-groups]]).

[F6] The fundamental group of the quotient circle is isomorphic to $(\mathbb Z,+)$ by the degree map ([[thm-fundamental-group-of-the-circle]]); the based homeomorphism $[t]\mapsto e^{2\pi i t}$ identifies it with the unit circle.

[A1] Full AC implies countable choice, the hypothesis of the collar theorem ([[def-axiom-of-choice]]; [[thm-choice-implies-dependent-implies-countable-choice]]).

[F7] Under countable choice, a smooth manifold with boundary has a smooth collar; a collar is a product embedding of the boundary with a half-open interval whose image is a neighbourhood ([[thm-collar-neighborhood-theorem]]; [[def-smooth-collar-of-a-manifold-boundary]]).

## Proof

1.1 Inclusion of the boundary torus into the exterior gives a homomorphism of fundamental groups. Precomposing a representation with this homomorphism is polynomial in matrix entries, so it is a regular map of representation varieties and is equivariant for simultaneous conjugation. [F1, algebra]

1.2 Write the attached solid torus as $V=D^2\times S^1$, let $A=\{0\}\times S^1$, and base at $(0,1)$. The retraction $r(z,w)=(0,w)$ and inclusion $i:A\hookrightarrow V$ satisfy $r\circ i=\operatorname{id}_A$, and the homotopy $((z,w),t)\mapsto((1-t)z,w)$ from $\operatorname{id}_V$ to $i\circ r$ fixes the basepoint. By [F5] and [F6], $\pi_1(V,(0,1))\cong\pi_1(S^1,1)\cong\mathbb Z$. [F5, F6, construct]

1.3 By [A1] and [F7], the exterior boundary has a collar; $V$ has its product collar. Thickening the two pieces across opposite halves of the gluing collar gives an open cover of the filled manifold whose sets retract to $E_K$ and $V$ and whose intersection retracts to the torus. These spaces are path connected, so [F4] identifies the filled fundamental group as their pushout. [A1, F4, F7, construct]

2.1 Pullback along this equivariant map sends conjugation-invariant regular functions to conjugation-invariant regular functions, hence induces the algebraic restriction morphism on affine categorical quotients. [F1, step 1.1]

2.2 Since $\mu,\lambda$ commute, the primitive class $p[\mu]+q[\lambda]$ is represented by $\mu^p\lambda^q$. It maps to the identity in $\pi_1(V)$ because it is the meridian. Complete $(p,q)$ to a unimodular basis of $\mathbb Z^2$ by Bézout; the complementary class has longitude coefficient $\pm1$ on $\partial V$, hence maps to a generator of $\pi_1(V)$ by step 1.2. The pushout from step 1.3 identifies this generator with the image of the complementary class in $\pi_1(E_K)$ and imposes only the relation $\mu^p\lambda^q=1$. Eliminating the generator gives $\pi_1(E_K(p/q))\cong\pi_1(E_K)/\langle\!\langle\mu^p\lambda^q\rangle\!\rangle$. [F3, step 1.2, step 1.3, construct, algebra]

3.1 By [F2], the defining equation of the reduced curve union vanishes on each of its one-dimensional image components. The definition takes only those components, so an isolated image point outside their union is not added as a curve factor. [F2, step 2.1]

3.2 A homomorphism from this quotient is exactly a homomorphism from $\pi_1(E_K)$ that kills $\mu^p\lambda^q$. Since $\rho(\mu)$ and $\rho(\lambda)$ commute, this condition is the matrix equation $\rho(\mu)^p\rho(\lambda)^q=I_2$. [step 2.2, algebra]

4.1 If the two peripheral matrices are simultaneously diagonalized, their product of powers is $\operatorname{diag}(M^pL^q,(M^pL^q)^{-1})$, which is the identity exactly when $M^pL^q=1$. For a merely triangular pair, the diagonal entries still give this necessary equation, but they do not determine the off-diagonal entries of the product; the matrix relation remains the exact test. [given, step 3.2, algebra] ∎

## Diagram

The square records the Seifert–van Kampen pushout from step 1.3. The top arrows are induced by the two boundary inclusions, and the bottom arrows are induced by the gluing into the filled manifold. The diagram summarizes the group maps; the numbered proof establishes the pushout and does not rely on the drawing.

```tikz
\begin{tikzpicture}[>=stealth]
  \node (T) at (0,0) {$\pi_1(T_K)$};
  \node (E) at (3,0) {$\pi_1(E_K)$};
  \node (V) at (0,-2) {$\pi_1(V)\cong\mathbb Z$};
  \node (Y) at (3,-2) {$\pi_1(E_K(p/q))$};
  \draw[->] (T)--node[above] {$i_E$} (E);
  \draw[->] (T)--node[left] {$i_V$} (V);
  \draw[->] (E)--node[right] {$q_E$} (Y);
  \draw[->] (V)--node[below] {$q_V$} (Y);
\end{tikzpicture}
```
