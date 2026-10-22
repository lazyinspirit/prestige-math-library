# Step 3a reader report — batch 107

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader (`reader-107`)  
Verdict: no confirmed defects; no edits; no blocker.

## Opened inventory

Assigned pages:

- `library/quantum-statistical-mechanics/qsmx-temperley-lieb-models.md` (A page).
- `library/quantum-statistical-mechanics/qsmx-temperley-lieb-models-examples.md` (B page).

Assigned items, read in dependency order:

- `items/def-qsmx-quantum-potts-hamiltonian.md`
- `items/lem-qsmx-potts-finite-gibbs-density.md`
- `items/thm-qsmx-potts-tl-and-hecke.md`
- `items/thm-qsmx-spin-singlet-exchange-interface.md`
- `items/ex-qsmx-potts-two-site.md`

I also read the assigned manifest, reader brief, batch-107 proof contracts and authoring notes, and the cross-batch dependency record. The records were used as navigation and evidence, not as verdicts. Direct mathematical suppliers read included `def-potts-open-chain-clock-shift-representation`, `lem-potts-q2-q3-q4-matrices-satisfy-temperley-lieb`, `def-inner-product-space`, `def-self-adjoint-and-normal-endomorphism`, `def-orthogonal-projection`, `thm-complex-spectral-theorem-for-normal-endomorphisms`, `cor-exponential-reciprocal-and-positivity`, `cor-exponential-is-a-bijection-onto-positive-reals`, `def-trace-of-an-endomorphism`, `def-temperley-lieb-generator-presentation`, `def-normalized-type-a-hecke-algebra-and-its-bar-involution`, and `thm-the-symmetric-group-has-the-coxeter-presentation`. I checked the current batch-48 supplier `thm-nrqmx-spin-half-temperley-lieb` and its complete proof for the interface used by the spin-exchange item.

The six A-page prerequisites were checked for page identity, status, classification where present, and inventory: `qsm-interacting-exact-models`, `temperley-lieb-towers-and-physics-models`, `nrqmx-exchange-representations`, `temperley-lieb-diagram-algebra-and-catalan-basis`, `kazhdan-lusztig-bases-polynomials-and-cells`, and `braided-and-symmetric-monoidal-categories`. The B page requires the assigned A page. Their unrelated page prose is not used as a premise in the assigned item proofs. The four pinned imported Potts/Temperley–Lieb/Hecke items named above were byte-checked against `research/math-imports.json`; all four hashes match.

## Item review

- `def-qsmx-quantum-potts-hamiltonian` — pass. It specifies the finite space, inner product convention, basis, local operators, open boundary, real coefficients, adjoint convention, and finite spectral construction. The `justified_by` Gibbs lemma proves the claimed self-adjointness and positivity needed for the normalized density; its dependency on this definition is the permitted well-definedness pattern.
- `lem-qsmx-potts-finite-gibbs-density` — pass. Each local $P_j$ and $D_{j,j+1}$ is an orthogonal projection, so real linear combinations give a self-adjoint finite matrix. The spectral weights are finite positive real numbers for every real finite $\beta$; the projections sum to the identity; and the finite-dimensional trace is strictly positive. Dividing by that trace gives a positive semidefinite trace-one matrix. The zero-coupling, $\beta=0$, and one-site cases are correctly handled.
- `thm-qsmx-potts-tl-and-hecke` — pass. The cited Potts relation lemma supplies the quadratic, adjacent triple-product, and distant-commutation relations. Substitution into $g_i=qI-e_i$ gives the stated Hecke quadratic; expansion gives the braid relation with coefficient $-q^2+q\delta-1=0$. At $Q=4$, $g_i^2=I$, and the Coxeter presentation yields the stated $S_{2L}$ action. The claim does not overstate faithfulness, semisimplicity, or unitarity.
- `thm-qsmx-spin-singlet-exchange-interface` — pass. The current batch-48 supplier states and proves $e_i=I-s_i=2P_i$ and the loop-weight-two relations. The $q=1$ identity is an operator equality on the spin-half space; the finite exchange-sum formula follows by substituting $s_i=I-e_i$, including the empty-sum $N=1$ case. No identification with the $Q=4$ Potts space is made.
- `ex-qsmx-potts-two-site` — pass. The projection ranks and $P_1D_{12}P_1=Q^{-1}P_1$ are correct. The displayed off-diagonal matrix entry is $-\kappa/\sqrt Q\ne0$. For $\beta\ne0$ the spectral map $\mu\mapsto\exp(-\beta\mu)$ is injective, so a diagonal Gibbs density would force every computational basis vector to be an eigenvector of $H$, contradicting that entry. The $\beta=0$ and $\kappa=0$ exclusions are accurately explained. This is an exact finite-dimensional mathematical example, not an empirical report.

