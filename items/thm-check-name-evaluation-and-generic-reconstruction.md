---
id: "thm-check-name-evaluation-and-generic-reconstruction"
kind: "theorem"
title: "Check-name evaluation and reconstruction of G"
deps: ["def-check-names-and-the-canonical-generic-name"]
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Karagila Exercises 2.6–2.7 and Proposition 2.9 pp6–7; Marks Lemma 24.3
        p98
      url: https://karagila.org/files/Forcing-2023.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

In ZF, for every nonempty $G\subseteq P$, $\operatorname{val}_G(\check x)=x$ and $\operatorname{val}_G(\dot G)=G$. Hence for a transitive ZF model M containing P, $M\subseteq M[G]$ and $G\in M[G]$. The inclusion is not asserted to be elementary.

## Facts & Assumptions

**Given:** ZF; G nonempty. Direct valuation calculations establish check recovery and dot G recovery, then ground membership of the names gives M subset M[G] and G in M[G].

[F1] [[def-check-names-and-the-canonical-generic-name]]: Check names have every condition as a coefficient; dot G uses the name of p with coefficient p, and these names belong to the ground model.

## Proof

1.1 By membership induction suppose the assertion holds for each $y\in x$. The valuation equation for check x gives exactly $\{\operatorname{val}_G(\check y):y\in x,\ \exists p\in G\}=\{y:y\in x\}=x$. The nonemptiness of G supplies the existential coefficient for every y. For x empty both sides are empty. [F1, given]

2.1 Apply step 1.1 to every p in P. The valuation equation gives $\operatorname{val}_G(\dot G)=\{\operatorname{val}_G(\check p):p\in G\}=G$. For each $x\in M$, F1 puts check x in M, so step 1.1 puts x in M[G]. F1 also puts dot G in M, so its value G lies in M[G]. No genericity or directedness was needed for these identities. [F1, step 1.1] ∎
