---
id: thm-etale-morphisms-open-and-quasi-finite
kind: theorem
title: "Etale morphisms are universally open and quasi-finite at every point"
status: published
origin: pipeline
deps:
  - def-etale-morphism-schemes
  - def-flat-morphism-schemes
  - thm-flat-finite-presentation-is-open
  - def-open-morphism-schemes
  - def-quasi-finite-morphism-schemes
  - def-quasi-finite-at-a-prime-for-finite-type-algebras
  - def-scheme-theoretic-fibre
  - thm-etale-equivalent-flat-unramified-fp
  - thm-formally-unramified-differentials-zero
  - def-unramified-morphism-finite-type
  - lem-etale-residue-extensions-finite-separable
  - def-locally-finite-type-and-finite-type-morphism
  - def-locally-finite-presentation-morphism
  - def-smooth-morphism-schemes
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Section 29.36 (etale morphisms are open and quasi-finite, tag 02G4)"
      url: https://stacks.math.columbia.edu/download/morphisms.pdf
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022 public draft, Chapter 26 (etale maps are open and quasi-finite)"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $f\colon X\to S$ be
\'etale ([[def-etale-morphism-schemes]]).

1. $f$ is flat and locally of finite presentation
   ([[def-flat-morphism-schemes]],
   [[def-locally-finite-presentation-morphism]]) and therefore universally
   open ([[def-open-morphism-schemes]]).
2. $f$ is quasi-finite at every point $x\in X$ in the pointwise sense of the
   definition of quasi-finiteness: with $s=f(x)$ there are affine neighbourhoods
   $U=\operatorname{Spec}B$ of $x$ and $V=\operatorname{Spec}A$ of $s$ with
   $f(U)\subseteq V$ and $A\to B$ of finite type such that the fibre algebra
   $B_{\mathfrak q}/\mathfrak pB_{\mathfrak q}$ is finite-dimensional over
   $\kappa(\mathfrak p)$, $\mathfrak q$ the prime of $x$ and
   $\mathfrak p=\mathfrak q\cap A$
   ([[def-quasi-finite-morphism-schemes]],
   [[def-quasi-finite-at-a-prime-for-finite-type-algebras]]); in fact
   $B_{\mathfrak q}/\mathfrak pB_{\mathfrak q}=\kappa(x)$, a finite separable
   extension of $\kappa(s)$.
3. If in addition $f$ is quasi-compact, then $f$ is of finite type and
   quasi-finite in the sense of [[def-quasi-finite-morphism-schemes]]. The
   distinction between the local statement 2 and the global statement 3 is
   essential: \'etale by itself is a local condition and need not be of finite
   type.

## Facts & Assumptions


**Given:** The data and hypotheses displayed in the Statement, with the conventions fixed there.

[F1] \'Etale at $x$ means smooth at $x$ of relative dimension $0$, i.e. locally of finite presentation at $x$, flat at $x$, and geometrically regular fibres of local dimension $0$ at the points over $x$; $f$ is \'etale when this holds at every point, and a smooth morphism is flat and locally of finite presentation at each of its points ([[def-etale-morphism-schemes]], [[def-smooth-morphism-schemes]], [[def-flat-morphism-schemes]], [[def-locally-finite-presentation-morphism]]).

[F2] Assume AC. A morphism that is flat and locally of finite presentation is universally open, hence open: every base change of $f$ is an open map ([[thm-flat-finite-presentation-is-open]], [[def-open-morphism-schemes]]).

[F3] Assume AC. For $f$ locally of finite presentation, $f$ is \'etale at $x$ if and only if $f$ is flat at $x$ and unramified at $x$; unramified at $x$ means locally of finite type at $x$ together with formal unramifiedness, equivalently $\Omega_{X/S,x}=0$ ([[thm-etale-equivalent-flat-unramified-fp]], [[def-unramified-morphism-finite-type]], [[thm-formally-unramified-differentials-zero]]).

[F4] Assume AC. If $f$ is locally of finite type at $x$ and $\Omega_{X/S,x}=0$, then $\kappa(x)/\kappa(s)$ is a finite separable extension and $\mathfrak m_s\mathcal O_{X,x}=\mathfrak m_x$ ([[lem-etale-residue-extensions-finite-separable]]).

[F5] $f$ is quasi-finite at a prime $\mathfrak q$ of a finite type chart $A\to B$ when $B_{\mathfrak q}/\mathfrak pB_{\mathfrak q}$ is a finite-dimensional $\kappa(\mathfrak p)$-algebra, and this quotient is the local ring of the scheme-theoretic fibre $X_{f(x)}$ at $x$; $f$ is quasi-finite when it is of finite type and this holds at every point, while a morphism is of finite type exactly when it is locally of finite type and quasi-compact ([[def-quasi-finite-morphism-schemes]], [[def-quasi-finite-at-a-prime-for-finite-type-algebras]], [[def-scheme-theoretic-fibre]], [[def-locally-finite-type-and-finite-type-morphism]]).

[F6] The Axiom of Choice states that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Flatness, finite presentation and universal openness. Since $f$ is \'etale it is smooth of relative dimension $0$ at every point, hence flat and locally of finite presentation at every point by [F1], i.e. $f$ is flat and locally of finite presentation. By [F2] (AC) $f$ is universally open, so claim 1 holds. [F1, F2]

1.2 Local quasi-finiteness at a point. Let $x\in X$ and $s=f(x)$. By [F1] $f$ is locally of finite presentation at $x$; by [F3] (AC) in the forward direction, applied at $x$, the morphism is unramified at $x$, so $\Omega_{X/S,x}=0$. By [F4] the extension $\kappa(x)/\kappa(s)$ is finite separable and $\mathfrak m_s\mathcal O_{X,x}=\mathfrak m_x$. Choose a finite type affine chart $U=\operatorname{Spec}B$ of $x$ over $V=\operatorname{Spec}A\ni s$ with $f(U)\subseteq V$, with $\mathfrak q$ the prime of $x$ and $\mathfrak p=\mathfrak q\cap A$; the fibre algebra is $B_{\mathfrak q}/\mathfrak pB_{\mathfrak q}=\mathcal O_{X,x}/\mathfrak m_s\mathcal O_{X,x}=\mathcal O_{X,x}/\mathfrak m_x=\kappa(x)$ by [F5], a finite-dimensional $\kappa(\mathfrak p)$-vector space because $\kappa(x)/\kappa(s)$ is finite and $\kappa(\mathfrak p)=\kappa(s)$ for the affine chart. Hence $f$ is quasi-finite at $x$ in the pointwise sense of [F5]. [F1, F3, F4, F5]

2.1 Global consequence under quasi-compactness. Assume in addition that $f$ is quasi-compact. Since $f$ is locally of finite presentation by [F1], it is locally of finite type, so by [F5] $f$ is of finite type. By step 1.2 the pointwise quasi-finiteness condition holds at every point of $X$, so $f$ is quasi-finite by [F5]. Claim 2 is step 1.2 and claim 3 is this step; the local statement 2 does not require quasi-compactness, which is exactly what the finite type hypothesis of the global notion adds. [F1, F5, step 1.2]

3.1 Boundary and choice accounting. If $X$ is empty then every pointwise condition is vacuous and claims 1, 2 and 3 hold vacuously, including the empty source case of quasi-finiteness recorded in [F5]; the Axiom of Choice [F6] is assumed in the Statement and used exactly through [F2] in step 1.1 and through [F3] and [F4] in step 1.2, while steps 2.1 and this step add no choice. [F2, F3, F4, F5, F6, step 1.1, step 1.2, step 2.1] $\square$

$\square$
