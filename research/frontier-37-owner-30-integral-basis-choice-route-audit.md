# Integral-basis Choice-route audit

Date: 2026-10-01

## Scope and current text inspected

This began as a report-only audit of the published proof route for
`thm-ring-of-integers-free-of-rank-degree`, its trace-pairing supplier, and the
actual suppliers used in the lattice sandwich. No item or dependency was
changed during that initial audit; the later authorized theorem repair is
recorded below.

Current SHA-256 values:

- `items/thm-ring-of-integers-free-of-rank-degree.md`:
  `2a1c85533502c2e1430ea4a8bbf533dda535fec943a6e00bce4271dccdfec7b3`
- `items/lem-trace-pairing-for-a-finite-separable-extension.md`:
  `9fd436847e6670414a9860938d7890b50c7462452f58269cf5b37a6fc912f1d5`
- `items/thm-trace-form-is-nondegenerate-iff-separable.md`:
  `a0d56a2fe326d7b5c745bcd81ff3c0a2449cb74fa1d4c76fdab61f3978f59229`
- `items/thm-field-norm-and-trace-by-embeddings.md`:
  `57f5579acce221c323ef3dda75742dec187c4c64b5a4f85e86daf61e71abb35d`
- `items/cor-trace-and-norm-of-an-algebraic-integer.md`:
  `224652512deb727c8e82ac99433dea8f8f4fcccb781dcd3b223831f9eb7b3673`
- `items/cor-algebraic-integer-minimal-polynomial-criterion.md`:
  `3a622d1a3c9b8eafbfb5524f11590f302c95686112b210a130a30c0719a10e71`
- `items/thm-clearing-denominators-for-an-algebraic-number.md`:
  `536e04fe772dff2bdf1f72bdfe788272626ead7ad0dc1f476cbabf746b1034cb`
- `items/cor-integral-elements-form-a-subring.md`:
  `4def163964d8ecbb244654215b4273c2a1bb630daf1d002c6d18c1aae09fbb67`
- `items/lem-subgroups-of-z-are-cyclic.md`:
  `cb2f45bc4edb0f23ac17ffa4f7856444fb41d292abb706478fecf27e13ccf578`

I read the complete bodies of these items, the target's direct suppliers
`def-number-field`, `def-ring-of-integers-of-a-number-field`,
`def-field-norm-and-trace`, and the Choice-bearing algebraic-closure suppliers
identified below. I also read Milne, *Algebraic Number Theory*, pp. 34–37 of
the full PDF (`https://www.jmilne.org/math/CourseNotes/ANT.pdf`), including
Proposition 2.26 and Proposition 2.29.

## Finding: the result has a choice-free proof, but the current cited route is overpowered

The rank-degree theorem's Statement does not assume Choice. Its current proof
uses [F2] to establish separability and [F3] to invoke the generic trace-pairing
lemma. The lemma is only a wrapper around
`thm-trace-form-is-nondegenerate-iff-separable`; the separable direction of
that theorem invokes `thm-field-norm-and-trace-by-embeddings` to express the
trace as a sum over embeddings into an algebraic closure.

The relevant existence route is explicit in the current library:

`def-separable-degree` says that an algebraic closure exists assuming Choice
and depends on `thm-existence-of-algebraic-closures`;
`thm-existence-of-algebraic-closures` assumes Choice and uses
`thm-one-step-simultaneous-root-extension`; that theorem uses the
Choice-dependent maximal-ideal theorem and Zorn's lemma. Thus, for a number
field supplied without an algebraic closure, the present F2/F3 citation route
does not establish its intermediate closure-dependent facts in ZF.

This identifies the exact issue; it is not a blanket claim that finite
separable trace formulas require Choice. A splitting field for one specified
finite separable extension can be built by adjoining roots in finitely many
successive steps. Each step involves a single root choice, so this finite
construction does not require an arbitrary choice function or an infinite
algebraic closure. The existing generic supplier instead asks for the latter,
as a stated assumption to its embedding formula and through its
separable-degree dependency. For the present base field `Q`, both routes are
unnecessary: the trace pairing is nondegenerate by the reciprocal witness
below.

There is also a declared but unused generic edge in
`cor-trace-and-norm-of-an-algebraic-integer`: its `deps` includes
`thm-field-norm-and-trace-by-embeddings`, but its proof establishes trace
integrality directly from the minimal polynomial and a finite basis. That edge
should not be mistaken for a premise actually used in that proof.

