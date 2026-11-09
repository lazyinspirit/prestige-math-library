---
id: lem-characteristic-zero-top-torsion
kind: lemma
title: Characteristic-zero coefficient vanishing and torsion freeness
status: draft
domain: mathematics
deps:
  - def-article-conventions
  - def-motivic-cohomology
  - lem-author-2ac325480ae8-chosen-root
  - thm-author-c5b0693f4fc3-top-torsion-topweight-comparison
  - thm-author-c5b0693f4fc3-top-torsion-artin-affine
  - lem-derived-coefficient-exact-sequence
  - lem-author-c5b0693f4fc3-top-torsion-primewise
dependency_roles:
  def-article-conventions: mathematical-premise
  def-motivic-cohomology: mathematical-premise
  lem-author-2ac325480ae8-chosen-root: mathematical-premise
  thm-author-c5b0693f4fc3-top-torsion-topweight-comparison: mathematical-premise
  thm-author-c5b0693f4fc3-top-torsion-artin-affine: mathematical-premise
  lem-derived-coefficient-exact-sequence: mathematical-premise
  lem-author-c5b0693f4fc3-top-torsion-primewise: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: p. 6, proof of Proposition 2.6
      reading_limits: The frozen article extraction records the stated
        characteristic-zero argument. The proof below uses the specified
        top-weight comparison draft supplier as an alternative route; it does
        not claim to reconstruct the article’s cdh argument.
proof_strategy: direct
dependency_level: 11
---

## Statement
Let $k$ be an algebraically closed field of characteristic zero and let $X$ be an affine threefold over $k$. For every prime $p$, choosing a primitive $p$th root of unity in $k$ gives an isomorphism
$$H^{5,3}_{\mathrm{mot}}(X,\mathbb Z/p)\cong H^5_{\mathrm{et}}(X,\mathbb Z/p)=0.$$
Consequently multiplication by $p$ is injective on $H^{6,3}_{\mathrm{mot}}(X,\mathbb Z)$ for every prime $p$, and this group is torsion-free.

Here affine threefold means $X=\operatorname{Spec}A$, with $A$ a finitely generated $k$-algebra and $\dim X=3$, as in [[def-article-conventions]]; no smoothness, reducedness, or irreducibility is assumed. The motivic groups are the cohomology of the Elmanto–Morrow weight-three complex, with finite coefficients formed by derived tensor product after evaluation, as defined in [[def-motivic-cohomology]]. The étale group is the cohomology of the small étale site of $X$ with the constant sheaf $\mathbb Z/p$. Torsion-free means that no nonzero element is annihilated by a positive integer.

## Facts & Assumptions

**Given:** An algebraically closed characteristic-zero field $k$, an affine finite-type $k$-scheme $X$ of dimension three, and a prime $p$.

**Goal:** Establish the displayed isomorphism and vanishing, the coefficient-sequence injectivity, and torsion-freeness.

[F1] [[def-motivic-cohomology]] defines $C=\mathbb Z(3)_{\mathrm{mot}}(X)$, $H^{i,3}_{\mathrm{mot}}(X,\mathbb Z)=H^i(C)$, and $H^{i,3}_{\mathrm{mot}}(X,\mathbb Z/p)=H^i(C\otimes^{\mathbf L}\mathbb Z/p)$.

[F2] [[thm-author-c5b0693f4fc3-top-torsion-topweight-comparison]] gives, for finite-type $X$ over an algebraically closed field and weight $j\geq\dim X$, an equivalence from the actual finite-coefficient motivic complex to $R\Gamma_{\mathrm{et}}(X,\mu_p^{\otimes j})$ when $p$ is invertible in the field. Here $\mu_p$ is the étale sheaf of $p$th roots of unity and $\mu_p^{\otimes j}$ is its $j$-fold tensor power over $\mathbb Z/p$.

[F3] [[lem-author-2ac325480ae8-chosen-root]] says that a chosen primitive $p$th root $\zeta\in k$ induces an isomorphism of étale sheaves $\mathbb Z/p\xrightarrow{\sim}\mu_p^{\otimes3}$, sending $1$ to $\zeta^{\otimes3}$. [[thm-author-c5b0693f4fc3-top-torsion-artin-affine]] gives $H^i_{\mathrm{et}}(X,\mu_p^{\otimes3})=0$ for $i>\dim X$ under the present affine, finite-type and invertibility hypotheses.

[F4] [[lem-derived-coefficient-exact-sequence]] supplies the exact sequence $H^5(C/p)\to H^6(C)\xrightarrow{p}H^6(C)$, where $C/p=C\otimes^{\mathbf L}\mathbb Z/p$. [[lem-author-c5b0693f4fc3-top-torsion-primewise]] says an abelian group is torsion-free if multiplication by every prime is injective.

## Proof

1.1 Characteristic zero makes $p$ invertible in $k$. Since $k$ is algebraically closed, $T^p-1$ splits in $k$; its roots are distinct because its derivative $pT^{p-1}$ has no common root with it. The group of its $p$ roots has order $p$, so any nonidentity root $\zeta$ has order $p$. Thus the chosen-root hypothesis of [F3] holds. [given, F3, construct]

2.1 Apply [F2] with $j=3=\dim X$. Using [F1] and taking degree-five cohomology gives an isomorphism from $H^{5,3}_{\mathrm{mot}}(X,\mathbb Z/p)$ to $H^5_{\mathrm{et}}(X,\mu_p^{\otimes3})$. The inverse of the coefficient isomorphism in [F3] identifies this with $H^5_{\mathrm{et}}(X,\mathbb Z/p)$. The latter identification depends on the choice of $\zeta$. [F1, F2, F3, step 1.1]

3.1 By affine étale vanishing in [F3], $H^5_{\mathrm{et}}(X,\mu_p^{\otimes3})=0$ because $5>3$. Step 2.1 therefore proves both the displayed isomorphism and the vanishing. [F3, step 2.1]

4.1 The first term of the exact sequence in [F4] is zero by [F1] and step 3.1. Exactness therefore makes multiplication by $p$ injective on $H^6(C)=H^{6,3}_{\mathrm{mot}}(X,\mathbb Z)$. [F1, F4, step 3.1]

5.1 The argument applies to every prime $p$. The primewise criterion in [F4] now shows that $H^{6,3}_{\mathrm{mot}}(X,\mathbb Z)$ is torsion-free. This proves all assertions. [F4, step 4.1] ∎
