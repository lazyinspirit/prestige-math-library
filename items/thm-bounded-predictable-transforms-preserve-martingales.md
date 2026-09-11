---
id: "thm-bounded-predictable-transforms-preserve-martingales"
kind: "theorem"
title: "Bounded predictable transforms preserve martingales"
deps: ["def-discrete-martingale-transform", "def-martingale-submartingale-and-supermartingale", "thm-taking-out-what-is-known", "thm-basic-algebra-and-order-properties-of-conditional-expectation", "lem-conditioning-a-known-variable-and-an-independent-variable", "def-axiom-of-choice", "cor-holder-inequality-for-random-variables"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
status: published
origin: "pipeline"
---

## Statement

Assume AC. Let $M$ be a martingale and $H$ a finite real predictable process. If $|H_k|\le C_k$ a.s. for each $k\ge1$, with finite deterministic constants $C_k$, then $H\mathbin\cdot M$ is a martingale starting at zero. Uniform boundedness is a special case. More generally the same conclusion holds whenever every $H_k(M_k-M_{k-1})$ is integrable, without a bound on $H_k$.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

[F1] Product integrability makes the transform an adapted integrable finite sum; timewise bounds imply this domain. [[def-discrete-martingale-transform]].

[F2] A finite measurable factor may be taken out when its product with the integrable input is integrable. [[thm-taking-out-what-is-known]].

[F3] Conditional expectation is linear, order preserving and expectation preserving. [[thm-basic-algebra-and-order-properties-of-conditional-expectation]].

[F4] An integrable variable measurable for the conditioning sigma-algebra conditions to itself. [[lem-conditioning-a-known-variable-and-an-independent-variable]].

[F5] AC supplies the inherited conditional-expectation existence and any stated choice of versions. [[def-axiom-of-choice]].

[F6] Conjugate-moment hypotheses on two real variables imply integrability of their product. [[cor-holder-inequality-for-random-variables]].

## Proof

**Proof technique:** direct.

1.1 Put $D_k=M_k-M_{k-1}$. It is integrable since $E|D_k|\le E|M_k|+E|M_{k-1}|$. In the bounded case [F1] gives $E|H_kD_k|\le C_k(E|M_k|+E|M_{k-1}|)<\infty$; in the general case this is assumed. Consequently $Z=H\mathbin\cdot M$ is adapted, integrable, and $Z_0=0$. This is verified before conditioning any product. [given, F1]

2.1 For each $n\ge0$, $H_{n+1}$ is finite $\mathcal F_n$-measurable and $D_{n+1},H_{n+1}D_{n+1}$ are integrable. The unbounded clause of [F2] therefore gives $E[H_{n+1}D_{n+1}\mid\mathcal F_n]=H_{n+1}E[D_{n+1}\mid\mathcal F_n]=H_{n+1}(M_n-M_n)=0$. Linearity and known-variable conditioning now give $E[Z_{n+1}\mid\mathcal F_n]=Z_n$. This proves the martingale assertion [[def-martingale-submartingale-and-supermartingale]] even for signed $H$. AC is inherited from the conditional classes in this calculation. [given, F2, F3, F4, F5, step 1.1]

3.1 If a uniform bound $C$ is supplied, choose $C_k=C$ in step 1.1. Another sufficient domain condition at a fixed $k$ is $H_k\in L^p$ and $D_k\in L^q$ with conjugate $p,q$ under the clauses of [F6]: then $E|H_kD_k|\le\|H_k\|_p\|D_k\|_q<\infty$. The proof of step 2.1 only needs the resulting product integrability. [F6, step 1.1, step 2.1] ∎
