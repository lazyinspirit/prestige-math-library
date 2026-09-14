---
id: thm-markov-property-as-past-future-conditional-independence
kind: theorem
title: "The Markov property is past-future conditional independence"
status: published
origin: pipeline
deps: [def-axiom-of-choice, lem-conditional-independence-equivalences-and-preservation, thm-markov-property-for-bounded-future-path-functionals]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Aldous-Chewi probability notes, Lecture 9"
      url: "https://www.stat.berkeley.edu/~aldous/205B/chewi_notes.pdf"
      locator: "Theorem 9.3(c)-(d) and proof, printed pp. 36-37"
    - title: "Varadhan, Probability Theory, Chapter 4"
      url: "https://math.nyu.edu/~varadhan/course/PROB.ch4.pdf"
      locator: "Equations (4.7)-(4.9) and Theorem 4.9, printed pp. 119-120"
---

## Statement

Assume Choice. Let $X$ be adapted to $(\mathcal F_n)$ and put
$\mathcal T_n^+=\sigma(X_n,X_{n+1},\ldots)$. For every $n$, the following are
equivalent:

1. for every bounded $\mathcal T_n^+$-measurable random variable $V$,
   $$\mathbb E[V\mid\mathcal F_n]=\mathbb E[V\mid\sigma(X_n)]\quad\text{a.s.};$$ 2. $\mathcal F_n$ and $\mathcal T_n^+$ are conditionally independent given $\sigma(X_n)$. Every homogeneous $K$-chain satisfies these conditions, with the first conditional expectation equal to $h(X_n)$ for a measurable $h$. Conversely, if the equivalent conditions hold and a single kernel $K$ satisfies $$ \mathbb E[g(X_{n+1})\mid\sigma(X_n)]=Kg(X_n)\quad\text{a.s.} $$
for every bounded measurable $g$ and every $n$, then $X$ is a homogeneous
$K$-chain. Thus conditional independence characterizes the absence of extra
past information; the additional displayed hypothesis identifies the same
time-homogeneous kernel at every time.

## Facts & Assumptions

**Given:** Choice and the adapted process in the statement. Adaptedness gives $\sigma(X_n)\subseteq\mathcal F_n$.

[F1] Conditional independence is the conditional product identity, and its equivalence proof identifies it with invariance of a conditional law after the other side is adjoined. ([[lem-conditional-independence-equivalences-and-preservation]])

[F2] A $K$-chain satisfies the bounded future-functional identity with a measurable function of its present state. ([[thm-markov-property-for-bounded-future-path-functionals]])

## Proof

1.1 Assume (1), take bounded $U$ measurable for $\mathcal F_n$ and bounded $V$ [F1] measurable for $\mathcal T_n^+$, and put $W=\mathbb E[V\mid\sigma(X_n)]$. Conditioning first on $\mathcal F_n$ gives $$ \mathbb E[UV\mid\sigma(X_n)] =\mathbb E[U\mathbb E(V\mid\mathcal F_n)\mid\sigma(X_n)] =\mathbb E[UW\mid\sigma(X_n)] =\mathbb E[U\mid\sigma(X_n)]W. $$ This is the sigma-algebra form of conditional independence in [F1], so (2) holds. Constants, zero, and one cause no exception. [F1]

1.2 Conversely assume (2) and keep $V,W$ as above. For every [F1] $A\in\mathcal F_n$, the conditional product identity gives $$ \mathbb E[1_AV] =\mathbb E[\mathbb E(1_AV\mid\sigma(X_n))] =\mathbb E[\mathbb E(1_A\mid\sigma(X_n))W] =\mathbb E[1_AW]. $$ Since $W$ is $\mathcal F_n$-measurable, this is exactly the defining event test for $W=\mathbb E[V\mid\mathcal F_n]$. Hence (1). Empty and full $A$ are included. [F1]

2.1 If $X$ is a homogeneous $K$-chain, apply [F2] to every bounded measurable [F2, step 1.1, step 1.2] path functional $H$ and $V=H(X_n,X_{n+1},\ldots)$. Such variables generate the bounded $\mathcal T_n^+$-measurable variables by the event/simple-function argument in [F2], and [F2] gives a $\sigma(X_n)$-measurable version $h(X_n)$. Thus (1), and hence (2), holds. [F2, step 1.1, step 1.2]

3.1 For the converse qualification, take $V=g(X_{n+1})$ in (1). Combining (1) [step 1.1, step 1.2] with the stated present-state kernel identity gives $$\mathbb E[g(X_{n+1})\mid\mathcal F_n]=Kg(X_n).$$ Indicators recover the $K$-chain definition. Without the single-$K$ hypothesis, conditional independence alone allows time-inhomogeneous present-state kernels, so it would not justify the stronger homogeneous conclusion. Choice is used by the conditional-expectation interfaces throughout. [step 1.1, step 1.2] ∎
