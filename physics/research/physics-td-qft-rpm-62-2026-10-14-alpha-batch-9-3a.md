# Batch 9 Step-3a adjudication

Run: `physics-td-qft-rpm-62-2026-10-14`; group: `batch-9`.

## Completed lower-level reviews

### ex-td-nonzero-isothermal-work-loop

Reviewed all four verification steps and all fourteen direct suppliers. Positive U and 0<V<1/b give T=U/C and positive p=aT(1-bV); Hessian diag(-C/U^2,-ab) is negative definite on the convex slice. Polynomial antiderivatives on compact legs give a(T1-T2)(V2-V1)[1-b(V1+V2)/2]>0. The admitted core-record, fixed chart, zero omitted-energy changes, planar constant-area frictionless equilibrium piston and explicit path accumulation meet first-law and work-coupling hypotheses. A C1 potential on any open loop neighborhood would contradict the gradient theorem. Empty and degenerate legs are excluded by strict inequalities, boundary and zero-temperature points are excluded; no choice, observation or bulk homogeneity is claimed. Reader clarification is accepted; source references supply context, not empirical realization.

### ex-td-response-chart-failure

Reviewed both verification steps and five direct suppliers. C ln(U/U*)+aV has Hessian diag(-C/U^2,0), is C2 and concave on positive U,V and extends independently of positive amount on an open patch. T=U/C and p=aT imply the (T,V)->(T,p) map identifies distinct arbitrarily nearby volumes on every open neighborhood. Thus the C1 response inverse required by the exact response definition is unavailable; no compressibility value or failure of a theorem with an inverse hypothesis is asserted. Positive constants and local chart exclude logarithm endpoints; no choice or empirical evidence is involved.

The loop current raw hash matches the post-reader snapshot (ddc5a57743876e39bfef7e205aaa18b8ea88b75a95c1aef4a0757d303f0ed5d0); pre-reader hash was 78546657589482e99f80a6c08996feae032688e552dd98684f442f80e037f357. The reader report identifies the exact added work/first-law hypotheses and potential definition. 

## Reservoir and useful-work reviews

### pthm-td-reservoir-minimum-principles

Reviewed four proof steps and five cited suppliers. The affine bath entropy and constant-entropy pressure store with zero omitted endpoint energies give Delta F=-T0 Delta S_tot and Delta G=-T0 Delta S_tot; T0>0 preserves the sign. On the exact feasible set with fixed total energy, S_tot=constant-F/T0 or constant-G/T0, so an attained global entropy maximum is a minimum, without uniqueness, relaxation or existence beyond the adopted maximum postulate. Agreement with natural-chart F,G requires the stated bath-temperature and pressure endpoints. Reader replacement of spontaneous endpoint change by admitted isolated-composite record is accepted and meets the exact isolated-compound second-law domain. Empty feasible set supplies no equilibrium; finite/nonideal baths and other work coordinates are excluded. No empirical premise or choice is used.

### pthm-td-useful-work-bound

Reviewed both proof steps and all five dependencies. The isolated compound includes the bath, pressure store and useful-work store; both stores have constant entropy and all omitted energy changes vanish. Delta U=Q-p0 Delta V-W_out and Delta S_tot=Delta S-Q/T0>=0 imply W_out=-Delta G-T0 Delta S_tot<=-Delta G. Equality implies zero total entropy production, while existence or attainability of an equality protocol is explicitly not claimed. The endpoint state function equals natural-chart Gibbs only at (T,p)=(T0,p0). Negative work values and zero entropy changes are covered by the same algebra, no sign of Delta G is silently assumed; no empirical premise or choice is used.

Reservoir snapshot: pre 6c4f51b5c365c0afbcfa68a2fcbd8e59ad8163364d3984eb546b0236aa042fa4; post a94118ff97ef8686360bbb39a2be643b85f02865e7d2848603cc6bed2a609895. Reader report records the qualifier correction; proof steps are unchanged. 

## Euler and Gibbs–Duhem review

Reviewed six proof steps and all seven direct suppliers, including the current local-energy proof and scalar draft implicit-rank graph interface. On the common-law branch, openness keeps both scaled original state and scaled energy coordinates in the local uniqueness neighborhoods; the fixed diagonal SI map commutes with scaling, so entropy homogeneity and inverse uniqueness yield same-tag energy homogeneity near lambda=1. This discharges the added hypothesis only for the designated common-law cone; general distinct-tag scaling remains insufficient. On open W, the Euler lemma gives U=Ts-pV+sum mu_j n_j; C2 regularity and the finite product rule then cancel dU terms to give Gibbs-Duhem. Empty W is vacuous, positive V,n exclude the zero vector, no global inverse or boundary passage is used, and no AC or measurement is inferred. The current local-energy argument derives C2 from C1 inverse plus C2 entropy, rather than misquoting a C2 rank theorem.



