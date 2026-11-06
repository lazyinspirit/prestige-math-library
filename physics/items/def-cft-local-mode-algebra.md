---
id: def-cft-local-mode-algebra
kind: definition
title: Completed local mode Lie algebra of a conformal vertex algebra
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 3
domain: mathematics
library: mathematics
deps:
  - def-conformal-vertex-algebra
  - def-vertex-algebra-module
  - def-formal-distribution-on-a-vector-space
  - lem-locality-determines-formal-ope-coefficients
  - lem-cft-chiral-operation-well-defined
dependency_roles:
  def-conformal-vertex-algebra: mathematical-premise
  def-vertex-algebra-module: mathematical-premise
  def-formal-distribution-on-a-vector-space: mathematical-premise
  lem-locality-determines-formal-ope-coefficients: mathematical-premise
  lem-cft-chiral-operation-well-defined: mathematical-premise
justified_by:
  - lem-cft-local-mode-algebra-representation-on-module
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Beilinson and Drinfeld, Chiral Algebras, preliminary Chapter 4, §§4.4.4–4.4.5
      url: https://math.uchicago.edu/~drinfeld/langlands/chiral/cha_ch4.pdf
      locator: De Rham coinvariants and global Lie-algebra action.
    - title: Frenkel, Vertex Algebras and Algebraic Curves, Bourbaki survey, §5.3
      url: https://math.berkeley.edu/~frenkel/BOOK/bourbaki.pdf
      locator: Local mode algebras and residue actions on modules.
---

## Definition

Let $V=\bigoplus_{d\ge0}V_d$ be a conformal vertex algebra of CFT type and set $V_{\le N}:=\bigoplus_{0\le d\le N}V_d$. For a formal parameter $t$, let $V_{\le N}((t))$ be the space of Laurent series $\sum_{k\ge k_0}v_kt^k$ with one finite lower bound $k_0$ and coefficients in the finite-dimensional space $V_{\le N}$. Put $\mathscr L_t(V):=\bigcup_{N\ge0}V_{\le N}((t))$. A local one-form is represented by $a\otimes f(t)dt$. Quotient by the covariant-derivative relations
$$D_t(a\otimes f(t)dt):=Ta\otimes f(t)dt+a\otimes f'(t)dt,$$
where $T=L(-1)$. The resulting space is $\widehat{\mathfrak L}_t(V):=\mathscr L_t(V)dt/D_t(\mathscr L_t(V)dt)$.

On representatives set
$$[a\otimes fdt,b\otimes gdt]:=\sum_{j\ge0}(a_{(j)}b)\otimes\frac{f^{(j)}g}{j!}dt.$$
For series representatives $a(t)=\sum_{p\ge p_0}a_pt^p$ and $b(t)=\sum_{q\ge q_0}b_qt^q$, choose finite bases of their finite-dimensional coefficient spaces. Field truncation gives a common $J$ with $a_{(j)}b=0$ for all basis pairs when $j\ge J$. In the coefficient of any fixed power $t^r$, terms satisfy $p+q-j=r$ with $p\ge p_0$, $q\ge q_0$, and $0\le j<J$; there are finitely many such triples, so the bracket coefficient is a finite sum. Its state coefficients lie in the finite span of the finitely many basis-pair products with $j<J$. The previously established full local chiral Jacobi identity makes this quotient a Lie algebra. Here a $V$-module $(M,Y_M)$ has the vacuum and full module Jacobi axioms of the earlier ordinary vertex-algebra module definition: $M$ is a complex vector space and $Y_M(a,t)=\sum_{k\in\mathbb Z}a^M_{(k)}t^{-k-1}$ is linear in $a\in V$. Its **lower truncation** means that for every $a\in V$ and $m\in M$ there is an integer $K(a,m)$ such that $a^M_{(k)}m=0$ for all $k\ge K(a,m)$. No conformal grading of $M$ is required here. On such a module, the residue action is
$$\rho_M([a\otimes fdt])m:=\operatorname{Res}_{t=0} f(t)Y_M(a,t)m\,dt=\sum_k f_k a_{(k)}m,\qquad f(t)=\sum_kf_kt^k.$$
For a fixed module vector this sum is finite: the states lie in a finite-dimensional $V_{\le N}$, so lower truncation is uniform on a basis of their coefficient space. The Lie representation and independence of representatives are proved in the representation lemma below.

## Definition references

[[def-conformal-vertex-algebra]]

[[def-vertex-algebra-module]]

[[def-formal-distribution-on-a-vector-space]]

[[lem-locality-determines-formal-ope-coefficients]]

[[lem-cft-chiral-operation-well-defined]]

[[lem-cft-local-mode-algebra-representation-on-module]]
