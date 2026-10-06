---
id: lem-relative-lifts-produce-cohomological-transgressions
kind: lemma
title: "Relative lifts produce cohomological transgressions"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - thm-cohomological-serre-spectral-sequence
  - def-r-page-of-the-spectral-sequence-of-a-filtered-complex
  - thm-the-cohomological-filtered-complex-construction
  - thm-cellular-cochains-compute-cohomology-with-local-coefficients
  - thm-long-exact-sequence-of-a-pair-in-singular-cohomology
  - thm-steenrod-squares-are-well-defined-and-natural
  - def-axiom-of-choice
  - lem-steenrod-squares-commute-with-relative-cohomology-connectors
dependency_level: 1
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Spectral Sequences in Algebraic Topology, Chapter 1"
      url: "https://pi.math.cornell.edu/~hatcher/SSAT/SSch1.pdf"
      locator: "Lemma 1.35, printed p. 55, and the relative construction underlying Proposition 1.13, printed pp. 21–22: relative lifts and transgression."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC. Let $p:E\to B$ be a Serre fibration over a simply connected CW base with basepoint vertex and fiber $F$. If $x\in H^m(F;\mathbb F_2)$, $m>0$, and $y\in H^{m+1}(B,*;\mathbb F_2)$ satisfy

$$\delta x=p^*y\quad\text{in }H^{m+1}(E,F;\mathbb F_2),$$

then $x$ survives to $E_{m+1}^{0,m}$ and its differential $d_{m+1}$ is the bottom-axis coset represented by $y$. Moreover $Sq^a x$ has the same property with representative $Sq^a y$ at page $m+a+1$, whenever its degree is positive.

## Facts & Assumptions

**Given:** AC; a Serre fibration $p:E\to B$ over a simply connected CW base with basepoint a vertex, fiber $F$; classes $x\in H^m(F;\mathbb F_2)$, $m>0$, and $y\in H^{m+1}(B,*;\mathbb F_2)$ with $\delta x=p^*y$ in $H^{m+1}(E,F;\mathbb F_2)$; and a nonnegative integer $a$ with $m+a>0$.

[F1] The cohomological Serre spectral sequence is constructed from the filtered singular cochain complex with the stated filtration and page formula, and converges to the abutment ([[thm-cohomological-serre-spectral-sequence]], [[def-r-page-of-the-spectral-sequence-of-a-filtered-complex]], [[thm-the-cohomological-filtered-complex-construction]]).

[F2] Cellular cochains compute cohomology with local coefficients, so cohomology in degree $m+1$ of an $m$-dimensional CW complex vanishes ([[thm-cellular-cochains-compute-cohomology-with-local-coefficients]]); the cohomology pair sequence is exact and its connector is represented by the coboundary of an extension ([[thm-long-exact-sequence-of-a-pair-in-singular-cohomology]]).

[F3] Steenrod squares are natural additive operations on relative cohomology and commute with the pair connector ([[thm-steenrod-squares-are-well-defined-and-natural]], [[lem-steenrod-squares-commute-with-relative-cohomology-connectors]]).

[F4] AC is used to choose the relative cocycle representative $v$ and the extension $u$ ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 A degree-$m+1$ class of $B$ lifts to $H^{m+1}(B,B^m)$: the restriction to $B^m$ is zero because cellular cochains on an $m$-dimensional CW complex vanish in degree $m+1$, and the pair sequence gives the lift. Choose a relative cocycle $v$ for that lift, hence vanishing on $B^m$. Extend a cocycle representing $x$ from $F$ to an absolute cochain $u$ of $E$. The asserted relative-class equality means $du-p^*v=dt$ for a cochain $t$ vanishing on $F$. Replace $u$ by $u-t$. It still restricts to the same fiber cocycle and now satisfies $du=p^*v$ exactly. [given, F1, F2, F4]

2.1 In the decreasing skeletal filtration, $p^*v$ lies in filtration $m+1$, since it vanishes over $B^m$. Thus $u$ is an $(m+1)$-cycle representative in column zero. The filtered-complex page formula shows it survives every earlier page, and the page-$m+1$ differential is represented by its coboundary $p^*v$. On the row of fiber degree zero the projection edge identifies this class with $y$, modulo precisely the earlier incoming boundaries. This identification is the base-edge identification in the published cohomological Serre construction, not an assumption of a new operation on a page. The column-zero identification sends the restriction of $u$ to the original fiber class; simple connectivity makes its transport constant. The finite-quotient filtration comparison in the published Serre theorem identifies these representative computations with the actual Serre pages, despite the raw singular filtration being unbounded. [step 1.1, F1]

3.1 Finally the connector-compatibility lemma and naturality of relative squares give $$\delta Sq^a x=Sq^a\delta x=Sq^a p^*y=p^*Sq^a y.$$ Apply the same representative argument in total degree $m+a+1$. This proves both the survival and the precise differential page; no rule about squares of an arbitrary spectral-sequence cycle has been assumed. Zero operations simply give zero representatives. [step 2.1, F3] ∎
