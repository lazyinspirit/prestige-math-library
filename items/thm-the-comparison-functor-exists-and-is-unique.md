---
id: thm-the-comparison-functor-exists-and-is-unique
kind: theorem
title: "The comparison functor to the Eilenberg–Moore category exists and is unique"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: literature-derived
deps: [thm-the-eilenberg-moore-adjunction-induces-the-given-monad, rem-the-universal-properties-of-kleisli-and-eilenberg-moore-are-schematic, def-adjunction-by-unit-counit-and-triangle-identities, thm-every-adjunction-induces-a-monad-on-the-domain-of-its-left-adjoint]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Proposition 5.2.13"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "S. Mac Lane, Categories for the Working Mathematician, 2nd ed., Chapter VI.3"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: null
---

## Statement

Let $F:\mathcal C\rightleftarrows\mathcal D:U$ be an adjunction with counit $\varepsilon$ inducing a fixed monad $T$ on $\mathcal C$ on the nose, and write $F^T\dashv U^T$ for the Eilenberg–Moore adjunction with counit $\varepsilon^T$. There is exactly one functor $K:\mathcal D\to\mathcal C^T$ satisfying

$$U^TK=U,\qquad KF=F^T,\qquad K(\varepsilon_d)=\varepsilon^T_{Kd}\ \text{for every object }d,$$

namely the **comparison functor**

$$K(d)=(Ud,U\varepsilon_d),\qquad K(h)=U(h).$$

These three equalities are what it means for $K$ to be a morphism of adjunctions from $F\dashv U$ to the Eilenberg–Moore adjunction.

## Facts & Assumptions

**Given:** An adjunction $F\dashv U$ with unit $\eta$ and counit $\varepsilon$ as in [[def-adjunction-by-unit-counit-and-triangle-identities]], inducing $T=UF$ and $\mu=U\varepsilon F$ as in [[thm-every-adjunction-induces-a-monad-on-the-domain-of-its-left-adjoint]], together with the Eilenberg–Moore adjunction of [[thm-the-eilenberg-moore-adjunction-induces-the-given-monad]].

## Proof

**Proof technique:** direct.

1.1 For $d\in\mathcal D$ set $K(d)=(Ud,U\varepsilon_d)$, and for $h:d\to d'$ set $K(h)=Uh$. [given]

2.1 The triangle identity gives $U\varepsilon_d\circ\eta_{Ud}=1_{Ud}$. Naturality of $\varepsilon$ at $\varepsilon_d$ gives the algebra associativity equation for $U\varepsilon_d$, and naturality at $h$ gives $Uh\circ U\varepsilon_d=U\varepsilon_{d'}\circ T(Uh)$; hence the objects and arrows in step 1.1 are algebras and algebra homomorphisms. [step 1.1, given]

3.1 Directly $U^TK=U$, and $KFA=(UFA,U\varepsilon_{FA})=(TA,\mu_A)=F^TA$; the Eilenberg–Moore counit at $K(d)$ is $U\varepsilon_d$, so the counit data also agree. These strict equalities force the underlying arrow action and every structure map, proving uniqueness. [step 1.1, step 2.1] ∎
