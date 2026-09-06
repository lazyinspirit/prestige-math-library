---
id: thm-submodules-of-free-modules-over-a-pid-are-free
title: "A submodule of an arbitrary-rank free module over a PID is free"
kind: theorem
status: published
origin: pipeline
deps: ["def-principal-ideal-domain", "cor-every-vector-space-has-a-basis", "thm-free-modules-are-projective-with-choice-boundary"]
proof_strategy: direct
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

Assume the Axiom of Choice. If $R$ is a PID, $F$ is a free $R$-module, and
$N\subseteq F$, then $N$ is free (with no finite-rank assumption on $F$).

## Proof

**Given:** a basis of $F$, a submodule $N\subseteq F$, and the Axiom of
Choice. By the well-ordering theorem, index the basis as
$(e_\alpha)_{\alpha<\kappa}$.

1.1 Put $F_\alpha=\langle e_\beta:\beta<\alpha\rangle$ and $N_\alpha=N\cap F_\alpha$. The image of $N_{\alpha+1}$ in $F_{\alpha+1}/F_\alpha\cong R$ is an ideal $I_\alpha$ of $R$, hence is either zero or free of rank one. Thus $0\to N_\alpha\to N_{\alpha+1}\to I_\alpha\to0$ splits. [given, algebra]

2.1 At each successor with $I_\alpha\ne0$, choose a generator and a lift $x_\alpha\in N_{\alpha+1}$; the splitting gives $N_{\alpha+1}=N_\alpha\oplus Rx_\alpha$. At a limit $\lambda$, every element has finite support, so $N_\lambda=\bigcup_{\alpha<\lambda}N_\alpha$ and the nested union of the earlier bases is a basis. Transfinite induction through the terminal stage $\kappa$ therefore gives a basis of $N_\kappa=N$. For $\kappa=0$, this is the empty basis of $N=0$. [step 1.1, construct] ∎
