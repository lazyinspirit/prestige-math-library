---
id: thm-an-adjunction-is-an-absolute-kan-extension
kind: theorem
title: "Adjunctions as absolute Kan extensions, with the preserved converse"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-left-and-right-kan-extension, def-absolute-kan-extension, def-adjunction-by-unit-counit-and-triangle-identities, def-functor-and-contravariant-functor, def-natural-transformation]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Proposition 6.5.2"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "B. Richter, From Categories to Homotopy Theory, Proposition 4.7.3"
      url: "https://www.math.uni-hamburg.de/personen/richter/bookdraft.pdf"
pipeline_run: null
---

## Statement

Let $F:\mathcal C\to\mathcal D$ and $G:\mathcal D\to\mathcal C$ be functors.

If $F\dashv G$ with unit $\eta:1_{\mathcal C}\Rightarrow GF$ and counit
$\varepsilon:FG\Rightarrow1_{\mathcal D}$, then:

1. $(G,\eta)$ is a left Kan extension of $1_{\mathcal C}$ along $F$, and it is
   absolute;
2. $(F,\varepsilon)$ is a right Kan extension of $1_{\mathcal D}$ along $G$,
   and it is absolute.

Conversely, if $(G,\eta)$ is a left Kan extension of $1_{\mathcal C}$ along $F$
and is preserved by $F$, then $F\dashv G$. Dually, if $(F,\varepsilon)$ is a
right Kan extension of $1_{\mathcal D}$ along $G$ and is preserved by $G$, then
$F\dashv G$.

The preservation clause in the converse is load-bearing.

## Facts & Assumptions

**Given:** Functors $F:\mathcal C\to\mathcal D$ and $G:\mathcal D\to\mathcal C$.

[F1] An adjunction $F\dashv G$ consists of a unit $\eta:1_{\mathcal C}\Rightarrow GF$ and a counit $\varepsilon:FG\Rightarrow1_{\mathcal D}$ satisfying $\varepsilon F\circ F\eta=1_F$ and $G\varepsilon\circ\eta G=1_G$ ([[def-adjunction-by-unit-counit-and-triangle-identities]]).

[F2] A left Kan extension of $1_{\mathcal C}$ along $F$ is initial among natural transformations $1_{\mathcal C}\Rightarrow HF$, and a right Kan extension of $1_{\mathcal D}$ along $G$ is terminal among natural transformations $HG\Rightarrow1_{\mathcal D}$ ([[def-left-and-right-kan-extension]]).

[F3] An absolute Kan extension is one preserved by every functor out of its codomain ([[def-absolute-kan-extension]], [[def-functor-and-contravariant-functor]]).

## Proof

**Proof technique:** direct.

1.1 Assume $F\dashv G$ with unit $\eta$ and counit $\varepsilon$. Let $H:\mathcal D\to\mathcal C$ and $\alpha:1_{\mathcal C}\Rightarrow HF$ be given. Define $\overline{\alpha}_d:=H(\varepsilon_d)\circ\alpha_{Gd}:Gd\to Hd$. Naturality of $\alpha$ at $\eta_c:c\to GFc$ and the triangle identity $\varepsilon_{Fc}\circ F(\eta_c)=1_{Fc}$ give $(\overline{\alpha}F)\circ\eta=\alpha$. If $\gamma:G\Rightarrow H$ also satisfies $(\gamma F)\circ\eta=\alpha$, then for each $d$ naturality of $\gamma$ at $\varepsilon_d:FGd\to d$ and the triangle identity $G(\varepsilon_d)\circ\eta_{Gd}=1_{Gd}$ force $\gamma_d=H(\varepsilon_d)\circ\alpha_{Gd}=\overline{\alpha}_d$. So $(G,\eta)$ is a left Kan extension of $1_{\mathcal C}$ along $F$. Dually, for $H:\mathcal C\to\mathcal D$ and $\beta:HG\Rightarrow1_{\mathcal D}$, the formula $\overline{\beta}_c:=\beta_{Fc}\circ H(\eta_c):Hc\to Fc$ gives the unique factorization $\varepsilon\circ(\overline{\beta}G)=\beta$, so $(F,\varepsilon)$ is a right Kan extension of $1_{\mathcal D}$ along $G$. [F1, F2]

2.1 The same formulas prove absoluteness. Let $S:\mathcal C\to\mathcal Z$ and $\alpha:S\Rightarrow HF$ with $H:\mathcal D\to\mathcal Z$. Then $\overline{\alpha}_d:=H(\varepsilon_d)\circ\alpha_{Gd}:SGd\to Hd$ gives the unique factorization $(\overline{\alpha}F)\circ S\eta=\alpha$, so $(SG,S\eta)$ is a left Kan extension of $S$ along $F$. Thus $(G,\eta)$ is absolute by [F3]. The right-handed argument is dual. [F1, F3, step 1.1]

3.1 Conversely, suppose $(G,\eta)$ is a left Kan extension of $1_{\mathcal C}$ along $F$ and is preserved by $F$. Applying the preserved Kan-extension property to the identity transformation $1_F:F\Rightarrow F$ yields a unique natural transformation $\varepsilon:FG\Rightarrow1_{\mathcal D}$ with $\varepsilon F\circ F\eta=1_F$, the first triangle identity. To obtain the second, note that both $1_G$ and $G\varepsilon\circ\eta G$ are natural transformations $G\Rightarrow G$ whose composites with $\eta$ agree: componentwise, naturality of $\eta$ at $\eta_c$ and the first triangle identity give $$G(\varepsilon_{Fc})\circ\eta_{GFc}\circ\eta_c=G(\varepsilon_{Fc}\circ F\eta_c)\circ\eta_c=\eta_c.$$ By the uniqueness clause in the left Kan universal property, $G\varepsilon\circ\eta G=1_G$. Hence $F\dashv G$ by [F1]. The right-handed converse is dual. [F1, F2, step 2.1] ∎
