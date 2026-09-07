---
id: thm-decomposition-and-inertia-in-towers
title: "Decomposition and inertia in towers"
kind: theorem
status: published
origin: pipeline
deps: [thm-conjugacy-of-decomposition-and-inertia-groups, thm-galois-action-on-primes-above-a-prime-is-transitive, cor-orders-of-decomposition-and-inertia-groups, thm-ramification-and-residue-degrees-in-towers, thm-normal-subgroups-and-quotients-in-the-galois-correspondence]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Chapter 8, Proposition 8.13, p.141"
      url: https://www.jmilne.org/math/CourseNotes/ANT.pdf
proof_strategy: direct argument
---

## Statement

Let M/L/K be a tower of number fields with M/K and L/K finite Galois, and fix nonzero primes $Q\mid P\mid p$. With $H=\operatorname{Gal}(M/L)$,
$$D(Q/P)=D(Q/p)\cap H,\qquad I(Q/P)=I(Q/p)\cap H.$$
Restriction gives exact sequences
$$1\to D(Q/P)\to D(Q/p)\to D(P/p)\to1,$$
$$1\to I(Q/P)\to I(Q/p)\to I(P/p)\to1.$$
The intersection identities also hold without L/K Galois; the displayed quotient assertions use that hypothesis.

## Facts & Assumptions

**Given:** The data and hypotheses of the statement.

[F1] [[thm-conjugacy-of-decomposition-and-inertia-groups]]: In finite Galois L/K, if $\sigma P=P'$ above a nonzero p, then $D(P'/p)=\sigma D(P/p)\sigma^{-1},\qquad I(P'/p)=\sigma I(P/p)\sigma^{-1}.$ The residue actions correspond under $\kappa(P)\to\kappa(P')$, $\bar a\mapsto\overline{\sigma a}$.

[F2] [[thm-galois-action-on-primes-above-a-prime-is-transitive]]: Let L/K be a finite Galois extension of number fields and p a nonzero prime of $\mathcal O_K$. Then $G=\operatorname{Gal}(L/K)$ acts transitively on the primes P above p.

[F3] [[cor-orders-of-decomposition-and-inertia-groups]]: For finite Galois L/K and nonzero $P\mid p$, writing e and f for its ramification index and residue degree, $|D(P/p)|=ef,\qquad |I(P/p)|=e,\qquad |D(P/p)/I(P/p)|=f.$ The prime P is unramified over p if and only if its inertia group is trivial.

[F4] [[thm-ramification-and-residue-degrees-in-towers]]: For $M/L/K$ and $\mathfrak Q\mid\mathfrak P\mid\mathfrak p$, $e(\mathfrak Q/\mathfrak p)=e(\mathfrak Q/\mathfrak P)e(\mathfrak P/\mathfrak p),\qquad f(\mathfrak Q/\mathfrak p)=f(\mathfrak Q/\mathfrak P)f(\mathfrak P/\mathfrak p).$

[F5] [[thm-normal-subgroups-and-quotients-in-the-galois-correspondence]]: Let $K/F$ be finite Galois, let $G=\operatorname{Gal}(K/F)$, let $H\le G$, and put $E=K^H$. For every $\sigma\in G$, $\operatorname{Gal}(K/\sigma(E))=\sigma H\sigma^{-1}.$ An intermediate field $E/F$ is Galois exactly when its corresponding subgroup is normal. In that case restriction gives a surjective homomorphism $G\to\operatorname{Gal}(E/F)$ with kernel $H$, and hence $\operatorname{Gal}(E/F)\cong G/H.$

## Proof

1.1 Within H, fixing Q is exactly the decomposition condition over either base. Acting trivially on $\kappa(Q)$ is likewise independent of which base is named. These prove both intersections. Restriction from D lands in D(P/p), and restriction from I lands in I(P/p), since integral elements of L are integral elements of M. [F1]

2.1 Given $\tau\in D(P/p)$, normality of L/K gives a lift $\sigma\in\operatorname{Gal}(M/K)$. Both $\sigma Q$ and Q lie over P. Transitivity for the Galois extension M/L gives $h\in H$ with $h\sigma Q=Q$. Then $h\sigma$ lies in D(Q/p) and restricts to tau. Its restriction kernel is the first intersection, proving the first exact sequence. [F2, F5, step 1.1]

3.1 The restriction image of I(Q/p) has order $|I(Q/p)|/|I(Q/P)|=e(Q/p)/e(Q/P)=e(P/p)$. This uses multiplicativity and positive ramification indices. The target I(P/p) has exactly that order, so the image equals the target. Together with the second intersection this proves the second exact sequence. [F3, F4, step 1.1] ∎
