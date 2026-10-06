# Dold–Kan local supplier

## Statement

For a commutative unital ring R, normalization of simplicial R-modules, $N(M)_n=\bigcap_{i<n}\ker d_i$ with differential $(-1)^n d_n$, is an exact equivalence from simplicial R-modules to nonnegative chain complexes of R-modules ([[def-simplicial-object-and-simplicial-commutative-ring]], [[lem-simplicial-normalization-prism-and-trivial-fibration-criterion]], [[def-chain-complex-in-an-abelian-category]]). Every simplicial R-module has the natural direct-sum decomposition $M_n=\bigoplus_{\alpha:[n]\twoheadrightarrow[r]}N(M)_r$ through its degeneracy maps. The inverse functor has $\Gamma(C)_n=\bigoplus_{\alpha:[n]\twoheadrightarrow[r]}C_r$; for a simplex operator phi:[m]->[n], the alpha-summand is sent by identity when alpha phi surjects onto [r], by $(-1)^r d_C$ when its image is [r-1], and by zero otherwise, with the resulting image-index map corestricted to its image. There are natural isomorphisms $N\Gamma\cong\mathrm{id}$ and $\Gamma N\cong\mathrm{id}$. No AC is needed. Here R is constant; this theorem does not identify modules over a variable simplicial coefficient ring with ordinary complexes over a single fixed ring.

## Proof

**Functorial direct-sum decomposition.** Every simplicial abelian group U has the natural isomorphism

⊕_{α:[n]↠[r]} N(U)r -> U_n,

whose α-component is U(α). Here is the full decomposition and uniqueness argument. In degree n+1, start x_{-1}=x and successively set z_i=d_i x_{i-1} and x_i=x_{i-1}-s_i z_i for i=0,…,n. Then d_i x_i=0. If the earlier faces d_j x_{i-1} vanish for j<i, the identity d_{i-1}d_j=d_jd_i and d_js_i=s_{i-1}d_j show

0=d_jx_i+s_{i-1}d_jz_i,  d_{i-1}d_jx_i=0.

A sum a+s_{i-1}b with d_{i-1}a=0 is uniquely split, because applying d_{i-1} recovers b. Therefore d_jx_i=0 and d_jz_i=0 for all j<i. This proves

U_{n+1}=N(U)_{n+1} ⊕ ⊕_{i=0}^n s_i(∩_{j<i}ker(d_j:U_n->U_{n-1})).

It is direct, not merely a spanning formula: the algorithm recovers every summand uniquely. Moreover the same algorithm applied to an element in ∩_{j<k}ker d_j has its first k summands zero. Apply that recursive splitting to each z_i; its further degeneracy indices begin at i. Induction on degree consequently produces exactly the sums s_{i1}…s_{it}w with i1≤…≤it and w normalized in degree n+1-t. Each surjection [n+1]↠[n+1-t] has exactly one such canonical degeneracy expression: its repeated fibers specify the collapsed adjacent positions, read in nondecreasing order. Thus the recursive uniquely recovered summands are in bijection with surjections, proving the displayed direct-sum isomorphism. The algorithm consists entirely of face/degeneracy/additive maps and hence is natural. Also d_n maps N(U)n to N(U)_{n-1} by d_jd_n=d_{n-1}d_j. This proves the normalization differential is defined, and its square is zero by d_{n-1}d_n=d_{n-1}d_{n-1} and normalization.

**Construct the inverse.** For a nonnegative chain complex C, set

Γ(C)_n=⊕_{α:[n]↠[r]} C_r.

For φ:[m]->[n] and the α-summand, put β=αφ. If Imβ is an initial interval [s] with s=r, map by identity to the summand indexed by β corestricted to its initial-interval image. If Imβ=[r-1], map by(-1)^r d_C to the summand indexed by β corestricted to its initial-interval image. In every other case use zero. The latter includes a gap in the image or loss of at least two terminal vertices. This convention follows normalization with the *last* face nonzero; the version using the first face instead has the corresponding reversed convention.

These formulas respect composition. If an intermediate image has a gap, a later initial-interval image necessarily lies below that gap and has lost at least two vertices, so its direct formula is also zero. Losing two or more terminal vertices remains zero after further restriction. If the first map loses none, the second rule is exactly the composite rule. If it loses one, the second map either loses none (giving the same single signed differential), has a gap (zero), or loses at least one more; the only possibly nonzero iterated case then gives d_C²=0. Identities plainly act identically. Thus Γ(C) is a simplicial abelian group, functorially in C.

Its degenerate summands are exactly those with r<n; every nonidentity surjection factors through an elementary degeneracy, and the simplicial rule makes that factorization the identity on the corresponding coefficient. The id_[n] coefficient C_n has all faces zero except the last, which is(-1)^n d_C. Therefore the normalization of Γ(C) is exactly C, with the correct differential. This identifies NΓ(C)=C naturally.

Conversely, the direct-sum map ΓN(U)->U above is bijective in every degree. For a simplex operator φ its compatibility can be checked on an α-summand. If αφ has a missing index j<r, factor through the jth face; that face vanishes on N(U)r. If the image is initial but has lost at least two terminal indices, first factor through the face r-1, which again vanishes on N(U)r. If no index is lost, the composite is U(αφ). If only the last index is lost, the restriction is the last face, equal to(-1)^r d_N. These are exactly the four Γ rules. Hence ΓN(U)->U is a natural simplicial isomorphism. The two natural isomorphisms prove the full equivalence, including faithfulness, exactness and replacement of simplicial additive objects by nonnegative complexes. Exactness can also be read directly from the natural direct-sum decomposition. For simplicial modules over a **constant** ring R, the entire argument is R-linear and proves the same equivalence. It does not turn a variable simplicial A-module into an ordinary chain complex over a fixed ring A; variable-base module transfer is still required.


