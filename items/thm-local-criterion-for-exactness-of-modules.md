---
id: thm-local-criterion-for-exactness-of-modules
kind: theorem
title: "Assuming the Axiom of Choice, a sequence of modules is exact exactly when all prime localisations are exact"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-local-criterion-for-zero-modules-and-maps, cor-localisation-commutes-with-kernels-images-and-cokernels, thm-localisation-of-modules-commutes-with-quotients-and-sums, def-exact-and-short-exact-sequences-of-modules, def-module-homomorphism-kernel-image-and-cokernel]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Proposition 13.43"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Proposition 5.16"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice.

Let
$$
M' \xrightarrow{f} M \xrightarrow{g} M''
$$
be a sequence of $R$-module homomorphisms with $g \circ f=0$. Then the sequence is exact at $M$ if and only if, for every prime ideal $\mathfrak p$, the localised sequence
$$
M'_{\mathfrak p} \xrightarrow{f_{\mathfrak p}} M_{\mathfrak p} \xrightarrow{g_{\mathfrak p}} M''_{\mathfrak p}
$$
is exact at $M_{\mathfrak p}$. Equivalently, it suffices to check exactness at every maximal ideal.

## Facts & Assumptions

**Given:** A commutative ring $R$ and a sequence $M' \xrightarrow{f} M \xrightarrow{g} M''$ of left $R$-modules with $g \circ f=0$.

[L1] Exactness at $M$ means $\operatorname{im}f=\ker g$ ([[def-exact-and-short-exact-sequences-of-modules]]).

[L2] Localisation identifies kernels and images, and it commutes with quotient modules ([[cor-localisation-commutes-with-kernels-images-and-cokernels]], [[thm-localisation-of-modules-commutes-with-quotients-and-sums]]).

[L3] A module is zero exactly when all of its prime localisations are zero, equivalently all of its maximal localisations are zero ([[thm-local-criterion-for-zero-modules-and-maps]]).

[L4] The image and kernel are the standard submodule constructions attached to a module homomorphism ([[def-module-homomorphism-kernel-image-and-cokernel]]).

## Proof

**Proof technique:** direct.

1.1 Because $g \circ f=0$, one has $\operatorname{im}f \subseteq \ker g$, so the quotient module $H:=\ker g/\operatorname{im}f$ is defined. By [L1], the original sequence is exact at $M$ if and only if $H=0$. [L1, L4]

2.1 For every prime ideal $\mathfrak p$, [L2] gives $H_{\mathfrak p} \cong (\ker g)_{\mathfrak p}/(\operatorname{im}f)_{\mathfrak p} \cong \ker(g_{\mathfrak p})/\operatorname{im}(f_{\mathfrak p})$. Therefore the localised sequence is exact at $M_{\mathfrak p}$ if and only if $H_{\mathfrak p}=0$. [L2, step 1.1]

3.1 By [L3], $H=0$ if and only if $H_{\mathfrak p}=0$ for every prime ideal $\mathfrak p$, and this is equivalent to $H_{\mathfrak m}=0$ for every maximal ideal $\mathfrak m$. Combining this with steps 1.1 and 2.1 gives the prime-local and maximal-local exactness criteria. [L3, step 1.1, step 2.1]

4.1 Step 3.1 proves the theorem. [step 3.1] ∎
