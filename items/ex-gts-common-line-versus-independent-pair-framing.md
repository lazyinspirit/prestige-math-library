---
id: ex-gts-common-line-versus-independent-pair-framing
kind: example
title: "Gts common line versus independent pair framing"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
category: algebraic-geometry
page: gts-weak-stability-framed-cy4-moduli-examples
dependency_level: 1
deps:
  - def-gts-weak-phase-framing-moduli-datum
dependency_roles:
  def-gts-weak-phase-framing-moduli-datum: mathematical-premise
justified_by: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Arkadij Bojko, Wall-crossing for Calabi–Yau fourfolds: framework, tools, and applications"
      url: https://arxiv.org/pdf/2507.05922v3
      locator: "Assumptions 5.1 and 5.10; Definitions 5.3 and 5.4; §6.3; §7.2. Diagnostic examples do not claim the full hypotheses."
    - title: "Bojko, Kuhn, Liu, and Thimm, Wall-crossing for equivariant DT4 invariants"
      url: https://arxiv.org/html/2608.23515v1
      locator: "§§3.2 and 4.2; exact conditional hypotheses and scope limits."
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
aliases: []
---

## Example

An independent auxiliary source has its own scalar gauge action and an independent arrow to the old pair vertex. Its arrow to the old object need not equal the composite through that vertex. In contrast, a tuple of $m\ge1$ vectors with one common source line has one shared source gauge. In the explicitly completed associative algebra below, conjugating the auxiliary exponential gives the nested-commutator expansion with coefficients $1/n!$. This formal identity supplies no geometric uncapped seed or wall-crossing theorem.

## Example references

[Bojko, *Wall-crossing for Calabi–Yau fourfolds: framework, tools, and applications*](https://arxiv.org/pdf/2507.05922v3), Assumptions 5.1 and 5.10; Definition 5.3; §6.2; §6.3; Assumption 6.9; Remark 6.10; Example 6.11; Theorem 6.12; Lemma 6.13; Equation (6.14); §7.2.

[Bojko, Kuhn, Liu, and Thimm, *Wall-crossing for equivariant DT4 invariants*](https://arxiv.org/html/2608.23515v1), §2.2.8, §3.2, Assumption 4.2.4, and Theorem 1.2.1; used only under their stated hypotheses.

## Setup


Take an old pair source $p$ with arrow $s:p\to v$ and a new auxiliary source $q$ with arrows $u:q\to p$ and $w:q\to v$:

```tikzcd
q \arrow[r,"u"] \arrow[rr,bend right=18,"w"'] & p \arrow[r,"s"] & v
```

For one-dimensional spaces at all vertices, $w$ and the composite $s\circ u$ have the same gauge weight but are distinct coordinates. A tuple of $m$ vectors sharing one common line instead has a single source gauge scalar for all $m$ components.

For the formal calculation fix $d\ge1$ and old charges in $\mathbb N^d$. Start with the free unital associative $\mathbb C$-algebra on symbols $z_\beta$, one for each nonzero $\beta\in\mathbb N^d$, and $\delta$. Give $z_\beta$ bidegree $(\beta,0)$ and $\delta$ bidegree $(0,1)$, the second component counting auxiliary symbols. Quotient by the two-sided ideal spanned by all words containing at least two $\delta$'s, and complete in old charge: the resulting algebra $\widehat U_{\le1}$ is the product of its homogeneous word spaces of bidegrees $(\alpha,0)$ and $(\alpha,1)$. Multiplication is concatenation followed by the quotient, and $[x,y]=xy-yx$. For each fixed $\alpha$ there are only finitely many decompositions into nonzero charges, and at most $|\alpha|=\sum_i\alpha_i$ old letters; hence all coefficients below are finite sums. Put $A=\sum_{\beta\ne0}z_\beta$, and let $\tau$ be a central formal scalar, independent of the arrow $s$. Work in $\widehat U_{\le1}[\tau]/(\tau^2)$; $e^{\pm A}=\sum_{n\ge0}(\pm A)^n/n!$ are defined charge by charge.

## Facts & Assumptions

**Given:** the exact data and all unresolved suppliers retain their stated status.

[F1] [[def-gts-weak-phase-framing-moduli-datum]]: exact planned interface: “Specify original weak stability, exact phase category, actual ordinary-vs-admissible maps, original concentration opens and exact Fr_k, common-line framing, even emergent class domain, torus linearizations and orientations. No sum closure, cofinal-index availability, or abelian phase category is implicit.” The link records scope, not proof acceptance.



## Context only — no mathematical supplier use

`lem-gts-original-k-independent-pair-master-quadratic-model` and the separate actual uncapped-seed interface name the held construction interfaces discussed by this diagnostic. Their conclusions are not assumed or used to establish the calculations below; this example does not prove those interfaces.

## Verification

1.1 Under $(g_q,g_p,g_v)\in(\mathbb C^\times)^3$, the arrows transform as $u\mapsto g_pug_q^{-1}$, $s\mapsto g_vsg_p^{-1}$, and $w\mapsto g_vwg_q^{-1}$. Hence $su$ and $w$ both have weight $g_v/g_q$, but the representation space has two independent coordinates with that weight; the quiver imposes no equality. The common-line tuple has only the one shared source action and no independent $g_q$ factor. [given, F1, algebra]

2.1 In $\widehat U_{\le1}[\tau]/(\tau^2)$ one has $e^{\tau\delta}=1+\tau\delta$. Expanding $e^A\delta e^{-A}$ and grouping by total old-letter count gives $\sum_{n\ge0}(\operatorname{ad}A)^n\delta/n!$: left and right multiplication by $A$ commute, so the binomial expansion of their difference gives the signs and factorials. Thus $e^Ae^{\tau\delta}e^{-A}=1+\tau(\delta+[A,\delta]+\frac12[A,[A,\delta]]+\cdots)$. Each coefficient is defined by the finite-charge convention in Setup. For nonzero old charge $\alpha$, the one-letter term is $[z_\alpha,\delta]$. For a decomposition $\alpha=\beta+\gamma$ with $\beta\ne\gamma$, the two ordered words contribute $\frac12([z_\gamma,[z_\beta,\delta]]+[z_\beta,[z_\gamma,\delta]])$; for $\beta=\gamma$ the contribution is $\frac12[z_\beta,[z_\beta,\delta]]$. Sum these contributions over the decompositions of $\alpha$. [given, step 1.1, algebra]

3.1 This formal calculation distinguishes the gradings and fixes coefficients. The actual uncapped seed is a separate geometric input; the formal calculation does not identify itself with actual CY4 capped classes without fixed-properness, orientation, and wall-crossing. [given, step 2.1, algebra] ∎

