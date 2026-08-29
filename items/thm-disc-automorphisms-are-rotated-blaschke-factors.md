---
id: thm-disc-automorphisms-are-rotated-blaschke-factors
kind: theorem
title: "Every automorphism of the disc is a rotated Blaschke factor"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-conformal-equivalence-and-automorphism-group, thm-blaschke-factor-is-a-disc-automorphism, thm-unit-disc-schwarz-lemma-with-rigidity]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Theorem 2.2"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
    - title: "Jiri Lebl, Guide to Cultivating Complex Analysis, Proposition 3.5.3"
      url: "https://www.jirka.org/ca/ca.pdf"
---

## Statement

A holomorphic map $f:\mathbb D\to\mathbb D$ is an automorphism of $\mathbb D$ if
and only if there exist $a\in\mathbb D$ and $\theta\in\mathbb R$ such that

$$f(z)=e^{i\theta}\varphi_a(z)=e^{i\theta}\frac{a-z}{1-\overline a\,z}\qquad(z\in\mathbb D).$$

## Facts & Assumptions

**Given:** A holomorphic self-map $f:\mathbb D\to\mathbb D$.

[F1] The automorphism group $\operatorname{Aut}(\mathbb D)$ consists of the
biholomorphic self-maps of $\mathbb D$
([[def-conformal-equivalence-and-automorphism-group]]).

[F2] Every Blaschke factor is an automorphism of $\mathbb D$
([[thm-blaschke-factor-is-a-disc-automorphism]]).

[F3] Equality in Schwarz's lemma characterizes rotations
([[thm-unit-disc-schwarz-lemma-with-rigidity]]).

## Proof

**Proof technique:** direct.

1.1 Assume first that $f\in\operatorname{Aut}(\mathbb D)$, and let $a=f^{-1}(0)$. By [F2], the map $g:=f\circ\varphi_a$ is an automorphism of $\mathbb D$ with $g(0)=0$. [F1, F2, given, construct]

2.1 Applying [F3] to $g$ and to its inverse $g^{-1}$ shows $|g(z)|\le|z|$ and $|z|=|g^{-1}(g(z))|\le|g(z)|$ for every $z\in\mathbb D$, so $|g(z)|=|z|$ throughout $\mathbb D$. Hence [F3] forces $g(z)=e^{i\theta}z$ for some real $\theta$. [F1, F3, step 1.1, algebra]

3.1 Therefore $f(z)=g(\varphi_a(z))=e^{i\theta}\varphi_a(z)$. Conversely, if $f(z)=e^{i\theta}\varphi_a(z)$, then the rotation $z\mapsto e^{i\theta}z$ and the Blaschke factor $\varphi_a$ are automorphisms, so [F2] and [F1] make $f$ an automorphism. [F1, F2, step 2.1, algebra] ∎
