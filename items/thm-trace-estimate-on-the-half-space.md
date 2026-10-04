---
id: thm-trace-estimate-on-the-half-space
kind: theorem
title: "The half-space trace estimate and the half-space trace operator"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [lem-one-dimensional-sobolev-endpoint-estimate, def-sobolev-space-wkp-and-its-norm, thm-holder-inequality-for-integrals, thm-tonelli-and-fubini-for-completed-product-measures, thm-smooth-up-to-the-boundary-density-on-smooth-domains, thm-completion-universal-property-for-bounded-linear-maps, def-l-p-space-as-a-quotient-by-null-functions, def-axiom-of-choice, thm-acl-characterisation-of-w-one-p, thm-wkp-extension-from-a-half-space, cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn, thm-sobolev-spaces-are-banach-spaces, thm-riesz-fischer-completeness-of-l-p]
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Chapter 3, Section 3.9, Theorem 3.44 and its proof, printed pp. 71-73: the half-space trace operator and the display $|f(x',0)|^p\\le p\\int_0^\\infty|f|^{p-1}|\\partial_nf|dt$."
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "Chapter 3, Section 3.7, Theorem 3.14, Steps 1-3, printed pp. 62-64: the flat-boundary estimate and the density extension."
    - title: "Armin Schikorra, Partial Differential Equations (University of Pittsburgh, version 4 December 2019)"
      url: "https://sites.pitt.edu/~armin/pde1_2019/pde_script.pdf"
      locator: "Chapter III, Section III.3.5, Theorem III.3.21 and its proof, printed pp. 76-77: flat half-space estimate via $\\int_{\\mathbb R^n_+}\\partial_n(|u|^p)$, then flattening and a partition of unity."
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (archived 2025 author manuscript)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Section 9.2, Theorem 9.18 and its proof, printed pp. 208-209: the flat estimate after Gauss-Green."
---

## Statement

Assume the Axiom of Choice. Let $n\ge2$, $d=n-1$, $1\le p<\infty$,
$\mathbb K\in\{\mathbb R,\mathbb C\}$, and let
$H=\{x=(x',x_n)\in\mathbb R^n:x_n>0\}$ with
$\partial H=\mathbb R^d\times\{0\}$. Write $\partial_n$ for the last
coordinate derivative.

(i) For every $u\in C(\overline H)\cap W^{1,p}(H;\mathbb K)$ with compact
support, the classical boundary function $g=u(\cdot,0)$ satisfies
$$|g(x')|^p\le p\int_0^\infty|u(x',t)|^{p-1}\,|\partial_nu(x',t)|\,dt$$
for a.e. $x'\in\mathbb R^d$, hence
$\|g\|_{L^p(\mathbb R^d)}^p\le p\,\|u\|_{L^p(H)}^{p-1}\|\partial_nu\|_{L^p(H)}\le p\,\|u\|_{W^{1,p}(H)}^p$.
For every $h>0$ the strip form
$$h\,|g(x')|^p\le C_p\Bigl(\int_0^h|u(x',t)|^pdt+h^p\int_0^h|\partial_nu(x',t)|^pdt\Bigr)$$
holds for a.e. $x'$, with $C_p=2^{p-1}$ for $1<p<\infty$ and $C_1=1$.

(ii) There is a unique bounded linear operator
$T_+:W^{1,p}(H;\mathbb K)\to L^p(\mathbb R^d;\mathbb K)$ with
$T_+u=u(\cdot,0)$ for every compactly supported
$u\in C(\overline H)\cap W^{1,p}(H)$, and
$\|T_+u\|_{L^p(\mathbb R^d)}\le C(n,p)\|u\|_{W^{1,p}(H)}$; it is the unique
bounded extension of classical restriction, and $T_+u$ depends only on the
a.e. class of $u$.

## Facts & Assumptions

**Given:** The Axiom of Choice; $n\ge2$, $d=n-1$, $1\le p<\infty$; the half-space $H$ and its boundary; the space $W^{1,p}(H;\mathbb K)$ with norm $\|u\|_{W^{1,p}(H)}$ of [[def-sobolev-space-wkp-and-its-norm]]; and the class convention of [[def-l-p-space-as-a-quotient-by-null-functions]].

[F1] Assume the Axiom of Choice through its Countable-Choice and Dependent-Choice interfaces. For open $\Omega\subseteq\mathbb R^n$, $n\ge1$, and $1\le p<\infty$: $u\in W^{1,p}(\Omega;\mathbb K)$ if and only if $u\in L^p(\Omega;\mathbb K)$ has one measurable ACL representative $u^*$ whose classical coordinate derivatives exist almost everywhere, are measurable and lie in $L^p$; then $\partial_iu^*$ represents $D_iu$ almost everywhere. ([[thm-acl-characterisation-of-w-one-p]], [[def-axiom-of-choice]])

[F2] Assume the Axiom of Choice through the ACL interface. For a bounded interval $I=(a,b)$, $1\le p<\infty$ and $u\in W^{1,p}(I;\mathbb K)$ with weak derivative $u'$, the absolutely continuous representative $u^*$ satisfies, for every $0<\varepsilon<b-a$, the endpoint inequality, in particular $\varepsilon|u^*(a)|^p\le2^{p-1}(\int_a^{a+\varepsilon}|u^*|^p+\varepsilon^p\int_a^{a+\varepsilon}|u'|^p)$ for $1<p<\infty$ and $\varepsilon|u^*(a)|\le\int_a^{a+\varepsilon}|u^*|+\varepsilon\int_a^{a+\varepsilon}|u'|$ for $p=1$. ([[lem-one-dimensional-sobolev-endpoint-estimate]])

[F3] Holder's inequality: for conjugate exponents $p,p'$ and measurable $\varphi,\psi$ with $\varphi\in\mathcal L^p$, $\psi\in\mathcal L^{p'}$, $\int|\varphi\psi|\le\|\varphi\|_p\|\psi\|_{p'}$, so $\varphi\psi$ is integrable. ([[thm-holder-inequality-for-integrals]])

[F4] Assume Countable Choice. For a nonnegative measurable function on a product of sigma-finite measure spaces the double integral equals the two iterated integrals, with measurable section integrals. ([[thm-tonelli-and-fubini-for-completed-product-measures]])

[F5] There is a bounded linear extension operator $E:W^{1,p}(H;\mathbb K)\to W^{1,p}(\mathbb R^n;\mathbb K)$ with $(Eu)|_H=u$ almost everywhere on $H$. ([[thm-wkp-extension-from-a-half-space]])

[F6] Assume Countable Choice. $C_c^\infty(\mathbb R^n;\mathbb K)$ is dense in $W^{1,p}(\mathbb R^n;\mathbb K)$. ([[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]])

[F7] Assume Countable Choice. $L^p(\mathbb R^d;\mathbb K)$ is complete, and a norm-convergent sequence has an almost-everywhere convergent subsequence. ([[thm-riesz-fischer-completeness-of-l-p]])

[F8] $W^{1,p}(H;\mathbb K)$ is a complete normed space. ([[thm-sobolev-spaces-are-banach-spaces]])

[F9] Assume Countable Choice. Let $X$ be a normed space with completion $(\widehat X,i)$ and let $Y$ be a Banach space; a linear $T:X\to Y$ with $\|Tx\|\le C\|x\|$ extends uniquely to a bounded linear $\widehat T:\widehat X\to Y$ with $\|\widehat Tu\|\le C\|u\|$. ([[thm-completion-universal-property-for-bounded-linear-maps]])

## Proof

**Proof technique:** direct.

1.1 The pointwise normal-line identity. Fix a compactly supported $u\in C(\overline H)\cap W^{1,p}(H)$. By [F1] applied to $\Omega=H$ there is an ACL representative $u^*$ of the class of $u$ whose classical last derivative $\partial_tu^*$ exists a.e., lies in $L^p(H)$ and represents $\partial_nu$. For a.e. $x'\in\mathbb R^d$ the section $t\mapsto u^*(x',t)$ is absolutely continuous on compact subintervals of $(0,\infty)$, and $u^*=u$ a.e. on $H$; since both the continuous extension of the section (which exists because $\int_0^T|\partial_tu^*|dt<\infty$ for every $T$) and the continuous function $u(x',\cdot)$ agree on a dense set of $t$, they agree everywhere on the line, so the section extends continuously to $t=0$ with value $g(x')=u(x',0)$. Because $u$ has compact support, the section vanishes for large $t$, and the absolutely continuous function $t\mapsto|u^*(x',t)|^p$ satisfies $|g(x')|^p=-\int_0^\infty\partial_t|u^*|^pdt=-p\int_0^\infty|u^*|^{p-2}\operatorname{Re}(\overline{u^*}\partial_tu^*)dt\le p\int_0^\infty|u|^{p-1}|\partial_nu|dt$ for $1<p<\infty$, while for $p=1$ the absolutely continuous function $t\mapsto|u^*(x',t)|$ has $|g(x')|=-\int_0^\infty\partial_t|u^*|dt\le\int_0^\infty|\partial_nu|dt$. [F1, algebra, given]

1.2 Density of the smooth restriction class. Put $D:=\{\varphi|_H:\varphi\in C_c^\infty(\mathbb R^n;\mathbb K)\}$, a linear subspace of $W^{1,p}(H)$, and let $u\in W^{1,p}(H)$ and $\delta>0$. By [F5] there is $Eu\in W^{1,p}(\mathbb R^n)$ with $(Eu)|_H=u$ a.e.; by [F6] choose $\varphi\in C_c^\infty(\mathbb R^n)$ with $\|\varphi-Eu\|_{W^{1,p}(\mathbb R^n)}<\delta$. Then $\varphi|_H\in D$, and because the restriction to $H$ of an $L^p$ class has $\|\psi|_H\|_{L^p(H)}\le\|\psi\|_{L^p(\mathbb R^n)}$ componentwise, $\|\varphi|_H-u\|_{W^{1,p}(H)}\le\|\varphi-Eu\|_{W^{1,p}(\mathbb R^n)}<\delta$. Hence $D$ is dense in $W^{1,p}(H)$. [F5, F6, algebra, given]

2.1 The integrated estimate and the strip form. Integrate the pointwise inequality of step 1.1 over $x'\in\mathbb R^d$ and use Tonelli [F4] to interchange the $x'$- and $t$-integrals: $\|g\|_p^p\le p\int_H|u|^{p-1}|\partial_nu|$. For $p=1$ this gives $\|g\|_1\le\|\partial_nu\|_1\le\|u\|_{W^{1,1}}$; for $1<p<\infty$, Holder [F3] with exponents $p'$ and $p$ gives $\int_H|u|^{p-1}|\partial_nu|\le\|u\|_{L^p}^{p-1}\|\partial_nu\|_{L^p}\le\|u\|_{W^{1,p}}^p$, and therefore $\|g\|_{L^p}^p\le p\|u\|_{L^p}^{p-1}\|\partial_nu\|_{L^p}\le p\|u\|_{W^{1,p}}^p$. For the strip form, fix $h>0$; for a.e. $x'$ the section of $u^*$ on $(0,2h)$ is absolutely continuous with $L^p$ derivative, so [F1] in dimension one makes that section an element of $W^{1,p}((0,2h))$ with weak derivative $\partial_nu(x',\cdot)$, and [F2] applies with $\varepsilon=h$ and gives, after multiplying by $h$, $h|g(x')|^p\le C_p(\int_0^h|u(x',t)|^pdt+h^p\int_0^h|\partial_nu(x',t)|^pdt)$ with the stated $C_p$. [F1, F2, F3, F4, step 1.1, algebra]

3.1 Construction of $T_+$ and agreement with classical restriction. Let $S:D\to L^p(\mathbb R^d)$ be the classical restriction $S\varphi:=\varphi(\cdot,0)$, which is linear and, by step 2.1 applied to $\varphi\in D\subset C(\overline H)\cap W^{1,p}(H)$ (each is continuous on $\overline H$ with compact support), satisfies $\|S\varphi\|_p\le p^{1/p}\|\varphi\|_{W^{1,p}(H)}$. Since $D$ is dense in $W^{1,p}(H)$ by step 1.2 and carries the subspace norm, and since $W^{1,p}(H)$ is complete by [F8], the pair $(W^{1,p}(H),\text{inclusion})$ is a completion of $D$; by the completion universal property [F9] applied with $Y=L^p(\mathbb R^d)$ (complete by [F7]), $S$ extends uniquely to a bounded linear $T_+:W^{1,p}(H)\to L^p(\mathbb R^d)$ with $\|T_+u\|_p\le p^{1/p}\|u\|_{W^{1,p}(H)}$ and $T_+|_D=S$. If now $u\in C(\overline H)\cap W^{1,p}(H)$ is compactly supported, choose $\varphi_m\in D$ with $\varphi_m\to u$ in $W^{1,p}(H)$; then $T_+u=\lim_mS\varphi_m$ in $L^p$ by continuity, while $\|S\varphi_m-u(\cdot,0)\|_p^p\le p\|\varphi_m-u\|_{W^{1,p}(H)}^p\to0$ by step 2.1 applied to the compactly supported continuous difference, so $T_+u=u(\cdot,0)$ in $L^p(\mathbb R^d)$. [F7, F8, F9, step 1.2, step 2.1, algebra]

4.1 Uniqueness and class-dependence. If $T'$ is another bounded linear operator on $W^{1,p}(H)$ whose restriction to $D$ is $S$, then $A:=T_+-T'$ is a bounded linear operator vanishing on $D$; for $u\in W^{1,p}(H)$ choose $\varphi_m\in D$ with $\varphi_m\to u$ (step 1.2), so $\|Au\|=\lim_m\|A\varphi_m\|=0$ by boundedness of $A$. Hence $T'=T_+$: this is the asserted uniqueness of the bounded extension of classical restriction. Moreover, if $u=v$ in $W^{1,p}(H)$ are the same a.e. class, then $u-v$ is the zero class and linearity gives $T_+(u-v)=T_+0=0$, because the zero class is the limit of the constant sequence $0\in D$ and $S0=0$; hence $T_+u=T_+v$ and $T_+$ depends only on the class. This proves (i) and (ii). [step 1.2, step 3.1, algebra, given] ∎

## Source notes

Hunter's Theorem 3.44 and its proof (printed pp. 71-73) proves the pointwise normal-line inequality and the bounded half-space trace; Laugesen's flat estimate and dense-subspace extension (Theorem 3.14, printed pp. 62-64), Schikorra's Theorem III.3.21 (printed pp. 76-77) and Teschl's Theorem 9.18 (printed pp. 208-209) are independent treatments of the same construction. The density of the smooth restriction class uses the published half-space extension operator and the interior density theorem on $\mathbb R^n$; this replaces the scaffold's route through the bounded domains $H\cap B_R$, whose boundaries have corners and so are not covered by the bounded-$C^1$-domain density theorem.
