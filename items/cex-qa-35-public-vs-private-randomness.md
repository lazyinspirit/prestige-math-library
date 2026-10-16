---
id: cex-qa-35-public-vs-private-randomness
kind: counterexample
title: "Public-coin and private-coin SMP are different models"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 13
deps: ["def-qa-35-finite-communication-protocol", "def-qa-35-equality-promise"]
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all distributions, sums, bases, and selection sets are finite."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Chapter 16 §§16.1 and 16.6, PDF pp.147–153; private/public-coin SMP and equality lower-bound context (§16.1), quantum fingerprint construction and SWAP-test analysis (§16.6)."
    - title: "Harry Buhrman, Richard Cleve, John Watrous, Ronald de Wolf, Quantum Fingerprinting"
      url: https://arxiv.org/pdf/quant-ph/0102001
      locator: "Complete 8-page paper, especially §2, PDF pp.2–4, code fingerprints and swap-test analysis."
---

## Statement

For each n≥1, a shared uniformly random pair r₁,r₂∈𝔽₂ⁿ lets Alice send (r₁·x,r₂·x) and Bob send (r₁·y,r₂·y); the referee accepts equality iff both bits match. Equal inputs always match and unequal inputs collide with probability 1/4. The shared seed has 2n bits and is a separately declared public resource; independent private seeds do not give this guarantee.

## Facts & Assumptions

**Given:** Equality inputs $x,y\in\mathbb F_2^n$, where $n\ge1$.

[F1] [[def-qa-35-equality-promise]]: Equality requires output $1$ when $x=y$ and $0$ when $x\ne y$.

[F2] [[def-qa-35-finite-communication-protocol]]: Shared randomness is a separately declared resource, and transmitted bits are counted as communication.

## Proof

**Proof technique:** explicit construction and counterexample.

1.1 Let public shared seeds $r_1,r_2$ be independent uniform vectors in $\mathbb F_2^n$. Alice sends $(r_1\cdot x,r_2\cdot x)$ and Bob sends $(r_1\cdot y,r_2\cdot y)$; the referee outputs equality exactly when both bits match. If $x=y$, both match surely. If $z=x+y\ne0$, choose a coordinate $k$ with $z_k=1$; flipping $r_k$ pairs seeds bijectively with opposite values of $r\cdot z$, so each $r_i\cdot z$ is uniform, and independence gives collision probability $1/4$. The protocol uses two transmitted bits per sender and a shared seed of $2n$ bits, which [F2] keeps separate from communication. [given, F1, F2, choose, algebra]

2.1 If the parties instead use independent private seed pairs, take the equal input $x=y=e_1$. Each sender's two-bit message is uniform on $\mathbb F_2^2$, independently of the other's, so the messages disagree with probability $3/4$. This violates any bounded-error Equality guarantee such as error at most $1/3$, showing that the common seed is doing real work. [step 1.1, F1, algebra] ∎
