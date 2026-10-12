---
id: lem-nrqm-intervals-weak-derivative-ac-representative
aliases: [nrqm-intervals-and-contacts-weak-derivative-ac-representative]
kind: lemma
domain: mathematics
title: "Absolutely continuous representative of an L2 function with L2 weak derivative"
status: draft
origin: pipeline
dependency_level: 1
deps: [def-nrqm-intervals-hilbert-sobolev-spaces, cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives, thm-holder-inequality-for-integrals, thm-finite-measure-l-r-includes-into-l-p-for-p-less-r, def-axiom-of-choice, def-countable-choice]
dependency_roles:
  def-nrqm-intervals-hilbert-sobolev-spaces: mathematical-premise
  cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives: mathematical-premise
  thm-holder-inequality-for-integrals: mathematical-premise
  thm-finite-measure-l-r-includes-into-l-p-for-p-less-r: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 2.7 pp. 79-81 and Chapter 9 pp. 181-193 (absolutely continuous functions and weak derivatives on intervals)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Springer Universitext 2011), Section 8.2 pp. 204-210 (weak derivatives and absolutely continuous representatives in one dimension)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
---

## Statement

Assume the Axiom of Choice and the Axiom of Countable Choice
([[def-axiom-of-choice]], [[def-countable-choice]]). Let $-\infty<a<b<\infty$
and let $u\in H^1(a,b)$ have weak derivative $u'=Du$
([[def-nrqm-intervals-hilbert-sobolev-spaces]]). Then:

(a) there is exactly one representative $u^*$ of the class $u$ that is
continuous on $[a,b]$, is absolutely continuous on $[a,b]$, and satisfies
$u^*(x)-u^*(y)=\int_y^xu'(t)\,dt\qquad\text{for all }x,y\in[a,b],$
where for $x<y$ the right-hand side means $-\int_x^yu'$;

(b) for all $x,y\in[a,b]$,
$|u^*(x)-u^*(y)|\le\sqrt{|x-y|}\;\|u'\|_{L^2(a,b)},$
so $u^*$ is uniformly continuous, and the assignment $u\mapsto u^*$ is linear;

(c) if additionally $u\in H^2(a,b)$, then $(u^*)'$ is absolutely continuous
on $[a,b]$ and $(u^*)'(x)-(u^*)'(y)=\int_y^xD^2u$ for all $x,y\in[a,b]$.

## Facts & Assumptions

**Given:** reals $a<b$; a class $u\in H^1(a,b)\subseteq L^2(a,b;\mathbb C)$ with weak derivative $u'\in L^2(a,b;\mathbb C)$.

[F1] $H^1(a,b)$ and $H^2(a,b)$ are the spaces of [[def-nrqm-intervals-hilbert-sobolev-spaces]]: $u\in H^1(a,b)$ means $u\in L^2(a,b;\mathbb C)$ and the weak derivative $u'=Du$ lies in $L^2(a,b;\mathbb C)$; $u\in H^2(a,b)$ means $u\in H^1(a,b)$ and $u'\in H^1(a,b)$, with $D^2u=D(u')$.

[F2] Assume the Axiom of Choice for the ACL and absolutely continuous fundamental-theorem interfaces. For a nonempty open interval $I\subseteq\mathbb R$, $1\le p\le\infty$ and $u\in W^{1,p}(I;\mathbb C)$ with weak derivative $Du$, there is exactly one continuous representative $u^*$ that is locally absolutely continuous and satisfies $u^*(x)-u^*(y)=\int_y^xDu$; if $I=(a,b)$ has finite endpoints, then $Du\in L^1(a,b)$, $u^*$ extends uniquely to an absolutely continuous function on $[a,b]$, and $u^*(x)=u^*(a)+\int_a^xDu$ for every $x\in[a,b]$ ([[cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives]]).

[F3] For $1\le p<r<\infty$ on a finite-measure space, $L^r\subseteq L^p$ with $\|f\|_p\le\mu(X)^{1/p-1/r}\|f\|_r$ ([[thm-finite-measure-l-r-includes-into-l-p-for-p-less-r]]), and $|\int_Ef|\le\|f\|_p\,\mu(E)^{1-1/p}$ ([[thm-holder-inequality-for-integrals]]).

[F4] Under [F1], $W^{1,2}(a,b;\mathbb C)=H^1(a,b)$ as sets with the same weak derivative classes; both conditions are existence of an $L^2$ weak derivative, so the identification is immediate from the definitions.

## Proof

1.1 [Reduction to the published corollary] The interval $(a,b)$ has finite Lebesgue measure $b-a$, and $1\le2<\infty$, so [F3] gives $u\in L^2(a,b)\subseteq L^1(a,b)$ and $u'\in L^2(a,b)\subseteq L^1(a,b)$, while $u'$ is the $L^2$ weak derivative of $u$ by [F1]. By [F4] the class $u$ lies in $W^{1,2}(a,b;\mathbb C)$ with weak derivative $u'$. [F1, F3, F4, given]

2.1 [Existence and uniqueness of the representative] Apply [F2] with $I=(a,b)$ and $p=2$: there is exactly one representative $u^*$ of the class $u$ that is continuous, locally absolutely continuous and satisfies the integral formula. Since $I$ has finite endpoints, [F2] gives $u'\in L^1(a,b)$, the unique extension of $u^*$ to an absolutely continuous function on $[a,b]$, and the formula for all $x,y\in[a,b]$; the assignment $u\mapsto u^*$ is linear because the weak derivative and the integral are linear ([[def-nrqm-intervals-hilbert-sobolev-spaces]] records additivity of the weak derivative). This proves (a). [step 1.1, F1, F2, given, algebra]

3.1 [Holder modulus] Let $x,y\in[a,b]$ with $x\le y$. Applying [F3] to $u'$ on the interval $[x,y]$, whose measure is $y-x$, gives $|u^*(x)-u^*(y)|=\Bigl|\int_x^yu'\Bigr|\le\|u'\|_{L^2(x,y)}\sqrt{y-x} \le\|u'\|_{L^2(a,b)}\sqrt{y-x};$ the case $x>y$ follows by exchanging $x$ and $y$. This is (b). [step 2.1, F3, algebra]

4.1 [Second-order representative] If additionally $u\in H^2(a,b)$, then $u'\in H^1(a,b)$ with weak derivative $D^2u\in L^2(a,b)$ by [F1]. Applying the already proved part (a) with $u'$ in place of $u$ supplies a continuous representative $w$ of the class $u'$, absolutely continuous on $[a,b]$, with $w(x)-w(y)=\int_y^xD^2u$ for all $x,y\in[a,b]$. The a.e. derivative of $u^*$ equals the class $u'$, so it equals $w$ almost everywhere. The fundamental theorem for absolutely continuous functions therefore gives $u^*(x)=u^*(a)+\int_a^x w(t)\,dt$ for every $x\in[a,b]$. Since $w$ is continuous, this identity makes $u^*$ continuously differentiable and gives $(u^*)'(x)=w(x)$ at every $x\in[a,b]$. Thus $(u^*)'$ is absolutely continuous and has the displayed difference formula, proving (c). [step 2.1, F1, F2, algebra] ∎
