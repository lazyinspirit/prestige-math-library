---
id: lem-cft-torus-blocks-as-projective-pseudotrace-sewings
kind: lemma
title: Every torus block is a projective pseudotrace sewing
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
proof_strategy: direct
axiom_use: Full AC is inherited by the C2-cofinite analytic conclusion from the geometric sphere/cylinder sewing constructions; the finite dual-basis formulas require no additional physical premise.
deps:
- lem-cft-nonnegative-c2-sphere-and-cylinder-sewing
- lem-cft-c2-finite-projective-generator-and-weight-projectivity
- def-cft-pseudotrace
- lem-cft-pseudotrace-basis-independent
dependency_roles:
  lem-cft-nonnegative-c2-sphere-and-cylinder-sewing: mathematical-premise
  lem-cft-c2-finite-projective-generator-and-weight-projectivity: mathematical-premise
  def-cft-pseudotrace: mathematical-premise
  lem-cft-pseudotrace-basis-independent: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 6
---

## Statement

Let V be a C2-cofinite nonnegative VOA in the explicit broader sense of the sphere/cylinder lemma; V0 need not equal C1. Fix a sphere F with n>=1 external incoming marks carrying grading-restricted generalized modules, and two outgoing coordinate marks at zero and infinity. For a nonzero sewing parameter in the cylinder sewing domain, every conformal block on the self-sewn torus is the convergent pseudotrace sewing of an actual R-linear sphere block with a grading-restricted loop module M, for some finite-dimensional unital algebra R and symmetric functional phi. The module M and all its finite weight truncations are projective right R-modules; its R-action is faithful and End_V(M) is finite dimensional.

More precisely, choose the finite projective generator P and A=End(P)^op. There is a finite A-bimodule B_F such that the torus block space is canonically SLF_A(B_F)={psi: psi(ab)=psi(ba)}. Every such psi is realized by a loop M=P tensor_A U, with U a finite free module over its right algebra R, and an actual R-linear genus-zero block. No ordinary trace completeness, semisimplicity, rigidity, or replacement of generalized modules by simples is assumed.

## Facts & Assumptions

**Given:** The fixed sphere and sewing data just stated.

