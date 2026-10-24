---
id: cex-a-kan-extension-that-is-not-pointwise
kind: counterexample
title: "A fully faithful left Kan extension that is not pointwise"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-left-and-right-kan-extension, def-pointwise-kan-extension-by-the-comma-category-formula, def-full-faithful-and-essentially-surjective-functor, def-initial-terminal-and-zero-object]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Example 6.2.17"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement refuted

That a left Kan extension along a fully faithful functor is automatically
pointwise.

The witness is a fully faithful inclusion $K:\mathcal A\hookrightarrow\mathcal D$
and a left Kan extension $(L,\eta)$ of a functor $F:\mathcal A\to\mathcal E$
such that $(K\downarrow m)$ is empty while $L(m)$ is not initial.

## Facts & Assumptions

**Given:** The discrete category $\mathcal A$ on two objects $\ell,r$; the category $\mathcal D$ with objects $\ell,m,r$ and only the arrows $m\to\ell$ and $m\to r$ besides identities; the inclusion $K:\mathcal A\hookrightarrow\mathcal D$; the category $\mathcal E$ with objects $a,b,c,d$, identities, and only the two non-identity arrows $c\to a$ and $c\to b$; the functor $F$ with $F(\ell)=a$ and $F(r)=b$; and the extension $L$ with $L(\ell)=a$, $L(r)=b$, $L(m)=c$, carrying the arrows of $\mathcal D$ to $c\to a$ and $c\to b$.

[F1] A left Kan extension is initial among pairs $(M,\alpha)$ with $\alpha:F\Rightarrow MK$ ([[def-left-and-right-kan-extension]]).

[F2] A pointwise left Kan extension value at $m$ is the colimit of the comma-category diagram on $(K\downarrow m)$ ([[def-pointwise-kan-extension-by-the-comma-category-formula]]).

[F3] A fully faithful functor is bijective on each hom-set ([[def-full-faithful-and-essentially-surjective-functor]]).

[F4] An initial object must have a morphism to every object ([[def-initial-terminal-and-zero-object]]).

## Counterexample

**Proof technique:** direct.

1.1 The inclusion $K$ is fully faithful by [F3]. [F3, given]

2.1 The pair $(L,\eta)$ with $\eta_\ell=1_a$ and $\eta_r=1_b$ is a left Kan extension of $F$ along $K$. Indeed, if $\alpha:F\Rightarrow MK$ exists, then $M(\ell)=a$ and $M(r)=b$, because $a$ and $b$ have no non-identity arrows out of them; and the arrows $m\to\ell$ and $m\to r$ force $M(m)=c$, the only object of $\mathcal E$ with arrows to both $a$ and $b$. So $M=L$, and then $\alpha$ is forced to be the identity on $\ell$ and $r$, which leaves exactly one natural transformation $L\Rightarrow M$. This is the universal property [F1]. [F1, step 1.1]

3.1 But $(K\downarrow m)$ is empty, because there is no arrow from $\ell$ to $m$ and none from $r$ to $m$ in $\mathcal D$. If $(L,\eta)$ were pointwise, [F2] would make $L(m)=c$ the colimit of the empty diagram and hence an initial object of $\mathcal E$. That is impossible by [F4], since there is no morphism $c\to d$. So this left Kan extension is not pointwise. [F2, F4, step 2.1, assume-hyp]

4.1 Therefore the claim is false: a fully faithful left Kan extension need not be pointwise. [step 3.1] ∎
