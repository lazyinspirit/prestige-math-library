# Step 8 closure recovery — group b

Handled 11 exact rejudge rejection tuples: 6 confirmed fatal and 5 confirmed nonfatal.

All outcomes were appended to `research/frontier-20-judge-adjudications.jsonl` with pre-edit guard hashes. The six new fatal defects have matching `research/defect-ledger.jsonl` rows. No cross-group alert or blocker arose.

## Dispositions

- `ex-keyhole-evaluates-x-alpha-minus-one-over-one-plus-x` — **confirmed_fatal** — context `09ec59a7f2765b88befa3f79dc24dd0bc2fe9942c588ffd381b86535fd3feb96`, pre-edit item `43961fa4fea7cb7b37f103fb6e27523d5f4bc86dc07aa74f877fd1cc19084e00`.
  Evidence: [L1] is not a faithful citation: the keyhole theorem requires a pole-free rational factor and vanishing inner and outer circle integrals. It states the conclusion outright, but neither these hypotheses nor their verification occurs.
  Repair: Added and verified the pole-free, convergence, and inner/outer-circle hypotheses before applying the keyhole theorem.
- `ex-residue-evaluates-sine-over-x-principal-value` — **confirmed_fatal** — context `0f29e56d27bc907b587399a369056e92b75f495131e214da5ad0e9b343008799`, pre-edit item `a4af942a1cc55ca612bdf40559b4431ba288a56decd1a47efc24f66f9e542580`.
  Evidence: Step 2.1 uses a whole-line PV for $e^{ix}/x$, but the cited whole-line definition requires local Riemann integrability, which fails at $0$. No supplied definition licenses identifying the punctured two-parameter contour limit with that PV.
  Repair: Removed the undefined whole-line PV of e^{ix}/x and used the explicit coupled punctured limit; only the locally integrable sine quotient is called a principal value.
- `fs-the-pointwise-supremum-of-an-arbitrary-family-of-subharmonic-functions-is-subharmonic` — **confirmed_nonfatal** — context `acdc1bb311786f5e7c263ee9eb250d7bab3aa78717b983f3c0d0dcce8885f445`, pre-edit item `c67391e626e1e84254cb1646a08b30abacb020f16d503ee04c3f83f58d38c19e`.
  Evidence: [L1] overstates its citation: the cited lemma only preserves finite maxima of already subharmonic functions. It does not establish that a harmonic function or a constant is subharmonic, which step 1.1 needs to apply it.
  No content change: the objection is a local citation or elementary-derivation gap and is nonfatal under the Step-8 standard.
- `lem-gluing-lemma-for-plane-subharmonic-functions` — **confirmed_nonfatal** — context `9a2c04cdf903d5311602c09e1c30030b2a4d26393fadd66763ff2ae4af9b99a1`, pre-edit item `ccb4f27e79c165ddd6834a5a6ac938f7870914b14cdccf3246d6d70fe2c149dd`.
  Evidence: Step 2.1 applies [L3] to $v-h$ without proving or citing that $v-h$ is subharmonic on $C$. Its cited facts give $h\ge u$ and the maximum principle, but neither establishes that subtracting a harmonic function preserves subharmonicity.
  No content change: the objection is a local citation or elementary-derivation gap and is nonfatal under the Step-8 standard.
- `lem-indented-arc-residue-limit` — **confirmed_fatal** — context `1c3180746e1943346d3d56cd58ced87d36c5bb17ad45462efb20837de731f458`, pre-edit item `4070fd4c12c7bfeb780211abb50f19a2a67aa954bb0dfdfeef9f36329eeb9c99`.
  Evidence: The statement requires $\alpha\le t\le\beta$, hence $\alpha\le\beta$. Its upper-indentation case sets $(\alpha,\beta)=(\pi,0)$, an empty parameter interval outside the lemma's hypotheses, so that special case is not stated consistently.
  Repair: Parametrized an oriented arc by t∈[0,1], allowing both increasing and decreasing endpoint angles consistently.
- `lem-local-boundedness-of-separately-holomorphic-functions` — **confirmed_fatal** — context `554fb52218ab283cc9acd6db3ea3dab4448baf3064c28008fc9663d8ed69bc94`, pre-edit item `00bc4b55cdb83bf11b1ff85463f27d09211b6f1f2fc4f272b2d5bdccc83388a6`.
  Evidence: Step 8.1 invokes decreasing finite continuous majorants for arbitrary upper-semicontinuous circle data. L10 gives only measurability, boundedness above, and harmonic comparison; no cited fact or proof establishes that essential approximation.
  Repair: Constructed the finite continuous decreasing boundary majorants explicitly by the compact-circle sup-convolution formula.
