# Final-adjudicator evidence — `thm-universal-property-of-profinite-completion`

Disposition: `repaired`.

## Material reviewed

I independently read the theorem and every proof step; all completion,
canonical-map, density, inverse-limit, continuity, Hausdorffness, and universal-
property dependencies; the complete profinite A/B page context; the batch-1
manifest, source coverage, notes, proof contract, boundary worksheet, and risk
review; both frozen judge rejections and exact Alpha adjudications; the
defect-ledger rows; and Alpha's two repairs.

## Mathematical basis

Alpha's final repair correctly avoids assuming that a profinite target is the
limit of *all* its open-normal quotients. It fixes one inverse-limit
presentation $\theta:P\to\varprojlim_iP_i$ and uses the canonical kernels
$N_i=\ker(q_i\circ f)$. This is the right construction.

The remaining proof did not verify the transition equations that make the
coordinate maps a cone, and it invoked coordinatewise continuity and target
Hausdorffness without fact labels. I repaired those points explicitly.

For each $i$, the image of $q_i\circ f$ is finite, so
$G/N_i\cong\operatorname{im}(q_i\circ f)$ and $N_i$ is finite-index normal.
The induced map $\overline f_i:G/N_i\to P_i$, composed with the completion
coordinate $\pi_{N_i}$, gives a continuous map
$\widehat f_i:\widehat G\to P_i$ satisfying
$\widehat f_i\iota_G=q_if$.

If $i\le j$, compatibility of the target coordinates gives
$q_i=\varphi_{ij}q_j$, hence $N_j\subseteq N_i$. Writing
$\psi_{ij}:G/N_j\to G/N_i$ for the natural quotient map, one has both

$$\varphi_{ij}\overline f_j=\overline f_i\psi_{ij}$$

and

$$\psi_{ij}\pi_{N_j}=\pi_{N_i}.$$

Their combination proves
$\varphi_{ij}\widehat f_j=\widehat f_i$, the missing cone equation. The
inverse-limit universal property therefore produces $h$, and coordinatewise
equality gives $h\iota_G=\theta f$. Coordinatewise continuity makes $h$ and
then $\widehat f=\theta^{-1}h$ continuous.

For uniqueness, the target $P$ is Hausdorff because it is topologically
isomorphic to an inverse limit of finite discrete groups. The equalizer of two
continuous extensions is closed and contains the dense canonical image
$\iota_G[G]$, so it is all of $\widehat G$.

I added direct completion-coordinate and Hausdorff fact records, regenerated
both proof contracts, and wrote a current final-adjudicator critical-risk
review.

## Source verification

Source status: `verified`.

- Brian Osserman's official Ohio State notes,
  https://people.math.osu.edu/cogdell.1/6112-Osserman-www.pdf, provide the exact
  external theorem: Proposition 1.2 gives the compatible-cone universal
  property for inverse limits, Proposition 2.4 gives their topological-group
  structure, Definition 3.2 defines profinite completion, Proposition 3.3 gives
  density of the canonical image, and Proposition 3.5 states the unique
  continuous factorization through profinite completion.
- Hendrik Lenstra's Leiden notes,
  https://websites.math.leidenuniv.nl/algebra/Lenstra-Profinite.pdf, independently
  define the projective limit with its restricted product topology in Section 2,
  supporting the coordinatewise compatibility and continuity formulation used
  by the repaired proof.

## Focused checks

- `precheck`: 1 checked, 0 failing; stored phase numbering is canonical.
- Renderer check: clean YAML, wikilinks, displays, delimiters, and KaTeX.
- Strict batch-1 proof contract: 1/1 checked, 0 errors or warnings.
- Strict merged proof contract: 1/1 checked, 0 errors or warnings.
- Batch-1 citation fidelity: 125 citations over 53 items, no missing quote and
  no widening candidate.
- Required batch-1 risk report: 53 items routed, 0 errors; this theorem is
  critical risk with a complete final-adjudicator review.
- Batch-1 content policy: 73 scoped items, 0 errors or warnings.
- `depcheck --quiet`: exit 0; only standing repository warnings.
- `git diff --check` on the repaired theorem and both synchronized contracts:
  clean.
