# Actual periodic module and the remaining tensor escape obligation

The new draft construction supplier is
`lem-two-cyclotomic-shears-give-a-periodic-integrable-based-sl-two-chain`.
It extends the genuine finite `V(2) → V(4)` graph deformation with alternating
denominators `p=q+q^-1` and `h=q^2+q^-2`. This is why the new extension avoids
the old repeated-`[2]` integral-action failure: adjacent denominators are
distinct primes, so cross terms divisible by both are divisible by their
product. It does not overwrite or relabel that old failed attempt.

The source types are `n_(2k)=8k+2`, `n_(2k+1)=8k+4`; shifts are `1,3`.
Both modular maps have constant signed coefficients on their supported
positions. Their target positions are odd while their source positions are
even, giving exact `S²=0`, finite columns and finite inverse. The item proves
every divided E/F and toral compatibility modulo the denominators, integral
conjugated action, both regular charts, actual crystal residues, integrability
and the coefficientwise balanced map. Its six-step precheck, renderer,
proof-layout and proposed proof-contract checks passed. This certifies local
authoring of the module, not native acceptance or tensor globalization.

## The correct seed and finite cuts

The seed in two copies is `e=b_(0,0)⊗b_(0,2)` with factor weights `2,-2`.
It has total weight zero. Both vectors are deformed:
`b_(0,0)=u_(0,0)+u_(1,1)/p` and
`b_(0,2)=u_(0,2)-u_(1,3)/p`. Using two top vectors would change the seed and
does not reproduce the current calculations.

The cut `M^(J)` has constituents `0,...,J` and omits the last outgoing shear
`T_J`. The complete module proof applies to every such cut. Its tensor bar is
finite and integral: the actual rank-one quasi-R component is
`q^-r ∏_(a=1)^r(q^(2a)-1) E^(r)⊗F^(r)`, with scalar in `A`; all divided
operators preserve the actual integral factor lattices; and finite standard
constituents bound the evaluated root degrees. Degree zero is the identity,
and every positive degree raises the first weight. Field quasi-R unitarity
makes the bar involutive. Finite transfer induction therefore supplies the
unique normalized positive-polynomial corrected seed in each cut.

Uniqueness needs no inference about an infinite completion. If a nonzero
finite-support fixed vector had every raw coefficient in `q Z[q]`, choose
the least first weight among its finitely many nonzero coefficients. No
strictly raising bar term can enter that weight from another nonzero
coefficient. Each coefficient there would equal its own bar, impossible
for a nonzero strictly positive polynomial. This also proves uniqueness
of any finite normalized lift in the full algebraic module.

## Exact finite-cut comparison

Suppose a normalized full-module lift had finite raw support with maximal
factor index `K`. For every `J≥K+2`, the seed and the candidate have exactly
the same raw expressions in `M^(J)⊗M^(J)`. Expand a raw factor via `C`, raising
its constituent index by at most one; the field quasi-R action preserves
these constituent indices; reexpress via `C^-1`, raising an index by at most
one again. Every used shear has index at most `K+1`, so is present in the cut.
The only resulting index-`K+2` vectors are images of `T_(K+1)` and have odd
positions; the next shear kills them exactly. Thus their full and cut raw
representatives agree too. This proves equality of the complete bar columns,
not just an equality modulo a filtration. The candidate would therefore
equal the unique corrected seed of every cut `J≥K+2`.

Consequently an all-cut escape result forcing a nonzero coefficient with
factor index tending to infinity would immediately disprove finite global
correction. That result is assigned to the periodic escape constructor.
It has not yet been proved or used as an accepted dependency here. Small-cut
nonzero endpoint computations do not establish it.

## A proved finite-state support reduction

Let `a` be the first divided position and let `d=n_l-b` be the second
position's distance from its string bottom. On the subspace with
`0≤a,d≤3`, `C` and `C^-1` preserve this bound: an even-link shear sends
offsets `0→1` and `2→3`; an odd-link shear sends only `0→3`. The quasi-R
actions only decrease `a` and `d`. Thus all raw bar columns reached by the
seed, and every cut correction obtained from them, stay in this subspace.
Weight zero gives `n_j-n_l=2(a-d)`, so constituent types differ by at most
six. Nonadjacent types differ by at least eight; only equal or adjacent
constituent indices occur. Equal indices have `a=d` in `0,...,3`.
An adjacent type gap of two gives three allowed offsets in each direction;
an adjacent type gap of six gives one in each direction. This is an exact
bounded-width algebraic support reduction, not a bounded global label set.

There is also an elementary infinite raw bar graph. For
`e_j=b_(j,0)⊗b_(j,n_j)`, its bar has nonzero coordinate at `e_(j+1)`.
Only the constituent term involving both next-string interior vectors can
contribute there: the other three terms have either a highest first vector
or a lowest second vector. The coefficient is
`-q^(-r_j) ∏_(a=1)^(r_j)(q^(2a)-1) Gaussian(n_(j+1),r_j)^2 / p_j^2`,
which is nonzero. Hence no finite raw-basis-subset bar-stable tensor envelope
contains `e_0`. This does **not** imply that its positive-polynomial fixed
lift has infinite support: correction coefficients at other raw vertices
can cancel further propagation. The distinction remains explicit.

The original two supplier/consumer carriers and their Statements are still
unchanged. No unsupported tensor counterexample, conditional replacement,
native acceptance, history reset, ledger closure, publication or push is
claimed by this author.
