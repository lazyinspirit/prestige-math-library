---
id: cex-critical-level-sugawara-formula-undefined
kind: counterexample
title: The normalized Sugawara formula is undefined at critical level
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-sugawara-modes
  - def-dual-coxeter-number-for-normalized-form
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: David Ben-Zvi and Edward Frenkel, Geometric Realization of the Segal–Sugawara Construction, §3.4.1
      url: https://math.mit.edu/juvitop/pastseminars/notes_2019_Fall/BenZviFrenkel.pdf
---

## Statement refuted

For $\widehat{\mathfrak{sl}}_2$, the normalized Sugawara formula defines operators at the critical level $k=-2$.

## Facts & Assumptions

**Given:** $\mathfrak{sl}_2$ with basis $e,f,h$, brackets $[h,e]=2e$, $[h,f]=-2f$, $[e,f]=h$, and normalized form $B(h,h)=2$, $B(e,f)=B(f,e)=1$.

[F1] [[def-dual-coxeter-number-for-normalized-form]]: $h^\vee$ is half the adjoint Casimir scalar.

[F2] [[def-dual-coxeter-number-for-normalized-form]]: the adjoint Casimir acts as the scalar $\gamma_B I$.

[F3] [[def-sugawara-modes]]: the normalized mode formula divides by $2(k+h^\vee)$ and is defined only when this scalar is nonzero.

## Counterexample

1.1 The $B$-dual basis to $(h,e,f)$ is $(h/2,f,e)$, so $\Omega_B=h^2/2+ef+fe$. In the adjoint representation, $\operatorname{ad}(\Omega_B)e=\frac12[h,[h,e]]+[e,[f,e]]+[f,[e,e]]=2e+2e+0=4e$. By [F2] the operator is the scalar $\gamma_B I$, so its eigenvalue on $e$ is $\gamma_B=4$; [F1] then gives $h^\vee=\gamma_B/2=2$. [given, F1, F2, algebra]

2.1 At $k=-2$, the denominator in [F3] is $2(k+h^\vee)=2(-2+2)=0$. Division by zero is undefined in $\mathbb C$, so the displayed normalized operator formula does not define $L_m$ at this level. This refutes the statement; it does not assert that every possible renormalized critical-level construction is impossible. [F3, step 1.1, algebra] ∎
