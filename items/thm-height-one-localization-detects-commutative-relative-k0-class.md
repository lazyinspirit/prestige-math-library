---
id: thm-height-one-localization-detects-commutative-relative-k0-class
kind: theorem
title: Height-One Localization Detects a Commutative Relative K0 Class
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps:
- def-relative-algebraic-k0-group
- thm-relative-k0-of-a-dedekind-domain-is-the-divisor-group
- def-localisation-at-a-prime-ideal
- thm-localisation-of-modules-is-exact
- def-axiom-of-choice
- lem-commutative-iwasawa-order-relative-k0-is-detected-at-height-one
verification:
  precheck: pass
sources:
  references:
  - title: Weibel, The K-book, Chapter V, §6.1
    url: https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.pdf
  - title: Johnston–Nickel, Proposition 6.5
    url: https://arxiv.org/pdf/2010.03186
---

## Statement

Assume the Axiom of Choice. Let $R$ be a Dedekind domain and let $K=\operatorname{Frac}(R)$. For each nonzero prime ideal $\mathfrak p$, put $R_{\mathfrak p}=(R\setminus\mathfrak p)^{-1}R$ and define $\operatorname{loc}_{\mathfrak p}:K_0(R,K)\to K_0(R_{\mathfrak p},K)$ on triples by $\operatorname{loc}_{\mathfrak p}([P,\alpha,Q])=[R_{\mathfrak p}\otimes_RP,\alpha,R_{\mathfrak p}\otimes_RQ]$, where $\alpha$ is the induced generic isomorphism over $K$. If $x\in K_0(R,K)$ satisfies $\operatorname{loc}_{\mathfrak p}(x)=0$ for every nonzero prime ideal $\mathfrak p$ (equivalently, at every height-one prime), then $x=0$.


More generally, the following commutative-order detection statement also holds. Let $R$ be a commutative normal noetherian local domain with field of fractions $F$. Let $\Lambda$ be a commutative finite projective $R$-algebra, and suppose $Q=F\otimes_R\Lambda$ is a finite product of fields. For a height-one prime $\mathfrak p$ of $R$, write $\Lambda_{\mathfrak p}=R_{\mathfrak p}\otimes_R\Lambda$. Then
$$
K_0(\Lambda,Q)\longrightarrow\bigoplus_{\operatorname{ht}\mathfrak p=1}K_0(\Lambda_{\mathfrak p},Q)
$$
is defined by localization of triples and is injective. This includes $R=\mathbb Z_p[\![T]\!]$, a finite abelian group $H$, an idempotent $e\in R[H]$ and $\Lambda=eR[H]$, with $Q=\operatorname{Frac}(R)\otimes_R\Lambda$. Localization is indexed by base primes, as in the source.

## Statement references

[Weibel, *The K-book*, Chapter V, §6.1](https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.pdf)

## Facts & Assumptions

**Given:** A Dedekind domain $R$, its fraction field $K$, and a relative class $x\in K_0(R,K)$.

[F1] [[thm-relative-k0-of-a-dedekind-domain-is-the-divisor-group]]: a relative class corresponds to a divisor, and its localization at $R_{\mathfrak p}$ is the coefficient of $[\mathfrak p]$ in that divisor.

[F2] [[def-localisation-at-a-prime-ideal]]: $R_{\mathfrak p}=(R\setminus\mathfrak p)^{-1}R$.

[F3] [[thm-localisation-of-modules-is-exact]]: localization preserves the short exact sequences of projective modules used in the relative-triple relations, so it induces the displayed map on relative groups.

[F4] [[lem-commutative-iwasawa-order-relative-k0-is-detected-at-height-one]] gives the normal-local-base commutative-order and Iwasawa cases.

[A1] [[def-axiom-of-choice]] is retained in both cases.

## Proof

**Proof technique:** direct use of divisor coordinates.

1.1 Let $D=\sum_{\mathfrak p\ne0}n_{\mathfrak p}[\mathfrak p]$ be the divisor corresponding to $x$ by [F1]. For each nonzero prime $\mathfrak p$, [F2] identifies the localization ring and [F3] ensures that localization sends relative triples to relative triples; [F1] then says the localized class is the coordinate $n_{\mathfrak p}$. The hypothesis gives $n_{\mathfrak p}=0$. [F1, F2, F3, given, algebra]

2.1 Every coefficient of $D$ is zero by step 1.1, hence $D=0$. Since [F1] is an isomorphism, its inverse sends $D=0$ to $x=0$. [F1, step 1.1, algebra]


3.1 For the normal-local-base statement, apply [F4]; its hypotheses and localization convention are exactly those in the second statement paragraph. This proves in particular the original one-variable commutative Iwasawa-order interface. [A1, F4, algebra] ∎
