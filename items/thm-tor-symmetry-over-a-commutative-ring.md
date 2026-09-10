---
id: thm-tor-symmetry-over-a-commutative-ring
title: "Tor is symmetric over a commutative ring"
kind: theorem
status: published
origin: pipeline
deps: ["def-balanced-tor-bifunctor", "def-tor-by-resolving-the-left-module", "def-tor-by-resolving-the-right-module", "thm-symmetry-and-associativity-over-a-commutative-ring", "prop-each-tor-construction-is-covariant-in-both-variables", "prop-the-tor-balance-isomorphism-is-natural-and-coherent-under-change-of-resolutions", "def-dependent-choice"]
proof_strategy: direct
sources:
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
  verified:
    model: gpt-6-astra
    verdict: certify
    date: 2026-09-09
    scope: owner-authorized-local-choice-contract-repair
    delegated_by: owner
---

## Statement

Assume Dependent Choice (DC). If $R$ is commutative and $M,N$ are
$R$-modules with the projective resolutions used for Tor supplied, then
$\operatorname{Tor}^R_i(M,N)\cong\operatorname{Tor}^R_i(N,M)$ naturally
for every $i\ge0$.

## Proof

**Given:** a commutative ring, modules $M,N$, supplied projective
resolutions, and [[def-dependent-choice]]. The ordinary tensor swap is
[[thm-symmetry-and-associativity-over-a-commutative-ring]].

1.1 Use the supplied resolution $P_\bullet\to M$. Over a commutative ring, turning a left module into a right module by $pr=rp$ preserves module maps, surjections and their lifting diagrams, so it preserves projectivity and exactness. Thus $P$ is a projective resolution on either side. The termwise swaps $P_j\otimes_RN\to N\otimes_RP_j$, $p\otimes n\mapsto n\otimes p$, are inverse to the opposite swaps. Both differential composites send $p\otimes n$ to $n\otimes d_Pp$, so these are chain maps. [given, algebra]

2.1 The first complex computes $\operatorname{Tor}^R_i(M,N)$ through [[def-tor-by-resolving-the-right-module]], and the second computes $\operatorname{Tor}^R_i(N,M)$ through [[def-tor-by-resolving-the-left-module]]. Taking homology of the chain isomorphism gives the desired isomorphism for these supplied presentations. Only one factor has a nonzero chain degree, so no double-complex sign is inserted in this termwise swap. [step 1.1, algebra]

3.1 Given maps $M\to M'$ and $N\to N'$, DC supplies the comparison maps used in [[prop-each-tor-construction-is-covariant-in-both-variables]]. A comparison $f:P\to P'$ and a map $v:N\to N'$ commute with the swaps since both composites send $p\otimes n$ to $v(n)\otimes f(p)$. Homology therefore gives naturality. Independence of lifts follows from the cited covariance proposition, and [[prop-the-tor-balance-isomorphism-is-natural-and-coherent-under-change-of-resolutions]] identifies these presentations with [[def-balanced-tor-bifunctor]] coherently. This proves the natural balanced Tor symmetry. [step 1.1, step 2.1, algebra] ∎

## Remarks

The chain isomorphism $P_\bullet\otimes_RN\cong N\otimes_RP_\bullet$
and its homology isomorphism are choice-free for fixed $P$. DC is used
only for the arbitrary comparison maps and resolution-independent natural
bifunctor interpretation. This is an upper bound on the choice used by
the supplied proof, not a claim that DC is necessary for tensor symmetry.
