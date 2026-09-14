---
id: lem-solovay-absorption-factorization-and-homogeneity
kind: lemma
title: Absorption, factorization, and homogeneous truth in the Solovay collapse
status: published
origin: pipeline
deps:
  - lem-solovay-collapse-localizes-countable-ordinal-data
  - thm-forcing-theorem
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: forcing-factorization
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Solovay 1970, Part I §1.12, Lemma 3.5, and Lemmas 4.1–4.3"
      url: https://people.math.ethz.ch/~fdalio/ZKmodel.pdf
---

## Statement

For every $f:\omega\to\mathrm{Ord}$ in $V[G]$, there are a real $t$ and an
ordinal $\beta$ such that $f\in V[t]$ and $f$ is definable there from
$(t,\beta)$. There is also an
$\operatorname{Lv}(\kappa)^{V[f]}$-generic $H$ over $V[f]$ such that
$V[G]=V[f][H]$. A sentence with parameters in $V[f]$ and no occurrence of $H$
has homogeneous Boolean value $0$ or $1$. The same factorization is available
after adjoining one random or Cohen real.

## Facts & Assumptions

**Given:** The Solovay collapse setup and a supplied generic extension.

[F1] [[lem-solovay-collapse-localizes-countable-ordinal-data]]: every countable ordinal sequence belongs to a small initial-collapse extension.

[F2] [[thm-forcing-theorem]]: deciding conditions and the truth lemma compute forcing truth.

[F3] [[def-axiom-of-choice]]: ambient AC enumerates the dense sets and maximal antichains used in the absorption recursion.

## Proof

1.1 By F1, choose $\xi<\kappa$ with $f\in V[G_\xi]$. Solovay's small-collapse factorization replaces this initial extension by $V[F]$, where $F:\omega\twoheadrightarrow\lambda$ is a $V$-generic collapsing map for some ordinal $\lambda<\kappa$ and $f\in V[F]$. Define

$$t=\{\langle m,n\rangle:F(m)\le F(n)\}.$$

Then $t$ is a real. In $V[t]$, quotienting $\omega$ by equality in the coded preorder and taking its well-order type reconstructs $\lambda$ and $F$; hence $V[F]=V[t]$. Finally choose the canonically least constructible-ground name for $f$ and let $\beta$ be its ordinal code. Valuation by the generic recovered from $t$ defines $f$ from $(t,\beta)$. This is the cited real-capture argument; constructibility is used only to replace the ground name parameter by $\beta$. [F1, F2, F3]

2.1 The initial forcing has size below $\kappa$. Solovay's absorption construction recursively embeds its Boolean completion and the tail collapse into a fresh copy of $\operatorname{Lv}(\kappa)$ over $V[f]$: at stage $\alpha<\kappa$, put the next maximal antichain and the next dense set into coordinates above all earlier supports. Regularity of $\kappa$ bounds each stage, and the union is a dense complete embedding. The image of $G$ is therefore a generic $H$ with both inclusions $V[G]\subseteq V[f][H]\subseteq V[G]$. F3 is used exactly to enumerate those dense sets and maximal antichains. [F1, F2, F3, step 1.1]

3.1 The collapse is weakly homogeneous. Given $p,q$, first move the finitely many coordinates of $p$ away from those of $q$ by coordinate permutations; the moved $p$ is compatible with $q$. If some condition forced a sentence $\varphi(\vec a)$ and another forced its negation, apply such an automorphism. It fixes every $\vec a\in V[f]$ and yields compatible conditions forcing opposites, contrary to forcing consistency. Density of decision then makes the Boolean value $0$ or $1$. The omission of $H$ is essential. [F2, step 2.1]

4.1 Random and Cohen forcing have cardinal below $\kappa$ in each localized model. Insert their Boolean completion as the first small factor in the same absorption recursion. Thus, after adjoining its generic real $x$, the remaining extension is again a homogeneous Lévy collapse over $V[f,x]$. [F1, F2, F3, step 2.1, step 3.1] ∎
