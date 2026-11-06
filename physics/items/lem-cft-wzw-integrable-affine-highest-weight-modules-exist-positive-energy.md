---
id: lem-cft-wzw-integrable-affine-highest-weight-modules-exist-positive-energy
kind: lemma
title: Integrable affine WZW highest-weight modules are graded and restricted
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: mathematics
deps:
  - def-untwisted-affine-central-extension
  - def-degree-derivation-and-full-untwisted-affine-algebra
  - def-kac-moody-integral-and-dominant-integral-weights
  - def-integrable-kac-moody-module
  - thm-loop-and-affine-gcm-presentations-are-isomorphic
  - thm-kac-moody-verma-module-has-a-unique-simple-quotient
  - thm-integrability-criterion-for-simple-highest-weight-kac-moody-modules
  - thm-finite-dimensionality-of-lambda-highest-weight-simple-modules-for-dominant-integral-lambda
  - thm-highest-weight-classification-of-finite-dimensional-irreducible-representations
  - thm-universal-property-and-pbw-character-of-kac-moody-verma-modules
  - lem-pbw-for-countably-presented-kac-moody-lie-algebras
  - def-positive-energy-affine-module
  - def-axiom-of-choice
dependency_roles:
  def-untwisted-affine-central-extension: mathematical-premise
  def-degree-derivation-and-full-untwisted-affine-algebra: mathematical-premise
  def-kac-moody-integral-and-dominant-integral-weights: mathematical-premise
  def-integrable-kac-moody-module: mathematical-premise
  thm-loop-and-affine-gcm-presentations-are-isomorphic: mathematical-premise
  thm-kac-moody-verma-module-has-a-unique-simple-quotient: mathematical-premise
  thm-integrability-criterion-for-simple-highest-weight-kac-moody-modules: mathematical-premise
  thm-finite-dimensionality-of-lambda-highest-weight-simple-modules-for-dominant-integral-lambda: mathematical-premise
  thm-highest-weight-classification-of-finite-dimensional-irreducible-representations: mathematical-premise
  thm-universal-property-and-pbw-character-of-kac-moody-verma-modules: mathematical-premise
  lem-pbw-for-countably-presented-kac-moody-lie-algebras: mathematical-premise
  def-positive-energy-affine-module: mathematical-premise
  def-axiom-of-choice: mathematical-premise
justified_by: []
aliases: []
physical_scope: null
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Etingof, Frenkel, and Kirillov, Lectures on Representation Theory and KZ Equations
      url: https://djvu.online/file/elCdJNnaapAuA
      locator: Lecture 2, §2.8, Theorem 2.8.4; Lecture 3, §§3.2–3.5.
    - title: Tsuchiya, Ueno, and Yamada, Conformal Field Theory on Universal Family of Stable Curves with Gauge Symmetries
      url: https://archive.mpim-bonn.mpg.de/id/eprint/2838/1/preprint_1989_18.pdf
      locator: §1.3, integrable affine modules and their finite-dimensional degree-zero horizontal spaces.
---

## Statement

Let $\mathfrak g$ be finite-dimensional complex simple, use the invariant form $B$ for which long roots have square $2$, and let $\theta$ be the highest root. Let $k\in\mathbb Z_{\ge0}$ and let $\lambda$ be dominant integral with $\langle\lambda,\theta^\vee\rangle\le k$. For the full untwisted affine algebra with
$
[x_m,y_n]=[x,y]_{m+n}+m\delta_{m,-n}B(x,y)c,\qquad [d,x_m]=m x_m,
$
put $\widehat\lambda|_{\mathfrak h}=\lambda$, $\widehat\lambda(c)=k$, and $\widehat\lambda(d)=0$. The simple highest-weight module $L_k(\lambda)$ exists and is integrable. Its degree-zero space for the grading $N=-d$ is the finite-dimensional simple $\mathfrak g$-module $V_\lambda$; all degrees are nonnegative integers and finite-dimensional. In the sense of def-positive-energy-affine-module, the module is restricted: for every vector $v$, $x_m v=0$ for all sufficiently large $m>0$.

The grading asserted here is the affine degree grading. No relation to a Sugawara $L_0$-grading or integral $L_0$-spectrum is asserted.



## Statement references

[[def-positive-energy-affine-module]]

## Facts & Assumptions

**Given:** $\mathfrak g,B,\theta,k,\lambda$ as in the Statement, with the full affine Cartan and degree convention of [[def-degree-derivation-and-full-untwisted-affine-algebra]].

