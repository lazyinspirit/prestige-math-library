---
id: lem-cft-positive-integer-affine-highest-weight-is-integrable
kind: lemma
title: Positive-integral-level simple affine module is integrable
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 3
domain: mathematics
library: mathematics
deps:
  - def-cft-simple-affine-voa
  - lem-cft-simple-affine-quotient-exists
  - def-kac-moody-integral-and-dominant-integral-weights
  - def-integrable-kac-moody-module
  - thm-integrability-criterion-for-simple-highest-weight-kac-moody-modules
  - def-null-root-central-coroot-and-affine-level
  - def-degree-derivation-and-full-untwisted-affine-algebra
  - lem-finite-semisimple-cartan-root-and-string-structure
  - lem-the-affine-simple-root-alpha-zero-is-delta-minus-the-highest-root
  - prop-roots-of-an-untwisted-affine-lie-algebra
  - def-untwisted-affine-central-extension
  - def-cft-affine-fundamental-weight-lambda-zero
dependency_roles:
  def-cft-simple-affine-voa: mathematical-premise
  lem-cft-simple-affine-quotient-exists: mathematical-premise
  def-kac-moody-integral-and-dominant-integral-weights: mathematical-premise
  def-integrable-kac-moody-module: mathematical-premise
  thm-integrability-criterion-for-simple-highest-weight-kac-moody-modules: mathematical-premise
  def-null-root-central-coroot-and-affine-level: mathematical-premise
  def-degree-derivation-and-full-untwisted-affine-algebra: mathematical-premise
  lem-finite-semisimple-cartan-root-and-string-structure: mathematical-premise
  lem-the-affine-simple-root-alpha-zero-is-delta-minus-the-highest-root: mathematical-premise
  prop-roots-of-an-untwisted-affine-lie-algebra: mathematical-premise
  def-untwisted-affine-central-extension: mathematical-premise
  def-cft-affine-fundamental-weight-lambda-zero: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Tomoyuki Arakawa and Anne Moreau, Arc spaces and vertex algebras
      url: https://www.imo.universite-paris-saclay.fr/~anne.moreau/Arc_space-vertex_algebras-BOOK_version.pdf
      locator: "§11.1, Theorem 11.1 and its affine-module conventions, printed pp. 217–218."
    - title: Chongying Dong, Haisheng Li, and Geoffrey Mason, Regularity of Rational Vertex Operator Algebras
      url: https://arxiv.org/pdf/q-alg/9508018v1
      locator: "§3, Lemma 3.6 and Theorem 3.7, printed pp. 6–8."
---

## Statement

For a finite-dimensional complex simple Lie algebra $\mathfrak g$ and a positive integer $\ell$, the affine Kac–Moody module underlying $L_\ell(\mathfrak g)$ is the integrable highest-weight module of level $\ell$ and highest weight $\ell\Lambda_0$. For each finite root $\alpha$, the real affine root $\delta-\alpha$ has coroot $-\alpha^\vee+\frac{2}{(\alpha,\alpha)}c$, so its pairing with $\ell\Lambda_0$ is the positive integer $\frac{2\ell}{(\alpha,\alpha)}$.

## Facts & Assumptions

**Given:** The finite-dimensional complex simple Lie algebra, the long-root normalization, and $\ell\in\mathbb Z_{>0}$.

[F1] [[def-cft-simple-affine-voa]] and [[lem-cft-simple-affine-quotient-exists]] identify $L_\ell(\mathfrak g)$ with the simple highest-weight module of affine highest weight $\ell\Lambda_0$; [[def-cft-affine-fundamental-weight-lambda-zero]] fixes $\Lambda_0(c)=1$, $\Lambda_0(d)=0$, and $\Lambda_0|_{\mathfrak h}=0$.

[F2] [[def-untwisted-affine-central-extension]] gives the loop-mode bracket and central term; [[lem-the-affine-simple-root-alpha-zero-is-delta-minus-the-highest-root]] fixes $\alpha_0=\delta-\theta$, $h_0=c-\theta^\vee$, and the affine normalization.

[F3] [[prop-roots-of-an-untwisted-affine-lie-algebra]] gives the affine root list. Its proof, Steps 2.2–3.1, shows that each $\delta-\alpha$ is positive and real by a finite-height descent. Here “real” means a Weyl translate of a simple root; the real-root prerequisites in that proposition's dependency chain supply the transported $\mathfrak{sl}_2$ triple and its coroot $w h_i$. [[lem-finite-semisimple-cartan-root-and-string-structure]] supplies one-dimensional opposite finite-root spaces and root vectors with $[e_\alpha,f_\alpha]=\alpha^\vee$. Its Cartan-dual and coroot formulas use the Killing form, denoted $\kappa$ below; step 1.2 transports them to the normalized form $B$ in [F2].

[F4] [[def-null-root-central-coroot-and-affine-level]] fixes level as the value on $c$; [[def-kac-moody-integral-and-dominant-integral-weights]] defines dominance by nonnegative integer simple-coroot labels.

