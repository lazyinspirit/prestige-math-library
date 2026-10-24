---
verification:
  verified: {"model":"gpt-6.1-sol","verdict":"pass","date":"2026-10-03","scope":"Recovered historical Step5 independent whole-item claim/body/proof read for lem-single-wall-tensor-weight-exclusion and actual needed supplier interfaces/source passages from frontier-38-owner-30 reader-7; completed reader repair plus item-specific Alpha disposition. No fresh review or claim that a stamp was issued historically; external recursive proof closure/all bibliography excluded.","delegated_by":"owner via tools/autopilot frontier-38-owner-30 Step5 reader dispatch","content_sha256":"f1292b411c88afe2a9f7b7d77aaab382964668e798190915901260175ec0f60a","evidence":["research/frontier-38-owner-30-reader-7.md","research/frontier-38-owner-30-reader-findings-7.json","research/frontier-38-owner-30-dispatch/reader-reader-7.result.json","research/frontier-38-owner-30-step5-hash-7-post-5a.json","research/frontier-38-owner-30-alpha-batch-7-5a-decisions.json","research/frontier-38-owner-30-dispatch/alpha-5a-batch-7.result.json"],"historical_binding":{"commit":"d90f26208","file":"items/lem-single-wall-tensor-weight-exclusion.md","historical_raw_sha256":"c26148eaba271e3a24700fcbc5b41205b9b9912bbe7a60ca31797cb940c966b7","transformations":["publication changed status draft to published; verification metadata excluded from content hash"],"source_snapshot":"sources and source locators included in the exact bound mathematical carrier","read_completed_at":"2026-10-03T08:44:13.402Z"}}
id: lem-single-wall-tensor-weight-exclusion
kind: lemma
title: "The single-wall tensor-weight exclusion lemma"
status: published
origin: pipeline
deps:
  - cor-central-characters-are-dot-weyl-orbits
  - def-axiom-of-choice
  - def-dot-action-facets-and-single-wall-translation-data
  - def-integral-dominant-and-strictly-dominant-weights
  - lem-dominant-norm-distance-comparison
  - lem-finite-semisimple-pbw-and-highest-weight-construction
  - lem-finite-weyl-closed-chambers-and-stabilizers
  - lem-tensoring-with-a-finite-dimensional-module-preserves-verma-flags
  - lem-weight-norm-bound-for-finite-dimensional-simple-modules
  - thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "James E. Humphreys, Representations of Semisimple Lie Algebras in the BGG Category O, Sec. 7.5 Key Lemma"
      locator: "§7.5, the Key Lemma, pp. 135-137 (title-only locator; the argument is reproduced from the fetched treatments below)"
    - title: "Lin Chen, lecture notes (Spring 2024), Lecture 9, Theorem 3.12 and its proof"
      url: https://windshower.github.io/linchen/teaching/s2024/lecture9.pdf
      locator: "§3, Theorem 3.12 and sketch (combinatorial exclusion of all but one standard factor), printed p. 6 (full text read at harvest)"
    - title: "Pavel Etingof, Representations of Lie Groups (18.757, Fall 2023), Theorem 24.1 and Lemma 23.4"
      url: https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf
      locator: "§23.2, Lemma 23.4 and proof, printed pp. 116-118; §24.1, Theorem 24.1 and Remark 24.2, printed pp. 119-121 (full text read at harvest)"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let
$(\lambda,\mu,\alpha)$ be a single-wall translation datum as in
[[def-dot-action-facets-and-single-wall-translation-data]], with translating
weight $\nu$, wall reflection $s=s_\alpha$, and $E=L(\nu)$. Then for all
$w,w'\in W$ and every weight $\gamma$ of $E$: if
$$w'\mathbin\cdot\mu=w\mathbin\cdot\lambda+\gamma,$$
then $w'\mathbin\cdot\mu=w\mathbin\cdot\mu$ and
$\gamma=w(\mu-\lambda)$.

