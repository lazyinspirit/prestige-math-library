---
id: def-lie-algebra-of-a-group-scheme
kind: definition
title: "The Lie algebra of a group scheme"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps: ["def-group-scheme-over-a-field", "def-relative-cotangent-space", "thm-tangent-vectors-dual-numbers", "thm-cotangent-space-maximal-ideal-quotient", "def-dual-numbers-scheme", "def-residue-field-scheme-point", "def-vector-space"]
justified_by: ["lem-lie-algebra-tangent-space-and-functoriality"]
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: "https://www.jmilne.org/math/Books/iAG2022.pdf"
      locator: "Ch. 10 §10(b), 10.6 and display (56), printed pp. 188-189 (PDF 199-200): L(G) = ker(G(k[epsilon]) -> G(k)) = Hom_k(I_G/I_G^2, k)."
    - title: "SGA 3, Expose II (M. Demazure), Fibres tangents - Algebres de Lie, corrected 14 October 2024 edition"
      url: "https://webusers.imj-prg.fr/~patrick.polo/SGA3/Exp2-14oct24.pdf"
      locator: "§3.9-3.11 and §4.1: Lie(G/S,M) as the kernel of the tangent morphism, with the adjoint operation."
    - title: "The Stacks Project, Groupoid Schemes chapter"
      url: "https://stacks.math.columbia.edu/download/groupoids.pdf"
      locator: "Lemma 39.6.3 [047I] and Lemma 39.6.4 [0BF5], printed pp. 12-13: the tangent module at the identity and addition on tangent vectors."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Let $k$ be a field and let $G$ be a group scheme of finite type over $k$ ([[def-group-scheme-over-a-field]]) with identity point $e=e_G\in G(k)$, the image of the unit section $e:\operatorname{Spec}k\to G$ under $G(\operatorname{Spec}k)=G(k)$. Let $\mathfrak m_e=\ker(\varepsilon:\mathcal O_{G,e}\to k)$ be the maximal ideal of the local ring of $G$ at $e$ ([[def-residue-field-scheme-point]]) and let $T_{G/k,e}=\operatorname{Hom}_k(\mathfrak m_e/\mathfrak m_e^2,k)$ be the tangent space of $G$ over $k$ at $e$ ([[def-relative-cotangent-space]]), the dual of the cotangent space; since $e$ is a $k$-rational point, the classical description $\operatorname{Hom}_k(\mathfrak m_e/\mathfrak m_e^2,k)$ of the tangent space is the identification of [[thm-cotangent-space-maximal-ideal-quotient]]. The **Lie algebra of $G$** is

$$\operatorname{Lie}(G):=T_{G/k,e},$$

written $\mathfrak g=\operatorname{Lie}(G)$. By [[thm-tangent-vectors-dual-numbers]] the tangent space is canonically the set of $k$-morphisms $\tau:\operatorname{Spec}k[\varepsilon]/(\varepsilon^2)\to G$ whose composite with $\varepsilon\mapsto0$ is $e$ ([[def-dual-numbers-scheme]]), that is,

$$\operatorname{Lie}(G)\cong\ker\bigl(G(k[\varepsilon])\to G(k)\bigr),$$

the kernel of the reduction map induced by $\varepsilon\mapsto0$. For a commutative $k$-algebra $R$ one writes $\operatorname{Lie}(G)(R):=\ker\bigl(G(R[\varepsilon])\to G(R)\bigr)$ with $R[\varepsilon]=R\otimes_k k[\varepsilon]$, and the elements are written $e^{\varepsilon X}$.

The vector-space structure on $\operatorname{Lie}(G)$ over $k$ ([[def-vector-space]]), the naturality of these identifications, and their agreement with the cotangent description are proved in [[lem-lie-algebra-tangent-space-and-functoriality]], which is the well-definedness statement for this definition. No affineness, reducedness, smoothness, or characteristic hypothesis is imposed, and $G$ need not be affine.
