# Subjects-02 reconciliation

This report classifies the parked cross-track routes; it applies none of them.  A
route is `owner` whenever adjudication would delete or rename an item, change the
reading order, or add a mathematical commitment not already authorised by the
seam contract.  The binding ownership split is the subjects-02 seam contract
(`SEAMS`:167–187, 241–267).

File abbreviations used below are:

| abbreviation | file |
|---|---|
| `SEAMS` | `research/subjects-02-SEAMS.md` |
| `AV`, `AT`, `DT`, `FR`, `RG`, `RL` | the six files named in the commission |
| `DG` | `research/plan-differential-geometry-track.md` |
| `FA` | `research/plan-functional-analysis-track.md` |
| `PDE` | `research/plan-pde-track.md` |
| `HA` | `research/plan-homological-algebra-track.md` |
| `AA` | `research/plan-algebra-track-expansion.md` |
| `GT` | `research/plan-group-theory-track.md` |
| `CA` | `research/plan-commutative-algebra-track.md` |
| `TOP` | `research/plan-topology-track.md` |
| `MT` | `research/plan-measure-theory-track.md` |
| `CX` | `research/plan-complex-analysis-track.md` |
| `NT` | `research/plan-number-theory-track.md` |
| `PT` | `research/plan-probability-track.md` |
| `PS` | `research/plan-spec.json` |

## Route classification

### Algebraic geometry routes

| from | to | request | evidence (file and line) | class + reason |
|---|---|---|---|---|
| AV | global order | Splice AV-1 after the last AT pair.  The concrete anchor is AT-20's B page, `chern-and-pontryagin-classes-by-splitting-and-complexification-examples`. | AV:8, 70, 2184–2191; AT:49–52, 1440–1451 | **`owner`** — the placeholder is resolvable, but changing the reading order is owner-only. |
| AV | AT | Replace AV-21's “resolved AT supplier” by AT-6, with AT-2/AT-3 supplying chains and cover-small Mayer–Vietoris. | AV:1251–1260, 2187–2191; AT:32–39, 700–737 | **`apply`** — concrete, uncontested citation replacement. |
| AV | AT | Add forward interfaces from AT to AV-9/AV-10/AV-21 for sheaves, stalks, sheafification, Čech refinement/comparison, fine resolutions and abstract de Rham resolution. | AV:2192–2196; AT:99–114, 1654–1657 | **`apply`** — AV owns these notions and AT records the consumer seam without naming the exact suppliers. |
| AV | DG | On DG's de Rham page, cite AV-21 for the sheaf/Čech/fine-resolution route; retain DG's direct smooth-singular proof as the load-bearing route. | AV:1291–1322, 2197–2199; DG:4215–4229, 4358–4425 | **`apply`** — this is an authorised agreement/alternate-route interface, not a replacement of DG's proof. |
| AV | CA | Use the six named CA pages for Noether normalization, spectra, dimension, valuations, Dedekind domains and flatness. | AV:2200–2208; CA:670–672, 748–750, 818–820, 910–912, 1041–1043, 1234–1240 | **`stale`** — every named target page is already present. |
| AV | HA | Use HA for derived functors, injectives, Ext and spectral sequences in AV-21/22/25. | AV:2209–2212; HA:36–51, 1101–1106, 1326–1330, 1661–1664, 2894–2897, 3058–3063 | **`stale`** — the target already exposes all named algebraic suppliers. |
| AV | CX | Keep algebraic curves/RR/Serre duality separate from analytic Riemann surfaces unless an analytification/GAGA comparison is supplied. | AV:2213–2218; CX:521–528, 3878–3959 | **`stale`** — the analytic scaffold already excludes the algebraic superstructure and does not claim an algebraic comparison. |
| AV | NT | Leave arithmetic surfaces, étale cohomology and Weil conjectures to a future arithmetic-geometry consumer. | AV:2219–2222; NT:135–137 | **`stale`** — the number-theory scaffold already excludes Diophantine geometry requiring algebraic geometry. |
| AV | `plan-spec.json` / global build | Check stable page IDs, then replace relative labels during a later splice/build. | AV:2223–2229; SEAMS:241–248 | **`owner`** — this entails machine-plan and absolute-order changes outside the seam lane. |

### Algebraic-topology and differential-topology routes

