---
id: lem-homological-ahss-exact-couple-from-the-skeletal-filtration
kind: lemma
title: Homological AHSS exact couple from the skeletal filtration
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-reduced-generalized-homology-theory, def-coefficient-groups-of-a-generalized-homology-theory, def-exact-couple, prop-degree-d-sphere-maps-act-by-multiplication-by-d-in-any-generalized-theory, thm-cellular-boundary-is-the-incidence-degree-matrix, thm-cellular-homology-computes-singular-homology, def-incidence-number-of-two-cw-cells, def-oriented-cellular-chain-group, lem-cw-quotients-and-collapse-of-a-contractible-subcomplex, def-wedge-of-pointed-spaces, prop-unreduced-pair-and-reduced-quotient-axioms-are-equivalent-on-cw-pairs, prop-relative-cw-inclusions-are-cofibrations, lem-cofiber-of-a-based-cofibration-is-equivalent-to-the-quotient]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Davis–Kirk, Lecture Notes in Algebraic Topology, §8.8 and Theorem 9.6, printed pp. 227–246"
      url: https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf
      locator: "§8.8 and Theorem 9.6, printed pp. 227–246"
verification:
  precheck: pass
  repair: research/frontier-41-ha-dt-29-main-merge-published-evidence/lem-homological-ahss-exact-couple-from-the-skeletal-filtration.repair.json
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
Here the displayed identification of each sphere summand with $h_q(*)$ is
**suspension-normalized**: it uses the oriented quotient sphere and the
structural suspension isomorphisms of the theory. The pair boundary is the
cofiber map followed by inverse structural suspension, so the same
normalization is used in the calculation of $d_1$.

## Facts & Assumptions

[F1] A reduced generalized homology theory has based homotopy invariance, suspension-compatible cofiber exact sequences, and for a finite wedge an isomorphism $\bigoplus_\alpha\widetilde h_n(S^p_\alpha)\cong\widetilde h_n(\bigvee_\alpha S^p_\alpha)$ ([[def-reduced-generalized-homology-theory]]).

[F2] For a reduced generalized homology theory define the pair groups of a CW pair $(X,A)$ by $h_n(X,A):=\widetilde h_n(C_i)$ for the based inclusion $i:A_+\to X_+$, and $h_n(X,\varnothing):=\widetilde h_n(X_+)$. For $A\ne\varnothing$ a CW subcomplex inclusion is a based cofibration and the collapse $C_i\to X/A$ is a based homotopy equivalence, so $h_n(X,A)\cong\widetilde h_n(X/A)$. The cofiber exact sequence is the pair long exact sequence, and its natural boundary is the structural cofiber map followed by inverse suspension ([[def-reduced-generalized-homology-theory]], [[prop-unreduced-pair-and-reduced-quotient-axioms-are-equivalent-on-cw-pairs]], [[prop-relative-cw-inclusions-are-cofibrations]], [[lem-cofiber-of-a-based-cofibration-is-equivalent-to-the-quotient]]).

[F3] For $p\geq1$ the quotient $X^p/X^{p-1}$ is the finite wedge of the $p$-spheres belonging to the $p$-cells, and $X^0$ is a finite discrete set ([[lem-cw-quotients-and-collapse-of-a-contractible-subcomplex]], [[def-wedge-of-pointed-spaces]]).

[F4] The chosen orientation $D^p/S^{p-1}\cong S^p$, followed by the $p$-fold structural suspension isomorphism, gives the canonical coefficient identification $\widetilde h_{p+q}(S^p)\cong h_q(*)$ of [[def-coefficient-groups-of-a-generalized-homology-theory]]. At $p=0$, the canonical point class $[v]$ identifies its coefficient summand with $h_q(*)$; if the chosen cellular generator is $e_v=\varepsilon_v[v]$, $\varepsilon_v\in\{1,-1\}$, convert canonical point coefficients to this coordinate by multiplication by $\varepsilon_v$. This is an algebraic sign change, not a based degree-$-1$ map of $S^0$. For the disk pair, the pair boundary has target $h_{n-1}(S^{p-1})=\widetilde h_{n-1}((S^{p-1})_+)$, not merely $\widetilde h_{n-1}(S^{p-1})$. Its image is the kernel of $h_{n-1}(S^{p-1})\to h_{n-1}(D^p)$; under the usual based-sphere splitting this kernel is the reduced sphere summand, and [F2] identifies the induced map onto that summand with inverse structural suspension. No isomorphism onto the whole unreduced target is asserted.

[F5] A based degree-$d$ map $S^p\to S^p$ induces multiplication by $d$ on every reduced generalized homology group ([[prop-degree-d-sphere-maps-act-by-multiplication-by-d-in-any-generalized-theory]]).

[F6] The cellular $p$-chains are free on the oriented $p$-cells, the cellular boundary is the incidence-degree matrix, and cellular homology computes singular homology. For $p\ge2$, the incidence number $[e^p_\sigma:e^{p-1}_\tau]$ is the degree of the composite of the attaching map of $e^p_\sigma$ with the collapse onto the $(p-1)$-sphere $e^{p-1}_\tau$. For $p=1$, a compatibly oriented characteristic interval with endpoints $v_-,v_+$ has incidence entry $\varepsilon_v(\mathbf 1_{\{v_+=v\}}-\mathbf 1_{\{v_-=v\}})$ at the chosen generator $e_v=\varepsilon_v[v]$; the cellular boundary is the incidence-degree matrix ([[def-oriented-cellular-chain-group]], [[def-incidence-number-of-two-cw-cells]], [[thm-cellular-boundary-is-the-incidence-degree-matrix]], [[thm-cellular-homology-computes-singular-homology]]).

