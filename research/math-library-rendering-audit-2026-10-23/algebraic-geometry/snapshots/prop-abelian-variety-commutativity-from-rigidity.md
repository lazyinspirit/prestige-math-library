---
id: prop-abelian-variety-commutativity-from-rigidity
kind: proposition
title: "A proper geometrically connected group variety is commutative"
status: published
origin: pipeline
deps: [def-axiom-of-choice, def-abelian-variety-over-a-field, lem-nonaffine-rigidity-proper-geometrically-integral-factor]
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
    content_sha256: "b301abd378650bbfec80b674bbb9b29c285ab7a72ca2780651989e154bae036f"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Milne, Algebraic Groups (2022), 8.13 and 8.20"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
    - title: "Brion, Some structure theorems for algebraic groups, Corollary 3.1.7"
      url: https://arxiv.org/pdf/1509.03059
---

## Statement

Assume the Axiom of Choice. Every abelian variety over a field is commutative. More generally, if $A$ is an abelian variety and $H$ a connected separated finite-type $k$-group scheme, every group homomorphism $u:A\to H$ has central image, scheme theoretically.

## Facts & Assumptions

[F1] Abelian varieties are proper geometrically integral group varieties, with a rational identity. ([[def-abelian-variety-over-a-field]])

[F2] A morphism from $X\times Y$ with $X$ proper geometrically integral and rationally pointed, $Y$ connected, and separated target, constant on a rational fibre, factors through $Y$, under AC. ([[lem-nonaffine-rigidity-proper-geometrically-integral-factor]])

## Proof

**Given:** AC, an abelian variety $A$, a connected finite-type group scheme $H$, and a homomorphism $u:A\to H$.

1.1 Form the morphism $c:A\times_kH\to H$ given on scheme-valued points by $c(a,h)=u(a)h u(a)^{-1}h^{-1}$. Group multiplication and inverse show that it is a scheme morphism. On $A\times\{e_H\}$ it is identically $e_H$. Apply [F2] with $X=A$, $Y=H$, and $Z=H$; algebraic group schemes here are separated. Therefore $c(a,h)=c(e_A,h)=e_H$ as an identity of scheme morphisms. Equivalently, conjugation of $u(a)$ by every scheme-valued point of $H$ fixes it. This is precisely the statement that $u$ factors through the scheme-theoretic centre. [F1, F2, given, algebra]

2.1 Take $H=A$ and $u=\operatorname{id}_A$ in step 1.1. The equality $aha^{-1}h^{-1}=e$ then gives $ah=ha$ on every $k$-scheme of points and hence as a morphism identity. Thus the group law of $A$ is commutative. AC is used through [F2]. [step 1.1, given] ∎
