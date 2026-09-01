# Final-adjudicator evidence — `thm-polynomial-reductions-transfer-p-np-and-conp-membership`

Disposition: `repaired`.

## Material reviewed

I independently read the current theorem, all six cited dependencies, its full
A/B page pair and every item on those pages, the batch-11 manifest, coverage
record and notes, the batch-local and merged proof contracts, the Alpha risk
record, the Step-6 reader/refuter/Alpha evidence, both frozen judge rejections,
their exact adjudications and defect-ledger rows, and Alpha's two Step-8
repairs. I also checked the direct downstream use in
`prop-an-np-complete-language-in-p-implies-p-equals-np`.

## Frozen defects and Alpha repairs

The first frozen rejection was correct. The reduction definition permits
languages over arbitrary finite alphabets, whereas this page defines `NP` and
`coNP` only for languages inside `{0,1}*`, with complements taken in that same
ambient space. Alpha correctly repaired the theorem by requiring both
`A,B subseteq {0,1}*`; all three conclusions are now well typed.

The second frozen rejection was also correct. Merely knowing `A <=_p B` gives
the existence of a reduction witness, but the then-current proof selected `f`
inside only the `B in P` case and reused it out of scope in the separate NP and
coNP cases. Alpha correctly moved the choice to the Given block: one fixed
total polynomial-time map `f` witnessing `A <=_p B` is now in scope throughout
steps 1.1, 1.2, and 2.1.

## Mathematical basis

The current item proof is correct.

- For `P`, compute `f(x)` and run the polynomial-time decider for `B`.
  Correctness is exactly the reduction equivalence, and a polynomial-time
  transducer has polynomial output length, so the two running-time bounds
  compose.
- For `NP`, if `R_B` has certificate bound `p`, use
  `R_A(x,u) iff R_B(f(x),u)`. Computing `f`, forming the paired input, and
  running the decider for `R_B` take polynomial time in `|x|+|u|`. Since
  `|f(x)|` is polynomially bounded in `|x|`, the composed certificate bound
  `p(|f(x)|)` is bounded by a polynomial in `|x|`. The two existential
  characterizations agree because `x in A iff f(x) in B`.
- For `coNP`, binary ambient spaces make the complements unambiguous, and the
  same map satisfies
  `x in A^c iff f(x) in B^c`. Applying the already proved NP transfer to
  `A^c <=_p B^c` gives `A^c in NP`, hence `A in coNP`.

The composition lemma cited in the final sentence is true and consistent with
the page's strictly many-one reduction convention; it is ancillary to, and
does not conceal a missing step in, the three transfer arguments.

Independent review found no remaining defect in the theorem text. I did repair
two directly required proof-contract boundary records. The empty-case row now
checks the actually relevant possibility that `A` or `B` is the empty
language, rather than dismissing an unrelated “empty witness family.” The
nonempty-choice row now correctly attributes the verifier/certificate reuse to
step 1.2 (not step 2.1) and records that `f` was fixed before all cases. The
batch-11 contract was then remerged into the 339-item run-wide contract. No
item body or unrelated metadata was changed.

## Source verification

Source status: `familiar`.

No external verification was needed. Backward closure of `P`, `NP`, and
`coNP` under polynomial-time many-one reductions is standard complexity
theory, and every load-bearing point is derived directly in the item from the
library's explicit definitions: total binary reduction witness, polynomial
output length, verifier/certificate composition, and complements in
`{0,1}*`. I was sufficiently familiar with these facts to check the proof
without relying on an external recollection or source claim.

## Focused checks

- Item `precheck`: 1 checked, 0 failing.
- Item renderer/frontmatter/KaTeX check: clean.
- Strict batch-11 proof contract: 27/27 checked, 0 errors or warnings.
- Strict run-wide proof contract: 339/339 checked, 0 errors or warnings.
- Batch-11 citation fidelity: 83 citations, no missing quote and no widening
  candidate.
- Batch-11 boundary audit: no contradicted disposition.
- Reviewed risk report on the target: critical item routed, 0 errors; the
  required Alpha review remains present.
- Batch-11 content policy: 38 scoped items, 0 errors or warnings.

Final raw SHA-256 values before recording were
`f11b9e724d2ae176cf7a5ce9950865b0dea977216506861ebc38927a7b9a3684`
for the unchanged theorem,
`c333d028d5b3b1f862f3242ce5f8e708e850640f18ca6b1fc4827d8441d64683`
for the repaired batch-11 contract, and
`25900a808cf25d51be5605dec12510e0a9ed94de12848b1dbb606e5df3dc81db`
for the merged contract.
