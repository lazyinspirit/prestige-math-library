# frontier-30 — Step 8 adjudication, group b

## Summary

All 24 exact rejection tuples for batches 2, 12, and 13 were adjudicated:
9 `confirmed_fatal`, 12 `confirmed_nonfatal`, and 3 `false_positive`. Only the
9 confirmed-fatal items were edited. Each fatal tuple has one exact
`frontier-30-S8-b-*` defect-ledger owner, and all 9 repaired items are rejudge
targets.

There were no incoming alerts, outgoing cross-group findings, or published-item
repairs.

## Sources consulted

- The Stacks Project, [Section 10.26](https://stacks.math.columbia.edu/tag/00ER):
  for a prime ideal $\mathfrak p$, the closure of its point in the spectrum is
  $V(\mathfrak p)$. This confirms the substance of the closure item while
  leaving only its omitted local topology citation.
- The Stacks Project,
  [Exercise 111.6.23](https://stacks.math.columbia.edu/tag/02DD): closed points
  of $\operatorname{Spec}(A)$ correspond to maximal ideals. This confirms the
  closed-point corollary; the rejection identifies an omitted maximal-ideal
  existence/primality bridge rather than a false conclusion.
- The Stacks Project,
  [Definition 29.49.8](https://stacks.math.columbia.edu/tag/0A1X) and
  [Lemma 29.49.9](https://stacks.math.columbia.edu/tag/0A1Y): the domain of
  definition is the union of points admitting representatives, and for a
  reduced source and separated target the representatives glue to a unique
  morphism on that domain. Classical affine varieties meet those hypotheses.
  This supports the repaired maximal-representative paragraph.
- The Stacks Project,
  [Definition 29.49.10](https://stacks.math.columbia.edu/tag/0A1Z): a rational
  map between irreducible schemes is dominant when any representative is a
  dominant morphism. This supports the repaired dominant-rational-map
  definition.
- The Stacks Project,
  [Definition 6.26.1](https://stacks.math.columbia.edu/tag/0095): module
  pullback is
  $\mathcal O_X\otimes_{f^{-1}\mathcal O_Y}f^{-1}\mathcal G$, using the ring
  map corresponding to $f^\sharp$ and the inverse-image module structure. This
  supports the repaired typing paragraphs in the pullback definition.
- The Stacks Project,
  [Lemma 17.3.1](https://stacks.math.columbia.edu/tag/01AG): a complex of
  sheaves of modules is exact exactly when it is exact at every stalk. This
  confirms that the stalkwise-exactness rejection is a missing zero-composite
  bridge, not a false theorem.
- The Stacks Project,
  [Lemma 17.20.2](https://stacks.math.columbia.edu/tag/02N4): pullback along a
  flat morphism of ringed spaces is exact. This confirms the flat-pullback
  conclusion; adding the leading zero to the proof's test sequence supplies
  the omitted injectivity case immediately.
- The local interface
  `items/thm-coordinate-ring-principal-open.md` explicitly assumes the Axiom
  of Choice for its principal-open localization isomorphism. This exact local
  statement, rather than an external convention, is the basis for the three
  repaired Choice scopes and for the two repaired examples that invoke it.

## Exact adjudications

| item | outcome | basis and disposition |
|---|---|---|
| `cex-birational-does-not-imply-isomorphic` | `confirmed_fatal` | The item used the punctured principal open as a classical affine-variety object without establishing that type. It now fixes the algebraically closed/Choice setting and invokes the earlier explicit isomorphism with $V(xy-1)$ before applying birationality and affine coordinate-ring duality. Defect `frontier-30-S8-b-001`; rejudge. |
| `cex-rational-map-with-indeterminacy` | `confirmed_nonfatal` | The title is true. At the origin the same identity $xa=yh^n$ is impossible because $h(0,0)\ne0$ makes $x\nmid h$, hence $x\nmid yh^n$ in $k[x,y]$. This is an immediately closable omitted case; no edit. |
| `cor-closed-points-dense-in-affine-spectra` | `confirmed_nonfatal` | If $U$ is open in the subspace $Z$, write $U=Z\cap O$ with $O$ ambient open, then refine $O$ at the chosen point. This one-line subspace-topology bridge gives the displayed $D(f)\cap Z$; no edit. |
| `cor-closed-points-of-spectrum-are-maximal-ideals` | `confirmed_nonfatal` | Under the already stated Choice hypothesis, a strictly larger proper ideal lies in a maximal ideal, and every maximal ideal of a commutative ring is prime. The conclusion is correct and the missing standard bridge is local; no edit. |
| `def-direct-image-sheaf` | `false_positive` | The body deliberately defines the more general direct-image presheaf. Specializing its input to a sheaf gives the construction named by the title, and the immediately following lemma proves it is a sheaf. No claim in the definition is false; no edit. |
| `def-dominant-morphism-and-rational-map` | `confirmed_fatal` | The old definition invoked an unconstructed and locally ill-typed morphism on a possibly non-affine union. It now defines dominance on actual representatives and explains the unique glued maximal representative on $\operatorname{Dom}(\eta)$. Defect `frontier-30-S8-b-002`; rejudge. |
| `def-pullback-module-ringed-spaces` | `confirmed_fatal` | The tensor expression lacked the inverse-image sheaf-of-rings/module structures and the adjoint ring map needed to type it. The definition now states all three constructions and adds their direct interfaces. Defect `frontier-30-S8-b-003`; rejudge. |
| `def-rational-function-regular-at-point` | `confirmed_nonfatal` | `def-function-field-variety` supplies that $k[X]$ is a domain, so the localization at $\mathfrak m_x$ embeds canonically into $\operatorname{Frac}(k[X])=k(X)$. The displayed inclusion is correct; only its attribution to the localization theorem alone is compressed. No edit. |
| `def-rational-map-varieties` | `false_positive` | In this library a classical affine variety is nonempty and irreducible by definition. Thus the hypotheses already impose exactly the irreducibility promised by the title. No edit. |
| `ex-hyperbola-is-multiplicative-group-variety` | `confirmed_fatal` | The example did not bind the classical algebraically closed base or the Choice hypothesis of its localization dependency. Both are now explicit. Defect `frontier-30-S8-b-004`; rejudge. |
| `ex-idempotent-clopen-product-ring` | `confirmed_fatal` | For $e=(1,0)$, $k\times(0)$ contains $e$ and $(0)\times k$ does not. Consequently the old containment claim and its displayed $D(e)$/$D(1-e)$ labels were both reversed. Both are corrected. Defect `frontier-30-S8-b-005`; rejudge. |
| `ex-local-ring-affine-line-at-origin` | `confirmed_fatal` | The example invoked classical affine-variety and localization interfaces without an algebraically closed base or their Choice scope. Both hypotheses are now explicit. Defect `frontier-30-S8-b-006`; rejudge. |
| `ex-nonclosed-support-without-finiteness` | `confirmed_nonfatal` | The cited support-specialization lemma carries an unnecessary Choice hypothesis, but here the computed support consists of closed points $(p)$, each having only itself as a specialization. The item supplies that direct argument, so the citation-scope mismatch is non-load-bearing; no edit. |
| `ex-polynomial-map-coordinate-pullback` | `confirmed_nonfatal` | The displayed coordinate assignment is polynomial and the final relation check defines a $k$-algebra map from $k[Y]$; the affine-morphism theorem then gives the morphism. The text presents these two immediate lines in the wrong explanatory order, but the construction and conclusion are correct; no edit. |
| `lem-closure-of-a-point-is-its-vanishing-set` | `confirmed_nonfatal` | Vanishing sets are the closed sets of the Zariski topology fixed earlier on the same page. Adding that direct local citation closes step 1.1 immediately; the statement and proof argument are correct. No edit. |
| `lem-global-sections-left-exact` | `confirmed_nonfatal` | Exactness at the first two terms makes $\mathcal F'\to\mathcal F$ monic and identifies $\mathcal F'$ with its image sheaf; objectwise kernels also give injectivity on global sections. Those standard one-line consequences close step 1.1; no edit. |
| `lem-idempotent-gives-clopen-spectrum-partition` | `confirmed_nonfatal` | $D(f)$ is the complement of $V(f)$, and the earlier Zariski-topology item makes every $V(f)$ closed. The missing direct topology citation is local; the partition and clopenness are correct. No edit. |
| `lem-pullback-modules-right-exact` | `confirmed_nonfatal` | For the exactness clause, begin with a short exact sequence $0\to\mathcal M'\to\mathcal M\to\mathcal M''\to0$. Flat stalk tensoring then preserves the leading injection exactly as [F2] states. This is an immediate omitted leading-zero case; no edit. |
| `lem-rational-map-equivalence-transitive` | `false_positive` | “Affine open” was explicitly fixed on this page to mean principal open. Hence both witness opens are principal, and their intersection is principal by [L3]. The inference is licensed under the adopted convention; no edit. |
| `thm-affine-morphisms-coordinate-ring-anti-equivalence` | `confirmed_nonfatal` | Because $Y$ is an affine algebraic set, write $Y=V(S)$. Then $S\subseteq I(Y)$ gives $V(I(Y))\subseteq V(S)=Y$, while the reverse inclusion is immediate from the definition of $I(Y)$. The equality omitted from [L4] is elementary and the theorem is correct; no edit. |
| `thm-exactness-of-sheaves-stalkwise` | `confirmed_nonfatal` | Stalkwise exactness first makes every stalk of $d_i d_{i-1}$ zero; a sheaf morphism with all zero stalk maps is zero, so the image-to-kernel factorization exists. This is an immediate missing preliminary sentence; no edit. |
| `thm-function-field-independent-affine-open` | `confirmed_fatal` | Its load-bearing principal-open localization theorem explicitly assumes Choice. The statement, Given block, and dependency summary now preserve that hypothesis. Defect `frontier-30-S8-b-007`; rejudge. |
| `thm-global-regular-functions-affine-variety-coordinate-ring` | `confirmed_fatal` | Its sole substantive step specializes a Choice-qualified principal-open theorem while the old theorem omitted Choice. The statement, Given block, and dependency summary now preserve the hypothesis. Defect `frontier-30-S8-b-008`; rejudge. |
| `thm-local-ring-affine-variety-localization` | `confirmed_fatal` | Three construction/well-definedness steps use the Choice-qualified principal-open localization isomorphism. The theorem, Given block, and exact dependency statement now preserve Choice. Defect `frontier-30-S8-b-009`; rejudge. |

## Rejudge targets

1. `cex-birational-does-not-imply-isomorphic`
2. `def-dominant-morphism-and-rational-map`
3. `def-pullback-module-ringed-spaces`
4. `ex-hyperbola-is-multiplicative-group-variety`
5. `ex-idempotent-clopen-product-ring`
6. `ex-local-ring-affine-line-at-origin`
7. `thm-function-field-independent-affine-open`
8. `thm-global-regular-functions-affine-variety-coordinate-ring`
9. `thm-local-ring-affine-variety-localization`

## Alerts and retained observations

- Incoming alerts: none.
- Cross-group findings raised: none. No dependency edge or mathematical defect
  found during this adjudication pointed into another Alpha group.
- Published-item repairs: none.
- The Step-7 digest recorded no independent concerns, alerts, or cross-group
  seams.

## Checks and blockers

- Exact group-b join: 24/24 rejection tuples answered, with 9 fatal,
  12 nonfatal, and 3 false-positive outcomes; no missing, surplus, or duplicate
  group-b tuple.
- Fatal-only guard slice: exactly 9 group-b items changed from the `pre-step8`
  baseline, and every change has exactly one `confirmed_fatal` adjudication with
  the matching full pre-edit guard hash. No group-b edit is unlicensed.
- Exact fatal linkage: all 9 group-b fatal tuples have one distinct
  `frontier-30-S8-b-*` defect-ledger row. Defect-ledger validation reports 304
  current Frontier-30 rows and zero shape errors.
- Focused precheck: all 4 repaired proof-bearing items pass; the other 5
  repaired definitions/prose examples have no proof-format obligation.
- Focused render check: all 9 repaired files pass YAML, delimiter, wikilink,
  and KaTeX validation.
- Content policy: 103 scoped group-b items, 0 errors and 0 warnings.
- Dependency check: exit 0; 434 standing whole-corpus warnings.
- Step-8 scope check: exit 0; seven groups, 694 items partitioned, zero
  cross-group alerts. Concurrent open rejections outside group b fell from 164
  on the first post-write check to 145 on the final scope verification.
- The required whole-level Step-8 guard was run. Its final dispatch-time run
  saw 163 whole-level changes and 36 licenses then present, and therefore failed
  on 127 edits belonging to other groups whose adjudication rows had not yet
  landed. This is concurrent stage residue outside group b, not a group-b
  repair blocker; the exact group-b guard slice above is closed.
- The whole-run defect-linkage check likewise remained pending on other groups'
  fatal rows. The group-b 9/9 linkage is complete.

There is no unresolved group-b rejection, alert, or mathematical repair
blocker.
