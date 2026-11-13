---
id: thm-finite-wall-crossing-input-artin-tits-prerequisites
kind: theorem
title: Independent finite local wall-crossing formula
status: draft
domain: mathematics
origin: pipeline
deps:
  - thm-relative-chamber-labelling-input-artin-tits-prerequisites
  - prop-finite-opposition-interface-artin-tits-prerequisites
  - lem-author-9b7c42e8f103-chamber-topology
  - prop-tits-domain-interface-artin-tits-prerequisites
  - def-arrangement-topology-interface-artin-tits-prerequisites
dependency_roles:
  thm-relative-chamber-labelling-input-artin-tits-prerequisites: mathematical-premise
  prop-finite-opposition-interface-artin-tits-prerequisites: mathematical-premise
  lem-author-9b7c42e8f103-chamber-topology: mathematical-premise
  prop-tits-domain-interface-artin-tits-prerequisites: mathematical-premise
  def-arrangement-topology-interface-artin-tits-prerequisites: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Tits Cone Intersections and Applications
      url: https://www.maths.gla.ac.uk/~mwemyss/MainFile_for_web.pdf
      locator: Definitions 1.8, 1.16 and 1.19 and Theorem 1.20(1)(a),(c),(d) and
        (2)(a), printed pp. 6, 8–9 (PDF pp. 30, 32–33)
      statement: For a chamber label (x,I) and a outside I with W_K finite, K=I union
        {a}, the simple crossing is (x w_I w_K, K minus {iota_K(a)}). This is a
        chamber label, crossing at iota_K(a) returns (x,I), and the chambers are
        adjacent at the face x C_K. If the fixed subset J is strongly Dynkin,
        any two labels are connected by finitely many simple crossings.
      hypotheses: A Coxeter graph and its canonical representation; J is the fixed
        subset and I is the variable subset in the chamber label. The local
        crossing requires W_{I union {a}} finite. Strongly Dynkin means J is
        proper and W_{J union {s}} is finite for every s outside J.
      reading_limits: Checked the web-extracted text of Definitions 1.8, 1.16 and 1.19
        and Theorem 1.20(1)(a),(c),(d),(2)(a) in this pass. PDF screenshots were
        unavailable; no visual reading or review of the source proof is claimed.
        The fixed and variable subsets are renamed J and I. The local proof
        below establishes the closed-wall and relative-interior identification
        under the portal conventions; it does not reconstruct the imported
        theorem.
formulation_deps:
  - thm-relative-chamber-labelling-input-artin-tits-prerequisites
  - prop-finite-opposition-interface-artin-tits-prerequisites
  - lem-author-9b7c42e8f103-chamber-topology
  - prop-tits-domain-interface-artin-tits-prerequisites
  - def-arrangement-topology-interface-artin-tits-prerequisites
argument_deps:
  - thm-relative-chamber-labelling-input-artin-tits-prerequisites
  - prop-finite-opposition-interface-artin-tits-prerequisites
  - lem-author-9b7c42e8f103-chamber-topology
  - prop-tits-domain-interface-artin-tits-prerequisites
  - def-arrangement-topology-interface-artin-tits-prerequisites
proof_strategy: direct
dependency_level: 6
---

## Statement

Let $(W,S)$ be a finite-rank Coxeter system, with canonical real reflection representation, dual action and Tits cone $U$, and fix $J\subseteq S$. For $I\subseteq S$, write $W_I=\langle I\rangle$, put $E_I=\{f:f(\alpha_i)=0\ (i\in I)\}$, and let $C_I$ consist of the vectors in $E_I$ positive on the simple roots indexed by $S\setminus I$. Set $E=E_J$, with its Euclidean topology, $T=U\cap E$ and $T^\circ=\operatorname{int}_E T$. A $J$-chamber label is a pair $(x,I)$ with $W_Jx=xW_I$ such that $x$ has minimum Coxeter length in $xW_I$; it labels the $J$-chamber $xC_I$ in the relative-interior arrangement. For a root $\alpha$ put $H_\alpha=\{f:f(\alpha)=0\}$. The arrangement hyperplanes are the proper traces $E\cap H_\alpha$ meeting $T^\circ$. A wall is a nonempty intersection of a chamber's closure in $E$ with an arrangement hyperplane, of affine dimension $\dim E-1$.

