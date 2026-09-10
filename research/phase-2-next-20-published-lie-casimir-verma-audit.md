# Published Casimir and Verma-chain audit — 2026-09-11

This bounded audit follows the finite-Weyl/Killing-form supplier pass. It reads
the complete current Casimir-eigenvalue proposition, its central-action input,
the two previously omitted Verma-chain descendants of that proposition, the
omitted sl2 example, and the published PBW interfaces actually needed below.
It is not a full audit of the Harish-Chandra, category O or Verma-module pages.
No published item was edited.

## Deduplication and closure correction

Exact-ID, alias, mechanism and supplier-ID searches found no classification
row for any of these five targets:

- `lem-central-action-on-a-cyclic-highest-weight-module-is-scalar`
- `prop-casimir-eigenvalue-on-a-highest-weight-module`
- `lem-every-verma-module-contains-a-simple-verma-submodule`
- `thm-verma-homomorphism-spaces-have-dimension-at-most-one`
- `ex-sl2-casimir-and-its-highest-weight-eigenvalue`

The canonical ledger's machine-described `ROOT-70` impact set omitted the last
four even though the current published dependency graph contains the exact
paths

`root-system theorem -> Casimir eigenvalue -> simple Verma submodule -> Verma
Hom bound`

and

`root-system theorem -> Casimir eigenvalue -> sl2 Casimir example`.

A fresh reverse-dependency traversal of published front matter gives 74 items,
including the root theorem. The ledger therefore renames the set `ROOT-74` and
adds exactly these four IDs. This corrects an impact map; it does not classify
all four as independently defective.

## Correct implicit PBW use

`lem-central-action-on-a-cyclic-highest-weight-module-is-scalar`, SHA-256
`ad1d3bbe30c1db59677f863eead46586a1ad38d224447ece104f03d4b2a4421a`,
has a true statement. Proof 1.1 abbreviates the reason that a vector of weight
lambda killed by the positive nilpotent subalgebra lies in the line generated
by the cyclic highest vector. The exact argument is already supplied by the
published PBW interfaces: the universal property gives a surjection from the
Verma module onto the cyclic module; the PBW model and the published Verma
weight-cone proposition give a one-dimensional top weight space. Equivalently,
triangular PBW writes every vector as a sum of negative-root monomials applied
to the generator, and only the scalar monomial retains weight lambda. Thus
`zv=cv`, and centrality propagates this equality to every `uv` exactly as proof
2.1 states.

Under the canonical rule that a clear correct implicit use of an adequate
published supplier is not dependency debt, this item receives a bounded-clear
disposition. An explicit PBW citation would be useful exposition only.

## Exact Casimir use and impact candidates

`prop-casimir-eigenvalue-on-a-highest-weight-module`, SHA-256
`bd5fb4e63dbf55fa98d93ff11b4f44372297cb1f7c61c15d0e250c6bb7a56322`,
was read completely. Once its already-A-P Killing, root-decomposition,
opposite-pairing and root-system suppliers are repaired, its calculation is
sound: Cartan and opposite-root dual bases give
`C=sum h_j h^j + sum_(alpha>0)(e_alpha f_alpha+f_alpha e_alpha)`;
the positive root vector kills the highest vector; the bracket is `H_alpha`;
and `sum_(alpha>0) lambda(H_alpha)=2(lambda,rho)`. The central-action lemma
above supplies scalar action. No independent proof defect is identified.
The item is a U-P exact impact candidate because it directly consumes the
affected suppliers and must be revalidated after their Phase-3 repairs.

`ex-sl2-casimir-and-its-highest-weight-eigenvalue`, SHA-256
`57f5e9c52b6618f0b4304dcdf4e1a2a7a7b886018e20e07d2421cd3b58e7af38`, is
likewise a U-P impact candidate. Its direct matrix calculation is correct for
the displayed basis:
`B(h,h)=8`, `B(e,f)=4`, hence
`C=h^2/8+(ef+fe)/4`, and the induced form gives the scalar
`lambda(lambda+2)/8`. It uses the affected Casimir proposition only for that
last general-to-rank-one specialization.

`thm-verma-homomorphism-spaces-have-dimension-at-most-one`, SHA-256
`1ff57648bb3bedb729e6f8a656d922fe8329c1921ad77de1bc2e205bb234a85d`, is a
U-P impact candidate through the exact simple-Verma-submodule input. Its
restriction argument is otherwise sound: proportionality on a nonzero simple
Verma submodule and injectivity of any nonzero difference force global
proportionality.

## Actual Verma proof and axiom gap

`lem-every-verma-module-contains-a-simple-verma-submodule`, SHA-256
`9613c1ca9378625be27d4055b1d7213477f9b5f39cbe02caafea7f5a1e852a46`,
is newly A-P. Proof 1.1 says to "repeatedly choose" a proper submodule and a
singular vector to obtain an infinite descending chain. That is a dependent
recursive choice, while neither the statement nor dependencies declare any
choice principle. This is an actual proof/axiom gap, not a missing direct edge
for an otherwise supplied use.

The theorem needs no new Phase-2 supplier and admits a choice-free local
repair. Proof 2.1 identifies a finite set of possible positive-lattice
differences beta from
`2(lambda+rho,beta)=(beta,beta)`: it is the intersection of a lattice with a
fixed sphere for the positive-definite root-space form. Let its cardinality be
N. Under the contrary assumption, perform only N+1 successive existential
choices, justified by ordinary finite induction, obtaining strictly increasing
heights among N+1 members of that finite set. This finite contradiction avoids
an infinite sequence and any DC assumption. The singular-vector, Verma
injectivity, Casimir and weight-cone suppliers already published are adequate
after their independently recorded repairs.

