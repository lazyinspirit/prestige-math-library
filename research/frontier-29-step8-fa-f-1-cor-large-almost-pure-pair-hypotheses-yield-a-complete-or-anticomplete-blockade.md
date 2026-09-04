# Final-adjudicator evidence: large almost-pure pairs yield a pure blockade

## Disposition

`repaired`

The Alpha's second repair correctly fixes the second judge's fatal objection: step 1.1 now requires, for each block, one uniform relation to every later block. Consequently every index belongs to the complete class or the anticomplete class used in step 3.1. I did not accept the carrier unchanged, however, because the repaired proof still called the replacement sequence a blockade "of the same type" without proving that the new last block $Y$ met the common width $y^{a+2}|G|$. That omission is material under the group convention that every block must meet the displayed width.

## Materials independently checked

I read the current item; both cited definitions; the A page `generalized-niceness-and-reduction-outcomes`; its B companion and the concrete extension example; the direct downstream lemma `lem-cy-restricted-generalized-niceness-yields-three-outcomes`; the batch-15 manifest, coverage record, notes, proof contract, and merged proof contract; the group-f convention and risk record; both exact judge rejections and adjudications; and the initial and round-1 Alpha repair evidence.

The cited dependencies match their uses. `def-blockade-length-and-width` makes an $(\ell,w)$-blockade a sequence of at least $\ell$ nonempty disjoint blocks, every one of size at least $w$. `def-edges-between-sets-and-pure-mixed-pairs` identifies pure pairs with complete or anticomplete pairs. The A/B-page ordering and both direct consumers use exactly the corollary's stated length and width and introduce no wider claim.

## Source verification

- https://arxiv.org/html/2606.06258v2 — Huang, Ju, and Zhou, Lemma 2.8 and its proof. It supports $c=2^{-4b}$, the lower-size hypothesis, the maximal last-block replacement scheme, the invariant that each block has one relation to all later blocks, the final two-class pigeonhole argument, and the note that the lemma remains valid with “$x$-sparse” replaced by “anti-complete.” This is the primary source for the literature-derived statement.
- https://arxiv.org/html/2312.15333v2 — Nguyen, Scott, and Seymour, Lemma 5.3. It supplies the underlying published maximal-last-block iteration: split the current last block into $X,Y$, retain the geometric lower bound for the new last block, and contradict maximality once the new non-last block meets the common width.

I used the sources for the structural provenance, but checked every local inequality independently. In particular, for $0\le t\le 1/2$, concavity of $\log(1-t)+2t\log 2$ and its zero endpoint values gives $1-t\ge 2^{-2t}$. Also $y\le 2^{-4b}$ gives $by<1/2$: indeed $2^{4b}>2b$ for $b>0$, so $b2^{-4b}<1/2$.

## Mathematical verification and repair

Assume the maximal blockade has length $n<2y^{-1}$. Applying the preceding elementary inequality with $t=by$ gives

$$
(1-by)^n\ge (1-by)^{2y^{-1}}\ge 2^{-4b}=c,
$$

so the large-induced-subgraph hypothesis applies inside $B_n$. The source-sized set $X$ satisfies

$$
|X|\ge y^a|B_n|\ge y^ac|G|\ge y^{a+2}|G|
$$

because $c\ge y\ge y^2$. I repaired step 2.1 to make the corresponding missing check for $Y$ explicit:

$$
|Y|\ge(1-by)|B_n|\ge(1-by)c|G|>	frac12c|G|
\ge	frac12y|G|\ge y^{a+2}|G|.
$$

The final comparison follows from $a>1$ and $0<y\le1/2$. Thus both new blocks meet the common width; $Y$ also meets the next last-block bound $(1-by)^{n+1}|G|$. Every old block has its uniform relation to both subsets $X,Y$ of $B_n$, $X$ has the given pure relation to $Y$, and the relation for the last block is vacuous. The longer sequence therefore satisfies the whole maximal invariant.

It follows that $n\ge2y^{-1}$. The complete-index and anticomplete-index sets cover all $n$ indices (their harmless overlap at the last index does not weaken $|Q|+|R|\ge n$), so one has cardinality at least $n/2\ge y^{-1}$ and therefore at least $\lceil y^{-1}\rceil$. Ordering that subfamily by its inherited indices makes every pair complete or every pair anticomplete, with the required width. This proves the statement, including the endpoint $y=\min\{1/2,c\}$.

I synchronized the item derivation, all eight boundary dispositions, and the risk review in `research/frontier-29-batch-15.proof-contracts.json`, then rebuilt `research/frontier-29-proof-contracts.json`. No cited dependency or other item was changed, so no owner-prerequisite-repair licence was required.

Final item SHA-256 before recording: `b84db8dd5cbf9577c8a529a2385e486b327d4667df8799b19ff573cb5b3c23ca`.

## Focused checks

- Focused precheck: 1 checked, 0 failing.
- Renderer check on the item and both A/B page files: 3 files clean.
- Strict batch proof contract and strict merged proof contract, filtered to this item: 0 errors, 0 warnings.
- Batch-15 boundary audit: no template reuse or contradicted dispositions.
- Batch-15 citation fidelity: 35 citations checked, no missing quote or widening candidate.
- Full dependency check: success, with only the repository's standing warnings.

