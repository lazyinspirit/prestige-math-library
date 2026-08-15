# frontier-13 — Step 6a independent reader 6, batch 6

## Scope and method

I opened and read all **60/60 assigned items**: 51/51 on
`adjunctions-units-and-counits` and 9/9 on
`adjunctions-units-and-counits-examples`. I also opened both page files, all
four batch artifacts, and every on-disk item cited by an `[F#]`, `[A#]`, or
`[L#]` fact. The 163 citation records have 103 distinct targets: 12 are among
the assigned items and **91 additional dependency items** were opened.

Every assigned mathematical-content item has both `provenance.statement` and
`provenance.proof`. The only `ai-generated` Statements are the two B-page
counterexamples. A corpus search found no reverse dependency on either one. I
checked both witnesses directly: the inclusion $1\to2$ fails naturality for the
specified transposition of $2$, and the nonidentity element of the one-object
category $C_2$ makes both proposed triangle composites nonidentity. I found no
counterexample to either AI-generated Statement.

Severity follows the dispatch's 30-second rule. In particular, short omitted
calculations are `polish`; a false Statement or a load-bearing citation used
outside the cited result's hypotheses is `fatal`.

## Findings — `adjunctions-units-and-counits`

### 1. `thm-mates-under-a-pair-of-adjunctions` — mates do not carry arbitrary identity transformations to identities

- **Exact location:** Statement line 43; proof steps 1.3 and 3.1, lines 63 and
  69.
- **What is wrong:** the final sentence of the Statement says that mates carry
  identity transformations to identity transformations. This is false for a
  general pair of adjunctions and is contradicted by the immediately following
  `rem-conjugates-preserve-isomorphisms-but-arbitrary-mates-need-not`, line 24.
- **Concrete counterexample:** take the first adjunction to be the free-group
  adjunction $F\dashv U$, the second to be the identity adjunction on
  $\mathbf{Grp}$, $H=F$, $K=1_{\mathbf{Grp}}$, and
  $\alpha=1_F:F\Rightarrow F$. The displayed mate formula gives
  $\alpha^\flat=\varepsilon:FU\Rightarrow1_{\mathbf{Grp}}$, the free-group
  counit, which is not an identity transformation.
- **Severity:** **fatal** — concrete false Statement and false proof conclusion.

### 2. `thm-mates-under-a-pair-of-adjunctions` — `[L2]` is used outside its local-smallness domain

- **Exact location:** `[L2]` at line 51; proof steps 1.2–1.3 at lines 61–63.
- **What is wrong:** the theorem assumes arbitrary categories, but the cited
  `thm-naturality-of-the-adjunction-bijection-is-transposition-of-squares`
  explicitly assumes an adjunction between locally small categories (Statement
  lines 29–37). The mate theorem has no such hypothesis, yet `[L2]` is an input
  to both cited steps.
- **Why it matters:** naturality of the displayed mate composites can instead
  be proved directly from naturality of the units, counits, and $\alpha$, but
  the on-disk citation does not license the size-free proof as written.
- **Severity:** **fatal** — load-bearing citation used beyond its stated domain.

### 3. `thm-adjoints-are-unique-up-to-unique-natural-isomorphism` — the naturality proof cites a locally small theorem without the hypothesis

- **Exact location:** Statement lines 29–33; `[L1]` at line 39; proof steps 2.2
  and 3.1 at lines 51–53.
- **What is wrong:** the Statement has no local-smallness hypothesis. Its `[L1]`
  target, `thm-naturality-of-the-adjunction-bijection-is-transposition-of-squares`,
  assumes locally small categories. Steps 2.2 and 3.1 use that theorem to prove
  naturality and counit compatibility.
- **Why it matters:** the uniqueness theorem itself is valid without local
  smallness. It can be repaired size-freely by applying the initiality in `[L2]`
  to the two components in step 2.2 and then checking counit compatibility from
  the triangles. That is not the proof contracted on disk.
- **Severity:** **fatal** — missing hypothesis for a load-bearing citation.

### 4. `thm-equivalent-encodings-of-an-adjunction` — the universal-arrow-to-adjunction directions omit the required construction checks

- **Exact location:** proof steps 1.3–2.1, lines 56–58.
- **What is wrong:** `[L3]` states only that an existing adjunction produces
  universal arrows. In the converse direction, step 1.3 says that unique
  factorisations produce inverse transpositions and that transposing identities
  produces a natural counit satisfying both triangles, but it does not define
  the counit or check its naturality and the two triangle equations. Step 2.1
  disposes of the other converse only as “the dual construction.”
- **Why:** the standard unique-factorisation calculation supplies the missing
  sentences quickly; no conclusion or hypothesis needs to change.
