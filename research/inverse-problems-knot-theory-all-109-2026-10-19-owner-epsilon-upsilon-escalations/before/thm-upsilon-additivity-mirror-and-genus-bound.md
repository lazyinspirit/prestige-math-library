---
id: thm-upsilon-additivity-mirror-and-genus-bound
kind: theorem
title: "Upsilon additivity, mirror symmetry, and four-ball genus bound"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-admissible-pointed-heegaard-floer-data
  - def-grid-diagram-for-an-oriented-knot
  - thm-grid-homology-independent-of-grid-and-equals-knot-floer
  - lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing
  - def-knot-floer-filtration-and-tau
  - thm-tau-is-concordance-invariant-and-four-ball-genus-bound
  - lem-tau-connected-sum-filtered-tensor-product
  - lem-upsilon-nu-minus-four-ball-bound
  - def-epsilon-from-filtered-knot-floer-complex
  - def-upsilon-function-from-filtered-complex
  - lem-upsilon-filtered-tower-splitting
  - def-countable-choice
  - def-axiom-of-choice
  - def-knot-connected-sum-and-prime-knot
  - def-reverse-mirror-of-oriented-knot
  - lem-knot-floer-duality-and-filtration-swap
  - def-smooth-and-topological-slice-genus
dependency_level: 11
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "The finite cycle-minimax argument uses no choice. The cobordism-map route in the four-ball bound uses the ACω analytic branch. The full-AC plan edge is retained separately and is not treated as implied by ACω."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Peter S. Ozsvath, Andras I. Stipsicz, and Zoltan Szabo, Concordance homomorphisms from knot Floer homology, §§2–5"
      url: "https://arxiv.org/pdf/1407.1795"
      locator: "Propositions 1.2, 1.4–1.6, 1.8–1.9 and Theorem 1.11; proofs in §§4–5"
    - title: "Charles Livingston, Notes on the knot concordance invariant Upsilon, §§4–9"
      url: "https://www.maths.gla.ac.uk/~mpowell/Upsilon-revised.pdf"
      locator: "Weighted filtrations, finite minimax, connected sums, duality, and smooth four-ball genus bound"
---

## Statement

