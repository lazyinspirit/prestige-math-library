---
id: lem-factor-set-is-a-normalized-two-cocycle
kind: lemma
title: "The factor set satisfies the two-cocycle equation"
status: draft
origin: pipeline
deps: ["def-projective-representation-and-factor-set", "def-normalized-two-cocycle-and-two-coboundary"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "Britta Späth, Reduction theorems for some global-local conjectures — Definition 1.4 and the following cocycle identity, printed p. 3"
      url: "https://darstellungstheorie.uni-wuppertal.de/fileadmin/mathe/darstellungstheorie/LausanneBS_final.pdf"
    - title: "Clara Loh, Group Cohomology, SS 2019 — normalized two-cocycles"
      url: "https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf"
proof_strategy: direct
---

## Statement

The factor set of a normalized projective representation satisfies
$\alpha(1,q)=\alpha(q,1)=1$ and
$$\alpha(q,r)\alpha(qr,s)=\alpha(r,s)\alpha(q,rs)\qquad(q,r,s\in Q).$$

## Facts & Assumptions

**Given:** A finite group $Q$, a nonzero finite-dimensional complex vector space $V$, and a normalized projective representation $P:Q\to\operatorname{GL}(V)$ with factor set $\alpha$.

[F1] $P(1)=\operatorname{id}_V$ and $P(q)P(r)=\alpha(q,r)P(qr)$ for all $q,r\in Q$, with $\alpha(q,r)\in\mathbb C^\times$; every $P(q)$ is invertible. ([[def-projective-representation-and-factor-set]]).

[F2] For an abelian group $M$ with a $G$-action, written additively, a normalized two-cocycle is a function $f$ with $g\cdot f(h,k)-f(gh,k)+f(g,hk)-f(g,h)=0$ and $f(1,g)=f(g,1)=0$. Its two-coboundary formula is $(\delta u)(g,h)=g\cdot u(h)-u(gh)+u(g)$. ([[def-normalized-two-cocycle-and-two-coboundary]]).

[A1] Multiplication in $\operatorname{GL}(V)$ is associative and $\operatorname{id}_V$ is its identity.

## Proof

**Proof technique:** direct.

1.1 Relation [F1] at $q=1$ reads $P(1)P(r)=\alpha(1,r)P(r)$, that is $P(r)=\alpha(1,r)P(r)$ by [A1]; multiplying by the inverse of $P(r)$ gives $\alpha(1,r)=1$. Symmetrically, [F1] at $r=1$ gives $P(q)P(1)=\alpha(q,1)P(q)$, so $\alpha(q,1)=1$. [F1, A1, algebra]

1.2 Multiplying the relation of [F1] on the left by $P(q)$ and applying it twice, $P(q)\bigl(P(r)P(s)\bigr)=\alpha(r,s)P(q)P(rs)=\alpha(r,s)\alpha(q,rs)P(qrs)$. Applying it in the other order, $\bigl(P(q)P(r)\bigr)P(s)=\alpha(q,r)P(qr)P(s)=\alpha(q,r)\alpha(qr,s)P(qrs)$. [F1, algebra]

2.1 By associativity in $\operatorname{GL}(V)$, the two expressions of step 1.2 are equal; since $P(qrs)$ is invertible, cancelling it gives $\alpha(q,r)\alpha(qr,s)=\alpha(r,s)\alpha(q,rs)$. [step 1.2, F1, A1, algebra]

3.1 Reading the additive data of [F2] in multiplicative notation for the abelian group $\mathbb C^\times$ with trivial $Q$-action — sums become products, negatives become inverses and $0$ becomes $1$ — the cocycle equation $g\cdot f(h,k)-f(gh,k)+f(g,hk)-f(g,h)=0$ becomes $\alpha(h,k)\alpha(g,hk)=\alpha(gh,k)\alpha(g,h)$, which after renaming $(g,h,k)$ as $(q,r,s)$ is the equation of step 2.1, and $f(1,g)=f(g,1)=0$ becomes $\alpha(1,q)=\alpha(q,1)=1$. Thus $\alpha$ is a normalized two-cocycle on $Q$ with values in $\mathbb C^\times$ in the multiplicative form of the published convention. [F2, step 1.1, step 2.1] ∎
