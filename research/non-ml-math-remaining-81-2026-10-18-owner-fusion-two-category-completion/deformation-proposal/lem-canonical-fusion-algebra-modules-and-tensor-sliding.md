---
id: lem-canonical-fusion-algebra-modules-and-tensor-sliding
kind: lemma
title: Canonical algebra modules and coherent tensor sliding
status: draft
origin: session
deps:
  - lem-canonical-fusion-category-algebra-is-frobenius
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Etingof, Gelaki, Nikshych, and Ostrik, Tensor Categories, Proposition 7.18.5 and equation (7.57)
      url: https://math.mit.edu/~etingof/egnobookfinal.pdf
---

## Statement

Use the canonical algebra $K$ in $\mathcal D=\mathcal C\boxtimes\mathcal C^{\mathrm{rev}}$ from [[lem-canonical-fusion-category-algebra-is-frobenius]]. Without a separability or characteristic-zero assumption, the functor $J:\mathcal C\to\operatorname{Mod}_{\mathcal D}(K)$ given by $J(V)=(V\boxtimes\mathbf1)\otimes K$ is an equivalence. There are natural right $K$-module isomorphisms
$$\rho_V:(V\boxtimes\mathbf1)K\longrightarrow(\mathbf1\boxtimes V)K.$$
They obey $\rho_{\mathbf1}=\mathrm{id}$ and the sliding equation: $\rho_{V\otimes W}$ is the composite of $\mathrm{id}_{V\boxtimes\mathbf1}\otimes\rho_W$, the interchange of the two separate Deligne factors, and $\mathrm{id}_{\mathbf1\boxtimes W}\otimes\rho_V$. In particular any right $K$-linear map $J(V)\to J(W)$ uniquely equals $f\otimes\mathrm{id}_K$ for $f:V\to W$.

## Proof

**Given:** The canonical algebra and its multiplication from the cited Frobenius construction. Only finite semisimplicity and rigidity of $\mathcal C$ are used.

1.1 Put $L_V=(V\boxtimes\mathbf1)K$ and $R_V=(\mathbf1\boxtimes V)K$. For every $X\boxtimes Y$, evaluation identifies both $\operatorname{Hom}_{\mathcal D}(X\boxtimes Y,L_V)$ and $\operatorname{Hom}_{\mathcal D}(X\boxtimes Y,R_V)$ with $\operatorname{Hom}_{\mathcal C}(X\otimes Y,V)$. Explicitly the first is $\bigoplus_i\operatorname{Hom}(X,V\otimes i)\otimes\operatorname{Hom}(Y,i^*)$, evaluated by $\mathrm{id}_V\otimes\operatorname{ev}_i$, and the second is $\bigoplus_i\operatorname{Hom}(X,i)\otimes\operatorname{Hom}(Y,i^*\otimes V)$, evaluated by $\operatorname{ev}_i\otimes\mathrm{id}_V$. Their inverses are the duality adjunction followed by the simple-object decomposition; the identity $\sum qp=\mathrm{id}$ verifies both inverse equations. Thus they are isomorphisms natural in $X,Y,V$. These two representations respect the right $K$-actions: the internal-Hom right action is composition with $K$ on the source $\mathbf1$, and the free right action inserts exactly that further evaluation, by the definition of multiplication. Yoneda therefore gives a natural right $K$-linear isomorphism $\rho_V:L_V\to R_V$ identifying these two representations. [given, construct, algebra]

2.1 To check sliding, apply the preceding adjunction to an arbitrary map $X\boxtimes Y\to((V\otimes W)\boxtimes\mathbf1)K$. The proposed iterated slide inserts one simple decomposition in the $W$ adjunction and one in the $V$ adjunction. Applying their evaluations erases both insertions by $\sum qp=\mathrm{id}$, leaving the original map $X\otimes Y\to V\otimes W$. The direct map $\rho_{V\otimes W}$ has the same image by its definition. The adjunction is injective and natural, so Yoneda proves the sliding identity. The unit identity follows by the same calculation with the identity unit constraints. The interchange in this identity is between different Deligne factors and requires no braiding on $\mathcal C$. [step 1.1, algebra]

3.1 Free-module adjunction gives $\operatorname{Hom}_K(J(X),J(Y))=\operatorname{Hom}_{\mathcal D}(X\boxtimes\mathbf1,(Y\boxtimes\mathbf1)K)=\operatorname{Hom}_{\mathcal C}(X,Y)$: in the sum $K=\bigoplus_i i\boxtimes i^*$ only $i=\mathbf1$ contributes to the second equality. The resulting map sends $f$ exactly to $f\otimes\mathrm{id}_K$, proving full faithfulness. By sliding, every free module $(X\boxtimes Y)K$ is isomorphic to $J(X\otimes Y)$; additivity gives the same conclusion for a free module on any object of $\mathcal D$. [step 1.1, step 2.1, algebra]

4.1 The category of right $K$-modules is abelian with kernels and cokernels computed in $\mathcal D$: tensoring with $K$ is exact, so these inherit unique actions and satisfy the module universal properties. Every module $U$ has a finite free presentation: its action $U\otimes K\to U$ is epic, since it is split in $\mathcal D$ by $\mathrm{id}_U\otimes\eta$, and the same construction supplies a free epimorphism onto its kernel. By the preceding step the presenting free modules are $J(X),J(Y)$; full faithfulness lifts the presenting map to $f:X\to Y$. The functor $J$, whose underlying functor is tensoring with the fixed object $K$, is exact. Hence the presentation identifies $U$ with $J(\operatorname{coker}f)$. This proves essential surjectivity and the claimed equivalence without any separability assumption. [step 3.1, construct, algebra] ∎