| from | to | request | evidence (file and line) | class + reason |
|---|---|---|---|---|
| AT | TOP / live plan | Consume the authored homotopy and fundamental-group interfaces and leave covering spaces, van Kampen and covering classification on their existing topology pages. | AT:69–92; PS:55260–55851 | **`stale`** — the two exact authored interfaces and all five reserved low-dimensional page IDs already exist in the target plan. |
| AT | HA | Consume chain/cochain complexes, chain homotopy, cones, exact sequences, UCT/Künneth, filtered complexes, exact couples, convergence, Ext and Tor as algebra. | AT:93–97; HA:35–50, 368–940, 2162–2286, 2894–3164 | **`stale`** — HA already supplies each named algebraic engine. |
| AT | DG | On `singular-cochains-mayer-vietoris-and-smooth-singular-comparison`, remove DG's ordinary singular construction and consume AT's seven named chain/cochain, cover-small, pair-LES and Mayer–Vietoris items; DG retains smooth singular chains and the comparison. | AT:1681–1691; DG:3928–4048, 4050–4101; SEAMS:177–180 | **`owner`** — ownership is settled in AT's favour, but the required target deletion is owner-only. |
| AT | DG | On `the-de-rham-theorem-and-degree`, consume AT's Kronecker pairing, cohomology ring/graded commutativity, fundamental class and degree; prove wedge corresponds to cup and regular-value degree agrees with homological degree. | AT:736, 792–796, 848–861, 1692–1699; DG:4215–4229, 4358–4425 | **`apply`** — this is the exact missing singular-cohomology interface authorised by the seam. |
| AT | DT | Resolve AT's non-load-bearing Morse/CW orientation pointer to DT-5's `cor-one-critical-point-cell-attachment-homotopy-type`. | AT:109–115, 156, 1707–1708; DT:477–500 | **`apply`** — the concrete DT result now exists and no AT proof depends on the forward pointer. |
| DT | AT | Resolve `AT-n[singular-homology]` to AT-2/AT-3/AT-4: singular and relative chains, excision/Mayer–Vietoris, then cellular homology/Euler characteristic. | DT:135, 481, 605, 685; AT:34–36, 440–625 | **`apply`** — concrete pair labels exist and precede all DT uses. |
| DT | AT | Resolve `AT-n[cohomology-products]` to AT-6/AT-7. | DT:136, 769–771, 850–851, 1053–1055, 1092–1093; AT:38–39, 700–812 | **`apply`** — AT-6 supplies singular cohomology/Kronecker pairing and AT-7 supplies cup/cap products and Künneth. |
| DT | AT | Resolve `AT-n[poincare-duality]` to AT-8. | DT:137, 727, 769–771, 850–851; AT:40, 831–870 | **`apply`** — AT-8 is the exact fundamental-class and Poincaré–Lefschetz supplier. |
| DT | AT | Resolve `AT-n[thom-isomorphism]` to AT-18. | DT:138, 769–771, 934–935, 1053–1055; AT:50, 1305–1349 | **`apply`** — AT-18 supplies Thom classes/isomorphism and Gysin maps. |
| DT | AT | Resolve `AT-n[characteristic-classes]` to AT-19/AT-20, with AT-15 and AT-18 as their bundle/Thom prerequisites. | DT:139, 769–771, 1417–1418, 1587–1588; AT:47, 50–52, 1363–1451, 1703–1708 | **`apply`** — construction/naturality/Whitney laws are in AT; DT consumes them for smooth applications. |
| DT | AT | Resolve `AT-n[classifying-spaces]` to AT-13/AT-15. | DT:140, 934–935, 1296, 1417–1418; AT:45, 47, 1126–1247 | **`apply`** — AT-13 supplies classifying spaces and AT-15 universal bundles/classification. |
| DT | AT | Resolve the ordinary homotopy/stabilisation part of `AT-n[homotopy-groups-and-stable-homotopy]` to AT-10/AT-12. | DT:141, 975, 1015, 1053–1055, 1339; AT:42, 44, 943–1090 | **`apply`** — these pairs supply homotopy groups, suspension and Freudenthal stabilisation. |
| DT | AT | Substitute AT's settled cap-product order, fibrewise Thom normalisation and Pontryagin sign into DT-12/16–20/28/32: `def-cap-product-with-cohomology-first`, `def-thom-class-by-fiberwise-normalization`, and `def-pontryagin-classes-by-complexification`. | DT:778–791, 952–960, 1074, 1105–1119, 1430–1437, 1605–1624, 1997–2003; AT:205–215, 258–264, 798–801, 1362–1368, 1468 | **`apply`** — all three conventions are now explicit and mutually compatible; no choice remains. |
| DT | AT / new supplier | Supply the stable-stem input used in DT-32. | DT:141, 1587–1618, 1988–1990; AT:1659–1666 | **`owner`** — AT explicitly defers stable homotopy beyond Freudenthal, so no concrete supplier exists; a new mathematical commitment is required. |
| DT | AT / new supplier | Supply CW expansions/collapses and Whitehead group/torsion for DT-24's `AT-n[simple-homotopy]`. | DT:53, 142, 1251–1281, 1985–1988; AT:1659–1666 | **`owner`** — AT has no simple-homotopy/Whitehead-torsion pair, and the seam contract does not assign that new construction to AT. |
| DT | AT | Orient AT's duality, Thom and characteristic-class pages forward to DT-11/12/14/16/17/19/20/28/31/32 as applications. | DT:144–148; AT:1703–1708 | **`apply`** — AT already records the correct boundary but not the now-known exact DT pair labels; adding those pointers is concrete and uncontested. |
| AT | AV | Reconcile AT's line-projectivisation sign with AV's quotient-line convention. | AT:1447–1451, 1710–1715; AV:1743–1746 | **`stale`** — AV already states the quotient convention; the required translation is exactly c₁(γ*) = −c₁(γ). |
| AT | deferred catalogue | Delete exact deferred claims discharged by AT while preserving broad stable-homotopy, bordism, `KO`, Adams and Eilenberg–Moore entries. | AT:1717–1722 | **`owner`** — exact-claim deletion requires the orchestrator's catalogue diff. |
| DT | DG / build order | Replace DT's named DG predecessor placeholders by authored exact item IDs before building DT. | DT:103–125, 278–280, 1995–2003 | **`owner`** — the live DG supplier arrays are still empty; selecting authored item-level dependencies is a build-order commitment, not a scaffold citation already available. |