Let $(x,I)$ be a $J$-chamber label, let $a\in S\setminus I$, and put $K=I\cup\{a\}$. Suppose $W_K$ is finite. For a finite standard parabolic $W_L$, write $w_L$ for its longest element and $\iota_L$ for the permutation of $L$ determined by $w_L\alpha_s=-\alpha_{\iota_L(s)}$. Define $b=\iota_K(a)$ and $(y,I')=(xw_Iw_K,K\setminus\{b\})$. Then $(y,I')$ is a $J$-chamber label, its chamber is adjacent to $xC_I$ through the common wall $\overline{xC_K}$, and crossing back at $b$ returns $(x,I)$. Here the bar denotes closure in $E$, and $xC_K$ is the relative interior of that wall in its affine hull.

Call $J$ strongly Dynkin if $J$ is a proper subset of $S$ and $W_{J\cup\{s\}}$ is finite for every $s\in S\setminus J$. If $J$ is strongly Dynkin, any two $J$-chamber labels are connected by a finite sequence of the crossings just described.

## Statement references

[[thm-relative-chamber-labelling-input-artin-tits-prerequisites]]

[[prop-finite-opposition-interface-artin-tits-prerequisites]]

[[lem-author-9b7c42e8f103-chamber-topology]]

[[prop-tits-domain-interface-artin-tits-prerequisites]]

[[def-arrangement-topology-interface-artin-tits-prerequisites]]

## External input

Iyama–Wemyss, Definitions 1.8, 1.16 and 1.19 and Theorem 1.20(1)(a),(c),(d) and (2)(a), supplies the displayed crossing label, the inverse crossing, adjacency at the face $xC_K$, and finite crossing connectivity under the strongly Dynkin hypothesis. The source's fixed and variable subsets are denoted $J$ and $I$ here. These assertions are imported; their source proof is not reproduced or independently reviewed. The local proof below identifies the closed wall and its relative interior under the stated portal conventions.

## Facts & Assumptions

[F1] The canonical representation, dual action, coordinate faces, minimum-length labels and their bijection with the relative-interior arrangement chambers are supplied by [[thm-relative-chamber-labelling-input-artin-tits-prerequisites]].

[F2] Finite parabolics have the longest elements and opposition permutations stated above, including the empty-parabolic case, by [[prop-finite-opposition-interface-artin-tits-prerequisites]].

[F3] These chambers are the source $J$-chambers $xC_I\subseteq E_J$ with $|I|=|J|$, with the same Euclidean subspace topology. Their arrangement consists of proper root-hyperplane traces meeting $T^\circ$. [[lem-author-9b7c42e8f103-chamber-topology]]

[F4] The Tits cone is the union of the translates of the closed fundamental chamber. The stabilizer of every $f\in C_L$ is $W_L$, and $C_L\subseteq U^\circ$ when $W_L$ is finite. [[prop-tits-domain-interface-artin-tits-prerequisites]]

[F5] Closures are in $E$; a wall is a nonempty chamber-closure intersection with an arrangement hyperplane having affine dimension $\dim E-1$. Distinct chambers sharing a wall are adjacent. [[def-arrangement-topology-interface-artin-tits-prerequisites]]

[F6] The crossing-label, inverse-crossing, adjacency and strongly Dynkin connectivity assertions are the independent input recorded in External input.

## Proof

**Given:** The system, label and subsets in the Statement, with $W_K$ finite for the local crossing. **Goal:** Establish the claimed crossing assertions, with the closed-wall convention.

