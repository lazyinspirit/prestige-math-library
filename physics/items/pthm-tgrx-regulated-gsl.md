---
id: pthm-tgrx-regulated-gsl
kind: physics-theorem
title: Regulated generalized entropy monotonicity under explicit balance
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: physics
library: physics
dependency_level: 3
deps:
  - post-tgrx-regulated-horizon-balance
  - prop-tgrx-finite-modular-balance
dependency_roles:
  post-tgrx-regulated-horizon-balance: physical-assumption
  prop-tgrx-finite-modular-balance: mathematical-premise
justified_by: []
aliases: []
physical_scope: >
  A conditional deduction for the finite-dimensional nested-regulator model
  with faithful reference states and the adopted modular-geometric balance.
  The finite-regulator inequality is pointwise in the named data. A limiting
  inequality is concluded only when both endpoint entropy sequences have
  finite limits in the same fixed scheme. The result does not assert limit
  existence, scheme independence, continuum quantum field theory, physical
  evolution, semiclassical backreaction, or an unrestricted generalized
  second law.
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
sources:
  references:
    - title: "Aron C. Wall, A proof of the generalized second law for rapidly changing fields and arbitrary horizon slices, Physical Review D 85, 104049 (2012), arXiv:1105.3445v6"
      url: https://arxiv.org/pdf/1105.3445
      locator: "Complete article; §2.5, equations (38)–(43), and §2.8, equation (50). Wall's physical proof has separate horizon-algebra, semiclassical, and renormalization hypotheses and is not the proof of this finite conditional result."
    - title: "H. S. Reall, Part III Black Holes, University of Cambridge lecture notes (2024)"
      url: https://www.damtp.cam.ac.uk/user/hsr1000/black_holes_lectures_2024.pdf
      locator: "Complete 149-page PDF; §§10.8–10.9, printed pp. 146–147, equation (10.113), for the generalized-entropy summary and its backreaction qualification. This summary supplies context only."
    - title: "John Watrous, The Theory of Quantum Information, complete author-hosted book manuscript"
      url: https://jhwatrous.github.io/TQI.pdf
      locator: "Complete 598-page manuscript; §5.2.3, Theorem 5.35 and its proof, for finite-dimensional partial-trace data processing, used through prop-tgrx-finite-modular-balance."
---

## Statement

For every finite-regulator data set satisfying the nested balance postulate, set $D_i:=D(\rho_i\|\sigma_i)$ for $i=1,2$. Then

$$S_{\mathrm{gen},2}-S_{\mathrm{gen},1}=k_B\bigl[D(\rho_1\|\sigma_1)-D(\rho_2\|\sigma_2)\bigr]\ge0.$$

If a sequence of such data sets satisfies the postulate term by term under one fixed scheme, and both endpoint sequences converge to finite real values $S_{\mathrm{gen},i,n}\to L_i$, then $L_2\ge L_1$.

## Statement references

[[post-tgrx-regulated-horizon-balance]]

[[prop-tgrx-finite-modular-balance]]

[Aron C. Wall, A proof of the generalized second law for rapidly changing fields and arbitrary horizon slices](https://arxiv.org/pdf/1105.3445)

[H. S. Reall, Part III Black Holes](https://www.damtp.cam.ac.uk/user/hsr1000/black_holes_lectures_2024.pdf)

[John Watrous, The Theory of Quantum Information](https://jhwatrous.github.io/TQI.pdf)

## Facts & Assumptions

**Given:** At one named finite regulator, the ordered spaces, density operators, faithful reference operators, partial-trace consistency, geometric balance, and entropy values from the Postulate. For the limit clause, a sequence of such data sets under one fixed scheme with finite real limits at both cuts.

[F1] [[prop-tgrx-finite-modular-balance]]: for finite-dimensional density operators $\rho,\sigma$ with $\sigma$ positive definite, $K_\sigma=-\log\sigma$ and $s(\tau)=-\operatorname{tr}(\tau\log\tau)$ in nats, $D(\rho\|\sigma)=\operatorname{tr}((\rho-\sigma)K_\sigma)-(s(\rho)-s(\sigma))$. For a nonzero finite tensor factorization, partial tracing both density operators over one factor cannot increase $D$.

[A1] [[post-tgrx-regulated-horizon-balance]]: $\rho_2=\operatorname{Tr}_E\rho_1$, $\sigma_2=\operatorname{Tr}_E\sigma_1$, $a_2-a_1=\Delta_1-\Delta_2$, and $S_{\mathrm{gen},i}=k_B[a_i+s(\rho_i)-s(\sigma_i)]$, where $\Delta_i=\operatorname{tr}((\rho_i-\sigma_i)(-\log\sigma_i))$ and $k_B>0$.

## Proof

1.1 For $i=1,2$, put $q_i:=s(\rho_i)-s(\sigma_i)$ and $\Delta_i:=\operatorname{tr}((\rho_i-\sigma_i)(-\log\sigma_i))$. Each $\sigma_i$ is positive definite, so the faithful-reference hypothesis in [F1] is met and the finite identity gives $D_i=\Delta_i-q_i$. [given, F1, A1, algebra]

2.1 By [A1], $a_2-a_1=\Delta_1-\Delta_2$ and $S_{\mathrm{gen},i}=k_B(a_i+q_i)$. Substitute the two identities from step 1.1 and expand: $S_{\mathrm{gen},2}-S_{\mathrm{gen},1}=k_B[(\Delta_1-\Delta_2)+(q_2-q_1)]=k_B[(D_1+q_1)-(D_2+q_2)+q_2-q_1]=k_B(D_1-D_2)$. This is an exact finite-dimensional equality. [A1, step 1.1, algebra]

3.1 The factorization and consistency in [A1] identify $(\rho_2,\sigma_2)$ as the partial traces over $H_E$ of $(\rho_1,\sigma_1)$. Apply the data-processing inequality in [F1] to obtain $D_2\le D_1$; multiplication by $k_B>0$ and step 2.1 give $S_{\mathrm{gen},2}-S_{\mathrm{gen},1}\ge0$. [given, F1, A1, step 2.1, algebra]

4.1 For each regulator index $n$, the finite-regulator argument in step 3.1 gives $S_{\mathrm{gen},2,n}-S_{\mathrm{gen},1,n}\ge0$. [A1, step 3.1]

5.1 Let $\varepsilon>0$. The assumed finite convergence supplies $N$ such that for all $n\ge N$, $|S_{\mathrm{gen},2,n}-L_2|<\varepsilon/2$ and $|S_{\mathrm{gen},1,n}-L_1|<\varepsilon/2$. For any such $n$, step 4.1 and algebra give $L_2-L_1=(L_2-S_{\mathrm{gen},2,n})+(S_{\mathrm{gen},2,n}-S_{\mathrm{gen},1,n})+(S_{\mathrm{gen},1,n}-L_1)>-\varepsilon$. If $L_2-L_1<0$, choosing $\varepsilon=-(L_2-L_1)$ contradicts this strict inequality. Thus $L_2-L_1\ge0$. [given, step 4.1, algebra] ∎

## Remarks

The balance identity is an adopted premise. The proof uses finite-dimensional partial-trace data processing and real-sequence convergence only; it does not establish that the balance premise holds in a continuum horizon model or that either limit exists.
