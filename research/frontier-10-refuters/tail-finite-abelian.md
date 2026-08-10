
## Your cluster — `finite-abelian`: the structure theorem spine and free products

Pages: `the-structure-of-finite-abelian-groups` + `-examples`, and
`free-products-and-amalgamation` + `-examples`.

The independent reader for this batch reported **no fatal defect** and six
nonfatal repairs. Your job is to disagree if the mathematics warrants it. Every
item below is `critical` or `high` on `risk-report.mjs`, which routes on
structural signals — many declared dependencies, biconditionals, existence and
uniqueness claims, quotient constructions — and those are precisely the places a
clean-looking proof hides a gap.

### Where this spine actually breaks

**The decomposition chain is inductive and the induction is the risk.**
`thm-maximal-order-cyclic-subgroup-splits-in-a-finite-abelian-p-group` is the
crux lemma: the standard proof takes $a$ of maximal order, works in $G/\langle a\rangle$,
lifts a complement, and the lift step is where almost every textbook treatment
needs a careful order-preservation argument. Verify the lift: given
$\bar b \in G/\langle a\rangle$ of order $p^k$, the proof must produce a genuine
$b\in G$ with $b$ of order **exactly** $p^k$ and $\langle b\rangle \cap \langle a\rangle = 1$.
Check that maximality of $|a|$ is actually used where it must be, and that the
argument does not silently assume the quotient's complement lifts elementwise.

**Uniqueness is a separate theorem from existence and is often conflated.**
`thm-cyclic-decomposition-of-finite-abelian-p-groups`,
`thm-fundamental-theorem-of-finite-abelian-groups-elementary-divisor-form` and
`thm-fundamental-theorem-of-finite-abelian-groups-invariant-factor-form` each
carry both. Check the uniqueness half is genuinely proved — the standard route is
`lem-successive-p-multiple-quotients-recover-elementary-divisors`, counting
$|p^iG|$ — and that the counting argument is stated for the right filtration and
handles the trivial group and the $i$ beyond the largest exponent.

**Check the two forms agree.** Elementary-divisor and invariant-factor forms are
related by CRT regrouping. Verify the translation between them is proved, not
asserted, and that `cor-order-and-exponent-from-invariant-factors` and
`cor-number-of-abelian-groups-of-a-given-finite-order` follow from what is
actually available. The counting corollary in particular needs the partition
correspondence to be **bijective** — check both directions.

**`cor-all-abelian-groups-of-order-n-cyclic-iff-n-squarefree` is a
biconditional.** Both directions, and the $n=1$ boundary.

**Free products: normal form is the load-bearing result.**
`thm-normal-form-for-free-products-with-amalgamation` and
`cor-torsion-in-a-free-product-is-conjugate-into-a-factor` both rest on it. The
classic error is proving a normal form exists without proving it is **unique**,
then using uniqueness. Check which is proved and which is used. For the
amalgamated case, verify the coset-representative (transversal) choice is
handled — the normal form depends on choosing transversals, and the statement
must say what is invariant. Check the torsion corollary's proof handles the
identity and elements of the factors themselves.

**`thm-group-pushout-as-an-amalgamated-quotient`** — check the universal property
is verified in **both** directions (existence *and* uniqueness of the induced
map) and that the pushout is in the category of groups, not sets.

**Boundary cases to test throughout:** the trivial group; a $p$-group of order
$p$; $n=1$ in every counting statement; a free product with one factor trivial;
amalgamation along the trivial subgroup (should reduce to the free product) and
along a whole factor.

Read every one of these in full:

- `thm-internal-direct-product-recognition`
- `thm-cauchy-for-finite-abelian-groups`
- `thm-p-primary-component-of-a-finite-abelian-group`
- `lem-unique-subgroup-of-order-p-forces-cyclicity`
- `thm-maximal-order-cyclic-subgroup-splits-in-a-finite-abelian-p-group`
- `thm-cyclic-decomposition-of-finite-abelian-p-groups`
- `lem-successive-p-multiple-quotients-recover-elementary-divisors`
- `thm-fundamental-theorem-of-finite-abelian-groups-elementary-divisor-form`
- `thm-fundamental-theorem-of-finite-abelian-groups-invariant-factor-form`
- `cor-converse-of-lagrange-for-finite-abelian-groups`
- `cor-order-and-exponent-from-invariant-factors`
- `thm-finite-abelian-groups-decompose-into-indecomposable-subgroups`
- `cor-number-of-abelian-groups-of-a-given-finite-order`
- `cor-all-abelian-groups-of-order-n-cyclic-iff-n-squarefree`
- `ex-z-six-in-elementary-divisor-and-invariant-factor-forms`
- `ex-complements-of-a-maximal-cyclic-subgroup-need-not-be-unique`
- `ex-unit-group-modulo-one-hundred-decomposition`
- `cex-additive-rationals-show-finiteness-is-essential`
- `thm-presentation-of-a-free-product`
- `cor-free-product-of-infinite-cyclic-groups-is-free`
- `thm-group-pushout-as-an-amalgamated-quotient`
- `thm-presentation-of-a-free-product-with-amalgamation`
- `thm-normal-form-for-free-products-with-amalgamation`
- `cor-torsion-in-a-free-product-is-conjugate-into-a-factor`
- `ex-cyclic-amalgamation-with-relation-xm-equals-yn`
- `ex-amalgamation-along-a-whole-factor`
