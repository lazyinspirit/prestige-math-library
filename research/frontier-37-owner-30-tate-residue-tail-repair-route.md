# Global residue theorem: Tate R2 tail repair route

Date: 2026-10-01  
Run: `frontier-37-owner-30`, batch 8  
Primary item: `items/thm-global-residue-theorem-algebraic-curve.md`  
Scope: report only; no mathematical item or shared state was edited.

## Finding

The tail conclusion is valid, but the current Step 2.1 inference is not. The
three summands in the adelic tail condition are `f A_T`, `fg A_T`, and
`fg^{-1} A_T`; their containment does not imply `g A_T subseteq A_T`. For
example, with `V=k((t))`, `A=k[[t]]`, `f=t`, and `g=t^{-1}`, the three
summands are contained in `A`, while `gA=t^{-1}k[[t]]` is not.

No alternate global-residue route is needed. The exact set `S` already chosen
in Step 1.3 is outside the poles of both `f` and `g` (and of `g^{-1}` when
`g != 0`). Thus `f` and `g` each preserve the tail lattice directly, by
pointwise integrality. That gives the full Tate R2 hypothesis for the
abstract-residue supplier. The global residue claim and its perfect-field
scope remain unchanged.

## Exact tail proof to use

For `g != 0`, let `S` be the current finite set from the adelic supplier, so
`f`, `g`, and `g^{-1}` are integral at each point of $T=C\setminus S$. At every
`p in T`, `f,g in A_p`; therefore `f A_p subseteq A_p` and
`g A_p subseteq A_p`. Taking products over `T` gives, independently,

`f A_T subseteq A_T` and `g A_T subseteq A_T`.

It follows that `fg A_T subseteq A_T` and `fg^2 A_T subseteq A_T` as well.
Consequently

`f A_T + fg A_T + fg^2 A_T subseteq A_T`,

which is the **full** R2 continuity condition in part (2) of
`lem-abstract-residue-basic-properties`. That supplier then gives
`res_{A_T}(f dg)=0`. The existing `fg^{-1}` summand in the adelic lemma is
not used to infer preservation by `g`; only the separately stated pointwise
integrality of `f` and `g` is used. If `g=0`, then `dg=0` and the generator
`f dg` is zero, so this case is immediate; no inverse or special tail choice
is needed.

The exact supplier hypotheses match: `lem-abstract-residue-basic-properties`
requires a `K`-module `V_T`, a `k`-subspace `A_T`, and `h A_T < A_T` for every
`h in K`, in addition to R2 for the particular `f,g`. The last, lattice
condition should be stated before invoking `res_{A_T}`. It follows directly
from the existing local pole calculation: if `h=0`, stability is immediate;
otherwise only finitely many `p in T` have `ord_p(h)<0`. At such a point,
writing `m_p=-ord_p(h)>0`, `(h A_p + A_p)/A_p` has dimension
`m_p [kappa(p):k]`, and the local quotient is zero at all other points. The
coordinate map embeds `(h A_T + A_T)/A_T` in the finite direct sum of those
local quotients, so it is finite-dimensional. This proves `h A_T < A_T` for
every `h in K`.
The finite-pole and local-quotient facts are already established in
`lem-adelic-quotient-computes-h1-structure-sheaf`; they can be repeated inline
for the tail or made explicit in the theorem's Facts.

## Complete finite-block trace route for Step 1.3

The tail residue can be separated from the finitely many local residues by
the following finite direct-sum operator argument. This fills the current
Step 1.3 assertion that the abstract residue of the finite product is the sum
of the component residues.

Let `V_T` be the restricted product over `T` and set `A_T=product_{p in T}A_p`.
Since `S` is finite, the definitions give `K`-module and lattice
identifications

`V_X = (direct sum_{p in S} K_p) direct-sum V_T`,

`A_X = (direct sum_{p in S} A_p) direct-sum A_T`.

This has finitely many blocks: one for each `p in S` and one tail block. Each
local pair `(K_p,A_p)` is stable for all `h in K`, since a pole of order `m`
contributes only the finite-dimensional quotient
`t_p^{-m}A_p/A_p`, of dimension `m[kappa(p):k]`. The tail pair is stable by
the preceding finite-pole argument.

