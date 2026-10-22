# Finite controlled homology-to-homotopy operation

This reconstructs the finite-complex operation in Quinn, *Ends of maps I*,
§5.2, printed pp.302–304, newly read in full with its definitions and proof.
The theorem statement and its distinction between relative connectivity and
approximate lifting were also visually checked on printed p.302. This is a
component of the finite end-completion construction, not a smoothing theorem.

The ordinary relative Hurewicz input is the **retained contract only** of
`lem-relative-hurewicz-comparison-through-a-choice-free-weak-model`: an
(n−1)-connected CW pair with supplied characteristic maps, nonempty simply
connected subspace, and n≥2 has its actual relative Hurewicz isomorphism,
without a choice principle. Only its Statement and declared-choice metadata
were consulted; its Facts, Proof and verification evidence were not reviewed.
The separate full-AC relative Hurewicz theorem is not used.

Work over a compact metric control region C in a locally 1-connected space X.
Consider a finite sequence of pairs (A_j,B_j) and maps over X. Assume that
each map A_j→A_{j+1} and B_j→B_{j+1} has the following approximate extension
property: a prescribed map on a subcomplex S of a finite relative two-complex
R, and a compatible map R→X near C, extend to R→A_{j+1} (respectively
B_{j+1}), with arbitrarily prescribed sufficiently small error in X, agreeing
with the given subcomplex map after the structure map. This is Quinn's
non-relative “(δ,1)-connected” property. It is stronger than merely killing
relative π₁. Assume each successive pair map kills relative integral homology
through degree n with δ-enlargement of control support. In the application
one works in the trivial local end cover; a nontrivial action is not discarded.

For every ε>0, a sufficiently small δ and a sufficiently long finite
sequence ensure that a map of a finite relative n-complex (R,S) into the
first pair deforms, rel S, into the final B with projected track diameter
less than ε. Here is the construction, including the degree-two issue.

For degree zero, extend a prescribed vertex's projected image to a nearby
B-vertex by the B-extension property, then extend the interval between the
original A-vertex and the chosen B-vertex by the A-extension property.
Local path connectedness lets this interval have any sufficiently small
prescribed projected diameter. Distinct relative vertices give independent
finite extension problems. This uses two stages. For degree one, perform
the same operation on vertices and extend across each relative edge: local
1-connectedness fills the loop between the original projected edge and the
new B-edge, and the A-extension property lifts that finite two-dimensional
comparison. Four stages suffice. All extensions agree on the prescribed
subcomplex by the relative extension property.

Inductively subdivide R so that the projected image of each n-cell lies in
a γ-small set, with γ chosen much smaller than ε. By the inductive operation,
move the (n−1)-skeleton into B after T_{n−1} stages, with track diameter below
γ. Each remaining n-cell is now a map (Dⁿ,Sⁿ⁻¹) into a pair, with projected
image of diameter at most 3γ. The next homologically trivial pair map makes
its relative fundamental chain bound. A bounding singular chain is finite.
Take the finitely many singular simplices in that chain and their faces,
together with the disk and boundary characteristic maps, to obtain a finite
CW factorization (Dⁿ,Sⁿ⁻¹)→(L,M)→(A,B) in which the disk class is zero
in H_n(L,M). The factorization's projected support has diameter at most
3γ+2δ. This is an actual finite chain construction, not an inference from
vanishing homology to vanishing homotopy.

Cone the one-skeleton of L. The resulting finite complex
L′=L∪cone(L^(1)) is simply connected. Local 1-connectedness of X extends
the control map over this cone inside a sufficiently small neighborhood:
choose the finitely many cone-edge paths, then fill the finitely many
triangular loops. The approximate extension property lifts these added
two-cells into the next A-pair, with the prescribed M-map retained.

Apply the degree-(n−1) operation again to the finite pair (L′,M), moving
its (n−1)-skeleton into a later B. Thus the disk map factors through

(L′, M∪L′^(n−1)).

For n≥3 this pair is (n−1)-connected, because its remaining relative cells
have dimension at least n. Its subspace M∪L′^(n−1) is simply connected:
it contains the coned original one-skeleton and its two-cells, and attaching
higher cells creates no π₁. Its characteristic maps have been supplied
explicitly by the finite construction. The retained choice-free relative
Hurewicz contract therefore applies. The disk class is still zero in relative
homology, since it was already zero before enlarging the subspace. Hence its
relative homotopy class is zero. This supplies an actual relative disk
nullhomotopy, whose image in the later A lies in the small control region
containing L′. After the subspace has been mapped into B, the nullhomotopy
is exactly the required deformation into B.

For n=2, M∪L′^(1) need not be simply connected. Do not invoke an untwisted
degree-two Hurewicz isomorphism at this point. Instead attach the cone on
its finite one-skeleton to the subspace, and to the ambient finite complex
as well. Extend its control map by local 1-connectedness, and lift those
two-cells **into B** by the B-extension property in one further stage.
Both ambient and subspace complexes are now simply connected. The pair
is 1-connected, its characteristic maps are explicit, and the same retained
Hurewicz contract applies in degree two. The original zero homology class
remains zero under the map of pairs. This proves the degree-two step with
the correct π₁ condition, without suppressing a group action.

The stage counts may be taken T_0=2, T_1=4,
T_2≤2T_1+3=11, and T_n≤2T_{n−1}+2 for n≥3. In particular the harmless
uniform bound 2^(n+2) is sufficient. The control choices are made backwards:
choose the desired final nullhomotopy diameter, then a local cone-filling
diameter ρ, then γ and δ small enough that 3γ+4δ+ρ plus the inductive
track allowance is below ε. Compactness supplies finitely many control
neighborhoods and a positive common Lebesgue bound. This finite backward
selection produces a single δ valid for all cells and all their finite
subdivisions. It does not require a new subdivision-dependent δ.

Every selected witness in this argument belongs to a finite collection:
the input complexes, bounding chains, cone cells, local control cover and
stage list are finite. A relative nullhomotopy supplied by the retained
Hurewicz isomorphism is an existential witness for one of finitely many
cells. Thus the operation itself adds no choice principle. Applying it to
an arbitrary infinite CW complex would require a separate choice analysis;
that extension is neither needed for the finite handles here nor asserted.

The remaining geometric end-completion stages must still construct the
finite handlebodies and execute the required framed Whitney/handle operations.
This operation supplies the controlled finite homology-to-homotopy passage
used in those stages; it does not manufacture their smooth structures.
