---
id: def-twisted-group-algebra-for-a-factor-set
kind: definition
title: "Twisted group algebra of a factor set"
status: draft
origin: pipeline
deps: ["lem-factor-set-is-a-normalized-two-cocycle"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "Britta Späth, Reduction theorems for some global-local conjectures — Remark 1.5(b), printed p. 3"
      url: "https://darstellungstheorie.uni-wuppertal.de/fileadmin/mathe/darstellungstheorie/LausanneBS_final.pdf"
    - title: "Tammo tom Dieck, Representation Theory — §4.2, printed pp. 54–57"
      url: "https://www.uni-math.gwdg.de/tammo/d01.pdf"
---

## Definition

Let $Q$ be a finite group and let $\alpha:Q\times Q\to\mathbb C^\times$ be a
normalized two-cocycle in the multiplicative convention of
[[lem-factor-set-is-a-normalized-two-cocycle]], that is
$$\alpha(1,q)=\alpha(q,1)=1,\qquad \alpha(q,r)\alpha(qr,s)=\alpha(r,s)\alpha(q,rs)\qquad(q,r,s\in Q).$$
The **twisted group algebra** $\mathbb C^\alpha[Q]$ is the complex vector space
with basis the symbols $u_q$ indexed by $q\in Q$, equipped with the bilinear
product that is defined on basis elements by
$$u_q\,u_r:=\alpha(q,r)\,u_{qr}\qquad(q,r\in Q)$$
and extended to all of $\mathbb C^\alpha[Q]$ by bilinearity. The product is
determined by this rule, since the $u_q$ form a basis, and it is a proposed
associative unital algebra structure whose properties are verified in
[[lem-projective-representations-are-twisted-group-algebra-modules]]. The space
is finite-dimensional, of dimension $|Q|$ over $\mathbb C$.

The element $u_1$ is the proposed unit: by the defining rule and the
normalization, $u_1u_q=\alpha(1,q)u_q=u_q$ and
$u_qu_1=\alpha(q,1)u_q=u_q$ for every $q$. Each basis element is a candidate
unit of the algebra: from the cocycle equation at $(q,q^{-1},q)$ one gets
$\alpha(q,q^{-1})=\alpha(q^{-1},q)$, hence
$$u_q\,u_{q^{-1}}=\alpha(q,q^{-1})u_1,\qquad u_{q^{-1}}u_q=\alpha(q^{-1},q)u_1,$$
so $u_q$ has inverse $\alpha(q,q^{-1})^{-1}u_{q^{-1}}$. For $\alpha\equiv1$ the
construction is the ordinary complex group algebra $\mathbb C[Q]$, and the
twisted algebra is in general not commutative, because $\alpha(q,r)$ need not
equal $\alpha(r,q)$.
