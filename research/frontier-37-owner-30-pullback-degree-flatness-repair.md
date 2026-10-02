# Pullback degree and flatness repair

## Scope and result

This repair covers only `items/lem-degree-pullback-divisor-finite-morphism-curves.md`.
Its Statement is unchanged: the result still includes finite-flatness, the
ramification-index formula for closed-point pullbacks, degree multiplication
for all divisors with residue-field weights, and the corresponding degree
formula for invertible sheaves over an arbitrary field and in every
characteristic.

The false assertion in Step 1.2 that finiteness makes each individual stalk
`O_{C,p}` a finite `O_{D,f(p)}`-module has been removed. For closed `p`, the
finite morphism is closed, so `q=f(p)` is closed. Dominance gives an injective
map of function fields and hence an injective local map of domains
`O_{D,q} -> O_{C,p}`. Thus the source stalk is torsion-free over the target
DVR, which is a PID, and the published PID criterion makes it flat for
arbitrary modules. No finite-generation or freeness claim is made about that
stalk. At the generic point, the local map is the field extension
`k(D) -> k(C)`, hence flat. The curve-point supplier says these cases cover
every point, and the flat-morphism definition then gives flatness of `f`.

Step 4.1 now uses Cartier charts for `[q]`: a local equation with uniformizer
germ on a neighbourhood of `q`, and the unit equation `1` on the complement
of `{q}` in `D`. Their
pullbacks are respectively `f#t` and `1`. The first has order `e_p` at points
over `q`; the second has order zero away from the fibre. The Cartier-to-Weil
cycle therefore gives the displayed point formula. This does not treat one
local uniformizer as a global equation.

The fibre-degree calculation and both degree extensions remain valid
unchanged: the fibre-sum supplier contributes
`sum e_p [kappa(p):kappa(q)] = n`, and the tower law supplies the residue-field
factor `[kappa(q):k]`. Additivity gives the divisor formula, and the
Cartier/Picard and pullback-line-bundle suppliers give the invertible-sheaf
formula. The proof imposes no separability or characteristic restriction.

## Supplier audit and open boundary

I read the full target proof and independently checked the actual claims and
proof arguments needed from these direct suppliers:
`thm-over-a-pid-flat-is-equivalent-to-torsion-free`
(all modules, no finite-generation assumption), `def-flat-morphism-schemes`,
`cor-dvr-is-a-pid`, `thm-finite-morphism-integral-closed`,
`thm-nonconstant-morphism-proper-curves-finite-surjective`,
`lem-curve-closed-subsets-finite`, `lem-fibre-degree-sum-ramification-residue`,
`def-pullback-cartier-divisor`, `def-ramification-index-curve-map`,
`thm-cartier-to-weil-divisor-normal-scheme`,
`thm-cartier-weil-divisors-curves-agree`, and
`lem-pullback-cartier-divisor-line-bundle`. The fibre-sum argument uses a
finite affine-preimage algebra over a DVR, where finite generation really is
available; it does not support the removed claim about a localized stalk.
The finite-morphism closed-map supplier is under Choice, and the Cartier cycle
supplier's Dependent Choice premise follows from the stated Choice assumption.

Several in-run suppliers remain draft. In particular,
`lem-fibre-degree-sum-ramification-residue`,
`thm-local-ring-smooth-curve-dvr`,
`thm-nonconstant-morphism-proper-curves-finite-surjective`,
`def-pullback-cartier-divisor`, `thm-cartier-to-weil-divisor-normal-scheme`,
`thm-cartier-weil-divisors-curves-agree`, and
`lem-pullback-cartier-divisor-line-bundle` remain draft inputs. The
Cartier/Weil theorem explicitly retains its flagged Cartier, Picard, and
rational-section supplier obligations. This repair does not claim those
obligations, or those suppliers' independent audits, are closed.

There is also a precise open-interface issue in that supplier chain:
`thm-cartier-weil-divisors-curves-agree` flags
`thm-cartier-weil-isomorphism-locally-factorial` as supplying a cycle-map
isomorphism, while the latter's current Statement explicitly gives cycle-map
surjectivity and a Picard-to-class-group isomorphism, not cycle-map
injectivity. Its proof depends on `lem-cartier-to-weil-injective-normal`,
whose proof contains the stronger zero-cycle kernel argument, but that stronger
fact is not exposed in the lemma's Statement. This repair leaves the issue
open and does not edit or treat those suppliers as closed.

The direct dependency update removes
`cor-finitely-generated-torsion-free-modules-over-a-pid-are-free`, which is
unused after the repair. It adds the actual requirements:
`def-cartier-divisor`, `def-flat-morphism-schemes`,
`lem-curve-closed-subsets-finite`,
`lem-integral-finite-type-scheme-function-field`,
`thm-cartier-to-weil-divisor-normal-scheme`,
`thm-choice-implies-dependent-implies-countable-choice`,
`thm-finite-morphism-integral-closed`, and
`thm-over-a-pid-flat-is-equivalent-to-torsion-free`.

## Consumer impact and checks

Direct item consumers are `items/ex-riemann-hurwitz-double-cover.md` and
`items/thm-riemann-hurwitz-complete.md`; the lemma is also listed on
`library/scheme-theory/residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem.md`.
The repaired Statement is byte-for-byte unchanged, so no consumer Statement
or Definition changed and no downstream proof edit is indicated.

The focused check passed:

```text
node tools/tsx-run.mjs tools/precheck.mts items/lem-degree-pullback-divisor-finite-morphism-curves.md
PASS (direct); 1 checked, 0 failing
```

No receipt or gate was written.

## Hashes

The intake hashes below were captured before the item edit. Post-repair hashes
were computed after the final item edit and before this report was written.
The guard and surface hashes exclude the `verification` block as specified by
`tools/item-hash.mjs`.

| Hash | Before | After |
|---|---|---|
| Raw SHA-256 | `2a4c3df9ca0d8f4f9ea4bf9fc92f04a399fe13375098c5466acfc37f94c423a1` | `abcaecdddea860d0f41eef77bf98cdcda43b2b9fed0bd71fd16742e4d9fac297` |
| `itemHashGuard` | `9b039dfb286db63cf23984f8b6400e87f400228107cec2296b03fb736b33f15c` | `7a668f4d3818fdacce595bf0ba0b9c437421cddef483b70315db7a9cac2c1187` |
| `itemSurfaceHash` | `a2fd968b3fa757a59adf3bbf8cc5616d73626e629f7adc640b9afb64abdb2b2f` | `0332924d41c12da0ff46951ea973f7cc26fe5a2be96f20d7048f755534e75e16` |
