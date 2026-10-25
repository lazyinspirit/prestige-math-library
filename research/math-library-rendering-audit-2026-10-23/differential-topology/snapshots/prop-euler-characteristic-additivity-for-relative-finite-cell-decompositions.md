---
id: prop-euler-characteristic-additivity-for-relative-finite-cell-decompositions
kind: proposition
title: "Finiteness and additivity of the Euler characteristic"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-euler-characteristic-of-a-compact-manifold, def-singular-chain-complex-and-singular-homology, def-dimension, def-rationals, thm-long-exact-sequence-of-a-pair-in-singular-homology, thm-mayer-vietoris-sequence-in-singular-homology, thm-cellular-homology-computes-singular-homology, def-euler-characteristic-of-a-finite-cw-complex, thm-euler-poincare-formula-for-finite-cw-complexes, prop-euler-characteristic-is-additive-for-finite-cw-pairs, def-double-of-a-smooth-manifold-with-boundary, thm-the-double-has-a-well-defined-smooth-structure, thm-collar-neighborhood-theorem, thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology, cor-every-compact-smooth-manifold-admits-an-excellent-morse-function, def-axiom-of-choice, prop-morse-handle-chain-complex-computes-singular-homology, lem-exact-sequence-dimension-inequality, thm-universal-coefficient-theorem-for-homology-over-a-pid, thm-relative-cellular-homology-computes-relative-singular-homology, prop-cofibrations-are-characterized-by-a-retraction-of-the-mapping-cylinder-strip, lem-second-countable-smooth-manifolds-have-cw-homotopy-type]
justified_by: []
aliases: []
sources:
  scraped: []
  references:
    - title: "John W. Milnor, Topology from the Differentiable Viewpoint (complete 76-page PDF, including the appendix Classifying 1-manifolds)"
      url: "https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf"
      locator: "§6, printed pp. 32-41 (Euler number, finiteness, and additivity for compact manifolds)"
    - title: "Allen Hatcher, Algebraic Topology, Section 2.2"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "Section 2.2, Euler characteristic of finite CW pairs and the Mayer-Vietoris sequence, printed pp. 125-150"
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall 1974; complete PDF)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf"
      locator: "Ch. 3 §7, cell-count Euler characteristic, printed pp. 148-150"
dependency_level: 6
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $M$ be a compact
smooth $n$-manifold, possibly with boundary.

(i) Each $\dim_{\mathbb Q}H_i(M;\mathbb Q)$ is finite and
$H_i(M;\mathbb Q)=0$ for $i>n$, so $\chi(M)$ of
[[def-euler-characteristic-of-a-compact-manifold]] is a well-defined integer.

(ii) If $A\subseteq M$ is a compact smooth submanifold, possibly with boundary,
and $(M,A)$ is homotopy equivalent as a pair to a finite relative CW pair
with $c_k$ relative $k$-cells, then
$$\chi(M)=\chi(A)+\sum_k(-1)^kc_k=\chi(A)+\sum_k(-1)^k\dim_{\mathbb Q}H_k(M,A;\mathbb Q).$$

(iii) If $M=M_1\cup_NM_2$ with $M_1,M_2$ compact smooth submanifolds,
possibly with boundary, $N=M_1\cap M_2$ a common compact smooth submanifold, and
the inclusions $N\hookrightarrow M_i$ cofibrations, then
$$\chi(M)=\chi(M_1)+\chi(M_2)-\chi(N).$$

## Facts & Assumptions

**Given:** The Axiom of Choice and a compact smooth $n$-manifold $M$, possibly with boundary.

[F1] The double $DM$ is a closed smooth $n$-manifold. Its continuous folding map $q([x,+])=q([x,-])=x$ is well defined on the quotient and is a retraction onto the first labelled copy, with $q\circ i=\operatorname{id}_M$ ([[def-double-of-a-smooth-manifold-with-boundary]], [[thm-the-double-has-a-well-defined-smooth-structure]]).

[F2] For a closed smooth manifold with an excellent Morse function, the handle chain complex of [[prop-morse-handle-chain-complex-computes-singular-homology]] is a complex of finite-dimensional $\mathbb Q$-vector spaces with exactly $m_k(f)$ generators in degree $k$ whose homology is $H_k(M;\mathbb Q)$; hence those homology spaces are finite-dimensional and vanish above the dimension ([[cor-every-compact-smooth-manifold-admits-an-excellent-morse-function]], [[def-singular-chain-complex-and-singular-homology]]).

[F3] Homotopy equivalences induce isomorphisms on singular homology with any coefficients, and the long exact sequence of a pair and the Mayer-Vietoris sequence are long exact sequences of $\mathbb Q$-vector spaces ([[thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology]], [[thm-long-exact-sequence-of-a-pair-in-singular-homology]], [[thm-mayer-vietoris-sequence-in-singular-homology]]).

