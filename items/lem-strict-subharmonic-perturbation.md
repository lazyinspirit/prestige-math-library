---
id: lem-strict-subharmonic-perturbation
kind: lemma
title: "Strict subharmonic perturbation"
status: draft
origin: pipeline
deps: [def-subharmonic-and-superharmonic-functions-in-rn]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Hunter, Notes on Partial Differential Equations"
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: "§2.3.1 proof of Theorem 2.17, pp.27–28"
---

## Statement

Let $n\ge2$, $\Omega\subseteq\mathbb R^n$ be open, and $u\in C^2(\Omega)$ be subharmonic. For $\varepsilon>0$, put $u_\varepsilon(x)=u(x)+\varepsilon|x|^2$. Then $\Delta u_\varepsilon\ge2n\varepsilon>0$, and $u_\varepsilon$ has no interior local maximum.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] Subharmonicity of a real $C^2$ function means $\Delta u\ge0$. ([[def-subharmonic-and-superharmonic-functions-in-rn]]).

## Proof

**Proof technique:** direct.

1.1 $\partial_{ii}|x|^2=2$ for each of the $n$ coordinates. Therefore $\Delta u_\varepsilon=\Delta u+2n\varepsilon\ge2n\varepsilon>0$. [F1, given, algebra]

2.1 At an interior local maximum $q$, each restriction $t\mapsto u_\varepsilon(q+te_i)$ would have second derivative at zero at most zero. Summing would give $\Delta u_\varepsilon(q)\le0$, incompatible with the strict positive value already obtained. Hence no such maximum exists. [step 1.1, algebra] ∎
