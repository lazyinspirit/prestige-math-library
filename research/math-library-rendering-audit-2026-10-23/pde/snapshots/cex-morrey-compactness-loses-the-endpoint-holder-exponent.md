---
id: cex-morrey-compactness-loses-the-endpoint-holder-exponent
kind: counterexample
title: "Morrey--Rellich compactness loses the endpoint H\\\"older exponent"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 5
deps: [thm-morrey-rellich-compactness-for-p-greater-than-n, def-local-holder-and-c-two-alpha-norms-on-euclidean-balls, def-sobolev-space-wkp-and-its-norm, lem-euclidean-bump-for-a-compact-set-inside-an-open-set, thm-linear-change-of-variables-for-lebesgue-measure, def-l-p-space-as-a-quotient-by-null-functions, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "The proof of Theorem 3.48 and the excluded endpoint in Theorem 3.49(3), printed pp. 75-76"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (archived 2025 author manuscript)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Theorem 9.31(3) and the strictness of the H\\\"older range, printed p. 218"
---

## Statement refuted

**Refuted claim.** In the Morrey range $p>n$ the compactness
$W^{1,p}(\Omega)\hookrightarrow C^{0,\alpha}(\overline\Omega)$ holds at the
endpoint exponent $\alpha=1-\frac np$ itself.

The witness rescales a fixed smooth bump; all $W^{1,p}$ norms stay bounded and
the functions converge uniformly to $0$, but the endpoint H\"older seminorm is
scale invariant and stays bounded away from zero.

## Facts & Assumptions

**Given:** the Axiom of Choice, $n\ge2$, $p>n$, $\alpha=1-\frac np\in(0,1)$, $\Omega=B(0,1)$, a nonzero $\varphi\in C_c^\infty(\mathbb R^n)$ with $\varphi(0)=1$ and $\operatorname{supp}\varphi\subseteq B(0,1)$ (for instance a normalised smooth bump), and $u_k(x):=(k+1)^{-\alpha}\varphi((k+1)x)$ on $\Omega$ for $k\ge0$.

[F1] *Scaling of norms.* By the change of variables $y=(k+1)x$, $\|u_k\|_{L^p(\Omega)}=(k+1)^{-\alpha-n/p}\|\varphi\|_{L^p}=(k+1)^{-1}\|\varphi\|_{L^p}\to0$ and $\|Du_k\|_{L^p(\Omega)}=(k+1)^{1-\alpha-n/p}\|D\varphi\|_{L^p}=\|D\varphi\|_{L^p}$, because $\alpha+\frac np=1$; in particular $(u_k)$ is bounded in $W^{1,p}(\Omega)$. ([[thm-linear-change-of-variables-for-lebesgue-measure]], [[def-sobolev-space-wkp-and-its-norm]])

[F2] *H\"older norms.* The $C^{0,\alpha}$ seminorm is $[g]_{C^{0,\alpha}}=\sup_{x\ne y}|g(x)-g(y)|/|x-y|^{\alpha}$, and the $C^{0,\alpha}$ norm is the sum of the supremum norm and the seminorm. ([[def-local-holder-and-c-two-alpha-norms-on-euclidean-balls]])

[F3] *The reference bump.* $\varphi$ is smooth with compact support and $\varphi(0)=1$, so $[\varphi]_{C^{0,\alpha}(\mathbb R^n)}>0$: the pair $x=0$ and any $y$ with $|y|=1$ gives $|{\varphi}(0)-\varphi(y)|/|y|^{\alpha}=1$. ([[lem-euclidean-bump-for-a-compact-set-inside-an-open-set]], [[def-l-p-space-as-a-quotient-by-null-functions]])

## Counterexample

**Proof technique:** direct.

1.1 By [F1], $\|u_k\|_{W^{1,p}(\Omega)}\le (k+1)^{-1}\|\varphi\|_{L^p}+\|D\varphi\|_{L^p}\le\|\varphi\|_{L^p}+\|D\varphi\|_{L^p}$ is bounded, and $\|u_k\|_\infty=(k+1)^{-\alpha}\|\varphi\|_\infty\to0$, so the representatives converge uniformly to $0$ on $\Omega$. [F1, given]

1.2 For $x=0$ and $y=e_1/(k+1)$ in $\overline\Omega$, one has $u_k(x)=(k+1)^{-\alpha}$ and $u_k(y)=(k+1)^{-\alpha}\varphi(e_1)=0$ because the bump support is inside the unit ball. Therefore $[u_k]_{C^{0,\alpha}(\overline\Omega)}\ge (k+1)^{-\alpha}/|e_1/(k+1)|^\alpha=1$ for every $k$. [F2, F3, given]

2.1 If a subsequence converged in $C^{0,\alpha}(\overline\Omega)$ to some $w$, then it would converge uniformly, hence $w=0$ by step 1.1, and by [F2] the seminorms would converge: $|[u_{k_j}]_{C^{0,\alpha}}-[w]_{C^{0,\alpha}}|\le[u_{k_j}-w]_{C^{0,\alpha}}\le\|u_{k_j}-w\|_{C^{0,\alpha}}\to0$, forcing the seminorms of step 1.2 to tend to $0$ — a contradiction, since they are at least $1$. Hence the endpoint exponent in [[thm-morrey-rellich-compactness-for-p-greater-than-n]] cannot yield compactness, and the refuted claim is false. [F2, step 1.1, step 1.2] ∎ 