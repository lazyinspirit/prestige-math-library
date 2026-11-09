---
id: lem-high-filtration-vanishing
kind: lemma
title: High filtration vanishing
status: published
domain: mathematics
deps:
  - def-motivic-filtration
  - prop-motivic-graded-spectral-sequence
  - thm-motivic-dimension-vanishing
  - prop-filtration-eventual-vanishing
  - lem-filtered-stage-exact-sequence
  - lem-eilenberg-maclane-shift-index
  - math:def-axiom-of-choice
dependency_roles:
  def-motivic-filtration: mathematical-premise
  prop-motivic-graded-spectral-sequence: mathematical-premise
  thm-motivic-dimension-vanishing: mathematical-premise
  prop-filtration-eventual-vanishing: mathematical-premise
  lem-filtered-stage-exact-sequence: mathematical-premise
  lem-eilenberg-maclane-shift-index: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: p. 9, Lemma 4.2 and proof
      statement: For a Noetherian scheme of dimension d over a field, the indicated
        negative homotopy groups vanish at stages i at least d, and degree zero
        vanishes at stages i greater than d.
      hypotheses: A Noetherian scheme of finite dimension d over a field.
      reading_limits: The lemma statement and its proof were read in the supplied
        article text. The present proof uses the completed local supplier
        contracts for the graded comparison, dimension bound and eventual stage
        vanishing.
dependency_level: 19
---

## Statement
Assume the Axiom of Choice. Let $X$ be a Noetherian scheme of finite Krull dimension $d$ over a field $k$, and let $i$ and $j$ be integers. For the motivic filtration of [[def-motivic-filtration]],
$$\pi_jF^i_{\mathrm{mot}}K(X)=0\quad\text{if }i\geq d\text{ and }j<0,$$
and
$$\pi_0F^i_{\mathrm{mot}}K(X)=0\quad\text{if }i>d.$$
Here $F^i_{\mathrm{mot}}K(X)$ is the $i$th spectrum in the decreasing motivic tower of nonconnective $K$-theory, and $\pi_j$ is its $j$th stable homotopy group. These are assertions about the stage groups themselves, not merely their images in $K_j(X)$. The field is arbitrary; in applying the fixed-field definitions below, take the standing field to be $k$.

## Facts & Assumptions
**Given:** The Axiom of Choice, a Noetherian finite-dimensional $k$-scheme $X$, and integers in either of the two stated ranges.

**Goal:** Prove the two stage-group vanishing assertions.

[F1] [[def-motivic-filtration]] supplies the actual decreasing tower on qcqs schemes over an arbitrary specified field, with the stated choice assumption. A Noetherian scheme is quasi-compact and quasi-separated.

[F2] For $r\geq0$, [[prop-motivic-graded-spectral-sequence]] identifies the actual cofiber of $F^{r+1}_{\mathrm{mot}}K(X)\to F^r_{\mathrm{mot}}K(X)$ with $\mathbb Z(r)_{\mathrm{mot}}(X)[2r]$. By [[lem-eilenberg-maclane-shift-index]], its $j$th homotopy group is $H^{2r-j,r}_{\mathrm{mot}}(X,\mathbb Z)$.

[F3] [[thm-motivic-dimension-vanishing]] gives $H^{a,r}_{\mathrm{mot}}(X,\mathbb Z)=0$ for $r\geq0$ and $a>r+d$. Its equicharacteristic hypothesis holds because $X$ is a scheme over a field, hence over that field's prime subfield.

[F4] [[lem-filtered-stage-exact-sequence]] gives exactness of $\pi_jF^{r+1}\to\pi_jF^r\to\pi_j\operatorname{gr}^r$ for a decreasing filtered spectrum. [[prop-filtration-eventual-vanishing]] gives, for each fixed $j$, vanishing of $\pi_jF^N_{\mathrm{mot}}K(X)$ at all sufficiently large $N$; it also records vanishing of the stages on the empty scheme.

## Proof
1.1 If $X$ is empty, the stage spectra vanish by [F4], and both assertions follow. Otherwise $d\geq0$. Since a Noetherian scheme is qcqs and its structure map factors through the prime field of $k$, all hypotheses of [F1]–[F4] apply. [F1, F3, F4, given]

2.1 Fix $j<0$ and $i\geq d$. For every integer $r\geq i$, we have $r\geq0$ and $2r-j>r+d$, because $r-d\geq0$ and $-j>0$. By [F2] and [F3], $\pi_j\operatorname{gr}^r_{\mathrm{mot}}K(X)=0$. Exactness in [F4] therefore makes each transition $\pi_jF^{r+1}_{\mathrm{mot}}K(X)\to\pi_jF^r_{\mathrm{mot}}K(X)$ surjective. [F2, F3, F4, given, step 1.1, algebra]

3.1 Choose $N\geq i$ large enough that $\pi_jF^N_{\mathrm{mot}}K(X)=0$, using [F4]. The finite composite of the surjections from stage $N$ to stage $i$ is surjective, so its target is zero. This proves the negative-degree assertion. [F4, step 2.1]

4.1 Now let $j=0$ and $i>d$. For every $r\geq i$, we have $r\geq0$ and $2r>r+d$. The same application of [F2]–[F4] makes every transition $\pi_0F^{r+1}_{\mathrm{mot}}K(X)\to\pi_0F^r_{\mathrm{mot}}K(X)$ surjective. Eventual vanishing in degree zero supplies an $N\geq i$ with zero source; composing down to stage $i$ proves $\pi_0F^i_{\mathrm{mot}}K(X)=0$. Thus both stated assertions hold. [F2, F3, F4, given, step 1.1, algebra] ∎
