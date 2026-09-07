---
id: cor-frobenius-compatibility-in-finite-towers
title: "Frobenius compatibility in finite towers"
kind: corollary
status: draft
origin: pipeline
deps: [thm-decomposition-and-inertia-in-towers, thm-unramified-frobenius-element-exists-uniquely, thm-ramification-and-residue-degrees-in-towers]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Chapter 8, Propositions 8.15\u20138.17, p.142"
      url: https://www.jmilne.org/math/CourseNotes/ANT.pdf
proof_strategy: direct argument
---

## Statement

Let M/L/K have M/K and L/K finite Galois, and let $Q\mid P\mid p$ be nonzero primes with Q unramified over p. Then
$$\operatorname{Frob}(Q/p)|_L=\operatorname{Frob}(P/p),\qquad \operatorname{Frob}(Q/P)=\operatorname{Frob}(Q/p)^{f(P/p)}.$$
If $M=L_1L_2$ with both $L_i/K$ finite Galois and Q unramified over p, the Frobenius elements at its two contractions determine $\operatorname{Frob}(Q/p)$ uniquely by restriction.

## Facts & Assumptions

**Given:** The data and hypotheses of the statement.

[F1] [[thm-decomposition-and-inertia-in-towers]]: Let M/L/K be a tower of number fields with M/K and L/K finite Galois, and fix nonzero primes $Q\mid P\mid p$. With $H=\operatorname{Gal}(M/L)$, $D(Q/P)=D(Q/p)\cap H,\qquad I(Q/P)=I(Q/p)\cap H.$ Restriction gives exact sequences $1\to D(Q/P)\to D(Q/p)\to D(P/p)\to1,$ $1\to I(Q/P)\to I(Q/p)\to I(P/p)\to1.$ The intersection identities also hold without L/K Galois; the displayed quotient assertions use that hypothesis.

[F2] [[thm-unramified-frobenius-element-exists-uniquely]]: For finite Galois L/K and a nonzero prime $P\mid p$ with $e(P/p)=1$, there is a unique $\operatorname{Frob}_P\in D(P/p)$ satisfying $\operatorname{Frob}_P(a)\equiv a^{Np}\pmod P\qquad(a\in\mathcal O_L).$ It is the arithmetic Frobenius element, the unique lift of the arithmetic Frobenius coset.

[F3] [[thm-ramification-and-residue-degrees-in-towers]]: For $M/L/K$ and $\mathfrak Q\mid\mathfrak P\mid\mathfrak p$, $e(\mathfrak Q/\mathfrak p)=e(\mathfrak Q/\mathfrak P)e(\mathfrak P/\mathfrak p),\qquad f(\mathfrak Q/\mathfrak p)=f(\mathfrak Q/\mathfrak P)f(\mathfrak P/\mathfrak p).$

## Proof

1.1 Multiplicativity of e and positivity give e=1 for both steps. Restriction of $\sigma=\operatorname{Frob}(Q/p)$ belongs to D(P/p), and its congruences on $\mathcal O_L$ reduce to the $q=Np$ power map at P. Uniqueness gives the first formula. [F1, F2, F3]

2.1 Set $f=f(P/p)$. The residue power map on $\kappa(P)$ has order f: this follows directly since $\kappa(P)$ has $q^f$ elements, while for $0<j<f$ the polynomial $T^{q^j}-T$ has fewer roots than that field. Since the unramified residue action identifies D(P/p) with its image, the restriction of $\sigma^f$ is identity. Thus $\sigma^f\in D(Q/P)$ and acts on $\kappa(Q)$ as the $q^f=NP$ power map. The relative unramified uniqueness gives the second formula. [F2, step 1.1]

3.1 An automorphism of a compositum is determined by its restrictions to the generating fields: if both restrictions are identity it fixes every field expression in those generators. Apply the first formula to each $L_i$ to obtain the stated determining pair. This assertion assumes the compositum prime is unramified. [step 1.1] ∎
