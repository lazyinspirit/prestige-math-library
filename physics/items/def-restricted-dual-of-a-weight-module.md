---
id: "def-restricted-dual-of-a-weight-module"
kind: "definition"
title: "Restricted Chevalley dual"
deps: ["def-chevalley-contravariant-form"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Lecture 8 §3 Constructions 3.1, 3.4, 3.7 and Lemmas 3.2, 3.8, pp.4–5"
      url: "https://windshower.github.io/linchen/teaching/s2024/lecture8.pdf"
provenance:
  statement: "literature-derived"
  proof: "not-applicable"
status: published
origin: "pipeline"
---

## Definition

Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$. Write $Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$, $\mu\leq\lambda$ when $\lambda-\mu\in Q^+$, and $w\cdot\lambda=w(\lambda+\rho)-\rho$.

For an $\mathfrak h$-semisimple module $M$ with finite-dimensional weight spaces, its **restricted Chevalley dual** is

$$D(M)=\bigoplus_{\mu\in\mathfrak h^*}M_\mu^*,\qquad (x\varphi)(m)=\varphi(\tau(x)m)\quad(x\in U(\mathfrak g)).$$

Here each functional is extended by zero on the other weight spaces and $\tau$ is the fixed anti-involution of [[def-chevalley-contravariant-form]]. In particular $\tau(h)=h$ and $D(M)_\mu=M_\mu^*$. A map $f:M\to N$ induces $D(f):D(N)\to D(M)$ by precomposition. The action law follows from $\tau(xy)=\tau(y)\tau(x)$; a root vector of weight $\alpha$ sends $M_\mu^*$ to $M_{\mu+\alpha}^*$, so the restricted sum is stable. This is a complex-linear algebraic dual, with no conjugation. Ordinary Lie-module duality has a minus sign and reverses weights; twisting that dual by the Lie automorphism $x\mapsto-\tau(x)$ gives the convention used here.
