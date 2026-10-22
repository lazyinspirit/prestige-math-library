# Step 5 repair: impact-initial, round 1, unit 2

Read briefs/step5-owner-repair.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/impact-initial-1.json.



Owner-confirmed Step-4 reader concerns assigned for genuine current review and smallest necessary repair (these are not judge rejections or downstream claims):
[
  {
    "id": "lem-double-branched-cover-of-an-oriented-link-well-defined",
    "batch": "100",
    "source_kind": "concern",
    "reader_batch": "100",
    "concern_index": 0,
    "concern": {
      "id": "lem-double-branched-cover-of-an-oriented-link-well-defined",
      "concern": "Proof 3.1 says the complement-cover identification extends smoothly because it preserves boundary monodromies. Monodromy alone supplies no smooth extension across a square branch chart: for example, a nonconformal real-linear normal germ generally has no differentiable square-root lift. The argument needs an explicit tubular normalization or compatible transported branch charts, including the claimed independence from arbitrary tubular charts in 2.1. The isotopy-invariance conclusion is standard, but this smoothness step is not justified as written.",
      "severity": "gap-a-reader-closes"
    },
    "before_guard_sha256": "8ce2cf3882a0f79d5f2e7468497bce038845ece9d2a7eb8174bca6e4ed786b42",
    "owner_review": {
      "reviewed_by": "root",
      "confirmed_defect": true,
      "reviewed_at": "2026-10-21T18:23:19.345Z",
      "reason": "100:0: Equality of monodromies classifies covers only away from the branch core. For example A(x+iy)=2x+iy is orientation preserving but not complex conformal. A differentiable lift h of A(z²) under squaring would have a real-linear invertible derivative B with (Bz)²=A(z²); writing Bz=az+b conjugate(z), the missing |z|² coefficient forces ab=0, and orientation then forces b=0, inconsistent with the conjugate(z)² coefficient of A(z²). Thus the current claimed extension is unjustified. The proposal normalizes tubes to a rotation by equal-normal-derivative tubular uniqueness and a positive-definite polar homotopy, then supplies an actual smooth square-root phase. For isotopy invariance it first transports charts. The Statement remains the same oriented total-space diffeomorphism assertion; no stronger smooth isomorphism over a fixed identity base map is asserted.",
      "evidence_file": "research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/step5-supervision/root-reader-concern-admission/items/lem-double-branched-cover-of-an-oriented-link-well-defined-root-review.json",
      "candidate_patch_file": "research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/step5-supervision/root-reader-concern-admission/items/lem-double-branched-cover-of-an-oriented-link-well-defined-instructions.json",
      "proposed_edits": [
        {
          "source_excerpt": "2.1 By [F3] and [F4], the index-two kernel determines a connected two-sheeted cover. On the boundary of a punctured tube around $K_i$, its two monodromies are the prescribed meridian value $1$ and a longitude value $\\eta_i\\in\\mathbb F_2$. The local model [F5] has exactly those two monodromies; classification of covers of the punctured tube identifies it with the restricted cover. The displayed model therefore extends the cover across every branch component. If a tubular framing is changed by $k$ meridional twists, the parallel longitude changes by $k\\mu_i$, so its character changes by $k$ modulo two; the corresponding rotation of the normal coordinate changes the phase in the local model by the same parity. Thus these are coordinate descriptions of one extension, not different covers. [F3, F4, F5, step 1.1]",
          "proposed_replacement": "2.1 By [F3] and [F4], the index-two kernel determines a connected two-sheeted cover. On a punctured tube around $K_i$, its two monodromies are the meridian value $1$ and a longitude value $\\eta_i\\in\\mathbb F_2$. The local model [F5] has exactly these monodromies, so covering classification identifies its punctured part with the restricted cover. Attach its core to obtain a smooth extension in the chosen charts. This constructs an extension; independence of the smooth total-space diffeomorphism type requires the normalization below, not merely equality of boundary monodromies. [F3, F4, F5, step 1.1]\n\n2.2 Compare two oriented tubular charts $\\varphi_0,\\varphi_1$ around the same component. Express them over a common oriented core parameter $s$; a change of the original core parameter only replaces the unit phase $e^{\\mathrm i\\eta_j s}$ by a smooth unit loop $a_j(s)$ of the same winding number $\\eta_j$. Let $A(s)\\in GL^+(2,\\mathbb R)$ be the unique vertical linear change for which $\\varphi_1\\circ A$ and $\\varphi_0$ induce the same normal-quotient identification. Write $A=RP$ by smooth polar decomposition, with $R(s)\\in SO(2)$ and $P(s)$ positive definite. The compatible-tube assertion [F6] gives an ambient isotopy fixing the core and carrying $\\varphi_0$ to $\\varphi_1\\circ A$ near it. The fiber-linear isotopy $R((1-t)P+tI)$ then connects $A$ to $R$ through invertible maps. On a common smaller tube its composition with $\\varphi_1$ is an isotopy of open embeddings, with open track, fixing the core. The relative open-set clause of [F6] extends it near the compact core. Thus an ambient diffeomorphism $g$, isotopic to the identity through maps fixing the whole link, satisfies $g\\circ\\varphi_0=\\varphi_1\\circ R$ near this component. Choose the supports in disjoint component tubes and compose the finitely many isotopies. [F6, given, construct]\n\n2.3 Identify $R(s)$ with a unit complex number, of winding $k$. The image under $g$ of the first chart longitude has slope $\\lambda_1+k\\mu$ in the second chart, so preservation of the meridian character gives $\\eta_0\\equiv\\eta_1+k\\pmod2$. The unit loop $R(s)a_0(s)/a_1(s)$ therefore has even winding. It has a smooth periodic square root $r(s)$: lift its argument on $[0,2\\pi]$, halve it, and use even winding to match the endpoints and derivatives. In the two branch models $b_j(s,z)=(s,a_j(s)z^2)$ the map $(s,z)\\mapsto(s,r(s)z)$ consequently covers $g$, since $a_1r^2=Ra_0$. It is an orientation-preserving smooth diffeomorphism including $z=0$. The two signs of $r$ differ by the deck map. Choose the sign matching the complement-cover isomorphism at one point of each connected punctured tube; covering uniqueness makes them agree throughout that tube. Hence the local lifts glue to the complement lift. This proves independence of the oriented smooth total-space diffeomorphism type from arbitrary oriented tubular charts. It does not assert a smooth lift over the identity base map between arbitrary unnormalized charts. [F4, F5, step 1.1, step 2.2, construct, algebra]"
        },
        {
          "source_excerpt": "3.1 The based covering uniqueness in [F4] identifies the two complement covers over this diffeomorphism. The identification extends over each branch tube because it preserves the two boundary monodromies in step 2.1; the local order-two models then give an orientation-preserving diffeomorphism of the closed branched covers. Thus $\\Sigma(L')\\cong\\Sigma(L)$ as oriented manifolds. [F4, F5, step 2.1, step 1.2] ∎",
          "proposed_replacement": "3.1 Let $F$ be the terminal diffeomorphism of the given ambient isotopy from $L$ to $L'$. First choose the target tubular charts by transporting the source charts through $F$. Corresponding longitudes have the same character, and in these transported branch coordinates a lift is $(s,z)\\mapsto(s,z)$, or its deck translate. By step 1.2 and [F4] the complement covers are isomorphic over $F$; on every punctured tube that isomorphism is one of these two local lifts, so it extends smoothly across the branch core. The resulting map is an orientation-preserving diffeomorphism of the closed total spaces. Finally steps 2.2–2.3 compare the transported target charts with any originally chosen target charts. Thus $\\Sigma(L')\\cong\\Sigma(L)$ as oriented manifolds, with no unjustified smooth extension of an arbitrary normal germ. [F4, F5, step 1.2, step 2.1, step 2.2, step 2.3] ∎"
        },
        {
          "source_excerpt": "[F5] The local normal-disk model for a branch component is $(s,z)\\mapsto(s,e^{\\mathrm i\\eta s}z^2)$ with $s\\in\\mathbb R/2\\pi\\mathbb Z$; its meridian monodromy is nontrivial and its longitudinal monodromy is $\\eta\\in\\mathbb F_2$ ([[def-double-branched-cover-of-an-oriented-link]]).",
          "proposed_replacement": "[F5] The local normal-disk model for a branch component is $(s,z)\\mapsto(s,e^{\\mathrm i\\eta s}z^2)$ with $s\\in\\mathbb R/2\\pi\\mathbb Z$; its meridian monodromy is nontrivial and its longitudinal monodromy is $\\eta\\in\\mathbb F_2$ ([[def-double-branched-cover-of-an-oriented-link]]).\n\n[F6] Under $\\mathrm{AC}_\\omega$, two tubular embeddings of the same normal bundle inducing the same vertical normal-quotient map are ambient isotopic near a compact core, fixing that core ([[cor-tubular-neighbourhoods-are-unique-up-to-ambient-isotopy]]). The relative open-set clause of [[thm-isotopy-extension]] also extends an isotopy of an ambient open set with open track near any compact subset. In the application the ambient manifold is the boundaryless $S^3$, the core is the compact union of link circles, the normal identifications are explicitly equalized, and the fiber-linear isotopy consists of open embeddings after a common shrinking. AC implies the required countable choice."
        },
        {
          "source_excerpt": "  - cor-based-connected-coverings-isomorphic-iff-equal-subgroups",
          "proposed_replacement": "  - cor-based-connected-coverings-isomorphic-iff-equal-subgroups\n  - cor-tubular-neighbourhoods-are-unique-up-to-ambient-isotopy\n  - thm-isotopy-extension"
        },
        {
          "source_excerpt": "axiom_use: \"Assumes AC only through the supplied link-complement and covering-classification hypotheses; the mod-two homology character is choice-free.\"",
          "proposed_replacement": "axiom_use: \"Assumes AC through the supplied link-complement and covering-classification hypotheses; its consequence ACω also supplies compatible tubular normalization and relative isotopy extension. The mod-two homology character is choice-free.\""
        }
      ]
    },
    "digest_path": "/home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-batch-100-step5-context.json"
  },
  {
    "id": "lem-os-link-surgery-filtered-complex-and-triangle",
    "batch": "100",
    "source_kind": "concern",
    "reader_batch": "100",
    "concern_index": 1,
    "concern": {
      "id": "lem-os-link-surgery-filtered-complex-and-triangle",
      "concern": "Proof 4.1 refers to 'the extra hypothesis of step1.2', but there is no step 1.2. The conditional top-input-sum hypothesis is in step 2.1.",
      "severity": "presentation"
    },
    "before_guard_sha256": "4763c32f5ca8741a727691de30f18129b6934948d816ad70f9d1346f37e640b9",
    "owner_review": {
      "reviewed_by": "root",
      "confirmed_defect": true,
      "reviewed_at": "2026-10-21T18:23:19.345Z",
      "reason": "100:1: The complete proof has 1.1, 2.1, 3.1, 4.1 and later assembly. The vanishing top-input sum M_AB=0 is stated and used in 2.1, not in a nonexistent 1.2. Actual external supplier F4 remains unchanged; this only fixes its internal application locator.",
      "evidence_file": "research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/step5-supervision/root-reader-concern-admission/items/lem-os-link-surgery-filtered-complex-and-triangle-root-review.json",
      "candidate_patch_file": "research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/step5-supervision/root-reader-concern-admission/items/lem-os-link-surgery-filtered-complex-and-triangle-instructions.json",
      "proposed_edits": [
        {
          "source_excerpt": "the extra hypothesis of step1.2",
          "proposed_replacement": "the extra hypothesis of step 2.1"
        }
      ]
    },
    "digest_path": "/home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-batch-100-step5-context.json"
  },
  {
    "id": "lem-ip-boundary-chart-lifting-and-fourier-projection",
    "batch": "47",
    "source_kind": "concern",
    "reader_batch": "47",
    "concern_index": 0,
    "concern": {
      "id": "lem-ip-boundary-chart-lifting-and-fourier-projection",
      "concern": "The EIT source locator gives §4.3, equations (4.6)–(4.14), Lemma 4.7, 'printed pp. 19–22'. In the linked 80-page PDF, §4.3 starts on printed p.27 and Lemma 4.7 and its proof occupy pp.29–30. The local argument and displayed LG=I diagram are consistent; the page locator is stale.",
      "severity": "presentation"
    },
    "before_guard_sha256": "20af59c7fb65df73f597c79ef4f64c7739ac66491cd7d22fe5cc35c6fdd03da6",
    "owner_review": {
      "reviewed_by": "root",
      "confirmed_defect": true,
      "reviewed_at": "2026-10-21T18:23:19.345Z",
      "reason": "47:0: The cached 80-page linked-source PDF has §4.3 starting on printed p.27, equations (4.6)–(4.10) on p.28 and (4.11)–(4.14) on p.29, with Lemma 4.7 and its proof on pp.29–30. The literal 19–22 locator is incorrect. The local square partition and Fourier estimates are unaffected.",
      "evidence_file": "research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/step5-supervision/root-reader-concern-admission/items/lem-ip-boundary-chart-lifting-and-fourier-projection-root-review.json",
      "candidate_patch_file": "research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/step5-supervision/root-reader-concern-admission/items/lem-ip-boundary-chart-lifting-and-fourier-projection-instructions.json",
      "proposed_edits": [
        {
          "source_excerpt": "§4.3, equations (4.6)–(4.14), Lemma 4.7 and its proof, printed pp. 19–22.",
          "proposed_replacement": "§4.3, equations (4.6)–(4.14), Lemma 4.7 and its proof, printed pp. 27–30."
        }
      ]
    },
    "digest_path": "/home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-batch-47-step5-context.json"
  },
  {
    "id": "ex-ip-analytic-minimax-rates",
    "batch": "9",
    "source_kind": "concern",
    "reader_batch": "9",
    "concern_index": 1,
    "concern": {
      "id": "ex-ip-analytic-minimax-rates",
      "concern": "Verification 1.1 and 1.2 refer to the 'third formula of [F1]' and 'fourth formula of [F1]', but this item's F1 contains only two formulas. Those ordinals identify the cases in the source corollary, rather than the locally stated fact.",
      "severity": "presentation"
    },
    "before_guard_sha256": "bbf39fb3563100e9c47b6ed6e324d4f3e3aa51f8d8cdd26d588e102bc2d34bf4",
    "owner_review": {
      "reviewed_by": "root",
      "confirmed_defect": true,
      "reviewed_at": "2026-10-21T18:23:19.345Z",
      "reason": "9:1: F1 locally has precisely two formulas; third and fourth have no local referent. Their values and the source corollary cases are correct. Repair the erroneous internal references, preserving both rates and hypotheses.",
      "evidence_file": "research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/step5-supervision/root-reader-concern-admission/items/ex-ip-analytic-minimax-rates-root-review.json",
      "candidate_patch_file": "research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/step5-supervision/root-reader-concern-admission/items/ex-ip-analytic-minimax-rates-instructions.json",
      "proposed_edits": [
        {
          "source_excerpt": "the third formula of [F1]",
          "proposed_replacement": "the first formula of [F1]"
        },
        {
          "source_excerpt": "the fourth formula of [F1]",
          "proposed_replacement": "the second formula of [F1]"
        }
      ]
    },
    "digest_path": "/home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-batch-9-step5-context.json"
  },
  {
    "id": "ex-ip-power-source-minimax-rates",
    "batch": "9",
    "source_kind": "concern",
    "reader_batch": "9",
    "concern_index": 2,
    "concern": {
      "id": "ex-ip-power-source-minimax-rates",
      "concern": "Verification 1.2 invokes the 'fourth formula of [F2]', but this item's F2 contains only two formulas. The intended exponential/exponential formula is correctly stated there and is the fourth case of the source corollary.",
      "severity": "presentation"
    },
    "before_guard_sha256": "e3d99cfa5eed44020c1c8b5c7c7aec57b6b85c460fa5b9780f86586a3d98b7ef",
    "owner_review": {
      "reviewed_by": "root",
      "confirmed_defect": true,
      "reviewed_at": "2026-10-21T18:23:19.345Z",
      "reason": "9:2: F2 locally has precisely two formulas. The fourth source-corollary case is the second local F2 formula. This is a required correction to the explicit internal reference; the calculation and rate are sound.",
      "evidence_file": "research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/step5-supervision/root-reader-concern-admission/items/ex-ip-power-source-minimax-rates-root-review.json",
      "candidate_patch_file": "research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/step5-supervision/root-reader-concern-admission/items/ex-ip-power-source-minimax-rates-instructions.json",
      "proposed_edits": [
        {
          "source_excerpt": "the fourth formula of [F2]",
          "proposed_replacement": "the second formula of [F2]"
        }
      ]
    },
    "digest_path": "/home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-batch-9-step5-context.json"
  },
  {
    "id": "ex-ip-solit-antiderivative",
    "batch": "11",
    "source_kind": "concern",
    "reader_batch": "11",
    "concern_index": 0,
    "concern": {
      "id": "ex-ip-solit-antiderivative",
      "concern": "Verification 3.1 says the variance summands are dominated by a summable sequence 'by step 1.3' and repeats that citation in its tags. Step 1.3 establishes filter inequalities; summability of the eigenvalues is established in step 2.1. The required argument is present, but the cited step is wrong.",
      "severity": "presentation"
    },
    "before_guard_sha256": "a8c4af06aea7b1d44ad8123607758473a6fc83bbb838b1100692142263924cf5",
    "owner_review": {
      "reviewed_by": "root",
      "confirmed_defect": true,
      "reviewed_at": "2026-10-21T18:23:19.345Z",
      "reason": "11:0: Verification 3.1 identifies step 1.3 as the source of summability, but that step only proves pointwise Tikhonov filter inequalities. Step 2.1 explicitly proves sum_j s_j^2=sum_j lambda_j<infinity. The continuity proof is mathematically present; this is an incorrect required proof cross-reference, not a new analytical gap.",
      "evidence_file": "research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/step5-supervision/root-reader-concern-admission/items/ex-ip-solit-antiderivative-root-review.json",
      "candidate_patch_file": "research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/step5-supervision/root-reader-concern-admission/items/ex-ip-solit-antiderivative-instructions.json",
      "proposed_edits": [
        {
          "source_excerpt": "a summable sequence by step 1.3",
          "proposed_replacement": "a summable sequence by step 2.1"
        },
        {
          "source_excerpt": "[F4, step 1.3, step 2.1, algebra]",
          "proposed_replacement": "[F4, step 2.1, algebra]"
        }
      ]
    },
    "digest_path": "/home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-batch-11-step5-context.json"
  },
  {
    "id": "ex-ip-visible-conormal-under-bolker",
    "batch": "39",
    "source_kind": "concern",
    "reader_batch": "39",
    "concern_index": 0,
    "concern": {
      "id": "ex-ip-visible-conormal-under-bolker",
      "concern": "The diagram draws θ upward and θ⊥ rightward. The cited and used convention is θ⊥=(−θ₂,θ₁), so for upward θ the perpendicular points left. The diagram reverses the oriented perpendicular convention used correctly in the algebraic proof.",
      "severity": "presentation"
    },
    "before_guard_sha256": "4029c7ca22cc1091b1397f6c3b37de8b5a2beaf525fbca5b39e47c05cf0f547b",
    "owner_review": {
      "reviewed_by": "root",
      "confirmed_defect": true,
      "reviewed_at": "2026-10-21T18:23:19.345Z",
      "reason": "39:0: Confirmed required presentation correction. F1 and the actual Radon Definition fix theta-perp=(-theta2,theta1). The upward drawn theta is (0,1) in the TikZ Euclidean chart, so theta-perp is (-1,0), whereas the current arrow points right. Proof1.2 and2.2 use the stated convention correctly; only the explicit convention-fixing drawing is wrong. Reverse the perpendicular arrow, not the canonical-relation signs or the richest visibility claim.",
      "evidence_file": "research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/step5-supervision/root-reader-concern-admission/items/ex-ip-visible-conormal-under-bolker-root-review.json",
      "candidate_patch_file": "research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/step5-supervision/root-reader-concern-admission/items/ex-ip-visible-conormal-under-bolker-instructions.json",
      "proposed_edits": [
        {
          "source_excerpt": "  \\draw[->] (-0.4,0) -- (4.0,0) node[right] {$\\theta^\\perp$};",
          "proposed_replacement": "  \\draw[->] (0.4,0) -- (-2.0,0) node[left] {$\\theta^\\perp$};"
        }
      ]
    },
    "digest_path": "/home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-batch-39-step5-context.json"
  },
  {
    "id": "lem-ip-local-bolker-positive-packet-estimate",
    "batch": "39",
    "source_kind": "concern",
    "reader_batch": "39",
    "concern_index": 1,
    "concern": {
      "id": "lem-ip-local-bolker-positive-packet-estimate",
      "concern": "The Statement calls Kλ the transpose localized data Gaussian but assigns ψ(X(v),v)=−q·p. For the Gaussian defined on this page, its transpose includes the factor exp(iλq·p), so the corresponding centered phase has value zero. Proof 2.2 explicitly strips this unit factor, and Proof 6.1 restores it; the Statement should identify Kλ as that phase-normalized transpose kernel.",
      "severity": "presentation"
    },
    "before_guard_sha256": "d74fc8455098d29a1f8d0c509e724b9be448c42dd5e348b02c2ec754a3ea5642",
    "owner_review": {
      "reviewed_by": "root",
      "confirmed_defect": true,
      "reviewed_at": "2026-10-21T18:23:19.345Z",
      "reason": "39:1: Confirmed kernel-identity/normalization defect in the precise Statement, not a failure of the qualitative Gaussian-regularity implication. The actual Gaussian Definition has exp(i lambda(q-z)·p), hence its transpose contains exp(i lambda q·p). Proof2.2 explicitly removes this scalar and defines Psi=-z·p+i|z-q|²/2, so the stationary value of that NORMALIZED kernel is -q·p. The unnormalized transpose has centered phase value0 instead. Proof6.1 restores exp(i lambda q·p). Explicitly define K as e^{-i lambda q·p} times the true transpose; this preserves every proved phase estimate and the full conclusion. The factor has modulus1 for real data parameters and cannot be absorbed into a classical analytic amplitude as a symbol with lambda-independent factorial coefficients.",
      "evidence_file": "research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/step5-supervision/root-reader-concern-admission/items/lem-ip-local-bolker-positive-packet-estimate-root-review.json",
      "candidate_patch_file": "research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/step5-supervision/root-reader-concern-admission/items/lem-ip-local-bolker-positive-packet-estimate-instructions.json",
      "proposed_edits": [
        {
          "source_excerpt": "The transpose localized data Gaussian has the form",
          "proposed_replacement": "Writing $T_\\lambda(x,v)$ for the transpose localized data Gaussian, define the phase-normalized kernel $K_\\lambda(x,v)=e^{-i\\lambda q\\cdot p}T_\\lambda(x,v)$. It has the form"
        }
      ]
    },
    "digest_path": "/home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-batch-39-step5-context.json"
  },
  {
    "id": "thm-ip-analytic-stationary-phase-with-exponential-remainder",
    "batch": "39",
    "source_kind": "concern",
    "reader_batch": "39",
    "concern_index": 2,
    "concern": {
      "id": "thm-ip-analytic-stationary-phase-with-exponential-remainder",
      "concern": "The Statement uses c₀ both for the strictly positive quadratic lower-bound constant in 'r,c₀,d₀>0' and for the leading expansion coefficient in 'c₀=a(0)'. The amplitude value need not be positive or real. These are distinct constants and need distinct notation.",
      "severity": "presentation"
    },
    "before_guard_sha256": "ba8b9ba13792f59738cbfafc8cfdfd79773942634687ec598b25cbedcafa2f6c",
    "owner_review": {
      "reviewed_by": "root",
      "confirmed_defect": true,
      "reviewed_at": "2026-10-21T18:23:19.345Z",
      "reason": "39:2: Confirmed notation collision that literally restricts the claimed amplitude incorrectly. The same c_0 is required positive as a quadratic phase lower bound and later equated to a(0). A real smooth cutoff amplitude equal to -1 near0, with Phi=i|x|²/2, meets the intended phase/amplitude hypotheses but has leading coefficient-1; zero or complex leading values are also allowed. Rename only the positive quadratic constant and the separate contour-margin constant, retaining c_0=a(0) for the expansion. No amplitude positivity hypothesis or truncation weakening is appropriate.",
      "evidence_file": "research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/step5-supervision/root-reader-concern-admission/items/thm-ip-analytic-stationary-phase-with-exponential-remainder-root-review.json",
      "candidate_patch_file": "research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/step5-supervision/root-reader-concern-admission/items/thm-ip-analytic-stationary-phase-with-exponential-remainder-instructions.json",
      "proposed_edits": [
        {
          "source_excerpt": "Assume there are $r,c_0,d_0>0$ such that",
          "proposed_replacement": "Assume there are $r,c_{\\rm quad},d_0>0$ such that"
        },
        {
          "source_excerpt": "\\operatorname{Im}(\\Phi(x)-\\Phi_0)\\ge c_0|x|^2",
          "proposed_replacement": "\\operatorname{Im}(\\Phi(x)-\\Phi_0)\\ge c_{\\rm quad}|x|^2"
        },
        {
          "source_excerpt": "\\operatorname{Re}(w\\cdot w)\\ge c_0|u|^2",
          "proposed_replacement": "\\operatorname{Re}(w\\cdot w)\\ge c_{\\rm contour}|u|^2"
        }
      ]
    },
    "digest_path": "/home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-batch-39-step5-context.json"
  },
  {
    "id": "prop-ip-bounded-posterior-functional-error",
    "batch": "23",
    "source_kind": "concern",
    "reader_batch": "23",
    "concern_index": 0,
    "concern": {
      "id": "prop-ip-bounded-posterior-functional-error",
      "concern": "Proof 1.2 says the successive references have 'signed adjacent differences whose sum is μ_star(f)−f̄_(b,N)'. The cited ledger defines each signed difference as the later reference minus the earlier reference, so their sum is f̄_(b,N)−μ_star(f). Taking absolute values gives the stated bound either way; the signed identity in this sentence has its orientation reversed. The definition's directed diagram correctly follows the earlier-to-later reference order.",
      "severity": "presentation"
    },
    "before_guard_sha256": "83352227314f5e967581a64ea327b3dd72f14dfc229665ddf0f3209ad5d63413",
    "owner_review": {
      "reviewed_by": "root",
      "confirmed_defect": true,
      "reviewed_at": "2026-10-21T18:23:19.345Z",
      "reason": "23:0: Confirmed false signed equality in Proof1.2. The actual ledger Definition fixes later-minus-earlier differences and the cited pathwise theorem telescopes to returned-minus-target. For the ordered references mu_star(f) through fbar, the signed sum is fbar-mu_star(f). Absolute value is unchanged, so the proposition’s full quantitative bounds and weak-choice distinctions need no change; reverse only the signed expression in this proof sentence.",
      "evidence_file": "research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/step5-supervision/root-reader-concern-admission/items/prop-ip-bounded-posterior-functional-error-root-review.json",
      "candidate_patch_file": "research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/step5-supervision/root-reader-concern-admission/items/prop-ip-bounded-posterior-functional-error-instructions.json",
      "proposed_edits": [
        {
          "source_excerpt": "signed adjacent differences whose sum is $\\mu_\\star(f)-\\bar f_{b,N}$",
          "proposed_replacement": "signed adjacent differences whose sum is $\\bar f_{b,N}-\\mu_\\star(f)$"
        }
      ]
    },
    "digest_path": "/home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-batch-23-step5-context.json"
  },
  {
    "id": "def-knot-relative-spinc-structure",
    "batch": "96",
    "source_kind": "concern",
    "reader_batch": "96",
    "concern_index": 0,
    "concern": {
      "id": "def-knot-relative-spinc-structure",
      "concern": "The Definition starts with an arbitrary balanced sutured manifold and says: 'Two such fields are homologous when, outside some open ball in int M, they are homotopic'. Balanced manifolds here may be disconnected. On two disjoint product balls, take fields v, w, z with the fixed boundary values: w differs from v by one local Hopf modification in the first component, and z differs from w by one in the second. Then v is related to w and w to z, but v is not related to z: a single ball lies in one component, leaving a nontrivial relative Hopf difference in the other. Thus the stated relation is not transitive and does not define homology classes at this scope. The empty balanced manifold also has no ball witnessing reflexivity. The original [Juhász 2006, §4](https://msp.org/agt/2006/6-3/agt-v6-n3-p16-s.pdf) explicitly assumes connectedness before this definition. The actual knot exteriors are connected, but the general definition needs adjudication.",
      "severity": "would-be-fatal"
    },
    "before_guard_sha256": "ec17056c93d926f33695e64e1e340f53f316b9c3bf9186d854f4fa5934d448d8",
    "owner_review": {
      "reviewed_by": "root",
      "confirmed_defect": true,
      "reviewed_at": "2026-10-21T18:23:19.345Z",
      "reason": "96:0: Confirmed genuine equivalence-relation defect at the full approved balanced-manifold scope. The balanced Definition explicitly permits compact disconnected and empty M. On two disjoint standard product balls, normalize a reference nonzero field and make an interior Hopf modification in the first, then another in the second. Consecutive fields are related by deleting the appropriate one ball, but the first and last are not: deleting a connected ball leaves the nonzero relative pi_3(S²) Hopf difference in the other component. For empty M, even reflexivity fails because there is no ball witnessing the existential condition. The cached Juhasz2006§4 explicitly assumes connectedness before Definition4.2. Preserve the broad manifold scope by using the existing connected relation COMPONENTWISE, with the empty condition vacuous; do not narrow M to connected. Compact manifolds have finitely many components, so this is a finite product of equivalence relations and adds no choice assumption.",
      "evidence_file": "research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/step5-supervision/root-reader-concern-admission/items/def-knot-relative-spinc-structure-root-review.json",
      "candidate_patch_file": "research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/step5-supervision/root-reader-concern-admission/items/def-knot-relative-spinc-structure-instructions.json",
      "proposed_edits": [
        {
          "source_excerpt": "Two such fields are homologous when, outside some open ball in $\\operatorname{int}M$, they are homotopic through nowhere-zero fields fixed on $\\partial M$.",
          "proposed_replacement": "Two such fields are homologous when, in every connected component $M_i$ of $M$, their restrictions outside some open ball in $\\operatorname{int}M_i$ are homotopic through nowhere-zero fields fixed on $\\partial M_i$; for $M=\\varnothing$ this condition is vacuous."
        }
      ]
    },
    "digest_path": "/home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-batch-96-step5-context.json"
  },
  {
    "id": "lem-ribbon-singularity-local-resolution",
    "batch": "81",
    "source_kind": "concern",
    "reader_batch": "81",
    "concern_index": 0,
    "concern": {
      "id": "lem-ribbon-singularity-local-resolution",
      "concern": "The Owens source locator and Statement reference specify “PDF p.2” for the interior-sheet push-in resolution. In the linked WB.pdf, that argument is on PDF page 3, printed page 3, beginning “Consider the top left diagram.” The cited argument supports the proof, but the page locator is incorrect.",
      "severity": "presentation"
    },
    "before_guard_sha256": "f4ce9859d6f9c66e614f40d55bdff9d6fa0e26f0da414419fbf3297e687716f9",
    "owner_review": {
      "reviewed_by": "root",
      "confirmed_defect": true,
      "reviewed_at": "2026-10-21T18:23:19.345Z",
      "reason": "81:0: Direct extraction of cached Owens PDF page 3, printed page 3, finds the paragraph beginning Consider the top left diagram and the explicit instruction to push the internal interval further than the proper interval. Page 2 introduces slice/ribbon surfaces but does not contain this resolution argument. Both local locators to page 2 are wrong; the cited source supports the existing statement and height-separation proof.",
      "evidence_file": "research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/step5-supervision/root-reader-concern-admission/items/lem-ribbon-singularity-local-resolution-root-review.json",
      "candidate_patch_file": "research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/step5-supervision/root-reader-concern-admission/items/lem-ribbon-singularity-local-resolution-instructions.json",
      "proposed_edits": [
        {
          "source_excerpt": "locator: \"Lecture 1, PDF p.2: the interior preimage interval is pushed deeper than the proper interval\"",
          "proposed_replacement": "locator: \"Lecture 1, PDF p.3: the interior preimage interval is pushed deeper than the proper interval\""
        },
        {
          "source_excerpt": "[Owens, *Knots and 4-Manifolds*, Lecture 1, PDF p.2]",
          "proposed_replacement": "[Owens, *Knots and 4-Manifolds*, Lecture 1, PDF p.3]"
        }
      ]
    },
    "digest_path": "/home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-batch-81-step5-context.json"
  },
  {
    "id": "def-skein-tqft-state-space-and-handlebody-pairing",
    "batch": "85",
    "source_kind": "concern",
    "reader_batch": "85",
    "concern_index": 0,
    "concern": {
      "id": "def-skein-tqft-state-space-and-handlebody-pairing",
      "concern": "The Definition instructs one to glue x and y from two ordinary complex skein modules, sets B_Σ(x,y)=Z_p(S³,Γ,w), and then declares this conjugate-linear in y. Ordinary gluing and evaluation are complex-linear in both skein inputs: for empty skeins in complementary balls, the displayed construction gives B(∅,i∅)=iη, whereas the declared sesquilinearity requires −iη, with η≠0. An explicit semilinear orientation-reversal/conjugation map on the second input is missing. BHMV Proposition 1.9, p.891, uses M glued to −M′ and reverses the second link; §5.8, pp.912–913, expressly distinguishes this sesquilinear pairing from the complementary bilinear pairing. Clarify the actual domains and reversal before using the coefficient-conjugate space and inverse tensor in the pairing lemma.",
      "severity": "would-be-fatal"
    },
    "before_guard_sha256": "e17dd0c9b072c56440d753bdf2002857b729f3bf26d5a620975fb5b1b825d809",
    "owner_review": {
      "reviewed_by": "root",
      "confirmed_defect": true,
      "reviewed_at": "2026-10-21T18:23:19.345Z",
      "reason": "85:0: Ordinary complex skein gluing is bilinear, so the current definition contradicts its conjugate-linearity assertion (B(empty,i empty)=iη rather than−iη). BHMV1.9 actually uses same-oriented-boundary fillings and reverses the second. The proposal explicitly makes that semilinear reversal part of the construction and aligns the directly affected pairing lemma.\n85:1: A connected standard-S3 complementary-handlebody model does not itself define the whole category on disconnected/empty objects. Explicit finite component tensor products and the complex unit are required, with actual BHMV(Q1),(M),Theorem1.4 inputs. Reference-cylinder transport retains arbitrary real Lagrangians, including nonsplit ones, rather than narrowing the object class.",
      "evidence_file": "research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/step5-supervision/root-reader-concern-admission/items/def-skein-tqft-state-space-and-handlebody-pairing-root-review.json",
      "candidate_patch_file": "research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/step5-supervision/root-reader-concern-admission/items/def-skein-tqft-state-space-and-handlebody-pairing-instructions.json",
      "proposed_edits": [
        {
          "source_excerpt": "Fix a marked handlebody $H$ with boundary $\\Sigma$ and a complementary marked handlebody $H'$ so that their oriented gluing is the standard $S^3$; the boundary bands on $H$ and $H'$ are identified by the marking, with labels dualized on the oppositely oriented side.",
          "proposed_replacement": "For connected $\\Sigma$, fix marked handlebodies $H,H'$ whose boundaries are both identified orientation-preservingly with $\\Sigma$, so that $H\\cup_\\Sigma(-H')$ is the standard oriented $S^3$. Both filling modules carry the specified boundary labels before reversal; orientation reversal of the second filling dualizes its boundary labels and reverses its ribbon-end arcs. Disconnected and empty surfaces are included by the tensor and unit convention below."
        },
        {
          "source_excerpt": "For $x\\in\\mathcal K_A(H;I_\\Sigma,\\mathbf a)$ and $y\\in\\mathcal K_A(H';I_\\Sigma,\\mathbf a^*)$, glue their matching boundary bands and idempotents. This gives a closed colored ribbon graph $\\Gamma$ in the standard $S^3$. Define the handlebody pairing by $B_\\Sigma(x,y)=Z_p(S^3,\\Gamma,w)$, using the normalized root surgery evaluation and the weight $w$ prescribed by the fixed Lagrangian data. This is the BHMV sesquilinear pairing: it is linear in $x$ and conjugate-linear in $y$ for the coefficient involution $A\\mapsto A^{-1}$, $\\kappa\\mapsto\\kappa^{-1}$.",
          "proposed_replacement": "Let $\\mathfrak r:\\mathcal K_A(H';I_\\Sigma,\\mathbf a)\\to\\mathcal K_A(-H';-I_\\Sigma,\\mathbf a^*)$ be the semilinear orientation-reversal map: for a finite skein sum, $\\mathfrak r(\\sum_L c_L[L])=\\sum_L\\overline{c_L}[-L]$, with the second filling, its ribbon data and anomaly data reversed. The bar is complex conjugation, so $\\overline A=A^{-1}$ and $\\overline\\kappa=\\kappa^{-1}$. Reversal exchanges the two bracket smoothings, and conjugation exchanges their coefficients, so $\\mathfrak r$ respects the skein relations and the boundary projectors. For $x\\in\\mathcal K_A(H;I_\\Sigma,\\mathbf a)$ and $y\\in\\mathcal K_A(H';I_\\Sigma,\\mathbf a)$, glue $x$ to $\\mathfrak r(y)$ along the matching boundary bands and idempotents. Denote the resulting graph by $\\Gamma(x,\\mathfrak r(y))$. Define $B_\\Sigma(x,y)=Z_p(S^3,\\Gamma(x,\\mathfrak r(y)),w)$ with the prescribed gluing weight. This is linear in $x$ and conjugate-linear in $y$, as in BHMV Proposition 1.9, p.891. Ordinary gluing of two already oppositely oriented skein inputs is instead bilinear; the reversal here is part of the Definition."
        },
        {
          "source_excerpt": "B_\\Sigma(x,y)=0\\text{ for every }y\\in\\mathcal K_A(H';I_\\Sigma,\\mathbf a^*)",
          "proposed_replacement": "B_\\Sigma(x,y)=0\\text{ for every }y\\in\\mathcal K_A(H';I_\\Sigma,\\mathbf a)"
        },
        {
          "source_excerpt": "Section 2 pp.897–898; Proposition 1.9 p.891; Theorem 1.4 p.887; Corollary 4.10 and Theorem 4.11 p.909",
          "proposed_replacement": "(Q1) and (Q2) p.885, universal construction and (M) p.886, Theorem 1.4 p.887, Proposition 1.9 p.891; Section 2 pp.897–898; Corollary 4.10 and Theorem 4.11 p.909; Section 5.8 pp.912–913 distinguishes conjugate/sesquilinear and bilinear forms"
        },
        {
          "source_excerpt": "This is the radical-quotient handlebody state-space construction for the specified marking and anomaly data. Independence of the marking, finite generation, nondegeneracy, and the gluing maps are separate mathematical obligations.",
          "proposed_replacement": "This is the radical-quotient handlebody state-space construction for a connected marked surface. For a finite disjoint union $\\Sigma=\\bigsqcup_{a=1}^k\\Sigma_a$ with the direct-sum component reference Lagrangian, define $V_p(\\Sigma)=\\bigotimes_{a=1}^kV_p(\\Sigma_a)$, and define its pairing as the product of the component sesquilinear pairings on pure tensors. Set $V_p(\\varnothing)=\\mathbb C$ and $B_\\varnothing(z,w)=z\\overline w$. Permuting components uses the ordinary tensor symmetry; the empty tensor is the unit. These are the external BHMV conventions (Q1) p.885 and (M) p.886, whose validity for even $p\\ge4$ is part of Theorem 1.4 p.887; Gilmer–Masbaum §11 p.24 also states the empty-surface unit. For an arbitrary specified real Lagrangian, including one that does not split over components, use the weight-zero identity cylinder from the componentwise handlebody-kernel reference to that Lagrangian in the registered weighted theory. The reverse cylinder is its inverse since $\\mu(L,L',L)=0$, exactly as in the existing real-reference transport for weighted gluing; this does not assume every real Lagrangian splits or is rational. The tensor conventions are taken at the reference objects and then transported by these inverse cylinders. Independence of the marking, finite generation, nondegeneracy and the gluing maps remain separate mathematical obligations supplied below by the stated external BHMV/weighted theory inputs."
        }
      ]
    },
    "digest_path": "/home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-batch-85-step5-context.json"
  },
  {
    "id": "lem-arf-quadratic-enhancement-from-seifert-form",
    "batch": "67",
    "source_kind": "concern",
    "reader_batch": "67",
    "concern_index": 1,
    "concern": {
      "id": "lem-arf-quadratic-enhancement-from-seifert-form",
      "concern": "Proof 2.1 writes 'x=∑_i(a_i a_i+b_i b_i) with a_i,b_i ∈ F₂', reusing the symplectic basis-vector names as scalar coordinates. The subsequent Gauss-sum calculation is sound, but this coordinate expansion needs distinct scalar names to be well-typed.",
      "severity": "presentation"
    },
    "before_guard_sha256": "a59016ecf998ad25fca4cc666f835fe110601cb2c46e56a9e1f8daa890dd1834",
    "owner_review": {
      "reviewed_by": "root",
      "confirmed_defect": true,
      "reviewed_at": "2026-10-21T18:23:19.345Z",
      "reason": "67:1: The symplectic basis a_i,b_i is already a family of vectors, while the same symbols are then rebound as F2 coordinates; q_F(a_i) would consequently be ill-typed under that binding. Use alpha_i,beta_i for scalar coordinates throughout the expansion and quadratic expression. The subsequent four-term factor is 2(-1)^(q(a_i)q(b_i)), so the Gauss-sum proof and full invariant claim are unchanged.",
      "evidence_file": "research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/step5-supervision/root-reader-concern-admission/items/lem-arf-quadratic-enhancement-from-seifert-form-root-review.json",
      "candidate_patch_file": "research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/step5-supervision/root-reader-concern-admission/items/lem-arf-quadratic-enhancement-from-seifert-form-instructions.json",
      "proposed_edits": [
        {
          "source_excerpt": "2.1 In a symplectic basis, every vector is uniquely $x=\\sum_i(a_i a_i+b_i b_i)$ with $a_i,b_i\\in\\mathbb F_2$. The refinement identity gives $$q_F(x)=\\sum_i\\bigl(a_iq_F(a_i)+b_iq_F(b_i)+a_ib_i\\bigr).$$ Therefore the finite Gauss sum factors as $$\\sum_{x\\in H_1(F;\\mathbb F_2)}(-1)^{q_F(x)}=\\prod_i\\sum_{a,b\\in\\mathbb F_2}(-1)^{a q_F(a_i)+b q_F(b_i)+ab}=2^g(-1)^{\\sum_iq_F(a_i)q_F(b_i)}.$$ The left side depends only on $q_F$, not on a basis, so the exponent defining the Arf value is basis-independent. [step 1.1, given, algebra]",
          "proposed_replacement": "2.1 In a symplectic basis, every vector is uniquely $x=\\sum_i(\\alpha_i a_i+\\beta_i b_i)$ with $\\alpha_i,\\beta_i\\in\\mathbb F_2$. The refinement identity gives $$q_F(x)=\\sum_i\\bigl(\\alpha_iq_F(a_i)+\\beta_iq_F(b_i)+\\alpha_i\\beta_i\\bigr).$$ Therefore the finite Gauss sum factors as $$\\sum_{x\\in H_1(F;\\mathbb F_2)}(-1)^{q_F(x)}=\\prod_i\\sum_{a,b\\in\\mathbb F_2}(-1)^{a q_F(a_i)+b q_F(b_i)+ab}=2^g(-1)^{\\sum_iq_F(a_i)q_F(b_i)}.$$ The left side depends only on $q_F$, not on a basis, so the exponent defining the Arf value is basis-independent. [step 1.1, given, algebra]"
        }
      ]
    },
    "digest_path": "/home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-batch-67-step5-context.json"
  }
]. Review the bound original digest and individual owner evidence; repair confirmed presentation defects as well as mathematical defects. Return ordinary reviews, with no adjudication decision for these concerns. Only actual Statement/Definition changes propagate consumer examinations.



Bound owner instruction context for items ALREADY assigned in this lane:
[
  {
    "id": "ex-ip-coordinate-free-fno-inverse-risk-obstruction",
    "proposal_source_guard_sha256": "d6804c2ccae8b6eac3bf7006f2d727ab0f19537100d4ca02f1ca8ed4c5bf851b",
    "review_files": [
      "research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/step5-supervision/native-fno-scope-review.json"
    ],
    "reason": "Focused delegated mathematical repair proposal for an existing native finding or necessary actual consumer use. Root supplies instruction context only; the genuine assigned owner must independently read current source and actual suppliers, confirm the defect, earn a current native review, and perform smallest necessary repairs. This guidance adds no target, verdict, acceptance, or native reading credit.",
    "proposed_edits": [
      {
        "source_excerpt": "For each $N,m,S,B$, assume there is at least one such selector",
        "proposed_replacement": "For each $N,m,S,B$ with $\\mathcal F_{S,B}^{(m)}\\ne\\varnothing$, assume there is at least one such selector"
      },
      {
        "source_excerpt": "over $\\Psi\\in\\mathcal F_{S,B}^{(m)}$; let $\\mathcal T_{N,m}(S,B)$ be the set of all such selectors.",
        "proposed_replacement": "over $\\Psi\\in\\mathcal F_{S,B}^{(m)}$; let $\\mathcal T_{N,m}(S,B)$ be the set of all such selectors, and set it to $\\varnothing$ when $\\mathcal F_{S,B}^{(m)}=\\varnothing$."
      },
      {
        "source_excerpt": "Also define $\\mathfrak R^{\\mathrm{all}}_{N,m}$",
        "proposed_replacement": "Use the convention $\\inf\\varnothing=+\\infty$, so an empty architecture class has infinite ERM risk. Also define $\\mathfrak R^{\\mathrm{all}}_{N,m}$"
      }
    ]
  },
  {
    "id": "def-torsion-linking-form-and-casson-gordon-bordism",
    "proposal_source_guard_sha256": "71a08a6abbc50c5bc6dd96029a103a7fb58dbac1d3349910826f7015915de433",
    "review_files": [
      "research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/step5-supervision/native-knot-scope-review.json"
    ],
    "reason": "Focused delegated mathematical repair proposal for an existing native finding or necessary actual consumer use. Root supplies instruction context only; the genuine assigned owner must independently read current source and actual suppliers, confirm the defect, earn a current native review, and perform smallest necessary repairs. This guidance adds no target, verdict, acceptance, or native reading credit.",
    "proposed_edits": [
      {
        "source_excerpt": "given by $\\lambda_M(x,y)=(C\\cdot y)/n\\bmod\\mathbb Z$ for any integer $n>0$ and integral $2$-chain $C$ in $M$ with $\\partial C=nx$;",
        "proposed_replacement": "given by $\\lambda_M(x,y)=(C\\cdot b)/n\\bmod\\mathbb Z$, where integral $1$-cycles $a,b$ represent $x,y$, respectively, $n>0$ is an integer, and $C$ is an integral $2$-chain in $M$ with $\\partial C=na$, placed transversely to $b$;"
      }
    ]
  },
  {
    "id": "ex-knot-kt-42-worked-cases",
    "proposal_source_guard_sha256": "a439c68f0d26fa7de8e9f2a899718020b4aedc41c49c77530039b0abe1383f99",
    "review_files": [
      "research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/step5-supervision/native-floer-scope-review.json"
    ],
    "reason": "Focused delegated mathematical repair proposal for an existing native finding or necessary actual consumer use. Root supplies instruction context only; the genuine assigned owner must independently read current source and actual suppliers, confirm the defect, earn a current native review, and perform smallest necessary repairs. This guidance adds no target, verdict, acceptance, or native reading credit.",
    "proposed_edits": [
      {
        "source_excerpt": "## Example\n\n",
        "proposed_replacement": "## Example\n\nFor the knot-level assertions, assume the Axiom of Countable Choice. "
      },
      {
        "source_excerpt": "**Given:** The displayed staircase complex, the epsilon map convention, and the Upsilon cycle-minimax definition.",
        "proposed_replacement": "**Given:** The displayed staircase complex, the epsilon map convention, and the Upsilon cycle-minimax definition. Countable Choice is assumed for the knot-level constructions and geometric comparisons; finite algebra on the stated supplied complexes and maps requires no further choice."
      }
    ]
  },
  {
    "id": "lem-epsilon-stable-equivalence-and-not-a-homomorphism",
    "proposal_source_guard_sha256": "4d408d68319fccd6c697652ad0f9e4b6b1e447c774762d9d5ef90ff21f12e081",
    "review_files": [
      "research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/step5-supervision/native-floer-scope-review.json"
    ],
    "reason": "Focused delegated mathematical repair proposal for an existing native finding or necessary actual consumer use. Root supplies instruction context only; the genuine assigned owner must independently read current source and actual suppliers, confirm the defect, earn a current native review, and perform smallest necessary repairs. This guidance adds no target, verdict, acceptance, or native reading credit.",
    "proposed_edits": [
      {
        "source_excerpt": "## Statement\n\n",
        "proposed_replacement": "## Statement\n\nFor the knot-level assertions, assume the Axiom of Countable Choice. "
      },
      {
        "source_excerpt": "**Given:** The actual normalized finite free Maslov-graded bifiltered complexes of the knots, with the supplied geometric tensor and duality identifications. Every newly used finite operation below is over $\\mathbb F_2$.",
        "proposed_replacement": "**Given:** The actual normalized finite free Maslov-graded bifiltered complexes of the knots, with the supplied geometric tensor and duality identifications. Every newly used finite operation below is over $\\mathbb F_2$. Countable Choice is assumed for the knot-level constructions and geometric comparisons; finite algebra on the stated supplied complexes and maps requires no further choice."
      }
    ]
  },
  {
    "id": "lem-upsilon-nu-minus-four-ball-bound",
    "proposal_source_guard_sha256": "6e45728771b64c01860e0c4107e041a9477357379e7afdf3eb57df7c11c69203",
    "review_files": [
      "research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/step5-supervision/native-floer-scope-review.json"
    ],
    "reason": "Focused delegated mathematical repair proposal for an existing native finding or necessary actual consumer use. Root supplies instruction context only; the genuine assigned owner must independently read current source and actual suppliers, confirm the defect, earn a current native review, and perform smallest necessary repairs. This guidance adds no target, verdict, acceptance, or native reading credit.",
    "proposed_edits": [
      {
        "source_excerpt": "## Statement\n\n",
        "proposed_replacement": "## Statement\n\nFor the knot-level assertions, assume the Axiom of Countable Choice. "
      },
      {
        "source_excerpt": "**Given:** A smooth oriented knot, its normalized minus complex, and the smooth four-ball genus.",
        "proposed_replacement": "**Given:** A smooth oriented knot, its normalized minus complex, and the smooth four-ball genus. Countable Choice is assumed for the knot-level constructions and geometric comparisons; finite algebra on the stated supplied complexes and maps requires no further choice."
      }
    ]
  },
  {
    "id": "thm-grid-upsilon-equals-oss-upsilon",
    "proposal_source_guard_sha256": "3c39cebcf319c563a790a69c5c1dcf647bde485447ac6fc1f9e80a990c8e2594",
    "review_files": [
      "research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/step5-supervision/native-floer-scope-review.json"
    ],
    "reason": "Focused delegated mathematical repair proposal for an existing native finding or necessary actual consumer use. Root supplies instruction context only; the genuine assigned owner must independently read current source and actual suppliers, confirm the defect, earn a current native review, and perform smallest necessary repairs. This guidance adds no target, verdict, acceptance, or native reading credit.",
    "proposed_edits": [
      {
        "source_excerpt": "## Statement\n\n",
        "proposed_replacement": "## Statement\n\nFor the knot-level assertions, assume the Axiom of Countable Choice. "
      },
      {
        "source_excerpt": "**Given:** A knot grid $G$ with grid number $n$, its full filtered grid complex, the diagonal quotient, and the two Upsilon conventions just defined.",
        "proposed_replacement": "**Given:** A knot grid $G$ with grid number $n$, its full filtered grid complex, the diagonal quotient, and the two Upsilon conventions just defined. Countable Choice is assumed for the knot-level constructions and geometric comparisons; finite algebra on the stated supplied complexes and maps requires no further choice."
      }
    ]
  },
  {
    "id": "thm-smooth-concordance-implies-stable-filtered-knot-floer-equivalence",
    "proposal_source_guard_sha256": "28dcfc555aec1e6499763bd94e5d22c29559d631c8476a1c92e0675ac5c409ae",
    "review_files": [
      "research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/step5-supervision/native-floer-scope-review.json"
    ],
    "reason": "Focused delegated mathematical repair proposal for an existing native finding or necessary actual consumer use. Root supplies instruction context only; the genuine assigned owner must independently read current source and actual suppliers, confirm the defect, earn a current native review, and perform smallest necessary repairs. This guidance adds no target, verdict, acceptance, or native reading credit.",
    "proposed_edits": [
      {
        "source_excerpt": "## Statement\n\n",
        "proposed_replacement": "## Statement\n\nFor the knot-level assertions, assume the Axiom of Countable Choice. "
      },
      {
        "source_excerpt": "**Given:** A smooth annulus concordance from $K$ to $J$, the filtered connected-sum tensor convention, and the normalized knot Floer complex of each boundary knot.",
        "proposed_replacement": "**Given:** A smooth annulus concordance from $K$ to $J$, the filtered connected-sum tensor convention, and the normalized knot Floer complex of each boundary knot. Countable Choice is assumed for the knot-level constructions and geometric comparisons; finite algebra on the stated supplied complexes and maps requires no further choice."
      }
    ]
  },
  {
    "id": "thm-upsilon-additivity-mirror-and-genus-bound",
    "proposal_source_guard_sha256": "58e35f401a46b0821eef6332653f4c314fcc517e3111800bfe5576918b2bf25b",
    "review_files": [
      "research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/step5-supervision/native-floer-scope-review.json"
    ],
    "reason": "Focused delegated mathematical repair proposal for an existing native finding or necessary actual consumer use. Root supplies instruction context only; the genuine assigned owner must independently read current source and actual suppliers, confirm the defect, earn a current native review, and perform smallest necessary repairs. This guidance adds no target, verdict, acceptance, or native reading credit.",
    "proposed_edits": [
      {
        "source_excerpt": "## Statement\n\n",
        "proposed_replacement": "## Statement\n\nFor the knot-level assertions, assume the Axiom of Countable Choice. "
      },
      {
        "source_excerpt": "**Given:** A smooth oriented knot Floer complex with its finite bifiltered basis, normalized Maslov-zero total-homology generator, and the $F_t$ cycle-minimax convention.",
        "proposed_replacement": "**Given:** A smooth oriented knot Floer complex with its finite bifiltered basis, normalized Maslov-zero total-homology generator, and the $F_t$ cycle-minimax convention. Countable Choice is assumed for the knot-level constructions and geometric comparisons; finite algebra on the stated supplied complexes and maps requires no further choice."
      }
    ]
  },
  {
    "id": "thm-epsilon-upsilon-are-concordance-homomorphism-data",
    "proposal_source_guard_sha256": "32faea688dccda7a4f84fd573e841ddb253ed560744467034726f1b2c4566a4a",
    "review_files": [
      "research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/step5-supervision/native-floer-scope-review.json"
    ],
    "reason": "Focused delegated mathematical repair proposal for an existing native finding or necessary actual consumer use. Root supplies instruction context only; the genuine assigned owner must independently read current source and actual suppliers, confirm the defect, earn a current native review, and perform smallest necessary repairs. This guidance adds no target, verdict, acceptance, or native reading credit.",
    "proposed_edits": [
      {
        "source_excerpt": "## Statement\n\n",
        "proposed_replacement": "## Statement\n\nFor the knot-level assertions, assume the Axiom of Countable Choice. "
      },
      {
        "source_excerpt": "**Given:** The smooth concordance group, the epsilon invariant, the Upsilon function, and the smooth four-ball genus with the conventions stated above.",
        "proposed_replacement": "**Given:** The smooth concordance group, the epsilon invariant, the Upsilon function, and the smooth four-ball genus with the conventions stated above. Assume the Axiom of Countable Choice for the supplied geometric knot Floer and concordance/genus interfaces; the ensuing finite deductions require no further choice."
      }
    ]
  }
]. Read the actual bound review files and literal proposals; compare their source guards/excerpts with current sources before choosing the smallest sound repair. This context adds no assignments, findings, adjudication authority, acceptance, or review credit. Return genuine ordinary current reviews; preserve actual reading limits and check affected consumers only after an actual interface change.



Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-impact-initial-r1-u2.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair all assigned frontier items, including published items. Publication status never exempts an assigned item from adjudication, repair certification or required rejudgment. Keep originally published items published. Outside consumers are handled by consumer maintenance; report their affected uses and escalate necessary repairs.

You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Examine assigned frontier consumers, not the whole library. Assignment requires examination, not an edit. Leave a sound consumer byte-for-byte unchanged with an item-specific explanation. Repair only an actual logical defect using the smallest sufficient edit; no stylistic or unrelated rewriting. Work supplier-before-consumer and reconcile only metadata actually invalidated. A reference is not automatic repair authority. Report direct downstream effects of statement changes, including outside consumers for separate maintenance.

Return JSON {run:"inverse-problems-knot-theory-all-109-2026-10-19",phase:"impact-initial",round:1,unit:"2",input_sha256:"0ccda1e8c2b3759bfe79ca006951ed34d0d66dbdf74d3aa1d33c075b4bfc8770",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.





Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run inverse-problems-knot-theory-all-109-2026-10-19 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.







All three owner lanes run in parallel with disjoint item ownership. Follow the shared metadata lock protocol before necessary shared edits; reread under lock and release promptly. Reconcile assigned frontier ledger evidence, preserve outside findings as separate maintenance proposals, and never turn them into frontier repair or gate obligations. Do not write judge verdicts or shared adjudication JSONL. Record unresolved in-scope obligations honestly.

Adjudicator ledger proposals requiring reconciliation:
[
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-ip-sparse-gaussian-extremal-profile",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "location": "statement",
    "reason": "The deterministic lemma did not bind the coordinate index set before writing z(i/n), d(i/n), or the vector i<=m; its later extremal problem and proof use i>=1. This is a nonfatal notation defect, not a failed extremal argument. Made all coordinate indices explicitly positive and distinguished the scale h_0 from a coordinate.",
    "evidence": "research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u10.json",
    "uncertain": false,
    "source_urls": [
      "https://www.numdam.org/article/PS_2000__4__53_0.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-ip-q2-ellipsoid-extremal-profile-is-minimizer",
    "outcome": "false_positive",
    "disposition": "false-positive",
    "location": "facts-block",
    "reason": "False positive: the Statement begins \"Assume the minimax detection-risk definition\", whose complete Definition explicitly assumes Countable Choice and positive nondecreasing sigma_j tending to infinity. The subsequent partial restatement does not authorize bounded sigma_j.",
    "evidence": "research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u10.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "cor-ip-ellipsoid-sharp-gaussian-testing-asymptotics",
    "outcome": "false_positive",
    "disposition": "false-positive",
    "location": "facts-block",
    "reason": "False positive: the actual cited theorem explicitly derives the uniform mean bound in Proof 2.1, including the variational calculation sum(tilde x_j x_j)>=sum(tilde x_j^2), and derives normalization and the variance bound in Proof 1.1. Thus F1 has a supplied proof, even though the theorem Statement does not repeat this intermediate inequality.",
    "evidence": "research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u10.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "ex-ip-mildly-illposed-analytic-detection-rate",
    "outcome": "false_positive",
    "disposition": "false-positive",
    "location": "facts-block",
    "reason": "False positive: the Example places a_j=exp(alpha j) and sigma_j=j^beta in the Gaussian sequence detection experiment. The actual upstream sequence-model Definition explicitly uses j=1,2,...; the detection Definition writes every class constraint from j=1. Thus sigma_0 is not a coordinate, sigma_j>0, and both extremal suppliers apply.",
    "evidence": "research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u10.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "ex-ip-severely-illposed-analytic-detection-rate",
    "outcome": "false_positive",
    "disposition": "false-positive",
    "location": "facts-block",
    "reason": "False positive: \"in the Gaussian sequence detection experiment\" retains its defining setup, including Countable Choice, which is explicit in both def-ip-minimax-detection-risk-and-separation and def-ip-gaussian-sequence-inverse-model. The example does not assert a theorem for an experiment constructed without that assumption.",
    "evidence": "research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u10.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "ex-ip-severely-illposed-sobolev-detection-rate",
    "outcome": "false_positive",
    "disposition": "false-positive",
    "location": "facts-block",
    "reason": "False positive: the Example explicitly works \"in the Gaussian sequence detection experiment\", whose defining interfaces assume Countable Choice; the later substitution of a_j=j^alpha and sigma_j=exp(beta j) does not remove that assumption.",
    "evidence": "research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u10.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "route-existing-reader-concern",
    "id": "lem-ip-gaussian-product-mixture-testing-bound",
    "disposition": "owner-repair-required",
    "severity": "nonfatal",
    "reason": "The mixture lemma Statement assumes Countable Choice; the cited normalization lemma Statement begins \"Assume AC\". However F1 supplies actual independent normalized Gaussian coordinates through the sequence/white-noise experiment. Clarify F3 as normalization supplied by the given process, with its actual sequence/white-noise dependency. Preserve the Statement, finite likelihood proof and Countable Choice boundary. No assigned file depends on a choice-free construction of the scalar density.",
    "affected_use": "F3 invokes lem-normal-density-has-total-mass-one for Gaussian normalization in Proof 1.2 and hence the finite-product unit expectation in 2.1.",
    "invalidated_claim": "The unqualified stronger-hypothesis F3 citation is not licensed under the stated Countable Choice setup; the normalized-law calculation itself remains valid from the supplied experiment.",
    "minimality": "Clarify F3 as normalization supplied by the given process, with its actual sequence/white-noise dependency. Preserve the Statement, finite likelihood proof and Countable Choice boundary. No assigned file depends on a choice-free construction of the scalar density.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "route-existing-reader-concern",
    "id": "thm-ip-ellipsoid-detection-boundary",
    "disposition": "owner-repair-required",
    "severity": "nonfatal",
    "reason": "The detection theorem assumes Countable Choice, while the cited moment lemma Statement assumes AC. Its integration-by-parts argument is choice-free once the normalized law is supplied, and the present experiment supplies that law. Make the supplied-law adaptation explicit or cite the available weaker finite-array moment derivation. Retain Countable Choice, the theorem Statement, and Proof 2.1’s valid alternative-mean bound. The assigned sharp corollary already assumes full AC.",
    "affected_use": "F4 cites lem-standard-normal-fourth-moment to compute the second and fourth moments in the statistic variance calculation of Proof 1.1.",
    "invalidated_claim": "Only the literal unqualified use of the stronger-hypothesis moment supplier is unsupported; the displayed moment identities and variance calculation are valid from the supplied density.",
    "minimality": "Make the supplied-law adaptation explicit or cite the available weaker finite-array moment derivation. Retain Countable Choice, the theorem Statement, and Proof 2.1’s valid alternative-mean bound. The assigned sharp corollary already assumes full AC.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-double-cover-of-two-arc-rational-tangle-is-solid-torus",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "reason": "Disk and tangle extension were incorrectly attributed to a link-only Definition; explicit rational square-chart construction now supplies them, with AC stated for classification/annulus inputs.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/math/0309170v1"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-link-surgery-e-one-differential-is-reduced-khovanov",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "reason": "Restored AC and the ACω analytic package required by actual branched-cover and Floer map inputs; corrected F2 attribution and explicitly derived the mirror normalization. The finite cochain identification is unchanged.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/math/0309170v1"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-knot-kt-45-worked-cases",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "reason": "Explicit AC and ACω analytic premises now license spectral-sequence existence and the Floer rank supplier. The endpoint ranks and finite rank-nullity proof remain intact.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/math/0309170v1"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "lem-os-first-differential-is-reduced-khovanov",
    "route": "frontier-owner",
    "reason": "The quoted clause is the Statement premise of its F1 supplier lem-os-link-surgery-filtered-complex-and-triangle. The first-differential item Statement begins Fix a finite regular diagram and its Given states neither this package nor inherited AC. Proof 4.1 additionally cites nonexistent step1.3; the actual grading computation is 3.1. State the existing AC/ACω package premises and correct the proof-internal locator; keep all saddle maps and mirror normalization unchanged.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/math/0309170v1"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "lem-os-unlink-resolution-covers-and-floer-tqft",
    "route": "frontier-owner",
    "reason": "This is Proof 5.1; the Statement and Given omit that analytic premise, while F1 uses the AC-qualified double-cover existence supplier. Proof 1.2 also calls the Floer input step2.1, whereas actual external Floer application is 4.1. Retain AC and the ACω analytic package publicly and correct that internal reference; no unlink rank or saddle table change is needed.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/math/0309170v1"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "lem-trefoil-double-branched-cover-is-lens-space-order-three",
    "route": "frontier-owner",
    "reason": "F2 and Proof 1.1 require the AC-qualified two-arc disk/product cover, and F1 already invokes the AC-qualified global cover. Its axiom_use and Proof 5.1 retain AC, but Statement/Given omit it. Add the inherited premise without altering the meridian-slope calculation. The consumer is outside this unit and remains unedited.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/math/0309170v1"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "def-heegaard-floer-plus-infinity-absolute-grading",
    "outcome": "false_positive",
    "reason": "The complete Definition deliberately specifies a Floer package conditional on valid regular data, and fixes the standard absolute-grading normalization and cobordism degree convention; it does not claim to prove existence. This is mathematically consistent. Ozsvath–Szabo math/0110170v1, Section 2, printed pp.7–8, separates relative theory from the absolute-grading existence theorem and gives the same normalization and degree formula. The local lem-rational-heegaard-floer-absolute-grading-and-cobordism-maps supplies that existence separately, and lem-heegaard-floer-correction-term-heegaard-invariance explicitly invokes it. The title does not turn a definition into an existence theorem.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/math/0110170v1"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-slice-disk-double-cover-is-rational-homology-ball",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "location": "facts-block",
    "affected_use": "F1 incorrectly supplies the boundary assertion used by proof 2.1; F2 already contains that assertion.",
    "reason": "F1 incorrectly attributes a four-dimensional boundary assertion to def-cyclic-branched-cover-of-a-knot, whose Definition only constructs the three-dimensional exterior cover and filling. The assertion itself is true and is already supplied by the declared F2 dependency: its Statement and proof 4.1 identify the boundary using the collared normal square map. This is a redundant misattribution, not a missing mathematical premise. Repaired F1 to state only the exterior/filling convention, expanded F2 accurately, and cited F2 in step 2.1, including the boundary-orientation check.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-encoded-diagram-size-and-exact-output",
    "severity": "nonfatal",
    "location": "Definition, opening sentence",
    "reason": "The colon gloss omits immersion: the smooth embedded circle L(t)=(1-cos(t),(1-cos(t))*sin(t),sin(t)) projects injectively to a curve with zero derivative and a cusp at t=0, so the listed multiple-point conditions alone do not imply regularity. This is nonfatal because D is already explicitly assumed regular through the cited supplier; the size and output conventions remain valid. Replaced the incomplete projection gloss by an explicit smooth immersion into the plane.",
    "status": "fixed",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/html/2406.18203v1#S3.SS1"
    ],
    "familiar": true
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "action": "retain-existing-presentation-alert",
    "id": "def-regular-oriented-link-diagram",
    "path": "items/def-regular-oriented-link-diagram.md",
    "origin": "research/inverse-problems-knot-theory-all-109-2026-10-19-batch-103-step5-context.json#/alerts/0",
    "affected_use": "The complete published Definition still contains inline wikilinks in the opening link hypothesis and regularity conditions, rather than an immediately following Definition references section.",
    "reason": "Confirmed the existing Step-4 presentation alert against the actual published supplier. Its immersion condition is correct and supports this repair; no mathematical change or published consumer repair is needed from this supplier interface event. Retain the presentation issue for separate maintenance without duplicating its original alert or editing the published item.",
    "disposition": "separate-maintenance",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-connected-normal-surface-chi-one-is-disk",
    "severity": "nonfatal",
    "reason": "Corrected step 4.1: retained complex edges need not be exposed. The facing boundary arc of a small polygonal neighborhood expands across the empty triangle sector; opposite child triangles do not obstruct that expansion. Statement unchanged."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-smooth-to-pl-knot-exterior-ambient-isotopy",
    "severity": "nonfatal",
    "reason": "Repaired step 1.1 to use the supplied diagram’s fixed projection chart, with chord approximation inside a smaller tube. An arbitrary stereographic chart did not preserve the crossing code. Statement and peripheral comparison unchanged."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-meridian-disk-criterion-for-unknot-exterior",
    "severity": "nonfatal",
    "reason": "Replaced the unsupported radius-2epsilon domain with R>epsilon contained in the supplied open tubular domain, obtained by compactness. A smooth radial diffeomorphism supported below R carries the small-radius disk to the actual exterior. Statement unchanged."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-knot-kt-49-worked-cases",
    "severity": "nonfatal",
    "reason": "The supplier’s step 5.1 specifies the product triangulation, staircase prisms and three-edge meridian, so that rejection is false. Repaired the separate Step-4 error in Verification 3.1: Euler characteristic one belongs to the disk, not its boundary circle."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-haken-search-acceptance-is-an-essential-normal-disk",
    "severity": "nonfatal",
    "reason": "Corrected step 1.1 and its tag to attribute candidate tests to F1 rather than F2. Also restored connectedness in F3’s characterization hypothesis; fundamentalness supplies it in step 2.1. The essential-disk Statement is unchanged."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-jaco-tollefson-normal-essential-disk-vertex-existence",
    "severity": "fatal",
    "reason": "The prior proof applied PL normalization to an unrestricted disk. Added the PL Loop Theorem as an explicit external input, using Hatcher Theorem 3.1, pp.56–59, including nonorientable manifolds. It supplies an essential PL disk before normalization; Statement unchanged."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-normal-surface-unknot-algorithm-terminates-and-is-correct",
    "severity": "nonfatal",
    "reason": "Added preprocessing bounds, including exhaustive spanning-tree selection within 2^{O(n)} time, linear combinatorial template records, and compressed Euler/boundary/meridian formulas. These fit both original resource bounds. Adopted precheck phase numbering; no Statement change."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "thm-haken-normal-essential-disk-existence",
    "route": "frontier-owner; unassigned existing frontier item, no edit made",
    "affected_use": "items/thm-haken-normal-essential-disk-existence.md, Statement allows a properly embedded disk without PL qualification; proof 1.1 applies F1, which only normalizes a proper PL disk.",
    "invalidated_claim": "The initial invocation of the PL-normalization supplier is not justified for an arbitrary topologically embedded disk under the literal Statement.",
    "minimality": "Preserve the Statement and insert the same continuous-map-to-essential-PL-disk bridge from the PL Loop Theorem used in the assigned JT repair; the orientable-only existing local loop theorem does not cover the stated ambient scope.",
    "reason": "The exact same missing categorical bridge is visible in the unassigned Haken carrier. Its use for the assigned recognition theorem is sound on the essential PL disks supplied by the meridian criterion; the broader Haken interface still needs owner repair.",
    "uncertain": false,
    "source_urls": [
      "https://pi.math.cornell.edu/~hatcher/3M/3Mfds.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "no-update-required",
    "reason": "All 27 assigned carriers are draft, all original Statement/Definition sections are unchanged, and no published carrier was edited or found defective in the exact uses examined. The separate unassigned Haken alert concerns an existing draft frontier item.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-disconnected-projection-components-separated-by-jordan-curve",
    "severity": "nonfatal",
    "disposition": "fixed",
    "location": "Facts & Assumptions F2",
    "reason": "F2 inaccurately attributes two spherical disk sides directly to a supplier whose Statement concerns the bounded planar disk. This is a nonfatal citation overstatement: the needed planar separation is actually proved in supplier Proof 2.1. F2 now cites that exact argument and derives spherical separation by adding infinity to the unbounded component; the odd transverse-crossing argument and smooth finite-neighborhood construction are valid.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "path": "research/defect-ledger.jsonl"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "lem-disconnected-link-diagram-represents-a-split-link",
    "disposition": "false-positive",
    "location": "Facts F3–F4; Proof 1.1–2.1",
    "reason": "The rejected smoothness objection is false. F4 expressly invokes the proof of F3, whose steps 1.1 and 3.1 construct a smooth boundary component of a finite regular neighborhood; step 2.1 proves it separates graph points. Step 1.1 repeats that construction in a planar chart and uses only the bounded planar Jordan disk, exactly within the actual supplier Statement. Its product with a height interval has a smooth spherical boundary after rounding in a neighborhood disjoint from the compact link; projection points on each side give link points inside and outside. The unused two-spherical-disks description is an elementary consequence: delete a point in either complementary region and apply the planar disk result to the other bounded side. No strengthened lemma Statement is required.",
    "uncertain": false,
    "source_urls": [
      "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
    ],
    "familiar": true,
    "path": "research/defect-ledger.jsonl"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-reduced-alternating-diagram-minimizes-crossings",
    "severity": "nonfatal",
    "disposition": "fixed",
    "location": "Original Proof 1.1–2.1 and contract empty boundary; repaired Proof 1.1–4.1",
    "reason": "The original step 1.1 infers nonemptiness from connectedness without fixing a convention for vertexless projection graphs, then uses F5 outside its explicit nonempty domain if the empty diagram is admitted. This is a nonfatal omitted boundary case: any empty diagram has zero crossings and immediately realizes the nonnegative crossing minimum. New step 1.1 proves that case directly, and steps 2.1–4.1 retain the nonsplit/connected-competitor and normalized-bracket span argument only for nonempty links. F5 now records the actual nonempty supplier domain and monomial normalization. The theorem Statement and AC_omega assumption are unchanged.",
    "uncertain": false,
    "source_urls": [
      "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
    ],
    "familiar": true,
    "path": "research/defect-ledger.jsonl"
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "no-update",
    "reason": "All three assigned frontier carriers are draft. No Statement or Definition changed, no published carrier was edited, and no defective published consumer was identified. There is no published repair or consumer-interface event to record.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "path": "research/published-consumer-supplier-ledger.md"
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-adjudication",
    "run": "inverse-problems-knot-theory-all-109-2026-10-19",
    "phase": "initial",
    "round": 1,
    "unit": "107",
    "id": "lem-regular-projection-admits-finite-planar-code",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "Record the current adjudication and completed repair evidence in the referenced decision and review; retain all original round evidence.",
    "uncertain": false,
    "decision_pointer": "/decisions/0"
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-adjudication",
    "run": "inverse-problems-knot-theory-all-109-2026-10-19",
    "phase": "initial",
    "round": 1,
    "unit": "107",
    "id": "thm-descending-diagram-unknotting-sequence-procedure-properties",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "Record the current adjudication and completed repair evidence in the referenced decision and review; retain all original round evidence.",
    "uncertain": false,
    "decision_pointer": "/decisions/1"
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-adjudication",
    "run": "inverse-problems-knot-theory-all-109-2026-10-19",
    "phase": "initial",
    "round": 1,
    "unit": "107",
    "id": "lem-seifert-matrices-differ-rank-one-under-crossing-change",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "Record the current adjudication and completed repair evidence in the referenced decision and review; retain all original round evidence.",
    "uncertain": false,
    "decision_pointer": "/decisions/2"
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-adjudication",
    "run": "inverse-problems-knot-theory-all-109-2026-10-19",
    "phase": "initial",
    "round": 1,
    "unit": "107",
    "id": "lem-bridge-sphere-normalization",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "reason": "Record the current adjudication and completed repair evidence in the referenced decision and review; retain all original round evidence.",
    "uncertain": false,
    "defect_type": "logic",
    "decision_pointer": "/decisions/3"
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-adjudication",
    "run": "inverse-problems-knot-theory-all-109-2026-10-19",
    "phase": "initial",
    "round": 1,
    "unit": "107",
    "id": "thm-descending-diagram-is-unknot-and-finite-bounds",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "Record the current adjudication and completed repair evidence in the referenced decision and review; retain all original round evidence.",
    "uncertain": false,
    "rejection_reason_outcome": "false_positive",
    "decision_pointer": "/decisions/4"
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-adjudication",
    "run": "inverse-problems-knot-theory-all-109-2026-10-19",
    "phase": "initial",
    "round": 1,
    "unit": "107",
    "id": "thm-schubert-bridge-connected-sum",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "Record the current adjudication and completed repair evidence in the referenced decision and review; retain all original round evidence.",
    "uncertain": false,
    "decision_pointer": "/decisions/5"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "thm-every-knot-has-unknotting-sequence",
    "route": "frontier owner; outside unit 107 assigned repair scope",
    "severity": "nonfatal",
    "affected_use": "items/thm-every-knot-has-unknotting-sequence.md, proof steps 1.1–2.1 choose an edge-interior basepoint and call the algorithm, which excludes geometric bends.",
    "invalidated_claim": "The selected basepoint has not explicitly been required to avoid the finitely many geometric bends. The existential knot-unknotting theorem is still true.",
    "minimality": "In step 1.1 choose the edge-interior basepoint away from bends; no Statement or Definition change is needed. No source edit made by this unit.",
    "uncertain": false,
    "source_excerpt": "1.1 Apply [F1] to choose an admissible finite code for a regular diagram of a representative of $K$, and choose a basepoint in the interior of one edge. There is such an edge because a one-component code has at least one edge, including in the crossing-free case. [A1, F1, given, choose]"
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "path": "research/published-consumer-supplier-ledger.md",
    "action": "record-scope-disposition",
    "run": "inverse-problems-knot-theory-all-109-2026-10-19",
    "unit": "107",
    "ids": [
      "lem-regular-projection-admits-finite-planar-code",
      "thm-descending-diagram-unknotting-sequence-procedure-properties",
      "lem-seifert-matrices-differ-rank-one-under-crossing-change",
      "lem-bridge-sphere-normalization",
      "thm-descending-diagram-is-unknot-and-finite-bounds",
      "thm-schubert-bridge-connected-sum"
    ],
    "reason": "All six assigned carriers are draft. Changed supplier interfaces have only the enumerated frontier item consumers and the owning draft page. No published item was edited or newly found mathematically defective; existing Step-4 outside-presentation alerts remain with their owner routes.",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-classifying-maps-are-natural-under-group-homomorphisms",
    "model": "gpt-6-luna",
    "context_sha256": "b20438408a45e4fbd58a4f347e94b617d8d9f54a60cfa0eaafb517cc17557218",
    "outcome": "confirmed_nonfatal",
    "severity": "nonfatal",
    "disposition": "fixed",
    "reason": "Choose vertex tracks coherently along a rooted maximal tree before filling edge homotopy squares.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "location": "proof-step",
    "subclass": "unsupported-inference",
    "evidence": "research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u108.json#/decisions/0"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-h2-classifying-map-is-surjective",
    "model": "gpt-6-luna",
    "context_sha256": "c14fda509e43673e0d413349f9d662cfa23dbe99736cbc9ca96c478c3ffdf255",
    "outcome": "confirmed_nonfatal",
    "severity": "nonfatal",
    "disposition": "fixed",
    "reason": "Fix an arbitrary prescribed classifying map and apply the fiber argument to that map; supply canonical free resolutions.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "location": "proof-step",
    "subclass": "missing-case",
    "evidence": "research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u108.json#/decisions/1"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-regular-link-diagram-admits-normalized-height-realization",
    "model": "gpt-6-luna",
    "context_sha256": "ee9bb8fda30ad7faa3198a30da291cc837c0fe8c2fde831b12dd13fd4806211b",
    "outcome": "confirmed_nonfatal",
    "severity": "nonfatal",
    "disposition": "fixed",
    "reason": "Restore the cited stationary-endpoint premise, already satisfied by the cutoff isotopy in step 2.1.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "location": "facts-block",
    "subclass": "citation-inflated",
    "evidence": "research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u108.json#/decisions/2"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-five-term-homology-sequence-for-group-extensions",
    "model": "gpt-6-luna",
    "context_sha256": "6131fa83bdb3ed6a2bf3cdcc140b22a3047460b721ac1779c20308ac8ba1ccf6",
    "outcome": "confirmed_nonfatal",
    "severity": "nonfatal",
    "disposition": "fixed",
    "reason": "Supply the projective-resolution convention and prove complete five-term naturality through the natural Serre spectral sequence.",
    "uncertain": false,
    "source_urls": [
      "https://pages.vassar.edu/mccleary/files/2011/04/MC08bis.fin_.pdf"
    ],
    "familiar": true,
    "location": "facts-block",
    "subclass": "missing-hypothesis",
    "evidence": "research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u108.json#/decisions/3"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-stallings-integral-lower-central-isomorphism",
    "model": "gpt-6-luna",
    "context_sha256": "b4888f43765d815458244421b31fb48ead040d08fceda49e8d70c22f8bd4ce8b",
    "outcome": "confirmed_fatal",
    "severity": "fatal",
    "disposition": "fixed",
    "reason": "The repaired five-term interface now licenses comparison of transgressions; supplied free resolutions license the bar H1 computation.",
    "uncertain": false,
    "source_urls": [
      "https://pages.vassar.edu/mccleary/files/2011/04/MC08bis.fin_.pdf"
    ],
    "familiar": true,
    "location": "facts-block",
    "subclass": "citation-inflated",
    "evidence": "research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u108.json#/decisions/4",
    "defect_type": "dependency_citation"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-magnus-commutator-degree-and-truncation",
    "model": "gpt-6-luna",
    "context_sha256": "69a986812f4a1028f704dda7f607a5274c00816a34696447b3c0e0847b678acb",
    "outcome": "confirmed_nonfatal",
    "severity": "nonfatal",
    "disposition": "fixed",
    "reason": "Prove the lower-central degree bounds by induction before applying the conditional ring identity to arbitrary p and q.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "location": "proof-step",
    "subclass": "unsupported-inference",
    "evidence": "research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u108.json#/decisions/5"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "alg-truncated-milnor-invariants-from-based-diagram",
    "model": "gpt-6-luna",
    "context_sha256": "a3928af95bb05a77791f3e5dc16805237122eddc8e37acd7d36d342b48594f8a",
    "outcome": "confirmed_fatal",
    "severity": "fatal",
    "disposition": "fixed",
    "reason": "Merge diagram edges through overpasses into maximal Wirtinger arcs and substitute the identified symbols in all input certificates.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "location": "definition",
    "subclass": "missing-case",
    "evidence": "research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u108.json#/decisions/6",
    "defect_type": "logic"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-truncated-milnor-computation-terminates-and-is-correct",
    "model": "gpt-6-luna",
    "context_sha256": "172d6b4b5f7b921df2226e82adbb8c77c61ec91a61d4b45a8dc0cf8b2046bfa2",
    "outcome": "confirmed_nonfatal",
    "severity": "nonfatal",
    "disposition": "fixed",
    "reason": "Restrict the global Wirtinger presentation to closed links; local conjugacy and the end isomorphism suffice for string links.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "location": "facts-block",
    "subclass": "citation-inflated",
    "evidence": "research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u108.json#/decisions/7"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-milnor-invariants-isotopy-and-link-homotopy-scope",
    "model": "gpt-6-luna",
    "context_sha256": "c5f33af6a1cc8529c378cf3dc2404571620badb8f93d82a5544c084266183b62",
    "outcome": "confirmed_fatal",
    "severity": "fatal",
    "disposition": "fixed",
    "reason": "Require transport of the complete based peripheral datum for string-link integer invariance; closed-link conclusions remain unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "location": "statement",
    "subclass": "missing-hypothesis",
    "evidence": "research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u108.json#/decisions/8",
    "defect_type": "logic"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "lem-magnus-conjugation-coefficients-use-shorter-subwords",
    "route": "frontier owner; outside this assigned item lane",
    "location": "title",
    "reason": "The current title says conjugation changes only lower-order coefficients, but for lambda=x_1 and u=x_2, E(u^(-1)lambda u)-E(lambda) has degree-two term X_1 X_2-X_2 X_1. The Statement correctly describes dependence on shorter longitude coefficients. Minimal repair: change only the title to express that dependence and mirror its title metadata; no item edit was made here.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "record-maintenance-alert",
    "id": "def-regular-oriented-link-diagram",
    "path": "items/def-regular-oriented-link-diagram.md",
    "route": "outside-frontier published maintenance; no edit or adjudication here",
    "source_excerpt": "([[def-oriented-link-in-s-three-and-ambient-isotopy]], so $C$ is a finite",
    "affected_use": "The current public defining section contains inline supplier links instead of an immediately following references section; the exact first occurrence is quoted above.",
    "invalidated_claim": "No mathematical claim is invalidated by this presentation finding; the complete public statement is interrupted by links.",
    "minimality": "Move all links from the complete defining section into its immediately following references section, keeping hypotheses, dependencies and published status. Recheck actual direct consumers if that section changes.",
    "reason": "Confirmed the Step-4 presentation alert against the current defining section; this is outside the assigned frontier repair scope.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "record-maintenance-alert",
    "id": "def-free-group",
    "path": "items/def-free-group.md",
    "route": "outside-frontier published maintenance; no edit or adjudication here",
    "source_excerpt": "universal property are established in [[thm-reduced-words-form-the-free-group]].",
    "affected_use": "The current public defining section contains inline supplier links instead of an immediately following references section; the exact first occurrence is quoted above.",
    "invalidated_claim": "No mathematical claim is invalidated by this presentation finding; the complete public statement is interrupted by links.",
    "minimality": "Move all links from the complete defining section into its immediately following references section, keeping hypotheses, dependencies and published status. Recheck actual direct consumers if that section changes.",
    "reason": "Confirmed the Step-4 presentation alert against the current defining section; this is outside the assigned frontier repair scope.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "record-maintenance-alert",
    "id": "thm-seifert-van-kampen",
    "path": "items/thm-seifert-van-kampen.md",
    "route": "outside-frontier published maintenance; no edit or adjudication here",
    "source_excerpt": "is a pushout ([[def-pushout-of-group-homomorphisms]]).",
    "affected_use": "The current public defining section contains inline supplier links instead of an immediately following references section; the exact first occurrence is quoted above.",
    "invalidated_claim": "No mathematical claim is invalidated by this presentation finding; the complete public statement is interrupted by links.",
    "minimality": "Move all links from the complete defining section into its immediately following references section, keeping hypotheses, dependencies and published status. Recheck actual direct consumers if that section changes.",
    "reason": "Confirmed the Step-4 presentation alert against the current defining section; this is outside the assigned frontier repair scope.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "record-maintenance-alert",
    "id": "def-oriented-link-in-s-three-and-ambient-isotopy",
    "path": "items/def-oriented-link-in-s-three-and-ambient-isotopy.md",
    "route": "outside-frontier published maintenance; no edit or adjudication here",
    "source_excerpt": "Work in the smooth category ([[def-smooth-manifold]]).",
    "affected_use": "The current public defining section contains inline supplier links instead of an immediately following references section; the exact first occurrence is quoted above.",
    "invalidated_claim": "No mathematical claim is invalidated by this presentation finding; the complete public statement is interrupted by links.",
    "minimality": "Move all links from the complete defining section into its immediately following references section, keeping hypotheses, dependencies and published status. Recheck actual direct consumers if that section changes.",
    "reason": "Confirmed the Step-4 presentation alert against the current defining section; this is outside the assigned frontier repair scope.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-dualizable-slide-clears-meridian-disk",
    "severity": "nonfatal",
    "location": "Facts F1 and Hom source locator",
    "reason": "F1 incorrectly grouped dotted R with the zero-framed components. Only B and G are framed 2-handle attaching circles; R specifies a 1-handle. Corrected F1 without changing the Statement. The proof uses a signed parallel, a strip in the punctured disk and a product-bigon isotopy to remove one intersection per slide, so this wording defect did not invalidate the construction. Also corrected the Hom background locator to sections 5–6; Piccirillo Theorem 3.1 is the actual slide source.",
    "path": "research/defect-ledger.jsonl",
    "status": "fixed",
    "evidence": "research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u109.json"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-slice-disk-complement-h1-is-generated-by-meridian",
    "severity": "nonfatal",
    "location": "Facts F3",
    "reason": "Confirmed the F3 misattribution: the sphere-homology corollary does not assert ball contractibility. The needed vanishing is elementary and true, so this is nonfatal citation repair. F3 now supplies explicit radial contractions and cites the contractible-space homology corollary; it separately cites homotopy invariance and sphere homology for the normal-circle bundle. Excision and both natural pair sequences identify the oriented normal disk generator and the boundary inclusion isomorphism; Statement unchanged.",
    "path": "research/defect-ledger.jsonl",
    "status": "fixed",
    "evidence": "research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u109.json"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-knot-slice-iff-zero-trace-embeds-in-s-four",
    "severity": "fatal",
    "defect_type": "logic",
    "location": "Proof 1.1 and 2.1",
    "reason": "Confirmed the missing comparison with the fixed attaching framing: F2 defines preferred curves but asserts no uniqueness. Repaired 1.1 by writing the two section classes as [K′]=[s0]+n[μ] on the product torus; both vanish in the exterior and the meridian has infinite order, so n=0. A periodic angle lift then homotopes the normal framings and gives isotopic attaching tubes. Also made the reverse argument use a small round stereographic ball, whose complement is standard by inversion. The Statement is unchanged.",
    "path": "research/defect-ledger.jsonl",
    "status": "fixed",
    "evidence": "research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u109.json"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-unknot-zero-trace-and-dualizable-cancellation",
    "severity": "fatal",
    "defect_type": "logic",
    "location": "Proof 2.1 and 3.1",
    "reason": "Confirmed the invalid radial vector: at (x,0,0) in round S4 the radial (x,0,0) is perpendicular to TS4. Replaced it with the explicit tangent normal frame e4,e5 and product tube (x,v)↦(sqrt(1−|v|²)x,v). Also repaired the digest finding in 3.1: slide one meridian over an opposite parallel along the inward strip of their product annulus; the cut-open annulus is a disk disjoint from the cancellation region and its product framing extends over that disk. Either cancellation then leaves the zero-framed unknot. Clarified 1.2 using two product disks to identify the whole trace. Example text unchanged.",
    "path": "research/defect-ledger.jsonl",
    "status": "fixed",
    "evidence": "research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u109.json"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "def-ip-ordered-filter-grid-and-source-index",
    "outcome": "confirmed_nonfatal",
    "severity": "nonfatal",
    "disposition": "fixed",
    "location": "Remarks, final sentence",
    "reason": "The final Remarks quantified over alpha>0 although q_alpha and V are defined only on A. On A, V(alpha) <= (C_q′/alpha)^2 sum_j lambda_j < infinity. Corrected only that remark to alpha in A; the Definition and all grid hypotheses are unchanged.",
    "repair": "Replaced only the Remarks quantifier alpha>0 with alpha in A. Definition unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "thm-ip-solit-oracle-risk-and-rate",
    "outcome": "false_positive",
    "disposition": "false_positive",
    "location": "Proof 1.1 and cited risk lemma Proof 1.1",
    "reason": "The cited risk lemma does more than assert abstract L2 convergence. Its Proof 1.1 sets c_j=lambda_j q_alpha(lambda_j) theta_j and d_j=sigma s_j q_alpha(lambda_j), proves sum c_j^2 and sum d_j^2 finite, then uses monotone convergence and Markov to obtain sum d_j^2 xi_j^2 < infinity almost surely. Orthogonality gives convergence of the full series sum (c_j+d_j xi_j)v_j on that event, and the explicit expected tail formula proves that same pointwise limit is the L2 estimator. The observed sums are exactly these sums because y_j=s_j theta_j+sigma xi_j. Intersecting the finitely many candidate events proves the agreement cited in theorem Proof 1.1. The supplier guard equals the frozen before guard; this is existing evidence, not a new supplier repair.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "alg-ip-gaussian-map-feature-test",
    "model": "gpt-6-luna",
    "context_sha256": "18176fa54e8a5c6ffd63cb6b8d2c54724bfc04ddd0ac00fe1b6ec9bf16598cb7",
    "reason": "The assigned Definition specifies only the total raw comparison y(Phi_h)>c_h. It does not assert all-input agreement with a posterior marginal mode. In the proposed scalar field, Phi_h=1, c_h=0 and the raw output is indeed 0 while the basis-defined posterior mode is 2. This is allowed: thm-ip-isonormal-gaussian-posterior-law states the feature-mean identity only P_Y-almost surely for fixed h, and thm-ip-map-test-level-and-power Statement and step 1.3 use precisely that qualification. Under P_Y, Y(1)=2Y(1/2) almost surely, so the displayed witness is an exceptional input, not a contradiction. The resolvent exists since epsilon>0; both comparison branches cover every real field evaluation. No item change is warranted."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-ip-closure-only-feature-is-not-exactly-estimable",
    "severity": "fatal",
    "defect_type": "other",
    "location": "Example; Facts F1/F2/A1; axiom_use",
    "disposition": "fixed",
    "reason": "The repository defines N to contain 0 (def-natural-numbers Definition). The assigned Example instead gives Kx and h only on j>=1, so neither is specified as an element of the declared l2(N), and the asserted basis omits e_0. This is a well-definedness defect in the example interface, rather than a failed range argument or a missing citation. Repaired by explicitly setting I={j in N:j>=1} and using l2(I,R) throughout the Example. The bijective isometric reindexing x -> (x_(n+1)) transfers the existing completeness supplier; tail sums prove basis density. The original compactness and non-estimability conclusions are retained. Also corrected the inherited Countable Choice accounting without strengthening its assumed axiom.",
    "post_sha256": "9b0e0976d46b130552738e473940db8ad04730355c4575784a8e5e3732c969e1"
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "no-update-required",
    "reason": "Both assigned items are draft. No published item was repaired or newly affected; no Statement or Definition changed and no new prerequisite was added."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-ip-independent-normal-delays-have-nonidentifiable-link-means",
    "severity": "nonfatal",
    "status": "fixed",
    "finding": "The unqualified title suggested failure for all additive Gaussian trees although the complete Example specifies one shared-link two-leaf tree. The caption also mislocated the receivers, and the source locator used zero-based PDF pagination.",
    "repair": "Title now reads A shared-link Gaussian tree with nonidentifiable link means; caption says rightmost vertices; Lawrence Example 3 locator now says PDF p. 3, printed p. 26. Exact owning-manifest mirrors updated under the shared write lock.",
    "evidence_paths": [
      "items/ex-ip-independent-normal-delays-have-nonidentifiable-link-means.md",
      "research/inverse-problems-knot-theory-all-109-2026-10-19-batch-13.pages.json"
    ],
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/0708.1079"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-ip-weighted-coefficient-spaces-are-hilbert",
    "severity": "nonfatal",
    "disposition": "fixed",
    "location": "proof-step",
    "locus": "3.1",
    "reason": "Step 3.1 omitted coordinate 0 when choosing q_1,...,q_N. This is a nonfatal indexing error: the finite-support rational dense-set argument is valid after approximating all 0<=n<N and bounding the n>=N tail. The repair gives squared error <epsilon^2/2. The isometric surjection, completeness, weighted basis and norm<=1 inclusion remain valid under the stated countable choice.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-ip-gaussian-series-at-besov-threshold",
    "severity": "nonfatal",
    "disposition": "fixed",
    "location": "facts-block",
    "locus": "F3; applications 1.1 and 2.2",
    "reason": "F3 suppresses the cited lemma's separable real Hilbert spaces, continuous inclusion and common complete orthogonal basis. This is a nonfatal citation-precision defect: verification 1.1 establishes separability and uses H1=H0, while 2.2 supplies the weighted Hilbert inclusion and basis via F2. F2/F3 and both applications now state these conditions explicitly. The sums are geometric for r<s; squared normals are IID with mean 1 and finite variance, and the strong law gives dyadic block averages tending to 1, so the critical norm diverges. No Example claim or choice requirement changes.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-ip-small-ball-map-estimator",
    "severity": "nonfatal",
    "location": "frontmatter",
    "subclass": "citation-missing",
    "disposition": "fixed",
    "reason": "Confirmed a missing prerequisite edge: the relative-mode branch uses the covariance quotient and completed injection defined by def-banach-gaussian-covariance-operator-and-rkhs, already explicitly linked in Definition references. Its well-definedness theorem proves ker C equals the covariance nullspace and that the completion map is injective. This is nonfatal graph metadata: the supplied definition and its cited construction are sound. Added the missing deps entry and its manifest mirror without changing the Definition.",
    "evidence_paths": [
      "items/def-ip-small-ball-map-estimator.md#deps",
      "research/inverse-problems-knot-theory-all-109-2026-10-19-batch-19.pages.json",
      "items/def-banach-gaussian-covariance-operator-and-rkhs.md#Definition",
      "items/thm-banach-gaussian-covariance-rkhs-is-well-defined.md#Proof"
    ],
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "op-ip-honest-coverage-over-ill-posed-truth-classes",
    "status": "fixed",
    "severity": "nonfatal",
    "reason": "Removed the unsupported larger-class comparison. The explicit sparse-gap truth is outside the stated polished-tail Sobolev truth classes, so its undercoverage supplies contextual motivation only.",
    "source_excerpt": "The sparse-gap construction gives subsequence undercoverage on a larger hyperrectangle under its exact inflation bound.",
    "repair": "Replaced the link label and Status comparison with the coordinatewise class and the exact failure of polished-tail and beta-Sobolev membership.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/1310.4489v5"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "op-ip-honest-coverage-over-ill-posed-truth-classes",
    "status": "open",
    "severity": "fatal",
    "defect_type": "other",
    "reason": "The original unrestricted question has an affirmative construction. Its classification as an unresolved open problem must be replaced by a proved construction; the remaining issue is authorized carrier integration, not uncertainty about the construction.",
    "source_excerpt": "Does there exist a single graph-measurable data-indexed set rule C_{n,gamma}(X), together with the original Status assertion that the simultaneous target remains unsettled.",
    "affected_use": "The complete Open problem permits arbitrary graph-measurable subsets, every truth has theta_1=0, and every positive-selector posterior has a nondegenerate first coordinate. These exact clauses allow deleting the entire truth hyperplane at zero posterior cost.",
    "invalidated_claim": "Status as of 2026-10-19: the inspected literature gives separate neighboring results but does not settle the simultaneous target above for p>0. The item is not an unresolved mathematical problem as formulated.",
    "minimality": "Preserve every model, truth-class, credibility, exact-coverage and diameter clause. Integrate a proved example or corollary under its required prefix and update the owning page, manifest, registry and contract. Restricting the set geometry or changing the truth class would change the approved question and is not a licensed substitute.",
    "route": "Owner of batch 21 must integrate the reclassification and proved carrier. No other item uses this open problem as a dependency or reference; only its owning A-page inventory lists it.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/1310.4489v5"
    ],
    "familiar": false,
    "contract_status": "Current owning status contract explicitly fails until owner integration of the proved carrier."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-ip-posterior-computation-error-budget",
    "severity": "nonfatal",
    "location": "Definition: burn-in length and retained sample size immediately before the empirical average",
    "reason": "The discrete-chain average requires integer indices. Burn-in length and retained sample size already express counts, but b>=0 and N>=1 leave their domains implicit. This is a nonfatal domain-notation omission, not a failed error decomposition. The repair states b in {0,1,2,...} and N in {1,2,3,...}, retaining b=0 and N=1.",
    "status": "fixed",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "prop-ip-bounded-posterior-functional-error",
    "severity": "nonfatal",
    "location": "Proof 1.2",
    "affected_use": "The six scalar references run from mu_star(f) to fbar_(b,N). The signed ledger supplier defines later minus earlier, so the sum is fbar_(b,N)-mu_star(f).",
    "invalidated_claim": "The sentence asserting that those signed adjacent differences sum to mu_star(f)-fbar_(b,N) has the sign reversed; the subsequent absolute inequality is still valid.",
    "minimality": "Replace only that signed sum by fbar_(b,N)-mu_star(f); no Statement change or downstream propagation is necessary.",
    "reason": "Confirmed the Step-4 digest concern directly against Proof 1.2 and def-statistical-and-computational-error-ledger: its e_j=r_j-r_(j-1) telescopes in the opposite direction. This consumer is outside this unit write assignment, so no item edit was made; route to its ordinary frontier owner.",
    "status": "open",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-ip-cfm-low-imh-acceptance-with-accurate-means",
    "severity": "non-fatal",
    "location": "frontmatter.title",
    "reason": "The title suggests accuracy against the posterior, but section 4.2.1 only compares finite-run means and band bounds with DRAM. The Example and Verification already retain that limitation. Replaced only the title with an explicit DRAM comparison; all empirical quantities and claims are preserved.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/2610.02377"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-ip-conditional-flow-matching-population-and-exact-flow-meaning",
    "severity": "non-fatal",
    "location": "Facts & Assumptions F3; Proof step 1.1; deps",
    "reason": "F3 suppresses the supplied-kernel prerequisite of its cited corollary. The needed existence theorem is already in the transitive dependency closure through that corollary, and AC and finite-dimensional standard-Borel hypotheses already hold. This is an omitted explicit supplier invocation, not a missing mathematical hypothesis or unavailable theorem. Added the theorem as a direct dependency and F8, constructed K from the joint law of (V,(t,X_t,Y)), and applied the signed-integral corollary coordinatewise with zero filling.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "no-update",
    "reason": "Both assigned carriers are draft. No supplier Statement or Definition changed, no new prerequisite item was authored, and no defective published use was discovered. The F7 supplier integer-index clarification leaves this lemma bookkeeping use sound; its owning contract quotation was synchronized.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-ip-polynomial-singular-decay-source-balls",
    "outcome": "confirmed_nonfatal",
    "location": "facts-block",
    "fact": "F5",
    "reason": "The square-root supplier requires a compact self-adjoint positive input; F5 omitted self-adjointness and the compact uniqueness class. Repaired the restatement. Steps 1.2 and 2.1 already verify the hypotheses for the sole application in 3.1, so the proof conclusion was not invalidated.",
    "status": "fixed"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-ip-polynomial-singular-decay-source-balls",
    "outcome": "confirmed_nonfatal",
    "location": "statement",
    "section": "Example",
    "reason": "The Step-4 concern is confirmed: Countable Choice appeared in A1 and actual supplier requirements but not in the complete Example. Made it explicit in Example and Given without changing the diagonal claims or source conventions.",
    "status": "fixed"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-ip-collared-sobolev-besov-source-functional-cutoff",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "status": "fixed",
    "reason": "F1 incorrectly attributed tempered-distribution extension and derivative multipliers to the L2-only Plancherel statement, essential in steps 3.2 and 4.1. Repaired the dependency citation using the existing distributional automorphism, agreement and derivative theorems; explicitly converted their 2pi normalization to angular frequency and justified L2 translations by density. Checked collar zero extension, exterior bilinear correction, annular estimates and the VSC balancing exponent without changing Statement.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-ip-collared-liouville-potential-and-hone-recovery",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "status": "fixed",
    "reason": "F2 and its contract quoted only the source-functional Statement, which fixes norm conventions but asserts no fractional Fourier norm identity; that unlicensed identity was essential to step 2.1 and composition in step 3.1. Repaired by deriving the whole-space identity locally from L2 translation, Plancherel, Tonelli, rotation and scaling, including finiteness and positivity of the kernel constant; derivative rules now cite their actual suppliers. Checked the H^r multiplier range, compositions at s=3 and noninteger s, compact support, div(g1*g2*grad(w))=g1*g2*Q, the negative energy pairing, coercivity and H1 recovery. Statement unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-ip-geometric-logarithmic-frozen-stopping-schedule",
    "outcome": "false_positive",
    "status": "false-positive",
    "reason": "The source uses a first crossing in (2.32), but this item proves a last-crossing bracket directly and never invokes that source theorem as a premise. Its actual consumer thm-ip-frozen-newton-rate-under-range-invariance independently proves E_n<=q E_(n-1)+C h_n through that last index, using rho_n>=tau*w, and the terminal residual uses rho_N<=M*tau*w. Checked the geometric ratio, logarithmic index inversion and endpoint actual-noise bound. The differing source convention does not invalidate this local argument; no edit is needed.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/html/2403.18704v1#S2.SS3"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-ip-joint-range-invariance-vsc-estimate",
    "outcome": "false_positive",
    "status": "false-positive",
    "reason": "The source inequality is explicitly assumed in full in the Statement; step 2.1 uses that assumed formula, not an implication requiring the stricter index convention of the linked definition. Strict positivity is unnecessary: even psi identically zero gives the conclusion directly from the truth competitor and the assumed inequality. More generally one can apply the defining convention to psi_epsilon(t)=psi(t)+epsilon*t and let epsilon decrease to zero. Checked the objective competitor, Bregman orientation, projected-domain/sublevel admission and the two power estimates giving exactly C_*, including p=1 and K=0. The claimed bound is valid with the stated broader hypothesis, so adding positivity would unnecessarily weaken it.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "rem-ip-eit-conductivity-rate-source-reconciliation",
    "status": "open",
    "route": "owner: unassigned draft frontier item; existing batch-30 Step-4 concern index 0",
    "affected_use": "items/rem-ip-eit-conductivity-rate-source-reconciliation.md, Remark line 44 and Facts & Assumptions F5 at line 84: the reported source norm exponent is stated to be nu_paper/tilde_p.",
    "invalidated_claim": "Corollary 11 is attributed division by the parameter exponent tilde_p, whereas its norm exponent has denominator (s1-1)*p and the corollary explicitly fixes p=2.",
    "minimality": "Replace the two erroneous source-attribution clauses by nu_paper/2 (p=2); preserve the separately proved local exponent nu/2 and all parameter qualifications. An actual Remark-interface edit requires its direct-consumer examination by the owner. No item in this unassigned scope was edited or adjudicated.",
    "reason": "Verified the digest concern against the current two clauses and the complete source Corollary 11; report to the owner for authorized repair.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/html/2403.18704v1#S3"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "no-update",
    "reason": "All four assigned carriers are draft and no Statement or Definition changed. No published consumer defect was found in this assigned review; the separately reported reconciliation remark is an unassigned draft frontier item.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-ip-bv-zero-gradient-constant-on-connected-domain",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "fixed",
    "evidence": "The original real constant conclusion is false for u=i on R under the complex distribution interface. The repair proves constancy in C and retains the real constant conclusion for real u. Mollification constants converge in C; positive-measure ball overlaps and a countable base globalize them. Empty and zero-dimensional domains are handled directly. The three direct item consumers use real BV or real L2 functions, so their actual uses remain valid.",
    "report": "research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u31.json",
    "action": "record-fixed-finding",
    "post_sha256": "4312b5e14ebdd5239213a89d16566c94aaa68168c227d9158bd4cec74978e21d"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-ip-distributional-radon-representation-unique",
    "outcome": "confirmed_nonfatal",
    "defect_type": null,
    "status": "fixed",
    "evidence": "The all-Borel conclusion is valid: the regular-complex definition expressly uses all-Borel regularity, and even finite Radon regularity upgrades to it. The omitted elementary upgrade is now given explicitly using K=C minus G, with each of two errors below epsilon/2; domination transfers it to the difference variation. Compact smooth tests and dominated convergence then determine all Borel masses. Added empty and singleton-domain cases without changing the Statement.",
    "report": "research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u31.json",
    "action": "record-fixed-finding",
    "post_sha256": "1fcb9036b919b6d68a5b601318d378b1a3ba4e430d3e7ade326649ed212bab50"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-ip-lw-integral-inequality",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "status": "fixed",
    "evidence": "Ordinary Tonelli does not justify coordinate lifts of arbitrary Lebesgue-measurable inputs. The repair uses Borel representatives, proves lifted exceptional sets null by bounded slabs, identifies product and Euclidean integrals, and treats infinite sectional integrals on null sets before induction. Countable Choice is now explicit because the actual completion suppliers require it. Tao Example 1.7.13 and Theorems 1.7.15–1.7.18 were read for the product/completion distinction; the local suppliers specify the Choice scope.",
    "report": "research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u31.json",
    "action": "record-fixed-finding",
    "post_sha256": "4efc4b2abcaf47ee81fe464334491a6a9358900b44d49353748ecfd2b0058d85"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-ip-open-euclidean-locally-finite-smooth-partition",
    "outcome": "confirmed_nonfatal",
    "defect_type": null,
    "status": "fixed",
    "evidence": "The positive-dimensional shell and rational-ball construction is valid and choice-free, but its cited bump and compactness interfaces require n>=1. Added the missing n=0 singleton construction eta=1 in one covering member, and restricted F1/F3 accurately to n>=1. The original Statement, compact supports, local finiteness and cover subordination are preserved.",
    "report": "research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u31.json",
    "action": "record-fixed-finding",
    "post_sha256": "376ad59cb16a626dc3256a428d05757dee5c360ec69545925d8331d7a059322c"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-ip-smooth-compact-support-dense-in-c0",
    "outcome": "confirmed_nonfatal",
    "defect_type": null,
    "status": "fixed",
    "evidence": "Added the n=0 singleton case while preserving the Statement. Also repaired the Step-4 concern: the old unqualified Lebesgue convolution argument relied on measure interfaces requiring Countable Choice. A finite bump-weighted average of sampled values now approximates the compactly supported cutoff function uniformly; a second finite cutoff keeps the denominator positive on its support. The error is at most 2epsilon/3, uses no integration and no countable choice, and preserves complex as well as real C0 functions.",
    "report": "research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u31.json",
    "action": "record-fixed-finding",
    "post_sha256": "9a61bd2cd66114dbc42b4c1287ed987e7d974a27b8d4dc75e44a68b682252e70"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-ip-vector-radon-variation-is-radon",
    "outcome": "confirmed_nonfatal",
    "defect_type": null,
    "status": "fixed",
    "evidence": "The core partition variation proof is sound, but F1 omitted the elementary upgrade from finite Radon regularity to compact approximation of all Borel sets. Added the explicit C minus G argument and the finite union/intersection argument for the dominating sum lambda. Domination now justifies both approximations in 3.1 and the compact witnesses in 4.1. Countable additivity uses only finitely many near-optimal partitions at a time. Empty vector, empty space and singleton-space cases are explicit; the Statement is unchanged.",
    "report": "research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u31.json",
    "action": "record-fixed-finding",
    "post_sha256": "da75b3aef600c3ce6b0a03e156de804b3db743d07245a77a50b6ac4183002dba"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-ip-unit-vector-density-has-scalar-variation",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "status": "fixed",
    "evidence": "F3 and 1.1 explicitly applied the vector-Radon theorem outside its Euclidean domain. The repaired argument defines partition variation on X and proves equality on each Borel A directly. A finite grid partitions the unit sphere into small Borel pieces; projecting the integral of each inverse-image piece onto a unit representative gives V(A)>=(1-epsilon^2/2)lambda(A), while the triangle inequality gives V(A)<=lambda(A). Letting epsilon vanish proves the full claim and measure property, with only finite choice and no Euclidean-domain application.",
    "report": "research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u31.json",
    "action": "record-fixed-finding",
    "post_sha256": "367b8b879e818859cafdee8dcbb7270653cf0c14b19967e7c0de1cf7fa19f6fa"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-ip-bv-lipschitz-trace-and-zero-extension",
    "outcome": "false_positive",
    "defect_type": null,
    "status": "dismissed",
    "evidence": "The complete graph-trace supplier already proves chart independence in Proof 5.1: compare the u=1 flux measures to identify outward normals, then subtract the Green formulas for arbitrary u and use distributional Radon uniqueness plus the unit-density variation calculation to identify traces. Thus assigned F1 and 1.1 cite an actually established supplier result even though its Statement omits the extra compatibility sentence. The remainder glues finitely many charts, derives the zero-extension measure with the correct minus boundary sign, and adds variations on disjoint interior/boundary supports. No edit is needed.",
    "report": "research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u31.json",
    "action": "record-false-positive",
    "post_sha256": "681640172f84c2f0be581f8bbc6242f1cb46d2e889268d6947ce273c48e176fe"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-ip-bv-strict-approximation",
    "outcome": "confirmed_nonfatal",
    "defect_type": null,
    "status": "fixed",
    "evidence": "The k=0 terms 1/k and 1/(2k) were undefined. Replaced them by 1/(k+1) and 1/(2(k+1)), and made the partition enumeration j>=1 so the 2^(-j) error weights sum to one. Also specified delta>0, handled empty/singleton domains, and justified the product-measurable absolute-integrable interchanges using positive and negative Tonelli. Local finiteness, the product-rule cancellation, the variation bound and lower semicontinuity still prove the unchanged strict approximation and full-space compact-support claims.",
    "report": "research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u31.json",
    "action": "record-fixed-finding",
    "post_sha256": "3ea5c2b3d59d4e9c851b0148c6cd783537334b4424d8173ff90dbb2646ef83e1"
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "no-update",
    "reason": "All nine assigned carriers and four direct consumer carriers are draft. No published consumer defect or published repair was identified in this assignment."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-ip-tv-level-set-representatives-and-boundaries",
    "outcome": "confirmed_nonfatal",
    "severity": "nonfatal",
    "disposition": "fixed",
    "reason": "The supplier defines zero extension and Dirichlet/Neumann variation, but does not prescribe geometric level sets. The old reference label attributed that additional convention to it. Replaced only the label with the actual supplied definitions; the complete Definition, signed levels, density-one representative, ambient boundary and empty-set Hausdorff conventions are unchanged and sound.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-ip-planar-isoperimetric-inequality-for-finite-perimeter-sets",
    "outcome": "confirmed_nonfatal",
    "severity": "nonfatal",
    "disposition": "fixed",
    "reason": "The 1/j tolerance is undefined at an allowed zero index; this is a removable finite-index defect, not a failure of the approximation or sharp constant. Step 3.1 now uses the positive vanishing tolerance 1/(j+1) in both selection and perimeter bound. Also corrected F2 to positive superlevels and negative sublevels, mirrored the current derivation and corrected the contract axiom uses from stale 2.1/2.2 to 1.2/3.1. Statement and dependencies are unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "def-ip-tv-dual-source-certificate",
    "outcome": "false_positive",
    "reason": "The Definition fixes X=L²(Ω;R), and the cited extended functional is explicitly on L². Its agreement with BV TV when globally integrable is therefore within that ambient L² space, not a claim about arbitrary L¹ functions. The lemma explicitly establishes agreement on BV∩L². The real adjoint, subgradient certificate and comparison/reference orientation of Bregman distance match their suppliers.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "lem-ip-tv-dual-attainment-and-certificate-limit",
    "route": "ordinary frontier owner repair; outside unit 32 assigned item scope",
    "affected_use": "items/lem-ip-tv-dual-attainment-and-certificate-limit.md, Statement: “For each α>0 and w∈Y, D_{α,w} has a unique maximizer p_{α,w}=Proj_K((f+w)/α).”",
    "invalidated_claim": "The maximization domain is omitted. On all of Y, completing the square gives maximizer (f+w)/α; projection is the maximizer when the domain is K. Proof 2.1 explicitly proves the claim on K.",
    "minimality": "Insert “on K” after “unique maximizer” in the Statement, then perform the owner’s actual interface-change consumer checks. This unassigned item was not edited or adjudicated.",
    "reason": "Verified the Step-4 digest concern against the current complete Statement and proof step 2.1; route the missing maximization constraint to the frontier owner.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-ip-best-s-term-l1-sparse-vector-formulation",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "status": "fixed",
    "location": "facts-block F3 and proof-step 1.1",
    "reason": "The original proof explicitly invoked arbitrary disjoint-coordinate splitting absent from the cited supplier interface. Replaced it by clause-4 monotonicity on full zero-extended coordinate sequences.",
    "adjudication": {
      "model": "gpt-6-luna",
      "context_sha256": "7e5c0add2af8107c18aaec801ac41459e9754e5f70f0de4b0ce63e1531e0073e"
    },
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-ip-largest-s-coordinates-attain-best-s-term-l1-error",
    "severity": "nonfatal",
    "status": "fixed",
    "location": "facts-block F2/F3 and proof-steps 1.1/2.1",
    "reason": "The extra arbitrary-part splitting attribution in F3 is unnecessary to the rank argument. Restated the actual sum and norm interfaces and explicitly derived reordered masses and complement additivity, retaining the full claim.",
    "adjudication": {
      "model": "gpt-6-luna",
      "context_sha256": "a6d4591992f954d04c33f53e9a84c0cceeeba3b305e524437f9837a97518614d"
    },
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "cor-ip-limited-angle-compact-support-uniqueness",
    "severity": "nonfatal",
    "status": "fixed",
    "reason": "Step 2.1 invokes density to select an unspecified sequence, although no Countable Choice is allowed. This is a nonfatal omission: one arbitrary epsilon-approximant gives the same uniform integral bound. Replaced the sequence and limit by that bound for every epsilon, retaining the coordinate-entire continuation, vanishing moments, positivity argument and unchanged Statement.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-ip-fourier-slice-identity-on-schwartz",
    "severity": "false-positive",
    "status": "dismissed",
    "reason": "The rejection checks only the bump lemma Statement. Its actual Proof 1.1 constructs rho(x)=sigma((s^2-sum(x_j^2))/(s^2-r^2)), with s=(r+R)/2, which is radial; Proof 2.1-3.1 proves smoothness, values in [0,1], plateau and compact support. Taking its radii to be R and 2R supplies exactly the cutoff used here. Radiality is also unnecessary to the Fourier argument, so no inference fails.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "ex-ip-high-frequency-limited-angle-instability",
    "severity": "false-positive",
    "status": "dismissed",
    "reason": "F4 explicitly invokes the proposition’s proved integration-by-parts estimate, rather than claiming its existential Statement quantifies over arbitrary bumps. Supplier Proof 1.1 derives the product-rule H1 bound for a fixed smooth normalized psi; Proof 1.2-2.1 derives the data bound using only compact support, smoothness and the angular lower bound. These conditions hold for the example’s psi and c=sqrt(3)/2, so the cited construction applies to this exact family.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-ip-distributions-conormal-kernels-and-cotangent-relation",
    "severity": "fatal",
    "defect_type": "other",
    "location": "Definition analytic-incidence clause",
    "reason": "Smooth G and X do not determine analytic charts; fixed compatible analytic atlases and analytic defining submersions now supply the missing structure.",
    "status": "fixed"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-ip-distributions-conormal-kernels-and-cotangent-relation",
    "severity": "fatal",
    "defect_type": "logic",
    "location": "Definition incidence integral and Proof 1.3",
    "reason": "An arbitrary embedded nonclosed Z need not have locally finite density mass. For G=X=R, the disjoint lines x-g=1/j, j>=1, form an embedded submanifold with both projections submersions. Put |dg| on each line. A nonnegative compact test equal to one on [-1,1] times [-2,2] has infinite integral, since every line contributes at least 2. Ambient local finiteness is now required, and Proof 1.3 proves absolute convergence and continuity. This excludes precisely the unsupported integrals without requiring every Z to be closed.",
    "status": "fixed"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-ip-analytic-cutoff-sequence",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "location": "Facts F3; Proof 2.1–4.1",
    "reason": "F3 attributes existence of continuous compactly supported Riemann integrals to a definition that assumes integrability. The published theorem thm-continuous-on-a-rectangle-is-riemann-integrable supplies exactly the missing premise. It is now a direct dependency and cited in F3 alongside the compact-integral convention; the normalized bump and all compact convolution integrals meet its continuity and rectangle hypotheses.",
    "status": "fixed"
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "no-update-required",
    "id": "def-ip-distributions-conormal-kernels-and-cotangent-relation",
    "reason": "All eleven dependency/reference consumers are draft members of the frozen frontier. No direct published or outside-frontier mathematical consumer was found by scanning items/, library/ and articles/. No published repair or separate outside maintenance edit is proposed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-ip-smooth-whitney-extension-on-compact-sets",
    "model": "gpt-6-luna",
    "context_sha256": "2f67e010f12eff717b7bf7f7613debd3343df2a29d4b4e48562964ecfc0fdc8a",
    "outcome": "false_positive",
    "reason": "Record the exact false_positive adjudication above for this rejected model/context tuple; preserve original round evidence and use the matching current review hashes.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "decision_pointer": "/decisions/0"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "def-ip-hyperbolic-dirichlet-to-neumann-map",
    "model": "gpt-6-luna",
    "context_sha256": "6e42b90e28d9ea28b2035aca49a1bd49c4a86ef87aa21bfa1a123f66ba0548a5",
    "outcome": "false_positive",
    "reason": "Record the exact false_positive adjudication above for this rejected model/context tuple; preserve original round evidence and use the matching current review hashes.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "decision_pointer": "/decisions/1"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-ip-simple-geometry-global-eikonal-geometric-optics",
    "model": "gpt-6-luna",
    "context_sha256": "003b9bf34d88d4c5537d8a364b6aac2414c9b9e8d2dd54816f56ffde29ab3d78",
    "outcome": "false_positive",
    "reason": "Record the exact false_positive adjudication above for this rejected model/context tuple; preserve original round evidence and use the matching current review hashes.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "decision_pointer": "/decisions/2"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "ex-ip-40-ray-limit-error-accounting",
    "model": "gpt-6-luna",
    "context_sha256": "19f51b1ceebe7310c3f6de7b924706a2bfa1e9080690eb1b38d9c7afa2c99bab",
    "outcome": "confirmed_fatal",
    "reason": "Record the exact confirmed_fatal adjudication above for this rejected model/context tuple; preserve original round evidence and use the matching current review hashes.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "dependency_citation",
    "decision_pointer": "/decisions/3"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "thm-ip-wave-data-determine-light-ray-integrals",
    "model": "gpt-6-luna",
    "context_sha256": "36612ea4d81fa3f3f2e727f6a3f10a757b7e8ec14b5a3073b183b6f72fabf7f2",
    "outcome": "false_positive",
    "reason": "Record the exact false_positive adjudication above for this rejected model/context tuple; preserve original round evidence and use the matching current review hashes.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "decision_pointer": "/decisions/4"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "ex-ip-40-finite-time-invisible-perturbation",
    "model": "gpt-6-luna",
    "context_sha256": "bc4b4c0f4664cd39c55160eb676f7bc806980e4ed46583d33df301ed8027c9e7",
    "outcome": "confirmed_nonfatal",
    "reason": "Record the exact confirmed_nonfatal adjudication above for this rejected model/context tuple; preserve original round evidence and use the matching current review hashes.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "decision_pointer": "/decisions/5"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "ex-ip-40-simple-geometry-adequate-observation-time",
    "model": "gpt-6-luna",
    "context_sha256": "cabb66eb36354449f809970348426aeb99a87bba0c40301944c3cd9b8529a66f",
    "outcome": "confirmed_nonfatal",
    "reason": "Record the exact confirmed_nonfatal adjudication above for this rejected model/context tuple; preserve original round evidence and use the matching current review hashes.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "decision_pointer": "/decisions/6"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "lem-ip-variable-metric-domain-of-dependence",
    "route": "frontier-owner",
    "severity": "nonfatal",
    "affected_use": "items/lem-ip-variable-metric-domain-of-dependence.md: Statement begins “Let (M,g) be a compact, connected, nonempty ...” while Given assumes Countable Choice and A1/Proof 3.1 explicitly use it for a common null exceptional set.",
    "invalidated_claim": "The uninterrupted Statement omits the Countable Choice hypothesis under which the written proof is established; its mathematical finite-speed conclusion under the existing proof axiom is unaffected.",
    "minimality": "Carry the existing Countable Choice premise into the Statement and examine direct consumers. The owned finite-time example now explicitly assumes it; no supplier file was edited in this lane.",
    "reason": "Confirmed the Step-4 concern against the complete current source. This unassigned draft supplier requires owner routing; its existing proof and metadata already state the axiom.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "lem-ip-gaussian-beam-null-bicharacteristic",
    "route": "frontier-owner",
    "severity": "nonfatal",
    "affected_use": "items/lem-ip-gaussian-beam-null-bicharacteristic.md: final Statement paragraph invokes “the zero-boundary energy correction on the measurement cylinder”; Proof 8.1 applies F3 to −Pu_h, but the general X/P hypotheses do not specify a compact connected spatial manifold with nonempty smooth boundary and a smooth real static potential.",
    "invalidated_claim": "The energy-correction specialization needs the actual hypotheses of thm-ip-variable-metric-wave-ibvp-energy-wellposedness. The local formal beam and concentration construction does not by itself supply those solver hypotheses.",
    "minimality": "Qualify only the wave correction specialization with the exact solver setting. Do not narrow the general microlocal beam statement. The assigned ray-error application has now supplied these conditions explicitly; this supplier was not edited.",
    "reason": "While checking the actual supplier used by the assigned ray-error application, found the same omitted solver-setting qualification in its wave specialization. Route this unassigned frontier context finding to its owner.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "action": "no-update",
    "reason": "No published item was assigned or edited, and no direct item consumer/reference of either changed Example interface exists in items/ or library/. No published-consumer maintenance repair was discovered in this lane.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-nonfatal",
    "id": "lem-ip-cta-gaussian-beam-ray-limit",
    "location": "Facts F1 and external F3; Proof 1.1–2.1",
    "before_sha256": "6ec29746fb93b9c04e29597d1b482ce12a206bdadf4ff21e3a69669c04186712",
    "post_sha256": "119f77da499a0f3c684fb879132264d25d1b112b7743a3c2b025c43def77123b",
    "reason": "Record the concrete finding, repair and logical checks in decisions[0] and reviews[0]; preserve the original rejected tuple and its evidence.",
    "uncertain": false,
    "decision_pointer": "/decisions/0",
    "review_pointer": "/reviews/0"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-nonfatal",
    "id": "lem-ip-limiting-carleman-estimate-on-product",
    "location": "Statement threshold quantifier and Proof 3.1",
    "before_sha256": "e334064ac74b676511d9e7f0980590822b2b4d6c5f8f25e908cf21652c3b224b",
    "post_sha256": "a21ed791cba614a873de55cb1b9b6b1c3ee4e13104a00053caf47b4912a7e391",
    "reason": "Record the concrete finding, repair and logical checks in decisions[1] and reviews[1]; preserve the original rejected tuple and its evidence.",
    "uncertain": false,
    "decision_pointer": "/decisions/1",
    "review_pointer": "/reviews/1"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "def-ip-conductivity-dirichlet-to-neumann-map",
    "location": "Verification 1.1; supplier lem-ip-conductivity-map-wellposedness Proof 1.1",
    "before_sha256": "08a6d42712f8a31c17589b764cd05e54e8c39aaf887fc05829b850fcb14b0716",
    "post_sha256": "08a6d42712f8a31c17589b764cd05e54e8c39aaf887fc05829b850fcb14b0716",
    "reason": "Record the concrete finding, repair and logical checks in decisions[2] and reviews[2]; preserve the original rejected tuple and its evidence.",
    "uncertain": false,
    "decision_pointer": "/decisions/2",
    "review_pointer": "/reviews/2"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-nonfatal",
    "id": "lem-ip-boundary-quasimode-jets-and-borel-correction",
    "location": "Facts F3; Proof 4.1, 5.1, 5.2, 6.1",
    "before_sha256": "374b11e50b6c4f82dc44dec51bc7f5eba6914af12fa93900cd55bab54042f0a9",
    "post_sha256": "abc9c610c1c54664a7143c041f6f69c73f442234e42bfd4ba01b950c7fca3205",
    "reason": "Record the concrete finding, repair and logical checks in decisions[3] and reviews[3]; preserve the original rejected tuple and its evidence.",
    "uncertain": false,
    "decision_pointer": "/decisions/3",
    "review_pointer": "/reviews/3"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-nonfatal",
    "id": "lem-ip-cubic-dn-small-data-differentiability",
    "location": "Facts F3",
    "before_sha256": "ca910b5f2ee97849663d688c21fa8b207cc2455240ac3d928b91c9599c7d516b",
    "post_sha256": "86dd6803b384ae36d8bc26cc482f3bc2ffae282f930c99be230650ae472b791f",
    "reason": "Record the concrete finding, repair and logical checks in decisions[4] and reviews[4]; preserve the original rejected tuple and its evidence.",
    "uncertain": false,
    "decision_pointer": "/decisions/4",
    "review_pointer": "/reviews/4"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-nonfatal",
    "id": "lem-ip-cubic-dn-third-linearization-identity",
    "location": "Facts F5 and Proof 3.1",
    "before_sha256": "37d1fceb7125f754e199aeb6e3be401069579a624b6bd217378d212e0ac5828a",
    "post_sha256": "f5f51d8c183d3d8e8098e03c6d2875846c3a994897a08d4ab792c28a7eca064f",
    "reason": "Record the concrete finding, repair and logical checks in decisions[5] and reviews[5]; preserve the original rejected tuple and its evidence.",
    "uncertain": false,
    "decision_pointer": "/decisions/5",
    "review_pointer": "/reviews/5"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-nonfatal",
    "id": "thm-ip-semilinear-cubic-dn-identification",
    "location": "Facts F5 simple-surface citation; local four-factor supplier Proof 2.1",
    "before_sha256": "bae7d94e19900333f7bd953c6a19a163c4565209976a2ca600f98001bf720448",
    "post_sha256": "4937359f4386417e81871e29840296d4ca0e32bb7d8753704cb8893d11ae3647",
    "reason": "Record the concrete finding, repair and logical checks in decisions[6] and reviews[6]; preserve the original rejected tuple and its evidence.",
    "uncertain": false,
    "decision_pointer": "/decisions/6",
    "review_pointer": "/reviews/6"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-nonfatal",
    "id": "ex-ip-boundary-jets-do-not-imply-interior-uniqueness",
    "location": "Facts F2 and Proof 2.1",
    "before_sha256": "15e5a40ccd2baf5a6c1cde36f120ba8bc1e778d4b0118963da46db22bf21fb07",
    "post_sha256": "6e37357efee3b17fdb0ab48e4662b6d0b220a846268e118d0b25110d9bf92e35",
    "reason": "Record the concrete finding, repair and logical checks in decisions[7] and reviews[7]; preserve the original rejected tuple and its evidence.",
    "uncertain": false,
    "decision_pointer": "/decisions/7",
    "review_pointer": "/reviews/7"
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "no-update-required",
    "reason": "All eight assigned carriers are draft. The only Statement change is the Carleman threshold quantifier; its sole direct dependency/reference consumer is the draft frontier CGO theorem. No published or outside-frontier consumer was found, so no separate maintenance repair or published ledger entry is proposed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "thm-ip-boundary-determination-of-scalar-conductivity",
    "route": "frontier-owner",
    "severity": "nonfatal",
    "location": "Statement domain convention and Proof 1.1/F1–F2",
    "reason": "The theorem permits disconnected smooth domains, whereas its DN supplier defines maps only on connected domains. The componentwise extension is standard and valid but should be stated explicitly by its owner.",
    "evidence_pointer": "/repair_notes/outside_lane_findings/0",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "def-ip-anisotropic-conductivity-dirichlet-to-neumann-map",
    "severity": "nonfatal",
    "status": "fixed",
    "finding": "The trace-quotient lemma assumes nonempty boundary, so its unqualified attribution did not cover the empty open set. This is a citation-scope defect, not a failure of the quotient or DN map: both Sobolev spaces on the empty set are zero, and the existing fixed-atlas definition explicitly sets its empty-boundary space to zero. Split these cases without excluding any original admissible domain.",
    "evidence_report": "research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u42.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "lem-ip-anisotropic-conductivity-map-wellposedness",
    "severity": "nonfatal",
    "status": "fixed",
    "finding": "Step 4.1 used scalar-conductivity notation gamma|grad W|^2 for a matrix coefficient without declaring a quadratic-form convention. Its intended scalar energy expansion is valid by symmetry and the weak equation, so this is a notation defect, not a missing existence or boundedness argument. Replaced all three energies by (gamma grad w) dot grad w and retained the original estimate and bilinearity proof.",
    "evidence_report": "research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u42.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "thm-ip-boundary-fixing-diffeomorphism-preserves-dn-map",
    "severity": "nonfatal",
    "status": "fixed",
    "finding": "F1 overstated what the candidate definition itself establishes. The needed existence and uniqueness result was already stated in F2, listed in deps, and used explicitly in step 3.1, so this is an inaccurate fact attribution rather than an unsupported theorem. F1 now defines the candidate pairing conditionally and attributes well-posedness to F2.",
    "evidence_report": "research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u42.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "thm-ip-boundary-fixing-diffeomorphism-preserves-dn-map",
    "locus": "Facts F6 and Proof 2.1, used by 3.1 and 4.1",
    "severity": "nonfatal",
    "status": "fixed",
    "finding": "Equality of L2 traces needed the explicit kernel T=H1_0 result to identify quotient classes.",
    "correction": "Added the existing trace-kernel theorem to deps and F6, and made the quotient inference explicit in step 2.1.",
    "evidence_report": "research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u42.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "thm-ip-boundary-fixing-diffeomorphism-preserves-dn-map",
    "locus": "Choice accounting",
    "severity": "nonfatal",
    "status": "fixed",
    "finding": "The integrated Riemannian proof uses the CC change-of-variables supplier, contrary to the old choice-free claim.",
    "correction": "Restricted choice-free accounting to the pointwise tensor calculation and recorded CC for the integrated argument.",
    "evidence_report": "research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u42.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "published-consumer-ledger",
    "path": "research/published-consumer-supplier-ledger.md",
    "action": "record-consumer-examination",
    "supplier": "def-ip-anisotropic-conductivity-dirichlet-to-neumann-map",
    "consumers": [
      "lem-ip-anisotropic-conductivity-map-wellposedness",
      "thm-ip-boundary-fixing-diffeomorphism-preserves-dn-map",
      "ex-ip-anisotropic-boundary-fixing-gauge-example"
    ],
    "published_consumers": [],
    "finding": "The definition now separates the nonempty trace-lemma application from the empty-boundary zero-space convention. All direct item consumers are draft original-frontier items and retain sound uses; no published item or outside-frontier consumer was identified by the dependency/reference search. No published repair or maintenance request is required.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-finding",
    "id": "alg-ip-regularized-born-reconstruction",
    "severity": "nonfatal",
    "location": "frontmatter",
    "finding": "axiom_use incorrectly says Countable Choice is assumed only for Picard despite both Born suppliers explicitly assuming it.",
    "disposition": "item-repaired-metadata-pending",
    "reason": "The fixed-frequency Definition begins \"Assume Countable Choice\", and the Born-linearization Statement repeats that assumption; axiom_use incorrectly restricted it to Picard. This is nonfatal axiom-accounting metadata: def-countable-choice and both Born suppliers were already declared dependencies, and the finite filter operates on a supplied matrix and reduced SVD. Corrected axiom_use and its reference label without changing the Definition.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "def-ip-pde-solver-admissibility-contract",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The reference-element Definition permits any finite-dimensional continuous shape-function space, with no polynomial hypothesis. Replaced polynomial space by finite-dimensional shape-function space; unisolvence and every solver/certificate assumption remain intact. This is an inaccurate restatement, not a failure of the adjoint or certificate arguments.",
    "repair": "See assigned item and corresponding review; preserve the original tuple and round evidence.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-ip-finite-element-reduced-gradient-from-discrete-adjoint",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "F1 and F2 cite the specialized finite-element contract for identities assumed directly on the lemma's arbitrary C1 maps and fixed q in O. The state identity and adjoint equation are explicit hypotheses, so the chain-rule/transpose proof is valid. Restated both facts as hypotheses, retaining invertibility for unique adjoint solvability and preserving the full Statement.",
    "repair": "See assigned item and corresponding review; preserve the original tuple and round evidence.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "alg-ip-finite-element-pde-tikhonov",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "defect_type": "logic",
    "reason": "The tuple's projection objection is unfounded: the supplied contract permits projection failure only when its declared finite call budget is exhausted. Nevertheless this rejected carrier has the fatal Step-4 concern: trial objective evaluation may fail on a nonlinear state solve with budget remaining, while step 7 only handles linear-solve failure or evaluation-budget exhaustion and then uses a nonexistent interval. Replaced linear solve by state or adjoint solve and included the global solve budget, matching step 6 and the actual contract. This repairs a missing operational branch, not a projection defect.",
    "repair": "See assigned item and corresponding review; preserve the original tuple and round evidence.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "cex-ip-pde-biased-under-solved-adjoint-gradient",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "F4 reverses the status theorem's necessary-condition interface, although algorithm step 3 (F2) already supplies the rejection used in step 3.1. Rephrased F4 as an only-on implication and made the rejection depend on F2 alone. The witness still gives exact gradient -1, unchecked gradient +1 and adjoint residual 2 exceeding tolerance 1.",
    "repair": "See assigned item and corresponding review; preserve the original tuple and round evidence.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "ex-ip-pde-cfl-invalid-iterate",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "F4 reverses the theorem's only-on condition. Algorithm step 1 (F3) already proves the required sufficient rejection implication, so the example remains valid. Corrected F4 to a necessary-condition restatement and removed it from the sufficient implication in step 3.1; the CFL calculation and Example section are unchanged.",
    "repair": "See assigned item and corresponding review; preserve the original tuple and round evidence.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "route-presentation-maintenance",
    "id": "def-operator-norm",
    "path": "items/def-operator-norm.md",
    "location": "Definition",
    "source_excerpt": "$T:X\\to Y$ be bounded in the sense of [[def-bounded-linear-operator]]. The",
    "affected_use": "A published prerequisite retains hyperlinks inside its complete defining section; this is the current-byte presentation alert already present in the Step-4 batch digest.",
    "invalidated_claim": "No mathematical claim is invalidated by this presentation finding.",
    "minimality": "Move links to the immediately following references section while preserving complete hypotheses, claim and publication status; outside this assignment, so no item edit or Step-5 adjudication is claimed.",
    "status": "open",
    "route": "owner/separate-maintenance",
    "reason": "Confirmed the exact current inline-link occurrence in the published prerequisite. This proposal preserves the original read-only digest and supplies no audit, repair or whole-item mathematical acceptance.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "route-presentation-maintenance",
    "id": "def-linear-elliptic-pde-constrained-control-problem",
    "path": "items/def-linear-elliptic-pde-constrained-control-problem.md",
    "location": "Definition",
    "source_excerpt": "Here $H^1_0=W^{1,2}_0$ is the closure of $C_c^\\infty(\\Omega;\\mathbb R)$ in the $W^{1,2}$ norm of [[def-wkp-zero-as-a-sobolev-closure]]. Under Countable Choice, $H$ and $V$ are real Hilbert spaces; the local proof of completeness of $V$ is included in [[thm-linear-elliptic-control-state-and-adjoint-wellposedness]]. The inclusion $J:V\\to H$ is continuous with $\\|J\\|\\le1$.",
    "affected_use": "A published prerequisite retains hyperlinks inside its complete defining section; this is the current-byte presentation alert already present in the Step-4 batch digest.",
    "invalidated_claim": "No mathematical claim is invalidated by this presentation finding.",
    "minimality": "Move links to the immediately following references section while preserving complete hypotheses, claim and publication status; outside this assignment, so no item edit or Step-5 adjudication is claimed.",
    "status": "open",
    "route": "owner/separate-maintenance",
    "reason": "Confirmed the exact current inline-link occurrence in the published prerequisite. This proposal preserves the original read-only digest and supplies no audit, repair or whole-item mathematical acceptance.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "route-presentation-maintenance",
    "id": "thm-linear-elliptic-control-state-and-adjoint-wellposedness",
    "path": "items/thm-linear-elliptic-control-state-and-adjoint-wellposedness.md",
    "location": "Statement",
    "source_excerpt": "Assume Countable Choice and the setting of [[def-linear-elliptic-pde-constrained-control-problem]]. For every $q\\in U$, there is a unique state $u(q)\\in V$ satisfying",
    "affected_use": "A published prerequisite retains hyperlinks inside its complete defining section; this is the current-byte presentation alert already present in the Step-4 batch digest.",
    "invalidated_claim": "No mathematical claim is invalidated by this presentation finding.",
    "minimality": "Move links to the immediately following references section while preserving complete hypotheses, claim and publication status; outside this assignment, so no item edit or Step-5 adjudication is claimed.",
    "status": "open",
    "route": "owner/separate-maintenance",
    "reason": "Confirmed the exact current inline-link occurrence in the published prerequisite. This proposal preserves the original read-only digest and supplies no audit, repair or whole-item mathematical acceptance.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "route-presentation-maintenance",
    "id": "thm-elliptic-adjoint-reduced-gradient",
    "path": "items/thm-elliptic-adjoint-reduced-gradient.md",
    "location": "Statement",
    "source_excerpt": "Assume Countable Choice and the elliptic state setting of [[def-parameterized-elliptic-variational-problem]] and [[lem-elliptic-state-map-c1-under-uniform-coercivity]]. Let $J:V\\times\\Theta\\to\\mathbb R$ be $C^1$. For a parameter $\\theta$, let $p_\\theta\\in V$ solve the adjoint variational problem",
    "affected_use": "A published prerequisite retains hyperlinks inside its complete defining section; this is the current-byte presentation alert already present in the Step-4 batch digest.",
    "invalidated_claim": "No mathematical claim is invalidated by this presentation finding.",
    "minimality": "Move links to the immediately following references section while preserving complete hypotheses, claim and publication status; outside this assignment, so no item edit or Step-5 adjudication is claimed.",
    "status": "open",
    "route": "owner/separate-maintenance",
    "reason": "Confirmed the exact current inline-link occurrence in the published prerequisite. This proposal preserves the original read-only digest and supplies no audit, repair or whole-item mathematical acceptance.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "route-presentation-maintenance",
    "id": "lem-fem-control-gradient-residual-bound",
    "path": "items/lem-fem-control-gradient-residual-bound.md",
    "location": "Statement",
    "source_excerpt": "Assume the continuous problem of [[def-linear-elliptic-pde-constrained-control-problem]], Countable Choice, and a finite-dimensional conforming subspace $V_h\\subset V$. Let $u=u(q)$ and $p=p(q)$ be the exact state and adjoint. Let $\\tilde u,\\tilde p\\in V_h$ be computed state and adjoint, where $\\tilde p$ uses $\\tilde u$ in its right-hand side. Suppose the primal and transposed discrete variational problems meet the form-linearity, load-linearity, boundedness and coercivity hypotheses of [[thm-first-strang-lemma-for-conforming-perturbed-galerkin]]. Let $\\varepsilon_u$ be the first-Strang right-hand side for the primal problem, and let $\\varepsilon_p$ be that right-hand side for the adjoint problem when its load defect includes the additional term $\\|J\\|^2\\varepsilon_u$. Then",
    "affected_use": "A published prerequisite retains hyperlinks inside its complete defining section; this is the current-byte presentation alert already present in the Step-4 batch digest.",
    "invalidated_claim": "No mathematical claim is invalidated by this presentation finding.",
    "minimality": "Move links to the immediately following references section while preserving complete hypotheses, claim and publication status; outside this assignment, so no item edit or Step-5 adjudication is claimed.",
    "status": "open",
    "route": "owner/separate-maintenance",
    "reason": "Confirmed the exact current inline-link occurrence in the published prerequisite. This proposal preserves the original read-only digest and supplies no audit, repair or whole-item mathematical acceptance.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "lem-ip-planar-measurable-beltrami-cgo-solutions",
    "model": "gpt-6-luna",
    "context_sha256": "30ba240bbc495d3e7d2b459ef5e7374afa273210c09b465072ff1c98150e83c9",
    "severity": "nonfatal",
    "status": "fixed",
    "reason": "F2 omitted the fixed support radius and target disk from its uniformity claim. The actual proof uses only coefficients supported in D1 (steps 1.1, 2.1, 6.1), and the Statement already gives the S-dependent inverse-gradient constant. Corrected F2 to the supplier’s R,S-dependent estimates with R=1 here; no statement change or missing estimate remains. Checked similarity, Fredholm solvability, exponential normalization and the unit-parameter inverse-gradient argument.",
    "uncertain": false,
    "source_urls": [
      "https://annals.math.princeton.edu/wp-content/uploads/annals-v163-n1-p05.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "def-ip-calderon-weak-dn-map-for-bounded-conductivities",
    "model": "gpt-6-luna",
    "context_sha256": "c9a0112e9c60fec8f281d60cc4eec2bcc110a1060276b5e2c1c79e8968c351aa",
    "severity": "nonfatal",
    "status": "fixed",
    "reason": "The Gamma notation was imported outside its declared cube-domain scope. Replaced it by its explicit real L-infinity ellipticity condition, retaining arbitrary bounded smooth domains and making the inherited d>=2 explicit. Translation and dilation into the unit cube transport H1, H01, trace cosets and weak energy equations, so the justified-by theorem applies without narrowing the geometric scope. The dual convention and constant quotient are unchanged.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/1701.06480"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-false-positive",
    "id": "lem-ip-calderon-rough-dn-map-wellposedness",
    "model": "gpt-6-luna",
    "context_sha256": "f41d66a3fe48f6780ce20ee942fe125589010bdb8a1ce58bb8c133e9466472c5",
    "severity": "none",
    "status": "false_positive",
    "reason": "False positive after reading the complete Poincare supplier: its proof steps 2.1 and 3.1 derive ||u||p <= (b-a)||Du||p and explicitly conclude C(p)=1. On the unit slab this yields ||w||2<=||grad w||2, hence H1 coercivity m/2 and the stated Lax-Milgram estimates. Checked uniqueness, representative independence, conjugate dual linearity, boundedness and descent through constants. The clarified DN definition has exactly the same cosets and energy pairing.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-false-positive",
    "id": "lem-ip-planar-conductivity-cgo-logarithmic-phases",
    "model": "gpt-6-luna",
    "context_sha256": "bcb525d4fe3f42f5c6cfb5781d00083bf0aaf1858ab409ffec07e5f2b43eae99",
    "severity": "none",
    "status": "false_positive",
    "reason": "The cited measurable-CGO proof explicitly establishes similarity F=c exp(a) in step 2.1, including nonzero limiting constants, exactly as identified by this item’s Statement references and F1. Step 4.1 here derives rotation continuity from the operator-norm-continuous Fredholm family and its resolvent, then lifts normalized logarithms. Thus neither ingredient is absent from the supplied arguments. Checked G=Mplus-it Mminus, positive ratio, rotated combination, continuity at B=0 via connected rotation circle, winding-one surjectivity and uniform Holder bounds.",
    "uncertain": false,
    "source_urls": [
      "https://annals.math.princeton.edu/wp-content/uploads/annals-v163-n1-p05.pdf",
      "https://arxiv.org/pdf/1701.06480"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "lem-ip-bv-translation-modulus-for-conductivity",
    "model": "gpt-6-luna",
    "context_sha256": "b7565535d6950f5d2f9618dbc4149f91e4722436ac88dbf53c4d57a97f282794",
    "severity": "nonfatal",
    "status": "fixed",
    "reason": "The pointwise translation definition alone does not imply preservation of null-equivalence classes. Added the existing published translation-invariance theorem to deps and F3; step 2.1 now shows that changing representatives on N changes shifted values only on the null translate N-h. Constants then cancel pointwise for compatible representatives, hence for classes. The BV extension bound, L1 estimate V0|h| and Lp interpolation with the 2B bound are unchanged; this is a routine citation gap, not a false estimate.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-false-positive",
    "id": "lem-ip-planar-scattering-dbar-equation-and-parameter-bounds",
    "model": "gpt-6-luna",
    "context_sha256": "cdfff429fb783c5bec18ada0beda1f8d4ccd6315e2b65e05399756dc60dce79e",
    "severity": "none",
    "status": "false_positive",
    "reason": "False positive: conductivity-CGO proof step 3.1 proves f_(lambda mu)=(A+lambda B)/2 and u_gamma(z,k)=f_(lambda(z,k) mu)(z,k), with lambda=conjugate(B)/B (arbitrary if B=0). The measurable-CGO Statement bounds every such principal phase uniformly, so |Phi|<=S+C and |u|=|exp(ik Phi)|>=exp(-|k|(S+C)); this is not an inference from positivity alone. Checked parameter resolvent smoothness, forced derivative bounds, rank-one Qk derivative, the -i tau conjugate(u) sign and exterior Schwarz estimate.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/1701.06480",
      "https://annals.math.princeton.edu/wp-content/uploads/annals-v163-n1-p05.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "lem-ip-calderon-planar-beltrami-dbar-logarithmic-stability",
    "model": "gpt-6-luna",
    "context_sha256": "8719ac90c4d751adb670370cb210253bd01e4033e0f99fe3db8a0afeec3eb6f9",
    "severity": "nonfatal",
    "status": "fixed",
    "reason": "The zero-separation supplier requires ell!=0, whereas step 2.1 originally claimed applicability also for w=z. Added the explicit trivial branch w=z before applying it, and used its threshold only for w!=z; at zero measurement error, a hypothetical w!=z contradicts g(1)=0. The resulting distance bound and Holder/interpolation chain are unchanged. Checked the uniform phase asymptotic, measurable bounded sigma, forcing derivative independent of w, reciprocal-pair reconstruction, negative-gradient exponent and saturated/zero-data cases.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "path": "research/published-consumer-supplier-ledger.md",
    "action": "record-scoped-disposition",
    "reason": "All assigned items and all eleven examined direct or actual-use consumers are draft members of the frozen frontier. No published carrier was edited and no necessary outside-frontier consumer repair was found. Published Poincare and null-set translation suppliers were checked only for their exact uses; this is not a whole-item audit or new acceptance.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-defect",
    "id": "lem-ip-concave-modulus-hilbert-ball-intersection",
    "outcome": "confirmed_nonfatal",
    "severity": "nonfatal",
    "disposition": "fixed",
    "reason": "The reciprocal tolerance in steps 2.1 and 5.1 requires positive indices. Explicitly indexing n≥1 repairs this endpoint notation; the finite weighted inequality, active-set variance argument and projection-limit intersection argument remain valid under AC. No Statement changed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-defect",
    "id": "def-ip-generalized-fourier-neural-operator",
    "outcome": "confirmed_fatal",
    "severity": "fatal",
    "disposition": "fixed",
    "defect_type": "logic",
    "reason": "On the unit-mass zero-dimensional torus the integral is Kv. Requiring c=r and K=I_c in the intended n=d identity branch makes the channel interface consistent without altering its intended architecture. Corrected the source locator after consulting equations (4.15)–(4.18).",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/2511.20361"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-defect",
    "id": "lem-ip-boundary-spectral-counting-and-sobolev-scale",
    "outcome": "confirmed_nonfatal",
    "severity": "nonfatal",
    "disposition": "fixed",
    "reason": "F3 requires Countable Choice, not full AC. Reworded A1 to state the implication AC⇒CC and the actual spectral interface assumption while retaining the original Statement. The weak resolvent, compact inclusion, spectral form norm and rank-nullity counting proof are valid; the diagram arrows correctly compose K=J K-tilde.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-false-positive",
    "id": "lem-ip-fno-torus-compact-universality",
    "outcome": "false_positive",
    "reason": "The supplier proof explicitly uses continuous-periodic Lp density in A3/step 1.2 and L2 Hilbert completeness in A4/step 3.1. Both cited suppliers explicitly assume Countable Choice. Thus A1 accurately identifies inherited CC interfaces; it does not claim CC is logically necessary. The finite-projection, coefficient-network and synthesis argument remains sound, including both sine and cosine modes.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-defect",
    "id": "thm-ip-hilbert-schmidt-operator-admits-square-integrable-kernel",
    "outcome": "confirmed_nonfatal",
    "severity": "nonfatal",
    "disposition": "fixed",
    "reason": "The body correctly constructs only zero-constant extensions of mean-zero Hilbert–Schmidt operators. Clarified the display title to name that domain; no Statement or mathematical conclusion changed. Orthogonal finite kernel sums converge in product L2 with exact HS norm; density extends operator equality, and countable section coefficients give uniqueness and both zero means.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-defect",
    "id": "def-ip-mean-zero-ntd-and-smoothed-kernel-observation",
    "outcome": "confirmed_nonfatal",
    "severity": "nonfatal",
    "disposition": "fixed",
    "reason": "The hidden collar, ellipticity, regularity and positive-radius parameters of X_d(R) were not bound in this Definition. Explicitly fixed exactly Ω′, m>0, M≥max{1,m}, R>0, 0<α<1 from the actual class supplier. The weak Neumann map, spectral multiplier (r_2=0 and r_d>0 otherwise), projection and zero-mean extension conventions are unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-defect",
    "id": "lem-ip-meyers-higher-integrability-for-interior-conductivity-solutions",
    "outcome": "confirmed_fatal",
    "severity": "fatal",
    "disposition": "fixed",
    "defect_type": "dependency_citation",
    "reason": "F4 only supplies the energy bound for domains inside the unit cube. Its scope is now stated accurately, and step 5.1 transports an arbitrary bounded smooth domain by S(x)=a+ell x. The flux transforms as F-hat=ell^(2-d) F∘pullback on the trace quotient, and gradient norms scale as ell^(d/2-1). This establishes the original Neumann conclusion without changing the Statement.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-defect",
    "id": "lem-ip-ntd-boundary-smoothing-for-fixed-background-collar",
    "outcome": "confirmed_fatal",
    "severity": "fatal",
    "disposition": "fixed",
    "defect_type": "dependency_citation",
    "reason": "F1 and the spectral/chart suppliers in F3 require d≥2 and a domain inside the unit cube; the actual trace-quotient supplier F2 already permits arbitrary bounded C1 domains. Made the normalized scope used below explicit. New proof steps 1.1–1.2 handle the interval case directly and transport every higher-dimensional domain by a similarity: quotient fluxes scale by ell^(2-d), NtD conjugation by ell, and eigenvalues by ell^(-2). The half-order identification, collar induction, Rellich estimate and symmetric matrix decay then establish the unchanged full Statement.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-defect",
    "id": "lem-ip-eit-forward-continuity-and-class-compactness",
    "outcome": "confirmed_nonfatal",
    "severity": "nonfatal",
    "disposition": "fixed",
    "reason": "The class definition allows m>1, whereas F7 requires m≤1. Step 1.1 now disposes of m>1: the positive-measure fixed background collar makes X_d(R) empty, so compactness and pairwise continuity claims are vacuous. For m≤1 every F7 hypothesis holds. The BV lower-semicontinuity closure, C1 Ascoli closure and bounded-Linfinity interpolation arguments then prove the unchanged Statement.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-defect",
    "id": "op-ip-finite-sample-generalization-of-neural-inverse-maps",
    "outcome": "confirmed_nonfatal",
    "severity": "nonfatal",
    "disposition": "fixed",
    "reason": "The formulation used C_star omega_star(delta) without binding the inverse extension or its modulus. It now fixes a global exact-data inverse extension and its displayed concave stability bound, with constants independent of sample size, architecture budgets and joint laws; AC and CC are explicit. This licenses the deterministic triangle-inequality noise term while leaving minimax rates unresolved. The EIT source page locator is corrected from 23–30 to 31–34 and 37–45.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/2511.20361"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-defect",
    "id": "ex-ip-eit-fno-continuum-vs-finite-element-experiment",
    "outcome": "confirmed_nonfatal",
    "severity": "nonfatal",
    "disposition": "fixed",
    "reason": "The compactness objection is false: supplier proof step 1.1 explicitly proves that the full noisy input sum is compact. Its use in this example is mathematically sound, as is the distance-to-finite-set witness. A separate confirmed nonfatal defect from the Step-4 digest is the source locator: Theorem 4.8 is on pp.31–34, §5 on pp.37–45 and Appendix C starts p.61. Corrected that locator and made F1 name the exact gamma/eta quantification and compact-sum proof.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/2511.20361"
    ],
    "familiar": true
  },
  {
    "ledger": "published-consumer-ledger",
    "path": "research/published-consumer-supplier-ledger.md",
    "action": "no-update-required",
    "reason": "Every assigned carrier and every discovered direct consumer of the changed definitions is draft. No published repair, new publication, audit or independent acceptance is claimed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "route-outside-lane-finding",
    "id": "lem-ip-interior-neumann-modes-and-kernel-forward-continuity",
    "disposition": "owner-repair-required",
    "affected_use": "F1 names the collar lemma’s boundary difference-quotient induction as step 1.2; canonical renumbering puts it at step 1.4. Its F3 and F4 also use unit-cube weak Neumann and spectral interfaces for an arbitrary smooth bounded domain.",
    "invalidated_claim": "The F1 numerical locator is stale. The arbitrary-domain uses of the other suppliers need an explicit similarity reduction; the estimates themselves are preserved by the scaling argument now in the collar proof.",
    "minimality": "Replace the single F1 locator by step 1.4 and add a fixed-domain similarity reduction before the arbitrary-domain energy and spectral-summability applications. Do not alter its Statement.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-ip-unrolled-regularization-architecture",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "location": "Definition, differentiation paragraph",
    "reason": "The original AD clause allowed a smooth graph extension without requiring nearby parameter values to remain inside the actual deployed Borel domains. For N=1, A=y=1, x_0=0, step eta, and B(v)=v restricted to v=0, the identity graph has tangent 1 at eta=0 although the deployed map is defined only there. The repair requires an open parameter neighborhood of actual deployed evaluations and graph agreement throughout it, so the finite C1 graph theorem now establishes the deployed derivative.",
    "repair": "Added open-neighborhood admissibility of the actual deployed family and equality with the differentiated graph; item and owning manifest mirror repaired.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-ip-truncated-landweber-versus-learned-unrolling",
    "outcome": "confirmed_nonfatal",
    "location": "Example; Given; F1; Verification steps 1.1-1.2",
    "reason": "The cited procedure explicitly takes a discrepancy factor tau>1, omitted from the original example invocation. This is a specification omission rather than a false scalar conclusion: delta=0 gives tau*delta=0 for every allowed factor, and a*abs(xdagger)*(1-omega*a^2)^k remains positive through k=N. The repair supplies arbitrary tau>1 in the Example and Given clause, states the exact residual test in F1, and verifies its failure even at N.",
    "repair": "Supplied arbitrary tau>1 and explicitly evaluated the discrepancy threshold; synchronized the assigned manifest and proof-contract entries.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "retain-maintenance-route",
    "id": "def-proper-closed-convex-function-on-rn",
    "route": "outside-frontier-maintenance",
    "reason": "Confirmed the existing Step-4 digest presentation alert: its published Definition still embeds [[def-convex-and-strictly-convex-functionals-on-a-banach-space]] in the endpoint-convention sentence. Move that link after the complete Definition while preserving 0*(+infinity)=0. This is an outside supplier, not a new assigned adjudication or publication audit.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "retain-maintenance-route",
    "id": "thm-proximal-operator-existence-resolvent-firm-nonexpansive",
    "route": "outside-frontier-maintenance",
    "reason": "Confirmed the existing Step-4 digest presentation alert: its published Statement embeds [[def-proper-closed-convex-function-on-rn]] in its opening epigraph-convention clause. Move the link after the complete Statement while preserving its hypotheses. No mathematical defect is inferred from that presentation issue; this outside supplier was not edited or adjudicated.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-ip-pnp-ista-with-denoiser",
    "outcome": "confirmed_nonfatal",
    "severity": "nonfatal",
    "location": "statement",
    "reason": "The cited learned-estimator definition requires a Borel map trained under a specified corruption law, whereas this definition intends an arbitrary supplied total map. Calling the latter a denoiser without distinguishing the interfaces is a real terminology defect. It is nonfatal: C1 g and a total deterministic map uniquely determine every finite iterate by recursion, with no measurability, training, or convergence inference. Replaced the input wording and explicitly distinguished the broader plug-in role from the trained-denoiser interface, preserving all admissible maps and the recurrence.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/2005.07685"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-ip-diffusion-inverse-method-families-and-exactness",
    "location": "Verification 1.5",
    "severity": "fatal",
    "defect_type": "logic",
    "disposition": "fixed",
    "reason": "Verification 1.5 changed the observation space from the Example’s R^p to a singleton and used A:R to {star}; it therefore did not instantiate the stated hypotheses. Repaired with d=p=1, y=0, A(x)=0, observation law delta0 on Borel R and likelihood one relative to delta0. The exact two-step reverse kernels still yield completion probability 1/2 and completed output delta0 instead of (delta0+delta1)/2.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "route-maintenance",
    "id": "def-invariant-and-stationary-distribution-for-a-markov-kernel",
    "route": "separate-published-maintenance",
    "severity": "presentation",
    "disposition": "reported-unedited",
    "affected_use": "The published Definition embeds [[def-measure-kernel-and-probability-kernel]] and [[def-probability-measure]] in its opening sentence, with further inline links before the complete Definition ends. The assigned Example cites its invariant-measure integral identity as F3 in Verification 1.4.",
    "invalidated_claim": "No mathematical claim is invalidated: the invariance identity used in F3 is sound. The existing hyperlinks violate the uninterrupted-definition presentation rule.",
    "minimality": "The maintenance owner should move all Definition hyperlinks to a following Definition references section, preserving the entire mathematical interface, and perform the required direct-consumer examination for that section edit. No published item was edited or adjudicated by this unit.",
    "evidence_path": "research/inverse-problems-knot-theory-all-109-2026-10-19-batch-50-step5-context.json",
    "source_path": "items/def-invariant-and-stationary-distribution-for-a-markov-kernel.md",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-ip-inversebench-black-hole-imaging",
    "severity": "fatal",
    "defect_type": "logic",
    "status": "fixed",
    "locus": "items/ex-ip-inversebench-black-hole-imaging.md#Verification (original step 2.1)",
    "reason": "Original Verification 2.1 inferred all F1 fields from observation maps and split sizes, although neither a loss nor an uncertainty diagnostic was supplied. This is an unsupported instantiation inference, hence a fatal logic defect. Added an explicit conditional empirical benchmark with squared loss, radius-ball coverage and its target, actual-list laws, and supplied method/budget/status records; preserved the complete physical Example.",
    "uncertain": false,
    "source_urls": [
      "https://proceedings.iclr.cc/paper_files/paper/2025/file/e297068f5ec7f483a017948715b591fb-Paper-Conference.pdf",
      "https://raw.githubusercontent.com/devzhk/InverseBench/1db5932bc2995504491663d1e2c498e7317c5404/inverse_problems/blackhole.py"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-ip-inversebench-first-born-scattering",
    "severity": "fatal",
    "defect_type": "logic",
    "status": "fixed",
    "locus": "items/ex-ip-inversebench-first-born-scattering.md#Verification (original step 2.1)",
    "reason": "Original Verification 2.1 asserted F1 instantiation without evaluation loss, uncertainty diagnostic, or compute/evaluation protocol. The cosine cutoff curates inputs and cannot supply reconstruction loss. This unsupported inference is a fatal logic defect. Added actual-list empirical laws, squared loss, ball-coverage diagnostic, supplied procedures and finite budgets, and explicit failure accounting without changing the fixed-incident-field Example.",
    "uncertain": false,
    "source_urls": [
      "https://proceedings.iclr.cc/paper_files/paper/2025/file/e297068f5ec7f483a017948715b591fb-Paper-Conference.pdf",
      "https://raw.githubusercontent.com/devzhk/InverseBench/1db5932bc2995504491663d1e2c498e7317c5404/inverse_problems/inverse_scatter.py"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-ip-inversebench-full-waveform-inversion",
    "severity": "fatal",
    "defect_type": "logic",
    "status": "fixed",
    "locus": "items/ex-ip-inversebench-full-waveform-inversion.md#Verification (original step 2.1)",
    "reason": "Original Verification 2.1 inferred F1 population fields from sample counts and solver settings. Counts determine neither joint test atoms nor fitting/validation laws, loss, uncertainty diagnostic or comparison budgets. This invalid inference is a fatal logic defect. Added specified conditional empirical laws with y_i=F(i), squared loss, ball coverage, and supplied method/compute/status records; all original physical settings remain intact.",
    "uncertain": false,
    "source_urls": [
      "https://proceedings.iclr.cc/paper_files/paper/2025/file/e297068f5ec7f483a017948715b591fb-Paper-Conference.pdf",
      "https://raw.githubusercontent.com/devzhk/InverseBench/1db5932bc2995504491663d1e2c498e7317c5404/inverse_problems/acoustic.py",
      "https://raw.githubusercontent.com/devitocodes/devito/v4.8.12/examples/seismic/acoustic/wavesolver.py",
      "https://raw.githubusercontent.com/devitocodes/devito/v4.8.12/devito/types/dense.py"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-ip-inversebench-multicoil-mri",
    "severity": "fatal",
    "defect_type": "logic",
    "status": "fixed",
    "locus": "items/ex-ip-inversebench-multicoil-mri.md#Verification (original step 2.1)",
    "reason": "Original Verification 2.1 treated unspecified raw noise as the probability kernel required by F1. A raw-noise label supplies no such law, so the claimed instantiation was a fatal logic error. Added K(.|i)=delta_y_i on supplied labelled raw-data cases, with the corresponding conditional residual law, empirical fitting/validation/test laws and explicit evaluation protocol. This is conditional replay, not an invented physical acquisition law.",
    "uncertain": false,
    "source_urls": [
      "https://proceedings.iclr.cc/paper_files/paper/2025/file/e297068f5ec7f483a017948715b591fb-Paper-Conference.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "no-update-required",
    "reason": "All four assigned carriers are draft. Repairs affect only Facts & Assumptions and Verification, with original Example sections, dependencies and all Statement/Definition interfaces unchanged. No published-consumer defect was identified in this assignment.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "op-ip-neural-operator-sample-complexity-for-inverse-maps",
    "outcome": "confirmed_fatal",
    "severity": "fatal",
    "disposition": "fixed",
    "reason": "The unconditional selector premise fails for empty small-budget architecture classes. Repaired with a nonempty-class condition and explicit infinite-risk convention; retain the fatal finding in this round.",
    "post_sha256": "46a4143992fa1a5ee51067bf0917b7c2d59a3afa7bbe79b0b328e269b2cf7898",
    "evidence_report": "research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u52.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "logic"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-ip-neural-inverse-finite-samples-need-class-control",
    "outcome": "confirmed_nonfatal",
    "severity": "nonfatal",
    "disposition": "fixed",
    "reason": "The scalar Lipschitz tent lower bound is sound; its title incorrectly called the targets inverse maps. Title now matches the proved function class.",
    "post_sha256": "fcf03cf6c1a03a8b6872c05d3e4ae4f09a6fccac658337eb490ce3f90070f340",
    "evidence_report": "research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u52.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-ip-neural-inverse-mesh-truncation-modulus",
    "outcome": "confirmed_fatal",
    "severity": "fatal",
    "disposition": "fixed",
    "reason": "The noninteger m=3/2 witness violates the original tail estimate. Explicit positive-integer mesh hypothesis restores the required j>=m+1 implication.",
    "post_sha256": "f07986d6a53e90528841ceda69a8a5fb56e3ae4b0a03606238d5d2890227265e",
    "evidence_report": "research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u52.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "logic"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "ex-ip-coordinate-free-fno-inverse-risk-obstruction",
    "severity": "fatal",
    "defect_type": "logic",
    "disposition": "owner-repair-required",
    "location": "items/ex-ip-coordinate-free-fno-inverse-risk-obstruction.md:80-85, Original question",
    "affected_use": "The Original question copies the unconditional selector-existence assertion for every N,m,S,B, although its architecture class is empty at S=1.",
    "invalidated_claim": "Existence of an empirical-minimizing selector for an empty architecture class; the Example restricts its proved lower bound to admissible classes and its Verification remains sound.",
    "minimality": "Copy the nonempty-class selector condition, empty selector-set clause and inf(empty)=+infinity convention from the repaired assigned open problem into Original question. The Example statement and Verification need no change, so this repair need not propagate another interface hop.",
    "reason": "Exact copied formulation still contains the confirmed empty-class contradiction. This item is a draft frozen-frontier consumer outside the assigned write scope; route to its frontier owner rather than outside maintenance.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "published-consumer-ledger",
    "action": "no-update-required",
    "reason": "All assigned subjects and all three examined direct reference/copy consumers are draft frozen-frontier items. No affected published consumer or outside-frontier mathematical use was identified; no published repair or acceptance is proposed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-defect",
    "id": "ex-ip-real-phase-retrieval-two-dimensional-full-spark-frame",
    "outcome": "confirmed_nonfatal",
    "severity": "nonfatal",
    "disposition": "fixed",
    "location": "Example intensity-map formula",
    "reason": "The measurement definition explicitly indexes signal coordinates by k<d, hence R^2 has x_0 and x_1. The original x_2 is undefined. This is a nonfatal coordinate-label defect: the displayed vectors and all three pairwise span/independence calculations are correct, and replacing the triple by (x_0^2,x_1^2,(x_0+x_1)^2) preserves the full claim. The full-spark count corollary applies with d=2 and m=3.",
    "repair": "Changed only the signal-coordinate subscripts in the Example and manifest claim mirror; corrected inaccurate determinant wording in the owning contract boundary evidence.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-ip-eig-repeated-correlated-noise",
    "severity": "fatal",
    "defect_type": "logic",
    "location": "Example; Facts F1; Verification 2.1",
    "status": "fixed",
    "reason": "Missing additive independent Gaussian model allowed EIG=log(5)/2 at rho=0 despite the claimed log(3)/2. The Example and Given now specify theta-independent eta~N2(0,Gamma_rho), and F1 states the supplier hypotheses."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-ip-eig-singular-prior-support",
    "severity": "fatal",
    "defect_type": "logic",
    "location": "Example; Facts F2; Verification 2.1",
    "status": "fixed",
    "reason": "Unit Gaussian noise may depend on theta and give positive information even in the null measurement direction. Added the independent additive standard-normal model to Example and Given, and restored independence in the theorem restatement F2."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-ip-discrete-linear-input-state-output-experiment",
    "severity": "fatal",
    "defect_type": "logic",
    "location": "Definition, impulse-response paragraph",
    "reason": "The finite experiment defines neither u0 at q=1 nor y_{k+1} when k+1>=q, so its unqualified impulse-output assertion refers to undefined data. Repaired by explicitly defining the infinite-horizon impulse experiment and specifying its finite restriction, preserving M_k=CA^kB for all k>=0.",
    "repair": "Defined the infinite-horizon impulse recurrence and the finite restriction without changing M_k=CA^kB or the original finite experiment.",
    "post_sha256": "22dbeabeb260bb47c00dd78c5e54a53186e5dc6cbd146807890fffb3930ea548",
    "uncertain": false,
    "source_urls": [
      "https://ocw.mit.edu/courses/6-241j-dynamic-systems-and-control-spring-2011/760782bd5ceefacb37bf8719dc23dfcb_MIT6_241JS11_chap25.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "alg-ip-exact-block-hankel-realization",
    "reason": "The proposed matrices do give Ahat=0 and Chat Ahat Bhat=0, but success is the specified completion status of a procedure, not an assertion that arbitrary rank-d H0 data admit a d-state realization. The actual owning contract explicitly disclaims arbitrary-data consistency. Recovery is a separate theorem assuming M_k=CA^kB for a d-state system and rank O_q=rank R_q=d. The witness violates that hypothesis: at d=1, B and C are a row and column, so CAB=a CB=a M0 cannot equal the proposed M1. The page makes no additional unconditional claim. No algorithm edit is warranted.",
    "uncertain": false,
    "source_urls": [
      "https://ocw.mit.edu/courses/6-241j-dynamic-systems-and-control-spring-2011/760782bd5ceefacb37bf8719dc23dfcb_MIT6_241JS11_chap25.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "published-consumer-ledger",
    "action": "record-no-published-impact",
    "id": "def-ip-discrete-linear-input-state-output-experiment",
    "consumers": [],
    "reason": "Both assigned items and all eight direct consumers are draft members of the frozen frontier. No direct outside or published consumer was found; no published item or audit status was changed.",
    "uncertain": false,
    "source_urls": [
      "https://ocw.mit.edu/courses/6-241j-dynamic-systems-and-control-spring-2011/760782bd5ceefacb37bf8719dc23dfcb_MIT6_241JS11_chap25.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-wirtinger-crossing-ball-cover",
    "model": "gpt-6-luna",
    "context_sha256": "3718dd15a70879dc5836e860a1e87523300f8494bca0e4a50e165667292504a2",
    "outcome": "false_positive",
    "disposition": "false-positive",
    "reason": "The Statement explicitly asserts a relative-open cover of a strong deformation retract Y, not a three-dimensional open-ball cover of E_K. Steps 4.1 and 6.1 construct that retract and its open disks with annular overlaps; step 5.1 gives the free meridian region. Van Kampen applies in Y and the strong retraction transports its fundamental group. The title does not add a stronger mathematical hypothesis or conclusion.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "alg-knot-wirtinger-presentation-from-code",
    "model": "gpt-6-luna",
    "context_sha256": "e694caa0231b5624d11cd4a8d5b467b95e6aa450f1a02930072efec54a1b22b2",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "disposition": "fixed",
    "reason": "Independent basing paths replace each meridian by an unrelated conjugate, which need not satisfy the listed crossing relator. The Definition now requires the common upper-collar paths of the local-conjugacy lemma, with a single shared stem from an arbitrary basepoint; the rational validation, traversal, symbols and output relators are unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "thm-knot-wirtinger-presentation-correctness",
    "model": "gpt-6-luna",
    "context_sha256": "e356b7c1711650176cf46810fd829d935500e57fcbb6ea0fe2c65c8e810a38df",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "disposition": "fixed",
    "reason": "F2 attributed the free-group attaching word to a supplier that states meridian conjugacy in the completed complement. That equality alone cannot identify the kernel for van Kampen. Step 2.1 now computes the cap-boundary loop in U: the two-holed top plate gives ms eta mt^-1 eta^-1; common collar access gives alpha_s eta alpha_t^-1=mo in the upper region, hence ms mo mt^-1 mo^-1, a conjugate of the emitted relator (up to inversion). No attached cap is used in this computation. Statement unchanged.",
    "uncertain": false,
    "source_urls": [
      "https://site.uvm.edu/cmcharbo/files/2021/12/knot-group-1.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-explicit-unknot-and-figure-eight-oriented-wirtinger-codes",
    "model": "gpt-6-luna",
    "context_sha256": "b76d8af6fe6cf4b20153323ed0fe523544f9e656be01cb2dc0e4df4c0b988098",
    "outcome": "false_positive",
    "disposition": "false-positive",
    "reason": "The cited supplier proof actually constructs exactly the vertical-slab convex-cell face-to-face triangulation, in steps 1.1–4.1; F6 accurately describes this supplied construction, even though its Statement records only existence. No unsupplied construction is being imported. The finite face-disk extension is given locally in step 2.1. Exact rational recomputation confirms all 276 pairs (40 declared endpoint intersections, 236 disjoint, no overlaps), all four determinants and side tests, and the closed-three-braid visit sequence. The relator redundancy follows by the displayed cancellation. The algorithm access-path correction is compatible with the explicit common-collar hypothesis already in this Statement.",
    "uncertain": false,
    "source_urls": [
      "https://jeffe.cs.illinois.edu/teaching/comptop/2017/chapters/01-simple-polygons.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "cex-knot-kt-01-boundary-case",
    "model": "gpt-6-luna",
    "context_sha256": "8142a559124a7815dc65296b865b9a84aa1f573730e7513571c75a0f4fa1d8ad",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "reason": "F7 cited only the definition of [G,G] for the abelianization quotient, although the correct universal-abelianization theorem was already declared as F8. Corrected F7 to the actual commutator definition and F8 to the quotient plus universal property; step 1.1 now explicitly proves [Z,Z]=1 and invokes F8, and step 2.1 uses F8. The counterexample remains sound: aba=bab abelianizes to a=b with an inverse map to Z, while the two transpositions satisfy the braid relation and generate nonabelian S3. Also supplied a finite rational polygonal code for the displayed three-crossing braid, making its invocation of the finite-code constructor explicit. Statement refuted unchanged; diagram arrows, three right-starting overpasses, labels, closure and (o,L,R) triples checked.",
    "uncertain": false,
    "source_urls": [
      "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-knot-normal-circle-bundle-trivialization",
    "severity": "nonfatal",
    "disposition": "fixed",
    "location": "proof-step",
    "step": "1.1",
    "finding": "The cited normal-bundle Definition supplies a quotient set only; the original proof leaves its smooth quotient coordinates implicit.",
    "repair": "Constructed projected orthonormal frames and quotient charts, with smooth transition matrices and explicit compatibility with slice-chart quotient coordinates. No AC premise, new dependency or Statement change.",
    "adjudication": {
      "model": "gpt-6-luna",
      "context_sha256": "66c12f32ab4559388044d25efc4869c0f63174fc2787767c6a4611f56ac6a439",
      "outcome": "confirmed_nonfatal"
    },
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-knot-kt-02-worked-cases",
    "severity": "nonfatal",
    "disposition": "fixed",
    "location": "proof-step",
    "step": "3.1",
    "finding": "The original tubular-map domain has radius less than 1 and does not contain the closed radius-sqrt(2) disk required for the direct F6 application.",
    "repair": "Inserted the global smooth radial reparametrization Psi=Phi composed with h, checked its inverse and radius-1 image, and applied F6 at epsilon=1 to the identical tube and peripheral markings.",
    "adjudication": {
      "model": "gpt-6-luna",
      "context_sha256": "64f60d53aa76d3019db97697d40f49cdc70411dd52dfd2158c19c5abe4ead333",
      "outcome": "confirmed_nonfatal"
    },
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "retain-outside-assignment-alert",
    "id": "lem-zero-filling-of-fibered-knot-is-a-torus-bundle",
    "route": "existing frontier owner; no edit by unit 57",
    "source_path": "items/lem-zero-filling-of-fibered-knot-is-a-torus-bundle.md",
    "affected_use": "F4 says: under AC the preferred longitude is the unique primitive boundary class that maps to zero in H_1(E_K;Z), and (mu,lambda) is a basis.",
    "invalidated_claim": "Uniqueness of an oriented primitive kernel class without degree +1 normalization: both lambda and -lambda are primitive kernel elements.",
    "minimality": "Add the degree +1 normalization to F4, or say unique up to orientation. Step 2.1 already concludes lambda up to orientation, so its unoriented zero-filling slope remains sound. The item is currently draft, outside this assignment; this verifies existing digest alert 0 only.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "published-consumer-ledger",
    "action": "retain-existing-maintenance-alerts",
    "ids": [
      "def-normal-and-conormal-bundles-of-an-embedded-submanifold",
      "def-tubular-neighbourhood-of-an-embedded-submanifold"
    ],
    "route": "owner outside-context presentation maintenance; no published edits or adjudications by unit 57",
    "reason": "The current published normal-bundle Definition contains inline supplier wikilinks before completing the quotient and annihilator constructions. The current published tubular-neighbourhood Definition contains inline normal-bundle links before completing its data and conditions. These verify existing digest alerts 2 and 3; move links to Definition references under separate ownership while preserving all hypotheses. No mathematical defect in a published consumer was discovered, and no changed interface here creates a consumer-maintenance event.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-framed-knot-self-linking-and-seifert-framing",
    "severity": "fatal",
    "defect_type": "logic",
    "location": "Definition, self-linking paragraph",
    "reason": "The original Definition falsely makes the geometric push-off independent of choices. In one injective tubular chart, graphs of epsilon_0*s and epsilon_1*s for distinct positive radii are distinct (indeed disjoint) because s is nowhere zero. The cited lemma proves independence of their linking integer, not equality of the curves. Replaced exactly that sentence, preserving framing classes, relative winding, AC_omega, orientation, and supplied-surface scope.",
    "status": "fixed",
    "source_urls": [
      "https://arxiv.org/pdf/1910.10257v6"
    ]
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "action": "record-consumer-examination",
    "id": "def-framed-knot-self-linking-and-seifert-framing",
    "reason": "All eight direct consumers are draft. None uses literal choice-independence of the push-off curve. The outside-frontier torus-parallel lemma is routed to separate consumer maintenance as an unchanged, sound use. No published consumer repair was found necessary.",
    "consumers": [
      "thm-blackboard-framing-self-linking-is-writhe",
      "thm-linking-number-is-invariant-and-writhe-is-not",
      "cex-knot-kt-03-boundary-case",
      "thm-seifert-zero-framing-and-framing-integer",
      "thm-rack-colorings-are-framed-invariants",
      "lem-vassiliev-framing-one-term-relation",
      "lem-trefoil-plus-one-surgery-group-presentation",
      "lem-explicit-torus-parallels-have-product-framing"
    ]
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-defect",
    "id": "thm-ip-double-discrepancy-conditional-convergence",
    "severity": "fatal",
    "defect_type": "logic",
    "subclass": "missing-case",
    "location": "proof-step",
    "location_detail": "Proof 2.3, 3.1 and the resulting use in 4.1",
    "disposition": "fixed",
    "reason": "The Statement does not restrict the initial index to 1. For natural-number indexing from 0, the original alternatives ell>=2/ell=1 and k>=2/k=1 omit admissible initial crossings at 0, so the two estimates invoked in step 4.1 were not established in all cases. This is a missing-case logic defect. Steps 2.3 and 3.1 now denote the actual first indices by ell_0 and k_0: every later crossing has a failed predecessor, while an initial crossing uses the fixed positive initial parameter and delta<=rho. No claim or hypothesis was weakened.",
    "model": "gpt-6-luna",
    "context_sha256": "bbb8a0fe426a4c12f1b9d50cc9e1980cc6c0bfd81346210ad82fe69901819d84",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/2610.13483",
      "https://arxiv.org/pdf/2001.00617"
    ],
    "familiar": false
  },
  {
    "ledger": "published-consumer-ledger",
    "action": "route-outside-scope-presentation-observation",
    "id": "def-compact-spectral-filter-and-qualification",
    "path": "items/def-compact-spectral-filter-and-qualification.md",
    "section": "Definition",
    "source_excerpt": "By [[lem-compact-gram-operator-is-positive-and-has-kernel]], $S$ is compact",
    "reason": "The batch-6 Step-4 alert is still visible in the current supplier: an inline hyperlink interrupts the complete defining/statement section and no immediately following references section moves that link. Report for owner maintenance; no supplier edit, published adjudication, new audit, or mathematical invalidity is asserted.",
    "affected_use": "The assigned theorem cites this supplier in its Facts and Proof; the observed hyperlink placement does not change the mathematical supplier interface or invalidate that use.",
    "route": "owner/separate-maintenance",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "published-consumer-ledger",
    "action": "route-outside-scope-presentation-observation",
    "id": "def-hilbert-space-adjoint",
    "path": "items/def-hilbert-space-adjoint.md",
    "section": "Definition",
    "source_excerpt": "By Riesz representation ([[thm-riesz-representation-for-hilbert-space]])",
    "reason": "The batch-6 Step-4 alert is still visible in the current supplier: an inline hyperlink interrupts the complete defining/statement section and no immediately following references section moves that link. Report for owner maintenance; no supplier edit, published adjudication, new audit, or mathematical invalidity is asserted.",
    "affected_use": "The assigned theorem cites this supplier in its Facts and Proof; the observed hyperlink placement does not change the mathematical supplier interface or invalidate that use.",
    "route": "owner/separate-maintenance",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "published-consumer-ledger",
    "action": "route-outside-scope-presentation-observation",
    "id": "thm-singular-value-decomposition-for-compact-operators",
    "path": "items/thm-singular-value-decomposition-for-compact-operators.md",
    "section": "Statement",
    "source_excerpt": "Assume the Axiom of Countable Choice ([[def-countable-choice]]).",
    "reason": "The batch-6 Step-4 alert is still visible in the current supplier: an inline hyperlink interrupts the complete defining/statement section and no immediately following references section moves that link. Report for owner maintenance; no supplier edit, published adjudication, new audit, or mathematical invalidity is asserted.",
    "affected_use": "The assigned theorem cites this supplier in its Facts and Proof; the observed hyperlink placement does not change the mathematical supplier interface or invalidate that use.",
    "route": "owner/separate-maintenance",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-knot-connected-sum-and-prime-knot",
    "severity": "nonfatal",
    "reason": "Completed nonfatal repair; exact defect and mathematical repair evidence are in this report’s decision for def-knot-connected-sum-and-prime-knot."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-knot-connected-sum-well-defined",
    "severity": "nonfatal",
    "reason": "Completed nonfatal repair; exact defect and mathematical repair evidence are in this report’s decision for lem-knot-connected-sum-well-defined."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-mirroring-preserves-primality-of-a-knot",
    "severity": "nonfatal",
    "reason": "Completed nonfatal repair; exact defect and mathematical repair evidence are in this report’s decision for lem-mirroring-preserves-primality-of-a-knot."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-finite-pl-level-collars-give-global-band-products",
    "severity": "nonfatal",
    "reason": "Completed nonfatal repair; exact defect and mathematical repair evidence are in this report’s decision for lem-finite-pl-level-collars-give-global-band-products."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-innermost-critical-height-loops-admit-strict-pl-cap-reduction",
    "severity": "nonfatal",
    "reason": "Completed nonfatal repair; exact defect and mathematical repair evidence are in this report’s decision for lem-innermost-critical-height-loops-admit-strict-pl-cap-reduction."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "lem-capped-elementary-height-spheres-bound-smooth-balls",
    "reason": "The current complete supplier arguments establish the disputed use; preserve the frozen rejection and record the evidence in this report’s corresponding decision."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar",
    "reason": "The current complete supplier arguments establish the disputed use; preserve the frozen rejection and record the evidence in this report’s corresponding decision."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "lem-knot-genus-zero-iff-unknot",
    "reason": "The current complete supplier arguments establish the disputed use; preserve the frozen rejection and record the evidence in this report’s corresponding decision."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "lem-simply-connected-pl-end-has-spherical-compact-neighborhoods",
    "reason": "The current complete supplier arguments establish the disputed use; preserve the frozen rejection and record the evidence in this report’s corresponding decision."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "lem-knot-decomposing-sphere-systems-cut-and-paste",
    "reason": "The current complete supplier arguments establish the disputed use; preserve the frozen rejection and record the evidence in this report’s corresponding decision."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "ex-knot-kt-05-worked-cases",
    "reason": "The current complete supplier arguments establish the disputed use; preserve the frozen rejection and record the evidence in this report’s corresponding decision."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "thm-prime-decomposition-of-compact-orientable-three-manifold",
    "reason": "The current complete supplier arguments establish the disputed use; preserve the frozen rejection and record the evidence in this report’s corresponding decision."
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "record-examination",
    "id": "def-knot-connected-sum-and-prime-knot",
    "affected_use": "No published direct item consumer was found. The sole outside-frontier direct consumer is the draft lem-two-point-sphere-cuts-unknot-into-boundary-parallel-arcs, whose F1 transports the standard planar disk through an unknot isotopy.",
    "invalidated_claim": "None: the R3 planar disk and circle are exactly the original equatorial model under the now displayed identification.",
    "minimality": "No published item edit or published repair receipt is necessary; route the one outside draft consumer to ordinary separate maintenance for its unchanged-use disposition."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "def-seifert-matrix-s-equivalence",
    "outcome": "false_positive",
    "severity": "not-a-defect",
    "disposition": "false-positive",
    "location": "Definition",
    "reason": "The Definition explicitly restricts its domain to even-order integral matrices; it does not assert that all link Seifert matrices have even order. Congruences and the two rank-two enlargements preserve that domain, and finite reversible moves define an equivalence relation, including the empty matrix. The knot-focused home page and manifest promise this same restricted definition. Odd-order link matrices lie outside its expressly stated domain, so their existence contradicts no clause.",
    "uncertain": false,
    "source_urls": [
      "https://www2.math.kyushu-u.ac.jp/~saeki/Lee-Lectures.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-seifert-pairing-well-defined",
    "outcome": "confirmed_nonfatal",
    "severity": "nonfatal",
    "disposition": "fixed",
    "location": "facts-block and proof step 1.1",
    "reason": "F7 attributes diagram existence without qualification to a supplier whose Statement requires a link contained in R3. The cited ambient-link Definition already supplies the move-off-infinity convention, so this is a missing explicit hypothesis discharge, not a false linking theorem. Repaired F7 and step 1.1: rotate a point outside c∪d to infinity, check the induced complement homology isomorphisms preserve positive meridians and hence both linking coefficients, and apply projection only to the rotated R3 link.",
    "uncertain": false,
    "source_urls": [
      "https://www2.math.kyushu-u.ac.jp/~saeki/Lee-Lectures.pdf",
      "https://www.dm.unibo.it/~francavi/did/21-22/knot.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "cor-alexander-polynomial-multiplies-under-connected-sum",
    "severity": "nonfatal",
    "location": "Diagram; owning contract citation F11",
    "reason": "The alleged fatal spine gap is not present: F11 explicitly cites the supplier Proof 1.2, which proves both a strong deformation retraction to a finite graph and the stronger vertex-disk/edge-band thickening assertion by reversing free-side triangle collapses. Its AC-omega hypothesis follows from full AC. Joining two such thickenings along boundary arcs adds one bridge, so H1 is the direct sum and the old integral bases remain a basis. The supplied contract quoted only the Statement, omitting this actual proof evidence; an exact supplementary Proof 1.2 quotation now records it. A separate nonfatal diagram error was confirmed: the left cycle originally had x-range [-3.15,-2.05], protruding outside the surface whose left edge is x=-3. Moving its center and label from -2.6 to -2.4 puts it inside. This is confirmed_nonfatal for the evidence/presentation defects, not a confirmed fatal logical gap.",
    "uncertain": false,
    "source_urls": [
      "https://www.dm.unibo.it/~francavi/did/21-22/knot.pdf"
    ],
    "familiar": true,
    "disposition": "fixed"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-knot-kt-08-worked-cases",
    "outcome": "confirmed_nonfatal",
    "location": "Verification 3.1",
    "status": "fixed",
    "reason": "Added step 1.2 identifying Fox solutions with the finite dihedral-quandle colorings; step 3.1 now invokes F3 with its actual quandle hypothesis verified."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-fundamental-quandle-and-adjoint-group-from-wirtinger",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "location": "Proof 1.3, used by 3.1",
    "status": "fixed",
    "reason": "The heightwise product of a plane isotopy did not supply a smooth S3 ambient isotopy. The bounded-height extension now has an explicit smooth inverse, compact support, identity near infinity, and the required action on K."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-based-string-link-and-labeled-link-peripheral-system",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "reason": "The original closure clause allowed arbitrary outside joining arcs: for one trivial strand an exterior knotted arc changes the closed knot. Fixed product closing arcs in a standard zero-framed unknotted solid torus now specify the operation, without changing exteriors, meridians, longitudes, basings or stacking.",
    "defect_type": "other",
    "action": "record-adjudication",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-maximal-abelian-cover-link-exterior-retraction",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The radial homotopy fixes E_L and lifts uniquely to a deck-equivariant strong deformation retract onto p^{-1}(E_L), not E_L. The subgroup and connectedness argument and the meridian-preserving Laurent-module isomorphism are sound. Corrected only the misleading title; Statement and proof are unchanged.",
    "action": "record-adjudication",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-string-link-exterior-homology-and-meridian-maps",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "reason": "F2 attributed naturality to a supplier stating only exactness, and step 5.1 used it to identify both end maps. Removed that overclaim and proved the required identity directly: endpoint slice disks give the relative tube generators, and delta([j#d])=[boundary j#d]=[j# boundary d]. Added the exact relative-cycle and lift-and-boundary suppliers. All Statement clauses, the compatible-access caveat, and the punctured-disk diagram remain valid and unchanged.",
    "defect_type": "dependency_citation",
    "action": "record-adjudication",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "alg-abelian-cover-chain-model-from-triangulated-exterior",
    "outcome": "false_positive",
    "status": "false-positive",
    "reason": "The claimed separate result exists on the owning A page: thm-abelian-cover-chain-model-computes-alexander-module, steps 2.1–4.1, constructs and classifies the connected label cover; step 5.1 identifies exactly the algorithm face coefficients and proves boundary squared is zero; step 6.1 identifies H1 with A_L. The separate procedure-properties theorem proves termination. The triangle arrows match g01+g12+g20=0. No repair is warranted.",
    "action": "record-adjudication",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-knot-twisted-exterior-acyclicity-from-torsion-module",
    "severity": "nonfatal",
    "location": "frontmatter",
    "status": "fixed",
    "reason": "The title omits localization, although the Statement and proof explicitly conclude acyclicity only over Q. The general supplier applies with the stated cell counts and positive-rank deck epimorphism: torsion kills localized H1, an invertible edge boundary kills H0, and Euler characteristic zero kills H2. Clarified the title; no claim or proof change is needed.",
    "repair": "Title and owning manifest title now explicitly say localized; Statement and proof unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "cex-knot-kt-10-boundary-case",
    "severity": "nonfatal",
    "location": "facts-block",
    "status": "fixed",
    "reason": "F3 inaccurately attributes the solid-torus/core-retraction fact to a definition that only specifies the chosen tubular exterior. The standard solid-torus model and circle spine are already explicit Given data, so the column calculation is sound. Replaced F3 by the actual definition and supplied the coordinate identification and finite cellular collapse in step 1.1; the expansion and Fox calculation remain valid.",
    "repair": "F3 now restates only the exterior definition. Counterexample 1.1 proves the standard product model and finite collapse; 2.1 gives the elementary expansion, and 3.1 computes both columns.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-closed-finding",
    "id": "lem-cyclic-cover-linking-form-inverse-matrix",
    "severity": "nonfatal",
    "disposition": "fixed",
    "location": "facts-block",
    "source_location": "items/lem-cyclic-cover-linking-form-inverse-matrix.md, F2 and Proof 1.1",
    "reason": "F2 attributes a retraction to a supplier whose Statement gives connectedness and finite CW type but no retraction. This is a nonfatal citation overstatement: the original proof already supplies radial motion locally, and the supplier proof also constructs it. F2 now cites only connectedness, and step 1.1 gives the explicit radial homotopy, its boundary compatibility, and the induced homology isomorphism. The surgery presentation and linking-form formula are unchanged.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/math/0111203"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "def-cyclic-branched-cover-of-a-knot",
    "disposition": "false_positive",
    "location": "statement",
    "source_location": "items/def-cyclic-branched-cover-of-a-knot.md, Definition: closed lift of mu^q",
    "reason": "The exact rejected carrier explicitly says “Let $\\widetilde\\mu$ be the closed lift of $\\mu^q$,” not a closed lift of $\\mu$. Its current itemHashJudge equals the rejected tuple hash. The peripheral kernel has basis $(q\\mu,\\lambda)$, so $\\mu^q$ lifts to a primitive closed curve and defines a valid solid-torus meridian slope. Rolfsen Chapter 10.C, printed pp. 297–298, describes this same q-times-covering meridian. No defect or edit is warranted.",
    "uncertain": false,
    "source_urls": [
      "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rolfsen.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-adjudication",
    "id": "lem-link-seifert-pairing-well-defined",
    "run": "inverse-problems-knot-theory-all-109-2026-10-19",
    "phase": "initial",
    "round": 1,
    "unit": "67",
    "model": "gpt-6-luna",
    "context_sha256": "c6c5a7297cdbfa4d66d0507bfb78c32da6e338f24d8d2d75008cd433cd0195d5",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The original F5 already derives C1 smallness from a smooth perturbation family, so smallness is not a new transversality axiom. It omitted the closed-target reduction: for boundary D use Int(Sigma) closed in S3 minus D. F5 now gives that reduction and a compact-domain C1 convergence argument for the entire embedding path. Steps 1.1–1.3 respectively resolve cellular cycles, push bounding chains off F, and use symmetric mixed-crossing linking to prove descent in both variables. Statement unchanged.",
    "uncertain": false,
    "source_urls": [
      "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes-10.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-adjudication",
    "id": "lem-seifert-surfaces-of-same-link-are-related-by-arc-surgeries",
    "run": "inverse-problems-knot-theory-all-109-2026-10-19",
    "phase": "initial",
    "round": 1,
    "unit": "67",
    "model": "gpt-6-luna",
    "context_sha256": "f9cb7e8a67e58bb0f04b95389405885a0c20f6b7f8cf53374ad1e53dc58d2122",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "F2 attributed C1 smallness directly to Statements which assert only a transverse homotopy relative to a good region. Their actual smooth centered-family constructions do imply it. F2 now derives the consequence on Int(F1), targets the closed submanifold F0 minus L inside S3 minus L, protects the punctured collars, and uses compact support for C1 convergence on the completed surface. The embedding-path argument in 1.1 then applies. Checked the maximal-slab one-sided region and primal/dual graph reduction against Lickorish Theorem 8.2, pp. 79–81; each surgery preserves connectedness and boundary. Statement unchanged.",
    "uncertain": false,
    "source_urls": [
      "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes-10.pdf",
      "https://ebooks.karbust.me/Mathematics/W.%20B.%20Raymond%20Lickorish%20-%20An%20Introduction%20to%20Knot%20Theory%20%281997%29%20%5B978-1-4612-0691-0%5D.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-adjudication",
    "id": "lem-levine-tristram-hermitian-form-singular-set",
    "run": "inverse-problems-knot-theory-all-109-2026-10-19",
    "phase": "initial",
    "round": 1,
    "unit": "67",
    "model": "gpt-6-luna",
    "context_sha256": "1c522f1b7df4baf01f25d0eca76b985d43d19e4ebf37b7ffd6065609db04e5bb",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "F2 overstated the determinant theorem by attributing reciprocity to it, but proof 2.1 already establishes p(t)=t^(2g)p(t^-1) directly by transpose and even matrix size. Deleted redundant F2 and its step tag; retained that full derivation and the unit-associate input F1. H=(1-omega)(V-omega^-1 V^T), its scalar is nonzero, and Laurent units do not vanish on S1, proving both directions also for the empty genus-zero matrix. Statement unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-adjudication",
    "id": "def-levine-tristram-hermitian-form-and-signature",
    "run": "inverse-problems-knot-theory-all-109-2026-10-19",
    "phase": "initial",
    "round": 1,
    "unit": "67",
    "model": "gpt-6-luna",
    "context_sha256": "0983ea16fd6e540088fc47ad3f36dd91d27eb9ee9e530ac63813bdf584aeabc2",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The explicit surface hypotheses omitted its embedding in S3, although the immediately specified Seifert pairing imports precisely that condition from def-knot-seifert-pairing-and-matrix. Made the intended embedded domain explicit, without changing H, its zero-eigenvalue convention, or the averaged root value. Hermitian symmetry follows by conjugate transpose; finite isolated Alexander roots and stabilization supply the declared well-definedness. All direct uses were examined and already use actual knot Seifert surfaces or their realized matrices; no consumer repair is required.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-adjudication",
    "id": "def-seifert-s-equivalence-and-conway-normalization",
    "run": "inverse-problems-knot-theory-all-109-2026-10-19",
    "phase": "initial",
    "round": 1,
    "unit": "67",
    "model": "gpt-6-luna",
    "context_sha256": "ad2929708c724de53e03187c3a46d68acc977de26ea55b01a76849b9bcf3d6e0",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "fixed",
    "reason": "The determinant/gcd objection is resolved by the existing normalization chain, now stated explicitly: p=det(V-tV^T) is an Alexander generator, det(V-V^T)=1, and t^-g p is symmetric, so uniqueness identifies it with Delta# and the Conway determinant. A separate fatal domain defect is confirmed: the link definition allows the empty link, but unknot normalization and crossing-ball skein triples never constrain its value. Prescribed P_empty=0 and explicitly extended the unique nonempty assignment. No nonempty-link or knot claim was weakened.",
    "uncertain": false,
    "source_urls": [
      "https://ebooks.karbust.me/Mathematics/W.%20B.%20Raymond%20Lickorish%20-%20An%20Introduction%20to%20Knot%20Theory%20%281997%29%20%5B978-1-4612-0691-0%5D.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-adjudication",
    "id": "lem-arf-seifert-determinant-congruence-near-minus-one",
    "run": "inverse-problems-knot-theory-all-109-2026-10-19",
    "phase": "initial",
    "round": 1,
    "unit": "67",
    "model": "gpt-6-luna",
    "context_sha256": "feca56c687c4d6954bc1ad61aa27ff6112e0ee4033a8d9966862d0d6bf2b9f3d",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "A1 conflated the assumed choice-function axiom with geometric conventions; corrected it to an ambient supplier hypothesis. The pairing, symplectic skew part, Arf parity and determinant normalization are separately supplied by F1–F4. Checked the mod-two permutation expansion: inverse permutations pair the asymmetric counts, the sole surviving diagonal coefficient at order two is sum_i v_aa v_bb, order-three paired terms acquire another (1+t), and multiplication by t^-g gives the asserted congruence. Genus zero uses the empty determinant and Arf sum. Statement unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-adjudication",
    "id": "lem-seifert-stabilization-preserves-levine-tristram-signature",
    "run": "inverse-problems-knot-theory-all-109-2026-10-19",
    "phase": "initial",
    "round": 1,
    "unit": "67",
    "model": "gpt-6-luna",
    "context_sha256": "67d9c41e99aa27718ecc0d1ad661817ee80364ee8c6c8a211f6a18dd92d11f12",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "Corrected A1 to identify AC solely as the choice-function axiom assumed by the suppliers. F1 separately provides the Seifert operations. For either enlargement the new Hermitian block D has determinant -|1-omega|^2 and inverse entry (1,1)=0, so eliminating the coupling gives exactly H direct-sum D even when H is singular. D contributes one positive and one negative direction. Congruence preserves inertia, and equality on neighboring nonroot arcs gives equality of root averages. The clarified embedded-surface definition is satisfied by the actual surface-invariance supplier. Statement unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-adjudication",
    "id": "cex-knot-kt-12-boundary-case",
    "run": "inverse-problems-knot-theory-all-109-2026-10-19",
    "phase": "initial",
    "round": 1,
    "unit": "67",
    "model": "gpt-6-luna",
    "context_sha256": "5b29999ff118c4bcb02a148b5e1e1d57a05e1926ec5c23eb835ee0c2f9416126",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "Corrected A1 attribution: AC is the ambient choice-function axiom, the form definition fixes signature/root averaging, and F1 supplies the realized trefoil matrix from ex-knot-kt-07. For omega=exp(i*pi/3), c=1-omega has norm one, H has diagonal -1 and off-diagonal entries -conjugate(c),-c, hence determinant zero and rank one. The Alexander polynomial also vanishes. This is a valid counterexample to universal nonsingularity; the knot invariant remains the defined one-sided average. Statement unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-adjudication",
    "id": "thm-seifert-s-equivalence-and-conway-arf-bridge",
    "run": "inverse-problems-knot-theory-all-109-2026-10-19",
    "phase": "initial",
    "round": 1,
    "unit": "67",
    "model": "gpt-6-luna",
    "context_sha256": "838b6d6403ed9a94d3f124aede1eafc78ea916cb992d78d465affdb8121327d5",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The cited enhancement lemma Statement asserts Arf invariance, not stable isometry; its current Proof 3.1 does contain the required explicit hyperbolic splitting. This is a nonfatal interface attribution defect, not a missing mathematical theorem. Restricted F2 to its actual stated conclusions and proved the short splitting locally from the displayed enlargements: orthogonalize u against the old nondegenerate space, then replace u by u+q(u)v with q(v)=0 and B(u,v)=1. This produces q_H(s,t)=st. The coefficient comparison uses the repaired normalization and reviewed determinant congruence; z^2=(1+t)^2/t and z^4=0 in the quotient, with nonzero z^2. Statement unchanged.",
    "uncertain": false,
    "source_urls": [
      "https://ebooks.karbust.me/Mathematics/W.%20B.%20Raymond%20Lickorish%20-%20An%20Introduction%20to%20Knot%20Theory%20%281997%29%20%5B978-1-4612-0691-0%5D.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-adjudication",
    "id": "thm-arf-equals-second-conway-coefficient-mod-two",
    "run": "inverse-problems-knot-theory-all-109-2026-10-19",
    "phase": "initial",
    "round": 1,
    "unit": "67",
    "model": "gpt-6-luna",
    "context_sha256": "1abaa36ddffe58088e629a7923b18de98e1c4c954c3d98a42a1cb3d3566ffca1",
    "outcome": "false_positive",
    "status": "false-positive",
    "reason": "The cited bridge theorem explicitly proves Arf(K)=a2(nabla_K) modulo two under exactly full AC and the same knot/normalization hypotheses. Applying that theorem is a valid direct consequence; overlap with its stronger supplier does not make this mathematical statement or proof false. Proof 1.1 transfers the equality and 2.1 transfers the already established independence. The locally repaired bridge retains its full Statement, and the empty-link extension has no effect on knots. No cosmetic change or stamp was made.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-open-finding",
    "id": "lem-arf-quadratic-enhancement-from-seifert-form",
    "severity": "nonfatal",
    "location": "Proof 2.1",
    "reason": "The Step-4 digest concern is confirmed: a_i,b_i denote both symplectic basis vectors and scalar coordinates in x=sum_i(a_i a_i+b_i b_i). Use alpha_i,beta_i for scalars in this expansion and its quadratic formula. The Gauss-sum factorization and hyperbolic splitting remain mathematically sound. This item is outside the assigned tuple scope; source left unchanged for its actual frontier owner.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "route": "frontier-owner"
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "path": "research/published-consumer-supplier-ledger.md",
    "action": "record-scope-disposition",
    "reason": "Both actual Definition changes have twelve distinct direct item consumers, all draft members of the frozen frontier. Each exact use was examined and remains sound. No published or outside-frontier consumer requires maintenance from these events; no published item was edited or adjudicated.",
    "supplier_ids": [
      "def-levine-tristram-hermitian-form-and-signature",
      "def-seifert-s-equivalence-and-conway-normalization"
    ],
    "published_consumer_ids": [],
    "outside_frontier_consumer_ids": [],
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "ex-knot-kt-13-worked-cases",
    "model": "gpt-6-luna",
    "context_sha256": "6a43fc8625a4495e0cdcaa77520dd585b99a08b5f233b28de8398c84dbd7c9d8",
    "reason": "The rejection interchanges the two genus-one gluings. On E_U the meridian is lambda_U and the longitude is mu_U. A meridional disk twist sends mu_U+lambda_U to mu_U. Identifying an attached meridian with this exterior longitude exchanges the two factor circles in the boundary of D2 x D2 and gives S3; matching exterior meridians gives S1 x S2. Thus Verification 2.2 is correct, as is 2.1.",
    "uncertain": false,
    "source_urls": [
      "https://poisson.phc.dm.unipi.it/~camponovo/libri/3mani.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "lem-trefoil-plus-one-surgery-group-presentation",
    "model": "gpt-6-luna",
    "context_sha256": "274d67c898b771b78175fdfcfdba693a434b71803140b2c871c30cf905d4dba4",
    "reason": "Conjugacy of meridian loops alone would not determine the parallel, but the cited lem-wirtinger-local-meridian-conjugacy Proof 1.1 explicitly constructs alpha_s, alpha_t and the upper push-off beta. It proves alpha_s beta alpha_t^-1 is the positive over-meridian by a positive-winding triangle homotopy avoiding both strands, hence alpha_in beta = g_o alpha_out. Its Proof 2.1 uses the same paths for meridian transport. The present Proof 3.1 cites that access-path calculation, so it is not inferring the path identity merely from conjugacy. Underpasses 1,3,2 give b,a,c and therefore w=bac; the claimed longitude and +1 relation follow.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/1003.3554"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-nonfatal-metadata",
    "id": "lem-trefoil-plus-one-surgery-group-presentation",
    "location": "research/inverse-problems-knot-theory-all-109-2026-10-19-batch-68.proof-contracts.json: contracts[id].citations, F4 -> def-framed-knot-self-linking-and-seifert-framing",
    "reason": "The stored quotation incorrectly retained choice-independence of the actual push-off. Refreshed it to the current Definition, which asserts invariance only of the linking integer. The item already uses only that integer, so no mathematical carrier repair or fatal rejection is warranted. Focused strict contract validation now passes.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "no-update",
    "reason": "Both assigned items remain sound drafts with unchanged interfaces. No newly discovered potentially defective published use, published repair, or outside consumer maintenance is required by these reviews. Existing outside-context presentation alerts in the Step-4 digest were not edited or re-adjudicated.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-heegaard-splitting-of-closed-oriented-three-manifold",
    "action": "record-fixed-finding",
    "severity": "nonfatal",
    "location": "Definition references",
    "reason": "The supplier def-smooth-embedding defines embeddings and proves no graph-neighbourhood theorem. This was a misleading reference label, not a premise in the proof-free handlebody/Heegaard definition: the Definition itself constructs handlebodies by attaching 1-handles and makes no graph-neighbourhood assertion. Replaced only the reference label with smooth embeddings of attaching disks and handlebodies; the complete Definition is byte-identical. No consumer propagation is triggered."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "thm-lickorish-wallace-framed-link-presentation",
    "action": "record-fixed-finding",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "location": "Facts F1; Proof 1.1 and 3.1",
    "reason": "The supplier Statement promises a diffeomorphism and a marked two-handle trace but does not explicitly promise an orientation-preserving closed output comparison. F1 and steps 1.1/3.1 imported that extra conclusion without checking its sign. Restated the literal supplier interface and repaired the proof: if the supplied comparison reverses orientation, reflect S3 and negate every framing. The peripheral classes transform as mu prime = -r_*mu and lambda prime = r_*lambda; reflection on the exterior and (z,w) -> (z, conjugate(w)) on each solid torus give a reversing comparison of the filled manifolds. Composing the two reversing maps preserves orientation. The integer-slope proof and empty case remain valid; the Statement is unchanged."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-zero-meridian-pairs-are-generated-by-kirby-moves-in-s-three",
    "action": "record-fixed-finding",
    "severity": "nonfatal",
    "location": "Facts F1; Proof 1.1",
    "reason": "F1 referred indirectly to the peripheral-homology theorem through the surgery definition. That theorem really does establish H1(E_X;Z)=Z[mu_X] with the positive meridian and preferred-longitude basis, so the mathematical claim is available and this is a nonfatal citation defect rather than a false homology assertion. Added that existing theorem as direct dependency and F3, and sphere homology as direct dependency and F4 for the bounding-chain argument. Step 1.1 now explains why intersection computes the meridian coefficient before deriving symmetry. Checked the geometric crossing slides, splitting, descending unknotting, Hopf-core isotopy and both parity deletions; signed auxiliary parallels do not reorient the stationary component. The full framing and original L are retained. The Statement is unchanged."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-coprime-torus-knot",
    "severity": "nonfatal",
    "locus": "items/def-coprime-torus-knot.md#Definition",
    "finding": "The peripheral restatement omitted the normal-disk orientation rule and replaced a degree +1 oriented simple parallel curve by an unspecified degree-one homology class.",
    "correction": "Specified tangent-to-K followed by disk-basis orientation, induced meridian boundary orientation, tube projection, simple oriented longitude, projection degree +1, and zero exterior homology. Relabeled the diagram axes alpha and beta; preserved all torus-knot claims and dependencies.",
    "disposition": "fixed",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "thm-torus-knot-group-presentation",
    "route": "frontier-owner",
    "severity": "nonfatal",
    "locus": "items/thm-torus-knot-group-presentation.md, Proof 4.2 and 5.1",
    "finding": "Proof 4.2 computes cq-dp=-1 under x→q,y→p and concludes that m is opposite the positive normal-disk meridian by F3. The opened F3 supplier thm-knot-exterior-homology-and-longitude states generation by the geometric positive meridian, but never compares that generator with this newly selected algebraic isomorphism. Thus the sign comparison is unproved; 5.1 then cites 4.2 for the same sign. This independently confirms the original Step-4 reader concern; it is not caused by the definition clarification.",
    "affected_use": "Proof 4.2 identifies the positive meridian as y^d x^(-c); 5.1 uses its image +1 to identify the preferred longitude h mu^(-pq).",
    "invalidated_claim": "The present proof has not calibrated the geometric positive meridian against x→q,y→p; the stated formula is not refuted.",
    "minimality": "Add the short geometric orientation/linking calculation for the positively oriented coordinate cores, establishing x→q and y→p for the homomorphism sending the positive normal-disk meridian to +1. Keep the theorem Statement; then no further interface propagation is necessary. No unassigned item was edited.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "def-incompressibility-seifert-fibration-and-jsj-system",
    "model": "gpt-6-luna",
    "context_sha256": "710a7a7c70af713cc8ef8a83d5b5f50f1c9baa49caf9488e9e60d4fc57b9d38d",
    "outcome": "false_positive",
    "disposition": "false-positive",
    "reason": "The proposed annulus counterexample is already compressible: push the boundary disk inward and its rim along the proper surface collar to obtain an interior disk with essential boundary. A compression disk is proper in the cut side, not necessarily in M. The geometric disk convention does not create the claimed false compression.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-cut-along-incompressible-tori-preserves-irreducibility",
    "model": "gpt-6-luna",
    "context_sha256": "592739d6380f7436ef4db37ae96167833028f06decae46dd06db495fcf93335a",
    "outcome": "false_positive",
    "disposition": "false-positive",
    "reason": "The Statement explicitly specifies the PL category, and F1 explicitly interprets irreducibility in that category. Thus the ball in 1.1 is PL by hypothesis, not by an unproved TOP-to-PL upgrade. Its contained cutting tori compress by F2, so the ball misses all cutting tori and lifts to the original cut component.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-incompressible-surface-in-solid-torus-is-meridian-or-boundary-parallel",
    "model": "gpt-6-luna",
    "context_sha256": "682f35023fa26d81ac73d01c5c3bb93256829fb117f5356ec63c6002d3be4aad",
    "outcome": "confirmed_fatal",
    "disposition": "fixed",
    "reason": "F5 originally asserted boundary-relative general position and extension beyond its quoted interfaces, leaving the disk moves unjustified as cited. The proof now doubles the neat comparison surface, truncates separated collars when boundaries coincide, and uses the existing q-times-velocity extension from the neatification supplier Proof 5.2 to fix the ambient boundary. Classification, disk isotopy, TOP torus conclusion, and full AC are preserved.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "dependency_citation"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-kneser-haken-finiteness-for-incompressible-tori",
    "model": "gpt-6-luna",
    "context_sha256": "cf87070872fe2defc00c72a1ee3bc1c2613540d4972f9ccb3aa4a52e6a5472ca",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "reason": "F2 inaccurately attributes rectangle product parameters to normal position. The proof already invokes F5, whose cited Proof 1.1 constructs every face-cell disk and extends its rectangular boundary map over the disk; Proof 4.1 supplies the inward collar. F2 now states only its actual marked cut-ball conclusion and attributes the rectangle construction to F5. The face count, interval-bundle hypotheses and mod-two inequality remain valid.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-torus-in-ball-is-compressible",
    "model": "gpt-6-luna",
    "context_sha256": "f790e0d03f37eb0a02440b6496649c50578df73d02e1b86e00ef3015b29ea314",
    "outcome": "false_positive",
    "disposition": "false-positive",
    "reason": "The title abbreviates the precise qualified Statement; it does not remove its hypotheses. The proof treats the TOP two-sided torus using its product collar, separates the ball into compact TOP sides, finds a noninjective boundary group by amalgam normal form, and transports a finite PL Loop disk through a fresh cut-side triangulation. No compatibility of the original torus with the ball triangulation is claimed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-essential-surface-in-seifert-piece-is-vertical-or-horizontal",
    "model": "gpt-6-luna",
    "context_sha256": "303e8501a99148b80545e774669ac2c8a674b0dfa0cf90e61c18ade768e87c24",
    "outcome": "false_positive",
    "disposition": "false-positive",
    "reason": "Step 4.1 already invokes the coherent-normal-side argument. Orient a regular fiber near the exceptional core: all q crossings of any one horizontal meridian disk have the same coorientation sign. A returning disk approaches the same normal side of F at both ends, requiring opposite crossing signs; its endpoints therefore cannot belong to that same disk. With no intervening crossings the projected core interval lies strictly between adjacent distinct core points and is shorter than one core period. Radial ruling is injective even at the core, giving the claimed bigon between distinct disks and cancelling two intersections. The subsequent normalization, Euler count and cut interval-bundle argument retain their hypotheses. Read Hatcher Proposition 1.11 and the complete following horizontal-surface discussion, printed pp.16–18; the sign check here was carried out directly.",
    "uncertain": false,
    "source_urls": [
      "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-seifert-boundary-fiber-slopes-unique-except-small-pieces",
    "model": "gpt-6-luna",
    "context_sha256": "c5e5995bd69976941c4852a0cf26d04d8ed8bb592cf41a6c00b679ddfb0bf539",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "reason": "F2 falsely attributed a base surface and regular-fiber slope definition to its supplier. It now accurately cites the fiber models and explicitly supplies the boundary-circle-bundle slope convention. Applying annulus verticalization to each fibration preserves the original boundary-circle isotopy class; the two excluded orientable exceptions prevent any fibration replacement. The annulus-family coverage and the Statement are unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-repair",
    "id": "lem-cut-along-incompressible-tori-preserves-irreducibility",
    "location": "proof-contract",
    "severity": "nonfatal",
    "disposition": "fixed",
    "reason": "Contract-only repair: replaced nonexistent axiom-use step 1.2 by actual A1 use 2.1 and recorded that full AC is retained but unused by the finite choice-free PL argument.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-repair",
    "id": "lem-incompressible-surface-in-solid-torus-is-meridian-or-boundary-parallel",
    "location": "proof-contract",
    "severity": "nonfatal",
    "disposition": "fixed",
    "reason": "Contract repair: removed nonexistent axiom-use step 3.2, located TOP triangulation/transversals at 6.1 and smooth countable-choice uses at existing steps, and synchronized the repaired 3.1/4.2 derivations.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-repair",
    "id": "lem-kneser-haken-finiteness-for-incompressible-tori",
    "location": "proof-contract",
    "severity": "nonfatal",
    "disposition": "fixed",
    "reason": "Contract repair: located inherited countable choice in normal position through smooth Schoenflies, instead of attributing it to an unused direct relative-transversality application.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-repair",
    "id": "lem-torus-in-ball-is-compressible",
    "location": "proof-contract",
    "severity": "nonfatal",
    "disposition": "fixed",
    "reason": "Contract-only repair: located full AC at both amalgam transversals in 2.1 and the actual TOP cut-side triangulation in 3.1.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-repair",
    "id": "lem-essential-surface-in-seifert-piece-is-vertical-or-horizontal",
    "location": "proof-contract",
    "severity": "nonfatal",
    "disposition": "fixed",
    "reason": "Contract-only repair: removed nonexistent axiom-use step 1.2 and recorded actual full-AC supplier uses and countable-choice general-position/flow/extension steps.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "lem-essential-annulus-in-seifert-piece-isotopic-to-vertical",
    "location": "facts-block",
    "severity": "nonfatal",
    "disposition": "owner-required",
    "reason": "Unassigned F3 says the JSJ definition defines vertical and horizontal surfaces, but it defines neither term. Their meanings are stated explicitly by the already cited normal-form supplier. Route this attribution correction to the ordinary frontier owner; no unassigned item was edited.",
    "source_excerpt": "[F3] [[def-incompressibility-seifert-fibration-and-jsj-system]] defines vertical and horizontal surfaces and exceptional fibers.",
    "minimal_repair": "Attribute vertical/horizontal terminology to lem-essential-surface-in-seifert-piece-is-vertical-or-horizontal, already cited in F1; retain the definition citation for exceptional fibers.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "no-update-required",
    "reason": "All seven assigned carriers are draft. Every original Statement/Definition is byte-for-byte unchanged; there is no supplier-interface event or newly identified affected published consumer. Existing Step-4 outside-source alerts are preserved and are not newly adjudicated here.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-adjudication",
    "id": "def-ideal-tetrahedron-shape-and-cusp-holonomy",
    "model": "gpt-6-luna",
    "context_sha256": "abbba7264de24d31f2ffad4e4762b45d7949a0a7890fb6b04adc71653a3a6ee7",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "severity": "nonfatal",
    "defect_type": null,
    "reason": "The normalized geometric edge invariant fixes a standard convention, but the definition never assigns its three parameters to the three edge pairs and also omits the normal-path convention. Explicit edge labels and normal representatives now remove both ambiguities.",
    "uncertain": false,
    "source_urls": [
      "https://users.monash.edu/~jpurcell/book/HypKnotTheory.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-adjudication",
    "id": "lem-uniform-circular-distortion-gives-planar-quasiconformality",
    "model": "gpt-6-luna",
    "context_sha256": "d963e18027fa3efd448824ffae350a96a59dea71782158b05649ccbcafe4efb5",
    "outcome": "false_positive",
    "status": "false-positive",
    "severity": null,
    "defect_type": null,
    "reason": "F3 explicitly cites the independent argument in supplier step 1.1 and its Remark, both of which prove total differentiability for continuous homeomorphisms with finite partials, without assuming quasiconformality. Supplier step 2.1 proves the orientation sign by a boundary homotopy. The area/Tonelli bound, Sobolev converse, ACL identification and rank-one exclusion meet those hypotheses.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-adjudication",
    "id": "lem-horocusp-truncation-has-finite-volume",
    "model": "gpt-6-luna",
    "context_sha256": "b6104c3a3984e1bcf3d7a3bb5238bdf55a9696877e3cd2a02ca758f26c5d3cc0",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "severity": "nonfatal",
    "defect_type": null,
    "reason": "The primitive in step 1.1 has the wrong sign, while the claimed integral A/2 is correct. Replacing it by -1/(2t^2) yields A(0-(-1/2))=A/2. Step 2.1 correctly bounds escaping length below by logarithmic height. The statement is unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-adjudication",
    "id": "lem-complete-curvature-minus-one-manifolds-are-kleinian-quotients",
    "model": "gpt-6-luna",
    "context_sha256": "a59dacbfc7717848969231b7725fa1b7b3212d53afe959eb5e1cb876fd0e88c1",
    "outcome": "false_positive",
    "status": "false-positive",
    "severity": null,
    "defect_type": null,
    "reason": "The cited boundary-extension supplier explicitly calculates the distance formula, ball model, geodesic uniqueness and Mobius isometric extensions in its step 1.1. The assigned proof separately derives the sinh radial metric from the actual Jacobi and Cartan–Hadamard hypotheses, identifies PSL2(C) by Hermitian matrices, and proves discreteness and torsion-freeness of the deck group. F3 is supported by the cited argument.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-adjudication",
    "id": "lem-finite-volume-hyperbolic-three-manifolds-have-finite-standard-cusp-decompositions",
    "model": "gpt-6-luna",
    "context_sha256": "f0235077da6148ff272c0a0345be3c52659270eac640fd9b135019f9705d12f3",
    "outcome": "false_positive",
    "status": "false-positive",
    "severity": null,
    "defect_type": null,
    "reason": "The horocusp supplier proves discrete-subgroup closedness in L1, diagonal cyclicity in step 2.1, the parabolic centralizer computation in step 3.1, and the rank bound in step 4.1. These are the exact auxiliary claims used here. The small-matrix commutator estimate, finite-index prefix argument, elementary thin-component models, positive-volume packing and exclusion of rank-one cusps then establish the stated finite decomposition.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-adjudication",
    "id": "thm-regular-ideal-tetrahedron-volume",
    "model": "gpt-6-luna",
    "context_sha256": "ff891f79fdc9276728ac6535dcc6ebedb9a2739468766ad556de913c593f8fcf",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "severity": "nonfatal",
    "defect_type": null,
    "reason": "F1 attributes regularity to a definition that only fixes the model and shapes. F2 already proves all six angles are pi/3 at omega, so this is a nonfatal fact-attribution defect, repaired by limiting F1 to its definition and attributing regularity explicitly to F2. The six-region volume computation and convergent series retain the same conclusion.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-adjudication",
    "id": "def-pared-hyperbolic-structures-and-volume",
    "model": "gpt-6-luna",
    "context_sha256": "03cab2e988ba36a62cf2e3ee271984f1904fb027608f13477ea979197575e4f9",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "severity": "fatal",
    "defect_type": "logic",
    "reason": "The original metric definition imposed no compatibility at all with P, so it did not define a structure on the marked pared pair. The repair distinguishes a generic hyperbolic metric from a pared structure and requires injective discrete parabolic peripheral holonomy of the correct rank. Torus cusps must be embedded marked end neighborhoods; the annular/geodesic-boundary qualification is explicit. Yoshida Section 2, printed p.459, was consulted for the pared locus and annular cusp conventions.",
    "uncertain": false,
    "source_urls": [
      "https://msp.org/pjm/2013/266-2/pjm-v266-n2-s.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-adjudication",
    "id": "lem-figure-eight-ideal-gluing-and-cusp-completeness",
    "model": "gpt-6-luna",
    "context_sha256": "81e5520bffe02ffe9aa7bf6f89c0f08bd1bd8f07e8a5993d522dcc227c89e653",
    "outcome": "false_positive",
    "status": "false-positive",
    "severity": null,
    "defect_type": null,
    "reason": "The supplied closure definition explicitly distinguishes a raw topological image from the smooth-category closure. For finite elementary words it retains smooth endpoint-flat representatives without a choice assumption; K8 denotes that smooth oriented closure, not the raw diamond paths. F6 only names exterior/peripheral terminology: the diagram cutting in step 1.1 and the torus-link computation supply the complement and its peripheral end directly, without applying a product-tube theorem to a nonsmooth raw image. Face, edge and corner traces, both diagrams, and the regular-shape equations agree.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-adjudication",
    "id": "thm-mostow-prasad-rigidity-for-standard-finite-volume-cusped-three-manifolds",
    "model": "gpt-6-luna",
    "context_sha256": "c975455aea26aa115ff9557fed15915821e230f99dadc562af51c39f33ae914e",
    "outcome": "false_positive",
    "status": "false-positive",
    "severity": null,
    "defect_type": null,
    "reason": "F2 explicitly cites the bound proved in the boundary-extension supplier, not only its Statement. Supplier steps 5.1–6.1 normalize an ideal triangle and bound points near all three sides in a compact set, giving the uniform center bound. Thus F and the realizing isometry are uniformly close as used in step 3.1. The Haar-mass calculation meets F3, the centralizer argument gives uniqueness, and the convex horoball tail argument supplies properness of the homotopy to any proper equivalence.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-adjudication",
    "id": "lem-hyperbolic-knot-exterior-irreducibility-and-boundary-incompressibility",
    "model": "gpt-6-luna",
    "context_sha256": "5f30ab6f4245b82d7120ea9700cbca15c806659d9c6cac4d1c7028a01f2ceff9",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "severity": "nonfatal",
    "defect_type": null,
    "reason": "F1 defines only topological terms and has no choice premise; F2 assumes full AC, not an AC-omega branch. The repair states that exact F2 hypothesis, proves AC implies countable choice by restriction, and locates the inherited countable-choice use in the chosen tubular exterior definition. The nontrivial smooth-knot hypotheses still give both conclusions directly, and atoroidality/non-Seifertness are harmless extra hypotheses.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "path": "research/published-consumer-supplier-ledger.md",
    "action": "record-no-published-repair",
    "ids": [
      "def-ideal-tetrahedron-shape-and-cusp-holonomy",
      "lem-uniform-circular-distortion-gives-planar-quasiconformality",
      "lem-horocusp-truncation-has-finite-volume",
      "lem-complete-curvature-minus-one-manifolds-are-kleinian-quotients",
      "lem-finite-volume-hyperbolic-three-manifolds-have-finite-standard-cusp-decompositions",
      "thm-regular-ideal-tetrahedron-volume",
      "def-pared-hyperbolic-structures-and-volume",
      "lem-figure-eight-ideal-gluing-and-cusp-completeness",
      "thm-mostow-prasad-rigidity-for-standard-finite-volume-cusped-three-manifolds",
      "lem-hyperbolic-knot-exterior-irreducibility-and-boundary-incompressibility"
    ],
    "reason": "All ten assigned carriers and all 17 direct consumers of the two changed definitions are draft items in the frozen frontier. No published repair or potentially defective published direct consumer was discovered. The published quadrilateral supplier auxiliary argument supports F3 as cited; no publication or audit stamp is changed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "def-multicusped-dehn-filling",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The unquotiented plane lacked the sign selection required by Thurston Definition 4.5.1. Made the signed full-turn/eigenline convention explicit and distinguished its intrinsic quotient modulo sign; ordinary slopes, attachments and cone angles are preserved.",
    "evidence": "research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u73.json",
    "uncertain": false,
    "familiar": false,
    "source_urls": [
      "https://library.slmath.org/nonmsri/gt3m/PDF/4.pdf"
    ]
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "cex-knot-kt-19-boundary-case",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The gcd witness already refutes the universal claim, but F1 and 2.1 improperly inferred a realized cone completion. Both now retain the realization condition; no existence claim is needed for the counterexample.",
    "evidence": "research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u73.json",
    "uncertain": false,
    "familiar": true,
    "source_urls": []
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "thm-small-augmented-holonomy-deformations-have-smooth-geometric-fillings",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The holonomy supplier actually constructs a slice and affine frames in Proof 8.1–10.1, so no new prerequisite is missing. F1 now cites these constructions precisely and derives the missing zero-log translation ratio by commutativity and continuity across the coordinate hyperplane. Reviewed Lorentz blending, end equivariance, Fermi-coordinate lattice, smooth core, completeness and volume computations; Statement unchanged.",
    "evidence": "research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u73.json",
    "uncertain": false,
    "familiar": true,
    "source_urls": []
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-closed-hyperbolic-three-manifold-has-no-z2-subgroup",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The listed covering and deck interfaces give evenly covered sheets and a free action, but compact-set finiteness was asserted without derivation. Added Proof 3.1: a sheet pair admits at most one deck map; a finite subcover of C×D gives finiteness, and finitely many lifted compact closures give a cocompact set. The later parabolic and centralizer arguments now cite that derivation. Statement and countable-choice hypothesis unchanged.",
    "evidence": "research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u73.json",
    "uncertain": false,
    "familiar": true,
    "source_urls": []
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "thm-thurston-hyperbolic-dehn-filling",
    "outcome": "false_positive",
    "status": "false-positive",
    "reason": "The current supplier does establish existence: its F3 and Proof 2.1 apply the simultaneous full-turn solution lemma to every tuple in a product exterior-of-radius neighborhood; Proof 3.1 then applies geometric realization. Checked the contraction proof, including zero coordinates, 3/4 denominator bound and uniform contraction. Thus the theorem F1 and Proof 1.1 use an actual proved conclusion, not merely conditional holonomy equations. Its lattice finiteness and length-norm argument are sound.",
    "evidence": "research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u73.json",
    "uncertain": false,
    "familiar": true,
    "source_urls": []
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "ex-knot-kt-19-worked-cases",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "F5 omitted the supplier’s countable-choice and orientability hypotheses. Restored both and checked Proof 3.1: the orientation extends over the orientation-reversing solid-torus attachment and AC implies ACω. Added the supplier-required AC to the complete Example description, clarified that the cusped metric is on the exterior interior, and restated F7 as the covering definition actually used to verify the explicit pullback. Replaced the ambiguous sphere-like sketch by the oriented square quotient for T² with the same monodromy matrix. The injected torus group and volume argument remain intact.",
    "evidence": "research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u73.json",
    "uncertain": false,
    "familiar": true,
    "source_urls": []
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "lem-primitive-pair-defines-torus-slope",
    "route": "frontier-owner-batch-73",
    "affected_use": "Assigned def-multicusped-dehn-filling uses the primitive-pair correspondence in its first Definition paragraph.",
    "invalidated_claim": "The uniqueness proof in supplier Proof 2.1 asserts a least-transverse-width bigon projects injectively without defining the width, proving its minimum exists, or establishing the translate-reduction assertion.",
    "minimality": "Repair that one bigon argument, or supply an exact source-backed bigon criterion under the authorized source boundary. The torus classification claim itself is standard; no change to its Statement or to assigned ordinary filling claims is required.",
    "reason": "Current read confirms the same precise proof gap raised in the rejection-blind Step-4 digest. This unassigned supplier was not edited or independently adjudicated; owner repair is required before global closure.",
    "uncertain": false,
    "familiar": true,
    "source_urls": []
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "action": "record-no-published-consumer-impact",
    "supplier": "def-multicusped-dehn-filling",
    "reason": "All nine direct item consumers are draft members of the frozen frontier. No published or outside-frontier direct consumer was found by dependency/reference search; no published item was edited and no publication audit credit is claimed.",
    "consumers": [
      "lem-one-cusped-deformation-parameters-and-holonomy",
      "thm-thurston-hyperbolic-dehn-filling",
      "cex-knot-kt-19-boundary-case",
      "ex-knot-kt-19-worked-cases",
      "def-cusp-slope-length",
      "lem-zero-filling-of-fibered-knot-is-a-torus-bundle",
      "lem-smooth-hyperbolic-dehn-filling-from-trivial-peripheral-holonomy",
      "lem-dehn-filling-deformation-and-completeness",
      "thm-small-augmented-holonomy-deformations-have-smooth-geometric-fillings"
    ],
    "uncertain": false,
    "familiar": true,
    "source_urls": []
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "def-locally-flat-pl-knot-concordance",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The annulus has intrinsic PL collars automatically, whereas concordance requires agreement with the ambient end products. The old clause did not explicitly impose that agreement. Added the two image equalities with a common positive collar width; properness, PL pair charts and oriented boundary are unchanged. This is a nonfatal clarification of the intended supplier convention, with no item consumers in current items/ or page narrative.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "thm-locally-flat-codimension-three-arc-unknotting",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "F2 omitted the smooth supplier's endpoint and vertical-image collar hypotheses. This is a nonfatal restatement error: proof 1.1 reparametrizes the same image to beta(s)=(p,s) near both endpoints, and 2.1 preserves those collars through relative smoothing before using F2. Restored the exact hypotheses in F2; neither Statement nor proof changes. Checked the smoothing supplier Statement/proof and the complete smooth-arc supplier construction; the two relative isotopies concatenate with a common fixed boundary neighborhood.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-knot-concordance-compatible-with-connected-sum",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The isotopy-extension Statement does not supply the extra stationary-subtrack velocity prescription attributed to it in F3. The omitted relative construction is available, so this is nonfatal; replaced its use with the existing smooth collared-arc lemma at exactly its endpoint/collar hypotheses. Also repaired Step 4 concern: height is submersive along the vertical core, so choose levelwise strips/normal disks, then extend the ball isotopy in S3 to trivialize the complements before product gluing. The annulus has oriented boundaries minus(K0#J0), K1#J1 and Euler characteristic zero. The TOP external input and arithmetic map/inverse/modulus/finite-cover certificate transfer are retained.",
    "uncertain": false,
    "source_urls": [
      "https://eprints.gla.ac.uk/70688/1/70688.pdf",
      "https://karagila.org/files/set-theory-2017.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "def-smooth-and-topological-slice-genus",
    "outcome": "false_positive",
    "status": "false-positive",
    "reason": "The rejection overlooks the first deps entry: lem-smooth-and-topological-slice-genus-minima-exist independently defines precisely these two genus sets and proves both nonempty with least elements under the same countable-choice hypothesis. Its proof pushes a smooth Seifert surface into the standard ball, giving a competitor in both categories, then uses the ordering of nonnegative integers. It does not depend on this definition, so the ordinary acyclic deps edge is correct; moving it to justified_by would violate the required reverse-dependency condition. No missing mathematics or repair.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "ex-knot-kt-21-worked-cases",
    "outcome": "false_positive",
    "status": "false-positive",
    "reason": "The group theorem Statement explicitly asserts the TOP reverse-mirror inverse under countable choice, which is exactly what Verification 3.1 uses. Its F2 and A1, and Proof 3.1, explicitly identify the compatibility supplier and its compact real-code/L[r] specialization. F6 is therefore accurate proof-provenance commentary, not an extra theorem hypothesis or conclusion. The ribbon supplier gives a smooth proper disk with radial indices 0/1; local flatness and chi(D)=1 put zero in both nonnegative genus sets. Cleared only the contract's obsolete topological-branch-incomplete annotation; the item remains unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "published-consumer-ledger",
    "action": "no-update",
    "reason": "All five assigned carriers are draft. The only changed Definition has no direct item dependency/reference consumers; its owning YAML-only page inventory remains valid. No published-consumer defect or outside maintenance repair was found.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-integral-seifert-form-is-realized-by-a-knot",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "location": "Facts F2 and original Proof 4.1",
    "reason": "F2 omitted the spanning-surface and transversality hypotheses of its cited theorem. This is a routine prerequisite gap: existing surface-existence, compact-embedding transversality, regular-projection and AC-to-countable-choice suppliers close it without changing the realization claim. Repaired F2, supplied every hypothesis in Proof 1.2, and made the twist and clasp calculations use that step.",
    "uncertain": false,
    "source_urls": [
      "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/living.pdf",
      "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rolfsen.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-seifert-matrix-s-enlargement-preserves-algebraic-concordance-class",
    "outcome": "false_positive",
    "disposition": "false-positive",
    "location": "Statement hypothesis and Proof 1.1–2.1",
    "reason": "The Statement assumes an integral Seifert matrix, not an arbitrary even-order integer matrix. The cited metabolic-lattice definition requires a unimodular skew part, and an actual knot matrix has that property. Thus V=0_2 is inadmissible. The wider domain on which S-equivalence is defined does not remove this lemma's hypothesis. The integral basis change c=-J^{-1}(x-y) yields J plus a unimodular skew block in both cases, and the displayed primitive half-rank diagonal subgroup annihilates E_i plus (-V).",
    "uncertain": false,
    "source_urls": [
      "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/living.pdf"
    ],
    "familiar": true
  },
  {
    "id": "def-bounding-chain-torsion-linking-pairing",
    "severity": "nonfatal",
    "status": "fixed",
    "reason": "Added explicit cycle representatives; the signed expression and its independence qualification are preserved.",
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "outcome": "confirmed_nonfatal",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "id": "thm-compact-manifolds-are-retracts-of-finite-polyhedra-without-choice",
    "severity": "nonfatal",
    "status": "fixed",
    "reason": "Restricted F1 to compatible grid cubes and verified its CW conditions; the retract construction and Statement remain unchanged.",
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "outcome": "confirmed_nonfatal",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "id": "def-smooth-slice-disk-exterior",
    "severity": "nonfatal",
    "status": "fixed",
    "reason": "Chose the disk orientation and induced knot orientation explicitly; the exterior and normal-circle convention are preserved.",
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "outcome": "confirmed_nonfatal",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "id": "def-zero-surgery-on-a-knot",
    "severity": "nonfatal",
    "status": "fixed",
    "reason": "Replaced the interior core in the boundary gluing with its boundary-parallel longitude, preserving both filling coordinates.",
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "outcome": "confirmed_nonfatal",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "id": "def-cyclic-zero-surgery-cover",
    "severity": "nonfatal",
    "status": "fixed",
    "reason": "Specified the closed lift of μ^q, cited the longitude theorem directly and licensed extension across filling by van Kampen.",
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "outcome": "confirmed_nonfatal",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "id": "def-blanchfield-pairing-and-higher-order-rho-invariant",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "status": "fixed",
    "reason": "Added the arbitrary-target finite-projective signature supplier and its countable-image agreement without changing the Definition.",
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "outcome": "confirmed_fatal",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "id": "lem-signature-additivity-under-gluing",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "status": "fixed",
    "reason": "Added the arbitrary-target signature foundation to deps/F1; checked coisotropic additivity with the original Statement unchanged.",
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "outcome": "confirmed_fatal",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "id": "lem-zero-surgery-cyclic-cover-homology-splitting",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "status": "fixed",
    "reason": "Added the actual map-lifting criterion to deps/F7; verified surface hypotheses, the two filling cokernels and integral meridian retraction.",
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "outcome": "confirmed_fatal",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "def-torsion-linking-form-and-casson-gordon-bordism",
    "severity": "nonfatal",
    "route": "frontier-owner",
    "reason": "Its Definition introduces x,y as homology classes but uses ∂C=nx and C·y without explicit cycle representatives. This unassigned item needs the same notational clarification as the assigned bounding-chain definition; no item edit or adjudication is claimed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "no-update",
    "reason": "All eight changed item carriers and all thirteen direct consumers examined here are draft frozen-frontier items. No published item was repaired or found newly defective in this assignment.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "thm-freedman-disk-embedding-theorem-proof-modules",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "reason": "The original hypothesis placed only attaching circles in the ambient boundary. An intrinsic handle homeomorphism alone does not supply the ambient half-space charts asserted in step 2.1. Made the intended neighborhood condition explicit: each tower is relatively open in X and meets the ambient boundary exactly in its full attaching region. New step 2.1 composes its handle charts with inclusion, proves local flatness at interior and boundary points, and checks the boundary inverse-image equality. Step 3.1 transports framing and disjointness. The standardization remains a hypothesis; no Casson-handle theorem or normal-bundle existence is assumed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "adjudication_ref": {
      "file": "research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u78.json",
      "model": "gpt-6-luna",
      "context_sha256": "d11f1021e580e3e21c411cb66537fbd9ddf082751fc144d7caa2b6b061ababbd"
    },
    "defect_type": "logic"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "thm-freedman-disk-embedding-for-good-groups",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The conclusion referred to boundary framings without supplying that datum in its hypotheses; citing intersection conventions does not quantify over a framing. This is a nonfatal specification omission: the complete proof already treats arbitrary prescribed boundary classes. Added the missing normal-microbundle boundary framing explicitly, allowing nonextending classes. Steps 7.1–10.1 track Euler obstruction separately from Wall mu, while 11.1 transports the external marking only on an annulus; therefore no extending-framing assumption or claim is added. Checked the repaired core supplier against F3 and step 12.1: the smooth construction supplies its actual relative attaching collars, and the latter step invokes the skyscraper lemma directly.",
    "uncertain": false,
    "source_urls": [
      "https://www.maths.gla.ac.uk/~mpowell/s00029-025-01069-y.pdf"
    ],
    "familiar": false,
    "adjudication_ref": {
      "file": "research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u78.json",
      "model": "gpt-6-luna",
      "context_sha256": "b60c6b3ca58d4728ebc1fee396a05e070454fcc2ec66a047806061960b92a119"
    }
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "action": "record-scope-disposition",
    "ids": [
      "lem-freedman-casson-handle-skyscraper-and-surgery-modules",
      "thm-freedman-disk-embedding-theorem-proof-modules",
      "thm-freedman-disk-embedding-for-good-groups",
      "lem-alexander-one-knot-has-trivial-alexander-basis"
    ],
    "reason": "All four assigned carriers are draft. No published carrier was edited. The changed core-extraction Statement has only the assigned draft good-group theorem as a direct item consumer; that use remains sound through its actual supplied smooth attaching collars. The latter framing clarification has no direct item consumer. No new published mathematical defect or necessary published consumer repair was found.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-asd-deformation-complex-index-formula",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "reason": "Step 2.2 used smooth kernel/cokernel representatives not supplied by F1’s stated index interface. Added the existing published lem-chiral-dirac-is-fredholm-with-kernel-and-cokernel as a direct dependency and F4; it identifies both Hilbert spaces with smooth opposite-chirality kernels on the closed four-manifold. The explicit Clifford construction, harmonic calibration b1−1−b_minus, adjoint trace ch(G)=3−4c2, multiplicity two and real complexification then give the unchanged index formula. This is a dependency_citation defect, not a false index formula.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-asd-regularity-perturbation-and-orientability",
    "outcome": "confirmed_nonfatal",
    "defect_type": null,
    "reason": "The conclusion is already supplied by F4 for the stated topology, but Proof 2.1 misidentifies the bound: perturbation values are uniformly H3-bounded, while the curvature equation on bounded smaller slice balls yields an H4 bound on solutions. Replaced the inaccurate phrase by that derivation and compact H4-to-H3 inclusion. Compact-set derivative control preserves surjectivity; finite cokernel directions and Sard prove density. This is a nonfatal explanatory defect because F4 directly proves the unchanged assertion.",
    "uncertain": false,
    "source_urls": [
      "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/donaldson.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "lem-donaldson-reducible-ends-and-one-instanton-compactification",
    "reason": "F2’s full constructive proof supplies more than smoothness of a zero locus. In its Proof 4.1–6.1 the prepared section in range/obstruction coordinates is (u,g(u,z)+eta*alpha(z)) near zero, with alpha onto and Dg(0,0)=0. Its z derivative is eta*alpha at zero and stays onto after shrinking, by a bounded right inverse and the Neumann argument. The first range block is the identity, so the whole slice derivative is onto. For p=0 the obstruction target is zero and the range block already suffices. Away from the vertex the effective circle acts freely and its orbit direction lies in the kernel, so quotienting removes one kernel direction without altering surjectivity; index six becomes dimension five. Thus the protected punctured cone is regular before the middle perturbation. F4 supplies the regular ideal collar; middle transversality and compact support preserve both. The rejection’s general caution is correct but does not apply to this constructed perturbation.",
    "uncertain": false,
    "source_urls": [
      "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/donaldson.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "published-consumer-ledger",
    "action": "no-update",
    "reason": "All three assigned items are draft frontier carriers. Both repairs leave their original Statement sections byte-identical; no new item/interface or defective published consumer was discovered in this review. No separate published maintenance update is proposed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-ip-gaussian-sequence-inverse-model",
    "severity": "nonfatal",
    "location": "definition",
    "finding": "The explicit positive-index convention rebound N in conflict with def-natural-numbers, although the local model was internally coherent.",
    "correction": "Use N_{>0} for the singular system, parameter and sample spaces, coordinate law and both diagram targets.",
    "post_sha256": "8cadaa1dea65f1ca6ec23a0127707b89cd4e637d2cb47b917b2f3deab9931467",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "route-direct-consumer-finding",
    "id": "alg-ip-svd-truncated-estimator",
    "supplier": "def-ip-gaussian-sequence-inverse-model",
    "route": "frontier-owner",
    "source_excerpt": "Input a normalized sequence observation $z=(z_j)_{j\\in\\mathbb N}\\in\\mathbb R^{\\mathbb N}$ from the Gaussian sequence inverse model and a cutoff $D\\in\\mathbb N_0$, where $\\mathbb N_0=\\{0,1,2,\\ldots\\}$. Output the finite-support estimate $\\widehat\\theta_D(z)\\in\\ell^2(\\mathbb N,\\mathbb R)$ defined by",
    "affected_use": "Input and output spaces use N while the output branches cover only j>=1; no branch defines coordinate 0. Replace coordinate-index N by N_{>0}, retaining the cutoff set N_0 and D=0 boundary.",
    "status": "owner-repair-required",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "route-direct-consumer-finding",
    "id": "cex-ip-point-mass-prior-excludes-truth-no-contraction",
    "supplier": "def-ip-gaussian-sequence-inverse-model",
    "route": "frontier-owner",
    "source_excerpt": "1.1 The prior $\\delta_0=N(0,0)$ is a proper centered Gaussian law. Under its prior-predictive joint law, $\\theta=0$ almost surely, so for every Borel $A\\subseteq\\ell^2$ and product-Borel $B\\subseteq\\mathbb R^{\\mathbb N}$, $\\mathbb P(\\theta\\in A,Y\\in B)=\\mathbf 1_A(0)\\mathbb P_0^\\epsilon(Y\\in B)=\\int_B\\delta_0(A)\\,\\mathbb P_0^\\epsilon(dy)$. Thus the constant kernel $y\\mapsto\\delta_0$ is a posterior version. The prior assigns zero mass to every ball centered at $e_1$ of radius less than $1$. [A1, F1, F3, given, construct]",
    "affected_use": "Step 1.1 quantifies data events in R^N while the supplied law is on R^{N_{>0}}. Replace this proof-only space occurrence by N_{>0}. The constant posterior delta_0 and truth e_1=(1,0,...) remain sound; its Statement refuted need not change.",
    "status": "owner-repair-required",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "route-direct-consumer-finding",
    "id": "def-ip-minimax-detection-risk-and-separation",
    "supplier": "def-ip-gaussian-sequence-inverse-model",
    "route": "frontier-owner",
    "source_excerpt": "$$\\Theta_q(r)=\\left\\{\\eta\\in\\mathbb R^{\\mathbb N}:(\\sigma_j\\eta_j)_{j\\ge1}\\in\\ell^2,\\ \\sum_{j=1}^{\\infty}|a_j\\sigma_j\\eta_j|^q\\le1,\\ \\sum_{j=1}^{\\infty}\\sigma_j^2\\eta_j^2\\ge r^2\\right\\}.$$",
    "affected_use": "The Definition gives alternatives and tests on R^N although eta_j=theta_j/sigma_j and all constraints use positive indices. Align these spaces with R^{N_{>0}}; retain scaling, the null and alternative, and the empty-alternative conventions.",
    "status": "owner-repair-required",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "route-direct-consumer-finding",
    "id": "def-ip-posterior-contraction-rate",
    "supplier": "def-ip-gaussian-sequence-inverse-model",
    "route": "frontier-owner",
    "source_excerpt": "Let $\\mathbb N=\\{1,2,3,\\ldots\\}$. For each positive noise level $\\epsilon$, let $\\Pi_{0,\\epsilon}$ be a proper Borel prior on $\\ell^2(\\mathbb N,\\mathbb R)$ in the Gaussian sequence inverse experiment, and let $\\mathbb P_{\\Pi_{0,\\epsilon}}$ be the resulting prior-predictive joint law of parameter and data. A posterior kernel is a data-measurable assignment $y\\mapsto\\Pi_\\epsilon(\\cdot\\mid y)$ of Borel probability measures on $\\ell^2$ satisfying",
    "affected_use": "This Definition independently rebinds N={1,2,...}. Replace that local convention and its parameter/data occurrences by N_{>0}; preserve the posterior-version caveat and prior-predictive and fixed-truth laws.",
    "status": "owner-repair-required",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "route-direct-consumer-finding",
    "id": "def-ip-statistical-ellipsoid-class",
    "supplier": "def-ip-gaussian-sequence-inverse-model",
    "route": "frontier-owner",
    "source_excerpt": "Let $Q\\in[0,\\infty)$ and let $a=(a_j)_{j\\in\\mathbb N}$ be a nondecreasing sequence of positive real numbers, so $0<a_1\\le a_2\\le\\cdots$. The statistical ellipsoid of radius $Q$ and weights $a$ in the Gaussian sequence inverse model is",
    "affected_use": "The defining family and ell2 space use N although the weighted sum starts at 1. Replace those coordinate-index sets by N_{>0}; retain Q>=0, positive nondecreasing weights and the absence of a divergence assumption.",
    "status": "owner-repair-required",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "route-direct-consumer-finding",
    "id": "ex-ip-solit-periodic-heat-equation",
    "supplier": "def-ip-gaussian-sequence-inverse-model",
    "route": "frontier-owner",
    "source_excerpt": "Let the real periodic Fourier coefficient space be $X=Y=\\mathbb R\\oplus\\ell^2(\\mathbb N;\\mathbb R^2)$, with one constant coordinate and cosine–sine coordinate pairs for each positive frequency, and give it the canonical inner product $\\langle(c_0,(a_n,b_n)),(d_0,(c_n,d_n))\\rangle=c_0d_0+\\sum_{n\\ge1}(a_nc_n+b_nd_n)$. The interleaving map $(c_0,(a_n,b_n))\\mapsto(c_0,a_1,b_1,a_2,b_2,\\ldots)$ is an isometry onto real $\\ell^2(\\mathbb N)$, so this is a real Hilbert space. For a heat time $\\bar t>0$, define the periodic heat forward operator by",
    "affected_use": "The frequency-pair space is ell2(N;R^2), but the pairing and heat map cover only n>=1. Including n=0 makes the displayed pairing ignore two nonzero coordinates. Use N_{>0} for positive frequencies, retain the separate constant, and explicitly enumerate/reindex the interleaved scalar coordinates for the model.",
    "status": "owner-repair-required",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "route-direct-consumer-finding",
    "id": "ex-ip-solit-satellite-gradiometry",
    "supplier": "def-ip-gaussian-sequence-inverse-model",
    "route": "frontier-owner",
    "source_excerpt": "For a relative satellite radius $R>1$, identify the mean-zero real Fourier coefficients of a function on the unit circle with $X=\\ell^2(\\mathbb N;\\mathbb R^2)$, where the two coordinates at frequency $n$ are its normalized cosine and sine coefficients, and give this space the canonical inner product $\\langle(a_n,b_n),(c_n,d_n)\\rangle=\\sum_{n\\ge1}(a_nc_n+b_nd_n)$. Interleaving the coordinates identifies it isometrically with real $\\ell^2(\\mathbb N)$, so $X$ is a real Hilbert space. In these coordinates define the 2D satellite-gradiometry operator by",
    "affected_use": "The mean-zero frequency-pair space is ell2(N;R^2), but the pairing and operator cover only n>=1. Including n=0 makes the pairing degenerate. Use N_{>0} for positive frequencies and explicitly enumerate/reindex the scalar interleaving; retain the singular ordering and omission of the constant mode.",
    "status": "owner-repair-required",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "route-direct-consumer-finding",
    "id": "lem-ip-power-source-class-as-statistical-ellipsoid",
    "supplier": "def-ip-gaussian-sequence-inverse-model",
    "route": "frontier-owner",
    "source_excerpt": "$$\\left\\{\\theta\\in\\ell^2(\\mathbb N,\\mathbb R):\\sum_{j\\ge1}s_j^{-2\\nu}\\theta_j^2\\le\\rho^2\\right\\}.$$",
    "affected_use": "The Statement ellipsoid and F1 coefficient isometry use ell2(N), but the supplier supplies positive-index coefficients. With global N the right side includes arbitrary theta_0 and cannot equal this coefficient image. Replace coordinate-index N by N_{>0}; preserve the source-ball hypotheses and its separate assigned MVT repair obligation.",
    "status": "owner-repair-required",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "route-direct-consumer-finding",
    "id": "thm-ip-conjugate-gaussian-sequence-contraction",
    "supplier": "def-ip-gaussian-sequence-inverse-model",
    "route": "frontier-owner",
    "source_excerpt": "Assume the Axiom of Choice and the Axiom of Countable Choice. Let $0<\\epsilon$, let $(s_j)_{j\\ge1}$ be the positive singular values in the Gaussian sequence inverse model, and let a fixed truth $\\theta^\\dagger=(\\theta^\\dagger_j)_{j\\ge1}$ belong to $\\ell^2(\\mathbb N,\\mathbb R)$. Let $\\tau_j>0$ satisfy $\\sum_{j\\ge1}\\tau_j^2<\\infty$, and let the prior be a Borel probability on $\\ell^2$ whose coordinates are independent $N(0,\\tau_j^2)$ variables, independent of the observation noise. Under the prior-predictive law the observations are $Y_j=s_j\\theta_j+\\epsilon\\xi_j$; under the fixed truth they are $Y_j=s_j\\theta^\\dagger_j+\\epsilon\\xi_j$, where the $\\xi_j$ are independent $N(0,1)$ variables. Define $v_j=(\\tau_j^{-2}+s_j^2/\\epsilon^2)^{-1}$ and $\\lambda_j=\\tau_j^2s_j^2/(\\epsilon^2+\\tau_j^2s_j^2)$. For fixed-truth-almost every data sequence, a posterior version on $\\ell^2$ is the restriction of $\\bigotimes_{j\\ge1}N(\\lambda_jY_j/s_j,v_j)$. Its expected posterior squared distance from the truth is",
    "affected_use": "The Statement uses ell2(N), and F1 and steps 2.1–3.1 use R^N for products over j>=1. Replace coordinate-space N by N_{>0}; retain all posterior means, variances, trace conditions and risk identities.",
    "status": "owner-repair-required",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "route-direct-consumer-finding",
    "id": "thm-ip-general-source-minimax-comparison",
    "supplier": "def-ip-gaussian-sequence-inverse-model",
    "route": "frontier-owner",
    "source_excerpt": "$$\\Theta_a(Q)=\\left\\{\\theta\\in\\ell^2(\\mathbb N,\\mathbb R):\\sum_{j\\ge1}a_j^2\\theta_j^2\\le Q^2\\right\\}.$$",
    "affected_use": "The Statement ellipsoid and F1 spaces use N while observations have j>=1. With global N, theta_0 is unobserved and unconstrained, giving unbounded squared risk. Replace coordinate-space N by N_{>0}; keep the independent factorial induction index k in N, whose base case is k=0.",
    "status": "owner-repair-required",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "route-direct-consumer-finding",
    "id": "thm-ip-truncated-estimator-exact-risk",
    "supplier": "def-ip-gaussian-sequence-inverse-model",
    "route": "frontier-owner",
    "source_excerpt": "Assume Countable Choice and let $\\epsilon\\ge0$. In the Gaussian sequence inverse model with positive singular numbers $(s_j)_{j\\in\\mathbb N}$, let $Q\\ge0$ and let $(a_j)_{j\\in\\mathbb N}$ be positive and nondecreasing. For each $\\theta\\in\\Theta_a(Q)$, define the squared sequence risk of the cutoff estimator at $D\\in\\mathbb N_0$ by",
    "affected_use": "The Statement indexes singular values and weights by N. Align these with N_{>0}; the variance and tail sums in steps 1.1–4.1 remain exactly the same, including D=0 and Q=0.",
    "status": "owner-repair-required",
    "uncertain": false
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "action": "retain-existing-maintenance-route",
    "id": "def-square-summable-family-on-an-arbitrary-index-set",
    "existing_entry": "inverse-problems-knot-theory-all-109-2026-10-19-3a-b8-published-format-1",
    "consumer": "def-ip-gaussian-sequence-inverse-model",
    "status": "owner-reference-relocation-pending",
    "reason": "Current complete supplier Definition/Statement still has inline hyperlinks. The existing canonical published ledger already records this presentation finding and pending relocation. Its mathematics used by the model is sound. No published item was edited and no duplicate finding or audit acceptance is proposed.",
    "uncertain": false
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "action": "retain-existing-maintenance-route",
    "id": "def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis",
    "existing_entry": "inverse-problems-knot-theory-all-109-2026-10-19-3a-b8-published-format-2",
    "consumer": "def-ip-gaussian-sequence-inverse-model",
    "status": "owner-reference-relocation-pending",
    "reason": "Current complete supplier Definition/Statement still has inline hyperlinks. The existing canonical published ledger already records this presentation finding and pending relocation. Its mathematics used by the model is sound. No published item was edited and no duplicate finding or audit acceptance is proposed.",
    "uncertain": false
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "action": "retain-existing-maintenance-route",
    "id": "thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set",
    "existing_entry": "inverse-problems-knot-theory-all-109-2026-10-19-3a-b8-published-format-3",
    "consumer": "def-ip-gaussian-sequence-inverse-model",
    "status": "owner-reference-relocation-pending",
    "reason": "Current complete supplier Definition/Statement still has inline hyperlinks. The existing canonical published ledger already records this presentation finding and pending relocation. Its mathematics used by the model is sound. No published item was edited and no duplicate finding or audit acceptance is proposed.",
    "uncertain": false
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "action": "retain-existing-maintenance-route",
    "id": "thm-singular-value-decomposition-for-compact-operators",
    "existing_entry": "inverse-problems-knot-theory-all-109-2026-10-19-3a-b8-published-format-4",
    "consumer": "def-ip-gaussian-sequence-inverse-model",
    "status": "owner-reference-relocation-pending",
    "reason": "Current complete supplier Definition/Statement still has inline hyperlinks. The existing canonical published ledger already records this presentation finding and pending relocation. Its mathematics used by the model is sound. No published item was edited and no duplicate finding or audit acceptance is proposed.",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "thm-cdr-concordance-categories-form-abelian-groups",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "status": "fixed",
    "finding": "F4 definition did not supply smooth concordance compatibility.",
    "repair": "Cite lem-knot-concordance-compatible-with-connected-sum under the existing AC_omega hypothesis; preserve the separate localized proof.",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-satellite-connected-sum-substitution",
    "severity": "nonfatal",
    "status": "fixed",
    "finding": "F3 overstates C1 inverse regularity.",
    "repair": "Use the published choice-free smooth inverse-function lemma for the smooth straightening maps.",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-cha-kim-integral-solvability-and-blanchfield-bordism",
    "severity": "nonfatal",
    "status": "fixed",
    "finding": "Title implied integral solvability rather than persistence of supplied pair data.",
    "repair": "Retitle item and manifest mirror; preserve complete conditional Statement, proof and explicit existence caveat.",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding"
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "path": "research/published-consumer-supplier-ledger.md",
    "action": "no-update",
    "reason": "All nine assigned items are draft; no Statement/Definition changed and no published consumer was found defective."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "cex-knot-kt-28-boundary-case",
    "severity": "nonfatal",
    "disposition": "fixed",
    "location": "frontmatter",
    "reason": "Display title omitted the full-AC qualification already explicit in the refuted statement and proof. Added Under full AC to the item title and owning batch-81 manifest title; no mathematical interface changed.",
    "evidence": "research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u81.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-bmw-descending-tangle-spanning",
    "severity": "fatal",
    "defect_type": "logic",
    "status": "fixed",
    "location": "proof-step",
    "source_step": "1.3",
    "reason": "A descending open arc can contain a type-I curl, which regular isotopy cannot remove. The old terminal argument omitted its nontrivial scalar. Step 1.3 now uses ambient simplification and accounts for every type-I move on both arcs and circles with a power of a; step 2.1 separately proves regular-isotopy uniqueness for simple layered arcs.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/math/0411155"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-bmw-presentation-tangle-evaluation-is-well-defined",
    "severity": "fatal",
    "defect_type": "logic",
    "status": "fixed",
    "location": "proof-step",
    "source_step": "2.2",
    "reason": "A lone top-bottom or left-right reflection interchanges positive and negative crossing generators, so the original reflection argument did not establish the other positive adjacent relations. Step 3.1 now cancels the explicit two-crossing cup slide and uses reflection together with over/under interchange, which fixes positive generators, to obtain all four relations. Also moved the correct generator schematic out of Facts into a fenced Diagram section.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/math/0411155"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "lem-bmw-descending-tangle-spanning-and-independence",
    "reason": "The cited spanning proof already establishes uniqueness for loop-free, self-crossing-free descending representatives. Verified the factorization meets these precise hypotheses; no defect or carrier repair is required.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/math/0411155"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "no-update",
    "reason": "All three assigned items are draft. Both repairs preserve their exact original Statement sections and dependencies, so no published consumer interface event or maintenance repair is generated. No published item was edited or newly audited.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-kauffman-bracket-skein-module-of-a-three-manifold",
    "severity": "fatal",
    "defect_type": "logic",
    "status": "fixed",
    "locus": "Definition: local crossing triple framing",
    "finding": "Confirmed a defining-relation logic defect: the old Definition fixes only the core crossing and the smoothing framings. An extra full twist in a crossing ribbon relative to its endpoint bands changes the framed-link class while preserving those specified data. Allowing both versions with identical smoothings would identify classes differing by a framing twist. The repair specifies untwisted blackboard framing for all three local tangles and matching framed endpoint collars; it preserves the ring, endpoint pairings, coefficients, empty link, and zero-framed circle relation.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/math/9809113",
      "https://letu.math.gatech.edu/Papers/Lectures_Luminy_2014_new.pdf"
    ],
    "familiar": false,
    "source_excerpt": "The smoothed strips carry\nblackboard framing.",
    "affected_path": "items/def-kauffman-bracket-skein-module-of-a-three-manifold.md",
    "minimality": "Extend blackboard framing to the crossing and both smoothings, prohibit additional twists, and match endpoint collars; all other defining data are preserved."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "def-skein-tqft-state-space-and-handlebody-pairing",
    "route": "frontier owner",
    "locus": "Definition: relative local crossing triple",
    "finding": "The local relative crossing strands are not explicitly required to have blackboard framing, repeating the assigned supplier omission. Independent twists of a crossing ribbon relative to endpoint bands remain unspecified. Batch 85 must require blackboard framing with no extra twists for the crossing and both smoothings, with matching framed endpoint collars; leave other TQFT clauses unchanged.",
    "minimality": "Add the missing framing requirement only to the local relative skein-triple clause. This requires a Definition change and owner tracing of its direct consumers; no such item edits are in unit 84 scope.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/math/9809113",
      "https://letu.math.gatech.edu/Papers/Lectures_Luminy_2014_new.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "thm-root-of-unity-skein-tqft-gluing-and-surgery-invariance",
    "outcome": "false_positive",
    "status": "closed",
    "reason": "The alleged missing construction is explicitly imported in the actual Kirby and pairing suppliers and expressly invoked by theorem step 2.1. This disposition addresses the exact assigned rejection, not the separate malformed state-space interface.",
    "uncertain": false,
    "source_urls": [
      "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bhmv.pdf",
      "https://arxiv.org/pdf/0912.4706v3"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "ex-knot-kt-32-worked-cases",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "location": "frontmatter.axiom_use",
    "reason": "Corrected the exclusive solid-torus-only AC attribution; the already declared full AC also enters F6 through state-space surgery/universal construction and the weighted/pairing interfaces. No mathematical clause or proof changed.",
    "uncertain": false,
    "source_urls": [
      "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bhmv.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "def-skein-tqft-state-space-and-handlebody-pairing",
    "status": "open",
    "severity": "fatal",
    "route": "frontier owner for batch 85; outside this rejected-item assignment",
    "location": "Definition, paragraph beginning For x and y: ordinary gluing followed by the declaration This is the BHMV sesquilinear pairing",
    "affected_use": "thm-root-of-unity-skein-tqft-gluing-and-surgery-invariance proof step 2.1 invokes the inverse normalized pairing; ex-knot-kt-32-worked-cases Verification step 3.1 invokes F5/F6 identifying the torus radical quotient.",
    "invalidated_claim": "The specified ordinary gluing of two complex skein modules is bilinear. For empty ball skeins, B(empty,i empty)=i eta, contradicting the declared conjugate-linearity, which requires -i eta; eta is nonzero. Thus the sesquilinear pairing supplied to the coefficient-conjugate sewing construction is not defined as claimed.",
    "minimality": "Insert the explicit semilinear orientation reversal of the second filling and its colored link, with consistent domains, as in BHMV Proposition 1.9; retain the connected radical quotient and normalization. Alternatively a bilinear convention requires the corresponding precise pairing-consumer corrections. Owner must examine actual interface effects before certification.",
    "reason": "Confirmed the digest concern against the current Definition and the complete BHMV Proposition 1.9 and section 5.8 passages. The missing reversal is still present; do not silently treat the incompatible bilinear and sesquilinear rules as equal. No edit or adjudication of this unassigned supplier was performed.",
    "uncertain": false,
    "source_urls": [
      "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bhmv.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "def-skein-tqft-state-space-and-handlebody-pairing",
    "status": "open",
    "severity": "nonfatal",
    "route": "frontier owner for batch 85; outside this rejected-item assignment",
    "location": "Definition, first paragraph requiring H and H-prime to glue to standard S3 for a general closed surface",
    "affected_use": "thm-root-of-unity-skein-tqft-gluing-and-surgery-invariance Statement claims a finite TQFT on the entire weighted symmetric monoidal category, whose unit is the empty surface and which contains disconnected surfaces.",
    "invalidated_claim": "The prescribed complementary connected handlebody model covers connected surfaces. It specifies neither an empty-surface space nor state spaces on disconnected surfaces. BHMV Proposition 1.9 explicitly uses connected fillings; its complementary-handlebody example explicitly assumes connected boundary.",
    "minimality": "State the connected construction scope and import or define the empty space C and the componentwise tensor product, with cylinder transport for nonsplit real Lagrangians when needed. The BHMV tensor axiom already imported by the pairing supplier supports this extension; no new theorem claim is required.",
    "reason": "This is a confirmed missing state-space interface clause, not a defect in BHMV multiplicativity. Reported for owner repair rather than editing an unassigned Definition. The assigned theorem already invokes the external full TQFT; its exact rejected claim is separately false-positive.",
    "uncertain": false,
    "source_urls": [
      "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bhmv.pdf",
      "https://arxiv.org/pdf/0912.4706v3"
    ],
    "familiar": false
  },
  {
    "ledger": "published-ledger",
    "action": "record-current-alert-disposition",
    "id": "def-temperley-lieb-jones-wenzl-recursion-over-unit-denominators",
    "status": "already-corrected",
    "route": "separate published maintenance; no edit required for this alert",
    "location": "Definition TikZ convention aid",
    "affected_use": "The batch digest described a four-valent meeting and an overlapping vertical strand in the published U_r convention drawing.",
    "invalidated_claim": "The described drawing is not the current drawing: the two endpoints at height zero are now joined by one cup, and the two at height 1.8 by a separate cap. No vertical strand remains at x=2.",
    "minimality": "No further diagram edit is warranted for the exact historical alert. The algebraic recursion remains independent of the convention drawing.",
    "reason": "Inspected the current complete source and TikZ paths. The carrier names an existing recorded repair receipt; this observation does not claim independent validation of that receipt or a new publication audit.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "alg-ribbon-evaluation-from-colored-braid-word",
    "model": "gpt-6-luna",
    "context_sha256": "d098534c8d2150376ca9cfca1ebda99d955d0097ce4e0f420dd4ce139e9d0471",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "reason": "F2 attributes the pivotal/cap comparison to a Drinfeld Statement that does not supply it; repaired by deriving j=u theta monoidality from balancing and the cap identity from the dual snake. Also confirmed the fatal mixed-color typing defect: the old negative inverse has source B tensor A, while the current tuple requires A tensor B. The procedure now uses c_{B,A}^{-1}.",
    "repair_evidence": "research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u86.json",
    "post_sha256": "be1a6a4a4592dab8deabba36b4bd297084a74bb22e170325e9a9a68cd2859ee0",
    "uncertain": false,
    "source_urls": [
      "https://math.mit.edu/~etingof/egnobookfinal.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-twist-correction-removes-framing",
    "model": "gpt-6-luna",
    "context_sha256": "f84c8cf55d39be9cfb255aaabda1ccbe62a51f394c7e3655f9fc3f15d5544c34",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "reason": "F1 cites the algebraic trace definition for equality with the framed-closure value, although that definition expressly defers this equality to a separate lemma. Added the existing closure-comparison dependency and citation, discharging countable choice from AC before its use. The Statement is unchanged.",
    "repair_evidence": "research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u86.json",
    "post_sha256": "7366672ca48d6eabb69a7b6e37c9294055c2ab95ed52c4ae3f4341a36bfc614d",
    "uncertain": false,
    "source_urls": [
      "https://math.mit.edu/~etingof/egnobookfinal.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "cex-knot-kt-33-boundary-case",
    "model": "gpt-6-luna",
    "context_sha256": "48b4db12e7a78976ba366ec1fed1b8505b65b3319bd01c830e2ecc03897022e8",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "reason": "The traces 0 and 2 are correct, but their use as framed-link values lacks the expressly required closure-comparison supplier. Added that lemma, checked its arbitrary-color hypotheses, and supplied countable choice from AC. The equivalent unframed closures then have unequal corrections 0 and 2/lambda for every nonzero rational lambda.",
    "repair_evidence": "research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u86.json",
    "post_sha256": "48ed6da80fd8b165895297ed0ae964135ccb6871353f9bd9626e8d2b19041138",
    "uncertain": false,
    "source_urls": [
      "https://math.mit.edu/~etingof/egnobookfinal.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "action": "record-no-published-impact",
    "id": "alg-ribbon-evaluation-from-colored-braid-word",
    "reason": "The sole changed defining section is this algorithm Definition. Its three direct item dependency/reference consumers are current draft frozen-frontier items; there is no direct published or outside-frontier consumer to repair or adjudicate. The theorem Statement and counterexample Statement refuted are unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "def-framed-chord-diagram-and-four-term-relations",
    "model": "gpt-6-luna",
    "context_sha256": "8b1e1230a8e08243c4e902251ddeb5e3b7d6ca15c2517f8e155147febb9f56bd",
    "outcome": "false_positive",
    "reason": "The definition specifies the ordinary 4T and 4T+1T quotients, explicitly excluding auxiliary dots; it does not identify them with the complete associated graded of the framed singularity filtration over arbitrary R. A zero-only singular knot is therefore not a missing generator of the defined module. The local symbol theorem evaluates zero-free double-point representatives and asserts a functional, not injectivity or recovery of all mixed derivatives. CDM section 3.5.1, p. 74, explicitly requires 2 invertible to eliminate dots; that caveat prevents importing a stronger completeness claim here.",
    "uncertain": false,
    "source_urls": [
      "https://www.math.cinvestav.mx/~mostovoy/cdbook/cdbook-as-submitted.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-framed-chord-diagram-and-four-term-relations",
    "severity": "nonfatal",
    "path": "research/inverse-problems-knot-theory-all-109-2026-10-19-batch-87.proof-contracts.json",
    "affected_use": "contracts.def-framed-chord-diagram-and-four-term-relations.boundaries: degree-one evidence incorrectly allowed a dot generator although the Definition explicitly excludes dots from the ordinary modules.",
    "reason": "Corrected the empty, zero, one, and degenerate boundary evidence to describe the actual ordinary chord generators. The item guard is unchanged and the strict selected contract check passes. This is metadata repair, not a mathematical item repair.",
    "uncertain": false,
    "source_urls": [
      "https://www.math.cinvestav.mx/~mostovoy/cdbook/cdbook-as-submitted.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-kontsevich-morse-isotopy-decomposition",
    "severity": "fatal",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "disposition": "fixed",
    "reason": "Proof 1.2, 3.1–4.1: confirmed_fatal; repaired by this unit. The exact mathematical finding and correction are recorded in the bound decision and item-specific repair_notes.",
    "adjudication_ref": {
      "report": "research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u88.json",
      "decision_index": 0
    },
    "post_sha256": "89cf978377e7dd00bc33f5b862dd4c3fda1fdb581cba6d430cb746996fd83aaf",
    "location": "Proof 1.2, 3.1–4.1"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-conway-second-coefficient-is-type-two",
    "severity": "nonfatal",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "reason": "Facts F6: confirmed_nonfatal; repaired by this unit. The exact mathematical finding and correction are recorded in the bound decision and item-specific repair_notes.",
    "adjudication_ref": {
      "report": "research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u88.json",
      "decision_index": 1
    },
    "post_sha256": "ede8798e95dca0c00d27fb59e90b9e721002403476c68145f6a75788d8c3a3a2",
    "location": "Facts F6"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-kontsevich-long-knot-closure-and-connected-sum",
    "severity": "fatal",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "disposition": "fixed",
    "reason": "Facts F5 and Proof 2.2: confirmed_fatal; repaired by this unit. The exact mathematical finding and correction are recorded in the bound decision and item-specific repair_notes.",
    "adjudication_ref": {
      "report": "research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u88.json",
      "decision_index": 2
    },
    "post_sha256": "6ce7159e7e55a635f97657fe36d386833bf8a80ff7c87d37179fdeac930f179e",
    "location": "Facts F5 and Proof 2.2"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-kontsevich-critical-point-normalization-and-associator",
    "severity": "fatal",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "disposition": "fixed",
    "reason": "Proof 3.1: confirmed_fatal; repaired by this unit. The exact mathematical finding and correction are recorded in the bound decision and item-specific repair_notes.",
    "adjudication_ref": {
      "report": "research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u88.json",
      "decision_index": 3
    },
    "post_sha256": "7b845ff4ab49fdbfb58ff2471668b09a5a28f8aa52a7c799fe4c927bc2962846",
    "location": "Proof 3.1"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-kontsevich-integral-finite-type-truncation",
    "severity": "fatal",
    "outcome": "confirmed_fatal",
    "defect_type": "other",
    "disposition": "fixed",
    "reason": "Statement target clause: confirmed_fatal; repaired by this unit. The exact mathematical finding and correction are recorded in the bound decision and item-specific repair_notes.",
    "adjudication_ref": {
      "report": "research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u88.json",
      "decision_index": 4
    },
    "post_sha256": "2d430bf4ab380b8bf35e12921015c270edace9b2d889047adfaa84227710c257",
    "location": "Statement target clause"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "lem-kontsevich-configuration-integral-convergence-needle-estimates",
    "disposition": "owner-repair-required",
    "severity": "fatal",
    "reason": "The Step-4 concern about missing uniform separation is real: its Proof 1.2 infers uniform separation from embeddedness slice by slice, which does not exclude an outside strand approaching a shrinking cap.",
    "affected_use": "Proof 1.2: compactness and embeddedness give a uniform positive lower bound for |z-z′| on each compact branch chart.",
    "evidence": "Take the Morse cap z=s,t=-s^2, |s|<=epsilon/2, and a distinct vertical strand z=i epsilon. Their signed mixed degree-one integral is a nonzero constant (up to orientation), proportional to log((1/2-i)/(-1/2-i)), although the cap diameter is epsilon. The mixed chord survives 1T on the two-component tangle. The fixed-tangle receding-return proof does not require this invalid uniform needle claim.",
    "minimality": "Owner should examine the full needle interface and its actual consumers, supply the needed separation/control hypotheses and opposite-branch cancellation argument, and trace consumers only if its Statement changes. This report does not edit or adjudicate that unassigned supplier.",
    "uncertain": false
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "no-published-repair-required",
    "reason": "All five assigned items and the sole direct consumer of the changed Statement are draft frontier items. No published consumer is affected by this unit’s Statement change. The six published editorial alerts in the frozen Step-4 digest remain outside this assignment and are not edited or adjudicated here."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "alg-colored-jones-from-ribbon-evaluation",
    "severity": "fatal",
    "defect_type": "logic",
    "location": "Definition, instruction 2",
    "reason": "Definition step 2 passed the N by N matrix G_N into an evaluator requiring the pivotal comparison on W=V_N tensor n, of dimension N^n. For N=2,n=2 the former is 2 by 2 while the latter and the braid action are 4 by 4, so the prescribed call was ill-typed. Repaired by explicitly forming and passing J_W=G_N tensor n, with the prescribed duality and twist data; the returned trace and normalization are preserved."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-colored-jones-finite-evaluation",
    "severity": "nonfatal",
    "location": "Facts F4, Proof step 3.1, and axiom_use",
    "reason": "The proof invokes Markov connectivity with only an AC tag and a fact recording move invariance, leaving that invocation without its own cited premise. This is a nonfatal citation defect: the already-declared thm-twist-correction-removes-framing actually proves dependence only on oriented unframed link type, with Markov connectivity proved through its own supplier. Its full Statement is already quoted by this item's F4 citation contract, and F7 also states representative independence. Repaired F4 and step 3.1 to apply the existing full invariant theorem directly, and corrected axiom_use; no new prerequisite or weakening is needed."
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "action": "no-update",
    "reason": "Both assigned carriers and the sole direct item consumer are draft frozen-frontier items. The algorithm Definition change has no published or outside-frontier direct item consumer, so no published repair or maintenance entry is proposed."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-ip-power-source-class-as-statistical-ellipsoid",
    "severity": "nonfatal",
    "status": "fixed",
    "location": "Facts & Assumptions F8; Proof 3.1",
    "reason": "The mean value theorem requires a<b; repeated positive singular values produce a degenerate interval. Equality of inverse powers supplies the omitted case immediately. The repair states the correct theorem hypothesis and splits equality from strict inequality before invoking MVT.",
    "uncertain": false,
    "source_urls": [
      "https://www.jirka.org/ra/html/sec_mvt.html",
      "https://arxiv.org/pdf/1707.01706v2"
    ],
    "familiar": true
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "action": "no-update",
    "id": "lem-ip-power-source-class-as-statistical-ellipsoid",
    "reason": "The assigned carrier is draft and its complete Statement is unchanged. This proof-only repair creates no supplier-interface event or published-consumer maintenance obligation.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-khovanov-reidemeister-chain-homotopies",
    "severity": "fatal",
    "defect_type": "logic",
    "status": "fixed",
    "location": "Statement, first sentence",
    "finding": "The cube Definition is explicitly restricted to nonempty diagrams, whereas the original lemma also admitted planar isotopy of the empty diagram without defining its complex. Added exactly nonempty to the diagram hypotheses, matching the existing complex domain. Both curl contractions, their determinant signs and raw shifts, the RII survivor and the RIII height variants remain unchanged and valid.",
    "report_pointer": "/decisions/1",
    "action": "record-confirmed-defect"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "lem-khovanov-signed-local-cancellation-models",
    "outcome": "false_positive",
    "reason": "The Statement quantifies over the models described below and explicitly specifies only the RII inverse pair and RIII braid pair; it never asserts an R1 model. Checked ts=x+y, the displayed RII i,p,h identities, the two homogeneous RIII cancellations and the identical residual matrix. The cancellation rule is general; its consumer separately constructs both R1 contractions in proof 2.1. The broad family title does not create a missing R1 assertion.",
    "report_pointer": "/decisions/0"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "thm-reduced-khovanov-basepoint-and-reidemeister-invariance",
    "outcome": "false_positive",
    "reason": "F4 is licensed by the cited supplier proof, not merely its abbreviated Statement: lem-khovanov-reidemeister-chain-homotopies step 4.1 explicitly proves that every constructed R1 map/contraction and every RII/RIII map/homotopy commutes with X_p. Its signed-cancellation supplier step 6.1 proves the latter using the Frobenius identities. Consequently the quotient homotopy equations used in proof 2.1 descend exactly as stated. The finite relative movie closes to nonempty knot diagrams at every stage.",
    "report_pointer": "/decisions/2"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-confirmed-defect",
    "id": "thm-khovanov-euler-characteristic-is-jones",
    "severity": "nonfatal",
    "status": "fixed",
    "location": "frontmatter title and owning manifest title",
    "finding": "The original title said both Euler characteristics equal the unknot-normalized Jones polynomial, although the unreduced value already correctly includes q+q^{-1} in the Statement and proof. For the unknot these values are q+q^{-1} and 1, so the title was misleading. Replaced it with Reduced and unreduced Khovanov Euler characteristics and the Jones polynomial, preserving both formulas, the full-AC hypothesis and all gradings.",
    "report_pointer": "/decisions/3"
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "no-update",
    "reason": "All four assigned items and all six direct item consumers inspected for the sole changed Statement are draft. No potentially defective published consumer was identified. The outside-frontier based-link helper is routed to separate maintenance with its exact unchanged affected uses."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-odd-cube-oriented-face-parity-and-sign-existence",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "reason": "The scalar vertex gauge is valid for every full face prescription: adjacent-coordinate swaps give path independence, and scalar signs commute with every supplied marked right action. The original final clause referred to a mark without choosing one. It now explicitly applies when a component is marked away from saddle disks; unmarked sign existence remains unchanged. Checked the finite three-saddle cases against Putyra Proposition 4.10 and the sign construction against Proposition 5.1.",
    "action": "record-adjudication",
    "model": "gpt-6-luna",
    "context_sha256": "7fd5a476e39144815bb3c221eb458b64d4902fd6cfbd665f53bfb4f5467e2576",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/1310.1895",
      "https://arxiv.org/html/0710.4300"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-generic-movie-of-an-oriented-knot-cobordism",
    "outcome": "confirmed_fatal",
    "disposition": "fixed",
    "reason": "The original defining sentence placed Reidemeister moves between exceptional levels and required a Morse critical point at every exceptional level. A generic projected regular-height isotopy can have an R1/R2/R3 event without any surface-height critical point. The definition now distinguishes these isolated projection events from births, deaths and saddles, with planar isotopy between events; this agrees with the finite-movie supplier. The two-circle to one-circle saddle schematic has the correct component change.",
    "action": "record-adjudication",
    "model": "gpt-6-luna",
    "context_sha256": "70794ce36c2ce7a3b02b9dbadcab1fddbcfb90e13a86f8717cfc9cc28b31ab58",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "logic"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-marked-knot-concordances-admit-finite-movies-away-from-the-mark",
    "outcome": "false_positive",
    "disposition": "false_positive",
    "reason": "F4 truthfully describes the proof of the cited general-position lemma, rather than claiming its Statement already grants relative tangle genericity. That proof prescribes independent third jets at up to six moving source points by degree-43 ambient polynomials and proves deleted-diagonal finiteness. Step 6.1 explicitly adapts those families with support off the protected arc and collars; projection separation excludes mixed exterior events, while the straight joining collars have a regular neighborhood. Multiplication by a cutoff positive on the active part preserves independent jets; the same codimension counts and local diagonal exclusions apply. Steps 1.1–5.1 supply the actual relative arc isotopy and Morse construction. Thus the claimed relative conclusion is proved locally, not inferred from the narrower closed-link statement.",
    "action": "record-adjudication",
    "model": "gpt-6-luna",
    "context_sha256": "efccc544c31f05e60d17a2f3520224b7e7290ecc68ebc5038dd819c1427b3ca3",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-pointed-odd-barnatan-tensor-product-over-marked-rings",
    "outcome": "confirmed_fatal",
    "disposition": "fixed",
    "reason": "Square compatibility alone leaves zero-composite face products unconstrained, whereas step 3.1 can compare only realizations of the same full face prescription. The standard odd tensor-product theorem now explicitly specifies those full input signs, matching its existing conclusion and proof contract. Checked the balanced right-module map in the reduced difference basis, the r1*sigma2 sign, the cochain sign on second-factor edges, all mixed-face products, the quantum shift -1, and the common mod-two multiplication. This is a sign-domain correction, not a proof of invariance for arbitrary square-compatible candidates.",
    "action": "record-adjudication",
    "model": "gpt-6-luna",
    "context_sha256": "078d9147014a829272e1029f358dbf8cfc0fff2c886e85ac1d69587b92e9b4b0",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "logic"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-lee-filtered-spectral-sequence-and-two-orientation-classes",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "reason": "F3 incorrectly credited the integral square-zero lemma with identifying the Lee associated-graded differential. The identification is already proved by the four basis operations and quantum shifts in step 1.1, so F3 now attributes only square-zero to that supplier and points to the local calculation. Checked the enhanced-label decomposition into Boolean cubes, their explicit contractions, canonical singleton basis, and the marked involution: it exchanges the two congruence lines with filtered degree -2 in both directions, forcing their gap to be two. The crossing schematic has clockwise ports 1,2,3,4 and correct black NE/SW sectors; its prose locator now points to step 1.2.",
    "action": "record-adjudication",
    "model": "gpt-6-luna",
    "context_sha256": "852452a50c05a11b3afd2d523e1fde05f6411b07ff702b574dad8f1d8c907233",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-rasmussen-s-invariant",
    "outcome": "false_positive",
    "disposition": "false_positive",
    "reason": "The rejected assertion is explicitly established in the cited lemma Proof 5.1. Its X_p involution has square one and filtered degree -2, exchanges the two nonzero congruence lines from step 4.1, and bounds each line level by the other minus two. Their levels differ by two modulo four, so the absolute gap is exactly two. The filtered direct sum shows the only nonzero-class levels are these two values. Thus F3 accurately cites an actual proved supplier conclusion, even though the supplier Statement advertises only equal canonical levels and distinct congruences. Finite filtration gives both extrema, and filtered diagram invariance under AC_omega makes the definition well-defined.",
    "action": "record-adjudication",
    "model": "gpt-6-luna",
    "context_sha256": "3222ccd05e9a8e88a5cb1215dff52090cf824d60f400b80d06c56cf8339e2c97",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-odd-khovanov-and-barnatan-localization-foundations",
    "outcome": "false_positive",
    "disposition": "false_positive",
    "reason": "F7 is applied first with the same germ coordinates, radius r, epsilon and R, so its explicit formula produces literally the same exterior w(x) arc, cut points and flat spatial marked germ at both endpoints. These are exactly F8’s common compatible endpoint hypotheses. F8 Proof 4.1 then explicitly supplies the cited comparison: b_u=uR^2/conj(p), disk automorphisms f_u, their planar relative extension Phi_u, and one common image closing arc. The proof does not apply F8 to arbitrary unnormalized endpoints. Its relative center–tangent contraction and identity end coordinates are proved in steps 1.1–3.1 of F8. Checked the statewise mod-two maps, marked rank-one localization and full-face tensor-product uses; the clarified mark and sign hypotheses are met.",
    "action": "record-adjudication",
    "model": "gpt-6-luna",
    "context_sha256": "d113f82f37cdc7adb10c55c029c56eab82a99d183372c31f0229be0167bdb3cf",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "cor-rasmussen-s-for-positive-knots",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "reason": "The positive-crossing smoothing claim was correct but A2 attributed it to interfaces that only define determinant signs and name A/B. Added the actual Kauffman source-chart dependency and a two-orientation local calculation: over (1,1) and under (-1,1) have positive determinant, so the incoming SW/SE ends are paired to outgoing NW/NE by the A=0 smoothing; simultaneous reversal gives the other positive case. The canonical cycle is then in degree zero with no incoming boundaries, and its unique all-X term has quantum degree n-k, giving s=n-k+1. The Statement and its strength are unchanged.",
    "action": "record-adjudication",
    "model": "gpt-6-luna",
    "context_sha256": "fdc9efd55c3ca6b821442af2fe5ab69a5b3bcd6991d5fab64ba1754b8fc297ed",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-lee-cobordism-filtration-genus-bound",
    "outcome": "false_positive",
    "disposition": "false_positive",
    "reason": "Step 1.2 explicitly proves the equivariance alleged to be missing: the local maps constructed in the invariance supplier use saddle maps, dots, coefficient projections/relabelings and scalar identity pivots. At an exterior marked point these commute with X_p by the displayed Frobenius identities; small-circle coefficient projections also commute with the exterior action. Thus all local equivalences intertwine the c component actions. Their 2^c distinct simultaneous eigenlines are exactly the canonical orientation classes, which an isomorphism cannot kill or mix. Step 2.1 tracks unique compatible component orientations across bands and excludes any disappearing closed partial component using connectedness. The two resulting nonzero output classes give an isomorphism, and forward/reverse filtered degree -2g yields the bound. F3 is not used as an unproved assertion of equivariance.",
    "action": "record-adjudication",
    "model": "gpt-6-luna",
    "context_sha256": "4759836291a9679247fa33d845bef6335847bf5b93c0d9b48a1c3b2cf367c14a",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "thm-leo-local-equivalence-group-and-concordance-map",
    "outcome": "false_positive",
    "disposition": "false_positive",
    "reason": "The foundations Statement is a summary, but its actual Proof 2.1 explicitly constructs integral marked odd and BN equivalences with common reductions, and Proof 4.1 constructs the paired concordance maps and localized BN equivalence. Its F4 directly names the movie-map supplier. The theorem additionally lists and cites these same suppliers in F5–F8; steps 4.1–6.1 use their common endpoint coordinates and full-face tensor products. Thus F3 summarizes proved arguments, not missing hypotheses. Checked finite-free tensor closure, the dual shift +2 with tensor shift -1, both evaluation/coevaluation maps and the distinct homotopies fg~1_D and gf~1_C, and the localized rank-one test. Consulted DLS Definitions 3.1–3.7, Proposition 3.4 and complete Theorem 3.8 proof; these support the same constructions, with the local geometric suppliers retaining their stronger trace qualifications.",
    "action": "record-adjudication",
    "model": "gpt-6-luna",
    "context_sha256": "3ff75541f20eb0f75b506e67c297f6dccb679512e0d4d097f56620a043c2471c",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/html/2312.09114v3"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "cex-knot-kt-38-boundary-case",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "reason": "The finite tau-threshold definition explicitly introduces no choice axiom and proves its minimum by the well-ordering principle. The original axiom_use therefore misattributed AC_omega to both invariant definitions. Corrected axiom_use and A1 to inherit countable choice from diagram-independent s and the actual joint Whitehead-value supplier. The exact knot and t=2 convention match both supplied interfaces; substituting s=2 and tau=0 gives 2 unequal to 2*0, so the counterexample proof and Statement are unchanged.",
    "action": "record-adjudication",
    "model": "gpt-6-luna",
    "context_sha256": "458901c6d3ea6c7b96c47fe8e3c85dcfdfec317490c122637e5a8ea81c797528",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-outside-lane-alert",
    "id": "def-odd-khovanov-barnatan-and-leo-triple",
    "route": "frontier owner for the unassigned definition",
    "reason": "The definition names C_o(D) after choosing signs, and its Given permits any square-compatible assignment. Square compatibility constrains no zero-composite face products; full face products are required by the actual sign-gauge and invariance proofs. Assigned consumers now specify or construct the full admissible family. No equivalence theorem for arbitrary weak candidates was established or used. Clarify the candidate/invariant convention in the unassigned defining interface rather than attributing full sign comparison to the weaker condition.",
    "affected_use": "lem-pointed-odd-barnatan-tensor-product-over-marked-rings, original step 3.1 sign transport; repaired locally by explicitly using full prescribed signs.",
    "exact_source_snippet": "The square condition is that the sum of the two signed saddle composites around each two-dimensional cube face is zero. An edge sign function satisfying it is called square-compatible; existence and invariance require separate proofs.",
    "minimality": "Distinguish square-compatible candidate cubes from C_o with full prescribed faces; retain the marked rings, maps, gradings and LEO definition. Do not infer universal gauge equivalence for weak signs.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/html/0710.4300"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "record-examination",
    "reason": "All direct consumers of the four changed Statement/Definition sections are draft. No published consumer defect or repair was found or performed. The two outside-frontier draft helpers use unchanged Lee spectral-sequence and extremal-level claims; route their recorded exact-use dispositions to separate maintenance, without Step 5 adjudication or gates.",
    "outside_consumer_ids": [
      "lem-conway-has-an-explicit-zero-trace-partner-with-s-two",
      "lem-two-twisted-positive-whitehead-trefoil-double-has-s-two"
    ],
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "def-grid-diagram-for-an-oriented-knot",
    "model": "gpt-6-luna",
    "context_sha256": "00c58d992530e2ba54ff4f878251991347dcb283bed32f200dadc3066e845d1a",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "disposition": "fixed",
    "reason": "The allowed point positions need not have equal heights in a row or equal abscissae in a column, so the defining link construction need not exist. Cell centers and straight in-square segments supply the missing realization without changing any marking combinatorics.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "def-hat-heegaard-floer-complex-of-a-closed-three-manifold",
    "model": "gpt-6-luna",
    "context_sha256": "e4e2c22b9bc8fcab866ca88bd928ccf3c0dbd78f7c9f708cead0d1a336c8c1be",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "reason": "The point-target differential was already explicitly zero, but the general multiplicity sentence still invoked an undefined negative symmetric power. Restricted that divisor formula to positive rank and supplied the unique constant class with zero domain/index; formal genus-zero periodic domains are mΣ and normalization forces m=0.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-os-disk-and-polygon-analytic-foundations",
    "model": "gpt-6-luna",
    "context_sha256": "15c67d9df0caba815ebfe4e42a1d9deb8d9dd425c2dc3f9ef30b85ba1704fa7b",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "reason": "F2 suppressed the fixed-cap qualification of its lattice supplier. Existing relative-Maslov and finite-ended index lemmas supply that bridge in the protected nearly symmetric class: choose common corner caps and a reference per nonempty same-corner/Spin-c slice, then actual index differences equal Chern evaluation plus twice marked-degree differences. Explicitly supplied that application and direct citations; no lower-index bound or homotopy-class/domain bijection is introduced.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/math/0101206"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-knot-floer-duality-and-filtration-swap",
    "model": "gpt-6-luna",
    "context_sha256": "88f1c1ff4d15e1b1f429d0a2250de520d13224ca15a206d6a122b16ef63affc8",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "reason": "F4 misattributed operator conjugation to an attaching-move theorem whose Statement supplies only moves and inverse homotopies. The actual invertible strip maps, real linearizations, divisor degrees and count bijections are already proved directly in 3.1 and 4.2. Replaced F4 by the explicit smooth conjugate-root-coordinate construction and removed the unused attaching-move dependency. Also exposed the existing ACω analytic hypothesis in the Statement; no symmetry conclusion or grading normalization is weakened.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/math/0209056",
      "https://arxiv.org/pdf/1407.1795"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "thm-grid-commutation-stabilization-invariance-proof",
    "model": "gpt-6-luna",
    "context_sha256": "71f75a468c5b6f4fa2e133bb003107d3654be19c71709b1fbed724cbe66433d9",
    "outcome": "false_positive",
    "disposition": "dismissed",
    "reason": "The Statement claims F2[U]-linearity after restricting to one chosen action, not linearity for every retained independent variable. For the new action, F4 first gives (C(G′),U_new) ≃ (C(G′),U_old). F3 and F5 then give (C(G′),U_old) ≃ (C(G),U_old), and F4 on G changes its chosen action if needed. All maps and inverse homotopies compose over the same abstract F2[U]; evaluation need only be old-ring-linear. Retaining independent variables in the underlying complexes imposes no stronger equivariance. Thus the cited nonlinearity is already compatible with the claim.",
    "uncertain": false,
    "source_urls": [
      "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "ex-knot-kt-42-worked-cases",
    "route": "frontier-owner",
    "severity": "nonfatal",
    "locus": "items/ex-knot-kt-42-worked-cases.md#Example",
    "affected_use": "Uses normalized reverse-mirror duality or the Maslov-zero coordinate swap in the excerpt; the added public hypothesis is ACω.",
    "source_excerpt": "[F3] [[lem-knot-floer-duality-and-filtration-swap]]: the reverse-mirror complex is filtered-chain-homotopy equivalent to the dual, which negates the two filtration coordinates; the actual analytic diagram identification and its absolute grading are supplied without requiring admission of this particular staircase.",
    "invalidated_claim": "Unqualified public use of the analytic symmetry; the declared Choice branch remains sound.",
    "minimality": "The symmetry and all gradings remain identical. The consumer already declares ACω or full AC in its dependencies/axiom scope. Owner should expose that declared assumption in the complete public section; no symmetry proof rewrite is needed. Examine its consumers only if that owner changes the public section.",
    "reason": "The consumer calls the analytic duality/swap supplier and declares Choice in deps or axiom_use, but its public section omits that declared hypothesis. Expose the existing Choice branch without changing the conclusions; this outside-assignment carrier was not edited.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "lem-epsilon-stable-equivalence-and-not-a-homomorphism",
    "route": "frontier-owner",
    "severity": "nonfatal",
    "locus": "items/lem-epsilon-stable-equivalence-and-not-a-homomorphism.md#Statement",
    "affected_use": "Uses normalized reverse-mirror duality or the Maslov-zero coordinate swap in the excerpt; the added public hypothesis is ACω.",
    "source_excerpt": "[F2] [[lem-knot-floer-duality-and-filtration-swap]] supplies actual reverse-mirror duality, conjugation and normalized horizontal homology. The vertical and horizontal homologies at level zero are each one-dimensional, in Maslov degree zero.",
    "invalidated_claim": "Unqualified public use of the analytic symmetry; the declared Choice branch remains sound.",
    "minimality": "The symmetry and all gradings remain identical. The consumer already declares ACω or full AC in its dependencies/axiom scope. Owner should expose that declared assumption in the complete public section; no symmetry proof rewrite is needed. Examine its consumers only if that owner changes the public section.",
    "reason": "The consumer calls the analytic duality/swap supplier and declares Choice in deps or axiom_use, but its public section omits that declared hypothesis. Expose the existing Choice branch without changing the conclusions; this outside-assignment carrier was not edited.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "lem-upsilon-nu-minus-four-ball-bound",
    "route": "frontier-owner",
    "severity": "nonfatal",
    "locus": "items/lem-upsilon-nu-minus-four-ball-bound.md#Statement",
    "affected_use": "Uses normalized reverse-mirror duality or the Maslov-zero coordinate swap in the excerpt; the added public hypothesis is ACω.",
    "source_excerpt": "[F3] The accepted normalized analytic coordinate-swap equivalence is Maslov-zero and Laurent-linear, exchanges both filtrations, and preserves the normalized total generator, with its filtered inverse and homotopies. [[lem-knot-floer-duality-and-filtration-swap]]",
    "invalidated_claim": "Unqualified public use of the analytic symmetry; the declared Choice branch remains sound.",
    "minimality": "The symmetry and all gradings remain identical. The consumer already declares ACω or full AC in its dependencies/axiom scope. Owner should expose that declared assumption in the complete public section; no symmetry proof rewrite is needed. Examine its consumers only if that owner changes the public section.",
    "reason": "The consumer calls the analytic duality/swap supplier and declares Choice in deps or axiom_use, but its public section omits that declared hypothesis. Expose the existing Choice branch without changing the conclusions; this outside-assignment carrier was not edited.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "thm-grid-upsilon-equals-oss-upsilon",
    "route": "frontier-owner",
    "severity": "nonfatal",
    "locus": "items/thm-grid-upsilon-equals-oss-upsilon.md#Statement",
    "affected_use": "Uses normalized reverse-mirror duality or the Maslov-zero coordinate swap in the excerpt; the added public hypothesis is ACω.",
    "source_excerpt": "[F4] [[lem-knot-floer-duality-and-filtration-swap]]: exchanging the two knot Floer filtrations identifies the original Upsilon values at $t$ and $2-t$. Its actual reflected/conjugate diagram maps preserve the normalized Maslov grading; no grid equality is a premise of that analytic symmetry.",
    "invalidated_claim": "Unqualified public use of the analytic symmetry; the declared Choice branch remains sound.",
    "minimality": "The symmetry and all gradings remain identical. The consumer already declares ACω or full AC in its dependencies/axiom scope. Owner should expose that declared assumption in the complete public section; no symmetry proof rewrite is needed. Examine its consumers only if that owner changes the public section.",
    "reason": "The consumer calls the analytic duality/swap supplier and declares Choice in deps or axiom_use, but its public section omits that declared hypothesis. Expose the existing Choice branch without changing the conclusions; this outside-assignment carrier was not edited.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "thm-smooth-concordance-implies-stable-filtered-knot-floer-equivalence",
    "route": "frontier-owner",
    "severity": "nonfatal",
    "locus": "items/thm-smooth-concordance-implies-stable-filtered-knot-floer-equivalence.md#Statement",
    "affected_use": "Uses normalized reverse-mirror duality or the Maslov-zero coordinate swap in the excerpt; the added public hypothesis is ACω.",
    "source_excerpt": "[F1] [[thm-knot-concordance-is-an-abelian-group]]: the smooth concordance classes form an abelian group with inverse represented by reverse mirror; the smooth proof branch is present and complete. The topological branch is not used.",
    "invalidated_claim": "Unqualified public use of the analytic symmetry; the declared Choice branch remains sound.",
    "minimality": "The symmetry and all gradings remain identical. The consumer already declares ACω or full AC in its dependencies/axiom scope. Owner should expose that declared assumption in the complete public section; no symmetry proof rewrite is needed. Examine its consumers only if that owner changes the public section.",
    "reason": "The consumer calls the analytic duality/swap supplier and declares Choice in deps or axiom_use, but its public section omits that declared hypothesis. Expose the existing Choice branch without changing the conclusions; this outside-assignment carrier was not edited.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "thm-upsilon-additivity-mirror-and-genus-bound",
    "route": "frontier-owner",
    "severity": "nonfatal",
    "locus": "items/thm-upsilon-additivity-mirror-and-genus-bound.md#Statement",
    "affected_use": "Uses normalized reverse-mirror duality or the Maslov-zero coordinate swap in the excerpt; the added public hypothesis is ACω.",
    "source_excerpt": "[F2] [[lem-knot-floer-duality-and-filtration-swap]]: mirror duality negates both filtration coordinates, and conjugation exchanges the algebraic and Alexander filtrations. Its actual generator/class maps and absolute Seifert/Maslov origins are supplied without grid comparison.",
    "invalidated_claim": "Unqualified public use of the analytic symmetry; the declared Choice branch remains sound.",
    "minimality": "The symmetry and all gradings remain identical. The consumer already declares ACω or full AC in its dependencies/axiom scope. Owner should expose that declared assumption in the complete public section; no symmetry proof rewrite is needed. Examine its consumers only if that owner changes the public section.",
    "reason": "The consumer calls the analytic duality/swap supplier and declares Choice in deps or axiom_use, but its public section omits that declared hypothesis. Expose the existing Choice branch without changing the conclusions; this outside-assignment carrier was not edited.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "action": "no-update-required",
    "suppliers": [
      "def-grid-diagram-for-an-oriented-knot",
      "def-hat-heegaard-floer-complex-of-a-closed-three-manifold",
      "lem-knot-floer-duality-and-filtration-swap"
    ],
    "reason": "All 76 identified direct dependency/reference uses are in draft item carriers. No potentially defective published consumer or published repair was identified in these interface examinations. Outside-frontier draft consumers remain separate-maintenance subjects.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-knot-floer-cobordism-map",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "status": "fixed",
    "location": "Definition, positive-rank auxiliary data",
    "evidence": "The Definition allowed arbitrary positive-rank attaching triples, whereas its triangle supplier requires a small pointed triple-free representative. At a constant triangle du=0, so varying J gives no parameter derivative and cannot supply the missing transversality. Added precisely the supplier's curve choice, with generator, Spin-c and strict-admissibility transport, before choosing regular ends. Rank zero remains the matching point model. This supplies the actual prerequisite without changing the cobordism, coefficient ring, auxiliary cycles or AC_omega boundary.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/1610.05207v3"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-knot-floer-cobordism-naturality-and-movie-invariance",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "fixed",
    "location": "Statement composition hypothesis and proof steps 2.2, 3.1",
    "evidence": "The fixed-sector definition makes the first target CFL(Y_mid,K_mid,s1|Y_mid) and the second source CFL(Y_mid,K_mid,s2|Y_mid). Without equality these are different objects, so an empty extension sum does not type their composite. Required matching boundary restrictions and the natural intermediate-diagram identification, and explicitly excluded incompatible-sector compositions. The extension sum and product specialization for admissible compositions are retained.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/1610.05207v3"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-khovanov-cobordism-map-up-to-sign",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "location": "deps, Definition references, contract empty boundary",
    "evidence": "The linked generic-movie definition requires knot endpoints, while this Definition accepts arbitrary oriented links and empty frames. The existing lem-smooth-link-cobordisms-admit-finite-generic-movies supplies exactly the needed finite link movie with collars, prescribed endpoints and actual trace. Added it directly to deps and Definition references, retaining the knot definition as a specialization. Corrected the contract's empty-case row, which wrongly declared nonempty knot ends. The Definition itself and its claim strength are unchanged.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/math/0410495v2"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "thm-khovanov-and-knot-floer-cobordism-map-scope",
    "route": "frontier-owner",
    "severity": "fatal",
    "defect_type": "logic",
    "locus": "Statement general-gluing clause; Proof 2.1",
    "finding": "The general-gluing clause appears to define composition for arbitrary chosen piece structures although the fixed-sector source and target differ when their intermediate restrictions differ.",
    "affected_use": "Fact F2 uses the fixed Spin-c map construction and extension-sum law. Proof 1.2 retains valid two-color naturality; the general-gluing clause in Statement and proof 2.1 omits matching restrictions on the intermediate boundary.",
    "source_excerpt": "For a general gluing of decorated four-dimensional cobordisms, the link Floer composition law sums over Spin-c structures on the composite that restrict to the chosen structures on the pieces",
    "minimality": "Add the equality of intermediate Spin-c restrictions to the general composition clause and proof 2.1; distinguish an abstract empty extension set from an undefined incompatible-sector composite. Retain all compatible-extension conclusions. Then inspect direct consumers only because this necessary repair changes its Statement.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/1610.05207v3"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-barnatan-carter-saito-movie-moves-up-to-sign",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "location": "Fact F7; Proof 3.1",
    "evidence": "Fact F7 incorrectly attributed formal crossing cubes to the open-category definition, which supplies only surfaces, grading and planar totalization. The already declared third-Reidemeister supplier explicitly specifies the raw signed cubes, so no prerequisite is mathematically missing. Corrected F7 to cite that actual interface and wrote the adjacent-crossing vertex-sign calculation in proof 3.1. The local retractions, simplicity argument, five Morse identities and integral Frobenius evaluation retain their original scope.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/math/0410495v2"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-knot-floer-mirror-complex-duality",
    "severity": "fatal",
    "defect_type": "logic",
    "location": "proof-step",
    "locus": "original Proof 2.1",
    "disposition": "fixed",
    "reason": "Surface-only reflection was incorrectly labelled reverse mirror. Repaired in current steps 1.2, 2.1 and 3.1 by attaching-system exchange, an orientation-preserving strip rotation, and the correct capped-Chern transport.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/math/0209056v3",
      "https://arxiv.org/pdf/1111.6635"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-knot-floer-mirror-complex-duality",
    "severity": "nonfatal",
    "location": "proof-contract",
    "locus": "F2 quote and proof-step mirrors",
    "disposition": "fixed",
    "reason": "The F2 contract quote included stale unknot wording from its supplier. Replaced it by the exact current reflection sentence, updated actual citation uses and derivations, and corrected the strip-end boundary evidence. Historical template-review records were preserved.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-slice-knot-floer-complex-stably-equivalent-to-unknot",
    "outcome": "false_positive",
    "reason": "The grid comparison proof 3.1 and 4.1–7.1 explicitly fixes both absolute grading origins; its doubly pointed minus model is finite free, and localizing U extends its filtered maps and homotopies to the Laurent model. F3 separately imports the normalized slice splitting, so no unsupported stronger grid theorem is needed. Hom survey Theorem 1 and Proposition 3.11 supply the exact finite filtered summand, with only total acyclicity."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-epsilon-stable-equivalence-and-not-a-homomorphism",
    "outcome": "false_positive",
    "reason": "The cited definition actually contains Proof 1.1–2.1 and invokes lem-bifiltered-two-hook-maps-cannot-both-vanish. Reading that complete corner projection proof verifies F_s(xi)=0 implies xi is in im G_s for a vertical class represented below s. At s=tau the nonzero rank-one vertical class therefore prevents simultaneous vanishing. The three cases used by this lemma are exhaustive, without assuming a simultaneously simplified basis."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-knot-kt-42-worked-cases",
    "severity": "nonfatal",
    "status": "fixed",
    "location": "facts-block",
    "finding": "F1 incorrectly attributes an arbitrary-horizontal-representative characterization to the hook-map definition; the fatal F4 allegation is rejected because the cited intermediate calculation is actually proved.",
    "correction": "Use F_tau/G_tau zero patterns exactly; step 2.1 explicitly uses the already supplied admission. Example and original Statement/Definition sections unchanged.",
    "post_sha256": "a439c68f0d26fa7de8e9f2a899718020b4aedc41c49c77530039b0abe1383f99"
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "no-update",
    "reason": "All assigned items are draft. No assigned Statement or Definition changed, and no potentially defective published consumer was discovered in these reviews."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-balanced-taut-sutured-manifold-and-product-region",
    "severity": "fatal",
    "defect_type": "logic",
    "reason": "Ni §2.1, Definitions 2.7–2.8 requires a horizontal surface to be a decomposing surface before imposing its four numerical/homological conditions. The old clause omitted this restriction and therefore changed the quantified class in vertical primeness. Added the missing decomposing-surface prerequisite; the boundary, Euler and relative-class conditions are unchanged. The surrounding decomposing-surface convention agrees with Juhasz Definition 2.7.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/math/0607156v4",
      "https://arxiv.org/pdf/math/0609779v3"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-sutured-floer-chain-complex",
    "severity": "fatal",
    "defect_type": "logic",
    "reason": "The path was merely smooth, with neither surjectivity of the linearized strip operator nor transverse attaching intersections explicitly required. Determinant orientations cannot turn a nonregular index-one space into a rigid manifold. Added transverse cross-family intersections and regular strip data, explicitly including indices one and two; finite counts, compactness and invariance remain separate analytic obligations. Removed the repeated periodic-domain, admissibility, Whitney-class and Maslov definitions without changing those conventions. Juhasz §2, immediately after Definition 2.21, explicitly chooses generic data; the 2006 paper §§6–7 separates compact rigid counts, orientations and the squared-differential argument.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/math/0609779v3",
      "https://msp.org/agt/2006/6-3/agt-v6-n3-p16-s.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-fibered-knot-has-rank-one-top-knot-floer-homology",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "reason": "Proof 1.1 invoked niceification although F1 only promises a good adapted balanced diagram and F2 explicitly assumes admissibility. Added F6 citing the existing signed-relative-surface-cut supplier only for its adapted-admissibility assertion (proof 2.7), then checked goodness of the actual fiber and performed winding before niceification. The construction keeps the exterior, actual fiber, longitude and orientation class; F2 now has its missing prerequisite. F4 anchors degree g, F5 identifies its differential with the product cut, and F3 computes the connected-face product from its empty diagram, including genus zero. The Statement and full-AC hypothesis are unchanged. Juhasz Proposition 4.8 and its complete proof confirm that winding away from B retains adaptation; Theorem 1.5 and the 2006 Proposition 9.4 confirm the top-group and product scopes.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/math/0609779v3",
      "https://msp.org/agt/2006/6-3/agt-v6-n3-p16-s.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "def-knot-relative-spinc-structure",
    "path": "items/def-knot-relative-spinc-structure.md",
    "route": "frontier-owner",
    "locator": "Definition, first paragraph",
    "source_excerpt": "Two such fields are homologous when, outside some open ball in $\\operatorname{int}M$, they are homotopic through nowhere-zero fields fixed on $\\partial M$.",
    "affected_use": "The Definition calls this relation homology and uses its classes to define sutured Spin-c structures for every balanced manifold.",
    "invalidated_claim": "A nontransitive relation does not define the asserted homology classes on disconnected manifolds; on the empty manifold it is not reflexive.",
    "minimality": "Replace the single-ball convention by componentwise balls, including the empty-family case; actual connected knot exteriors retain the original convention.",
    "reason": "The Definition permits arbitrary balanced (including disconnected and empty) manifolds but uses a single open ball to define vector-field homology. On two disjoint product balls, choose v, then w by a local Hopf modification in the first ball, then z by one in the second. The pairs v,w and w,z satisfy the relation, but v,z do not: removing one ball leaves the other nonzero relative Hopf class. The empty manifold also has no witnessing ball even for reflexivity. The connected knot-exterior branch used by this assigned theorem does not meet this defect. Preserve general scope by using one ball in each connected component (with the empty-family convention), rather than silently restricting all balanced manifolds to connected ones.",
    "uncertain": false,
    "source_urls": [
      "https://msp.org/agt/2006/6-3/agt-v6-n3-p16-s.pdf"
    ],
    "familiar": false,
    "severity": "fatal",
    "defect_type": "logic",
    "status": "open"
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "record-no-affected-published-consumers",
    "ids": [],
    "reason": "Every direct consumer found for the two changed definitions is draft. Outside-frontier draft helpers are listed for separate consumer maintenance; no published item or published consumer was edited or adjudicated.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-kh-to-instanton-resolution-spectral-sequence",
    "outcome": "false_positive",
    "model": "gpt-6-luna",
    "context_sha256": "e2cf887858128b213e563a65cd29983fe4c8460f794245e864570509126ff8be",
    "reason": "The cited exact-triangle supplier's Statement explicitly provides mapping-cone comparisons relative to every finite compatible collection of disjoint saddle/continuation families. Its Proof 3.1 proves the three-saddle identity using the degree-one cap supplier and explicitly takes the pentagon product with those families; Proof 5.1 extends the cone comparison over them. Thus F3 and the filtered comparison in consumer Proof 3.1 use supplied results, rather than inferring coherence from homology exactness.",
    "uncertain": false,
    "source_urls": [
      "https://people.math.harvard.edu/~kronheim/khovanov-unknot.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "thm-kronheimer-mrowka-reduced-khovanov-detects-unknot",
    "outcome": "false_positive",
    "model": "gpt-6-luna",
    "context_sha256": "b902b1d406b99b4de101049b23bf0511f104f9b72902a85a89aa20bcff08099b",
    "reason": "The Definition in def-instanton-knot-homology-and-canonical-class explicitly sets I-natural(K;Q) equal to I-natural(K;Z) tensor Q. This is the same singular invariant used by both A1 and A2 (and the definition is in their supplier closure). Step 2.1 proves exact localization, so Step 3.1 identifies the localized abutment with precisely that defined rational group. No additional coefficient-comparison theorem is missing.",
    "uncertain": false,
    "source_urls": [
      "https://people.math.harvard.edu/~kronheim/khovanov-unknot.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-metadata-finding",
    "id": "thm-kronheimer-mrowka-reduced-khovanov-detects-unknot",
    "fatal": false,
    "location": "proof-contract finite_checks",
    "reason": "The unknot and finite-filtration evidence rows pointed to the wrong proof steps, and one input named nonexistent step 1.3. Corrected to 6.1, 4.1 and input step 3.1 respectively, matching the unchanged proof. These are metadata defects separate from the false-positive rejected coefficient claim.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-instanton-surgery-triangle-data",
    "severity": "nonfatal",
    "locus": "frontmatter.title",
    "finding": "Admissible in the display title overstates the explicitly candidate-only Definition.",
    "correction": "Changed only the item title and its owning manifest title to Candidate instanton surgery-triangle input data; the complete Definition is unchanged.",
    "status": "fixed",
    "reason": "A title mismatch is confirmed; the Definition makes no admissibility or Floer exactness claim, so the logical interface requires no repair.",
    "uncertain": false,
    "source_urls": [
      "https://people.math.harvard.edu/~kronheim/hrpthree.pdf",
      "https://arxiv.org/pdf/0807.4891"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "def-boundary-slope-of-an-incompressible-surface",
    "model": "gpt-6-luna",
    "context_sha256": "1311311cb43e19db0ffadfaaa8fe4f3a574f16cdd007657516bb6d55e9c6b07e",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "disposition": "fixed",
    "reason": "The stated boundary disk lacked D∩S=α and D∩∂E=β. Noncompact half-open collar annuli also passed the old surface convention, and disconnected witnesses made strictness depend on irrelevant extra components. Restored compact surfaces, connected realizing witnesses, and exact disk intersections; these are the standard essential-surface conventions.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/html/2405.19197v2#S4.SS1",
      "https://homepages.math.uic.edu/~kauffman/Waldhausen.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-nonseparating-longitudinal-surface-in-fibered-exterior-is-fiber",
    "model": "gpt-6-luna",
    "context_sha256": "16e4821edfcff109820d00a6ce759198274c6ebcfaeedb8926e5a4ed2de91fd6",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "disposition": "fixed",
    "reason": "The cited simplicial theorem expressly supplies only homotopies of pairs. Repaired the missing boundary-relative step by ambient-simplex vertex interpolation fixed on a PL collar, barycentric neighborhood retraction, and facewise PL interpolation. These homotopies fix the boundary, preserve π1 and degree, and license the existing surface classifier and relative isotopy theorem.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-figure-eight-character-and-longitude-traces",
    "model": "gpt-6-luna",
    "context_sha256": "6532cd8a664cf3247582081a78b0e6665b102c11d5afa4ec993e89b722b27de8",
    "outcome": "false_positive",
    "disposition": "false-positive",
    "reason": "The exact authored word is C=X4 A⁻¹ B X3⁻¹. At M=t=1 direct multiplication gives C=[[2,-5],[-1,3]], with trace 5, agreeing with the displayed right side. Exact Laurent expansion gives identically zero residual before imposing F=0. The claimed counterexample uses an incorrect multiplication; the relator, dense curve realization, irreducibility and final longitude trace remain valid.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-irreducible-sl2-character-components-have-specializing-quadratic-models",
    "model": "gpt-6-luna",
    "context_sha256": "0ffd333fa6f070f190520e7aed836afeb1b99af27f2c078e82f464a10e7a3c0a",
    "outcome": "false_positive",
    "disposition": "false-positive",
    "reason": "F3 explicitly invokes the supplier construction. Its Proof1.1 chooses a semisimple word and a word outside the two proper eigenline stabilizer subgroups; a group is not the union of two proper subgroups. Proof2.1 normalizes the nonzero product q. The consuming trace formula for q and nonvanishing specialization certificate are therefore licensed by an actually proved intermediate result, not an unsupported assertion.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-knot-a-polynomial-boundary-elimination",
    "model": "gpt-6-luna",
    "context_sha256": "0946c8250312217634b2d0673ea624921fb5a16617510b3d3fa602f46f79371d",
    "outcome": "false_positive",
    "disposition": "false-positive",
    "reason": "The cited rational-locus supplier Proof1.1–2.1 explicitly proves σ(E_K)=E_K by applying each field automorphism to presentation matrices and the nonzero eigenvector, then its inverse. In addition the consuming Proof1.1 supplies integer chart equations, which imply the same stability directly. F3 then licenses component selection and rational descent; no closure-to-raw inference is needed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-adjoint-twisted-slope-is-rational-on-a-character-component",
    "model": "gpt-6-luna",
    "context_sha256": "f591cd025324762a0529f642e9fb5928972832ddd2a9be26ffc4c270f3369196",
    "outcome": "false_positive",
    "disposition": "false-positive",
    "reason": "The actual dependency def-adjoint-twisted-homology-and-culler-shalen-data explicitly defines admissible by the ordered peripheral basis AND dim ker i_*=1. The slope definition links that definition, and the lemma declares it in deps. Thus Proof3.1 correctly obtains r−β=1 from the stipulated dense admissible locus. Gaussian rank localization, norm-based shrinking and the explicit quadratic conjugation then give the claimed rational projective descent.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "thm-ccgls-newton-edge-slope-is-boundary-slope",
    "model": "gpt-6-luna",
    "context_sha256": "45ccb626d83034946dddcdc4e77776e8bfc87baac5dc474a504e5edad8b15fc2",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "reason": "The valued-model supplier explicitly constructs the toric chart in Proof2.1, its boundary-branch DVR in Proof3.1 and a generic-incidence closed point with finite residue-field extension in Proof2.2. Those disputed operations are valid. The phrase finite-field incorrectly suggests a finite field instead of a finite extension of C(Y); replaced that phrase only. The primitive-normal orthogonality and essential-surface application remain unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "thm-adjoint-logarithmic-gauss-slope-and-ideal-point",
    "model": "gpt-6-luna",
    "context_sha256": "b2e0e4d1b8a91ee5eae67aff554c825c053dfc405870d8477db736fde364dbc8",
    "outcome": "false_positive",
    "disposition": "false-positive",
    "reason": "The cited generic-conormal supplier has exactly the referenced Proof8.1: reducible characters form the abelian trace line, L=1, and the fixed diagonal coefficient summand has longitude zero and meridian nonzero in exterior homology. This proves slope zero and the conormal identity. Its Proof2.2–7.1 proves the irreducible generic case; the valued differential and stipulated-surface calculation then gives −r. The rejection overlooks an explicit proved dependency clause.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "ex-knot-kt-20-worked-cases",
    "model": "gpt-6-luna",
    "context_sha256": "5f49b4cd0cbe3fb667045396ed543fc71806855f290786a53a6fe6836d582d9e",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "reason": "The rejected F5 citation is valid: it explicitly invokes the full supplier proof, whose Proof1.1–3.1 constructs the matrices, exact F relator and converse irreducible representations. Thus the infinite-M family and Laurent ideal argument are sound. A separate confirmed diagram defect put each negative understrand endpoint on the overstrand, making two contacts. Corrected both gaps to lie on their descending understrand and corrected the source coauthor name to Vincent Florens; formulas and verification are unchanged.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/html/2103.14151"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "thm-benard-florens-rodau-logarithmic-gauss-formula",
    "model": "gpt-6-luna",
    "context_sha256": "3ce6301194d66d90e8e1dc05f4e62c87d5725c5384a59e7a6eced14513f58b13",
    "outcome": "false_positive",
    "disposition": "false-positive",
    "reason": "Proof1.1 explicitly repeats the field-linear calculation rather than applying the curve-only conclusion. Trace self-duality and pair exactness give dim ker i_*=rank i_*=1 over any finitely generated characteristic-zero coefficient field once the torus pair is nonparabolic. The supplier Proof3.1–4.1 pairs every derivation with word cycles without a dimension-one assumption. If M,L were independent, their coordinate derivations would give two independent pairs annihilating that same line, a contradiction. No circular use of the curve conclusion occurs.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/html/2103.14151"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-baldwin-sivek-instanton-surgery-and-newton-polygon-inputs",
    "model": "gpt-6-luna",
    "context_sha256": "43a5454492081b449fdac02e495aa78f4fcb18f3729255ee88996f44c1fc89e2",
    "outcome": "false_positive",
    "disposition": "false-positive",
    "reason": "Proof5.1 repeats the rank/derivation argument over the actual generic incidence field; it does not apply the narrower curve conclusion. The trace form, duality and pair exactness force one peripheral kernel line, while algebraically independent M,L would have independent coordinate derivations annihilating it. Reducible images have L=1. Finite component decomposition then puts the nonconstant arc on the A-curve, and the displayed Vandermonde argument proves rationality. The external instanton interfaces remain explicitly imported.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/html/2405.19197v2"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "thm-baldwin-sivek-infinitely-many-abelian-surgeries-characterize-torus-knots",
    "model": "gpt-6-luna",
    "context_sha256": "f5f55a7645fe97bd06abbe1120e023ca90b61b9be568f2f69453b6c3b2d1015d",
    "outcome": "false_positive",
    "disposition": "false-positive",
    "reason": "The cited input module explicitly states full-set boundedness in external L2 and proves it in Proof3.1: every reduced p/q satisfies |p/q−r0|<C/q, and distinct slopes have denominators tending to infinity. Thus every infinite transferred subset converges to the same finite limit. The consumer L1 accurately cites those clauses, and its compactness argument is sound. The signed torus direction has the exact primitive relation μh^n=1, while the full converse is honestly imported independently in F6.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/html/2405.19197v2"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "cor-enhanced-a-polynomial-and-alexander-degree-identify-torus-knots",
    "model": "gpt-6-luna",
    "context_sha256": "1ed7b553ccaf2566a077b89c2d072328f640254d36c4f8c80e4a00a21d916c11",
    "outcome": "false_positive",
    "disposition": "false-positive",
    "reason": "F1 names the classification supplier Proof2.1, which explicitly derives reflection (M,L)↦(M⁻¹,L) from the positive-meridian normal orientation and the degree-one null-homologous longitude, and orientation reversal inverts both. Those changes preserve irreducibility and image dimensions, so the signed Newton slope is pq. Equality with the positive target gives pq=ab>0; Alexander breadth gives the absolute parameter sum, and the quadratic recovers the unordered pair. The unit-parameter case is handled separately.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/html/2405.19197v2"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "thm-baldwin-sivek-two-boundary-slope-alternative",
    "model": "gpt-6-luna",
    "context_sha256": "4349f879587c7749f23192daa5f63952e823d80399b577cab836d3231070e356",
    "outcome": "false_positive",
    "disposition": "false-positive",
    "reason": "F2 invokes the actual construction, not component extraction from an unspecified disconnected surface. The enhanced-edge supplier Proof2.1 produces a connected essential nonfiber surface through its explicit lattice-tree supplier, whose Statement and Proof8.1–10.1 supply exactly that component. Thus a zero enhanced edge has a connected nonfiber witness; the repaired longitudinal lemma forces it to separate. Polygon nonthinness supplies two distinct strict slopes and the ordinary L−1 factor supplies zero. The corrected compact connected boundary-slope definition agrees with these witnesses.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/html/2405.19197v2"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "record-examined-scope",
    "id": "def-boundary-slope-of-an-incompressible-surface",
    "reason": "All seven direct dependency/reference consumers of the corrected boundary-slope interface are draft items in the frozen frontier. Their exact uses and unchanged-interface dispositions are in downstream_reviews. No published item or outside-frontier consumer requires a mathematical repair from this interface change.",
    "affected_consumers": [
      "lem-nonseparating-longitudinal-surface-in-fibered-exterior-is-fiber",
      "op-two-boundary-slopes-characterize-torus-knots",
      "thm-baldwin-sivek-two-boundary-slope-alternative",
      "thm-benard-florens-rodau-logarithmic-gauss-formula",
      "thm-ccgls-newton-edge-slope-is-boundary-slope",
      "thm-enhanced-a-polynomial-newton-edge-is-strict-boundary-slope",
      "thm-enhanced-a-polynomial-newton-polygon-detects-torus-knots"
    ],
    "published_repairs": [],
    "outside_frontier_consumers": [],
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  }
]

For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  "cor-rasmussen-s-for-positive-knots",
  "def-epsilon-from-filtered-knot-floer-complex",
  "def-upsilon-function-from-filtered-complex",
  "def-grid-upsilon-from-grid-complex",
  "def-integral-half-solutions-strebel-and-l2-signatures",
  "def-ip-analytic-double-fibration-transform",
  "def-ip-analytic-wavefront-fbi-transform",
  "def-ip-benchmark-risk-and-compute-budget",
  "def-ip-bolker-condition",
  "lem-ip-boundary-chart-lifting-and-fourier-projection",
  "def-ip-mean-zero-ntd-and-smoothed-kernel-observation",
  "def-ip-minimax-detection-risk-and-separation",
  "thm-khovanov-homology-is-an-oriented-link-invariant",
  "def-khovanov-cobordism-map-up-to-sign",
  "def-knot-bridge-position-and-unknotting-number",
  "def-top-alexander-grading-of-knot-floer-homology",
  "lem-ni-holomorphic-disk-and-jsj-analytic-inputs",
  "def-sutured-floer-chain-complex",
  "def-knot-relative-spinc-structure",
  "lem-double-branched-cover-of-an-oriented-link-well-defined",
  "lem-os-link-surgery-filtered-complex-and-triangle",
  "def-link-surgery-filtered-complex-for-double-branched-cover",
  "lem-slice-disk-exterior-has-homology-of-a-circle",
  "def-q-fold-branched-cover-of-a-slice-disk",
  "def-sl-two-root-of-unity-skein-parameter",
  "def-skein-tqft-state-space-and-handlebody-pairing",
  "lem-zero-surgery-cyclic-cover-homology-splitting",
  "def-torsion-linking-form-and-casson-gordon-bordism",
  "ex-ip-analytic-minimax-rates",
  "lem-ip-double-fibration-conormal-kernel",
  "ex-ip-analytic-missing-angle-covector",
  "lem-ip-anisotropic-conductivity-map-wellposedness",
  "thm-ip-boundary-fixing-diffeomorphism-preserves-dn-map",
  "ex-ip-anisotropic-boundary-fixing-gauge-example",
  "thm-ip-exact-mmse-pnp-ista-stationarity",
  "rem-ip-arbitrary-denoiser-has-no-inherited-objective",
  "ex-ip-approximate-cnn-mmse-denoiser",
  "prop-ip-bounded-posterior-functional-error",
  "ex-ip-biased-pde-solver-posterior-error",
  "ex-ip-coordinate-free-fno-inverse-risk-obstruction",
  "ex-ip-exact-invariant-kernel-short-run",
  "ex-ip-exponential-singular-value-posterior-contraction",
  "ex-ip-finite-element-mesh-error-at-zero-solve-residual",
  "rem-ip-inversebench-scoped-findings",
  "ex-ip-inversebench-solver-invalid-iterate",
  "ex-ip-low-ess-despite-correct-invariance",
  "ex-ip-neural-inverse-finite-samples-need-class-control",
  "ex-ip-neural-inverse-mesh-truncation-modulus",
  "ex-ip-pde-cfl-invalid-iterate",
  "ex-ip-polynomial-singular-value-posterior-contraction",
  "ex-ip-polynomial-spectrum-risk-profile",
  "lem-ip-power-source-class-as-statistical-ellipsoid",
  "ex-ip-power-source-minimax-rates",
  "ex-ip-severely-ill-posed-risk-profile",
  "thm-ip-state-similarity-preserves-input-output-data",
  "ex-ip-similar-state-space-realizations-same-data",
  "thm-ip-hankel-realization-recovers-controllable-observable-system",
  "ex-ip-small-hankel-singular-value-amplifies-realization-perturbation",
  "ex-ip-sobolev-minimax-rates",
  "ex-ip-solit-antiderivative",
  "ex-ip-solit-periodic-heat-equation",
  "ex-ip-solit-satellite-gradiometry",
  "ex-ip-truncated-landweber-versus-learned-unrolling",
  "thm-ip-finite-observability-identifies-initial-state",
  "ex-ip-unobservable-state-mode",
  "thm-ip-analytic-stationary-phase-with-exponential-remainder",
  "lem-ip-analytic-cutoff-sequence-and-fbi-invariance",
  "lem-ip-analytic-nonstationary-incidence-localization",
  "lem-ip-local-bolker-positive-packet-estimate",
  "thm-ip-analytic-wavefront-recovery-under-bolker",
  "ex-ip-visible-conormal-under-bolker",
  "ex-ip-zero-noise-truncated-risk-limit",
  "ex-knot-kt-01-worked-cases",
  "lem-knot-reverse-mirror-connected-sum-is-ribbon",
  "ex-knot-kt-05-worked-cases",
  "lem-arf-quadratic-enhancement-from-seifert-form",
  "lem-conway-polynomial-from-seifert-determinant",
  "lem-arf-seifert-determinant-congruence-near-minus-one",
  "thm-seifert-s-equivalence-and-conway-arf-bridge",
  "thm-arf-equals-second-conway-coefficient-mod-two",
  "ex-knot-kt-12-worked-cases",
  "ex-knot-kt-16-worked-cases",
  "ex-knot-kt-17-worked-cases",
  "lem-closed-hyperbolic-three-manifold-has-no-z2-subgroup",
  "lem-horocusp-truncation-has-finite-volume",
  "lem-ideal-tetrahedron-shape-parameter-relations",
  "lem-ideal-torus-cusp-holonomy-criterion",
  "lem-ideal-orthoscheme-volume",
  "thm-regular-ideal-tetrahedron-volume",
  "lem-figure-eight-ideal-gluing-and-cusp-completeness",
  "lem-zero-filling-of-fibered-knot-is-a-torus-bundle",
  "ex-knot-kt-19-worked-cases",
  "ex-knot-kt-23-worked-cases",
  "ex-knot-kt-24-worked-cases",
  "lem-reverse-mirror-sum-has-a-ribbon-immersion",
  "lem-knot-concordance-compatible-with-connected-sum",
  "thm-knot-concordance-is-an-abelian-group",
  "lem-ribbon-singularity-local-resolution",
  "ex-knot-kt-28-worked-cases",
  "ex-knot-kt-31-worked-cases",
  "ex-knot-kt-33-worked-cases",
  "ex-knot-kt-39-worked-cases",
  "lem-knot-floer-cobordism-naturality-and-movie-invariance",
  "lem-tau-connected-sum-filtered-tensor-product",
  "lem-knot-floer-large-surgery-and-filtered-cobordism-input",
  "lem-knot-floer-mirror-complex-duality",
  "lem-tau-is-independent-of-heegaard-grid",
  "ex-knot-kt-41-worked-cases",
  "lem-epsilon-stable-equivalence-and-not-a-homomorphism",
  "lem-slice-knot-floer-complex-stably-equivalent-to-unknot",
  "thm-smooth-concordance-implies-stable-filtered-knot-floer-equivalence",
  "lem-upsilon-nu-minus-four-ball-bound",
  "thm-upsilon-additivity-mirror-and-genus-bound",
  "thm-epsilon-upsilon-are-concordance-homomorphism-data",
  "thm-grid-upsilon-equals-oss-upsilon",
  "ex-knot-kt-42-worked-cases",
  "ex-knot-kt-48-worked-cases",
  "ex-trefoil-bridge-and-unknotting-numbers",
  "lem-barnatan-carter-saito-movie-moves-up-to-sign",
  "lem-odd-marked-reidemeister-i-ii-contractions",
  "lem-odd-marked-reidemeister-iii-common-complex",
  "lem-based-odd-barnatan-movie-maps-and-localized-concordances",
  "lem-bridge-sphere-normalization",
  "lem-casson-gordon-bordism-admissibility",
  "lem-cdr-zero-surgery-pattern-homology-cobordism",
  "lem-concordance-annulus-induces-zero-surgery-cobordism",
  "lem-finite-disk-band-surfaces-give-cyclic-zero-surgery-bounding-manifolds",
  "lem-hat-CF-genus-one-lens-space-order-three-rank-three"
]


