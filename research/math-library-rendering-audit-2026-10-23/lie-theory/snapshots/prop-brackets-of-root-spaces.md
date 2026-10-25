---
id: prop-brackets-of-root-spaces
kind: proposition
title: Brackets of root spaces
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra, def-root-and-root-space-relative-to-a-cartan-subalgebra, def-derivation-of-a-lie-algebra, prop-derivations-form-a-lie-algebra-and-inner-derivations-form-an-ideal]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-22
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19–24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 19, Proposition 19.11(ii)"
landmark: false
proof_strategy: direct
---

## Statement

Let $\mathfrak h$ be a Cartan subalgebra of a finite-dimensional complex
semisimple Lie algebra $\mathfrak g$, and let $\mathfrak g_\alpha$ be the root
spaces of [[def-root-and-root-space-relative-to-a-cartan-subalgebra]] for
$\alpha\in\mathfrak h^*\cup\{0\}$, with $\mathfrak g_\gamma=0$ whenever
$\gamma$ is not a root or $0$. Then
$$[\mathfrak g_\alpha,\mathfrak g_\beta]\subseteq\mathfrak g_{\alpha+\beta}$$
for all $\alpha,\beta\in\mathfrak h^*$.

## Facts & Assumptions

**Given:** Such $\mathfrak g,\mathfrak h$ and functionals $\alpha,\beta$.

[L1] For $H\in\mathfrak h$, the operator $\operatorname{ad}_H$ of [[def-derivation-of-a-lie-algebra]] is a derivation: $\operatorname{ad}_H[x,y]=[\operatorname{ad}_Hx,y]+[x,\operatorname{ad}_Hy]$ ([[prop-derivations-form-a-lie-algebra-and-inner-derivations-form-an-ideal]]).

[L2] The root spaces are the eigenspaces $\mathfrak g_\gamma=\{x:[H,x]=\gamma(H)x\text{ for all }H\in\mathfrak h\}$ and the root-space decomposition holds ([[def-root-and-root-space-relative-to-a-cartan-subalgebra]], [[thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra]]).

## Proof

**Proof technique:** direct.

1.1 Let $x\in\mathfrak g_\alpha$, $y\in\mathfrak g_\beta$ and $H\in\mathfrak h$. By [L1], $[H,[x,y]]=[\,[H,x],y\,]+[x,[H,y]]=[\alpha(H)x,y]+[x,\beta(H)y]=(\alpha+\beta)(H)[x,y]$. [L1, algebra]

2.1 Since the functional $\alpha+\beta$ acts on $[x,y]$ by the scalar $(\alpha+\beta)(H)$ for every $H\in\mathfrak h$, step 1.1 says $[x,y]\in\mathfrak g_{\alpha+\beta}$ whenever $\alpha+\beta$ is a root or $0$, and says $[x,y]=0\subseteq\mathfrak g_{\alpha+\beta}=0$ when $\alpha+\beta$ is neither, which is the convention of the statement; this covers all $x\in\mathfrak g_\alpha$ and $y\in\mathfrak g_\beta$, so $[\mathfrak g_\alpha,\mathfrak g_\beta]\subseteq\mathfrak g_{\alpha+\beta}$. The case $\alpha=\beta=0$ says that $\mathfrak h$ is a subalgebra, which it is. [L2, step 1.1, algebra] ∎
