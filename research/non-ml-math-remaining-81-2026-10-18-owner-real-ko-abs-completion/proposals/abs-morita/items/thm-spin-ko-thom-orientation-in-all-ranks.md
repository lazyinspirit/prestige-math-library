---
id: thm-spin-ko-thom-orientation-in-all-ranks
kind: theorem
title: Real Spin KO Thom orientation in all ranks and degrees
status: draft
origin: pipeline
deps: [thm-homotopy-invariance-of-vector-bundle-pullback, lem-reduced-relative-ko-suspension-exactness-and-product, thm-spin-thom-isomorphism-rank-eight-multiples-and-rank-four-ksp, thm-real-bott-periodicity-from-rank-eight-clifford-thom, thm-abs-orientation-identifies-cokernels-with-ko, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Atiyah–Bott–Shapiro, Clifford Modules, sections 11–12
      url: https://www.math.ens.psl.eu/~benoist/refs/ABS.pdf
---

## Statement

Assume AC. A given Spin bundle $V\to X$ of rank $r\ge0$ on a finite CW
pair $(X,A)$ has a natural shifted class
$u_V\in\widetilde{KO}^{r}(\operatorname{Th}(V))$. Multiplication gives

$$KO^j(X,A)\xrightarrow{\cong}\widetilde{KO}^{j+r}(\operatorname{Th}(V)/\operatorname{Th}(V|_A))$$

for every integer $j$. The class is normalized to the suspended unit on
each fiber, independent of stabilization, natural for pullback of given
Spin structures, and multiplicative for direct sums. In unshifted degree
zero the rank $8m+4$ real-valued theorem has source $KSp^0(X)$, as proved
separately; that assertion is not replaced by a rank-zero real spinor.

## Facts & Assumptions

**Given:** AC, the given Spin bundle, and $(X,A)$ a finite CW pair.

[F1] The pending real Bott interface gives the invertible coefficient
$\beta\in KO^{-8}(\mathrm{pt})$, whose external symbol generates
$\widetilde{KO}^0(S^8)$, in all degrees and for all finite pairs
([[thm-real-bott-periodicity-from-rank-eight-clifford-thom]]).

[F2] The rank-$8m$ spinor symbol $\tau_W\in KO_c^0(W)$ and its naturality
and graded-product identity are those of the proposed
[[thm-spin-thom-isomorphism-rank-eight-multiples-and-rank-four-ksp]].

[F3] Relative exactness, suspension and external products (including their
boundary compatibility) are the pending exact interface of
[[lem-reduced-relative-ko-suspension-exactness-and-product]].

[F4] Under AC, numerable real and complex vector bundles have isomorphic
endpoint pullbacks along a homotopy
([[thm-homotopy-invariance-of-vector-bundle-pullback]]). This applies to
the compact characteristic disks; composing a real trivialization with a
constant reflection when needed makes it preserve orientation.

## Proof

**Proof technique:** explicit symbols and finite-dimensional bundle constructions.

1.1 Choose $s\ge0$ with $r+s=8m>0$, give the trivial $\mathbb R^s$ its standard framed Spin structure, and put $W=V\oplus\mathbb R^s$ with the direct-sum Spin lift. The canonical Thom identification $\operatorname{Th}(W)=\Sigma^s\operatorname{Th}(V)$ transports $\tau_W$ to $z_s\in\widetilde{KO}^{-s}(\operatorname{Th}(V))$. Set $u_V=\beta^{-m}z_s$, which has degree $8m-s=r$. On a fiber the spinor for $\mathbb R^{8m}$ is the graded tensor of $m$ rank-eight spinors, so its class is $\beta^m$ under the suspension identification, by [F2]. It follows that $u_V$ restricts to the $r$-fold suspended unit. For rank zero, the given $\operatorname{Spin}(0)=\{\pm1\}$ lift has associated sign line $L$; the stabilized spinor is $L\otimes\Sigma_{8m}$, so the same calculation gives $u_{0,L}=[L]$. Its square is one, since $L^{\otimes2}$ is trivial. The canonical framed rank-zero lift gives the unit. No raw parity pair is introduced. [F1, F2, F3, construct]

1.2 Replace $s$ by $s+8$. By the same graded-product identity, $\tau_{W\oplus\mathbb R^8}=\tau_W\boxtimes\tau_{\mathbb R^8}$. Desuspending all $s+8$ variables transports this to $\beta z_s$, by the definition of the coefficient action through suspension in [F1]. The normalization becomes $\beta^{-(m+1)}\beta z_s=\beta^{-m}z_s$. Any two nonnegative admissible $s$ differ by a multiple of eight, so this proves independence. Changing a positively oriented orthonormal frame of the trivial summand changes neither the symbol nor its class: an oriented orthogonal matrix can be joined to the identity by successively rotating coordinate planes, and its Spin lift conjugates the Clifford symbol throughout this path; the other lift differs by the scalar $-1$ and gives the same conjugation. The construction commutes with pullback of the *given* Spin lift, proving naturality. [F1, F2, F3, step 1.1, algebra]

2.1 Cup product with this global class gives maps of the relative exact sequences for every triple $B\subseteq A\subseteq X$. For the connecting map this can be seen in the relative-cylinder model: the same pulled-back symbol over the cylinder is tensored with the bundle/trivialization representing the boundary class, so restriction to its boundary is the product with $u_V$. Keep the coefficient on the left and $u_V$ on the right; this avoids an additional Koszul sign in the boundary. Thus [F3] gives a commutative diagram of long exact sequences in every degree. [F3, step 1.1, algebra]

2.2 Filter $X$ from $A$ by its finitely many cells. Over a characteristic disk $D^k$ the pulled-back vector bundle is oriented-trivial by the finite-bundle homotopy invariance in [F4]. In this vector trivialization the pulled-back global class is a class on $D^k_+\wedge S^r$. Restriction to the center is an isomorphism by contraction of the disk, so the class equals the pullback of its normalized fiber class. No trivialization of the Spin lift over the attaching boundary is needed. Excision and collapse of the disk boundary identify the source cell group with $KO^{j-k}(\mathrm{pt})$ and the target cell group with $\widetilde{KO}^{j+r}(S^{k+r})=KO^{j-k}(\mathrm{pt})$. The map is the identity in these identifications because the fiber restriction of $u_V$ is the suspended unit from step 1.1. For several cells it is the direct sum of these identities; the filtration is finite, so no infinite-product assertion is used. [F3, F4, step 1.1, construct]

2.3 Suppose the theorem holds for the preceding skeleton, in every integer degree. In the five consecutive terms $KO^{j-1}(X_{k-1},A),KO^j(X_k,X_{k-1}),KO^j(X_k,A), KO^j(X_{k-1},A),KO^{j+1}(X_k,X_{k-1})$, the outer four vertical maps are isomorphisms by the induction hypothesis and step 2.2. Exactness and the diagram in step 2.1 imply that the middle map is injective and surjective: map a kernel element back through the second term and correct its preimage using the first; lift a target element through the fourth term, correct its difference through the second, and use the fifth term to ensure the lift exists. This is the usual exact-sequence diagram argument with all five terms present. The initial empty relative pair is zero, so induction proves the displayed isomorphism for $(X,A)$ and every $j$. [step 2.1, step 2.2, algebra]

3.1 For multiplicativity choose framed complements of ranks $s,t$ making $V\oplus\mathbb R^s$ and $V'\oplus\mathbb R^t$ divisible by eight. Their total graded symbol is $c(v)\otimes1+\Gamma\otimes c(v')$ together with the framed generators. Associating the tensors in the other order gives the same operator for $(V\oplus V')\oplus\mathbb R^{s+t}$. Moving the $s$ framed variables past the $r'$ bundle variables changes the orientation of their ordered suspension coordinates by $(-1)^{sr'}$; the graded interchange in the tensor symbol changes it by the same sign. Hence the two desuspensions agree, with no residual sign. Normalization multiplies by $\beta^{-m}\beta^{-m'}=\beta^{-(m+m')}$, since the degree of $\beta$ is even. Thus $u_{V\oplus V'}=u_Vu_{V'}$ under the canonical fiber-product Thom identification. This proves direct-sum compatibility and finishes all degrees and ranks. [F1, F2, F3, step 1.2, algebra] ∎ 