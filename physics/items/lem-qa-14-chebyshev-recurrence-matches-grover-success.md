---
id: lem-qa-14-chebyshev-recurrence-matches-grover-success
kind: lemma
title: The rational Grover recurrence equals the success probability
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 23
deps:
  - alg-qa-11-known-count-grover-search
  - thm-qa-11-exact-integer-iteration-formula
  - thm-sine-and-cosine-addition-formulas
  - thm-sine-and-cosine-subtraction-formulas
  - thm-double-angle-and-power-reduction-identities
proof_strategy: direct
axiom_use: None; the proof uses finite induction and elementary trigonometric identities.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "§7.2, printed pp.53–56 (PDF pp.65–68): exact integer-iteration success law."
    - title: "Gilles Brassard, Peter Høyer, Michele Mosca, and Alain Tapp, Quantum Amplitude Amplification and Estimation"
      url: "https://arxiv.org/pdf/quant-ph/0005055"
      locator: "§2, Theorem 2 (PDF pp.6–8): the two-dimensional rotation and Grover success probability."
---

## Statement

Let $N=2^n$, let $1\le t\le N$, put $q=1-2t/N$ and $\theta=\arcsin\sqrt{t/N}$. If $T_0(q)=1$, $T_1(q)=q$, and $T_{r+1}(q)=2qT_r(q)-T_{r-1}(q)$, then for every integer $k\ge0$,
$$(1-T_{2k+1}(q))/2=\sin^2((2k+1)\theta).$$
Thus the exact rational values used by the known-count Grover schedule equal its actual marked-address probabilities.

## Facts & Assumptions

**Given:** $N=2^n$, $1\le t\le N$, the recurrence above, and $\theta=\arcsin\sqrt{t/N}$.

[F1] [[alg-qa-11-known-count-grover-search]]: the known-count schedule uses $q=1-2t/N$ and computes $T_0=1$, $T_1=q$, $T_{r+1}=2qT_r-T_{r-1}$ and $p_k=(1-T_{2k+1}(q))/2$.

[F2] [[thm-qa-11-exact-integer-iteration-formula]]: after $k$ Grover iterates the marked-address probability is $\sin^2((2k+1)\theta)$.

[F3] [[thm-sine-and-cosine-addition-formulas]]: $\cos(x+y)=\cos x\cos y-\sin x\sin y$.

[F4] [[thm-sine-and-cosine-subtraction-formulas]]: $\cos(x-y)=\cos x\cos y+\sin x\sin y$.

[F5] [[thm-double-angle-and-power-reduction-identities]]: $\cos(2\theta)=1-2\sin^2\theta$ and $\sin^2 u=(1-\cos(2u))/2$.

## Proof

1.1 Since $\sin^2\theta=t/N$, [F5] gives $\cos(2\theta)=1-2t/N=q$. Define $c_r=\cos(2r\theta)$. Then $c_0=1=T_0(q)$ and $c_1=q=T_1(q)$. [given, F1, F5, algebra]

2.1 For every integer $r\ge1$, applying [F3] and [F4] with $x=2r\theta$ and $y=2\theta$ and adding the identities gives $c_{r+1}=2\cos(2\theta)c_r-c_{r-1}=2q c_r-c_{r-1}$. This is the same recurrence as $T_r(q)$; the initial values in step 1.1 and induction on $r$ give $c_r=T_r(q)$ for every $r\ge0$. [F1, F3, F4, step 1.1, induction]

3.1 Setting $r=2k+1$ in step 2.1 and applying the power-reduction identity [F5] gives $(1-T_{2k+1}(q))/2=(1-\cos((4k+2)\theta))/2=\sin^2((2k+1)\theta)$. By [F2] this is the actual Grover success probability. [F2, F5, step 2.1, algebra] ∎