## Choice-free proof route for the integral-basis theorem

The current proof already contains the lattice sandwich architecture. Its only
needed replacement is the generic separability/trace-pairing route in [F2] and
[F3]. The following supplies the missing nondegeneracy directly over `Q` and
keeps the trace-integrality supplier on its actual proof route.

1. Put `n=[K:Q]` and take a finite `Q`-basis `e_1,...,e_n`. For each basis
   element, `thm-clearing-denominators-for-an-algebraic-number` gives a
   positive integer `m_i` such that `u_i=m_i e_i` is integral. The `u_i`
   remain a `Q`-basis. With `M=sum Z u_i`, closure of integral elements under
   addition and multiplication gives `M subseteq O_K`.
2. For any nonzero `x in K`, take `y=x^{-1}`. Multiplication by `xy=1` is the
   identity on the `n`-dimensional `Q`-space `K`, hence
   `Tr_{K/Q}(xy)=Tr_{K/Q}(1)=n != 0` in `Q`. This proves that the bilinear
   trace form is nondegenerate without separability, embeddings, or an
   algebraic closure.
3. Consequently the Gram matrix
   `A=(Tr_{K/Q}(u_i u_j))_{i,j}` has zero kernel: if its coefficient vector
   represents `x` in the `Q`-basis and is in the kernel, then
   `Tr(yx)=0` for every `y in K`; taking `y=x^{-1}` forces `x=0`. Finite
   linear algebra therefore gives trace-dual vectors `u_j^*` satisfying
   `Tr(u_i u_j^*)=delta_ij`.
4. Clear the finitely many rational coordinates of all `u_j^*` with one
   positive integer `c`. Then `c u_j^* in M subseteq O_K`. For
   `x=sum a_i u_i in O_K`,
   `c a_j=Tr_{K/Q}(x c u_j^*)`. The product is integral because integral
   elements form a subring, and its trace is in `Z` by
   `cor-trace-and-norm-of-an-algebraic-integer`. Hence
   `M subseteq O_K subseteq c^{-1}M`.
5. The trace-integrality proof used here has a finite, closure-free route. If
   `alpha` is integral, its monic minimal polynomial
   `f=X^r+c_{r-1}X^{r-1}+...+c_0` has coefficients in `Z`. Put
   `h=[K:Q(alpha)]` and choose a finite `Q(alpha)`-basis of `K`. On each
   corresponding `Q`-block, multiplication by `alpha` has companion matrix
   for `f`; equivalently its characteristic polynomial is `f^h`. Thus its
   trace is `-h c_{r-1}`, an integer. This is the actual route in the cited
   corollary's proof; the generic embeddings theorem is not needed.
6. Since `c^{-1}M` is isomorphic to `Z^n`, prove by induction on `n` that
   every additive subgroup of `Z^n` has a finite basis. Project onto the first
   coordinate. Its image is `0` or `dZ` by
   `lem-subgroups-of-z-are-cyclic`. In the zero case apply induction to the
   kernel. In the nonzero case choose one lift of `d`, adjoin a basis of the
   kernel from induction, and verify spanning by subtracting the appropriate
   multiple of the lift; independence follows first in the projected
   coordinate and then in the kernel. This uses one lift for this fixed
   subgroup at this finite induction stage, not a choice of lifts for a
   family.
7. Apply the subgroup result to `O_K <= c^{-1}M`. Its finite `Z`-basis spans
   `K` over `Q` because it contains the spanning lattice `M`. Its
   `Z`-independence implies `Q`-independence after clearing denominators.
   Therefore the basis has exactly `n` elements.

All selections above are finite-dimensional basis choices, finite denominator
clearing, unique solutions of finite linear systems, least-positive-generator
choices in `Z`, or a single lift for one subgroup at a time. No arbitrary
choice function, dependent choice, or algebraic closure is needed. This route
preserves the full rank-degree conclusion and proves it in ZF.

## Source cross-check and disposition

Milne's Proposition 2.26 uses a finite Galois extension to make the separable
embedding-evaluation matrix invertible; this confirms the distinction between
a finite splitting/Galois closure for a fixed extension and the general
algebraic-closure existence theorem. Proposition 2.29 gives the same integral
lattice sandwich, using a nondegenerate trace pairing, a trace-dual basis, and
integral traces. The local reciprocal argument above is a Q-specific proof of
the needed nondegeneracy and avoids invoking either closure construction.

