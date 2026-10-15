# Strong prefix straightening: exact transport reduction

Proposal-only research. No live item, page, manifest, or runtime state edited.

## Source inspection

The complete `/tmp/hh17_cyclo_djm.pdf` was inspected with PyMuPDF, printed pp. 7–9 (PDF pp. 7–9). Proposition 3.18 states the full two-index, all-shape tableau-dominance conclusion. In **this downloaded preprint** its ordinary source locator is Murphy **[16, (4.18)]**, not (3.7); the bibliography identifies G. E. Murphy, *The representations of Hecke algebras of type A_n*, Journal of Algebra 173 (1995), 97–121, DOI https://doi.org/10.1006/jabr.1995.1079. Numbering in another version may differ. The ordinary proof is not supplied by DJM. Its proof transports the ordinary result componentwise, through shuffles which preserve all comparisons because each input/output has the same component-label assignment.

Mathas's complete preliminary notes, PDF pp. 26–30, prove the Bruhat comparison, lexicographic straightening, column generator law with only same-shape prefix control, and the ordinary dominance-ideal refinement. They do not supply the full cross-shape-prefix transport argument needed here. The ordinary Murphy article was located through its DOI and authoritative Elsevier metadata, but full text was not retrieved: ScienceDirect PDF endpoints returned HTTP 403; Elsevier's public XML endpoint returned article metadata only. No claim of reading Murphy's proof is made.

## Proved elementary transport lemma

For a row-standard tableau a, put

    A_a(j,m) = #{entries at most m in rows 1,...,j of a}.

Tableaux may have different shapes. Write a >= b if A_a(j,m) >= A_b(j,m) for every j,m. Let b be row standard with i in row p, i+1 in row q, and p<q. Thus b'=b(i,i+1) is row standard and b>=b'. If a is standard and a>=b, then both a>=b' and, whenever a(i,i+1) is standard, a(i,i+1)>=b'.

**Proof.** Only the cutoff m=i changes under either swap. If the swap raises the dominance of a, the conclusion follows from a(i,i+1)>=a>=b>=b'. Suppose it lowers dominance. At a row cutoff j where it lowers A_a(j,i), i lies above j and i+1 below j. The desired comparison is immediate unless A_a(j,i)=A_b(j,i) and b's swap does not lower its count at j. In this exceptional case either both i,i+1 are above j in b, or both are below j. If both are above, A_a(j,i+1)=A_a(j,i)=A_b(j,i)<A_b(j,i+1), contradicting a>=b. If both are below, A_a(j,i-1)=A_a(j,i)-1=A_b(j,i)-1<A_b(j,i-1), again a contradiction. All other row and label cutoffs are unchanged. This proves the assertion, including comparisons across different shapes. ∎

## What initial semistandard support already gives

Assume the independently proved semistandard Murphy basis of x_alpha H. In any standard refinement u of a semistandard tableau of type alpha, every node whose row-label is at most j lies in the first j rows, because column-strictness forces a label in row r to be at least r. All integers at most alpha_1+...+alpha_j therefore lie in the first j rows. Consequently

    A_u(j,m) >= min(m, alpha_1+...+alpha_j) = A_{t^alpha}(j,m).

Thus every Murphy coefficient of x_alpha h has left index u>=t^alpha, with **all shapes included**. Applying star gives the right-index analogue. This inference is a complete finite combinatorial proof; it does not transport arbitrary s or t.

## Smallest remaining sufficient Hecke lemma

The following one-generator assertion suffices to transport that initial support:

> Let u,v be standard, and let i,i+1 occupy one column of u. In the full standard-Murphy expansion of T_i m_uv, every term m_wz has w>=u(i,i+1) and z>=v, comparing prefixes across all shapes.

The symmetric assertion follows by star. This assertion is **not proved here**. Existing ordinary Garnir straightening only proves it for the same-shape terms, and dominance of the final shape alone does not establish it for higher-shape terms.

To verify sufficiency, start with x_alpha. Its simultaneous support lies in u>=t^alpha, v>=t^alpha, by the preceding initial-support result and uniqueness of coordinates. Choose a reduced word d(s)=s_{i1}...s_{ik}. All prefixes give row-standard alpha-tableaux b_r=t^alpha s_{i1}...s_{ir}; each step lowers prefix dominance, since these are length-increasing distinguished representatives. Form the left products in the order T_{i1},...,T_{ik}; their final product is T_{ik}...T_{i1}x_alpha=T_{d(s)}^*x_alpha. If i,i+1 share a row of a standard output u, multiplication is the scalar Q. If their swap is standard, the exact Hecke formulas involve only u and u(i,i+1), and the proved transport lemma preserves the comparison with b_r. If they share a column, the proposed one-generator lemma preserves the comparison with b_r as well, while also preserving the right-index lower bound. This proves the induction on the left word. Repeat on the right using star to reach m^alpha_st with both claimed prefix bounds. Composition-shape dominance after sorting alpha is a separate support result owned by the parent escalation.

This reduction precisely isolates the unproved authoring obligation; it is not a proof of the full strongest straightening theorem.
