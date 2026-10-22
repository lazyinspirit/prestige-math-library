---
id: lem-genus-two-marked-cap-classes-exhaust-the-even-completion
kind: lemma
title: Genus-two marked cap classes exhaust the even completion
status: draft
origin: session
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - lem-relative-surface-insertions-use-marked-loop-cutdowns
  - lem-genus-two-trace-morse-perturbation-gives-the-cap-class-basis
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Vicente Munoz, Gluing formulae for Donaldson invariants for connected sums along surfaces, Lemma21
      url: https://arxiv.org/abs/dg-ga/9702002
---

## Statement

Assume full AC and the actual marked-loop construction for $(Y,\gamma)=(\Sigma_2\times S^1,\{q\}\times S^1)$ in the signed quotient convention. Over $R=\mathbb Q[[t]]$, its even homology is free of rank four, with actual relative cap basis
$$e_i(t)=\Phi(\Sigma_2\times D^2,\Sigma_2^i e^{t\Delta}),\qquad 0\le i\le3,\qquad\Delta=\{q\}\times D^2.$$
The odd group is free of rank four as well. The actual marked pairing matrix $N(t)$ on this basis is invertible over $R$ and has constant term the supplied ordinary cap matrix $N$. Thus every even relative vector in this completed theory is actually contained in this cap span. This conclusion does not calculate $N(t)$ beyond its constant term or determine the deformed surface action.

## Facts & Assumptions

**Given:** The actual marked construction, compatible continuation data to all finite orders, and rational coefficients.

[F1] The finite coefficient chain complex, relative surface cycles and geometric gluing pairing are [[lem-relative-surface-insertions-use-marked-loop-cutdowns]]. Full AC is inherited there. [[def-axiom-of-choice]]

[F2] The chosen sufficiently small ordinary perturbation has four generators of each parity. The four actual ordinary cap classes have invertible pairing $N$ of determinant $1/16$. [[lem-genus-two-trace-morse-perturbation-gives-the-cap-class-basis]]

## Proof

1.1 **Use the same finite critical set.** In [F1]'s marked construction use [F2]'s actual ordinary perturbation. Marked incidences change the coefficient differential, not the critical-point set. Therefore its chain modules over $R$ are $C_{\rm even}=R^4$ and $C_{\rm odd}=R^4$. The variable $t$ has degree two, so it preserves parity. For the actual cap with relative disk $\Delta$, [F1]'s transgression construction gives four even cycles $e_i(t)$; setting $t=0$ gives exactly the ordinary cap classes, not a projection to a point eigenspace. [F1, F2, given, construct]

2.1 **Their actual pairing remains nondegenerate.** Gluing the two marked caps is the closed ruled surface with insertions $\Sigma_2^{i+j}e^{t\mathbb{CP}^1}$. This defines $N_{ij}(t)$ by actual cutdown gluing from [F1]. At $t=0$ it is $N_{ij}$ from [F2]. Consequently $\det N(t)$ has nonzero constant term $1/16$ and is a unit of $R$. If an $R$-linear combination of these cycles were a boundary, its geometric pairing with every reverse cap cycle would vanish, since the pairing is a chain pairing on homology. Multiplication by $N(t)^{-1}$ then makes all its coefficients zero. Thus these four homology classes are $R$-independent. This uses an actual supplied pairing and actual cycles before any matrix inversion. [F1, F2, step 1.1, algebra]

3.1 **There is no unseen differential or torsion.** Tensor the complex with the fraction field $K=\mathbb Q((t))$. Its even chain dimension is four, and step 2.1 gives four independent even homology classes. Hence the sum of the ranks of the incoming and outgoing differentials at its even part is zero. Both differential matrices vanish over $K$, and therefore over the integral domain $R$. Thus the completed differential on this particular chain model is zero, and its even and odd homologies are respectively $R^4$. The reductions $e_i(0)$ are an ordinary basis by [F2], so the determinant of their four cycle-coordinate columns has nonzero constant term. Those columns form an $R$-basis, not merely a full-rank sublattice. Every actual even relative vector is consequently in their span. Continuation transports this conclusion to other compatible choices. [F1, F2, step 1.1, step 2.1, algebra]

4.1 **The residual enumerative input is explicit.** In this actual basis any geometric even relative vector is determined by its four pairings, and two such vectors pair using the actual $N(t)^{-1}$. Its constant term is the ordinary inverse matrix. Nothing in steps 1.1--3.1 forces its higher coefficients to vanish or fixes the deformed surface operator. Iterated genus-two necks crossing the dual surface require these genuine marked coefficients. The ordinary normalization $-32$ is now supported by an actual completed cap basis, but its exponential dependence for the higher-genus witness is still a separate geometric count. [F1, step 2.1, step 3.1, algebra]
