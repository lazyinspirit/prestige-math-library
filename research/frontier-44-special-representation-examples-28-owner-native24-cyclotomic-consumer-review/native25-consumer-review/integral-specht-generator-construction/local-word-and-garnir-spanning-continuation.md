# Local Garnir standard-spanning proof and precise brick-word residuals

These are research-only proof constructions, not acceptance records. Crossings denoted psi throughout this note are KMR crossings k, with arrows i→i−1. They are transported to BK/native24 by the explicit signed gauge in presentation-construction-and-source-evidence.md; identifying them directly with -native tau was an initial error now corrected. No full universal Z freeness is needed.

## A local length proof of standard spanning

Fix a partition lambda and the row-reading tableau T0. Use the affine integer KLR row permutation module M, induced from its one-dimensional successive-residue row segments. Its basis is m_T=psi_(w_T)m0 for all row-strict tableaux T, by the supplied integer PBW theorem. Preferred reduced words can be used throughout. Crossing-word straightening has integer coefficients: dot slides produce shorter crossing words; quadratic reductions remove two crossings; braid corrections remove three; commuting swaps preserve crossing number. Moving all dots to the right and splitting a permutation into its minimal row coset representative and its row stabilizer consequently expresses a word with at most N crossings applied to m0 as an integer sum of m_U with length(w_U)<=N. Positive dot powers kill m0, and a nontrivial right row factor kills m0 by an internal row crossing. This filtration assertion uses spanning alone, not a representation-faithfulness assumption.

For any nonstandard row-strict T, choose a vertically inverted pair A=(a,b), (a+1,b), so T(a,b)>T(a+1,b). Let upper suffix X be the nodes (a,b),...,(a,lambda_a), and lower prefix Y the nodes (a+1,1),...,(a+1,b). Row strictness implies every T-entry in X exceeds every T-entry in Y. The positions X followed by Y form a consecutive interval in row reading. Let G_A agree with T0 outside this interval and fill its positions Y first and X second with that interval's successive integers. Its permutation w_G has exactly |X||Y| inversions, all between X and Y. Define w=w_T w_G^(-1), so T=wG_A. The one-line list for w is the one-line list for w_T with this contiguous interval reordered as Y then X. This removes all |X||Y| cross inversions and preserves all other inversions: within X or Y their order is unchanged; for an outside position the total number of comparisons with entries of the contiguous interval is unchanged. Therefore length(w)=length(w_T)-length(w_G), proving the required length-additive Garnir factorization explicitly for every inverted pair. No lemma-number appeal is needed.

For the belt's brick shuffles, G_A is the unique shuffle in which all lower-row bricks precede all upper-row bricks. Among the row-strict brick shuffles it has maximal crossing length relative to T0: swapping one out-of-order adjacent upper/lower brick reduces inversions by e^2, and bubble-sorting realizes every other shuffle by such swaps. Let T_A be the opposite (minimal-crossing) brick tableau. Each row-strict brick shuffle is uT_A for a unique minimal left coset representative u of S_f×S_(k-f), with length(w_(uT_A))=e^2 length_(S_k)(u)+length(w_TA). In particular the representative u_G of G_A uniquely maximizes length. The brick swaps and these shuffle permutations are fully commutative as strand permutations: there is no three-strand reversed subsequence, because each of the two sorted blocks preserves its internal order. Their crossing words therefore require only distant commuting swaps, so length-additive words can be chosen without braid correction.

Define g_A=sum_(u in D_A) product_(letters r in a reduced brick word for u)(psi_(w_r^A)+1)e(i_A) psi_(w_TA). Expanding the products, the unique summand with total crossing length length(w_G) is the complete product in u_G; it is exactly psi_(w_G) after distant commuting moves. Every other summand omits a whole e^2-crossing brick word or comes from a strictly shorter u, and hence has fewer crossings. The preceding crossing filtration then gives

    g_A m0 = m_G + sum_(U row-strict, length(w_U)<length(w_G)) c_U m_U,

with integer c_U. This leading-term assertion needs neither sigma^2=-2sigma nor the corrected adjacent-brick braid. When the belt has no bricks, g_A=psi_(w_G) and the same assertion holds with the empty lower sum.

In the universal quotient impose g_A z=0. Induct on N=length(w_T) for row-strict tableaux. If T is standard, keep it. Otherwise factor T=wG with additive length as proved above. Reduced-word straightening gives psi_(w_T)z=psi_w psi_(w_G)z plus terms having fewer than N crossings. Replace psi_(w_G)z by the negative lower-length sum from g_A z=0. Every term psi_w psi_(w_U)z now has fewer than N crossings. Apply the crossing filtration to return to row-strict basis vectors, all of length<N, then apply induction. Thus the standard vectors span the universal quotient over Z, Q, or K. The grading follows directly from homogeneity of the four relations and the tableau degree change under each crossing, supplied by the reviewed BKW degree construction.

