# Ground projectivity and deletion of full ground rows

Guarded construction for frontier-44-special-representation-examples-28. This file modifies no canonical item, engine state, mathematical acceptance receipt, old two-round count, or exception count. Root owns integration; /root/repair_klr_global_basis owns the supplier and consumer chain. The one-time exception authorization is the sibling authorization.json. These arguments repair the W1/D1 boundaries of the Schur-head constructor's PROOF-PACKAGE.md. They are local arguments, not a claim that citing source17 completes a proof.

Source17 is Brundan–Kleshchev, math/0605217. The existing complete local text in ../exception_schur_heads_faithfulness_constructor/sources/bk-source17.txt was read at printed pp.6–9,13–19,22–23,26–30,36–41. Its K(A) is the category-O simple, its L(A) the finite-W simple, and its V(A) a finite-dimensional Levi module restricted to W. Preserve these distinctions.

## Exact remaining genuine-model inputs

G1. The independent tensor/double-centralizer construction, for every complex origin, gives the actual right matrices below, the filtered left image with graded image U(g^e), and both centralizer identities. This uses no admissible Morita statement.

G2. The original-head finite-W standard/highest-weight construction must prove that V(A) has scalar central character theta(A), that its standard-labelled module has unique simple quotient L_W(A), with this head proved by the genuine Morita/essential-projective-head argument rather than by assumed cyclicity of a specified vector, and that Std gives distinct exhaustive simples in the finite image. Equivalently, the genuine exact Wh comparison supplies Wh(M(A))=V(A) as actual modules and Wh(L_O(A))=L_W(A) for Std, zero otherwise, together with the finite-image exhaustion. Equality of dimensions or characters does not establish these modules or their actual maps. This package does not independently prove G2.

G3. Genuine Skryabin and Wh tensor comparison is available for every finite rational G-module E, particularly both V and its ordinary contragredient V*. The head/tail and actual Casimir/flip reconstruction is the sibling genuine-model constructor's responsibility. Below we derive the categorical adjunction and exactness once these genuine comparisons hold; they do not require Morita.

The proofs below completely spell out the additional ground, matrix deletion, Levi contraction and full-corner arguments given G1–G3. They should be integrated after those inputs, never used to create a circular proof of G1 or G2. The standard character/content interface in G2 must have a local proved supplier, not an external fallback. The original-generator contraction computation is now given explicitly in Section5; its use of the original T path/generation supplier is distinguished from the proof here.

## 1. Elimination basis of the actual finite image

Let lambda=(p_1<=...<=p_n), I its boxes, L/R the neighbouring boxes in a row and col/row their positions. Put U_d=V_c^{tensor d}, A_d=im(W(lambda)->End U_d), B_d=im(H_d(a)->End U_d^op), and a_j=c_j+q_j-n. For multi-indices write E_{i,j} for the tensor matrix units. The actual right action is

    v_i x_k = v_{L_k(i)} + a_col(i_k) v_i
              + sum_{h<k, col(i_h)>=col(i_k)} v_{i(h k)}
              - sum_{h>k, col(i_h)<col(i_k)} v_{i(k h)}.

The missing-neighbour term means zero; s_k exchanges tensor factors. These formulas make sense for unrestricted complex c. Admissibility is not a prerequisite of this section.

For a commuting matrix X=sum b_{i,j}E_{i,j}, coefficient comparison with s_k gives b_{i,j}=b_{iw,jw}. Since X belongs to the independent first centralizer A_d and A_d is the image of U(p), b_{i,j}=0 if some col(i_k)>col(j_k). Comparing Xx_k=x_kX and replacing j by R_k(j) gives, whenever R_k(j) exists,

    b_{i,j}=b_{R_k(i),R_k(j)}
      +(c_col(i_k)+q_col(i_k)-c_(col(j_k)+1)-q_(col(j_k)+1)) b_{i,R_k(j)}
      +sum_{h!=k, col(i_h)<=col(i_k), col(j_h)<=col(j_k)} b_{i(h k),R_k(j)}
      -sum_{h!=k, col(i_h)>col(i_k), col(j_h)>col(j_k)} b_{i(h k),R_k(j)}.

