---
id: "lem-highest-weight-characters-are-unitriangular-in-weyl-orbit-sums"
kind: "lemma"
title: "Highest-weight characters are unitriangular in Weyl orbit sums"
deps: ["lem-finite-semisimple-pbw-and-highest-weight-construction", "lem-weyl-orbit-sums-form-a-basis-of-finite-weyl-invariants", "def-weyl-orbit-sum-in-a-group-algebra"]
provenance:
  statement: "ai-altered"
  proof: "ai-generated"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Pavel Etingof, Lie Groups and Lie Algebras, \u00a7\u00a725\u201326; local orbit-sum triangular inversion"
      url: "https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

For a finite-dimensional complex semisimple Lie algebra with a fixed Cartan and positive system, let $L(\lambda)$ be the finite-dimensional simple module of dominant integral highest weight $\lambda$. Its formal character is $\operatorname{ch}L(\lambda)=\sum_{\nu\in P}(\dim L(\lambda)_\nu)e^\nu\in\mathbb C[P]$. Then
$$\operatorname{ch}L(\lambda)=m_\lambda+\sum_{\substack{\mu\text{ dominant}\\\mu<\lambda}}n_{\lambda,\mu}m_\mu,$$
where the coefficients are nonnegative integers and the support is finite. The inverse expansion expressing $m_\lambda$ in these characters has integral coefficients, coefficient one at $\operatorname{ch}L(\lambda)$, and finite support on the same dominant ideal. In particular the characters form a basis of $\mathbb C[P]^W$. All statements include singular dominant weights and rank zero, without AC.

## Facts & Assumptions

**Given:** The indicated Cartan, positive system and formal character.

[F1] The modules $L(\lambda)$ exist, are finite-dimensional, have one-dimensional top and support in $\lambda-Q_+$, and their weight multiplicities are $W$-invariant, by [[lem-finite-semisimple-pbw-and-highest-weight-construction]].

[F2] Orbit sums form the invariant basis, are indexed uniquely by dominant weights, and each dominant ideal below a fixed dominant weight is finite by [[lem-weyl-orbit-sums-form-a-basis-of-finite-weyl-invariants]].

[F3] The group algebra and distinct-element orbit-sum convention are [[def-weyl-orbit-sum-in-a-group-algebra]].

## Proof

1.1 By F1 the character is a finite sum with nonnegative integral coefficients constant on each Weyl orbit, hence lies in $\mathbb C[P]^W$. F2 and F3 group these coefficients into orbit sums with the same nonnegative integral coefficient at each orbit. If its dominant representative $\mu$ occurs, then $\mu$ itself is a support weight and F1 gives $\lambda-\mu\in Q_+$. The orbit of $\lambda$ has coefficient one because the top space is one-dimensional. Every other dominant representative is distinct from $\lambda$, so is strictly below it. This proves exactly the displayed expansion, including its finiteness. [F1, F2, F3, given, algebra]

2.1 Fix $\lambda$ and let $D=\{\mu\text{ dominant}:\mu\le\lambda\}$. It is finite by F2 and is downward closed among dominant weights by transitivity of $Q_+$ addition. On its finite free span with basis $m_\mu$, step 1.1 gives the character change-of-basis matrix $1+N$, where $N$ strictly lowers this partial order and has integer entries. A product of $|D|$ strictly lowering entries would require a chain of $|D|+1$ distinct points in $D$, which is impossible; hence $N^{|D|}=0$. Its inverse is the finite integer matrix $1-N+N^2-\cdots+(-N)^{|D|-1}$. It has diagonal one and only lower entries. This proves the asserted finite inverse on each ideal. [step 1.1, F2, F3, algebra]

3.1 F2 says every invariant is a finite combination of orbit sums. Replacing each by its finite inverse expansion in step 2.1 proves character spanning. A finite relation among characters is supported in the union of finitely many finite dominant ideals; the same nilpotent triangular argument on that finite downward-closed union proves independence. Distinct-element orbit sums ensure no stabilizer factor appears at a wall weight. For rank zero only $\lambda=0$ exists, $L(0)=\mathbb C$ and $\operatorname{ch}L(0)=m_0=1$; for $\lambda=0$ the dominant ideal is the singleton by F2's norm bound. All matrices and sums used are finite and no AC is involved. [step 1.1, step 2.1, F1, F2, F3, given, algebra] ∎
