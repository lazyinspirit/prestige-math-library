---
id: prop-proper-morse-exhaustions-exist-on-smooth-manifolds
kind: proposition
title: "Every smooth manifold admits a proper Morse function"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-every-smooth-manifold-admits-a-smooth-proper-exhaustion-function, lem-morse-functions-are-transverse-differentials, thm-morse-functions-are-dense-by-relative-jet-transversality]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, Part 11"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes-11.pdf"
    - title: "Shintaro Fushida-Hardy, Morse theory"
      url: "https://www.scribd.com/document/488533132/morse"
    - title: "Pedro Frejlich, Morse Theory, Lecture Two"
      url: "https://www.projects.science.uu.nl/poisson/MorseTheoryCourse-LectureNotes"
---

## Statement

Every smooth manifold admits a proper Morse function.

## Facts & Assumptions

**Given:** A smooth manifold $M$.

[L1] Every smooth manifold admits a smooth proper exhaustion function ([[thm-every-smooth-manifold-admits-a-smooth-proper-exhaustion-function]]).

[L2] One can perturb a smooth function to a Morse function in an arbitrarily small strong neighbourhood, while fixing any closed region where the differential is already transverse to the zero section ([[thm-morse-functions-are-dense-by-relative-jet-transversality]]).

[F1] A function is Morse exactly when its differential section is transverse to the zero section ([[lem-morse-functions-are-transverse-differentials]]).

[A1] The set of smooth functions $g$ satisfying $|g(x)-h(x)|<\tfrac14$ for every $x\in M$ is a strong $C^\infty$ neighbourhood of $h$. Equivalently, proper maps form an open subset in the strong topology, as recorded in the cited Frejlich notes.

## Proof

**Proof technique:** direct.

1.1 Choose a smooth proper exhaustion $h:M\to[0,\infty)$ by [L1], and let $$\mathcal U:=\{g\in C^\infty(M,\mathbb R): |g(x)-h(x)|<\tfrac14\text{ for every }x\in M\}.$$ By [A1], this is a strong neighbourhood of $h$. [L1, A1, given, choose]

2.1 Apply [L2] to the function $h$, the closed set $A:=\varnothing$, and the strong neighbourhood $\mathcal U$. It yields a smooth function $g\in\mathcal U$ whose differential is transverse to the zero section. [L2, step 1.1]

3.1 Since $g\in\mathcal U$, one has $g\ge h-\tfrac14$. Thus, for every real $c$, $$\{x:g(x)\le c\}\subseteq\{x:h(x)\le c+\tfrac14\}.$$ The left-hand side is closed and the right-hand side is compact because $h$ is proper, so every sublevel set of $g$ is compact. Also $g\ge-\tfrac14$, hence the inverse image under $g$ of every compact subset of $\mathbb R$ is a closed subset of one of these compact sublevel sets. Therefore $g$ is proper. Since step 2.1 gives $dg$ transverse to the zero section everywhere, [F1] makes $g$ Morse. [F1, step 1.1, step 2.1, algebra]

4.1 Hence $g$ is a proper Morse function on $M$. [step 3.1] ∎
