# Final-adjudicator evidence — `thm-euclidean-tubular-neighbourhood-theorem`

Disposition: `repaired`.

## Material reviewed

I independently read the theorem and every proof step; the normal-addition,
local-diffeomorphism, variable-injectivity, and partition-of-unity dependencies;
the tubular-neighbourhood definition and immediate retraction consumers; the
complete Whitney A/B page context; the batch-10 manifest, source coverage,
notes, proof contract, boundary worksheet, and high-risk review; the Step-6
reader/refuter history; both frozen judge rejections and exact Alpha
adjudications; the defect-ledger rows; and Alpha's two repairs.

## Mathematical basis

Alpha's final mathematical idea is correct. One needs two independent controls:
a radius that keeps every normal vector inside the open locus where $E$ is a
local diffeomorphism, and a radius on which $E$ is globally injective. A harmonic
combination of positive smooth radii is smaller than both and therefore supplies
the required tube.

The current one-step presentation left two obligations insufficiently explicit.
First, the library's embedded-submanifold definition permits $S=\varnothing$,
but neither the proof nor its boundary worksheet handled that case. Second, the
claim that the harmonic radius stays in the local-diffeomorphism region relies
on selecting the largest radius among the finitely many active partition
indices; merely writing the maximum inequality obscured why its associated
base neighbourhood contains the point.

I repaired and expanded the proof.

- For $S=\varnothing$, the unique positive-valued function on the empty set
  yields the empty normal bundle, which is diffeomorphic to the open empty
  neighbourhood.
- For nonempty $S$, the open local-diffeomorphism locus contains the zero
  section. Local bundle trivializations can therefore be shrunk so that a
  constant-radius fibre ball over each base set lies in that locus.
- A locally finite subordinate partition gives the smooth positive function
  $r=(\sum_i\phi_i/r_i)^{-1}$. At a point $p$, only finitely many indices are
  active. If $i_0$ has the largest active $r_i$, then
  $p\in\operatorname{supp}\phi_{i_0}\subseteq U_{i_0}$ and
  $r(p)\le r_{i_0}$, so the entire $r(p)$-fibre ball lies in the selected local
  region.
- The harmonic combination
  $\delta=\delta_0r/(\delta_0+r)$ is smooth, positive, and strictly smaller
  than both the injectivity radius $\delta_0$ and the local radius $r$.
- The proof now checks that $\Omega_\delta$ is open, lies inside the
  local-diffeomorphism locus, and lies inside the injectivity domain. Thus $E$
  is an injective local diffeomorphism on it. Its image is open, and its local
  smooth inverses agree to give the smooth inverse globally.

I regenerated both proof-contract entries, changed the empty, zero-section,
and nonempty-choice boundary rows to concrete checked records, and wrote a
current final-adjudicator high-risk review.

## Source verification

Source status: `verified`.

Marco Gualtieri's official University of Toronto notes,
https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes-11.pdf,
support the specialized geometry. Proposition 3.52 constructs the Euclidean
normal bundle as a smooth manifold; Definition 3.53 gives the variable-radius
normal-addition model; and Theorem 3.54 (PDF pp. 43-44) computes the derivative
of normal addition along the zero section, obtains local diffeomorphism
neighbourhoods, constructs a continuous local radius, proves global injectivity
on a half-radius tube, and takes the open image as the tubular neighbourhood.
The earlier partition-of-unity section in the same notes supports the standard
smooth refinement used by the library to strengthen the radius from continuous
to smooth.

## Focused checks

- `precheck`: 1 checked, 0 failing; stored phase numbering is canonical.
- Renderer check: clean YAML, wikilinks, displays, delimiters, and KaTeX.
- Strict batch-10 proof contract: 1/1 checked, 0 errors or warnings.
- Strict merged proof contract: 1/1 checked, 0 errors or warnings.
- Batch-10 citation fidelity: 82 citations over 48 items, no missing quote and
  no widening candidate.
- Required batch-10 risk report: 48 items routed, 0 errors; this theorem is high
  risk with a complete final-adjudicator review.
- Batch-10 content policy: 54 scoped items, 0 errors or warnings.
- `depcheck --quiet`: exit 0; only standing repository warnings.
- `git diff --check` on the repaired theorem and both synchronized contracts:
  clean.
