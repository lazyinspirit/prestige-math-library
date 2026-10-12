# General mixed relations and rank-one local finiteness force Serre

Same native11 first-pass owner. This reproduces the exact applicable existing native9 supplier `lem-integrable-rank-one-actions-force-the-quantum-serre-relations`; it does not edit or re-audit native9. The actual Statement and Strategy were read. Source guards are in `general-serre-supplier-binding.json`. All operators here act on a label-weight-graded Q(q)-vector space, not on an already assumed U_q(g)-module. Assume the toral conjugation rules, [E_i,F_j]=δ_ij(K_i−K_i^{-1})/(q_i−q_i^{-1}), and local nilpotence of both E_i,F_i. Every vector has finite label support. No full-g or rank-two local finiteness is assumed.

1. Fix i and a vector v. The rank-one relations rewrite every operator word as a linear combination of F_i^a E_i^b K_i^c. Only finitely many b act nontrivially on v; for each such b, only finitely many a act nontrivially on E_i^b v. Toral factors act by scalar on homogeneous components. Thus W=U_i v is finite-dimensional, stable under the rank-one algebra U_i and type-one. The same holds for the U_i envelope of any finite list of vectors. This proves rank-one local finiteness without asserting a finite U_q(g) orbit.

2. Fix j≠i. Let W'=U_i(F_jW), finite-dimensional by step1. On Hom_Q(q)(W,W') use the Hopf adjoint rank-one action
   adK_i(T)=K_i T K_i^{-1},
   adE_i(T)=(E_iT−TE_i)K_i,
   adF_i(T)=F_iT−K_iTK_i^{-1}F_i.
   The rank-one relations on W,W' verify the same relations on Hom, by expanding compositions. It is a finite type-one rank-one module. The restriction T=F_j|W satisfies adE_i(T)=0 and adK_i(T)=q_i^mT, m=−a_ij≥0. By the actual finite quantum-sl₂ string theorem, (adF_i)^{m+1}T=0 (or T=0, in which case the assertion is immediate).

3. A direct induction gives
   (adF_i)^nT=Σ_{r=0}^n (−1)^r q_i^{r(m−n+1)} [n choose r]_i F_i^{n−r} T F_i^r.
   The induction step expands adF on each summand and uses toral conjugation, then the quantum-binomial Pascal identity. At n=1 it is F_iT−q_i^mTF_i; at n=2 the middle coefficient is q_i^m+q_i^{m−2}, agreeing with the stated formula. For n=m+1 every displayed Laurent exponent is0. The vanishing from step2 is exactly the negative quantum Serre relation, with n=1−a_ij. Evaluate at v∈W; since v was arbitrary, the operator relation holds on the whole label-weight space.

4. Exchange E_i↔F_i and K_i↔K_i^{-1} for every i. The same hypotheses and rank-one relations remain true, and step3 gives the positive quantum Serre relations. Together with the assumed toral and mixed relations, these are every defining Drinfeld–Jimbo relation, so the operators uniquely define a U_q(g)-module. It is integrable by the assumed local nilpotence. Existing admissible i-string decompositions apply; no assertion that finite weight spaces force a direct sum of finite-dimensional full-g submodules is made. Positive-level affine highest-weight modules explain why that former conclusion must be removed while preserving the broad true integrability claim.

All constructions use finite operator spans and the declared finite rank-one theorem. No A₂-only calculation, rank-two orbit assumption, global semisimplicity or additional choice principle appears.
