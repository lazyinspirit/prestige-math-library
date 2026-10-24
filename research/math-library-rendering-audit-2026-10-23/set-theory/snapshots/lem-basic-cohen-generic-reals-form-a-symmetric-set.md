---
id: lem-basic-cohen-generic-reals-form-a-symmetric-set
kind: lemma
title: The Cohen reals form a symmetric set but their enumeration is not symmetric
status: published
origin: pipeline
deps: [def-basic-cohen-symmetric-system, lem-symmetry-lemma-for-forcing-automorphisms]
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
    - {title: "Karagila, Forcing & Symmetric Extensions, Propositions 10.22–10.24", url: "https://karagila.org/files/Forcing-2023.pdf"}
---

## Statement

The coordinate action is $\pi\dot a_n=\dot a_{\pi n}$. Each $a_n$ has support $\{n\}$, $A$ has empty support, and $A$ is forced infinite with distinct members. The canonical enumeration $n\mapsto a_n$ has no finite support, and no enumeration of $A$ belongs to the symmetric model.

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[def-basic-cohen-symmetric-system]] gives $\pi\dot a_n=\dot a_{\pi n}$ and $\pi\dot A=\dot A$.

[F2] [[lem-symmetry-lemma-for-forcing-automorphisms]] transports forced assertions.

## Proof

1.1 F1 shows that $\{n\}$ supports $\dot a_n$ and $\varnothing$ supports $\dot A$; their subnames are checks, so both are HS. For $n\ne m$, below any condition choose a fresh bit coordinate $k$ and set opposite bits at $(n,k),(m,k)$. Hence the set forcing $\dot a_n\ne\dot a_m$ is dense. Every finite collection is therefore forced to have its displayed size, so $A$ is infinite. [F1]

1.2 Let $\dot e$ be the canonical graph $n\mapsto\dot a_n$. Given finite $E$, choose $n\notin E$ and $m\notin E\cup\{n\}$. Their transposition fixes $E$ but sends the graph value at $n$ from $\dot a_n$ to $\dot a_m$, so it does not fix $\dot e$. Thus no finite $E$ supports that name. [F1, F2]

1.3 Now let $p\Vdash\dot f:\check\omega\to\dot A$ be onto and let the finite set $E$ support $\dot f$ and contain the first-coordinate support of $p$. Choose $n\notin E$. Since $p$ forces surjectivity, some $q\le p$ and $k\in\omega$ satisfy $q\Vdash\dot f(\check k)=\dot a_n$. Choose $m$ outside $E\cup\{n\}$ and outside the first-coordinate support of $q$, and let $\pi$ swap $n,m$. Then $\pi p=p$, $\pi\dot f=\dot f$, and F2 gives $$\pi q\Vdash\dot f(\check k)=\dot a_m.$$ [F1, F2]

2.1 Because the $m$-coordinate is absent from $q$, $q$ and $\pi q$ agree on their common domain and have a common extension. That extension forces $\dot a_n=\dot a_m$, contrary to step 1.1. Therefore no HS name can enumerate $A$. [F1, F2, step 1.1, step 1.3] ∎