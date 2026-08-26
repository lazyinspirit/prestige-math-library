# frontier-19 — Step 8 adjudication, group d

Scope: batches 5, 6, and 10. All 51 rejections were from `gpt-5.6-terra` and
are joined to their exact `context_sha256` and pre-edit guard-form
`item_sha256` in `research/frontier-19-judge-adjudications.jsonl`.

The rejection-blind preread independently identified the multiset/PSET error,
the false multiset false-statement, the plane-tree fixed-point defect, the
invalid Lehmer decoder, the Worpitzky boundary failure, the projective-plane
counting error, and the overstrong Latin-square title. Those overlaps were
treated as two readings agreeing, not as model-family corroboration.

## Adjudications and dispositions

| item | outcome | evidence and disposition |
|---|---|---|
| `cex-same-descent-set-different-inversion-number` | `confirmed_nonfatal` | The displayed pairs name values rather than the defining index pairs, but the two inversion counts and witness are correct; a reader relabels them immediately. No edit. |
| `cex-two-latin-squares-need-not-be-orthogonal` | `confirmed_fatal` (`other`) | The title was false at order one. Narrowed it to “need not be orthogonal”; the order-three counterexample remains unchanged. |
| `cor-binary-trees-satisfy-b-equals-one-plus-z-b-squared` | `confirmed_fatal` (`dependency_citation`) | L3 attributed product-order equality over every commutative ring to a source that states only a general inequality. Replaced L3 by that exact inequality. |
| `cor-binary-words-have-generating-function-one-over-one-minus-two-x` | `confirmed_nonfatal` | The atomic-class definition immediately above fixes the OGF $x$ and the Given names two atomic copies. The absent step tag is a sub-30-second citation omission. No edit. |
| `cor-eulerian-numbers-are-symmetric` | `confirmed_nonfatal` | The declared Eulerian-number definition identifies the counted fibres; adding its tag is immediate. No edit. |
| `cor-eulerian-polynomial-exponential-generating-function` | `confirmed_fatal` (`other`) | The old title claimed arbitrary commutative $\mathbb Q$-algebras while the Statement works in $\mathbb Q(t)\llbracket x\rrbracket$. Narrowed the title to that field. |
| `cor-necklaces-over-an-m-letter-alphabet` | `confirmed_fatal` (`dependency_citation`) | L1 omitted the no-size-zero and commutative-$\mathbb Q$-algebra hypotheses. Restored both. |
| `cor-plane-trees-satisfy-t-equals-z-over-one-minus-t` | `confirmed_fatal` (`logic`) | $Y\mapsto x/(1-Y)$ is not defined on all series, and the equation has a second constant-one solution. Narrowed uniqueness to zero-constant series and rewrote the fixed-point proof on $x\mathbb Z\llbracket x\rrbracket$. |
| `cor-the-loglog-bound-eventually-dominates-the-classical-bound` | `confirmed_nonfatal` | The only omitted move is the standard divergence of $\log_2\log_2 n$, closed in under 30 seconds. No edit. |
| `def-combinatorial-class-and-ordinary-generating-function` | `confirmed_fatal` (`other`) | Natural coefficients were placed in a formal series without a coefficient ring. Specified the canonical embedding and $\mathbb Z\llbracket x\rrbracket$. |
| `def-combinatorial-specification-and-order-raising-recursion` | `confirmed_fatal` (`other`) | Not every symbolic operation is defined over every commutative ring. Required the translated operations to exist over $R$ and recorded that CYC needs a $\mathbb Q$-algebra. |
| `def-disjoint-union-and-cartesian-product-of-combinatorial-classes` | `false_positive` | A Definition may introduce the tagged union and product before the immediately following theorem proves their finite-level closure. No mathematical claim is false and no edit is licensed. |
| `def-multiset-and-powerset-constructions` | `confirmed_fatal` (`other`) | PSET cannot repeat a size-zero object. Rewrote the paragraph: only MSET can lose local finiteness; PSET instead gains a finite factor $2^{a_0}$. |
| `def-standard-cycle-form-and-foata-fundamental-transformation` | `confirmed_fatal` (`other`) | The cited disjoint-cycle decomposition omits fixed points, so stripping it could give fewer than $n$ letters. Inserted fixed points as one-cycles before standardisation. |
| `def-steiner-systems-and-steiner-triple-systems` | `confirmed_fatal` (`other`) | The title promised general Steiner systems while the item defines only triple systems. Narrowed the title. |
| `def-substitution-of-combinatorial-classes` | `confirmed_fatal` (`other`) | A size-zero inner object does not force failure for every outer class. Replaced the universal prose by the correct possible-failure statement for suitable outer classes. |
| `def-viral-property-for-a-finite-family` | `confirmed_fatal` (`other`) | `ind_H(G)` is defined for finite $H$. Required a finite family of finite graphs. |
| `ex-a-family-containing-k-one-is-vacuously-viral` | `confirmed_fatal` (`dependency_citation`) | L3 attributed positivity and the bound $\epsilon^d<1$ to the power definition alone. Added the logarithm/exponential order facts and wrote the derivation. |
| `ex-a-four-two-computed-three-ways` | `confirmed_nonfatal` | The small Eulerian values are direct one-line computations, and “this companion page” correctly refers to the B page containing the table. No edit. |
| `ex-choosing-x-for-the-classical-erdos-hajnal-bound` | `confirmed_fatal` (`other`) | The selected $x$ need not be below $1/2$ for every $n\ge2$. Added the H-free graph and the threshold $\log_2n>2C_H$, and narrowed the title to large $n$. |
| `ex-choosing-x-for-the-loglog-erdos-hajnal-bound` | `confirmed_fatal` (`dependency_citation`) | L1 omitted the H-free graph, vertex count, and $0<x<1/2$ hypothesis. Restored them and verified the range in the large-$n$ step. |
| `ex-p-three-free-graphs-have-much-larger-homogeneous-sets` | `confirmed_nonfatal` | The item proves both scale comparisons; connecting them to the two A-page theorems is an immediate missing tag. No edit. |
| `ex-partitions-with-parts-at-most-three` | `confirmed_fatal` (`dependency_citation`) | “The multiset product formula” was not a proposition and supplied no class. Defined the three-object class and stated the cited theorem with its hypotheses and conclusion. |
| `ex-pg-two-three-has-thirteen-points-and-thirteen-lines` | `confirmed_nonfatal` | The name $PG(2,3)$ is fixed by the cited coordinate construction; spelling that definition out again is a sub-30-second gap. No edit. |
| `ex-skolems-construction-gives-the-fano-plane` | `confirmed_nonfatal` | Once the seven lines are shown to have three points each, the published order definition gives order two immediately. No edit. |
| `ex-the-incidence-matrix-of-the-fano-plane` | `confirmed_nonfatal` | The final equality-case observation uses the already declared Fisher dependency and is not part of the matrix identity proof. No edit. |
| `ex-the-loglog-bound-is-still-subpolynomial` | `confirmed_nonfatal` | For $n>2$, positivity of $\log_2n$ and the domain of the iterated logarithm are immediate from the published logarithm convention. No edit. |
| `ex-truncation-iteration-for-a-recursive-specification` | `confirmed_nonfatal` | One further substitution, or the contraction estimate in the cited fixed-point proof, verifies stability through degree six. No edit. |
| `ex-two-orthogonal-latin-squares-of-order-three` | `confirmed_nonfatal` | The preceding definition says exactly that all ordered pairs occurring once is orthogonality. The omitted tag is local and immediate. No edit. |
| `fs-major-index-equals-inversion-number-pointwise` | `confirmed_nonfatal` | The displayed pairs use value-pair shorthand rather than index pairs, but the count and refutation are correct. No edit. |
| `fs-multiset-product-exists-for-every-coefficient-sequence` | `confirmed_fatal` (`other`) | The positive-degree product is formally well defined; the witness only refutes its unconditional multiset interpretation. Rewrote the title and false claim to the proposition the witness actually disproves. |
| `lem-every-line-in-a-finite-projective-plane-has-the-same-number-of-points` | `confirmed_nonfatal` | Finiteness is part of the Given finite projective plane, and mutual injections between the two finite line subsets give equal cardinality immediately. No edit. |
| `lem-many-good-two-t-vertex-sets-force-many-homogeneous-k-sets` | `confirmed_fatal` (`other`) | The Statement admitted $t=0$ while dividing by $2t$. Added $1\le k\le t$. |
| `lem-no-large-epsilon-sparse-subgraph-bounds-k-stable-sets` | `confirmed_nonfatal` | If the recursive non-neighbour set $U$ is empty, the containing-$v$ count is immediate; this is precisely a sub-30-second induction boundary gap. No edit. |
| `lem-small-total-copy-expectation-forces-many-homogeneous-k-sets` | `confirmed_fatal` (`other`) | The Statement admitted $t=0$, invalidating Markov's positive threshold and the denominator. Added $1\le k\le t$. |
| `thm-a-finite-family-with-the-erdos-hajnal-property-is-viral` | `confirmed_fatal` (`dependency_citation`) | L5 omitted the $(t,k)$ property, positivity/range, and $n\ge2t$ hypotheses of the cited sampling lemma. Restored them verbatim in substance. |
| `thm-bose-construction-produces-a-steiner-triple-system` | `confirmed_nonfatal` | The proved injective self-map of the finite set $Q$ is bijective; alternatively $z=2y-x$ is its explicit inverse. No edit. |
| `thm-classical-erdos-hajnal-bound` | `confirmed_nonfatal` | The proof should begin at a large threshold where $x<1/2$ and use the homogeneous pair for the finitely many smaller $n$; this is a sub-30-second boundary repair between proof steps. No edit under R1. |
| `thm-counting-identities-for-a-two-design` | `confirmed_nonfatal` | The Given 2-design already includes $|P|=v$; repeating that clause in L2 is unnecessary for a competent reader. No edit. |
| `thm-counts-in-a-finite-projective-plane` | `confirmed_fatal` (`logic`) | Step 3.1 double-counted the point $p$ and made a false arithmetic simplification. Replaced it with the partition of $P\setminus\{p\}$ among the $n+1$ lines through $p$. |
| `thm-cycle-construction-formula` | `confirmed_fatal` (`dependency_citation`) | The totient definition alone does not identify unit classes with coprime representatives. Added and cited `thm-unit-criterion-modulo-n`. |
| `thm-eulerian-recurrence` | `confirmed_fatal` (`other`) | The Statement quantified over integer $k$ although $A(n,k)$ is defined only for natural $k$. Restricted the quantifier. |
| `thm-foata-transformation-sends-major-index-to-inversion-number` | `confirmed_nonfatal` | The recursive transformation is the immediately preceding declared dependency; the omitted tags are local and do not hide a mathematical step. No edit. |
| `thm-incidence-matrix-identity-for-a-two-design` | `confirmed_nonfatal` | Matrix entries are fixed by the immediately preceding incidence-matrix definition. The omitted citation is sub-30-second. No edit. |
| `thm-lehmer-code-is-a-bijection` | `confirmed_fatal` (`logic`) | The largest-letter insertion decoder does not reproduce the position-indexed code. Replaced it by the unused-value rank decoder and proved uniqueness. |
| `thm-loglog-erdos-hajnal-bound` | `confirmed_nonfatal` | The finite small-order branch closes by the elementary homogeneous pair bound, not merely `hom(G)>=1`; this is a sub-30-second boundary gap. No edit. |
| `thm-multiset-exponential-formula` | `confirmed_nonfatal` | Modulo each $x^N$, only finitely many product factors contribute, so the two-factor logarithm law applies to a finite product before passage to the coefficientwise limit. No edit. |
| `thm-order-raising-recursive-specifications-have-unique-solutions` | `confirmed_nonfatal` | L2 already states uniqueness of all $x$-adic limits; adding its tag to step 4.1 closes the omission immediately. No edit. |
| `thm-pointing-rule-for-ordinary-generating-functions` | `confirmed_nonfatal` | Step 1.1 is a direct unpacking of the immediately preceding pointing definition. No edit. |
| `thm-q-factorial-counts-permutations-by-inversions` | `confirmed_nonfatal` | Step 1.1 directly partitions inversions by their left position using the declared Lehmer-code definition. No edit. |
| `thm-worpitzky-identity` | `confirmed_fatal` (`logic`) | The $n=0$ statement conflicted with the empty-sum and $0^0$ conventions, and the induction formula failed at $n=1$. Restricted to $n\ge1$, used $n=1$ as the base, and began the inductive step at $n\ge2$. |

