---
id: ex-basic-cohen-orbit-name-without-enumeration
kind: example
title: An orbit set can be symmetric when its enumeration is not
status: published
origin: pipeline
deps: [lem-basic-cohen-generic-reals-form-a-symmetric-set]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Karagila, Forcing & Symmetric Extensions, Propositions 10.22–10.24, p. 50", url: "https://karagila.org/files/Forcing-2023.pdf"}
---

## Statement

In the basic Cohen system, $A=\{a_n:n\in\omega\}$ has empty support, although the graph $e=\{\langle n,a_n\rangle:n\in\omega\}$ is moved by a transposition outside every finite support. More generally, no enumeration of $A$ belongs to the symmetric model, as the supplier's all-enumerations argument proves.

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[lem-basic-cohen-generic-reals-form-a-symmetric-set]] gives $\pi a_n=a_{\pi(n)}$, proves that the $a_n$ are pairwise distinct, and computes the supports of $A$ and its canonical enumeration.

## Proof

1.1 For every finite permutation $\pi$, $$\pi A=\{\pi a_n:n\in\omega\} =\{a_{\pi(n)}:n\in\omega\}=A.$$ Thus the whole automorphism group stabilizes $A$, so $\varnothing$ is a support. [F1]

1.2 Let $E\subseteq\omega$ be finite. Choose distinct $n,m\notin E$ and let $\pi=(n\ m)$. Then $\pi\in\operatorname{fix}(E)$, but the pair $\langle n,a_n\rangle$ is sent to $\langle n,a_m\rangle$ in the action on the graph's value coordinate after the ground ordinal $n$ is fixed. Since $a_n\ne a_m$, $\pi e\ne e$. Hence no finite $E$ supports $e$. [F1]

2.1 The calculation separates an invariant unordered range from a non-symmetric ordering of that range. It does not claim merely that this particular graph is absent: F1 separately supplies the support argument excluding every enumeration. No Choice is used. [F1, step 1.1, step 1.2] ∎
