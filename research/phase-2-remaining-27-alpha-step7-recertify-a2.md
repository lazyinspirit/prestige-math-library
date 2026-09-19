# Step 7 targeted recertification — group a, second item

Run: \`phase-2-remaining-27\`  
Item: \`def-coadjoint-representation-of-a-lie-group\`  
Batch/page: 13 / \`moment-maps-and-symplectic-reduction\`

## Verdict

Repaired and re-issued under this targeted Step-7 adjudicator dispatch. The
coadjoint action, representation, orbit/stabilizer definitions, smoothness
argument, and infinitesimal sign formula are mathematically verified. The
carrier could not be re-issued byte-identically because its declared interface
omitted a load-bearing hypothesis and three dependencies:

- the manifest makes
  \(\xi_{\mathfrak g^*}(\alpha)(\eta)=\alpha([\xi,\eta])\) part of the item
  statement;
- the item derives that formula using
  \`def-fundamental-vector-field-of-a-left-action\` and
  \`prop-adjoint-exponential-identity\`;
- both cited clauses assume \(\mathrm{AC}_\omega\), but the item omitted those
  dependencies and \`def-countable-choice\`, and the manifest incorrectly
  recorded \`axiom_base: ZF\`.

This is a fatal \`missing-choice-scope\` / dependency-interface defect: the
claim as written used supplied results outside their stated hypotheses. I added
the inherited \(\mathrm{AC}_\omega\) hypothesis, declared the three missing
dependencies, identified their exact use, and synchronized only this item's
Batch-13 manifest statement, dependency list, and axiom base. No mathematical
formula, convention, orbit claim, smoothness argument, source locator, or other
item was changed.

Exact \`itemHashGuard\` digests:

- pre-repair: \`378a18f3765756a96d559f016cbbe5bcb0fa57c6ffc9d72995f3f7830f0ebaf0\`
- post-repair: \`1d57eb9542cbcba5bb83e6d1d3bb1e8948154fb7681133cf48873a66865cbe3a\`

The repaired Batch-13 manifest file has raw SHA-256
\`9c2d78650cd856a8470d93d2b8620994a867c33f9590e09ee1f1811f2ac0484f\`.
The Batch-13 proof-contract file has no contract entry for this definition:
its scope contains the 47 proof-bearing items, while this item's provenance is
\`proof: not-applicable\`. Existing contract citations that use this definition
remain exact because the pre-repair Definition text was preserved as a
contiguous passage; the full strict contract check confirms all 47 entries.
No proof-contract bytes were changed.

Defect row \`phase-2-remaining-27-step7-a-recertify-002\` records this repair.
The new dependencies are all published/backward, so no same-frontier dependency
ledger row is required.

## Mathematical verification

- From
  \(\operatorname{Ad}^*_g\alpha=\alpha\circ\operatorname{Ad}_{g^{-1}}\)
  and
  \(\operatorname{Ad}_{gh}=\operatorname{Ad}_g\operatorname{Ad}_h\),
  direct composition gives
  \(\operatorname{Ad}^*_{gh}=\operatorname{Ad}^*_g\operatorname{Ad}^*_h\).
  Thus this is a left action, with inverse
  \(\operatorname{Ad}^*_{g^{-1}}\).
- In dual bases the matrix of \(\operatorname{Ad}^*_g\) is the ordinary
  transpose of the matrix of \(\operatorname{Ad}_{g^{-1}}\). Smoothness of the
  adjoint representation and inversion therefore makes the joint action
  \((g,\alpha)\mapsto\operatorname{Ad}^*_g\alpha\) smooth.
- The library fundamental field uses
  \(t\mapsto\exp_G(-t\xi)\cdot\alpha\). Since
  \(\exp_G(-t\xi)\cdot\alpha
    =\alpha\circ\operatorname{Ad}_{\exp_G(t\xi)}\),
  differentiating
  \(\operatorname{Ad}_{\exp_G(t\xi)}
    =e^{t\operatorname{ad}_\xi}\)
  gives
  \(\xi_{\mathfrak g^*}(\alpha)(\eta)=\alpha([\xi,\eta])\).
  This agrees with the standard infinitesimal coadjoint representation
  \((\xi\cdot\alpha)(\eta)=-\alpha([\xi,\eta])\): the library's
  \(\exp(-t\xi)\) generator is its negative.
- The zero covector is fixed, and for an abelian group the adjoint and
  coadjoint actions are trivial. Nothing in the construction requires
  connectedness. The only choice use is inherited from the two named supplied
  infinitesimal-action clauses.

## Exact files read

Governing task and workflow:

- \`CLAUDE.md\`
- \`README.md\`
- \`SCHEMA.md\`
- \`WORKFLOW.md\`
- \`briefs/tasks/frontier-dependency-ledger.md\`
- \`briefs/tasks/alpha-step7.md\`
- \`research/phase-2-remaining-27-alpha-a-step7-recertify-2.task.md\`

Current target carriers and current Step-7 evidence:

- \`items/def-coadjoint-representation-of-a-lie-group.md\`
- \`research/phase-2-remaining-27-batch-13.proof-contracts.json\`
- \`research/phase-2-remaining-27-proof-contracts.json\`
- \`research/phase-2-remaining-27-batch-13.pages.json\`
- \`research/phase-2-remaining-27-audit-manifest.json\`
- \`research/phase-2-remaining-27-alpha-step7-a.md\`
- \`research/phase-2-remaining-27-judge-adjudications.jsonl\`
- \`research/defect-ledger.jsonl\`
- \`research/phase-2-remaining-27-alpha-step7-recertify-a.md\`

Current dependency clauses:

- \`items/def-countable-choice.md\`
- \`items/def-conjugation-and-the-adjoint-representation-of-a-lie-group.md\`
- \`items/prop-adjoint-is-a-smooth-lie-group-representation.md\`
- \`items/def-algebraic-dual-and-linear-functional.md\`
- \`items/def-smooth-left-action-of-a-lie-group.md\`
- \`items/def-orbit-stabilizer-and-orbit-map-of-a-smooth-action.md\`
- \`items/def-lie-group.md\`
- \`items/def-fundamental-vector-field-of-a-left-action.md\`
- \`items/prop-adjoint-exponential-identity.md\`

Validation interfaces inspected:

- \`tools/item-hash.mjs\`
- \`tools/defect-ledger.mjs\`
- \`tools/proof-contract.mjs\`
- \`tools/manifest-deps.mjs\`
- \`tools/rendercheck.mjs\`
- \`tools/citecheck.mjs\`
- \`tools/content-policy.mjs\`
- \`tools/audit-manifest.mjs\`
- \`tools/manifest-integrity.mjs\`

## External sources consulted

- Eckhard Meinrenken, *Symplectic Geometry*,
  <https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf>:
  §7.2, Definition 7.5, Remark 7.6, Example 7.11, and §7.3,
  Remark 7.13(b), printed pages 80–84. These passages give the
  \(\exp(-t\xi)\) generator convention, the coadjoint left action, the
  infinitesimal coadjoint representation, and the resulting sign translation.
- Ana Cannas da Silva, *Lectures on Symplectic Geometry*,
  <https://www.math.ist.utl.pt/~acannas/Books/symplectic.pdf>:
  Lecture 21, §21.5, printed pages 130–131. This section defines
  \(\langle\operatorname{Ad}^*_g\alpha,X\rangle
    =\langle\alpha,\operatorname{Ad}_{g^{-1}}X\rangle\)
  and explicitly explains that \(g^{-1}\) makes it a left representation.

The item locators remain accurate: Cannas da Silva supports the group-level
definition and left-action law, while Meinrenken Remark 7.13(b) supports the
infinitesimal coadjoint convention; the complete neighboring §7.2 passages
were also read to verify the library's sign translation.

## Focused validation

- definition precheck: clean (\`0 checked, 0 failing\`; definitions have no
  proof-bearing precheck unit)
- item rendercheck: PASS (renderer YAML and every math span parse)
- strict Batch-13 proof contract: PASS (\`47/47\`, 0 errors, 0 warnings)
- Batch-13 manifest dependency shape: PASS (\`117 items\`, 0 errors)
- targeted citecheck: PASS
- full 15-batch audit-manifest reconstruction: PASS
  (\`8515 relationships\`, \`1032 items\`, 0 defects); all nine target edges
  are published/backward
- manifest integrity: PASS (\`54/54\` pages, no scope drift)
- focused \`git diff --check\`: PASS
- whole-repository depcheck: FAIL on eight unrelated pre-existing B-leaf/item
  and page-cycle errors; the target item is absent from its warnings and errors
- Batch-13 content policy: blocked by the unrelated existing
  \`notation-iota-applied\` error in
  \`ex-circle-rotation-on-complex-n-space-and-its-quadratic-moment-map\`; the
  target item is not named

## Blockers

None for this item. The two wider-check failures above are outside this
dispatch's ownership and do not leave unresolved uncertainty in the repaired
claim, hypotheses, dependencies, local citations, source locators, or manifest
entry.
