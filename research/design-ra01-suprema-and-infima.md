# Authoring design: `suprema-and-infima` (RA-01, spec pages 9 and 10)

Round 1, level 1. Prerequisite: the published `foundations-of-the-real-numbers`
only. Ids, kinds, deps and proof strategies are fixed in
`research/plan-spec.json`; this file fixes the **statements and proof
skeletons**.

## Settled: do NOT redefine supremum

The published `def-complete-ordered-field` **already defines** upper bound,
bounded above, least upper bound / supremum, and the least-upper-bound property,
for a subset of an ordered field. RA-01 therefore introduces **no new definition
of supremum**. It supplies the missing dual notions and the working toolkit.

Also already published and to be cited, never restated: `thm-of-archimedean`,
`lem-of-abs-value`, `lem-of-triangle-inequality`, `thm-of-square-roots`,
`lem-of-q-dense`, `lem-of-add-order`, `lem-of-sign-rules`,
`prop-of-multiply-inequalities`.

**Do not cite anything from `order-zorn-and-the-axiom-of-choice`.** That page
also defines an upper bound, for a general poset, and it sits at the SAME level
as this one, so the two are authored in parallel and must stay independent. The
poset notion and the ordered-field notion are deliberately separate items at
different generalities, per the owner's both-generalities decision. Throughout
this page $\mathbb{R}$ means the complete ordered field of the published pages.

## A page: `suprema-and-infima`, 17 items

1. **`def-bounded-set`** (definition). Lower bound; bounded below; bounded
   (above and below). "Upper bound" and "bounded above" come from
   `def-complete-ordered-field`; state that explicitly rather than repeating
   them.
2. **`def-infimum`** (definition). $\ell$ is a **greatest lower bound**
   (**infimum**, $\inf S$) of $S$ if it is a lower bound and $\ell' \le \ell$ for
   every lower bound $\ell'$.
3. **`def-max-min`** (definition). $m$ is the **maximum** of $S$ if $m \in S$ and
   $s \le m$ for all $s \in S$; minimum dually. Note maximum is an element of the
   set, supremum need not be: that distinction is the page's main theme.
4. **`lem-sup-unique`** (lemma, direct). A supremum, when it exists, is unique;
   likewise an infimum. Two suprema are each $\le$ the other, so equal by
   antisymmetry. This is what licenses the notation $\sup S$ and $\inf S$. (The
   published definition remarks this; a later page needs a citable *item*.)
5. **`lem-reflection`** (lemma, direct). Write $-S = \{-s : s \in S\}$. Then $u$
   is an upper bound of $S$ iff $-u$ is a lower bound of $-S$, and conversely.
   Proof from `lem-of-add-order` / `lem-of-sign-rules`.
6. **`thm-infimum-property`** (theorem, direct). LANDMARK. Every nonempty
   $S \subseteq \mathbb{R}$ that is bounded below has an infimum, and
   $\inf S = -\sup(-S)$. Skeleton: $-S$ is nonempty and bounded above by
   `lem-reflection`, so $\sup(-S)$ exists by the LUB property; set
   $\ell = -\sup(-S)$; `lem-reflection` makes $\ell$ a lower bound, and any lower
   bound $\ell'$ gives $-\ell'$ an upper bound of $-S$, hence
   $\sup(-S) \le -\ell'$, hence $\ell' \le \ell$.
7. **`lem-sup-epsilon`** (lemma, direct). For $S$ nonempty and bounded above and
   $u$ an upper bound: $u = \sup S$ **iff** for every $\varepsilon > 0$ there is
   $s \in S$ with $u - \varepsilon < s$. Both directions. This is the form every
   later page actually uses.
8. **`lem-inf-epsilon`** (lemma, direct). Dual, via `lem-reflection` and
   `thm-infimum-property` rather than by repeating the argument.
9. **`lem-max-is-sup`** (lemma, direct). If $S$ has a maximum then
   $\sup S = \max S$; and if $\sup S \in S$ then $\sup S = \max S$. So the
   supremum is attained exactly when a maximum exists.
