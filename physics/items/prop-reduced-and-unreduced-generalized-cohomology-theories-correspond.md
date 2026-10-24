---
id: prop-reduced-and-unreduced-generalized-cohomology-theories-correspond
kind: proposition
title: Reduced and unreduced generalized cohomology theories correspond
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-reduced-generalized-cohomology-theory, prop-relative-cw-inclusions-are-cofibrations, def-reduced-cone-suspension-and-cofiber-sequence, lem-cofiber-of-a-based-cofibration-is-equivalent-to-the-quotient, lem-cw-quotients-and-collapse-of-a-contractible-subcomplex, def-wedge-of-pointed-spaces, thm-five-lemma-for-modules]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "James Davis and Paul Kirk, Lecture Notes in Algebraic Topology, §8.8, printed pp. 227–233"
      url: https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf
      locator: "§8.8, printed pp. 227–233"
    - title: "Yiannis Loizides, The Atiyah–Hirzebruch Spectral Sequence, §2, printed pp. 3–4"
      url: https://math.gmu.edu/~yloizide/Atiyah-Hirzebruch.pdf
      locator: "§2, reduction of an unreduced theory and the pair sequence, printed pp. 3–4"
verification:
  audited: 2026-09-22
---

## Statement

Call a **CW-pair cohomology theory** a contravariant functor $h$ on CW pairs
$(X,A)$ with a CW subcomplex $A\subseteq X$ and cellular maps of pairs, taking values in
abelian groups $h^n(X,A)$ for $n\in\mathbb Z$, together with natural connecting
homomorphisms $\partial:h^n(A)\to h^{n+1}(X,A)$ such that:

- **(H)** homotopic maps of pairs induce equal maps;
- **(LES)** for every CW pair the sequence
  $\cdots\to h^n(X,A)\to h^n(X)\to h^n(A)\xrightarrow{\partial}h^{n+1}(X,A)\to\cdots$
  is exact, where $h^n(X):=h^n(X,\varnothing)$;
- **(Ex)** if $U,V\subseteq X$ are subcomplexes with $X=U\cup V$, the inclusion
  induces $h^n(U,U\cap V)\cong h^n(X,V)$;
- **(Add)** for every set-indexed family of CW pairs the inclusions induce
  $\prod_\alpha h^n(X_\alpha,A_\alpha)\cong h^n\bigl(\bigsqcup_\alpha X_\alpha,\bigsqcup_\alpha A_\alpha\bigr)$,
  the empty family giving the zero group.

No dimension axiom is imposed. Then reduced generalized cohomology theories on
based CW complexes in the sense of [[def-reduced-generalized-cohomology-theory]]
and CW-pair cohomology theories determine one another, naturally and compatibly
with morphisms, through the following two constructions.

**(A)** Given a reduced theory $\widetilde h$, put, for a CW pair $(X,A)$,
$$h^n(X,A):=\widetilde h^n(C_i),$$
where $i:A_+\to X_+$ is the based inclusion and $C_i$ is its reduced cofiber.
Equivalently $h^n(X,\varnothing)=\widetilde h^n(X_+)$ and, for $A\ne\varnothing$,
$$h^n(X,A)\cong\widetilde h^n(X/A),$$
the quotient based at the collapsed subcomplex. In particular
$$h^n(X)=\widetilde h^n(X_+).$$
The connecting homomorphism $\partial$ of the pair $(X,A)$ is the connecting
map of the cofiber sequence of $i$.

**(B)** Given a CW-pair theory $h$, put, for a based CW complex $Y$ whose
basepoint is a vertex,
$$\widetilde h^n(Y):=h^n(Y,*).$$
The suspension isomorphism is the connecting map of $(CY,Y)$ restricted to
$h^n(Y,*)$, followed by the quotient identification and suspension reflection:
$$\sigma=\rho_Y^*\,\kappa_Y^{-1}\,\partial: h^n(Y,*)\longrightarrow h^{n+1}(\Sigma Y,*),$$
where $\kappa_Y:h^{n+1}(\Sigma Y,*)\to h^{n+1}(CY,Y)$ is quotient pullback
and $\rho_Y([y,t])=[y,1-t]$. The reflection is required by the fixed cone
coordinate convention, as checked below.
For a based cellular map $f:X\to Y$, its reduced connector is then
$\delta_f=q_f^*\sigma$, where $q_f:C_f\to\Sigma X$ is the collapse in the
fixed reduced cofiber sequence.