For each block `i`, choose a `k`-linear projection `pi_i:V_i -> A_i`. For
`h=f` and `h=g`, put `h_i=pi_i m_h`, where `m_h` denotes multiplication by
`h`. Its image lies in `A_i`, so `h_i` is an `E_1(A_i)` lift. Since
`h A_i < A_i`, choose finite-dimensional `W_{h,i}` with
`h A_i subseteq A_i+W_{h,i}`. As `pi_i` is the identity on `A_i`,
`(pi_i m_h-m_h)(A_i)` lies in `(pi_i-1)(W_{h,i})`, which is finite-dimensional;
thus `h_i` is congruent to `m_h` modulo `E_2(A_i)` and is an admissible
abstract-residue lift.

Take the finite block direct sums `F_1=direct sum_i f_i` and
`G_1=direct sum_i g_i`. They are admissible lifts on `(V_X,A_X)`: their images
lie in `A_X`, and their discrepancies on `A_X` have finite-dimensional image
because they are finite sums of the blockwise finite-dimensional errors. Their
commutator is block diagonal,
`Theta=[F_1,G_1]=direct sum_i [f_i,g_i]`. Each block commutator lies in
`E_0(A_i)` and is finite potent. Choose a finite-potency exponent `N_i` for
each of the finitely many blocks and let `N=max_i N_i`. Then
`Theta^N(V_X)=direct sum_i [f_i,g_i]^N(V_i)` is finite-dimensional. This
proves finite potency of the one block-diagonal operator; it does not use
closure of arbitrary finite-potent endomorphisms under addition.

The finite-potent trace's (T2) axiom, applied successively to the invariant
blocks, now gives

`Tr_{V_X}(Theta) = sum_i Tr_{V_i}([f_i,g_i])`.

By the defining abstract-residue formula on each block, this is
`sum_{p in S} res_{A_p}(f dg) + res_{A_T}(f dg)`. The coefficient-trace
comparison identifies the finite-point terms with the local residues. The
R2 argument above kills the tail term. Thus the block decomposition invoked
in Step 1.3 is justified with one common finite-potency exponent, blockwise
admissible lifts, and the actual trace additivity axiom (T2), including the
tail block.

## Exact interfaces, dependencies, and impact

- `lem-abstract-residue-basic-properties` part (2) is Tate (R2): its actual
  condition is `fA+fgA+fg^2A subseteq A`. Its proof uses the projection lift
  `pi f`, computes a commutator with image in `A+gA` that kills both `A` and
  `gA`, and applies nilpotent-trace vanishing. The special case
  `fA subseteq A` and `gA subseteq A` is explicitly included in its statement.
  For exact interface accuracy, expand the global theorem's Fact [F4] to state
  this full R2 condition and its stable-`f,g` special case.
- `lem-adelic-quotient-computes-h1-structure-sheaf` part (2) supplies the
  existing finite `S`, the pointwise integrality of `f`, `g`, and `g^{-1}`,
  and the displayed `fg^{-1}` tail containment. Its local pole computation
  also supplies the finite-dimensional local quotient bound needed to see
  that the fixed tail pair is stable for every function in `K`.
- `thm-abstract-residue-exists-unique` supplies the abstract residue and
  commutator formula on any stable pair. The proof's finite-block trace split
  should explicitly cite (T2) from
  `lem-finite-potent-trace-existence-and-uniqueness`. That supplier is
  currently reachable transitively through the residue lemmas but is not a
  direct dependency of the global theorem; adding it as a direct dependency
  would make the Step 1.3 citation exact.
- `lem-abstract-residue-additivity` supplies Tate (R5), used in Step 1.2 to
  show `res_{A_X}=0`; that use is separate from the finite-block/T2 split.
- `cor-coefficient-trace-residue-agreement` identifies each local abstract
  residue with the coefficient-trace residue; perfectness of `k` supplies
  finite separability of every closed-point residue field, as required by
  the local definition.

No new mathematical supplier is needed for the R2 repair. The direct
`lem-finite-potent-trace-existence-and-uniqueness` edge above is for the
explicit T2 citation in the already claimed finite-block decomposition. The
global statement remains the characteristic-free sum-zero theorem for a
smooth proper geometrically integral curve over a perfect field.

A read-only search found these direct item consumers of the theorem:
`lem-residue-pairing-descends-cohomology`,
`rem-duality-trace-normalization`, `thm-serre-duality-curves-line-bundles`,
and `ex-residue-projective-line`. The statement and these consumers' claims
do not change; only the global theorem proof/citation route needs this repair.

## Source and audit record

