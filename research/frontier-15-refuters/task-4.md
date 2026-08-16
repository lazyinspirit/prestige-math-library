## Your assignment — batch 7, group 4: idempotent monads, reflective subcategories, monad morphisms, distributive laws

Run `frontier-15`, batch 7. The pair is `library/category-theory/monads-comonads-and-their-algebras.md`
(A page, 59 items) and `library/category-theory/monads-comonads-and-their-algebras-examples.md`
(B page, 13 items). All items are at `items/<id>.md`, `status: draft`.

Read these items in full, every numbered step against every cited item on disk:

- def-idempotent-monad
- thm-equivalent-characterisations-of-an-idempotent-monad
- thm-algebras-for-an-idempotent-monad-form-a-reflective-subcategory
- cor-kleisli-and-eilenberg-moore-categories-are-equivalent-for-an-idempotent-monad
- thm-the-inclusion-of-a-reflective-subcategory-is-monadic
- def-monad-morphism
- thm-monad-morphisms-on-a-fixed-category-form-a-category
- thm-a-monad-morphism-induces-restriction-of-algebras-and-a-comparison-of-free-algebras
- def-distributive-law-between-two-monads
- thm-a-distributive-law-makes-the-composite-a-monad

**Focus for this group.**

`thm-equivalent-characterisations-of-an-idempotent-monad`: a multi-way equivalence. Check
**every** implication cycle actually closes — a proof of 1⇒2⇒3 with 3⇒1 missing or hand-waved
is fatal. Standard candidates are `\mu` iso, `T\eta = \eta T`, `\eta T` iso, `T\eta` iso, and
the algebra structure map being iso. Each of these is *not* trivially the others; verify each
claimed step. Check the definition in `def-idempotent-monad` names exactly one of them as
the definition and that the theorem does not silently reuse the characterisation it is
proving.

`thm-algebras-for-an-idempotent-monad-form-a-reflective-subcategory` (score 6, biconditional):
verify the full subcategory is the one claimed, that the reflector is left adjoint to the
inclusion in the right direction, and that "an object admits **at most one** algebra
structure, and admits one iff its unit component is iso" is actually proved and not assumed.

`thm-the-inclusion-of-a-reflective-subcategory-is-monadic`: monadic in the non-strict sense
requires the comparison functor be an **equivalence**, not an isomorphism. Check which is
proved and which is claimed in the title and Statement.

`thm-a-distributive-law-makes-the-composite-a-monad` (score 6, 7 deps, 7 facts, 8 steps).
**This proof was rewritten wholesale by the independent reader**, so it has had no
adversarial reading at all in its current form. Read it as if it were fresh. The current
route lifts `T` to the category of `S`-algebras via `\widetilde T(A,a) = (TA, T(a)\lambda_A)`,
checks the lifted-algebra laws and that `\eta^T`, `\mu^T` are algebra homomorphisms, then
composes the two Eilenberg-Moore adjunctions. Verify:
(a) `\widetilde T` really is a functor on `\mathcal{C}^S` and the claimed algebra law holds —
    which of the four distributive-law axioms does each use, and is that axiom the one cited?
(b) the composite adjunction really induces the monad `TS` with the multiplication the
    Statement claims, `\mu^T\mu^S \circ T\lambda S` up to the page's convention;
(c) the naturality step `\mu^T S \circ TT\mu^S \circ T\lambda S = T\mu^S \circ \mu^T SS \circ T\lambda S`
    — is that naturality of `\mu^T` at `\mu^S`, at the right component, with the right variance?
(d) whether the composite is `TS` or `ST` and that the convention is used consistently.
A wrong composition order here makes the Statement false.
