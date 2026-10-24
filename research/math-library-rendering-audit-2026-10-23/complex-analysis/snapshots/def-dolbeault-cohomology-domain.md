---
id: def-dolbeault-cohomology-domain
kind: definition
title: Dolbeault cohomology of a domain
status: published
origin: pipeline
deps:
  - def-bigraded-complex-differential-forms
  - thm-d-dbar-decomposition-and-identities
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lebl, Tasty Bits of Several Complex Variables, v4.4, Chapter 4 §4.4"
      url: https://www.jirka.org/scv/scv.pdf
      locator: "Dolbeault cohomology quotient following Definition 4.4.1, printed pp. 137–138; the restriction maps are verified here directly."
    - title: "Guillemin and Campbell, MIT 18.117 Lecture Notes, Lectures 1–4"
      url: https://ocw.mit.edu/courses/18-117-topics-in-several-complex-variables-spring-2005/3e8b0c3499d6226959485ace042cdaab_18117notes.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
---

## Definition

Let $U\subseteq\mathbb C^n$ be open and let $0\le p,q\le n$. Write
$\Omega^{p,q}(U)$ for the smooth complex-valued forms of bidegree $(p,q)$.
Set $\Omega^{p,-1}(U)=\{0\}$ and $\Omega^{p,n+1}(U)=\{0\}$, and define
$$Z_{\bar\partial}^{p,q}(U)=\ker\!\left(\bar\partial:\Omega^{p,q}(U)\to\Omega^{p,q+1}(U)\right),\qquad B_{\bar\partial}^{p,q}(U)=\operatorname{im}\!\left(\bar\partial:\Omega^{p,q-1}(U)\to\Omega^{p,q}(U)\right).$$
The Dolbeault cohomology vector space is
$$H_{\bar\partial}^{p,q}(U)=Z_{\bar\partial}^{p,q}(U)/B_{\bar\partial}^{p,q}(U).$$
It is well-defined because $\bar\partial^2=0$. If $U'\subseteq U$ is open,
restriction of forms induces a map $H_{\bar\partial}^{p,q}(U)\to
H_{\bar\partial}^{p,q}(U')$; these maps are independent of representatives
and compose as restrictions do. No identification with sheaf cohomology is
asserted.

## Facts & Assumptions

**Given:** An open $U\subseteq\mathbb C^n$, a bidegree $0\le p,q\le n$, and
the complex differential forms defined in
[[def-bigraded-complex-differential-forms]].

[F1] The spaces of smooth forms split by bidegree and $\bar\partial$ maps
$\Omega^{p,q}$ into $\Omega^{p,q+1}$
([[def-bigraded-complex-differential-forms]]).

[F2] The Dolbeault operator satisfies $\bar\partial^2=0$
([[thm-d-dbar-decomposition-and-identities]]).

## Proof

**Proof technique:** direct.

1.1 By [F2], every image $\bar\partial\gamma$ with $\gamma\in\Omega^{p,q-1}(U)$ is killed by $\bar\partial$, so $B_{\bar\partial}^{p,q}(U)\subseteq Z_{\bar\partial}^{p,q}(U)$ and the quotient in the Definition is well-defined. For $q=0$ the image is zero by the stated convention; for $q=n$ the target of $\bar\partial$ is zero. [F1, F2, given, algebra]

1.2 For an inclusion $j:U'\hookrightarrow U$, restriction commutes with coordinate differentiation: the coefficient formula for $\bar\partial$ gives $j^*(\bar\partial\eta)=\bar\partial(j^*\eta)$ term by term. Hence closed forms restrict to closed forms and exact forms restrict to exact forms. [F1, given, algebra]

2.1 Define $j^*:H_{\bar\partial}^{p,q}(U)\to H_{\bar\partial}^{p,q}(U')$ by $[\eta]\mapsto[j^*\eta]$ for closed $\eta$. If $[\eta]=[\eta']$, then $\eta-\eta'=\bar\partial\gamma$; step 1.2 gives $j^*\eta-j^*\eta'=\bar\partial(j^*\gamma)$, so the class is independent of the representative. [F1, step 1.2, given, algebra]

3.1 Restricting a form to itself is the identity, and for open inclusions $U''\subseteq U'\subseteq U$, $(\eta|_{U'})|_{U''}=\eta|_{U''}$. Therefore the induced cohomology maps satisfy the same identity and composition laws. [step 2.1, given, algebra] ∎
