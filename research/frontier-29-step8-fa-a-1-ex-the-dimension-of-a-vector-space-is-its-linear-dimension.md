# Final-adjudicator evidence: `ex-the-dimension-of-a-vector-space-is-its-linear-dimension`

Disposition: `accepted-after-review`

Source status: `verified`.

## Material independently inspected

I inspected the current example and all three declared dependencies; the
categorical-trace and pivotal-structure definitions beneath the first
dependency; the neighboring matrix-trace and duality examples; both current
duality A/B pages; the batch-10 page manifest, coverage record, notes, and
batch-local and merged proof contracts; the current risk review and boundary
worksheet; the Step-6 reader and Alpha records; the Step-7/8 group context; the
judge, adjudication, defect, rejudge-cycle, and terminal-resolution ledgers; and
the reports describing both Alpha repairs. I also recomputed the current frozen
judge context instead of treating either earlier terminal receipt as current.

The first frozen judge rejection was correct: the original statement identified
the natural number $n=\dim_k V$ with a categorical dimension whose codomain is
$\operatorname{End}_{\mathbf{Vect}_k}(k)\cong k$. Alpha's first repair correctly
changed the conclusion to $n\cdot 1_k$ and exposed the characteristic-$p$
collapse. The second frozen judge rejection was also correct: the old title
still asserted the ill-typed equality even though the repaired body did not.
Alpha's second repair correctly changed the title to scalar-image equality.

The current bytes contain the later terminal repair that fixes a field $k$ in
both the Example and Given block, writes the canonical comparison explicitly as
$J_V(v)(f)=f(v)$, and synchronizes the batch-local and merged contracts with the
typed calculation. Those additions are correct and the two parsed contract
entries are identical.

## Authoritative source verification

- https://math.mit.edu/~etingof/egnobookfinal.pdf — Etingof, Gelaki,
  Nikshych, and Ostrik, *Tensor Categories*, Definition 4.7.1, Remark 4.7.2,
  Example 4.7.10, and Definition 4.7.11 (PDF pp. 89-90), support the exact
  convention used here: the left trace takes a morphism $V\to V^{**}$ and lands
  in $\operatorname{End}(\mathbf 1)$; finite-dimensional vector spaces carry
  the canonical pivotal comparison $V\to V^{**}$; and pivotal dimension is the
  trace of that comparison and is a scalar over $k$.
- https://arxiv.org/pdf/0804.3587 — Michael Müger, *Tensor categories: A
  selective guided tour*, p. 14, explicitly states that when
  $\operatorname{End}(\mathbf 1)=k1$, dimension is $k$-valued and that for
  finite-dimensional vector spaces with their usual symmetry and duality,
  $d(V)=\dim_k(V)\cdot1_k$. This directly verifies the repaired title and
  statement.
- https://ocw.mit.edu/courses/18-769-topics-in-lie-theory-tensor-categories-spring-2009/f2d0e33e705b06dbcbfcb263fc681c84_MIT18_769S09_lec08.pdf
  — Etingof et al., MIT 18.769 Lecture 8, pp. 76-79, independently gives the
  same trace and pivotal-dimension codomains and explicitly computes a
  $p$-dimensional vector representation in characteristic $p$ as having trace
  $p=0$ in $k$. This verifies the boundary sentence in step 3.1.

## Mathematical determination

Let $(v_1,\ldots,v_n)$ be a basis and $(v_1^*,\ldots,v_n^*)$ its dual basis.
The usual evaluation and coevaluation supplied by the rigidity dependency are

$$\operatorname{ev}_{V^*}(\Phi\otimes f)=\Phi(f),\qquad
\operatorname{coev}_V(1)=\sum_i v_i\otimes v_i^*.$$

For the canonical pivotal comparison $J_V(v)(f)=f(v)$, the page's left-trace
convention therefore gives

$$\operatorname{Tr}_L(J_V)
=\sum_{i=1}^n J_V(v_i)(v_i^*)
=\sum_{i=1}^n v_i^*(v_i)
=n\cdot1_k.$$

The published `def-dimension` dependency identifies $n\in\mathbb N$ as the
linear dimension, so the conclusion is precisely its image under the canonical
unital map $\mathbb Z\to k$, not a literal cross-codomain equality. The empty
basis gives $0\in k$, a one-element basis gives $1_k$, and when
$\operatorname{char}k=p$ a $p$-element basis gives $p\cdot1_k=0$. Thus the
current title, Example, Verification, dependencies, boundary record, and page
convention all express the same correctly scoped claim.

No item, dependency, contract, or metadata file needed a new edit in this
round, and no direct dependency was changed. Hence no
`owner-prerequisite-repair` licence is required.

## Focused checks on the accepted bytes

- `node tools/tsx-run.mjs tools/precheck.mts items/ex-the-dimension-of-a-vector-space-is-its-linear-dimension.md`
  passed 1/1.
- `node tools/rendercheck.mjs items/ex-the-dimension-of-a-vector-space-is-its-linear-dimension.md`
  reported the item render-clean.
- Targeted `tools/proof-contract.mjs` checks of both
  `research/frontier-29-batch-10.proof-contracts.json` and
  `research/frontier-29-proof-contracts.json` returned no errors or warnings.
- Batch-10 citation-fidelity and boundary-audit checks found no missing quote,
  widening candidate, template cluster, or contradicted boundary.
- `node tools/content-policy.mjs research/frontier-29-batch-10.pages.json`
  reported 44 scoped items with 0 errors and 0 warnings.
- `node tools/depcheck.mjs --quiet` exited successfully; its repository-wide
  legacy advisories did not name this item or any of its edges.
- `git diff --check` on the item and both contract files produced no output.
- The exact current context computation returned context SHA-256
  `5b1c95c07492b5ec8bff3f631a1ec40a0c8f629aa611b6d2ec18c7e7b8376bde`
  and item SHA-256
  `aa7e84d447b419252e1bb5b76abae911eb438d6f6250bee896c6225d7beb1feb`.

The item hash is unchanged from the repaired terminal bytes. The context hash
has moved because later repairs changed other interfaces on the shared A/B
pair; that currency change does not alter this example's mathematics.