Again a nonexistent R_k(i) contributes zero. Every coefficient on the right has strictly larger total source column sum. This is terminating downward elimination from terminal source tuples; it is not an appeal to numerical invariance of roots. Let J={(i,j):col(i)<=col(j), R(j) absent}. The terminal data are arbitrary values on J^d/S_d. They determine at most one commuting matrix by this recurrence.

For existence, the independent graded left image is the dual of the degree-d coordinate coalgebra of the matrix monoid centralizing e. Its coordinate ring is the polynomial ring on the string maps indexed by J; its degree-d monomials are indexed by J^d/S_d. One can verify the finite-image identification directly: the matrix coefficient of a tensor tuple is the corresponding monomial; the orbit matrices have different terminal coefficients and are independent. Distributions at the identity surject on this finite coalgebra dual: a polynomial killed by all finite jets lies in every power of the maximal ideal at the identity, and hence is zero by translation and the polynomial Taylor expansion. Thus dim A_d=|J^d/S_d| by G1. The injective terminal-coordinate map between spaces of this same dimension is an isomorphism. Its normalized coordinate preimages Xi_{i,j} are a basis of A_d. The same argument in each filtration degree gives their leading graded string-orbit matrices. No Morita assertion is involved.

For a row occupancy nu=(nu_1,...,nu_n) with sum d, take the tuple j_nu consisting of the rightmost box of row r repeated nu_r times. The diagonal matrix

    e_nu = sum_{row(i)~row(j_nu)} E_{i,i}

commutes with every right matrix, since L_k, swaps and scalar terms preserve the row multiset. Hence e_nu belongs to A_d by G1. It has terminal coordinates those of Xi_{j_nu,j_nu}, so equality follows from the elimination just proved. The e_nu are orthogonal, sum to one, and decompose the regular left module as sum A_d e_nu.

The basis of A_d e_nu consists of Xi_{i,j_nu}, with i ranging over orbits of the stabilizer product S_nu_r and col(i_k)<=col((j_nu)_k). Evaluating at v_{j_nu} gives the distinct orbit sums sum_{h~i under stabilizer}v_h: all source entries are terminal, so these coefficients are exactly the defining terminal data. These orbit sums are precisely the monomial basis of

    Z_nu = tensor_{r:p_r>0} Sym^{nu_r}(V_{<=p_r}),

with its actual c-twist. Evaluation A_d e_nu -> Z_nu is W-linear, bijective on these bases, and therefore an actual module isomorphism. This establishes the needed projectivity in the finite IMAGE algebra, including the ordinary row-weight regular-module decomposition. It does not assert projectivity of Z_nu in arbitrary W-mod.

## 2. Ground projectivity without presupposing Morita

Assume c admissible: c_j-c_k integral implies equality. For r>=0 put d=Nr and D_r=C_c circledast det^r=C_(c+r1). Its tableau is A_(c+r1). Its content uniquely determines this column-strict tableau, even among all Col_c tableaux: separate charge cosets; in each coset the minimum occurs once in every column in that coset, since every such column contains the bottom row n. Strictness forces each occurrence into that column's bottom box. Remove all these boxes; repeat with the remaining nonempty columns. This reconstructs each column and proves uniqueness. G2 therefore makes D_r the only simple in its central-character summand, and V(A_(c+r1))=D_r. Other standards have no composition factor D_r because their scalar central characters differ.

Here is the multiplicity calculation left implicit in source17 Theorem6.2. For each e_nu, filter the finite p-module Z_nu by its simple Levi sections (the p-radical acts trivially on finite simple sections). Its Levi character is the product of the complete symmetric functions for the cumulative spaces V_{<=p_r}; expand in the product Schur basis for the column Levis. The coefficient of V(B) is the number of tuples of semistandard tableaux of shapes given by the partitions in column j of B-A_c, with alphabet consisting of the factors whose right endpoint has column >=j, and with total multiplicity nu_r for the factor labelled by row r. This counting follows directly by expanding each complete symmetric function in monomials and applying the semistandard Schur character formula, or successive horizontal-strip Pieri multiplication. It supplies an actual finite p-filtration after grouping semisimple Levi constituents and ordering the radical filtration, not merely an equality of W characters.