### Fourier-analysis routes

| from | to | request | evidence (file and line) | class + reason |
|---|---|---|---|---|
| FR | FA | Transfer seven exact Fourier-series IDs from FA-14/FA-6 to FR-1/FR-2/FR-5, and replace FA-14's Fejér density proof by complex self-adjoint Stone–Weierstrass. | FR:42–56, 207, 216, 246, 248, 255, 341, 354; FA:616, 1063–1123, 1958–1960, 2131–2136; TOP:1418–1422 | **`conflict`** — both scaffolds propose the same seven IDs.  FR's replacement argument is mathematically available because the topology theorem is now present, but FA explicitly keeps its completeness proof Fejér-independent.  The choice determines both ownership and FA-14's proof dependency. |
| FR | FA | Leave Fourier transform on ℝⁿ, Schwartz/tempered distributions, Plancherel, Wiener, Poisson and Heisenberg foundations in FA. | FR:55–61, 1028–1033 | **`stale`** — FR records these as consumed/refused and the duplicate scan finds no corresponding FR mint. |
| FR | PDE | Move PDE-19's Calderón–Zygmund definition, decomposition, weak endpoint, interpolation/duality split, $L^p$ theorem, endpoint remark and two endpoint counterexamples to FR-8. | FR:62–67, 468–493; PDE:1516–1569, 3234–3249 | **`conflict`** — the overlap is eight exact IDs, not seven: the endpoint-behaviour remark is duplicated too.  Both scaffolds currently claim the same objects; the choice determines the analytic prerequisite direction of PDE-19. |
| FR | MT | Consume MT's maximal-function, differentiation and interpolation results rather than reminting them. | FR:68–70, 1034–1036; MT:3292–3310 | **`stale`** — the suppliers are already present and FR introduces no exact collision with MT. |
| FR | PDE | Leave Sobolev spaces/embedding/trace/weak PDE in PDE. | FR:1037–1038; PDE:1072–1238, 1245–1512 | **`stale`** — PDE already owns these pages and FR does not duplicate their IDs. |
| FR / RG | each other | Replace every FR `RG-?` Haar token by RG-18; cite FR-14/FR-15 from RG-20/22/25–27 for LCA Fourier results. | FR:71–77, 710–717, 752–759, 1041; RG:1022–1046, 1157, 1202–1208, 1769–1776 | **`apply`** — RG-18 is the concrete Haar existence/uniqueness pair; the inverse FR pair labels are already known and the ownership directions agree. |
| FR | PDE / dispersive analysis | Provide a Strichartz supplier for FR-13's restriction-to-dispersive interface. | FR:78–80, 691, 1025, 1042–1044 | **`owner`** — the PDE scaffold contains no Strichartz page; adding one is a new mathematical commitment.  FR correctly leaves the present remark non-load-bearing. |
| FR | CX | Keep one-variable Hardy-space boundary theory in complex analysis and real-variable Hardy/BMO material in FR. | FR:1045–1046; CX:3682–3722 | **`stale`** — the complex-analysis target already contains the analytic Hardy-space block and does not duplicate FR's real-variable program. |

