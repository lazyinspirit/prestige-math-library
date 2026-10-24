---
id: lem-nonaffine-multiplication-pullback-symmetric-line-bundle
kind: lemma
title: "Multiplication pulls back a symmetric line bundle to its square power"
status: published
origin: pipeline
deps: [def-axiom-of-choice, def-dependent-choice, def-abelian-variety-over-a-field, prop-abelian-variety-commutativity-from-rigidity, lem-nonaffine-theorem-of-the-cube-for-abelian-variety]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-24.md"
      - "research/frontier-38-owner-30-alpha-batch-24-5a.md"
      - "research/frontier-38-owner-30-step5-hash-24-post-5a.json"
    content_sha256: "8fe3aa8862a2db18473b0f534b33e69290f6b546fe8c2f3986fe72997ac2a711"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Stacks Project, Lemma 39.9.7"
      url: https://stacks.math.columbia.edu/tag/0BFF
---

## Statement

Assume AC and DC. Let $A/k$ be an abelian variety over any field and $L$ an invertible sheaf on $A$. For every integer $n$, with $[n]:A\to A$ denoting multiplication by $n$, there is an isomorphism
$$[n]^*L\cong L^{\otimes n(n+1)/2}\otimes([-1]^*L)^{\otimes n(n-1)/2}.$$
In particular, if $L$ is symmetric, meaning $[-1]^*L\cong L$, then $[n]^*L\cong L^{\otimes n^2}$. Negative tensor powers mean powers of the dual; these are isomorphisms of line bundles, without a claim of canonical trivialization at the identity.

## Facts & Assumptions

[F1] The group law of $A$ is commutative under AC. Thus the integer multiplication maps are homomorphisms, $[r]+[s]=[r+s]$, $[r]\circ[s]=[rs]$, and $[-1]^2=\operatorname{id}_A$. ([[def-abelian-variety-over-a-field]], [[prop-abelian-variety-commutativity-from-rigidity]])

[F2] For any invertible sheaf $L$, the alternating tensor product of the seven sum pullbacks on $A^3$ is trivial, under AC and DC. ([[lem-nonaffine-theorem-of-the-cube-for-abelian-variety]])

## Proof

**Given:** AC, DC, $A/k$, an invertible sheaf $L$, and an integer $n$.

1.1 Write $P_r=[r]^*L$ and $J=[-1]^*L$. The constant map $[0]$ pulls back $L$ to $\mathcal O_A\otimes_k e^*L\cong\mathcal O_A$, since $e^*L$ is one-dimensional. Thus the formula holds at $r=0,1,-1$. Pulling [F2] back along $x\mapsto(x,x,-x)$ gives $L^{\otimes3}\otimes J\cong P_2$, because the two zero sum maps pull back to trivial bundles. This proves the formula at $r=2$. [F1, F2, given, algebra]

2.1 For $r\ge2$ pull [F2] back along $x\mapsto(x,x,[r-1]x)$. The resulting relation is $P_{r+1}\otimes L^{\otimes2}\otimes P_{r-1}\cong P_2\otimes P_r^{\otimes2}$. Suppose the formula holds at $r$ and $r-1$. Substituting it and the formula for $P_2$, then cancelling invertible factors, gives the exponents $3+2r(r+1)/2-2-(r-1)r/2=(r+1)(r+2)/2$ on $L$ and $1+2r(r-1)/2-(r-1)(r-2)/2=r(r+1)/2$ on $J$. Induction proves the assertion for all positive integers. [F1, F2, step 1.1, algebra]

3.1 If $n=-r$ with $r>0$, then $P_{-r}=[-1]^*P_r$ by [F1]. Pulling the proved formula back by $[-1]$ interchanges $L$ and $J$ and yields the exponents $r(r-1)/2=n(n+1)/2$ on $L$ and $r(r+1)/2=n(n-1)/2$ on $J$. This proves every integer case. If $J\cong L$, the two exponents add to $n^2$, giving the symmetric formula. All equalities use line-bundle tensor cancellation and morphism identities, which apply in every characteristic, including when $n$ vanishes in $k$. [F1, step 1.1, step 2.1, algebra] ∎