[F4] Alternating-dimension lemma: for a long exact sequence $\cdots\to A_k\to B_k\to C_k\to A_{k-1}\to\cdots$ of finite-dimensional vector spaces vanishing outside a finite range, one has $\sum_k(-1)^k(\dim A_k-\dim B_k+\dim C_k)=0$, and the intermediate spaces are finite-dimensional with the same vanishing range ([[lem-exact-sequence-dimension-inequality]], [[def-dimension]], [[def-rationals]]).

[F5] For a CW pair, relative cellular chains have one generator per relative cell and compute relative singular homology ([[thm-relative-cellular-homology-computes-relative-singular-homology]]). For a finite chain complex, writing $Z_k=\ker d_k$ and $B_k=\operatorname{im}d_{k+1}$ gives $\dim C_k=\dim H_k+\dim B_k+\dim B_{k-1}$; alternating summation cancels the boundary dimensions. Thus the alternating relative cell count equals the alternating rational relative Betti sum, even when the base subcomplex itself has infinitely many cells.

[F6] The smooth spaces $M_i,N$ in (iii) are CGWH under the assumed AC ([[lem-second-countable-smooth-manifolds-have-cw-homotopy-type]]), so the cofibration interface applies. For a closed cofibration $A\hookrightarrow X$, the homotopy extension property supplies a retraction $X\times I\to X\times\{0\}\cup A\times I$ ([[prop-cofibrations-are-characterized-by-a-retraction-of-the-mapping-cylinder-strip]]).

## Proof

1.1 For (i), the empty case is immediate. Otherwise the folding retraction [F1] gives $q_*i_*=\operatorname{id}$ on rational homology, so $H_i(M;\mathbb Q)$ embeds as a direct summand of $H_i(DM;\mathbb Q)$. Under the assumed Axiom of Choice, choose an excellent Morse function on the closed double and apply [F2]. Its handle complex is finite-dimensional and concentrated in degrees $0,\dots,n$; its homology, and hence the summand for $M$, is finite-dimensional and zero above $n$. This establishes well-definedness without presupposing $\chi(M)$. [F1, F2, given, algebra]

1.2 For (iii), replace the glued space by the double mapping cylinder $P=M_1\cup_{N\times\{0\}}(N\times I)\cup_{N\times\{1\}}M_2$. We verify that collapsing the cylinder is a homotopy equivalence $P\to M$. Let $C=M_1\cup_N(N\times I)$, with collapse $f:C\to M_1$. By [F6] extend the track $H(n,t)=[n,t]$ and the initial inclusion of $M_1$ to $H:M_1\times I\to C$. Set $j=H_1$, so $j(n)=[n,1]$. Then $fH$ joins $\operatorname{id}_{M_1}$ to $fj$ relative to $N$. On $C$, use $H(x,t)$ for $x\in M_1$ and $[n,s+t(1-s)]$ for $[n,s]$ in the cylinder; the formulas agree at $s=0$, define a homotopy from $\operatorname{id}_C$ to $jf$, and fix the free end $N\times\{1\}$. Gluing these maps and homotopies to the identity of $M_2$ proves the asserted equivalence. The compact subspaces $M_i$ are closed in $M$, so their pushout topology is the topology of $M_1\cup M_2=M$ by finite closed pasting. [F6, construct]

2.1 For (ii), step 1.1 applies to both $M$ and $A$. In the pair long exact sequence [F3], $H_k(M,A;\mathbb Q)$ lies between a quotient of $H_k(M;\mathbb Q)$ and a subspace of $H_{k-1}(A;\mathbb Q)$; it is therefore finite-dimensional and vanishes outside a finite range. Alternating summation of this exact sequence gives $\chi(M)-\chi(A)=\sum_k(-1)^k\dim H_k(M,A;\mathbb Q)$ by [F4], applied after cyclically relabelling the three terms if necessary. The given equivalence of pairs induces isomorphisms on these relative groups: the absolute homology maps are isomorphisms by [F3], and exactness of the pair sequences gives injectivity and surjectivity of the relative maps by lifting and subtracting successive neighbouring classes. Now [F5] computes the relative alternating sum as $\sum_k(-1)^kc_k$, proving both equalities without requiring a finite absolute CW structure on $A$. [F3, F4, F5, step 1.1, algebra]

3.1 The open subsets $U=M_1\cup(N\times[0,2/3))$ and $V=M_2\cup(N\times(1/3,1])$ cover $P$. They deformation retract to $M_1,M_2$, while $U\cap V=N\times(1/3,2/3)$ retracts to $N$. Thus [F3] and step 1.2 give a Mayer–Vietoris sequence with homology terms those of $N$, $M_1\sqcup M_2$ and $M$. All terms are finite-dimensional and vanish outside a finite range by step 1.1. Applying [F4] at $t=-1$ gives $\chi(N)-\chi(M_1)-\chi(M_2)+\chi(M)=0$, as required. [F3, F4, step 1.1, step 1.2, algebra] ∎