### Representation-theory-of-groups routes

| from | to | request | evidence (file and line) | class + reason |
|---|---|---|---|---|
| RG | AA | Consume group algebras, Maschke, characters and induction/restriction from abstract algebra. | RG:96–102, 137–140; AA:1364–1374, 1442–1448, 1508–1516, 1588–1595 | **`stale`** — all four prerequisite blocks already exist under stable page IDs. |
| RG | GT | Consume the seven modular-representation/block-theory prerequisites from group theory. | RG:104–112, 141–143, 1639–1647, 1784–1787; GT:2316–2388, 2438–2496 | **`stale`** — RG already records the exact seven IDs and GT already proposes each one. |
| RG | FA / MT | Consume FA's spectral/operator pages and MT's scalar integration, product-measure and Radon/Riesz–Markov machinery. | RG:145–150; FA:1125–1560; MT:48–61 | **`stale`** — all named non-disintegration suppliers already exist in those target scaffolds. |
| RG | MT / PT / new supplier | Replace the phantom “measure-theory disintegration pages” required by RG-26 with an exact adequate supplier. | RG:150, 1388–1422, 1698–1713; MT:1326; PT:40, 916 | **`owner`** — MT explicitly leaves conditional measures out of scope; PT-11 proves standard-Borel probability disintegration, while RG asks for measure-class/direct-integral disintegration.  Choosing an extension or a new supplier is a mathematical commitment. |
| RG | global order | Put RG-1 after the last RL pair.  The concrete anchor is RL-15's B page, `the-weyl-kac-character-formula-examples`. | RG:22–25, 1763–1768; RL:214–232, 795–824 | **`owner`** — the placeholder is resolvable, but changing reading order is owner-only. |
| RG | RL | Resolve RG-10's `RL-n` Schur–Weyl citations to RL-8, `tensor-product-multiplicities-and-littlewood-richardson`. | RG:641, 664, 671; RL:512–539 | **`apply`** — RL-8 is the exact polynomial GL(V)/𝔤𝔩(V) tensor supplier. |
| RG | RL / DG | Resolve RG-29's `RL-n`: use RL-1 for the Harish–Chandra centre/infinitesimal-character input and DG-30 for root 𝔰𝔩₂ relations; RG retains the group formulas/globalisation. | RG:1529–1558; RL:235–280; DG:7194, 7271–7285 | **`apply`** — these concrete pairs cover the two distinct facts hidden by one placeholder. |
| RG | RL / DG | Resolve RG-30's `RL-n`: use RL-2 for the highest-/lowest-weight module template, DG-30 for root 𝔰𝔩₂, and RL-1 only where a central character is invoked. | RG:1578–1590; RL:282–330; DG:7271–7285 | **`apply`** — the suppliers are concrete; RG still owns analytic real-group classification and globalisation. |
| RG | DG | State on DG-33 that compact-Lie Peter–Weyl is the compact-Lie specialisation of RG-22's general compact-group theorem. | RG:1202–1208, 1778–1782; DG:7853–7866, 7975–7978 | **`apply`** — a concrete agreement citation is missing from DG, while RG already records the comparison. |
| RG | all named planned suppliers | Before building RG pages, replace scaffold-level planned dependencies by exact authored item IDs. | RG:148–160, 1789–1793 | **`owner`** — those supplier pages are still planned/empty; selecting exact authored dependencies is a later build commitment. |
| RG-28 | RG-29 | Either move the complementary-series example after RG-29 or retain and mark its forward dependency explicitly. | RG:1795–1800 | **`owner`** — either resolution changes reading order or deliberately authorises a forward reference. |

### Representation-theory-of-Lie-algebras routes

