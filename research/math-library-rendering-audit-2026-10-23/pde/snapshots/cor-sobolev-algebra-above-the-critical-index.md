---
id: cor-sobolev-algebra-above-the-critical-index
kind: corollary
title: "The Sobolev space $W^{k,p}$ is an algebra above the critical index"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 5
deps: [def-axiom-of-choice, def-sobolev-space-wkp-and-its-norm, def-l-p-space-as-a-quotient-by-null-functions, def-sobolev-extension-domain-and-extension-operator, def-weak-derivative-of-a-locally-integrable-function, thm-higher-order-sobolev-embedding, thm-meyers-serrin-density-on-an-arbitrary-open-set, thm-holder-inequality-for-integrals, thm-sobolev-spaces-are-banach-spaces, lem-weak-partial-derivatives-lower-sobolev-order, thm-extension-theorem-for-bounded-smooth-domains, lem-classical-derivatives-are-weak-derivatives]
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
    - title: "Juha Kinnunen, Sobolev Spaces (Aalto University, 2026, complete graduate lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
      locator: "Chapter 3 §3.5, Remark 3.41 and its iteration argument, printed pp. 83–84; §3.3, Theorem 3.23 and Remarks 3.25, printed pp. 75–77, for the first-order Morrey input."
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Chapter 3 §3.7, Theorem 3.31, printed pp. 66–67, for the first-order integrability embedding used in the product argument; the higher-order algebra proof is reconstructed here."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $n\ge2$, let $\Omega$ be a bounded $W^{k,p}$-extension domain, $k\ge1$ and $1\le p<\infty$ with $kp>n$. Then there is $C(n,p,k,\Omega)$ with
$$\|uv\|_{W^{k,p}(\Omega)}\le C\|u\|_{W^{k,p}(\Omega)}\|v\|_{W^{k,p}(\Omega)}\qquad(u,v\in W^{k,p}(\Omega)),$$
so $W^{k,p}(\Omega)$ is a Banach algebra; the constants and the conclusion may depend on the choice of equivalent Sobolev norm only through $C$.

## Facts & Assumptions

**Given:** The Axiom of Choice; $n\ge2$; a bounded extension domain $\Omega$; $k\ge1$; $1\le p<\infty$ with $kp>n$; and classes $u,v\in W^{k,p}(\Omega;\mathbb K)$.

[F1] For $w\in W^{k,p}(\Omega)$ fix its bounded whole-space extension $Ew$ and a ball $B\supset\overline\Omega$. By [[lem-weak-partial-derivatives-lower-sobolev-order]], $D^\gamma(Ew)|_B\in W^{s,p}(B)$ with $s=k-|\gamma|$ and norm at most $C\|w\|_{W^{k,p}(\Omega)}$. A ball is a $W^{s,p}$-extension domain for every integer $s\ge1$ by [[thm-extension-theorem-for-bounded-smooth-domains]]. Apply [[thm-higher-order-sobolev-embedding]] on $B$ and restrict to $\Omega$: $D^\gamma w$ is bounded if $sp>n$, lies in every finite $L^q$ if $sp=n$, and lies in $L^q$ for $1/q\ge1/p-s/n$ if $0<sp<n$. If $s=0$, use its original $L^p$ bound. All norms are controlled by $C\|w\|_{W^{k,p}}$; this needs only the fixed $W^{k,p}$ extension of $w$, not extension operators for lower-order classes on $\Omega$ ([[def-sobolev-extension-domain-and-extension-operator]], [[def-sobolev-space-wkp-and-its-norm]]).

[F2] Meyers-Serrin density: for $1\le p<\infty$ the smooth functions in $C^\infty(\Omega)\cap W^{k,p}(\Omega)$ are dense in $W^{k,p}(\Omega)$ ([[thm-meyers-serrin-density-on-an-arbitrary-open-set]], whose Countable-Choice hypothesis is supplied by the Axiom of Choice assumed here; [[def-l-p-space-as-a-quotient-by-null-functions]]).

[F3] Holder's inequality in its multi-factor form: for nonnegative measurable $f,g$ with $\frac1{q_1}+\frac1{q_2}\le\frac1p$ one has $\|fg\|_{L^p(\Omega)}\le C(\Omega)\|f\|_{L^{q_1}}\|g\|_{L^{q_2}}$ on the finite measure domain: apply Holder to $|f|^p$, $|g|^p$ and $1$ with reciprocal exponents $p/q_1$, $p/q_2$ and $1-p/q_1-p/q_2$ (iterate the two-factor inequality; an exponent $0$ means an $L^\infty$ factor). Taking $p$-th roots gives the displayed bound ([[thm-holder-inequality-for-integrals]]).

[F4] The weak derivative is characterized by the test-function identity: an $L^p$ class $g_\alpha$ is the weak $\alpha$-derivative of $w$ exactly when $\int_\Omega w\,\partial^\alpha\varphi=(-1)^{|\alpha|}\int_\Omega g_\alpha\varphi$ for every $\varphi\in C_c^\infty(\Omega)$ ([[def-weak-derivative-of-a-locally-integrable-function]], [[def-sobolev-space-wkp-and-its-norm]]). For smooth functions the classical derivatives are the weak derivatives ([[lem-classical-derivatives-are-weak-derivatives]]).

