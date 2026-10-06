---
id: "def-h-minus-one-as-the-dual-of-h-one-zero"
kind: "definition"
title: "The negative Sobolev space $H^{-1}(\\Omega)$"
status: draft
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 0
deps:
  - "def-bounded-coercive-and-symmetric-sesquilinear-forms"
  - "def-complex-conjugate-real-imaginary-part-and-modulus"
  - "def-complex-lp-and-euclidean-test-function-conventions"
  - "def-countable-choice"
  - "def-dual-space-of-a-normed-space"
  - "def-hk-and-hk-zero-notation"
  - "def-l-p-space-as-a-quotient-by-null-functions"
  - "def-operator-norm"
  - "def-sobolev-space-wkp-and-its-norm"
  - "def-space-of-bounded-linear-operators"
  - "def-wkp-zero-as-a-sobolev-closure"
  - "thm-bounded-operator-space-is-banach"
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§4.3, the space $H^{-1}(\\Omega)$ and Theorem 4.7 with the norm formula (4.9), printed pp. 95–98"
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Springer Universitext, 2011, complete 614-page text)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
      locator: "Section 8.3, the notation H-minus-one as the dual of H-one-zero and Proposition 8.14, printed pp. 219–220 (real-scalar model for the conjugate-dual convention here)."
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Springer Universitext, 2011, complete 614-page text)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
      locator: "Section 8.4, Remark 22, printed p. 221: the Riesz–Frechet identification with the H1 inner product."
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (archived 2025 author manuscript)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§10.1, the weak Dirichlet problem for $f\\in L^2$ and the identification of the dual pairing, printed pp. 223–226"
---

## Definition

Assume Countable Choice ([[def-countable-choice]]) and let $\Omega\subseteq\mathbb R^n$ be open, $n\ge1$, with $H^1_0(\Omega;\mathbb K)$ the zero-boundary Sobolev space $W^{1,2}_0$ over $\mathbb K\in\{\mathbb R,\mathbb C\}$ ([[def-wkp-zero-as-a-sobolev-closure]], [[def-sobolev-space-wkp-and-its-norm]], [[def-hk-and-hk-zero-notation]]). Define
$$H^{-1}(\Omega):=\{\,F:H^1_0(\Omega)\to\mathbb K : F\text{ is bounded and conjugate-linear}\,\},$$
with
$$\|F\|_{H^{-1}}:=\sup_{\|v\|_{H^1_0}\le1}|F(v)| .$$
**Pairing convention.** The pairing $\langle F,v\rangle:=F(v)$ is linear in $F$ and conjugate-linear in $v$; it is the dual pairing of $H^{-1}(\Omega)$ with $H^1_0(\Omega)$, not the $L^2$ inner product. The map $F\mapsto\overline{F(\cdot)}$ is an isometric conjugate-linear bijection of $H^{-1}(\Omega)$ onto the Banach dual $(H^1_0(\Omega))^*$ of [[def-dual-space-of-a-normed-space]] ([[def-operator-norm]], [[def-space-of-bounded-linear-operators]]); the design's notation $(H^1_0)^*$ is read through this identification, which is the one compatible with the page's sesquilinear convention (linear in the first argument, conjugate-linear in the second) fixed in [[def-bounded-coercive-and-symmetric-sesquilinear-forms]]. The space $H^{-1}(\Omega)$ is a normed space, complete because $(H^1_0(\Omega))^*$ is complete and $\overline{F(\cdot)}$ is an isometry in both directions ([[thm-bounded-operator-space-is-banach]], [[def-complex-conjugate-real-imaginary-part-and-modulus]]). For $f\in L^2(\Omega)$ the map $v\mapsto(f,v)_{L^2}$ is the corresponding element of $H^{-1}(\Omega)$ under the conventions of [[def-l-p-space-as-a-quotient-by-null-functions]] and [[def-complex-lp-and-euclidean-test-function-conventions]], where complex integrability is in the sense of the latter; identifying a general element of $H^{-1}$ with an $L^2$ function is an embedding statement, never a definition. Elements of $H^{-1}$ are defined here by their action on Sobolev classes; this does not exclude their identification with distributions through smooth test functions.
