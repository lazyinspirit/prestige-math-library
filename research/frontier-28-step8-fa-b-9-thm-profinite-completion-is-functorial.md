# Final-adjudicator evidence — `thm-profinite-completion-is-functorial`

Disposition: `repaired`.

## Material reviewed

I independently read the theorem and every proof step; the completion,
canonical-map, inverse-limit continuity, and universal-property dependencies;
the complete profinite A/B page context; the batch-1 manifest, source coverage,
notes, proof contract, boundary worksheet, and risk review; the Step-6
reader/refuter records; both frozen judge rejections and exact Alpha
adjudications; the defect-ledger rows; and Alpha's two repairs.

## Mathematical basis

Alpha's final repair correctly establishes that $\widehat H$ is a profinite
topological group before invoking the universal property. The identity and
composition equations are also correctly obtained from the uniqueness clause.

The continuity of $\iota_H\circ f$, however, remained too compressed for the
library's citation discipline. Saying only that coordinate kernels have
finite-index preimages does not itself cite the initial-topology criterion or
show that all fibres of the finite-discrete coordinate maps are open. I repaired
that bridge explicitly.

For every finite-index normal $N\trianglelefteq H$, the coordinate composite
$G\to H/N$ has kernel $f^{-1}(N)$. The induced map
$G/f^{-1}(N)\hookrightarrow H/N$ is injective, so the kernel is finite-index
normal in $G$. Every coordinate fibre is a coset of that subgroup and is open
in the profinite topology. Thus every coordinate map is continuous, and the
opened coordinatewise-continuity theorem makes
$\iota_H\circ f:G\to\widehat H$ continuous. The universal property then gives
the unique $\widehat f$ satisfying the canonical square.

For $f=\operatorname{id}_G$, both the induced map and the identity extend
$\iota_G$, so uniqueness identifies them. For composable $f,g$, both
$\widehat g\circ\widehat f$ and $\widehat{g\circ f}$ extend
$\iota_K\circ g\circ f$, so uniqueness gives the composition law.

I added the direct inverse-limit continuity dependency, regenerated both proof
contracts, and replaced the stale high-risk note with a current
final-adjudicator review.

## Source verification

Source status: `verified`.

- Brian Osserman's official Ohio State notes,
  https://people.math.osu.edu/cogdell.1/6112-Osserman-www.pdf, define the
  inverse-limit topological-group structure in Proposition 2.4, define
  profinite completion in Definition 3.2, and state in Proposition 3.5 that a
  homomorphism from an abstract group into a profinite group factors uniquely
  through a continuous homomorphism from its profinite completion. This is the
  exact universal-property route used here.
- Hendrik Lenstra's Leiden notes,
  https://websites.math.leidenuniv.nl/algebra/Lenstra-Profinite.pdf, independently
  define a projective limit of finite groups with the restricted product topology
  in Section 2. That topology is precisely why coordinatewise continuity is the
  correct local criterion.

## Focused checks

- `precheck`: 1 checked, 0 failing.
- Renderer check: clean YAML, wikilinks, displays, delimiters, and KaTeX.
- Strict batch-1 proof contract: 1/1 checked, 0 errors or warnings.
- Strict merged proof contract: 1/1 checked, 0 errors or warnings.
- Batch-1 citation fidelity: 119 citations over 53 items, no missing quote and
  no widening candidate.
- Required batch-1 risk report: 53 items routed, 0 errors; this theorem is
  critical risk with a complete final-adjudicator review.
- Batch-1 content policy: 73 scoped items, 0 errors or warnings.
- `depcheck --quiet`: exit 0; only standing repository warnings.
- `git diff --check` on the repaired theorem and both synchronized contracts:
  clean.
