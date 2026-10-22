# Independent FIRST review: noncompact exterior collar

Verdict: PASS at the exact stated metric input. No confirmed mathematical defect and no focused repair requested. This is the sole consolidated first-review record, not a review of an accepted collar body or a certification of the exceptional-point/E1 conclusion.

Reviewed the ENTIRE frozen `noncompact-boundary-collar-first-review-inputs/noncompact-boundary-exterior-collar-construction.md`, sections1–6 and the choice/consumer paragraph. Actual SHA256: `e27411d1095c6edcd8d3af90aa6bdfacbaf636947548dafc6052f388c438fd6b`. This matches the root-bound input. No supplier edit was made.

Primary extent: read the full actual Connelly paper, printed180–182, in extracted text AND directly viewed all three rendered pages of `annular-primary/connelly1971-collaring.pdf`. In particular the precise local-collar definition and the affine push were read on180–181, and the complete noncompact Remark1 was viewed on181. Remark1 only announces an ordering with locally finite motion; the scheduling argument in the NEW proof was checked independently rather than credited to that announcement.

## Findings and exact checks

1. **Compact shell selection and CC.** Because B is closed in X and X is closed in displayed R5, every closed radial shell of B is compact. The local collar can be shrunk to compact base and compact image inside its shell buffer. Selecting one finite list of complete collar/cutoff tuples per shell uses CC. The metric cutoff has positive denominator from the disjoint closed sets and has support in closure(W) contained in U. No uncountable chart selection or sequence of dependent repairs is hidden here.

2. **Ambient support local finiteness.** rho_plus is continuous on the adjunction space and its restrictions agree at the seam. Every point has a rho_plus-bounded neighborhood, hence meets only finitely many shell indices and finitely many compact K_i. This is local finiteness on ALL X_plus, including its negative collar, not just on B. Compactness of K_i then makes its intersection-graph degree finite. The half-charts and the closed metric seam justify the Hausdorff adjunction used for compactness.

3. **Literal local homeomorphism and inverse.** For the current graph region G_f, H_i^{-1}(K_i intersect G_f) is exactly the varying interval f(x)≤t≤1. The affine formula maps it increasingly and onto f_new(x)≤t≤1; its inverse is

       t=f(x)+(1-f(x))*(s-f_new(x))/(1-f_new(x)).

   Both denominators are at least1. At the ceiling, lateral cutoff boundary and ambient lower edge, the formulas agree with the identity as claimed. Since the cutoff support has a buffer inside U, the relative pastings across the chart boundary are continuous. The map AND its inverse stay in the same fixed K_i. Finite block compositions therefore preserve their fixed K-union as a map between the corresponding graph regions. Merely knowing that a move is identity outside K_i would not have sufficed; the proof supplies the required onto-support property.

4. **Already collared region.** If f(b)=−1, the next affine map is the identity on the ENTIRE external fibre (b,t), −1≤t≤0, not only its bottom point. Hence a collar fibre already completed at b has the same inverse image under every later move. This proves the relevant persistence directly. No initial positive-thickness collar is prescribed or claimed as an exported relative condition.

5. **Finite-layer three-batch scheduling.** Every rooted component layer is finite because the intersection graph is locally finite. Layers with the same residue modulo3 have disjoint compact support unions: an intersection would give an edge whose endpoints differ in distance by at most1. Distinct components have disjoint supports as well. The block-family local finiteness follows from the original K_i local finiteness. Thus each color map is a locally finite closed-support pasting of finite maps and identity, with a literal pasted inverse. Recomputing each finite layer using the SAME current f within a color is valid since its supports are disjoint. Only three global maps are composed; no forward or inverse infinite trajectory or unproved convergence is used. Later colors cannot invalidate earlier support constructions.

6. **Surjectivity and the final collar.** The V_i cover B and each lambda_i is1 on V_i, so every point reaches f=−1 at some batch and stays there. Thus the composed map is ONTO X_plus, with g(b)=(b,−1). The formula c(b,s)=g^{-1}(b,−1+s) is an embedding, has c(b,0)=b, and meets B only at s=0. The external set B×[−1,0) is open in X_plus, so its inverse image is open in X. This checks the actual collar image, rather than only an injective parametrization.

7. **Variable thickness and the puncture.** At a given x only finitely many selected a_j have positive weight. Each is valid at x, and its validity is downward closed in t; therefore their weighted average eta(x), being no larger than their maximum, is valid as claimed. Eta is continuous and positive. The rescaled image with 0≤t<eta(x) is open inside the old open collar, so the rescaled embedding is itself a collar. The inverse t/eta(x) is continuous locally even though eta may tend to zero at the puncture. For epsilon(x)=d(x,p), d(c_new(x,s),p)<2d(x,p) is uniform in s; this is cusp control on the punctured domain, not an embedding or ambient chart at p.

## Scope retained

The proof supplies a collar of the entire possibly noncompact B under its actual one-sided local-collar and closed-metric-exterior assumptions, with optional continuous positive variable thickness. It does not preserve an arbitrary preassigned subcollar, assert that the omitted point has a half-chart, extend c over that point, prove the exceptional-point chain, or complete E1. No adopted compact metric collar, PL, union, cap, or other provider proof was read or checked.

There is no mathematical repair to request. A second review cycle is unnecessary for this unchanged exact input.
