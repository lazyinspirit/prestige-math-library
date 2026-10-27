---
page: quantum-affine-type-a-and-level-one-fock-space
title: "Quantum Affine Type A and Level-One Fock Space"
status: published
requires: [tensor-product-crystals-and-highest-weight-crystal-uniqueness,
           balanced-triples-and-global-crystal-bases,
           young-diagrams-tableaux-and-permutation-modules]
items: [def-cyclic-affine-type-a-cartan-datum,
        def-the-level-one-vector-representation-its-affinization-and-energy-function,
        def-the-affine-hecke-algebra-action-on-finite-tensor-powers-of-the-vector-representation,
        lem-integrable-rank-one-actions-force-the-quantum-serre-relations,
        lem-the-q-antisymmetrizer-determines-the-finite-q-wedge-kernel,
        lem-the-level-one-vector-representation-has-a-perfect-crystal-with-lower-global-basis,
        def-finite-q-wedge-space-and-normal-ordering-relations,
        lem-the-q-wedge-relations-coincide-with-the-type-a-energy-braiding-kernel,
        thm-normally-ordered-q-wedges-form-a-basis,
        def-semi-infinite-q-wedge-fock-space-and-q-adic-topology,
        lem-the-fock-space-tail-estimates-give-q-adic-vanishing-and-finiteness,
        lem-semi-infinite-wedges-are-indexed-by-partitions-and-give-node-action-formulas,
        def-level-one-partition-fock-space-and-node-residues,
        lem-the-node-count-is-the-level-one-cartan-pairing,
        def-the-node-order-and-n-i-exponents-for-fock-space,
        lem-fixed-residue-node-cubes-realize-fock-i-strings-and-crystal-lattices,
        def-good-and-cogood-nodes-by-residue-signature-reduction,
        thm-the-fock-space-node-formulas-satisfy-the-quantum-affine-relations,
        prop-the-empty-partition-generates-an-integrable-highest-weight-submodule,
        thm-the-crystal-of-level-one-fock-space-is-the-good-node-partition-graph,
        thm-the-semi-infinite-quantum-group-action-is-well-defined-and-integrable,
        thm-the-empty-component-is-the-highest-weight-crystal-b-lambda-zero,
        def-regular-partition-label-convention-and-mullineux-crystal-involution,
        thm-the-basic-representation-global-basis-is-unitriangular-in-the-partition-basis]
examples: []
---

**Objective.** This page constructs the level-one Fock space of the quantum
affine algebra $U_q(\widehat{\mathfrak{sl}}_e)$ and identifies its empty
connected component with the basic representation: the integrable highest
weight module of highest weight $\Lambda_0$, together with its crystal and its
lower global basis. The route is the classical semi-infinite $q$-wedge model.
The page fixes the cyclic affine type $A$ Cartan datum at arbitrary rank
$e\ge2$ — the double edge $e=2$ is carried through every statement — builds the
affinized vector representation with its energy function and the commuting
affine Hecke algebra action, splits the finite tensor powers by the
$q$-antisymmetrizer, and takes the stable limit of finite $q$-wedge powers. On
that limit the Fock space carries a charge-dependent $q$-adic topology, the
semi-infinite wedges are indexed by partitions, and the induced node operators
satisfy every quantum affine relation. The resulting crystal is the good-node
partition graph on **all** partitions; its empty component is exactly the set
of $e$-regular partitions, and the ambient lower global basis is unitriangular
in the partition basis.

