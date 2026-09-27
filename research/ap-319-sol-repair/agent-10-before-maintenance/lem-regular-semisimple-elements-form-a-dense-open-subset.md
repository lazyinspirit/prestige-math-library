---
id: lem-regular-semisimple-elements-form-a-dense-open-subset
kind: lemma
title: "Regular semisimple elements form a dense open subset"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-regular-element-and-rank-for-a-complex-semisimple-lie-algebra, def-regular-root-hyperplane-arrangement-in-a-cartan-subalgebra, prop-centralizer-of-a-cartan-element-from-its-vanishing-roots, lem-regular-elements-form-a-connected-dense-open-subset, thm-cartan-subalgebras-are-conjugate-in-a-complex-semisimple-lie-algebra]
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
    - title: "Pavel Etingof, Representations of Lie Groups"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
    - title: "Yiannis Sakellaridis, Verma Modules and the Category O"
      url: "https://web.archive.org/web/20230424132820if_/https://math.jhu.edu/~sakellar/automorphic-files/vermamodules.pdf"
pipeline_run: null
---

## Statement

The set of regular semisimple elements of a complex semisimple Lie algebra is a dense open subset of $\mathfrak g$, and every regular semisimple element is conjugate to an element of $\mathfrak h_{\mathrm{reg}}$.

## Facts & Assumptions

**Given:** A fixed Cartan subalgebra $\mathfrak h$ of a complex semisimple Lie algebra $\mathfrak g$.

[A1] Every semisimple element of $\mathfrak g$ is contained in a Cartan subalgebra.

## Proof

**Proof technique:** direct.

1.1 The set $\mathfrak h_{\mathrm{reg}}$ from [[def-regular-root-hyperplane-arrangement-in-a-cartan-subalgebra]] is the complement of finitely many hyperplanes, so it is dense and Zariski open in $\mathfrak h$. For $h\in \mathfrak h_{\mathrm{reg}}$, [[prop-centralizer-of-a-cartan-element-from-its-vanishing-roots]] gives $C_{\mathfrak g}(h)=\mathfrak h$; moreover $h$ is semisimple because the Cartan subalgebra acts diagonalizably in the root decomposition. [given]

2.1 Let $G_{\mathrm{ad}}$ be the connected adjoint group and consider $$\Phi:G_{\mathrm{ad}}\times\mathfrak h_{\mathrm{reg}}\to\mathfrak g,\qquad (g,h)\mapsto\operatorname{Ad}(g)h.$$ At $(1,h)$ its differential is $(x,k)\mapsto[x,h]+k$. The root decomposition and the inequalities $\alpha(h)\ne0$ give $[\mathfrak g,h]=\bigoplus_{\alpha\in\Phi}\mathfrak g_\alpha$, so this differential is surjective. Therefore the image $U$ is open. The same surjectivity makes the algebraic map $\Phi$ dominant; its constructible image contains a nonempty Zariski-open subset of $\mathfrak g$, so $U$ is dense. Every point of $U$ has centralizer dimension $\dim\mathfrak h$ by step 1.1. Since the regular locus is dense by [[lem-regular-elements-form-a-connected-dense-open-subset]], it meets the nonempty open set $U$; at a point of that intersection the centralizer dimension is both $\operatorname{rank}\mathfrak g$ and $\dim\mathfrak h$. Hence $\operatorname{rank}\mathfrak g=\dim\mathfrak h$. [step 1.1, algebra]

3.1 The equality $\operatorname{rank}\mathfrak g=\dim\mathfrak h$ from step 2.1 now shows that every point of $U$ is regular semisimple. Conversely, let $x$ be regular semisimple. By [A1], $x$ lies in a Cartan subalgebra; by [[thm-cartan-subalgebras-are-conjugate-in-a-complex-semisimple-lie-algebra]], conjugate that Cartan to the fixed $\mathfrak h$. The conjugate of $x$ is regular, so its centralizer has dimension $\dim\mathfrak h$; the centralizer formula then forces it to avoid every root hyperplane. Hence it lies in $\mathfrak h_{\mathrm{reg}}$, and $x\in U$. Thus $U$ is exactly the regular semisimple locus and is dense and open. [A1, step 1.1, step 2.1] ∎
