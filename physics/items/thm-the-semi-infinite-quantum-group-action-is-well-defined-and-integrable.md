---
id: thm-the-semi-infinite-quantum-group-action-is-well-defined-and-integrable
kind: theorem
title: "The semi-infinite action on the Fock space is well defined and the Fock space is an integrable $U_q(\\widehat{\\mathfrak{sl}}_e)$-module"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 18
deps: [lem-the-fock-space-tail-estimates-give-q-adic-vanishing-and-finiteness,
       def-semi-infinite-q-wedge-fock-space-and-q-adic-topology,
       thm-the-fock-space-node-formulas-satisfy-the-quantum-affine-relations,
       lem-semi-infinite-wedges-are-indexed-by-partitions-and-give-node-action-formulas,
       def-quantum-weight-module-and-integrability,
       prop-integrable-quantum-highest-weight-modules-are-semisimple,
       def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Kashiwara-Miwa-Petersen-Yung, Perfect crystals and q-deformed Fock spaces"
      url: "https://arxiv.org/pdf/q-alg/9603025"
      locator: "sec. 4.3, printed pp. 24-30: Props. 4.3.1-4.3.9 and Lemma 4.3.10 (q-adic convergence, module structure, integrability)."
    - title: "Masaki Kashiwara, Tetsuji Miwa and Eugene Stern, Decomposition of q-deformed Fock spaces, arXiv:q-alg/9508006"
      url: "https://arxiv.org/pdf/q-alg/9508006"
      locator: "sec. 1.4, printed pp. 8-11: the action (51)-(53) on $F(m)$ and Prop. 1.4."
    - title: "Eugene Stern, Semi-infinite wedges and vertex operators, arXiv:q-alg/9504013"
      url: "https://arxiv.org/pdf/q-alg/9504013"
      locator: "sec. 4.1-4.3, printed pp. 10-15: evaluation modules and the thermodynamic limit."
---

## Statement

The stable prefix operators on the charge-$M$ algebraic wedge direct limit give
a well-defined integrable action of the affine quantum algebra, proved from the
node formulas and all defining relations of
[[thm-the-fock-space-node-formulas-satisfy-the-quantum-affine-relations]].
Boundary-normalized infinite coproduct expressions converge $q$-adically and in this type-A model
have finite stabilised outputs; no two-sided-unbounded evaluation statement is
imported. On the vacuum $E_i\varnothing=0$, $F_i$ creates the single node of
residue $M$ and $K_i$ acts by $q^{\delta_{i\equiv M}}$. The wedge product of a
finite prefix with its correctly charged tail is $U_q$-linear with the fixed
formulas

$$E(v\wedge u)=Ev\wedge K_i^{-1}u+v\wedge Eu,\qquad F(v\wedge u)=Fv\wedge u+K_iv\wedge Fu .$$

With the declared use of the Axiom of Choice only in the general integrable
decomposition, the finite-weight upper cone of $F$ is a locally weight-finite
direct sum of simple integrable highest weight modules; completeness does not
mean finitely many constituents.

## Facts & Assumptions

**Given:** The charge-$M$ Fock space with its topology, the node operators, the tail estimates, and the semisimplicity/decomposition supplier.

[F1] Deep insertions vanish exactly and the period operator has a finite geometric inverse on every positive-size (nonvacuum) label component; it fixes the nonzero vacuum, so $1-T$ has no inverse on the vacuum line; loop-commuting nonzero-weight endomorphisms insert to zero deeply ([[lem-the-fock-space-tail-estimates-give-q-adic-vanishing-and-finiteness]]).

[F2] The node operators satisfy all affine relations and are integrable on the charge-$0$ Fock space; the stable prefix action gives the node formulas for every charge ([[thm-the-fock-space-node-formulas-satisfy-the-quantum-affine-relations]], [[lem-semi-infinite-wedges-are-indexed-by-partitions-and-give-node-action-formulas]]).

[F3] The integrable highest weight category with finite-dimensional chosen label spaces and support contained in a finite union of downward cones is semisimple: its objects are locally weight-finite direct sums of simple integrable highest weight modules. The decomposition uses the Axiom of Choice as declared by the supplier ([[prop-integrable-quantum-highest-weight-modules-are-semisimple]], [[def-quantum-weight-module-and-integrability]], [[def-axiom-of-choice]]).

## Proof

**Proof technique:** show each coproduct expression stabilises on a finite prefix, check the wedge product formula on the finite prefix, and apply semisimplicity with the declared choice.

1.1 Stabilized, normalized coproducts. For a charge-$M$ partition choose a prefix of length $N$ extending beyond its nonvacuum rows and all finitely many node outputs. The stable-prefix computation in [F2] uses $F_i^{[N]}$, $q^{-\delta_{i\equiv M-N}}E_i^{[N]}$, $q^{\delta_{i\equiv M-N}}K_i^{[N]}$ and $q^{\Omega_{M-N}(d)}K_d^{[N]}$, followed by tail attachment. Here $[N]$ denotes the finite coproduct action. Each has the cutoff-independent node value proved in that supplier; any deeper individual insertion vanishes by [F1]. Thus these normalized expressions stabilize exactly and converge in the separated $q$-adic topology. The unnormalized finite $E_i$ and toral coproducts are not claimed to converge. For charge $M$, the node coefficients are the charge-zero coefficients with colors shifted by $M$, so the mixed commutator and Serre proofs of [F2] apply under that relabelling. The full toral operators are assigned by the displayed label weights, which shift by $\pm\alpha_i$ and therefore satisfy every toral-action relation, including the degree direction. [F1, F2, given, algebra]

2.1 The wedge product formulas. Split a sufficiently deep finite prefix at length $r$, with the right part representing a charge-$(M-r)$ tail $u$. Its artificial boundary is again $M-N$. Write $b=\delta_{i\equiv M-N}$. The normalized right torus is $K_i u=q^bK_i^{[N-r]}u$, and its normalized raising operator is $E_i u=q^{-b}E_i^{[N-r]}u$. Multiplying the finite split coproduct by $q^{-b}$ therefore gives $E_i(v\wedge u)=E_iv\wedge K_i^{-1}u+v\wedge E_iu$. The finite lowering coproduct needs no scalar correction, giving $F_i(v\wedge u)=F_iv\wedge u+K_iv\wedge F_iu$. For the torus the two labels add, since $\Omega_M=\sum_{k=1}^r\mathrm{wt}(u_{M-k+1})+\Omega_{M-r}$ by the vacuum recurrence; the degree normalization agrees at the common cutoff as well. Stabilization from step 1.1 and linearity transport these finite identities through the local wedge quotient, proving quantum-group linearity. On the vacuum the only addable node has residue $M$, all raising operators vanish, and $K_i$ acts by $q^{\delta_{i\equiv M}}$. [step 1.1, F2, algebra]

3.1 Integrability and decomposition. For a fixed color, [F2] puts each basis vector in a finite two-vertex tensor cube; a vector is a finite linear combination, so both generators of that color are locally nilpotent on it. The charge-$M$ label is $\Omega_M-\sum_i m_i(\lambda)\alpha_i$, so the support lies in the single downward cone $\Omega_M-Q^+$. Since the simple roots of the full affine datum are independent, a weight fixes all residue counts $m_i$ and hence the size $\sum_i m_i$; only finitely many partitions have that size, proving finite-dimensional label spaces. Thus all the finite-cone and finite-weight hypotheses of [F3] hold, and $F$ is a locally weight-finite direct sum of simple integrable highest weight modules. Choice enters only through [F3]. Characters and multiplicities are computed later from the actual crystal highest vertices. [step 2.1, F2, F3, given, algebra]

4.1 Conclusion. The stable prefix operators give a well-defined integrable affine action on the charge-$M$ Fock space with the displayed wedge product formulas, $q$-adic convergence and finite stabilisation, and the finite-weight upper cone is a locally weight-finite direct sum of simple integrable highest weight modules, with the Axiom of Choice used only as declared. [step 1.1, step 2.1, step 3.1] ∎

