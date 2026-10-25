---
id: cex-a-kac-moody-verma-module-is-not-integrable-in-general
kind: counterexample
title: A kac moody verma module is not integrable in general
status: published
origin: pipeline
deps: [thm-universal-property-and-pbw-character-of-kac-moody-verma-modules, def-integrable-kac-moody-module, def-kac-moody-verma-module, lem-pbw-for-countably-presented-kac-moody-lie-algebras, prop-kac-moody-root-spaces-are-finite-dimensional]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Kleshchev, Lectures on Infinite Dimensional Lie Algebras
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
    - title: Perrin, Introduction to Kac-Moody Groups and Lie Algebras
      url: https://lmv.math.cnrs.fr/wp-content/uploads/2019/09/km-suite.pdf
proof_strategy: direct
---

## Statement refuted

False claim: a Kac–Moody Verma module of dominant integral highest weight is integrable.

For every finite GCM with at least one simple index and every $\lambda$, its Verma highest vector satisfies $f_i^Nv_\lambda\ne0$ for every $N\geq0$ and every simple index $i$. Thus no such Verma module is integrable, even at dominant integral $\lambda$. The concrete witness is $A=[2]$, $\lambda=0$.

## Facts & Assumptions

**Given:** A finite GCM with at least one simple index and its Verma module.

[F1] Verma modules are nonzero highest-weight modules with highest vector $v_\lambda$ ([[thm-universal-property-and-pbw-character-of-kac-moody-verma-modules]]).

[F2] Integrability requires local nilpotence of every $f_i$ ([[def-integrable-kac-moody-module]]).

[F3] The induced tensor construction identifies $M_A(\lambda)$ with $U(\mathfrak n^-)$, sending $v_\lambda$ to $1$ ([[def-kac-moody-verma-module]]).

[F4] Ordered monomials form a basis for the enveloping algebra, with homogeneous bases available without AC ([[lem-pbw-for-countably-presented-kac-moody-lie-algebras]]).

[F5] The simple negative root space is the nonzero line $\mathbb Cf_i$ ([[prop-kac-moody-root-spaces-are-finite-dimensional]]).

## Counterexample

1.1 Fix a simple index $i$. By F5 its simple negative root space is one dimensional with specified nonzero vector $f_i$. Use the homogeneous basis in F4, replacing its vector at that degree by $f_i$ if needed; this is a single nonzero rescaling. For every $N\geq0$, the ordered monomial consisting of $N$ copies of $f_i$ is a PBW basis monomial by F4, including the empty monomial $1$ at $N=0$. Hence these powers are nonzero and independent in $U(\mathfrak n^-)$. F3 identifies them with $f_i^Nv_\lambda$, so none vanishes. [F3, F4, F5, given]

2.1 By 1.1, the single nonzero vector $v_\lambda$ from F1 is killed by no power of $f_i$. This fails the local nilpotence requirement F2 and proves nonintegrability. For the explicit witness $A=[2]$, $\lambda=0$, the label zero is dominant integral, while $v_0,fv_0,f^2v_0,\ldots$ are all nonzero independent vectors. Thus the extra dominant-weight hypothesis does not repair the false claim. This includes the zeroth and first powers; there is no terminal power. A GCM with no simple indices is excluded, since then there is no lowering operator to witness failure. The basis construction and one specified rescaling require no AC. [F1, F2, step 1.1] ∎
