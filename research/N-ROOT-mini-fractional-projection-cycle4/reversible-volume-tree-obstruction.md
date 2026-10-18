# Precise limitation of a volume-weighted mass-inverse argument

Research result, 2026-10-18. This is an algebraic obstruction to one proof strategy. It is **not** an actual MINI mesh counterexample and does not refute physical H^s stability of the full projector. It shows why reversibility, finite total nodal volume, and strict diagonal dominance alone cannot establish the stronger cell-weighted estimate at every sub-half exponent.

Fix d>=1, any 0<s<min(1/2,d/2), b in (0,1), and a small positive c with c(1+b)<1. The c can be smaller than either actual MINI off-diagonal/local-diagonal ratio, so the example does not rely on large individual entries. Let B be an integer and take the infinite rooted B-ary tree. A node at depth n has measure

    m_n=(b/B)^n.

Its total measure is sum_n B^n m_n=1/(1-b). Put diagonal M_ii=m_i. For every parent-child edge set E_parent,child=E_child,parent=c m_child, and put all other off-diagonal entries zero. Define A=M^{-1}E. At a nonroot node its transition to its parent has weight c and its total transition weight to children is cb. Thus

    sum_j A_ij<=c(1+b)<1,
    m_i A_ij=m_j A_ji.

Moreover E_ij<=c min(m_i,m_j). Therefore I+A has a bounded inverse on bounded sequences by the Neumann series, and on l2(m) by the same reversible Schur bound. This is exactly the positivity/reversibility/diagonal-dominance mechanism used in the scalar condensed-mass argument.

For the load supported at the root, let a=(I+A)^(-1)e_root. Symmetry under tree automorphisms makes a constant a_n on each level. For n>=1 it satisfies

    a_n+c a_(n-1)+cb a_(n+1)=0.

Let r be the smaller-magnitude root of

    cb r^2+r+c=0,
    r=-2c/[1+sqrt(1-4c^2b)].

The discriminant is positive because c(1+b)<1. One root lies in (-1,0): the polynomial is positive at zero and negative at -1. The other root has magnitude greater than 1/b, because their product is 1/b. The unique bounded radial solution is consequently

    a_n=a_0 r^n,
    a_0=(1+cb r)^(-1).

The denominator is positive. This sequence directly solves the root equation and every other row, so uniqueness of the bounded Neumann-series inverse identifies it with the actual inverse load.

Now set the putative mesh size ell_i=m_i^(1/d). Its cell-weighted L2 norm would be

    sum_i m_i ell_i^(-2s)|a_i|^2
       =a_0^2 sum_(n>=0)
           [B^(2s/d) b^(1-2s/d) r^2]^n.                 (1)

Choose the fixed degree B large enough that the bracket exceeds one. Then (1) diverges, although the root load has weighted norm one. The unweighted l2(m) output remains finite because its corresponding level ratio is b r^2<1.

This also obstructs a uniform bound on finite trees: restrict the matrices to depths <=N, preserving their diagonals and deleting outer edges. Their row-sum bound stays below one. For each fixed pair of nodes, the inverse entries converge to those of the infinite tree: in the Neumann expansion every term below the distance to the deleted boundary agrees, while the remaining row-norm tail is bounded geometrically. If the finite weighted inverse norms were bounded by one common constant, Fatou on the node sums would give that same bound for the infinite root output, contradicting (1).

The degree B+1 is fixed while N grows. Total node measure stays uniformly bounded. Thus permitting constants depending on one fixed degree bound does not repair the argument.

Actual MINI realizability is deliberately not asserted. A simplicial mesh adds Euclidean embedding, local clique assembly, continuity/reproduction, and geometrical restrictions on how many descendants of a coarse source can occur at a given physical scale. Those additional properties could still prove physical H^s stability for every s<1/2. Conversely, the weighted estimate is stronger than physical H^s stability, because it charges even an almost constant field in an overrefined region. This example therefore rules out replacing the old gamma*rho^s condition by pure reversible-volume algebra; it does not decide the stronger actual full-projector theorem.
