# Coherent-curve Serre duality: complete route research

Date: 2026-10-01  
Target: `thm-serre-duality-curves-coherent-sheaves` (batch 8 of
`frontier-37-owner-30`)  
Scope: route research only. This report does not authorize edits to the target,
its manifest, its contracts, its dependencies, receipts, or gates.

## Finding

The Statement can be retained over an arbitrary field and for every coherent
sheaf, including torsion sheaves. The current proof does not establish it:
[A1] is a real projectivity/ampleness dependency, [A2] needs a proof of
cohomological dimension one, and [A3] cannot be inferred from the definition of
global Ext. Steps 7.1 and 8.1 also do not provide their claimed maps: Step 7.1
never defines the middle vertical map, and Step 8.1 places the desired
`Hom(F, omega_C)` map in the first position of the displayed five-term row,
where the five lemma does not apply.

There is a complete constructive repair route. Define both desired maps by
composition with the *fixed* normalized trace. Prove the first isomorphism by a
natural kernel comparison, and prove the second by a correctly placed
five-lemma diagram. The map required in that diagram is then explicitly the
Yoneda/Ext pairing with global sections; it is not inferred from the four
outer isomorphisms. The route uses no residue parameter or local `dt` frame,
so it applies at inseparable closed points over imperfect fields without
changing the arbitrary-field claim or the trace normalization.

## Actual supplier audit

- `def-sheaf-ext-for-coherent-modules` defines global Ext from
  `Hom(F, I^bullet)` for an injective resolution of the second argument. It
  explicitly warns that global Ext in positive degree is not generally the
  global sections of sheaf Ext. Therefore the target's [A3] is not already a
  consequence of that Definition and needs an argument.
- `lem-global-sheaf-ext-long-exact-in-first-variable` does provide the needed
  natural exact sequence in the first variable, including
  `0 -> Hom(F'',G) -> Hom(F,G) -> Hom(F',G) -> Ext^1(F'',G)`. Its proof is by
  applying `Hom(-, I^q)` to one fixed injective resolution of `G`. It does not
  identify its connecting arrow with a Yoneda pushout; that compatibility must
  be checked in the target's proof when it is used against the cohomology
  boundary.
- `thm-long-exact-sequence-sheaf-cohomology` supplies the natural cohomology
  LES. It does not supply the curve-specific vanishing above degree one.
- `thm-serre-finiteness-projective-cohomology` and its published corollary
  `cor-projective-cohomology-finite-dimensional-field` apply to a proper
  scheme over any field and a coherent sheaf. The corollary gives finite
  dimensionality of every `H^q(C,F)`. This closes the current Step 3.1
  finiteness assumption once the target declares and uses it; finite
  dimensionality is also what makes dualization of the cohomology LES exact
  without any additional linear-algebra hypothesis.
- `lem-eventual-global-generation-coherent-twists` applies once `C` is
  projective over the Noetherian ring `k` and an ample invertible sheaf is
  supplied. The draft `cor-projective-embedding-every-smooth-proper-curve`
  proves projectivity by a finite map to `P^1`, pullback of `O(1)`, and the
  ample-powers theorem; the corollary says it uses no Serre duality,
  Riemann-Roch, or residues. More precisely, its bounded-pole input is proved
  from the Euler-characteristic Riemann-Roch inequality, so the transitive
  chain does use that Riemann-Roch consequence; its Euler-characteristic proof
  does not use Serre duality. This remains a noncircular projectivity route,
  but its transitive Cartier-divisor/Riemann-Roch suppliers were still flagged
  as in flight at the time of this research. Do not treat that chain as stable
  until those suppliers drain. For the line bundle used in the resolution,
  take the pullback of `O(1)` under a closed projective embedding; use
  `lem-very-ample-implies-ample` for ampleness.
- `lem-smooth-curve-coherent-torsion-free-locally-free` proves that a coherent
  subsheaf of a finite locally free sheaf on a smooth curve is torsion-free
  and hence finite locally free. It applies to the kernel in the resolution
  below, regardless of torsion in the quotient `F`.
