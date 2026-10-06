---
id: lem-a-smooth-three-manifold-with-h-one-z-two-and-h-two-zero-does-not-embed-in-s-four
kind: lemma
title: "A closed three-manifold with H_1 = Z/2 and H_2 = 0 does not embed in S^4"
status: draft
origin: session
deps: [thm-alexander-duality-for-compact-locally-contractible-subsets-of-a-sphere, thm-topological-universal-coefficient-short-exact-sequence-for-cohomology, thm-mayer-vietoris-sequence-in-singular-homology, thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold, cor-homology-of-spheres, cor-homotopic-maps-induce-the-same-map-on-singular-homology, thm-choice-implies-dependent-implies-countable-choice, def-axiom-of-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Jonathan A. Hillman, Locally Flat Embeddings of 3-Manifolds in S^4, section 2.3, Hantzsche obstruction"
      url: https://secure.maths.usyd.edu.au/u/jonh/embkDec24.pdf
---

## Statement

Assume AC. Let $M$ be a closed connected oriented smooth three-manifold with integral homology $H_1(M)=\mathbb Z/2$, $H_2(M)=0$ and $H_3(M)=\mathbb Z$. Then $M$ admits no smooth embedding into $S^4$, and hence none into $\mathbb R^4$.

## Facts & Assumptions

**Given:** AC and $M$ as stated; all homology and cohomology below use integral coefficients.

[F1] For a nonempty proper compact locally contractible $K\subset S^4$, Alexander duality gives $\widetilde H_i(S^4\setminus K)\cong\widetilde H^{3-i}(K)$ ([[thm-alexander-duality-for-compact-locally-contractible-subsets-of-a-sphere]]).

[F2] UCT gives $0\to\operatorname{Ext}^1_{\mathbb Z}(H_{r-1}(X),\mathbb Z)\to H^r(X)\to\operatorname{Hom}(H_r(X),\mathbb Z)\to0$ ([[thm-topological-universal-coefficient-short-exact-sequence-for-cohomology]]).

[F3] Mayer–Vietoris applies to open covers, sphere homology is zero in degrees one and two, and deformation retractions induce homology isomorphisms ([[thm-mayer-vietoris-sequence-in-singular-homology]], [[cor-homology-of-spheres]], [[cor-homotopic-maps-induce-the-same-map-on-singular-homology]]).

[F4] A closed smooth submanifold has a tubular neighbourhood under countable choice; AC supplies countable choice ([[thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold]], [[thm-choice-implies-dependent-implies-countable-choice]], [[def-axiom-of-choice]]).

## Proof

1.1 Suppose $M\subset S^4$ is smoothly embedded. Its normal line is oriented by the orientations of $M$ and $S^4$, and has a global positive unit section: in an oriented local line frame the positive unit vector is independent of the frame, so these sections glue. Compactness and [F4] give a product tube $M\times(-\epsilon,\epsilon)$. By [F2], $H^3(M)=\mathbb Z$, since $H_2(M)=0$ and $H_3(M)=\mathbb Z$. Thus [F1] gives $\widetilde H_0(S^4\setminus M)=\mathbb Z$. The complement is an open manifold and is locally path connected; $H_0$ is free on its path components, so it has exactly two components $U,V$. Every component has nonempty frontier in $M$, since otherwise it is both open and closed in connected $S^4$. Near any frontier point a hypersurface chart has exactly two connected local sides. Each of the two global halves of the product tube is connected because $M$ is connected. Every complementary component meets one of them, by the local side chart at a frontier point. Therefore the two tube halves lie in distinct components, one in $U$ and one in $V$. Their closures $A=\overline U$ and $B=\overline V$ are compact smooth manifolds with common boundary $M$, are locally contractible, and satisfy $S^4=A\cup B$ and $A\cap B=M$. [F1, F2, F4, given, construct]

2.1 Enlarge $A$ and $B$ by a small portion of the opposite tube half to obtain an open cover of $S^4$. The two open sets retract onto $A,B$, and their intersection retracts onto $M$, by moving the collar coordinate linearly to zero on the added halves. Also $U\hookrightarrow A$ and $V\hookrightarrow B$ are homotopy equivalences: a collar map which moves coordinate $s\ge0$ slightly into $s>0$, and equals $s$ outside a smaller collar, is homotopic to the identity by linear interpolation and supplies homotopy inverses for the interior inclusions. Applying [F3] to the open cover, the segments $H_2(M)\to H_2(A)\oplus H_2(B)\to H_2(S^4)$ and $H_2(S^4)\to H_1(M)\to H_1(A)\oplus H_1(B)\to H_1(S^4)$ show $H_2(A)=H_2(B)=0$ and $H_1(A)\oplus H_1(B)\cong\mathbb Z/2$. Hence one of $H_1(A),H_1(B)$ is zero and the other is $\mathbb Z/2$. [F3, step 1.1, construct]

3.1 Since $S^4\setminus A=V$, applying [F1] to $A$ and then the interior equivalence in step 2.1 gives $H_1(B)\cong H_1(V)\cong H^2(A)$. By [F2] and $H_2(A)=0$, this equals $\operatorname{Ext}^1_{\mathbb Z}(H_1(A),\mathbb Z)$. The latter is zero if $H_1(A)=0$ and is $\mathbb Z/2$ if $H_1(A)=\mathbb Z/2$: for the second calculation use the free resolution $0\to\mathbb Z\xrightarrow{2}\mathbb Z\to\mathbb Z/2\to0$, whose dual has cokernel $\mathbb Z/2$. Thus $H_1(A)$ and $H_1(B)$ are simultaneously zero or simultaneously $\mathbb Z/2$, contradicting step 2.1. No smooth embedding in $S^4$ exists. Composing a putative embedding in $\mathbb R^4$ with inverse stereographic projection would give one in $S^4$, proving the last assertion. [F1, F2, step 1.1, step 2.1, algebra] ∎
