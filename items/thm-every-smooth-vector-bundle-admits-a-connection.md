---
id: thm-every-smooth-vector-bundle-admits-a-connection
kind: theorem
title: "Every smooth vector bundle admits a connection"
status: draft
origin: pipeline
deps: ["thm-local-connection-forms-glue-exactly-when-they-obey-the-transformation-law","thm-smooth-partitions-of-unity-exist-on-manifolds","thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary","lem-locally-finite-linear-combinations-of-sections-are-smooth","def-axiom-of-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
---

## Statement

Assume AC. Every finite-rank smooth real vector bundle over a Hausdorff second-countable smooth manifold, with boundary allowed, admits a connection. No canonicity or smaller sufficient choice bound is asserted.

## Facts & Assumptions

**Given:** The bundle $E\to M$ and full AC.

[F1] Compatible local one-form matrices determine a connection; a single frame with zero matrix gives the componentwise derivative ([[thm-local-connection-forms-glue-exactly-when-they-obey-the-transformation-law]]).

[F2] Smooth partitions subordinate to open covers exist in the boundaryless and boundary settings ([[thm-smooth-partitions-of-unity-exist-on-manifolds]], [[thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary]]). Here their constructions are used under full AC, including the point-indexed subordinate chart choices, shrinking choices and the family of bump choices; the advertised smaller choice bound is not used.

[F3] A locally finite sum of smooth sections is smooth ([[lem-locally-finite-linear-combinations-of-sections-are-smooth]]).

[A1] AC supplies choices from arbitrary families of nonempty sets ([[def-axiom-of-choice]]).

## Proof

1.1 Choose a trivializing open cover together with a smooth frame on each member, using AC for any simultaneous frame selections. Apply the partition construction to obtain smooth $\rho_i\ge0$, with locally finite supports, $\sum_i\rho_i=1$, and an assigned framed open set $U_i$ containing $\operatorname{supp}\rho_i$. Multiple indices may be assigned to the same original member. Full AC supplies all selections used in the subordinate-coordinate-ball and shrinking constructions, as well as the countable bump selections. In boundary charts the nested bumps are restricted from Euclidean balls to half-balls; the compact-annulus exhaustion proof of local finiteness uses only relative openness and compact closures and is unchanged by this restriction. Thus the boundary partition assertion is used under the same stronger assumption. [F2, A1, given]

2.1 On $U_i$, let $\nabla^{(i)}$ be the connection with zero matrix in its chosen frame. For a global section $s$, form $\rho_i\nabla^{(i)}(s|_{U_i})$ on $U_i$ and extend it by zero to $M$. This is a smooth section of $\operatorname{Hom}(TM,E)$: every point outside its closed support has a neighbourhood on which it is zero, and that support lies in $U_i$. The supports of these extended sections form a locally finite family because each is contained in $\operatorname{supp}\rho_i$. [F1, step 1.1, construct]

3.1 Define $\nabla s=\sum_i\rho_i\nabla^{(i)}s$, with the extensions in step 2.1 understood. This is smooth by local finiteness. Real linearity follows termwise, and on a neighbourhood where the sum is finite,
$\nabla(fs)=\sum_i\rho_i(df\otimes s+f\nabla^{(i)}s)=(\sum_i\rho_i)df\otimes s+f\nabla s=df\otimes s+f\nabla s$.
The weights multiply the local operators; they are not arguments differentiated by those operators. This proves the connection law. [F3, step 1.1, step 2.1]

4.1 If $M$ is empty the zero operator is the required connection. Rank-zero bundles also have the unique zero operator, and a zero-dimensional base has no nonzero one-forms. For a supplied global frame one may simply use its zero-matrix connection without any partition or AC; rank one uses the same construction as all finite ranks. The theorem's full-AC assumption is confined to existence by the chosen cover route; statements starting with an already supplied connection do not use that route. [F1, step 3.1] ∎
