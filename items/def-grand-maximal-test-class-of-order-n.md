---
id: def-grand-maximal-test-class-of-order-n
kind: definition
title: "Grand maximal test class of order N and the grand maximal function"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
deps: [def-radial-and-nontangential-maximal-functions-of-a-tempered-distribution, def-schwartz-space-and-its-seminorms, def-schwartz-topology-and-convergence, def-ck-and-multi-index-notation-in-several-variables, def-tempered-distribution, def-convolution-of-a-tempered-distribution-with-a-schwartz-function, lem-schwartz-dilations-preserve-schwartz-space]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Shai Dekel, Gerard Kerkyacharian, George Kyriazis, Pencho Petrushev, A New Proof of the Atomic Decomposition of Hardy Spaces, Constructive Theory of Functions (Sozopol 2016), pp. 59-73"
      url: "https://people.math.sc.edu/pencho/Publications/DKKP-Sozopol-2016.pdf"
      locator: "section 1.1, printed p. 60 (PDF p. 2), equation (1): $P_N$, $\\mathcal F_N$, $M_N$"
    - title: "Stefano Meda, Peter Sjogren, Maria Vallarino, Atomic decompositions and operators on Hardy spaces, Revista de la Union Matematica Argentina 50 (2009), no. 2, 15-22"
      url: "https://inmabb.criba.edu.ar/revuma/pdf/v50n2/v50n2a02.pdf"
      locator: "section 1, p. 16: the class $B_N=\\{\\varphi\\in\\mathcal S:\\sup_x(1+|x|)^N|\\partial^\\alpha\\varphi(x)|\\le1,\\ |\\alpha|\\le N\\}$"
    - title: "David Cruz-Uribe SFO, Li-An Daniel Wang, Variable Hardy Spaces, arXiv:1211.6505 (2012)"
      url: "https://arxiv.org/pdf/1211.6505"
      locator: "section 3, p. 7: $\\mathcal S_N$ and $M_N$ with $N>n/p_0+n+1$"
    - title: "Marcin Bownik, Anisotropic Hardy Spaces and Wavelets, Memoirs of the American Mathematical Society 164 (2003), no. 781"
      url: "https://pages.uoregon.edu/mbownik/papers/12-memo0781.pdf"
      locator: "Chapter 1, Definition 3.3, (3.4)-(3.5) and Definition 3.4, (3.9), printed pp. 10-11: $S_N$ and $M_N$"
verification:
  precheck: n/a
---

## Definition

Fix an integer $n\ge1$ and let $\mathcal S(\mathbb R^n)$ carry the seminorms
and topology of [[def-schwartz-space-and-its-seminorms]] and
[[def-schwartz-topology-and-convergence]], with multi-indices as in
[[def-ck-and-multi-index-notation-in-several-variables]]. For each integer $N\ge1$
and $\varphi\in\mathcal S(\mathbb R^n)$ define the **Schwartz test seminorm of
order $N$**
$$P_N(\varphi)=\sup_{x\in\mathbb R^n}(1+|x|)^N\max_{|\alpha|\le N+1} |\partial^\alpha\varphi(x)|$$
and the **grand maximal test class of order $N$**
$$\mathcal F_N=\{\varphi\in\mathcal S(\mathbb R^n):P_N(\varphi)\le1\}.$$

For $f\in\mathcal S'(\mathbb R^n)$ the **grand maximal function of order $N$**
is
$$M_Nf(x)=\sup_{\varphi\in\mathcal F_N}\sup_{t>0}\sup_{|y-x|\le t}|(f*\varphi_t)(y)|,\qquad x\in\mathbb R^n,$$
where $\varphi_t(u)=t^{-n}\varphi(u/t)$ and convolution is the distributional
convolution of [[def-convolution-of-a-tempered-distribution-with-a-schwartz-function]].
The dilated test $\varphi_t$ is Schwartz for every $t>0$
([[lem-schwartz-dilations-preserve-schwartz-space]]), so each displayed
convolution is defined even when $\int\varphi=0$. Thus the full class
$\mathcal F_N$, including its zero-integral tests, is used. Each convolution
has a finite scalar value and the supremum is a well-defined function with
values in $[0,\infty]$; the value $+\infty$ is allowed and no measurability is
asserted here. The class $\mathcal F_N$ contains the zero function, is
symmetric under $\varphi\mapsto-\varphi$ and under complex conjugation, and is
nonempty for every $N$. No choice principle is used in this definition.

The order $N$ is a parameter. The characterisation theorem on this page
fixes a finite admissible order $N_0(n,p,\varphi)<\infty$ depending only on
$n$, $p$ and the fixed kernel $\varphi$ and
works for every $N\ge N_0(n,p,\varphi)$; the value of $N_0$ is whatever the
accumulated comparison estimates of that proof require, and its existence, not
an explicit formula, is what the page uses. The sources record the explicit sufficient
choices $N\ge\lfloor n/p\rfloor+1$ for the nontangential class $\mathcal F_N$ in
[DKKP, Proposition 1, p. 60], $N>1+n/p$ for the radial class $B_N$
(with derivatives through order $N$) in [MSV, section 1, p. 16], and
$N>n/p+n+1$ in [CUW, Theorem 3.1, p. 8]; these
recorded choices are not used as the definition of $N_0$ below. If
$N'\ge N$ then $(1+|x|)^{N'}\max_{|\alpha|\le N'+1}|\partial^\alpha\varphi(x)|
\ge(1+|x|)^N\max_{|\alpha|\le N+1}|\partial^\alpha\varphi(x)|$ pointwise, so
$\mathcal F_{N'}\subseteq\mathcal F_N$ and hence
$$M_{N'}f\le M_Nf\qquad\text{pointwise on }\mathbb R^n$$
for every $f\in\mathcal S'$: the grand maximal functions are monotone in the
order. The aperture is fixed to one; the comparison with larger apertures is
the subject of the domination lemma on this page.
