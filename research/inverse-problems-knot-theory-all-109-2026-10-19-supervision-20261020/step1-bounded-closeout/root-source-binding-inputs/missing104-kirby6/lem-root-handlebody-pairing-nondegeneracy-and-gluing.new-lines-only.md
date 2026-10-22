<!-- new canonical lines 20–20 -->
  proof: literature-derived

<!-- new canonical lines 29–34 -->
    - title: "BHMV, Topological Quantum Field Theories Derived from the Kauffman Bracket, Topology 34 (1995), exact external inputs"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bhmv.pdf"
      locator: "Section 2 pp.897–898; Proposition 1.9 p.891; Theorem 1.4 p.887; Corollary 4.10 and Theorem 4.11 p.909"
    - title: "Gilmer–Masbaum, Maslov index, Lagrangians, Mapping Class Groups and TQFT, arXiv:0912.4706v3"
      url: "https://arxiv.org/pdf/0912.4706v3"
      locator: "Section 2 pp.4–6, equation (1), and Section 11 pp.23–25"

<!-- new canonical lines 61–61 -->
[F2] [[lem-root-handlebody-spine-state-space-finite-generation]] supplies the finite admissible spine spanning set via its explicitly labelled external BHMV input.

<!-- new canonical lines 64–67 -->

[F4] **External input — perfect pairing and sewing.** BHMV, Theorem1.4 p.887, property(F) on p.886, Proposition1.9 p.891, and Theorem4.11 p.909: in this even-root theory the radical quotient is finite free with unimodular dual pairing, the admissible spine states form a basis with unit diagonal norms in the double pairing, and the universal gluing maps satisfy the TQFT axioms. Proposition1.9 permits the complementary handlebody giving $S^3$, rather than assuming the self-double and $S^3$ pairings have the same matrix. Their normalization is the $Z_p$ normalization explicitly fixed in [F1]. Only perfectness/basis/sewing at this actual convention is imported.

[F5] **External input — actual weighted variant.** Gilmer–Masbaum, arXiv:0912.4706v3, §2 equation(1) pp.4–6 and §11 pp.23–25, states the colored TQFT with Lagrangians and integer weights and one-weight multiplier $\nu=\kappa^3$ in BHMV notation. The finite sign comparison $\mu_{GM}=-\mu_{Wall}$ is as recorded in the Kirby lemma, so its composition is exactly that of [F3]. The source states rational Lagrangians. For the real Lagrangians of [F3], take the rational handlebody-kernel reference on each marked surface and transport by the weight-zero identity cylinder to its specified real Lagrangian; the reverse cylinder is its inverse because $\mu(L,L',L)=0$. Conjugating morphisms by these cylinders is a functor to the rational-reference category, with the integer weights computed by [F3], so the imported functor extends to these real objects. This is a finite categorical transport, not an assumption that every real Lagrangian is rational.

<!-- new canonical lines 75–77 -->
2.1 By [F4], the radical quotients for the two orientations are finite-dimensional dual spaces and their normalized pairing is perfect. This is stronger than left nondegeneracy by the definition of a radical alone. Choose bases $v_i,w_j$ and let $B_{ij}$ be their pairing matrix. Its inverse gives the coevaluation tensor $\sum_{i,j}(B^{-1})_{ji}v_i\otimes w_j$; contraction with $B$ on either side is the identity. This finite linear-algebra identity is exactly the sewing contraction in the imported gluing theorem and is independent of the chosen dual bases. [F1, F2, F4, step 1.1, algebra]

2.2 The imported weighted gluing in [F5] gives the prescribed anomaly factor, with weight law [F3]. Its parameter is the cube of the selected sixth root, not an independently chosen square root with an unchecked sign. The real-Lagrangian transport in [F5] respects composition because the intervening reference cylinders cancel. Thus the inverse-pairing sewing maps satisfy precisely the registered weighted law. No unweighted anomaly cancellation or positivity of every complex-root Hermitian form is asserted. [F3, F4, F5, step 2.1, algebra] ∎