I read the full current target and the current interfaces/proof steps in
`lem-abstract-residue-basic-properties`, `lem-abstract-residue-additivity`,
`thm-abstract-residue-exists-unique`,
`lem-finite-potent-trace-existence-and-uniqueness`, and
`lem-adelic-quotient-computes-h1-structure-sheaf`, along with the local
coefficient-residue definition and comparison. The batch-8 coverage record
`research/frontier-37-owner-30-batch-8.coverage.json` documents the full Tate
1968 PDF reading and direct check of printed p. 152: R2 is exactly
`fA+fgA+fg^2A subseteq A`; the condition `fA,gA subseteq A` is a valid
special case. No source refetch was needed.

Primary target raw SHA256 at inspection:
`503ffde82c05c0671607b467cd488dcc440717fe4e08070b3b959282e393ebb1`.
No precheck, rendercheck, receipt, certification, gate, item, or shared-state
write was made.

## Released repair and final proof audit

Date: 2026-10-01  
Scope released by root: `items/thm-global-residue-theorem-algebraic-curve.md`
and this report only.

The target now handles $g=0$ before choosing a set involving $g^{-1}$. For
$g\ne0$, the chosen finite set excludes poles of both $f$ and $g$. Pointwise
integrality therefore proves $fA_T\subseteq A_T$ and $gA_T\subseteq A_T$
separately; this gives the exact full $(R_2)$ condition
$fA_T+fgA_T+fg^2A_T\subseteq A_T$. The earlier invalid inference from the
supplier's $fg^{-1}A_T$ term has been removed.

The tail pair is now shown stable under every $h\in K$: the finite-pole set
and local quotient dimensions embed $(hA_T+A_T)/A_T$ into a finite direct sum
of local quotients. The finite-block split now constructs projection lifts on
each of the finitely many point blocks and the tail block, checks their
$E_1/E_2$ conditions, and obtains one block-diagonal finite-potent
commutator. A common positive exponent is the maximum of the block exponents;
successive applications of trace axiom (T2) then split its trace across every
block, including the tail. This does not rely on closure of arbitrary sums of
finite-potent operators. Fact [F4] now records the supplier's full $(R_2)$
condition as well as its stable-$f,g$ special case, and [F8] gives the direct
trace-axiom citation.

I independently checked the remaining proof route. The $(R_5)$ step applies
to the adelic lattice and diagonal $K$ because both are stable; its three
vanishing terms use, respectively, finite codimension, commensurability with
zero, and the $K$-submodule case. The local finite-support step uses the
uniformizer-differential basis: regular $f,g$ give regular $f\,dg$, hence no
negative coefficient and zero local residue. Finally, the universal Kähler
module is generated over $K$ by $dg$, so all $f\,dg$ span it over $k$; this
justifies the linear extension. The $g=0$ generator is handled explicitly.
These arguments preserve the unqualified choice assumption already in the
Statement, the perfect-field hypothesis, and the characteristic-free claim.
No unresolved proof uncertainty remains in the released item.

Two direct dependency edges were added for exact proof uses:
`lem-finite-potent-trace-existence-and-uniqueness` for (T2), and
`lem-uniformizer-differential-is-a-basis` for local regularity of $f\,dg$.
No Statement or Definition changed, so direct consumer claims do not change;
the existing direct consumers remain
`lem-residue-pairing-descends-cohomology`,
`rem-duality-trace-normalization`,
`thm-serre-duality-curves-line-bundles`, and `ex-residue-projective-line`.

### Local checks and hashes

- The first targeted precheck proposed a canonical phase numbering/order; I
  adopted that repair and reran it. Final result:
  `node tools/tsx-run.mjs tools/precheck.mts items/thm-global-residue-theorem-algebraic-curve.md`
  — pass, 1 checked, 0 failing.
- Targeted renderer result:
  `node tools/rendercheck.mjs items/thm-global-residue-theorem-algebraic-curve.md`
  — pass. It ran before the phase-number/order repair; that later edit only
  moved unchanged proof paragraphs and adjusted step references, and did not
  change frontmatter, formulas, or wikilinks.
- Target SHA256 after repair:
  `1a452070bbed3548be858f0c5458f57863d4d49e8b66ce06f59e15268e870d25`.
- Statement-section SHA256 before and after repair:
  `1eb78958c8bfd56a8fc01599ddbe7bde7d5a4850084ac9d4ceb4508871194df4`.

These are local checks only, not an independent receipt or certification.
