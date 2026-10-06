---
id: cex-critical-w-one-n-does-not-embed-in-linfinity
kind: counterexample
title: "$W^{1,n}$ is not contained in $L^\\infty$"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 5
deps: [def-axiom-of-choice, cex-morrey-endpoint-p-equals-n-fails, thm-critical-sobolev-embedding-into-every-finite-lq, def-sobolev-space-wkp-and-its-norm, def-l-p-space-as-a-quotient-by-null-functions, lem-euclidean-bump-for-a-compact-set-inside-an-open-set, def-weak-derivative-of-a-locally-integrable-function, thm-extension-theorem-for-bounded-smooth-domains, lem-classical-derivatives-are-weak-derivatives]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Chapter 3 §3.7, Example 3.30, printed p. 66."
    - title: "Juha Kinnunen, Sobolev Spaces (Aalto University, 2026, complete graduate lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
      locator: "Chapter 3 §3.2, Remark 3.16(1), printed p. 73."
---

## Statement refuted

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $n\ge2$ and let $\varphi\in C_c^\infty(\mathbb R^n)$ satisfy $0\le\varphi\le1$, $\varphi=1$ on $B(0,\frac12)$ and $\operatorname{supp}\varphi\subseteq B(0,2)$, and set $f(x)=\varphi(x)\log\log\bigl(1+\frac1{|x|}\bigr)$ for $x\ne0$, $f(0)=0$. Then $f\in W^{1,n}(\mathbb R^n)$ but $f$ is unbounded near the origin; therefore this $W^{1,n}$ class admits no bounded (and no continuous, let alone Holder) representative, and the endpoint $p=n$ has no $L^\infty$ embedding, while this compactly supported witness belongs to $L^q$ for every finite $q$ (the general bounded-domain finite-$q$ embedding is stated separately).

## Facts & Assumptions

**Given:** The Axiom of Choice; $n\ge2$; a cutoff $\varphi$ as in the statement ([[lem-euclidean-bump-for-a-compact-set-inside-an-open-set]]); and $f=\varphi\,g$ with $g(x)=\log\log(1+1/|x|)$ for $x\ne0$, $g(0)=0$.

[F1] The witness $g$ lies in $W^{1,n}(B(0,1))$ and has no bounded representative; consequently no representative of $g$ is bounded on any neighbourhood of the origin ([[cex-morrey-endpoint-p-equals-n-fails]]).

[F2] $W^{1,n}$ consists of the $L^n$ classes with weak gradient in $L^n$; multiplication by the smooth compactly supported cutoff $\varphi$ preserves $W^{1,n}$ classes and $L^p$ classes are determined up to null sets ([[def-sobolev-space-wkp-and-its-norm]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

[F3] The critical embedding gives $W^{1,n}(\Omega)\hookrightarrow L^q(\Omega)$ for every finite $q$ on nonempty bounded domains that are $W^{1,s}$-extension domains for every $s\in(n/2,n)$ ([[thm-critical-sobolev-embedding-into-every-finite-lq]]).

[F4] A compact ball inside an open ball admits a smooth cutoff equal to $1$ on the smaller ball and supported in the larger one ([[lem-euclidean-bump-for-a-compact-set-inside-an-open-set]]); weak derivatives are characterized by the test-function identity ([[def-weak-derivative-of-a-locally-integrable-function]]).

[F5] Balls are bounded smooth domains, so under AC they have a bounded extension operator at every Sobolev index ([[thm-extension-theorem-for-bounded-smooth-domains]]). Smooth classical derivatives are weak derivatives under CC ([[lem-classical-derivatives-are-weak-derivatives]]).

## Counterexample

**Proof technique:** direct.

1.1 Membership in $W^{1,n}$. On $B(0,1)$, $|f|\le|g|$ because $0\le\varphi\le1$, so $f\in L^n(B(0,1))$ by [F1]. On $\mathbb R^n\setminus B(0,1)$, the function $g$ and its derivatives are smooth and bounded on the compact support of $\varphi$, so $f\in L^n(\mathbb R^n)$. Choose $\chi\in C_c^\infty(B(0,1))$ equal to $1$ on $B(0,1/4)$, and write $a:=\chi\varphi$ and $b:=(1-\chi)\varphi g$. Then $a$ is supported in $B(0,1)$, while $b$ is smooth and compactly supported away from the origin. For a test function $\psi\in C_c^\infty(\mathbb R^n)$, $a\psi\in C_c^\infty(B(0,1))$, so the weak derivative identity for $g$ from [F1] gives $$\int_{\mathbb R^n}ag\,\partial_i\psi=\int_{B(0,1)}g\,\partial_i(a\psi)-\int_{B(0,1)}g(\partial_i a)\psi=-\int_{B(0,1)}\bigl(aD_i g+g\partial_i a\bigr)\psi.$$ The summand $ag$ therefore has weak derivative $aD_i g+g\partial_i a$, which lies in $L^n$ by [F1] and boundedness of $a,Da$; the summand $b$ has its classical, compactly supported $L^n$ weak derivative by [F5]. Thus $f=ag+b\in W^{1,n}(\mathbb R^n)$ by [F2]. [F1, F2, F4, F5, given, algebra]

2.1 No bounded representative. For every $M>0$ the set $\{x\in B(0,\frac12):f(x)>M\}$ is a punctured neighbourhood of $0$ and has positive measure, because $f=g\to+\infty$ as $x\to0$; hence every representative of the $W^{1,n}$ class of $f$ is unbounded on every neighbourhood of $0$. In particular $f$ has neither a bounded, nor a continuous, nor a Holder representative. [F1, F2, step 1.1, given, algebra]

3.1 The endpoint contrast. By [F3], applied on $\Omega=B(0,2)$, whose all-exponents extension hypothesis is supplied by [F5], the class $f$ lies in $L^q$ for every finite $q$ and satisfies $\|f\|_{L^q}\le C(n,q)\|f\|_{W^{1,n}}$. But no finite constant bounds $\|f\|_{L^\infty}$, since any representative is unbounded by step 2.1; hence $W^{1,n}$ admits no embedding into $L^\infty$ or a Holder class; the finite-$q$ statement here concerns this compactly supported witness and the bounded domains covered by [F3]. [F3, F5, step 1.1, step 2.1, given, algebra] ∎


## Source notes

The witness is Hunter's Example 3.30 and Kinnunen's Remark 3.16(1), printed at p. 66 and p. 73. The membership in $W^{1,n}$ and the absence of a bounded representative are established for the localised logarithm in [[cex-morrey-endpoint-p-equals-n-fails]]; multiplying by the cutoff $\varphi$ does not change the behaviour near the origin and makes the function compactly supported, and the finite-$q$ embeddings are the complement recorded in [[thm-critical-sobolev-embedding-into-every-finite-lq]].
