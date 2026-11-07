---
id: thm-hyper-kloosterman-composite-modulus-correlation
kind: theorem
title: "Squarefree composite-modulus correlation bound for rank-three hyper-Kloosterman sums"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 17
deps: [def-hyper-kloosterman-sum-rank-three, thm-kloosterman-sheaf-rank-conductor-monodromy, thm-deligne-quasi-orthogonality-for-geometrically-irreducible-trace-functions]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
verification:
  precheck: pending
sources:
  references:
    - title: "D. H. J. Polymath, New equidistribution estimates of Zhang type, and bounded gaps between primes"
      url: "https://arxiv.org/pdf/1402.0811v3"
      locator: "§6.10.2, Lemma 6.25 and Corollary 6.26, printed pp. 78–79"
    - title: "Fouvry–Kowalski–Michel, Trace Functions over Finite Fields and Their Applications"
      url: "https://people.math.ethz.ch/~kowalski/trace-functions-pisa.pdf"
      locator: "§4, Theorem 4.1, PDF pp. 12–13; Deligne correlation interface"
---

## Statement

Let $s,r_1,r_2\ge1$ be squarefree integers with $(s,r_1r_2)=1$, let $a_1$ be an invertible residue class modulo $r_1s$, and let $a_2$ be an invertible residue class modulo $r_2s$. Write $[r_1,r_2]$ for the least common multiple. Let $H\ge1$ satisfy $H\le(s[r_1,r_2])^C$ for some fixed $C>0$, and let $\Psi_H(h)=\Psi((h-h_0)/H)$, where $h_0\in\mathbb R$, $\Psi$ is infinitely differentiable and compactly supported, and every fixed-order derivative is bounded by a fixed power of $\log H$. Then, for every $\varepsilon>0$,
$$\left|\sum_{\substack{h\in\mathbb Z\\(h,s[r_1,r_2])=1}}\Psi_H(h)\operatorname{Kl}_3(a_1h;r_1s)\operatorname{Kl}_3(a_2h;r_2s)\right|\ll_{\varepsilon,C,\Psi}(s[r_1,r_2])^\varepsilon\left(\frac{H}{s[r_1,r_2]}+1\right)s^{1/2}[r_1,r_2]^{1/2}(a_2-a_1,r_1,r_2)^{1/2}(a_2r_1^3-a_1r_2^3,s)^{1/2},$$
where the gcd of a list of integers means their positive greatest common divisor.

## Statement references

[[def-hyper-kloosterman-sum-rank-three|Normalized Rank-Three Hyper-Kloosterman Sum]]

[[thm-kloosterman-sheaf-rank-conductor-monodromy|Rank, conductor, irreducibility, and monodromy of the rank-three Kloosterman sheaf]]

[[thm-deligne-quasi-orthogonality-for-geometrically-irreducible-trace-functions|Deligne Quasi-Orthogonality for Geometrically Irreducible Trace Functions]]

[Polymath8a, Lemma 6.25 and Corollary 6.26](https://arxiv.org/pdf/1402.0811v3)

[Fouvry–Kowalski–Michel, Theorem 4.1](https://people.math.ethz.ch/~kowalski/trace-functions-pisa.pdf)

## Facts & Assumptions

**Given:** Squarefree $s,r_1,r_2$, coprimality $(s,r_1r_2)=1$, unit classes $a_1,a_2$, a smooth cutoff $\Psi_H$, and the normalized sums in the statement.

[F1] [[def-hyper-kloosterman-sum-rank-three]]: for squarefree $q$ and unit $a$, $\operatorname{Kl}_3(a;q)$ is the normalized rank-three exponential sum defined by a sum over three unit variables with product $a$.

[F2] [[thm-kloosterman-sheaf-rank-conductor-monodromy]]: for odd primes, the normalized rank-three sum is the trace of a geometrically irreducible weight-zero middle-extension sheaf with rank three and FKM complexity six.

[F3] [[thm-deligne-quasi-orthogonality-for-geometrically-irreducible-trace-functions]]: for two geometrically irreducible weight-zero middle-extension sheaves, the conjugated trace correlation is bounded by three times the product of squared FKM complexities times the square root of the field size, after subtracting the unit-modulus main term in the geometrically isomorphic case.

## Proof obligation

Polymath's proof factors the modulus by the Chinese remainder theorem, treats the local cases $d_1=1$, $d_2=1$, and $d_1=d_2=p$, invokes the complete trace-correlation estimate, and completes the resulting sums before removing coprimality by Möbius inversion. These local calculations have not been reconstructed here. The direct Deligne supplier itself still has unsupplied trace-formula, weight, invariant-control, localization and geometric descent proofs, so this item remains escalated.
