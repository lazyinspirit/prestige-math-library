---
id: prop-tor-zero-is-the-tensor-product-in-either-construction
title: "Degree-zero Tor is the tensor product in either construction"
kind: proposition
status: published
origin: pipeline
deps: ["def-tor-by-resolving-the-left-module", "def-tor-by-resolving-the-right-module", "thm-universal-property-of-module-tensor-products"]
proof_strategy: direct
sources:
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
  verified:
    model: "gpt-6-astra"
    verdict: pass
    date: 2026-09-09
    scope: "Owner-authorized local defect repair; no independent judge or owner audit"
    delegated_by: owner
---

## Statement

For a right $R$-module $N$ and a left $R$-module $M$ over any unital ring, supplied projective resolutions in either variable give canonical degree-zero identifications with $N\otimes_RM$. No choice axiom is needed once the resolutions are supplied.

## Proof

**Given:** a projective resolution $P_\bullet\twoheadrightarrow M$ and a projective resolution $Q_\bullet\twoheadrightarrow N$.

1.1 Write $d:P_1\to P_0$ and $\epsilon:P_0\to M$. The complex is concentrated in nonnegative degrees, so its degree-zero homology is the abelian group $T=(N\otimes_RP_0)/\operatorname{im}(1\otimes d)$, by [[def-tor-by-resolving-the-left-module]]. The balanced formula $n\otimes p\mapsto n\otimes\epsilon(p)$ induces $a:T\to N\otimes_RM$ by [[thm-universal-property-of-module-tensor-products]], since $\epsilon d=0$. [given, algebra]

2.1 For $n\in N$ and $m\in M$, define $b(n,m)=[n\otimes p]$ using any lift $\epsilon(p)=m$. Any two lifts differ by $d(u)$, so their classes agree. Sums and scalar multiples of lifts show that $b$ is additive in both variables and $b(nr,m)=b(n,rm)$. Thus the tensor universal property gives $\bar b:N\otimes_RM\to T$. This definition uses unique classes, not a simultaneous selection of lifts. [step 1.1, algebra]

3.1 The composites $a\bar b$ and $\bar ba$ fix respectively $n\otimes m$ and $[n\otimes p]$. These elements generate the two abelian groups, so the maps are inverse. [step 1.1, step 2.1, algebra]

4.1 Write $e:Q_1\to Q_0$ and $\eta:Q_0\to N$. For the right-resolved construction in [[def-tor-by-resolving-the-right-module]], use $U=(Q_0\otimes_RM)/\operatorname{im}(e\otimes1)$. The augmentation gives $U\to N\otimes_RM$; its inverse sends $n\otimes m$ to $[q\otimes m]$ for any $\eta(q)=n$. Differences of lifts belong to $\operatorname{im}e$, so the class is unique, and balancing follows from using $qr$ as a lift of $nr$. Both composites fix the generating tensors, proving the second canonical identification. [step 2.1, step 3.1, algebra] ∎
