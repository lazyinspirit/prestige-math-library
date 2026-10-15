# Full ordinary strong-prefix straightening by generic spectral coordinates

Proposal only; no live item, page, manifest, or runtime state changed.

## Statement and precise local inputs

Let A=Z[Q,Q^{-1}], K=Q(Q), and let H_A be the ordinary Hecke algebra with (T_i-Q)(T_i+1)=0. For any composition alpha of n, row-standard alpha-tableaux s,t, and x_alpha=sum_{w in S_alpha}T_w, write

    m^alpha_st = T_{d(s)}^* x_alpha T_{d(t)}.

Assume the already proved integral standard-Murphy basis (the lexicographic basis theorem suffices). Then its unique expansion of m^alpha_st has zero coefficient at every m^mu_uv for which u does not dominate s in all tableau prefixes, or v does not dominate t in all tableau prefixes. In particular, the comparisons include **every output shape**, not only alpha. The shape-support conclusion mu dominates sorted(alpha) can be supplied independently by the parent escalation; it also follows from the initial spectral support established below.

The sole representation-theoretic input is the locally proved published `thm-separated-hecke-residues-give-seminormal-idempotents-and-bases`, specialized to K with q=Q. Its proof, including nonsingular invariant forms and faithful direct sum of the Murphy cells, was read fully. It supplies finite-dimensional modules W_mu, one for each partition, with basis f_u indexed by standard mu-tableaux; orthogonal nonzero norms g_u=<f_u,f_u>; a symmetric invariant form for the star involution; and the exact generator action:

* if i,i+1 share a row, f_u T_i=Q f_u;
* if they share a column, f_u T_i=-f_u;
* otherwise u'=u(i,i+1) is standard and f_u T_i=c_u f_u+a_u f_{u'}, with a_u nonzero.

Here a_u is either 1 or [1+rho]_Q[1-rho]_Q/([rho]_Q[-rho]_Q), where |rho|>=2 for a standard swap, so it is nonzero in K. The direct sum of the W_mu is faithful. Their squared dimensions sum to n!, which equals dim_K H_K. These input facts do not assert all-shape-prefix straightening. The published supplier uses same-shape Murphy-cell/JM triangularity; no instance of the conclusion below is used.

## 1. Spectral rank-one coordinates

For standard u,v of shape mu define R_uv, supported on W_mu and zero on the other W_nu, by

    w R_uv = <w,f_u> f_v.

Since every g_u is nonzero, these are a basis of the product of the endomorphism algebras. The faithful representation map has equal-dimensional domain and target, hence is an isomorphism. Thus the R_uv are also a coordinate basis for H_K. Invariance of the form gives

    w (T_i R_uv) = <w T_i,f_u> f_v = <w,f_u T_i> f_v,
    w (R_uv T_i) = <w,f_u> (f_v T_i).

Consequently left multiplication changes only the first tableau, and right multiplication only the second. In either case the possible new index is the old one or its standard i,i+1 swap; the column and row cases are scalars. A standard swap has a nonzero coefficient in both directions. This argument fixes the orientation of the two indices and requires no choice of normalization of matrix units.

## 2. Initial spectral support of x_alpha

Let B_r be the consecutive interval of alpha_r labels belonging to row r of the initial tableau t^alpha. The parabolic identity T_i x_alpha=Q x_alpha holds for every pair i,i+1 inside one B_r. Write x_alpha=sum a_uv R_uv.

Fix a shape mu and a right index v. If i,i+1 lie in one column of u, the coefficient equation at R_uv in T_i x_alpha=Q x_alpha is -a_uv=Q a_uv: a different standard tableau cannot swap into u because u(i,i+1) is nonstandard. Thus a_uv=0 in K.

If u'=u(i,i+1) is standard, the coefficient equation at R_uv has the form

    Q a_uv = c_u a_uv + a_{u'} a_{u'v},

