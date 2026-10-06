---
id: lem-breaking-length-is-bounded-by-index-drop
kind: lemma
title: "Breaking length is bounded by the index drop"
status: draft
origin: pipeline
deps: [def-morse-smale-pair, def-broken-morse-trajectory, def-unparametrized-morse-trajectory-moduli-space, lem-broken-morse-trajectories-have-strictly-decreasing-critical-values-and-indices, cor-no-morse-smale-trajectories-for-nonpositive-index-drop, def-nondegenerate-critical-point-nullity-index-and-coindex, cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology, Part I Ch. 3, complete author PDF"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
      locator: "Ch. 3 Sec. 3.2.a, printed p. 60 (only decreasing indices contribute; examples)"
    - title: "Alexander F. Ritter, Part III Morse Homology (Cambridge lecture notes), Lectures 17-19, complete combined PDF"
      url: "https://people.maths.ox.ac.uk/ritter/morse-cambridge/combined.pdf"
      locator: "Lecture 18 Sec. 5.4 (the ordering $|p_1|>\\cdots>|p_{N+1}|$)"
dependency_level: 1
---

## Statement

Let $(f,X)$ be Morse--Smale on a closed manifold, let $p,q$ be critical points and let $(\gamma_1,\dots,\gamma_r)\in\overline{\mathcal M}(p,q)$ be a broken trajectory with intermediate points $p_1,\dots,p_{r-1}$ ([[def-broken-morse-trajectory]]). Then $\lambda(p)=\lambda(p_0)>\lambda(p_1)>\cdots>\lambda(p_r)=\lambda(q)$ with every drop at least one, hence $r\le\lambda(p)-\lambda(q)$. Consequently
$$\overline{\mathcal M}(p,q)=\bigsqcup_{r\ge1}\;\bigsqcup_{p=p_0>p_1>\cdots>p_r=q}\mathcal M(p_0,p_1)\times\cdots\times\mathcal M(p_{r-1},p_r),$$
where the inner union runs over the strings of critical points $p=p_0,p_1,\dots,p_r=q$ whose indices strictly decrease (written $p=p_0>p_1>\cdots>p_r=q$), is a finite disjoint union, and when $\lambda(p)-\lambda(q)=2$ every broken trajectory of length $r\ge2$ is once-broken, with exactly one intermediate critical point, of index $\lambda(p)-1$.

## Facts & Assumptions

**Given:** A Morse--Smale pair $(f,X)$ on a closed manifold, critical points $p,q$, and a broken trajectory $(\gamma_1,\dots,\gamma_r)\in\overline{\mathcal M}(p,q)$ with intermediate points $p_1,\dots,p_{r-1}$.

[F1] For every finite string of nonconstant components $p_0\to p_1\to\cdots\to p_r$ in a Morse--Smale pair, the critical values $f(p_i)$ and the Morse indices $\lambda(p_i)$ strictly decrease with $i$, and consequently $r\le\lambda(p_0)$ ([[lem-broken-morse-trajectories-have-strictly-decreasing-critical-values-and-indices]]).

[F2] A Morse function on a closed manifold has finitely many critical points, so the set of critical points of any fixed index is finite ([[cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points]]).

[F4] A broken trajectory of length $r$ in $\overline{\mathcal M}(p,q)$ consists of nonconstant components $\gamma_i\in\widetilde{\mathcal M}(p_{i-1},p_i)$, read as elements of the orbit sets $\mathcal M(p_{i-1},p_i)$; its length, its string of critical points and its tuple of components determine it ([[def-broken-morse-trajectory]], [[def-unparametrized-morse-trajectory-moduli-space]]).

[F5] $\lambda$ denotes the Morse index, an integer in $\{0,\dots,\dim M\}$ for critical points of a Morse function ([[def-nondegenerate-critical-point-nullity-index-and-coindex]]).

## Proof

**Proof technique:** direct.

1.1 The components of the given broken trajectory are nonconstant and run from $p_{i-1}$ to $p_i$, so [F1] applies to the string $p=p_0\to p_1\to\cdots\to p_r=q$ and gives $\lambda(p_0)>\lambda(p_1)>\cdots>\lambda(p_r)$; each difference $\lambda(p_{i-1})-\lambda(p_i)$ is a positive integer by [F5], hence at least one. [given, F1, F4, F5]

2.1 Telescoping the $r$ drops gives $\lambda(p)-\lambda(q)=\sum_{i=1}^{r}\bigl(\lambda(p_{i-1})-\lambda(p_i)\bigr)\ge r$, hence $r\le\lambda(p)-\lambda(q)$. [step 1.1, algebra]

2.2 Each broken trajectory determines its length $r$, its string of critical points $p=p_0,\dots,p_r=q$ and its tuple $(\gamma_1,\dots,\gamma_r)\in\mathcal M(p_0,p_1)\times\cdots\times\mathcal M(p_{r-1},p_r)$, and no two different data give the same broken trajectory by [F4]; conversely a tuple whose string satisfies $\lambda(p_{i-1})>\lambda(p_i)$ for every $i$ yields a broken trajectory, because the components are then nonconstant. Therefore $\overline{\mathcal M}(p,q)$ is the disjoint union of the products over $r\ge1$ and over such strings. Only strictly index-decreasing strings are included, so consecutive points are distinct and every moduli-space factor is defined. [F4, step 1.1]

3.1 If $\lambda(p)-\lambda(q)=2$ and a broken trajectory has length $r\ge2$, then step 2.1 gives $r\le2$, so $r=2$: the trajectory is once-broken and has exactly one intermediate critical point $p_1$. Its two drops are positive integers with sum $2$ by step 1.1, hence both equal $1$, that is $\lambda(p_1)=\lambda(p)-1$. [step 1.1, step 2.1, algebra]

4.1 The union is finite: by step 2.1 only the integers $1\le r\le\lambda(p)-\lambda(q)$ occur (and $\overline{\mathcal M}(p,q)=\varnothing$ when $\lambda(p)\le\lambda(q)$), and for each such $r$ the string is a finite sequence of critical points chosen from the finite set $\operatorname{Crit}(f)$ by [F2]; hence finitely many products occur, each contributing as a single term of the disjoint union irrespective of its cardinality. [F2, step 2.1, step 2.2] ∎
