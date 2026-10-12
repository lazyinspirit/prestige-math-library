# Canonical elementary embeddings and highest-weight survivors

Local construction for the same first pass, all real symmetrizable data. This uses the actual native5/6/7/8 quantum contracts; it does not identify a nonsymmetric datum with a symmetric geometric anchor. It upgrades signed star preservation only after a positive tensor-residue argument. The authoritative construction is Kashiwara, On Crystal Bases (March27 1995), §§8.1–8.3, visually read PDF pp28–31; the extracted text has corrupt custom-font encoding and is not claimed readable. The finite-extraction recognition proof is independently expanded in construction.md and agrees with the actually read KS Proposition3.2.3 proof.

## Exact prerequisites

1. Negative-half and highest-weight grand-loop crystal bases, with lowering generation, raising compatibility on surviving projection residues, and lower projection compatibility on all residues.
2. Unique divided i-strings and preservation of their component projectors on the crystal lattice; their integral counterparts and the adapted global left string ideals from native8.
3. The existing signed reversal theorem: star fixes F_i, q, commutes with bar, preserves the integral and crystal lattices, and sends B(infinity) into ±B(infinity). Unsigned preservation is NOT a premise.
4. The actual based quotient: the field kernel of pi_lambda is sum_j U^- F_j^(lambda_j+1), its integral kernel is the sum of all divided right powers past each highest limit, and it is adapted to the global basis via signed reversal of left ideals.
5. Highest-weight tensor map Phi, compatible with lattices by the grand loop, and the tensor crystal rule with Delta F_i=F_i tensor1+K_i tensor F_i. The map is a strict positive crystal injection: equivariance makes it commute with the finite divided-string decomposition and hence with both Kashiwara operators, and applying it to each lowering word from the positive highest residue yields a positive tensor crystal residue. Its left inverse Psi supplies injectivity on residues, or alternatively finite norm perfection and the isometry supply it. No unproved normality-recognition assertion is used.
6. Finite-support regularization before choosing weights with prescribed h_i values. All arguments below fix a finite root component or finitely many words; fundamental auxiliary labels need only exist in that regularized support. The existing inherited AC hypotheses are retained.

## Right strings and the adapted survivor criterion, initially with signs