[F5] $W^{k,p}(\Omega;\mathbb K)$ is complete ([[thm-sobolev-spaces-are-banach-spaces]]).

## Proof

**Proof technique:** direct.

1.1 The product estimate for derivatives. Let $w_1,w_2\in W^{k,p}(\Omega;\mathbb K)$ and let $\gamma_1,\gamma_2$ be multi-indices with $|\gamma_1|+|\gamma_2|\le k$; put $s_i:=k-|\gamma_i|\ge0$, so that $s_1+s_2=2k-|\gamma_1|-|\gamma_2|\ge k$. By [F1] choose exponents $q_i\in[1,\infty]$ with $D^{\gamma_i}w_i\in L^{q_i}(\Omega)$ and $\|D^{\gamma_i}w_i\|_{L^{q_i}}\le C\|w_i\|_{W^{k,p}(\Omega)}$ as follows: $\frac1{q_i}=0$ when $s_ip>n$; $\frac1{q_i}=\frac1p-\frac{s_i}{n}$ when $s_ip<n$; and $\frac1{q_i}=\frac1{2n}$ when $s_ip=n$, which is available because the critical embedding supplies every finite exponent. In every case $\frac1{q_1}+\frac1{q_2}\le\frac1p$: for two subcritical exponents this is $\frac2p-\frac{s_1+s_2}{n}\le\frac2p-\frac kn<\frac1p$ because $kp>n$; for one critical and one subcritical exponent it is $\frac1{2n}+\frac1p-\frac{s}{n}\le\frac1p$ because $s\ge1$; for two critical exponents it is $\frac1n\le\frac1p$ because $p\le n$ (recall $s_ip=n$ with $s_i\ge1$ forces $p\le n$); and a supercritical exponent contributes $0$. Hence by generalized Holder [F3], $D^{\gamma_1}w_1\,D^{\gamma_2}w_2\in L^p(\Omega)$ with $\|D^{\gamma_1}w_1\,D^{\gamma_2}w_2\|_{L^p}\le C(n,p,k,\Omega)\|w_1\|_{W^{k,p}}\|w_2\|_{W^{k,p}}$. [F1, F3, given, algebra]

2.1 The Leibniz identity and the algebra bound. By [F2] choose $u_j,v_j\in C^\infty(\Omega)\cap W^{k,p}(\Omega)$ with $u_j\to u$ and $v_j\to v$ in $W^{k,p}(\Omega)$. Fix $|\alpha|\le k$; for the smooth factors, repeated classical differentiation gives the finite Leibniz formula, and [F4] identifies its classical derivatives with weak derivatives: $D^\alpha(u_jv_j)=\sum_{\beta\le\alpha}\binom{\alpha}{\beta}D^\beta u_j\,D^{\alpha-\beta}v_j$. Applying step 1.1 to the pairs $(u_j-u,v_j)$ and $(u,v_j-v)$ with $(\gamma_1,\gamma_2)=(\beta,\alpha-\beta)$ shows that each summand converges in $L^p(\Omega)$ to $D^\beta u\,D^{\alpha-\beta}v$, and the case $\alpha=0$ gives $u_jv_j\to uv$ in $L^p(\Omega)$; therefore, for every test function $\varphi\in C_c^\infty(\Omega)$, $\int_\Omega uv\,\partial^\alpha\varphi=\lim_j\int_\Omega u_jv_j\,\partial^\alpha\varphi=(-1)^{|\alpha|}\lim_j\int_\Omega D^\alpha(u_jv_j)\,\varphi=(-1)^{|\alpha|}\int_\Omega g_\alpha\varphi$ with $g_\alpha:=\sum_{\beta\le\alpha}\binom{\alpha}{\beta}D^\beta u\,D^{\alpha-\beta}v\in L^p(\Omega)$. By the characterization [F4], $g_\alpha$ is the weak $\alpha$-derivative of $uv$ for every $|\alpha|\le k$, so $uv\in W^{k,p}(\Omega)$, and $\|uv\|_{W^{k,p}(\Omega)}\le\sum_{|\alpha|\le k}\|g_\alpha\|_{L^p}\le C(n,p,k,\Omega)\|u\|_{W^{k,p}}\|v\|_{W^{k,p}}$ by step 1.1, which is the asserted algebra inequality. Completeness [F5] makes it a Banach algebra with continuous multiplication (after an equivalent norm rescaling if a submultiplicative norm is required). [F2, F4, F5, step 1.1, given, algebra] ∎

## Source notes

The algebra property of $W^{k,p}$ above the critical index is the standard consequence of the higher-order embedding and the Leibniz rule; Kinnunen's Morrey theorem and higher-order iteration, together with Hunter's first-order embedding, supply the context; the product estimate and weak Leibniz passage are reconstructed here. The proof above isolates the two ingredients: the product estimate 1.1, where the embedding either makes a factor bounded (when its remaining order exceeds $n/p$), supplies every finite exponent (at the critical order) or supplies the Sobolev exponent (below it), and Holder combines the two; and the Leibniz identity 2.1, which passes the classical formula for smooth approximations to the limit in $L^p$ and identifies the limit through the test-function definition of the weak derivative.
