---
id: lem-sl2-matrix-invariants-by-epsilon-contractions-and-traces
kind: lemma
title: "SL2 matrix invariants from epsilon contractions and traces"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - def-reductive-and-linearly-reductive-over-c
  - thm-invariant-ring-finite-generation-and-affine-categorical-quotient
justified_by: []
proof_strategy: direct
axiom_use: "The invariant-tensor and matrix calculations are finite and choice-free; full AC is inherited in the stated closed-subvariety quotient clause."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Procesi, The invariant theory of n x n matrices"
      url: https://doi.org/10.1016/0001-8708(76)90027-X
      locator: "Classical trace-generation target. The rank-two tensor, polarization and contraction proof is supplied explicitly here; no full-text reading of this paper is claimed."
    - title: "Cooper, Culler, Gillet, Long and Shalen, Plane Curves Associated to Character Varieties of 3-Manifolds"
      url: https://homepages.math.uic.edu/~culler/papers/PlaneCurves/curves.pdf
      locator: "Section2.1 uses the character/trace model; its matrix invariant prerequisite is proved below rather than imported from that citation."
---

## Statement

Assume full AC. For any finite $r\ge0$, every polynomial in the entries of $r$ complex $2\times2$ matrices invariant under simultaneous conjugation by $SL_2(\mathbb C)$ is a polynomial in traces of words in those matrices. For each given invariant only finitely many words are needed. If $Z\subseteq M_2(\mathbb C)^r$ is any closed reduced invariant algebraic subset, every invariant regular function on $Z$ is likewise a polynomial in the restricted word traces. In particular this applies to the representation variety of any finitely presented group in $SL_2(\mathbb C)$, with its determinant and relator equations. The assertion does not identify a nonsemisimple representation from its character or assert a generic representation over the character function field.

## Statement references

[[thm-invariant-ring-finite-generation-and-affine-categorical-quotient|Closed invariant subsets and their quotient coordinate maps]]

## Facts & Assumptions

**Given:** The standard two-dimensional space $V=\mathbb C^2$, its determinant form $\varepsilon(v,w)=v_1w_2-v_2w_1$, the finite tuple of matrices and, when used, the closed invariant reduced subset $Z$.

[A1] [[def-axiom-of-choice]] is inherited only through the quotient theorem below.

[F1] In [[def-reductive-and-linearly-reductive-over-c]], a unipotent subgroup has a nonzero fixed vector in each nonzero finite-dimensional rational module; a complex affine algebraic group is reductive if it has no nontrivial closed normal unipotent subgroup.

[F2] [[thm-invariant-ring-finite-generation-and-affine-categorical-quotient]] proves for a complex reductive group that a closed invariant inclusion induces a closed immersion of affine quotients. On coordinate rings this is the surjection from the ambient invariant algebra to the subset invariant algebra. The proof gives precisely this surjection via the Reynolds operator, including the reduced relator quotient.

## Proof

1.1 **The invariant tensor dimension.** In the tensor power $V^{\otimes d}$ use the standard orthonormal tensor basis with letters $+$ and $-$. Let $H=\operatorname{diag}(1,-1)$, let $E(-)=+$, $E(+)=0$, and let $F(+ )=-$, $F(-)=0$; on tensor powers each acts by the sum of its actions in each slot. Then $E^*=F$ and $[E,F]=H$ by direct multiplication in each slot, with distinct-slot terms commuting. Invariance under the diagonal matrices forces weight zero, and invariance under the upper unipotents forces $Ew=0$. Conversely, for weight-zero $w$ with $Ew=0$, the identity $\|Fw\|^2-\|Ew\|^2=\langle Hw,w\rangle$ gives $Fw=0$. Both unipotent one-parameter groups then fix $w$ by their finite exponential series. They generate $SL_2(\mathbb C)$: Gaussian elimination handles a matrix with nonzero upper-left entry; a zero entry is first made nonzero by an elementary row operation, and diagonal matrices are also products of elementary upper and lower matrices. Thus these are exactly the invariant tensors. Odd $d$ gives zero invariants, since the central element $-I$ acts by $-1$. [given, construct, algebra]

1.2 **The group hypothesis for the quotient passage is proved.** If $U$ is a closed normal unipotent subgroup of $SL_2$, its action on the nonzero rational module $V$ has a nonzero fixed vector by [F1]. The subspace $V^U$ is $SL_2$-stable: for $v\in V^U$, $g\in SL_2$ and $u\in U$, normality gives $u(gv)=g(g^{-1}ug)v=gv$. The standard representation is irreducible; a nonzero vector can be carried to any other by a determinant-one change of basis, obtained by completing each vector to a basis with determinant one. Hence $V^U=V$. The standard representation is faithful, so $U$ is trivial. By [F1] $SL_2(\mathbb C)$ is reductive in precisely the convention used by [F2]. [F1, F2, given, construct, algebra]

