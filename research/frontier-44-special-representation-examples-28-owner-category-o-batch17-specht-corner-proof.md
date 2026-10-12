# Batch17 ROUND1 — intrinsic Specht images and genuine central corners

Assume AC and the proved Wh quotient/Morita route in the companion note. This supplies the remaining intrinsic standard-image and outside-stable-range clauses. It corrects a faulty intermediate Hom_p identification in the actual BKHL proof rather than importing it. No readiness decision is supplied by this evidence.

## 1. Stable row idempotent and regular vector

In stable range q_l≥d choose d distinct longest rows r_i=n−d+i, and let w be their rightmost-box tensor in that order. Let e_S be the polynomial joint row-torus projector onto multiplicity1 in each chosen row and0 in every other row. The row torus belongs to W; its scalar origins are subtracted before forming the finite spectral projectors. Thus e_S belongs to the finite-W image and commutes with H. The space e_S M has dimension l^d d!, with basis the words using those rows once, in arbitrary column positions and tensor order. The leading Vust action on w gives precisely these independent words, and the cyclotomic PBW basis has that same size. Therefore wH→e_S M is an isomorphism of right regular H-modules. Morita makes e_S full and M=Ae_S, with w as its cyclic vector. Consequently Hom_A(M,X)=e_S X by evaluation at w.

The left corner embedding h:H→e_S A e_S is determined by h(b)w=wb. Its s_i is simultaneous permutation of the chosen row names: on w this equals place permutation, and the two operators commute with the right H action. This row operator can be constructed inside the derived row sl_d using its finite Weyl matrix and the integer row-degree sign correction; it does not require evaluating a nonintegral determinant character on GL_d.

Write C_1=sum_j c_j and C_2=sum_(j<k)c_j c_k. The corner x_i operator is

h(x_i)=e_S(-D_(r_i)^(2)+C_2+C_1+d−n−i+1)e_S.

Here D^(2) is the actual Gauss/path coefficient, including its polynomial value if its mode is above p_i; it is not set to zero by a false all-D cutoff. To verify the formula, apply the degree-two path expression to w. Its single-factor term is minus the row-i left shift. Diagonal two-factor terms give C_2+C_1−c_l. Negative paths through unused rows in the last column give −(q_l−d+i−1), and those through earlier chosen rows additionally give minus the corresponding row transpositions. Hence the displayed operator gives the left shift plus c_l+q_l−n plus sum_(j<i)(ji), exactly wx_i. Since it is a W corner element it commutes with right H; equality on the regular cyclic vector proves equality as corner operators. The exact symbolic two-row/two-column check with arbitrary c_1,c_2 also verifies this identity, separately from this general argument.

## 2. The actual Specht fibre, without the false p-Hom embedding

For a polynomial label A put mu^(j)=the column differences A−A_c, a partition of d_j, and define the intrinsic affine Specht module

S(A)=H_d⊗_(H_(d_1,…,d_l)) tensor_j ev_(c_j+q_j−n)^* S^(mu^(j)).

The affine algebra is free over this parabolic subalgebra by its already-proved PBW/coset basis, so its dimension is the multinomial times product of Specht dimensions. On V(A)=tensor_j L(mu^(j)) with the determinant origins, e_S V(A) splits into fibres according to which d_j chosen row names occur in each column. Use the CANONICAL fibre with the first d_1 names in column1, the next d_2 in column2, etc. Classical Schur–Weyl makes this fibre tensor_j S^(mu^(j)); it is not the entire Hom_h(V^d,V(A)).

Within this fibre, permutations inside the column groups have their ordinary Specht action. Apply the preceding D^(2) formula. At the first name of group j the degree-two diagonal value is C_2+C_1−c_j−q_j+d−i+1, so h(x_i)=c_j+q_j−n. For later names in that group the same calculation has the extra negative row transpositions from its previous names; it gives that scalar plus the group Jucys–Murphy sum. Off-colour terms cancel because earlier names lie in earlier columns and later names lie in later columns. Thus this fibre has exactly the displayed affine evaluation Specht action. Simultaneous row permutations carry it to every colour-assignment fibre and span e_S V(A). Induction therefore gives a surjection S(A)→e_S V(A). Schur–Weyl gives dimension multinomial times product of Specht dimensions on the target, so the map is an isomorphism. The established Wh/Morita comparison identifies this with pi N(A).

BKHL printed46's literal Hom_h(V^d,Z_b)=Hom_p(V^d,Z/Z_>b) is not used. In the stable one-row/two-column,d=1 example, Hom_h(V,Cv_1)=C but Hom_p(V,Cv_1)=0 since E_12v_2=v_1; the genuine W map sends v_2 to v_1. Moreover the whole h-Hom has multiple colour-word fibres, whereas its intended subgroup fibre is only one. The regular-vector/corner evaluation above supplies the correct extension and keeps the full intrinsic Specht claim.

