# Braid Groups diagram supplement — lane 10

Reviewed the bound snapshot for `ex-a-left-garside-normal-form-computation-in-b-three` and all three listed local PNG screenshots at original resolution (1200×1400, 1200×1400, and 1200×927). The snapshot hash matches the assigned source hash and current source. Review was local-only.

## Assessment

A compact table would be a useful supplement for the greedy factor extraction and the left-weighting check. The source already spells out the complete calculation, so the absence of a diagram is not itself a defect. The source gives algebraic generator words, not a geometric braid representative with crossing and endpoint conventions; a strand drawing would add unsupported choices.

The calculation checks out. With \(\Delta=\sigma_1\sigma_2\sigma_1=\sigma_2\sigma_1\sigma_2\),

\[
\Delta^{-1}\sigma_1\sigma_2
=(\sigma_1\sigma_2\sigma_1)^{-1}\sigma_1\sigma_2
=\sigma_1^{-1},
\]

so

\[
x=\sigma_1^{-1}\sigma_2
=\Delta^{-1}(\sigma_1\sigma_2)\sigma_2
=\Delta^{-1}a_1a_2,
\qquad a_1=\sigma_1\sigma_2,\quad a_2=\sigma_2.
\]

Thus \(A(x)=a_1a_2=\sigma_1\sigma_2^2\in B_3^+\). The source's scaling identity and \(\sigma_1\wedge_L\sigma_2=1\) give

\[
\Delta\wedge_L A(x)
=(\sigma_1\sigma_2\sigma_1)\wedge_L(\sigma_1\sigma_2\sigma_2)
=(\sigma_1\sigma_2)(\sigma_1\wedge_L\sigma_2)
=\sigma_1\sigma_2=a_1.
\]

The next greedy factor is \(\Delta\wedge_L a_2=a_2\), so the order is \(a_1\) then \(a_2\), with remainder 1. Since the first meet has length 2 while \(\ell(\Delta)=3\), \(\Delta\) does not left-divide \(A(x)\). The unique maximal-exponent pair is therefore \((p,A)=(-1,\sigma_1\sigma_2^2)\), hence \(p(x)=-1\). The left-weighting identity is \((a_1a_2)\wedge_L\Delta=a_1\); it follows from the same meet because meet is commutative. By the stated criterion \(p(x)\ge0\) iff \(x\in B_3^+\), this negative exponent correctly proves \(x\notin B_3^+\).

If permutation labels are included, follow the source's map direction \(\pi:B_3^+\to S_3\): \(\pi(a_1)=s_1s_2=(1\,2\,3)\) and \(\pi(a_2)=s_2=(2\,3)\) in its composition convention. There is no crossing or endpoint-permutation claim for a geometric braid in this example.

## Diagram guidance

Use an algebraic table with columns for the current positive remainder, its left meet with \(\Delta\), the extracted factor, and the next remainder:

\[
\begin{array}{c|c|c|c}
\text{remainder} & \Delta\wedge_L\text{remainder} & \text{factor} & \text{next remainder}\\
\sigma_1\sigma_2^2 & \sigma_1\sigma_2 & a_1 & \sigma_2\\
\sigma_2 & \sigma_2 & a_2 & 1
\end{array}
\]

Label the resulting form \(x=\Delta^{-1}a_1a_2\), \(p=-1\), and \(A(x)=\sigma_1\sigma_2^2\). The primary receipt reports zero TikZ diagrams and zero diagram failures.
