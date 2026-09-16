---
id: lem-homological-ahss-exact-couple-from-the-skeletal-filtration
kind: lemma
title: Homological AHSS exact couple from the skeletal filtration
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-reduced-generalized-homology-theory, def-coefficient-groups-of-a-generalized-homology-theory, def-exact-couple, prop-degree-d-sphere-maps-act-by-multiplication-by-d-in-any-generalized-theory, thm-cellular-boundary-is-the-incidence-degree-matrix, thm-cellular-homology-computes-singular-homology, def-incidence-number-of-two-cw-cells, def-oriented-cellular-chain-group, lem-cw-quotients-and-collapse-of-a-contractible-subcomplex, def-wedge-of-pointed-spaces, prop-unreduced-pair-and-reduced-quotient-axioms-are-equivalent-on-cw-pairs]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Davis–Kirk, Lecture Notes in Algebraic Topology, §8.8 and Theorem 9.6, printed pp. 227–246"
      url: https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf
      locator: "§8.8 and Theorem 9.6, printed pp. 227–246"
---

## Statement

Let $X$ be a finite CW complex with chosen cells and orientations and let
$\widetilde h$ be a reduced generalized homology theory. Set
$$D_{p,q}:=h_{p+q}(X^p),\qquad E_{p,q}:=h_{p+q}(X^p,X^{p-1}),$$
with $h_n(X,A)$ the pair groups associated with $\widetilde h$ and the convention
$X^p=\varnothing$ for $p<0$. Let
$$i_{p,q}:D_{p,q}\to D_{p+1,q-1},\qquad j_{p,q}:D_{p,q}\to E_{p,q},\qquad k_{p,q}:E_{p,q}\to D_{p-1,q}$$
be induced respectively by the inclusion $X^p\hookrightarrow X^{p+1}$, by the
pair map with respect to $(X^p,X^{p-1})$, and by the connecting map of that pair.
Then $(D,E,i,j,k)$ is an initial exact couple in the sense of
[[def-exact-couple]], its first page is
$$E^1_{p,q}=h_{p+q}(X^p,X^{p-1})\cong C_p^{\mathrm{cell}}\bigl(X;h_q(*)\bigr),$$
and its first differential $d_1=j\circ k$ is the cellular boundary with the
incidence-degree matrix. In particular $E^2_{p,q}\cong H_p(X;h_q(*))$.

## Facts & Assumptions

[F1] A reduced generalized homology theory has based homotopy invariance, a long exact sequence of a pair, and for a finite wedge an isomorphism $\bigoplus_\alpha\widetilde h_n(S^p_\alpha)\cong\widetilde h_n(\bigvee_\alpha S^p_\alpha)$ ([[def-reduced-generalized-homology-theory]]).

[F2] For a reduced ordinary theory and a CW pair $(X,A)$ one has $h_n(X,A)\cong\widetilde h_n(X/A)$ for $A\ne\varnothing$ and $h_n(X,\varnothing)=\widetilde h_n(X_+)$, compatibly with pair boundaries ([[prop-unreduced-pair-and-reduced-quotient-axioms-are-equivalent-on-cw-pairs]]).

[F3] For $p\geq1$ the quotient $X^p/X^{p-1}$ is the finite wedge of the $p$-spheres belonging to the $p$-cells, and $X^0$ is a finite discrete set ([[lem-cw-quotients-and-collapse-of-a-contractible-subcomplex]], [[def-wedge-of-pointed-spaces]]).

[F4] Iterated homological suspension identifies $\widetilde h_{p+q}(S^p)\cong h_q(*)$ for every $p\geq0$ ([[def-coefficient-groups-of-a-generalized-homology-theory]]).

[F5] A based degree-$d$ map $S^p\to S^p$ induces multiplication by $d$ on every reduced generalized homology group ([[prop-degree-d-sphere-maps-act-by-multiplication-by-d-in-any-generalized-theory]]).

[F6] The cellular $p$-chains are free on the oriented $p$-cells, the cellular boundary is the incidence-degree matrix, and cellular homology computes singular homology. The incidence number $[e^p_\sigma:e^{p-1}_\tau]$ is the degree of the composite of the attaching map of $e^p_\sigma$ with the collapse onto the $(p-1)$-sphere $e^{p-1}_\tau$; the cellular boundary is the incidence-degree matrix ([[def-oriented-cellular-chain-group]], [[def-incidence-number-of-two-cw-cells]], [[thm-cellular-boundary-is-the-incidence-degree-matrix]], [[thm-cellular-homology-computes-singular-homology]]).

## Proof

**Proof technique:** direct.

**Given:** A finite CW complex $X$ with chosen cells and orientations, a reduced generalized homology theory $\widetilde h$, and the groups and maps displayed in the statement.

1.1 The exactness conditions of [[def-exact-couple]] hold with $r=1$: the image of $i_{p-1,q+1}$ equals the kernel of $j_{p,q}$ by exactness of the pair sequence of $(X^p,X^{p-1})$ at $h_{p+q}(X^p)$; the image of $j_{p,q}$ equals the kernel of $k_{p,q}$ by exactness at $E_{p,q}$; and the image of $k_{p+1,q}$ equals the kernel of $i_{p,q}$ by exactness of that same sequence at $h_{p+q-1}(X^{p-1})$. [F1, given]

1.2 The wedge decomposition [F3] and the quotient identification of [F2] give $E_{p,q}\cong\widetilde h_{p+q}(\bigvee_{\alpha\in I_p}S^p_\alpha)$, and the wedge axiom [F1] followed by the suspension identification [F4] gives $\widetilde h_{p+q}(\bigvee_{\alpha\in I_p}S^p_\alpha)\cong\bigoplus_{\alpha\in I_p}h_q(*)$. [F1, F2, F3, F4]

1.3 The right-hand side $\bigoplus_{\alpha\in I_p}h_q(*)$ is the free cellular chain group $C_p^{\mathrm{cell}}(X;h_q(*))=\bigoplus_{\alpha\in I_p}h_q(*)$ on the oriented $p$-cells, and the cellular boundary sends the $\sigma$-summand to the sum over $(p-1)$-cells of the incidence numbers. [F6]

1.4 The differential is $d_1=j\circ k$: the connecting map sends the $\sigma$-summand of $E_{p,q}$ to $h_{p+q-1}(X^{p-1})$ by composing with the attaching map of $e^p_\sigma$, and the pair map then collapses the $(p-1)$-skeleton quotient; on the $\tau$-summand the induced map is therefore induced by the composite of the attaching map with the collapse to the sphere of $\tau$. [given]

2.1 By the degree action [F5] the $(\tau,\sigma)$ component of $d_1$ is multiplication by the incidence number $[e^p_\sigma:e^{p-1}_\tau]$, so by [F6] the differential agrees with the cellular boundary. [F5, F6, step 1.4]

3.1 Steps 1.1, 1.2 and 2.1 exhibit an initial exact couple whose first page is the cellular chain complex with coefficients $h_q(*)$ and whose first differential is the cellular boundary; hence $E^2_{p,q}\cong H_p(X;h_q(*))$ by definition of the second page and the identification of cellular with singular homology. [F6, step 1.1, step 1.2, step 2.1]

4.1 This proves the asserted exact couple, first page, differential and second page. [step 3.1] ∎

## Source notes

Compare [Davis–Kirk](https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf), §8.8 and Theorem 9.6, printed pp. 227–246, for the skeletal exact couple of a generalized homology theory, the identification of the first page with cellular chains and the bidegree of the differential.
