# Agent 02: C5 narrowness branch

The published example `ex-the-five-cycle-is-not-one-narrow` now proves its two-narrow half through the new published lemma `lem-perfect-vertex-deletions-imply-two-narrowness`, placed by the root on the existing bull-free A page before `prop-perfect-graphs-are-one-narrow`. Its original `## Example` claim is byte-for-byte unchanged. The example no longer depends on the pending general bull-free two-narrow theorem. The published false-statement item `fs-two-narrow-implies-one-narrow` has byte-for-byte unchanged content: its refutation cites exactly the unchanged example claim and needs no edit. No old judge or audit stamp was carried onto the changed example proof. No new judge or independent audit is claimed here.

## Mathematical proof evidence

For a finite graph with $n\ge3$ whose every vertex deletion is perfect, let $g$ be any good function, choose a minimum-weight vertex of weight $m$, and let $A$ be the sum of the other $n-1$ weights. Perfection of that deletion gives $A\le1$. Each of the other weights is at least $m$, so $A\ge(n-1)m$; each such weight is at most $A-(n-2)m$. Consequently

$$\sum_v g(v)^2\le m^2+A(A-(n-2)m)=A^2-m((n-2)A-m)\le A^2\le1,$$

because $(n-2)A\ge(n-2)(n-1)m\ge m$. This also covers $m=0$. The lemma uses only the existing definitions of good functions, perfect graphs and two-narrowness. Its cited Chudnovsky–Safra paper supplies terminology, not a claimed source for this derived inequality; I did not rely on or newly verify an external theorem for it.

Deleting a vertex from $C_5$ leaves $P_4$. Every induced subgraph of $P_4$ is a disjoint union of paths. If it has an edge, alternating colours give $\chi\le2$ and an edge gives $\omega\ge2$, hence $\chi=\omega=2$; a nonempty edgeless graph has both numbers $1$, and the empty graph both $0$. Thus each deletion is perfect and the new lemma proves that $C_5$ is two-narrow. The original constant weighting $g(v)=1/4$ is good because the whole $C_5$ is not perfect and every proper induced subgraph lies in a perfect deletion, yet its total is $5/4>1$. This proves the example's full unchanged claim and the downstream refutation.

## Impact and scope

An item-level scan of dependency/reference fields and body wikilinks, excluding verification metadata, found only the example as a direct consumer of the new lemma; only `fs-two-narrow-implies-one-narrow` directly consumes the example; and no item consumes that false-statement item. The general bull-free two-narrow theorem now directly feeds only the sharp exponent corollary among item files. The A page and examples page are the only library homes for these items. Root registered the new lemma and corrected the example dependency in the shared plan. Since the example claim did not change and the false-statement item is unchanged, the refutation requires no downstream repair.

The other original six pending items were inspected against their actual consumers. The O’Nan–Scott recorded five-type classification has only the survey remark `rem-algorithmic-role-of-onan-scott` as a direct consumer, and its exact structural/Schreier proof remains substantial. The bull-free sharp-bound chain still requires a local perfection theorem for the relevant bull-free Berge graphs; the new vertex-deletion lemma supplies only the finite $C_5$ branch and does not settle that general prerequisite. No other independently closable defect was found within this bounded review. The root's other agent owns those substantial chains.

## Receipts and checks

The exact two pre-edit item copies and SHA-256 hashes are in `before/c5-repair-receipt.json`; each after hash and the no-edit disposition are in `agent-02-receipts.jsonl`. All original top-level frontmatter keys of the example were preserved; only its stale `audited` and `judge` verification children were removed. Focused precheck passed 3/3 item proofs, including the unchanged refutation. Rendercheck passed the three items and their two pages (5/5), with real KaTeX and renderer YAML parsing. `git diff --check` passed on the touched existing item and shared page/plan edits. These are local format and rendering checks, not an independent mathematical judgment.
