---
id: "thm-relative-hurewicz-theorem"
kind: "theorem"
title: "Relative Hurewicz theorem in the simple-connectivity range"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-hurewicz-homomorphism","lem-cell-attachment-below-the-first-nonzero-homotopy-degree-preserves-the-required-connectivity","def-axiom-of-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher Theorem 4.32 and proof; May Chapter 15 §1
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Assume the Axiom of Choice. Let $n\ge2$ and let $(X,A,x_0)$ be an $(n-1)$-connected CW pair, with $A$ nonempty, path connected and simply connected. Then
$$H_i(X,A;\mathbb Z)=0\quad(0\le i<n),\qquad h:\pi_n(X,A,x_0)\xrightarrow{\cong}H_n(X,A;\mathbb Z).$$
Here $h$ is the relative Hurewicz homomorphism defined by the oriented disk class. In degree two the stated hypotheses make the relative group itself abelian; no additional abelianization is necessary. No general relative theorem with nontrivial fundamental-group action is asserted.

## Facts & Assumptions

[F1] [[def-hurewicz-homomorphism]] supplies the actual natural homomorphism, with the relative disk generator whose boundary is the positive sphere orientation, and its invariance under homotopies of pairs.

[F2] [[lem-cell-attachment-below-the-first-nonzero-homotopy-degree-preserves-the-required-connectivity]] gives the model without relative cells below $n$, lower singular-homology vanishing, stability above the $(n+1)$-cell stage, and the two identical incidence cokernel presentations commuting with the actual Hurewicz map when $A$ is simply connected.

[A1] [[def-axiom-of-choice]] is assumed as in [F2]: it is used for arbitrary-cell cellular approximation and selection of compression disks in the replacement equivalence rel $A$. The computations on that supplied model are choice-free.

## Proof

**Given:** The based CW pair, its stated connectivity and simple connectivity, $n\ge2$, and [A1].

1.1 All hypotheses of [F2] hold: the pair is CW and $(n-1)$-connected, $A$ is nonempty and simply connected, and AC is available. Thus there is a homotopy equivalent pair $(Z,A)$ rel $A$ with no relative cells below $n$. The lower homology assertion in [F2] gives $H_i(Z,A)=0$ for $0\le i<n$. The equivalence and inverse homotopies of pairs identify these groups with $H_i(X,A)$, as verified by the relative prism calculation in [F1]. Hence $H_i(X,A)=0$ throughout the required range, including degree zero. [F1, F2, A1, given]

2.1 Let $F_n$ and $F_{n+1}$ be the free abelian groups on the model's relative cells in those dimensions, and $D:F_{n+1}\to F_n$ its degree-incidence map. By [F2], both $\pi_n(Z,A,x_0)$ and $H_n(Z,A)$ are identified with $F_n/\operatorname{im}D$, with $h$ induced by the identity of $F_n$. Explicitly, every homology class has a finite cell-vector representative $v\in F_n$, and the homotopy class represented by the same vector maps to it, proving surjectivity. If a homotopy class represented by $v$ has zero image, then $v\in\operatorname{im}D$ in the homology presentation. The homotopy presentation has exactly that same relation subgroup, so its class is zero, proving injectivity. Both maps are homomorphisms by [F1] and the presentations in [F2]. Naturality in [F1] and the equivalence rel $A$ transfer this isomorphism to the displayed $h$ on $(X,A,x_0)$; the equivalence fixes $x_0$, so no basepoint change is concealed. [F1, F2, step 1.1]

3.1 When $n=2$, [F2] proves that the first relative cell group is free abelian under simple connectivity of $A$ and that its surjective image in the full relative group has the identical cokernel presentation. Thus that full group is abelian before identifying it with homology. The result does not replace a potentially nonabelian group by its abelianization without justification. An equal pair gives zero groups; no relative cells give zero free groups, and a single cell or a point subspace is covered by the same presentation. A based pair cannot have empty $A$; degree one is outside this relative assertion. The two kernel/image directions were established separately in step 2.1, with zero vectors included. AC is propagated exactly from the model-equivalence construction in [F2], as stated in [A1]. Dropping simple connectivity would invalidate that supplier's free-basis hypothesis, so this proof makes no assertion in that case. This completes the theorem. [F1, F2, A1, step 1.1, step 2.1] ∎
