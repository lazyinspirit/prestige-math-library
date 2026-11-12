---
id: lem-author-0cc80c1b5792-threshold
kind: lemma
title: Explicit eventual-stage thresholds in every fixed homotopy degree
status: published
domain: mathematics
deps:
  - math:def-axiom-of-choice
  - lem-author-0cc80c1b5792-actual-bound
  - lem-author-0cc80c1b5792-noetherian-scope
  - def-motivic-filtration
  - def-stable-spectra-interface
  - math:def-grothendieck-universe-closure-convention
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  lem-author-0cc80c1b5792-actual-bound: mathematical-premise
  lem-author-0cc80c1b5792-noetherian-scope: mathematical-premise
  def-motivic-filtration: mathematical-premise
  def-stable-spectra-interface: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 16
formulation_deps:
  - math:def-axiom-of-choice
  - lem-author-0cc80c1b5792-actual-bound
  - lem-author-0cc80c1b5792-noetherian-scope
  - def-motivic-filtration
  - def-stable-spectra-interface
  - math:def-grothendieck-universe-closure-convention
argument_deps:
  - math:def-axiom-of-choice
  - lem-author-0cc80c1b5792-actual-bound
  - lem-author-0cc80c1b5792-noetherian-scope
  - def-motivic-filtration
  - def-stable-spectra-interface
  - math:def-grothendieck-universe-closure-convention
---

## Statement
Assume the Axiom of Choice. Fix compatible nested Grothendieck universes $\mathcal U\in\mathcal V\in\mathcal W$ with $\omega\in\mathcal U$, containing the field, ring and scheme data in $\mathcal U$, and retain the compatible enlargements and smallness conventions of the Noetherian-scope, filtration and spectral suppliers. Universe existence is a separate size assumption. Let $X$ be a nonempty finite-dimensional Noetherian equicharacteristic scheme, where equicharacteristic means that its structure map $X\to\operatorname{Spec}\mathbb Z$ factors through $\operatorname{Spec}\mathbb Q$ or $\operatorname{Spec}\mathbb F_p$ for one prime $p$. Use the actual source prime-field motivic filtration $F^\bullet_{\mathrm{mot}}K(X)$ in the full scope of the Noetherian-scope lemma; on schemes over the standing field this is the filtration of the local motivic-filtration definition. Fix a nonnegative integer bound $B=B(X)$ supplied by the actual-bound lemma, so that $\pi_qF^r_{\mathrm{mot}}K(X)=0$ whenever $q<r-B$. For every fixed $q\in\mathbb Z$ and every integer anchor $t$, put
$$\ell_0(q,t)=\max(0,B+q+1-t).$$
Then $\pi_qF^{t+\ell}_{\mathrm{mot}}K(X)=0$ for all integers $\ell\geq\ell_0(q,t)$. In particular the claim holds with $t=\dim X$ and every fixed $q\leq0$ needed in the article.

## Facts & Assumptions
**Given:** The Axiom of Choice and the fixed compatible size hypotheses, a nonempty finite-dimensional Noetherian scheme $X$ with the stated global prime-field factorization, its actual source motivic filtration, a nonnegative integer bound $B$ as in [F1], fixed integers $q,t$, and an integer $\ell\geq\ell_0(q,t)$.

**Goal:** Exhibit a threshold for the actual stage group rather than assume that high-stage images detect it.

[F1] [[lem-author-0cc80c1b5792-actual-bound]] supplies a nonnegative integer $B=B(X)$ such that the actual stage group $\pi_qF^r_{\mathrm{mot}}K(X)$ vanishes whenever $q<r-B$, for integer $q,r$.

[F2] The assumed [[math:def-axiom-of-choice]] and the fixed compatible size hypotheses discharge the inherited premises of [F1], [F3], [F4] and [F5] for the selected actual filtration, perfect-complex $K$-theory realization and spectral foundations. The universes satisfy [[math:def-grothendieck-universe-closure-convention]], with the bounds and compatible enlargements specified by [F3]; their existence is separately assumed. Taking a maximum of two integers adds no choice requirement.

[F3] [[lem-author-0cc80c1b5792-noetherian-scope]] supplies the full global prime-field scheme scope, verifies that $X$ is qcqs with finite source valuative dimension equal to its Krull dimension, and specifies the actual source filtration on that scope. Its standing-field restriction is exactly the local filtration, including the stage maps to $K$.

[F4] [[def-motivic-filtration]] supplies the standing-field motivic-filtration construction, its integer stage indices and its nonconnective perfect-complex $K(X)$ notation. On the full prime-field scope use the same actual source filtration specified in [F3], with the same integer-index extension and spectral conventions.

[F5] [[def-stable-spectra-interface]] defines the integer-indexed homotopy groups $\pi_q(E)$ of each stage spectrum, with its compatible universe and smallness conventions. The expression $\pi_qF^r_{\mathrm{mot}}K(X)=0$ means that this homotopy group is the zero group.

## Proof
1.1 By [F3] and [F4], use the actual filtration on the specified scheme, with the bound $B$ of [F1] and homotopy-group convention of [F5]. The integer $B+q+1-t$ has a maximum with $0$, so $\ell_0(q,t)$ is a well-defined nonnegative integer. By the definition of the maximum and $\ell\geq\ell_0(q,t)$, $t+\ell\geq B+q+1$. Set $r=t+\ell$. Then $r-B\geq q+1>q$. [F1, F3, F4, F5, given, algebra]

2.1 Under the inherited Choice and size premises in [F2], apply [F1] to this strict inequality. It gives the asserted zero stage group for every such $\ell$. The choice of $q$ was arbitrary, so the same argument covers in particular the required fixed nonpositive degrees; the threshold is allowed to depend on $q$. The finite Krull dimension in [F3] is an integer, so $t=\dim X$ is an allowed anchor. [F1, F2, F3, step 1.1] ∎
