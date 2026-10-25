---
id: def-based-cellular-chain-complex-of-a-universal-cover
kind: definition
title: "Based cellular chains of a universal cover as finite free right group-ring modules"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-skeleta-cw-subcomplex-and-relative-cw-complex, thm-relative-homology-of-consecutive-cw-skeleta, thm-universal-cover-existence, thm-covering-space-lifting-criterion, thm-deck-group-of-a-universal-cover-is-the-fundamental-group, def-group-ring, thm-group-ring-is-a-unital-algebra-with-basis-g, def-stable-general-linear-group-and-elementary-subgroup-of-a-ring, def-cw-complex-with-closure-finiteness-and-weak-topology, def-cell-attachment-by-a-characteristic-map, def-relative-singular-homology, def-oriented-cellular-chain-group, def-universal-covering-space]
verification:
  audited: 2026-09-27
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  scraped: []
  references:
    - title: "Lück, §2.2, pp.30–31"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "§2.2, pp.30–31"
    - title: "Davis–Kirk, §11.4, p.343"
      url: "https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf"
      locator: "§11.4, p.343"
    - title: "Cohen, §19, pp.62–65"
      url: "https://math.uchicago.edu/~shmuel/tom-readings/Cohen%2C%20simple-htpy-thry.pdf"
      locator: "§19, pp.62–65"
---
## Definition

Let $X$ be a nonempty connected finite CW complex with supplied characteristic maps, let $x\in X$ be a basepoint, put $\pi=\pi_1(X,x)$, and let
$$p:\widetilde X\longrightarrow X$$
be a chosen universal cover, which exists for the spaces considered here because a finite CW complex is locally path-connected and semilocally simply connected ([[thm-universal-cover-existence]]). Write $R=\mathbb Z[\pi]$ for the integral group ring, a unital ring with basis the classes $[g]$ of the group elements ([[def-group-ring]], [[thm-group-ring-is-a-unital-algebra-with-basis-g]]).

**Lifted CW structure.** Every open cell $e\subseteq X$ is contractible, so $p^{-1}(e)$ splits into components each mapped homeomorphically onto $e$; such a component is an **open cell of $\widetilde X$ over $e$**. To obtain its **lifted characteristic map**, choose a point above the image of one interior point of the characteristic disk and lift the entire characteristic map $D^n\to X$ through $p$; this is possible because $D^n$ is simply connected ([[thm-covering-space-lifting-criterion]]), and its interior maps homeomorphically onto the chosen component over $e$. The inverse $e\to p^{-1}(e)$ alone cannot be composed with the characteristic map on its boundary, where that inverse is undefined. These lifted characteristic maps give the standard lifted CW structure ([[def-cell-attachment-by-a-characteristic-map]], [[def-skeleta-cw-subcomplex-and-relative-cw-complex]]). Its $n$-skeleton is
$$\widetilde X^n:=p^{-1}(X^n),$$
the union of the closed lifted cells over the cells of $X$ of dimension at most $n$; for a CW pair $(X,A)$ the preimage $p^{-1}(A)$ is a CW subcomplex of $\widetilde X$ and $p^{-1}(X^n\cup A)=p^{-1}(X^n)\cup p^{-1}(A)$ is the $n$-skeleton of the relative lifted structure.

**Deck action.** Identify $\pi$ with the deck group of $p$ by the no-reversal isomorphism of [[thm-deck-group-of-a-universal-cover-is-the-fundamental-group]], writing $T_g$ for the covering homeomorphism attached to $g\in\pi$; thus $T_1=\mathrm{id}$, $T_{gh}=T_g\circ T_h$, and every $T_g$ carries lifted cells onto lifted cells of the same dimension. A deck transformation is determined by its value at one point and acts freely, so the lifts of a single cell $e$ are exactly the cells $T_g\widetilde e$ for one chosen lift $\widetilde e$.

**Right group-ring action.** The action of the deck group on the singular and cellular chains of $\widetilde X$ is written on the left and the length-preserving insertion of inverses makes it a right action of $R$ by
$$c\cdot g:=T_g^{-1}(c)=T_{g^{-1}}(c),\qquad g\in\pi,$$
extended $\mathbb Z$-bilinearly in $c$ and the group-ring coefficient ([[def-relative-singular-homology]], [[def-oriented-cellular-chain-group]]); in particular $(c\cdot g)\cdot h=c\cdot gh$. Each $T_{g^{-1}}$ is a homeomorphism of pairs $(\widetilde X^n,\widetilde X^{n-1})\to(\widetilde X^n,\widetilde X^{n-1})$ and of pairs $(\widetilde X^n\cup p^{-1}A,\widetilde X^{n-1}\cup p^{-1}A)$, so the action passes to the homology of those pairs.

**Based cellular chains.** For each cell $e$ of $X$ choose an orientation of $e$, that is, an orientation of the disk of its characteristic map, and choose one oriented lift $\widetilde e$ carrying that orientation. Put
$$C_n^{\mathrm{cell}}(\widetilde X;R):=H_n(\widetilde X^n,\widetilde X^{n-1};\mathbb Z),$$
$$C_n^{\mathrm{cell}}(\widetilde X,p^{-1}(A);R):=H_n\bigl(\widetilde X^n\cup p^{-1}(A),\,\widetilde X^{n-1}\cup p^{-1}(A);\mathbb Z\bigr).$$
The notation after the semicolon records the **deck-induced $R$-module structure**; the homology coefficients are integral. By [[thm-relative-homology-of-consecutive-cw-skeleta]] these integral homology groups are free abelian on the lifted cells. The right action above makes them finite free right $R$-modules on one chosen oriented lift of each cell of $X$ (respectively each relative cell of $(X,A)$): the lifts of one cell form the $\pi$-orbit $\{T_g\widetilde e\}$, and $[g]\mapsto T_{g^{-1}}\widetilde e$ bijects $\pi$ with that orbit. Using $R$ as a second homology coefficient group here would duplicate the lift-indexed generators and would not yield the claimed rank. Degrees without relative cells give the zero module, and for a disconnected finite $X$ the construction is applied componentwise with its component group ring.
