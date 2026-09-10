---
id: thm-analytic-sets-are-souslin-operations-on-closed-sets
kind: theorem
title: "Closed Souslin schemes characterize analytic sets"
status: published
origin: pipeline
deps: ["def-souslin-operation-on-set-schemes", "thm-analytic-closed-projection-and-continuous-image-equivalence", "def-axiom-of-choice"]
justified_by: []
forward_refs: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Definition 4.19 and Exercise 4.20, printed p39; complete local exercise proof with closures"
      url: "https://homepages.math.uic.edu/~marker/math512/dst.pdf"
---
## Statement

In ZFC, $A$ in a Polish space $X$ is analytic if and only if $A=\mathsf S(F)$ for a scheme of closed subsets of $X$. Such a scheme may be chosen decreasing along extensions.

## Facts & Assumptions

[F1] [[def-souslin-operation-on-set-schemes]] defines the operation including the root and its decreasing normalization.

[F2] [[thm-analytic-closed-projection-and-continuous-image-equivalence]] gives the closed-projection and Baire-image characterizations.

[A1] Assume [[def-axiom-of-choice]].

## Proof

**Given:** The Polish space and ZFC assumptions.

1.1 For a closed scheme $F$ put $C=\{(x,f):\forall n\ x\in F_{f\upharpoonright n}\}$. If $(x,f)\notin C$, some n has $x\notin F_{f\upharpoonright n}$. The open product $(X\setminus F_{f\upharpoonright n})\times N_{f\upharpoonright n}$ misses $C$. This remains true for n=0. Hence $C$ is closed and its projection, exactly $\mathsf S(F)$ by F1, is analytic by F2 and A1. [F1, F2, A1]

2.1 Conversely empty $A$ uses the all-empty closed scheme. If $A$ is nonempty analytic, F2 and A1 give continuous $g:\mathcal N\to X$ with image $A$. Set $F_s=\overline{g[N_s]}$, closed and decreasing. For each $f$, $g(f)$ belongs to all $F_{f\upharpoonright n}$. If $x\ne g(f)$, put $r=d(x,g(f))/3>0$. Continuity gives n with $g[N_{f\upharpoonright n}]\subseteq B(g(f),r)$; its closure lies in the closed radius-r ball, which excludes x. Thus $\bigcap_n F_{f\upharpoonright n}=\{g(f)\}$. Taking the branch union gives exactly $A$. The closures, rather than the raw images, supply closed sets without changing the branch intersections. QED. [F1, F2, A1]
