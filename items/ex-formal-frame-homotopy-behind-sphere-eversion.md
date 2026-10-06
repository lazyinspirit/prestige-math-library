---
id: ex-formal-frame-homotopy-behind-sphere-eversion
kind: example
title: "The formal frame homotopy behind sphere eversion"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [lem-standard-and-reflected-two-sphere-immersions-have-homotopic-formal-data-in-r-three, lem-the-second-homotopy-group-of-so-three-vanishes, lem-pi-three-so-three-generated-by-the-quaternion-double-cover, thm-covering-space-lifting-criterion, thm-homotopy-lifting-for-covering-maps, thm-lower-dimensional-sphere-maps-are-based-nullhomotopic, def-formal-immersion-between-smooth-manifolds, def-stiefel-space-grassmannian-and-tautological-bundle, def-covering-map-and-evenly-covered-neighbourhoods, cor-euclidean-spheres-are-path-connected]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Ralph L. Cohen, Immersions of Manifolds and Homotopy Theory (Harvard CMSA Math-Science Literature Lecture write-up, June 30 2022), §2.1 eversion paragraph"
      url: https://math.stanford.edu/~ralph/immersions-final.pdf
      locator: "PDF pp. 4–10; $\\mathrm{SO}(3)\\cong\\mathbb{RP}^3$ with universal cover $S^3$, hence $\\pi_2(\\mathrm{SO}(3))=0$ and the formal framing obstruction for $S^2$ in $\\mathbb R^3$ vanishes"
    - title: "Allen Hatcher, Algebraic Topology, §1.3 (covering spaces, lifting criterion) and §4.2"
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
      locator: "printed pp. 60–80, 375–377; the lifting criterion and the homotopy lifting property of covering maps"
dependency_level: 5
---

## Example

Let $\iota:S^2\hookrightarrow\mathbb R^3$ be the standard embedding and
$\iota\circ a$ its antipodal version, with sections $s_\iota=d\iota$ and
$s_{\iota\circ a}=d(\iota\circ a)$ of the Stiefel bundle
$E=V(TS^2,\varepsilon^3)$. Move the two sections to a common value at a basepoint. The characteristic-disk
model and boundary-map transport of the evaluation lemma then give based maps
into $V_2(\mathbb R^3)\cong\mathrm{SO}(3)$; their difference class has a
based representative $F:S^2\to\mathrm{SO}(3)$. Since $S^2$ is simply connected,
$F$ lifts through the quaternion double cover to $\widetilde F:S^2\to S^3$.
A based nullhomotopy of $\widetilde F$ projects to one of $F$, proving that
the difference class vanishes and the formal sections are homotopic.

## Facts & Assumptions

**Given:** The unit sphere $S^2$, the standard embedding $\iota$, the antipodal diffeomorphism $a(x)=-x$, the two-sheeted covering homomorphism $\rho:S^3\to\mathrm{SO}(3)$, $\rho(q)(v)=qvq^{-1}$, and a trivialisation of $E=V(TS^2,\varepsilon^3)$ over the two closed hemispheres.

[F1] Moving to a common basepoint value and using characteristic-disk transport gives the based difference map $F:S^2\to V_2(\mathbb R^3)\cong\mathrm{SO}(3)$ whose class in $\pi_2$ is the obstruction; the two formal framings of $\iota$ and $\iota\circ a$ are homotopic precisely when this class vanishes. [[lem-standard-and-reflected-two-sphere-immersions-have-homotopic-formal-data-in-r-three]]

[F2] $\rho:S^3\to\mathrm{SO}(3)$ is a two-sheeted covering map (the quaternion double cover of the rotations of $\operatorname{Im}\mathbb H$), so its image is all of $\mathrm{SO}(3)$ and its fibres have two points; a covering map is a locally trivial bundle whose total space and base are path connected and locally path connected here. [[lem-pi-three-so-three-generated-by-the-quaternion-double-cover]], [[def-covering-map-and-evenly-covered-neighbourhoods]]

[F3] Covering-space lifting criterion: a continuous map $Y\to B$ from a path connected, locally path connected space lifts along a covering $p:E\to B$ exactly when the induced subgroup of $\pi_1$ is contained in the image of $p_*$; for a simply connected $Y$ the condition is automatic. [[thm-covering-space-lifting-criterion]]

[F5] For $0\le k<r$ every continuous based map $S^k\to S^r$ is nullhomotopic. In particular $S^2$ is simply connected and $\pi_2(S^3)=0$. [[thm-lower-dimensional-sphere-maps-are-based-nullhomotopic]]

[F6] $S^2$ is path connected and simply connected (apply [F5] with sphere dimensions $1<2$), and $\pi_2(\mathrm{SO}(3))=\pi_2(O(3))=0$. [[cor-euclidean-spheres-are-path-connected]], [[lem-the-second-homotopy-group-of-so-three-vanishes]]

[F7] The formal immersion $(f,F)$ is a smooth $f$ with a bundle monomorphism over $f$, so that $(\iota,d\iota)$ and $(\iota\circ a,d(\iota\circ a))$ are the formal data of the two embeddings; $V_2(\mathbb R^3)$ is the space of ordered orthonormal pairs. [[def-formal-immersion-between-smooth-manifolds]], [[def-stiefel-space-grassmannian-and-tautological-bundle]]

## Verification

1.1 Use [F1] to move the two sections to a common evaluated value and transport their characteristic-disk models to constant-boundary maps. The difference of their classes in $\pi_2(V_2(\mathbb R^3))$ has a based representative $F:S^2\to V_2(\mathbb R^3)$. Its class vanishes exactly when the original sections are homotopic. This construction does not identify the two raw hemisphere restrictions without their boundary transport. [F1, F7]

2.1 Completing an orthonormal pair to $(u,v,u\times v)$ identifies $V_2(\mathbb R^3)$ with $\mathrm{SO}(3)$ by the cited vanishing lemma. A constant left translation makes the based representative take value $I$ at its basepoint. Denote the translated map again by $F$. [F6, step 1.1]

3.1 $F$ lifts along $\rho$: $S^2$ is path connected and simply connected by [F6], so the lifting criterion [F3] applies with $Y=S^2$, $B=\mathrm{SO}(3)$ and the covering $p=\rho$ of [F2]: the subgroup of $\pi_1(S^2)$ is trivial, hence contained in $\rho_*\pi_1(S^3)$, and a lift $\widetilde F:S^2\to S^3$ with the prescribed basepoint exists. [F2, F3, F6, step 2.1]

4.1 $\widetilde F$ is nullhomotopic: every based map $S^2\to S^3$ is nullhomotopic through based maps by [F5], so the class of $\widetilde F$ in $\pi_2(S^3)$ is the distinguished element. [F5, step 3.1]

5.1 Project a based nullhomotopy $\widetilde H$ of $\widetilde F$ through $\rho$. The composite $\rho\circ\widetilde H$ contracts $F$ to $I$ and fixes the basepoint. Thus the difference class vanishes and [F1] gives a homotopy of the two formal sections. [F1, step 2.1, step 4.1]

6.1 The two possible lifts differ by the deck transformation $q\mapsto-q$. Both are based-nullhomotopic at their respective basepoints because every based map $S^2\to S^3$ is nullhomotopic. Different disk frames and reference transports may change the representative difference map, but the evaluation lemma preserves its vanishing criterion. The calculation proves the formal obstruction is zero; it does not construct a regular homotopy of immersions. [F1, F5, step 4.1, step 5.1] ∎