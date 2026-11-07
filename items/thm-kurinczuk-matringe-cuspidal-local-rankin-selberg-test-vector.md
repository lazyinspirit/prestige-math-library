---
id: thm-kurinczuk-matringe-cuspidal-local-rankin-selberg-test-vector
kind: theorem
title: "Kurinczuk–Matringe Test Vectors for Cuspidal Local Rankin–Selberg Integrals"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-supplied
deps:
  - def-local-rankin-selberg-integral-for-gln-times-glm
  - def-standard-and-rankin-selberg-l-functions-on-gln
  - thm-jpss-nonarchimedean-local-rankin-selberg-functional-equation
dependency_level: 5
sources:
  scraped: []
  references:
    - title: "Karol Kurinczuk and Alberto Mínguez, Test Vectors for Rankin–Selberg Products, arXiv:1501.07587v4, §9"
      url: "https://arxiv.org/pdf/1501.07587v4"
    - title: "Jacquet, Piatetski-Shapiro, and Shalika, Rankin-Selberg Convolutions, §§2–3"
      url: "https://www.math.columbia.edu/~hj/Rankin%20Selberg%20convolutions.pdf"
pipeline_run: number-theory-all-141-2026-10-25
---

## Statement

Let $K$ be a nonarchimedean local field with ring of integers $\mathcal O_K$, uniformizer $\varpi_K$, residue cardinality $q$, and $n\geq1$. Let $\pi_1,\pi_2$ be irreducible cuspidal complex representations of $\mathrm{GL}_n(K)$. If their local Rankin–Selberg factor $L(X,\pi_1\times\pi_2)$ is not identically $1$, then $\pi_2\simeq\chi\pi_1^\vee$ for an unramified character $\chi:K^\times\to\mathbb C^\times$. An extended maximal simple type for $\pi_1$ is a pair $(J,\Lambda)$ in its local compact-induction construction, with $J$ compact modulo $K^\times$, $\Lambda$ an irreducible representation of $J$, and $\pi_1\simeq\mathrm{c\!-\!Ind}_{J}^{\mathrm{GL}_n(K)}\Lambda$. Its associated parameter field $E/K$ is the simple field extension $E=K[\beta]$ in the maximal simple stratum defining the type. Put $e=e(E/K)$, the ramification index of this field extension; this index is independent of the chosen extended type. There exist Whittaker functions $W$ for $\pi_1$ and $W^\vee$ for $\pi_1^\vee$, with respect to mutually inverse nondegenerate characters of the standard maximal unipotent subgroup, and an integer $r$, such that, for the source-normalized quotient Haar measure,

$$I(X,W,\chi W^\vee,\mathbf 1_{\mathcal O_K^n})=q^r(q-1)(q^{n/e}-1)L(X,\pi_1\times\pi_2)=\frac{q^r(q-1)(q^{n/e}-1)}{1-(\chi(\varpi_K)X)^{n/e}}.$$

Here $(\chi W^\vee)(g)=\chi(\det g)W^\vee(g)$, $\mathbf 1_{\mathcal O_K^n}$ is the characteristic function of $\mathcal O_K^n$, $X$ is a formal variable, and $I(X,W_1,W_2,\Phi)$ is the rational Rankin–Selberg integral obtained by summing the valuation slices of $N_n(K)\backslash\mathrm{GL}_n(K)$ with weight $X^{v_K(\det g)}$ and Schwartz factor $\Phi(e_ng)$. The source normalization of the quotient measure has $\operatorname{vol}(Z_n(K)\cap K_1)=1$, where $Z_n(K)$ is the center and $K_1=\ker(\mathrm{GL}_n(\mathcal O_K)\to\mathrm{GL}_n(\mathcal O_K/\mathfrak p_K))$.

## Statement references

[Karol Kurinczuk and Alberto Mínguez, *Test Vectors for Rankin–Selberg Products*, arXiv:1501.07587v4, §§6, 8–9](https://arxiv.org/pdf/1501.07587v4)

[Jacquet, Piatetski-Shapiro, and Shalika, *Rankin-Selberg Convolutions*, §§2–3](https://www.math.columbia.edu/~hj/Rankin%20Selberg%20convolutions.pdf)
