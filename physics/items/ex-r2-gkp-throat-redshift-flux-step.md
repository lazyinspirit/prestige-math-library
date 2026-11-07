---
id: ex-r2-gkp-throat-redshift-flux-step
kind: example
title: "A positive flux step lowers the leading GKP redshift factor"
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 15
domain: physics
library: physics
deps:
  - pthm-r2-gkp-conifold-flux-warp-hierarchy
  - def-axiom-of-choice
dependency_roles:
  pthm-r2-gkp-conifold-flux-warp-hierarchy: physical-result
  def-axiom-of-choice: mathematical-premise
physical_scope: "An algebraic comparison of the leading exponential factor in the conditional GKP throat result, at fixed positive g_s and M. It does not construct compact vacua or show that a flux step satisfies a fixed D3 tadpole."
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pending
sources:
  references:
    - title: "Steven B. Giddings, Shamit Kachru, and Joseph Polchinski, Hierarchies from Fluxes in String Compactifications, hep-th/0105097v2"
      url: "https://arxiv.org/pdf/hep-th/0105097v2"
      locator: "§3 equations (3.12)–(3.19), PDF pp. 17–19; the leading exponential is a model deduction, not an observation."
    - title: "Michele Cicoli et al., String Cosmology: from the Early Universe to Today, arXiv:2303.04819v2"
      url: "https://arxiv.org/pdf/2303.04819v2"
      locator: "§3.4 equations (114)–(118a), PDF pp. 34–37; independent review of the leading conifold throat redshift."
---

## Statement

Let $g_s>0$, $M>0$, $K\in\mathbb Z$, and define the leading exponential factor
$
\mathcal E(K)=\exp\!\left(-\frac{2\pi K}{3g_sM}\right).
$
For every positive integer $\Delta K$,
$
\frac{\mathcal E(K+\Delta K)}{\mathcal E(K)}
=\exp\!\left(-\frac{2\pi\Delta K}{3g_sM}\right)\in(0,1).
$
Thus, at fixed $g_s,M$, the leading exponential factor decreases when $K$ is increased. This compares only the leading factor in [[pthm-r2-gkp-conifold-flux-warp-hierarchy]]; it asserts neither that both flux choices have compact realizations nor that their matching prefactors agree.

## Facts & Assumptions

**Given:** $g_s>0$, $M>0$, $K\in\mathbb Z$, $\Delta K\in\mathbb Z_{>0}$, and the leading factor defined in the Statement.

[F1] [[pthm-r2-gkp-conifold-flux-warp-hierarchy]]: in the stated conditional regime, the leading redshift exponential is $\exp[-2\pi K/(3g_sM)]$, subject to compact tadpole, throat-fit, source/core and matching hypotheses.

[F2] [[def-axiom-of-choice]]: the theorem's conifold-period supplier uses full AC transitively; this example inherits that mathematical foundation through [F1].

## Proof

**Given:** [F1]–[F2] and the parameters above.

1.1 By the definition of $\mathcal E$ and the exponential addition law,
$
\frac{\mathcal E(K+\Delta K)}{\mathcal E(K)}
=\exp\!\left(-\frac{2\pi(K+\Delta K)}{3g_sM}
+\frac{2\pi K}{3g_sM}\right)
=\exp\!\left(-\frac{2\pi\Delta K}{3g_sM}\right).
$
[given, F1, F2, algebra]

2.1 Since $2\pi\Delta K/(3g_sM)>0$, its negative is strictly negative, and the real exponential of a strictly negative number lies strictly between zero and one. The ratio is therefore in $(0,1)$. This comparison concerns the displayed leading factor only; each compact flux assignment must independently meet [F1]'s hypotheses. [given, F1, step 1.1, algebra] ∎

## Remarks

The calculation does not infer a sequence of compact solutions. At fixed topology and localized-source budget, each proposed member must satisfy the global D3 tadpole, and the full redshift can carry matching factors not represented by $\mathcal E(K)$.
