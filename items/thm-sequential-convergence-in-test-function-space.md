---
id: "thm-sequential-convergence-in-test-function-space"
kind: "theorem"
title: "Sequential convergence in test function space"
deps: ["lem-test-function-lf-topology-universal-property", "lem-bounded-test-function-sets-have-common-compact-support"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      title: "Semyon Dyatlov, Lecture notes for 18.155 (2022)"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

For tests $\varphi_j,\varphi\in\mathcal D(\Omega)$, $\varphi_j\to\varphi$ in the LF topology if and only if the supports of $\varphi_j$ eventually lie in one compact $K\subseteq\Omega$ and $\partial^\alpha\varphi_j\to\partial^\alpha\varphi$ uniformly on $\Omega$ for every multi-index $\alpha$. Equivalently one compact contains all their supports and that of the limit, and convergence holds in its fixed-support topology. This is a sequence criterion, in ZF.

## Facts & Assumptions

[F1] The LF topology induces exactly the derivative-seminorm topology on each fixed-support space, and its inclusion is continuous ([[lem-test-function-lf-topology-universal-property]]).

[F2] A convergent sequence with its limit is bounded; a bounded set of tests has common compact support ([[lem-bounded-test-function-sets-have-common-compact-support]]).

## Proof

**Given:** a sequence of tests and a test $\varphi$.

1.1 If $\varphi_j\to\varphi$ in the LF topology, F2 places the sequence and limit in one $\mathcal D_K$. Convergence in the subspace topology follows directly: any subspace neighborhood of $\varphi$ is the intersection with an ambient neighborhood, which eventually contains the sequence. By F1, $p_m(\varphi_j-\varphi)\to0$ for every $m$. Since derivatives vanish off $K$, this gives uniform convergence of every derivative on $\Omega$. [given, F1, F2]

2.1 Conversely suppose eventual common support and the stated uniform convergence. For $x\notin K$, the eventual values $\varphi_j(x)$ are zero, so $\varphi(x)=0$; since $K$ is closed, its support is contained in $K$. The finite union $L$ of $K$ and the finitely many initial test supports is compactly inside $\Omega$ and contains every support. For each $m$, uniform convergence of the finitely many derivatives through order $m$ gives $p_{m,L}(\varphi_j-\varphi)\to0$. F1 first yields convergence in $\mathcal D_L$, then LF convergence by the continuous inclusion. [step 1.1, given, F1]

3.1 These arguments also prove the stated equivalent all-support formulation. Empty $\Omega$ and eventually zero sequences satisfy the same reasoning; no compactness extraction or chosen subsequence is used. The finite initial union is essential to passing from eventual to all-support language. $\square$ [step 2.1, step 1.1]
