---
id: prop-intertwiner-space-is-a-vector-space-and-endomorphisms-form-a-k-algebra
kind: proposition
title: "$\\operatorname{Hom}_G(V,W)$ is a $k$-vector space and $\\operatorname{End}_G(V)$ is a $k$-algebra"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-algebra-over-a-commutative-ring, def-endomorphism-ring-of-a-module, def-intertwiner-equivalent-and-faithful-representations, prop-endomorphisms-form-a-ring, prop-linear-maps-form-a-vector-space, thm-group-actions-and-group-ring-modules-correspond]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Chapter 2 Section 2.1"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
pipeline_run: null
---

## Statement

Let $V$ and $W$ be representations of a group $G$ over a field $k$.

1. The intertwiner space $\operatorname{Hom}_G(V,W)$ is a $k$-vector space.
2. The endomorphism space $\operatorname{End}_G(V)$ is a $k$-algebra.

## Facts & Assumptions

**Given:** Representations $\rho:G \to \operatorname{GL}(V)$ and $\sigma:G \to \operatorname{GL}(W)$ over a field $k$.

[L1] An intertwiner $f:V \to W$ satisfies $f\rho(g)=\sigma(g)f$ for every $g \in G$, and $\operatorname{End}_G(V)=\operatorname{Hom}_G(V,V)$ ([[def-intertwiner-equivalent-and-faithful-representations]]).

[L2] The space of all linear maps $\mathcal L(V,W)$ is a $k$-vector space ([[prop-linear-maps-form-a-vector-space]]).

[L3] Pointwise addition and composition make $\operatorname{End}_k(V)$ a unital ring ([[prop-endomorphisms-form-a-ring]], [[def-endomorphism-ring-of-a-module]]).

[L4] A $k$-algebra is a unital ring whose multiplication is $k$-bilinear and whose scalar copy of $k$ is central ([[def-algebra-over-a-commutative-ring]]).

## Proof

**Proof technique:** direct.

1.1 The zero map satisfies $0 \rho(g)=0=\sigma(g)0$ for every $g \in G$. If $f,h \in \operatorname{Hom}_G(V,W)$ and $\lambda \in k$, then $(f+h)\rho(g)=f\rho(g)+h\rho(g)=\sigma(g)f+\sigma(g)h=\sigma(g)(f+h)$ and $(\lambda f)\rho(g)=\lambda(f\rho(g))=\lambda(\sigma(g)f)=\sigma(g)(\lambda f)$. So $\operatorname{Hom}_G(V,W)$ contains $0$ and is closed under the pointwise operations of $\mathcal L(V,W)$. [L1, L2, given, algebra]

1.2 When $V=W$, the identity map satisfies $\operatorname{id}_V\rho(g)=\rho(g)=\rho(g)\operatorname{id}_V$, and if $f,h \in \operatorname{End}_G(V)$ then $(fh)\rho(g)=f(h\rho(g))=f(\rho(g)h)=\rho(g)fh$. Thus $\operatorname{End}_G(V)$ is closed under composition and contains the identity. [L1, L3, given, algebra]

2.1 Step 1.1 exhibits $\operatorname{Hom}_G(V,W)$ as a linear subspace of the vector space $\mathcal L(V,W)$ of [L2]. Therefore $\operatorname{Hom}_G(V,W)$ is itself a $k$-vector space. [step 1.1, L2]

3.1 By step 2.1, $\operatorname{End}_G(V)$ is a $k$-vector space. By step 1.2 and [L3], it is also a unital subring of $\operatorname{End}_k(V)$. For $\lambda \in k$ and $f,h \in \operatorname{End}_G(V)$, the usual identities $(\lambda f)h=\lambda(fh)=f(\lambda h)$ show that multiplication is $k$-bilinear and the scalar copy of $k$ is central. Therefore [L4] makes $\operatorname{End}_G(V)$ a $k$-algebra. [step 2.1, step 1.2, L3, L4] ∎