1.1 With the longest elements interpreted by [F2], apply [F6] to the label of [F1]. It gives the label $(y,I')$, the inverse crossing at $b$, and distinct adjacent source chambers; it also gives the asserted finite crossing connectivity when $J$ is strongly Dynkin. By [F1] and [F3] the same labelled subsets are the relative-interior arrangement chambers. It remains to identify their common wall in the convention of [F5]. [F1, F2, F3, F5, F6, given]

2.1 For any $L\subseteq S$, let $D_L=\{f\in E_L:f(\alpha_s)\geq0\ (s\notin L)\}$. In dual coordinates, $C_L$ spans $E_L$: the vector with coordinates $1$ off $L$ and $0$ on $L$, and its sums with each dual basis vector off $L$, lie in $C_L$, and their differences give that basis. The inequalities defining $D_L$ are closed; adding $\varepsilon$ to each coordinate off $L$ shows every point of $D_L$ is a limit of points of $C_L$. Thus $D_L$ is the closure of $C_L$ in the full dual space, and these assertions include $L=S$. By [F3], $xC_I\subseteq E$ and $|I|=|J|$, so spanning and equality of dimensions give $xE_I=E$; likewise $yE_{I'}=E$. Finite-dimensional linear automorphisms and their inverses are continuous, so closures commute with $x$ and $y$. Consequently $\overline{xC_I}=xD_I$ and $\overline{yC_{I'}}=yD_{I'}$. Put $H=xE_K$. Since $K=I\cup\{a\}$, the dual action gives $H=E\cap H_{x\alpha_a}$, a codimension-one subspace of $E$. [F1, F3, step 1.1, algebra]

3.1 Put $q=w_Iw_K\in W_K$, so $y=xq$. By [F4], $W_K$ fixes every point of $C_K$; the spanning argument in step 2.1 shows that it fixes $E_K$ pointwise. Hence $yE_K=xE_K=H$ and $yD_K=xD_K$. Since $K=I'\cup\{b\}$ as well as $K=I\cup\{a\}$, the coordinate descriptions give $xD_I\cap H=xD_K=yD_K=yD_{I'}\cap H$. Thus both chamber closures meet $H$ in $F=xD_K=\overline{xC_K}$. The affine hull of $D_K$ is $E_K$, because it contains $0$ and spans $E_K$. In its free coordinates the relative interior of the nonnegative orthant $D_K$ is exactly the strictly positive orthant $C_K$: positive coordinates persist in a sufficiently small ball, whereas a zero free coordinate can be perturbed negatively in every ball. If there are no free coordinates, both sets are $\{0\}$ in the zero space. Transporting by $x$ gives $\operatorname{aff}(F)=H$, $\dim F=\dim E-1$, and relative interior $xC_K$. [F4, step 2.1, algebra]

4.1 By [F4] and finiteness of $W_K$, $C_K\subseteq U^\circ$. Also $xU=U$, since left multiplication by $x$ permutes the translates defining $U$. As $x$ is a linear homeomorphism, $xC_K\subseteq U^\circ$. Step 3.1 places this nonempty set in $E\cap H$, so it lies in $T^\circ$ and $H$ meets $T^\circ$. Since $x\alpha_a$ is a root and $H$ is proper in $E$, [F3] makes $H$ an arrangement hyperplane. Step 3.1 and [F5] now identify $F$ as a common wall of the two distinct chambers. Its relative interior and all remaining assertions were established in steps 3.1 and 1.1. [F1, F3, F4, F5, step 1.1, step 2.1, step 3.1] ∎

## Source notes

The crossing and connectivity assertions are imported from the independent Iyama–Wemyss source. The coordinate argument is locally authored and adapts the wall terminology; it makes no claim to reconstruct that source theorem. The local hypothesis remains finiteness of the whole parabolic $W_K$; no componentwise weakening or weaker connectivity hypothesis is asserted.
