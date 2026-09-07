---
id: thm-decomposition-group-and-completion
title: "Decomposition group and completion"
kind: theorem
status: draft
origin: pipeline
deps: [def-decomposition-group-of-a-prime, lem-number-field-completions-as-local-polynomial-factors, thm-galois-action-on-primes-above-a-prime-is-transitive, cor-galois-prime-decomposition-efg, thm-orbit-stabilizer]
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
    - title: "Chapter 8, Proposition 8.10, p.139"
      url: https://www.jmilne.org/math/CourseNotes/ANT.pdf
proof_strategy: direct argument
---

## Statement

Let L/K be finite Galois and $P\mid p$ nonzero primes. Then $L_P/K_p$ is finite Galois of degree $e(P/p)f(P/p)$. Continuous extension gives a canonical isomorphism
$$D(P/p)\ \cong\ \operatorname{Gal}(L_P/K_p),$$
whose inverse restricts an automorphism to the embedded copy of L.

## Facts & Assumptions

**Given:** The data and hypotheses of the statement.

[F1] [[def-decomposition-group-of-a-prime]]: For finite Galois L/K and a chosen nonzero prime $P\mid p$, the **decomposition group** is the stabilizer $D(P/p)=\{\sigma\in\operatorname{Gal}(L/K):\sigma(P)=P\}.$ It is a subgroup: identity stabilizes P and stabilizers are closed under composition and inverse. The prime P, not just p, is part of the data.

[F2] [[lem-number-field-completions-as-local-polynomial-factors]]: Let L/K be a finite separable extension of number fields, $L=K(\alpha)$ with monic minimal polynomial F, and p a finite prime of K. Factor F over $K_p$ into distinct monic irreducibles $F_i$. Then $L\otimes_K K_p\cong\prod_i K_p[T]/(F_i)\cong\prod_{P\mid p}L_P,\qquad\sum_{P\mid p}[L_P:K_p]=[L:K].$ Use extending absolute values on each factor; their positive powers give the normalized number-field completions. Under this product, local multiplication matrices give $N_{L/K}(x)=\prod_{P\mid p}N_{L_P/K_p}(x)$ and $\operatorname{Tr}_{L/K}(x)=\sum_{P\mid p}\operatorname{Tr}_{L_P/K_p}(x)$, with values embedded in $K_p$.

[F3] [[cor-galois-prime-decomposition-efg]]: For a finite Galois extension L/K and nonzero prime p, every P above p has the same ramification index e and residue degree f. If there are g such primes, then $efg=[L:K]$.

[F4] [[thm-orbit-stabilizer]]: Let $G$ act on $X$ and let $x\in X$. The rule $\Phi:G/G_x\longrightarrow G\cdot x,\qquad \Phi(gG_x)=g\cdot x,$ is well-defined and bijective. Thus every orbit is naturally in bijection with the left cosets of its stabilizer.

[F5] [[thm-galois-action-on-primes-above-a-prime-is-transitive]]: In a finite Galois extension of number fields, the Galois group acts transitively on the primes above a fixed nonzero prime of the base.

## Proof

1.1 Every element of D preserves $\operatorname{ord}_P$, so preserves the absolute value at P and extends uniquely to the completion. It fixes $K_p$ by density of K. Extension is an injective homomorphism since L embeds in its completion. [F1]

1.2 Write $L=K(\alpha)$. The local factor description gives $L_P=K_p(\alpha)$ and a separable minimal polynomial over $K_p$ dividing the global minimal polynomial. Since L/K is normal, all global roots already lie in L. Thus the local polynomial splits in $L_P$, which proves that this finite extension is Galois. [F2]

2.1 For each prime Q above p the injection in the first step gives $|D(Q/p)|\le[L_Q:K_p]$. Transitivity identifies all stabilizer orders with $|G|/g$ by orbit-stabilizer. Summing these inequalities over the g primes gives $|G|\le\sum_Q[L_Q:K_p]=[L:K]=|G|$. Thus every inequality is equality. In particular the injection at P accounts for every local automorphism, since the local extension is Galois. Each is consequently the continuous extension of a unique element of D; its restriction is that element. [F2, F3, F4, F5, step 1.1, step 1.2]

3.1 Orbit-stabilizer on the transitive prime set gives $|D|=|G|/g$. Since $efg=[L:K]=|G|$, this order, and therefore the local Galois degree, is ef. If L=K the maps and groups are identities. [F3, F4, step 1.1, step 2.1] ∎
