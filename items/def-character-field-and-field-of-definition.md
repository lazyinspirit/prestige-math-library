---
id: def-character-field-and-field-of-definition
kind: definition
title: "Character fields and fields of definition"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-character-of-a-complex-representation, def-finite-dimensional-representation-of-a-group-over-a-field, def-intertwiner-equivalent-and-faithful-representations, def-field-extension-generated-subfields-and-simple-extension]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Gabor Wiese, Galois Representations, Definition 2.5.1 and Definition 2.5.8"
      url: "https://r.jina.ai/https://math.uni.lu/wiese/notes/GalRep.pdf"
    - title: "Weizhe Zheng, Lectures on Algebra, before Corollary 4.3.4 and Proposition 4.6.14"
      url: "https://server.mcm.ac.cn/~zheng/algebra.pdf"
---

## Definition

Let $G$ be finite and let $\chi$ be the character of a complex representation of
$G$.  Its **character field** is
$$\mathbb Q(\chi):=\mathbb Q\bigl(\{\chi(g):g\in G\}\bigr)\subseteq\mathbb C.$$
More generally, if $F\subseteq\mathbb C$, write $F(\chi)$ for the field generated
by $F$ and the values of $\chi$ in the sense of
[[def-field-extension-generated-subfields-and-simple-extension]].

If $F\subseteq\mathbb C$, a complex representation $\rho:G\to\operatorname{GL}(V)$
is **realizable over $F$**, and $F$ is a **field of definition** for $\rho$, when
there is a finite-dimensional representation $\rho_F:G\to\operatorname{GL}(W)$
over $F$ such that $\mathbb C\otimes_F W$ is equivalent to $V$.  Thus a character
field records traces, whereas a field of definition records a matrix model; neither
term asserts that the other field has the other property.
