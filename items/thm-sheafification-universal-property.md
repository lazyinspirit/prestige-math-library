---
id: thm-sheafification-universal-property
kind: theorem
title: "Sheafification is left adjoint to the inclusion of sheaves into presheaves"
status: published
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-sheafification, lem-first-plus-construction-is-separated, lem-second-plus-construction-is-sheaf]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Sheaves on Spaces, Section 17"
      url: "https://stacks.math.columbia.edu/download/sheaves.pdf"
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, Class 3, Section 4.7"
      url: "https://math.stanford.edu/~vakil/0506-216/216Ajun2807.pdf"
---

## Statement

Let $\mathcal F$ be a presheaf on a topological space $X$, let
$\eta_{\mathcal F}:\mathcal F\to a\mathcal F$ be its sheafification map, and let
$\mathcal G$ be a sheaf on $X$. Then every morphism of presheaves
$$\varphi:\mathcal F\longrightarrow\mathcal G$$
factors uniquely through $\eta_{\mathcal F}$:
there is a unique morphism of sheaves
$$\overline\varphi:a\mathcal F\longrightarrow\mathcal G$$
such that
$$\varphi=\overline\varphi\circ\eta_{\mathcal F}.$$

## Facts & Assumptions

**Given:** A presheaf $\mathcal F$, a sheaf $\mathcal G$, and a morphism
$\varphi:\mathcal F\to\mathcal G$.

[F1] Sheafification is the double plus construction with unit
$\eta_{\mathcal F}:\mathcal F\to a\mathcal F$ ([[def-sheafification]]).

[L1] The first plus construction is separated
([[lem-first-plus-construction-is-separated]]).

[L2] The second plus construction is a sheaf
([[lem-second-plus-construction-is-sheaf]]).

## Proof

**Proof technique:** direct.

1.1 Let $\sigma\in\mathcal F^+(U)$ be represented by sections $s_i\in\mathcal F(U_i)$ on an open cover $U=\bigcup_iU_i$. The sections $\varphi_{U_i}(s_i)\in\mathcal G(U_i)$ have equal germs on overlaps because the $s_i$ do. Since $\mathcal G$ is a sheaf, they glue uniquely to a section $\varphi^+_U(\sigma)\in\mathcal G(U)$. This is independent of the chosen presentation because equivalent presentations have the same germs at every point, and a sheaf is separated. Thus $\varphi$ extends uniquely to a morphism $\varphi^+:\mathcal F^+\to\mathcal G$. [F1, L1, L2, given, construct]

2.1 Apply the same construction again to the morphism $\varphi^+:\mathcal F^+\to\mathcal G$. Because $\mathcal G$ is already a sheaf, this yields a morphism $$\overline\varphi:(\mathcal F^+)^+=a\mathcal F\longrightarrow\mathcal G$$ whose restriction along the second unit map is $\varphi^+$. Composing with the first unit map gives $\overline\varphi\circ\eta_{\mathcal F}=\varphi$. [F1, step 1.1, construct]

3.1 To prove uniqueness, let $\psi,\psi':a\mathcal F\to\mathcal G$ satisfy $\psi\circ\eta_{\mathcal F}=\psi'\circ\eta_{\mathcal F}$. Fix an open set $U$ and a section $\sigma\in a\mathcal F(U)$. By [F1], $\sigma$ is represented locally by sections of $\mathcal F^+$, and each such local $\mathcal F^+$-section is itself locally represented by sections of $\mathcal F$. Therefore $U$ admits an open cover $\{U_i\}$ and sections $s_i\in\mathcal F(U_i)$ such that $$\sigma|_{U_i}=\eta_{\mathcal F,U_i}(s_i)$$ for every $i$. On each $U_i$ the hypothesis gives $$\psi_U(\sigma)|_{U_i}=\psi_{U_i}(\eta_{\mathcal F,U_i}(s_i)) =\psi'_{U_i}(\eta_{\mathcal F,U_i}(s_i)) =\psi'_U(\sigma)|_{U_i}.$$ Since $\mathcal G$ is a sheaf, locality forces $\psi_U(\sigma)=\psi'_U(\sigma)$. Thus $\psi=\psi'$. [F1, L2, step 2.1]

4.1 Steps 2.1 and 3.1 prove that every morphism $\mathcal F\to\mathcal G$ factors uniquely through $\eta_{\mathcal F}$. This is the stated adjoint universal property. [F1, step 2.1, step 3.1] ∎
