---
id: lem-qa-cyclic-dlp-annihilator-equation
kind: lemma
title: Fourier annihilator equation for cyclic discrete logarithm
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 17
deps:
  - lem-qa-cyclic-dlp-hidden-subgroup
  - def-qa-finite-abelian-subgroup-annihilator
  - def-qa-finite-abelian-character-dual
  - def-additive-character-of-a-finite-abelian-group
  - lem-qa-character-dual-of-a-product-factors
  - lem-qa-cyclic-group-has-n-characters
  - thm-complex-nth-roots-and-roots-of-unity
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "None; the proof is a finite character-label calculation."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement

Let $G=\langle g\rangle$ have order $q\ge2$, $x=g^a$, and $H=\langle(-a,1)\rangle\le\mathbb Z_q^2$ as in [[lem-qa-cyclic-dlp-hidden-subgroup]]. Characters of $\mathbb Z_q^2$ are labelled by $(c,d)\in\mathbb Z_q^2$ as
$$
\chi_{c,d}(u,v)=\exp(2\pi i(cu+dv)/q).
$$
Then
$$
\chi_{c,d}\in H^\perp\quad\Longleftrightarrow\quad d\equiv ac\pmod q.
$$
The map $c\mapsto(c,ac)$ is a bijection from $\mathbb Z_q$ to $H^\perp$. Consequently, any sample that is uniform on $H^\perp$ has a uniform first coordinate $c$.

## Facts & Assumptions

**Given:** The cyclic discrete-log instance and the rank-one subgroup $H$ above.

[F1] $H=\langle(-a,1)\rangle$ is the fiber subgroup of $f(u,v)=g^u x^v$ ([[lem-qa-cyclic-dlp-hidden-subgroup]]).

[F2] The annihilator is $H^\perp=\{\chi:\chi(h)=1\text{ for every }h\in H\}$ ([[def-qa-finite-abelian-subgroup-annihilator]]).

[F3] Every character of the cyclic group $\mathbb Z_q$ is uniquely labelled by $c\in\mathbb Z_q$ with value $\exp(2\pi i c/q)$ on $1$; characters of a direct product factor coordinatewise ([[lem-qa-cyclic-group-has-n-characters]], [[lem-qa-character-dual-of-a-product-factors]]).

[F4] $\exp(2\pi i/q)$ is a primitive $q$th root of unity, so its integer powers equal $1$ exactly at exponents divisible by $q$ ([[thm-complex-nth-roots-and-roots-of-unity]]).

## Proof

1.1 By [F1] and [F3], every character label is a unique pair $(c,d)$ and its value on the generator $(-a,1)$ of $H$ is $\exp(2\pi i(-ac+d)/q)$. By [F2], a character lies in $H^\perp$ exactly when it is trivial on that generator; [F4] makes this equivalent to $d-ac\equiv0\pmod q$. [given, F1, F2, F3, F4, algebra]

2.1 For each $c\in\mathbb Z_q$, step 1.1 gives exactly one annihilator label, namely $(c,ac)$. Every label in $H^\perp$ has this form, so the displayed map is a bijection. A uniform distribution on a finite set is carried by a bijection to the uniform distribution on its image, hence the first coordinate is uniform. This is a counting statement conditional on a uniform annihilator sample; the quantum sample distribution is established separately. [step 1.1, algebra] ∎