**The datum, the vector representation and the Hecke action.**
[[def-cyclic-affine-type-a-cartan-datum]] fixes $I=\mathbb Z/e\mathbb Z$, the
cyclic Cartan matrix with the single double edge $a_{01}=a_{10}=-2$ at $e=2$,
explicit free lattices $P$ and $P^\vee$ with simple roots
$\alpha_i=\sum_j a_{ji}\Lambda_j+\delta_{i0}\delta$, the central element
$c=\sum_i h_i$, the level map $\langle c,\cdot\rangle$, the symmetric root form
and the diagram reflection $\tau$. It proves the roots independent, records
$\sum_i\alpha_i=\delta$ and $\langle c,\alpha_i\rangle=0$, and warns that the
root form is not the lattice pairing. [[def-the-level-one-vector-representation-its-affinization-and-energy-function]]
then defines the derived vector module $V$ with weights
$\Lambda_j-\Lambda_{j-1}$, its finite crystal $B=\{b_1,\dots,b_e\}$ with
$\varepsilon(b_j)=\Lambda^{\mathrm{cl}}_{j-1}$ and
$\varphi(b_j)=\Lambda^{\mathrm{cl}}_j$, and the full affinization
$u_{j-ae}=z^av_j$ of $P$-weight $\Lambda_j-\Lambda_{j-1}+a\delta$ and
$K_d$-eigenvalue $q^a$; the energy function is fixed through the
**opposite**-channel rule $H_{\mathrm{op}}=\chi(j>k)+b-a$, with the loop-shift
axioms, constancy on components, and the ground identities
$\varepsilon(b^\circ_s)=\varphi(b^\circ_{s+1})$,
$H_{\mathrm{op}}(b^\circ_s\otimes b^\circ_{s+1})=1$. The Hecke side is
[[def-the-affine-hecke-algebra-action-on-finite-tensor-powers-of-the-vector-representation]]:
the affine Hecke algebra with $Q=q^2$, $S_i^2=(Q-1)S_i+Q$, commuting
invertible $Y_j$ and the Bernstein relation $S_iY_iS_i=QY_{i+1}$, acting on
affine vectors by the three-case residue formula and the divided-difference
extension, commuting with the fixed derived $U_q^{\prime}$ action. The finite Hecke operators $S_i$ and $A_N$ also commute with $K_d$, while $K_dY_jK_d^{-1}=qY_j$. It uses the Leclerc generator
$t_i=-q^{-1}S_i$ and the antisymmetrizer $A_N=\sum_{w\in S_N}S_w$.
[[lem-integrable-rank-one-actions-force-the-quantum-serre-relations]] supplies
the module-theoretic input the later relation checks use: chosen type-one
Cartan/E/F operators satisfying the toral relations and mixed commutators,
with integrable single-color actions, satisfy **both**
quantum Serre sums, including the cubic affine relation at $e=2$, with no
Serre relation imposed in advance.

**The $q$-antisymmetrizer and the wedge relations.**
[[lem-the-q-antisymmetrizer-determines-the-finite-q-wedge-kernel]] computes
$A_N^2=C_NA_N$ with $C_N=\prod_{r=1}^N(1+q^2+\cdots+q^{2(r-1)})$ and
$\ker A_N=\sum_i\ker(S_i+1)$, so the wedge quotient is $\operatorname{Im}A_N$
as a field space, and at $q=1$ the relations are ordinary antisymmetry; no
torsion-freeness over $A$ is used.
[[lem-the-level-one-vector-representation-has-a-perfect-crystal-with-lower-global-basis]]
gives the perfect-crystal package on $V$: the level-one crystal $B$, its
bijective $\varepsilon/\varphi$ onto level-one dominant weights, connectedness
of $B\otimes B$, and the choice-free lower global basis $G(b_j)=v_j$ with
bar-invariance, nontrivial length-two rank-one strings, frozen singleton strings and vanishing divided powers of order at least two.
[[def-finite-q-wedge-space-and-normal-ordering-relations]] forms
$W_N=V_{\mathrm{aff}}^{\otimes N}/\ker A_N$ and writes down the normal-ordering
recursion with the exact three cases of the gap $m-l=ae+b$; the lattice charts
$W_A$ and $W_0$ are kept distinct, and the energy criterion is referred to the
opposite channel. [[lem-the-q-wedge-relations-coincide-with-the-type-a-energy-braiding-kernel]]
identifies the input kernel: the normalized completed $R$-matrix of the fixed
coproduct satisfies $\ker(R_{\mathrm{fix}}-1)=\ker(S+1)$ in the original Laurent-loop module, and its
opposite-channel flip reproduces the KMPY energy braiding with leading term
$z^{H_{\mathrm{op}}}b_1\otimes z^{-H_{\mathrm{op}}}b_2$, so the wedge
relations and the energy braiding have the same kernel data. Building on this,
[[thm-normally-ordered-q-wedges-form-a-basis]] proves that decreasing-index
wedges are a field basis and an $A=\mathbb Z[q^{\pm1}]$ basis of $W_A$, with a
well-founded termination measure for straightening. The local chart $L_0=A_0W_0$, with $A_0=\mathbb Q[q]_{(q)}$, has the ordered-wedge residue crystal; the positive polynomial chart $W_0$ is retained separately, and the unordered image of the full $A_0$ tensor lattice is not silently identified with $L_0$.

