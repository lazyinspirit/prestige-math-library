---
id: thm-qc-tqc-gauge-covariance
kind: theorem
title: Gauge covariance of fusion-space braid actions
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps:
  - def-qc-tqc-gauge-transform
  - def-qc-tqc-fusion-tree-basis
  - thm-qc-tqc-pentagon-coordinates
  - thm-qc-tqc-hexagon-coordinates
  - def-braid-group-by-the-artin-presentation
  - thm-von-dyck
  - def-monoidal-category
  - def-braiding
  - def-qc-tqc-unitary-fusion-category
  - thm-qc-tqc-f-symbol-unitary
  - thm-qc-tqc-r-symbol-unitary
  - thm-mac-lane-coherence-in-the-canonical-map-form
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David Penneys, Unitary Fusion Categories, Math 8800 lecture notes"
      url: "https://people.math.osu.edu/penneys.2/UQSL/ArchivedNotes/TPM/FusionCats.pdf"
      locator: "§3.5, Remark 3.5.21, PDF p. 16: basis choices yield gauge-equivalent F-matrices."
    - title: "Chetan Nayak et al., Non-Abelian Anyons and Topological Quantum Computation"
      url: "https://arxiv.org/pdf/0707.1889"
      locator: "§II.A, PDF pp. 4–6: fusion-basis gauge freedom and its action on braid matrices."
---

## Statement

