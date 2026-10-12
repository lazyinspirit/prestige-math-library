# SAMEcomponent rank-one defect: missing interval BELOW duplicated beta rows

Same research-only J continuation. This supplies the general rank-N−1 OFF-strip cancellation for the “missing-below” orientation. The opposite “missing-above” rank-one orientation is not proved here; the sibling owns it. Rank-N−2 and smaller rank cases have been constructed by that sibling separately. No complete J acceptance is inferred.

Use the correct weighted-h original-row and outward-column formulas from `samecomponent-on-strip-actual-cancellation.md`. Put phi(k)=V(z^k-1), k>0, and take N>n. A rank-N−1 step matrix has exactly one missing p-threshold interval and two adjacent duplicate q rows, as proved in the crosscomponent off-support packet.

Let the duplicated q endpoints be Q>Q', in rows s,s+1. Let the missing interval be [P,P')=[p_r,p_(r-1)), with r>s and Q'>=P'. Thus the missing interval lies BELOW the duplicated q interval. The cofactor null vectors and common sign epsilon are

`u=e_s-e_(s+1)`, `v=e_r-e_(r-1)`, `adj(H)=epsilon·v u^T`.

A one-row minor is epsilon u_l·1_(P<=newq<P'), and a one-column minor is epsilon v_l·1_(Q'<newp<=Q). Normal q rows strictly below the missing interval have indices j>=r+1 and occupy their own p interval [p_j,p_(j-1)). Put

$$K_j=p_j-q_{j+1}-1\quad(j\ge r),\qquad K_N=0.$$

Every K_j>=0 in this tail, because the tail interlaces normally after the one missing threshold. The last zero beta row makes K_N=0.

## 1. Exhaustive two-row and two-column repair types

A nonzero two-row determinant must touch a duplicate source row: otherwise the two unchanged duplicate rows remain equal. One new row value must fill the missing interval, and the other must fill the original threshold of its unique source row; these two assignments have opposite determinant signs. Both duplicate source rows together cannot contribute to the inward root range: filling the lower missing interval from one source would leave a foot position below the other duplicated source, violating 0<h<source-gap. A unique source above or between the duplicate interval and missing interval likewise cannot contribute. If its down-shifted value fills the missing interval, it is below the other source q, again violating the inward foot-gap condition. If its up-shifted value fills the missing interval, that value cannot be below its original source. Thus the only possible unique source is a normal row j>=r+1 below the missing interval.

For such j, the source duplicated row is earlier in beta order. There are EXACTLY two determinant assignments: (direct) the duplicate lowers to the missing interval and the unique row raises within its own old interval; (exchange) the duplicate lowers into the unique row's old interval and the unique row raises to the missing interval. The direct minor sign is epsilon u_l and the exchange sign is its negative. This follows by expanding the two replacement rows on the missing step vector and the old unique threshold step; their 2×2 determinant is the direct product minus the exchange product, with the same cofactor epsilon as the one-row repair.

For outward two-column sources, a nonzero determinant must touch one of the duplicate column endpoints P',P. The raised endpoint column can fill the missing q-gap (Q',Q], while a unique lower source column j>=r+1 lowers within its old q interval; its sign is epsilon v_l. The only other possible source pair is the two endpoints themselves, with the upper original endpoint P' raised to (Q',Q] and the lower endpoint P lowered within the original duplicate-column threshold. Its sign is -epsilon (the raised endpoint has v_(r-1)=-1). Normal source columns above or between the affected endpoints cannot lower into an upper original interval from an endpoint below it; all other assignment types therefore vanish. These statements include both directions of target assignment, so no crossed repair is discarded.

## 2. Direct-row terms match first-potential column terms except one boundary

For normal row j>=r+1, the direct row repair at missing position x in [P,P') has source +Q or -Q'. Its common normal-row condition is h<p_(j-1)-q_j. As in the crosscomponent a-only calculation, its total is

$$R_j=-\varepsilon\sum_{d\in[P-q_j,P'-q_j)\cap(Q'-p_{j-1},Q-p_{j-1}]}\phi(d).$$

A unique outward column source j>=r+1 has endpoint +P or -P', raised to a position y in (Q',Q], with h<=K_j. Its inverse-source coefficient is phi(endpoint-p_j+h)-phi(h). Write its first-potential sum as C_j^first and its second-potential sum as C_j^second, so its actual contribution to ΓJ is C_j^first-C_j^second. The same interval translation from the crosscomponent proof gives

