# Final-adjudicator evidence: `ex-the-dimension-of-a-vector-space-is-its-linear-dimension`

Disposition: `repaired`

Source status: `verified`.

## Authoritative source verification

- https://arxiv.org/pdf/0804.3587 — Michael Müger, *Tensor categories: A selective guided tour*, p. 14, defines categorical dimension in $\operatorname{End}(\mathbf 1)$, identifies it with a scalar when $\operatorname{End}(\mathbf 1)=k1$, and states for finite-dimensional vector spaces with the usual symmetry and duality that $d(V)=\dim_k(V)\cdot1_k$. This directly supports the repaired statement and its codomain.
- https://ocw.mit.edu/courses/18-769-topics-in-lie-theory-tensor-categories-spring-2009/f2d0e33e705b06dbcbfcb263fc681c84_MIT18_769S09_lec08.pdf — Etingof, Gelaki, Nikshych, and Ostrik, Lecture 8, pp. 76-79, defines the left trace as an endomorphism of the tensor unit, defines pivotal dimension as $\operatorname{Tr}(a_X)\in\operatorname{End}(\mathbf 1)$, says that dimensions in a tensor category over $k$ are elements of $k$, and gives the characteristic-$p$ example in which a $p$-dimensional vector representation has trace $p=0$ in $k$. This independently confirms both the type distinction and the positive-characteristic boundary.

## Independent review and repair

I inspected the current example; all three declared dependencies; the trace and pivotal definitions; the neighboring matrix-trace example; the duality A/B pages; the batch-10 manifest, coverage notes, proof contract, and risk record; the Step-6 reader evidence; the Step-7 group context; both frozen judge rejections; and both Alpha adjudications and repairs.

The first judge correctly rejected the original claim equating an element of the ground field with a natural number. Alpha correctly repaired the Example and Verification to compute $n\cdot1_k\in k$ and added the characteristic-$p$ collapse. The second judge correctly observed that the title still made the old untyped assertion, and Alpha correctly changed it to scalar-image equality.

Two directly required details nevertheless remained incomplete. First, the body used the symbols $k$, $1_k$, $\operatorname{End}(k)$, and $\operatorname{char}k$ without binding a field $k$ in the Example or Given block. I repaired both places to fix a field $k$ and a finite-dimensional $k$-vector space $V$. At step 1.1 I made the component of the canonical pivotal structure explicit as $J_V(v)(f)=f(v)$ and cited [L3], the already-declared rigidity dependency, where the usual duality is used.

Second, both the batch-10 and merged proof-contract entries were stale: their derivations still ended in $n$ and still concluded literal equality with linear dimension, while their boundary worksheet retained the pre-repair wording. I aligned both contract copies with the exact scalar-valued proof, added the [L3] citation contract, and recorded explicit checks for the empty/zero basis, the one-dimensional case, and positive-characteristic collapse. The two contract entries are byte-for-byte identical as parsed JSON after repair.

The final calculation is now fully typed. For a basis $(v_1,\ldots,v_n)$ and dual basis $(v_1^*,\ldots,v_n^*)$, the trace convention on the page gives
$\operatorname{Tr}_L(J_V)=\sum_iJ_V(v_i)(v_i^*)=\sum_i v_i^*(v_i)=n\cdot1_k$.
For $n=0$ this is the empty sum $0$, and if $n=p=\operatorname{char}k$ its value is $0\in k$ even though the ordinary dimension is the natural number $p$. Thus the repaired title, statement, proof, and contract all express the same claim.

No direct dependency file was changed, so no `owner-prerequisite-repair` licence is required.

## Focused checks

- `node tools/tsx-run.mjs tools/precheck.mts items/ex-the-dimension-of-a-vector-space-is-its-linear-dimension.md` passed 1/1.
- `node tools/rendercheck.mjs items/ex-the-dimension-of-a-vector-space-is-its-linear-dimension.md` exited 0.
- `node tools/proof-contract.mjs research/frontier-29-batch-10.proof-contracts.json --items ex-the-dimension-of-a-vector-space-is-its-linear-dimension --json` exited 0 with no errors or warnings.
- The corresponding merged-contract check against `research/frontier-29-proof-contracts.json` also exited 0 with no errors or warnings.
- `node tools/depcheck.mjs --quiet` exited 0 and reported no cycles, unresolved references, or draft items on published pages.
- `git diff --check` on the item and both contract files produced no output.
- The exact final judge hash computation returned context SHA-256 `a118dc944ba0055037af6138586bf09f6ce62b0964146ecba7541237e62a0e14` and item SHA-256 `aa7e84d447b419252e1bb5b76abae911eb438d6f6250bee896c6225d7beb1feb`.

Currency note: the later queue-position-5 repair corrected the Statement of a sibling theorem on the shared duality A page. That changed this item's pair-context hash from its first terminal receipt without changing this item's bytes, dependencies, proof, or adjudication. The mathematical review above remains unchanged; the hash shown here is the recomputed final context used for the replacement terminal receipt.
