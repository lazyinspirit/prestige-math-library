---
id: lem-fas-coarse-branch-derivative
kind: lemma
title: "Derivative of the exact-branch FAS two-grid cycle"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [alg-fas-two-grid-cycle, thm-euclidean-implicit-function-theorem, thm-chain-rule-for-total-derivatives]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "William L. Briggs, Van Emden Henson, and Steve F. McCormick, A Multigrid Tutorial, 2nd ed., Chapter 6"
      url: "https://amath.colorado.edu/~stevem/appm6640/mgtut13notes.pdf"
    - title: "Harald van Brummelen, Basics of Multigrid Methods, SINTEF winter-school lecture notes"
      url: "https://www.sintef.no/globalassets/project/evitameeting/2011/lecture1.pdf"
    - title: "Van Emden Henson, Multigrid Methods for Nonlinear Problems: An Overview, UCRL-JC-150259"
      url: "https://digital.library.unt.edu/ark%3A/67531/metadc1402426/m2/1/high_res_d/15002749.pdf"
---

## Statement

Consider one exact-branch two-grid cycle from [[alg-fas-two-grid-cycle]]. Let
$F_h:U_h\to\mathbb R^{n_h}$ and $F_H:U_H\to\mathbb R^{n_H}$ be $C^1$ on
open sets, let $I,R,P$ be linear, and suppose $F_h(u_*)=f_h$ and
$Iu_*\in U_H$. Assume the exact coarse solver selects the local root branch
through $Iu_*$ and $DF_H(Iu_*)$ is invertible. Suppose the pre/post smoothing
maps are $C^1$ and fix $u_*$. The selected coarse root $v(u)$ is locally $C^1$,
and the derivative of the actual FAS cycle $E$ at $u_*$ is
$$DE(u_*)=DS^{\rm post}(u_*)\bigl[I_{n_h}-P\,DF_H(Iu_*)^{-1}R\,DF_h(u_*)\bigr]DS^{\rm pre}(u_*).$$

No identity between $R$ and $I$, or between the coarse operator and a
rediscretized fine operator, is assumed in this derivative formula.

## Facts & Assumptions

**Given:** The finite-dimensional maps, linear transfers, fine root, selected exact coarse branch, invertible coarse Jacobian, and $C^1$ pre/post smoothers in the statement.

[F1] [[alg-fas-two-grid-cycle]]: after pre-smoothing at $u$, the coarse target is $g_H(u)=F_H(Iu)+R(f_h-F_h(u))$, and an exact coarse solve returns $v(u)$ before the correction $u+P(v(u)-Iu)$.

[F2] [[thm-euclidean-implicit-function-theorem]]: for a $C^1$ map $G(u,v)$ with $G(u_*,v_*)=0$ and invertible partial derivative $D_vG(u_*,v_*)$, there is a local $C^1$ root branch $v(u)$ and $Dv(u_*)=-D_vG(u_*,v_*)^{-1}D_uG(u_*,v_*)$.

[F3] [[thm-chain-rule-for-total-derivatives]]: for totally differentiable Euclidean maps, $D(g\circ f)(a)=Dg(f(a))\circ Df(a)$.

## Proof

1.1 Define $G(u,v):=F_H(v)-F_H(Iu)-R(f_h-F_h(u))$ on the open product domain where its terms are defined. The given fine root gives $G(u_*,Iu_*)=0$. Since $I$ and $R$ are linear and $F_h,F_H$ are $C^1$, $G$ is $C^1$; its partial derivatives at $(u_*,Iu_*)$ are $D_vG=DF_H(Iu_*)$ and $D_uG=-DF_H(Iu_*)I+RDF_h(u_*)$. The first is invertible by hypothesis. [given, F1, construct, algebra]

2.1 Apply [F2] to $G$. Its selected local branch satisfies $Dv(u_*)=-DF_H(Iu_*)^{-1}\bigl(-DF_H(Iu_*)I+RDF_h(u_*)\bigr)=I-DF_H(Iu_*)^{-1}RDF_h(u_*).$ [F2, step 1.1, algebra]

3.1 The coarse correction map is $C(u)=u+P(v(u)-Iu)$ by [F1]. Differentiating and using step 2.1 gives $DC(u_*)=I_{n_h}+P(Dv(u_*)-I)=I_{n_h}-P\,DF_H(Iu_*)^{-1}RDF_h(u_*)$. [F1, step 2.1, algebra]

4.1 The whole cycle is $E=S^{\rm post}\circ C\circ S^{\rm pre}$. The pre-smoother fixes $u_*$, and the stated smoother maps are $C^1$, so [F3] and step 3.1 give the displayed formula for $DE(u_*)$. [given, F3, step 3.1, algebra] ∎
