---
id: "lem-classical-solutions-satisfy-the-weak-formulation"
kind: "lemma"
title: "Classical solutions satisfy the weak formulation"
status: published
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 2
deps:
  - "def-axiom-of-choice"
  - "def-bounded-c-k-domain-and-boundary-charts"
  - "def-ck-and-multi-index-notation-in-several-variables"
  - "def-classical-normal-derivative"
  - "def-complex-lp-and-euclidean-test-function-conventions"
  - "def-countable-choice"
  - "def-l-p-space-as-a-quotient-by-null-functions"
  - "def-sobolev-space-wkp-and-its-norm"
  - "def-uniformly-elliptic-divergence-form-operator"
  - "def-weak-dirichlet-solution-for-a-divergence-form-operator"
  - "def-wkp-zero-as-a-sobolev-closure"
  - "lem-classical-derivatives-are-weak-derivatives"
  - "lem-ltwo-and-divergence-data-embed-in-h-minus-one"
  - "lem-weak-leibniz-rule-with-a-smooth-factor"
  - "thm-holder-inequality-for-integrals"
  - "thm-kernel-of-the-trace-is-w-one-p-zero"
  - "thm-lp-trace-operator-on-a-bounded-c-one-domain"
  - "thm-sobolev-gauss-green-formula-on-c-one-domains"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§4.6, the passage from the classical to the weak formulation of the Dirichlet problem, printed pp. 101–102"
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Springer Universitext, 2011, complete 614-page text)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
      locator: "§9.5, Step A: every classical solution is a weak solution for the Dirichlet problem, printed pp. 292–294"
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford, complete 223-page author scan)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 7, the weak formulation of the Dirichlet problem for the operator with $C^1$ coefficients, printed pp. 68–70"
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "Section 2.2, printed p. 37, classical-to-weak integration by parts for Poisson; Section 5.1, printed p. 101, the divergence-form weak equation."
---

## Statement

Assume the Axiom of Choice (through the published Sobolev Gauss--Green formula) and Countable Choice. Let $\Omega\subset\mathbb R^n$, $n\ge2$, be a bounded $C^1$ domain, let $a^{ij}\in C^1(\overline\Omega)$, $b^i,c\in C(\overline\Omega)$ with uniform ellipticity constant $\theta$ ([[def-uniformly-elliptic-divergence-form-operator]], [[def-bounded-c-k-domain-and-boundary-charts]]), let $u\in C^2(\overline\Omega)\cap H^1_0(\Omega)$ and $f\in C(\overline\Omega)$, and set $$Lu:=-D_i(a^{ij}D_ju)+b^iD_iu+cu .$$ If $Lu=f$ on $\Omega$, then $u$ is a weak solution in the sense of [[def-weak-dirichlet-solution-for-a-divergence-form-operator]] for the datum $F_f(v):=(f,v)_{L^2}$: $$a(u,v)=\int_\Omega f\overline v\,dx\qquad\text{for every }v\in H^1_0(\Omega) .$$ No converse is claimed: the lemma is the classical-to-weak consistency statement only.

## Facts & Assumptions

**Given:** The Axiom of Choice and Countable Choice; a bounded $C^1$ domain $\Omega\subset\mathbb R^n$, $n\ge2$; coefficients $a^{ij}\in C^1(\overline\Omega)$, $b^i,c\in C(\overline\Omega)$ with ellipticity constant $\theta$; a class $u\in C^2(\overline\Omega)\cap H^1_0(\Omega)$ and $f\in C(\overline\Omega)$ with $Lu:=-D_i(a^{ij}D_ju)+b^iD_iu+cu=f$ on $\Omega$; the divergence form $a(u,v)=\int_\Omega(a^{ij}D_ju\overline{D_iv}+b^iD_iu\overline v+cu\overline v)\,dx$; and the trace operator $T$ of [[thm-lp-trace-operator-on-a-bounded-c-one-domain]] with outward normal $\nu$.

[F1] $u\in C^2(\overline\Omega)\cap H^1_0(\Omega)$ has classical derivatives that are its weak derivatives, and likewise $a^{ij}D_ju\in C^1(\overline\Omega)$ has for each $i$ the classical derivative $D_i(a^{ij}D_ju)\in C(\overline\Omega)$ as its weak derivative ([[lem-classical-derivatives-are-weak-derivatives]], [[def-ck-and-multi-index-notation-in-several-variables]], [[def-uniformly-elliptic-divergence-form-operator]]).