**Semi-infinite wedges and the Fock space.**
[[def-semi-infinite-q-wedge-fock-space-and-q-adic-topology]] forms the
charge-$M$ algebraic direct limit, sets the vacuum to $u_M\wedge u_{M-1}\wedge\cdots$
and indexes normal semi-infinite words by partitions through
$i_k=\lambda_k-k+1+M$, where $\lambda_k$ is the $k$th partition part. The topology is the one induced by $q^nF_0$ on the
local $A_0$ chart — explicitly never $q^nF_A=F_A$ — and the charge-$M$ vacuum
weight is normalised by $\Omega_0=\Lambda_0$ and
$\Omega_M-\Omega_{M-1}=\mathrm{wt}(u_M)$, with no false $\delta$-periodicity.
[[lem-the-fock-space-tail-estimates-give-q-adic-vanishing-and-finiteness]]
supplies the analytic part: the ground-sequence energy condition
$H_{\mathrm{op}}(b\otimes b^\circ_s)\le0$ forces a wedge with the filled tail
to vanish after a finite prefix, every homogeneous nonzero-weight loop-shift-commuting endomorphism of $V_{\mathrm{aff}}$ is eventually killed by insertion deep in a ground tail, and
the period operator $T$ has nilpotent positive-size powers, making
$(1-T)^{-1}$ a finite geometric sum on each nonvacuum weight.
[[lem-semi-infinite-wedges-are-indexed-by-partitions-and-give-node-action-formulas]]
then reads off the node formulas $F_i|\lambda\rangle=\sum q^{A^r_i-R^r_i}|\lambda+\gamma\rangle$
and $E_i|\mu\rangle=\sum q^{-(A^l_i-R^l_i)}|\mu-\gamma\rangle$ by stable
finite-prefix action. [[def-level-one-partition-fock-space-and-node-residues]]
transcribes these to the charge-$0$ partition Fock space with weight
$\Lambda_0-\sum_i m_i(\lambda)\alpha_i$, node residue $c-r \bmod e$, and the
regular/restricted partition dictionary, declaring the operators before their
relations are proved.

**Node combinatorics and the affine relations.**
[[lem-the-node-count-is-the-level-one-cartan-pairing]] computes the
addable-minus-removable count $N_i(\lambda)=\delta_{i,0}-\sum_j a_{ij}m_j(\lambda)$,
hence $\sum_iN_i=1$ and $K_0K_1\cdots K_{e-1}=q$ on every label, so all labels
have level one. [[def-the-node-order-and-n-i-exponents-for-fock-space]] fixes
the increasing-content node order and the signed exponents $N^r_i,N^l_i$ with
$N^r_i+N^l_i=N_i(\lambda)-1$, and warns that a Chevalley coefficient minimiser
is not in general a Kashiwara arrow.
[[lem-fixed-residue-node-cubes-realize-fock-i-strings-and-crystal-lattices]]
shows the fixed-residue orbit is a finite Boolean cube on which the node
operators are exactly the tensor powers of the rank-one module actions —
including $e=2$ — so the string and lattice structures are the actual ones.
[[def-good-and-cogood-nodes-by-residue-signature-reduction]] fixes the
convention: cancel $-+$ in increasing content order, the first surviving minus
is the good removable node for $e_i$ and the last surviving plus is the cogood
addable node for $f_i$. On these conventions
[[thm-the-fock-space-node-formulas-satisfy-the-quantum-affine-relations]]
proves the constructed operators make the whole partition Fock space a chosen
$P$-graded integrable $U_q(\widehat{\mathfrak{sl}}_e)$-module, all commutators
and **both** Serre sums included, with the cubic coefficient
$[3]=q^2+1+q^{-2}$ at $e=2$.

