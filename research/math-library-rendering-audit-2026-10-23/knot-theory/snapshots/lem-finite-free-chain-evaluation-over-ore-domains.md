---
id: lem-finite-free-chain-evaluation-over-ore-domains
kind: lemma
title: Finite-free chain evaluation under the Blanchfield coefficient hypotheses
status: published
origin: pipeline
deps: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Cochran, Orr and Teichner, Knot concordance, Whitney towers and
        L2-signatures, proof of Theorem 2.13
      url: https://arxiv.org/pdf/math/9908117
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
---

## Statement

Let $R$ be an associative unital ring with $1\ne0$ and no zero divisors, embedded as a unital subring in a division ring $K$, let $N=K/R$ as a right $R$-module, and let $C_*$ be a chain complex of right $R$-modules with $C_0,C_1$ finite free and $C_j=0$ for $j<0$. If either $H_0(C_*)=0$ or every right ideal of $R$ is principal, then restriction to cycles induces an isomorphism of abelian groups
$$\kappa:H^1(\operatorname{Hom}_R(C_*,N))\longrightarrow\operatorname{Hom}_R(H_1(C_*),N).$$
If the coefficient Hom groups carry a compatible commuting left action, this is an isomorphism for that action as well. No choice principle is assumed.

## Facts & Assumptions

**Given:** The displayed ring embedding, finite supplied free bases in degrees zero and one, and one of the two alternatives in the Statement. Write $Z_1=\ker d_1$, $B_1=\operatorname{im}d_2$, and $B_0=\operatorname{im}d_1$.

## Proof

1.1 A cochain $f:C_1\to N$ is a cocycle precisely when $f(B_1)=0$. Restricting to $Z_1$ therefore induces a map $H_1=Z_1/B_1\to N$. A coboundary $g d_1$ vanishes on $Z_1$, so this induces the stated well-defined map $\kappa$. It is onto if every map $Z_1\to N$ vanishing on $B_1$ extends to $C_1$. It is injective if every map $B_0\to N$ extends to $C_0$: indeed a cocycle restricting to zero on $Z_1$ factors uniquely through $d_1:C_1\to B_0$, and such an extension expresses it as a coboundary. [given, construct, algebra]

1.2 For the principal-right-ideal alternative, $N$ is right divisible: given $n=q+R\in N$ and $0\ne a\in R$, the element $q a^{-1}+R$ multiplied on the right by $a$ equals $n$. We prove by induction on $m$ that any right-linear map $f:S\to N$ from any right submodule $S\subseteq R^m$ extends to $R^m$. For $m=0$ this is immediate. Let the projection of $S$ to the last coordinate be the right ideal $J$. If $J=0$, apply induction on the first $m-1$ coordinates and give the last basis vector value zero. Otherwise write $J=aR$ with $a\ne0$ and take $z=(z',a)\in S$. Then $S=S'\oplus zR$, where $S'=S\cap(R^{m-1}\times0)$: subtract $zr$ from an element with last coordinate $ar$, and uniqueness follows from the absence of zero divisors. [given, construct, algebra]

2.1 If $H_0=0$, then $d_1:C_1\to C_0$ is onto. Lift the finitely many given basis vectors of $C_0$ and extend linearly to a section $s:C_0\to C_1$. This gives $C_1=Z_1\oplus s(C_0)$. Extend a map from $Z_1$ by zero on the second summand to prove surjectivity in step 1.1. Here $B_0=C_0$, so the extension required for injectivity is automatic. The section uses only finitely many selections. [step 1.1, given, construct, algebra]

2.2 Extend $f|_{S'}$ to $g:R^{m-1}\to N$ by induction. Right divisibility supplies $v\in N$ with $va=f(z)-g(z')$. Define the extension on $R^m$ by $(u,r)\mapsto g(u)+vr$. It agrees with $f$ on $S'$ and on $z$, hence on all of $S$. This completes the finite induction, using one ideal generator, one lift, and one division at each of finitely many stages. It does not use a maximal extension argument or an infinite family of choices. [step 1.2, construct, algebra]

3.1 Apply the extension result of step 2.2 first to $Z_1\subseteq C_1$ and then to $B_0\subseteq C_0$, using the supplied finite bases. These are exactly the surjectivity and injectivity requirements of step 1.1. The first alternative was established in step 2.1, so $\kappa$ is an isomorphism in either case. Restriction and passage to cycles commute with every compatible left coefficient action; thus the inverse, being unique, also respects that action. [step 1.1, step 2.1, step 2.2, algebra] ∎
