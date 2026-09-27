---
id: thm-simple-homotopy-equivalences-have-zero-whitehead-torsion
kind: theorem
title: "Simple homotopy equivalences have zero torsion"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-mapping-cone-of-a-chain-map, def-finite-based-free-chain-complex-and-its-contraction-torsion, lem-the-stable-elementary-subgroup-is-normal-and-contains-the-commutator-subgroup, def-k-one-of-a-ring-and-the-whitehead-group-of-a-discrete-group, def-simple-homotopy-equivalence, lem-an-elementary-expansion-has-zero-whitehead-torsion, thm-composition-and-sum-formulas-for-whitehead-torsion, thm-whitehead-torsion-is-independent-of-cellular-approximation-basepaths-lifts-orientations-orders-and-contraction, lem-elementary-basis-changes-orientations-and-deck-lift-changes-die-in-the-whitehead-group, def-homotopy-equivalence, def-based-cellular-chain-complex-of-a-universal-cover, def-elementary-expansion-and-collapse-of-finite-cw-complexes, def-whitehead-torsion-of-a-finite-cw-homotopy-equivalence]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Lück, Lemma 2.18(1), p.35"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Lemma 2.18(1), p.35"
    - title: "Davis–Kirk, Theorem 11.31(2), p.344"
      url: "https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf"
      locator: "Theorem 11.31(2), p.344"
---
## Statement

Every simple homotopy equivalence $f:X\to Y$ of finite CW complexes has
$$\tau(f)=0\quad\text{in }\mathrm{Wh}(\pi_1(Y,y))$$
in the correctly transported target Whitehead group; for disconnected $Y$ the vanishing holds componentwise in $\bigoplus_{D\in\pi_0(Y)}\mathrm{Wh}(\pi_1D)$.

## Facts & Assumptions

**Given:** A simple homotopy equivalence $f:X\to Y$ of finite CW complexes.

[F1] $f$ is simple when $f$ is homotopic to a finite composite $X=X_0\xrightarrow{f_1}\cdots\xrightarrow{f_k}X_k=Y$ in which each $f_i$ is an elementary expansion, an elementary collapse, or a cellular isomorphism, a cellular isomorphism meaning a homeomorphism carrying the cell structure of its source isomorphically onto that of its target; every such composite is a homotopy equivalence, a composite of simple homotopy equivalences is again simple, any map homotopic to a simple homotopy equivalence is simple, for disconnected complexes each operation is performed componentwise and respects the induced bijection on components, and the empty sequence exhibits the identity as simple ([[def-simple-homotopy-equivalence]], [[def-homotopy-equivalence]]).

[F2] The class $\tau(f)\in\mathrm{Wh}(\pi_1(Y,y))$ attached to a choice of cellular representative, universal covers, lifts, basepoints, orientations, orders of the cells and chain contraction is independent of all these choices; homotopic homotopy equivalences of finite CW complexes have equal torsion; basepoint changes transport the class canonically; and for disconnected $Y$ the statements hold componentwise ([[thm-whitehead-torsion-is-independent-of-cellular-approximation-basepaths-lifts-orientations-orders-and-contraction]]).

[F3] For homotopy equivalences $f:X\to Y$, $g:Y\to Z$ of finite CW complexes, $\tau(g\circ f)=\tau(g)+g_*\tau(f)$ in $\mathrm{Wh}(\pi_1(Z,z))$, componentwise for disconnected complexes ([[thm-composition-and-sum-formulas-for-whitehead-torsion]]).

[F4] If $j:X\hookrightarrow Y$ is an elementary expansion of finite CW complexes, then $\tau(j)=0$ ([[lem-an-elementary-expansion-has-zero-whitehead-torsion]]).

[F5] $\tau(f)$ is the image in $\mathrm{Wh}(\pi_1Y)$ of the contraction torsion of the algebraic mapping cone $\operatorname{Cone}(C_*(\widetilde f))$ of the lifted cellular chain map, for chosen cellular representative, universal covers and lift; the definition is by chosen data and produces a class in the Whitehead group of the target ([[def-whitehead-torsion-of-a-finite-cw-homotopy-equivalence]]).

[F6] An elementary collapse is the inverse formal operation of an elementary expansion: if $X\hookrightarrow Y$ is an elementary expansion then the pair $(Y,X)$ deformation retracts onto $X$, so the collapse map $c:Y\to X$ satisfies $c\circ i=\mathrm{id}_X$ for the inclusion $i:X\hookrightarrow Y$ ([[def-elementary-expansion-and-collapse-of-finite-cw-complexes]], [[def-simple-homotopy-equivalence]]).

[F7] The identity map of the cover induces the identity matrix in the displayed based cellular bases of [[def-based-cellular-chain-complex-of-a-universal-cover]]: the basis is one chosen oriented lift per cell, and the identity carries each such lift to itself, with the right module structure transported along the induced isomorphism of fundamental groups.

