---
id: def-block-sparse-covariance-class
kind: definition
title: Single-block sparse covariance class and restricted directions
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
deps:
  - def-bounded-spectrum-covariance-class
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Mengjie Chen, Chao Gao and Zhao Ren, Robust Covariance and Scatter Matrix Estimation under Huber's Contamination Model, §3.4"
      url: "https://arxiv.org/pdf/1506.00691"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
dependency_level: 2
---

## Definition

For $S\subseteq[p]$, let
$$G(S):=\{A=A^T\in\mathbb R^{p\times p}:A_{ij}=0 \text{ whenever }i\notin S\text{ or }j\notin S\},$$
and, for an integer $1\le s\le p$, let
$$G(s):=\bigcup_{\substack{S\subseteq[p]\\|S|\le s}}G(S),\qquad \mathcal F_{p,s}(M):=\{\Sigma\in\mathcal F_p(M): \Sigma-\operatorname{diag}(\Sigma)\in G(s)\}.$$
Here $\operatorname{diag}(\Sigma)$ is the diagonal matrix with the same
diagonal entries as $\Sigma$. Thus all nonzero off-diagonal entries lie in
one common coordinate block of size at most $s$; no row-sparsity condition
is implied.

For $S\subseteq[p]$, define
$$V_S:=\{u\in\mathbb R^p:\|u\|_2=1,\ u_i=0\text{ for }i\notin S\}.$$
When $1\le s\le p/2$, the restricted direction set is
$$U_s:=\bigcup_{\substack{S\subseteq[p]\\|S|=2s}}V_S.$$

