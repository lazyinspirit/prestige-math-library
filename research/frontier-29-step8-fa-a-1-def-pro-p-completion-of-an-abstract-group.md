# Final-adjudicator evidence: `def-pro-p-completion-of-an-abstract-group`

Disposition: `accepted-after-review`

Source status: `familiar`. No external verification was needed. The inverse-limit definition of pro-$p$ completion, the reverse-inclusion ordering on finite-$p$ quotient kernels, and closure of finite $p$-groups under subgroups and finite products are standard facts familiar to the final adjudicator.

## Independent review

I inspected the current item; both direct dependencies; the A page `pro-p-groups-and-the-p-adic-integers`; its B companion; the batch-2 manifest, coverage record, and notes; the merged proof-contract data; the Step-6 reader/refuter evidence; the Step-7 group context; both frozen judge rejections; both Alpha adjudications; and both repairs. Because this item is a definition with no proof-like section, it correctly has no item-level proof contract or `risk_review`; the reader and Step-7 concern records contain no finding against it.

The first judge correctly rejected the original text for failing to specify an inverse system. Alpha's first repair supplied the reverse-inclusion order, the quotient transition maps, nonemptiness, directedness, and the inverse-limit topology. The second judge correctly observed that the repaired definition still had not fixed $p$ as a prime. Alpha's second repair added exactly that datum in the opening sentence.

The resulting definition is well formed. The indexing family contains $G$, since $G/G$ is the trivial finite $p$-group. If $N_1$ and $N_2$ are two indices, the diagonal homomorphism embeds $G/(N_1\cap N_2)$ into $G/N_1\times G/N_2$. The product is a finite $p$-group, so its subgroup $G/(N_1\cap N_2)$ is also a finite $p$-group. Thus $N_1\cap N_2$ is an index and a common upper bound under reverse inclusion. For $N'\subseteq N$, the displayed natural quotient homomorphism $G/N'\to G/N$ has the correct direction and the quotient maps compose. Giving the finite quotients their discrete topologies and the limit its inverse-limit topology agrees with the adjacent profinite-completion convention, while `def-pro-p-group` licenses the final classification as pro-$p$.

The current text also remains within the batch manifest and coverage claim: it specializes abstract profinite completion to finite $p$-group quotients, and its two declared dependencies are exactly the manifest dependencies. The downstream proof-contract quotations have already been regenerated to the current definition.

## Focused checks

- `node tools/tsx-run.mjs tools/precheck.mts items/def-pro-p-completion-of-an-abstract-group.md` exited 0 (the definition has no proof body to check).
- `node tools/rendercheck.mjs items/def-pro-p-completion-of-an-abstract-group.md` exited 0.
- `node tools/depcheck.mjs --quiet` exited 0; its repository-wide warnings are unrelated, and it reported that references resolve with no cycles or draft items on published pages.
- The exact current judge hash computation returned context SHA-256 `c72040e2ff95e1b536b8d4ecda66064609e722495b3511e69568a2ef4db1051b` and item SHA-256 `569c23630c21dcb2c06d98a9af2471e747d2da50b280f28436d260bd6af4db09`.

No item, dependency, contract, or metadata repair is required.