No mathematical defect was found in the rank-degree conclusion or in the
lattice-sandwich strategy. The proof's then-current `[F2]`/`[F3]` dependency
route did carry a Choice-sensitive closure prerequisite; the later authorized
repair replaces that route with the reciprocal trace argument in the section
below. The finite trace-integrality supplier remains unchanged; its body
proves the exact integer-trace fact needed without embeddings.

## Published proof repair: `thm-ring-of-integers-free-of-rank-degree`

Authorized single-item repair completed on 2026-10-01. The exact Statement,
published status, and unqualified ZF interface are preserved. The proof now
derives trace-pairing bilinearity from the multiplication-operator trace and
nondegeneracy from `x != 0` and `y=x^{-1}`, so the perfectness, separability,
and generic trace-pairing route is no longer needed. It retains the
trace-dual-basis lattice sandwich and proves the subgroup-of-`Z^m` induction
inline, including the one-lift spanning and independence argument. The actual
finite companion-block trace-integrality supplier is unchanged.

The SHA-256 of the exact `## Statement` section, including its heading and
trailing newline, is unchanged:

- Before: `edf331bae29bda9b61f1945fb16c04e20fcddaaec680e320d6a5433bab661cb1`
- After:  `edf331bae29bda9b61f1945fb16c04e20fcddaaec680e320d6a5433bab661cb1`

The item file SHA-256 changed from
`2a1c85533502c2e1430ea4a8bbf533dda535fec943a6e00bce4271dccdfec7b3` to
`4e8c6d6fb6a0bd775fad4c47564b0c7cbaffd4ddb7eaac7601a996fe96e06af1`.
The stale `verification.audited: 2026-09-30` field was removed; the local
`verification.precheck: pass` remains because the current canonical precheck
passes. No independent audit stamp was added.

### Dependency reconciliation and homes

The exact `deps` set before this repair was:

`def-ring-of-integers-of-a-number-field`, `def-number-field`,
`thm-clearing-denominators-for-an-algebraic-number`,
`cor-integral-elements-form-a-subring`,
`cor-trace-and-norm-of-an-algebraic-integer`,
`cor-fields-of-characteristic-zero-and-finite-fields-are-perfect`,
`cor-algebraic-extensions-of-perfect-fields-are-separable`,
`lem-trace-pairing-for-a-finite-separable-extension`,
`thm-invertible-matrix-theorem`, and `lem-subgroups-of-z-are-cyclic`.

The exact `deps` set after the repair is:

`def-ring-of-integers-of-a-number-field`, `def-number-field`,
`def-field-norm-and-trace`,
`thm-clearing-denominators-for-an-algebraic-number`,
`cor-integral-elements-form-a-subring`,
`cor-trace-and-norm-of-an-algebraic-integer`,
`thm-invertible-matrix-theorem`, and `lem-subgroups-of-z-are-cyclic`.

Thus the three closure-route edges were removed and the actual multiplication
trace definition was added. The current direct dependencies' actual page homes
are:

- `def-ring-of-integers-of-a-number-field`, `def-number-field`,
  `thm-clearing-denominators-for-an-algebraic-number`, and
  `cor-trace-and-norm-of-an-algebraic-integer`:
  `library/number-theory/number-fields-rings-of-integers-and-discriminants.md`
- `def-field-norm-and-trace`:
  `library/abstract-algebra/solvability-by-radicals-and-kummer-theory.md`
- `cor-integral-elements-form-a-subring`:
  `library/abstract-algebra/chain-conditions-and-semisimple-modules.md`
- `thm-invertible-matrix-theorem`:
  `library/linear-algebra/gaussian-elimination-and-row-reduction.md`
- `lem-subgroups-of-z-are-cyclic`:
  `library/number-theory/divisibility-gcd-and-bezout.md`

### Direct consumers and actual homes

The 13 direct consumers, identified from their current frontmatter `deps`, and
their actual page homes are:

- `cor-no-nontrivial-number-field-is-unramified-over-q` and
  `lem-finitely-many-number-field-ideals-of-bounded-norm`:
  `library/number-theory/minkowski-theory-and-number-field-class-groups.md`
