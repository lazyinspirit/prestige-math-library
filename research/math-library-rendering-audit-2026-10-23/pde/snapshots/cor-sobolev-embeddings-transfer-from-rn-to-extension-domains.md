---
id: cor-sobolev-embeddings-transfer-from-rn-to-extension-domains
kind: corollary
title: Whole-space inequalities transfer through a Sobolev extension
status: published
origin: pipeline
deps: [def-sobolev-extension-domain-and-extension-operator, thm-extension-theorem-for-bounded-smooth-domains, lem-bounded-restriction-and-cutoff-localisation-in-sobolev-spaces, def-sobolev-space-wkp-and-its-norm, def-axiom-of-choice]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-10-02
  precheck: pass
sources:
  scraped: []
  references:
    - title: Juha Kinnunen, Sobolev Spaces (2026), Theorem 3.43
      url: https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf
      locator: Chapter 3 §3.6, Definition 3.42 and Theorem 3.43, printed pp. 84–85
    - title: Sung-Jin Oh, Lecture Notes for Math 222A (2024), §11.3
      url: https://web.math.berkeley.edu/~sjoh/pdfs/notes-math222a.pdf
      locator: §11.3, Proposition 11.13, printed pp. 157–159
---

## Statement

Assume the Axiom of Choice. Let $k\in\mathbb N_0$, $1\le p\le\infty$,
$\mathbb K\in\{\mathbb R,\mathbb C\}$, and let $\Omega\subseteq\mathbb R^n$
be open. Let
$$E:W^{k,p}(\Omega;\mathbb K)\longrightarrow W^{k,p}(\mathbb R^n;\mathbb K)$$
be a bounded linear extension operator, so that $(Eu)|_\Omega=u$ almost
everywhere on $\Omega$ for every class $u$, and let $\|E\|$ be its operator
norm. Suppose a whole-space functional $N$ on Sobolev classes, together with
its restrictions $N_\Omega$ to the classes of $\Omega$, satisfies
$$N_\Omega(F|_\Omega)\le N(F)\qquad\text{and}\qquad N(F)\le C\|F\|_{W^{k,p}(\mathbb R^n)}$$
for every $F\in W^{k,p}(\mathbb R^n;\mathbb K)$ and a constant $C$ independent
of $F$. Then
$$N_\Omega(u)\le C\,\|E\|\,\|u\|_{W^{k,p}(\Omega)}\qquad\text{for every }u\in W^{k,p}(\Omega;\mathbb K).$$
In particular, if $1\le q\le\infty$ and a whole-space Sobolev inequality
$\|F\|_{L^q(\mathbb R^n)}\le C\|F\|_{W^{k,p}(\mathbb R^n)}$ is available, then
$\|u\|_{L^q(\Omega)}\le C\|E\|\|u\|_{W^{k,p}(\Omega)}$ for every $u$. The
corollary is conditional on that whole-space inequality and asserts no
embedding theorem itself; every bounded $C^k$ domain supplies an admissible
operator $E$ through [[thm-extension-theorem-for-bounded-smooth-domains]].

## Facts & Assumptions

**Given:** the Axiom of Choice; $k\in\mathbb N_0$; $1\le p\le\infty$; $\mathbb K\in\{\mathbb R,\mathbb C\}$; an open $\Omega\subseteq\mathbb R^n$; a bounded linear extension operator $E$ with right-inverse property and norm $\|E\|$; a functional $N$ with restrictions $N_\Omega$ satisfying the two displayed hypotheses with constant $C$; and a class $u\in W^{k,p}(\Omega;\mathbb K)$.

[F1] Extension operator: $E:W^{k,p}(\Omega;\mathbb K)\to W^{k,p}(\mathbb R^n;\mathbb K)$ is bounded and linear with $(Eu)|_\Omega=u$ as an almost-everywhere class on $\Omega$ for every $u$, and its operator norm is $\|E\|=\sup\{\|Eu\|:u\in W^{k,p}(\Omega;\mathbb K),\|u\|_{W^{k,p}(\Omega)}\le1\}$ ([[def-sobolev-extension-domain-and-extension-operator]]).

[F2] Restriction is a well-defined operation on Sobolev classes: $F|_\Omega\in W^{k,p}(\Omega;\mathbb K)$ with $D^\alpha(F|_\Omega)=(D^\alpha F)|_\Omega$ almost everywhere, and it is a contraction ([[lem-bounded-restriction-and-cutoff-localisation-in-sobolev-spaces]]).

