---
id: ex-strong-ltwo-convergence-preserves-a-normalisation-constraint
kind: example
title: "Strong $L^2$ convergence preserves an $L^2$-normalisation constraint"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
deps: [cor-weak-h-one-convergence-plus-compactness-gives-strong-ltwo-convergence, cor-of-reverse-triangle, def-hk-and-hk-zero-notation, def-weak-convergence-of-nets-and-sequences, def-l-p-space-as-a-quotient-by-null-functions, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, complete graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "Corollary 3.28(ii), printed p. 77, and Exercise 3.26, printed p. 79, supply the compactness and weak-convergence context; normalization preservation is derived locally from the norm triangle inequality. Exercise 3.23, printed p. 78, concerns convergence to zero, not unit normalization."
---

## Example

Assume the Axiom of Choice. Let $n\ge1$, let $\Omega\subseteq\mathbb R^n$ be a
bounded extension domain and let $u_j\rightharpoonup u$ weakly in $H^1(\Omega)$
with $\sup_j\|u_j\|_{H^1(\Omega)}<\infty$ and
$\|u_j\|_{L^2(\Omega)}=1$ for all $j$. Then $u_j\to u$ in $L^2(\Omega)$ and
$\|u\|_{L^2(\Omega)}=1$. Thus an $L^2$-normalisation constraint passes to the
weak limit, which is exactly the step used when a constrained minimisation or
eigenvalue problem is solved by taking a weakly convergent minimising sequence
and then upgrading to strong convergence.

## Facts & Assumptions

**Given:** the Axiom of Choice, a bounded extension domain $\Omega\subseteq\mathbb R^n$, a sequence $u_j\rightharpoonup u$ weakly in $H^1(\Omega)$ with $\sup_j\|u_j\|_{H^1(\Omega)}<\infty$ and $\|u_j\|_{L^2(\Omega)}=1$.

[F1] *Strong convergence upgrades the weak limit.* $u_j\to u$ in $L^2(\Omega)$. ([[cor-weak-h-one-convergence-plus-compactness-gives-strong-ltwo-convergence]], [[def-weak-convergence-of-nets-and-sequences]], [[def-hk-and-hk-zero-notation]])

[F2] *The reverse triangle inequality.* $\bigl|\|g\|-\|h\|\bigr|\le\|g-h\|$ for every norm, in particular for the $L^2$ norm. Indeed $\|g\|\le\|g-h\|+\|h\|$ and the exchanged inequality follow from the norm triangle inequality. ([[def-l-p-space-as-a-quotient-by-null-functions]])

## Verification

**Proof technique:** direct.

1.1 By [F1] the sequence converges strongly in $L^2(\Omega)$; by [F2] applied to the $L^2$ norm, $\bigl|\|u_j\|_{L^2}-\|u\|_{L^2}\bigr|\le\|u_j-u\|_{L^2}\to0$. [F1, F2, given]

2.1 Since $\|u_j\|_{L^2}=1$ for every $j$, step 1.1 forces $\|u\|_{L^2}=1$; hence the weak limit of a normalised sequence is again normalised and lies in the constraint set $\{v:\|v\|_{L^2}=1\}$, so it is an admissible candidate for a constrained minimiser. No weak lower semicontinuity of any energy is asserted here; only the passage of the normalisation to the limit is. The Axiom of Choice is inherited through [F1]. [F1, F2, step 1.1] ∎ 
