# Renewed unrestricted finite-type tensor authoring: verified support obstruction

This investigation follows the owner's renewed proof-authoring authorization in
`../../owner-renewed-proof-authoring-authorization.json`. It extends the recorded
work; it does not reset either original round, assert native acceptance, or
change a source item. The required helper
`lem-based-finite-type-tensor-bars-have-finite-correction-envelopes` has not been
authored, because a complete unrestricted proof has not been established.

## Full sources actually read in this extension

The complete seven-page Bao–Wang paper, arXiv:1403.0039v2, was read from the
retained PDF `/tmp/quasi-r-bao-wang.pdf`. Lusztig's author-hosted book scan
`/tmp/reader8-sources/lusztig.pdf` was inspected visually at PDF pages 223–226
(printed 214–217), 228–229 (printed 219–220), and 203–205 (printed 194–196).
These are actual full pages, not search snippets. Original source hashes and
acquisition history are retained in `../round1/current-hashes-and-sources.json`.
No additional authoritative reference has been acquired.

Lusztig27.1.2 defines a based module with **finite-dimensionality** in addition
to the four numbered conditions. Bao–Wang§2.1 explicitly replaces that
finite-dimensionality condition by integrability. Lusztig27.1.6 starts with a
globally maximal actual highest type. Proposition27.1.8 proceeds by induction
on the finite total dimension and removes that maximal type. Bao–Wang
Remark2.10 extends this argument in its bounded `O_int` category by induction
on the finite dimension of the relevant highest-type space. None of these
passages proves a basis-compatible finite envelope for a completely arbitrary
two-sided-unbounded four-axiom based module.

Lusztig24.2.1 assumes each order **interval** is finite and constructs individual
transition coefficients recursively. Lusztig27.3.1 applies the lemma to finite
`B × B′`, so its coefficient family has finite columns there. For an infinite
index set, finite intervals do not prove finite columns in the resulting
correction matrix. The genuine abstract counterexample in
`../round1/abstract-triangular-counterexample.md` shows precisely why the missing
column-support conclusion cannot be inferred from integral finite-column bar,
finite-column inverse, finite intervals, and involutivity alone. Bao–Wang's
Theorem2.7 uses a highest or lowest factor, providing the separate transfer
bound; its unrestricted conditional associativity paragraph does not supply a
new proof of finite correction supports beyond these hypotheses.

## A universal algebra-operator correction cannot fill this gap

A tempting alternative is to construct coefficients of a universal formal
operator `Γ` in the completed positive-half tensor negative-half algebra,
solve `Γ = Θ bar(Γ)` coefficientwise, then evaluate it on each raw tensor
seed. This route does not produce the required normalized lifts for arbitrary
based lattices, even in finite dimension.

Use the fully verified sl-two module of
`../round2/balanced-restriction-counterexample.md`. Put `p = q + q^-1`, let
`M = V(2) ⊕ V(4)`, and use the based vectors
`c0 = u0 + v1/p`, `c1 = u1`, `c2 = u2 - v3/p`, together with all `vs`.
Let the other factor be `N = V(1)` with divided basis `w0,w1`. The raw seed
`e = c1 ⊗ w0` has finite cyclic tensor space
`W = (U c1) ⊗ (U w0) = V(2) ⊗ V(1)`.

Every tensor algebra operator in `U ⊗ U` preserves `W`. Consequently every
vectorwise finite evaluated series of such operators preserves `W` as well;
this includes series in either positive/negative pair of halves. But the
unique normalized tensor lift in the actual modified integral lattice is

`g = e + q^2 c0 ⊗ w1 - q v1 ⊗ w1`

`  = e + q^2 u0 ⊗ w1 - (1/p) v1 ⊗ w1`.

Its nonzero `V(4)` constituent proves `g` is outside `W`. The full prior
calculation proves that a lift inside `W` would need simultaneously
`x - bar(x) = q^2 - q^-2`, `x in q Z[q]`, and `x/p in q Z[q]`. The unique
positive-polynomial solution is `x=q^2`, for which the last condition fails.
Thus no such evaluated universal algebra-operator correction can produce
this particular based lift. This is a rejection of that proof route, not a
counterexample to tensor globalization.

The same example also explains why correction must use the actual integral
based lattice: for the standard direct-sum lattice the normalized lift is
`e + q^2 u0 ⊗ w1`, while the modified lattice gives the displayed `g`.
The field module, its bars, and its regular zero chart agree. The integral
lattice differs, and hence the tensor balanced lift differs. Naturality with
respect to arbitrary field module maps is unavailable; only exact **based**
maps have the appropriate compatibility.

## Exact remaining task

The unrestricted integral quasi-R **action** and its vectorwise finiteness are
already proved in the current supplier. The bounded full-tensor constructions
are also already proved. The still missing clause is finite supported
positive-q corrected lifts for arbitrary based integrable finite-type pairs,
and finite inverse transitions, with no global label bound. A sufficient proof
must establish a genuinely basis-compatible finite envelope or another
algebraic support argument that can leave a seed's finite cyclic orbit.
Finite field orbits, finite crystal components, unproved balanced restrictions,
generic triangular correction, and a universal algebra-operator correction do
not supply it.

No new complete unrestricted helper, valid quantum counterexample, or surgical
source repair has resulted from this extension so far. Original Statements,
both old repair rounds, all native histories, the 34-item active writer scope,
manifests, contracts, pages, ledger, runtime state, and Git are unchanged by
this author. Mechanical changed-item checks are not applicable because no item
carrier was edited. No proof completion or mathematical acceptance is claimed.