For B=A_(c+r1), the jth shape is the rectangle (r^{q_j}). Its allowed alphabet consists EXACTLY of the q_j terminal row boxes of rows reaching column j. Each of its r columns is strictly increasing of length q_j, so it contains every allowed letter once, in their forced order. Thus there is exactly one tuple of tableaux, and its row-r total multiplicity is r*p_r. The coefficient is one when nu_r=r*p_r for every r and zero for every other nu. This is the full determinant Kostka calculation.

Since A_d=sum A_d e_nu and A_d e_nu=Z_nu, the regular left module has D_r as a composition factor exactly once. Its central-character summand has only this one-dimensional simple. A finite-dimensional algebra with one one-dimensional simple has a unique indecomposable projective P and its regular module is P; multiplicity one implies length(P)=1, hence P=D_r. Equivalently the supported regular summand itself has dimension one. Therefore D_r is projective in A_(Nr)-mod.

For a surjection X->Y in the rational finite-W category R_c, choose r so that X circledast det^r and Y circledast det^r are finite sums of polynomial-image objects; include C_c as well. Polynomial degree is separated by the scalar trace/central degree operator, so the degree Nr component is a direct summand. The functor circledast det^r is exact with inverse circledast det^{-r}. A map C_c->Y becomes D_r->Y circledast det^r and has image in degree Nr. The just-proved projectivity lifts it across that degree component of X. Applying the inverse determinant twist lifts the original map. Thus C_c is projective in R_c. This assertion concerns R_c and its finite image summands, and says nothing about projectivity in the whole category of arbitrary W-modules.

## 3. Ordinary tensor dual adjunction and exactness

Under Skryabin, F_E(M)=Wh((Q_chi tensor_W M) tensor E). For finite E, ordinary evaluation E* tensor E->C and coevaluation C->E tensor E* are g-maps. Transport them through the genuine Skryabin equivalence and tensor associativity; the ordinary zigzag identities survive transport. Consequently F_E is both left and right adjoint to F_{E*}. Exactness follows because tensoring finite g-modules is exact, Skryabin's equivalence is exact, and tensoring preserves the generalized Whittaker category: choose an Engel flag for the nilpotent m-action on E and bound the length of a shifted diagonal product by the sum of its two nilpotence bounds. No claim that Wh is exact on arbitrary g-mod is used.

For E=V and E=V*, both functors preserve R_c. Indeed each polynomial-image object is a subquotient of a finite sum of U_d: a faithful finite module embeds the regular algebra in a finite direct sum via a->(a u_i), and every module is a quotient of a finite sum of regular modules. Exact tensor transport sends subquotients of U_d to subquotients of U_(d+1). Also V*=wedge^{N-1}V tensor det^{-1}; the exterior factor is the image of the antisymmetrizer in V^{tensor(N-1)}, so determinant shifts supply closure under V*. This proves the required exact adjoint on the whole rational category. Hence F_V preserves projectives THERE. V* is the ordinary dual with g-action (x phi)(v)=-phi(xv); it is distinct from V. The restricted transpose contravariant duality of category O and any finite-W contravariant circledast duality are different operations and must not replace V* in this adjunction.

Together with G2/G3 and the crystal-head/projective-summand construction owned by the lead, this ground lemma supplies the induction establishing that Wh(P(A)) is the finite-W projective cover for Std A. That induction is not inferred from a double centralizer. Its multiplicity comparison and natural Hom map are in the Schur-head package, Section4.

## 4. Actual retained-row tensor matrices and the image corner

Enlarge a nonempty pyramid by appending t FULL rows of length l, leaving l fixed. Write lambda_big=(p_1,...,p_n,l,...,l), n_big=n+t and q_j_big=q_j+t. Keep c unchanged. Then a_j_big=c_j+(q_j+t)-(n+t)=a_j exactly. The retained box embedding i->hat i preserves row and column but need not preserve the box number. Let alpha(v_i)=v_hat i. Define

    e=sum_{i in I_small^d} E_hat i,hat i
     =sum_{nu with zero occupancy of ALL deleted rows}e_nu.