2.1 **A finite rank computation.** Put $d=2n$. The weight-zero space has dimension $\binom{2n}{n}$ and weight-two space has dimension $\binom{2n}{n-1}$, with the latter zero when $n=0$. The adjoint of $E:W_0\to W_2$ is $F:W_2\to W_0$. This $F$ is injective: if $Fw=0$ for a weight-two vector, the commutator identity gives $-\|Ew\|^2=2\|w\|^2$, so $w=0$. Finite-dimensional orthogonal-complement linear algebra therefore makes $E:W_0\to W_2$ surjective. Step 1.1 gives invariant dimension $\binom{2n}{n}-\binom{2n}{n-1}$. This computation includes the one-dimensional empty tensor power. [step 1.1, construct, algebra]

3.1 **Actual epsilon tensors form a basis.** For each noncrossing matching of the ordered $2n$ positions, insert the invariant tensor $+\otimes- - -\otimes+$ in each matched pair, smaller position first, and permute tensor slots to their specified positions. All these tensors are invariant because the determinant form and its inverse are preserved by $SL_2$. Order tensor words lexicographically with $+>-$. The leading word has $+$ at every left endpoint and $-$ at every right endpoint. It is a Dyck word: each initial segment has at least as many left endpoints as right endpoints. Noncrossing matchings correspond bijectively to these words by closing the most recent unclosed endpoint. Distinct matchings therefore have distinct leading words, so their tensors are independent: in any nonzero linear relation choose the largest leading word among its nonzero coefficients. The number of Dyck words is $\binom{2n}{n}-\binom{2n}{n-1}$, by reflecting the initial segment through the first negative partial sum in each bad balanced word. The dimension computation in step 2.1 shows these actual tensors form a basis of the entire invariant space. The same holds for invariant multilinear forms, using the equivariant identification $V\to V^*$ given by the nondegenerate determinant form. For $n=0$ the matching is empty and gives the scalar $1$. [step 1.1, step 2.1, construct, algebra]

4.1 **Polarize invariant polynomials.** Separate an invariant polynomial into its homogeneous degrees; the action is linear, so each part is invariant. For a homogeneous degree-$d$ polynomial on $W=M_2(\mathbb C)^r$, its polarization is the symmetric multilinear form $$T(w_1,\ldots,w_d)=\frac1{d!}\sum_{A\subseteq\{1,\ldots,d\}}(-1)^{d-|A|}f\Bigl(\sum_{j\in A}w_j\Bigr).$$ Expansion of each monomial shows that terms missing any argument cancel and the surviving terms use each argument once. Hence it is multilinear and $T(w,\ldots,w)=f(w)$. The formula also proves invariance. Expand each slot according to the finite direct sum of $r$ matrix spaces; each resulting form is an invariant multilinear form on $d$ copies of $\operatorname{End}(V)$. The determinant identification $\operatorname{End}(V)=V\otimes V^*\cong V\otimes V$ turns it into the invariant $2d$-tensor problem of step 3.1. Consequently it is a linear combination of pairwise epsilon contractions of the two legs of each matrix. Degree zero is simply a scalar and needs no polarization. [step 3.1, given, construct, algebra]

5.1 **Every contraction is a product of word traces.** Write $J=\left(\begin{smallmatrix}0&1\\-1&0\end{smallmatrix}\right)$. The tensor of a matrix $A$ in $V\otimes V$ is $AJ$: indeed $(gAg^{-1})J=g(AJ)g^T$ because $gJg^T=J$. Contract tensor legs by $J^{-1}$. Regard a complete pairing as a graph with one two-legged vertex for each matrix and one edge for each contraction. It is a disjoint union of cycles, allowing loops and doubled edges. Traverse a cycle and sum its repeated indices. Passing a vertex in its given leg order contributes $(AJ)J^{-1}=A$; passing it in the reverse order contributes $(AJ)^TJ^{-1}=-JA^TJ^{-1}=-\operatorname{adj}(A)$. Reversing an edge pairing merely changes a sign because $(J^{-1})^T=-J^{-1}$. Closing the repeated indices is exactly a trace. Thus each cycle is, up to a sign, a trace of a word in the matrices and their adjugates, and different cycles multiply. Finally $$\operatorname{adj}(A)=(\operatorname{tr}A)I-A$$ is the explicit $2\times2$ entry identity. Expanding each adjugate in every word expresses the contraction as a polynomial in ordinary word traces, with $\operatorname{tr}I=2$ for an empty word. Together with polarization, this proves the ambient matrix-polynomial assertion. [step 4.1, construct, algebra]

6.1 **Pass to the actual reduced representation equations.** For a closed invariant reduced $Z\subseteq M_2^r$, apply [F2] and step 1.2 to its inclusion. The invariant coordinate algebra of $Z$ is a quotient of $\mathbb C[M_2^r]^{SL_2}$. Every ambient invariant is a polynomial in word traces by step 5.1, so their restrictions generate the quotient. A finitely presented group representation variety is such a $Z$: determinants equal one and relators equal the identity are finite polynomial equations after inverse letters are replaced by adjugates. The vanishing ideal of their point set is radical and invariant, whether or not the displayed raw equation ideal is radical. Thus [F2] applies to this actual reduced variety and yields the asserted invariant trace generation. On determinant-one matrices the adjugates used along the way are precisely inverse matrices, so the traces are traces of group words. Every polynomial calculation and pairing list was finite; full AC enters only in [F2]. No classification of individual orbits or rational descent of generic representations has been substituted for this calculation. [A1, F2, step 5.1, step 1.2, construct, algebra] ∎
