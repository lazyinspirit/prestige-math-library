---
id: lem-it-finite-classical-kl-nonnegative-equality
kind: lemma
title: Nonnegativity and equality for finite classical relative entropy
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: [def-natural-logarithm, thm-natural-logarithm-laws, thm-logarithm-derivative-and-integral, cor-mean-value-theorem]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information, §5.1"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, arXiv:1106.1445v8, §§10.5 and 10.7"
      url: "https://arxiv.org/pdf/1106.1445v8"
---

## Statement

For probability vectors $p=(p_i)_{i\in I}$ and $q=(q_i)_{i\in I}$ on a finite nonempty set $I$, define

$$D(p\|q):=\begin{cases}\displaystyle\sum_{i:p_i>0}p_i\ln\frac{p_i}{q_i},&p_i>0\Rightarrow q_i>0,\\+\infty,&\text{otherwise.}\end{cases}$$

Then $D(p\|q)\ge0$, and $D(p\|q)=0$ if and only if $p=q$.

## Facts & Assumptions

**Given:** The finite set $I$ and probability vectors $p,q$ in the Statement.

[F1] [[def-natural-logarithm]]: $\ln x$ is the inverse exponential on $(0,\infty)$.

[F2] [[thm-natural-logarithm-laws]]: $\ln$ is strictly increasing, continuous, and $\ln1=0$.

[F3] [[thm-logarithm-derivative-and-integral]]: $(\ln x)'=1/x$ for $x>0$.

[F4] [[cor-mean-value-theorem]]: for a function continuous on a closed interval and differentiable inside, some interior derivative equals the endpoint slope.

## Proof

1.1 Set $g(t)=t-1-\ln t$ for $t>0$. For $t>1$, [F3] and [F4] give $g(t)-g(1)=g'(c)(t-1)$ for some $c\in(1,t)$, where $g'(c)=1-1/c>0$; for $0<t<1$, they give $g(1)-g(t)=g'(c)(1-t)$ for some $c\in(t,1)$, where $g'(c)=1-1/c<0$. Thus $g(t)>0$ unless $t=1$, when $g(1)=0$. Equivalently, $-\ln t\ge1-t$, with equality only at $t=1$. [given, F1, F2, F3, F4, cases, algebra]

2.1 If $p_i>0=q_i$ for some $i$, then $D(p\|q)=+\infty$ by definition. Otherwise, for each $i$ with $p_i>0$, apply step 1.1 to $t=q_i/p_i$ and multiply by $p_i$, obtaining $p_i\ln(p_i/q_i)\ge p_i-q_i$. Summing gives $D(p\|q)\ge1-\sum_{i:p_i>0}q_i\ge0$. Equality forces $q_i=p_i$ on the positive support by step 1.1 and no $q$-mass outside it by the final inequality; hence $p=q$. Conversely, $p=q$ makes every summand zero. [given, step 1.1, algebra, cases] ∎