## Heat-capacity review

Reviewed all four proof steps and five direct suppliers. On the C2 Helmholtz chart U=F+Ts gives CV=T s_T at fixed V; dH=T ds+V dp gives Cp=T s_T at fixed p. Differentiating the actual local inverse identity p(T,V(T,p))=p gives p_V=-1/(V kappaT) and p_T=alphaP/kappaT. The fixed-p chain rule and Maxwell s_V=p_T yield Cp-CV=T p_T V_T=TV alphaP^2/kappaT. Both inverse maps and their common restriction are required, not presumed from smooth entropy. T,V,kappaT are positive, the denominator is finite nonzero, alphaP=0 gives Cp=CV and no division by alphaP occurs; boundaries and critical charts are excluded. Units are J/K. This is a conditional identity with no measured input or choice.



## Joule–Thomson finding `refuter:9:1`

Verdict: `confirmed_nonfatal`; defect `tdqftrpm62-b9-jt-locator`. Independently retrieved the UCSD 2025 Chapter 2 PDF with curl after web retrieval timed out. Contents and section headings identify free expansion at §2.10.6 (printed p.54) and throttling at §2.10.7 (pp.55–56). Equations (2.286)–(2.290) give the constant-enthalpy derivative. Corrected only the Arovas reference title in the item and owning manifest. The linked chapter URL is already relevant. This is a real inaccurate locator; its mathematical severity is nonfatal because all four current proof steps derive the formula locally and the separate Tatum §12.6 reference supports it. The refuter's fatal classification is not adopted.

Checked all five direct suppliers: dH=T ds+V dp at fixed composition and Maxwell s_p=-V_T give dH=Cp dT+(V-TV_T)dp. The assumed (H,p,n) inverse and Cp>0 justify division, so muJT=(TV_T-V)/Cp=V(T alpha_p-1)/Cp, in K/Pa. Neither cooling sign, throttle energy balance nor measured material behavior is claimed. No Statement, Definition, physical scope or empirical qualification changed; no consumer propagation is triggered. Repair confidence is 1. 

## Compressibility-ratio review

Reviewed all four proof steps and six direct suppliers. CV=T s_T at fixed V, Maxwell s_V=p_T and CV>0 yield T_V at fixed entropy=-T p_T/CV. Chain differentiation gives p_V at fixed entropy=p_V at fixed T-T p_T^2/CV. The actual isothermal inverse gives p_V=-1/(V kappaT)<0 and p_T=alphaP/kappaT; the proved heat-capacity relation then yields p_V|s=p_V|T (Cp/CV) and Cp>=CV>0. The assumed isentropic inverse gives kappaS=-1/(V p_V|s)>0 and the asserted ratio. Every denominator is nonzero by positivity and the inverse identities. The alphaP=0 case gives equality of capacities and compressibilities; zero-capacity, zero-compressibility, critical and boundary points are excluded, not assigned limiting values. V>0 follows from the state/response domain. No AC, empirical premise or universality outside these local charts is used.

All seven required risk reviews are complete. 

## Final routed decisions and maintenance

Exactly three decisions are in the task-named JSON. Both touched items have `amended_repair`: their reader-authored content is retained byte-for-byte, but the full carrier additionally incorporates the corrected manifest interface and (for the loop) current supplier quotation. This distinction preserves the pre/post snapshots rather than relabeling them. The ledger contains one fixed nonfatal row for each retained reader clarification and one for the inaccurate Joule–Thomson locator, all owned at `3a-adjudicate` and referenced by the decisions; completed repairs have confidence 1. There are no reader findings or page-only obligations.

The strict contract check detected stale literal quotations in Euler F1 (tagged bulk scaling) and loop F4 (mechanical coupling). Replaced each with an exact current Postulate excerpt after checking its actual use; the Euler consumer uses the unchanged distinct-tag restriction, while the loop explicitly meets the current piecewise-C1 equilibrium-piston conditions. These are audit maintenance, not additional mathematical defects or decisions. All other current contract citations passed the exact quotation check.

