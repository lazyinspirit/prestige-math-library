# Final-adjudicator evidence: `rem-what-is-needed-before-a-trace-can-be-written`

Disposition: `repaired`

Source status: `verified`.

## Material independently inspected

I inspected the current remark and both direct dependencies; the chosen-dual,
double-dual, pivotal, spherical, twist, and Drinfeld-type interfaces needed to
check every rung; the current duality A/B pages and their controlling design
conventions; the batch-10 manifest, coverage record, and notes; the batch-local
and merged proof contracts and risk records; the Step-6 reader and Alpha
evidence; the Step-7/8 group context; both exact judge rejections of the queued
remark; both Alpha adjudications and repairs; the later rejection and Alpha
repair of the Drinfeld dependency; the defect, cycle, terminal, and prerequisite
repair ledgers; and the earlier FA receipt. I recomputed all current hashes.

The queued remark is non-proof-bearing, so it correctly has no item-level proof
contract or `risk_review`. Its proof-bearing Drinfeld dependency and the
downstream pivotal/twist theorem do have contracts, and their batch-local and
merged entries are identical.

## Authoritative source verification

- https://imag.umontpellier.fr/~bruguieres/docs/Hopf-monads.pdf — Alain
  Bruguières and Alexis Virelizier, *Hopf monads*, §8.1, Lemma 8.1, starts
  with an arbitrary braided autonomous category, defines the displayed
  Drinfeld transformation, proves that it is an isomorphism, gives its inverse,
  and gives its double-braiding tensor relation. Remark 8.2 says it is monoidal
  exactly when the braiding is symmetric, and Proposition 8.3 sends a twist to
  a sovereign/pivotal structure by composition with this isomorphism. This is
  direct primary-source support for the repaired bare braided-rigid boundary.
- https://math.mit.edu/~etingof/egnobookfinal.pdf — Etingof, Gelaki,
  Nikshych, and Ostrik, *Tensor Categories*, Definition 4.7.1 and Remark 4.7.2
  type left and right trace using duality and make their codomain
  $\operatorname{End}(\mathbf1)$. Formula (8.30), Proposition 8.9.3, and the
  note after Definition 8.9.4 give the same Drinfeld map, the relation
  $u_X\otimes u_Y=u_{X\otimes Y}c_{Y,X}c_{X,Y}$ in the book's strict
  chosen-dual convention, and the resulting failure of monoidality outside the
  symmetric case. Formula (8.35) then combines $u$ with a twist to obtain a
  pivotal structure.
- https://arxiv.org/pdf/2103.13702 — Taiki Shibata and Kenichi Shimizu,
  *Modified traces and the Nakayama functor*, §6.4, begins with an arbitrary
  braided rigid monoidal category, calls the same map its Drinfeld isomorphism,
  and uses $u^{-1}$ to identify pivotal structures with natural automorphisms
  satisfying the twist relation. This independently confirms that no finite,
  abelian, or EGNO tensor-category hypothesis is needed for invertibility.

## Review of the two exhausted remark cycles

The first judge correctly rejected the original assertion that a pivotal
structure was necessary merely to make an endomorphism traceable. Once a
braided rigid category supplies the Drinfeld map $u_X:X\to X^{\vee\vee}$, an
endomorphism $x:X\to X$ gives a valid input $u_Xx$ to the left trace whether or
not $u$ is monoidal. Alpha's first repair added that distinction.

The second judge correctly rejected the remaining statement that the Drinfeld
map might fail to be invertible under bare braided rigidity. Lemma 8.1 above
provides an inverse under exactly those hypotheses. Alpha's second repair now
says that $u$ is a natural isomorphism but need not be monoidal. That is the
right distinction.

The current four-part ladder is therefore correct:

1. chosen duality supplies evaluation and coevaluation and hence types the
   categorical-trace composites;
2. any chosen comparison $j_X:X\to X^{\vee\vee}$ makes $j_Xx$ traceable, while
   a pivotal structure supplies such comparisons naturally, invertibly, and
   monoidally;
