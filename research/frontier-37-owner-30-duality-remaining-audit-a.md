# Frontier 37 owner 30, batch 8: remaining group A audit

Date: 2026-10-01. This is an independent, report-only audit of the fourteen
batch-8 items enumerated below. It does not audit the other batch-8 items and
does not certify any item, carrier, or workflow state. No item, manifest,
contract, plan, ledger, receipt, or shared gate was changed.

## Scope

1. `lem-uniformizer-differential-is-a-basis`
2. `def-residue-rational-differential-curve-point`
3. `lem-residue-independent-uniformizer`
4. `lem-residue-exact-differential-zero`
5. `lem-finite-potent-trace-existence-and-uniqueness`
6. `lem-adelic-quotient-computes-h1-structure-sheaf`
7. `thm-global-residue-theorem-algebraic-curve`
8. `def-principal-parts-sheaf-line-bundle-curve`
9. `lem-principal-parts-cech-h1-presentation`
10. `lem-residue-pairing-descends-cohomology`
11. `lem-global-residue-pairing-injective-left`
12. `lem-twisting-sheaf-projective-space-ample`
13. `cor-projective-embedding-every-smooth-proper-curve`
14. `lem-global-residue-pairing-dimension-balance`

## Findings that need repair

### 1. The finite-map supplier misuses its algebraic-function branch

In `lem-proper-normal-curve-rational-function-map`, Step 3.1 proves both
`v_x(f) >= 0` and `v_x(f^{-1}) >= 0` using the monic equation from the
algebraic case in Step 1.2. Steps 3.2 through 5.2 then use those inequalities
to cover the curve, conclude that `f` is a global unit, and glue the map used
by the transcendental case in Step 2.2. Those steps do not follow for
transcendental `f`. For example, on `C = P^1_k` with `f=t`, at infinity
`v_∞(f)=-1`, while `v_∞(f^{-1})=1`; `f` is not a global unit. This breaks the
current proof route to the finite map used by the projective-embedding item.

The repair is to separate the cases. In the algebraic case, retain the
integrality argument for `f` and `f^{-1}`, then use the normal-domain
intersection of height-one localizations to conclude both are global regular
units. In the transcendental case, use the DVR alternative at each closed
point: either `f` or `f^{-1}` belongs to the local ring. The opens where these
functions are regular therefore cover `C`; on their overlap `f` is a unit,
so the two chart maps glue to `C -> P^1`. Dominance follows from
transcendence, properness from proper source and separated target, and
quasi-finiteness from finite closed fibres and the finite generic extension.
Proper quasi-finite then gives finiteness; on each `k[t]` or `k[t^{-1}]`
chart the finite domain algebra is torsion-free over a PID, hence free, with
rank `[k(C):k(f)]`. This preserves both cases and the full finite locally
free claim without a new prerequisite.

### 2. The global-residue tail proof infers a false containment

In `thm-global-residue-theorem-algebraic-curve`, Step 2.1 says the tail
condition
`f A_T + fg A_T + fg^{-1} A_T subseteq A_T`
implies `g A_T subseteq A_T` because each summand lies in the displayed sum.
That implication is false. For `A=k[[t]]`, `f=t`, and `g=t^{-1}`, the three
displayed summands lie in `A`, but `gA` does not.

The actual choice of `S` already makes `f` and `g` integral at every point of
`T`; use those pointwise facts directly. Then `fA_T` and `gA_T` are contained
in `A_T`, and the continuity clause of the current abstract-residue supplier
applies. Equivalently, the full Tate condition
`fA_T + fgA_T + fg^2A_T subseteq A_T`
follows from the same integrality facts. Keep the stated, stronger tail
interface if needed elsewhere; remove only the invalid inference in this
proof. The finite-block residue decomposition in Step 1.3 is the right route;
make its trace step explicit by choosing the blockwise lifts, taking a common
finite-potency exponent across the finitely many blocks (including the single
tail block), and applying the stable-subspace/quotient trace axiom (T2) to
the resulting block decomposition; this does not require closure under sums
of arbitrary finite-potent endomorphisms.

### 3. The formal-derivative argument needs an explicit map from algebraic differentials

