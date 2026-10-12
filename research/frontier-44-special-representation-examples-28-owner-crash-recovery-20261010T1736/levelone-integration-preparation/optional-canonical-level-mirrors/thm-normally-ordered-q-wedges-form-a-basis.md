---
id: thm-normally-ordered-q-wedges-form-a-basis
kind: theorem
title: "Normally ordered q-wedges form a basis for every finite wedge length"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 9
deps: [def-finite-q-wedge-space-and-normal-ordering-relations,
       lem-the-q-antisymmetrizer-determines-the-finite-q-wedge-kernel,
       lem-the-q-wedge-relations-coincide-with-the-type-a-energy-braiding-kernel,
       lem-the-level-one-vector-representation-has-a-perfect-crystal-with-lower-global-basis,
       lem-rank-one-tensor-strings-have-the-crystal-limit-rule]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Kashiwara-Miwa-Petersen-Yung, Perfect crystals and q-deformed Fock spaces"
      url: "https://arxiv.org/pdf/q-alg/9603025"
      locator: "sec. 3.3, printed pp. 14-21: Prop. 3.3.9 (straightening), Theorem 3.3.12 (independence), Cor. 3.3.13 and Prop. 3.3.14 (crystal base of the finite wedge space)."
    - title: "Bernard Leclerc, Fock space representations (author-hosted complete 38-page treatment)"
      url: "https://leclercb.users.lmno.cnrs.fr/lectnotes_final.pdf"
      locator: "sec. 3.7, printed pp. 21-22: Prop. 9 (ordered wedges form a basis) with its $q\\to1$ specialisation argument, and Props. 10-11 (bar and unitriangularity)."
    - title: "Masaki Kashiwara, Tetsuji Miwa and Eugene Stern, Decomposition of q-deformed Fock spaces, arXiv:q-alg/9508006"
      url: "https://arxiv.org/pdf/q-alg/9508006"
      locator: "sec. 1.3, printed pp. 5-8: Props. 1.1-1.3 on the normally ordered wedge basis."
---

## Statement

For every $N\ge1$ the normally ordered wedges
$\{u_{m_1}\wedge\cdots\wedge u_{m_N}:m_1>m_2>\cdots>m_N\}$ of
[[def-finite-q-wedge-space-and-normal-ordering-relations]] form a
$\mathbb Q(q)$-basis of $W_N$ and an $A=\mathbb Z[q,q^{-1}]$-basis of the
Laurent lattice $W_A$. The straightening algorithm terminates with a
well-founded profile: the total index sum and the ambient index interval are
preserved, secondary pairs become strictly more balanced in the sorted
dominance profile, and a leading adjacent swap decreases the inversion count;
in particular no bound by the initial inversion count alone is used. The
local $A_0$-chart $L_0:=A_0W_0$, where $A_0=\mathbb Q[q]_{(q)}$ and $W_0$
is the separate $\mathbb Z[q]$-span of the normal wedges, is a crystal basis: for each color $i$, on the occupied set of a normal tuple
the disjoint pairs $(u_{i+ke},u_{i+ke+1})$ behave as two-vertex highest-weight
$1$ strings, empty and doubly occupied pairs are frozen, and a shift of an
index by one either stays ordered or collides to zero; hence the residues of
the ordered wedges are stable under the normalized string operators and give a
crystal of the integrable affine wedge module. The image of the full
$\mathbb Z[q]$-tensor lattice need not equal $W_0$, and negative powers of $q$
in the straightening are not asserted to be triangular at $q=0$.

## Facts & Assumptions

**Given:** The finite wedge quotient, all normally ordered wedges and the charts $W_A,W_0$ of the Statement.

[F1] The complete three-case straightening follows from the original Laurent divided-difference action and terminates with Laurent coefficients and fixed ambient interval and total sum ([[def-finite-q-wedge-space-and-normal-ordering-relations]]).

[F2] The contract of [[lem-the-q-antisymmetrizer-determines-the-finite-q-wedge-kernel]] gives $A_N^2=C_NA_N$, $C_N\ne0$, $\ker A_N=\sum_i\ker(S_i+1)$ and the quotient identification $W_N\cong\operatorname{im}A_N$. On the quotient $S_i=Q=q^2$.

[F3] The actual residue matrix and divided difference specialize at $q=1$ to $S_i=-P_i$, with $P_i$ the factor flip; the divided-difference term vanishes. Consequently $A_N$ specializes to $\sum_w(-1)^{\ell(w)}P_w$, the signed ordinary antisymmetrizer.

[F4] The vector rules are $E_iu_m=\delta_{m\equiv i+1}u_{m-1}$, $F_iu_m=\delta_{m\equiv i}u_{m+1}$, and $K_iu_m=q^{\delta_{m\equiv i}-\delta_{m\equiv i+1}}u_m$; the fixed coproduct is $\Delta E_i=E_i\otimes K_i^{-1}+1\otimes E_i$ and $\Delta F_i=F_i\otimes1+K_i\otimes F_i$ ([[lem-the-level-one-vector-representation-has-a-perfect-crystal-with-lower-global-basis]]).

[F5] Over the local ring $A_0=\mathbb Q[q]_{(q)}$, the tensor product of two divided-basis simple rank-one strings has a basis of divided highest-weight strings whose residues permute the tensor-basis residues; the normalized operators preserve its lattice and induce the crystal tensor rule and partial inverses ([[lem-rank-one-tensor-strings-have-the-crystal-limit-rule]]).



## Proof

**Proof technique:** the finite dominance and signed specialization proof establishes the field and Laurent bases; the rank-one cube calculation and local-ring tensor-string rule establish the complete localized crystal claim.