Thus e belongs to A_big. It selects tensors using RETAINED rows, not tensors in the added rows. Each term of the displayed right x_k matrix stays within the retained rows, L_k survives identically, every swap survives identically, and the scalar roots agree. Therefore alpha is an ACTUAL H_d(a)-module isomorphism U_small->eU_big, generator by generator. The restriction map rho:B_big->B_small is surjective and rho(psi_big(h))=psi_small(h) for every h. This yields the nested raw right kernels, before any central-support conclusion.

The independent first centralizer gives

    A_small=End_H(U_small) = End_H(eU_big) = e End_H(U_big)e = e A_big e.

The middle equality is elementary: extend an H-map on eU by zero on (1-e)U; e commutes with H, so the extension commutes too. Its reverse is restriction. More concretely alpha transports each normalized terminal Xi_small_{i,j} to e Xi_big_{hat i,hat j} e. Restriction has exactly the same terminal coefficients; uniqueness follows from the elimination recurrence. Terms travelling through a deleted row do not survive compression, whereas all retained-row coefficients obey the same recurrence because q_j_big-q_k_big=q_j-q_k. This gives the actual corner/basis deletion theorem. It is a theorem about the finite images, not an unsupported equality of the infinite algebras W(lambda_small) and eW(lambda_big)e.

## 5. Levi contraction and saturation of supporting central blocks

For A in Col_c^d(lambda_big), write mu^(j) for the nonnegative decreasing column partition A-A_c. G2 identifies V(A) with C_c tensor tensor_j S_mu^(j)(C^{q_j_big}), with the column Levi action. The projector e is zero-occupancy in removed coordinates, as established by its tensor expression. The Schur functor realization by the Young symmetrizer makes its zero-occupancy part S_mu^(j)(C^{q_j_small}): its tensor basis uses only retained coordinates, and the symmetrizer preserves that subspace. This is zero exactly when mu^(j) has more than q_j_small nonzero rows; if nonzero it is precisely the small-column Levi module. Thus

    eV(A)=V(bar A) if all deleted-row entries equal c_j+1-row,
          0 otherwise.

This proves the contraction criterion at the module level. Here is the explicit original-generator calculation identifying the corner action. Write P_{ij;0}^{(r)} for the original signed-path T_{ij;0}^{(r)} supplier, not a mirror generator. Its summands are (-1)^{r-s} times products of s matrix factors E_{a_1b_1}...E_{a_sb_s}, with total degree sum(col(b_t)-col(a_t)+1)=r, col(a_t)<=col(b_t), row(a_1)=i, row(b_s)=j, row(b_t)=row(a_{t+1}), and STRICT col(b_t)<col(a_{t+1}) at every join. These are precisely source109 (3.10) with x=0. The original finite T/Gauss supplier must identify these P_{ij;0} with its generating series and supply original generation; no reflected-chart identification is used here.

On the inducing finite Levi module, every strict-col(a_t)<col(b_t) factor acts by zero, since the p-radical acts trivially. A scalar head shift is possible only on a diagonal matrix factor, so it does not rescue such a radical factor. Thus every surviving factor is within a single column, and the strict join condition makes the columns of successive factors strictly increasing. There is AT MOST ONE matrix factor in each column. After the head shift each such factor is E_{ab}+delta_{ab}rho_head(col(a)). If any intermediate joined row is deleted, entering it and leaving it occur in different column Levi factors. At an entering or leaving off-diagonal factor the number of removed coordinates of that column changes by one; no other factor acts in that column to reverse the change. Compression to zero removed-coordinate occupancy in EVERY column therefore kills the monomial. The endpoints i,j are retained, so any monomial involving a deleted row has such a boundary crossing. Scalar diagonal choices cannot remove that crossing. All surviving monomials have every row retained, and are exactly the small path sum, with the same sign, degree and join cutoff. This is the actual elimination of deleted intermediate paths; mere absence of a return in row indices was not a valid argument.

