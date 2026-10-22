---
id: ex-tgrx-count-is-not-area-law
kind: example
title: Fusion count alone leaves an entropy-to-scalar ratio undetermined
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 4
deps:
  - prop-tgrx-fusion-count-entropy
  - thm-natural-logarithm-laws
dependency_roles:
  prop-tgrx-fusion-count-entropy: mathematical-premise
  thm-natural-logarithm-laws: mathematical-premise
justified_by: []
aliases: []
forward_refs: []
physical_scope: null
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Daniel Harlow, The Ryu-Takayanagi Formula from Quantum Error Correction, complete paper, Appendix A.7.2-A.7.3
      url: https://arxiv.org/pdf/1607.03901
      locator: Complete 62-page paper; Appendix A.7.2-A.7.3, finite-sector entropy and the boundary between finite algebraic identities and geometric interpretation.
    - title: Robert M. Wald, The Thermodynamics of Black Holes, Living Reviews in Relativity 4 (2001), 6
      url: https://arxiv.org/pdf/gr-qc/9912119
      locator: Complete review; Sections 2 and 5, area-entropy identification and the unresolved microscopic degrees of freedom question, used only for context.
---

## Example

For the two-label matrix $N=\begin{pmatrix}0&1\\1&1\end{pmatrix}$ in the finite fusion count model, $D_4=2$. Choose a positive scalar $a$ independently of $N$ and set $A_4:=4a$. The ratio between the model entropy $\log D_4$ and this separately assigned scalar is $\log2/(4a)$, and it changes when $a$ is replaced by $2a$ although $N$ and $D_4$ are unchanged. Thus the finite count alone does not determine a proportionality coefficient between its entropy and an independently assigned area-like scalar. The scalar $A_4$ is formal data in this mathematical example; no geometrical area, physical entropy, or gravitational law is asserted.

## Example references

[[prop-tgrx-fusion-count-entropy]]

[[thm-natural-logarithm-laws]]

[Daniel Harlow, The Ryu-Takayanagi Formula from Quantum Error Correction](https://arxiv.org/pdf/1607.03901)

[Robert M. Wald, The Thermodynamics of Black Holes](https://arxiv.org/pdf/gr-qc/9912119)

## Facts & Assumptions

**Given:** The two-label matrix and return-count recursion, an independently assigned scalar $a>0$, and $A_4=4a$.

[F1] [[prop-tgrx-fusion-count-entropy]]: for the two-label matrix, $D_0=1$, $D_1=0$, and $D_{n+2}=D_{n+1}+D_n$; when $D_n>0$, the uniform-state entropy is $\log D_n$.

[F2] [[thm-natural-logarithm-laws]]: $\log$ is strictly increasing and $\log1=0$.

[A1] The scalar assignment $a>0$ is independent of the transition matrix $N$ and its counts.

## Verification

1.1 Applying the recurrence in [F1] gives $D_2=1$, $D_3=1$, and $D_4=2$. Since $D_4>0$, the corresponding finite-state entropy is $s_4=\log2$. [F1, given, algebra]

2.1 With the assignment $a$, the ratio is $c(a):=s_4/A_4=\log2/(4a)$. Replacing $a$ by $2a$ leaves $N$, $D_4$, and $s_4$ fixed while giving $c(2a)=\log2/(8a)=c(a)/2$. [A1, step 1.1, algebra]

3.1 Because $2>1$, [F2] gives $\log2>\log1=0$; since $a>0$, $c(a)>0$ and therefore $c(2a)\neq c(a)$. The count model consequently does not fix this coefficient. [F2, step 2.1, algebra] ∎