In all quotient formulas use the based convention $X/\varnothing:=X_+$;
when $A$ is nonempty, $X/A$ is the usual collapsed quotient.

The two constructions are canonically inverse: for a reduced theory
$\widetilde h$ the theory obtained by (B) from the theory built in (A) satisfies
$\widetilde h^n(Y)\cong h^n(Y,*)\cong\widetilde h^n(Y)$, and for a CW-pair theory
$h$ the theory built in (A) from that obtained by (B) satisfies
$h^n(X,A)\cong\widetilde h^n(X/A)\cong h^n(X,A)$. Under these identifications the
connecting maps agree. In particular the three displayed formulas
$h^n(X,A)=\widetilde h^n(X/A)$, $\widetilde h^n(Y)=h^n(Y,*)$ and
$h^n(X)=\widetilde h^n(X_+)$ hold with all structure maps transported.

## Facts & Assumptions

[F1] A reduced generalized cohomology theory consists of contravariant functors on based CW complexes and natural suspension isomorphisms $\sigma:\widetilde h^n(X)\to\widetilde h^{n+1}(\Sigma X)$ satisfying (H), (E) and (W); for the fixed cofiber sequence $X\xrightarrow{f}Y\to C_f\xrightarrow{q_f}\Sigma X$, its connector is normalized as $\delta_f=q_f^*\sigma$ ([[def-reduced-generalized-cohomology-theory]]).

[F2] A CW subcomplex inclusion is a cofibration, and the reduced cofiber of the based inclusion $A_+\to X_+$ is the space $X\cup_A CA$ ([[prop-relative-cw-inclusions-are-cofibrations]], [[def-reduced-cone-suspension-and-cofiber-sequence]]).

[F3] For a based cofibration $i:A\hookrightarrow X$ the collapse $C_i\to X/A$ is a based homotopy equivalence ([[lem-cofiber-of-a-based-cofibration-is-equivalent-to-the-quotient]]).

[F4] For a CW pair $(X,A)$ with $A\ne\varnothing$, the quotient $X/A$ is a CW complex with one vertex replacing $A$ and one cell per cell of $X\setminus A$ ([[lem-cw-quotients-and-collapse-of-a-contractible-subcomplex]]).

[F5] The wedge of based spaces is the quotient of their disjoint union identifying all basepoints; a disjoint union of based spaces whose basepoints are identified with one new point is the wedge of the based spaces ([[def-wedge-of-pointed-spaces]]).

[F6] The five lemma compares exact sequences of abelian groups when the four surrounding maps are isomorphisms ([[thm-five-lemma-for-modules]]).

## Proof

**Proof technique:** direct.

**Given:** A reduced theory $\widetilde h$ and a CW-pair theory $h$ as in the statement; all CW pairs have supplied characteristic maps and all based spaces are based at vertices.

1.1 First record two consequences of the pair axioms, for use in construction (B). The sequence of $(Z,Z)$ gives $h^n(Z,Z)=0$: the adjacent maps $h^n(Z)\to h^n(Z)$ are identities. For a based complex $Z$, the retraction $Z\to *$ splits $h^n(Z)\to h^n(*)$. Thus the sequence of $(Z,*)$ identifies $h^n(Z,*)$ naturally with its kernel and gives $h^n(Z)=h^n(Z,*)\oplus h^n(*)$. For a based subcomplex $D\subseteq Z$, remove the split point summands from the pair sequence to obtain the exact sequence $\cdots\to h^n(Z,D)\to h^n(Z,*)\to h^n(D,*)\to h^{n+1}(Z,D)\to\cdots$. Indeed the pair boundary kills the point summand because it is in the image of $h^n(Z)$. [given, algebra]

