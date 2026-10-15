---
id: def-tdmath-forward-sector-hypotheses
kind: definition
title: Forward-sector hypotheses for a simple state domain
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
deps: [def-tdmath-tagged-scalable-compound, lem-tdmath-compound-mass-well-defined]
dependency_roles:
  def-tdmath-tagged-scalable-compound: mathematical-premise
  lem-tdmath-compound-mass-well-defined: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §§III.A–III.B"
      url: "https://arxiv.org/pdf/cond-mat/9708200v2"
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, Chapters 2 and 4, complete 607-page edition"
      url: "https://courses.physics.ucsd.edu/2010/Spring/physics210a/LECTURES/STATMECH.pdf"
verification:
  precheck: n/a
---

## Definition

Let $I$ be a set of tagged simple-system labels. For each $i\in I$, let $n_i\ge1$ and let $\Gamma_i\subset\mathbb R^{n_i+1}$ be nonempty, open, and convex, with coordinates $x=(u,v)$, $u\in\mathbb R$, $v\in\mathbb R^{n_i}$. A state is a tagged pair $(i,x)$; distinct labels remain distinct even when their coordinate tuples agree. Positive scaled copies and finite compounds use the coefficient maps and total coefficient mass of [[def-tdmath-tagged-scalable-compound]]. A comparison $A\prec B$ is defined only for equal-mass compounds. For a tagged state $x$, $e_x$ denotes the unit point mass at that state; the zero compound is the empty map. Write $A\sim B$ when both $A\prec B$ and $B\prec A$, and write $A\prec\prec B$ when $A\prec B$ but $B\not\prec A$.

The common relation satisfies A1–A6 on all equal-mass finite compounds: (A1) reflexivity; (A2) transitivity; (A3) if $A\prec B$, then $A+C\prec B+C$ for every compound $C$; (A4) if $A\prec B$, then $tA\prec tB$ for every $t>0$; (A5) $te_x$ is equivalent to $se_x+(t-s)e_x$ for every state label $x$, $t>0$, and $0<s<t$; (A6) for equal-mass $A,B$, fixed positive equal-mass spectators $Z_0,Z_1$, and every sequence $\epsilon_n>0$ decreasing to zero, $A+\epsilon_n Z_0\prec B+\epsilon_n Z_1$ for all $n$ implies $A\prec B$. These are hypotheses, not conclusions. No comparison hypothesis is included here.

For each $i$ and $x\in\Gamma_i$, define the forward sector $A_x:=\{y\in\Gamma_i:(i,x)\prec(i,y)\}$. The simple-domain assumptions are: (A7) for $0<t<1$, the compound $((i,tx),(i,(1-t)y))$ compares to $(i,tx+(1-t)y)$; (S1) each $x$ has a strict successor; (S2) $A_x$ has exactly one supporting hyperplane at $x$, expressible as $u-u_x+P_i(x)\cdot(v-v_x)=0$ with finite slope $P_i(x)$, and $P_i$ is locally Lipschitz; (S3) the boundary of $A_x$ relative to $\Gamma_i$ is arcwise connected. A supporting hyperplane means that $A_x$ lies in one of its closed half-spaces and meets the plane at $x$. The affine hull is the smallest affine subspace containing a set; relative interior is interior in that affine hull. Closure and boundary are taken in the indicated affine hull or in $\Gamma_i$, as named; boundary is closure intersected with closure of the complement in that relative topology.

This definition imposes no physical interpretation, units, or empirical claim. A contact theorem that uses joins must separately assume that each join is a simple domain satisfying these same forward-sector hypotheses.