## Repair and contract closure

- Exactly 25 owned items changed, exactly the 25 `confirmed_fatal` subjects;
  no nonfatal or false-positive item changed.
- Updated batch contracts:
  `research/frontier-19-batch-5.proof-contracts.json`,
  `research/frontier-19-batch-6.proof-contracts.json`, and
  `research/frontier-19-batch-10.proof-contracts.json`.
- Updated the three owning manifests and mechanically refreshed their entries in
  `research/plan-spec.json`; `splice-plan --verify` reports plan and manifests
  agreeing across the run.
- All affected consumers were already in the preread scope. The corrected or
  narrowed interfaces preserve every downstream use: plane-tree consumers use
  the zero-constant OGF, Worpitzky is used at $n=4$, Eulerian recurrence is used
  at natural indices, the sampling lemmas are used with positive $k,t$, and the
  viral development concerns finite forbidden graphs.
- No published dependency was found false, and no cross-group alert was raised
  or received.

## Gates run by this lane

- Targeted `precheck`: all repaired proof-bearing items pass.
- Batch `proof-contract --strict`: batches 5 and 10 clean; batch 6 clean with
  its pre-existing nonfatal `shotgun-bracket` warning on the log-log theorem.
- `content-policy` on batches 5, 6, and 10: 123 scoped items, no errors or
  warnings.
- `citation-fidelity --fail-on-missing-quote`: clean on all three batch
  contracts.
- `boundary-audit --fail-on-contradicted`: no contradicted dispositions in all
  three contracts.
- `validate-plan`, `depcheck`, `fwdcheck`, `extcheck`, `rendercheck`, targeted
  `prosecheck`, and `splice-plan --verify`: pass.
- `step8-guard`: all changed items across the live Step-8 window are licensed;
  group d itself has 25 changed items and 25 matching fatal rows.
- `step8-scope check`: all four groups are scoped, with zero open rejection rows
  and zero cross-group alerts at the time of this report.

After the concurrent groups completed their append operations, the full
defect-ledger check passed with 181 frontier-19 rows and zero errors. Group d's
25 fatal rows are present and exact-hash joined.
