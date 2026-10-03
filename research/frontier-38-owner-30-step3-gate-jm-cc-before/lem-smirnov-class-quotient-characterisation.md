---
id: lem-smirnov-class-quotient-characterisation
kind: lemma
title: "The Smirnov class is the class of quotients by outer bounded functions"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-smirnov-class-on-the-disc, def-nevanlinna-class-on-the-disc, thm-nevanlinna-class-is-bounded-quotient-class, thm-nevanlinna-boundary-values-and-log-integrability, lem-poisson-jensen-inequality-hardy-functions, lem-outer-function-properties, def-inner-singular-inner-and-outer-functions, thm-harmonic-conjugate-on-homologically-simply-connected-domains, def-axiom-of-choice, def-countable-choice, def-the-one-dimensional-torus-and-normalized-haar-integral]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. B. Garnett, Bounded Analytic Functions, revised first edition, Chapter II §5"
      url: "https://dokumen.pub/bounded-analytic-functions-0387336214-9780387336213.html"
      locator: "printed pp. 68-70: $N^+$ consists of the quotients $g/h$ with $g,h\\in H^\\infty$ and $h$ outer."
    - title: "R. K. Srivastava, Lecture Notes on Hardy Spaces (MA650, IIT Guwahati), §6.3"
      url: "https://fac.iitg.ac.in/rksri/MA650%20Advanced%20Hardy%20Spaces%20Notes.pdf"
      locator: "The Nevanlinna (N) and Smirnov (N+) classes, printed pp. 64-69: the quotient description of $N^+$."
---

## Statement

Let $f$ be holomorphic on $\mathbb D$ with $f\not\equiv0$. Then
$f\in N^+(\mathbb D)$ if and only if there are $g,h\in H^\infty(\mathbb D)$
with $h$ outer (equivalently $\log|h^*|\in L^1$ and
$\log|h(z)|=P[\log|h^*|](z)$ for all $z$) such that $f=g/h$. Moreover $h$ may
be chosen with $h(0)>0$ and $|h|\le1$, and the representation is not unique:
$(g,h)$ may be replaced by $(g\varphi,h\varphi)$ for any bounded outer
$\varphi\in H^\infty$.

## Facts & Assumptions

**Given:** A holomorphic $f\not\equiv0$ on $\mathbb D$; in the forward direction its boundary function $f^*$ with $\log|f^*|\in L^1$.

[L1] The Smirnov class $N^+(\mathbb D)\subseteq N(\mathbb D)$ consists of the $f$ with $\log|f(z)|\le P[\log|f^*|](z)$ for all $z$, where $f^*$ is the a.e. boundary function with $\log|f^*|\in L^1$ ([[def-smirnov-class-on-the-disc]], [[thm-nevanlinna-boundary-values-and-log-integrability]]).

[L2] Bounded quotients of Nevanlinna functions: if $g,h\in H^\infty$ with $h$ zero-free then $f=g/h$ is holomorphic and lies in $N(\mathbb D)$; and for $F\in H^\infty$, $\log|F|\le P[\log|F^*|]$ with $\log|F^*|\in L^1$ ([[thm-nevanlinna-class-is-bounded-quotient-class]], [[lem-poisson-jensen-inequality-hardy-functions]], [[def-nevanlinna-class-on-the-disc]]).

[L3] If $H\ge0$ has $\log H\in L^1$, the outer function $[H]$ is holomorphic and zero-free, with $\log|[H]|=P[\log H]$ and $[H](0)=\exp(\int\log H)>0$. In particular, for $\varphi\ge0$ in $L^1$, $h=[e^{-\varphi}]$ satisfies $\log|h|=-P[\varphi]\le0$, hence $|h|\le1$. Products of bounded outer functions remain bounded and outer, by adding their integrable boundary logarithms and their Poisson log-modulus identities. ([[lem-outer-function-properties]], [[def-inner-singular-inner-and-outer-functions]])


[L5] A zero-free factor multiplies numerator and denominator without changing the quotient; products of $H^\infty$ functions are in $H^\infty$ ([[thm-nevanlinna-class-is-bounded-quotient-class]]).



## Proof

**Proof technique:** direct.

1.1 Quotients by outer bounded functions lie in $N^+$. Assume $f=g/h$ with $g,h\in H^\infty$, $h$ outer and $h\not\equiv0$. By [L2], $f$ is holomorphic and in $N(\mathbb D)$, and $\log|g|\le P[\log|g^*|]$, while outer-ness of $h$ gives $\log|h|=P[\log|h^*|]$; subtracting the two displays gives, using linearity of the Poisson integral, $$\log|f|=\log|g|-\log|h|\le P[\log|g^*|-\log|h^*|]=P[\log|f^*|],$$ with the identification $f^*=g^*/h^*$ a.e. and $\log|f^*|=\log|g^*|-\log|h^*|\in L^1$ by [L2]. Hence $f\in N^+(\mathbb D)$ by [L1]. [given, L1, L2, algebra]

2.1 A Smirnov function is such a quotient. Assume $f\in N^+(\mathbb D)$, so by [L1] $\log|f^*|\in L^1$ and $\log|f|\le P[\log|f^*|]$. Put $\varphi:=\log^+|f^*|+1\ge1$, an $L^1$ function, and $h:=[e^{-\varphi}]$. By [L3], $h$ is outer with $0<h(0)=e^{-\int\varphi}\le e^{-1}<1$ and $|h|=e^{-P[\varphi]}\le1$, so $h\in H^\infty$ and $h$ is outer. Let $g:=fh$, holomorphic on $\mathbb D$. Then $$\log|g|=\log|f|-P[\varphi]\le P[\log|f^*|]-P[\varphi]=P\bigl[\log|f^*|-\log^+|f^*|-1\bigr]=P\bigl[-\log^-\!|f^*|-1\bigr]\le-1,$$ because $-\log^-|f^*|-1\le-1$ pointwise, and the Poisson integral of a function $\le-1$ is $\le-1$. Hence $|g|\le e^{-1}<1$ and $g\in H^\infty(\mathbb D)$, while $f=g/h$ with $h$ outer, $h(0)>0$, $|h|\le1$. [step 1.1, L1, L3, algebra]

3.1 Non-uniqueness and normalization. If $f=g/h$ with $g,h\in H^\infty$ and $h$ outer, and $\varphi\in H^\infty$ is outer, both products $g\varphi,h\varphi$ are bounded holomorphic by [L5]. The denominator is outer by [L3] and is zero-free. Therefore $(g\varphi)/(h\varphi)=f$ is another representation with an outer denominator. Taking, for example, the constant outer multiplier $2$ gives a distinct pair, so the representation is not unique. Step 2.1 already constructs a denominator with $h(0)>0$ and $|h|\le1$. A merely zero-free bounded multiplier preserves the quotient but need not preserve an outer denominator. [step 1.1, step 2.1, L3, L5, algebra]

4.1 Assembly. Step 1.1 proves the backward implication, steps 2.1 and 3.1 the forward implication with the stated normalization, and step 3.1 records the non-uniqueness. This proves the equivalence of membership in $N^+(\mathbb D)$ with the quotient representation. [step 1.1, step 2.1, step 3.1] ∎
