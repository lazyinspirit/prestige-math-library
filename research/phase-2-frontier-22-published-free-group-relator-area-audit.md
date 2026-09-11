# Frontier-22 published free-group and relator-area audit

Date: 2026-09-11

## Scope and deduplication

This bounded audit covers fourteen published group, word, presentation and
relator-area interfaces used by the active hyperbolic-geometry branch. Complete
items were read, while deeper generic subgroup/coset foundations were checked
only through the exact published interfaces cited here. This is not a whole
group-theory audit or certification of active drafts.

Before classification, the canonical index and whole ledger were searched by
each exact ID, title, alias and the mechanisms of stack reduction, quotient
presentation, normal-closure factorization, word length and finite Dehn maxima.
No target had an index row. `def-group` and `def-quotient-group` have the aliases
`def-abelian-group` and `def-factor-group`; those aliases also had no row or
duplicate finding. No published or workflow content was edited.

## Exact bounded dispositions

| Item | SHA-256 | Evidence |
|---|---|---|
| `def-group` | `8550d0c3fcd63be7685a6b1d331e5b6d25dba1ab55d56cd791a3de24798de619` | The monoid plus two-sided inverse axioms and abelian specialization are standard; uniqueness justifies the inverse notation and the one-sided verification remark is correctly restricted to an already invertible element. |
| `def-alphabet-words-and-reduction` | `9306573bc9314bf1cd6aafc0782e0762d219121258a8543eaf2e0366ef0e51bf` | Formal inverse letters form a disjoint alphabet; finite words, empty word, adjacent inverse cancellation and finite free equivalence are coherent and make no existence claim beyond the later theorem. |
| `def-free-group` | `5699c6c3342db48556c5604c0236507a5ee9b303b2b376b23d5913f8ac0c4862` | The extension-and-uniqueness universal property is stated for an arbitrary set of generators and correctly separates the abstract definition from the justified reduced-word construction. |
| `thm-reduced-words-form-the-free-group` | `8933122dc29951c51b097d369d8801a13bc34acc0d82075420f5ff563d01b678` | Deterministic stack reduction is invariant under adjacent inverse deletion/insertion, so equivalent reduced words coincide. This gives associative reduced concatenation, explicit inverses, and the evaluation homomorphism with the required universal uniqueness, without Choice. |
| `def-normal-closure` | `3a97c493957969e948188b213b0dc7fdb9b1ff9ed7c74d3310072fd144475e31` | The family of normal subgroups containing the subset is nonempty, and its intersection gives exactly the stated least normal subgroup. |
| `prop-normal-closure-is-products-of-conjugates` | `08128c4bc1561a7105b751f28c7a311806617d3fcfb7da943e324f8acb15cd70` | Finite conjugate products form a subgroup, contain the relators and are closed under conjugation; minimality then proves equality with normal closure, including the empty product. |
| `def-quotient-group` | `070f5708421454d97333b9f324c3bdbd4c1985a1c3a167de1cc7742fa977cbf5` | Left cosets and the product `(gN)(hN)=ghN` are stated under normality, with representative independence and group laws attached to exact published justifications. Alias `def-factor-group` is the same item. |
| `def-group-presentation` | `b6e16e8ca7840e86c1b8a29a12bae09f54af33539b25842cfd706b9819fd9dea` | Quotienting the free group by the normal closure of the relator subset is well typed and forces precisely the relators and their normal consequences to the identity. |
| `def-finitely-generated-group` | `076c9bf19a716a44eda6c4717e486dae93d1b57744b31e3003afdc08dcd8a7a0` | Generation is equality with the generated subgroup; finite generation existentially supplies a finite generating subset without selecting a family. |
| `def-word-length-with-respect-to-a-generating-set` | `43a57c781206982cd739b4261e61d5e3c9c9e4c5174f49cdcaabf2803710d197` | Generation makes the expression-length set nonempty and natural well-ordering gives its least element; the empty-product and formal-word clauses are explicit. |
| `lem-word-length-is-well-defined-and-satisfies-the-length-laws` | `2439deb2305871f8d680cc22aef0a0435dc3f803510cd73a96c7a34cfb03afce` | Concatenation proves subadditivity, reverse/invert proves inverse invariance, and only the empty expression has length zero. The displayed dependency extract's stray `4.` after the inverse law is harmless prose, not a mathematical premise. |
| `def-recursive-and-finite-group-presentations` | `7cb76d343eec24c8b7658163c1b0c1e5351b715caa147b60c99692232219087e` | A finite generating alphabet is fixed; recursive enumerability of relator words and finiteness of the relator set are distinguished, and the quotient group is inherited from the presentation definition. |
| `def-word-problem-for-a-fixed-finite-presentation` | `d9044a90f67d3cbfa9e5a35182fe17cdde82dcda71d5175d8edf4dcb45f210e1` | Inputs are formal words and the predicate is equality to the identity in the fixed presented quotient, including unreduced representatives. |
| `def-algebraic-relator-area-and-dehn-function-of-a-finite-presentation` | `78244095c039dee0cdab238a91adc9226f551babd436ae270d361beed25a6453` | Normal-closure factorization makes every null word's area set nonempty, so natural well-ordering gives its least value. For fixed `n`, a finite alphabet has finitely many formal words of length at most `n`; the null set contains the empty word, so the displayed maximum exists. This finite argument is an adequate implicit use, not repair debt. |

## Frontier disposition and limits

The exact reduced-word, normal-factorization and finite relator-area clauses used
by the active HG filling chain are sound. No new published defect, choice
hypothesis, Phase-2 supplier or live blocker was found. This receipt does not
reopen or close the separately recorded free-Cayley right-increment defect or
the quasi-isometry-characterization defects. No fresh external source retrieval
was needed because the complete local proofs expose the relevant finite-word
arguments and cite standard sources.