**The crystal, the empty component and the basic representation.**
[[prop-the-empty-partition-generates-an-integrable-highest-weight-submodule]]
identifies $M=U_q|\varnothing\rangle$ as the simple integrable highest weight
module $V(\Lambda_0)$, with lattice $U_A^-|\varnothing\rangle$.
[[thm-the-crystal-of-level-one-fock-space-is-the-good-node-partition-graph]]
proves that the whole Fock module has the crystal $(F_0,B_F)$ with
$F_0=\bigoplus_{\lambda}A_0|\lambda\rangle$ and $B_F=\{|\lambda\rangle+qF_0\}$;
the normalized operators remove the good node and add the cogood node of the
corrected signature, so the crystal is a graph on all partitions, not only on
regular ones. [[thm-the-semi-infinite-quantum-group-action-is-well-defined-and-integrable]]
turns the stable-prefix operators into the actual integrable affine action on
the charge-$M$ direct limit, with q-adically convergent, boundary-normalized coproduct expressions,
the wedge product formulas $E(v\wedge u)=Ev\wedge K_i^{-1}u+v\wedge Eu$ and
$F(v\wedge u)=Fv\wedge u+K_iv\wedge Fu$, and the declared axiom of choice used
once for the semisimple decomposition into highest weight modules.
[[thm-the-empty-component-is-the-highest-weight-crystal-b-lambda-zero]] then
proves the empty component is the canonical $B(\Lambda_0)$ with exactly the
$e$-regular labels, occurring once, and obtains the locally weight-finite
decomposition $F=\bigoplus_{k\ge0}V(\Lambda_0-k\delta)^{\oplus p(k)}$ and the
character identity $\operatorname{ch}F=\operatorname{ch}V(\Lambda_0)\prod_{r\ge1}(1-\exp(-r\delta))^{-1}$
under the same declared choice.

**Label conventions and the global basis.**
[[def-regular-partition-label-convention-and-mullineux-crystal-involution]]
separates the same-model Mullineux involution $M$ on the regular basic crystal
from conjugation $C$, which compares the regular and restricted models and
sends residue $i$ to $-i$; it records $\mathrm{wt}\circ M=\tau\circ\mathrm{wt}$
and the absence of an affine longest-element formula.
[[thm-the-basic-representation-global-basis-is-unitriangular-in-the-partition-basis]]
constructs the semi-infinite wedge bar, proves that the induced family
$G(\lambda)=|\lambda\rangle+\sum_{\mu\prec\lambda}d_{\mu,\lambda}(q)|\mu\rangle$
with $d\in q\mathbb Z[q]$ is an $A$-basis of the partition Laurent lattice, and
shows that **exactly** the $e$-regular $G(\lambda)$ form the lower global basis
of $M$, identified through the two lower-global-basis suppliers. The item
records that the naive transpose-conjugation symmetry of the full coefficient
matrix is false in general, and that the ambient basis is not automatically
compatible with the other field irreducible summands.

The companion page [[quantum-affine-type-a-and-level-one-fock-space-examples]]
works the finite computations: the complete node-action tables for partitions
of size at most three, the double-edge Serre cancellation at $e=2$, the
good-node component for $e=3$ up to size three, the failure of the whole
partition Fock space to be the basic representation, and the explicit
unitriangular global-basis elements in small rank.