| from | to | request | evidence (file and line) | class + reason |
|---|---|---|---|---|
| RL | DG | Consume DG-25–DG-31 and DG-33/DG-34 for Lie groups/actions, PBW, solvable/semisimple/root-system foundations, compact Lie theory and real forms, without importing analytic representation theory. | RL:183–212; DG:6097, 6305, 6543, 6754, 6954, 7194, 7408, 7853, 8093 | **`stale`** — all nine non-DG-32 supplier pairs already exist in the DG scaffold with the stated boundary. |
| RL | DG / build order | Author the ten DG-25–DG-34 supplier inventories and replace page-level dependencies by exact item IDs before building affected RL pages. | RL:195–212, 1112–1121; DG:6097–8332 | **`owner`** — the prose suppliers exist but their live `items` arrays are empty; the exact authored dependency selection is a build-order commitment. |
| RL | DG | Remove/rehome DG-32's seven Verma-module IDs and seven formal-character/Weyl-formula IDs into RL-2 and RL-7. | RL:1066–1080; DG:7629–7639, 7674–7691, 7731–7766; SEAMS:171–174 | **`owner`** — the seam already assigns the representation-theoretic superstructure to RL, so the route is uncontested; applying it requires deletion/rehome of 14 DG proposals. |
| RL | DG | Leave in DG-32 finite-dimensional highest-weight classification, dominant-integral parametrisation and the equivalence of complete reducibility with compact-real-form unitarity. | RL:1081–1087; DG:7692–7694, 7741–7742, 7761–7762 | **`stale`** — DG already has the three retained IDs and RL does not remint them. |
| RL | DG | Consume DG-29 for invariant forms, Casimir, Chevalley–Eilenberg cohomology and Whitehead lemmas. | RL:1088–1091; DG:6954–7046 | **`stale`** — the exact DG supplier is already present and RL does not duplicate it. |
| RL | AV | Supply flag varieties `G/B`, equivariant line bundles and the geometric/cohomological input required for RL-9's Borel–Weil–Bott page. | RL:1092–1095, 1109, 1120; AV:21–25, 1251–1370, 1574–1659 | **`owner`** — AV has sheaf/cohomology machinery but no `G/B`, equivariant line-bundle or general flag-variety page; adding them is a new commitment. |
| RL | RG | Replace RG's generic Lie-algebra interface by RL-1, RL-2 and RL-8 in the precise locations listed above. | RL:1096–1100; RG:641–671, 1529–1590 | **`apply`** — the concrete mapping is available and does not move ownership of group representations. |
| RL | HA | Use HA for derived functors, Ext, spectral sequences and homological algebra. | RL:1101–1103; HA:36–51, 1101–1106, 1661–1664, 2894–2897, 3058–3063 | **`stale`** — all named HA interfaces already exist. |
| RL | AV / future geometric representation theory | Supply the localisation/`D`-module engine for RL-10's Duflo proof, or retain the theorem as a sourced non-load-bearing leaf. | RL:1043, 1110, 1122–1124; AV:21–25 | **`owner`** — AV contains no `D`-module/localisation block; proving rather than retaining the leaf is a new mathematical commitment. |
| RL | AV | Record the Borel–Weil sign translation: AV's quotient hyperplane line is the dual of AT/RL's tautological sub-line, so first Chern classes change sign. | RL:1128–1131; AV:1743–1746; AT:1712–1715 | **`apply`** — both conventions are fixed; only the explicit translation is missing. |

## Adjudication details

1. **FR versus FA (seven IDs).**  The exact overlaps are
   `def-dirichlet-and-fejer-kernels`,
   `lem-fejer-kernel-is-a-positive-approximate-identity`,
   `thm-fejer-uniform-convergence-for-continuous-periodic-functions`,
   `thm-dirichlet-jordan-pointwise-convergence`, `rem-gibbs-phenomenon`,
   `cex-continuous-function-with-divergent-fourier-series-at-a-point`, and
   `ex-fourier-partial-sum-operators-and-uniform-boundedness`
   (FR:207, 216, 246, 248, 255, 341, 354; FA:616, 1095–1097,
   1121–1123).  The proposed replacement is viable: the complex self-adjoint
   Stone–Weierstrass theorem now exists (TOP:1418–1422), and the trigonometric
   algebra is unital, self-adjoint and separates points.  It is not the current
   FA proof: FA explicitly proves density and completeness through Fejér and
   says that route remains independent of Stone–Weierstrass (FA:1077–1110,
   1958–1960, 2131–2136).  A transfer therefore also requires rewriting FA-14
   items 17–18 and its proof plan; retention instead requires FR to cite FA-14
   and FA-6 rather than mint the seven IDs.