1.2 The quotient axiom for a pair theory follows from the stated axioms, rather than being an additional assumption. For nonempty $D\subseteq Z$, form $T=Z\cup_D CD$, where $CD$ here is the ordinary cone with its tip as basepoint; equivalently it is the reduced cone on $D_+$. The collapse $T\to Z/D$ is a homotopy equivalence by [F2] and [F3]. Its restriction $CD\to *$ is also a homotopy equivalence. The natural pair sequences and [F6] therefore make $h^n(Z/D,*)\to h^n(T,CD)$ an isomorphism. Excision for the subcomplex cover $T=Z\cup CD$ makes $h^n(T,CD)\to h^n(Z,D)$ an isomorphism. Their composite is precisely the pullback of the quotient map of pairs $(Z,D)\to(Z/D,*)$, so this identification is natural. For $D=\varnothing$, additivity identifies $h^n(Z_+,*)$ with $h^n(Z,\varnothing)$. This proves the same assertion with the stipulated convention $Z/\varnothing=Z_+$. [F2, F3, F4, F6, given]

1.3 Starting with a reduced theory, define $h^n(X,A)=\widetilde h^n(C_{A_+\to X_+})$. Maps and homotopies of pairs induce maps and homotopies of these cofibers, proving functoriality and (H). Cofibration collapse identifies the cofiber with $X/A$ when $A\ne\varnothing$. For $A=\varnothing$, $A_+$ is a point, and its reduced cone adds nothing to $X_+$, so the cofiber is $X_+$. In all cases the cofiber exact sequence gives (LES), with boundary $q_i^*\sigma$. [F1, F2, F3]

2.1 For subcomplexes $X=U\cup V$, the map $U/(U\cap V)\to X/V$ is a based homeomorphism under the empty-quotient convention. If $U\cap V$ is empty and $V$ is nonempty, the collapsed $V$ is the adjoined isolated basepoint of $U_+$; if $V$ is empty both quotients are $X_+$. In the remaining case both quotients have the same cell characteristic maps and weak topology. This proves (Ex). Also $(\coprod X_\alpha)_+=\bigvee (X_\alpha)_+$, including an empty family, and the cofiber of the wedge of these inclusions is the wedge of their cofibers, by their explicit quotient constructions. The reduced wedge axiom proves (Add). [F1, F2, F4, F5, step 1.3]

2.2 Conversely set $\widetilde h^n(Y)=h^n(Y,*)$. This is a homotopy-invariant functor and is zero at a point by step 1.1. For the reduced cone pair $(CY,Y)$, step 1.1 and based contractibility of $CY$ give an isomorphism $\partial:h^n(Y,*)\to h^{n+1}(CY,Y)$. By step 1.2 the quotient map induces an isomorphism $\kappa_Y:h^{n+1}(\Sigma Y,*)\to h^{n+1}(CY,Y)$. Define $\sigma=\rho_Y^*\kappa_Y^{-1}\partial$ as in (B). All these maps are natural, so this is a natural suspension isomorphism. [F2, step 1.1, step 1.2]

2.3 For the wedge axiom, form a CW complex $Z$ from the disjoint union of the $Y_\alpha$ by adjoining one new vertex and an interval from it to each supplied basepoint. Let $T$ be the union of those intervals and their endpoints. The simultaneous linear contraction of the intervals to the new vertex contracts $T$; it is continuous in the CW weak topology. The quotient $Z/T$ is the wedge with its CW topology. Excision for the subcomplex cover by $T$ and $\coprod Y_\alpha$, and then (Add), give $h^n(Z,T)\cong h^n(\coprod Y_\alpha,\coprod\{*_\alpha\})\cong\prod h^n(Y_\alpha,*_\alpha)$. Step 1.2 identifies the left side with $h^n(\bigvee Y_\alpha,*)$. The comparison is the map induced by summand inclusions, since all the quotient and excision maps restrict to those inclusions. For the empty family $Z=T=*$ and all groups are zero. Thus (W) holds. [F4, F5, step 1.1, step 1.2, given]