`R_(j+1)=C_j^first` for j>=r+1.

Indeed both are -epsilon times the formal sum over [P-q_(j+1),P'-q_(j+1)) intersect (Q'-p_j,Q-p_j]. Hence all direct rows cancel those first column potentials except the initial direct row R_(r+1). The final inverse column is0 because p_N=0.

The second-potential column sum is explicit:

$$C_j^{\mathrm{second}}=\varepsilon\sum_{h=1}^{K_j}\phi(h)\big(1_{Q'<P+h\le Q}-1_{Q'<P'+h\le Q}\big).$$

The sign of this sum is not assumed positive; it is the actual endpoint cofactor difference.

## 3. Exchange-row repairs telescope all remaining column second potentials

In an exchange-row repair at source pair (duplicate A in {Q,Q'}, unique B=q_j), put k=A-B-h>0, the original inward foot gap. The two new positions are B+k in the unique interval and A-k in the missing interval. The own-interval condition is exactly 1<=k<=K_(j-1). The signed sum is

$$X_j=-\varepsilon\sum_{k=1}^{K_{j-1}}\phi(k)\big(1_{P\le Q-k<P'}-1_{P\le Q'-k<P'}\big).$$

The elementary endpoint reciprocity from the crosscomponent rank-one proof gives

`1_(P<=Q-k<P')-1_(P<=Q'-k<P') = 1_(Q'<P+k<=Q)-1_(Q'<P'+k<=Q)`.

Therefore

`X_j=-C_(j-1)^second`.

Sum over j>=r+1. The exchange rows cancel the plus C_j^second terms arising when ΓJ is subtracted, for every j>=r+1, leaving only -C_r^second. This is the precise repair type that a “direct-only” argument would miss.

## 4. The two endpoint columns cancel the final boundary exactly

Put

$$A=Q'-P'\ge0,\quad B=P'-P>0,\quad L=Q-Q'>0,\quad I_0=(A,A+L],\quad I_1=I_0+B,\quad K=K_r.$$

The one remaining direct row has

$$R_{r+1}=-\varepsilon\sum_{d\in I_1\cap(K,K+B]}\phi(d).$$

This is the preceding R_j formula with j=r+1 and P-q_(r+1)=K+1. Also

$$C_r^{\mathrm{second}}=\varepsilon\sum_{h=1}^{K}\phi(h)\big(1_{I_1}(h)-1_{I_0}(h)\big).$$

The outward source made from the two endpoint columns raises P' and lowers P. Its restoring conditions are h in I_0 and h<=K; its source beta gap is B. Its full two-hook coefficient, including the negative endpoint cofactor, is

$$C^{\mathrm{end}}=-\varepsilon\sum_{\substack{h\in I_0\\h\le K}}\big(\phi(B+h)-\phi(h)\big).$$

After all previous cancellations, the commutator is exactly `R_(r+1)-C_r^second-C^end`. Substitute the three sums. The phi(h) terms on I_0 cancel, and the remaining expression is

$$-\varepsilon\sum_{d\in I_1\cap[1,K+B]}\phi(d)+\varepsilon\sum_{\substack{h\in I_0\\1\le h\le K}}\phi(B+h)=0.$$

The equality is the translation d=h+B. Since A>=0, I_1 lies entirely in [B+1,infinity), so the translated lower endpoint restrictions match exactly. Thus every formal phi coefficient vanishes. All its arguments are positive, so specializing to the exact arbitrary-characteristic LM valuation is immediate.

## Result and remaining boundary

This proves the SAMEcomponent rank-N−1 OFF-strip commutator vanishes whenever the missing interval lies BELOW the duplicated q interval, including both target assignments, all cofactor signs, the outward two-hook inverse, and the final endpoint source. The opposite rank-one missing-ABOVE orientation is still required. The sibling has separately constructed rank-N−2 and≤N−3 cancellation; root must review/bind its proof. No claim of complete R or J is made until the final rank-one orientation is supplied.