- The existing draft `lem-proper-normal-curve-rational-function-map` gives a
  finite locally free map to `P^1` for any transcendental function on a
  proper normal curve, over arbitrary `k`; it has no Cartier-divisor or
  fibre-degree premise. A smooth curve is normal by the local DVR supplier.
  Choose a transcendental element of `k(C)` because a nonempty affine chart is
  a one-dimensional finite-type domain over `k`; the affine-domain
  dimension/transcendence-degree theorem gives
  `trdeg_k k(C)=1`. The resulting finite map pulls back the two standard
  affine charts of `P^1` to two affine opens covering `C`.
- `thm-cech-computes-qc-cohomology-separated-scheme-affine-cover` and
  `thm-qc-sheaf-affine-higher-cohomology-vanishes` then give
  `H^q(C,F)=0` for `q>1`: the ordered Čech complex of this two-affine cover
  has terms only in degrees 0 and 1. This proves the needed vanishing directly
  for every coherent `F`; it does not rely on an ambient projective-space
  dimension bound that could be larger than one.
- `thm-serre-duality-curves-vector-bundles` supplies the perfect pairing for
  every finite locally free sheaf, with its fixed normalized trace. Apply it
  once to `E` and once to `E^vee tensor omega_C`. The separate trace-helper
  edits are owned elsewhere; this route assumes the same fixed trace and does
  not change its normalization.

## Inline comparison for locally free sources

The target can prove [A3] inline, without introducing a new theorem. Let `E`
be finite locally free and `G` any `O_C`-module, and fix an injective
resolution `G -> I^bullet` in `O_C`-modules as in
`def-sheaf-ext-for-coherent-modules`.

1. The functor `E tensor -` is exact because `E` is locally finite free.
2. The tensor-Hom adjunction
   `Hom(E tensor M, I) = Hom(M, E^vee tensor I)` shows that
   `E^vee tensor I` is injective whenever `I` is injective: a monomorphism
   `M -> N` remains a monomorphism after `E tensor -`, and injectivity of `I`
   extends the adjoint map.
3. Since tensoring by `E^vee` is also exact, `E^vee tensor I^bullet` is an
   injective resolution of `E^vee tensor G`.
4. The finite locally free evaluation adjunction identifies, term by term and
   naturally in `E` and `G`,
   `Gamma(C, E^vee tensor I^bullet) = Hom_O_C(E, I^bullet)`.
   Taking cohomology gives
   `Ext^q_O_C(E,G) = H^q(C,E^vee tensor G)` canonically for all `q>=0`.

This argument addresses the global Ext definition itself; it does not confuse
it with global sections of sheaf Ext. Taking `E=O_C` also gives the canonical
natural identification `Ext^q(O_C,G)=H^q(C,G)` used in both trace pairings.
The sheaf Hom/tensor definitions and injective-resolution independence in the
existing Definitions give the stated naturality.

## Resolution and the two canonical maps

Use the projective embedding corollary and an ample embedding twist `L`.
Eventual global generation gives an `n` for which `F tensor L^n` is globally
generated. Proper coherent-cohomology finiteness gives finite-dimensional
`H^0(C,F tensor L^n)`. A finite basis of that space therefore supplies a
surjection

`E = (L^(-n))^N ->> F`.

Its kernel `E'` is coherent by the coherent-sheaves-are-abelian supplier,
is a subsheaf of `E`, and is torsion-free; the smooth-curve torsion-free/local-free
lemma makes `E'` finite locally free. Thus
`0 -> E' -> E -> F -> 0` is a two-term finite locally free resolution for
all coherent `F`, including torsion quotients. The chosen resolution is only
used to prove bijectivity; the maps below are independent of it.

Write `tau: H^1(C,omega_C) -> k` for the already-fixed normalized trace and
use the natural comparison `Ext^1(O_C,omega_C)=H^1(C,omega_C)` just proved.
For `alpha:F->omega_C` and `u in H^1(C,F)`, define