[F3] Restriction monotonicity of $N$: $N_\Omega(F|_\Omega)\le N(F)$ for every $F\in W^{k,p}(\mathbb R^n;\mathbb K)$, and the whole-space bound $N(F)\le C\|F\|_{W^{k,p}(\mathbb R^n)}$, both hypotheses of the statement.

[F4] The Sobolev norm is the finite derivative sum of [[def-sobolev-space-wkp-and-its-norm]], and $\|Eu\|\le\|E\|\|u\|$ holds for every $u$ by the definition of the operator norm in [F1].

[F5] Bounded $C^k$ domains: for $k\ge1$ and every $1\le p\le\infty$ there is a bounded linear extension operator $W^{k,p}(\Omega;\mathbb K)\to W^{k,p}(\mathbb R^n;\mathbb K)$ for every bounded $C^k$ domain in the graph sense, and extension by zero supplies the case $k=0$ on any open set ([[thm-extension-theorem-for-bounded-smooth-domains]]).

**Choice use.** The Axiom of Choice enters only through the published interfaces of [F2] and [F5], which invoke the Countable Choice they require; [F5] also invokes it for the chart and partition-of-unity steps of the extension construction. The three-line norm chain of the proof itself uses no choice.

## Proof

**Proof technique:** direct.

1.1 Fix $u\in W^{k,p}(\Omega;\mathbb K)$ and put $F:=Eu\in W^{k,p}(\mathbb R^n;\mathbb K)$. By the right-inverse property of [F1], $F|_\Omega=u$ as an almost-everywhere class on $\Omega$. [F1, given]

2.1 Apply the restriction monotonicity of [F3] to the pair $(F,\Omega)$: $N_\Omega(u)=N_\Omega(F|_\Omega)\le N(F)=N(Eu)$. [F3, step 1.1]

2.2 Apply the whole-space bound of [F3] to $F=Eu$: $N(Eu)\le C\|Eu\|_{W^{k,p}(\mathbb R^n)}$. [F3, step 1.1]

2.3 Apply the operator-norm inequality of [F4] to $u$: $\|Eu\|_{W^{k,p}(\mathbb R^n)}\le\|E\|\,\|u\|_{W^{k,p}(\Omega)}$. [F1, F4, step 1.1]

3.1 Chaining steps 2.1, 2.2 and 2.3 gives $N_\Omega(u)\le C\|E\|\|u\|_{W^{k,p}(\Omega)}$ for the fixed class $u$; since $u$ was arbitrary, the first assertion holds. [step 2.1, step 2.2, step 2.3]

4.1 $L^q$ instance. Let $1\le q\le\infty$ and set $N(F):=\|F\|_{L^q(\mathbb R^n)}$ and $N_\Omega(v):=\|v\|_{L^q(\Omega)}$, with the value $+\infty$ when the class is not in $L^q$. The inclusion $\Omega\subseteq\mathbb R^n$ gives $\int_\Omega|F|^q\le\int_{\mathbb R^n}|F|^q$ for $q<\infty$ and $\operatorname{ess\,sup}_\Omega|F|\le\operatorname{ess\,sup}_{\mathbb R^n}|F|$ for $q=\infty$; hence $N_\Omega(F|_\Omega)\le N(F)$, where the left side is interpreted through the class of [F2]. If the whole-space inequality $\|F\|_{L^q(\mathbb R^n)}\le C\|F\|_{W^{k,p}(\mathbb R^n)}$ is available, the remaining hypothesis of [F3] holds with that same constant, and step 3.1 yields $\|u\|_{L^q(\Omega)}\le C\|E\|\|u\|_{W^{k,p}(\Omega)}$. [F2, F3, step 3.1, given]

5.1 Domains. If $\Omega$ is a bounded $C^k$ domain with $k\ge1$, [F5] supplies an admissible operator $E$ for every $1\le p\le\infty$, so step 4.1 transfers any available whole-space $L^q$ inequality to $\Omega$ with the extension constant of that operator; for $k=0$ extension by zero supplies the analogous operator on any open set. No embedding is proved here: the implication is conditional on the whole-space inequality, and the conclusion is stated only for the functional $N$ and the operator $E$ that are given. [F5, step 4.1] ∎
