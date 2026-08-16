## Your assignment — batch 7, group 5: preorders and closure operators, free-algebra monads, power set, ultrafilters

Run `frontier-15`, batch 7. The pair is `library/category-theory/monads-comonads-and-their-algebras.md`
(A page, 59 items) and `library/category-theory/monads-comonads-and-their-algebras-examples.md`
(B page, 13 items). All items are at `items/<id>.md`, `status: draft`.

Read these items in full, every numbered step against every cited item on disk:

- thm-monads-on-a-preorder-are-exactly-closure-operators
- cor-algebras-for-a-closure-operator-monad-are-its-fixed-points
- cor-comonads-on-a-preorder-are-interior-operators
- thm-the-free-monoid-monad-and-its-algebras-are-monoids
- thm-the-free-group-monad-and-its-algebras-are-groups
- thm-the-free-module-monad-and-its-algebras-are-modules
- thm-the-covariant-power-set-monad
- thm-algebras-for-the-covariant-power-set-monad-are-posets-with-all-small-suprema
- lem-ultrafilter-pushforward-is-an-ultrafilter-and-is-functorial
- lem-the-principal-ultrafilter-and-ultrafilter-flattening-maps-are-natural
- def-the-ultrafilter-endofunctor-unit-and-multiplication
- thm-the-ultrafilter-monad-is-a-monad

**Focus for this group.**

`thm-monads-on-a-preorder-are-exactly-closure-operators` (score 5): "exactly" is a
biconditional in the title. Preorder, not poset — so the monad laws hold only up to the
preorder's equivalence, and `\mu` is *automatically* an equality/identity 2-cell because
hom-sets are subsingletons. Check the proof does not silently assume antisymmetry. Check
the direction "every closure operator gives a monad" verifies **all** monad laws and not
just idempotence and inflationarity.

`cor-algebras-for-a-closure-operator-monad-are-its-fixed-points` (score 5): the algebra
structure map is an arrow `c(x)\to x` in the preorder, so it exists iff `c(x)\le x`.
Verify the unit law forces `x \le c(x) \le x`, hence equality only under antisymmetry —
in a preorder this gives an isomorphism class, not literal equality. If the Statement says
"fixed points" and the argument only gives `c(x)\cong x`, that is a fatal overstatement.
Say which the page actually claims.

The three free-algebra theorems (`monoid`, `group`, `module`): each asserts a monad AND
that its algebras are exactly the algebraic structures. Check **both** halves. The empty
word / trivial group / zero module boundary. For the free-module monad, over what ring, and
does the Statement carry that hypothesis? Commutativity assumptions?

`thm-the-covariant-power-set-monad` (score 6, 7 deps): the multiplication is union, the
unit is singleton. Check that `\mathcal{P}` on morphisms is direct image, that naturality
of both is verified, and the empty set and empty family cases explicitly.

`thm-algebras-for-the-covariant-power-set-monad-are-posets-with-all-small-suprema`
(score 6). The independent reader repaired the `[L1]` citation here (it now cites
`def-t-algebra-and-algebra-homomorphism` for the algebra laws). Re-read the whole proof:
verify the order is `x \le y \iff a(\{x,y\}) = y` and that reflexivity, transitivity and
antisymmetry are each **proved**; verify the supremum of an arbitrary small subset is
`a(S)`; verify homomorphisms correspond exactly to sup-preserving maps; check `S = \varnothing`
gives a least element. "All small suprema" versus "all suprema" is a size claim — check it.

The three ultrafilter items plus the definition: `lem-the-principal-ultrafilter-and-ultrafilter-flattening-maps-are-natural`
is the only **critical**-tier item in the batch (score 8). Verify the flattening
`\mu_X(\mathcal{U}) = \{A \subseteq X : \{\mathcal{V} : A \in \mathcal{V}\} \in \mathcal{U}\}`
is an ultrafilter, that naturality squares commute for an arbitrary map, and the
`X = \varnothing` case (there is no ultrafilter on the empty set, so `\beta\varnothing = \varnothing`).
Check every use of the ultrafilter dichotomy (`A \in \mathcal{U}` or `X\setminus A \in \mathcal{U}`,
never both) and whether any step needs the ultrafilter lemma / a choice principle that the
Statement does not declare. A silently used choice principle is a missing hypothesis and
is fatal.