`lem-residue-exact-differential-zero` Step 2.1 and
`lem-residue-independent-uniformizer` Step 2.1 say the universal derivation of
`k(C)` acts on its Laurent expansions as formal differentiation. The intended
claim is valid, but the current text skips the typed bridge from algebraic
Kähler differentials to the completed Laurent field. The repair is inline and
does not identify `Omega^1_{k((t))/k}` with `k((t)) dt`: compose
`k(C) -> kappa((t))` with the formal derivative `D` that kills the chosen
coefficient field. This is a `k`-derivation `k(C) -> kappa((t))`; by
universality it induces `Omega^1_{k(C)/k} -> kappa((t))`, sending `dt` to `1`.
For `df=a dt`, its image is both `D(f)` and the Laurent expansion of `a`, so
the `t^{-1}` coefficient of an exact differential is zero. For `t'=theta(t)`,
the same map sends `dt'` to `theta'(t)` and gives
`a(t)=a'(theta(t)) theta'(t)` from `a dt=a' dt'`. The existing formal
coefficient argument then proves uniformizer independence in every
characteristic. Finite separability of `kappa/k` remains an explicit
hypothesis; no imperfect-residue-field extension follows from this route.

### 4. The injectivity proof has an undefined local coefficient and a misplaced coefficient

In `lem-global-residue-pairing-injective-left`, Step 1.3 writes
`u=t^n v` before the local trivialization and coefficient `u` are introduced
in Step 3.1. Define `u` in that trivialization first, then set `n=ord_p(u)`
and `v=t^{-n}u`.

Step 4.1 correctly obtains
`c_p s_p=t^{-1}(u_b v) dt`, but then says the coefficient of `t^{-1}` in
`u_b v` is `b v(0)`. That unit is regular and has no `t^{-1}` coefficient.
The coefficient of `t^{-1}` in the product `t^{-1}(u_b v)` is its constant
term `b v(0)`, so the trace-form argument proves the intended nonzero
pairing. This is a local wording/order repair; the injectivity claim is
preserved.

## Other item dispositions

- `lem-uniformizer-differential-is-a-basis`: the cotangent-space/Nakayama
  argument is valid with the stated finite separable residue-field
  hypothesis. It correctly does not assert the uniformizer-basis result at
  inseparable closed points.
- `def-residue-rational-differential-curve-point`: the Hensel lift of a
  primitive element gives the unique `k`-compatible coefficient field, and
  the completed DVR parameter identifies the completion with
  `kappa(p)[[t]]`. The definition correctly confines the coefficient-trace
  formula to finite separable residue fields.
- `lem-finite-potent-trace-existence-and-uniqueness`: the stable-image trace
  construction, index independence, quotient-nilpotence argument for (T2),
  and uniqueness from (T1)--(T3) are sound. This item does not assert
  closure of arbitrary finite-potent maps under addition.
- `lem-adelic-quotient-computes-h1-structure-sheaf`: the restricted-product
  quotient and the flasque resolution argument give the claimed `H^1`
  presentation. The one-point stalk surjectivity uses density of
  `O_{C,p}` in its completion modulo `t^m`, which the proof states and uses
  correctly.
- `def-principal-parts-sheaf-line-bundle-curve` and
  `lem-principal-parts-cech-h1-presentation`: the quotient sequence and
  long-exact-sequence argument are correct once the stated decomposition into
  closed-point skyscrapers is made explicit. A short check suffices: on a
  quasi-compact open, represent a quotient section on a finite open cover by
  rational sections; each has finite principal-part support, so the germ map
  to the direct sum has finite support, and it is an isomorphism on every
  stalk. The rational-section divisor supplier gives the finite-support
  premise.
- `lem-residue-pairing-descends-cohomology`: with the dual section regular,
  changing a local principal-part representative adds a regular differential;
  changing by a global rational section gives a rational differential whose
  residue sum vanishes. This proves descent and bilinearity. The stated
  functoriality should be read for a line-bundle morphism
  `phi:L -> L'` with the dual map on sections; locally the identity is
  `(phi(c_p)) s' = c_p phi^vee(s')`.
