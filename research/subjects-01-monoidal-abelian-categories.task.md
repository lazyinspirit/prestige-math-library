# subjects-01 — `monoidal-abelian-categories`

**You are an expert of category theory, specifically monoidal and abelian categories.**

| | |
|---|---|
| track | `monoidal-abelian-categories` |
| wave | 1 |
| file you own | `research/plan-category-theory-track.md` (**NEW**) |
| placement anchor | in place, within the planned 365–380 band |
| sibling tracks to read first | _none — you are in wave 1 and depend on no sibling track_ |

This file does not exist yet. You create it, and you are its only writer.

---

## Your remit — what you mint

- adjunctions, units and counits, the triangle identities, adjoint functor theorems (general and special), reflective subcategories
- monads and their algebras, the Eilenberg–Moore and Kleisli categories, monadicity
- Kan extensions, ends and coends, the calculus of coends, weighted limits
- additive categories, preadditive structure, biproducts, additive functors
- **abelian categories**: kernels and cokernels, images, exactness, the axioms and their equivalents, Freyd–Mitchell embedding (statement, and honestly sourced), exact functors
- exact sequences and the diagram lemmas: five lemma, snake lemma, nine lemma, splitting
- monoidal categories, coherence and Mac Lane's theorem, strictification, monoidal functors
- braided, symmetric and enriched categories; closed monoidal structure and internal hom; if properly sourced, rigid/dual objects and fusion or tensor categories

## What you must NOT mint — cite it instead

- categories, functors, natural transformations (359), universal properties and Yoneda (361), and limits and colimits (363) are all AUTHORED. Read every one before scaffolding — 127 items across the three. Do not re-mint any of it.
- the tensor product OF MODULES is `abstract-algebra`'s (planned page 106). You cite it as the motivating example of a monoidal structure and do not construct it.
- chain complexes, resolutions, derived functors, Ext/Tor and spectral sequences belong to `homological-algebra`, which reads your file and builds on it. You supply the abelian-category foundation; you do not do homology.
- the category sections of `plan-combinatorics-and-categories.md` are the prior scaffold for this material. **Read them as input and supersede them in YOUR file** — you may not edit theirs.

## Verified from disk by the orchestrator, 2026-08-13

- The prior scaffold for this material lives in `research/plan-combinatorics-and-categories.md` (253 KB) alongside combinatorics, which is why you get a new file: two agents cannot write one file. Read its category sections, its §6 "The size question in category theory (CC-D5)" and its §7 choice ledger, and carry forward every decision they record.
- **Owner decision SE-D3 (2026-07-28) is settled and must not be re-opened**: global choice is NOT adopted. The exempt axiom list stays at AC, countable choice and dependent choice. The three theorems that wanted global choice — limits assembling into a functor, L_nF being well defined, and fully-faithful-plus-essentially-surjective implying equivalence for LARGE categories — are stated in their DATA-SUPPLIED form: a choice of limit cone, or of a resolution, is structure the reader supplies and the conclusion is relative to it. The unconditional form is not stated.
- Planned and unauthored in your band: adjunctions and the adjoint functor theorems (365), monads (367), Kan extensions/ends/coends (369), additive categories and biproducts (371), abelian categories (373), exact sequences and the diagram lemmas (375), monoidal categories/strictness/coherence (377), braided/symmetric/enriched (379).

## Source research

Riehl *Category Theory in Context* (free, author-hosted), Leinster *Basic Category Theory* (free on arXiv), Kelly *Basic Concepts of Enriched Category Theory* (free TAC reprint) and Etingof–Gelaki–Nikshych–Ostrik *Tensor Categories* (free) are all open. Mac Lane *Categories for the Working Mathematician* and Borceux *Handbook of Categorical Algebra* are the standard references.

These are **starting points, not a reading list to accept on trust**. Verify what
is actually reachable, obtain the full text of at least two standard textbooks in
category theory, specifically monoidal and abelian categories, gather a rich corpus of lecture notes and other open-web sources,
and run the canonical-coverage harvest over the exact chapter ranges you read.
Where two sources disagree on a convention, record the disagreement and say which
the library adopts and why.

---

## Reminders that cost previous runs real time

- **`items[]` in `research/plan-spec.json` is the only honest signal** of what
  exists. A page with an empty `items` array is a plan, not a library page.
- **Absolute orders in the existing scaffold files are stale.** Use relative
  labels and page ids; the orchestrator computes orders at splice.
- **Check an id before coining it** — `ls items/ | grep -i '<name>'`. Ids are
  immutable on `main` and the unqualified name is often already taken by another
  category.
- **Never ask for a permission, and never let a subagent ask.** Record a blocker
  instead. You already hold every permission you need.
- **Write only the file you own.** Everything else goes in "Amendments owed".
