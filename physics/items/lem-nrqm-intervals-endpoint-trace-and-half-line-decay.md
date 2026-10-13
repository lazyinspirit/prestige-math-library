---
id: lem-nrqm-intervals-endpoint-trace-and-half-line-decay
aliases: [nrqm-intervals-and-contacts-endpoint-trace-and-half-line-decay]
kind: lemma
domain: mathematics
title: "Endpoint trace bound and decay of H1 functions"
status: published
origin: pipeline
dependency_level: 2
deps: [def-nrqm-intervals-hilbert-sobolev-spaces, lem-nrqm-intervals-weak-derivative-ac-representative, thm-holder-inequality-for-integrals, prop-indefinite-integral-of-an-integrable-function-is-countably-additive, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-nrqm-intervals-hilbert-sobolev-spaces: mathematical-premise
  lem-nrqm-intervals-weak-derivative-ac-representative: mathematical-premise
  thm-holder-inequality-for-integrals: mathematical-premise
  prop-indefinite-integral-of-an-integrable-function-is-countably-additive: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 2.7, Lemma 2.30 p. 85 (finite endpoint traces and decay at infinite endpoints)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Springer Universitext 2011), Section 8.2 pp. 204-210 (one-dimensional Sobolev functions: continuity, Holder bounds, behaviour at infinity)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
---

## Statement

Assume the Axiom of Choice and Countable Choice ([[def-axiom-of-choice]],
[[def-countable-choice]]). Let $u^*$ denote the continuous absolutely
continuous representative of a class in $H^1$ supplied by
[[lem-nrqm-intervals-weak-derivative-ac-representative]], and write
$\|u\|=\|u\|_{L^2}$ and $\|u'\|=\|u'\|_{L^2}$ for the norms of
[[def-nrqm-intervals-hilbert-sobolev-spaces]] on the interval under
consideration.

(a) *Bounded-interval trace bound.* Let $L>0$ and $u\in H^1(0,L)$. Then
$|u^*(x)|\le L^{-1/2}\|u\|_{L^2(0,L)}+L^{1/2}\|u'\|_{L^2(0,L)}
\qquad\text{for every }x\in[0,L].$
More generally, for $0\le c<d\le L$ and $x\in[c,d]$,
$|u^*(x)|\le(d-c)^{-1/2}\|u\|_{L^2(c,d)}+(d-c)^{1/2}\|u'\|_{L^2(c,d)} .$

(b) *Half-line.* Let $u\in H^1(0,\infty)$, with representative $u^*$ defined
on $[0,\infty)$ by gluing the representatives on $(0,n)$. Then
$|u^*(x)|\le\|u\|_{L^2(x,x+1)}+\|u'\|_{L^2(x,x+1)}\quad(x\ge0),\qquad
\sup_{x\ge0}|u^*(x)|\le\|u\|_{L^2(0,\infty)}+\|u'\|_{L^2(0,\infty)},$
and $u^*(x)\to0$ as $x\to\infty$.

(c) *Real line and vanishing boundary products.* Let $u,v\in H^1(\mathbb R)$
with continuous representatives $u^*,v^*$. Then $u^*,v^*$ are bounded and
uniformly continuous with
$|u^*(x)-u^*(y)|\le\sqrt{|x-y|}\,\|u'\|_{L^2(\mathbb R)},\qquad
\sup_{\mathbb R}|u^*|\le\|u\|_{L^2(\mathbb R)}+\|u'\|_{L^2(\mathbb R)},$
$u^*(x)\to0$ and $v^*(x)\to0$ as $|x|\to\infty$, and consequently
$\lim_{|x|\to\infty}u^*(x)\overline{v^*(x)}=0$.

## Facts & Assumptions

**Given:** the spaces $H^1$ of [[def-nrqm-intervals-hilbert-sobolev-spaces]]; the absolutely continuous representative theorem [[lem-nrqm-intervals-weak-derivative-ac-representative]] and its estimate $|u^*(x)-u^*(y)|\le\sqrt{|x-y|}\|u'\|_{L^2}$.

[F1] For a bounded interval $(c,d)$ and $u\in H^1(c,d)$, the unique absolutely continuous representative $u^*$ on $[c,d]$ satisfies $u^*(x)-u^*(y)=\int_y^xu'$ and $|u^*(x)-u^*(y)|\le\sqrt{|x-y|}\|u'\|_{L^2(c,d)}$ ([[lem-nrqm-intervals-weak-derivative-ac-representative]]).