[F8] The cone differential is $d(y,x)=(dy+x,-dx)$ for the identity chain map. Its contraction torsion is the class of $(d+s)_{\mathrm{odd}}$ in $\tilde K_1(R)$; a finite unitriangular matrix has class zero, and permutation matrices contribute only $[-1]=0$ in that reduced group ([[def-mapping-cone-of-a-chain-map]], [[def-finite-based-free-chain-complex-and-its-contraction-torsion]], [[lem-the-stable-elementary-subgroup-is-normal-and-contains-the-commutator-subgroup]], [[def-k-one-of-a-ring-and-the-whitehead-group-of-a-discrete-group]], [[lem-elementary-basis-changes-orientations-and-deck-lift-changes-die-in-the-whitehead-group]]).

## Proof

**Proof technique:** direct.

1.1 For every finite CW complex $Z$, the composition formula [F3] applied to $\mathrm{id}_Z\circ\mathrm{id}_Z$ gives $\tau(\mathrm{id}_Z)=2\tau(\mathrm{id}_Z)$, since the identity induces the identity on its Whitehead group. Subtracting gives $\tau(\mathrm{id}_Z)=0$, componentwise. [F3]

1.2 An elementary expansion $j:X\to Y$ has $\tau(j)=0$ by [F4]. [F4]

1.3 Let $\varphi:X\to Y$ be a cellular isomorphism. By [F5] the class $\tau(\varphi)$ is computed from a chosen cellular representative, universal covers, lifts, basepoints, orientations and orders, and by [F2] the class in $\mathrm{Wh}(\pi_1(Y,y))$ does not depend on these choices. Choose a universal cover $p:\widetilde X\to X$ and take the cover of $Y$ to be $q:=\varphi\circ p:\widetilde X\to Y$, which is again a universal cover, with lift $\widetilde\varphi:=\mathrm{id}_{\widetilde X}$, so that $q\circ\widetilde\varphi=\varphi\circ p$; with this choice $C_*(\widetilde\varphi)$ is the identity chain map of the based free right $\mathbb Z[\pi_1Y]$-complex $C_*(\widetilde X)$, by [F7] and the transport of coefficients along $\varphi_*$. For any finite based complex $C$, the cone of its identity has contraction $s(y,x)=(0,y)$: $ds+sd=1$. Pair the two cone slots of each vector $e\in C_q$, namely $(e,0)$ in degree $q$ and $(0,e)$ in degree $q+1$. Order these pairs by increasing $q$, with the same within-degree order in both parity bases. The odd-to-even map sends the source slot to its paired target slot with coefficient $1$, plus a term involving $de$, hence in a strictly earlier pair. Its matrix is upper unitriangular in these matched orders. Returning to the prescribed bases only permutes rows and columns, which does not change reduced torsion by [F8]. Thus $\operatorname{Cone}(C_*(\widetilde\varphi))=\operatorname{Cone}(\mathrm{id}_{C_*(\widetilde X)})$ has torsion $0$, and $\tau(\varphi)=0$ by [F5]. [F2, F5, F7, F8]

2.1 Assume first that $Y$ is connected and write $\pi_1X_i$ for the fundamental group of the connected complex $X_i$. By [F1] there is a chain $X=X_0\xrightarrow{f_1}\cdots\xrightarrow{f_k}X_k=Y$ with every $f_i$ elementary or a cellular isomorphism and $f\simeq f_k\circ\cdots\circ f_1$; by [F2] homotopic homotopy equivalences have equal torsion, so $\tau(f)=\tau(f_k\circ\cdots\circ f_1)$, and by [F3] applied inductively $$\tau(f_k\circ\cdots\circ f_1)=\tau(f_k)+(f_k)_*\tau(f_{k-1}\circ\cdots\circ f_1)=\sum_{i=1}^{k}(f_k\circ\cdots\circ f_{i+1})_*\tau(f_i),$$ a sum of transported torsions of the factors. Hence it suffices to prove that each elementary factor and each cellular isomorphism of the sequence has torsion zero in the Whitehead group of its target; for $k=0$ we have $f\simeq\mathrm{id}_X$ and $\tau(f)=\tau(\mathrm{id}_X)=0$ by [F2] and step 1.1. [F1, F2, F3, step 1.1]

2.2 Let $c:Y\to X$ be an elementary collapse, $i:X\hookrightarrow Y$ the corresponding elementary expansion, so that $c\circ i=\mathrm{id}_X$ by [F6]; both $i$ and $c$ are homotopy equivalences by [F1] and [F6]. Applying [F3] to the pair $(i,c)$ gives $\tau(c\circ i)=\tau(c)+c_*\tau(i)$ in $\mathrm{Wh}(\pi_1X)$, and $\tau(c\circ i)=\tau(\mathrm{id}_X)=0$ by step 1.1 while $\tau(i)=0$ by step 1.2; hence $\tau(c)=0$. [F3, F6, step 1.1, step 1.2]

3.1 By steps 1.2, 1.3 and 2.2 every factor of the sequence of step 2.1 has zero torsion, so the transported sum of step 2.1 vanishes and $\tau(f)=0$ in $\mathrm{Wh}(\pi_1(Y,y))$. This proves the assertion for connected $Y$; the case of disconnected $Y$ follows componentwise, since each $f_i$ restricts to an elementary operation or a cellular isomorphism on the components that it meets and to a homeomorphism of the remaining components, the induced summands are as in [F2] and [F3], and each summand vanishes by the connected argument applied to that component (with the empty sequence handled by step 2.1). [F1, F2, F3, step 2.1, step 1.2, step 2.2, step 1.3] ∎
