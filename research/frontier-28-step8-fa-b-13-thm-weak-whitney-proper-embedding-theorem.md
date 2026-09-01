# Final-adjudicator evidence — `thm-weak-whitney-proper-embedding-theorem`

Disposition: `repaired`.

## Material reviewed

I independently read the theorem and every proof step; the initial Euclidean
embedding, generic projection, properness-preserving projection, and proper-
injective-immersion dependencies; the full Whitney A/B page context; the
batch-10 manifest, source coverage, notes, proof and boundary contracts, and
critical-risk review; the Step-6 reader/refuter history; both frozen judge
rejections and exact Alpha adjudications; the defect-ledger rows; and Alpha's
two repairs.

## Mathematical basis

Alpha correctly repaired the two frozen defects by restoring the embedding
hypothesis after every projection, preserving the bounded-plus-proper model in
the noncompact case, and carrying the compact induction all the way to the
target dimension.

Independent review found a further concrete error in the directly required
properness lemma and in the theorem's use of it. They required the projection
direction to have a nonzero last-coordinate component and then inferred
$P_u(e)\ne0$. This implication is false: for the vertical directions
$u=\pm e$, the last component is nonzero but $P_u(e)=0$, so projection deletes
the proper coordinate. For a noncompact source, a bounded remaining map need
not be proper.

The correct condition is that $u$ not be parallel to the proper-coordinate
axis, equivalently $P_u(e)\ne0$. I repaired the dependency and theorem around
that condition.

For $F=(G,\rho)$ with $G$ bounded and $\rho$ proper, set
$e'=P_u(e)$. When $e'\ne0$, decompose
$u^\perp=\mathbb Re'\oplus(e')^\perp$. The component of
$P_uF=P_uG+\rho e'$ perpendicular to $e'$ is bounded. The scalar component is

$$\rho'=\|e'\|\rho+b,$$

with $b$ bounded. This is proper: membership of $\rho'(p)$ in a compact
interval bounds $\rho(p)$, and the relevant inverse image is closed inside a
compact inverse image under $\rho$. A compact target set for $P_uF$ projects to
a compact interval for $\rho'$, so its preimage is compact. Thus the corrected
projection is proper.

At a projection stage with ambient dimension $d>2n+1$, the generic good
directions are dense. In the noncompact case
$S^{d-1}\setminus\{e,-e\}$ is a nonempty open set, so it meets that dense set;
choosing there preserves injectivity, immersion, and properness. The proper
injective immersion is again an embedding, and the displayed decomposition
gives a new bounded-plus-proper model with proper-axis unit
$e'/\|e'\|$. This licenses the next iteration. For compact $M$, every
intermediate map is proper automatically. After exactly $d-(2n+1)$ projections
the target dimension is $2n+1$. If the starting dimension is already smaller,
a linear isometric inclusion preserves properness and embedding.

The proof also explicitly covers $n=0$: either the initial dimension is at most
one, or $d>1$ makes the complement of the two axis directions nonempty.

I regenerated the corrected properness-lemma and theorem contracts in both
copies, synchronized the theorem's citation to the changed lemma statement,
corrected the zero/axis/choice boundary records, and wrote a current
final-adjudicator critical-risk review.

## Source verification

Source status: `verified`.

- John M. Lee's standard monograph proof of Lemma 6.14 and Theorem 6.15 was
  checked in the full text linked by the item. The authoritative book identity
  and second-edition materials are maintained on the author's University of
  Washington page,
  https://sites.math.washington.edu/~lee/Books/ISM/. Lemma 6.14 chooses the
  projection vector specifically *outside* the one-dimensional tube axis, so
  the two tube axes are not parallel; it then proves their intersection is
  bounded and iterates to a proper embedding in $\mathbb R^{2n+1}$. This is
  exactly the corrected condition, not “nonzero last coordinate.”
- A university-hosted full version of Lee's manifold text,
  https://www.math.colostate.edu/~renzo/teaching/DiffGeo2011/Introduction%20to%20Smooth%20Manifolds%20-%20J.%20Lee.pdf,
  independently supplies the weak Whitney theorem and its properness argument.
- Whitney's original paper is available from Math-Net,
  https://www.mathnet.ru/php/getFT.phtml?jrnid=sm&option_lang=eng&paperid=5498&what=fullt,
  and is the primary historical source for the weak embedding theorem. The
  modern proper projection formulation used here is the explicit monograph
  treatment above.

## Focused checks

- `precheck` on the repaired dependency and theorem: 2 checked, 0 failing.
- Renderer check on both items: clean YAML, wikilinks, displays, delimiters,
  and KaTeX.
- Strict batch-10 proof contract on both items: 2/2 checked, 0 errors or
  warnings.
- Strict merged proof contract on both items: 2/2 checked, 0 errors or
  warnings.
- Batch-10 citation fidelity: 82 citations over 48 items, no missing quote and
  no widening candidate.
- Required batch-10 risk report: 48 items routed, 0 errors; the theorem is
  critical risk with a complete final-adjudicator review, and the dependency is
  ordinary risk.
- Batch-10 content policy: 54 scoped items, 0 errors or warnings.
- `depcheck --quiet`: exit 0; only standing repository warnings.
- `git diff --check` on both repaired items and both synchronized contracts:
  clean.
