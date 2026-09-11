# Frontier-22 published nonnegative-integral foundation audit

Date: 2026-09-11

## Scope and deduplication

| Published item | SHA-256 | Disposition |
|---|---|---|
| `lem-extended-reals-complete` | `d464fd1954cf5507d3c1675b17f5686aa2f9a5390ca08d7c797033aad0b42490` | clear |
| `def-integral-of-a-nonnegative-simple-function` | `6c7cdbce4226e5b703d52594d45ff0c5fcf8a717dc98930264fa11c9d1a641d6` | U-P to A-P |
| `lem-well-definedness-of-the-simple-integral` | `afb616754a9ec7d0386377db2e86efbc089ffe9c522ebb9779115800229e1c17` | A-P |
| `prop-basic-properties-of-the-nonnegative-simple-integral` | `cbc50497991e453fe8fc4f72508b3b6f2b422a8e42449ee402dd375223448c96` | A-P |
| `def-nonnegative-lebesgue-integral` | `989fec7df5d1b99753334fc74e76a2a0bc44c515ff4a10bb7dce3efa69293972` | A-P |
| `prop-the-nonnegative-integral-agrees-with-the-simple-integral` | `499e3ecab4cb455f1be23532c21e46b0864a542f2d31104e6864785a7ff07125` | U-P to A-P |
| `prop-order-and-scalar-rules-for-the-nonnegative-integral` | `13b5ed13fde117d6802c6d1b7fdea17b2877102248def037aae58dbd87cdf2da` | A-P |

All seven complete targets and their used definition/order clauses were read.
Before changing the index, every exact ID, alias field, simple-representation
independence, zero-complement refinement, zero-times-infinity, scalar
homogeneity, supremum and active consumer mechanism was searched across the
whole ledger and every classification section. The simple-integral definition
and agreement proposition each had one U-P row; those rows move rather than
being duplicated. The other five IDs were unclassified. No existing finding
covered either exact mechanism on these targets.

## Simple-representation gap and propagation

The simple-function definition permits any pairwise-disjoint measurable family
whose displayed sum equals the function; it does not require the displayed
sets to cover the whole space. In
`lem-well-definedness-of-the-simple-integral`, proof 1.1 forms
`G_ij=E_i intersection F_j` and asserts
`E_i=disjoint_union_j G_ij` and dually. Those equalities can fail on a
zero-valued region omitted from one representation. For example, one
representation may contain a positive-measure set with coefficient zero while
the other omits it. The claimed sums are still equal, but the written partition
identity does not prove this.

Repair the lemma by adjoining the complements of the two finite unions as
zero-coefficient cells before taking the common finite intersection
refinement. The convention local to the simple integral makes every
zero-times-infinite term zero. This is a finite, choice-free repair using the
existing definitions and measure axioms.

The arbitrary-representation definition names this lemma as its
well-definedness justification. The agreement proposition invokes the same
lemma, and the nonnegative-integral definition takes suprema of those simple
integral values. Their relevant construction or proof is therefore
load-bearing on the affected clause. These three targets join the repair queue
with the lemma. No new mathematical supplier or Phase-2 pair is needed.

## Zero-scalar homogeneity gap

The library-wide extended-real arithmetic in `def-extended-reals` explicitly
leaves `0*(+infinity)` undefined. The simple-integral definition installs a
local `0*(+infinity)=0` convention for the terms in its defining finite sum,
but it does not redefine multiplication of arbitrary extended-real values.

Both `prop-basic-properties-of-the-nonnegative-simple-integral` and
`prop-order-and-scalar-rules-for-the-nonnegative-integral` state
`integral(c f)=c integral(f)` for every `c>=0`. Their proofs say that for `c=0`
both sides are zero. If the integral of `f` is `+infinity`, however, the
displayed right side is undefined under the published global convention. The
statement and proof must either define a local nonnegative scalar action on
extended integrals with a separate zero branch, or state positive-scalar
homogeneity and state the zero case as `integral(0 f)=0` without forming the
undefined product. The latter is a direct choice-free repair.

Classification: four new A-P items, two U-P-to-A-P moves and one new bounded
clear.

## Downstream convergence follow-up

The same transaction was extended after reading the next three complete
targets:

| Published item | SHA-256 | Disposition |
|---|---|---|
| `thm-simple-indefinite-integral-is-a-measure` | `009a01e1eee2b54d6b9086d3dc77298d1212de43f05fcda75f4cd21cf69ae03f` | A-P |
| `thm-monotone-convergence-for-the-integral` | `ef06079eb04f6b7c1b8816dbfd06912b4a6ef35304ddb2170981944cece65a9c` | U-P to A-P |
| `thm-nonnegative-integral-zero-iff-zero-almost-everywhere` | `c78d28611462a43a216a8ab1f1145b0212f48ebce6c81f046da20eec4a8791bf` | clear to A-P correction |

Exact IDs, aliases, indefinite-measure construction, increasing-set limit,
threshold null sets, simple-minorant null support and the two upstream
mechanisms were searched again across the whole ledger. Monotone convergence
had one U-P row. The zero-integral theorem had one bounded-clear row from the
rectangle-density audit. The indefinite-integral theorem was unclassified.
Each is moved or added exactly once.

The indefinite-integral proof computes a finite weighted sum of restricted
measures. That calculation is sound after arbitrary simple integrals are made
well defined, but the current proof invokes the affected simple-integral
foundation and does not install the zero-complement repair locally. Monotone
convergence uses that indefinite measure, the affected nonnegative-integral
definition, simple-integral agreement and positive-scalar homogeneity. Its
standard increasing-set proof is otherwise sound. The zero-integral criterion
uses positive threshold scalars and the simple-minorant definition; its prior
clear correctly assessed the visible threshold argument but is corrected
because the newly found representation defect is load-bearing underneath it.

Classification effect of this follow-up: one new A-P item, one U-P-to-A-P move
and one bounded-clear-to-A-P correction. All three share the existing finite,
choice-free upstream repair; no new supplier or pair is needed.

## Bounded clear

`lem-extended-reals-complete` correctly partitions all subsets of the extended
line into the top, empty-real-part, real-bounded and real-unbounded cases, with
the dual four cases for infima. The top and bottom elements handle empty and
unbounded sets, while real completeness handles the nonempty bounded case.
Its agreement clause and the exact bounded-real supremum used by the current
probability-algebra construction are sound and choice-free. The implicit use
of order uniqueness is adequately supplied by its declared poset definition.

## Current frontier impact

The current draft `lem-lc-probability-algebra-completeness` uses only the clear
bounded-real supremum clause. The current draft
`lem-lc-solovay-density-locality-and-null-joins` cites the affected
nonnegative-integral proposition, but its displayed estimates use monotonicity
and strictly positive finite scalars (`1/n` and `1+1/n`), never the defective
zero-times-infinity branch. A local proof of those restricted clauses from
simple minorants and the zero-complement refinement removes the published-proof
dependency. Until such a bypass or the upstream repair is installed, this is an
exact Step-5 prerequisite issue; it does not make the draft claims false.

## Limits

This pass audits the ten targets only through simple-representation
well-definedness, scalar homogeneity, extended suprema and the exact current
uses. It does not audit every Lebesgue-integral theorem or every downstream
consumer. No published or draft item was edited, no external source was newly
consulted, and no independent judgment or exhaustive discovery claim is made.