- **Severity:** **polish** — both converse directions are true and the omitted
  checks are standard local repairs.

### 5. `thm-a-left-adjoint-exists-exactly-when-every-comma-category-has-an-initial-object` — step 3.1 invokes an undeclared converse

- **Exact location:** proof step 3.1, line 53.
- **What is wrong:** after constructing $F$ and the natural family $\eta$, the
  step says that the unique factorisations “give the universal-unit encoding of
  an adjunction.” Neither `[F1]` nor `[L1]` states universal arrows imply an
  adjunction; `[L1]` is the opposite direction. The preceding
  `thm-equivalent-encodings-of-an-adjunction` is the intended bridge but is not
  a dependency or step input.
- **Severity:** **polish** — adding that preceding result, or its one-paragraph
  unit/counit calculation, closes the gap immediately.

### 6. `thm-adjunctions-compose` — the triangle calculations are asserted but not displayed

- **Exact location:** proof steps 2.1–3.1, lines 53–57.
- **What is wrong:** step 2.1 never writes the first triangle composite after
  substituting $\bar\eta$ and $\bar\varepsilon$; step 3.1 then refers to “the
  resulting composite.” The second triangle receives the same prose-only
  reduction. Consequently the claimed use of interchange and naturality cannot
  be checked from the numbered steps themselves.
- **Severity:** **polish** — the formulas are the standard correct composite
  adjunction formulas, and writing the two whiskered expansions is a short
  repair.

### 7. `thm-right-adjoints-preserve-limits` — step 4.2 names the wrong triangle identity

- **Exact location:** proof step 4.2, line 53.
- **What is wrong:** recovering $k$ from its transpose uses
  $G(\varepsilon_L)\eta_{GL}=1_{GL}$, the **second** triangle identity, after
  naturality of $\eta$. The step says it uses the first triangle identity.
- **Severity:** **polish** — `[L1]` contains both identities and changing one
  word makes the cited calculation accurate.

### 8. `thm-limits-and-colimits-are-adjoint-to-the-diagonal-functor` — naturality is checked for only one of the two adjunctions

- **Exact location:** proof steps 1.3 and 2.1, lines 54–56.
- **What is wrong:** step 2.1 verifies naturality of the cone/mediating-map
  bijection for $\Delta\dashv\lim$. Step 1.3 asserts the dual colimit adjunction,
  but no step checks that the cocone/mediating-map bijection is natural in the
  diagram and vertex.
- **Severity:** **polish** — explicitly taking the dual of step 2.1 supplies the
  missing check.

### 9. `thm-abelianisation-is-left-adjoint-to-the-inclusion-of-abelian-groups` — the proof never shows the quotient is abelian

- **Exact location:** Statement line 29; proof steps 2.1–3.1, lines 49–51.
- **What is wrong:** step 3.1 applies step 2.1 with target $H^{\mathrm{ab}}$, but
  step 2.1 applies only to an abelian target. Neither
  `def-abelianisation-of-a-group` nor
  `def-commutator-and-commutator-subgroup` states that $G/[G,G]$ is abelian;
  the former only defines the quotient and canonical map.
- **Severity:** **polish** — the omitted calculation
  $q(g)q(h)q(g)^{-1}q(h)^{-1}=q([g,h])=1$ closes the gap in under 30 seconds.

### 10. `thm-the-discrete-and-indiscrete-topologies-form-an-adjoint-triple-over-set` — `[F2]` is not the cited on-disk definition

- **Exact location:** `[F2]` at line 39; proof steps 1.1–1.2, lines 51–53.
- **What is wrong:** `[F2]` restates continuity as “the preimage of every open
  set is open.” The cited `def-continuous-map-top`, lines 38–52, defines global
  continuity pointwise via neighbourhoods and proves only the local
  open-neighbourhood criterion; it does not state the global preimage-open
  characterization quoted in `[F2]`.
- **Why:** the cited item's Remarks do separately state the two special cases
  needed here—maps out of a discrete space and maps into an indiscrete space—so
  the theorem can be repaired by citing those clauses or checking the actual
  pointwise definition.
- **Severity:** **polish** — inaccurate restatement, but the needed repair is
  immediate and contained in the same item.

### 11. `thm-stone-cech-is-left-adjoint-to-the-inclusion-of-compact-hausdorff-spaces` — the inclusion's object condition is not established

- **Exact location:** Statement lines 29–33; `[F3]` at line 43; proof step 1.1,
  line 53.
