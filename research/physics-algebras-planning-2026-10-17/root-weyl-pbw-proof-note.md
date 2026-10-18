# Weyl PBW over general coefficients: a faithful auxiliary-variable action

Root assistance,2026-10-17. An independent planning argument, not an accepted item. It addresses the failure of the ordinary polynomial differential-operator representation to prove independence in characteristic p.

Fix a commutative ring R, scalar h∈R and finite n. Let A be the unital associative R-algebra on x_i,p_i with [x_i,x_j]=[p_i,p_j]=0 and [p_i,x_j]=hδ_ij1. Normal ordering shows that the words x^αp^β span: swap each p_i to the right of each x_j, using p_i x_j=x_j p_i+hδ_ij; the correction lowers word length and the swapped term lowers the number of p-before-x inversions. Order among x's and among p's is immaterial because each family commutes. This is a terminating length/inversion argument, not an independence proof.

Use the polynomial R-module B=R[x_1,…,x_n,t_1,…,t_n]. Let X_i act by multiplication by x_i and define

$$P_i=h\partial_{x_i}+m_{t_i},$$

where the formal derivative on a monomial is ∂_{x_i}(x^αt^β)=α_i x^(α−e_i)t^β when α_i>0 and0 otherwise. It is defined over every commutative ring, without division. The multiplication operator m_ti commutes with all ∂_xj and with all X_j. Checking on polynomial monomials gives [P_i,X_j]=hδ_ijI. Commutativity of formal partial derivatives and multiplications gives [P_i,P_j]=[X_i,X_j]=0. Thus the presentation induces an R-algebra representation A→End_R(B).

For each ordered word its value on the single vector1 is

$$X^\alpha P^\beta(1)=x^\alpha t^\beta.$$

Indeed all ∂_xi vanish on R[t_1,…,t_n], so P^β(1)=t^β exactly. The resulting distinct polynomial monomials are R-linearly independent. Applying a finite relation among the ordered words to1 therefore forces every coefficient to vanish. Combined with spanning, this proves that x^αp^β is a free R-basis of A. It also proves this auxiliary-variable representation faithful. No characteristic, h-invertibility or integral-domain hypothesis was needed for this basis statement.

Over a field of characteristic p, the action on k[x] alone with P=∂_x is not faithful: ∂_x^p=0 as an operator, while the now-proved PBW basis shows p^p≠0 in the abstract algebra. That familiar representation cannot be used to prove characteristic-p independence. The extra t variable prevents the problem, since (∂_x+t)^p(1)=t^p≠0.

This proof does not establish Stone–von Neumann, operator self-adjointness, irreducibility, a universal C*-algebra, or uniqueness of algebraic modules. Those are separate theorem contracts. Reuse polynomial rings and their free monomial basis, formal partial derivatives/endomorphisms, free associative algebra/quotient universal property, and elementary terminating reorder lemmas where their exact local statements suffice. Any missing action/derivative identity is a small intermediate lemma, rather than an assumption of PBW.