Define the right string operators by star conjugating the left normalized Kashiwara operators. Because star is an isometry of the actual crystal lattice and signed crystal set, every positive crystal residue b lies in exactly one right-string position c_i(b)>=0. On a lattice lift u one has

    u=sum_(n>=0) u_n F_i^(n),   u_n in ker(star e_i' star),

with every u_n in the crystal lattice, and modulo q only the component n=c_i(b) is nonzero. Its top coefficient has residue ±bar b for some positive crystal residue bar b with c_i(bar b)=0. This is the left string-component lemma conjugated through the signed lattice theorem, so it does not assume unsigned star. The integer c_i(b) is epsilon_i of the absolute value of star b.

The field right ideal U^- F_i^t is the direct sum of right-string positions n>=t. Its adapted global subset is therefore precisely the positive indices b with c_i(b)>=t: conjugate the already proved left-string adapted global subset through star, whose possible signs do not affect which A-basis vectors span the ideal. The based quotient's field kernel is the sum of these right ideals at t=lambda_i+1. Since all are adapted to ONE global basis, their sum is the span of the union of their basis subsets. Therefore

    pi_lambda(b)!=0 iff c_i(b)<=lambda_i for every i.    (A)

This proves the highest-weight survivor criterion already with signed star. It neither assumes unsigned star nor infers an adapted intersection from an arbitrary linear sum. The surviving residues are bijective with B(lambda) by the existing based quotient/grand loop. Raising on survivors and surviving lowering are exactly the existing projection compatibilities. The shifted statistics are epsilon_i(b) and epsilon_i(b)+<h_i,lambda+wt(b)> because B(lambda) is the actual highest-weight module crystal; raising preservation gives epsilon equality, and its rank-one formula gives phi.

## Canonical elementary embedding by finite highest-weight tensor models

Fix color i and a finite set of lowering words of height at most H. Work in the regularized finite support. Choose lambda_i=0 and lambda_j large for j!=i, large enough that no right ideal for those j meets any relevant root component of height at most H+1. Choose N>H+1. The total label lambda+N Lambda_i is then large at every relevant color, so its projection identifies the canonical B(infinity) vertices and all edges under consideration with the corresponding finite-degree vertices of B(lambda+N Lambda_i). Apply the strict highest-weight tensor embedding into B(lambda) tensor B(N Lambda_i).

Throughout these finite lowering paths the second factor is a pure i-string f_i^m u_(N Lambda_i). Indeed initially it is highest. For j!=i its epsilon_j is0 at every pure i-string position: E_j commutes with F_i and kills the highest vector, so all such vectors are E_j-highest. The first factor's phi_j is positive and larger than any second epsilon_j in the bounded degree, because lambda_j is chosen large. Thus both lowering and raising of any j!=i act on the first factor. Color i preserves the pure i-string form. Its string endpoint N is not reached in this height bound.

Lift the first residue b_1 uniquely to its surviving positive residue b' in B(infinity). Replace the second pure i-position m by b_i(-m) in the elementary crystal. The finite tensor rules become exactly those on B(infinity) tensor B_i: for i, lambda_i=0 means the first phi_i is epsilon_i(b')+<h_i,wt(b')>, and the second epsilon_i is m. For j!=i the elementary statistics are -infinity, so its tensor rule selects the first factor, just as the large-lambda finite model does. The finite tensor epsilon formula reduces to epsilon_j(b') for j!=i because lambda_j is large; for i it reduces to max(epsilon_i(b'),m-<h_i,wt(b')>). Root weights add to wt(b')-m alpha_i. Thus the replacement preserves the generic weight, epsilon and formal phi statistics as well as every considered operator.

This construction is independent of lambda,N WITHOUT assuming a stabilization theorem. Define its candidate value on a lowering word w by computing w(u_infinity tensor b_i(0)) using the actual generic tensor rules. The preceding finite-model argument shows that this computation agrees with the replacement of the finite tensor image for every bounded path. If two words w,w' give the same b in B(infinity), choose one common finite bound and one common pair lambda,N. Their images in B(lambda+N Lambda_i) coincide, hence their strict tensor images coincide, and the unique surviving lifts of their first factors coincide. Therefore the candidate generic tensor values coincide. Conversely if the candidate values coincide, choose the same finite model for the two words; its first-factor projections and second positions coincide, and injectivity of Phi followed by the large-label projection identification gives w u_infinity=w' u_infinity. This proves a well-defined injective Psi_i, independent of all choices.

For lowering use the same finite model on a word and that word with one appended operator. For raising use a model containing the vertex, its raising neighbor if nonzero, and the next boundary; strictness of finite Phi and the already checked branch/statistic formulas give Psi_i(e_j b)=e_j Psi_i(b), including zero. Hence

    Psi_i:B(infinity)->B(infinity) tensor B_i

is strict, sends the vacuum to u_infinity tensor b_i(0), and every elementary coordinate is nonpositive. This is an actual finite-word construction, rather than a citation to Kashiwara Theorem8.2.

## Identifying the elementary coordinate with the right-string index

The remaining coordinate identification can be checked on the coproduct rather than assumed from unsigned star. For a homogeneous P of root beta, the coefficient of one i in the second tensor factor of Delta(P), after extracting its toral K_i, is e_i''(P). On homogeneous root beta this derivative is

    e_i''(P)=q_i^(<h_i,beta>-2) (star e_i' star)(P).

Check this first on a generator. Both sides then satisfy the same twisted deletion rule, with prefix versus suffix twists interchanged; the displayed homogeneous scalar converts one rule into the other. Hence their kernels agree. Coassociativity or repeated deletion shows that every higher pure-second-i coefficient is a nonzero field scalar multiple of the corresponding repeated derivative; it therefore vanishes on P in the right-string kernel. Thus projecting Delta(P) onto the terms with pure i root degree in the second factor leaves exactly P tensor1.

Apply this to the right expansion u=sum_n u_n F_i^(n) above, acting on v_lambda tensor v_(N Lambda_i) with lambda_i=0. Every mixed-color second-factor term has a different second root degree and is removed by the pure-i projection. For u_n in the right kernel only u_n tensor1 survives that projection. In Delta F_i^(n), every term whose first divided power F_i^(a) has a>0 kills v_lambda before u_n acts. The remaining term is K_i^n tensor F_i^(n), and K_i^n v_lambda=v_lambda because lambda_i=0. Therefore the exact pure-second-i projection is

    sum_n pi_lambda(u_n) tensor F_i^(n)v_(N Lambda_i).   (B)

No uncontrolled q shift occurs in this formula with the actual native coproduct. The derivative equality above is only used to identify the kernel; scalar rescalings do not change it.

The coefficient u_c, c=c_i(b), has signed positive crystal residue ±bar b with right index0. Its projection at lambda_i=0 survives by (A); all other coordinates survive because lambda_j is large. Thus its projected residue is nonzero. Every n!=c coefficient has zero crystal residue. Formula (B) consequently has exactly one nonzero pure-i tensor residue, at position c. On the other hand Phi(pi_(lambda+N Lambda_i)b) is a positive pure-i tensor residue by the finite model. It follows that its elementary coordinate m is exactly c_i(b), and that the top right-string coefficient u_c has POSITIVE residue bar b, not negative. Thus

    Psi_i(b)=bar b tensor b_i(-c_i(b)),
    c_i(bar b)=0,  b=(f_i^right)^(c_i(b)) bar b.          (C)

In particular every nonvacuum b has positive extraction at some i: star b is a signed nonvacuum crystal residue, and the canonical lowering-generated crystal has a nonzero raising direction on its absolute value.

## Unsigned star follows rather than being assumed

Induct on root height. The vacuum is fixed by star. For a positive-height b choose i with c_i(b)>0. Formula (C) gives b=(f_i^right)^c bar b with bar b a POSITIVE residue of strictly smaller height. Apply star:

    star b=f_i^c(star bar b).

By induction star bar b is positive, and canonical lowering preserves positive crystal residues. Therefore star b is positive. Since star is an involution, it permutes B(infinity) bijectively without signs. This proves unsigned star for every real symmetrizable datum from the actual signed theorem plus tensor positivity. Then c_i(b)=epsilon_i(star b) is the usual epsilon_i^star, and (C) is the exact canonical elementary extraction formula. The proof does not invoke a symmetric-type geometric basis.

## Identification of the generic and cyclotomic module crystals

C1/C3 construct the generic module strict elementary embeddings, with extraction coordinate epsilon_i^L and positive extraction on every nonvacuum module. Both its graph and the canonical graph just constructed are generated by lowering words from their vacua and have every lowering operator nonzero. The finite-extraction comparison lemma identifies the two graphs uniquely by lowering words. Strictness also forces their elementary extraction coordinates to agree: the comparison tensor identity holds on the vacuum and on every lowering word, so

    epsilon_i^L(M)=epsilon_i^star(b_M).

C1's first-dot criterion identifies the cyclotomic module vertices with epsilon_i^star(b_M)<=lambda_i. Equation (A) identifies exactly that subset with the surviving canonical vertices, hence with B(lambda). Existing projection compatibility proves the raising and surviving-lowering correspondence, while C3's actual normal-length formula gives the canonical epsilon/phi data. This proves the full all-field/general homogeneous-Q simple crystal theorem, subject to owner verification/integration of these local bodies and the listed actual quantum/algebra suppliers. Projective-cover labeling transports the graph through the unscaled perfect pairing; independently defined projective operators still require their exact leading-term convention.