10. **`lem-finite-set-has-max`** (lemma, induction). Every nonempty finite subset
    of $\mathbb{R}$ has a maximum. Induction on the number of elements; the two
    element case is trichotomy of the order. Needed so that
    `lem-sup-attained` has content and so later pages may write
    $\max\{a_1, \dots, a_n\}$ (as `lem-cauchy-bounded` already does).
11. **`lem-sup-monotone`** (lemma, direct). If $\emptyset \ne S \subseteq T$ and
    $T$ is bounded above, then $\sup S \le \sup T$.
12. **`lem-sup-translate`** (lemma, direct). For $a \in \mathbb{R}$ and $S$
    nonempty bounded above, $\sup(a + S) = a + \sup S$.
13. **`lem-sup-scale`** (lemma, cases). For $c > 0$, $\sup(cS) = c \sup S$; for
    $c < 0$, $\sup(cS) = c \inf S$. `[assume-case pos]` / `[assume-case neg]`,
    plus `[cases-exhaustive]` noting $c = 0$ is excluded by hypothesis. **Label
    tokens must be single `\w+`.**
14. **`lem-sup-sum`** (lemma, direct). For nonempty $S, T$ bounded above,
    $\sup(S + T) = \sup S + \sup T$, where $S + T = \{s + t\}$. The $\le$
    direction is immediate; the $\ge$ direction uses `lem-sup-epsilon` twice with
    $\varepsilon/2$.
15. **`fs-sup-belongs-to-set`** (false-statement). FALSE: the supremum of a set
    belongs to the set. Refute **self-containedly** with $S = \{x : 0 < x < 1\}$:
    $1 = \sup S$ by `lem-sup-epsilon`, and $1 \notin S$. Do **not** put the B
    page counterexample in `deps`.
16. **`fs-every-set-has-sup`** (false-statement). FALSE: every subset of
    $\mathbb{R}$ has a supremum. Two independent failures, both needed: the empty
    set, of which every real is an upper bound so there is no least one; and
    $\mathbb{N}$, which by `thm-of-archimedean` has no upper bound at all. The
    LUB property requires nonempty **and** bounded above, and each hypothesis
    fails on its own example.
17. **`rem-sup-conventions`** (remark). The extended-real conventions
    $\sup \emptyset = -\infty$ and $\sup S = +\infty$ for $S$ unbounded above are
    common and are **not** adopted silently in this library: statements here carry
    the nonempty and bounded hypotheses explicitly. Record the convention so a
    reader coming from a source that uses it is not confused.

## B page: `suprema-and-infima-examples`, 8 items

- **`ex-sup-of-open-interval`** — $\sup\{x : 0 < x < 1\} = 1$, not attained;
  full verification via `lem-sup-epsilon`.
- **`ex-sup-of-closed-interval`** — $\sup\{x : 0 \le x \le 1\} = 1 = \max$.
- **`ex-inf-of-reciprocals`** — $\inf\{1/n : n \ge 1\} = 0$, not attained; the
  "for every $\varepsilon$" step is exactly `thm-of-archimedean`.
- **`ex-sup-rationals-below-sqrt-two`** — $\sup\{q \in \mathbb{Q} : q > 0,\ q^2 < 2\} = \sqrt{2}$,
  using `thm-of-square-roots`. The point: the same set inside $\mathbb{Q}$ has no
  supremum, which is what completeness buys.
- **`ex-sup-of-sum-of-sets`** — a worked instance of `lem-sup-sum`.
- **`cex-sup-not-attained`** — refutes `fs-sup-belongs-to-set`.
- **`cex-unbounded-set-has-no-sup`** — $\mathbb{N} \subseteq \mathbb{R}$ has no
  supremum, by `thm-of-archimedean`.
- **`cex-empty-set-has-no-sup`** — every real is an upper bound of $\emptyset$,
  so the set of upper bounds has no least element.

## Standing constraints

Identical to those at the end of `research/design-foundations-pages.md`: no em
dashes; display math on a single source line; one physical line per proof step;
`**Given:**` required; single-token `[assume-case]` labels; adopt precheck's
REPAIR stratification and fix stale in-prose step references; `deps` may not
point into a B page from outside it; every source URL verified 200.
