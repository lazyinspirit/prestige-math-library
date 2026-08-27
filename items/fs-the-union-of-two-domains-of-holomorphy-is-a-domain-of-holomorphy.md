---
id: fs-the-union-of-two-domains-of-holomorphy-is-a-domain-of-holomorphy
kind: false-statement
title: "FALSE: the union of two domains of holomorphy is always a domain of holomorphy"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-holomorphic-extension-and-domain-of-holomorphy,
       thm-identity-theorem-in-several-complex-variables,
       thm-removability-of-a-puncture-in-several-complex-variables]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, §1.6 and §2.1"
      url: "https://www.jirka.org/scv/scv.pdf"
    - title: "Harold P. Boas, Lecture Notes on Several Complex Variables, §3.2.3"
      url: "https://haroldpboas.gitlab.io/courses/650-2007c/notes.pdf"
pipeline_run: null
---

## Statement

The union of two domains of holomorphy is always a domain of holomorphy.

## Facts & Assumptions

**Given:** The domains
$$U_1=\mathbb C^2\setminus\{z_1=0\},\qquad U_2=\mathbb C^2\setminus\{z_2=0\}.$$

[L1] A domain of holomorphy is characterized by the impossibility of extending
every holomorphic function across one common larger neighborhood
([[def-holomorphic-extension-and-domain-of-holomorphy]]).

[L2] A holomorphic identity on a nonempty open subset propagates across a
connected domain ([[thm-identity-theorem-in-several-complex-variables]]).

[L3] In complex dimension at least two, a holomorphic function on a punctured
domain extends across the missing point
([[thm-removability-of-a-puncture-in-several-complex-variables]]).

## Refutation

**Proof technique:** direct.

1.1 The function $1/z_1$ is holomorphic on $U_1$. If it extended across a point of the missing hyperplane $\{z_1=0\}$, then $z_1F$ would be holomorphic there and equal to $1$ on a nonempty open subset of the extension domain, so [L2] would force $z_1F\equiv1$, impossible where $z_1=0$. The same argument with $1/z_2$ shows that $U_2$ is also a domain of holomorphy. [L1, L2, given]

2.1 The union $U_1\cup U_2$ is exactly $\mathbb C^2\setminus\{(0,0)\}$. By [L3], every holomorphic function on this punctured space extends across the origin, so [L1] shows that $U_1\cup U_2$ is not a domain of holomorphy. Thus the statement is false. [L1, L3, step 1.1] ∎