## Fully explicit boundary identity for e=2

Work on T, where all dots and all internal crossings kill v. Localize to two consecutive bricks, write a=psi_1,b=psi_2,c=psi_3 and sigma=b a c b on residue word0101. The word a c b has top residue word0011. The double-edge quadratic therefore gives

    b sigma v = -(y_3-y_2)^2 a c b v.

The equal-colour mixed relations imply

    (y_3-y_2)a c = a c(y_4-y_1)-a-c.

Since (y_4-y_1)b v=0, this yields

    b sigma v = (y_3-y_2)(a+c)b v.

In a b v, the equal-colour slide y_2a=a y_1+1 and the unequal-colour slide through b give (y_3-y_2)a b v=-b v. In c b v, the equal-colour slide y_3c=c y_4-1 gives (y_3-y_2)c b v=-b v. Thus b sigma v=-2b v. Multiplying on the left by b a c (so sigma=(b a c)b) proves sigma^2v=-2sigma v. These formulae are actual local word calculations, not a bounded smoke result or an appeal to a diagram theorem.

## Exact all-e boundary residual in words

For e>=3 define source words

    W_e = (psi_e ... psi_1)(psi_(e+1) ... psi_2)...(psi_(2e-1) ... psi_e),

which is the fully commutative reduced e-brick swap of length e^2. Write W_e=psi_e V_e psi_e, where V_e is this displayed word with its first and last letters removed. The top residue word of V_e psi_e v is s_e(0,1,...,e-1,0,1,...,e-1); its positions e,e+1 carry0,e-1. With KMR arrows this is a forward arrow, and the quadratic gives

    psi_e W_e v = (y_(e+1)-y_e)V_e psi_e v.

Slide y_e and y_(e+1) through the explicitly displayed V_e, using y_s psi_s=psi_s y_(s+1)-delta and y_(s+1)psi_s=psi_s y_s+delta. The y_e path encounters exactly one equal-colour crossing, the psi_1 in the initial descending run of V_e; its contraction sign is+1. The y_(e+1) path encounters exactly one equal-colour crossing, the psi_(2e-1) beginning the final descending run; its contraction sign is-1. The terminal dots kill v. Hence, exactly,

    psi_e W_e v = -C_e^- v - C_e^+ v,

where C_e^- is V_e with that initial psi_1 deleted, followed by psi_e, and C_e^+ is V_e with that final-run psi_(2e-1) deleted, followed by psi_e. For example e=3:

    C_3^- = psi_2 psi_4 psi_3 psi_2 psi_5 psi_4 psi_3,
    C_3^+ = psi_2 psi_1 psi_4 psi_3 psi_2 psi_4 psi_3.

For general e these are precise words of length e^2-2. The remaining concrete identities needed to complete the all-e boundary proof are

    C_e^- v=psi_e v,       C_e^+ v=psi_e v

under y_s v=0 and psi_t v=0 for t not divisible by e. The source's D1/D2 string-straightening diagrams prove these contractions by an interior-strand recurrence, but that recurrence has not yet been converted into a standalone index-by-index local word proof here. The preceding equations isolate the residual exactly and prevent an unproved 'R-matrix normalization' shortcut.

## Adjacent-brick residual

For three bricks put Sigma_1=W_e on positions1,...,2e and Sigma_2=W_e with every crossing index shifted by e. The exact remaining word identity is

    (Sigma_1 Sigma_2 Sigma_1-Sigma_2 Sigma_1 Sigma_2-Sigma_1+Sigma_2)v=0,

on the residue word(0,...,e-1)^3, with every dot and every crossing whose index is not a multiple of e killing v. The source provides its full two-boundary-correction diagram recurrence; no standalone all-e word reduction has yet been authored. Dimension2, R-matrix faithfulness, and generic endomorphism formulas are not assumed.

## Status

The length-additive Garnir factorization and universal standard-spanning construction above remove that prior obligation. The e=2 boundary/quadratic proof is explicit. For e>=3 the two precisely defined contraction equalities, and for every e the three-brick corrected-braid equality, remain the concrete unresolved identities for a fully local generator-preserving comparison. A source-proof appendix may be prepared from the now-retrieved complete LaTeX polylines, but source import alone will not be reported as closure.
