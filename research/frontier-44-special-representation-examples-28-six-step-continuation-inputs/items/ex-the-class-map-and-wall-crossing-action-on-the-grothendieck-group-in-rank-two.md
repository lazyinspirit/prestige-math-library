---
id: ex-the-class-map-and-wall-crossing-action-on-the-grothendieck-group-in-rank-two
kind: example
title: The class map and the wall-crossing action in rank two
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 6
deps: [lem-wall-crossing-functors-act-on-the-grothendieck-group-by-right-multiplication-by-one-plus-s,
       lem-wall-crossing-compositions-produce-the-projective-with-the-top-standard-label,
       def-grothendieck-group-and-character-of-category-o,
       prop-the-grothendieck-group-of-o-has-simple-and-standard-bases,
       def-axiom-of-choice]
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Arthur Garnier, The classical theory of Soergel bimodules and the link with Lusztig's conjecture, Oberwolfach Arbeitsgemeinschaft note (2022)"
      url: "https://www.lamfa.u-picardie.fr/agarnier/talks/soergel_notes.pdf"
      locator: "Proposition 4.7 and Remark 4.8 (the K_0(O_0) = Z[W] picture with right multiplication by 1+s)"
    - title: "Wolfgang Soergel, Kategorie O, perverse Garben und Moduln ueber den Koinvarianten zur Weylgruppe, J. Amer. Math. Soc. 3 (1990) 421-445 (MPIM preprint 1989/46 full text)"
      url: "https://archive.mpim-bonn.mpg.de/3653/1/preprint_1989_46.pdf"
      locator: "Section 2.6, Theorem 12(i): the W-operation on <O_0> defined by sM = theta_s M - M"
---

## Example

Assume the Axiom of Choice, inherited from the published items used. Work in
type $A_2$: the Weyl group is $W=S_3=\langle s,t\rangle$ with $s^2=t^2=1$ and
$m_{st}=3$, so that the six elements $1,s,t,st,ts,sts$ are distinct, with
$sts=tst=w_0$. Fix a dominant regular integral weight $\lambda$ and its regular
integral block $\mathcal O_\lambda$ in the sense of
[[def-regular-integral-category-o-block-and-its-antidominant-weight]], with
standards $\Delta(v\cdot\lambda)$ indexed by $v\in W$. By
[[prop-the-grothendieck-group-of-o-has-simple-and-standard-bases]] the classes
$[\Delta(v\cdot\lambda)]$ form a $\mathbb Z$-basis of $K_0(\mathcal O_\lambda)$,
so the assignment
$$c\colon K_0(\mathcal O_\lambda)\longrightarrow\mathbb Z[W],\qquad c[\Delta(v\cdot\lambda)]=v$$
is an isomorphism of abelian groups, and
[[lem-wall-crossing-functors-act-on-the-grothendieck-group-by-right-multiplication-by-one-plus-s]]
identifies the class action of the wall-crossing functor $\theta_s$ of
[[def-wall-crossing-functor-and-unit-counit]] with right multiplication by
$1+s$, and likewise for $t$.

**The two-step products.** Applying the class formula first to
$\Delta(\lambda)$ and then to the one-step object gives
$$c\,[\theta_t\theta_s\Delta(\lambda)]=(1+s)(1+t)=1+s+t+st,$$
because $\theta_s$ acts first and contributes the factor $1+s$ on the right.
The other order gives
$$c\,[\theta_s\theta_t\Delta(\lambda)]=(1+t)(1+s)=1+t+s+ts.$$
Thus
$$[\theta_t\theta_s\Delta(\lambda)]=[\Delta(\lambda)]+[\Delta(s\cdot\lambda)]+[\Delta(t\cdot\lambda)]+[\Delta(st\cdot\lambda)]$$
while
$$[\theta_s\theta_t\Delta(\lambda)]=[\Delta(\lambda)]+[\Delta(t\cdot\lambda)]+[\Delta(s\cdot\lambda)]+[\Delta(ts\cdot\lambda)].$$

**Non-commutativity.** The two products differ: the coefficients of the
length-two elements $st$ and $ts$, which are distinct elements of $S_3$, are
interchanged. Since the Verma classes are linearly independent, the two class
operators on $K_0(\mathcal O_\lambda)$ differ, and in fact they already differ
on the single class $[\Delta(\lambda)]$. This is the same non-commutativity as
in the Hecke algebra of the $S_3$ system, whose standard generators satisfy
$T_sT_t=T_{st}\ne T_{ts}=T_tT_s$; the wall-crossing functors accordingly
behave Hecke-like rather than like a commuting tuple of group elements, and the
two-step products are already sensitive to the order in which the walls are
crossed.

**Projective multiplicities.** The object $\theta_s\theta_t\Delta(\lambda)$ is
projective, and its class contains the single Bruhat-maximal label $ts$ with
coefficient one. By
[[lem-wall-crossing-compositions-produce-the-projective-with-the-top-standard-label]]
for the reduced word $ts$ (the composite $\theta_s\theta_t$ applies $\theta_t$
first), the indecomposable projective $P(ts\cdot\lambda)$ occurs as a summand
of $\theta_s\theta_t\Delta(\lambda)$ with multiplicity one, and every other
indecomposable summand has a strictly smaller label, i.e. lies among
$P(1),P(s\cdot\lambda),P(t\cdot\lambda)$. The multiplicity of $P(ts\cdot\lambda)$
is read off from the unitriangularity of the standard-support matrix of the
block; the remaining multiplicities are determined recursively but the example
records only the top one.
