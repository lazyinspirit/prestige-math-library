---
id: cex-a-null-recurrent-chain-has-no-stationary-probability
kind: counterexample
title: "A null recurrent chain has no stationary probability"
status: draft
origin: pipeline
landmark: false
deps:
  - def-axiom-of-choice
  - def-simple-symmetric-walk-on-zd
  - cor-recurrence-of-the-one-dimensional-simple-symmetric-random-walk
  - def-positive-recurrent-and-null-recurrent-state
  - thm-positive-recurrence-and-stationary-probability-for-irreducible-countable-chains
  - def-accessibility-communication-and-irreducibility
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
proof_strategy: direct
sources:
  references:
    - title: "Levin–Peres–Wilmer, Markov Chains and Mixing Times, second edition, §21.3 and Appendix C.1, recurrence without a stationary probability"
      url: https://pages.uoregon.edu/dlevin/MARKOV/mcmt2e.pdf
    - title: "Aldous–Chewi, Probability Theory, Lectures 13–15"
      url: https://www.stat.berkeley.edu/~aldous/205B/chewi_notes.pdf
---

## Statement refuted

Assume AC for the canonical walk law. Simple symmetric nearest-neighbor random walk on $\mathbb Z$
([[def-simple-symmetric-walk-on-zd]]) is recurrent, but it has no invariant
probability distribution. Consequently every state is null recurrent
([[def-positive-recurrent-and-null-recurrent-state]]) and
$\mathbb E_kT_k^+=+\infty$ for every $k\in\mathbb Z$. Thus positive recurrence
is strictly stronger than recurrence, and a recurrent chain need not admit a
stationary probability.

## Facts & Assumptions

**Given:** AC and the simple symmetric nearest-neighbor walk on $\mathbb Z$, with canonical laws $\mathbb P_z$ and transition matrix $p$.

[A1] Every family of nonempty sets has a choice function; AC is assumed and is used through the recurrence and positive-recurrence suppliers [F2] and [F4]. ([[def-axiom-of-choice]])

[F1] For $d=1$, $p(z,z+1)=p(z,z-1)=\tfrac12$ and all other entries vanish; each row sums to one. ([[def-simple-symmetric-walk-on-zd]])

[F2] Assume AC. With $T_z^+=\inf\{n\ge1:X_n=z\}$, every state of the one-dimensional simple symmetric walk is recurrent: $\mathbb P_z(T_z^+<\infty)=1$. ([[cor-recurrence-of-the-one-dimensional-simple-symmetric-random-walk]])

[F3] $x\to y$ means $p^{(n)}(x,y)>0$ for some $n\ge0$, and a chain is irreducible when every pair communicates. ([[def-accessibility-communication-and-irreducibility]])

[F4] Assume AC. For an irreducible countable chain, some state positive recurrent, every state positive recurrent, and existence of an invariant probability are equivalent; an invariant probability satisfies $\pi(b)>0$ and $\mathbb E_bT_b^+\le1/\pi(b)$ for every state $b$. ([[thm-positive-recurrence-and-stationary-probability-for-irreducible-countable-chains]])

[F5] On a countable state space a probability vector $\pi$ is invariant exactly when $\pi(y)=\sum_{x\in E}\pi(x)p(x,y)$ for every $y\in E$. ([[def-invariant-and-stationary-distribution-for-a-markov-kernel]])

[F6] A recurrent state is positive recurrent when $\mathbb E_xT_x^+<+\infty$ and null recurrent when $\mathbb E_xT_x^+=+\infty$; the two cases exhaust the recurrent states. ([[def-positive-recurrent-and-null-recurrent-state]])

## Counterexample

**Given:** AC and the simple symmetric walk on $\mathbb Z$ with transition matrix $p(z,z\pm1)=\frac12$.

**Proof technique:** suppose an invariant probability exists, show that its successive differences are constant, and contradict summability; then invoke the positive-recurrence equivalence.

1.1 The walk is irreducible: for $z,w\in\mathbb Z$ with $m=w-z$, following the $|m|$ nearest-neighbor steps from $z$ toward $w$ has probability $2^{-|m|}>0$, so $p^{(|m|)}(z,w)>0$; hence every pair of states communicates in the sense of [F3]. [F1, F3, given]

1.2 By [F2] every state $k$ is recurrent, $\mathbb P_k(T_k^+<\infty)=1$. [A1, F2, given]

1.3 Suppose $\pi$ is an invariant probability. By [F5], $2\pi(k)=\pi(k-1)+\pi(k+1)$ for every $k\in\mathbb Z$; rearranging gives $\pi(k+1)-\pi(k)=\pi(k)-\pi(k-1)$ for every $k$, so the successive difference $c:=\pi(k+1)-\pi(k)$ is the same real number for all $k$. [F5, given]

2.1 If $c>0$ then $\pi(k)=\pi(0)+kc\to+\infty$, so the nonnegative series $\sum_k\pi(k)$ diverges, contradicting $\sum_k\pi(k)=1$; if $c<0$ then $\pi(k)\to+\infty$ as $k\to-\infty$ along nonpositive indices, contradicting $\pi(k)\le1$, which follows from $\pi$ being a probability; hence $c=0$ and $\pi$ is constant on $\mathbb Z$. [step 1.3, algebra, given]

3.1 A constant probability mass on the countably infinite set $\mathbb Z$ sums to $0$ when the constant is $0$ and diverges otherwise, so it cannot satisfy $\sum_k\pi(k)=1$; this contradicts the assumed invariant probability, so the walk admits no invariant probability distribution. [step 2.1, given]

4.1 Steps 1.3–3.1 derive nonexistence of an invariant probability from the finite-row stationarity equation and summability; this calculation does not assume recurrence. [step 1.3, step 3.1, given]

4.2 By steps 1.1–1.2 the chain is irreducible and recurrent, and by step 3.1 it has no invariant probability; the equivalence [F4] then rules out positive recurrence of every state, so each recurrent state $k$ satisfies $\mathbb E_kT_k^+=+\infty$ and is null recurrent by [F6]. [A1, F4, F6, step 1.1, step 1.2, step 3.1, given]

4.3 Step 3.1 reaches a contradiction from the assumed probability $\pi$, so no other constructed object requires a well-definedness check; the stationarity equation used in step 1.3 is a finite row computation. [step 1.3, step 3.1, given]

5.1 AC [A1] is used exactly at the AC-qualified supplier applications in steps 1.2 and 4.2; the difference calculation in step 1.3 uses no Choice. [A1, step 1.2, step 4.2, given] ∎
