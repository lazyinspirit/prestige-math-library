---
id: thm-the-adjunction-hom-set-bijection-under-local-smallness
kind: theorem
title: 'Under local smallness, transposition gives the natural hom-set bijection, and conversely'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-adjunct-and-transposition-under-an-adjunction, lem-adjunct-formulas-are-mutually-inverse, def-small-locally-small-and-large-category, def-hom-functors-and-hom-bifunctor]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Emily Riehl, Category Theory in Context, 2nd ed., Theorem 4.2.7'
      url: 'https://emilyriehl.github.io/files/context.pdf'
    - title: 'Tom Leinster, Basic Category Theory, Theorem 2.2.5'
      url: 'https://arxiv.org/pdf/1612.09375.pdf'
pipeline_run: null
---

## Statement

Let $\mathcal C$ and $\mathcal D$ be locally small categories and let $F:\mathcal C\to\mathcal D$ and $G:\mathcal D\to\mathcal C$ be functors.

An adjunction $F\dashv G$ determines bijections

$$ \Phi_{c,d}:\mathcal D(Fc,d)\xrightarrow{\ \cong\ }\mathcal C(c,Gd),\qquad \Phi_{c,d}(u)=G(u)\circ\eta_c, $$

natural in $c$ and $d$, whose inverses are $\Psi_{c,d}(v)=\varepsilon_d\circ F(v)$. Conversely, every such natural family of bijections determines a unique unit and counit satisfying the triangle identities, and hence a unique adjunction structure on $F$ and $G$.

## Facts & Assumptions

**Given:** Locally small categories $\mathcal C,\mathcal D$ and functors $F:\mathcal C\to\mathcal D$, $G:\mathcal D\to\mathcal C$.

[F1] In a locally small category every hom-collection is a set ([[def-small-locally-small-and-large-category]]).

[F2] In a locally small category the two-variable hom assignment is a Set-valued bifunctor, contravariant in its first variable and covariant in its second ([[def-hom-functors-and-hom-bifunctor]]).

[L1] Under an adjunction, the two transpose formulas are mutually inverse on every pair of hom-collections ([[lem-adjunct-formulas-are-mutually-inverse]]).

[L2] The transpose formulas are $u^\flat=G(u)\eta_c$ and $v^\sharp=\varepsilon_dF(v)$ ([[def-adjunct-and-transposition-under-an-adjunction]]).

## Proof

**Proof technique:** direct.

1.1 Given an adjunction, [F1] makes the displayed hom-collections sets, and [L1] shows that $\Phi_{c,d}$ and $\Psi_{c,d}$ are inverse bijections. [F1, L1]

1.2 For $a:c'\to c$, $b:d\to d'$, and $u:Fc\to d$, functoriality and naturality of $\eta$ give $\Phi_{c',d'}(b\circ u\circ F(a))=G(b)\circ\Phi_{c,d}(u)\circ a$; this is naturality in both variables in the sense of [F2]. [L2, F2, algebra]

1.3 Conversely, let $\Phi$ be a natural family of bijections with inverse $\Psi$. Define $\eta_c:=\Phi_{c,Fc}(1_{Fc})$ and $\varepsilon_d:=\Psi_{Gd,d}(1_{Gd})$. [construct]

2.1 Naturality of $\Phi$ in $c$ makes $\eta$ natural, and naturality of $\Psi$ in $d$ makes $\varepsilon$ natural. [step 1.3, F2]

2.2 Naturality in $d$ and $c$, respectively, gives $\Phi_{c,d}(u)=G(u)\circ\eta_c$ and $\Psi_{c,d}(v)=\varepsilon_d\circ F(v)$. [step 1.3, F2]

3.1 Since $\Psi\Phi$ fixes $1_{Fc}$, step 2.2 gives $\varepsilon_{Fc}\circ F(\eta_c)=1_{Fc}$; since $\Phi\Psi$ fixes $1_{Gd}$, it gives $G(\varepsilon_d)\circ\eta_{Gd}=1_{Gd}$. [step 2.2, algebra]

4.1 Thus the data of steps 1.3 and 2.1 satisfy both triangle identities and define an adjunction. Any unit and counit inducing $\Phi$ must be the transposes of the two identity morphisms, so step 1.3 also proves uniqueness. [step 1.3, step 2.1, step 3.1] ∎
