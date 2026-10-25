---
id: thm-qc-t1-extended-rectangle-threshold
kind: theorem
title: "Conditional Distance-Three Extended-Rectangle Threshold"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-qc-noise-channel-model
  - lem-qc-t1-truncated-exrec-witness-reduction
  - thm-finite-union-bound
dependency_level: 11
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Aliferis, Gottesman and Preskill, Quantum accuracy threshold for concatenated distance-3 codes"
      url: "https://arxiv.org/pdf/quant-ph/0504218"
---

## Statement

Assume the finite recursively closed distance-three, $t=1$ gadget family, complete syndrome decoder, explicit port discipline, local channel model and checked elementary correction, gate, pure-preparation and destructive-basis-measurement identities of [[lem-qc-t1-truncated-exrec-witness-reduction]]. Each level-zero rectangle is one elementary location, faulty independently with probability $\eta\in[0,1]$. Let $b\ge2$ bound the number of child-location roots in each one-scale exRec template, including leading ECs, and put $A_1=\binom b2$. Use that lemma's reverse scan and expanded-support truncation convention.

Define the uniform probability envelope $p_0=\eta$ and $p_{r+1}=A_1p_r^2$. Then
$$
p_r=A_1^{-1}(A_1\eta)^{2^r}.
$$
For any specified $k$ roots, the probability that they are jointly selected bad at level $r$ is at most $p_r^k$. For $N$ top-level roots, the probability of any selected bad root is at most $Np_r$, and every final classical success probability differs from ideal by at most $Np_r$. If $\eta<1/A_1$, then $p_r\to0$ super-exponentially. For fixed gadgets and fixed subthreshold $\eta$, achieving error at most $\delta$ requires $O(\log\log(N/\delta))$ levels and polylogarithmic multiplicative size and depth overhead. Elementary gadget correctness remains an explicit hypothesis; recursive exRec correctness and the witness reduction are supplied by the cited lemma.

## Facts & Assumptions

**Given:** The checked local gadget and recursive port hypotheses in the statement, $b\ge2$, the independent fault process, $N\ge1$, and target $\delta\in(0,1]$. Prove the probability and overhead bounds.

[F1] [[lem-qc-t1-truncated-exrec-witness-reduction]] supplies correctness of good complete or truncated exRecs and the joint bound $\bigl(A_1^{2^r-1}\eta^{2^r}\bigr)^k$ from fixed disjoint elementary witness leaves.

[F2] [[def-qc-noise-channel-model]] supplies the finite independent elementary fault process and fixed patternwise local replacement maps.

[F3] [[thm-finite-union-bound]] bounds a finite union by the sum of its probabilities.

## Proof

1.1 The local hypotheses in the statement are precisely those of [F1], and [F2] supplies its independent elementary model. Thus [F1] bounds the joint selected-bad event for any specified $k$ roots by $\bigl(A_1^{2^r-1}\eta^{2^r}\bigr)^k$. Since $A_1^{2^r-1}\eta^{2^r}=A_1^{-1}(A_1\eta)^{2^r}$, this is $p_r^k$. This argument uses only fixed elementary witness leaves; the selected bad-root events need not be independent. [given, F1, F2, algebra]

2.1 The expression $p_r=A_1^{-1}(A_1\eta)^{2^r}$ equals $\eta$ at $r=0$ and satisfies $A_1p_r^2=A_1^{-1}(A_1\eta)^{2^{r+1}}=p_{r+1}$. Hence it is the stated recurrence envelope. In particular step 1.1 with $k=1$ bounds each selected bad-root probability by $p_r$. [step 1.1, algebra]

3.1 By [F3], the probability $\alpha$ of any selected bad top-level root is at most $Np_r$. For every pattern in its complement, [F1] gives the ideal output instrument. Consequently the full output law is $(1-\alpha)P_{\rm ideal}+\alpha Q$ for some probability law $Q$; at $\alpha=0$ choose $Q$ arbitrarily. Each success probability differs from ideal by at most $\alpha\le Np_r$. This remains true if the complement has probability zero, since then $\alpha=1$. [given, F1, F3, step 2.1, algebra]

4.1 If $\eta=0$, $p_r=0$ at every level. Otherwise for fixed $\eta<1/A_1$ put $\theta=A_1\eta\in(0,1)$ and $c=-\log\theta>0$. The bound $Np_r\le\delta$ holds whenever $2^r\ge c^{-1}\log(N/(A_1\delta))$, and level zero suffices when the right side is at most one. Hence the least qualifying level is $O(\log\log(N/\delta))$. The finite recursive gadget family has a constant size and depth expansion bound $\kappa\ge1$, so a circuit of original size $S$ and depth $D$ has size at most $S\kappa^r$ and depth at most $D\kappa^r$, with a fixed boundary factor. Its multiplicative overheads are polylogarithmic, and $p_r=A_1^{-1}e^{-c2^r}\to0$ super-exponentially. [given, step 2.1, algebra] ∎

## Remarks

The local gadget conditions and port discipline are essential. The witness-tree proof handles fault-dependent truncation without independence of adaptive selected events. It applies to the stated pure-preparation and destructive-basis-measurement primitive family; no general mixed multioutput preparation or arbitrary POVM primitive is inferred.
