---
id: lem-one-transformation-preserves-satisfiability
kind: lemma
title: "One Dinur transformation preserves perfect satisfiability"
status: draft
origin: pipeline
deps:
  - def-dinur-pcp-transformation
  - thm-gap-amplification-step
  - thm-alphabet-reduction-step
  - def-constraint-graph-and-labeling-value
proof_strategy: cases
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Irit Dinur, The PCP Theorem by Gap Amplification, §1.3, Theorems 1.2 and 1.5 (completeness direction), printed pp. 5–8"
      url: "https://www.cs.umd.edu/users/gasarch/TOPICS/pcp/dinur.pdf"
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach, §18.5.1 Lemma 18.29 (completeness), printed pp. 371–373"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
---

## Statement

Let $\Sigma_\star$ be the fixed $66$-symbol alphabet of
[[thm-alphabet-reduction-step]] and let $T_t$ be the fixed-alphabet
transformation of [[def-dinur-pcp-transformation]], defined for every
integer $t\ge t_0$ and mapping finite $\Sigma_\star$-graphs to finite
$\Sigma_\star$-graphs. For every such $t$ and every finite binary constraint
graph $G$ over $\Sigma_\star$,
$$\operatorname{val}(G)=1\implies\operatorname{val}(T_t(G))=1,$$
including the case in which $G$ is edgeless.

## Facts & Assumptions

**Given:** Fix an integer $t\ge t_0$ in the transformation domain and a finite binary constraint graph $G$ over $\Sigma_\star$ with $\operatorname{val}(G)=1$.

[F1] $T_t(G)=A_{\Sigma_t}(R_t(G))$ is a finite binary constraint graph over $\Sigma_\star$, and $T_t$ maps an edgeless input to an edgeless output. ([[def-dinur-pcp-transformation]])

[F2] The gap-amplification step has perfect completeness: for every integer $t\ge t_0$, $\operatorname{val}(G)=1$ implies $\operatorname{val}(R_t(G))=1$, and edgeless inputs are mapped to edgeless outputs. ([[thm-gap-amplification-step]])

[F3] For every fixed alphabet $\Sigma$ with $\lvert\Sigma\rvert\ge2$, $\operatorname{val}(G)=1$ if and only if $\operatorname{val}(A_\Sigma(G))=1$; in particular the alphabet reduction is defined at the nondegenerate intermediate alphabet $\Sigma_t$ and preserves the value-one property in the forward direction. ([[thm-alphabet-reduction-step]])

[F4] An edgeless graph has value one and unsatisfaction zero for every labeling, so the premise $\operatorname{val}(G)=1$ holds in the edgeless case. ([[def-constraint-graph-and-labeling-value]])

## Proof

**Given:** Use the fixed $t$ and the graph $G$ with $\operatorname{val}(G)=1$.

1.1 Assume first that $E(G)=\varnothing$. Then $\operatorname{val}(G)=1$ by [F4]. The completeness clause of [F2] applied to this input gives $\operatorname{val}(R_t(G))=1$, and $T_t(G)$ is edgeless by [F1] and [F2]. Applying the forward value-one direction of [F3] at $\Sigma=\Sigma_t$ to the graph $R_t(G)$ therefore gives $\operatorname{val}(T_t(G))=\operatorname{val}(A_{\Sigma_t}(R_t(G)))=1$. [F1, F2, F3, F4, given, assume-case edgeless]

1.2 Assume now that $E(G)\ne\varnothing$. The identity $T_t(G)=A_{\Sigma_t}(R_t(G))$ of [F1] rewrites the goal as $\operatorname{val}(A_{\Sigma_t}(R_t(G)))=1$. The intermediate graph $R_t(G)$ is a finite binary constraint graph over the alphabet $\Sigma_t$ supplied by [F2] and [F1]. [F1, F2, given, assume-case nonempty]

1.3 The completeness clause of [F2] applies to the input $G$ because $\operatorname{val}(G)=1$, so $\operatorname{val}(R_t(G))=1$. [F2, given, algebra]

2.1 Apply the forward direction of [F3] with the fixed alphabet $\Sigma_t$, whose size is at least two, to the graph $R_t(G)$. Since $\operatorname{val}(R_t(G))=1$, it gives $\operatorname{val}(A_{\Sigma_t}(R_t(G)))=1$, that is, $\operatorname{val}(T_t(G))=1$ by the identity of [F1]. [F1, F2, F3, step 1.2, step 1.3, algebra]

3.1 Step 1.1 proves the edgeless case and step 2.1 proves the case of a nonempty edge set; these two cases exhaust all finite inputs, so for the arbitrarily fixed $t\ge t_0$, $\operatorname{val}(G)=1$ implies $\operatorname{val}(T_t(G))=1$. No random sampling or selection from a varying family occurs: the two maps are deterministic and the cases are decided by whether the finite edge set is empty. [F1, step 1.1, step 2.1, cases-exhaustive] ∎

## Remarks

This is the completeness half of Dinur's transformation: a satisfying labeling survives the degree reduction, the powering and the alphabet reduction, because each stage has an explicit extension or lift of satisfying labelings. The present lemma composes the published completeness clauses of [[thm-gap-amplification-step]] and [[thm-alphabet-reduction-step]] rather than reproving them, and records the edgeless branch separately so that the value convention is used only where it is needed.