[F2] On a finite-measure set, $\int_E|f|\le\|f\|_{L^2}\mu(E)^{1/2}$ ([[thm-holder-inequality-for-integrals]]).

[F3] The indefinite integral of an integrable function is countably additive over disjoint measurable sets: for pairwise disjoint measurable $E_n$ and integrable $f$, $\int_{\bigcup_nE_n}f=\sum_n\int_{E_n}f$ ([[prop-indefinite-integral-of-an-integrable-function-is-countably-additive]]).

## Proof

1.1 [Bounded-interval trace bound] Let $u\in H^1(0,L)$ and fix $x\in[0,L]$. By [F1] applied on $(0,L)$ (and on $(c,d)$ for the local form), for every $y\in[0,L]$ $|u^*(x)|\le|u^*(y)|+\Bigl|\int_y^xu'\Bigr|\le|u^*(y)|+\|u'\|_{L^2(0,L)}L^{1/2},$ using [F2] for the last estimate. Integrating this inequality in $y$ over $(0,L)$ and using [F2] again, $L\,|u^*(x)|\le\int_0^L|u^*|+L^{3/2}\|u'\|\le L^{1/2}\|u\|+L^{3/2}\|u'\|,$ so $|u^*(x)|\le L^{-1/2}\|u\|+L^{1/2}\|u'\|$. Replacing $(0,L)$ by any subinterval $(c,d)$ with $x\in[c,d]$ gives the local form by the same computation. This is (a). [F1, F2, algebra]

2.1 [Half-line pointwise and supremum bounds] Let $u\in H^1(0,\infty)$. For every $n$ the class lies in $H^1(0,n)$, and the representatives on overlapping intervals agree by uniqueness in [F1], so they glue to a continuous representative $u^*$ on $[0,\infty)$. Step 1.1 on the interval $(x,x+1)$, $x\ge0$, gives $|u^*(x)|\le\|u\|_{L^2(x,x+1)}+\|u'\|_{L^2(x,x+1)}$. Enlarging each interval to $(0,\infty)$ and using $\|u\|_{L^2(x,x+1)}\le\|u\|_{L^2(0,\infty)}$ and likewise for $u'$ gives $\sup_{x\ge0}|u^*(x)|\le\|u\|_{L^2(0,\infty)}+\|u'\|_{L^2(0,\infty)}$. [step 1.1, F1, algebra]

3.1 [Decay] We show $\lim_{x\to\infty}u^*(x)=0$. First suppose $\|u'\|_{L^2(0,\infty)}=:M>0$ and assume for contradiction that there are $x_n\to\infty$ with $|u^*(x_n)|\ge\varepsilon$ for some $\varepsilon>0$. Put $\delta:=\min\{1,(\varepsilon/(2M))^2\}>0$; by [F1], for $t\in[x_n,x_n+\delta]$ $|u^*(t)|\ge|u^*(x_n)|-\sqrt{|t-x_n|}\,M\ge\varepsilon-\sqrt{\delta}M \ge\varepsilon/2 .$ Passing to a subsequence, assume $x_{n+1}\ge x_n+\delta$ for all $n$; then the half-open intervals $E_n:=[x_n,x_n+\delta)$ are pairwise disjoint, have measure $\delta$, and satisfy $|u^*|^2\ge\varepsilon^2/4$ throughout. By [F3], $\int_0^\infty|u|^2\ge\int_{\bigcup_nE_n}|u|^2=\sum_{n}\int_{E_n}|u|^2\ge\sum_{n}\frac{\varepsilon^2}{4} \delta=+\infty,$ contradicting $u\in L^2(0,\infty)$. If $M=0$, then [F1] gives $|u^*(x)-u^*(y)|\le0$, so $u^*$ is a constant whose $L^2$ norm over the half-line is finite only if that constant is $0$. Thus $u^*(x)\to0$. [step 2.1, F1, F3, given, algebra]

4.1 [Real line] For $u\in H^1(\mathbb R)$ restrict to $(0,\infty)$ and $(-\infty,0)$; the representatives glue at $0$ by uniqueness of the continuous representative. Steps 1.1 and 2.1 give the sup bound and uniform continuity, and step 3.1 applied to both half-lines gives $u^*(x)\to0$ as $x\to\pm\infty$. For $u,v\in H^1(\mathbb R)$ the elementary bound $|u^*\overline{v^*}|\le\frac12(|u^*|^2+|v^*|^2)$ and $u^*(x)\to0$, $v^*(x)\to0$ give $u^*(x)\overline{v^*(x)}\to0$ as $|x|\to\infty$. This is (c). [step 2.1, step 3.1, algebra] ∎