3. sphericality is the extra condition that identifies the appropriately
   pivotalized left and right traces; and
4. braiding plus rigidity supplies the natural Drinfeld isomorphism, while a
   twist corrects its double-braiding monoidality obstruction to produce a
   pivotal structure.

## Direct-dependency and licence repair

The earlier FA correctly repaired the run-local direct dependency
`thm-a-braided-rigid-category-has-a-drinfeld-morphism` from the stronger EGNO
domain to the bare braided-rigid domain. A later frozen rejection then correctly
found that the intermediate tensor equation identified maps with different
codomains. Alpha repaired it by naming the monoidal comparison

$$d_{X,Y}:X^{\vee\vee}\otimes Y^{\vee\vee}\xrightarrow{\sim}
(X\otimes Y)^{\vee\vee}$$

and writing the well-typed relation

$$d_{X,Y}(u_X\otimes u_Y)
=u_{X\otimes Y}c_{Y,X}c_{X,Y}.$$

This is exactly the strict source relation transported along the local
double-dual functor's monoidal structure. The current theorem and the queued
remark are mathematically correct.

That later licensed dependency edit left the existing
`owner-prerequisite-repair` metadata at the intermediate post-hash, which made
the Step-8 guard reject an otherwise valid two-edge repair chain. I repaired
the existing group-`a` row so that it now binds the original Step-8 baseline
directly to the final dependency bytes and records both the bare-domain and
codomain-typing corrections. Its exact `itemHashGuard` values are

- pre: `46525cee09be7e45e44260a6d46d6a360cbc67b815b886f82f0cc1b69dea8171`;
- post: `2bdd6f9e4b3772bd362079648078fdcda72e411d964c1a17c42acd0069b68e15`.

The row remains authorized by `final-adjudicator`, names this queued remark as
`found_via`, and uses only the Bruguières--Virelizier and
Shibata--Shimizu URLs listed above. I did not append a second licence because
this round made no further dependency edit and the guard validates every row;
a duplicate cannot supersede a stale row. Correcting the already-required
run-local metadata was the narrow repair.

I also updated the synchronized Drinfeld proof-contract risk note to record the
now-load-bearing comparison $d_{X,Y}$ and its common codomain, rather than
retaining a note that covered only the earlier invertibility repair. No item
body or dependency body changed in this round.

## Focused checks on the repaired metadata and current bytes

- Focused precheck passed the Drinfeld theorem and its downstream pivotal/twist
  theorem: 2 checked, 0 failing.
- Focused render checking passed the queued remark, both direct dependencies,
  and the pivotal/spherical/twist interfaces: 7 files clean.
- Item-specific proof-contract checks against both the batch-10 and merged
  contract files passed the two affected proof-bearing theorems with no errors
  or warnings; the paired entries are identical.
- Batch-10 citation fidelity found 58 citations with no missing quote or
  widening candidate; boundary audit found no template cluster or contradicted
  boundary.
- `node tools/content-policy.mjs research/frontier-29-batch-10.pages.json`
  reported 44 scoped items with 0 errors and 0 warnings.
- `node tools/depcheck.mjs --quiet` exited successfully.
- The exact Step-8 guard now reports 128/128 changes licensed, 0 creations,
  0 deletions, 0 errors, and 0 warnings.
- The prerequisite ledger parses as JSONL and its post-hash equals the current
  dependency `itemHashGuard` exactly.
- `git diff --check` on the queued item, dependency, contracts, and licence
  file produced no output.
- The exact current queued-item computation returned context SHA-256
  `dfb725fc1116110ea70cdd8d0cbad87be35bfe71b5ac7fd2870726969eb4bc58`
  and item SHA-256
  `d5fbc421dc5cc3afde977bb527cdea1041abdfd22321514fc63042a942bc7f1f`.

The disposition is `repaired` because a directly required risk record and the
exact prerequisite-repair licence were independently corrected to the final
mathematical bytes.