2. **FR versus PDE (eight IDs).**  The exact overlaps are
   `def-calderon-zygmund-kernel-and-principal-value-operator`,
   `lem-calderon-zygmund-decomposition-at-height-lambda`,
   `thm-calderon-zygmund-operator-has-weak-type-one-one`,
   `lem-calderon-zygmund-lp-range-splits-into-interpolation-and-duality`,
   `thm-calderon-zygmund-singular-integrals-are-bounded-on-lp`,
   `rem-calderon-zygmund-endpoints-are-weak-lone-and-bmo-not-strong-lone-or-linfinity`,
   `cex-calderon-zygmund-strong-lone-bound-fails`, and
   `cex-calderon-zygmund-operators-need-not-map-linfinity-to-linfinity`
   (FR:468–493; PDE:1534–1536, 1549, 3242–3244, 3249).  If all eight move,
   PDE-19 retains its Hölder/Schauder theory, Newtonian-potential Hessian and
   $L^2$ multiplier seed, $W^{2,p}$ elliptic estimates, localisation and
   continuity method, coefficient/boundary/modulus counterexamples, and the
   PDE application of the FR theorem: specifically base A items 1–8 and 12–16,
   base B items 1–4 and 6–7, and the additions at lines 3238–3241, 3245–3248
   and 3250.  It loses only those eight general singular-integral objects
   (PDE:1524–1551, 3238–3250).  The binding seam puts
   singular-integral theory in FR and Sobolev/PDE consequences in PDE
   (SEAMS:185–187), but resolving the duplicate IDs still requires owner
   adjudication.

3. **RL versus DG (14 IDs; owner-class rehome).**  The duplicated Verma IDs are
   `def-one-dimensional-borel-module-of-weight-lambda`, `def-verma-module`,
   `thm-universal-property-of-verma-modules`,
   `thm-pbw-model-of-a-verma-module`,
   `prop-weights-of-a-verma-module-lie-below-lambda`,
   `lem-sum-of-all-proper-submodules-of-a-verma-module-is-proper`, and
   `thm-verma-module-has-a-unique-simple-quotient` (RL:118–126; DG:7676–7690).
   The duplicated character IDs are `def-formal-character-of-a-finite-dimensional-weight-module`,
   `prop-formal-characters-are-additive-and-multiplicative`,
   `prop-characters-of-finite-dimensional-modules-are-weyl-invariant`,
   `thm-weyl-denominator-identity`, `thm-weyl-character-formula`,
   `thm-weyl-dimension-formula`, and
   `thm-kostant-weight-multiplicity-formula` (RL:482–497; DG:7733–7763).
   The seam assigns highest-weight/Verma/character-formula proof to RL and
   finite-dimensional semisimple Lie theory to DG (SEAMS:171–174); DG can retain
   the three finite-dimensional boundary results identified in the stale route.

## Concurrent-reference resolution and characteristic-class check

The exact AT interfaces owed to the two DG pages are:

| DG page | exact AT items to consume | DG result retained | evidence |
|---|---|---|---|
| `singular-cochains-mayer-vietoris-and-smooth-singular-comparison` | `def-singular-simplex-and-singular-chain-group-with-coefficients`; `prop-singular-chains-and-homology-are-covariantly-functorial`; `thm-cover-small-inclusion-is-a-chain-homotopy-equivalence`; `def-singular-cochain-complex-with-coefficients`; `prop-singular-cohomology-is-contravariantly-functorial`; `thm-long-exact-sequence-of-a-pair-in-singular-cohomology`; `thm-mayer-vietoris-sequence-in-singular-cohomology` | Smooth singular simplices/chains and the compatible chain-homotopy equivalence to the AT complex. | AT:1681–1691; DG:3928–4101 |
| `the-de-rham-theorem-and-degree` | `def-kronecker-evaluation-pairing`; `def-singular-cohomology-ring`; `thm-singular-cohomology-is-graded-commutative`; `def-fundamental-class-of-a-compact-oriented-manifold`; `def-degree-of-a-map-between-oriented-closed-manifolds`; `prop-manifold-degree-is-functorial-and-detected-by-top-cohomology` | Prove integration sends wedge to cup and smooth regular-value degree agrees with the homological degree. | AT:1692–1699; DG:4215–4425 |

All concurrent `AT-n`, `RL-n`, `FR-n` and `RG-?` placeholders named in the
commission resolve as follows; only DT's stable-stem and simple-homotopy AT
tokens have no supplier:

| unresolved token | concrete resolution | evidence |
|---|---|---|
| AV `AT-n` placement | AT-20 B page (order change remains owner-only) | AV:2184–2186; AT:1440–1451 |
| AV singular-cohomology supplier | AT-6, with AT-2/AT-3 for its chain/MV prerequisites | AV:2187–2191; AT:440–535, 700–737 |
| DT singular homology | AT-2/AT-3/AT-4 | DT:135; AT:34–36 |
| DT cohomology products | AT-6/AT-7 | DT:136; AT:38–39 |
| DT Poincaré duality | AT-8 | DT:137; AT:40 |
| DT Thom isomorphism | AT-18 | DT:138; AT:50 |
| DT characteristic classes | AT-19/AT-20, using AT-15/AT-18 | DT:139; AT:47, 50–52 |
| DT classifying spaces | AT-13/AT-15 | DT:140; AT:45, 47 |
| DT ordinary homotopy/stabilisation | AT-10/AT-12 | DT:141; AT:42, 44 |
| DT stable stems | **no supplier** | DT:141, 1587–1618; AT:1659–1666 |
| DT simple homotopy/Whitehead torsion | **no supplier** | DT:142, 1251–1281; AT:1659–1666 |
| FR `RG-?` Haar | RG-18, `haar-measure-existence-and-uniqueness` | FR:71–77; RG:1022–1046 |
| RG placement `RL-n` | RL-15 B page (order change remains owner-only) | RG:22–25; RL:795–824 |
| RG-10 `RL-n` | RL-8 | RG:641–671; RL:512–539 |
| RG-29 `RL-n` | RL-1 plus DG-30 | RG:1529–1558; RL:235–280; DG:7194, 7271–7285 |
| RG-30 `RL-n` | RL-2 plus DG-30; RL-1 only for central character | RG:1578–1590; RL:235–330; DG:7271–7285 |
| RG `FR-n` | FR-14/FR-15 as already named in the amendment | RG:89, 1769–1776; FR:710–817 |

The characteristic-class split is honoured and no construction/application
result is orphaned.  AT constructs/classifies bundles, Thom/Gysin theory and
(w,c,p,e), and explicitly stops before Morse, cobordism, Pontryagin–Thom and
characteristic-number applications (AT:47–52, 1363–1451, 1657–1675,
1703–1708).  DT explicitly consumes rather than reconstructs these classes in
its obstruction, characteristic-number, signature and exotic-sphere pages
(DT:67–73, 293–294, 765–782, 1417–1437, 1586–1618).  The only missing inputs
near that boundary are the separately identified stable-stem supplier, not a
characteristic-class construction (DT:1587–1618; AT:1659–1666).

## Mechanical findings

### Recomputed size and ratio

The inventory rows, pair headings and canonical `included` rows were recounted
from disk independently of each track's summary.  All six summaries are correct.

| track | pairs | items (A + B) | included headings | recomputed ratio | stated figures | evidence |
|---|---:|---:|---:|---:|---|---|
| AV | 26 | 990 (748 + 242) | 266 | 3.72 | match | AV:2241–2257 |
| AT | 20 | 568 (423 + 145) | 60 | 9.47 | match | AT:1742–1762 |
| DT | 32 | 668 (507 + 161) | 160 | 4.175 = 4.18 | match | DT:1944–1978 |
| FR | 18 | 299 (210 + 89) | 63 | 4.75 | match | FR:1048–1064 |
| RG | 30 | 544 (419 + 125) | 153 | 3.56 | match | RG:2152–2165 |
| RL | 15 | 321 (237 + 84) | 75 | 4.28 | match | RL:1138–1149 |

### Duplicate-ID candidates

- Within-track duplicates: **0 in each of AV, AT, DT, FR, RG and RL**.  Across
  the six tracks: **0 exact collisions**.  Against live `items/` filenames:
  **0**.  Against strings/item IDs in `research/plan-spec.json`: **0**.  These
  results independently confirm the orchestrator's measurement (AV:2244–2257;
  AT:1747–1753; DT:1946–1950, 1970–1981; FR:1050–1053, 1066–1068;
  RG:2156–2164; RL:1140–1143).
- Against the other prose scaffolds, there are **54 exact-ID candidates in four
  groups and no others**: AT–DG 25, FR–FA 7, FR–PDE 8, and RL–DG 14.  The last
  FR–FA and FR–PDE are the conflicts detailed above.  AT–DG and RL–DG are
  owner-class deletion/rehome routes because the seam already assigns ordinary
  singular constructions to AT and the representation-theoretic superstructure
  to RL (AT:1681–1691; RL:1066–1080; DG:3949–4048, 7674–7766;
  SEAMS:171–177).

The 25 AT–DG candidates are:

`def-standard-topological-simplex-and-its-affine-face-maps`,
`lem-affine-face-maps-satisfy-the-cosimplicial-identities`,
`def-singular-boundary-operator`,
`thm-the-singular-boundary-squares-to-zero`,
`def-induced-singular-chain-map`, `def-prism-operator-for-a-homotopy`,
`thm-singular-chain-homotopy-formula`,
`ex-boundaries-of-the-standard-one-and-two-simplices`,
`ex-direct-cancellation-in-the-boundary-squared-of-a-two-simplex`,
`ex-the-prism-operator-for-a-path-homotopy`,
`def-barycenter-and-affine-cone-on-a-singular-chain`,
`def-barycentric-subdivision-chain-operator`,
`thm-barycentric-subdivision-is-a-chain-map`,
`def-barycentric-subdivision-prism-homotopy`,
`thm-barycentric-subdivision-is-chain-homotopic-to-the-identity`,
`lem-mesh-of-iterated-barycentric-subdivision-tends-to-zero`,
`def-cover-small-singular-chain-subcomplex`,
`lem-every-finite-singular-chain-becomes-cover-small-after-enough-subdivision`,
`thm-cover-small-singular-chains-compute-singular-homology`,
`thm-cover-small-inclusion-is-a-chain-homotopy-equivalence`,
`lem-two-open-cover-small-chains-are-the-sum-of-the-two-singular-subcomplexes`,
`ex-first-barycentric-subdivision-of-a-triangle`,
`ex-cover-small-chains-for-the-two-arc-cover-of-a-circle`,
`lem-the-singular-coboundary-squares-to-zero`, and
`prop-singular-cohomology-is-contravariantly-functorial`
(AT:440–553, 727–729; DG:3949–4017, 4124–4131).

### Source-matrix coverage

| track | pairs with fewer than two independent full treatments | deliberate dash and reason | evidence |
|---|---:|---|---|
| AV | 0 | none | AV:1698–1734, 2252–2254 |
| AT | 0 | AT-5 has two full pair-level treatments; only the narrower all-CW uniqueness cross-check has an optional dash because only one complete open proof was found. | AT:700–710, 1496–1546 |
| DT | 1: DT-30 | yes — only MMF treats general local Reeb stability; Calegari and MIT cover narrower codimension-one/sphere-leaf forms. | DT:1638–1679, 1961–1966, 2005–2009 |
| FR | 0 | none | FR:165–191, 1063–1064 |
| RG | 0 | none | RG:1861–1902, 2165 |
| RL | 0 | required columns are full; dashes occur only in optional checks. | RL:833–892, 1149 |

## Summary by class

| class | routes |
|---|---:|
| `apply` | 21 |
| `conflict` | 2 |
| `stale` | 18 |
| `owner` | 16 |
| **total** | **57** |

## Questions only the orchestrator can settle

1. Authorise the two absolute-order splices: AV after AT-20 B, and RG after
   RL-15 B; then perform the global page/item-ID check and machine-plan edit.
2. For the seven FR–FA duplicates, choose FR ownership plus a Stone–Weierstrass
   rewrite of FA-14, or FA ownership plus FR citations.
3. For the eight FR–PDE duplicates, choose FR-8 ownership plus a PDE-19
   dependency, or retain them in PDE-19 and make FR cite PDE.
4. Authorise deletion of DG's 25 duplicated ordinary singular-chain/cochain
   items while retaining its smooth-singular comparison.
5. For the 14 RL–DG duplicates, authorise rehoming to RL-2/RL-7 or amend the
   seam contract to leave them in DG-32.
6. Decide whether to commission a stable-homotopy/stable-stems supplier for
   DT-32 or keep the Θ₇ order computation as a non-load-bearing sequel.
7. Assign the simple-homotopy/Whitehead-group construction needed by DT-24, or
   change DT-24 so it does not claim that absent AT supplier.
8. Approve the exact-claim deletion diff for the deferred topology catalogue.
9. Commission a PDE/dispersive Strichartz page, or retain FR-13's current
   non-load-bearing missing-interface remark.
10. Reorder RG-28/RG-29 or explicitly authorise RG-28's forward reference.
11. Commission the AV flag-variety/equivariant-line-bundle geometry needed for
    RL-9, or leave the Borel–Weil–Bott page blocked from authorship.
12. Commission the `D`-module/localisation engine needed for a supplied proof
    of RL-10's Duflo theorem, or retain it as a sourced non-load-bearing leaf.
13. Schedule the still-empty DG and other planned supplier pages before
    DT/RG/RL builds that require exact authored item IDs.
14. Assign an adequate scalar/measure-class disintegration supplier to RG-26;
    decide whether PT-11 is to be extended or a separate measure theorem is
    required.