The head shift is NOT numerically unchanged. For column j, rho_head^big(j)=n+t-sum_(h<=j)(q_h+t)=rho_head^small(j)-(j-1)t. The global ordinary source column-reading position of a retained box changes from k to k+(j-1)t. Since the inducing highest weight at that box is A_box+k-1, its ordinary source Levi action changes by +(j-1)t on each retained diagonal matrix. Addition of rho_head cancels this exactly. In coordinates k=q_{<j}+s and row=n-q_j+s, the normalized retained diagonal highest weight is A_box+k-1+n-q_{<=j}=A_box+row-1, in both diagrams. The ordinary off-diagonal retained Levi actions agree through the Schur realization. Therefore the entire compressed head-normalized path action is exactly the small action, not just its eigenvalues. Formal Gauss elimination uses only finite products and inverses of series with constant term one, so the equality extends to every original D/E/F generator and to the original W image. This proves eV(A)=V(bar A) as modules for the specific corner identification of Section4, using the original path/generation and genuine induced-standard suppliers. It does not require an embedding of infinite W-algebras or a Morita theorem.

The projector is the same zero-occupancy operator on ALL finite-image standards, not merely on the detecting tensor. Let H_r=P_{rr;0}^{(1)} be the original row Cartan generator (the sum of diagonal matrix units in row r), and set kappa_r=sum_{j: r occurs in column j}c_j. On a head-normalized degree-d standard, H_r-kappa_r measures the number of polynomial coordinates in that row: the diagonal source/head cancellation above proves this from its actual Levi action. Its possible eigenvalues are 0,...,d. Therefore

    e = product_{deleted rows r} product_{h=1}^d (1-(H_r-kappa_r)/h)

is precisely zero occupancy in each removed row on every such standard. These row Cartans commute, and their polynomial has exactly the tensor action of Section4's e, so the finite-image identification proves it is the SAME algebra idempotent. This also justifies using the Schur compression for a standard subquotient of tensor space. Empty inner products for d=0 mean one.

Here is a route that proves simple survival without any specified highest-vector cyclicity or nonvanishing. Exactness of e(-) and eV(A)=0 kill every noncontractible simple quotient L_W(A). The elementary finite-idempotent lemma gives a bijection between simples of eA_big e and big simples L with eL nonzero: eL is simple since every nonzero vector generates eL; conversely for a corner simple S, Ae tensor S has a unique maximal submodule, the sum of its proper submodules. Every proper submodule is killed by e, since one with e-image S generates the whole induced module. Their sum is still killed by e and hence proper. Its simple quotient has e-image S and is unique. This proves both directions and uniqueness without Morita.

Every small Std tableau extends by full ground rows to a unique contractible big Std tableau: in each charge coset all retained polynomial entries are strictly above the new bottom ground entries, and the new rows have the same charge order. Thus contractible big Std labels biject with small Std labels. G2 gives the complete finite simple lists on both sides, and Section4 identifies their raw corners. The survivor subset of contractible big Std labels consequently has the same finite cardinality as the entire contractible label set. EVERY contractible big Std simple therefore survives e. Its e-image is simple and a quotient of eV(A)=V(bar A); the already proved unique head of that small standard identifies it with L_W(bar A). The unique-head input can be established noncircularly by the heads constructor's essential-cover proof: the category-O surjection P(bar A)->M(bar A), with P(bar A) in add(T), gives a surjection from the indecomposable Hecke projective to the Schur standard; its unique maximal submodule makes the standard head D(bar A). Genuine finite-W Morita transports that head. This head proof occurs BEFORE ground-row deletion and uses no supporting-block equivalence. No assertion about a chosen highest vector is needed.

For central saturation, suppose A is contractible and theta(B)=theta(A). In a charge coset, the minimum bottom entry c+1-n_big occurs exactly once for every column in that coset. Column strictness and B-A_c>=0 force these entries to occur only in the bottom row. They therefore fill the bottom row of B exactly as in A. Remove this full row and repeat t times. B is contractible. Hence no central character, and in particular no finite block, mixes contractible with noncontractible simples. G2's scalar central-character statement and finite-dimensional generalized central-character decomposition now produce a central idempotent f in A_big whose surviving simples are exactly the contractible Std labels. On complementary simples e acts by zero; hence e(1-f)=0, since a nonzero idempotent in a finite algebra acts nontrivially on some simple. Thus e=ef=fe.

