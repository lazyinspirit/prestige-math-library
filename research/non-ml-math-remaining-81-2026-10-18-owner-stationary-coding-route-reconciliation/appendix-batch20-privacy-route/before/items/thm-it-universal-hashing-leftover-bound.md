---
id: thm-it-universal-hashing-leftover-bound
kind: theorem
title: "Classical leftover-hash bound with public side information"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: []
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the hash family, alphabets, and all sums are finite."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Prakash Narayan and Himanshu Tyagi, Multiterminal Secrecy by Public Discussion, Foundations and Trends in Communications and Information Theory 13(2–3), 2016"
      url: https://ece.iisc.ac.in/~htyagi/papers/PN-HT-NOW-final1.pdf
      locator: "Chapter 5, §§5.2–5.3, printed pp. 180–185: universal hashing and the leftover-hash lemma with classical side information."
    - title: "C. H. Bennett, G. Brassard, C. Crépeau, and U. Maurer, Generalized Privacy Amplification, IEEE Transactions on Information Theory 41(6), 1995"
      url: https://crypto.cs.mcgill.ca/~crepeau/PDF/ASPUBLISHED/BBCM95.pdf
      locator: "§IV: universal hashing and privacy amplification against probabilistic side information."
---

## Statement

Let $X,Z$ be finite random variables with joint law $P_{XZ}$. Let $M\ge1$ be an integer and let $\mathcal H$ be a finite nonempty family of functions $h:\mathcal X\to[M]$. Choose $H$ uniformly from $\mathcal H$ independently of $(X,Z)$, and assume the family is **two-universal**:

$$\Pr_H[h_H(x)=h_H(x')]\le\frac1M\quad\text{for every }x\ne x'.$$

Set $K:=h_H(X)$; the seed $H$ is public. Define the **conditional guessing probability**

$$g(X\mid Z):=\sum_z\max_xP_{XZ}(x,z),$$

with zero-mass $z$ contributing zero, and define total variation by $\operatorname{TV}(P,Q):=\frac12\sum|P-Q|$ on the common finite alphabet. Then

$$\operatorname{TV}(P_{KHZ},U_M\otimes P_{HZ})\le\frac12\sqrt{M\,g(X\mid Z)},$$

where $U_M$ is uniform on $[M]$. In particular, if $0<\varepsilon\le\frac12$ and $M g(X\mid Z)\le4\varepsilon^2$, then the displayed total-variation distance is at most $\varepsilon$. This is a total-variation guarantee with the seed included in Eve's side information; it is not by itself an unnormalized mutual-information claim.

## Facts & Assumptions

**Given:** A finite joint law $P_{XZ}$, a finite hash family $\mathcal H$, and an independent uniform seed $H$ satisfying the two-universality condition in the Statement.

[A1] For every distinct $x,x'$, $\Pr_H[h_H(x)=h_H(x')]\le1/M$; this is the two-universality hypothesis stated above.

[A2] $P_{KHZ}$ is the joint law induced by $K=h_H(X)$ and the public seed $H$; the comparison law uses the same marginal $P_{HZ}$ and an independent uniform output in $[M]$.

## Proof

1.1 Fix $z$ with $P_Z(z)>0$ and write $q_z(x):=P(X=x\mid Z=z)$ and $r_{h,z}(k):=\sum_{x:h(x)=k}q_z(x)$. Expanding the square and applying [A1] to the off-diagonal terms gives $\mathbb E_H\sum_{k=1}^M r_{H,z}(k)^2\le\sum_xq_z(x)^2+\frac1M\sum_{x\ne x'}q_z(x)q_z(x')=\frac1M+\left(1-\frac1M\right)\sum_xq_z(x)^2.$ Since $\sum_k r_{h,z}(k)=1$, subtracting $1/M$ from this inequality yields $\mathbb E_H\sum_k(r_{H,z}(k)-1/M)^2\le\sum_xq_z(x)^2$. [A1, A2, given, algebra]

2.1 The total-variation definition and [A2] give $\operatorname{TV}(P_{KHZ},U_M\otimes P_{HZ})=\frac12\sum_{h,z}P_H(h)P_Z(z)\sum_k|r_{h,z}(k)-1/M|.$ For any real vector $(a_k)_{k=1}^M$, $M\sum_ka_k^2-(\sum_k|a_k|)^2=\sum_{i<j}(|a_i|-|a_j|)^2\ge0$. Applying this identity to $a_k=r_{h,z}(k)-1/M$ bounds the inner sum by $\sqrt{M\sum_k(r_{h,z}(k)-1/M)^2}$. For a nonnegative finite random variable $V$, $\mathbb E[V]-(\mathbb E\sqrt V)^2=\mathbb E[(\sqrt V-\mathbb E\sqrt V)^2]\ge0$. Applying this to the squared-bin sum over $(H,Z)$, followed by step 1.1, gives $\operatorname{TV}(P_{KHZ},U_M\otimes P_{HZ})\le\frac12\sqrt{M\sum_zP_Z(z)\sum_xq_z(x)^2}.$ [A2, step 1.1, given, algebra]

3.1 For every probability vector $q_z$, $\sum_xq_z(x)^2\le\max_xq_z(x)\sum_xq_z(x)=\max_xq_z(x)$. Hence $\sum_zP_Z(z)\sum_xq_z(x)^2\le\sum_zP_Z(z)\max_xq_z(x)=\sum_z\max_xP_{XZ}(x,z)=g(X\mid Z).$ Combining with step 2.1 proves the bound, including zero-mass $z$ by omission. [A2, step 2.1, given, algebra]

4.1 If $M g(X\mid Z)\le4\varepsilon^2$, the right-hand side in step 2.1 is at most $\varepsilon$ by taking nonnegative square roots. [step 2.1, given, algebra] ∎
