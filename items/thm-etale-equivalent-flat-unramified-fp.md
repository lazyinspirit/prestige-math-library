---
id: thm-etale-equivalent-flat-unramified-fp
kind: theorem
title: "Étale equals flat and unramified in finite presentation"
status: published
origin: pipeline
deps:
  - def-etale-morphism-schemes
  - def-relative-dimension-smooth-morphism
  - def-smooth-morphism-schemes
  - def-unramified-morphism-finite-type
  - thm-formally-unramified-differentials-zero
  - thm-differentials-smooth-locally-free
  - lem-etale-residue-extensions-finite-separable
  - thm-primitive-element-theorem-for-finite-separable-extensions
  - thm-polynomial-is-separable-iff-coprime-to-its-derivative
  - lem-polynomial-factorisation-into-irreducibles
  - thm-polynomial-quotient-is-a-field-iff-irreducible
  - thm-chinese-remainder-theorem-for-comaximal-ideals
  - cor-tensor-product-with-a-quotient-ring
  - def-sheaf-relative-differentials
  - lem-sheaf-differentials-affine-compatibility
  - def-locally-finite-type-and-finite-type-morphism
  - def-axiom-of-choice
  - def-krull-dimension-of-a-ring
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Sections 29.34-29.36 (etale morphisms, tag 02G4)"
      url: https://stacks.math.columbia.edu/download/morphisms.pdf
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022 public draft, Chapter 26"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume the Axiom of Choice (AC). Let $f:X\to S$ be a morphism locally of finite
presentation and let $x\in X$, $s=f(x)$. Then $f$ is étale at $x$
([[def-etale-morphism-schemes]]) if and only if $f$ is flat at $x$
([[def-flat-morphism-schemes]]) and unramified at $x$
([[def-unramified-morphism-finite-type]]), the latter meaning that $f$ is
locally of finite type at $x$ and formally unramified at $x$, equivalently that
the stalk $\Omega_{X/S,x}$ vanishes
([[thm-formally-unramified-differentials-zero]]).

In the forward direction the relative-dimension-zero hypothesis makes the
locally free module $\Omega_{X/S}$ have rank zero at $x$; in the converse the
vanishing of the differentials forces the fibre local ring to be a finite
separable field extension of $\kappa(s)$ and hence a geometrically regular
zero-dimensional fibre, which is smoothness of relative dimension zero. In
particular, for $f$ locally of finite presentation, étale $=$ flat $+$
unramified, and the separability of the residue extension is a consequence of
the vanishing differentials in finite type over a field, not an extra
hypothesis.

## Facts & Assumptions


**Given:** The data and hypotheses displayed in the Statement, with the conventions fixed there.

[F1] $f$ is étale at $x$ when it is smooth at $x$ and has relative dimension $0$ at $x$ ([[def-etale-morphism-schemes]]); smoothness at $x$ means locally of finite presentation at $x$, flat at $x$, and geometric regularity of the fibre at $x$, and the relative dimension at $x$ is the local dimension of the geometric fibre at every point over $x$ ([[def-smooth-morphism-schemes]], [[def-relative-dimension-smooth-morphism]]).

[F2] Assume AC. If $f$ is smooth at $x$, then $\Omega_{X/S}$ is locally free of finite rank near $x$ and its rank at $x$ equals $\operatorname{reldim}_f(x)$ ([[thm-differentials-smooth-locally-free]]).

[F3] $f$ is unramified at $x$ when $f$ is locally of finite type at $x$ and formally unramified at $x$, and formal unramifiedness at $x$ is equivalent to $\Omega_{X/S,x}=0$ ([[def-unramified-morphism-finite-type]], [[thm-formally-unramified-differentials-zero]]).

[F4] Assume AC. Let $f$ be locally of finite type at $x$ with $\Omega_{X/S,x}=0$. Then $\kappa(x)/\kappa(s)$ is a finite separable extension, and $\mathfrak m_s\mathcal O_{X,x}=\mathfrak m_x$; equivalently the local ring of the fibre at $x$ is $\kappa(x)$ itself ([[lem-etale-residue-extensions-finite-separable]]).

