---
id: thm-qa-11-known-count-success-bound
kind: theorem
title: Success guarantee and boundary behavior of known-count Grover search
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 24
proof_strategy: direct
deps:
  - alg-qa-11-known-count-grover-search
  - cor-trigonometric-parity-and-pythagorean-identity
  - def-principal-inverse-sine-and-cosine
  - thm-double-angle-and-power-reduction-identities
  - thm-of-square-roots
  - thm-sine-and-cosine-addition-formulas
  - thm-sine-and-cosine-derivatives
  - prop-qa-11-known-count-preprocessing-cost
  - thm-qa-11-exact-integer-iteration-formula
  - thm-qa-11-integer-iteration-regime
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: 'Ronald de Wolf, Quantum Computing: Lecture Notes, §§7.1–7.2'
      url: https://arxiv.org/pdf/1907.09415
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms, §19.1
      url: https://cs.umd.edu/~amchilds/qa/qa.pdf
    - title: Gilles Brassard, Peter Høyer, Michele Mosca, and Alain Tapp, Quantum Amplitude Amplification and Estimation, §2
      url: https://arxiv.org/pdf/quant-ph/0005055
axiom_use: None; only finite sums, finite random choices, elementary real arithmetic, and natural-number induction are used; no choice principle is needed.
---

## Statement

For exact known count $t>0$, the procedure [[alg-qa-11-known-count-grover-search]] outputs a marked item with probability at least $\max\{t/N,1-t/N\}$. It returns none with certainty when $t=0$ and returns a marked item with certainty when $t=N$.

## Facts & Assumptions

**Given:** $N=2^n$, a marked set $M$, and exact count $t=|M|$ supplied to the algorithm.

[F1] [[alg-qa-11-known-count-grover-search]]: if $t=0$ it returns none; otherwise it chooses the least maximizer of the rational values $r_k=(1-T_{2k+1}(q))/2$ over $0\le k\le K=\lceil\sqrt{N/t}\rceil$, where $q=1-2t/N$. It applies that many Grover iterates, measures an address, and verifies it with the exact bit oracle for $f=1_M$.

[F2] [[thm-qa-11-exact-integer-iteration-formula]]: for $0<t<N$ and $\theta=\arcsin\sqrt{t/N}$, after $k$ iterates the marked probability is $p_k=\sin^2((2k+1)\theta)$. For $t=0,N$ it is respectively $0,1$ for every integer $k\ge0$.

[F3] [[thm-qa-11-integer-iteration-regime]]: for $0<t/N\le1/2$, an integer $k\le K$ has $p_k\ge1-t/N$; for $t/N>1/2$, $k=0$ has $p_0=t/N$.

[F4] [[prop-qa-11-known-count-preprocessing-cost]]: exact selection computes $T_0=1$, $T_1=q$, $T_{m+1}=2qT_m-T_{m-1}$ through $2K+1$ and compares the finite rational list $(1-T_{2k+1}(q))/2$.

[F5] [[thm-double-angle-and-power-reduction-identities]]: $\cos(2u)=1-2\sin^2u$ and $\sin^2u=(1-\cos(2u))/2$.

[F6] [[thm-sine-and-cosine-addition-formulas]]: $\cos(u+v)=\cos u\cos v-\sin u\sin v$.

[F7] [[cor-trigonometric-parity-and-pythagorean-identity]]: cosine is even and sine is odd.

[F8] [[thm-sine-and-cosine-derivatives]]: $\cos0=1$.

[F9] [[def-principal-inverse-sine-and-cosine]]: $\sin(\arcsin y)=y$ for $y\in[-1,1]$.

[F10] [[thm-of-square-roots]]: $\sqrt a\ge0$ and $(\sqrt a)^2=a$ for $a\ge0$.

## Proof

1.1 If $t=0$, [F1] returns none. If $t=N$, [F2] gives marked probability one for every integer iteration count, and the exact verification in [F1] accepts every address. Thus the two endpoint claims hold. [given, F1, F2]

1.2 For $0<t<N$, put $a=t/N$ and $\theta=\arcsin\sqrt a$. By [F9]–[F10], $\sin^2\theta=a$, so [F5] gives $q=1-2a=\cos(2\theta)$. The recurrence in [F4] starts with $T_0=\cos0=1$ and $T_1=\cos(2\theta)$ by [F8]. Expanding cosine at $2m\theta\pm2\theta$ using [F6]–[F7] gives $\cos(2(m+1)\theta)+\cos(2(m-1)\theta)=2\cos(2\theta)\cos(2m\theta)$. Induction in that recurrence therefore gives $T_m(q)=\cos(2m\theta)$ at every computed index. Consequently $r_k=(1-\cos((4k+2)\theta))/2=\sin^2((2k+1)\theta)=p_k$ for every candidate $0\le k\le K$, by [F5] and [F2]. [given, F1, F2, F4, F5, F6, F7, F8, F9, F10, induction, algebra]

2.1 If $0<a\le1/2$, the witness $k\le K$ from [F3] belongs to the algorithm's finite candidate list and has $p_k\ge1-a$. Step 1.2 identifies each rational candidate value with its actual marked probability, so the selected maximizer has success at least $1-a=\max\{a,1-a\}$. Exact verification accepts every marked measurement by [F1]. [given, F1, F3, step 1.2, algebra]

3.1 If $1/2<a<1$, the candidate $k=0$ in [F3] has success $a>1/2$. Step 1.2 identifies the maximized list with actual marked probabilities, so the selected iterate succeeds with probability at least $a=\max\{a,1-a\}$. Exact verification again accepts every marked measurement by [F1]. Together with step 1.1, this proves every branch of the guarantee. [given, F1, F3, step 1.1, step 1.2, algebra] ∎