## Limits

## Remaining direct root-decomposition consumers

A follow-up reads the four remaining direct published consumers of
`thm-root-space-decomposition-relative-to-a-cartan-subalgebra` that had no
classification row, plus the Harish-Chandra definition used by one of them.
Exact-ID, aliases, mechanism and both affected supplier IDs were searched
before classification.

`thm-triangular-decomposition-from-a-chosen-positive-root-system`, SHA-256
`2d16494dccfb3a24a653fb3fca52fee8f860d5f1baa03e4ba06219b3935cfb09`, is a
U-P exact impact candidate. Proof 1.1 uses the affected exhaustiveness/direct
sum of the root decomposition, and proof 1.2 uses the newly A-P root-bracket
proposition. Conditional on those repairs, grouping positive and negative root
spaces is correct; closure follows because a root sum of positive roots is
positive and zero cannot occur; concatenated finite bases and the published
PBW theorem give the multiplication isomorphism. No additional proof defect is
identified in this scope.

`def-regular-root-hyperplane-arrangement-in-a-cartan-subalgebra`, SHA-256
`26246eea22f649bc9101ae034d380135b41d56d459b1d73592ed1a60364a0b3b`, is a
U-P exact impact candidate. It uses only the affected finite root-set
interface. Its displayed complement of the root kernels is internally
consistent and needs revalidation after the decomposition repair; no separate
false definition is identified.

`prop-centralizer-of-a-cartan-element-from-its-vanishing-roots`, SHA-256
`886380a64511a7ac1edabe131a291fdc192a1f168ba1a802065be11bb4b45cc8`, is a
U-P exact impact candidate. Its proof uses precisely the affected direct-sum
exhaustiveness: after writing `x=x_0+sum x_alpha`, the identity
`[h,x]=sum alpha(h)x_alpha` and directness give the displayed centralizer. The
calculation is sound after that supplier is repaired.

`lem-central-elements-have-weight-zero`, SHA-256
`2a253fbe2242ebf9e2a6c64516e494c3f3c5fc5675119ce7b409f4354714a3ba`, does
not use an affected root-space clause despite declaring two such dependencies.
Centrality directly gives `[h,z]=0` for every Cartan element, which is exactly
membership in the zero-weight subspace for the adjoint action. The full
`def-harish-chandra-projection` was read to check that convention. This item is
a bounded clear; removing unused dependencies is optional cleanup.

`def-harish-chandra-projection`, SHA-256
`def2263b271e6c97c41783ad497871c9d51bf9e6bbfe8444d81b9420fe48cebc`, is a
U-P exact impact candidate through the triangular-decomposition theorem. Its
PBW complement is correct: ordered monomials with a nontrivial negative factor
lie in `n^- U(g)`, those with only a nontrivial positive factor lie in
`U(g)n^+`, and the remaining terms form `U(h)`. The restricted projection on
the zero-weight subspace is therefore coherent once the upstream triangular
interface is repaired. No independent defect is identified.

This completes only the direct-consumer disposition of the affected published
root-decomposition theorem. It does not audit every downstream consumer of the
triangular or Harish-Chandra interfaces.

## Finite-Weyl convention interfaces

The four short convention items nearest the active finite-Weyl work were read
completely. Three already had one U-P row under the broad root impact map; those
rows are extended rather than duplicated. The Weyl-vector definition had no
row and is added as one U-P exact impact candidate.

`def-root-reflections-and-the-weyl-group-action`, SHA-256
`363ca0453e01b1ea078f5739b6fcdda041705a5717ad929b13d7e0ef21fb8600`, uses
the exact affected `H_alpha` and root-system clauses. Once repaired, the
denominator is nonzero and `alpha(alpha^vee)=2`, so the displayed linear map
is an involution and belongs to `GL(h*)`; generating a subgroup is then
well-defined. No separate formula defect is identified.

`def-fundamental-weights-for-a-chosen-simple-root-system`, SHA-256
`bf1316662b8d35392b85036f6c79d86dc1f1d4258719c310a757077c53d420fd`, uses
the exact affected root-system interface. For a simple system in the spanning
reduced root system, the simple coroots form a basis of the Cartan subalgebra,
so finite-dimensional duality gives the unique displayed functionals. This is
a coherent impact candidate pending the root repair, not a separately false
definition.

`def-weyl-vector-rho-for-a-chosen-positive-system`, SHA-256
`9bd9a10bda75c3edaa7acd5938254926323c7b161d9c70c57d10fa9b701f889a`, is
newly U-P through the affected triangular/positive-root interface. The finite
half-sum itself is well-defined and no independent defect is identified.

`lem-rho-shift-intertwines-the-dot-and-ordinary-weyl-actions`, SHA-256
`8e74ff783818228b757c12658185eaee481e0003c5ebcea032bb1e13ead9be05`, uses
the reflection action and Weyl vector above. Both directions of its proof are
the correct conjugation calculation for `Tf(lambda)=f(lambda-rho)`. Its
existing U-P row remains an impact candidate only.

## Limits

The closure recomputation is mechanical front-matter evidence. The
mathematical audit here is confined to the fourteen complete targets and their
actually used clauses. Other members of `ROOT-74` and downstream Lie items
retain their existing classifications and require their own item-level review.
