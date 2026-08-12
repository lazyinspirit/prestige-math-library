---
id: thm-representable-functors-preserve-small-limits
kind: theorem
title: "Every covariantly representable functor to Set preserves all existing small limits"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-limit-and-colimit-of-a-diagram, thm-set-has-all-small-limits, def-hom-functors-and-hom-bifunctor, thm-hom-assignments-are-functors, def-presheaf-representable-functor-and-representation, thm-yoneda-lemma-is-natural-in-both-variables]
justified_by: []
aliases: []
landmark: true
proof_strategy: universal-property
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, Theorem 3.5.5"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: frontier-12
---

## Statement

Let $\mathcal C$ be locally small and let
$R:\mathcal C\to\mathbf{Set}$ be covariantly representable. For every small
diagram in $\mathcal C$ whose limit exists, its image under $R$ is a limit in
$\mathbf{Set}$.

## Facts & Assumptions

**Given:** A small $D:\mathcal J\to\mathcal C$, a limit
$(L,\lambda)$, and a representation $R\cong\mathcal C(X,-)$.

[F1] Covariant and contravariant hom-assignments have their stated actions on
morphisms and are functors ([[def-hom-functors-and-hom-bifunctor]],
[[thm-hom-assignments-are-functors]]).

[F2] A covariantly representable functor is naturally isomorphic to
$\mathcal C(X,-)$ ([[def-presheaf-representable-functor-and-representation]]).

[F3] A limit represents compatible cones by unique arrows
([[def-limit-and-colimit-of-a-diagram]]).

[L1] Every small set-valued diagram has a compatible-tuple limit
([[thm-set-has-all-small-limits]]).

[L2] Yoneda's bijection and its inverse are natural in both variables
([[thm-yoneda-lemma-is-natural-in-both-variables]]).

## Proof

**Proof technique:** universal property.

1.1 For the hom-functor, define $\Phi:\mathcal C(X,L)\to\prod_j\mathcal C(X,D(j))$ by $\Phi(f)_j=\lambda_jf$. The cone equations put its image in the compatible subset that [L1] identifies as $\lim_j\mathcal C(X,D(j))$. [F1, F3, L1]

1.2 Conversely, a compatible family $(f_j:X\to D(j))_j$ is a cone over $D$. By [F3] there is a unique $f:X\to L$ with $\lambda_jf=f_j$. This defines an inverse $\Psi$ to $\Phi$. [F3]

2.1 The equations in steps 1.1 and 1.2 give $\Psi\Phi(f)=f$ by limit uniqueness and $\Phi\Psi(f_j)=(f_j)$ coordinatewise. Thus the image cone under $\mathcal C(X,-)$ is a Set-limit. [F3, step 1.1, step 1.2]

3.1 The natural isomorphism in [F2] transports this limiting cone to the image under $R$; its compatibility follows from naturality, equivalently from [L2]. Hence $R$ preserves the limit. Smallness is needed so the limit in [L1] is a set. [F2, L1, L2, step 2.1] ∎
