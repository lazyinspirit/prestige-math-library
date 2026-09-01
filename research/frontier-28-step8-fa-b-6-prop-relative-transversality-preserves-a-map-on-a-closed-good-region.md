# Final-adjudicator evidence — `prop-relative-transversality-preserves-a-map-on-a-closed-good-region`

Disposition: `repaired`.

## Material reviewed

I independently read the statement and every proof step; all four declared
dependencies; the absolute transversality homotopy theorem; the full Whitney
A/B page context; the batch-10 manifest, source coverage, notes, proof contract,
boundary worksheet, and critical-risk review; the Step-6 reader/refuter history;
both frozen judge rejections and exact Alpha adjudications; the defect-ledger
rows; and Alpha's first and second repairs.

## Mathematical basis

Alpha's two substantive repairs are correct. Giving the cutoff an exact zero set
$\overline W$ closes the original boundary gap: outside that closed set the
parameter scaling is positive, while on it the original map is already
transverse. Adding the null-set dense-complement theorem also closes the second
rejection: parametric transversality alone gives nullity, and positive parameter
dimension is what turns that into a guaranteed nonempty set of good parameters.

Two local issues remained. Replacing a zero-dimensional ball by
$B\times(-1,1)$ while continuing to call the domain $B$ made the construction
and later scalar multiplication imprecise. The boundary worksheet also claimed
that the generic-parameter choice occurred in step 1.1, although it is the
load-bearing choice at the end of the proof.

I repaired the proof and contract as follows.

- If the original parameter ball has dimension zero, submersivity of each map
  from that point forces $N$ to be zero-dimensional. Every map into such an $N$
  is automatically transverse, so the constant map and constant homotopy close
  this branch directly.
- Otherwise the proof restricts to a ball centred at zero. This ball is convex
  and positive-dimensional, so both the cutoff-scaled parameter and the later
  straight parameter segment remain in the domain.
- Off $\overline W$, differentiating in the parameter direction gives the
  surjective derivative of $\mathcal F_p$ composed with multiplication by the
  positive scalar $\lambda(p)^2$; hence the modified evaluation map is a
  submersion there.
- On $\overline W$, $\lambda=0$ and $d(\lambda^2)=0$, so the full chain-rule
  calculation is
  $d\mathcal G_{(p,a)}(v,w)=df_p(v)$. Since this region lies inside the original
  transverse neighbourhood, $\mathcal G$ is transverse there as well.
- The bad-parameter set is null by parametric transversality. Its complement is
  dense, hence nonempty, in the positive-dimensional ball; only then is the
  parameter chosen. The straight segment from zero to that parameter yields the
  homotopy, and the exact cutoff zero set makes every slice equal to $f$ on $W$.

I regenerated both proof-contract entries, corrected the zero-dimensional,
degenerate, homotopy-endpoint, and nonempty-choice boundary evidence, and wrote
a current final-adjudicator critical-risk review.

## Source verification

Source status: `verified`.

Marco Gualtieri's official University of Toronto notes,
https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes-10.pdf,
support every specialized input used here:

- Theorem 3.26 (PDF p. 35) states parametric transversality and derives that bad
  parameters form a measure-zero set by Sard's theorem.
- Corollary 3.27 (PDF pp. 35-36) constructs a finite-dimensional ball family
  whose pointwise parameter maps, and hence evaluation map, are submersions.
- Theorem 3.29 (PDF p. 37) uses a cutoff squared specifically so its derivative
  vanishes on the protected zero set, computes the resulting differential as
  the original differential there, and obtains a transverse slice that remains
  fixed near the protected region. The current proposition is the same local
  argument for an arbitrary closed good region rather than only a boundary.

## Focused checks

- `precheck`: 1 checked, 0 failing; stored phase numbering is canonical.
- Renderer check: clean YAML, wikilinks, displays, delimiters, and KaTeX.
- Strict batch-10 proof contract: 1/1 checked, 0 errors or warnings.
- Strict merged proof contract: 1/1 checked, 0 errors or warnings.
- Batch-10 citation fidelity: 82 citations over 48 items, no missing quote and
  no widening candidate.
- Required batch-10 risk report: 48 items routed, 0 errors; this item is
  critical risk with a complete final-adjudicator review.
- Batch-10 content policy: 54 scoped items, 0 errors or warnings.
- `depcheck --quiet`: exit 0; only standing repository warnings.
- `git diff --check` on the repaired item and both synchronized contracts:
  clean.
