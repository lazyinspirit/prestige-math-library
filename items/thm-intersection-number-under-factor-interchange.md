---
id: thm-intersection-number-under-factor-interchange
kind: theorem
title: "Intersection number under factor interchange"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-oriented-intersection-number, thm-oriented-intersection-number-is-homotopy-invariant, lem-direct-sum-factor-swap-scales-oriented-bases-by-a-sign, def-product-orientation, def-transverse-smooth-maps, def-transverse-complementary-dimensional-intersection-set, def-compact-space, def-local-oriented-intersection-sign, prop-the-diagonal-is-an-embedded-submanifold, thm-transversality-homotopy-theorem, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall, 1974; complete 236-page PDF)"
      url: https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf
      locator: "Ch. 3 §3, printed p. 115 (Proposition $I(f,g)=(-1)^{(\\dim X)(\\dim Z)}I(g,f)$ and its submanifold corollary)"
---

## Statement

Let $f:X^x\to M^n$ and $g:Z^z\to M^n$ be transverse smooth maps from compact oriented manifolds without boundary with $x+z=n$ into an oriented boundaryless manifold $M$. Then $$I(g,f)=(-1)^{xz}\,I(f,g),$$ with the sign convention of [[def-local-oriented-intersection-sign]] (first factor first), and in particular the two intersection numbers differ exactly by the graded-commutativity sign. Under $\mathrm{AC}_\omega$ for transverse representatives and homotopy invariance, the same identity holds for compact oriented complementary-dimensional submanifolds $A^a,B^b\subseteq M$ without boundary, whether or not they are transverse: $$I(B,A)=(-1)^{ab}\,I(A,B).$$

## Facts & Assumptions

**Given:** Transverse maps $f:X^x\to M^n$, $g:Z^z\to M^n$ from compact oriented manifolds without boundary with $x+z=n$, $M$ oriented and boundaryless; for the submanifold extension, $\mathrm{AC}_\omega$.

[F1] The coincidence set $\{(a,b):f(a)=g(b)\}$ is the fibre product $T_{(a,b)}$-wise the kernel of $(df_a,-dg_b)$, a $0$-dimensional embedded submanifold of the compact manifold $X\times Z$ ([[def-transverse-complementary-dimensional-intersection-set]]); being closed in $X\times Z$ it is compact, and a compact discrete space is finite ([[def-compact-space]]). Hence the sum $\sum_{(a,b):f(a)=g(b)}\varepsilon(a,b)$ below is finite.

[F2] At a coincidence point the local sign of the ordered pair $(f,g)$ is defined by comparing $(df_a(T_aX),dg_b(T_bZ))$, in that order, with $T_yM$ ([[def-local-oriented-intersection-sign]]); the product orientation lists the factors in the written order ([[def-product-orientation]]).

[F3] Swapping the two summands of an internal direct sum of dimensions $k,l$ changes the orientation comparison by $(-1)^{kl}$, and the identity between the two ordered sums has exactly that sign ([[lem-direct-sum-factor-swap-scales-oriented-bases-by-a-sign]]).

[F4] $I(f,g)$ is the sum $\sum\varepsilon(a,b)$ of the local signs over the finite coincidence set, and the same definition applies to the pair $(g,f)$ ([[def-oriented-intersection-number]], [[def-transverse-smooth-maps]]).

[F5] The diagonal $\Delta_M$ is embedded ([[prop-the-diagonal-is-an-embedded-submanifold]]) and is closed since $M$ is Hausdorff. Give it the orientation transported from $M$. Under $\mathrm{AC}_\omega$, each compact-source map has a transverse homotopic representative ([[thm-transversality-homotopy-theorem]]), and its intersection number with a closed oriented target is homotopy invariant ([[thm-oriented-intersection-number-is-homotopy-invariant]], [[def-countable-choice]]).

## Proof

**Proof technique:** direct; compare the two ordered sums at each coincidence point.

1.1 By [F1] the coincidence set is finite, so both sums $I(f,g)$ and $I(g,f)$ are finite sums over the same index set; this exhibits $I(f,g)$ for two maps as a finite sum of the local signs of [F2] and provides the map--map intersection numbers used in the statement. [F1, F2, F4, given]

1.2 At a coincidence point $(a,b)$ with $f(a)=g(b)=y$, transversality and $x+z=n$ make $L=(df_a,dg_b):T_aX\oplus T_bZ\to T_yM$ an isomorphism. The corresponding isomorphism for $(g,f)$ is $L\circ s^{-1}$, where $s$ swaps the source factors and has sign $(-1)^{xz}$ by [F3]. Hence $\varepsilon_{(g,f)}(b,a)=(-1)^{xz}\varepsilon_{(f,g)}(a,b)$, including signed determinant rays in dimension zero. [F2, F3, given, algebra]

1.3 For any transverse pair $u:A^a\to M$, $v:B^b\to M$, the product map $u\times v:A\times B\to M\times M$ is transverse to $\Delta_M$: the quotient $(r,s)\mapsto r-s$ has kernel $T\Delta_M$ and sends its derivative onto $du(TA)+dv(TB)=TM$. Its local intersection sign is $(-1)^b$ times that of $(u,v)$. Indeed in oriented determinant frames put $C=[du\ dv]$; the derivative matrix for $(u\times v,i_\Delta)$ has columns $(du,0),(0,dv),(I,I)$. Subtract the bottom row block from the top. The resulting block lower triangular matrix has diagonal blocks $[du\ {-dv}]$ and $I$. Its determinant sign is therefore $(-1)^b\operatorname{sgn}\det C$. In dimension zero the supplied point rays multiply the same comparisons, with $\Delta_M$ carrying the ambient ray. Summing gives $I(u\times v,\Delta_M)=(-1)^bI(u,v)$. [F2, F3, F4, F5, algebra]

2.1 The swap $(a,b)\mapsto(b,a)$ identifies the two finite coincidence sets. Summing 1.2 gives $I(g,f)=(-1)^{xz}I(f,g)$. In particular this proves the submanifold identity when $A,B$ are transverse, by taking their inclusions. [F4, step 1.1, step 1.2, algebra]

3.1 Now let $A,B$ be arbitrary compact oriented complementary-dimensional submanifolds without boundary. Under [F5] choose $u:A\to M$ homotopic to $i_A$ and transverse to $B$, and $v:B\to M$ homotopic to $i_B$ and transverse to $A$. By definition $I(A,B)=I(u,i_B)$ and $I(B,A)=I(v,i_A)$. The transverse maps $u\times i_B$ and $i_A\times v$ are homotopic to $i_A\times i_B$, so [F5] applied to the closed oriented diagonal gives equality of their intersection numbers. By 1.3 this reads $(-1)^bI(u,i_B)=(-1)^bI(i_A,v)$. Applying 2.1 to the transverse pair $(i_A,v)$ gives $I(i_A,v)=(-1)^{ab}I(v,i_A)$, hence $I(B,A)=(-1)^{ab}I(A,B)$. Compactness of the source products and closedness of the diagonal supply finite counts; no transversality of the original inclusions is required. Countable Choice is used only for this homotopy-class extension; the finite transverse swap calculation is choice-free and includes $a=0$ or $b=0$ with sign $+1$. [F4, F5, step 2.1, step 1.3, choose, algebra] ∎
