# Quantum statistical mechanics — successor research scaffold

Research design dated 2026-10-19. These are future proof and authoring contracts, not production items or accepted proofs. All 14 existing A/B identities and all original 144 research interfaces survive unchanged, including the audited Fock and sparse-oracle bridge and the corrected same-page purification dependency. baseline.json binds exact rows, authoritative sources and current carriers. Existing production claims take their actual published hypotheses, not broader historical proposals. No quantum-computing session or supplier source is edited.

States and observables are mathematical objects until an explicit physical adoption. Units are SI: beta=(k_B T)^-1 in inverse joules, hbar in joule seconds, Hamiltonians in joules, physical time in seconds. Dimensionless natural units are local declared coordinate conventions with energy scale E0 and time scale hbar/E0. Matrix entropy S is dimensionless; multiply by k_B for physical entropy. Finite systems, normal trace-class systems, and quasilocal infinite systems are distinct domains. Infinite volume does not have a global density by default. Existing qsm-infinite-spin-physical-models and qsm-dt-effective-bath postulates supply any physical interpretation, with empirical applicability left conditional.

Every definition and statement below is uninterrupted. Reference links follow separately, one per line. Pure algebraic results are mathematical even though their reading pages belong to the existing physics category. B pages are leaves. Detailed proof routes for deeper established results are explicit local-authoring obligations; no source citation is a substitute for the future proof.

## qsmx-operator-algebra-prerequisites — Von Neumann closure, standard vectors and modular analytic tools

Earlier A/P pages: qsm-quasilocal-states, unbounded-self-adjoint-operators-and-stones-theorem, measurable-hilbert-fields-and-direct-integral-operators, relations-functions-and-quotients, direct-integral-decomposition-and-type-i-groups, compact-self-adjoint-hilbert-schmidt-and-trace-class-operators, banach-alaoglu-goldstine-and-krein-milman.

### def-qsmx-von-neumann-algebra

Kind: definition; domain: mathematics.

Assume the Axiom of Choice inherited from the canonical operator-algebra suppliers. For a complex Hilbert space H, a concrete von Neumann algebra is a unital star subalgebra M of B(H) equal to its double commutant M double-prime. A vector Omega is cyclic if M Omega is dense and separating if x Omega=0 forces x=0. A normal functional preserves suprema of bounded increasing positive nets. These notions concern the chosen representation.

[[lem-qsm-state-gns-construction]]

[[def-von-neumann-algebra-and-commutant]]

[[def-axiom-of-choice]]

Proof / construction route: Define commutants, weak and strong operator topologies by matrix coefficients and pointwise norms; verify commutants are strongly closed; no assertion of a separating GNS vector for arbitrary states.

Source sections: witten-3.

### lem-qsmx-bicommutant-and-commutant-cyclicity

Kind: lemma; domain: mathematics.

Assume the Axiom of Choice inherited through the stated supplier chain. For a unital star subalgebra R of B(H), its strong closure is R double-prime. A vector is cyclic for M if and only if it is separating for M prime.

[[def-qsmx-von-neumann-algebra]]

[[thm-double-commutant-theorem-for-concrete-von-neumann-algebras]]

Proof / construction route: Reuse the exact canonical double-commutant/closure theorem, retaining AC. Reuse the exact canonical double-commutant/closure theorem, retaining AC. For bicommutant, project onto the closure of R acting on a finite tuple in H^n; its diagonal amplified invariant subspace has commuting projection, forcing any double-commutant element into each strong neighborhood. For duality project onto closure of M Omega; the projection belongs to M prime, and use separating to force projection I. Prove both directions, with exact finite amplification not a single-vector argument.

Source sections: witten-3.

### lem-qsmx-closed-antilinear-polar-calculus

Kind: lemma; domain: mathematics.

Assume the Axiom of Choice inherited through the stated supplier chain. A densely defined closable antilinear operator S has closed closure; its polar decomposition is S=J |S|, with |S|=(S* S)^(1/2) and J antiunitary when S is injective with dense range. For S0(x Omega)=x* Omega, Omega cyclic separating for M, S0 is closable.

[[def-qsmx-von-neumann-algebra]]

[[lem-qsmx-bicommutant-and-commutant-cyclicity]]

