---
id: thm-decomposition-and-inertia-fixed-fields
title: "Decomposition and inertia fixed fields"
kind: theorem
status: draft
origin: pipeline
deps: [thm-decomposition-inertia-exact-sequence, cor-orders-of-decomposition-and-inertia-groups, thm-ramification-and-residue-degrees-in-towers, thm-normal-subgroups-and-quotients-in-the-galois-correspondence, thm-galois-action-on-primes-above-a-prime-is-transitive]
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
    - title: "Chapter 8, Proposition 8.11, p.140; Stein Propositions 9.3.3\u20139.3.4, pp.104\u2013105"
      url: https://www.jmilne.org/math/CourseNotes/ANT.pdf
proof_strategy: direct argument
---

## Statement

In finite Galois L/K fix nonzero $P\mid p$, put $D=D(P/p)$, $I=I(P/p)$, $E=L^D$, $U=L^I$, and let $p_E,p_U$ be the contractions of P. Write $e=e(P/p)$ and $f=f(P/p)$. Then P is the only prime over $p_E$, and $e(p_E/p)=f(p_E/p)=1$. The extension U/E is cyclic of degree f and is unramified at $p_U\mid p_E$ with residue degree f. The extension L/U is totally ramified at $P\mid p_U$ of degree e. If D is normal in $\operatorname{Gal}(L/K)$, p splits completely in E/K. For nonnormal D only the distinguished prime is asserted to have e=f=1. Moreover E is the smallest intermediate field F such that P is the only prime above $P\cap\mathcal O_F$.

## Facts & Assumptions

**Given:** The data and hypotheses of the statement.

[F1] [[thm-decomposition-inertia-exact-sequence]]: For finite Galois L/K and fixed nonzero $P\mid p$, reduction gives the exact sequence $1\longrightarrow I(P/p)\longrightarrow D(P/p)\longrightarrow \operatorname{Gal}(\kappa(P)/\kappa(p))\longrightarrow1.$ In particular $D(P/p)/I(P/p)$ is canonically the residue Galois group.

[F2] [[cor-orders-of-decomposition-and-inertia-groups]]: For finite Galois L/K and nonzero $P\mid p$, writing e and f for its ramification index and residue degree, $|D(P/p)|=ef,\qquad |I(P/p)|=e,\qquad |D(P/p)/I(P/p)|=f.$ The prime P is unramified over p if and only if its inertia group is trivial.

[F3] [[thm-ramification-and-residue-degrees-in-towers]]: For $M/L/K$ and $\mathfrak Q\mid\mathfrak P\mid\mathfrak p$, $e(\mathfrak Q/\mathfrak p)=e(\mathfrak Q/\mathfrak P)e(\mathfrak P/\mathfrak p),\qquad f(\mathfrak Q/\mathfrak p)=f(\mathfrak Q/\mathfrak P)f(\mathfrak P/\mathfrak p).$

[F4] [[thm-normal-subgroups-and-quotients-in-the-galois-correspondence]]: Let $K/F$ be finite Galois, let $G=\operatorname{Gal}(K/F)$, let $H\le G$, and put $E=K^H$. For every $\sigma\in G$, $\operatorname{Gal}(K/\sigma(E))=\sigma H\sigma^{-1}.$ An intermediate field $E/F$ is Galois exactly when its corresponding subgroup is normal. In that case restriction gives a surjective homomorphism $G\to\operatorname{Gal}(E/F)$ with kernel $H$, and hence $\operatorname{Gal}(E/F)\cong G/H.$

[F5] [[thm-galois-action-on-primes-above-a-prime-is-transitive]]: Let L/K be a finite Galois extension of number fields and p a nonzero prime of $\mathcal O_K$. Then $G=\operatorname{Gal}(L/K)$ acts transitively on the primes P above p.

## Proof

1.1 The group of L/E is D. It acts transitively on primes above $p_E$ and fixes P, so P is the unique such prime. For L/E its decomposition group is D and its inertia group is I, directly from their definitions. The order formulas give $e(P/p_E)=|I|=e$ and $f(P/p_E)=|D|/|I|=f$. Multiplicativity then gives $e(p_E/p)=f(p_E/p)=1$. [F2, F3, F5]

2.1 Since I is normal in D, U/E is Galois with group $D/I$, cyclic of order f by the residue exact sequence. The group of L/U is I, which fixes P and acts trivially on its residue field. Thus P is unique over $p_U$, $e(P/p_U)=|I|=e$ and $f(P/p_U)=1$. Multiplicativity now gives $e(p_U/p_E)=1$ and $f(p_U/p_E)=f$. This proves both the unramified middle step and total ramification in the top step. [F1, F2, F3, F4, F5, step 1.1]

2.2 If D is normal in G, E/K is Galois. Its group transports $p_E$ to every prime above p; such transportation preserves ideal exponents and residue degrees. Each therefore has e=f=1, which is complete splitting. Without normality this transportation conclusion is not used. [F4, F5, step 1.1]

3.1 For any intermediate F with uniqueness of P above its contraction, every automorphism in $\operatorname{Gal}(L/F)$ fixes P, hence this subgroup lies in D. Taking fixed fields gives $E\subseteq F$. Conversely E itself has the uniqueness property proved above. Thus it is the smallest such intermediate field. [F4, step 1.1] ∎