## 6. Full finite central corner, both kernels, and faithful equivalence

Set A_f=fA_big f. Every simple A_f-module survives e by Section5. The ideal A_f e A_f is therefore all of A_f: otherwise the nonzero finite-dimensional quotient has a simple module killed by e, a contradiction. Choose a finite expression f=sum_k a_k e b_k. This establishes fullness without assuming the Morita conclusion.

For any A_f-module M, multiplication A_f e tensor_(eA_f e) eM->M has inverse m->sum_k a_k e tensor e b_k m. The displayed fullness identity proves one composite is identity; the balancing relation proves the other. Similarly multiplication e(A_f e tensor N)->N is an isomorphism for every eA_f e-module N. These formulas and their naturality prove inverse equivalences on ALL finite-dimensional supported-block modules. In particular e(-) is faithful there. The kernel of e(-) on A_big-mod is exactly the complementary central summand (1-f)A_big-mod. This is stronger than a simple-label bijection and uses no pre-existing Morita assertion.

The left operator f on U_big commutes with A_big, so by the independent second centralizer it is a member of B_big (in the right-action opposite convention). It commutes with B_big because B_big commutes with every element of A_big. It is therefore the SAME central support operator on both sides. The just-proved equivalence gives

    fB_big f = End_(A_f)(fU_big)^op
             = End_(eA_big e)(eU_big)^op = B_small.

This isomorphism is rho restricted to fB_big f. Consequently ker rho=(1-f)B_big and

    ker psi_small = psi_big^{-1}((1-f)B_big).

If big is stable (q_l+t>=d), psi_big is injective by the independent filtered longest-string argument. Transport f to H_d(a); then B_small=fH_d(a)f and ker psi_small=(1-f)H_d(a). The left annihilator of the supported module fU_big is the complementary central ideal (1-f)A_big, because U_big is faithful as a module for its image algebra. The retained module eU_big is a module for eA_big e, and its representation of that corner is faithful by Section4; it need not be stable under all of A_big. Kernels on the infinite W(lambda_big) are the inverse images of the corresponding finite-image kernels, not identical named ideals in the infinite W-algebra.

If the lead's ground/crystal induction has established U_big as an A_big-progenerator, then fU_big is an A_f-progenerator, and the explicitly proved full-corner equivalence transports it to U_small as an A_small-progenerator. This is the safe deletion propagation of projectivity. It does not assume the small Morita theorem in order to prove the corner. Under admissibility this combines with the independent second centralizer to give the finite-image Morita functor Hom_(A_small)(U_small,-), with the chosen opposite convention. Arbitrary c still has Sections1 and4, the actual kernels and double centralizers; central saturation and progenerator are not asserted there.

## Integration directions

1. Replace the canonical stable-definition phrase selecting added ground rows by zero occupancy of the deleted rows / retained-row tensor projection. Keep fixed l and root c_j+q_j-n.
2. Replace its existing circular F4/step1.2 by Sections4–6 and the explicit surviving Std support. Keep raw tensor existence separate from admissible central-corner and projective claims.
3. Replace double-centralizer step3.2's assumed Morita statement by Section2/3 plus the lead's crystal/projective-cover induction, then Section6 if deleting rows. Ground projectivity is in R_c and finite image categories, never arbitrary W-mod.
4. The projective-generator Definition retains the category-O detector T, not a full generator of all Col labels. U=Wh(T) is the finite-W progenerator only after the cover calculation; left adjoint recovery stays restricted to add(T).
5. Resolve G2/G3 and verify the original path/generation input consumed by Section5 before marking W1/D1 closed. Section5 now supplies the actual deleted-path compression and head/source normalization cancellation, rather than leaving those two computations open. The genuine original supplier remains an input, not a source citation or matrix smoke check. Old findings retain their exhausted identity and two ordinary rounds, with exactly the authorized one-time pass.
