---
id: rem-the-p-one-difference-quotient-converse-leads-to-bv-not-w-one-one
kind: remark
title: "At $p=1$ bounded difference quotients need not give an $L^1$ weak derivative"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
deps: [def-first-difference-quotient, thm-difference-quotient-characterisation-of-w-one-p-for-p-greater-than-one, def-bounded-variation-and-total-variation, lem-weak-limit-of-uniformly-bounded-difference-quotients-is-the-weak-derivative, def-weak-derivative-of-a-locally-integrable-function, thm-absolute-continuity-of-the-integral, lem-smooth-bump-between-concentric-euclidean-balls]
landmark: false
dependency_level: 4
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter graduate notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Appendix 4.C, Theorem 4.53(2) stated for $1<p<\\infty$, printed p. 125 (read in full)"
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "Chapter 5, Section 5.2, Proposition 5.7(ii) stated for $1<p<\\infty$, printed p. 110 (read in full)"
---

## Statement

The converse direction (2) of
[[thm-difference-quotient-characterisation-of-w-one-p-for-p-greater-than-one]]
is false at $p=1$ and is not asserted there. For the Heaviside step
$u=\mathbf 1_{(0,\infty)}$ on $\Omega=(-1,1)$ one has
$\delta_h^1u=h^{-1}\mathbf 1_{(-h,0)}$ on $\Omega_{1,h}=(-1,1-h)$ for $0<h<1$, so
$$\|\delta_h^1u\|_{L^1(\Omega_{1,h})}=1\qquad(0<h<1),$$
and likewise on any open $\Omega'\subseteq\Omega_{1,h}$ with
$(-h,0)\subseteq\Omega'$, while $u$ has no locally integrable weak derivative
([F2]); its
distributional derivative is the Dirac mass at $0$, and $u$ has bounded
variation on every compact subinterval of $\Omega$
([[def-bounded-variation-and-total-variation]]). For this witness the uniformly bounded local $L^1$ quotients correspond
to a finite measure derivative and bounded variation, while $W^{1,1}$
membership fails. No general multidimensional BV characterization is proved here. No consumer on this page may use part (2) at
$p=1$.

## Facts & Assumptions

**Given:** Countable Choice; the interval $\Omega=(-1,1)$; the Heaviside class $u=\mathbf 1_{(0,\infty)}$ on $\Omega$; the difference-quotient operator of [[def-first-difference-quotient]] with $\tau_hu(x)=u(x-h)$; and the companion theorem [[thm-difference-quotient-characterisation-of-w-one-p-for-p-greater-than-one]].

[F1] Difference quotients on $\Omega$: for $0<h<1$ and $x\in(-1,1)$ with $x+h\in(-1,1)$ one has $\delta_h^1u(x)=(u(x+h)-u(x))/h$. ([[def-first-difference-quotient]])

[F2] The Heaviside class on $(-1,1)$ has no locally integrable weak derivative, and its distributional derivative is the Dirac mass $\delta_0$ at $0$: if $v\in L^1_{\mathrm{loc}}(-1,1)$ satisfied $\int_{-1}^1u\varphi'\,dx=-\int_{-1}^1v\varphi\,dx$ for every $\varphi\in C_c^\infty(-1,1)$, then $\int_0^1\varphi'\,dx=\varphi(1)-\varphi(0)=-\varphi(0)$ would force $\int_{-1}^1v\varphi\,dx=\varphi(0)$ for every test $\varphi$, whereas the shrinking bumps $\varphi_\epsilon(x)=\eta(x/\epsilon)$, with $\eta$ the published smooth bump equal to $1$ on $[-1/2,1/2]$ and supported in $(-1,1)$, satisfy $\varphi_\epsilon(0)=1$ and $\bigl|\int_{-1}^1v\varphi_\epsilon\,dx\bigr|\le\int_{[-\epsilon,\epsilon]}|v|\,dx\to0$ as $\epsilon\downarrow0$ by absolute continuity of the integral, a contradiction; hence $u\notin W^{1,p}((-1,1))$ for every $1\le p\le\infty$. ([[def-weak-derivative-of-a-locally-integrable-function]], [[thm-absolute-continuity-of-the-integral]], [[lem-smooth-bump-between-concentric-euclidean-balls]])

