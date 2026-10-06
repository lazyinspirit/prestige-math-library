---
id: ex-trace-of-an-ac-sobolev-function-on-an-interval
kind: example
title: "The trace of a one-dimensional Sobolev function is the pair of endpoint values"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [lem-one-dimensional-sobolev-endpoint-estimate, cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives, thm-acl-characterisation-of-w-one-p, def-sobolev-space-wkp-and-its-norm, def-wkp-zero-as-a-sobolev-closure, def-countable-choice, lem-weak-leibniz-rule-with-a-smooth-factor, lem-compact-support-zero-extension-in-wkp, cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn, thm-holder-inequality-for-integrals, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-4.md"
      - "research/frontier-38-owner-30-alpha-batch-4-5a.md"
      - "research/frontier-38-owner-30-step5-hash-4-post-5a.json"
    content_sha256: "0476d2aa086e07fc33866085289d22ea0f6e2bde09f40f71d94f672b983b353a"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (archived 2025 author manuscript)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Section 9.2, Theorem 9.18 and Corollary 9.19 with $n=1$: classical restriction extends to the two-point boundary, printed pp. 208-210."
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Chapter 3, Section 3.9, printed p. 73: in one dimension the trace is evaluated along the boundary and equals the absolutely continuous representative's endpoint values."
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "Chapter 3, Section 3.7, the one-dimensional case of Theorem 3.14 and Corollary 3.15, printed pp. 62-64."
---

## Example

Assume the Axiom of Choice. Let $I=(a,b)$ be a bounded interval, $1\le p<\infty$
and $\mathbb K\in\{\mathbb R,\mathbb C\}$. Identify the boundary
$\partial I=\{a,b\}$ with its counting measure, so that
$L^p(\partial I;\mathbb K)=\mathbb K^2$ with the norm
$(|z_a|^p+|z_b|^p)^{1/p}$. For $u\in W^{1,p}(I;\mathbb K)$ let $u^*$ be its
unique absolutely continuous representative
([[cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives]])
and define the **trace**
$$Tu:=\bigl(u^*(a),u^*(b)\bigr)\in\mathbb K^2.$$
Then $T:W^{1,p}(I;\mathbb K)\to\mathbb K^2$ is a well-defined linear bounded
operator depending only on the class of $u$; and
$$u\in W_0^{1,p}(I;\mathbb K)\quad\Longleftrightarrow\quad Tu=(0,0),$$
where $W_0^{1,p}(I)$ is the $W^{1,p}$-closure of $C_c^\infty(I)$
([[def-wkp-zero-as-a-sobolev-closure]]). On $I=(0,1)$ the function
$u(x)=x(1-x)$ has $u^*=u$, $Tu=(0,0)$ and lies in $W_0^{1,p}(0,1)$, while
$u\equiv1$ has $Tu=(1,1)\ne0$ and lies outside $W_0^{1,p}(0,1)$.

## Facts & Assumptions

**Given:** The Axiom of Choice; a bounded interval $I=(a,b)$; $1\le p<\infty$; a field $\mathbb K\in\{\mathbb R,\mathbb C\}$; and the space $W^{1,p}(I;\mathbb K)$ with the norm of [[def-sobolev-space-wkp-and-its-norm]].

[F1] Assume the Axiom of Choice for the ACL and absolutely-continuous interfaces. Every class $u\in W^{1,p}(I;\mathbb K)$ has exactly one continuous locally absolutely continuous representative $u^*$, which extends uniquely to an absolutely continuous function on $[a,b]$ and satisfies $u^*(x)=u^*(a)+\int_a^xDu$ for every $x\in[a,b]$; in particular the endpoint values $u^*(a),u^*(b)$ are determined by the class, and $u(x)=u(a)+\int_a^xu'$ a.e. ([[cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives]])

[F2] Assume the Axiom of Choice through the ACL interface. For bounded $I$, $1\le p<\infty$ and $u\in W^{1,p}(I;\mathbb K)$ with weak derivative $u'$, the endpoint estimate holds, in particular $|u^*(a)|^p\le2^{p-1}(\varepsilon^{-1}\int_a^{a+\varepsilon}|u^*|^p+\varepsilon^{p-1}\int_a^{a+\varepsilon}|u'|^p)$ for $1<p<\infty$ and $|u^*(a)|\le\varepsilon^{-1}\int_a^{a+\varepsilon}|u^*|+\int_a^{a+\varepsilon}|u'|$ for $p=1$, with the analogous inequality at $b$. ([[lem-one-dimensional-sobolev-endpoint-estimate]])

[F4] $W_0^{1,p}(I;\mathbb K)$ is the closure in the $W^{1,p}(I)$ norm of $C_c^\infty(I;\mathbb K)$; its elements are $L^p$ classes, and $u\in W_0^{1,p}$ means that for every $\eta>0$ there is $\varphi\in C_c^\infty(I)$ with $\|u-\varphi\|_{W^{1,p}(I)}<\eta$. ([[def-wkp-zero-as-a-sobolev-closure]])

[F5] For open $\Omega\subseteq\mathbb R^n$, $\eta\in C_c^\infty(\Omega)$ and $u\in W^{1,p}(\Omega)$, $1\le p\le\infty$: $\eta u\in W^{1,p}(\Omega)$ with $D_i(\eta u)=(\partial_i\eta)u+\eta D_iu$, and $\|\eta u\|_{W^{1,p}}\le C_\eta\|u\|_{W^{1,p}}$. ([[lem-weak-leibniz-rule-with-a-smooth-factor]])

