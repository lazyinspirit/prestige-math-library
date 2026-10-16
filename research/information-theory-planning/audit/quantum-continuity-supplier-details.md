# Finite quantum mixing and conditional-continuity supplier details

Research local development; natural logarithms, finite nonzero systems. This supplements the resolvent QRE-DPI/SSA development.

For positive definite C>=D, the quadratic variational formula for <x,C^-1 x> gives C^-1<=D^-1: replacing the quadratic penalty C by D can only increase the maximum. Apply this to C+sI,D+sI and integrate the resolvent formula for the logarithm to obtain log C>=log D. Thus log is operator monotone on positive definite matrices, proved here rather than imported as an unspecified operator theorem.

Let rho=sum_i p_i rho_i, p_i>0. Positivity rho>=p_i rho_i implies supp rho_i subset supp rho. For epsilon>0, log(rho+epsilon I)>=log(p_i rho_i+epsilon I). Taking trace against rho_i preserves order. The support spectral limit gives Tr rho_i log rho>=ln p_i+Tr rho_i log rho_i. Therefore D(rho_i||rho)<=-ln p_i. Summing and expanding finite traces proves

0<=S(rho)-sum_i p_iS(rho_i)=sum_i p_iD(rho_i||rho)<=H(p).

The lower bound follows from QRE nonnegativity, itself obtained by DPI to the trace channel with scalar output state 1. Zero weights are omitted. This proves the cq mixing upper bound without treating quantum conditional entropy as always nonnegative.

A state rho_AB has a finite spectral purification |psi>_ABC=sum_j sqrt(lambda_j)|v_j>_AB tensor |j>_C. Its AB marginal is rho_AB by direct partial trace. For a pure bipartition represented by coefficient matrix M in ordered orthonormal bases, the two marginals have matrices MM* and the transpose/conjugate version of M*M; their nonzero eigenvalues coincide: if M*M v=lambda v with lambda>0 then Mv is a nonzero eigenvector of MM* with eigenvalue lambda, and the inverse map is M*/lambda. This also preserves multiplicities. Thus S(AB)=S(C) and S(B)=S(AC). Subadditivity implies S(B)<=S(A)+S(AB), so -ln d_A<=S(A|B)<=ln d_A, the upper bound following directly from subadditivity and S(A)<=ln d_A. The latter follows from nonnegative divergence to I_A/d_A.

For omega_AB=sum_i p_i rho_i, append a classical flag X to obtain sum_i p_i |i><i| tensor rho_i. Listing eigenvalues gives S(A|BX)=sum_i p_iS(A|B)_rho_i. SSA gives S(A|B)_omega>=S(A|BX). For the upper bound use the just-proved mixing upper bound for AB and entropy concavity for B to get S(A|B)_omega<=sum_i p_iS(A|B)_rho_i+H(p). Hence conditional mixing has a single H(p) budget.

For states rho,sigma on AB put delta=||rho-sigma||_1/2. If delta=0 equality is immediate. Otherwise rho-sigma=delta(tau_+-tau_-) is the positive/negative spectral decomposition normalized to states (traces agree because Tr(rho-sigma)=0). Define t=delta/(1+delta) and omega=(rho+delta tau_-)/(1+delta)=(sigma+delta tau_+)/(1+delta). Apply the preceding conditional mixing lower and upper estimates to both decompositions. Subtracting yields

|S(A|B)_rho-S(A|B)_sigma|<=delta |S(A|B)_tau_+-S(A|B)_tau_-|+(1+delta)h(t)
<=2delta ln d_A+(1+delta)h(t).

For ordinary entropy the same subtraction and 0<=S(tau)<=ln d give |S(rho)-S(sigma)|<=delta ln d+(1+delta)h(t). These nonsharp estimates suffice for continuity in finite coding converses; the factor dimension and error convention remain explicit.
