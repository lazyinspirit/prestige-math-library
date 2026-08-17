---
id: lem-open-quotient-arcs-in-real-line-mod-integers
kind: lemma
title: "The quotient map is open, and every interval shorter than one embeds in $\\mathbb R/\\mathbb Z$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-circle-as-real-line-mod-integers, def-homeomorphism-and-open-maps, thm-algebra-of-continuous-functions, lem-integer-part]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, Ch. 1, Section 1.1"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
    - title: "J. Peter May, A Concise Course in Algebraic Topology, Ch. 1, Section 5"
      url: "https://math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
    - title: "Jonathan Wise, Math 6210 Lecture Notes, Week 3, Sections 3.1 and 3.4"
      url: "https://math.colorado.edu/~jonathan.wise/teaching/math6210-fall-2012/notes.pdf"
pipeline_run: null
---

## Statement

Let $p:\mathbb R\to\mathbb R/\mathbb Z$ be the quotient map of
[[def-circle-as-real-line-mod-integers]]. The quotient map is open, and every interval shorter than one embeds in $\mathbb R/\mathbb Z$.

More precisely, for every open $U\subseteq\mathbb R$,

$$p^{-1}(p[U])=\bigcup_{n\in\mathbb Z}(U+n),$$

and $p[U]$ is open. If $a\le b$, $b-a<1$, and $J$ is any of
$(a,b)$, $[a,b]$, $[a,b)$, or $(a,b]$, then
$p|_J:J\to p[J]$ is a homeomorphism, with both sides carrying their subspace
topologies.

## Facts & Assumptions

**Given:** The quotient projection $p$, an open set $U\subseteq\mathbb R$, and an interval $J$ of one of the displayed four forms with length $\ell=b-a<1$.

[L1] Let $p:\mathbb R\to\mathbb R/\mathbb Z$ be the quotient projection inducing the quotient topology, with $p(x)=[x]$ and $p(x)=p(y)$ exactly when $x-y\in\mathbb Z$ ([[def-circle-as-real-line-mod-integers]]).

[L2] Identify $\mathbb Z$ with its canonical copy inside $\mathbb R$. Then for every real $x$ there is exactly one integer $m$ with $m\le x<m+1$ ([[lem-integer-part]]).

[L3] A function $f:X\to Y$ is an open map if $f[V]$ is open in $Y$ for every open $V\subseteq X$; an embedding is a homeomorphism onto its image with the subspace topology ([[def-homeomorphism-and-open-maps]]).

[L4] Every constant real-valued function and the identity are continuous, and finite sums and scalar multiples of continuous real-valued functions are continuous ([[thm-algebra-of-continuous-functions]]).

## Proof

**Proof technique:** direct.

1.1 A real $x$ lies in $p^{-1}(p[U])$ exactly when $p(x)=p(u)$ for some $u\in U$, which by [L1] is equivalent to $x-u=n$ for some $n\in\mathbb Z$; hence $p^{-1}(p[U])=\bigcup_{n\in\mathbb Z}(U+n)$. Each translate $U+n$ is open: translating by $n$ and by $-n$ gives mutually inverse continuous maps by [L4]. The union is open, so the quotient-topology criterion in [L1] makes $p[U]$ open. Thus $p$ is open in the sense of [L3], including when $U=\varnothing$. [L1, L3, L4]

1.2 Suppose $x,y\in J$ and $p(x)=p(y)$. Then $k:=x-y\in\mathbb Z$ by [L1], while $|k|=|x-y|\le\ell<1$. If $0<k<1$, both $0$ and $k$ satisfy the integer-part inequalities for the real $k$, contrary to uniqueness in [L2]; applying the same argument to $-k$ excludes $-1<k<0$. Hence $k=0$ and $x=y$, so $p|_J$ is injective. This also covers a singleton interval; for an empty interval injectivity is vacuous. [L1, L2, algebra]

2.1 The restriction $p|_J$ is continuous and is a bijection onto $p[J]$ by step 1.2. To prove its inverse continuous, let $O$ be relatively open in $J$ and $x\in O$. Choose $\delta>0$ with $J\cap(x-\delta,x+\delta)\subseteq O$, and put $r=\tfrac12\min\{\delta,1-\ell\}>0$. Step 1.1 makes $W:=p[(x-r,x+r)]$ open. If $z\in J$ and $p(z)\in W$, choose $y\in(x-r,x+r)$ with $p(z)=p(y)$; then $z-y\in\mathbb Z$ by [L1] and $|z-y|\le|z-x|+|x-y|<\ell+r<1$, so [L2] gives $z=y$. Thus $z\in J\cap(x-\delta,x+\delta)\subseteq O$, and $W\cap p[J]\subseteq p[O]$. Every point of $p[O]$ therefore has a relative open neighbourhood contained in $p[O]$, so $p[O]$ is open in $p[J]$. The empty case has the unique empty inverse. Hence $p|_J$ is a homeomorphism onto its image, and therefore an embedding by [L3]. [step 1.1, step 1.2, L1, L2, L3, L4, algebra] ∎
