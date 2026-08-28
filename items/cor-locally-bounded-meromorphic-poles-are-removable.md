---
id: cor-locally-bounded-meromorphic-poles-are-removable
kind: corollary
title: "A locally bounded meromorphic quotient has no genuine pole"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [prop-algebra-of-holomorphic-functions-in-several-variables, thm-riemann-extension-across-hypersurface-zero-sets]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, Section 1.6"
      url: "https://jirilebl.github.io/scv/scv.pdf"
    - title: "Jaap Korevaar and Jan Wiegerinck, Several Complex Variables, Section 4.7"
      url: "https://staff.fnwi.uva.nl/j.j.o.o.wiegerinck/edu/scv/scvboek.pdf"
pipeline_run: frontier-22
---

## Statement

Let $U\subseteq\mathbb C^m$ be a domain, let $g,h:U\to\mathbb C$ be holomorphic
with $g\not\equiv0$, and suppose the quotient $h/g$ is locally bounded on
$U\setminus Z(g)$ near every point of $Z(g)$. Then $h/g$ extends holomorphically
to all of $U$.

## Facts & Assumptions

**Given:** The domain $U$, holomorphic functions $g$ and $h$ with $g\not\equiv0$, and local boundedness of $h/g$ near $Z(g)$.

[L1] On the open set where $g\ne0$, the quotient of holomorphic functions is holomorphic ([[prop-algebra-of-holomorphic-functions-in-several-variables]]).

[L2] A locally bounded holomorphic function on $U\setminus Z(g)$ extends uniquely across $Z(g)$ ([[thm-riemann-extension-across-hypersurface-zero-sets]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the quotient $h/g$ is holomorphic on $U\setminus Z(g)$. The local boundedness hypothesis is exactly the extra condition required by [L2]. [given, L1]

2.1 Applying [L2] to the holomorphic function $h/g$ on $U\setminus Z(g)$ gives the required holomorphic extension to all of $U$. [step 1.1, L2] ∎
