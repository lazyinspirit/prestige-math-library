---
id: lem-real-part-determines-a-complex-linear-functional
kind: lemma
title: "A complex linear functional is recovered from its real part by f(x)=u(x)-iu(ix)"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-algebraic-dual-and-linear-functional,
       rem-real-and-complex-normed-space-convention]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Daniel Daners, Introduction to Functional Analysis, Theorem 26.4"
      url: "https://www.maths.usyd.edu.au/u/athomas/FunctionalAnalysis/daners-functional-analysis-2017.pdf"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, Theorem 4.14"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
---

## Statement

Let $X$ be a complex vector space.

If $f:X \to \mathbb{C}$ is complex linear and $u:=\operatorname{Re}f$, then $u$
is real linear on the underlying real vector space and

$$f(x)=u(x)-iu(ix) \qquad (x \in X).$$

Conversely, if $u:X \to \mathbb{R}$ is real linear on the underlying real
vector space, then

$$g(x):=u(x)-iu(ix) \qquad (x \in X)$$

defines a complex linear functional with $\operatorname{Re}g=u$. In particular a
complex linear functional is uniquely determined by its real part.

## Facts & Assumptions

**Given:** A complex vector space $X$, a complex linear functional
$f:X \to \mathbb{C}$, and a real linear functional $u$ on the underlying real
vector space.

[L1] A linear functional is additive and homogeneous over the relevant scalar
field ([[def-algebraic-dual-and-linear-functional]]).

[L2] On this page, complex vector-space language is read by the scalar
convention recorded in [[rem-real-and-complex-normed-space-convention]].

## Proof

**Proof technique:** direct.

1.1 Let $u:=\operatorname{Re}f$. For $x,y \in X$ and $a \in \mathbb{R}$, $$u(x+y)=\operatorname{Re}(f(x+y))=\operatorname{Re}f(x)+\operatorname{Re}f(y),$$ and $$u(ax)=\operatorname{Re}(f(ax))=\operatorname{Re}(af(x))=au(x).$$ So $u$ is real linear. [L1, L2, given, algebra]

1.2 Write $f(x)=a+ib$ with $a,b \in \mathbb{R}$. Since $f$ is complex linear, $$f(ix)=if(x)=ia-b,$$ so $\operatorname{Re}f(x)=a$ and $\operatorname{Re}f(ix)=-b$. Therefore $$u(x)-iu(ix)=a-i(-b)=a+ib=f(x).$$ [L1, given, algebra]

1.3 Conversely, let $u$ be real linear and define $g(x):=u(x)-iu(ix)$. Additivity is immediate from real linearity of $u$. Also $$g(ix)=u(ix)-iu(i^2x)=u(ix)+iu(x)=i\bigl(u(x)-iu(ix)\bigr)=ig(x).$$ Now for $\lambda=a+ib \in \mathbb{C}$ with $a,b \in \mathbb{R}$, $$g(\lambda x)=g(ax+bix)=ag(x)+bg(ix)=ag(x)+big(x)=\lambda g(x).$$ Hence $g$ is complex linear. [L1, L2, given, construct, algebra]

2.1 Taking real parts in the definition of $g$ gives $\operatorname{Re}g(x)=u(x)$ for every $x$. Together with step 1.2, this shows that a complex linear functional is uniquely determined by its real part. [step 1.2, step 1.3, algebra] ∎
