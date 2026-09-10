---
id: "rem-carleson-hunt-does-not-include-the-lone-endpoint"
kind: "remark"
title: "Carleson hunt does not include the lone endpoint"
deps: ["thm-kolmogorov-lone-fourier-series-diverges-almost-everywhere", "thm-carleson-hunt-maximal-inequality-on-the-torus", "def-axiom-of-choice"]
sources:
  references:
    - title: 'Lacey, Carleson’s Theorem: Proof, Complements, Variations'
      url: https://arxiv.org/pdf/math/0307008
      locator: Boundary of Lacey section 7
provenance:
  statement: literature-derived
  proof: not-applicable
proof_strategy: "direct"
status: "draft"
origin: "pipeline"
---

## Statement

Assume AC as in the Kolmogorov construction. Its $L^1(\mathbb T)$ witness excludes a bound for the Fourier partial-sum maximal operator on all of $L^1$. The proposed Carleson–Hunt theorem concerns only $1<p<\infty$; this endpoint observation does not establish any of those positive bounds.

## Facts & Assumptions

**Given:** Normalized Haar measure on the circle and the Kolmogorov witness f.

[F1] The locally authored conclusion of [[thm-kolmogorov-lone-fourier-series-diverges-almost-everywhere]] gives $f\in L^1$ with unbounded symmetric partial sums almost everywhere. The unavailable original backing was separately resolved by the owner using the complete local proof; no original-source retrieval is claimed.

[F2] [[def-axiom-of-choice]] is inherited from the countable construction of that witness.

## Proof

1.1 Put $Mf=\sup_{N\ge0}|S_Nf|$. Each finite partial sum is measurable, hence this countable supremum is measurable. By F1 it equals infinity outside a null set on a space of measure one. For every positive integer k, the nonnegative simple function k on that conull set is bounded above by Mf, so the definition of the nonnegative integral gives $\int Mf\ge k$. Consequently $\|Mf\|_1=\infty$. [F1, F2, given, algebra]

2.1 Since $\|f\|_1<\infty$ by F1, step 1.1 contradicts every proposed finite-constant inequality $\|Mh\|_1\le C\|h\|_1$ for all $h\in L^1$. It also contradicts every finite weak-(1,1) constant: $m\{Mf>t\}=1$ for all t, whereas $C\|f\|_1/t<1$ for sufficiently large t. Thus neither assertion follows by adjoining the endpoint to the proposed positive-p range. [F1, step 1.1, algebra] ∎