- `lem-twisting-sheaf-projective-space-ample`: the identity map witnesses
  closed H-very ampleness of `O(1)`, and the cited power and finite-pullback
  steps give all three claims, including `n=0`.
- `lem-global-residue-pairing-dimension-balance`: the published smooth
  projective duality theorem gives equal finite dimensions. Combined with
  the local residue-pairing injectivity result, this proves that the residue
  pairing is perfect over a perfect field.

## Projectivity route and current supplier state

`cor-projective-embedding-every-smooth-proper-curve` currently says its proof
uses no Riemann--Roch. Its Steps 1.2 and 2.1 invoke
`cor-existence-rational-function-bounded-pole`, whose proof uses
`cor-riemann-inequality-divisor-sections`; that inequality is deduced from
`thm-riemann-roch-euler-characteristic-curve`. Thus the advertised
no-Riemann--Roch scope is false as written. This chain need not make the
projectivity conclusion circular if its Euler-characteristic degree-shift
supplier is independently established, but the wording and current
dependency route do not show that independence.

A shorter route already has the needed interfaces: `k(C)/k` has
transcendence degree one, so take any transcendental `f`; use the repaired
finite-map proof above; apply `lem-twisting-sheaf-projective-space-ample` and
`lem-ample-pullback-finite-morphism` to obtain an ample line bundle on `C`;
then apply `thm-ample-powers-very-ample-proper-base`. This avoids the
bounded-pole/Riemann--Roch chain and the Cartier pullback identity
`O_C((f)_infty) ~= phi_f^* O_{P^1}(1)` altogether, while retaining the
projective-embedding claim.

At inspection time, the Cartier support files
`thm-line-bundle-rational-section-cartier-divisor`,
`def-invertible-sheaf-of-cartier-divisor`, `def-pullback-cartier-divisor`,
`lem-pullback-cartier-divisor-line-bundle`, and
`thm-cartier-weil-divisors-curves-agree` were present in the working tree as
new, untracked draft files. The current consumers still contain prose saying
some of them are “not authored on disk”; those absence flags are stale. I read
the current rational-section theorem: its sign convention
`O_X(D)|_{U_i}=f_i^{-1}O_{U_i}` and the isomorphism sending the canonical
section to the chosen rational section are internally consistent. I also
read the current pullback definition and line-bundle pullback proof. Their
presence and mathematical route do not by themselves discharge the consumer
contracts or certification; these are drafts and still require their owners'
stabilization and root's integration. The finite-flat fibre-degree and
rational-map suppliers are likewise present as drafts; the rational-map
proof defect above remains substantive.

## Residue normalization and source check

The full text of John Tate, “Residues of differentials on curves,”
*Annales scientifiques de l'É.N.S.* 4e série 1 (1968), pp. 149--159, was
available locally and its relevant passages were reread for this audit:
§1, pp. 150--152, for the finite-potent trace axioms, typed cyclicity, and
abstract residue; (R2), pp. 152--153, for the full condition
`fA+fgA+fg^2A subseteq A`; (R5), p. 153, for additivity; and Theorems 2--3,
pp. 155--156, for coefficient residues and the global residue sum. The
current coefficient-trace supplier uses the corrected coefficient
`m a_n b_m` and fixes local normalization by
`res(t^{-1}dt)=1`; its finite-free trace computes the residue-field trace.
Perfectness remains the boundary for applying this to every closed point.

The published smooth-projective duality supplier fixes a separate,
embedding-independent Gysin trace `t_C`. The dimension-balance item above
uses that theorem for dimensions and uses the independently constructed
residue pairing for perfectness; dimension equality alone does not identify
the two functionals. The current line-bundle duality consumer attempts that
literal comparison in its Step 1.4. I read it read-only: it identifies the
positive Cech boundary with raw Koszul cochain `e_u -> du`, then applies a
normalization factor `sigma_1=-1`, says the normalizer gives trace `1` on
`e_u -> -du`, and concludes the positive boundary has trace `+1`. That
conclusion needs an explicit sign check; I sent this observation to root for
the separate fixed-trace audit. I do not certify the literal equality from
the fourteen items in this report.

No gate or receipt was run or refreshed. No write was made outside this
report.