## Proof

**Proof technique:** direct.

**Given:** A finite CW complex $X$ with chosen cells and orientations, a reduced generalized homology theory $\widetilde h$, and the groups and maps displayed in the statement.

1.1 The exactness conditions of [[def-exact-couple]] hold with $r=1$: the image of $i_{p-1,q+1}$ equals the kernel of $j_{p,q}$ by exactness of the pair sequence of $(X^p,X^{p-1})$ at $h_{p+q}(X^p)$; the image of $j_{p,q}$ equals the kernel of $k_{p,q}$ by exactness of that same sequence at $E_{p,q}=h_{p+q}(X^p,X^{p-1})$; and the image of $k_{p+1,q}$ equals the kernel of $i_{p,q}$ by exactness of the pair sequence of $(X^{p+1},X^p)$ at $h_{p+q}(X^p)$. [F2, given]

1.2 The wedge decomposition [F3] and the quotient identification of [F2] give $E_{p,q}\cong\widetilde h_{p+q}(\bigvee_{\alpha\in I_p}S^p_\alpha)$. The wedge axiom [F1], followed on every oriented sphere summand by the boundary-normalized identification of [F4], gives $\widetilde h_{p+q}(\bigvee_{\alpha\in I_p}S^p_\alpha)\cong\bigoplus_{\alpha\in I_p}h_q(*)$. At $p=0$ this is the finite wedge $X^0_+$ with one $S^0$ per vertex; first use its canonical point coefficient, then apply the algebraic sign conversion of [F4] to match each chosen vertex generator. [F1, F2, F3, F4]

1.3 The right-hand side $\bigoplus_{\alpha\in I_p}h_q(*)$ is the free cellular chain group $C_p^{\mathrm{cell}}(X;h_q(*))=\bigoplus_{\alpha\in I_p}h_q(*)$ on the oriented $p$-cells, and the cellular boundary sends the $\sigma$-summand to the sum over $(p-1)$-cells of the incidence numbers. [F6]

1.4 The differential is $d_1=j\circ k$. By naturality of the pair boundary for the characteristic map $(D^p,S^{p-1})\to(X^p,X^{p-1})$ and the cofiber-boundary formula in [F2], the $\sigma$-summand first maps by the attaching map into $h_{p+q-1}(X^{p-1})$. Projecting with $j$ to the $\tau$-summand composes the attaching map with the collapse $X^{p-1}\to X^{p-1}/X^{p-2}$ and then with the projection to the sphere of $e^{p-1}_\tau$. Under the suspension-normalized coordinates of [F4], the resulting coefficient homomorphism is the map induced by that attaching-and-collapse self-map of $S^{p-1}$; this uses compatibility of the pair boundary with suspension, not an isomorphism from the disk pair group onto all of $h_{p+q-1}(S^{p-1})$. [F2, F4, given]

2.1 For $p\ge2$, the suspension-normalized comparison in step 1.4 reduces the $(\tau,\sigma)$ component to the self-map of $S^{p-1}$ defining the incidence number; [F5] therefore makes it multiplication by $[e^p_\sigma:e^{p-1}_\tau]$. For $p=1$, the cofiber-boundary convention of [F2] for the compatibly oriented characteristic interval gives terminal endpoint minus initial endpoint in canonical point coordinates. The projection to the chosen vertex coordinate $e_v=\varepsilon_v[v]$ multiplies that coefficient by $\varepsilon_v$ as in [F4], so the component is $\varepsilon_v(\mathbf 1_{\{v_+=v\}}-\mathbf 1_{\{v_-=v\}})\,\mathrm{id}_{h_q(*)}$. When every $\varepsilon_v=1$, the two distinct endpoint projections are the original $+\mathrm{id}$ and $-\mathrm{id}$; when endpoints coincide they cancel. The sign on a chosen zero-cell generator is an algebraic $-\mathrm{id}$, not a based negative-degree map of $S^0$. For $p=0$ the target is zero. Thus [F6] identifies $d_1$ with the cellular boundary in every dimension. [F2, F4, F5, F6, step 1.4]

3.1 Steps 1.1, 1.2 and 2.1 exhibit an initial exact couple whose first page is the cellular chain complex with coefficients $h_q(*)$ and whose first differential is the cellular boundary; hence $E^2_{p,q}\cong H_p(X;h_q(*))$ by definition of the second page and the identification of cellular with singular homology. [F6, step 1.1, step 1.2, step 2.1]

4.1 This proves the asserted exact couple, first page, differential and second page. [step 3.1] ∎

## Source notes

Compare [Davis–Kirk](https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf), §8.8 and Theorem 9.6, printed pp. 227–246, for the skeletal exact couple of a generalized homology theory, the identification of the first page with cellular chains and the bidegree of the differential.