[F1] [[lem-cft-c2-finite-projective-generator-and-weight-projectivity]] gives exact C≃finite A-mod, finite right-projective weight spaces of P, and the joint equivalence Phi(M tensor N')=H(M) tensor H(N)^*.

[F2] [[lem-cft-nonnegative-c2-sphere-and-cylinder-sewing]] proves actual fixed-sphere dual fusion, ordinary generalized-weight sewing, genus-zero fixed factorization and the full cylinder insertion inverse. Its proof retains weight-zero representatives and uses the explicitly proved broader module category; no CFT-only supplier is applied beyond its hypotheses.

[F3] [[def-cft-pseudotrace]] and [[lem-cft-pseudotrace-basis-independent]] give finite-dual-basis cyclicity. Pseudosewing convergence in the broader VOA scope is proved below by ordinary two-pair sewing, not quoted from a narrower CFT-type theorem.

## Proof


1.1 Fix all external labels and let T_F(M) be the contragredient of the dual fusion product obtained by treating the zero mark as incoming with label M and retaining infinity as the single outgoing mark. Its defining property and restricted transposition give
$$\operatorname{Hom}(T_F(M),N)=\operatorname{CB}_F(\text{external},M,N').$$
This equality uses full sphere residues: transposing the block gives the P(z)-Jacobi identity by the two input rational-current expansions, and the three polynomial conformal currents give its sl2 brackets. Conversely those identities annihilate every rational sphere current. Thus the module maps correspond to actual blocks, not only arbitrary bilinear maps. This makes T_F a covariant functor. For an exact sequence M1->M2->M3->0, a block on M2 restricts to zero on M1 precisely when its underlying functional factors through M3; its Ward identities factor too. The Hom property therefore proves T_F right-exact. Set B=H(T_F(P)), with the right A-action induced by the right A-action on P. It is finite and unital on both sides. Finite presentations by sums of P give
$$H(T_F(P\otimes_A U))=B\otimes_A U$$
for every finite left A-module U: both sides are right-exact and agree on free modules and their matrix maps. Consequently an (A,R)-map f:B tensor_A U->U gives an actual R-linear sphere block with loop P tensor_A U. This proves the module/intertwiner lifting interface, rather than assuming that an abstract finite-algebra bimodule map is a VOA field. [F1, F2, algebra]

1.2 Put K=direct-sum_{lambda,mu} Hom_A(P_[mu],P_[lambda]), the finite-support A-linear operators on P. Its commuting vertex actions are left multiplication and the opposite right action, so it is the A-linear joint submodule of P tensor P'. It is grading-restricted and Phi carries it to the regular A-bimodule A. Indeed Phi(P tensor P')=A tensor A^*, and the finitely many equations expressing commutation with a basis of A become commutation with right multiplication on the regular A. Their solution is End_{right A}(A), namely left multiplication by A, with exactly the two regular bimodule actions. Exactness of Phi preserves that kernel. No self-duality or projectivity of P' is presumed. [F1, construct]

2.1 Let Q be the sphere with incoming V at 1 and outgoing marks 0,infinity, and let H_Q=D_Q(V). Its represented functor, after vacuum propagation, is the two-point sphere block functor. This object is K'. To verify it, on every external M tensor N' restricted duality and F1 give
$$\begin{aligned} \operatorname{Hom}(M\otimes N',K') &=\operatorname{Hom}(K,M'\otimes N)\\ &=\operatorname{Hom}_{A-A}(A,H(M')\otimes H(N')^*)\\ &=\operatorname{Hom}_A(H(N'),H(M'))=\operatorname{Hom}(M,N). \end{aligned}$$
The last expression is the two-point sphere block space: L0 Ward matches weights, and the other Laurent currents transpose precisely the module homomorphism identity. These isomorphisms are natural. External M projective and N injective give projective generators of the joint category, by F1. Finite projective presentations therefore extend the natural equality to every joint label, proving H_Q=K'. The vacuum block omega is the completed identity of P, namely the diagonal collection id_{P_[h]}; its Ward identity is Y(v)id=idY(v), and its normalization is the vacuum identity. Cylinder insertion F2 now gives
$$\operatorname{CB}_{F_q}(\text{external})=\operatorname{CB}_F(\text{external},K).$$
This is the nonsemisimple sewing inverse, not a simple-object sum. [F1, F2, step 1.2, algebra]

2.2 Let psi in SLF_A(B). Form R=A plus B with square-zero product (a,b)(a',b')=(aa',ab'+ba'), unit (1,0), and phi(a,b)=psi(b). Associativity is the bimodule law, and symmetry follows from psi(ab)=psi(ba). Let U=R with its free regular right action and left A action (a,0). The map f(b tensor u)=(0,b)u is balanced, left A-linear and right R-linear. For a fixed b, its right-R-linear endomorphism f_b has
$$\operatorname{Tr}^{\phi}_{U}(f_b)=\phi((0,b))=\psi(b)$$
using the single dual basis 1,id_R. Put M=P tensor_A U. Step 1.1 lifts f to an actual R-linear sphere block. F1 proves M and every finite weight truncation right-R-projective. The action of R on M is faithful: right multiplication r is an A-linear endomorphism of the finite left A-module U, and the exact equivalence P tensor_A - is faithful; if it becomes zero on M it was zero on U=R, hence r=0. Also M is grading-restricted and finitely generated, so End_V(M) is finite dimensional, since its homomorphisms are determined by finitely many generating-vector images in finite weight spaces. All projectivity, finite-endomorphism and linearity data claimed in the Statement are thus proved for this new loop. [F1, F3, step 1.1, algebra]

3.1 Write D=D_F(external) for the two-outgoing dual fusion object. Its image under Phi is B^*, with actions (a ell b)(x)=ell(bxa). In fact on external M tensor N' its representing property reads
$$\operatorname{Hom}_{A-A}(H(M)\otimes H(N)^*,\Phi D) =\operatorname{Hom}_A(B\otimes_A H(M),H(N)).$$
The latter is naturally Hom_{A-A}(H(M) tensor H(N)^*,B^*): a map g corresponds explicitly to x tensor y^* -> [b -> y^*(g(b tensor x))]. This formula verifies both balances and its inverse. Testing on projective generators proves Phi D=B^*. Hence
$$\operatorname{CB}_F(\text{external},K) =\operatorname{Hom}_{A-A}(A,B^*)=\operatorname{SLF}_A(B).$$
The last isomorphism sends a central bimodule map to its value at 1; its inverse is psi -> (a -> [b -> psi(ba)]). This proves finite dimensionality and the exact symmetric-functional interface for the full torus block space. B is a genuine finite mode/fusion bimodule; it is not silently identified with a different higher-Zhu quotient. [F1, F2, step 1.1, step 1.2, step 2.1, algebra]

4.1 We check that this pseudotrace realizes the RIGHT cut block. The universal sphere block on P has a completed B-valued operator I_can(w):P->completion(P tensor_A B), natural for the right A-action. For a finite-support T in K and a sufficiently large finite weight projection Pi, the operator Pi I_can(w) T Pi is a B-valued right-A-linear endomorphism of the finite projective right module Pi P. If (p_i,alpha_i) is its right-A dual basis, its coefficient trace is
$$\operatorname{HS}^{B}(I_{\rm can}(w)T)=\sum_i(\alpha_i\otimes1)I_{\rm can}(w)T p_i \quad\text{in }B/[A,B].$$
It is independent of the dual basis and of enlarging Pi: the usual two-dual-basis calculation reverses products modulo ab-ba, and the added diagonal blocks have zero source under T. Pairing this class with psi gives a sphere block beta_psi on external tensor K; cyclicity moves each current mode across T, while the universal sphere Ward identity handles its external-state action. Under the finite bimodule identification in step 3.1 this block corresponds to psi itself. This normalization can be checked on the regular right A-module, where a B-valued left multiplication by b has coefficient trace b, and the corresponding map is a -> [b -> psi(ba)]. It holds for finite projectives by summand dual bases and cyclicity. These projectives suffice: the right module P is faithfully projective, since P tensor_A - is a faithful exact equivalence; a finite sum of its finite weight truncations contains every primitive projective summand and is therefore a right-A generator. The regular right A is a summand of a finite sum of those truncations. Thus the regular-module normalization determines the same entire map under Phi, rather than only some of its weight components. [F1, F3, step 3.1, step 2.2, algebra]

5.1 For completeness the required tensor pseudotrace identity is finite. Let Q be any finite projective right A-module and (q_i,alpha_i) a dual basis, and let (u_j,beta_j) be a right-R dual basis of U. A B-valued Q operator t:Q->Q tensor_A B gives on Q tensor_A U the operator obtained by t tensor1 followed by 1 tensor f. The family q_i tensor u_j and coordinate maps
 q tensor u -> beta_j(alpha_i(q)u)
is a right-R dual basis of Q tensor_A U. Its trace is therefore
$$\sum_{i,j}\phi\!\left(\beta_j\!\left(f\left((\alpha_i\otimes1)t(q_i)\otimes u_j\right)\right)\right) =\sum_i\psi((\alpha_i\otimes1)t(q_i)).$$
This is exactly psi of the B-valued coefficient trace. Apply it to every finite diagonal weight block of I_can(w)T; its left side is the pseudotrace of the lifted actual sphere operator on M. Thus beta_psi is exactly the cut block produced by that projective pseudotrace, coefficient by coefficient, with no ordinary trace substitution. [F3, step 2.2, step 4.1, algebra]

6.1 Sew beta_psi to the completed identity of P from step 2.1. Its diagonal term is beta_psi(w,q^{L0}Pi_h), where Pi_h is the identity projection on P_[h]. Step 5.1 makes this precisely
$$\operatorname{Tr}^{\phi}_{M_{[h]}}\!\left(I_f(w)\,q^{L0}\right).$$
All nilpotent exponentials are finite on the indicated weight space and coincide in the tensor description; this includes every logarithmic coefficient. Here is its analytic convergence, valid also for any original finite algebra action not assumed faithful. Put G=direct-sum Hom_R(M_[mu],M_[lambda]). This is the R-linear joint submodule of M tensor M', with finite blocks and coordinatewise lower bounds. Finite-dual-basis cyclicity gives a two-point sphere block tau on G: for each mode its two products have finite support and the traces are equal after choosing a common finite projective weight truncation. The R-linear sphere block with loop M has coefficients in completion(G), so restricted transposition makes it a sphere block with joint label G'. Apply F2's ORDINARY two-pair sewing to this sphere and the two-point sphere carrying tau. The coefficient sum is sum_{lambda,mu}tau(q1^{L0}Pi_lambda I_f(w)Pi_mu q2^{L0}). Off-diagonal blocks have zero trace; cyclicity on the diagonal makes this precisely the required pseudotrace with q=q1 q2 and adding logarithms. Ordinary absolute/local-uniform convergence therefore gives the desired convergence on every |q|<r rho: choose locally one q1 within r and q2=q/q1 within rho. The limit is a block. This proves the broader pseudosewing assertion instead of importing it. The cylinder sewing inverse is an isomorphism, so step 3.1 and step 2.2 show that these actual projective pseudotrace sewings exhaust EVERY torus block. Inserting the scalar q^{-c/24} and the geometric incoming coordinate modification gives the usual shifted pseudotrace normalization; both are invertible changes at a fixed nonzero sewing parameter. No conclusion depended on semisimplicity, irreducible-character spanning, or an unsupported VOA lift of an abstract algebra module. [F2, F3, step 2.1, step 3.1, step 5.1, algebra] ∎
