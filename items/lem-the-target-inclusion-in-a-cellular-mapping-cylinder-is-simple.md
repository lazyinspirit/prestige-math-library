---
id: lem-the-target-inclusion-in-a-cellular-mapping-cylinder-is-simple
kind: lemma
title: "The target of a finite cellular mapping cylinder is a simple subcomplex"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-elementary-expansion-and-collapse-of-finite-cw-complexes, def-simple-homotopy-equivalence, thm-simple-homotopy-equivalences-have-zero-whitehead-torsion, thm-composition-and-sum-formulas-for-whitehead-torsion, lem-cellular-mapping-cylinders-and-relative-cylinders-are-cw-complexes, def-whitehead-torsion-of-a-finite-cw-homotopy-equivalence, def-homotopy-equivalence, cor-a-map-homotopic-to-a-homotopy-equivalence-is-a-homotopy-equivalence]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Lück, Lemmas 2.19–2.20, p.36"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Lemmas 2.19–2.20, p.36"
    - title: "Cohen, §22.3, pp.72–73"
      url: "https://math.uchicago.edu/~shmuel/tom-readings/Cohen%2C%20simple-htpy-thry.pdf"
      locator: "§22.3, pp.72–73"
---
## Statement

For any cellular map $f:X\to Y$ of finite CW complexes, the target inclusion $i_Y:Y\hookrightarrow M_f$ is a finite composite of elementary expansions. If $f$ is a homotopy equivalence, the source inclusion $i_X:X\hookrightarrow M_f$ is a homotopy equivalence, and
$$\tau(f)=p_*\tau(i_X)$$
for the canonical retraction $p:M_f\to Y$; $p$ is a homotopy inverse of $i_Y$, is homotopic relative to $Y$ to a finite composite of elementary collapse maps, and has zero torsion.

## Facts & Assumptions

**Given:** A cellular map $f:X\to Y$ of finite CW complexes, the mapping cylinder $M_f$ with its inclusions $i_X,i_Y$ and canonical retraction $p$.

[F1] An elementary expansion of dimension $n$ attaches a pair of cells $(e^{n-1},e^n)$ such that the characteristic map of the upper cell restricts on one boundary disk to a characteristic map of the new $(n-1)$-cell, homeomorphic on its interior, while all complementary boundary values lie in the previously constructed subcomplex $X$. The pair $(Y,X)$ deformation retracts onto $X$. A finite composite of elementary expansions is a formal deformation, and the operation is componentwise ([[def-elementary-expansion-and-collapse-of-finite-cw-complexes]]).

[F2] For a cellular $f:X\to Y$ equal to the identity on a common subcomplex $A$, the quotient $W=(Y\sqcup(X\times I))/\bigl((x,0)\sim f(x),\ (a,t)\sim a\ (a\in A)\bigr)$ is a CW complex whose cells are those of $Y$, those of the free end $X\setminus A$, and one $(r+1)$-cell $e^r\times(0,1)$ for every $r$-cell of $X\setminus A$; its embedded copies $j(X)$ and $k(Y)$ are subcomplexes, and the map $r:W\to Y$ with $r([x,s])=f(x)$, $r(k(y))=y$ is a strong deformation retraction fixing $k(Y)$ ([[lem-cellular-mapping-cylinders-and-relative-cylinders-are-cw-complexes]]).

[F3] A map is a simple homotopy equivalence if it is homotopic to a finite composite of elementary expansions, elementary collapses and cellular isomorphisms; every such composite is a homotopy equivalence, composites of simple homotopy equivalences are simple, and any map homotopic to a simple homotopy equivalence is simple ([[def-simple-homotopy-equivalence]]).

[F4] Every simple homotopy equivalence of finite CW complexes has zero Whitehead torsion in the target Whitehead group; in particular the identity map of a finite CW complex, exhibited as simple by the empty sequence, has zero torsion ([[thm-simple-homotopy-equivalences-have-zero-whitehead-torsion]]).

[F5] For homotopy equivalences $f:X\to Y$, $g:Y\to Z$ of finite CW complexes, $\tau(g\circ f)=\tau(g)+g_*\tau(f)$ ([[thm-composition-and-sum-formulas-for-whitehead-torsion]]).

[F6] $\tau$ is defined for homotopy equivalences of finite CW complexes, taking values in the Whitehead group of the target, with the componentwise convention for disconnected targets ([[def-whitehead-torsion-of-a-finite-cw-homotopy-equivalence]]).

[F7] A map $f$ is a homotopy equivalence if there is $g$ with $g\circ f\simeq\mathrm{id}$ and $f\circ g\simeq\mathrm{id}$; such a $g$ is a homotopy inverse of $f$ ([[def-homotopy-equivalence]]).

[F8] A map homotopic to a homotopy equivalence is a homotopy equivalence ([[cor-a-map-homotopic-to-a-homotopy-equivalence-is-a-homotopy-equivalence]]).

## Proof

**Proof technique:** direct.

