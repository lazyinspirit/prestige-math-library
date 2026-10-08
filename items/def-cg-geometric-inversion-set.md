---
id: def-cg-geometric-inversion-set
kind: definition
title: "The geometric inversion set $N(w)$ of an element of a Coxeter group"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 10
deps: [thm-cg-root-sign-and-simple-reflection-positivity, thm-cg-root-length-criterion-and-faithfulness, def-cg-real-coxeter-form-and-reflection, lem-cg-reflection-form-invariance-and-rank-two-orders, def-cg-canonical-reflection-homomorphism, lem-cg-reflection-representation-descends-and-root-norms, def-hh-coxeter-matrix-word-group-and-length, def-group-homomorphism]
justified_by: [thm-cg-root-inversion-formulas-and-strong-exchange]
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (Princeton University Press, 2008; author's complete institutional PDF)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Appendix D.1, printed pp. 439-442 (Theorem D.1.1, Lemma D.1.5); S4.2, printed pp. 45-47; read in the extracted full text; figures and exercises excluded"
    - title: "Anders Bjorner and Francesco Brenti, Combinatorics of Coxeter Groups (Graduate Texts in Mathematics 231, Springer 2005; author-hosted full PDF)"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "S4.4, printed pp. 101-105 (Definition 4.4.1 and (4.24)-(4.27)); S1.4, printed pp. 15-18; read in the extracted full text; exercises excluded"
verification:
  audited: "2026-10-08"
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Definition

Let $S$ be a finite set, $m$ a Coxeter matrix, $W$ the presented group with length function $\ell$ ([[def-hh-coxeter-matrix-word-group-and-length]]), $V=\mathbb R^S$ with Coxeter form $B$ and canonical reflection homomorphism $\rho:W\to\mathrm{GL}(V)$ ([[def-cg-canonical-reflection-homomorphism]]), and let $\Phi=\Phi_+\sqcup\Phi_-$ be the signed root system ([[thm-cg-root-sign-and-simple-reflection-positivity]]).

**(1) Definition.** For $w\in W$ the **inversion set** of $w$ is
$$N(w):=\{\alpha\in\Phi_+:\rho(w)\alpha\in\Phi_-\}=\Phi_+\cap\rho(w)^{-1}\Phi_-.$$
Its elements are the roots inverted by $w$. This is a subset of $\Phi_+$, defined before any finiteness or independence assertion; by construction $\rho(w)N(w)\subseteq\Phi_-$, and $N(w)$ is determined by the linear map $\rho(w)$.

**(2) Elementary identities.** $N(1)=\emptyset$; for every $w\in W$
$$N(w^{-1})=-\rho(w)\,N(w),$$
and consequently $|N(w^{-1})|=|N(w)|$ whenever one of the two sets is finite. For every $u\in W$ and $s\in S$, with $sN(u):=\{\rho(s)\beta:\beta\in N(u)\}$,
$$\ell(us)>\ell(u)\ \Longrightarrow\ N(us)=\{e_s\}\sqcup sN(u),\qquad \ell(us)<\ell(u)\ \Longrightarrow\ N(us)=s\,(N(u)\setminus\{e_s\});$$
in the first case $sN(u)\subseteq\Phi_+\setminus\{e_s\}$ and $e_s\notin N(u)$, so the union is disjoint.

The identities are elementary: $N(1)=\emptyset$ because $\rho(1)=\mathrm{id}_V$ would force $\alpha\in\Phi_+\cap\Phi_-$ for $\alpha\in N(1)$, and $\Phi_+,\Phi_-$ are disjoint. For the second identity let $\alpha\in\Phi_+$: then $\alpha\in N(w^{-1})$ means $\rho(w)^{-1}\alpha\in\Phi_-$, and with $\beta:=-\rho(w)^{-1}\alpha$ one has $\beta\in\Phi_+$ and $\rho(w)\beta=-\alpha\in\Phi_-$, so $\beta\in N(w)$ and $\alpha=-\rho(w)\beta$; conversely $\alpha=-\rho(w)\beta$ for some $\beta\in N(w)$ gives $\alpha\in\Phi_+$ because $\Phi_-=-\Phi_+$, and $\rho(w)^{-1}\alpha=-\beta\in\Phi_-$, so $\alpha\in N(w^{-1})$. Since $\beta\mapsto-\rho(w)\beta$ is a bijection, the cardinality statement follows. For the recursion, let $\beta\in\Phi_+$; then $\rho(us)\beta=\rho(u)\rho(s)\beta$, and $\rho(s)$ maps $\Phi_+\setminus\{e_s\}$ bijectively onto itself while $\rho(s)e_s=-e_s$ ([[thm-cg-root-sign-and-simple-reflection-positivity]] (3)), so $\beta\mapsto\rho(s)\beta$ is a bijection of $\Phi_+\setminus\{e_s\}$ that carries $N(us)\setminus\{e_s\}$ onto $N(u)\setminus\{e_s\}$. By the root-length criterion ([[thm-cg-root-length-criterion-and-faithfulness]] (1)) one has $e_s\in N(u)\iff\rho(u)e_s\in\Phi_-\iff\ell(us)<\ell(u)$ and $e_s\in N(us)\iff\rho(u)\rho(s)e_s=-\rho(u)e_s\in\Phi_-\iff\rho(u)e_s\in\Phi_+\iff\ell(us)>\ell(u)$. If $\ell(us)>\ell(u)$ this gives $e_s\in N(us)$, $e_s\notin N(u)$ and hence $N(us)=\{e_s\}\sqcup sN(u)$ with $sN(u)\subseteq\Phi_+\setminus\{e_s\}$; if $\ell(us)<\ell(u)$ it gives $e_s\notin N(us)$, $e_s\in N(u)$ and hence $N(us)=s(N(u)\setminus\{e_s\})$.

**(3) Convention on reduced words.** We keep the left action $\rho$ of $W$ on $V$. If $w=s_1\cdots s_n$ is a reduced expression, then the **suffix roots** $\rho(s_{i+1}\cdots s_n)^{-1}e_{s_i}$ $(1\le i\le n)$ are elements of $N(w)$, and the **prefix roots** $\rho(s_1\cdots s_{i-1})e_{s_i}$ are elements of $N(w^{-1})$. That these lists are exactly $N(w)$ and $N(w^{-1})$, that their elements are pairwise distinct positive roots, and that in particular $|N(w)|=\ell(w)$, is proved in [[thm-cg-root-inversion-formulas-and-strong-exchange]]; no finiteness or independence beyond the identities of (2) is asserted here.

For the two membership statements put $w_{i-1}:=s_1\cdots s_{i-1}$ and $\alpha_i:=\rho(s_{i+1}\cdots s_n)^{-1}e_{s_i}$. Since $\ell(w_{i-1}s_i)=i>\ell(w_{i-1})=i-1$ by reducedness of the expression, the root-length criterion gives $\gamma_i:=\rho(w_{i-1})e_{s_i}\in\Phi_+$ and also, applied to the reversed reduced expression of $w^{-1}=s_n\cdots s_1$, gives $\alpha_i\in\Phi_+$. Moreover $(s_1\cdots s_n)(s_{i+1}\cdots s_n)^{-1}=s_1\cdots s_i$, so $\rho(w)\alpha_i=\rho(s_1\cdots s_i)e_{s_i}=-\rho(w_{i-1})e_{s_i}=-\gamma_i\in\Phi_-$, which shows $\alpha_i\in N(w)$; and $(s_n\cdots s_1)(s_1\cdots s_{i-1})=s_n\cdots s_i$, so $\rho(w^{-1})\gamma_i=\rho(s_n\cdots s_i)e_{s_i}=-\rho(s_n\cdots s_{i+1})e_{s_i}=-\alpha_i\in\Phi_-$, which shows $\gamma_i\in N(w^{-1})$.