[F5] [[thm-integrability-criterion-for-simple-highest-weight-kac-moody-modules]] says a simple highest-weight module for a finite generalized Cartan matrix is integrable exactly when its highest weight is dominant integral.

## Proof

1.1 In the untwisted affine realization, $\Lambda_0(c)=1$, $\Lambda_0(d)=0$, and $\Lambda_0(h_i)=0$ for the finite simple coroots. Since $h_0=c-\theta^\vee$ by [F2], $\Lambda_0(h_0)=1$. Thus $\ell\Lambda_0$ has affine simple-coroot labels $\ell$ at node $0$ and $0$ at every finite node, so it is dominant integral under [F4]. Define $\widehat P=\{\lambda\in\widehat{\mathfrak h}^{*}:\lambda(h_i)\in\mathbb Z\text{ for every affine simple coroot }h_i\}$. The affine Weyl action on weights is $s_i\lambda=\lambda-\lambda(h_i)\alpha_i$. Hence for every $\lambda\in\widehat P$ and every $j$, $(s_i\lambda)(h_j)=\lambda(h_j)-\lambda(h_i)\alpha_i(h_j)\in\mathbb Z$, since $\alpha_i(h_j)$ is an entry of the affine generalized Cartan matrix. The simple reflections generate the affine Weyl group, so it preserves $\widehat P$. [F2, F4, given, algebra]

1.2 Write $B=s\kappa$ with $s>0$, as specified by the normalized form in [F2]. For a finite root $\alpha$, let $H_\alpha^\kappa\in\mathfrak h$ satisfy $\kappa(H_\alpha^\kappa,h)=\alpha(h)$ for all $h\in\mathfrak h$, and put $q_\alpha=\alpha(H_\alpha^\kappa)>0$. By [F3], $\alpha^\vee=2H_\alpha^\kappa/q_\alpha$. Invariance applied to $[e_\alpha,f_\alpha]=\alpha^\vee$ gives $\kappa(e_\alpha,f_\alpha)=2/q_\alpha$. The $B$-dual representative is $H_\alpha^B=s^{-1}H_\alpha^\kappa$, so the normalized dual root form satisfies $(\alpha,\alpha)=\alpha(H_\alpha^B)=q_\alpha/s$. Consequently $\alpha^\vee=2H_\alpha^B/(\alpha,\alpha)$ and $B(e_\alpha,f_\alpha)=s\kappa(e_\alpha,f_\alpha)=2/(\alpha,\alpha)$. Thus the coroot and the chosen root triple are unchanged by the rescaling, while the pairing has exactly the normalization required by the affine cocycle. [F2, F3, algebra]

2.1 Fix $\alpha\in\Delta$ and set $\gamma=\delta-\alpha$. By [F3], $\gamma$ is a positive real affine root, hence $\gamma=w\alpha_i$ for an affine Weyl element $w$ and a simple root $\alpha_i$. The simple-reflection Lie automorphisms implementing a word for $w$ carry the simple-root triple $(e_i,f_i,h_i)$ to an $\mathfrak{sl}_2$ triple in the $\gamma,-\gamma$ root spaces; its bracket gives the real coroot $\gamma^\vee=w h_i$. In the loop realization these root spaces contain $f_\alpha\otimes t$ and $e_\alpha\otimes t^{-1}$. Their affine bracket is $[f_\alpha\otimes t,e_\alpha\otimes t^{-1}]=-[e_\alpha,f_\alpha]+B(f_\alpha,e_\alpha)c=-\alpha^\vee+\frac{2}{(\alpha,\alpha)}c$, by [F2] and step 1.2. This bracket has $\gamma$-value $2$, so these loop root vectors also form a normalized $\mathfrak{sl}_2$ triple. In one-dimensional opposite root spaces, any two nonzero pairs differ by two scalars; requiring their brackets to have $\gamma$-value $2$ forces the product of those scalars to be $1$. Their brackets therefore agree, identifying the displayed bracket with $\gamma^\vee$. Since $\alpha^\vee\in\mathfrak h$, $\Lambda_0(\alpha^\vee)=0$, and $(\ell\Lambda_0)(c)=\ell$, the bracket formula gives $(\ell\Lambda_0)(\gamma^\vee)=2\ell/(\alpha,\alpha)$. This value is an integer because the Weyl actions on the Cartan and its dual satisfy $(\ell\Lambda_0)(w h_i)=(w^{-1}(\ell\Lambda_0))(h_i)$ and $w^{-1}(\ell\Lambda_0)\in\widehat P$ by step 1.1. It is positive because the finite root form is positive definite and $\ell>0$. This proves the real-coroot formula and the positive-integer assertion for every finite root. [F2, F3, F4, step 1.1, step 1.2, algebra]

3.1 By [F1], the module underlying $L_\ell(\mathfrak g)$ is the simple affine highest-weight module $L_{\widehat A}(\ell\Lambda_0)$. Its highest weight is dominant integral by step 1.1, and the affine GCM $\widehat A$ is finite, so [F5] applies and makes this module integrable in the weight-module/local-nilpotence sense of [[def-integrable-kac-moody-module]]. [F1, F5, step 1.1] ∎