[F5] Let $L/k$ be a finite separable field extension. Then $L=k(\alpha)$ for some $\alpha$, with separable monic minimal polynomial $P\in k[T]$ satisfying $\gcd(P,P')=1$; over any field extension $K/k$ the identity $\gcd(P,P')=1$ persists in $K[T]$, so $P$ has no repeated irreducible factor, and $P$ factors into pairwise distinct irreducibles; the Chinese remainder theorem for the pairwise comaximal ideals $(q_i)$ gives $K[T]/(P)\cong\prod_iK[T]/(q_i)$, a product of fields, and $L\otimes_kK\cong K[T]/(P)$ ([[thm-primitive-element-theorem-for-finite-separable-extensions]], [[thm-polynomial-is-separable-iff-coprime-to-its-derivative]], [[lem-polynomial-factorisation-into-irreducibles]], [[thm-polynomial-quotient-is-a-field-iff-irreducible]], [[thm-chinese-remainder-theorem-for-comaximal-ideals]], [[cor-tensor-product-with-a-quotient-ring]]).

[F6] On an affine chart the sheaf $\Omega_{X/S}$ is the sheaf attached to $\Omega_{B/A}$, so the stalk at $x$ is the localisation of the module of Kähler differentials of the chart; in particular vanishing of the stalk is tested on any affine chart around $x$ ([[def-sheaf-relative-differentials]], [[lem-sheaf-differentials-affine-compatibility]]).

[F7] The Krull dimension of a ring is the supremum of lengths of strict chains of prime ideals, so a product of fields has dimension $0$ at each of its points ([[def-krull-dimension-of-a-ring]]).

[F8] The Axiom of Choice states that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Forward direction. Assume $f$ étale at $x$; then $f$ is smooth at $x$ and $\operatorname{reldim}_f(x)=0$ by [F1]. Smoothness gives flatness at $x$, local finite presentation at $x$ hence local finite type at $x$, all in [F1]. By [F2] the sheaf $\Omega_{X/S}$ is locally free near $x$ with rank $\operatorname{reldim}_f(x)=0$ at $x$, so its stalk at $x$ vanishes. By [F3] the morphism is unramified at $x$. [F1, F2, F3]

1.2 Converse, residue and fibre local ring. Assume $f$ locally of finite presentation, flat at $x$, and unramified at $x$; then $f$ is locally of finite type at $x$ and $\Omega_{X/S,x}=0$ by [F3]. Apply [F4]: $\kappa(x)/\kappa(s)$ is finite separable and $\mathfrak m_s\mathcal O_{X,x}=\mathfrak m_x$, so the local ring of the fibre $X_s$ at $x$ is $\mathcal O_{X,x}/\mathfrak m_s\mathcal O_{X,x}=\mathcal O_{X,x}/\mathfrak m_x=\kappa(x)$, the field $\kappa(x)$. [F3, F4]

2.1 Converse, geometric regularity of the fibre. Keep the hypotheses of step 1.2 and let $K/\kappa(s)$ be any field extension. Write $L=\kappa(x)$, a finite separable extension of $k=\kappa(s)$. By [F5] the ring $L\otimes_kK\cong K[T]/(P)$ is a product of fields, hence reduced with localisations that are fields, and by [F7] each such localisation has dimension zero. The local rings of the geometric fibre $X_s\times_{\operatorname{Spec}\kappa(s)}\operatorname{Spec}K$ at points over $x$ are localisations of $L\otimes_kK$, because the local ring of $X_s$ at $x$ is $L$ by step 1.2 and localisation commutes with base change; hence they are regular local rings of dimension zero. As $K$ was arbitrary, the fibre is geometrically regular at $x$ by the definition [F1]. [F1, F5, F7, step 1.2]

3.1 Converse, conclusion. Under the hypotheses of step 1.2, $f$ is locally of finite presentation at $x$, flat at $x$ and has a geometrically regular fibre at $x$ by step 2.1, so $f$ is smooth at $x$ by [F1]. Moreover the local rings of the geometric fibre over $x$ are products-of-fields localisations of dimension zero (step 2.1), so the relative dimension of $f$ at $x$ is $0$ in the sense of [F1]; by [F1] again, $f$ is étale at $x$. [F1, step 2.1]

4.1 Conclusion and accounting. Step 1.1 proves that étale at $x$ implies flat and unramified at $x$, and steps 1.2, 2.1 and 3.1 prove the converse, so étale $=$ flat $+$ unramified for locally finitely presented morphisms. The vanishing-differential input is tested on affine charts via [F6]. The Axiom of Choice [F8] is assumed in the Statement and is used exactly through [F2] and [F4], and through the field-theoretic suppliers of [F5]; no other selection occurs. [F2, F4, F5, F6, F8, step 1.1, step 3.1] $\square$