The batch contracts' cited facts, step-to-derivation mappings, and boundary worksheets agree with the current proofs. No missing proof prerequisite, inaccurate citation, ill-formed claim, or overstrong title or statement was confirmed.

## Source and diagram review

The [Nichols paper, §§2.1.2–2.1.4, equations (2.4), (2.6)–(2.10)](https://arxiv.org/pdf/hep-th/0509069) supports the cited open Potts clock/shift representations, loop weights, selected $q$ values, and uniform Hamiltonian convention. The local weighted-Hamiltonian and finite spectral claims are established by the assigned definition and proof, not attributed to Nichols. [Penneys, *Exercises in Quantum Algebra*, Chapter 2 §§2.1.1–2.1.3](https://people.math.osu.edu/penneys.2/archive/QuantumAlgebra.pdf) distinguishes algebraic and diagrammatic normalizations and describes rectangle stacking with loop scalar $d$; the assigned diagrams use the unnormalised generator convention with $\delta$ loop value. [de Gier–Pyatov, §2.1, Definition 1, equation (2.1)](https://webdoc.sub.gwdg.de/ebook/serien/e/mpi_mathematik/2008/5.pdf) gives the same Hecke quadratic, braid and distant-commutation relations for $q\ne0$. [Ikhlef–Jacobsen–Saleur, §2, equation (2)](https://arxiv.org/pdf/0901.4685) gives the spin-half singlet-projector normalization $e=nP^{(0)}$, hence $e=2P^{(0)}$ at $q=1$; the swap identity is proved locally by the current batch-48 supplier. [Arovas, §7.4, “The variational principle,” lines 1352–1377](https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Book:_Thermodynamics_and_Statistical_Mechanics_(Arovas)/07:_Mean_Field_Theory_of_Phase_Transitions/7.04:_Variational_Density_Matrix_Method) supports finite normalized Boltzmann weights and positive weights, but is not used to prove the noncommuting matrix result. These source passages contain no reported observation used by the assigned items.

Both TikZ diagrams in `thm-qsmx-potts-tl-and-hecke` were checked against the remarks and algebra. The Temperley–Lieb diagram shows the adjacent cap and cup with the declared loop convention. The two braid diagrams use bottom-to-top word order, place the right-to-left strand over at each crossing, and have crossing orders $(i,i+1,i)$ and $(i+1,i,i+1)$, respectively. The proofs do not rely on either diagram.

## Page verdicts and closeout

- `qsmx-temperley-lieb-models` — pass. Its draft physics classification and four A-page item placements match the assigned manifest; all six required page IDs resolve. It has no body summary under the current frontmatter-only page convention.
- `qsmx-temperley-lieb-models-examples` — pass. Its draft physics classification, companion relation, requirement on the assigned A page, and single example placement match the manifest. It has no body summary under the current page convention.

No item or page was edited. No defect remains to escalate or report as an uneditable finding. Because there was no repair, post-edit reflow, precheck, or proof-layout run was not applicable. No empirical claim or statistical inference is made in this batch.