Let $\mathcal C$ be a unitary braided fusion category. A finite list of simple
charges and total charge determines a fusion space in each parenthesization.
For a crossing word with underlying object map $b_\beta:P_L\to P_{L'}$, define
its action on the corresponding Hom spaces by
$f\mapsto f\circ b_\beta^{-1}$, from $\operatorname{Hom}(P_L,d)$ to
$\operatorname{Hom}(P_{L'},d)$. Let $U_\beta$ be its matrix in chosen
fusion-tree bases. If each multiplicity basis is changed by the unitary
gauge matrices of [[def-qc-tqc-gauge-transform]], and $G_L,G_{L'}$ are the
induced source and target tree-basis unitaries, then

$$U_\beta'=G_{L'}^{-1}U_\beta G_L.$$

In particular, when $n\ge2$ and all $n$ strand charges are the same simple object $a$,
the adjacent exchanges act on the same fixed-total fusion space
$V=\operatorname{Hom}(a^{\otimes n},d)$, satisfy the Artin relations, and
define a unitary representation $\rho:B_n\to U(V)$, where $U(V)$ is the group
of invertible linear maps preserving the inner product on $V$.
If $V=0$, this is the unique action on the zero-dimensional space.
In that case $\rho'(\beta)=G_L^{-1}\rho(\beta)G_L$ for every braid $\beta$.
Thus basis-dependent matrix entries change, while the braid action up to
unitary equivalence and consistently transformed expectation values do not.

## Facts & Assumptions

**Given:** a unitary braided fusion category, finite simple-charge lists, a
fixed simple total charge, and unitary multiplicity-basis changes.

[F1] [[def-monoidal-category]]: tensor product is a bifunctor, and the
associator satisfies the pentagon axiom.

[F2] [[def-braiding]]: each $c_{X,Y}$ is a natural isomorphism and satisfies
both hexagon identities.

[F3] [[thm-qc-tqc-pentagon-coordinates]] and
[[thm-qc-tqc-hexagon-coordinates]]: the associator and braiding coherence
identities hold in the full fusion-tree matrices, including all multiplicities.

[F4] [[def-qc-tqc-gauge-transform]] and
[[def-qc-tqc-fusion-tree-basis]]: local basis changes are unitary, and the
induced tree-basis change is the direct sum of the corresponding tensor
products at the vertices.

[F5] [[def-braid-group-by-the-artin-presentation]] and [[thm-von-dyck]]: the
generators and Artin relations present $B_n$, and generator maps satisfying
those relators extend uniquely to a group homomorphism.

[F6] [[def-qc-tqc-unitary-fusion-category]],
[[thm-qc-tqc-f-symbol-unitary]], and [[thm-qc-tqc-r-symbol-unitary]]: the
braiding and every F/R change of orthonormal fusion basis are unitary maps.

[F7] [[thm-mac-lane-coherence-in-the-canonical-map-form]]: any two canonical
rebracketing maps between the same parenthesized tensor words on the same
ordered factors are equal.

## Proof
1.1 For three consecutive charges $A,B,C$, naturality of the braiding in its first variable, applied to $c_{A,B}:A\otimes B\to B\otimes A$, gives $$c_{B\otimes A,C}\circ(c_{A,B}\otimes\operatorname{id}_C) =(\operatorname{id}_C\otimes c_{A,B})\circ c_{A\otimes B,C}.$$ This is an equality from $((A\otimes B)\otimes C)$ to $C\otimes(B\otimes A)$. Reassociating the target by $\alpha_{C,B,A}^{-1}$ and expanding each $c_{X\otimes Y,Z}$ by the second hexagon in [F2] gives the two adjacent Artin composites $$\begin{aligned} L&=(c_{B,C}\otimes\operatorname{id}_A)\circ\alpha_{B,C,A}^{-1} \circ(\operatorname{id}_B\otimes c_{A,C})\circ\alpha_{B,A,C} \circ(c_{A,B}\otimes\operatorname{id}_C),\\ R&=\alpha_{C,B,A}^{-1}\circ(\operatorname{id}_C\otimes c_{A,B}) \circ\alpha_{C,A,B}\circ(c_{A,C}\otimes\operatorname{id}_B) \circ\alpha_{A,C,B}^{-1}\circ(\operatorname{id}_A\otimes c_{B,C}) \circ\alpha_{A,B,C}. \end{aligned}$$ The cancelled factor is $\alpha_{C,B,A}^{-1}\circ\alpha_{C,B,A}=\operatorname{id}$; the remaining factors are exactly the displayed $L$ and $R$. Hence the adjacent braid relation holds as a typed equality of maps. Coherence [F7] identifies the canonical rebracketings of these three factors when they sit inside a longer tree; [F3] records the resulting equality in every fusion-tree block. [F1, F2, F3, F7, given, algebra]

1.2 If two crossings involve disjoint adjacent pairs, reparenthesize the ordered factors as $W_L\otimes(A\otimes B)\otimes M\otimes(C\otimes D)\otimes W_R$, where $W_L,W_R$ collect the outer factors and $M$ is the (possibly empty) intervening tensor product. Let $g:A\otimes B\to B\otimes A$ and $h:C\otimes D\to D\otimes C$ be the two crossings. Suppressing only the canonical parentheses, bifunctoriality gives the typed identity $$(\operatorname{id}_{B\otimes A}\otimes\operatorname{id}_M\otimes h)\circ(g\otimes\operatorname{id}_M\otimes\operatorname{id}_{C\otimes D}) =g\otimes\operatorname{id}_M\otimes h =(g\otimes\operatorname{id}_M\otimes\operatorname{id}_{D\otimes C})\circ(\operatorname{id}_{A\otimes B}\otimes\operatorname{id}_M\otimes h).$$ Tensoring with the outer identities gives the same equality on the full word. Coherence [F7] transports it back to the chosen tree, so distant braid generators commute, including when one or more intervening factors are present. [F1, F7, algebra]

2.1 For $n$ identical charges $a$, reassociate each object-level crossing $b_i$ to act on factors $i,i+1$, and let its fusion-space operator be $B_i(f)=f\circ b_i^{-1}$. The identity $B_{h\circ g}=B_h\circ B_g$ follows by composition: $B_h(B_g(f))=(f\circ g^{-1})\circ h^{-1}=f\circ(h\circ g)^{-1}$. Consequently the object-level relators proved in steps 1.1–1.2 hold for the $B_i$ as well. By [F5], the generator assignment extends uniquely to $\rho:B_n\to U(V)$. Reassociations are unitary by [F6], and the local exchange matrices are products of unitary F/R blocks from [F6]; hence each $B_i$ and every braid word is unitary. [F5, F6, step 1.1, step 1.2, construct]

2.2 In any parenthesized tree, let $G_T$ be the direct sum over admissible internal labels of the tensor products of the vertex gauge matrices. It is unitary because each factor is unitary and the tree basis is orthonormal by [F4]. The formulas in [F4] show that every F/R factor in a crossing matrix changes by inserting the inverse gauge at its target and the gauge at its source. Along a composite word, adjacent intermediate factors cancel, leaving $U_\beta'=G_{L'}^{-1}U_\beta G_L$. This also holds for colored words whose source and target lists differ. [F3, F4, step 1.1]

3.1 For identical charges, $L'=L$ and the formula of step 2.2 is conjugation by the single unitary $G_L$, so $\rho'(\beta)=G_L^{-1}\rho(\beta)G_L$ for every $\beta\in B_n$. If $\psi'=G_L^{-1}\psi$ and $M'=G_L^{-1}MG_L$, then $\langle\psi',M'\psi'\rangle=\langle G_L^{-1}\psi,G_L^{-1}M\psi\rangle =\langle\psi,M\psi\rangle$ because $G_L$ is unitary. Hence all expectation values, including measurement probabilities represented this way, are unchanged. [F4, step 2.2, algebra] ∎
## Artin relation diagram

Both arrows are the explicit composites $L$ and $R$ from step 1.1, with each
crossing using the braiding $c$ and each reassociation using the named
associator. The diagram records their common source and target; equality was
proved from naturality and the hexagon identities above.

```tikzcd
((A\otimes B)\otimes C)
  \arrow[rr,bend left=18,"L"]
  \arrow[rr,bend right=18,"R"']
&& (C\otimes B)\otimes A
```