1.1 Spanning and termination. For any finite tensor combination choose a finite interval containing its indices. In each word the total sum stays fixed under [F1]. Among the finite set of words in this interval of that sum, order first the sorted decreasing prefix-sum list and then the increasing-pair inversion count. Each secondary balanced pair strictly decreases the former, while a leading adjacent swap decreases the latter and leaves the former fixed. The multiset can change in a secondary branch. Thus every branch terminates, either at zero from repeated adjacent indices or at a strictly decreasing tuple. The relations have coefficients in $A$, proving field spanning and Laurent spanning. [F1, given, algebra]

2.1 Field independence. For finitely many distinct normal tuples $I_k$, let $t_{I_k}$ be their raw tensors. Each $A_Nt_{I_k}$ is a finite Laurent-polynomial combination of raw tensors, regular at $q=1$. Select the finite union of all their supports as rows. At $q=1$, [F3] gives signed antisymmetrizations. The strictly decreasing raw row $t_{I_j}$ occurs with coefficient $1$ in column $j$ and coefficient $0$ in the other columns: distinct decreasing tuples have distinct index multisets. Therefore the square minor on these rows specializes to the identity determinant $1$ and is nonzero in $\mathbb Q(q)$. If $\sum_k c_k u_{I_k}=0$, [F2] gives $\sum_k c_k A_Nt_{I_k}=0$, so that nonzero minor forces every $c_k=0$. This proves field independence and, with step 1.1, a field basis for every $N$. [F2, F3, step 1.1, given, algebra]

3.1 Laurent freeness. Step 1.1 supplies Laurent spanning. Any finite $A$-linear relation is also a field-linear relation and is zero coefficientwise by step 2.1. Thus the map from the direct sum of one copy of $A$ for each normal tuple to $W_A$ is both surjective and injective, proving precisely the claimed Laurent basis. No implication from torsionfreeness over a nonprincipal ring is used. The separate positive span is free over $\mathbb Z[q]$ by the same independence. [step 1.1, step 2.1, given, algebra]

3.2 The exact rank-one cube. Fix a color $i$. The integer pairs $(i+ke,i+ke+1)$ are disjoint for every $e\ge2$. An empty pair is inert; a doubly occupied pair is inert because applying $E_i$ or $F_i$ makes a repeated adjacent index, whose wedge is zero. Its net $K_i$-weight is zero. A singly occupied pair is a copy of the highest-weight-one rank-one module. Changing a free bit shifts an index by one and keeps the word decreasing; the only possible obstruction is an already occupied partner, the frozen double-pair case. Hence each block of fixed pair occupancies is, in decreasing pair order, exactly a tensor product of these free rank-one modules. More explicitly, $F_i$ on a free high bit has coefficient $q^{\sum_{s<t}\epsilon_s}$ and $E_i$ on a free low bit has coefficient $q^{-\sum_{s>t}\epsilon_s}$, where $\epsilon_s=1$ for a high bit and $-1$ for a low bit and the sums are over earlier or later free pairs. Frozen pairs contribute zero. Thus the tensor cube identification is an equality of module actions. [F1, F4, step 2.1, algebra]

4.1 Local crystal stability on every cube. Apply [F5] inductively to a cube with $r$ free pairs. For $r=0,1$ its divided-string basis is its ordinary basis. If the first $r-1$ factors have been written as a direct sum of simple divided strings with an $A_0$-basis whose residues permute the product basis, tensor each string with the final highest-weight-one factor. The finite calculation of [F5] produces a divided-string basis of each such tensor summand whose residues again permute its product residues. Its transition determinant is a unit of $A_0$, so the lattice remains exactly the $A_0$-span of the cube words, and the normalized operators act on these divided strings, preserve this lattice and permute its residues or send them to zero, with partial inverses. Induction proves these assertions for every finite cube. Step 3.2 identifies this lattice with the corresponding block of $L_0$; the block bases are subsets of the normal basis, and their direct sum covers every tuple. Consequently both normalized operators preserve $L_0$ and give the claimed crystal on its normal residues for every color. [F5, step 3.2, step 2.1, algebra]

5.1 The weight and integrability conditions. A normal wedge is a weight vector, since its raw tensor is one and the kernel is quantum-group stable by [F2]; thus the free local span decomposes by weights. It generates $W_N$ by step 2.1. For fixed color every tuple lies in the finite cube of step 3.2, a tensor product of finite rank-one modules; hence $E_i,F_i$ are locally nilpotent on all finite linear combinations. Together with the operator stability, residue basis and partial inverses of step 4.1, this proves that $L_0$ with the normal residues is a crystal basis of the integrable affine wedge module. [F2, step 2.1, step 3.2, step 4.1, given, algebra]

6.1 Conclusion. The normal wedges give the field and Laurent bases and the finite dominance termination profile; the exact rank-one cube action establishes the crystal basis on the separate local chart $L_0=A_0W_0$. The image of the positive tensor lattice is not identified with $W_0$ or $L_0$, and no triangularity of negative straightening powers at zero has been used. [step 1.1, step 2.1, step 3.1, step 3.2, step 4.1, step 5.1] ∎

## Remarks

The necessary ring correction has a concrete two-bit witness: for $e=3,i=1,N=2$, set $h=u_4\wedge u_1$, $x=u_5\wedge u_1$, $y=u_4\wedge u_2$, $z=u_5\wedge u_2$. Then $F_1h=x+qy$, $F_1^{(2)}h=z$, and $s=x-q^{-1}y$ has $E_1s=F_1s=0$. The unique string decomposition is $x=(1+q^2)^{-1}F_1h+q^2(1+q^2)^{-1}s$, giving $\tilde f_1x=(1+q^2)^{-1}z$. This lies in $L_0$ but not in the polynomial span $W_0$; field independence proves the latter assertion. Thus the literal previous polynomial-lattice claim could not be retained.
