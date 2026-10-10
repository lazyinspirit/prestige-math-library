# SR11 Galilean lane: proposal-only review

Scope: exactly `def-sr-galilean-limiting-charts`, `lem-sr-uniform-galilean-limit-of-boost-charts`, and `ex-sr-uniform-galilean-chart-bound-worked`. Live batch writers were not edited. Full before/after metadata objects, baseline manifest/item SHA256 values, exact numeric evaluations, supplier hashes and consumer/coverage mappings are in the sibling JSON. Compare those baseline hashes with final native writer receipts before integrating; a valid writer self-repair takes precedence over stale proposal text. No native readiness, source reading, audit, sync, gate or acceptance is claimed.

The exact current metadata, SR11 design reservation, full special-relativity source design, M08 quantitative expansion scope and relevant pinned mathematical supplier statements were inspected. Source references and provenance are retained verbatim. The sources motivate the low-speed/auxiliary-coordinate comparison; the precise bounded-region constants and threshold proof are supplied locally, with no claim that the references state those exact estimates.

Confirmed findings:

- The spatial proof writes `|x_parallel-tv|<=|x|+t|v|`, which fails for negative t. Homogeneity and the Euclidean vector triangle inequality give `|x_parallel-tv|<=|x|+|t||v|`. The imported scalar absolute-value triangle inequality alone does not supply the vector norm step; add the exact earlier inner-product-norm triangle supplier.
- The existing qualitative choice of z1 is unspecified, its threshold is `|v|/z1`, and the worked example nevertheless claims C=30 suffices when z1=1/900. That threshold would require C>=900 for |v|=1. Use the sharper sufficient condition `C>=|v|/sqrt(z1)` and verify z1 explicitly.
- The `v=0` identity family needs a separate positive threshold; max expressions containing |v| do not supply one. For nonzero v, z1<1 ensures the new threshold strictly exceeds |v| and remains inside the admissible family.
- The mathematical definition currently depends on the physical SI convention item. Replace its physical-unit hypothesis by fixed mathematical c>0 and x0=ct, removing the physical dependency while retaining the C=c boost identification and the auxiliary-family/no-physical-limit scope. Correct the substitution in its proof to beta=v/c and beta x0=(v/c)(ct)=vt.
- The example's arithmetic values are correct at their displayed precision, but its ratio calculation should use exact deviations before rounding. Its final proof contains an ellipsis and no verification that z1 is sufficiently small.

For fixed z0 in (0,1), put K0=(3/8)(1-z0)^(-5/2), A0=1/2+K0 z0 and Gamma0=(1-z0)^(-1/2). The Taylor supplier's first remainder bound gives gamma_C-1<=A0 |v|^2/C^2 whenever C>=|v|/sqrt(z0). Rational-power monotonicity gives gamma_C<=Gamma0. Consequently the exact bounded-region constants are

`|t'-t| <= [A0 |v|^2 T + Gamma0 |v| R]/C^2`,

`|x'-(x-tv)| <= A0 |v|^2 (R+|v|T)/C^2`.

For epsilon>0 and nonzero v, set H=T+R+|v|T and choose any positive z1 no larger than min{z0,1/(2A0),epsilon/(2A0 H)}. This gives gamma_C<=3/2 and (gamma_C-1)H<=epsilon/2 whenever C>=|v|/sqrt(z1). Taking additionally C>=sqrt(3|v|R/epsilon) controls the remaining time term by epsilon/2. The finite minimum gives an explicit choice; no qualitative convergence claim supplies the missing choice. The v=0 case has zero errors for all C>0 and admits any positive C_epsilon. The whole-domain failure witnesses remain exactly those of the existing lemma.

For v=e1,T=1,R=2 and the point (1,2e1), the exact expressions are gamma_C=C/sqrt(C^2-1), t'=(C^2-2)/(C sqrt(C^2-1)), x'=gamma_C e1. The positive errors are d_t=1-t' and d_x=gamma_C-1; uniform bound values are B_t=gamma_C-1+2/(C sqrt(C^2-1)) and B_x=3(gamma_C-1). A 65-digit Decimal radical calculation yields exact-expression ratios d_t(10)/d_t(100) approximately 100.4154227043 and d_x(10)/d_x(100) approximately 100.7487483984, respectively 100.4 and 100.7 to one decimal place. This is a local numerical check; all exact formulas and inequalities are supplied in the metadata proof route.

The completed epsilon=0.01 instance uses z0=1/4, K0=4sqrt(3)/9 and A0=1/2+sqrt(3)/9<3/4. With H=4 and z1 exactly 1/900, A0 z1<1/1200<1/2 and A0 H z1<1/300<1/200=epsilon/2; also z1<z0. Thus C_epsilon=max{30,sqrt(600)}=30 is genuinely sufficient. At C=30 the point errors are approximately 0.0016674389 and 0.0005560189; the whole-region bounds are approximately 0.0027794768 and 0.0016680568. All four lie below 0.01.

Consumer order is definition -> uniform-limit lemma -> worked B example. The other direct lemma consumer is `rem-sr-newtonian-bridge-limits-and-failures`, whose clause (iii) uses only bounded-region uniformity, whole-domain failure and no variation of physical c; those interfaces are preserved. That remark's separate momentum/norm work belongs to the parent. The example is a leaf. Three existing canonical coverage rows have exact proposed support-text updates in the JSON; source headings and fetch evidence remain unchanged.