Searched `items/` and `library/` for both changed reader interfaces: only the two carriers and their home-page summaries refer to them. The A-page conditional reservoir description and B-page constructed work-loop description remain sound, so no page repair is needed. The citation correction changes no public physical interface. No additional consumer, proposed withdrawal or published defective supplier was found. Imported mathematical items and original mathematical sources remain unchanged. The owned cross-batch input retains prior attribution and records the independently checked local-energy and common-law uses; refreshed the engine-owned aggregate using the authorized refresh command.

## Source evidence and limits

- [Arovas, Chapter 2](https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/CH02.pdf), §2.6.4, printed pp.31–32, equations (2.103)–(2.112): homogeneous-function calculus, Euler identity and Gibbs–Duhem. Read the complete subsection. The common-law physical identification remains adopted, not source-proved.
- The same PDF, contents and §2.10.7, printed pp.55–56, equations (2.286)–(2.290): the constant-enthalpy derivative uses the same volume/heat-capacity ratio; item quantities are whole-system SI, so matching molar volume and molar capacity cancel the same normalization. Read the complete subsection; its throttle model is contextual and is not an extra premise of this local chart theorem. §2.10.6 is free expansion.
- [Arovas §2.7](https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Book:_Thermodynamics_and_Statistical_Mechanics_(Arovas)/02:_Thermodynamics/2.07:_Thermodynamic_Potentials), relevant potential/work paragraphs at lines 1352–1372: potential definitions and conditional work bounds. Local endpoint deductions carry their own explicit bath/store assumptions.
- [Arovas §2.10](https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Book:_Thermodynamics_and_Statistical_Mechanics_(Arovas)/02:_Thermodynamics/2.10:_Applications_of_Thermodynamics), response-function section at lines 1380–1386 and throttling at 1398–1404: heat-capacity and compressibility identities, and coefficient formula. Local proofs add inverse-chart and nonzero-denominator hypotheses.
- [Tatum §13.3](https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Heat_and_Thermodynamics_(Tatum)/13:_Expansion_Compression_and_the_TdS_Equations/13.03:_Pressure_and_Temperature), equations near lines 195–200: the source uses beta for volume expansion, whereas the items use alpha_p.
- [Tatum §17.6](https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Heat_and_Thermodynamics_(Tatum)/17:_Chemical_Thermodynamics/17.06:_The_Gibbs-Duhem_Relation), lines 191–198: fixed-temperature/fixed-pressure chemical-potential specialization, not the full general identity by itself.
- [Tatum §12.6](https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Heat_and_Thermodynamics_(Tatum)/12:_Free_Energy/12.06:_The_Joule_and_Joule-Thomson_Coefficients), lines 225–244: constant-enthalpy entropy differential, Maxwell relation and Cp/T identity. Arovas's complete retrieved derivation independently supplies the final formula.

Web retrieval of the UCSD PDF timed out; curl retrieval succeeded and pdftotext exposed the actual headings and relevant complete arguments. No measurement, statistical precision or empirical validation is claimed. Mathematical source review covers the exact direct suppliers and the needed implicit-rank/IFT interfaces; it is not a re-audit of the entire published mathematical dependency closure. All imported supplier statuses and local draft statuses are preserved.

## Local checks

- Initial `risk-report.mjs` on the batch-9 contract: seven HIGH/CRITICAL items; zero mechanical errors. All seven current proofs and cited supplier uses were reviewed and given specific complete risk records in dependency order.
- Scoped precheck for the citation-edited item and both reader-touched items: 3 checked, 0 failing.
- Scoped rendercheck for the citation-edited item: YAML and all mathematics parsed; exit 0. An intermediate unquoted colon in the expanded source title failed parsing; shortened the title to the exact section number and reran successfully. This transient mechanical failure is not a ledger defect.
- Strict `proof-contract.mjs` on the complete 14-item owning contract: after the two exact quotation updates, 0 errors, 0 warnings, 14/14 checked.
- Final `proof-layout.mjs items/pthm-td-joule-thomson-chart.md`: 1 item, 4 steps, 0 defects with a temporary resolver hook. The plain invocation failed to resolve the renderer's @/ import aliases; the hook maps those aliases and extensionless TypeScript imports to existing files without changing the renderer or repository tools. The hook is removed after validation.
- Final `risk-report.mjs` with `--require-reviewed`: 0 errors, 14 items routed; all seven required reviews complete.
- Authorized frontier-dependency refresh: successful and deduplicated.

No unresolved mathematical blocker, owner escalation or outside-scope repair remains in this dispatch. Engine hashing, adjudication collection, judging, gate battery and transitions remain with the engine.
