# Strict Γ boundary: successor clarification of the sealed Gram construction

Run `frontier-44-special-representation-examples-28`; author `/root/repair_cell_head_classification/native50_integral_constructor`; same coherent first Step3 binding pass. This clarification supersedes only the incomplete verbal Γ_T definition in SectionA of `proof-construction.md`, SHA256 `bfdb9578adeeb86667913e3cd44b5b268f216b33ed76d9fab1c87bdf68e2be42`. That sealed proof and its existing handoff are unchanged. No canonical/native writes or acceptance stamps.

## Exact source reading and correction

Re-read visually PDF53 / printed47, final displayed definition preceding5.7, in the complete Mathas manuscript SHA256 `8cfeb611a95a3ff25cb95ad22bfd3a68475818301c34b04d131a8480a1b997e0`. It states

`Γ_T(i,j)={(k,l)∈[λ]: l<j, T(k,l)<T(i,j), and T(k',l)>T(i,j) for every k'>k in column l}`.

Since a semistandard column is strictly increasing, this is equivalent to the **strict boundary**

`T(k,l)<v<T(k+1,l)`, where `v=T(i,j)` and `T(λ'_l+1,l)=+∞`.

There is at most one such k in each earlier column l. If that column contains an entry equal to v, it contributes **no node**, including when there are smaller entries above that equal entry. Thus “the last node with label strictly smaller than v” alone is insufficient. The omitted second strict inequality is necessary and is now explicitly part of the proposed norm interface.

The corrected exact product is

`γ_T(q)=∏_{(i,j)∈[λ]}∏_{(k,l)∈Γ_T(i,j)} [j−i+k−l+1]_q/[j−i+k−l]_q`.

Every denominator index is positive: when Γ_T contains a node of earlier column l, the entry in row i of that earlier column exists and is ≤v by row weak increase. Equality would exclude the entire column. Hence it is <v, and the chosen k is at least i. Therefore j−i+k−l≥j−l>0. This explains why the generic rational norm product is well-defined.

For a standard tableau t all labels are distinct, so its original description “last node in an earlier column with smaller label” already implies that every lower node has greater label. Its Γ_t definition therefore needs no substantive correction.

## Exact last-standardization norm identity

For `t=last(T)`, the labels in each equal-T class are assigned in increasing column order, left to right. Equal entries form a horizontal strip (at most one node per column). This is the standardization used in the source and in the proposed normalization; equivalently it is the least dominant standard tableau in the fiber μ(t)=T.

Fix x=(i,j), v=T(x), and an earlier column l. There are two exhaustive cases.

1. The column contains no entry equal to v. The unique node with the strict T boundary, if any, is also the unique predecessor in Γ_t(x): all standard labels belonging to T-values<v precede every label belonging to v, and all labels belonging to T-values>v follow them. If there is no smaller node, both predecessor sets omit that column. Hence Γ_t and Γ_T agree in this case.
2. The column contains an entry equal to v at a unique node y. The strict boundary Γ_T(x) omits this column. Because l<j, the last-standardization convention gives t(y)<t(x). All nodes below y have T-value>v and hence standard label>t(x). Thus Γ_t(x) contains exactly y. The equal-entry set `P_t^μ(x)={(k,l):l<j, T(k,l)=v, t(k,l)<t(x)}` likewise contains exactly y.

The sets therefore split **disjointly and exactly**:

`Γ_t(x)=Γ_T(x) ⊔ P_t^μ(x)`.

Multiplying their axial factors gives `γ_t=γ_T π_t`. This is the identity consumed by the SectionA cell-map scalar argument, so its norm conclusion remains

`(ψ_T,ψ_T)=q^{ell(d(last(T)))}γ_T`.

The parent has supplied corrected normalized Schur cell-map interfaces with `m_ST=Σ_{μ(s)=S,ν(t)=T}m_st`, `φ_ST(m_νh)=m_STh`, and actual summand weight projections. The fiber scalar proof in the sealed packet is relative to precisely these maps; this clarification adds no q-weight to the aggregate and does not alter their normalization.

## Exact consistency of the largest-letter recurrence

Let Z be the largest tableau entry and let C be the z columns whose feet are labelled Z. For a node x=(i,c) labelled Z, inspect an earlier column b<c.

- If b∈C, the foot of column b is also Z. Every smaller node above it fails the second strict inequality because the equal Z foot lies below it, and the foot itself fails the first strict inequality. Therefore Γ_T(x) contains no node from b.
- If b∉C, the foot of column b has label<Z, and its next sentinel is+∞. It is the unique strict-boundary node in that column. Its axial difference from x is `c−λ'_c+λ'_b−b=β_b−β_c`.

Thus the largest-label factors are exactly the ordered pairs `b<c`, `b∉C`, `c∈C`, and contribute `[β_b−β_c+1]_q/[β_b−β_c]_q`. This proves the precise recurrence(R) used in SectionB of the sealed proof. No contribution is lost from a column selected by C, because the strict boundary explicitly excludes its equal-Z foot and all smaller nodes above it.

Deleting the Z feet leaves the same Γ_T factors at every node of smaller value v: a removed Z was already>v and replaced by a sentinel still>v, so the strict-boundary predicate is unchanged. Hence the remaining factors are exactly γ_{T_C}, completing the recurrence justification.

## Relation to the already executed finite check

The sealed finite check implements the full source definition:

`t[k,l]<v and all(t[kp,l]>v for kp in range(k+1,column_height+1))`.

Its624 weight cases for n=1,…,5 therefore checked this corrected strict Γ_T throughout. No test rerun or changed result is claimed or needed: the correction is to the proof's incomplete verbal description, while its actual checked formula and the endpoint cancellation proof were already the strict-boundary version. The finite result remains a smoke check, separate from the general proof.

## Narrow supersession and limits

This successor corrects only the Γ_T definition and explicitly verifies the two places that consume it: `γ_last(T)=π_last(T)γ_T` and the largest-letter recurrence. It retains the sealed proof's balanced hook displacement, all arbitrary-domain/d<n/all-weight scope, universal polynomial specialization, source-typo findings, and genuine local-interface acceptance obligations. Parent review and canonical integration remain separate.
