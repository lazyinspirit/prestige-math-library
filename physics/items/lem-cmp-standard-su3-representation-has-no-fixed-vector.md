---
id: lem-cmp-standard-su3-representation-has-no-fixed-vector
kind: lemma
title: "The standard SU(3) representation has no nonzero fixed vector"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 0
deps: []
dependency_roles: {}
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Sophie Morel, Representation Theory, notes for Topics in Representation Theory (Princeton University, 2016 course; March 26, 2019)"
      url: "https://web.math.princeton.edu/~smorel/rep_theory_notes.pdf"
      locator: "Chapter VI, §VI.9.2, Definition VI.9.2.1 and Proposition VI.9.2.2, PDF pp. 156–157; standard SU(n) representation and irreducibility for d=1."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $SU(3)=\{U\in M_3(\mathbb C):U^*U=I,\det U=1\}$ act on $\mathbb C^3$ by matrix multiplication. If $v\in\mathbb C^3$ satisfies $Uv=v$ for every $U\in SU(3)$, then $v=0$.

## Facts & Assumptions

**Given:** The standard matrix action of the displayed group $SU(3)$ on $\mathbb C^3$.

## Proof

**Proof technique:** direct coordinate check.

**Given:** A vector $v=(v_1,v_2,v_3)$ fixed by every matrix in $SU(3)$.

1.1 For every real $t$, $D_t=\operatorname{diag}(e^{it},e^{-it},1)$ is unitary with determinant one. From $D_tv=v$ for all $t$, taking any $t$ with $e^{it}\ne1$ gives $v_1=v_2=0$. [given, algebra]

2.1 For every real $s$, $E_s=\operatorname{diag}(1,e^{is},e^{-is})$ also lies in $SU(3)$. Since $v_1=v_2=0$ and $E_sv=v$ for all $s$, choosing $e^{-is}\ne1$ gives $v_3=0$. Hence $v=0$. [given, step 1.1, algebra] ∎
