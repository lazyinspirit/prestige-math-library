# Citation-precision audit — everything that cites `thm-ultrafilter-lemma`

## The target, as it actually stands on disk

`items/thm-ultrafilter-lemma.md` — theorem — The ultrafilter lemma, from the Axiom of Choice: every filter extends to an ultrafilter

#### Statement

**Assume the Axiom of Choice** ([[def-axiom-of-choice]]). Let $X$ be a set and let
$\mathcal{F}_0$ be a filter on $X$ ([[def-filter]]). Then there is an ultrafilter
$\mathcal{U}$ on $X$ ([[def-ultrafilter]]) with $\mathcal{F}_0 \subseteq \mathcal{U}$.

The hypothesis is spent exactly once, through Zorn's lemma at step 4.1; the rest
of the argument is a theorem of ZF.

In particular, every set that carries a filter carries an ultrafilter. The proof
uses Zorn's lemma ([[thm-zorn]]) and therefore the Axiom of Choice. That some
choice principle is unavoidable here, if ZF is consistent, is an external
independence result, not proved in this library; see the remarks below.

## The 4 citing use(s), quoted verbatim from the citing items

### `ex-free-ultrafilter-converging-in-a-convergent-sequence-space` (published-backward, page nets-and-filters-examples)

Title: Assuming the ultrafilter lemma, a free ultrafilter on $\\mathbb{N}$ converges to the added point in the one-point convergent-sequence space

- [L2] The ultrafilter lemma extends that filter to an ultrafilter ([[thm-ultrafilter-lemma]]).

### `lem-every-net-has-a-universal-subnet` (published-backward, page nets-and-filters)

Title: Assuming the ultrafilter lemma, every net has a universal subnet

- [L1] The ultrafilter lemma extends $\mathcal F_x$ to an ultrafilter $\mathcal U$ ([[thm-ultrafilter-lemma]]).

### `rem-tychonoff-choice-strengths` (published-backward, page nets-and-filters)

Title: The compact Hausdorff product theorem uses the ultrafilter lemma, while the published arbitrary compact product theorem assumes the full Axiom of Choice

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `thm-compactness-via-nets-filters-and-ultrafilters` (published-backward, page nets-and-filters)

Title: Assuming the ultrafilter lemma, compactness is equivalent to every net having a cluster point, every net having a convergent subnet, every filter having a cluster point, and every ultrafilter converging

- [L4] Every filter extends to an ultrafilter ([[thm-ultrafilter-lemma]]), and every cluster point of an ultrafilter is its limit ([[lem-ultrafilter-cluster-points-are-limits]]).