Equivalently, for every $w$ the tensor $E\otimes\Delta(w\mathbin\cdot\lambda)$
has exactly one standard factor whose central character is that of $\mu$,
namely $\Delta(w\mathbin\cdot\mu)$, and its multiplicity in the Verma flag
computed by
[[lem-tensoring-with-a-finite-dimensional-module-preserves-verma-flags]] is
one: the multiplicity
$(E\otimes\Delta(w\mathbin\cdot\lambda):\Delta(\eta))=\dim E_{\eta-w\cdot\lambda}$
is nonzero, among labels $\eta$ in the dot orbit of $\mu$, only for
$\eta=w\mathbin\cdot\mu$, where it equals one.

## Facts & Assumptions

**Given:** The Axiom of Choice and a single-wall translation datum $(\lambda,\mu,\alpha)$ with translating weight $\nu$, wall reflection $s=s_\alpha$, and $E=L(\nu)$; write $\lambda_\bullet=\lambda+\rho$ and $\mu_\bullet=\mu+\rho$.

[F1] The datum gives integral dot-antidominant $\lambda,\mu$ with $\lambda$ dot-regular, so $\lambda_\bullet$ is regular for the linear action and $\mu_\bullet$ is fixed exactly by $\{1,s\}$; hence $-\lambda_\bullet$ is dominant regular and $-\mu_\bullet$ is dominant, and $\operatorname{Stab}_W(-\mu_\bullet)=\{1,s\}$. The translating weight $\nu$ is the unique dominant weight of the linear orbit $W(\mu-\lambda)=W(\mu_\bullet-\lambda_\bullet)$, and $\lvert\nu\rvert=\lvert\mu_\bullet-\lambda_\bullet\rvert$ ([[def-dot-action-facets-and-single-wall-translation-data]], [[def-integral-dominant-and-strictly-dominant-weights]], [[lem-finite-weyl-closed-chambers-and-stabilizers]]).

[F2] Every weight $\gamma$ of $L(\nu)$ satisfies $\lvert\gamma\rvert\le\lvert\nu\rvert$, with equality exactly when $\gamma\in W\nu$, and every weight of $W\nu$ occurs in $L(\nu)$ with multiplicity one ([[lem-weight-norm-bound-for-finite-dimensional-simple-modules]], [[thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights]]).

[F3] For dominant $\xi,\eta$ in the real span of the roots one has $\lvert\xi-w\eta\rvert\ge\lvert\xi-\eta\rvert$ for every $w$, with equality exactly when $w\eta\in\operatorname{Stab}_W(\xi)\eta$ ([[lem-dominant-norm-distance-comparison]]).

[F4] Modulo the identification of $\Delta$ with $M$ and of weight spaces, the tensor $E\otimes\Delta(\lambda')$ has a finite Verma flag with multiplicities $\dim E_{\eta-\lambda'}$, and $\dim E_{\zeta}=1$ for $\zeta\in W\nu$ ([[lem-tensoring-with-a-finite-dimensional-module-preserves-verma-flags]], [[lem-finite-semisimple-pbw-and-highest-weight-construction]]).

[F5] Two weights have the same central character exactly when they lie in one dot-Weyl orbit ([[cor-central-characters-are-dot-weyl-orbits]]).

## Proof

**Proof technique:** direct: transport the tensor-weight identity into a norm comparison, squeeze it to equality, and read off the surviving factor.

