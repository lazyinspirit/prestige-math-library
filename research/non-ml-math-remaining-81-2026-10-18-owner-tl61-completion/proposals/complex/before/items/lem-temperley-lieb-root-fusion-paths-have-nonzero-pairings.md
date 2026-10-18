---
id: lem-temperley-lieb-root-fusion-paths-have-nonzero-pairings
kind: lemma
title: "Root fusion paths have nonzero pairings"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps:
  - lem-temperley-lieb-jones-wenzl-partial-trace-and-uniqueness
  - lem-temperley-lieb-closure-trace-component-identities
  - def-temperley-lieb-quantum-integers-and-quantum-characteristic
  - thm-temperley-lieb-diagram-category-laws
  - lem-temperley-lieb-generators-satisfy-local-relations
  - thm-temperley-lieb-diagram-generators-span
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joshua Chen, The Temperley-Lieb Categories and Skein Modules"
      url: "https://arxiv.org/pdf/1502.06845"
      locator: "§§5.2–5.4, PDF pp. 47–55: root fusion, trivalent theta values, and path matrix units. The local route does not import the source's 0/0 convention."
    - title: "K. Iohara, G. I. Lehrer, and R. B. Zhang, The Jones Quotients of the Temperley-Lieb Algebras"
      url: "https://arxiv.org/pdf/1702.08128"
      locator: "§§2.2–3.3, printed pp. 3–8: retained path labels and quotient blocks."
verification:
  precheck: escalated
---

## Statement

Let $q=e^{\pi i/\ell}$, $\ell\ge3$. A retained path of length $n$ is a sequence $a=(a_0,\ldots,a_n)$ with $a_0=0$, $0\le a_i\le\ell-2$, and $|a_i-a_{i-1}|=1$. For a triple of nonnegative labels $r,s,t$ satisfying triangle inequalities and even sum, put $m=(r+s-t)/2$, $n'=(s+t-r)/2$, $p=(t+r-s)/2$. The theta pairing of the corresponding trivalent vertices is

$$\Theta(r,s,t)=\frac{[m]_q![n']_q![p]_q![m+n'+p+1]_q!}{[m+n']_q![n'+p]_q![m+p]_q!}.$$

When $r,s,t\le\ell-2$ and $r+s+t\le2\ell-4$, the factorial indices in the canceled expression are at most $\ell-1$, so $\Theta(r,s,t)\ne0$. Recursively composing the normalized trivalent inclusions along retained paths gives orthogonal path projections and matrix units; for each endpoint $a_n$, the path matrix units form a full matrix block, with nonzero pivotal pairing. The positivity and denominator-range check are proved below. The local derivation of the recoupling inclusions, the theta recurrence from partial trace, and the path-induction spanning/orthogonality identities are not completed; those are escalated as exact proof gaps.

## Facts & Assumptions

**Given:** $q=e^{\pi i/\ell}$, the diagram convention, and the recursion over units.

[F1] The quantum integers satisfy $[j]_q=\sin(j\pi/\ell)/\sin(\pi/\ell)>0$ for $1\le j<\ell$; hence every factorial $[j]_q!$ with $j\le\ell-1$ is nonzero ([[def-temperley-lieb-quantum-integers-and-quantum-characteristic]]).

[F2] The recursive idempotents satisfy $\operatorname{ptr}_k(p_k)=([k+1]_q/[k]_q)p_{k-1}$ and $\operatorname{Tr}_k(p_k)=[k+1]_q$ whenever the indicated denominators are units ([[lem-temperley-lieb-jones-wenzl-partial-trace-and-uniqueness]]).

[F3] Diagram composition and closure count finite components and respect the stated cup-cap generator relations ([[thm-temperley-lieb-diagram-category-laws]], [[lem-temperley-lieb-generators-satisfy-local-relations]], [[lem-temperley-lieb-closure-trace-component-identities]]).

## Proof

**Proof technique:** verify the root denominator range first, then the trivalent/path induction.

1.1 Under the stated admissibility bound, $m,n',p$ are nonnegative integers and $m+n'+p=(r+s+t)/2\le\ell-2$. Thus the largest factorial index in the displayed theta formula is at most $\ell-1$. Every quantum factorial in that formula is a product of positive quantum integers by [F1], so the displayed value is defined and nonzero. [F1, given, algebra]

2.1 To infer the stated matrix-unit conclusion one still needs to construct the two inclusions for $p_a\otimes1$, verify their composites are $([a+1]/[a])p_{a-1}$ and $p_{a+1}$, derive the theta formula from the partial-trace recursion [F2], and prove that paths with first divergence have zero composite while equal paths have the stated nonzero scalar. The source's boundary shortcut divides by a vanishing quantum integer; the requested deletion of the negligible summand before normalization is not written out here. These recoupling and spanning identities remain unresolved, so no matrix-unit claim is asserted as proved. [F2, F3, step 1.1]
