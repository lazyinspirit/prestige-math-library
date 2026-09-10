# Published quasi-isometry characterization audit — 2026-09-11

This bounded audit follows the active HG author handoff. It covers the complete
current target, both declared dependencies, the exact definitions of a
quasi-isometric embedding and bounded distance, and direct published consumers.
It is not a full audit of the quasi-isometry page or transitive HG closure. No
published item was edited.

## Target and deduplication

`cor-quasi-isometries-are-exactly-the-coarsely-dense-quasi-isometric-embeddings`,
SHA-256
`c6a8902c1ca3e10debca8789beb1b1f6354b5ef1e2575de925860ccdc8873c1c`,
is published and has no aliases. Before classification, the whole canonical
ledger was searched by exact ID, title/mechanism, coarse-inverse and lower-bound
phrases, and both supplier IDs. The target had no classification row. This
audit introduces one A-P row.

## Exact proof gap

The forward implication in proof 1.1 is sound. Under the stated AC, published
`thm-a-quasi-isometric-embedding-with-coarsely-dense-image-admits-a-quasi-inverse`
supplies a coarse Lipschitz quasi-inverse, exactly meeting the library's
definition of quasi-isometry.

For the converse, the library defines a quasi-isometry as a coarse Lipschitz
map `f` admitting a coarse Lipschitz quasi-inverse `g`. Proof 2.1 uses the
bounded-distance estimate for `f g` to prove only that `f[X]` is coarsely
dense. It never proves that `f` is a quasi-isometric embedding, in particular
its lower distance bound. Neither declared dependency supplies that converse
bound as a theorem. This is a missing proof clause, rather than a false
statement or an omitted redundant edge.

The repair is elementary. Let

`d_X(g(f(x)),x) <= D`

for all `x`, and enlarge the coarse-Lipschitz multiplicative constant of `g`
to `A >= 1`, so

`d_X(g(y),g(y')) <= A d_Y(y,y') + B`.

Then the triangle inequality gives

`d_X(x,x') <= 2D + A d_Y(f(x),f(x')) + B`,

hence

`d_Y(f(x),f(x')) >= A^(-1)d_X(x,x') - A^(-1)(2D+B)`.

Combine this with the already supplied coarse upper bound for `f`, enlarging
constants to one common quasi-isometric-embedding pair. Proof 2.1's existing
`f g` estimate then supplies coarse density.

Clara Löh, *Geometric Group Theory: An Introduction*, Proposition 5.1.10,
<https://loeh.app.uni-regensburg.de/teaching/ggt_ws1011/lecture_notes_old.pdf>,
states the same alternative characterization and separates the
quasi-isometric-embedding and quasi-dense-image obligations. Kapovich's
*Lectures on Quasi-Isometric Rigidity*, Definition 1.1 and Exercise 1.2,
<https://www.math.ucdavis.edu/~kapovich/280-2020/pc_lectures.pdf>, uses the
same coarse-inverse definition as the library and records this equivalence.
These readings corroborate the target statement; the explicit estimate above
is the proposed local repair.

## Impact and disposition

The adjacent supplier
`thm-a-quasi-isometric-embedding-with-coarsely-dense-image-admits-a-quasi-inverse`,
SHA-256
`cf2186080f5bf06a1581fbb6481a47cd736e6c31ef03e822e9b3c38d0730c193`,
has a separate narrow wording defect. In proof 2.1 the first displayed chain
uses the **lower** quasi-isometric-embedding bound for `f` to obtain an upper
coarse-Lipschitz bound for `g`, but the prose calls it the "upper inequality
for `f`." The display, rearrangement and remainder of the proof are correct;
replace "upper" with "lower." This is newly A-P because the printed proof
attribution is false, but it creates no mathematical blocker and needs no new
supplier.

The complete definitions
`def-coarsely-dense-subset-and-quasi-isometry`,
`def-coarse-lipschitz-map-and-quasi-isometric-embedding`, and
`def-bounded-distance-between-maps` were also read. Their quantified clauses,
empty-space convention and constant domains are coherent in the exact uses
above. They receive bounded no-repair-needed dispositions; this does not
certify their transitive dependencies or all consumers.

The direct published consumer
`thm-two-metric-spaces-are-quasi-isometric-exactly-when-they-contain-bilipschitz-equivalent-separated-nets`
was then read in full, SHA-256
`b80b7aaf3db967613edee15b90fd8c575315eb6925c3c0774643e5e555da360b`.
Proof 1.1 uses the exact affected converse of the characterization to obtain a
quasi-isometric embedding from an abstract coarse-inverse quasi-isometry, but
does not reproduce the missing lower-bound estimate. It therefore inherits
that exact proof obligation.

The same step has a separate definedness gap. It starts the maximal separated
set argument with the empty set in its Zorn poset, obtains a maximal `A`, and
then writes `d(x,A)`. Published `def-metric-bounded-diameter` defines
point-to-set distance only when the set is nonempty. If `X` is nonempty,
maximality does imply `A` is nonempty, but the proof does not state that before
using the partial notation; if `X` is empty, `A` is empty and the expression is
undefined. Handle the empty-space case first, then show a maximal separated set
is nonempty, or use the quantified net condition directly: if no `a in A`
lies within the desired radius of `x`, adjoining `x` preserves separation.
After these repairs, the positive coefficient
`L^(-1)-C/(2LC+1)` and the bilipschitz/net estimates in proof 2.1 are sound.

This direct consumer is newly A-P for these two exact gaps. The active HG draft
consumer writes the coarse-inverse lower-bound estimate locally and therefore
is not blocked. Existing published definitions suffice; no new Phase-2 pair is
identified.

Disposition: the characterization, adjacent supplier and separated-net theorem
are newly A-P; the three exact definitions are newly bounded clear. Six new
indexed IDs are added with no duplicate and no exhaustive consumer or
transitive-closure claim.