- **What is wrong:** to form $J:\mathbf{CompHaus}\hookrightarrow\mathbf{Tych}$,
  the proof needs every compact Hausdorff space to be Tychonoff under the stated
  foundations. `[F3]` restates only that such a space embeds into a cube, and
  step 1.1 does not supply the additional subspace/Tychonoff inference. The
  cited lemma's proof obtains its embedding from the separate result
  `cor-a-compact-hausdorff-space-is-tychonoff`, but that conclusion is not the
  cited lemma's Statement or a fact of this item.
- **Severity:** **polish** — directly citing that corollary supplies the missing
  object-level justification.

### 12. `prop-the-underlying-set-functor-on-fields-has-no-left-adjoint` — characteristic preservation needs injectivity, and the target characteristics are not supplied

- **Exact location:** proof steps 1.3–2.1, lines 53–55.
- **What is wrong:** unitality shows that a field homomorphism sends
  $n\cdot1$ to $n\cdot1$, but equality of characteristics also needs
  injectivity for the reverse vanishing implication. The cited
  `def-field-homomorphism` records automatic injectivity only in its Remarks;
  `[F2]` and step 1.3 omit it. In addition, `[F3]` merely defines
  characteristic and `[F4]` merely says $\mathbb Z/p$ is a field; those facts do
  not themselves state that $\mathbb Z/2$ and $\mathbb Z/3$ have
  characteristics $2$ and $3$.
- **Severity:** **polish** — insert the one-line injectivity argument and the
  elementary two quotient calculations.

### 13. `fs-the-hom-set-form-of-an-adjunction-needs-no-size-hypothesis` — the proposed category's left identity is not proved

- **Exact location:** refutation step 1.1, line 47.
- **What is wrong:** `[F2]` directly gives $\alpha+0=\alpha$, one identity law
  for ordinal addition. The other law $0+\alpha=\alpha$ is not supplied by the
  zero and successor clauses alone: its proof also needs the limit clause and a
  transfinite induction. Thus the sentence claiming that the “zero and
  successor clauses” give both identity laws is false as written.
- **Severity:** **polish** — a one-line transfinite-induction argument using all
  three recursion clauses validates the intended one-object category.

No other defect was found in the remaining 39 A-page items or in the A-page
title and two prose paragraphs.

## Findings — `adjunctions-units-and-counits-examples`

### 14. `ex-the-galois-connection-between-ideals-and-varieties` — a univariate definition is used as multivariate evaluation machinery

- **Exact location:** Example lines 27–37; `[F2]` at line 45; verification steps
  1.1–3.1, lines 57–67.
- **What is wrong:** the Example uses $f(a)$ for
  $f\in k[x_1,\ldots,x_n]$ and $a\in k^n$, and step 1.1 needs simultaneous
  evaluation to preserve subtraction and products. The cited
  `def-polynomial-evaluation-and-root`, lines 29–35, defines only evaluation of
  a **univariate** polynomial $f\in R[x]$ at a single $s\in S$ and does not
  state the ring-homomorphism laws used in step 1.1. `[F1]` only defines the
  multivariate ring by iteration; it supplies no multivariate evaluation map.
- **Why it matters:** the definitions of $V(S)$ and $I(X)$ and the proof that
  $I(X)$ is an ideal all depend on this absent interface. A multivariate
  evaluation definition/theorem, including its ring-homomorphism property, is
  required.
- **Severity:** **fatal** — load-bearing inflated citation and undeclared
  multivariate operation.

### 15. `ex-the-free-category-on-a-quiver` — the adjunction step presupposes a functor and local-smallness that were not established

- **Exact location:** verification steps 1.1–4.1, lines 43–49.
- **What is wrong:** the proof constructs $P(Q)$ on objects and the extension of
  a quiver map $Q\to U(\mathcal C)$, but it never defines $P$ on a quiver map
  $Q\to Q'$ or checks the functor laws. Step 4.1 nevertheless asserts
  naturality in quiver maps and applies `[L1]`, whose cited theorem requires
  locally small categories; local smallness of the categories of small quivers
  and small categories is also not among the step's inputs.
- **Severity:** **polish** — define $P(q)$ by extending the edge map and observe
  that the relevant map collections are subsets of function sets.

The other seven B-page items are a clean read. Their computations, both
triangle-identity failures, boundary cases, titles, and Statements check out.
The B page has no prose body beyond its item list.

## Per-page verdicts

| page | assigned items opened | verdict |
|---|---:|---|
| `adjunctions-units-and-counits` | 51/51 | **FAIL** — 3 fatal findings and 10 polish findings |
| `adjunctions-units-and-counits-examples` | 9/9 | **FAIL** — 1 fatal finding and 1 polish finding |

**Total assigned items actually opened: 60/60.** Additional distinct cited
dependency items opened: **91**. Finding count: **4 fatal, 0 nonfatal, 11
polish**.
