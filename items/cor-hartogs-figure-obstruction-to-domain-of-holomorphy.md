---
id: cor-hartogs-figure-obstruction-to-domain-of-holomorphy
kind: corollary
title: "A domain containing a Hartogs figure but not its hull is not a domain of holomorphy"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-holomorphic-extension-and-domain-of-holomorphy,
       thm-hartogs-figure-extension]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, §2.1"
      url: "https://www.jirka.org/scv/scv.pdf"
pipeline_run: null
---

## Statement

Let $\Omega\subseteq\mathbb C^2$ be a domain. If there exist $0<r,s<1$ such that

$$H(r,s)\subseteq\Omega\subseteq\widehat H(r,s) \qquad\text{and}\qquad \Omega\ne\widehat H(r,s),$$

then $\Omega$ is not a domain of holomorphy.

## Facts & Assumptions

**Given:** A domain $\Omega$ with
$H(r,s)\subseteq\Omega\subseteq\widehat H(r,s)$ and
$\Omega\ne\widehat H(r,s)$.

[L1] A domain of holomorphy is defined by the nonexistence of one fixed overlap
from which every holomorphic function extends farther
([[def-holomorphic-extension-and-domain-of-holomorphy]]).

[L2] Every holomorphic function on $H(r,s)$ extends uniquely to the full bidisc
$\widehat H(r,s)$ ([[thm-hartogs-figure-extension]]).

## Proof

**Proof technique:** direct.

1.1 Let $f\in\mathcal O(\Omega)$. Its restriction to the open subset $H(r,s)$ is holomorphic, so [L2] gives a holomorphic function $F_f\in\mathcal O(\widehat H(r,s))$ with $F_f=f$ on $H(r,s)$. [given, L2]

2.1 The domain $\widehat H(r,s)$ is not contained in $\Omega$ by hypothesis, and $H(r,s)$ is a nonempty open subset of $\Omega\cap\widehat H(r,s)$. Thus the same open overlap works for every holomorphic function on $\Omega$, namely the fixed set $U_1:=H(r,s)$ and the larger domain $U_2:=\widehat H(r,s)$. [step 1.1, given]

3.1 By the definition in [L1], the existence of that common pair $U_1,U_2$ shows that $\Omega$ is not a domain of holomorphy. [L1, step 2.1] ∎