where the seminormal off-diagonal scalar a_{u'} is nonzero. Therefore a_uv=0 forces a_{u'v}=0. The converse follows from the coefficient equation at R_{u'v}. Only these two first indices can contribute to either equation. In particular, zeros propagate across every standard swap inside a block B_r; no assertion about Q-c_u is needed.

Replace the entries of u in B_r by the repeated label r, obtaining its row-label tableau S. Because u is standard and the B_r are ordered intervals, S is weakly increasing in rows and columns. For fixed S, its standard refinements are precisely the choices of linear extension of the node-order poset in each equal-label class; all labels in an earlier class are smaller than all labels in a later class. Every two linear extensions of a finite poset are connected by adjacent swaps of incomparable elements: to transform one extension into another, move the first desired element left across the elements preceding it, each of which must be incomparable, and continue inductively. Such a swap is a standard swap of consecutive integers inside B_r. Hence zero propagation connects every standard refinement in a fibre.

Suppose S repeats a label in one column. Its weak column order supplies a pair of vertically adjacent nodes with that same label. These form a cover pair in the node-order poset restricted to their equal-label class: in a Ferrers diagram there is no node strictly between two vertically adjacent nodes in product order. Any cover x<y of a finite poset occurs consecutively in some linear extension. To prove this, put all elements z<y other than x first in a linear extension; this set is an order ideal because an element above x and below y would contradict the cover relation. Then put x followed by y, and complete the extension. Thus one refinement of S places consecutive integers i,i+1 from B_r vertically adjacent in that column. Its coefficient is zero by the column equation, so every refinement in that fibre has coefficient zero.

Every supported first index u therefore has S column-strict, i.e. S is semistandard. A column-strict positive-integer tableau has label at least r in row r. Set b_j=alpha_1+...+alpha_j. All entries 1,...,b_j of a standard refinement u consequently lie in its first j rows. For every label cutoff m,

    #{entries <=m in first j rows of u} >= min(m,b_j)
      = #{entries <=m in first j rows of t^alpha}.

Thus u>=t^alpha across all shapes. The right parabolic equations x_alpha T_i=Q x_alpha give exactly the same argument for v. We have proved simultaneous initial spectral support u>=t^alpha and v>=t^alpha.

## 3. Cross-shape elementary-swap lifting

For any row-standard a write A_a(j,m) for the number of entries <=m in rows 1,...,j. Let b be row standard with i in row p and i+1 in row q, where p<q, and let b'=b(i,i+1). If a>=b and a is standard, then a>=b' and every standard swap a'=a(i,i+1) also satisfies a'>=b'.

Indeed b>=b', and only the cutoff m=i changes. If a's swap raises its counts, the result is immediate. If it lowers them, consider a row cutoff j at which it does so. The only potentially failing case is A_a(j,i)=A_b(j,i) while b's swap does not lower its count at j. If both i,i+1 lie above j in b, then

    A_a(j,i+1)=A_a(j,i)=A_b(j,i)<A_b(j,i+1),

contradicting a>=b. If both lie below j in b, then

    A_a(j,i-1)=A_a(j,i)-1=A_b(j,i)-1<A_b(j,i-1),

again a contradiction. This proves the lifting assertion for arbitrary shapes of a and b.

## 4. Transport arbitrary s and t in spectral coordinates

Choose a reduced expression d(s)=s_{i1}...s_{ik}. Each prefix is a distinguished row coset representative: if an initial-row pair were inverted by a prefix, its corresponding inversion would persist in the final length-additive permutation. Equivalently, distinguished representatives are closed under such reduced prefixes by parabolic length additivity. Hence b_r=t^alpha s_{i1}...s_{ir} is row standard for every r. Since each step increases the length, i_r lies in an upper row of b_{r-1} and i_r+1 in a lower row. Thus each step lowers the tableau prefix counts in exactly the situation of Section 3.

Starting with x_alpha, apply T_{i1},...,T_{ik} successively on the left. The final element is T_{ik}...T_{i1}x_alpha=T_{d(s)}^*x_alpha. By Section 1, a standard spectral index a either stays fixed, or changes to its standard adjacent swap. The fixed case preserves a>=b_r because b_{r-1}>=b_r. The swapped case preserves it by Section 3. The second index is unchanged. Induction proves that every surviving R_uv satisfies u>=s and v>=t^alpha. Apply the identical right-handed argument along a reduced expression of d(t). It gives spectral support

    m^alpha_st = sum c_uv R_uv,    c_uv !=0 => u>=s and v>=t.

There are no higher-shape generator errors in these exact spectral coordinates.

## 5. Return to the integral Murphy basis without losing support

Let P be the finite set of ordered pairs (u,v) of standard tableaux of a common partition shape. Give P the partial order

    (u,v) >= (s,t) iff u>=s and v>=t in all prefixes.

It is a partial order even across shapes: equality of all row-prefix counts determines the row of each label, hence determines each row-standard tableau. Apply Section 4 to every **standard** Murphy element m_st. Its coordinates in the R_uv basis vanish unless (u,v)>=(s,t). Thus the transition matrix C from the standard-Murphy basis to the spectral basis belongs to the incidence algebra of P.

Both families are bases of H_K. Therefore C is invertible. Choose any linear extension of P; C is triangular, so each diagonal entry is nonzero. Write C=D(I+N), where D is its invertible diagonal part and N has only strict-order entries. A product of |P| strict-order entries is zero, since it would require a strictly increasing chain with |P|+1 elements. Hence

    C^{-1}=(I-N+N^2-...+(-N)^{|P|-1})D^{-1}.

Every term still has support only on comparable ordered pairs in the same direction. Therefore the inverse transition also belongs to the same incidence algebra. In particular, each R_uv expands only in standard Murphy m_wz with w>=u and z>=v.

Now use the spectral expansion from Section 4. Substituting the inverse transitions gives only m_wz with w>=u>=s and z>=v>=t. This proves the full strong-prefix assertion over K. The standard-Murphy coordinates of the original element m^alpha_st already belong to A by the integral basis theorem. Since A embeds in K, each coordinate proved zero over K is zero in A. Every homomorphism A->R with Q mapping to a unit specializes these zero identities, proving the assertion over every commutative coefficient ring. No specialized semisimplicity or quantum-integer division is used.

## Optional shape-support consequence

The preceding initial spectral argument also proves mu dominates sorted(alpha). In a surviving semistandard S of shape mu and type alpha, pick the k labels whose multiplicities are the k largest parts of alpha. Column-strictness permits at most k of those labels in each column. Their total multiplicity is therefore at most sum_c min(k,height(c))=mu_1+...+mu_k. This is exactly mu>=sorted(alpha). Spectral multiplication in Section 4 preserves shape. In the inverse transition in Section 5, w>=u implies shape(w)>=shape(u) at the cutoff m=n. Thus the same shape-support conclusion holds in the final Murphy expansion. This is an optional consequence and does not replace the parent's independent proof.

## Scope and verification

This is a general proof, using finite-poset and finite-matrix arguments and the exact already proved generic seminormal representation theorem. No finite-rank computation is substituted for a general argument. The unavailable Murphy article is no longer a logical input. The research proof needs owner integration and dependency review before it becomes a live item.