- `lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity` — **confirmed_nonfatal** — context `6b824d1ee5a18814e362af82edfa1783140662cb6a539e4e5c99a2e9c87c98fe`, pre-edit item `6b2b9dbcb25553dc8f3ca3502020b7dec12ccbfefea56692fc17d16386574a32`.
  Evidence: [L3] is not a faithful restatement of its citation: the cited theorem states local $L^1$ integrability, whereas [L3] states only finite-a.e. The proof uses this altered consequence without a fact that derives it from local integrability.
  No content change: the objection is a local citation or elementary-derivation gap and is nonfatal under the Step-8 standard.
- `thm-exterior-disc-and-exterior-cone-points-are-regular` — **confirmed_nonfatal** — context `b9396ee0aa8134e4466925db34f5caca941d98c3aa2ad3f5c171b36a36de95de`, pre-edit item `1305cea83e9f11f1a968fb034d612804467e6e81ba03e0e44f26104548d69da8`.
  Evidence: Step 1.2 applies [L2], which requires a subharmonic local peak function, after showing only that q is harmonic. No cited fact establishes that harmonic functions are subharmonic; the same unlicensed implication is used for b in step 1.1.
  No content change: the objection is a local citation or elementary-derivation gap and is nonfatal under the Step-8 standard.
- `thm-keyhole-residue-formula-mellin-rational-integrals` — **confirmed_fatal** — context `513bbb4e34ac78d8781c19cf0cbd8c4e12b0844820d89851e560973f2f5bf81d`, pre-edit item `11a899d2ab09d44b775dc70651ec3c31865b57736ab13aee73593ebf2657f9f4`.
  Evidence: Step 1.2 identifies the lip limits with the improper integral merely from pointwise boundary values. [L1] supplies no convergence or domination, and the proof never derives the required endpoint and tail bounds from rationality and the vanishing-circle hypothesis.
  Repair: Added convergence of the Mellin integral as an explicit hypothesis and used it to justify both lip limits.
- `thm-plane-subharmonic-functions-are-locally-integrable` — **confirmed_nonfatal** — context `22a3eafcb903869b7bdf7d6303c1db7e9e4140ea64ff8807fe6d01354db5b331`, pre-edit item `5bd82b8accc61d6602460210db8dc3ffd11ac21edd7c1084498ca6d7c367f133`.
  Evidence: In step 3.1, [L2] is invoked to make $M-u$ Borel on $D(c,s)$, but [L2] states Borel measurability only after restriction to a compact circle. It does not license the planar Borel hypothesis required to apply [L4].
  No content change: the objection is a local citation or elementary-derivation gap and is nonfatal under the Step-8 standard.
- `thm-residue-evaluation-principal-value-real-poles` — **confirmed_fatal** — context `c2d728e1bdd28594d1a74b330ac567e66e2189b3b99438c14ec982445e9c4de3`, pre-edit item `0beb3fbd33e007e61f9e5afee0ba1084abfbbaae206d444e55d15e780d3f177e`.
  Evidence: The statement refers to $\deg q$ and $\deg p$ without defining polynomials $p,q$ or writing $R=p/q$. Its degree-gap hypothesis is therefore not well formed, so the theorem's scope is undefined.
  Repair: Defined the rational function as R=p/q before imposing the degree gap.

## Rejudge targets

- `ex-keyhole-evaluates-x-alpha-minus-one-over-one-plus-x`
- `ex-residue-evaluates-sine-over-x-principal-value`
- `lem-indented-arc-residue-limit`
- `lem-local-boundedness-of-separately-holomorphic-functions`
- `thm-keyhole-residue-formula-mellin-rational-integrals`
- `thm-residue-evaluation-principal-value-real-poles`

## Checks

- Focused precheck: all six changed proof-bearing items passed.
- Focused render check: all six changed items passed YAML, math, wikilink, and KaTeX checks.
- Batch-9 contract entry regenerated for the changed contracted item; its focused strict check passed.
- Group-b citation fidelity: 159 citations, no missing quote and no widening candidate.
- Dependency check: no cycles or unresolved references; repository-wide legacy warnings remained warnings.
- Defect-ledger validation: 0 errors.
- Step-8 guard: all current edits licensed.
- Group-b current unadjudicated rejection count: 0.
- Step-8 scope still reports other groups’ open rows; they are outside group b and are not a group-b blocker.