- `def-discriminant-of-a-number-field-basis-and-order`,
  `thm-number-field-discriminant-is-well-defined-and-nonzero`, and
  `thm-orders-have-integral-bases-and-finite-index`:
  `library/number-theory/number-fields-rings-of-integers-and-discriminants.md`
- `def-ramification-index`, `lem-nonzero-number-field-ideal-has-finite-quotient`,
  `thm-number-field-integral-ideal-factorisation-in-zf`, and
  `thm-ramified-primes-and-the-number-field-discriminant`:
  `library/number-theory/prime-ideal-decomposition-ramification-and-the-different.md`
- `lem-algebraic-integer-is-a-unit-iff-norm-is-plus-or-minus-one`:
  `library/number-theory/dirichlets-unit-theorem-regulators-and-s-units.md`
- `lem-coprime-discriminant-compositum-integral-basis` and
  `lem-prime-power-cyclotomic-integral-structure`:
  `library/number-theory/cyclotomic-arithmetic-and-reciprocity-via-frobenius.md`
- `thm-ring-of-integers-and-ideals-are-full-lattices`:
  `library/number-theory/minkowski-theory-and-number-field-class-groups.md`

The repaired theorem itself remains homed at
`library/number-theory/number-fields-rings-of-integers-and-discriminants.md`.

### Scoped verification

- `node tools/tsx-run.mjs tools/precheck.mts items/thm-ring-of-integers-free-of-rank-degree.md`:
  pass, 1 checked, 0 failing. The initial attempt proposed the canonical
  phase-order repair; it was adopted before this passing run.
- `node tools/rendercheck.mjs items/thm-ring-of-integers-free-of-rank-degree.md`:
  pass; frontmatter and rendered math parse.

No broad gates, receipts, page/carrier edits, or independent certification
were performed.

### Root integration

Root read the full current replacement and actual8 supplier interfaces, synchronized the selected plan deps/strategy and number-theory prose, and confirmed all8 supplier homes already in the existing prerequisite closure (272 pages). Unchanged Statement and published status preserve all direct consumer interfaces. Helper target checks reused; no new gate or independent audit claim. Local owner review complete; ordinary draft consumer evidence must be reconciled only where changed inputs invalidate it.

## Batch-2 stable-input item-audit refresh

Date: 2026-10-01. This refresh followed the stable integration of the two
changed published suppliers. I read the complete current proof of
`thm-ring-of-integers-free-of-rank-degree.md` (SHA-256
`4e8c6d6fb6a0bd775fad4c47564b0c7cbaffd4ddb7eaac7601a996fe96e06af1`) and the
complete current proof of
`thm-ramified-primes-and-the-number-field-discriminant.md` (SHA-256
`12257848944ef8aa24393416bda3904ccebf09828be22f73c18ec5c5c8bf8629`). The
former has eight current direct dependencies and now proves the finite
integral basis by the reciprocal trace witness, the trace-dual lattice
sandwich, and finite induction for subgroups of `Z^n`. The latter has 32
direct interfaces; I read its full proof and checked that its reduction of the
trace form modulo `p` agrees with the discriminant matrix, its CRT/nilpotent
route proves degeneracy exactly for ramification, and its finite-field trace
pairing route proves the reduced factors nondegenerate. Those are the two
changed mathematical interfaces used in this refresh.

I reused the prior per-item proof routes in
`frontier-37-owner-30-minkowski-batch-audit.md`, including the six-repair
proof details and actual supplier maps. I did not reread the unchanged eleven
closed item proofs. The initial batch-2 `itemDecision` snapshot contained 31
selected items: 11 were already closed and 20 required a current item audit.
All 20 were non-owner rows with no existing escalation or hold. Before
recording, each of these 20 item's current frontmatter dependency list matched
its selected manifest dependency list exactly; the receipts below record the
sorted current direct dependency IDs examined. The two held discriminant
consumers were refreshed against the changed supplier interface: the local
corollary verifies the criterion for its chosen prime and the example uses
the criterion to turn a prime divisor of the discriminant into ramification.

The exact 20 refreshes and resulting item-input closure hashes are:

| Item | Decision | Direct dependencies recorded | Item-input closure SHA-256 |
| --- | --- | ---: | --- |
| `def-minkowski-embedding-of-a-number-field` | repaired | 3 | `fbe8ff686e5f5063967197af08ffcbc2ada0aa20e3ad9d8a48562d489be3b553` |
| `thm-ring-of-integers-and-ideals-are-full-lattices` | repaired | 9 | `0754bf638fbe4ddece04d4aef43ecdf778eca23f0a8e2c90e10e162042d4a442` |
| `thm-covolume-of-an-ideal-lattice` | accept | 12 | `cb0b50af8356a6dcba8d8326fc8501419eb51d13b7e7a7584f057ee0a6cbfbb8` |
| `lem-archimedean-norm-bound` | accept | 10 | `b7c20f212c76580e5c9cae14d33923804fcfbe69f930af4d701a4c82462f3dde` |
| `thm-small-element-in-a-number-field-ideal` | accept | 8 | `81303c4b43243cf4b9c8e24b4c108289f52419fd638c499da2eac6a176d29e21` |
| `thm-minkowski-bound-for-ideal-classes` | accept | 13 | `d5f72ba78b00dc18351d753c2b8fc9127ec4e7748ef2b7f51387bcb7b62467ee` |
| `lem-finitely-many-number-field-ideals-of-bounded-norm` | accept | 4 | `27553e91dadc204b916d3ba69041411a768596cfddc75206e89b7b82629497a4` |
| `thm-finiteness-of-the-number-field-class-group` | accept | 5 | `7b2a93862e1d0bf1be159d0b5860fd6dd1d762334c175b27690d1eccd3b6f356` |
| `cor-class-group-generated-by-small-primes` | accept | 8 | `bdd27cc770e6f2b45fa49d244bc3e4ac0e8abd7f204a197cdc70b5faee74b34c` |
| `cor-no-nontrivial-number-field-has-discriminant-plus-or-minus-one` | accept | 7 | `b563adcc055f3bf01462fefbde227874e892554a0e1dacc39f6b4b3c21fcd6e2` |
| `cor-no-nontrivial-number-field-is-unramified-over-q` | accept | 20 | `450c3ad2f221c2667bdf0d0026e5fcc0cb55498b66286f8d6d1d6c85581c5542` |
| `lem-hermite-minkowski-bounded-primitive-integral-element` | repaired | 19 | `dfecee3c02727d9a6fbef89afa29279c9cb705da03be0e226662f234ab836301` |
| `thm-hermite-minkowski-finiteness` | accept | 7 | `a0f0926b5ce2e3d5967c58514b47521a52bdcfc08b4547c21a178cea1ed406e5` |
| `ex-minkowski-bound-for-gaussian-integers` | accept | 11 | `3063e749700adbe97ae14d5b242a597382ef597d86c47c6be4b1f395e3dc764d` |
| `ex-class-group-of-q-sqrt-minus-five` | accept | 11 | `701ce81f1d7acb4927e0722f222934c4db5f609487bdc5439208ae3b75a7e2c5` |
| `ex-class-group-of-q-sqrt-ten` | accept | 14 | `edc396ce4f8eddaa2de2ca4adc1b7f61196476a6c14a50e4bcf25e1205685ec9` |
| `ex-class-group-from-small-prime-ideals` | repaired | 14 | `3b268e7a9a0b34e6815f957f8c21a87129825295c93d4dfb81f0759a69bcdced` |
| `ex-discriminant-lower-bound` | accept | 8 | `bc9fc7a976883a41bf376661387bae989fdce258ebb6bd214de7d06998258aee` |
| `ex-no-everywhere-unramified-extension-of-q` | accept | 7 | `ae845fd4470e190980b6c313429b43d99bf585e7938d0fc4bf63a49f422d656c` |
| `cex-minkowski-constants-change-under-scaled-embedding` | repaired | 10 | `c2f5b42a93ffad3b1b54b849211dc6afd8db9e209bca43d2c26a7aca2eccfe76` |