[F6] Assume the Axiom of Choice. If $u\in W^{1,p}(\Omega)$ vanishes a.e. outside a compact $K_0\Subset\Omega$, then the extension $E_0u$ of a representative by zero lies in $W^{1,p}(\mathbb R^n)$ with $D_i(E_0u)=E_0(D_iu)$ a.e. and equal component norms. ([[lem-compact-support-zero-extension-in-wkp]])

[F7] Assume the Axiom of Choice. $C_c^\infty(\mathbb R^n)$ is dense in $W^{1,p}(\mathbb R^n)$, $1\le p<\infty$. ([[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]])

[F8] Holder's inequality: $\int|\varphi\psi|\le\|\varphi\|_p\|\psi\|_{p'}$ for conjugate exponents and $\varphi\in\mathcal L^p$, $\psi\in\mathcal L^{p'}$. ([[thm-holder-inequality-for-integrals]])

## Verification

1.1 The operator $T$ is well defined, linear and bounded. By [F1] the representative $u^*$ and hence the pair $(u^*(a),u^*(b))$ depend only on the class, so $T$ is well defined on classes; if $u,v$ are classes with representatives $u^*,v^*$, then $u^*+v^*$ and $\lambda u^*$ are the absolutely continuous representatives of $u+v$ and $\lambda u$ by [F1]'s uniqueness and the linearity of the fundamental-theorem identity, so $T$ is linear. With $\varepsilon:=(b-a)/2$, [F2] gives for $1<p<\infty$ the bound $|u^*(a)|^p\le2^{p-1}\bigl(\frac{2}{b-a}\|u\|_{L^p}^p+(\frac{b-a}{2})^{p-1}\|u'\|_{L^p}^p\bigr)$ and the same bound at $b$, hence $\|Tu\|_{\mathbb K^2}\le C(b-a,p)\|u\|_{W^{1,p}(I)}$; for $p=1$, $|u^*(a)|\le\frac{2}{b-a}\|u\|_{L^1}+\|u'\|_{L^1}$ and the same at $b$. [F1, F2, algebra, given]

1.2 Endpoint vanishing implies membership in $W_0^{1,p}(I)$. Assume $u^*(a)=u^*(b)=0$. For $0<\delta<(b-a)/4$ choose $\chi_\delta\in C_c^\infty(I)$ with $0\le\chi_\delta\le1$, equal to one on $[a+\delta,b-\delta]$, vanishing on $(a,a+\delta/2)\cup(b-\delta/2,b)$, and $|\chi_\delta'|\le C/\delta$. By [F5], $(\chi_\delta u)'=\chi_\delta u'+\chi_\delta'u$. The terms containing $1-\chi_\delta$ tend to zero in $L^p$ by dominated convergence. Since $u^*(t)=\int_a^tu'$, [F8] gives $|u^*(t)|^p\le(t-a)^{p-1}\int_a^t|u'|^p$ (also at $p=1$), hence $\int_a^{a+\delta}|\chi_\delta'u|^p\le C^p p^{-1}\int_a^{a+\delta}|u'|^p\to0$; the right endpoint is identical. Thus $\chi_\delta u\to u$ in $W^{1,p}$. For each fixed $\delta$, [F6] extends $\chi_\delta u$ by zero to $V_\delta\in W^{1,p}(\mathbb R)$. Choose $\zeta_\delta\in C_c^\infty(I)$ equal to one near its compact support, and use [F7] to choose $\psi_\delta\in C_c^\infty(\mathbb R)$ with $\|\psi_\delta-V_\delta\|_{W^{1,p}(\mathbb R)}<\delta/(1+C_{\zeta_\delta})$. Then [F5] gives $\|\zeta_\delta\psi_\delta-\chi_\delta u\|_{W^{1,p}(I)}<\delta$, and $\zeta_\delta\psi_\delta\in C_c^\infty(I)$. Combining these approximations proves membership in the closure [F4]. [F1, F4, F5, F6, F7, F8, algebra, given]

2.1 Membership in $W_0^{1,p}(I)$ implies $Tu=0$. Every $\varphi\in C_c^\infty(I)$ vanishes on a neighbourhood of $a$ and of $b$, so its absolutely continuous representative vanishes at both endpoints and $T\varphi=(0,0)$. By step 1.1 the map $T$ is bounded, hence continuous; if $u\in W_0^{1,p}(I)$ and $\varphi_m\in C_c^\infty(I)$ with $\varphi_m\to u$ by [F4], then $Tu=\lim_mT\varphi_m=0$. [F4, step 1.1, algebra]

3.1 Conclusion and the two worked functions. Steps 2.1 and 1.2 prove the equivalence $u\in W_0^{1,p}(I)\Leftrightarrow Tu=(0,0)$, and step 1.1 gives well-definedness, linearity and boundedness of $T$; with [F1] this is the assertion that the trace of $u$ is the pair of endpoint values of $u^*$ and depends only on the class. On $I=(0,1)$: for $u(x)=x(1-x)$ the absolutely continuous representative is $u^*=u$ with $u^*(0)=u^*(1)=0$, so $Tu=(0,0)$ and $u\in W_0^{1,p}(0,1)$ by step 1.2; for $u\equiv1$ the representative is $u^*\equiv1$ with $Tu=(1,1)\ne(0,0)$, so $u\notin W_0^{1,p}(0,1)$ by step 2.1. [F1, F4, step 1.2, step 2.1, algebra, given] ∎

## Source notes

Teschl's Corollary 9.19 with $n=1$ (printed pp. 208-210) treats the two-point boundary as the one-dimensional case of the trace operator; Hunter's Section 3.9 (printed p. 73) and Laugesen's one-dimensional case of Corollary 3.15 (printed pp. 62-64) state the same identification of the trace with the endpoint values of the absolutely continuous representative. The converse direction is proved above rather than cited, by truncation toward the endpoints and interior mollification.