1.1 Let $w,w'\in W$ and let $\gamma$ be a weight of $E$ with $w'\mathbin\cdot\mu=w\mathbin\cdot\lambda+\gamma$. Since $w'\mathbin\cdot\mu-[w\mathbin\cdot\lambda]=w'(\mu_\bullet)-w(\lambda_\bullet)$, setting $x=(w')^{-1}w$ gives $x\lambda_\bullet=\mu_\bullet-(w')^{-1}\gamma$, that is, $(w')^{-1}\gamma=\mu_\bullet-x\lambda_\bullet$. [F1, given, algebra]

2.1 By [F2] one has $\lvert\gamma\rvert\le\lvert\nu\rvert=\lvert\mu_\bullet-\lambda_\bullet\rvert$, and $W$-invariance of the form gives $\lvert(w')^{-1}\gamma\rvert=\lvert\gamma\rvert$, so the identity of step 1.1 yields $\lvert\mu_\bullet-x\lambda_\bullet\rvert\le\lvert\mu_\bullet-\lambda_\bullet\rvert$. On the other hand [F3] applied to the dominant vectors $\xi=-\mu_\bullet$ and $\eta=-\lambda_\bullet$ (dominant and regular by [F1]) gives $\lvert\mu_\bullet-\lambda_\bullet\rvert=\lvert\xi-\eta\rvert\le\lvert\xi-x\eta\rvert=\lvert\mu_\bullet-x\lambda_\bullet\rvert$. [F1, F2, F3, step 1.1]

3.1 The two inequalities of step 2.1 are equalities, so the equality case of [F3] applies: $x\eta\in\operatorname{Stab}_W(\xi)\eta$ with $\operatorname{Stab}_W(\xi)=\{1,s\}$ by [F1], that is, $x(-\lambda_\bullet)\in\{-\lambda_\bullet,-s\lambda_\bullet\}$, so $x\lambda_\bullet\in\{\lambda_\bullet,s\lambda_\bullet\}$. Regularity of $\lambda_\bullet$ then forces $x\in\{1,s\}$: from $x\lambda_\bullet=s\lambda_\bullet$ we get $s^{-1}x\in\operatorname{Stab}_W(\lambda_\bullet)=\{1\}$, and from $x\lambda_\bullet=\lambda_\bullet$ directly $x=1$. Both $1$ and $s$ fix $\mu_\bullet$, hence $x\mathbin\cdot\mu=\mu$ and $w'\mathbin\cdot\mu=w\mathbin\cdot(x\mathbin\cdot\mu)=w\mathbin\cdot\mu$. Moreover $\gamma=w'\mathbin\cdot\mu-w\mathbin\cdot\lambda=w\mathbin\cdot\mu-w\mathbin\cdot\lambda=w(\mu-\lambda)$. Finally $\lvert\gamma\rvert=\lvert\mu_\bullet-\lambda_\bullet\rvert=\lvert\nu\rvert$ and $\gamma=w(\mu-\lambda)\in W(\mu-\lambda)=W\nu$, so by [F2] the weight $\gamma$ occurs in $E$ with multiplicity one. [F1, F2, F3, step 1.1, step 2.1, algebra]

4.1 For the reformulation, fix $w$ and let $\eta$ be a weight in the dot orbit of $\mu$, so $\eta=w'\mathbin\cdot\mu$ for some $w'$ and $\eta$ has the central character of $\mu$ by [F5]. If $\dim E_{\eta-w\mathbin\cdot\lambda}\ne0$, then $\gamma:=\eta-w\mathbin\cdot\lambda$ is a weight of $E$ with $w'\mathbin\cdot\mu=w\mathbin\cdot\lambda+\gamma$, so step 3.1 gives $\eta=w'\mathbin\cdot\mu=w\mathbin\cdot\mu$ and $\gamma=w(\mu-\lambda)$; conversely $\dim E_{w(\mu-\lambda)}=1$. Hence among labels in the dot orbit of $\mu$ only $\Delta(w\mathbin\cdot\mu)$ occurs, with multiplicity one, in the Verma flag of $E\otimes\Delta(w\mathbin\cdot\lambda)$ supplied by [F4]. [F4, F5, step 3.1, algebra]

5.1 Steps 3.1 and 4.1 prove both formulations: the tensor-weight identity forces $w'\mathbin\cdot\mu=w\mathbin\cdot\mu$ and $\gamma=w(\mu-\lambda)$ with multiplicity one, and the only standard factor of $E\otimes\Delta(w\mathbin\cdot\lambda)$ with central character $\chi_\mu$ is $\Delta(w\mathbin\cdot\mu)$, once. [step 3.1, step 4.1] ∎
