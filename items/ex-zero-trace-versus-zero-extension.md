---
id: ex-zero-trace-versus-zero-extension
kind: example
title: "Zero trace, zero boundary values and zero extension agree on an interval"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [ex-trace-of-an-ac-sobolev-function-on-an-interval, cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives, thm-acl-characterisation-of-w-one-p, def-wkp-zero-as-a-sobolev-closure, def-sobolev-space-wkp-and-its-norm, def-countable-choice, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (archived 2025 author manuscript)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Section 9.2, Lemma 9.21 and Problem 9.16, printed pp. 210-211: kernel of the trace equals $W^{1,p}_0$ and zero extension of $W^{1,p}_0$ classes."
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "Chapter 3, Section 3.7, Corollary 3.15, printed p. 64: zero trace if and only if $W^{1,p}_0$."
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Chapter 3, Section 3.9, Theorem 3.44, printed p. 72: the half-space case $Tf=0\\Leftrightarrow f\\in W^{k,p}_0$."
---

## Example

Assume the Axiom of Choice. Let $I=(0,1)$, $1\le p<\infty$ and
$u\in W^{1,p}(I;\mathbb K)$ with absolutely continuous representative $u^*$
([[cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives]]),
and let $T$ be the endpoint-pair trace of
[[ex-trace-of-an-ac-sobolev-function-on-an-interval]]. The following four
statements are equivalent:

(i) $Tu=0$;

(ii) $u^*(0)=u^*(1)=0$;

(iii) $u\in W_0^{1,p}(I;\mathbb K)$, the $W^{1,p}$-closure of
$C_c^\infty(I)$ ([[def-wkp-zero-as-a-sobolev-closure]]);

(iv) the extension of $u$ by zero outside $I$ belongs to
$W^{1,p}(\mathbb R;\mathbb K)$.

For $u(x)=x(1-x)$ all four hold: the zero extension is the continuous function
equal to $x(1-x)$ on $[0,1]$ and to $0$ outside, with weak derivative $1-2x$ on
$(0,1)$ and $0$ outside. For $u\equiv1$ all four fail: $Tu=(1,1)\ne0$, and the
zero extension cannot belong to $W^{1,p}(\mathbb R)$ by the implication proved
in step 1.2 below.

## Facts & Assumptions

**Given:** The Axiom of Choice; $I=(0,1)$, $1\le p<\infty$; a class $u\in W^{1,p}(I;\mathbb K)$ with unique absolutely continuous representative $u^*$; and the trace $Tu=(u^*(0),u^*(1))$ of [[ex-trace-of-an-ac-sobolev-function-on-an-interval]].

[F1] On $I=(0,1)$ the trace is the pair $(u^*(0),u^*(1))$, it depends only on the class, and $u\in W_0^{1,p}(I)$ if and only if $Tu=(0,0)$, equivalently if and only if $u^*(0)=u^*(1)=0$. ([[ex-trace-of-an-ac-sobolev-function-on-an-interval]])

[F2] Every class $u\in W^{1,p}(I;\mathbb K)$ has exactly one continuous locally absolutely continuous representative $u^*$, which extends uniquely to an absolutely continuous function on the closure when $I$ is bounded; on an unbounded interval the same uniqueness holds with absolute continuity on compact subintervals. ([[cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives]])

[F3] Assume the Axiom of Choice. For open $\Omega\subseteq\mathbb R^n$ and $1\le p<\infty$: $u\in W^{1,p}(\Omega;\mathbb K)$ if and only if $u\in L^p$ has an ACL representative whose classical coordinate derivatives exist a.e., are measurable and lie in $L^p$; then these represent the weak derivatives. ([[thm-acl-characterisation-of-w-one-p]])

[F4] $W_0^{1,p}(I)$ is the closure in the $W^{1,p}(I)$ norm of $C_c^\infty(I)$; its elements are $L^p$ classes. ([[def-wkp-zero-as-a-sobolev-closure]], [[def-sobolev-space-wkp-and-its-norm]])

## Verification

1.1 Endpoint vanishing implies zero extension in $W^{1,p}(\mathbb R)$. Assume $u^*(0)=u^*(1)=0$ and let $U$ be the extension of $u^*$ by zero outside $(0,1)$. Then $U$ is continuous on $\mathbb R$ and absolutely continuous on every compact interval: on a compact interval meeting $(0,1)$ any finite family of disjoint subintervals has $U$-increments equal to the corresponding $u^*$-increments after intersecting with $(0,1)$, with the increments over pieces crossing an endpoint bounded by $|u^*|$ evaluated there, so the absolute-continuity modulus of $u^*$ controls $U$. Hence $U$ is differentiable a.e. with $U'=u'$ a.e. on $(0,1)$ and $U'=0$ a.e. outside, so $U'\in L^p(\mathbb R)$ with $\|U'\|_{L^p(\mathbb R)}=\|u'\|_{L^p(I)}$; also $U\in L^p(\mathbb R)$ with the same norm as $u$. By the ACL characterization [F3] applied on $\mathbb R$, $U\in W^{1,p}(\mathbb R;\mathbb K)$. [F2, F3, algebra, given]

1.2 Zero extension in $W^{1,p}(\mathbb R)$ implies endpoint vanishing. Conversely, let $U\in W^{1,p}(\mathbb R)$ be the zero extension of $u$ and let $\widetilde U$ be its unique continuous locally absolutely continuous representative [F2]. Since $U=0$ a.e. on $(-1,0)$ and on $(1,2)$, continuity of $\widetilde U$ forces $\widetilde U=0$ on $(-1,0]$ and on $[1,2)$: a continuous function vanishing a.e. on an interval vanishes identically there. On $(0,1)$ the classes of $U$ and of $u$ coincide, so $\widetilde U=u^*$ a.e. on $(0,1)$, and as both are continuous they agree identically there; taking the limits at the endpoints gives $u^*(0)=\widetilde U(0)=0$ and $u^*(1)=\widetilde U(1)=0$. [F2, algebra, given]

2.1 The equivalence chain. By [F1] the conditions (i), (ii) and (iii) are mutually equivalent: $Tu=0$ means exactly $u^*(0)=u^*(1)=0$, and this is exactly the criterion for membership in the closure space $W_0^{1,p}(I)$ of [F4]. Steps 1.1 and 1.2 add (ii)$\Leftrightarrow$(iv), so all four conditions are equivalent. [F1, F4, step 1.1, step 1.2, algebra]

3.1 The two worked functions. For $u(x)=x(1-x)$ one has $u^*=u$ (a polynomial is its own absolutely continuous representative), $u^*(0)=u^*(1)=0$ and hence all four conditions hold by step 2.1; explicitly the zero extension is continuous, is absolutely continuous on $\mathbb R$ with classical derivative $1-2x$ on $(0,1)$ and $0$ outside, so its weak derivative is the zero extension of $u'$, in agreement with step 1.1. For $u\equiv1$ one has $u^*\equiv1$, so $Tu=(1,1)\ne(0,0)$ and $u^*(0)=u^*(1)=1\ne0$; by [F1] the conditions (i), (ii), (iii) fail, and (iv) fails as well: if the zero extension belonged to $W^{1,p}(\mathbb R)$, step 1.2 applied to it would force $u^*(0)=u^*(1)=0$, contradicting $u^*\equiv1$. [F1, step 1.2, step 2.1, algebra] ∎

## Source notes

Teschl's Lemma 9.21 with Problem 9.16 (printed pp. 210-211) records both directions of the kernel identification and the zero-extension property of $W^{1,p}_0$ classes; Laugesen's Corollary 3.15 (printed p. 64) states the zero trace criterion, and Hunter's Theorem 3.44 (printed p. 72) is the half-space model. The equivalence with the zero extension is proved above through the absolutely continuous representative, and the failure for the constant function is the contrapositive of the zero-extension implication in step 1.2.
