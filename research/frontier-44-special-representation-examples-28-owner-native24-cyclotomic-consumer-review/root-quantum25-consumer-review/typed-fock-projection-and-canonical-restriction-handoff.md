# Actual source9/23 interfaces for the flagged source25 consumers

Reviewer: /root. This handoff supplies a local comparison for NEW25 first repair; it does not reopen the closed source9/23 or source11 repairs. No source item, readiness stamp, or gate is changed here.

Put A=Z[v,v^-1], k=Q(v). In the symmetric convention M_mu=|mu transpose>, the restricted lower vectors satisfy G_lambda=sum_mu d_lambda,mu M_mu. All partitions index M; restricted partitions index G. B(M_mu,M_nu)=delta_mu,nu. The coefficient matrix D is rectangular. The basic representation is V=span_k G_lambda, with H=D transpose D. Its nondegeneracy follows, for example, by a real specialization away from finitely many poles: the independent real columns have a positive definite Gram matrix, so its rational determinant is nonzero.

Define Std_mu in Hom_A(V_A_lower,A) by Std_mu(x)=B(x,M_mu). Under B's FIELD identification V*=V, this functional is pi(M_mu), where pi is the B-orthogonal projection onto V. This defines pi, rather than attributing an undeclared projection to a generic upper-basis definition. If G_lambda_star is the B-dual basis, evaluation on G_lambda yields
pi(M_mu)=sum_lambda d_lambda,mu G_lambda_star.
The restricted square minor of D is unitriangular over A, hence the restricted Std_mu form an A-basis of the UPPER dual lattice. They do not generally form a basis of V_A_lower. In the smallest e=2 example, G_11=M_11+v M_2 and G_11_star=(M_11+v M_2)/(1+v^2); the field denominator cannot be silently declared a Laurent unit. The full family of projected standards is redundant.

Source9's node polarization is B(F_i x,y)=B(x,v^-1 K_i E_i y). Consequently V and its orthogonal complement are invariant under E_i,F_i,K_i: the appropriate weighted adjoints preserve V. Thus pi commutes with the ordinary quantum-group action. Conjugation/reflection into source23's symmetric convention sends the regular source9 action to F counting BELOW and E counting minus ABOVE. Therefore
E_i Std_mu=sum_{A removable i} v^(-d^A(mu)) Std_(mu minus A),
where d^A counts addable i-nodes ABOVE A minus removable i-nodes ABOVE A. The BELOW count d_A used by graded Specht restriction is different.

For a removable i-node A, all other i-nodes split into above and below. A itself contributes -1 to the global addable-minus-removable count h_i(beta); it is excluded from both local counts. Hence d_A(mu)+d^A(mu)=h_i(beta)+1. Source11's actual canonical functor on input weight beta is E_can=v^(-1-h_i(beta)) E_basic. Applying it to the source25 Specht filtration gives coefficient v^(-1-h_i(beta)+d_A(mu))=v^(-d^A(mu)), exactly the displayed ordinary Fock E action. Bare restriction is not E_can. The highest-weight identification then follows by induction: the difference in positive height is annihilated by every E_i, so irreducibility of the basic highest-weight representation forces it to vanish. This argument retains canonical coefficients and requires no rescaling to the KK convention.

Sanity check e=2 at beta=alpha0+alpha1: h_1(beta)=0. The two Specht classes satisfy S_2=v L and S_11=L; E_can=v^-1 Res sends them to L_1 and v^-1 L_1 respectively. Symmetric Fock E has above counts 0 and 1 respectively, so the coefficients agree.

Keep the A-bilinear projective-module pairing T separate from the first-bar sesquilinear h(P,M)=T(P#,M); their first-variable shift factors are v and v^-1 respectively. This handoff does not supply the outstanding integral homogeneous Specht/Garnir presentation or the source20 ordinary/Murphy module dictionary. Those remain explicit prerequisites owned by the existing reviewers.