## 3. Highest type of the standard, needed only for the row cut

For the original left-justified pyramid and a Std tableau, the tensor of its column highest vectors is a W-highest vector of row type R(A). The exact source convention is

(u−i+1)^p_i D_i(u−i+1)v=product_(entries a in row i)(u+a)v,

so its row-torus eigenvalue is sum a+p_i(i−1). The shift is essential. PBW shows the corresponding universal highest module has a one-dimensional highest line and unique simple head.

Here is the cyclicity argument needed beyond a bare highest-vector assertion. Remove the last column of height m. For its fixed longest Weyl word (m−1; m−2,m−1; …;1,…,m−1), move successively from its highest to lowest vector. Each active pair of rows is present in EVERY column, since column heights are nonincreasing. Restrict the path formulas to these two rows on prefix vectors differing from their highest vectors only by that root. A term leaving these rows kills the vector: take its earliest column and last visit outside the pair; its remaining right factors have only that root's weight, and the offending positive matrix kills the relevant column vector. Thus the two-row Yangian action equals the two-row column action on these special vectors.

The required two-row cyclicity is elementary. Write a would-be extra highest vector in L(prefix)⊠L(a,b) as sum_(i=0)^k m_i⊗f^(k−i)v. The top coefficient forces m_0 highest. The next coefficient and the finite T cutoff give

(a−b−k) product_j(a_j−b−k)=0.

The ordered column/row hypotheses make every factor nonzero; hence no extra highest vector exists. Taking the restricted transpose dual turns this unique-socle statement into cyclicity in the reversed order. It also applies to a highest quotient because its dual embeds in the universal highest dual, whose positive-root kernels are only its highest line by PBW. Work from right to left through the prefix columns: if their top entry is in the last column's coset it is at most the active last entry and strictly above its own bottom entry, so the required inequalities hold; if it is in a different coset the integer inequalities are vacuous. The last-column Weyl word condition ensures that active last entry is at least the original top entry. Hence each adjacent Weyl step lies in the submodule generated by the preceding vector. After reaching the last-column lowest vector, positive mode1 generators generate its entire finite Levi module. Induct on the prefix lowering degree, using the actual coproduct F leading term modulo smaller prefix degree, to generate the whole tensor standard. Thus V(A) is cyclic highest of type R(A). No classification of all finite-W simples is used.

The simple Wh image of K(A) for Std A is a quotient of V(A); cyclicity identifies it with that unique highest head. This establishes the true row-label compatibility as well as its row-torus lowest-last-row property.

## 4. Enlarge, cut the bottom rows and get a CENTRAL block corner

Enlarge every column height by r≥d, giving n+r rows and the SAME c. The Hecke roots c_j+(q_j+r)−(n+r) are unchanged and the larger tensor is stable. Its bottom r ground rows have entries c_j+1−(n+k), 1≤k≤r. A polynomial column-strict label with those fixed entries is contractible; deleting them gives an original label. In one coset all origins coincide. The smallest required entry c_kappa−n−r+1 occurs once in each of its columns and cannot occur above the bottom row by the strict-column ground bounds. Its multiplicity in the central-character content therefore forces every bottom entry; delete that row and repeat. Different cosets cannot supply those entries. Thus contractibility is constant on an entire central-character block, not merely on a sequence idempotent.

In the larger finite-W image let e project to zero polynomial degree in its last r row-torus coordinates. Its tensor space eM is exactly the original V_c^tensor d, and the Hecke formula restricts to the original one. Therefore End_H(eM)=eA_large e=A_small by the already-proved first centralizer identity. For a Std simple highest image, the cyclicity result says its last-row degree is minimal at the highest vector. If contractible, that vector has degree0 and e acts nontrivially. If not contractible, the positive last-row degree cannot decrease under PBW negative generators, so e annihilates it; repeat row by row. Contractibility was just proved block constant, so e detects ALL simples in selected blocks and NONE elsewhere.

Morita identifies eM as a right-H projective module whose head contains every simple in precisely those selected blocks. It is therefore a progenerator for fHf, where f is their CENTRAL block sum. Its other endomorphism algebra is A_small, and the second centralizer gives B_small=fHf. This proves the genuine outside-stable-range corner. Individual joint sequence projectors are not called central. The construction concerns admissible-origin categorical realizations; the arbitrary-origin filtered tensor double-centralizer statement is preserved separately. Arbitrary root multisets have the explicit admissible charged-pyramid realization, choosing maxima only in the integer order within each coset.

For the level-one N=2,d=3 example, f is the sum of trivial and standard S_3 blocks, its image has dimension1+4=5, and the killed sign block is the antisymmetrizer because wedge^3 C^2=0. The native one-column Vust example has e=0, not E_12; at d=2 its commutant dimensions are2 and10 as originally intended.
