---
id: thm-sutured-instanton-khi-rank-detects-unknot
kind: theorem
title: Sutured instanton knot homology detects the unknot
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-knot-exterior
  - def-knot-meridian-and-preferred-longitude
  - thm-knot-exterior-homology-and-longitude
  - lem-knot-exterior-is-irreducible
  - lem-nontrivial-knot-exterior-boundary-incompressible
  - def-instanton-knot-homology-and-canonical-class
  - def-singular-instanton-knot-and-sutured-closure-data
  - lem-instanton-knot-complex-asd-analytic-foundations
  - lem-singular-earring-instanton-homology-of-the-unknot-is-integrally-rank-one
  - def-axiom-of-choice
  - def-countable-choice
axiom_use: Assumes the declared AC branch through singular instanton, excision,
  and knot-exterior homology suppliers.
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: P. B. Kronheimer and T. S. Mrowka, Knots, sutures and excision, §§7.1–7.6
      url: https://arxiv.org/pdf/0807.4891v2
    - title: P. B. Kronheimer and T. S. Mrowka, Knots, three-manifolds and instantons,
        §§4.3 and 5.1
      url: https://math.pku.edu.cn/puremath/docs/2018-10/20181010175415114589.pdf
    - title: P. B. Kronheimer and T. S. Mrowka, Khovanov homology is an
        unknot-detector, §§1.1–1.2 and 5.4
      url: https://people.math.harvard.edu/~kronheim/khovanov-unknot.pdf
---

## Statement

Assume full AC. For every smooth knot $K\subset S^3$, the rational sutured instanton knot homology $KHI(K;\mathbb Q)$ is finite-dimensional and has dimension at least one; it has dimension one if and only if $K$ is the unknot. Moreover, excision gives an isomorphism $I^\natural(K;\mathbb Q)\cong KHI(K;\mathbb Q)$.

## Statement references

[[def-singular-instanton-knot-and-sutured-closure-data|Sutured closure and KHI eigenspace]]

[[lem-knot-exterior-is-irreducible|Irreducibility of a knot exterior]]

[[lem-nontrivial-knot-exterior-boundary-incompressible|Boundary incompressibility for a nontrivial knot]]