Each row is recorded at
`research/frontier-37-owner-30-step3b-review-<item-id>.json` with
`confidence: 1`. The post-write read-only `itemDecision` check covered exactly
these 20 rows and found 20/20 closed with the recorded `accept` or `repaired`
decision and no owner escalation. The 11 previously closed rows were left
untouched and reused: `def-full-euclidean-lattice-and-covolume`,
`lem-full-lattice-fundamental-domain-and-bounded-points`,
`lem-blichfeldt-lattice-point-principle`, `thm-minkowski-convex-body-theorem`,
`cor-minkowski-convex-body-theorem-at-equality`,
`def-successive-minima-of-a-convex-body-with-respect-to-a-lattice`,
`lem-successive-minima-attainment-and-adapted-flag`,
`lem-triangular-borel-maps-scale-euclidean-volume`,
`lem-minkowski-successive-minima-volume-deformation`,
`thm-minkowski-second-theorem-on-successive-minima`, and
`lem-bounded-conjugates-give-finitely-many-integral-polynomials`. Thus the
recorded batch-2 inventory is 31/31 closed after the targeted refresh; no
Step-3 final gate was run and no unchanged item receipt was rewritten.

One initial status-discovery command accidentally computed read-only item
decisions across the full run inventory before I applied the batch-2 filter;
it wrote no receipts and performed no proof audit. All proof refreshes and
receipt writes described here were restricted to the 20 named batch-2 items.

## Batch-3 and batch-4 stable-input item-audit refresh

Date: 2026-10-01. Scope was limited to the 25 batch-3 Dirichlet items and 31
batch-4 cyclotomic items in their current manifests. I read the complete
current rank-degree proof again (SHA-256
`4e8c6d6fb6a0bd775fad4c47564b0c7cbaffd4ddb7eaac7601a996fe96e06af1`) and the
complete current ramification/discriminant criterion (SHA-256
`12257848944ef8aa24393416bda3904ccebf09828be22f73c18ec5c5c8bf8629`). The
rank-degree Statement is unchanged; its current proof supplies an integral
basis by the trace-dual sandwich and finite induction for subgroups of
`Z^n`. The changed discriminant criterion's complete 32-interface proof was
also checked, including the finite-field trace-pairing criterion, CRT
decomposition and reduction of the integral-basis trace matrix modulo `p`.
The current published ideal-factorisation supplier used by the batch-4
monogenic route remains at SHA-256
`626959101a86491f5fca50994f7ca77984fc1c358b91c66f86a102426c459c81`, matching
the supplier hash in the completed batch-4 report.

I reused the full target proof-route audits in
`frontier-37-owner-30-dirichlet-completion.md` and
`frontier-37-owner-30-cyclotomic-completion.md`, cross-checking the detailed
Dirichlet and cyclotomic Step-3b reports against each selected target's actual
current dependency closure and use of the changed rank-degree interface. I
did not reread unchanged target bodies solely to recreate their completed
proof audits. In batch 3, the routes are: the norm/unit criterion uses the
rank theorem directly to obtain an integral basis; product formula and
S-unit consumers reach it through finite-quotient/bounded-ideal-norm results;
the logarithmic full-lattice route reaches it through the discriminant
definition, with the unit theorem, regulator and signature consumers
downstream; the remaining unit examples reach it through the audited
norm/unit criterion or those unit-theorem routes. In batch 4, the two
integral-basis lemmas use the rank theorem directly; the cyclotomic
integral-basis and discriminant items proceed through the prime-power
integral-structure lemma; monogenic factorisation uses the stable published
ideal-factorisation theorem; and the complete-splitting route reaches the
rank theorem through `def-ramification-index`. The remaining cyclotomic
factorisation, Frobenius, reciprocity and example rows proceed through those
audited intermediates.

The selected dependency-closure check found the changed rank-degree theorem
on all 19 open batch-3 paths and all 22 open batch-4 paths. It found no path
from any selected batch-3 or batch-4 item to the changed
`thm-ramified-primes-and-the-number-field-discriminant`; no selected proof
uses that criterion. All old confidence-1 dispositions and current direct
dependency lists matched the completed pair audits and current item
frontmatter/manifests. There were no owner-held rows or escalations. I left
the six current batch-3 and nine current batch-4 closed decisions untouched,
and refreshed only the 19 and 22 stale rows via `recordStep3` with their
current sorted direct dependency lists.

| Pair | Reused closed | Refreshed | Refreshed dispositions | Closed after refresh |
| --- | ---: | ---: | --- | ---: |
| Batch 3, Dirichlet | 6 | 19 | 10 `accept`, 9 `repaired` | 25/25 |
| Batch 4, cyclotomic | 9 | 22 | 17 `accept`, 5 `repaired` | 31/31 |