`Phi_F(alpha)(u) = tau(H^1(alpha)(u))`.

Equivalently, identify `u` with `Ext^1(O_C,F)` and compose that class with
`alpha` (the Yoneda pairing). This defines a canonical map
`Phi_F: Hom(F,omega_C) -> H^1(C,F)^*`. It is natural contravariantly in `F`
because `H^1` is covariant and composition of sheaf maps is associative.

For `xi in Ext^1(F,omega_C)` and `s in H^0(C,F)=Hom(O_C,F)`, define

`Psi_F(xi)(s) = tau(Ext^1(s,omega_C)(xi))`,

where the result is read in `H^1(C,omega_C)` by the same comparison. This is
the Yoneda pairing of `xi` with `s`, followed by the fixed trace. It gives a
canonical map `Psi_F: Ext^1(F,omega_C) -> H^0(C,F)^*`, natural
contravariantly in `F`: for `v:F->G`, precomposition on Ext and composition
of sections give
`Psi_F(Ext^1(v,omega_C)(xi))(s) = Psi_G(xi)(H^0(v)(s))`.
Both maps are `k`-linear because the sheaf Hom complexes, their differentials,
the induced cohomology maps, and the trace are `k`-linear.

## Why the two isomorphism arguments work

The cohomology LES of `0 -> E' -> E -> F -> 0`, with the two-affine-cover
vanishing, is

`0 -> H^0(E') -> H^0(E) -> H^0(F) -> H^1(E') -> H^1(E) -> H^1(F) -> 0`.

For `Phi`, the Ext LES gives

`0 -> Hom(F,omega) -> Hom(E,omega) -> Hom(E',omega) -> Ext^1(F,omega) -> ...`.

Restrict only its first three terms. Exactness identifies `Hom(F,omega)` with
the kernel of `Hom(E,omega)->Hom(E',omega)`. Dualizing the cohomology tail
`H^1(E')->H^1(E)->H^1(F)->0` identifies `H^1(F)^*` with the kernel of
`H^1(E)^*->H^1(E')^*`. Naturality of `Phi` for `E'->E` makes these kernels a
commutative comparison square. On `E` and `E'`, `Phi` is exactly the
vector-bundle Serre pairing: `H^1(alpha)` is contraction with the section of
`E^vee tensor omega_C`, followed by the same trace. The two vertical maps are
isomorphisms, hence the induced kernel map `Phi_F` is an isomorphism. This is
a kernel argument, not an incorrectly placed five-lemma application.

For `Psi`, use the exact five-term pieces in the correct positions:

```
Hom(E,omega) -> Hom(E',omega) -> Ext^1(F,omega)
              -> Ext^1(E,omega) -> Ext^1(E',omega)
       |                 |                 |                 |                  |
     Phi_E             Phi_E'            Psi_F             Psi_E             Psi_E'
       |                 |                 |                 |                  |
H^1(E)^* -> H^1(E')^* -> H^0(F)^* -> H^0(E)^* -> H^0(E')^*.
```

The top row is exact by `lem-global-sheaf-ext-long-exact-in-first-variable`.
The bottom row is the dual of the displayed cohomology LES; all its vector
spaces are finite-dimensional by `cor-projective-cohomology-finite-dimensional-field`.
The four outer vertical maps are isomorphisms by the comparison and
vector-bundle Serre duality. In particular, for a vector bundle `E`,
`Ext^1(E,omega)=H^1(E^vee tensor omega)` and the vector-bundle pairing for
`E^vee tensor omega` identifies it with `H^0(E)^*`; its pairing is exactly
restriction along sections `O_C->E` followed by trace.

The first and last squares commute by naturality of the pairings for the maps
`E'->E` and `E->F`. The middle square is the required construction check.
For `alpha:E'->omega` and `s:O_C->F`, represent the cohomology boundary
`delta_H(s)` by local lifts `e_i` of `s` through `E->F` on an affine cover;
its Čech 1-cocycle is `e_j-e_i` in `E'`. The Ext connecting map
`delta_Ext(alpha)` is the pushout of `0->E'->E->F->0` along `alpha`; pulling
that pushed-out extension back along `s` has the same local lift differences
`alpha(e_j-e_i)`. Thus

