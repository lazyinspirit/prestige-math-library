---
id: def-monoid-object-and-comonoid-object-in-a-monoidal-category
kind: definition
title: "Monoid objects and comonoid objects in a monoidal category"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-monoidal-category]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "S. Mac Lane, Categories for the Working Mathematician, Chapter VII.3"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Definition 2.7.1"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
pipeline_run: null
---

## Definition

Let $(\mathcal C,\otimes,\mathbf 1,\alpha,\lambda,\rho)$ be a monoidal
category ([[def-monoidal-category]]).

A **monoid object** in $\mathcal C$ is an object $M$ together with morphisms

$$\mu:M\otimes M\longrightarrow M,\qquad \eta:\mathbf 1\longrightarrow M,$$

such that

$$\mu\circ(\mu\otimes1_M)=\mu\circ(1_M\otimes\mu)\circ\alpha_{M,M,M},$$

$$\mu\circ(\eta\otimes1_M)=\lambda_M,\qquad \mu\circ(1_M\otimes\eta)=\rho_M.$$

A **comonoid object** in $\mathcal C$ is an object $C$ together with morphisms

$$\Delta:C\longrightarrow C\otimes C,\qquad \varepsilon:C\longrightarrow\mathbf 1,$$

such that

$$(\alpha_{C,C,C})\circ(\Delta\otimes1_C)\circ\Delta=(1_C\otimes\Delta)\circ\Delta,$$

$$(\varepsilon\otimes1_C)\circ\Delta=\lambda_C^{-1},\qquad (1_C\otimes\varepsilon)\circ\Delta=\rho_C^{-1}.$$

The associator and unitors are written explicitly because this page does not
yet identify different bracketings automatically.
