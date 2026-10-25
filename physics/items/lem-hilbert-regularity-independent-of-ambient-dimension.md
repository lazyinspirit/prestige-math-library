---
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading, followed by recorded Step 7 current repair argument acceptance. The repair receipt records local author review; no independent repair audit is claimed. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-29.md"
      - "research/frontier-38-owner-30-alpha-batch-29-5a.md"
      - "research/frontier-38-owner-30-step7-v2/step7-v2-initial-r1-u29.json"
    content_sha256: "0e2ec7beeebf81323e3e9075f5009fe7ac52da08cb2c2f48a53908d351dcb569"
id: lem-hilbert-regularity-independent-of-ambient-dimension
kind: lemma
title: "A Hilbert polynomial bounds regularity independently of ambient dimension"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - lem-hilbert-regularity-propagation
  - lem-hilbert-uniform-regularity-fixed-polynomial
  - thm-hilbert-polynomial-degree-support-dimension
  - lem-proper-cohomology-field-extension
  - thm-hilbert-polynomial-coherent-sheaf
  - lem-euler-characteristic-additive-short-exact
  - thm-cohomology-projective-space-twisting-sheaves
  - thm-finiteness-of-associated-primes
  - thm-zero-divisors-on-a-module
  - def-axiom-of-choice
  - def-dependent-choice
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Nitsure, Construction of Hilbert and Quot Schemes, Sections 2–5"
      url: "https://arxiv.org/pdf/math/0504590"
    - title: "Grothendieck, Les schémas de Hilbert, Bourbaki 221, Section 3"
      url: "https://www.numdam.org/item/SB_1960-1961__6__249_0.pdf"
---

## Statement

Assume AC and DC. For every numerical polynomial $P$ there is an integer $b(P)\ge0$ such that, over every field and for every $n,p\ge0$, the kernel and quotient of any coherent quotient $\mathcal O_{\mathbb P^n}^{p}\twoheadrightarrow F$ with Hilbert polynomial $P$ are $b(P)$-regular. The bound is independent of both $n$ and $p$. For realizable nonzero $P$ it can be defined recursively by $a=b(\Delta P)$, $b(P)=a+\max(0,P(a))+1$, where $\Delta P(t)=P(t)-P(t-1)$ and $b(0)=0$. For unrealizable polynomials any bound suffices.

## Facts & Assumptions

**Given:** AC and DC and the hypotheses of the statement.

[F1] Regularity propagation and section multiplication are supplied in [[lem-hilbert-regularity-propagation]]. For fixed $n,p$ and the polynomial of $I$, [[lem-hilbert-uniform-regularity-fixed-polynomial]] supplies some regularity bound; propagation therefore gives eventual vanishing of every positive cohomology group of $I$. Associated points are finite and detect zero divisors ([[thm-finiteness-of-associated-primes]], [[thm-zero-divisors-on-a-module]]).

[F2] A nonzero coherent sheaf on projective space has Hilbert polynomial of degree equal to its support dimension and nonzero leading coefficient ([[thm-hilbert-polynomial-degree-support-dimension]]). In particular zero polynomial means the zero sheaf.

[F3] On projective space, coherent cohomology commutes with every field extension ([[lem-proper-cohomology-field-extension]]). Twists commute with pullback, as is seen from their standard-chart transition functions; hence the Hilbert polynomial and regularity are preserved. Vanishing descends because a vector space whose scalar extension is zero is itself zero. Flatness also preserves the quotient sequence and its kernel.

[F4] The Hilbert polynomial equals the Euler characteristic at every integral twist ([[thm-hilbert-polynomial-coherent-sheaf]]), and Euler characteristic is additive in coherent exact sequences ([[lem-euler-characteristic-additive-short-exact]]). The cohomology of twists gives $h^0(\mathcal O(t))=\binom{n+t}{n}$ for $t\ge0$ and shows that $\mathcal O$ is $0$-regular ([[thm-cohomology-projective-space-twisting-sheaves]]).

## Proof

1.1 Induct on the degree of a realizable nonzero $P$, adjoining the zero polynomial as the initial case. If $P=0$, [F2] gives $F=0$ and the kernel is $\mathcal O^p$, which is $0$-regular. If $n=0$, all coherent sheaves are regular in every degree, so the proposed bound also works. Otherwise extend to the infinite field $k(u)$ using [F3], and choose a hyperplane $H$ avoiding the associated points of $F$ and of its kernel $I$. Tor exactness gives $0\to I_H\to\mathcal O_H^p\to F_H\to0$, and the restriction sequence and [F4] give $P_{F_H}=\Delta P$. For degree-zero $P$ the hyperplane misses the finite support, so $F_H=0$; in all other cases [F2] reduces the induction degree. Thus $I_H$ is $a$-regular with $a=b(\Delta P)$, independent of $n,p$. [F1, F2, F3, F4, construct]

2.1 The exact hyperplane sequence and [F1] give $H^i(I(t))=0$ for $i\ge2$ and $t\ge a-i$: compare successive twists using vanishing of the two adjacent groups of $I_H$, then iterate to an eventual-vanishing twist supplied by [F1]. They also show that $h^1(I(t))$ decreases strictly after twist $a$ until it becomes zero, because equality $h^1(I(t))=h^1(I(t+1))$ for $t\ge a$ makes $H^0(I(t+1))\to H^0(I_H(t+1))$ onto; multiplication for $I_H$ propagates that surjectivity, so equality would persist to the eventual zero value. At twist $a\ge0$, the vanishings and [F4] therefore give $$h^1(I(a))=h^0(I(a))-\chi(I(a))\le p\binom{n+a}{n}-\left(p\binom{n+a}{n}-P(a)\right)=P(a).$$ The entire ambient term cancels. After at most $\max(0,P(a))$ decreases, $H^1(I(b(P)-1))=0$; the other regularity positions vanish by the sharper range above. Thus $I$ is $b(P)$-regular and the exact sequence with $\mathcal O^p$ makes $F$ regular as well. Field descent in [F3] proves the result over all fields. [F1, F3, F4, step 1.1, algebra] ∎
