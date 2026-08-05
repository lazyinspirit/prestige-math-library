# Citation-precision audit — everything that cites `def-cardinal-arithmetic`

## The target, as it actually stands on disk

`items/def-cardinal-arithmetic.md` — definition — Cardinal sum $\\kappa \\oplus \\lambda$, product $\\kappa \\otimes \\lambda$ and exponentiation $\\kappa^{\\lambda}$, and why they are written apart from the ordinal operations

#### Definition

Let $\kappa$ and $\lambda$ be cardinals ([[def-cardinal]]), and recall the
notation of [[lem-cardinal-operations-are-well-defined]]:

$$\kappa \sqcup \lambda = (\{0\} \times \kappa) \cup (\{1\} \times \lambda), \qquad {}^{\lambda}\kappa = \{\, h : h \text{ is a function } \lambda \to \kappa \,\}.$$

**Sum and product.**

$$\kappa \oplus \lambda \;:=\; \lvert \kappa \sqcup \lambda \rvert, \qquad \kappa \otimes \lambda \;:=\; \lvert \kappa \times \lambda \rvert .$$

Both values exist in ZF and are cardinals: claim (c) of
[[lem-cardinal-operations-are-well-defined]] well-orders each of the two sets
explicitly, and [[lem-cardinality-of-a-well-orderable-set]] then supplies the
least equinumerous ordinal. **No choice principle is used.**

**Exponentiation.**

$$\kappa^{\lambda} \;:=\; \lvert {}^{\lambda}\kappa \rvert ,$$

the number of functions from a set of size $\lambda$ to a set of size $\kappa$.
The right-hand side is defined exactly when ${}^{\lambda}\kappa$ is
well-orderable. **Assuming the Axiom of Choice** ([[def-axiom-of-choice]]) every
set is well-orderable ([[thm-well-ordering-theorem]]) and $\kappa^{\lambda}$ is
defined for all cardinals; every statement on this page that writes
$\kappa^{\lambda}$ for an infinite exponent says so in its own hypotheses.

**Transport to arbitrary sets.** If $A$ and $B$ are well-orderable with
$\lvert A \rvert = \kappa$ and $\lvert B \rvert = \lambda$, then

$$\lvert A \sqcup B \rvert = \kappa \oplus \lambda, \qquad \lvert A \times B \rvert = \kappa \otimes \lambda, \qquad \lvert {}^{B}A \rvert = \kappa^{\lambda}$$

whenever the sets on the left have cardinalities at all, because $A \approx \kappa$
and $B \approx \lambda$ ([[def-equinumerous]]) and the three constructions
respect $\approx$ (claim (a) of [[lem-cardinal-operations-are-well-defined]],
[[def-injection-surjection-bijection]]). So the operations may be computed from
any representatives.

**Finite and infinite cardinals.** A cardinal $\kappa$ is **finite** when
$\kappa \in \omega$ and **infinite** when $\omega \subseteq \kappa$, that is
$\omega \le \kappa$; by trichotomy ([[lem-ordinal-trichotomy]]) and
[[lem-omega-least-limit-ordinal]] every cardinal is exactly one of the two.

## The 4 citing use(s), quoted verbatim from the citing items

### `def-lindelof-degree-and-cellularity` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Under choice, Lindelöf degree $L(X)$ and cellularity $c(X)$ as raw cardinal functions

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `def-weight-density-and-character` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Under choice, weight $w(X)$, density $d(X)$, local character $\\chi(x,X)$, and character $\\chi(X)$ as raw cardinal minima and a supremum

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `lem-large-cantor-cubes-are-not-separable` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Under choice, if $|I|>2^{\\aleph_0}$, then the Cantor cube $2^I$ is not separable

- [L2] The binary sequences have cardinality $2^{\aleph_0}$ ([[def-cardinal-arithmetic]], [[thm-cardinal-power-set-and-cantor]]).

### `thm-metric-weight-equals-density` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Under choice, every metrizable space has $w(X)=d(X)$

- [L3] If $\kappa$ is infinite, then $\kappa\cdot\aleph_0=\kappa$ ([[def-cardinal-arithmetic]], [[cor-cardinal-absorption]]).
