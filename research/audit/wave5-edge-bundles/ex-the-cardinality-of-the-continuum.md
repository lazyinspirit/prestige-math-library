# Citation-precision audit — everything that cites `ex-the-cardinality-of-the-continuum`

## The target, as it actually stands on disk

`items/ex-the-cardinality-of-the-continuum.md` — example — $\\mathbb{R} \\approx \\mathcal{P}(\\mathbb{N})$ in ZF, by the Cantor set for one injection and by the cuts $\\{q \\in \\mathbb{Q} : q < x\\}$ for the other; so $\\lvert \\mathbb{R} \\rvert = 2^{\\aleph_0}$ under the Axiom of Choice

#### Example

Write ${}^{\omega}2$ for the set of functions $\omega \to 2 = \{0,1\}$, the
$2$ here being the von Neumann natural number, and $\mathcal{P}(\mathbb{N})$ for
the power set of $\mathbb{N} = \omega$ ([[def-natural-numbers]]). Then:

**(a) In ZF, with no choice principle:**

$$\mathbb{R} \;\approx\; {}^{\omega}2 \;\approx\; \mathcal{P}(\mathbb{N})$$

([[def-equinumerous]], [[def-real-numbers]]).

**(b) Assuming the Axiom of Choice** ([[def-axiom-of-choice]]):

$$\lvert \mathbb{R} \rvert \;=\; 2^{\aleph_0} \;=\; \lvert \mathcal{P}(\mathbb{N}) \rvert$$

([[def-cardinal-arithmetic]], [[def-aleph-and-beth-hierarchies]]).

The two injections are the classical ones and neither uses a binary expansion.
One direction is the Cantor set: [[thm-cantor-set-ternary-description]] already
supplies a bijection from the sequences with values in $\{0,1\}$ onto the Cantor
set $C \subseteq \mathbb{R}$ ([[def-cantor-set]]). The other is the cut map
$x \mapsto \{q \in \mathbb{Q} : q < x\}$, injective because $\mathbb{Q}$ is dense
in $\mathbb{R}$ ([[lem-of-q-dense]]), and $\mathcal{P}(\mathbb{Q})$ is a copy of
$\mathcal{P}(\mathbb{N})$ because $\mathbb{Q}$ is countable
([[thm-rationals-countable]]). [[thm-schroder-bernstein]] closes the loop, and it
is choice free, which is what makes clause (a) a theorem of ZF.

## The 1 citing use(s), quoted verbatim from the citing items

### `ex-cardinal-functions-of-the-lower-limit-line` (published-backward, page countability-axioms-and-cardinal-functions-examples)

Title: For the lower-limit line, $\\chi=d=L=c=\\aleph_0$ and $w=2^{\\aleph_0}$ under choice

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.
