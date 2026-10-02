# Frontier 37 owner-30: current A-page audit

This is a current mathematical audit of the A-page ordinary item released for
review and the A-page theorem that remains owner-held. It does not amend the
owner decision or close the theorem.

## Current Step 3 state

The A-page `logarithmic-potential-capacity-and-riesz-decomposition` has a
current owner `proceed` scope receipt, scope hash
`c031690887fab847b00cd337673b9c30c325ea2ec6963de8d9bd4b092ddbac5e`.
That receipt releases authoring/audit readiness only.

The ordinary item `def-support-of-a-borel-measure` has current Step 3 item
hash `83c8552b6acdc50400d79652fcd27ee30aa0b6ec970ef3704e53519cbc970afa`
(published-file SHA-256
`314782e86e7987bc88044f66e40db98541367493837ed152e490b07437b07745`). Its
ordinary accept, confidence 1 receipt is
`research/frontier-37-owner-30-step3b-review-def-support-of-a-borel-measure.json`,
SHA-256 `1565f8d0c955fe3358aeef03c81cc402c1dc3390e591e65bc7c23bb59fc3a8cb`.
The item and all five declared supplier interfaces were audited. The argument
constructs the support as the complement of the union of open null sets; the
rational-square basis makes that union countable, after which countable
additivity gives nullity and the minimal closed-carrier property. It needs no
Radon regularity and makes no choice assumption. The cited Saff footnote gives
the equivalent neighborhood-positive convention. The five examined suppliers
are `def-measure`, `def-measure-concentrated-on-a-measurable-set`,
`def-metric-interior-closure-boundary`, `def-radon-measure-on-an-lch-space`,
and `thm-rational-points-and-boxes-in-rn`.

## Owner-held theorem: real remaining proof obligations

The exact owner-held item is `thm-principle-of-descent-and-domination`.
Its current Step 3 item hash is
`06c29d721d997c1ff4e7e4b292a915af786cb4d3f157ea54def388c602587abe`; the
published file SHA-256 is
`8635b12f699f00d46bdf0b01421601155eb2242487d6cf402d34530352a3f666`.
`itemDecision` still returns `closed: false`, `owner: true`, because its
current author audit is `escalate`. The recorded reason is mathematically
current, not merely historical: proof step 3.1 applies [F7] to
`a=u+ε`, `b=v`, which need not be bounded below, while the cited Guedj–Zeriahi
§1.1 identity (1) is explicitly for bounded plurisubharmonic functions.
The source and the item therefore do not establish the measure identity used
to conclude `λ_ε ≥ μ/M`.

There is a concrete repair route, but its hypotheses must be closed in the
item before acceptance. Compactify `C` to `P¹` and use the normalized
Fubini–Study potential `ρ(z)=½ log(1+|z|²)` with the matching `ddᶜ` convention.
Set
`φ=(p_μ/M)-ρ` and `ψ=(p_ν-c)/M-ρ`. Then `ω+ddᶜφ=μ/M`, while
`ω+ddᶜψ=ν/M+(1-ν(C)/M)ω ≥ 0`; thus `ψ` is `ω`-psh. The strict-contact identity
in Guedj–Zeriahi, Corollary 1.7, applies to `φ∈E(P¹,ω)` and arbitrary
`ψ∈PSH(P¹,ω)`, and is proved there by truncating both functions and passing
the bounded identity to the limit. Its dimension-one interpretation is the
required Riesz-measure identity on the strict set in `C`.

The remaining imported premise is `φ∈E(P¹,ω)`. In dimension one, the cited
source identifies `E` with the `ω`-psh functions whose Laplacian does not
charge polar sets. Finite logarithmic energy should supply this: if `μ` charged
a polar Borel set with positive mass, its normalized restriction would still
have finite energy (use a nonnegative shifted kernel) while being supported on
a polar set, contradicting the zero-capacity characterization of polar sets.
The current theorem does not establish or cite that bridge, and none of its
17 declared in-library dependencies supplies it. A repair must state and cite
an exact classical finite-energy/no-polar-mass result, or prove the needed
capacity implication inline, before invoking Corollary 1.7. Merely replacing
the bounded citation with Corollary 1.7 would leave a hypothesis gap.

