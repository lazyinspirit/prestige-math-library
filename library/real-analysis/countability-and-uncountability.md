---
page: countability-and-uncountability
title: "Countability and Uncountability"
status: published
items: [def-equinumerous,
        lem-nat-order-is-membership, lem-pigeonhole, def-countable,
        thm-schroder-bernstein, lem-subset-of-countable,
        lem-countable-iff-surjection-from-n, lem-finite-subsets-listable,
        thm-n-cross-n-countable, thm-product-of-countable, def-countable-choice,
        thm-countable-union-of-countable, thm-rationals-countable,
        thm-cantor-powerset, thm-r-uncountable, cor-interval-uncountable,
        cor-irrationals-uncountable, rem-continuum-hypothesis]
examples: [fs-countable-union-theorem-of-zf, fs-infinite-has-countable-subset-in-zf,
           fs-uncountable-contains-interval]
---

**Objective.** This page separates the infinite sets of analysis into those that
can be listed and those that cannot. It fixes the vocabulary of size without
introducing cardinal numbers, proves that $\mathbb{Q}$ can be listed and that
$\mathbb{R}$ cannot, and keeps an explicit account of which results need a choice
principle and which do not.

One preliminary is settled first. The naturals page defines the order on
$\mathbb{N}$ additively, $m \le n$ when $m + k = n$ for some $k$, and only
*remarks* that on the von Neumann naturals this coincides with membership. Every
argument below reads a natural number as the set of its predecessors, so that
coincidence is proved here, as [[lem-nat-order-is-membership]], from the additive
order and induction alone. The ordinals page proves the same thing in far greater
generality, but it comes much later in the library, so citing it here would be
circular.

A second preliminary is the pigeonhole principle, [[lem-pigeonhole]]: no
injection $\sigma(n) \to n$ exists. It is what makes finiteness behave. A finite
set is equinumerous with exactly one natural number, so its number of elements is
well defined; $\mathbb{N}$ is equinumerous with no natural number, so the three
size classes below are mutually exclusive and not merely exhaustive; and no
natural number is equinumerous with a proper subset of itself, which is the ZF
half of the comparison between "infinite" and "Dedekind-infinite" drawn at the
end of the page. It is proved here for the same reason as the previous item: it
is elementary, several later items quote it, and the pages that would otherwise
supply it come later.

The measuring stick is equinumerosity: $A \approx B$ when a bijection exists,
$A \preceq B$ when an injection does. Two facts make this usable. The first is
[[thm-schroder-bernstein]], which turns injections in both directions into a
bijection, and does so with no choice at all. The second is
[[lem-countable-iff-surjection-from-n]], which says that for a nonempty set,
being countable is the same as being listable with repetitions allowed. Almost
every countability proof below is an application of that criterion to an
explicitly written surjection. The pairing bijection
$(m,n) \mapsto 2^m(2n+1)$ of [[thm-n-cross-n-countable]] is exhibited and proved
bijective, not waved at as a diagonal enumeration, and it is what makes products,
unions and $\mathbb{Q}$ countable.

**$\mathbb{R}$ is proved uncountable by Cantor's nested-interval argument of
1874, not by the decimal diagonal.** This is a deliberate and load-bearing
choice. Decimal expansions are infinite series, which this library has not yet
constructed, so a diagonal proof of the uncountability of $\mathbb{R}$ would rest
on machinery that does not exist here, and would be circular in the order this
library is built. The nested-interval proof needs only the least-upper-bound
property and the recursion theorem. The diagonal argument survives in the form
where it is entirely at home, on power sets, as [[thm-cantor-powerset]], which
uses nothing about $\mathbb{R}$ whatsoever.

The interval construction is also written so that it makes no choices. At each
stage the current interval is cut into three closed thirds and the rule takes the
**first one, in a fixed order, that misses $f(n)$**; the first and third thirds
are disjoint, so such a third always exists. That determinism is what turns the
construction into a single application of [[thm-recursion]]. The familiar
phrasing "pick a subinterval avoiding $f(n)$" would quietly be using dependent
choice, and the whole point of the thirds is to avoid it. Nothing in that
construction depends on the starting interval being $(0,1)$, and
[[cor-interval-uncountable]] re-seeds it to prove that every nondegenerate
interval, open or closed, is uncountable; that is the form the last of the false
statements below actually needs.

The choice ledger for this page is short and explicit. Every definition, lemma
and theorem proved here is a theorem of ZF except
[[thm-countable-union-of-countable]], which assumes the Axiom of
Countable Choice ([[def-countable-choice]]) and flags the exact step that spends
it: the selection, for every index at once, of one surjection onto $A_n$ out of
the many that exist. In particular [[lem-subset-of-countable]] and
[[lem-countable-iff-surjection-from-n]] are choice free precisely because a
nonempty set of naturals has a *least* element, [[thm-rationals-countable]] is
choice free because every rational has a representative with positive
denominator, and [[cor-irrationals-uncountable]] uses only a two-set union, which
needs nothing at all. The three false statements at the end guard exactly these
distinctions: two of them record, conditionally on the consistency of ZF and with
external references rather than proofs, that the countable union theorem and the
existence of countably infinite subsets of infinite sets are genuinely not
theorems of ZF; the third refutes the belief that an uncountable set of reals
must contain an interval.

One older debt is settled here. [[lem-finite-set-has-max]] proved that every set
$\{a_0, \dots, a_n\}$ of reals has a maximum and a minimum, and then stipulated,
explicitly without proof, that the nonempty finite subsets of $\mathbb{R}$ are
exactly the sets of that form, because no definition of finiteness existed at the
time. With [[def-countable]] in place, [[lem-finite-subsets-listable]] proves the
stipulation, so the usual reading of that lemma is now a theorem.
