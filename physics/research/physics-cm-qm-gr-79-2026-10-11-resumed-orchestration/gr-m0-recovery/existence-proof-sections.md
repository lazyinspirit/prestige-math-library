# Exact existence proof replacement sections (conditional on supplier repairs)

Keep the current Statement. Add compact coefficient time slab [-tau,tau] contained in I to Facts, and the direct dependency on Fourier norm equivalence if required by carrier formatting. Replace L1 by the corrected ODE result for any initial z_N in X_N taking values in O. L2 must give |e_N'| <= C_1(1+e_N); L3 must be uniform in N. L6 must include embedding H^{s-1} into C^0 and the uniform tail estimate in H^{s-1}.

## Proof

**Proof technique:** constructive.

1.1 (Uniformly admissible projected data.) Choose delta>0 with the closed 3delta-neighborhood of K contained in int K'; set Q to the closed 2delta-neighborhood of K, a compact subset of int K'. The tail estimate and H^{s-1} embedding give norm(P_Nu_0-u_0)_{C^0} <= C_emb C_s(1+N^2)^{-1/2}R. Choose N_0 so this is <delta for every N>=N_0 and every datum in the stated class. Thus P_Nu_0 takes values in the closed delta-neighborhood of K, hence in Q and O; contraction gives norm P_Nu_0 <= R. No claim is made about N<N_0. [L1, L6, choose]

1.2 (Strict bootstrap constants.) On [-tau,tau] times the torus times Q choose positive energy-equivalence constants a,b before choosing the radius. Choose R_1>R with a R_1^2>2(1+bR^2). Obtain C_1,C_2 for value set Q and norm ball R_1. Choose 0<T<tau with (1+bR^2)e^{C_1T}<aR_1^2 and T C_emb C_2(1+R_1)<delta/2, where C_emb is the H^{s-1}-to-C^0 embedding constant. Every constant is fixed before choosing T; the inequalities hold already strictly at T=0. [L2, L3, L6, choose]

2.1 (Uniform existence by first exit.) For N>=N_0 solve the admissible ODE from P_Nu_0. On the connected component containing 0 of times with values in int Q and H^s norm <R_1, the absolute energy inequality gives 1+e_N(t) <= (1+e_N(0))e^{C_1|t|} <= (1+bR^2)e^{C_1T}<aR_1^2. The derivative bound and H^{s-1} embedding give norm(u_N(t)-P_Nu_0)_{C^0}<delta/2. Together with step 1.1 this places all values in the closed 3delta/2-neighborhood of K, a compact subset of int Q. These strict margins exclude a first exit before T in either time direction. For each fixed N the norm and compact-value bounds give a compact coordinate trajectory inside the ODE domain; since [-T,T] lies inside I, the continuation criterion excludes a maximal endpoint before T. Hence every N>=N_0 exists on (-T,T), takes values in Q subset K', and satisfies the stated uniform norm and derivative bounds. [step 1.1, step 1.2, L1, L2, L3, L6]

3.1 (Extraction and passage to the limit.) Apply compactness to the cofinal sequence N=N_0,N_0+1,...; the proof applies unchanged under this relabeling and gives indices N_j tending to infinity and locally uniform H^{s-1} convergence to u. The corrected limit lemma gives the asserted Sobolev and classical solution with datum u_0 and values in Q subset K'. With C large enough to cover R_1/(1+R) and C_2(1+R_1)/(1+R), its bounds have the stated form. [step 2.1, L4, L5, construct, discharge-construct] ∎

The current final Remark omits K' from the dependency of constants; align it with the unchanged Statement. Empty data classes are harmless, as is R=0; the strict energy choice above still works.
