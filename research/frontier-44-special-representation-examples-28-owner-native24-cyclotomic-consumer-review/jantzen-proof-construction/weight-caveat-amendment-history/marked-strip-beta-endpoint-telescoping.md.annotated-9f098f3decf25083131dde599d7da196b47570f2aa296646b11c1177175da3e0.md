# Marked strip factors telescoped exactly to beta endpoints

**Binding weight scope.** The actual Schur algebra C has only multipartition summands/weights. Polynomial and Γ series that allow arbitrary composition monomials are AUXILIARY combinatorial tableau series. Their coefficients at actual multipartition nu equal the required Kostka multiplicities and actual Schur weight determinants; no Schur modules, summands, or idempotents for other compositions are asserted.

Same research-only J continuation. This proves a new concrete simplification of the norm side of the local current commutator. It does not prove that commutator or R.

Let q_(a,i)=lambda_i^(a)+N-i, p_(a,i)=rho_i^(a)+N-i, b_i=N-i. A permitted strip transition has q_(a,i)>=p_(a,i)>q_(a,i+1) in each physical component a receiving the current row label. New nodes in physical row i have exponent indices u in [p_i,q_i), and old nodes have indices v in [b_i,p_i): the residue at index u is U_a z^(u-N+1). Because z^(-N+1) is a unit, every residue difference can be evaluated with U_a z^u instead. All auxiliary ranks keep the fixed final-n deformation parameters.

## 1. Samecomponent formula

Write phi(k)=V(z^k-1), k>=1, and S(m)=sum_(k=1)^m phi(k), S(0)=0. The samecomponent part of the marked-strip factor has valuation

$$\mathcal F_a(q,p)=\sum_{i=1}^N\big(S(q_i)-S(p_i)-S(q_i-p_i)\big)+\sum_{i<j}\ \sum_{u=p_i}^{q_i-1}\big(\phi(u-q_j)-\phi(u-p_j+1)\big).$$

Only nonempty u intervals are used. The interlacing inequalities ensure every phi argument in the last sum is positive: u>=p_i>q_j, and p_i>q_j>=p_j. Thus no artificial phi(0) is evaluated.

**Full telescoping proof.** A same-row old/new pair has difference d=v-u>=1 (v new, u old), contributing phi(d+1)-phi(d). Summing first over the new interval and then over the old interval gives S(q_i-b_i)-S(q_i-p_i)-S(p_i-b_i).

For i<j, the new/new C factor contributes phi(u-v-1)-phi(u-v), with u in [p_i,q_i),v in [p_j,q_j). The new-upper/old-lower R contributes phi(u-v-1)+phi(u-v+1)-2phi(u-v), v in [b_j,p_j). Summing over v gives, respectively, phi(u-q_j)-phi(u-p_j) and phi(u-b_j+1)-phi(u-b_j)-phi(u-p_j+1)+phi(u-p_j). Their sum is phi(u-q_j)-phi(u-p_j+1)+phi(u-b_j+1)-phi(u-b_j). Summing the final difference over u yields phi(q_i-b_j)-phi(p_i-b_j).

For each fixed i, sum this baseline term over j>i. Because b_j=N-j, sum_(j>i)phi(q_i-b_j)=S(q_i)-S(q_i-b_i), and likewise with p_i. Add the same-row expression from the first paragraph. The S(q_i-b_i),S(p_i-b_i) terms cancel exactly, leaving the displayed formula. Every equality is a finite sum telescope of actual norm-pair factors.

The vacuum rows with q_j=p_j=b_j do not require an infinite limit; N is finite and their terms participate in this exact cancellation. The expression therefore proves independence of artificial row padding, and can be compared directly with the samecomponent shifted-beta determinant commutator.

## 2. Crosscomponent formula without artificial zero factors

Fix two physical components a<b both allowed by the current TYPE component c (so b<=c). Put g_(ab)(u,v)=V(U_a z^u-U_b z^v). Let L_b=length(lambda^(b)), R_b=length(rho^(b)). The contribution of this component pair to the marked-strip norm valuation is exactly

$$\mathcal F_{ab}(q,p)=\sum_{i:q_{a,i}>p_{a,i}}\left[\sum_{u=p_{a,i}}^{q_{a,i}-1}\left(g_{ab}(u,N-1)+\sum_{j=1}^{L_b}\big(g_{ab}(u,q_{b,j})-g_{ab}(u,b_j)\big)\right)+\sum_{j=1}^{R_b}\ \sum_{v=b_j}^{p_{b,j}-1}\big(g_{ab}(q_{a,i},v)-g_{ab}(p_{a,i},v)\big)\right].$$

Every endpoint in this displayed formula is tied to an actual nonzero row or an actual new/old node. This restriction matters: separating a padded-vacuum sum into arbitrary individual valuations could introduce identically zero Laurent differences under the LM specialization. Here all retained differences have finite valuation. Indeed u corresponds to a node in component a; q_(b,j) corresponds to the next-column position of an actual lambda^(b) row, b_j to that row's first-column position, and v to an actual old node. Their content differences, including q_(a,i),p_(a,i) against an old component-b node, are at most n-1 in absolute value. Hence n(a-b)+content difference cannot be zero. Constant residues may agree, but the earlier Laurent-binomial leaf then gives a finite positive valuation.

**Full telescoping proof.** For fixed upper/new index u, new/new C terms in component b contribute sum_(v=p_bj)^(q_bj-1)[g(u,v+1)-g(u,v)]=g(u,q_bj)-g(u,p_bj). New-upper/old-lower R terms contribute sum_(v=b_j)^(p_bj-1)[g(u,v+1)+g(u+1,v)-2g(u,v)]=g(u,p_bj)-g(u,b_j)+sum_(v=b_j)^(p_bj-1)[g(u+1,v)-g(u,v)]. Adding gives g(u,q_bj)-g(u,b_j)+the last sum. Sum this over actual component-b rows; rows beyond L_b have q_bj=p_bj=b_j and contribute0. Add the boundary factor g(u,N-1). Finally telescope the last u-difference over u in [p_ai,q_ai), giving the final endpoint difference in the displayed formula. This proves the identity without evaluating a padded zero factor.

Physical component pairs involving b>c contribute nothing along the reachable prefix sector, because those components contain no old or new boxes and the boundary product stops at c. Samecomponent plus all a<b<=c formulas give the complete V(F_(lambda rho)^(c)) needed in the local commutator.

## Exact remaining comparison

The norm side is now expressed solely by finite beta endpoint sums. The operator side is the difference of two finite shifted-beta exterior minors with valuation coefficients, already written in `beta-current-and-horizontal-strip-commutator-reduction.md`. A proof that those minors reduce to the endpoint expressions above would finish the local commutator and then telescope to R. That determinant-minor cancellation has not been completed. No acceptance or general identity is inferred from these norm-side telescopes.
