---
id: thm-tdmath-sector-nesting
kind: theorem
title: Nesting and comparison of simple-system states
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 8
deps: [def-tdmath-forward-sector-hypotheses, lem-tdmath-convex-sector-closedness, lem-tdmath-sector-interior, thm-tdmath-forward-boundary-graph, lem-tdmath-relative-interior-segment]
dependency_roles:
  def-tdmath-forward-sector-hypotheses: mathematical-premise
  lem-tdmath-convex-sector-closedness: mathematical-premise
  lem-tdmath-sector-interior: mathematical-premise
  thm-tdmath-forward-boundary-graph: mathematical-premise
  lem-tdmath-relative-interior-segment: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, Theorems 3.6–3.8, pp. 47–50"
      url: "https://arxiv.org/pdf/cond-mat/9708200v2"
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, §§4.1 and 7.2–7.3, complete 607-page edition"
      url: "https://courses.physics.ucsd.edu/2010/Spring/physics210a/LECTURES/STATMECH.pdf"
verification:
  precheck: n/a
---

## Statement

Under [[def-tdmath-forward-sector-hypotheses]], the sectors are nested: if $y\in A_x$, then $A_y\subseteq A_x$; equality holds when $y\in\partial A_x$, and $A_y\subset\operatorname{int}_{\Gamma_i}A_x$ when $y\in\operatorname{int}_{\Gamma_i}A_x$. For every $x,y\in\Gamma_i$, either $x\prec y$ or $y\prec x$ (possibly both). Strict comparison is exactly interior membership: $x\prec\prec y$ if and only if $y\in\operatorname{int}_{\Gamma_i}A_x$.

## Facts & Assumptions

**Given:** A1–A7 and S1–S3 on a simple domain $\Gamma_i$.

[A1] [[def-tdmath-forward-sector-hypotheses]]: $A_x$ is defined by $x\prec y$, every state is in its own sector, and each support plane is unique.

[F1] [[lem-tdmath-convex-sector-closedness]]: sectors are convex and relatively closed; the collinear implications hold.

[F2] [[lem-tdmath-sector-interior]]: every sector has nonempty ambient interior.

[F3] [[thm-tdmath-forward-boundary-graph]]: if $w\in\partial A_x$, then $A_w=A_x$.

[F4] [[lem-tdmath-relative-interior-segment]]: if $w$ is in the relative interior of a convex set and $q$ lies in its closure, then $(1-t)w+tq$ lies in the relative interior for every $0\le t<1$.

## Proof

1.1 If $y\in A_x$, transitivity gives $A_y\subseteq A_x$. If also $y\in\partial A_x$, [F3] gives equality. Suppose instead $y\in\operatorname{int}A_x$. If $A_y$ met $\partial A_x$ at $z$, then $z\in A_y$ and [F3] would give $A_z=A_x$. Since $z\in A_y$, transitivity gives $A_z\subseteq A_y\subseteq A_x$, so $A_y=A_x$. But S2 puts $y$ on $\partial A_y$, contradicting $y\in\operatorname{int}A_x$. Thus $A_y$ avoids $\partial A_x$ and, being a subset of the closed sector $A_x$, lies in $\operatorname{int}A_x$. [A1, F3, algebra]

1.2 Suppose neither $y\in A_x$ nor $x\in A_y$. Choose $z\in\operatorname{int}A_x$ using [F2]. The segment from $y$ to $z$ lies in $\Gamma_i$ and meets $\partial A_x$ at a point $w$ strictly between its endpoints. By [F3], $A_w=A_x$, so $w\prec z$. The collinear implication in [F1], applied to $w=ty+(1-t)z$, gives $y\prec w\prec z$. Hence every $z\in\operatorname{int}A_x$ lies in $A_y$. Reversing $x,y$ gives $\operatorname{int}A_y\subseteq A_x$. [A1, F1, F2, F3]

2.1 Because $A_x$ is full-dimensional by [F2], its affine hull is the ambient space. Fix $w\in\operatorname{int}A_x$. For any $q\in A_x$, relative closedness gives $q\in\overline{A_x}^{\,\Gamma_i}$, and [F4] puts $(1-t)w+tq$ in $\operatorname{int}A_x$ for every $0\le t<1$. Letting $t\uparrow1$ shows $q\in\overline{\operatorname{int}A_x}^{\,\Gamma_i}$. The reverse inclusion follows because $A_x$ is relatively closed. Hence $A_x=\overline{\operatorname{int}A_x}^{\,\Gamma_i}$; the same holds for $A_y$. Relative closedness from [F1] therefore extends the two interior inclusions in step 1.2 to $A_x\subseteq A_y$ and $A_y\subseteq A_x$. Equality would put $x\in A_y$, contradicting the supposition. Thus at least one of $x\prec y$ or $y\prec x$ always holds. [F1, F2, F4, step 1.2]

3.1 If $x\prec y$, then $y\in A_x$. If $y$ is a boundary point, step 1.1 gives $A_x=A_y$, hence $x\prec y$ and $y\prec x$. Otherwise step 1.1 gives $A_y\subset\operatorname{int}A_x$, and $x\notin A_y$ because S2 places $x$ on $\partial A_x$. Thus $x\prec\prec y$. Conversely, if $y\in\operatorname{int}A_x$, step 1.1 and S2 show $x\notin A_y$, so $x\prec\prec y$. [A1, F1, step 1.1, algebra] ∎