The current target's direct dependency files were read against the cited uses;
their current published SHA-256 values are:

| Dependency | SHA-256 |
| --- | --- |
| `cor-nonnegative-harmonic-function-with-an-interior-zero-vanishes` | `2417d838b7514c441e6c2500f1cd5fd8ee28d8de87eddaafebe0e6fd108a92ca` |
| `def-dependent-choice` | `f8330627855ffbfd56ee1b47c0481d5fd1d6972e7365c2e152d9bf7dfa47f9f8` |
| `def-logarithmic-potential-and-energy` | `b1b6001164c6110da45cde63d811fae9122aabbe369925c24db6723ff54e131b` |
| `def-plane-harmonic-function` | `564afdd6ca730393648e976683982e8b2629229f66b0b2076636c2c8212a3551` |
| `def-plane-subharmonic-function` | `9805081d949999e465bfcfa2b0d1f844a211eb5886bff08b3778685ae2e7d38e` |
| `def-radon-measure-on-an-lch-space` | `9a569f47409777a8cbb6d00c345a4908dd5dd877cd70191959f76235749c188c` |
| `def-riesz-measure-subharmonic-function` | `83687951568535564f5aa4cdb5533ed6467bb65677266cb15ae3e8087f61c80c` |
| `lem-logarithmic-potential-distributional-laplacian` | `e6aa30c32835e0bb6b7074a1589514694554aa2fb89b95711a5278e391c3407d` |
| `lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity` | `948f1b6d42139ff8493c78e0766f5b3e8ef21853b190b74d69ed8cfe22c45fb2` |
| `thm-c-two-characterization-of-plane-subharmonicity` | `ff98b6f592ab093f80b1e49d22dc23b2f3929890a7f0714ec81f405b0b29e15e` |
| `thm-choice-implies-dependent-implies-countable-choice` | `d86301606c9733558bb4af98789a6486051dd048d2a4fdce5f7ed2e0319b4aa1` |
| `thm-logarithmic-energy-well-defined-and-lower-semicontinuous` | `623a1244a5f131fc03833f90f6fbb50021d3335fd9f35696f355ff070fc03cc0` |
| `thm-plane-subharmonic-functions-are-locally-integrable` | `b8e894a657d84fe043556c7d4069fb3898fa025064eb80d6cee7d23181cd09a0` |
| `thm-polar-coordinates-formula-for-lebesgue-measure` | `c0d9862e67a4d01fdad7c5e36800ac9759c5e2514984e141d1bf8af1ffd5edda` |
| `thm-riesz-measure-is-positive-radon` | `7cd7aafe3920173b7e965b9889c57757dfc749a58ed887cc72d15ddd071043c6` |
| `thm-tonelli-theorem-for-sigma-finite-product-spaces` | `a99bb7e2d4edea2b0a7ee315d84d30da51f67fd66de31a916c03dadff54b4dfc` |
| `thm-weyl-lemma-for-the-laplacian` | `5292a72e561ccc9f3efdd55cb431203b33a6d427e3b475d1e09934ba6150c527` |

### Local proof precision issue

Step 5.1 calls `{u>−∞}∩{v>−∞}` the conull set from step 1.2, but 1.2 proves
only that `u` is finite `μ`-almost everywhere. The `h` argument needs an
area-almost-everywhere statement. It follows from [F9] for both locally
integrable subharmonic functions, but that is the actual justification and
should be stated there. This is a repairable citation/measure qualifier issue,
separate from the unbounded contact-set obligation.

No published item, owner receipt, scope receipt, carrier, or gate was changed
for this audit.
