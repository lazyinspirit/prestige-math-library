---
id: fs-every-kan-extension-is-pointwise
kind: false-statement
title: "FALSE: every Kan extension is pointwise"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-left-and-right-kan-extension, def-pointwise-kan-extension-by-the-comma-category-formula, thm-the-two-notions-of-pointwise-agree, thm-a-kan-extension-along-a-fully-faithful-functor-genuinely-extends-when-it-is-pointwise, def-full-faithful-and-essentially-surjective-functor, def-initial-terminal-and-zero-object]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Example 6.2.17"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement refuted

That every left or right Kan extension is pointwise.

The witness below is a left Kan extension along a fully faithful functor which
is not pointwise.

## Facts & Assumptions

**Given:** The discrete category $\mathcal A$ on two objects $\ell,r$; the category $\mathcal D$ with objects $\ell,m,r$ and only the two non-identity arrows $m\to\ell$ and $m\to r$; the fully faithful inclusion $K:\mathcal A\hookrightarrow\mathcal D$; the category $\mathcal E$ with objects $a,b,c,d$, identities, and only the two non-identity arrows $c\to a$ and $c\to b$; the functor $F:\mathcal A\to\mathcal E$ with $F(\ell)=a$ and $F(r)=b$; and the extension $L:\mathcal D\to\mathcal E$ with $L(\ell)=a$, $L(r)=b$, $L(m)=c$, and the two displayed arrows.

[F1] A fully faithful functor is one that is bijective on each hom-set ([[def-full-faithful-and-essentially-surjective-functor]]).

[F2] A left Kan extension is initial among pairs $(M,\alpha)$ with $\alpha:F\Rightarrow MK$, while pointwise left Kan extensions are computed by the comma-category formula ([[def-left-and-right-kan-extension]], [[def-pointwise-kan-extension-by-the-comma-category-formula]], [[thm-the-two-notions-of-pointwise-agree]]).

[F3] A pointwise left Kan extension along a fully faithful functor would restrict back by isomorphism to the original functor ([[thm-a-kan-extension-along-a-fully-faithful-functor-genuinely-extends-when-it-is-pointwise]]).

[F4] An initial object must admit a morphism to every object ([[def-initial-terminal-and-zero-object]]).

## Refutation

**Proof technique:** direct.

1.1 The inclusion $K$ is fully faithful by [F1], and the pair $(L,\eta)$ with $\eta_\ell=1_a$ and $\eta_r=1_b$ is a left Kan extension of $F$ along $K$: if $\alpha:F\Rightarrow MK$ exists, then necessarily $M(\ell)=a$ and $M(r)=b$, since $a$ has no non-identity arrow out of it and neither does $b$; and because $M$ must carry the arrows $m\to\ell$ and $m\to r$ to arrows into $a$ and $b$, necessarily $M(m)=c$, the only object of $\mathcal E$ with arrows to both. Thus $M=L$ and $\alpha$ is forced to be the identity on $\ell$ and $r$, so there is exactly one natural transformation $L\Rightarrow M$. [F1, F2, given]

2.1 But $(K\downarrow m)$ is empty: there is no arrow $\ell\to m$ and no arrow $r\to m$ in $\mathcal D$. If $(L,\eta)$ were pointwise, [F2] would make $L(m)=c$ the colimit of the empty diagram, hence an initial object of $\mathcal E$. This is impossible by [F4], since there is no morphism $c\to d$. Therefore $(L,\eta)$ is a left Kan extension which is not pointwise. [F2, F4, step 1.1, assume-hyp]

3.1 So the claim that every Kan extension is pointwise is false. The pointwise hypothesis in [F3] is genuinely needed. [F3, step 2.1] ∎