`Psi_F(delta_Ext(alpha))(s)
 = tau(alpha_*(delta_H(s)))
 = Phi_E'(alpha)(delta_H(s))`.

This verifies the middle square with the standard positive connecting
convention (the cohomology Čech differential is `e_j-e_i`). Equivalently it
is associativity of Yoneda composition, with degree-zero maps and a degree-one
class, so no additional Koszul sign appears. The five lemma now applies to
this actual map `Psi_F` and proves it is an isomorphism. The two maps are
intrinsic trace pairings, so the proof's use of a noncanonical resolution does
not affect canonicity or functoriality.

No vanishing of `Ext^2(F,omega)` is needed for this five-term argument; the
current proof should not add that claim unless it separately proves it.

## Dependency and stability recommendations

Keep the target Statement unchanged. Once the actual suppliers are stable,
repair the target's proof and its manifest edges so the proof uses, at minimum:

- `cor-projective-embedding-every-smooth-proper-curve` and
  `lem-very-ample-implies-ample` for projectivity and an ample twist;
- `cor-projective-cohomology-finite-dimensional-field` for the finite
  dimensionality used in Step 3.1 and exact dualization;
- `thm-long-exact-sequence-sheaf-cohomology` for the cohomology LES;
- `lem-proper-normal-curve-rational-function-map`,
  `thm-local-ring-smooth-curve-dvr`,
  `thm-regular-local-rings-are-normal`, and
  `thm-affine-domain-dimension-transcendence-degree` (with its function-field
  supplier) for the two-affine cover proving `H^q=0` for `q>1`;
- `thm-cech-computes-qc-cohomology-separated-scheme-affine-cover` for that
  cover's cohomology computation.

The target already names the locally free curve duality, coherent kernel
closure, Ext definition, and Ext first-variable LES. The locally free
Ext/cohomology comparison and the Yoneda boundary compatibility can be proved
inline as above; a new reusable supplier is optional, not logically
necessary. Do not record a stable closure decision until the in-flight batch-5
Cartier inputs used by the projectivity chain and any other transitive
prerequisites have drained and the exact statements used here are rechecked.

## Authoritative full-text evidence already recorded

No source was refetched for this report. Reuse
`research/frontier-37-owner-30-batch-8.coverage.json`: its batch-8 coverage row
records that the complete Vakil PDF (2025 edition, 9,643,655 bytes) was fetched
and extracted on 2026-09-30, and that Chapters 29.1-29.4 were read in full.
The precise route support is:

- Vakil, *The Rising Sea*, §§29.3.C(b), 29.3.E, 29.3.G and 29.3.H: the
  canonical `Ext^i(O,G)=H^i(G)` comparison, computation by locally free
  resolutions, the first-variable long exact sequence, and tensor-Hom with a
  locally free sheaf (including that tensor by it preserves injectives).
- Vakil, §29.3.4: composition/Yoneda products and the induced natural pairing
  `H^i(X,F) x Ext^j(F,G) -> H^{i+j}(X,G)`.
- Vakil, §29.4.2: the proof of strong Serre duality explicitly warns that its
  five-lemma construction does not itself exhibit the Yoneda pairing or make
  functoriality clear. This directly supports constructing `Phi_F` and
  `Psi_F` before using exact sequences, as above, instead of inferring the
  middle arrow from four outer pairings.
- The same coverage row records the complete MIT 18.725 Lectures 24-25 PDF
  read on 2026-09-30, with Theorem 24.3 supporting the smooth-curve
  vector-bundle duality already supplied by the library. Lipman §1, also
  covered in the full-text record, gives the residue-normalized global
  dualizing pair for smooth projective curves; the present route uses the
  library's fixed trace rather than replacing it by local residue formulas.

The remaining condition is supplier stability and authorization to perform
the exact target edits; this report itself makes no such edits or receipts.