The exact refreshed receipt hashes are the current transitive item-input
closure SHA-256 values below. The receipt JSON records each target's sorted
direct dependency IDs and its evidence reason. In batch 4 the
`cor-unramified-prime-decomposition-in-a-cyclotomic-field` remark has a
forward reference to `ex-reduced-conductor-of-q-zeta-six`; the example uses
the corollary as a premise. That link is confined to the remark, not the
corollary's proof. The hashing closure therefore includes both rows and gives
them the same input hash; the mathematical route recorded for the corollary
uses its declared factorisation, conductor and Frobenius dependencies.

### Batch 3 refreshed rows

| Item | Decision | Current item-input closure SHA-256 |
| --- | --- | --- |
| `lem-algebraic-integer-is-a-unit-iff-norm-is-plus-or-minus-one` | accept | `1fa254823a5b2b44c8270a2233785a857f975a908ace8b89c41a19faea5d7db4` |
| `thm-product-formula-for-number-fields` | accept | `7664b52c9ba81cfe5f505ced66ad72ec7d4e149ab80e4e3d7085214751ad0621` |
| `lem-unit-logarithms-lie-in-the-product-formula-hyperplane` | accept | `f97ac0e0c3a5fc5135b0e2d9b8423bc7e5c7ec5a9736e6145ae09e82acae944f` |
| `lem-kernel-of-the-unit-logarithm-is-the-roots-of-unity` | repaired | `e6ca325bbdd54189d513d7076321684feff8d7b670642574dcfe015936813784` |
| `lem-logarithmic-unit-image-is-discrete` | accept | `f63933217f2d8188a3f92a37f117d78d76f666f92a6172f0f79ef81ba8c714ff` |
| `thm-logarithmic-unit-image-is-a-full-lattice` | repaired | `56b0297a286ad93678327792ba26c65117415236ec4d8edd47d33e21b563b0e7` |
| `thm-dirichlet-unit-theorem` | accept | `70a1701fae79b7d0883e96ff672dead2a333900e035256a484b92ed0e6222dcb` |
| `def-fundamental-units` | accept | `752d101950f76c2f8ba19bc996d919f8df80c5081fbb4579d9b67f8883368f41` |
| `def-number-field-regulator` | repaired | `befa6208e8b7adaeca7d59a1ae65c485327810f683b214b91e988e068333f15f` |
| `thm-number-field-regulator-is-well-defined` | repaired | `befa6208e8b7adaeca7d59a1ae65c485327810f683b214b91e988e068333f15f` |
| `cor-unit-ranks-by-number-field-signature` | repaired | `5399bc7fcdb0207edb81a13c32a263cbd413b0709980046a439749c57c0ca08b` |
| `thm-s-unit-theorem` | accept | `3fca4daccc3091ba52a4af162adec97a843cc605e4380b5bd39691c635a4c2fc` |
| `ex-units-of-q-and-imaginary-quadratic-fields` | repaired | `058a1f461359079930909a228643be21321499ce19775a5cc25535620c46ff05` |
| `ex-real-quadratic-units-and-pell` | repaired | `ebdc0d6855ce92acdaa6469f903b0dc2bd097833bd14a6790db3a6730bdb2d8a` |
| `ex-units-in-a-real-cubic-field` | accept | `9286056778408e0b454fb4207f9e103b27636118a54e418ab50a447e180d79e4` |
| `ex-regulator-of-a-real-quadratic-field` | accept | `916c3cf0d28cd16b593e435d4cad9026158cfb682f0c9ac59ee05e691760cbfc` |
| `ex-change-of-fundamental-units-preserves-regulator` | repaired | `c96194cd52512cdc93cb9cda7dc69bae9a45fd8d8167e742a0259d0a38468358` |
| `ex-s-units-of-q` | repaired | `90ea9a9a761e11a9de6d9c64378aa6835057b7103f679a8885a77f5e55fedf2f` |
| `cex-z-sqrt-d-units-need-not-equal-ok-units` | accept | `9fba767a3016c608b44740a17d1989674e44897d5d36442d6c23b583e7b23871` |

### Batch 4 refreshed rows

