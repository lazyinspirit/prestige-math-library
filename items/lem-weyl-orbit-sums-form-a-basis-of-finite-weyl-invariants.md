---
id: "lem-weyl-orbit-sums-form-a-basis-of-finite-weyl-invariants"
kind: "lemma"
title: "Weyl orbit sums form a basis of finite Weyl invariants"
deps: ["def-weyl-orbit-sum-in-a-group-algebra", "lem-finite-weyl-closed-chambers-and-stabilizers", "def-finite-weyl-root-system-lattice-and-chamber-conventions", "lem-finite-weyl-positive-roots-and-simple-reflections"]
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
    - title: "Pavel Etingof, Lie Groups and Lie Algebras, \u00a7\u00a721\u201322; local sign-change proofs fill the chamber argument"
      url: "https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Orbit sums indexed by the distinct $W$-orbits in $P$ form a complex vector-space basis of $\mathbb C[P]^W$. Equivalently they are indexed by dominant integral weights, with exactly one per orbit, including weights on chamber walls. Every invariant has finite support in this basis.

For each dominant $\lambda$, the set of dominant $\mu\le\lambda$ is finite. In fact every such $\mu$ satisfies $\|\mu\|\le\|\lambda\|$ for the specified invariant Euclidean norm. All assertions are choice-free.

## Facts & Assumptions

**Given:** The root-system, dominance and lattice conventions of [[def-finite-weyl-root-system-lattice-and-chamber-conventions]].

[F1] The formal finite-support algebra and orbit sums are [[def-weyl-orbit-sum-in-a-group-algebra]].

[F2] Each weight orbit has a unique dominant representative by [[lem-finite-weyl-closed-chambers-and-stabilizers]].

[F3] The fundamental weights form a lattice basis of $P$ by [[lem-finite-weyl-positive-roots-and-simple-reflections]].

## Proof

1.1 Invariance of $f=\sum_\mu c_\mu e^\mu$ is equivalent, by equality of coefficients in the formal basis, to $c_{w\mu}=c_\mu$ for all $w,\mu$. Thus its support is a finite union of entire orbits and its restriction to each orbit is one scalar times that orbit sum. This proves spanning by a finite sum. Distinct orbits have disjoint supports and each orbit sum has coefficient one at every point of its orbit, so a vanishing finite linear combination has every coefficient zero. This proves independence. [F1, given, algebra]

1.2 If $\lambda,\mu$ are dominant and $\mu\le\lambda$, write $\lambda-\mu=\sum_i n_i\alpha_i$ with $n_i\ge0$ integers. Both dominance inequalities give $(\alpha_i,\lambda+\mu)\ge0$, so $$\|\lambda\|^2-\|\mu\|^2=(\lambda-\mu,\lambda+\mu)=\sum_i n_i(\alpha_i,\lambda+\mu)\ge0.$$ For $\mu=\sum_i a_i\omega_i\in P$, the integer coordinate is $a_i=(\mu,\alpha_i^\vee)$ and satisfies $|a_i|\le\|\lambda\|\,\|\alpha_i^\vee\|$ by Cauchy–Schwarz. Hence only finitely many coordinate tuples, and therefore finitely many such $\mu$, exist. [F3, given, algebra]

2.1 F2 gives a unique dominant index for each orbit sum in step 1.1; in particular no ambiguity arises from a singular stabilizer. This reindexes the basis without any family choice. Step 1.2 proves the supplementary finiteness and norm bounds. The zero invariant has the empty expansion; the rank-zero system has only $m_0=1$; and at $\lambda=0$ the norm bound forces $\mu=0$. These cases obey the same arguments. [step 1.1, step 1.2, F1, F2, F3] ∎