[F2] Kernel of the trace: for $1\le p<\infty$ the kernel of $T$ on $W^{1,p}(\Omega)$ is exactly $W_0^{1,p}(\Omega)$; in particular $w\in H^1_0(\Omega)$ implies $Tw=0$ ([[thm-kernel-of-the-trace-is-w-one-p-zero]], [[def-wkp-zero-as-a-sobolev-closure]]).

[F3] $H^1_0(\Omega)$ is stable under conjugation, being the closure of the conjugation-stable space $C_c^\infty(\Omega;\mathbb K)$; complex weak derivatives are taken componentwise, so $D_i\overline w=\overline{D_iw}$ for $w\in H^1$ ([[def-wkp-zero-as-a-sobolev-closure]], [[def-complex-lp-and-euclidean-test-function-conventions]], [[def-sobolev-space-wkp-and-its-norm]]).

[F4] Sobolev Gauss--Green: for $n\ge2$, $1<p<\infty$, $U\in W^{1,p}(\Omega;\mathbb K)$ and $W\in W^{1,p'}(\Omega;\mathbb K)$ one has $\int_\Omega U\,D_iW\,dx=-\int_\Omega(D_iU)W\,dx+\int_{\partial\Omega}(TU)(TW)\nu_i\,dS$, all integrals finite ([[thm-sobolev-gauss-green-formula-on-c-one-domains]], [[def-bounded-c-k-domain-and-boundary-charts]], [[def-classical-normal-derivative]]).

[F5] The datum $F_f(v):=(f,v)_{L^2}$ is a bounded conjugate-linear functional on $H^1_0(\Omega)$, i.e. an element of $H^{-1}(\Omega)$: $|F_f(v)|\le\|f\|_{L^2}\|v\|_{L^2}\le\|f\|_{L^2}\|v\|_{H^1_0}$, and $\Omega$ is bounded hence bounded in one direction ([[lem-ltwo-and-divergence-data-embed-in-h-minus-one]], [[thm-holder-inequality-for-integrals]], [[def-weak-dirichlet-solution-for-a-divergence-form-operator]], [[def-l-p-space-as-a-quotient-by-null-functions]]).



## Proof

1.1 Boundary term vanishes: let $v\in H^1_0(\Omega)$. Then $\overline v\in H^1_0(\Omega)$ by conjugation stability, so $T\overline v=0$; consequently every boundary term carrying the factor $T\overline v$ vanishes. [F2, F3]

2.1 Gauss--Green for one coefficient: fix $i$. Since $a^{ij}D_ju\in C^1(\overline\Omega)\subseteq W^{1,2}(\Omega)$ and $\overline v\in W^{1,2}(\Omega)$, applying the Gauss--Green formula with $U=a^{ij}D_ju$ and $W=\overline v$ gives $$\int_\Omega a^{ij}D_ju\,\overline{D_iv}\,dx=-\int_\Omega D_i(a^{ij}D_ju)\,\overline v\,dx+\int_{\partial\Omega}T(a^{ij}D_ju)\,T(\overline v)\,\nu_i\,dS,$$ and the boundary integral is $0$ by step 1.1. Summing over $i,j$ and noting that $D_i\overline v=\overline{D_iv}$ and $D_ju$ are the weak derivatives of the classical ones yields $\int_\Omega a^{ij}D_ju\overline{D_iv}\,dx=-\int_\Omega D_i(a^{ij}D_ju)\overline v\,dx$. [F1, F3, F4, step 1.1]

3.1 Weak equation: adding the drift and reaction terms and using the classical derivatives as weak derivatives, $$a(u,v)=\int_\Omega\bigl(-D_i(a^{ij}D_ju)+b^iD_iu+cu\bigr)\overline v\,dx=\int_\Omega(Lu)\overline v\,dx=\int_\Omega f\overline v\,dx$$ for every $v\in H^1_0(\Omega)$; here $Lu=f$ holds as an identity of continuous functions on $\Omega$ by hypothesis, and $F_f(v)=\int_\Omega f\overline v\,dx$ is the $L^2$ pairing. [F1, F3, step 2.1, algebra]

4.1 Conclusion: by [F5] the functional $F_f$ lies in $H^{-1}(\Omega)$, and step 3.1 exhibits $a(u,v)=F_f(v)$ for every $v\in H^1_0(\Omega)$ with $u\in C^2(\overline\Omega)\cap H^1_0(\Omega)$; hence every classical solution with $Lu=f$ is a weak solution in the sense of the definition. No converse is claimed. [F5, step 3.1] ∎ 