| Item | Decision | Current item-input closure SHA-256 |
| --- | --- | --- |
| `lem-prime-power-cyclotomic-integral-structure` | accept | `c5058df9d0bc84fb441572ab86c168bd3761960c81c8d6c0828059123811c829` |
| `lem-coprime-discriminant-compositum-integral-basis` | repaired | `abe6390398be89d5fe35aef51df41cc97755fac6dccae027f307e441647991f1` |
| `thm-cyclotomic-ring-of-integers` | accept | `364fc708acceb32774a2258b815ccb4640b3acfba4595d5697520444c9125fc8` |
| `thm-discriminant-of-a-cyclotomic-field` | repaired | `618ee48cc271174be4a8ce1afb47b0891d233f3f71701c1b1c7578431f36ede5` |
| `cor-total-ramification-in-a-prime-power-cyclotomic-field` | accept | `2d97f1f5b4343667b9d76c82d3dc1834fdd4690334e3af8b46abc6023ba3f5aa` |
| `lem-monogenic-prime-factorisation-by-polynomial-reduction` | repaired | `d048dc6d89715ca1fbd9a5625c2e30431f98b37f337028ed10290a1e1a000da6` |
| `lem-arithmetic-frobenius-on-a-cyclotomic-field` | repaired | `08203f6dd7292b82543babeba7eb0bf70dd099b15e331f90410afd08e56a73ca` |
| `thm-prime-factorisation-in-a-cyclotomic-field` | accept | `186ea53f7fb910c5a3f6b73d90a0f508598b7db2b688ad54c34c36e2879aa117` |
| `cor-cyclotomic-ramification-criterion` | accept | `f2de27996c6bea009402008683ab1c1dbea722a892575c555413985892fc473a` |
| `thm-conductor-of-a-full-cyclotomic-field` | repaired | `ca6999a43997dceb6d4bf5569fcb98eb35d3bdefbfdf6c00463103f5b017e5b1` |
| `cor-unramified-prime-decomposition-in-a-cyclotomic-field` | accept | `83c97877342e6aeea50e0f0ffc9281bdf1cac06a86908ff73fbb3a84450b788c` |
| `cor-complete-splitting-in-a-cyclotomic-field` | accept | `3848e6109756fad520932a4cac2977a7ee6eb75abf22e07e47108bd77ce5202f` |
| `thm-quadratic-frobenius-restriction-identity` | accept | `daa588adc21eeac4247272cfe7ec11d36269a3d9bf74b4e46817c70257305103` |
| `cor-quadratic-reciprocity-via-frobenius` | accept | `80743a3d7e15fbac13b70f117663ff5558c22a0fa6650ae2c08f5ca44d22b62b` |
| `cor-first-supplement-via-cyclotomic-frobenius` | accept | `0999b9132f81783d4319877cbbc0a474486d6e5bef8ee8c646f9bafc5e5fa7fb` |
| `cor-second-supplement-via-cyclotomic-frobenius` | accept | `7948d7f85411b45d601e3af23ca075bcec18ba076ca079d3c71899cc57108340` |
| `ex-reduced-conductor-of-q-zeta-six` | accept | `83c97877342e6aeea50e0f0ffc9281bdf1cac06a86908ff73fbb3a84450b788c` |
| `ex-arithmetic-of-q-zeta-five` | accept | `d8769e155797793654a032a4ae50bef50d395da5d8f21cde4fa0e04b3bd773d1` |
| `ex-prime-decomposition-in-q-zeta-eight` | accept | `90fb87144ec37eb634a08ab37667622e449df68946030fd28c0de9bf349f1b9f` |
| `ex-prime-decomposition-in-q-zeta-twelve` | accept | `054a0a3ed399cd641cfef8f205ae19b41ea7b94287cbf8e3239eca46c8a1b115` |
| `ex-frobenius-restriction-for-p-five-q-three` | accept | `b2a5b51310af7bb95547993702e69c709981ea726fc1ce9e0f843cdf6b3dfb30` |
| `ex-second-supplement-from-q-zeta-eight` | accept | `800d1019a1caedcc766e0806c296891a5fa78f2d8f5493dd63731e236be10703` |

After the writes, a filtered read-only `itemDecision` check covered the 41
refreshed targets and found all 41 closed at their recorded dispositions. The
initially current 15 items (6 in batch 3, 9 in batch 4) were reused. No item,
manifest, shared plan, gate or other receipt was edited, and no gate was run.
