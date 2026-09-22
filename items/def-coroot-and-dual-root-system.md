---
id: def-coroot-and-dual-root-system
kind: definition
title: Coroot and dual root system
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-reduced-crystallographic-euclidean-root-system]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, §5, coroots and the dual root system, printed pp. 162-163"
landmark: false
---

## Definition

Let $\Phi\subseteq E$ be a reduced crystallographic root system in the real
inner product space $E$ ([[def-reduced-crystallographic-euclidean-root-system]]).
For $\alpha\in\Phi$ put
$$\alpha^{\vee}=\frac{2\alpha}{(\alpha,\alpha)}\in E .$$
The vector $\alpha^\vee$ is the **coroot** of $\alpha$, and the set
$$\Phi^{\vee}=\{\alpha^{\vee}:\alpha\in\Phi\}$$
is the **dual root system**.

The definitions are well posed because $(\alpha,\alpha)>0$ for $\alpha\ne0$.
Two elementary identities, obtained by substituting the definition and using
bilinearity of the inner product, are
$$(\alpha^{\vee},\beta)=\frac{2(\beta,\alpha)}{(\alpha,\alpha)}, \qquad 2\frac{\alpha^{\vee}}{(\alpha^{\vee},\alpha^{\vee})}=\alpha,$$
for all $\alpha,\beta\in\Phi$; in particular $\alpha^\vee{}^\vee=\alpha$, and
the Cartan integer $2(\beta,\alpha)/(\alpha,\alpha)$ equals the inner product
$(\alpha^{\vee},\beta)$. Also $\alpha^\vee$ is a positive real multiple of
$\alpha$, so $\mathbb R\alpha^{\vee}=\mathbb R\alpha$ and
$\mathbb R\alpha^{\vee}\cap\Phi^{\vee}=\{\pm\alpha^{\vee}\}$.
