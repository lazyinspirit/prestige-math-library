---
id: lem-tdmath-sector-interior
kind: lemma
title: Every forward sector has nonempty interior
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 6
deps: [def-tdmath-forward-sector-hypotheses, lem-tdmath-convex-sector-closedness, lem-tdmath-relative-boundary-support, lem-tdmath-relative-interior-segment]
dependency_roles:
  def-tdmath-forward-sector-hypotheses: mathematical-premise
  lem-tdmath-convex-sector-closedness: mathematical-premise
  lem-tdmath-relative-boundary-support: mathematical-premise
  lem-tdmath-relative-interior-segment: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, Theorem 3.2, pp. 43–45"
      url: "https://arxiv.org/pdf/cond-mat/9708200v2"
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, §§4.1 and 7.2–7.3, complete 607-page edition"
      url: "https://courses.physics.ucsd.edu/2010/Spring/physics210a/LECTURES/STATMECH.pdf"
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
  precheck: n/a
---

## Statement

Under [[def-tdmath-forward-sector-hypotheses]], every forward sector $A_x$ has nonempty interior in its ambient simple domain $\Gamma_i$.

## Facts & Assumptions

**Given:** A1–A7 and S1–S3 on an open convex $\Gamma_i\subset\mathbb R^d$, $d=n_i+1$.

[A1] [[def-tdmath-forward-sector-hypotheses]]: each sector is supported at every state by exactly one hyperplane, and every state has a strict successor.

[F1] [[lem-tdmath-convex-sector-closedness]]: $A_x$ is convex and closed relative to $\Gamma_i$; if $y\in A_x$, then $A_y\subseteq A_x$ by transitivity.

[F2] [[lem-tdmath-relative-boundary-support]]: a convex set has a support at its relative boundary in its affine hull, and a set of affine dimension at most $d-2$ has at least two distinct ambient supports through each of its points.

[F3] [[lem-tdmath-relative-interior-segment]]: a convex set has nonempty relative interior, and every segment from a relative-interior point to a closure point, except for the closure endpoint, stays in the relative interior.

## Proof

1.1 Suppose $A_x$ has empty ambient interior. If $d=1$, S1 supplies a strict successor $y\ne x$; convexity puts the nondegenerate interval between $x$ and $y$ in $A_x$, contradicting empty interior. Thus take $d\ge2$. The affine hull of $A_x$ has dimension at most $d-1$. If its dimension were at most $d-2$, [F2] would give two distinct supporting hyperplanes at $x$, contradicting S2. Hence its affine hull is a hyperplane $H$; this $H$ supports $A_x$ at every point, including $x$. [A1, F2]

1.2 By S1 choose $y$ with $x\prec\prec y$. Then $y\in A_x$ and $x\notin A_y$. Transitivity gives $A_y\subseteq A_x\subseteq H$. If $A_y$ had affine dimension at most $d-2$, [F2] would again give multiple ambient supports at $y$, contrary to S2. Thus $\operatorname{aff}A_y=H$. [A1, F1, F2]

1.3 Choose $w\in\operatorname{ri}_H A_y$ by [F3]. The segment from $w$ to $x$ is contained in $H\cap\Gamma_i$ by convexity of both sets, starts in $A_y$, and ends outside $A_y$. Its intersection with $A_y$ is closed by relative closedness [F1], so it has a last point $z$ before $x$. Points immediately after $z$ on this segment lie outside $A_y$ and, because $A_y$ is closed in the open set $\Gamma_i$, outside $\overline{A_y}^{\,H}$. Thus $z\in\partial_H\overline{A_y}^{\,H}$. The support statement [F2] supplies a nonzero functional on $H$ whose zero hyperplane supports $A_y$ at $z$. [F1, F2, F3, choose]

2.1 Extend this functional to the ambient Euclidean space by taking its normal vector in the direction space of $H$. Its zero hyperplane contains the within-$H$ support and is not $H$ itself. Since $z\in A_y$, transitivity gives $A_z\subseteq A_y$, so the extended plane supports $A_z$ at $z$; the plane $H$ also supports $A_z$. These are distinct, contradicting S2 at $z$. Therefore $A_x$ has nonempty ambient interior. [A1, F1, step 1.3, algebra] ∎
