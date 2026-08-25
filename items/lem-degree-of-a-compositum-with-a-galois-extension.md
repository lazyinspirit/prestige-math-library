---
id: lem-degree-of-a-compositum-with-a-galois-extension
kind: lemma
title: "For $E/F$ finite Galois and $L/F$ finite inside a common field, $[EL:F]=[E:F][L:F]/[E\\cap L:F]$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-galois-translation-theorem, cor-finite-galois-over-every-intermediate-field, thm-tower-law-for-finite-field-extensions, prop-degree-bound-for-composita, def-extension-degree-and-finite-extension, def-finite-galois-extension-and-galois-group, thm-finite-galois-extension-characterizations]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "K. Conrad, Cyclotomic Extensions (expository blurb), Section 3"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/cyclotomic.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Chapter 3, composita and translation"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
pipeline_run: null
---

## Statement

Let $E/F$ be a finite Galois extension
([[def-finite-galois-extension-and-galois-group]]) and $L/F$ a finite extension
([[def-extension-degree-and-finite-extension]]), both subfields of a common
field. Then the compositum $EL$ is finite over $F$ and

$$[EL:F]=\frac{[E:F]\,[L:F]}{[E\cap L:F]} .$$

Only one of the two extensions is required to be Galois.

## Facts & Assumptions

**Given:** Subfields $E$ and $L$ of a common field, both containing $F$, with $E/F$ finite Galois and $L/F$ finite; $E\cap L$ is a subfield containing $F$ and contained in $E$, hence an intermediate field of $E/F$.

[L1] For $E/F$ finite Galois and $L/F$ an extension inside a common overfield, $EL/L$ is finite Galois and restriction gives $\operatorname{Gal}(EL/L)\cong\operatorname{Gal}(E/E\cap L)$ ([[thm-galois-translation-theorem]]).

[L2] If $K/F$ is finite Galois and $F\subseteq E'\subseteq K$, then $K/E'$ is finite Galois ([[cor-finite-galois-over-every-intermediate-field]]).

[L3] For fields $F\subseteq K\subseteq M$ with $K/F$ and $M/K$ finite, $M/F$ is finite and $[M:F]=[M:K][K:F]$ ([[thm-tower-law-for-finite-field-extensions]]).

[L4] For finite subextensions $E/F$ and $E'/F$ of a common field, the compositum is finite and $[EE':F]\le[E:F][E':F]$ ([[prop-degree-bound-for-composita]]).

[L5] For a finite Galois extension $M/K$ one has $|\operatorname{Gal}(M/K)|=[M:K]$ ([[thm-finite-galois-extension-characterizations]]).

## Proof

**Proof technique:** direct.

1.1 $E\cap L$ is an intermediate field of $E/F$, so $E/(E\cap L)$ is finite Galois by [L2]. [L2, given]

1.2 By [L4] the compositum $EL$ is finite over $F$. [L4, given]

1.3 Applying [L3] to $F\subseteq E\cap L\subseteq E$ gives $[E:F]=[E:E\cap L]\,[E\cap L:F]$, so $[E:E\cap L]=[E:F]/[E\cap L:F]$. [L3, given]

2.1 By [L1] the extension $EL/L$ is finite Galois with $\operatorname{Gal}(EL/L)\cong\operatorname{Gal}(E/E\cap L)$, so [L5] applied to both sides gives $[EL:L]=\bigl|\operatorname{Gal}(EL/L)\bigr|=\bigl|\operatorname{Gal}(E/E\cap L)\bigr|=[E:E\cap L]$. [step 1.1, step 1.2, L1, L5]

3.1 Applying [L3] to $F\subseteq L\subseteq EL$ and substituting steps 2.1 and 1.3 gives $[EL:F]=[EL:L]\,[L:F]=[E:E\cap L]\,[L:F]=[E:F][L:F]/[E\cap L:F]$. [step 2.1, step 1.3, L3] ∎

## Remarks

- **The Galois hypothesis is not decoration.** Without it the formula fails: over $F=\mathbb Q$ take $E=\mathbb Q(\sqrt[3]{2})$ and $L=\mathbb Q(\omega\sqrt[3]{2})$ inside a splitting field of $t^{3}-2$, where $\omega$ is a primitive cube root of unity. Both have degree three over $\mathbb Q$, since $t^{3}-2$ is irreducible there. The compositum contains $\omega=(\omega\sqrt[3]{2})/\sqrt[3]{2}$, hence contains the splitting field $\mathbb Q(\sqrt[3]{2},\omega)$ and equals it, so $[EL:\mathbb Q]=6$. And $E\cap L=\mathbb Q$: its degree over $\mathbb Q$ divides $3$ by the tower law, and it cannot be $3$, since $E=E\cap L=L$ would put $\omega$ in $E$ and force $[E:\mathbb Q]\ge6$. The formula would predict $9$. Neither $E$ nor $L$ is Galois over $\mathbb Q$.