[F3] Bounded variation: for $a<b$ and $f:[a,b]\to\mathbb R$, the variation over a partition $P=(n,t)$ is $V(f,P)=\sum_{i<n}|f(t_{i+1})-f(t_i)|$ and $f$ has bounded variation when these sums are bounded above, with total variation the supremum over partitions. ([[def-bounded-variation-and-total-variation]])

[F4] The companion theorem asserts part (2) only for $1<p<\infty$, and its proof in [[lem-weak-limit-of-uniformly-bounded-difference-quotients-is-the-weak-derivative]] represents the limit in $L^{p'}(\Omega')$-duality, so it consumes the finiteness of $p'$ — equivalently $p>1$ — and does not extend to $p=1$, where $p'=\infty$. ([[thm-difference-quotient-characterisation-of-w-one-p-for-p-greater-than-one]])



## Proof

**Proof technique:** direct.

1.1 For $0<h<1$ and $x\in(-h,0)$ one has $x+h\in(0,h)\subseteq(0,\infty)$, so $u(x+h)=1$ and $u(x)=0$, giving $\delta_h^1u(x)=1/h$; for $x\in(0,1-h)$ both values are $1$, and for $x\in(-1,-h)$ both values are $0$, giving $\delta_h^1u(x)=0$ there. Hence $\delta_h^1u=h^{-1}\mathbf 1_{(-h,0)}$ on $\Omega_{1,h}=(-1,1-h)$, with the endpoint conventions immaterial for the almost-everywhere class. [F1, algebra]

1.2 On each compact subinterval $[-a,b]\subseteq(-1,1)$ with $0<a,b<1$ the Heaviside is nondecreasing, so for every partition $P$ of $[-a,b]$ the identity $|u(t_{i+1})-u(t_i)|=u(t_{i+1})-u(t_i)$ holds and the variation telescopes: $V(u,P)=u(b)-u(-a)=1$; the sums are therefore bounded by $1$ and $u$ has bounded variation there with total variation $1$. [F3, algebra]

2.1 Integrating the identity of step 1.1 over $\Omega_{1,h}=(-1,1-h)$: since $(-h,0)\subseteq\Omega$ for $0<h<1$, $\int_{\Omega_{1,h}}|\delta_h^1u|\,dx=h^{-1}\lambda((-h,0))=h^{-1}h=1$, and the same computation applies on any open $\Omega'\subseteq\Omega_{1,h}$ containing $(-h,0)$. Thus the family $\delta_h^1u$, $0<h<1$, is uniformly bounded on its shrunken domains. For $h<0$, the quotient has magnitude $1/|h|$ on $(0,-h)$ and is zero elsewhere on $\Omega_{1,h}$, so the same bound holds. In particular on $\Omega'=(-1/2,1/2)$ both signs satisfy a uniform bound for $0<|h|<1/4$. [step 1.1, algebra]

3.1 By [F2], $u$ has no locally integrable weak derivative on $(-1,1)$ and in particular $u\notin W^{1,1}(\Omega)$; combined with step 2.1 this exhibits a class with a uniform local $L^1$ difference-quotient bound and no $W^{1,1}$ membership, so part (2) of the companion theorem fails at $p=1$. [F2, step 2.1]

4.1 The witness of steps 1.1-2.1 has, by [F2], distributional derivative the Dirac mass at $0$ — a finite Borel measure, not an $L^1$ class — and bounded variation by step 1.2, so a finite measure derivative rather than an $L^1$ weak derivative occurs for this witness; by [F4] the companion theorem's duality proof consumes $p>1$, which is why part (2) is stated only there and no consumer on this page may apply it at $p=1$. [F2, F4, step 2.1, step 1.2] ∎

## Source notes

Hunter's Theorem 4.53(2) (printed p. 125) and Laugesen's Proposition 5.7(ii) (printed p. 110) are both stated for $1<p<\infty$. The scaffold phrase $\|\delta_h^1u\|_{L^1(\Omega')}=1$ for all $0<h<\operatorname{dist}(\Omega',\partial\Omega)$ was made precise: the identity holds on the appropriate shrunken domain and on every open $\Omega'$ within it containing the interval $(-h,0)$, which is the interval actually carrying the quotient.
