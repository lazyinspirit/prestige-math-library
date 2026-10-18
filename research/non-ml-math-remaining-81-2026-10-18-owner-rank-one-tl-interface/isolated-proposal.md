# Guarded rank-one TL supplier proposal

This file is an isolated proposal while actual batch62 and batch78 native dispatches remain LIVE (`endedAt:null`); neither has a genuine attempt result. It is not a repair acceptance or a final before-archive. Do not edit their canonical carriers or metadata until actual drain. Batch76 is Poincaré and has no root-of-unity TL supplier role.

## Confirmed supplier defects

The actual supplier is `def-temperley-lieb-rank-one-lusztig-tilting-category`, batch62, reused by batch78. Its type1 paragraph lists integral grading, K eigenvalues and divided-power degree shifts but omits the full toral-binomial eigencharacter. At roots of unity this is an actual interface omission: the specialized binomials are not determined by the K eigenvalue alone. The intended full type1 weight convention requires, for every c in Z and t>=0,

`T_{c,t}|M_m = [m+c choose t]_q Id`,

where the right side is the Laurent-polynomial specialization, including negative m+c; the generic product is the one defined by the existing `def-lusztig-divided-power-integral-form`. This preserves the intended full integral-weight category and all ell>=3, including even ell. It is not a replacement by small-quantum-group or K-only modules. Every explicit Weyl string must then verify T_{c,t} v_j=[a-2j+c choose t]_q v_j; contragredient duality, tensor/filtration and tilting consumers must be checked in that exact category.

A concrete diagnostic of the omitted character is the one-dimensional counit module, artificially placed in degree m=2ell. It satisfies the listed K eigenvalue and E/F degree-shift conditions, but T_{0,ell} acts by the counit value0 rather than [2ell choose ell]_q=2(-1)^ell. Thus the listed grading conditions alone do not enforce the intended toral character, even though the subsequent full weight-function extension is intended to do so.

The displayed R coefficient divides by [r]! while already multiplying divided powers E^(r) tensor F^(r). Authentic Sawin Section1, actual PDF9 eq(1), instead MULTIPLIES [r]!. The correct rank-one formula in this source convention is

`R=D sum_(r>=0) q^(r(r+1)/2)(1-q^-2)^r [r]! E^(r) tensor F^(r)`

with D acting on M_m tensor N_n by q^(mn/2)=s^(mn), s²=q. Equivalently, in ordinary powers the coefficient is q^(r(r-1)/2)(q-q^-1)^r/[r]!. This equivalence follows by E^r=[r]!E^(r) and F^r=[r]!F^(r), not by retaining the same coefficient after changing basis. Before specialization the divided-power coefficient is Laurent integral. At the root there is no division by zero; coefficients [r]! vanish for r>=ell, so its evaluated operator sum is finite. The old coefficient has a genuine extra inverse factorial, independently falsified on Delta(2) tensor Delta(2) at exact generic q=2 by rank-one-r-check.py.

## Exact Hopf-convention distinction

Sawin PDF6 uses the batch62 convention ΔE=E tensor K+1 tensor E, ΔF=F tensor1+K^-1 tensor F, S(E)=-EK^-1, S(F)=-KF. Its S²=AdK and positive toral D are compatible. The existing published Hopf theorem and the new batch68 category use Δ_lib E=E tensor K^-1+1 tensor E, Δ_lib F=F tensor1+K tensor F, S_lib²=AdK^-1. The published algebra/integral form is still reusable, but its Hopf formulas cannot be copied without transport.

An explicit transport is available: in U_lib with opposite coproduct, set E_target=K E_lib, F_target=F_lib K^-1 and K_target=K_lib. Direct multiplication gives the unchanged toral action and [E_target,F_target]=(K-K^-1)/(q-q^-1); applying Δ_lib^op yields exactly the target coproduct. On divided powers E_target^(r)=q^(-r(r-1))K^r E_lib^(r) and F_target^(r)=q^(r(r-1))F_lib^(r)K^-r, so the transport preserves the integral lattice; its inverse uses Laurent monomials too. Alternatively one can verify the target Hopf identities directly. A final supplier proof must explicitly take one route, including the toral/integral specialization, rather than conflate the two conventions.

Batch68's canonical full category theorem is restricted to odd ell>h. Its local universal quasi-R calculation can inform the proof, but reusing that theorem verbatim would improperly narrow batch62, which includes every ell>=3 and its ell4 boundary examples. Keep the actual canonical68 category independent; do not create a duplicate general root-category supplier or edit its accepted conventions.

## Remaining native obligations and consumer guard

The currently read62 carriers explicitly escalate substantial full tilting/tensor-filtration/Ext/classification and ribbon/centralizer obligations. These are genuine established-proof duties; the source R correction does not discharge them or justify a stale-only readiness conclusion. Re-read the final actual62 results after drain. Preserve the strongest approved TL/Jones/ribbon route and repair missing actual proofs supplier-first, with all affected62/78/downstream consumers under this same owner.

Root additionally observed two rows for `lem-3-manifold-boundary-kernel-is-lagrangian` in live78 manifest (then lines277 and320). Hold that exact duplicate observation until final78 drain, then locate its single canonical supplier and correct actual page ownership without arbitrary deletion of live writer output. Root requests immediate notification once this manifest blocker is resolved.

## Source-reading limits

Downloaded actual 30-page Sawin PDF from https://arxiv.org/pdf/math/0308281 into sources/sawin.pdf; read actual PDF4–11, including full Section1 construction/formulas and opening Section2 specialization/affine-Weyl discussion. Eq(1) was read from the actual PDF text and compared with the divided-power definitions on PDF6 and weight-lattice completion on PDF7–8. Source says the quasitriangular identities follow by a fairly standard calculation; that is not a local complete proof. No claim of having read or proved every later tilting/modularity result is made. The exact-rational finite script diagnoses normalization only and is not a proof of the universal R or root category axioms.
