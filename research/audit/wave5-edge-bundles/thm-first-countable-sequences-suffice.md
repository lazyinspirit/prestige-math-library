# Citation-precision audit — everything that cites `thm-first-countable-sequences-suffice`

## The target, as it actually stands on disk

`items/thm-first-countable-sequences-suffice.md` — theorem — Assuming Countable Choice, in a first countable space sequential closure equals closure and sequential continuity at a point equals continuity there

#### Statement

**Assume the Axiom of Countable Choice** ([[def-countable-choice]]). Let $X$ be a
first countable topological space ([[def-first-countable-top]]) and let $Y$ be a
topological space. Then:

1. $\operatorname{seqcl}(A) = \overline{A}$ for every $A \subseteq X$
   ([[def-sequence-convergence-top]], [[thm-closure-characterisation-top]]);
2. for $f : X \to Y$ and $p \in X$, $f$ is continuous at $p$
   ([[def-continuous-map-top]]) if and only if $f$ is sequentially continuous at
   $p$.

**Where $\mathrm{AC}_\omega$ is spent, and that it is not decoration.** Both
directions that this theorem adds to
[[lem-sequential-closure-inside-closure]] build a sequence by picking one point
from each of countably many nonempty sets $M_k \cap A$, respectively
$M_k \setminus f^{-1}[V]$, and the first countability hypothesis supplies no rule
for the pick. The two applications of $\mathrm{AC}_\omega$ below are the only
uses of any choice principle in the proof; the inclusions already proved in
[[lem-sequential-closure-inside-closure]] use none at all.

## The 1 citing use(s), quoted verbatim from the citing items

### `thm-first-countable-frechet-urysohn-sequential-hierarchy` (published-backward, page nets-and-filters)

Title: Assuming countable choice, every first countable space is Fréchet–Urysohn; in ZF every Fréchet–Urysohn space is sequential

- [L1] Under countable choice, first countability gives $\operatorname{seqcl}(A)=\overline A$ for every $A\subseteq X$ ([[thm-first-countable-sequences-suffice]], [[def-countable-choice]]).