[Kronheimer–Mrowka, *Knots, sutures and excision* (2008), Definition 7.13, Proposition 7.16, and §§7.5, 7.8](https://arxiv.org/pdf/0807.4891v2)

[Kronheimer–Mrowka, *Knots, three-manifolds and instantons* (2018), Proposition 4.6 and §5.1](https://math.pku.edu.cn/puremath/docs/2018-10/20181010175415114589.pdf)

[Kronheimer–Mrowka, *Khovanov homology is an unknot-detector* (2011), Proposition 1.4 and §5.4](https://people.math.harvard.edu/~kronheim/khovanov-unknot.pdf)

## Facts & Assumptions

**Given:** Full AC, a smooth classical knot $K\subset S^3$, its two oppositely oriented meridional sutures, and the chosen admissible closure from the preceding definition. Remaining established gauge-theoretic inputs below are explicitly imported under the run-specific permission in CLAUDE.md §12, not claimed as locally reconstructed proofs.

[F1] The local singular analytic construction gives the finite integral earring complex, its square-zero differential and continuation independence with the declared relative grading and overall sign convention. [[lem-instanton-knot-complex-asd-analytic-foundations]]

[F2] The local integral unknot calculation gives $I^\natural(U;\mathbb Z)\cong\mathbb Z$, hence $\dim_{\mathbb Q}I^\natural(U;\mathbb Q)=1$. Its generator is specified only up to orientation sign. [[lem-singular-earring-instanton-homology-of-the-unknot-is-integrally-rank-one]]

[F3] **External ordinary determinant-$w$ surface input.** For a closed oriented three-manifold $Y$ and a Hermitian line bundle $w$ with odd pairing on an integral surface class, use the determinant-one gauge group of a $U(2)$ lift with fixed determinant $w$. Its admissible instanton homology and commuting operators $\mu(R),\mu(y)$ are defined. For $S^1\times R$, $g(R)\ge1$, with $c_1(w)$ dual to $S^1$, the ordinary-$w$ product calculation has the spectrum in Kronheimer–Mrowka, *Knots, sutures and excision*, Proposition 7.1; the common extreme eigenspace $I_*(S^1\times R\mid R)_w$ is one-dimensional by Proposition 7.4. On the ordinary point-$+2$ kernel the extreme surface factor is simple: the paragraph immediately after Proposition 7.4 explicitly states, for every $N\ge1$,
$$\ker(\mu(y)-2)\cap\ker(\mu(R)-(2g(R)-2))^N=\ker(\mu(y)-2)\cap\ker(\mu(R)-(2g(R)-2)).$$
This holds for the admissible $Y,R,w$ of Definition 7.3, not only product manifolds; no general diagonalizability is asserted. Corollary 7.2 and Proposition 7.5 give the surface bounds on a general admissible $Y$, including the case where $w$ pairs evenly with the other surface; Corollary 7.6 gives the simultaneous generalized-eigenspace decomposition. These are imported published all-genus ordinary-$w$ results, not consequences inferred here from an altered $u$ or $uw$ module. Locators: arXiv:0807.4891v2, §§7.1–7.2, PDF pp. 52–56.

[F4] **External excision and closure input.** Theorem 7.7 of the same source gives excision for two oriented embedded positive-equal-genus surfaces, with equal odd $c_1(w)$ evaluations, an orientation-compatible gluing diffeomorphism and its chosen determinant-bundle lift; when $Y$ is connected the two surfaces are required not to be homologous, and for two components one lies in each. The disconnected group is interpreted as a tensor product. Definition 7.10 and the closure-independence argument following it establish that the sutured group is independent, up to isomorphism, of the allowed auxiliary surface and marked gluing choices. The closure has $c_1(w)$ dual to the standard circle through the fixed auxiliary point. Genus one is permitted. In the meridional knot case Definition 7.13 identifies the annular-auxiliary closure with the torus closure; its group is the generalized surface-$0$ subspace of the ordinary point-$+2$ kernel used in the repaired Definition. By the exact extreme-surface identity in [F3], with $g(\bar R)=1$, it is also precisely the ordinary simultaneous $(\mu(\bar R),\mu(y))=(0,2)$ eigenspace. Definition 7.13's following paragraph identifies this group with the ordinary point-$+2$ half, not the doubled full Floer group. Locators: arXiv:0807.4891v2, Theorem 7.7, Definition 7.10 and its following argument, Definition 7.13, PDF pp. 56–61. The source works over $\mathbb C$ for convenience; the rational version is explicitly allowed in the detector paper's §1.1, PDF p. 3.

[F5] **External decomposition, nonvanishing and genus/rank input.** For a balanced sutured manifold decomposed along a surface $S$ with no closed components, and with the closed components of $S\cap V$ parallel oriented boundary-coherent simple closed curves for each component $V$ of $R(\gamma)$, Proposition 7.11 gives the decomposed sutured instanton group as a direct summand (the precise hypotheses of Theorem 6.8, PDF p. 48); Theorem 7.12 states that a taut balanced sutured manifold has nonzero sutured instanton homology. For a classical genus-$g$ knot, Proposition 7.16 gives $KHI(K,g)\ne0$, with the genus decomposition and its opposite extreme as in §7.6. In particular a nontrivial classical knot has $\dim KHI(K)>1$. Locators: arXiv:0807.4891v2, §§7.5–7.6, PDF pp. 59–64, and Kronheimer–Mrowka, *Khovanov homology is an unknot-detector*, §1.1, PDF p. 3, which explicitly records this rank consequence and permits $\mathbb Q$ coefficients. These decomposition/nonvanishing conclusions are imported established results; no local cap/module or taut-hierarchy proof is asserted here.

[F6] **External rational singular-to-sutured bridge.** For a based smooth knot in $S^3$, Proposition 1.4 of *Khovanov homology is an unknot-detector* states $I^\natural(K;\mathbb Q)\cong KHI(K;\mathbb Q)$. Its §5.4, Proposition 5.7, uses the actual earring link $K\cup L$ and its connecting $w_2$ arc; the two tubular-boundary tori are glued exchanging meridians and longitudes and matching the arc endpoints. The excision has a Hopf-link factor $\mathbb Z$ and the complementary torus closure. The determinant-one group and the larger gauge quotient are distinguished there: the full ordinary knot group has twice the rank, and the point-$+2$ summand is $KHI$. The stated rational bridge includes this normalization. Locators: Proposition 1.4, PDF p. 3, and §5.4, Proposition 5.7 and its following paragraphs, PDF pp. 74–75. No integral bridge or distinguished canonical vector is inferred.

## Proof

**Given:** The local singular constructions [F1]–[F2] and the explicitly imported published results [F3]–[F6].

1.1 In the chosen closure, the standard marked circle meets $\bar R$ once, so $c_1(w)$ evaluates oddly on $\bar R$. The ordinary admissible theory in [F3] therefore applies. The torus has genus one, so the extreme-surface identity in [F3] gives $\ker(\mu(y)-2)\cap\ker\mu(\bar R)^N=\ker(\mu(y)-2)\cap\ker\mu(\bar R)$ for every $N\ge1$. Taking the union over $N$ therefore identifies the Definition's generalized surface-$0$/ordinary point-$+2$ subspace with the source's ordinary simultaneous $(0,2)$ eigenspace $I_*(\bar Y\mid\bar R)_w$. This is the exact torus convention in [F4], rather than an assumption of semisimplicity. It is finite-dimensional, and [F4] identifies the allowed closures up to isomorphism. This proves well-definedness of the rational group used here, without choosing a canonical basis or confusing it with the doubled full ordinary group. [F3, F4]

2.1 Apply [F6] with the same based earring, connecting arc and determinant normalization. It gives the required rational isomorphism $I^\natural(K;\mathbb Q)\cong KHI(K;\mathbb Q)$. The local complex in [F1] is exactly its source. [F1, F6, step 1.1]

2.2 For a nontrivial smooth classical knot, the published genus/rank consequence in [F5] gives $\dim_{\mathbb Q}KHI(K;\mathbb Q)>1$. This is the established nonvanishing/decomposition input, explicitly imported rather than deduced from the already resolved singular complex or integral cube. [F5, step 1.1]

3.1 For the unknot $U$, combine [F2] with step 2.1 to obtain $\dim_{\mathbb Q}KHI(U;\mathbb Q)=1$. This retains the local integral unknot calculation; the external input is the excision bridge, not a replacement for that calculation. [F2, step 2.1]

4.1 The unknot and nontrivial cases exhaust the knots in the statement. Steps 3.1, 2.2 show that the finite-dimensional group always has dimension at least one and has dimension one exactly for the unknot. Step 2.1 supplies the additional isomorphism claimed in the statement. [step 1.1, step 2.1, step 3.1, step 2.2] ∎

## Source boundary

The original Statement is retained. Its previously missing ordinary surface, closure/excision and taut/genus inputs are now explicitly supplied as published external results under this run's expanded permission. They are not locally reconstructed gauge-theoretic proofs or new reviews of preserved suppliers. The singular analytic and integral unlink computations remain the existing local results. All coefficient and half-group conventions above are rational; no sign-independent canonical element, arbitrary integral eigenspace splitting or surgery theorem follows from this proof.
