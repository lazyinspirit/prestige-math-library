---
id: cor-pit-is-in-corp
kind: corollary
title: "Polynomial identity testing is in coRP"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-rp-corp-zpp-bpp-and-pp, def-polynomial-identity-testing, thm-schwartz-zippel-lemma]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Eric Blais, Models of Computation, 15. P vs. BPP"
      url: "https://cs.uwaterloo.ca/~eblais/cs365/w25/P-and-BPP"
---

## Statement

For every PIT representation that permits polynomial-time evaluation and polynomial-time construction of a finite sample set $S\subseteq F$ with $|S|\ge \max(1,2d)$, where $d$ is the input's degree bound, the corresponding polynomial identity testing problem lies in coRP.

## Facts & Assumptions

**Given:** a represented polynomial $f$ in a PIT model with a computable degree bound $d$ and a computable sample set $S$ satisfying $|S|\ge \max(1,2d)$.

[L1] RP and coRP are the one-sided-error probabilistic classes ([[def-rp-corp-zpp-bpp-and-pp]]).

[L2] PIT asks whether the represented polynomial is identically zero, and the representation supports polynomial-time evaluation at chosen points ([[def-polynomial-identity-testing]]).

[L3] A nonzero polynomial of degree at most $d$ vanishes on at most a $d/|S|$ fraction of the points of $S^n$ ([[thm-schwartz-zippel-lemma]]).

## Proof

**Proof technique:** direct.

1.1 On input the representation of $f$, compute its degree bound $d$, compute the sample set $S$, choose a uniformly random point of $S^n$, evaluate $f$ at that point using [L2], and reject immediately if the value is nonzero; otherwise accept. The runtime is polynomial by the assumptions packaged into [L2]. [L2, given, construct]

2.1 If $f$ is the zero polynomial, every evaluation is zero, so the algorithm accepts with probability $1$. If $f$ is nonzero, [L3] gives $\mathbb P(f(a)=0)\le d/|S|\le 1/2$. So on no-instances the algorithm rejects with probability at least $1/2$. [L3, step 1.1, algebra]

3.1 Step 2.1 is exactly the coRP condition from [L1]. Therefore PIT is in coRP for every representation satisfying the stated assumptions. [L1, step 2.1] ∎
