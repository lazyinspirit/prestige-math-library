<!-- new lines at canonical 21 -->
axiom_use: Retains full AC for the externally imported gauge-theoretic theorem.
  The rational inequality and direct application require no additional choice.

<!-- new lines at canonical 25 -->
  proof: ai-altered

<!-- new lines at canonical 28 -->
    - title: "P. B. Kronheimer and T. S. Mrowka, Dehn surgery, the fundamental group and SU(2), Mathematical Research Letters 11 (2004), 741–754, Theorem 1, p. 741"
      url: https://doi.org/10.4310/mrl.2004.v11.n6.a3

<!-- new lines at canonical 65 -->
[Kronheimer–Mrowka, published Theorem 1, p. 741](https://doi.org/10.4310/mrl.2004.v11.n6.a3)

<!-- new lines at canonical 67 -->
## Facts & Assumptions

<!-- new lines at canonical 69 -->
**Given:** Full AC, a nontrivial smooth knot $K\subset S^3$, and coprime integers $p,q$ with $|p|=1$ and $q\ne0$.

<!-- new lines at canonical 71 -->
[F1] **External input.** For a nontrivial knot $K\subset S^3$ and rational surgery coefficient $r$ with $|r|\le2$, Kronheimer–Mrowka's published Theorem 1 states that the surgery group admits a homomorphism to $SU(2)$ with noncyclic image (and consequently is not cyclic). Source: *Dehn surgery, the fundamental group and SU(2)*, Mathematical Research Letters **11** (2004), 741–754, Theorem 1, p. 741, DOI [10.4310/mrl.2004.v11.n6.a3](https://doi.org/10.4310/mrl.2004.v11.n6.a3). This is an imported theorem, not a locally reconstructed gauge-theoretic proof.

<!-- new lines at canonical 73 -->
[F2] Rational coefficient $p/q$ denotes filling with meridian $p[\mu]+q[\lambda]$ in the meridian and preferred-longitude convention; simultaneous sign change leaves the unoriented slope unchanged. [[def-oriented-slope-and-knot-dehn-filling]] [[def-knot-meridian-and-preferred-longitude]]

<!-- new lines at canonical 75 -->
[A1] Full AC is retained as assumed in the Statement. [[def-axiom-of-choice]]

## Proof

1.1 Since $q$ is a nonzero integer, $|q|\ge1$. Thus $r=p/q$ is rational and satisfies $|r|=1/|q|\le1\le2$. By [F2], the manifold in the Statement is precisely the coefficient-$r$ surgery appearing in [F1]. Both signs of $r$ are covered by its absolute-value hypothesis. [given, F2, algebra]

1.2 Apply [F1] to this nontrivial knot and this coefficient. It gives a homomorphism $\pi_1(Y_{p/q})\to SU(2)$ with noncyclic image, as required. [given, A1, F1, step 1.1] ∎

## External input and reading limits

The published primary PDF was obtained from the International Press journal archive. Theorem 1 on printed p. 741 (PDF p. 1) was read directly, including its exact nontrivial-knot and $|r|\le2$ hypotheses and its noncyclic-image conclusion. The slope definitions and $[pa+qb]$ filling convention on pp. 743 and 745–746 were inspected, together with the application and nonvanishing discussion on pp. 752–753. These source readings identify the imported theorem and its convention; they do not constitute a local proof audit of its gauge theory or of all its cited prerequisites.

The paper explicitly says on p. 741 that its proof avoids explicit instanton Floer homology and the Floer exact triangle, using holonomy perturbations instead. Accordingly, this item's historical identifier does not assert a general surgery-triangle or rank theorem: its full Statement is the numerator-one representation conclusion proved above from the external input. The retained singular-instanton complex and integral resolution cube keep their existing scope; neither is relabelled as supplying this closed-surgery result. Ordinary KHI nonvanishing and varying-meridian representation paths are separate inputs and are not inferred here.

