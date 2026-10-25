---
id: thm-volume-of-a-closed-three-ball-cavalieri-proof
kind: theorem
title: 'The volume of a three-ball by Cavalieri''s cylinder-minus-cones proof'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-cavalieri-principle-for-jordan-content, cor-volume-of-a-right-circular-cylinder, cor-volume-of-a-right-circular-cone, cor-disc-jordan-content-is-pi-r-squared, cor-jordan-content-finite-additivity, def-euclidean-spheres-and-closed-balls, thm-solid-between-continuous-graphs-fubini-formula, thm-heine-borel-rn, lem-continuity-is-local-and-pastes, thm-continuous-inverse, thm-nth-roots-exist, lem-metrics-on-rn, thm-jordan-boundary-criterion]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "Sigurd Angenent, Math 221 lecture notes, Chapter 8 §3.3"
      url: "https://people.math.wisc.edu/~angenent/Free-Lecture-Notes/free221.pdf"
pipeline_run: null
---

## Statement

For $r\ge0$, put $\overline B_3(0,r):=\{x\in\mathbb R^3:\lVert x\rVert_2\le r\}$, extending the positive-radius notation of [[def-euclidean-spheres-and-closed-balls]] to $r=0$. This closed three-dimensional ball has volume $4\pi r^3/3$.

## Facts & Assumptions

**Given:** A radius $r\ge0$, the ball $B:=\overline B_3(0,r)$ of the Statement, a radius-$r$ cylinder of height $2r$, and inside it the two radius-$r$, height-$r$ cones with common vertex at the centre and bases at the top and bottom faces.

[F1] If two bounded Jordan sets have Jordan sections outside content-zero exceptional parameter sets and their ordinary sectional contents agree away from those sets, then the two sets have equal content ([[cor-cavalieri-principle-for-jordan-content]]).

[F2] A closed disc of radius $s\ge0$ has Jordan content $\pi s^2$ ([[cor-disc-jordan-content-is-pi-r-squared]]).

[F3] A right circular cylinder of radius $R\ge0$ and height $h\ge0$ has volume $\pi R^2h$ ([[cor-volume-of-a-right-circular-cylinder]]).

[F4] A right circular cone of radius $R\ge0$ and height $h\ge0$ has volume $\pi R^2h/3$ ([[cor-volume-of-a-right-circular-cone]]).

[F5] Jordan content is additive on disjoint finite families, and more generally across content-zero overlaps ([[cor-jordan-content-finite-additivity]]).

[F6] A solid between continuous graphs over a compact Jordan base is compact and Jordan measurable ([[thm-solid-between-continuous-graphs-fubini-formula]]).

[F7] A Euclidean set is compact if and only if it is closed and bounded ([[thm-heine-borel-rn]]).

[F8] A composite of continuous maps is continuous ([[lem-continuity-is-local-and-pastes]]).

[F9] The inverse of a continuous injective real function on an interval is continuous on its image ([[thm-continuous-inverse]]).

[F10] Every nonnegative real has a unique nonnegative square root ([[thm-nth-roots-exist]]).

[F11] The Euclidean distance is $d_2(u,v)=\|u-v\|_2$ and satisfies the metric triangle inequality ([[lem-metrics-on-rn]]).

[F12] A bounded set is Jordan measurable if and only if its boundary has content zero ([[thm-jordan-boundary-criterion]]).

## Proof

**Proof technique:** direct.

1.1 Let $D\subseteq\mathbb R^2$ be the closed disc of radius $r$. It is Jordan measurable by [F2], and it is closed and bounded, hence compact by [F7]. The triangle inequality in [F11], applied in both orders, gives $|\|u\|_2-\|v\|_2|\le\|u-v\|_2$, so the norm is continuous. On $[0,r]$, the estimate $|(r^2-s^2)-(r^2-t^2)|=|s-t||s+t|\le2r|s-t|$ makes $s\mapsto r^2-s^2$ continuous; [F9] and [F10] make the nonnegative square root continuous, and [F8] then makes $\rho(u):=\sqrt{r^2-\lVert u\rVert_2^2}$ continuous on $D$. Thus [F6] identifies $B$ with the compact Jordan solid between $-\rho$ and $\rho$. Fact [F6] likewise makes the cylinder between the constant graphs $-r,r$, the upper and lower cones between $\lVert u\rVert_2,r$ and $-r,-\lVert u\rVert_2$, and the comparison solid $C$ between $-\lVert u\rVert_2,\lVert u\rVert_2$ compact Jordan sets. [given, F2, F6, F7, F8, F9, F10, F11, construct, algebra]

2.1 At height $z\in[-r,r]$, [F2] gives the ball section area $\pi(r^2-z^2)$. The comparison section is the radius-$r$ disc with the open radius-$|z|$ disc removed. It is bounded and its boundary lies in the two disc boundary circles, so [F12] makes it Jordan measurable; its overlap with the closed inner disc is the inner boundary circle and has content zero. Facts [F2] and [F5] therefore give the same area $\pi(r^2-z^2)$. At $z=\pm r$ both areas are zero. [step 1.1, F2, F5, F12, algebra]

2.2 The cylinder is the union of $C$ and the two cones from step 1.1. Their pairwise overlaps lie in boundaries, which have content zero by [F12], so [F5], [F3], and [F4] give $\operatorname{cont}(C)=2\pi r^3-2(\pi r^3/3)=4\pi r^3/3$. [step 1.1, F3, F4, F5, F12, algebra]

3.1 The bounded Jordan sets $B$ and $C$ have the equal Jordan sections of step 2.1, so [F1] gives $\operatorname{cont}(B)=\operatorname{cont}(C)=4\pi r^3/3$. The construction and calculation include $r=0$. [step 1.1, step 2.1, step 2.2, F1] ∎

## Remarks

This proof compares sections with a cylinder minus cones. The disc-integration proof [[cor-volume-of-a-closed-three-ball]] follows a different route and is not a dependency of this theorem.
