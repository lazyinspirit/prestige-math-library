---
id: thm-vanishing-of-the-primary-obstruction-is-equivalent-to-extension-over-the-next-skeleton
kind: theorem
title: Vanishing of the primary obstruction is equivalent to extension over the next skeleton
status: published
origin: pipeline
deps: ["thm-the-primary-obstruction-class-is-independent-of-cellular-choices", "def-difference-cochain-between-two-cellular-extensions", "lem-extending-a-map-over-one-cell-is-equivalent-to-nullhomotoping-its-attaching-sphere", "def-axiom-of-choice"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: James Davis and Paul Kirk, Lecture Notes in Algebraic Topology
      url: https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf
      locator: Corollary 7.9, Proposition 7.10, Lemma 7.11, and Theorem 7.7, printed pages 173--174
    - title: Haynes Miller, MIT 18.906 Algebraic Topology II lecture notes
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: Theorem 15.3, printed pages 49--50
---

## Statement

Assume AC for arbitrary families of relative cells. Let
$f:X^n\cup A\to Y$ satisfy the coefficient hypotheses of primary
obstruction theory. Then the restriction $f|_{X^{n-1}\cup A}$ extends over
$X^{n+1}\cup A$ if and only if

$$ [\theta(f)]=0\in H^{n+1}(X,A;\mathcal P). $$

For a finite relative CW pair, the proof uses only finite choice.

More precisely, if $d\in C^n(X,A;\mathcal P)$ is any cellular cochain, there
is a map $f_d:X^n\cup A\to Y$ equal to $f$ on $X^{n-1}\cup A$ and satisfying
$d(f,\operatorname{const},f_d)=d$. This assertion does not say that $f$ and
$f_d$ are homotopic on the $n$-skeleton.

## Facts & Assumptions

[F1] Difference cochains satisfy $\delta d(f_0,H,f_1)=\theta(f_0)-\theta(f_1)$ ([[thm-the-primary-obstruction-class-is-independent-of-cellular-choices]]).

[F2] The difference value on an oriented $n$-cell is the signed homotopy class of the map on the boundary of its prism ([[def-difference-cochain-between-two-cellular-extensions]]).

[F3] On one attached cell, a zero attaching-sphere class is equivalent to extension over its disk ([[lem-extending-a-map-over-one-cell-is-equivalent-to-nullhomotoping-its-attaching-sphere]]); compatible cell maps glue by the CW pushout.

[A1] AC is available only for simultaneous choices over arbitrary cell families; finite families need only finite choice ([[def-axiom-of-choice]]).

## Proof

**Given:** $(X,A)$, $f$, its coefficient system, and [A1] as in the statement.

1.1 Suppose the prior-stage restriction extends to $F:X^{n+1}\cup A\to Y$. Put $f_1=F|_{X^n\cup A}$. Every attaching sphere then bounds its characteristic-disk restriction, so $\theta(f_1)=0$ by [F3]. The independence theorem, applied to the relevant prior-stage homotopy, gives $[\theta(f)]=[\theta(f_1)]=0$. [F1, F3]

1.2 Let $d\in C^n(X,A;\mathcal P)$ and consider one oriented relative $n$-cell with characteristic disk $D^n$ and cell map $f_e$. Choose a based sphere map $u_e:S^n\to Y$ representing the sign-adjusted value $d(e)$ in the stalk fixed by the cell's whisker. There is a relative pinch map $q:D^n\to D^n\vee S^n$: choose a small closed ball in the interior, collapse its boundary to the wedge point, map the outside quotient to the first disk by a radial homeomorphism fixed on $\partial D^n$, and map the collapsed inner ball with degree $+1$ to the sphere summand. Define $f_{d,e}=(f_e\vee u_e)q$. It agrees with $f_e$ on $\partial D^n$. In the prism-boundary sphere of [F2], collapse the stationary side and the region on which the two disk maps agree. What remains is exactly the degree-one sphere carrying $u_e$; choosing the sign of $u_e$ according to [F2]'s convention therefore gives $d(f,\operatorname{const},f_d)(e)=d(e)$. [F2]

2.1 Apply Step 1.2 to every relative $n$-cell. AC in [A1] selects the sphere representatives for an arbitrary family; only finitely many choices occur for a finite pair. The modified cell maps agree with the unchanged map on $X^{n-1}\cup A$, so the CW pushout and weak topology glue them to $f_d:X^n\cup A\to Y$, with $d(f,\operatorname{const},f_d)=d$. No homotopy from $f$ to $f_d$ on the $n$-cells is constructed or needed. [A1, F2, step 1.2]

3.1 Conversely, assume $[\theta(f)]=0$ and choose $d$ with $\theta(f)=\delta d$. Apply Step 2.1 and put $f'=f_d$. By [F1], $\theta(f)-\theta(f')=\delta d=\theta(f)$, hence $\theta(f')=0$. By [F3], $f'$ extends over every relative $(n+1)$-cell. AC selects all fillers for an arbitrary cell family, and the pushout glues them to an extension on $X^{n+1}\cup A$. This extension restricts to the original map on $X^{n-1}\cup A$. [A1, F1, F3, step 2.1]

4.1 Steps 1.2–2.1 also prove the more precise realization assertion, and Steps 1.1 and 3.1 prove both implications. Zero cochains, absent cells, and the case $A=X$ are included. The proof does not say that the original fixed map $f$ extends when merely its cohomology class vanishes: it may first be changed, generally nonhomotopically rel boundary, on the $n$-cells while staying fixed on the prior skeleton. $\square$ [step 1.1, step 1.2, step 2.1, step 3.1]