[[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]

Proof / construction route: Reduce antilinear polar decomposition by a fixed conjugation to the linear closed-operator polar theorem, proving that theorem by the graph norm and spectral theorem. For closability pair a convergent x_n* Omega against dense y prime Omega and commute; x_n Omega to zero makes all pairings zero. Establish adjoint/core identities by graph closure, never merely by equality on dense domains.

Source sections: witten-3.

### lem-qsmx-von-neumann-predual

Kind: lemma; domain: mathematics.

Assume the Axiom of Choice inherited through the stated supplier chain. Assume AC. For a concrete von Neumann algebra M on H, let M_perp be the closed subspace of trace-class operators T with Tr(Tx)=0 for all x in M. The quotient S1(H)/M_perp is an isometric predual of M under trace pairing; its dual ball is weak-star compact. Vector functionals are normal, and positive functionals in this predual preserve bounded increasing positive suprema.

[[def-qsmx-von-neumann-algebra]]

[[def-trace-class-operator]]

[[thm-banach-alaoglu]]

[[def-axiom-of-choice]]

Proof / construction route: Prove bounded-operator/trace-class duality: restriction to rank-one operators gives a bounded sesquilinear form and its unique bounded operator, while singular-value expansion gives trace norm control. Annihilator bipolar identifies (S1/M_perp)* with the weak-star closed space M; show WOT-closed M is weak-star closed because trace-class coefficients are norm limits of finite rank coefficients on bounded sets, and use bounded separation. Normality follows monotone convergence on positive trace decompositions; positive normal functional representation requires the converse trace extension as a separate within-lemma Hahn–Banach/positive-extension argument if used. Hiai predual convention is matched only after this proof. Banach–Alaoglu supplies compactness, with ultrafilter lemma inherited from AC.

Source sections: hiai-21.

### Leaf companion qsmx-operator-algebra-prerequisites-examples

### ex-qsmx-nonfaithful-gns-vector

Kind: example; domain: mathematics.

Assume the Axiom of Choice inherited through the stated supplier chain. The defining representation of M_n(C), n>1, has cyclic nonzero vectors but none is separating; a faithful density instead has a cyclic separating Hilbert-Schmidt vector.

[[def-qsmx-von-neumann-algebra]]

Proof / construction route: Choose a nonzero projection killing the vector; for faithful density use invertibility of its square root.

Source sections: witten-4.

## qsmx-modular-equilibrium — Modular automorphisms and physical-time KMS conversion

Earlier A/P pages: qsmx-operator-algebra-prerequisites, qsm-kms-equilibrium, banach-alaoglu-goldstine-and-krein-milman, the-analytic-hahn-banach-theorem, fourier-transform-convolution-and-approximate-identities, the-residue-theorem, relations-functions-and-quotients, qsm-states-ensembles.

### def-qsmx-standard-modular-data

Kind: definition; domain: mathematics.

Assume the Axiom of Choice inherited through the stated supplier chain. Let M act on H with normalized cyclic separating Omega. Let S be the closure of S0(x Omega)=x* Omega, and write S=J Delta^(1/2). Define sigma_t(x)=Delta^(it) x Delta^(-it), t dimensionless. Delta is positive injective, with possibly unbounded inverse; its imaginary powers are bounded unitaries.

[[lem-qsmx-closed-antilinear-polar-calculus]]

Proof / construction route: Functional calculus defines imaginary powers on positive spectrum; no boundedness of Delta itself asserted.

Source sections: witten-3.

### lem-qsmx-modular-resolvent-core

Kind: lemma; domain: mathematics.

Assume the Axiom of Choice inherited through the stated supplier chain. For the closed Tomita operators S for M and F for M prime, F=S*, J Delta J=Delta^-1, and the modular analytic core yields Delta^(it) M Delta^(-it)=M and J M J=M prime.

[[def-qsmx-standard-modular-data]]

[[thm-banach-alaoglu]]

[[thm-hahn-banach-dominated-extension]]

[[thm-l-one-fourier-inversion]]

[[thm-residue-theorem-null-homologous-cycle]]

[[def-axiom-of-choice]]

[[lem-qsmx-von-neumann-predual]]

Proof / construction route: Author Hiai §2.1 Lemmas 2.5–2.8 in order: (Delta+lambda)^-1 Mprime Omega lies in M Omega for |lambda|=1, lambda!=-1, by weak-star compact convex separation; obtain the two-sided Delta half-power form identity on the joint graph core; spectral cutoffs En=1_[1/n,n](Delta) and a rectangle residue contour prove the cosh-kernel integral inversion; invert its Fourier transform to show J Delta^-it xprime Delta^it J lies in M. At t=0 this gives one inclusion, and the commutant calculation gives equality; applying both time directions gives modular invariance. Finally obtain closure(F0)=S* from J M J=Mprime (Hiai Remark 2.9). This avoids assuming equality of adjoint cores from agreement on a dense set. Every analytic integral bound and separation hypothesis is a local proof obligation; this research route is not acceptance. For the predual used by Hiai, author the explicit quotient S1(H)/M_perp: trace-class pairing identifies its dual with M; finite-rank trace approximants give normality. Weak-star compactness of its dual ball comes from the bound Banach–Alaoglu supplier (ultrafilter lemma follows from AC). Weak-star compact convex separation reduces to finitely many evaluation coordinates and finite-dimensional separation; avoid applying norm separation directly to a weak-star topology. Fourier uniqueness follows from the L1 inversion supplier with 2pi rescaling; dominated scalar matrix coefficients justify operator-valued integrals.

Source sections: hiai-21.

### thm-qsmx-tomita-takesaki

Kind: theorem; domain: mathematics.

Assume the Axiom of Choice inherited through the stated supplier chain. Under the standard modular data, J M J=M prime and sigma is a point-ultraweakly continuous automorphism group. The faithful normal vector state is KMS at inverse temperature one for alpha_t=sigma_(-t), with upper-strip boundary convention F_AB(t)=omega(A alpha_t(B)), F_AB(t+i)=omega(alpha_t(B) A).

[[lem-qsmx-modular-resolvent-core]]

[[def-qsmx-standard-modular-data]]

Proof / construction route: Use the core intertwining lemma for algebra preservation; spectral theorem gives ultraweak continuity. On Gaussian entire analytic elements use S=J Delta^1/2 to establish boundary exchange and strip norm bound, extend by normality. Do not assert norm continuity on all M; restrictions to suitable norm-continuous C-star subalgebras use the earlier C-star KMS definition. Use Hiai Theorem 2.14 for the full Gaussian-smearing graph-core proof of KMS, reversing its beta=-1 convention to alpha_t=sigma_-t.

Source sections: hiai-21, hiai-22.

### thm-qsmx-finite-modular-density

Kind: theorem; domain: mathematics.

Assume the Axiom of Choice inherited through the stated supplier chain. On Hilbert-Schmidt matrices with left M_n action and Omega=rho^(1/2), rho>0 of trace one, J X=X*, Delta X=rho X rho^-1, sigma_t(A)=rho^(it) A rho^(-it). For rho=e^(-beta H)/Z, physical alpha_s=e^(isH/hbar) A e^(-isH/hbar) equals sigma_(-s/(beta hbar)).

[[def-qsmx-standard-modular-data]]

[[lem-qsm-matrix-state-calculus]]

Proof / construction route: On matrix units in an eigenbasis, Delta has eigenvalues p_i/p_j. Check J Delta^1/2(A rho^1/2)=A* rho^1/2. Scalar Z cancels in conjugation. This proves both signs and units directly independently of infinite-algebra proof.

Source sections: witten-4.

### Leaf companion qsmx-modular-equilibrium-examples

### ex-qsmx-modular-is-not-physical-time

Kind: example; domain: mathematics.

Assume the Axiom of Choice inherited through the stated supplier chain. For a faithful two-level density diag(p,1-p), modular frequency is log(p/(1-p)); it specifies no energy or clock until beta and hbar and a Hamiltonian are assigned.

[[thm-qsmx-finite-modular-density]]

Proof / construction route: Compute off-diagonal conjugation; scaling beta rescales the inferred energy gap.

Source sections: witten-4.

## qsmx-entropy-entanglement — Entropy inequalities, recovery boundaries and thermal entanglement

Earlier A/P pages: qsm-states-ensembles, quantum-information-measures, quantum-relative-entropy-data-processing-and-strong-subadditivity, qsm-dt-channels.

### def-qsmx-information-conventions

Kind: definition; domain: mathematics.

For finite tensor factors use dimensionless S=-Tr rho log rho and D with support inclusion or infinity. I(A:B)=S_A+S_B-S_AB and I(A:C|B)=S_AB+S_BC-S_B-S_ABC. Physical entropy is k_B S.

[[def-it-von-neumann-entropy]]

[[def-it-finite-dimensional-quantum-relative-entropy]]

Proof / construction route: Adopt exact root support conventions; no continuum entropy difference of infinities.

Source sections: it-local.

### thm-qsmx-cmi-and-channel-dpi

Kind: theorem; domain: mathematics.

Every finite state has I(A:C|B)>=0. For every CPTP map Phi, D(Phi rho||Phi sigma)<=D(rho||sigma), including support failure in the extended-real sense.

[[def-qsmx-information-conventions]]

[[thm-it-finite-strong-subadditivity]]

[[thm-it-quantum-relative-entropy-partial-trace-data-processing]]

[[thm-qsm-dt-choi-kraus]]

Proof / construction route: SSA supplies first assertion. From Kraus operators construct finite Stinespring isometry V=sum_j K_j tensor |j>; prove D invariant under isometries by spectral support calculus and apply partial-trace DPI. No Petz equality/recovery theorem inferred from monotonicity alone.

Source sections: it-local.

### thm-qsmx-thermal-mutual-information-bound

Kind: theorem; domain: mathematics.

For finite H=H_A+H_B+H_boundary and beta>0 Gibbs rho, I(A:B)_rho <=2 beta ||H_boundary||.

[[def-qsmx-information-conventions]]

[[thm-qsm-finite-gibbs-variational]]

Proof / construction route: Compare Gibbs free energy with rho_A tensor rho_B: local energy terms agree, entropy gain is I, hence beta^-1 I<=Tr H_boundary(rho_A tensor rho_B-rho)<=2||H_boundary||. This is a finite-temperature area bound when the boundary interaction norm grows like area.

Source sections: naaijkens.

### Leaf companion qsmx-entropy-entanglement-examples

### ex-qsmx-bell-and-classical-information

Kind: example; domain: mathematics.

A Bell state has I(A:B)=2 log 2; its computational-basis dephasing has I(A:B)=log 2, while both marginals are I/2.

[[def-qsmx-information-conventions]]

Proof / construction route: Diagonalize the rank-one Bell density and rank-two dephasing; compute spectra.

Source sections: it-local.

## qsmx-lieb-robinson-spectral-flow — Lieb–Robinson locality, clustering and gapped spectral transport

Earlier A/P pages: qsm-finite-range-spin-dynamics, qsmx-operator-algebra-prerequisites.

### def-qsmx-summable-interaction-norm

Kind: definition; domain: mathematics.

On Z^d with graph metric choose F(r)=(1+r)^(-d-1), F_a(r)=e^(-ar)F(r). Require ||Phi||_F_a=sup_x,y F_a(d(x,y))^-1 sum_{X contains x,y}||Phi(X)|| finite. A C1 path additionally has uniform finite norm for |X| partial_s Phi(X); an isolated finite-volume spectral band is separated by gamma>0 uniformly in s and an explicitly fixed exhaustion.

[[def-qsm-bounded-finite-range-interaction]]

Proof / construction route: Prove summability and convolution estimate sum_z F(d(x,z)) F(d(z,y))<=C_F F(d(x,y)) by splitting at half the distance; finite-range bounded interactions satisfy the norm.

Source sections: spectralflow-4.

### thm-qsmx-weighted-lieb-robinson

Kind: theorem; domain: mathematics.

For disjoint finite supports X,Y and weighted interaction, ||[alpha_t(A),B]|| <=(2||A||||B||/C_F)(exp(2 C_F ||Phi||_F_a |t|/hbar)-1) sum_{x in X,y in Y} F_a(d(x,y)), uniformly in volume.

[[def-qsmx-summable-interaction-norm]]

[[lem-qsm-finite-range-commutator-path-bound]]

Proof / construction route: Iterate the interaction-picture commutator integral, bound n-step paths by C_F^(n-1) times endpoint weight, and sum time-simplex factors |t|^n/n!. Finite-range dynamics is existing supplier; summable extension is obtained by Cauchy boundary estimate with summable tails.

Source sections: spectralflow-4, naaijkens.

### lem-qsmx-filtered-spectral-generator

Kind: lemma; domain: mathematics.

For C1 finite-volume H(s) and isolated band separated by gamma, choose real integrable odd W_gamma with Fourier convention W_hat(omega)=integral W(t)e^(it omega)dt=i/omega for |omega|>=gamma. Then D(s)=integral W_gamma(t)e^(itH(s)) Hprime(s)e^(-itH(s))dt is self-adjoint and Pprime=i[D,P]. Here spectral integration uses hbar=1 and dimensionless energies after a stated energy scale.

[[def-qsmx-summable-interaction-norm]]

Proof / construction route: Construct W via smooth compactly supported frequency cutoff equal one near zero: W_hat=i(1-chi)/omega; prove integrable rapidly decreasing tails by integration by parts. In an energy eigenbasis D_mn=i Hprime_mn/(E_m-E_n) across the gap; differentiating HP=PH gives Pprime_mn=-Hprime_mn/(E_m-E_n) for m outside,n inside, hence i[D,P]. Diagonal blocks vanish in Pprime.

Source sections: spectralflow-2.

### thm-qsmx-gapped-spectral-flow

Kind: theorem; domain: mathematics.

For finite-range C1 spin paths on Z^d with uniform isolated ground bands, consistent increasing volumes, and the uniform gap and derivative bounds above, the filtered finite-volume flows have a quasi-local thermodynamic automorphism limit carrying the limiting ground-state sets into each other.

[[lem-qsmx-filtered-spectral-generator]]

[[thm-qsmx-weighted-lieb-robinson]]

Proof / construction route: Conditional expectation onto balls decomposes D into telescoping shell interactions; combine LR exponential cone with W tails to obtain a summable subexponential interaction norm, apply the time-dependent commutator iteration, then boundary Cauchy convergence and inverse-flow convergence. Carry states by dual action and pass local ground-energy inequalities. Full local proof obligations are precisely BMNS Theorems 4.8,5.2,5.5 under the stated finite-range specialization. A gap at one endpoint does not supply the path gap.

Source sections: spectralflow-4, spectralflow-5.

### Leaf companion qsmx-lieb-robinson-spectral-flow-examples

### cex-qsmx-gap-not-automatic

Kind: counterexample; domain: mathematics.

For one spin H(s)=(1-2s)Z the excitation gap is 2|1-2s| and closes at s=1/2 despite gapped endpoints.

[[def-qsmx-summable-interaction-norm]]

Proof / construction route: Compute eigenvalues plus/minus (1-2s).

Source sections: spectralflow-2.

## qsmx-matrix-product-states — Schmidt truncation, transfer operators and parent Hamiltonians

Earlier A/P pages: qsmx-entropy-entanglement, qsm-quasilocal-states, pure-and-mixed-states-ensembles-and-schmidt-decomposition.

### def-qsmx-mps-and-transfer

Kind: definition; domain: mathematics.

An open MPS has amplitudes l* A1^i1 ... AN^iN r with compatible finite bond dimensions. A translation invariant tensor A^i in M_D(C) is injective at L if products A^i1...A^iL span M_D(C); its transfer map E(X)=sum_i A^i X A^i*. Normalize states only when the squared norm is positive.

[[thm-qc-schmidt-decomposition]]

Proof / construction route: Define all bond boundaries, physical bases, CP transfer and blocked tensor; no universal injectivity assumed.

Source sections: perez-2, perez-3.

### alg-qsmx-schmidt-mps-truncation

Kind: algorithm; domain: mathematics.

Input a normalized finite tensor with exact coefficients and integer rank caps D_k>=1. Sweep bonds from left to right using exact SVD, retain the largest D_k singular values of the current unnormalized remainder, absorb the retained singular matrix into the right factor, and output the unnormalized MPS and recorded discarded squared norms delta_k. Resolve ties by fixed lexicographic basis and return norm-zero flag if required before optional normalization.

[[def-qsmx-mps-and-transfer]]

[[thm-qc-schmidt-decomposition]]

Proof / construction route: Procedure definition; finite number of sweeps and finite spectral decompositions.

Source sections: perez-2.

### thm-qsmx-schmidt-mps-error

Kind: theorem; domain: mathematics.

The exact sweep terminates in N-1 SVD steps; its output phi obeys ||psi-phi||²<=sum_k delta_k for discarded squared norms measured during that sweep. Every bipartition Schmidt rank of an exact MPS is at most its bond dimension and its entropy is at most log D at that cut.

[[alg-qsmx-schmidt-mps-truncation]]

[[def-qsmx-mps-and-transfer]]

Proof / construction route: Orthogonal projector at each sweep removes components in nested retained left subspaces; discarded vectors are mutually orthogonal after lifting, giving Pythagoras. Bond factorization bounds Schmidt rank; entropy maximum at the uniform rank-D spectrum follows scalar relative entropy. Distinguish current-sweep losses from original-state Schmidt tails.

Source sections: perez-2.

### thm-qsmx-primitive-transfer-clustering

Kind: theorem; domain: mathematics.

If E has simple eigenvalue 1, positive faithful left/right fixed points normalized to pairing one, and all other eigenvalues have modulus <r<1, then connected infinite-chain correlations of fixed local observables are bounded by C_AB r^n for any r strictly above that spectral radius.

[[def-qsmx-mps-and-transfer]]

Proof / construction route: Use finite Jordan normal form to bound E^n-P by C r^n; contractions at the supports give correlation difference. Constants depend on tensors/supports, no unjustified diagonalizability. Parent local kernel is the image of the blocked map; uniqueness/gap requires a separate intersection/martingale proof before use.

Source sections: perez-3, perez-4.

### Leaf companion qsmx-matrix-product-states-examples

### ex-qsmx-ghz-noninjective

Kind: example; domain: mathematics.

Diagonal tensors A0=diag(1,0), A1=diag(0,1) generate GHZ superpositions on rings and a transfer map with two fixed diagonal projections; connected Z correlations do not decay.

[[def-qsmx-mps-and-transfer]]

Proof / construction route: Contract products; only all-zero/all-one amplitudes survive and E fixes both diagonal matrix units.

Source sections: perez-3.

## qsmx-topological-lattice — Toric-code Hamiltonians and local indistinguishability

Earlier A/P pages: qsm-quasilocal-states, qsmx-lieb-robinson-spectral-flow.

### def-qsmx-toric-cellular-hamiltonian

Kind: definition; domain: mathematics.

For a finite connected cellulation of a closed orientable genus-g surface with qubits on edges, let A_v be product of X on incident edges and B_f product of Z on boundary edges with incidence modulo two. H=sum_v J_v(I-A_v)/2+sum_f K_f(I-B_f)/2, J_v,K_f>0 energy units. Use a regular square torus for geometric distance and size estimates.

[[def-qsm-local-spin-algebras]]

Proof / construction route: Define face and vertex incidence over F2 including multiplicities; XZ=-ZX gives commuting vertex/face terms because mod-two boundary has zero vertex boundary.

Source sections: kitaev-1.

### thm-qsmx-toric-ground-space

Kind: theorem; domain: mathematics.

The toric Hamiltonian is positive frustration free; its ground dimension is 2^(2g), and its gap is at least min(J_v,K_f). On a uniform square torus its exact first excitation cost is 2 min(J,K).

[[def-qsmx-toric-cellular-hamiltonian]]

Proof / construction route: Independent vertex constraints number |V|-1 and independent face constraints |F|-1 by connectedness and dual connectedness. Stabilizer projector trace: each nonidentity Pauli has trace zero, so dimension 2^(E-V-F+2)=2^(2g). Joint eigenvalues give lower gap bound; global product constraints require defects in pairs, and an edge string realizes the exact uniform threshold.

Source sections: kitaev-1.

### thm-qsmx-toric-strings-and-local-tests

Kind: theorem; domain: mathematics.

For the square L by L torus, closed primal Z and dual X strings commute or anticommute according to mod-two intersection. Any operator supported in a contractible disk whose complement supports both independent homology cycles has scalar compression to the ground space.

[[thm-qsmx-toric-ground-space]]

Proof / construction route: Check XZ sign at each crossing. Expand local operator in Pauli basis. Terms anticommute with a stabilizer have zero compression; surviving disk-supported cycles are boundaries or coboundaries, hence products of stabilizers and compress to scalars. This proves exact unperturbed local indistinguishability without asserting stability under arbitrary perturbations.

Source sections: kitaev-1.

### Leaf companion qsmx-topological-lattice-examples

### ex-qsmx-toric-defect-pair

Kind: example; domain: mathematics.

A primal open Z string flips exactly its two endpoint A_v eigenvalues and has energy J_endpoint1+J_endpoint2. A dual X string flips endpoint face defects.

[[thm-qsmx-toric-ground-space]]

[[thm-qsmx-toric-strings-and-local-tests]]

Proof / construction route: Interior incidence is even; endpoint incidence odd.

Source sections: kitaev-1.

## qsmx-quantum-double — Finite-group Hopf algebra and lattice quantum-double sectors

Earlier A/P pages: qsmx-topological-lattice, qsm-quasilocal-states, maschkes-theorem-and-complete-reducibility.

### def-qsmx-finite-group-double

Kind: definition; domain: mathematics.

For finite G define basis delta_h tensor g, multiplication (delta_h tensor g)(delta_k tensor l)=1_{h=gkg^-1}(delta_h tensor gl), coproduct Delta(delta_h tensor g)=sum_ab=h (delta_a tensor g) tensor (delta_b tensor g), and involution (delta_h tensor g)*=delta_(g^-1 h g) tensor g^-1.

[[def-qsm-local-spin-algebras]]

Proof / construction route: Check multiplication associativity by conjugation indicators; check coproduct compatibility by decomposing conjugated products; identify unit sum_h delta_h tensor e, counit 1_{h=e}, antipode delta_(g^-1 h^-1 g) tensor g^-1, and verify Hopf identities on basis. These finite formulas, not a generic formal quantum group, are the model.

Source sections: kitaev-3.

### thm-qsmx-double-lattice-projectors

Kind: theorem; domain: mathematics.

On oriented lattice edge spaces C[G], vertex gauge action sends outgoing g to xg and incoming g to gx^-1; A_v averages x in G and B_f projects to oriented face product e. The A_v,B_f are commuting orthogonal projections; their sum of complements is a positive frustration-free Hamiltonian on a closed connected cellulation.

[[def-qsmx-finite-group-double]]

Proof / construction route: Gauge transformations at distinct vertices commute as left/right edge actions; flatness is invariant under conjugation at a basepoint; finite averaging is an orthogonal projector. Sum uniformly over pure-gauge edge configurations to obtain nonzero common range. Nonabelian order follows oriented face convention.

Source sections: kitaev-3.

### thm-qsmx-double-sector-labels

Kind: theorem; domain: mathematics.

Irreducible finite-dimensional complex representations of D(G) are indexed by conjugacy classes C and irreducible representations pi of the centralizer Z_G(c), with dimensions |C| dim pi; sum of their squared dimensions is |G|².

[[def-qsmx-finite-group-double]]

[[thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order]]

Proof / construction route: Decompose by delta_h idempotents; group factors transport fibers within a conjugacy orbit. Choose coset representatives and induce the centralizer representation, prove invariance and irreducibility by fiber projection. Conversely any simple module has one orbit and irreducible stabilizer fiber. Finite-group character orthogonality needed for squared-dimension sum can be proved by averaging matrix coefficients and regular representation, not assumed without a local lemma in authoring. No modular functor asserted.

Source sections: kitaev-3.

### Leaf companion qsmx-quantum-double-examples

### ex-qsmx-double-z2

Kind: example; domain: mathematics.

For G=Z2 the four one-dimensional double sectors are two flux labels times two characters. A charge character evaluated on the nontrivial flux is minus one, matching the crossing-string phase.

[[thm-qsmx-double-sector-labels]]

[[thm-qsmx-toric-strings-and-local-tests]]

Proof / construction route: Centralizer equals G; compute both characters. Braiding interpretation is QFT downstream.

Source sections: kitaev-3.

## qsmx-integrable-transfer — Rational Yang–Baxter transfer matrices and Heisenberg charges

Earlier A/P pages: qsm-local-ensemble-bridge, hopf-hecke-and-quantum-symmetry-interfaces.

### def-qsmx-rational-monodromy

Kind: definition; domain: mathematics.

On V=C² and periodic N-site chain, N>=3, R(u)=uI+iP, T_a(u)=R_aN(u)...R_a1(u), t(u)=Tr_a T_a(u). Spectral parameter u is dimensionless and auxiliary trace is the finite matrix trace.

[[def-hh-rational-spectral-r-matrix]]

Proof / construction route: Fix auxiliary and site tensor ordering; t is a polynomial matrix, and regularity R(0)=iP makes t(0)=i^N U for the explicitly oriented cyclic shift U.

Source sections: faddeev-3.

### thm-qsmx-transfer-commutativity

Kind: theorem; domain: mathematics.

For every u,v in C, [t(u),t(v)]=0. In a neighborhood of zero, t is invertible and logarithmic Taylor coefficients commute.

[[def-qsmx-rational-monodromy]]

[[lem-hh-rational-spectral-r-matrix-satisfies-yang-baxter]]

Proof / construction route: Apply YBE at each physical site to obtain R_ab(u-v) T_a(u)T_b(v)=T_b(v)T_a(u)R_ab(u-v). For generic u-v, R invertible with eigenvalues (u-v)+i and (u-v)-i; cyclic auxiliary trace removes R. Extend to all u,v by polynomial identity, including singular spectral differences. Invertibility near zero follows det t(0) nonzero; use local analytic log of t(0)^-1 t(u).

Source sections: faddeev-3.

### thm-qsmx-transfer-heisenberg-charge

Kind: theorem; domain: mathematics.

For the stated orientation i tprime(0)t(0)^-1=sum_j P_(j,j+1), with site N+1=1. Hence the real exchange Hamiltonian H=J sum_j P_(j,j+1)+c I commutes with every t(u); P=(I+X tensor X+Y tensor Y+Z tensor Z)/2.

[[thm-qsmx-transfer-commutativity]]

Proof / construction route: Differentiate one R factor at a time at zero, use Rprime(0)=I and R(0)=iP, and transport the omitted swap through the cyclic shift. The N terms give (1/i) P_j,j+1 in tprime t^-1. Pauli identity checked on four basis vectors fixes the coupling normalization. Exclude N=1,2 counting conventions.

Source sections: faddeev-3.

### def-qsmx-regular-bethe-data

Kind: definition; domain: mathematics.

For homogeneous spin-half XXX monodromy shifted to L(u)=R(u-i/2), take reference all-up and off-diagonal creation B(u). Roots lambda_j are pairwise distinct, exclude shifted denominator poles, and satisfy ((lambda_j+i/2)/(lambda_j-i/2))^N=product_(k!=j)(lambda_j-lambda_k+i)/(lambda_j-lambda_k-i); retain only nonzero vectors product_j B(lambda_j)|up>.

[[thm-qsmx-transfer-commutativity]]

Proof / construction route: RTT commutation proves the on-shell eigenvalue formula by cancelling unwanted terms. Any singular roots, zero Bethe vectors, descendant states and completeness require separate treatment; no thermodynamic Bethe ansatz follows solely from finite regular equations.

Source sections: faddeev-4.

### Leaf companion qsmx-integrable-transfer-examples

### ex-qsmx-one-magnon

Kind: example; domain: mathematics.

For H=J sum P on N>=3 sites, the one-down-spin Fourier state at k=2pi m/N has energy J(N-2+2 cos k).

[[thm-qsmx-transfer-heisenberg-charge]]

Proof / construction route: For basis |j>, sum P sends it to (N-2)|j>+|j-1>+|j+1>; Fourier diagonalization proves the dispersion. This independently tests shift and normalization.

Source sections: faddeev-4.

## qsmx-temperley-lieb-models — Temperley–Lieb, Hecke normalization and quantum Potts chains

Earlier A/P pages: qsm-interacting-exact-models, temperley-lieb-towers-and-physics-models, nrqmx-exchange-representations.

### def-qsmx-quantum-potts-hamiltonian

Kind: definition; domain: mathematics.

For Q=2,3,4 let P_j=|+><+| at site j and D_j,j+1=sum_a |aa><aa|. Set e_(2j-1)=sqrt(Q) P_j and e_(2j)=sqrt(Q) D_j,j+1. An open-chain H=-sum_i J_i e_i with real energy couplings is Hermitian.

[[def-potts-open-chain-clock-shift-representation]]

Proof / construction route: Use exact root clock/shift conventions; all factors finite. Gibbs density exists at every finite real beta.

Source sections: potts-local.

### thm-qsmx-potts-tl-and-hecke

Kind: theorem; domain: mathematics.

The above e_i obey TL loop delta=sqrt(Q). If q+q^-1=delta and g_i=qI-e_i, then g_i satisfies braid relations and (g_i-qI)(g_i+q^-1 I)=0. At Q=4,q=1, the representation factors through the symmetric group.

[[def-qsmx-quantum-potts-hamiltonian]]

[[lem-potts-q2-q3-q4-matrices-satisfy-temperley-lieb]]

Proof / construction route: Quadratic: e²=delta e gives (g-q)(g+q^-1)=-e(delta I-e)=0. Expand braid difference: (e_i-e_j)(-q²+q delta-1)=0 using e_i e_j e_i=e_i. At q=1, g_i²=I and braid/Coxeter relations give symmetric-group action. Quotient representation need not be faithful or unitary for complex q.

Source sections: potts-local.

### thm-qsmx-spin-singlet-exchange-interface

Kind: theorem; domain: mathematics.

For spin-half open chain e_i=I-P_i,i+1=2 singlet projector satisfies TL delta=2 and sum J_i P_i,i+1=(sum J_i)I-sum J_i e_i. At q=1 the Hecke generators g_i coincide with the swaps.

[[thm-nrqmx-spin-half-temperley-lieb]]

Proof / construction route: Reuse NRQM exact singlet proof; algebraic substitution fixes scalar energy offset. Nonzero q deformation needs a separate star structure, so not identified with this Hermitian model by parameter analogy.

Source sections: nrqm-planned.

### Leaf companion qsmx-temperley-lieb-models-examples

### ex-qsmx-potts-two-site

Kind: example; domain: mathematics.

For the Q-state two-site chain, P_1 and D_12 are projectors with P_1 D_12 P_1=Q^-1 P_1; their noncommutation makes classical diagonal Gibbs replacement invalid for nonzero transverse coupling.

[[thm-qsmx-potts-tl-and-hecke]]

Proof / construction route: Act on |ab> and use plus-state overlap; choose a=b and a plus superposition to exhibit unequal ordered products.

Source sections: potts-local.

## qsmx-hall-categorification-spin — Lie and Hall algebra actions with controlled decategorification

Earlier A/P pages: qsmx-temperley-lieb-models, qsmx-integrable-transfer, green-hall-bialgebras-and-quantum-group-realizations, klr-algebras-induction-and-quantum-serre-categorification.

### def-qsmx-spin-weight-and-hall-realization

Kind: definition; domain: mathematics.

Assume the Axiom of Choice inherited through the stated supplier chain. On (C²)^tensor N define Splus=sum sigma_plus,j, Sminus=sum sigma_minus,j, Sz=(1/2)sum Z_j. For the one-vertex no-arrow Hall category over F_Q, parameter nu=sqrt(Q), its composition algebra realizes the positive rank-one quantum half; this positive half has no negative generator or compact star structure by itself.

[[thm-ringel-map-embedding-and-finite-dynkin-criterion]]

Proof / construction route: Specify Q prime power, nu>1 and coefficient field Q(nu); Hall parameter is not the physical Q of the Potts chain. Carry inherited Axiom of Choice from root Ringel theorem. Do not specialize numerical nu directly to one without an integral form.

Source sections: hall-local.

### thm-qsmx-exchange-lie-weight-blocks

Kind: theorem; domain: mathematics.

Assume the Axiom of Choice inherited through the stated supplier chain. Every exchange P_i,i+1 commutes with Splus,Sminus,Sz. Consequently the XXX Hamiltonian and transfer matrices preserve magnetization and the global sl2 action; in each finite weight block a Gibbs exponential can be calculated independently.

[[def-qsmx-spin-weight-and-hall-realization]]

[[thm-qsmx-transfer-heisenberg-charge]]

Proof / construction route: Permutation simply swaps summands of each total generator; R=uI+iP intertwines diagonal spin action and the auxiliary trace gives physical global invariance. Finite direct-sum functional calculus proves Gibbs block decomposition; degeneracies do not determine matrix elements.

Source sections: faddeev-4.

### thm-qsmx-klr-character-specialization

Kind: theorem; domain: mathematics.

Assume the Axiom of Choice inherited through the stated supplier chain. The root KLR Grothendieck theorem gives the divided-power integral negative quantum half with grading shifts as its Laurent parameter. Independently, the classical rank-one spin module V(N) has weights N,N-2,...,-N with multiplicity one, whereas the tensor-power module V(1)^tensor N has weight N-2k of multiplicity C(N,k). A tensor-product categorical realization is additional data; abstract negative-half categorification alone determines neither these tensor multiplicities nor a spin Hamiltonian spectrum.

[[thm-klr-categorification-of-the-negative-quantum-half]]

[[def-qsmx-spin-weight-and-hall-realization]]

Proof / construction route: Use the actual root KLR theorem only for integral negative-half multiplication and grading shifts. Prove binomial tensor character directly from product (z+z^-1)^N and irreducible character by rank-one lowering basis. A tensor-product categorical realization is explicitly a further construction obligation if invoked; this statement uses no unbuilt tensor categorification as a premise. Nonduplicate physics conclusion: magnetic field Gibbs trace at zero exchange is (2 cosh(beta h/2))^N.

Source sections: klr-local, faddeev-4.

### Leaf companion qsmx-hall-categorification-spin-examples

### cex-qsmx-categorification-not-spectrum

Kind: counterexample; domain: mathematics.

Assume the Axiom of Choice inherited through the stated supplier chain. On two spin-half sites, H=0 and H=J P both commute with the same sl2 action and have the same representation decomposition, while their partition functions are 4 and 3e^(-beta J)+e^(beta J).

[[thm-qsmx-exchange-lie-weight-blocks]]

Proof / construction route: Symmetric triplet has swap +1 and antisymmetric singlet -1; compute trace. This makes the exact limit of categorification/Hall suppliers explicit.

Source sections: hall-local.

## qsmx-open-entropy-production — Noncommuting entropy production and thermal secular models

Earlier A/P pages: qsm-dt-channels, qsm-dt-relaxation, qsmx-entropy-entanglement.

### def-qsmx-secular-thermal-generator

Kind: definition; domain: mathematics.

For H=sum_E E P_E, finite Hermitian couplings S_a, define S_a(omega)=sum_(Eprime-E=hbar omega) P_E S_a P_Eprime. Require positive semidefinite finite rate matrices gamma_ab(omega), with gamma_ab(-omega)=exp(-beta hbar omega) gamma_ba(omega), and add a Hermitian Lamb shift commuting with H. Lrho=-i[H+H_LS,rho]/hbar+sum gamma_ab(omega)(S_b rho S_a* -{S_a* S_b,rho}/2).

[[thm-qsm-dt-gksl-sufficient]]

Proof / construction route: Finite sums, frequencies in inverse seconds and gamma units inverse seconds for dimensionless S. Diagonalize each positive rate matrix to Kraus jumps. This is an adopted effective finite bath model; no microscopic weak-coupling convergence claimed.

Source sections: naaijkens, it-local.

### thm-qsmx-secular-gibbs-stationarity

Kind: theorem; domain: mathematics.

The stated finite generator is CPTP and fixes sigma=e^(-beta H)/Z. This does not by itself imply a unique stationary state or a relaxation gap.

[[def-qsmx-secular-thermal-generator]]

[[thm-qsm-dt-gksl-sufficient]]

Proof / construction route: For a lowering S(omega), S(omega) sigma=exp(-beta hbar omega) sigma S(omega), and adjoints belong to -omega. Pair omega and -omega terms using transpose thermal relation; cancel coefficients. Zero frequency terms commute with sigma. Lamb shift commutes as required.

Source sections: naaijkens.

### thm-qsmx-spohn-finite-inequality

Kind: theorem; domain: mathematics.

For any finite CPTP semigroup exp(tL) with faithful stationary sigma, D(exp(tL)rho||sigma) is nonincreasing. At faithful rho its derivative is Tr L(rho)(log rho-log sigma)<=0. For nonfaithful rho use extended-real right limits rather than an unqualified logarithm derivative.

[[thm-qsmx-cmi-and-channel-dpi]]

[[thm-qsm-dt-gksl-sufficient]]

Proof / construction route: Apply finite channel DPI to times s and t, stationarity fixes reference, and use semigroup composition. For faithful rho finite derivative of Tr rho log rho gives Tr Lrho(log rho+I); trace preservation kills I. No detailed balance needed for this inequality; strict decay needs irreducibility.

Source sections: it-local.

### Leaf companion qsmx-open-entropy-production-examples

### cex-qsmx-stationarity-without-relaxation

Kind: counterexample; domain: mathematics.

The qubit generator Lrho=gamma(ZrhoZ-rho), gamma>0, fixes every diagonal density and cannot converge to a unique Gibbs state from all initial states.

[[thm-qsmx-spohn-finite-inequality]]

Proof / construction route: Off-diagonals decay as e^(-2 gamma t), diagonals remain unchanged.

Source sections: it-local.

## qsmx-transport-and-drude — Current continuity, Drude obstructions and conditional diffusion

Earlier A/P pages: qsm-dt-response, qsmx-integrable-transfer, qsmx-lieb-robinson-spectral-flow.

### def-qsmx-lattice-current-and-limits

Kind: definition; domain: mathematics.

For nearest-neighbor H=sum h_j,j+1 and conserved on-site charge q_j satisfying [h_j,j+1,q_j+q_j+1]=0, set j_j,j+1=(i/hbar)[h_j,j+1,q_j+1]. Then dq_j/dt=j_j-1,j-j_j,j+1. Define finite thermal current correlation C_L(t)=L^-1 omega(J(t)J) connected and transport only after prescribing L to infinity, time cutoff to infinity and any frequency regulator order.

[[thm-qsm-dt-finite-kubo]]

Proof / construction route: Compute commutator and assign current charge per second; use connected centered currents, not raw means. Higher-dimensional indices require oriented bond sum.

Source sections: faddeev-3, naaijkens.

### thm-qsmx-finite-mazur-bound

Kind: theorem; domain: mathematics.

With finite faithful stationary rho, inner product (A,B)=Tr rho A*B, centered current J and linearly independent conserved operators Q_a, its Cesaro autocorrelation is at least v* G^-1 v, G_ab=(Q_a,Q_b), v_a=(Q_a,J).

[[def-qsmx-lattice-current-and-limits]]

[[thm-qsm-dt-cesaro-dephasing]]

Proof / construction route: The time-average is orthogonal projection of J onto kernel of Liouvillian in the rho-weighted Hilbert space; conserved span is a subspace, so norm squared is bounded below by its Gram projection. State real part or Hermitian autocorrelation convention explicitly. This finite persistent component is not a finite thermodynamic Drude weight unless limits are proved.

Source sections: naaijkens.

### thm-qsmx-conditional-diffusive-green-kubo

Kind: theorem; domain: mathematics.

If a specified infinite-volume stationary current process or symmetrized quantum integrated observable has real even connected correlation C with integral_0^infty |C(t)|dt finite and justified spatial normalization, then lim_(T to infinity) Var(integral_0^T J(t)dt)/(2T)=integral_0^infty C(t)dt.

[[thm-qsm-dt-variance-green-kubo]]

[[def-qsmx-lattice-current-and-limits]]

Proof / construction route: Fubini on finite T gives Var=2 integral_0^T (T-t) C(t)dt; dominated convergence proves the limit. Existence/positivity of chosen process or symmetrized operator covariance is specified; no stochastic trajectory inferred from one-time density states.

Source sections: naaijkens.

### Leaf companion qsmx-transport-and-drude-examples

### cex-qsmx-dc-order-of-limits

Kind: counterexample; domain: mathematics.

If centered J is nonzero and [H,J]=0, C(t)=Tr rho J² is a positive constant and the unregulated Green–Kubo integral diverges.

[[thm-qsmx-finite-mazur-bound]]

Proof / construction route: Direct Heisenberg invariance; contrast with the explicitly integrability-qualified theorem.

Source sections: naaijkens.

## qsmx-quasifree-gases — Quasifree covariance, finite Bogoliubov theory and interacting boundaries

Earlier A/P pages: qsm-bose-fermi-gases, qsmx-entropy-entanglement, nrqmx-finite-mode-gaussian.

### def-qsmx-quasifree-finite-covariance

Kind: definition; domain: mathematics.

On r finite fermion modes with CAR, a gauge-invariant quasifree state is specified by covariance 0<=C<=I with omega(a_i* a_j)=C_ji and Wick determinant moments, odd moments zero. For quadratic H=sum a_i* h_ij a_j, h=h*, grand Gibbs has C=(I+exp(beta(h-mu I)))^-1.

[[lem-qsm-fock-occupation-basis-and-car-relations]]

Proof / construction route: Unitary diagonalization of h gives independent Bernoulli occupations; expand determinants and transform back. Wick is proved from finite occupation traces, not assumed as a general interacting identity.

Source sections: naaijkens.

### thm-qsmx-quasifree-entropy

Kind: theorem; domain: mathematics.

For the finite quasifree state, S=-Tr[C log C+(I-C)log(I-C)]. Restriction to a mode subspace remains quasifree with compressed covariance; covariance spectra determine restricted entropy.

[[def-qsmx-quasifree-finite-covariance]]

[[def-qsmx-information-conventions]]

Proof / construction route: Diagonal modes yield product binary entropy, and moments restricted to a mode subspace retain determinant Wick form. No bosonic tensor partial trace sign ambiguity: fix ordered CAR modes and use even gauge-invariant states.

Source sections: it-local.

### thm-qsmx-finite-boson-stability

Kind: theorem; domain: mathematics.

For finite r bosonic modes, a strictly positive real quadratic canonical form with an explicit finite symplectic Bogoliubov diagonalization gives H=sum_k hbar omega_k(b_k* b_k+1/2)+c with every omega_k>0. Then Z=e^(-beta c) product_k [2sinh(beta hbar omega_k/2)]^-1.

[[thm-nrqmx-finite-mode-bogoliubov]]

[[lem-qsm-models-diagonal-occupation-trace]]

Proof / construction route: Require positive Williamson frequencies as an explicit hypothesis or prove Williamson normal form before invoking it; finite unitary implementability transfers the occupation trace. No infinite-mode equivalence, interacting depletion estimate or superfluid theorem is inferred.

Source sections: nrqm-planned.

### Leaf companion qsmx-quasifree-gases-examples

### cex-qsmx-bogoliubov-zero-mode

Kind: counterexample; domain: mathematics.

A bosonic zero mode with H=0 on its Fock factor has Tr exp(-beta H)=infinity for every beta>0; formal determinant formulas with that mode omitted describe a different model.

[[thm-qsmx-finite-boson-stability]]

Proof / construction route: Each occupation contributes one; finite oscillator trace theorem requires strictly positive frequency.

Source sections: naaijkens.

## qsmx-transverse-ising-spectral — Transverse Ising Majorana reduction and bulk gap closing

Earlier A/P pages: qsm-bose-fermi-gases, qsmx-quasifree-gases, qsm-states-ensembles.

### def-qsmx-transverse-ising-majoranas

Kind: definition; domain: mathematics.

On N spin-half sites let H=-h sum_j Z_j-J sum_(j<N) X_j X_j+1 for real h,J in energy units. Define gamma_(2j-1)=(product_(k<j) Z_k) X_j and gamma_(2j)=(product_(k<j) Z_k) Y_j. The order and open boundary are part of the model.

[[lem-qsm-matrix-state-calculus]]

Proof / construction route: Each Pauli is Hermitian. Distinct strings anticommute at their first unmatched site, so {gamma_a,gamma_b}=2 delta_ab I. No periodic Jordan–Wigner boundary term is omitted.

Source sections: ising-derivation.

### thm-qsmx-open-ising-quadratic

Kind: theorem; domain: mathematics.

The open Ising Hamiltonian is i h sum_j gamma_(2j-1) gamma_(2j)+i J sum_(j<N) gamma_(2j) gamma_(2j+1). Its finite Gibbs trace is product_k 2cosh(beta epsilon_k/2), where epsilon_k>=0 are positive quasiparticle energies of the real skew Majorana coefficient matrix; zero modes contribute factor two.

[[def-qsmx-transverse-ising-majoranas]]

[[lem-qsm-models-diagonal-occupation-trace]]

Proof / construction route: Use gamma_(2j-1) gamma_(2j)=iZ_j and gamma_(2j) gamma_(2j+1)=iX_j X_j+1, hence signs exactly match. Write H=(i/4) gamma^T A gamma with A real skew, entries 2h and 2J above the indicated neighbor diagonal. Prove real orthogonal skew normal form by spectral theorem for iA and conjugate eigenpairs. In each 2-plane introduce b=(eta_1+i eta_2)/2, giving epsilon(b* b-1/2); orthogonal change preserves CAR and finite Clifford irreducibility gives the same spectrum. Sum independent occupation traces.

Source sections: ising-derivation.

### thm-qsmx-ising-bulk-symbol-gap

Kind: theorem; domain: mathematics.

For the infinite translation-invariant one-particle Majorana operator associated with the above coefficients, the Fourier symbol has positive energy epsilon(k)=2 sqrt(h²+J²-2hJ cos k) after a fixed momentum gauge. The bottom positive band is 2 abs(abs(h)-abs(J)); it closes exactly at abs(h)=abs(J). This is a one-particle band result and does not assert uniqueness of infinite spin ground states.

[[thm-qsmx-open-ising-quadratic]]

Proof / construction route: Fourier transform the two-site unit-cell real skew convolution; its off-diagonal symbol is 2(h-J exp(ik)), giving eigenvalues plus/minus its modulus. Norm of the multiplication operator is controlled by continuous symbol; localized Fourier packets show every band value lies in the spectrum, including its minimum. Establish l² Fourier unitarity by Parseval on finitely supported sequences and density before use; this is an explicit authoring lemma inside this page.

Source sections: ising-derivation.

### Leaf companion qsmx-transverse-ising-spectral-examples

### ex-qsmx-ising-classical-and-field-limits

Kind: example; domain: mathematics.

At h=0 the open spin chain has two ground configurations in the X basis for J>0, whereas at J=0 and h!=0 it has a unique Z-polarized ground configuration. Every finite-chain Gibbs trace is analytic in real beta,h,J.

[[thm-qsmx-open-ising-quadratic]]

Proof / construction route: For h=0 neighboring X eigenvalues must align, leaving two choices; for J=0 each independent site minimizes -hZ uniquely. Matrix exponential is entire in finite parameters and its real Gibbs trace is strictly positive, so real log trace analytic locally. Gap closing of the infinite symbol does not alone prove a thermodynamic singularity.

Source sections: ising-derivation.

## Research boundary and remaining established developments

The present additions intentionally do not claim general interacting Bose condensation, the full Hubbard phase diagram, generic nonintegrable ETH, many-body localization stability, transport universality, or complete two-dimensional phase classification. These remain nonlogical research context; no op item is used by a theorem. A future open-problem item requires a precise question and current primary status sources before registration. This dossier does not manufacture dated status evidence for such broad slogans.

Further established authoring obligations are the full standard-form/relative-modular operator theory beyond the vector case, exponential ground-state clustering under a unique infinite-volume spectral gap, and the one-dimensional area theorem. These are separate from the finite thermal boundary estimate proved above. MPS parent gap theorems require an explicit intersection property and uniform martingale inequality; injectivity and a transfer gap alone are not passed off as a complete parent-Hamiltonian proof. These obligations are elaborated in coverage-and-closure.md and do not supply any logical edge until authored.

Toric-code local indistinguishability concerns the commuting finite model. Perturbation stability needs local topological order and a stable gap theorem; spectral flow here assumes its uniform gapped path. Thermal stability and a self-correcting quantum memory are not consequences of finite topological degeneracy. D(G) representation labels are explicit finite algebra, while geometric anyon transport and modular tensor/TQFT extensions belong downstream to QFT.
