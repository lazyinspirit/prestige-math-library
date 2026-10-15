---
id: lem-tdmath-diagonal-model-hilbert-and-domain
kind: lemma
title: Completeness and linear domain of the diagonal sequence model
status: published
origin: pipeline
domain: mathematics
library: mathematics
deps: [def-tdmath-diagonal-operator-model, def-square-summable-family-on-an-arbitrary-index-set, thm-complex-plane-is-complete, def-hilbert-space]
justified_by: []
dependency_roles:
  def-tdmath-diagonal-operator-model: mathematical-premise
  def-square-summable-family-on-an-arbitrary-index-set: mathematical-premise
  thm-complex-plane-is-complete: mathematical-premise
  def-hilbert-space: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "MIT OpenCourseWare 18.102 Spring 2021, complete lecture notes"
      url: "https://ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf"
      locator: "Functional-analysis background; the local proof below uses the explicitly listed published sequence-space and complex-completeness interfaces. No new full-text reading is attested here."
dependency_level: 1
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Statement

For the finite or explicitly enumerated countable index set $I$ of [[def-tdmath-diagonal-operator-model]], the inner-product space $\ell^2(I)$ is complete and therefore a complex Hilbert space, with inner product linear in the first variable. For any real family $(E_i)$, the displayed domain $D(H_E)$ is a linear subspace containing every finite-support vector, is dense in $\ell^2(I)$, and $x\mapsto(E_ix_i)_i$ is a linear map from that domain into $\ell^2(I)$. These assertions also hold for the empty finite index set.

## Facts & Assumptions

**Given:** The coefficient space and real energies in the diagonal definition.

[F1] [[def-square-summable-family-on-an-arbitrary-index-set]]: finite-subset suprema define the square sum and its norm, and the coordinate pairing defines an inner-product space.

[F2] [[thm-complex-plane-is-complete]]: every Cauchy sequence of complex numbers has a unique limit.

[F3] [[def-hilbert-space]]: a complete inner-product space is a Hilbert space.

[F4] [[def-tdmath-diagonal-operator-model]]: $D(H_E)$ consists of coefficient families whose energy-weighted square sum is finite.

## Proof

**Given:** A Cauchy sequence $(x^{(n)})$ in the stated coefficient norm.

1.1 The sequence is norm bounded, say $\|x^{(n)}\|\le M$. For each coordinate, $|x_i^{(n)}-x_i^{(m)}|\le\|x^{(n)}-x^{(m)}\|$, so [F2] gives a unique limit $x_i$. For every finite $F\subset I$, passing to the limit in its finite sum gives $\sum_{i\in F}|x_i|^2\le M^2$. Taking the finite-subset supremum proves $x\in\ell^2(I)$. No selection of nonunique coordinate limits is involved. [F1, F2, algebra]

1.2 If $x,y\in D(H_E)$ and $a,b\in\mathbb C$, then for every finite $F$, $$\sum_{i\in F}|E_i(ax_i+by_i)|^2\le2|a|^2\sum_{i\in F}|E_ix_i|^2+2|b|^2\sum_{i\in F}|E_iy_i|^2.$$ The right side is bounded independently of $F$, so $ax+by\in D(H_E)$; the zero vector is included. The coordinate action is linear and has square-summable output by the domain definition. Every finite-support vector belongs to this domain because each $E_i$ is finite. [F1, F4, algebra]

2.1 Given $\epsilon>0$, choose $N$ with $\|x^{(n)}-x^{(m)}\|\le\epsilon$ for all $n,m\ge N$. For fixed $n\ge N$ and finite $F$, let $m\to\infty$ to obtain $\sum_{i\in F}|x_i^{(n)}-x_i|^2\le\epsilon^2$. Taking the supremum over $F$ gives $\|x^{(n)}-x\|\le\epsilon$. Thus the space is complete and is Hilbert by [F3]. [F1, F2, F3, step 1.1, algebra]

3.1 For any $x\in\ell^2(I)$ and $\epsilon>0$, the finite-subset supremum supplies a finite $F$ whose square sum differs from the total by less than $\epsilon^2$. For every finite $G\subset I\setminus F$, its square sum is at most that difference, by applying the total bound to $F\cup G$. Hence the norm of the omitted tail is at most $\epsilon$. Finite-coordinate truncations therefore approximate $x$ and lie in $D(H_E)$ by step 1.2, proving density. If $I$ is empty all spaces and maps are zero, and the same statements hold directly. [F1, F4, step 1.2, algebra] ∎