3.1 To check the connector including its sign, use the reduced mapping cylinder $M_f=Y\cup_f(X\times I)$, attaching $X\times\{0\}$ to $Y$ and collapsing the basepoint track. Its free end $X\times\{1\}$ is a CW subcomplex, $M_f$ retracts onto $Y$, and $M_f/(X\times\{1\})=C_f$ with the cone coordinate of [F2]. Define a map of pairs $(M_f,X\times\{1\})\to(CX,X\times\{0\})$ by sending $Y$ to the cone tip and $[x,t]$ to $[x,1-t]$. It is the identity on the identified copies of $X$. On quotients it induces $\rho_X q_f:C_f\to\Sigma X$. Naturality of the pair boundary and the quotient isomorphisms of step 1.2 now identify the cylinder boundary on $h^n(X,*)$ with $(\rho_X q_f)^*\kappa_X^{-1}\partial=q_f^*\sigma$. The reduced pair sequence of step 1.1, together with the retraction, is exactly (E), with this connector. This proves both exactness and the normalization required by [F1]. [F1, F2, step 1.1, step 1.2, step 2.2]

4.1 Starting from a reduced theory, applying (A) and (B) yields $h^n(Y,*)=\widetilde h^n(C_{S^0\to Y_+})\cong\widetilde h^n(Y_+/S^0)=\widetilde h^n(Y)$; this is natural, not a claimed decomposition of $Y_+$. Check suspension as well. The cofiber of $Y\hookrightarrow CY$ is two reduced cones glued along their bases. Collapsing the attached cone gives the quotient model $CY/Y=\Sigma Y$, whereas the cofiber-to-suspension map collapses the first cone. These two maps differ, up to based homotopy, by reflection of the suspension coordinate: parametrize it by $s\in[0,2]$ from the first tip through the equator at $1$ to the second tip. If $\psi$ collapses the attached cone, then $\rho\psi$ is $[y,s]\mapsto[y,\min(s,1)]$, and $q$ is $[y,s]\mapsto[y,\max(s-1,0)]$. The maps $[y,s]\mapsto[y,\min(1,\max(0,s-a))]$ for $0\le a\le1$ give the required based homotopy. Consequently the cone-pair boundary transported to $\Sigma Y$ is $\rho_Y^*\sigma_{\rm original}$. The additional reflection in (B) cancels this, since $\rho_Y^2=\mathrm{id}$. Thus the recovered suspension is the original one. All cofiber connectors then agree because both are $q_f^*\sigma$. [F1, F2, F3, step 2.2, step 3.1]

4.2 Starting from a pair theory, (B) followed by (A) gives $h'^n(X,A)=h^n(C_i,*)$. Cofibration collapse and step 1.2 identify this naturally with $h^n(X,A)$, including $A=\varnothing$. To check boundaries, replace $A_+\to X_+$ by its reduced mapping cylinder. The cylinder collapse is a map of pairs to $(X_+,A_+)$, an ordinary homotopy equivalence on total spaces and the identity on the identified copies of $A_+$. Naturality of the pair sequences and the five lemma make its relative pullback an isomorphism. Additivity identifies the latter relative and absolute maps with those for $(X,A)$. The coordinate calculation of step 3.1 identifies its connecting map under the quotient comparison with $q_i^*\sigma$. Hence the pair boundary recovered by (A) is the original one, with its sign. The same constructions commute with morphisms of theories, since they use only pullbacks, boundaries and inverses of natural isomorphisms. [F1, F2, F3, F6, step 1.2, step 3.1]

5.1 The two natural comparisons of steps 4.1 and 4.2 preserve all structure maps and give the asserted inverse constructions. Empty spaces and empty subcomplexes use $X/\varnothing=X_+$, points have zero reduced groups, and no dimension axiom or coefficient restriction has entered. No family of arbitrary choices is used: cones, cylinders, quotients and the interval contraction are specified constructions on the supplied CW data. [step 2.1, step 2.3, step 4.1, step 4.2] ∎

## Source notes

Compare [Davis–Kirk](https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf), §8.8, printed pp. 227–233, for the pair long exact sequence, the reduced homology/cohomology axioms and the quotient presentation $h^n(X,A)\cong \widetilde h^n(X/A)$; and [Loizides](https://math.gmu.edu/~yloizide/Atiyah-Hirzebruch.pdf), §2, printed pp. 3–4, for the reduction $\widetilde h^n(X)=\ker(h^n(X)\to h^n(\mathrm{pt}))$ and the pair long exact sequence obtained from the cone sequence.