[A1] Full AC is assumed by [[def-axiom-of-choice]], as required by the finite-dimensional highest-weight suppliers below.

[F1] [[def-untwisted-affine-central-extension]] fixes the normalized bracket and central generator $c$.

[F2] [[thm-loop-and-affine-gcm-presentations-are-isomorphic]] identifies the affine node-zero coroot as $h_0=c-\theta^\vee$.

[F3] [[thm-kac-moody-verma-module-has-a-unique-simple-quotient]] supplies a nonzero simple highest-weight module for every affine weight.

[F4] [[def-kac-moody-integral-and-dominant-integral-weights]]: dominant integral means every simple-coroot label lies in $\mathbb Z_{\ge0}$. [[def-integrable-kac-moody-module]] defines integrability by local nilpotence of the Chevalley generators. [[thm-integrability-criterion-for-simple-highest-weight-kac-moody-modules]] identifies these label conditions with integrability of the simple highest-weight module.

[F5] [[thm-finite-dimensionality-of-lambda-highest-weight-simple-modules-for-dominant-integral-lambda]]: a simple finite-dimensional-semisimple-Lie-algebra highest-weight module at dominant integral $\lambda$ is finite-dimensional; its highest vector is nonzero.

[F6] [[thm-highest-weight-classification-of-finite-dimensional-irreducible-representations]] identifies the resulting finite-dimensional simple $\mathfrak g$-module as $V_\lambda$.

[F7] [[lem-pbw-for-countably-presented-kac-moody-lie-algebras]] gives ordered PBW monomials for the countably based affine Lie algebra; [[thm-universal-property-and-pbw-character-of-kac-moody-verma-modules]] gives the negative-then-Borel spanning of the affine Verma module.

[F8] [[def-positive-energy-affine-module]] uses “restricted” to mean that sufficiently high positive current modes annihilate each fixed vector; it does not itself assert an energy grading.

## Proof

1.1 For each finite simple coroot $h_i$, the affine weight has label $\widehat\lambda(h_i)=\lambda(h_i)\in\mathbb Z_{\ge0}$. By [F2], the remaining label is $\widehat\lambda(h_0)=k-\langle\lambda,\theta^\vee\rangle$, also a nonnegative integer. Thus $\widehat\lambda$ is dominant integral for the untwisted affine generalized Cartan matrix. [given, F1, F2, algebra]

1.2 The highest vector has $N=-d$ degree zero. The negative-then-Borel PBW spanning in [F7] shows that every vector is spanned by negative-root and negative-loop monomials on the highest vector. A negative loop mode $x_{-m}$, $m>0$, raises $N$ by $m$, while horizontal modes preserve it. Thus the module has no negative degrees and its degree-zero subspace is exactly the horizontal highest-weight module generated by the highest vector. [F3, F7, given]

2.1 By [F3] the simple highest-weight module $L(\widehat\lambda)$ exists and is nonzero. Applying [F4] to the labels computed in step 1.1 proves that this simple module is integrable. Denote it by $L_k(\lambda)$. [F3, F4, step 1.1]

2.2 This degree-zero subspace is simple as a $\mathfrak g$-module. Indeed, if $W$ were a proper nonzero $\mathfrak g$-submodule, every positive loop mode would kill $W$, because it lowers degree below zero. Order words by PBW with positive loops on the right, horizontal modes in the middle, and negative loops on the left. Any word applied to $W$ that has degree zero therefore reduces to horizontal modes on $W$, hence stays in $W$; negative loops have strictly positive degree. The affine submodule generated by $W$ would have degree-zero part exactly $W$, contradicting simplicity from [F3]. Its highest weight is $\lambda$, so [F5] and [F6] identify it with finite-dimensional $V_\lambda$. [A1, F3, F5, F6, F7, step 1.2]

3.1 At degree $N$, PBW expresses vectors as sums of negative-loop monomials of total degree $N$ applied to $V_\lambda$. There are finitely many partitions of $N$, and each mode space $\mathfrak g\otimes t^{-m}$ is finite-dimensional; thus each such span is finite-dimensional. If $v$ has degrees at most $N$, then $x_m v$ has degrees below zero whenever $m>N$, so it is zero. This proves finite-dimensional graded pieces and the restrictedness defined in [F8]. [F7, F8, step 2.2, algebra] ∎