For every smooth oriented knot $K\subset S^3$, the function $\Upsilon_K:[0,2]\to\mathbb R$ defined by the finite cycle minimax is continuous and piecewise linear with finitely many breakpoints, satisfies $\Upsilon_K(0)=0$ and $\Upsilon_K(t)=\Upsilon_K(2-t)$, and has right derivative $\Upsilon'_K(0+)=-\tau(K)$. For smooth oriented knots $K,J$ and $t\in[0,2]$,
$$ \Upsilon_{K\#J}(t)=\Upsilon_K(t)+\Upsilon_J(t),\qquad \Upsilon_{-K}(t)=-\Upsilon_K(t), $$
where $-K$ is the reverse mirror, the inverse under connected sum in the smooth concordance group. If $g_4^{\mathrm{sm}}(K)$ is the minimum genus of a smooth properly embedded compact connected oriented surface in the four-ball with boundary $K$, then
$$ |\Upsilon_K(t)|\le t\,g_4^{\mathrm{sm}}(K)\qquad(0\le t\le1). $$

## Statement references

[[def-upsilon-function-from-filtered-complex|Finite cycle-minimax definition and filtration convention]]

[[lem-tau-connected-sum-filtered-tensor-product|The current filtered tensor statement; its proof leaves the filtered Künneth comparison open]]

[[lem-upsilon-nu-minus-four-ball-bound|The auxiliary nu-minus genus estimate required for the Upsilon bound]]

[Ozsvath, Stipsicz, and Szabo, *Concordance homomorphisms from knot Floer homology*, §§2–5](https://arxiv.org/pdf/1407.1795)

[Livingston, *Notes on the knot concordance invariant Upsilon*, §§4–9](https://www.maths.gla.ac.uk/~mpowell/Upsilon-revised.pdf)

## Facts & Assumptions

**Given:** A smooth oriented knot Floer complex with its finite bifiltered basis, normalized Maslov-zero total-homology generator, and the $F_t$ cycle-minimax convention.

[F1] [[def-upsilon-function-from-filtered-complex]]: $\nu_t$ is the minimum of $F_t(z)$ over Maslov-zero cycles representing the normalized generator, and $\Upsilon_K(t)=-2\nu_t$; its finite candidate set makes the function piecewise linear.

[A1] [[lem-tau-connected-sum-filtered-tensor-product]] (present, proof incomplete): its Statement gives the filtered tensor product, but its Proof leaves the neck-stretching/Künneth equivalence open.

[A2] [[lem-upsilon-nu-minus-four-ball-bound]] (present on this A page, proof incomplete): it defines $\nu^-$ by the maximal Maslov grading of a non-torsion class in the Alexander-filtered minus subcomplex and states $0\le\nu^-(K)\le g_4^{\mathrm{sm}}(K)$; its nonnegativity and genus proofs remain open.

[A3] [[def-smooth-and-topological-slice-genus]]: the intended bound is the smooth four-ball genus branch; no locally flat/topological surface branch is used.

[A4] [[def-knot-floer-filtration-and-tau]]: the current definition gives a diagramwise threshold and standard unknot normalization, but defers diagram/surface independence and does not supply the minus-complex interface used to define $\nu^-$. 

[F2] [[lem-knot-floer-duality-and-filtration-swap]]: mirror duality negates both filtration coordinates, and conjugation exchanges the algebraic and Alexander filtrations. Its current proof remains conditional on the analytic input stated there.

[F3] [[def-reverse-mirror-of-oriented-knot]]: the reverse mirror is the reflected knot with its knot orientation reversed, using the fixed orientation-reversing reflection from the connected-sum convention.

[A5] [[thm-tau-is-concordance-invariant-and-four-ball-genus-bound]] (present, proof conditional): it states tau is a knot invariant and has the right derivative convention, but its diagram-independence, tensor, and cobordism proof obligations remain open.

[A6] [[thm-grid-homology-independent-of-grid-and-equals-knot-floer]]: its current Statement asserts the normalized filtered knot complex is independent of grid and agrees with the analytic model, but the carrier has `provenance.proof: not-supplied`. Knot-model invariance remains an unresolved input.

[A7] [[lem-upsilon-filtered-tower-splitting]] (present, proof incomplete): its Statement supplies the filtered rank-one tower splitting and the identification of its maximal $t$-grading with $-2\nu_t$; the current local proof has not fully justified the filtration-preserving induction and regrading comparison.

## Proof

1.1 By [F1], each fixed Maslov-zero cycle has filtration equal to the maximum of finitely many affine functions of $t$, and there are finitely many such cycles. Thus $\Upsilon_K$ is piecewise linear with finitely many breakpoints. Reading this calculation as a knot invariant uses the model comparison asserted in [A6], whose proof is not supplied. At $t=0$, $F_0$ is the algebraic filtration; the normalization in [F1] says the tower generator first appears at level zero, so $\nu_0=0$ and $\Upsilon_K(0)=0$. Exchanging the two bifiltration coordinates sends $F_t$ to $F_{2-t}$; [F2] therefore gives $\Upsilon_K(t)=\Upsilon_K(2-t)$. [given, F1, A6, F2, algebra]

1.2 Under [A1], the knot Floer complex of $K\#J$ is filtered-chain-homotopy equivalent to the tensor product, with differential $\partial_K\otimes1+1\otimes\partial_J$ and tensor filtration given by the sum of the two $F_t$ filtrations. If the filtered splitting in [A7] is available for each factor, their rank-one tower generators tensor to a tower generator at filtration $\nu_t(K)+\nu_t(J)$. The other tensor summands have no non-torsion class mapping to the total generator by the Künneth decomposition. Thus $\nu_t(K\#J)=\nu_t(K)+\nu_t(J)$, and multiplying by $-2$ gives additivity of $\Upsilon$. This calculation is conditional because [A1] leaves its filtered Künneth comparison open and [A7] does not yet have a completed local proof. [given, F1, A1, A7, algebra]

1.3 By [F2], the reverse-mirror complex is the filtered dual with both filtration coordinates negated. Under [A7], the Upsilon value is the maximal $t$-grading of the unique non-torsion tower; dualizing that tower reverses its grading, while acyclic summands contribute no tower. Hence $\Upsilon_{-K}(t)=-\Upsilon_K(t)$. This conclusion is conditional on the local tower-splitting and regrading claim in [A7]. [given, F1, F2, A7, algebra]

1.4 For sufficiently small $t>0$, only cycles with maximal algebraic coordinate zero can minimize $F_t$: any cycle with a term at algebraic level at least one has a positive $t=0$ gap, and the finite set of Maslov-zero candidate cycles gives a positive interval before such a cycle can overtake the minimum. Among level-zero cycles representing the normalized generator, the least Alexander level is $\tau(K)$ by [A4]. The slope of their $F_t$ filtration at zero is half this level. Taking the finite minimum and multiplying by $-2$ gives $\Upsilon'_K(0+)=-\tau(K)$, with the knot-level interpretation conditional on [A5]. [given, F1, A4, A5, algebra]

1.5 Let $s=\nu^-(K)$ as defined in [A2], and put $g=g_4^{\mathrm{sm}}(K)$. Since $\delta(\mathcal A(K,s))=0$, there is a non-torsion homology class of Maslov grading zero represented by a cycle $z$ in $\mathcal A(K,s)$. For every finite basis generator $x_r$, all sufficiently large powers $U^n x_r$ satisfy $A(x_r)-n\le s$; hence localizing the inclusion $\mathcal A(K,s)\hookrightarrow C^-(K)$ gives the full $\mathrm{CFK}^{\infty}(K)$ complex and induces an isomorphism on localized homology. The non-torsion class $[z]$ therefore maps to a nonzero degree-zero element of $H_*(C^-(K))\otimes_{\mathbb F_2[U]}\mathbb F_2[U,U^{-1}]=\mathbb F_2[U,U^{-1}]$, whose only nonzero degree-zero element is the normalized generator. Thus $z$ represents that generator in $C^-(K)$ and in $C(K)$. Each term of $z$ has $i\le0$ and $j\le s$, so $F_t(z)=(1-t/2)i+(t/2)j\le ts/2$ for $0\le t\le1$. Therefore $\nu_t(K)\le ts/2\le tg/2$ by [A2], and $\Upsilon_K(t)\ge-tg$. A linear reflection extending the fixed reflection of $S^3$ to $B^4$ sends any smooth genus-$g$ surface bounded by $K$ to a genus-$g$ surface bounded by its mirror; reversing the surface orientation changes that boundary to the reverse mirror. Applying this diffeomorphism in both directions gives $g_4^{\mathrm{sm}}(-K)=g$. Apply the same threshold argument to $-K$ and use step 1.3 to obtain $\Upsilon_K(t)\le tg$. Combining both inequalities proves the bound, conditional on the unresolved estimate in [A2]. [given, A2, A3, F3, step 1.3, algebra]

## Unresolved proof obligations

The actual batch-94 tensor and tau theorem carriers are present but their neck-stretching, diagram-independence, and cobordism proofs remain open. The auxiliary $\nu^-$ genus bound [A2] is a local statement whose nonnegativity and large-surgery/cobordism proofs are not supplied; the tau cobordism lemma does not prove this stronger input. The batch-93 triangle-map and naturality items also have `provenance.proof: not-supplied`. The filtered tower-splitting/regrading claim [A7], the tensor Künneth argument in 1.2, and its compatibility with filtered cancellation remain conditional. These exact inputs remain unresolved, so this theorem is escalated.