1.1 Take $A=\emptyset$ in [F2], so that $M_f=W$ is the ordinary mapping cylinder with $i_X=j$, $i_Y=k$ and $p=r$, and $p\circ i_Y=\mathrm{id}_Y$, $p\circ i_X=f$; its cells are the cells of $Y$, the free-end cells $j(e)$ for the cells $e$ of $X$, and the prism cells $e^r\times(0,1)$ of dimension $r+1$ for the $r$-cells $e^r$ of $X$, finitely many in all. [F2]

1.2 Order the cells of the finite complex $X$ by increasing dimension and, for each $r$-cell $e^r$ of $X$ with characteristic map $\Phi:D^r\to X$, let $Z(e^r)\supseteq Z_{r-1}$ denote the subcomplex obtained from the previously built subcomplex $Z_{r-1}$ by first attaching the free-end cell $j(e^r)$ and then the prism cell $e^r\times(0,1)$. Its closure $\overline{e^r\times(0,1)}$ is the image of $D^r\times[0,1]$ and its boundary consists of the pieces $D^r\times\{0\}$, $S^{r-1}\times[0,1]$ and $D^r\times\{1\}$; under the identification $(x,0)\sim f(x)$ the first piece maps into $Y\subseteq Z_{r-1}$, under the cellularity of $f$ the middle piece maps into $Y\cup j(X^{(r-1)})\cup\{\text{prisms of cells of }X^{(r-1)}\}\subseteq Z_{r-1}$, and the last piece is exactly the closed free-end cell $j(e^r)$ attached in the previous step. The ball pair $(D^r\times[0,1],D^r\times\{1\})$ is homeomorphic to $(D^{r+1},D^r_+)$, so the characteristic prism map exhibits an $(r,r+1)$-cell pair with free face $j(e^r)$ corresponding to an upper hemisphere, so $Z_{r-1}\hookrightarrow Z(e^r)$ is an elementary expansion of dimension $r+1$ by [F1]. [F1, F2]

2.1 Performing the steps of step 1.2 for the finitely many cells of $X$ in increasing dimension gives a finite chain of elementary expansions $$Y=Z_{-1}\hookrightarrow\cdots\hookrightarrow M_f$$ whose composite is $i_Y$, so $i_Y$ is a simple homotopy equivalence by [F3] and $\tau(i_Y)=0$ by [F4]. [F1, F3, F4, step 1.2]

3.1 By step 1.1, $p\circ i_Y=\mathrm{id}_Y$, and by [F2] the strong deformation retraction gives $i_Y\circ p\simeq\mathrm{id}_{M_f}$, so $p$ is a homotopy inverse of the homotopy equivalence $i_Y$ in the sense of [F7]. Applying [F5] to the composable homotopy equivalences $i_Y$ and $p$ gives $\tau(p\circ i_Y)=\tau(p)+p_*\tau(i_Y)$ in $\mathrm{Wh}(\pi_1Y)$; the left side is $\tau(\mathrm{id}_Y)=0$ by [F4] and $\tau(i_Y)=0$ by step 2.1, hence $\tau(p)=0$. Reverse the expansion sequence of step 2.1 and choose the elementary collapse retraction for each pair. Their composite $r:M_f\to Y$ fixes $Y$. If $H$ is the deformation from $\mathrm{id}_{M_f}$ to $i_Yp$ supplied by [F2], then $rH$ is a homotopy from $r$ to $ri_Yp=p$, relative to $Y$. Thus $p$ is homotopic relative to $Y$ to that collapse composite and has zero torsion; no equality of these retractions is asserted. [F2, F4, F5, F7, step 1.1, step 2.1]

4.1 Suppose now that $f$ is a homotopy equivalence. By [F7] and step 1.1, $i_Y\circ f=i_Y\circ p\circ i_X\simeq \mathrm{id}_{M_f}\circ i_X=i_X$, so $i_X$ is homotopic to the composite $i_Y\circ f$; here $f$ is a homotopy equivalence by hypothesis, $i_Y$ is a homotopy equivalence by step 3.1, and a composite of homotopy equivalences is a homotopy equivalence, so $i_X$ is a homotopy equivalence by [F8]. [F7, F8, step 1.1, step 3.1]

5.1 In the situation of step 4.1 the maps $i_X$ and $p$ are homotopy equivalences with $p\circ i_X=f$, so [F5] applies to the pair $(i_X,p)$ and gives $\tau(f)=\tau(p\circ i_X)=\tau(p)+p_*\tau(i_X)=p_*\tau(i_X)$ in $\mathrm{Wh}(\pi_1Y)$ by [F6], since $\tau(p)=0$ by step 3.1. [F5, F6, step 3.1, step 4.1]

6.1 For disconnected $X$ and $Y$ the construction is componentwise: $f$ maps each component of $X$ into a component of $Y$, over a target component $D$ the cylinder is $D$ together with the cylinders on all components of $X$ mapping into $D$, while target components receiving none are unchanged. The expansion sequence of step 1.2 is performed component by component, and the identities of steps 2.1–5.1 hold in the corresponding summands of the Whitehead groups by [F6]. [F2, F6, step 1.2, step 2.1, step 5.1] ∎
