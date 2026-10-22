<!-- new lines at canonical 18 -->
axiom_use: "Full AC is retained as an explicit theorem hypothesis for the externally imported classical hyperbolization and torus-theorem inputs; no optimal weak-choice bound is asserted."

<!-- new lines at canonical 21 -->
  proof: ai-altered

<!-- new lines at canonical 24 -->
    - title: "Matthias Aschenbrenner, Stefan Friedl and Henry Wilton, 3-Manifold Groups"
      url: "https://arxiv.org/pdf/1205.0202"
      locator: "ArXiv survey version, Theorem 1.2 p.7; atoroidality convention and comparison p.9; hyperbolic metric definition p.11; finite-volume convention p.12; Hyperbolization Theorem 1.13 p.13"
    - title: "William P. Thurston, The Geometry and Topology of Three-Manifolds, Chapter 5"
      url: "https://library.slmath.org/nonmsri/gt3m/PDF/5.pdf"
      locator: "Proposition 5.11.1, printed p.116 (PDF p.34), finite-volume cusp decomposition"

<!-- new lines at canonical 49 -->


## Facts & Assumptions

**Given:** The smooth knot exterior $E_K$ and all hypotheses in the Statement, including full AC. Atoroidality here has the embedded-torus meaning of [[def-incompressibility-seifert-fibration-and-jsj-system]].

[F1] **External input — Loop Theorem.** If a subsurface $F$ of the boundary of a compact $3$-manifold $N$ has noninjective $\pi_1(F)\to\pi_1(N)$, an essential simple closed curve in $F$ bounds a properly embedded disk in $N$. Source: Aschenbrenner–Friedl–Wilton, *3-Manifold Groups*, arXiv:1205.0202, Theorem 1.2, p.7.

[F2] **External input — comparison of atoroidality conventions.** For compact orientable irreducible $3$-manifolds with empty or toroidal boundary, the condition that every incompressible embedded torus is boundary-parallel and the condition that every $\pi_1$-injective torus map is homotopic into the boundary agree outside certain Seifert-fibered manifolds. In particular they agree for a manifold which is not Seifert-fibered. Source: the same survey, §1.4, p.9, immediately after its definition of atoroidal. This is the torus-theorem consequence expressly recorded there; it is imported, not reconstructed here.

[F3] **External input — Hyperbolization Theorem.** If $N$ is compact, orientable, irreducible, has empty or toroidal boundary, is atoroidal in the torus-map convention, and has infinite fundamental group, then its interior admits a complete hyperbolic metric. For this empty-or-toroidal-boundary theorem the metric has finite volume. Source: the same survey, Theorem 1.13, p.13, with the definition on p.11 and finite-volume statement/convention on p.12. This imports the complete established hyperbolization result, covering both fibered and nonfibered cases; it does not invoke a conditional deformation theorem to create an initial representation.

[F4] **External input — finite-volume cusp decomposition.** A complete oriented hyperbolic $3$-manifold of finite volume is a compact submanifold bounded by tori together with finitely many horoballs modulo rank-two free abelian parabolic actions. Source: Thurston, *The Geometry and Topology of Three-Manifolds*, Chapter 5, Proposition 5.11.1, printed p.116 (PDF p.34). Thus its noncompact ends are exactly its torus cusps.

The cited statements, their indicated conventions and the short proof of [F4] were read in the actual source PDFs. The full proofs of the Loop Theorem, the torus theorem and general hyperbolization are external inputs; they have not been locally reconstructed or fully reread for this application.

## Proof

1.1 Put $M=E_K$ and $T=\partial M$. By hypothesis $M$ is compact, connected, orientable and irreducible, and $T$ is its single torus boundary component. If $\pi_1(T)\to\pi_1(M)$ had nontrivial kernel, [F1] would supply an essential simple curve in $T$ bounding a proper disk in $M$, contradicting boundary incompressibility. Hence $\pi_1(M)$ contains the injected group $\pi_1(T)\cong\mathbb Z^2$ and is infinite. [given, F1, construct]

1.2 The given embedded-torus atoroidality and the hypothesis that $M$ is not Seifert-fibered allow [F2] to be applied. Therefore every $\pi_1$-injective torus map is homotopic into $\partial M$. All hypotheses of [F3] now hold for this actual $M$, so $\operatorname{int}(M)$ admits a complete finite-volume metric of constant sectional curvature $-1$. This applies to fibered knot exteriors as well as nonfibered ones; no additional non-interval-bundle assumption has been introduced. [given, F2, F3, step 1.1, construct]

1.3 The interior of a compact connected manifold with one connected boundary component has one end: a boundary collar gives a cofinal family of connected complements of compact subsets, namely $T\times(0,\epsilon)$. By [F4], every end of the metric from step 1.2 is a rank-two horoball quotient, so there is exactly one torus cusp. It belongs to the unique original boundary end. This is an existence assertion for a metric on the original interior; no prescribed horosphere scale, meridian–longitude translation vectors, or separately marked peripheral conjugacy is asserted. No conclusion is used outside the four topological hypotheses of the Statement. [given, F4, step 1.2, construct] ∎

## Proof references

[Aschenbrenner, Friedl and Wilton, *3-Manifold Groups*, arXiv version, Theorem 1.2 and §§1.4–1.5, pp.7,9,11–13](https://arxiv.org/pdf/1205.0202)

[Thurston, *The Geometry and Topology of Three-Manifolds*, Chapter 5, Proposition 5.11.1, printed p.116](https://library.slmath.org/nonmsri/gt3m/PDF/5.pdf)

